window.scriptsLoaded = window.scriptsLoaded || {}; window.scriptProcessStart = window.scriptProcessStart || {}; window.scriptProcessStart['owa.AllowedOptions.mail.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[56],{4955:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(51),r=n(4956);t.default=function(e,t){return void 0===e||e.__type||(e=r.default(e)),o.makeServiceRequest("GetAllowedOptions",e,t)}},4956:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0);t.default=function(e){return o.__assign({__type:"GetAllowedOptionsRequest:#Exchange"},e)}},7092:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(1),i=Object(r.action)("LOAD_ALLOWED_OPTIONS"),u=n(1158),c=Object(r.mutatorAction)("SET_ALLOWED_OPTIONS",function(e){Object(u.a)().allowedOptions=e}),a=n(4955),s=n.n(a),l=n(726);var d=n(5),O=!1;Object(r.orchestrator)(i,function(){return o.__awaiter(this,void 0,void 0,function(){var e;return o.__generator(this,function(t){switch(t.label){case 0:return!Object(d.d)("fwk-getAllowedOptions")||O?[3,2]:(O=!0,[4,s()({Header:Object(l.getJsonRequestHeader)()})]);case 1:e=t.sent(),c(e.AllowedOptions),t.label=2;case 2:return[2]}})})});n.d(t,"loadAllowedOptions",function(){return i})}}]);
//# sourceMappingURL=owa.AllowedOptions.mail.js.map
window.scriptsLoaded['owa.AllowedOptions.mail.js'] = 1; window.scriptProcessEnd = window.scriptProcessEnd || {}; window.scriptProcessEnd['owa.AllowedOptions.mail.js'] = (new Date()).getTime();