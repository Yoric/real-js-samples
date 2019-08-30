window.scriptsLoaded = window.scriptsLoaded || {}; window.scriptProcessStart = window.scriptProcessStart || {}; window.scriptProcessStart['owa.Analytics.mail.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[57],{1707:function(e,t,n){"use strict";var r;function i(e){return void 0===r&&(r=Math.floor(1e4*Math.random())),r<100*e}n.d(t,"a",function(){return i})},7001:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(232),o=n(29),a=n(48),s=n(168),d=function(e){function t(t,n){var r=e.call(this,null,null,{isCore:!0})||this;if(r.addData(a.b.bootType,n),r.addData("FEServer",Object(s.g)()),r.addData("RefUrl",Object(s.i)()),t.navigationTiming&&r.addMetrics(t.navigationTiming,{pltnav:"pltnav"}),t.perfMarker)for(var i=0;i<t.perfMarker.length;i++){var d=t.perfMarker[i];r.addCustomProperty(d.nam,d.st)}if(t.resourcesTiming){var c=0;for(i=0;i<t.resourcesTiming.length;i++){var u=t.resourcesTiming[i],p=void 0;0==u.nam.indexOf("sessiondata.ashx")?p="sd":0==u.nam.indexOf("userbootsettings.ashx")?p="ubs":"service.svc"!=u.nam&&(p=""+c,c++),r.addMetrics(u,{},p)}}var g=Object(o.e)();return g&&g.UserOptions&&(g.UserOptions.ReactOptinSettings&&g.UserOptions.ReactOptinSettings.MailGraduatedFromBeta&&r.addCustomProperty("graduated","1"),r.addCustomProperty("optin",""+g.UserOptions.ClientTypeOptInState)),r}return r.__extends(t,e),t.prototype.getEventType=function(){return"Owa_PageLoadTime"},t.prototype.addMetrics=function(e,t,n){var i,o,a=Object.keys(e);try{for(var s=r.__values(a),d=s.next();!d.done;d=s.next()){var c=d.value;t[c]?this.addData(t[c],e[c]):this.addCustomProperty(n?c+"-"+n:c,e[c])}}catch(e){i={error:e}}finally{try{d&&!d.done&&(o=s.return)&&o.call(s)}finally{if(i)throw i.error}}},t}(i.a);var c=n(90),u=n(188),p=window.genericDiagnostics,g=p&&p.bt;function l(e){return r.__awaiter(this,void 0,void 0,function(){var t;return r.__generator(this,function(n){switch(n.label){case 0:if(g)return[3,4];n.label=1;case 1:return n.trys.push([1,3,,4]),[4,(r=Object(u.a)()+"resources/analytics-ping.js",fetch(r,{method:"GET",headers:{}}))];case 2:return t=n.sent(),g=function(e,t){var n=e.headers.get("Date");if(null==n&&Object(c.c)())return"BrowserCache";var r=Date.parse(n);if(isNaN(r))throw new Error("Invalid Date");return r-t.navigationTiming.ns>-1e3?"NoCache":"BrowserCache"}(t,e),[3,4];case 3:return n.sent(),[3,4];case 4:return[2,g]}var r})})}var f=n(687),h=function(e){function t(t,n,r){var i=e.call(this,t,null)||this;return r&&(r.headers&&i.addData(a.b.correlationVectors,r.headers.get("ms-cv")),r.datapoint&&r.datapoint.customData&&i.addCustomData(r.datapoint.customData)),i.addData(a.b.attemptCount,n,!0),i.addData(a.b.tenantGuid,Object(o.e)().SessionSettings.ExternalDirectoryTenantGuid),i.addData(a.b.throughAFD,Object(s.k)()),i}return r.__extends(t,e),t.prototype.getEventType=function(){return"client_network_request"},t.prototype.addResponseDiagnostics=function(e){e&&(e.headers&&(this.addData(a.b.requestIds,e.headers.get("request-id")),this.addData(a.b.afdId,e.headers.get("x-msedge-ref")),this.addData(a.b.contentEncoding,e.headers.get("content-encoding")),this.addData(a.b.responseContentLength,e.headers.get("content-length"),!0),this.logTimeDifferenceForHeaders(e.headers,"x-frontend-begin","x-frontend-end",a.c.FETimeElapsed),this.logTimeDifferenceForHeaders(e.headers,"x-backend-begin","x-backend-end",a.c.BETimeElapsed)),this.addData(a.b.status,e.status)),this.parsingTime=Object(f.a)()},t.prototype.addErrorDiagnostics=function(e){this.options=this.options||{},this.options.isCore=!0;var t=typeof e;"object"==t?(this.addData(a.a.errorMsg,e.message),this.addData(a.a.errorDetails,e.stack)):"string"==t&&this.addData(a.a.errorMsg,e)},t.prototype.addResourceTimings=function(e){if(e&&e.startTime>0){var t=e.startTime;this.addTiming(a.b.responseRecieved,this.parsingTime,t),this.addTiming(a.d.RedirectStart,e.redirectStart,t),this.addTiming(a.d.RedirectEnd,e.redirectEnd,t),this.addTiming(a.d.FetchStart,e.fetchStart,t),this.addTiming(a.d.DomainLookupStart,e.domainLookupStart,t),this.addTiming(a.d.DomainLookupEnd,e.domainLookupEnd,t),this.addTiming(a.d.ConnectStart,e.connectStart,t),this.addTiming(a.d.SecureConnectionStart,e.secureConnectionStart,t),this.addTiming(a.d.ConnectEnd,e.connectEnd,t),this.addTiming(a.d.RequestStart,e.requestStart,t),this.addTiming(a.d.ResponseStart,e.responseStart,t),this.addTiming(a.d.ResponseEnd,e.responseEnd,t),this.addData(a.d.NextHopProtocol,null!=e.nextHopProtocol?e.nextHopProtocol:"")}},t.prototype.addTiming=function(e,t,n){var r,i;this.addData(e,(i=n,(r=t)&&r>0?Math.floor(r-i):-1),!0)},t.prototype.logTimeDifferenceForHeaders=function(e,t,n,r){var i=e.get(t),o=e.get(n),a=i?new Date(i):void 0,s=o?new Date(o):void 0;if(a&&s){var d=Math.abs(s.getTime()-a.getTime());this.addCustomProperty(r,d)}},t}(i.a);var v=n(1123);function b(e,t,n,r,i){var o=new h(t,r,i);return e.then(function(e){return o.addResponseDiagnostics(e),i&&i.datapoint&&(i.datapoint.headersCustomData&&e&&o.addCustomData(i.datapoint.headersCustomData(e.headers)),i.datapoint.jsonCustomData)?e.clone().json().then(function(e){o.addCustomData(i.datapoint.jsonCustomData(e))}):Promise.resolve()}).catch(function(e){o.addErrorDiagnostics(e)}).then(function(){!function(e,t){S(e)>-1&&(T[function(e){if(e.match(/https?:/))return e;if(null!=typeof window&&null!=e){var t="/"!=e.charAt(0)?"/"+e:e;return window.location.origin+t}return e}(e)]=t,w(),clearTimeout(m),m=setTimeout(function(){w(),Object.keys(T).forEach(function(e){var t=S(e);t<y&&O(e)})},1e3))}(n,o)})}var m,T={};var y=-1;function w(){Object.keys(T).forEach(function(e){var t=S(e),n=function(e){var t=null;if(e&&Object(v.a)()){var n=window.performance.getEntriesByName(e);n.length>0&&(t=n[0])}return t}(e);n&&(y=Math.max(t,y),O(e,n))}),0==Object.keys(T).length&&(Object(v.a)()&&(window.performance.clearResourceTimings?window.performance.clearResourceTimings():window.performance.webkitClearResourceTimings&&window.performance.webkitClearResourceTimings()),clearTimeout(m))}function O(e,t){var n=T[e];t&&n.addResourceTimings(t),te(n),delete T[e]}var D=/n=([\d]+)/;function S(e){var t=D.exec(e);return t&&parseInt(t[1])||-1}var P=n(62),j=n(1087),C=n(806),E=n(11),L=function(e){var t=e.eventName;if(t&&Object(P.c)("dp")&&(!Object(P.a)("dp")||t.toLowerCase().indexOf(Object(P.a)("dp").toLowerCase())>-1)||Object(j.a)().traceDatapoints){var n="Datapoint: "+t+"-"+Object(C.a)(e.properties)+"-"+Object(C.b)(e);E.c.info(n)}},M=function(){var e=navigator,t=e.connection||e.mozConnection||e.webkitConnection;return t?{type:t.type,effectiveType:t.effectiveType,downlink:t.downlink,rtt:t.rtt,saveData:t.saveData}:null},x=null,k=!1;"undefined"!=typeof location&&(k=location.hostname&&location.hostname.indexOf("live.com")>-1);var A=function(){if(!x){var e=Object(o.e)();e&&(x=e.IsConsumerChild?"c_child":e.SessionSettings.IsPremiumConsumerMailbox?"c_premium":e.SessionSettings.IsShadowMailbox?"c_shadow":k?"c_standard":"business")}return x},R=n(3734);function W(e){return R.AWTLogManager.getLogger(e)}function I(e){return new R.AWTEventProperties(e)}function _(e,t,n,r,i){var d=W(e),c=I();if(c.setProperty(a.b.features,JSON.stringify(n)),c.setProperty(a.b.tenantGuid,Object(o.e)().SessionSettings.ExternalDirectoryTenantGuid),F(c),c.setProperty(a.b.serviceVersion,Object(s.j)()),c.setProperty(a.b.dag,Object(s.e)()),c.setProperty(a.b.bootType,i),t){var u=t.UserOptions,p=t.ViewStateConfiguration,g={WindowWidth:window.innerWidth,WindowHeight:window.innerHeight};window.screen&&(g.ScreenWidth=window.screen.availWidth,g.ScreenHeight=window.screen.availHeight),c.setProperty(a.b.Settings,JSON.stringify({ReadingPanePosition:u.GlobalReadingPanePositionReact,ListViewType:u.GlobalListViewTypeReact,FocusedEnabled:u.IsFocusedInboxEnabled,ListViewBits:p.ListViewBitFlags,FolderViewBits:p.GlobalFolderViewState,PreviewText:u.ShowPreviewTextInListView,SenderOnTop:u.ShowSenderOnTopInListView,InlinePreviews:u.ShowInlinePreviews,HoverActions:p.MailTriageOnHoverActions,Ponts:u.NewEnabledPonts,Theme:(u.ThemeStorageId||"")+"|"+u.IsDarkModeTheme,MasterCategories:(t.MasterCategoryList.MasterList||[]).length,IsEdu:r&&r.IsEdu,NetworkInfo:M(),Dimensions:g,AdMarket:t.AdMarket,DisplayDensity:u.DisplayDensityMode,ConsumerAdsExperiment:u.ConsumerAdsExperimentMode})),c.setProperty(a.b.Dates,JSON.stringify({OwaLogon:u.FirstOWALogon,MailLogon:u.FirstOWAReactMailLogon,PeopleLogon:u.FirstOWAReactPeopleLogon,CalendarLogon:u.FirstOWAReactCalendarLogon,MiniLogon:u.FirstOWAReactMiniLogon,MailboxCreate:t.MailboxCreateDate}))}return d.logSession(R.AWTSessionState.Started,c),d.getSessionId()}function F(e){e.setProperty(a.b.beServer,Object(s.b)()),e.setProperty(a.b.mbxGuid,Object(o.e)().SessionSettings.MailboxGuid),e.setProperty(a.b.forest,Object(s.f)()),e.setProperty(a.b.puid,Object(o.e)().SessionSettings.UserPuid),e.setProperty(a.b.clientId,Object(s.c)()),e.setProperty(a.b.ring,Object(s.h)()),e.setProperty(a.b.userType,A()),e.setProperty(a.b.app,Object(s.a)())}var N,G=n(5),H=n(1120),U=n(1707);function V(e){return"function"==typeof e.ariaTenantTokens?e.ariaTenantTokens():e.ariaTenantTokens}n.d(t,"getInitializeAnalyticsPromse",function(){return q}),n.d(t,"defaultAnalyticsOptions",function(){return J}),n.d(t,"initializeAnalytics",function(){return Z}),n.d(t,"getOTelAddinsLogger",function(){return $}),n.d(t,"getSessionId",function(){return K}),n.d(t,"flush",function(){return Q}),n.d(t,"shouldLogDatapoint",function(){return ee}),n.d(t,"logDatapoint",function(){return te}),n.d(t,"logPLTDatapoint",function(){return ne}),n.d(t,"captureServiceActionOptics",function(){return b});var B=new Promise(function(e){N=e});function q(){return B}var z,J={ariaTenantTokens:[],isTesting:!1,maxErrorsPerSession:1e4,flightControls:null,verboseWhiteListEvents:[]};function Z(e,t,n){e&&(e=r.__assign({},J,e)),(Object(G.d)("ring-dogfood")||Object(G.d)("an-no-sample-ppe"))&&delete e.flightControls;var i,a=(i=e.ariaTenantTokens[0],R.AWTLogManager.setTransmitProfile(R.AWT_NEAR_REAL_TIME),R.AWTLogManager.initialize(i),R.AWTLogManager.getSemanticContext()),d=Object(o.e)();a&&(a.setAppVersion(Object(s.d)()),d&&(a.setUserTimeZone(d.UserOptions.TimeZone),a.setUserLanguage(d.SessionSettings.UserCulture))),Object(P.d)()||V(e).forEach(function(e){Promise.all([n,l(window.pltData)]).then(function(n){z=_(e,d,t,n[0],n[1])}).catch(function(){z=_(e,d,t)})}),N(e)}function $(e){return W(e)}function K(){return z}function Q(){R.AWTLogManager.flush(function(){})}function X(e,t){return!t||!t.flightControls||e.options&&e.options.isCore?null:t.flightControls[e.getEventType()]}var Y=0;function ee(e,t){var n=e.getEventType();if(Object(i.d)(n))return!0;if(n==i.b&&(!t.verboseWhiteListEvents||-1==t.verboseWhiteListEvents.indexOf(e.eventName)))return!1;if(n==H.a&&++Y>t.maxErrorsPerSession)return!1;var r=X(e,t);return!(r&&!Object(G.a)(r.flight))&&((!e.options||!e.options.logEvery||(e.sessionOccurence-1)%e.options.logEvery==0)&&(function(e){return!e.options||!e.options.sessionSampleRate||Object(U.a)(e.options.sessionSampleRate)}(e)&&function(e){switch(e.options&&e.options.variant){case 0:return!1;case 2:return 1==e.sessionOccurence;case 3:return e.sessionOccurence>1;default:return!0}}(e)))}function te(e){B.then(function(t){var n=Object(G.d)("an-full-logging"),r=X(e,t);if((ee(e,t)||n)&&(L(e),!(Object(P.d)()||t&&t.isTesting)))for(var o=function(e,t){return t&&t.tenantTokens?t.tenantTokens:V(e)}(t,e.options),s=e.getEventType(),d=0;d<o.length;d++){var c=I(n?i.b:s);n&&c.setProperty(a.b.originalEvent,s,R.AWTPropertyType.String);for(var u=Object.keys(e.properties),p=0;p<u.length;p++){var g=e.properties[u[p]];c.setProperty(u[p],g.value,g.isInt?R.AWTPropertyType.Int64:R.AWTPropertyType.Unspecified)}F(c),c.setProperty(a.b.Sampled,r&&r.rate?r.rate:100),e.propertyBag&&c.setProperty(a.b.miscData,Object(C.b)(e)),e.piiBag&&c.setPropertyWithPii(a.b.piiData,Object(C.a)(e.piiBag),R.AWTPiiKind.GenericData),W(o[d]).logEvent(c)}})}function ne(e){return r.__awaiter(this,void 0,void 0,function(){var t,n,i;return r.__generator(this,function(r){switch(r.label){case 0:return t=te,n=d.bind,i=[void 0,e],[4,l(e)];case 1:return t.apply(void 0,[new(n.apply(d,i.concat([r.sent()])))]),[2]}})})}}},0,[279,51]]);
//# sourceMappingURL=owa.Analytics.mail.js.map
window.scriptsLoaded['owa.Analytics.mail.js'] = 1; window.scriptProcessEnd = window.scriptProcessEnd || {}; window.scriptProcessEnd['owa.Analytics.mail.js'] = (new Date()).getTime();