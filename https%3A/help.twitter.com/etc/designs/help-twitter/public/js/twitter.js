!function(e){function o(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,o),s.l=!0,s.exports}var t={};o.m=e,o.c=t,o.i=function(e){return e},o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},o.p="/etc/designs/help-twitter/public/",o(o.s=8)}({"../content/jcr_root/apps/help-twitter/components/twitter/ht03-embedded-twitter-gif/webpack/index.js":function(e,o,t){"use strict";t("./source/aem.js");t("../content/jcr_root/apps/help-twitter/components/twitter/ht03-embedded-twitter-gif/webpack/index.scss")},"../content/jcr_root/apps/help-twitter/components/twitter/ht03-embedded-twitter-gif/webpack/index.scss":function(e,o){},"../content/jcr_root/apps/help-twitter/components/twitter/ht03-embedded-twitter-video/webpack/index.js":function(e,o,t){"use strict";var r=t("./node_modules/babel-runtime/helpers/classCallCheck.js"),s=function(e){return e&&e.__esModule?e:{default:e}}(r),n=t("./source/aem.js");t("../content/jcr_root/apps/help-twitter/components/twitter/ht03-embedded-twitter-video/webpack/index.scss");var d=function e(o,t){(0,s.default)(this,e),this.element=o,twttr.widgets.createVideo(o.dataset.tweetId,o,{status:o.dataset.tweetStatus,lang:o.dataset.tweetLang})};(0,n.registerComponent)(".ht03-embedded-twitter-video__item",d)},"../content/jcr_root/apps/help-twitter/components/twitter/ht03-embedded-twitter-video/webpack/index.scss":function(e,o){},"../content/jcr_root/apps/help-twitter/components/twitter/t06-embedded-timeline/webpack/index.js":function(e,o,t){"use strict";var r=t("./node_modules/babel-runtime/helpers/classCallCheck.js"),s=function(e){return e&&e.__esModule?e:{default:e}}(r),n=t("./source/aem.js");t("../content/jcr_root/apps/help-twitter/components/twitter/t06-embedded-timeline/webpack/index.scss");var d=function e(o,t){(0,s.default)(this,e);var r=o.dataset.collectionTimelineWidgetId?o.dataset.collectionTimelineWidgetId:"539487832448843776",n={};n.width=400,n.height=500,o.dataset.collectionWidth&&(n.width=o.dataset.collectionWidth),o.dataset.collectionHeight&&(n.height=o.dataset.collectionHeight),twttr.widgets.createTimeline({sourceType:"collection",id:r},o,n)};(0,n.registerComponent)(".t06-embedded-timeline__item",d)},"../content/jcr_root/apps/help-twitter/components/twitter/t06-embedded-timeline/webpack/index.scss":function(e,o){},"../content/jcr_root/apps/help-twitter/components/twitter/t07-embedded-collection-timeline/webpack/index.js":function(e,o,t){"use strict";var r=t("./node_modules/babel-runtime/helpers/classCallCheck.js"),s=function(e){return e&&e.__esModule?e:{default:e}}(r),n=t("./source/aem.js");t("../content/jcr_root/apps/help-twitter/components/twitter/t07-embedded-collection-timeline/webpack/index.scss");var d=function e(o,t){(0,s.default)(this,e);var r=o.dataset.collectionTimelineWidgetId?o.dataset.collectionTimelineWidgetId:"539487832448843776",n=o.dataset.collectionTimelineLimit?o.dataset.collectionTimelineLimit:3,d={};o.dataset.collectionWidth&&(d.width=o.dataset.collectionWidth),d.limit=n,twttr.widgets.createGridFromCollection(r,o,d)};(0,n.registerComponent)(".t07-embedded-collection-timeline__item",d)},"../content/jcr_root/apps/help-twitter/components/twitter/t07-embedded-collection-timeline/webpack/index.scss":function(e,o){},"../content/jcr_root/apps/help-twitter/components/twitter/t08-embedded-tweet/webpack/index.js":function(e,o,t){"use strict";var r=t("./node_modules/babel-runtime/helpers/classCallCheck.js"),s=function(e){return e&&e.__esModule?e:{default:e}}(r),n=t("./source/aem.js");t("../content/jcr_root/apps/help-twitter/components/twitter/t08-embedded-tweet/webpack/index.scss");var d=function e(o,t){(0,s.default)(this,e);var r="",n="",d="",l="",i="",u="",c="",a="";o.innerHTML=null,twttr.widgets.createTweet(o.dataset.tweetId,o,{width:o.dataset.tweetWidth,conversation:o.dataset.tweetConversation,cards:o.dataset.tweetCards,linkColor:o.dataset.tweetLinkColor,theme:o.dataset.tweetTheme}).then(function(e){if(void 0!==e){var t=e,s=t.contentWindow.document.body.querySelectorAll("blockquote.Tweet"),m=s[s.length-1];[].map.call(document.querySelectorAll('.customisable[title*="cards.twitter.com"]'),function(e){e.classList.add("u-hiddenVisually")}),[].map.call(document.querySelectorAll(".Button--smallGray"),function(e){e.classList.add("u-hiddenVisually")}),o.classList.contains("promoted-tweet")&&!o.classList.contains("promoted-tweet-none")&&(m.querySelector(".dateline a").text="View on Twitter",o.classList.add("g-modified"),a=o.classList.contains("promoted-tweet-political")?"promoted-political.png":"promoted.png",r=m.querySelector(".TweetAuthor-link").getAttribute("href"),n=o.querySelector(".TweetAuthor-name")?o.querySelector(".TweetAuthor-name").innerText:null,n||(n=m.querySelectorAll(".header .full-name .p-name")[0]?m.querySelector(".header .full-name .p-name").innerText:m.querySelector(".Identity-name").innerText),d="Promoted by "+n,o.classList.contains("promoted-tweet-whitelisted")&&(d="Promoted"),l=document.createElement("div"),l.classList.add("context"),i=document.createElement("span"),i.setAttribute("class","metadata with-icn"),u=document.createElement("img"),u.classList.add("promoted-img"),u.src="/etc/designs/common-twitter/clientlib-site/imgs/"+a,c=document.createElement("a"),c.setAttribute("class","js-action-profile-promoted js-user-profile-link js-promoted-badge"),c.href=r,c.innerText=d,i.append(u),i.append(c),l.append(i),m.querySelectorAll(".footer")[0]?(t.style.height=t.style.height+15+"px",m.querySelector(".footer").insertBefore(l,m.querySelector(".footer").firstChild),m.querySelector(".footer .js-action-profile-promoted").style.paddingLeft="5px"):(t.style.height=t.style.height+22+"px",m.querySelector(".Tweet-metadata").insertBefore(l,m.querySelector(".Tweet-metadata").firstChild),m.querySelector(".Tweet-metadata .js-action-profile-promoted").style.paddingLeft="5px"),o.classList.add("g-modified"),e.style.height=parseInt(e.style.height.replace(/px/,""))+l.offsetHeight+"px"),null===document.querySelector(".t08-embedded-tweet--editor-mode")||o.parentNode.dataset.DomRemovedEvent||(o.parentNode.dataset.DomRemovedEvent=!0,o.parentNode.addEventListener("DOMNodeRemoved",function(){location.reload()}))}else if(o.classList.contains("publicview"))o.parentElement.classList.add("hidden");else{var j=document.createElement("div");j.classList.add("tweeterror");var _=document.createElement("h3");_.innerHTML="Embedded Tweet issue";var p=document.createElement("span");p.innerHTML=o.dataset.tweetId+" is not a valid tweetId.",j.append(_),j.append(p),o.append(j)}},function(e){console.log(e)}),null===document.querySelector(".t08-embedded-tweet--editor-mode")||o.parentNode.dataset.DomRemovedEvent||(o.parentNode.dataset.DomRemovedEvent=!0,o.parentNode.addEventListener("DOMNodeRemoved",function(){location.reload()}))};(0,n.registerComponent)(".t08-embedded-tweet__item",d)},"../content/jcr_root/apps/help-twitter/components/twitter/t08-embedded-tweet/webpack/index.scss":function(e,o){},"./node_modules/babel-runtime/core-js/array/from.js":function(e,o,t){e.exports={default:t("./node_modules/core-js/library/fn/array/from.js"),__esModule:!0}},"./node_modules/babel-runtime/helpers/classCallCheck.js":function(e,o,t){"use strict";o.__esModule=!0,o.default=function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}},"./node_modules/babel-runtime/helpers/toConsumableArray.js":function(e,o,t){"use strict";o.__esModule=!0;var r=t("./node_modules/babel-runtime/core-js/array/from.js"),s=function(e){return e&&e.__esModule?e:{default:e}}(r);o.default=function(e){if(Array.isArray(e)){for(var o=0,t=Array(e.length);o<e.length;o++)t[o]=e[o];return t}return(0,s.default)(e)}},"./node_modules/core-js/library/fn/array/from.js":function(e,o,t){t("./node_modules/core-js/library/modules/es6.string.iterator.js"),t("./node_modules/core-js/library/modules/es6.array.from.js"),e.exports=t("./node_modules/core-js/library/modules/_core.js").Array.from},"./node_modules/core-js/library/modules/_a-function.js":function(e,o){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},"./node_modules/core-js/library/modules/_an-object.js":function(e,o,t){var r=t("./node_modules/core-js/library/modules/_is-object.js");e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},"./node_modules/core-js/library/modules/_array-includes.js":function(e,o,t){var r=t("./node_modules/core-js/library/modules/_to-iobject.js"),s=t("./node_modules/core-js/library/modules/_to-length.js"),n=t("./node_modules/core-js/library/modules/_to-absolute-index.js");e.exports=function(e){return function(o,t,d){var l,i=r(o),u=s(i.length),c=n(d,u);if(e&&t!=t){for(;u>c;)if((l=i[c++])!=l)return!0}else for(;u>c;c++)if((e||c in i)&&i[c]===t)return e||c||0;return!e&&-1}}},"./node_modules/core-js/library/modules/_classof.js":function(e,o,t){var r=t("./node_modules/core-js/library/modules/_cof.js"),s=t("./node_modules/core-js/library/modules/_wks.js")("toStringTag"),n="Arguments"==r(function(){return arguments}()),d=function(e,o){try{return e[o]}catch(e){}};e.exports=function(e){var o,t,l;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(t=d(o=Object(e),s))?t:n?r(o):"Object"==(l=r(o))&&"function"==typeof o.callee?"Arguments":l}},"./node_modules/core-js/library/modules/_cof.js":function(e,o){var t={}.toString;e.exports=function(e){return t.call(e).slice(8,-1)}},"./node_modules/core-js/library/modules/_core.js":function(e,o){var t=e.exports={version:"2.6.0"};"number"==typeof __e&&(__e=t)},"./node_modules/core-js/library/modules/_create-property.js":function(e,o,t){"use strict";var r=t("./node_modules/core-js/library/modules/_object-dp.js"),s=t("./node_modules/core-js/library/modules/_property-desc.js");e.exports=function(e,o,t){o in e?r.f(e,o,s(0,t)):e[o]=t}},"./node_modules/core-js/library/modules/_ctx.js":function(e,o,t){var r=t("./node_modules/core-js/library/modules/_a-function.js");e.exports=function(e,o,t){if(r(e),void 0===o)return e;switch(t){case 1:return function(t){return e.call(o,t)};case 2:return function(t,r){return e.call(o,t,r)};case 3:return function(t,r,s){return e.call(o,t,r,s)}}return function(){return e.apply(o,arguments)}}},"./node_modules/core-js/library/modules/_defined.js":function(e,o){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},"./node_modules/core-js/library/modules/_descriptors.js":function(e,o,t){e.exports=!t("./node_modules/core-js/library/modules/_fails.js")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"./node_modules/core-js/library/modules/_dom-create.js":function(e,o,t){var r=t("./node_modules/core-js/library/modules/_is-object.js"),s=t("./node_modules/core-js/library/modules/_global.js").document,n=r(s)&&r(s.createElement);e.exports=function(e){return n?s.createElement(e):{}}},"./node_modules/core-js/library/modules/_enum-bug-keys.js":function(e,o){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},"./node_modules/core-js/library/modules/_export.js":function(e,o,t){var r=t("./node_modules/core-js/library/modules/_global.js"),s=t("./node_modules/core-js/library/modules/_core.js"),n=t("./node_modules/core-js/library/modules/_ctx.js"),d=t("./node_modules/core-js/library/modules/_hide.js"),l=t("./node_modules/core-js/library/modules/_has.js"),i=function(e,o,t){var u,c,a,m=e&i.F,j=e&i.G,_=e&i.S,p=e&i.P,f=e&i.B,b=e&i.W,y=j?s:s[o]||(s[o]={}),h=y.prototype,w=j?r:_?r[o]:(r[o]||{}).prototype;j&&(t=o);for(u in t)(c=!m&&w&&void 0!==w[u])&&l(y,u)||(a=c?w[u]:t[u],y[u]=j&&"function"!=typeof w[u]?t[u]:f&&c?n(a,r):b&&w[u]==a?function(e){var o=function(o,t,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(o);case 2:return new e(o,t)}return new e(o,t,r)}return e.apply(this,arguments)};return o.prototype=e.prototype,o}(a):p&&"function"==typeof a?n(Function.call,a):a,p&&((y.virtual||(y.virtual={}))[u]=a,e&i.R&&h&&!h[u]&&d(h,u,a)))};i.F=1,i.G=2,i.S=4,i.P=8,i.B=16,i.W=32,i.U=64,i.R=128,e.exports=i},"./node_modules/core-js/library/modules/_fails.js":function(e,o){e.exports=function(e){try{return!!e()}catch(e){return!0}}},"./node_modules/core-js/library/modules/_global.js":function(e,o){var t=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=t)},"./node_modules/core-js/library/modules/_has.js":function(e,o){var t={}.hasOwnProperty;e.exports=function(e,o){return t.call(e,o)}},"./node_modules/core-js/library/modules/_hide.js":function(e,o,t){var r=t("./node_modules/core-js/library/modules/_object-dp.js"),s=t("./node_modules/core-js/library/modules/_property-desc.js");e.exports=t("./node_modules/core-js/library/modules/_descriptors.js")?function(e,o,t){return r.f(e,o,s(1,t))}:function(e,o,t){return e[o]=t,e}},"./node_modules/core-js/library/modules/_html.js":function(e,o,t){var r=t("./node_modules/core-js/library/modules/_global.js").document;e.exports=r&&r.documentElement},"./node_modules/core-js/library/modules/_ie8-dom-define.js":function(e,o,t){e.exports=!t("./node_modules/core-js/library/modules/_descriptors.js")&&!t("./node_modules/core-js/library/modules/_fails.js")(function(){return 7!=Object.defineProperty(t("./node_modules/core-js/library/modules/_dom-create.js")("div"),"a",{get:function(){return 7}}).a})},"./node_modules/core-js/library/modules/_iobject.js":function(e,o,t){var r=t("./node_modules/core-js/library/modules/_cof.js");e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==r(e)?e.split(""):Object(e)}},"./node_modules/core-js/library/modules/_is-array-iter.js":function(e,o,t){var r=t("./node_modules/core-js/library/modules/_iterators.js"),s=t("./node_modules/core-js/library/modules/_wks.js")("iterator"),n=Array.prototype;e.exports=function(e){return void 0!==e&&(r.Array===e||n[s]===e)}},"./node_modules/core-js/library/modules/_is-object.js":function(e,o){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},"./node_modules/core-js/library/modules/_iter-call.js":function(e,o,t){var r=t("./node_modules/core-js/library/modules/_an-object.js");e.exports=function(e,o,t,s){try{return s?o(r(t)[0],t[1]):o(t)}catch(o){var n=e.return;throw void 0!==n&&r(n.call(e)),o}}},"./node_modules/core-js/library/modules/_iter-create.js":function(e,o,t){"use strict";var r=t("./node_modules/core-js/library/modules/_object-create.js"),s=t("./node_modules/core-js/library/modules/_property-desc.js"),n=t("./node_modules/core-js/library/modules/_set-to-string-tag.js"),d={};t("./node_modules/core-js/library/modules/_hide.js")(d,t("./node_modules/core-js/library/modules/_wks.js")("iterator"),function(){return this}),e.exports=function(e,o,t){e.prototype=r(d,{next:s(1,t)}),n(e,o+" Iterator")}},"./node_modules/core-js/library/modules/_iter-define.js":function(e,o,t){"use strict";var r=t("./node_modules/core-js/library/modules/_library.js"),s=t("./node_modules/core-js/library/modules/_export.js"),n=t("./node_modules/core-js/library/modules/_redefine.js"),d=t("./node_modules/core-js/library/modules/_hide.js"),l=t("./node_modules/core-js/library/modules/_iterators.js"),i=t("./node_modules/core-js/library/modules/_iter-create.js"),u=t("./node_modules/core-js/library/modules/_set-to-string-tag.js"),c=t("./node_modules/core-js/library/modules/_object-gpo.js"),a=t("./node_modules/core-js/library/modules/_wks.js")("iterator"),m=!([].keys&&"next"in[].keys()),j=function(){return this};e.exports=function(e,o,t,_,p,f,b){i(t,o,_);var y,h,w,v=function(e){if(!m&&e in S)return S[e];switch(e){case"keys":case"values":return function(){return new t(this,e)}}return function(){return new t(this,e)}},g=o+" Iterator",x="values"==p,k=!1,S=e.prototype,T=S[a]||S["@@iterator"]||p&&S[p],O=T||v(p),C=p?x?v("entries"):O:void 0,A="Array"==o?S.entries||T:T;if(A&&(w=c(A.call(new e)))!==Object.prototype&&w.next&&(u(w,g,!0),r||"function"==typeof w[a]||d(w,a,j)),x&&T&&"values"!==T.name&&(k=!0,O=function(){return T.call(this)}),r&&!b||!m&&!k&&S[a]||d(S,a,O),l[o]=O,l[g]=j,p)if(y={values:x?O:v("values"),keys:f?O:v("keys"),entries:C},b)for(h in y)h in S||n(S,h,y[h]);else s(s.P+s.F*(m||k),o,y);return y}},"./node_modules/core-js/library/modules/_iter-detect.js":function(e,o,t){var r=t("./node_modules/core-js/library/modules/_wks.js")("iterator"),s=!1;try{var n=[7][r]();n.return=function(){s=!0},Array.from(n,function(){throw 2})}catch(e){}e.exports=function(e,o){if(!o&&!s)return!1;var t=!1;try{var n=[7],d=n[r]();d.next=function(){return{done:t=!0}},n[r]=function(){return d},e(n)}catch(e){}return t}},"./node_modules/core-js/library/modules/_iterators.js":function(e,o){e.exports={}},"./node_modules/core-js/library/modules/_library.js":function(e,o){e.exports=!0},"./node_modules/core-js/library/modules/_object-create.js":function(e,o,t){var r=t("./node_modules/core-js/library/modules/_an-object.js"),s=t("./node_modules/core-js/library/modules/_object-dps.js"),n=t("./node_modules/core-js/library/modules/_enum-bug-keys.js"),d=t("./node_modules/core-js/library/modules/_shared-key.js")("IE_PROTO"),l=function(){},i=function(){var e,o=t("./node_modules/core-js/library/modules/_dom-create.js")("iframe"),r=n.length;for(o.style.display="none",t("./node_modules/core-js/library/modules/_html.js").appendChild(o),o.src="javascript:",e=o.contentWindow.document,e.open(),e.write("<script>document.F=Object<\/script>"),e.close(),i=e.F;r--;)delete i.prototype[n[r]];return i()};e.exports=Object.create||function(e,o){var t;return null!==e?(l.prototype=r(e),t=new l,l.prototype=null,t[d]=e):t=i(),void 0===o?t:s(t,o)}},"./node_modules/core-js/library/modules/_object-dp.js":function(e,o,t){var r=t("./node_modules/core-js/library/modules/_an-object.js"),s=t("./node_modules/core-js/library/modules/_ie8-dom-define.js"),n=t("./node_modules/core-js/library/modules/_to-primitive.js"),d=Object.defineProperty;o.f=t("./node_modules/core-js/library/modules/_descriptors.js")?Object.defineProperty:function(e,o,t){if(r(e),o=n(o,!0),r(t),s)try{return d(e,o,t)}catch(e){}if("get"in t||"set"in t)throw TypeError("Accessors not supported!");return"value"in t&&(e[o]=t.value),e}},"./node_modules/core-js/library/modules/_object-dps.js":function(e,o,t){var r=t("./node_modules/core-js/library/modules/_object-dp.js"),s=t("./node_modules/core-js/library/modules/_an-object.js"),n=t("./node_modules/core-js/library/modules/_object-keys.js");e.exports=t("./node_modules/core-js/library/modules/_descriptors.js")?Object.defineProperties:function(e,o){s(e);for(var t,d=n(o),l=d.length,i=0;l>i;)r.f(e,t=d[i++],o[t]);return e}},"./node_modules/core-js/library/modules/_object-gpo.js":function(e,o,t){var r=t("./node_modules/core-js/library/modules/_has.js"),s=t("./node_modules/core-js/library/modules/_to-object.js"),n=t("./node_modules/core-js/library/modules/_shared-key.js")("IE_PROTO"),d=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=s(e),r(e,n)?e[n]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?d:null}},"./node_modules/core-js/library/modules/_object-keys-internal.js":function(e,o,t){var r=t("./node_modules/core-js/library/modules/_has.js"),s=t("./node_modules/core-js/library/modules/_to-iobject.js"),n=t("./node_modules/core-js/library/modules/_array-includes.js")(!1),d=t("./node_modules/core-js/library/modules/_shared-key.js")("IE_PROTO");e.exports=function(e,o){var t,l=s(e),i=0,u=[];for(t in l)t!=d&&r(l,t)&&u.push(t);for(;o.length>i;)r(l,t=o[i++])&&(~n(u,t)||u.push(t));return u}},"./node_modules/core-js/library/modules/_object-keys.js":function(e,o,t){var r=t("./node_modules/core-js/library/modules/_object-keys-internal.js"),s=t("./node_modules/core-js/library/modules/_enum-bug-keys.js");e.exports=Object.keys||function(e){return r(e,s)}},"./node_modules/core-js/library/modules/_property-desc.js":function(e,o){e.exports=function(e,o){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:o}}},"./node_modules/core-js/library/modules/_redefine.js":function(e,o,t){e.exports=t("./node_modules/core-js/library/modules/_hide.js")},"./node_modules/core-js/library/modules/_set-to-string-tag.js":function(e,o,t){var r=t("./node_modules/core-js/library/modules/_object-dp.js").f,s=t("./node_modules/core-js/library/modules/_has.js"),n=t("./node_modules/core-js/library/modules/_wks.js")("toStringTag");e.exports=function(e,o,t){e&&!s(e=t?e:e.prototype,n)&&r(e,n,{configurable:!0,value:o})}},"./node_modules/core-js/library/modules/_shared-key.js":function(e,o,t){var r=t("./node_modules/core-js/library/modules/_shared.js")("keys"),s=t("./node_modules/core-js/library/modules/_uid.js");e.exports=function(e){return r[e]||(r[e]=s(e))}},"./node_modules/core-js/library/modules/_shared.js":function(e,o,t){var r=t("./node_modules/core-js/library/modules/_core.js"),s=t("./node_modules/core-js/library/modules/_global.js"),n=s["__core-js_shared__"]||(s["__core-js_shared__"]={});(e.exports=function(e,o){return n[e]||(n[e]=void 0!==o?o:{})})("versions",[]).push({version:r.version,mode:t("./node_modules/core-js/library/modules/_library.js")?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},"./node_modules/core-js/library/modules/_string-at.js":function(e,o,t){var r=t("./node_modules/core-js/library/modules/_to-integer.js"),s=t("./node_modules/core-js/library/modules/_defined.js");e.exports=function(e){return function(o,t){var n,d,l=String(s(o)),i=r(t),u=l.length;return i<0||i>=u?e?"":void 0:(n=l.charCodeAt(i),n<55296||n>56319||i+1===u||(d=l.charCodeAt(i+1))<56320||d>57343?e?l.charAt(i):n:e?l.slice(i,i+2):d-56320+(n-55296<<10)+65536)}}},"./node_modules/core-js/library/modules/_to-absolute-index.js":function(e,o,t){var r=t("./node_modules/core-js/library/modules/_to-integer.js"),s=Math.max,n=Math.min;e.exports=function(e,o){return e=r(e),e<0?s(e+o,0):n(e,o)}},"./node_modules/core-js/library/modules/_to-integer.js":function(e,o){var t=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:t)(e)}},"./node_modules/core-js/library/modules/_to-iobject.js":function(e,o,t){var r=t("./node_modules/core-js/library/modules/_iobject.js"),s=t("./node_modules/core-js/library/modules/_defined.js");e.exports=function(e){return r(s(e))}},"./node_modules/core-js/library/modules/_to-length.js":function(e,o,t){var r=t("./node_modules/core-js/library/modules/_to-integer.js"),s=Math.min;e.exports=function(e){return e>0?s(r(e),9007199254740991):0}},"./node_modules/core-js/library/modules/_to-object.js":function(e,o,t){var r=t("./node_modules/core-js/library/modules/_defined.js");e.exports=function(e){return Object(r(e))}},"./node_modules/core-js/library/modules/_to-primitive.js":function(e,o,t){var r=t("./node_modules/core-js/library/modules/_is-object.js");e.exports=function(e,o){if(!r(e))return e;var t,s;if(o&&"function"==typeof(t=e.toString)&&!r(s=t.call(e)))return s;if("function"==typeof(t=e.valueOf)&&!r(s=t.call(e)))return s;if(!o&&"function"==typeof(t=e.toString)&&!r(s=t.call(e)))return s;throw TypeError("Can't convert object to primitive value")}},"./node_modules/core-js/library/modules/_uid.js":function(e,o){var t=0,r=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++t+r).toString(36))}},"./node_modules/core-js/library/modules/_wks.js":function(e,o,t){var r=t("./node_modules/core-js/library/modules/_shared.js")("wks"),s=t("./node_modules/core-js/library/modules/_uid.js"),n=t("./node_modules/core-js/library/modules/_global.js").Symbol,d="function"==typeof n;(e.exports=function(e){return r[e]||(r[e]=d&&n[e]||(d?n:s)("Symbol."+e))}).store=r},"./node_modules/core-js/library/modules/core.get-iterator-method.js":function(e,o,t){var r=t("./node_modules/core-js/library/modules/_classof.js"),s=t("./node_modules/core-js/library/modules/_wks.js")("iterator"),n=t("./node_modules/core-js/library/modules/_iterators.js");e.exports=t("./node_modules/core-js/library/modules/_core.js").getIteratorMethod=function(e){if(void 0!=e)return e[s]||e["@@iterator"]||n[r(e)]}},"./node_modules/core-js/library/modules/es6.array.from.js":function(e,o,t){"use strict";var r=t("./node_modules/core-js/library/modules/_ctx.js"),s=t("./node_modules/core-js/library/modules/_export.js"),n=t("./node_modules/core-js/library/modules/_to-object.js"),d=t("./node_modules/core-js/library/modules/_iter-call.js"),l=t("./node_modules/core-js/library/modules/_is-array-iter.js"),i=t("./node_modules/core-js/library/modules/_to-length.js"),u=t("./node_modules/core-js/library/modules/_create-property.js"),c=t("./node_modules/core-js/library/modules/core.get-iterator-method.js");s(s.S+s.F*!t("./node_modules/core-js/library/modules/_iter-detect.js")(function(e){Array.from(e)}),"Array",{from:function(e){var o,t,s,a,m=n(e),j="function"==typeof this?this:Array,_=arguments.length,p=_>1?arguments[1]:void 0,f=void 0!==p,b=0,y=c(m);if(f&&(p=r(p,_>2?arguments[2]:void 0,2)),void 0==y||j==Array&&l(y))for(o=i(m.length),t=new j(o);o>b;b++)u(t,b,f?p(m[b],b):m[b]);else for(a=y.call(m),t=new j;!(s=a.next()).done;b++)u(t,b,f?d(a,p,[s.value,b],!0):s.value);return t.length=b,t}})},"./node_modules/core-js/library/modules/es6.string.iterator.js":function(e,o,t){"use strict";var r=t("./node_modules/core-js/library/modules/_string-at.js")(!0);t("./node_modules/core-js/library/modules/_iter-define.js")(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,o=this._t,t=this._i;return t>=o.length?{value:void 0,done:!0}:(e=r(o,t),this._i+=e.length,{value:e,done:!1})})},"./source/aem.js":function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function s(){var e=c.id;return c.id++,e}function n(e,o){[].concat((0,l.default)(document.querySelectorAll(e))).forEach(function(e){a.push(new o(e,e.dataset))})}Object.defineProperty(o,"__esModule",{value:!0}),o.Component=o.components=void 0;var d=t("./node_modules/babel-runtime/helpers/toConsumableArray.js"),l=r(d),i=t("./node_modules/babel-runtime/helpers/classCallCheck.js"),u=r(i);o.registerComponent=n;var c={id:0},a=o.components=[];o.Component=function e(){(0,u.default)(this,e),this.componentId=s()}},8:function(e,o,t){t("../content/jcr_root/apps/help-twitter/components/twitter/t08-embedded-tweet/webpack/index.js"),t("../content/jcr_root/apps/help-twitter/components/twitter/t07-embedded-collection-timeline/webpack/index.js"),t("../content/jcr_root/apps/help-twitter/components/twitter/t06-embedded-timeline/webpack/index.js"),t("../content/jcr_root/apps/help-twitter/components/twitter/ht03-embedded-twitter-video/webpack/index.js"),e.exports=t("../content/jcr_root/apps/help-twitter/components/twitter/ht03-embedded-twitter-gif/webpack/index.js")}});