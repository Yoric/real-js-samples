window.scriptsLoaded = window.scriptsLoaded || {}; window.scriptProcessStart = window.scriptProcessStart || {}; window.scriptProcessStart['owa.vendors~Addins~addins-marketplace.mail.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[36],{1225:function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return r});var s=n(18),o=s.AnimationVariables.durationValue2,i={root:"ms-Modal",main:"ms-Dialog-main",scrollableContent:"ms-Modal-scrollableContent",isOpen:"is-open",layer:"ms-Modal-Layer"},r=function(e){var t=e.className,n=e.containerClassName,r=e.scrollableContentClassName,a=e.isOpen,l=e.isVisible,u=e.hasBeenOpened,c=e.modalRectangleTop,d=e.theme,p=e.topOffsetFixed,f=e.isModeless,m=d.palette,_=Object(s.getGlobalClassNames)(i,d);return{root:[_.root,d.fonts.medium,{backgroundColor:"transparent",position:f?"absolute":"fixed",height:"100%",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",opacity:0,pointerEvents:"none",transition:"opacity "+o},p&&u&&{alignItems:"flex-start"},a&&_.isOpen,l&&{opacity:1,pointerEvents:"auto"},t],main:[_.main,{boxShadow:"0 0 5px 0 rgba(0, 0, 0, 0.4)",backgroundColor:m.white,boxSizing:"border-box",position:"relative",textAlign:"left",outline:"3px solid transparent",maxHeight:"100%",overflowY:"auto",zIndex:f?s.ZIndexes.Layer:void 0},p&&u&&{top:c},n],scrollableContent:[_.scrollableContent,{overflowY:"auto",flexGrow:1},r],layer:f&&[_.layer,{position:"static",width:"unset",height:"unset"}]}}},1518:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var s=n(0),o=n(3),i=n(126),r=n(128),a=n(237),l=Object(a.a)(),u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s.__extends(t,e),t.prototype.render=function(){var e=this.props,t=e.as,n=void 0===t?"label":t,r=e.children,a=e.className,u=e.disabled,c=e.styles,d=e.required,p=e.theme,f=l(c,{className:a,disabled:u,required:d,theme:p});return o.createElement(n,s.__assign({},Object(i.f)(this.props,i.e),{className:f.root}),r)},t}(r.a)},1519:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var s=n(0),o=n(3),i=n(128),r=n(860),a=n(872),l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._skipComponentRefResolution=!0,t}return s.__extends(t,e),t.prototype.render=function(){return o.createElement(a.a,s.__assign({},this.props,{primary:!0,onRenderDescription:i.b}))},t=s.__decorate([Object(r.a)("PrimaryButton",["theme","styles"],!0)],t)}(i.a)},1520:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var s=n(0),o=n(3),i=n(237),r=n(128),a=Object(i.a)(),l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s.__extends(t,e),t.prototype.render=function(){var e=this.props,t=e.className,n=e.styles,s=e.theme;return this._classNames=a(n,{theme:s,className:t}),o.createElement("div",{className:this._classNames.actions},o.createElement("div",{className:this._classNames.actionsRight},this._renderChildrenAsActions()))},t.prototype._renderChildrenAsActions=function(){var e=this;return o.Children.map(this.props.children,function(t){return t?o.createElement("span",{className:e._classNames.action},t):null})},t}(r.a)},1521:function(e,t,n){"use strict";var s=n(859),o=n(1520),i=n(18),r={actions:"ms-Dialog-actions",action:"ms-Dialog-action",actionsRight:"ms-Dialog-actionsRight"};n.d(t,"a",function(){return a});var a=Object(s.a)(o.a,function(e){var t=e.className,n=e.theme,s=Object(i.getGlobalClassNames)(r,n);return{actions:[s.actions,{position:"relative",width:"100%",minHeight:"24px",lineHeight:"24px",margin:"20px 0 0",fontSize:"0",selectors:{".ms-Button":{lineHeight:"normal"}}},t],action:[s.action],actionsRight:[s.actionsRight,{textAlign:"right",marginRight:"-4px",fontSize:"0",selectors:{$action:{margin:"0 4px"}}}]}},void 0,{scope:"DialogFooter"})},1522:function(e,t,n){"use strict";n.d(t,"a",function(){return _});var s=n(0),o=n(3),i=n(237),r=n(245),a=n(128),l=n(723),u=n(1732),c=n(385),d=n(1525),p=Object(i.a)(),f={isDarkOverlay:!1,isBlocking:!1,className:"",containerClassName:"",topOffsetFixed:!1},m={type:l.a.normal,className:"",topButtonsProps:[]},_=function(e){function t(t){var n=e.call(this,t)||this;return n._getSubTextId=function(){var e=n.props,t=e.ariaDescribedById,s=e.modalProps,o=e.dialogContentProps,i=e.subText,r=t||s&&s.subtitleAriaId;return r||(r=(i||o&&o.subText)&&n._defaultSubTextId),r},n._getTitleTextId=function(){var e=n.props,t=e.ariaLabelledById,s=e.modalProps,o=e.dialogContentProps,i=e.title,r=t||s&&s.titleAriaId;return r||(r=(i||o&&o.title)&&n._defaultTitleTextId),r},n._id=Object(r.getId)("Dialog"),n._defaultTitleTextId=n._id+"-title",n._defaultSubTextId=n._id+"-subText",n._warnDeprecations({isOpen:"hidden",type:"dialogContentProps.type",subText:"dialogContentProps.subText",contentClassName:"dialogContentProps.className",topButtonsProps:"dialogContentProps.topButtonsProps",className:"modalProps.className",isDarkOverlay:"modalProps.isDarkOverlay",isBlocking:"modalProps.isBlocking",containerClassName:"modalProps.containerClassName",onDismissed:"modalProps.onDismissed",onLayerDidMount:"modalProps.layerProps.onLayerDidMount",ariaDescribedById:"modalProps.subtitleAriaId",ariaLabelledById:"modalProps.titleAriaId"}),n}return s.__extends(t,e),t.prototype.render=function(){var e=this.props,t=e.className,n=e.containerClassName,i=e.contentClassName,r=e.elementToFocusOnDismiss,a=e.firstFocusableSelector,l=e.forceFocusInsideTrap,c=e.styles,_=e.hidden,g=e.ignoreExternalFocusing,v=e.isBlocking,b=e.isClickableOutsideFocusTrap,y=e.isDarkOverlay,h=e.isOpen,x=e.onDismiss,E=e.onDismissed,P=e.onLayerDidMount,C=e.responsiveMode,T=e.subText,O=e.theme,N=e.title,D=e.topButtonsProps,S=e.type,M=e.minWidth,A=e.maxWidth,I=e.modalProps,B=s.__assign({},I?I.layerProps:{onLayerDidMount:P});P&&!B.onLayerDidMount&&(B.onLayerDidMount=P);var k=s.__assign({},f,I,{layerProps:B}),w=s.__assign({},m,this.props.dialogContentProps),R=p(c,{theme:O,className:t||k.className,containerClassName:n||k.containerClassName,hidden:_,dialogDefaultMinWidth:M,dialogDefaultMaxWidth:A});return o.createElement(u.a,s.__assign({elementToFocusOnDismiss:r,firstFocusableSelector:a,forceFocusInsideTrap:l,ignoreExternalFocusing:g,isClickableOutsideFocusTrap:b,onDismissed:E,responsiveMode:C},k,{isDarkOverlay:void 0!==y?y:k.isDarkOverlay,isBlocking:void 0!==v?v:k.isBlocking,isOpen:void 0!==h?h:!_,className:R.root,containerClassName:R.main,onDismiss:x||k.onDismiss,subtitleAriaId:this._getSubTextId(),titleAriaId:this._getTitleTextId()}),o.createElement(d.a,s.__assign({titleId:this._defaultTitleTextId,subTextId:this._defaultSubTextId,title:N,subText:T,showCloseButton:void 0!==v?!v:!k.isBlocking,topButtonsProps:D||w.topButtonsProps,type:void 0!==S?S:w.type,onDismiss:x||w.onDismiss,className:i||w.className},w),this.props.children))},t.defaultProps={hidden:!0},t=s.__decorate([c.withResponsiveMode],t)}(a.a)},1523:function(e,t,n){"use strict";n.d(t,"a",function(){return v});var s=n(0),o=n(3),i=n(237),r=n(712),a=n(245),l=n(128),u=n(1731),c=n(1225),d=n(1735),p=n(1682),f=n(1725),m=n(385),_={eventBubblingEnabled:!1},g=Object(i.a)(),v=function(e){function t(t){var n=e.call(this,t)||this;return n._focusTrapZone=o.createRef(),n._allowScrollOnModal=function(e){e?Object(r.b)(e,n._events):n._events.off(n._scrollableContent),n._scrollableContent=e},n.state={id:Object(a.getId)("Modal"),isOpen:t.isOpen,isVisible:t.isOpen,hasBeenOpened:t.isOpen},n._warnDeprecations({onLayerDidMount:"layerProps.onLayerDidMount"}),n}return s.__extends(t,e),t.prototype.componentWillReceiveProps=function(e){if(clearTimeout(this._onModalCloseTimer),e.isOpen)if(this.state.isOpen){if(this.setState({hasBeenOpened:!0,isVisible:!0}),e.topOffsetFixed){var t=document.getElementsByClassName("ms-Dialog-main"),n=void 0;t.length>0&&(n=t[0].getBoundingClientRect(),this.setState({modalRectangleTop:n.top}))}}else this.setState({isOpen:!0});!e.isOpen&&this.state.isOpen&&(this._onModalCloseTimer=this._async.setTimeout(this._onModalClose,1e3*parseFloat(c.a)),this.setState({isVisible:!1}))},t.prototype.componentDidUpdate=function(e,t){e.isOpen||t.isVisible||this.setState({isVisible:!0})},t.prototype.render=function(){var e=this.props,t=e.className,n=e.containerClassName,i=e.scrollableContentClassName,r=e.elementToFocusOnDismiss,a=e.firstFocusableSelector,l=e.forceFocusInsideTrap,c=e.ignoreExternalFocusing,v=e.isBlocking,b=e.isClickableOutsideFocusTrap,y=e.isDarkOverlay,h=e.onDismiss,x=e.layerProps,E=e.responsiveMode,P=e.titleAriaId,C=e.styles,T=e.subtitleAriaId,O=e.theme,N=e.topOffsetFixed,D=e.onLayerDidMount,S=e.isModeless,M=this.state,A=M.isOpen,I=M.isVisible,B=M.hasBeenOpened,k=M.modalRectangleTop;if(!A)return null;var w=g(C,{theme:O,className:t,containerClassName:n,scrollableContentClassName:i,isOpen:A,isVisible:I,hasBeenOpened:B,modalRectangleTop:k,topOffsetFixed:N,isModeless:S}),R=S?this.props.className?this.props.className+" "+w.layer:w.layer:this.props.className,j=s.__assign({},_,this.props.layerProps,{onLayerDidMount:x&&x.onLayerDidMount?x.onLayerDidMount:D,className:R,insertFirst:S});return E>=m.ResponsiveMode.small?o.createElement(p.a,s.__assign({},j),o.createElement(f.a,{role:S||!v?"dialog":"alertdialog","aria-modal":!S,ariaLabelledBy:P,ariaDescribedBy:T,onDismiss:h},o.createElement("div",{className:w.root},!S&&o.createElement(d.a,{isDarkThemed:y,onClick:v?void 0:h}),o.createElement(u.a,{componentRef:this._focusTrapZone,className:w.main,elementToFocusOnDismiss:r,isClickableOutsideFocusTrap:S||b||!v,ignoreExternalFocusing:c,forceFocusInsideTrap:S?!S:l,firstFocusableSelector:a},o.createElement("div",{ref:this._allowScrollOnModal,className:w.scrollableContent,"data-is-scrollable":!0},this.props.children))))):null},t.prototype.focus=function(){this._focusTrapZone.current&&this._focusTrapZone.current.focus()},t.prototype._onModalClose=function(){this.setState({isOpen:!1}),this.props.onDismissed&&this.props.onDismissed()},t.defaultProps={isOpen:!1,isDarkOverlay:!0,isBlocking:!1,className:"",containerClassName:""},t=s.__decorate([m.withResponsiveMode],t)}(l.a)},1524:function(e,t,n){"use strict";n.d(t,"a",function(){return f});var s=n(0),o=n(3),i=n(237),r=n(128),a=n(723),l=n(728),u=n(1521),c=n(385),d=Object(i.a)(),p=o.createElement(u.a,null).type,f=function(e){function t(t){return e.call(this,t)||this}return s.__extends(t,e),t.prototype.render=function(){var e,t=this.props,n=t.showCloseButton,i=t.className,r=t.closeButtonAriaLabel,u=t.onDismiss,c=t.subTextId,p=t.subText,f=t.titleId,m=t.title,_=t.type,g=t.styles,v=t.theme,b=d(g,{theme:v,className:i,isLargeHeader:_===a.a.largeHeader,isClose:_===a.a.close}),y=this._groupChildren();return p&&(e=o.createElement("p",{className:b.subText,id:c},p)),o.createElement("div",{className:b.content},o.createElement("div",{className:b.header},o.createElement("p",{className:b.title,id:f,role:"heading","aria-level":2},m),o.createElement("div",{className:b.topButton},this.props.topButtonsProps.map(function(e,t){return o.createElement(l.IconButton,s.__assign({key:e.uniqueId||t},e))}),(_===a.a.close||n&&_!==a.a.largeHeader)&&o.createElement(l.IconButton,{className:b.button,iconProps:{iconName:"Cancel"},ariaLabel:r,onClick:u}))),o.createElement("div",{className:b.inner},o.createElement("div",{className:b.innerContent},e,y.contents),y.footers))},t.prototype._groupChildren=function(){var e={footers:[],contents:[]};return o.Children.map(this.props.children,function(t){"object"==typeof t&&null!==t&&t.type===p?e.footers.push(t):e.contents.push(t)}),e},t.defaultProps={showCloseButton:!1,className:"",topButtonsProps:[],closeButtonAriaLabel:"Close"},t=s.__decorate([c.withResponsiveMode],t)}(r.a)},1525:function(e,t,n){"use strict";var s=n(859),o=n(1524),i=n(18),r={contentLgHeader:"ms-Dialog-lgHeader",close:"ms-Dialog--close",subText:"ms-Dialog-subText",header:"ms-Dialog-header",headerLg:"ms-Dialog--lgHeader",button:"ms-Dialog-button ms-Dialog-button--close",inner:"ms-Dialog-inner",content:"ms-Dialog-content",title:"ms-Dialog-title"};n.d(t,"a",function(){return a});var a=Object(s.a)(o.a,function(e){var t=e.className,n=e.theme,s=e.isLargeHeader,o=e.isClose,a=e.hidden,l=e.isMultiline,u=n.palette,c=n.fonts,d=Object(i.getGlobalClassNames)(r,n);return{content:[s&&d.contentLgHeader,o&&d.close,{flexGrow:1,overflowY:"hidden"},t],subText:[d.subText,s?c.medium:c.small,{margin:"0 0 20px 0",paddingTop:"8px",color:u.neutralPrimary,lineHeight:"1.5",wordWrap:"break-word",fontWeight:i.FontWeights.semilight}],header:[d.header,{position:"relative",width:"100%",boxSizing:"border-box"},s&&[d.headerLg,{backgroundColor:u.themePrimary}],o&&d.close],button:[d.button,a&&{selectors:{".ms-Icon.ms-Icon--Cancel":{color:u.neutralSecondary,fontSize:"16px"}}}],inner:[d.inner,{padding:l?"0 20px 20px":"0 28px 20px"}],innerContent:[d.content,{position:"relative",width:"100%",selectors:{".ms-Button.ms-Button--compount":{marginBottom:"20px",selectors:{"&:last-child":{marginBottom:"0"}}}}},t],title:[d.title,{color:u.neutralPrimary,margin:"0",padding:"20px 36px 20px 28px"},c.xLarge,s&&[{color:u.white,marginBottom:"8px",padding:"26px 28px 28px"},c.xxLarge],l&&c.xxLarge],topButton:[{display:"flex",flexDirection:"row",flexWrap:"nowrap",position:"absolute",top:"0",right:"0",padding:"12px 12px 0 0",selectors:{"> *":{flex:"0 0 auto"}}}]}},void 0,{scope:"DialogContent"})},1535:function(e,t,n){"use strict";var s=n(859),o=n(1518),i=n(18);n.d(t,"a",function(){return r});var r=Object(s.a)(o.a,function(e){var t,n=e.theme,s=e.className,o=e.disabled,r=e.required;return{root:["ms-Label",n.fonts.medium,{color:n.semanticColors.bodyText,boxSizing:"border-box",boxShadow:"none",margin:0,display:"block",padding:"5px 0",wordWrap:"break-word",overflowWrap:"break-word"},o&&{color:n.semanticColors.disabledBodyText,selectors:(t={},t[i.HighContrastSelector]={color:"GrayText"},t)},r&&{selectors:{"::after":{content:"' *'",color:n.semanticColors.errorText,paddingRight:12}}},s]}},void 0,{scope:"Label"})},1732:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var s=n(859),o=n(1523),i=n(1225),r=Object(s.a)(o.a,i.b,void 0,{scope:"Modal"})},1856:function(e,t,n){"use strict";var s=n(859),o=n(1522),i=n(18),r={root:"ms-Dialog"};n.d(t,"a",function(){return a});var a=Object(s.a)(o.a,function(e){var t,n=e.className,s=e.containerClassName,o=e.dialogDefaultMinWidth,a=void 0===o?"288px":o,l=e.dialogDefaultMaxWidth,u=void 0===l?"340px":l,c=e.hidden,d=e.theme;return{root:[Object(i.getGlobalClassNames)(r,d).root,d.fonts.medium,n],main:[{width:a,outline:"3px solid transparent",selectors:(t={},t["@media (min-width: "+i.ScreenWidthMinMedium+"px)"]={width:"auto",maxWidth:u,minWidth:a},t)},!c&&{display:"flex"},s]}},void 0,{scope:"Dialog"})},2040:function(e,t){e.exports=function(e){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},2050:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(20),o=["appBuyButtonLabel","appErrorCode1_0","appErrorCode1_1","appErrorCode1_2","appErrorCode2_0","appErrorCode2_1","appErrorCode3_0","appErrorCode3_1","appErrorCode3_2","appErrorCode3_3","appErrorCodeDetailsAction","appErrorCodeUpdateAction","appErrorTitle","appInfoTitle","appTrialMessage","asyncMethodNotExecutedBecauseAsyncLimitIsExceededError","cancelButtonLabel","cantLoadAddinsRightNowError","closeAppPaneButtonLabel","closeLowerCase","composeAppsForOutlookLabel","dismissAddinsInfoBarLabel","extensionContainerAriaLabel","iFrameableDialogCloseButtonAccessibilityLabel","officeAddinsAutomaticProgressNotificationLabel","officeAddinsNotificationGenericError","oPayAddinName","overflowMenuAccessibilityLabel","overflowMenuHeaderAddins","overflowMenuFooterStoreLabel","overflowMenuTooltip","restrictedItemDialogHeader","restrictedItemDialogLabel","taskPanePinButtonLabel","taskPaneUnpinButtonLabel","taskPaneCloseButtonAriaLabel","taskPaneErrorAddinsNotSupported","taskPaneErrorAddinsNotSupportedDescription","taskPaneErrorAddinsNotSupportedOnSharedItemsDescription","taskPaneErrorMultipleItemsSelected","taskPaneErrorMultipleItemsSelectedDescription","taskPaneErrorNoItemSelected","taskPaneErrorNoItemSelectedDescription","ssoConsentPermissionTitleText","ssoSignInButtonText","ssoSignInCloseButtonText","ssoSignInLabelText","gdprMinorWarningText","gdprMinorRemoveAddinText","gdprMinorDialogTitleText","gdprMinorDialogOKButtonText","itemSendEventAddinErrorExtensibilityUnavailable","itemSendEventAddinBlockEvent"];t.OwaExtensibilityStringsStringModule=s.registerStringPackage("owa-extensibility-strings",null,o);var i={};o.forEach(function(e){Object.defineProperty(i,e,{get:function(){return t.OwaExtensibilityStringsStringModule.strings.get(e)}})}),t.getOwaExtensibilityStrings=function(){return i},t.default=i},2207:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(51),o=n(2620);t.default=function(e,t){return void 0===e||e.__type||(e=o.default(e)),s.makeServiceRequest("GetClientAccessToken",e,t)}},2208:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(0);t.default=function(e){return s.__assign({__type:"GetClientAccessTokenRequest:#Exchange"},e)}},2355:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.Unspecified=0]="Unspecified",e[e.String=1]="String",e[e.Int64=2]="Int64",e[e.Double=3]="Double",e[e.Boolean=4]="Boolean",e[e.Date=5]="Date"}(t.AWTPropertyType||(t.AWTPropertyType={})),function(e){e[e.NotSet=0]="NotSet",e[e.DistinguishedName=1]="DistinguishedName",e[e.GenericData=2]="GenericData",e[e.IPV4Address=3]="IPV4Address",e[e.IPv6Address=4]="IPv6Address",e[e.MailSubject=5]="MailSubject",e[e.PhoneNumber=6]="PhoneNumber",e[e.QueryString=7]="QueryString",e[e.SipAddress=8]="SipAddress",e[e.SmtpAddress=9]="SmtpAddress",e[e.Identity=10]="Identity",e[e.Uri=11]="Uri",e[e.Fqdn=12]="Fqdn",e[e.IPV4AddressLegacy=13]="IPV4AddressLegacy"}(t.AWTPiiKind||(t.AWTPiiKind={})),function(e){e[e.NotSet=0]="NotSet",e[e.GenericContent=1]="GenericContent"}(t.AWTCustomerContentKind||(t.AWTCustomerContentKind={})),function(e){e[e.Low=1]="Low",e[e.Normal=2]="Normal",e[e.High=3]="High",e[e.Immediate_sync=5]="Immediate_sync"}(t.AWTEventPriority||(t.AWTEventPriority={})),function(e){e[e.NonRetryableStatus=1]="NonRetryableStatus",e[e.QueueFull=3]="QueueFull"}(t.AWTEventsDroppedReason||(t.AWTEventsDroppedReason={})),function(e){e[e.InvalidEvent=1]="InvalidEvent",e[e.SizeLimitExceeded=2]="SizeLimitExceeded",e[e.KillSwitch=3]="KillSwitch"}(t.AWTEventsRejectedReason||(t.AWTEventsRejectedReason={}))},2620:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(0);t.default=function(e){return s.__assign({__type:"GetClientAccessTokenJsonRequest:#Exchange"},e)}},2646:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(0);t.default=function(e){return s.__assign({__type:"InstallExtensionJsonRequest:#Exchange"},e)}},2752:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(51),o=n(2646);t.default=function(e,t){return void 0===e||e.__type||(e=o.default(e)),s.makeServiceRequest("InstallExtension",e,t)}},3858:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(0);t.default=function(e){return s.__assign({__type:"DisableExtensionJsonRequest:#Exchange"},e)}},3859:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(0);t.default=function(e){return s.__assign({__type:"UninstallExtensionJsonRequest:#Exchange"},e)}},3860:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(0);t.default=function(e){return s.__assign({__type:"EnableAppDataRequest:#Exchange"},e)}},4418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(51),o=n(5071);t.default=function(e,t){return void 0===e||e.__type||(e=o.default(e)),s.makeServiceRequest("UpdateClientExtensionNotifications",e,t)}},4419:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(0);t.default=function(e){return s.__assign({__type:"UpdateClientExtensionNotificationsRequest:#Exchange"},e)}},4420:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(51);t.default=function(e,t){return s.makeServiceRequest("SanitizeHtml",e,t)}},4421:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(51),o=n(5072);t.default=function(e,t){return void 0===e||e.__type||(e=o.default(e)),s.makeServiceRequest("ExecuteEwsProxy",e,t)}},4422:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(51),o=n(5073);t.default=function(e,t){return void 0===e.request||e.request.__type||(e.request=o.default(e.request)),s.makeServiceRequest("LoadExtensionCustomProperties",e,t)}},4423:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(51),o=n(5074);t.default=function(e,t){return void 0===e||e.__type||(e=o.default(e)),s.makeServiceRequest("RegisterConsent",e,t)}},4424:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(0);t.default=function(e){return s.__assign({__type:"RegisterConsentRequest:#Exchange"},e)}},4425:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(51),o=n(5075);t.default=function(e,t){return void 0===e.request||e.request.__type||(e.request=o.default(e.request)),s.makeServiceRequest("SaveExtensionCustomProperties",e,t)}},4426:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(51),o=n(5076);t.default=function(e,t){return void 0===e.request||e.request.__type||(e.request=o.default(e.request)),s.makeServiceRequest("SaveExtensionSettings",e,t)}},4427:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(51),o=n(5077);t.default=function(e,t){return void 0===e.request||e.request.__type||(e.request=o.default(e.request)),s.makeServiceRequest("GetExtensibilityContext",e,t)}},4428:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(51),o=n(5078);t.default=function(e,t){return void 0===e||e.__type||(e=o.default(e)),s.makeServiceRequest("GetAllClientExtensionsNotifications",e,t)}},4429:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(0);t.default=function(e){return s.__assign({__type:"GetAllClientExtensionsNotificationsRequest:#Exchange"},e)}},4430:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(51),o=n(3858);t.default=function(e,t){return void 0===e||e.__type||(e=o.default(e)),s.makeServiceRequest("DisableExtension",e,t)}},4431:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(51),o=n(3859);t.default=function(e,t){return void 0===e||e.__type||(e=o.default(e)),s.makeServiceRequest("UninstallExtension",e,t)}},4432:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(51),o=n(3860);t.default=function(e,t){return void 0===e||e.__type||(e=o.default(e)),s.makeServiceRequest("EnableApp",e,t)}},4778:function(e,t,n){"use strict";var s,o=n(2355);!function(e){e[e.String=0]="String",e[e.Boolean=1]="Boolean",e[e.Int64=2]="Int64",e[e.Double=3]="Double"}(s||(s={})),n.d(t,"a",function(){return c});var i=/\./g,r=".",a="Data",l="zC",u=0;function c(e,t,n){var s,r,a={name:(s=e.eventName,s.toLowerCase().replace(i,"_")),properties:{}};if(!e.telemetryProperties||!e.telemetryProperties.ariaTenantToken)throw new Error("Unable to find ariaTenantToken for namespace.");return a.properties["Event.Sequence"]={value:++u,type:o.AWTPropertyType.Int64},a.properties["Event.Name"]=e.eventName,a.properties["Event.Source"]="OTelJS",r=n?new Date(n):new Date,a.properties["Event.Time"]={value:r,type:o.AWTPropertyType.Date},e.eventContract&&(a.properties["Event.Contract"]=e.eventContract.name,d(a,e.eventContract.dataFields,!1)),d(a,t,!1),d(a,e.dataFields,!0),a}function d(e,t,n){t&&t.forEach(function(t){var s=["","",t.name],o=s[0],i=s[1],u=s[2],c=t.name.indexOf(r);c>0&&t.name.substr(0,c)===l&&(o=t.name.substring(0,c+1),u=t.name.substring(c+1)),n&&(i=a+r);var d=o+i+u;e.properties[d]={value:t.value,type:p(t.dataType)}})}function p(e){switch(e){case s.String:return o.AWTPropertyType.String;case s.Boolean:return o.AWTPropertyType.Boolean;case s.Int64:return o.AWTPropertyType.Int64;case s.Double:return o.AWTPropertyType.Double;default:throw new Error(e)}}},5071:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(0);t.default=function(e){return s.__assign({__type:"UpdateClientExtensionNotificationsJsonRequest:#Exchange"},e)}},5072:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(0);t.default=function(e){return s.__assign({__type:"EwsProxyRequestParameters:#Exchange"},e)}},5073:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(0);t.default=function(e){return s.__assign({__type:"LoadExtensionCustomPropertiesParameters:#Exchange"},e)}},5074:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(0);t.default=function(e){return s.__assign({__type:"RegisterConsentJsonRequest:#Exchange"},e)}},5075:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(0);t.default=function(e){return s.__assign({__type:"SaveExtensionCustomPropertiesParameters:#Exchange"},e)}},5076:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(0);t.default=function(e){return s.__assign({__type:"SaveExtensionSettingsParameters:#Exchange"},e)}},5077:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(0);t.default=function(e){return s.__assign({__type:"GetExtensibilityContextParameters:#Exchange"},e)}},5078:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(0);t.default=function(e){return s.__assign({__type:"GetAllClientExtensionsNotificationsJsonRequest:#Exchange"},e)}},723:function(e,t,n){"use strict";var s;n.d(t,"a",function(){return s}),function(e){e[e.normal=0]="normal",e[e.largeHeader=1]="largeHeader",e[e.close=2]="close"}(s||(s={}))}}]);
//# sourceMappingURL=owa.vendors~Addins~addins-marketplace.mail.js.map
window.scriptsLoaded['owa.vendors~Addins~addins-marketplace.mail.js'] = 1; window.scriptProcessEnd = window.scriptProcessEnd || {}; window.scriptProcessEnd['owa.vendors~Addins~addins-marketplace.mail.js'] = (new Date()).getTime();