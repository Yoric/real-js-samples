/*! v0.3.48 built Thu Apr 18 2019 13:20:12 GMT+0300 (MSK) */
!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};e[r].call(o.exports,o,o.exports,t);o.l=!0;return o.exports}var n={};t.m=e;t.c=n;t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})};t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};t.d(n,"a",n);return n};t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};t.p="";t(t.s=1233)}({1233:function(e,t,n){n(153);e.exports=n(1234)},1234:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),o=n(6),i=n(13),a=n(37),c=n.n(a);!function(){var e=window,t=e.VIQEO;t&&t.run&&t.run();if(!document.querySelector('script[src*="'+c.a.initInternalPlayer+'"]')){i.a.log("Viqeo logger started");var n=document.querySelector('script[src*="'+c.a.starter+'"]'),a=Object(r.u)(n.src);Object.keys(a).length||(a={_:+new Date});Object(r.p)(Object(r.b)(o.a.initInternalPlayerUrl,a))}}()},13:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=n(3),i={NONE:0,ERROR:1,WARN:2,LOG:3,TRACK:4,DEBUG:5,TRACE:6},a=/[?&]vq_debug\b(?:=(\d+))?/.exec(window.location.search),c=(a&&Math.max(i.NONE,Math.min(i.TRACE,a[1]||i.LOG)),function(){function e(){r(this,e);this._logs=[];this._logsTime={}}e.prototype.error=function(e){this._send(i.ERROR,e,"color: red; font-weight: bold")};e.prototype.warn=function(e){this._send(i.WARN,e,"color: red")};e.prototype.log=function(e){this._send(i.LOG,e,"")};e.prototype.track=function(e){this._send(i.TRACK,e,"color: darkblue")};e.prototype.debug=function(e){this._send(i.DEBUG,e,"color: darkgray")};e.prototype.trace=function(e){this._send(i.TRACE,e,"color: lightgray")};e.prototype.time=function(e){this._logsTime[e]=+new Date;this.log(""+e)};e.prototype._send=function(e,t,n){var r="VIQEO_LOG|%c["+(new Date).toISOString().slice(11,-1)+"] "+t;this._logs.push(r)};e.prototype.timeEnd=function(e){var t=this._logsTime[e];if(t){this.log(e+". Timer ended: "+(+new Date-t)/1e3+"sec")}else this.error("logger.timeEnd("+e+") Not found: "+e)};e.prototype.getLogs=function(){return this._logs};e.prototype.copy=function(){var e={logs:this._logs,playersState:[]},t=window.VIQEO;if(t){t.getPlayers().forEach(function(t){return e.playersState.push(t.store.getState())})}Object(o.f)(JSON.stringify(e));console.info("Лог скопировался")};return e}());window.vqLogger=window.vqLogger?window.vqLogger:new c;t.a=window.vqLogger},153:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(154),o=(n.n(r),n(155)),i=(n.n(o),n(156)),a=(n.n(i),n(157)),c=(n.n(a),n(158)),u=(n.n(c),n(159)),s=(n.n(u),n(160)),l=(n.n(s),n(161));n.n(l)},154:function(e,t){Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(e){"use strict";if(null==this)throw new TypeError("Array.prototype.find called on null or undefined");if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var t,n=Object(this),r=n.length>>>0,o=arguments[1],i=0;i<r;i++){t=n[i];if(e.call(o,t,i,n))return t}}})},155:function(e,t){Array.from||(Array.from=function(){var e=Object.prototype.toString,t=function(t){return"function"==typeof t||"[object Function]"===e.call(t)},n=function(e){var t=Number(e);return isNaN(t)?0:0!==t&&isFinite(t)?(t>0?1:-1)*Math.floor(Math.abs(t)):t},r=Math.pow(2,53)-1,o=function(e){var t=n(e);return Math.min(Math.max(t,0),r)};return function(e){var n=this,r=Object(e);if(null==e)throw new TypeError("Array.from requires an array-like object - not null or undefined");var i,a=arguments.length>1?arguments[1]:void 0;if(void 0!==a){if(!t(a))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(i=arguments[2])}for(var c,u=o(r.length),s=t(n)?Object(new n(u)):new Array(u),l=0;l<u;){c=r[l];s[l]=a?void 0===i?a(c,l):a.call(i,c,l):c;l+=1}s.length=u;return s}}())},156:function(e,t){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(){"use strict";function e(e){f.push(e);1==f.length&&d()}function t(){for(;f.length;)f[0](),f.shift()}function r(e){this.a=p;this.b=void 0;this.f=[];var t=this;try{e(function(e){a(t,e)},function(e){c(t,e)})}catch(e){c(t,e)}}function o(e){return new r(function(t,n){n(e)})}function i(e){return new r(function(t){t(e)})}function a(e,t){if(e.a==p){if(t==e)throw new TypeError;var r=!1;try{var o=t&&t.then;if(null!=t&&"object"==(void 0===t?"undefined":n(t))&&"function"==typeof o){o.call(t,function(t){r||a(e,t);r=!0},function(t){r||c(e,t);r=!0});return}}catch(t){r||c(e,t);return}e.a=0;e.b=t;u(e)}}function c(e,t){if(e.a==p){if(t==e)throw new TypeError;e.a=1;e.b=t;u(e)}}function u(t){e(function(){if(t.a!=p)for(;t.f.length;){var e=t.f.shift(),n=e[0],r=e[1],o=e[2],e=e[3];try{0==t.a?o("function"==typeof n?n.call(void 0,t.b):t.b):1==t.a&&("function"==typeof r?o(r.call(void 0,t.b)):e(t.b))}catch(t){e(t)}}})}function s(e){return new r(function(t,n){var r=0,o=[];0==e.length&&t(o);for(var a=0;a<e.length;a+=1)i(e[a]).c(function(n){return function(i){o[n]=i;r+=1;r==e.length&&t(o)}}(a),n)})}function l(e){return new r(function(t,n){for(var r=0;r<e.length;r+=1)i(e[r]).c(t,n)})}var d,f=[];d=function(){setTimeout(t)};var p=2;r.prototype.g=function(e){return this.c(void 0,e)};r.prototype.c=function(e,t){var n=this;return new r(function(r,o){n.f.push([e,t,r,o]);u(n)})};window.Promise||(window.Promise=r,window.Promise.resolve=i,window.Promise.reject=o,window.Promise.race=l,window.Promise.all=s,window.Promise.prototype.then=r.prototype.c,window.Promise.prototype.catch=r.prototype.g)}()},157:function(e,t){Array.prototype.forEach||(Array.prototype.forEach=function(e){var t,n;if(null==this)throw new TypeError("this is null or not defined");var r=Object(this),o=r.length>>>0;if("function"!=typeof e)throw new TypeError(e+" is not a function");arguments.length>1&&(t=arguments[1]);n=0;for(;n<o;){var i;if(n in r){i=r[n];e.call(t,i,n,r)}n++}});"function"!=typeof NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach)},158:function(e,t){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(e,t){"use strict";if(void 0===e||null===e)throw new TypeError("Cannot convert first argument to object");for(var n=Object(e),r=1;r<arguments.length;r++){var o=arguments[r];if(void 0!==o&&null!==o)for(var i=Object.keys(Object(o)),a=0,c=i.length;a<c;a++){var u=i[a],s=Object.getOwnPropertyDescriptor(o,u);void 0!==s&&s.enumerable&&(n[u]=o[u])}}return n}})},159:function(e,t){!function(e,t){function n(e){var n=t[e];t[e]=function(e){return o(n(e))}}function r(t,n,r){return(r=this).attachEvent("on"+t,function(t){var t=t||e.event;t.preventDefault=t.preventDefault||function(){t.returnValue=!1};t.stopPropagation=t.stopPropagation||function(){t.cancelBubble=!0};n.call(r,t)})}function o(e,t){if(t=e.length)for(;t--;)e[t].addEventListener=r;else e.addEventListener=r;return e}if(!e.addEventListener){o([t,e]);if("Element"in e)e.Element.prototype.addEventListener=r;else{t.attachEvent("onreadystatechange",function(){o(t.all)});n("getElementsByTagName");n("getElementById");n("createElement");o(t.all)}}}(window,document)},160:function(e,t){Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,t){if(null==this)throw new TypeError('"this" is null or not defined');var n=Object(this),r=n.length>>>0;if(0===r)return!1;for(var o=0|t,i=Math.max(o>=0?o:r-Math.abs(o),0);i<r;){if(function(e,t){return e===t||"number"==typeof e&&"number"==typeof t&&isNaN(e)&&isNaN(t)}(n[i],e))return!0;i++}return!1}})},161:function(e,t){Array.prototype.findIndex||(Array.prototype.findIndex=function(e){if(null==this)throw new TypeError("Array.prototype.findIndex called on null or undefined");if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var t,n=Object(this),r=n.length>>>0,o=arguments[1],i=0;i<r;i++){t=n[i];if(e.call(o,t,i,n))return i}return-1})},2:function(e,t,n){"use strict";n.d(t,"e",function(){return o});n.d(t,"n",function(){return i});n.d(t,"r",function(){return a});n.d(t,"p",function(){return c});n.d(t,"d",function(){return u});n.d(t,"c",function(){return s});n.d(t,"a",function(){return f});n.d(t,"b",function(){return h});n.d(t,"m",function(){return v});n.d(t,"l",function(){return m});n.d(t,"f",function(){return y});n.d(t,"i",function(){return g});n.d(t,"g",function(){return b});n.d(t,"k",function(){return w});n.d(t,"t",function(){return E});n.d(t,"j",function(){return k});n.d(t,"s",function(){return O});n.d(t,"h",function(){return x});n.d(t,"u",function(){return S});n.d(t,"q",function(){return _});n.d(t,"o",function(){return T});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(e){e.preventDefault();e.stopPropagation()},i=function(e,t){return e&&("object"===(void 0===e?"undefined":r(e))||"function"==typeof e)&&"string"==typeof e.innerHTML&&(!t||t.toUpperCase()===e.tagName)},a=function(e){e&&e.parentNode&&e.parentNode.removeChild(e);return null},c=function(e){return new Promise(function(t,n){var r=e.play();r?r.then(t,n):e.paused?n({message:"play() not returned promise and video paused"}):t()})},u=function(e,t){var n=[].concat(e);Object.keys(t).forEach(function(e){var r=t[e];void 0!==r&&n.forEach(function(t){t.style[e]=r})});return e},s=function(e,t,n,o,i){var a=document.createElement(t);switch(void 0===n?"undefined":r(n)){case"object":u(a,n);break;case"string":a.className=n}a.innerHTML=o||"";a.addEventListener("click",i);return e.appendChild(a)},l=function(e){return e.replace(/([A-Z])/g,function(e){return"-"+e.toLowerCase()})},d=function(e,t){var n=e.ownerDocument.createElement("style");n.type="text/css";n.styleSheet?n.styleSheet.cssText=t:n.appendChild(e.ownerDocument.createTextNode(t));e.appendChild(n)},f=function(e,t){var n=[];Object.keys(t).forEach(function(e){var r=t[e],o=[];Object.keys(r).forEach(function(e){var t=r[e],n=l(e);o.push(n+":"+t)});var i=e+"{"+o.join("")+"}";n.push(i)});var r=n.join("");d(e,r)},p=[],h=function(e,t,n){var r=p.find(function(t){return t.el===e});if(!r||!r.names.find(function(e){return e===t})){var o="@keyframes "+t,i=[];n.forEach(function(e){var t=e.css,n=e.percent,r=[];Object.keys(t).forEach(function(e){var n=t[e],o=l(e);r.push(o+":"+n+";")});var o=r.join(" ");i.push(n+" {"+o+"}")});d(e,o+" {"+i.join("")+"}");r?r.names.push(t):p.push({el:e,names:[t]})}},v=function(e){var t=e;"NOINDEX"===e.tagName&&e.parentElement&&(t=e.parentElement);var n=t,r=n.clientWidth,o=getComputedStyle(t),i=o.paddingLeft,a=o.paddingRight;return r-parseFloat(i)-parseFloat(a)},m=function(e){var t=e;"NOINDEX"===e.tagName&&e.parentElement&&(t=e.parentElement);var n=t,r=n.clientHeight,o=getComputedStyle(t),i=o.paddingTop,a=o.paddingBottom;return r-parseFloat(i)-parseFloat(a)},y=function(e,t){var n=e.contentWindow["on"+t];e.contentWindow["on"+t]=function(r){n&&n(r);var o=document.createEvent("MouseEvents"),i=e.getBoundingClientRect();o.initMouseEvent(""+t,!0,!1,window,r.detail,r.screenX,r.screenY,r.clientX+i.left,r.clientY+i.top,r.ctrlKey,r.altKey,r.shiftKey,r.metaKey,r.button,null);e.dispatchEvent(o)}},g=function(e){var t=e.getBoundingClientRect(),n=document.body,r=document.documentElement,o=window.pageXOffset||r.scrollLeft||n.scrollLeft,i=r.clientLeft||n.clientLeft||0;return Math.round(t.left+o-i)},b=function(e){var t=document.createElement("textarea");t.innerHTML=e;return t.value},w=function(e){e.style.display&&"block"!==e.style.display||u(e,{display:"none"})},E=function(e){e.style.display&&"none"!==e.style.display||u(e,{display:"block"})},j=function(e){var t=window,n=e,r=document.documentElement,o=t.offsetHeight||window.innerHeight,i=!isNaN(t.scrollTop)&&t.scrollTop||(window.pageYOffset||r.scrollTop)-(r.clientTop||0);return{viewportHeight:o,viewportTop:i,viewportBottom:i+o,moduleTop:n.getBoundingClientRect().top}},k=function(e){var t=e.offsetHeight,n=parseInt(t,10),r=j(e),o=r.viewportTop,i=r.viewportBottom,a=r.moduleTop,c=Math.max(o,o+a),u=Math.min(i,c+a+n),s=Math.max(0,Math.min(n,u-c));return n&&s/n},O=(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window,function(e,t,n){var r="";if(n){var o=new Date;o.setTime(o.getTime()+24*n*60*60*1e3);r="; expires="+o.toUTCString()}document.cookie=e+"="+(t||"")+r+"; path=/"}),x=function(e){for(var t=e+"=",n=document.cookie.split(";"),r=0;r<n.length;r+=1){for(var o=n[r];" "===o.charAt(0);)o=o.substring(1,o.length);if(0===o.indexOf(t))return o.substring(t.length,o.length)}return null},S=function(e){var t=s(e,"div",{height:0,width:"100%",paddingBottom:"100%",position:"relative"});return s(t,"div",{position:"absolute",top:0,left:0,right:0,bottom:0})},_=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:500,r=void 0;e.addEventListener("touchend",function(t){r&&clearTimeout(r);if(e.classList.contains("touched")){e.classList.remove("touched");o(t)}},!0);e.addEventListener("touchmove",function(){r&&clearTimeout(r)});e.addEventListener("touchstart",function(o){e.classList.remove("touched");r=setTimeout(function(){e.classList.add("touched");t(o)},n)})},T=function(e){return"probably"===document.createElement("video").canPlayType(e)}},23:function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},3:function(e,t,n){"use strict";n.d(t,"p",function(){return s});n.d(t,"v",function(){return l});n.d(t,"d",function(){return d});n.d(t,"u",function(){return f});n.d(t,"b",function(){return p});n.d(t,"A",function(){return h});n.d(t,"r",function(){return v});n.d(t,"x",function(){return m});n.d(t,"C",function(){return y});n.d(t,"t",function(){return g});n.d(t,"i",function(){return b});n.d(t,"y",function(){return w});n.d(t,"D",function(){return E});n.d(t,"g",function(){return j});n.d(t,"a",function(){return k});n.d(t,"c",function(){return O});n.d(t,"e",function(){return x});n.d(t,"n",function(){return S});n.d(t,"B",function(){return T});n.d(t,"m",function(){return A});n.d(t,"k",function(){return N});n.d(t,"h",function(){return P});n.d(t,"f",function(){return U});n.d(t,"q",function(){return q});n.d(t,"s",function(){return C});n.d(t,"j",function(){return L});n.d(t,"z",function(){return M});n.d(t,"l",function(){return D});n.d(t,"o",function(){return R});n.d(t,"w",function(){return I});var r=n(36),o=(n(2),n(5)),i=n(13),a=n(46),c=n.n(a),u=this,s=("function"==typeof Symbol&&Symbol,function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:window.document;if(e){i.a.time("utils.loadScript("+e+")");var o=r.getElementsByTagName("head")[0],a=r.createElement("script");a.src=e;a.type="text/javascript";a.charset="UTF-8";a.addEventListener("load",function(){i.a.timeEnd("utils.loadScript("+e+")");t&&t()});a.addEventListener("error",function(){i.a.error("utils.loadScript("+e+") Failed load");n&&n()});o.appendChild(a)}}),l=function(e,t){if(e){var n=new Image;n.src=e;t&&(n.onerror=t)}},d=function(e){return JSON.parse(JSON.stringify(e))},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e.split("?")[1]||"",n=t?t.split("&"):[];return Object.keys(n).reduce(function(e,t){var r=n[t],o=r.split("="),i=o[0]&&decodeURIComponent(o[0]),a=o[1]&&decodeURIComponent(o[1]);e[i]=a&&a.replace(/\+/g," ");return e},{})},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=[];Object.keys(t).forEach(function(e){var r=t[e],o=[encodeURIComponent(e)];if(Array.isArray(r)){var i=encodeURIComponent("[]");r.forEach(function(e){var t=encodeURIComponent(e);n.push(""+o+i+"="+t)})}else{null!==r&&void 0!==r&&o.push(encodeURIComponent(r));n.push(o.join("="))}});var r=e.indexOf("?")>-1?"&":"?";return n.length?e+r+n.join("&"):e},h=function(e){return"//"===e.substring(0,2)?document.location.protocol+e:"/"===e.substring(0,1)?document.location.protocol+"//"+document.location.hostname+e:e},v=function(e){if(e)if(o.c){var t=document.createElement("a");t.setAttribute("href",e);t.setAttribute("target","_blank");var n=document.createEvent("HTMLEvents");n.initEvent("click",!0,!0);t.dispatchEvent(n)}else window.open(e,"_blank");else i.a.warn("utils.openUrl("+e+") invalid url")},m=function(e,t,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"GET",i=arguments[5],a=!(arguments.length>6&&void 0!==arguments[6])||arguments[6];if(!e)return null;var c=window.XDomainRequest?window.XDomainRequest:XMLHttpRequest,s=new c;r&&s.overrideMimeType&&s.overrideMimeType(r);t&&(s.onload=t.bind(u,s));n&&(s.onerror=n.bind(u,s));s.open(o,e,!0);s.withCredentials=a;var l=null;if(i){s.setRequestHeader("Content-type","application/json");l=JSON.stringify(i)}s.send(l);return s},y=function(e,t,n,r,o){var i=new XMLHttpRequest;i.withCredentials=!0;n&&i.addEventListener("load",n.bind(u,i));r&&i.addEventListener("error",r.bind(u,i));o&&i.upload.addEventListener("progress",o);i.open("POST",e,!0);i.send(t);return i},g=function(e){if("0"===e)return null;var t=/^\s*(?:(?:(\d+):)?(\d+):)?(\d+)(?:[.,](\d+))?\s*$/.exec(e);return t?(60*(+t[1]||0)*60*1e3+60*(+t[2]||0)*1e3+1e3*(+t[3]||0)+(+t[4]||0))/1e3:null},b=function(e){try{return JSON.parse(localStorage.getItem(e))||!1}catch(e){return!1}},w=function(e,t){try{return localStorage.setItem(e,t)}catch(e){return!1}},E=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=Math.abs(parseFloat(e)),r=t-String(e).length+1;return""+new Array(r).join("0")+n},j=function(e){return[e.getFullYear(),E(e.getMonth()+1),E(e.getDate())].join("-")},k=function(e){var t=performance.now(),n=function n(r){var o=(r-t)/e.duration;o>1&&(o=1);var i=e.timing(o);e.draw(i);o<1&&requestAnimationFrame(n)};requestAnimationFrame(n)},O=function(e,t,n,r,o){var i=Math.min;"crop"===o&&(i=Math.max);var a=i(n/e,r/t);return{width:e*a,height:t*a}},x=function(e){var t=Math.floor(e/60),n=e-60*t;return[E(t),E(n)].join(":")},S=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4,t="",n=0;n<e;n+=1)t+=Math.random().toString(16).slice(-4);return t},_=function(e){var t=Math.round(1e3*e)-1e3*Math.floor(e),n=E(parseInt(Math.floor(e)%60,10)),r=E(parseInt(Math.floor(e)/60%60,10));return E(parseInt(Math.floor(e)/60/60%60,10))+":"+r+":"+n+"."+t},T=function(e){return e.parsedSubtitles.map(function(e,t){return t+1+"\n"+_(e.startTime)+" --\x3e "+_(e.endTime)+"\n"+e.text+"\n"}).join("\n")},A=function(e){var t=e.video,n=e.preview,o=e.subtitles,i=e.preset,a=e.editing,c=t.selectedVideoFile,u=t.prodVideoFile,s=t.prodDisableAdvert,l=t.selectedDisableAdvert,d=n.selectedPreviewFile,f=n.prodPreviewFile,p=o.selectedSubtitle,h=o.prodSubtitle,v=o.selectedSubtitlePreset,m=o.prodSelectedSubtitlePreset,y=o.selectedStyles,g=o.prodStyles,b=o.subtitlesList,w=o.prodSubtitlesList,E=a.appliedEffects,j=a.selectAppliedEffects,k=i.selectedItem,O=i.prodItem,x=i.prodSettings,S=i.currentSettings,_=[];s!==l&&_.push({type:"videoAdvert",selected:l,prod:s});c!==u&&_.push({type:"video",selected:c,prod:u});d!==f&&_.push({type:"preview",selected:d,prod:f});p.id!==h.id&&_.push({type:"subtitle",selected:p,prod:h});var T=Object(r.a)(b,w);if(T){var A=T[0].path[0];_.push({type:"subtitlesList",selected:b[A],prod:w[A]})}v!==m?_.push({type:"preset_subtitle",selected:{id:v}}):Object(r.a)(g,y)&&_.push({type:"subtitle_styles",selected:y});k&&k.id&&k.id!==O.id?_.push({type:"preset",selected:k}):Object(r.a)(x,S)&&_.push({type:"edit_preset",selected:S});Object(r.a)(E,j)&&_.push({type:"filters",selected:j,item:c});return _},N=function(e){var t=0;e&&e.cut&&(t=e.cut.from/1e3);return t},P=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=String(e).split("."),r=n[0],o=n[1];o&&o.length>t&&(o=o.slice(0,t));return parseFloat(r+"."+o)},U=function(e){var t=document.createElement("textarea");t.style.position="fixed";t.style.top=0;t.style.left=0;t.style.width="2em";t.style.height="2em";t.style.padding=0;t.style.border="none";t.style.outline="none";t.style.boxShadow="none";t.style.background="transparent";t.value=e;document.body.appendChild(t);t.select();try{document.execCommand("copy")}catch(e){}document.body.removeChild(t)},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return 0===(""+e).length||/%|px/.test(""+e)?""+e:e+"px"},C=function(e){var t=void 0;try{t=JSON.parse(e)}catch(e){return!1}return t},L=function(){return window.navigator.language&&"ru"===window.navigator.language.substring(0,2)?"ru":"en"},M=function(e,t){var n=window,r=n.vqLogger,o=t.getState(),i=r?r.getLogs():["Not found logs"],a=S(4);m(e.baseUrl+"/debug",!1,!1,!1,"POST",{debug_info:JSON.stringify({logs:i,playerState:o}),hash:a});c()(a)},D=function(){var e=window.location;return e.origin?e.origin:e.protocol+"//"+e.hostname+(e.port?":"+e.port:"")},R=function(e){return new RegExp(/^((https?:\/\/)|^(\/\/))([wW]{3}\.)?(([yY][oO][uU][tT][uU][bB][eE](-nocookie)?.com)|([yY][oO][uU][tT][uU]\.[bB][eE]))/).test(e)},I=function(e,t,n){return e.substr(0,t)+n+e.substr(t+n.length)}},36:function(e,t,n){"use strict";(function(e){function n(e,t){e.super_=t;e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function r(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0});t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0})}function o(e,t,n){o.super_.call(this,"E",e);Object.defineProperty(this,"lhs",{value:t,enumerable:!0});Object.defineProperty(this,"rhs",{value:n,enumerable:!0})}function i(e,t){i.super_.call(this,"N",e);Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function a(e,t){a.super_.call(this,"D",e);Object.defineProperty(this,"lhs",{value:t,enumerable:!0})}function c(e,t,n){c.super_.call(this,"A",e);Object.defineProperty(this,"index",{value:t,enumerable:!0});Object.defineProperty(this,"item",{value:n,enumerable:!0})}function u(e,t,n){var r=e.slice((n||t)+1||e.length);e.length=t<0?e.length+t:t;e.push.apply(e,r);return e}function s(e){var t=typeof e;return"object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function l(e,t,n,r,d,f,p){d=d||[];p=p||[];var h=d.slice(0);if(void 0!==f){if(r){if("function"==typeof r&&r(h,f))return;if("object"==typeof r){if(r.prefilter&&r.prefilter(h,f))return;if(r.normalize){var v=r.normalize(h,f,e,t);if(v){e=v[0];t=v[1]}}}}h.push(f)}if("regexp"===s(e)&&"regexp"===s(t)){e=e.toString();t=t.toString()}var m=typeof e,y=typeof t,g="undefined"!==m||p&&p[p.length-1].lhs&&p[p.length-1].lhs.hasOwnProperty(f),b="undefined"!==y||p&&p[p.length-1].rhs&&p[p.length-1].rhs.hasOwnProperty(f);if(!g&&b)n(new i(h,t));else if(!b&&g)n(new a(h,e));else if(s(e)!==s(t))n(new o(h,e,t));else if("date"===s(e)&&e-t!=0)n(new o(h,e,t));else if("object"===m&&null!==e&&null!==t)if(p.filter(function(t){return t.lhs===e}).length)e!==t&&n(new o(h,e,t));else{p.push({lhs:e,rhs:t});if(Array.isArray(e)){var w;for(w=0;w<e.length;w++)w>=t.length?n(new c(h,w,new a(void 0,e[w]))):l(e[w],t[w],n,r,h,w,p);for(;w<t.length;)n(new c(h,w,new i(void 0,t[w++])))}else{var E=Object.keys(e),j=Object.keys(t);E.forEach(function(o,i){var a=j.indexOf(o);if(a>=0){l(e[o],t[o],n,r,h,o,p);j=u(j,a)}else l(e[o],void 0,n,r,h,o,p)});j.forEach(function(e){l(void 0,t[e],n,r,h,e,p)})}p.length=p.length-1}else e!==t&&("number"===m&&isNaN(e)&&isNaN(t)||n(new o(h,e,t)))}function d(e,t,n,r){r=r||[];l(e,t,function(e){e&&r.push(e)},n);return r.length?r:void 0}function f(e,t,n){if(n.path&&n.path.length){var r,o=e[t],i=n.path.length-1;for(r=0;r<i;r++)o=o[n.path[r]];switch(n.kind){case"A":f(o[n.path[r]],n.index,n.item);break;case"D":delete o[n.path[r]];break;case"E":case"N":o[n.path[r]]=n.rhs}}else switch(n.kind){case"A":f(e[t],n.index,n.item);break;case"D":e=u(e,t);break;case"E":case"N":e[t]=n.rhs}return e}function p(e,t,n){if(e&&t&&n&&n.kind){for(var r=e,o=-1,i=n.path?n.path.length-1:0;++o<i;){void 0===r[n.path[o]]&&(r[n.path[o]]="number"==typeof n.path[o]?[]:{});r=r[n.path[o]]}switch(n.kind){case"A":f(n.path?r[n.path[o]]:r,n.index,n.item);break;case"D":delete r[n.path[o]];break;case"E":case"N":r[n.path[o]]=n.rhs}}}function h(e,t,n){if(n.path&&n.path.length){var r,o=e[t],i=n.path.length-1;for(r=0;r<i;r++)o=o[n.path[r]];switch(n.kind){case"A":h(o[n.path[r]],n.index,n.item);break;case"D":case"E":o[n.path[r]]=n.lhs;break;case"N":delete o[n.path[r]]}}else switch(n.kind){case"A":h(e[t],n.index,n.item);break;case"D":case"E":e[t]=n.lhs;break;case"N":e=u(e,t)}return e}function v(e,t,n){if(e&&t&&n&&n.kind){var r,o,i=e;o=n.path.length-1;for(r=0;r<o;r++){void 0===i[n.path[r]]&&(i[n.path[r]]={});i=i[n.path[r]]}switch(n.kind){case"A":h(i[n.path[r]],n.index,n.item);break;case"D":case"E":i[n.path[r]]=n.lhs;break;case"N":delete i[n.path[r]]}}}function m(e,t,n){if(e&&t){l(e,t,function(r){n&&!n(e,t,r)||p(e,t,r)})}}var y,g,b=[];y="object"==typeof e&&e?e:"undefined"!=typeof window?window:{};g=y.DeepDiff;g&&b.push(function(){if(void 0!==g&&y.DeepDiff===d){y.DeepDiff=g;g=void 0}});n(o,r);n(i,r);n(a,r);n(c,r);Object.defineProperties(d,{diff:{value:d,enumerable:!0},observableDiff:{value:l,enumerable:!0},applyDiff:{value:m,enumerable:!0},applyChange:{value:p,enumerable:!0},revertChange:{value:v,enumerable:!0},isConflict:{value:function(){return void 0!==g},enumerable:!0},noConflict:{value:function(){if(b){b.forEach(function(e){e()});b=null}return d},enumerable:!0}});t.a=d}).call(t,n(23))},37:function(e,t){e.exports={editor:"vn_editor",stats:"vn_stats",player:"vn_player",starter:"vq_starter",playerInit:"vq_player_init",editorInit:"vq_editor_init",initExternalPlayer:"vq_init_external_player",initInternalPlayer:"vq_init_internal_player",wordpressPluginInit:"vq_wordpress_plugin_init",wordpressButton:"vq_wordpress_button",gallery:"vq_gallery",filters:"vq_filters"}},46:function(e,t){function n(e){if(navigator.clipboard)return navigator.clipboard.writeText(e);var t=document.createElement("span");t.textContent=e;t.style.whiteSpace="pre";var n=document.createElement("iframe");n.sandbox="allow-same-origin";document.body.appendChild(n);var r=n.contentWindow;r.document.body.appendChild(t);var o=r.getSelection();if(!o){r=window;o=r.getSelection();document.body.appendChild(t)}var i=r.document.createRange();o.removeAllRanges();i.selectNode(t);o.addRange(i);var a=!1;try{a=r.document.execCommand("copy")}catch(e){}o.removeAllRanges();r.document.body.removeChild(t);document.body.removeChild(n);return a?Promise.resolve():Promise.reject()}e.exports=n},47:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(37),c=n.n(a),u=n(48);t.a=new(function(e){function t(){r(this,t);var i=o(this,e.call(this)),a=n(49).version;i.baseUrl="//api.viqeo.tv/v1";i.statsUrl="//stats.viqeo.tv";i.staticUrl="//cdn.viqeo.tv/js";i.playerHomeUrl="https://viqeo.tv";i.personalUrl="https://viqeo.tv/personal/";i.statsScriptUrl=i.staticUrl+"/"+c.a.stats+".js?v="+a;i.editorScriptUrl=i.staticUrl+"/"+c.a.editor+".js?v="+a;i.playerScriptUrl=i.staticUrl+"/"+c.a.player+".js?v="+a;i.initInternalPlayerUrl=i.staticUrl+"/"+c.a.initInternalPlayer+".js";i.galleryScriptUrl=i.staticUrl+"/"+c.a.gallery+".js?v="+a;i.embedUrl="https://cdn.viqeo.tv";i.errorTrackerUrl="https://error.viqeo.tv";i.proxyUrl="//cdn.viqeo.tv/v1/proxy";i.ampAdvertUrl="https://amptracker.viqeo.tv";return i}i(t,e);return t}(u.a))},48:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}t.a=function e(){r(this,e);this.baseUrl="";this.statsUrl="";this.staticUrl="";this.playerHomeUrl="";this.personalUrl="";this.statsScriptUrl="";this.editorScriptUrl="";this.playerScriptUrl="";this.initInternalPlayerUrl="";this.galleryScriptUrl="";this.embedUrl="";this.errorTrackerUrl="";this.advertDataUrl="";this.advertModuleUrl="";this.proxyUrl="";this.ampAdvertUrl=""}},49:function(e,t){e.exports={name:"viqeo-player",version:"0.3.48",main:"lib/index.js",scripts:{"watch player":"./node_modules/.bin/cross-env SERVER=local NODE_ENV=development ./node_modules/.bin/webpack --watch --config ./internals/webpack.config.debug.js","build player":"NODE_ENV=production ./node_modules/.bin/webpack","watch plugin":"./node_modules/.bin/cross-env SERVER=plugin NODE_ENV=development ./node_modules/.bin/webpack --watch --config ./internals/webpack.config.plugin.js",eslint:"eslint --ext .jsx,js src",stylelint:"stylelint src/**/*.css","start manual server test":"node ./tests/manual/","test:single":"rm -rf tmp/ && ./node_modules/.bin/karma start karma.conf.js --single-run","test:watch":"karma start karma.conf.js"},"pre-commit":[],keywords:["videonow","viqeo","test3"],license:"UNLICENSED",private:!0,dependencies:{"babel-core":"6.25.0","babel-loader":"7.1.1","babel-plugin-transform-helper":"0.0.6","babel-plugin-transform-object-rest-spread":"6.23.0","babel-preset-latest":"6.24.1","babel-runtime":"6.25.0","chart.js":"^2.7.2","cross-env":"3.2.4",moment:"^2.23.0",pug:"^2.0.0-rc.4","raw-loader":"0.5.1","rc-slider":"^8.6.3","react-dropzone":"^4.1.2","react-redux-i18n":"^1.8.0","react-select":"^1.0.0-rc.5","strip-loader":"0.1.2",svgo:"0.7.2","svgo-loader":"1.2.1","throttle-debounce":"^1.0.1",webpack:"3.4.1","xml-js":"^1.5.1"},devDependencies:{autoprefixer:"^7.1.2","babel-plugin-add-module-exports":"^0.2.1","babel-preset-react":"^6.24.1","clipboard-copy":"^2.0.1","copy-webpack-plugin":"^4.0.1","css-loader":"^0.28.4",dashjs:"^2.9.2","deep-diff":"^0.3.8",eslint:"4.3.0","eslint-config-airbnb-base":"11.3.1","eslint-import-resolver-webpack":"0.8.3","eslint-plugin-import":"2.7.0","eslint-plugin-jasmine":"^2.10.1","eslint-plugin-jsx-a11y":"^6.0.2","eslint-plugin-react":"^7.0.1",express:"^4.15.3","file-loader":"^0.11.2","hls.js":"^0.12.4","jasmine-core":"^3.1.0",karma:"^2.0.2","karma-browserstack-launcher":"^1.3.0","karma-chrome-launcher":"^2.2.0","karma-jasmine":"^1.1.2","karma-mocha":"^1.3.0","karma-mocha-reporter":"^2.2.5","karma-phantomjs-launcher":"^1.0.4","karma-webpack":"^3.0.0","material-ui":"^0.19.4",mocha:"^5.2.0","phantomjs-prebuilt":"^2.1.16","postcss-icss-values":"^2.0.1","postcss-loader":"^2.0.6","pre-commit":"^1.2.2","raw-loader":"^0.5.1",react:"^16.2.0","react-click-outside":"^2.3.1","react-color":"^2.13.8","react-dom":"^16.2.0","react-redux":"^5.0.5",redux:"^3.7.2","redux-devtools-extension":"^2.13.2","redux-thunk":"^2.2.0","style-loader":"^0.18.1",stylelint:"^8.0.0","stylelint-config-standard":"^17.0.0","svg-url-loader":"^2.1.1","viqeo-authorization":"git+ssh://git@bitbucket.org/videonow/viqeo-authorization.git#v0.0.7","viqeo-front-common":"git+ssh://git@bitbucket.org/videonow/viqeo-front-common.git#v0.0.10","webpack-conditional-loader":"^1.0.12",ws:"2.2.1"},browserslist:["Chrome >= 20","Firefox >= 24","Edge >= 12","Explorer >= 10","iOS >= 5","Safari >= 5","Android >= 2.3","Opera >= 15"],engines:{node:"6",npm:"3"}}},5:function(e,t,n){"use strict";n.d(t,"d",function(){return p});n.d(t,"f",function(){return h});n.d(t,"a",function(){return v});n.d(t,"c",function(){return b});n.d(t,"e",function(){return w});n.d(t,"b",function(){return E});n.d(t,"g",function(){return j});var r=navigator,o=r.userAgent,i=r.vendor,a=r.plugins,c=r.appVersion,u=r.platform,s=window,l=s.opera,d=s.MSStream,f=o||i||l,p=!!window.MSInputMethodContext&&!!document.documentMode,h=/^((?!chrome|android).)*safari/i.test(f),v=(function(){var e=f.match(/Chrom(e|ium)\/([0-9]+)\./);!!e&&parseInt(e[2],10)}(),/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)),m=(/Firefox/.test(f),/iPod/.test(f)&&!d),y=/iPhone/.test(f)&&!d,g=/iPad/.test(f)&&!d,b=m||y||g,w=(/android/i.test(f),/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(f)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(f.substr(0,4))),E=((void 0===a||0===a.length)&&("undefined"==typeof ActiveXObject||new ActiveXObject("ShockwaveFlash.ShockwaveFlash")),/Edge/.test(f)),j=(function(){if(!b)return!1;if("string"!=typeof c)return!1;var e=c.match(/OS (\d+)_(\d+)_?(\d+)?/);!!e&&parseFloat(e[1]+"."+e[2])}(),function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("testPassive",null,t);window.removeEventListener("testPassive",null,t)}catch(t){e=!1}return e}());"WebKitMediaSource"in window||window,!!u&&u.indexOf("Win")},6:function(e,t,n){"use strict";var r=n(3),o=n(47);t.a=(Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e})({},o.a,Object(r.i)("viqeo-config"))}});