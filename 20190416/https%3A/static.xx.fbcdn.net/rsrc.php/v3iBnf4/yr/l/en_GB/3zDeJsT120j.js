if (self.CavalryLogger) { CavalryLogger.start_js(["mZZqg"]); }

__d("ReactComposerTagEventTicketMicroAttachmentContainer.react",["cx","fbt","DateBlock.react","FDSButton.react","FlexLayout.react","FluxContainer","FluxStore","React","ReactComposerLoggingName","ReactComposerTaggerActions","ReactComposerTaggerStore","ReactComposerTaggerType","XUIText.react"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}c.getStores=function(){return[b("ReactComposerTaggerStore")]};c.calculateState=function(a,c,d){a=b("ReactComposerTaggerStore").getTaggerData(c.composerID,b("ReactComposerTaggerType").TAG_EVENT_TICKET);d=null;a&&a.ticketedEventData&&(d=a.ticketedEventData);return{eventData:d}};var d=c.prototype;d.render=function(){var a=this,c=this.state.eventData;if(!c)return null;var d=c.getAuxiliaryData();return!d.day||!d.month?null:b("React").createElement("div",{className:"_37dd"},b("React").createElement(b("FlexLayout.react"),{align:"center",className:"_37de",justify:"all"},b("React").createElement(b("FlexLayout.react"),{align:"center"},b("React").createElement(b("DateBlock.react"),{day:d.day,month:d.month}),b("React").createElement("div",{className:"_3-9b"},b("React").createElement(b("XUIText.react"),{display:"block",size:"header4",weight:"bold"},c.getTitle()),d.subtitle)),b("React").createElement(b("FDSButton.react"),{label:h._("Get Tickets"),tooltip:d.ticket})),b("React").createElement("button",{className:"_37df",onClick:function(c){b("ReactComposerTaggerActions").setTaggerData(a.props.composerID,b("ReactComposerLoggingName").TAG_EVENT_TICKET,b("ReactComposerTaggerType").TAG_EVENT_TICKET,{})}}))};return c}(b("React").Component);e.exports=b("FluxContainer").create(a,{withContext:!0,withProps:!0})}),null);