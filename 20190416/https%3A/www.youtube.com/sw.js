'use strict';function n(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
function p(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:n(a)}}
var q="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,d){a!=Array.prototype&&a!=Object.prototype&&(a[b]=d.value)},u="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function v(){v=function(){};
u.Symbol||(u.Symbol=x)}
function y(a,b){this.a=a;q(this,"description",{configurable:!0,writable:!0,value:b})}
y.prototype.toString=function(){return this.a};
var x=function(){function a(d){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new y("jscomp_symbol_"+(d||"")+"_"+b++,d)}
var b=0;return a}();
function z(){v();var a=u.Symbol.iterator;a||(a=u.Symbol.iterator=u.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&q(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return A(n(this))}});
z=function(){}}
function A(a){z();a={next:a};a[u.Symbol.iterator]=function(){return this};
return a}
function D(a,b){if(b){var d=u;a=a.split(".");for(var h=0;h<a.length-1;h++){var l=a[h];l in d||(d[l]={});d=d[l]}a=a[a.length-1];h=d[a];b=b(h);b!=h&&null!=b&&q(d,a,{configurable:!0,writable:!0,value:b})}}
function E(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
D("Promise",function(a){function b(f){this.c=0;this.g=void 0;this.a=[];var c=this.e();try{f(c.resolve,c.reject)}catch(e){c.reject(e)}}
function d(){this.a=null}
function h(f){return f instanceof b?f:new b(function(c){c(f)})}
if(a)return a;d.prototype.c=function(f){if(null==this.a){this.a=[];var c=this;this.e(function(){c.g()})}this.a.push(f)};
var l=u.setTimeout;d.prototype.e=function(f){l(f,0)};
d.prototype.g=function(){for(;this.a&&this.a.length;){var f=this.a;this.a=[];for(var c=0;c<f.length;++c){var e=f[c];f[c]=null;try{e()}catch(g){this.f(g)}}}this.a=null};
d.prototype.f=function(f){this.e(function(){throw f;})};
b.prototype.e=function(){function f(g){return function(m){e||(e=!0,g.call(c,m))}}
var c=this,e=!1;return{resolve:f(this.n),reject:f(this.f)}};
b.prototype.n=function(f){if(f===this)this.f(new TypeError("A Promise cannot resolve to itself"));else if(f instanceof b)this.o(f);else{a:switch(typeof f){case "object":var c=null!=f;break a;case "function":c=!0;break a;default:c=!1}c?this.m(f):this.j(f)}};
b.prototype.m=function(f){var c=void 0;try{c=f.then}catch(e){this.f(e);return}"function"==typeof c?this.p(c,f):this.j(f)};
b.prototype.f=function(f){this.k(2,f)};
b.prototype.j=function(f){this.k(1,f)};
b.prototype.k=function(f,c){if(0!=this.c)throw Error("Cannot settle("+f+", "+c+"): Promise already settled in state"+this.c);this.c=f;this.g=c;this.l()};
b.prototype.l=function(){if(null!=this.a){for(var f=0;f<this.a.length;++f)k.c(this.a[f]);this.a=null}};
var k=new d;b.prototype.o=function(f){var c=this.e();f.h(c.resolve,c.reject)};
b.prototype.p=function(f,c){var e=this.e();try{f.call(c,e.resolve,e.reject)}catch(g){e.reject(g)}};
b.prototype.then=function(f,c){function e(r,w){return"function"==typeof r?function(B){try{g(r(B))}catch(C){m(C)}}:w}
var g,m,t=new b(function(r,w){g=r;m=w});
this.h(e(f,g),e(c,m));return t};
b.prototype.catch=function(f){return this.then(void 0,f)};
b.prototype.h=function(f,c){function e(){switch(g.c){case 1:f(g.g);break;case 2:c(g.g);break;default:throw Error("Unexpected state: "+g.c);}}
var g=this;null==this.a?k.c(e):this.a.push(e)};
b.resolve=h;b.reject=function(f){return new b(function(c,e){e(f)})};
b.race=function(f){return new b(function(c,e){for(var g=p(f),m=g.next();!m.done;m=g.next())h(m.value).h(c,e)})};
b.all=function(f){var c=p(f),e=c.next();return e.done?h([]):new b(function(g,m){function t(B){return function(C){r[B]=C;w--;0==w&&g(r)}}
var r=[],w=0;do r.push(void 0),w++,h(e.value).h(t(r.length-1),m),e=c.next();while(!e.done)})};
return b});
D("Object.is",function(a){return a?a:function(b,d){return b===d?0!==b||1/b===1/d:b!==b&&d!==d}});
D("WeakMap",function(a){function b(c){this.a=(f+=Math.random()+1).toString();if(c){c=p(c);for(var e;!(e=c.next()).done;)e=e.value,this.set(e[0],e[1])}}
function d(){}
function h(c){if(!E(c,k)){var e=new d;q(c,k,{value:e})}}
function l(c){var e=Object[c];e&&(Object[c]=function(g){if(g instanceof d)return g;h(g);return e(g)})}
if(function(){if(!a||!Object.seal)return!1;try{var c=Object.seal({}),e=Object.seal({}),g=new a([[c,2],[e,3]]);if(2!=g.get(c)||3!=g.get(e))return!1;g.delete(c);g.set(e,4);return!g.has(c)&&4==g.get(e)}catch(m){return!1}}())return a;
var k="$jscomp_hidden_"+Math.random();l("freeze");l("preventExtensions");l("seal");var f=0;b.prototype.set=function(c,e){h(c);if(!E(c,k))throw Error("WeakMap key fail: "+c);c[k][this.a]=e;return this};
b.prototype.get=function(c){return E(c,k)?c[k][this.a]:void 0};
b.prototype.has=function(c){return E(c,k)&&E(c[k],this.a)};
b.prototype.delete=function(c){return E(c,k)&&E(c[k],this.a)?delete c[k][this.a]:!1};
return b});
D("Map",function(a){function b(){var c={};return c.d=c.next=c.i=c}
function d(c,e){var g=c.a;return A(function(){if(g){for(;g.i!=c.a;)g=g.d;for(;g.next!=g.i;)return g=g.next,{done:!1,value:e(g)};g=null}return{done:!0,value:void 0}})}
function h(c,e){var g=e&&typeof e;"object"==g||"function"==g?k.has(e)?g=k.get(e):(g=""+ ++f,k.set(e,g)):g="p_"+e;var m=c.c[g];if(m&&E(c.c,g))for(c=0;c<m.length;c++){var t=m[c];if(e!==e&&t.key!==t.key||e===t.key)return{id:g,list:m,index:c,b:t}}return{id:g,list:m,index:-1,b:void 0}}
function l(c){this.c={};this.a=b();this.size=0;if(c){c=p(c);for(var e;!(e=c.next()).done;)e=e.value,this.set(e[0],e[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),e=new a(p([[c,"s"]]));if("s"!=e.get(c)||1!=e.size||e.get({x:4})||e.set({x:4},"t")!=e||2!=e.size)return!1;var g=e.entries(),m=g.next();if(m.done||m.value[0]!=c||"s"!=m.value[1])return!1;m=g.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!g.next().done?!1:!0}catch(t){return!1}}())return a;
z();var k=new WeakMap;l.prototype.set=function(c,e){c=0===c?0:c;var g=h(this,c);g.list||(g.list=this.c[g.id]=[]);g.b?g.b.value=e:(g.b={next:this.a,d:this.a.d,i:this.a,key:c,value:e},g.list.push(g.b),this.a.d.next=g.b,this.a.d=g.b,this.size++);return this};
l.prototype.delete=function(c){c=h(this,c);return c.b&&c.list?(c.list.splice(c.index,1),c.list.length||delete this.c[c.id],c.b.d.next=c.b.next,c.b.next.d=c.b.d,c.b.i=null,this.size--,!0):!1};
l.prototype.clear=function(){this.c={};this.a=this.a.d=b();this.size=0};
l.prototype.has=function(c){return!!h(this,c).b};
l.prototype.get=function(c){return(c=h(this,c).b)&&c.value};
l.prototype.entries=function(){return d(this,function(c){return[c.key,c.value]})};
l.prototype.keys=function(){return d(this,function(c){return c.key})};
l.prototype.values=function(){return d(this,function(c){return c.value})};
l.prototype.forEach=function(c,e){for(var g=this.entries(),m;!(m=g.next()).done;)m=m.value,c.call(e,m[1],m[0],this)};
l.prototype[Symbol.iterator]=l.prototype.entries;var f=0;return l});
D("Set",function(a){function b(d){this.a=new Map;if(d){d=p(d);for(var h;!(h=d.next()).done;)this.add(h.value)}this.size=this.a.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var d=Object.seal({x:4}),h=new a(p([d]));if(!h.has(d)||1!=h.size||h.add(d)!=h||1!=h.size||h.add({x:4})!=h||2!=h.size)return!1;var l=h.entries(),k=l.next();if(k.done||k.value[0]!=d||k.value[1]!=d)return!1;k=l.next();return k.done||k.value[0]==d||4!=k.value[0].x||k.value[1]!=k.value[0]?!1:l.next().done}catch(f){return!1}}())return a;
z();b.prototype.add=function(d){d=0===d?0:d;this.a.set(d,d);this.size=this.a.size;return this};
b.prototype.delete=function(d){d=this.a.delete(d);this.size=this.a.size;return d};
b.prototype.clear=function(){this.a.clear();this.size=0};
b.prototype.has=function(d){return this.a.has(d)};
b.prototype.entries=function(){return this.a.entries()};
b.prototype.values=function(){return this.a.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(d,h){var l=this;this.a.forEach(function(k){return d.call(h,k,k,l)})};
return b});
var F=Date.now||function(){return+new Date};/*
 Copyright (c) Microsoft Corporation. All rights reserved.
 Licensed under the Apache License, Version 2.0 (the "License"); you may not use
 this file except in compliance with the License. You may obtain a copy of the
 License at http://www.apache.org/licenses/LICENSE-2.0

 THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
 WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
 MERCHANTABLITY OR NON-INFRINGEMENT.

 See the Apache Version 2.0 License for specific language governing permissions
 and limitations under the License.
*/
function G(a){return new Promise(function(b,d){var h=a.length,l=null;if(h)for(var k=function(e,g){e||l||(l=g);h--;h||(l?d(l):b())},f=p(a),c=f.next();!c.done;c=f.next())c.value.then(k.bind(null,!0),k.bind(null,!1));
else b()})}
function H(a){return self.btoa(String.fromCharCode.apply(null,new Uint8Array(a))).replace(/\+/g,"-").replace(/\//g,"_")}
;var I=null;function J(a,b){var d={};d.key=a;d.value=b;return K().then(function(h){return new Promise(function(l,k){var f=h.transaction("swpushnotificationsstore","readwrite").objectStore("swpushnotificationsstore").put(d);f.onsuccess=l;f.onerror=k})})}
function L(){return J("IndexedDBCheck","testing IndexedDB").then(function(){return M("IndexedDBCheck")}).then(function(a){return"testing IndexedDB"==a?Promise.resolve():Promise.reject()}).then(function(){return!0}).catch(function(){return!1})}
function M(a){return K().then(function(b){return new Promise(function(d,h){var l=b.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);l.onsuccess=function(){var k=l.result;d(k?k.value:null)};
l.onerror=function(){h('Unable to get key "'+a+'" from object store.')}})}).catch(function(){return Promise.reject("Unable to open IndexedDB.")})}
function K(){return I?Promise.resolve(I):new Promise(function(a,b){var d=self.indexedDB.open("swpushnotificationsdb");d.onerror=b;d.onsuccess=function(){var h=d.result;if(h.objectStoreNames.contains("swpushnotificationsstore"))I=h,a(I);else return self.indexedDB.deleteDatabase("swpushnotificationsdb"),K()};
d.onupgradeneeded=N})}
function N(a){a=a.target.result;a.objectStoreNames.contains("swpushnotificationsstore")&&a.deleteObjectStore("swpushnotificationsstore");a.createObjectStore("swpushnotificationsstore",{keyPath:"key"})}
;function O(){return self.clients.matchAll({type:"window",includeUncontrolled:!0}).then(function(a){if(a){a=p(a);for(var b=a.next();!b.done;b=a.next())b.value.postMessage({type:"update_unseen_notifications_count_signal"})}})}
function P(a){if(!(a.payload&&a.payload.chrome&&a.payload.chrome.endpoints))return Promise.resolve();var b=new FormData;b.append("json_navigation_endpoints",JSON.stringify(a.payload.chrome.endpoints));var d="[]";a.payload.chrome.extraUrlParams&&(d=JSON.stringify(a.payload.chrome.extraUrlParams));b.append("extra_url_params",d);b.append("hashed_identifier",a.hashedIdentifier||"");b.append("identifier_salt",a.identifierSalt||"");return fetch("/notifications_ajax?action_convert_endpoint_to_url=1",{credentials:"include",
method:"POST",body:b}).then(function(h){return h.ok?h.json().then(function(l){if(!l.successful_conversion)return Promise.resolve();if(a.payload.chrome.postedEndpoint){var k=a.payload.chrome.postedEndpoint,f=new FormData;f.append("record_notification_interactions_endpoint",JSON.stringify(k));fetch("/notifications_ajax?action_record_notification_interactions=1",{credentials:"include",method:"POST",body:f})}return Q(a,l.url)}).catch(function(){return Promise.resolve()}):Promise.resolve()})}
function Q(a,b){a.deviceId&&J("DeviceId",a.deviceId);a.timestampSec&&R(a.timestampSec);var d=a.payload.chrome;return self.registration.showNotification(d.title,{body:d.body,icon:d.iconUrl,data:{nav:b,id:d.notificationId,attributionTag:d.attributionTag},tag:d.title+d.body+d.iconUrl,requireInteraction:!0}).then(function(){S(a.displayCap)}).catch(function(){})}
function T(a){return M("DeviceId").then(function(b){b=U(null,b,null,a);return fetch("/notifications_ajax?action_notification_click=1",{credentials:"include",method:"POST",body:b})})}
function V(){return Promise.all([M("TimestampLowerBound"),W(),M("DeviceId")]).then(function(a){var b=p(a);a=b.next().value;var d=b.next().value;b=b.next().value;if(!a)return Promise.reject(null);a=U(d,b,a);return fetch("/notifications_ajax?action_get_notifications=1",{credentials:"include",method:"POST",body:a}).then(X)})}
function X(a){return a.ok?a.json().then(aa).catch(function(){}):Promise.resolve()}
function aa(a){if(a.errors)return Promise.reject(a.errors);a.device_id&&J("DeviceId",a.device_id);a.ts&&R(a.ts);if(a.notifications){var b=[];a.notifications.forEach(function(d){b.push(self.registration.showNotification(d.title,{body:d.message,icon:d.iconUrl,data:{nav:d.nav,id:d.id,attributionTag:d.attributionTag},tag:d.title+d.message+d.iconUrl,requireInteraction:d.requireInteraction}))});
return G(b).then(function(){S(a.display_cap)})}return Promise.resolve()}
function S(a){-1!=a&&self.registration.getNotifications().then(function(b){for(var d=0;d<b.length-a;d++)b[d].close()})}
function ba(a){var b=[ca(a),M("RegistrationTimestamp").then(da),ea(),fa()];Promise.all(b).catch(function(){J("IDToken",a);Y();return Promise.resolve()})}
function da(a){a=a||0;return 9E7>=F()-a?Promise.resolve():Promise.reject()}
function ca(a){return M("IDToken").then(function(b){return a==b?Promise.resolve():Promise.reject()})}
function ea(){return M("Permission").then(function(a){return Notification.permission==a?Promise.resolve():Promise.reject()})}
function fa(){return M("Endpoint").then(function(a){return W().then(function(b){return a==b?Promise.resolve():Promise.reject()})})}
function Y(){J("RegistrationTimestamp",0);Promise.all([W(),ha(),ia()]).then(function(a){var b=p(a);a=b.next().value;var d=b.next().value;b=b.next().value;d&&(d=H(d));b&&(b=H(b));Z(a,d,b)}).catch(function(){Z()})}
function Z(a,b,d){a=void 0===a?null:a;b=void 0===b?null:b;d=void 0===d?null:d;L().then(function(h){h&&(J("Endpoint",a),J("P256dhKey",b),J("AuthKey",d),J("Permission",Notification.permission),Promise.all([M("DeviceId"),M("NotificationsDisabled"),ja()]).then(function(l){var k=p(l);l=k.next().value;var f=k.next().value;k=k.next().value;l=U(a,l,null,null,f,b,d,k);fetch("/notifications_ajax?action_register_device=1",{credentials:"include",method:"POST",body:l}).then(ka).catch(function(){})}))})}
function U(a,b,d,h,l,k,f,c){var e=new FormData;a&&e.append("endpoint",a);b&&e.append("device_id",b);d&&e.append("timestamp_lower_bound",d);h&&(e.append("notification_id",h.id),e.append("attribution_tag",h.attributionTag));l&&e.append("notifications_disabled",(!!l).toString());k&&e.append("p256dh_key",k);f&&e.append("auth_key",f);c&&e.append("registration_token",c);e.append("permission",Notification.permission);return e}
function ka(a){J("RegistrationTimestamp",F());a.ok&&a.json().then(function(b){b.ts&&R(b.ts);b.device_id&&J("DeviceId",b.device_id)}).catch(function(){})}
function W(){return self.registration.pushManager.getSubscription().then(function(a){return a?Promise.resolve(a.endpoint):Promise.resolve(null)})}
function ha(){return self.registration.pushManager.getSubscription().then(function(a){return a&&a.getKey?Promise.resolve(a.getKey("p256dh")):Promise.resolve(null)})}
function ia(){return self.registration.pushManager.getSubscription().then(function(a){return a&&a.getKey?Promise.resolve(a.getKey("auth")):Promise.resolve(null)})}
function ja(){return fetch("/notifications_ajax?action_get_registration_token=1",{credentials:"include",method:"POST"}).then(function(a){if(a.ok)return a.json().then(function(b){return b.registration_token}).catch(function(){})})}
function R(a){J("TimestampLowerBound",a)}
;self.oninstall=function(a){a.waitUntil(self.skipWaiting())};
self.onactivate=function(a){a.waitUntil(self.clients.claim())};
self.onmessage=function(a){var b=a.data;a=b.type;b=b.data;"notifications_register"==a?(J("IDToken",b),Y()):"notifications_check_registration"==a&&ba(b)};
self.onnotificationclick=function(a){a.notification.close();var b=a.notification.data,d=self.clients.matchAll({type:"window",includeUncontrolled:!0});d.then(function(h){a:{var l=b.nav;h=p(h);for(var k=h.next();!k.done;k=h.next())if(k=k.value,k.url==l){k.focus();break a}self.clients.openWindow(l)}});
a.waitUntil(d);a.waitUntil(T(b))};
self.onpush=function(a){a.waitUntil(M("NotificationsDisabled").then(function(b){if(b)return Promise.resolve();if(a.data&&a.data.text().length)try{return P(a.data.json())}catch(d){return Promise.resolve(d.message)}return V()}));
a.waitUntil(O())};
self.onpushsubscriptionchange=function(){Y()};
