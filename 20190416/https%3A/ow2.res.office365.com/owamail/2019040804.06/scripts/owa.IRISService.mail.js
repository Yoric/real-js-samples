window.scriptsLoaded = window.scriptsLoaded || {}; window.scriptProcessStart = window.scriptProcessStart || {}; window.scriptProcessStart['owa.IRISService.mail.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[140],{7185:function(e,t,n){"use strict";n.r(t);var s=n(7);function o(){var e={Puid:Object(s.a)().SessionSettings.EncryptedUserPuid,Locale:Object(s.a)().SessionSettings.UserCulture},t=new Headers;t.append("Content-Type","application/json");var n={method:"Post",headers:t,body:JSON.stringify(e)};1===Object(s.a)().SessionSettings.WebSessionType&&fetch("https://onerm.olsvc.com/api/v1/promo",n)}n.d(t,"postIRISService",function(){return o})}}]);
//# sourceMappingURL=owa.IRISService.mail.js.map
window.scriptsLoaded['owa.IRISService.mail.js'] = 1; window.scriptProcessEnd = window.scriptProcessEnd || {}; window.scriptProcessEnd['owa.IRISService.mail.js'] = (new Date()).getTime();