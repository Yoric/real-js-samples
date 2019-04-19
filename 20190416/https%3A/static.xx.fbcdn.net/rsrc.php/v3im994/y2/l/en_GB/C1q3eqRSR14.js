if (self.CavalryLogger) { CavalryLogger.start_js(["hj3or"]); }

__d("AdsMultiSelectableRow.react",["cx","React","XUICheckboxInput.react","XUIRadioInput.react"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("React").PropTypes;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={isMouseHovered:!1},c.$1=function(){c.setState({isMouseHovered:!0})},c.$2=function(){c.setState({isMouseHovered:!1})},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.render=function(){var a=this.props.isItemError;return b("React").createElement("li",{className:this.props.itemClassName,onClick:this.props.onClickHandler},b("React").createElement("div",{className:"_5r_x"+(a?"":" _3wyh")+(a?" _3wyi":""),onMouseEnter:this.$1,onMouseLeave:this.$2},this.props.selectType==="single"?b("React").createElement(b("XUIRadioInput.react"),{checked:this.props.isItemSelected,className:"_5r_y",disabled:this.props.isDisabled,onChange:this.props.onChangeHandler}):b("React").createElement(b("XUICheckboxInput.react"),{checked:this.props.isItemSelected,className:"_5r_y",disabled:this.props.isDisabled,onChange:this.props.onChangeHandler})),b("React").createElement("div",{className:"_5r_z"+(a?"":" _3wyh")+(a?" _3wyi":""),onMouseEnter:this.$1,onMouseLeave:this.$2},b("React").createElement("div",{className:"_5r_-"},this.props.renderItemBody(this.props.item,this.props.isItemSelected,this.state.isMouseHovered))))};return c}(b("React").Component);c.propTypes={isDisabled:a.bool,isItemError:a.bool,isItemSelected:a.bool,item:a.object,itemClassName:a.string,renderItemBody:a.func.isRequired,selectType:a.oneOf(["single","multi"]),onChangeHandler:a.func.isRequired,onClickHandler:a.func.isRequired};e.exports=c}),null);
__d("BUIAdoptionTooltip.react",["BIGAdoptionConfig","BUIAdoptionWrapper.react","React","SUIBusinessTheme","SUITooltip.react","Tooltip.react"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$2=function(){return b("React").createElement(b("SUITooltip.react"),babelHelpers["extends"]({},d.props,{theme:b("SUIBusinessTheme")}))},d.$1=function(){var a=d.props,c=a.children,e=a.tooltip,f=a.position,g=a.alignment;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","tooltip","position","alignment"]);return b("React").createElement(b("Tooltip.react"),babelHelpers["extends"]({},a,{tooltip:e,position:f,alignH:g}),c)},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){return b("React").createElement(b("BUIAdoptionWrapper.react"),{enabled:b("BIGAdoptionConfig").sui_tooltip_adoption,renderFallback:this.$1,renderAdoption:this.$2})};return c}(b("React").PureComponent);a.defaultProps=b("SUITooltip.react").defaultProps;a.propTypes=b("SUITooltip.react").propTypes;e.exports=a}),null);
__d("AdsMultiSelectableList.react",["cx","fbt","invariant","AdsMultiSelectableRow.react","Animation","BUIAdoptionTooltip.react","FDSSpinner.react","InlineBlock.react","LeftRight.react","List.react","OnVisible.react","React","ReactDOM","XUICheckboxInput.react","joinClasses","objectValues"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();a=b("React").PropTypes;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c){__p&&__p();var d;d=a.call(this,c)||this;d.$1=null;d.isAllItemsSelected=function(){return d.props.items.length===d.getTotalSelectedItems()&&d.props.items.length!==0};d.getTotalSelectedItems=function(){return Object.keys(d.state.selectedItems).length};d.getDefaultNoResultsView=function(){return b("React").createElement("div",null,h._("No assets matched your search. Please try again"))};d.$3=function(a){return!d.props.isItemDisabledByID?!1:!!d.props.isItemDisabledByID[a]};d.$4=function(a,c){return b("React").createElement(b("LeftRight.react"),{className:"_5r_t"},b("React").createElement(b("InlineBlock.react"),null,b("React").createElement("span",{className:"_5r_u"},d.props.listTitle),h._("({Number of items.})",[h._param("Number of items.",c)])),b("React").createElement(b("InlineBlock.react"),null,h._("Total selected {Number of items selected.}",[h._param("Number of items selected.",a)])))};d.$5=function(){if(d.props.items.length===0){var a;d.props.fetchErrorText?a=d.props.fetchErrorText:d.props.noResultsView!==void 0?a=d.props.noResultsView:a=d.getDefaultNoResultsView();return b("React").createElement("div",{className:"_5r_v"},b("React").createElement("div",null,a))}a={};d.props.bodyHeight&&d.props.bodyHeight>48&&(a.height=d.props.bodyHeight+"px");return b("React").createElement(b("List.react"),{border:"none",className:"_5r_w","data-testid":"AdsMultiSelectableList_Inner",edgepadding:!1,ref:"list",spacing:"none",style:a},d.$6(),d.$7())};d.$6=function(){var a=[],c=d.props.paging?d.props.paging.from:0,e=Math.min(d.props.items.length,d.props.paging?d.props.paging.to:d.props.items.length),f=function(c){var e=d.props.items[c],f=d.props.getItemKey(e),g=d.$8(f),h=d.props.renderError?!!d.props.renderError(e):!1;a.push(b("React").createElement(b("AdsMultiSelectableRow.react"),{isDisabled:d.$3(f),isItemError:h,isItemSelected:g,item:e,itemClassName:d.$9(f,c,h),key:f,ref:f,renderItemBody:d.props.renderItemBody,selectType:d.props.selectType,onChangeHandler:function(){return d.$10(e)},onClickHandler:function(){return d.$10(e)}}))};for(var c=c;c<e;c++)f(c);return a};d.$7=function(){if(d.props.onLoadMore&&d.props.items.length!==d.props.itemCount)return b("React").createElement(b("OnVisible.react"),{buffer:10,key:d.props.items.length,onVisible:d.props.onLoadMore},b("React").createElement("div",{className:"_10ut"},b("React").createElement(b("FDSSpinner.react"),null)))};d.$9=function(a,b,c){a=d.$8(a);return"_5r__"+(c?"":" _3wyh")+(c?" _3wyi":"")+(b%2===0?" _5s00":"")+(b%2!==0?" _5s01":"")+(a?" _5s02":"")+(a&&!c?" _5yga":"")+(a&&c?" _5ygb":"")};d.$8=function(a){return Object.prototype.hasOwnProperty.call(d.state.selectedItems,a)};d.$10=function(a){var b=d.state.selectedItems,c=d.props.getItemKey(a);if(d.$3(c))return;var e=d.$8(c),f=d.props.selectType==="single";if(f){b=(f={},f[c]=a,f)}else e?delete b[c]:b[c]=a;d.$11(babelHelpers["extends"]({},b))};d.onSelectAllChange=function(){var a=d.state.selectedItems,b=!d.isAllItemsSelected();d.props.items.forEach(function(c){var e=d.props.getItemKey(c);if(d.$3(e))return;b?a[e]=c:delete a[e]});d.$11(babelHelpers["extends"]({},a))};d.$11=function(a){d.setState({selectedItems:a});var c=d.props.onSelectionChange;c&&c(b("objectValues")(a))};d.$2=function(a){a=d.refs[a];if(a){a=a.offsetTop;d.$1&&d.$1.stop();var c=b("ReactDOM").findDOMNode(d.refs.list);d.$1=new(b("Animation"))(c).to("scrollTop",a).ease(b("Animation").ease.end).duration(250).go()}};var e=c.initialSelectedItems||c.selectedItems,f={};if(e){if(c.initialSelectedItems&&c.selectedItems)throw new Error("AdsMultiSelectableList can have selectedItems or initialSelectedItems, but not both.");e.forEach(function(a){f[a.id]=a})}d.state={selectedItems:f};return d}var d=c.prototype;d.UNSAFE_componentWillMount=function(){this.props.scrollToItemID&&i(0,5969)};d.UNSAFE_componentWillReceiveProps=function(a){if(a.selectedItems){var b={};a.selectedItems.forEach(function(a,c,d){b[a.id]=a});this.setState({selectedItems:b})}a.scrollToItemID&&this.$2(a.scrollToItemID)};d.render=function(){var a=this.props.selectType==="single";a="_5r_q"+(a?" _1j5-":"")+(this.props.isNarrowStyle?" _43rn":"");var c=this.props.renderTopBar||this.$4,d=this.props.itemCount&&this.props.items.length!==this.props.itemCount||this.props.itemCount===0,e=d?h._("Please scroll to the bottom of the list to enable this checkbox."):"";return b("React").createElement("div",{className:b("joinClasses")(this.props.className,a),"data-testid":this.props["data-testid"]},b("React").createElement("div",{className:"_5r_r"},b("React").createElement("div",{className:"_5r_s"},c(this.getTotalSelectedItems(),this.props.itemCount||this.props.items.length)),this.props.selectType==="single"?null:b("React").createElement(b("BUIAdoptionTooltip.react"),{tooltip:e},b("React").createElement("div",{className:"_5r_o"},b("React").createElement(b("XUICheckboxInput.react"),{checked:this.isAllItemsSelected(),className:"_5r_p",disabled:d,onChange:this.onSelectAllChange})))),this.$5())};return c}(b("React").Component);c.propTypes={items:a.array.isRequired,itemCount:a.number,getItemKey:a.func.isRequired,renderItemBody:a.func.isRequired,listTitle:a.string.isRequired,onSelectionChange:a.func,isItemDisabledByID:a.object,selectType:a.oneOf(["single","multi"]),initialSelectedItems:a.array,selectedItems:a.array,paging:a.object,renderError:a.func,noResultsView:a.object,fetchErrorText:a.string,renderTopBar:a.func,onLoadMore:a.func,scrollToItemID:a.string,isNarrowStyle:a.bool,bodyHeight:a.number};c.defaultProps={isNarrowStyle:!1,isItemDisabledByID:null,selectType:"multi"};e.exports=c}),null);
__d("SignalsPerformanceTiming",["invariant","performanceNow","requestAnimationFrame"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h={},i={};function j(a){h[a]=h[a]==null?0:h[a]+1;var b=h[a];return{key:a+"_"+b,runCount:h[a]}}a=function(){__p&&__p();function a(a,c){var d=this;this.$4=!1;this.$5=!1;this.$6=0;this.$7=function(){d.$6++,d.$5===!1&&b("requestAnimationFrame")(d.$7)};this.$2=a;this.$1=j(a);this.$3=c}var c=a.prototype;c.reset=function(){this.$4=!1;this.$5=!0;this.$1=j(this.$2);this.$6=0;return this};c.start=function(){this.$4||(this.$4=!0,this.$5=!1,i[this.$1.key]=[b("performanceNow")()],this.$7());return this};c.end=function(){__p&&__p();if(!this.$5&&this.$4){this.$5=!0;i[this.$1.key].push(b("performanceNow")());var a=i[this.$1.key];a.length===2||g(0,4726);var c=a[0];a=a[1];this.$8(c,a-c)}return this};c.$8=function(a,b){this.$3&&this.$3({duration:b,frameCount:this.$6,runCount:this.$1.runCount,start:a})};return a}();e.exports=a}),null);
__d("SignalsLoggingSessionErrors",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(b,a);function b(b,c){c="Sessions of scope '"+c+"' and namespace '"+b+"' has already been declared";b=a.call(this,c)||this;b.message=c;b.name="DuplicateSessionNameError";return b}return b}(babelHelpers.wrapNativeSuper(Error));b=function(a){babelHelpers.inheritsLoose(b,a);function b(){var b,c="Session scope can only contain letters, numbers, and _";b=a.call(this,c)||this;b.message=c;b.name="InvalidSessionNameError";return b}return b}(babelHelpers.wrapNativeSuper(Error));e.exports={DuplicateSessionNameError:a,InvalidSessionNameError:b}}),null);
__d("SignalsLoggingSessions",["invariant","SignalsLoggingSessionErrors","immutable","signalsNow"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("SignalsLoggingSessionErrors").DuplicateSessionNameError,i=b("SignalsLoggingSessionErrors").InvalidSessionNameError,j=b("immutable").Map;a=b("immutable").Record;var k=b("immutable").Set,l=1e3,m=function(c){__p&&__p();babelHelpers.inheritsLoose(a,c);function a(a){var d=a.namespace,e=a.scope,f=a.secondaries;a=a.timeoutSeconds;e!=null&&e!==""||g(0,2347);return c.call(this,{namespace:d,scope:e,secondaries:f,start:b("signalsNow")(),timeoutSeconds:a})||this}var d=a.prototype;d.isExpired=function(){return this.timeoutSeconds!=null&&this.start+this.timeoutSeconds*l<=b("signalsNow")()};return a}(a({namespace:"",scope:"",secondaries:k(),start:0,timeoutSeconds:null}));c=function(){__p&&__p();function a(){this.$1=j()}var b=a.prototype;b.end=function(a){this.$1=this.$1["delete"](a)};b.start=function(a){__p&&__p();var b=this,c=a.namespace,d=a.scope,e=a.secondaries;a=a.timeoutSeconds;if(/[^a-zA-Z_0-9.]/.test(d))throw new i();var f=c+"."+d;if(this.$1.has(f)===!0&&this.$1.get(f).isExpired()===!1)throw new h(c,d);c=new m({namespace:c,scope:d,secondaries:e||k(),timeoutSeconds:a});this.$1=this.$1.set(f,c);return function(){return b.end(f)}};b.getForSend=function(){return this.$1.valueSeq().filter(function(a){return a.isExpired()===!1}).map(function(a){var b=a.scope,c=a.start,d=a.namespace;a=a.secondaries;return{namespace:d,scope:b,secondaries:a,start:c}}).toArray()};b.getSession=function(a,b){a=a+"."+b;return this.$1.get(a)};return a}();d=new c();e.exports=d}),null);
__d("SignalsSecondaryLoggingOptionsEnum",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({GLOBAL_CONTEXT:"GLOBAL_CONTEXT",MERGE_DATA_BY_TYPE:"MERGE_DATA_BY_TYPE",ONE_LINE_PER_CALL:"ONE_LINE_PER_CALL"})}),null);
__d("SignalsLoggingTransport",["Banzai","FBLogger","SignalsLoggingSessions","SignalsSecondaryLoggingOptionsEnum","immutable","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("immutable").Seq,h=b("immutable").Set,i="signals_logging",j=!1;function k(a){return[{cb:function(){return Object.assign.apply(Object,[{}].concat(a.sortBy(function(a){return a.id}).map(function(a){var b=a.cb()||{};Object.keys(b).forEach(function(a){return b[a]===void 0&&delete b[a]});return b}).toArray()))},options:a.first().options,type:a.first().type}]}function l(){return{logHTTPReferrer:document.referrer,logURL:window.location.href}}function a(a,c,d){__p&&__p();var e=b("SignalsLoggingSessions").getForSend();d=g.Indexed(e).flatMap(function(a){a=a.secondaries;return a.toArray()}).concat(d||h()).groupBy(function(a){a=a.id;return a}).map(function(a,b){return a.first()}).valueSeq().groupBy(function(a){a=a.type;return a}).map(function(a,c){c=b("nullthrows")(a.first()).options;if(c.has(b("SignalsSecondaryLoggingOptionsEnum").GLOBAL_CONTEXT))return[a.first()];else if(c.has(b("SignalsSecondaryLoggingOptionsEnum").ONE_LINE_PER_CALL))return a.toArray();else if(c.has(b("SignalsSecondaryLoggingOptionsEnum").MERGE_DATA_BY_TYPE))return k(a);return[]}).valueSeq().flatMap(function(a){return a}).map(function(a){var c=a.type;a=a.cb;try{return{data:a(),type:c}}catch(g){a=g.message;var d=g.stack,e=g.lineNumber,f=g.fileName;b("Banzai").post(i,{data:babelHelpers["extends"]({},l(),{action:"CALCULATE",fileName:f,lineNumber:e,message:a,namespace:"ADS_SIGNALS",scope:"SECONDARY_LOGGING."+c,stack:d}),type:"error"});return null}}).filter(function(a){return a!=null});var f=c.error;delete c.error;d={data:babelHelpers["extends"]({},c,l()),secondaries:d.toArray(),sessions:e.map(function(a){var b=a.scope,c=a.start;a=a.namespace;return{namespace:a,scope:b,start:c}}),type:a};j;b("Banzai").post(i,d);a==="error"&&f!=null&&b("FBLogger")("signals").catching(f).addMetadata("ADS_INTERFACES","RAW_DATA","namespace - "+c.namespace).addMetadata("ADS_INTERFACES","RAW_DATA","scope - "+c.scope).warn("An exception was thrown in Signals UI")}function c(a){j=a}e.exports={BANZAI_ROUTE:i,send:a,setLogToConsole:c}}),null);
__d("signalsLogAction",["SignalsLoggingTransport"],(function(a,b,c,d,e,f){"use strict";var g=b("SignalsLoggingTransport").send;function a(a,b){b={action:b,namespace:a.getNamespace(),scope:a.getScope()};g("action",b,a.getSecondaries())}e.exports=a}),null);
__d("signalsLogError",["SignalsLoggingTransport"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("SignalsLoggingTransport").send;function a(a){var b=a.action,c=a.config,d=a.disableSecondary;d=d===void 0?!1:d;a=a.error;var e=a.message,f=a.stack,h=a.lineNumber,i=a.fileName;b={action:b,error:a,fileName:i,lineNumber:h,message:e,namespace:c.getNamespace(),scope:c.getScope(),stack:f};g("error",b,d===!1?c.getSecondaries():null)}e.exports=a}),null);
__d("signalsLogFunction",["immutable"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=b("immutable").OrderedSet;c=b("immutable").Record;function g(a,b){return a===!0||typeof a==="function"&&a.apply(void 0,b)}var h="DYNAMIC_LOGGER_ERROR",i=function(b){babelHelpers.inheritsLoose(a,b);function a(){return b.apply(this,arguments)||this}var c=a.prototype;c.doChecks=function(a){return{calls:g(this.calls,a),errors:g(this.errors,a),timing:g(this.timing,a)}};return a}(c({calls:!1,errors:!1,scopes:a(),secondaries:a(),timing:!1}));function j(a){__p&&__p();var b=this,c=a.action,d=a.conditions,e=d===void 0?new i():d,f=a.fn,g=a.logger;d=function(){__p&&__p();for(var a=arguments.length,d=new Array(a),i=0;i<a;i++)d[i]=arguments[i];var j=null,k=null;try{j=typeof c==="string"?c:c.apply(void 0,d);var l=e.scopes.reduce(function(a,b){return a.scope(typeof b==="string"?b:b.apply(void 0,d))},g);k=e.secondaries.reduce(function(a,b){var c=b.factory,e=b.cb;return a.secondary(c,function(){return e.apply(void 0,d)})},l)}catch(a){g.logError(a,h)}if(k==null||j==null)return f.apply(b,d);var m=e.doChecks(d),n=m.calls,o=m.errors,p=m.timing,q=null;p&&(q=k.performanceTimer(j),q.start());var r;if(o)try{r=f.apply(b,d)}catch(a){k.logError(a,j);throw a}else r=f.apply(b,d);q!=null&&q.end();n&&k.logAction(j);return r};d.logCallsIf=function(a){return j({action:c,conditions:e.set("calls",a),fn:f,logger:g})};d.logTimingIf=function(a){return j({action:c,conditions:e.set("timing",a),fn:f,logger:g})};d.logErrorsIf=function(a){return j({action:c,conditions:e.set("errors",a),fn:f,logger:g})};d.logCalls=function(){return j({action:c,conditions:e.set("calls",!0),fn:f,logger:g})};d.logTiming=function(){return j({action:c,conditions:e.set("timing",!0),fn:f,logger:g})};d.logErrors=function(){return j({action:c,conditions:e.set("errors",!0),fn:f,logger:g})};d.scope=function(a){return j({action:c,conditions:e.set("scopes",e.scopes.add(a)),fn:f,logger:g})};d.secondary=function(a,b){return j({action:c,conditions:e.set("secondaries",e.secondaries.add({cb:b,factory:a})),fn:f,logger:g})};return d}e.exports=j}),null);
__d("signalsLogTiming",["SignalsLoggingTransport"],(function(a,b,c,d,e,f){"use strict";var g=b("SignalsLoggingTransport").send;function a(a){var b=a.action,c=a.config,d=a.duration,e=a.frameCount,f=a.runCount;a=a.start;b={action:b,duration:d,frameCount:e,namespace:c.getNamespace(),runCount:f,scope:c.getScope(),start:a};g("timing",b,c.getSecondaries())}e.exports=a}),null);
__d("signalsLoggingDefineSessionByComponentLifetime",["React","SignalsLoggingSessionErrors"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("SignalsLoggingSessionErrors").DuplicateSessionNameError;function h(a,c,d){__p&&__p();var e,f;d===void 0&&(d=[]);return f=e=function(e){__p&&__p();babelHelpers.inheritsLoose(f,e);function f(){return e.apply(this,arguments)||this}var i=f.prototype;i.componentDidMount=function(){var b=this;try{var c=d.reduce(function(a,c){return a.scope(typeof c==="string"?c:c(b.props))},a);this.$1=c.startSession()}catch(b){if(b instanceof g)a.logError(b,h.ERROR_ACTION);else throw b}};i.componentWillUnmount=function(){this.$1!=null&&this.$1()};i.render=function(){return b("React").createElement(c,this.props)};return f}(b("React").PureComponent),e.__className="Sessionized_"+(c.name||""),f}h.ERROR_ACTION="DEFINE_SESSION_BY_COMPONENT";e.exports=h}),null);
__d("SignalsLoggingStandardActionsEnum",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ADD:"add",CANCEL:"cancel",CLICK:"click",CLOSE:"close",COPY:"copy",CREATE:"create",DISMISS:"dismiss",DONE:"done",FETCH:"fetch",NEXT_STEP:"next_step",OPEN:"open",PREV_STEP:"prev_step",RENDER:"render",RESET:"reset",SELECT:"select",SHOW:"show",START:"start",TOGGLE:"toggle",TOGGLE_OFF:"toggle_off",TOGGLE_ON:"toggle_on"})}),null);
__d("SignalsLoggingStandardTimingsEnum",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({EXECUTE:"execute",LOAD:"load",RENDER:"render",REQUEST:"request",TIME_SPENT:"time_spent"})}),null);
__d("signalsStandardLogging",["SignalsLoggingStandardActionsEnum","SignalsLoggingStandardTimingsEnum","emptyFunction","immutable"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){__p&&__p();var c={},d={},e=function(){__p&&__p();if(g){if(h>=f.length)return"break";i=f[h++]}else{h=f.next();if(h.done)return"break";i=h.value}var b=i;c[b]=function(){return a.performanceTimer(b)};d[b]=function(c,d){return d==null?a.wrapFunction(c,b).logTiming():a.wrapFunction(c,b).logTimingIf(d)}};for(var f=b("immutable").Seq.Keyed(b("SignalsLoggingStandardTimingsEnum")).values(),g=Array.isArray(f),h=0,f=g?f:f[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var i,j=e();if(j==="break")break}var k={},l={};e=function(){__p&&__p();if(n){if(o>=m.length)return"break";j=m[o++]}else{o=m.next();if(o.done)return"break";j=o.value}var c=j;k[c]=a.wrapFunction(b("emptyFunction"),c).logCalls();l[c]=function(b,d){return d==null?a.wrapFunction(b,c).logCalls():a.wrapFunction(b,c).logCallsIf(d)}};for(var m=b("immutable").Seq.Keyed(b("SignalsLoggingStandardActionsEnum")).values(),n=Array.isArray(m),o=0,m=n?m:m[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var p=e();if(p==="break")break}return{actions:k,fn:{actions:l,timings:d},timings:c}}e.exports=a}),null);
__d("SignalsLogging",["invariant","Promise","React","Run","SignalsLoggingSessions","SignalsPerformanceTiming","immutable","nullthrows","signalsLogAction","signalsLogError","signalsLogFunction","signalsLoggingDefineSessionByComponentLifetime","signalsLogTiming","signalsStandardLogging"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("immutable").List;c=b("immutable").Record;d=b("immutable").Set;var h="DO NOT INSTANTIATE THIS CLASS DIRECTLY";f="SECONDARY_LOGGING_ERROR";var i=0;a=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}return b}(c({namespace:null,scope:a(),secondaries:d()}));d=function(a){__p&&__p();babelHelpers.inheritsLoose(d,a);var c=d.prototype;c.$SignalsLogging1=function(){this.data.namespace!=null||g(0,4652),this.data.scope.size>0||g(0,4653)};function d(b){b===h||g(0,4654);return a.call(this,{})||this}c.scope=function(){for(var a=arguments.length,b=new Array(a),c=0;c<a;c++)b[c]=arguments[c];return b.reduce(function(a,b){return a.setIn(["data","scope"],a.data.scope.push(b))},this)};c.namespace=function(a){this.data.namespace==null||g(0,4655);return this.setIn(["data","namespace"],a)};c.secondary=function(a,b){a=a(b);a.id=i++;return this.setIn(["data","secondaries"],this.data.secondaries.add(a))};c.getScope=function(){this.data.scope.size>0||g(0,4656);return this.data.scope.map(function(a){return typeof a==="string"?a:a()}).filter(function(a){return a!=null}).join(".")};c.getNamespace=function(){return b("nullthrows")(this.data.namespace)};c.getSecondaries=function(){return this.data.secondaries};c.getSecondaryData=function(a,b,c){__p&&__p();a=this;return this.data.secondaries.map(function(b){var c=b.type,d=b.options;b=b.cb;try{return{data:b(),options:d,type:c}}catch(b){a.scope(f).logError(b,c,!0);return{data:null,options:null,type:c}}}).filter(function(a){a=a.data;return a!=null}).toArray()};c.performanceTimer=function(a){var c=this;return new(b("SignalsPerformanceTiming"))([this.getNamespace(),this.getScope(),a].join("."),function(d){var e=d.duration,f=d.frameCount,g=d.runCount;d=d.start;b("signalsLogTiming")({action:a,config:c,duration:e,frameCount:f,runCount:g,start:d})})};c.logPromise=function(a,c){__p&&__p();var d=this;this.$SignalsLogging1();this.logAction(c);var e=this.performanceTimer(c);e.start();return a.then(function(a){e.end();return a})["catch"](function(a){e.end();d.logError(a,c);return b("Promise").reject(a)})};c.logAction=function(a){this.$SignalsLogging1(),b("signalsLogAction")(this,a)};c.logError=function(a,c,d){d===void 0&&(d=!1),this.$SignalsLogging1(),b("signalsLogError")({action:c,config:this,disableSecondary:d,error:a})};c.wrapFunction=function(a,c){return b("signalsLogFunction")({action:c,fn:a,logger:this})};c.startSession=function(a){var c=this;this.$SignalsLogging1();var d=b("SignalsLoggingSessions").start({namespace:this.getNamespace(),scope:this.getScope(),secondaries:this.getSecondaries(),timeoutSeconds:a});this.logAction("SESSION_START");return function(){c.logAction("SESSION_END"),d()}};c.defineSession=function(a,c){return b("signalsLoggingDefineSessionByComponentLifetime")(this,a,c)};c.getSessionStart=function(a){a=b("SignalsLoggingSessions").getSession(this.getNamespace(),a);return a!=null?a.start:null};d.scope=function(a){return new d(h).scope(a)};d.namespace=function(a){return new d(h).namespace(a)};d.secondary=function(a,b){return new d(h).secondary(a,b)};c.std=function(){return b("signalsStandardLogging")(this)};return d}(c({data:new a()}));c=d.namespace("FB").scope("PAGE_LOAD").startSession();b("Run").onUnload(c);e.exports=d}),null);
__d("hasSubstring",["invariant"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function a(a,b,c){__p&&__p();b.length||g(0,4697);for(var d=0;d<b.length;d++){var e=b[d];if(a[e]!=null&&(a[e]instanceof Object||typeof a[e]==="number"||typeof a[e]==="string"||typeof a[e]==="boolean")){e=a[e].toString().toLowerCase();var f=c.toLowerCase();if(e.indexOf(f)!==-1)return!0}}return!1}e.exports=a}),null);
__d("PopoverButton.react",["cx","ix","AbstractPopoverButton.react","Button.react","Image.react","React","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();a=b("React").PropTypes;c=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=b("React").createElement(b("Image.react"),{src:h("101373")});a={button:b("React").createElement(b("Button.react"),babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,"_4-s1")})),chevron:a,defaultMaxWidth:200,chevronWidth:14};return b("React").createElement(b("AbstractPopoverButton.react"),{config:a,haschevron:this.props.haschevron,image:this.props.image,label:this.props.label,labelIsHidden:this.props.labelIsHidden,maxwidth:this.props.maxwidth})};return c}(b("React").Component);c.propTypes={haschevron:a.bool,label:a.node,labelIsHidden:a.bool,maxwidth:a.number};e.exports=c}),null);
__d("Selector.react",["AbstractSelector.react","PopoverButton.react","React","ReactMenu"],(function(a,b,c,d,e,f){__p&&__p();var g=b("ReactMenu").SelectableMenu;a=b("ReactMenu").SelectableItem;c=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a={button:b("React").createElement(b("PopoverButton.react"),{rel:"toggle",suppressed:this.props.suppressed}),menu:b("React").createElement(g,null)};return b("React").createElement(b("AbstractSelector.react"),babelHelpers["extends"]({},this.props,{overlappingborder:!0,config:a}),this.props.children)};return c}(b("React").Component);c.Option=a;e.exports=c}),null);
__d("FBAssetSelector.react",["cx","fbt","ix","AdsFilterWidgets.react","AdsGenericFilterField","AdsMultiSelectableList.react","Image.react","InlineBlock.react","LeftRight.react","React","Selector.react","XUIButton.react","XUIPagerButtons.react","XUISpinner.react","emptyFunction","hasSubstring","objectValues"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j=b("Selector.react").Option;a=b("React").PropTypes;var k=["displayName","name","id"];function l(a,b,c){c=c||2;var d=a.substring(0,Math.min(a.length,c)),e=b.substring(0,Math.min(b.length,c));return c<5&&d===e&&a!==b?l(a,b,c+1):[d.toLowerCase(),e.toLowerCase()]}c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c){__p&&__p();var d;d=a.call(this,c)||this;d.$10=function(a){return a.id};d.$1=function(a){d.setState({visibleAssets:d.$12(a,d.state)})};d.$2=function(a){return!!(d.props.maxRowsPerPage&&a.length>d.props.maxRowsPerPage)};d.$13=function(a){var b=d.state.pagingIndex;if(b>=a.length-1){var c=a.length%d.props.maxRowsPerPage||d.props.maxRowsPerPage;b=a.length-c}return b};d.$9=function(a){if(d.$2(a)){var b=d.$13(a);a=Math.min(a.length,b+d.props.maxRowsPerPage);return{from:b,to:a}}return null};d.$3=function(a){var c=d.$13(a),e=Math.ceil(a.length/d.props.maxRowsPerPage);c=Math.floor(c/d.props.maxRowsPerPage)+1;var f=h._("(Page {pageNumber} of {totalPageCount})",[h._param("pageNumber",c),h._param("totalPageCount",e)]);return b("React").createElement("div",{className:"_xfn",key:"pager"},b("React").createElement(b("LeftRight.react"),null,b("React").createElement("div",null,d.$14(a)),b("React").createElement("div",null,b("React").createElement("span",{className:"_xfo"},f),b("React").createElement(b("XUIPagerButtons.react"),null,b("React").createElement(b("XUIButton.react"),{className:c===1?"disabled":"",disabled:c===1,image:b("React").createElement(b("Image.react"),{src:i("101339")}),label:h._("Previous"),labelIsHidden:!0,size:"small",onClick:d.$15}),b("React").createElement(b("XUIButton.react"),{className:c===e?"disabled":"",disabled:c===e,image:b("React").createElement(b("Image.react"),{src:i("101341")}),label:h._("Next"),labelIsHidden:!0,size:"small",onClick:d.$16})))))};d.$15=function(){d.setState({pagingIndex:Math.max(0,d.state.pagingIndex-d.props.maxRowsPerPage)})};d.$16=function(){d.setState({pagingIndex:Math.min(d.state.visibleAssets.length-d.state.visibleAssets.length%d.props.maxRowsPerPage,d.state.pagingIndex+d.props.maxRowsPerPage)})};d.$17=function(a){var c=a.displayName||a.name,e;d.props.renderSubtitle&&(e=d.props.renderSubtitle(a));return b("React").createElement("div",{className:(e?"_xfp":"")+(e?"":" _4_xa")},b("React").createElement("div",null,c),b("React").createElement("div",{className:"_xfq"+(e?"":" hidden_elem")},e))};d.$11=function(a,c){var e=!d.props.isNarrowStyle&&d.props.renderImageForAssetFunction(a),f=d.props.renderError?d.props.renderError(a):null;c=d.props.renderExtrasForAssetFunction&&d.props.renderExtrasForAssetFunction(a,c,!!f);return b("React").createElement(b("InlineBlock.react"),{className:"_xfs"+(f?" _xft":"")},b("React").createElement("div",{className:"_xfu"},e),b("React").createElement("div",{className:"_xfv"},b("React").createElement("span",{className:"rfloat mrm"},c),b("React").createElement("div",{className:e?"_xfw":""},d.$17(a),b("React").createElement("div",{className:"_xfx"},f))))};d.$12=function(a,c){__p&&__p();if(a){if(c.selectedFilterValue!==""){var e=c.selectedFilterValue,f=d.props.filterAssetsByID||{};a=a.filter(function(a){return Object.prototype.hasOwnProperty.call(f[e],a.id)},babelHelpers.assertThisInitialized(d))}if(c.filterText){var g=c.filterNegative;a=a.filter(function(a){a=b("hasSubstring")(a,k,c.filterText);return g?!a:a},babelHelpers.assertThisInitialized(d))}return a}return[]};d.$6=function(){var a=[b("React").createElement(j,{value:"",key:"empty_option"},d.props.noFilterOptionLabel)],c=b("objectValues")(d.props.filtersByID||{});d.props.filterSortFunction&&c.sort(d.props.filterSortFunction);var e=d.props.filterPrefixFunction;c.forEach(function(c){var d=c.name||c.id,f=e?e(d):d;a.push(b("React").createElement(j,{value:c.id,key:d},f))});return a};d.$8=function(a){var b=!1;a.indexOf("-")===0&&(b=!0,a=a.substring(1));d.$18({pagingIndex:0,filterNegative:b,filterText:a})};d.$7=function(a){d.$18({pagingIndex:0,selectedFilterValue:a})};d.$18=function(a){a=babelHelpers["extends"]({},d.state,a);var b=d.$12(d.props.assets,a);d.setState(Object.assign(a,{visibleAssets:b}))};d.state={filterNegative:!1,filterText:"",pagingIndex:0,selectedFilterValue:"",visibleAssets:[]};return d}var d=c.prototype;d.componentDidMount=function(){this.$1(this.props.assets)};d.UNSAFE_componentWillReceiveProps=function(a){Object.prototype.hasOwnProperty.call(a,"assets")&&this.$1(a.assets)};d.render=function(){var a=null,c=this.state.visibleAssets,d=this.$2(c);d&&(a=this.$3(c));return b("React").createElement("div",null,this.$4(),a,this.$5(d))};d.$4=function(){return b("React").createElement(b("AdsFilterWidgets.react"),{key:"filter",className:"_3-96",selectorOptions:this.$6(),initialSelectorValue:"",onSelectorChange:this.$7,onTextChange:this.$8,hasSelector:!!this.props.hasSelector,onFilterSetChange:this.props.onFilterSetChange,selectorFilterField:this.props.selectorFilterField,textFilterField:this.props.textFilterField,placeholder:this.props.filterPlaceholder})};d.$5=function(a){var c=this.state.visibleAssets;return this.props.assets?b("React").createElement(b("AdsMultiSelectableList.react"),{scrollToItemID:this.props.scrollToItemID,key:"list",items:c,paging:this.$9(c),initialSelectedItems:this.props.initialSelectedAssets,selectedItems:this.props.selectedAssets,selectType:this.props.selectType,getItemKey:this.$10,renderItemBody:this.$11,onSelectionChange:this.props.onSelectionChange||b("emptyFunction"),listTitle:this.props.listTitle,fetchErrorText:this.props.fetchErrorText,renderTopBar:this.props.renderTopBar,renderError:this.props.renderError,onLoadMore:this.props.onLoadMore,itemCount:this.props.assetCount,noResultsView:this.props.noResultsView,isNarrowStyle:this.props.isNarrowStyle,bodyHeight:this.props.bodyHeight-(a?32:0)}):b("React").createElement("div",{className:"_5tln",key:"spinner"},b("React").createElement(b("XUISpinner.react"),{size:"large"}))};d.$14=function(a){if(this.props.isNarrowStyle)return null;var b=this.$9(a);a=l(a[b.from].name,a[b.to-1].name,2);b=a[0];a=a[1];return h._("({lettersFrom} - {lettersTo})",[h._param("lettersFrom",b),h._param("lettersTo",a)])};return c}(b("React").Component);c.propTypes={assets:a.array,assetCount:a.number,hasSelector:a.bool,initialSelectedAssets:a.array,selectedAssets:a.array,selectType:a.oneOf(["single","multi"]),filtersByID:a.object,filterAssetByID:a.object,filterPrefixFunction:a.func,filterSortFunction:a.func,listTitle:a.string.isRequired,maxRowsPerPage:a.number,renderImageForAssetFunction:a.func.isRequired,renderExtrasForAssetFunction:a.func,onSelectionChange:a.func,renderError:a.func,noFilterOptionLabel:a.string,fetchErrorText:a.string,renderTopBar:a.func,renderSubtitle:a.func,onFilterSetChange:a.func,textFilterField:a.instanceOf(b("AdsGenericFilterField")),selectorFilterField:a.instanceOf(b("AdsGenericFilterField")),scrollToItemID:a.string,noResultsView:a.object,filterPlaceholder:a.string,isNarrowStyle:a.bool,bodyHeight:a.number};c.defaultProps={selectType:"multi",noFilterOptionLabel:h._("(None)")};e.exports=c}),null);
__d("SignalsLoggingNamespaceEnum",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ADS_SIGNALS:"ADS_SIGNALS",FB:"FB"})}),null);