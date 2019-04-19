(function(){var k;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
function ba(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
var ca="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},da;
if("function"==typeof Object.setPrototypeOf)da=Object.setPrototypeOf;else{var ea;a:{var ha={jc:!0},ia={};try{ia.__proto__=ha;ea=ia.jc;break a}catch(a){}ea=!1}da=ea?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ja=da;
function ka(a,b){a.prototype=ca(b.prototype);a.prototype.constructor=a;if(ja)ja(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Y=b.prototype}
var la="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ma="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function r(a,b){if(b){for(var c=ma,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&la(c,d,{configurable:!0,writable:!0,value:f})}}
function na(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
r("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=na(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});
r("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=na(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
function oa(){oa=function(){};
ma.Symbol||(ma.Symbol=pa)}
function qa(a,b){this.f=a;la(this,"description",{configurable:!0,writable:!0,value:b})}
qa.prototype.toString=function(){return this.f};
var pa=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new qa("jscomp_symbol_"+(c||"")+"_"+b++,c)}
var b=0;return a}();
function ra(){oa();var a=ma.Symbol.iterator;a||(a=ma.Symbol.iterator=ma.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&la(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return sa(aa(this))}});
ra=function(){}}
function sa(a){ra();a={next:a};a[ma.Symbol.iterator]=function(){return this};
return a}
function u(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ta="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)u(d,e)&&(a[e]=d[e])}return a};
r("Object.assign",function(a){return a||ta});
r("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
r("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length,f=c||0;for(0>f&&(f=Math.max(f+e,0));f<e;f++){var g=d[f];if(g===b||Object.is(g,b))return!0}return!1}});
r("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==na(this,b,"includes").indexOf(b,c||0)}});
r("WeakMap",function(a){function b(h){this.f=(g+=Math.random()+1).toString();if(h){h=ba(h);for(var m;!(m=h.next()).done;)m=m.value,this.set(m[0],m[1])}}
function c(){}
function d(h){if(!u(h,f)){var m=new c;la(h,f,{value:m})}}
function e(h){var m=Object[h];m&&(Object[h]=function(l){if(l instanceof c)return l;d(l);return m(l)})}
if(function(){if(!a||!Object.seal)return!1;try{var h=Object.seal({}),m=Object.seal({}),l=new a([[h,2],[m,3]]);if(2!=l.get(h)||3!=l.get(m))return!1;l["delete"](h);l.set(m,4);return!l.has(h)&&4==l.get(m)}catch(n){return!1}}())return a;
var f="$jscomp_hidden_"+Math.random();e("freeze");e("preventExtensions");e("seal");var g=0;b.prototype.set=function(h,m){d(h);if(!u(h,f))throw Error("WeakMap key fail: "+h);h[f][this.f]=m;return this};
b.prototype.get=function(h){return u(h,f)?h[f][this.f]:void 0};
b.prototype.has=function(h){return u(h,f)&&u(h[f],this.f)};
b.prototype["delete"]=function(h){return u(h,f)&&u(h[f],this.f)?delete h[f][this.f]:!1};
return b});
r("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,m){var l=h.f;return sa(function(){if(l){for(;l.head!=h.f;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:m(l)};l=null}return{done:!0,value:void 0}})}
function d(h,m){var l=m&&typeof m;"object"==l||"function"==l?f.has(m)?l=f.get(m):(l=""+ ++g,f.set(m,l)):l="p_"+m;var n=h.l[l];if(n&&u(h.l,l))for(var p=0;p<n.length;p++){var t=n[p];if(m!==m&&t.key!==t.key||m===t.key)return{id:l,list:n,index:p,S:t}}return{id:l,list:n,index:-1,S:void 0}}
function e(h){this.l={};this.f=b();this.size=0;if(h){h=ba(h);for(var m;!(m=h.next()).done;)m=m.value,this.set(m[0],m[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),m=new a(ba([[h,"s"]]));if("s"!=m.get(h)||1!=m.size||m.get({x:4})||m.set({x:4},"t")!=m||2!=m.size)return!1;var l=m.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
ra();var f=new WeakMap;e.prototype.set=function(h,m){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.l[l.id]=[]);l.S?l.S.value=m:(l.S={next:this.f,previous:this.f.previous,head:this.f,key:h,value:m},l.list.push(l.S),this.f.previous.next=l.S,this.f.previous=l.S,this.size++);return this};
e.prototype["delete"]=function(h){h=d(this,h);return h.S&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.l[h.id],h.S.previous.next=h.S.next,h.S.next.previous=h.S.previous,h.S.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.l={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).S};
e.prototype.get=function(h){return(h=d(this,h).S)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,m){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(m,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
r("Set",function(a){function b(c){this.f=new Map;if(c){c=ba(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.f.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(ba([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
ra();b.prototype.add=function(c){c=0===c?0:c;this.f.set(c,c);this.size=this.f.size;return this};
b.prototype["delete"]=function(c){c=this.f["delete"](c);this.size=this.f.size;return c};
b.prototype.clear=function(){this.f.clear();this.size=0};
b.prototype.has=function(c){return this.f.has(c)};
b.prototype.entries=function(){return this.f.entries()};
b.prototype.values=function(){return this.f.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.f.forEach(function(f){return c.call(d,f,f,e)})};
return b});
var v=this;function w(a){return void 0!==a}
function x(a){return"string"==typeof a}
function ua(a){return"number"==typeof a}
function y(a,b){for(var c=a.split("."),d=b||v,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function va(){}
function wa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function xa(a){return"array"==wa(a)}
function ya(a){var b=wa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function za(a){return"function"==wa(a)}
function Ba(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ca(a,b,c){return a.call.apply(a.bind,arguments)}
function Da(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function A(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?A=Ca:A=Da;return A.apply(null,arguments)}
function Ea(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
var B=Date.now||function(){return+new Date};
function C(a,b){var c=a.split("."),d=v;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&w(b)?d[e]=b:d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}}
function D(a,b){function c(){}
c.prototype=b.prototype;a.Y=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.ee=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
;var E=window;var Fa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(x(a))return x(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},F=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=x(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ga=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=x(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var m=g[h];
b.call(c,m,h,a)&&(e[f++]=m)}return e},Ha=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
F(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Ia(a,b){var c=Fa(a,b),d;(d=0<=c)&&Array.prototype.splice.call(a,c,1);return d}
function Ja(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Ka(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(ya(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;var La=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},Ma=/&/g,Na=/</g,Oa=/>/g,Pa=/"/g,Qa=/'/g,Ra=/\x00/g,Sa=/[\x00&<>"']/;
function Ta(){return-1!=Ua.toLowerCase().indexOf("webkit")}
function Va(a,b){for(var c=0,d=La(String(a)).split("."),e=La(String(b)).split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){var h=d[g]||"",m=e[g]||"";do{h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];m=/(\d*)(\D*)(.*)/.exec(m)||["","","",""];if(0==h[0].length&&0==m[0].length)break;c=Wa(0==h[1].length?0:parseInt(h[1],10),0==m[1].length?0:parseInt(m[1],10))||Wa(0==h[2].length,0==m[2].length)||Wa(h[2],m[2]);h=h[3];m=m[3]}while(0==c)}return c}
function Wa(a,b){return a<b?-1:a>b?1:0}
;function Xa(a){return decodeURIComponent(a.replace(/\+/g," "))}
;var Ua;a:{var Ya=v.navigator;if(Ya){var Za=Ya.userAgent;if(Za){Ua=Za;break a}}Ua=""}function G(a){return-1!=Ua.indexOf(a)}
function $a(a){for(var b=RegExp("(\\w[\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?","g"),c=[],d;d=b.exec(a);)c.push([d[1],d[2],d[3]||void 0]);return c}
;function ab(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function bb(a,b){return null!==a&&b in a}
function cb(a){for(var b in a)return!1;return!0}
function db(a){var b=wa(a);if("object"==b||"array"==b){if(za(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=db(a[c]);return b}return a}
var eb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function fb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<eb.length;f++)c=eb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function gb(){return G("Opera")}
function hb(){return G("Trident")||G("MSIE")}
function ib(){return G("Safari")&&!(jb()||G("Coast")||gb()||G("Edge")||G("Firefox")||G("FxiOS")||G("Silk")||G("Android"))}
function jb(){return(G("Chrome")||G("CriOS"))&&!G("Edge")}
function kb(){function a(e){a:{var f=d;for(var g=e.length,h=x(e)?e.split(""):e,m=0;m<g;m++)if(m in h&&f.call(void 0,h[m],m,e)){f=m;break a}f=-1}return c[0>f?null:x(e)?e.charAt(f):e[f]]||""}
var b=Ua;if(hb())return lb(b);b=$a(b);var c={};F(b,function(e){c[e[0]]=e[1]});
var d=Ea(bb,c);return gb()?a(["Version","Opera"]):G("Edge")?a(["Edge"]):jb()?a(["Chrome","CriOS"]):(b=b[2])&&b[1]||""}
function lb(a){var b=/rv: *([\d\.]*)/.exec(a);if(b&&b[1])return b[1];b="";var c=/MSIE +([\d\.]+)/.exec(a);if(c&&c[1])if(a=/Trident\/(\d.\d)/.exec(a),"7.0"==c[1])if(a&&a[1])switch(a[1]){case "4.0":b="8.0";break;case "5.0":b="9.0";break;case "6.0":b="10.0";break;case "7.0":b="11.0"}else b="7.0";else b=c[1];return b}
;function mb(){return G("Gecko")&&!(Ta()&&!G("Edge"))&&!(G("Trident")||G("MSIE"))&&!G("Edge")}
;function nb(a){nb[" "](a);return a}
nb[" "]=va;var ob=gb(),pb=hb(),qb=G("Edge"),rb=mb(),sb=Ta()&&!G("Edge");function tb(){var a=v.document;return a?a.documentMode:void 0}
var ub;a:{var vb="",wb=function(){var a=Ua;if(rb)return/rv:([^\);]+)(\)|;)/.exec(a);if(qb)return/Edge\/([\d\.]+)/.exec(a);if(pb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(sb)return/WebKit\/(\S+)/.exec(a);if(ob)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
wb&&(vb=wb?wb[1]:"");if(pb){var xb=tb();if(null!=xb&&xb>parseFloat(vb)){ub=String(xb);break a}}ub=vb}var zb=ub,Ab={},Bb;var Cb=v.document;Bb=Cb&&pb?tb()||("CSS1Compat"==Cb.compatMode?parseInt(zb,10):5):void 0;var Db=null,Eb=null;function Fb(a){this.f=a||{cookie:""}}
k=Fb.prototype;k.isEnabled=function(){return navigator.cookieEnabled};
k.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');w(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(B()+1E3*c)).toUTCString();this.f.cookie=a+"="+b+e+d+c+f};
k.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=La(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
k.remove=function(a,b,c){var d=w(this.get(a));this.set(a,"",0,b,c);return d};
k.isEmpty=function(){return!this.f.cookie};
k.clear=function(){for(var a=(this.f.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=La(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Gb=new Fb("undefined"==typeof document?null:document);function Hb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function H(){this.f="";this.l=Ib}
H.prototype.Va=!0;H.prototype.Sa=function(){return this.f.toString()};
H.prototype.yb=!0;H.prototype.Pa=function(){return 1};
function Jb(a){return a instanceof H&&a.constructor===H&&a.l===Ib?a.f:"type_error:SafeUrl"}
var Kb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Lb(a){if(a instanceof H)return a;a="object"==typeof a&&a.Va?a.Sa():String(a);Kb.test(a)||(a="about:invalid#zClosurez");return Mb(a)}
var Ib={};function Mb(a){var b=new H;b.f=a;return b}
Mb("about:blank");function I(){this.f="";this.g=Nb;this.l=null}
I.prototype.yb=!0;I.prototype.Pa=function(){return this.l};
I.prototype.Va=!0;I.prototype.Sa=function(){return this.f.toString()};
function Ob(a){return a instanceof I&&a.constructor===I&&a.g===Nb?a.f:"type_error:SafeHtml"}
var Nb={};function Pb(a,b){var c=new I;c.f=a;c.l=b;return c}
Pb("<!DOCTYPE html>",0);var Qb=Pb("",0);Pb("<br>",0);var Rb=Hb(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);b=a.firstChild.firstChild;a.innerHTML=Ob(Qb);return!b.parentElement});
function Sb(a,b){var c=b instanceof H?b:Lb(b);a.href=Jb(c)}
;function Tb(a,b){this.width=a;this.height=b}
k=Tb.prototype;k.clone=function(){return new Tb(this.width,this.height)};
k.aspectRatio=function(){return this.width/this.height};
k.isEmpty=function(){return!(this.width*this.height)};
k.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
k.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
k.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Ub(){return!(G("iPad")||G("Android")&&!G("Mobile")||G("Silk"))&&(G("iPod")||G("iPhone")||G("Android")||G("IEMobile"))}
;function Vb(a){var b=Wb;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Xb(){var a=[];Vb(function(b){a.push(b)});
return a}
var Wb={Rd:"allow-forms",Sd:"allow-modals",Td:"allow-orientation-lock",Ud:"allow-pointer-lock",Vd:"allow-popups",Wd:"allow-popups-to-escape-sandbox",Xd:"allow-presentation",Yd:"allow-same-origin",Zd:"allow-scripts",ae:"allow-top-navigation",be:"allow-top-navigation-by-user-activation"},Yb=Hb(function(){return Xb()});
function Zb(){var a=document.createElement("IFRAME").sandbox,b=a&&a.supports;if(!b)return{};var c={};F(Yb(),function(d){b.call(a,d)&&(c[d]=!0)});
return c}
;function $b(){var a=document.body||document.documentElement;a:{var b=9==a.nodeType?a:a.ownerDocument||a.document;if(b.defaultView&&b.defaultView.getComputedStyle&&(b=b.defaultView.getComputedStyle(a,null))){b=b.direction||b.getPropertyValue("direction")||"";break a}b=""}return b||(a.currentStyle?a.currentStyle.direction:null)||a.style&&a.style.direction}
;var ac=(new Date).getTime();function bc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function cc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(p){for(var t=g,q=0;64>q;q+=4)t[q/4]=p[q]<<24|p[q+1]<<16|p[q+2]<<8|p[q+3];for(q=16;80>q;q++)p=t[q-3]^t[q-8]^t[q-14]^t[q-16],t[q]=(p<<1|p>>>31)&4294967295;p=e[0];var z=e[1],W=e[2],fa=e[3],Nc=e[4];for(q=0;80>q;q++){if(40>q)if(20>q){var Aa=fa^z&(W^fa);var yb=1518500249}else Aa=z^W^fa,yb=1859775393;else 60>q?(Aa=z&W|fa&(z|W),yb=2400959708):(Aa=z^W^fa,yb=3395469782);Aa=((p<<5|p>>>27)&4294967295)+Aa+Nc+yb+t[q]&4294967295;Nc=fa;fa=W;W=(z<<30|z>>>2)&4294967295;z=p;p=Aa}e[0]=e[0]+p&4294967295;e[1]=
e[1]+z&4294967295;e[2]=e[2]+W&4294967295;e[3]=e[3]+fa&4294967295;e[4]=e[4]+Nc&4294967295}
function c(p,t){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var q=[],z=0,W=p.length;z<W;++z)q.push(p.charCodeAt(z));p=q}t||(t=p.length);q=0;if(0==l)for(;q+64<t;)b(p.slice(q,q+64)),q+=64,n+=64;for(;q<t;)if(f[l++]=p[q++],n++,64==l)for(l=0,b(f);q+64<t;)b(p.slice(q,q+64)),q+=64,n+=64}
function d(){var p=[],t=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var q=63;56<=q;q--)f[q]=t&255,t>>>=8;b(f);for(q=t=0;5>q;q++)for(var z=24;0<=z;z-=8)p[t++]=e[q]>>z&255;return p}
for(var e=[],f=[],g=[],h=[128],m=1;64>m;++m)h[m]=0;var l,n;a();return{reset:a,update:c,digest:d,nc:function(){for(var p=d(),t="",q=0;q<p.length;q++)t+="0123456789ABCDEF".charAt(Math.floor(p[q]/16))+"0123456789ABCDEF".charAt(p[q]%16);return t}}}
;function dc(a,b,c){var d=[],e=[];if(1==(xa(c)?2:1))return e=[b,a],F(d,function(h){e.push(h)}),ec(e.join(" "));
var f=[],g=[];F(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];F(d,function(h){e.push(h)});
a=ec(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function ec(a){var b=cc();b.update(a);return b.nc().toLowerCase()}
;function fc(a){var b=bc(String(v.location.href)),c=v.__OVERRIDE_SID;null==c&&(c=(new Fb(document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?v.__SAPISID:v.__APISID,null==b&&(b=(new Fb(document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(v.location.href);return d&&b&&c?[c,dc(bc(d),b,a||null)].join(" "):null}return null}
;function gc(a,b){this.g=a;this.i=b;this.l=0;this.f=null}
gc.prototype.get=function(){if(0<this.l){this.l--;var a=this.f;this.f=a.next;a.next=null}else a=this.g();return a};function hc(a){v.setTimeout(function(){throw a;},0)}
var ic;
function jc(){var a=v.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!G("Presto")&&(a=function(){var e=document.createElement("IFRAME");e.style.display="none";e.src="";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.write("");e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=A(function(m){if(("*"==h||m.origin==h)&&m.data==
g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!hb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(w(c.next)){c=c.next;var e=c.jb;c.jb=null;e()}};
return function(e){d.next={jb:e};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(e){var f=document.createElement("SCRIPT");
f.onreadystatechange=function(){f.onreadystatechange=null;f.parentNode.removeChild(f);f=null;e();e=null};
document.documentElement.appendChild(f)}:function(e){v.setTimeout(e,0)}}
;function kc(){this.l=this.f=null}
var mc=new gc(function(){return new lc},function(a){a.reset()});
kc.prototype.add=function(a,b){var c=mc.get();c.set(a,b);this.l?this.l.next=c:this.f=c;this.l=c};
kc.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.l=null),a.next=null);return a};
function lc(){this.next=this.scope=this.f=null}
lc.prototype.set=function(a,b){this.f=a;this.scope=b;this.next=null};
lc.prototype.reset=function(){this.next=this.scope=this.f=null};function nc(a){oc||pc();qc||(oc(),qc=!0);rc.add(a,void 0)}
var oc;function pc(){if(v.Promise&&v.Promise.resolve){var a=v.Promise.resolve(void 0);oc=function(){a.then(sc)}}else oc=function(){var b=sc;
!za(v.setImmediate)||v.Window&&v.Window.prototype&&!G("Edge")&&v.Window.prototype.setImmediate==v.setImmediate?(ic||(ic=jc()),ic(b)):v.setImmediate(b)}}
var qc=!1,rc=new kc;function sc(){for(var a;a=rc.remove();){try{a.f.call(a.scope)}catch(c){hc(c)}var b=mc;b.i(a);100>b.l&&(b.l++,a.next=b.f,b.f=a)}qc=!1}
;function tc(){this.l=-1}
;function uc(){this.l=64;this.f=[];this.o=[];this.s=[];this.i=[];this.i[0]=128;for(var a=1;a<this.l;++a)this.i[a]=0;this.m=this.g=0;this.reset()}
D(uc,tc);uc.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.m=this.g=0};
function vc(a,b,c){c||(c=0);var d=a.s;if(x(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var g=a.f[2],h=a.f[3],m=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):(f=c^g^h,l=
3395469782);f=(b<<5|b>>>27)+f+m+l+d[e]&4294967295;m=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+g&4294967295;a.f[3]=a.f[3]+h&4294967295;a.f[4]=a.f[4]+m&4294967295}
uc.prototype.update=function(a,b){if(null!=a){w(b)||(b=a.length);for(var c=b-this.l,d=0,e=this.o,f=this.g;d<b;){if(0==f)for(;d<=c;)vc(this,a,d),d+=this.l;if(x(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.l){vc(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.l){vc(this,e);f=0;break}}this.g=f;this.m+=b}};
uc.prototype.digest=function(){var a=[],b=8*this.m;56>this.g?this.update(this.i,56-this.g):this.update(this.i,this.l-(this.g-56));for(var c=this.l-1;56<=c;c--)this.o[c]=b&255,b/=256;vc(this,this.o);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};function wc(){this.g=this.g;this.m=this.m}
wc.prototype.g=!1;wc.prototype.dispose=function(){this.g||(this.g=!0,this.ba())};
wc.prototype.ba=function(){if(this.m)for(;this.m.length;)this.m.shift()()};function xc(a){if(a.classList)return a.classList;a=a.className;return x(a)&&a.match(/\S+/g)||[]}
function yc(a,b){if(a.classList)var c=a.classList.contains(b);else c=xc(a),c=0<=Fa(c,b);return c}
function zc(a,b){a.classList?a.classList.add(b):yc(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function Ac(a,b){a.classList?a.classList.remove(b):yc(a,b)&&(a.className=Ga(xc(a),function(c){return c!=b}).join(" "))}
;var Bc="StopIteration"in v?v.StopIteration:{message:"StopIteration",stack:""};function Cc(){}
Cc.prototype.next=function(){throw Bc;};
Cc.prototype.Z=function(){return this};
function Dc(a){if(a instanceof Cc)return a;if("function"==typeof a.Z)return a.Z(!1);if(ya(a)){var b=0,c=new Cc;c.next=function(){for(;;){if(b>=a.length)throw Bc;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Ec(a,b){if(ya(a))try{F(a,b,void 0)}catch(c){if(c!==Bc)throw c;}else{a=Dc(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Bc)throw c;}}}
function Fc(a){if(ya(a))return Ja(a);a=Dc(a);var b=[];Ec(a,function(c){b.push(c)});
return b}
;function Gc(a,b){this.g={};this.f=[];this.i=this.l=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Gc)for(c=Hc(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Hc(a){Ic(a);return a.f.concat()}
k=Gc.prototype;k.equals=function(a,b){if(this===a)return!0;if(this.l!=a.l)return!1;var c=b||Jc;Ic(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function Jc(a,b){return a===b}
k.isEmpty=function(){return 0==this.l};
k.clear=function(){this.g={};this.i=this.l=this.f.length=0};
k.remove=function(a){return Object.prototype.hasOwnProperty.call(this.g,a)?(delete this.g[a],this.l--,this.i++,this.f.length>2*this.l&&Ic(this),!0):!1};
function Ic(a){if(a.l!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Object.prototype.hasOwnProperty.call(a.g,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.l!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],Object.prototype.hasOwnProperty.call(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
k.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.g,a)?this.g[a]:b};
k.set=function(a,b){Object.prototype.hasOwnProperty.call(this.g,a)||(this.l++,this.f.push(a),this.i++);this.g[a]=b};
k.forEach=function(a,b){for(var c=Hc(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
k.clone=function(){return new Gc(this)};
k.Z=function(a){Ic(this);var b=0,c=this.i,d=this,e=new Cc;e.next=function(){if(c!=d.i)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw Bc;var f=d.f[b++];return a?f:d.g[f]};
return e};function Kc(a,b,c){a.push(encodeURIComponent(b)+"="+encodeURIComponent(c))}
function Lc(a){var b=a.type;switch(x(b)&&b.toLowerCase()){case "checkbox":case "radio":return a.checked?a.value:null;case "select-one":return b=a.selectedIndex,0<=b?a.options[b].value:null;case "select-multiple":b=[];for(var c,d=0;c=a.options[d];d++)c.selected&&b.push(c.value);return b.length?b:null;default:return null!=a.value?a.value:null}}
;var Mc=!pb||9<=Number(Bb),Oc;if(Oc=pb)Oc=!(Object.prototype.hasOwnProperty.call(Ab,"9")?Ab["9"]:Ab["9"]=0<=Va(zb,"9"));var Pc=Oc,Qc=function(){if(!v.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{v.addEventListener("test",va,b),v.removeEventListener("test",va,b)}catch(c){}return a}();function Rc(a,b){this.type=a;this.f=this.target=b;this.l=!1;this.Qb=!0}
Rc.prototype.stopPropagation=function(){this.l=!0};
Rc.prototype.preventDefault=function(){this.Qb=!1};function Sc(a,b){Rc.call(this,a?a.type:"");this.relatedTarget=this.f=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.g=null;a&&this.init(a,b)}
D(Sc,Rc);var Tc={2:"touch",3:"pen",4:"mouse"};
Sc.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.f=b;var e=a.relatedTarget;if(e){if(rb){a:{try{nb(e.nodeName);var f=!0;break a}catch(g){}f=!1}f||(e=null)}}else"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=x(a.pointerType)?a.pointerType:Tc[a.pointerType]||"";this.state=a.state;this.g=a;a.defaultPrevented&&this.preventDefault()};
Sc.prototype.stopPropagation=function(){Sc.Y.stopPropagation.call(this);this.g.stopPropagation?this.g.stopPropagation():this.g.cancelBubble=!0};
Sc.prototype.preventDefault=function(){Sc.Y.preventDefault.call(this);var a=this.g;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Pc)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Uc="closure_listenable_"+(1E6*Math.random()|0),Vc=0;function Wc(a,b,c,d,e){this.listener=a;this.f=null;this.src=b;this.type=c;this.capture=!!d;this.xa=e;this.key=++Vc;this.fa=this.sa=!1}
function Xc(a){a.fa=!0;a.listener=null;a.f=null;a.src=null;a.xa=null}
;function Yc(a){this.src=a;this.listeners={};this.f=0}
Yc.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.f++);var g=Zc(a,b,d,e);-1<g?(b=a[g],c||(b.sa=!1)):(b=new Wc(b,this.src,f,!!d,e),b.sa=c,a.push(b));return b};
Yc.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Zc(e,b,c,d);return-1<b?(Xc(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.f--),!0):!1};
function $c(a,b){var c=b.type;c in a.listeners&&Ia(a.listeners[c],b)&&(Xc(b),0==a.listeners[c].length&&(delete a.listeners[c],a.f--))}
function Zc(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.fa&&f.listener==b&&f.capture==!!c&&f.xa==d)return e}return-1}
;var ad="closure_lm_"+(1E6*Math.random()|0),bd={},cd=0;function dd(a,b,c,d,e){if(d&&d.once)ed(a,b,c,d,e);else if(xa(b))for(var f=0;f<b.length;f++)dd(a,b[f],c,d,e);else c=fd(c),a&&a[Uc]?a.f.add(String(b),c,!1,Ba(d)?!!d.capture:!!d,e):gd(a,b,c,!1,d,e)}
function gd(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ba(e)?!!e.capture:!!e,h=hd(a);h||(a[ad]=h=new Yc(a));c=h.add(b,c,d,g,f);if(!c.f){d=id();c.f=d;d.src=a;d.listener=c;if(a.addEventListener)Qc||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(jd(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");cd++}}
function id(){var a=kd,b=Mc?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b}
function ed(a,b,c,d,e){if(xa(b))for(var f=0;f<b.length;f++)ed(a,b[f],c,d,e);else c=fd(c),a&&a[Uc]?a.f.add(String(b),c,!0,Ba(d)?!!d.capture:!!d,e):gd(a,b,c,!0,d,e)}
function ld(a,b,c,d,e){if(xa(b))for(var f=0;f<b.length;f++)ld(a,b[f],c,d,e);else(d=Ba(d)?!!d.capture:!!d,c=fd(c),a&&a[Uc])?a.f.remove(String(b),c,d,e):a&&(a=hd(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Zc(b,c,d,e)),(c=-1<a?b[a]:null)&&md(c))}
function md(a){if(!ua(a)&&a&&!a.fa){var b=a.src;if(b&&b[Uc])$c(b.f,a);else{var c=a.type,d=a.f;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(jd(c),d):b.addListener&&b.removeListener&&b.removeListener(d);cd--;(c=hd(b))?($c(c,a),0==c.f&&(c.src=null,b[ad]=null)):Xc(a)}}}
function jd(a){return a in bd?bd[a]:bd[a]="on"+a}
function nd(a,b,c,d){var e=!0;if(a=hd(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.fa&&(f=od(f,d),e=e&&!1!==f)}return e}
function od(a,b){var c=a.listener,d=a.xa||a.src;a.sa&&md(a);return c.call(d,b)}
function kd(a,b){if(a.fa)return!0;if(!Mc){var c=b||y("window.event"),d=new Sc(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(m){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.f;f;f=f.parentNode)c.push(f);f=a.type;for(var g=c.length-1;!d.l&&0<=g;g--){d.f=c[g];var h=nd(c[g],f,!0,d);e=e&&h}for(g=0;!d.l&&g<c.length;g++)d.f=c[g],h=nd(c[g],f,!1,d),e=e&&h}return e}return od(a,new Sc(b,this))}
function hd(a){a=a[ad];return a instanceof Yc?a:null}
var pd="__closure_events_fn_"+(1E9*Math.random()>>>0);function fd(a){if(za(a))return a;a[pd]||(a[pd]=function(b){return a.handleEvent(b)});
return a[pd]}
;function qd(){wc.call(this);this.f=new Yc(this);this.w=this;this.o=null}
D(qd,wc);qd.prototype[Uc]=!0;qd.prototype.addEventListener=function(a,b,c,d){dd(this,a,b,c,d)};
qd.prototype.removeEventListener=function(a,b,c,d){ld(this,a,b,c,d)};
qd.prototype.dispatchEvent=function(a){var b=this.o;if(b){var c=[];for(var d=1;b;b=b.o)c.push(b),++d}b=this.w;d=a.type||a;if(x(a))a=new Rc(a,b);else if(a instanceof Rc)a.target=a.target||b;else{var e=a;a=new Rc(d,b);fb(a,e)}e=!0;if(c)for(var f=c.length-1;!a.l&&0<=f;f--){var g=a.f=c[f];e=rd(g,d,!0,a)&&e}a.l||(g=a.f=b,e=rd(g,d,!0,a)&&e,a.l||(e=rd(g,d,!1,a)&&e));if(c)for(f=0;!a.l&&f<c.length;f++)g=a.f=c[f],e=rd(g,d,!1,a)&&e;return e};
qd.prototype.ba=function(){qd.Y.ba.call(this);if(this.f){var a=this.f,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Xc(d[e]);delete a.listeners[c];a.f--}}this.o=null};
function rd(a,b,c,d){b=a.f.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.fa&&g.capture==c){var h=g.listener,m=g.xa||g.src;g.sa&&$c(a.f,g);e=!1!==h.call(m,d)&&e}}return e&&0!=d.Qb}
;function sd(a){var b=[];td(new ud,a,b);return b.join("")}
function ud(){}
function td(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(xa(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),td(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),vd(d,c),c.push(":"),td(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":vd(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var wd={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},xd=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function vd(a,b){b.push('"',a.replace(xd,function(c){var d=wd[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),wd[c]=d);return d}),'"')}
;function J(a){wc.call(this);this.s=1;this.i=[];this.o=0;this.f=[];this.l={};this.u=!!a}
D(J,wc);k=J.prototype;k.subscribe=function(a,b,c){var d=this.l[a];d||(d=this.l[a]=[]);var e=this.s;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.s=e+3;d.push(e);return e};
k.gb=function(a){var b=this.f[a];if(b){var c=this.l[b];0!=this.o?(this.i.push(a),this.f[a+1]=va):(c&&Ia(c,a),delete this.f[a],delete this.f[a+1],delete this.f[a+2])}return!!b};
k.xd=function(a,b){var c=this.l[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.u)for(e=0;e<c.length;e++){var g=c[e];yd(this.f[g+1],this.f[g+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.f[g+1].apply(this.f[g+2],d)}finally{if(this.o--,0<this.i.length&&0==this.o)for(;c=this.i.pop();)this.gb(c)}}return 0!=e}return!1};
function yd(a,b,c){nc(function(){a.apply(b,c)})}
k.clear=function(a){if(a){var b=this.l[a];b&&(F(b,this.gb,this),delete this.l[a])}else this.f.length=0,this.l={}};
k.ba=function(){J.Y.ba.call(this);this.clear();this.i.length=0};function zd(a){this.f=a}
zd.prototype.set=function(a,b){w(b)?this.f.set(a,sd(b)):this.f.remove(a)};
zd.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
zd.prototype.remove=function(a){this.f.remove(a)};function Ad(a){this.f=a}
D(Ad,zd);function Bd(a){this.data=a}
function Cd(a){return!w(a)||a instanceof Bd?a:new Bd(a)}
Ad.prototype.set=function(a,b){Ad.Y.set.call(this,a,Cd(b))};
Ad.prototype.l=function(a){a=Ad.Y.get.call(this,a);if(!w(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Ad.prototype.get=function(a){if(a=this.l(a)){if(a=a.data,!w(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Dd(a){this.f=a}
D(Dd,Ad);Dd.prototype.set=function(a,b,c){if(b=Cd(b)){if(c){if(c<B()){Dd.prototype.remove.call(this,a);return}b.expiration=c}b.creation=B()}Dd.Y.set.call(this,a,b)};
Dd.prototype.l=function(a){var b=Dd.Y.l.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<B()||c&&c>B())Dd.prototype.remove.call(this,a);else return b}};function Ed(){}
;function Fd(){}
D(Fd,Ed);Fd.prototype.clear=function(){var a=Fc(this.Z(!0)),b=this;F(a,function(c){b.remove(c)})};function Gd(a){this.f=a}
D(Gd,Fd);k=Gd.prototype;k.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
k.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
k.get=function(a){a=this.f.getItem(a);if(!x(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.remove=function(a){this.f.removeItem(a)};
k.Z=function(a){var b=0,c=this.f,d=new Cc;d.next=function(){if(b>=c.length)throw Bc;var e=c.key(b++);if(a)return e;e=c.getItem(e);if(!x(e))throw"Storage mechanism: Invalid value was encountered";return e};
return d};
k.clear=function(){this.f.clear()};
k.key=function(a){return this.f.key(a)};function Hd(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
D(Hd,Gd);function Id(a,b){this.l=a;this.f=null;if(pb&&!(9<=Number(Bb))){Jd||(Jd=new Gc);this.f=Jd.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),Jd.set(a,this.f));try{this.f.load(this.l)}catch(c){this.f=null}}}
D(Id,Fd);var Kd={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Jd=null;function Ld(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Kd[b]})}
k=Id.prototype;k.isAvailable=function(){return!!this.f};
k.set=function(a,b){this.f.setAttribute(Ld(a),b);Md(this)};
k.get=function(a){a=this.f.getAttribute(Ld(a));if(!x(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.remove=function(a){this.f.removeAttribute(Ld(a));Md(this)};
k.Z=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new Cc;d.next=function(){if(b>=c.length)throw Bc;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if(!x(e))throw"Storage mechanism: Invalid value was encountered";return e};
return d};
k.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Md(this)};
function Md(a){try{a.f.save(a.l)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Nd(a,b){this.l=a;this.f=b+"::"}
D(Nd,Fd);Nd.prototype.set=function(a,b){this.l.set(this.f+a,b)};
Nd.prototype.get=function(a){return this.l.get(this.f+a)};
Nd.prototype.remove=function(a){this.l.remove(this.f+a)};
Nd.prototype.Z=function(a){var b=this.l.Z(!0),c=this,d=new Cc;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.l.get(e)};
return d};function Od(a,b){qd.call(this);this.i=a||1;this.l=b||v;this.s=A(this.Od,this);this.u=B()}
D(Od,qd);k=Od.prototype;k.enabled=!1;k.V=null;k.setInterval=function(a){this.i=a;this.V&&this.enabled?(this.stop(),this.start()):this.V&&this.stop()};
k.Od=function(){if(this.enabled){var a=B()-this.u;0<a&&a<.8*this.i?this.V=this.l.setTimeout(this.s,this.i-a):(this.V&&(this.l.clearTimeout(this.V),this.V=null),this.dispatchEvent("tick"),this.enabled&&(this.stop(),this.start()))}};
k.start=function(){this.enabled=!0;this.V||(this.V=this.l.setTimeout(this.s,this.i),this.u=B())};
k.stop=function(){this.enabled=!1;this.V&&(this.l.clearTimeout(this.V),this.V=null)};
k.ba=function(){Od.Y.ba.call(this);this.stop();delete this.l};var Pd=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Qd(a){return a?decodeURI(a):a}
function K(a,b){return b.match(Pd)[a]||null}
function Rd(a,b,c){if(xa(b))for(var d=0;d<b.length;d++)Rd(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Sd(a){var b=[],c;for(c in a)Rd(c,a[c],b);return b.join("&")}
function Td(a,b){var c=Sd(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
;var Ud=/^[6-9]$/,Vd=/<\/?(?:b|em)>/gi;function Wd(a){this.f=a}
var Xd=new Wd({});function Yd(a,b,c,d,e,f){var g;a instanceof I?g=a:g=Pb(a,null);this.u=g;this.f=b;this.l=c;this.o=d;this.g=e;this.m=f||Xd;this.i=!1;switch(this.o){case 0:case 32:case 38:case 400:case 407:case 35:case 33:case 41:case 34:case 44:case 45:case 40:case 46:case 56:case 30:case 94:case 92:case 93:case 411:case 410:case 71:this.i=!0}}
Yd.prototype.getHtml=function(){return Ob(this.u).toString()};
Yd.prototype.s=function(){return this.l};
Yd.prototype.N=function(){return this.o};var Zd=/^\s/,$d=/\s+/,ae=/\s+/g,be=/^\s+|\s+$/g,ce=/^\s+$/,de=/<[^>]*>/g,ee=/&nbsp;/g,fe=/&#x3000;/g,ge=[/&/g,/&amp;/g,/</g,/&lt;/g,/>/g,/&gt;/g,/"/g,/&quot;/g,/'/g,/&#39;/g,/{/g,/&#123;/g],he=document.getElementsByTagName("head")[0],ie=0,je=1;function ke(a){var b={};if(a)for(var c=0;c<a.length;++c)b[a[c]]=!0;return b}
function le(a,b){function c(){return b}
void 0===b&&(b=a);return{wa:c,tb:function(){return a},
Dc:c,re:function(){return a<b},
equals:function(d){return d&&a==d.tb()&&b==d.Dc()}}}
function L(a,b,c,d){if(null==b||""===b){if(!d)return;b=""}c.push(a+"="+encodeURIComponent(String(b)))}
function me(a,b){var c=[],d;for(d in a)L(d,a[d],c,b);return c.join("&")}
function ne(a){var b={},c=Math.max(a.indexOf("?"),a.indexOf("#"));a=a.substr(c+1);if(0<=c&&a){c=a.split("&");a=0;for(var d;a<c.length;++a)if(d=c[a])d=d.split("="),b[d[0]]=d[1]||""}return b}
function oe(a){return!!a&&!ce.test(a)}
function pe(a){for(var b=ge.length,c=0;c<b;c+=2)a=a.replace(ge[c],ge[c+1].source);return a}
function qe(a){for(var b=ge.length,c=0;c<b;c+=2)a=a.replace(ge[c+1],ge[c].source);a=a.replace(ee," ");return a.replace(fe,"\u3000")}
function re(a,b){return a&&(-1<a.indexOf(" ")||$d.test(a))?(a=a.replace(ae," "),a.replace(b?be:Zd,"")):a}
function se(a,b,c){c&&(a=a.toLowerCase(),b=b.toLowerCase());return b.length<=a.length&&a.substring(0,b.length)==b}
function te(){}
function ue(a){var b=ve;if(b.indexOf)return b.indexOf(a);for(var c=0,d=b.length;c<d;++c)if(b[c]===a)return c;return-1}
function we(){return 0}
function xe(a){var b={},c;for(c in a)b[c]=a[c];return b}
function ye(a,b){var c=a+"";b.length&&(c+="i"+b.join("i"),c+="k"+(-1!=Fa(b,173)?14:1));return c}
;function ze(a,b,c){this.f=a;this.F=b;this.A=c||"";this.s=(ie++).toString(36);this.w=this.f.toLowerCase();this.l=re(this.w);this.D={};this.u={};this.m=this.C=this.i=!1;this.B=1}
ze.prototype.getId=function(){return this.s};
function Ae(a){a=parseInt(a.s,36);return isNaN(a)?-1:a}
function Be(a,b,c,d){a.i||(a.D[b]=c,d&&(a.u[b]=c))}
;function Ce(a,b,c,d,e,f){this.l=a;this.f=b;this.g=c;this.m=d;this.i=e;this.s=f;this.o=!0;this.f?this.f.length&&33==this.f[0].N()&&(this.i=this.o=!1):this.f=[];this.g||(this.g=Xd)}
Ce.prototype.N=function(){return this.o};function De(){}
De.prototype.search=function(){};
De.prototype.redirect=function(){};
De.prototype.Tb=function(){return""};
De.prototype.Ab=function(){};function Ee(){this.l={};this.f={}}
Ee.prototype.set=function(a,b){this.l[a]=b};
Ee.prototype.has=function(a){return!!this.l[a]};
function M(a,b,c){b in a.f||(a.f[b]=[]);a.f[b].push(c)}
;function Fe(a,b,c,d,e,f){this.u=a;this.w=b;this.A=c;this.m=d;this.g=e;this.o=f;this.s={};this.i={};this.f=[];this.l=!1;a=this.w;d=a.l;for(var g in d)if(b=g,c=d[b])this.s[b]=c,this.f.push(c);a=a.f;for(g in a){b=g;d=c=a[b];e=this.i[b]||[];for(f=0;f<d.length;++f)if(c=d[f])e.push(c),this.f.push(c);this.i[b]=e}this.f.sort(Ge);for(g=0;a=this.f[g++];)a.T(this.A,this.m);this.u.Ab(this.m);this.m.lc();for(g=0;a=this.f[g++];)a.G(this);for(g=0;a=this.f[g++];)a.setup(this.o);for(g=0;a=this.f[g++];)a.da(this.o);
for(g=0;a=this.f[g++];)a.H(this.o);this.l=!0}
var ve=[127,551,149,134,494,123,121,126,553,118,115,128,160,173,119,116,152,153,129,120,374,124,158,155,131,130,147,570,141,143,138,144,139,140,135,136];function He(a){if(a.l){for(var b=0,c;c=a.f[b++];)c.X();a.l=!1}}
Fe.prototype.isActive=function(){return this.l};
Fe.prototype.get=function(a){return this.s[a]};
function N(a,b){return a.i[b]||[]}
function Ge(a,b){var c=ue(a.N()),d=ue(b.N());return 0>c?1:0>d?-1:c-d}
;function O(a){this.l=a}
k=O.prototype;k.T=function(){};
k.G=function(){};
k.setup=function(){};
k.da=function(){};
k.H=function(){};
k.N=function(){return this.l};
k.X=function(){};var Ie;function Je(){this.l=153}
ka(Je,O);function Ke(a,b){a.length&&b.push({N:function(){return 507},
position:2})}
;function Le(a){this.o=a}
Le.prototype.N=function(){return this.o};
Le.prototype.isSelectable=function(){return!0};function P(a){this.l=152;this.m=a}
D(P,O);P.prototype.Ba=te;var Me=hb(),Ne=Me&&0<=Va(kb(),10),Oe=mb();Oe&&kb();var Pe=gb(),Qe=Ta()&&!G("Edge"),Re=ib(),Se=jb(),Te=Ub()&&ib(),Ue=G("Android"),Ve=G("Macintosh"),We=Ub();var Xe=void 0!=document.documentElement.style.opacity,Ye={rtl:"right",ltr:"left"};function Ze(a,b){try{if(a.setSelectionRange)a.setSelectionRange(b,b);else if(a.createTextRange){var c=a.createTextRange();c.collapse(!0);c.moveStart("character",b);c.select()}}catch(d){}}
function $e(a){for(var b=0,c=0;a;){b+=a.offsetTop;c+=a.offsetLeft;try{a=a.offsetParent}catch(d){a=null}}return{Fa:b,aa:c}}
function af(a){try{return bf(a).activeElement==a}catch(b){}return!1}
function Q(a,b){var c=document.createElement(a);b&&(c.className=b);return c}
function R(a){return Q("div",a)}
function cf(a,b){a.dir!=b&&(a.dir=b,a.style.textAlign=Ye[b])}
function df(a){a&&(a.preventDefault&&a.preventDefault(),a.returnValue=!1);return!1}
function ef(a){if(a=a||window.event)a.stopPropagation&&a.stopPropagation(),a.cancelBubble=a.cancel=!0;return df(a)}
function ff(a){var b=Q("a");b.href="#ifl";b.className="sbsb_i sbqs_b";a.appendChild(b);return b}
function gf(a){var b=a||window;a=b.document;var c=b.innerWidth;b=b.innerHeight;if(!c){var d=a.documentElement;d&&(c=d.clientWidth,b=d.clientHeight);c||(c=a.body.clientWidth,b=a.body.clientHeight)}return{ec:c,wb:b}}
function bf(a){return a?a.ownerDocument||a.document:window.document}
function hf(a){return a?(a=bf(a),a.defaultView||a.parentWindow):window}
function jf(){return Xe?"opacity":"filter"}
function kf(a){return Xe?a+"":"alpha(opacity="+Math.floor(100*a)+")"}
;function lf(){this.o=507;mf(this)}
ka(lf,Le);lf.prototype.f=function(){return this.g};
function nf(a,b,c,d){mf(a,c,d);a.l.innerHTML=b}
function mf(a,b,c){a.g=R("sbfl_a");a.l=R("sbfl_b");a.l.onclick=function(){c&&c.openReportForm&&c.openReportForm(b)};
a.g.appendChild(a.l)}
;var of=[30,35,33,41],pf=[39,10,21];function qf(a,b){P.call(this,507);this.f=a;this.g=b}
ka(qf,P);qf.prototype.G=function(a){this.i=a.get(128)};
qf.prototype.T=function(a,b){b.addRule(".sbfl_a","font-size:12px;font-style:italic;color:#777;margin:-5px -18px -5px 0");b.addRule(".sbsb_c[dir=ltr] .sbfl_a","text-align:right");b.addRule(".sbsb_c[dir=rtl] .sbfl_a","text-align:left");b.addRule(".sbfl_a:hover","color:#333;cursor:pointer");b.addRule(".sbfl_b","background:rgba(255,255,255,.9)")};
qf.prototype.ta=function(){return new lf};
function rf(a){return a.map(function(b){return{label:b.f}})}
qf.prototype.Ca=function(a,b){var c=Ga(this.i.g,function(d){a:if(0<=of.indexOf(d.N()))d=!1;else{d=d.g||[];for(var e=ba(pf),f=e.next();!f.done;f=e.next())if(0<=d.indexOf(f.value)){d=!1;break a}d=!0}return d},this);
0<c.length?(nf(b,this.f,rf(c),this.g),b.f().style.display=""):b.f().style.display="none"};function sf(){this.l=157}
D(sf,O);function tf(){this.l=156}
D(tf,O);tf.prototype.g=function(a){var b=ne(Xa(window.location.href));b.v&&Be(a,"video_id",b.v,!0);return 1};
tf.prototype.f=function(){return 24};function uf(a,b){this.l=598;this.w=b;this.i="";this.f=a;this.o=!1}
D(uf,O);uf.prototype.G=function(a){this.C=a.get(553);this.s=a.get(128);this.B=a.get(118);this.A=a.get(150)};
uf.prototype.setup=function(a){this.g=a.bb;this.u=a.zc};
function vf(a,b){a.i=b;a.C.eb(a.i)}
;function wf(){this.l=156}
D(wf,O);wf.prototype.G=function(a){this.i=a.get(598)};
wf.prototype.g=function(a){var b=this.i,c;a:{if(b.f&&b.f.getPreviousQuery&&(c=b.f.getPreviousQuery()))break a;c=null}var d;d=(d=ne(Xa(window.location.href)))?(d=d.search_query||d.q)&&d==b.g:!1;c&&c!=b.g?(b.o=!0,b.g=c,vf(b,c)):d||""==b.i?d&&""==b.i&&vf(b,b.g):vf(b,"");if("mousedown"==a.A||"focus"==a.A)if(a=this.i,a.w&&!a.s.isVisible()&&(b=a.B.f)&&0!=b.length&&b==a.g)if(a.f&&a.f.getRefinementsTuple&&(c=a.f.getRefinementsTuple())&&(d=c[0],"ClearBySearchbox"==d?a.m=[]:"FromSearchResponse"==d&&a.o&&(a.m=
c[1],a.o=!1)),a.m){c=[];for(var e=d=0;e<a.m.length&&!(c.length>=a.u);++e){var f=a.m[e];f&&0<f.length&&c.push(new Yd(a.A.bold(b,f),f,d++,0,[71],null))}0<c.length&&xf(a.s,c,!1)}return 1};
wf.prototype.f=function(){return 46};function yf(){this.l=149;this.g=he;this.f={}}
D(yf,O);k=yf.prototype;k.G=function(a){this.C=a.get(127);this.u=a.g.getId()};
k.setup=function(){"google"in window||(window.google={});"sbox"in window.google||(window.google.sbox={})};
k.H=function(a){this.m=a;0==a.connectionType&&(a=this.C.i,this.s=a.protocol,this.o=a.host,this.B=a.cb,this.w=a.Kd,this.A="https:"==document.location.protocol,zf(this,A(this.Dd,this)),(new Image).src=this.s+this.o+"/generate_204")};
k.X=function(){zf(this,null);Af(this)};
k.Cd=te;function Af(a){for(var b in a.f)a.g.removeChild(a.f[b]);a.f={};a.i=null}
k.Dd=function(a){this.i&&this.i(a)};
function zf(a,b){b||(b=te);var c=window.google;a.m.dc?c.ac.h=b:c.sbox["p"+a.u]=b}
;function Bf(){this.l=115;this.m={}}
D(Bf,O);var Cf={horizontalAlignment:"left",nd:!0,ea:null,marginWidth:0};k=Bf.prototype;k.G=function(a){this.i=a.get(116);if(a=N(a,154))for(var b=0,c;c=a[b++];)this.m[Df]=c};
k.H=function(){this.f=!1};
k.X=function(){this.hide()};
k.isVisible=function(){return this.f};
k.getHeight=function(){return this.f?this.i.getHeight():0};
k.show=function(){this.f||(this.i.show(Ef(this)),this.f=!0)};
k.hide=function(){this.f&&(this.i.hide(),this.f=!1)};
function Ef(a){var b=xe(Cf);if(a.g){a=a.g.g;b.ea=a.A;b.marginWidth=a.F;var c=a.w.Md;c||(c="rtl"==a.A?"right":"left");b.horizontalAlignment=c}return b}
;function Ff(){this.l=118}
D(Ff,O);k=Ff.prototype;k.G=function(a){this.g=a.get(119);this.A=a.get(130);this.M=a.get(145);this.s=a.get(117);this.J=a.get(123);this.B=a.get(374);this.I=a.get(121);this.O=a.get(553);this.i=a.get(128);this.K=a.get(139);this.R=a.get(173);this.U=N(a,160)};
k.setup=function(a){this.o=a;this.f=this.m=this.g.f.value||""};
k.H=function(a){this.o=a;this.w=this.D=!1;Gf(this)};
function Hf(a){var b={};S(a.s,11,b);!b.cancel&&a.o.Wc&&If(a.s,function(){a.i.dismiss()})}
function Jf(a,b){if(0==a.o.Ea||2==a.o.Ea||3==a.o.Ea&&!a.m&&!b)return!1;a:{if(T(a.i)){if(null!=a.i.i)var c=Kf(a.i);else c=a.i,c=T(c)?c.g[0]:null;if(c.i)break a}c=null}var d;if(d=c){if(d=c=c.f)d=a.m,d=!(d||c?d&&c&&d.toLowerCase()==c.toLowerCase():1);d?(a.m=a.f,se(c,a.f,!0)&&(c=a.f+c.substr(a.f.length)),Lf(a,c,le(c.length),"",!0),Mf(a,c,!0),d=!0):d=!1}return d?(a.B.add(8),!0):!1}
function Lf(a,b,c,d,e){a.o.qc&&!a.i.isVisible()&&"mousedown"==d&&Nf(a.i,c,d);var f=!1,g=!1;if(b!=a.f||"onremovechip"==d)se(d,"key")?a.B.add(1):"paste"==d&&a.B.add(2),f=!0,Of(a,b),S(a.s,1,{qa:d,ea:a.u}),g=B(),a.C||(a.C=g),a.F=g,oe(b)&&(e=!0),g=!0;b=Pf(a.O,b,c,d);switch(b.B){case 3:b.m=!0;case 2:e=!0;break;case 4:e=!1}e?(f&&(f=a.i,f.m&&!f.s&&(f.s=window.setTimeout(A(f.clear,f),f.w.Xc))),a.D&&Be(b,"gs_is",1),Qf(a.J,b)):g&&(a.i.clear(),f=a.J,f.m=f.i);S(a.s,2,{qa:d})}
function Rf(a,b){Of(a,b);Sf(a.g);S(a.s,4,{ea:a.u,input:b})}
function Tf(a){a.f!=a.m&&Of(a,a.m);S(a.s,5,{input:a.m,suggestions:a.i.g,ea:a.u});Sf(a.g)}
k.getHeight=function(){return this.g.getHeight()};
function Uf(a){if(a.R){if(a.o.Ua)return!0;for(var b=0,c;c=a.U[b++];)if(c.isEnabled())return!0}return!1}
k.search=function(a){this.I.search(this.f,a)};
k.clear=function(){this.f&&(Of(this,""),this.g.clear(),S(this.s,1),S(this.s,16),this.i.clear())};
function Vf(a,b){var c=a.g.s.wa();a.u==b?T(a.i)&&c==a.f.length&&(null!=a.i.i?a.o.va&&a.I.search(Kf(a.i).f,6):a.o.zb&&Jf(a,!0)):a.A&&0==c&&a.A.f()}
function Mf(a,b,c){a.f=b||"";Gf(a);Sf(a.g);c||S(a.s,4,{ea:a.u,input:a.f})}
function Gf(a){var b=Wf(a.M,a.f);if(b!=a.u){var c=a.g;c.A&&(c.A.dir=b);c.f.dir=b;c.u&&(c.u.dir=b);if(c.D){var d=c.D;d.s!=b&&(d.f.dir=d.s=b)}if(c.ga){c=c.f;d=0;var e=c.style;"INPUT"!=c.nodeName&&(d+=1);e.left=e.right="";e["rtl"==b?"right":"left"]=d+"px"}a.u=b}}
function Of(a,b){a.f=a.m=b||"";Gf(a)}
;function Xf(){this.l=128}
D(Xf,O);k=Xf.prototype;k.G=function(a){this.o=a.get(129);this.J=a.get(145);this.D=a.get(115);this.K=a.get(123);this.u=a.get(118);this.L=a.get(147);this.I=N(a,153);this.O=a.get(553);this.C=a.get(184);this.R=a.get(157)};
k.setup=function(){this.I.sort(we)};
k.H=function(a){this.w=a;this.i=this.f=null;this.m=this.B=!1;this.M=!0;this.A="";this.F=0};
k.X=function(){this.s&&(window.clearTimeout(this.s),this.s=null);this.g=null;this.hide()};
function xf(a,b,c){var d=a.C&&a.C.g(b);a.clear();a.g=b;var e=T(a)?b[0].f:a.u.m;a:{var f=e;if(a.J.f){for(var g=!1,h=!1,m=0,l;m<f.length;++m)if(l=f.charAt(m),!Yf.test(l)&&(Zf.test(l)?h=!0:g=!0,h&&g)){f=!0;break a}f=!1}else f=!0}f&&(e=a.u.m);a.A=Wf(a.J,e);if(a.w.wd&&T(a)&&c&&!We){a.B=!0;c=a.o;if(c.m){c.B=a.A;$f(c);e=!1;for(f=0;g=b[f++];)ag(c,g)&&(e=!0);c=e}else c=!1;e=b[0].m.f.a||"";e=qe(e);b=a.L;f=0;e&&(b.f||bg(b),cg(b),e in b.i?f=b.i[e]:(f=b.f,g=pe(e),f.innerHTML!=g&&(f.innerHTML=g),b.i[e]=f=b.f.offsetWidth,
b=b.f,""!=b.innerHTML&&(b.innerHTML="")));a.F=f}else{a.B=!1;b=a.o;if(a.B||!a.w.Gd&&!T(a))c=[];else{c=[];e=[];for(f=0;a.I[f++]&&!Ke(a.g,e););(f=e?e.length:0)&&(f-=dg(e,c,0));for(g=0;g<a.g.length;++g)c.push(a.g[g]);f&&(f-=dg(e,c,1));a.w.Tc&&c.push(1);f&&(f-=dg(e,c,2));f&&dg(e,c,3);a.w.vb&&c.push(2);a.R&&1<c.length&&5==c[0].N()&&c.splice(1,0,3)}if(b.m){b.B=a.A;$f(b);e=!1;for(f=0;g=c[f++];)if(1==g)g=b,g.s?g.s.style.display="":(h=Q("li"),m=h.style,m.position="relative",m.textAlign="center",m.whiteSpace=
"nowrap",h.dir=g.C,g.i=R(),g.i.className="sbsb_g",g.f.vb&&(g.i.style.paddingBottom="1px"),eg(g,g.f.searchText,g.i,13),g.f.Sc?eg(g,g.f.nb,g.i,8):g.f.Uc&&eg(g,g.f.Fd,g.i,14),h.appendChild(g.i),h.onmousedown=A(g.ab,g),h.className=g.f.Da,g.s=h),g.g.appendChild(g.s);else if(2==g)if(g=b,g.o)g.o.style.display="";else{h=R("sbsb_j "+g.f.Da);m=Q("a");m.id="sbsb_f";Sb(m,"http://www.google.com/support/websearch/bin/answer.py?hl="+g.f.Xa+"&answer=106230");var n=g.f.learnMoreText;if(!(n instanceof I)){if(n instanceof
I)l=n;else{var p="object"==typeof n;l=null;p&&n.yb&&(l=n.Pa());n=p&&n.Va?n.Sa():String(n);Sa.test(n)&&(-1!=n.indexOf("&")&&(n=n.replace(Ma,"&amp;")),-1!=n.indexOf("<")&&(n=n.replace(Na,"&lt;")),-1!=n.indexOf(">")&&(n=n.replace(Oa,"&gt;")),-1!=n.indexOf('"')&&(n=n.replace(Pa,"&quot;")),-1!=n.indexOf("'")&&(n=n.replace(Qa,"&#39;")),-1!=n.indexOf("\x00")&&(n=n.replace(Ra,"&#0;")));l=Pb(n,l)}n=Ob(l).toString().replace(/(\r\n|\r|\n)/g,"<br>");n=Pb(n,l.Pa())}l=m;if(Rb())for(;l.lastChild;)l.removeChild(l.lastChild);
l.innerHTML=Ob(n);h.appendChild(m);h.onmousedown=A(g.ab,g);g.o=h;g.m.appendChild(g.o)}else 3==g?(g=b,h=g.L.pop(),h||(h=Q("li"),h.l=!0,m=Q("div","sbsb_e"),h.appendChild(m)),g.g.appendChild(h)):ag(b,g)&&(e=!0);c=e}else c=!1;a.F=0}d&&(a.i=a.C.l(),fg(a,a.C.f()));c?a.show():a.clear()}
function fg(a,b){if(a.f!=b){var c=a.f;a.f=b;gg(a,c)}}
k.Rb=function(){if(T(this))if(this.m){var a=this.f;this.f==this.g.length-1?this.i=this.f=null:null==this.f?this.f=0:++this.f;this.i=this.f;hg(this,a,A(this.Rb,this))}else this.show()};
k.Sb=function(){if(T(this))if(this.m){var a=this.f;this.g&&0!=this.f?null==this.f?this.f=this.g.length-1:--this.f:this.i=this.f=null;this.i=this.f;hg(this,a,A(this.Sb,this))}else this.show()};
k.isVisible=function(){return this.m};
k.isEnabled=function(){return this.M};
function Kf(a){return null!=a.i?a.g[a.i]:null}
function T(a){return!(!a.g||!a.g.length)}
k.show=function(){if(!this.m){a:{var a=this.D,b=Df;if(b in a.m){if(a.g){if(b==Df)break a;a.hide();a.g.g.m=!1}a.g=a.m[b];b=a.i;a=a.g;a!=b.u&&(b.u=a,a=a.f.m,b.C?a!=b.C&&b.o.replaceChild(a,b.C):b.o.appendChild(a),b.C=a)}}this.D.show();this.m=!0}};
k.hide=function(){this.m&&(this.s&&(window.clearTimeout(this.s),this.s=null),this.D.hide(),this.m=!1)};
k.clear=function(){this.hide();this.g=null;this.B=!1;null!=this.f&&ig(this.o,this.f);this.i=this.f=null;this.o.clear()};
k.dismiss=function(){var a=this.K;a.m=a.i;this.hide()};
function jg(a){null!=a.f&&ig(a.o,a.f);a.i=a.f=null}
function Nf(a,b,c){if(T(a))a.show();else{var d=a.u.m;d&&(b=Pf(a.O,d,b||a.u.g.s,c),Qf(a.K,b))}}
function dg(a,b,c){for(var d=0,e=0,f;e<a.length;++e)(f=a[e])&&f.position==c&&(3==c?f.kd&&f.kd(b)&&++d:(b.push(f),++d));return d}
function hg(a,b,c){null==a.f||a.o.isSelectable(a.f)?(gg(a,b),null==a.f?Tf(a.u):Mf(a.u,a.g[a.f].f)):(ig(a.o,b),c())}
function gg(a,b){null!=b&&ig(a.o,b);null!=a.f&&a.o.highlight(a.f)}
var Df=je++;function kg(){this.l=154}
D(kg,O);kg.prototype.G=function(a){this.g=a.get(128);this.f=a.get(129)};function lg(){this.l=145;this.f=Zf.test("x")}
D(lg,O);var Yf=RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$"),Zf=RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*(?:\\d[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$|[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufdfe-\ufe6f\ufefd-\uffff])");lg.prototype.T=function(a){this.g=a.Qa()};
function Wf(a,b){var c=a.g;a.f&&(Zf.test(b)?c="ltr":Yf.test(b)||(c="rtl"));return c}
;function mg(){this.l=117;this.g=[];this.i={fc:1}}
D(mg,O);var ng=window.postMessage&&!(Me||Re||Pe);mg.prototype.X=function(){this.f=null};
function U(a,b,c,d,e,f){var g=og(a,b);g||(g={},a.g.push({element:b,Oc:g}));var h=g[c];h||(h=g[c]=[],a=pg(a,c,b.fc?window:hf(b),h),x(c)?b.addEventListener?b.addEventListener(c,a,!1):b["on"+c]=a:b[c]=a);h.push({md:!!f,Ya:!1,priority:e||0,process:d});h.sort(qg);d.yc=c}
function rg(a,b,c){if(a=og(a,b))if(a=a[c.yc]){b=0;for(var d;d=a[b++];)if(d.process==c){d.Ya=!0;break}}}
function sg(a,b,c){U(a,a.i,b,c,void 0,void 0)}
function S(a,b,c){c=c||{};(a=a.i[b])&&a(c,c.qa)}
function tg(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent("on"+b,c)}
function If(a,b){if(ng){if(!a.f){a.f=[];var c=A(a.m,a);tg(window,"message",c)}a.f.push(b);c=window.location.href;window.postMessage("sbox.df",/HTTPS?:\/\//i.test(c)?c:"*")}else window.setTimeout(b,0)}
mg.prototype.m=function(a){this.f&&a&&a.source==window&&"sbox.df"==a.data&&this.f.length&&(this.f.shift()(),this.f&&this.f.length&&window.postMessage("sbox.df",window.location.href))};
function pg(a,b,c,d){return A(function(e,f){if(d.length){var g;if(!(g=e)){g={};var h=c.event;h&&(h.keyCode&&(g.keyCode=h.keyCode),g.ld=!0)}g.qa=f||b;h=g;for(var m,l,n=0,p;p=d[n++];)p.Ya?l=!0:m||(p.md?ug(this,p,h):m=p.process(h));if(l)for(n=0;p=d[n];)p.Ya?d.splice(n,1):++n;if(g.za)return delete g.za,g.ld&&(g=c.event||g),ef(g),g.returnValue=!1}},a)}
function og(a,b){for(var c=0,d;c<a.g.length;++c)if(d=a.g[c],d.element==b)return d.Oc;return null}
function ug(a,b,c){If(a,function(){b.process(c)})}
function qg(a,b){return b.priority-a.priority}
;function vg(){this.l=494;this.f={};this.m=this.s=0;this.g=-1;this.i=0;this.o={}}
D(vg,O);vg.prototype.H=function(){this.reset()};
vg.prototype.reset=function(){this.f={};this.m=this.s=0;this.g=-1;this.i=0;this.o={}};function wg(){this.l=374}
D(wg,O);wg.prototype.H=function(){this.reset()};
wg.prototype.add=function(a){this.f||(this.f={});this.f[a]=!0};
wg.prototype.reset=function(){this.f={}};function xg(){this.l=120;this.B=-1}
D(xg,O);var yg=/\.+$/,zg=/\./g,Ag=/./g,Bg=ke([23]);xg.prototype.G=function(a){this.D=a.get(191);this.f=a.get(123);this.m=a.get(118);this.w=a.get(374);this.g=a.get(494);this.A=a.get(126);this.o=a.get(128);this.C=N(a,311)};
xg.prototype.setup=function(a){this.u=a.rd};
xg.prototype.H=function(a){this.i=a;this.reset()};
function Cg(a,b,c,d){var e=a.m.m;c&&(e=e.replace(Ag,"#"));c=[];c[27]=64;c[0]=Dg(a.i.clientName);c[28]=Dg(a.i.requestIdentifier);c[1]=void 0==b?"":b+"";b=a.w;var f=[];for(g in b.f)f.push(parseInt(g,10));c[26]=f.join("j");var g="";null!=a.o.i?g=a.o.i+"":10<=a.A.g.u&&(g="o");c[2]=g;g="";if(b=a.o.g){for(var h=f=0,m;m=b[h++];){m=ye(m.N(),m.g||[]);if(m!=l){1<f&&(g+="l"+f);g+=(l?"j":"")+m;f=0;var l=m}++f}1<f&&(g+="l"+f)}c[3]=g;l="";g=a.o.g;b=a.g.o;if(g)for(f=0;h=g[f++];){var n=ye(h.N(),h.g||[]);n in b&&
delete b[n]}if(b)for(n in b)l+=(l?"j":"")+n;c[35]=l;n=a.g.g;c[33]=-1<n?String(n):"";c[4]=Math.max(a.m.C-a.s,0);c[5]=Math.max(a.m.F-a.s,0);c[6]=a.B;c[7]=B()-a.s;c[18]=Math.max(a.m.L-a.s,0);c[8]=a.f.O;l=a.f;l=(n=l.g)?l.f.i:0;c[25]=n?"1"+(a.i.tc?"a":"")+(a.i.kb?"c":""):"";c[10]=l;n=a.f;c[11]=n.g?n.f.m:0;c[12]=a.f.L;g=a.f;n=g.J;l=g.Ha;g=g.K;c[9]=n;c[22]=l;c[17]=g;c[13]=a.f.M;c[14]=a.f.C;c[15]=a.f.F;n=a.f;l=[];for(b=f=0;b<=Eg;++b)g=n.D[b],0==g?f++:(f=1==f?"0j":1<f?b+"-":"",l.push(f+g),f=0);c[16]=l.join("j");
c[36]=a.f.I;n=0;for(var p in a.g.f)n++;c[30]=n;c[31]=a.g.s;c[32]=a.g.m;c[19]=Dg(a.i.fb);p=a.g;l=a.A.f;n=!1;l&&(n=l.g.f.e||"");l=0;n?(l|=1,1<p.i&&(l|=2)):0<p.i&&(l|=2);p=l;c[20]=0==p?"":p+"";for(p=0;n=a.C[p++];)l=n.l,Bg[l]&&(c[l]=void 0==c[l]?Dg(n.f()):"");c=c.join(".").replace(yg,"");if(a.D&&a.u){p=e+c;b:{n=a.u;l=[];if(n)for(f=b=g=0;f<n.length;++f){h=n.charCodeAt(f);if(32>h||127<h||!Fg[h-32]){n=[];break b}g<<=6;g|=Fg[h-32]-1;b+=6;8<=b&&(l.push(g>>b-8&255),b-=8)}n=l}g=n;n={};n.P=Array(4);n.buffer=
Array(4);n.Qd=Array(4);n.padding=Array(64);n.padding[0]=128;for(l=1;64>l;++l)n.padding[l]=0;Gg(n);l=Array(64);64<g.length&&(Gg(n),Hg(n,g),g=Ig(n));for(b=0;b<g.length;++b)l[b]=g[b]^92;for(b=g.length;64>b;++b)l[b]=92;Gg(n);for(b=0;64>b;++b)n.buffer[b]=l[b]^106;Jg(n,n.buffer);n.total=64;Hg(n,Kg(p));p=Ig(n);Gg(n);Jg(n,l);n.total=64;Hg(n,p);p=Ig(n);p=p.slice(0,8);x(p)&&(p=Kg(p));n="";if(p){l=p.length;for(f=b=g=0;l--;)for(b<<=8,b|=p[f++],g+=8;6<=g;)n+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b>>
g-6&63),g-=6;g&&(n+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b<<8>>g+8-6&63))}p=n}else p="";e={oq:e,gs_l:c+"."+p};d&&(e.ei=d);a.i.od&&(e.q=a.m.f);return e}
xg.prototype.reset=function(){this.s=B();++this.B;var a=this.m;a.C=0;a.F=0;a.L=0;this.w.reset();a=this.f;if(a.g){var b=a.f;b.i=0;b.m=0}a.O=0;a.u=0;a.L=0;a.J=0;a.Ha=0;a.K=0;a.M=0;a.C=0;a.F=0;a.I=0;a.D=[];for(b=0;b<=Eg;++b)a.D[b]=0;for(a=0;b=this.C[a++];)b.reset();this.g.reset()};
function Dg(a){return a?a.replace(zg,"-"):""}
;function Lg(){this.l=121}
D(Lg,O);k=Lg.prototype;k.T=function(a){this.m=a.qb()};
k.G=function(a){this.g=a.get(347);this.u=a.get(130);this.C=a.get(117);this.A=a.get(123);this.o=a.get(118);this.D=a.get(120);this.F=a.get(128);this.B=a.get(139);this.w=a.u;this.s=N(a,294)};
k.H=function(a){this.i=a};
k.search=function(a,b){if(this.s){for(var c=!1,d=0,e;e=this.s[d++];)2==e.f(a,b)&&(c=!0);if(c)return}if(oe(a)||this.i.ca||this.u&&this.u.ca()){if(Ud.test(b)){if(this.m&&!this.f){c=this.m;b:{if(d=c.getElementsByTagName("input")){e=0;for(var f;f=d[e++];)if("btnI"==f.name&&"submit"!=f.type.toLowerCase()){d=f;break b}}d=null}d?c=null:(d=Q("input"),d.type="hidden",d.name="btnI",d.value="1",c.appendChild(d),c=d);this.f=c}}else this.f&&(this.m.removeChild(this.f),this.f=null);this.g&&this.i.Ma&&Mg(this.g,
b);this.w.search(a,b);Ng(this);S(this.C,12,{query:a})}};
k.redirect=function(a){this.g&&this.i.Ma&&Mg(this.g,void 0);this.w.redirect(a);Ng(this)};
function Ng(a){var b=a.A;b.m=b.i;a.A.s=null;a.D.reset();a.F.clear();a.o.m!=a.o.f&&(b=a.o,b.m=b.f);a.B&&a.B.clear()}
;function Og(){this.l=553}
D(Og,O);Og.prototype.G=function(a){this.g=N(a,156);a.get(126)};
Og.prototype.setup=function(){this.g.sort(Pg)};
Og.prototype.H=function(a){this.f=a;this.i=a.bb};
Og.prototype.eb=function(a){this.i=a};
function Pf(a,b,c,d,e){b=new ze(b,c||le(b.length),d||"");c=1;if(a.g){d=0;for(var f;f=a.g[d++];)f=f.g(b),f>c&&(c=f)}b.B=c;null!=a.f.La&&Be(b,"ds",a.f.La,!0);null!=a.f.Xb&&Be(b,"swl",a.f.Xb,!0);Be(b,"pq",a.i,!0);e&&!b.i&&(b.C=!0);b.i||(b.o=B(),"cp"in b.u||(a=b.F.wa(),Be(b,"cp",a,!0)),Be(b,"gs_id",b.s),b.g=me(b.u)+":"+b.w,b.i=!0);return b}
function Pg(a,b){return a.f()-b.f()}
;function Qg(){this.l=123;this.w=!1;this.i=-1}
D(Qg,O);var Rg=[0,1,2,3,4,5,5,6,6,6,7,7,7,7,7,8,8,8,8,8],Eg=Rg[Rg.length-1]+1,Sg=100*Rg.length-1;k=Qg.prototype;k.G=function(a){this.f=a.get(133);this.ga=a.get(130);this.ka=a.get(118);this.ic=a.get(120);this.ja=a.get(494);this.hc=a.get(124);this.R=a.get(125);this.U=a.get(230);this.kc=a.get(127)};
k.H=function(a){this.ia=this.kc.f;this.ha=a;this.w=!0;this.o={};this.B=0;this.Ia=a.Bc;this.gc=a.xb;this.m=-1;this.g=this.ha.uc&&!!this.f};
k.X=function(){this.w=!1;Tg(this);this.o=this.s=null;this.m=this.i};
function Qf(a,b){if(!(!a.w||a.gc||a.ga&&a.ga.l())){var c=!0,d=Ae(b);d>a.i&&(a.i=d);++a.O;a.ja.f[b.getId()]=!0;oe(a.ka.f)||oe(b.f)||(d=a.ja,d.g=Math.max(d.g,0));d=B();for(var e in a.o)2500<d-a.o[e].o&&Ug(a,e);a.g&&(e=a.f.get(b))&&((c=a.Ia||b.C)&&a.ha.Zc&&(b.m=!0),a.R.process(e),e.m&&++a.L,a.s=null);c&&(a.s=b,a.A||a.Jb())}}
function Vg(a,b){A(function(c){this.Wb(c,b)},a)}
k.Jb=function(){Tg(this);var a=this.s;this.s=null;if(a){var b=[],c=a.D;if(c)for(var d in c)L(d,c[d],b);var e=b.join("&");Vg(this,a);b=A(this.Wb,this);c=this.ia;d=a.getId();var f=a.f;c.m.wc||Af(c);e=c.s+c.o+c.B+"?"+(c.w?c.w+"&":"")+(e?e+"&":"");var g=[];L("q",f,g,!0);c.m.dc||L("callback","google.sbox.p"+c.u,g);if(c.A){f="";for(var h=4+Math.floor(32*Math.random()),m=0,l;m<h;++m)l=.3>Math.random()?48+Math.floor(10*Math.random()):(.5<Math.random()?65:97)+Math.floor(26*Math.random()),f+=String.fromCharCode(l);
L("gs_gbg",f,g)}f=Q("script");f.src=e+g.join("&");f.charset="utf-8";c.f[d]=f;c.i=b;c.g.appendChild(f);a.m||(++this.J,this.o[a.getId()]=a,++this.u);a=100;b=(this.u-2)/2;for(c=1;c++<=b;)a*=2;a<this.B&&(a=this.B);this.A=window.setTimeout(A(this.Jb,this),a)}};
function Tg(a){null!=a.A&&(window.clearTimeout(a.A),a.A=null)}
function Ug(a,b){var c=a.ia,d=c.f[b];d&&(c.g.removeChild(d),delete c.f[b]);delete a.o[b];a.u&&--a.u}
k.Wb=function(a,b){if(this.w){if(!b&&(b=this.o[(a[2]||{}).j],!b))return;if(!b.m){var c=this.hc;var d=b,e=a[0],f=a[1],g={},h=a[2];if(h)for(var m in h){var l=h[m];m in c.f&&(l=c.f[m].parse(l));g[m]=l}var n=l=!1;h=!1;m=0;for(var p;p=f[m++];)if(33==(p[1]||0)?n=!0:l=!0,n&&l){h=!0;break}l=0;n=[];for(m=0;p=f[m++];){var t=p[1]||0;if(!h||33!=t){var q=p[0];c.i&&(q=c.g.bold(e.toLowerCase(),qe(q).replace(de,"")));n.push(new Yd(q,qe(q).replace(de,""),l++,t,p[2]||[],Wg(p)))}}c=new Ce(d,n,new Wd(g),!1,!0,!1);this.U&&
(c=this.U.f(c,this.ka.f));if(this.g)for(d=this.f,e=c,(e.f&&e.f[0]||""!=e.l.f)&&e&&e.i&&(d.g[e.l.g]=e),f=0;f<d.f.length;++f)d.f[f].update(e);Ae(b)<=this.m?!b||b.f||c.m||(d=b,this.I=B()-d.o):(++this.K,this.R.process(c)||++this.M,d=b,this.B=c.g.f.d||0,d&&(Ug(this,d.getId()),e=d.o,e=B()-e,d.f?(this.F+=e,this.C=Math.max(e,this.C),++this.D[e>Sg?Eg:Rg[Math.floor(e/100)]]):this.I=e));c&&(c=c.g.f.q||"")&&(this.ic.u=c)}}};function Xg(){this.l=124;this.f={}}
D(Xg,O);Xg.prototype.G=function(a){this.g=a.get(150);if(a=N(a,158))for(var b=0,c;c=a[b++];)this.f[c.oe()]=c};
Xg.prototype.H=function(a){this.i=a.Ta};
function Wg(a){return(a=a[3])?new Wd(a):Xd}
;function Yg(){this.l=125}
D(Yg,O);Yg.prototype.G=function(a){this.m=a.get(117);this.s=a.get(118);this.o=a.get(494);this.f=N(a,122);this.g=a.get(126);this.i=a.get(128);this.f.sort(Zg)};
Yg.prototype.process=function(a){var b=a,c=this.s.f.toLowerCase(),d=this.g.f;c=re(c);var e=b.l;b=e?e.l:re(b.l.f.toLowerCase());var f=(d=d?d.l:null)?d.l:"";e=1==(0==c.indexOf(b)?0==c.indexOf(f)?d&&d.getId()==e.getId()?0:b.length>=f.length?1:-1:1:-1);c=-1!=e;if(e){if(this.f)for(e=0;b=this.f[e++];)a=b.edit(a);d=this.g.f=a;a=d.l.f;e=d.f;this.i.isEnabled()&&xf(this.i,e,0==d.N());b=this.o;var g=d.l;f=g.getId();if(f in b.f){var h=d.f.length;0<h&&(oe(g.f)||(b.g=h),g=g.o,g=B()-g,b.m+=g,++b.s);d.g.f.e&&++b.i;
delete b.f[f]}d=d.f;for(f=0;g=d[f++];)b.o[ye(g.N(),g.g||[])]=!0;S(this.m,3,{input:a,suggestions:e})}return c};
function Zg(a,b){return a.f()-b.f()}
;function $g(){this.l=126}
D($g,O);$g.prototype.G=function(a){this.g=a.get(123)};
$g.prototype.H=function(){this.f=null};function ah(){this.l=127;this.g={}}
D(ah,O);ah.prototype.G=function(a){a=N(a,149);for(var b=0,c;c=a[b++];)this.g[0]=c};
ah.prototype.H=function(a){var b="https:"==document.location.protocol,c=[];L("client",a.clientName,c);L("hl",a.Xa,c);L("gl",a.Yb,c);L("sugexp",a.fb,c);L("gs_rn",64,c);L("gs_ri",a.requestIdentifier,c);a.authuser&&L("authuser",a.authuser,c);this.i={protocol:"http"+(b?"s":"")+"://",host:a.Ob||"clients1."+a.Ka,cb:a.cb||"/complete/search",Kd:c.length?c.join("&"):""};this.f&&0==a.connectionType||(this.f=this.g[a.connectionType])};function bh(){this.l=191}
D(bh,O);
var Fg=[0,0,0,0,0,0,0,0,0,0,0,0,0,63,0,0,53,54,55,56,57,58,59,60,61,62,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,0,0,0,0,64,0,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,0,0,0,0,0],ch=[7,12,17,22,7,12,17,22,7,12,17,22,7,12,17,22,5,9,14,20,5,9,14,20,5,9,14,20,5,9,14,20,4,11,16,23,4,11,16,23,4,11,16,23,4,11,16,23,6,10,15,21,6,10,15,21,6,10,15,21,6,10,15,21],dh=[3614090360,3905402710,606105819,3250441966,4118548399,1200080426,2821735955,
4249261313,1770035416,2336552879,4294925233,2304563134,1804603682,4254626195,2792965006,1236535329,4129170786,3225465664,643717713,3921069994,3593408605,38016083,3634488961,3889429448,568446438,3275163606,4107603335,1163531501,2850285829,4243563512,1735328473,2368359562,4294588738,2272392833,1839030562,4259657740,2763975236,1272893353,4139469664,3200236656,681279174,3936430074,3572445317,76029189,3654602809,3873151461,530742520,3299628645,4096336452,1126891415,2878612391,4237533241,1700485571,2399980690,
4293915773,2240044497,1873313359,4264355552,2734768916,1309151649,4149444226,3174756917,718787259,3951481745];function Kg(a){for(var b=[],c=0,d=0;d<a.length;++d){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b}
function Gg(a){a.P[0]=1732584193;a.P[1]=4023233417;a.P[2]=2562383102;a.P[3]=271733878;a.ra=a.total=0}
function Jg(a,b){for(var c=a.Qd,d=0;64>d;d+=4)c[d/4]=b[d]|b[d+1]<<8|b[d+2]<<16|b[d+3]<<24;var e=a.P[0];d=a.P[1];for(var f=a.P[2],g=a.P[3],h,m,l,n=0;64>n;++n)16>n?(h=g^d&(f^g),m=n):32>n?(h=f^g&(d^f),m=5*n+1&15):48>n?(h=d^f^g,m=3*n+5&15):(h=f^(d|~g),m=7*n&15),l=g,g=f,f=d,e=e+h+dh[n]+c[m]&4294967295,h=ch[n],d=d+((e<<h|e>>>32-h)&4294967295)&4294967295,e=l;a.P[0]=a.P[0]+e&4294967295;a.P[1]=a.P[1]+d&4294967295;a.P[2]=a.P[2]+f&4294967295;a.P[3]=a.P[3]+g&4294967295}
function Hg(a,b,c){c||(c=b.length);a.total+=c;for(var d=0;d<c;++d)a.buffer[a.ra++]=b[d],64==a.ra&&(Jg(a,a.buffer),a.ra=0)}
function Ig(a){var b=Array(16),c=8*a.total,d=a.ra;Hg(a,a.padding,56>d?56-d:64-(d-56));for(var e=56;64>e;++e)a.buffer[e]=c&255,c>>>=8;Jg(a,a.buffer);for(e=d=0;4>e;++e)for(c=0;32>c;c+=8)b[d++]=a.P[e]>>c&255;return b}
;function eh(){this.l=150}
D(eh,O);
eh.prototype.bold=function(a,b){b=pe(b.replace(Vd,""));a=pe(re(a,!0));if(se(b,a))return a+"<b>"+b.substr(a.length)+"</b>";for(var c="",d=[],e=b.length-1,f=0,g=-1,h;h=b.charAt(f);++f)" "==h||"\t"==h?c.length&&(d.push({t:c,pa:g,e:f+1}),c="",g=-1):(c+=h,-1==g?g=f:f==e&&d.push({t:c,pa:g,e:f+1}));c=a.split(/\s+/);f={};for(e=0;g=c[e++];)f[g]=1;h=-1;c=[];var m=d.length-1;for(e=0;g=d[e];++e)f[g.t]?(g=-1==h,e==m?c.push({pa:g?e:h,e:e}):g&&(h=e)):-1<h&&(c.push({pa:h,e:e-1}),h=-1);if(!c.length)return"<b>"+b+
"</b>";e="";for(f=g=0;h=c[f];++f)(m=d[h.pa].pa)&&(e+="<b>"+b.substring(g,m-1)+"</b> "),g=d[h.e].e,e+=b.substring(m,g);g<b.length&&(e+="<b>"+b.substring(g)+"</b> ");return e};function fh(){this.l=146}
D(fh,O);function gh(a){JSON.parse('"\\u30'+a.split(",").join("\\u30")+'"')}
gh("02,0C,0D,01,FB,F2,A1,A3,A5,A7,A9,E3,E5,E7,C3,FC,A2,A4,A6,A8,AA,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CA,CB,CC,CD,CE,CF,D2,D5,D8,DB,DE,DF,E0,E1,E2,E4,E6,E8,E9,EA,EB,EC,ED,EF,F3,9B,9C");gh("F4__,AC,AE,B0,B2,B4,B6,B8,BA,BC,BE,C0,C2,C5,C7,C9_____,D0,D3,D6,D9,DC");gh("D1,D4,D7,DA,DD");gh("F4____,AC_,AE_,B0_,B2_,B4_,B6_,B8_,BA_,BC_,BE_,C0_,C2__,C5_,C7_,C9______,D0__,D3__,D6__,D9__,DC");gh("D1__,D4__,D7__,DA__,DD");gh("A6,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CF,D2,D5,D8,DB");gh("CF,D2,D5,D8,DB");function hh(){this.l=116;this.J=!0}
D(hh,O);k=hh.prototype;
k.T=function(a,b){this.M=a.Qa();b.addRule(".sbdd_a",(We?"margin-top:-1px;":"")+"z-index:989");b.addRule(".sbdd_a[dir=ltr] .fl, .sbdd_a[dir=rtl] .fr","float:left");b.addRule(".sbdd_a[dir=ltr] .fr, .sbdd_a[dir=rtl] .fl","float:right");We?b.addRule(".sbdd_b","background:#fff;border:1px solid #ccc;border-top-color:#d9d9d9;"+b.prefix("border-radius:0 0 3px 3px;")+"cursor:default"):b.addRule(".sbdd_b","background:#fff;border:1px solid #ccc;border-top-color:#d9d9d9;"+b.prefix("box-shadow:0 2px 4px rgba(0,0,0,0.2);")+"cursor:default");
b.addRule(".sbdd_c","border:0;display:block;position:absolute;top:0;z-index:988")};
k.G=function(a){this.K=a.get(130);a.get(115);this.s=a.get(118);this.F=a.get(117);this.R=a.g.getId()};
k.setup=function(a){this.f=a};
k.da=function(a){this.g=R();this.g.className="gstl_"+this.R+" sbdd_a";ih(this.g,!1);this.L=this.g;this.B=R("fl");this.g.appendChild(this.B);this.w=R();this.g.appendChild(this.w);this.o=R("sbdd_b");this.w.appendChild(this.o);this.U=R();this.w.appendChild(this.U);this.f.ub&&(this.i=Q("iframe","gstl_"+this.R+" sbdd_c"),ih(this.i,!1),(this.f.W||document.body).appendChild(this.i));if(this.m=this.f.sc)ua(this.m)&&(this.m+=this.f.ua[2],this.m-=jh(this)),kh(this,this.g,this.m);lh(this);(a.W||document.body).appendChild(this.g);
sg(this.F,8,A(this.Ub,this))};
k.H=function(a){this.f=a;this.g.style.position=a.la};
k.getHeight=function(){this.A||(this.A=this.o?Math.max(this.o.offsetHeight,0):0);return this.A};
k.show=function(a){mh(this,a.ea||this.M);var b=a.marginWidth;if(this.O!=b){var c=this.B.style;b?(c.width=b+"px",c.height="1px"):c.height="";this.O=b}this.J=a.nd;this.I=a.horizontalAlignment;nh(this.s.g,!0);ih(this.L,!0);ih(this.i,!0);S(this.F,14);this.Ub()};
k.hide=function(){this.A=0;nh(this.s.g,!1);ih(this.L,!1);ih(this.i,!1);mh(this,this.M);S(this.F,9)};
k.Ub=function(){this.A=0;lh(this);if(this.i){var a=this.f.ib[0],b=this.i.style;"relative"!=this.f.la&&(b.top=this.g.style.top,b.left=this.g.offsetLeft+this.B.offsetWidth+"px");a=this.getHeight()+a;this.i.style.height=Math.max(a,0)+"px";kh(this,this.i,this.o.offsetWidth)}this.u&&$f(this.u.f)};
function lh(a){var b,c;if(c=a.u)c=a.u.f,c=c.f.Rc||c.C==c.B?c.O:null;var d=(b=c)?b.offsetWidth:oh(a.s.g);var e=a.m;c=jh(a);e?x(e)&&(e=null):a.O||!a.J?a.w.style.display="inline-block":(a.w.style.display="",e=d+a.f.ua[2]-c,kh(a,a.g,e));if("relative"!=a.f.la){var f="rtl"==$b()!=("rtl"==a.D),g=a.f.W;var h={aa:0,Fa:0};if(f||!g||g==document.body||a.f.ob)h=$e(a.s.g.B),b&&(h.aa=$e(b).aa);b=h;h=e;e=a.f.ua;g=e[1];e=e[0];e=b.Fa+a.s.getHeight()+e;if("right"==a.I){h="rtl"==$b()!=("rtl"==a.D);var m=a.f.W;g=-g;if(h||
!m||m==document.body)g+=(hf(a.g)||window).document.documentElement.clientWidth-d-b.aa;d=g;h=e;b=void 0}else b=b.aa+g,"center"==a.I&&h&&(b+=(d-h)/2),h=e,d=void 0;e={aa:0,Fa:0};"absolute"==a.f.la&&a.f.W&&a.f.W!=document.body&&(f||a.f.ob)&&(e=$e(a.f.W));g=a.g.style;g.top=h-e.Fa+"px";g.left=g.right="";void 0!=b?g.left=b+c-e.aa+"px":(b=0,a.f.W&&f&&(b=document.body.clientWidth-(e.aa+a.f.W.offsetWidth)),g.right=d+c-b+"px")}}
function kh(a,b,c){ua(c)?0<c&&(a.f.Pd?b.style.width=c+"px":b.style.minWidth=c+"px"):b.style.width=c}
function ih(a,b){a&&(a.style.display=b?"":"none")}
function mh(a,b){if(a.D!=b){a.D=b;var c=a.f.W;c&&c!=document.body&&(c.style.textAlign="rtl"==b?"right":"left");cf(a.g,b)}}
function jh(a){return a.K&&a.K.g()&&(a=a.s.g.u.offsetWidth,ua(a))?a:0}
;function ph(){this.l=119;this.K=!1;this.s=le(0);this.M=-1;this.O=!1}
D(ph,O);k=ph.prototype;
k.T=function(a,b){this.F=a;this.f=a.rb();this.f.setAttribute("aria-haspopup",!1);this.f.setAttribute("role","combobox");this.f.setAttribute("aria-autocomplete","list");if(!a.Ja()){b.addRule(".sbib_a","background:#fff;"+b.prefix("box-sizing:border-box;"));var c=Ve&&Qe||Me?6:5;b.addRule(".sbib_b",b.prefix("box-sizing:border-box;")+"height:100%;overflow:hidden;padding:"+c+"px 9px 0");b.addRule(".sbib_c[dir=ltr]","float:right");b.addRule(".sbib_c[dir=rtl]","float:left");b.addRule(".sbib_d",b.prefix("box-sizing:border-box;")+
"height:100%;unicode-bidi:embed;white-space:nowrap");b.addRule(".sbib_d[dir=ltr]","float:left");b.addRule(".sbib_d[dir=rtl]","float:right");Ne&&b.addRule(".sbib_a input::-ms-clear","display: none");b.addRule(".sbib_a,.sbib_c","vertical-align:top")}};
k.G=function(a){this.g=a.get(118);this.i=a.get(117);this.ka=a.get(128);this.D=a.get(173);this.ga=!!a.get(136);this.Ia=a.g.getId()};
k.setup=function(a){this.w=a;this.I=a.na;this.J=a.jd;this.Ha=a.lb;this.m=af(this.f);this.Ga();var b=this;Me&&U(this.i,this.f,"beforedeactivate",function(c){b.O&&(b.O=!1,c.za=!0)},10);
a=(G("iPhone")&&!G("iPod")&&!G("iPad")||G("iPad")||G("iPod"))&&Se;Oe&&qh(this);(Te||a)&&rh(this);this.B=this.f};
k.da=function(a){var b=!!a.xc[130];if(this.ga||Uf(this.g)||b||a.Cc)(this.o=this.F.get("gs_id"))?(b&&(this.u=this.F.get("sb_chc")),this.A=this.F.get("sb_ifc")):(this.o=R("gstl_"+this.Ia+" sbib_a"),a=this.o.style,this.J&&(a.width=this.J+"px"),this.I&&(a.height=this.I+"px"),a=this.f.style,a.border="none",a.padding=Pe||Me?"0 1px":"0",a.margin="0",a.height="auto",a.width="100%",this.f.className=this.w.Wa,b&&(this.u=R("sbib_d"),this.u.id=this.F.getId("sb_chc"),this.o.appendChild(this.u)),Uf(this.g)&&this.D&&
(this.D.f.className+=" sbib_c",this.o.appendChild(this.D.f)),this.A=R("sbib_b"),this.A.id=this.F.getId("sb_ifc"),this.o.appendChild(this.A),sh(this,this.o,this.A)),this.w.Id||this.w.oc||th(this,this.o),this.B=this.o;this.Ha&&(b=A(this.Hb,this),U(this.i,this.f,"blur",b,10),b=A(this.Pb,this),U(this.i,this.f,"focus",b,10),this.ja=!0);sg(this.i,8,A(this.Nc,this));uh(this)};
k.H=function(a){this.w=a;this.f.setAttribute("autocomplete","off");this.f.setAttribute("spellcheck",!1);this.f.style.outline=a.Bb?"":"none";this.ha=this.f.value;this.ja&&this.Pb();vh(this)};
k.X=function(){this.ja&&this.Hb();wh(this)};
function sh(a,b,c){wh(a);c||(c=b);a.f.parentNode.replaceChild(b,a.f);c.appendChild(a.f);a.m&&a.w.yd&&(Me||Oe?If(a.i,function(){a.f.focus();Ze(a.f,a.s.wa())}):a.f.focus());
vh(a)}
k.getHeight=function(){var a=this.B?this.B.offsetHeight:0;this.I>a&&(a=this.I);return a};
function oh(a){return a.J?a.J:a.B?a.B.offsetWidth:0}
k.select=function(){this.f.select();this.Ga()};
function Sf(a){Ue&&(a.f.value="");a.f.value=a.g.f;Ue&&(a.f.value=a.f.value);xh(a)}
k.focus=function(){if(!this.m)try{this.f.focus(),this.m=!0,xh(this)}catch(a){}};
k.blur=function(){this.m&&(this.f.blur(),this.m=!1)};
k.isFocused=function(){return this.m};
k.clear=function(){this.f.value=""};
function xh(a){if(a.m){var b=a.f.value.length;a.s=le(b);Ze(a.f,b)}}
function th(a,b){U(a.i,b,"mouseup",function(){a.f.focus()})}
function uh(a){function b(e){U(a.i,a.f,e,A(a.Lb,a),10,c)}
U(a.i,a.f,"keydown",A(a.Lc,a));(Pe||a.w.mc)&&U(a.i,a.f,"keypress",A(a.Mc,a));U(a.i,a.f,"select",A(a.Ga,a),10);var c=!1;b("mousedown");b("keyup");b("keypress");c=!0;b("mouseup");b("keydown");b("focus");b("blur");b("cut");b("paste");b("input");var d=A(a.Ic,a);U(a.i,a.f,"compositionstart",d);U(a.i,a.f,"compositionend",d)}
k.Ic=function(a){a=a.type;"compositionstart"==a?(a=this.g,1!=a.w&&(a.w=!0)):"compositionend"==a&&(a=this.g,0!=a.w&&(a.w=!1))};
k.Lc=function(a){var b=a.keyCode;this.M=b;var c=(Qe||Oe)&&(38==b||40==b)&&T(this.ka),d=13==b,e=27==b;this.L=!1;9!=b||a.shiftKey||(this.L=Jf(this.g));if(d){var f=this;If(this.i,function(){f.ka.u.search(a.shiftKey?4:3)})}if(c||d||e||this.L)a.za=!0};
k.Mc=function(a){var b=a.keyCode,c=9==b&&this.L;if(13==b||27==b||c)a.za=!0};
k.Lb=function(a){if(!this.ia){var b=a.qa;if(!(b.indexOf("key")||a.ctrlKey||a.altKey||a.shiftKey||a.metaKey))a:if(a=a.keyCode,"keypress"!=b){var c=38==a||40==a;if("keydown"==b){var d=this.g;var e=229==a;(d.D=e)&&d.B.add(4);if(c)break a}else if(d=a!=this.M,this.M=-1,!c||d)break a;switch(a){case 27:a=this.g;a.o.Bd?a.search(5):(a.i.isVisible()?a.i.dismiss():a.g.blur(),Tf(a));break;case 37:Vf(this.g,"rtl");break;case 39:Vf(this.g,"ltr");break;case 38:this.g.i.Sb();break;case 40:a=this.g;c=this.s;T(a.i)?
a.i.Rb():Nf(a.i,c);break;case 46:a=this.g;a.f&&this.s.tb()==a.f.length&&(a.K&&a.K.clear(),a.o.Ad&&a.search(2));break;case 8:a=this.g,a.A&&0==this.s.wa()&&a.A.f()}}this.Ga();Lf(this.g,this.f.value,this.s,b)}};
k.Hc=function(){this.m=!0;S(this.g.s,10)};
k.Fc=function(){this.m=!1;Hf(this.g)};
function vh(a){a.K||(a.K=!0,a.U=A(a.Hc,a),U(a.i,a.f,"focus",a.U,99),a.R=A(a.Fc,a),U(a.i,a.f,"blur",a.R,99))}
function wh(a){a.K&&(a.K=!1,rg(a.i,a.f,a.U),rg(a.i,a.f,a.R))}
k.Pb=function(){this.C||(this.C=new Od(this.w.vd||50),this.C.f.add("tick",this.ud,!1,void 0,this),this.C.start())};
k.Hb=function(){this.C&&(this.C.stop(),this.C=null)};
k.ud=function(){this.Lb({qa:"polling"})};
k.Nc=function(){if(Oe){var a=this.f,b=document.createEvent("KeyboardEvent");b.initKeyEvent&&(b.initKeyEvent("keypress",!0,!0,null,!1,!1,!0,!1,27,0),a.dispatchEvent(b))}};
k.Ga=function(){if(this.m){a:{var a=this.f;try{if("selectionStart"in a){var b=a.selectionStart;var c=a.selectionEnd}else{var d=a.createTextRange(),e=bf(a).selection.createRange();d.inRange(e)&&(d.setEndPoint("EndToStart",e),b=d.text.length,d.setEndPoint("EndToEnd",e),c=d.text.length)}if(void 0!==b){var f=le(b,c);break a}}catch(g){}f=null}f&&(this.s=f)}};
function qh(a){var b;tg(window,"pagehide",function(){a.ia=!0;b=a.f.value});
tg(window,"pageshow",function(c){a.ia=!1;(c.persisted||void 0!==b)&&Rf(a.g,b)})}
function rh(a){tg(window,"pageshow",function(b){b.persisted&&a.ha&&Rf(a.g,a.ha)})}
function nh(a,b){a.f.setAttribute("aria-haspopup",b);b||a.f.removeAttribute("aria-activedescendant")}
;function yh(){this.l=129;this.F={};this.I=[];this.K=[];this.L=[];this.w=[];this.M=0}
D(yh,O);k=yh.prototype;
k.T=function(a,b){this.R=a;this.C=a.Qa();We||b.addRule(".sbsb_a","background:#fff");b.addRule(".sbsb_b","list-style-type:none;margin:0;padding:0");We||b.addRule(".sbsb_c","line-height:22px;overflow:hidden;padding:0 10px");b.addRule(".sbsb_d","background:#eee");b.addRule(".sbsb_e","height:1px;background-color:#e5e5e5");b.addRule("#sbsb_f","font-size:11px;color:#36c;text-decoration:none");b.addRule("#sbsb_f:hover","font-size:11px;color:#36c;text-decoration:underline");b.addRule(".sbsb_g","text-align:center;padding:8px 0 7px;position:relative");
b.addRule(".sbsb_h","font-size:15px;height:28px;margin:0.2em"+(Qe?";-webkit-appearance:button":""));b.addRule(".sbsb_i","font-size:13px;color:#36c;text-decoration:none;line-height:100%");b.addRule(".sbsb_i:hover","text-decoration:underline");b.addRule(".sbsb_j","padding-top:1px 0 2px 0;font-size:11px");b.addRule(".sbdd_a[dir=ltr] .sbsb_j","padding-right:4px;text-align:right");b.addRule(".sbdd_a[dir=rtl] .sbsb_j","padding-left:4px;text-align:left");We&&(b.addRule(".sbsb_c[dir=ltr] .sbsb_k","padding:10px 3px 11px 8px"),
b.addRule(".sbsb_c[dir=rtl] .sbsb_k","padding:10px 8px 11px 3px"))};
k.G=function(a){this.A=a.get(128);this.u=a.get(118);this.D=a.get(121);a=N(a,152);var b={};if(a)for(var c=0,d;d=a[c++];)b[d.m]=d;this.U=b};
k.setup=function(a){this.f=a};
k.da=function(){this.m=R();this.g=Q("ul","sbsb_b");this.g.setAttribute("role","listbox");this.m.appendChild(this.g)};
k.H=function(a){this.f=a;var b=a.Kb;b&&(this.O=this.R.pb(b));this.m.className=a.Nd||"sbsb_a";this.J=a.Ld||"sbsb_d"};
k.highlight=function(a){(a=this.w[a])&&a.isSelectable()&&zc(a.f().parentNode,this.J)};
function ig(a,b){var c=a.w[b];c&&Ac(c.f().parentNode,a.J)}
k.clear=function(){for(var a,b,c;c=this.I.pop();)a=c.N(),(b=this.F[a])||(b=this.F[a]=[]),b.push(c),a=c.f(),a.parentNode.removeChild(a);for(;a=this.g.firstChild;)a=this.g.removeChild(a),a.l?this.L.push(a):a!=this.s&&a!=this.o&&this.K.push(a);this.s&&(this.s.style.display="none");this.o&&(this.o.style.display="none");this.w=[]};
k.isSelectable=function(a){return(a=this.w[a])?a.isSelectable():!1};
function ag(a,b){var c=b.N(),d=a.U[c];if(!d)return!1;c=(c=a.F[c])&&c.pop();if(!c){c=d.ta(a.D);var e=c.f();e.setAttribute("role","option");zc(e,"sbse");e.id="sbse"+a.M;a.M++}d.Ca(b,c);a.I.push(c);e=c.f();var f=zh(a);f.appendChild(e);if(void 0!==b.s){a.w.push(c);var g=a.B;var h=b.l;a.f.Yc&&(e.onmouseover=function(){fg(a.A,h)},e.onmouseout=function(){jg(a.A)});
var m=c.f();m.onclick=function(l){a.u.g.blur();b.i&&Mf(a.u,b.f);jg(a.A);var n=a.A;n.i=n.f=h;l=l||hf(m).event;d.Ba(l,b,a.D)}}else g=a.C;
cf(f,g);return!0}
function eg(a,b,c,d){var e=Q("input");e.type="button";e.value=qe(b);e.onclick=function(){a.D.search(a.u.f,d)};
if(a.f.Qc){b="lsb";var f=Q("span");var g=Q("span");f.className="ds";g.className="lsbb";f.appendChild(g);g.appendChild(e)}else b="sbsb_h",f=e;e.className=b;c.appendChild(f)}
function zh(a){var b=a.K.pop();if(b)return a.g.appendChild(b),b;b=Q("li");b.setAttribute("role","presentation");b.className="sbsb_c "+a.f.Da;b.onmousedown=A(a.ab,a);a.g.appendChild(b);return b}
k.ab=function(a){a=a||hf(this.m).event;a.stopPropagation?(a.stopPropagation(),window.Polymer&&window.Polymer.Element&&a.preventDefault()):Me&&!Pe&&(this.u.g.O=!0);return!1};
function $f(a){if(a.i){var b=0,c=a.u.g.u;c&&(b=c.offsetWidth);b=oh(a.u.g)-b-3;0<b&&(a.i.style.width=b+"px")}}
;function Ah(){this.l=147}
D(Ah,O);Ah.prototype.T=function(a){this.s=a.qb()||document.body};
Ah.prototype.setup=function(a){this.u=a};
Ah.prototype.getHeight=function(){this.f||bg(this);cg(this);if(!this.g){var a=this.f;"|"!=a.innerHTML&&(a.innerHTML="|");this.g=this.f.offsetHeight}return this.g};
function bg(a){var b=R(a.u.Wa),c=b.style;c.background="transparent";c.color="#000";c.padding=0;c.position="absolute";c.whiteSpace="pre";a.f=b;a.f.style.visibility="hidden";a.s.appendChild(a.f)}
function cg(a){var b=B();if(!a.m||a.m+3E3<b){a.m=b;b=a.f;var c=hf(b);b=(b=c.getComputedStyle?c.getComputedStyle(b,""):b.currentStyle)?b.fontSize:null;a.o&&b==a.o||(a.i={},a.g=null,a.o=b)}}
;function Bh(){Ee.call(this);this.set(191,new bh);this.set(150,new eh);this.set(146,new fh);this.set(147,new Ah);M(this,149,new yf);this.set(145,new lg);this.set(117,new mg);this.set(494,new vg);this.set(374,new wg);this.set(120,new xg);this.set(121,new Lg);this.set(553,new Og);this.set(124,new Xg);this.set(125,new Yg);this.set(123,new Qg);this.set(126,new $g);this.set(127,new ah);this.set(115,new Bf);this.set(118,new Ff);this.set(128,new Xf);M(this,154,new kg);this.set(116,new hh);this.set(119,new ph);
this.set(129,new yh)}
D(Bh,Ee);function Ch(){this.l=347;this.f=[];this.g=0}
D(Ch,O);Ch.prototype.G=function(a){this.o=a.get(120)};
Ch.prototype.H=function(a){this.m="//"+(a.qd||"www."+a.Ka)+"/gen_204?";this.i=a.Jd||{}};
function Mg(a,b){var c=Cg(a.o,b,void 0,void 0),d;for(d in a.i)d in c||(c[d]=a.i[d]);c=me(c,!0);Dh(a,a.m+c)}
function Dh(a,b){var c=new Image,d=a.g,e=a.f;c.onerror=c.onload=c.onabort=function(){try{delete e[d]}catch(f){}};
a.f[a.g++]=c;c.src=b}
;function Eh(){this.l=151;this.g=!0;this.f={}}
D(Eh,O);k=Eh.prototype;k.G=function(a){this.i=a.get(150)};
k.setup=function(){this.o=ke([0])};
k.H=function(a){this.m=a.Ta;this.g=a.kb};
k.X=function(){this.g=!1};
k.update=function(a){if(this.g){var b=a.f;if(b.length){var c=a.l.l;a:{var d=Number.MAX_VALUE;for(var e,f=0;e=b[f++];){if(!this.o[e.N()]){d=-1;break a}e=e.f;d=Math.min(e.length,d)}}if(-1!=d){var g=b[0].f;if(se(g,c,!0))for(f=c.length+1;f<=d;){c=null;for(e=0;g=b[e++];){g=g.f;if(f>g.length)return;g=g.substr(0,f);if(!c)c=g;else if(c!=g)return}this.f[c]=a;++f}}}}};
k.get=function(a){if(this.g){var b=this.f[a.l];if(b){for(var c=a.w,d=a.l,e=b.g,f=this.m||!e.f.k,g=[],h,m,l=b.f,n=0,p;p=l[n++];)m=p.f,h=f?this.i.bold(c,m):pe(m),g.push(new Yd(h,m,p.l,p.N(),p.g||[],p.m));delete this.f[d];return new Ce(a,g,e,!0,b.i,!1)}}return null};
k.reset=function(){this.f={}};function Fh(){this.l=133;this.g={};this.f=[];this.m=this.i=0}
D(Fh,O);Fh.prototype.G=function(a){this.f=N(a,151);this.f.sort(Gh)};
Fh.prototype.H=function(){this.m=this.i=0};
Fh.prototype.get=function(a){var b=this.g[a.g];if(b)++this.i;else if(this.f)for(var c=0;c<this.f.length;++c)if(b=this.f[c].get(a)){b&&b.i&&(this.g[b.l.g]=b);++this.m;break}return b?new Ce(a,b.f,b.g,b.m,b.i,b.s):null};
Fh.prototype.has=function(a){return!!this.g[a.g]};
function Gh(){return 0}
;function Hh(a){this.l=a;this.f=new RegExp("(?:^|\\s+)"+a+"(?:$|\\s+)")}
function Ih(a,b){b&&!a.f.test(b.className)&&(b.className+=" "+a.l)}
function Jh(a,b){b&&(b.className=b.className.replace(a.f," "))}
;function Kh(){this.l=570;this.m=!1}
D(Kh,O);k=Kh.prototype;k.T=function(a){this.s=a};
k.G=function(a){this.o=a.get(117);this.u=a.get(118)};
k.setup=function(a){var b=a.ma;if(this.f=b?this.s.pb(b):null)sg(this.o,10,A(this.Gc,this)),sg(this.o,11,A(this.Ec,this)),U(this.o,this.f,"mouseover",A(this.Kc,this)),U(this.o,this.f,"mouseout",A(this.Jc,this)),a.Oa&&(this.i=new Hh(a.Oa)),a.Na&&(this.g=new Hh(a.Na))};
k.H=function(){this.m=!0;this.f&&this.u.g.isFocused()&&this.g&&Ih(this.g,this.f)};
k.X=function(){this.m=!1;this.f&&(this.i&&Jh(this.i,this.f),this.g&&Jh(this.g,this.f))};
k.Kc=function(){this.m&&this.i&&Ih(this.i,this.f)};
k.Jc=function(){this.m&&this.i&&Jh(this.i,this.f)};
k.Gc=function(){this.m&&this.g&&Ih(this.g,this.f)};
k.Ec=function(){this.m&&this.g&&Jh(this.g,this.f)};function Lh(a,b,c,d,e,f,g,h){this.o=35;this.M=a;this.K=b;this.J=c;this.C=d;this.w=e;this.D=g;this.L=h;this.u=!0;this.s=!1;this.l=R("sbpqs_d");this.m=R();this.F=Q("span","sbpqs_a");this.D&&(this.i=Q("a"),this.i.href="#ps",this.i.className="sbsb_i",this.A=R("fr sbpqs_b"),this.m.appendChild(this.A),this.A.appendChild(this.i),this.g=R("sbpqs_c"),this.g.innerHTML=this.L);this.m.appendChild(this.F);this.l.appendChild(this.m);this.g&&this.l.appendChild(this.g)}
D(Lh,Le);Lh.prototype.f=function(){return this.l};
Lh.prototype.isSelectable=function(){return this.u};
Lh.prototype.I=function(a){this.s=!0;var b=A(this.R,this),c=this.K.g,d=this.O;c.g[d]=b;b=[];"1"===ne(window.location.search).ssl_dbg&&L("ssl_dbg","1",b);L("delq",d,b);L("client",c.o,b);L("callback","google.sbox.d"+c.m,b);d=c.s;L("tok",c.u,b);c.i&&L("authuser",c.i,b);c.f=Q("script");c.f.src=d+b.join("&");he.appendChild(c.f);return ef(a)};
Lh.prototype.R=function(){if(this.s){var a=this.J;if(a.g){a=a.f;for(var b in a.g)for(var c=a.g[b].f,d=0,e;e=c[d++];)if(35==e.N()){delete a.g[b];break}for(b=0;b<a.f.length;++b)a.f[b].reset()}a=this.M;a.f&&a.f.Cd();this.l.onmouseover=this.l.onmouseout=this.l.onclick=null;this.m.style.display="none";this.g.style.display="";this.w.i==this.B&&Tf(this.C);this.w.f==this.B&&(jg(this.w),this.C.g.focus());this.u=!1}};function Mh(){P.call(this,35)}
D(Mh,P);k=Mh.prototype;k.T=function(a,b){b.addRule(".sbpqs_a","color:#52188c");b.addRule(".sbdd_a[dir=ltr] .sbpqs_a","padding-right:8px");b.addRule(".sbdd_a[dir=rtl] .sbpqs_a","padding-left:8px");b.addRule(".sbdd_a[dir=ltr] .sbpqs_b","padding-right:3px");b.addRule(".sbdd_a[dir=rtl] .sbpqs_b","padding-left:3px");b.addRule(".sbpqs_c","color:#666;line-height:22px")};
k.G=function(a){this.g=a.get(123);this.i=a.get(118);this.o=a.get(189);this.u=a.get(127);this.A=a.get(128)};
k.setup=function(a){this.H(a)};
k.H=function(a){this.w=a.Hd;this.f=a.Nb;this.s=a.Mb};
k.ta=function(a){return new Lh(this.u,this.o,this.g,this.i,this.A,a,this.w,this.s)};
k.Ca=function(a,b){var c=a.getHtml(),d=a.f,e=a.l,f=this.f;b.s=!1;b.u=!0;b.O=d;b.B=e;b.m.style.display="";b.F.innerHTML=c;b.D&&(b.g.style.display="none",b.i.innerHTML=f,b.i.onclick=A(b.I,b))};
k.Ba=function(a,b,c){c.search(b.f,1)};function Nh(){this.l=134;this.g={}}
D(Nh,O);k=Nh.prototype;k.G=function(a){this.m=a.g.getId()};
k.setup=function(){"google"in window||(window.google={});"sbox"in window.google||(window.google.sbox={});window.google.sbox["d"+this.m]=A(this.Ed,this)};
k.H=function(a){this.s="//"+(a.Ob||"clients1."+a.Ka)+"/complete/deleteitems?";this.u=a.hb;this.i=a.authuser;this.o=a.clientName};
k.X=function(){Oh(this)};
function Oh(a){a.f&&(he.removeChild(a.f),a.f=null)}
k.Ed=function(a){Oh(this);a=a[0];var b=this.g[a];b&&(delete this.g[a],b())};function Ph(){this.l=189}
D(Ph,O);Ph.prototype.G=function(a){this.g=a.get(134);this.i=a.get(123);this.s=a.get(118);this.w=a.get(553)};
Ph.prototype.setup=function(a){this.f=a.Ac};
Ph.prototype.H=function(a){this.m=a.hb;this.u=!(!this.g||!this.m);this.f&&(a=this.s.f?3E3:0,window.setTimeout(A(this.o,this),a),this.f=!1)};
Ph.prototype.o=function(){var a=Pf(this.w,"",void 0,void 0,!0);Qf(this.i,a);a=this.i;a.m=a.i};function Qh(){this.l=156}
D(Qh,O);Qh.prototype.G=function(a){this.i=a.get(189)};
Qh.prototype.g=function(a){var b=this.i,c={};b.u&&(c.tok=b.m);"1"===ne(window.location.search).ssl_dbg&&(c.ssl_dbg="1");for(var d in c)Be(a,d,c[d]);return 1};
Qh.prototype.f=function(){return 12};function Rh(){this.l=156}
D(Rh,O);Rh.prototype.g=function(a){var b=1,c=a.A;oe(a.f)||"focus"!=c&&"input"!=c||(b=2);return b};
Rh.prototype.f=function(){return 2};function Sh(){this.l=160}
D(Sh,O);k=Sh.prototype;k.T=function(a,b){this.i=a;a.Ja()||(b.addRule(".gsok_a","background:url(data:image/gif;base64,R0lGODlhEwALAKECAAAAABISEv///////yH5BAEKAAIALAAAAAATAAsAAAIdDI6pZ+suQJyy0ocV3bbm33EcCArmiUYk1qxAUAAAOw==) no-repeat center;display:inline-block;height:11px;line-height:0;width:19px"),b.addRule(".gsok_a img","border:none;visibility:hidden"))};
k.G=function(a){this.w=a.get(374);this.A=a.get(128)};
k.setup=function(a){this.m=!!a.ya;this.o=a.Eb;this.u=a.Aa;this.B=a.td;this.C=a.sd};
k.da=function(){(this.g=this.i.get("gs_ok"))?this.f=this.g.firstChild:(this.f=Q("img"),this.f.src=this.o+"/tia.png",this.g=Q("span","gsok_a gsst_e"),this.g.id=this.i.getId("gs_ok"),this.g.appendChild(this.f));this.f.ds=A(this.pc,this);this.f.setAttribute("tia_field_name",this.i.rb().name);this.f.setAttribute("tia_disable_swap",!0)};
k.H=function(a){a.Ua&&(this.m=!!a.ya);this.f.setAttribute("tia_property",a.Fb)};
k.isEnabled=function(){return this.m};
k.sb=function(){return{tooltip:this.C}};
k.Vb=function(a){if(!this.s)a=document.createElement("script"),a.src="//www.google.com/textinputassistant/"+this.B+"/"+this.u+"_tia.js",document.body.appendChild(a),this.s=!0,this.w.add(3);else if(this.f.onclick)this.f.onclick(a)};
k.pc=function(){this.A.dismiss()};
var Th=je++;function Uh(){this.l=173;this.i={}}
D(Uh,O);k=Uh.prototype;
k.T=function(a,b){this.m=a;a.Ja()||(b.addRule(".gsst_a","display:inline-block"),b.addRule(".gsst_a","cursor:pointer;padding:0 4px"),b.addRule(".gsst_a:hover","text-decoration:none!important"),b.addRule(".gsst_b","font-size:16px;padding:0 2px;position:relative;"+b.prefix("user-select:none;")+"white-space:nowrap"),b.addRule(".gsst_e","vertical-align:middle;"+(jf()+":"+kf(.6)+";")),b.addRule(".gsst_a:hover .gsst_e,.gsst_a:focus .gsst_e",jf()+":"+kf(.8)+";"),b.addRule(".gsst_a:active .gsst_e",jf()+":"+
kf(1)+";"))};
k.G=function(a){this.u=a.get(118);this.g=N(a,160)};
k.setup=function(a){this.o=a.Ua;this.g.sort(Vh)};
k.da=function(a){this.f=this.m.get("gs_st");if(!this.f){this.f=R("gsst_b");this.f.id=this.m.getId("gs_st");if(a=a.na)this.f.style.lineHeight=a+"px";Wh(this)}Xh(this)};
k.H=function(){if(this.o)for(var a=0,b;b=this.g[a++];){var c=!!this.i[Th];if(b.isEnabled()!=c){for(;this.f.hasChildNodes();)this.f.removeChild(this.f.lastChild);Wh(this);Xh(this);break}}};
function Vh(){return 0}
function Wh(a){for(var b,c=0,d;d=a.g[c++];)if(d.isEnabled()){b=!0;var e=Q("a","gsst_a");Yh(a,e,d);e.appendChild(d.g);a.f.appendChild(e)}a.f.style.display=b?"":"none"}
function Xh(a){a.i={};for(var b=0,c;c=a.g[b++];)if(c.isEnabled()){var d=Th,e=c.g.parentNode;e.onclick=A(c.Vb,c);a.i[d]=e;c.sb&&(c=c.sb(),c.ue&&(d=a.i[d])&&d.style&&(d.style.visibility="hidden"),d=c.tooltip)&&(e.title=d)}}
function Yh(a,b,c){b.href="javascript:void(0)";Pe&&(b.tabIndex=0);b.onkeydown=function(d){d=d||window.event;var e=d.keyCode;if(13==e||32==e)c.Vb(d),a.u.g.focus(),ef(d)}}
je++;function Zh(){this.o=33;this.l=R();this.l.className="gspr_a"}
D(Zh,Le);Zh.prototype.f=function(){return this.l};function $h(){P.call(this,33)}
D($h,P);$h.prototype.T=function(a,b){b.addRule(".gspr_a","padding-right:1px")};
$h.prototype.ta=function(){return new Zh};
$h.prototype.Ca=function(a,b){b.l.innerHTML=a.m.f.b||""};
$h.prototype.Ba=function(a,b,c){c.search(b.f,1)};function ai(a,b){this.o=0;this.m=a;this.w=b;this.i=R();this.l=R("sbqs_a");this.i.appendChild(this.l);this.u=R("sbqs_c");this.i.appendChild(this.u)}
D(ai,Le);ai.prototype.f=function(){return this.i};
function bi(a,b,c,d){a.u.innerHTML=b;a.s=c;d&&!a.g&&(a.g=ff(a.l),a.g.onclick=A(function(e){this.m.g.blur();Mf(this.m,this.s);this.w.search(this.s,9);return ef(e)},a));
d?(a.g.innerHTML=d+" &raquo;",a.l.style.display="",a.l.setAttribute("aria-hidden","true")):a.g&&(a.l.style.display="none")}
;function ci(){P.call(this,0)}
D(ci,P);k=ci.prototype;k.T=function(a,b){b.addRule(".sbsb_c[dir=ltr] .sbqs_a","float:right");b.addRule(".sbsb_c[dir=rtl] .sbqs_a","float:left");b.addRule(".sbqs_b","visibility:hidden");b.addRule(".sbsb_d .sbqs_b","visibility:visible");b.addRule(".sbsb_c[dir=ltr] .sbqs_b","padding-left:5px;");b.addRule(".sbsb_c[dir=rtl] .sbqs_b","padding-right:5px;");b.addRule(".sbqs_c","word-wrap:break-word")};
k.G=function(a){this.g=a.get(118)};
k.H=function(a){this.f=a.mb?a.nb:""};
k.ta=function(a){return new ai(this.g,a)};
k.Ca=function(a,b){bi(b,a.getHtml(),a.f,this.f)};
k.Ba=function(a,b,c){c.search(b.f,1)};function di(a){Bh.call(this);this.set(347,new Ch);this.set(133,new Fh);M(this,151,new Eh);this.set(570,new Kh);this.set(134,new Nh);this.set(189,new Ph);M(this,156,new Qh);M(this,152,new Mh);M(this,152,new $h);M(this,152,new ci);this.set(173,new Uh);M(this,160,new Sh);this.set(157,new sf);M(this,156,new tf);"zero-prefix"==a.SEARCHBOX_BEHAVIOR_EXPERIMENT&&M(this,156,new Rh);var b=a.SBOX_STRINGS||{};a.SEARCHBOX_REPORTING&&a.SEARCHBOX_COMPONENT&&b.SBOX_REPORT_SUGGESTIONS&&(M(this,153,new Je),M(this,
152,new qf(b.SBOX_REPORT_SUGGESTIONS,a.SEARCHBOX_COMPONENT)));a.SEARCHBOX_COMPONENT&&(this.set(598,new uf(a.SEARCHBOX_COMPONENT,a.SEARCHBOX_ENABLE_REFINEMENT_SUGGEST)),M(this,156,new wf))}
D(di,Bh);function ei(){return{Ra:function(){return{clientName:"hp",requestIdentifier:"hp",Ka:"google.com",Yb:"",Xa:"en",La:"",bb:"",videoId:"",hb:"",authuser:0,rd:"",Je:"",Xb:null,fb:"",wc:!1,Ob:"",cb:"",connectionType:0,He:null,dc:!1,Be:!1,xb:!1,uc:!0,zc:10,ne:10,tc:!0,kb:!0,je:!1,Bc:!1,od:!1,pd:!1,xe:!1,Wc:!0,qc:!1,Xc:500,Ua:!1,Pc:!0,se:!0,De:!1,ya:!1,Aa:"",Eb:"//www.google.com/textinputassistant",Fb:"",td:7,pe:!1,qe:!1,Tc:!1,Sc:!0,Uc:!1,vb:!1,Bd:!1,Ad:!1,Ea:1,zb:!0,va:!1,mb:!1,lb:!1,vd:10,Ta:!1,yd:!0,W:document.body,
Vc:!0,Zb:null,xc:{},le:{},Ae:0,Cc:!1,Zc:!0,ca:!1,Ac:!1,Gd:!1,Ee:null,vc:!1,qd:null,Jd:null,Ma:!1,Yc:!0,mc:!1,Ge:1,Bb:!1,searchText:"Search",nb:"I'm  Feeling Lucky",Fd:"",learnMoreText:"Learn more",Nb:"Remove",Mb:"This search was removed from your Web History",hintText:"",ie:"Did you mean:",sd:"",Ce:"",Me:"Search by voice",Le:'Listening for "Ok Google"',Ke:'Say "Ok Google"',ge:"Clear Search",na:0,jd:0,Wa:"",Da:"",isRtl:!1,la:"absolute",Qc:!1,ub:!1,Kb:null,Rc:!0,ua:[0,0,0],sc:null,Md:null,ib:[0],Hd:!0,
cc:"",Nd:"",Ld:"",ma:null,Oa:"",Na:"",fe:1,Pd:!1,ob:!1,ye:0,Id:!1,oc:!1,ke:!1,wd:!0}}}}
;function fi(a,b,c,d,e){var f=Oe?"-moz-":Me?"-ms-":Pe?"-o-":Qe?"-webkit-":"",g=".gstl_"+d,h=new RegExp("(\\.("+e.join("|")+")\\b)"),m=[];return{addRule:function(l,n){if(b){if(c){for(var p=l.split(","),t=[],q=0,z;z=p[q++];)z=h.test(z)?z.replace(h,g+"$1"):g+" "+z,t.push(z);l=t.join(",")}m.push(l,"{",n,"}")}},
lc:function(){if(b&&m.length){b=!1;var l=Q("style");l.setAttribute("type","text/css");(a||he).appendChild(l);var n=m.join("");m=null;l.styleSheet?l.styleSheet.cssText=n:l.appendChild(document.createTextNode(n))}},
prefix:function(l,n){var p=l+(n||"");f&&(p+=n?l+f+n:f+l);return p}}}
;function gi(a,b,c,d){this.g=a;this.I=b;this.C=c;this.D=d;this.l=-1;this.w=!1}
k=gi.prototype;k.install=function(a){if(!this.w){a=hi(a);0>this.l&&(this.l=ii(a));var b=bf(this.g),c=ji(this),d=!!b.getElementById("gs_id"+this.l),e=this,f=["gssb_c","gssb_k","sbdd_a","sbdd_c","sbib_a"];a.cc&&f.push(a.cc);f=fi(a.Zb,a.Vc,a.vc,this.l,f);this.s=a.ca;this.f=new Fe(this.C,this.D,{Ja:function(){return d},
get:function(g){return b.getElementById(g+e.l)},
pb:function(g){return b.getElementById(g)},
qb:function(){return e.I},
Qa:function(){return c},
getId:function(g){return g+e.l},
rb:function(){return e.g}},f,this,a);
this.f.get(347);this.A=this.f.get(130);this.f.get(115);this.F=this.f.get(117);this.f.get(123);this.J=this.f.get(118);this.i=this.f.get(119);this.f.get(374);this.m=this.f.get(120);this.f.get(189);this.K=this.f.get(553);this.f.get(419);this.f.get(126);this.f.get(128);this.f.get(139);this.B=this.f.get(121);a=hf(this.g);this.o=gf(a);this.u=A(this.zd,this);tg(a,"resize",this.u);this.w=!0}};
k.isActive=function(){return!!this.f&&this.f.isActive()};
function ki(a,b){function c(d){a.B.search(a.J.f,12);return df(d)}
tg(b,"keyup",function(d){13!=d.keyCode&&32!=d.keyCode||c(d)});
tg(b,"click",c)}
k.focus=function(){this.i.focus()};
k.blur=function(){this.i.blur()};
k.isFocused=function(){return this.i.isFocused()};
k.getId=function(){return this.l};
k.search=function(a,b){this.B.search(a,b)};
k.ca=function(){return this.s||!!this.A&&this.A.ca()};
k.eb=function(a){this.K.eb(a)};
function ii(a){a=hf(a.Zb||he);void 0==a.nextSearchboxId&&(a.nextSearchboxId=50);return a.nextSearchboxId++}
function ji(a){if(a.g)for(a=a.g;a=a.parentNode;){var b=a.dir;if(b)return b}return"ltr"}
function hi(a){a=xe(a);var b=a.Aa;b?a.Aa=b.toLowerCase():a.ya=!1;a.va&&!a.mb&&(a.va=!1);Se||(a.pd=!1);return a}
k.zd=function(){var a=gf(hf(this.g));if(a.ec!=this.o.ec||a.wb!=this.o.wb)this.o=a,S(this.F,8)};function li(){this.A=/\/(movie|show)s?($|[?#/])/i;this.B=/\/results\?(.*&)?search_type=(movies|shows)($|[&#])/i;this.u="sbhcn";this.s="sbfcn";this.i="gsfi";this.m="gsfs";this.w=function(){return!0}}
D(li,De);k=li.prototype;k.search=function(a,b){this.w(Cg(this.f.m,b,void 0))&&this.F.submit()};
k.redirect=function(a){this.C(this.Tb(a))};
k.Tb=function(a){var b=0<=a.indexOf("?")?"&":"?",c;(c=Cg(this.f.m,void 0,void 0))||(c=Cg(this.f.m,void 0));c=me(c);return a+b+c};
k.Ab=function(a){if(this.g||this.l)a.addRule(".sbsb_c","padding:4px 24px 4px 10px"),this.D?a.addRule(".sbsb_a","padding: 16px 0 0"):a.addRule(".sbsb_a","padding: 16px 0"),["material-centered","material-left"].includes(this.o)?(a.addRule(".sbdd_b","border: 0"),a.addRule(".sbdd_b","box-shadow: 0 4px 8px 0 var(--yt-material-searchbox-active-shadow), 0 0 0 1px var(--yt-material-searchbox-inset);")):a.addRule(".sbdd_b","border-top: 0"),a.addRule(".sbib_a","background:transparent"),a.addRule(".sbib_b",
"padding: 0");this.g?(a.addRule("."+this.m,"font-size:1.6rem;color:#222"),a.addRule(".sbqs_c b","font-weight:500"),["material-centered","material-left"].includes(this.o)?(a.addRule(".sbdd_c","z-index:2030"),a.addRule(".sbdd_a","z-index:2031")):(a.addRule(".sbdd_c","z-index:2010"),a.addRule(".sbdd_a","z-index:2011")),a.addRule(".sbib_a","background:transparent; width: 100%; flex: 1;"),a.addRule("ytd-masthead[dark] .gsst_e","filter: invert(100%)")):(a.addRule("."+this.i,"font-size:16px;height:100% !important"),
a.addRule(".sbib_b ."+this.i,"position:relative !important"),a.addRule("."+this.m,"font-size:16px"),a.addRule("a.sbsb_i","font-size:12px;color:#03c"),a.addRule(".sbdd_c","z-index:2000000006"),a.addRule(".sbdd_a","z-index:2000000007"),this.l||(a.addRule(".sbsb_c,.sbsb_c td","line-height:20px"),a.addRule(".sbsb_c","padding:0 6px"),a.addRule(".sbsb_d td","background:#eee"),a.addRule(".sbsb_e","margin:2px 0"),a.addRule(".sbib_a","background:transparent"),a.addRule(".sbib_b","padding:2px 6px"),a.addRule(".gsok_a",
"padding:0"),a.addRule(".gsok_a img","display:block"),a.addRule("."+this.u,"border:1px solid #b9b9b9;border-top-color:#a0a0a0"+a.prefix("box-shadow:inset 0 1px 2px rgba(0,0,0,0.1);")),a.addRule("."+this.s,"border:1px solid #1c62b9;"+a.prefix("box-shadow:inset 0 1px 2px rgba(0,0,0,0.3);")+"outline:none;")))};
k.install=function(a,b,c,d,e,f,g){this.F=a;this.C=f;g&&(this.w=g);f=ei().Ra();f.clientName="youtube";f.requestIdentifier="youtube";f.La="yt";f.Xa=d.REQUEST_LANGUAGE;f.Yb=d.REQUEST_DOMAIN;f.Pc=!1;f.Ea=0;f.zb=!1;f.va=!1;f.Bb=!1;f.Ta=!0;f.Wa=this.i;f.Da=this.m;f.Oa=this.u;f.Na=this.s;f.we=!0;g=window.location.href;g=this.A.test(g)||this.B.test(g);f.xb=g;f.ya=d.HAS_ON_SCREEN_KEYBOARD;f.Aa=d.REQUEST_LANGUAGE;f.Eb="//www.gstatic.com/inputtools/images";f.Fb="youtube";f.Ma=!0;f.la="fixed";this.g=d.IS_POLYMER;
this.l=d.IS_FUSION;this.D=d.SEARCHBOX_REPORTING;this.o=d.SEARCHBOX_DESIGN_EXPERIMENT;d.PQ&&(f.bb=d.PQ);f.hb=d.PSUGGEST_TOKEN;f.authuser=d.SESSION_INDEX;f.Mb=e.SUGGESTION_DISMISSED_LABEL;f.Nb=e.SUGGESTION_DISMISS_LABEL;f.Fe=ke([0,33,35]);this.g?(f.ma="search-container",f.na=24):this.l?(f.ma="masthead-search",f.na=24):(f.ma="masthead-search-terms",f.na=30);gb()||(f.ub=!0);f.Kb=f.ma;e=-3;G("Windows")&&hb()&&"8.0"==kb()&&(e=-5);this.l?e=17:this.g&&(e=["material-centered","material-left"].includes(this.o)?
6:16);f.ua=[e,0,0];e=[0];hb()&&"8.0"==kb()&&(e[0]=-1);f.ib=e;(e=d.REQUEST_LANGUAGE)?(e=e.toLowerCase(),e="zh-tw"==e||"zh-cn"==e||"ja"==e||"ko"==e):e=!1;e&&(f.lb=!0);if(e=d.SUGG_EXP_ID)f.fb=e;if(this.f){a=this.f;b=f;c=hf(a.g);d=a.u;c.removeEventListener?c.removeEventListener("resize",d,!1):c.detachEvent("onresize",d);He(a.f);b=hi(b);a.s=b.ca;a=a.f;He(a);for(c=0;d=a.f[c++];)d.H(b);a.l=!0}else d=new di(d),this.f=new gi(b,a,this,d),this.f.install(f),c&&(ki(this.f,c),c.onclick=null)};function mi(){this.l=[];this.f=-1}
mi.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.l[a]!=b&&(this.l[a]=b,this.f=-1)};
mi.prototype.get=function(a){return!!this.l[a]};
function ni(a){-1==a.f&&(a.f=Ha(a.l,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;var oi=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};var pi=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};C("yt.config_",pi);function qi(a){var b=arguments;if(1<b.length)pi[b[0]]=b[1];else{b=b[0];for(var c in b)pi[c]=b[c]}}
function V(a,b){return a in pi?pi[a]:b}
function X(a){return V(a,void 0)}
;var ri={};function si(){return ri.clicktracking||(ri.clicktracking="clicktracking".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;function ti(){}
ti.prototype.f=function(a,b){return ui(a,1,b)};function vi(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){wi(b)}}:a}
function wi(a,b,c,d,e){var f=y("yt.logging.errors.log");f?f(a,b,c,d,e):(f=V("ERRORS",[]),f.push([a,b,c,d,e]),qi("ERRORS",f))}
;function xi(a,b){za(a)&&(a=vi(a));return window.setTimeout(a,b)}
;function yi(){}
ka(yi,ti);function ui(a,b,c){isNaN(c)&&(c=void 0);var d=y("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):xi(a,c||0)}
yi.prototype.start=function(){var a=y("yt.scheduler.instance.start");a&&a()};
yi.f=void 0;yi.Ra=function(){return yi.f?yi.f:yi.f=new yi};
var zi=yi.Ra();function Ai(a,b){var c=Y(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function Y(a){return V("EXPERIMENT_FLAGS",{})[a]}
;var Bi=0;C("ytDomDomGetNextId",y("ytDomDomGetNextId")||function(){return++Bi});C("ytEventsEventsListeners",y("ytEventsEventsListeners")||{});C("ytEventsEventsCounter",y("ytEventsEventsCounter")||{count:0});var Ci=y("ytPubsubPubsubInstance")||new J;J.prototype.subscribe=J.prototype.subscribe;J.prototype.unsubscribeByKey=J.prototype.gb;J.prototype.publish=J.prototype.xd;J.prototype.clear=J.prototype.clear;C("ytPubsubPubsubInstance",Ci);C("ytPubsubPubsubSubscribedKeys",y("ytPubsubPubsubSubscribedKeys")||{});C("ytPubsubPubsubTopicToKeys",y("ytPubsubPubsubTopicToKeys")||{});C("ytPubsubPubsubIsSynchronous",y("ytPubsubPubsubIsSynchronous")||{});var Di=Math.pow(2,16)-1,Ei=null,Fi=0,Gi={log_event:"events",log_interaction:"interactions"},Hi=Object.create(null);Hi.log_event="GENERIC_EVENT_LOGGING";Hi.log_interaction="INTERACTION_LOGGING";var Ii=new Set(["log_event"]),Ji={},Ki=0,Li=0,Z=y("ytLoggingTransportLogPayloadsQueue_")||{};C("ytLoggingTransportLogPayloadsQueue_",Z);var Mi=y("ytLoggingTransportTokensToCttTargetIds_")||{};C("ytLoggingTransportTokensToCttTargetIds_",Mi);var Ni=y("ytLoggingTransportDispatchedStats_")||{};
C("ytLoggingTransportDispatchedStats_",Ni);C("ytytLoggingTransportCapturedTime_",y("ytLoggingTransportCapturedTime_")||{});function Oi(){window.clearTimeout(Ki);window.clearTimeout(Li);Li=0;if(!cb(Z)){for(var a in Z){var b=Ji[a];b&&(Pi(a,b),delete Z[a])}cb(Z)||Qi()}}
function Qi(){Y("web_gel_timeout_cap")&&!Li&&(Li=xi(Oi,3E4));window.clearTimeout(Ki);Ki=xi(Oi,V("LOGGING_BATCH_TIMEOUT",Ai("web_gel_debounce_ms",1E4)))}
function Ri(a,b){b=void 0===b?"":b;Z[a]=Z[a]||{};Z[a][b]=Z[a][b]||[];return Z[a][b]}
function Pi(a,b){var c=Gi[a],d=Ni[a]||{};Ni[a]=d;var e=Math.round(oi());for(l in Z[a]){var f=db,g=b.f;g={client:{hl:g.fd,gl:g.ed,clientName:g.cd,clientVersion:g.dd}};var h=window.devicePixelRatio;h&&1!=h&&(g.client.screenDensityFloat=String(h));V("DELEGATED_SESSION_ID")&&!Y("pageid_as_header_web")&&(g.user={onBehalfOfUser:V("DELEGATED_SESSION_ID")});f=f({context:g});f[c]=Ri(a,l);d.dispatchedEventCount=d.dispatchedEventCount||0;d.dispatchedEventCount+=f[c].length;if(g=Mi[l])a:{var m=l;if(g.videoId)h=
"VIDEO";else if(g.playlistId)h="PLAYLIST";else break a;f.credentialTransferTokenTargetId=g;f.context=f.context||{};f.context.user=f.context.user||{};f.context.user.credentialTransferTokens=[{token:m,scope:h}]}delete Mi[l];f.requestTimeMs=e;if(g=X("EVENT_ID"))h=(V("BATCH_CLIENT_COUNTER",void 0)||0)+1,h>Di&&(h=1),qi("BATCH_CLIENT_COUNTER",h),g={serializedEventId:g,clientCounter:h},f.serializedClientEventId=g,Ei&&Fi&&Y("log_gel_rtt_web")&&(f.previousBatchInfo={serializedClientEventId:Ei,roundtripMs:Fi}),
Ei=g,Fi=0;Si(b,a,f,{retry:Ii.has(a),onSuccess:A(Ti,this,oi())})}if(d.previousDispatchMs){c=e-d.previousDispatchMs;var l=d.diffCount||0;d.averageTimeBetweenDispatchesMs=l?(d.averageTimeBetweenDispatchesMs*l+c)/(l+1):c;d.diffCount=l+1}d.previousDispatchMs=e}
function Ti(a){Fi=Math.round(oi()-a)}
;function Ui(){var a=Vi(),b=[];ab(a,function(c,d){var e=encodeURIComponent(String(d)),f;xa(c)?f=c:f=[c];F(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Wi(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=Xa(e[0]||""),g=Xa(e[1]||"");f in b?xa(b[f])?Ka(b[f],g):b[f]=[b[f],g]:b[f]=g}catch(m){var h=Error("Error decoding URL component");h.params="key: "+e[0]+", value: "+e[1];"q"==e[0]?wi(h,"WARNING",void 0,void 0,void 0):wi(h)}}return b}
function Xi(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Wi(e[1]||"");for(var f in b)if(c||!bb(e,f))e[f]=b[f];return Td(a,e)+d}
;function Vi(){var a=Yi;var b=void 0===b?y("yt.ads.biscotti.lastId_")||"":b;a=Object.assign(Zi(a),$i(a));a.ca_type="image";b&&(a.bid=b);return a}
function Zi(a){var b={};b.dt=ac;b.flash="0";a:{try{var c=a.f.top.location.href}catch(f){a=2;break a}a=c?c===a.l.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?E:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!E.navigator&&"unknown"!==typeof E.navigator.javaEnabled&&!!E.navigator.javaEnabled&&E.navigator.javaEnabled();E.screen&&(b.u_h=E.screen.height,b.u_w=E.screen.width,b.u_ah=E.screen.availHeight,b.u_aw=E.screen.availWidth,b.u_cd=E.screen.colorDepth);
E.navigator&&E.navigator.plugins&&(b.u_nplug=E.navigator.plugins.length);E.navigator&&E.navigator.mimeTypes&&(b.u_nmime=E.navigator.mimeTypes.length);return b}
function $i(a){var b=a.f;try{var c=b.screenX;var d=b.screenY}catch(p){}try{var e=b.outerWidth;var f=b.outerHeight}catch(p){}try{var g=b.innerWidth;var h=b.innerHeight}catch(p){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,h];c=a.f.top;try{var m=(c||window).document,l="CSS1Compat"==m.compatMode?m.documentElement:m.body;var n=(new Tb(l.clientWidth,l.clientHeight)).round()}catch(p){n=new Tb(-12245933,-12245933)}m=n;n={};l=new mi;v.SVGElement&&
v.document.createElementNS&&l.set(0);c=Zb();c["allow-top-navigation-by-user-activation"]&&l.set(1);c["allow-popups-to-escape-sandbox"]&&l.set(2);v.crypto&&v.crypto.subtle&&l.set(3);l=ni(l);n.bc=l;n.bih=m.height;n.biw=m.width;n.brdim=b.join();a=a.l;return n.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,n.wgl=!!E.WebGLRenderingContext,n}
var Yi=new function(){var a=window.document;this.f=window;this.l=a};
C("yt.ads_.signals_.getAdSignalsString",function(){return Ui()});B();var aj=w(XMLHttpRequest)?function(){return new XMLHttpRequest}:w(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function bj(){if(!aj)return null;var a=aj();return"open"in a?a:null}
;var cj={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},dj="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
ej=!1;
function fj(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=K(1,a),e=Qd(K(3,a));d&&e?(d=c,c=a.match(Pd),d=d.match(Pd),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?Qd(K(3,c))==e&&(Number(K(4,c))||null)==(Number(K(4,a))||null):!0;d=!!Y("web_ajax_ignore_global_headers_if_set");for(var f in cj)e=V(cj[f]),!e||!c&&!gj(a,f)||d&&void 0!==b[f]||(b[f]=e);if(c||gj(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=-(new Date).getTimezoneOffset();(Y("pass_biscotti_id_in_header_ajax")||Y("pass_biscotti_id_in_header_ajax_tv"))&&(c||
gj(a,"X-YouTube-Ad-Signals"))&&(b["X-YouTube-Ad-Signals"]=Ui());return b}
function hj(a){var b=window.location.search,c=Qd(K(3,a)),d=Qd(K(5,a));d=(c=c&&c.endsWith("youtube.com"))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Wi(b),f={};F(dj,function(g){e[g]&&(f[g]=e[g])});
return Xi(a,f||{},!1)}
function gj(a,b){var c=V("CORS_HEADER_WHITELIST")||{},d=Qd(K(3,a));return d?(c=c[d])?0<=Fa(c,b):!1:!0}
function ij(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=jj(a,b);var d=kj(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&window.clearTimeout(f);var h=g.ok,m=function(l){l=l||{};var n=b.context||v;h?b.onSuccess&&b.onSuccess.call(n,l,g):b.onError&&b.onError.call(n,l,g);b.Za&&b.Za.call(n,l,g)};
"JSON"==(b.format||"JSON")&&(h||400<=g.status&&500>g.status)?g.json().then(m,function(){m(null)}):m(null)}});
b.Db&&0<b.timeout&&(f=xi(function(){e||(e=!0,window.clearTimeout(f),b.Db.call(b.context||v))},b.timeout))}else lj(a,b)}
function lj(a,b){var c=b.format||"JSON";a=jj(a,b);var d=kj(a,b),e=!1,f,g=mj(a,function(h){if(!e){e=!0;f&&window.clearTimeout(f);a:switch(h&&"status"in h?h.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var m=!0;break a;default:m=!1}var l=null,n=400<=h.status&&500>h.status,p=500<=h.status&&600>h.status;if(m||n||p)l=nj(c,h,b.he);if(m)a:if(h&&204==h.status)m=!0;else{switch(c){case "XML":m=0==parseInt(l&&l.return_code,10);break a;case "RAW":m=!0;break a}m=!!l}l=l||
{};n=b.context||v;m?b.onSuccess&&b.onSuccess.call(n,h,l):b.onError&&b.onError.call(n,h,l);b.Za&&b.Za.call(n,h,l)}},b.method,d,b.headers,b.responseType,b.withCredentials);
b.Gb&&0<b.timeout&&(f=xi(function(){e||(e=!0,g.abort(),window.clearTimeout(f))},b.timeout))}
function jj(a,b){b.te&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=X("XSRF_FIELD_NAME"),d=b.Ie;d&&(d[c]&&delete d[c],a=Xi(a,d||{},!0));return a}
function kj(a,b){var c=X("XSRF_FIELD_NAME"),d=X("XSRF_TOKEN"),e=b.postBody||"",f=b.oa,g=X("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.me||Qd(K(3,a))&&!b.withCredentials&&Qd(K(3,a))!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.oa&&b.oa[g]||(f||(f={}),f[c]=d);f&&x(e)&&(e=Wi(e),fb(e,f),e=b.Ib&&"JSON"==b.Ib?JSON.stringify(e):Sd(e));f=e||f&&!cb(f);!ej&&f&&"POST"!=b.method&&(ej=!0,wi(Error("AJAX request with postData should use POST")));
return e}
function nj(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?oj(b):null)d={},F(b.getElementsByTagName("*"),function(e){d[e.tagName]=pj(e)})}c&&qj(d);
return d}
function qj(a){if(Ba(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Pb(a[b],null);a[c]=d}else qj(a[b])}}
function oj(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function pj(a){var b="";F(a.childNodes,function(c){b+=c.nodeValue});
return b}
function mj(a,b,c,d,e,f,g){function h(){4==(m&&"readyState"in m?m.readyState:0)&&b&&vi(b)(m)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var m=bj();if(!m)return null;"onloadend"in m?m.addEventListener("loadend",h,!1):m.onreadystatechange=h;Y("debug_forward_web_query_parameters")&&(a=hj(a));m.open(c,a,!0);f&&(m.responseType=f);g&&(m.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=fj(a,e))for(var l in e)m.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&m.setRequestHeader("Content-Type","application/x-www-form-urlencoded");m.send(d);
return m}
;function rj(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||V("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.de||V("AUTHORIZATION"))||(a?b="Bearer "+y("gapi.auth.getToken")().ce:b=fc([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=V("SESSION_INDEX",0),Y("pageid_as_header_web")&&(d["X-Goog-PageId"]=V("DELEGATED_SESSION_ID")));return d}
function sj(a){a=Object.assign({},a);delete a.Authorization;var b=fc();if(b){var c=new uc;c.update(X("INNERTUBE_API_KEY"));c.update(b);b=c.digest();if(!Db)for(Db={},Eb={},c=0;65>c;c++)Db[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c),Eb[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(c);c=Eb;for(var d=[],e=0;e<b.length;e+=3){var f=b[e],g=e+1<b.length,h=g?b[e+1]:0,m=e+2<b.length,l=m?b[e+2]:0,n=f>>2;f=(f&3)<<4|h>>4;h=(h&15)<<2|l>>6;l&=
63;m||(l=64,g||(h=64));d.push(c[n],c[f],c[h],c[l])}a.hash=d.join("")}return a}
;function tj(){var a=new Hd;(a=a.isAvailable()?new Nd(a,"yt.innertube"):null)||(a=new Id("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new Dd(a):null;this.l=document.domain||window.location.hostname}
tj.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,B()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(sd(b))}catch(f){return}else e=escape(b);b=this.l;Gb.set(""+a,e,c,"/",void 0===b?"youtube.com":b,!1)};
tj.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=Gb.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
tj.prototype.remove=function(a){this.f&&this.f.remove(a);var b=this.l;Gb.remove(""+a,"/",void 0===b?"youtube.com":b)};var uj=new tj;function vj(a,b,c,d){if(d)return null;d=uj.get("nextId",!0)||1;var e=uj.get("requests",!0)||{};e[d]={method:a,request:b,authState:sj(c),requestTime:Math.round(oi())};uj.set("nextId",d+1,86400,!0);uj.set("requests",e,86400,!0);return d}
function wj(a){var b=uj.get("requests",!0)||{};delete b[a];uj.set("requests",b,86400,!0)}
function xj(a){var b=uj.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(oi())-d.requestTime)){var e=d.authState;var f=sj(rj(!1));a:{var g=void 0;for(g in e)if(!(g in f)||e[g]!==f[g]){e=!1;break a}for(g in f)if(!(g in e)){e=!1;break a}e=!0}e&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(oi())),Si(a,d.method,e,{}));delete b[c]}}uj.set("requests",b,86400,!0)}}
;function yj(a){var b=this;this.f=a||{ad:X("INNERTUBE_API_KEY"),bd:X("INNERTUBE_API_VERSION"),cd:V("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),dd:X("INNERTUBE_CONTEXT_CLIENT_VERSION"),fd:X("INNERTUBE_CONTEXT_HL"),ed:X("INNERTUBE_CONTEXT_GL"),gd:X("INNERTUBE_HOST_OVERRIDE")||"",hd:!!V("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)};ui(function(){xj(b)},0,5E3)}
function Si(a,b,c,d){!V("VISITOR_DATA")&&.01>Math.random()&&wi(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json"},method:"POST",oa:c,Ib:"JSON",Gb:function(){},
Db:d.Gb,onSuccess:function(t,q){if(d.onSuccess)d.onSuccess(q)},
Cb:function(t){if(d.onSuccess)d.onSuccess(t)},
onError:function(t,q){if(d.onError)d.onError(q)},
ze:function(t){if(d.onError)d.onError(t)},
timeout:d.timeout,withCredentials:!0},f="",g=a.f.gd;g&&(f=g);g=a.f.hd||!1;var h=rj(g,f,d);Object.assign(e.headers,h);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var m=""+f+("/youtubei/"+a.f.bd+"/"+b)+"?alt=json&key="+a.f.ad,l;if(d.retry&&Y("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(l=vj(b,c,h,g))){var n=e.onSuccess,p=e.Cb;e.onSuccess=function(t,q){wj(l);n(t,q)};
c.Cb=function(t,q){wj(l);p(t,q)}}try{Y("use_fetch_for_op_xhr")?ij(m,e):(e.method="POST",e.oa||(e.oa={}),lj(m,e))}catch(t){if("InvalidAccessError"==t)l&&(wj(l),l=0),wi(Error("An extension is blocking network request."),"WARNING");
else throw t;}l&&ui(function(){xj(a)},0,5E3)}
;var zj=B().toString();var Aj;
if(!(Aj=y("ytLoggingTimeDocumentNonce_"))){var Bj;a:{if(window.crypto&&window.crypto.getRandomValues)try{var Cj=Array(16),Dj=new Uint8Array(16);window.crypto.getRandomValues(Dj);for(var Ej=0;Ej<Cj.length;Ej++)Cj[Ej]=Dj[Ej];Bj=Cj;break a}catch(a){}for(var Fj=Array(16),Gj=0;16>Gj;Gj++){for(var Hj=B(),Ij=0;Ij<Hj%23;Ij++)Fj[Gj]=Math.random();Fj[Gj]=Math.floor(256*Math.random())}if(zj)for(var Jj=1,Kj=0;Kj<zj.length;Kj++)Fj[Jj%16]=Fj[Jj%16]^Fj[(Jj-1)%16]/4^zj.charCodeAt(Kj),Jj++;Bj=Fj}for(var Lj=Bj,Mj=
[],Nj=0;Nj<Lj.length;Nj++)Mj.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(Lj[Nj]&63));Aj=Mj.join("")}var Oj=Aj;C("ytLoggingTimeDocumentNonce_",Oj);function Pj(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function Qj(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
C("yt_logging_screen.getRootVeType",function(a){return V(Qj(void 0===a?0:a),void 0)});
function Rj(a){a=void 0===a?0:a;var b=V(Pj(a));b||0!=a||(b=V("EVENT_ID"));return b?b:null}
C("yt_logging_screen.getCurrentCsn",Rj);
C("yt_logging_screen.setCurrentScreen",function(a,b,c){c=void 0===c?0:c;if(a!==V(Pj(c))||b!==V(Qj(c)))qi(Pj(c),a),qi(Qj(c),b),0==c&&(b=function(){setTimeout(function(){if(a){var d={clientDocumentNonce:Oj,clientScreenNonce:a},e={};e.eventTimeMs=Math.round(oi());e.foregroundHeartbeatScreenAssociated=d;d=String;var f=y("_lact",window);f=null==f?-1:Math.max(B()-f,0);e.context={lastActivityMs:d(f)};d=Ri("log_event");d.push(e);yj&&(Ji.log_event=new yj);d.length>=(Ai("web_logging_max_batch")||20)?Oi():Qi()}},
0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b())});function Sj(a,b,c){for(var d=0,e=0;e<a.length;++e)d=31*d+a.charCodeAt(e)>>>0;a="ST-"+d.toString(36);b=b?Sd(b):"";Gb.set(""+a,b,c||5,"/","youtube.com",!1)}
;function Tj(a,b,c,d,e){if(a&&e){var f=V("SBOX_SETTINGS"),g=V("SBOX_LABELS");f&&g&&(a=y("searchbox.yt.install")(a,b,c,f,g,Uj,d))&&e(a,100)}}
function Vj(a,b){var c=V("EVENT_ID");if(c){b.ei=c;b.feature="web-masthead-search";c=(c=document.getElementById("masthead-search"))?c.dataset?c.dataset[si()]:c.getAttribute("data-clicktracking"):null;b.ved=c||"";c=a;var d=V("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=Qd(K(3,window.location.href));e&&d.push(e);e=Qd(K(3,c));if(0<=Fa(d,e)||!e&&0==c.lastIndexOf("/",0))if(Y("autoescape_tempdata_url")&&(d=document.createElement("a"),Sb(d,c),c=d.href),c){e=c.match(Pd);c=e[5];d=e[6];e=e[7];var f="";c&&(f+=c);d&&
(f+="?"+d);e&&(f+="#"+e);c=f;d=c.indexOf("#");if(c=0>d?c:c.substr(0,d)){if(b.itct||b.ved)b.csn=b.csn||Rj();if(g){var g=parseInt(g,10);isFinite(g)&&0<g&&Sj(c,b,g)}else Sj(c,b)}}}}
function Uj(a,b){Vj(a,b?{feature:b}:{});var c=y("yt.window.navigate");try{c(a)}catch(g){var d=void 0===d?{}:d;var e=void 0===e?"":e;var f=void 0===f?window:f;c=f.location;d=Td(a,d)+e;d=d instanceof H?d:Lb(d);c.href=Jb(d)}}
function Wj(a){for(var b=document.getElementById("masthead-search"),c=[],d=b.elements,e,f=0;e=d[f];f++)if(e.form==b&&!e.disabled&&"FIELDSET"!=e.tagName){var g=e.name;switch(e.type.toLowerCase()){case "file":case "submit":case "reset":case "button":break;case "select-multiple":e=Lc(e);if(null!=e)for(var h,m=0;h=e[m];m++)Kc(c,g,h);break;default:h=Lc(e),null!=h&&Kc(c,g,h)}}d=b.getElementsByTagName("INPUT");for(f=0;e=d[f];f++)e.form==b&&"image"==e.type.toLowerCase()&&(g=e.name,Kc(c,g,e.value),Kc(c,g+
".x","0"),Kc(c,g+".y","0"));c=c.join("&").replace(/%20/g,"+");b.hasAttribute("data-is-crosswalk")&&"0"!=b.getAttribute("data-is-crosswalk")&&(c+="&sp=mAEB");b=b.action+"?"+c;Vj(b,a);a=!!V("SPF_SEARCH_BOX");if(!y("ytspf.enabled")||!a)return!0;a=y("yt.window.navigate");try{a(b)}catch(l){return!0}return!1}
;C("searchbox.yt.install",function(a,b,c,d,e,f,g){Ie||(Ie=new li);Ie.install(a,b,c,d,e,f,g)});
C("yt.www.masthead.searchbox.init",function(){var a=document.getElementById("masthead-search");Tj(a,a.search_query,document.getElementById("search-btn"),Wj,window.setTimeout)});
C("yt.www.masthead.searchbox.initPolymer",function(a,b,c,d){Tj(a,b,c,d,zi.f)});}).call(this);
