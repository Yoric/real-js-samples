if (self.CavalryLogger) { CavalryLogger.start_js(["s0k7L"]); }

__d("AdsUEditorCampaignGroupToggleAcceleratedDeliveryReducerPlugin",["AdsAPIPacingType","AdsCampaignGroupBudgetMutationUtils","AdsMutators","AdsUEditorCampaignGroupReducerUtils","AdsUEditorCampaignGroupToggleAcceleratedDeliveryActionFlux"],(function(a,b,c,d,e,f){"use strict";a={reduce:b("AdsUEditorCampaignGroupReducerUtils").createReducer({},function(a,c){return b("AdsMutators").mutateEach(a,c.campaignGroupIDs,function(a){var d=c.useAcceleratedDelivery?b("AdsAPIPacingType").NO_PACING:b("AdsAPIPacingType").STANDARD;return b("AdsCampaignGroupBudgetMutationUtils").setCampaignGroupPacingType(a,d)})},b("AdsUEditorCampaignGroupToggleAcceleratedDeliveryActionFlux").actionType)};e.exports=a}),null);