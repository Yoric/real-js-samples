/**
 * lcslog.js  v0.7.0
 * Last Updated: 2018-11-13
 * Author : Log-Data
 * Copyright 2018 NHN Corp. All rights Reserved.
 * NHN PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 *
 * This code includes some part of the
 * "Flash Player Detection Kit Revision 1.5" by Michael Williams
 * & Copyright 2005-2007 Adobe Macromedia Softward.LLC. All rights reserved.
 */
(function(exportTarget) {
    var lcs_options = {
        nnb: true // nnb 쿠키 관련 처리
    };

    var lcs_version = "v0.7.0";

    var lcs_add = {}; // additional infomation
    var lcs_bc = {}; // browser capacity
    var lcs_perf = {};

    var lcs_do_count = 0;

    var lcs_waiting_pageshow = false;

    // PUBLIC
    function lcs_do(etc) {
        if (lcs_waiting_pageshow) {
            return;
        }

        if (document.readyState !== "complete") { // not loaded
            var eventName = "onpageshow" in window ? "pageshow" : "load";
            var retry = function(__etc) {
                return function() {
                    window.setTimeout(function() {
                        lcs_waiting_pageshow = false;
                        lcs_do(__etc);
                    }, 10);
                }
            }(etc);

            if (document.addEventListener) {
                window.addEventListener(eventName, retry, false);
            } else {
                window.attachEvent("on"+ eventName, retry);
            }

            lcs_waiting_pageshow = true;

            return;
        }

        // {pid: }
        // TODO : check lcs server name!!
        if (!window.lcs_SerName) {
            window.lcs_SerName = "lcs.naver.com";
        }

        var rs = "";
        var index;
        var itarVal;
        var doc = document;
        var wlt = window.location;
        var lcsServerAddr;

        // lcs 서버 주소 생성
        try {
            lcsServerAddr =
                (wlt.protocol ? wlt.protocol : "http:") +
                "//" +
                window.lcs_SerName +
                "/m?";
        } catch (e) {
            return;
        }

        // href / referrer 정보 추가
        try {
            rs =
                lcsServerAddr +
                "u=" +
                encodeURIComponent(wlt.href) +
                "&e=" +
                (doc.referrer ? encodeURIComponent(doc.referrer) : "");
        } catch (e) {}

        try {
            if (typeof lcs_add.i == "undefined") lcs_add.i = "";

            if (lcs_do_count < 1) {
                // lcs_do가 처음 불러지는 경우
                // 페이지 로드 이후 변하지 않는 값
                lcs_setBrowserCapa();

                if (lcs_options.nnb) {
                    lcs_setNNB();
                }

                lcs_add["ct"] = lcs_getConnectType();
                lcs_setNavigationTiming();
                lcs_setPaintTiming();
                lcs_setNavigationType();
            }

            // URL 생성
            for (index in lcs_bc) {
                if (typeof lcs_bc[index] !== "function")
                    rs += "&" + index + "=" + encodeURIComponent(lcs_bc[index]);
            }

            for (index in lcs_add) {
                itarVal = lcs_add[index];

                if (itarVal !== undefined && typeof itarVal !== "function") {
                    rs += "&" + index + "=" + encodeURIComponent(itarVal);
                }
            }

            if (lcs_do_count < 1) {
                for (index in lcs_perf) {
                    itarVal = lcs_perf[index];

                    if (itarVal) {
                        // except 0 for message size;
                        rs += "&" + index + "=" + encodeURIComponent(itarVal);
                    }
                }
            }

            for (index in etc) {
                if (
                    (index.length >= 3 && typeof etc[index] !== "function") ||
                    index === "qy"
                ) {
                    rs += "&" + index + "=" + encodeURIComponent(etc[index]);
                }
            }

            // pid가 없는 경우 예외 처리
            if (!!etc === false || !!etc.pid === false) {
                // lcs_do 인자로 pid를 전달 받지 못한 경우 - 내부에서 생성
                var pidFallback;

                if (window.g_pid) {
                    pidFallback = g_pid;
                } else {
                    // lpid 관련 처리
                    // pid 생성
                    pidFallback = lcs_get_lpid(); // lcs_do 이전에 참조하여 생성될 수 있는 경우 고려
                }
                // pid
                rs += "&pid=" + encodeURIComponent(pidFallback);
            }

            // From 2016.7.20, we decided to put timestamp in every lcs log's request URI.
            // The reason for this is to prevent some browser XHR(XML HTTP Request) request cache.
            // Here is the browser list doing cache like this.
            // 1. Chrome mobile
            var timeStr = new Date().getTime();
            rs += "&ts=" + timeStr;

            rs += "&EOU";

            // SEND
            var obj = document.createElement("img");
            obj.src = rs;
            obj.onload = function() {
                obj.onload = null;
                return;
            };

            lcs_do_count++;
        } catch (e) {
            return;
        }
    }

    // PUBLIC
    function lcs_do_gdid(gdid, etc) {
        try {
            if (gdid) {
                lcs_add["i"] = gdid;

                if (etc) {
                    lcs_do(etc);
                } else {
                    lcs_do();
                }
            }
        } catch (e) {}
    }

    // NNB
    // https://yobi.navercorp.com/logdata-open-issues/posts/45#yb-header-b-cookie-%EA%B0%9C%EB%85%90%EA%B3%BC-%EC%83%9D%EC%84%B1-%EC%8B%9C%EC%A0%90%EC%9D%B4-%EC%96%B8%EC%A0%9C%EC%9D%B8%EA%B0%80%EC%9A%94-
    function lcs_setNNB() {
        try {
            var lsg = localStorage;
            if (lsg) {
                if (lsg.ls) {
                    // localStorage 우선으로 cookie가 갱신되는 경우 값이 일치하지 않을 수 있음.
                    var lc = lsg.ls;
                    if (lc.length == 13) {
                        lcs_add["ls"] = lc;
                        return;
                    }
                }

                var nnb = lcs_getNNBfromCookie();
                if (nnb != null && nnb != "") {
                    lsg.ls = nnb;
                    lcs_add["ls"] = nnb;
                }
            }
        } catch (e) {}
    }

    // pageView 관련 정보 수집
    function lcs_setBrowserCapa() {
        lcs_bc["os"] = lcs_getOS();

        lcs_bc["ln"] = lcs_getlanguage();

        lcs_bc["sr"] = lcs_getScreen();
        lcs_bc["pr"] = window.devicePixelRatio || 1;

        var windowSize = lcs_getWindowSize();
        lcs_bc["bw"] = windowSize["bw"];
        lcs_bc["bh"] = windowSize["bh"];

        lcs_bc["c"] = lcs_getColorDepth();

        lcs_bc["j"] = lcs_getJavaEnabled();

        lcs_bc["k"] = lcs_getCookieEnabled();
    }

    function lcs_getOS() {
        var lcs_os = "";
        try {
            navigator.platform ? (lcs_os = navigator.platform) : "";
        } catch (e) {}
        return lcs_os;
    }

    function lcs_getlanguage() {
        var lcs_ln = "";
        try {
            navigator.userLanguage
                ? (lcs_ln = navigator.userLanguage)
                : navigator.language
                ? (lcs_ln = navigator.language)
                : "";
        } catch (e) {}

        return lcs_ln;
    }

    function lcs_getScreen() {
        var lcs_sr = "";

        try {
            if (window.screen && screen.width && screen.height) {
                lcs_sr = screen.width + "x" + screen.height;
            } else if (window.java || self.java) {
                var sr = java.awt.Toolkit.getDefaultToolkit().getScreenSize();
                lcs_sr = sr.width + "x" + sr.height;
            }
        } catch (e) {
            lcs_sr = "";
        }

        return lcs_sr;
    }

    function lcs_getWindowSize() {
        var doc = document;

        var size = {
            bw: "",
            bh: ""
        };

        try {
            size["bw"] = doc.documentElement.clientWidth
                ? doc.documentElement.clientWidth
                : doc.body.clientWidth;
            size["bh"] = doc.documentElement.clientHeight
                ? doc.documentElement.clientHeight
                : doc.body.clientHeight;
        } catch (e) {}

        return size;
    }

    function lcs_getColorDepth() {
        var colorDepth = "";
        try {
            if (window.screen) {
                colorDepth = screen.colorDepth ? screen.colorDepth : screen.pixelDepth;
            } else if (window.java || self.java) {
                var c = java.awt.Toolkit.getDefaultToolkit()
                    .getColorModel()
                    .getPixelSize();
                colorDepth = c;
            }
        } catch (e) {
            colorDepth = "";
        }

        return colorDepth;
    }

    function lcs_getJavaEnabled() {
        var jsEnable = "";
        try {
            jsEnable = navigator.javaEnabled() ? "Y" : "N";
        } catch (e) {}

        return jsEnable;
    }

    function lcs_getCookieEnabled() {
        var cookieEnable = "";
        try {
            cookieEnable = navigator.cookieEnabled ? "Y" : "N";
        } catch (e) {}

        return cookieEnable;
    }

    function lcs_getNNBfromCookie() {
        try {
            var ck = document.cookie;
            var k,
                v,
                i,
                ArrCookies = ck.split(";");
            for (i = 0; i < ArrCookies.length; i++) {
                k = ArrCookies[i].substr(0, ArrCookies[i].indexOf("="));
                v = ArrCookies[i].substr(ArrCookies[i].indexOf("=") + 1);
                k = k.replace(/^\s+|\s+$/g, "");
                if (k == "NNB") {
                    return unescape(v);
                }
            }
        } catch (e) {}
    }

    function lcs_getConnectType() {
        var ct = "";

        try {
            var conn =
                navigator.connection ||
                navigator.mozConnection ||
                navigator.webkitConnection;

            if (conn && typeof conn.type != "undefined") {
                switch (conn.type) {
                    case conn.CELL_2G:
                        ct = "2g";
                        break;
                    case conn.CELL_3G:
                        ct = "3g";
                        break;
                    case conn.CELL_4G:
                        ct = "4g";
                        break;
                    case conn.WIFI:
                        ct = "wifi";
                        break;
                    case conn.ETHERNET:
                        ct = "eth";
                        break;
                    case conn.UNKNOWN:
                        ct = "unknown";
                        break;
                    case conn.NONE:
                        ct = "none";
                        break;
                    default:
                        ct = "";
                }
            } else if (
                typeof blackberry != "undefined" &&
                typeof blackberry.network != "undefined"
            ) {
                var bnet = blackberry.network;
                if (bnet == "Wi-Fi") {
                    ct = "wifi";
                } else if (bnet == "3G") {
                    ct = "3g";
                } else {
                    ct = bnet;
                }
            } else {
                var lcs_isie = navigator.appName == "Microsoft Internet Explorer";
                var lcs_ismac = navigator.userAgent.indexOf("MAC") >= 0;

                if (lcs_isie && !lcs_ismac && bd && bd.addBehavior) {
                    // IE10 이하인 경우
                    var bd = document.body;
                    var lcs_ct = "";

                    var obj = bd.addBehavior("#default#clientCaps"); // MSDN: https://msdn.microsoft.com/en-us/windows/ms535922(v=vs.71)
                    ct = bd.connectionType;
                    bd.removeBehavior(obj);
                }
            }
        } catch (e) {
            console.warn(e);
        }

        return ct;
    }

    // PerformanceNavigationTiming
    // https://yobi.navercorp.com/logdata-open-docs/posts/74
    // MDN: https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming
    function lcs_setNavigationTiming() {
        var performance = window.performance || {};

        if (performance.timing) {
            var pt = performance.timing;

            for (var key in pt) {
                var value = pt[key];

                if (typeof value === "number") {
                    // toJSON 함수도 포함 되는 문제 + 다른 타겟 요소가 hasOwnProperty === false
                    lcs_perf[key] = value;
                }
            }
        }
    }

    // https://developer.mozilla.org/en-US/docs/Web/API/PerformancePaintTiming
    function lcs_setPaintTiming() {
        var performance = window.performance || {};

        try {
            if (performance.getEntriesByType) {
                var performanceEntries = performance.getEntriesByType("paint");

                performanceEntries.forEach(function(performanceEntry, i, entries) {
                    var name = performanceEntry.name;

                    switch (name) {
                        case "first-paint":
                        case "first-contentful-paint":
                            lcs_perf[name] = performanceEntry.startTime;
                            break;
                        default:
                            break;
                    }
                });
            } else {
                // console.log('Performance timing isn\'t supported.');
            }
        } catch (e) {
            console.warn(e);
        }
    }

    function lcs_setNavigationType() {
        var ngt = getNavigationType();

        if (ngt !== undefined) {
            lcs_perf["ngt"] = ngt;
        }
    }

    function getNavigationType() {
        var performance = window.performance || {};

        if (performance.navigation) {
            return performance.navigation.type;
        }

        return;
    }

    // 같은 페이지에서 nclicks와 lcs 로그를 합산하여 분석할 수 있도록 pageView별로 공통 ID를 추가하여 제공
    // lcs 전송과정에서 lpid 파라메터로 이 값이 업데이트 되어 전달 된다.
    var lpid = null; // lcs pid (pageview 관련)

    function lcs_create_lpid() {
        // 유저 간 구별
        var uaID;
        var nnb = localStorage.ls;

        if (nnb) {
            uaID = nnb;
        } else {
            var nnbFallback; // UA + random

            nnbFallback = navigator.userAgent + Math.random();
            uaID = nnbFallback;
        }

        // 페이지 간 구별
        var performance = window.performance || {};
        var pageURL = location.href;
        var currentTime;
        if (performance.now) {
            currentTime = performance.now();
        } else {
            currentTime = new Date().getTime();
        }

        lpid = hashFunction.md5(uaID + pageURL + currentTime);

        return lpid;
    }

    function lcs_get_lpid() {
        if (lpid === null) {
            lpid = lcs_create_lpid();
        }

        return lpid;
    }

    function lcs_update_lpid() {
        lpid = lcs_create_lpid();

        return lpid;
    }

    // 외부 라이브러리 (TODO: bundle 개발 환경 구축 필요)
    // MD5 hashfunction
    var hashFunction = {};

    (function(exportTarget) {
        /*
             * JavaScript MD5
             * https://github.com/blueimp/JavaScript-MD5
             *
             * Copyright 2011, Sebastian Tschan
             * https://blueimp.net
             *
             * Licensed under the MIT license:
             * https://opensource.org/licenses/MIT
             *
             * Based on
             * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
             * Digest Algorithm, as defined in RFC 1321.
             * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
             * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
             * Distributed under the BSD License
             * See http://pajhome.org.uk/crypt/md5 for more info.
             */
        /*
             * Add integers, wrapping at 2^32. This uses 16-bit operations internally
             * to work around bugs in some JS interpreters.
             */
        function safeAdd(x, y) {
            var lsw = (x & 0xffff) + (y & 0xffff);
            var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
            return (msw << 16) | (lsw & 0xffff);
        }

        /*
             * Bitwise rotate a 32-bit number to the left.
             */
        function bitRotateLeft(num, cnt) {
            return (num << cnt) | (num >>> (32 - cnt));
        }

        /*
             * These functions implement the four basic operations the algorithm uses.
             */
        function md5cmn(q, a, b, x, s, t) {
            return safeAdd(
                bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s),
                b
            );
        }

        function md5ff(a, b, c, d, x, s, t) {
            return md5cmn((b & c) | (~b & d), a, b, x, s, t);
        }

        function md5gg(a, b, c, d, x, s, t) {
            return md5cmn((b & d) | (c & ~d), a, b, x, s, t);
        }

        function md5hh(a, b, c, d, x, s, t) {
            return md5cmn(b ^ c ^ d, a, b, x, s, t);
        }

        function md5ii(a, b, c, d, x, s, t) {
            return md5cmn(c ^ (b | ~d), a, b, x, s, t);
        }

        /*
             * Calculate the MD5 of an array of little-endian words, and a bit length.
             */
        function binlMD5(x, len) {
            /* append padding */
            x[len >> 5] |= 0x80 << len % 32;
            x[(((len + 64) >>> 9) << 4) + 14] = len;

            var i;
            var olda;
            var oldb;
            var oldc;
            var oldd;
            var a = 1732584193;
            var b = -271733879;
            var c = -1732584194;
            var d = 271733878;

            for (i = 0; i < x.length; i += 16) {
                olda = a;
                oldb = b;
                oldc = c;
                oldd = d;

                a = md5ff(a, b, c, d, x[i], 7, -680876936);
                d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
                c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
                b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
                a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
                d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
                c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
                b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
                a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
                d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
                c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
                b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
                a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
                d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
                c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
                b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);

                a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
                d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
                c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
                b = md5gg(b, c, d, a, x[i], 20, -373897302);
                a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
                d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
                c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
                b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
                a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
                d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
                c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
                b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
                a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
                d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
                c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
                b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);

                a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
                d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
                c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
                b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
                a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
                d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
                c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
                b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
                a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
                d = md5hh(d, a, b, c, x[i], 11, -358537222);
                c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
                b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
                a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
                d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
                c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
                b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);

                a = md5ii(a, b, c, d, x[i], 6, -198630844);
                d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
                c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
                b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
                a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
                d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
                c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
                b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
                a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
                d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
                c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
                b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
                a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
                d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
                c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
                b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);

                a = safeAdd(a, olda);
                b = safeAdd(b, oldb);
                c = safeAdd(c, oldc);
                d = safeAdd(d, oldd);
            }
            return [a, b, c, d];
        }

        /*
             * Convert an array of little-endian words to a string
             */
        function binl2rstr(input) {
            var i;
            var output = "";
            var length32 = input.length * 32;
            for (i = 0; i < length32; i += 8) {
                output += String.fromCharCode((input[i >> 5] >>> i % 32) & 0xff);
            }
            return output;
        }

        /*
             * Convert a raw string to an array of little-endian words
             * Characters >255 have their high-byte silently ignored.
             */
        function rstr2binl(input) {
            var i;
            var output = [];
            output[(input.length >> 2) - 1] = undefined;
            for (i = 0; i < output.length; i += 1) {
                output[i] = 0;
            }
            var length8 = input.length * 8;
            for (i = 0; i < length8; i += 8) {
                output[i >> 5] |= (input.charCodeAt(i / 8) & 0xff) << i % 32;
            }
            return output;
        }

        /*
             * Calculate the MD5 of a raw string
             */
        function rstrMD5(s) {
            return binl2rstr(binlMD5(rstr2binl(s), s.length * 8));
        }

        /*
             * Calculate the HMAC-MD5, of a key and some data (raw strings)
             */
        function rstrHMACMD5(key, data) {
            var i;
            var bkey = rstr2binl(key);
            var ipad = [];
            var opad = [];
            var hash;
            ipad[15] = opad[15] = undefined;
            if (bkey.length > 16) {
                bkey = binlMD5(bkey, key.length * 8);
            }
            for (i = 0; i < 16; i += 1) {
                ipad[i] = bkey[i] ^ 0x36363636;
                opad[i] = bkey[i] ^ 0x5c5c5c5c;
            }
            hash = binlMD5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
            return binl2rstr(binlMD5(opad.concat(hash), 512 + 128));
        }

        /*
             * Convert a raw string to a hex string
             */
        function rstr2hex(input) {
            var hexTab = "0123456789abcdef";
            var output = "";
            var x;
            var i;
            for (i = 0; i < input.length; i += 1) {
                x = input.charCodeAt(i);
                output += hexTab.charAt((x >>> 4) & 0x0f) + hexTab.charAt(x & 0x0f);
            }
            return output;
        }

        /*
             * Encode a string as utf-8
             */
        function str2rstrUTF8(input) {
            return unescape(encodeURIComponent(input));
        }

        /*
             * Take string arguments and return either raw or hex encoded strings
             */
        function rawMD5(s) {
            return rstrMD5(str2rstrUTF8(s));
        }

        function hexMD5(s) {
            return rstr2hex(rawMD5(s));
        }

        function rawHMACMD5(k, d) {
            return rstrHMACMD5(str2rstrUTF8(k), str2rstrUTF8(d));
        }

        function hexHMACMD5(k, d) {
            return rstr2hex(rawHMACMD5(k, d));
        }

        function md5(string, key, raw) {
            if (!key) {
                if (!raw) {
                    return hexMD5(string);
                }
                return rawMD5(string);
            }
            if (!raw) {
                return hexHMACMD5(key, string);
            }
            return rawHMACMD5(key, string);
        }

        exportTarget.md5 = md5;
    })(hashFunction);

    // PUBLIC: global export
    exportTarget.lcs_do = lcs_do;
    exportTarget.lcs_do_gdid = lcs_do_gdid;
    exportTarget.lcs_get_lpid = lcs_get_lpid; // nclick에서 참조
    exportTarget.lcs_update_lpid = lcs_update_lpid;
    exportTarget.lcs_version = lcs_version;
})(window);