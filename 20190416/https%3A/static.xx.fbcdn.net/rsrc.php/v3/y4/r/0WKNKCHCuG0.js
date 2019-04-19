if (self.CavalryLogger) { CavalryLogger.start_js(["Qp53J"]); }

__d("PlatformDialogAsync",["DOM","PlatformDialog"],(function(a,b,c,d,e,f){a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(c,d,e){return a.call(this,b("DOM").scry(c.getInnerContent(),"form")[0],d,e)||this}return c}(b("PlatformDialog"));e.exports=a}),null);
__d("PlatformDialogEscapeFrame",["URI","isFacebookURI"],(function(a,b,c,d,e,f){a={go:function(){try{if(window.top!=window&&window.top.location.href&&b("isFacebookURI")(new(b("URI"))(window.top.location.href))){window.top.location.href=window.location.href;return!0}}catch(a){}}};e.exports=a}),null);
__d("legacy:KeyEventController",["KeyEventController"],(function(a,b,c,d,e,f){a.KeyEventController=b("KeyEventController")}),3);
__d("PlatformOAuthDialogClientEventsTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:PlatformOAuthDialogClientEventsLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:PlatformOAuthDialogClientEventsLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:PlatformOAuthDialogClientEventsLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setAppID=function(a){this.$1.app_id=a;return this};c.setCurrentView=function(a){this.$1.current_view=a;return this};c.setEditOptionsNumber=function(a){this.$1.edit_options_number=a;return this};c.setEndTime=function(a){this.$1.end_time=a;return this};c.setEventName=function(a){this.$1.event_name=a;return this};c.setHeight=function(a){this.$1.height=a;return this};c.setLoginID=function(a){this.$1.login_id=a;return this};c.setPreviousView=function(a){this.$1.previous_view=a;return this};c.setScope=function(a){this.$1.scope=a;return this};c.setStartTime=function(a){this.$1.start_time=a;return this};c.setStep=function(a){this.$1.step=a;return this};c.setTimeSpent=function(a){this.$1.time_spent=a;return this};c.setTimeSpentMilli=function(a){this.$1.time_spent_milli=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setWidth=function(a){this.$1.width=a;return this};c.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};return a}();var g={app_id:!0,current_view:!0,edit_options_number:!0,end_time:!0,event_name:!0,height:!0,login_id:!0,previous_view:!0,scope:!0,start_time:!0,step:!0,time_spent:!0,time_spent_milli:!0,vc:!0,width:!0};e.exports=a}),null);
__d("AuthDialogSheet",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({INITIAL:"initial",DETAIL:"detail",NONE:"none"})}),null);
__d("XOauthEditablePermissionViewAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/oauth/editable/permission/view/",{})}),null);
__d("PlatformDialogEditEmailScopeTable",["cx","AsyncRequest","CSS","DOM","DOMEventListener","PlatformOAuthDialogClientEventsTypedLogger","XOauthEditablePermissionViewAsyncController"],(function(a,b,c,d,e,f,g){__p&&__p();function h(a,b){return a.getElementsByClassName(b)[0]}var i={SCOPE_TABLE:{nameForLogging:"scope_table"},EDIT_SCOPE_TABLE:{nameForLogging:"edit_scope_table_email"}};a={init:function(a,b,c,d,e,f){this._preview=d,this._hasFetchedView=!1,this._editButton=a,this._loggerID=e,this._appID=b,this._scope=c,this._optionsNumber=f,this._root?this._setup():this._initRanBeforeSetRoot=!0},_setup:function(){var a=this;this._sheets=h(this._root,"_1by0");this._sheets&&(this._detailSheet=h(this._sheets,"_1by4"),this._initialSheet=h(this._sheets,"_1by3"));this._buttons=h(this._root,"_1fl-");this._space=h(this._root,"_6gim");this._footer=h(this._root,"_1bxw");b("DOMEventListener").add(this._editButton,"click",function(b){b.kill(),a._show(i.EDIT_SCOPE_TABLE)});this._fetchEditScopeTable(this._appID,this._scope)},setRoot:function(a){this._root=a,this._initRanBeforeSetRoot===!0&&this._setup()},_fetchEditScopeTable:function(a,c){__p&&__p();var d=this,e=b("XOauthEditablePermissionViewAsyncController").getURIBuilder().getURI();new(b("AsyncRequest"))().setURI(e).setMethod("POST").setData({app_id:a,scope:c}).setHandler(function(a){__p&&__p();a=a.payload;d._editScopeTable=a.editScopeTable.markup;if(d._sheets){d._editScopeTable=b("DOM").appendContent(d._sheets,d._editScopeTable)[0];var e=h(d._root,"_3bsq");e&&b("DOMEventListener").add(e,"click",function(a){d._show(i.SCOPE_TABLE)});d._scopeInput=document.getElementsByName(c)[0];d._scopeInputs=Array.from(d._detailSheet.getElementsByTagName("input"));d._scopeInput.value=a.number;d._setupEditOptionInputsListener();d._hasFetchedView=!0}}).send()},_hideAllScreens:function(){if(this._sheets===void 0)return;for(var a=0;a<this._sheets.children.length;a++)b("CSS").hide(this._sheets.children[a])},_getHTMLView:function(a){return this._editScopeTable},_showElement:function(a){b("CSS").shown(a)||b("CSS").show(a),b("CSS").shown(this._space)&&b("CSS").hide(this._space)},_hideElement:function(a){b("CSS").shown(a)&&b("CSS").hide(a),b("CSS").shown(this._space)||b("CSS").show(this._space)},_show:function(a){__p&&__p();this._hideAllScreens();this._showElement(this._footer);this._showElement(this._buttons);this._logImpression(a);if(a===i.SCOPE_TABLE){b("CSS").show(this._initialSheet);b("CSS").show(this._detailSheet);return}a===i.EDIT_SCOPE_TABLE&&(this._hideElement(this._buttons),this._hideElement(this._footer));a=this._getHTMLView();b("CSS").show(a)},_setupEditOptionInputsListener:function(){__p&&__p();var a=this;b("DOMEventListener").add(this._editScopeTable,"change",function(c){__p&&__p();a._scopeInput.value=c.target.value;c=c.target;var d=!0;while(!c.classList.contains("_498f"))if(c.parentElement)c=c.parentElement;else{d=!1;break}if(d){d=h(c,"_498i");if(d){c=b("DOM").create("div",null,d.innerText);b("DOM").setContent(a._preview,c)}}})},_logImpression:function(a){new(b("PlatformOAuthDialogClientEventsTypedLogger"))().setEventName("view_rendered").setAppID(String(this._appID)).setLoginID(this._loggerID).setScope(this._scope).setCurrentView(a.nameForLogging).setEditOptionsNumber(this._optionsNumber).log()}};e.exports=a}),null);
__d("XOauthConfirmConfirmationCodeController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/oauth/confirm_code/",{})}),null);
__d("XOauthSendConfirmationCodeController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/oauth/send_code/",{})}),null);
__d("PlatformDialogEditScopeTable",["cx","AsyncRequest","CSS","DOM","DOMDimensions","DOMEventListener","PlatformDialog","PlatformOAuthDialogClientEventsTypedLogger","StrSet","XOauthConfirmConfirmationCodeController","XOauthEditablePermissionViewAsyncController","XOauthSendConfirmationCodeController"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=0;function i(a,b){return a.getElementsByClassName(b)[0]}var j={"continue":1,shortcut:2,verify:3,none:4},k={SCOPE_TABLE:{nameForLogging:"scope_table",button:j["continue"],hasSkipButton:!1,hasCancelButton:!0,hasFooter:!0},SCOPE_TABLE_SHORTCUT:{nameForLogging:"scope_table",button:j.shortcut,hasSkipButton:!1,hasCancelButton:!0,hasFooter:!0},EDIT_SCOPE_TABLE:{nameForLogging:"edit_scope_table",button:j.none,hasSkipButton:!0,hasCancelButton:!1,hasFooter:!1},ADD_SCOPE_DIALOG:{nameForLogging:"add_scope_dialog",button:j.verify,hasSkipButton:!0,hasCancelButton:!1,hasFooter:!1},VERIFY_SCOPE_DIALOG:{nameForLogging:"verify_scope_dialog",button:j.verify,hasSkipButton:!1,hasCancelButton:!1,hasFooter:!1},ERROR_DIALOG:{nameForLogging:"error_dialog",button:j.none,hasSkipButton:!1,hasCancelButton:!1,hasFooter:!1},ADD_SCOPE_LOADING_DIALOG:{nameForLogging:null,button:j.none,hasSkipButton:!1,hasCancelButton:!1,hasFooter:!1},VERIFY_SCOPE_LOADING_DIALOG:{nameForLogging:null,button:j.none,hasSkipButton:!1,hasCancelButton:!1,hasFooter:!1},LOADING_DIALOG:{nameForLogging:null,button:j.none,hasSkipButton:!1,hasCancelButton:!1,hasFooter:!1}};a={init:function(a,b,c,d,e,f,g,h,i,j,l){this._editButton=a,this._preview=b,this._appID=c,this._hasFetchedView=!1,this._backStack=[k.SCOPE_TABLE],this._hasEditOptions=e,this._loggerID=f,this._scope=d,this._encryptedScope=h,this._scopeTable=i,this._step=j,this._customFlow=l,this._loadingDialog=g,this._root?this._setup():this._initRanBeforeSetRoot=!0},_setup:function(){__p&&__p();var a=this;this._sheets=i(this._root,"_1by0");this._sheets&&(this._detailSheet=i(this._sheets,"_1by4"),this._initialSheet=i(this._sheets,"_1by3"),this._loadingDialog=b("DOM").appendContent(this._sheets,this._loadingDialog)[0]);this._buttons=i(this._root,"_1fl-");this._buttons&&(this._continueAsButtonContainer=i(this._buttons,"_4k6n"),this._cancelButton=i(this._buttons,"_3gqz"),this._shortcutBindedEventHandler=this._shortcutEventHandler.bind(this._continueAsButtonContainer,this),this._customFlow&&b("DOMEventListener").add(this._continueAsButtonContainer,"click",this._shortcutBindedEventHandler),this._continueAsButton=i(this._continueAsButtonContainer,"_1fm0"),this._enableContinueAsButton());this._addEditButtonListener();this._container=i(this._root,"_16l6");this._scopeInput=i(this._root,this._scope+"_input");this._hasVerifiedInput=i(this._root,"has_verified_"+this._scope);this._scopeInputs=Array.from(this._detailSheet.getElementsByTagName("input"));this._footer=i(this._root,"_1bxw");b("DOMEventListener").add(this._detailSheet,"change",function(b){a._bindShortcut(a._getCurrentView())});this._scopeTable.addListener("toggle-all",function(b){a._bindShortcut(a._getCurrentView())});this._fetchEditScopeViews(this._scope)},setRoot:function(a){this._root=a,this._initRanBeforeSetRoot===!0&&this._setup()},_bindShortcut:function(a){if(this._customFlow){b("DOMEventListener").remove(this._continueAsButtonContainer,"click",this._shortcutBindedEventHandler);if(Object.prototype.hasOwnProperty.call(this._customFlow[a.nameForLogging],"bindToScopeStatus")&&this._customFlow[a.nameForLogging].bindToScopeStatus===this._scope){a=new(b("StrSet"))();for(var c=0;c<this._scopeInputs.length;c++)this._scopeInputs[c].checked&&a.addAll(new(b("StrSet"))(this._scopeInputs[c].value.split(",")));a.contains(this._encryptedScope)&&b("DOMEventListener").add(this._continueAsButtonContainer,"click",this._shortcutBindedEventHandler)}}},_fetchEditScopeViews:function(a){__p&&__p();var c=this,d=b("XOauthEditablePermissionViewAsyncController").getURIBuilder().getURI();new(b("AsyncRequest"))().setURI(d).setMethod("POST").setData({app_id:this._appID,scope:a}).setHandler(function(a){__p&&__p();a=a.payload;if(c._sheets){c._editScopeTable=b("DOM").appendContent(c._sheets,a.editScopeTable.markup)[0];c._addScopeView=b("DOM").appendContent(c._sheets,a.addScopeView.markup)[0];c._verifyScopeView=b("DOM").appendContent(c._sheets,a.verifyScopeView.markup)[0];c._errorView=b("DOM").appendContent(c._sheets,a.errorView.markup)[0];c._addScopeLoadingView=b("DOM").appendContent(c._sheets,a.addScopeLoadingView.markup)[0];c._verifyScopeLoadingView=b("DOM").appendContent(c._sheets,a.verifyScopeLoadingView.markup)[0];var d=document.getElementsByClassName("_3bsq"),e;for(e=0;e<d.length;e++)b("DOMEventListener").add(d[e],"click",function(a){c._goBack()});c._skipButtons=c._sheets.getElementsByClassName("_3bst");if(c._skipButtons)for(e=0;e<c._skipButtons.length;e++)b("DOMEventListener").add(c._skipButtons[e],"click",function(a){a=document.getElementsByName("read")[0];if(a instanceof HTMLInputElement){var d=a.value.split(",");d=d.filter(function(a){return a!=c._encryptedScope});a.value=d.join(",");a=b("PlatformDialog").getInstance().getForm();a.submit()}});c._setupAddScopeButtonListener();c._setupVerifyScopeButtonListener();c._verifyScopeButton=b("DOM").prependContent(c._buttons,a.verifyScopeButton.markup)[0];b("DOMEventListener").add(c._verifyScopeButton,"click",function(a){a.kill();a=c._getCurrentView();a===k.ADD_SCOPE_DIALOG?c._sendVerificationSMS(c._phoneNumberInput.value,c._countryCodeInput.value):a===k.VERIFY_SCOPE_DIALOG&&c._verifyConfirmationCode()});c._phoneNumberInput=i(c._addScopeView,"_3gr0");d=i(c._addScopeView,"_3gr1");d&&(c._countryCodeInput=d.getElementsByTagName("input")[0]);e=i(c._addScopeView,"_3gr2");e&&(c._privacySelector=e.getElementsByTagName("input")[0]);c._phoneNumberVerifyText=i(c._verifyScopeView,"_3gv1");c._confirmationCodeInput=i(c._verifyScopeView,"_3gv4");c._errorMessageElement=i(c._errorView,"_4rsn");c._setupEditOptionInputsListener();c._hasFetchedView=!0;c._bindShortcut(c._getCurrentView());if(c._viewToShowAfterFetch)c._addView(c._viewToShowAfterFetch);else if(c._showShortcutAfterFetch){a=c._getCurrentView();c._isShortcut=!0;c._customFlow[a.nameForLogging].transition==="addScopeView"?c._addView(k.ADD_SCOPE_DIALOG):c._customFlow[a.nameForLogging].transition==="editScopeTable"&&c._addView(k.EDIT_SCOPE_TABLE)}}}).send()},_sendVerificationSMS:function(a,c){var d=this,e=b("XOauthSendConfirmationCodeController").getURIBuilder().getURI();this._show(k.ADD_SCOPE_LOADING_DIALOG);c={country_code:c,phone_number:a,logger_id:this._loggerID,app_id:this._appID};new(b("AsyncRequest"))().setURI(e).setMethod("POST").setData(c).setHandler(function(a){a=a.payload;a.result===h?(d._phoneNumberVerifyText.innerText=a.display_number,d._addView(k.VERIFY_SCOPE_DIALOG)):d._addErrorView(a.error_message)}).send()},_verifyConfirmationCode:function(){__p&&__p();var a=this,c=b("XOauthConfirmConfirmationCodeController").getURIBuilder().getURI(),d=this._confirmationCodeInput.value,e=this._privacySelector.value;this._show(k.VERIFY_SCOPE_LOADING_DIALOG);d={code:d,privacy:e,logger_id:this._loggerID,app_id:this._appID};new(b("AsyncRequest"))().setURI(c).setMethod("POST").setData(d).setHandler(function(c){__p&&__p();c=c.payload;if(c.result===h){a._editScopeTable=b("DOM").replace(a._editScopeTable,c.edit_scope_table.markup)[0];a._editButton=b("DOM").replace(a._editButton,c.edit_button.markup)[0];a._addEditButtonListener();b("DOM").setContent(a._preview,c.display_number.markup);var d=i(a._editScopeTable,"_3bsq");d&&b("DOMEventListener").add(d,"click",function(b){a._goBack()});a._scopeInput.value=c.number;a._hasVerifiedInput.value=1;a._changeScopeInput(!0);a._setupAddScopeButtonListener();a._setupEditOptionInputsListener();a._setupVerifyScopeButtonListener();a._hasEditOptions=!0;a._confirmationCodeInput.value="";a._phoneNumberInput.value="";a._customFlow=null;a._backStack=[k.SCOPE_TABLE];a._show(k.SCOPE_TABLE)}else a._addErrorView(c.error_message)}).send()},_addEditButtonListener:function(){var a=this;b("DOMEventListener").add(this._editButton,"click",function(b){b.kill(),a._isShortcut=!1,a._hasEditOptions?a._addView(k.EDIT_SCOPE_TABLE):a._addView(k.ADD_SCOPE_DIALOG)})},_hideAll:function(a){for(var c=0;c<a.children.length;c++)b("CSS").hide(a.children[c])},_showAll:function(a){for(var c=0;c<a.children.length;c++)b("CSS").show(a.children[c])},_setupAddScopeButtonListener:function(){var a=this,c=i(this._editScopeTable,"_2lrz");c&&b("DOMEventListener").add(c,"click",function(b){a._isShortcut=!1,a._addView(k.ADD_SCOPE_DIALOG)})},_setupEditOptionInputsListener:function(){__p&&__p();var a=this;b("DOMEventListener").add(this._editScopeTable,"change",function(c){__p&&__p();a._scopeInput.value=c.target.value;c=c.target;var d=!0;while(!c.classList.contains("_498f"))if(c.parentElement)c=c.parentElement;else{d=!1;break}if(d){d=i(c,"_498i");if(d){c=b("DOM").create("div",null,d.innerText);b("DOM").setContent(a._preview,c)}}})},_setupVerifyScopeButtonListener:function(){var a=this,c=this._editScopeTable.getElementsByClassName("_3bsu");for(var d=0;d<c.length;d++)b("DOMEventListener").add(c[d],"click",function(b){b=b.currentTarget.getAttribute("data-value");a._sendVerificationSMS(b)})},_enableContinueAsButton:function(){this._continueAsButton.disabled=!1,b("CSS").removeClass(this._continueAsButton,"_42fr")},_getHTMLView:function(a){switch(a){case k.EDIT_SCOPE_TABLE:return this._editScopeTable;case k.ADD_SCOPE_DIALOG:return this._addScopeView;case k.VERIFY_SCOPE_DIALOG:return this._verifyScopeView;case k.ERROR_DIALOG:return this._errorView;case k.ADD_SCOPE_LOADING_DIALOG:return this._addScopeLoadingView;case k.VERIFY_SCOPE_LOADING_DIALOG:return this._verifyScopeLoadingView;case k.LOADING_DIALOG:return this._loadingDialog;default:return this._editScopeTable}},_shortcutEventHandler:function(a,c){c.kill();if(!a._hasFetchedView)a._showShortcutAfterFetch=!0,a._show(k.LOADING_DIALOG);else{c=a._getCurrentView();a._isShortcut=!0;b("CSS").addClass(a._root,"_4l-1");a._customFlow[c.nameForLogging].transition==="addScopeView"?a._addView(k.ADD_SCOPE_DIALOG):a._customFlow[c.nameForLogging].transition==="editScopeTable"?a._addView(k.EDIT_SCOPE_TABLE):a._addView(k.ERROR_DIALOG)}},_setVisibilty:function(a,c){c?b("CSS").shown(a)||(b("CSS").show(a),this._container.style.height=parseInt(this._container.clientHeight,10)-a.clientHeight+"px"):b("CSS").shown(a)&&(this._container.style.height=parseInt(this._container.clientHeight,10)+a.clientHeight+"px",b("CSS").hide(a))},_show:function(a){__p&&__p();this._setVisibilty(this._cancelButton,a.hasCancelButton);this._setVisibilty(this._footer,a.hasFooter);(a.button===j["continue"]||a.button===j.shortcut)&&(this._customFlow&&a===k.EDIT_SCOPE_TABLE?(this._continueAsButton.disabled=!0,b("CSS").addClass(this._continueAsButton,"_42fr")):this._enableContinueAsButton());a.nameForLogging!==null&&this._logImpression(a);a.button===j["continue"]?(this._setVisibilty(this._verifyScopeButton,!1),this._setVisibilty(this._continueAsButtonContainer,!0),b("DOMEventListener").remove(this._continueAsButtonContainer,"click",this._shortcutBindedEventHandler)):a.button===j.verify?(this._setVisibilty(this._verifyScopeButton,!0),this._setVisibilty(this._continueAsButtonContainer,!1)):a.button===j.shortcut?(this._setVisibilty(this._verifyScopeButton,!1),this._setVisibilty(this._continueAsButtonContainer,!0),this._bindShortcut(a)):a.button===j.none&&(this._verifyScopeButton&&this._setVisibilty(this._verifyScopeButton,!1),this._setVisibilty(this._continueAsButtonContainer,!1));this._hideAll(this._sheets);if(a===k.SCOPE_TABLE||a===k.SCOPE_TABLE_SHORTCUT){b("CSS").removeClass(this._root,"_4l-1");b("CSS").show(this._initialSheet);b("CSS").show(this._detailSheet);return}if(a.hasSkipButton){var c;if(this._isShortcut)for(c=0;c<this._skipButtons.length;c++)b("CSS").show(this._skipButtons[c]);else for(c=0;c<this._skipButtons.length;c++)b("CSS").hide(this._skipButtons[c])}c=this._getHTMLView(a);b("CSS").show(c)},_goBack:function(){var a=this._getPreviousView();a=this._getCustomFlowView(a);a===k.SCOPE_TABLE_SHORTCUT&&this._isShortcut&&this._changeScopeInput(!1);this._show(a);this._backStack.pop()},_changeScopeInput:function(a){for(var b=0;b<this._scopeInputs.length;b++){var c=this._scopeInputs[b];c.value===this._encryptedScope&&c.checked!==a&&(c.checked=a,this._scopeTable.emit("scope-changed",c),this._scopeTable.emit("update-permission-text"))}},_addView:function(a){this._hasFetchedView===!0?(a=this._getCustomFlowView(a),this._show(a),this._reflow(a),this._backStack.push(a)):(this._show(k.LOADING_DIALOG),this._viewToShowAfterFetch=a)},_reflow:function(a){var c=b("DOMDimensions").getElementDimensions(this._sheets).height,d=b("DOMDimensions").getElementDimensions(i(this._getHTMLView(a),"_bk9")).height;a=i(this._getHTMLView(a),"_bka");a&&(a.style.height=c-d+"px")},_getCustomFlowView:function(a){if(this._customFlow&&Object.prototype.hasOwnProperty.call(this._customFlow,a.nameForLogging))switch(a){case k.SCOPE_TABLE:return k.SCOPE_TABLE_SHORTCUT;default:return a}return a},_addErrorView:function(a){this._errorMessageElement.innerText=a,this._addView(k.ERROR_DIALOG)},_getCurrentView:function(){return this._backStack[this._backStack.length-1]},_getPreviousView:function(){return this._backStack[this._backStack.length-2]},_logImpression:function(a){new(b("PlatformOAuthDialogClientEventsTypedLogger"))().setEventName("view_rendered").setAppID(String(this._appID)).setLoginID(this._loggerID).setStep(this._step).setScope(this._scope).setPreviousView(this._getCurrentView().nameForLogging).setCurrentView(a.nameForLogging).log()}};e.exports=a}),null);
__d("PlatformOAuthDialogV4",["cx","AuthDialogSheet","Banzai","CSS","DOM","DOMEvent","DOMEventListener","PlatformOAuthDialogClientEventsTypedLogger","StrSet","intlList","PlatformDialogEditScopeTable","PlatformDialogEditEmailScopeTable"],(function(a,b,c,d,e,f,g){__p&&__p();var h="perm_declined",i="edit_info_clicked",j="back_clicked",k="back_clicked_after_declined",l="time_on_initial_page",m="time_on_edit_permissions",n="total_time";a={create:function(a,c,d,e,f,g,j,k,n,o){__p&&__p();var p=this;if(n){k=b("PlatformDialogEditScopeTable");n=b("PlatformDialogEditEmailScopeTable");k.setRoot(a);n.setRoot(a)}this._loggedEvents=new(b("StrSet"))();this._appID=e;this._step=f;this._loginID=g;this._startTime=Date.now();this._lastTime=this._startTime;this._eventName=l;this._orderedPermissions=j;this._useNoConjunction=o;this._logClientEvents=b("Banzai").isEnabled("platform_oauth_client_events");k=document.getElementsByName("__CANCEL__")[0];k||(k=document.getElementsByName("__SKIP__")[0]);var q=document.getElementsByName("__CONFIRM__")[0];navigator.webdriver||b("DOMEventListener").add(window,"focus",function(a){var b=q;b.disabled=!0;window.setTimeout(function(){b.disabled=!1},500)});var r=a.getElementsByClassName("_396-")[0],s=a.getElementsByClassName("_1a_l")[0];if(this._step==="write"){k&&b("DOMEventListener").add(k,"click",function(a){p._logTotalTime()});q&&b("DOMEventListener").add(q,"click",function(a){p._logTotalTime()});return}else k&&b("DOMEventListener").add(k,"click",function(a){p._logTimeSpent(),p._logTotalTime()}),q&&b("DOMEventListener").add(q,"click",function(a){p._logTimeSpent(),p._logTotalTime()});d&&c&&(b("DOMEventListener").add(c,"click",function(c){__p&&__p();new(b("DOMEvent"))(c).kill();p._logEventOnce(i);p._originalScopes=p._getCurrentScopes();p._logTimeSpent();p._logEventOnce(p._eventName);p._eventName=m;c=document.getElementsByClassName("_58xh")[0];var e=c?c.clientHeight:0,f=r.clientHeight;a.className="_5uz8 _396_";e=c?e-c.clientHeight:0;s.style.height=f+e+"px";r.style.height=f+e+"px";p._switchSheetName(b("AuthDialogSheet").DETAIL);d!=null&&d.reflow()}),d.addListener("go-back",function(c){__p&&__p();p._logTimeSpent();p._eventName=l;p._logBackEvent();c=document.getElementsByClassName("_58xh")[0];var e=c?c.clientHeight:0;a.className="_5uz8 _1lbs";c=c?c.clientHeight-e:0;r.style.height=r.clientHeight-c+"px";p._orderedPermissions!==null?p._updatePermissionText():d!=null&&d.reset();p._switchSheetName(b("AuthDialogSheet").INITIAL)}),d.addListener("update-permission-text",function(a){p._updatePermissionText()}),this._logClientEvents&&d.addListener("perm-declined",function(a){new(b("PlatformOAuthDialogClientEventsTypedLogger"))().setAppID(p._appID).setEventName(h).setLoginID(p._loginID).setStep(p._step).setScope(a.value).log()}))},_getScopesInput:function(){var a=document.getElementsByName(this._step)[0];return a instanceof HTMLInputElement?a:null},_getCurrentScopes:function(){var a=this._getScopesInput();return a!=null?a.value.split(","):[]},_logTimeSpent:function(){var a=Date.now(),c=a-this._lastTime;new(b("PlatformOAuthDialogClientEventsTypedLogger"))().setAppID(this._appID).setEventName(this._eventName).setLoginID(this._loginID).setStep(this._step).setTimeSpentMilli(c).setStartTime(this._lastTime).setEndTime(Date.now()).log();this._lastTime=a},_logTotalTime:function(){this._eventName=n,this._lastTime=this._startTime,this._logTimeSpent()},_updatePermissionText:function(){__p&&__p();var a=document.getElementById("permissions_list"),c=document.getElementsByClassName("_xjg")[0],d=document.getElementsByClassName("_xjh")[0],e=this._getScopesInput();if(e.value.trim().length<=0){b("CSS").hide(c);b("CSS").show(d);return}e=e.value.split(",");var f=[];b("CSS").show(c);b("CSS").hide(d);for(var c=this._orderedPermissions,d=Array.isArray(c),g=0,c=d?c:c[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var h;if(d){if(g>=c.length)break;h=c[g++]}else{g=c.next();if(g.done)break;h=g.value}h=h;e.indexOf(h.name)>-1&&f.push(h.phrase)}h=this._useNoConjunction?b("intlList").CONJUNCTIONS.NONE:b("intlList").CONJUNCTIONS.AND;b("DOM").setContent(a,b("intlList")(f,h))},_switchSheetName:function(a){var b=document.getElementById("platformDialogForm");if(b instanceof HTMLFormElement){b=b.elements.namedItem("sheet_name");b instanceof HTMLInputElement&&(b.value=a)}},_logBackEvent:function(){var a=this._getCurrentScopes();a=a.length<this._originalScopes.length?k:j;this._logEventOnce(a)},_logEventOnce:function(a){this._logClientEvents&&!this._loggedEvents.contains(a)&&(this._loggedEvents.add(a),new(b("PlatformOAuthDialogClientEventsTypedLogger"))().setAppID(this._appID).setEventName(this._eventName).setLoginID(this._loginID).setStep(this._step).log())}};e.exports=a}),null);
__d("PlatformDialogScopeTable",["cx","DOMDimensions","DOMEvent","DOMEventListener","EventEmitter","ScrollableArea","StrSet"],(function(a,b,c,d,e,f,g){__p&&__p();function h(a){a=a;while(a!=null)if(a instanceof HTMLFormElement)return a;else a=a.parentElement;throw new Error("platformDialogForm is not found.")}a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c,d,e,f){__p&&__p();var g;g=a.call(this)||this;g.$PlatformDialogScopeTable1=c.getElementsByClassName("_bk9")[0];g.$PlatformDialogScopeTable2=c;g.$PlatformDialogScopeTable3=h(c);f=g.$PlatformDialogScopeTable3[d];if(f instanceof HTMLInputElement)g.$PlatformDialogScopeTable4=f;else throw Error("Input with name "+d+" was not found.");g.$PlatformDialogScopeTable5=g.$PlatformDialogScopeTable4.value.split(",");g.$PlatformDialogScopeTable6=new(b("StrSet"))(g.$PlatformDialogScopeTable5);g.$PlatformDialogScopeTable7=e;g.$PlatformDialogScopeTable8=c.getElementsByClassName("_bka")[0];f=c.getElementsByClassName("_4hb5")[0];g.$PlatformDialogScopeTable9=c.getElementsByClassName("_bkb")[0];g.$PlatformDialogScopeTable10=!1;g.$PlatformDialogScopeTable11=Array.from(c.getElementsByClassName("_498f"));g.$PlatformDialogScopeTable12=Array.from(g.$PlatformDialogScopeTable8.getElementsByTagName("input"));g.addListener("scope-changed",function(a){return g.$PlatformDialogScopeTable13(a)});b("DOMEventListener").add(g.$PlatformDialogScopeTable8,"change",function(a){if(g.$PlatformDialogScopeTable10)return!1;a=a.getTarget();g.$PlatformDialogScopeTable13(a)});f&&b("DOMEventListener").add(f,"click",function(a){new(b("DOMEvent"))(a).kill(),g.emit("go-back")});g.$PlatformDialogScopeTable9&&b("DOMEventListener").add(g.$PlatformDialogScopeTable9,"click",function(a){new(b("DOMEvent"))(a).kill(),g.$PlatformDialogScopeTable14(g.$PlatformDialogScopeTable6.toArray().length!==g.$PlatformDialogScopeTable5.length),g.emit("toggle-clicked",g.$PlatformDialogScopeTable6.toArray().length!==g.$PlatformDialogScopeTable5.length)});b("ScrollableArea").fromNative(g.$PlatformDialogScopeTable8);return g}var d=c.prototype;d.$PlatformDialogScopeTable13=function(a){__p&&__p();if(a.id&&a.id.startsWith("object_"))return void 0;var c=a.checked,d=new(b("StrSet"))(a.value.split(",")),e=this.$PlatformDialogScopeTable6.toArray();c?this.$PlatformDialogScopeTable6.addAll(d):this.$PlatformDialogScopeTable6.removeAll(d);var f=this.$PlatformDialogScopeTable6.toArray();this.$PlatformDialogScopeTable4.value=f.join(",");this.$PlatformDialogScopeTable15(e,f);d.contains("user_friends")&&this.$PlatformDialogScopeTable16(c);this.$PlatformDialogScopeTable9&&this.$PlatformDialogScopeTable17(f.length===this.$PlatformDialogScopeTable5.length);c||this.emit("perm-declined",a);return void 0};d.$PlatformDialogScopeTable15=function(a,b){a.length>0&&b.length===0&&this.emit("no-scopes-selected"),a.length===0&&b.length>0&&this.emit("scopes-selected")};d.$PlatformDialogScopeTable14=function(a){__p&&__p();var c=this.$PlatformDialogScopeTable6.toArray();this.$PlatformDialogScopeTable6=new(b("StrSet"))(a?this.$PlatformDialogScopeTable5:this.$PlatformDialogScopeTable7);this.$PlatformDialogScopeTable4.value=this.$PlatformDialogScopeTable6.toArray().join(",");this.$PlatformDialogScopeTable9&&this.$PlatformDialogScopeTable17(a);this.$PlatformDialogScopeTable10=!0;this.$PlatformDialogScopeTable12.forEach(function(b){b.disabled||(b.checked=a)});this.$PlatformDialogScopeTable16(a);this.$PlatformDialogScopeTable10=!1;this.emit("toggle-all");this.$PlatformDialogScopeTable15(c,this.$PlatformDialogScopeTable6.toArray())};d.$PlatformDialogScopeTable17=function(a){this.$PlatformDialogScopeTable9.className="_bkb"+(a?" _bkc":"")};d.$PlatformDialogScopeTable16=function(a){this.$PlatformDialogScopeTable11.forEach(function(b){var c=b.getElementsByTagName("input")[0];/^friends_/.test(c.value)&&(b.className="_498f"+(a?"":" _2awj"),c.checked=a,c.disabled=!a)})};d.reset=function(){this.$PlatformDialogScopeTable14(!0)};d.reflow=function(){var a=b("DOMDimensions").getElementDimensions(this.$PlatformDialogScopeTable2).height,c=b("DOMDimensions").getElementDimensions(this.$PlatformDialogScopeTable1).height;this.$PlatformDialogScopeTable8.style.height=a-c+"px";b("ScrollableArea").getInstance(this.$PlatformDialogScopeTable8).resize()};return c}(b("EventEmitter"));e.exports=a}),null);