(function(){function o(){var e=GetSaveStatusVrp;e.init([{rc:r,dc:u,ma:f},{rc:n,dc:t,ma:i}]);e.getMediaIdStrategy=s;e.updateSaveStatusStrategy=h}function s(n){if(n.mid)return n.mid;if(!n.actpayload)return null;var t=JSON.parse(n.actpayload);return t?t.mid:null}function h(n){var t=n.e;sj_evt.fire(e,t)}var n="dg_u|mc_vrvc|mc_vtvc",t="sa_wrapper",i="data-eventpayload",r="vidhero",u="sa_wrapper",f="data-eventpayload",e="StatefulAction.UpdateState";o();sj_evt.fire("GetSaveStatusVrp_Loaded",GetSaveStatusVrp)})()