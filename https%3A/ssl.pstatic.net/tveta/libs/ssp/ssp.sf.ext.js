!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="https://ssl.pstatic.net/tveta/libs/ssp/",n(n.s=149)}({0:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},1:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},149:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),a=n(1),o=n.n(a),s=n(6),f=null,u=function(){function e(){i()(this,e);try{this._construction(),window.sfAPI={frameId:this.frameId,fluid:this.fluid,register:this.register,winInfo:this.winInfo,expand:this.expand,collapse:this.collapse},this._render(),this.addEventListener()}catch(t){this._render_error(t)}finally{window.name=""}}return o()(e,[{key:"_construction",value:function(){var e=JSON.parse(window.name);if("undefined"==typeof e.html)return!1;this.frameId=e.frameId,this.fluid=e.fluid,this.html=e.html,this.sspClks=e.sspClks,this.adClks=e.adClks}},{key:"addEventListener",value:function(){var e=this;window.addEventListener("message",function(t){return e._receive_msg(t)}),window.addEventListener("resize",function(t){return e._resize_sf(t)}),window.addEventListener("load",function(){e._initClickEventHander(),e.fluid&&e.setFluidSf()})}},{key:"_fire_sandbox_callback",value:function(e,t){try{"function"==typeof f&&f(e,t)}catch(n){}}},{key:"_resize_sf",value:function(e){this.fluid&&(this.setFluidSf(),this.win_info.sfInfo=this._getSfInfo())}},{key:"_receive_msg",value:function(e){try{var t=e.data;switch(t.evtType){case"viewable":this._fire_sandbox_callback(t.evtType);break;case"pos-update":this.win_info.parInfo=t.parInfo,this.win_info.sfInfo=this._getSfInfo(),this._fire_sandbox_callback(t.evtType,this.win_info)}}catch(e){}}},{key:"_initWinInfo",value:function(){this.win_info={},this.win_info.sfInfo=this._getSfInfo()}},{key:"_getSfInfo",value:function(){return{sfWidth:parseInt(document.body.offsetWidth),sfHeight:parseInt(document.body.offsetHeight)}}},{key:"_render",value:function(){if(this.html){var e=this.html;document.write(e),this._initWinInfo()}}},{key:"_render_error",value:function(e){var t,n,r=e&&e.message?e.message:"unknown";t=document.getElementsByTagName("head")[0],(n=document.createElement("script")).type="text/plain",n.id="sf_err_comment",n.text="\x3c!-- Construction of SafeFrame failed: ".concat(r," --\x3e"),t.appendChild(n)}},{key:"_initClickEventHander",value:function(){var e=this,t=new s.a,n=document.querySelectorAll("[data-ssp='clk']");Array.prototype.forEach.call(n,function(n){n.addEventListener("click",function(n){e.sspClks.forEach(function(e){t.log(e)}),e.adClks.forEach(function(e){t.log(e.url)}),e.adclick()},!1)})}},{key:"winInfo",value:function(){return win_info}},{key:"register",value:function(e){f="function"==typeof e?e:null}},{key:"setFluidSf",value:function(){try{var e={params:{}};e.params.frameHeight=document.body.offsetHeight,e.evtType="set-fluid-sf",e.frameId=this.frameId,c(e)}catch(t){}}},{key:"expand",value:function(e){try{var t={params:{},evtType:"expand-sf"};t.frameId=this.frameId,this.fluid||(t.params.deltaX=e.deltaX),t.params.deltaY=e.deltaY,c(t)}catch(n){}}},{key:"collapse",value:function(){try{var e={params:{},evtType:"collapse-sf"};e.frameId=this.frameId,c(e)}catch(t){}}},{key:"adclick",value:function(){try{var e={params:{},evtType:"adclick-sf"};e.frameId=this.frameId,c(e)}catch(t){}}}]),e}(),c=function(e){parent.postMessage(e,"*")},l=u;try{new l}catch(d){}},6:function(e,t,n){"use strict";var r=n(0),i=n.n(r),a=n(1),o=n.n(a);window.naver_corp_da=window.naver_corp_da||{};var s=function(){function e(){i()(this,e)}return o()(e,[{key:"log",value:function(e){var t=Array.prototype.slice.call(arguments),n=new Image(1,1);t.length>1&&t[1]&&"[object Function]"==={}.toString.call(t[1])&&n.addEventListener("load",t[1]),n.src=this.appendDummy(e)}},{key:"appendDummy",value:function(e){return e.indexOf("?")>0?(e+="&dummy=",e+=Math.random()):(e+="?dummy=",e+=Math.random()),e}}],[{key:"convertStringToXml",value:function(e){try{return(new DOMParser).parseFromString(e,"text/xml")}catch(t){return null}}},{key:"getNearestNumIdx",value:function(e,t){if(e.sort(function(e,t){return e-t}),(n=e.length)<2)return n-1;for(var n,r=Math.abs(e[--n]-t);n--&&!(r<(r=Math.abs(e[n]-t))););return n+1}},{key:"getVrAdNumIdx",value:function(e,t){return t>=480&&t<1080?t=720:t<480&&(t=480),this.getNearestNumIdx(e,t)}}]),e}();t.a=s}});