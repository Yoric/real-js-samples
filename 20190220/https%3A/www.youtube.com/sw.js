'use strict';function h(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
function k(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:h(a)}}
var m="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},p="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function q(a,b){if(b){var c=p;a=a.split(".");for(var e=0;e<a.length-1;e++){var f=a[e];f in c||(c[f]={});c=c[f]}a=a[a.length-1];e=c[a];b=b(e);b!=e&&null!=b&&m(c,a,{configurable:!0,writable:!0,value:b})}}
function r(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
q("Promise",function(a){function b(a){this.c=0;this.g=void 0;this.a=[];var b=this.e();try{a(b.resolve,b.reject)}catch(w){b.reject(w)}}
function c(){this.a=null}
function e(a){return a instanceof b?a:new b(function(b){b(a)})}
if(a)return a;c.prototype.c=function(a){if(null==this.a){this.a=[];var b=this;this.e(function(){b.g()})}this.a.push(a)};
var f=p.setTimeout;c.prototype.e=function(a){f(a,0)};
c.prototype.g=function(){for(;this.a&&this.a.length;){var a=this.a;this.a=[];for(var b=0;b<a.length;++b){var c=a[b];a[b]=null;try{c()}catch(l){this.f(l)}}}this.a=null};
c.prototype.f=function(a){this.e(function(){throw a;})};
b.prototype.e=function(){function a(a){return function(g){c||(c=!0,a.call(b,g))}}
var b=this,c=!1;return{resolve:a(this.n),reject:a(this.f)}};
b.prototype.n=function(a){if(a===this)this.f(new TypeError("A Promise cannot resolve to itself"));else if(a instanceof b)this.o(a);else{a:switch(typeof a){case "object":var g=null!=a;break a;case "function":g=!0;break a;default:g=!1}g?this.m(a):this.j(a)}};
b.prototype.m=function(a){var b=void 0;try{b=a.then}catch(w){this.f(w);return}"function"==typeof b?this.p(b,a):this.j(a)};
b.prototype.f=function(a){this.k(2,a)};
b.prototype.j=function(a){this.k(1,a)};
b.prototype.k=function(a,b){if(0!=this.c)throw Error("Cannot settle("+a+", "+b+"): Promise already settled in state"+this.c);this.c=a;this.g=b;this.l()};
b.prototype.l=function(){if(null!=this.a){for(var a=0;a<this.a.length;++a)d.c(this.a[a]);this.a=null}};
var d=new c;b.prototype.o=function(a){var b=this.e();a.h(b.resolve,b.reject)};
b.prototype.p=function(a,b){var g=this.e();try{a.call(b,g.resolve,g.reject)}catch(l){g.reject(l)}};
b.prototype.then=function(a,g){function c(a,b){return"function"==typeof a?function(b){try{l(a(b))}catch(J){e(J)}}:b}
var l,e,d=new b(function(a,b){l=a;e=b});
this.h(c(a,l),c(g,e));return d};
b.prototype.catch=function(a){return this.then(void 0,a)};
b.prototype.h=function(a,b){function g(){switch(c.c){case 1:a(c.g);break;case 2:b(c.g);break;default:throw Error("Unexpected state: "+c.c);}}
var c=this;null==this.a?d.c(g):this.a.push(g)};
b.resolve=e;b.reject=function(a){return new b(function(b,c){c(a)})};
b.race=function(a){return new b(function(b,c){for(var g=k(a),d=g.next();!d.done;d=g.next())e(d.value).h(b,c)})};
b.all=function(a){var c=k(a),d=c.next();return d.done?e([]):new b(function(a,b){function g(b){return function(c){l[b]=c;f--;0==f&&a(l)}}
var l=[],f=0;do l.push(void 0),f++,e(d.value).h(g(l.length-1),b),d=c.next();while(!d.done)})};
return b});
function t(){t=function(){};
p.Symbol||(p.Symbol=u)}
var u=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
function v(){t();var a=p.Symbol.iterator;a||(a=p.Symbol.iterator=p.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&m(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return x(h(this))}});
v=function(){}}
function x(a){v();a={next:a};a[p.Symbol.iterator]=function(){return this};
return a}
q("WeakMap",function(a){function b(a){this.a=(n+=Math.random()+1).toString();if(a){a=k(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}}
function c(){}
function e(a){r(a,d)||m(a,d,{value:new c})}
function f(a){var b=Object[a];b&&(Object[a]=function(a){if(a instanceof c)return a;e(a);return b(a)})}
if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),d=new a([[b,2],[c,3]]);if(2!=d.get(b)||3!=d.get(c))return!1;d.delete(b);d.set(c,4);return!d.has(b)&&4==d.get(c)}catch(da){return!1}}())return a;
var d="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var n=0;b.prototype.set=function(a,b){e(a);if(!r(a,d))throw Error("WeakMap key fail: "+a);a[d][this.a]=b;return this};
b.prototype.get=function(a){return r(a,d)?a[d][this.a]:void 0};
b.prototype.has=function(a){return r(a,d)&&r(a[d],this.a)};
b.prototype.delete=function(a){return r(a,d)&&r(a[d],this.a)?delete a[d][this.a]:!1};
return b});
q("Map",function(a){function b(){var a={};return a.d=a.next=a.i=a}
function c(a,b){var c=a.a;return x(function(){if(c){for(;c.i!=a.a;)c=c.d;for(;c.next!=c.i;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})}
function e(a,b){var c=b&&typeof b;"object"==c||"function"==c?d.has(b)?c=d.get(b):(c=""+ ++n,d.set(b,c)):c="p_"+b;var g=a.c[c];if(g&&r(a.c,c))for(a=0;a<g.length;a++){var e=g[a];if(b!==b&&e.key!==e.key||b===e.key)return{id:c,list:g,index:a,b:e}}return{id:c,list:g,index:-1,b:void 0}}
function f(a){this.c={};this.a=b();this.size=0;if(a){a=k(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a(k([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?!1:!0}catch(ea){return!1}}())return a;
v();var d=new WeakMap;f.prototype.set=function(a,b){a=0===a?0:a;var c=e(this,a);c.list||(c.list=this.c[c.id]=[]);c.b?c.b.value=b:(c.b={next:this.a,d:this.a.d,i:this.a,key:a,value:b},c.list.push(c.b),this.a.d.next=c.b,this.a.d=c.b,this.size++);return this};
f.prototype.delete=function(a){a=e(this,a);return a.b&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.c[a.id],a.b.d.next=a.b.next,a.b.next.d=a.b.d,a.b.i=null,this.size--,!0):!1};
f.prototype.clear=function(){this.c={};this.a=this.a.d=b();this.size=0};
f.prototype.has=function(a){return!!e(this,a).b};
f.prototype.get=function(a){return(a=e(this,a).b)&&a.value};
f.prototype.entries=function(){return c(this,function(a){return[a.key,a.value]})};
f.prototype.keys=function(){return c(this,function(a){return a.key})};
f.prototype.values=function(){return c(this,function(a){return a.value})};
f.prototype.forEach=function(a,b){for(var c=this.entries(),d;!(d=c.next()).done;)d=d.value,a.call(b,d[1],d[0],this)};
f.prototype[Symbol.iterator]=f.prototype.entries;var n=0;return f});
q("Set",function(a){function b(a){this.a=new Map;if(a){a=k(a);for(var b;!(b=a.next()).done;)this.add(b.value)}this.size=this.a.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),e=new a(k([b]));if(!e.has(b)||1!=e.size||e.add(b)!=e||1!=e.size||e.add({x:4})!=e||2!=e.size)return!1;var f=e.entries(),d=f.next();if(d.done||d.value[0]!=b||d.value[1]!=b)return!1;d=f.next();return d.done||d.value[0]==b||4!=d.value[0].x||d.value[1]!=d.value[0]?!1:f.next().done}catch(n){return!1}}())return a;
v();b.prototype.add=function(a){a=0===a?0:a;this.a.set(a,a);this.size=this.a.size;return this};
b.prototype.delete=function(a){a=this.a.delete(a);this.size=this.a.size;return a};
b.prototype.clear=function(){this.a.clear();this.size=0};
b.prototype.has=function(a){return this.a.has(a)};
b.prototype.entries=function(){return this.a.entries()};
b.prototype.values=function(){return this.a.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(a,b){var c=this;this.a.forEach(function(d){return a.call(b,d,d,c)})};
return b});
q("Object.is",function(a){return a?a:function(a,c){return a===c?0!==a||1/a===1/c:a!==a&&c!==c}});
var y=Date.now||function(){return+new Date};/*
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
function z(a){return new Promise(function(b,c){var e=a.length,f=null;if(e)for(var d=function(a,d){a||f||(f=d);e--;e||(f?c(f):b())},n=k(a),g=n.next();!g.done;g=n.next())g.value.then(d.bind(null,!0),d.bind(null,!1));
else b()})}
function A(a){return self.btoa(String.fromCharCode.apply(null,new Uint8Array(a))).replace(/\+/g,"-").replace(/\//g,"_")}
;var B=null;function C(a,b){var c={};c.key=a;c.value=b;return D().then(function(a){return new Promise(function(b,d){var e=a.transaction("swpushnotificationsstore","readwrite").objectStore("swpushnotificationsstore").put(c);e.onsuccess=b;e.onerror=d})})}
function E(){return C("IndexedDBCheck","testing IndexedDB").then(function(){return F("IndexedDBCheck")}).then(function(a){return"testing IndexedDB"==a?Promise.resolve():Promise.reject()}).then(function(){return!0}).catch(function(){return!1})}
function F(a){return D().then(function(b){return new Promise(function(c,e){var f=b.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);f.onsuccess=function(){var a=f.result;c(a?a.value:null)};
f.onerror=function(){e('Unable to get key "'+a+'" from object store.')}})}).catch(function(){return Promise.reject("Unable to open IndexedDB.")})}
function D(){return B?Promise.resolve(B):new Promise(function(a,b){var c=self.indexedDB.open("swpushnotificationsdb");c.onerror=b;c.onsuccess=function(){var b=c.result;if(b.objectStoreNames.contains("swpushnotificationsstore"))B=b,a(B);else return self.indexedDB.deleteDatabase("swpushnotificationsdb"),D()};
c.onupgradeneeded=G})}
function G(a){a=a.target.result;a.objectStoreNames.contains("swpushnotificationsstore")&&a.deleteObjectStore("swpushnotificationsstore");a.createObjectStore("swpushnotificationsstore",{keyPath:"key"})}
;function H(){return self.clients.matchAll({type:"window",includeUncontrolled:!0}).then(function(a){if(a){a=k(a);for(var b=a.next();!b.done;b=a.next())b.value.postMessage({type:"update_unseen_notifications_count_signal"})}})}
function I(a){if(!(a.payload&&a.payload.chrome&&a.payload.chrome.endpoints))return Promise.resolve();var b=new FormData;b.append("json_navigation_endpoints",JSON.stringify(a.payload.chrome.endpoints));var c="[]";a.payload.chrome.extraUrlParams&&(c=JSON.stringify(a.payload.chrome.extraUrlParams));b.append("extra_url_params",c);b.append("hashed_identifier",a.hashedIdentifier||"");b.append("identifier_salt",a.identifierSalt||"");return fetch("/notifications_ajax?action_convert_endpoint_to_url=1",{credentials:"include",
method:"POST",body:b}).then(function(b){return b.ok?b.json().then(function(b){if(!b.successful_conversion)return Promise.resolve();if(a.payload.chrome.postedEndpoint){var c=a.payload.chrome.postedEndpoint,e=new FormData;e.append("record_notification_interactions_endpoint",JSON.stringify(c));fetch("/notifications_ajax?action_record_notification_interactions=1",{credentials:"include",method:"POST",body:e})}return K(a,b.url)}).catch(function(){return Promise.resolve()}):Promise.resolve()})}
function K(a,b){a.deviceId&&C("DeviceId",a.deviceId);a.timestampSec&&L(a.timestampSec);var c=a.payload.chrome;return self.registration.showNotification(c.title,{body:c.body,icon:c.iconUrl,data:{nav:b,id:c.notificationId,attributionTag:c.attributionTag},tag:c.title+c.body+c.iconUrl,requireInteraction:!0}).then(function(){M(a.displayCap)}).catch(function(){})}
function N(a){return F("DeviceId").then(function(b){b=O(null,b,null,a);return fetch("/notifications_ajax?action_notification_click=1",{credentials:"include",method:"POST",body:b})})}
function P(){return Promise.all([F("TimestampLowerBound"),Q(),F("DeviceId")]).then(function(a){var b=k(a);a=b.next().value;var c=b.next().value;b=b.next().value;if(!a)return Promise.reject(null);a=O(c,b,a);return fetch("/notifications_ajax?action_get_notifications=1",{credentials:"include",method:"POST",body:a}).then(R)})}
function R(a){return a.ok?a.json().then(S).catch(function(){}):Promise.resolve()}
function S(a){if(a.errors)return Promise.reject(a.errors);a.device_id&&C("DeviceId",a.device_id);a.ts&&L(a.ts);if(a.notifications){var b=[];a.notifications.forEach(function(a){b.push(self.registration.showNotification(a.title,{body:a.message,icon:a.iconUrl,data:{nav:a.nav,id:a.id,attributionTag:a.attributionTag},tag:a.title+a.message+a.iconUrl,requireInteraction:a.requireInteraction}))});
return z(b).then(function(){M(a.display_cap)})}return Promise.resolve()}
function M(a){-1!=a&&self.registration.getNotifications().then(function(b){for(var c=0;c<b.length-a;c++)b[c].close()})}
function T(a){var b=[U(a),F("RegistrationTimestamp").then(V),W(),X()];Promise.all(b).catch(function(){C("IDToken",a);Y();return Promise.resolve()})}
function V(a){a=a||0;return 9E7>=y()-a?Promise.resolve():Promise.reject()}
function U(a){return F("IDToken").then(function(b){return a==b?Promise.resolve():Promise.reject()})}
function W(){return F("Permission").then(function(a){return Notification.permission==a?Promise.resolve():Promise.reject()})}
function X(){return F("Endpoint").then(function(a){return Q().then(function(b){return a==b?Promise.resolve():Promise.reject()})})}
function Y(){C("RegistrationTimestamp",0);Promise.all([Q(),aa(),ba()]).then(function(a){var b=k(a);a=b.next().value;var c=b.next().value;b=b.next().value;c&&(c=A(c));b&&(b=A(b));Z(a,c,b)}).catch(function(){Z()})}
function Z(a,b,c){a=void 0===a?null:a;b=void 0===b?null:b;c=void 0===c?null:c;E().then(function(e){e&&(C("Endpoint",a),C("P256dhKey",b),C("AuthKey",c),C("Permission",Notification.permission),Promise.all([F("DeviceId"),F("NotificationsDisabled")]).then(function(e){var d=k(e);e=d.next().value;d=d.next().value;e=O(a,e,null,null,d,b,c);fetch("/notifications_ajax?action_register_device=1",{credentials:"include",method:"POST",body:e}).then(ca).catch(function(){})}))})}
function O(a,b,c,e,f,d,n){var g=new FormData;a&&g.append("endpoint",a);b&&g.append("device_id",b);c&&g.append("timestamp_lower_bound",c);e&&(g.append("notification_id",e.id),g.append("attribution_tag",e.attributionTag));f&&g.append("notifications_disabled",(!!f).toString());d&&g.append("p256dh_key",d);n&&g.append("auth_key",n);g.append("permission",Notification.permission);return g}
function ca(a){C("RegistrationTimestamp",y());a.ok&&a.json().then(function(a){a.ts&&L(a.ts);a.device_id&&C("DeviceId",a.device_id)}).catch(function(){})}
function Q(){return self.registration.pushManager.getSubscription().then(function(a){return a?Promise.resolve(a.endpoint):Promise.resolve(null)})}
function aa(){return self.registration.pushManager.getSubscription().then(function(a){return a&&a.getKey?Promise.resolve(a.getKey("p256dh")):Promise.resolve(null)})}
function ba(){return self.registration.pushManager.getSubscription().then(function(a){return a&&a.getKey?Promise.resolve(a.getKey("auth")):Promise.resolve(null)})}
function L(a){C("TimestampLowerBound",a)}
;self.oninstall=function(a){a.waitUntil(self.skipWaiting())};
self.onactivate=function(a){a.waitUntil(self.clients.claim())};
self.onmessage=function(a){var b=a.data;a=b.type;b=b.data;"notifications_register"==a?(C("IDToken",b),Y()):"notifications_check_registration"==a&&T(b)};
self.onnotificationclick=function(a){a.notification.close();var b=a.notification.data,c=self.clients.matchAll({type:"window",includeUncontrolled:!0});c.then(function(a){a:{var c=b.nav;a=k(a);for(var d=a.next();!d.done;d=a.next())if(d=d.value,d.url==c){d.focus();break a}self.clients.openWindow(c)}});
a.waitUntil(c);a.waitUntil(N(b))};
self.onpush=function(a){a.waitUntil(F("NotificationsDisabled").then(function(b){if(b)return Promise.resolve();if(a.data&&a.data.text().length)try{return I(a.data.json())}catch(c){return Promise.resolve(c.message)}return P()}));
a.waitUntil(H())};
self.onpushsubscriptionchange=function(){Y()};
