if (self.CavalryLogger) { CavalryLogger.start_js(["UW0Iw"]); }

__d("PopoverMenuContextMinWidth",["cx","CSS","Style","shield"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){__p&&__p();var c=this;this._onSetMenu=function(){c._menu=c._popoverMenu.getMenu();c._showSubscription=c._popover.subscribe("show",b("shield")(c._updateWidth,c));var a=c._updateWidth.bind(c);c._menuSubscription=c._menu.subscribe(["change","resize"],function(){window.setTimeout(a,0)});c._updateWidth()};this._popoverMenu=a;this._popover=a.getPopover()}var c=a.prototype;c.enable=function(){this._setMenuSubscription=this._popoverMenu.subscribe("setMenu",b("shield")(this._onSetMenu,this))};c.disable=function(){this._setMenuSubscription.unsubscribe(),this._setMenuSubscription=null,this._showSubscription&&(this._showSubscription.unsubscribe(),this._showSubscription=null),this._menuSubscription&&(this._menuSubscription.unsubscribe(),this._menuSubscription=null)};c._updateWidth=function(){var a=this._menu.getRoot(),c=this._popoverMenu.getTriggerElem();c=c.offsetWidth;b("Style").set(a,"min-width",c+"px");b("CSS").conditionClass(a,"_575s",c>=a.offsetWidth)};return a}();Object.assign(a.prototype,{_setMenuSubscription:null,_showSubscription:null,_menuSubscription:null});e.exports=a}),null);