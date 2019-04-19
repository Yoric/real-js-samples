if (self.CavalryLogger) { CavalryLogger.start_js(["\/HBuK"]); }

__d("StickyAreaType",["keyMirror"],(function(a,b,c,d,e,f){a=b("keyMirror")({TOP:null,BOTTOM:null});e.exports=a}),null);
__d("AdsStickyArea.react",["cx","Event","FBLogger","Parent","React","ReactDOM","StickyAreaType","Style","SubscriptionsHandler","UserAgent","Vector","debounce","isAdsManagerAdsPreviewScrollFixEnabled.gkx","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("React").PropTypes;var h=10,i=12;c=12;d=12;var j=.001;f=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$11=function(a){__p&&__p();a.deliberateSync=!0;if(d.$1&&d.$7){var b=d.$7,c=b.scrollHeight,e=b.clientHeight;if(e!==c){b=b.scrollTop+a.deltaY;if(b>=0&&b+e<=c)return}b=d.$6;b&&(b.scrollTop+=a.deltaY,d.$5&&d.$5(),a.preventDefault())}},d.reflow=function(){__p&&__p();if(d.$10())return;var a=d.$6,c=d.$3,e=d.$7,f=d.$2;if(!a||!e||!c||!f)return;if(d.$13()){d.$17(a,c,e);return}d.$14();var g=e.getBoundingClientRect(),h=g.height,i=g.width;if(a===window){d.$15();return}var j=a.getBoundingClientRect(),k=j.top,l=j.bottom,m=j.left;j=j.height;var n=b("Vector").getElementPosition(d.$3,"viewport"),o=d.props,p=o.topOffset;o=o.bottomOffset;if(d.$18(a,e)){d.$15();return}e.style.position="fixed";e.style.maxHeight=j-(d.$19()?p:o)+"px";c.style.minWidth=i+"px";d.props.zIndex&&(e.style.zIndex=d.props.zIndex.toString());d.props.canOverflow&&(e.style.overflowY="auto");e.style.width=i+"px";a=d.props.topHeaderOffset||0;d.$19()?j=d.props.inContainingBlock?p+a:p+k:j=l-o-h;e.style.top=j+"px";f.style.height=h+"px";if(d.props.inContainingBlock){c=d.props.inContainingBlock?n.x-m:n.x;e.style.left=c+"px"}e.className=b("joinClasses")(d.props.stickyClassName,"_2712");d.$1=!0;d.$16(j,g.height)},d.$20=function(a){__p&&__p();if(a){if(d.props.findParentByScrollableClassSelector){var c=b("Parent").bySelector(a,d.props.findParentByScrollableClassSelector);d.$6=c instanceof HTMLElement?c:null}else d.$6=b("Style").getScrollParent(a);d.$3=a;d.$6===window&&b("FBLogger")("ads").warn("AdsStickyArea was not provided a scroll container.  Consider using StickyArea when you want to stick to the window.")}else d.$6=null,d.$3=null},d.$21=function(a){d.$7=a},d.$22=function(a){d.$2=a},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentDidMount=function(){__p&&__p();if(this.$10())return;if(this.$7&&this.$6){var a=this.props.optimizePerf?b("debounce")(this.reflow,h):this.reflow;this.$4=this.props.attachTo?b("ReactDOM").findDOMNode(this.props.attachTo):null;var c=new(b("SubscriptionsHandler"))();b("isAdsManagerAdsPreviewScrollFixEnabled.gkx")()?c.addSubscriptions.apply(c,[b("Event").listen(this.$6,"scroll",a),b("Event").listen(this.$6,"resize",a),b("Event").listen(window,"scroll",a),b("Event").listen(window,"resize",a),b("Event").listen(this.$7,"wheel",this.$11)].concat(this.props.stretchedSticky?[]:[b("Event").listen(this.$7,"scroll",a),b("Event").listen(this.$7,"resize",a)])):c.addSubscriptions(b("Event").listen(this.$6,"scroll",a),b("Event").listen(this.$6,"resize",a),b("Event").listen(this.$7,"scroll",a),b("Event").listen(this.$7,"resize",a),b("Event").listen(window,"scroll",a),b("Event").listen(window,"resize",a),b("Event").listen(this.$7,"wheel",this.$11));this.$4&&c.addSubscriptions(b("Event").listen(this.$4,"resize",a));this.$8=c;this.$5=a;this.$12()}};d.$12=function(){if(this.$13()){var a=this.$7,b=this.$3;a&&b&&(b.style.minWidth=a.getBoundingClientRect().width+"px",a.style.position="absolute",a.style.top="0px",a.style.bottom="0px",a.style.overflowY=this.props.canOverflow?"auto":"hidden")}};d.$13=function(){return!!(b("isAdsManagerAdsPreviewScrollFixEnabled.gkx")()&&this.props.stretchedSticky===!0&&this.$7&&this.$6&&this.$3)};d.componentDidUpdate=function(a){a=a.canOverflow;this.$13()&&this.$7&&this.props.canOverflow!==a&&(this.$7.style.overflowY=this.props.canOverflow?"auto":"hidden")};d.componentWillUnmount=function(){if(this.$10())return;this.$8&&this.$8.release()};d.$14=function(){__p&&__p();if(!this.$7||!this.$2)return;this.$7.style.position="";this.$7.style.top="";this.$7.style.bottom="";this.$7.style.left="";this.$7.style.width="";this.$7.style.clip="";this.$7.style.zIndex="";this.$2.style.height=""};d.$15=function(){var a=this.$7;if(!a)return;a.style.maxHeight="";a.style.overflowY="";a.className="_271b";this.$1=!1;this.$14()};d.$16=function(a,c){__p&&__p();var d=this.$7;if(!this.$4||!d)return;var e=b("Vector").getElementPosition(this.$4,"viewport"),f=b("Vector").getElementDimensions(this.$4);if(c+a>e.y+f.y){this.$15();if(b("isAdsManagerAdsPreviewScrollFixEnabled.gkx")()&&f.y>c)d.style.position="absolute",d.style.bottom="0px";else{a=f.y-c;d.style.position="absolute";d.style.top=a+"px"}}};d.$17=function(a,b,c){a=a.getBoundingClientRect();b=b.getBoundingClientRect();a=a.top-b.top;c.style.top=(a>0?a:0)+"px"};d.$18=function(a,b){__p&&__p();b=b.getBoundingClientRect();var c=b.height,d=b.top;b=b.bottom;var e=a.getBoundingClientRect(),f=a.scrollHeight;a=a.scrollTop;var g=e.top;e=e.bottom;var h=this.props,k=h.topOffset;h=h.bottomOffset;if(this.$19())return d-k>g||f<=a+(d-g)+c+i;else return b+h<=e+j};d.$19=function(){return this.props.type===b("StickyAreaType").TOP};d.render=function(){__p&&__p();if(this.$10())return b("React").createElement("div",null,this.props.children);var a=babelHelpers["extends"]({},this.props);delete a.attachTo;delete a.bottomOffset;delete a.canOverflow;delete a.inContainingBlock;delete a.optimizePerf;delete a.shouldDoNothingInIE;delete a.topHeaderOffset;delete a.topOffset;delete a.type;delete a.zIndex;return b("React").createElement(b("React").Fragment,null,b("React").createElement("div",babelHelpers["extends"]({},a,{ref:this.$20}),b("React").createElement("div",{ref:this.$21},this.props.children)),b("React").createElement("div",{ref:this.$22}))};d.$23=function(){this.$9==null&&(this.$9=b("UserAgent").isBrowser("IE"));return this.$9};d.$10=function(){return!!this.props.shouldDoNothingInIE&&this.$23()};return c}(b("React").Component);f.defaultProps={canOverflow:!0,optimizePerf:!0,shouldDoNothingInIE:!1,topOffset:d,bottomOffset:c,type:b("StickyAreaType").TOP,stretchedSticky:!1};f.propTypes={attachTo:a.object,bottomOffset:a.number,canOverflow:a.bool,children:a.oneOfType([a.node,a.element,a.arrayOf(a.element)]),inContainingBlock:a.bool,optimizePerf:a.bool,shouldDoNothingInIE:a.bool,stickyClassName:a.string,topHeaderOffset:a.number,topOffset:a.number,zIndex:a.number};e.exports=f}),null);
__d("AdsCallToActionValueFieldLabels",["fbt","CallToActionValueFields","immutable"],(function(a,b,c,d,e,f,g){"use strict";c=b("immutable").fromJS((a={},a[b("CallToActionValueFields").APP_LINK]=g._("Deep Link"),a[b("CallToActionValueFields").EVENT_ID]=g._("Event"),a[b("CallToActionValueFields").LINK]=g._("Website URL"),a[b("CallToActionValueFields").LINK_DESCRIPTION]=g._("Link description"),a[b("CallToActionValueFields").LINK_TITLE]=g._("Headline"),a));e.exports=c}),null);
__d("AdsObjectStorySpecFieldLabels",["fbt","AdImageSpecCropKeys","AdsCallToActionValueFieldLabels","ApiCallToActionFields","ApiObjectStorySpecLinkFields","ApiObjectStorySpecVideoFields","immutable"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b){return g._("Image crop ({width} x {height})",[g._param("width",a),g._param("height",b)])}d=b("immutable").fromJS((c={},c[b("ApiObjectStorySpecLinkFields").ATTACHMENT_STYLE]="",c[b("ApiObjectStorySpecLinkFields").CALL_TO_ACTION]=(d={},d[b("ApiCallToActionFields").TYPE]=g._("Call to action"),d[b("ApiCallToActionFields").VALUE]=b("AdsCallToActionValueFieldLabels"),d),c[b("ApiObjectStorySpecVideoFields").CAPTION_IDS]=g._("Video Captions"),c[b("ApiObjectStorySpecLinkFields").CHILD_ATTACHMENTS]=g._("Carousel card"),c[b("ApiObjectStorySpecLinkFields").CAPTION]=g._("Display link"),c[b("ApiObjectStorySpecLinkFields").DESCRIPTION]=g._("Link description"),c[b("ApiObjectStorySpecLinkFields").EVENT_ID]=g._("Event"),c[b("ApiObjectStorySpecLinkFields").IMAGE_CROPS]=(f={},f[b("AdImageSpecCropKeys")["100x100"]]=a(100,100),f[b("AdImageSpecCropKeys")["191x100"]]=a(191,100),f[b("AdImageSpecCropKeys")["400x150"]]=a(400,150),f),c[b("ApiObjectStorySpecLinkFields").IMAGE_HASH]=g._("Image"),c[b("ApiObjectStorySpecVideoFields").IMAGE_URL]=g._("Image"),c[b("ApiObjectStorySpecLinkFields").LINK]=g._("Website URL"),c[b("ApiObjectStorySpecLinkFields").MESSAGE]=g._("Text"),c[b("ApiObjectStorySpecLinkFields").MULTI_SHARE_END_CARD]=g._("Add a card at the end with your Page profile picture"),c[b("ApiObjectStorySpecLinkFields").MULTI_SHARE_OPTIMIZED]=g._("Automatically show the best-performing cards first"),c[b("ApiObjectStorySpecLinkFields").NAME]=g._("Headline"),c[b("ApiObjectStorySpecVideoFields").VIDEO_ID]=g._("Video"),c));e.exports=d}),null);
__d("NoIframeResponsiveBlock.react",["cx","Event","React","UserAgent","joinClasses","throttle"],(function(a,b,c,d,e,f,g){__p&&__p();var h=b("UserAgent").isBrowser("IE")&&"onresize"in document.createElement("div"),i=window.ResizeObserver!=void 0,j=window.MutationObserver!=void 0,k={attributes:!0,characterData:!0,childList:!0,subtree:!0},l=["top","right","bottom","left","width","height","size","weight"],m=20;c=function(c){"use strict";__p&&__p();babelHelpers.inheritsLoose(d,c);function d(){__p&&__p();var d,e;for(var f=arguments.length,g=new Array(f),n=0;n<f;n++)g[n]=arguments[n];return(d=e=c.call.apply(c,[this].concat(g))||this,e.$1=null,e.$4=null,e.$5=b("throttle")(function(){var a=!1;if(e.$1!=null){var b=e.$1.style,c={boxSizing:b.boxSizing,paddingTop:b.paddingTop,paddingLeft:b.paddingLeft,paddingBottom:b.paddingBottom,paddingRight:b.paddingRight,borderTop:b.borderTop,borderLeft:b.borderLeft,borderBottom:b.borderBottom,borderRight:b.borderRight,marginTop:b.marginTop,marginLeft:b.marginLeft,marginBottom:b.marginBottom,marginRight:b.marginRight,width:b.width,height:b.height},d=e.$4;d!=null?Object.keys(c).map(function(b){c[b]!=d[b]&&(a=!0)}):a=!0;e.$4=c;a&&e.props.onResize(+c.width,+c.height)}},m),e.$6=function(a){e.$1=a},e.$7=function(a){var b=a.propertyName;if(b){a=!1;l.forEach(function(c){b.indexOf(c)!==-1&&(a=!0)});a&&e.$5()}else e.$5()},e.$8=function(c){c?(h?c.onresize=e.$5:i?(e.$2=new ResizeObserver(e.$5),e.$2.observe(c)):(document.addEventListener("transitionend",e.$7),window.addEventListener("resize",e.$5),j?(b("Event").listen(window,"resize",e.$5),e.$3=new a.MutationObserver(e.$5),e.$3.observe(c,k)):document.addEventListener("DOMSubtreeModified",e.$5)),e.$5()):h||(i?(e.$2&&e.$2.disconnect(),delete e.$2):(document.removeEventListener("transitionend",e.$5),window.removeEventListener("resize",e.$5),j?(e.$3&&e.$3.disconnect(),delete e.$3):document.removeEventListener("DOMSubtreeModified",e.$5)))},d)||babelHelpers.assertThisInitialized(e)}var e=d.prototype;e.componentDidMount=function(){this.$5()};e.render=function(){var a=b("joinClasses")("_4u-c",this.props.className);return b("React").createElement("div",babelHelpers["extends"]({},this.props,{className:a,ref:this.$6}),this.props.children,b("React").createElement("div",{key:"sensor",ref:this.$8,className:"_4u-f"}))};return d}(b("React").Component);e.exports=c}),null);
__d("AdsAPIAccountStatus",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ACTIVE:1,DISABLED:2,UNSETTLED:3,PENDING_RISK_REVIEW:7,PENDING_SETTLEMENT:8,IN_GRACE_PERIOD:9,PENDING_CLOSURE:100,CLOSED:101})}),null);