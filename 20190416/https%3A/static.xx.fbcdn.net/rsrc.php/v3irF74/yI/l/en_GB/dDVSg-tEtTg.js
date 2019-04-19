if (self.CavalryLogger) { CavalryLogger.start_js(["0whdT"]); }

__d("XHPTemplate",["DataStore","DOM","HTML","XHPTemplateProcessor"],(function(a,b,c,d,e,f){__p&&__p();var g=b("XHPTemplateProcessor").processor;a=function(){"use strict";__p&&__p();function a(a){g instanceof Function&&(a=g(a)),this._model=a}var c=a.prototype;c.render=function(){b("HTML").isHTML(this._model)&&(this._model=b("DOM").setContent(document.createDocumentFragment(),this._model)[0]);return this._model.cloneNode(!0)};c.build=function(){return new h(this.render())};a.getNode=function(b,c){return a.getNodes(b)[c]};a.getNodes=function(a){__p&&__p();var c=b("DataStore").get(a,"XHPTemplate:nodes");if(!c){c={};var d=b("DOM").scry(a,"[data-jsid]");d.push(a);var e=d.length;while(e--){var f=d[e];c[f.getAttribute("data-jsid")]=f;f.removeAttribute("data-jsid")}b("DataStore").set(a,"XHPTemplate:nodes",c)}return c};return a}();var h=function(){"use strict";__p&&__p();function a(a){this._root=a,this._populateNodes()}var c=a.prototype;c._populateNodes=function(){this._nodes={};this._leaves={};var a=this._root.getElementsByTagName("*");for(var b=0,c=a.length;b<c;b++){var d=a[b],e=d.getAttribute("data-jsid");e&&(d.removeAttribute("data-jsid"),this._nodes[e]=d,this._leaves[e]=!d.childNodes.length)}};c.getRoot=function(){return this._root};c.getNode=function(a){return this._nodes[a]};c.setNodeProperty=function(a,b,c){this.getNode(a)[b]=c;return this};c.setNodeContent=function(a,c){if(!this._leaves[a])throw new Error("Can't setContent on non-leaf node: "+a);b("DOM").setContent(this.getNode(a),c);return this};return a}();e.exports=a}),null);
__d("Keyframes.react",["FBLogger","Keyframes","React","createCancelableFunction","promiseDone"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a){var c=a.width;a=a.height;c={width:c||0,height:a||0};return b("React").createElement("div",{style:c})}function h(a){var c=a.width;a=a.height;return b("React").createElement(g,{width:c,height:a})}a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={error:!1,renderer:null},c.$6=function(a){c.setState({renderer:a,error:!1}),c.props.onLoad&&c.props.onLoad(a)},c.$7=function(a){c.setState({renderer:null,error:!0})},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.seekToProgress=function(a){this.state.renderer&&this.state.renderer.seekToProgress(a)};d.componentDidMount=function(){this.$4(this.props.source)};d.componentWillUnmount=function(){this.state.renderer&&this.state.renderer.pause(),this.$2&&this.$2.cancel(),this.$3&&this.$3.cancel()};d.componentDidUpdate=function(a,b){if(this.props.source!==a.source||this.props.projectName!==a.projectName||this.props.assetName!=null&&a.assetName!=null&&this.props.assetName!==a.assetName||a.assetID!=null&&this.props.assetID!=null&&this.props.assetID!==a.assetID)this.$4(this.props.source);else{var c=this.state.renderer;c!==b.renderer?this.$5(b.renderer,c):c&&((a.width!==this.props.width||a.height!==this.props.height)&&(c.resetDimensions(),this.props.width&&c.setWidth(this.props.width),this.props.height&&c.setHeight(this.props.height)),a.muted!==this.props.muted&&(this.props.muted?c.mute():c.unMute()),a.repeatCount!==this.props.repeatCount&&c.repeatCount(this.props.repeatCount),a.onError!==this.props.onError&&c.onError(this.props.onError),a.onRepeatEnd!==this.props.onRepeatEnd&&c.onRepeatEnd(this.props.onRepeatEnd),a.onProgress!==this.props.onProgress&&c.onProgress(this.props.onProgress),a.initialProgress!==this.props.initialProgress&&c.seekToProgress(this.props.initialProgress),a.playing!==this.props.playing&&(this.props.playing?c.play():(c.pause(),this.props.resetOnPause&&c.repeatCount(this.props.repeatCount).seekToProgress(this.props.initialProgress))),c.redrawIfNeeded())}};d.$5=function(a,b){if(!this.$1)return;b&&(b.onError(this.props.onError).onRepeatEnd(this.props.onRepeatEnd).onProgress(this.props.onProgress).repeatCount(this.props.repeatCount),this.props.width&&b.setWidth(this.props.width),this.props.height&&b.setHeight(this.props.height),this.props.initialProgress&&b.seekToProgress(this.props.initialProgress),this.props.muted?b.mute():b.unMute(),this.props.playing?b.play():b.pause(),b.redrawIfNeeded());a&&b?this.$1.replaceChild(b.getElement(),a.getElement()):(a&&this.$1.removeChild(a.getElement()),b&&this.$1.appendChild(b.getElement()))};d.$8=function(a){if(a instanceof ArrayBuffer)return b("Keyframes").requestRendererFromBytes(a,this.$9());return this.props.unstable_packageIndex!=null?b("Keyframes").requestRendererFromPackage(a,this.props.unstable_packageIndex,{projectName:this.props.projectName,packageName:this.props.unstable_packageName||"__FIXME__missing_react_package_name"}):b("Keyframes").requestRenderer(a,this.$9())};d.$4=function(a){this.$2&&this.$2.cancel(),this.$3&&this.$3.cancel(),!a?this.$7():(this.$2=b("createCancelableFunction")(this.$6),this.$3=b("createCancelableFunction")(this.$7),b("promiseDone")(this.$8(a),this.$2,this.$3))};d.$9=function(){return this.props.assetID?{projectName:this.props.projectName,assetID:this.props.assetID}:{projectName:this.props.projectName,assetName:this.props.assetName||"__FIXME__missing_react_asset_name"}};d.render=function(){var a=this,c=this.props,d=c.className,e=c.height,f=c.style;c=c.width;c=this.state.renderer?null:this.state.error?this.props.errorPlaceholder||b("React").createElement(h,{width:c,height:e}):this.props.placeholder||b("React").createElement(g,{width:c,height:e});e=this.props.mutator&&this.state.renderer&&b("React").cloneElement(this.props.mutator,{__renderer:this.state.renderer});return b("React").createElement("div",{className:d,ref:function(b){return a.$1=b},style:babelHelpers["extends"]({display:"inline-block",lineHeight:0,fontSize:0},f)},c,e)};return c}(b("React").Component);a.defaultProps={initialProgress:0,resetOnPause:!1,playing:!0,repeatCount:Infinity};e.exports=a}),null);
__d("UFIReactionsAnimatedKeyframesIcon.react",["Keyframes.react","React","UFIReactionsKeyframesAssets","UFIReactionTypes"],(function(a,b,c,d,e,f){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}c.supportsReaction=function(a){return!!b("UFIReactionsKeyframesAssets").reactions[a]};var d=c.prototype;d.render=function(){var a=this.props,c=a.animate,d=a.className,e=a.maxSize;a=a.reactionID;var f=b("UFIReactionsKeyframesAssets").initialProgress[a]||0,g=b("UFIReactionsKeyframesAssets").reactions[a];return g?b("React").createElement(b("Keyframes.react"),{projectName:"feedback_reactions",assetName:b("UFIReactionTypes").reactions[a].name,className:d,source:g,width:e,height:e,playing:c,initialProgress:f,resetOnPause:!0}):b("React").createElement("div",{style:{width:e,height:e}})};return c}(b("React").PureComponent);e.exports=a}),null);
__d("UFIReactionsDialogLayerImpl.react",["cx","csx","invariant","BrowserSupport","CSS","DataStore","DOM","DOMQuery","Focus","Layer","Locale","Parent","React","ReactDOM","ReactTransitionEvents","RTLKeys","Style","SubscriptionsHandler","TabbableElements","Vector","ViewportBounds","cancelAnimationFrame","clearTimeout","ge","getElementPosition","getOverlayZIndex","memoize","renderSubtreeIntoContainer_DO_NOT_USE","requestAnimationFrameAcrossTransitions","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();a=b("React").PropTypes;var j="_1oxh",k="_2r6k",l="_2r6j",m=b("BrowserSupport").hasCSSAnimations(),n="_22uo",o="_6fqy",p=200,q={},r=function(c){"use strict";__p&&__p();babelHelpers.inheritsLoose(a,c);function a(){return c.apply(this,arguments)||this}var d=a.prototype;d.updatePosition=function(){__p&&__p();var a=this.getInsertParent(),c=this.getCausalElement(),d=b("Vector").getElementPosition(c),e=b("Vector").getElementPosition(a);d=d.sub(e);e=b("Vector").getElementDimensions(a).x;b("Locale").isRTL()&&(d.x=e-d.x);e=b("Vector").getViewportDimensions().x;var f=b("Vector").getElementDimensions(this.getContentRoot()).x;d.x=Math.min(d.x,e-f);b("Locale").isRTL()?q.right=d.x+"px":q.left=d.x+"px";q.top=d.y+"px";q.zIndex=this._getZIndex(c,a);e=this.getRoot();e!=null||i(0,4781);b("Style").apply(e,q);return!0};d._getZIndex=function(a,c){__p&&__p();a=b("getOverlayZIndex")(a,c);var d=b("Parent").byClass(c,"fbPhotoSnowliftContainer"),e=d&&b("DOMQuery").scry(d,".stageWrapper")[0];e&&(a=Math.max(a,b("getOverlayZIndex")(e,d)));e=b("ge")("pagelet_sidebar");if(e){d=b("DOMQuery").scry(e,".fbChatSidebar")[0];e=b("DOMQuery").scry(c,"._13pa")[0];d&&e==null&&(a=Math.max(a,parseInt(b("Style").get(d,"z-index"),10)+1))}return a};d.getContentRoot=function(){return this.contentRoot};d._buildWrapper=function(a,c){b("CSS").addClass(c,"_49v-");this.contentRoot=c;a=document.createElement("div");b("CSS").addClass(a,"_1oxj");a.appendChild(c);return a};return a}(b("Layer"));c=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c,d){__p&&__p();var e;e=a.call(this,c,d)||this;e.onTransitionHide=function(){b("ReactTransitionEvents").removeEndEventListener(e.layer.getContentRoot(),e.onTransitionHide),e.finishHide()};e.onTransitionShow=function(){var a=e.layer.getContentRoot();a!=null||i(0,4782);b("ReactTransitionEvents").removeEndEventListener(a,e.onTransitionShow);var c=b("requestAnimationFrameAcrossTransitions")(function(){b("CSS").removeClass(a,l)});e.handler.addSubscriptions({remove:function(){b("cancelAnimationFrame")(c)}})};e.onKeyDown=function(a){__p&&__p();var c=a.keyCode;if(e.props.isScreenReader)return;if(c===b("RTLKeys").ESC||c===b("RTLKeys").RETURN||c===b("RTLKeys").TAB){e.props.onLayerBlur&&e.props.onLayerBlur(a);var d=b("ReactDOM").findDOMNode(e.refs.root),f=b("TabbableElements").find(e.getContextualLayerParent()),g=null,h=[];c=c===b("RTLKeys").TAB&&a.shiftKey;for(var i=0;i<f.length;i++)if(f[i].tabIndex>-1){if(d.compareDocumentPosition(f[i])&4){g=f[i];break}c&&h.push(f[i])}h.length&&(g=h[h.length-1]);g&&(b("Focus").set(g),a.preventDefault(),a.stopPropagation())}};e.getGlobalContainer=b("memoize")(function(){return b("ge")("globalContainer")});e.onParentLayerHide=e.finishHide.bind(babelHelpers.assertThisInitialized(e));return e}var d=c.prototype;d.componentDidMount=function(){var a=b("ReactDOM").findDOMNode(this.refs.root);this.layer=new r({causalElement:a,insertParent:a},document.createElement("div"));b("DOM").appendContent(a,this.layer.getRoot());this.handler=new(b("SubscriptionsHandler"))();this.props.onLayerBlur&&this.handler.addSubscriptions(this.layer.subscribe("blur",this.props.onLayerBlur));this.handler.addSubscriptions(this.layer.subscribe("beforeshow",this.beforeShow.bind(this)),this.layer.subscribe("aftershow",this.afterShow.bind(this)),this.layer.subscribe("starthide",this.startHide.bind(this)));this.isInDocument()&&this.renderLayer()};d.componentDidUpdate=function(a){this.renderLayer()};d.componentWillUnmount=function(){__p&&__p();if(this.layer){var a=this.layer.getContentRoot();b("ReactDOM").unmountComponentAtNode(this.layer.getContentRoot());b("ReactTransitionEvents").removeEndEventListener(a,this.onTransitionHide);b("ReactTransitionEvents").removeEndEventListener(a,this.onTransitionShow);this.handler.release();this.handler=null;this.layer.destroy();this.layer=null}};d.isInDocument=function(){var a=b("ReactDOM").findDOMNode(this.refs.root);return a&&document.body.contains(a)};d.afterShow=function(){__p&&__p();var a=this;b("CSS").removeClass(this.refs.root,"accessible_elem");var c=this.layer.getContentRoot();c!=null||i(0,4783);var d=b("getElementPosition")(c).y,e=b("ViewportBounds").getTop();b("CSS").conditionClass(c,j,d&&d<e);if(m){b("ReactTransitionEvents").addEndEventListener(c,this.onTransitionShow);b("CSS").addClass(c,n);b("CSS").addClass(c,o);b("CSS").addClass(c,l);var f=b("setTimeoutAcrossTransitions")(function(){a.props.setAnimatingDock(!1),b("CSS").removeClass(c,o)},p);this.handler.addSubscriptions({remove:function(){b("clearTimeout")(f)}})}d=b("TabbableElements").find(c)[0];d&&d.focus()};d.beforeShow=function(){m&&this.props.setAnimatingDock(!0);var a=this.getContextualLayerParent();this.props.isScreenReader?this.layer.setInsertParent(this.layer.getCausalElement()):a!==this.layer.getInsertParent()&&(this.layer.setInsertParent(a),this.setParentLayerSubscription(a))};d.setParentLayerSubscription=function(a){__p&&__p();if(a!==this.getGlobalContainer()){this.parentLayerSubscription&&this.parentLayerSubscription.unsubscribe();this.parentLayer=null;return}a=a;var c=null;while(a!==null){c=b("DataStore").get(a,"layer");if(c)break;a=a.parentNode}if(c&&c!==this.parentLayer){this.parentLayerSubscription&&this.parentLayerSubscription.unsubscribe();a=c.subscribe("hide",this.onParentLayerHide);this.handler.addSubscriptions(a);this.parentLayerSubscription=a;this.parentLayer=c}};d.startHide=function(){if(m&&this.isInDocument()){var a=this.layer.getContentRoot();a!=null||i(0,4784);b("ReactTransitionEvents").addEndEventListener(a,this.onTransitionHide);b("CSS").addClass(a,k)}else this.finishHide();return!1};d.finishHide=function(){b("CSS").addClass(this.refs.root,"accessible_elem");var a=this.layer.getContentRoot();a!=null||i(0,4785);m&&(b("CSS").removeClass(a,j),b("CSS").removeClass(a,k),b("CSS").removeClass(a,n));this.layer.setInsertParent(this.layer.getCausalElement());this.layer.finishHide()};d.getContextualLayerParent=function(){var a=b("ReactDOM").findDOMNode(this.refs.root);if(a instanceof Element){a=b("Parent").byClass(a,"uiContextualLayerParent");if(a instanceof HTMLElement)return a}return document.body};d.renderLayer=function(){var a=this;b("renderSubtreeIntoContainer_DO_NOT_USE")(this,b("React").createElement("div",babelHelpers["extends"]({},this.props,{className:"_1oxk",onKeyDown:this.onKeyDown}),this.props.children,b("React").createElement("div",{className:"_41nt"+(this.props.isDarkBackground?" _3_jc":"")+(this.props.semiTransparentBackground?" _6la8":"")+(this.props.noBackground?" hidden_elem":""),style:{height:this.props.height}})),this.layer.getContentRoot(),function(){a.layer&&a.layer.conditionShow(a.props.shown),a.props.onLayerRender&&a.props.onLayerRender()})};d.render=function(){return b("React").createElement("div",{className:"_2r6l accessible_elem",ref:"root"})};return c}(b("React").Component);c.propTypes={shown:a.bool,isScreenReader:a.bool,onLayerRender:a.func};e.exports=c}),null);
__d("UFIReactionsMenuImpl.react",["cx","fbt","Event","React","ReactDOM","RTLKeys","SubscriptionsHandler","UFIConfig","UFIReactionIconImpl.react","UFIReactionsDialogLayerImpl.react","UFIReactionTypes","addFocusEvents","getVendorPrefixedName","gkx","joinClasses","shallowCompare"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i=8,j=96,k=48,l=44,m=39,n=b("UFIReactionTypes").reactions;b("getVendorPrefixedName")("transform");var o=h._("Reactions"),p=b("addFocusEvents")("span");a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c,d){__p&&__p();var e;e=a.call(this)||this;e.$2=function(){e.subscriptionsHandler!=null&&(e.subscriptionsHandler.release(),e.subscriptionsHandler=null)};e.focusSelected=function(){var a=b("ReactDOM").findDOMNode(e.refs[e.state.selectedIndex]);a&&a.focus()};e.onLayerRender=function(){e.state.hasKeyboardFocus&&e.focusSelected()};e.onKeyDown=function(a){switch(a.keyCode){case b("RTLKeys").RETURN:a.preventDefault();var c=e.state.supportedReactions[e.state.selectedIndex];e.props.initialReaction===c&&(c=b("UFIReactionTypes").NONE);c!==null&&c!==void 0&&e.props.onReactionClick&&e.props.onReactionClick(c,a);break;case b("RTLKeys").getLeft():case b("RTLKeys").getRight():a.preventDefault();e.setState({selectedIndex:Math.max(0,Math.min(e.state.selectedIndex+(a.keyCode===b("RTLKeys").getLeft()?-1:1),e.state.supportedReactions.length-1))},e.focusSelected);break}};e.setAnimatingDock=function(a){e.setState({isAnimatingDock:a})};d=c.supportedReactions.filter(function(a){return n[a]});var f=c.allowKeyboardFocus?Math.max(0,d.indexOf(c.initialReaction)):-1;e.state={hasKeyboardFocus:c.allowKeyboardFocus,isAnimatingDock:!1,prevPropsShown:c.shown,shouldRenderMenu:c.shown,selectedIndex:f,supportedReactions:d};e.hasAnimatedIcons=b("UFIConfig").reactionsHasAnimatedIcons;e.animatedIconsUsePackage=b("UFIConfig").reactionsAnimatedIconsUsePackage||!1;return e}c.getDerivedStateFromProps=function(a,b){if(!b.shouldRenderMenu&&a.shown)return{shouldRenderMenu:!0,prevPropsShown:a.shown,supportedReactions:a.supportedReactions.filter(function(a){return n[a]})};return!a.shown&&b.prevPropsShown?{hasKeyboardFocus:a.allowKeyboardFocus,selectedIndex:-1,prevPropsShown:a.shown,supportedReactions:a.supportedReactions.filter(function(a){return n[a]})}:{supportedReactions:a.supportedReactions.filter(function(a){return n[a]}),prevPropsShown:a.shown}};var d=c.prototype;d.componentDidMount=function(){this.props.allowKeyboardFocus&&this.focusSelected(),this.props.isLongPressing&&this.$1()};d.componentWillUnmount=function(){this.$2()};d.componentDidUpdate=function(a,b){this.props.allowKeyboardFocus&&!a.allowKeyboardFocus&&this.focusSelected(),this.props.isLongPressing&&!a.isLongPressing?this.$1():!this.props.isLongPressing&&a.isLongPressing&&this.$2()};d.$1=function(){__p&&__p();var a=this,c;this.$2();this.subscriptionsHandler=new(b("SubscriptionsHandler"))();this.subscriptionsHandler.addSubscriptions(b("Event").listen(document.documentElement,"touchmove",function(b){b.preventDefault();var d=b.touches[0];d=document.elementFromPoint(d.clientX,d.clientY);!d.getAttribute("data-reaction")&&d.parentElement&&(d=d.parentElement);d=parseInt(d.getAttribute("data-reaction"),10)||null;d!==c&&(c&&a.onReactionMouseLeave(c,b),d&&a.onReactionMouseEnter(d,b),c=d)}),b("Event").listen(document.documentElement,"mousemove",function(d){if(b("gkx")("893099")){var e=document.elementFromPoint(d.clientX,d.clientY);if(e!=null){!e.getAttribute("data-reaction")&&e.parentElement&&(e=e.parentElement);e=parseInt(e.getAttribute("data-reaction"),10)||null;e!==c&&(c&&a.onReactionMouseLeave(c,d),e&&a.onReactionMouseEnter(e,d),c=e)}}}),b("Event").listen(document.documentElement,"touchcancel",this.$2),b("Event").listen(document.documentElement,"touchend",function(b){a.$2(),c&&a.onReactionClick(c,b)}),b("Event").listen(document.documentElement,"mouseup",function(d){b("gkx")("893099")&&(a.$2(),c&&a.props.shown&&a.onReactionClick(c,d))}))};d.shouldComponentUpdate=function(a,c){return b("shallowCompare")(this,a,c)};d.onDragStart=function(a){a.preventDefault()};d.onKeyboardFocus=function(a,b){this.setState({hasKeyboardFocus:!0,selectedIndex:a}),this.props.onFocus&&this.props.onFocus(b)};d.onReactionClick=function(a,b,c,d){c===void 0;d===void 0;b.preventDefault();if(!this.state.isAnimatingDock){var e;this.props.onReactionClick&&(e=this.props).onReactionClick.apply(e,arguments)}};d.onReactionMouseEnter=function(a,b){this.setState({selectedIndex:this.props.supportedReactions.indexOf(a)}),this.props.onReactionMouseEnter&&this.props.onReactionMouseEnter(a)};d.onReactionMouseLeave=function(a,b){this.setState({selectedIndex:-1}),this.props.onReactionMouseLeave&&this.props.onReactionMouseLeave(a)};d.render=function(){__p&&__p();var a=this,c=this.state.supportedReactions.length;(c*k-j)/(c-1);var d=this.state.selectedIndex;c=this.state.supportedReactions.map(function(c,e){var f=n[c].display_name,g=a.onReactionClick.bind(a,c),h=Math.max(0,a.state.supportedReactions.indexOf(a.props.initialReaction))===e,i=a.props.icon,j=a.hasAnimatedIcons&&i&&i.supportsReaction&&i.supportsReaction(c);if(j){d===e;var k=a.props.allowAnimationPlayback&&a.props.shown;i=b("React").createElement(i,{animate:k,className:"_1ef0",selectedIndex:a.state.selectedIndex,maxSize:m,reactionID:c,usePackage:a.animatedIconsUsePackage})}else i=b("React").createElement(b("UFIReactionIconImpl.react"),{className:"_2jry",reaction:c,size:"48"});return b("React").createElement(p,{"aria-pressed":a.props.initialReaction===c,"aria-label":f,className:"_iuw"+(d===e?" _iuy":""),"data-testid":"reaction_"+(a.state.isAnimatingDock?"animating_":"")+c,href:"#",key:"reaction_"+c,onClick:g,onDragStart:a.onDragStart,onKeyboardFocus:a.onKeyboardFocus.bind(a,e),onMouseUp:a.props.onReactionMouseUp,onMouseDown:a.props.onReactionMouseDown,onMouseEnter:a.onReactionMouseEnter.bind(a,c),onMouseLeave:a.onReactionMouseLeave.bind(a,c),onTouchStart:a.onDragStart,onTouchEnd:g,ref:e,role:"button",tabIndex:h&&(!a.props.shown||d===e)?0:-1},b("React").createElement("div",{className:"_39m"+(j?" _1ef2":""),"data-reaction":c},b("React").createElement("div",{className:"_39n"},i,b("React").createElement("div",{className:"_d6l"},b("React").createElement("div",{className:"_4sm1"},f)))))});return!this.state.shouldRenderMenu?null:b("React").createElement(b("UFIReactionsDialogLayerImpl.react"),{height:l+i,setAnimatingDock:this.setAnimatingDock,isDarkBackground:this.props.isDarkBackground,isScreenReader:this.props.isScreenReader,onLayerBlur:this.props.onBlur,onLayerRender:this.onLayerRender,onMouseEnter:this.props.onMouseEnter,onMouseLeave:this.props.onMouseLeave,noBackground:this.props.noBackground,semiTransparentBackground:this.props.semiTransparentBackground,shown:this.props.shown},b("React").createElement("div",{className:b("joinClasses")("_iu-"+(this.state.hasKeyboardFocus?" _5wkt":"")+" _628b",this.props.className),"data-testid":"UFIReactionsMenu"+(this.state.isAnimatingDock?"_animating":""),onKeyDown:this.onKeyDown,"aria-label":o,ref:"root",role:"toolbar"},c))};return c}(b("React").Component);e.exports=a}),null);
__d("KeyframesLoop",["Run","TimeSlice","emptyFunction","performanceNow","requestAnimationFramePolyfill"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=1e3,h=new Set();function i(a){var c=b("performanceNow")();a.callback(Math.min(c-(a.previousTime||c),g));a.previousTime=c;a.framesRemaining-=1;a.framesRemaining<=0&&a.cancel()}function j(a){h.size>0&&(h.forEach(i),b("requestAnimationFramePolyfill")(j))}b("Run").onLeave(function(){h.forEach(function(a){return a.cancel()})});window.addEventListener("focus",function(){h.forEach(function(a){return a.previousTime=b("performanceNow")()-16.67})});a=function(){__p&&__p();function a(a){this.framesRemaining=Infinity,this.callback=a,this.previousTime=0}var c=a.prototype;c.start=function(a){a===void 0&&(a=Infinity),this.framesRemaining=a,this.$1||(h.size===0&&b("requestAnimationFramePolyfill")(j),h.add(this),this.previousTime=b("performanceNow")(),this.$1=b("TimeSlice").getGuardedContinuation("KeyframesLoop"))};c.cancel=function(){this.$1&&(this.$1(b("emptyFunction")),this.$1=null,h["delete"](this))};c.isRunning=function(){return!!this.$1};return a}();e.exports=a}),null);
__d("UFIReactionsMenuWithAnimatedIcons.react",["cx","KeyframesEnvironment","React","UFIReactionsAnimatedKeyframesIcon.react","UFIReactionsMenuImpl.react","createCancelableFunction","joinClasses","promiseDone"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={allowAnimationPlayback:b("KeyframesEnvironment").hasRenderLoopBeenStableOnce()},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentDidMount=function(){var a=this;this.state.allowAnimationPlayback||(this.$1=b("createCancelableFunction")(function(){a.setState({allowAnimationPlayback:!0})}),b("promiseDone")(b("KeyframesEnvironment").whenRenderLoopHasBeenStableOnce(),this.$1))};d.componentWillUnmount=function(){this.$1&&(this.$1.cancel(),this.$1=null)};d.render=function(){var a=b("joinClasses")("_1ef3",this.props.className);return b("React").createElement(b("UFIReactionsMenuImpl.react"),babelHelpers["extends"]({allowAnimationPlayback:this.state.allowAnimationPlayback},this.props,{className:a,icon:b("UFIReactionsAnimatedKeyframesIcon.react")}),this.props.children)};return c}(b("React").PureComponent);e.exports=a}),null);