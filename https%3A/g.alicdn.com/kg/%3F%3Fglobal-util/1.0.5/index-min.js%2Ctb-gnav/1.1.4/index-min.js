define("kg/global-util/1.0.5/index",[],function(require,exports,module){var kgGlobalUtil105Index;kgGlobalUtil105Index=function(exports){function getCookie(e){var n=document.cookie.match("(?:^|;)\\s*"+e+"=([^;]*)");return n&&n[1]?decodeURIComponent(n[1]):""}var S=KISSY;window.TB||(window.TB={}),window.TB.Global||(window.TB.Global={});var onLine=-1===location.hostname.indexOf("daily.taobao.net"),cdnHost=location.protocol+"//"+(onLine?"g.alicdn.com":"g-assets.daily.taobao.net");return S.config({packages:[{name:"tbc",combine:!0,path:cdnHost+"/tbc/",ignorePackageNameInUri:!0},{name:"gallery",combine:!0,path:"//assets.alicdn.com/s/kissy/gallery/",ignorePackageNameInUri:!0}]}),exports=TB.Global={version:"3.0",isLogin:function(){var e=getCookie("_nk_")||getCookie("tracknick"),n=getCookie("_l_g_"),t=getCookie("lgc");return!!(n&&e||t)},getNick:function(){var e=getCookie("_nk_"),n=getCookie("lgc"),t=e||n;return t&&(t=this.fromUnicode(t).replace(/[<>%&;\\'"]/g,"")),t},getAvatar:function(){var e="//gtms03.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_80x80.jpg",n=this.getNick();return n?"//wwc.alicdn.com/avatar/getAvatar.do?userNick="+n+"&_input_charset=UTF-8&width=80&height=80&type=sns":e},fromUnicode:function(e){return e.replace(/\\u([a-f\d]{4})/gi,function(e,n){return String.fromCharCode(parseInt(n,16))})},getTag:function(){return parseInt(S.unparam(getCookie("uc1")).tag,10)},getHost:function(){return this.isDaily()?".daily.taobao.net":".taobao.com"},getCdnHost:function(){return cdnHost},isDaily:function(){return!onLine},isMobile:function(){var e=navigator.userAgent;return!!e.match(/AppleWebKit.*Mobile.*/)||"ontouchstart"in document.documentElement},getCharset:function(){return/utf\-*8/i.test(document.charset||document.characterSet)?"utf8":"gbk"},isHttps:function(){return"https:"===location.protocol},getComponentVersion:function(name){var search=location.search.replace("?","");if(search&&-1!==search.indexOf("fn-")){search=search.split("&");for(var obj={},i=0,len=search.length;len>i;i++)/^fn\-/.test(search[i])&&(obj[search[i].replace(/=.+$/,"")]=search[i].replace(/^[^=]+=/,""));var sname="fn-"+name;if(obj[sname]&&/^\d+\.\d+\.\d+$/.test(obj[sname]))return obj[sname]}var container=document.getElementById("J_SiteNav");if(container){var config=container.getAttribute("data-component-config");if(config)return config=window.JSON&&JSON.parse?JSON.parse(config):eval("("+config+")"),config[name]||""}return""},use:function(e,n){if(/kg\//.test(e)){var t=e.split("/"),o=this.getComponentVersion(t[1]);if(o)return t[1]+="/"+o,t[2]||t.push("index"),S.use(t.join("/"),n)}}}}(),module.exports=kgGlobalUtil105Index});define("kg/tb-gnav/1.1.4/index",["util","cookie","io","kg/tb-nav/2.5.3/lib/menu/index","ua","node","kg/tb-nav/2.5.3/lib/global/index","dom","event","kg/tb-nav/2.5.3/lib/index"],function(n,a,t){var s,e,i,o,l,c,d,r,m,v,u,p=n("util"),_=n("cookie"),g=n("io"),h=n("kg/tb-nav/2.5.3/lib/menu/index"),f=n("ua"),b=n("node"),T=n("kg/tb-nav/2.5.3/lib/global/index"),E=n("dom"),N=(n("event"),n("kg/tb-nav/2.5.3/lib/index"));s=function(n){return n={TAOBAO_HOMEPAGE:"\u6dd8\u5b9d\u7f51\u9996\u9875",HOPPING_CART:"\u8d2d\u7269\u8f66",PAID_ITEM:"\u5df2\u4e70\u5230\u7684\u5b9d\u8d1d",MY_HISTORY:"\u6211\u7684\u8db3\u8ff9",PAID_SHOP:"\u8d2d\u4e70\u8fc7\u7684\u5e97\u94fa",FAVORITE:"\u6536\u85cf\u5939",FAVORITE_ITEM:"\u6536\u85cf\u7684\u5b9d\u8d1d",FAVORITE_SHOP:"\u6536\u85cf\u7684\u5e97\u94fa",ORDER:"\u8ba2\u5355\u7ba1\u7406",DELIVERY_TRACE:"\u7269\u6d41\u8ffd\u8e2a",HELP:"\u6d77\u5916\u6d88\u8d39\u8005\u5e2e\u52a9",CHINA:"\u5927\u9646",logistics:"\u8de8\u5883\u7269\u6d41\u7ba1\u7406",SOUTHEAST_ASIA:"\u4e1c\u5357\u4e9a",XX:"\u5168\u7403",MOBILETAO:"\u624b\u673a\u901b\u6dd8\u5b9d",LOGIN:"\u767b\u5f55",FREEREG:"\u514d\u8d39\u6ce8\u518c",MESSAGE:"\u6d88\u606f",GOLOGIN:"\u4eb2\uff0c\u8bf7\u767b\u5f55",REGISTER:"\u6ce8\u518c",ACCOUNT_MANAGE:"\u5e10\u53f7\u7ba1\u7406",EXIT:"\u9000\u51fa",MY_TAOBAO:"\u6211\u7684\u6dd8\u5b9d",NEW_USER_GUIDE:"\u65b0\u624b\u8d2d\u7269\u5165\u95e8\u6559\u5b66",QUICK_GET_NEW_GIFT:"\u5feb\u53bb\u9886\u65b0\u4eba\u793c\u91d1!",ACTIVATE_MY_POWER:"\u7acb\u523b\u6fc0\u6d3b\u6211\u7684\u8eab\u4efd",LANGUAGE:"\u8bed\u8a00\u7248\u672c",ZH_CN_CHINESE:"\u7b80\u4f53\u4e2d\u6587",ZH_TW_CHINESE:"\u7e41\u9ad4\u4e2d\u6587",EN:"\u82f1\u6587",SAVE:"\u4fdd\u5b58",CN:"\u4e2d\u56fd\u5927\u9646",TW:"\u53f0\u6e7e",HK:"\u9999\u6e2f",MO:"\u6fb3\u95e8",JP:"\u65e5\u672c",KR:"\u97e9\u56fd",SG:"\u65b0\u52a0\u5761",MY:"\u9a6c\u6765\u897f\u4e9a",US:"\u7f8e\u56fd",CA:"\u52a0\u62ff\u5927",NZ:"\u65b0\u897f\u5170",AU:"\u6fb3\u5927\u5229\u4e9a",GLOBAL:"\u5168\u7403",side_cart:"\u8d2d\u7269\u8f66",change_language:"\u8bed\u8a00",REGION_SWITCH:"\u5730\u533a\u5207\u6362\u4e2d",REGION_SWITCH_ERROR:"\u5730\u533a\u5207\u6362\u5931\u8d25"}}(),e=function(n){return n={TAOBAO_HOMEPAGE:"\u6dd8\u5bf6\u7db2\u9996\u9801",HOPPING_CART:"\u8cfc\u7269\u8eca",MY_MSG_CENTER:"\u6211\u7684\u6d88\u606f\u4e2d\u5fc3",PAID_ITEM:"\u5df2\u8cb7\u5230\u7684\u5bf6\u8c9d",PAID_SHOP:"\u8cfc\u8cb7\u904e\u7684\u5e97\u92ea",MY_HISTORY:"\u6211\u7684\u8db3\u8de1",FAVORITE:"\u6536\u85cf\u593e",FAVORITE_ITEM:"\u6536\u85cf\u7684\u5bf6\u8c9d",FAVORITE_SHOP:"\u6536\u85cf\u7684\u5e97\u8216",logistics:"\u8de8\u5883\u7269\u6d41\u7ba1\u7406",HELP:"\u6d77\u5916\u6d88\u8cbb\u8005\u5e6b\u52a9",MOBILETAO:"\u624b\u6a5f\u901b\u6dd8\u5bf6",CHINA:"\u5927\u9678",SOUTHEAST_ASIA:"\u6771\u5357\u4e9e",XX:"\u5168\u7403",LOGIN:"\u767b\u9304",MESSAGE:"\u6d88\u606f",GOLOGIN:"\u89aa\uff0c\u8acb\u767b\u9304",REGISTER:"\u8a3b\u518a",ACCOUNT_MANAGE:"\u8cec\u865f\u7ba1\u7406",EXIT:"\u9000\u51fa",FREEREG:"\u514d\u8cbb\u6ce8\u518a",MY_TAOBAO:"\u6211\u7684\u6dd8\u5bf6",NEW_USER_GUIDE:"\u65b0\u624b\u8d2d\u7269\u5165\u95e8\u6559\u5b66",QUICK_GET_NEW_GIFT:"\u5feb\u53bb\u9886\u65b0\u4eba\u793c\u91d1!",ACTIVATE_MY_POWER:"\u7acb\u523b\u6fc0\u6d3b\u6211\u7684\u8eab\u4efd",EN:"\u82f1\u6587",SAVE:"\u4fdd\u5b58",CN:"\u4e2d\u570b\u5927\u9678",TW:"\u53f0\u7063",HK:"\u9999\u6e2f",MO:"\u6fb3\u9580",JP:"\u65e5\u672c",KR:"\u97d3\u570b",SG:"\u65b0\u52a0\u5761",MY:"\u99ac\u4f86\u897f\u4e9e",US:"\u7f8e\u570b",CA:"\u52a0\u62ff\u5927",NZ:"\u65b0\u897f\u862d",AU:"\u6fb3\u5927\u5229\u4e9e",GLOBAL:"\u5168\u7403",side_reg:"\u6ce8\u518c",side_lq:"\u9886\u53d6",REGION_SWITCH:"\u5730\u5340\u5207\u63db\u4e2d",REGION_SWITCH_ERROR:"\u5730\u5340\u5207\u63db\u5931\u6557"}}(),i=function(n){return n={send:function(n){window.JSTracker2=window.JSTracker2||[];var a="http://jstracker.www.taobao.com/nav/"+n.category;window.JSTracker2.push({url:a,msg:n.msg})}}}(),o=function(n){return n=function(n,a){return'\n    <ul class="site-nav-bd-l" id="J_SiteNavBdL" data-spm-ab="1">\n      <li class="site-nav-menu site-nav-switch site-nav-multi-menu J_MultiMenu" data-name="region">\n        <div class="site-nav-menu-hd">\n          <span class="site-nav-region">'+n+'</span>\n          <span class="site-nav-arrow"><span class="site-nav-icon">&#xe605;</span></span>\n        </div>\n        <div class="site-nav-menu-bd site-nav-menu-list">\n          <ul id="J_SiteNavRegionList" class="site-nav-region-list site-nav-menu-bd-panel menu-bd-panel" role="listbox" aria-expanded="true">\n          </ul>\n        </div>\n      </li>\n      <li class="site-nav-menu site-nav-login" id="J_SiteNavLogin" data-name="login" data-spm="754894437">\n        <div class="site-nav-menu-hd">\n          <a href="//login.taobao.com/member/login.jhtml?f=top&redirectURL=https%3A%2F%2Fwww.taobao.com%2F" target="_top">\n            <span>'+a("GOLOGIN")+'</span>\n          </a>\n        </div>\n      </li>\n      <li id="J_Tmsg" class="site-nav-tmsg tmsg site-nav-multi-menu J_MultiMenu" data-name="tmsg" data-spm="1997563201">\n        <div class="J_Menu site-nav-menu">\n          <div class="site-nav-menu-hd J_Tmsg_Basic tmsg_basic">\n            <span class="J_Tmsg_Logo tmsg_logo_area" style="zoom:1;">\n          <span class="J_Tmsg_Logo_Loading tmsg_logo_loading"></span>\n            <span class="J_Tmsg_Logo_Icon tmsg_logo_ico site-nav-icon" style="display:none">&#xe602;</span>\n            <span class="J_Tmsg_Logo_Text tmsg_logo_text">'+a("MESSAGE")+'</span>\n            <span class="J_Tmsg_Logo_Unread tmsg_logo_unread"></span>\n            </span>\n            <span class="site-nav-arrow"><span class="site-nav-icon">&#xe605;</span></span>\n          </div>\n          <div class="site-nav-menu-bd">\n            <div class="J_Tmsg_Panel_Apps tmsg_panel_apps"></div>\n          </div>\n        </div>\n        <div class="J_Tmsg_Panels tmsg_panels">\n          <div class="J_Tmsg_Panel_Detail tmsg_panel_detail"></div>\n          <div class="J_Tmsg_Panel_history tmsg_panel_history"></div>\n          <div class="J_Tmsg_Panel_Strong tmsg_panel_strong"></div>\n          <div class="J_Tmsg_Panel_Setting tmsg_panel_setting"></div>\n        </div>\n      </li>\n      <li class="site-nav-menu site-nav-mobile" id="J_SiteNavMobile" data-name="mobile" data-spm="1997563273">\n        <div class="site-nav-menu-hd">\n          <a href="//www.taobao.com/m" target="_top">\n            <span>'+a("MOBILETAO")+'</span>\n          </a>\n        </div>\n      </li>\n      <li class="site-nav-menu site-nav-weekend site-nav-multi-menu J_MultiMenu" id="J_SiteNavWeekend" data-name="weekend" data-spm="">\n      </li>\n    </ul>\n    <ul class="site-nav-bd-r" id="J_SiteNavBdR" data-spm-ab="2">\n      <li class="site-nav-menu site-nav-home" id="J_SiteNavHome" data-name="home" data-spm="1581860521">\n        <div class="site-nav-menu-hd">\n          <a href="//www.taobao.com/" target="_top">\n            <span>'+a("TAOBAO_HOMEPAGE")+'</span>\n          </a>\n        </div>\n      </li>\n      <li class="site-nav-menu site-nav-mytaobao site-nav-multi-menu J_MultiMenu" id="J_SiteNavMytaobao" data-name="mytaobao" data-spm="1997525045">\n        <div class="site-nav-menu-hd">\n          <a href="//i.taobao.com/my_taobao.htm" target="_top">\n            <span>'+a("MY_TAOBAO")+'</span>\n          </a>\n          <span class="site-nav-arrow"><span class="site-nav-icon">&#xe605;</span></span>\n        </div>\n        <div class="site-nav-menu-bd site-nav-menu-list">\n          <div class="site-nav-menu-bd-panel menu-bd-panel">\n            <a href="//trade.taobao.com/trade/itemlist/list_bought_items.htm" target="_top">'+a("PAID_ITEM")+'</a>\n            <a href="//www.taobao.com/markets/footmark/tbfoot" target="_top">'+a("MY_HISTORY")+'</a>\n          </div>\n        </div>\n      </li>\n      <li class="site-nav-menu site-nav-cart site-nav-menu-empty site-nav-multi-menu J_MultiMenu" id="J_MiniCart" data-name="cart"\n        data-spm="1997525049">\n        <div class="site-nav-menu-hd">\n          <a href="//cart.taobao.com/cart.htm?from=mini&ad_id=&am_id=&cm_id=&pm_id=1501036000a02c5c3739" target="_top">\n            <span class="site-nav-icon site-nav-icon-highlight">&#xe603;</span>\n            <span>'+a("HOPPING_CART")+'</span>\n            <strong class="h" id="J_MiniCartNum"></strong>\n          </a>\n          <span class="site-nav-arrow"><span class="site-nav-icon">&#xe605;</span></span>\n        </div>\n        <div class="site-nav-menu-bd">\n          <div class="site-nav-menu-bd-panel menu-bd-panel">\n          </div>\n        </div>\n      </li>\n      <li class="site-nav-menu site-nav-favor site-nav-multi-menu J_MultiMenu" id="J_SiteNavFavor" data-name="favor" data-spm="1997525053">\n        <div class="site-nav-menu-hd">\n          <a href="//shoucang.taobao.com/shop_collect_list.htm" target="_top">\n            <span class="site-nav-icon">&#xe604;</span>\n            <span>'+a("FAVORITE")+'</span>\n          </a>\n          <span class="site-nav-arrow"><span class="site-nav-icon">&#xe605;</span></span>\n        </div>\n        <div class="site-nav-menu-bd site-nav-menu-list">\n          <div class="site-nav-menu-bd-panel menu-bd-panel">\n            <a href="//shoucang.taobao.com/item_collect.htm" target="_top">'+a("FAVORITE_ITEM")+'</a>\n            <a href="//shoucang.taobao.com/shop_collect_list.htm" target="_top">'+a("FAVORITE_SHOP")+'</a>\n          </div>\n        </div>\n      </li>\n      <li class="site-nav-menu logistics" data-spm="2017060101">\n        <div class="site-nav-menu-hd">\n          <a href="//consign.i56.taobao.com/user/consolidation/consolidatedGoods.htm" target="_top">'+a("logistics")+'</a>\n        </div>\n      </li>\n      <li class="site-nav-menu help" data-spm="2017060102">\n        <div class="site-nav-menu-hd">\n          <a href="//world.taobao.com/helper/" target="_top">'+a("HELP")+"</a>\n        </div>\n      </li>\n    </ul>"}}(),l=function(n){return n=function(n){return'\n    <ul class="site-nav-bd-l" id="J_SiteNavBdL" data-spm-ab="1">\n      <li class="site-nav-menu site-nav-switch site-nav-multi-menu J_MultiMenu" data-name="region">\n        <div class="site-nav-menu-hd">\n          <span class="site-nav-region">'+n+'</span>\n          <span class="site-nav-arrow"><span class="site-nav-icon">&#xe605;</span></span>\n        </div>\n        <div class="site-nav-menu-bd site-nav-menu-list">\n          <ul id="J_SiteNavRegionList" class="site-nav-region-list site-nav-menu-bd-panel menu-bd-panel" role="listbox" aria-expanded="true">\n          </ul>\n        </div>\n      </li>\n      <li class="site-nav-menu site-nav-login" id="J_SiteNavLogin" data-name="login" data-spm="754894437">\n        <div class="site-nav-menu-hd">\n          <a href="//login.taobao.com/member/login.jhtml?f=top&redirectURL=https%3A%2F%2Fwww.taobao.com%2F" target="_top">\n            <span>\u4eb2\uff0c\u8bf7\u767b\u5f55</span>\n          </a>\n        </div>\n      </li>\n      <li id="J_Tmsg" class="site-nav-tmsg tmsg site-nav-multi-menu J_MultiMenu" data-name="tmsg" data-spm="1997563201">\n        <div class="J_Menu site-nav-menu">\n          <div class="site-nav-menu-hd J_Tmsg_Basic tmsg_basic">\n            <span class="J_Tmsg_Logo tmsg_logo_area" style="zoom:1;">\n            <span class="J_Tmsg_Logo_Loading tmsg_logo_loading"></span>\n            <span class="J_Tmsg_Logo_Icon tmsg_logo_icon site-nav-icon" style="display:none">&#xe602;</span>\n            <span class="J_Tmsg_Logo_Text tmsg_logo_text">\u6d88\u606f</span>\n            <span class="J_Tmsg_Logo_Unread tmsg_logo_unread"></span>\n            </span>\n            <span class="site-nav-arrow"><span class="site-nav-icon">&#xe605;</span></span>\n          </div>\n          <div class="site-nav-menu-bd">\n            <div class="J_Tmsg_Panel_Apps tmsg_panel_apps"></div>\n          </div>\n        </div>\n        <div class="J_Tmsg_Panels tmsg_panels">\n          <div class="J_Tmsg_Panel_Detail tmsg_panel_detail"></div>\n          <div class="J_Tmsg_Panel_history tmsg_panel_history"></div>\n          <div class="J_Tmsg_Panel_Strong tmsg_panel_strong"></div>\n          <div class="J_Tmsg_Panel_Setting tmsg_panel_setting"></div>\n        </div>\n      </li>\n      <li class="site-nav-menu site-nav-mobile" id="J_SiteNavMobile" data-name="mobile" data-spm="1997563273">\n        <div class="site-nav-menu-hd">\n          <a href="//www.taobao.com/m" target="_top">\n            <span>\u624b\u673a\u901b\u6dd8\u5b9d</span>\n          </a>\n        </div>\n      </li>\n      <li class="site-nav-menu site-nav-weekend site-nav-multi-menu J_MultiMenu" id="J_SiteNavWeekend" data-name="weekend" data-spm="">\n      </li>\n    </ul>\n    <ul class="site-nav-bd-r" id="J_SiteNavBdR" data-spm-ab="2">\n      <li class="site-nav-menu site-nav-home" id="J_SiteNavHome" data-name="home" data-spm="1581860521">\n        <div class="site-nav-menu-hd">\n          <a href="//www.taobao.com/" target="_top">\n            <span>\u6dd8\u5b9d\u7f51\u9996\u9875</span>\n          </a>\n        </div>\n      </li>\n      <li class="site-nav-menu site-nav-mytaobao site-nav-multi-menu J_MultiMenu" id="J_SiteNavMytaobao" data-name="mytaobao" data-spm="1997525045">\n        <div class="site-nav-menu-hd">\n          <a href="//i.taobao.com/my_taobao.htm" target="_top">\n            <span>\u6211\u7684\u6dd8\u5b9d</span>\n          </a>\n          <span class="site-nav-arrow"><span class="site-nav-icon">&#xe605;</span></span>\n        </div>\n        <div class="site-nav-menu-bd site-nav-menu-list">\n          <div class="site-nav-menu-bd-panel menu-bd-panel">\n            <a href="//trade.taobao.com/trade/itemlist/list_bought_items.htm" target="_top">\u5df2\u4e70\u5230\u7684\u5b9d\u8d1d</a>\n            <a href="//www.taobao.com/markets/footmark/tbfoot" target="_top">\u6211\u7684\u8db3\u8ff9</a>\n          </div>\n        </div>\n      </li>\n      <li class="site-nav-menu site-nav-cart site-nav-menu-empty site-nav-multi-menu J_MultiMenu" id="J_MiniCart" data-name="cart"\n        data-spm="1997525049">\n        <div class="site-nav-menu-hd">\n          <a href="//cart.taobao.com/cart.htm?from=mini&ad_id=&am_id=&cm_id=&pm_id=1501036000a02c5c3739" target="_top">\n            <span class="site-nav-icon site-nav-icon-highlight">&#xe603;</span>\n            <span>\u8d2d\u7269\u8f66</span>\n            <strong class="h" id="J_MiniCartNum"></strong>\n          </a>\n          <span class="site-nav-arrow"><span class="site-nav-icon">&#xe605;</span></span>\n        </div>\n        <div class="site-nav-menu-bd">\n          <div class="site-nav-menu-bd-panel menu-bd-panel">\n          </div>\n        </div>\n      </li>\n      <li class="site-nav-menu site-nav-favor site-nav-multi-menu J_MultiMenu" id="J_SiteNavFavor" data-name="favor" data-spm="1997525053">\n        <div class="site-nav-menu-hd">\n          <a href="//shoucang.taobao.com/shop_collect_list.htm" target="_top">\n            <span class="site-nav-icon">&#xe604;</span>\n            <span>\u6536\u85cf\u5939</span>\n          </a>\n          <span class="site-nav-arrow"><span class="site-nav-icon">&#xe605;</span></span>\n        </div>\n        <div class="site-nav-menu-bd site-nav-menu-list">\n          <div class="site-nav-menu-bd-panel menu-bd-panel">\n            <a href="//shoucang.taobao.com/item_collect.htm" target="_top">\u6536\u85cf\u7684\u5b9d\u8d1d</a>\n            <a href="//shoucang.taobao.com/shop_collect_list.htm" target="_top">\u6536\u85cf\u7684\u5e97\u94fa</a>\n          </div>\n        </div>\n      </li>\n      <li class="site-nav-menu site-nav-catalog" id="J_SiteNavCatalog" data-name="catalog" data-spm="1997563209">\n        <div class="site-nav-menu-hd">\n          <a href="//www.taobao.com/tbhome/page/market-list" target="_top">\n            <span>\u5546\u54c1\u5206\u7c7b</span>\n          </a>\n        </div>\n      </li>\n      <li class="site-nav-pipe">|</li>\n      <li class="site-nav-menu site-nav-seller site-nav-multi-menu J_MultiMenu" id="J_SiteNavSeller" data-name="seller" data-spm="1997525073">\n        <div class="site-nav-menu-hd">\n          <a href="//mai.taobao.com/seller_admin.htm" target="_top">\n            <span>\u5356\u5bb6\u4e2d\u5fc3</span>\n          </a>\n          <span class="site-nav-arrow"><span class="site-nav-icon">&#xe605;</span></span>\n        </div>\n        <div class="site-nav-menu-bd site-nav-menu-list">\n          <div class="site-nav-menu-bd-panel menu-bd-panel">\n            <a href="//mai.taobao.com/seller_admin.htm" target="_top">\u514d\u8d39\u5f00\u5e97</a>\n            <a href="//trade.taobao.com/trade/itemlist/list_sold_items.htm" target="_top">\u5df2\u5356\u51fa\u7684\u5b9d\u8d1d</a>\n            <a href="//sell.taobao.com/auction/goods/goods_on_sale.htm" target="_top">\u51fa\u552e\u4e2d\u7684\u5b9d\u8d1d</a>\n            <a href="//fuwu.taobao.com/?tracelog=tbdd" target="_top">\u5356\u5bb6\u670d\u52a1\u5e02\u573a</a>\n            <a href="//daxue.taobao.com/" target="_top">\u5356\u5bb6\u57f9\u8bad\u4e2d\u5fc3</a>\n            <a href="//healthcenter.taobao.com/home/health_home.htm" target="_top">\u4f53\u68c0\u4e2d\u5fc3</a>\n          </div>\n        </div>\n      </li>\n      <li class="site-nav-menu site-nav-service site-nav-multi-menu J_MultiMenu" id="J_SiteNavService" data-name="service" data-spm="754895749">\n        <div class="site-nav-menu-hd">\n          <a href="//consumerservice.taobao.com?from=newBuyerLead" target="_top">\n            <span>\u8054\u7cfb\u5ba2\u670d</span>\n          </a>\n          <span class="site-nav-arrow"><span class="site-nav-icon">&#xe605;</span></span>\n        </div>\n        <div class="site-nav-menu-bd site-nav-menu-list">\n          <div class="site-nav-menu-bd-panel menu-bd-panel">\n            <a href="//consumerservice.taobao.com/online-help" target="_top">\u6d88\u8d39\u8005\u5ba2\u670d</a>\n            <a href="//helpcenter.taobao.com/index?from=high" target="_top">\u5356\u5bb6\u5ba2\u670d</a>\n          </div>\n        </div>\n      </li>\n      <li class="site-nav-menu site-nav-sitemap site-nav-multi-menu J_MultiMenu" id="J_SiteNavSitemap" data-name="sitemap" data-spm="1997525077">\n        <div class="site-nav-menu-hd">\n          <a href="//www.taobao.com/sitemap.php" target="_top">\n            <span class="site-nav-icon site-nav-icon-highlight">&#xe601;</span>\n            <span>\u7f51\u7ad9\u5bfc\u822a</span>\n          </a>\n          <span class="site-nav-arrow"><span class="site-nav-icon">&#xe605;</span></span>\n        </div>\n      </li>\n    </ul>'}}(),c=function(n){var a=p,t=_,s=g,e=i,o={CN:"CN|zh-CN|CNY|156",HK:"HK|zh-TW|HKD|344",TW:"TW|zh-TW|TWD|158",MO:"MO|zh-TW|MOP|446",KR:"KR|zh-CN|KRW|410",MY:"MY|zh-CN|MYR|458",AU:"AU|zh-CN|AUD|36",SG:"SG|zh-CN|SGD|702",NZ:"NZ|zh-CN|NZD|554",CA:"CA|zh-CN|CAD|124",US:"US|zh-CN|USD|840",JP:"JP|zh-CN|JPY|392",GLOBAL:"GLOBAL|zh-CN|USD|999"};return n={get:function(n){return o[n]||o.GLOBAL},pureGet:function(n){return o[n]},simplifiedLang:function(n){return!a.inArray(n,["HK","TW","MO"])},isMainland:function(n){return"CN"===n},getCode:function(){return this.code||"GLOBAL"},getRegion:function(n){var a=this;this.getVal(function(t){t?a.code=t.split("|")[0]:a.code="CN",n(a.code)})},getVal:function(n){var a=t.get("hng"),s=this;if(a)try{a=decodeURIComponent(a),a=s.shouldCookieUpdate(a),n(a)}catch(e){this.checkGlobal(n)}else this.checkGlobal(n)},checkGlobal:function(n){var a=window.g_config||{},t=a.regionID;t&&o[t]?(this.set(t),n(o[t])):this.getIpInfo(n)},shouldCookieUpdate:function(n){var a=n.split("|");if(3===a.length){var t=a[0];o[t]&&(n=o[t],this.set(t))}return n},getIpInfo:function(n){var a=this,t=this;new s({url:"//tbip.alicdn.com/api/getipinfo",dataType:"jsonp",success:function(s){if(s&&s.data&&s.data.country_id){var i=s.data.country_id;e.send({category:"IP_INFO",msg:i});var l=t.pureGet(i);l?(n(l),a.set(i)):(l=t.get(i),n(l),a.set(i))}else n(o.CN),e.send({category:"IP_ERROR",msg:s})},error:function(a,t){n(o.CN),e.send({category:"IP_ERROR",msg:t})}})},set:function(n,a,t,i){var l=this,c=o[n]||o.GLOBAL;new s({url:"//ocservice.taobao.com/cookieController/processUserCookie",data:{site:c.replace(/\|/g,"_"),from:1},dataType:"jsonp",success:function(s){s&&s.ret?l.sync(n,a):e.send({category:"WRITE_COOKIE",msg:s}),t&&t()},error:function(n,a){i&&i(),e.send({category:"WRITE_COOKIE",msg:a})}})},sync:function(n,a,s){var i,o=this;o.isMainland(n)&&t.set("thw","cn",360,".taobao.com","/"),a&&(i=setTimeout(function(){o.shouldRedirectMainland(n)},1e3)),KISSY.getScript("https://login.taobao.com/jump?target=https://www.tmall.com",{success:function(){clearTimeout(i),a&&o.shouldRedirectMainland(n)},error:function(n,a){e.send({category:"SYNC_COOKIE",msg:a})}})},shouldRedirectMainland:function(n){this.isMainland(n)&&"world.taobao.com"===location.hostname&&"/"===location.pathname?location.href="https://www.taobao.com/":location.reload()}}}(),d=function(n){var a=s,t=e,i=c;return n=function(n){return i.simplifiedLang(i.getCode())?a[n]:t[n]}}(),r=function(n){var a=p,t=h,s=d,e=["GLOBAL","CN","HK","TW","MO","KR","MY","AU","SG","NZ","CA","US","JP"],o=b.all,l=c,r=i,m=f;return n={init:function(n){this.listEl=o("#J_SiteNavRegionList"),this.currentCode=n,this.bind()},bind:function(){var n=this,a=!1;t.subscribe("region","show",function(){a||(n.render(),a=!0)}),this.listEl.delegate("click",".J_RegionItem",function(a){var t=o(a.currentTarget).index(),s=e[t];if(s!==n.currentCode){r.send({category:"REGION_SWITCH",msg:n.currentCode+" -> "+s});var i=n.showToast();l.set(s,!0,function(){i&&i.remove()},function(){i&&i.remove(),n.showToast(!0,!0)})}})},render:function(){var n=[];n=a.map(e,function(n){return'<li class="site-nav-region-item J_RegionItem" role="option">'+s(n)+"</li>"}),this.listEl.html(n.join(""))},showToast:function(n,a){if(!(m.ie<9)){var t=o(this.getTmpl(n));return o(document.body).append(t),a&&setTimeout(function(){t.remove()},2e3),t}},getTmpl:function(n){return n?'<div class="gnav-popup">\n      <div class="mask"></div>\n      <div class="popup-inner">\n        <span class="warn-icon"></span><p class="title">'+s("REGION_SWITCH_ERROR")+"</p>\n      </div>\n    </div>":'<div class="gnav-popup gnav-loading">\n      <div class="mask"></div>\n      <div class="popup-inner">\n        <p class="title">'+s("REGION_SWITCH")+"...</p>\n      </div>\n    </div>"}}}(),m=function(n){function a(){var n=i.getTag(),a="";return 10===n?a="super":20===n&&(a="apass"),a}function t(){var n=i.getTag(),t=i.getNick(),s=a(),e="";s&&(e="super");var d="";8==c.ie&&(d="ie8");var m='<a href="//vip.taobao.com" target="_top" class="site-nav-vip-icon '+s+" "+d+'"></a>';(n===-1||isNaN(n))&&(m="",e="");var v='<a href="'+b+'" target="_top" class="site-nav-login-info-nick '+e+'">'+t+"</a>",p=v+m;o.html("#J_SiteNavLogin",l.substitute(O,{loginUrl:u,logoutUrl:_,regUrl:g,spaceUrl:b,nick:t,userInfo:p,login:r("GOLOGIN"),freeRegister:r("FREEREG")}))}function s(){var n=(i.getTag(),i.getNick()),t=a();c.ie&&c.ie<9&&(t=""),o.html("#J_SiteNavLoginPanel",l.substitute(S,{tagIcon:t,logoutUrl:_,regUrl:g,spaceUrl:b,avatarUrl:i.getAvatar(),host:i.getHost(),nick:n,manage:r("ACCOUNT_MANAGE"),exit:r("EXIT")}))}var e=h,i=T,o=E,l=p,c=f,r=d,m="https://login"+i.getHost(),v="//login"+i.getHost(),u=m+"/member/login.jhtml?f=top",_=v+"/member/logout.jhtml?f=top&out=true",g="//reg"+i.getHost()+"/member/new_register.jhtml?from=tbtop&ex_info=&ex_sign=",b="//i"+i.getHost()+"/my_taobao.htm?ad_id=&am_id=&cm_id=&pm_id=1501036000a02c5c3739",N=location.href;/^http.*(\/member\/login\.jhtml)$/i.test(N)&&(N="");var I=N;u+=(~u.indexOf("?")?"&":"?")+"redirectURL="+encodeURIComponent(I),_+=(~_.indexOf("?")?"&":"?")+"redirectURL="+encodeURIComponent(I);var O='<div class="site-nav-menu-hd">\n    <div class="site-nav-sign">\n      <a href="{loginUrl}" target="_top" class="h">{login}</a>\n      <a href="{regUrl}" target="_top">{freeRegister}</a>\n    </div>\n    <div class="site-nav-user">\n      {userInfo}\n      <span class="site-nav-arrow"><span class="site-nav-icon">&#xe605;</span></span>\n    </div>\n  </div>\n  <div class="site-nav-menu-bd" id="J_SiteNavLoginPanel"></div>',S='<div class="site-nav-menu-bd-panel popup-region">\n    <div class="site-nav-user-wrapper {tagIcon}">\n      <a href="//i{host}/my_taobao.htm?ad_id=&am_id=&cm_id=&pm_id=1501036000a02c5c3739" target="_top" id="J_UserAvatar" class="site-nav-user-avatar">\n          <img id="J_SiteNavUserAvatar" src="{avatarUrl}" width="80" height="80" alt="{nick}\u7684\u5934\u50cf">\n      </a>\n    </div>\n    <div class="site-nav-user-info">\n      <p class="site-nav-user-operate">\n        <a href="//member1{host}/member/fresh/account_security.htm" target="_top">{manage}</a>\n        <span class="site-nav-pipe">|</span>\n        <a href="{logoutUrl}" target="_top">{exit}</a>\n      </p>\n    </div>\n  </div>';return n={status:0,init:function(){this.render()},render:function(){var n=this;t();var a="site-nav-status-login",l="site-nav-status-logout",c="site-nav-multi-menu J_MultiMenu",d="#J_SiteNav",r="#J_SiteNavLogin";i.isLogin()?(o.replaceClass(d,l,a),o.addClass(r,c),e.subscribe("login","show",function(){n.status||(n.status=1,s())})):(o.replaceClass(d,a,l),o.removeClass(r,c))},destroy:function(){this.status=0}}}(),v=function(n){function a(){this.init()}var t=N,s=m,e=o,i=l,v=r,u=c,_=d,g=b.all,h=p;return a.prototype={init:function(){var n=this;this.getTmpl(function(a,e){n.el=g("#J_SiteNavBd"),n.el.html(a),n.bind();var i=n.getGlobalConfig(),o=n.getConfig(e);o=h.merge(o,i),t(o),o.user||s.init(),v.init(e)})},getTmpl:function(n){u.getRegion(function(a){var t=_(a);u.isMainland(a)?n(i(t),a):n(e(t,_),a)})},bind:function(){},getConfig:function(n){var a={};return u.isMainland(n)||(a={siteMap:!1,user:!1}),a},getGlobalConfig:function(){var n=window.g_config||{},a={};return n.footer||(a.footer=!1),a}},new a,n=a}(),u=function(n){return n=v}(),t.exports=u});