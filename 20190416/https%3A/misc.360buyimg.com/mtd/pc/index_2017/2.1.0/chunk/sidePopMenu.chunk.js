webpackJsonp([17],{122:function(t,e,n){function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,e,n){return e&&defineProperties(t.prototype,e),n&&defineProperties(t,n),t}}(),o=n(163),a=function(t){return t&&t.__esModule?t:{"default":t}}(o),r=function(){function SidePopMenu(t){_classCallCheck(this,SidePopMenu),this.config={$container:null,navItemHook:"",popItemHook:"",navCtnHook:".JS_navCtn",popCtnHook:".JS_popCtn",navItemOn:"",moveDeg:70,isAuto:!1,menuDirection:"right",itemEnterCallBack:null},t&&$.extend(this.config,t)}return i(SidePopMenu,[{key:"checkRun",value:function(){function checkRun(){var t=this.config;null==t.$container||0===$(t.navCtnHook).length||0===$(t.popCtnHook).length||""===t.navItemHook||""===t.popItemHook||this.init()}return checkRun}()},{key:"init",value:function(){function init(){var t=this.config;this.$navCtn=t.$container.find(t.navCtnHook),this.$popCtn=t.$container.find(t.popCtnHook),this.$navItemList=this.$navCtn.find(t.navItemHook),this.$popItemList=this.$popCtn.find(t.popItemHook),this.potCollect=[],this.moveTimer=null,this.enterTimer=null,this.isBind=!1,this.$window=$(window),this.callback=null,this.initEvents()}return init}()},{key:"getNavItemInfo",value:function(){function getNavItemInfo(){var t=this.config,e=[];return t.$container.find(t.navItemHook).each(function(){var t=$(this),n=t.position();e.push({thisHeight:t.outerHeight(!0).toFixed(0),thisWidth:t.outerWidth().toFixed(0),thisPstX:n.left,thisPstY:n.top,thisPageY:t.offset().top})}),e}return getNavItemInfo}()},{key:"initEvents",value:function(){function initEvents(){var t=this,e=t.config;e.$container.bind("mouseleave",$.proxy(t.ctnLeave,t)),t.$navCtn.delegate(e.navItemHook,{"mouseenter.itemEnter":t.navItemEnter,"mouseleave.itemLeave":t.navItemLeave},{thisObj:t,callback:e.itemEnterCallBack}),t.$navCtn.delegate(e.navItemHook,"mousemove.itemMove",{thisObj:t,callback:e.itemEnterCallBack},a["default"].throttle(t.navItemMove,t.moveTimer)),t.isBind=!0}return initEvents}()},{key:"ctnLeave",value:function(){function ctnLeave(){var t=this,e=t.config;t.$navItemList.removeClass(e.navItemOn),t.$popCtn.hide(),t.$popItemList.hide(),t.moveTimer=null,t.enterTimer=null}return ctnLeave}()},{key:"reBindNavItemEnter",value:function(){function reBindNavItemEnter(){var t=this,e=t.config;t.$navCtn.delegate(e.navItemHook,"mouseenter.itemEnter",{thisObj:t,callback:e.itemEnterCallBack},t.navItemEnter),t.isBind=!0}return reBindNavItemEnter}()},{key:"unbindNavItemEnter",value:function(){function unbindNavItemEnter(){var t=this;t.$navCtn.undelegate(".itemEnter"),t.isBind=!1}return unbindNavItemEnter}()},{key:"navItemEnter",value:function(){function navItemEnter(t){var e=t.data.thisObj,n=$(this),i=e.config,o=t.data.callback,a=$(this).index(i.$container.selector+" "+i.navItemHook);n.addClass(i.navItemOn).siblings(i.$container.selector+" "+i.navItemHook).removeClass(i.navItemOn),e.$popCtn.show();var r=e.$popItemList.eq(a);r.show().siblings(i.$container.selector+" "+i.popItemHook).hide(),i.isAuto&&e.popAutoShow(a,n),"function"==typeof o&&o({$displayEl:r,$item:n})}return navItemEnter}()},{key:"popAutoShow",value:function(){function popAutoShow(t,e){var n=this,i=n.config,o=e.index(i.$container.selector+" "+i.navItemHook),a=[],r=0;switch(a=n.getNavItemInfo(),i.menuDirection){case"right":n.$popCtn.css({position:"absolute",left:a[o].thisWidth+"px",top:a[o].thisPstY-a[o].thisHeight+"px",right:"auto",bottom:"auto"}),r=n.$window.height().toFixed(0)-(a[o].thisPageY-n.$window.scrollTop()),a[o].thisPstY<a[o].thisHeight?n.$popCtn.css("top","0px"):r<n.$popCtn.height().toFixed(0)&&n.$popCtn.css({top:a[o].thisPstY-(n.$popCtn.height().toFixed(0)-r)+"px"});break;case"left":n.$popCtn.css({position:"absolute",left:"auto",top:a[o].thisPstY-a[o].thisHeight+"px",right:a[o].thisWidth+"px",bottom:"auto"}),r=n.$window.height().toFixed(0)-(a[o].thisPageY-n.$window.scrollTop()),a[o].thisPstY<a[o].thisHeight?n.$popCtn.css("top","0px"):r<n.$popCtn.height().toFixed(0)&&n.$popCtn.css({top:a[o].thisPstY-(n.$popCtn.height().toFixed(0)-r)+"px"})}}return popAutoShow}()},{key:"navItemMove",value:function(){function navItemMove(t){function stopSwitch(){clearTimeout(e.moveTimer),e.isBind&&e.unbindNavItemEnter(),e.moveTimer=setTimeout(function(){e.reBindNavItemEnter()},100)}function startSwitch(){clearTimeout(e.moveTimer),e.isBind||e.reBindNavItemEnter()}var e=t.data.thisObj,n=$(this),i=e.config,o=t,a=i.moveDeg*(2*Math.PI/360),r=Math.tan(a).toFixed(2),u=0,s=0,c=0,l=null,v=null;if(e.potCollect.push({x:o.pageX,y:o.pageY}),e.potCollect.length>4)switch(e.potCollect.shift(),l=e.potCollect[0],v=e.potCollect[e.potCollect.length-1],s=v.x-l.x,c=v.y-l.y,u=Math.abs((c/s).toFixed(2)),i.menuDirection){case"right":u<=r&&s>0?stopSwitch():startSwitch();break;case"left":u<=r&&s<0?stopSwitch():startSwitch()}return clearTimeout(e.enterTimer),e.enterTimer=setTimeout(function(){n.trigger("mouseenter",{thisObj:e,callback:i.itemEnterCallBack})},300),!1}return navItemMove}()},{key:"navItemLeave",value:function(){function navItemLeave(t){var e=t.data.thisObj;clearTimeout(e.enterTimer)}return navItemLeave}()}]),SidePopMenu}();e["default"]=r},163:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={throttle:function(){function throttle(t,e,n){var i=n,o=void 0,a=void 0,r=void 0,u=null,s=0;i||(i={});var c=function(){function later(){s=!1===i.leading?0:(new Date).getTime(),u=null,r=t.apply(o,a),u||(o=a=null)}return later}();return function(){var n=(new Date).getTime();s||!1!==i.leading||(s=n);var l=e-(n-s);return o=this,a=arguments,l<=0||l>e?(clearTimeout(u),u=null,s=n,r=t.apply(o,a),u||(o=a=null)):u||!1===i.trailing||(u=setTimeout(c,l)),r}}return throttle}(),debounce:function(){function debounce(t,e,n){var i=void 0,o=void 0,a=void 0,r=void 0,u=void 0,s=function(){function later(){var s=(new Date).getTime()-r;s<e&&s>0?i=setTimeout(later,e-s):(i=null,n||(u=t.apply(a,o),i||(a=o=null)))}return later}();return function(){a=this,o=arguments,r=(new Date).getTime();var c=n&&!i;return i||(i=setTimeout(s,e)),c&&(u=t.apply(a,o),a=o=null),u}}return debounce}(),indexOf:function(){function indexOf(t,e){var n=t.length,i=Number(arguments[2])||0;for(i<0&&(i+=n);i<n;){if(i in t&&t[i]===e)return i;i++}return-1}return indexOf}(),getCalendar:function(){function getCalendar(t,e){if(t instanceof Date){var n=t.getMonth()+1,i=t.getFullYear(),o=t.getDate()+(e||0);switch(0===o&&0===(n-=1)&&(n=12,i-=1),n){case 1:case 3:case 5:case 7:case 8:case 10:case 12:o=0===o?31:o,o>31&&(n+=1,o=1);break;case 4:case 6:case 9:case 11:o=0===o?30:o,o>30&&(n+=1,o=1);break;case 2:i%4==0?(o=0===o?29:o)>29&&(n+=1,o=1):(o=0===o?28:o)>28&&(n+=1,o=1)}return n>12&&(n=1,i+=1),i+"/"+n+"/"+o}}return getCalendar}()}}});