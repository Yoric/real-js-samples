!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(window,function(){return function(n){var o={};function i(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}return i.m=n,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/js/cmpld/",i(i.s=480)}({480:function(e,t,n){"use strict";n.r(t);n(481),n(482)},481:function(e,t,n){!function(e,t,n){"use strict";window.ru.mail.cpf.Basic.Constructors.getView({_Events:["update","fetchFail"],_Handlers:{dom:{"click:Main.button":function(){this._opts.url&&this.update()}}},_Init:function(e){e=e||{},this._state={templateData:e}},update:function(){var e=this._opts,t=this._state,n=e.url,o=t.templateData.url.join(",");fetch(n+"?url="+o,{method:"POST",body:JSON.stringify({url:t.templateData.url}),credentials:"include"}).then(function(e){return e.json()}).then(function(e){this._trigger("update",e)}.bind(this),function(){this._trigger("fetchFail")}.bind(this))}},{cssSels:{Main:{button:".js-profiler__button",infoToggle:".js-profiler__toggle",infoSuccess:".js-profiler__success",infoError:".js-profiler__error"}},cssClss:{loading:"toggle_loading",itemActive:"toggle__item_active"},url:null},null,"PageProfiler")}(window.jQuery||window.$,window)},482:function(e,t){!function(e,t,n){"use strict";var o=n.Basic.moduleOpts.setParams;n.Tools.getTemplate;o("PageProfiler",{options:{_Handlers:{update:function(e){var t=this._opts.cssClss,n=this._elems,o=n.infoToggle,i=n.infoSuccess,r=n.infoError;o.addClass(t.loading),e.status?(o.removeClass(t.loading),i.addClass(t.itemActive)):(o.removeClass(t.loading),r.addClass(t.itemActive))}}}})}(window.jQuery||window.$,window,window.ru.mail.cpf)}})});
//# sourceMappingURL=page-profiler.js.map