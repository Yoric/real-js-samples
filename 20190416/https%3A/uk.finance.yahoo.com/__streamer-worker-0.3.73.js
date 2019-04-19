!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.STREAMER_WORKER=t()}(this,function(){"use strict";var n="undefined"!=typeof window&&window.XDomainRequest;"undefined"==typeof window||new XMLHttpRequest;var o="parent.yfs_gencb",s="parent.yfs_u1f",u="parent.yfs_mktmcb",c=/try\{(.*?)\((.*?)\)[;]?\}catch\(e\)\{\}/i,h=/([^'"])([\w\d_]+)([^'"]):/gi;var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}();function a(n){for(var e=arguments.length,t=Array(1<e?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];return t.forEach(function(t){t&&"object"===(void 0===t?"undefined":i(t))&&Object.keys(t).forEach(function(e){void 0!==t[e]&&(n[e]=t[e])})}),n}var l=/<script>(.*)<\/script>/i;function f(t,e){if(!e)return t;var n=e.mktmData,r=e.quoteData;return n&&a(t.mktmData,n),r&&Object.keys(r).forEach(function(e){t.quoteData[e]?(t.quoteData[e].price?a(t.quoteData[e].price,r[e].price):t.quoteData[e].price=r[e].price,t.quoteData[e].summaryDetail?a(t.quoteData[e].summaryDetail,r[e].summaryDetail):t.quoteData[e].summaryDetail=r[e].summaryDetail):t.quoteData[e]=r[e]}),t}function r(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,n=e.substring(t),r=l.exec(n);if(!r||!r.length||!r[1])return{offset:t};t+=r.index+r[0].length;var a=r[1].split("<\/script><script>"),i={error:void 0,mktmData:{},quoteData:{},offset:t};return a.forEach(function(e){try{return f(i,function(e){var t=c.exec(e);if(!t||t.length<2)return{};switch(t[1]){default:case u:try{return{mktmData:JSON.parse(t[2])}}catch(e){console.log("failed to json parse",t[2])}break;case o:throw new Error("Restart stream");case s:var n=(t[2]||"").replace(h,'$1"$2$3":');try{return{quoteData:JSON.parse(n)}}catch(e){console.log("failed to json parse",n)}}return{}}(e))}catch(e){i.error=e}}),i}var d=1048576,D=/%2C/g,w=/%5E/g,S=/%3D/g,t="undefined"!=typeof window&&window.XDomainRequest;function x(){}var p=function(){function b(e){var t=e.id,n=void 0===t?0:t,r=e.domain,a=void 0===r?"finance.yahoo.com":r,i=e.quotes,o=void 0===i?[]:i,s=e.props,u=void 0===s?[]:s,c=e.baseUrl,h=void 0===c?"https://streamerapi.finance.yahoo.com/streamer/1.0":c,l=e.lang,f=void 0===l?"en-US":l,d=e.region,p=void 0===d?"US":d,m=e.localize,y=void 0===m?0:m;if(k(this,b),a)try{document.domain=this.domain=a}catch(e){}var g={s:o.join(","),k:u.join(","),callback:"parent.yfs_u1f",mktmcb:"parent.yfs_mktmcb",gencallback:"parent.yfs_gencb",mu:1,lang:f,region:p,localize:y},v=Object.keys(g).map(function(e){return e+"="+encodeURIComponent(g[e])}).join("&").replace(D,",").replace(w,"^").replace(S,"=");this.url=h+"?"+v,this.xhrResponseOffset=0,this._onReadyStateChange=this._onReadyStateChange.bind(this),this._parseResponse=this._parseResponse.bind(this),this.onData=x,this.onDone=x,this.onError=x,this.quotes=o,this.props=u,this.id=n}return e(b,[{key:"connect",value:function(){return this.disconnect(),this.xhr=function(e){var t=new XMLHttpRequest;if(void 0!==t.withCredentials)t.open("GET",e,!0);else{if(!n)return null;(t=new n).open("GET",e)}return t}(this.url),this.xhr&&(t&&this.xhr instanceof t?(this.xhr.onprogress=this._parseResponse,this.xhr.onload=this.disconnect.bind(this,!0)):this.xhr.addEventListener("readystatechange",this._onReadyStateChange),this.xhrResponseOffset=0,this.xhr.send()),this}},{key:"disconnect",value:function(){var e=0<arguments.length&&void 0!==arguments[0]&&arguments[0];return this.xhr&&(this.xhr.onprogress=null,this.xhr.onload=null,this.xhr.removeEventListener("readystatechange",this._onReadyStateChange),this.xhr.abort(),this.xhr=null),e&&"function"==typeof this.onDone&&this.onDone(),this}},{key:"_onReadyStateChange",value:function(){if(this.xhr)switch(this.xhr.readyState){case 3:return this._parseResponse();case 4:return this.disconnect(!0)}}},{key:"_parseResponse",value:function(){var e=this.xhrResponseOffset;if(!this.xhr)return this;var t=this.xhr.responseText;if(!t||t.length<=e)return this;var n=r(t,e);return n.offset&&(this.xhrResponseOffset=n.offset),this.onData(n),"function"==typeof this.onError&&(n.error?this.onError(new Error("termination signal from gencallback")):t.length>d&&this.onError(new Error("responseText length exceeded "+d))),this}}]),b}(),m={ask:"a00",askSize:"a50",bid:"b00",bidSize:"b60",dayHigh:"h53",dayLow:"g53",extendedMarketChange:"c64",extendedMarketChangePercent:"p44",extendedMarketPrice:"l86",extendedMarketTime:"t54",marketCap:"j10",regularMarketChange:"c63",regularMarketChangePercent:"p43",regularMarketDayHigh:"h53",regularMarketDayLow:"g53",regularMarketPrice:"l84",regularMarketTime:"t53",regularMarketVolume:"v53"},y=/,/g,g=Object.keys(m).reduce(function(e,t){return e[m[t]]=t,e},{});function v(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",n=parseFloat(t.replace(y,""));switch(e){default:return n;case m.extendedMarketChangePercent:case m.regularMarketChangePercent:return n/100;case m.marketCap:return function(e){if(!e)return null;var t=parseFloat(e.replace(y,""));switch(e[e.length-1]){case"T":return 1e12*t;case"B":return 1e9*t;case"M":return 1e6*t;case"k":return 1e3*t;default:return t}}(t)}}function b(t,n,r){var a,i,o,s,u;function c(){var e=Date.now()-s;e<n&&0<=e?a=setTimeout(c,n-e):(a=null,r||(u=t.apply(o,i),o=i=null))}null==n&&(n=100);var e=function(){o=this,i=arguments,s=Date.now();var e=r&&!a;return a||(a=setTimeout(c,n)),e&&(u=t.apply(o,i),o=i=null),u};return e.clear=function(){a&&(clearTimeout(a),a=null)},e.flush=function(){a&&(u=t.apply(o,i),o=i=null,clearTimeout(a),a=null)},e}var _=b.debounce=b,C=function(e,t){var n,r,a,i,o=0;return function(){n=this,r=arguments;var e=new Date-o;return i||(t<=e?s():i=setTimeout(s,t-e)),a};function s(){i=0,o=+new Date,a=e.apply(n,r),r=n=null}};var R=400;function E(e,n){return e.filter(function(e){var t=n[e]||0;return n[e]=t+1,!t})}function q(e,t){return e.filter(function(e){return(t[e]||0)<=1?(delete t[e],!0):(t[e]--,!1)})}function j(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}var M=function(){function t(e){k(this,t),this.batchedData={mktmData:{},quoteData:{}},this.forcedKilled=!1,this.streamingQuotes={},this.streamingProps={},this.opts=a({delay:1e3,baseUrl:"https://streamerapi.finance.yahoo.com/streamer/1.0",lang:"en-US",region:"US",localize:0},e),this._onStreamData=this._onStreamData.bind(this),this._debouncedRestartStreaming=_(this._restartStreaming.bind(this),1e3),this.connections=[],this.retryCount=0}return e(t,[{key:"subscribe",value:function(e,t){var n=E(e,this.streamingQuotes),r=E(t,this.streamingProps);(n.length||r.length)&&(this.retryCount=0,this._debouncedRestartStreaming())}},{key:"unsubscribe",value:function(e,t){var n=q(e,this.streamingQuotes),r=q(t,this.streamingProps);(n.length||r.length)&&(this.retryCount=0,this._debouncedRestartStreaming())}},{key:"disconnect",value:function(){var t=this;this.forcedKilled=!0,this.connections.forEach(function(e){return t.teardownConnection(e)}),this.connections=[]}},{key:"onStream",value:function(t){var n=this;this.callback=C(function(e){t(e),n.batchedData={mktmData:{},quoteData:{}}},this.opts.delay)}},{key:"_onStreamDone",value:function(e){this.retryCount++<10&&this._debouncedRestartStreaming(e)}},{key:"_onStreamError",value:function(e){this.retryCount++<10&&this._debouncedRestartStreaming(e)}},{key:"_onStreamData",value:function(e){var t,r,n,a;this.batchedData=f(this.batchedData,(r=(t=e).quoteData,n=t.mktmData,a=void 0,r&&"object"===(void 0===r?"undefined":i(r))&&(a=Object.keys(r).reduce(function(e,t){var a=r[t],n=void 0;return a&&"object"===(void 0===a?"undefined":i(a))&&(n=Object.keys(a)).length&&(e[t]=n.reduce(function(e,t){var n=g[t];if(!n)return e;var r=v(t,a[t]);switch(n){default:return e.price[n]=r,e;case"ask":case"askSize":case"bid":case"bidSize":case"dayLow":case"dayHigh":return e.summaryDetail[n]=r,e}},{price:{},summaryDetail:{}})),e},{})),{quoteData:a,mktmData:n})),this.batchedData&&"function"==typeof this.callback&&this.callback.call(null,this.batchedData)}},{key:"_restartStreaming",value:function(e){if(!this.forcedKilled){var t=this.streamingQuotes,n=this.streamingProps,r=this.connections,a=Object.keys(t).sort(),i=Object.keys(n).sort();if("number"==typeof e)return this.teardownConnection(r[e]),this.setupConnection(e,a.slice(e*R,(e+1)*R),i);for(var o=a.length/R|1,s=0;s<Math.max(o,r.length);s++){var u=a.slice(s*R,(s+1)*R),c=r[s],h=!!u.length;(!h||c&&(h=!j(u,c.quotes)||!j(i,c.props)))&&(this.teardownConnection(c),r.splice(s,1)),h&&(c=this.setupConnection(s,u,i))&&r.push(c)}}}},{key:"teardownConnection",value:function(e){e&&(e.onDone=null,e.onError=null,e.onData=null,e.disconnect())}},{key:"setupConnection",value:function(e,t,n){var r=function(e,t,n,r,a,i,o){if(t.length&&n.length)return n=n.map(function(e){return m[e]}).filter(function(e){return!!e}),new p({id:e,quotes:t,props:n,baseUrl:r,lang:a,region:i,localize:o}).connect()}(e,t,n,this.opts.baseUrl,this.opts.lang,this.opts.region,this.opts.localize);if(r)return r.onData=this._onStreamData,r.onDone=this._onStreamDone.bind(this,r.id),r.onError=this._onStreamError.bind(this,r.id),r}}]),t}();if("undefined"==typeof window&&"function"==typeof addEventListener){var O=void 0;addEventListener("message",function(e){var t=e.data,n=t.type,r=t.payload;switch(n){case"init":if(O)return;(O=new M(r)).onStream(postMessage);break;case"subscribe":return O&&O.subscribe(r.quotes,r.props);case"unsubscribe":return O&&O.unsubscribe(r.quotes,r.props)}})}return M});
