!function(e){function t(t){for(var r,i,c=t[0],u=t[1],l=t[2],f=0,p=[];f<c.length;f++)i=c[f],o[i]&&p.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(s&&s(t);p.length;)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={9:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/static/web/build/";var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var s=u;a.push([505,0]),n()}({106:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(1),i=n.n(a),c=n(24),u=n.n(c),l=n(51),s=function(e){var t=e.section,n=" ничего ",r="Поиск Mail.Ru",a="/";"images"===t?(n=" картинок ",r="Картинки Mail.Ru",a="/search_images"):"video"===t?(n=" видео ",r="Видео Mail.Ru",a="/search_video"):"news"===t?(n=" новостей ",r="Новости Mail.Ru",a="/news"):"answer"===t&&(n=" ответов ",r="Ответы Mail.Ru",a="https://otvet.mail.ru/");var i=o.a.createElement("div",{className:u.a.container},o.a.createElement("h2",{className:u.a.title},"По данному запросу",n,"не найдено"),o.a.createElement("ul",{className:u.a.list},o.a.createElement("li",null,"Возможно, что в запросе одно или несколько слов написаны неправильно."),o.a.createElement("li",null,"Попробуйте задать другой запрос."),o.a.createElement("li",null,"Перейдите на главную страницу ",o.a.createElement("a",{className:u.a.link,href:a},r),".")));return o.a.createElement("div",{className:u.a.layout},o.a.createElement("div",{className:u.a.main},i,o.a.createElement(l.a,{rtbId:"R-A-192658-39"}),o.a.createElement("section",{className:"js-news-recs-wrapper"})),o.a.createElement("div",{className:u.a.right},o.a.createElement(l.a,{rtbId:"R-A-192658-37"})))};s.propTypes={section:i.a.string.isRequired};var f=s;n.d(t,"a",function(){return f})},24:function(e,t,n){e.exports={layout:"DesktopNotFound-layout",main:"DesktopNotFound-main",right:"DesktopNotFound-right",container:"DesktopNotFound-container",link:"DesktopNotFound-link",title:"DesktopNotFound-title",list:"DesktopNotFound-list"}},47:function(e,t,n){"use strict";n.r(t);n(91),n(75),n(76),n(94),n(95),n(88),n(96),n(97)},505:function(e,t,n){n(47),e.exports=n(512)},51:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(1),i=n.n(a);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var p=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(f(f(n=function(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?f(e):t}(this,(e=l(t)).call.apply(e,[this].concat(o))))),"shouldComponentUpdate",function(){return!1}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,r["Component"]),function(e,t,n){t&&u(e.prototype,t),n&&u(e,n)}(t,[{key:"componentDidMount",value:function(){var e=this.props.rtbId,t="yandexContextAsyncCallbacks";window[t]=window[t]||[],window[t].push(function(){Ya.Context.AdvManager.render({blockId:e,renderTo:"yandex_rtb_".concat(e),async:!0})});var n=document.getElementsByTagName("script")[0],r=document.createElement("script");r.type="text/javascript",r.src="//an.yandex.ru/system/context.js",r.async=!0,n.parentNode.insertBefore(r,n)}},{key:"render",value:function(){var e=this.props,t=e.rtbId,n=e.className;return o.a.createElement("div",{className:n,id:"yandex_rtb_".concat(t)})}}]),t}();p.defaultProps={className:null},p.propTypes={rtbId:i.a.string.isRequired,className:i.a.string};var d=p;n.d(t,"a",function(){return d})},512:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(6),i=n.n(a),c=n(106),u=window.STP||{};document.addEventListener("DOMContentLoaded",function(){!function(){var e=document.getElementById("js-notFound");e&&i.a.render(o.a.createElement(c.a,{section:u.base_section}),e)}()})}});