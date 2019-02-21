if (self.CavalryLogger) { CavalryLogger.start_js(["OufXU"]); }

__d("DraggableToken.react",["cx","React","ReactDOM","Rect","emptyFunction","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();var h;c=b("React").PropTypes;d=b("React").PureComponent;f={isDragDropEnabled:!0,onTokenDragEnd:b("emptyFunction"),onTokenDragLeave:b("emptyFunction"),onTokenDragOver:b("emptyFunction"),onTokenDragStart:b("emptyFunction"),onTokenDrop:b("emptyFunction")};g=babelHelpers.inherits(a,d);h=g&&g.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=h.constructor).call.apply(a,[this].concat(e)),this.lastDragEventPageX=null,this.$2=function(){var a=b("ReactDOM").findDOMNode(this.$1);if(this.props.draggableImageClass&&a){var c=a.getElementsByClassName(this.props.draggableImageClass);if(c.length>0)return c[0]}return a}.bind(this),this.$3=function(a){a=a.dataTransfer;a&&(a.setData("text",""),a.setDragImage&&a.setDragImage(this.$2(),0,0),a.effectAllowed="move");this.props.onTokenDragStart(this.props.entry,this.props.index)}.bind(this),this.$4=function(a){this.props.onTokenDragEnd(this.props.entry,this.props.index)}.bind(this),this.$5=function(a){this.props.onTokenDragLeave(this.props.entry,this.props.index)}.bind(this),this.$6=function(a){__p&&__p();a.preventDefault();a.stopPropagation();var c=a.dataTransfer;c&&(c.dropEffect="move");if(a.pageX!==this.lastDragEventPageX){c=b("ReactDOM").findDOMNode(this);c=b("Rect").getElementBounds(c).getCenter().x;a=a.pageX<c;this.props.onTokenDragOver(this.props.entry,this.props.index,a)}}.bind(this),this.$7=function(a){a.stopPropagation(),this.props.onTokenDrop(this.props.entry,this.props.index)}.bind(this),c}a.prototype.render=function(){"use strict";__p&&__p();if(!this.props.isDragDropEnabled){var a=b("React").Children.only(this.props.children);if(!a)return a;var c=b("joinClasses")(a.props.className,this.props.className);return b("React").cloneElement(a,{className:c})}return b("React").createElement("div",{className:b("joinClasses")(this.props.className,"_5o8l"),draggable:!0,onDragStart:this.$3,onDragEnd:this.$4,onDragOver:this.$6,onDragLeave:this.$5,onDrop:this.$7,ref:function(a){return this.$1=a}.bind(this)},this.props.children)};a.propTypes={onTokenDragEnd:c.func.isRequired,onTokenDragLeave:c.func.isRequired,onTokenDragOver:c.func.isRequired,onTokenDragStart:c.func.isRequired,onTokenDrop:c.func.isRequired,index:c.number,isDragDropEnabled:c.bool};a.defaultProps=f;e.exports=a}),null);
__d("TokenizerToken.react",["cx","fbt","CloseButton.react","React","SearchableEntry","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i;c=b("React").PropTypes;d=babelHelpers.inherits(a,b("React").Component);i=d&&d.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=i.constructor).call.apply(a,[this].concat(d)),this.$1=function(a){a.preventDefault(),this.props.onRemove(this.props.entry)}.bind(this),b}a.prototype.render=function(){"use strict";var a;!this.props.disabled&&this.props.onRemove&&(a=b("React").createElement(b("CloseButton.react"),{ariaLabel:h._("Remove {item}",[h._param("item",this.props.label)]),className:"_58zx",size:"small",onClick:this.$1}));var c="_58zy"+(this.props.disabled?" _12l9":"")+(this.props.highlighted?" _58zz":"");return b("React").createElement("span",babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,c),label:null}),this.props.glyph,this.props.label,a)};a.propTypes={label:c.string.isRequired,entry:c.instanceOf(b("SearchableEntry")),highlighted:c.bool,glyph:c.element,onRemove:c.func,disabled:c.bool};e.exports=a}),null);
__d("DraftEffectsPerSite",["fbt","Bootloader"],(function(a,b,c,d,e,f,g){"use strict";a={handleExtensionCausedError:function(){b("Bootloader").loadModules(["SimpleXUIDialog"],function(a){a.show(g._("An extension installed in your web browser is preventing text entry from working correctly. Please disable any extensions and reload the Page."),g._("Text editing is limited"),null,{width:600})},"DraftEffectsPerSite")}};e.exports=a}),null);
__d("DraftJsEventsTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.$1={}}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:DraftJsEventsLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:DraftJsEventsLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:DraftJsEventsLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setAnonymizedDom=function(a){this.$1.anonymized_dom=a;return this};a.prototype.setEvent=function(a){this.$1.event=a;return this};a.prototype.setExtraParams=function(a){this.$1.extra_params=a;return this};a.prototype.setScriptPath=function(a){this.$1.script_path=a;return this};a.prototype.setSelectionState=function(a){this.$1.selection_state=a;return this};a.prototype.setTime=function(a){this.$1.time=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};a.prototype.setWeight=function(a){this.$1.weight=a;return this};c={anonymized_dom:!0,event:!0,extra_params:!0,script_path:!0,selection_state:!0,time:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("DraftEditorTextNode.react",["invariant","React","ReactDOM","UserAgent"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=b("UserAgent").isBrowser("IE <= 11");function j(a){return i?a.textContent==="\n":a.tagName==="BR"}var k=i?b("React").createElement("span",{key:"A","data-text":"true"},"\n"):b("React").createElement("br",{key:"A","data-text":"true"}),l=i?b("React").createElement("span",{key:"B","data-text":"true"},"\n"):b("React").createElement("br",{key:"B","data-text":"true"});c=babelHelpers.inherits(a,b("React").Component);h=c&&c.prototype;function a(a){h.constructor.call(this,a),this.$1=!1}a.prototype.shouldComponentUpdate=function(a){var c=b("ReactDOM").findDOMNode(this),d=a.children==="";c instanceof Element||g(0,6158);return d?!j(c):c.textContent!==a.children};a.prototype.componentDidMount=function(){this.$1=!this.$1};a.prototype.componentDidUpdate=function(){this.$1=!this.$1};a.prototype.render=function(){return this.props.children===""?this.$1?k:l:b("React").createElement("span",{key:this.$1?"A":"B","data-text":"true"},this.props.children)};e.exports=a}),null);
__d("DraftEffects",["cx","BanzaiODS","CurrentUser","DraftEffectsPerSite","fbjs/lib/CSSCore","gkx"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("CurrentUser").isEmployee()?".employee":"",i=!1;a={initODS:function(){document.addEventListener("input",function(a){a.target.nodeType===1&&b("fbjs/lib/CSSCore").hasClass(a.target,"_5rpu")&&b("BanzaiODS").bumpEntityKey("draft_js","input_events"+h)})},handleExtensionCausedError:function(){b("BanzaiODS").bumpEntityKey("draft_js","extension_caused_errors"+h);if(i||!b("gkx")("676843"))return;i=!0;b("DraftEffectsPerSite").handleExtensionCausedError()}};e.exports=a}),null);
__d("DraftJsDebugLogging",["CurrentUser","DraftJsEventsTypedLogger","ScriptPath"],(function(a,b,c,d,e,f){"use strict";e.exports={logBlockedSelectionEvent:function(a){var c=a.anonymizedDom,d=a.extraParams;a=a.selectionState;new(b("DraftJsEventsTypedLogger"))().setEvent("blocked_selection_event").setAnonymizedDom(c).setExtraParams(d).setScriptPath(b("ScriptPath").getScriptPath()).setSelectionState(a).log()},logSelectionStateFailure:function(a){var c=a.anonymizedDom,d=a.extraParams;a=a.selectionState;b("CurrentUser").isEmployee()&&new(b("DraftJsEventsTypedLogger"))().setEvent("selection_state_failure").setAnonymizedDom(c).setExtraParams(d).setScriptPath(b("ScriptPath").getScriptPath()).setSelectionState(a).log()}}}),null);
__d("setDraftEditorSelection",["invariant","DraftEffects","DraftJsDebugLogging","containsNode","getActiveElement"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function h(a,b){if(!a)return"[empty]";a=i(a,b);if(a.nodeType===Node.TEXT_NODE)return a.textContent;a instanceof Element||g(0,3425);return a.outerHTML}function i(a,b){__p&&__p();var c=b!==void 0?b(a):[];if(a.nodeType===Node.TEXT_NODE){var d=a.textContent.length;return document.createTextNode("[text "+d+(c.length?" | "+c.join(", "):"")+"]")}d=a.cloneNode();d.nodeType===1&&c.length&&d.setAttribute("data-labels",c.join(", "));c=a.childNodes;for(var a=0;a<c.length;a++)d.appendChild(i(c[a],b));return d}function j(a,b){a=a;while(a)if(a instanceof Element&&a.hasAttribute("contenteditable"))return h(a,b);else a=a.parentNode;return"Could not find contentEditable parent of node"}function k(a){return a.nodeValue===null?a.childNodes.length:a.nodeValue.length}function c(c,d,e,f,g){__p&&__p();if(!b("containsNode")(document.documentElement,d))return;var h=a.getSelection(),i=c.getAnchorKey(),j=c.getAnchorOffset(),k=c.getFocusKey(),n=c.getFocusOffset(),o=c.getIsBackward();if(!h.extend&&o){var p=i,q=j;i=k;j=n;k=p;n=q;o=!1}p=i===e&&f<=j&&g>=j;q=k===e&&f<=n&&g>=n;if(p&&q){h.removeAllRanges();m(h,d,j-f,c);l(h,d,n-f,c);return}if(!o)p&&(h.removeAllRanges(),m(h,d,j-f,c)),q&&l(h,d,n-f,c);else{q&&(h.removeAllRanges(),m(h,d,n-f,c));if(p){i=h.focusNode;k=h.focusOffset;h.removeAllRanges();m(h,d,j-f,c);l(h,i,k,c)}}}function l(a,c,d,e){__p&&__p();var f=b("getActiveElement")();if(a.extend&&b("containsNode")(f,c)){d>k(c)&&b("DraftJsDebugLogging").logSelectionStateFailure({anonymizedDom:j(c),extraParams:JSON.stringify({offset:d}),selectionState:JSON.stringify(e.toJS())});var g=c===a.focusNode;try{a.extend(c,d)}catch(h){b("DraftJsDebugLogging").logSelectionStateFailure({anonymizedDom:j(c,function(b){var c=[];b===f&&c.push("active element");b===a.anchorNode&&c.push("selection anchor node");b===a.focusNode&&c.push("selection focus node");return c}),extraParams:JSON.stringify({activeElementName:f?f.nodeName:null,nodeIsFocus:c===a.focusNode,nodeWasFocus:g,selectionRangeCount:a.rangeCount,selectionAnchorNodeName:a.anchorNode?a.anchorNode.nodeName:null,selectionAnchorOffset:a.anchorOffset,selectionFocusNodeName:a.focusNode?a.focusNode.nodeName:null,selectionFocusOffset:a.focusOffset,message:h?""+h:null,offset:d},null,2),selectionState:JSON.stringify(e.toJS(),null,2)});throw h}}else{g=a.getRangeAt(0);g.setEnd(c,d);a.addRange(g.cloneRange())}}function m(a,c,d,e){var f=document.createRange();d>k(c)&&(b("DraftJsDebugLogging").logSelectionStateFailure({anonymizedDom:j(c),extraParams:JSON.stringify({offset:d}),selectionState:JSON.stringify(e.toJS())}),b("DraftEffects").handleExtensionCausedError());f.setStart(c,d);a.addRange(f)}e.exports=c}),null);
__d("DraftEditorLeaf.react",["invariant","DraftEditorTextNode.react","React","ReactDOM","setDraftEditorSelection"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.$1=function(){__p&&__p();var a=this.props.selection;if(a==null||!a.getHasFocus())return;var c=this.props,d=c.block,e=c.start;c=c.text;d=d.getKey();c=e+c.length;if(!a.hasEdgeWithin(d,e,c))return;var f=b("ReactDOM").findDOMNode(this);f||g(0,5590);var h=f.firstChild;h||g(0,5591);var i;h.nodeType===Node.TEXT_NODE?i=h:h.tagName==="BR"?i=f:(i=h.firstChild,i||g(0,5592));b("setDraftEditorSelection")(a,i,d,e,c)};a.prototype.shouldComponentUpdate=function(a){var c=b("ReactDOM").findDOMNode(this.leaf);c||g(0,5593);c=c.textContent!==a.text||a.styleSet!==this.props.styleSet||a.forceSelection;return c};a.prototype.componentDidUpdate=function(){this.$1()};a.prototype.componentDidMount=function(){this.$1()};a.prototype.render=function(){__p&&__p();var a=this.props.block,c=this.props.text;c.endsWith("\n")&&this.props.isLast&&(c+="\n");var d=this.props,e=d.customStyleMap,f=d.customStyleFn,g=d.offsetKey;d=d.styleSet;var h=d.reduce(function(a,b){var c={};b=e[b];b!==void 0&&a.textDecoration!==b.textDecoration&&(c.textDecoration=[a.textDecoration,b.textDecoration].join(" ").trim());return Object.assign(a,b,c)},{});if(f){f=f(d,a);h=Object.assign(h,f)}return b("React").createElement("span",{"data-offset-key":g,ref:function(a){return this.leaf=a}.bind(this),style:h},b("React").createElement(b("DraftEditorTextNode.react"),null,c))};function a(){h.apply(this,arguments)}e.exports=a}),null);
__d("DraftOffsetKey",[],(function(a,b,c,d,e,f){"use strict";var g="-";a={encode:function(a,b,c){return a+g+b+g+c},decode:function(a){a=a.split(g).reverse();var b=a[0],c=a[1];a=a.slice(2);return{blockKey:a.reverse().join(g),decoratorKey:parseInt(c,10),leafKey:parseInt(b,10)}}};e.exports=a}),null);
__d("DraftEditorBlock.react",["cx","invariant","DraftEditorLeaf.react","DraftOffsetKey","React","ReactDOM","Scroll","Style","UnicodeBidi","UnicodeBidiDirection","getElementPosition","getScrollPosition","getViewportDimensions","nullthrows"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j=10,k=function(a,b){return a.getAnchorKey()===b||a.getFocusKey()===b};i=babelHelpers.inherits(a,b("React").Component);i&&i.prototype;a.prototype.shouldComponentUpdate=function(a){return this.props.block!==a.block||this.props.tree!==a.tree||this.props.direction!==a.direction||k(a.selection,a.block.getKey())&&a.forceSelection};a.prototype.componentDidMount=function(){__p&&__p();var a=this.props.selection,c=a.getEndKey();if(!a.getHasFocus()||c!==this.props.block.getKey())return;a=b("ReactDOM").findDOMNode(this);c=b("Style").getScrollParent(a);var d=b("getScrollPosition")(c);if(c===window){var e=b("getElementPosition")(a);e=e.y+e.height;var f=b("getViewportDimensions")().height;e=e-f;e>0&&window.scrollTo(d.x,d.y+e+j)}else{a instanceof HTMLElement||h(0,4852);f=a.offsetHeight+a.offsetTop;a=c.offsetHeight+d.y;e=f-a;e>0&&b("Scroll").setTop(c,b("Scroll").getTop(c)+e+j)}};a.prototype.$1=function(){__p&&__p();var a=this.props.block,c=a.getKey(),d=a.getText(),e=this.props.tree.size-1,f=k(this.props.selection,c);return this.props.tree.map(function(g,h){__p&&__p();var i=g.get("leaves"),j=i.size-1,k=i.map(function(i,k){var l=b("DraftOffsetKey").encode(c,h,k),g=i.get("start");i=i.get("end");return b("React").createElement(b("DraftEditorLeaf.react"),{key:l,offsetKey:l,block:a,start:g,selection:f?this.props.selection:null,forceSelection:this.props.forceSelection,text:d.slice(g,i),styleSet:a.getInlineStyleAt(g),customStyleMap:this.props.customStyleMap,customStyleFn:this.props.customStyleFn,isLast:h===e&&k===j})}.bind(this)).toArray(),l=g.get("decoratorKey");if(l==null)return k;if(!this.props.decorator)return k;var m=b("nullthrows")(this.props.decorator),n=m.getComponentForKey(l);if(!n)return k;m=m.getPropsForKey(l);l=b("DraftOffsetKey").encode(c,h,0);var o=i.first().get("start");i=i.last().get("end");var p=d.slice(o,i);g=a.getEntityAt(g.get("start"));var q=b("UnicodeBidiDirection").getHTMLDirIfDifferent(b("UnicodeBidi").getDirection(p),this.props.direction);p={contentState:this.props.contentState,decoratedText:p,dir:q,key:l,start:o,end:i,blockKey:c,entityKey:g,offsetKey:l};return b("React").createElement(n,babelHelpers["extends"]({},m,p),k)}.bind(this)).toArray()};a.prototype.render=function(){var a=this.props,c=a.direction;a=a.offsetKey;c="_1mf"+(c==="LTR"?" _1mj":"")+(c==="RTL"?" _1mk":"");return b("React").createElement("div",{"data-offset-key":a,className:c},this.$1())};function a(){i.apply(this,arguments)}e.exports=a}),null);
__d("DraftEditorContents-core.react",["cx","DraftEditorBlock.react","DraftOffsetKey","React","joinClasses","nullthrows"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=function(a,b,c,d){return(a==="unordered-list-item"?"_3kpz":"")+(a==="ordered-list-item"?" _3kp_":"")+(c?" _3kq0":"")+(b===0?" _3kq1":"")+(b===1?" _3kq2":"")+(b===2?" _3kq3":"")+(b===3?" _3kq4":"")+(b>=4?" _3kq5":"")+(d==="LTR"?" _3kq6":"")+(d==="RTL"?" _3kq7":"")};h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.shouldComponentUpdate=function(a){__p&&__p();var b=this.props.editorState;a=a.editorState;var c=b.getDirectionMap(),d=a.getDirectionMap();if(c!==d)return!0;c=b.getSelection().getHasFocus();d=a.getSelection().getHasFocus();if(c!==d)return!0;c=a.getNativelyRenderedContent();d=b.isInCompositionMode();var e=a.isInCompositionMode();if(b===a||c!==null&&a.getCurrentContent()===c||d&&e)return!1;c=b.getCurrentContent();var f=a.getCurrentContent();b=b.getDecorator();var g=a.getDecorator();return d!==e||c!==f||b!==g||a.mustForceSelection()};a.prototype.render=function(){__p&&__p();var a=this.props,c=a.blockRenderMap,d=a.blockRendererFn,e=a.blockStyleFn,f=a.customStyleMap,g=a.customStyleFn,h=a.editorState,j=a.editorKey;a=a.textDirectionality;var k=h.getCurrentContent(),l=h.getSelection(),m=h.mustForceSelection(),n=h.getDecorator(),o=b("nullthrows")(h.getDirectionMap()),p=k.getBlocksAsArray(),q=[],r=null,s=null;for(var t=0;t<p.length;t++){var u=p[t],v=u.getKey(),w=u.getType(),x=d(u),y=void 0,z=void 0,A=void 0;x&&(y=x.component,z=x.props,A=x.editable);x=a?a:o.get(v);var B=b("DraftOffsetKey").encode(v,0,0);z={contentState:k,block:u,blockProps:z,blockStyleFn:e,customStyleMap:f,customStyleFn:g,decorator:n,direction:x,forceSelection:m,key:v,offsetKey:B,selection:l,tree:h.getBlockTree(v)};var C=c.get(w)||c.get("unstyled"),D=C.wrapper;C=C.element||c.get("unstyled").element;var E=u.getDepth(),F="";e&&(F=e(u));if(C==="li"){var G=s!==D||r===null||E>r;F=b("joinClasses")(F,i(w,E,G,x))}w=y||b("DraftEditorBlock.react");E={className:F,"data-block":!0,"data-editor":j,"data-offset-key":B,key:v};A!==void 0&&(E=babelHelpers["extends"]({},E,{contentEditable:A,suppressContentEditableWarning:!0}));G=b("React").createElement(C,E,b("React").createElement(w,z));q.push({block:G,wrapperTemplate:D,key:v,offsetKey:B});D?r=u.getDepth():r=null;s=D}x=[];for(var y=0;y<q.length;){F=q[y];if(F.wrapperTemplate){A=[];do A.push(q[y].block),y++;while(y<q.length&&q[y].wrapperTemplate===F.wrapperTemplate);C=b("React").cloneElement(F.wrapperTemplate,{key:F.key+"-wrap","data-offset-key":F.offsetKey},A);x.push(C)}else x.push(F.block),y++}return b("React").createElement("div",{"data-contents":"true"},x)};function a(){h.apply(this,arguments)}e.exports=a}),null);
__d("DraftEditorDecoratedLeaves.react",["DraftOffsetKey","React","UnicodeBidi","UnicodeBidiDirection"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;g=babelHelpers.inherits(a,b("React").Component);g&&g.prototype;a.prototype.render=function(){var a=this.props,c=a.block,d=a.children,e=a.contentState,f=a.decorator,g=a.decoratorKey,h=a.direction,i=a.leafSet;a=a.text;var j=c.getKey(),k=i.get("leaves"),l=f.getComponentForKey(g);f=f.getPropsForKey(g);j=b("DraftOffsetKey").encode(j,parseInt(g,10),0);g=a.slice(k.first().get("start"),k.last().get("end"));a=b("UnicodeBidiDirection").getHTMLDirIfDifferent(b("UnicodeBidi").getDirection(g),h);return b("React").createElement(l,babelHelpers["extends"]({},f,{contentState:e,decoratedText:g,dir:a,key:j,entityKey:c.getEntityAt(i.get("start")),offsetKey:j}),d)};function a(){g.apply(this,arguments)}e.exports=a}),null);
__d("DraftEditorNode.react",["cx","DraftEditorDecoratedLeaves.react","DraftEditorLeaf.react","DraftOffsetKey","immutable","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;b("immutable").List;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){__p&&__p();var a=this.props,c=a.block,d=a.contentState,e=a.customStyleFn,f=a.customStyleMap,g=a.decorator,h=a.direction,i=a.forceSelection,j=a.hasSelection,k=a.selection;a=a.tree;var l=c.getKey(),m=c.getText(),n=a.size-1;a=this.props.children||a.map(function(a,o){var p=a.get("decoratorKey"),q=a.get("leaves"),r=q.size-1;q=q.map(function(a,d){var g=b("DraftOffsetKey").encode(l,o,d),h=a.get("start");a=a.get("end");return b("React").createElement(b("DraftEditorLeaf.react"),{key:g,offsetKey:g,block:c,start:h,selection:j?k:null,forceSelection:i,text:m.slice(h,a),styleSet:c.getInlineStyleAt(h),customStyleMap:f,customStyleFn:e,isLast:p===n&&d===r})}).toArray();return!p||!g?q:b("React").createElement(b("DraftEditorDecoratedLeaves.react"),{block:c,children:q,contentState:d,decorator:g,decoratorKey:p,direction:h,leafSet:a,text:m,key:o})}).toArray();return b("React").createElement("div",{"data-offset-key":b("DraftOffsetKey").encode(l,0,0),className:"_1mf"+(h==="LTR"?" _1mj":"")+(h==="RTL"?" _1mk":"")},a)};function a(){h.apply(this,arguments)}e.exports=a}),null);
__d("DraftEditorBlockNode.react",["invariant","DraftEditorNode.react","DraftOffsetKey","React","ReactDOM","Scroll","Style","getElementPosition","getScrollPosition","getViewportDimensions","immutable"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=10;b("immutable").List;var j=function(a,b){return a.getAnchorKey()===b||a.getFocusKey()===b},k=function(a,b){var c=a.getNextSiblingKey();return c?b.getBlockForKey(c).getType()===a.getType():!1},l=function(a,c,d){__p&&__p();var e=[];for(var f=d.reverse(),g=Array.isArray(f),h=0,f=g?f:f[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var i;if(g){if(h>=f.length)break;i=f[h++]}else{h=f.next();if(h.done)break;i=h.value}i=i;if(i.type!==c)break;e.push(i)}d.splice(d.indexOf(e[0]),e.length+1);i=e.reverse();c=i[0].key;d.push(b("React").cloneElement(a,{key:c+"-wrap","data-offset-key":b("DraftOffsetKey").encode(c,0,0)},i));return d},m=function(a,b){a=b.get(a.getType())||b.get("unstyled");var c=a.wrapper;a=a.element||b.get("unstyled").element;return{Element:a,wrapperTemplate:c}},n=function(a,b){b=b(a);if(!b)return{};a=b.component;var c=b.props;b=b.editable;return{CustomComponent:a,customProps:c,customEditable:b}},o=function(a,b,c,d,e){b={"data-block":!0,"data-editor":b,"data-offset-key":c,key:a.getKey()};c=d(a);c&&(b.className=c);e.customEditable!==void 0&&(b=babelHelpers["extends"]({},b,{contentEditable:e.customEditable,suppressContentEditableWarning:!0}));return b};h=babelHelpers.inherits(p,b("React").Component);h&&h.prototype;p.prototype.shouldComponentUpdate=function(a){var b=this.props,c=b.block,d=b.direction;b=b.tree;var e=!c.getChildKeys().isEmpty();c=c!==a.block||b!==a.tree||d!==a.direction||j(a.selection,a.block.getKey())&&a.forceSelection;return e||c};p.prototype.componentDidMount=function(){__p&&__p();var a=this.props.selection,c=a.getEndKey();if(!a.getHasFocus()||c!==this.props.block.getKey())return;a=b("ReactDOM").findDOMNode(this);c=b("Style").getScrollParent(a);var d=b("getScrollPosition")(c);if(c===window){var e=b("getElementPosition")(a);e=e.y+e.height;var f=b("getViewportDimensions")().height;e=e-f;e>0&&window.scrollTo(d.x,d.y+e+i)}else{a instanceof HTMLElement||g(0,4852);f=a.offsetHeight+a.offsetTop;a=c.offsetHeight+d.y;e=f-a;e>0&&b("Scroll").setTop(c,b("Scroll").getTop(c)+e+i)}};p.prototype.render=function(){__p&&__p();var a=this.props,c=a.block,d=a.blockRenderMap,e=a.blockRendererFn,f=a.blockStyleFn,g=a.contentState,h=a.decorator,i=a.editorKey,q=a.editorState,r=a.customStyleFn,s=a.customStyleMap,t=a.direction,u=a.forceSelection,v=a.selection;a=a.tree;var w=null;c.children.size&&(w=c.children.reduce(function(j,r){var a=b("DraftOffsetKey").encode(r,0,0),s=g.getBlockForKey(r),c=n(s,e),h=c.CustomComponent||p,t=m(s,d),u=t.Element;t=t.wrapperTemplate;var v=o(s,i,a,f,c);r=babelHelpers["extends"]({},this.props,{tree:q.getBlockTree(r),blockProps:c.customProps,offsetKey:a,block:s});j.push(b("React").createElement(u,v,b("React").createElement(h,r)));if(!t||k(s,g))return j;l(t,u,j);return j}.bind(this),[]));var x=c.getKey(),y=b("DraftOffsetKey").encode(x,0,0),z=n(c,e),A=z.CustomComponent;A=A!=null?b("React").createElement(A,babelHelpers["extends"]({},this.props,{tree:q.getBlockTree(x),blockProps:z.customProps,offsetKey:y,block:c})):b("React").createElement(b("DraftEditorNode.react"),{block:c,children:w,contentState:g,customStyleFn:r,customStyleMap:s,decorator:h,direction:t,forceSelection:u,hasSelection:j(v,x),selection:v,tree:a});if(c.getParentKey())return A;w=m(c,d);r=w.Element;s=o(c,i,y,f,z);return b("React").createElement(r,s,A)};function p(){h.apply(this,arguments)}e.exports=p}),null);
__d("DraftEditorContentsExperimental.react",["DraftEditorBlockNode.react","DraftOffsetKey","React","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;g=babelHelpers.inherits(a,b("React").Component);g&&g.prototype;a.prototype.shouldComponentUpdate=function(a){__p&&__p();var b=this.props.editorState;a=a.editorState;var c=b.getDirectionMap(),d=a.getDirectionMap();if(c!==d)return!0;c=b.getSelection().getHasFocus();d=a.getSelection().getHasFocus();if(c!==d)return!0;c=a.getNativelyRenderedContent();d=b.isInCompositionMode();var e=a.isInCompositionMode();if(b===a||c!==null&&a.getCurrentContent()===c||d&&e)return!1;c=b.getCurrentContent();var f=a.getCurrentContent();b=b.getDecorator();var g=a.getDecorator();return d!==e||c!==f||b!==g||a.mustForceSelection()};a.prototype.render=function(){__p&&__p();var a=this.props,c=a.blockRenderMap,d=a.blockRendererFn,e=a.blockStyleFn,f=a.customStyleMap,g=a.customStyleFn,h=a.editorState,i=a.editorKey;a=a.textDirectionality;var j=h.getCurrentContent(),k=h.getSelection(),l=h.mustForceSelection(),m=h.getDecorator(),n=b("nullthrows")(h.getDirectionMap()),o=j.getBlocksAsArray();o=o[0];var p=[];o=o;while(o){var q=o.getKey(),r={blockRenderMap:c,blockRendererFn:d,blockStyleFn:e,contentState:j,customStyleFn:g,customStyleMap:f,decorator:m,editorKey:i,editorState:h,forceSelection:l,selection:k,block:o,direction:a?a:n.get(q),tree:h.getBlockTree(q)},s=c.get(o.getType())||c.get("unstyled");s=s.wrapper;p.push({block:b("React").createElement(b("DraftEditorBlockNode.react"),babelHelpers["extends"]({key:q},r)),wrapperTemplate:s,key:q,offsetKey:b("DraftOffsetKey").encode(q,0,0)});r=o.getNextSiblingKey();o=r?j.getBlockForKey(r):null}s=[];for(var q=0;q<p.length;){r=p[q];if(r.wrapperTemplate){c=[];do c.push(p[q].block),q++;while(q<p.length&&p[q].wrapperTemplate===r.wrapperTemplate);d=b("React").cloneElement(r.wrapperTemplate,{key:r.key+"-wrap","data-offset-key":r.offsetKey},c);s.push(d)}else s.push(r.block),q++}return b("React").createElement("div",{"data-contents":"true"},s)};function a(){g.apply(this,arguments)}e.exports=a}),null);
__d("DraftEditorContents.react",["gkx","DraftEditorContentsExperimental.react","DraftEditorContents-core.react"],(function(a,b,c,d,e,f){"use strict";a=b("gkx")("676842");e.exports=a?b("DraftEditorContentsExperimental.react"):b("DraftEditorContents-core.react")}),null);
__d("DefaultDraftBlockRenderMap",["cx","immutable","React"],(function(a,b,c,d,e,f,g){"use strict";a=b("immutable").Map;c=b("React").createElement("ul",{className:"_1bv0"});d=b("React").createElement("ol",{className:"_1bv1"});f=b("React").createElement("pre",{className:"_1bv2"});g=a({"header-one":{element:"h1"},"header-two":{element:"h2"},"header-three":{element:"h3"},"header-four":{element:"h4"},"header-five":{element:"h5"},"header-six":{element:"h6"},"unordered-list-item":{element:"li",wrapper:c},"ordered-list-item":{element:"li",wrapper:d},blockquote:{element:"blockquote"},atomic:{element:"figure"},"code-block":{element:"pre",wrapper:f},unstyled:{element:"div",aliasedElements:["p"]}});e.exports=g}),null);
__d("DefaultDraftInlineStyle",[],(function(a,b,c,d,e,f){"use strict";e.exports={BOLD:{fontWeight:"bold"},CODE:{fontFamily:"monospace",wordWrap:"break-word"},ITALIC:{fontStyle:"italic"},STRIKETHROUGH:{textDecoration:"line-through"},UNDERLINE:{textDecoration:"underline"}}}),null);
__d("AbstractTokenizer.react",["cx","AbstractTypeahead.react","LogicalGrid.react","React","ReactDOM","TokenizerToken.react","idx","emptyFunction","ex","getActiveElement","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();var h;c=b("React").PropTypes;d=babelHelpers.inherits(a,b("React").Component);h=d&&d.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=h.constructor).call.apply(a,[this].concat(e)),this.state={queryString:""},this.$1=function(){return this.props.queryString||this.state.queryString}.bind(this),this.$2=function(){return this.props.limit&&this.props.entries?this.props.entries.length>=this.props.limit:!1}.bind(this),this.clearActiveEntries=function(){this.refs.typeahead&&this.refs.typeahead.clearActiveEntries()}.bind(this),this.focusInput=function(){this.refs&&this.refs.typeahead&&this.refs.typeahead.focusInput()}.bind(this),this.blurInput=function(){this.refs&&this.refs.typeahead&&this.refs.typeahead.blurInput()}.bind(this),this.$6=function(a){a.preventDefault();if(this.refs&&this.refs.typeahead){var c=this.refs.typeahead.getTextFieldDOM();(c!==a.target||c!==b("getActiveElement")())&&this.focusInput()}}.bind(this),this.$7=function(){this.props.onTypeaheadMouseDown&&this.props.onTypeaheadMouseDown()}.bind(this),this.$9=function(a){if(this.$2())return;var b=a.target.value,c=this.props.tokenizeQueryString(b);c?this.$8(c):this.props.queryString==null&&this.setState({queryString:b});this.props.onQueryStringChange&&this.props.onQueryStringChange(a)}.bind(this),this.$10=function(){var a=this.$1();a=this.props.tokenizeQueryStringOnBlur(a);a&&this.$14(a);this.props.onInputBlur()}.bind(this),this.$8=function(a){this.$15(a),this.props.focusAfterSelection&&setTimeout(this.focusInput,0)}.bind(this),this.$14=function(a){this.$15(a)}.bind(this),this.$15=function(a){a&&(this.props.onAddEntryAttempt(a),this.props.queryString==null&&this.props.shouldClearQueryStringAfterSelect&&this.setState({queryString:""}))}.bind(this),this.$16=function(a){this.props.onRemoveEntryAttempt(a)}.bind(this),this.$11=function(a){__p&&__p();var b=this.props.entries;if(b&&!this.$1()&&b.length){var c=this.getInputPosition();if(c>0){b=b[c-1];this.props.onRemoveEntryAttempt(b);a.preventDefault()}setTimeout(this.focusInput,0)}}.bind(this),this.$13=function(){var a=b("ReactDOM").findDOMNode(this.refs.textSizeProxy).offsetWidth;if(a===0)return;this.refs.typeahead.getTextFieldDOM().style.width=a+"px"}.bind(this),this.onBackgroundDragOver=function(a){a.preventDefault();a=a.nativeEvent.dataTransfer;a&&(a.dropEffect="move");a=this.props.entries;this.onTokenDragOver(a[a.length-1],a.length-1,!1)}.bind(this),this.onBackgroundDrop=function(a){this.onTokenDrop(null,this.props.entries.length)}.bind(this),this.onTokenDragStart=function(a,b){this.setState({draggingIndex:b})}.bind(this),this.onTokenDragEnd=function(a,b){this.setState({draggingIndex:null})}.bind(this),this.onTokenDragLeave=function(a,b){if(this.leaveTimer)return;this.leaveTimer=setTimeout(function(){this.leaveTimer=null;if(this.state.dragTargetIndex===null)return;this.setState({dragTargetIndex:null})}.bind(this),100)}.bind(this),this.onTokenDragOver=function(a,b,c){this.leaveTimer&&(clearTimeout(this.leaveTimer),this.leaveTimer=null);if(this.state.draggingIndex!==null&&this.state.draggingIndex!==b&&this.props.onReorderEntryAttempt){if(this.state.dragTargetIndex===b&&this.state.draggedOverLeftSideOfElement===c)return;this.setState({dragTargetIndex:b,draggedOverLeftSideOfElement:c})}}.bind(this),this.onTokenDrop=function(a,b){this.state.draggingIndex!==null&&this.props.onReorderEntryAttempt&&(this.state.draggedOverLeftSideOfElement||b++,this.state.draggingIndex!==b&&this.props.onReorderEntryAttempt(this.state.draggingIndex,b)),this.setState({draggingIndex:null,dragTargetIndex:null,draggedOverLeftSideOfElement:null})}.bind(this),c}a.prototype.UNSAFE_componentWillReceiveProps=function(a){"use strict";a.queryString==null&&this.props.queryString!=null&&this.setState({queryString:this.props.queryString})};a.prototype.getInputPosition=function(){"use strict";var a=this.props.entries?this.props.entries.length:0,b=this.props.inputPosition;if(b===void 0||b===null)return a;if(b<0)return 0;return b>a?a:b};a.prototype.$3=function(a){"use strict";var b=this.props.onChangeInputPositionAttempt;b&&(b(a),setTimeout(this.focusInput,0))};a.prototype.$4=function(a){"use strict";return b("React").createElement("span",{key:"inputSelectionArea"+a,className:b("joinClasses")("_4tb6",this.props.inputPostionAreaClassName),onClick:function(){return this.$3(a)}.bind(this)})};a.prototype.render=function(){"use strict";__p&&__p();var a=!!this.props.onReorderEntryAttempt;a=b("joinClasses")("_58-2"+(a?" _5ph3":""),"clearfix",this.props.className);var c=[],d=this.props.entries,e={},f=d&&d.length>0,g;if(f)for(var h=0,i=d.length;h<i;h++){var j=d[h];g=j.getUniqueID();c[h]=this.$5(j,h);this.props.excludeTokenEntries&&(e[g]=!0)}if(this.props.excludedEntries)for(g in this.props.excludedEntries)e[g]=this.props.excludedEntries[g];j=null;(!f||this.props.alwaysShowPlaceholder)&&(j=this.props.placeholder);d=this.props.logicalGridOnManageFocus;h=Object.assign({},this.props);delete h.additionalEntries;delete h.alwaysShowPlaceholder;delete h.autoComplete;delete h.autoHighlight;delete h.context;delete h.entrySpecificClassNamesMap;delete h.excludeTokenEntries;delete h.extraTokenRendererProps;delete h.extraTypeaheadProps;delete h.focusAfterSelection;delete h.focusedOnInit;delete h.inputClassName;delete h.inputPosition;delete h.inputPostionAreaClassName;delete h.tokenClassName;delete h.placeholder;delete h.queryString;delete h.searchSource;delete h.searchSourceOptions;delete h.shouldClearQueryStringAfterSelect;delete h.showEntriesOnFocus;delete h.presenter;delete h.entries;delete h.onAddEntryAttempt;delete h.onChangeInputPositionAttempt;delete h.onEditEntryAttempt;delete h.onEnter;delete h.onEnterWithoutSelection;delete h.onEntriesFound;delete h.onPaste;delete h.onRemoveEntryAttempt;delete h.onReorderEntryAttempt;delete h.onQueryStringChange;delete h.onInputFocus;delete h.onInputBlur;delete h.onTypeaheadMouseDown;delete h.logicalGridOnManageFocus;delete h.excludedEntries;delete h.inputID;delete h.entriesWidthMatchContext;delete h.hideViewWithEntries;delete h.disabled;delete h.typeaheadInputStyle;delete h.limit;delete h.selectOnBlur;delete h.selectOnComma;delete h.selectOnTab;delete h.selectOnSpace;delete h.tokenizeQueryString;delete h.tokenizeQueryStringOnBlur;i=this.getInputPosition();g=!!this.props.onChangeInputPositionAttempt;var k;if(g){f=[];g=void 0;for(var l=0;l<c.length;l++)i===l?g=f.length:f.push(this.$4(l)),f.push(c[l]);g!==void 0?f.push(this.$4(c.length)):g=f.length;l=b("React").createElement(b("LogicalGrid.react"),{component:b("React").createElement("span",null),onManageFocus:d},f.slice(0,g));k=b("React").createElement(b("LogicalGrid.react"),{initialFocusCellCoordinate:[g/2,0],component:b("React").createElement("span",null),onManageFocus:d},f.slice(g))}else l=b("React").createElement(b("LogicalGrid.react"),{component:b("React").createElement("span",null),onManageFocus:d},c);return b("React").createElement("div",babelHelpers["extends"]({},h,{className:b("joinClasses")(this.props.className,a),placeholder:null,onClick:this.$6,onMouseDown:this.$7,onDragOver:this.onBackgroundDragOver,onDrop:this.onBackgroundDrop,tabIndex:null,"data-testid":this.props["data-testid"]}),l,b("React").createElement(b("AbstractTypeahead.react"),babelHelpers["extends"]({},this.props.extraTypeaheadProps,{ref:"typeahead",selectedEntry:null,className:"_58-0",ariaLabel:this.props.placeholder,"data-testid":this.props["data-testid"],inputClassName:this.props.inputClassName,showEntriesOnFocus:this.props.showEntriesOnFocus,queryString:this.$1(),placeholder:j,presenter:this.props.presenter,searchSource:this.props.searchSource,searchSourceOptions:this.props.searchSourceOptions,additionalEntries:this.props.additionalEntries,excludedEntries:e,onSelectAttempt:this.$8,onEntriesFound:this.props.onEntriesFound,onEnterWithoutSelection:this.props.onEnterWithoutSelection,onChange:this.$9,onFocus:this.props.onInputFocus,onBlur:this.$10,onBackspace:this.$11,onPaste:this.props.onPaste,tabIndex:this.props.tabIndex,autoComplete:this.props.autoComplete,autoHighlight:this.props.autoHighlight,selectOnBlur:this.props.selectOnBlur,selectOnComma:this.props.selectOnComma,selectOnTab:this.props.selectOnTab,selectOnSpace:this.props.selectOnSpace,context:this.props.context,focusedOnInit:this.props.focusedOnInit,focusAfterSelection:this.props.focusAfterSelection,inputID:this.props.inputID,entriesWidthMatchContext:this.props.entriesWidthMatchContext,hideViewWithEntries:this.props.hideViewWithEntries,disabled:this.props.disabled,inputStyle:this.props.typeaheadInputStyle})),b("React").createElement("span",{ref:"textSizeProxy",className:"_58-3","aria-hidden":"true"},this.$1()||j),k)};a.prototype.componentDidMount=function(){"use strict";this.$12=setTimeout(this.$13,0)};a.prototype.componentDidUpdate=function(){"use strict";clearTimeout(this.$12),this.$12=setTimeout(this.$13,0)};a.prototype.componentWillUnmount=function(){"use strict";clearTimeout(this.$12)};a.prototype.$5=function(a,c){"use strict";var d=this.props.presenter.TokenRenderer||b("TokenizerToken.react"),e=this.state.draggingIndex===c,f=!!this.props.onReorderEntryAttempt,g=this.state.dragTargetIndex===c;e=b("joinClasses")("_2ei6"+(e?" _5ph4":"")+(g?" _5o8i":"")+(g&&this.state.draggedOverLeftSideOfElement?" _5o8j":"")+(g&&!this.state.draggedOverLeftSideOfElement?" _5o8k":""),this.props.tokenClassName);this.props.entrySpecificClassNamesMap&&(e=b("joinClasses")(e,this.props.entrySpecificClassNamesMap[a.getUniqueID()]));g=this.props.getDynamicTokenRendererProps?this.props.getDynamicTokenRendererProps(a):{};return b("React").createElement(d,babelHelpers["extends"]({},this.props.extraTokenRendererProps,{className:e,key:a.getUniqueID(),label:a.getTitle(),entry:a,index:c,onRemove:this.$16,isDragDropEnabled:f,onTokenDragStart:this.onTokenDragStart,onTokenDragEnd:this.onTokenDragEnd,onTokenDragOver:this.onTokenDragOver,onTokenDragLeave:this.onTokenDragLeave,onTokenDrop:this.onTokenDrop,onEditEntryAttempt:this.props.onEditEntryAttempt,disabled:this.props.disabled},g))};a.propTypes={alwaysShowPlaceholder:c.bool,autoComplete:c.string,className:c.string,entrySpecificClassNamesMap:c.object,excludeTokenEntries:c.bool,extraTokenRendererProps:c.object,getDynamicTokenRendererProps:c.func,extraTypeaheadProps:c.object,focusAfterSelection:c.bool,inputClassName:c.string,tokenClassName:c.string,placeholder:c.string,queryString:c.string,searchSource:c.object.isRequired,searchSourceOptions:c.object,shouldClearQueryStringAfterSelect:c.bool,presenter:c.object.isRequired,entries:c.array,onAddEntryAttempt:c.func.isRequired,onEntriesFound:c.func,onPaste:c.func,onRemoveEntryAttempt:c.func.isRequired,onReorderEntryAttempt:c.func,onEditEntryAttempt:c.func,onQueryStringChange:c.func,onInputFocus:c.func,onInputBlur:c.func,onTypeaheadMouseDown:c.func,additionalEntries:c.array,excludedEntries:c.object,inputID:c.string,entriesWidthMatchContext:c.bool,hideViewWithEntries:c.bool,disabled:c.bool,typeaheadInputStyle:c.object,limit:function(a,c,d){d=a[c];a=d==null||typeof d==="number"&&d>0;return!a?new Error(b("ex")("Invalid entries limit `%s` provided, must be a positive number if set.",d)):null},selectOnBlur:c.bool,selectOnComma:c.bool,selectOnTab:c.bool,selectOnSpace:c.bool,tokenizeQueryString:c.func,tokenizeQueryStringOnBlur:c.func,inputPosition:c.number,onChangeInputPositionAttempt:c.func,inputPostionAreaClassName:c.string};a.defaultProps={autoHighlight:!0,autoComplete:"off",excludeTokenEntries:!0,focusAfterSelection:!0,hideViewWithEntries:!0,onInputBlur:b("emptyFunction"),selectOnBlur:!1,selectOnComma:!1,selectOnTab:!0,selectOnSpace:!1,shouldClearQueryStringAfterSelect:!0,tokenizeQueryString:b("emptyFunction").thatReturnsNull,tokenizeQueryStringOnBlur:b("emptyFunction").thatReturnsNull,entriesWidthMatchContext:!0};e.exports=a}),null);