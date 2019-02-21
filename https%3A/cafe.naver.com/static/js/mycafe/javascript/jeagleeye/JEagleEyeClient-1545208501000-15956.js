/**
 * JEagleEyeClient : JEagleEye 에러 전송 자바스크립트 클라이언트
 * ( http://devcode.nhncorp.com/projects/jeagleeyeclient )
 * 
 * * 주요 기능
 *   1) 에러 이벤트시 콜스택 정보 전송 (IE 지원)
 *   2) try.. catch.. 제어시 콜스택 정보 전송 (모든 브라우저 지원) 
 *   3) try.. catch.. 제어시 함수명, 에러발생 파일, 라인번호 전송 (IE, FF 지원) 
 *
 * @author LeeSungMin(sungmin.lee@nhn.com)
 *  
 * @example 
 *   1) 작동 여부 설정
 *      JEagleEyeClient.setEnable(true)
 *
 *   2) 특정 조건에 실행시킬 경우
 *      JEagleEyeClient.setCondition(function () {
 *          return (Math.round(Math.random()*2)) == 1;
 *      })
 * 
 *   3) 에러 발생 이벤트(onerror) 설정 
 *      JEagleEyeClient.attachOnError()
 *
 *   4) try.. catch..
 *      try {
 *          ....
 *      } catch(ex) {
 *          JEagleEyeClient.raiseError(ex, this); // 에러 전송, 브라우저 기본 에러 발생
 *          JEagleEyeClient.ignoreError(ex, this);  // 에러 전송, 브라우저 기본 에러 무시
 *          JEagleEyeClient.sendError("사용자 에러 : key = " + key); // 해당 메세지 전송
 *          
 *          // message, params 옵션값 활용 예
 *          JEagleEyeClient.raiseError(ex, this, {
 *              message : "사용자 정의 메세지",
 *              params : {
 *                  keys : oDummyKey
 *              }
 *          });
 *      }
 */
