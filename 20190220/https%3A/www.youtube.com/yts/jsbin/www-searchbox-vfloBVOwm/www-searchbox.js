(function(){var h;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
function ba(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
var ca="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},da;
if("function"==typeof Object.setPrototypeOf)da=Object.setPrototypeOf;else{var ea;a:{var fa={kc:!0},ha={};try{ha.__proto__=fa;ea=ha.kc;break a}catch(a){}ea=!1}da=ea?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ia=da;
function ja(a,b){a.prototype=ca(b.prototype);a.prototype.constructor=a;if(ia)ia(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.X=b.prototype}
var ka="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},la="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function p(a,b){if(b){for(var c=la,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ka(c,d,{configurable:!0,writable:!0,value:f})}}
function ma(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
p("String.prototype.startsWith",function(a){return a?a:function(a,c){var b=ma(this,a,"startsWith");a+="";for(var e=b.length,f=a.length,g=Math.max(0,Math.min(c|0,b.length)),k=0;k<f&&g<e;)if(b[g++]!=a[k++])return!1;return k>=f}});
p("String.prototype.endsWith",function(a){return a?a:function(a,c){var b=ma(this,a,"endsWith");a+="";void 0===c&&(c=b.length);for(var e=Math.max(0,Math.min(c|0,b.length)),f=a.length;0<f&&0<e;)if(b[--e]!=a[--f])return!1;return 0>=f}});
function na(){na=function(){};
la.Symbol||(la.Symbol=oa)}
var oa=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
function pa(){na();var a=la.Symbol.iterator;a||(a=la.Symbol.iterator=la.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&ka(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return qa(aa(this))}});
pa=function(){}}
function qa(a){pa();a={next:a};a[la.Symbol.iterator]=function(){return this};
return a}
function r(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ra="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)r(d,e)&&(a[e]=d[e])}return a};
p("Object.assign",function(a){return a||ra});
p("Object.is",function(a){return a?a:function(a,c){return a===c?0!==a||1/a===1/c:a!==a&&c!==c}});
p("Array.prototype.includes",function(a){return a?a:function(a,c){var b=this;b instanceof String&&(b=String(b));var e=b.length,f=c||0;for(0>f&&(f=Math.max(f+e,0));f<e;f++){var g=b[f];if(g===a||Object.is(g,a))return!0}return!1}});
p("String.prototype.includes",function(a){return a?a:function(a,c){return-1!==ma(this,a,"includes").indexOf(a,c||0)}});
p("WeakMap",function(a){function b(a){this.c=(g+=Math.random()+1).toString();if(a){a=ba(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}}
function c(){}
function d(a){r(a,f)||ka(a,f,{value:new c})}
function e(a){var b=Object[a];b&&(Object[a]=function(a){if(a instanceof c)return a;d(a);return b(a)})}
if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),d=new a([[b,2],[c,3]]);if(2!=d.get(b)||3!=d.get(c))return!1;d["delete"](b);d.set(c,4);return!d.has(b)&&4==d.get(c)}catch(l){return!1}}())return a;
var f="$jscomp_hidden_"+Math.random();e("freeze");e("preventExtensions");e("seal");var g=0;b.prototype.set=function(a,b){d(a);if(!r(a,f))throw Error("WeakMap key fail: "+a);a[f][this.c]=b;return this};
b.prototype.get=function(a){return r(a,f)?a[f][this.c]:void 0};
b.prototype.has=function(a){return r(a,f)&&r(a[f],this.c)};
b.prototype["delete"]=function(a){return r(a,f)&&r(a[f],this.c)?delete a[f][this.c]:!1};
return b});
p("Map",function(a){function b(){var a={};return a.previous=a.next=a.head=a}
function c(a,b){var c=a.c;return qa(function(){if(c){for(;c.head!=a.c;)c=c.previous;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})}
function d(a,b){var c=b&&typeof b;"object"==c||"function"==c?f.has(b)?c=f.get(b):(c=""+ ++g,f.set(b,c)):c="p_"+b;var d=a.i[c];if(d&&r(a.i,c))for(var e=0;e<d.length;e++){var k=d[e];if(b!==b&&k.key!==k.key||b===k.key)return{id:c,list:d,index:e,R:k}}return{id:c,list:d,index:-1,R:void 0}}
function e(a){this.i={};this.c=b();this.size=0;if(a){a=ba(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a(ba([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?!1:!0}catch(q){return!1}}())return a;
pa();var f=new WeakMap;e.prototype.set=function(a,b){a=0===a?0:a;var c=d(this,a);c.list||(c.list=this.i[c.id]=[]);c.R?c.R.value=b:(c.R={next:this.c,previous:this.c.previous,head:this.c,key:a,value:b},c.list.push(c.R),this.c.previous.next=c.R,this.c.previous=c.R,this.size++);return this};
e.prototype["delete"]=function(a){a=d(this,a);return a.R&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.i[a.id],a.R.previous.next=a.R.next,a.R.next.previous=a.R.previous,a.R.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.i={};this.c=this.c.previous=b();this.size=0};
e.prototype.has=function(a){return!!d(this,a).R};
e.prototype.get=function(a){return(a=d(this,a).R)&&a.value};
e.prototype.entries=function(){return c(this,function(a){return[a.key,a.value]})};
e.prototype.keys=function(){return c(this,function(a){return a.key})};
e.prototype.values=function(){return c(this,function(a){return a.value})};
e.prototype.forEach=function(a,b){for(var c=this.entries(),d;!(d=c.next()).done;)d=d.value,a.call(b,d[1],d[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
p("Set",function(a){function b(a){this.c=new Map;if(a){a=ba(a);for(var b;!(b=a.next()).done;)this.add(b.value)}this.size=this.c.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),d=new a(ba([b]));if(!d.has(b)||1!=d.size||d.add(b)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=b||f.value[1]!=b)return!1;f=e.next();return f.done||f.value[0]==b||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
pa();b.prototype.add=function(a){a=0===a?0:a;this.c.set(a,a);this.size=this.c.size;return this};
b.prototype["delete"]=function(a){a=this.c["delete"](a);this.size=this.c.size;return a};
b.prototype.clear=function(){this.c.clear();this.size=0};
b.prototype.has=function(a){return this.c.has(a)};
b.prototype.entries=function(){return this.c.entries()};
b.prototype.values=function(){return this.c.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(a,b){var c=this;this.c.forEach(function(d){return a.call(b,d,d,c)})};
return b});
var t=this;function u(a){return void 0!==a}
function v(a){return"string"==typeof a}
function sa(a){return"number"==typeof a}
function w(a,b){for(var c=a.split("."),d=b||t,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function ta(){}
function ua(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function va(a){return"array"==ua(a)}
function wa(a){var b=ua(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function xa(a){return"function"==ua(a)}
function ya(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function za(a,b,c){return a.call.apply(a.bind,arguments)}
function Aa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function x(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?x=za:x=Aa;return x.apply(null,arguments)}
function Ba(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var y=Date.now||function(){return+new Date};
function z(a,b){var c=a.split("."),d=t;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&u(b)?d[e]=b:d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}}
function A(a,b){function c(){}
c.prototype=b.prototype;a.X=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.ee=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;var B=window;var Ca=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(v(a))return v(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},C=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=v(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Da=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=v(a)?a.split(""):a,k=0;k<d;k++)if(k in g){var n=g[k];
b.call(c,n,k,a)&&(e[f++]=n)}return e},Ea=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
C(a,function(c,f){d=b.call(void 0,d,c,f,a)});
return d};
function Fa(a,b){var c=Ca(a,b),d;(d=0<=c)&&Array.prototype.splice.call(a,c,1);return d}
function Ga(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Ha(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(wa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;var Ia=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},Ja=/&/g,Ka=/</g,La=/>/g,Ma=/"/g,Oa=/'/g,Pa=/\x00/g,Qa=/[\x00&<>"']/;
function Ra(){return-1!=Sa.toLowerCase().indexOf("webkit")}
function Ta(a,b){for(var c=0,d=Ia(String(a)).split("."),e=Ia(String(b)).split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){var k=d[g]||"",n=e[g]||"";do{k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];n=/(\d*)(\D*)(.*)/.exec(n)||["","","",""];if(0==k[0].length&&0==n[0].length)break;c=Ua(0==k[1].length?0:parseInt(k[1],10),0==n[1].length?0:parseInt(n[1],10))||Ua(0==k[2].length,0==n[2].length)||Ua(k[2],n[2]);k=k[3];n=n[3]}while(0==c)}return c}
function Ua(a,b){return a<b?-1:a>b?1:0}
;function Va(a){return decodeURIComponent(a.replace(/\+/g," "))}
;var Sa;a:{var Wa=t.navigator;if(Wa){var Xa=Wa.userAgent;if(Xa){Sa=Xa;break a}}Sa=""}function D(a){return-1!=Sa.indexOf(a)}
function Ya(a){for(var b=RegExp("(\\w[\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?","g"),c=[],d;d=b.exec(a);)c.push([d[1],d[2],d[3]||void 0]);return c}
;function Za(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function $a(a,b){return null!==a&&b in a}
function ab(a){for(var b in a)return!1;return!0}
function bb(a){var b=ua(a);if("object"==b||"array"==b){if(xa(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=bb(a[c]);return b}return a}
var cb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function db(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<cb.length;f++)c=cb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function eb(){return D("Opera")}
function fb(){return D("Trident")||D("MSIE")}
function gb(){return D("Safari")&&!(hb()||D("Coast")||eb()||D("Edge")||D("Firefox")||D("FxiOS")||D("Silk")||D("Android"))}
function hb(){return(D("Chrome")||D("CriOS"))&&!D("Edge")}
function ib(){function a(a){a:{var b=d;for(var e=a.length,k=v(a)?a.split(""):a,n=0;n<e;n++)if(n in k&&b.call(void 0,k[n],n,a)){b=n;break a}b=-1}return c[0>b?null:v(a)?a.charAt(b):a[b]]||""}
var b=Sa;if(fb())return jb(b);b=Ya(b);var c={};C(b,function(a){c[a[0]]=a[1]});
var d=Ba($a,c);return eb()?a(["Version","Opera"]):D("Edge")?a(["Edge"]):hb()?a(["Chrome","CriOS"]):(b=b[2])&&b[1]||""}
function jb(a){var b=/rv: *([\d\.]*)/.exec(a);if(b&&b[1])return b[1];b="";var c=/MSIE +([\d\.]+)/.exec(a);if(c&&c[1])if(a=/Trident\/(\d.\d)/.exec(a),"7.0"==c[1])if(a&&a[1])switch(a[1]){case "4.0":b="8.0";break;case "5.0":b="9.0";break;case "6.0":b="10.0";break;case "7.0":b="11.0"}else b="7.0";else b=c[1];return b}
;function kb(){return D("Gecko")&&!(Ra()&&!D("Edge"))&&!(D("Trident")||D("MSIE"))&&!D("Edge")}
;function lb(a){lb[" "](a);return a}
lb[" "]=ta;var mb=eb(),nb=fb(),ob=D("Edge"),pb=kb(),qb=Ra()&&!D("Edge");function sb(){var a=t.document;return a?a.documentMode:void 0}
var tb;a:{var ub="",vb=function(){var a=Sa;if(pb)return/rv:([^\);]+)(\)|;)/.exec(a);if(ob)return/Edge\/([\d\.]+)/.exec(a);if(nb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(qb)return/WebKit\/(\S+)/.exec(a);if(mb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
vb&&(ub=vb?vb[1]:"");if(nb){var wb=sb();if(null!=wb&&wb>parseFloat(ub)){tb=String(wb);break a}}tb=ub}var xb=tb,yb={},zb;var Ab=t.document;zb=Ab&&nb?sb()||("CSS1Compat"==Ab.compatMode?parseInt(xb,10):5):void 0;var Bb=null,Cb=null;function Db(a){this.c=a||{cookie:""}}
h=Db.prototype;h.isEnabled=function(){return navigator.cookieEnabled};
h.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');u(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(y()+1E3*c)).toUTCString();this.c.cookie=a+"="+b+e+d+c+f};
h.get=function(a,b){for(var c=a+"=",d=(this.c.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Ia(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
h.remove=function(a,b,c){var d=u(this.get(a));this.set(a,"",0,b,c);return d};
h.isEmpty=function(){return!this.c.cookie};
h.clear=function(){for(var a=(this.c.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=Ia(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Eb=new Db("undefined"==typeof document?null:document);function Fb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function E(){this.c="";this.i=Gb}
E.prototype.Ua=!0;E.prototype.Ra=function(){return this.c};
E.prototype.yb=!0;E.prototype.Oa=function(){return 1};
function Hb(a){return a instanceof E&&a.constructor===E&&a.i===Gb?a.c:"type_error:SafeUrl"}
var Ib=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Jb(a){if(a instanceof E)return a;a="object"==typeof a&&a.Ua?a.Ra():String(a);Ib.test(a)||(a="about:invalid#zClosurez");return Kb(a)}
var Gb={};function Kb(a){var b=new E;b.c=a;return b}
Kb("about:blank");function F(){this.c="";this.f=Lb;this.i=null}
F.prototype.yb=!0;F.prototype.Oa=function(){return this.i};
F.prototype.Ua=!0;F.prototype.Ra=function(){return this.c};
function Mb(a){return a instanceof F&&a.constructor===F&&a.f===Lb?a.c:"type_error:SafeHtml"}
var Lb={};function Nb(a,b){var c=new F;c.c=a;c.i=b;return c}
Nb("<!DOCTYPE html>",0);Nb("",0);Nb("<br>",0);var Ob=Fb(function(){var a=document.createElement("div");a.innerHTML="<div><div></div></div>";var b=a.firstChild.firstChild;a.innerHTML="";return!b.parentElement});
function Pb(a,b){var c=b instanceof E?b:Jb(b);a.href=Hb(c)}
;function Qb(a,b){this.width=a;this.height=b}
h=Qb.prototype;h.clone=function(){return new Qb(this.width,this.height)};
h.aspectRatio=function(){return this.width/this.height};
h.isEmpty=function(){return!(this.width*this.height)};
h.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
h.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
h.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Rb(){return!(D("iPad")||D("Android")&&!D("Mobile")||D("Silk"))&&(D("iPod")||D("iPhone")||D("Android")||D("IEMobile"))}
;function Sb(a){var b=Tb;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Ub(){var a=[];Sb(function(b){a.push(b)});
return a}
var Tb={Rd:"allow-forms",Sd:"allow-modals",Td:"allow-orientation-lock",Ud:"allow-pointer-lock",Vd:"allow-popups",Wd:"allow-popups-to-escape-sandbox",Xd:"allow-presentation",Yd:"allow-same-origin",Zd:"allow-scripts",ae:"allow-top-navigation",be:"allow-top-navigation-by-user-activation"},Vb=Fb(function(){return Ub()});
function Wb(){var a=document.createElement("IFRAME").sandbox,b=a&&a.supports;if(!b)return{};var c={};C(Vb(),function(d){b.call(a,d)&&(c[d]=!0)});
return c}
;function Xb(){var a=document.body||document.documentElement;a:{var b=9==a.nodeType?a:a.ownerDocument||a.document;if(b.defaultView&&b.defaultView.getComputedStyle&&(b=b.defaultView.getComputedStyle(a,null))){b=b.direction||b.getPropertyValue("direction")||"";break a}b=""}return b||(a.currentStyle?a.currentStyle.direction:null)||a.style&&a.style.direction}
;var Yb=(new Date).getTime();function Zb(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function $b(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;l=m=0}
function b(a){for(var b=g,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];var d=e[1],f=e[2],k=e[3],l=e[4];for(c=0;80>c;c++){if(40>c)if(20>c){var m=k^d&(f^k);var n=1518500249}else m=d^f^k,n=1859775393;else 60>c?(m=d&f|k&(d|f),n=2400959708):(m=d^f^k,n=3395469782);m=((a<<5|a>>>27)&4294967295)+m+l+n+b[c]&4294967295;l=k;k=f;f=(d<<30|d>>>2)&4294967295;d=a;a=m}e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=
e[2]+f&4294967295;e[3]=e[3]+k&4294967295;e[4]=e[4]+l&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,g=a.length;e<g;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==m)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,l+=64;for(;d<c;)if(f[m++]=a[d++],l++,64==m)for(m=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,l+=64}
function d(){var a=[],d=8*l;56>m?c(k,56-m):c(k,64-(m-56));for(var g=63;56<=g;g--)f[g]=d&255,d>>>=8;b(f);for(g=d=0;5>g;g++)for(var n=24;0<=n;n-=8)a[d++]=e[g]>>n&255;return a}
for(var e=[],f=[],g=[],k=[128],n=1;64>n;++n)k[n]=0;var m,l;a();return{reset:a,update:c,digest:d,nc:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}}
;function ac(a,b,c){var d=[],e=[];if(1==(va(c)?2:1))return e=[b,a],C(d,function(a){e.push(a)}),bc(e.join(" "));
var f=[],g=[];C(c,function(a){g.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];C(d,function(a){e.push(a)});
a=bc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function bc(a){var b=$b();b.update(a);return b.nc().toLowerCase()}
;function cc(a){var b=Zb(String(t.location.href)),c=t.__OVERRIDE_SID;null==c&&(c=(new Db(document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?t.__SAPISID:t.__APISID,null==b&&(b=(new Db(document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(t.location.href);return d&&b&&c?[c,ac(Zb(d),b,a||null)].join(" "):null}return null}
;function dc(a,b){this.f=a;this.g=b;this.i=0;this.c=null}
dc.prototype.get=function(){if(0<this.i){this.i--;var a=this.c;this.c=a.next;a.next=null}else a=this.f();return a};function ec(a){t.setTimeout(function(){throw a;},0)}
var fc;
function gc(){var a=t.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!D("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=x(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!fb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(u(c.next)){c=c.next;var a=c.ib;c.ib=null;a()}};
return function(a){d.next={ib:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){t.setTimeout(a,0)}}
;function hc(){this.i=this.c=null}
var jc=new dc(function(){return new ic},function(a){a.reset()});
hc.prototype.add=function(a,b){var c=jc.get();c.set(a,b);this.i?this.i.next=c:this.c=c;this.i=c};
hc.prototype.remove=function(){var a=null;this.c&&(a=this.c,this.c=this.c.next,this.c||(this.i=null),a.next=null);return a};
function ic(){this.next=this.scope=this.c=null}
ic.prototype.set=function(a,b){this.c=a;this.scope=b;this.next=null};
ic.prototype.reset=function(){this.next=this.scope=this.c=null};function kc(a){lc||mc();nc||(lc(),nc=!0);oc.add(a,void 0)}
var lc;function mc(){if(t.Promise&&t.Promise.resolve){var a=t.Promise.resolve(void 0);lc=function(){a.then(pc)}}else lc=function(){var a=pc;
!xa(t.setImmediate)||t.Window&&t.Window.prototype&&!D("Edge")&&t.Window.prototype.setImmediate==t.setImmediate?(fc||(fc=gc()),fc(a)):t.setImmediate(a)}}
var nc=!1,oc=new hc;function pc(){for(var a;a=oc.remove();){try{a.c.call(a.scope)}catch(c){ec(c)}var b=jc;b.g(a);100>b.i&&(b.i++,a.next=b.c,b.c=a)}nc=!1}
;function qc(){this.i=-1}
;function rc(){this.i=64;this.c=[];this.m=[];this.o=[];this.g=[];this.g[0]=128;for(var a=1;a<this.i;++a)this.g[a]=0;this.l=this.f=0;this.reset()}
A(rc,qc);rc.prototype.reset=function(){this.c[0]=1732584193;this.c[1]=4023233417;this.c[2]=2562383102;this.c[3]=271733878;this.c[4]=3285377520;this.l=this.f=0};
function sc(a,b,c){c||(c=0);var d=a.o;if(v(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.c[0];c=a.c[1];var g=a.c[2],k=a.c[3],n=a.c[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=k^c&(g^k);var m=1518500249}else f=c^g^k,m=1859775393;else 60>e?(f=c&g|k&(c|g),m=2400959708):(f=c^g^k,m=
3395469782);f=(b<<5|b>>>27)+f+n+m+d[e]&4294967295;n=k;k=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.c[0]=a.c[0]+b&4294967295;a.c[1]=a.c[1]+c&4294967295;a.c[2]=a.c[2]+g&4294967295;a.c[3]=a.c[3]+k&4294967295;a.c[4]=a.c[4]+n&4294967295}
rc.prototype.update=function(a,b){if(null!=a){u(b)||(b=a.length);for(var c=b-this.i,d=0,e=this.m,f=this.f;d<b;){if(0==f)for(;d<=c;)sc(this,a,d),d+=this.i;if(v(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.i){sc(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.i){sc(this,e);f=0;break}}this.f=f;this.l+=b}};
rc.prototype.digest=function(){var a=[],b=8*this.l;56>this.f?this.update(this.g,56-this.f):this.update(this.g,this.i-(this.f-56));for(var c=this.i-1;56<=c;c--)this.m[c]=b&255,b/=256;sc(this,this.m);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.c[c]>>d&255,++b;return a};function tc(){this.f=this.f;this.l=this.l}
tc.prototype.f=!1;tc.prototype.dispose=function(){this.f||(this.f=!0,this.aa())};
tc.prototype.aa=function(){if(this.l)for(;this.l.length;)this.l.shift()()};function uc(a){if(a.classList)return a.classList;a=a.className;return v(a)&&a.match(/\S+/g)||[]}
function vc(a,b){if(a.classList)var c=a.classList.contains(b);else c=uc(a),c=0<=Ca(c,b);return c}
function wc(a,b){a.classList?a.classList.add(b):vc(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function xc(a,b){a.classList?a.classList.remove(b):vc(a,b)&&(a.className=Da(uc(a),function(a){return a!=b}).join(" "))}
;var yc="StopIteration"in t?t.StopIteration:{message:"StopIteration",stack:""};function zc(){}
zc.prototype.next=function(){throw yc;};
zc.prototype.Y=function(){return this};
function Ac(a){if(a instanceof zc)return a;if("function"==typeof a.Y)return a.Y(!1);if(wa(a)){var b=0,c=new zc;c.next=function(){for(;;){if(b>=a.length)throw yc;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Bc(a,b){if(wa(a))try{C(a,b,void 0)}catch(c){if(c!==yc)throw c;}else{a=Ac(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==yc)throw c;}}}
function Cc(a){if(wa(a))return Ga(a);a=Ac(a);var b=[];Bc(a,function(a){b.push(a)});
return b}
;function Dc(a,b){this.f={};this.c=[];this.g=this.i=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Dc)for(c=Ec(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Ec(a){Fc(a);return a.c.concat()}
h=Dc.prototype;h.equals=function(a,b){if(this===a)return!0;if(this.i!=a.i)return!1;var c=b||Gc;Fc(this);for(var d,e=0;d=this.c[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function Gc(a,b){return a===b}
h.isEmpty=function(){return 0==this.i};
h.clear=function(){this.f={};this.g=this.i=this.c.length=0};
h.remove=function(a){return Object.prototype.hasOwnProperty.call(this.f,a)?(delete this.f[a],this.i--,this.g++,this.c.length>2*this.i&&Fc(this),!0):!1};
function Fc(a){if(a.i!=a.c.length){for(var b=0,c=0;b<a.c.length;){var d=a.c[b];Object.prototype.hasOwnProperty.call(a.f,d)&&(a.c[c++]=d);b++}a.c.length=c}if(a.i!=a.c.length){var e={};for(c=b=0;b<a.c.length;)d=a.c[b],Object.prototype.hasOwnProperty.call(e,d)||(a.c[c++]=d,e[d]=1),b++;a.c.length=c}}
h.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.f,a)?this.f[a]:b};
h.set=function(a,b){Object.prototype.hasOwnProperty.call(this.f,a)||(this.i++,this.c.push(a),this.g++);this.f[a]=b};
h.forEach=function(a,b){for(var c=Ec(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
h.clone=function(){return new Dc(this)};
h.Y=function(a){Fc(this);var b=0,c=this.g,d=this,e=new zc;e.next=function(){if(c!=d.g)throw Error("The map has changed since the iterator was created");if(b>=d.c.length)throw yc;var e=d.c[b++];return a?e:d.f[e]};
return e};function Hc(a,b,c){a.push(encodeURIComponent(b)+"="+encodeURIComponent(c))}
function Ic(a){var b=a.type;switch(v(b)&&b.toLowerCase()){case "checkbox":case "radio":return a.checked?a.value:null;case "select-one":return b=a.selectedIndex,0<=b?a.options[b].value:null;case "select-multiple":b=[];for(var c,d=0;c=a.options[d];d++)c.selected&&b.push(c.value);return b.length?b:null;default:return null!=a.value?a.value:null}}
;var Jc=!nb||9<=Number(zb),Kc;if(Kc=nb)Kc=!(Object.prototype.hasOwnProperty.call(yb,"9")?yb["9"]:yb["9"]=0<=Ta(xb,"9"));var Lc=Kc,Mc=function(){if(!t.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{t.addEventListener("test",ta,b),t.removeEventListener("test",ta,b)}catch(c){}return a}();function Nc(a,b){this.type=a;this.c=this.target=b;this.i=!1;this.Qb=!0}
Nc.prototype.stopPropagation=function(){this.i=!0};
Nc.prototype.preventDefault=function(){this.Qb=!1};function Oc(a,b){Nc.call(this,a?a.type:"");this.relatedTarget=this.c=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.f=null;a&&this.init(a,b)}
A(Oc,Nc);var Pc={2:"touch",3:"pen",4:"mouse"};
Oc.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.c=b;var e=a.relatedTarget;if(e){if(pb){a:{try{lb(e.nodeName);var f=!0;break a}catch(g){}f=!1}f||(e=null)}}else"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=v(a.pointerType)?a.pointerType:Pc[a.pointerType]||"";this.state=a.state;this.f=a;a.defaultPrevented&&this.preventDefault()};
Oc.prototype.stopPropagation=function(){Oc.X.stopPropagation.call(this);this.f.stopPropagation?this.f.stopPropagation():this.f.cancelBubble=!0};
Oc.prototype.preventDefault=function(){Oc.X.preventDefault.call(this);var a=this.f;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Lc)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Qc="closure_listenable_"+(1E6*Math.random()|0),Rc=0;function Sc(a,b,c,d,e){this.listener=a;this.c=null;this.src=b;this.type=c;this.capture=!!d;this.wa=e;this.key=++Rc;this.ea=this.ra=!1}
function Tc(a){a.ea=!0;a.listener=null;a.c=null;a.src=null;a.wa=null}
;function Uc(a){this.src=a;this.listeners={};this.c=0}
Uc.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.c++);var g=Vc(a,b,d,e);-1<g?(b=a[g],c||(b.ra=!1)):(b=new Sc(b,this.src,f,!!d,e),b.ra=c,a.push(b));return b};
Uc.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Vc(e,b,c,d);return-1<b?(Tc(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.c--),!0):!1};
function Wc(a,b){var c=b.type;c in a.listeners&&Fa(a.listeners[c],b)&&(Tc(b),0==a.listeners[c].length&&(delete a.listeners[c],a.c--))}
function Vc(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.ea&&f.listener==b&&f.capture==!!c&&f.wa==d)return e}return-1}
;var Xc="closure_lm_"+(1E6*Math.random()|0),Yc={},Zc=0;function $c(a,b,c,d,e){if(d&&d.once)ad(a,b,c,d,e);else if(va(b))for(var f=0;f<b.length;f++)$c(a,b[f],c,d,e);else c=bd(c),a&&a[Qc]?a.c.add(String(b),c,!1,ya(d)?!!d.capture:!!d,e):cd(a,b,c,!1,d,e)}
function cd(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=ya(e)?!!e.capture:!!e,k=dd(a);k||(a[Xc]=k=new Uc(a));c=k.add(b,c,d,g,f);if(!c.c){d=ed();c.c=d;d.src=a;d.listener=c;if(a.addEventListener)Mc||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(fd(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Zc++}}
function ed(){var a=gd,b=Jc?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b}
function ad(a,b,c,d,e){if(va(b))for(var f=0;f<b.length;f++)ad(a,b[f],c,d,e);else c=bd(c),a&&a[Qc]?a.c.add(String(b),c,!0,ya(d)?!!d.capture:!!d,e):cd(a,b,c,!0,d,e)}
function hd(a,b,c,d,e){if(va(b))for(var f=0;f<b.length;f++)hd(a,b[f],c,d,e);else(d=ya(d)?!!d.capture:!!d,c=bd(c),a&&a[Qc])?a.c.remove(String(b),c,d,e):a&&(a=dd(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Vc(b,c,d,e)),(c=-1<a?b[a]:null)&&id(c))}
function id(a){if(!sa(a)&&a&&!a.ea){var b=a.src;if(b&&b[Qc])Wc(b.c,a);else{var c=a.type,d=a.c;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(fd(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Zc--;(c=dd(b))?(Wc(c,a),0==c.c&&(c.src=null,b[Xc]=null)):Tc(a)}}}
function fd(a){return a in Yc?Yc[a]:Yc[a]="on"+a}
function jd(a,b,c,d){var e=!0;if(a=dd(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.ea&&(f=kd(f,d),e=e&&!1!==f)}return e}
function kd(a,b){var c=a.listener,d=a.wa||a.src;a.ra&&id(a);return c.call(d,b)}
function gd(a,b){if(a.ea)return!0;if(!Jc){var c=b||w("window.event"),d=new Oc(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(n){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.c;f;f=f.parentNode)c.push(f);f=a.type;for(var g=c.length-1;!d.i&&0<=g;g--){d.c=c[g];var k=jd(c[g],f,!0,d);e=e&&k}for(g=0;!d.i&&g<c.length;g++)d.c=c[g],k=jd(c[g],f,!1,d),e=e&&k}return e}return kd(a,new Oc(b,this))}
function dd(a){a=a[Xc];return a instanceof Uc?a:null}
var ld="__closure_events_fn_"+(1E9*Math.random()>>>0);function bd(a){if(xa(a))return a;a[ld]||(a[ld]=function(b){return a.handleEvent(b)});
return a[ld]}
;function G(){tc.call(this);this.c=new Uc(this);this.u=this;this.m=null}
A(G,tc);G.prototype[Qc]=!0;G.prototype.addEventListener=function(a,b,c,d){$c(this,a,b,c,d)};
G.prototype.removeEventListener=function(a,b,c,d){hd(this,a,b,c,d)};
G.prototype.dispatchEvent=function(a){var b=this.m;if(b){var c=[];for(var d=1;b;b=b.m)c.push(b),++d}b=this.u;d=a.type||a;if(v(a))a=new Nc(a,b);else if(a instanceof Nc)a.target=a.target||b;else{var e=a;a=new Nc(d,b);db(a,e)}e=!0;if(c)for(var f=c.length-1;!a.i&&0<=f;f--){var g=a.c=c[f];e=md(g,d,!0,a)&&e}a.i||(g=a.c=b,e=md(g,d,!0,a)&&e,a.i||(e=md(g,d,!1,a)&&e));if(c)for(f=0;!a.i&&f<c.length;f++)g=a.c=c[f],e=md(g,d,!1,a)&&e;return e};
G.prototype.aa=function(){G.X.aa.call(this);if(this.c){var a=this.c,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Tc(d[e]);delete a.listeners[c];a.c--}}this.m=null};
function md(a,b,c,d){b=a.c.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.ea&&g.capture==c){var k=g.listener,n=g.wa||g.src;g.ra&&Wc(a.c,g);e=!1!==k.call(n,d)&&e}}return e&&0!=d.Qb}
;function nd(a){var b=[];od(new pd,a,b);return b.join("")}
function pd(){}
function od(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(va(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),od(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),qd(d,c),c.push(":"),od(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":qd(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var rd={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},sd=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function qd(a,b){b.push('"',a.replace(sd,function(a){var b=rd[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),rd[a]=b);return b}),'"')}
;function H(a){tc.call(this);this.o=1;this.g=[];this.m=0;this.c=[];this.i={};this.s=!!a}
A(H,tc);h=H.prototype;h.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.o;this.c[e]=a;this.c[e+1]=b;this.c[e+2]=c;this.o=e+3;d.push(e);return e};
h.fb=function(a){var b=this.c[a];if(b){var c=this.i[b];0!=this.m?(this.g.push(a),this.c[a+1]=ta):(c&&Fa(c,a),delete this.c[a],delete this.c[a+1],delete this.c[a+2])}return!!b};
h.xd=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.s)for(e=0;e<c.length;e++){var g=c[e];td(this.c[g+1],this.c[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.c[g+1].apply(this.c[g+2],d)}finally{if(this.m--,0<this.g.length&&0==this.m)for(;c=this.g.pop();)this.fb(c)}}return 0!=e}return!1};
function td(a,b,c){kc(function(){a.apply(b,c)})}
h.clear=function(a){if(a){var b=this.i[a];b&&(C(b,this.fb,this),delete this.i[a])}else this.c.length=0,this.i={}};
h.aa=function(){H.X.aa.call(this);this.clear();this.g.length=0};function ud(a){this.c=a}
ud.prototype.set=function(a,b){u(b)?this.c.set(a,nd(b)):this.c.remove(a)};
ud.prototype.get=function(a){try{var b=this.c.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
ud.prototype.remove=function(a){this.c.remove(a)};function vd(a){this.c=a}
A(vd,ud);function wd(a){this.data=a}
function xd(a){return!u(a)||a instanceof wd?a:new wd(a)}
vd.prototype.set=function(a,b){vd.X.set.call(this,a,xd(b))};
vd.prototype.i=function(a){a=vd.X.get.call(this,a);if(!u(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
vd.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,!u(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function yd(a){this.c=a}
A(yd,vd);yd.prototype.set=function(a,b,c){if(b=xd(b)){if(c){if(c<y()){yd.prototype.remove.call(this,a);return}b.expiration=c}b.creation=y()}yd.X.set.call(this,a,b)};
yd.prototype.i=function(a){var b=yd.X.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<y()||c&&c>y())yd.prototype.remove.call(this,a);else return b}};function zd(){}
;function Ad(){}
A(Ad,zd);Ad.prototype.clear=function(){var a=Cc(this.Y(!0)),b=this;C(a,function(a){b.remove(a)})};function Bd(a){this.c=a}
A(Bd,Ad);h=Bd.prototype;h.isAvailable=function(){if(!this.c)return!1;try{return this.c.setItem("__sak","1"),this.c.removeItem("__sak"),!0}catch(a){return!1}};
h.set=function(a,b){try{this.c.setItem(a,b)}catch(c){if(0==this.c.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
h.get=function(a){a=this.c.getItem(a);if(!v(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
h.remove=function(a){this.c.removeItem(a)};
h.Y=function(a){var b=0,c=this.c,d=new zc;d.next=function(){if(b>=c.length)throw yc;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!v(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
h.clear=function(){this.c.clear()};
h.key=function(a){return this.c.key(a)};function Cd(){var a=null;try{a=window.localStorage||null}catch(b){}this.c=a}
A(Cd,Bd);function Dd(a,b){this.i=a;this.c=null;if(nb&&!(9<=Number(zb))){Ed||(Ed=new Dc);this.c=Ed.get(a);this.c||(b?this.c=document.getElementById(b):(this.c=document.createElement("userdata"),this.c.addBehavior("#default#userData"),document.body.appendChild(this.c)),Ed.set(a,this.c));try{this.c.load(this.i)}catch(c){this.c=null}}}
A(Dd,Ad);var Fd={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Ed=null;function Gd(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(a){return Fd[a]})}
h=Dd.prototype;h.isAvailable=function(){return!!this.c};
h.set=function(a,b){this.c.setAttribute(Gd(a),b);Hd(this)};
h.get=function(a){a=this.c.getAttribute(Gd(a));if(!v(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
h.remove=function(a){this.c.removeAttribute(Gd(a));Hd(this)};
h.Y=function(a){var b=0,c=this.c.XMLDocument.documentElement.attributes,d=new zc;d.next=function(){if(b>=c.length)throw yc;var d=c[b++];if(a)return decodeURIComponent(d.nodeName.replace(/\./g,"%")).substr(1);d=d.nodeValue;if(!v(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
h.clear=function(){for(var a=this.c.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Hd(this)};
function Hd(a){try{a.c.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Id(a,b){this.i=a;this.c=b+"::"}
A(Id,Ad);Id.prototype.set=function(a,b){this.i.set(this.c+a,b)};
Id.prototype.get=function(a){return this.i.get(this.c+a)};
Id.prototype.remove=function(a){this.i.remove(this.c+a)};
Id.prototype.Y=function(a){var b=this.i.Y(!0),c=this,d=new zc;d.next=function(){for(var d=b.next();d.substr(0,c.c.length)!=c.c;)d=b.next();return a?d.substr(c.c.length):c.i.get(d)};
return d};function Jd(a,b){G.call(this);this.g=a||1;this.i=b||t;this.o=x(this.Od,this);this.s=y()}
A(Jd,G);h=Jd.prototype;h.enabled=!1;h.U=null;h.setInterval=function(a){this.g=a;this.U&&this.enabled?(this.stop(),this.start()):this.U&&this.stop()};
h.Od=function(){if(this.enabled){var a=y()-this.s;0<a&&a<.8*this.g?this.U=this.i.setTimeout(this.o,this.g-a):(this.U&&(this.i.clearTimeout(this.U),this.U=null),this.dispatchEvent("tick"),this.enabled&&(this.stop(),this.start()))}};
h.start=function(){this.enabled=!0;this.U||(this.U=this.i.setTimeout(this.o,this.g),this.s=y())};
h.stop=function(){this.enabled=!1;this.U&&(this.i.clearTimeout(this.U),this.U=null)};
h.aa=function(){Jd.X.aa.call(this);this.stop();delete this.i};var Kd=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function I(a){return a?decodeURI(a):a}
function J(a,b){return b.match(Kd)[a]||null}
function Ld(a,b,c){if(va(b))for(var d=0;d<b.length;d++)Ld(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Md(a){var b=[],c;for(c in a)Ld(c,a[c],b);return b.join("&")}
function Nd(a,b){var c=Md(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
;var Od=/^[6-9]$/,Pd=/<\/?(?:b|em)>/gi;function Qd(a){this.c=a}
var Rd=new Qd({});function Sd(a,b,c,d,e,f){var g;a instanceof F?g=a:g=Nb(a,null);this.s=g;this.c=b;this.i=c;this.m=d;this.f=e;this.l=f||Rd;this.g=!1;switch(this.m){case 0:case 32:case 38:case 400:case 407:case 35:case 33:case 41:case 34:case 44:case 45:case 40:case 46:case 56:case 30:case 94:case 92:case 93:case 411:case 410:case 71:this.g=!0}}
Sd.prototype.getHtml=function(){return Mb(this.s)};
Sd.prototype.o=function(){return this.i};
Sd.prototype.M=function(){return this.m};var Td=/^\s/,Ud=/\s+/,Vd=/\s+/g,Wd=/^\s+|\s+$/g,Xd=/^\s+$/,Yd=/<[^>]*>/g,Zd=/&nbsp;/g,$d=/&#x3000;/g,ae=[/&/g,/&amp;/g,/</g,/&lt;/g,/>/g,/&gt;/g,/"/g,/&quot;/g,/'/g,/&#39;/g,/{/g,/&#123;/g],be=document.getElementsByTagName("head")[0],ce=0,de=1;function ee(a){var b={};if(a)for(var c=0;c<a.length;++c)b[a[c]]=!0;return b}
function fe(a,b){function c(){return b}
void 0===b&&(b=a);return{va:c,tb:function(){return a},
Cc:c,re:function(){return a<b},
equals:function(c){return c&&a==c.tb()&&b==c.Cc()}}}
function K(a,b,c,d){if(null==b||""===b){if(!d)return;b=""}c.push(a+"="+encodeURIComponent(String(b)))}
function ge(a,b){var c=[],d;for(d in a)K(d,a[d],c,b);return c.join("&")}
function he(a){var b={},c=Math.max(a.indexOf("?"),a.indexOf("#"));a=a.substr(c+1);if(0<=c&&a){c=a.split("&");a=0;for(var d;a<c.length;++a)if(d=c[a])d=d.split("="),b[d[0]]=d[1]||""}return b}
function ie(a){return!!a&&!Xd.test(a)}
function je(a){for(var b=ae.length,c=0;c<b;c+=2)a=a.replace(ae[c],ae[c+1].source);return a}
function ke(a){for(var b=ae.length,c=0;c<b;c+=2)a=a.replace(ae[c+1],ae[c].source);a=a.replace(Zd," ");return a.replace($d,"\u3000")}
function le(a,b){return a&&(-1<a.indexOf(" ")||Ud.test(a))?(a=a.replace(Vd," "),a.replace(b?Wd:Td,"")):a}
function me(a,b,c){c&&(a=a.toLowerCase(),b=b.toLowerCase());return b.length<=a.length&&a.substring(0,b.length)==b}
function ne(){}
function oe(a){var b=pe;if(b.indexOf)return b.indexOf(a);for(var c=0,d=b.length;c<d;++c)if(b[c]===a)return c;return-1}
function qe(){return 0}
function re(a){var b={},c;for(c in a)b[c]=a[c];return b}
function se(a,b){var c=a+"";b.length&&(c+="i"+b.join("i"),c+="k"+(-1!=Ca(b,173)?14:1));return c}
;function te(a,b,c){this.c=a;this.D=b;this.w=c||"";this.o=(ce++).toString(36);this.u=this.c.toLowerCase();this.i=le(this.u);this.C={};this.s={};this.l=this.B=this.g=!1;this.A=1}
te.prototype.getId=function(){return this.o};
function ue(a){a=parseInt(a.o,36);return isNaN(a)?-1:a}
function ve(a,b,c,d){a.g||(a.C[b]=c,d&&(a.s[b]=c))}
;function we(a,b,c,d,e,f){this.i=a;this.c=b;this.f=c;this.l=d;this.g=e;this.o=f;this.m=!0;this.c?this.c.length&&33==this.c[0].M()&&(this.g=this.m=!1):this.c=[];this.f||(this.f=Rd)}
we.prototype.M=function(){return this.m};function xe(){}
xe.prototype.search=function(){};
xe.prototype.redirect=function(){};
xe.prototype.Tb=function(){return""};
xe.prototype.Ab=function(){};function ye(){this.i={};this.c={}}
ye.prototype.set=function(a,b){this.i[a]=b};
ye.prototype.has=function(a){return!!this.i[a]};
function L(a,b,c){b in a.c||(a.c[b]=[]);a.c[b].push(c)}
;function ze(a,b,c,d,e,f){this.s=a;this.u=b;this.w=c;this.l=d;this.f=e;this.m=f;this.o={};this.g={};this.c=[];this.i=!1;a=this.u;d=a.i;for(var g in d)if(b=g,c=d[b])this.o[b]=c,this.c.push(c);a=a.c;for(g in a){b=g;d=c=a[b];e=this.g[b]||[];for(f=0;f<d.length;++f)if(c=d[f])e.push(c),this.c.push(c);this.g[b]=e}this.c.sort(Ae);for(g=0;a=this.c[g++];)a.S(this.w,this.l);this.s.Ab(this.l);this.l.lc();for(g=0;a=this.c[g++];)a.F(this);for(g=0;a=this.c[g++];)a.setup(this.m);for(g=0;a=this.c[g++];)a.ca(this.m);
for(g=0;a=this.c[g++];)a.G(this.m);this.i=!0}
var pe=[127,551,149,134,494,123,121,126,553,118,115,128,160,173,119,116,152,153,129,120,374,124,158,155,131,130,147,570,141,143,138,144,139,140,135,136];function Be(a){if(a.i){for(var b=0,c;c=a.c[b++];)c.W();a.i=!1}}
ze.prototype.isActive=function(){return this.i};
ze.prototype.get=function(a){return this.o[a]};
function M(a,b){return a.g[b]||[]}
function Ae(a,b){var c=oe(a.M()),d=oe(b.M());return 0>c?1:0>d?-1:c-d}
;function N(a){this.i=a}
h=N.prototype;h.S=function(){};
h.F=function(){};
h.setup=function(){};
h.ca=function(){};
h.G=function(){};
h.M=function(){return this.i};
h.W=function(){};var Ce;function De(){this.i=153}
ja(De,N);function Ee(a,b){a.length&&b.push({M:function(){return 507},
position:2})}
;function Fe(a){this.m=a}
Fe.prototype.M=function(){return this.m};
Fe.prototype.isSelectable=function(){return!0};function O(a){this.i=152;this.l=a}
A(O,N);O.prototype.Aa=ne;var Ge=fb(),He=Ge&&0<=Ta(ib(),10),Ie=kb();Ie&&ib();var Je=eb(),Ke=Ra()&&!D("Edge"),Le=gb(),Me=hb(),Ne=Rb()&&gb(),Oe=D("Android"),Pe=D("Macintosh"),Qe=Rb();var Re=void 0!=document.documentElement.style.opacity,Se={rtl:"right",ltr:"left"};function Te(a,b){try{if(a.setSelectionRange)a.setSelectionRange(b,b);else if(a.createTextRange){var c=a.createTextRange();c.collapse(!0);c.moveStart("character",b);c.select()}}catch(d){}}
function Ue(a){for(var b=0,c=0;a;){b+=a.offsetTop;c+=a.offsetLeft;try{a=a.offsetParent}catch(d){a=null}}return{Ea:b,Z:c}}
function Ve(a){try{return We(a).activeElement==a}catch(b){}return!1}
function P(a,b){var c=document.createElement(a);b&&(c.className=b);return c}
function Q(a){return P("div",a)}
function Xe(a,b){a.dir!=b&&(a.dir=b,a.style.textAlign=Se[b])}
function Ye(a){a&&(a.preventDefault&&a.preventDefault(),a.returnValue=!1);return!1}
function Ze(a){if(a=a||window.event)a.stopPropagation&&a.stopPropagation(),a.cancelBubble=a.cancel=!0;return Ye(a)}
function $e(a){var b=P("a");b.href="#ifl";b.className="sbsb_i sbqs_b";a.appendChild(b);return b}
function af(a){var b=a||window;a=b.document;var c=b.innerWidth;b=b.innerHeight;if(!c){var d=a.documentElement;d&&(c=d.clientWidth,b=d.clientHeight);c||(c=a.body.clientWidth,b=a.body.clientHeight)}return{ec:c,wb:b}}
function We(a){return a?a.ownerDocument||a.document:window.document}
function R(a){return a?(a=We(a),a.defaultView||a.parentWindow):window}
function bf(){return Re?"opacity":"filter"}
function cf(a){return Re?a+"":"alpha(opacity="+Math.floor(100*a)+")"}
;function df(){this.m=507;ef(this)}
ja(df,Fe);df.prototype.c=function(){return this.f};
function ff(a,b,c,d){ef(a,c,d);a.i.innerHTML=b}
function ef(a,b,c){a.f=Q("sbfl_a");a.i=Q("sbfl_b");a.i.onclick=function(){c&&c.openReportForm&&c.openReportForm(b)};
a.f.appendChild(a.i)}
;var gf=[30,35,33,41],hf=[39,10,21];function jf(a,b){O.call(this,507);this.c=a;this.f=b}
ja(jf,O);jf.prototype.F=function(a){this.g=a.get(128)};
jf.prototype.S=function(a,b){b.addRule(".sbfl_a","font-size:12px;font-style:italic;color:#777;margin:-5px -18px -5px 0");b.addRule(".sbsb_c[dir=ltr] .sbfl_a","text-align:right");b.addRule(".sbsb_c[dir=rtl] .sbfl_a","text-align:left");b.addRule(".sbfl_a:hover","color:#333;cursor:pointer");b.addRule(".sbfl_b","background:rgba(255,255,255,.9)")};
jf.prototype.sa=function(){return new df};
function kf(a){return a.map(function(a){return{label:a.c}})}
jf.prototype.Ba=function(a,b){var c=Da(this.g.f,function(a){a:if(0<=gf.indexOf(a.M()))a=!1;else{a=a.f||[];for(var b=ba(hf),c=b.next();!c.done;c=b.next())if(0<=a.indexOf(c.value)){a=!1;break a}a=!0}return a},this);
0<c.length?(ff(b,this.c,kf(c),this.f),b.c().style.display=""):b.c().style.display="none"};function lf(){this.i=157}
A(lf,N);function mf(){this.i=156}
A(mf,N);mf.prototype.f=function(a){var b=he(Va(window.location.href));b.v&&ve(a,"video_id",b.v,!0);return 1};
mf.prototype.c=function(){return 24};function nf(a,b){this.i=598;this.u=b;this.g="";this.c=a;this.m=!1}
A(nf,N);nf.prototype.F=function(a){this.B=a.get(553);this.o=a.get(128);this.A=a.get(118);this.w=a.get(150)};
nf.prototype.setup=function(a){this.f=a.ab;this.s=a.lb};
function of(a,b){a.g=b;a.B.cb(a.g)}
;function pf(){this.i=156}
A(pf,N);pf.prototype.F=function(a){this.g=a.get(598)};
pf.prototype.f=function(a){var b=this.g,c;a:{if(b.c&&b.c.getPreviousQuery&&(c=b.c.getPreviousQuery()))break a;c=null}var d;d=(d=he(Va(window.location.href)))?(d=d.search_query||d.q)&&d==b.f:!1;c&&c!=b.f?(b.m=!0,b.f=c,of(b,c)):d||""==b.g?d&&""==b.g&&of(b,b.f):of(b,"");if("mousedown"==a.w||"focus"==a.w)if(a=this.g,a.u&&!a.o.isVisible()&&(b=a.A.c)&&0!=b.length&&b==a.f)if(a.c&&a.c.getRefinementsTuple&&(c=a.c.getRefinementsTuple())&&(d=c[0],"ClearBySearchbox"==d?a.l=[]:"FromSearchResponse"==d&&a.m&&(a.l=
c[1],a.m=!1)),a.l){c=[];for(var e=d=0;e<a.l.length&&!(c.length>=a.s);++e){var f=a.l[e];f&&0<f.length&&c.push(new Sd(a.w.bold(b,f),f,d++,0,[71],null))}0<c.length&&qf(a.o,c,!1)}return 1};
pf.prototype.c=function(){return 46};function rf(){this.i=149;this.f=be;this.c={}}
A(rf,N);h=rf.prototype;h.F=function(a){this.B=a.get(127);this.s=a.f.getId()};
h.setup=function(){"google"in window||(window.google={});"sbox"in window.google||(window.google.sbox={})};
h.G=function(a){this.l=a;0==a.connectionType&&(a=this.B.g,this.o=a.protocol,this.m=a.host,this.A=a.bb,this.u=a.Kd,this.w="https:"==document.location.protocol,sf(this,x(this.Dd,this)),(new Image).src=this.o+this.m+"/generate_204")};
h.W=function(){sf(this,null);tf(this)};
h.Cd=ne;function tf(a){for(var b in a.c)a.f.removeChild(a.c[b]);a.c={};a.g=null}
h.Dd=function(a){this.g&&this.g(a)};
function sf(a,b){b||(b=ne);var c=window.google;a.l.dc?c.ac.h=b:c.sbox["p"+a.s]=b}
;function uf(){this.i=115;this.l={}}
A(uf,N);var vf={horizontalAlignment:"left",md:!0,da:null,marginWidth:0};h=uf.prototype;h.F=function(a){this.g=a.get(116);if(a=M(a,154))for(var b=0,c;c=a[b++];)this.l[wf]=c};
h.G=function(){this.c=!1};
h.W=function(){this.hide()};
h.isVisible=function(){return this.c};
h.getHeight=function(){return this.c?this.g.getHeight():0};
h.show=function(){this.c||(this.g.show(xf(this)),this.c=!0)};
h.hide=function(){this.c&&(this.g.hide(),this.c=!1)};
function xf(a){var b=re(vf);if(a.f){a=a.f.f;b.da=a.w;b.marginWidth=a.D;var c=a.u.Md;c||(c="rtl"==a.w?"right":"left");b.horizontalAlignment=c}return b}
;function yf(){this.i=118}
A(yf,N);h=yf.prototype;h.F=function(a){this.f=a.get(119);this.w=a.get(130);this.L=a.get(145);this.o=a.get(117);this.I=a.get(123);this.A=a.get(374);this.H=a.get(121);this.N=a.get(553);this.g=a.get(128);this.J=a.get(139);this.P=a.get(173);this.T=M(a,160)};
h.setup=function(a){this.m=a;this.c=this.l=this.f.c.value||""};
h.G=function(a){this.m=a;this.u=this.C=!1;zf(this)};
function Af(a){var b={};S(a.o,11,b);!b.cancel&&a.m.Vc&&Bf(a.o,function(){a.g.dismiss()})}
function Cf(a,b){if(0==a.m.Da||2==a.m.Da||3==a.m.Da&&!a.l&&!b)return!1;a:{if(T(a.g)){if(null!=a.g.g)var c=Df(a.g);else c=a.g,c=T(c)?c.f[0]:null;if(c.g)break a}c=null}var d;if(d=c){if(d=c=c.c)d=a.l,d=!(d||c?d&&c&&d.toLowerCase()==c.toLowerCase():1);d?(a.l=a.c,me(c,a.c,!0)&&(c=a.c+c.substr(a.c.length)),Ef(a,c,fe(c.length),"",!0),Ff(a,c,!0),d=!0):d=!1}return d?(a.A.add(8),!0):!1}
function Ef(a,b,c,d,e){a.m.qc&&!a.g.isVisible()&&"mousedown"==d&&Gf(a.g,c,d);var f=!1,g=!1;if(b!=a.c||"onremovechip"==d)me(d,"key")?a.A.add(1):"paste"==d&&a.A.add(2),f=!0,Hf(a,b),S(a.o,1,{pa:d,da:a.s}),g=y(),a.B||(a.B=g),a.D=g,ie(b)&&(e=!0),g=!0;b=If(a.N,b,c,d);switch(b.A){case 3:b.l=!0;case 2:e=!0;break;case 4:e=!1}e?(f&&(f=a.g,f.l&&!f.o&&(f.o=window.setTimeout(x(f.clear,f),f.u.Wc))),a.C&&ve(b,"gs_is",1),Jf(a.I,b)):g&&(a.g.clear(),f=a.I,f.l=f.g);S(a.o,2,{pa:d})}
function Kf(a,b){Hf(a,b);Lf(a.f);S(a.o,4,{da:a.s,input:b})}
function Mf(a){a.c!=a.l&&Hf(a,a.l);S(a.o,5,{input:a.l,suggestions:a.g.f,da:a.s});Lf(a.f)}
h.getHeight=function(){return this.f.getHeight()};
function Nf(a){if(a.P){if(a.m.Ta)return!0;for(var b=0,c;c=a.T[b++];)if(c.isEnabled())return!0}return!1}
h.search=function(a){this.H.search(this.c,a)};
h.clear=function(){this.c&&(Hf(this,""),this.f.clear(),S(this.o,1),S(this.o,16),this.g.clear())};
function Of(a,b){var c=a.f.o.va();a.s==b?T(a.g)&&c==a.c.length&&(null!=a.g.g?a.m.ua&&a.H.search(Df(a.g).c,6):a.m.zb&&Cf(a,!0)):a.w&&0==c&&a.w.c()}
function Ff(a,b,c){a.c=b||"";zf(a);Lf(a.f);c||S(a.o,4,{da:a.s,input:a.c})}
function zf(a){var b=Pf(a.L,a.c);if(b!=a.s){var c=a.f;c.w&&(c.w.dir=b);c.c.dir=b;c.s&&(c.s.dir=b);if(c.C){var d=c.C;d.o!=b&&(d.c.dir=d.o=b)}if(c.fa){c=c.c;d=0;var e=c.style;"INPUT"!=c.nodeName&&(d+=1);e.left=e.right="";e["rtl"==b?"right":"left"]=d+"px"}a.s=b}}
function Hf(a,b){a.c=a.l=b||"";zf(a)}
;function Qf(){this.i=128}
A(Qf,N);h=Qf.prototype;h.F=function(a){this.m=a.get(129);this.I=a.get(145);this.C=a.get(115);this.J=a.get(123);this.s=a.get(118);this.K=a.get(147);this.H=M(a,153);this.N=a.get(553);this.B=a.get(184);this.P=a.get(157)};
h.setup=function(){this.H.sort(qe)};
h.G=function(a){this.u=a;this.g=this.c=null;this.l=this.A=!1;this.L=!0;this.w="";this.D=0};
h.W=function(){this.o&&(window.clearTimeout(this.o),this.o=null);this.f=null;this.hide()};
function qf(a,b,c){var d=a.B&&a.B.f(b);a.clear();a.f=b;var e=T(a)?b[0].c:a.s.l;a:{var f=e;if(a.I.c){for(var g=!1,k=!1,n=0,m;n<f.length;++n)if(m=f.charAt(n),!Rf.test(m)&&(Sf.test(m)?k=!0:g=!0,k&&g)){f=!0;break a}f=!1}else f=!0}f&&(e=a.s.l);a.w=Pf(a.I,e);if(a.u.wd&&T(a)&&c&&!Qe){a.A=!0;c=a.m;if(c.l){c.A=a.w;Tf(c);e=!1;for(f=0;g=b[f++];)Uf(c,g)&&(e=!0);c=e}else c=!1;e=b[0].l.c.a||"";e=ke(e);b=a.K;f=0;e&&(b.c||Vf(b),Wf(b),e in b.g?f=b.g[e]:(f=b.c,g=je(e),f.innerHTML!=g&&(f.innerHTML=g),b.g[e]=f=b.c.offsetWidth,
b=b.c,""!=b.innerHTML&&(b.innerHTML="")));a.D=f}else{a.A=!1;b=a.m;if(a.A||!a.u.Gd&&!T(a))c=[];else{c=[];e=[];for(f=0;a.H[f++]&&!Ee(a.f,e););(f=e?e.length:0)&&(f-=Xf(e,c,0));for(g=0;g<a.f.length;++g)c.push(a.f[g]);f&&(f-=Xf(e,c,1));a.u.Sc&&c.push(1);f&&(f-=Xf(e,c,2));f&&Xf(e,c,3);a.u.vb&&c.push(2);a.P&&1<c.length&&5==c[0].M()&&c.splice(1,0,3)}if(b.l){b.A=a.w;Tf(b);e=!1;for(f=0;g=c[f++];)if(1==g)g=b,g.o?g.o.style.display="":(k=P("li"),n=k.style,n.position="relative",n.textAlign="center",n.whiteSpace=
"nowrap",k.dir=g.B,g.g=Q(),g.g.className="sbsb_g",g.c.vb&&(g.g.style.paddingBottom="1px"),Yf(g,g.c.searchText,g.g,13),g.c.Rc?Yf(g,g.c.nb,g.g,8):g.c.Tc&&Yf(g,g.c.Fd,g.g,14),k.appendChild(g.g),k.onmousedown=x(g.Za,g),k.className=g.c.Ca,g.o=k),g.f.appendChild(g.o);else if(2==g)if(g=b,g.m)g.m.style.display="";else{k=Q("sbsb_j "+g.c.Ca);n=P("a");n.id="sbsb_f";Pb(n,"http://www.google.com/support/websearch/bin/answer.py?hl="+g.c.Wa+"&answer=106230");var l=g.c.pd;if(!(l instanceof F)){if(l instanceof F)m=
l;else{var q="object"==typeof l;m=null;q&&l.yb&&(m=l.Oa());l=q&&l.Ua?l.Ra():String(l);Qa.test(l)&&(-1!=l.indexOf("&")&&(l=l.replace(Ja,"&amp;")),-1!=l.indexOf("<")&&(l=l.replace(Ka,"&lt;")),-1!=l.indexOf(">")&&(l=l.replace(La,"&gt;")),-1!=l.indexOf('"')&&(l=l.replace(Ma,"&quot;")),-1!=l.indexOf("'")&&(l=l.replace(Oa,"&#39;")),-1!=l.indexOf("\x00")&&(l=l.replace(Pa,"&#0;")));m=Nb(l,m)}l=Mb(m).replace(/(\r\n|\r|\n)/g,"<br>");l=Nb(l,m.Oa())}m=n;l=Mb(l);if(Ob())for(;m.lastChild;)m.removeChild(m.lastChild);
m.innerHTML=l;k.appendChild(n);k.onmousedown=x(g.Za,g);g.m=k;g.l.appendChild(g.m)}else 3==g?(g=b,k=g.K.pop(),k||(k=P("li"),k.i=!0,n=P("div","sbsb_e"),k.appendChild(n)),g.f.appendChild(k)):Uf(b,g)&&(e=!0);c=e}else c=!1;a.D=0}d&&(a.g=a.B.i(),Zf(a,a.B.c()));c?a.show():a.clear()}
function Zf(a,b){if(a.c!=b){var c=a.c;a.c=b;$f(a,c)}}
h.Rb=function(){if(T(this))if(this.l){var a=this.c;this.c==this.f.length-1?this.g=this.c=null:null==this.c?this.c=0:++this.c;this.g=this.c;ag(this,a,x(this.Rb,this))}else this.show()};
h.Sb=function(){if(T(this))if(this.l){var a=this.c;this.f&&0!=this.c?null==this.c?this.c=this.f.length-1:--this.c:this.g=this.c=null;this.g=this.c;ag(this,a,x(this.Sb,this))}else this.show()};
h.isVisible=function(){return this.l};
h.isEnabled=function(){return this.L};
function Df(a){return null!=a.g?a.f[a.g]:null}
function T(a){return!(!a.f||!a.f.length)}
h.show=function(){if(!this.l){a:{var a=this.C,b=wf;if(b in a.l){if(a.f){if(b==wf)break a;a.hide();a.f.f.l=!1}a.f=a.l[b];b=a.g;a=a.f;a!=b.s&&(b.s=a,a=a.c.l,b.B?a!=b.B&&b.m.replaceChild(a,b.B):b.m.appendChild(a),b.B=a)}}this.C.show();this.l=!0}};
h.hide=function(){this.l&&(this.o&&(window.clearTimeout(this.o),this.o=null),this.C.hide(),this.l=!1)};
h.clear=function(){this.hide();this.f=null;this.A=!1;null!=this.c&&bg(this.m,this.c);this.g=this.c=null;this.m.clear()};
h.dismiss=function(){var a=this.J;a.l=a.g;this.hide()};
function cg(a){null!=a.c&&bg(a.m,a.c);a.g=a.c=null}
function Gf(a,b,c){if(T(a))a.show();else{var d=a.s.l;d&&(b=If(a.N,d,b||a.s.f.o,c),Jf(a.J,b))}}
function Xf(a,b,c){for(var d=0,e=0,f;e<a.length;++e)(f=a[e])&&f.position==c&&(3==c?f.jd&&f.jd(b)&&++d:(b.push(f),++d));return d}
function ag(a,b,c){null==a.c||a.m.isSelectable(a.c)?($f(a,b),null==a.c?Mf(a.s):Ff(a.s,a.f[a.c].c)):(bg(a.m,b),c())}
function $f(a,b){null!=b&&bg(a.m,b);null!=a.c&&a.m.highlight(a.c)}
var wf=de++;function dg(){this.i=154}
A(dg,N);dg.prototype.F=function(a){this.f=a.get(128);this.c=a.get(129)};function eg(){this.i=145;this.c=Sf.test("x")}
A(eg,N);var Rf=RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$"),Sf=RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*(?:\\d[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$|[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufdfe-\ufe6f\ufefd-\uffff])");eg.prototype.S=function(a){this.f=a.Pa()};
function Pf(a,b){var c=a.f;a.c&&(Sf.test(b)?c="ltr":Rf.test(b)||(c="rtl"));return c}
;function fg(){this.i=117;this.f=[];this.g={fc:1}}
A(fg,N);var gg=window.postMessage&&!(Ge||Le||Je);fg.prototype.W=function(){this.c=null};
function U(a,b,c,d,e,f){var g=hg(a,b);g||(g={},a.f.push({element:b,Nc:g}));var k=g[c];k||(k=g[c]=[],a=ig(a,c,b.fc?window:R(b),k),v(c)?b.addEventListener?b.addEventListener(c,a,!1):b["on"+c]=a:b[c]=a);k.push({ld:!!f,Xa:!1,priority:e||0,process:d});k.sort(jg);d.yc=c}
function kg(a,b,c){if(a=hg(a,b))if(a=a[c.yc]){b=0;for(var d;d=a[b++];)if(d.process==c){d.Xa=!0;break}}}
function lg(a,b,c){U(a,a.g,b,c,void 0,void 0)}
function S(a,b,c){c=c||{};(a=a.g[b])&&a(c,c.pa)}
function mg(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent("on"+b,c)}
function Bf(a,b){if(gg){if(!a.c){a.c=[];var c=x(a.l,a);mg(window,"message",c)}a.c.push(b);c=window.location.href;window.postMessage("sbox.df",/HTTPS?:\/\//i.test(c)?c:"*")}else window.setTimeout(b,0)}
fg.prototype.l=function(a){this.c&&a&&a.source==window&&"sbox.df"==a.data&&this.c.length&&(this.c.shift()(),this.c&&this.c.length&&window.postMessage("sbox.df",window.location.href))};
function ig(a,b,c,d){return x(function(a,f){if(d.length){var e;if(!(e=a)){e={};var k=c.event;k&&(k.keyCode&&(e.keyCode=k.keyCode),e.kd=!0)}e.pa=f||b;k=e;for(var n,m,l=0,q;q=d[l++];)q.Xa?m=!0:n||(q.ld?ng(this,q,k):n=q.process(k));if(m)for(l=0;q=d[l];)q.Xa?d.splice(l,1):++l;if(e.ya)return delete e.ya,e.kd&&(e=c.event||e),Ze(e),e.returnValue=!1}},a)}
function hg(a,b){for(var c=0,d;c<a.f.length;++c)if(d=a.f[c],d.element==b)return d.Nc;return null}
function ng(a,b,c){Bf(a,function(){b.process(c)})}
function jg(a,b){return b.priority-a.priority}
;function og(){this.i=494;this.c={};this.l=this.o=0;this.f=-1;this.g=0;this.m={}}
A(og,N);og.prototype.G=function(){this.reset()};
og.prototype.reset=function(){this.c={};this.l=this.o=0;this.f=-1;this.g=0;this.m={}};function pg(){this.i=374}
A(pg,N);pg.prototype.G=function(){this.reset()};
pg.prototype.add=function(a){this.c||(this.c={});this.c[a]=!0};
pg.prototype.reset=function(){this.c={}};function qg(){this.i=120;this.A=-1}
A(qg,N);var rg=/\.+$/,sg=/\./g,tg=/./g,ug=ee([23]);qg.prototype.F=function(a){this.C=a.get(191);this.c=a.get(123);this.l=a.get(118);this.u=a.get(374);this.f=a.get(494);this.w=a.get(126);this.m=a.get(128);this.B=M(a,311)};
qg.prototype.setup=function(a){this.s=a.rd};
qg.prototype.G=function(a){this.g=a;this.reset()};
function vg(a,b,c,d){var e=a.l.l;c&&(e=e.replace(tg,"#"));c=[];c[27]=64;c[0]=wg(a.g.clientName);c[28]=wg(a.g.requestIdentifier);c[1]=void 0==b?"":b+"";b=a.u;var f=[];for(g in b.c)f.push(parseInt(g,10));c[26]=f.join("j");var g="";null!=a.m.g?g=a.m.g+"":10<=a.w.f.s&&(g="o");c[2]=g;g="";if(b=a.m.f){for(var k=f=0,n;n=b[k++];){n=se(n.M(),n.f||[]);if(n!=m){1<f&&(g+="l"+f);g+=(m?"j":"")+n;f=0;var m=n}++f}1<f&&(g+="l"+f)}c[3]=g;m="";g=a.m.f;b=a.f.m;if(g)for(f=0;k=g[f++];){var l=se(k.M(),k.f||[]);l in b&&
delete b[l]}if(b)for(l in b)m+=(m?"j":"")+l;c[35]=m;l=a.f.f;c[33]=-1<l?String(l):"";c[4]=Math.max(a.l.B-a.o,0);c[5]=Math.max(a.l.D-a.o,0);c[6]=a.A;c[7]=y()-a.o;c[18]=Math.max(a.l.K-a.o,0);c[8]=a.c.N;m=a.c;m=(l=m.f)?m.c.g:0;c[25]=l?"1"+(a.g.tc?"a":"")+(a.g.jb?"c":""):"";c[10]=m;l=a.c;c[11]=l.f?l.c.l:0;c[12]=a.c.K;g=a.c;l=g.I;m=g.Ga;g=g.J;c[9]=l;c[22]=m;c[17]=g;c[13]=a.c.L;c[14]=a.c.B;c[15]=a.c.D;l=a.c;m=[];for(b=f=0;b<=xg;++b)g=l.C[b],0==g?f++:(f=1==f?"0j":1<f?b+"-":"",m.push(f+g),f=0);c[16]=m.join("j");
c[36]=a.c.H;l=0;for(var q in a.f.c)l++;c[30]=l;c[31]=a.f.o;c[32]=a.f.l;c[19]=wg(a.g.eb);q=a.f;m=a.w.c;l=!1;m&&(l=m.f.c.e||"");m=0;l?(m|=1,1<q.g&&(m|=2)):0<q.g&&(m|=2);q=m;c[20]=0==q?"":q+"";for(q=0;l=a.B[q++];)m=l.i,ug[m]&&(c[m]=void 0==c[m]?wg(l.c()):"");c=c.join(".").replace(rg,"");if(a.C&&a.s){q=e+c;b:{l=a.s;m=[];if(l)for(f=b=g=0;f<l.length;++f){k=l.charCodeAt(f);if(32>k||127<k||!yg[k-32]){l=[];break b}g<<=6;g|=yg[k-32]-1;b+=6;8<=b&&(m.push(g>>b-8&255),b-=8)}l=m}g=l;l={};l.O=Array(4);l.buffer=
Array(4);l.Qd=Array(4);l.padding=Array(64);l.padding[0]=128;for(m=1;64>m;++m)l.padding[m]=0;zg(l);m=Array(64);64<g.length&&(zg(l),Ag(l,g),g=Bg(l));for(b=0;b<g.length;++b)m[b]=g[b]^92;for(b=g.length;64>b;++b)m[b]=92;zg(l);for(b=0;64>b;++b)l.buffer[b]=m[b]^106;Cg(l,l.buffer);l.total=64;Ag(l,Dg(q));q=Bg(l);zg(l);Cg(l,m);l.total=64;Ag(l,q);q=Bg(l);q=q.slice(0,8);v(q)&&(q=Dg(q));l="";if(q){m=q.length;for(f=b=g=0;m--;)for(b<<=8,b|=q[f++],g+=8;6<=g;)l+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b>>
g-6&63),g-=6;g&&(l+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b<<8>>g+8-6&63))}q=l}else q="";e={oq:e,gs_l:c+"."+q};d&&(e.ei=d);a.g.nd&&(e.q=a.l.c);return e}
qg.prototype.reset=function(){this.o=y();++this.A;var a=this.l;a.B=0;a.D=0;a.K=0;this.u.reset();a=this.c;if(a.f){var b=a.c;b.g=0;b.l=0}a.N=0;a.s=0;a.K=0;a.I=0;a.Ga=0;a.J=0;a.L=0;a.B=0;a.D=0;a.H=0;a.C=[];for(b=0;b<=xg;++b)a.C[b]=0;for(a=0;b=this.B[a++];)b.reset();this.f.reset()};
function wg(a){return a?a.replace(sg,"-"):""}
;function Eg(){this.i=121}
A(Eg,N);h=Eg.prototype;h.S=function(a){this.l=a.qb()};
h.F=function(a){this.f=a.get(347);this.s=a.get(130);this.B=a.get(117);this.w=a.get(123);this.m=a.get(118);this.C=a.get(120);this.D=a.get(128);this.A=a.get(139);this.u=a.s;this.o=M(a,294)};
h.G=function(a){this.g=a};
h.search=function(a,b){if(this.o){for(var c=!1,d=0,e;e=this.o[d++];)2==e.c(a,b)&&(c=!0);if(c)return}if(ie(a)||this.g.ba||this.s&&this.s.ba()){if(Od.test(b)){if(this.l&&!this.c){c=this.l;b:{if(d=c.getElementsByTagName("input")){e=0;for(var f;f=d[e++];)if("btnI"==f.name&&"submit"!=f.type.toLowerCase()){d=f;break b}}d=null}d?c=null:(d=P("input"),d.type="hidden",d.name="btnI",d.value="1",c.appendChild(d),c=d);this.c=c}}else this.c&&(this.l.removeChild(this.c),this.c=null);this.f&&this.g.La&&Fg(this.f,
b);this.u.search(a,b);Gg(this);S(this.B,12,{query:a})}};
h.redirect=function(a){this.f&&this.g.La&&Fg(this.f,void 0);this.u.redirect(a);Gg(this)};
function Gg(a){var b=a.w;b.l=b.g;a.w.o=null;a.C.reset();a.D.clear();a.m.l!=a.m.c&&(b=a.m,b.l=b.c);a.A&&a.A.clear()}
;function Hg(){this.i=553}
A(Hg,N);Hg.prototype.F=function(a){this.f=M(a,156);a.get(126)};
Hg.prototype.setup=function(){this.f.sort(Ig)};
Hg.prototype.G=function(a){this.c=a;this.g=a.ab};
Hg.prototype.cb=function(a){this.g=a};
function If(a,b,c,d,e){b=new te(b,c||fe(b.length),d||"");c=1;if(a.f){d=0;for(var f;f=a.f[d++];)f=f.f(b),f>c&&(c=f)}b.A=c;null!=a.c.Ka&&ve(b,"ds",a.c.Ka,!0);null!=a.c.Xb&&ve(b,"swl",a.c.Xb,!0);ve(b,"pq",a.g,!0);e&&!b.g&&(b.B=!0);b.g||(b.m=y(),"cp"in b.s||(a=b.D.va(),ve(b,"cp",a,!0)),ve(b,"gs_id",b.o),b.f=ge(b.s)+":"+b.u,b.g=!0);return b}
function Ig(a,b){return a.c()-b.c()}
;function Jg(){this.i=123;this.u=!1;this.g=-1}
A(Jg,N);var Kg=[0,1,2,3,4,5,5,6,6,6,7,7,7,7,7,8,8,8,8,8],xg=Kg[Kg.length-1]+1,Lg=100*Kg.length-1;h=Jg.prototype;h.F=function(a){this.c=a.get(133);this.fa=a.get(130);this.ja=a.get(118);this.ic=a.get(120);this.ia=a.get(494);this.hc=a.get(124);this.P=a.get(125);this.T=a.get(230);this.jc=a.get(127)};
h.G=function(a){this.ha=this.jc.c;this.ga=a;this.u=!0;this.m={};this.A=0;this.Ha=a.Ac;this.gc=a.xb;this.l=-1;this.f=this.ga.uc&&!!this.c};
h.W=function(){this.u=!1;Mg(this);this.m=this.o=null;this.l=this.g};
function Jf(a,b){if(!(!a.u||a.gc||a.fa&&a.fa.i())){var c=!0,d=ue(b);d>a.g&&(a.g=d);++a.N;a.ia.c[b.getId()]=!0;ie(a.ja.c)||ie(b.c)||(d=a.ia,d.f=Math.max(d.f,0));d=y();for(var e in a.m)2500<d-a.m[e].m&&Ng(a,e);a.f&&(e=a.c.get(b))&&((c=a.Ha||b.B)&&a.ga.Yc&&(b.l=!0),a.P.process(e),e.l&&++a.K,a.o=null);c&&(a.o=b,a.w||a.Jb())}}
function Og(a,b){x(function(a){this.Wb(a,b)},a)}
h.Jb=function(){Mg(this);var a=this.o;this.o=null;if(a){var b=[],c=a.C;if(c)for(var d in c)K(d,c[d],b);var e=b.join("&");Og(this,a);b=x(this.Wb,this);c=this.ha;d=a.getId();var f=a.c;c.l.wc||tf(c);e=c.o+c.m+c.A+"?"+(c.u?c.u+"&":"")+(e?e+"&":"");var g=[];K("q",f,g,!0);c.l.dc||K("callback","google.sbox.p"+c.s,g);if(c.w){f="";for(var k=4+Math.floor(32*Math.random()),n=0,m;n<k;++n)m=.3>Math.random()?48+Math.floor(10*Math.random()):(.5<Math.random()?65:97)+Math.floor(26*Math.random()),f+=String.fromCharCode(m);
K("gs_gbg",f,g)}f=P("script");f.src=e+g.join("&");f.charset="utf-8";c.c[d]=f;c.g=b;c.f.appendChild(f);a.l||(++this.I,this.m[a.getId()]=a,++this.s);a=100;b=(this.s-2)/2;for(c=1;c++<=b;)a*=2;a<this.A&&(a=this.A);this.w=window.setTimeout(x(this.Jb,this),a)}};
function Mg(a){null!=a.w&&(window.clearTimeout(a.w),a.w=null)}
function Ng(a,b){var c=a.ha,d=c.c[b];d&&(c.f.removeChild(d),delete c.c[b]);delete a.m[b];a.s&&--a.s}
h.Wb=function(a,b){if(this.u){if(!b&&(b=this.m[(a[2]||{}).j],!b))return;if(!b.l){var c=this.hc;var d=b,e=a[0],f=a[1],g={},k=a[2];if(k)for(var n in k){var m=k[n];n in c.c&&(m=c.c[n].parse(m));g[n]=m}var l=m=!1;k=!1;n=0;for(var q;q=f[n++];)if(33==(q[1]||0)?l=!0:m=!0,l&&m){k=!0;break}m=0;l=[];for(n=0;q=f[n++];){var Na=q[1]||0;if(!k||33!=Na){var rb=q[0];c.g&&(rb=c.f.bold(e.toLowerCase(),ke(rb).replace(Yd,"")));l.push(new Sd(rb,ke(rb).replace(Yd,""),m++,Na,q[2]||[],Pg(q)))}}c=new we(d,l,new Qd(g),!1,!0,
!1);this.T&&(c=this.T.c(c,this.ja.c));if(this.f)for(d=this.c,e=c,(e.c&&e.c[0]||""!=e.i.c)&&e&&e.g&&(d.f[e.i.f]=e),f=0;f<d.c.length;++f)d.c[f].update(e);ue(b)<=this.l?!b||b.c||c.l||(d=b,this.H=y()-d.m):(++this.J,this.P.process(c)||++this.L,d=b,this.A=c.f.c.d||0,d&&(Ng(this,d.getId()),e=d.m,e=y()-e,d.c?(this.D+=e,this.B=Math.max(e,this.B),++this.C[e>Lg?xg:Kg[Math.floor(e/100)]]):this.H=e));c&&(c=c.f.c.q||"")&&(this.ic.s=c)}}};function Qg(){this.i=124;this.c={}}
A(Qg,N);Qg.prototype.F=function(a){this.f=a.get(150);if(a=M(a,158))for(var b=0,c;c=a[b++];)this.c[c.oe()]=c};
Qg.prototype.G=function(a){this.g=a.Sa};
function Pg(a){return(a=a[3])?new Qd(a):Rd}
;function Rg(){this.i=125}
A(Rg,N);Rg.prototype.F=function(a){this.l=a.get(117);this.o=a.get(118);this.m=a.get(494);this.c=M(a,122);this.f=a.get(126);this.g=a.get(128);this.c.sort(Sg)};
Rg.prototype.process=function(a){var b=a,c=this.o.c.toLowerCase(),d=this.f.c;c=le(c);var e=b.i;b=e?e.i:le(b.i.c.toLowerCase());var f=(d=d?d.i:null)?d.i:"";e=1==(0==c.indexOf(b)?0==c.indexOf(f)?d&&d.getId()==e.getId()?0:b.length>=f.length?1:-1:1:-1);c=-1!=e;if(e){if(this.c)for(e=0;b=this.c[e++];)a=b.edit(a);d=this.f.c=a;a=d.i.c;e=d.c;this.g.isEnabled()&&qf(this.g,e,0==d.M());b=this.m;var g=d.i;f=g.getId();if(f in b.c){var k=d.c.length;0<k&&(ie(g.c)||(b.f=k),g=g.m,g=y()-g,b.l+=g,++b.o);d.f.c.e&&++b.g;
delete b.c[f]}d=d.c;for(f=0;g=d[f++];)b.m[se(g.M(),g.f||[])]=!0;S(this.l,3,{input:a,suggestions:e})}return c};
function Sg(a,b){return a.c()-b.c()}
;function Tg(){this.i=126}
A(Tg,N);Tg.prototype.F=function(a){this.f=a.get(123)};
Tg.prototype.G=function(){this.c=null};function Ug(){this.i=127;this.f={}}
A(Ug,N);Ug.prototype.F=function(a){a=M(a,149);for(var b=0,c;c=a[b++];)this.f[0]=c};
Ug.prototype.G=function(a){var b="https:"==document.location.protocol,c=[];K("client",a.clientName,c);K("hl",a.Wa,c);K("gl",a.Yb,c);K("sugexp",a.eb,c);K("gs_rn",64,c);K("gs_ri",a.requestIdentifier,c);a.authuser&&K("authuser",a.authuser,c);this.g={protocol:"http"+(b?"s":"")+"://",host:a.Ob||"clients1."+a.Ja,bb:a.bb||"/complete/search",Kd:c.length?c.join("&"):""};this.c&&0==a.connectionType||(this.c=this.f[a.connectionType])};function Vg(){this.i=191}
A(Vg,N);
var yg=[0,0,0,0,0,0,0,0,0,0,0,0,0,63,0,0,53,54,55,56,57,58,59,60,61,62,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,0,0,0,0,64,0,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,0,0,0,0,0],Wg=[7,12,17,22,7,12,17,22,7,12,17,22,7,12,17,22,5,9,14,20,5,9,14,20,5,9,14,20,5,9,14,20,4,11,16,23,4,11,16,23,4,11,16,23,4,11,16,23,6,10,15,21,6,10,15,21,6,10,15,21,6,10,15,21],Xg=[3614090360,3905402710,606105819,3250441966,4118548399,1200080426,2821735955,
4249261313,1770035416,2336552879,4294925233,2304563134,1804603682,4254626195,2792965006,1236535329,4129170786,3225465664,643717713,3921069994,3593408605,38016083,3634488961,3889429448,568446438,3275163606,4107603335,1163531501,2850285829,4243563512,1735328473,2368359562,4294588738,2272392833,1839030562,4259657740,2763975236,1272893353,4139469664,3200236656,681279174,3936430074,3572445317,76029189,3654602809,3873151461,530742520,3299628645,4096336452,1126891415,2878612391,4237533241,1700485571,2399980690,
4293915773,2240044497,1873313359,4264355552,2734768916,1309151649,4149444226,3174756917,718787259,3951481745];function Dg(a){for(var b=[],c=0,d=0;d<a.length;++d){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b}
function zg(a){a.O[0]=1732584193;a.O[1]=4023233417;a.O[2]=2562383102;a.O[3]=271733878;a.qa=a.total=0}
function Cg(a,b){for(var c=a.Qd,d=0;64>d;d+=4)c[d/4]=b[d]|b[d+1]<<8|b[d+2]<<16|b[d+3]<<24;var e=a.O[0];d=a.O[1];for(var f=a.O[2],g=a.O[3],k,n,m,l=0;64>l;++l)16>l?(k=g^d&(f^g),n=l):32>l?(k=f^g&(d^f),n=5*l+1&15):48>l?(k=d^f^g,n=3*l+5&15):(k=f^(d|~g),n=7*l&15),m=g,g=f,f=d,e=e+k+Xg[l]+c[n]&4294967295,k=Wg[l],d=d+((e<<k|e>>>32-k)&4294967295)&4294967295,e=m;a.O[0]=a.O[0]+e&4294967295;a.O[1]=a.O[1]+d&4294967295;a.O[2]=a.O[2]+f&4294967295;a.O[3]=a.O[3]+g&4294967295}
function Ag(a,b,c){c||(c=b.length);a.total+=c;for(var d=0;d<c;++d)a.buffer[a.qa++]=b[d],64==a.qa&&(Cg(a,a.buffer),a.qa=0)}
function Bg(a){var b=Array(16),c=8*a.total,d=a.qa;Ag(a,a.padding,56>d?56-d:64-(d-56));for(var e=56;64>e;++e)a.buffer[e]=c&255,c>>>=8;Cg(a,a.buffer);for(e=d=0;4>e;++e)for(c=0;32>c;c+=8)b[d++]=a.O[e]>>c&255;return b}
;function Yg(){this.i=150}
A(Yg,N);
Yg.prototype.bold=function(a,b){b=je(b.replace(Pd,""));a=je(le(a,!0));if(me(b,a))return a+"<b>"+b.substr(a.length)+"</b>";for(var c="",d=[],e=b.length-1,f=0,g=-1,k;k=b.charAt(f);++f)" "==k||"\t"==k?c.length&&(d.push({t:c,oa:g,e:f+1}),c="",g=-1):(c+=k,-1==g?g=f:f==e&&d.push({t:c,oa:g,e:f+1}));c=a.split(/\s+/);f={};for(e=0;g=c[e++];)f[g]=1;k=-1;c=[];var n=d.length-1;for(e=0;g=d[e];++e)f[g.t]?(g=-1==k,e==n?c.push({oa:g?e:k,e:e}):g&&(k=e)):-1<k&&(c.push({oa:k,e:e-1}),k=-1);if(!c.length)return"<b>"+b+
"</b>";e="";for(f=g=0;k=c[f];++f)(n=d[k.oa].oa)&&(e+="<b>"+b.substring(g,n-1)+"</b> "),g=d[k.e].e,e+=b.substring(n,g);g<b.length&&(e+="<b>"+b.substring(g)+"</b> ");return e};function Zg(){this.i=146}
A(Zg,N);function $g(a){JSON.parse('"\\u30'+a.split(",").join("\\u30")+'"')}
$g("02,0C,0D,01,FB,F2,A1,A3,A5,A7,A9,E3,E5,E7,C3,FC,A2,A4,A6,A8,AA,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CA,CB,CC,CD,CE,CF,D2,D5,D8,DB,DE,DF,E0,E1,E2,E4,E6,E8,E9,EA,EB,EC,ED,EF,F3,9B,9C");$g("F4__,AC,AE,B0,B2,B4,B6,B8,BA,BC,BE,C0,C2,C5,C7,C9_____,D0,D3,D6,D9,DC");$g("D1,D4,D7,DA,DD");$g("F4____,AC_,AE_,B0_,B2_,B4_,B6_,B8_,BA_,BC_,BE_,C0_,C2__,C5_,C7_,C9______,D0__,D3__,D6__,D9__,DC");$g("D1__,D4__,D7__,DA__,DD");$g("A6,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CF,D2,D5,D8,DB");$g("CF,D2,D5,D8,DB");function ah(){this.i=116;this.I=!0}
A(ah,N);h=ah.prototype;
h.S=function(a,b){this.L=a.Pa();b.addRule(".sbdd_a",(Qe?"margin-top:-1px;":"")+"z-index:989");b.addRule(".sbdd_a[dir=ltr] .fl, .sbdd_a[dir=rtl] .fr","float:left");b.addRule(".sbdd_a[dir=ltr] .fr, .sbdd_a[dir=rtl] .fl","float:right");Qe?b.addRule(".sbdd_b","background:#fff;border:1px solid #ccc;border-top-color:#d9d9d9;"+b.prefix("border-radius:0 0 3px 3px;")+"cursor:default"):b.addRule(".sbdd_b","background:#fff;border:1px solid #ccc;border-top-color:#d9d9d9;"+b.prefix("box-shadow:0 2px 4px rgba(0,0,0,0.2);")+"cursor:default");
b.addRule(".sbdd_c","border:0;display:block;position:absolute;top:0;z-index:988")};
h.F=function(a){this.J=a.get(130);a.get(115);this.o=a.get(118);this.D=a.get(117);this.P=a.f.getId()};
h.setup=function(a){this.c=a};
h.ca=function(a){this.f=Q();this.f.className="gstl_"+this.P+" sbdd_a";bh(this.f,!1);this.K=this.f;this.A=Q("fl");this.f.appendChild(this.A);this.u=Q();this.f.appendChild(this.u);this.m=Q("sbdd_b");this.u.appendChild(this.m);this.T=Q();this.u.appendChild(this.T);this.c.ub&&(this.g=P("iframe","gstl_"+this.P+" sbdd_c"),bh(this.g,!1),(this.c.V||document.body).appendChild(this.g));if(this.l=this.c.sc)sa(this.l)&&(this.l+=this.c.ta[2],this.l-=ch(this)),dh(this,this.f,this.l);eh(this);(a.V||document.body).appendChild(this.f);
lg(this.D,8,x(this.Ub,this))};
h.G=function(a){this.c=a;this.f.style.position=a.ka};
h.getHeight=function(){this.w||(this.w=this.m?Math.max(this.m.offsetHeight,0):0);return this.w};
h.show=function(a){fh(this,a.da||this.L);var b=a.marginWidth;if(this.N!=b){var c=this.A.style;b?(c.width=b+"px",c.height="1px"):c.height="";this.N=b}this.I=a.md;this.H=a.horizontalAlignment;gh(this.o.f,!0);bh(this.K,!0);bh(this.g,!0);S(this.D,14);this.Ub()};
h.hide=function(){this.w=0;gh(this.o.f,!1);bh(this.K,!1);bh(this.g,!1);fh(this,this.L);S(this.D,9)};
h.Ub=function(){this.w=0;eh(this);if(this.g){var a=this.c.hb[0],b=this.g.style;"relative"!=this.c.ka&&(b.top=this.f.style.top,b.left=this.f.offsetLeft+this.A.offsetWidth+"px");a=this.getHeight()+a;this.g.style.height=Math.max(a,0)+"px";dh(this,this.g,this.m.offsetWidth)}this.s&&Tf(this.s.c)};
function eh(a){var b,c;if(c=a.s)c=a.s.c,c=c.c.Qc||c.B==c.A?c.N:null;var d=(b=c)?b.offsetWidth:hh(a.o.f);var e=a.l;c=ch(a);e?v(e)&&(e=null):a.N||!a.I?a.u.style.display="inline-block":(a.u.style.display="",e=d+a.c.ta[2]-c,dh(a,a.f,e));if("relative"!=a.c.ka){var f="rtl"==Xb()!=("rtl"==a.C),g=a.c.V;var k={Z:0,Ea:0};if(f||!g||g==document.body||a.c.ob)k=Ue(a.o.f.A),b&&(k.Z=Ue(b).Z);b=k;k=e;e=a.c.ta;g=e[1];e=e[0];e=b.Ea+a.o.getHeight()+e;if("right"==a.H){k="rtl"==Xb()!=("rtl"==a.C);var n=a.c.V;g=-g;if(k||
!n||n==document.body)g+=(R(a.f)||window).document.documentElement.clientWidth-d-b.Z;d=g;k=e;b=void 0}else b=b.Z+g,"center"==a.H&&k&&(b+=(d-k)/2),k=e,d=void 0;e={Z:0,Ea:0};"absolute"==a.c.ka&&a.c.V&&a.c.V!=document.body&&(f||a.c.ob)&&(e=Ue(a.c.V));g=a.f.style;g.top=k-e.Ea+"px";g.left=g.right="";void 0!=b?g.left=b+c-e.Z+"px":(b=0,a.c.V&&f&&(b=document.body.clientWidth-(e.Z+a.c.V.offsetWidth)),g.right=d+c-b+"px")}}
function dh(a,b,c){sa(c)?0<c&&(a.c.Pd?b.style.width=c+"px":b.style.minWidth=c+"px"):b.style.width=c}
function bh(a,b){a&&(a.style.display=b?"":"none")}
function fh(a,b){if(a.C!=b){a.C=b;var c=a.c.V;c&&c!=document.body&&(c.style.textAlign="rtl"==b?"right":"left");Xe(a.f,b)}}
function ch(a){return a.J&&a.J.f()&&(a=a.o.f.s.offsetWidth,sa(a))?a:0}
;function ih(){this.i=119;this.J=!1;this.o=fe(0);this.L=-1;this.N=!1}
A(ih,N);h=ih.prototype;
h.S=function(a,b){this.D=a;this.c=a.rb();this.c.setAttribute("aria-haspopup",!1);this.c.setAttribute("role","combobox");this.c.setAttribute("aria-autocomplete","list");if(!a.Ia()){b.addRule(".sbib_a","background:#fff;"+b.prefix("box-sizing:border-box;"));var c=Pe&&Ke||Ge?6:5;b.addRule(".sbib_b",b.prefix("box-sizing:border-box;")+"height:100%;overflow:hidden;padding:"+c+"px 9px 0");b.addRule(".sbib_c[dir=ltr]","float:right");b.addRule(".sbib_c[dir=rtl]","float:left");b.addRule(".sbib_d",b.prefix("box-sizing:border-box;")+
"height:100%;unicode-bidi:embed;white-space:nowrap");b.addRule(".sbib_d[dir=ltr]","float:left");b.addRule(".sbib_d[dir=rtl]","float:right");He&&b.addRule(".sbib_a input::-ms-clear","display: none");b.addRule(".sbib_a,.sbib_c","vertical-align:top")}};
h.F=function(a){this.f=a.get(118);this.g=a.get(117);this.ja=a.get(128);this.C=a.get(173);this.fa=!!a.get(136);this.Ha=a.f.getId()};
h.setup=function(a){this.u=a;this.H=a.ma;this.I=a.hd;this.Ga=a.kb;this.l=Ve(this.c);this.Fa();var b=this;Ge&&U(this.g,this.c,"beforedeactivate",function(a){b.N&&(b.N=!1,a.ya=!0)},10);
a=(D("iPhone")&&!D("iPod")&&!D("iPad")||D("iPad")||D("iPod"))&&Me;Ie&&jh(this);(Ne||a)&&kh(this);this.A=this.c};
h.ca=function(a){var b=!!a.xc[130];if(this.fa||Nf(this.f)||b||a.Bc)(this.m=this.D.get("gs_id"))?(b&&(this.s=this.D.get("sb_chc")),this.w=this.D.get("sb_ifc")):(this.m=Q("gstl_"+this.Ha+" sbib_a"),a=this.m.style,this.I&&(a.width=this.I+"px"),this.H&&(a.height=this.H+"px"),a=this.c.style,a.border="none",a.padding=Je||Ge?"0 1px":"0",a.margin="0",a.height="auto",a.width="100%",this.c.className=this.u.Va,b&&(this.s=Q("sbib_d"),this.s.id=this.D.getId("sb_chc"),this.m.appendChild(this.s)),Nf(this.f)&&this.C&&
(this.C.c.className+=" sbib_c",this.m.appendChild(this.C.c)),this.w=Q("sbib_b"),this.w.id=this.D.getId("sb_ifc"),this.m.appendChild(this.w),lh(this,this.m,this.w)),this.u.Id||this.u.oc||mh(this,this.m),this.A=this.m;this.Ga&&(b=x(this.Hb,this),U(this.g,this.c,"blur",b,10),b=x(this.Pb,this),U(this.g,this.c,"focus",b,10),this.ia=!0);lg(this.g,8,x(this.Mc,this));nh(this)};
h.G=function(a){this.u=a;this.c.setAttribute("autocomplete","off");this.c.setAttribute("spellcheck",!1);this.c.style.outline=a.Bb?"":"none";this.ga=this.c.value;this.ia&&this.Pb();oh(this)};
h.W=function(){this.ia&&this.Hb();ph(this)};
function lh(a,b,c){ph(a);c||(c=b);a.c.parentNode.replaceChild(b,a.c);c.appendChild(a.c);a.l&&a.u.yd&&(Ge||Ie?Bf(a.g,function(){a.c.focus();Te(a.c,a.o.va())}):a.c.focus());
oh(a)}
h.getHeight=function(){var a=this.A?this.A.offsetHeight:0;this.H>a&&(a=this.H);return a};
function hh(a){return a.I?a.I:a.A?a.A.offsetWidth:0}
h.select=function(){this.c.select();this.Fa()};
function Lf(a){Oe&&(a.c.value="");a.c.value=a.f.c;Oe&&(a.c.value=a.c.value);qh(a)}
h.focus=function(){if(!this.l)try{this.c.focus(),this.l=!0,qh(this)}catch(a){}};
h.blur=function(){this.l&&(this.c.blur(),this.l=!1)};
h.isFocused=function(){return this.l};
h.clear=function(){this.c.value=""};
function qh(a){if(a.l){var b=a.c.value.length;a.o=fe(b);Te(a.c,b)}}
function mh(a,b){U(a.g,b,"mouseup",function(){a.c.focus()})}
function nh(a){function b(b){U(a.g,a.c,b,x(a.Lb,a),10,c)}
U(a.g,a.c,"keydown",x(a.Kc,a));(Je||a.u.mc)&&U(a.g,a.c,"keypress",x(a.Lc,a));U(a.g,a.c,"select",x(a.Fa,a),10);var c=!1;b("mousedown");b("keyup");b("keypress");c=!0;b("mouseup");b("keydown");b("focus");b("blur");b("cut");b("paste");b("input");var d=x(a.Hc,a);U(a.g,a.c,"compositionstart",d);U(a.g,a.c,"compositionend",d)}
h.Hc=function(a){a=a.type;"compositionstart"==a?(a=this.f,1!=a.u&&(a.u=!0)):"compositionend"==a&&(a=this.f,0!=a.u&&(a.u=!1))};
h.Kc=function(a){var b=a.keyCode;this.L=b;var c=(Ke||Ie)&&(38==b||40==b)&&T(this.ja),d=13==b,e=27==b;this.K=!1;9!=b||a.shiftKey||(this.K=Cf(this.f));if(d){var f=this;Bf(this.g,function(){f.ja.s.search(a.shiftKey?4:3)})}if(c||d||e||this.K)a.ya=!0};
h.Lc=function(a){var b=a.keyCode,c=9==b&&this.K;if(13==b||27==b||c)a.ya=!0};
h.Lb=function(a){if(!this.ha){var b=a.pa;if(!(b.indexOf("key")||a.ctrlKey||a.altKey||a.shiftKey||a.metaKey))a:if(a=a.keyCode,"keypress"!=b){var c=38==a||40==a;if("keydown"==b){var d=this.f;var e=229==a;(d.C=e)&&d.A.add(4);if(c)break a}else if(d=a!=this.L,this.L=-1,!c||d)break a;switch(a){case 27:a=this.f;a.m.Bd?a.search(5):(a.g.isVisible()?a.g.dismiss():a.f.blur(),Mf(a));break;case 37:Of(this.f,"rtl");break;case 39:Of(this.f,"ltr");break;case 38:this.f.g.Sb();break;case 40:a=this.f;c=this.o;T(a.g)?
a.g.Rb():Gf(a.g,c);break;case 46:a=this.f;a.c&&this.o.tb()==a.c.length&&(a.J&&a.J.clear(),a.m.Ad&&a.search(2));break;case 8:a=this.f,a.w&&0==this.o.va()&&a.w.c()}}this.Fa();Ef(this.f,this.c.value,this.o,b)}};
h.Gc=function(){this.l=!0;S(this.f.o,10)};
h.Ec=function(){this.l=!1;Af(this.f)};
function oh(a){a.J||(a.J=!0,a.T=x(a.Gc,a),U(a.g,a.c,"focus",a.T,99),a.P=x(a.Ec,a),U(a.g,a.c,"blur",a.P,99))}
function ph(a){a.J&&(a.J=!1,kg(a.g,a.c,a.T),kg(a.g,a.c,a.P))}
h.Pb=function(){this.B||(this.B=new Jd(this.u.vd||50),this.B.c.add("tick",this.ud,!1,void 0,this),this.B.start())};
h.Hb=function(){this.B&&(this.B.stop(),this.B=null)};
h.ud=function(){this.Lb({pa:"polling"})};
h.Mc=function(){if(Ie){var a=this.c,b=document.createEvent("KeyboardEvent");b.initKeyEvent&&(b.initKeyEvent("keypress",!0,!0,null,!1,!1,!0,!1,27,0),a.dispatchEvent(b))}};
h.Fa=function(){if(this.l){a:{var a=this.c;try{if("selectionStart"in a){var b=a.selectionStart;var c=a.selectionEnd}else{var d=a.createTextRange(),e=We(a).selection.createRange();d.inRange(e)&&(d.setEndPoint("EndToStart",e),b=d.text.length,d.setEndPoint("EndToEnd",e),c=d.text.length)}if(void 0!==b){var f=fe(b,c);break a}}catch(g){}f=null}f&&(this.o=f)}};
function jh(a){var b;mg(window,"pagehide",function(){a.ha=!0;b=a.c.value});
mg(window,"pageshow",function(c){a.ha=!1;(c.persisted||void 0!==b)&&Kf(a.f,b)})}
function kh(a){mg(window,"pageshow",function(b){b.persisted&&a.ga&&Kf(a.f,a.ga)})}
function gh(a,b){a.c.setAttribute("aria-haspopup",b);b||a.c.removeAttribute("aria-activedescendant")}
;function rh(){this.i=129;this.D={};this.H=[];this.J=[];this.K=[];this.u=[];this.L=0}
A(rh,N);h=rh.prototype;
h.S=function(a,b){this.P=a;this.B=a.Pa();Qe||b.addRule(".sbsb_a","background:#fff");b.addRule(".sbsb_b","list-style-type:none;margin:0;padding:0");Qe||b.addRule(".sbsb_c","line-height:22px;overflow:hidden;padding:0 10px");b.addRule(".sbsb_d","background:#eee");b.addRule(".sbsb_e","height:1px;background-color:#e5e5e5");b.addRule("#sbsb_f","font-size:11px;color:#36c;text-decoration:none");b.addRule("#sbsb_f:hover","font-size:11px;color:#36c;text-decoration:underline");b.addRule(".sbsb_g","text-align:center;padding:8px 0 7px;position:relative");
b.addRule(".sbsb_h","font-size:15px;height:28px;margin:0.2em"+(Ke?";-webkit-appearance:button":""));b.addRule(".sbsb_i","font-size:13px;color:#36c;text-decoration:none;line-height:100%");b.addRule(".sbsb_i:hover","text-decoration:underline");b.addRule(".sbsb_j","padding-top:1px 0 2px 0;font-size:11px");b.addRule(".sbdd_a[dir=ltr] .sbsb_j","padding-right:4px;text-align:right");b.addRule(".sbdd_a[dir=rtl] .sbsb_j","padding-left:4px;text-align:left");Qe&&(b.addRule(".sbsb_c[dir=ltr] .sbsb_k","padding:10px 3px 11px 8px"),
b.addRule(".sbsb_c[dir=rtl] .sbsb_k","padding:10px 8px 11px 3px"))};
h.F=function(a){this.w=a.get(128);this.s=a.get(118);this.C=a.get(121);a=M(a,152);var b={};if(a)for(var c=0,d;d=a[c++];)b[d.l]=d;this.T=b};
h.setup=function(a){this.c=a};
h.ca=function(){this.l=Q();this.f=P("ul","sbsb_b");this.f.setAttribute("role","listbox");this.l.appendChild(this.f)};
h.G=function(a){this.c=a;var b=a.Kb;b&&(this.N=this.P.pb(b));this.l.className=a.Nd||"sbsb_a";this.I=a.Ld||"sbsb_d"};
h.highlight=function(a){(a=this.u[a])&&a.isSelectable()&&wc(a.c().parentNode,this.I)};
function bg(a,b){var c=a.u[b];c&&xc(c.c().parentNode,a.I)}
h.clear=function(){for(var a,b,c;c=this.H.pop();)a=c.M(),(b=this.D[a])||(b=this.D[a]=[]),b.push(c),a=c.c(),a.parentNode.removeChild(a);for(;a=this.f.firstChild;)a=this.f.removeChild(a),a.i?this.K.push(a):a!=this.o&&a!=this.m&&this.J.push(a);this.o&&(this.o.style.display="none");this.m&&(this.m.style.display="none");this.u=[]};
h.isSelectable=function(a){return(a=this.u[a])?a.isSelectable():!1};
function Uf(a,b){var c=b.M(),d=a.T[c];if(!d)return!1;c=(c=a.D[c])&&c.pop();if(!c){c=d.sa(a.C);var e=c.c();e.setAttribute("role","option");wc(e,"sbse");e.id="sbse"+a.L;a.L++}d.Ba(b,c);a.H.push(c);e=c.c();var f=sh(a);f.appendChild(e);if(void 0!==b.o){a.u.push(c);var g=a.A;var k=b.i;a.c.Xc&&(e.onmouseover=function(){Zf(a.w,k)},e.onmouseout=function(){cg(a.w)});
var n=c.c();n.onclick=function(c){a.s.f.blur();b.g&&Ff(a.s,b.c);cg(a.w);var e=a.w;e.g=e.c=k;c=c||R(n).event;d.Aa(c,b,a.C)}}else g=a.B;
Xe(f,g);return!0}
function Yf(a,b,c,d){var e=P("input");e.type="button";e.value=ke(b);e.onclick=function(){a.C.search(a.s.c,d)};
if(a.c.Pc){b="lsb";var f=P("span");var g=P("span");f.className="ds";g.className="lsbb";f.appendChild(g);g.appendChild(e)}else b="sbsb_h",f=e;e.className=b;c.appendChild(f)}
function sh(a){var b=a.J.pop();if(b)return a.f.appendChild(b),b;b=P("li");b.setAttribute("role","presentation");b.className="sbsb_c "+a.c.Ca;b.onmousedown=x(a.Za,a);a.f.appendChild(b);return b}
h.Za=function(a){a=a||R(this.l).event;a.stopPropagation?(a.stopPropagation(),window.Polymer&&window.Polymer.Element&&a.preventDefault()):Ge&&!Je&&(this.s.f.N=!0);return!1};
function Tf(a){if(a.g){var b=0,c=a.s.f.s;c&&(b=c.offsetWidth);b=hh(a.s.f)-b-3;0<b&&(a.g.style.width=b+"px")}}
;function th(){this.i=147}
A(th,N);th.prototype.S=function(a){this.o=a.qb()||document.body};
th.prototype.setup=function(a){this.s=a};
th.prototype.getHeight=function(){this.c||Vf(this);Wf(this);if(!this.f){var a=this.c;"|"!=a.innerHTML&&(a.innerHTML="|");this.f=this.c.offsetHeight}return this.f};
function Vf(a){var b=Q(a.s.Va),c=b.style;c.background="transparent";c.color="#000";c.padding=0;c.position="absolute";c.whiteSpace="pre";a.c=b;a.c.style.visibility="hidden";a.o.appendChild(a.c)}
function Wf(a){var b=y();if(!a.l||a.l+3E3<b){a.l=b;b=a.c;var c=R(b);b=(b=c.getComputedStyle?c.getComputedStyle(b,""):b.currentStyle)?b.fontSize:null;a.m&&b==a.m||(a.g={},a.f=null,a.m=b)}}
;function uh(){ye.call(this);this.set(191,new Vg);this.set(150,new Yg);this.set(146,new Zg);this.set(147,new th);L(this,149,new rf);this.set(145,new eg);this.set(117,new fg);this.set(494,new og);this.set(374,new pg);this.set(120,new qg);this.set(121,new Eg);this.set(553,new Hg);this.set(124,new Qg);this.set(125,new Rg);this.set(123,new Jg);this.set(126,new Tg);this.set(127,new Ug);this.set(115,new uf);this.set(118,new yf);this.set(128,new Qf);L(this,154,new dg);this.set(116,new ah);this.set(119,new ih);
this.set(129,new rh)}
A(uh,ye);function vh(){this.i=347;this.c=[];this.f=0}
A(vh,N);vh.prototype.F=function(a){this.m=a.get(120)};
vh.prototype.G=function(a){this.l="//"+(a.qd||"www."+a.Ja)+"/gen_204?";this.g=a.Jd||{}};
function Fg(a,b){var c=vg(a.m,b,void 0,void 0),d;for(d in a.g)d in c||(c[d]=a.g[d]);c=ge(c,!0);wh(a,a.l+c)}
function wh(a,b){var c=new Image,d=a.f,e=a.c;c.onerror=c.onload=c.onabort=function(){try{delete e[d]}catch(f){}};
a.c[a.f++]=c;c.src=b}
;function xh(){this.i=151;this.f=!0;this.c={}}
A(xh,N);h=xh.prototype;h.F=function(a){this.g=a.get(150)};
h.setup=function(){this.m=ee([0])};
h.G=function(a){this.l=a.Sa;this.f=a.jb};
h.W=function(){this.f=!1};
h.update=function(a){if(this.f){var b=a.c;if(b.length){var c=a.i.i;a:{var d=Number.MAX_VALUE;for(var e,f=0;e=b[f++];){if(!this.m[e.M()]){d=-1;break a}e=e.c;d=Math.min(e.length,d)}}if(-1!=d){var g=b[0].c;if(me(g,c,!0))for(f=c.length+1;f<=d;){c=null;for(e=0;g=b[e++];){g=g.c;if(f>g.length)return;g=g.substr(0,f);if(!c)c=g;else if(c!=g)return}this.c[c]=a;++f}}}}};
h.get=function(a){if(this.f){var b=this.c[a.i];if(b){for(var c=a.u,d=a.i,e=b.f,f=this.l||!e.c.k,g=[],k,n,m=b.c,l=0,q;q=m[l++];)n=q.c,k=f?this.g.bold(c,n):je(n),g.push(new Sd(k,n,q.i,q.M(),q.f||[],q.l));delete this.c[d];return new we(a,g,e,!0,b.g,!1)}}return null};
h.reset=function(){this.c={}};function yh(){this.i=133;this.f={};this.c=[];this.l=this.g=0}
A(yh,N);yh.prototype.F=function(a){this.c=M(a,151);this.c.sort(zh)};
yh.prototype.G=function(){this.l=this.g=0};
yh.prototype.get=function(a){var b=this.f[a.f];if(b)++this.g;else if(this.c)for(var c=0;c<this.c.length;++c)if(b=this.c[c].get(a)){b&&b.g&&(this.f[b.i.f]=b);++this.l;break}return b?new we(a,b.c,b.f,b.l,b.g,b.o):null};
yh.prototype.has=function(a){return!!this.f[a.f]};
function zh(){return 0}
;function Ah(a){this.i=a;this.c=new RegExp("(?:^|\\s+)"+a+"(?:$|\\s+)")}
function Bh(a,b){b&&!a.c.test(b.className)&&(b.className+=" "+a.i)}
function Ch(a,b){b&&(b.className=b.className.replace(a.c," "))}
;function Dh(){this.i=570;this.l=!1}
A(Dh,N);h=Dh.prototype;h.S=function(a){this.o=a};
h.F=function(a){this.m=a.get(117);this.s=a.get(118)};
h.setup=function(a){var b=a.la;if(this.c=b?this.o.pb(b):null)lg(this.m,10,x(this.Fc,this)),lg(this.m,11,x(this.Dc,this)),U(this.m,this.c,"mouseover",x(this.Jc,this)),U(this.m,this.c,"mouseout",x(this.Ic,this)),a.Na&&(this.g=new Ah(a.Na)),a.Ma&&(this.f=new Ah(a.Ma))};
h.G=function(){this.l=!0;this.c&&this.s.f.isFocused()&&this.f&&Bh(this.f,this.c)};
h.W=function(){this.l=!1;this.c&&(this.g&&Ch(this.g,this.c),this.f&&Ch(this.f,this.c))};
h.Jc=function(){this.l&&this.g&&Bh(this.g,this.c)};
h.Ic=function(){this.l&&this.g&&Ch(this.g,this.c)};
h.Fc=function(){this.l&&this.f&&Bh(this.f,this.c)};
h.Dc=function(){this.l&&this.f&&Ch(this.f,this.c)};function Eh(a,b,c,d,e,f,g,k){this.m=35;this.L=a;this.J=b;this.I=c;this.B=d;this.u=e;this.C=g;this.K=k;this.s=!0;this.o=!1;this.i=Q("sbpqs_d");this.l=Q();this.D=P("span","sbpqs_a");this.C&&(this.g=P("a"),this.g.href="#ps",this.g.className="sbsb_i",this.w=Q("fr sbpqs_b"),this.l.appendChild(this.w),this.w.appendChild(this.g),this.f=Q("sbpqs_c"),this.f.innerHTML=this.K);this.l.appendChild(this.D);this.i.appendChild(this.l);this.f&&this.i.appendChild(this.f)}
A(Eh,Fe);Eh.prototype.c=function(){return this.i};
Eh.prototype.isSelectable=function(){return this.s};
Eh.prototype.H=function(a){this.o=!0;var b=x(this.P,this),c=this.J.f,d=this.N;c.f[d]=b;b=[];"1"===he(window.location.search).ssl_dbg&&K("ssl_dbg","1",b);K("delq",d,b);K("client",c.m,b);K("callback","google.sbox.d"+c.l,b);d=c.o;K("tok",c.s,b);c.g&&K("authuser",c.g,b);c.c=P("script");c.c.src=d+b.join("&");be.appendChild(c.c);return Ze(a)};
Eh.prototype.P=function(){if(this.o){var a=this.I;if(a.f){a=a.c;for(var b in a.f)for(var c=a.f[b].c,d=0,e;e=c[d++];)if(35==e.M()){delete a.f[b];break}for(b=0;b<a.c.length;++b)a.c[b].reset()}a=this.L;a.c&&a.c.Cd();this.i.onmouseover=this.i.onmouseout=this.i.onclick=null;this.l.style.display="none";this.f.style.display="";this.u.g==this.A&&Mf(this.B);this.u.c==this.A&&(cg(this.u),this.B.f.focus());this.s=!1}};function Fh(){O.call(this,35)}
A(Fh,O);h=Fh.prototype;h.S=function(a,b){b.addRule(".sbpqs_a","color:#52188c");b.addRule(".sbdd_a[dir=ltr] .sbpqs_a","padding-right:8px");b.addRule(".sbdd_a[dir=rtl] .sbpqs_a","padding-left:8px");b.addRule(".sbdd_a[dir=ltr] .sbpqs_b","padding-right:3px");b.addRule(".sbdd_a[dir=rtl] .sbpqs_b","padding-left:3px");b.addRule(".sbpqs_c","color:#666;line-height:22px")};
h.F=function(a){this.f=a.get(123);this.g=a.get(118);this.m=a.get(189);this.s=a.get(127);this.w=a.get(128)};
h.setup=function(a){this.G(a)};
h.G=function(a){this.u=a.Hd;this.c=a.Nb;this.o=a.Mb};
h.sa=function(a){return new Eh(this.s,this.m,this.f,this.g,this.w,a,this.u,this.o)};
h.Ba=function(a,b){var c=a.getHtml(),d=a.c,e=a.i,f=this.c;b.o=!1;b.s=!0;b.N=d;b.A=e;b.l.style.display="";b.D.innerHTML=c;b.C&&(b.f.style.display="none",b.g.innerHTML=f,b.g.onclick=x(b.H,b))};
h.Aa=function(a,b,c){c.search(b.c,1)};function Gh(){this.i=134;this.f={}}
A(Gh,N);h=Gh.prototype;h.F=function(a){this.l=a.f.getId()};
h.setup=function(){"google"in window||(window.google={});"sbox"in window.google||(window.google.sbox={});window.google.sbox["d"+this.l]=x(this.Ed,this)};
h.G=function(a){this.o="//"+(a.Ob||"clients1."+a.Ja)+"/complete/deleteitems?";this.s=a.gb;this.g=a.authuser;this.m=a.clientName};
h.W=function(){Hh(this)};
function Hh(a){a.c&&(be.removeChild(a.c),a.c=null)}
h.Ed=function(a){Hh(this);a=a[0];var b=this.f[a];b&&(delete this.f[a],b())};function Ih(){this.i=189}
A(Ih,N);Ih.prototype.F=function(a){this.f=a.get(134);this.g=a.get(123);this.o=a.get(118);this.u=a.get(553)};
Ih.prototype.setup=function(a){this.c=a.zc};
Ih.prototype.G=function(a){this.l=a.gb;this.s=!(!this.f||!this.l);this.c&&(a=this.o.c?3E3:0,window.setTimeout(x(this.m,this),a),this.c=!1)};
Ih.prototype.m=function(){var a=If(this.u,"",void 0,void 0,!0);Jf(this.g,a);a=this.g;a.l=a.g};function Jh(){this.i=156}
A(Jh,N);Jh.prototype.F=function(a){this.g=a.get(189)};
Jh.prototype.f=function(a){var b=this.g,c={};b.s&&(c.tok=b.l);"1"===he(window.location.search).ssl_dbg&&(c.ssl_dbg="1");for(var d in c)ve(a,d,c[d]);return 1};
Jh.prototype.c=function(){return 12};function Kh(){this.i=156}
A(Kh,N);Kh.prototype.f=function(a){var b=1,c=a.w;ie(a.c)||"focus"!=c&&"input"!=c||(b=2);return b};
Kh.prototype.c=function(){return 2};function Lh(){this.i=160}
A(Lh,N);h=Lh.prototype;h.S=function(a,b){this.g=a;a.Ia()||(b.addRule(".gsok_a","background:url(data:image/gif;base64,R0lGODlhEwALAKECAAAAABISEv///////yH5BAEKAAIALAAAAAATAAsAAAIdDI6pZ+suQJyy0ocV3bbm33EcCArmiUYk1qxAUAAAOw==) no-repeat center;display:inline-block;height:11px;line-height:0;width:19px"),b.addRule(".gsok_a img","border:none;visibility:hidden"))};
h.F=function(a){this.u=a.get(374);this.w=a.get(128)};
h.setup=function(a){this.l=!!a.xa;this.m=a.Eb;this.s=a.za;this.A=a.td;this.B=a.sd};
h.ca=function(){(this.f=this.g.get("gs_ok"))?this.c=this.f.firstChild:(this.c=P("img"),this.c.src=this.m+"/tia.png",this.f=P("span","gsok_a gsst_e"),this.f.id=this.g.getId("gs_ok"),this.f.appendChild(this.c));this.c.ds=x(this.pc,this);this.c.setAttribute("tia_field_name",this.g.rb().name);this.c.setAttribute("tia_disable_swap",!0)};
h.G=function(a){a.Ta&&(this.l=!!a.xa);this.c.setAttribute("tia_property",a.Fb)};
h.isEnabled=function(){return this.l};
h.sb=function(){return{tooltip:this.B}};
h.Vb=function(a){if(!this.o)a=document.createElement("script"),a.src="//www.google.com/textinputassistant/"+this.A+"/"+this.s+"_tia.js",document.body.appendChild(a),this.o=!0,this.u.add(3);else if(this.c.onclick)this.c.onclick(a)};
h.pc=function(){this.w.dismiss()};
var Mh=de++;function Nh(){this.i=173;this.g={}}
A(Nh,N);h=Nh.prototype;
h.S=function(a,b){this.l=a;a.Ia()||(b.addRule(".gsst_a","display:inline-block"),b.addRule(".gsst_a","cursor:pointer;padding:0 4px"),b.addRule(".gsst_a:hover","text-decoration:none!important"),b.addRule(".gsst_b","font-size:16px;padding:0 2px;position:relative;"+b.prefix("user-select:none;")+"white-space:nowrap"),b.addRule(".gsst_e","vertical-align:middle;"+(bf()+":"+cf(.6)+";")),b.addRule(".gsst_a:hover .gsst_e,.gsst_a:focus .gsst_e",bf()+":"+cf(.8)+";"),b.addRule(".gsst_a:active .gsst_e",bf()+":"+
cf(1)+";"))};
h.F=function(a){this.s=a.get(118);this.f=M(a,160)};
h.setup=function(a){this.m=a.Ta;this.f.sort(Oh)};
h.ca=function(a){this.c=this.l.get("gs_st");if(!this.c){this.c=Q("gsst_b");this.c.id=this.l.getId("gs_st");if(a=a.ma)this.c.style.lineHeight=a+"px";Ph(this)}Qh(this)};
h.G=function(){if(this.m)for(var a=0,b;b=this.f[a++];){var c=!!this.g[Mh];if(b.isEnabled()!=c){for(;this.c.hasChildNodes();)this.c.removeChild(this.c.lastChild);Ph(this);Qh(this);break}}};
function Oh(){return 0}
function Ph(a){for(var b,c=0,d;d=a.f[c++];)if(d.isEnabled()){b=!0;var e=P("a","gsst_a");Rh(a,e,d);e.appendChild(d.f);a.c.appendChild(e)}a.c.style.display=b?"":"none"}
function Qh(a){a.g={};for(var b=0,c;c=a.f[b++];)if(c.isEnabled()){var d=Mh,e=c.f.parentNode;e.onclick=x(c.Vb,c);a.g[d]=e;c.sb&&(c=c.sb(),c.ue&&(d=a.g[d])&&d.style&&(d.style.visibility="hidden"),d=c.tooltip)&&(e.title=d)}}
function Rh(a,b,c){b.href="javascript:void(0)";Je&&(b.tabIndex=0);b.onkeydown=function(b){b=b||window.event;var d=b.keyCode;if(13==d||32==d)c.Vb(b),a.s.f.focus(),Ze(b)}}
de++;function Sh(){this.m=33;this.i=Q();this.i.className="gspr_a"}
A(Sh,Fe);Sh.prototype.c=function(){return this.i};function Th(){O.call(this,33)}
A(Th,O);Th.prototype.S=function(a,b){b.addRule(".gspr_a","padding-right:1px")};
Th.prototype.sa=function(){return new Sh};
Th.prototype.Ba=function(a,b){b.i.innerHTML=a.l.c.b||""};
Th.prototype.Aa=function(a,b,c){c.search(b.c,1)};function Uh(a,b){this.m=0;this.l=a;this.u=b;this.g=Q();this.i=Q("sbqs_a");this.g.appendChild(this.i);this.s=Q("sbqs_c");this.g.appendChild(this.s)}
A(Uh,Fe);Uh.prototype.c=function(){return this.g};
function Vh(a,b,c,d){a.s.innerHTML=b;a.o=c;d&&!a.f&&(a.f=$e(a.i),a.f.onclick=x(function(a){this.l.f.blur();Ff(this.l,this.o);this.u.search(this.o,9);return Ze(a)},a));
d?(a.f.innerHTML=d+" &raquo;",a.i.style.display="",a.i.setAttribute("aria-hidden","true")):a.f&&(a.i.style.display="none")}
;function Wh(){O.call(this,0)}
A(Wh,O);h=Wh.prototype;h.S=function(a,b){b.addRule(".sbsb_c[dir=ltr] .sbqs_a","float:right");b.addRule(".sbsb_c[dir=rtl] .sbqs_a","float:left");b.addRule(".sbqs_b","visibility:hidden");b.addRule(".sbsb_d .sbqs_b","visibility:visible");b.addRule(".sbsb_c[dir=ltr] .sbqs_b","padding-left:5px;");b.addRule(".sbsb_c[dir=rtl] .sbqs_b","padding-right:5px;");b.addRule(".sbqs_c","word-wrap:break-word")};
h.F=function(a){this.f=a.get(118)};
h.G=function(a){this.c=a.mb?a.nb:""};
h.sa=function(a){return new Uh(this.f,a)};
h.Ba=function(a,b){Vh(b,a.getHtml(),a.c,this.c)};
h.Aa=function(a,b,c){c.search(b.c,1)};function Xh(a){uh.call(this);this.set(347,new vh);this.set(133,new yh);L(this,151,new xh);this.set(570,new Dh);this.set(134,new Gh);this.set(189,new Ih);L(this,156,new Jh);L(this,152,new Fh);L(this,152,new Th);L(this,152,new Wh);this.set(173,new Nh);L(this,160,new Lh);this.set(157,new lf);L(this,156,new mf);"zero-prefix"==a.SEARCHBOX_BEHAVIOR_EXPERIMENT&&L(this,156,new Kh);var b=a.SBOX_STRINGS||{};a.SEARCHBOX_REPORTING&&a.SEARCHBOX_COMPONENT&&b.SBOX_REPORT_SUGGESTIONS&&(L(this,153,new De),L(this,
152,new jf(b.SBOX_REPORT_SUGGESTIONS,a.SEARCHBOX_COMPONENT)));a.SEARCHBOX_COMPONENT&&(this.set(598,new nf(a.SEARCHBOX_COMPONENT,a.SEARCHBOX_ENABLE_REFINEMENT_SUGGEST)),L(this,156,new pf))}
A(Xh,uh);function Yh(){return{Qa:function(){return{clientName:"hp",requestIdentifier:"hp",Ja:"google.com",Yb:"",Wa:"en",Ka:"",ab:"",videoId:"",gb:"",authuser:0,rd:"",Je:"",Xb:null,eb:"",wc:!1,Ob:"",bb:"",connectionType:0,He:null,dc:!1,Be:!1,xb:!1,uc:!0,lb:10,ne:10,tc:!0,jb:!0,je:!1,Ac:!1,nd:!1,od:!1,xe:!1,Vc:!0,qc:!1,Wc:500,Ta:!1,Oc:!0,se:!0,De:!1,xa:!1,za:"",Eb:"//www.google.com/textinputassistant",Fb:"",td:7,pe:!1,qe:!1,Sc:!1,Rc:!0,Tc:!1,vb:!1,Bd:!1,Ad:!1,Da:1,zb:!0,ua:!1,mb:!1,kb:!1,vd:10,Sa:!1,yd:!0,V:document.body,
Uc:!0,Zb:null,xc:{},le:{},Ae:0,Bc:!1,Yc:!0,ba:!1,zc:!1,Gd:!1,Ee:null,vc:!1,qd:null,Jd:null,La:!1,Xc:!0,mc:!1,Ge:1,Bb:!1,searchText:"Search",nb:"I'm  Feeling Lucky",Fd:"",pd:"Learn more",Nb:"Remove",Mb:"This search was removed from your Web History",hintText:"",ie:"Did you mean:",sd:"",Ce:"",Me:"Search by voice",Le:'Listening for "Ok Google"',Ke:'Say "Ok Google"',ge:"Clear Search",ma:0,hd:0,Va:"",Ca:"",isRtl:!1,ka:"absolute",Pc:!1,ub:!1,Kb:null,Qc:!0,ta:[0,0,0],sc:null,Md:null,hb:[0],Hd:!0,cc:"",Nd:"",
Ld:"",la:null,Na:"",Ma:"",fe:1,Pd:!1,ob:!1,ye:0,Id:!1,oc:!1,ke:!1,wd:!0}}}}
;function Zh(a,b,c,d,e){var f=Ie?"-moz-":Ge?"-ms-":Je?"-o-":Ke?"-webkit-":"",g=".gstl_"+d,k=new RegExp("(\\.("+e.join("|")+")\\b)"),n=[];return{addRule:function(a,d){if(b){if(c){for(var e=a.split(","),f=[],l=0,m;m=e[l++];)m=k.test(m)?m.replace(k,g+"$1"):g+" "+m,f.push(m);a=f.join(",")}n.push(a,"{",d,"}")}},
lc:function(){if(b&&n.length){b=!1;var c=P("style");c.setAttribute("type","text/css");(a||be).appendChild(c);var d=n.join("");n=null;c.styleSheet?c.styleSheet.cssText=d:c.appendChild(document.createTextNode(d))}},
prefix:function(a,b){var c=a+(b||"");f&&(c+=b?a+f+b:f+a);return c}}}
;function $h(a,b,c,d){this.f=a;this.H=b;this.B=c;this.C=d;this.i=-1;this.u=!1}
h=$h.prototype;h.install=function(a){if(!this.u){a=ai(a);0>this.i&&(this.i=bi(a));var b=We(this.f),c=ci(this),d=!!b.getElementById("gs_id"+this.i),e=this,f=["gssb_c","gssb_k","sbdd_a","sbdd_c","sbib_a"];a.cc&&f.push(a.cc);f=Zh(a.Zb,a.Uc,a.vc,this.i,f);this.o=a.ba;this.c=new ze(this.B,this.C,{Ia:function(){return d},
get:function(a){return b.getElementById(a+e.i)},
pb:function(a){return b.getElementById(a)},
qb:function(){return e.H},
Pa:function(){return c},
getId:function(a){return a+e.i},
rb:function(){return e.f}},f,this,a);
this.c.get(347);this.w=this.c.get(130);this.c.get(115);this.D=this.c.get(117);this.c.get(123);this.I=this.c.get(118);this.g=this.c.get(119);this.c.get(374);this.l=this.c.get(120);this.c.get(189);this.J=this.c.get(553);this.c.get(419);this.c.get(126);this.c.get(128);this.c.get(139);this.A=this.c.get(121);a=R(this.f);this.m=af(a);this.s=x(this.zd,this);mg(a,"resize",this.s);this.u=!0}};
h.isActive=function(){return!!this.c&&this.c.isActive()};
function di(a,b){function c(b){a.A.search(a.I.c,12);return Ye(b)}
mg(b,"keyup",function(a){13!=a.keyCode&&32!=a.keyCode||c(a)});
mg(b,"click",c)}
h.focus=function(){this.g.focus()};
h.blur=function(){this.g.blur()};
h.isFocused=function(){return this.g.isFocused()};
h.getId=function(){return this.i};
h.search=function(a,b){this.A.search(a,b)};
h.ba=function(){return this.o||!!this.w&&this.w.ba()};
h.cb=function(a){this.J.cb(a)};
function bi(a){a=R(a.Zb||be);void 0==a.nextSearchboxId&&(a.nextSearchboxId=50);return a.nextSearchboxId++}
function ci(a){if(a.f)for(a=a.f;a=a.parentNode;){var b=a.dir;if(b)return b}return"ltr"}
function ai(a){a=re(a);var b=a.za;b?a.za=b.toLowerCase():a.xa=!1;a.ua&&!a.mb&&(a.ua=!1);Me||(a.od=!1);return a}
h.zd=function(){var a=af(R(this.f));if(a.ec!=this.m.ec||a.wb!=this.m.wb)this.m=a,S(this.D,8)};function ei(){this.w=4;this.A=/\/(movie|show)s?($|[?#/])/i;this.B=/\/results\?(.*&)?search_type=(movies|shows)($|[&#])/i;this.s="sbhcn";this.o="sbfcn";this.g="gsfi";this.l="gsfs";this.u=function(){return!0}}
A(ei,xe);h=ei.prototype;h.search=function(a,b){this.u(vg(this.c.l,b,void 0))&&this.H.submit()};
h.redirect=function(a){this.C(this.Tb(a))};
h.Tb=function(a){var b=0<=a.indexOf("?")?"&":"?",c;(c=vg(this.c.l,void 0,void 0))||(c=vg(this.c.l,void 0));c=ge(c);return a+b+c};
h.Ab=function(a){if(this.f||this.i)a.addRule(".sbsb_c","padding:4px 24px 4px 10px"),this.D?a.addRule(".sbsb_a","padding: 16px 0 0"):a.addRule(".sbsb_a","padding: 16px 0"),["material-centered","material-left"].includes(this.m)?(a.addRule(".sbdd_b","border: 0"),a.addRule(".sbdd_b","box-shadow: 0 4px 8px 0 var(--yt-material-searchbox-active-shadow), 0 0 0 1px var(--yt-material-searchbox-inset);")):a.addRule(".sbdd_b","border-top: 0"),a.addRule(".sbib_a","background:transparent"),a.addRule(".sbib_b",
"padding: 0");this.f?(a.addRule("."+this.l,"font-size:1.6rem;color:#222"),a.addRule(".sbqs_c b","font-weight:500"),["material-centered","material-left"].includes(this.m)?(a.addRule(".sbdd_c","z-index:2030"),a.addRule(".sbdd_a","z-index:2031")):(a.addRule(".sbdd_c","z-index:2010"),a.addRule(".sbdd_a","z-index:2011")),a.addRule(".sbib_a","background:transparent; width: 100%; flex: 1;"),a.addRule("ytd-masthead[dark] .gsst_e","filter: invert(100%)")):(a.addRule("."+this.g,"font-size:16px;height:100% !important"),
a.addRule(".sbib_b ."+this.g,"position:relative !important"),a.addRule("."+this.l,"font-size:16px"),a.addRule("a.sbsb_i","font-size:12px;color:#03c"),a.addRule(".sbdd_c","z-index:2000000006"),a.addRule(".sbdd_a","z-index:2000000007"),this.i||(a.addRule(".sbsb_c,.sbsb_c td","line-height:20px"),a.addRule(".sbsb_c","padding:0 6px"),a.addRule(".sbsb_d td","background:#eee"),a.addRule(".sbsb_e","margin:2px 0"),a.addRule(".sbib_a","background:transparent"),a.addRule(".sbib_b","padding:2px 6px"),a.addRule(".gsok_a",
"padding:0"),a.addRule(".gsok_a img","display:block"),a.addRule("."+this.s,"border:1px solid #b9b9b9;border-top-color:#a0a0a0"+a.prefix("box-shadow:inset 0 1px 2px rgba(0,0,0,0.1);")),a.addRule("."+this.o,"border:1px solid #1c62b9;"+a.prefix("box-shadow:inset 0 1px 2px rgba(0,0,0,0.3);")+"outline:none;")))};
h.install=function(a,b,c,d,e,f,g){this.H=a;this.C=f;g&&(this.u=g);f=Yh().Qa();g="youtube";f.clientName=g;f.requestIdentifier=g;f.Ka="yt";f.Wa=d.REQUEST_LANGUAGE;f.Yb=d.REQUEST_DOMAIN;f.Oc=!1;f.Da=0;f.zb=!1;f.ua=!1;f.Bb=!1;f.Sa=!0;f.Va=this.g;f.Ca=this.l;f.Na=this.s;f.Ma=this.o;f.we=!0;g=window.location.href;g=this.A.test(g)||this.B.test(g);f.xb=g;f.xa=d.HAS_ON_SCREEN_KEYBOARD;f.za=d.REQUEST_LANGUAGE;f.Eb="//www.gstatic.com/inputtools/images";f.Fb="youtube";f.La=!0;f.ka="fixed";this.f=d.IS_POLYMER;
this.i=d.IS_FUSION;this.D=d.SEARCHBOX_REPORTING;this.m=d.SEARCHBOX_DESIGN_EXPERIMENT;d.PQ&&(f.ab=d.PQ);f.gb=d.PSUGGEST_TOKEN;f.authuser=d.SESSION_INDEX;f.Mb=e.SUGGESTION_DISMISSED_LABEL;f.Nb=e.SUGGESTION_DISMISS_LABEL;f.Fe=ee([0,33,35]);this.f?(f.la="search-container",f.ma=24):this.i?(f.la="masthead-search",f.ma=24):(f.la="masthead-search-terms",f.ma=30);eb()||(f.ub=!0);-1!=window.location.href.indexOf("/watch?")&&(eb()||D("Windows")&&gb())&&(g="youtube-reduced",f.clientName=g,f.requestIdentifier=
g,f.lb=this.w);f.Kb=f.la;e=-3;D("Windows")&&fb()&&"8.0"==ib()&&(e=-5);this.i?e=17:this.f&&(e=["material-centered","material-left"].includes(this.m)?6:16);f.ta=[e,0,0];e=[0];fb()&&"8.0"==ib()&&(e[0]=-1);f.hb=e;(e=d.REQUEST_LANGUAGE)?(e=e.toLowerCase(),e="zh-tw"==e||"zh-cn"==e||"ja"==e||"ko"==e):e=!1;e&&(f.kb=!0);if(e=d.SUGG_EXP_ID)f.eb=e;if(this.c){a=this.c;b=f;c=R(a.f);d=a.s;c.removeEventListener?c.removeEventListener("resize",d,!1):c.detachEvent("onresize",d);Be(a.c);b=ai(b);a.o=b.ba;a=a.c;Be(a);
for(c=0;d=a.c[c++];)d.G(b);a.i=!0}else d=new Xh(d),this.c=new $h(b,a,this,d),this.c.install(f),c&&(di(this.c,c),c.onclick=null)};function fi(){this.i=[];this.c=-1}
fi.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.i[a]!=b&&(this.i[a]=b,this.c=-1)};
fi.prototype.get=function(a){return!!this.i[a]};
function gi(a){-1==a.c&&(a.c=Ea(a.i,function(a,c,d){return c?a+Math.pow(2,d):a},0));
return a.c}
;var hi=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};var ii=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};z("yt.config_",ii);function ji(a){var b=arguments;if(1<b.length)ii[b[0]]=b[1];else{b=b[0];for(var c in b)ii[c]=b[c]}}
function V(a,b){return a in ii?ii[a]:b}
function W(a){return V(a,void 0)}
;var ki={};function li(){return ki.clicktracking||(ki.clicktracking="clicktracking".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;function mi(){}
mi.prototype.c=function(a,b){return ni(a,1,b)};function oi(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){pi(b)}}:a}
function pi(a,b){var c=w("yt.logging.errors.log");c?c(a,b,void 0,void 0,void 0):(c=V("ERRORS",[]),c.push([a,b,void 0,void 0,void 0]),ji("ERRORS",c))}
;function qi(a,b){xa(a)&&(a=oi(a));return window.setTimeout(a,b)}
;function X(){}
ja(X,mi);function ni(a,b,c){isNaN(c)&&(c=void 0);var d=w("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):qi(a,c||0)}
X.prototype.start=function(){var a=w("yt.scheduler.instance.start");a&&a()};
X.c=void 0;X.Qa=function(){return X.c?X.c:X.c=new X};
var ri=X.Qa();function Y(a){return V("EXPERIMENT_FLAGS",{})[a]}
;var si=0;z("ytDomDomGetNextId",w("ytDomDomGetNextId")||function(){return++si});z("ytEventsEventsListeners",w("ytEventsEventsListeners")||{});z("ytEventsEventsCounter",w("ytEventsEventsCounter")||{count:0});var ti=w("ytPubsubPubsubInstance")||new H;H.prototype.subscribe=H.prototype.subscribe;H.prototype.unsubscribeByKey=H.prototype.fb;H.prototype.publish=H.prototype.xd;H.prototype.clear=H.prototype.clear;z("ytPubsubPubsubInstance",ti);z("ytPubsubPubsubSubscribedKeys",w("ytPubsubPubsubSubscribedKeys")||{});z("ytPubsubPubsubTopicToKeys",w("ytPubsubPubsubTopicToKeys")||{});z("ytPubsubPubsubIsSynchronous",w("ytPubsubPubsubIsSynchronous")||{});var ui=Math.pow(2,16)-1,vi=null,wi=0,xi={log_event:"events",log_interaction:"interactions"},yi=Object.create(null);yi.log_event="GENERIC_EVENT_LOGGING";yi.log_interaction="INTERACTION_LOGGING";var zi=new Set(["log_event"]),Ai={},Bi=0,Ci=0,Z=w("ytLoggingTransportLogPayloadsQueue_")||{};z("ytLoggingTransportLogPayloadsQueue_",Z);var Di=w("ytLoggingTransportTokensToCttTargetIds_")||{};z("ytLoggingTransportTokensToCttTargetIds_",Di);var Ei=w("ytLoggingTransportDispatchedStats_")||{};
z("ytLoggingTransportDispatchedStats_",Ei);z("ytytLoggingTransportCapturedTime_",w("ytLoggingTransportCapturedTime_")||{});function Fi(){window.clearTimeout(Bi);window.clearTimeout(Ci);Ci=0;if(!ab(Z)){for(var a in Z){var b=Ai[a];b&&(Gi(a,b),delete Z[a])}ab(Z)||Hi()}}
function Hi(){Y("web_gel_timeout_cap")&&!Ci&&(Ci=qi(Fi,3E4));window.clearTimeout(Bi);Bi=qi(Fi,V("LOGGING_BATCH_TIMEOUT",1E4))}
function Ii(a,b){b=void 0===b?"":b;Z[a]=Z[a]||{};Z[a][b]=Z[a][b]||[];return Z[a][b]}
function Gi(a,b){var c=xi[a],d=Ei[a]||{};Ei[a]=d;var e=Math.round(hi());for(m in Z[a]){var f=bb,g=b.c;g={client:{hl:g.ed,gl:g.dd,clientName:g.bd,clientVersion:g.cd}};var k=window.devicePixelRatio;k&&1!=k&&(g.client.screenDensityFloat=String(k));V("DELEGATED_SESSION_ID")&&!Y("pageid_as_header_web")&&(g.user={onBehalfOfUser:V("DELEGATED_SESSION_ID")});f=f({context:g});f[c]=Ii(a,m);d.dispatchedEventCount=d.dispatchedEventCount||0;d.dispatchedEventCount+=f[c].length;if(g=Di[m])a:{var n=m;if(g.videoId)k=
"VIDEO";else if(g.playlistId)k="PLAYLIST";else break a;f.credentialTransferTokenTargetId=g;f.context=f.context||{};f.context.user=f.context.user||{};f.context.user.credentialTransferTokens=[{token:n,scope:k}]}delete Di[m];f.requestTimeMs=e;if(g=W("EVENT_ID"))k=(V("BATCH_CLIENT_COUNTER",void 0)||0)+1,k>ui&&(k=1),ji("BATCH_CLIENT_COUNTER",k),g={serializedEventId:g,clientCounter:k},f.serializedClientEventId=g,vi&&wi&&Y("log_gel_rtt_web")&&(f.previousBatchInfo={serializedClientEventId:vi,roundtripMs:wi}),
vi=g,wi=0;Ji(b,a,f,{retry:zi.has(a),onSuccess:x(Ki,this,hi())})}if(d.previousDispatchMs){c=e-d.previousDispatchMs;var m=d.diffCount||0;d.averageTimeBetweenDispatchesMs=m?(d.averageTimeBetweenDispatchesMs*m+c)/(m+1):c;d.diffCount=m+1}d.previousDispatchMs=e}
function Ki(a){wi=Math.round(hi()-a)}
;function Li(){var a=Mi,b={};b.dt=Yb;b.flash="0";a:{try{var c=a.c.top.location.href}catch(f){a=2;break a}a=c?c===a.i.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?B:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!B.navigator&&"unknown"!==typeof B.navigator.javaEnabled&&!!B.navigator.javaEnabled&&B.navigator.javaEnabled();B.screen&&(b.u_h=B.screen.height,b.u_w=B.screen.width,b.u_ah=B.screen.availHeight,b.u_aw=B.screen.availWidth,b.u_cd=B.screen.colorDepth);
B.navigator&&B.navigator.plugins&&(b.u_nplug=B.navigator.plugins.length);B.navigator&&B.navigator.mimeTypes&&(b.u_nmime=B.navigator.mimeTypes.length);return b}
function Ni(){var a=Mi;var b=a.c;try{var c=b.screenX;var d=b.screenY}catch(q){}try{var e=b.outerWidth;var f=b.outerHeight}catch(q){}try{var g=b.innerWidth;var k=b.innerHeight}catch(q){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,k];c=a.c.top;try{var n=(c||window).document,m="CSS1Compat"==n.compatMode?n.documentElement:n.body;var l=(new Qb(m.clientWidth,m.clientHeight)).round()}catch(q){l=new Qb(-12245933,-12245933)}n=l;l={};m=new fi;
t.SVGElement&&t.document.createElementNS&&m.set(0);c=Wb();c["allow-top-navigation-by-user-activation"]&&m.set(1);c["allow-popups-to-escape-sandbox"]&&m.set(2);t.crypto&&t.crypto.subtle&&m.set(3);m=gi(m);l.bc=m;l.bih=n.height;l.biw=n.width;l.brdim=b.join();a=a.i;return l.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,l.wgl=!!B.WebGLRenderingContext,l}
var Mi=new function(){var a=window.document;this.c=window;this.i=a};y();var Oi=u(XMLHttpRequest)?function(){return new XMLHttpRequest}:u(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function Pi(){if(!Oi)return null;var a=Oi();return"open"in a?a:null}
;function Qi(a){var b=[];Za(a,function(a,d){var c=encodeURIComponent(String(d)),f;va(a)?f=a:f=[a];C(f,function(a){""==a?b.push(c):b.push(c+"="+encodeURIComponent(String(a)))})});
return b.join("&")}
function Ri(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=Va(e[0]||""),g=Va(e[1]||"");f in b?va(b[f])?Ha(b[f],g):b[f]=[b[f],g]:b[f]=g}catch(n){if(Y("catch_invalid_url_components")){var k=Error("Error decoding URL component.");k.params="key: "+e[0]+", value: "+e[1];pi(k)}else throw n;}}return b}
function Si(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Ri(e[1]||"");for(var f in b)if(c||!$a(e,f))e[f]=b[f];return Nd(a,e)+d}
;var Ti={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Ui="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
Vi=!1;
function Wi(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=J(1,a),e=I(J(3,a));d&&e?(d=c,c=a.match(Kd),d=d.match(Kd),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?I(J(3,c))==e&&(Number(J(4,c))||null)==(Number(J(4,a))||null):!0;d=!!Y("web_ajax_ignore_global_headers_if_set");for(var f in Ti)e=V(Ti[f]),!e||!c&&!Xi(a,f)||d&&void 0!==b[f]||(b[f]=e);if(c||Xi(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=-(new Date).getTimezoneOffset();Y("pass_biscotti_id_in_header_ajax")&&(c||Xi(a,"X-YouTube-Ad-Signals"))&&
(f=void 0,f=void 0===f?w("yt.ads.biscotti.lastId_")||"":f,c=Object.assign(Li(),Ni()),c.ca_type="image",f&&(c.bid=f),b["X-YouTube-Ad-Signals"]=Qi(c));return b}
function Yi(a){var b=window.location.search,c=I(J(3,a)),d=I(J(5,a));d=(c=c&&c.endsWith("youtube.com"))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Ri(b),f={};C(Ui,function(a){e[a]&&(f[a]=e[a])});
return Si(a,f||{},!1)}
function Xi(a,b){var c=V("CORS_HEADER_WHITELIST")||{},d=I(J(3,a));return d?(c=c[d])?0<=Ca(c,b):!1:!0}
function Zi(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=$i(a,b);var d=aj(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(a){if(!e){e=!0;f&&window.clearTimeout(f);var c=a.ok,d=function(d){d=d||{};var e=b.context||t;c?b.onSuccess&&b.onSuccess.call(e,d,a):b.onError&&b.onError.call(e,d,a);b.Ya&&b.Ya.call(e,d,a)};
"JSON"==(b.format||"JSON")&&(c||400<=a.status&&500>a.status)?a.json().then(d,function(){d(null)}):d(null)}});
b.Db&&0<b.timeout&&(f=qi(function(){e||(e=!0,window.clearTimeout(f),b.Db.call(b.context||t))},b.timeout))}else bj(a,b)}
function bj(a,b){var c=b.format||"JSON";a=$i(a,b);var d=aj(a,b),e=!1,f,g=cj(a,function(a){if(!e){e=!0;f&&window.clearTimeout(f);a:switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var d=!0;break a;default:d=!1}var g=null,k=400<=a.status&&500>a.status,q=500<=a.status&&600>a.status;if(d||k||q)g=dj(c,a,b.he);if(d)a:if(a&&204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(g&&g.return_code,10);break a;case "RAW":d=!0;break a}d=!!g}g=g||
{};k=b.context||t;d?b.onSuccess&&b.onSuccess.call(k,a,g):b.onError&&b.onError.call(k,a,g);b.Ya&&b.Ya.call(k,a,g)}},b.method,d,b.headers,b.responseType,b.withCredentials);
b.Gb&&0<b.timeout&&(f=qi(function(){e||(e=!0,g.abort(),window.clearTimeout(f))},b.timeout))}
function $i(a,b){b.te&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=W("XSRF_FIELD_NAME"),d=b.Ie;d&&(d[c]&&delete d[c],a=Si(a,d||{},!0));return a}
function aj(a,b){var c=W("XSRF_FIELD_NAME"),d=W("XSRF_TOKEN"),e=b.postBody||"",f=b.na,g=W("XSRF_FIELD_NAME"),k;b.headers&&(k=b.headers["Content-Type"]);b.me||I(J(3,a))&&!b.withCredentials&&I(J(3,a))!=document.location.hostname||"POST"!=b.method||k&&"application/x-www-form-urlencoded"!=k||b.na&&b.na[g]||(f||(f={}),f[c]=d);f&&v(e)&&(e=Ri(e),db(e,f),e=b.Ib&&"JSON"==b.Ib?JSON.stringify(e):Md(e));f=e||f&&!ab(f);!Vi&&f&&"POST"!=b.method&&(Vi=!0,pi(Error("AJAX request with postData should use POST")));return e}
function dj(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?ej(b):null)d={},C(b.getElementsByTagName("*"),function(a){d[a.tagName]=fj(a)})}c&&gj(d);
return d}
function gj(a){if(ya(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Nb(a[b],null);a[c]=d}else gj(a[b])}}
function ej(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function fj(a){var b="";C(a.childNodes,function(a){b+=a.nodeValue});
return b}
function cj(a,b,c,d,e,f,g){function k(){4==(n&&"readyState"in n?n.readyState:0)&&b&&oi(b)(n)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var n=Pi();if(!n)return null;"onloadend"in n?n.addEventListener("loadend",k,!1):n.onreadystatechange=k;Y("debug_forward_web_query_parameters")&&(a=Yi(a));n.open(c,a,!0);f&&(n.responseType=f);g&&(n.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Wi(a,e))for(var m in e)n.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&n.setRequestHeader("Content-Type","application/x-www-form-urlencoded");n.send(d);
return n}
;function hj(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||V("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.de||V("AUTHORIZATION"))||(a?b="Bearer "+w("gapi.auth.getToken")().ce:b=cc([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=V("SESSION_INDEX",0),Y("pageid_as_header_web")&&(d["X-Goog-PageId"]=V("DELEGATED_SESSION_ID")));return d}
function ij(a){a=Object.assign({},a);delete a.Authorization;var b=cc();if(b){var c=new rc;c.update(W("INNERTUBE_API_KEY"));c.update(b);b=c.digest();if(!Bb)for(Bb={},Cb={},c=0;65>c;c++)Bb[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c),Cb[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(c);c=Cb;for(var d=[],e=0;e<b.length;e+=3){var f=b[e],g=e+1<b.length,k=g?b[e+1]:0,n=e+2<b.length,m=n?b[e+2]:0,l=f>>2;f=(f&3)<<4|k>>4;k=(k&15)<<2|m>>6;m&=
63;n||(m=64,g||(k=64));d.push(c[l],c[f],c[k],c[m])}a.hash=d.join("")}return a}
;function jj(){var a=new Cd;(a=a.isAvailable()?new Id(a,"yt.innertube"):null)||(a=new Dd("yt.innertube"),a=a.isAvailable()?a:null);this.c=a?new yd(a):null;this.i=document.domain||window.location.hostname}
jj.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.c)try{this.c.set(a,b,y()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(nd(b))}catch(f){return}else e=escape(b);b=this.i;Eb.set(""+a,e,c,"/",void 0===b?"youtube.com":b,!1)};
jj.prototype.get=function(a,b){var c=void 0,d=!this.c;if(!d)try{c=this.c.get(a)}catch(e){d=!0}if(d&&(c=Eb.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
jj.prototype.remove=function(a){this.c&&this.c.remove(a);var b=this.i;Eb.remove(""+a,"/",void 0===b?"youtube.com":b)};var kj=new jj;function lj(a,b,c,d){if(d)return null;d=kj.get("nextId",!0)||1;var e=kj.get("requests",!0)||{};e[d]={method:a,request:b,authState:ij(c),requestTime:Math.round(hi())};kj.set("nextId",d+1,86400,!0);kj.set("requests",e,86400,!0);return d}
function mj(a){var b=kj.get("requests",!0)||{};delete b[a];kj.set("requests",b,86400,!0)}
function nj(a){var b=kj.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(hi())-d.requestTime)){var e=d.authState;var f=ij(hj(!1));a:{var g=void 0;for(g in e)if(!(g in f)||e[g]!==f[g]){e=!1;break a}for(g in f)if(!(g in e)){e=!1;break a}e=!0}e&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(hi())),Ji(a,d.method,e,{}));delete b[c]}}kj.set("requests",b,86400,!0)}}
;function oj(a){var b=this;this.c=a||{Zc:W("INNERTUBE_API_KEY"),ad:W("INNERTUBE_API_VERSION"),bd:V("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),cd:W("INNERTUBE_CONTEXT_CLIENT_VERSION"),ed:W("INNERTUBE_CONTEXT_HL"),dd:W("INNERTUBE_CONTEXT_GL"),fd:W("INNERTUBE_HOST_OVERRIDE")||"",gd:!!V("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)};ni(function(){nj(b)},0,5E3)}
function Ji(a,b,c,d){!V("VISITOR_DATA")&&.01>Math.random()&&pi(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json"},method:"POST",na:c,Ib:"JSON",Gb:function(){},
Db:d.Gb,onSuccess:function(a,b){if(d.onSuccess)d.onSuccess(b)},
Cb:function(a){if(d.onSuccess)d.onSuccess(a)},
onError:function(a,b){if(d.onError)d.onError(b)},
ze:function(a){if(d.onError)d.onError(a)},
timeout:d.timeout,withCredentials:!0},f="",g=a.c.fd;g&&(f=g);g=a.c.gd||!1;var k=hj(g,f,d);Object.assign(e.headers,k);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var n=""+f+("/youtubei/"+a.c.ad+"/"+b)+"?alt=json&key="+a.c.Zc,m;if(d.retry&&Y("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(m=lj(b,c,k,g))){var l=e.onSuccess,q=e.Cb;e.onSuccess=function(a,b){mj(m);l(a,b)};
c.Cb=function(a,b){mj(m);q(a,b)}}try{Y("use_fetch_for_op_xhr")?Zi(n,e):(e.method="POST",e.na||(e.na={}),bj(n,e))}catch(Na){if("InvalidAccessError"==Na)m&&(mj(m),m=0),pi(Error("An extension is blocking network request."),"WARNING");
else throw Na;}m&&ni(function(){nj(a)},0,5E3)}
;var pj=y().toString();var qj;
if(!(qj=w("ytLoggingTimeDocumentNonce_"))){var rj;a:{if(window.crypto&&window.crypto.getRandomValues)try{var sj=Array(16),tj=new Uint8Array(16);window.crypto.getRandomValues(tj);for(var uj=0;uj<sj.length;uj++)sj[uj]=tj[uj];rj=sj;break a}catch(a){}for(var vj=Array(16),wj=0;16>wj;wj++){for(var xj=y(),yj=0;yj<xj%23;yj++)vj[wj]=Math.random();vj[wj]=Math.floor(256*Math.random())}if(pj)for(var zj=1,Aj=0;Aj<pj.length;Aj++)vj[zj%16]=vj[zj%16]^vj[(zj-1)%16]/4^pj.charCodeAt(Aj),zj++;rj=vj}for(var Bj=rj,Cj=
[],Dj=0;Dj<Bj.length;Dj++)Cj.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(Bj[Dj]&63));qj=Cj.join("")}var Ej=qj;z("ytLoggingTimeDocumentNonce_",Ej);function Fj(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function Gj(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
z("yt_logging_screen.getRootVeType",function(a){return V(Gj(void 0===a?0:a),void 0)});
function Hj(a){a=void 0===a?0:a;var b=V(Fj(a));b||0!=a||(b=V("EVENT_ID"));return b?b:null}
z("yt_logging_screen.getCurrentCsn",Hj);
z("yt_logging_screen.setCurrentScreen",function(a,b,c){c=void 0===c?0:c;if(a!==V(Fj(c))||b!==V(Gj(c)))ji(Fj(c),a),ji(Gj(c),b),0==c&&(b=function(){setTimeout(function(){if(a){var b={clientDocumentNonce:Ej,clientScreenNonce:a},c={};c.eventTimeMs=Math.round(hi());c.foregroundHeartbeatScreenAssociated=b;b=String;var f=w("_lact",window);f=null==f?-1:Math.max(y()-f,0);c.context={lastActivityMs:b(f)};b=Ii("log_event");b.push(c);oj&&(Ai.log_event=new oj);b.length>=(Number(Y("web_logging_max_batch")||0)||
20)?Fi():Hi()}},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b())});function Ij(a,b,c){for(var d=0,e=0;e<a.length;++e)d=31*d+a.charCodeAt(e)>>>0;a="ST-"+d.toString(36);b=b?Md(b):"";Eb.set(""+a,b,c||5,"/","youtube.com",!1)}
;function Jj(a,b,c,d,e){if(a&&e){var f=V("SBOX_SETTINGS"),g=V("SBOX_LABELS");f&&g&&(a=w("searchbox.yt.install")(a,b,c,f,g,Kj,d))&&e(a,100)}}
function Lj(a,b){var c=V("EVENT_ID");if(c){b.ei=c;b.feature="web-masthead-search";c=(c=document.getElementById("masthead-search"))?c.dataset?c.dataset[li()]:c.getAttribute("data-clicktracking"):null;b.ved=c||"";c=a;var d=V("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=I(J(3,window.location.href));e&&d.push(e);e=I(J(3,c));if(0<=Ca(d,e)||!e&&0==c.lastIndexOf("/",0))if(Y("autoescape_tempdata_url")&&(d=document.createElement("a"),Pb(d,c),c=d.href),c){e=c.match(Kd);c=e[5];d=e[6];e=e[7];var f="";c&&(f+=c);d&&
(f+="?"+d);e&&(f+="#"+e);c=f;d=c.indexOf("#");if(c=0>d?c:c.substr(0,d)){if(b.itct||b.ved)b.csn=b.csn||Hj();if(g){var g=parseInt(g,10);isFinite(g)&&0<g&&Ij(c,b,g)}else Ij(c,b)}}}}
function Kj(a,b){Lj(a,b?{feature:b}:{});var c=w("yt.window.navigate");try{c(a)}catch(g){var d=void 0===d?{}:d;var e=void 0===e?"":e;var f=void 0===f?window:f;c=f.location;d=Nd(a,d)+e;d=d instanceof E?d:Jb(d);c.href=Hb(d)}}
function Mj(a){for(var b=document.getElementById("masthead-search"),c=[],d=b.elements,e,f=0;e=d[f];f++)if(e.form==b&&!e.disabled&&"FIELDSET"!=e.tagName){var g=e.name;switch(e.type.toLowerCase()){case "file":case "submit":case "reset":case "button":break;case "select-multiple":e=Ic(e);if(null!=e)for(var k,n=0;k=e[n];n++)Hc(c,g,k);break;default:k=Ic(e),null!=k&&Hc(c,g,k)}}d=b.getElementsByTagName("INPUT");for(f=0;e=d[f];f++)e.form==b&&"image"==e.type.toLowerCase()&&(g=e.name,Hc(c,g,e.value),Hc(c,g+
".x","0"),Hc(c,g+".y","0"));c=c.join("&").replace(/%20/g,"+");b.hasAttribute("data-is-crosswalk")&&"0"!=b.getAttribute("data-is-crosswalk")&&(c+="&sp=mAEB");b=b.action+"?"+c;Lj(b,a);a=!!V("SPF_SEARCH_BOX");if(!w("ytspf.enabled")||!a)return!0;a=w("yt.window.navigate");try{a(b)}catch(m){return!0}return!1}
;z("searchbox.yt.install",function(a,b,c,d,e,f,g){Ce||(Ce=new ei);Ce.install(a,b,c,d,e,f,g)});
z("yt.www.masthead.searchbox.init",function(){var a=document.getElementById("masthead-search");Jj(a,a.search_query,document.getElementById("search-btn"),Mj,window.setTimeout)});
z("yt.www.masthead.searchbox.initPolymer",function(a,b,c,d){Jj(a,b,c,d,ri.c)});}).call(this);
