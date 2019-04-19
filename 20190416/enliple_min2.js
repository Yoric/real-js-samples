/*
*License 정보
* enliple2.js 소스 모든 소유권은 (주)Enliple이 가집니다.
* 무단 배포, 수정을 금지합니다.
* 에버쿠키과 핑거프린트 없앤 버젼
* 배포시 난독화 진행(http://closure-compiler.appspot.com/home)
* ver 2.1 referrer 정보를 수집 여부 기능 추가함.
* adtruth 관련 소스 삭제함.
*/
//punycode 오픈소스
(function(root) {

    /** Detect free variables */
    var freeExports = typeof exports == 'object' && exports &&
        !exports.nodeType && exports;
    var freeModule = typeof module == 'object' && module &&
        !module.nodeType && module;
    var freeGlobal = typeof global == 'object' && global;
    if (
        freeGlobal.global === freeGlobal ||
        freeGlobal.window === freeGlobal ||
        freeGlobal.self === freeGlobal
    ) {
        root = freeGlobal;
    }

    /**
     * The `punycode` object.
     * @name punycode
     * @type Object
     */
    var punycode,

        /** Highest positive signed 32-bit float value */
        maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

        /** Bootstring parameters */
        base = 36,
        tMin = 1,
        tMax = 26,
        skew = 38,
        damp = 700,
        initialBias = 72,
        initialN = 128, // 0x80
        delimiter = '-', // '\x2D'

        /** Regular expressions */
        regexPunycode = /^xn--/,
        regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
        regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

        /** Error messages */
        errors = {
            'overflow': 'Overflow: input needs wider integers to process',
            'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
            'invalid-input': 'Invalid input'
        },

        /** Convenience shortcuts */
        baseMinusTMin = base - tMin,
        floor = Math.floor,
        stringFromCharCode = String.fromCharCode,

        /** Temporary variable */
        key,

        /** (custom) Key String for Base 64
         *  @author sghwang
         */
        keyStrBase64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

    /*--------------------------------------------------------------------------*/

    /**
     * A generic error utility function.
     * @private
     * @param {String} type The error type.
     * @returns {Error} Throws a `RangeError` with the applicable error message.
     */
    function error(type) {
        throw new RangeError(errors[type]);
    }

    /**
     * A generic `Array#map` utility function.
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} callback The function that gets called for every array
     * item.
     * @returns {Array} A new array of values returned by the callback function.
     */
    function map(array, fn) {
        var length = array.length;
        var result = [];
        while (length--) {
            result[length] = fn(array[length]);
        }
        return result;
    }

    /**
     * A simple `Array#map`-like wrapper to work with domain name strings or email
     * addresses.
     * @private
     * @param {String} domain The domain name or email address.
     * @param {Function} callback The function that gets called for every
     * character.
     * @returns {Array} A new string of characters returned by the callback
     * function.
     */
    function mapDomain(string, fn) {
        var parts = string.split('@');
        var result = '';
        if (parts.length > 1) {
            // In email addresses, only the domain name should be punycoded. Leave
            // the local part (i.e. everything up to `@`) intact.
            result = parts[0] + '@';
            string = parts[1];
        }
        // Avoid `split(regex)` for IE8 compatibility. See #17.
        string = string.replace(regexSeparators, '\x2E');
        var labels = string.split('.');
        var encoded = map(labels, fn).join('.');
        return result + encoded;
    }

    /**
     * Creates an array containing the numeric code points of each Unicode
     * character in the string. While JavaScript uses UCS-2 internally,
     * this function will convert a pair of surrogate halves (each of which
     * UCS-2 exposes as separate characters) into a single code point,
     * matching UTF-16.
     * @see `punycode.ucs2.encode`
     * @see <https://mathiasbynens.be/notes/javascript-encoding>
     * @memberOf punycode.ucs2
     * @name decode
     * @param {String} string The Unicode input string (UCS-2).
     * @returns {Array} The new array of code points.
     */
    function ucs2decode(string) {
        var output = [],
            counter = 0,
            length = string.length,
            value,
            extra;
        while (counter < length) {
            value = string.charCodeAt(counter++);
            if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
                // high surrogate, and there is a next character
                extra = string.charCodeAt(counter++);
                if ((extra & 0xFC00) == 0xDC00) { // low surrogate
                    output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
                } else {
                    // unmatched surrogate; only append this code unit, in case the next
                    // code unit is the high surrogate of a surrogate pair
                    output.push(value);
                    counter--;
                }
            } else {
                output.push(value);
            }
        }
        return output;
    }

    /**
     * Creates a string based on an array of numeric code points.
     * @see `punycode.ucs2.decode`
     * @memberOf punycode.ucs2
     * @name encode
     * @param {Array} codePoints The array of numeric code points.
     * @returns {String} The new Unicode string (UCS-2).
     */
    function ucs2encode(array) {
        return map(array, function(value) {
            var output = '';
            if (value > 0xFFFF) {
                value -= 0x10000;
                output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
                value = 0xDC00 | value & 0x3FF;
            }
            output += stringFromCharCode(value);
            return output;
        }).join('');
    }

    /**
     * Converts a basic code point into a digit/integer.
     * @see `digitToBasic()`
     * @private
     * @param {Number} codePoint The basic numeric code point value.
     * @returns {Number} The numeric value of a basic code point (for use in
     * representing integers) in the range `0` to `base - 1`, or `base` if
     * the code point does not represent a value.
     */
    function basicToDigit(codePoint) {
        if (codePoint - 48 < 10) {
            return codePoint - 22;
        }
        if (codePoint - 65 < 26) {
            return codePoint - 65;
        }
        if (codePoint - 97 < 26) {
            return codePoint - 97;
        }
        return base;
    }

    /**
     * Converts a digit/integer into a basic code point.
     * @see `basicToDigit()`
     * @private
     * @param {Number} digit The numeric value of a basic code point.
     * @returns {Number} The basic code point whose value (when used for
     * representing integers) is `digit`, which needs to be in the range
     * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
     * used; else, the lowercase form is used. The behavior is undefined
     * if `flag` is non-zero and `digit` has no uppercase form.
     */
    function digitToBasic(digit, flag) {
        //  0..25 map to ASCII a..z or A..Z
        // 26..35 map to ASCII 0..9
        return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
    }

    /**
     * Bias adaptation function as per section 3.4 of RFC 3492.
     * https://tools.ietf.org/html/rfc3492#section-3.4
     * @private
     */
    function adapt(delta, numPoints, firstTime) {
        var k = 0;
        delta = firstTime ? floor(delta / damp) : delta >> 1;
        delta += floor(delta / numPoints);
        for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
            delta = floor(delta / baseMinusTMin);
        }
        return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
    }

    /**
     * Converts a Punycode string of ASCII-only symbols to a string of Unicode
     * symbols.
     * @memberOf punycode
     * @param {String} input The Punycode string of ASCII-only symbols.
     * @returns {String} The resulting string of Unicode symbols.
     */
    function decode(input) {
        // Don't use UCS-2
        var output = [],
            inputLength = input.length,
            out,
            i = 0,
            n = initialN,
            bias = initialBias,
            basic,
            j,
            index,
            oldi,
            w,
            k,
            digit,
            t,
            /** Cached calculation results */
            baseMinusT;

        // Handle the basic code points: let `basic` be the number of input code
        // points before the last delimiter, or `0` if there is none, then copy
        // the first basic code points to the output.

        basic = input.lastIndexOf(delimiter);
        if (basic < 0) {
            basic = 0;
        }

        for (j = 0; j < basic; ++j) {
            // if it's not a basic code point
            if (input.charCodeAt(j) >= 0x80) {
                error('not-basic');
            }
            output.push(input.charCodeAt(j));
        }

        // Main decoding loop: start just after the last delimiter if any basic code
        // points were copied; start at the beginning otherwise.

        for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

            // `index` is the index of the next character to be consumed.
            // Decode a generalized variable-length integer into `delta`,
            // which gets added to `i`. The overflow checking is easier
            // if we increase `i` as we go, then subtract off its starting
            // value at the end to obtain `delta`.
            for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

                if (index >= inputLength) {
                    error('invalid-input');
                }

                digit = basicToDigit(input.charCodeAt(index++));

                if (digit >= base || digit > floor((maxInt - i) / w)) {
                    error('overflow');
                }

                i += digit * w;
                t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

                if (digit < t) {
                    break;
                }

                baseMinusT = base - t;
                if (w > floor(maxInt / baseMinusT)) {
                    error('overflow');
                }

                w *= baseMinusT;

            }

            out = output.length + 1;
            bias = adapt(i - oldi, out, oldi == 0);

            // `i` was supposed to wrap around from `out` to `0`,
            // incrementing `n` each time, so we'll fix that now:
            if (floor(i / out) > maxInt - n) {
                error('overflow');
            }

            n += floor(i / out);
            i %= out;

            // Insert `n` at position `i` of the output
            output.splice(i++, 0, n);

        }

        return ucs2encode(output);
    }

    /**
     * Converts a string of Unicode symbols (e.g. a domain name label) to a
     * Punycode string of ASCII-only symbols.
     * @memberOf punycode
     * @param {String} input The string of Unicode symbols.
     * @returns {String} The resulting Punycode string of ASCII-only symbols.
     */
    function encode(input) {
        var n,
            delta,
            handledCPCount,
            basicLength,
            bias,
            j,
            m,
            q,
            k,
            t,
            currentValue,
            output = [],
            /** `inputLength` will hold the number of code points in `input`. */
            inputLength,
            /** Cached calculation results */
            handledCPCountPlusOne,
            baseMinusT,
            qMinusT;

        // Convert the input in UCS-2 to Unicode
        input = ucs2decode(input);

        // Cache the length
        inputLength = input.length;

        // Initialize the state
        n = initialN;
        delta = 0;
        bias = initialBias;

        // Handle the basic code points
        for (j = 0; j < inputLength; ++j) {
            currentValue = input[j];
            if (currentValue < 0x80) {
                output.push(stringFromCharCode(currentValue));
            }
        }

        handledCPCount = basicLength = output.length;

        // `handledCPCount` is the number of code points that have been handled;
        // `basicLength` is the number of basic code points.

        // Finish the basic string - if it is not empty - with a delimiter
        if (basicLength) {
            output.push(delimiter);
        }

        // Main encoding loop:
        while (handledCPCount < inputLength) {

            // All non-basic code points < n have been handled already. Find the next
            // larger one:
            for (m = maxInt, j = 0; j < inputLength; ++j) {
                currentValue = input[j];
                if (currentValue >= n && currentValue < m) {
                    m = currentValue;
                }
            }

            // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
            // but guard against overflow
            handledCPCountPlusOne = handledCPCount + 1;
            if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
                error('overflow');
            }

            delta += (m - n) * handledCPCountPlusOne;
            n = m;

            for (j = 0; j < inputLength; ++j) {
                currentValue = input[j];

                if (currentValue < n && ++delta > maxInt) {
                    error('overflow');
                }

                if (currentValue == n) {
                    // Represent delta as a generalized variable-length integer
                    for (q = delta, k = base; /* no condition */; k += base) {
                        t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
                        if (q < t) {
                            break;
                        }
                        qMinusT = q - t;
                        baseMinusT = base - t;
                        output.push(
                            stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
                        );
                        q = floor(qMinusT / baseMinusT);
                    }

                    output.push(stringFromCharCode(digitToBasic(q, 0)));
                    bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
                    delta = 0;
                    ++handledCPCount;
                }
            }

            ++delta;
            ++n;

        }
        return output.join('');
    }

    /**
     * Decode in Base64
     * @author sghwang
     */
    function decodeBase64(input) {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;

        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

        while (i < input.length) {
            enc1 = keyStrBase64.indexOf(input.charAt(i++));
            enc2 = keyStrBase64.indexOf(input.charAt(i++));
            enc3 = keyStrBase64.indexOf(input.charAt(i++));
            enc4 = keyStrBase64.indexOf(input.charAt(i++));

            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;

            output = output + String.fromCharCode(chr1);

            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }
        }

        return output;
    }

    /**
     * Converts a Punycode string representing a domain name or an email address
     * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
     * it doesn't matter if you call it on a string that has already been
     * converted to Unicode.
     * @memberOf punycode
     * @param {String} input The Punycoded domain name or email address to
     * convert to Unicode.
     * @returns {String} The Unicode representation of the given Punycode
     * string.
     */
    function toUnicode(input) {
        return mapDomain(input, function(string) {
            return regexPunycode.test(string)
                ? decode(string.slice(4).toLowerCase())
                : string;
        });
    }

    /**
     * Converts a Unicode string representing a domain name or an email address to
     * Punycode. Only the non-ASCII parts of the domain name will be converted,
     * i.e. it doesn't matter if you call it with a domain that's already in
     * ASCII.
     * @memberOf punycode
     * @param {String} input The domain name or email address to convert, as a
     * Unicode string.
     * @returns {String} The Punycode representation of the given domain name or
     * email address.
     */
    function toASCII(input) {
        return mapDomain(input, function(string) {
            if(document.charset == "euc-kr"){
                if(string.indexOf("\ub2f7\ucef4") != -1){
                    string = string.replace("\ub2f7\ucef4", "xn--mk1bu44c");
                }
            }else{
                // aaa는 난독화 후 필히 닷컴 으로 변경할것.(한글로)
                if(string.indexOf("aaa") != -1){
                    string = string.replace("aaa", "xn--mk1bu44c");
                }
            }

            if(-1 == string.indexOf("https://") && -1 == string.indexOf("http://")
                && -1 != string.indexOf("/")){
                return string;
            }

            var afterStr = "";
            if(string.indexOf("?") != -1){
                afterStr = string.substring(string.indexOf("?"));
                string = string.substring(0, string.indexOf("?"));
            }

            if(string.indexOf("http://") != -1){
                string = string.substring(7);
                return regexNonASCII.test(string)
                    ? 'http://'+'xn--' + encode(string)+afterStr
                    : 'http://'+string+afterStr;
            }else if(string.indexOf("https://") != -1){
                string = string.substring(8);
                return regexNonASCII.test(string)
                    ? 'https://'+'xn--' + encode(string)+afterStr
                    : 'https://'+string+afterStr;
            }else{
                return regexNonASCII.test(string)
                    ? 'xn--' + encode(string)+afterStr
                    : string+afterStr;
            }
        });
    }

    /*--------------------------------------------------------------------------*/

    /** Define the public API */
    punycode = {
        /**
         * A string representing the current Punycode.js version number.
         * @memberOf punycode
         * @type String
         */
        'version': '1.4.1',
        /**
         * An object of methods to convert from JavaScript's internal character
         * representation (UCS-2) to Unicode code points, and back.
         * @see <https://mathiasbynens.be/notes/javascript-encoding>
         * @memberOf punycode
         * @type Object
         */
        'ucs2': {
            'decode': ucs2decode,
            'encode': ucs2encode
        },
        'decode': decode,
        'encode': encode,
        'toASCII': toASCII,
        'toUnicode': toUnicode,
        'decodeBase64': decodeBase64
    };

    /** Expose `punycode` */
    // Some AMD build optimizers, like r.js, check for specific condition patterns
    // like the following:
    if (
        typeof define == 'function' &&
        typeof define.amd == 'object' &&
        define.amd
    ) {
        define('punycode', function() {
            return punycode;
        });
    } else if (freeExports && freeModule) {
        if (module.exports == freeExports) {
            // in Node.js, io.js, or RingoJS v0.8.0+
            freeModule.exports = punycode;
        } else {
            // in Narwhal or RingoJS v0.7.0-
            for (key in punycode) {
                punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
            }
        }
    } else {
        // in Rhino or a web browser
        root.punycode = punycode;
    }

}(this));


