var errorElement = $('#errorMessage');
var errorSendAvailable = 3;
var steps = [];
var isProduction = window.location.href.indexOf("slototerra") >= 0;
var loginParams = {};

window.onerror = function (errorMsg, url, lineNumber, symbol) {
    logError('Script Error: ' + errorMsg + ' Script: ' + url + ' Line: ' + lineNumber + ' Symbol: ' + symbol);
};

/*ENTRY POINT*/
startLoginSequence([
    checkWebglAvailability,
    apiInit,
    registerMRCallbacks,
    processLogin
]);
/*ENTRY POINT*/

//COMMON FUNCTIONS - START
function getQueryString() {
    var s = window.location.search;
    if (s.length === 0) return "";
    return s.substring(1);
}

function getQueryStringMap(queryString) {
    var pairsStrings = queryString.split('&');
    var result = {};
    for (var i = 0; i < pairsStrings.length; i++) {
        var kvp = pairsStrings[i].split('=');
        if (kvp.length > 2) throw 'getQueryStringMap - Broken parse logic';
        var k = kvp[0];
        var v = kvp.length === 1 ? '' : decodeURIComponent(kvp[1]);
        result[k] = v;
    }
    return result;
}

function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(getQueryString()),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0].toUpperCase() === sParam.toUpperCase()) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
    return undefined;
}

function isEmpty(o) {
    return o === undefined || o === null || o === "";
}

function insertScript(src, onload) {
    var partnerScript = document.createElement('script');
    partnerScript.type = 'text/javascript';
    partnerScript.async = true;
    partnerScript.src = src;
	partnerScript.onload = onload;
    var firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(partnerScript, firstScript);
    return partnerScript;
}

function nextStep(data) {
    steps.shift()(data);
}

function startLoginSequence(_steps) {
    steps = _steps;
    nextStep();
}

