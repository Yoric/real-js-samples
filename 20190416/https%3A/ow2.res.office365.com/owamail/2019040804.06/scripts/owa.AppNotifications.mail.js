window.scriptsLoaded = window.scriptsLoaded || {}; window.scriptProcessStart = window.scriptProcessStart || {}; window.scriptProcessStart['owa.AppNotifications.mail.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[58],{1792:function(i,t,o){"use strict";o.r(t);var c=o(356),r=o(1047),n=!1;function e(){if(!n){n=!0;var i={subscriptionId:"NewMailNotification",requiresExplicitSubscribe:!0,subscriptionParameters:{NotificationType:"NewMailNotification"}};c.f.importAndExecute(i,r.a)}}var s=o(1048),a=!1;function u(){if(!a){a=!0;var i={subscriptionId:"ReminderNotifications",requiresExplicitSubscribe:!0,subscriptionParameters:{NotificationType:"ReminderNotification"}};c.f.importAndExecute(i,s.a)}}var f=o(1049),b=!1;function p(){if(!b){b=!0;var i={subscriptionId:"SocialActivityNotification",requiresExplicitSubscribe:!0,subscriptionParameters:{NotificationType:"SocialActivityNotification"}};c.f.importAndExecute(i,f.a)}}o.d(t,"subscribeToNewMailNotifications",function(){return e}),o.d(t,"subscribeToReminderNotifications",function(){return u}),o.d(t,"subscribeToSocialActivityNotifications",function(){return p})}},0,[300,186]]);
//# sourceMappingURL=owa.AppNotifications.mail.js.map
window.scriptsLoaded['owa.AppNotifications.mail.js'] = 1; window.scriptProcessEnd = window.scriptProcessEnd || {}; window.scriptProcessEnd['owa.AppNotifications.mail.js'] = (new Date()).getTime();