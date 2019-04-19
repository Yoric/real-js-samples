if (self.CavalryLogger) { CavalryLogger.start_js(["2iN0m"]); }

__d("MessengerSecondarySearchFunnelLogger",["FunnelLogger","MercuryConfig","MessengerSecondarySearchFunnelConstants"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("MessengerSecondarySearchFunnelConstants").FUNNEL_NAME,h=b("MessengerSecondarySearchFunnelConstants").EVENTS,i=b("MessengerSecondarySearchFunnelConstants").SEARCH_SURFACES,j=b("MessengerSecondarySearchFunnelConstants").MICRO_SESSION_TYPES,k=b("MessengerSecondarySearchFunnelConstants").END_ACTIONS,l=new Map(),m=new Map(),n=new Map(),o=new Map(),p=0;function a(a,c,d,e,f){if(!f)return;b("FunnelLogger").startFunnel(g,f);b("FunnelLogger").setFunnelTimeout(g,86400);n.set(f.toString(),c);b("FunnelLogger").appendActionWithPayloadIfNew(g,f,h.START,{search_surface:c,entry_surface:d,thread_fbid:e,client:a});(b("MercuryConfig").ChatComposer||c!==i.OMNIPICKER)&&u(f)}function c(a,c,d,e,f){if(!d)return;var i=m.get(d.toString()),k=l.get(d.toString());k=k?j.QUERY:j.NO_QUERY;i!==null&&(v(d,k),n["delete"](d.toString()));b("FunnelLogger").appendActionWithPayloadIfNew(g,d,h.END,{end_reason:a,action_name:c,thread_fbid:e,is_new_thread:f});b("FunnelLogger").endFunnel(g,d)}function d(a,c){if(!c)return;var d=c.toString(),e=l.get(d),f=n.get(d);!e&&!!a?((b("MercuryConfig").ChatComposer||f===i.BROADCAST||f===i.GROUP_CREATION)&&v(c,j.NO_QUERY),u(c)):e&&a===""&&e!==""&&(v(c,j.QUERY),(b("MercuryConfig").ChatComposer||f===i.BROADCAST||f===i.GROUP_CREATION)&&u(c));l.set(d,a);b("FunnelLogger").appendActionWithPayload(g,c,h.QUERY_CHANGED,{query_string:a})}function f(a,c,d,e,f,k,p,q){if(!p)return;var r=p.toString(),s=n.get(r),t=m.get(r);o.set(t,!0);b("FunnelLogger").appendActionWithPayload(g,p,h.RESULT_SELECTED,{query_string:e,result_fbid:a,result_type:d,result_index:c,data_source:[f],search_surface:k,micro_session_id:t,selection_type:q});s===i.OMNIPICKER?(v(p,j.QUERY),b("MercuryConfig").ChatComposer?(l.set(r,""),u(p)):l["delete"](r)):e&&s===i.GROUP_CREATION&&(l.set(r,""),v(p,j.QUERY),u(p))}function q(a,c,d){if(!d)return;b("FunnelLogger").appendActionWithPayload(g,d,h.SOURCE_STARTED,{query_string:a,data_source:[c]})}function r(a,c,d,e,f,i){if(!i)return;b("FunnelLogger").appendActionWithPayload(g,i,h.SOURCE_ENDED,{query_string:a,results_count:c,data_source:[d],status:e,result_used:f})}function s(a,c,d,e){if(!e)return;if(c.length===0)return;b("FunnelLogger").appendActionWithPayload(g,e,h.IMPRESSIONS,{query_string:a,impression_list:c})}function t(a,c,d){if(!d)return;b("FunnelLogger").appendActionWithPayload(g,d,h.TOKEN_REMOVED,{deleted_result_id:a,cleared_all_tokens:c})}function u(a){b("FunnelLogger").appendActionWithPayload(g,a,h.MICRO_SESSION_STARTED,{micro_session_id:p}),m.set(a.toString(),p),o.set(p,!1),p+=1}function v(a,c){var d=m.get(a.toString());b("FunnelLogger").appendActionWithPayload(g,a,h.MICRO_SESSION_ENDED,{micro_session_id:d,micro_session_end_reason:o.get(d)?k.RESULT_SELECTED:k.ABANDON,micro_session_type:c});o["delete"](d);m["delete"](a.toString())}e.exports={endFunnel:c,impressions:s,queryChanged:d,resultSelected:f,sourceEnded:r,sourceStarted:q,startFunnel:a,tokenRemoved:t}}),null);
__d("XPPDistributersList.react",["ExpressWifiRetailersPageType","React","XPPAbstractRetailersList.react"],(function(a,b,c,d,e,f){"use strict";function a(a){return b("React").createElement(b("XPPAbstractRetailersList.react"),{pageType:b("ExpressWifiRetailersPageType").DISTRIBUTOR})}e.exports=a}),null);