_.Module.define({path:"frs-base/pagelet/content",sub:{initial:function(n){this.initialEvent(n)},initialEvent:function(n){var t=this;n.on("tab_change",function(o){Bigpipe.broadcast("tab_change_finish",o),$(n.document).addClass("pagelet-loading"),n.refresh({url:o.url}).then(function(){$(n.document).removeClass("pagelet-loading"),t.gotoTop()})})},gotoTop:function(){if($("#tb_nav")&&$("#tb_nav").offset()){var n=$("html, body").animate({scrollTop:$("#tb_nav").offset().top-50},250,"linear");$("window").on("scroll",function(){n.stop()})}}}});_.Module.define({path:"tbui/widget/page_router",sub:{routerSpec:{path:/^\/f$/},currentRouter:{path:""},routerRuleKeys:["path","tab","subTab","cat_id","cid","fcid","scid","hcid","httype","hmtype","pn","kw","status","start","end"],initial:function(t){var e=!(!window.history||!window.history.pushState);e&&(this.pagelet=t,this.location=$.tb.location,this.initRouter(),this.bindEvents(),this.initialTitleEvent())},initRouter:function(){this.refreshCurrentRouter()},bindEvents:function(){window.onpopstate=$.proxy(this.handleStateChange,this),this.pagelet.on("router_handle",$.proxy(this.navigate,this))},handleStateChange:function(t){var e=t.state;e&&this.navigate(e)},navigate:function(t){var e=this.getRouter(t.url);this.setRouter(this.currentRouter,e)},setRouter:function(t,e){var a=this.getUrlDiff(t,e);return Bigpipe.dispatchEvent("page_router_changed",e),a.tab?(Bigpipe.broadcast("tab_change",e),this.pushState(e),!1):a.subTab?(Bigpipe.broadcast("sub_tab_change",e),this.pushState(e),!1):a.cat_id?(Bigpipe.broadcast("catalog_change",e),this.pushState(e),!1):a.cid||a.hcid||a.httype||a.hmtype?(Bigpipe.broadcast("page_change",e),"category"===e.tab&&a.cid&&Bigpipe.broadcast("category_cate_changed",e),this.pushState(e),!1):a.fcid||a.scid?(Bigpipe.broadcast("page_change",e),this.pushState(e),!1):a.status||a.start||a.end?(Bigpipe.broadcast("page_change",e),this.pushState(e),!1):a.pn?(Bigpipe.broadcast("page_change",e),this.pushState(e),!1):void 0},getUrlDiff:function(t,e){var a={},i=this.routerRuleKeys;return $.each(i,function(){a[this]=!(t[this]===e[this])}),a},refreshCurrentRouter:function(){var t=this.location.getHref();this.currentRouter=this.getRouter(t)},getRouter:function(t){var e=URI(t),a=URI.parseQuery(e.search());return $.extend({url:t,path:e.path()},a)},pushState:function(t){window.history.pushState(t,"",t.url),this.refreshCurrentRouter()},initialTitleEvent:function(){var t=PageData.forum.name+"\u5427_\u767e\u5ea6\u8d34\u5427",e=PageData.forum.name,a={main:t,album:e+"\u5427\u7684\u56fe\u7247_"+t,good:e+"\u5427\u7684\u7cbe\u54c1\u8d34_"+t,video:e+"\u5427\u7684\u89c6\u9891_"+t,wangju:e+"\u5427\u7684\u5267\u96c6_"+t,hotthread:e+"\u5427\u7684\u70ed\u95e8\u8d34_"+t,group:e+"\u5427\u7684\u7fa4\u7ec4_"+t,"default":t,game:e+"\u5427\u7684\u6e38\u620f_"+t,category:e+"\u5427\u7684\u5206\u7c7b\u770b\u8d34_"+t,deal:e+"\u5427\u7684\u4e8c\u624b_"+t,gathering:e+"\u5427\u7684\u6d3b\u52a8_"+t,tuan:e+"\u5427\u7684\u56e2\u8d2d_"+t,qa:e+"\u5427\u7684\u95ee\u7b54_"+t,schedule:e+"\u5427\u7684\u5b98\u65b9\u65e5\u7a0b_"+t,newDeal:e+"\u5427\u7684\u4e8c\u624b\u53d1\u5e03_"+t};Bigpipe.addEventListener("page_router_changed",function(t){var e=t.tab;e=e||"main",window.document.title=a[e]})}}});