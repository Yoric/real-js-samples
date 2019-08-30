window.scriptsLoaded = window.scriptsLoaded || {}; window.scriptProcessStart = window.scriptProcessStart || {}; window.scriptProcessStart['owa.Webpush-Notifications.mail.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[265],{1887:function(e,t,n){"use strict";n.r(t);var r,o=n(539),i=n(1),a=Object(i.action)("setWebPushPermission",function(e){return{permission:e}});Object(i.mutator)(a,function(e){var t=e.permission;o.c.webPushPermission=t});!function(e){e[e.Enabled=0]="Enabled",e[e.Disabled=1]="Disabled",e[e.Dismissed=2]="Dismissed"}(r||(r={}));var s=Object(i.action)("showEnableWebPushCallout"),c=Object(i.action)("completeEnableWebPushCallout",function(e){return{result:e}}),u=Object(i.action)("showManualNotificationPermissionsPrompt"),l=Object(i.action)("completeManualNotificationPermissionsPrompt",function(e){return{permission:e}}),d=Object(i.action)("showNotificationPermissionsOverlay"),m=Object(i.action)("completeNotificationPermissionsOverlay"),h=Object(i.action)("showWebPushSecondChanceCallout"),b=Object(i.action)("completeWebPushSecondChanceCallout",function(e){return{tryAgain:e}}),f=Object(i.action)("showWebPushSuccessCallout"),p=Object(i.action)("dismissWebPushSuccessCallout"),g=(Object(i.mutator)(s,function(){return g(1)}),Object(i.mutator)(c,function(){return v(1)}),Object(i.mutator)(d,function(){return g(2)}),Object(i.mutator)(m,function(){return v(2)}),Object(i.mutator)(u,function(){return g(3)}),Object(i.mutator)(l,function(){return v(3)}),Object(i.mutator)(h,function(){return g(5)}),Object(i.mutator)(b,function(){return v(5)}),Object(i.mutator)(f,function(){return g(4)}),Object(i.mutator)(p,function(){return v(4)}),function(e){o.c.currentView=e}),v=function(e){o.c.currentView===e&&(o.c.currentView=0)},w=Object(i.action)("UPDATE_WEBPUSH_OPTIONS",function(e,t){return{enabled:e,enabledTimeInUTCMs:t}}),_=n(217),y=(Object(i.mutator)(w,function(e){var t=e.enabled,n=e.enabledTimeInUTCMs,r=Object(_.c)(_.a.WebPushNotifications);r.enabled=t,r.enabledTimeInUTCMs=n}),n(0)),x=n(7),O=n(745),C=Object(i.action)("completeWebPushLightningCallout",function(e){return{enabled:e}}),P=n(1264),j=(Object(i.orchestrator)(C,function(e){var t=e.enabled;t?Object(P.b)("lightning"):Object(P.c)(),j(t,!0)}),Object(i.orchestrator)(b,function(e){var t=e.tryAgain;return j(t,!1)}),function(e,t){return y.__awaiter(void 0,void 0,void 0,function(){var n,r,o;return y.__generator(this,function(i){switch(i.label){case 0:return e?[4,O.h.import()]:[3,7];case 1:return n=i.sent(),[4,O.e.import()];case 2:return[4,i.sent()()];case 3:return(r=i.sent()).enabled?[3,5]:(w(!0,Date.now().toString()),[4,_.d.importAndExecute(_.a.WebPushNotifications,r)]);case 4:i.sent(),i.label=5;case 5:return[4,n(window,r,Object(x.a)().SessionSettings.MailboxGuid,t)];case 6:o=i.sent(),Object(P.f)(o),i.label=7;case 7:return[2]}})})}),B=n(168),S=n(56),k="ows/beta/webpushsubscriptions/delete";function E(e,t){var n={endpoint:e,clientId:t};return Object(S.d)(k,n).then(function(e){if(!0===e.unregistered)return Promise.resolve(!0);throw new Error("Failed to unregister endpoint.")})}var W=n(11),D=n(96);var T="sw_webpush.js",N="/webpush/";function H(e){return y.__awaiter(this,void 0,void 0,function(){var t,n,r;return y.__generator(this,function(o){var i,a,s;return i=e.location,a=null,(s=i.pathname.split("/")).length>=2&&""!=s[1]&&(a=s[1].toLowerCase()),t=function(e,t){var n=e;return null!=e&&(n=Object(D.j)("/"+e,t.pathname)),n}(a,e.location),n=null!=t?t+"/"+T:"/"+T,r={scope:N},[2,e.navigator.serviceWorker.register(n,r).then(function(e){var t=null;return null!=e.installing?t=e.installing:null!=e.waiting?t=e.waiting:null!=e.active&&(t=e.active),"activated"==t.state?e:new Promise(function(n,r){t.onstatechange=function(){if("activated"==t.state)return t.onstatechange=null,n(e)}})}).then(function(e){return e.update().then(function(){return e})}).catch(function(e){throw W.c.warn("[WebPush] Service worker registraiton failed, error: "+e.message),e})]})})}function L(e){return y.__awaiter(this,void 0,void 0,function(){var t,n,r,o;return y.__generator(this,function(i){switch(i.label){case 0:return[4,e.navigator.serviceWorker.getRegistrations()];case 1:for(t=i.sent(),n=null,r=e.location.origin+N,o=0;o<t.length;++o)if(t[o].scope.toLowerCase()==r){n=t[o];break}return[2,n]}})})}function F(e){return y.__awaiter(this,void 0,void 0,function(){var t,n,r;return y.__generator(this,function(o){switch(o.label){case 0:return t=null,[4,L(e)];case 1:return null==(n=o.sent())?[3,6]:[4,n.pushManager.getSubscription()];case 2:return null==(r=o.sent())?[3,4]:(t=r.endpoint,[4,r.unsubscribe()]);case 3:o.sent()||W.c.warn("[WebPush] Failed to unsubscribe."),o.label=4;case 4:return[4,n.unregister()];case 5:o.sent(),o.label=6;case 6:return[2,t]}})})}function I(e){return y.__awaiter(this,void 0,void 0,function(){var t,n,r;return y.__generator(this,function(o){switch(o.label){case 0:return[4,F(e)];case 1:return t=o.sent(),n=!0,t?(r=Object(B.c)(),[4,E(t,r)]):[3,3];case 2:n=o.sent(),o.label=3;case 3:return[2,n]}})})}var G="ows/beta/webpushsubscriptions";function M(){return y.__awaiter(this,void 0,void 0,function(){return y.__generator(this,function(e){return[2,Object(S.b)(G).then(function(e){if(e.subscriptions)return e.subscriptions;throw new Error("Failed to load web push subscriptions")})]})})}var A="ows/beta/webpushsubscriptions";function U(e){return y.__awaiter(this,void 0,void 0,function(){return y.__generator(this,function(t){return[2,Object(S.d)(A,e).then(function(e){if(!0===e.registered)return Promise.resolve(!0);throw new Error("Failed to register endpoint.")})]})})}function V(e,t,n){return y.__awaiter(this,void 0,void 0,function(){var r,o,i;return y.__generator(this,function(a){switch(a.label){case 0:return r=function(e,t){for(var n=(4-e.length%4)%4,r="",o=0;o<n;o++)r+="=";var i=(e+r).replace(/\-/g,"+").replace(/_/g,"/"),a=t.atob(i),s=new Uint8Array(a.length);for(o=0;o<a.length;++o)s[o]=a.charCodeAt(o);return s}(t.applicationServerKey,n),[4,e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:r})];case 1:return o=a.sent(),(i=o.toJSON()).clientId=Object(B.c)(),[4,U(i)];case 2:return[2,a.sent()]}})})}function J(e,t){return y.__awaiter(this,void 0,void 0,function(){var n,r,o,i,a,s,c;return y.__generator(this,function(u){switch(u.label){case 0:return[4,H(t)];case 1:return[4,(n=u.sent()).pushManager.getSubscription()];case 2:return r=u.sent(),o=!1,null!=r?[3,4]:[4,V(n,e,t)];case 3:return o=u.sent(),[3,11];case 4:return[4,M()];case 5:for(i=u.sent(),a=!1,s=0;s<i.length;++s)if(i[s].endpoint==r.endpoint){a=!0;break}return a?((c=r.toJSON()).clientId=Object(B.c)(),[4,U(c)]):[3,7];case 6:return u.sent(),o=!0,[3,11];case 7:return W.c.warn("[WebPush] Orphaned subsciption found, unsubscribing."),[4,r.unsubscribe()];case 8:return u.sent()?[4,V(n,e,t)]:[3,10];case 9:return o=u.sent(),[3,11];case 10:W.c.warn("[WebPush] Failed to unsubscribe."),u.label=11;case 11:return[2,o]}})})}var Z=n(1612),K=-1;function X(e){return e.Notification.permission}function q(e){return y.__awaiter(this,void 0,void 0,function(){return y.__generator(this,function(t){return[2,e.Notification.requestPermission()]})})}function z(e){return y.__awaiter(this,void 0,void 0,function(){var t,n;return y.__generator(this,function(r){switch(r.label){case 0:return t=X(e),n=t,"default"!=t?[3,2]:(d(),[4,q(e)]);case 1:return n=r.sent(),m(),[3,5];case 2:return"denied"!=t?[3,5]:(u(),function(e){var t=X(e);a(t),K=e.setInterval(function(){var n=X(e);n!==t&&(a(n),t=n)},1e3)}(e),[4,new Promise(function(t,n){Object(i.orchestrator)(l,function(n){var r=n.permission;!function(e){-1!==K&&(e.clearInterval(K),K=-1)}(e),t(r)})})]);case 3:return"default"!==(n=r.sent())?[3,5]:[4,q(e)];case 4:n=r.sent(),r.label=5;case 5:return[2,n]}})})}function R(){return y.__awaiter(this,void 0,void 0,function(){return y.__generator(this,function(e){return[2,new Promise(function(e){Object(i.orchestrator)(c,function(t){var n=t.result;e(n)}),s()})]})})}var Y="ows/api/webpushsetupacknowledge/processItem";function $(e){return y.__awaiter(this,void 0,void 0,function(){var t;return y.__generator(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,Object(S.d)(Y,e)];case 1:return n.sent(),[3,3];case 2:return t=n.sent(),W.c.error("Error while web push setup ack, error: "+t),[3,3];case 3:return[2,Promise.resolve(!0)]}})})}var Q=n(1908),ee=n.n(Q);function te(e){return y.__awaiter(this,void 0,void 0,function(){var t,n,r;return y.__generator(this,function(o){switch(o.label){case 0:return[4,H(e)];case 1:return null==(t=o.sent())?[3,4]:[4,t.pushManager.getSubscription()];case 2:return null==(n=o.sent())?[3,4]:((r=n.toJSON()).clientId=Object(B.c)(),r.title=ee.a.webpushSuccessNotificationTitle,r.body=ee.a.webpushSuccessNotificationBody,[4,$(r)]);case 3:o.sent(),o.label=4;case 4:return[2]}})})}var ne=n(1627);function re(e,t,n,r){return void 0===r&&(r=!1),y.__awaiter(this,void 0,void 0,function(){var o,i;return y.__generator(this,function(a){switch(a.label){case 0:return o=Object(Z.a)(n,t),[4,oe(e,t,o,r)];case 1:return(i=a.sent())?[4,te(e)]:[3,3];case 2:a.sent(),f(),a.label=3;case 3:return[2,i]}})})}function oe(e,t,n,r){return y.__awaiter(this,void 0,void 0,function(){var o,i;return y.__generator(this,function(a){switch(a.label){case 0:return o=!1,Object(ne.g)(e,!0,n),[4,z(e)];case 1:return"granted"!=(i=a.sent())?[3,3]:[4,J(t,e)];case 2:return o=a.sent(),[3,5];case 3:return"denied"==i&&Object(ne.g)(e,!1,n),[4,I(e)];case 4:a.sent(),a.label=5;case 5:return Object(P.d)(i),"default"!=i&&Object(ne.e)(e),!o&&r&&h(),[2,o]}})})}function ie(){return y.__awaiter(this,void 0,void 0,function(){var e;return y.__generator(this,function(t){switch(t.label){case 0:return[4,_.e.import()];case 1:return[4,t.sent()(_.a.WebPushNotifications)];case 2:if(null==(e=t.sent()))throw new Error("Failed to load web push options.");return[2,e]}})})}function ae(e){return y.__awaiter(this,void 0,void 0,function(){var t,n,r;return y.__generator(this,function(i){switch(i.label){case 0:return null==e.navigator.serviceWorker||null==e.PushManager?[2]:[4,ie()];case 1:if(null==(t=i.sent()))return W.c.warn("[WebPush] WebPushNotificationsOptions not loaded."),[2];n=Object(x.a)().SessionSettings.MailboxGuid,r=Object(Z.a)(n,t),Object(ne.d)(e,r),Object(ne.c)(e);try{t.enabled?function(e,t,n){y.__awaiter(this,void 0,void 0,function(){var r,i,a,s,c;return y.__generator(this,function(u){switch(u.label){case 0:return r=Object(Z.a)(n,t),(i=Object(o.a)().enabled)?[4,oe(e,t,r,!1)]:[3,2];case 1:return u.sent(),[3,7];case 2:return Object(ne.f)(e)?(Object(ne.b)(e),[4,R()]):[3,7];case 3:return a=u.sent(),Object(P.e)(a),0!==a?[3,5]:(Object(P.b)("roaming"),[4,re(e,t,n,!0)]);case 4:return s=u.sent(),Object(P.f)(s),[3,6];case 5:1===a&&(Object(P.a)("roaming",!1),Object(ne.g)(e,!1,r)),u.label=6;case 6:i=0===a,u.label=7;case 7:return i?[3,9]:[4,I(e)];case 8:c=u.sent(),Object(P.f)(c),u.label=9;case 9:return[2]}})})}(e,t,n):I(e)}catch(e){W.c.error("[WebPush] Failed to initialize web push notifications, error: "+e)}return[2]}})})}function se(e,t,n,r){return y.__awaiter(this,void 0,void 0,function(){var o;return y.__generator(this,function(i){return o=Object(Z.a)(n,t),r?Object(ne.a)(e,o):Object(ne.g)(e,!1,o),[2,I(e)]})})}var ce=n(1351),ue=3;function le(e,t){var n=!1;return Object(ce.a)(e)&&null==t.enabledTimeInUTCMs&&(n=Object(o.a)().uniqueDaysSessionCount>=ue),n}var de=n(17),me=n(354),he=n(1682),be=n(1735),fe=n(3),pe=n(4994),ge=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return y.__extends(t,e),t.prototype.render=function(){return fe.createElement(he.a,null,fe.createElement(be.a,{isDarkThemed:!0,onClick:m},fe.createElement("div",{className:pe.guidance},fe.createElement(me.a,{iconName:"ChevronUp",className:pe.chevron}),fe.createElement("div",{className:pe.message},ee.a.webpushOverlayGuidance))),",")},t=y.__decorate([de.observer],t)}(fe.Component),ve=n(874),we=n(78),_e=n(2734),ye=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return y.__extends(t,e),t.prototype.render=function(){var e={buttonType:ve.a.primary,children:ee.a.webpushDeviceDiscoveryYes,onClick:function(){return c(0)}},t={buttonType:ve.a.normal,children:ee.a.webpushDeviceDiscoveryNoThanks,onClick:function(){return c(1)}};return fe.createElement(_e.a,{calloutProps:{beakWidth:15,directionalHint:we.DirectionalHint.bottomAutoEdge,preventDismissOnLostFocus:!0,preventDismissOnScroll:!0},targetElement:this.props.target(),hasCloseIcon:!0,onDismiss:function(){return c(2)},hasSmallHeadline:!0,isWide:!0,headline:ee.a.webpushDeviceDiscoveryHeader,primaryButtonProps:e,secondaryButtonProps:t},ee.a.webpushDeviceDiscoveryBody)},t=y.__decorate([de.observer],t)}(fe.Component),xe=n(350),Oe=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.dismiss=function(e){Object(xe.e)(t.props.lid,e?"Primary":"Secondary"),C(e)},t}return y.__extends(t,e),t.prototype.render=function(){var e=this,t={buttonType:ve.a.primary,children:ee.a.webpushLightningTryIt,onClick:function(){return e.dismiss(!0)}},n={buttonType:ve.a.primary,children:ee.a.webpushLightningMaybeLater,onClick:function(){return e.dismiss(!1)}};return fe.createElement(_e.a,{calloutProps:{beakWidth:15,directionalHint:we.DirectionalHint.bottomAutoEdge,preventDismissOnLostFocus:!0,preventDismissOnScroll:!0},targetElement:this.props.target(),hasCloseIcon:!0,onDismiss:function(){return e.dismiss(!1)},hasSmallHeadline:!0,isWide:!0,headline:ee.a.webpushLightningHeader,primaryButtonProps:t,secondaryButtonProps:n},ee.a.webpushLightningBody)},t=y.__decorate([de.observer,xe.d],t)}(fe.Component),Ce=function(e){return y.__awaiter(void 0,void 0,void 0,function(){var t,n;return y.__generator(this,function(r){switch(r.label){case 0:return t=le,n=[window],[4,ie()];case 1:return t.apply(void 0,n.concat([r.sent()]))&&e(),[2]}})})},Pe=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return y.__extends(t,e),t.prototype.render=function(){return fe.createElement(Oe,{lid:xe.a.WebPushPromotion,when:Ce,target:this.props.target})},t=y.__decorate([de.observer],t)}(fe.Component),je=n(1519),Be=n(1856),Se=n(1521),ke=n(4996),Ee=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.step=function(e,t){return fe.createElement("li",{className:ke.step,key:t},e)},t.steps=function(e){return fe.createElement("ol",{className:ke.steps},e.map(t.step))},t.dismiss=function(){l(window.Notification.permission)},t}return y.__extends(t,e),t.prototype.render=function(){return fe.createElement(he.a,null,fe.createElement(Be.a,{dialogContentProps:{showCloseButton:!0,title:ee.a.webpushManualPromptHeader},modalProps:{isBlocking:!0,isDarkOverlay:!0,containerClassName:ke.dialogContainer},hidden:!1,onDismiss:this.dismiss},this.steps([ee.a.webpushManualPromptStep1,ee.a.webpushManualPromptStep2,ee.a.webpushManualPromptStep3,ee.a.webpushManualPromptStep4]),fe.createElement(Se.a,null,fe.createElement(je.a,{onClick:this.dismiss,text:ee.a.webpushManualPromptOK,disabled:!o.c||"denied"===o.c.webPushPermission}))))},t=y.__decorate([de.observer],t)}(fe.Component),We=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return y.__extends(t,e),t.prototype.render=function(){var e={buttonType:ve.a.primary,children:ee.a.webpushSecondChanceAllow,onClick:function(){return b(!0)}};return fe.createElement(_e.a,{calloutProps:{beakWidth:15,directionalHint:we.DirectionalHint.bottomAutoEdge,preventDismissOnLostFocus:!0,preventDismissOnScroll:!0},targetElement:this.props.target(),hasCloseIcon:!0,onDismiss:function(){return b(!1)},hasSmallHeadline:!0,isWide:!0,headline:ee.a.webpushSecondChanceHeader,primaryButtonProps:e},ee.a.webpushSecondChanceBody)},t=y.__decorate([de.observer],t)}(fe.Component),De=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return y.__extends(t,e),t.prototype.render=function(){var e={buttonType:ve.a.primary,children:ee.a.webpushSetupSuccessCalloutGotIt,onClick:p};return fe.createElement(_e.a,{calloutProps:{beakWidth:15,directionalHint:we.DirectionalHint.bottomAutoEdge,preventDismissOnLostFocus:!0,preventDismissOnScroll:!0},targetElement:this.props.target(),hasCloseIcon:!0,onDismiss:p,hasSmallHeadline:!0,isWide:!0,headline:ee.a.webpushSetupSuccessCalloutHeader,primaryButtonProps:e},ee.a.webpushSetupSuccessCalloutBody)},t=y.__decorate([de.observer],t)}(fe.Component),Te=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return y.__extends(t,e),t.prototype.render=function(){var e=null;switch(o.c.currentView){case 1:e=fe.createElement(ye,{target:this.props.calloutTarget});break;case 3:e=fe.createElement(Ee,null);break;case 2:e=fe.createElement(ge,null);break;case 5:e=fe.createElement(We,{target:this.props.calloutTarget});break;case 4:e=fe.createElement(De,{target:this.props.calloutTarget})}return fe.createElement("div",null,e,fe.createElement(Pe,{target:this.props.calloutTarget}))},t=y.__decorate([de.observer],t)}(fe.Component);n.d(t,"bootStrapWebPushService",function(){return ae}),n.d(t,"userInitiatedWebPushSetupWorkflow",function(){return re}),n.d(t,"userInitiatedWebPushDisableWorkflow",function(){return se}),n.d(t,"shouldShowWebPushLightning",function(){return le}),n.d(t,"unsubscribe",function(){return F}),n.d(t,"loadWebPushOptions",function(){return ie}),n.d(t,"WebPushDiscovery",function(){return Te})},2149:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n(18),o={root:"ms-TeachingBubble",body:"ms-TeachingBubble-body",bodyContent:"ms-TeachingBubble-bodycontent",closeButton:"ms-TeachingBubble-closebutton",content:"ms-TeachingBubble-content",footer:"ms-TeachingBubble-footer",header:"ms-TeachingBubble-header",headerIsCondensed:"ms-TeachingBubble-header--condensed",headerIsSmall:"ms-TeachingBubble-header--small",headerIsLarge:"ms-TeachingBubble-header--large",headline:"ms-TeachingBubble-headline",image:"ms-TeachingBubble-image",primaryButton:"ms-TeachingBubble-primaryButton",secondaryButton:"ms-TeachingBubble-secondaryButton",subText:"ms-TeachingBubble-subText",button:"ms-Button",buttonLabel:"ms-Button-label"},i=Object(r.keyframes)({"0%":{transform:"matrix3d(0.5, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"1.7%":{transform:"matrix3d(0.658, 0, 0, 0, 0, 0.703, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"2.35%":{transform:"matrix3d(0.725, 0, 0, 0, 0, 0.8, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"3.4%":{transform:"matrix3d(0.83, 0, 0, 0, 0, 0.946, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"4.7%":{transform:"matrix3d(0.942, 0, 0, 0, 0, 1.084, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"5.11%":{transform:"matrix3d(0.971, 0, 0, 0, 0, 1.113, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"6.81%":{transform:"matrix3d(1.062, 0, 0, 0, 0, 1.166, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"7.06%":{transform:"matrix3d(1.07, 0, 0, 0, 0, 1.165, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"8.76%":{transform:"matrix3d(1.104, 0, 0, 0, 0, 1.12, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"9.36%":{transform:"matrix3d(1.106, 0, 0, 0, 0, 1.094, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"10.66%":{transform:"matrix3d(1.098, 0, 0, 0, 0, 1.035, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"12.16%":{transform:"matrix3d(1.075, 0, 0, 0, 0, 0.98, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"12.61%":{transform:"matrix3d(1.067, 0, 0, 0, 0, 0.969, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"14.51%":{transform:"matrix3d(1.031, 0, 0, 0, 0, 0.948, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"14.96%":{transform:"matrix3d(1.024, 0, 0, 0, 0, 0.949, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"17.77%":{transform:"matrix3d(0.99, 0, 0, 0, 0, 0.981, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"18.37%":{transform:"matrix3d(0.986, 0, 0, 0, 0, 0.989, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"20.52%":{transform:"matrix3d(0.98, 0, 0, 0, 0, 1.011, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"22.22%":{transform:"matrix3d(0.983, 0, 0, 0, 0, 1.016, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"26.08%":{transform:"matrix3d(0.996, 0, 0, 0, 0, 1.003, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"29.93%":{transform:"matrix3d(1.003, 0, 0, 0, 0, 0.995, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"31.63%":{transform:"matrix3d(1.004, 0, 0, 0, 0, 0.996, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"37.64%":{transform:"matrix3d(1.001, 0, 0, 0, 0, 1.002, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"42.74%":{transform:"matrix3d(0.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"45.35%":{transform:"matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"49.9%":{transform:"matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"50%":{transform:"matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"52.15%":{transform:"matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"54.3%":{transform:"matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"56.46%":{transform:"matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"58.61%":{transform:"matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"64.16%":{transform:"matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"69.72%":{transform:"matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"80.83%":{transform:"matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"91.99%":{transform:"matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"},"100%":{transform:"matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"}}),a=Object(r.keyframes)({"0%":{opacity:0,animationTimingFunction:r.AnimationVariables.easeFunction2},"26.26%":{opacity:1},"100%":{opacity:1}}),s=function(e){return[{display:"block",maxWidth:364,border:0,outline:"transparent",boxShadow:"none !important",width:"calc(100% + 1px)",animationName:i+", "+a,animationDuration:"2000ms",animationTimingFunction:"linear",animationFillMode:"both"},e&&{maxWidth:"456px"}]},c=function(e,t,n){return t?[e.headerIsCondensed]:n?[e.headerIsSmall,{selectors:{":not(:last-child)":{marginBottom:"14px"}}}]:[e.headerIsLarge,{selectors:{":not(:last-child)":{marginBottom:"14px"}}}]},u=function(e){var t,n,i,a=e.calloutClassName,u=e.hasCondensedHeadline,l=e.hasSmallHeadline,d=e.isWide,m=e.primaryButtonClassName,h=e.secondaryButtonClassName,b=e.theme,f=!u&&!l,p=b.palette,g=Object(r.getGlobalClassNames)(o,b);return{root:[g.root,b.fonts.medium,a],body:[g.body,{selectors:{":not(:last-child)":{marginBottom:"20px"}}}],bodyContent:[g.bodyContent,{padding:"20px"},d&&{maxWidth:"302px"}],closeButton:[g.closeButton,{position:"absolute",right:0,top:0,color:p.white,fontSize:r.FontSizes.small,selectors:{":hover":{background:"transparent"}}}],content:[g.content].concat(s(d),[d&&{display:"flex"}]),footer:[g.footer,{display:"flex",selectors:(t={},t["."+g.button+":not(:first-child)"]={marginLeft:"20px"},t)}],header:[g.header].concat(c(g,u,l),[(u||l)&&[r.DefaultFontStyles.medium,{marginRight:"10px",fontWeight:r.FontWeights.semibold}]]),headline:[g.headline,{margin:0,color:p.white},f&&[r.DefaultFontStyles.xxLarge,{fontWeight:r.FontWeights.light}]],imageContent:[g.header,g.image,d&&{display:"flex",alignItems:"center",paddingLeft:"20px",maxWidth:"154px"}],primaryButton:[g.primaryButton,m,{backgroundColor:p.white,borderColor:p.white,whiteSpace:"nowrap",selectors:(n={},n["."+g.buttonLabel]=[r.DefaultFontStyles.medium,{color:p.themePrimary}],n[":hover"]={backgroundColor:p.themeLighter,borderColor:p.themeLighter},n[":focus"]={backgroundColor:p.themeLighter,borderColor:p.white},n[":active"]={backgroundColor:p.white,borderColor:p.white},n)}],secondaryButton:[g.secondaryButton,h,{backgroundColor:p.themePrimary,borderColor:p.white,whiteSpace:"nowrap",selectors:(i={},i["."+g.buttonLabel]=[r.DefaultFontStyles.medium,{color:p.white}],i["&:hover, &:focus"]={backgroundColor:p.themeDarkAlt,borderColor:p.white},i[":active"]={backgroundColor:p.themePrimary,borderColor:p.white},i)}],subText:[g.subText,{margin:0,fontSize:r.FontSizes.medium,color:p.white,fontWeight:r.FontWeights.semilight}],subComponentStyles:{callout:{root:s(d).concat([b.fonts.medium]),beak:[{background:p.themePrimary}],calloutMain:[{background:p.themePrimary}]}}}}},2324:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var r=n(0),o=n(3),i=n(237),a=n(128),s=n(2325),c=n(1326),u=n(78),l=Object(i.a)(),d=function(e){function t(t){var n=e.call(this,t)||this;return n.rootElement=o.createRef(),n.state={},n._defaultCalloutProps={beakWidth:16,gapSpace:0,setInitialFocus:!0,doNotLayer:!1,directionalHint:u.DirectionalHint.rightCenter},n}return r.__extends(t,e),t.prototype.focus=function(){this.rootElement.current&&this.rootElement.current.focus()},t.prototype.render=function(){var e=this.props,t=e.calloutProps,n=e.targetElement,i=e.onDismiss,a=e.isWide,u=e.styles,d=e.theme,m=r.__assign({},this._defaultCalloutProps,t),h={theme:d,isWide:a,calloutClassName:m?m.className:void 0},b=l(u,h),f=b.subComponentStyles?b.subComponentStyles.callout:void 0;return o.createElement(c.a,r.__assign({target:n,onDismiss:i},m,{className:b.root,styles:f,hideOverflow:!0}),o.createElement("div",{ref:this.rootElement},o.createElement(s.a,r.__assign({},this.props))))},t.defaultProps={calloutProps:{beakWidth:16,gapSpace:0,setInitialFocus:!0,doNotLayer:!1,directionalHint:u.DirectionalHint.rightCenter}},t}(a.a)},2325:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(859),o=n(2326),i=n(2149),a=Object(r.a)(o.a,i.a,void 0,{scope:"TeachingBubbleContent"})},2326:function(e,t,n){"use strict";n.d(t,"a",function(){return b});var r=n(0),o=n(3),i=n(237),a=n(98),s=n(128),c=n(1519),u=n(872),l=n(728),d=n(1215),m=n(99),h=Object(i.a)(),b=function(e){function t(t){var n=e.call(this,t)||this;return n.rootElement=o.createRef(),n._onKeyDown=function(e){n.props.onDismiss&&e.which===a.a.escape&&n.props.onDismiss()},n.state={},n}return r.__extends(t,e),t.prototype.componentDidMount=function(){this.props.onDismiss&&document.addEventListener("keydown",this._onKeyDown,!1)},t.prototype.componentWillUnmount=function(){this.props.onDismiss&&document.removeEventListener("keydown",this._onKeyDown)},t.prototype.focus=function(){this.rootElement.current&&this.rootElement.current.focus()},t.prototype.render=function(){var e,t,n,i,a,s=this.props,m=s.children,b=s.illustrationImage,f=s.primaryButtonProps,p=s.secondaryButtonProps,g=s.headline,v=s.hasCondensedHeadline,w=s.hasCloseIcon,_=s.onDismiss,y=s.closeButtonAriaLabel,x=s.hasSmallHeadline,O=s.isWide,C=s.styles,P=s.theme,j=s.ariaDescribedBy,B=s.ariaLabelledBy,S=h(C,{theme:P,hasCondensedHeadline:v,hasSmallHeadline:x,isWide:O,primaryButtonClassName:f?f.className:void 0,secondaryButtonClassName:p?p.className:void 0});if(b&&b.src&&(e=o.createElement("div",{className:S.imageContent},o.createElement(d.a,r.__assign({},b)))),g){var k="string"==typeof g?"p":"div";t=o.createElement("div",{className:S.header},o.createElement(k,{className:S.headline,id:B},g))}if(m){var E="string"==typeof m?"p":"div";n=o.createElement("div",{className:S.body},o.createElement(E,{className:S.subText,id:j},m))}return(f||p)&&(i=o.createElement("div",{className:S.footer},f&&o.createElement(c.a,r.__assign({},f,{className:S.primaryButton})),p&&o.createElement(u.a,r.__assign({},p,{className:S.secondaryButton})))),w&&(a=o.createElement(l.IconButton,{className:S.closeButton,iconProps:{iconName:"Cancel"},title:y,ariaLabel:y,onClick:_})),o.createElement("div",{className:S.content,ref:this.rootElement,role:"dialog",tabIndex:-1,"aria-labelledby":B,"aria-describedby":j,"data-is-focusable":!0},e,o.createElement("div",{className:S.bodyContent},t,n,i),a)},t.defaultProps={hasCondensedHeadline:!1,imageProps:{imageFit:m.ImageFit.cover,width:364,height:130}},t}(s.a)},2734:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(859),o=n(2324),i=n(2149),a=Object(r.a)(o.a,i.a,void 0,{scope:"TeachingBubble"})},4994:function(e,t,n){var r=n(4995),o=n(55);"string"==typeof r&&(r=[[e.i,r]]);for(var i=0;i<r.length;i++)o.loadStyles(r[i][1],!1);r.locals&&(e.exports=r.locals)},4995:function(e,t,n){(t=e.exports=n(54)(!1)).push([e.i,'._2r1AOFuDuhJG8nW-GZiq7o{width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}._2r1AOFuDuhJG8nW-GZiq7o ._2jsH0O0DC5ZwUPKC9uM1Fp{font-size:28px;color:"[theme:themeTertiary, default:#71AFE5]";display:block}._2r1AOFuDuhJG8nW-GZiq7o .bf4L0KBB_aengHfMmM1wc{font-size:28px;font-weight:600;color:"[theme:white, default:#ffffff]"}html[dir] ._2r1AOFuDuhJG8nW-GZiq7o .bf4L0KBB_aengHfMmM1wc{margin:12px}',""]),t.locals={guidance:"_2r1AOFuDuhJG8nW-GZiq7o",chevron:"_2jsH0O0DC5ZwUPKC9uM1Fp",message:"bf4L0KBB_aengHfMmM1wc"}},4996:function(e,t,n){var r=n(4997),o=n(55);"string"==typeof r&&(r=[[e.i,r]]);for(var i=0;i<r.length;i++)o.loadStyles(r[i][1],!1);r.locals&&(e.exports=r.locals)},4997:function(e,t,n){(t=e.exports=n(54)(!1)).push([e.i,'.RduYqBXog7KvGOWk-GDCn{list-style-type:none;counter-reset:step-number}html[dir] .RduYqBXog7KvGOWk-GDCn{padding:0}._1PJ-XcZ_AU7HwGcvBVfT12{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;font-size:14px}._1PJ-XcZ_AU7HwGcvBVfT12,._1PJ-XcZ_AU7HwGcvBVfT12:before{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}._1PJ-XcZ_AU7HwGcvBVfT12:before{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:32px;height:32px;font-size:17px;color:"[theme:neutralPrimary, default:#333333]";counter-increment:step-number;content:counter(step-number)}html[dir] ._1PJ-XcZ_AU7HwGcvBVfT12:before{border-radius:50%;background-color:"[theme:neutralLight, default:#eaeaea]"}html[dir=ltr] ._1PJ-XcZ_AU7HwGcvBVfT12:before{margin-right:12px}html[dir=rtl] ._1PJ-XcZ_AU7HwGcvBVfT12:before{margin-left:12px}html[dir] ._1PJ-XcZ_AU7HwGcvBVfT12+._1PJ-XcZ_AU7HwGcvBVfT12{margin-top:20px}._2sj8UtLKoVxe4LY4WP1S7V{max-width:unset}',""]),t.locals={steps:"RduYqBXog7KvGOWk-GDCn",step:"_1PJ-XcZ_AU7HwGcvBVfT12",dialogContainer:"_2sj8UtLKoVxe4LY4WP1S7V"}},874:function(e,t,n){"use strict";var r,o;n.d(t,"b",function(){return r}),n.d(t,"a",function(){return o}),function(e){e[e.button=0]="button",e[e.anchor=1]="anchor"}(r||(r={})),function(e){e[e.normal=0]="normal",e[e.primary=1]="primary",e[e.hero=2]="hero",e[e.compound=3]="compound",e[e.command=4]="command",e[e.icon=5]="icon",e[e.default=6]="default"}(o||(o={}))}},0,[279,51,280,57]]);
//# sourceMappingURL=owa.Webpush-Notifications.mail.js.map
window.scriptsLoaded['owa.Webpush-Notifications.mail.js'] = 1; window.scriptProcessEnd = window.scriptProcessEnd || {}; window.scriptProcessEnd['owa.Webpush-Notifications.mail.js'] = (new Date()).getTime();