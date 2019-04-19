/*!
 * 阿里巴巴信息平台前端监控插件： v0.3.16
 * 如有疑问请联系： 曙月<tommy.lky@alibaba-inc.com>，仓舒<caoke.ck@alibaba-inc.com>
 */
(window._AliMonitor_Plugin_Webpack_JSONP=window._AliMonitor_Plugin_Webpack_JSONP||[]).push([[0],[,,,,,function(e,n,t){"use strict";t.r(n);var i=t(0);Object(i.c)(t(6))},function(e,n,t){var i={"./cdn.ts":7,"./index.ts":5,"./logo.ts":8,"./spm.ts":9,"./timing.ts":10};function r(e){var n=o(e);return t(n)}function o(e){var n=i[e];if(!(n+1)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n}r.keys=function(){return Object.keys(i)},r.resolve=o,e.exports=r,r.id=6},function(e,n,t){"use strict";t.r(n);var i=t(0),r=["g.alicdn.com","aeis.alicdn.com","img.alicdn.com","at.alicdn.com","retcode.taobao.com","mmstat.com"],o=/:\/\/([^\/\s]+)([^\?\#\s]*)([^\s]*)$/,a=function(e){return e.length>30?"".concat(e.slice(0,17),"...").concat(e.slice(-10)):e};window.performance&&performance.getEntries&&(100*Math.random()>90||i.d.debug)&&(performance.setResourceTimingBufferSize&&performance.setResourceTimingBufferSize(500),i.a.then(function(){setTimeout(function(){try{var e=i.d.loadModule("reporter");if(e){var n=performance.timing.loadEventStart-performance.timing.responseStart,t=Math.ceil(performance.timeOrigin||performance.timing.fetchStart||0),c=performance.timing.loadEventStart-t;if(t<=0||c<=0)return;var s=i.d.getInObject(["modules","monitor","request","jsonpCallbackParams"],i.b._runtimeConfig),m=s&&function(e){return s.map(function(n){return-1!==e.indexOf("".concat(n,"="))}).filter(Boolean).length>0},u=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location.host,t=function(e){var n=/:\/\/(.*?)\//.exec(e);return n&&n[1]}(e);return t&&-1!==t.indexOf(n)},l={version:2,__debug:[t,performance.timing.responseStart,performance.timing.loadEventStart,n,c],notWhitelist:[0,0],notWhitelistSameOrigin:[0,0],image:[0,0],imageLarge:[0,0],request:[0,0],jsonp:[0,0],jsonpSameOrigin:[0,0],nwAvatar:[0,0],notWhitelistUrls:[],imageUrls:[],requestUrls:[],jsonpUrls:[],scriptWithQuery:[],cssWithQuery:[]};performance.getEntries().forEach(function(e){if("resource"===e.entryType){var n=e.startTime-c<=0?0:1,t=e.name.match(o);if(!t)return void("data:"!==e.name.slice(0,5)&&i.d.log("CDNPlugin",new Error("Find a invalid url ".concat(e.name))));var s=t[1],d=t[2],g=t[3];switch(e.initiatorType){case"xmlhttprequest":l.request[n]+=1,l.requestUrls.length<8&&l.requestUrls.push("".concat(s).concat(a(d)));break;case"img":if(-1!=e.name.indexOf("retcode.taobao.com")||-1!=e.name.indexOf("log.mmstat.com")||-1!=e.name.indexOf("fourier.alibaba.com"))break;-1!=e.name.indexOf("cdog01.alibaba-inc.com")&&-1!=e.name.indexOf("work.alibaba-inc.com/photo")&&(l.nwAvatar[n]+=1),e.encodedBodySize>=102400?l.imageLarge[n]+=1:l.image[n]+=1,l.imageUrls.length<8&&l.imageUrls.push("".concat(s).concat(a(d)));break;case"script":case"link":"script"==e.initiatorType?m&&m(e.name)?(l.jsonp[n]+=1,l.jsonpUrls.length<8&&l.jsonpUrls.push("".concat(s).concat(a(d))),u(e.name)&&(l.jsonpSameOrigin[n]+=1)):g&&l.scriptWithQuery.length<8&&l.scriptWithQuery.push(g.slice(0,20)):g&&l.cssWithQuery.length<8&&l.cssWithQuery.push(g.slice(0,20));default:r.map(function(n){return u(e.name,n)}).filter(Boolean).length>0||(l.notWhitelistUrls.length<8&&l.notWhitelistUrls.push("".concat(s).concat(a(d))),u(e.name)?l.notWhitelistSameOrigin[n]+=1:l.notWhitelist[n]+=1)}}}),i.d.log("CDNPlugin","send Resource report",l),e.then(function(e){e.send({type:"log",category:"resource_report",sampling:10,msg:JSON.stringify(l),spm:i.b._runtimeConfig.spm,userNick:i.b._runtimeConfig.nick})})}}catch(d){i.d.log("CDNPlugin",d)}},1e4)}))},function(e,n,t){"use strict";t.r(n);var i=t(0);i.a.then(function(){setTimeout(function(){try{if(100*Math.random()>20){var e={nav:!1,component:!1,theme:"",nwLogo:!1,brand:"",loading:!1,publicFooter:!1,footer:!1,spm:i.b._runtimeConfig.spm},n=document.querySelector.bind(document),t=n(".kuma-primary-navigation");if(t){e.nav=!0;var r=t.className;r&&(-1!==r.indexOf("kuma-nw-uxcore")&&(e.component=!0),-1!==r.indexOf("light-theme")?e.theme="light":-1!==r.indexOf("dark-theme")?e.theme="dark":-1!==r.indexOf("clear-theme")&&(e.theme="clear"));var o=n("a.site-logo");o&&o.href&&o.href.indexOf("work.alibaba-inc.com")&&(e.nwLogo=!0);var a=n(".site-brand");a&&a.innerText&&(e.brand=a.innerText)}if(window.getComputedStyle){var c=document.createElement("div");c.className="kuma-loading",c.style.display="none",document.body.appendChild(c),setTimeout(function(){var n=getComputedStyle(c).backgroundImage;n&&n.indexOf("uxcore/pic/loading.svg")&&(e.loading=!0),document.body.removeChild(c)},16)}n("#AIP_FOOTER")&&(e.publicFooter=!0),n(".foot-navigation")&&(e.footer=!0);var s=i.d.loadModule("reporter");setTimeout(function(){s&&s.then&&s.then(function(n){n.send({type:"log",category:"logo_report",sampling:1,msg:JSON.stringify(e),spm:"xxpt_logo_version",userNick:i.b._runtimeConfig.nick})})},32)}}catch(m){i.d.log("LogoPlugin",m)}},1e3)})},function(e,n,t){"use strict";t.r(n);var i=t(0);i.a.then(function(){var e=i.d.loadModule("reporter");e&&e.then(function(e){var n=i.b._runtimeConfig.spm;try{var t=function(){var e="".concat(location.hostname).concat(location.pathname);return"/"===e[e.length-1]?e.substring(0,e.length-1):e}(),r=i.d.getPageSPM().join(".");if(100*Math.random()>99||i.d.debug){e.send({type:"custom",category:"count",sampling:100,key:JSON.stringify({url:t,spm:r}),spm:"xxpt_pages",userNick:"0"}),i.d.log("Plugin","send SPM check result",{url:t,spm:r});var o=window.TOP,a=function(n){e.send({type:"custom",category:"count",sampling:100,key:JSON.stringify(n),spm:"xxpt_feedback",userNick:"0"}),i.d.log("Plugin","send feedback check result",n)};setTimeout(function(){var e={spm:n,url:t};o?(e.jsSDK=1,o.ui.newfeedback?(e.feedback="new",a(e)):o.ui.feedback&&(e.feedback="old",a(e))):(e.jsSDK=0,e.feedback=0,a(e))},0);var c=window.React;if(c&&c.version&&e.send({type:"custom",category:"count",sampling:100,key:c.version,spm:"xxpt_react_version",userNick:"0"}),i.d.log("Plugin","send React check result",{url:t,spm:r}),window.getComputedStyle){var s=window.getComputedStyle(document.body).fontFamily;if(s){var m=Math.min.apply(void 0,["\u5fae\u8f6f\u96c5\u9ed1","\\5FAE\\8F6F\\96C5\\9ED1","Microsoft YaHei"].map(function(e){var n=s.indexOf(e);return-1===n?1/0:n})),u=Math.min.apply(void 0,["\u5b8b\u4f53","\\5B8B\\4F53","SimSun"].map(function(e){var n=s.indexOf(e);return-1===n?1/0:n}));u!==1/0&&u<m&&e.send({type:"log",sampling:100,sourceSPM:i.b._runtimeConfig.spm,spm:"xxpt_body_font_family",userNick:"0"})}i.d.log("Plugin","send Body Font check result",{url:t,spm:r})}e.send({type:"log",sampling:100,cookies:document.cookie.split(/;\s+/).map(function(e){return e.split("=")[0]}).join(","),spm:"xxpt_domain_cookie",userNick:"0"}),i.d.log("Plugin","send Cookies check result")}}catch(l){i.d.log("SPMPlugin",l)}})})},function(e,n,t){"use strict";t.r(n);var i=t(0),r=/:\/\/([^\/\s]+)([^\?\#\s]*)([^\s]*)$/;i.a.then(function(){return setTimeout(function(){try{if(window.performance&&-1!==location.href.indexOf("terms.alicdn.com/legal-agreement/terms/TD/TD201608241350_69155.html")){var e=null;if(performance.getEntriesByType){var n=performance.getEntriesByType("navigation")[0];n&&(e=n.toJSON())&&(delete e.entryType,delete e.serverTiming,e.from="getEntriesByType")}if(!e&&performance.timing){var t=performance.timing,o=performance.timeOrigin||t.fetchStart;e={from:"timing"},["connectStart","connectEnd","domComplete","domComplete","domContentLoadedEventStart","domInteractive","domainLookupEnd","domainLookupStart","responseStart","responseEnd","loadEventStart","loadEventEnd"].forEach(function(n){var i=t[n]||0;e[n]=0!==i?i-o:0})}if(e&&performance.getEntries)e.scripts=[],e.csses=[],e.images=[],performance.getEntries().forEach(function(n){if("resource"===n.entryType){var t=n.name.match(r);if(!t)return void("data:"!==n.name.slice(0,5)&&i.d.log("TimingPlugin",new Error("Find a invalid url ".concat(n.name))));var o=t[1],a=t[2],c={name:"".concat(o).concat(function(e){return e.length>30?"".concat(e.slice(0,10),"...").concat(e.slice(-15)):e}(a)),type:n.initiatorType,fetchStart:n.fetchStart,responseStart:n.responseStart,responseEnd:n.responseEnd};switch(n.initiatorType){case"img":if(-1!=n.name.indexOf("retcode.taobao.com")||-1!=n.name.indexOf("log.mmstat.com")||-1!=n.name.indexOf("fourier.alibaba.com"))return;return void e.images.push(c);case"script":return void e.scripts.push(c);case"link":return void e.csses.push(c)}}});if(e){var a=i.d.loadModule("reporter");a&&a.then&&a.then(function(n){n.send({type:"log",sampling:1,category:"timing_report",msg:JSON.stringify(e)||"",spm:i.b._runtimeConfig.spm,userNick:i.b._runtimeConfig.nick})})}}}catch(c){i.d.log("TimingPlugin",c)}},32)})}]]);