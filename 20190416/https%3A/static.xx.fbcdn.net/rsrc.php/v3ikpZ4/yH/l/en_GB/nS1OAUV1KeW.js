if (self.CavalryLogger) { CavalryLogger.start_js(["ISqZK"]); }

__d("AccessibleLayer",["fbt","DOM","Event","Focus"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){this._layer=a,this._listener=null}var c=a.prototype;c.enable=function(){this._afterShowSubscription=this._layer.subscribe("aftershow",this._onAfterShow.bind(this)),this._afterHideSubscription=this._layer.subscribe("hide",this._onAfterHide.bind(this))};c.disable=function(){this._listener&&this._listener.remove(),this._afterShowSubscription.unsubscribe(),this._listener=this._afterShowSubscription=null};c._closeListener=function(a){a=this._layer.getCausalElement();a&&(a.tabIndex==null?(a.tabIndex=-1,b("Focus").setWithoutOutline(a)):b("Focus").set(a));this._layer.hide()};c._setupCloseButton=function(){var a=this._layer.getContentRoot(),c=b("DOM").scry(a,".layer_close_elem")[0];c||(c=b("DOM").create("a",{className:"accessible_elem layer_close_elem",href:"#",role:"button"},[g._("Close pop-up and return")]),b("DOM").appendContent(a,c));this._listener=b("Event").listen(c,"click",this._closeListener.bind(this))};c._onAfterShow=function(){this._listener||this._setupCloseButton()};c._onAfterHide=function(){this._listener&&this._listener.remove(),this._listener=null};return a}();e.exports=a}),null);
__d("ContextualDialogARIA",["DOM","getOrCreateDOMID"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){this._layer=a}var c=a.prototype;c.enable=function(){this._subscription=this._layer.subscribe("beforeshow",this._addAriaAttribute.bind(this))};c.disable=function(){this._subscription.unsubscribe(),this._subscription=null};c._addAriaAttribute=function(){var a=this._layer.getCausalElement();if(!a)return;var c=b("DOM").scry(this._layer.getRoot(),".accessible_elem");c.length&&a.setAttribute("aria-describedby",b("getOrCreateDOMID")(c[0]))};return a}();e.exports=a}),null);
__d("ContextualDialogDefaultTheme",["cx"],(function(a,b,c,d,e,f,g){a={wrapperClassName:"_53ip",arrowDimensions:{offset:15,length:16}};e.exports=a}),null);
__d("ContextualDialogFitInViewport_PUSHSAFE",["Style","Vector"],(function(a,b,c,d,e,f){__p&&__p();var g=50,h=10;a=function(){"use strict";__p&&__p();function a(a){this._layer=a,this._contentHeight=null,this._contextY=null}var c=a.prototype;c.enable=function(){var a=this._layer.getArrowDimensions();this._arrowOffset=a.offset;a=a.length;this._arrowBuffer=this._arrowOffset+a;this._subscription=this._layer.subscribe(["reposition"],function(a,b){if(!this._layer.isFixed()||b.isVertical())return;this._adjustPosition()}.bind(this))};c.disable=function(){this._subscription.unsubscribe(),this._subscription=null};c._getContentHeight=function(){return b("Vector").getElementDimensions(this._layer._contentWrapper).y};c._getContextY=function(){return b("Vector").getElementPosition(this._layer.getContext(),"viewport").y};c._adjustPosition=function(){var a=this._getContextY(),c=this._getContentHeight();if(a===this._contextY&&c===this._contentHeight)return;this._contextY=a;this._contentHeight=c;var d=b("Vector").getViewportDimensions().y;d=Math.min(Math.max(0,a+c+h-d),Math.max(0,a-g),c-this._arrowOffset-this._arrowBuffer);b("Style").set(this._layer.getContent(),"top",-d+"px")};return a}();e.exports=a}),null);
__d("AbstractContextualDialogKeepInViewportBehavior",["ContextualLayerDimensions","Event","Vector","abstractMethod","throttle"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){this._layer=a,this._listeners=[],this._subscription=null,this._minimumTop=null}var c=a.prototype;c.enable=function(){var a=this._layer.getArrowDimensions();this._arrowOffset=a.offset;a=a.length;this._arrowBuffer=this._arrowOffset+a;this._subscription=this._layer.subscribe(["show","hide","reposition"],function(a,b){if(this._layer.isFixed())return;a=="reposition"?(this._calculateMinimumTop(b),this._adjustForScroll()):a=="show"?(this._attachScroll(),this._adjustForScroll()):this._detachScroll()}.bind(this));this._layer.isShown()&&this._attachScroll()};c.disable=function(){this._layer.isShown()&&this._detachScroll(),this._subscription.unsubscribe(),this._subscription=null};c.__adjustForScroll=function(a,c){return b("abstractMethod")("AbstractContextualDialogArrowBehavior","__adjustForScroll")};c._attachScroll=function(){var a=b("throttle")(this._adjustForScroll.bind(this)),c=this._layer.getContextScrollParent()||window;this._listeners=[b("Event").listen(c,"scroll",a),b("Event").listen(window,"resize",a)]};c._detachScroll=function(){while(this._listeners.length)this._listeners.pop().remove();this._listeners=[]};c._getContentHeight=function(){return!this._layer._contentWrapper?0:b("Vector").getElementDimensions(this._layer._contentWrapper).y};c._getContextY=function(){return b("Vector").getElementPosition(this._layer.getContext()).y};c._calculateMinimumTop=function(a){if(a.isVertical())return;this._minimumTop=this._getContextY()-(this._getContentHeight()-this._arrowBuffer)+a.getOffsetY()};c._adjustForScroll=function(){__p&&__p();var a=this._layer.getOrientation(),c=this._layer.getContent();if(a.isVertical()||!c)return;a=b("ContextualLayerDimensions").getViewportRect(this._layer);c=a.b-this._minimumTop;if(c<0)return;a=this._getContentHeight();var d=a-(this._arrowBuffer+this._arrowOffset);d=Math.max(0,Math.min(d,d-(c-a)));this.__adjustForScroll(this._layer,d)};return a}();e.exports=a}),null);
__d("ContextualDialogKeepInViewport",["AbstractContextualDialogKeepInViewportBehavior","Style"],(function(a,b,c,d,e,f){__p&&__p();a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.__adjustForScroll=function(a,c){a=a.getContent();b("Style").set(a,"top",-c+"px")};return c}(b("AbstractContextualDialogKeepInViewportBehavior"));e.exports=a}),null);
__d("LayerMouseHooks",["Arbiter","ContextualThing","Event","Layer"],(function(a,b,c,d,e,f){__p&&__p();var g=new(b("Arbiter"))();a=function(){"use strict";__p&&__p();function a(a){this._layer=a,this._subscriptions=[],this._currentlyActive=!1}var c=a.prototype;c.enable=function(){this._subscriptions=[g.subscribe("mouseenter",this._handleActive.bind(this)),g.subscribe("mouseleave",this._handleInactive.bind(this)),this._layer.subscribe("hide",function(){this._currentlyActive=!1}.bind(this))]};c.disable=function(){while(this._subscriptions.length)this._subscriptions.pop().unsubscribe();this._subscriptions=[];this._currentlyActive=!1};c._handleActive=function(a,b){!this._currentlyActive&&this._isNodeWithinStack(b)&&(this._layer.inform("mouseenter",b),this._currentlyActive=!0)};c._handleInactive=function(a,b){this._currentlyActive&&((!b||!this._isNodeWithinStack(b))&&(this._layer.inform("mouseleave",b),this._currentlyActive=!1))};c._isNodeWithinStack=function(a){return b("ContextualThing").containsIncludingLayers(this._layer.getContentRoot(),a)};return a}();b("Layer").subscribe("show",function(a,c){var d=c.getContentRoot(),e=[b("Event").listen(d,"mouseenter",function(){g.inform("mouseenter",d)}),b("Event").listen(d,"mouseleave",function(a){g.inform("mouseleave",a.getRelatedTarget())})],f=c.subscribe("hide",function(){while(e.length)e.pop().remove();f.unsubscribe();e=f=null})});e.exports=a}),null);
__d("ContextualDialog",["csx","cx","invariant","AccessibleLayer","ContextualDialogARIA","ContextualDialogArrow","ContextualDialogDefaultTheme","ContextualDialogFitInViewport_PUSHSAFE","ContextualDialogKeepInViewport","ContextualLayer","CSS","DOM","Event","JSXDOM","LayerButtons","LayerFormHooks","LayerHideOnTransition","LayerMouseHooks","LayerRefocusOnHide","Style","removeFromArray","shield"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();var j=0,k=300;a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(b,c){b=a.call(this,b,c)||this;b._footer=null;return b}var d=c.prototype;d._configure=function(c,d){Object.assign(c,c.theme||b("ContextualDialogDefaultTheme"));var e=c.arrowBehavior||b("ContextualDialogArrow");c.addedBehaviors=c.addedBehaviors||[];c.addedBehaviors.push(e);a.prototype._configure.call(this,c,d);this._footer=b("DOM").scry(d,"div._572u")[0];this._footer&&(this._footer.children.length===1&&this._footer.children[0].nodeName==="DIV"&&this._footer.children[0].children.length===0?this._footer.parentNode.removeChild(this._footer):b("CSS").addClass(this.getContentRoot(),"_kc"));c.hoverContext&&this._registerHoverHandlers(c.hoverContext,c.hoverShowDelay,c.hoverHideDelay)};d._registerHoverHandlers=function(a,c,d){__p&&__p();var e=this,f=c,g=d;f==null&&(f=j);g==null&&(g=k);var h,i;c=function(a){clearTimeout(i),h=setTimeout(b("shield")(e.show,e),f)};d=function(a){if(e._isHoverLocked())return;clearTimeout(h);i=setTimeout(e.hide.bind(e),g)};var l=b("Event").listen(a,"mouseenter",c),m=b("Event").listen(a,"mouseleave",d),n=this.subscribe("mouseenter",c),o=this.subscribe("mouseleave",d);this.subscribe("destroy",function(){clearTimeout(i),l.remove(),m.remove(),n.unsubscribe(),o.unsubscribe()})};d._getDefaultBehaviors=function(){var c=a.prototype._getDefaultBehaviors.call(this);b("removeFromArray")(c,b("LayerHideOnTransition"));return c.concat([b("AccessibleLayer"),b("LayerRefocusOnHide"),b("ContextualDialogKeepInViewport"),b("ContextualDialogFitInViewport_PUSHSAFE"),b("LayerButtons"),b("LayerFormHooks"),b("LayerMouseHooks"),b("ContextualDialogARIA")])};d._buildWrapper=function(c,d){__p&&__p();this._innerWrapper=b("JSXDOM").div(null,d);var e=a.prototype._buildWrapper.call(this,c,this._innerWrapper);if(c.wrapperClassName){var f=c.wrapperClassName.split(/\s+/);for(var f=f,g=Array.isArray(f),h=0,f=g?f:f[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var j;if(g){if(h>=f.length)break;j=f[h++]}else{h=f.next();if(h.done)break;j=h.value}j=j;b("CSS").addClass(e,j)}}this.replaceEntireLayerContents(d);this.getContent()===d||i(0,5783);this.setWidth(c.width);return e};d.getContentRoot=function(){!this._innerWrapper&&i(0,5784);return this._innerWrapper};d.setContent=function(a){i(0,5785)};d.replaceEntireLayerContents=function(a){this._content=null,b("DOM").empty(this.getContentRoot()),this.setInnerContent(a)};d.setInnerContent=function(a){b("CSS").addClass(a,"_53ij"),this.getContent()?b("DOM").replace(this.getContent(),a):b("DOM").appendContent(this.getContentRoot(),a),this._content=a,this.isShown()&&this.updatePosition()};d.setWidth=function(a){b("Style").set(this.getContentRoot(),"width",a?Math.floor(a)+"px":"");return this};d.getFooter=function(){return this._footer};d.lockHover=function(){this._hoverLocked=!0;return this};d.unlockHover=function(){this._hoverLocked=!1;return this};d._isHoverLocked=function(){return!!this._hoverLocked};c.setContext=function(a,b){a.setContext(b)};return c}(b("ContextualLayer"));e.exports=a}),null);
__d("ReactAbstractContextualDialog",["ContextualDialog","ContextualDialogArrow","ContextualDialogKeepInViewport","LayerAutoFocus","LayerHideOnBlur","LayerHideOnEscape","LayerRefocusOnHide","React","ReactDOM"],(function(a,b,c,d,e,f){__p&&__p();var g=b("React").PropTypes;a={createSpec:function(a){__p&&__p();return{displayName:a.displayName,propTypes:{position:g.oneOf(["above","below","left","right"]),alignment:g.oneOf(["left","center","right"]),offsetX:g.number,offsetY:g.number,width:g.number,autoFocus:g.bool,focusContextOnHide:g.bool,arrowBehavior:g.func,behaviors:g.object,shown:g.bool,context:g.object,contextRef:g.func,dialogRole:g.oneOf(["dialog","region","alert"]),hoverContext:g.object,hoverContextRef:g.func,hoverShowDelay:g.number,hoverHideDelay:g.number,hideOnBlur:g.bool,hideOnEscape:g.bool,insertParent:g.object,keepInViewport:g.bool,label:g.node,labelledBy:g.string,onBeforeHide:g.func,onToggle:g.func,hasActionableContext:g.bool,"data-testid":g.string},immutableProps:{modal:null},createLayer:function(c){__p&&__p();var d=this.props.context||b("ReactDOM").findDOMNode(this.props.contextRef()),e=this.props.hoverContext||this.props.hoverContextRef&&b("ReactDOM").findDOMNode(this.props.hoverContextRef());this.isHoverContextSet=e!=null;e=babelHelpers["extends"]({context:d,hoverContext:e,hoverShowDelay:this.props.hoverShowDelay,hoverHideDelay:this.props.hoverHideDelay,position:this.props.position,alignment:this.props.alignment,offsetX:this.props.offsetX,offsetY:this.props.offsetY,width:this.props.width,dialogRole:this.props.dialogRole,label:this.props.label,labelledBy:this.props.labelledBy,shouldSetARIAProperties:!this.props.hasActionableContext,arrowBehavior:this.props.arrowBehavior||b("ContextualDialogArrow"),addedBehaviors:this.enumerateBehaviors(this.props.behaviors),"data-testid":this.props["data-testid"]},a||{});e=new(b("ContextualDialog"))(e,c);this.props.contextBounds&&e.setContextWithBounds(d,this.props.contextBounds);this.props.autoFocus!==!1&&e.enableBehavior(b("LayerAutoFocus"));this.props.hideOnBlur===!0&&e.enableBehavior(b("LayerHideOnBlur"));this.props.hideOnEscape===!0&&e.enableBehavior(b("LayerHideOnEscape"));this.props.focusContextOnHide===!1&&e.disableBehavior(b("LayerRefocusOnHide"));this.props.keepInViewport===!1&&e.disableBehavior(b("ContextualDialogKeepInViewport"));this.props.onBeforeHide&&e.subscribe("beforehide",this.props.onBeforeHide);this.props.insertParent&&e.setInsertParent(this.props.insertParent);e.conditionShow(this.props.shown);return e},receiveProps:function(a,c){this.updateBehaviors(c.behaviors,a.behaviors);var d=a.context||a.contextRef&&b("ReactDOM").findDOMNode(a.contextRef());d&&(a.contextBounds?this.layer.setContextWithBounds(d,a.contextBounds):this.layer.setContext(d));c.hideOnEscape!==a.hideOnEscape&&(a.hideOnEscape?this.layer.enableBehavior(b("LayerHideOnEscape")):this.layer.disableBehavior(b("LayerHideOnEscape")));this.layer.setPosition(a.position).setAlignment(a.alignment).setOffsetX(a.offsetX).setOffsetY(a.offsetY).setWidth(a.width);(!this.isHoverContextSet||a.shown!==void 0)&&this.layer.conditionShow(a.shown)}}}};e.exports=a}),null);
__d("XUIAmbientNUXBody.react",["cx","React","XUICloseButton.react","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=b("joinClasses")("_21es",this.props.className,this.props.noCloseButton?"_izg":null),c=this.props.noCloseButton?null:b("React").createElement(b("XUICloseButton.react"),{"data-testid":"remove_NUX",shade:"light",className:"layer_close_elem _36gl",onClick:this.props.onCloseButtonClick,onFocus:this.props.onFocus});return b("React").createElement("div",{className:a},c,b("React").createElement("div",{className:"__xn"},this.props.children))};return c}(b("React").Component);a.defaultProps={noCloseButton:!1};e.exports=a}),null);
__d("XUIAmbientNUXDarkTheme",["cx"],(function(a,b,c,d,e,f,g){a={wrapperClassName:"_6dh- _2x6q",arrowDimensions:{offset:14,length:18}};e.exports=a}),null);
__d("XUIAmbientNUXTheme",["cx"],(function(a,b,c,d,e,f,g){a={wrapperClassName:"_2x6q",arrowDimensions:{offset:14,length:18}};e.exports=a}),null);
__d("XUIAmbientNUX.react",["fbt","React","ReactAbstractContextualDialog","ReactLayer","XUIAmbientNUXBody.react","XUIAmbientNUXDarkTheme","XUIAmbientNUXTheme","uniqueID"],(function(a,b,c,d,e,f,g){__p&&__p();var h=300,i=380,j=b("ReactLayer").createClass(b("ReactAbstractContextualDialog").createSpec({displayName:"XUIAmbientNUX",theme:b("XUIAmbientNUXTheme")})),k=b("ReactLayer").createClass(b("ReactAbstractContextualDialog").createSpec({displayName:"XUIAmbientNUX",theme:b("XUIAmbientNUXDarkTheme")}));a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=b("uniqueID")(),d.$2=b("uniqueID")(),c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.$3=function(){switch(this.props.width){case"wide":return i;case"custom":return this.props.customwidth;case"auto":return null;default:return h}};d.$4=function(){return g._("Learn about this new feature")};d.render=function(){var a=this.props.labelledBy,c=null,d=null;a||(c=b("React").createElement("div",{"aria-label":this.props.label||this.$4(),id:this.$2,key:this.$2}),a=this.$2);var e=g._("Close");d=b("React").createElement("a",{className:"layer_close_elem accessible_elem",href:"#",id:this.$1,key:this.$1,"aria-label":e,"aria-labelledby":this.$1+" "+a,role:"button"});e=this.props.useDarkMode?k:j;return b("React").createElement(e,{alignment:this.props.alignment,autoFocus:!1,behaviors:this.props.behaviors,context:this.props.context,contextRef:this.props.contextRef,dialogRole:"region",focusContextOnHide:!1,hasActionableContext:this.props.hasActionableContext,hideOnBlur:this.props.hideOnBlur,insertParent:this.props.insertParent,labelledBy:a,offsetX:this.props.offsetX,offsetY:this.props.offsetY,onBeforeHide:this.props.onBeforeHide,position:this.props.position,shown:this.props.shown,width:this.$3()},b("React").createElement(b("XUIAmbientNUXBody.react"),{className:this.props.className,noCloseButton:this.props.noCloseButton,onCloseButtonClick:this.props.onCloseButtonClick,onFocus:this.props.onFocus},this.props.children,c,this.props.noCloseButton?d:null))};return c}(b("React").Component);a.defaultProps={hasActionableContext:!1,hideOnBlur:!1,noCloseButton:!1,shown:!1,useDarkMode:!1,width:"normal"};e.exports=a}),null);
__d("BlueBarFixedBehaviorController",["Arbiter","Bootloader"],(function(a,b,c,d,e,f){__p&&__p();e.exports={init:function(a){__p&&__p();if(!("getBoundingClientRect"in a))return;var c,d=document.documentElement;function e(a){c!==a&&(c=a,b("Arbiter").inform("bluebarFixedBehaviorController/isfixed",c,"state"))}function f(){var b=a.getBoundingClientRect();b=b.top;var c=d?d.clientTop:0;b=Math.round(b)-c<=0;e(b)}function g(){e(!1)}f();b("Bootloader").loadModules(["Event"],function(a){a.listen(window,"scroll",f)},"BlueBarFixedBehaviorController");b("Arbiter").subscribe("quickling/response",f);b("Arbiter").subscribe("banner/shown",g)}}}),null);
__d("LayerAutoFocusReact",["focusWithinLayer"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(a){this._layer=a,this._subscription=null}var c=a.prototype;c.enable=function(){this._layer.containsReactComponent&&(this._subscription=this._layer.subscribe("reactshow",this._focus.bind(this)))};c.disable=function(){this._subscription&&(this._subscription.unsubscribe(),this._subscription=null)};c._focus=function(){var a=this._layer.getRoot();a&&b("focusWithinLayer")(a)};return a}();e.exports=a}),null);
__d("AsyncDialog",["cx","AsyncRequest","CSS","DialogX","DOM","Keys","LayerFadeOnShow","LoadingDialogDimensions","Parent","React","ReactDOM","URI","XUIDialogTitle.react","XUISpinner.react","emptyFunction","forEachObject"],(function(a,b,c,d,e,f,g){__p&&__p();var h,i;function j(a){__p&&__p();var c=b("LoadingDialogDimensions").WIDTH,d;a&&(c=parseInt(a.getAttribute("data-dialog-width"),10)||c,d=a.getAttribute("data-dialog-title")||d);if(!h){a=b("DOM").create("div",{className:"_57-x"});h=new(b("DialogX"))({width:c,addedBehaviors:[b("LayerFadeOnShow")],xui:!0},b("DOM").create("div",null,a));i=b("DOM").create("div");b("DOM").insertBefore(a,i);b("ReactDOM").render(b("React").createElement(b("XUISpinner.react"),{size:"large"}),a);h.subscribe(["key","blur"],function(a,c){if(a=="blur"||a=="key"&&c.keyCode==b("Keys").ESC){n();return!1}})}d?b("ReactDOM").render(b("React").createElement(b("XUIDialogTitle.react"),{showCloseButton:!1},d),i):b("DOM").empty(i);h.setWidth(c);return h}var k={},l=1,m=[];function n(){b("forEachObject")(k,function(a,b){a.abandon(),o(b)})}function o(a){delete k[a],Object.keys(k).length||j().hide()}function p(a,c){__p&&__p();var d=l++;m[d]=c;k[d]=a;var e=o.bind(null,""+d);Object.assign(a.getData(),{__asyncDialog:d});c=a.getRelativeTo();j(c).setCausalElement(c).show();var f=a.finallyHandler;a.setFinallyHandler(function(a){var c=a.getPayload();c&&c.asyncURL&&q.send(new(b("AsyncRequest"))(c.asyncURL));e();f&&f(a)});var g=a.abortHandler||b("emptyFunction"),h=a.interceptHandler||b("emptyFunction");a.setInterceptHandler(function(){try{h()}finally{e()}}).setAbortHandler(function(){try{g()}finally{e()}});a.send()}var q={send:function(a,c){p(a,c||b("emptyFunction"))},bootstrap:function(a,c,d){__p&&__p();if(!a)return;var e=b("Parent").byClass(c,"stat_elem")||c;if(e&&b("CSS").hasClass(e,"async_saving"))return!1;var f=new(b("URI"))(a).getQueryData();d=d==="dialog";a=new(b("AsyncRequest"))().setURI(a).setData(f).setMethod(d?"GET":"POST").setReadOnly(d).setStatusElement(e);c&&(a.setRelativeTo(c),a.setNectarModuleDataSafe(c));q.send(a)},respond:function(a,b){var c=m[a];c&&(c(b),delete m[a])},getLoadingDialog:function(){return j()}};e.exports=q}),null);
__d("HTMLMediaElementReadyStates",[],(function(a,b,c,d,e,f){a={HAVE_NOTHING:0,HAVE_METADATA:1,HAVE_CURRENT_DATA:2,HAVE_FUTURE_DATA:3,HAVE_ENOUGH_DATA:4};e.exports=a}),null);
__d("VideoFrameBuffer",["HTMLMediaElementReadyStates"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a,b,c,d,e,f,g){d===void 0&&(d=null),e===void 0&&(e=null),f===void 0&&(f=null),g===void 0&&(g=null),this.$2=b,this.$1=a,this.$3=c||"contain",this.$6=d,this.$7=e,this.$8=f,this.$9=g}var c=a.prototype;c.updateFrameBuffer=function(){__p&&__p();this.$4&&(this.$1.width=this.$4,this.$4=null);this.$5&&(this.$1.height=this.$5,this.$5=null);if(this.$2.readyState<b("HTMLMediaElementReadyStates").HAVE_CURRENT_DATA)return;var a=this.$1.clientWidth||this.$1.width,c=this.$1.clientHeight||this.$1.height,d=a,e=c,f=this.$2.videoWidth/this.$2.videoHeight,g=d/e;this.$3==="cover"&&(g*=-1,f*=-1);g>f?d=e*f:g<f&&(e=d/f);g=this.$1.getContext("2d");if(!(g instanceof window.CanvasRenderingContext2D))return;try{if(this.$6||this.$7){g.drawImage(this.$2,(f=this.$8)!=null?f:0,(f=this.$9)!=null?f:0,(f=this.$6)!=null?f:a,(f=this.$7)!=null?f:c,0,0,a,c)}else g.drawImage(this.$2,(a-d)/2,(c-e)/2,d,e)}catch(a){if(a.name!=="NS_ERROR_NOT_AVAILABLE")throw a}};c.getDOMNode=function(){return this.$1};c.updateDimensions=function(a,b){this.$4=a,this.$5=b};return a}();e.exports=a}),null);
__d("getScrollPosition",["getDocumentScrollElement","getUnboundedScrollPosition"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){var c=b("getDocumentScrollElement")(a.ownerDocument||a.document);a.Window&&a instanceof a.Window&&(a=c);var d=b("getUnboundedScrollPosition")(a);c=a===c?a.ownerDocument.documentElement:a;var e=a.scrollWidth-c.clientWidth;a=a.scrollHeight-c.clientHeight;d.x=Math.max(0,Math.min(d.x,e));d.y=Math.max(0,Math.min(d.y,a));return d}e.exports=a}),null);
__d("enumerate",[],(function(a,b,c,d,e,f){"use strict";e.exports=function(b){return b.FB_enumerate}(a)}),null);
__d("DisplayGenderConst",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({UNKNOWN:"UNKNOWN",FEMALE:"FEMALE",MALE:"MALE",NEUTER:"NEUTER"})}),null);
__d("QuickPerformanceLogger",["requireCond","cr:684019"],(function(a,b,c,d,e,f){"use strict";e.exports=b("cr:684019")}),null);
__d("filterNulls",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){__p&&__p();var b=[];for(var a=a,c=Array.isArray(a),d=0,a=c?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var e;if(c){if(d>=a.length)break;e=a[d++]}else{d=a.next();if(d.done)break;e=d.value}e=e;e!=null&&b.push(e)}return b}e.exports=a}),null);