function webglAvailable() {
    var webGLSupport = (function () {
        try {
            var canvas = document.createElement('canvas');
            /*Force screencanvas to false*/
            canvas.screencanvas = false;
            return !!window.WebGLRenderingContext &&
                (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
        } catch (e) {
            return false;
        }
    })();
    return !!webGLSupport;
}

function checkWebglAvailability() {
    if (webglAvailable()) {
        nextStep();
    } else {
        // showPopup
        var popup = $('#webglPopup');
        popup.removeClass('hidden');
        popup.show();
        $('#webglPopupOK').click(function () {
            popup.hide();
            nextStep();
        });
        $('#webglPopupHelp').click(function () {
            // redirect to help page
            window.location.replace('https://ok.ru/slototerra/topic/66620243138040');
        });
    }
}

//COMMON FUNCTIONS - END

//APP SPECIFIC FUNCTIONS - START

function urlCommand(url, headers, data, onSuccess, onError) {
    $.ajax({
        url: url,
        type: 'POST',
        dataType: 'json',
        headers: headers,
        data: JSON.stringify(data),
        timeout: 100000,
        success: function (response) {
            checkReturnCode(response, onSuccess, onError);
        },
        error: function (response, type, error) {
            logError('Server Request Error! Url: ' + url + 'Data: ' + data + 'Result: ' + response);
            onError && onError(response);
        }
    });
}

function logError(text) {
    errorElement.show();
    errorElement.text(errorElement.text() + text + '\n');
    if (isProduction && errorSendAvailable) {
        $.ajax({
            url: '/debug/?value=' + encodeURIComponent('Login Error! ' + text),
            type: 'POST',
            dataType: 'json',
            headers: {},
            timeout: 100000,
            success: function (response) {
            },
            error: function (response, type, error) {
            }
        });
        errorSendAvailable--;
    }
}

function processLogin() {
    var dataObj = {
        Credentials: {
            ProviderUID: loginParams.providerUid,
            Login: loginParams.login,
            Password: loginParams.password
        },
        UserInfo: {
            FirstName: loginParams.firstName,
            LastName: loginParams.lastName,
			BirthDay: loginParams.birthday,
			Gender: loginParams.gender,
            IsInGroup: loginParams.isInGroup
        }
    };

    fillExtendedArgs(dataObj);
    /*fillSouzMailRUCookies(dataObj, loginParams.refPlace);*/

    Common.ProcessLogin(loginParams, dataObj, 'game_mr');
}

//APP SPECIFIC FUNCTIONS - END

//MR SPECIFIC FUNCTIONS - START
function apiInit(){
    loginParams.providerUid = 'mriframe';
    loginParams.appId = getUrlParameter('appid');

    var url = '//games.mail.ru/app/' + loginParams.appId + '/static/mailru.core.js';
    insertScript(url, function() {
        nextStep();
    });
}

function registerMRCallbacks(){
    var iframeApi = window.iframeApi;
    if (typeof iframeApi === 'undefined') {
        console.log('Cannot find iframeApi function, are we inside an iframe?');
        return;
    }

	var callbacks = {
        appid: loginParams.appId,

        getLoginStatusCallback: function(o) {
			if(o.status == "ok"){
				switch(o.loginStatus){
					case 0: //Not authorized
                        document.getElementById('mr_newUser').classList.add('visible');
                        document.getElementsByClassName('content_wrapper')[0].classList.add('hidden');
						externalApi.authUser();
						break;
					case 1: //Not registered
                        document.getElementById('mr_newUser').classList.add('visible');
                        document.getElementsByClassName('content_wrapper')[0].classList.add('hidden');
						externalApi.registerUser();
						break;
					default:
                        document.getElementById('mr_newUser').classList.remove('visible');
                        document.getElementsByClassName('content_wrapper')[0].classList.remove('hidden');
						externalApi.userProfile();
						break;
				}
			}
			else logError(o.errmsg);
		},

		userInfoCallback: function(o) {
		},

		userProfileCallback: function(o) {
			if(o.status == "ok"){
				var name_parts = o.nick.split(' ');
				loginParams.login = o.uid;
				loginParams.firstName = name_parts.shift();
                loginParams.lastName = name_parts.length ? name_parts.join(' ') : null;
				loginParams.birthday = o.birthyear;
				loginParams.gender = o.sex;
				externalApi.getAuthToken();
			}
			else logError(o.errmsg);
		},

		registerUserCallback: function(o) {
			if(o.status == "ok"){
				externalApi.getLoginStatus();
			}
			else logError(o.errmsg);
		},

		paymentFrameUrlCallback: function(o) {
		},

		getAuthTokenCallback: function(o) {
			if(o.status == "ok"){
				loginParams.password = o.hash;
				nextStep();
			}
			else logError(o.errmsg);
		},
		paymentReceivedCallback: function(o) {},
		paymentWindowClosedCallback: function() {},
        userFriendsCallback: function() {},
        userSocialFriendsCallback: function() {}
    };

    function error(err) {
        logError('Could not init external api ' + err);
    }

    function connected(api) {
        window.externalApi = api;
        externalApi.getLoginStatus();
    }

    iframeApi(callbacks).then(connected, error);
}
//MR SPECIFIC FUNCTIONS - END


function insert1LinkStatsScript() {
    if (isProduction) {
        var url = '//1l-hit.mail.ru/v1/hit/' +
            430 +
            '.js' +
            '?r=' +
            encodeURIComponent(document.referrer) +
            '&u=' +
            encodeURIComponent('0') +
            '&rnd=' +
            Math.random()
        ;
        insertScript(url);
    }
    nextStep();
}

function fillExtendedArgs(dataObj) {
    var s = getQueryString();
    var qs = getQueryStringMap(s);
    var cas = qs["custom_args"];
    if (!cas) {
        dataObj.Coupon = qs['coupon'];
        return;
    }

    qs = getQueryStringMap(cas);
    dataObj.Coupon = qs['coupon'];
}

function fillSouzMailRUCookies(dataObj, refPlace) {
    var adId = $.fn.cookie("mr1lad");
    var refPlaceId = refPlaceMap[refPlace];
    if ((isEmpty(adId) || adId.endsWith('-1100') || adId.endsWith('-1100-')) && !isEmpty(refPlace) && refPlaceId) {
        adId = refPlaceId;
    }

    dataObj.SouzMailRUCookies = {
        mr1lad: adId,
        vid: $.fn.cookie("VID"),
        mr1luid: $.fn.cookie("mr1luid")
    };

    if (isEmpty(refPlaceId) && !isEmpty(refPlace)) {
        var ca = getUrlParameter("custom_args");
        if (isEmpty(ca)) {
            dataObj.RefPlace = refPlace;
        } else {
            dataObj.RefPlace = refPlace + ca;
        }
    } else {
        dataObj.RefPlace = refPlaceId;
    }
}

/*POLYFILLS*/
if (!String.prototype.endsWith) {
    Object.defineProperty(
        String.prototype,
        'endsWith',
        {
            value: function (searchString, position) {
                var subjectString = this.toString();
                if (position === undefined || position > subjectString.length) {
                    position = subjectString.length;
                }
                position -= searchString.length;
                var lastIndex = subjectString.indexOf(searchString, position);
                return lastIndex !== -1 && lastIndex === position;
            }
        });
}
/*POLYFILLS*/