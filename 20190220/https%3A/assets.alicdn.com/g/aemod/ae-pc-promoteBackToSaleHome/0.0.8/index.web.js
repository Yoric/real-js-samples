// {"framework" : "Rax"}
define("aemod/ae-pc-promoteBackToSaleHome/index.web",["rat-frame","rat-view","rat-picture"],function(require,exports,module){module.exports=function(t){var e={};function o(r){if(e[r])return e[r].exports;var module=e[r]={i:r,l:!1,exports:{}};return t[r].call(module.exports,module,module.exports,o),module.l=!0,module.exports}return o.m=t,o.c=e,o.d=function(exports,t,e){o.o(exports,t)||Object.defineProperty(exports,t,{enumerable:!0,get:e})},o.r=function(exports){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(module){var t=module&&module.__esModule?function(){return module.default}:function(){return module};return o.d(t,"a",t),t},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(module,exports,t){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=Object.assign||function(t){for(var e,o=1;o<arguments.length;o++)for(var r in e=arguments[o])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=function(){function t(t,e){for(var o,r=0;r<e.length;r++)(o=e[r]).enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}return function(e,o,r){return o&&t(e.prototype,o),r&&t(e,r),e}}(),n=t(1),a=l(t(2)),u=l(t(3)),i=l(t(4));function l(t){return t&&t.__esModule?t:{default:t}}var c=function(t){function l(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,l);var e=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,t));return e.getData=function(){var t=e.state,r=t.gdc,n=t.mds,a=r.translation,u=void 0===a?"{}":a,i=n.moduleData;(u="object"===(void 0===u?"undefined":o(u))?u:JSON.parse(u))["module.pc.promoteBackToSaleHome.image"]&&i&&"{}"!==JSON.stringify(i)&&e.setState({showDataStatus:!0,showNoDataStatus:!1,src:u["module.pc.promoteBackToSaleHome.image"]})},e.goTargetUrl=function(t,o){var r=e.state,n=r.mds,a=(r.gdc,{url:t,nid:o||0,widgetId:n.widgetId,moduleName:n.moduleName});e.pageUtils.goTargetUrl&&e.pageUtils.goTargetUrl(a)},e.pageUtils=t.pageUtils,e.state={showDataStatus:!1,showNoDataStatus:!0,mds:e.props.mds||{},gdc:e.props.gdc||{},src:""},e}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(l,n.Component),r(l,[{key:"componentWillMount",value:function(){this.getData()}},{key:"render",value:function(){var t=this,o=this.state,r=o.showDataStatus,l=o.showNoDataStatus,c=o.mds,f=o.gdc,p=o.src,s=f.preView,d=c.moduleData,m=(void 0===d?{}:d).pcBackHomeUrl,g=void 0===m?"":m;return r?(0,n.createElement)(a.default,{style:i.default.wrapper,onClick:function(){t.goTargetUrl(g,0)}},(0,n.createElement)(u.default,{style:i.default.backpic,source:{uri:p}})):!l||"true"!==s&&!0!==s?null:(0,n.createElement)(u.default,{style:e({},i.default.defaultImage,{width:c.defaultImageWidth||"100%",height:c.defaultImageHeight||"auto"}),source:{uri:c.defaultImage},lazyload:!1})}}]),l}();exports.default=c,module.exports=exports.default},function(module,exports){module.exports=require("rat-frame")},function(module,exports){module.exports=require("rat-view")},function(module,exports){module.exports=require("rat-picture")},function(module,exports,t){module.exports={wrapper:{width:1200,marginTop:"0rem",marginRight:"auto",marginBottom:"0rem",marginLeft:"auto"},title:{fontSize:"14px",color:"rgb(255,0,0)"},pic:{width:1200},defaultImage:{width:1200},backpic:{width:"1200px",cursor:"pointer",display:"block",marginTop:"0rem",marginRight:"auto",marginBottom:"48px",marginLeft:"auto"}}}])});