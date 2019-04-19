define("o2widgetLazyload",function(e,o,t){"use strict";return function(o){var t={cls:"o2data-lazyload",defCls:["lazy-fn","o2loading"],scrollEvent:"scroll.lazydata resize.lazydata"},n=window.pageConfig?window.pageConfig.o2JSConfig:{};n=n||{},window._o2ver={},$.extend(t,o),window.tplVersion=$.extend(window.o2tplVersion||{},window.tplVersion);var a=e("store"),i=!!window.ActiveXObject||navigator.userAgent.indexOf("Trident")>0,r="localStorage"in window&&null!==window.localStorage,d=i?1e3:500,l=t.defCls.concat(t.cls).join(" ");d="number"==typeof n.preloadOffset?n.preloadOffset:d;var c=!!n.ieStorage&&n.ieStorage,s=c&&r,f=function(){var e=null;_.eventCenter.trigger("channel:ready"),$(window).bind(t.scrollEvent,function(o){clearTimeout(e),e=setTimeout(function(){m()},200)}).trigger(t.scrollEvent.split(" ")[0])},m=function(){var e=$(document).scrollTop(),o=$(window).height()+d,r=t.cls,l=$("."+r);l.each(function(){var t=$(this),r=t.data("rel")||this,d=$(r),l=t.html(),c=t.data("tpl")||"",f=t.data("remotetpl")||"",m="boolean"==typeof t.data("async")&&t.data("async"),u="boolean"==typeof t.data("forcerender")&&t.data("forcerender"),w=null;if(""!==f&&(c=f),!t.hasClass("o2loading")&&(u||d.offset().top-(e+o)<0&&d.offset().top+d.outerHeight(!0)>=e))if(""!==c&&n.pathRule)if(/\.js/.test(c)?(w=c,c=w.match(/\/(\w*)(\.min)?\.js/)[1]||""):w=n.pathRule(c),!s&&i||!a.enabled)h(t,l,m,"",p(w,!1,t));else{var y=a.get(w);y&&window.tplVersion&&y.version===window.tplVersion[c]?(g(t,y),h(t,l,m,y)):h(t,l,m,"",p(w,!0,t))}else h(t,l,m,"")})},g=function(e,o){"object"==typeof o&&(window._o2ver[o.version]||(o.style&&$("head").append("<style>"+o.style+"</style>"),o.script&&$("head").append("<script>"+o.script+"</script>"),window._o2ver[o.version]=o.version,e.trigger("tplLoadDone",o),setTimeout(function(){m()},200)))},p=function(e,o,t){var n=$.Deferred();return seajs.use(e,function(i){i?(o&&a.set(e,i),g(t,i),n.resolve(i)):n.reject()}),n.promise()},u=function(e,o,t,n){"undefined"!=typeof n?$.when(n).done(function(t){e.html(o).removeClass(l).trigger("render",t)}).fail(function(){e.trigger("tplLoadFail")}):e.html(o).removeClass(l).trigger("render",t)},h=function(e,o,t,n,a){e.data("events")&&e.data("events").beforerender?e.html(o).addClass("o2loading").trigger("beforerender",function(){u(e,o,n,a)}):e.addClass("o2loading")&&u(e,o,n,a)};f(),this.detectRender=m}}),define(function(e){"use strict";var o=pageConfig.o2AppName||"";""!==o&&$("html").addClass(o);var t=e("o2console");t.consoleConfigFunc(),e.async(["jdf/1.0.0/unit/globalInit/5.0.0/globalInit.js","jdf/1.0.0/unit/category/2.0.0/category.js","//static.360buyimg.com/mtd/pc/components/1.0.0/lazyload/lazyload.js"],function(o,t,n){o(),t({type:"mini",mainId:"#categorys-mini",el:"#categorys-mini-main"});var a={};$("body").o2lazyload().bind("render",".o2data-lazyload",function(o,t){var n="",i=$(o.target),r=i.data("id"),d=i.data("script")||"",l=window.data[r]||{};if(a[r])n=a[r];else{var c=i.find('[type="text/template"]');n="object"==typeof t?t.dom:c.html(),a[r]=n}var s=e("o2tpl");try{var f=s(n,l);i.html(f),setTimeout(function(){i.trigger("done"),""!==d&&new Function(d).call(i),$(window).trigger("resize")},0)}catch(o){console.log(o)}});var i=e("o2widgetLazyload");window.o2widgetLazyload=new i,"undefined"==typeof pageConfig.processImageUrl&&(pageConfig.processImageUrl=function(e,o,t){if(!e)return"";var n=pageConfig.isRetina?"/s"+o+"_jfs/":"/s"+t+"_jfs/";return e=e.replace(/http(s?):/,""),e.replace(/http(s?):/,"").replace(/\/[^\/]*?jfs\//,function(){return n})})})}),define("o2ModXinrenBottom",function(e){for(var o,t,n=["//hbc.jd.com","//beauty.jd.com","//food.jd.com","//baby.jd.com","//toy.jd.com","//pet.jd.com","//gardening.jd.com","//channel.jd.com/food.html","//channel.jd.com/baby.html","//channel.jd.com/pet.html","//channel.jd.com/1320-1585.html","//channel.jd.com/1319-1523.html","//channel.jd.com/1319-1525.html"],a=["//fresh.jd.com"],i=["//shechi.jd.com"],r=n.concat(a,i),d={consume:"0017",fresh:"0018",clothes:"0019"},l=window.location.href.replace(/^http(s)?:/,""),c=0;c<r.length;c++)if(t=new RegExp(r[c]),t.test(l)){o=c,e.async(["//static.360buyimg.com/mtd/pc/xinren/2.0.0/mod_xinren_bottom/mod_xinren_bottom.min.js","//static.360buyimg.com/mtd/pc/xinren/2.0.0/mod_xinren_bottom/mod_xinren_bottom.min.css"],function(e){var t,r=n.length,l=a.length;i.length;t=o<r?d.consume:o<r+l?d.fresh:d.clothes,new e({productLineId:t})});break}}),seajs.use("o2ModXinrenBottom");