KISSY.add("my/mods/2015/banner",function(e,t,a,n,i){function r(t){var a=t.one(".ju-wrapper");a&&lib.mtop.request({api:"mtop.ju.resource.page.get",v:"1.0",data:{location:"PC_HOME_ATMOS_CONFIG"},ecode:0,dataType:"json"},function(t){if(t.ret&&t.ret[0]&&t.ret[0].indexOf("SUCCESS")>-1&&t.data&&t.data.model){var i=t.data.model;if(i&&i.blocks&&i.blocks.length&&i.blocks[0].blocks&&i.blocks[0].blocks.length){var r=i.blocks[0].blocks[0].data,s=r.actionURL,o="atmos";r.trackParams&&(r.trackParams.spmid=o,s+=s.indexOf("?")>0?n.getDetailExposeParam(r.trackParams):"?"+n.getDetailExposeParam(r.trackParams).substring(1),n.exposure(r.trackParams));var c='<div class="atmos" id="J_bannerAtmos" data-spm="atmos" style="background-image:url('+r.imageURL+')"><a class="link" href="'+s+'" target="_blank"></a><a href="javascript:;" class="close J_close" data-spm-click="gostr=/jhs;locaid=atmosclose"></a></div>';a.prepend(c),e.one("#J_bannerAtmos").on("mouseenter",function(e){var t=l(e.currentTarget);t.addClass("hover")}),e.one("#J_bannerAtmos").on("mouseleave",function(e){var t=l(e.currentTarget);t.removeClass("hover")}),e.one("#J_bannerAtmos").delegate("click",".J_close",function(t){e.one("#J_bannerAtmos").removeClass("hover")})}}},function(e){})}function s(r){var s=r.one(".J_MainBanner");if(s){var o="true"===r.attr("data-resourcenew")?!0:!1,c=r.all("#focusTpl").html();if(c){var u=s.one(".chnls-stage");e.juReady(function(d){var f=[];if(o&&homeBanner&&homeBanner.length?f=homeBanner:d&&d.banners&&d.banners.length&&(f=d.banners),f.length){if(e.each(f,function(e){e.trackParams?e.linkUrl=e.linkUrl+(e.linkUrl.indexOf("?")>0?"&":"?")+n.getDetailExposeParam(e.trackParams,"_click").substring(1):e.bannerId&&(e.href=e.href+(e.href.indexOf("?")>0?"&":"?")+"banner_id="+e.bannerId)}),u.append(i(c).render({banners:f})),!e.one("#J_globalBg")){var g='<div id="J_bannerbgs"><ul class="bannerbgs">';e.each(f,function(e){g+='<li class="bg" style="background-color:'+(e.bgColor?"#"+e.bgColor:e.colorPicker)+'"></li>'}),g+="</ul></div>",r.prepend(g)}if(f.length>1){var h=null,p=u.attr("data-spm");o?h=function(e){if("img"==e.type){var t=e.src,a=e.elem,i=a.getAttribute("data-index");if(f[i]&&f[i].trackParams){var r=f[i].trackParams;r.spmid=p,n.exact(r)}return t}}:d.trackParams&&(d.trackParams.spmid=p,d.trackParams._expose&&(d.trackParams._expose+=",itemIds"),h=function(t){if("img"==t.type){var a=t.src,i=t.elem,r=i.getAttribute("data-bannerid");if(d.trackParams){var s=e.clone(d.trackParams);s.itemIds=r,n.exact(s)}return a}}),e.later(function(){var n=new t.Slide(s,{navCls:"chnls-stick",contentCls:"chnls-stage",activeTriggerCls:"selected",delay:0,effect:"fade",easing:"easeBoth",duration:.2,autoplay:!0,interval:4,switchTo:0});if(r.one("#J_bannerbgs")&&e.all("#J_bannerbgs .bg").length)var i=new t.Slide(r.one("#J_bannerbgs"),{hasTriggers:!1,contentCls:"bannerbgs",delay:0,effect:"fade",easing:"easeBoth",duration:.2,autoplay:!1,interval:4,switchTo:0});n.on("beforeSwitch",function(e){var t=l(n.panels[e.toIndex||0]);t.attr("data-load")||(a.loadCustomLazyData(t,"img","",h),t.attr("data-load","1")),i&&i.switchTo(e.toIndex||0)}).fire("beforeSwitch")},0)}}})}}}function o(e){var t=e.one(".main-theme");t&&t.delegate("mouseenter",".item",function(e){var t=l(e.currentTarget);t.addClass("on").siblings(".on").removeClass("on")})}function c(){e.juReady(function(e){l(".J_HeaderCity").text(e.city)})}var l=e.all;return function(t){t&&(r(t),e.later(function(){s(t),o(t),c()},500),e.log("banner.js loaded"))}},{requires:["../common/switchable","jbc/lazyload","jbc/julog","template","core"]}),KISSY.add("my/mods/2015/brand",function(e,t,a,n){function i(){window.homeBrandsData&&window.homeBrandsData.length&&e.each(window.homeBrandsData,function(e){e.promotion&&(window.jhs_promotion_map[e.baseInfo.activityId]=e.promotion)})}function r(e){var t=s(".ju-itemlist,.logowall",e);t.each(function(e){var t=e.attr("data-trackParams"),n=e.attr("data-spm");window[t]&&n&&(window[t].spmid=n,a.exposure(window[t]))})}var s=e.all;e.one(window);return function(e){i(),new t({container:e,diff:0}),r(e)}},{requires:["jbc/lazyload","jbc/julog","gallery/switchable/1.3.1/"]}),KISSY.add("my/mods/2015/list",function(e,t,a,n,i,r,s){function o(){var e=b.all("form"),t=e.all(".searchinput"),a=t.val();t.on("focus",function(){a==t.val()&&t.val("").addClass("focus")}),t.on("blur",function(){""==t.val()&&t.val(a).removeClass("focus")}),e.on("submit",function(e){var n=t.val();return""==n||n==a?(e.halt(),t[0].focus(),!1):void 0})}function c(){var e=b.one(".fixnav");if(e){var t=k("<div></div>").height(e.height());t.insertAfter(e),t.append(e),I.on("resize",function(){T=I.height()});var a=(e.all(".filterbg").show(),0);I.on("scroll",function(){a=I.scrollTop(),a>t.offset().top&&a<b.offset().top+b.height()-T?e.addClass("filter-stick"):e.removeClass("filter-stick")})}}function l(){var t=e.one(".mod-life");if(t){var a=b.one(".mod-page"),n=a.one(".pagination");I.on("scroll",e.buffer(function(){var e=I.scrollTop();e>t.offset().top?n.addClass("fixed-bottom"):n.removeClass("fixed-bottom")},10))}}function u(t){setTimeout(function(){if(d(t),f("hide"),!t||!t.itemList||0==t.itemList.length)return void y.html(k("#noresultTpl").html());var a=S.length,o=0,c=t.itemList||[],l=t.brandList||[],u=4,g=[];e.each(c,function(e,t){a>o&&t===S[o]&&l.length>=u&&(g=g.concat(l.splice(0,u)),o++),g.push(e)});var h=[];e.each(g,function(e){e.baseinfo&&e.baseinfo.juId?(e.promotion&&(window.jhs_promotion_map[e.baseinfo.juId]=e.promotion),h.push(i({itemVOs:[e]}))):(e.promotion&&(window.jhs_promotion_map[e.baseInfo.activityId]=e.promotion),h.push(r({brandVOs:[e]})))}),h=h.join(""),y.html(h.replace(/400x400Q90.jpg/gim,j));var p={container:y,diff:300},v="102212b";t.trackParams.spmid=v,p.onStart=function(a){if("img"==a.type){var n=a.src,i=a.elem,r=i.getAttribute("data-type"),o=i.getAttribute("data-eid");if(t.trackParams){var c=e.clone(t.trackParams);"item"==r?(c.itemIds=o,delete c.brandIds):(c.brandIds=o,delete c.itemIds),s.exact(c)}return n}},new n(p),t.trackParams&&s.exposure(t.trackParams),b.css({"min-height":300})},0)}function d(e){0!=w.length&&w.each(function(a){(!e.totalPage||e.totalPage<=1)&&(e.totalPage=1);var n=new t(a,{totalPage:e.totalPage,currentPage:e.currentPage||C});n.on("switch",function(e){g({page:C=e.toPage})}),a.all(".sum").on("click",function(){a.all(".pg-next").fire("click")})})}function f(e){b.all(".loading")[e]()}function g(t){var n=a.getState();t.coupon&&"true"==n.coupon&&(delete t.coupon,delete n.coupon),e.mix(n,t),delete n.spm,e.each(n,function(t,a){""==e.trim(t)&&delete n[a]}),"activityPrice"==n.stype?n.reverse="up":delete n.reverse,"1"==n.page&&delete n.page,a.pushState(n),f("show"),b.scrollIntoView()}function h(t){if(x){x.attr("data-key");b.all("[data-key]").removeClass(_),e.each(t,function(e,t){b.all("[data-key="+t+"]").each(function(t){t.attr("data-value")==e&&t.addClass(_)})})}}function p(){var t="608.6941085"==k('[name="spm-id"]').attr("content"),n=t?"":"todayall";a.onpopstate(function(){var t=a.getState();e.IO({url:P,data:e.merge({type:0,timeFilter:n},t),dataType:"jsonp",jsonpCallback:"homelist",scriptCharset:"utf-8",success:function(e){u(e),h(t)}})})}function v(){var e=b.one(".mod-filter");e&&e.delegate("click","[data-key]",function(e){e.preventDefault();var t=x=k(e.currentTarget),a=t.attr("data-key");if(a){var n=t.attr("data-value"),i={};i[a]=n,i.page=C=1,g(i)}})}function m(t){t.itemList&&e.each(t.itemList,function(e){e.baseinfo.itemUrl=e.baseinfo.itemUrl?e.baseinfo.itemUrl.replace(/&amp;/gim,"&"):""})}var b,w,y,x,k=e.all,I=k(window),_="on",P=k("#itemBaseUrl").val(),T=I.height(),C=1,S=window.insertPoints,j=k(window).width()<window.criticalPoint?"300x300Q90.jpg":"400x400Q90.jpg";return function(){var e=a.getState();e.frontCatId&&k(".mod-list").scrollIntoView()}(),function(t){t&&(y=t.one("#juList"))&&(b=t,w=b.all(".pagination"),7!=e.UA.ie&&6!=e.UA.ie&&(c(),l()),m(window.juListData),u(window.juListData),p(),v(),o(),e.log("list.js loaded"))}},{requires:["my/mods/common/pagination","my/mods/common/history","jbc/lazyload","tpl/item_small","tpl/brand_small","jbc/julog","core"]}),KISSY.add("my/mods/2015/life",function(e,t,a,n){function i(i){var r=i.one("#lifeList");r&&e.IO({url:s,data:{type:1,psize:12},dataType:"jsonp",jsonpCallback:"homelife",scriptCharset:"utf-8",success:function(s){return s&&s.itemList&&0!=s.itemList.length?(e.each(s.itemList,function(e){e.promotion&&(window.jhs_promotion_map[e.baseinfo.juId]=e.promotion)}),void setTimeout(function(){var i=a({itemVOs:s.itemList});r.html(i.replace(/400x400Q90.jpg/gim,o));var c={container:r},l="102213b";s.trackParams.spmid=l,c.onStart=function(t){if("img"==t.type){var a=t.src,i=t.elem,r=i.getAttribute("data-type"),o=i.getAttribute("data-eid");if(s.trackParams){var c=e.clone(s.trackParams);"item"==r?(c.itemIds=o,delete c.brandIds):(c.brandIds=o,delete c.itemIds),n.exact(c)}return a}},new t(c),s.trackParams&&n.exposure(s.trackParams)},0)):void i.hide()}})}var r=e.all,s=r("#itemBaseUrl").val(),o=r(window).width()<window.criticalPoint?"300x300Q90.jpg":"400x400Q90.jpg";return function(t){e.later(function(){i(t)},0),e.log("life.js loaded")}},{requires:["jbc/lazyload","tpl/item_small","jbc/julog","core"]}),KISSY.add("ju-switchable/base",function(e,t,a,n){function i(a,i){var r=this;r._triggerInternalCls=e.guid(k),r._panelInternalCls=e.guid(I),i=i||{},"markupType"in i||(i.panelCls?i.markupType=1:i.panels&&(i.markupType=2));for(var s=r.constructor;s;)i=e.merge(s.Config,i),s=s.superclass?s.superclass.constructor:null;r.container=t.get(a),r.config=i,r.activeIndex=i.activeIndex;var o;r.activeIndex>-1||("number"==typeof i.switchTo?o=i.switchTo:r.activeIndex=0),r._init(),r._initPlugins(),r.fire(p),o!==n&&r.switchTo(o)}function r(e){if(e&&e.length){if(1==e.length)return e[0].parentNode;for(var a=e[0],n=0;!n&&a!=document.body;){a=a.parentNode,n=1;for(var i=1;i<e.length;i++)if(!t.contains(a,e[i])){n=0;break}}return a}return null}function s(e){var t={};return t.type=e.type,t.target=e.target,{originalEvent:t}}var o="display",c="block",l=e.makeArray,u="none",d=a.Target,f="forward",g="backward",h=".",p="init",v="beforeSwitch",m="switch",b="beforeRemove",w="add",y="remove",x="ks-switchable-",k=x+"trigger-internal",I=x+"panel-internal";return i.getDomEvent=s,i.addPlugin=function(e,t){t=t||i;for(var a=e.priority=e.priority||0,n=0,r=t.Plugins=t.Plugins||[];n<r.length&&!(r[n].priority<a);n++);r.splice(n,0,e)},i.Config={markupType:0,navCls:x+"nav",contentCls:x+"content",triggerCls:x+"trigger",panelCls:x+"panel",triggers:[],panels:[],hasTriggers:!0,triggerType:"mouse",delay:.1,activeIndex:-1,activeTriggerCls:"ks-active",switchTo:n,steps:1,viewSize:[]},e.augment(i,d,{_initPlugins:function(){for(var t=this,a=[],n=t.constructor;n;)n.Plugins&&a.push.apply(a,[].concat(n.Plugins).reverse()),n=n.superclass?n.superclass.constructor:null;a.reverse(),e.each(a,function(e){e.init&&e.init(t)})},_init:function(){var e=this,t=e.config;e._parseMarkup(),t.hasTriggers&&e._bindTriggers(),e._bindPanels()},_parseMarkup:function(){var e,a,n,i=this,s=i.container,o=i.config,c=[],u=[];switch(o.markupType){case 0:e=t.get(h+o.navCls,s),e&&(c=t.children(e)),a=t.get(h+o.contentCls,s),u=t.children(a);break;case 1:c=t.query(h+o.triggerCls,s),u=t.query(h+o.panelCls,s);break;case 2:c=o.triggers,u=o.panels,e=o.nav,a=o.content}n=u.length,i.length=Math.ceil(n/o.steps),i.nav=e||o.hasTriggers&&r(c),!o.hasTriggers||i.nav&&0!=c.length||(c=i._generateTriggersMarkup(i.length)),i.triggers=l(c),i.panels=l(u),i.content=a||r(u)},_generateTriggersMarkup:function(e){var a,n,i=this,r=i.config,s=i.nav||t.create("<ul>");for(s.className=r.navCls,n=0;e>n;n++)a=t.create("<li>"),n===i.activeIndex&&(a.className=r.activeTriggerCls),a.innerHTML=n+1,s.appendChild(a);return i.container.appendChild(s),i.nav=s,t.children(s)},_bindTriggers:function(){var t=this,n=t.config,i=t._triggerInternalCls,r=t.nav,s=t.triggers;e.each(s,function(e){t._initTrigger(e)}),a.delegate(r,"click","."+i,function(e){var a=e.currentTarget,n=t._getTriggerIndex(a);t._onFocusTrigger(n,e)}),"mouse"===n.triggerType&&(a.delegate(r,"mouseenter","."+i,function(e){var a=e.currentTarget,n=t._getTriggerIndex(a);t._onMouseEnterTrigger(n,e)}),a.delegate(r,"mouseleave","."+i,function(){t._onMouseLeaveTrigger()}))},_initTrigger:function(e){t.addClass(e,this._triggerInternalCls)},_bindPanels:function(){var t=this,a=t.panels;e.each(a,function(e){t._initPanel(e)})},_initPanel:function(e){t.addClass(e,this._panelInternalCls)},_onFocusTrigger:function(e,t){var a=this;a._triggerIsValid(e)&&(this._cancelSwitchTimer(),a.switchTo(e,n,s(t)))},_onMouseEnterTrigger:function(t,a){var i=this;if(i._triggerIsValid(t)){var r=s(a);i.switchTimer=e.later(function(){i.switchTo(t,n,r)},1e3*i.config.delay)}},_onMouseLeaveTrigger:function(){this._cancelSwitchTimer()},_triggerIsValid:function(e){return this.activeIndex!==e},_cancelSwitchTimer:function(){var e=this;e.switchTimer&&(e.switchTimer.cancel(),e.switchTimer=n)},_getTriggerIndex:function(t){var a=this;return e.indexOf(t,a.triggers)},_resetLength:function(){this.length=this._getLength()},_getLength:function(e){var t=this,a=t.config;return e===n&&(e=t.panels.length),Math.ceil(e/a.steps)},_afterAdd:function(e,t,a){var i=this;i._resetLength();var r=i._getLength(e+1)-1;1==i.config.steps&&i.activeIndex>=r&&(i.activeIndex+=1);var s=i.activeIndex;i.activeIndex=-1,i.switchTo(s),t?i.switchTo(r,n,n,a):a()},add:function(a){var n=a.callback||e.noop,i=this,r=i.nav,s=i.content,o=a.trigger,c=a.panel,l=a.active,u=i.panels.length,d=null!=a.index?a.index:u,f=i.triggers,g=i.panels,h=i.length,p=null,v=null;d=Math.max(0,Math.min(d,u));var m=g[d]||null;g.splice(d,0,c),s.insertBefore(c,m),1==i.config.steps?(v=f[d]||null,r.insertBefore(o,v),f.splice(d,0,o)):(p=i._getLength(),p!=h&&(t.append(o,r),f.push(o))),i._initPanel(c),i._initTrigger(o),i._afterAdd(d,l,n),i.fire(w,{index:d,trigger:o,panel:c})},remove:function(a){function i(){if(h&&(t.remove(h),u.splice(r,1)),g){t.remove(g);for(var e=0;e<f.length;e++)if(f[e]==g){o.triggers.splice(e,1);break}}o._resetLength(),o.fire(y,{index:r,trigger:g,panel:h})}var r,s=a.callback||e.noop,o=this,c=o.config.steps,l=o.length,u=o.panels;r="index"in a?a.index:a.panel;var d=o._getLength(u.length-1),f=o.triggers,g=null,h=null;if(u.length&&(r=e.isNumber(r)?Math.max(0,Math.min(r,u.length-1)):e.indexOf(r,u),g=1==c?f[r]:d!==l?f[l-1]:null,h=u[r],o.fire(b,{index:r,panel:h,trigger:g})!==!1)){if(0==d)return i(),void s();var p=o.activeIndex;if(c>1)return void(p==d?o.switchTo(p-1,n,n,function(){i(),s()}):(i(),o.activeIndex=-1,o.switchTo(p,n,n,function(){s()})));if(p==r){var v=p>0?p-1:p+1;o.switchTo(v,n,n,function(){i(),0==p&&(o.activeIndex=0),s()})}else p>r&&(p--,o.activeIndex=p),i(),s()}},switchTo:function(e,t,a,i){var r=this,s=r.config,o=r.activeIndex,c=r.triggers;return r._triggerIsValid(e)?r.fire(v,{fromIndex:o,toIndex:e})===!1?r:(r.fromIndex=o,s.hasTriggers&&r._switchTrigger(c[o]||null,c[e]),t===n&&(t=e>o?f:g),r.activeIndex=e,r._switchView(t,a,function(){i&&i.call(r)}),r):r},_switchTrigger:function(e,a){var n=this.config.activeTriggerCls;e&&t.removeClass(e,n),t.addClass(a,n)},_getFromToPanels:function(){var e,t,a=this,n=a.fromIndex,i=a.config.steps,r=a.panels,s=a.activeIndex;return e=n>-1?r.slice(n*i,(n+1)*i):null,t=r.slice(s*i,(s+1)*i),{fromPanels:e,toPanels:t}},_switchView:function(e,a,n){var i=this,r=i._getFromToPanels(),s=r.fromPanels,l=r.toPanels;s&&t.css(s,o,u),t.css(l,o,c),setTimeout(function(){i._fireOnSwitch(a)},0),n&&n.call(this)},_fireOnSwitch:function(t){var a=this;a.fire(m,e.merge(t,{fromIndex:a.fromIndex,currentIndex:this.activeIndex}))},prev:function(e){var t=this;t.switchTo((t.activeIndex-1+t.length)%t.length,g,e)},next:function(e){var t=this;t.switchTo((t.activeIndex+1)%t.length,f,e)},destroy:function(n){for(var i=this,r=i.constructor;r;)e.each(r.Plugins,function(e){e.destroy&&e.destroy(i)}),r=r.superclass?r.superclass.constructor:null;n?(a.remove(i.container),i.content&&a.remove(i.content),i.nav&&a.remove(i.nav)):t.remove(i.container),i.nav=null,i.content=null,i.container=null,i.triggers=[],i.panels=[],i.detach()}}),i},{requires:["dom","event"]}),KISSY.add("ju-switchable/accordion/base",function(e,t,a){function n(e,t){var a=this;return a instanceof n?void n.superclass.constructor.apply(a,arguments):new n(e,t)}return e.extend(n,a,{_switchTrigger:function(e,a){var i=this,r=i.config;r.multiple?t.toggleClass(a,r.activeTriggerCls):n.superclass._switchTrigger.apply(i,arguments)},_triggerIsValid:function(e){return this.config.multiple||n.superclass._triggerIsValid.call(this,e)},_switchView:function(e,a,i){var r=this,s=r.config,o=r._getFromToPanels().toPanels;s.multiple?(t.toggle(o),this._fireOnSwitch(a),i&&i.call(this)):n.superclass._switchView.apply(r,arguments)}}),n.Config={markupType:1,triggerType:"click",multiple:!1},n},{requires:["dom","../base"]}),KISSY.add("ju-switchable/carousel/base",function(e,t,a,n){function i(e,t){var a=this;return a instanceof i?void i.superclass.constructor.apply(a,arguments):new i(e,t)}var r="ks-switchable-",s=".",o="added",c="removed",l="prevBtn",u="nextBtn",d={originalEvent:{target:1}};return i.Config={circular:!0,prevBtnCls:r+"prev-btn",nextBtnCls:r+"next-btn",disableBtnCls:r+"disable-btn"},e.extend(i,n,{_init:function(){function n(e){t.removeClass([r[l],r[u]],g),0==e&&t.addClass(r[l],g),e==r.length-1&&t.addClass(r[u],g)}var r=this;i.superclass._init.call(r);var f=r.config,g=f.disableBtnCls;e.each(["prev","next"],function(e){var n=r[e+"Btn"]=t.get(s+f[e+"BtnCls"],r.container);a.on(n,"mousedown",function(t){t.preventDefault();var a=r.activeIndex;"prev"!=e||0==a&&!f.circular||r[e](d),"next"!=e||a==r.length-1&&!f.circular||r[e](d)})}),f.circular||(r.on(o+" "+c,function(){n(r.activeIndex)}),r.on("switch",function(e){n(e.currentIndex)})),a.delegate(r.content,"click",s+r._panelInternalCls,function(e){var t=e.currentTarget;r.fire("itemSelected",{item:t})})},destroy:function(e){var t=this;e&&(t.nextBtn&&a.remove(t.nextBtn),t.prevBtn&&a.remove(t.prevBtn)),i.superclass.destroy.apply(t,arguments)}}),i},{requires:["dom","event","../base"]}),KISSY.add("ju-switchable/slide/base",function(e,t){function a(e,t){var n=this;return n instanceof a?void a.superclass.constructor.apply(n,arguments):new a(e,t)}return a.Config={autoplay:!0,circular:!0},e.extend(a,t),a},{requires:["../base"]}),KISSY.add("ju-switchable/tabs/base",function(e,t){function a(e,t){var r=this;return r instanceof a?(a.superclass.constructor.call(r,e,t),r.on("beforeSwitch",n),void r.on("switch",i)):new a(e,t)}function n(e){this.panels[e.toIndex].style.visibility=""}function i(e){this.panels[e.fromIndex].style.visibility="hidden"}return e.extend(a,t),a.Config={},a},{requires:["../base"]}),KISSY.add("ju-switchable/lazyload",function(e,t,a){function n(e,t){t=t||l;var a=e.getAttribute(t);a&&e.src!=a&&(e.src=a,e.removeAttribute(t))}function i(a,i,s){var o;"img-src"===i&&(i="img"),e.isArray(a)||(a=[t.get(a)]),e.each(a,function(a){switch(i){case"img":o="IMG"===a.nodeName?[a]:t.query("img",a),e.each(o,function(e){n(e,s||l+d)});break;default:t.query("textarea",a).each(function(e){t.hasClass(e,s||u+d)&&r(e,!0)})}})}function r(e,a){e.style.display="none",e.className="";var n=t.create("<div>");e.parentNode.insertBefore(n,e),t.html(n,e.value,a)}var s="beforeSwitch",o="img",c="textarea",l="data-ks-lazyload",u="ks-datalazyload",d="-custom",f={};return f[o]="lazyImgAttribute",f[c]="lazyTextareaClass",e.mix(a.Config,{lazyImgAttribute:"data-ks-lazyload-custom",lazyTextareaClass:"ks-datalazyload-custom",lazyDataType:c}),a.addPlugin({name:"lazyload",init:function(e){function a(t){var o=e._realStep||l.steps,c=t.toIndex*o,d=c+o;i(e.panels.slice(c,d),u,r),n()&&e.detach(s,a)}function n(){var a,n,i,s,l=u===o,d=l?"img":u===c?"textarea":"";if(d)for(a=t.query(d,e.container),n=0,s=a.length;s>n;n++)if(i=a[n],l?t.attr(i,r):t.hasClass(i,r))return!1;return!0}var r,l=e.config,u=l.lazyDataType;"img-src"===u?u=o:"area-data"===u&&(u=c),l.lazyDataType=u,r=l[f[u]],u&&r&&(e.on(s,a),a({toIndex:e.activeIndex}))}}),a},{requires:["dom","./base"]}),KISSY.add("ju-switchable/effect",function(e,t,a,n,i,r){var s,o="display",c="block",l="none",u="opacity",d="z-index",f="position",g="relative",h="absolute",p="scrollx",v="scrolly",m="fade",b="left",w="top",y="float",x="px";return e.mix(i.Config,{effect:l,duration:.5,easing:"easeNone"}),i.Effects={none:function(e){var a=this,n=a._getFromToPanels(),i=n.fromPanels,r=n.toPanels;i&&t.css(i,o,l),t.css(r,o,c),e&&e()},fade:function(a){var i=this,s=i._getFromToPanels(),o=s.fromPanels,c=s.toPanels;o&&1!==o.length&&e.error("fade effect only supports steps == 1.");var l=i.config,f=o?o[0]:null,g=c[0];i.anim&&(i.anim.stop(),t.css(i.anim.fromEl,{zIndex:1,opacity:0}),t.css(i.anim.toEl,"zIndex",9)),t.css(g,u,1),f?(i.anim=new n(f,{opacity:0},l.duration,l.easing,function(){i.anim=r,t.css(g,d,9),t.css(f,d,1),a&&a()}).run(),i.anim.toEl=g,i.anim.fromEl=f):(t.css(g,d,9),a&&a())},scroll:function(e,a,i){var s=this,o=s.fromIndex,c=s.config,l=c.effect===p,u=s.viewSize[l?0:1]*s.activeIndex,d={};d[l?b:w]=-u+x,s.anim&&s.anim.stop(),i||o>-1?s.anim=new n(s.content,d,c.duration,c.easing,function(){s.anim=r,e&&e()}).run():(t.css(s.content,d),e&&e())}},s=i.Effects,s[p]=s[v]=s.scroll,i.addPlugin({priority:10,name:"effect",init:function(a){var n=a.config,i=n.effect,r=a.panels,s=a.content,u=n.steps,d=r[0],w=a.container,x=a.activeIndex;if(i!==l)switch(t.css(r,o,c),i){case p:case v:if(t.css(s,f,h),"static"==t.css(s.parentNode,f)&&t.css(s.parentNode,f,g),i===p&&(t.css(r,y,b),t.width(s,"999999px")),a.viewSize=[n.viewSize[0]||d&&t.outerWidth(d,!0)*u,n.viewSize[1]||d&&t.outerHeight(d,!0)*u],a.viewSize[0]||e.error("switchable must specify viewSize if there is no panels"),1==u&&d){var k=1,I=a.viewSize,_=d.parentNode.parentNode,P=[Math.min(t.width(w),t.width(_)),Math.min(t.height(w),t.height(_))];"scrollx"==i?k=Math.floor(P[0]/I[0]):"scrolly"==i&&(k=Math.floor(P[1]/I[1])),k>n.steps&&(a._realStep=k)}break;case m:var T,C=x*u,S=C+u-1;e.each(r,function(e,a){T=a>=C&&S>=a,t.css(e,{opacity:T?1:0,position:h,zIndex:T?9:1})})}}}),e.augment(i,{_switchView:function(t,a,n){var i=this,r=i.config,o=r.effect,c=e.isFunction(o)?o:s[o];c.call(i,function(){i._fireOnSwitch(a),n&&n.call(i)},t)}}),i},{requires:["dom","event","anim","./base"]}),KISSY.add("ju-switchable/circular",function(e,t,a,n){function i(e,n){var i,r=this,s=r.fromIndex,o=r.config,l=r.length,u="scrollx"===o.scrollType,d=u?"left":"top",f=r.activeIndex,g=r.viewSize[u?0:1],h=r.panels,p={},v={},m=r._realStep,b=g*l;if(p[d]=-g*f,-1==s)return t.css(r.content,p),void(e&&e());f+m>l?(v={position:"relative"},v[d]=b,i=f+m-l,t.css(h.slice(0,i),v),t.css(h.slice(i,m),c)):t.css(h.slice(0,m),c);var w=t.css(h[s],"position"),y=(s+l-f)%l,x=(f-s+l)%l;x>y&&"relative"==w?t.css(r.content,d,-(g*(l+s))):s==l-1&&0==f?t.css(r.content,d,g):t.css(r.content,d,-(g*s)),r.anim&&r.anim.stop(),r.anim=new a(r.content,p,o.duration,o.easing,function(){r.anim=0,e&&e()}).run()}function r(e,n){var i,r=this,c=r.fromIndex,l=r.config,u=r.length,d="scrollx"===l.scrollType,f=d?"left":"top",g=r.activeIndex,h=r.viewSize[d?0:1],p=-h*g,v=r.panels,m=r.config.steps,b={},w="backward"===n;i=w&&0===c&&g===u-1||!w&&c===u-1&&0===g,r.anim&&(r.anim.stop(),"relative"==v[c*m].style.position&&o.call(r,v,c,f,h,1)),i&&(p=s.call(r,v,g,f,h)),b[f]=p+"px",c>-1?r.anim=new a(r.content,b,l.duration,l.easing,function(){i&&o.call(r,v,g,f,h,1),r.anim=void 0,e&&e()}).run():(t.css(r.content,b),e&&e())}function s(e,a,n,i){var r,s=this,o=s.config,c=o.steps,l=s.length,u=a*c,d=(a+1)*c;return r=e.slice(u,d),t.css(r,"position","relative"),t.css(r,n,(a?-1:1)*i*l),a?i:-i*l}function o(e,a,n,i,r){var s,o=this,c=o.config,l=c.steps,u=o.length,d=a*l,f=(a+1)*l;s=e.slice(d,f),t.css(s,"position",""),t.css(s,n,""),r&&t.css(o.content,n,a?-i*(u-1):"")}var c={position:"",left:"",top:""};e.mix(n.Config,{circular:!1}),n.adjustPosition=s,n.resetPosition=o,n.addPlugin({name:"circular",priority:5,init:function(e){var t=e.config,a=t.effect;!t.circular||"scrollx"!==a&&"scrolly"!==a||(t.scrollType=a,e._realStep?t.effect=i:t.effect=r)}})},{requires:["dom","anim","./base","./effect"]}),KISSY.add("ju-switchable/aria",function(e,t,a,n){function i(){this.stop&&this.stop()}function r(){this.start&&this.start()}n.addPlugin({name:"aria",init:function(e){if(e.config.aria){var t=e.container;a.on(t,"focusin",i,e),a.on(t,"focusout",r,e)}}});var s=["a","input","button","object"],o="oriTabIndex";return{setTabIndex:function(a,n){a.tabIndex=n,e.each(t.query("*",a),function(a){var i=a.nodeName.toLowerCase();e.inArray(i,s)&&(t.hasAttr(a,o)||t.attr(a,o,a.tabIndex),-1!=n?a.tabIndex=t.attr(a,o):a.tabIndex=n)})}}},{requires:["dom","event","./base"]}),KISSY.add("ju-switchable/carousel/aria",function(e,t,a,n,i,r){function s(t){var a=this,n=a.config.steps,i=t.currentIndex,r=a.activeIndex,s=a.panels,o=s[i*n],c=a.triggers,l=c[i],u=t.originalEvent&&!(!t.originalEvent.target&&!t.originalEvent.srcElement);(u||-1==r)&&(e.each(c,function(e){k(e,-1)}),e.each(s,function(e){k(e,-1)}),l&&k(l,0),k(o,0),u&&o.focus())}function o(a){var n=null;return e.each(this.triggers,function(e){return e==a||t.contains(e,a)?(n=e,!1):void 0}),n}function c(e){var a=t.next(e),n=this.triggers;a||(a=n[0]),k(e,-1),a&&(k(a,0),a.focus())}function l(e){var a=t.prev(e),n=this.triggers;a||(a=n[n.length-1]),k(e,-1),a&&(k(a,0),a.focus())}function u(t){var a,n=t.keyCode,i=this,r=t.target;switch(n){case w:case b:a=o.call(i,r),a&&(c.call(i,a),t.halt());break;case m:case v:a=o.call(i,r),a&&(l.call(i,a),t.halt());break;case x:case y:a=o.call(i,r),a&&(i.switchTo(e.indexOf(a,i.triggers),void 0,I),t.halt())}}function d(a){var n=null;return e.each(this.panels,function(e){return e==a||t.contains(e,a)?(n=e,!1):void 0}),n}function f(e){var a=this,n=t.next(e),i=a.panels;n||(n=i[0]),k(e,-1),k(n,0),h.call(a,n,_)&&n.focus()}function g(e){var a=t.prev(e),n=this,i=n.panels;a||(a=i[i.length-1]),k(e,-1),k(a,0),h.call(n,a,P)&&a.focus()}function h(t,a){var n=this,i=e.indexOf(t,n.panels),r=n.config.steps,s=Math.floor(i/r);return s==n.activeIndex?1:i%r==0||i%r==r-1?(n.switchTo(s,a,I),0):1}function p(e){var t,a=this,n=e.keyCode,i=e.target;switch(n){case w:case b:t=d.call(a,i),t&&(f.call(a,t),e.halt());break;case m:case v:t=d.call(a,i),t&&(g.call(a,t),e.halt());break;case x:case y:t=d.call(a,i),t&&(a.fire("itemSelected",{item:t}),e.halt())}}var v=37,m=38,b=39,w=40,y=32,x=13,k=n.setTabIndex,I={originalEvent:{target:1}},_="forward",P="backward";e.mix(i.Config,{aria:!1}),r.addPlugin({name:"aria",init:function(t){if(t.config.aria){var n=t.triggers,i=t.panels,r=t.content,o=t.activeIndex;r.id||(r.id=e.guid("ks-switchbale-content")),r.setAttribute("role","listbox");var c=0;e.each(n,function(e){k(e,o==c?"0":"-1"),e.setAttribute("role","button"),e.setAttribute("aria-controls",r.id),c++}),c=0,e.each(i,function(e){k(e,"-1"),e.setAttribute("role","option"),c++}),t.on("switch",s,t);var l=t.nav;l&&a.on(l,"keydown",u,t),a.on(r,"keydown",p,t);var d=t.prevBtn,f=t.nextBtn;d&&(k(d,0),d.setAttribute("role","button"),a.on(d,"keydown",function(e){(e.keyCode==x||e.keyCode==y)&&(t.prev(I),e.preventDefault())})),f&&(k(f,0),f.setAttribute("role","button"),a.on(f,"keydown",function(e){(e.keyCode==x||e.keyCode==y)&&(t.next(I),e.preventDefault())}))}}},i)},{requires:["dom","event","../aria","./base","../base"]}),KISSY.add("ju-switchable/autoplay",function(e,t,a,n,i){var r=200,s=e.Env.host,o=function(e){var a=t.scrollTop(),n=t.viewportHeight(),i=t.offset(e),r=t.height(e);return i.top>a&&i.top+r<a+n};return e.mix(n.Config,{pauseOnScroll:!1,autoplay:!1,interval:5,pauseOnHover:!0}),n.addPlugin({name:"autoplay",init:function(t){function n(){c=e.later(function(){t.paused||t.next()},u,!0)}var c,l=t.config,u=1e3*l.interval;l.autoplay&&(l.pauseOnScroll&&(t.__scrollDetect=e.buffer(function(){t[o(t.container)?"start":"stop"]()},r),a.on(s,"scroll",t.__scrollDetect)),n(),t.stop=function(){c&&(c.cancel(),c=i),t.paused=!0},t.start=function(){c&&(c.cancel(),c=i),t.paused=!1,n()},l.pauseOnHover&&(a.on(t.container,"mouseenter",t.stop,t),a.on(t.container,"mouseleave",t.start,t)))},destroy:function(e){e.__scrollDetect&&(a.remove(s,"scroll",e.__scrollDetect),e.__scrollDetect.stop())}}),n},{requires:["dom","event","./base"]}),KISSY.add("ju-switchable/tabs/aria",function(e,t,a,n,i,r){function s(a){var n=this.triggers,i=null;return e.each(n,function(e){(e==a||t.contains(e,a))&&(i=e)}),i}function o(e){switch(e.keyCode){case u:case d:!e.ctrlKey||e.altKey||e.shiftKey||e.halt();break;case m:e.ctrlKey&&!e.altKey&&e.halt()}}function c(e){var t=e.target,a=this,n=e.ctrlKey&&!e.shiftKey&&!e.altKey;switch(e.keyCode){case g:case h:s.call(a,t)&&(a.prev(w(e)),e.halt());break;case p:case v:s.call(a,t)&&(a.next(w(e)),e.halt());break;case d:n&&(e.halt(),a.next(w(e)));break;case u:n&&(e.halt(),a.prev(w(e)));break;case m:e.ctrlKey&&!e.altKey&&(e.halt(),e.shiftKey?a.prev(w(e)):a.next(w(e)))}}function l(e){var t=e.originalEvent&&!(!e.originalEvent.target&&!e.originalEvent.srcElement),a=this,n=e.fromIndex,i=e.currentIndex;if(n!=i){var r=a.triggers[n],s=a.triggers[i],o=a.panels[n],c=a.panels[i];if(r&&b(r,"-1"),b(s,"0"),t)try{s.focus()}catch(l){}o&&o.setAttribute("aria-hidden","true"),c.setAttribute("aria-hidden","false")}}var u=33,d=34,f="added",g=37,h=38,p=39,v=40,m=9;e.mix(r.Config,{aria:!0}),n.addPlugin({name:"aria",init:function(n){function i(t){t.setAttribute("role","tab"),b(t,"-1"),t.id||(t.id=e.guid("ks-switchable"))}function r(e,t){e.setAttribute("role","tabpanel"),e.setAttribute("aria-hidden","true"),e.setAttribute("aria-labelledby",t.id)}if(n.config.aria){var s=n.triggers,u=n.activeIndex,d=n.panels,g=n.container;n.nav&&t.attr(n.nav,"role","tablist");var h=0;e.each(s,i),n.on(f,function(e){var t;i(t=e.trigger),r(e.panel,t)}),h=0,e.each(d,function(e){var t=s[h];r(e,t),h++}),u>-1&&(b(s[u],"0"),d[u].setAttribute("aria-hidden","false")),n.on("switch",l,n),a.on(g,"keydown",c,n),a.on(g,"keypress",o,n)}}},r);var b=i.setTabIndex,w=n.getDomEvent},{requires:["dom","event","../base","../aria","./base"]}),KISSY.add("ju-switchable/accordion/aria",function(e,t,a,n,i,r){function s(a){var n=this.triggers,i=null;return e.each(n,function(e){(e==a||t.contains(e,a))&&(i=e)}),i}function o(a){var n=this.panels,i=null;return e.each(n,function(e){(e==a||t.contains(e,a))&&(i=e)}),i}function c(t){var a=this,n=a.triggers,i=a.panels;return n[e.indexOf(t,i)]}function l(e){var t=this,a=s.call(t,e);return a||(a=c.call(t,o.call(t,e))),a}function u(e){switch(e.keyCode){case b:case w:!e.ctrlKey||e.altKey||e.shiftKey||e.halt();break;case T:e.ctrlKey&&!e.altKey&&e.halt()}}function d(e){var t,a=e.target,n=this,i=n.triggers,r=!e.ctrlKey&&!e.shiftKey&&!e.altKey,o=e.ctrlKey&&!e.shiftKey&&!e.altKey;switch(e.keyCode){case S:case C:(t=s.call(n,a))&&r&&(v.call(n,t),e.halt());break;case k:case I:(t=s.call(n,a))&&(g.call(n,t),e.halt());break;case _:case P:(t=s.call(n,a))&&(p.call(n,t),e.halt());break;case w:o&&(e.halt(),t=l.call(n,a),p.call(n,t));break;case b:o&&(e.halt(),t=l.call(n,a),g.call(n,t));break;case x:r&&(t=l.call(n,a),h.call(n,0),e.halt());break;case y:r&&(t=l.call(n,a),h.call(n,i.length-1),e.halt());break;case T:e.ctrlKey&&!e.altKey&&(e.halt(),t=l.call(n,a),e.shiftKey?g.call(n,t):p.call(n,t))}}function f(a,n){var i=this,r=i.triggers,s=r[a];if(e.each(r,function(e){e!==s&&(j(e,"-1"),t.removeClass(e,"ks-switchable-select"),e.setAttribute("aria-selected","false"))}),n)try{s.focus()}catch(o){}j(s,"0"),t.addClass(s,"ks-switchable-select"),s.setAttribute("aria-selected","true")}function g(t){var a=this,n=a.triggers,i=e.indexOf(t,n),r=0==i?n.length-1:i-1;f.call(a,r,!0)}function h(e){f.call(this,e,!0)}function p(t){var a=this,n=a.triggers,i=e.indexOf(t,n),r=i==n.length-1?0:i+1;f.call(a,r,!0)}function v(t){var a=this;a.switchTo(e.indexOf(t,a.triggers))}function m(t){var a=t.originalEvent&&!(!t.originalEvent.target&&!t.originalEvent.srcElement),n=this,i=n.config.multiple,r=t.currentIndex,s=n.panels,o=n.triggers,c=o[r],l=s[r];i||(e.each(s,function(e){e!==l&&e.setAttribute("aria-hidden","true")}),e.each(o,function(e){e!==c&&e.setAttribute("aria-hidden","true")}));var u=l.getAttribute("aria-hidden");
l.setAttribute("aria-hidden","false"==u?"true":"false"),c.setAttribute("aria-expanded","false"==u?"false":"true"),f.call(n,r,a)}var b=33,w=34,y=35,x=36,k=37,I=38,_=39,P=40,T=9,C=32,S=13;e.mix(i.Config,{aria:!0}),r.addPlugin({name:"aria",init:function(n){if(n.config.aria){var i=n.container,r=n.activeIndex;t.attr(i,"aria-multiselectable",n.config.multiple?"true":"false"),n.nav&&t.attr(n.nav,"role","tablist");var s=n.triggers,o=n.panels,c=0;e.each(o,function(t){t.id||(t.id=e.guid("ks-accordion-tab-panel"))}),e.each(s,function(t){t.id||(t.id=e.guid("ks-accordion-tab"))}),e.each(s,function(e){e.setAttribute("role","tab"),e.setAttribute("aria-expanded",r==c?"true":"false"),e.setAttribute("aria-selected",r==c?"true":"false"),e.setAttribute("aria-controls",o[c].id),j(e,r==c?"0":"-1"),c++}),c=0,e.each(o,function(e){var t=s[c];e.setAttribute("role","tabpanel"),e.setAttribute("aria-hidden",r==c?"false":"true"),e.setAttribute("aria-labelledby",t.id),c++}),n.on("switch",m,n),a.on(i,"keydown",d,n),a.on(i,"keypress",u,n)}}},i);var j=n.setTabIndex},{requires:["dom","event","../aria","./base","../base"]}),KISSY.add("ju-switchable/index",function(e,t,a,n,i,r){var s={Accordion:a,Carousel:n,Slide:i,Tabs:r};return e.mix(t,s),t},{requires:["./base","./accordion/base","./carousel/base","./slide/base","./tabs/base","./lazyload","./effect","./circular","./carousel/aria","./autoplay","./aria","./tabs/aria","./accordion/aria"]}),KISSY.add("my/mods/common/switchable",function(e,t){return t},{requires:["ju-switchable/index"]}),KISSY.add("my/mods/common/pagination",function(e,t,a,n,i){"use strict";function r(t,a){return this instanceof r?(this.con=e.one(t),r.superclass.constructor.call(this,a),this.init(),void 0):new r(t,a)}return r.ATTRS={totalPage:{value:100},currentPage:{value:1},preposePagesCount:{value:1},postposePagesCount:{value:1},firstPagesCount:{value:1},lastPagesCount:{value:1},render:{value:!0}},e.extend(r,e.Base,{init:function(){this.get("render")&&this.render()},render:function(){this.renderUI(),this.bindUI(),this.syncUI()},renderUI:function(){this._resetPagination()},bindUI:function(){var e=this;e.con.all("a.pg-li").on("click",function(t){t.preventDefault();var a=t.currentTarget,n=parseInt(i.attr(a,"data-page"));e._switchToPage(n)}),e.con.all("a.pg-prev").on("click",function(t){t.preventDefault();var a=e.get("currentPage")-1;e._switchToPage(a)}),e.con.all("a.pg-next").on("click",function(t){t.preventDefault();var a=e.get("currentPage")+1;e._switchToPage(a)})},syncUI:function(){},_resetPagination:function(){var e,t="",a=this.get("totalPage")>0?this.get("totalPage"):1,n=(this.get("currentPage")<=a&&this.get("currentPage"))>0?this.get("currentPage"):1,r=this.get("preposePagesCount")>=0?this.get("preposePagesCount"):2,s=this.get("postposePagesCount")>=0?this.get("postposePagesCount"):1,o=this.get("firstPagesCount")>=0?this.get("firstPagesCount"):2,c=this.get("lastPagesCount")>=0?this.get("lastPagesCount"):0;if(t+=1===n?'<span class="pg-prev"><i class="trigger"></i><span class="text">上一页</span></span>':'<a class="pg-prev" href="#nogo" data-spm-click="gostr=/jhs;locaid=prev"><i class="trigger"></i><span class="text">上一页</span></a>',o+r+1>=n)for(var l=1;n>l;l++)t+=this._renderActivePage(l);else{for(var l=1;o>=l;l++)t+=this._renderActivePage(l);t+='<span class="pg-li pg-break">...</span>';for(var l=n-r;n-1>=l;l++)t+=this._renderActivePage(l)}if(t+='<span class="pg-li pg-current">'+n+"</span>",n>=a-c-s){e=n+1;for(var l=n+1;a>=l;l++)t+=this._renderActivePage(l)}else{for(var l=n+1;n+s>=l;l++)t+=this._renderActivePage(l);t+='<span class="pg-li pg-break">...</span>';for(var l=a-c+1;a>=l;l++)t+=this._renderActivePage(l)}t+=n===a?'<span class="pg-next"><span class="text">下一页</span><i class="trigger"></i></span>':'<a class="pg-next" href="#nogo" data-spm-click="gostr=/jhs;locaid=next"><span class="text">下一页</span><i class="trigger"></i></a>',t+='<span class="sum"><em>'+n+"</em>/"+a+"</span>",i.html(this.con,t)},_renderActivePage:function(e){return'<a class="pg-li" href="#nogo" data-spm-click="gostr=/jhs;locaid=page'+e+'" data-page="'+e+'">'+e+"</a>"},_switchToPage:function(e){this.set("currentPage",e),this.fire("switch",{toPage:this.get("currentPage")})},show:function(){this.con.show()},hide:function(){this.con.hide()}}),r},{requires:["base","event","node","dom"]}),KISSY.add("my/mods/common/history",function(e){var t="pushState"in history,a=e.merge({},e.EventTarget),n="history:popstate"+e.guid(),i="#!";return window.History={pushState:function(a){return t?history.pushState(a,"title","?"+e.param(a)):location.hash=i+e.param(a),this.firepopstate()},getState:function(){var a=null;if(t){var n=location.search.replace("?","");a=e.unparam(n)}else{var r=location.hash.replace(i,"");a=e.unparam(r)}return a},onpopstate:function(e){return a.on(n,e),this},firepopstate:function(){return a.fire(n),this}},window.History}),KISSY.add("my/pages/2015/index",function(e,t,a,n,i,r){var s=e.all;window.criticalPoint=1240,window.jhs_promotion_map=window.jhs_promotion_map||{};var o={banner:{mod:t,diff:{top:0,bottom:0}},brand:{mod:a,diff:{top:0,bottom:10}},list:{mod:n,diff:{top:0,bottom:200}}};s(".J_Layout").each(function(t){var a=t.attr("data-mod");if(o[a]){var n=new r({container:t,autoDestroy:!1,diff:o[a].diff});n.addCallback(t,function(){n.destroy(),e.isFunction(o[a].mod)&&(t.addClass("appearance"),o[a].mod(t)),"list"==a&&i(s("#mod-life").show())})}})},{requires:["my/mods/2015/banner","my/mods/2015/brand","my/mods/2015/list","my/mods/2015/life","jbc/lazyload","core"]});/*
Copyright 2012, KISSY UI Library v1.30
MIT Licensed
build time: Nov 28 02:51
*/
KISSY.add("template",function(f){function h(a){if(!g[a]){var d=f.guid(o),e,m,c=[p,d,q,m=r(a),s];try{e=new Function(d,c.join(""))}catch(b){c[3]=i+j+t+","+b.message+i+j,e=new Function(d,c.join(""))}g[a]={name:d,o:m,parser:c.join(""),render:e}}return g[a]}var g={},n={"#":"start","@":"start","/":"end"},u=RegExp("KS_TEMPL_STAT_PARAM","g"),o="KS_DATA_",i='");',j='KS_TEMPL.push("',t="KISSY.Template: Syntax Error. ",p="var KS_TEMPL=[],KS_TEMPL_STAT_PARAM=false;with(",q='||{}){try{KS_TEMPL.push("',s='");}catch(e){KS_TEMPL=["KISSY.Template: Render Error. " + e.message]}};return KS_TEMPL.join("");',
v=function(a){return a.replace(/"/g,'\\"')},k=f.trim,r=function(a){var d,e;return v(k(a).replace(/[\r\t\n]/g," ").replace(/\\/g,"\\\\")).replace(/\{\{([#/@]?)(?!\}\})([^}]*)\}\}/g,function(a,c,b){d="";b=k(b).replace(/\\"/g,'"');if(c){if(e=b.indexOf(" "),b=-1===e?[b,""]:[b.substring(0,e),b.substring(e)],a=b[0],b=k(b[1]),(a=l[a])&&n[c])c=a[n[c]],d=""+(f.isFunction(c)?c.apply(this,b.split(/\s+/)):c.replace(u,b))}else d="KS_TEMPL.push(typeof ("+b+') ==="undefined"?"":'+b+");";return i+d+j})},l={"if":{start:'if(typeof (KS_TEMPL_STAT_PARAM) !=="undefined" && KS_TEMPL_STAT_PARAM){',
end:"}"},"else":{start:"}else{"},elseif:{start:"}else if(KS_TEMPL_STAT_PARAM){"},each:{start:function(a,d,e,f){var c="_ks_value",b="_ks_index";"as"===d&&e&&(c=e||c,b=f||b);return"KISSY.each("+a+", function("+c+", "+b+"){"},end:"});"},"!":{start:"/*KS_TEMPL_STAT_PARAM*/"}};f.mix(h,{log:function(a){a in g||(h(a),this.log(a))},addStatement:function(a,d){"string"==typeof a?l[a]=d:f.mix(l,a)}});return f.Template=h});