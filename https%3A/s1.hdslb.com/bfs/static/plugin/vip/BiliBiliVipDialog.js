!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var i=t();for(var n in i)("object"==typeof exports?exports:e)[n]=i[n]}}(window,function(){return function(e){var t={};function i(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){"use strict";function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};this.init(e),window.onmessage=function(e){switch((e=e||window.event).data){case"closeVipPlugin":document.body.removeChild(document.getElementById("BilibiliVipDialog"));break;case"vipPluginSuccess":t(),document.body.removeChild(document.getElementById("BilibiliVipDialog"));break;case"vipPluginGoLogin":window.location.href="https://account.bilibili.com/login?gourl="+encodeURIComponent(location.href)}}}Object.defineProperty(t,"__esModule",{value:!0}),t.BiliBiliVipDialog=n,n.prototype.init=function(e){var t=document.createElement("iframe"),i=this.getUrl(e);t.src=i,t.setAttribute("id","BilibiliVipDialog"),document.body.appendChild(t);var n=document.getElementById("BilibiliVipDialog");n.style.position="fixed",n.style.top="0",n.style.left="0",n.style.width="100%",n.style.height="100%",n.style.backgroundColor="transparent",n.style.zIndex="999999999"},n.prototype.getUrl=function(e){var t="https://big.bilibili.com/pc/vipPayPluginDialog";return t+=(t.indexOf("?")<0?"?":"&")+this.param(e)},n.prototype.param=function(e){var t="";for(var i in e){var n=void 0!==e[i]?e[i]:"";t+="&"+i+"="+encodeURIComponent(n)}return t?t.substring(1):""}}])});