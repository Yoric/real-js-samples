(function(){var e=function(){var e={},t={exports:e};var n=0;function r(){}function i(e,t,i){if("function"==typeof t){i=t;t={}}if(!t)t={};var a=t.prefix||"__jp";var o=t.name||a+n++;var s=t.param||"callback";var l=null!=t.timeout?t.timeout:6e4;var c=encodeURIComponent;var f=document.getElementsByTagName("script")[0]||document.head;var u;var d;if(l){d=setTimeout(function(){h();if(i)i(new Error("Timeout"))},l)}function h(){if(u.parentNode)u.parentNode.removeChild(u);window[o]=r;if(d)clearTimeout(d)}function g(){if(window[o]){h()}}window[o]=function(e){h();if(i)i(null,e)};e+=(~e.indexOf("?")?"&":"?")+s+"="+c(o);e=e.replace("?&","?");u=document.createElement("script");u.src=e;f.parentNode.insertBefore(u,f);return g}t.exports=i;return t.exports}();var t=function(){var t={},n={exports:t};var r=e;n.exports={template:function(e,t){var n={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var r=/(.)^/;var i={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"};var a=/\\|'|\r|\n|\u2028|\u2029/g;var o=function(e){return"\\"+i[e]};t=n;var s=RegExp([(t.escape||r).source,(t.interpolate||r).source,(t.evaluate||r).source].join("|")+"|$","g");var l=0;var c="__p+='";e.replace(s,function(t,n,r,i,s){c+=e.slice(l,s).replace(a,o);l=s+t.length;if(n){c+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'"}else if(r){c+="'+\n((__t=("+r+"))==null?'':__t)+\n'"}else if(i){c+="';\n"+i+"\n__p+='"}return t});c+="';\n";if(!t.variable)c="with(obj||{}){\n"+c+"}\n";c="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+c+"return __p;\n";var f;try{f=new Function(t.variable||"obj","_",c)}catch(u){u.source=c;throw u}var d=function(e){return f.call(this,e)};var h=t.variable||"obj";d.source="function("+h+"){\n"+c+"}";return d},getBannerData:function(e,t,n){if(n==="sc_hd_topbanner"){if(window.TOP_BANNER_DATA){t.call(this,window.TOP_BANNER_DATA,e)}}else{r("//marketing.alibaba.com/queryNicheMaterialList.do?locale="+window.alibabaHomeLocale+"&nicheRequests="+encodeURI(JSON.stringify(e)),{timeout:2e3},function(n,r){if(n){t.call(this,false,e)}t.call(this,r,e)}.bind(this))}},extend:function(){var e=false;var t,n,r,i;var a=arguments.length;var o=1;var s=arguments[0]||{};if(typeof s=="boolean"){e=s;s=arguments[o]||{};o++}if(typeof s!=="object"){s={}}for(;o<a;o++){n=arguments[o];if(n!=null){for(t in n){r=s[t];i=n[t];if(e&&i&&typeof i=="object"){s[t]=extend(e,r,i)}else if(i!==undefined){s[t]=i}}}}return s}};return n.exports}();var n=function(){var e={},t={exports:e};var n=e;var r=decodeURIComponent;var i=encodeURIComponent;n.get=function(e,t){l(e);if(typeof t==="function"){t={converter:t}}else{t=t||{}}var n=a(document.cookie,!t["raw"]);return(t.converter||c)(n[e])};n.set=function(e,t,n){l(e);n=n||{};var r=n["expires"];var a=n["domain"];var o=n["path"];if(!n["raw"]){t=i(String(t))}var c=e+"="+t;var f=r;if(typeof f==="number"){f=new Date;f.setDate(f.getDate()+r)}if(f instanceof Date){c+="; expires="+f.toUTCString()}if(s(a)){c+="; domain="+a}if(s(o)){c+="; path="+o}if(n["secure"]){c+="; secure"}document.cookie=c;return c};n.remove=function(e,t){t=t||{};t["expires"]=new Date(0);return this.set(e,"",t)};function a(e,t){var n={};if(o(e)&&e.length>0){var i=t?r:c;var a=e.split(/;\s/g);var s;var l;var f;for(var u=0,d=a.length;u<d;u++){f=a[u].match(/([^=]+)=/i);if(f instanceof Array){try{s=r(f[1]);l=i(a[u].substring(f[1].length+1))}catch(h){}}else{s=r(a[u]);l=""}if(s){n[s]=l}}}return n}function o(e){return typeof e==="string"}function s(e){return o(e)&&e!==""}function l(e){if(!s(e)){throw new TypeError("Cookie name must be a non-empty string")}}function c(e){return e}return t.exports}();var r=function(){var e={},t={exports:e};"use strict";var r=n;var i={};var a=function(){};a.prototype={attrs:{isLoggedIn:false,isNewUser:false,isFirstIn:true,country:"",firstName:"",lastName:"",serviceType:"",memberSeq:"",locale:""},get:function(e){return this.attrs[e]},set:function(e,t){this.attrs[e]=t},setup:function(){var e={};if(r.get("xman_us_f")){var t=r.get("xman_us_f").split("&");for(var n=t.length;n--;){var i=t[n].split("=");e[i[0]]=i[1]}}var a=r.get("xman_us_t");var o=r.get("xman_us_f");var s=/x_user=([^&"]+)/;if(a&&a.indexOf("sign=y")!==-1){this.set("isLoggedIn",true)}else{this.set("isLoggedIn",false)}if(o&&s.test(o)){o.match(s);o=RegExp.$1;o=o.split("|");if(o.length>=5){this.set("country",o[0]);this.set("firstName",o[1].replace(/</g,"&lt;").replace(/>/g,"&gt;"));this.set("lastName",o[2].replace(/</g,"&lt;").replace(/>/g,"&gt;"));this.set("serviceType",o[3]);this.set("memberSeq",o[4])}}if(this.get("memberSeq")!==""){this.set("isNewUser",true)}if(r.get("ali_intl_firstIn")===""){this.set("isFirstIn",true)}if(r.get("intl_locale")){this.set("locale",r.get("intl_locale"))}else{var l=e["x_locale"];if(l){this.set("locale",l)}else{this.set("locale","en_US")}}return this}};i=(new a).setup();function o(){var e=true;if(i.get("memberSeq")!==""){i.set("isNewUser",false);e=false}return e}t.exports={getIsNewUser:function(){i.setup();return o()},getServiceType:function(){i.setup();return i.get("serviceType")}};return t.exports}();var i=function(){var e={},t={exports:e};t.exports={addHandler:function(e,t,n){if(e.addEventListener){e.addEventListener(t,n,false)}else if(e.attachEvent){e.attachEvent("on"+t,n)}else{e["on"+t]=n}},removeHandler:function(e,t,n){if(e.removeEventListener){e.removeEventListener(t,n,false)}else if(e.detachEvent){e.detachEvent("on"+t,n)}else{e["on"+t]=null}},getEvent:function(e){return e?e:window.event},getTarget:function(e){return e.target||e.srcElement},preventDefault:function(e){if(e.preventDefault){e.preventDefault()}else{e.returnValue=false}},stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation()}else{e.cancelBubble=true}},getRelatedTarget:function(e){if(e.relatedTarget){return e.relatedTarget}else if(e.toElement){return e.toElement}else if(e.formElement){return e.formElement}else{return null}},getButton:function(e){if(document.implementation.hasFeature("MouseEvents","2.0")){return e.button}else{switch(e.button){case 0:case 1:case 3:case 5:case 7:return 0;case 2:case 6:return 2;case 4:return 1}}},getWheelDelta:function(e){if(e.wheelDelta){return e.wheelDelta}else{return-e.detail*40}},getCharCode:function(e){if(typeof e.charCode=="number"){return e.charCode}else{return e.keyCode}}};return t.exports}();var a=function(){var e={},t={exports:e};t.exports=function(e,t,n,r){var i=e?e.replace(/_\d+x\d+(xz)?\.(png|jpg|jpeg)(_\.webp)?/,""):"";i=i.replace(/http(s?):/g,"");var a=null;if(/sc0[12]\.alicdn\.com/.test(i)){i=i.replace(/sc0[12]\.alicdn\.com/,"i.alicdn.com/sc01");a=t}else if(/img\.alicdn\.com/.test(i)){i=i.replace(/img\.alicdn\.com/,"i.alicdn.com/img");a=r}else if(/i\.alicdn\.com/.test(i)){a=t||r}var o="";o=a?"_"+a+"x"+a:"";if(n){o+="xz"}if(a){i=i+o+".jpg"}return i};return t.exports}();var o=function(){var e={},t={exports:e};t.exports='<div class="sc-hd-banner-container">\n  <div class="banner-content">\n      <a \n        class="J-banner-placeholder banner-placeholder" \n        data-role="<%=type%>" \n        target="_blank" \n        href="<%= bannerInfo.bgLink %>" \n        title="Check it Now" \n        style="background-image:url(<%= bannerInfo.bgImage %>);" \n        data-goldlog="pos=tbannerclick&val=viewmore&type=<%=type%>">\n      </a>\n      <% if(linkNumber >= 4 && linkNumber <= 7) { %>\n        <div class="banner-subitem-list">\n            <% for(var i = 1; i <= linkNumber; i++) {  %>\n              <% var link = "banner" + i  + "Link"; %>\n              <div class="banner-subitem">\n                <a class="J-subitem banner-subitem-link banner-subitem-link-type-<%= style.hoverAniType %>" target="_blank" href="<%= bannerInfo[link] %>" style="width:<%= style.bgWidth %>px;" data-goldlog="index=<%=i%>"></a>\n              </div>\n            <% } %>\n          </div>\n      <% } %>\n      <% if(tabNumber >= 4 && tabNumber <= 7) { %>\n        <div class="banner-subitem-list new-banner-subitem-list">\n            <% for(var i = 0; i < tabNumber; i++) {  %>\n              <div class="banner-subitem"  data-ctrdot="<%= tabInfo[i].realCtrParam %>">\n                <a \n                  title="<%= tabInfo[i].venueCopy %>" \n                  data-goldlog="pos=tbannerclick&val=item&type=<%=type%>&blockId=<%=tabInfo[i].blockId%>&index=<%=i%>&clickParam=<%=tabInfo[i].clickParam%>" \n                  class="J-subitem banner-subitem-link banner-subitem-link-type-<%= style.hoverAniType %>" \n                  target="_blank" \n                  href="<%= tabInfo[i].linkUrl %>" \n                  style="width:<%= style.bgWidth %>px;background-color:<%= style.bottomColor %>;"\n                >\n                  <img class="banner-subitem-image" src="<%=tabInfo[i].imgUrl %>"  />\n                  <span class="banner-subitem-copy" style="width:<%=style.boxWidth%>px;color:<%= style.textColor %>"><%= tabInfo[i].venueCopy %></span>\n                </a>\n              </div>\n            <% } %>\n          </div>\n      <% } %>\n  </div>\n</div>';return t.exports}();var s=function(){var e={},n={exports:e};var s=t,l=r,c=i,f=a,u=o;var d=function(){};var h={7:{bgWidth:132,boxWidth:64},6:{bgWidth:124,boxWidth:80},5:{bgWidth:160,boxWidth:112},4:{bgWidth:210,boxWidth:156}};d.prototype={attrs:{nicheCode:"",dynamicNicheCode:"",tinyImgUrls:["sc01.alicdn.com/kf/","sc02.alicdn.com/kf/","img.alicdn.com/tfs/"],type:"",appName:"",validKey:"",isTopBanner:false,blackList:[],whiteList:[]},get:function(e){return this._attrs[e]},set:function(e,t){this._attrs[e]=t},initAttrs:function(e){this._attrs=s.extend({},this.attrs,e)},isInBlackList:function(){var e=false;var t=this.get("blackList");if(t&&t.length>0){for(var n=0,r=t.length;n<r;n++){if(typeof t[n]==="string"&&window.location.href.indexOf(t[n])!==-1){e=true;break}}}if(e===false){var i=l.getIsNewUser(),a=this.get("validKey");if(a.indexOf("!newuser")>=0){if(i===true){e=true}else{e=false}}else if(a.indexOf("newuser")>=0){if(i===true){e=false}else{e=true}}}if(e===false){var o=l.getServiceType(),a=this.get("validKey");if(typeof o==="string"&&typeof a==="string"&&a!==""){if(a.indexOf("!")>=0){if(a.indexOf("!"+o)>=0){e=true}else{e=false}}else{if(a.indexOf(o)>=0){e=false}else{e=true}}}}var s=this.get("whiteList"),c=this.get("appName");s&&s.forEach(function(t,n){if(t.appName===c){e=true;var r=t.matchUrls||[];r.forEach(function(t,n){if(window.location.href.indexOf(t)!==-1){e=false}}.bind(this))}}.bind(this));return e},formatData:function(e,t){e=e||{};if(e.code===200){var n=e.data||{},r=n.nicheVoList,i={};try{if(r&&r.length>0){var a=r.filter(function(e){return e.nicheCode===t[0].nicheCode})[0];if(a){a=a.materialVoList[0].universalMaterialMap}else{return}i.bannerInfo=a;i.tabNumber=0;if(t.length!==1&&r.length!==1){var o=r.filter(function(e){return e.nicheCode===t[1].nicheCode||e.nicheCode==="ICBU_PC_TOP_BANNER_PLAN_B"})[0];if(o.subNicheVoList&&o.subNicheVoList.length!==0){var s=o.subNicheVoList.sort(function(e,t){var n=e.subNicheCode.match(/\d+$/)||0;codeY=t.subNicheCode.match(/\d+$/)||0;n=Number(n[0]);codeY=Number(codeY[0]);return n-codeY}.bind(this));i.tabInfo=s.map(function(e){var t=e.materialVoList[0];return{imgUrl:t.imgUrl,linkUrl:t.linkUrl,venueCopy:t.venueCopy,blockId:t.venueId,clickParam:t.clickParam,realCtrParam:t.realCtrParam}});i.tabNumber=s.length}else if(o.materialVoList&&o.materialVoList.length!==0){i.tabInfo=o.materialVoList.map(function(e){return{imgUrl:e.imgUrl,linkUrl:e.linkUrl+"&deliveryId="+e.deliveryId+"&topOfferIds="+e.productId+"&categoryIds="+(e.extendMap&&e.extendMap.categoryId2),venueCopy:e.venueCopy,blockId:e.venueId,clickParam:e.clickParam,realCtrParam:e.realCtrParam}});i.tabNumber=o.materialVoList.length}}return i}}catch(l){}}},init:function(e){this.initAttrs(e);if(this.get("isTopBanner")&&this.isInBlackList()===true){return}this.current=false;var t=[];t.push({nicheCode:this.get("nicheCode")});if(this.get("dynamicNicheCode")){t.push({nicheCode:this.get("dynamicNicheCode")})}if(this.get("isTopBanner")){this.set("type","sc_hd_topbanner")}else{this.set("type","sc_hd_bottombanner")}s.getBannerData(t,this.showPage.bind(this),this.get("type"))},showPage:function(e,t){this.current=this.formatData(e,t);if(!this.current){if(this.get("type")==="sc_hd_topbanner"){var n=document.getElementsByClassName("sc-hd-top-banner-container");if(n&&n[0]){n=n[0];n.parentNode.removeChild(n)}}return}if(this.current.tabInfo&&this.current.tabInfo.length!==0){this.resetTinyImageUrl()}this.renderUI()},setStyle:function(e){var t=parseInt(this.current.bannerInfo.linkNumber,10)||0;var n=e.tabNumber;var r=this.get("configuration");e.linkNumber=t;e.style=h[t||n]||{};e.style.bannerHeight=r.bannerHeight||60;e.style.textColor=r.textColor||"#000";e.style.bottomColor=r.bottomColor||"#fff";e.style.hoverAniType=r.hoverAniType||"1";return e},renderUI:function(){var e=this.current||{},t=null;e=this.setStyle(e);e.type=this.get("type");if(e.bannerInfo&&e.bannerInfo.bgImage){e.bannerInfo.bgImage=f(e.bannerInfo.bgImage)}if(e.tabInfo&&e.tabInfo.length!==0){e.tabInfo.forEach(function(e){e.imgUrl=f(e.imgUrl,50,null,50)})}this.elementStr=s.template(u)(e);if(this.get("isTopBanner")===true){t=document.getElementsByClassName("sc-hd-top-banner-container")[0];if(t){t.innerHTML=this.elementStr;t.setAttribute("data-spm","sc_hd_topbanner");this.element=t}else{var n=document.createElement("div");n.innerHTML=this.elementStr;n.setAttribute("data-spm","sc_hd_topbanner");var r=document.body.children;document.body.insertBefore(n,r[0]);this.element=n}}else{t=document.getElementsByClassName("sc-hd-global-bottom-banner")[0];if(t){t.innerHTML=this.elementStr;t.setAttribute("data-spm","sc_hd_bottombanner");this.element=t}}this.element&&this.bindUI()},bindUI:function(){var e=this.element.querySelectorAll("[data-goldlog]");for(var t=0;t<e.length;t++){var n=e[t];c.addHandler(n,"click",function(e){var t=c.getEvent(e);var n=t.currentTarget?t.currentTarget:t.srcElement;this.goldlog(n)}.bind(this))}this.goldLogDot()},resetTinyImageUrl:function(){var e=this.current.tabInfo;var t=this.get("tinyImgUrls"),n=[];e.forEach(function(e,r){var i=false;t.forEach(function(t,n){if(e.imgUrl.indexOf(t)!==-1){i=true}});if(i===true){var a=e.imgUrl.match(/\.jpg|\.png/gi)||[],o=e.imgUrl.match(/(\.jpg|\.png)$/gi)||[],s=".jpg";if(e.imgUrl.indexOf("alicdn.com/kf/")!==-1){s=o[0]}if(a.length===1&&o.length===1){e.imgUrl=e.imgUrl+"_80x80"+s}}n.push(e)}.bind(this));this.current.tabInfo=n},goldlog:function(e){var t=e.getAttribute("data-goldlog");var n=window.SC_HD_TOP_BANNER_DATA["appName"]||"";if(window.goldlog){var r=window.goldlog;r.record&&r.record("/sc.sc_header_footer.tb","CLK",t+"&a_n="+n+"&niche="+this.get("nicheCode"),"H47730849")}},goldLogDot:function(){var e="pos=tbanner&type="+this.get("type");if(this.current.tabInfo){e+="blockIds="+this.current.tabInfo.map(function(e){return e.blockId||""}).join(",")}var t=window.SC_HD_TOP_BANNER_DATA["appName"]||"";if(window.goldlog){var n=window.goldlog;n.record&&n.record("/sc.sc_header_footer.tbexp","EXP",e+"&a_n="+t+"&niche="+this.get("nicheCode"),"H1482419027")}}};window.GlobalTopBanner=d;window.SCHdTopBanner=new d;n.exports=window.SCHdTopBanner;return n.exports}();var l=function(){var e={},t={exports:e};var n=s;window.SCHD_COMS=window.SCHD_COMS||{};window.SCHD_COMS.TopBanner=n;t.exports=n;return t.exports}();var c=function(){var e={},t={exports:e};t.exports=l;return t.exports}()})();;
