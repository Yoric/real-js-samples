if (self.CavalryLogger) { CavalryLogger.start_js(["lnMqr"]); }

__d("ReactAbstractContextualDialog",["ContextualDialog","ContextualDialogArrow","ContextualDialogKeepInViewport","LayerAutoFocus","LayerHideOnBlur","LayerHideOnEscape","LayerRefocusOnHide","React","ReactDOM"],(function(a,b,c,d,e,f){__p&&__p();var g=b("React").PropTypes;a={createSpec:function(a){__p&&__p();return{displayName:a.displayName,propTypes:{position:g.oneOf(["above","below","left","right"]),alignment:g.oneOf(["left","center","right"]),offsetX:g.number,offsetY:g.number,width:g.number,autoFocus:g.bool,focusContextOnHide:g.bool,arrowBehavior:g.func,behaviors:g.object,shown:g.bool,context:g.object,contextRef:g.func,dialogRole:g.oneOf(["dialog","region","alert"]),hoverContext:g.object,hoverContextRef:g.func,hoverShowDelay:g.number,hoverHideDelay:g.number,hideOnBlur:g.bool,hideOnEscape:g.bool,insertParent:g.object,keepInViewport:g.bool,label:g.node,labelledBy:g.string,onBeforeHide:g.func,onToggle:g.func,hasActionableContext:g.bool,"data-testid":g.string},immutableProps:{modal:null},createLayer:function(c){__p&&__p();var d=this.props.context||b("ReactDOM").findDOMNode(this.props.contextRef()),e=this.props.hoverContext||this.props.hoverContextRef&&b("ReactDOM").findDOMNode(this.props.hoverContextRef());this.isHoverContextSet=e!=null;e=babelHelpers["extends"]({context:d,hoverContext:e,hoverShowDelay:this.props.hoverShowDelay,hoverHideDelay:this.props.hoverHideDelay,position:this.props.position,alignment:this.props.alignment,offsetX:this.props.offsetX,offsetY:this.props.offsetY,width:this.props.width,dialogRole:this.props.dialogRole,label:this.props.label,labelledBy:this.props.labelledBy,shouldSetARIAProperties:!this.props.hasActionableContext,arrowBehavior:this.props.arrowBehavior||b("ContextualDialogArrow"),addedBehaviors:this.enumerateBehaviors(this.props.behaviors),"data-testid":this.props["data-testid"]},a||{});e=new(b("ContextualDialog"))(e,c);this.props.contextBounds&&e.setContextWithBounds(d,this.props.contextBounds);this.props.autoFocus!==!1&&e.enableBehavior(b("LayerAutoFocus"));this.props.hideOnBlur===!0&&e.enableBehavior(b("LayerHideOnBlur"));this.props.hideOnEscape===!0&&e.enableBehavior(b("LayerHideOnEscape"));this.props.focusContextOnHide===!1&&e.disableBehavior(b("LayerRefocusOnHide"));this.props.keepInViewport===!1&&e.disableBehavior(b("ContextualDialogKeepInViewport"));this.props.onBeforeHide&&e.subscribe("beforehide",this.props.onBeforeHide);this.props.insertParent&&e.setInsertParent(this.props.insertParent);e.conditionShow(this.props.shown);return e},receiveProps:function(a,c){this.updateBehaviors(c.behaviors,a.behaviors);var d=a.context||a.contextRef&&b("ReactDOM").findDOMNode(a.contextRef());d&&(a.contextBounds?this.layer.setContextWithBounds(d,a.contextBounds):this.layer.setContext(d));c.hideOnEscape!==a.hideOnEscape&&(a.hideOnEscape?this.layer.enableBehavior(b("LayerHideOnEscape")):this.layer.disableBehavior(b("LayerHideOnEscape")));this.layer.setPosition(a.position).setAlignment(a.alignment).setOffsetX(a.offsetX).setOffsetY(a.offsetY).setWidth(a.width);(!this.isHoverContextSet||a.shown!==void 0)&&this.layer.conditionShow(a.shown)}}}};e.exports=a}),null);
__d("formatNumber",["fbt","intlNumUtils"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function a(a,c){return b("intlNumUtils").formatNumber(a,c)}function h(a,c){c=g._({"*":"{number}+"},[g._param("number",b("intlNumUtils").formatNumberWithThousandDelimiters(a,c),[0,a])]);return c.toString()}function i(a,c){c=g._({"*":"\u003C {number}"},[g._param("number",b("intlNumUtils").formatNumberWithThousandDelimiters(a,c),[0,a])]);return c.toString()}function c(a,c,d){return a>c?h(c,d):b("intlNumUtils").formatNumberWithThousandDelimiters(a,d)}function d(a,c,d){return a<c?i(c,d):b("intlNumUtils").formatNumberWithThousandDelimiters(a,d)}a.withThousandDelimiters=b("intlNumUtils").formatNumberWithThousandDelimiters;a.withMaxLimit=c;a.withMinLimit=d;e.exports=a}),null);