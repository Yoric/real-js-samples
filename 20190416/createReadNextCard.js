!function(t){var r={};function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(n,e){if(1&e&&(n=c(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)c.d(t,r,function(e){return n[e]}.bind(null,r));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="",c(c.s=154)}({0:function(e,n,t){"use strict";function r(e){window.performance.mark&&performance.mark(e)}function c(e){r("DEPENDENCY: ".concat(e))}function a(e,n){var t="DEPRECATED: Use of ".concat(e," has been deprecated");r(n?"".concat(t,", use ").concat(n," instead."):"".concat(t,"."))}t.d(n,"b",function(){return c}),t.d(n,"c",function(){return a}),n.a=r},154:function(e,n,t){"use strict";t.r(n);var r=t(88);Object(r.a)()},88:function(e,n,t){"use strict";var u=t(0);n.a=function(){var e,n,t,r,c=document.querySelector("div.card.read-next");if(c){var a=c.querySelector("a.image-link-macro"),i=c.querySelector("div.package");if(a&&i)try{var o=i.querySelector("h2.caps a.kicker"),l=i.querySelector("h3.h1 a"),s=i.querySelector("#publish_date"),f=(n=o,t=l,r=s,'<div style="margin-bottom: 20px;">\n  <article class="card horizontal" style="/*display: flex; flex-direction: row; */ align-content: flex-start; flex-wrap: wrap;">\n    <figure style="margin: 0; flex: 1 1 300px;">\n      <div class="label sticky" style="/*position:relative*/">\n        <h2 class="impact caps h5"> Read Next</h2>\n      </div>\n      <a href="'.concat((e=a).href,'" class="image-link-macro" title="').concat(e.title,'">\n        <img style="padding:0;height:100%;position:unset;" src="').concat(e.firstElementChild.src,'"\n            alt="').concat(e.firstElementChild.alt,'">\n      </a>\n    </figure>\n    <div style="padding: 15px; justify-content: center;flex: 4 1 300px;">\n      <div class="kicker-macro">\n        <h2 class="caps h6">\n          <a href="').concat(n.href,'" class="kicker">\n            ').concat(n.innerText,'\n          </a>\n         </h2>\n      </div>\n      <h3 style="font-size:18px;margin: 10px 0;" class=\'h1\'>\n        <a style=\'color:#222222;font: 400 18px/1.2em "McClatchy Serif";text-transform: none;font-weight: normal;\'href="').concat(t.href,'">\n        ').concat(t.innerText,'\n         </a>\n      </h3> \n      <time style="flex: none;">').concat(r.innerText,"</time>\n    </div>\n  </article>\n</div>"));document.getElementById("commenting-container").insertAdjacentHTML("afterend",f),c.style.display="none"}catch(e){Object(u.a)("An error occurred when creating the read next card")}}}}});