(function(){function m(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
function n(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:m(a)}}
function p(a){if(!(a instanceof Array)){a=n(a);for(var b,d=[];!(b=a.next()).done;)d.push(b.value);a=d}return a}
var r="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,d){a!=Array.prototype&&a!=Object.prototype&&(a[b]=d.value)},t="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function v(a,b){if(b){for(var d=t,e=a.split("."),f=0;f<e.length-1;f++){var k=e[f];k in d||(d[k]={});d=d[k]}e=e[e.length-1];f=d[e];k=b(f);k!=f&&null!=k&&r(d,e,{configurable:!0,writable:!0,value:k})}}
function w(a,b,d){if(null==a)throw new TypeError("The 'this' value for String.prototype."+d+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+d+" must not be a regular expression");return a+""}
v("String.prototype.startsWith",function(a){return a?a:function(b,d){var e=w(this,b,"startsWith");b+="";for(var f=e.length,k=b.length,q=Math.max(0,Math.min(d|0,e.length)),c=0;c<k&&q<f;)if(e[q++]!=b[c++])return!1;return c>=k}});
v("String.prototype.endsWith",function(a){return a?a:function(b,d){var e=w(this,b,"endsWith");b+="";void 0===d&&(d=e.length);for(var f=Math.max(0,Math.min(d|0,e.length)),k=b.length;0<k&&0<f;)if(e[--f]!=b[--k])return!1;return 0>=k}});
function y(){y=function(){};
t.Symbol||(t.Symbol=z)}
function A(a,b){this.a=a;r(this,"description",{configurable:!0,writable:!0,value:b})}
A.prototype.toString=function(){return this.a};
var z=function(){function a(d){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new A("jscomp_symbol_"+(d||"")+"_"+b++,d)}
var b=0;return a}();
function B(){y();var a=t.Symbol.iterator;a||(a=t.Symbol.iterator=t.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&r(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return C(m(this))}});
B=function(){}}
function C(a){B();a={next:a};a[t.Symbol.iterator]=function(){return this};
return a}
function D(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
v("WeakMap",function(a){function b(c){this.a=(q+=Math.random()+1).toString();if(c){c=n(c);for(var h;!(h=c.next()).done;)h=h.value,this.set(h[0],h[1])}}
function d(){}
function e(c){if(!D(c,k)){var h=new d;r(c,k,{value:h})}}
function f(c){var h=Object[c];h&&(Object[c]=function(g){if(g instanceof d)return g;e(g);return h(g)})}
if(function(){if(!a||!Object.seal)return!1;try{var c=Object.seal({}),h=Object.seal({}),g=new a([[c,2],[h,3]]);if(2!=g.get(c)||3!=g.get(h))return!1;g["delete"](c);g.set(h,4);return!g.has(c)&&4==g.get(h)}catch(l){return!1}}())return a;
var k="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var q=0;b.prototype.set=function(c,h){e(c);if(!D(c,k))throw Error("WeakMap key fail: "+c);c[k][this.a]=h;return this};
b.prototype.get=function(c){return D(c,k)?c[k][this.a]:void 0};
b.prototype.has=function(c){return D(c,k)&&D(c[k],this.a)};
b.prototype["delete"]=function(c){return D(c,k)&&D(c[k],this.a)?delete c[k][this.a]:!1};
return b});
v("Map",function(a){function b(){var c={};return c.previous=c.next=c.head=c}
function d(c,h){var g=c.a;return C(function(){if(g){for(;g.head!=c.a;)g=g.previous;for(;g.next!=g.head;)return g=g.next,{done:!1,value:h(g)};g=null}return{done:!0,value:void 0}})}
function e(c,h){var g=h&&typeof h;"object"==g||"function"==g?k.has(h)?g=k.get(h):(g=""+ ++q,k.set(h,g)):g="p_"+h;var l=c.f[g];if(l&&D(c.f,g))for(var u=0;u<l.length;u++){var x=l[u];if(h!==h&&x.key!==x.key||h===x.key)return{id:g,list:l,index:u,b:x}}return{id:g,list:l,index:-1,b:void 0}}
function f(c){this.f={};this.a=b();this.size=0;if(c){c=n(c);for(var h;!(h=c.next()).done;)h=h.value,this.set(h[0],h[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),h=new a(n([[c,"s"]]));if("s"!=h.get(c)||1!=h.size||h.get({x:4})||h.set({x:4},"t")!=h||2!=h.size)return!1;var g=h.entries(),l=g.next();if(l.done||l.value[0]!=c||"s"!=l.value[1])return!1;l=g.next();return l.done||4!=l.value[0].x||"t"!=l.value[1]||!g.next().done?!1:!0}catch(u){return!1}}())return a;
B();var k=new WeakMap;f.prototype.set=function(c,h){c=0===c?0:c;var g=e(this,c);g.list||(g.list=this.f[g.id]=[]);g.b?g.b.value=h:(g.b={next:this.a,previous:this.a.previous,head:this.a,key:c,value:h},g.list.push(g.b),this.a.previous.next=g.b,this.a.previous=g.b,this.size++);return this};
f.prototype["delete"]=function(c){c=e(this,c);return c.b&&c.list?(c.list.splice(c.index,1),c.list.length||delete this.f[c.id],c.b.previous.next=c.b.next,c.b.next.previous=c.b.previous,c.b.head=null,this.size--,!0):!1};
f.prototype.clear=function(){this.f={};this.a=this.a.previous=b();this.size=0};
f.prototype.has=function(c){return!!e(this,c).b};
f.prototype.get=function(c){return(c=e(this,c).b)&&c.value};
f.prototype.entries=function(){return d(this,function(c){return[c.key,c.value]})};
f.prototype.keys=function(){return d(this,function(c){return c.key})};
f.prototype.values=function(){return d(this,function(c){return c.value})};
f.prototype.forEach=function(c,h){for(var g=this.entries(),l;!(l=g.next()).done;)l=l.value,c.call(h,l[1],l[0],this)};
f.prototype[Symbol.iterator]=f.prototype.entries;var q=0;return f});
v("Set",function(a){function b(d){this.a=new Map;if(d){d=n(d);for(var e;!(e=d.next()).done;)this.add(e.value)}this.size=this.a.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var d=Object.seal({x:4}),e=new a(n([d]));if(!e.has(d)||1!=e.size||e.add(d)!=e||1!=e.size||e.add({x:4})!=e||2!=e.size)return!1;var f=e.entries(),k=f.next();if(k.done||k.value[0]!=d||k.value[1]!=d)return!1;k=f.next();return k.done||k.value[0]==d||4!=k.value[0].x||k.value[1]!=k.value[0]?!1:f.next().done}catch(q){return!1}}())return a;
B();b.prototype.add=function(d){d=0===d?0:d;this.a.set(d,d);this.size=this.a.size;return this};
b.prototype["delete"]=function(d){d=this.a["delete"](d);this.size=this.a.size;return d};
b.prototype.clear=function(){this.a.clear();this.size=0};
b.prototype.has=function(d){return this.a.has(d)};
b.prototype.entries=function(){return this.a.entries()};
b.prototype.values=function(){return this.a.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(d,e){var f=this;this.a.forEach(function(k){return d.call(e,k,k,f)})};
return b});
var E=this;function F(a,b){var d=a.split("."),e=E;d[0]in e||"undefined"==typeof e.execScript||e.execScript("var "+d[0]);for(var f;d.length&&(f=d.shift());)d.length||void 0===b?e[f]&&e[f]!==Object.prototype[f]?e=e[f]:e=e[f]={}:e[f]=b}
;var G=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function H(a){return a?decodeURI(a):a}
;var I=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};F("yt.config_",I);function J(){var a=[];return"CSS_CLASS_WHITELIST"in I?I.CSS_CLASS_WHITELIST:a}
;var K=Object.freeze(["js-httpswwwgoogleanalyticscomanalyticsjs","js-chromeextensionpkedcjkdefgpdelpbcmbmeomcjbeemfm","video-","js-http","css-http"]),L=Object.freeze("document.appendChild document.body.appendChild document.querySelector document.querySelectorAll history.back history.go".split(" ")),M=Object.freeze("fonts.googleapis.com s0.2mdn.net securepubads.g.doubleclick.net ssl.google-analytics.com static.doubleclick.net www.google-analytics.com www.googletagservices.com www.youtube.com youtube.com".split(" ")),
N=Object.freeze(["pkedcjkdefgpdelpbcmbmeomcjbeemfm","fjhoaacokmgbjemoflkofnenfaiekifl","enhhojjnijigcajfphajepfemndkmdlo"]),O=Object.freeze(".corp.google.com .googlevideo.com .ytimg.com .google.com .googlesyndication.com .gstatic.com .prod.google.com .google.ru".split(" ")),P=Object.freeze(["chrome-extension","safari-extension","safari-resource","opera"]);function Q(){return L.map(function(a){return R(a)}).filter(function(a){return!!a})}
function R(a){var b=a.split(".");a=b[b.length-1];b=b.reduce(function(d,e){return d&&d[e]},window);
if(!b)return a+" is missing";b=Function.prototype.toString.call(b).replace(/\n/g," ").replace(/  +/g," ");return b!="function "+a+"() { [native code] }"?a+" is not native, prologue: "+b.slice(0,50):null}
function S(a){var b=a.match(G)[1]||null;return P.some(function(d){return b==d})}
function T(a){var b=H(a.match(G)[3]||null);return!b||S(a)?!0:M.some(function(d){return b==d})||O.some(function(d){return b.endsWith(d)})}
function U(a){if(!S(a))return null;var b=H(a.match(G)[3]||null);return b?N.some(function(d){return b==d})?null:b:null}
function V(){var a=new Set;[].concat(p(document.querySelectorAll("script"))).forEach(function(b){b.src&&!T(b.src)&&a.add(b.src)});
[].concat(p(document.querySelectorAll("link[href]"))).forEach(function(b){"alternate"==b.rel||T(b.href)||a.add(b.href)});
return[].concat(p(a)).sort()}
function W(){var a=new Set;[].concat(p(document.querySelectorAll("script"))).forEach(function(b){b.src&&(b=U(b.src))&&a.add(b)});
return[].concat(p(a)).sort()}
function X(){var a=new Set;[].concat(p(window.document.querySelectorAll("*"))).forEach(function(b){[].concat(p(b.classList)).forEach(function(d){Y()||a.add(d)})});
return a}
function Y(){return K.some(function(){})}
function Z(){var a=new Set(J());if(!a.size)return[];var b=new Set;X().forEach(function(f){a.has(f)||Y()||b.add(f)});
var d=[].concat(p(b)).sort();d=d.slice(0,15);var e=b.size-15;0<e&&d.push("...and "+e+" more.");return d}
;F("ytbin.polymer.shared.lib.tampering.info",function(){var a=Z(),b=V(),d=Q(),e=W(),f=[];e.length&&f.push("extensions",e);a.length&&f.push("suspiciousClasses",a);b.length&&f.push("suspiciousIncludes",b);d.length&&f.push("suspiciousApis",d);return f.length?f:null});}).call(this);
