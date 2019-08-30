(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"22f6":function(t,e,i){i("1029");var n=i("d869"),s=i("e590"),o=i("0592").default,a=function(t){a.superclass.constructor.call(this,t)};t.exports=Ext.extend(a,s,{name:"QuickBuyPurchaseStatusCheckerView",init:function(){var t;switch(a.superclass.init.call(this),this.model.getPurchaseStatus()){case n.QuickBuyPurchaseStatusCheckerModel.STATUS_PENDING:t="payment-pending";break;case n.QuickBuyPurchaseStatusCheckerModel.STATUS_ERROR:case n.QuickBuyPurchaseStatusCheckerModel.STATUS_DENIED:t="payment-failed";break;default:case n.QuickBuyPurchaseStatusCheckerModel.STATUS_APPROVED:t="payment-success"}setTimeout(function(){o.navigate(t,{trigger:!0,replace:!0})},0)},onPurchaseSuccess:function(){a.superclass.onPurchaseSuccess.call(this),o.navigate("payment-success",{trigger:!0,replace:!0,preventNavigateBack:!0})},onPurchaseFailed:function(){o.navigate("payment-failed",{trigger:!0,replace:!0,preventNavigateBack:!1})}})},"2d6f":function(t,e,i){i("1029");var n=i("7b09"),s=function(t){s.superclass.constructor.call(this,t)};t.exports=Ext.extend(s,n,{name:"ScheduledShowIncompleteBookingForSmartBuyTemplate",tpl:'<div class="incomplete_booking"><a href="{link}" class="close text">{text}</a></div>',_setTemplateParams:function(t){return t}})},"5fae":function(t,e,i){var n=i("1029"),s=i("d869"),o=i("e590"),a=i("89ce"),c=i("dec5"),r=i("2d6f"),u=i("894b"),l=i("8c04"),m=i("9c7a"),h=i("7ab0"),d=i("e568"),B=function(t){B.superclass.constructor.call(this,t)};t.exports=Ext.extend(B,o,{name:"MinimizedQuickBuyPurchaseStatusCheckerView",minimizedBlockId:"minimized-quickbuy",minWindowContentCls:"content",minWindowCloseBtnCls:"close_button",minimizedClass:"minimized",referenceBlockId:"get_credits_link",referenceContainerId:"header_container",referenceContainerHeight:40,minimizedWindowTop:10,animationTime:0,successCls:"success",failureCls:"failure",pendingCls:"processing",errorMessageSel:".transaction_error_message",_errorMessage:null,smartBuyRecommenderClass:"smartbuy_recommender",showClass:"show",smartBuyActivationTranslateTitleText:"Tired of waiting?",smartBuyActivationTranslateButtonText:"Activate SmartBuy",smartBuyActivationTranslateActivatedText:"SmartBuy successfully activated",smartBuyActivationTranslatePromoText:"This feature will top up your credit balance.",successfulActivationConfig:"successful",failedActivationConfig:"failed",disabledClassName:"disabled",removeElement:!1,init:function(){B.superclass.init.call(this),this.addEvents(s.MinimizedQuickBuyPurchaseStatusCheckerView.EVENT_CLOSE_ACTIVE_MODAL,s.MinimizedQuickBuyPurchaseStatusCheckerView.EVENT_CLOSE_MINIMIZED_WINDOW),this._selectElements(),this._createMinimizedBlock(),this._positionMinimizedWindow(!1),this._isSmartBuyAvailable=m.getInstance().getSmartBuyStateConfig()||d.isSmartBuyAvailable(),this._isSmartBuyAvailable&&this._setSmartBuyActivationRecommender()},_setSmartBuyActivationRecommender:function(){var t=(new a).render({titleText:n.translate(this.smartBuyActivationTranslateTitleText),buttonText:n.translate(this.smartBuyActivationTranslateButtonText),activatedText:n.translate(this.smartBuyActivationTranslateActivatedText),promoText:n.translate(this.smartBuyActivationTranslatePromoText)});this._smartBuyRecommender=Ext.DomHelper.insertAfter(this._minWindowContentEl,{tag:"div",cls:this.getTooltipClassForStateDisplay(),html:t},!0),this._smartBuyRecommender.addClass(this.showClass),m.getInstance().addNewButton(),m.getInstance().resetSmartBuyConfig()},getTooltipClassForStateDisplay:function(){switch(m.getInstance().getSmartBuyStateConfig()){case this.successfulActivationConfig:return this.smartBuyRecommenderClass+" "+this.successCls;case this.failedActivationConfig:return this.smartBuyRecommenderClass+" "+this.failureCls;default:return this.smartBuyRecommenderClass}},_selectElements:function(){return this._prevouseMinimizedBlock=Ext.get(this.minimizedBlockId),this._minWindowReferenceEl=Ext.get(this.referenceBlockId),this._referenceContainerEl=Ext.get(this.referenceContainerId),this._successEl=h.createElementFromHtmlString(this.purchaseStatusHtmlStrings.successHtmlString,!0),this._errorEl=h.createElementFromHtmlString(this.purchaseStatusHtmlStrings.errorHtmlString,!0),this._pendingEl=h.createElementFromHtmlString(this.purchaseStatusHtmlStrings.pendingHtmlString,!0),this},_createMinimizedBlock:function(){this._minWindowReferenceEl.addClass(this.disabledClassName),this._prevouseMinimizedBlock&&this._prevouseMinimizedBlock.remove();var t,e=this.model.getPurchaseStatus();switch(this._minWindowEl=Ext.DomHelper.append(this.element,{tag:"div",id:this.minimizedBlockId,html:this._getMinimizedQuickBuyTemplate()},!0),this._minWindowContentEl=this._minWindowEl.select("."+this.minWindowContentCls).item(0),e){case s.QuickBuyPurchaseStatusCheckerModel.STATUS_APPROVED:t=this._successEl.html(),this._currentStatusCls=this.successCls;break;case s.QuickBuyPurchaseStatusCheckerModel.STATUS_DENIED:case s.QuickBuyPurchaseStatusCheckerModel.STATUS_ERROR:t=this._errorEl.html(),this._currentStatusCls=this.failureCls;break;case s.QuickBuyPurchaseStatusCheckerModel.STATUS_PENDING:default:t=this._pendingEl.html(),this._currentStatusCls=this.pendingCls}n.on([{element:this._minWindowEl.select("."+this.minWindowCloseBtnCls),event:"click",handler:this.onCloseMinimizedWindowClick},{element:this._minWindowEl,event:"click",handler:this.onHideMinimizedWindowClick,options:{delegate:".close"}}],this),this._minWindowContentEl.html(t),this._minWindowEl.addClass(this._currentStatusCls),this._minWindow=new n.Window(this.minimizedBlockId,{overlay:"overlay",isModal:!1,top:320,left:"center",showMode:"fixed",exitOnEsc:!1,autoDestroy:!0,autoDestroyElement:!0,setPositionOnResize:!1}),this._minWindow.show()},_getMinimizedQuickBuyTemplate:function(){return'<div class="arrow">&nbsp;</div><a href="#" class="'+this.minWindowCloseBtnCls+'"></a><div class="'+this.minWindowContentCls+'"></div>'},_changeMinimizedWindowContent:function(t,e){var i=this;this._minWindowEl.fadeOut({duration:this.animationTime,callback:function(){i._minWindowContentEl.html(t.html()),n.isNull(i._errorMessage)||i._appendErrorMessage(),i._minWindowEl.removeClass(i._currentStatusCls).addClass(e),i._positionMinimizedWindow(!1),i._minWindowEl.fadeIn(),i._currentStatusCls=e}})},_appendErrorMessage:function(){this._minWindowContentEl.select(this.errorMessageSel).item(0).html(["<em>"+this._errorMessage.title+"</em>","<span>"+this._errorMessage.message+"</span>"].join(""))},_positionMinimizedWindow:function(t){if(this._minWindowEl){var e=this._getXYForMinimizedWindow(),i=this;this._minWindowEl.animate({left:{to:e.left},top:{to:e.top}},t?.3:.01,function(){i._minWindowEl.addClass(i.minimizedClass)})}},_getXYForMinimizedWindow:function(){return{left:this._minWindowReferenceEl.getXY()[0]-this._minWindowEl.getWidth(!1)/2+this._minWindowReferenceEl.getWidth(!1)/2,top:this._referenceContainerEl.getTop(!0)+this.referenceContainerHeight+this.minimizedWindowTop}},onCloseMinimizedWindowClick:function(t){t.preventDefault(),this._minWindow.hide(),this.fireEvent(s.MinimizedQuickBuyPurchaseStatusCheckerView.EVENT_CLOSE_MINIMIZED_WINDOW)},onHideMinimizedWindowClick:function(){this._minWindow.hide()},onWindowResize:function(){this._minWindowEl&&this._minWindowEl.hasClass(this.minimizedClass)&&this._positionMinimizedWindow(!1)},onPurchaseSuccess:function(){this._minWindowReferenceEl.removeClass(this.disabledClassName);var t=n.Cookie.get("incompleted-booking"),e=n.Cookie.get("incompleted-unlock"),i=this._successEl;t&&(n.Cookie.remove("incompleted-booking"),this._isSmartBuyAvailable?this._successEl.html(this._successEl.html()+(new r).render({link:"#!chat/"+t,text:n.translate("Go back to {model}'s chat",{model:t})})):this._successEl.html(this._successEl.html()+(new c).render({link:"#!chat/"+t,text:n.translate("Now you can go back to {model}'s chat and complete booking.",{model:t})})),i=this._successEl),e&&(n.Cookie.remove("incompleted-unlock"),this._isSmartBuyAvailable?this._successEl.html(this._successEl.html()+(new l).render({link:"#!chat/"+e,text:n.translate("Go back to {model}'s chat",{model:e})})):this._successEl.html(this._successEl.html()+(new u).render({link:"#!chat/"+e,text:n.translate("Now you can go back to {model}'s chat and unlock any album or video.",{model:e})})),i=this._successEl),this._changeMinimizedWindowContent(i,this.successCls),B.superclass.onPurchaseSuccess.call(this)},onPurchaseFailed:function(t){this._minWindowReferenceEl.removeClass(this.disabledClassName),this._smartBuyRecommender&&this._smartBuyRecommender.removeClass(this.showClass),this._errorMessage=n.getPath(t,"json.purchaseStatusMessage"),this._changeMinimizedWindowContent(this._errorEl,this.failureCls),this.fireEvent(s.MinimizedQuickBuyPurchaseStatusCheckerView.EVENT_CLOSE_ACTIVE_MODAL)},bind:function(){B.superclass.bind.call(this),n.on([{element:Ext.Element(window),event:"resize",handler:this.onWindowResize}],this)}})},"693e":function(t,e,i){var n=i("1029"),s=i("d869"),o=i("e568"),a=function(t,e){a.superclass.constructor.call(this,t,e)};t.exports=Ext.extend(a,n.Controller,{name:s.SmartBuyActivationController.NAME,init:function(t,e){this.addEvents(s.SmartBuyActivationController.EVENT_ACTIVATE_SMART_BUY_SUCCESS),a.superclass.init.call(this,t,e)},addNewButton:function(t){this.view.setSmartBuyActivationButton(t),this.view.setButtonEventHandler()},setCsrfToken:function(t){this.model.setCsrfToken(t)},onSmartBuyActivationButtonClick:function(){this.model.activateSmartBuy()},_getModel:function(){return this.model},_getView:function(){return this.view},onSmartBuyActivationSuccess:function(){this.view.setSuccessfulState(),this.fireEvent(s.SmartBuyActivationController.EVENT_ACTIVATE_SMART_BUY_SUCCESS),o.setIsSmartBuyAvailable(!1)},smartBuyActivationFromQuickBuy:function(){this.view.isSmartBuyBlockOnQuickBuy()&&(this.model.setSmartBuyHasSeenOnQuickBuy(),this.view.isSmartBuyCheckBoxChecked()?this.model.activateSmartBuy():this.fireEvent(s.SmartBuyActivationController.EVENT_DEACTIVATE_SMART_BUY_SUCCESS))}})},"894b":function(t,e,i){var n=i("1029"),s=i("7b09"),o=function(t){o.superclass.constructor.call(this,t)};t.exports=Ext.extend(o,s,{name:"MyContentIncompleteUnlockTemplate",tpl:'<div class="incomplete_unlock"><div class="text">{text}</div><a class="first_button close" href="{link}">{buttonText}</a></div>',_setTemplateParams:function(t){return{text:t.text,link:t.link,buttonText:n.translate("Unlock Content")}}})},"89ce":function(t,e,i){var n=i("7b09"),s=function(t){s.superclass.constructor.call(this,t)};t.exports=Ext.extend(s,n,{name:"SmartBuyActivationTooltipTemplate",tpl:'<hr><strong>{titleText}</strong><button type="button" class="first_button">{buttonText}</button><span class="icon check">&nbsp;</span><strong class="successful_message">{activatedText}</strong><small>{promoText}</small>',_setTemplateParams:function(t){return t}})},"8c04":function(t,e,i){i("1029");var n=i("7b09"),s=function(t){s.superclass.constructor.call(this,t)};t.exports=Ext.extend(s,n,{name:"MyContentIncompleteUnlockForSmartbuyTemplate",tpl:'<div class="incomplete_unlock"><a href="{link}" class="close text">{text}</a></div>',_setTemplateParams:function(t){return t}})},"9c7a":function(t,e,i){var n=i("1029"),s=i("d869"),o=i("693e"),a=i("b4412"),c=i("ef41"),r=i("1cab").default,u=function(t,e){u.superclass.constructor.call(this,t,e)};u.getInstance=function(){return u.prototype.instance instanceof u||(u.prototype.instance=new u(Ext.getBody(),{})),u.prototype.instance},t.exports=Ext.extend(u,n.Component,{name:"SmartBuyActivationComponent",init:function(t,e){u.superclass.init.call(this,t,e),n.addEvents(s.SmartBuyActivationComponent.GLOBALEVENT_ACTIVATE_SMART_BUY_SUCCESS,s.SmartBuyActivationComponent.GLOBALEVENT_ACTIVATE_SMART_BUY_FAILURE,s.SmartBuyActivationComponent.GLOBALEVENT_ACTIVATE_SMART_BUY_ERROR),this._getSmartBuyActivationController()},_getSmartBuyActivationController:function(){return this._controller=new o({items:{view:{component:this._getView(),listeners:{"activate-smart-buy-button-click":"onSmartBuyActivationButtonClick"}},model:{component:this._getModel(),listeners:{"activate-smart-buy-success":"onSmartBuyActivationSuccess"}}}}),n.on([{element:this._controller.model,event:s.SmartBuyActivationController.EVENT_ACTIVATE_SMART_BUY_SUCCESS,handler:this.onSmartBuyActivationSuccess},{element:this._controller.model,event:s.SmartBuyActivationController.EVENT_ACTIVATE_SMART_BUY_FAILURE,handler:this.onSmartBuyActivationFailure},{element:this._controller.model,event:s.SmartBuyActivationController.EVENT_ACTIVATE_SMART_BUY_ERROR,handler:this.onSmartButActivationError},{element:this._controller,event:s.SmartBuyActivationController.EVENT_DEACTIVATE_SMART_BUY_SUCCESS,handler:this.onSmartBuyDeactivationSuccess}],this),this._controller},getIsSmartBuyCheckBoxChecked:function(){return this._controller._getView().isSmartBuyCheckBoxChecked()},onSmartBuyDeactivationSuccess:function(){},_getModel:function(){return this._smartBuyActivationModel instanceof a||(this._smartBuyActivationModel=new a),this._smartBuyActivationModel},getSmartBuyStateConfig:function(){return this._controller._getModel().getSmartBuyConfig()},_getView:function(){return this._smartBuyActivationView instanceof c||(this._smartBuyActivationView=new c({element:this.element})),this._smartBuyActivationView},addNewButton:function(t){this._controller.addNewButton(t)},resetSmartBuyConfig:function(){this._controller._getModel().resetSmartBuyConfig()},setSmartBuyCsrfToken:function(t){this._controller.setCsrfToken(t)},onSmartBuyActivationSuccess:function(){r.trackGenericEvent({eventCategory:r.CONST.PAGE.ALL,eventAction:r.CONST.ACTION.SMART_BUY,eventLabel:"success"}),n.fireEvent(s.SmartBuyActivationComponent.GLOBALEVENT_ACTIVATE_SMART_BUY_SUCCESS)},onSmartBuyActivationFailure:function(){r.trackGenericEvent({eventCategory:r.CONST.PAGE.ALL,eventAction:r.CONST.ACTION.SMART_BUY,eventLabel:"fail"}),n.fireEvent(s.SmartBuyActivationComponent.GLOBALEVENT_ACTIVATE_SMART_BUY_FAILURE)},onSmartButActivationError:function(){n.fireEvent(s.SmartBuyActivationComponent.GLOBALEVENT_ACTIVATE_SMART_BUY_ERROR)},onQuickBuyCreditPackageClicked:function(){this._controller.smartBuyActivationFromQuickBuy()},bind:function(){n.on(n.Broadcaster,s.QuickBuyComponent.GLOBALEVENT_QUICKBUY_CREDIT_PACKAGE_CLICKED,this.onQuickBuyCreditPackageClicked,this)}})},b4412:function(t,e,i){var n=i("1029"),s=i("d869"),o=i("5f9e"),a=function(t,e){a.superclass.constructor.call(this,t,e)};t.exports=Ext.extend(a,n.Model,{name:s.SmartBuyActivationModel.NAME,activateSmartBuyRoute:"SmartBuyActivation/Activate",setSmartBuyHasSeenOnQuickBuyRoute:"DhJasmin\\Portal\\SmartBuy\\Controller\\SmartBuyOffer/SetHasSeenAtQuickBuy",smartBuyConfigName:"smartBuyStatus",successfulActivationConfig:"successful",failedActivationConfig:"failed",init:function(){this.addEvents(s.SmartBuyActivationModel.EVENT_ACTIVATE_SMART_BUY_SUCCESS,s.SmartBuyActivationModel.EVENT_ACTIVATE_SMART_BUY_FAILURE,s.SmartBuyActivationModel.EVENT_ACTIVATE_SMART_BUY_ERROR),a.superclass.init.call(this)},setCsrfToken:function(t){this.attributes.csrfToken=t},activateSmartBuy:function(){o.request({type:"json",method:"post",url:n.getUrl(this.activateSmartBuyRoute),params:{token:this.attributes.csrfToken},scope:this,success:this.onSmartBuyActivationSuccess,error:this.onSmartBuyActivationError,failure:this.onSmartBuyActivationFailure})},setSmartBuyHasSeenOnQuickBuy:function(){o.request({type:"json",method:"post",url:n.getUrl(this.setSmartBuyHasSeenOnQuickBuyRoute),scope:this})},onSmartBuyActivationSuccess:function(){n.Config.set(this.smartBuyConfigName,this.successfulActivationConfig),this.fireEvent(s.SmartBuyActivationModel.EVENT_ACTIVATE_SMART_BUY_SUCCESS)},getSmartBuyConfig:function(){return n.Config.get(this.smartBuyConfigName)},resetSmartBuyConfig:function(){n.Config.set(this.smartBuyConfigName,null)},onSmartBuyActivationError:function(){n.Config.set(this.smartBuyConfigName,this.failedActivationConfig),this.fireEvent(s.SmartBuyActivationModel.EVENT_ACTIVATE_SMART_BUY_ERROR)},onSmartBuyActivationFailure:function(){n.Config.set(this.smartBuyConfigName,this.failedActivationConfig),this.fireEvent(s.SmartBuyActivationModel.EVENT_ACTIVATE_SMART_BUY_FAILURE)}})},dec5:function(t,e,i){var n=i("1029"),s=i("7b09"),o=function(t){o.superclass.constructor.call(this,t)};t.exports=Ext.extend(o,s,{name:"ScheduledShowIncompleteBookingTemplate",tpl:'<div class="incomplete_booking"><div class="text">{text}</div><a class="first_button close" href="{link}">{buttonText}</a></div>',_setTemplateParams:function(t){return{text:t.text,link:t.link,buttonText:n.translate("Complete booking")}}})},e590:function(t,e,i){var n=i("1029"),s=i("d869"),o=function(t){o.superclass.constructor.call(this,t)};t.exports=Ext.extend(o,n.View,{name:"QuickBuyPurchaseStatusCheckerViewAbstract",onPurchaseSuccess:function(){this.model.getTrackingHtml()&&Ext.DomHelper.append(Ext.getBody(),this.model.getTrackingHtml())},onPurchaseFailed:function(){console.error("You must overwrite this method in your child view.")},onWindowFocus:function(){this.model.checkPurchaseStatus(),this.model.startAjaxPoll()},onWindowBlur:function(){this.model.stopAjaxPoll()},bind:function(){o.superclass.bind.call(this),n.on([{element:this.model,event:s.QuickBuyPurchaseStatusCheckerModel.EVENT_PURCHASE_SUCCESS,handler:this.onPurchaseSuccess},{element:this.model,event:s.QuickBuyPurchaseStatusCheckerModel.EVENT_PURCHASE_FAILED,handler:this.onPurchaseFailed}],this),Ext.fly(window).on("focus",this.onWindowFocus,this),Ext.fly(window).on("blur",this.onWindowBlur,this)},unbind:function(){o.superclass.unbind.call(this),Ext.fly(window).un("focus",this.onWindowFocus,this),Ext.fly(window).un("blur",this.onWindowBlur,this)}})},ef41:function(t,e,i){var n=i("1029"),s=i("d869"),o=i("1cab").default,a=function(t){a.superclass.constructor.call(this,t)};t.exports=Ext.extend(a,n.View,{name:s.SmartBuyActivationView.NAME,smartBuyRecommenderClass:"smartbuy_recommender",successClass:"success",activateButtonSel:"button",skipButtonSel:".close_button",smartBuyBlockId:"smartbuy_block",smartBuyCheckBoxId:"smartbuy_checkbox",buttonOptions:{},init:function(){this.addEvents(s.SmartBuyActivationView.EVENT_ACTIVATE_SMART_BUY_BUTTON_CLICK),a.superclass.init.call(this)},setSmartBuyActivationButton:function(t){this.buttonOptions=t||{},this.smartBuyActivationContainer=this.element.select("."+this.smartBuyRecommenderClass).item(0),this.smartBuyActivationContainer&&(this._smartBuyButtonActivation=this.smartBuyActivationContainer.select(this.activateButtonSel).item(0),this._smartBuyButtonSkip=this.smartBuyActivationContainer.select(this.skipButtonSel).item(0))},setButtonEventHandler:function(){this._smartBuyButtonActivation&&n.on(this._smartBuyButtonActivation,"click",this.onSmartBuyActivationButtonClick,this),this._smartBuyButtonSkip&&n.on(this._smartBuyButtonSkip,"click",this.onSmartBuySkipButtonClick,this)},onSmartBuyActivationButtonClick:function(t){t.preventDefault(),this.sendGAevent("activate smartbuy"),this.fireEvent(s.SmartBuyActivationView.EVENT_ACTIVATE_SMART_BUY_BUTTON_CLICK,this)},onSmartBuySkipButtonClick:function(){this.sendGAevent("not now")},setSuccessfulState:function(){this.smartBuyActivationContainer&&this.smartBuyActivationContainer.addClass(this.successClass)},isSmartBuyBlockOnQuickBuy:function(){return!n.isNull(Ext.fly(this.smartBuyBlockId))},isSmartBuyCheckBoxChecked:function(){if(this.smartBuyCheckBoxEl=Ext.get(this.smartBuyCheckBoxId),this.smartBuyCheckBoxEl)return this.smartBuyCheckBoxEl.dom.checked},sendGAevent:function(t){"QuickBuyComponent"===this.buttonOptions.target&&o.trackGenericEvent({eventCategory:o.CONST.PAGE.PAYMENT_PAGE,eventAction:o.CONST.ACTION.CLICK,eventLabel:t})}})}}]);