pcodeStaticJsonp8158([19],{817:function(t,i,e){"use strict";t.exports=e(987).BlockMailruHorizontal},843:function(t,i,e){"use strict";var o,r=(o=function(t,i){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var e in i)i.hasOwnProperty(e)&&(t[e]=i[e])})(t,i)},function(t,i){function e(){this.constructor=t}o(t,i),t.prototype=null===i?Object.create(i):(e.prototype=i.prototype,new e)});Object.defineProperty(i,"__esModule",{value:!0});var a=function(t){function i(){return null!==t&&t.apply(this,arguments)||this}return r(i,t),i.prototype.render=function(){var t=this.props,i=t.adv,o=t.className,r=t.language;return i.vcardUrl?e(0).create(e(12),{href:i.vcardUrl,target:"_blank",class:o},e(0).create(e(20).Text,{text:e(6).i18n("ADDRESS_AND_PHONE",r)})):null},i}(e(7));i.Address=a},987:function(t,i,e){"use strict";var o,r=(o=function(t,i){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var e in i)i.hasOwnProperty(e)&&(t[e]=i[e])})(t,i)},function(t,i){function e(){this.constructor=t}o(t,i),t.prototype=null===i?Object.create(i):(e.prototype=i.prototype,new e)});Object.defineProperty(i,"__esModule",{value:!0});var a=function(t){function i(){var i=null!==t&&t.apply(this,arguments)||this;return i.updatedAfterReady=!1,i}return r(i,t),i.prototype.onInit=function(){this.name="yap-mailru-horizontal",t.prototype.onInit.call(this),this.width=this.getWidth(),this.calculatedLimit=this.calcAdLimit()},i.prototype.pushCss=function(){t.prototype.pushCss.call(this),this.pushStyles(e(988),this.getCssVariables())},i.prototype.filterRawAds=function(t){var i=this.settings.limit||2;return t.slice(0,i)},i.prototype.fitImages=function(){var t=this,i=this.getResourceById("adv-list-container");if(i&&i.getElement()){var o=this.findEmbeddedResources("adv-component");e(21).forEach(o,function(i){t.settings.limit<=2&&i.makeTwoAds(),i.fitImage()})}},i.prototype.calcAdLimit=function(){var t=this.props.settings.limit,i=this.width<=200?1:Math.floor(this.width/235);return t>i?i:t},i.prototype.onDomReady=function(){this.isFixed||this.updatedAfterReady||(this.width=this.getWidth(),this.calculatedLimit=this.calcAdLimit(),this.update(),this.updatedAfterReady=!0),this.fitImages(),t.prototype.onDomReady.call(this)},i.prototype.getCssVariables=function(){var t=this.props.settings,i=e(5).createColor(t.titleColor||"#1481D0"),o=e(5).createColor(t.hoverColor||"#1481D0"),r=e(5).createColor(t.titleHoverColor||"#1481D0"),a=Math.floor(100/this.calculatedLimit),n=e(5).createColor(t.urlColor||"#1481D0"),p=e(5).createColor(t.bgColor||t.siteBgColor||"#fff").setAlpha(t.siteBgColor?0:1),l=t.textColor||p.readable(),c=t.textColor||p.readable();return{titleColor:i,hoverUrlColor:o,titleHoverColor:r,fontSize:Math.floor(11*t.fontSizeAbs)||11,titleFontSize:Math.floor(16*t.titleFontSizeAbs)||16,advWidth:a,urlColor:n,bgColor:p,textColor:l,contactsFontColor:c,minAdWidth:200}},i.prototype.renderLogo=function(){return null},i.prototype.getWidth=function(){var t=this.props.settings.width;return this.isFixed=Boolean(t)&&t>0,this.isFixed?t:e(50).getElementInnerSize(this.props.renderToNode).width},i.prototype.getBody=function(t,i,o){var r=this.advList.slice(0,this.calculatedLimit),a=this.getDataSource().getTitle();return e(0).create("yatag",null,e(0).create("yatag",{class:t("__adv-list"),style:{width:this.width},resourceId:"adv-list-container"},e(10).map(r,function(t){return e(0).create(e(989).AdvMailruHorizontal,{adv:t,resourceId:"adv-component"})})),e(0).create(e(55),{class:t("__logo"),title:a}))},i}(e(84));i.BlockMailruHorizontal=a},988:function(t,i){t.exports=function(t){var i=[];return i.push(".",t.id," .q34efa415{background:",t.bgColor," !important}.",t.id," .m22935b69{background:#fff !important;-webkit-flex-direction:row !important;-ms-flex-direction:row !important;flex-direction:row !important;background:",t.bgColor," !important}.",t.id," .m22935b69,.",t.id," .r4a738dde{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important}.",t.id," .r4a738dde{-webkit-justify-content:flex-end !important;-ms-flex-pack:end !important;justify-content:flex-end !important;padding-right:15px !important}.",t.id," .f1c85eb3b{position:relative !important;width:",t.advWidth,"% !important;display:block !important;overflow:hidden !important;box-sizing:border-box !important;min-width:",t.minAdWidth,"px !important;margin-right:35px !important}.",t.id," .f1c85eb3b.d38c40cb3 .tb2e091bb{line-height:18px !important;margin-top:0 !important}.",t.id," .f1c85eb3b.d38c40cb3 .waa41750a{padding-right:15px !important}.",t.id," .f1c85eb3b.d38c40cb3 .rd9ce7af7{overflow:hidden !important;margin-left:auto !important}.",t.id," .f1c85eb3b.d38c40cb3 .e4af9dc88{width:76px !important;height:52px !important}.",t.id," .f1c85eb3b.d38c40cb3 .j5dd537d{width:76px !important;-webkit-flex:0 0 76px !important;-ms-flex:0 0 76px !important;flex:0 0 76px !important;height:52px !important}.",t.id," .f1c85eb3b.d38c40cb3 .y4e62421b,.",t.id," .f1c85eb3b.d38c40cb3 .c8deb4d31{width:76px !important}.",t.id," .d6070c0e9 .cb7a130{display:none !important}.",t.id," .waa41750a{padding-right:16px !important;height:100% !important}.",t.id," .kfb3f1131{overflow:auto !important}.",t.id," .n7d735012{padding-left:6px !important;padding-right:6px !important;display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important}.",t.id," .rd9ce7af7{position:relative !important;overflow:hidden !important;-webkit-flex:0 0 61px !important;-ms-flex:0 0 61px !important;flex:0 0 61px !important;width:68px !important;margin-left:auto !important}.",t.id," .e4af9dc88{width:68px !important;height:61px !important}.",t.id," .x2aef3a18{position:absolute !important;width:21px !important;background-color:rgba(0,0,0,.2) !important;color:#fff !important;z-index:2 !important;text-align:center !important}.",t.id," .g44908f4c{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important;-webkit-flex-direction:column !important;-ms-flex-direction:column !important;flex-direction:column !important;-webkit-justify-content:space-between !important;-ms-flex-pack:justify !important;justify-content:space-between !important;overflow:hidden !important}.",t.id," .j5dd537d{height:61px !important;-webkit-flex:0 0 68px !important;-ms-flex:0 0 68px !important;flex:0 0 68px !important}.",t.id," .xabf89541{font-family:Roboto-Regular,Helvetica,Arial,sans-serif !important;font-size:",t.fontSize,"px !important;color:#000 !important;line-height:14px !important;overflow:auto !important}.",t.id," .xabf89541,.",t.id," .d1c0eb848{display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important;letter-spacing:0 !important;padding-top:7px !important}.",t.id," .d1c0eb848{box-sizing:padding-box !important;-webkit-justify-content:flex-start !important;-ms-flex-pack:start !important;justify-content:flex-start !important;font-family:Roboto-Light,Helvetica,Arial,sans-serif !important;font-size:",t.fontSize,"px !important;-webkit-flex-direction:row !important;-ms-flex-direction:row !important;flex-direction:row !important;color:",t.contactsFontColor," !important}.",t.id," .h7560a58b{overflow:hidden !important;-webkit-box-orient:vertical !important;display:-webkit-box !important;-webkit-line-clamp:3 !important;max-height:54px !important;color:",t.contactsFontColor," !important}.",t.id," .m45353921{float:left !important;white-space:nowrap !important}.",t.id," .c8deb4d31{font-size:8px !important;color:#000 !important;z-index:2 !important;width:68px !important}.",t.id," .f1c85eb3b .a497229e8:hover{background:",t.hoverUrlColor," !important}.",t.id," .f1c85eb3b .a497229e8{line-height:15px !important;white-space:nowrap !important;width:68px !important;box-sizing:border-box !important;padding:0 8px !important;overflow:hidden !important;text-overflow:ellipsis !important;height:18px !important;color:#fff !important;background:",t.urlColor," !important;text-align:center !important}.",t.id," .f1c85eb3b .he461ef08{font-family:Roboto-Regular,Helvetica,Arial,sans-serif !important;color:#fff !important;letter-spacing:0 !important;line-height:14px !important;font-size:10px !important}.",t.id," .f1c85eb3b .maa7751de{padding-right:10px !important}.",t.id," .f1c85eb3b .t1dff3cbe{font-family:Roboto-Regular,Helvetica,Arial,sans-serif !important;letter-spacing:0 !important;line-height:14px !important}.",t.id," .f1c85eb3b .maa7751de:hover{color:",t.titleHoverColor," !important}.",t.id," .f1c85eb3b .cb7a130{white-space:nowrap !important;overflow:hidden !important;text-overflow:ellipsis !important;-webkit-flex:1 !important;-ms-flex:1 !important;flex:1 !important}.",t.id," .f1c85eb3b .ydc2da4c8{font-weight:700 !important;margin-top:-2px !important;margin-right:10px !important;line-height:18px !important}.",t.id," .f1c85eb3b .rc1d7bd1e{margin-right:3px !important}.",t.id," .f1c85eb3b .k88f02ea8{font-family:Roboto-Bold,Helvetica,Arial,sans-serif !important;color:#",t.titleColor," !important;font-size:",t.titleFontSize,"px !important;letter-spacing:0 !important}.",t.id," .f1c85eb3b .k88f02ea8:hover{color:",t.titleHoverColor," !important}.",t.id," .f1c85eb3b .a8a7eeb6{border:none !important}.",t.id," .f1c85eb3b .bb2803502{overflow:auto !important}.",t.id," .d78ed5fe7{visibility:hidden !important}.",t.id," .f1c85eb3b:hover .d78ed5fe7{visibility:visible !important}.",t.id," .xf7713f4b{display:inline-block !important;font-size:10px !important;background:rgba(0,0,0,.25) !important;width:21px !important;height:15px !important;padding:0 !important}.",t.id," .xf7713f4b,.",t.id," .s6b4097f6{vertical-align:middle !important}"),i.join("")}},989:function(t,i,e){"use strict";var o,r=(o=function(t,i){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var e in i)i.hasOwnProperty(e)&&(t[e]=i[e])})(t,i)},function(t,i){function e(){this.constructor=t}o(t,i),t.prototype=null===i?Object.create(i):(e.prototype=i.prototype,new e)});Object.defineProperty(i,"__esModule",{value:!0});var a=function(t){function i(){return null!==t&&t.apply(this,arguments)||this}return r(i,t),i.prototype.fitImage=function(){this.imageEl&&this.imageEl.fitImage()},i.prototype.getImageSize=function(){return{width:76,height:57}},i.prototype.onMount=function(){this.imageEl=this.getResourceById("image");var t=this.getResourceById("region"),i=t&&t.getElement();i&&i.clientWidth<i.scrollWidth&&this.setMod("_region_hidden");var e=this.getResourceById("gradient");if(e){var o=Math.floor(360*Math.random());e.setStyle({background:"linear-gradient("+o+"deg, rgba(254,255,255,1) 0%,rgba(221,241,249,1) 55%,rgba(160,216,239,1) 100%)"})}},i.prototype.makeTwoAds=function(){var t=this.getResourceById("root");t&&t.addClass(this.b_("_two-ads"))},i.prototype.renderWarning=function(t){return t.warning?e(109).hasImportantFlag(t.bannerFlags)?null:e(0).create("yatag",{resourceId:"warning",class:this.b_("__warning","__warning_normal"),onClick:function(t){return t.preventDefault()}},e(0).create(e(152).Scroll,null,e(0).create("yatag",{class:this.b_("__warning-text")},e(0).create(e(20).Text,{text:t.warning})))):null},i.prototype.renderImportantWarning=function(t){return e(109).hasImportantFlag(t.bannerFlags)?e(0).create(e(144),{adv:t}):null},i.prototype.renderPicture=function(t){return this.getPicture()?e(0).create(e(143).Image,{resourceId:"image",images:t.images,size:"cover",width:"100%",height:"100%",smartCenter:!0,disableFitOnMount:!0,className:this.b_("__picture")}):e(0).create("yatag",{class:this.b_("__picture_no-picture"),resourceId:"gradient"})},i.prototype._render=function(t,i,o){var r=i.adv,a=r.settings.bgColor,n=this.getDataSource().getLanguage();return e(0).create("yatag",{class:t(),resourceId:"root","data-id":r.adId},e(0).create(e(12),{class:t("__link yap-link"),href:r.url,tag:"a"},e(0).create("yatag",{class:t("__content"),resourceId:"content",style:"background:"+(a||"transparent")},e(0).create("yatag",{class:t("__left-container")},e(0).create(e(145),{class:t("__domain"),adv:r,nofavicon:!0}),e(0).create("yatag",{class:t("__picture-container")},this.renderPicture(r)),this.renderWarning(r)),e(0).create("yatag",{class:t("__right-container")},e(0).create(e(236),{class:t("__title"),adv:r,addAge:!0}),e(0).create("yatag",{class:t("__body-container")},e(0).create("yatag",{class:t("__text-container")},e(0).create(e(366),{class:t("__body"),adv:r,resourceId:"text"}),e(0).create("yatag",{class:t("__contacts")},e(0).create(e(843).Address,{className:t("yap-address"),adv:r,language:n}),e(0).create(e(240),{resourceId:"region",class:t("__contacts-item"),mod:"_inline",adv:r,language:n})))),this.renderImportantWarning(r)),this.renderFeedback({}),this.renderAdtune({}))))},i}(e(34));i.AdvMailruHorizontal=a}});