var JEagleEyeClient = {	
	/**
	 * 로깅 조건 함수
	 */
	_fnCondition: function() { return true },
	
	/**
	 * 작동 여부
	 */
	_bEnable: true,
	
	/**
	 * IE 브라우저 여부
	 */
	_bIsIE: /msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent),
	
	/**
	 * raiseError 함수 호출 시 onerror 이벤트를 발생시켜 파일과 라인수를 구하는 기능 사용 유무 (IE, FF만 대상으로 함) 
	 */
	_bEnableRaiseErrorByOnError: (/msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent)) || /firefox/i.test(navigator.userAgent),
	
	/**
	 * 디버그만 실행할 경우 (실제 서버에 메세지 전송 안함)
	 */
	_bDebugOnly: false,
	
	/**
	 * 서버 전송 시 본문에 포함된 외부 스크립트 URL 포함 여부
	 */
	_bSendScriptName: false,
	
	/**
	 * 처음 호출되는 함수 본문
	 */
	_sFirtFunctionBody: null,
	
    /**
     * 스택 모드 : chrome, firefox, opera, other
     */
    _sStackMode : (function() {
	try {
	    (0)();
	} catch (e) {
	    if (e.arguments) {
		return "chrome";
	    } else if (e.stack) {
		return "firefox";
	    } else if (window.opera && !('stacktrace' in e)) {
		return "opera";
	    }
	}

	return "other";
    })(),

    /**
     * 브라우저별 스택 구하는 함수 팩토리
     * reference : http://github.com/emwendelin/javascript-stacktrace/blob/master/stacktrace.js
     */
    _oStackMethodFactory : {
	// Safari, Opera 9+, IE, and others
	other : function(oCaller) {
	    var ANONYMOUSE_FUNCTION = '{anonymous}';
	    var oFunctionReg = /function\s*([\w\-$]+)?\s*\(([^\(]*)\)/i;
	    var oJEReg = /\$JE\(['"]([^\(]*)['"]\)/;
	    var aStack = [], sFuncBody, sFuncName, aArguments;
	    var aFuncArgumentsName = [];
	    var nJEPos = 0;

	    var nMaxStackSize = 10;
	    while (oCaller && aStack.length < nMaxStackSize) {
		sFuncBody = oCaller.toString();

		if (oFunctionReg.test(sFuncBody)) {
		    sFuncName = RegExp.$1 || ANONYMOUSE_FUNCTION;
		    aFuncArgumentsName = (RegExp.$2 || "").split(",");
		} else {
		    sFuncName = ANONYMOUSE_FUNCTION;
		    aFuncArgumentsName = [];
		}

		// 내부 함수는 예외처리
		if (sFuncName == ANONYMOUSE_FUNCTION
			&& aFuncArgumentsName[0].indexOf("$$") == 0) {
		    oCaller = oCaller.caller;
		    continue;
		}

		// "$JE('함수명')"이 존재할 경우 함수명으로 치환
		if (sFuncName == ANONYMOUSE_FUNCTION && oJEReg.test(sFuncBody)) {
		    sFuncName = JEagleEyeClient._trim(RegExp.$1);
		}

		// 처음 호출되는 함수 본문
		JEagleEyeClient._setFirstFunctionBody(sFuncBody);

		aArguments = Array.prototype.slice.call(oCaller['arguments']);
		aStack.push(sFuncName
			+ "("
			+ JEagleEyeClient._stringifyArguments(aArguments,
				aFuncArgumentsName) + ")");

		if (oCaller === oCaller.caller && window.opera) {
		    break;
		}

		oCaller = oCaller.caller;
	    }

	    return aStack;
	},

// Chrome
	chrome: function(e){
		return e.stack.replace(/^.*?\n/, "")
		.replace(/^.*?\n/, "")
		.replace(/^.*?\n/, "")
		.replace(/^[^\(]+?[\n$]/gm, "")
		.replace(/^\s+at\s+/gm, "")
		.replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@")
		.replace(/\s+\(http(.*):([\d]+):[\d]+\)/gm, "()@http$1:$2")
		.split("\n");
	},
	// FireFox
	firefox : function(e) {
	    return e.stack.replace(/^.*?\n/, '')
	    	.replace(/(?:\n@:0)?\s+$/m, '')
	    	.replace(/^\(/gm, '{anonymous}(')
	    	.split('\n');
	},

	// Opera 7.x and 8.x only!
	opera : function(e) {
	    var lines = e.message.split('\n'), ANON = '{anonymous}', lineRE = /Line\s+(\d+).*?script\s+(http\S+)(?:.*?in\s+function\s+(\S+))?/i, i, j, len;

	    for (i = 4, j = 0, len = lines.length; i < len; i += 2) {
		if (lineRE.test(lines[i])) {
		    lines[j++] = (RegExp.$3 ? RegExp.$3 + '()@' + RegExp.$2
			    + RegExp.$1 : ANON + '()@' + RegExp.$2 + ':'
			    + RegExp.$1)
			    + ' -- ' + lines[i + 1].replace(/^\s+/, '');
		}
	    }

	    lines.splice(j, lines.length - j);
	    return lines;
	}
    },

    /**
     * 첫번째 호출되는 함수 본문 저장
     * 
     * @param {String}  str 함수 본문
     */
    _setFirstFunctionBody : function(str) {
	if (this._sFirtFunctionBody == null) {
	    this._sFirtFunctionBody = str;
	}
    },

    /**
     * 매개변수 배열을 문자열로 변환
     * 
     * @param {Array} args 매개변수 배열
     * @param {Array} aFuncArgumentsName
     */
    _stringifyArguments : function(aArguments, aFuncArgumentsName) {
	var aResult = [];

	for (var i = 0; i < aFuncArgumentsName.length; ++i) {
	    var json = null;

	    try {
		json = this._stringifyJSON(aArguments[i]);
	    } catch (e) {
	    }

	    aResult[i] = aFuncArgumentsName[i];

	    if (json != null) {
		aResult[i] += " : '" + this._stringifyJSON(aArguments[i]) + "'";
	    }
	}

	return aResult.join(',');
    },

    _trim : function(str) {
	str = str.replace(/^\s+/, '');

	for (var i = str.length - 1; i >= 0; i--) {
	    if (/\S/.test(str.charAt(i))) {
		str = str.substring(0, i + 1);
		break;
	    }
	}

	return str;
    },

    /**
     * 스택 트레이스 배열 반환
     * 
     * @param {Object} $oEx Exception 객체
     * @return {message: 에러 메세지, callstack: 콜스택 배열}
     */
    _getStackTrace : function($$oEx, sCallFuncName) {
	// 스택 모드 구하기
	var sMode = this._sStackMode;

	// 실제 스택 구하기
	var oArgumentEx = sMode === "other" ? arguments.callee : (function() {
	    try {
		(0)();
	    } catch (e) {
		return e;
	    }
	})();

	var aStack = this._oStackMethodFactory[sMode](oArgumentEx);

	// 결과 생성
	return this._makeResultStack(aStack, $$oEx, sCallFuncName || "");
    },

    /**
     * 스택 배열 가공
     * 
     * @param {Array}  aStack 스택 정보 배열
     * @param {Object} oEx 사용자 Exception
     * @param {String} sCallFuncName 초기 호출 함수 이름
     */
    _makeResultStack : function(aStack, oEx, sCallFuncName) {
	var oResult = {
	    message : "",
	    callstack : []
	};

	if (typeof oEx == "object" && typeof oEx.message == "string") {
	    oResult.message = oEx.message;
	}

	var bFirst = true;
	var sBaseUrl = window.location.href.replace(/(https?:\/\/[^\/]+)\/(.*)/i, "$1");
	var oCheckReg = /^(@|http:\/\/)/;

	for (var i = 0, nCount = aStack.length; i < nCount; i++) {
	    var sMessage = aStack[i];

	    if (!oCheckReg.test(sMessage)) {
		// 초기 호출 함수 이름 변경
		if (bFirst && sCallFuncName != ""
			&& sMessage.indexOf("{anonymous}") != -1) {
		    sMessage = sMessage.replace("{anonymous}", sCallFuncName);
		}

		// 기본 URL 제거
		sMessage = sMessage.replace(sBaseUrl, "");

		// 스택에 저장
		oResult.callstack.push((bFirst ? "" : " => ") + sMessage);
		bFirst = false;
	    }
	}

	return oResult;
    },

    /**
     * 에러 이벤트 연결
     */
    attachOnError : function() {
	var that = this;

	window.onerror = function($$sMessage, sUrl, sLine) {
	    if (!that._isRunning())
		return;

	    var oOptions = that._bIsIE ? {
		callstack : that._getStackTrace().callstack.join("\n")
	    } : {};

	    that._sendToServer($$sMessage, sUrl, sLine, oOptions);
	}
    },

    /**
     * 에러 저장. 브라우저 기본 에러 발생
     * 
     * @param {Object} $$oEx Exception 객체
     * @param {Object} oOptions 옵션 (message : 메세지, params : 파라미터)
     */
    raiseError : function($$oEx, oScope, oOptions) {
	this._processError($$oEx, false, oScope, oOptions);
    },

    /**
     * 에러 저장. 브라우저 기본 에러 무시
     * 
     * @param {Object} $$oEx Exception 객체
     * @param {Object} oScope 실행 스코프
     * @param {Object} oOptions 옵션 (message : 메세지, params : 파라미터)
     */
    ignoreError : function($$oEx, oScope, oOptions) {
	this._processError($$oEx, true, oScope, oOptions);
    },

    /**
     * 사용자 메세지 에러 저장
     * 
     * @param {Object}
     *                sMessage
     */
    sendError : function(sMessage) {
	if (!this._isRunning())
	    return;
	this._sendToServer(sMessage);
    },

    /**
     * 실질적인 에러 처리
     * 
     * @param {Object} oEx Exception 객체
     * @param {Boolean} bIgnoreDefaultError 기본 에러 무시 여부
     * @param {Object} oScope 실행 스코프
     * @param {Object} oOptions 옵션 파라미터 (message : 추가 메세지, params : 파라미터)
     */
    _processError : function($$oEx, bIgnoreDefaultError, oScope, oOptions) {
	if (!this._isRunning())
	    return;

	oOptions = oOptions || {};

	oOptions.callFuncName = this._getCallerFunctionName(oScope);

	// 콜스택 & 에러 메세지 구하기
	var oStackResult = this._getStackTrace($$oEx, oOptions.callFuncName);
	oOptions.callstack = oStackResult.callstack.join("\n");

	// 에러를 발생시켜 파일명과 라인수를 구하는 모드
	if (this._bEnableRaiseErrorByOnError) {
	    var that = this;
	    var fnOldOnError = window.onerror || null;

	    window.onerror = function(sMessage, sUrl, sLine) {
		that._sendToServer(oStackResult.message, sUrl, sLine, oOptions);
		window.onerror = fnOldOnError;
		return bIgnoreDefaultError;
	    }
	} else {
	    this._sendToServer(oStackResult.message);
	}

	if (this._bEnableRaiseErrorByOnError
		|| (!this._bEnableRaiseErrorByOnError && !bIgnoreDefaultError)) {
	    try {
		(0)();
	    } catch (e) {
		throw $$oEx;
	    }
	}
    },

    /**
     * 옵션에 호출한 함수명 구하기
     * 
     * @param {Object} oScope 실행 스코프
     * @param {Object} oOptions 옵션
     */
    _getCallerFunctionName : function(oScope, oOptions) {
	if (typeof oScope != "undefined") {
	    try {
		var sCallFuncBody = arguments.callee.caller.caller.caller
			.toString();
	    } catch (e) {
		return;
	    }

	    var sScopeFuncBody = "";
	    for ( var key in oScope) {
		sScopeFuncBody = oScope[key];

		if (typeof sScopeFuncBody == "function"
			&& sScopeFuncBody.toString() === sCallFuncBody) {
		    return key;
		}
	    }
	}

	return "{anonymous}";
    },

    /**
     * JEagleEye 서버로 전송
     * 
     * @param {String}  sMessage 에러 메세지
     * @param {String}  sFile 에러 발생 파일
     * @param {String} nLine 에러 발생 라인
     * @param {Object} oOptions 옵션 (callstack, message, params)
     */
    _sendToServer : function(sMessage, sUrl, nLine, oOptions) {
	sUrl = sUrl || document.location;
	nLine = parseInt(nLine || 0, 10);
	oOptions = oOptions || {};

	// IE일 경우 라인수 -1
	if (this._bIsIE) {
	    nLine--;
	}

	var sRequestUrl = "https://cecs.naver.com/?m="
		+ encodeURIComponent(sMessage) + "&u="
		+ encodeURIComponent(sUrl) + "&l=" + nLine;

	// callstack
	if (typeof oOptions.callstack != "undefined") {
	    sRequestUrl += "&callstack="
		    + encodeURIComponent(oOptions.callstack);
	}

	var sGeneral = "";

	// 함수
	if (this._sFirtFunctionBody != null) {
	    oOptions.funcBody = this._trim(this._sFirtFunctionBody).substring(0, 200) + "..";
	    this._sFirtFunctionBody = null;

	    sGeneral += "= function =\n" + oOptions.funcBody + "\n\n";
	}

	// message
	if (typeof oOptions.message != "undefined") {
	    sGeneral += "= message =\n" + oOptions.message + "\n\n";
	}

	// params
	if (typeof oOptions.params != "undefined") {
	    oOptions.params = this._stringifyJSON(oOptions.params);
	    sGeneral += "= params =\n" + oOptions.params;
	}

	// scripts
	if (this._bSendScriptName) {
	    sGeneral += (sGeneral != "" ? "\n\n" : "") + "= scripts =\n";

	    var scripts = document.getElementsByTagName("script");
	    for (var i = 0, count = scripts.length; i < count; i++) {
		var sScriptUrl = scripts[i].src;

		if (sScriptUrl != ""
			&& sScriptUrl.indexOf("JEagleEyeClient.js") == -1) {
		    sGeneral += sScriptUrl + "\n";
		}
	    }
	}

	if (sGeneral != "") {
	    sRequestUrl += "&general=" + encodeURIComponent(sGeneral);
	}

	// 캐시 막기
	sRequestUrl += "&temp=" + new Date().getTime();

	if (this._bDebugOnly) {
	    alert("* 에러 : " + sMessage + "\n* 파일 : " + sUrl + "\n* 라인 : "
		    + nLine + "\n\n* function : " + oOptions.funcBody
		    + "\n\n* message : " + oOptions.message
		    + "\n\n* callstack : " + oOptions.callstack
		    + "\n\n* params : " + oOptions.params + "\n\n*request : "
		    + sRequestUrl);
	} else {
	    var oImg = new Image();
	    oImg.src = sRequestUrl;
	}
    },

    /**
     * implement JSON.stringify serialization reference :
     * http://www.sitepoint.com/blogs/2009/08/19/javascript-json-serialization
     * 
     * @param {Object}
     *                obj
     */
    _stringifyJSON : function(obj, depth) {
	depth = depth || 1;
	if (depth >= 10) {
	    return "..";
	}

	var t = typeof (obj);
	if (t != "object" || obj === null) {
	    // simple data type
	    if (t == "string")
		obj = '"' + obj + '"';
	    return String(obj);
	} else {
	    // recurse array or object
	    var n, v, json = [], arr = (obj && obj.constructor == Array);
	    for (n in obj) {
		v = obj[n];
		t = typeof (v);
		if (t == "string")
		    v = '"' + v + '"';
		else if (t == "string")
		    v = '"' + v + '"';
		else if (t == "object" && v !== null)
		    v = this._stringifyJSON(v, ++depth);

		json.push((arr ? "" : '"' + n + '":') + String(v));
	    }
	    return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
	}
    },

    /**
     * 작동 여부 반환
     */
    _isRunning : function() {
	return this._bEnable && this._fnCondition();
    },

    /**
     * 특정 조건에 실행을 시키기 위한 함수 설정
     * 
     * @param {Function} fnCondition 조건 함수
     */
    setCondition : function(fnCondition) {
	this._fnCondition = fnCondition;
    },

    /**
     * 전체적인 작동 여부 설정
     * 
     * @param {Boolean} bEnable true|false
     */
    setEnable : function(bEnable) {
	this._bEnable = bEnable;
    },

    /**
     * 디버그 여부 설정
     * 
     * @param {Boolean} bDebugOnly true|false
     */
    setDebugOnly : function(bDebugOnly) {
	this._bDebugOnly = bDebugOnly;
    },

    /**
     * 
     * @param {Boolean} bSendScriptName true|false
     */
    setSendScriptName : function(bSendScriptName) {
	this._bSendScriptName = bSendScriptName;
    }
};

$JE = function() {};

// jEagleEyeClient.min에만 추가되어있던 소스임.
// 1/100 확률로 집계되도록 추가해둔 것임.
JEagleEyeClient.setEnable(true);
JEagleEyeClient.setCondition(function() {
    return (Math.round(Math.random() * 100)) == 1;
});
JEagleEyeClient.attachOnError();