// RF, RFShop, Conversion 관련 스크립트
(function (name, context, definition) {
    "use strict";
    if (typeof module !== "undefined" && module.exports) { module.exports = definition(); }
    else if (typeof define === "function" && define.amd) { define(name,definition); }
    else { context[name] = definition(); }
})("EN", this, function() {
    "use strict";

    var document = window.document;
    var keys = [];
    var pc = punycode;
    var sslFlag = false;
    if (!String.prototype.trim) {
        String.prototype.trim = function () {
            return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
        };
    }
    var EN = function(options) {
        var defaultOptions = {
            servlet: "/servlet/rd?",
            isMobile: false,
            rdDomn: "http://www.megadata.co.kr",
            referrerUseYn : "Y"

        };
        this.options = this.extend(options, defaultOptions);
        if(location.protocol=="https:"){
            this.options.rdDomn = "https://log.mediacategory.com";
        }

        // var UserAgent = navigator.userAgent;
        // if (UserAgent.match(/iPhone|iPad|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null
        //     || UserAgent.match(/LG|lg|SAMSUNG|Samsung/) != null) {
        //     this.options.isMobile = true;
        // }else{
        //     this.options.isMobile = false;
        // }

        // // referrer
        // var referrerUrl = document.referrer;
        // if(referrerUrl.indexOf("naver.com") != -1
        //     || referrerUrl.indexOf("yahoo.com") != -1
        //     || referrerUrl.indexOf("cyworld.search.empas.com") != -1
        //     || referrerUrl.indexOf("search.nate.com") != -1
        //     || referrerUrl.indexOf("search.daum.net") != -1
        //     || referrerUrl.indexOf("search.d.paran.com") != -1
        //     || referrerUrl.indexOf("search.chol.com") != -1
        //     || referrerUrl.indexOf("www.google.co.kr") != -1
        //     || referrerUrl.indexOf("kr.hanafos.search.yahoo.com") != -1
        //     || referrerUrl.indexOf("search.zum.com") != -1
        //     || referrerUrl.indexOf("huvle.com") != -1
        //     || referrerUrl.indexOf("ktguide.com") != -1
        // ){
        //     this.options.referrerUseYn = "Y";
        // }
    };

    /**
     * 입력 URL을 iframe을 이용하여 비동기로 호출.
     *
     * @param url           호출할 URL
     * @param callbackFn    콜백 함수
     * @param timeout       타임아웃(ms)
     *                          - 기본값은 0 ms.
     * @author sghwang
     */
    var callUrlAsync = function(url, callbackFn, timeout) {
        var createIframe = function() {
            var iframe = document.createElement("iframe");
            iframe.src = url;
            iframe.width = "0";
            iframe.height = "0";
            iframe.onload = function () {
                if (typeof callbackFn === 'function') {
                    callbackFn();
                }
            };
            if (document.body) {
                document.body.appendChild(iframe);
            } else {
                var html = document.getElementsByTagName("html")[0];
                var body = document.createElement("body");
                html.appendChild(body);
                body.appendChild(iframe);
            }
        };

        if (typeof timeout !== 'undefined') {
            setTimeout(createIframe, timeout);
        } else {
            createIframe();
        }
    };

    /**
     * 특정 파라미터를 제외한 나머지 파라미터의 param string 재구성.
     *
     * @param url           대상 URL
     * @param paramName     제외할 파라미터 이름
     * @returns {string}    param string (파라미터를 찾지 못하면 현재 param string을 그대로 리턴)
     * @authror sghwang
     */
    var getParamStrExceptOne = function (url, paramName) {
        // param string을 추출하고 다시 "&" 구분자를 잘라서 배열에 넣는다.
        var paramArr = null;
        if (url.indexOf("?") != -1) {
            paramArr = (url.substring(url.indexOf("?") + 1, url.length)).split("&");
        } else {
            paramArr = url.split("&");
        }

        // 파라미터의 변수명에 해당하는 엘리먼트 인덱스 세팅.
        var idx = -1;
        for (var i = 0; i < paramArr.length; i++) {
            // temp[0] : param name
            // temp[1] : param value
            var temp = paramArr[i].split("=");

            if (temp[0].toUpperCase() == paramName.toUpperCase()) {
                idx = i;
                break;
            }
        }

        // idx에 해당하는 배열 엘리먼트 제거.
        if (idx > -1) {
            paramArr.splice(idx, 1);
        }

        // param string 구성 후 리턴.
        var paramStr = (paramArr.length > 0)
            ? "?" + paramArr.join("&")
            : "";
        return paramStr;
    };

    /**
     * string에서 URL 정보를 담은 객체를 리턴. (IE에서는 URL API를 지원하지 않아 추가함)
     *
     * @param url       대상 URL
     * @author sghwang
     */
    var getUrlInfoFromString = function (url) {
        // string이 아니거나 결과가 없을 경우 null. 결과가 있으면 배열.
        var matches = (typeof url !== 'string')
            ? null
            : url.match(/^([a-zA-Z0-9\-]+:)?\/\/([^\/?#]+)(?:[\/?#]|$)/i);

        // 위에서 null일 경우 그대로 null 리턴. (각 property의 기본값은 빈 문자열)
        var urlInfo = matches && {
            origin : matches[0] || ""     // ex) "https://www.mediacategory.com/", "//www.mediacategory.com/"
            , protocol : matches[1] || ""   // ex) "https:"
            , host : matches[2] || ""       // ex) "www.mediacategory.com"
        };

        return urlInfo;
    };

    EN.prototype = {
        extend: function(source, target) {
            if (source == null) { return target; }
            for (var k in source) {
                if(source[k] != null && target[k] !== source[k]) {
                    target[k] = source[k];
                }
            }
            return target;
        },

        each: function (obj, iterator, context) {
            if (obj === null) {
                return;
            }
            if (this.nativeForEach && obj.forEach === this.nativeForEach) {
                obj.forEach(iterator, context);
            } else if (obj.length === +obj.length) {
                for (var i = 0, l = obj.length; i < l; i++) {
                    if (iterator.call(context, obj[i], i, obj) === {}) { return; }
                }
            } else {
                for (var key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        if (iterator.call(context, obj[key], key, obj) === {}) { return; }
                    }
                }
            }
        },

        /**
         * SSL 전송 여부
         * @param flag
         */
        setSSL: function(flag){
            if(flag){
                this.options.rdDomn = "https://log.mediacategory.com";
            }else{
                this.options.rdDomn = "http://www.megadata.co.kr";
            }

        },


        /**
         * 파라미터 셋팅 function
         * @param param
         * @param val
         */
        setData: function(param, val){
            var chk = false;
            this.each(keys, function(pair) {
                if(pair.key == param ){
                    pair.value = val;
                    chk = true;
                }
            });

            if(!chk){
                keys.push({key: param, value: val});
            }
        },

        getData: function(name){
            for (var idx in keys) {
                if(keys[idx].key == name){
                    return keys[idx].value;
                }
            }
            return null;
        },

        /**
         * RF 정보 전송
         */
        sendRf: function() {

            var isForm = this.getData("form");
            if (isForm == null || isForm == '') {
                if (this.options.referrerUseYn == "Y") {
                    this.setData("form", encodeURIComponent(pc.toASCII(document.referrer)));
                }
            }

            var isUrl = this.getData("url");
            if (isUrl == null || isUrl == '') {
                this.setData("url", encodeURIComponent(pc.toASCII(window.location.href)));
            }

            this.setData("rdType", "RF");
            var param = this.paramData();
            keys = [];

            /** 구글 쇼핑 유입확인 (@author sghwang) **/
            var drcUrlParam = this.getParam(pc.toASCII(window.location.href), "enlipleMBDCEnc");
            if (drcUrlParam) {

                // socail link start
                if(window.location.href.indexOf('skin-skin') > 0) return;

                var hostnm = window.location.hostname;
                var head = document.getElementsByTagName('head').item(0);
                var script = document.createElement('script');
                script.src = 'https://cdn.megadata.co.kr/js/socialLink/social_sns_config_min.js';
                script.type = 'text/javascript';
                script.defer=true;
                script.onload = function () {
                    f_enliple_sns_mkt_func.pageView();
                }
                head.appendChild(script);
                // socail link end

                // decoding: UTF-8 -> Base64
                drcUrlParam = pc.decodeBase64(decodeURIComponent(drcUrlParam));
                drcUrlParam = pc.toASCII(drcUrlParam);
                var drcUrl = "//www.mediacategory.com/servlet/drc?" + drcUrlParam + "&withoutLanding=true";
                var rfUrl = "//log.mediacategory.com/servlet/rd?" + param;

                /*
                 * 구글 쇼핑에서 유입될 경우 같은 "ip_info" 쿠키를 갖도록 하기 위해 iframe을 이용해 콜백으로 차례로 호출.
                 *
                 * this.send() 메소드에서는 image를 이용해 호출하는데
                 * image와 같은 리소스는 "load" 이벤트에서 로드되고, iframe은 "DOMContentLoaded" 이벤트에서 로드되므로
                 * 비동기 호출이지만 동기적으로 하기 위해 iframe을 이용.
                 */
                // rf 호출
                callUrlAsync(rfUrl, function() {
                    // drc 호출
                    callUrlAsync(drcUrl, function () {
                        // 쿠키 카피
                        callUrlAsync("//www.dreamsearch.or.kr/cookies/sendChargeCookie.html", null, 300);
                    });
                });

                // 브라우저의 URL에서 인식 코드 제거
                var resultPath = window.location.pathname + getParamStrExceptOne(window.location.href, "enlipleMBDCEnc");
                if (history.replaceState) {
                    // 지원: IE 10+, Edge, Chrome 5+ 등
                    history.replaceState(null, null, resultPath);
                }
            } else {
                this.send(param);
            }
        },

        /**
         * RF Shop Log 정보 전송
         */
        sendRfShop: function(){
            this.setData("gb", "02");

            var isForm = this.getData("form");
            if(isForm == null || isForm == '' ){
                if(this.options.referrerUseYn == "Y"){
                    this.setData("form", encodeURIComponent(pc.toASCII(document.referrer)));
                }
            }
            var isPurl = this.getData("purl");
            if(isPurl == null || isPurl == '' ){
                this.setData("purl", encodeURIComponent(pc.toASCII(window.location.href)));
            }
            var isUrl = this.getData("url");
            if(isUrl == null || isUrl == '' ){
                this.setData("url", encodeURIComponent(pc.toASCII(window.location.href)));
            }
            this.setData("rdType", "RFSHOP");

            var param = this.paramData();

            this.send(param);

            // siciallink -start
            if(window.location.href.indexOf('skin-skin') > 0) return;
            var paramName2 = "pcode";
            var returnValue2;
            var url2 = param;
            var parameters2 = (url2.slice(url2.indexOf('?') + 1, url2.length)).split('&');
            for (var i2 = 0; i2 < parameters2.length; i2++) {
                var varName2 = parameters2[i2].split('=')[0];
                if (varName2.toUpperCase() == paramName2.toUpperCase()) {
                    returnValue2 = parameters2[i2].split('=')[1];
                }
            }
            var paramName3 = "userid";
            var returnValue3;
            var url3 = param;
            var parameters3 = (url3.slice(url3.indexOf('?') + 1, url3.length)).split('&');
            for (var i3 = 0; i3 < parameters3.length; i3++) {
                var varName3 = parameters3[i3].split('=')[0];
                if (varName3.toUpperCase() == paramName3.toUpperCase()) {
                    returnValue3 = parameters3[i3].split('=')[1];
                }
            }
            var paramName4 = "pnm";
            var returnValue4;
            var url4 = param;
            var parameters4 = (url4.slice(url4.indexOf('?') + 1, url4.length)).split('&');
            for (var i4 = 0; i4 < parameters4.length; i4++) {
                var varName4 = parameters4[i4].split('=')[0];
                if (varName4.toUpperCase() == paramName4.toUpperCase()) {
                    returnValue4 = parameters4[i4].split('=')[1];
                    returnValue4 = decodeURIComponent(decodeURIComponent(returnValue4));
                }
            }
            var paramName = "price";
            var returnValue;
            var url = param;
            var parameters = (url.slice(url.indexOf('?') + 1, url.length)).split('&');
            for (var i = 0; i < parameters.length; i++) {
                var varName = parameters[i].split('=')[0];
                if (varName.toUpperCase() == paramName.toUpperCase()) {
                    returnValue = parameters[i].split('=')[1];
                }
            }
            returnValue = returnValue.replace(/,/gi, "").replace(/\s/gi, "").replace("원","").replace(/￦/gi, "").replace(/won/gi, "");
            var hostnm = window.location.hostname;
            var head = document.getElementsByTagName('head').item(0);
            var script = document.createElement('script');
            script.src = 'https://cdn.megadata.co.kr/js/socialLink/social_sns_config_min.js';
            script.type = 'text/javascript';
            script.defer=true;
            script.onload = function () {
                var config = {};
                config.returnPrice = returnValue;	//price
                config.returnPcode = returnValue2;	//pcode
                config.returnUserId = returnValue3;	//userid
                config.returnPnm = returnValue4;	//pnm
                f_enliple_sns_mkt_func.viewContent(config);
            }
            head.appendChild(script);
            // siciallink -end

        },

        /**
         * 찜, 위쉬 리스트 정보 전송
         */
        sendWish: function(){
            this.setData("gb", "03");
            var isForm = this.getData("form");
            if(isForm == null || isForm == '' ){
                if(this.options.referrerUseYn == "Y"){
                    this.setData("form", encodeURIComponent(pc.toASCII(document.referrer)));
                }
            }
            var isPurl = this.getData("purl");
            if(isPurl == null || isPurl == '' ){
                this.setData("purl", encodeURIComponent(pc.toASCII(window.location.href)));
            }
            var isUrl = this.getData("url");
            if(isUrl == null || isUrl == '' ){
                this.setData("url", encodeURIComponent(pc.toASCII(window.location.href)));
            }
            this.setData("rdType", "RFSHOP");
            var param = this.paramData();
            this.send(param);


            // siciallink -start
            if(window.location.href.indexOf('skin-skin') > 0) return;
            var paramName2 = "pcode";
            var returnValue2;
            var url2 = param;
            var parameters2 = (url2.slice(url2.indexOf('?') + 1, url2.length)).split('&');
            for (var i2 = 0; i2 < parameters2.length; i2++) {
                var varName2 = parameters2[i2].split('=')[0];
                if (varName2.toUpperCase() == paramName2.toUpperCase()) {
                    returnValue2 = parameters2[i2].split('=')[1];
                }
            }
            var paramName3 = "userid";
            var returnValue3;
            var url3 = param;
            var parameters3 = (url3.slice(url3.indexOf('?') + 1, url3.length)).split('&');
            for (var i3 = 0; i3 < parameters3.length; i3++) {
                var varName3 = parameters3[i3].split('=')[0];
                if (varName3.toUpperCase() == paramName3.toUpperCase()) {
                    returnValue3 = parameters3[i3].split('=')[1];
                }
            }
            var paramName4 = "pnm";
            var returnValue4;
            var url4 = param;
            var parameters4 = (url4.slice(url4.indexOf('?') + 1, url4.length)).split('&');
            for (var i4 = 0; i4 < parameters4.length; i4++) {
                var varName4 = parameters4[i4].split('=')[0];
                if (varName4.toUpperCase() == paramName4.toUpperCase()) {
                    returnValue4 = parameters4[i4].split('=')[1];
                    returnValue4 = decodeURIComponent(decodeURIComponent(returnValue4));
                }
            }
            var paramName = "price";
            var returnValue;
            var url = param;
            var parameters = (url.slice(url.indexOf('?') + 1, url.length)).split('&');
            for (var i = 0; i < parameters.length; i++) {
                var varName = parameters[i].split('=')[0];
                if (varName.toUpperCase() == paramName.toUpperCase()) {
                    returnValue = parameters[i].split('=')[1];
                }
            }
            returnValue = returnValue.replace(/,/gi, "").replace(/\s/gi, "").replace("원","").replace(/￦/gi, "").replace(/won/gi, "");
            var hostnm = window.location.hostname;
            var head = document.getElementsByTagName('head').item(0);
            var script = document.createElement('script');
            script.src = 'https://cdn.megadata.co.kr/js/socialLink/social_sns_config_min.js';
            script.type = 'text/javascript';
            script.defer=true;
            script.onload = function () {
                var config = {};
                config.returnPrice = returnValue;	//price
                config.returnPcode = returnValue2;	//pcode
                config.returnUserId = returnValue3;	//userid
                config.returnPnm = returnValue4;	//pnm
                f_enliple_sns_mkt_func.viewContent(config);
            }
            head.appendChild(script);
            // siciallink -end

        },

        /**
         * 장바구니 정보 전송
         */
        sendCart: function(){
            this.setData("gb", "01");
            var isForm = this.getData("form");
            if(isForm == null || isForm == '' ){
                if(this.options.referrerUseYn == "Y"){
                    this.setData("form", encodeURIComponent(pc.toASCII(document.referrer)));
                }
            }
            var isPurl = this.getData("purl");
            if(isPurl == null || isPurl == '' ){
                this.setData("purl", encodeURIComponent(pc.toASCII(window.location.href)));
            }
            var isUrl = this.getData("url");
            if(isUrl == null || isUrl == '' ){
                this.setData("url", encodeURIComponent(pc.toASCII(window.location.href)));
            }
            this.setData("rdType", "RFSHOP");
            var param = this.paramData();
            this.send(param);

            // siciallink -start
            if(window.location.href.indexOf('skin-skin') > 0) return;
            var paramName2 = "pcode";
            var returnValue2;
            var url2 = param;
            var parameters2 = (url2.slice(url2.indexOf('?') + 1, url2.length)).split('&');
            for (var i2 = 0; i2 < parameters2.length; i2++) {
                var varName2 = parameters2[i2].split('=')[0];
                if (varName2.toUpperCase() == paramName2.toUpperCase()) {
                    returnValue2 = parameters2[i2].split('=')[1];
                }
            }
            var paramName3 = "userid";
            var returnValue3;
            var url3 = param;
            var parameters3 = (url3.slice(url3.indexOf('?') + 1, url3.length)).split('&');
            for (var i3 = 0; i3 < parameters3.length; i3++) {
                var varName3 = parameters3[i3].split('=')[0];
                if (varName3.toUpperCase() == paramName3.toUpperCase()) {
                    returnValue3 = parameters3[i3].split('=')[1];
                }
            }
            var paramName4 = "pnm";
            var returnValue4;
            var url4 = param;
            var parameters4 = (url4.slice(url4.indexOf('?') + 1, url4.length)).split('&');
            for (var i4 = 0; i4 < parameters4.length; i4++) {
                var varName4 = parameters4[i4].split('=')[0];
                if (varName4.toUpperCase() == paramName4.toUpperCase()) {
                    returnValue4 = parameters4[i4].split('=')[1];
                    returnValue4 = decodeURIComponent(decodeURIComponent(returnValue4));
                }
            }
            //var revalue = "['"+returnValue3+returnValue2+"']";
            var paramName = "price";
            var returnValue;
            var url = param;
            var parameters = (url.slice(url.indexOf('?') + 1, url.length)).split('&');
            for (var i = 0; i < parameters.length; i++) {
                var varName = parameters[i].split('=')[0];
                if (varName.toUpperCase() == paramName.toUpperCase()) {
                    returnValue = parameters[i].split('=')[1];
                }
            }
            returnValue = returnValue.replace(/,/gi, "").replace(/\s/gi, "").replace("원","").replace(/￦/gi, "").replace(/won/gi, "");
            var hostnm = window.location.hostname;
            //var configId = hostnm.replace(/^www\.|^m\./.exec(hostnm), "");
            var head = document.getElementsByTagName('head').item(0);
            var script = document.createElement('script');
            script.src = 'https://cdn.megadata.co.kr/js/socialLink/social_sns_config_min.js';
            script.type = 'text/javascript';
            script.defer=true;
            script.onload = function () {
                var config = {};
                config.returnPrice = returnValue;	//price
                config.returnPcode = returnValue2;	//pcode
                config.returnUserId = returnValue3;	//userid
                config.returnPnm = returnValue4;	//pnm
                f_enliple_sns_mkt_func.viewCart(config);
            }
            head.appendChild(script);
            // siciallink -end

        },

        /**
         * 컨버전 정보 전송
         */
        sendConv: function(){

            this.setData("rdType", "CONV");
            var param = this.paramData();
            keys = [];

            this.send(param);

            // siciallink -start
            if(window.location.href.indexOf('skin-skin') > 0) return;
            var paramName = "price";
            var returnValue;
            var url = param;
            var parameters = (url.slice(url.indexOf('?') + 1, url.length)).split('&');
            for (var i = 0; i < parameters.length; i++) {
                var varName = parameters[i].split('=')[0];
                if (varName.toUpperCase() == paramName.toUpperCase()) {
                    returnValue = parameters[i].split('=')[1];
                }
            }
            returnValue = returnValue.replace(/,/gi, "").replace(/\s/gi, "").replace("원","").replace(/￦/gi, "").replace(/won/gi, "");
            var paramName2 = "pcode";
            var returnValue2;
            var url2 = param;
            var parameters2 = (url2.slice(url2.indexOf('?') + 1, url2.length)).split('&');
            for (var i2 = 0; i2 < parameters2.length; i2++) {
                var varName2 = parameters2[i2].split('=')[0];
                if (varName2.toUpperCase() == paramName2.toUpperCase()) {
                    returnValue2 = parameters2[i2].split('=')[1];
                }
            }
            var paramName3 = "uid";
            var returnValue3;
            var url3 = param;
            var parameters3 = (url3.slice(url3.indexOf('?') + 1, url3.length)).split('&');
            for (var i3 = 0; i3 < parameters3.length; i3++) {
                var varName3 = parameters3[i3].split('=')[0];
                if (varName3.toUpperCase() == paramName3.toUpperCase()) {
                    returnValue3 = parameters3[i3].split('=')[1];
                }
            }
            var paramName4 = "ordcode";
            var returnValue4;
            var url4 = param;
            var parameters4 = (url4.slice(url4.indexOf('?') + 1, url4.length)).split('&');
            for (var i4 = 0; i4 < parameters4.length; i4++) {
                var varName4 = parameters4[i4].split('=')[0];
                if (varName4.toUpperCase() == paramName4.toUpperCase()) {
                    returnValue4 = parameters4[i4].split('=')[1];
                }
            }
            var revalue = returnValue3+returnValue2;
            var products = [];
            var products_name = [];
            var products_category = [];
            var products_ka = [];
            var total_quantity = 0;
            try{
                var product_list = EC_FRONT_EXTERNAL_SCRIPT_VARIABLE_DATA.order_product;

                for(var i = 0; i < product_list.length; ++i) {
                    var product =  EC_FRONT_EXTERNAL_SCRIPT_VARIABLE_DATA.order_product[i];
                    products.push({'id' : returnValue3 + product.product_no, 'quantity' : product.quantity, 'item_price' : product.product_price});
                    products_name.push(product.product_name);
                    products_category.push(product.category_no_1);
                    total_quantity += product.quantity;
                };
            } catch(e){}
            var hostnm = window.location.hostname;
            var head = document.getElementsByTagName('head').item(0);
            var script = document.createElement('script');
            script.src = 'https://cdn.megadata.co.kr/js/socialLink/social_sns_config_min.js';
            script.type = 'text/javascript';
            script.defer=true;
            script.onload = function () {
                var config = {};
                config.products = products;
                config.products_name = products_name;
                config.products_category = products_category;
                config.total_quantity = total_quantity;
                config.revalue = revalue;
                config.returnPrice = returnValue;
                config.returnUserId = returnValue3;
                config.returnOrdcode = returnValue4;
                config.product_list = product_list;
                f_enliple_sns_mkt_func.purchase(config);
            }
            head.appendChild(script);
            // siciallink -end

        },

        /**
         * 인증키생성 정보 전송
         */
        sendKey: function(){
            this.setData("rdType", "AUID");
            var param = this.paramData();
            keys = [];
            // 무조건 SSL 전송함
            this.options.rdDomn = "https://log.mediacategory.com";
            this.send(param);
        },

        getParam : function(url, paramName){
            //현재 주소를 decoding
            //파라미터만 자르고, 다시 &그분자를 잘라서 배열에 넣는다.
            var paramArr = null;
            if(url.indexOf("?") != -1){
                paramArr = (url.substring(url.indexOf("?")+1,url.length)).split("&");
            }else{
                paramArr = url.split("&");
            }


            for(var i = 0 ; i < paramArr.length ; i++){
                var temp = paramArr[i].split("="); //파라미터 변수명을 담음

                if(temp[0].toUpperCase() == paramName.toUpperCase()){
                    // 변수명과 일치할 경우
                    return temp[1];
                }
            }
            return "";
            //return util.getParameter(url, paramName);
        },

        send : function(param){
            (new Image).src = this.options.rdDomn+this.options.servlet + param;
        },

//	    collectAndSubmit  : function(param){
//			var prefs = fortyone.collect();
//			(new Image).src = param+ "&user_prefs=" + encodeURIComponent(prefs)+"&"
//		},

        /**
         * 셋팅된 파라미터 정보를 get방식 파라미터로 변환 function
         */
        paramData : function(){
            var paramList = "";
            this.each(keys, function(pair) {
                paramList += (pair.key+"="+pair.value+"&");

            });

            var UserAgent = navigator.userAgent;
            var isMobile = "";
            if (UserAgent.match(/iPhone|iPad|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null
                || UserAgent.match(/LG|lg|SAMSUNG|Samsung/) != null) {
                isMobile = "Y";
            }else{
                isMobile = "N";
            }
            var id ="-1";
            return (paramList +"isM="+isMobile);

        }
    };
    EN.VERSION = "3.0.0";
    return EN;
});