window.scriptsLoaded = window.scriptsLoaded || {}; window.scriptProcessStart = window.scriptProcessStart || {}; window.scriptProcessStart['owa.1.mail.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[1],{2705:function(e,t,r){"use strict";var o=r(859),i=r(2897),s=r(18),n={root:"ms-TextField",description:"ms-TextField-description",errorMessage:"ms-TextField-errorMessage",field:"ms-TextField-field",fieldGroup:"ms-TextField-fieldGroup",prefix:"ms-TextField-prefix",suffix:"ms-TextField-suffix",wrapper:"ms-TextField-wrapper",multiline:"ms-TextField--multiline",borderless:"ms-TextField--borderless",underlined:"ms-TextField--underlined",unresizable:"ms-TextField--unresizable",required:"is-required",disabled:"is-disabled",active:"is-active"};function a(e){var t=e.underlined,r=e.disabled,o=e.focused;return function(){return{root:[t&&r&&{color:e.theme.palette.neutralTertiary},t&&{fontSize:s.FontSizes.medium,marginRight:8,paddingLeft:12,paddingRight:0,lineHeight:"22px",height:32},t&&o&&{selectors:(i={},i[s.HighContrastSelector]={height:31},i)}]};var i}}r.d(t,"a",function(){return l});var l=Object(o.a)(i.a,function(e){var t,r,o,i,l,d,u,p,c,h=e.theme,f=e.className,m=e.disabled,g=e.focused,_=e.required,b=e.multiline,v=e.hasLabel,x=e.borderless,y=e.underlined,C=e.hasIcon,E=e.resizable,S=e.hasErrorMessage,F=e.iconClass,R=e.inputClassName,T=e.autoAdjustHeight,B=h.semanticColors,V=Object(s.getGlobalClassNames)(n,h),N={background:B.disabledBackground,color:m?B.disabledText:B.inputPlaceholderText,display:"flex",alignItems:"center",padding:"0 10px",lineHeight:1,whiteSpace:"nowrap",flexShrink:0};return{root:[V.root,h.fonts.medium,_&&V.required,m&&V.disabled,g&&V.active,b&&V.multiline,x&&V.borderless,y&&V.underlined,s.normalize,{position:"relative"},f],wrapper:[V.wrapper,y&&{display:"flex",borderBottomWidth:1,borderBottomStyle:"solid",borderBottomColor:B.inputBorder,width:"100%"},S&&y&&!m&&{borderBottomColor:B.errorText,selectors:{":hover":{borderBottomColor:B.errorText,selectors:(t={},t[s.HighContrastSelector]={borderBottomColor:"Highlight"},t)}}},y&&m&&{borderBottomColor:B.disabledBackground},y&&!m&&!g&&!S&&{selectors:{":hover":{borderBottomColor:B.inputBorderHovered,selectors:(r={},r[s.HighContrastSelector]={borderBottomColor:"Highlight"},r)}}},y&&g&&{borderBottomColor:S?B.errorText:B.inputFocusBorderAlt,selectors:(o={},o[s.HighContrastSelector]={borderBottomWidth:2,borderBottomColor:"Highlight"},o)}],fieldGroup:[V.fieldGroup,s.normalize,{border:"1px solid "+B.inputBorder,background:B.inputBackground,cursor:"text",height:32,display:"flex",flexDirection:"row",alignItems:"stretch",position:"relative",selectors:{":hover":{selectors:(i={},i[s.HighContrastSelector]={borderColor:"Highlight"},i)}}},b&&{minHeight:"60px",height:"auto",display:"flex"},x&&{border:"none"},!g&&!m&&{selectors:{":hover":{borderColor:B.inputBorderHovered}}},g&&{borderColor:B.inputFocusBorderAlt,selectors:(l={},l[s.HighContrastSelector]={borderWidth:2,borderColor:"Highlight"},l)},m&&{backgroundColor:B.disabledBackground,borderColor:B.disabledBackground,cursor:"default"},y&&{flex:"1 1 0px",border:"none",textAlign:"left"},y&&g&&{selectors:(d={},d[s.HighContrastSelector]={height:31},d)},y&&m&&{backgroundColor:"transparent"},S&&{borderColor:B.errorText,selectors:{"&:focus, &:hover":{borderColor:B.errorText}}},S&&g&&{borderColor:B.errorText},!v&&_&&{selectors:(u={":after":{content:"'*'",color:B.errorText,position:"absolute",top:-5,right:-10}},u[s.HighContrastSelector]={selectors:{":after":{right:-14}}},u)}],field:[h.fonts.medium,V.field,s.normalize,{fontSize:s.FontSizes.medium,borderRadius:0,border:"none",background:"none",backgroundColor:"transparent",color:B.inputText,padding:"0 12px",width:"100%",minWidth:0,textOverflow:"ellipsis",outline:0,selectors:{"&:active, &:focus, &:hover":{outline:0},"::-ms-clear":{display:"none"},"::placeholder":[h.fonts.medium,{color:B.inputPlaceholderText,opacity:1}],":-ms-input-placeholder":[h.fonts.medium,{color:B.inputPlaceholderText,opacity:1}]}},b&&!E&&[V.unresizable,{resize:"none"}],b&&{minHeight:"inherit",lineHeight:17,flexGrow:1,paddingTop:6,overflow:"auto",width:"100%"},b&&T&&{overflow:"hidden"},C&&{paddingRight:24},b&&C&&{paddingRight:40},m&&{backgroundColor:"transparent",borderColor:"transparent",color:B.disabledText,selectors:{"::placeholder":{color:B.disabledText},":-ms-input-placeholder":{color:B.disabledText}}},y&&{textAlign:"left"},g&&!x&&{selectors:(p={},p[s.HighContrastSelector]={paddingLeft:11,paddingRight:11},p)},g&&b&&!x&&{selectors:(c={},c[s.HighContrastSelector]={paddingTop:4},c)},R],icon:[b&&{paddingRight:24,paddingBottom:8,alignItems:"flex-end"},{pointerEvents:"none",position:"absolute",bottom:5,right:8,top:"auto",fontSize:16,lineHeight:18},m&&{color:B.disabledText},F],description:[V.description,{color:B.bodySubtext,fontSize:s.FontSizes.xSmall}],errorMessage:[V.errorMessage,s.AnimationClassNames.slideDownIn20,h.fonts.small,{color:B.errorText,margin:0,paddingTop:5,display:"flex",alignItems:"center"}],prefix:[V.prefix,N],suffix:[V.suffix,N],subComponentStyles:{label:a(e)}}},void 0,{scope:"TextField"})},2897:function(e,t,r){"use strict";r.d(t,"a",function(){return m});var o=r(0),i=r(3),s=r(1535),n=r(354),a=r(237),l=r(1333),d=r(245),u=r(1331),p=r(126),c=r(128),h=Object(a.a)(),f="",m=function(e){function t(t){var r=e.call(this,t)||this;return r._textElement=Object(l.a)(),r._onFocus=function(e){r.props.onFocus&&r.props.onFocus(e),r.setState({isFocused:!0}),r.props.validateOnFocusIn&&r._validate(r.state.value)},r._onBlur=function(e){r.props.onBlur&&r.props.onBlur(e),r.setState({isFocused:!1}),r.props.validateOnFocusOut&&r._validate(r.state.value)},r._onRenderLabel=function(e){var t=e.label,o=e.required,n=r._classNames.subComponentStyles?r._classNames.subComponentStyles.label:void 0;return t?i.createElement(s.a,{required:o,htmlFor:r._id,styles:n,disabled:e.disabled},e.label):null},r._onRenderDescription=function(e){return e.description?i.createElement("span",{className:r._classNames.description},e.description):null},r._onInputChange=function(e){e.persist();var t=e.target.value;if(t!==r._latestValue){r._latestValue=t,r.setState({value:t},function(){r._adjustInputHeight(),r.props.onChange&&r.props.onChange(e,t),r.props.onChanged&&r.props.onChanged(t)});var o=r.props,i=o.validateOnFocusIn,s=o.validateOnFocusOut;i||s||r._delayedValidate(t),r.props.onBeforeChange&&r.props.onBeforeChange(t)}},r._warnDeprecations({iconClass:"iconProps",addonString:"prefix",onRenderAddon:"onRenderPrefix",onChanged:"onChange"}),r._warnMutuallyExclusive({value:"defaultValue"}),r._id=t.id||Object(d.getId)("TextField"),r._descriptionId=Object(d.getId)("TextFieldDescription"),void 0!==t.value?r._latestValue=t.value:void 0!==t.defaultValue?r._latestValue=t.defaultValue:r._latestValue=f,r.state={value:r._latestValue,isFocused:!1,errorMessage:""},r._delayedValidate=r._async.debounce(r._validate,r.props.deferredValidationTime),r._lastValidation=0,r}return o.__extends(t,e),Object.defineProperty(t.prototype,"value",{get:function(){return this.state.value},enumerable:!0,configurable:!0}),t.prototype.componentDidMount=function(){this._isMounted=!0,this._adjustInputHeight(),this.props.validateOnLoad&&this._validate(this.state.value)},t.prototype.componentWillReceiveProps=function(e){var t=this.props.onBeforeChange;if(e.value!==this.state.value&&(void 0!==e.value||void 0!==this.props.value)){t&&t(e.value),this._id=e.id||this._id,this._setValue(e.value);var r=e.validateOnFocusIn,o=e.validateOnFocusOut;r||o||this._delayedValidate(e.value)}e.defaultValue!==this.props.defaultValue&&void 0===e.value&&this._setValue(e.defaultValue),!!e.multiline!=!!this.props.multiline&&this.state.isFocused&&(this._shouldResetFocusAfterRender=!0,this._selectionBeforeInputTypeChange=[this.selectionStart,this.selectionEnd])},t.prototype.componentDidUpdate=function(){if(this._shouldResetFocusAfterRender&&(this._shouldResetFocusAfterRender=!1,this.focus(),this._selectionBeforeInputTypeChange)){var e=this._selectionBeforeInputTypeChange,t=e[0],r=e[1];null!==t&&null!==r&&this.setSelectionRange(t,r)}},t.prototype.componentWillUnmount=function(){this._isMounted=!1},t.prototype.render=function(){var e=this.props,t=e.borderless,r=e.className,s=e.disabled,a=e.iconClass,l=e.iconProps,d=e.inputClassName,p=e.label,c=e.multiline,f=e.required,m=e.underlined,g=e.addonString,_=e.prefix,b=e.resizable,v=e.suffix,x=e.theme,y=e.styles,C=e.autoAdjustHeight,E=e.onRenderAddon,S=void 0===E?this._onRenderAddon:E,F=e.onRenderPrefix,R=void 0===F?this._onRenderPrefix:F,T=e.onRenderSuffix,B=void 0===T?this._onRenderSuffix:T,V=e.onRenderLabel,N=void 0===V?this._onRenderLabel:V,O=e.onRenderDescription,I=void 0===O?this._onRenderDescription:O,H=this.state.isFocused,A=this._errorMessage;return this._classNames=h(y,{theme:x,className:r,disabled:s,focused:H,required:f,multiline:c,hasLabel:!!p,hasErrorMessage:!!A,borderless:t,resizable:b,hasIcon:!!l,underlined:m,iconClass:a,inputClassName:d,autoAdjustHeight:C}),i.createElement("div",{className:this._classNames.root},i.createElement("div",{className:this._classNames.wrapper},N(this.props,this._onRenderLabel),i.createElement("div",{className:this._classNames.fieldGroup},(void 0!==g||this.props.onRenderAddon)&&i.createElement("div",{className:this._classNames.prefix},S(this.props,this._onRenderAddon)),(void 0!==_||this.props.onRenderPrefix)&&i.createElement("div",{className:this._classNames.prefix},R(this.props,this._onRenderPrefix)),c?this._renderTextArea():this._renderInput(),(a||l)&&i.createElement(n.a,o.__assign({className:this._classNames.icon},l)),(void 0!==v||this.props.onRenderSuffix)&&i.createElement("div",{className:this._classNames.suffix},B(this.props,this._onRenderSuffix)))),this._isDescriptionAvailable&&i.createElement("span",{id:this._descriptionId},I(this.props,this._onRenderDescription),A&&i.createElement("div",{role:"alert"},i.createElement(u.a,null,i.createElement("p",{className:this._classNames.errorMessage},i.createElement("span",{"data-automation-id":"error-message"},A))))))},t.prototype.focus=function(){this._textElement.current&&this._textElement.current.focus()},t.prototype.blur=function(){this._textElement.current&&this._textElement.current.blur()},t.prototype.select=function(){this._textElement.current&&this._textElement.current.select()},t.prototype.setSelectionStart=function(e){this._textElement.current&&(this._textElement.current.selectionStart=e)},t.prototype.setSelectionEnd=function(e){this._textElement.current&&(this._textElement.current.selectionEnd=e)},Object.defineProperty(t.prototype,"selectionStart",{get:function(){return this._textElement.current?this._textElement.current.selectionStart:-1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"selectionEnd",{get:function(){return this._textElement.current?this._textElement.current.selectionEnd:-1},enumerable:!0,configurable:!0}),t.prototype.setSelectionRange=function(e,t){this._textElement.current&&this._textElement.current.setSelectionRange(e,t)},t.prototype._setValue=function(e){var t=this;this._latestValue=e,this.setState({value:e||f,errorMessage:""},function(){t._adjustInputHeight()})},t.prototype._onRenderAddon=function(e){var t=e.addonString;return i.createElement("span",{style:{paddingBottom:"1px"}},t)},t.prototype._onRenderPrefix=function(e){var t=e.prefix;return i.createElement("span",{style:{paddingBottom:"1px"}},t)},t.prototype._onRenderSuffix=function(e){var t=e.suffix;return i.createElement("span",{style:{paddingBottom:"1px"}},t)},Object.defineProperty(t.prototype,"_errorMessage",{get:function(){var e=this.state.errorMessage;return!e&&this.props.errorMessage&&(e=this.props.errorMessage),e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_isDescriptionAvailable",{get:function(){var e=this.props;return!!(e.onRenderDescription||e.description||this._errorMessage)},enumerable:!0,configurable:!0}),t.prototype._renderTextArea=function(){var e=Object(p.f)(this.props,p.j,["defaultValue"]);return i.createElement("textarea",o.__assign({id:this._id},e,{ref:this._textElement,value:this.state.value,onInput:this._onInputChange,onChange:this._onInputChange,className:this._classNames.field,"aria-describedby":this._isDescriptionAvailable?this._descriptionId:this.props["aria-describedby"],"aria-invalid":!!this._errorMessage,"aria-label":this.props.ariaLabel,readOnly:this.props.readOnly,onFocus:this._onFocus,onBlur:this._onBlur}))},t.prototype._renderInput=function(){var e=Object(p.f)(this.props,p.i,["defaultValue"]);return i.createElement("input",o.__assign({type:"text",id:this._id},e,{ref:this._textElement,value:this.state.value,onInput:this._onInputChange,onChange:this._onInputChange,className:this._classNames.field,"aria-label":this.props.ariaLabel,"aria-describedby":this._isDescriptionAvailable?this._descriptionId:this.props["aria-describedby"],"aria-invalid":!!this._errorMessage,readOnly:this.props.readOnly,onFocus:this._onFocus,onBlur:this._onBlur}))},t.prototype._validate=function(e){var t=this,r=this.props,o=r.validateOnFocusIn,i=r.validateOnFocusOut;if(this._latestValidateValue!==e||o||i){this._latestValidateValue=e;var s=(0,this.props.onGetErrorMessage)(e||"");if(void 0!==s)if("string"==typeof s)this.setState({errorMessage:s}),this._notifyAfterValidate(e,s);else{var n=++this._lastValidation;s.then(function(r){t._isMounted&&n===t._lastValidation&&t.setState({errorMessage:r}),t._notifyAfterValidate(e,r)})}else this._notifyAfterValidate(e,"")}},t.prototype._notifyAfterValidate=function(e,t){this._isMounted&&e===this.state.value&&this.props.onNotifyValidationResult&&this.props.onNotifyValidationResult(t,e)},t.prototype._adjustInputHeight=function(){if(this._textElement.current&&this.props.autoAdjustHeight&&this.props.multiline){var e=this._textElement.current;e.style.height="",e.style.height=e.scrollHeight+"px"}},t.defaultProps={multiline:!1,resizable:!0,autoAdjustHeight:!1,underlined:!1,borderless:!1,onChange:function(){},onBeforeChange:function(){},onNotifyValidationResult:function(){},onGetErrorMessage:function(){},deferredValidationTime:200,errorMessage:"",validateOnFocusIn:!1,validateOnFocusOut:!1,validateOnLoad:!0},t}(c.a)}}]);
//# sourceMappingURL=owa.1.mail.js.map
window.scriptsLoaded['owa.1.mail.js'] = 1; window.scriptProcessEnd = window.scriptProcessEnd || {}; window.scriptProcessEnd['owa.1.mail.js'] = (new Date()).getTime();