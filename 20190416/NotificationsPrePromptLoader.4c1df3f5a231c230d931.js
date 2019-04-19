(window.webpackJsonp=window.webpackJsonp||[]).push([["NotificationsPrePromptLoader"],{"./src/reddit/components/NotificationsPrePrompt/index.m.less":function(e,t,o){e.exports={modalContainer:"_3uA-tRfnkYO-78DbpSdKMh",modalBody:"_3ZQQPHRTItIinpXhny3ZDt",title:"_3t6MWcHrGFpGj4vlgq-xEr",titleLarge:"_1FvWIle80DgjBL62Tdt2eq",body:"_3Z9uK9KORZK0ehS0hs_45y",bodyLarge:"_12G9Se1M4wodVC-R3ANHbS",allow:"_1Lq_w8Q5F_T8F4AYDucl8g",arrow:"_2xbwjCYA8CljeuOnJamg91",snoo:"UzNVGSNFIiN2Q6xXrrIxy"}},"./src/reddit/components/NotificationsPrePrompt/index.tsx":function(e,t,o){"use strict";o.r(t);var n,s=o("./node_modules/react/index.js"),r=o.n(s),i=o("./node_modules/react-redux/es/index.js"),c=o("./node_modules/reselect/es/index.js"),a=o("./bundled-modules/styled-components/styled-components.min.js"),d=o.n(a),l=o("./src/app/strings/index.ts"),u=o("./src/higherOrderComponents/asModal.tsx"),p=o("./src/lib/classNames/index.ts"),f=o("./src/lib/localStorageAvailable/index.ts"),m=o("./src/reddit/actions/notifications/constants.ts"),b=o("./src/reddit/actions/notifications/loader.ts"),h=o("./src/reddit/components/ModalStyledComponents/index.tsx"),g=o("./src/reddit/components/Snoo/index.tsx"),O=o("./src/reddit/controls/Button/index.tsx"),j=o("./src/reddit/helpers/trackers/notifications.ts"),v=(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,o,s){var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&r)for(var c in r)void 0===t[c]&&(t[c]=r[c]);else t||(t=r||{});if(1===i)t.children=s;else if(i>1){for(var a=Array(i),d=0;d<i;d++)a[d]=arguments[d+3];t.children=a}return{$$typeof:n,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}});var y=e=>v("svg",{className:e.className,viewBox:"0 0 20 6",version:"1.1"},void 0,v("path",{d:"M0,5.5 C1.10679602,5.5 -0.215330116,5.5 1.99826192,5.5 L7.98259552,1.17191675 C9.24211692,0.260985956 10.9698221,0.277805319 12.210413,1.21307493 L18,5.5 C19.5801495,5.5 19.2099252,5.5 20,5.5",stroke:"inherit",strokeWidth:"1",fill:"inherit"})),x=o("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),w=o("./src/reddit/models/Theme/NewColorSystem/index.ts"),P=o("./src/reddit/models/User/index.ts"),N=o("./src/reddit/selectors/experiments/dnPrePrompt.ts"),_=o("./src/reddit/selectors/user.ts"),k=o("./src/reddit/components/NotificationsPrePrompt/index.m.less"),C=o.n(k),S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},I=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,o,n,s){var r=t&&t.defaultProps,i=arguments.length-3;if(o||0===i||(o={}),o&&r)for(var c in r)void 0===o[c]&&(o[c]=r[c]);else o||(o=r||{});if(1===i)o.children=s;else if(i>1){for(var a=Array(i),d=0;d<i;d++)a[d]=arguments[d+3];o.children=a}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:o,_owner:null}}}();const A=Object(c.createStructuredSelector)({currentUser:_.j,language:_.P,variant:N.a}),q=Object(i.connect)(A,e=>({closePrePrompt:()=>{Object(f.a)()&&localStorage.setItem(m.i,m.j),e(Object(m.o)()),e((e,t)=>j.h(t()))},requestPermissions:()=>{e((e,t)=>j.g(t())),Object(b.a)().then(t=>e(t.requestNotificationsPermissions(!0,!0)))}}));const L=d()(Object(u.a)(class extends r.a.Component{constructor(){super(...arguments),this.state={hideContent:!1},this.handleAllowNotificationsClick=(()=>{this.setState({hideContent:!0},this.props.requestPermissions)})}render(){var e=this.props;const t=e.currentUser,o=e.language;return this.state.hideContent||!Object(N.c)(this.props.variant)?null:I(h.c,{className:C.a.modalBody},void 0,I(y,{className:C.a.arrow}),I(h.h,{},void 0,I(x.a,{widthLeft:80},void 0,I(g.a,{className:C.a.snoo}),I("div",{},void 0,I("div",{className:Object(p.a)(C.a.title,!t&&C.a.titleLarge)},void 0,Object(l.a)(o,"desktopNotifications.prePrompt.title")),I("div",{className:Object(p.a)(C.a.body,!t&&C.a.bodyLarge)},void 0,t?Object(l.a)(o,"desktopNotifications.prePrompt.body.loggedIn",{userName:Object(P.f)(t)}):Object(l.a)(o,"desktopNotifications.prePrompt.body.loggedOut"))))),I(h.e,{},void 0,I(h.a,{onClick:this.props.closePrePrompt},void 0,Object(l.a)(o,"desktopNotifications.prePrompt.notNow")),I(O.e,{className:C.a.allow,onClick:this.handleAllowNotificationsClick},void 0,Object(l.a)(o,"desktopNotifications.prePrompt.allowNotifications"))))}})).withConfig({componentId:"vuhn8f-0"})(["."," {border: 1px solid ",";}."," {color: ",";}."," {color: ",";}."," {fill: ",";stroke: ",";}"],C.a.modalBody,e=>Object(w.c)(e).line,C.a.title,e=>Object(w.c)(e).bodyText,C.a.body,e=>Object(w.c)(e).metaText,C.a.arrow,e=>Object(w.c)(e).body,e=>Object(w.c)(e).line),M=Object(a.css)(["padding-top: 0;z-index: 100;"]);t.default=q(e=>e.variant?r.a.createElement(L,S({},e,{className:C.a.modalContainer,overlayCustomStyles:M,withOverlay:Object(N.b)(e.variant)})):null)},"./src/reddit/components/Snoo/index.tsx":function(e,t,o){"use strict";var n=o("./bundled-modules/styled-components/styled-components.min.js"),s=o.n(n),r=o("./src/reddit/icons/svgs/Snoo/index.tsx");t.a=s()(r.a).withConfig({componentId:"s1qx9anm-0"})(["margin-right: 8px;height: 32px;"])},"./src/reddit/helpers/trackers/notifications.ts":function(e,t,o){"use strict";o.d(t,"j",function(){return a}),o.d(t,"c",function(){return d}),o.d(t,"d",function(){return l}),o.d(t,"e",function(){return u}),o.d(t,"i",function(){return p}),o.d(t,"g",function(){return f}),o.d(t,"h",function(){return m}),o.d(t,"l",function(){return h}),o.d(t,"m",function(){return g}),o.d(t,"k",function(){return O}),o.d(t,"b",function(){return j}),o.d(t,"a",function(){return P}),o.d(t,"f",function(){return S});var n=o("./src/reddit/models/PushNotification/index.ts"),s=o("./src/reddit/selectors/telemetry.ts"),r=o("./src/telemetry/index.ts");const i=e=>Object.assign({},s.defaults(e),{noun:"desktop_notification_permissions"}),c=e=>Object.assign({},s.defaults(e),{noun:"desktop_notif_preprompt_permissions"}),a=e=>{Object(r.a)(Object.assign({},i(e),{action:"view",source:"popup"}))},d=e=>{Object(r.a)(Object.assign({},i(e),{action:"allow",source:"popup"}))},l=e=>{Object(r.a)(Object.assign({},i(e),{action:"block",source:"popup"}))},u=e=>{Object(r.a)(Object.assign({},i(e),{action:"close",source:"popup"}))},p=e=>{Object(r.a)(Object.assign({},c(e),{action:"view",source:"popup"}))},f=e=>{Object(r.a)(Object.assign({},c(e),{action:"allow",source:"popup"}))},m=e=>{Object(r.a)(Object.assign({},c(e),{action:"close",source:"popup"}))},b=(e,t,o)=>Object.assign({},s.defaults(e),{actionInfo:s.actionInfo(e,{success:t,reason:o}),noun:"desktop_push_token"}),h=e=>{Object(r.a)(Object.assign({},b(e,!0),{action:"request",source:"notifications"}))},g=e=>{Object(r.a)(Object.assign({},b(e,!0),{action:"register",source:"notifications"}))},O=(e,t)=>{Object(r.a)(Object.assign({},b(e,!1,t),{action:"bail",source:"notifications"}))},j=e=>Object.assign({},(e=>Object.assign({},s.defaults(e),{noun:"desktop_push_notification"}))(e),{notification:s.notification(e,void 0,void 0),action:void 0,source:"notifications",correlationId:void 0}),v=e=>(t,o)=>{Object(r.a)(Object.assign({},s.defaults(t),{action:(e=>e?"enable":"disable")(o),noun:e,source:"notifications"}))},y=v("chat_messages"),x=v("chat_requests"),w=v("comment_replies"),P=v("desktop_notification_permissions"),N=v("post_replies"),_=v("private_messages"),k=v("trending_posts"),C=v("username_mention"),S=(e,t,o)=>{switch(t){case n.a.ChatMessages:y(e,o),x(e,o);break;case n.a.TrendingPosts:k(e,o);break;case n.a.UnreadMessages:w(e,o),N(e,o),_(e,o),C(e,o)}}},"./src/reddit/layout/twoCol/ExpandRight/index.tsx":function(e,t,o){"use strict";var n,s=o("./node_modules/react/index.js"),r=o.n(s),i=o("./bundled-modules/styled-components/styled-components.min.js"),c=o.n(i),a=o("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),d=o("./src/reddit/helpers/styles/components/index.tsx"),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},u=(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,o,s){var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&r)for(var c in r)void 0===t[c]&&(t[c]=r[c]);else t||(t=r||{});if(1===i)t.children=s;else if(i>1){for(var a=Array(i),d=0;d<i;d++)a[d]=arguments[d+3];t.children=a}return{$$typeof:n,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}),p=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&(o[n[s]]=e[n[s]])}return o};const f=c()(Object(d.a)()).withConfig({componentId:"zqnwn3-0"})(["flex: 0 0 ",";margin-right: ",";"],e=>e.width?`${e.width}px`:"",({gutter:e})=>`${e||0}px`),m=c.a.div.withConfig({componentId:"zqnwn3-1"})(["flex: 1 1 100%;overflow: hidden;width: 100%;"]);t.a=c()(Object(a.a)(e=>{const t=e.className,o=e.children,n=e.widthLeft,s=e.gutter,i=p(e,["className","children","widthLeft","gutter"]);return r.a.createElement("div",l({className:t},i),u(f,{width:n,gutter:s},void 0,Array.isArray(o)&&o[0]),u(m,{},void 0,Array.isArray(o)&&o[1]))},2)).withConfig({componentId:"zqnwn3-2"})(["display: flex;flex-direction: row;"])},"./src/reddit/models/PushNotification/index.ts":function(e,t,o){"use strict";var n;o.d(t,"a",function(){return n}),function(e){e.ChatMessages="chatMessages",e.TrendingPosts="trendingPosts",e.UnreadMessages="unreadMessages"}(n||(n={}))},"./src/reddit/selectors/experiments/dnPrePrompt.ts":function(e,t,o){"use strict";o.d(t,"a",function(){return r}),o.d(t,"b",function(){return i}),o.d(t,"c",function(){return c});var n=o("./src/reddit/constants/experiments.ts"),s=o("./src/reddit/helpers/chooseVariant/index.ts");const r=e=>{const t=Object(s.b)(e,{experimentEligibilitySelector:s.a,experimentName:n.m});return Object(n.kb)(t)?void 0:t},i=e=>e===n.l.DarkPrePrompt||e===n.l.DarkSystemDialogue,c=e=>e===n.l.DarkPrePrompt||e===n.l.PrePrompt}}]);
//# sourceMappingURL=NotificationsPrePromptLoader.4c1df3f5a231c230d931.js.map