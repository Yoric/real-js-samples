/*
 * yads-timeline-ex.js
 * @version 1.1.1
 */
!function(){"use strict";function t(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e={NORMAL:0,ULTRA_VARIABLE:1},n=function(){function i(n){t(this,i),this.params=n||{},this.isAdFetched=!1,this.insertReservationIds=[],this.adHtmls=[],this.usedAdNum=0,this.renderMode=e.NORMAL,this._init()}return i.prototype._init=function(){if(this.params.yads_ad_ds){window.yadsTimelineManagerList||(window.yadsTimelineManagerList={});var t="yads-timeline-"+this.params.yads_ad_ds+"-"+Math.floor(1e7*Math.random());this.uniqueId=t,window.yadsTimelineManagerList[t]=this,this._fetch()}},i.prototype._fetch=function(){if(window.yadsRequestAsync){var t=document.createElement("ins");t.id=this.uniqueId,(document.head||document.body).appendChild(t),this.params.yads_parent_element=this.uniqueId;var i=this.params.yads_video_autoplay_set;0!==i&&1!==i||(this.params.yads_video_autoplay_set=String(i)),window.yadsRequestAsync(this.params)}},i.prototype._isArray=function(t){return Array.isArray?Array.isArray(t):"[object Array]"===Object.prototype.toString.call(t)},i.prototype.hasMoreAds=function(){return this.adHtmls.length>0},i.prototype.insertAd=function(t){if(t){if(!document.getElementById(t))return-1;this.insertReservationIds.push(t)}if(!this.isAdFetched)return 0;if(0===this.adHtmls.length)return 0;for(;this.adHtmls.length>0&&this.insertReservationIds.length>0;){var i=document.getElementById(this.insertReservationIds.shift());if(i)if(this.renderMode===e.NORMAL){var n=this.adHtmls.shift();n&&(i.innerHTML=n,this.usedAdNum+=1,this.notifyForVImps(i,this.usedAdNum))}else if(this.renderMode===e.ULTRA_VARIABLE){var s=this.adHtmls.shift();if(s){i.innerHTML=s.htmls;for(var r=0;r<s.callbacks.length;r++)s.callbacks[r]();this.usedAdNum+=1,this.notifyForVImps(i,this.usedAdNum)}}}return 1},i.prototype.notifyForVImps=function(t,i){var e=void 0;try{var n=window.top.YJ_UADF;if(!n||!n.YADSViewable)return;e=window.top.YJ_UADF.YADSViewable}catch(s){return}if(e.notifyTimelineAttached){var r=window.YJ_YADS.innerFuncs.findViewableTargetElements(t);if(r&&1===r.length){var a=r[0],o=this.uniqueId,d=this.params.yads_ad_ds,l=1;e.notifyTimelineAttached(o,d,l,i,a)}}},i}();window.YadsTimelineManager=n,window.yadsTimelinePoolAds=function(t,n,s,r){var a=function(t){return 0!==t.length&&("object"===i(t[0])&&"1"===t[0].ultra_variable)};if(window.yadsTimelineManagerList&&window.yadsTimelineManagerList[r]){var o=window.yadsTimelineManagerList[r];if(o._isArray(t))if(a(t)){o.renderMode=e.ULTRA_VARIABLE;var d="https:"===location.protocol?"https:":"http:",l=t.length,u=function c(t,i,e,n){if(e>=n)return t.isAdFetched=!0,void t.insertAd.call(t);var s=function(t,i,e){var n=window.YJ_YADS.innerFuncs.getFunctionObject(i[e].script.callback);if(!n)return!1;var s=r+"-"+e,a=n([i[e]],null,null,s,{returnHtml:!0});return t.adHtmls.push(a),!0};if(s(t,i,e))c(t,i,e+1,n);else{var a=d+"//s.yimg.jp/images/listing/tool/yads/"+i[e].script.js_file;window.YJ_YADS.innerFuncs.loadScript(a,function(){s(t,i,e),c(t,i,e+1,n)},!0)}};u(o,t,0,l)}else{for(var h=0;h<t.length;h++)o.adHtmls.push(t[h]);o.isAdFetched=!0,o.insertAd()}}}}();