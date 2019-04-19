!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:
b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),
o={};
function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}
var q="3.2.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};
r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},
get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},
pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},
each:function(a){return r.each(this,a)},
map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},
slice:function(){return this.pushStack(f.apply(this,arguments))},
first:function(){return this.eq(0)},
last:function(){return this.eq(-1)},
eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},
end:function(){return this.prevObject||this.constructor()},
push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||
r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&
r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),
isReady:!0,error:function(a){throw new Error(a);},
noop:function(){},
isFunction:function(a){return"function"===r.type(a)},
isWindow:function(a){return null!=a&&a===a.window},
isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},
isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},
isEmptyObject:function(a){var b;for(b in a)return!1;return!0},
type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},
globalEval:function(a){p(a)},
camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},
each:function(a,b){var c,d=0;if(w(a))for(c=a.length;d<c;d++){if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},
trim:function(a){return null==a?"":(a+"").replace(s,"")},
makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},
inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},
merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},
grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},
map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},
guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=
a.guid||r.guid++,e},
now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+
b+"]"]=b.toLowerCase()});
function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}
var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,
G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;
return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\x00-\\xa0])+",M="\\["+
K+"*("+L+")(?:"+K+"*([*^$|!~]?\x3d)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+
M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([\x3e+~]|"+K+")"+K+"*"),S=new RegExp("\x3d"+K+
"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),
CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+
K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[\x3e+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?\x3d[^-]|$)",
"i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,
b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?
"\x00"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",
next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;
while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;
if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1])if(9===w){if(!(j=b.getElementById(f)))return d;
if(j.id===f)return d.push(j),d}else{if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&
b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=
k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===
u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}
function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}
return b}
function ia(a){return a[u]=!0,a}
function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}
function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}
function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}
function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}
function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}
function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===
a:b.disabled===a:"label"in b&&b.disabled===a}}
function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}
function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}
c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;
return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",
da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),
c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=
a.replace(_,aa);
return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);
return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);
return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);
if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?
function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);
if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},
r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="\x3ca id\x3d'"+u+"'\x3e\x3c/a\x3e\x3cselect id\x3d'"+u+"-\r\\' msallowcapture\x3d''\x3e\x3coption selected\x3d''\x3e\x3c/option\x3e\x3c/select\x3e",
a.querySelectorAll("[msallowcapture^\x3d'']").length&&q.push("[*^$]\x3d"+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~\x3d"+u+"-]").length||
q.push("~\x3d"),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="\x3ca href\x3d'' disabled\x3d'disabled'\x3e\x3c/a\x3e\x3cselect disabled\x3d'disabled'\x3e\x3coption/\x3e\x3c/select\x3e";
var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name\x3dd]").length&&q.push("name"+K+"*[*^$|!~]?\x3d"),2!==a.querySelectorAll(":enabled").length&&
q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=
o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!\x3d'']:x"),r.push("!\x3d",N)}),q=q.length&&
new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;
return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;
return!1},B=b?function(a,b){if(a===b)return l=!0,0;
var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===
d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;
var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);
while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,
"\x3d'$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);
if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,
b){(a.ownerDocument||a)!==n&&m(a);
var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},
ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a);
},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;
if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;
if(f)if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else{if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},
d=ga.selectors={cacheLength:50,
createPseudo:ia,match:V,attrHandle:{},find:{},relative:{"\x3e":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=
a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~\x3d"===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},
CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),
a},
PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),
a.slice(0,3))}},
filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},
CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||
"")})},
ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!\x3d"===b:!b||(e+="","\x3d"===b?e===c:"!\x3d"===b?e!==c:"^\x3d"===b?c&&0===e.indexOf(c):"*\x3d"===b?c&&e.indexOf(c)>-1:"$\x3d"===
b?c&&e.slice(-c.length)===c:"~\x3d"===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|\x3d"===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},
CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",
q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;
if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),
k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,
l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||
(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},
PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,
c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},
pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,
d(b,null,f,c),b[0]=null,!c.pop()}}),
has:ia(function(a){return function(b){return ga(a,b).length>0}}),
contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),
lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=
c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),
target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},
root:function(a){return a===o},
focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},
enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},
selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},
empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},
parent:function(a){return!d.pseudos.empty(a)},
header:function(a){return X.test(a.nodeName)},
input:function(a){return W.test(a.nodeName)},
button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},
text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},
first:pa(function(){return[0]}),
last:pa(function(a,b){return[b-1]}),
eq:pa(function(a,b,c){return[c<0?c+b:c]}),
even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),
odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),
lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),
gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;
for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}
ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||
h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,
matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};
function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}
function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,
h];if(i)while(b=b[d]){if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;
else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}
function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}
function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}
function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}
function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:
o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;
while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}
function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||
c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));
return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];
else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,
"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}
function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==
z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,
u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};
return c?ia(f):f}
return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,
e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);
if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),
a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||
b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=
!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="\x3ca href\x3d'#'\x3e\x3c/a\x3e","#"===a.firstChild.getAttribute("href")})||
ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="\x3cinput/\x3e",a.firstChild.setAttribute("value",
""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,
function(a,b,c){var d;
if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);
r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=
[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);
return c},A=r.expr.match.needsContext;
function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}
var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,
function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}
r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,
c,d=this.length,e=this;
if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));
for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},
filter:function(a){return this.pushStack(E(this,a||[],!1))},
not:function(a){return this.pushStack(E(this,a||[],!0))},
is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});
var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="\x3c"===a[0]&&"\x3e"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),
!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?
this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):
a(r):r.makeArray(a,this)};
H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=
0;a<c;a++)if(r.contains(this,b[a]))return!0})},
closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,
a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},
index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},
add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},
addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});
function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}
r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},
parents:function(a){return y(a,"parentNode")},
parentsUntil:function(a,b,c){return y(a,"parentNode",c)},
next:function(a){return K(a,"nextSibling")},
prev:function(a){return K(a,"previousSibling")},
nextAll:function(a){return y(a,"nextSibling")},
prevAll:function(a){return y(a,"previousSibling")},
nextUntil:function(a,b,c){return y(a,"nextSibling",c)},
prevUntil:function(a,b,c){return y(a,"previousSibling",c)},
siblings:function(a){return z((a.parentNode||{}).firstChild,a)},
children:function(a){return z(a.firstChild)},
contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);
return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});
var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}
r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&
a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||
f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},
remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},
has:function(a){return a?r.inArray(a,f)>-1:f.length>0},
empty:function(){return f&&(f=[]),this},
disable:function(){return e=g=[],f=c="",this},
disabled:function(){return!f},
lock:function(){return e=g=[],c||b||(f=c=""),this},
locked:function(){return!!e},
fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},
fire:function(){return j.fireWith(this,arguments),this},
fired:function(){return!!d}};
return j};
function N(a){return a}
function O(a){throw a;}
function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}
r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject",
"fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},
always:function(){return f.done(arguments).fail(arguments),this},
"catch":function(a){return e.then(null,a)},
pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?
a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},
then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");
j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,
i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};
b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}
return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},
promise:function(a){return null!=a?r.extend(a,e):e}},f={};
return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),
this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},
when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};
if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});
var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,
b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b;
})};
var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,
readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;
function S(){d.removeEventListener("DOMContentLoaded",S),a.removeEventListener("load",S),r.ready()}
"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,
g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),
c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));
return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};
function V(){this.expando=r.expando+V.uid++}
V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},
set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},
get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},
access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},
remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===
b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},
hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};
var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}
function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$\x26").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}
r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},
data:function(a,b,c){return X.access(a,b,c)},
removeData:function(a,b){X.remove(a,b)},
_data:function(a,b,c){return W.access(a,b,c)},
_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;
if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",
!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;
if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},
removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;
if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},
dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};
"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},
_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;
return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,
a)})},
dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},
clearQueue:function(a){return this.queue(a||"fx",[])},
promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};
"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});
var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])\x3d|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===
a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};
for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};
function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));
if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}
var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=
e,e)}
function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=
ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}
r.fn.extend({show:function(){return ia(this,!0)},
hide:function(){return ia(this)},
toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});
var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"\x3cselect multiple\x3d'multiple'\x3e","\x3c/select\x3e"],thead:[1,"\x3ctable\x3e","\x3c/table\x3e"],
col:[2,"\x3ctable\x3e\x3ccolgroup\x3e","\x3c/colgroup\x3e\x3c/table\x3e"],tr:[2,"\x3ctable\x3e\x3ctbody\x3e","\x3c/tbody\x3e\x3c/table\x3e"],td:[3,"\x3ctable\x3e\x3ctbody\x3e\x3ctr\x3e","\x3c/tr\x3e\x3c/tbody\x3e\x3c/table\x3e"],
_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||
"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}
function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}
var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=
g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=
l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),
j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}
!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name",
"t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="\x3ctextarea\x3ex\x3c/textarea\x3e",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();
var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}
function wa(){return!1}
function xa(){try{return d.activeElement}catch(a){}}
function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=
d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,
b,e,d,c)})}
r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=
q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;
while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,
guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,
g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},
remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),
n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||
h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==
!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},
dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];
if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&
!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=
e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},
handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==
!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=
this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},
addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},
set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},
fix:function(a){return a[r.expando]?a:new r.Event(a)},
special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},
delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},
delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},
_default:function(a){return B(a.target,"a")}},
beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=
function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=
a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),
void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,
isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},
stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},
stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,
bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,
offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?
a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",
mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&
(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},
one:function(a,b,c,d){return ya(this,a,b,c,d,1)},
off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,
b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});
var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r("\x3etbody",a)[0]||a:a}
function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}
function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}
function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&
(h=X.access(a),i=r.extend({},h),X.set(b,i))}}
function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}
function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=
q.call(this,e,f.html())),Ja(f,b,c,d)});
if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),
c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,
""),k))}return a}
function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));
return a}
r.extend({htmlPrefilter:function(a){return a.replace(za,"\x3c$1\x3e\x3c/$2\x3e")},
clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],
g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},
cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=
void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},
remove:function(a){return Ka(this,a)},
text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},
append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},
prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},
before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},
after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},
empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},
clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},
html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=
r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},
replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",
prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),
h.apply(d,c.get());return this.pushStack(d)}});
var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};
!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);
c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}
var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,
h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},
boxSizingReliable:function(){return b(),e},
pixelMarginRight:function(){return b(),f},
reliableMarginLeft:function(){return b(),g}}))}();
function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,
e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}
function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}
var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;
function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}
function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}
function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}
function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&
(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}
function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),
f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}
r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},
cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},
style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==
(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||
(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},
css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),
""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height",
"width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,
d)})},
set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=
Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",
padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+
b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;
if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});
function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}
r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?
"":"px")},
cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},
run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*
b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;
return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},
set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=
_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},
swing:function(a){return.5-Math.cos(a*Math.PI)/2},
_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,
r.fx.interval),r.fx.tick())}
function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}
function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}
function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}
function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,
g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));
for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&
1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),
ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow=
"hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;
for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:
0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}
function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];
for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}
function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;
for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,
[j]),!1)},j=h.promise({elem:a,
props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=
r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},
stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;
for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&
j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}
r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},
tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},
prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,
duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),
null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",
0).show().end().animate({opacity:b},a,c,d)},
animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};
return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},
stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};
return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&
g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},
finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,
!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle",
"show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),
slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=
[],r.fx.tick=function(){var a,b=0,c=r.timers;
for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=
!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,
fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),
b=d.createElement("select"),c=b.appendChild(d.createElement("option"));
a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();
var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},
removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;
if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,
b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),null==d?void 0:d))},
attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},
removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),
function(a,b){var c=mb[b]||r.find.attr;
mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});
var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},
removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;
if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},
propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},
propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},
set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex",
"readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});
function pb(a){var b=a.match(L)||[];return b.join(" ")}
function qb(a){return a.getAttribute&&a.getAttribute("class")||""}
r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});
if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},
removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});
if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>
-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},
toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),
b),b)}):this.each(function(){var b,d,e,f;
if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&
this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},
hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});
var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":
"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||
(this.value=e))});
if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}),r.extend({valHooks:{option:{get:function(a){var b=
r.find.attr(a,"value");
return null!=b?b:pb(r.text(a))}},
select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||
!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},
set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio",
"checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?
"on":a.value})});
var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||
d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&
b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),
n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||
d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&
m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&
(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},
simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},
triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in
a,o.focusin||r.each({focus:"focusin",
blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};
r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},
teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});
var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||
r.error("Invalid XML: "+b),c};
var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):
Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});
else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}
r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"\x3d"+encodeURIComponent(null==c?"":c)};
if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});
else for(c in a)Ab(c,a[c],b,e);return d.join("\x26")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},
serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;
return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();
return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,
value:c.replace(xb,"\r\n")}}).get()}});
var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),
Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||
"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}
function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),
i}
return g(b.dataTypes[0])||!e["*"]&&g("*")}
function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}
function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);
break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}
function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&
d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===
!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",
data:b}}
r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset\x3dUTF-8",
accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",
text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,
r.ajaxSettings),b):Ob(r.ajaxSettings,a)},
ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):
r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=
b[2]}b=h[a.toLowerCase()]}return null==b?null:b},
getAllResponseHeaders:function(){return k?g:null},
setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},
overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},
statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},
abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};
if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");
try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),
Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&
0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"\x26":"?")+o.data,delete o.data),o.cache===!1&&(f=
f.replace(Db,"$1"),n=(vb.test(f)?"\x26":"?")+"_\x3d"+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",
r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+
("*"!==o.dataTypes[0]?", "+Kb+"; q\x3d0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),
y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));
try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||
304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":
304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,
l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}
return y},
getJSON:function(a,b,c){return r.get(a,b,c,"json")},
getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get",
"post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,
type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;
return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;
return a}).append(this)),this},
wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();
c.length?c.wrapAll(a):b.append(a)})},
wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},
unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=
function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};
var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();
if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||
(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===
a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},
h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");
try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i;}},
abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type=
"GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;
return{send:function(e,f){b=r("\x3cscript\x3e").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},
abort:function(){c&&c()}}}});
var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,
h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");
if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"\x26":"?")+
b.jsonp+"\x3d"+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):
a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;
return a.innerHTML="\x3cform\x3e\x3c/form\x3e\x3cform\x3e\x3c/form\x3e",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];
"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),
g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");
return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,
g.html(d?r("\x3cdiv\x3e").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,
b,a])})}),this},r.each(["ajaxStart",
"ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===
b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};
"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||
0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===
a?this:this.each(function(b){r.offset.setOffset(this,a,b)});
var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-
c.clientLeft}):{top:0,left:0}},
position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),
d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},
offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",
scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:
void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top",
"left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",
Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");
return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+
a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},
unbind:function(a,b){return this.off(a,null,b)},
delegate:function(a,b,c,d){return this.on(b,a,c,d)},
undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=
B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});
var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});
!function(a,b,c,d){function e(a,b,c){return setTimeout(j(a,c),b)}
function f(a,b,c){return Array.isArray(a)?(g(a,c[b],c),!0):!1}
function g(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}
function h(b,c,d){var e="DEPRECATED METHOD: "+c+"\n"+d+" AT \n";return function(){var c=new Error("get-stack-trace"),d=c&&c.stack?c.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,
"{anonymous}()@"):"Unknown Stack Trace",f=a.console&&(a.console.warn||a.console.log);return f&&f.call(a.console,e,d),b.apply(this,arguments)}}
function i(a,b,c){var d,e=b.prototype;d=a.prototype=Object.create(e),d.constructor=a,d._super=e,c&&ha(d,c)}
function j(a,b){return function(){return a.apply(b,arguments)}}
function k(a,b){return typeof a==ka?a.apply(b?b[0]||d:d,b):a}
function l(a,b){return a===d?b:a}
function m(a,b,c){g(q(b),function(b){a.addEventListener(b,c,!1)})}
function n(a,b,c){g(q(b),function(b){a.removeEventListener(b,c,!1)})}
function o(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}
function p(a,b){return a.indexOf(b)>-1}
function q(a){return a.trim().split(/\s+/g)}
function r(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}
function s(a){return Array.prototype.slice.call(a,0)}
function t(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];r(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}
function u(a,b){for(var c,e,f=b[0].toUpperCase()+b.slice(1),g=0;g<ia.length;){if(c=ia[g],e=c?c+f:b,e in a)return e;g++}return d}
function v(){return qa++}
function w(b){var c=b.ownerDocument||b;return c.defaultView||c.parentWindow||a}
function x(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){k(a.options.enable,[a])&&c.handler(b)},this.init()}
function y(a){var b,c=a.options.inputClass;return new (b=c?c:ta?M:ua?P:sa?R:L)(a,z)}
function z(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&Aa&&d-e===0,g=b&(Ca|Da)&&d-e===0;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,A(a,c),a.emit("hammer.input",c),a.recognize(c),
a.session.prevInput=c}
function A(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=D(b)),e>1&&!c.firstMultiple?c.firstMultiple=D(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?
g.center:f.center,i=b.center=E(d);b.timeStamp=na(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=I(h,i),b.distance=H(h,i),B(c,b),b.offsetDirection=G(b.deltaX,b.deltaY);var j=F(b.deltaTime,b.deltaX,b.deltaY);
b.overallVelocityX=j.x,b.overallVelocityY=j.y,b.overallVelocity=ma(j.x)>ma(j.y)?j.x:j.y,b.scale=g?K(g.pointers,d):1,b.rotation=g?J(g.pointers,d):0,b.maxPointers=c.prevInput?b.pointers.length>c.prevInput.maxPointers?
b.pointers.length:c.prevInput.maxPointers:b.pointers.length,C(c,b);var k=a.element;o(b.srcEvent.target,k)&&(k=b.srcEvent.target),b.target=k}
function B(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};(b.eventType===Aa||f.eventType===Ca)&&(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),
b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}
function C(a,b){var c,e,f,g,h=a.lastInterval||b,i=b.timeStamp-h.timeStamp;if(b.eventType!=Da&&(i>za||h.velocity===d)){var j=b.deltaX-h.deltaX,k=b.deltaY-h.deltaY,l=F(i,j,k);e=l.x,f=l.y,c=ma(l.x)>ma(l.y)?
l.x:l.y,g=G(j,k),a.lastInterval=b}else c=h.velocity,e=h.velocityX,f=h.velocityY,g=h.direction;b.velocity=c,b.velocityX=e,b.velocityY=f,b.direction=g}
function D(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:la(a.pointers[c].clientX),clientY:la(a.pointers[c].clientY)},c++;return{timeStamp:na(),pointers:b,center:E(b),deltaX:a.deltaX,deltaY:a.deltaY}}
function E(a){var b=a.length;if(1===b)return{x:la(a[0].clientX),y:la(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:la(c/b),y:la(d/b)}}
function F(a,b,c){return{x:b/a||0,y:c/a||0}}
function G(a,b){return a===b?Ea:ma(a)>=ma(b)?0>a?Fa:Ga:0>b?Ha:Ia}
function H(a,b,c){c||(c=Ma);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}
function I(a,b,c){c||(c=Ma);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}
function J(a,b){return I(b[1],b[0],Na)+I(a[1],a[0],Na)}
function K(a,b){return H(b[0],b[1],Na)/H(a[0],a[1],Na)}
function L(){this.evEl=Pa,this.evWin=Qa,this.allow=!0,this.pressed=!1,x.apply(this,arguments)}
function M(){this.evEl=Ta,this.evWin=Ua,x.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}
function N(){this.evTarget=Wa,this.evWin=Xa,this.started=!1,x.apply(this,arguments)}
function O(a,b){var c=s(a.touches),d=s(a.changedTouches);return b&(Ca|Da)&&(c=t(c.concat(d),"identifier",!0)),[c,d]}
function P(){this.evTarget=Za,this.targetIds={},x.apply(this,arguments)}
function Q(a,b){var c=s(a.touches),d=this.targetIds;if(b&(Aa|Ba)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=s(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return o(a.target,
i)}),b===Aa)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;
for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Ca|Da)&&delete d[g[e].identifier],e++;return h.length?[t(f.concat(h),"identifier",!0),h]:void 0}
function R(){x.apply(this,arguments);var a=j(this.handler,this);this.touch=new P(this.manager,a),this.mouse=new L(this.manager,a)}
function S(a,b){this.manager=a,this.set(b)}
function T(a){if(p(a,db))return db;var b=p(a,eb),c=p(a,fb);return b&&c?db:b||c?b?eb:fb:p(a,cb)?cb:bb}
function U(a){this.options=ha({},this.defaults,a||{}),this.id=v(),this.manager=null,this.options.enable=l(this.options.enable,!0),this.state=gb,this.simultaneous={},this.requireFail=[]}
function V(a){return a&lb?"cancel":a&jb?"end":a&ib?"move":a&hb?"start":""}
function W(a){return a==Ia?"down":a==Ha?"up":a==Fa?"left":a==Ga?"right":""}
function X(a,b){var c=b.manager;return c?c.get(a):a}
function Y(){U.apply(this,arguments)}
function Z(){Y.apply(this,arguments),this.pX=null,this.pY=null}
function $(){Y.apply(this,arguments)}
function _(){U.apply(this,arguments),this._timer=null,this._input=null}
function aa(){Y.apply(this,arguments)}
function ba(){Y.apply(this,arguments)}
function ca(){U.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}
function da(a,b){return b=b||{},b.recognizers=l(b.recognizers,da.defaults.preset),new ea(a,b)}
function ea(a,b){this.options=ha({},da.defaults,b||{}),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.element=a,this.input=y(this),this.touchAction=
new S(this,this.options.touchAction),fa(this,!0),g(this.options.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}
function fa(a,b){var c=a.element;c.style&&g(a.options.cssProps,function(a,d){c.style[u(c.style,d)]=b?a:""})}
function ga(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}
var ha,ia=["","webkit","Moz","MS","ms","o"],ja=b.createElement("div"),ka="function",la=Math.round,ma=Math.abs,na=Date.now;ha="function"!=typeof Object.assign?function(a){if(a===d||null===a)throw new TypeError("Cannot convert undefined or null to object");
for(var b=Object(a),c=1;c<arguments.length;c++){var e=arguments[c];if(e!==d&&null!==e)for(var f in e)e.hasOwnProperty(f)&&(b[f]=e[f])}return b}:Object.assign;
var oa=h(function(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a},"extend","Use `assign`."),pa=h(function(a,b){return oa(a,b,!0)},"merge","Use `assign`."),
qa=1,ra=/mobile|tablet|ip(ad|hone|od)|android/i,sa="ontouchstart"in a,ta=u(a,"PointerEvent")!==d,ua=sa&&ra.test(navigator.userAgent),va="touch",wa="pen",xa="mouse",ya="kinect",za=25,Aa=1,Ba=2,Ca=4,Da=8,
Ea=1,Fa=2,Ga=4,Ha=8,Ia=16,Ja=Fa|Ga,Ka=Ha|Ia,La=Ja|Ka,Ma=["x",
"y"],Na=["clientX","clientY"];x.prototype={handler:function(){},
init:function(){this.evEl&&m(this.element,this.evEl,this.domHandler),this.evTarget&&m(this.target,this.evTarget,this.domHandler),this.evWin&&m(w(this.element),this.evWin,this.domHandler)},
destroy:function(){this.evEl&&n(this.element,this.evEl,this.domHandler),this.evTarget&&n(this.target,this.evTarget,this.domHandler),this.evWin&&n(w(this.element),this.evWin,this.domHandler)}};
var Oa={mousedown:Aa,mousemove:Ba,mouseup:Ca},Pa="mousedown",Qa="mousemove mouseup";i(L,x,{handler:function(a){var b=Oa[a.type];b&Aa&&0===a.button&&(this.pressed=!0),b&Ba&&1!==a.which&&(b=Ca),this.pressed&&
this.allow&&(b&Ca&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:xa,srcEvent:a}))}});
var Ra={pointerdown:Aa,pointermove:Ba,pointerup:Ca,pointercancel:Da,pointerout:Da},Sa={2:va,3:wa,4:xa,5:ya},Ta="pointerdown",Ua="pointermove pointerup pointercancel";a.MSPointerEvent&&!a.PointerEvent&&
(Ta="MSPointerDown",Ua="MSPointerMove MSPointerUp MSPointerCancel"),i(M,x,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=Ra[d],f=Sa[a.pointerType]||a.pointerType,g=
f==va,h=r(b,a.pointerId,"pointerId");e&Aa&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Ca|Da)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),
c&&b.splice(h,1))}});
var Va={touchstart:Aa,touchmove:Ba,touchend:Ca,touchcancel:Da},Wa="touchstart",Xa="touchstart touchmove touchend touchcancel";i(N,x,{handler:function(a){var b=Va[a.type];if(b===Aa&&(this.started=!0),this.started){var c=
O.call(this,a,b);b&(Ca|Da)&&c[0].length-c[1].length===0&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:va,srcEvent:a})}}});
var Ya={touchstart:Aa,touchmove:Ba,touchend:Ca,touchcancel:Da},Za="touchstart touchmove touchend touchcancel";i(P,x,{handler:function(a){var b=Ya[a.type],c=Q.call(this,a,b);c&&this.callback(this.manager,
b,{pointers:c[0],changedPointers:c[1],pointerType:va,srcEvent:a})}}),i(R,x,{handler:function(a,b,c){var d=c.pointerType==va,e=c.pointerType==xa;
if(d)this.mouse.allow=!1;else if(e&&!this.mouse.allow)return;b&(Ca|Da)&&(this.mouse.allow=!0),this.callback(a,b,c)},
destroy:function(){this.touch.destroy(),this.mouse.destroy()}});
var $a=u(ja.style,"touchAction"),_a=$a!==d,ab="compute",bb="auto",cb="manipulation",db="none",eb="pan-x",fb="pan-y";S.prototype={set:function(a){a==ab&&(a=this.compute()),_a&&this.manager.element.style&&
(this.manager.element.style[$a]=a),this.actions=a.toLowerCase().trim()},
update:function(){this.set(this.manager.options.touchAction)},
compute:function(){var a=[];return g(this.manager.recognizers,function(b){k(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),T(a.join(" "))},
preventDefaults:function(a){if(!_a){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return void b.preventDefault();var d=this.actions,e=p(d,db),f=p(d,fb),g=p(d,eb);if(e){var h=1===
a.pointers.length,i=a.distance<2,j=a.deltaTime<250;if(h&&i&&j)return}if(!g||!f)return e||f&&c&Ja||g&&c&Ka?this.preventSrc(b):void 0}},
preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};
var gb=1,hb=2,ib=4,jb=8,kb=jb,lb=16,mb=32;U.prototype={defaults:{},set:function(a){return ha(this.options,a),this.manager&&this.manager.touchAction.update(),this},
recognizeWith:function(a){if(f(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=X(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},
dropRecognizeWith:function(a){return f(a,"dropRecognizeWith",this)?this:(a=X(a,this),delete this.simultaneous[a.id],this)},
requireFailure:function(a){if(f(a,"requireFailure",this))return this;var b=this.requireFail;return a=X(a,this),-1===r(b,a)&&(b.push(a),a.requireFailure(this)),this},
dropRequireFailure:function(a){if(f(a,"dropRequireFailure",this))return this;a=X(a,this);var b=r(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},
hasRequireFailures:function(){return this.requireFail.length>0},
canRecognizeWith:function(a){return!!this.simultaneous[a.id]},
emit:function(a){function b(b){c.manager.emit(b,a)}
var c=this,d=this.state;jb>d&&b(c.options.event+V(d)),b(c.options.event),a.additionalEvent&&b(a.additionalEvent),d>=jb&&b(c.options.event+V(d))},
tryEmit:function(a){return this.canEmit()?this.emit(a):void(this.state=mb)},
canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(mb|gb)))return!1;a++}return!0},
recognize:function(a){var b=ha({},a);return k(this.options.enable,[this,b])?(this.state&(kb|lb|mb)&&(this.state=gb),this.state=this.process(b),void(this.state&(hb|ib|jb|lb)&&this.tryEmit(b))):(this.reset(),
void(this.state=mb))},
process:function(a){},
getTouchAction:function(){},
reset:function(){}},i(Y,U,{defaults:{pointers:1},
attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},
process:function(a){var b=this.state,c=a.eventType,d=b&(hb|ib),e=this.attrTest(a);return d&&(c&Da||!e)?b|lb:d||e?c&Ca?b|jb:b&hb?b|ib:hb:mb}}),i(Z,Y,{defaults:{event:"pan",
threshold:10,pointers:1,direction:La},getTouchAction:function(){var a=this.options.direction,b=[];return a&Ja&&b.push(fb),a&Ka&&b.push(eb),b},
directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&Ja?(e=0===f?Ea:0>f?Fa:Ga,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===
g?Ea:0>g?Ha:Ia,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},
attrTest:function(a){return Y.prototype.attrTest.call(this,a)&&(this.state&hb||!(this.state&hb)&&this.directionTest(a))},
emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=W(a.direction);b&&(a.additionalEvent=this.options.event+b),this._super.emit.call(this,a)}}),i($,Y,{defaults:{event:"pinch",
threshold:0,pointers:2},getTouchAction:function(){return[db]},
attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&hb)},
emit:function(a){if(1!==a.scale){var b=a.scale<1?"in":"out";a.additionalEvent=this.options.event+b}this._super.emit.call(this,a)}}),i(_,U,{defaults:{event:"press",
pointers:1,time:251,threshold:9},getTouchAction:function(){return[bb]},
process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Ca|Da)&&!f)this.reset();else if(a.eventType&Aa)this.reset(),
this._timer=e(function(){this.state=kb,this.tryEmit()},b.time,this);
else if(a.eventType&Ca)return kb;return mb},
reset:function(){clearTimeout(this._timer)},
emit:function(a){this.state===kb&&(a&&a.eventType&Ca?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=na(),this.manager.emit(this.options.event,this._input)))}}),i(aa,Y,{defaults:{event:"rotate",
threshold:0,pointers:2},getTouchAction:function(){return[db]},
attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&hb)}}),i(ba,Y,{defaults:{event:"swipe",
threshold:10,velocity:.3,direction:Ja|Ka,pointers:1},getTouchAction:function(){return Z.prototype.getTouchAction.call(this)},
attrTest:function(a){var b,c=this.options.direction;return c&(Ja|Ka)?b=a.overallVelocity:c&Ja?b=a.overallVelocityX:c&Ka&&(b=a.overallVelocityY),this._super.attrTest.call(this,a)&&c&a.offsetDirection&&a.distance>
this.options.threshold&&a.maxPointers==this.options.pointers&&ma(b)>this.options.velocity&&a.eventType&Ca},
emit:function(a){var b=W(a.offsetDirection);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),i(ca,U,{defaults:{event:"tap",
pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[cb]},
process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime<b.time;if(this.reset(),a.eventType&Aa&&0===this.count)return this.failTimeout();if(d&&f&&c){if(a.eventType!=
Ca)return this.failTimeout();var g=this.pTime?a.timeStamp-this.pTime<b.interval:!0,h=!this.pCenter||H(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,h&&g?this.count+=
1:this.count=1,this._input=a;var i=this.count%b.taps;if(0===i)return this.hasRequireFailures()?(this._timer=e(function(){this.state=kb,this.tryEmit()},b.interval,this),hb):kb}return mb},
failTimeout:function(){return this._timer=e(function(){this.state=mb},this.options.interval,this),mb},
reset:function(){clearTimeout(this._timer)},
emit:function(){this.state==kb&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),da.VERSION="2.0.6",da.defaults={domEvents:!1,
touchAction:ab,enable:!0,inputTarget:null,inputClass:null,preset:[[aa,{enable:!1}],[$,{enable:!1},["rotate"]],[ba,{direction:Ja}],[Z,{direction:Ja},["swipe"]],[ca],[ca,{event:"doubletap",taps:2},["tap"]],
[_]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var nb=1,ob=2;ea.prototype={set:function(a){return ha(this.options,
a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},
stop:function(a){this.session.stopped=a?ob:nb},
recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&kb)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=
d[f],b.stopped===ob||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(hb|ib|jb)&&(e=b.curRecognizer=c),f++}},
get:function(a){if(a instanceof U)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},
add:function(a){if(f(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},
remove:function(a){if(f(a,"remove",this))return this;if(a=this.get(a)){var b=this.recognizers,c=r(b,a);-1!==c&&(b.splice(c,1),this.touchAction.update())}return this},
on:function(a,b){var c=this.handlers;return g(q(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this},
off:function(a,b){var c=this.handlers;return g(q(a),function(a){b?c[a]&&c[a].splice(r(c[a],b),1):delete c[a]}),this},
emit:function(a,b){this.options.domEvents&&ga(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};
for(var d=0;d<c.length;)c[d](b),d++}},
destroy:function(){this.element&&fa(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},ha(da,{INPUT_START:Aa,
INPUT_MOVE:Ba,INPUT_END:Ca,INPUT_CANCEL:Da,STATE_POSSIBLE:gb,STATE_BEGAN:hb,STATE_CHANGED:ib,STATE_ENDED:jb,STATE_RECOGNIZED:kb,STATE_CANCELLED:lb,STATE_FAILED:mb,DIRECTION_NONE:Ea,DIRECTION_LEFT:Fa,DIRECTION_RIGHT:Ga,
DIRECTION_UP:Ha,DIRECTION_DOWN:Ia,DIRECTION_HORIZONTAL:Ja,DIRECTION_VERTICAL:Ka,DIRECTION_ALL:La,Manager:ea,Input:x,TouchAction:S,TouchInput:P,MouseInput:L,PointerEventInput:M,TouchMouseInput:R,SingleTouchInput:N,
Recognizer:U,AttrRecognizer:Y,Tap:ca,Pan:Z,Swipe:ba,Pinch:$,Rotate:aa,Press:_,on:m,off:n,each:g,merge:pa,extend:oa,assign:ha,inherit:i,bindFn:j,prefixed:u});var pb="undefined"!=typeof a?a:"undefined"!=
typeof self?self:{};pb.Hammer=da,"function"==typeof define&&define.amd?define(function(){return da}):"undefined"!=typeof module&&module.exports?module.exports=da:a[c]=da}(window,document,"Hammer");
(function(jQueryName,ns,global){var eg;if(!global[ns])global[ns]={};eg=global[ns];var $=global[jQueryName];var dependency={"jQuery":{"url":"http://jquery.com/"},"Hammer":{"url":"http://hammerjs.github.io/"}};
var templateMessage=["[egjs] The {{name}} library must be loaded before {{componentName}}.",'[egjs] For AMD environment (like RequireJS), "{{name}}" must be declared, which is required by {{componentName}}.',
"[egjs] The {{index}} argument of {{componentName}} is missing.\r\nDownload {{name}} from [{{url}}].","[egjs] The {{name}} parameter of {{componentName}} is not valid.\r\nPlease check and try again.","[egjs] The {{index}} argument of {{componentName}} is undefined.\r\nPlease check and try again."];
var ordinal=["1st","2nd","3rd"];function changeOrdinal(index){return index>2?index+1+"th":ordinal[index]}
function replaceStr(str,obj){var i;for(i in obj)str=str.replace(new RegExp("{{"+i+"}}","gi"),obj[i]);return str}
function checkDependency(componentName,di){var i=0;var l=di.length;var message=[];var paramList=[];var require=global.require;var dependencyInfo;var param;var messageInfo;var isString;var isUndefined;var registedDependency;
var isNotGlobal;var specifiedAMD;for(;i<l;i++){param=di[i];messageInfo={"index":changeOrdinal(i),"name":param,"componentName":componentName};isString=typeof di[i]==="string";isUndefined=di[i]===undefined;
registedDependency=isString&&(dependencyInfo=dependency[di[i]]);isNotGlobal=isString&&dependencyInfo&&!global[di[i]];specifiedAMD=isNotGlobal&&require&&require.specified&&require.specified(di[i]);if(!isString&&
!isUndefined){paramList.push(param);continue}if(specifiedAMD&&require.defined(di[i])){param=require(di[i]);paramList.push(param);continue}if(specifiedAMD&&!require.defined(di[i])){messageInfo.url=dependencyInfo.url;
message.push(replaceStr(templateMessage[0],messageInfo));continue}if(isNotGlobal&&require&&require.specified&&!require.specified(di[i])){messageInfo.url=dependencyInfo.url;message.push(replaceStr(templateMessage[1],
messageInfo));continue}if(isNotGlobal&&!require){messageInfo.url=dependencyInfo.url;message.push(replaceStr(templateMessage[2],messageInfo));continue}if(registedDependency&&global[di[i]]){param=global[di[i]];
paramList.push(param);continue}if(isString&&!dependencyInfo){message.push(replaceStr(templateMessage[3],messageInfo));continue}if(di[i]===undefined){message.push(replaceStr(templateMessage[4],messageInfo));
continue}}return[paramList,message]}
function capitalizeFirstLetter(str){return str.charAt(0).toUpperCase()+str.slice(1)}
function plugin(name){var upperCamelCase=capitalizeFirstLetter(name);var events;var special;var componentMethodNames;if(!(eg[upperCamelCase]&&eg[upperCamelCase].prototype&&eg[upperCamelCase].prototype._events))return false;
if($.fn[name])throw new Error("The name '"+upperCamelCase+"' has already been used and registered as plugin. Try with different one.");$.fn[name]=function(options){var ins;var result;if(typeof options===
"string"){ins=this.data(ns+"-"+name);if(options==="instance")return ins;else{result=ins[options].apply(ins,Array.prototype.slice.call(arguments,1));return result===ins?this:result}}if(options===undefined||
$.isPlainObject(options))this.data(ns+"-"+name,new eg[upperCamelCase](this,options||{},name+":"));return this};
componentMethodNames={trigger:"trigger",add:"on",remove:"off"};events=eg[upperCamelCase].prototype._events();for(var i in events){special=$.event.special[name+":"+events[i]]={};special.setup=function(){return true};
for(var j in componentMethodNames)special[j]=function(componentMethodName){return function(event,param){$(this).data(ns+"-"+name)[componentMethodName](event.type,componentMethodName==="trigger"?param:event.handler);
return false}}(componentMethodNames[j])}}
var warn=function(msg){if(global.console&&global.console.warn)warn=function(msg){global.console.warn(msg)};
else warn=function(msg){};
warn(msg)};
if(!eg.module)eg.module=function(name,di,fp){var result=checkDependency(name,di);if(result[1].length)warn(result[1].join("\r\n"));else{fp.apply(global,result[0]);plugin(name)}}})("jQuery","eg",window);
eg.module("agent",[eg],function(ns){var userAgentRules={browser:[{criteria:"PhantomJS",identity:"PhantomJS"},{criteria:/Opera Mini/,identity:"Opera mini",versionSearch:"Opera Mini"},{criteria:/Opera|OPR/,
identity:"Opera",versionSearch:"Opera|OPR"},{criteria:/Edge/,identity:"Edge",versionSearch:"Edge"},{criteria:/MSIE|Trident|Windows Phone/,identity:"IE",versionSearch:"IEMobile|MSIE|rv"},{criteria:/SAMSUNG|SamsungBrowser/,
identity:"SBrowser",versionSearch:"Chrome"},{criteria:/Chrome|CriOS/,identity:"Chrome"},{criteria:/Android/,identity:"default"},{criteria:/iPhone|iPad/,identity:"Safari",versionSearch:"Version"},{criteria:"Apple",
identity:"Safari",versionSearch:"Version"},{criteria:"Firefox",identity:"Firefox"}],os:[{criteria:/Windows Phone|Windows NT/,identity:"Window",versionSearch:"Windows Phone|Windows NT"},{criteria:"Windows 2000",
identity:"Window",versionAlias:"5.0"},{criteria:/iPhone|iPad/,identity:"iOS",versionSearch:"iPhone OS|CPU OS"},{criteria:"Mac",versionSearch:"OS X",identity:"MAC"},{criteria:/Android/,identity:"Android"}],
webview:[{criteria:/iPhone|iPad/,browserVersionSearch:"Version",webviewBrowserVersion:/-1/},{criteria:/iPhone|iPad|Android/,webviewToken:/NAVER|DAUM|; wv/}],defaultString:{browser:{version:"-1",name:"default"},
os:{version:"-1",name:"unknown"}}};var UA;function getBrowserName(browserRules){return getIdentityStringFromArray(browserRules,userAgentRules.defaultString.browser)}
function getBrowserVersion(browserName){var browserVersion;var versionToken;if(!browserName)return;versionToken=getBrowserRule(browserName).versionSearch||browserName;browserVersion=extractBrowserVersion(versionToken,
UA);return browserVersion}
function extractBrowserVersion(versionToken,ua){var browserVersion=userAgentRules.defaultString.browser.version;var versionIndex;var versionTokenIndex;var versionRegexResult=(new RegExp("("+versionToken+
")","i")).exec(ua);if(!versionRegexResult)return browserVersion;versionTokenIndex=versionRegexResult.index;versionToken=versionRegexResult[0];if(versionTokenIndex>-1){versionIndex=versionTokenIndex+versionToken.length+
1;browserVersion=ua.substring(versionIndex).split(" ")[0].replace(/_/g,".").replace(/\;|\)/g,"")}return browserVersion}
function getOSName(osRules){return getIdentityStringFromArray(osRules,userAgentRules.defaultString.os)}
function getOSVersion(osName){var ua=UA;var osRule=getOSRule(osName)||{};var defaultOSVersion=userAgentRules.defaultString.os.version;var osVersion;var osVersionToken;var osVersionRegex;var osVersionRegexResult;
if(!osName)return;if(osRule.versionAlias)return osRule.versionAlias;osVersionToken=osRule.versionSearch||osName;osVersionRegex=new RegExp("("+osVersionToken+")\\s([\\d_\\.]+|\\d_0)","i");osVersionRegexResult=
osVersionRegex.exec(ua);if(osVersionRegexResult)osVersion=osVersionRegex.exec(ua)[2].replace(/_/g,".").replace(/\;|\)/g,"");return osVersion||defaultOSVersion}
function getOSRule(osName){return getRule(userAgentRules.os,osName)}
function getBrowserRule(browserName){return getRule(userAgentRules.browser,browserName)}
function getRule(rules,targetIdentity){var criteria;var identityMatched;for(var i=0,rule;rule=rules[i];i++){criteria=rule.criteria;identityMatched=(new RegExp(rule.identity,"i")).test(targetIdentity);if(criteria?
identityMatched&&isMatched(UA,criteria):identityMatched)return rule}}
function getIdentityStringFromArray(rules,defaultStrings){for(var i=0,rule;rule=rules[i];i++)if(isMatched(UA,rule.criteria))return rule.identity||defaultStrings.name;return defaultStrings.name}
function isMatched(base,target){return target&&target.test?!!target.test(base):base.indexOf(target)>-1}
function isWebview(){var ua=UA;var webviewRules=userAgentRules.webview;var ret=false;var browserVersion;for(var i=0,rule;rule=webviewRules[i];i++){if(!isMatched(ua,rule.criteria))continue;browserVersion=
extractBrowserVersion(rule.browserVersionSearch,ua);if(isMatched(ua,rule.webviewToken)||isMatched(browserVersion,rule.webviewBrowserVersion)){ret=true;break}}return ret}
function postProcess(agent){agent.browser.name=agent.browser.name.toLowerCase();agent.os.name=agent.os.name.toLowerCase();if(agent.os.name==="ios"&&agent.browser.webview)agent.browser.version="-1";return agent}
ns.Agent={"create":function(useragent){this.ua=UA=useragent;var agent={os:{},browser:{}};agent.browser.name=getBrowserName(userAgentRules.browser);agent.browser.version=getBrowserVersion(agent.browser.name);
agent.os.name=getOSName(userAgentRules.os);agent.os.version=getOSVersion(agent.os.name);agent.browser.webview=isWebview();return postProcess(agent)}}});
eg.module("raf",[eg,window],function(ns,global){var raf=global.requestAnimationFrame||global.webkitRequestAnimationFrame||global.mozRequestAnimationFrame||global.msRequestAnimationFrame;var caf=global.cancelAnimationFrame||
global.webkitCancelAnimationFrame||global.mozCancelAnimationFrame||global.msCancelAnimationFrame;(function(){if("performance"in global===false)global.performance={};global.Date.now=global.Date.now||function(){return(new global.Date).getTime()};
if("now"in global.performance===false){var nowOffset=global.Date.now();if(global.performance.timing&&global.performance.timing.navigationStart)nowOffset=global.performance.timing.navigationStart;global.performance.now=
function now(){return global.Date.now()-nowOffset}}})();
if(raf&&!caf){var keyInfo={};var oldraf=raf;raf=function(callback){function wrapCallback(timestamp){if(keyInfo[key])callback(timestamp)}
var key=oldraf(wrapCallback);keyInfo[key]=true;return key};
caf=function(key){delete keyInfo[key]}}else if(!(raf&&caf)){raf=function(callback){return global.setTimeout(function(){callback(global.performance.now())},16)};
caf=global.clearTimeout}ns.requestAnimationFrame=function(fp){return raf(fp)};
ns.cancelAnimationFrame=function(key){caf(key)}});
eg.module("eg",["jQuery",eg,window,eg.Agent],function($,ns,global,Agent){function resultCache(scope,name,param,defaultValue){var method=scope.hook[name];if(method)defaultValue=method.apply(scope,param);
scope[name]=function(){var method=scope.hook[name];if(method)return method.apply(scope,param);return defaultValue};
return defaultValue}
ns.VERSION="1.5.0";ns.hook={};ns.agent=function(){var info=Agent.create(global.navigator.userAgent);return resultCache(this,"agent",[info],info)};
ns.translate=function(x,y,isHA){isHA=isHA||false;return"translate"+(isHA?"3d(":"(")+x+","+y+(isHA?",0)":")")};
ns.isHWAccelerable=function(){var result=false;var agent=ns.agent();var osVersion=agent.os.version;var browser=agent.browser.name;var browserVersion=agent.browser.version;var useragent;if(browser.indexOf("chrome")!==
-1)result=browserVersion>="25";else if(/ie|edge|firefox|safari|inapp/.test(browser))result=true;else if(agent.os.name.indexOf("android")!==-1){useragent=(Agent.ua.match(/\(.*\)/)||[null])[0];result=osVersion>=
"4.1.0"&&!/EK-GN120|SM-G386F/.test(useragent)||osVersion>="4.0.3"&&/SHW-|SHV-|GT-|SCH-|SGH-|SPH-|LG-F160|LG-F100|LG-F180|LG-F200|EK-|IM-A|LG-F240|LG-F260/.test(useragent)&&!/SHW-M420|SHW-M200|GT-S7562/.test(useragent)}return resultCache(this,
"isHWAccelerable",[result,agent],result)};
ns.isTransitional=function(){var result=false;var agent=ns.agent();var browser=agent.browser.name;if(/chrome|firefox|sbrowser/.test(browser))result=true;else switch(agent.os.name){case "ios":result=/safari|inapp/.test(browser)&&
parseInt(agent.os.version,10)<6;break;case "window":result=/safari/.test(browser)||/ie/.test(browser)&&parseInt(agent.browser.nativeVersion,10)>=10;break;default:result=/safari/.test(browser);break}return resultCache(this,
"isTransitional",[result,agent],result)};
ns._hasClickBug=function(){var agent=ns.agent();var result=agent.browser.name==="safari";return resultCache(this,"_hasClickBug",[result,agent],result)};
$&&$.extend($.easing,{easeOutCubic:function(p){return 1-Math.pow(1-p,3)}})});
eg.module("class",[eg],function(ns){ns.Class=function(def){var typeClass=function typeClass(){if(typeof def.construct==="function")def.construct.apply(this,arguments)};
typeClass.prototype=def;typeClass.prototype.instance=function(){return this};
typeClass.prototype.constructor=typeClass;return typeClass};
ns.Class.extend=function(superClass,def){var extendClass=function extendClass(){superClass.apply(this,arguments);if(typeof def.construct==="function")def.construct.apply(this,arguments)};
var ExtProto=function(){};
ExtProto.prototype=superClass.prototype;var extProto=new ExtProto;for(var i in def)extProto[i]=def[i];extProto.constructor=extendClass;extendClass.prototype=extProto;return extendClass}});
eg.module("component",[eg],function(ns){ns.Component=ns.Class({construct:function(){this.eventHandler={};this.options={}},
option:function(key,value){if(arguments.length>=2){this.options[key]=value;return this}if(typeof key==="string")return this.options[key];if(arguments.length===0)return this.options;for(var i in key)this.options[i]=
key[i];return this},
trigger:function(eventName,customEvent){customEvent=customEvent||{};var handlerList=this.eventHandler[eventName]||[];var hasHandlerList=handlerList.length>0;if(!hasHandlerList)return true;handlerList=handlerList.concat();
customEvent.eventType=eventName;var isCanceled=false;var arg=[customEvent];var i;var len;var handler;customEvent.stop=function(){isCanceled=true};
if((len=arguments.length)>2)arg=arg.concat(Array.prototype.slice.call(arguments,2,len));for(i=0;handler=handlerList[i];i++)handler.apply(this,arg);return!isCanceled},
once:function(eventName,handlerToAttach){if(typeof eventName==="object"&&typeof handlerToAttach==="undefined"){var eventHash=eventName;var i;for(i in eventHash)this.once(i,eventHash[i]);return this}else if(typeof eventName===
"string"&&typeof handlerToAttach==="function"){var self=this;this.on(eventName,function listener(){var arg=Array.prototype.slice.call(arguments);handlerToAttach.apply(self,arg);self.off(eventName,listener)})}return this},
hasOn:function(eventName){return!!this.eventHandler[eventName]},
on:function(eventName,handlerToAttach){if(typeof eventName==="object"&&typeof handlerToAttach==="undefined"){var eventHash=eventName;var i;for(i in eventHash)this.on(i,eventHash[i]);return this}else if(typeof eventName===
"string"&&typeof handlerToAttach==="function"){var handlerList=this.eventHandler[eventName];if(typeof handlerList==="undefined")handlerList=this.eventHandler[eventName]=[];handlerList.push(handlerToAttach)}return this},
off:function(eventName,handlerToDetach){if(arguments.length===0){this.eventHandler={};return this}if(typeof handlerToDetach==="undefined")if(typeof eventName==="string"){this.eventHandler[eventName]=undefined;
return this}else{var eventHash=eventName;for(var i in eventHash)this.off(i,eventHash[i]);return this}var handlerList=this.eventHandler[eventName];if(handlerList){var k;var handlerFunction;for(k=0;handlerFunction=
handlerList[k];k++)if(handlerFunction===handlerToDetach){handlerList.splice(k,1);break}}return this}})});
eg.module("rotate",["jQuery",eg,window,document],function($,ns,global,doc){var beforeScreenWidth=-1;var beforeVertical=null;var rotateTimer=null;var agent=function(){var ua=global.navigator.userAgent;var match=
ua.match(/(iPhone OS|CPU OS|Android)\s([^\s;-]+)/);var res={os:"",version:""};if(match){res.os=match[1].replace(/(?:CPU|iPhone)\sOS/,"ios").toLowerCase();res.version=match[2].replace(/\D/g,".")}return res}();
var isMobile=/android|ios/.test(agent.os);if(!isMobile){ns.isPortrait=function(){return false};
return}var orientationChange=function(){var type;if(agent.os==="android"&&agent.version==="2.1")type="resize";else type="onorientationchange"in global?"orientationchange":"resize";orientationChange=function(){return type};
return type};
function isVertical(){var eventName=orientationChange();var screenWidth;var degree;var vertical;if(eventName==="resize"){screenWidth=doc.documentElement.clientWidth;if(beforeScreenWidth===-1)vertical=screenWidth<
doc.documentElement.clientHeight;else if(screenWidth<beforeScreenWidth)vertical=true;else if(screenWidth===beforeScreenWidth)vertical=beforeVertical;else vertical=false}else{degree=global.orientation;if(degree===
0||degree===180)vertical=true;else if(degree===90||degree===-90)vertical=false}return vertical}
function triggerRotate(){var currentVertical=isVertical();if(isMobile)if(beforeVertical!==currentVertical){beforeVertical=currentVertical;beforeScreenWidth=doc.documentElement.clientWidth;$(global).trigger("rotate",
{isVertical:beforeVertical})}}
function handler(e){var eventName=orientationChange();var delay;var screenWidth;if(eventName==="resize")global.setTimeout(function(){triggerRotate()},0);
else{delay=300;if(agent.os==="android"){screenWidth=doc.documentElement.clientWidth;if(e.type==="orientationchange"&&screenWidth===beforeScreenWidth){global.setTimeout(function(){handler(e)},500);
return false}}global.clearTimeout(rotateTimer);rotateTimer=global.setTimeout(function(){triggerRotate()},delay)}}
$.event.special.rotate={setup:function(){beforeVertical=isVertical();beforeScreenWidth=doc.documentElement.clientWidth;$(global).on(orientationChange(),handler)},
teardown:function(){$(global).off(orientationChange(),handler)},
trigger:function(e){e.isVertical=beforeVertical}};
ns.isPortrait=isVertical;return{"orientationChange":orientationChange,"isVertical":isVertical,"triggerRotate":triggerRotate,"handler":handler}});
eg.module("scrollEnd",["jQuery",eg,window],function($,ns,global){var scrollEndTimer;var userAgent=global.navigator.userAgent;var rotateFlag=false;var CHROME=3;var TIMERBASE=2;var TOUCHBASE=1;var SCROLLBASE=
0;var latency=250;var detectType=getDetectType(userAgent);$.event.special.scrollend={setup:function(){attachEvent()},
teardown:function(){removeEvent()}};
function getDetectType(userAgent){var deviceName;var osVersion;var retValue=TIMERBASE;var matchedDevice=userAgent.match(/iPhone|iPad|Android/);var webviewToken=/NAVER|DAUM|; wv/;var webviewToken2=/Version/;
if(matchedDevice!==null&&!webviewToken.test(userAgent)){deviceName=matchedDevice[0];osVersion=userAgent.match(/\s(\d{1,2})_\d/);if(deviceName!=="Android"&&webviewToken2.test(userAgent)&&osVersion&&parseInt(osVersion[1],
10)<=7)retValue=SCROLLBASE;else if(deviceName==="Android"){osVersion=userAgent.match(/Android\b(.*?);/);if(!/Chrome/.test(userAgent)&&osVersion&&parseFloat(osVersion)<=2.3)retValue=SCROLLBASE}}return retValue}
function attachEvent(){$(global).on("scroll",scroll);$(global).on("orientationchange",onOrientationchange)}
function onOrientationchange(){rotateFlag=true}
function scroll(){if(rotateFlag){rotateFlag=false;return}switch(detectType){case SCROLLBASE:triggerScrollEnd();break;case TIMERBASE:triggerScrollEndAlways();break}}
function triggerScrollEnd(){$(global).trigger("scrollend",{top:global.pageYOffset,left:global.pageXOffset})}
function triggerScrollEndAlways(){clearTimeout(scrollEndTimer);scrollEndTimer=setTimeout(function(){if(rotateFlag){rotateFlag=false;return}triggerScrollEnd()},latency)}
function removeEvent(){$(global).off("scroll",scroll);$(global).off("orientationchange",onOrientationchange)}
return{detectType:detectType,getDetectType:getDetectType,CHROME:CHROME,TIMERBASE:TIMERBASE,TOUCHBASE:TOUCHBASE,SCROLLBASE:SCROLLBASE}});
eg.module("transform",["jQuery",window],function($){function getConverted(val,base){var ret=val;var num=val.match(/((-|\+)*[0-9]+)%/);if(num&&num.length>=1)ret=base*(parseFloat(num[1])/100)+"px";else if(val.indexOf("px")===
-1)ret=val+"px";return ret}
function correctUnit(transform,width,height){var m;var ret="";var arr=transform.split(")");for(var i=0,len=arr.length-1;i<len;i++){var name=arr[i];if((m=name.match(/(translate([XYZ]|3d)?|rotate)\(([^)]*)/))&&
m.length>1)if(m[1]==="rotate"){if(m[3].indexOf("deg")===-1)name=m[1]+"("+m[3]+"deg"}else switch(m[2]){case "X":name=m[1]+"("+getConverted(m[3],width);break;case "Y":name=m[1]+"("+getConverted(m[3],height);
break;case "Z":break;default:var nums=m[3].split(",");var bases=[width,height,100];for(var k=0,l=nums.length;k<l;k++)nums[k]=getConverted(nums[k],bases[k]);name=m[1]+"("+nums.join(",");break}name=" "+name+
")";ret+=name}ret=ret.replace("%","").replace("+\x3d","");return ret}
function toParsedFloat(val){var m=val.match(/((-|\+)*[\d|\.]+)(px|deg|rad)*/);if(m&&m.length>=1)return{"num":parseFloat(m[1]),"unit":m[3]}}
function getTransformGenerateFunction(transform){var splitted=transform.split(")");var list=[];for(var i=0,len=splitted.length-1;i<len;i++){var parsed=parseStyle(splitted[i]);parsed[1]=$.map(parsed[1],
toParsedFloat);list.push(parsed)}return function transformByPos(pos){var transform="";var defaultVal=0;$.each(list,function(i){if(list[i][0].indexOf("scale")>=0)defaultVal=1;else defaultVal=0;var valStr=
$.map(list[i][1],function(value){var val=value.num;defaultVal===1&&(val=val-1);return defaultVal+val*pos+(value.unit||"")}).join(",");
transform+=list[i][0]+"("+valStr+") "});
return transform}}
function rateFn(element,startTf,endTf){var isRelative=endTf.indexOf("+\x3d")>=0;var start;var end;var basePos;endTf=correctUnit(endTf,parseFloat($.css(element,"width"))||0,parseFloat($.css(element,"height"))||
0);if(isRelative){start=!startTf||startTf==="none"?"matrix(1, 0, 0, 1, 0, 0)":startTf;end=getTransformGenerateFunction(endTf)}else{start=toMatrixArray(startTf);basePos=toMatrixArray("none");if(start[1].length<
basePos[1].length)start=toMatrix3d(start);else if(start[1].length>basePos[1].length)basePos=toMatrix3d(basePos);end=getTransformGenerateFunction(endTf)}return function(pos){var result=[];var ret="";if(isRelative)return start+
end(pos);if(pos===1)ret=data2String(basePos);else{for(var i=0,s,e,l=start[1].length;i<l;i++){s=parseFloat(start[1][i]);e=parseFloat(basePos[1][i]);result.push(s+(e-s)*pos)}ret=data2String([start[0],result])}return ret+
end(pos)}}
function data2String(property){var name;var tmp=[];if($.isArray(property)){name=property[0];return name+"("+property[1].join(unit(name)+",")+unit(name)+")"}else{for(name in property)tmp.push(name);return $.map(tmp,
function(v){return v+"("+property[v]+unit(v)+")"}).join(" ")}}
function unit(name){return name.indexOf("translate")>=0?"px":name.indexOf("rotate")>=0?"deg":""}
function parseStyle(property){var m=property.match(/(\b\w+?)\((\s*[^\)]+)/);var name;var value;var result=["",""];if(m&&m.length>2){name=m[1];value=m[2].split(",");value=$.map(value,function(v){return $.trim(v)});
result=[$.trim(name),value]}return result}
function toMatrixArray(matrixStr){var matched;if(!matrixStr||matrixStr==="none")return["matrix",["1","0","0","1","0","0"]];matrixStr=matrixStr.replace(/\s/g,"");matched=matrixStr.match(/(matrix)(3d)*\((.*)\)/);
return[matched[1]+(matched[2]||""),matched[3].split(",")]}
function toMatrix3d(matrix){var name=matrix[0];var val=matrix[1];if(name==="matrix3d")return matrix;return[name+"3d",[val[0],val[1],"0","0",val[2],val[3],"0","0","0","0","1","0",val[4],val[5],"0","1"]]}
$.fx.step.transform=function(fx){fx.rateFn=fx.rateFn||rateFn(fx.elem,fx.start,fx.end);$.style(fx.elem,"transform",fx.rateFn(fx.pos))};
return{toMatrix:toMatrixArray,toMatrix3d:toMatrix3d}});
eg.module("cssPrefix",["jQuery",document],function($,doc){if(!$.cssHooks)throw new Error("jQuery 1.4.3+ is needed for this plugin to work");var matchTest=($.fn.jquery.match(/^\d\.\d+/)||[])[0];if(!matchTest||
+matchTest.replace(/\D/,"")>=18)return;var cssPrefixes=["Webkit","Moz","O","ms"];var acts=["transitionProperty","transitionDuration","transition","transform","transitionTimingFunction"];var vendorPrefix=
function(){var bodyStyle=(doc.head||doc.getElementsByTagName("head")[0]).style;for(var i=0,len=cssPrefixes.length;i<len;i++)if(cssPrefixes[i]+"Transition"in bodyStyle)return cssPrefixes[i]}();
if(!vendorPrefix)return;var setCssHooks=function(prop){var upperProp=prop.charAt(0).toUpperCase()+prop.slice(1);var vendorProp=vendorPrefix+upperProp;var getVendorProp=vendorPrefix==="ms"?"Ms"+upperProp:
vendorProp;$.cssHooks[upperProp]=$.cssHooks[vendorPrefix.toLowerCase()+upperProp]=$.cssHooks[prop]={get:function(elem,computed){return computed?$.css(elem,getVendorProp):elem.style[vendorProp]},
set:function(elem,value){elem.style[vendorProp]=value}}};
for(var n=0,actsLen=acts.length;n<actsLen;n++)setCssHooks(acts[n]);return{vendorPrefix:vendorPrefix,setCssHooks:setCssHooks}});
eg.module("pauseResume",["jQuery"],function($){var animateFn=$.fn.animate;var stopFn=$.fn.stop;var delayFn=$.fn.delay;var uuid=1;function AniProperty(type,el,prop,optall){this.el=el;this.opt=optall;this.start=
-1;this.elapsed=0;this.paused=false;this.uuid=uuid++;this.easingNames=[];this.prop=prop;this.type=type}
function generateAbsoluteValMaker(prevValue,propName,sign){return function absoluteValMaker(match){if(!prevValue||prevValue==="auto")prevValue=0;else prevValue=parseFloat(prevValue);return prevValue+match*
sign}}
AniProperty.prototype.init=function(){var currValue;this.start=$.now();this.elapsed=0;for(var propName in this.prop){var propValue=this.prop[propName];var markIndex;var sign;if(propName==="transform")continue;
if(typeof propValue!=="string"||(markIndex=propValue.search(/[+|-]=/))<0)continue;sign=propValue.charAt(markIndex)==="-"?-1:1;currValue=$.css(this.el,propName);this.prop[propName]=propValue.replace(/([-|+])*([\d|\.])+/g,
generateAbsoluteValMaker(currValue,propName,sign)).replace(/[-|+]+=/g,"")}};
AniProperty.prototype.addEasingFn=function(easingName){this.easingNames.push(easingName)};
AniProperty.prototype.clearEasingFn=function(){var easing;while(easing=this.easingNames.shift())delete $.easing[easing];this.easingNames=[]};
function addAniProperty(type,el,prop,optall){var newProp;newProp=new AniProperty(type,el,prop,optall);el.__aniProps=el.__aniProps||[];if(el.__aniProps.length===0)newProp.init();el.__aniProps.push(newProp)}
function removeAniProperty(el){var removeProp=el.__aniProps.shift();removeProp&&removeProp.clearEasingFn();el.__aniProps[0]&&el.__aniProps[0].init()}
$.fn.animate=function(prop,speed,easing,callback){return this.each(function(){var optall=$.speed(speed,easing,callback);optall.complete=function(){prepareNextAniProp(this)};
addAniProperty("animate",this,prop,optall);animateFn.call($(this),prop,optall)})};
function getStatus(el){if(!el.__aniProps||el.__aniProps.length===0)return"empty";return el.__aniProps[0].paused?"paused":"inprogress"}
$.fn.delay=function(time,type){var t;var isCallByResume=arguments[2];if(type&&type!=="fx")return delayFn.call(this,time,type);t=parseInt(time,10);t=isNaN(t)?0:t;return this.each(function(){if(!isCallByResume)addAniProperty("delay",
this,null,{duration:t});var self=this;delayFn.call($(this),time).queue(function(next){next();removeAniProperty(self)})})};
$.fn.pause=function(){return this.each(function(){var p;var type="fx";if(getStatus(this)!=="inprogress")return;$.queue(this,type,[$.noop]);stopFn.call($(this));if(p=this.__aniProps[0]){p.elapsed+=$.now()-
p.start;if(p.elapsed>=p.opt.duration)p=prepareNextAniProp(this);p&&(p.paused=true)}})};
function prepareNextAniProp(el){var removeProp;var userCallback;removeProp=el.__aniProps.shift();removeProp.clearEasingFn();userCallback=removeProp.opt.old;if(userCallback&&typeof userCallback==="function")userCallback.call(el);
el.__aniProps[0]&&el.__aniProps[0].init();return el.__aniProps[0]}
$.fn.resume=function(){return this.each(function(){var type="fx";var p;var i;if(getStatus(this)!=="paused")return;$.queue(this,type,[]);i=0;while(p=this.__aniProps[i]){if(p.elapsed>0&&p.opt.easing){var resumePercent=
p.elapsed/p.opt.duration;var remainPercent=1-resumePercent;var originalEasing=$.easing[p.opt.easing];var startEasingValue=originalEasing(resumePercent);var scale=scaler([startEasingValue,1],[0,1]);var newEasingName=
p.opt.easing+"_"+p.uuid;$.easing[newEasingName]=generateNewEasingFunc(resumePercent,remainPercent,scale,originalEasing);p.opt.easing=newEasingName;p.addEasingFn(newEasingName)}p.paused=false;p.opt.duration-=
p.elapsed;if(p.opt.duration>0||p.elapsed===0){i===0&&p.init();if(p.type==="delay")$(this).delay(p.opt.duration,"fx",true);else animateFn.call($(this),p.prop,p.opt)}i++}})};
function generateNewEasingFunc(resumePercent,remainPercent,scale,originalEasing){return function easingFunc(percent){var newPercent=resumePercent+remainPercent*percent;return scale(originalEasing(newPercent))}}
$.fn.stop=function(type,clearQueue){var clearQ=clearQueue;stopFn.apply(this,arguments);if(typeof type!=="string")clearQ=type;return this.each(function(){var p;if(getStatus(this)==="empty")return;if(!clearQ){p=
this.__aniProps.shift();p&&p.clearEasingFn()}else{while(p=this.__aniProps.shift())p.clearEasingFn();this.__aniProps=[]}})};
jQuery.expr.filters.paused=function(elem){return getStatus(elem)==="paused"};
function scaler(domain,range){var u=uninterpolateNumber(domain[0],domain[1]);var i=interpolateNumber(range[0],range[1]);return function(x){return i(u(x))}}
function interpolateNumber(a,b){a=+a,b=+b;return function(t){return a*(1-t)+b*t}}
function uninterpolateNumber(a,b){b=(b-=a=+a)||1/b;return function(x){return(x-a)/b}}
});
eg.module("persist",["jQuery",eg,window,document],function($,ns,global,doc){var wp=global.performance;var history=global.history;var agent=ns.agent();var isNeeded=function(){var version=parseFloat(agent.os.version);
return!(agent.os.name==="ios"||agent.os.name==="mac"&&agent.browser.name==="safari"||agent.os.name==="android"&&(version<=4.3&&agent.browser.webview===true||version<3))}();
var JSON=global.JSON;var CONST_PERSIST="___persist___";var GLOBAL_KEY="KEY"+CONST_PERSIST;var $global=$(global);var isPersisted=$global.attr(CONST_PERSIST)===true;var isBackForwardNavigated=wp&&wp.navigation&&
wp.navigation.type===(wp.navigation.TYPE_BACK_FORWARD||2);var isSupportState="replaceState"in history&&"state"in history;var storage=function(){if(isStorageAvailable(global.sessionStorage))return global.sessionStorage;
else if(isStorageAvailable(global.localStorage))return global.localStorage}();
function isStorageAvailable(storage){if(!storage)return;var TMP_KEY="__tmp__"+CONST_PERSIST;try{storage.setItem(TMP_KEY,CONST_PERSIST);return storage.getItem(TMP_KEY)===CONST_PERSIST}catch(e){return false}}
if(!isSupportState&&!storage)return;if(!JSON){console.warn("The JSON object is not supported in your browser.\r\n"+"For work around use polyfill which can be found at:\r\n"+"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON#Polyfill");
return}function onPageshow(e){isPersisted=isPersisted||e.originalEvent&&e.originalEvent.persisted;if(!isPersisted&&isBackForwardNavigated)$global.trigger("persist");else reset()}
function reset(){setState(null)}
function getState(){var state;var stateStr=storage?storage.getItem(global.location.href+CONST_PERSIST):history.state;if(stateStr===null)return{};var isValidStateStr=typeof stateStr==="string"&&stateStr.length>
0&&stateStr!=="null";var isValidType;try{state=JSON.parse(stateStr);isValidType=!($.type(state)!=="object"||state instanceof Array);if(!isValidStateStr||!isValidType)throw new Error;}catch(e){warnInvalidStorageValue();
state={}}return state}
function warnInvalidStorageValue(){console.warn("window.history or session/localStorage has no valid "+"format data to be handled in persist.")}
function getStateByKey(key){var result=getState()[key];if(result==="null"||typeof result==="undefined")result=null;return result}
function setState(state){if(storage)if(state)storage.setItem(global.location.href+CONST_PERSIST,JSON.stringify(state));else storage.removeItem(global.location.href+CONST_PERSIST);else try{history.replaceState(state===
null?null:JSON.stringify(state),doc.title,global.location.href)}catch(e){console.warn(e.message)}state?$global.attr(CONST_PERSIST,true):$global.attr(CONST_PERSIST,null)}
function setStateByKey(key,data){var beforeData=getState();beforeData[key]=data;setState(beforeData)}
$.persist=function(state,data){var key;if(typeof state==="string")key=state;else{key=GLOBAL_KEY;data=arguments.length===1?state:null}if(data||arguments.length===2)setStateByKey(key,data);return getStateByKey(key)};
$.persist.isNeeded=function(){return isNeeded};
!isBackForwardNavigated&&reset();$.event.special.persist={setup:function(){$global.on("pageshow",onPageshow)},
teardown:function(){$global.off("pageshow",onPageshow)},
trigger:function(e){e.state=getStateByKey(GLOBAL_KEY)}};
return{"isBackForwardNavigated":isBackForwardNavigated,"onPageshow":onPageshow,"reset":reset,"getState":getState,"setState":setState,"GLOBALKEY":GLOBAL_KEY}});
eg.module("visible",["jQuery",eg,document],function($,ns,doc){var EVENTS={"change":"change"};ns.Visible=ns.Class.extend(ns.Component,{_events:function(){return EVENTS},
construct:function(element,options,_prefix){this._prefix=_prefix||"";this.options={targetClass:"check_visible",expandSize:0};$.extend(this.options,options);this._wrapper=$(element)[0]||doc;if(this._wrapper.nodeType&&
this._wrapper.nodeType===1)this._getAreaRect=this._getWrapperRect;else this._getAreaRect=this._getWindowRect;this._targets=[];this._timer=null;this._supportElementsByClassName=function(){var dummy=doc.createElement("div");
var dummies;if(!dummy.getElementsByClassName)return false;dummies=dummy.getElementsByClassName("dummy");dummy.innerHTML="\x3cspan class\x3d'dummy'\x3e\x3c/span\x3e";return dummies.length===1}();
this.refresh()},
refresh:function(){if(this._supportElementsByClassName){this._targets=this._wrapper.getElementsByClassName(this.options.targetClass);this.refresh=function(){return this}}else this.refresh=function(){this._targets=
$(this._wrapper).find("."+this.options.targetClass).get();
return this};
return this.refresh()},
check:function(delay,containment){if(typeof delay!=="number"){containment=delay;delay=-1}if(typeof containment==="undefined")containment=false;clearTimeout(this._timer);if(delay<0)this._check(containment);
else this._timer=setTimeout($.proxy(function(){this._check(containment);this._timer=null},this),delay);
return this},
_getWrapperRect:function(){return this._wrapper.getBoundingClientRect()},
_getWindowRect:function(){return{top:0,left:0,bottom:doc.documentElement.clientHeight||doc.body.clientHeight,right:doc.documentElement.clientWidth||doc.body.clientWidth}},
_reviseElements:function(target,i){if(this._supportElementsByClassName)this._reviseElements=function(){return true};
else this._reviseElements=function(target,i){if(!$(target).hasClass(this.options.targetClass)){target.__VISIBLE__=null;this._targets.splice(i,1);return false}return true};
return this._reviseElements(target,i)},
_check:function(containment){var expandSize=parseInt(this.options.expandSize,10);var visibles=[];var invisibles=[];var area=this._getAreaRect();area=$.extend({},area);area.top-=expandSize;area.left-=expandSize;
area.bottom+=expandSize;area.right+=expandSize;for(var i=this._targets.length-1,target,targetArea,after,before;target=this._targets[i];i--){targetArea=target.getBoundingClientRect();if(targetArea.width===
0&&targetArea.height===0)continue;if(this._reviseElements(target,i)){before=!!target.__VISIBLE__;if(containment)target.__VISIBLE__=after=!(targetArea.top<area.top||targetArea.bottom>area.bottom||targetArea.right>
area.right||targetArea.left<area.left);else target.__VISIBLE__=after=!(targetArea.bottom<area.top||area.bottom<targetArea.top||targetArea.right<area.left||area.right<targetArea.left);before!==after&&(after?
visibles:invisibles).unshift(target)}}this.trigger(this._prefix+EVENTS.change,{visible:visibles,invisible:invisibles})},
destroy:function(){this.off();this._targets=[];this._wrapper=this._timer=null}})});
eg.module("movableCoord",[eg,window,"Hammer"],function(ns,global,HM){var SUPPORT_TOUCH="ontouchstart"in global;var assignFn=HM.assign||HM.merge;var MC=ns.MovableCoord=ns.Class.extend(ns.Component,{construct:function(options){assignFn(this.options=
{min:[0,0],max:[100,100],bounce:[10,10,10,10],margin:[0,0,0,0],circular:[false,false,false,false],easing:function easeOutCubic(x){return 1-Math.pow(1-x,3)},
maximumDuration:Infinity,deceleration:6E-4},options);this._reviseOptions();this._status={grabOutside:false,curHammer:null,moveDistance:null,animationParam:null,prevented:false};this._hammers={};this._pos=
this.options.min.concat();this._subOptions={};this._raf=null;this._animationEnd=HM.bindFn(this._animationEnd,this);this._restore=HM.bindFn(this._restore,this);this._panmove=HM.bindFn(this._panmove,this);
this._panend=HM.bindFn(this._panend,this)},
bind:function(element,options){var el=this._getEl(element);var keyValue=el[MC._KEY];var subOptions={direction:MC.DIRECTION_ALL,scale:[1,1],thresholdAngle:45,interruptable:true,inputType:["touch","mouse"]};
assignFn(subOptions,options);var inputClass=this._convertInputType(subOptions.inputType);if(!inputClass)return this;if(keyValue)this._hammers[keyValue].inst.destroy();else keyValue=Math.round(Math.random()*
(new Date).getTime());this._hammers[keyValue]={inst:this._createHammer(el,subOptions,inputClass),el:el,options:subOptions};el[MC._KEY]=keyValue;return this},
_createHammer:function(el,subOptions,inputClass){try{var hammer=new HM.Manager(el,{recognizers:[[HM.Pan,{direction:subOptions.direction,threshold:0}]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",
userDrag:"none"},inputClass:inputClass});return this._attachHammerEvents(hammer,subOptions)}catch(e){}},
_attachHammerEvents:function(hammer,options){return hammer.on("hammer.input",HM.bindFn(function(e){var enable=hammer.get("pan").options.enable;if(e.isFirst){this._subOptions=options;this._status.curHammer=
hammer;enable&&this._panstart(e)}else if(e.isFinal)enable&&this._panend(e)},this)).on("panstart panmove",this._panmove)},
_detachHammerEvents:function(hammer){hammer.off("hammer.input panstart panmove panend")},
_convertInputType:function(inputType){var hasTouch=false;var hasMouse=false;inputType=inputType||[];inputType.forEach(function(v){switch(v){case "mouse":hasMouse=true;break;case "touch":hasTouch=SUPPORT_TOUCH}});
return hasTouch&&HM.TouchInput||hasMouse&&HM.MouseInput||null},
unbind:function(element){var el=this._getEl(element);var key=el[MC._KEY];if(key){this._hammers[key].inst.destroy();delete this._hammers[key];delete el[MC._KEY]}return this},
getHammer:function(element){var el=this._getEl(element);var key=el?el[MC._KEY]:null;if(key&&this._hammers[key])return this._hammers[key].inst;else return null},
_grab:function(){if(this._status.animationParam){this.trigger("animationEnd");var pos=this._getCircularPos(this._pos);if(pos[0]!==this._pos[0]||pos[1]!==this._pos[1]){this._pos=pos;this._triggerChange(this._pos,
true)}this._status.animationParam=null;this._raf&&ns.cancelAnimationFrame(this._raf);this._raf=null}},
_getCircularPos:function(pos,min,max,circular){min=min||this.options.min;max=max||this.options.max;circular=circular||this.options.circular;if(circular[0]&&pos[1]<min[1])pos[1]=(pos[1]-min[1])%(max[1]-
min[1]+1)+max[1];if(circular[1]&&pos[0]>max[0])pos[0]=(pos[0]-min[0])%(max[0]-min[0]+1)+min[0];if(circular[2]&&pos[1]>max[1])pos[1]=(pos[1]-min[1])%(max[1]-min[1]+1)+min[1];if(circular[3]&&pos[0]<min[0])pos[0]=
(pos[0]-min[0])%(max[0]-min[0]+1)+max[0];pos[0]=+pos[0].toFixed(5),pos[1]=+pos[1].toFixed(5);return pos},
_isOutside:function(pos,min,max){return pos[0]<min[0]||pos[1]<min[1]||pos[0]>max[0]||pos[1]>max[1]},
_isOutToOut:function(pos,destPos){var min=this.options.min;var max=this.options.max;return(pos[0]<min[0]||pos[0]>max[0]||pos[1]<min[1]||pos[1]>max[1])&&(destPos[0]<min[0]||destPos[0]>max[0]||destPos[1]<
min[1]||destPos[1]>max[1])},
_panstart:function(e){if(!this._subOptions.interruptable&&this._status.prevented)return;this._setInterrupt(true);var pos=this._pos;this._grab();this.trigger("hold",{pos:pos.concat(),hammerEvent:e});this._status.moveDistance=
pos.concat();this._status.grabOutside=this._isOutside(pos,this.options.min,this.options.max)},
_panmove:function(e){if(!this._isInterrupting()||!this._status.moveDistance)return;var tv;var tn;var tx;var pos=this._pos;var min=this.options.min;var max=this.options.max;var bounce=this.options.bounce;
var margin=this.options.margin;var direction=this._subOptions.direction;var scale=this._subOptions.scale;var userDirection=this._getDirection(e.angle);var out=[margin[0]+bounce[0],margin[1]+bounce[1],margin[2]+
bounce[2],margin[3]+bounce[3]];var prevent=false;var prevInput=this._status.curHammer.session.prevInput;if(prevInput){e.offsetX=e.deltaX-prevInput.deltaX;e.offsetY=e.deltaY-prevInput.deltaY}else e.offsetX=
e.offsetY=0;if(direction===MC.DIRECTION_ALL||direction&MC.DIRECTION_HORIZONTAL&&userDirection&MC.DIRECTION_HORIZONTAL){this._status.moveDistance[0]+=e.offsetX*scale[0];prevent=true}if(direction===MC.DIRECTION_ALL||
direction&MC.DIRECTION_VERTICAL&&userDirection&MC.DIRECTION_VERTICAL){this._status.moveDistance[1]+=e.offsetY*scale[1];prevent=true}if(prevent){e.srcEvent.preventDefault();e.srcEvent.stopPropagation()}e.preventSystemEvent=
prevent;pos[0]=this._status.moveDistance[0];pos[1]=this._status.moveDistance[1];pos=this._getCircularPos(pos,min,max);if(this._status.grabOutside&&!this._isOutside(pos,min,max))this._status.grabOutside=
false;if(this._status.grabOutside){tn=min[0]-out[3],tx=max[0]+out[1],tv=pos[0];pos[0]=tv>tx?tx:tv<tn?tn:tv;tn=min[1]-out[0],tx=max[1]+out[2],tv=pos[1];pos[1]=tv>tx?tx:tv<tn?tn:tv}else{var initSlope=this._easing(1E-5)/
1E-5;if(pos[1]<min[1]){tv=(min[1]-pos[1])/(out[0]*initSlope);pos[1]=min[1]-this._easing(tv)*out[0]}else if(pos[1]>max[1]){tv=(pos[1]-max[1])/(out[2]*initSlope);pos[1]=max[1]+this._easing(tv)*out[2]}if(pos[0]<
min[0]){tv=(min[0]-pos[0])/(out[3]*initSlope);pos[0]=min[0]-this._easing(tv)*out[3]}else if(pos[0]>max[0]){tv=(pos[0]-max[0])/(out[1]*initSlope);pos[0]=max[0]+this._easing(tv)*out[1]}}this._triggerChange(pos,
true,e)},
_panend:function(e){var pos=this._pos;if(!this._isInterrupting()||!this._status.moveDistance)return;if(e.distance===0){this._setInterrupt(false);this.trigger("release",{depaPos:pos.concat(),destPos:pos.concat(),
hammerEvent:e||null})}else{var direction=this._subOptions.direction;var scale=this._subOptions.scale;var vX=Math.abs(e.velocityX);var vY=Math.abs(e.velocityY);!(direction&MC.DIRECTION_HORIZONTAL)&&(vX=
0);!(direction&MC.DIRECTION_VERTICAL)&&(vY=0);var offset=this._getNextOffsetPos([vX*(e.deltaX<0?-1:1)*scale[0],vY*(e.deltaY<0?-1:1)*scale[1]]);var destPos=[pos[0]+offset[0],pos[1]+offset[1]];destPos=this._getPointOfIntersection(pos,
destPos);this.trigger("release",{depaPos:pos.concat(),destPos:destPos,hammerEvent:e||null});if(pos[0]!==destPos[0]||pos[1]!==destPos[1])this._animateTo(destPos,null,e||null);else this._setInterrupt(false)}this._status.moveDistance=
null},
_isInterrupting:function(){return this._subOptions.interruptable||this._status.prevented},
_getDirection:function(angle){var thresholdAngle=this._subOptions.thresholdAngle;if(thresholdAngle<0||thresholdAngle>90)return MC.DIRECTION_NONE;angle=Math.abs(angle);return angle>thresholdAngle&&angle<
180-thresholdAngle?MC.DIRECTION_VERTICAL:MC.DIRECTION_HORIZONTAL},
_getNextOffsetPos:function(speeds){var normalSpeed=Math.sqrt(speeds[0]*speeds[0]+speeds[1]*speeds[1]);var duration=Math.abs(normalSpeed/-this.options.deceleration);return[speeds[0]/2*duration,speeds[1]/
2*duration]},
_getDurationFromPos:function(pos){var normalPos=Math.sqrt(pos[0]*pos[0]+pos[1]*pos[1]);var duration=Math.sqrt(normalPos/this.options.deceleration*2);return duration<100?0:duration},
_getPointOfIntersection:function(depaPos,destPos){var circular=this.options.circular;var bounce=this.options.bounce;var min=this.options.min;var max=this.options.max;var boxLT=[min[0]-bounce[3],min[1]-
bounce[0]];var boxRB=[max[0]+bounce[1],max[1]+bounce[2]];var xd;var yd;destPos=[destPos[0],destPos[1]];xd=destPos[0]-depaPos[0],yd=destPos[1]-depaPos[1];if(!circular[3])destPos[0]=Math.max(boxLT[0],destPos[0]);
if(!circular[1])destPos[0]=Math.min(boxRB[0],destPos[0]);destPos[1]=xd?depaPos[1]+yd/xd*(destPos[0]-depaPos[0]):destPos[1];if(!circular[0])destPos[1]=Math.max(boxLT[1],destPos[1]);if(!circular[2])destPos[1]=
Math.min(boxRB[1],destPos[1]);destPos[0]=yd?depaPos[0]+xd/yd*(destPos[1]-depaPos[1]):destPos[0];return[Math.min(max[0],Math.max(min[0],destPos[0])),Math.min(max[1],Math.max(min[1],destPos[1]))]},
_isCircular:function(destPos){var circular=this.options.circular;var min=this.options.min;var max=this.options.max;return circular[0]&&destPos[1]<min[1]||circular[1]&&destPos[0]>max[0]||circular[2]&&destPos[1]>
max[1]||circular[3]&&destPos[0]<min[0]},
_prepareParam:function(absPos,duration,hammerEvent){var pos=this._pos;var destPos=this._getPointOfIntersection(pos,absPos);destPos=this._isOutToOut(pos,destPos)?pos:destPos;var distance=[Math.abs(destPos[0]-
pos[0]),Math.abs(destPos[1]-pos[1])];duration=duration==null?this._getDurationFromPos(distance):duration;duration=this.options.maximumDuration>duration?duration:this.options.maximumDuration;return{depaPos:pos.concat(),
destPos:destPos.concat(),isBounce:this._isOutside(destPos,this.options.min,this.options.max),isCircular:this._isCircular(absPos),duration:duration,distance:distance,hammerEvent:hammerEvent||null,done:this._animationEnd}},
_restore:function(complete,hammerEvent){var pos=this._pos;var min=this.options.min;var max=this.options.max;this._animate(this._prepareParam([Math.min(max[0],Math.max(min[0],pos[0])),Math.min(max[1],Math.max(min[1],
pos[1]))],null,hammerEvent),complete)},
_animationEnd:function(){this._status.animationParam=null;this._pos=this._getCircularPos([Math.round(this._pos[0]),Math.round(this._pos[1])]);this._setInterrupt(false);this.trigger("animationEnd")},
_animate:function(param,complete){param.startTime=(new Date).getTime();this._status.animationParam=param;if(param.duration){var info=this._status.animationParam;var self=this;(function loop(){self._raf=
null;if(self._frame(info)>=1){complete();return}self._raf=ns.requestAnimationFrame(loop)})()}else{this._triggerChange(param.destPos,false);
complete()}},
_animateTo:function(absPos,duration,hammerEvent){var param=this._prepareParam(absPos,duration,hammerEvent);var retTrigger=this.trigger("animationStart",param);if(param.isCircular&&!retTrigger)throw new Error("You can't stop the 'animation' event when 'circular' is true.");
if(retTrigger){var self=this;var queue=[];var dequeue=function(){var task=queue.shift();task&&task.call(this)};
if(param.depaPos[0]!==param.destPos[0]||param.depaPos[1]!==param.destPos[1])queue.push(function(){self._animate(param,dequeue)});
if(this._isOutside(param.destPos,this.options.min,this.options.max))queue.push(function(){self._restore(dequeue,hammerEvent)});
queue.push(function(){self._animationEnd()});
dequeue()}},
_frame:function(param){var curTime=new Date-param.startTime;var easingPer=this._easing(curTime/param.duration);var pos=[param.depaPos[0],param.depaPos[1]];for(var i=0;i<2;i++)pos[i]!==param.destPos[i]&&
(pos[i]+=(param.destPos[i]-pos[i])*easingPer);pos=this._getCircularPos(pos);this._triggerChange(pos,false);return easingPer},
_reviseOptions:function(){var key;var self=this;["bounce","margin","circular"].forEach(function(v){key=self.options[v];if(key!=null)if(key.constructor===Array)self.options[v]=key.length===2?key.concat(key):
key.concat();else if(/string|number|boolean/.test(typeof key))self.options[v]=[key,key,key,key];else self.options[v]=null})},
_triggerChange:function(pos,holding,e){this._pos=pos.concat();this.trigger("change",{pos:pos.concat(),holding:holding,hammerEvent:e||null})},
get:function(){return this._pos.concat()},
setTo:function(x,y,duration){this._grab();var pos=this._pos.concat();var circular=this.options.circular;var min=this.options.min;var max=this.options.max;if(x===pos[0]&&y===pos[1])return this;this._setInterrupt(true);
if(x!==pos[0]){if(!circular[3])x=Math.max(min[0],x);if(!circular[1])x=Math.min(max[0],x)}if(y!==pos[1]){if(!circular[0])y=Math.max(min[1],y);if(!circular[2])y=Math.min(max[1],y)}if(duration)this._animateTo([x,
y],duration);else{this._pos=this._getCircularPos([x,y]);this._triggerChange(this._pos,false);this._setInterrupt(false)}return this},
setBy:function(x,y,duration){return this.setTo(x!=null?this._pos[0]+x:this._pos[0],y!=null?this._pos[1]+y:this._pos[1],duration)},
_easing:function(p){return p>1?1:this.options.easing(p)},
_setInterrupt:function(prevented){!this._subOptions.interruptable&&(this._status.prevented=prevented)},
_getEl:function(el){if(typeof el==="string")return document.querySelector(el);else if(el instanceof jQuery&&el.length>0)return el[0];return el},
enableInput:function(element){return this._inputControl(true,element)},
disableInput:function(element){return this._inputControl(false,element)},
_inputControl:function(isEnable,element){var option={enable:isEnable};if(element){var hammer=this.getHammer(element);hammer&&hammer.get("pan").set(option)}else for(var p in this._hammers)this._hammers[p].inst.get("pan").set(option);
return this},
destroy:function(){this.off();for(var p in this._hammers){this._hammers[p].inst.destroy();delete this._hammers[p].el[MC._KEY];delete this._hammers[p]}}});
MC._KEY="__MOVABLECOORD__";MC.DIRECTION_NONE=1;MC.DIRECTION_LEFT=2;MC.DIRECTION_RIGHT=4;MC.DIRECTION_UP=8;MC.DIRECTION_DOWN=16;MC.DIRECTION_HORIZONTAL=2|4;MC.DIRECTION_VERTICAL=8|16;MC.DIRECTION_ALL=MC.DIRECTION_HORIZONTAL|
MC.DIRECTION_VERTICAL;return{"MovableCoord":ns.MovableCoord,"assignFn":assignFn}});
eg.module("flicking",["jQuery",eg,window,document,eg.MovableCoord],function($,ns,global,doc,MC){var EVENTS={"beforeFlickStart":"beforeFlickStart","beforeRestore":"beforeRestore","flick":"flick","flickEnd":"flickEnd",
"restore":"restore"};var SUPPORT_TRANSFORM=doc.documentElement.style;SUPPORT_TRANSFORM="transform"in SUPPORT_TRANSFORM||"webkitTransform"in SUPPORT_TRANSFORM;var SUPPORT_WILLCHANGE=global.CSS&&global.CSS.supports&&
global.CSS.supports("will-change","transform");var IS_ANDROID2=ns.agent().os;IS_ANDROID2=IS_ANDROID2.name==="android"&&/^2\./.test(IS_ANDROID2.version);var DATA_HEIGHT="data-height";ns.Flicking=ns.Class.extend(ns.Component,
{_events:function(){return EVENTS},
construct:function(element,options,_prefix){this.$wrapper=$(element);var $children=this.$wrapper.children();if(!$children.length)throw new Error("Given base element doesn't exist or it hasn't proper DOM structure to be initialized.");
this._setOptions(options);this._setConfig($children,_prefix);!ns._hasClickBug()&&(this._setPointerEvents=$.noop);this._build();this._bindEvents(true);this._applyPanelsCss();this._arrangePanels();this.options.hwAccelerable&&
SUPPORT_WILLCHANGE&&this._setHint();this.options.adaptiveHeight&&this._setAdaptiveHeight();this._adjustContainerCss("end")},
_setOptions:function(options){var arrVal={previewPadding:[0,0],bounce:[10,10]};$.extend(this.options={hwAccelerable:ns.isHWAccelerable(),prefix:"eg-flick",deceleration:6E-4,horizontal:true,circular:false,
previewPadding:arrVal.previewPadding,bounce:arrVal.bounce,threshold:40,duration:100,panelEffect:$.easing.easeOutCubic,defaultIndex:0,inputType:["touch","mouse"],thresholdAngle:45,adaptiveHeight:false},
options);var self=this;$.each(arrVal,function(i,v){var val=self.options[i];if($.isNumeric(val))val=[val,val];else if(!$.isArray(val))val=v;self.options[i]=val})},
_setConfig:function($children,_prefix){var options=this.options;var padding=options.previewPadding;var $container=$children.filter("."+options.prefix+"-container:first");if($container.length){this.$container=
$container;$children=$container.children()}this._conf={panel:{$list:$children,index:0,no:0,currIndex:0,currNo:0,size:0,count:0,origCount:0,changed:false,animating:false,minCount:padding[0]+padding[1]>0?
5:3},touch:{holdPos:[0,0],destPos:[0,0],distance:0,direction:null,lastPos:0,holding:false},customEvent:{flick:true,restore:false,restoreCall:false},origPanelStyle:{wrapper:{className:this.$wrapper.attr("class")||
null,style:this.$wrapper.attr("style")||null},list:$children.map(function(i,v){return{className:$(v).attr("class")||null,style:$(v).attr("style")||null}})},
useLayerHack:options.hwAccelerable&&!SUPPORT_WILLCHANGE,dirData:[],indexToMove:0,eventPrefix:_prefix||"",$dummyAnchor:null};$([["LEFT","RIGHT"],["UP","DOWN"]][+!options.horizontal]).each($.proxy(function(i,
v){this._conf.dirData.push(MC["DIRECTION_"+v])},this))},
_build:function(){var panel=this._conf.panel;var options=this.options;var $children=panel.$list;var padding=options.previewPadding.concat();var prefix=options.prefix;var horizontal=options.horizontal;var panelCount=
panel.count=panel.origCount=$children.length;var cssValue;var bounce=options.bounce;this._setPadding(padding,true);var sizeValue=this._getDataByDirection([panel.size,"100%"]);cssValue="position:relative;z-index:2000;width:100%;height:100%;"+
(horizontal?"":"top:0;");if(this.$container)this.$container.attr("style",cssValue);else this.$container=$children.wrapAll("\x3cdiv class\x3d'"+prefix+"-container' style\x3d'"+cssValue+"'\x3e").parent();
$children.addClass(prefix+"-panel").css({position:"absolute",width:sizeValue[0],height:sizeValue[1],boxSizing:"border-box",top:0,left:0});if(this._addClonePanels())panelCount=panel.count=(panel.$list=this.$container.children()).length;
this._mcInst=new MC({min:[0,0],max:this._getDataByDirection([panel.size*(panelCount-1),0]),margin:0,circular:false,easing:options.panelEffect,deceleration:options.deceleration,bounce:this._getDataByDirection([0,
bounce[1],0,bounce[0]])});this._setDefaultPanel(options.defaultIndex)},
_setPadding:function(padding,build){var horizontal=this.options.horizontal;var panel=this._conf.panel;var paddingSum=padding[0]+padding[1];var cssValue={};if(paddingSum||!build)cssValue.padding=(horizontal?
"0 "+padding.reverse().join("px 0 "):padding.join("px 0 "))+"px";if(build){cssValue.overflow="hidden";cssValue.boxSizing="border-box"}!$.isEmptyObject(cssValue)&&this.$wrapper.css(cssValue);panel.size=
this.$wrapper[horizontal?"width":"height"]()},
_addClonePanels:function(){var panel=this._conf.panel;var panelCount=panel.origCount;var cloneCount=panel.minCount-panelCount;var list=panel.$list;var cloneNodes;if(this.options.circular&&panelCount<panel.minCount){cloneNodes=
list.clone();while(cloneNodes.length<cloneCount)cloneNodes=cloneNodes.add(list.clone());return this.$container.append(cloneNodes)}},
_movePanelPosition:function(count,append){var panel=this._conf.panel;var list=panel.$list.toArray();var listToMove;listToMove=list.splice(append?0:panel.count-count,count);panel.$list=$(append?list.concat(listToMove):
listToMove.concat(list))},
_setDefaultPanel:function(index){var panel=this._conf.panel;var lastIndex=panel.count-1;var coords;var baseIndex;if(this.options.circular){if(index>0&&index<=lastIndex)this._movePanelPosition(index,true);
baseIndex=this._getBasePositionIndex();this._movePanelPosition(baseIndex,false);this._setPanelNo({no:index,currNo:index})}else if(index>0&&index<=lastIndex){this._setPanelNo({index:index,no:index,currIndex:index,
currNo:index});coords=[-(panel.size*index),0];this._setTranslate(coords);this._setMovableCoord("setTo",[Math.abs(coords[0]),Math.abs(coords[1])],true,0)}},
_arrangePanels:function(sort,indexToMove){var conf=this._conf;var panel=conf.panel;var touch=conf.touch;var dirData=conf.dirData;var baseIndex;if(this.options.circular){conf.customEvent.flick=false;if(sort){indexToMove&&
(touch.direction=dirData[+!Boolean(indexToMove>0)]);this._arrangePanelPosition(touch.direction,indexToMove)}baseIndex=this._getBasePositionIndex();this._setPanelNo({index:baseIndex,currIndex:baseIndex});
conf.customEvent.flick=!!this._setMovableCoord("setTo",[panel.size*panel.index,0],true,0)}this._applyPanelsPos()},
_applyPanelsPos:function(){this._conf.panel.$list.each($.proxy(this._applyPanelsCss,this))},
_setMoveStyle:function(){return SUPPORT_TRANSFORM?function($element,coords){$element.css("transform",ns.translate(coords[0],coords[1],this._conf.useLayerHack))}:function($element,coords){$element.css({left:coords[0],
top:coords[1]})}}(),
_applyPanelsCss:function(){var conf=this._conf;var dummyAnchorClassName="__dummy_anchor";if(IS_ANDROID2){conf.$dummyAnchor=$("."+dummyAnchorClassName);!conf.$dummyAnchor.length&&this.$wrapper.append(conf.$dummyAnchor=
$("\x3ca href\x3d'javascript:void(0);' class\x3d'"+dummyAnchorClassName+"' style\x3d'position:absolute;height:0px;width:0px;'\x3e"));this._applyPanelsCss=function(i,v){var coords=this._getDataByDirection([this._conf.panel.size*
i+"px",0]);$(v).css({left:coords[0],top:coords[1]})}}else this._applyPanelsCss=function(i,v){var coords=this._getDataByDirection([SUPPORT_TRANSFORM?100*i+"%":this._conf.panel.size*i+"px",
0]);this._setMoveStyle($(v),coords)}},
_adjustContainerCss:function(phase,coords){var conf=this._conf;var panel=conf.panel;var options=this.options;var horizontal=options.horizontal;var paddingTop=options.previewPadding[0];var container=this.$container;
var value;if(IS_ANDROID2){if(!coords)coords=[-panel.size*panel.index,0];if(phase==="start"){container=container[0].style;value=parseInt(container[horizontal?"left":"top"],10);if(horizontal)value&&(container.left=
0);else value!==paddingTop&&(container.top="0px");this._setTranslate([-coords[+!options.horizontal],0])}else if(phase==="end"){coords=this._getCoordsValue(coords);container.css({left:coords.x,top:coords.y,
transform:ns.translate(0,0,conf.useLayerHack)});conf.$dummyAnchor[0].focus()}}},
_setMovableCoord:function(method,coord,isDirVal,duration){if(isDirVal)coord=this._getDataByDirection(coord);return this._mcInst[method](coord[0],coord[1],duration)},
_setHint:function(){var value="transform";this.$container.css("willChange",value);this._conf.panel.$list.css("willChange",value)},
_getDataByDirection:function(value){value=value.concat();!this.options.horizontal&&value.reverse();return value},
_arrangePanelPosition:function(direction,indexToMove){var next=direction===this._conf.dirData[0];this._movePanelPosition(Math.abs(indexToMove||1),next)},
_getBasePositionIndex:function(){return Math.floor(this._conf.panel.count/2-.1)},
_bindEvents:function(bind){var options=this.options;var $wrapper=this.$wrapper;var mcInst=this._mcInst;if(bind)mcInst.bind($wrapper,{scale:this._getDataByDirection([-1,0]),direction:MC["DIRECTION_"+(options.horizontal?
"HORIZONTAL":"VERTICAL")],interruptable:false,inputType:options.inputType,thresholdAngle:options.thresholdAngle}).on({hold:$.proxy(this._holdHandler,this),change:$.proxy(this._changeHandler,this),release:$.proxy(this._releaseHandler,
this),animationStart:$.proxy(this._animationStartHandler,this),animationEnd:$.proxy(this._animationEndHandler,this)});else mcInst.unbind($wrapper).off()},
_holdHandler:function(e){var conf=this._conf;conf.touch.holdPos=e.pos;conf.touch.holding=true;conf.panel.changed=false;this._adjustContainerCss("start",e.pos)},
_changeHandler:function(e){var conf=this._conf;var touch=conf.touch;var posIndex=+!this.options.horizontal;var pos=e.pos[posIndex];var holdPos=touch.holdPos[posIndex];var direction;var eventRes=null;var movedPx;
this._setPointerEvents(e);if(e.hammerEvent){direction=e.hammerEvent.direction;movedPx=e.hammerEvent[this.options.horizontal?"deltaX":"deltaY"];if(!~$.inArray(direction,conf.dirData))direction=conf.dirData[+(Math.abs(touch.lastPos)<=
movedPx)];touch.lastPos=movedPx}else touch.lastPos=null;conf.customEvent.flick&&(eventRes=this._triggerEvent(EVENTS.flick,{pos:e.pos,holding:e.holding,direction:direction||touch.direction,distance:pos-
(holdPos||(touch.holdPos[posIndex]=pos))}));(eventRes||eventRes===null)&&this._setTranslate([-pos,0])},
_releaseHandler:function(e){var touch=this._conf.touch;var pos=e.destPos;var posIndex=+!this.options.horizontal;var holdPos=touch.holdPos[posIndex];var panelSize=this._conf.panel.size;touch.distance=e.depaPos[posIndex]-
touch.holdPos[posIndex];touch.direction=this._conf.dirData[+!Boolean(touch.holdPos[posIndex]<e.depaPos[posIndex])];pos[posIndex]=Math.max(holdPos-panelSize,Math.min(holdPos,pos[posIndex]));touch.destPos[posIndex]=
pos[posIndex]=Math.round(pos[posIndex]/panelSize)*panelSize;touch.distance===0&&this._adjustContainerCss("end");touch.holding=false;this._setPointerEvents()},
_animationStartHandler:function(e){var conf=this._conf;var panel=conf.panel;var customEvent=conf.customEvent;panel.animating=true;if(!customEvent.restoreCall&&e.hammerEvent&&this._setPhaseValue("start",
{depaPos:e.depaPos,destPos:e.destPos})===false)e.stop();if(e.hammerEvent){e.duration=this.options.duration;e.destPos[+!this.options.horizontal]=panel.size*(panel.index+conf.indexToMove)}if(this._isMovable())!customEvent.restoreCall&&
(customEvent.restore=false);else this._triggerBeforeRestore(e)},
_animationEndHandler:function(){this._setPhaseValue("end");this._conf.panel.animating=false;this._triggerRestore()},
_setAdaptiveHeight:function(direction){var $panel;var $first;var $children;var height;var conf=this._conf;var indexToMove=conf.indexToMove;$panel=indexToMove===0?this["get"+(direction===MC.DIRECTION_LEFT&&
"Next"||direction===MC.DIRECTION_RIGHT&&"Prev"||"")+"Element"]():conf.panel.$list.eq(conf.panel.currIndex+indexToMove);$first=$panel.find(":first");height=$first.attr(DATA_HEIGHT);if(!height){$children=
$panel.children();height=($children.length>1?$panel.css("height","auto"):$first).outerHeight(true);$first.attr(DATA_HEIGHT,height)}this.$wrapper.height(height)},
_triggerBeforeRestore:function(e){var conf=this._conf;var touch=conf.touch;touch.direction=~~conf.dirData.join("").replace(touch.direction,"");conf.customEvent.restore=this._triggerEvent(EVENTS.beforeRestore,
{depaPos:e.depaPos,destPos:e.destPos});if(!conf.customEvent.restore){"stop"in e&&e.stop();conf.panel.animating=false}},
_triggerRestore:function(){var customEvent=this._conf.customEvent;customEvent.restore&&this._triggerEvent(EVENTS.restore);customEvent.restoreCall=false},
_setPhaseValue:function(phase,pos){var conf=this._conf;var options=this.options;var panel=conf.panel;if(phase==="start"&&(panel.changed=this._isMovable())){if(!this._triggerEvent(EVENTS.beforeFlickStart,
pos))return panel.changed=panel.animating=false;else options.adaptiveHeight&&this._setAdaptiveHeight(conf.touch.direction);conf.indexToMove===0&&this._setPanelNo()}else if(phase==="end"){if(options.circular&&
panel.changed)this._arrangePanels(true,conf.indexToMove);!IS_ANDROID2&&this._setTranslate([-panel.size*panel.index,0]);conf.touch.distance=conf.indexToMove=0;panel.changed&&this._triggerEvent(EVENTS.flickEnd)}this._adjustContainerCss(phase)},
_getNumByDirection:function(){var conf=this._conf;return conf.touch.direction===conf.dirData[0]?1:-1},
_revertPanelNo:function(){var panel=this._conf.panel;var num=this._getNumByDirection();var index=panel.currIndex>=0?panel.currIndex:panel.index-num;var no=panel.currNo>=0?panel.currNo:panel.no-num;this._setPanelNo({index:index,
no:no})},
_setPanelNo:function(obj){var panel=this._conf.panel;var count=panel.origCount-1;var num=this._getNumByDirection();if($.isPlainObject(obj))$.each(obj,function(i,v){panel[i]=v});
else{panel.currIndex=panel.index;panel.currNo=panel.no;panel.index+=num;panel.no+=num}if(panel.no>count)panel.no=0;else if(panel.no<0)panel.no=count},
_setPointerEvents:function(e){var pointer=this.$container.css("pointerEvents");var val;if(e&&e.holding&&e.hammerEvent&&e.hammerEvent.preventSystemEvent&&pointer!=="none")val="none";else if(!e&&pointer!==
"auto")val="auto";val&&this.$container.css("pointerEvents",val)},
_getCoordsValue:function(coords){coords=this._getDataByDirection(coords);return{x:this._getUnitValue(coords[0]),y:this._getUnitValue(coords[1])}},
_setTranslate:function(coords){coords=this._getCoordsValue(coords);this._setMoveStyle(this.$container,[coords.x,coords.y])},
_getUnitValue:function(val){var rx=/(?:[a-z]{2,}|%)$/;return(parseInt(val,10)||0)+(String(val).match(rx)||"px")},
_isMovable:function(){var options=this.options;var conf=this._conf;var mcInst=this._mcInst;var panel=conf.panel;var isMovable=Math.abs(this._conf.touch.distance)>=options.threshold;var max;var currPos;
var touchDirection;if(!options.circular&&isMovable){touchDirection=conf.touch.direction;max=this._getDataByDirection(mcInst.options.max)[0];currPos=this._getDataByDirection(mcInst.get())[0];if((panel.currNo===
0&&touchDirection===conf.dirData[1]||panel.count-1===panel.currNo&&touchDirection===conf.dirData[0])&&(currPos<0||currPos>max))return false}return isMovable},
_triggerEvent:function(name,param){var conf=this._conf;var panel=conf.panel;if(name===EVENTS.flickEnd){panel.currNo=panel.no;panel.currIndex=panel.index}return this.trigger(conf.eventPrefix+name,$.extend({eventType:name,
index:panel.currIndex,no:panel.currNo,direction:conf.touch.direction},param))},
_getElement:function(direction,element,physical){var panel=this._conf.panel;var circular=this.options.circular;var pos=panel.currIndex;var next=direction===this._conf.dirData[0];var result=null;var total;
var index;var currentIndex;if(physical){total=panel.count;index=pos}else{total=panel.origCount;index=panel.currNo}currentIndex=index;if(next)if(index<total-1)index++;else{if(circular)index=0}else if(index>
0)index--;else if(circular)index=total-1;if(currentIndex!==index)result=element?$(panel.$list[next?pos+1:pos-1]):index;return result},
_setValueToMove:function(next){var conf=this._conf;conf.touch.distance=this.options.threshold+1;conf.touch.direction=conf.dirData[+!next]},
_getNumValue:function(val,defVal){return isNaN(val=parseInt(val,10))?defVal:val},
getIndex:function(physical){return this._conf.panel[physical?"currIndex":"currNo"]},
getElement:function(){var panel=this._conf.panel;return $(panel.$list[panel.currIndex])},
getNextElement:function(){return this._getElement(this._conf.dirData[0],true)},
getNextIndex:function(physical){return this._getElement(this._conf.dirData[0],false,physical)},
getAllElements:function(){return this._conf.panel.$list},
getPrevElement:function(){return this._getElement(this._conf.dirData[1],true)},
getPrevIndex:function(physical){return this._getElement(this._conf.dirData[1],false,physical)},
getTotalCount:function(physical){return this._conf.panel[physical?"count":"origCount"]},
isPlaying:function(){return this._conf.panel.animating},
_movePanel:function(next,duration){var conf=this._conf;var panel=conf.panel;var options=this.options;if(panel.animating||conf.touch.holding)return;this._setValueToMove(next);if(options.circular||this[next?
"getNextIndex":"getPrevIndex"]()!=null)this._movePanelByPhase("setBy",[panel.size*(next?1:-1),0],duration);return this},
_movePanelByPhase:function(method,coords,duration){duration=this._getNumValue(duration,this.options.duration);if(this._setPhaseValue("start")!==false){this._setMovableCoord(method,coords,true,duration);
!duration&&this._setPhaseValue("end")}},
next:function(duration){return this._movePanel(true,duration)},
prev:function(duration){return this._movePanel(false,duration)},
moveTo:function(no,duration){var conf=this._conf;var panel=conf.panel;var circular=this.options.circular;var currentIndex=panel.index;var indexToMove;var isPositive;no=this._getNumValue(no,-1);if(no<0||
no>=panel.origCount||no===panel.no||panel.animating||conf.touch.holding)return this;indexToMove=no-(circular?panel.no:currentIndex);isPositive=indexToMove>0;if(circular&&Math.abs(indexToMove)>(isPositive?
panel.count-(currentIndex+1):currentIndex)){indexToMove=indexToMove+(isPositive?-1:1)*panel.count;isPositive=indexToMove>0}this._setPanelNo(circular?{no:no}:{no:no,index:no});this._conf.indexToMove=indexToMove;
this._setValueToMove(isPositive);this._movePanelByPhase(circular?"setBy":"setTo",[panel.size*(circular?indexToMove:no),0],duration);return this},
_checkPadding:function(){var options=this.options;var previewPadding=options.previewPadding.concat();var padding=this.$wrapper.css("padding").split(" ");options.horizontal&&padding.reverse();padding=padding.length===
2?[padding[0],padding[0]]:[padding[0],padding[2]];padding=$.map(padding,function(num){return parseInt(num,10)});
if(previewPadding.length===2&&previewPadding[0]!==padding[0]||previewPadding[1]!==padding[1])this._setPadding(previewPadding)},
resize:function(){var conf=this._conf;var options=this.options;var panel=conf.panel;var horizontal=options.horizontal;var panelSize;var maxCoords;if(~~options.previewPadding.join("")){this._checkPadding();
panelSize=panel.size}else if(horizontal)panelSize=panel.size=this.$wrapper.width();maxCoords=this._getDataByDirection([panelSize*(panel.count-1),0]);horizontal&&this.$container.width(maxCoords[0]+panelSize);
panel.$list.css(horizontal?"width":"height",panelSize);if(options.adaptiveHeight){var $panel=this.$container.find("["+DATA_HEIGHT+"]");$panel.size()&&$panel.attr(DATA_HEIGHT,null)&&this._setAdaptiveHeight()}this._mcInst.options.max=
maxCoords;this._setMovableCoord("setTo",[panelSize*panel.index,0],true,0);if(IS_ANDROID2){this._applyPanelsPos();this._adjustContainerCss("end")}return this},
restore:function(duration){var conf=this._conf;var panel=conf.panel;var currPos=this._getDataByDirection(this._mcInst.get());var destPos;if(currPos[0]!==panel.currIndex*panel.size){conf.customEvent.restoreCall=
true;duration=this._getNumValue(duration,this.options.duration);this._revertPanelNo();destPos=this._getDataByDirection([panel.size*panel.index,0]);this._triggerBeforeRestore({depaPos:currPos,destPos:destPos});
this._setMovableCoord("setTo",destPos,true,duration);if(!duration){this._adjustContainerCss("end");this._triggerRestore()}}else if(panel.changed){this._revertPanelNo();conf.touch.distance=conf.indexToMove=
0}return this},
enableInput:function(){this._mcInst.enableInput();return this},
disableInput:function(){this._mcInst.disableInput();return this},
destroy:function(){var conf=this._conf;var origPanelStyle=conf.origPanelStyle;var wrapper=origPanelStyle.wrapper;var list=origPanelStyle.list;this.$wrapper.attr("class",wrapper.className).attr("style",
wrapper.style);this.$container.children().unwrap().each(function(i,v){var $el=$(v);if(i>list.length-1)return!!$el.remove();$el.attr("class",list[i].className).attr("style",list[i].style)});
this._bindEvents(false);this.off();for(var x in this)this[x]=null}})});
eg.module("infiniteGrid",["jQuery",eg,window,document],function($,ns,global,doc){var EVENTS={"layoutComplete":"layoutComplete","append":"append","prepend":"prepend"};var RETRY=3;ns.InfiniteGrid=ns.Class.extend(ns.Component,
{_events:function(){return EVENTS},
construct:function(el,options,_prefix){var ua=global.navigator.userAgent;this.options=$.extend({isEqualSize:false,defaultGroupKey:null,count:30,threshold:300},options);this.$el=el instanceof $?el:$(el);
this.el=this.$el.get(0);this.el.style.position="relative";this._prefix=_prefix||"";this._isIos=/iPhone|iPad/.test(ua);this._isIE=/MSIE|Trident|Windows Phone|Edge/.test(ua);this._appendCols=this._prependCols=
[];this.$view=$(global);this._reset();this._refreshViewport();if(this.el.children.length>0)this.layout(true,this._itemize($.makeArray(this.el.children),this.options.defaultGroupKey));this._onScroll=$.proxy(this._onScroll,
this);this._onResize=$.proxy(this._onResize,this);this.$view.on("scroll",this._onScroll).on("resize",this._onResize)},
_getScrollTop:function(){return doc.body.scrollTop||doc.documentElement.scrollTop},
_onScroll:function(){if(this.isProcessing())return;var scrollTop=this._getScrollTop();var prevScrollTop=this._prevScrollTop;if(this._isIos&&scrollTop===0||prevScrollTop===scrollTop)return;var ele;var rect;
if(prevScrollTop<scrollTop){if($.isEmptyObject(this._bottomElement)){this._bottomElement=this.getBottomElement();if(this._bottomElement==null)return}ele=this._bottomElement;rect=ele.getBoundingClientRect();
if(rect.top<=this._clientHeight+this.options.threshold)this.trigger(this._prefix+EVENTS.append,{scrollTop:scrollTop})}else{if($.isEmptyObject(this._topElement)){this._topElement=this.getTopElement();if(this._topElement==
null)return}ele=this._topElement;rect=ele.getBoundingClientRect();if(rect.bottom>=-this.options.threshold){var croppedDistance=this.fit();if(croppedDistance>0){scrollTop-=croppedDistance;this.$view.scrollTop(scrollTop)}this.trigger(this._prefix+
EVENTS.prepend,{scrollTop:scrollTop})}}this._prevScrollTop=scrollTop},
_onResize:function(){if(this._resizeTimeout)clearTimeout(this._resizeTimeout);var self=this;this._resizeTimeout=setTimeout(function(){self._refreshViewport();self.$el.innerWidth()!==self._containerWidth&&
self.layout(true);self._resizeTimeout=null;self._prevScrollTop=-1},100)},
_refreshViewport:function(){var el=this.$view.get(0);if(el)this._clientHeight=$.isWindow(el)?el.innerHeight||document.documentElement.clientHeight:el.clientHeight},
getStatus:function(){var data={};var p;for(p in this)if(this.hasOwnProperty(p)&&/^_/.test(p)&&typeof this[p]!=="function"&&!(this[p]instanceof Element))data[p]=this[p];return{prop:data,options:$.extend({},
this.options),items:$.map(this.items,function(v){var clone=$.extend({},v);delete clone.el;return clone}),
html:this.el.innerHTML,cssText:this.el.style.cssText}},
setStatus:function(status){if(!status||!status.cssText||!status.html||!status.prop||!status.items)return this;this.el.style.cssText=status.cssText;this.el.innerHTML=status.html;$.extend(this,status.prop);
this._topElement=this._bottomElement=null;this.items=$.map(this.el.children,function(v,i){status.items[i].el=v;return status.items[i]});
return this},
isProcessing:function(){return this._isProcessing},
isRecycling:function(){return this.options.count>0&&this._isRecycling},
getGroupKeys:function(){return $.map(this.items,function(v){return v.groupKey})},
layout:function(isRelayout,_addItems,_options){var options=$.extend({isAppend:true,removedCount:0},_options);isRelayout=typeof isRelayout==="undefined"||isRelayout;if(!_addItems&&!options.isAppend)options.isAppend=
true;this._waitResource(isRelayout,options.isAppend?_addItems:_addItems.reverse(),options);return this},
_layoutComplete:function(isRelayout,addItems,options){var isInit=!this.items.length;if(addItems&&options.isAppend)this.items=this.items.concat(addItems);if(isInit)$.each(addItems,function(i,v){v.el.style.position=
"absolute"});
if(isInit||isRelayout)this._resetCols(this._measureColumns());else if(!addItems)this._appendCols=this._prependCols.concat();this._layoutItems(isRelayout,addItems,options);this._postLayout(isRelayout,addItems,
options)},
_layoutItems:function(isRelayout,addItems,options){var self=this;var items=addItems||this.items;$.each(items,function(i,v){v.position=self._getItemLayoutPosition(isRelayout,v,options.isAppend)});
if(addItems&&!options.isAppend){this.items=addItems.sort(function(p,c){return p.position.y-c.position.y}).concat(this.items);
var y=this._getTopPositonY();if(y!==0){items=this.items;$.each(items,function(i,v){v.position.y-=y});
this._syncCols(false);this._syncCols(true)}}$.each(items,function(i,v){if(v.el){var style=v.el.style;style.left=v.position.x+"px";style.top=v.position.y+"px"}})},
append:function($elements,groupKey){if(this._isProcessing||$elements.length===0)return;$elements=$($elements);this._insert($elements,groupKey,true);return $elements.length},
prepend:function($elements,groupKey){if(this._isProcessing||$elements.length===0)return;$elements=$($elements);this._insert($elements,groupKey,false);return $elements.length},
clear:function(){this.el.innerHTML="";this.el.style.height="";this._reset();return this},
getTopElement:function(){var item=this._getTopItem();return item&&item.el},
_getTopItem:function(){var item=null;var min=Infinity;$.each(this._getColItems(false),function(i,v){if(v&&v.position.y<min){min=v.position.y;item=v}});
return item},
_getTopPositonY:function(){var item=this._getTopItem();return item?item.position.y:0},
getBottomElement:function(){var item=null;var max=-Infinity;var pos;$.each(this._getColItems(true),function(i,v){pos=v?v.position.y+v.size.height:0;if(pos>=max){max=pos;item=v}});
return item&&item.el},
_postLayout:function(isRelayout,addItems,options){if(!this._isProcessing)return;addItems=addItems||[];this.el.style.height=this._getContainerSize().height+"px";this._doubleCheckCount=RETRY;this._topElement=
this.getTopElement();this._bottomElement=this.getBottomElement();var distance=0;if(!options.isAppend){distance=addItems.length>=this.items.length?0:this.items[addItems.length].position.y;if(distance>0){this._prevScrollTop=
this._getScrollTop()+distance;this.$view.scrollTop(this._prevScrollTop)}}this._isProcessing=false;this.trigger(this._prefix+EVENTS.layoutComplete,{target:addItems.concat(),isAppend:options.isAppend,distance:distance,
croppedCount:options.removedCount});if(!options.isAppend)if(this._getScrollTop()===0){var self=this;clearInterval(this._doubleCheckTimer);this._doubleCheckTimer=setInterval(function(){if(self._getScrollTop()===
0){self.trigger(self._prefix+EVENTS.prepend,{scrollTop:0});--self._doubleCheckCount<=0&&clearInterval(self._doubleCheckTimer)}},500)}},
_insert:function($elements,groupKey,isAppend){this._isProcessing=true;if(!this.isRecycling())this._isRecycling=this.items.length+$elements.length>=this.options.count;if($elements.length===0)return;var elements=
$elements.toArray();var $cloneElements=$(elements);var dummy=-this._clientHeight+"px";$.each(elements,function(i,v){v.style.position="absolute";v.style.top=dummy});
var removedCount=this._adjustRange(isAppend,$cloneElements);this.$el[isAppend?"append":"prepend"]($cloneElements);this.layout(false,this._itemize($cloneElements,groupKey),{isAppend:isAppend,removedCount:removedCount})},
_waitResource:function(isRelayout,addItems,options){this._isProcessing=true;var needCheck=this._checkImageLoaded();var self=this;var callback=function(){self._layoutComplete(isRelayout,addItems,options)};
if(needCheck.length>0)this._waitImageLoaded(needCheck,callback);else setTimeout(function(){callback&&callback()},0)},
_adjustRange:function(isTop,$elements){var removedCount=0;if(!this.isRecycling())return removedCount;if(this.options.count<=$elements.length)removedCount+=isTop?$elements.splice(0,$elements.length-this.options.count).length:
$elements.splice(this.options.count).length;var diff=this.items.length+$elements.length-this.options.count;var targets;var idx;if(diff<=0||(idx=this._getDelimiterIndex(isTop,diff))<0)return removedCount;
if(isTop){targets=this.items.splice(0,idx);this._syncCols(false)}else{targets=idx===this.items.length?this.items.splice(0):this.items.splice(idx,this.items.length-idx);this._syncCols(true)}$.each(targets,
function(i,v){idx=$elements.index(v.el);if(idx!==-1)$elements.splice(idx,1);else v.el.parentNode.removeChild(v.el)});
removedCount+=targets.length;return removedCount},
_getDelimiterIndex:function(isTop,removeCount){var len=this.items.length;if(len===removeCount)return len;var i;var idx=0;var baseIdx=isTop?removeCount-1:len-removeCount;var targetIdx=baseIdx+(isTop?1:-1);
var groupKey=this.items[baseIdx].groupKey;if(groupKey!=null&&groupKey===this.items[targetIdx].groupKey)if(isTop){for(i=baseIdx;i>0;i--)if(groupKey!==this.items[i].groupKey)break;idx=i===0?-1:i+1}else{for(i=
baseIdx;i<len;i++)if(groupKey!==this.items[i].groupKey)break;idx=i===len?-1:i}else idx=isTop?targetIdx:baseIdx;return idx},
_fit:function(applyDom){if(this.options.count<=0){this._fit=function(){return 0};
return 0}var y=this._getTopPositonY();if(y!==0){$.each(this.items,function(i,v){v.position.y-=y;applyDom&&(v.el.style.top=v.position.y+"px")});
this._syncCols(false);this._syncCols(true);applyDom&&(this.el.style.height=this._getContainerSize().height+"px")}return y},
fit:function(){return this._fit(true)},
_reset:function(){this._isProcessing=false;this._topElement=null;this._bottomElement=null;this._isRecycling=false;this._prevScrollTop=0;this._equalItemSize=0;this._resizeTimeout=null;this._doubleCheckTimer=
null;this._doubleCheckCount=RETRY;this._resetCols(this._appendCols.length||0);this.items=[]},
_checkImageLoaded:function(){return this.$el.find("img").filter(function(k,v){if(v.nodeType&&$.inArray(v.nodeType,[1,9,11])!==-1)return!v.complete}).toArray()},
_waitImageLoaded:function(needCheck,callback){var checkCount=needCheck.length;var onCheck=function(e){checkCount--;$(e.target).off("load error");checkCount<=0&&callback&&callback()};
var $el;var self=this;$.each(needCheck,function(i,v){$el=$(v);if(self._isIE){var url=v.getAttribute("src");v.setAttribute("src","");v.setAttribute("src",url)}$el.on("load error",onCheck)})},
_measureColumns:function(){this.el.style.width=null;this._containerWidth=this.$el.innerWidth();this._columnWidth=this._getColumnWidth()||this._containerWidth;var cols=this._containerWidth/this._columnWidth;
var excess=this._columnWidth-this._containerWidth%this._columnWidth;cols=Math.max(Math[excess&&excess<=1?"round":"floor"](cols),1);return cols||0},
_resetCols:function(count){count=typeof count==="undefined"?0:count;var arr=[];while(count--)arr.push(0);this._appendCols=arr.concat();this._prependCols=arr.concat()},
_getContainerSize:function(){return{height:Math.max.apply(Math,this._appendCols),width:this._containerWidth}},
_getColumnWidth:function(){var el=this.items[0]&&this.items[0].el;var width=0;if(el){var $el=$(el);width=$el.innerWidth();if(this.options.isEqualSize)this._equalItemSize={width:width,height:$el.innerHeight()}}return width},
_syncCols:function(isBottom){if(!this.items.length)return;var items=this._getColItems(isBottom);var col=isBottom?this._appendCols:this._prependCols;var len=col.length;var i;for(i=0;i<len;i++)col[i]=items[i].position.y+
(isBottom?items[i].size.height:0)},
_getColIdx:function(item){return parseInt(item.position.x/parseInt(this._columnWidth,10),10)},
_getColItems:function(isBottom){var len=this._appendCols.length;var colItems=new Array(len);var item;var idx;var count=0;var i=isBottom?this.items.length-1:0;while(item=this.items[i]){idx=this._getColIdx(item);
if(!colItems[idx]){colItems[idx]=item;if(++count===len)return colItems}i+=isBottom?-1:1}return colItems},
_itemize:function(elements,groupKey){return $.map(elements,function(v){return{el:v,position:{x:0,y:0},groupKey:typeof groupKey==="undefined"?null:groupKey}})},
_getItemLayoutPosition:function(isRelayout,item,isAppend){if(!item||!item.el)return;var $el=$(item.el);if(isRelayout||!item.size)item.size=this._getItemSize($el);var cols=isAppend?this._appendCols:this._prependCols;
var y=Math[isAppend?"min":"max"].apply(Math,cols);var shortColIndex;if(isAppend)shortColIndex=$.inArray(y,cols);else{var i=cols.length;while(i-- >=0)if(cols[i]===y){shortColIndex=i;break}}cols[shortColIndex]=
y+(isAppend?item.size.height:-item.size.height);return{x:this._columnWidth*shortColIndex,y:isAppend?y:y-item.size.height}},
_getItemSize:function($el){return this._equalItemSize||{width:$el.innerWidth(),height:$el.innerHeight()}},
remove:function(element){var item=null;var idx=-1;for(var i=0,len=this.items.length;i<len;i++)if(this.items[i].el===element){idx=i;break}if(~idx){item=$.extend({},this.items[idx]);this.items.splice(idx,
1);item.el.parentNode.removeChild(item.el)}return item},
destroy:function(){this.off();this.$view.off("resize",this._onResize).off("scroll",this._onScroll);this._reset()}})});
var Cookie=function(){};
Cookie.prototype.read=function(cName){var cStr=cName+"\x3d";var ca=document.cookie.split(";");var cStrLen=cStr.length;for(var i=0;i<ca.length;i++){var c=ca[i];var cl=c.length;while(c.charAt(0)==" ")c=c.substring(1,
cl);if(c.indexOf(cStr)==0)return c.substring(cStrLen,cl)}};
Cookie.prototype.create=function(cName,cValue,cDays){var dayOfTime=24*60*60*1E3;var expires="";var cStr="";if(cDays){var date=new Date;date.setTime(date.getTime()+cDays*dayOfTime);expires="; expires\x3d"+
date.toGMTString()}cStr=cName+"\x3d"+cValue+expires+"; path\x3d/";document.cookie=cStr};
Cookie.prototype.erase=function(cName){if(typeof cName!="undefined")this.create(cName,"",-1)};
var cookie=new Cookie;
(function(){var doT={version:"1.0.3",templateSettings:{evaluate:/\{\{([\s\S]+?(\}?)+)\}\}/g,interpolate:/\{\{=([\s\S]+?)\}\}/g,encode:/\{\{!([\s\S]+?)\}\}/g,use:/\{\{#([\s\S]+?)\}\}/g,useParams:/(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,
define:/\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,defineParams:/^\s*([\w$]+):([\s\S]+)/,conditional:/\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,iterate:/\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,
varname:"it",strip:false,append:true,selfcontained:false,doNotSkipEncoded:false},template:undefined,compile:undefined},_globals;doT.encodeHTMLSource=function(doNotSkipEncoded){var encodeHTMLRules={"\x26":"\x26#38;",
"\x3c":"\x26#60;","\x3e":"\x26#62;",'"':"\x26#34;","'":"\x26#39;","/":"\x26#47;"},matchHTML=doNotSkipEncoded?/[&<>"'\/]/g:/&(?!#?\w+;)|<|>|"|'|\//g;return function(code){return code?code.toString().replace(matchHTML,
function(m){return encodeHTMLRules[m]||m}):""}};
doT.convertEmptyValue=function(value){if(!value&&value!==0)return"";return value};
_globals=function(){return this||(0,eval)("this")}();
if(typeof module!=="undefined"&&module.exports)module.exports=doT;else if(typeof define==="function"&&define.amd)define(function(){return doT});
else _globals.doT=doT;var startend={append:{start:"'+doT.convertEmptyValue(",end:")+'",startencode:"'+encodeHTML("},split:{start:"';out+\x3ddoT.convertEmptyValue(",end:");out+\x3d'",startencode:"';out+\x3dencodeHTML("}},
skip=/$^/;function resolveDefs(c,block,def){return(typeof block==="string"?block:block.toString()).replace(c.define||skip,function(m,code,assign,value){if(code.indexOf("def.")===0)code=code.substring(4);
if(!(code in def))if(assign===":"){if(c.defineParams)value.replace(c.defineParams,function(m,param,v){def[code]={arg:param,text:v}});
if(!(code in def))def[code]=value}else(new Function("def","def['"+code+"']\x3d"+value))(def);return""}).replace(c.use||skip,function(m,code){if(c.useParams)code=code.replace(c.useParams,function(m,s,d,
param){if(def[d]&&def[d].arg&&param){var rw=(d+":"+param).replace(/'|\\/g,"_");
def.__exp=def.__exp||{};def.__exp[rw]=def[d].text.replace(new RegExp("(^|[^\\w$])"+def[d].arg+"([^\\w$])","g"),"$1"+param+"$2");return s+"def.__exp['"+rw+"']"}});
var v=(new Function("def","return "+code))(def);return v?resolveDefs(c,v,def):v})}
function unescape(code){return code.replace(/\\('|\\)/g,"$1").replace(/[\r\t\n]/g," ")}
doT.template=function(tmpl,c,def){c=c||doT.templateSettings;var cse=c.append?startend.append:startend.split,needhtmlencode,sid=0,indv,str=c.use||c.define?resolveDefs(c,tmpl,def||{}):tmpl;str=("var out\x3d'"+
(c.strip?str.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g," ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g,""):str).replace(/'|\\/g,"\\$\x26").replace(c.interpolate||skip,function(m,code){return cse.start+unescape(code)+
cse.end}).replace(c.encode||skip,function(m,code){needhtmlencode=true;
return cse.startencode+unescape(code)+cse.end}).replace(c.conditional||skip,function(m,elsecase,code){return elsecase?code?"';}else if("+unescape(code)+"){out+\x3d'":"';}else{out+\x3d'":code?"';if("+unescape(code)+
"){out+\x3d'":"';}out+\x3d'"}).replace(c.iterate||skip,function(m,iterate,vname,iname){if(!iterate)return"';} } out+\x3d'";
sid+=1;indv=iname||"i"+sid;iterate=unescape(iterate);return"';var arr"+sid+"\x3d"+iterate+";if(arr"+sid+"){var "+vname+","+indv+"\x3d-1,l"+sid+"\x3darr"+sid+".length-1;while("+indv+"\x3cl"+sid+"){"+vname+
"\x3darr"+sid+"["+indv+"+\x3d1];out+\x3d'"}).replace(c.evaluate||skip,function(m,code){return"';"+unescape(code)+"out+\x3d'"})+"';return out;").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/(\s|;|\}|^|\{)out\+='';/g,
"$1").replace(/\+''/g,"");
if(needhtmlencode){if(!c.selfcontained&&_globals&&!_globals._encodeHTML)_globals._encodeHTML=doT.encodeHTMLSource(c.doNotSkipEncoded);str="var encodeHTML \x3d typeof _encodeHTML !\x3d\x3d 'undefined' ? _encodeHTML : ("+
doT.encodeHTMLSource.toString()+"("+(c.doNotSkipEncoded||"")+"));"+str}try{return new Function(c.varname,str)}catch(e){if(typeof console!=="undefined")console.log("Could not create a template function: "+
str);throw e;}};
doT.compile=function(tmpl,def){return doT.template(tmpl,null,def)}})();
(function(nclkExports){var nclk=function(e,a,i,r,opt,g,pid){var m,l,tU,sc;var evt=e;var o=e;if("nodeType"in e&&e.nodeType>=1)evt=window.event||e;else if(e){var target=e.srcElement||e.currentTarget||e.target;
if(target)o=nclk.findLink(target)}if(!g)g="";sc=nclk.gcp(o,evt);tU=nclk.gl(a,i,r,sc,"",0,nclk.st,g,pid);l=nclk.l(o,tU);nclk.sd(l);return true};
var ccsrv=nclkExports.ccsrv||"cc.naver.com";var nsc=nclkExports.nsc||"decide.me";nclk.vs="0.4.1";nclk.md="cc";nclk.pt=window.location.protocol=="https:"?"https:":"http:";nclk.ct=0;nclk.ec=encodeURIComponent;
nclk.st=1;function nclk_proxy(o,a,i,r,opt,g){var g_nclk_proxy=nclkExports.g_nclk_proxy||"";if(g_nclk_proxy&&o.href)o.href=g_nclk_proxy+nclk.ec(o.href);return nclk(o,a,i,r,opt,g)}
function nclk_v2(e,a,i,r,g,pid){var m,l,tU,sc;var evt=e;var o=e;if("nodeType"in e&&e.nodeType>=1)evt=window.event||e;else if(e){var target=e.srcElement||e.currentTarget||e.target;if(target)o=nclk.findLink(target)}if(!g)g=
"";sc=nclk.gcp(o,evt);tU=nclk.gl(a,i,r,sc,"",0,nclk.st,g,pid);l=nclk.l(o,tU);nclk.sd(l);return true}
nclk.findLink=function(_el){var el=_el;while(el&&el.tagName!=="BODY"&&el.tagName!=="HTML"){if(el.tagName==="A")break;el=el.parentNode}if(el.tagName!=="A")el=_el;return el};
nclk.l=function(o,tU){var l,tN,tH;if(o&&o.href){tN=o.tagName.toLowerCase();tH=o.href.toLowerCase();if(tH&&tH.indexOf(nclk.pt+"//"+ccsrv)==0)l=o.href;else if(tH&&tH.indexOf(nclk.pt+"//"+ccsrv)!=0&&tN&&tN!=
"img")l=tU+"\x26u\x3d"+nclk.ec(o.href);return l}return tU+"\x26u\x3dabout%3Ablank"};
nclk.sd=function(l,func){var f=0;var timer;if(nclk.ct>0){var t=(new Date).getTime();l+="\x26nt\x3d"+t}if(typeof func=="function")f=1;var o=new Image;o.src=l;o.onload=function(){if(timer)clearTimeout(timer);
if(f)func();o.onload=null;return};
o.onerror=function(){if(timer)clearTimeout(timer);if(f)func();o.onerror=null;return};
if(f)timer=setTimeout(function(){func()},5E3);
nclk.ct++};
nclk.gl=function(a,i,r,sc,u,m,s,g,pid){var g_ssc=nclkExports.g_ssc||"";var g_query=nclkExports.g_query||"";var lcs_get_lpid=nclkExports.lcs_get_lpid||null;var g_pid=nclkExports.g_pid||"";var g_sid=nclkExports.g_sid||
"";if(m==undefined)m=1;if(s==undefined)s=1;var l=nclk.pt+"//"+ccsrv+"/"+nclk.md+"?a\x3d"+a+"\x26r\x3d"+r+"\x26i\x3d"+i+"\x26m\x3d"+m;if(s==1){if(g_ssc)l+="\x26ssc\x3d"+g_ssc;if(g_query)l+="\x26q\x3d"+nclk.ec(g_query);
if(g_sid)l+="\x26s\x3d"+g_sid;if(pid)l+="\x26p\x3d"+pid;else if(g_pid)l+="\x26p\x3d"+g_pid;else if(lcs_get_lpid)l+="\x26p\x3d"+lcs_get_lpid();else console.warn("'g_pid / lcs_get_lpid' is not exist.")}else{l+=
"\x26nsc\x3d"+nsc;console.warn("[DEPRECATED] NSC mode")}if(g)l+="\x26g\x3d"+g;if(u)l+="\x26u\x3d"+nclk.ec(u);if(sc)l+=sc;return l};
nclk.al=function(sType,fn){var w=window;if(w.addEventListener)w.addEventListener(sType,fn,false);else if(w.attachEvent)w.attachEvent("on"+sType,fn)};
nclk.oo="";nclk.of="";if("onpageshow"in window)nclk.al("pageshow",function(){nclk.oo.onclick=nclk.of});
nclk.go=function(o){var cevt;var old=o.onclick;o.onclick="";nclk.oo=o;nclk.of=old;if(document.createEvent){cevt=document.createEvent("MouseEvents");cevt.initMouseEvent("click",false,false,window,0,0,0,
0,0,false,false,false,false,0,null);o.dispatchEvent(cevt)}else if(document.createEventObject)o.fireEvent("onclick");else if(MouseEvent){cevt=new MouseEvent("click",{"bubbles":false,"cancelable":false,"view":window});
o.dispatchEvent(cevt)}o.onclick=old};
nclk.gsbw=function(){var inner=document.createElement("p");inner.style.width="200px";inner.style.height="200px";var outer=document.createElement("div");outer.style.position="absolute";outer.style.top="0px";
outer.style.left="0px";outer.style.visibility="hidden";outer.style.width="200px";outer.style.height="150px";outer.style.overflow="hidden";outer.appendChild(inner);document.body.appendChild(outer);var w1=
inner.offsetWidth;outer.style.overflow="scroll";var w2=inner.offsetWidth;if(w1==w2)w2=outer.clientWidth;document.body.removeChild(outer);return w1-w2};
nclk.fp=function(obj){var curleft=curtop=0;try{if(obj.offsetParent){do{curleft+=obj.offsetLeft;curtop+=obj.offsetTop}while(obj=obj.offsetParent)}else if(obj.x||obj.y){if(obj.x)curleft+=obj.x;if(obj.y)curtop+=
obj.y}}catch(e){}return[curleft,curtop]};
nclk.ws=function(win){if(!win)win=window;var winWidth=0;if(win.innerWidth){winWidth=win.innerWidth;if(typeof win.innerWidth=="number"){var scrollbarWidth=nclk.gsbw();winWidth=win.innerWidth-scrollbarWidth}}else if(document.documentElement&&
document.documentElement.clientWidth)winWidth=document.documentElement.clientWidth;else if(document.body&&(document.body.clientWidth||document.body.clientHeight))winWidth=document.body.clientWidth;return winWidth};
nclk.ci=function(obj){var oriURL=document.URL;var p=obj.parentNode;var docObj;var ifrId;var l;if(p==null||p==undefined)return false;while(1)if(p.nodeName.toLowerCase()=="#document"){if(p.parentWindow)docObj=
p.parentWindow;else docObj=p.defaultView;try{if(docObj.frameElement!=null&&docObj.frameElement!=undefined)if(docObj.frameElement.nodeName.toLowerCase()=="iframe"){ifrId=docObj.frameElement.id;if(!ifrId)return false;
return ifrId}else return false;else return false}catch(e){return false}}else{p=p.parentNode;if(p==null||p==undefined)return false}};
nclk.gcp=function(obj,e){var sx=-1;var sy=-1;var px=-1;var py=-1;var dBody,dElement,ifrId;var l="";var theEvent=window.event?window.event:obj;if(e)theEvent=e||window.event;try{bw=nclk.ws(window);ifrId=
nclk.ci(obj);if(ifrId){var ifrOffset=nclk.fp(document.getElementById(ifrId));if(theEvent.clientX&&theEvent.clientX!=undefined){dBody=document.body;if(dBody.clientLeft&&dBody.clientTop){ifrSx=theEvent.clientX-
dBody.clientLeft;ifrSy=theEvent.clientY-dBody.clientTop}else{ifrSx=theEvent.clientX;ifrSy=theEvent.clientY}}px=ifrOffset[0]+ifrSx;py=ifrOffset[1]+ifrSy;if(document.body&&(document.body.scrollTop||document.body.scrollLeft)){dBody=
document.body;sx=px-dBody.scrollLeft;sy=py-dBody.scrollTop}else if(document.documentElement&&(document.documentElement.scrollTop||document.documentElement.scrollLeft)){dElement=document.documentElement;
sx=px-dElement.scrollLeft;sy=py-dElement.scrollTop}else{sx=px;sy=py}}else{if(theEvent.clientX&&theEvent.clientX!=undefined){dBody=document.body;if(dBody.clientLeft&&dBody.clientTop){sx=theEvent.clientX-
dBody.clientLeft;sy=theEvent.clientY-dBody.clientTop}else{sx=theEvent.clientX;sy=theEvent.clientY}}if(document.body&&(document.body.scrollTop||document.body.scrollLeft)){px=document.body.scrollLeft+(sx<
0?0:sx);py=document.body.scrollTop+(sy<0?0:sy)}else if(document.documentElement&&(document.documentElement.scrollTop||document.documentElement.scrollLeft)){dElement=document.documentElement;if(dElement.scrollLeft!=
undefined)px=dElement.scrollLeft+(sx<0?0:sx);if(dElement.scrollTop!=undefined)py=dElement.scrollTop+(sy<0?0:sy)}else{px=sx<0?0:sx;py=sy<0?0:sy}if(theEvent.pageX)px=theEvent.pageX;if(theEvent.pageY)py=theEvent.pageY}}catch(e){}if(px!=
-1&&py!=-1)l+="\x26px\x3d"+px+"\x26py\x3d"+py;if(sx!=-1&&sy!=-1)l+="\x26sx\x3d"+sx+"\x26sy\x3d"+sy;return l};
function nclkR(a,i,r,u,g){window.location.href=nclk.gl(a,i,r,u,1,nclk.st,g)}
function nclkF(a,i,r,f,g,u){var u=u||"about:blank";var l=nclk.gl(a,i,r,u,0,nclk.st,g);nclk.sd(l,f)}
nclkExports.nclk_proxy=nclk_proxy;nclkExports.nclk=nclk;nclkExports.nclk_v2=nclk_v2;nclkExports.nclkR=nclkR;nclkExports.nclkF=nclkF})(window);
(function(exportTarget){var lcs_options={nnb:true};var lcs_version="v0.7.0";var lcs_add={};var lcs_bc={};var lcs_perf={};var lcs_do_count=0;var lcs_waiting_pageshow=false;function lcs_do(etc){if(lcs_waiting_pageshow)return;
if(document.readyState!=="complete"){var eventName="onpageshow"in window?"pageshow":"load";var retry=function(__etc){return function(){window.setTimeout(function(){lcs_waiting_pageshow=false;lcs_do(__etc)},
10)}}(etc);
if(document.addEventListener)window.addEventListener(eventName,retry,false);else window.attachEvent("on"+eventName,retry);lcs_waiting_pageshow=true;return}if(!window.lcs_SerName)window.lcs_SerName="lcs.naver.com";
var rs="";var index;var itarVal;var doc=document;var wlt=window.location;var lcsServerAddr;try{lcsServerAddr=(wlt.protocol?wlt.protocol:"http:")+"//"+window.lcs_SerName+"/m?"}catch(e){return}try{rs=lcsServerAddr+
"u\x3d"+encodeURIComponent(wlt.href)+"\x26e\x3d"+(doc.referrer?encodeURIComponent(doc.referrer):"")}catch(e){}try{if(typeof lcs_add.i=="undefined")lcs_add.i="";if(lcs_do_count<1){lcs_setBrowserCapa();if(lcs_options.nnb)lcs_setNNB();
lcs_add["ct"]=lcs_getConnectType();lcs_setNavigationTiming();lcs_setPaintTiming();lcs_setNavigationType()}for(index in lcs_bc)if(typeof lcs_bc[index]!=="function")rs+="\x26"+index+"\x3d"+encodeURIComponent(lcs_bc[index]);
for(index in lcs_add){itarVal=lcs_add[index];if(itarVal!==undefined&&typeof itarVal!=="function")rs+="\x26"+index+"\x3d"+encodeURIComponent(itarVal)}if(lcs_do_count<1)for(index in lcs_perf){itarVal=lcs_perf[index];
if(itarVal)rs+="\x26"+index+"\x3d"+encodeURIComponent(itarVal)}for(index in etc)if(index.length>=3&&typeof etc[index]!=="function"||index==="qy")rs+="\x26"+index+"\x3d"+encodeURIComponent(etc[index]);if(!!etc===
false||!!etc.pid===false){var pidFallback;if(window.g_pid)pidFallback=g_pid;else pidFallback=lcs_get_lpid();rs+="\x26pid\x3d"+encodeURIComponent(pidFallback)}var timeStr=(new Date).getTime();rs+="\x26ts\x3d"+
timeStr;rs+="\x26EOU";var obj=document.createElement("img");obj.src=rs;obj.onload=function(){obj.onload=null;return};
lcs_do_count++}catch(e){return}}
function lcs_do_gdid(gdid,etc){try{if(gdid){lcs_add["i"]=gdid;if(etc)lcs_do(etc);else lcs_do()}}catch(e){}}
function lcs_setNNB(){try{var lsg=localStorage;if(lsg){if(lsg.ls){var lc=lsg.ls;if(lc.length==13){lcs_add["ls"]=lc;return}}var nnb=lcs_getNNBfromCookie();if(nnb!=null&&nnb!=""){lsg.ls=nnb;lcs_add["ls"]=
nnb}}}catch(e){}}
function lcs_setBrowserCapa(){lcs_bc["os"]=lcs_getOS();lcs_bc["ln"]=lcs_getlanguage();lcs_bc["sr"]=lcs_getScreen();lcs_bc["pr"]=window.devicePixelRatio||1;var windowSize=lcs_getWindowSize();lcs_bc["bw"]=
windowSize["bw"];lcs_bc["bh"]=windowSize["bh"];lcs_bc["c"]=lcs_getColorDepth();lcs_bc["j"]=lcs_getJavaEnabled();lcs_bc["k"]=lcs_getCookieEnabled()}
function lcs_getOS(){var lcs_os="";try{navigator.platform?lcs_os=navigator.platform:""}catch(e){}return lcs_os}
function lcs_getlanguage(){var lcs_ln="";try{navigator.userLanguage?lcs_ln=navigator.userLanguage:navigator.language?lcs_ln=navigator.language:""}catch(e){}return lcs_ln}
function lcs_getScreen(){var lcs_sr="";try{if(window.screen&&screen.width&&screen.height)lcs_sr=screen.width+"x"+screen.height;else if(window.java||self.java){var sr=java.awt.Toolkit.getDefaultToolkit().getScreenSize();
lcs_sr=sr.width+"x"+sr.height}}catch(e){lcs_sr=""}return lcs_sr}
function lcs_getWindowSize(){var doc=document;var size={bw:"",bh:""};try{size["bw"]=doc.documentElement.clientWidth?doc.documentElement.clientWidth:doc.body.clientWidth;size["bh"]=doc.documentElement.clientHeight?
doc.documentElement.clientHeight:doc.body.clientHeight}catch(e){}return size}
function lcs_getColorDepth(){var colorDepth="";try{if(window.screen)colorDepth=screen.colorDepth?screen.colorDepth:screen.pixelDepth;else if(window.java||self.java){var c=java.awt.Toolkit.getDefaultToolkit().getColorModel().getPixelSize();
colorDepth=c}}catch(e){colorDepth=""}return colorDepth}
function lcs_getJavaEnabled(){var jsEnable="";try{jsEnable=navigator.javaEnabled()?"Y":"N"}catch(e){}return jsEnable}
function lcs_getCookieEnabled(){var cookieEnable="";try{cookieEnable=navigator.cookieEnabled?"Y":"N"}catch(e){}return cookieEnable}
function lcs_getNNBfromCookie(){try{var ck=document.cookie;var k,v,i,ArrCookies=ck.split(";");for(i=0;i<ArrCookies.length;i++){k=ArrCookies[i].substr(0,ArrCookies[i].indexOf("\x3d"));v=ArrCookies[i].substr(ArrCookies[i].indexOf("\x3d")+
1);k=k.replace(/^\s+|\s+$/g,"");if(k=="NNB")return unescape(v)}}catch(e){}}
function lcs_getConnectType(){var ct="";try{var conn=navigator.connection||navigator.mozConnection||navigator.webkitConnection;if(conn&&typeof conn.type!="undefined")switch(conn.type){case conn.CELL_2G:ct=
"2g";break;case conn.CELL_3G:ct="3g";break;case conn.CELL_4G:ct="4g";break;case conn.WIFI:ct="wifi";break;case conn.ETHERNET:ct="eth";break;case conn.UNKNOWN:ct="unknown";break;case conn.NONE:ct="none";
break;default:ct=""}else if(typeof blackberry!="undefined"&&typeof blackberry.network!="undefined"){var bnet=blackberry.network;if(bnet=="Wi-Fi")ct="wifi";else if(bnet=="3G")ct="3g";else ct=bnet}else{var lcs_isie=
navigator.appName=="Microsoft Internet Explorer";var lcs_ismac=navigator.userAgent.indexOf("MAC")>=0;if(lcs_isie&&!lcs_ismac&&bd&&bd.addBehavior){var bd=document.body;var lcs_ct="";var obj=bd.addBehavior("#default#clientCaps");
ct=bd.connectionType;bd.removeBehavior(obj)}}}catch(e){console.warn(e)}return ct}
function lcs_setNavigationTiming(){var performance=window.performance||{};if(performance.timing){var pt=performance.timing;for(var key in pt){var value=pt[key];if(typeof value==="number")lcs_perf[key]=
value}}}
function lcs_setPaintTiming(){var performance=window.performance||{};try{if(performance.getEntriesByType){var performanceEntries=performance.getEntriesByType("paint");performanceEntries.forEach(function(performanceEntry,
i,entries){var name=performanceEntry.name;switch(name){case "first-paint":case "first-contentful-paint":lcs_perf[name]=performanceEntry.startTime;break;default:break}})}else;
}catch(e){console.warn(e)}}
function lcs_setNavigationType(){var ngt=getNavigationType();if(ngt!==undefined)lcs_perf["ngt"]=ngt}
function getNavigationType(){var performance=window.performance||{};if(performance.navigation)return performance.navigation.type;return}
var lpid=null;function lcs_create_lpid(){var uaID;var nnb=localStorage.ls;if(nnb)uaID=nnb;else{var nnbFallback;nnbFallback=navigator.userAgent+Math.random();uaID=nnbFallback}var performance=window.performance||
{};var pageURL=location.href;var currentTime;if(performance.now)currentTime=performance.now();else currentTime=(new Date).getTime();lpid=hashFunction.md5(uaID+pageURL+currentTime);return lpid}
function lcs_get_lpid(){if(lpid===null)lpid=lcs_create_lpid();return lpid}
function lcs_update_lpid(){lpid=lcs_create_lpid();return lpid}
var hashFunction={};(function(exportTarget){function safeAdd(x,y){var lsw=(x&65535)+(y&65535);var msw=(x>>16)+(y>>16)+(lsw>>16);return msw<<16|lsw&65535}
function bitRotateLeft(num,cnt){return num<<cnt|num>>>32-cnt}
function md5cmn(q,a,b,x,s,t){return safeAdd(bitRotateLeft(safeAdd(safeAdd(a,q),safeAdd(x,t)),s),b)}
function md5ff(a,b,c,d,x,s,t){return md5cmn(b&c|~b&d,a,b,x,s,t)}
function md5gg(a,b,c,d,x,s,t){return md5cmn(b&d|c&~d,a,b,x,s,t)}
function md5hh(a,b,c,d,x,s,t){return md5cmn(b^c^d,a,b,x,s,t)}
function md5ii(a,b,c,d,x,s,t){return md5cmn(c^(b|~d),a,b,x,s,t)}
function binlMD5(x,len){x[len>>5]|=128<<len%32;x[(len+64>>>9<<4)+14]=len;var i;var olda;var oldb;var oldc;var oldd;var a=1732584193;var b=-271733879;var c=-1732584194;var d=271733878;for(i=0;i<x.length;i+=
16){olda=a;oldb=b;oldc=c;oldd=d;a=md5ff(a,b,c,d,x[i],7,-680876936);d=md5ff(d,a,b,c,x[i+1],12,-389564586);c=md5ff(c,d,a,b,x[i+2],17,606105819);b=md5ff(b,c,d,a,x[i+3],22,-1044525330);a=md5ff(a,b,c,d,x[i+
4],7,-176418897);d=md5ff(d,a,b,c,x[i+5],12,1200080426);c=md5ff(c,d,a,b,x[i+6],17,-1473231341);b=md5ff(b,c,d,a,x[i+7],22,-45705983);a=md5ff(a,b,c,d,x[i+8],7,1770035416);d=md5ff(d,a,b,c,x[i+9],12,-1958414417);
c=md5ff(c,d,a,b,x[i+10],17,-42063);b=md5ff(b,c,d,a,x[i+11],22,-1990404162);a=md5ff(a,b,c,d,x[i+12],7,1804603682);d=md5ff(d,a,b,c,x[i+13],12,-40341101);c=md5ff(c,d,a,b,x[i+14],17,-1502002290);b=md5ff(b,
c,d,a,x[i+15],22,1236535329);a=md5gg(a,b,c,d,x[i+1],5,-165796510);d=md5gg(d,a,b,c,x[i+6],9,-1069501632);c=md5gg(c,d,a,b,x[i+11],14,643717713);b=md5gg(b,c,d,a,x[i],20,-373897302);a=md5gg(a,b,c,d,x[i+5],
5,-701558691);d=md5gg(d,a,b,c,x[i+10],9,38016083);c=md5gg(c,d,a,b,x[i+15],14,-660478335);b=md5gg(b,c,d,a,x[i+4],20,-405537848);a=md5gg(a,b,c,d,x[i+9],5,568446438);d=md5gg(d,a,b,c,x[i+14],9,-1019803690);
c=md5gg(c,d,a,b,x[i+3],14,-187363961);b=md5gg(b,c,d,a,x[i+8],20,1163531501);a=md5gg(a,b,c,d,x[i+13],5,-1444681467);d=md5gg(d,a,b,c,x[i+2],9,-51403784);c=md5gg(c,d,a,b,x[i+7],14,1735328473);b=md5gg(b,c,
d,a,x[i+12],20,-1926607734);a=md5hh(a,b,c,d,x[i+5],4,-378558);d=md5hh(d,a,b,c,x[i+8],11,-2022574463);c=md5hh(c,d,a,b,x[i+11],16,1839030562);b=md5hh(b,c,d,a,x[i+14],23,-35309556);a=md5hh(a,b,c,d,x[i+1],
4,-1530992060);d=md5hh(d,a,b,c,x[i+4],11,1272893353);c=md5hh(c,d,a,b,x[i+7],16,-155497632);b=md5hh(b,c,d,a,x[i+10],23,-1094730640);a=md5hh(a,b,c,d,x[i+13],4,681279174);d=md5hh(d,a,b,c,x[i],11,-358537222);
c=md5hh(c,d,a,b,x[i+3],16,-722521979);b=md5hh(b,c,d,a,x[i+6],23,76029189);a=md5hh(a,b,c,d,x[i+9],4,-640364487);d=md5hh(d,a,b,c,x[i+12],11,-421815835);c=md5hh(c,d,a,b,x[i+15],16,530742520);b=md5hh(b,c,d,
a,x[i+2],23,-995338651);a=md5ii(a,b,c,d,x[i],6,-198630844);d=md5ii(d,a,b,c,x[i+7],10,1126891415);c=md5ii(c,d,a,b,x[i+14],15,-1416354905);b=md5ii(b,c,d,a,x[i+5],21,-57434055);a=md5ii(a,b,c,d,x[i+12],6,1700485571);
d=md5ii(d,a,b,c,x[i+3],10,-1894986606);c=md5ii(c,d,a,b,x[i+10],15,-1051523);b=md5ii(b,c,d,a,x[i+1],21,-2054922799);a=md5ii(a,b,c,d,x[i+8],6,1873313359);d=md5ii(d,a,b,c,x[i+15],10,-30611744);c=md5ii(c,d,
a,b,x[i+6],15,-1560198380);b=md5ii(b,c,d,a,x[i+13],21,1309151649);a=md5ii(a,b,c,d,x[i+4],6,-145523070);d=md5ii(d,a,b,c,x[i+11],10,-1120210379);c=md5ii(c,d,a,b,x[i+2],15,718787259);b=md5ii(b,c,d,a,x[i+9],
21,-343485551);a=safeAdd(a,olda);b=safeAdd(b,oldb);c=safeAdd(c,oldc);d=safeAdd(d,oldd)}return[a,b,c,d]}
function binl2rstr(input){var i;var output="";var length32=input.length*32;for(i=0;i<length32;i+=8)output+=String.fromCharCode(input[i>>5]>>>i%32&255);return output}
function rstr2binl(input){var i;var output=[];output[(input.length>>2)-1]=undefined;for(i=0;i<output.length;i+=1)output[i]=0;var length8=input.length*8;for(i=0;i<length8;i+=8)output[i>>5]|=(input.charCodeAt(i/
8)&255)<<i%32;return output}
function rstrMD5(s){return binl2rstr(binlMD5(rstr2binl(s),s.length*8))}
function rstrHMACMD5(key,data){var i;var bkey=rstr2binl(key);var ipad=[];var opad=[];var hash;ipad[15]=opad[15]=undefined;if(bkey.length>16)bkey=binlMD5(bkey,key.length*8);for(i=0;i<16;i+=1){ipad[i]=bkey[i]^
909522486;opad[i]=bkey[i]^1549556828}hash=binlMD5(ipad.concat(rstr2binl(data)),512+data.length*8);return binl2rstr(binlMD5(opad.concat(hash),512+128))}
function rstr2hex(input){var hexTab="0123456789abcdef";var output="";var x;var i;for(i=0;i<input.length;i+=1){x=input.charCodeAt(i);output+=hexTab.charAt(x>>>4&15)+hexTab.charAt(x&15)}return output}
function str2rstrUTF8(input){return unescape(encodeURIComponent(input))}
function rawMD5(s){return rstrMD5(str2rstrUTF8(s))}
function hexMD5(s){return rstr2hex(rawMD5(s))}
function rawHMACMD5(k,d){return rstrHMACMD5(str2rstrUTF8(k),str2rstrUTF8(d))}
function hexHMACMD5(k,d){return rstr2hex(rawHMACMD5(k,d))}
function md5(string,key,raw){if(!key){if(!raw)return hexMD5(string);return rawMD5(string)}if(!raw)return hexHMACMD5(key,string);return rawHMACMD5(key,string)}
exportTarget.md5=md5})(hashFunction);
exportTarget.lcs_do=lcs_do;exportTarget.lcs_do_gdid=lcs_do_gdid;exportTarget.lcs_get_lpid=lcs_get_lpid;exportTarget.lcs_update_lpid=lcs_update_lpid;exportTarget.lcs_version=lcs_version})(window);
var JEagleEyeClient={_fnCondition:function(){return true},
_bEnable:true,_bIsIE:/msie/i.test(navigator.userAgent)&&!/opera/i.test(navigator.userAgent),_bEnableRaiseErrorByOnError:/msie/i.test(navigator.userAgent)&&!/opera/i.test(navigator.userAgent)||/firefox/i.test(navigator.userAgent),
_bDebugOnly:false,_bSendScriptName:false,_sFirtFunctionBody:null,_sStackMode:function(){try{0()}catch(e){if(e.arguments)return"chrome";else if(e.stack)return"firefox";else if(window.opera&&!("stacktrace"in
e))return"opera"}return"other"}(),
_oStackMethodFactory:{other:function(oCaller){var ANONYMOUSE_FUNCTION="{anonymous}";var oFunctionReg=/function\s*([\w\-$]+)?\s*\(([^\(]*)\)/i;var oJEReg=/\$JE\(['"]([^\(]*)['"]\)/;var aStack=[],sFuncBody,
sFuncName,aArguments;var aFuncArgumentsName=[];var nJEPos=0;var nMaxStackSize=10;while(oCaller&&aStack.length<nMaxStackSize){sFuncBody=oCaller.toString();if(oFunctionReg.test(sFuncBody)){sFuncName=RegExp.$1||
ANONYMOUSE_FUNCTION;aFuncArgumentsName=(RegExp.$2||"").split(",")}else{sFuncName=ANONYMOUSE_FUNCTION;aFuncArgumentsName=[]}if(sFuncName==ANONYMOUSE_FUNCTION&&aFuncArgumentsName[0].indexOf("$$")==0){oCaller=
oCaller.caller;continue}if(sFuncName==ANONYMOUSE_FUNCTION&&oJEReg.test(sFuncBody))sFuncName=JEagleEyeClient._trim(RegExp.$1);JEagleEyeClient._setFirstFunctionBody(sFuncBody);aArguments=Array.prototype.slice.call(oCaller["arguments"]);
aStack.push(sFuncName+"("+JEagleEyeClient._stringifyArguments(aArguments,aFuncArgumentsName)+")");if(oCaller===oCaller.caller&&window.opera)break;oCaller=oCaller.caller}return aStack},
chrome:function(e){return e.stack.replace(/^.*?\n/,"").replace(/^.*?\n/,"").replace(/^.*?\n/,"").replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@").replace(/\s+\(http(.*):([\d]+):[\d]+\)/gm,
"()@http$1:$2").split("\n")},
firefox:function(e){return e.stack.replace(/^.*?\n/,"").replace(/(?:\n@:0)?\s+$/m,"").replace(/^\(/gm,"{anonymous}(").split("\n")},
opera:function(e){var lines=e.message.split("\n"),ANON="{anonymous}",lineRE=/Line\s+(\d+).*?script\s+(http\S+)(?:.*?in\s+function\s+(\S+))?/i,i,j,len;for(i=4,j=0,len=lines.length;i<len;i+=2)if(lineRE.test(lines[i]))lines[j++]=
(RegExp.$3?RegExp.$3+"()@"+RegExp.$2+RegExp.$1:ANON+"()@"+RegExp.$2+":"+RegExp.$1)+" -- "+lines[i+1].replace(/^\s+/,"");lines.splice(j,lines.length-j);return lines}},
_setFirstFunctionBody:function(str){if(this._sFirtFunctionBody==null)this._sFirtFunctionBody=str},
_stringifyArguments:function(aArguments,aFuncArgumentsName){var aResult=[];for(var i=0;i<aFuncArgumentsName.length;++i){var json=null;try{json=this._stringifyJSON(aArguments[i])}catch(e){}aResult[i]=aFuncArgumentsName[i];
if(json!=null)aResult[i]+=" : '"+this._stringifyJSON(aArguments[i])+"'"}return aResult.join(",")},
_trim:function(str){str=str.replace(/^\s+/,"");for(var i=str.length-1;i>=0;i--)if(/\S/.test(str.charAt(i))){str=str.substring(0,i+1);break}return str},
_getStackTrace:function($$oEx,sCallFuncName){var sMode=this._sStackMode;var oArgumentEx=sMode==="other"?arguments.callee:function(){try{0()}catch(e){return e}}();
var aStack=this._oStackMethodFactory[sMode](oArgumentEx);return this._makeResultStack(aStack,$$oEx,sCallFuncName||"")},
_makeResultStack:function(aStack,oEx,sCallFuncName){var oResult={message:"",callstack:[]};if(typeof oEx=="object"&&typeof oEx.message=="string")oResult.message=oEx.message;var bFirst=true;var sBaseUrl=
window.location.href.replace(/(https?:\/\/[^\/]+)\/(.*)/i,"$1");var oCheckReg=/^(@|http:\/\/)/;for(var i=0,nCount=aStack.length;i<nCount;i++){var sMessage=aStack[i];if(!oCheckReg.test(sMessage)){if(bFirst&&
sCallFuncName!=""&&sMessage.indexOf("{anonymous}")!=-1)sMessage=sMessage.replace("{anonymous}",sCallFuncName);sMessage=sMessage.replace(sBaseUrl,"");oResult.callstack.push((bFirst?"":" \x3d\x3e ")+sMessage);
bFirst=false}}return oResult},
attachOnError:function(){var that=this;window.onerror=function($$sMessage,sUrl,sLine){if(!that._isRunning())return;var oOptions=that._bIsIE?{callstack:that._getStackTrace().callstack.join("\n")}:{};that._sendToServer($$sMessage,
sUrl,sLine,oOptions)}},
raiseError:function($$oEx,oScope,oOptions){this._processError($$oEx,false,oScope,oOptions)},
ignoreError:function($$oEx,oScope,oOptions){this._processError($$oEx,true,oScope,oOptions)},
sendError:function(sMessage){this._sendToServer(sMessage)},
_processError:function($$oEx,bIgnoreDefaultError,oScope,oOptions){if(!this._isRunning())return;this._setCallerFunctionName(oScope,oOptions);var oStackResult=this._getStackTrace($$oEx,oOptions.callFuncName);
oOptions.callstack=oStackResult.callstack.join("\n");if(this._bEnableRaiseErrorByOnError){var that=this;var fnOldOnError=window.onerror||null;window.onerror=function(sMessage,sUrl,sLine){that._sendToServer(oStackResult.message,
sUrl,sLine,oOptions);window.onerror=fnOldOnError;return bIgnoreDefaultError}}else this._sendToServer(sStackMessage);
if(this._bEnableRaiseErrorByOnError||!this._bEnableRaiseErrorByOnError&&!bIgnoreDefaultError)try{0()}catch(e){throw $$oEx;}},
_setCallerFunctionName:function(oScope,oOptions){oOptions=oOptions||{};if(typeof oScope!="undefined"){try{var sCallFuncBody=arguments.callee.caller.caller.caller.toString()}catch(e){return}var sScopeFuncBody=
"";for(var key in oScope){sScopeFuncBody=oScope[key];if(typeof sScopeFuncBody=="function"&&sScopeFuncBody.toString()===sCallFuncBody){oOptions.callFuncName=key;return}}}},
_sendToServer:function(sMessage,sUrl,nLine,oOptions){sUrl=sUrl||document.location;nLine=parseInt(nLine||0,10);oOptions=oOptions||{};if(this._bIsIE)nLine--;var sRequestUrl="https://cecs.naver.com/?m\x3d"+
encodeURIComponent(sMessage)+"\x26u\x3d"+encodeURIComponent(sUrl)+"\x26l\x3d"+nLine;if(typeof oOptions.callstack!="undefined")sRequestUrl+="\x26callstack\x3d"+encodeURIComponent(oOptions.callstack);var sGeneral=
"";if(this._sFirtFunctionBody!=null){oOptions.funcBody=this._trim(this._sFirtFunctionBody).substring(0,200)+"..";this._sFirtFunctionBody=null;sGeneral+="\x3d function \x3d\n"+oOptions.funcBody+"\n\n"}if(typeof oOptions.message!=
"undefined")sGeneral+="\x3d message \x3d\n"+oOptions.message+"\n\n";if(typeof oOptions.params!="undefined"){oOptions.params=this._stringifyJSON(oOptions.params);sGeneral+="\x3d params \x3d\n"+oOptions.params}if(this._bSendScriptName){sGeneral+=
(sGeneral!=""?"\n\n":"")+"\x3d scripts \x3d\n";var scripts=document.getElementsByTagName("script");for(var i=0,count=scripts.length;i<count;i++){var sScriptUrl=scripts[i].src;if(sScriptUrl!=""&&sScriptUrl.indexOf("JEagleEyeClient.js")==
-1)sGeneral+=sScriptUrl+"\n"}}if(sGeneral!="")sRequestUrl+="\x26general\x3d"+encodeURIComponent(sGeneral);sRequestUrl+="\x26temp\x3d"+(new Date).getTime();if(this._bDebugOnly)alert("* \uc5d0\ub7ec : "+
sMessage+"\n* \ud30c\uc77c : "+sUrl+"\n* \ub77c\uc778 : "+nLine+"\n\n* function : "+oOptions.funcBody+"\n\n* message : "+oOptions.message+"\n\n* callstack : "+oOptions.callstack+"\n\n* params : "+oOptions.params+
"\n\n*request : "+sRequestUrl);else{var oImg=new Image;oImg.src=sRequestUrl}},
_stringifyJSON:function(obj){var t=typeof obj;if(t!="object"||obj===null){if(t=="string")obj='"'+obj+'"';return String(obj)}else{if(obj.constructor!="undefined")return null;var n,v,json=[],arr=obj&&obj.constructor==
Array;for(n in obj){v=obj[n];t=typeof v;if(t=="string")v='"'+v+'"';else if(t=="string")v='"'+v+'"';else if(t=="object"&&v!==null)v=this._stringifyJSON(v);json.push((arr?"":'"'+n+'":')+String(v))}return(arr?
"[":"{")+String(json)+(arr?"]":"}")}},
_isRunning:function(){return this._bEnable&&this._fnCondition()},
setCondition:function(fnCondition){this._fnCondition=fnCondition},
setEnable:function(bEnable){this._bEnable=bEnable},
setDebugOnly:function(bDebugOnly){this._bDebugOnly=bDebugOnly},
setSendScriptName:function(bSendScriptName){this._bSendScriptName=bSendScriptName}};
$JE=function(){};
window.naver=window.naver||{};naver.kin=naver.kin||{};naver.kin.pc=naver.kin.pc||{};
naver.kin.pc.FlashObject=function(){var FlashObject={};var sClassPrefix="F"+(new Date).getTime()+parseInt(Math.random()*1E6);var bIE=/MSIE/i.test(navigator.userAgent);var bFF=/FireFox/i.test(navigator.userAgent);
var bChrome=/Chrome/i.test(navigator.userAgent);var bind=function(oElement,sEvent,fHandler){if(typeof oElement.attachEvent!="undefined")oElement.attachEvent("on"+sEvent,fHandler);else oElement.addEventListener(sEvent,
fHandler,true)};
var objectToString=function(oObj,sSeparator){var s="";var first=true;var name="";var value;for(var p in oObj){if(first)first=false;else s+=sSeparator;value=oObj[p];switch(typeof value){case "string":s+=
p+"\x3d"+encodeURIComponent(value);break;case "number":s+=p+"\x3d"+encodeURIComponent(value.toString());break;case "boolean":s+=p+"\x3d"+(value?"true":"false");break;default:}}return s};
var unloadHandler=function(){obj=document.getElementsByTagName("OBJECT");for(var i=0,theObj;theObj=obj[i];i++){theObj.style.display="none";for(var prop in theObj)if(typeof theObj[prop]=="function")try{if(theObj.hasOwnProperty(prop))theObj[prop]=
null}catch(e){}}};
var wheelHandler=function(e){e=e||window.event;var nDelta=e.wheelDelta/(bChrome?360:120);if(!nDelta)nDelta=-e.detail/3;var oEl=e.target||e.srcElement;if(!(new RegExp("(^|\b)"+sClassPrefix+"_([a-z0-9_$]+)(\b|$)",
"i")).test(oEl.className))return;var sMethod=RegExp.$2;var nX="layerX"in e?e.layerX:e.offsetX;var nY="layerY"in e?e.layerY:e.offsetY;try{if(!oEl[sMethod](nDelta,nX,nY))if(e.preventDefault)e.preventDefault();
else e.returnValue=false}catch(err){}};
var getAbsoluteXY=function(oEl){var oPhantom=null;var bSafari=/Safari/.test(navigator.userAgent);var bIE=/MSIE/.test(navigator.userAgent);var fpSafari=function(oEl){var oPos={left:0,top:0};if(oEl.parentNode.tagName.toLowerCase()==
"object")oEl=oEl.parentNode;for(var oParent=oEl,oOffsetParent=oParent.offsetParent;oParent=oParent.parentNode;){if(oParent.offsetParent){oPos.left-=oParent.scrollLeft;oPos.top-=oParent.scrollTop}if(oParent==
oOffsetParent){oPos.left+=oEl.offsetLeft+oParent.clientLeft;oPos.top+=oEl.offsetTop+oParent.clientTop;if(!oParent.offsetParent){oPos.left+=oParent.offsetLeft;oPos.top+=oParent.offsetTop}oOffsetParent=oParent.offsetParent;
oEl=oParent}}return oPos};
var fpOthers=function(oEl){var oPos={left:0,top:0};for(var o=oEl;o;o=o.offsetParent){oPos.left+=o.offsetLeft;oPos.top+=o.offsetTop}for(var o=oEl.parentNode;o;o=o.parentNode){if(o.tagName=="BODY")break;
if(o.tagName=="TR")oPos.top+=2;oPos.left-=o.scrollLeft;oPos.top-=o.scrollTop}return oPos};
return(bSafari?fpSafari:fpOthers)(oEl)};
var getScroll=function(){var bIE=/MSIE/.test(navigator.userAgent);if(bIE){var sX=document.documentElement.scrollLeft||document.body.scrollLeft;var sY=document.documentElement.scrollTop||document.body.scrollTop;
return{scrollX:sX,scrollY:sY}}else return{scrollX:window.pageXOffset,scrollY:window.pageYOffset}};
var getInnerWidthHeight=function(){var bIE=/MSIE/.test(navigator.userAgent);var obj={};if(bIE){obj.nInnerWidth=document.documentElement.clientWidth||document.body.clientWidth;obj.nInnerHeight=document.documentElement.clientHeight||
document.body.clientHeight}else{obj.nInnerWidth=window.innerWidth;obj.nInnerHeight=window.innerHeight}return obj};
FlashObject.showAt=function(sDiv,sTag){document.getElementById(sDiv).innerHTML=sTag};
FlashObject.show=function(sURL,sID,nWidth,nHeight,oParam,sAlign,sFPVersion){document.write(FlashObject.generateTag(sURL,sID,nWidth,nHeight,oParam,sAlign,sFPVersion))};
FlashObject.generateTag=function(sURL,sID,nWidth,nHeight,oParam,sAlign,sFPVersion){nWidth=nWidth||"100%";nHeight=nHeight||"100%";sFPVersion=sFPVersion||"9,0,0,0";sAlign=sAlign||"middle";var oOptions=FlashObject.getDefaultOption();
if(oParam){if(oParam.flashVars){if(typeof oParam.flashVars=="object")oParam.flashVars=objectToString(oParam.flashVars,"\x26");oParam.flashVars+="\x26"}else oParam.flashVars="";oParam.flashVars+="__flashID\x3d"+
sID;for(var key in oParam)oOptions[key]=oParam[key]}var sClsID="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000";var sCodeBase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version\x3d"+
sFPVersion;var sStyle="position:relative !important;";var sClassName=sClassPrefix+"_"+oOptions.wheelHandler;var objCode=[];var embedCode=[];objCode.push('\x3cobject classid\x3d"'+sClsID+'" codebase\x3d"'+
sCodeBase+'" class\x3d"'+sClassName+'" style\x3d"'+sStyle+'" '+'" width\x3d"'+nWidth+'" height\x3d"'+nHeight+'" id\x3d"'+sID+'" align\x3d"'+sAlign+'"\x3e');objCode.push('\x3cparam name\x3d"movie" value\x3d"'+
sURL+'" /\x3e');embedCode.push('\x3cembed width\x3d"'+nWidth+'" height\x3d"'+nHeight+'" name\x3d"'+sID+'" class\x3d"'+sClassName+'" style\x3d"'+sStyle+'" '+'" src\x3d"'+sURL+'" align\x3d"'+sAlign+'" ');
for(var vars in oOptions){objCode.push('\x3cparam name\x3d"'+vars+'" value\x3d"'+oOptions[vars]+'" /\x3e');embedCode.push(vars+'\x3d"'+oOptions[vars]+'" ')}embedCode.push('type\x3d"application/x-shockwave-flash" pluginspage\x3d"http://www.macromedia.com/go/getflashplayer" /\x3e');
objCode.push(embedCode.join(""));objCode.push("\x3c/object\x3e");if(bind){bind(window,"unload",unloadHandler);bind(document,!bFF?"mousewheel":"DOMMouseScroll",wheelHandler);bind=null}return bIE?objCode.join(""):
embedCode.join("")};
FlashObject.getDefaultOption=function(){return{quality:"high",bgColor:"#FFFFFF",allowScriptAccess:"always",wmode:"window",menu:"false",allowFullScreen:"true"}};
FlashObject.find=function(sID,oDoc){oDoc=oDoc||document;return oDoc[sID]||oDoc.all[sID]};
FlashObject.setWidth=function(sID,value){FlashObject.find(sID).width=value};
FlashObject.setHeight=function(sID,value){FlashObject.find(sID).height=value};
FlashObject.setSize=function(sID,nWidth,nHeight){FlashObject.find(sID).height=nHeight;FlashObject.find(sID).width=nWidth};
FlashObject.getPositionObj=function(sID){var targetObj=FlashObject.find(sID);if(targetObj==null)return null;var absPosi=getAbsoluteXY(targetObj);var scrollPosi=getScroll();var obj={};obj.absoluteX=absPosi.left;
obj.absoluteY=absPosi.top;obj.scrolledX=obj.absoluteX-scrollPosi.scrollX;obj.scrolledY=obj.absoluteY-scrollPosi.scrollY;obj.browserWidth=getInnerWidthHeight().nInnerWidth;return obj};
return FlashObject}();
window.naver=window.naver||{};naver.kin=naver.kin||{};naver.kin.pc=naver.kin.pc||{};
if(typeof Object.keys==="undefined")Object.keys=function(oObject){if(!oObject)return null;var aKeys=[];for(var sKey in oObject)if(oObject.hasOwnProperty(sKey))aKeys.push(sKey);return aKeys.length>0?aKeys:
null};
if(typeof Function.prototype.bind==="undefined")Function.prototype.bind=function(oBindObject){var fnThis=this;if(arguments.length<=1)return function(){return fnThis.apply(oBindObject,arguments)};
else{var aExternalArguments=Array.prototype.slice.call(arguments,1);return function(){return fnThis.apply(oBindObject,arguments.length===0?aExternalArguments:aExternalArguments.concat(Array.prototype.slice.call(arguments)))}}};
(function($){if(typeof $!=="undefined"){if(typeof $.fn.existElements==="undefined")$.fn.existElements=function(){return this.length>0};
if(typeof $.cachedScript==="undefined")$.cachedScript=function(url,options){options=$.extend(options||{},{dataType:"script",cache:true,url:url});return $.ajax(options)};
if(typeof $.cachedScripts==="undefined")$.cachedScripts=function(aUrls,oOptions){var aPromises=[];$.each(aUrls,function(nIndex,sUrl){aPromises.push($.cachedScript(sUrl,oOptions))});
return $.when.apply(aPromises)};
if(typeof $.getSingle==="undefined")$.getSingle=function(sCssSelector,oParent){try{var oRevisedParent=document;if(oParent instanceof jQuery){if(oParent.length>0)oRevisedParent=oParent.get(0)}else if(oParent instanceof
Object&&oParent.nodeType===Node.ELEMENT_NODE)oRevisedParent=oParent;var sRevisedCssSelector=sCssSelector;if(oRevisedParent.nodeType!==Node.DOCUMENT_NODE){var sRevisedParentId=oRevisedParent.id;if(!sRevisedParentId){sRevisedParentId=
"p"+(new Date).getTime()+Math.round(Math.random()*1E8);oRevisedParent.id=sRevisedParentId}sRevisedCssSelector="#"+sRevisedParentId+" "+sCssSelector;sRevisedCssSelector=sRevisedCssSelector.replace(/,\s*/gi,
", #"+sRevisedParentId+" ");oRevisedParent=oRevisedParent.ownerDocument||oRevisedParent.document||document}return $(oRevisedParent.querySelector(sRevisedCssSelector))}catch(e){}return $()};
$.ajaxSetup({cache:false});if(typeof $.parseParams==="undefined")$.parseParams=function(query){if(query==="")return{};var str=query.split(/&/g),pos,key,val,buf={},isescape=false;for(var i=0;i<str.length;i++){key=
str[i].substring(0,pos=str[i].indexOf("\x3d")),isescape=false;try{val=decodeURIComponent(str[i].substring(pos+1))}catch(e){isescape=true;val=decodeURIComponent(unescape(str[i].substring(pos+1)))}if(key.substr(key.length-
2,2)=="[]"){key=key.substring(0,key.length-2);if(typeof buf[key]=="undefined")buf[key]=[];buf[key][buf[key].length]=isescape?escape(val):val}else buf[key]=isescape?escape(val):val}return buf};
if(typeof $.escapeHtml==="undefined")$.escapeHtml=function(sText){if(!sText)return sText;var oEntities={'"':"quot","\x26":"amp","\x3c":"lt","\x3e":"gt","'":"#39"};return sText.replace(/[<>&"']/g,function(sMatch){return oEntities[sMatch]?
"\x26"+oEntities[sMatch]+";":sMatch})};
if(typeof $.fn.toggleAttr==="undefined")$.fn.toggleAttr=function(sAttributeName,sValue1,sValue2){var $el=$(this);if($el.attr(sAttributeName)==sValue1)return $el.attr(sAttributeName,sValue2);else return $el.attr(sAttributeName,
sValue1)}}})(jQuery);
naver.kin.pc.common={MESSAGE:{MAIN_001:"\uc9c8\ubb38\uc744 \ub4f1\ub85d\ud558\ub824\uba74 \ub85c\uadf8\uc778\ud574 \uc8fc\uc138\uc694.",MAIN_002:"\uc9c8\ubb38 \uc81c\ubaa9\uc744 \uc368 \uc8fc\uc138\uc694 (\ucd5c\ub300 80\uc790)",
MAIN_003:"\ub2f5\ubcc0\ud560 \uc9c8\ubb38\uc744 \ucc3e\uc744 \uc218 \uc788\ub294 \ud0a4\uc6cc\ub4dc\ub97c \uc785\ub825\ud574 \uc8fc\uc138\uc694.",MYACTIVITY_001:"1:1\uc9c8\ubb38 \uc54c\ub9bc\uc744 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
MYACTIVITY_002:"\uac1c\ud3b8 \ud6c4 \ubcc0\uacbd \uc54c\ub9bc\uc744 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",MYACTIVITY_003:"\uc644\ub8cc\ub41c \uc9c8\ubb38 \uc54c\ub9bc\uc744 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
MYACTIVITY_004:"1:1\uc9c8\ubb38 \ubc18\ub824 \uc54c\ub9bc\uc744 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",INTEREST_001:"\uc120\ud0dd\ud55c \uad00\uc2ec\uc124\uc815 \ubcc0\uacbd\uc0ac\ud56d\uc774 \uc801\uc6a9\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
INTEREST_002:"\ub4f1\ub85d\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",INTEREST_003:"\uc9c0\uc2ddiN\uc5d0 \uac8c\uc2dc\ubb3c\uc744 1\uac1c \uc774\uc0c1 \uc791\uc131\ud558\uc5ec\uc57c \uad00\uc2ec\ubd84\uc57c\ub97c \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
INTEREST_004:"{DIRNAME}\uc740(\ub294) \uc774\ubbf8 \ub4f1\ub85d\ub41c \uad00\uc2ec\ubd84\uc57c \uc785\ub2c8\ub2e4.",INTEREST_005:"14\uc138 \ubbf8\ub9cc\uc758 \uc0ac\uc6a9\uc790\ub294 \uc774 \ub514\ub809\ud1a0\ub9ac\ub97c \uad00\uc2ec\ubd84\uc57c\ub85c \uc124\uc815\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
INTEREST_006:"\ub0b4 \uad00\uc2ec\ubd84\uc57c\ub85c \ucd94\uac00\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ud504\ub85c\ud544\x3e\ub098\uc758\uad00\uc2ec\uc9c8\ubb38\uc5d0\uc11c \ucd94\uac00\ub41c \ub514\ub809\ud1a0\ub9ac\ub97c \ud655\uc778\ud574 \ubcf4\uc138\uc694.",
INTEREST_007:"\ub0b4 \uad00\uc2ec\ubd84\uc57c\ub85c \ucd94\uac00\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \ud655\uc778 \ubd80\ud0c1\ub4dc\ub9bd\ub2c8\ub2e4.",LOCAL_001:"{DIRNAME}\uc740(\ub294) \uc774\ubbf8 \ub4f1\ub85d\ub41c \uad00\uc2ec\uc9c0\uc5ed\uc785\ub2c8\ub2e4.",
LOCAL_002:"\ub0b4 \uad00\uc2ec\uc9c0\uc5ed\uc73c\ub85c \ucd94\uac00\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ud504\ub85c\ud544\x3e\ub098\uc758\uad00\uc2ec\uc9c8\ubb38\uc5d0\uc11c \ucd94\uac00\ub41c \ub514\ub809\ud1a0\ub9ac\ub97c \ud655\uc778\ud574 \ubcf4\uc138\uc694.",
LOCAL_003:"\ub0b4 \uad00\uc2ec\uc9c0\uc5ed\uc73c\ub85c \ucd94\uac00\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \ud655\uc778 \ubd80\ud0c1\ub4dc\ub9bd\ub2c8\ub2e4.",KEYWORD_001:"\uc9c0\uc2ddiN\uc5d0 \uac8c\uc2dc\ubb3c\uc744 1\uac1c \uc774\uc0c1 \uc791\uc131\ud558\uc5ec\uc57c \uad00\uc2ec\ud0a4\uc6cc\ub4dc\ub97c \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
KEYWORD_002:"\ud0a4\uc6cc\ub4dc\ub85c \uc815\ud655\ud558\uac8c \uc785\ub825\ud574 \uc8fc\uc138\uc694.\n\uacf5\ubc31\uc774 \uc788\ub294 \ubb38\uc7a5\uc740 \uc785\ub825\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",
KEYWORD_003:"\uad00\uc2ec\ud0a4\uc6cc\ub4dc\ub97c \ucd94\uac00\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ub098\uc911\uc5d0 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.",COMMON_DELETE:"\ud655\uc778\ud558\uc2e0 \uc54c\ub9bc\uc744 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
TIMEOUT:"\ub124\ud2b8\uc6cc\ud06c \uc9c0\uc5f0\uc774 \ubc1c\uc0dd\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.",ERROR:"\uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.",
ROS:"\uc11c\ube44\uc2a4 \uc815\uae30 \uc810\uac80 \uc911\uc73c\ub85c \uc120\ud0dd\ud558\uc2e0 \uc791\uc5c5\uc744 \uc2e4\ud589\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n \ubd88\ud3b8\uc744 \ub4dc\ub824\uc11c \uc8c4\uc1a1\ud569\ub2c8\ub2e4.\n \ub098\uc911\uc5d0 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.",
WAIT_FOR_PROCESSING:"\uc9c4\ud589\uc911\uc778 \uc791\uc5c5\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uc7a0\uc2dc\ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694."},_DETAIL_IMG_RESIZE_WIDTH:400,_cPhotoViewer:null,
getMessage:function(sMessageId){return!sMessageId||!this.MESSAGE[sMessageId]?"":this.MESSAGE[sMessageId]},
checkRos:function(){try{if(kinRos&&kinRos.isActionNoticeDisplay){alert(kinRos.alertMsg||this.MESSAGE.ROS);return true}}catch(e){}return false},
checkRosAndGoUrl:function(sUrl,bOpenNewWindow){if(this.checkRos())return false;try{if(bOpenNewWindow)window.open(sUrl);else location.href=sUrl}catch(e){}},
checkRosAndGoUrlWhenLoggedIn:function(sUrl,bOpenNewWindow){if(this.checkRos())return false;if(!naver.isLogin)sUrl="https://nid.naver.com/nidlogin.login?mode\x3dform\x26url\x3d"+encodeURIComponent(location.href);
try{if(bOpenNewWindow)window.open(sUrl);else location.href=sUrl}catch(e){}},
getBetPointCssClassName:function(nBetPoint){var bIsNumber=typeof nBetPoint==="number"&&isFinite(nBetPoint);if(!bIsNumber||nBetPoint<1)return"";if(nBetPoint>=100)return"type5";else if(nBetPoint>=80)return"type4";
else if(nBetPoint>=55)return"type3";else if(nBetPoint>=30)return"type2";else return"type1"},
getDomain:function(){return location.href.match(/http:\/\/([^\/]*)/i)[0]},
getSimpleURL:function(sSourceURL){sSourceURL=sSourceURL||window.location.toString();if(sSourceURL.indexOf("?")>-1)sSourceURL=sSourceURL.split("?")[0];if(sSourceURL.indexOf("#")>-1)sSourceURL=sSourceURL.split("#")[0];
return sSourceURL},
getURLParameter:function(sURL){var sSourceURL=sURL||window.location.toString();var sURLParams="";if(sSourceURL.indexOf("?")>-1){sURLParams=sSourceURL.split("?")[1];if(sURLParams.indexOf("#")>-1)sURLParams=
sURLParams.split("#")[0]}return sURLParams},
getURLParameterObject:function(sURL){var sURLParams=this.getURLParameter(sURL),oURLParams={};if(sURLParams){var i,len,aTemp;var aParams=sURLParams.split("\x26");for(i=0,len=aParams.length;i<len;i++)try{aTemp=
aParams[i].split("\x3d");oURLParams[aTemp[0]]=aTemp[1]||""}catch(e){}}return oURLParams},
getTagNumberString:function(sNumberString,sTagId){var oTpls={"comma":doT.template('\x3cimg width\x3d"1" height\x3d"1" class\x3d"num{{\x3dit.num}}" src\x3d"https://ssl.pstatic.net/static/kin/09renewal/blank.gif" alt\x3d"{{\x3dit.alt}}"/\x3e\n'),
"percent":doT.template('\x3cimg width\x3d"1" height\x3d"1" class\x3d"num{{\x3dit.num}}" src\x3d"https://ssl.pstatic.net/static/kin/09renewal/blank.gif" alt\x3d"{{\x3dit.alt}"/\x3e\n'),"none":doT.template('\x3cimg width\x3d"1" height\x3d"1" class\x3d"num{{\x3dit.num}}" src\x3d"https://ssl.pstatic.net/static/kin/09renewal/blank.gif" alt\x3d"{{\x3dit.alt}}"/\x3e\n')};
var sTagNumberHTML="";if(sTagId&&oTpls[sTagId]){if(typeof sNumberString!="string")sNumberString=String(sNumberString);var sChar;if(sTagId=="percent"){for(var i=0,len=sNumberString.length;i<len;i++){sChar=
sNumberString.charAt(i);if(sChar=="."){sTagNumberHTML+=oTpls[sTagId]({"num":"_dot","alt":"\uc810"});try{sChar=sNumberString.charAt(i+1);if(sChar){sTagNumberHTML+=oTpls[sTagId]({"num":sChar,"alt":sChar});
break}}catch(e){}}else sTagNumberHTML+=oTpls[sTagId]({"num":sChar,"alt":sChar})}sTagNumberHTML+=oTpls[sTagId]({"num":"_per","alt":"\ud37c\uc13c\ud2b8"})}else if(sTagId=="comma"){sNumberString=this.getCommaNumberString(sNumberString);
for(var i=0,len=sNumberString.length;i<len;i++){sChar=sNumberString.charAt(i);if(sChar==",")sTagNumberHTML+=oTpls[sTagId]({"num":"_comma","alt":"\ucf64\ub9c8"});else sTagNumberHTML+=oTpls[sTagId]({"num":sChar,
"alt":sChar})}}else for(var i=0,len=sNumberString.length;i<len;i++){sChar=sNumberString.charAt(i);sTagNumberHTML+=oTpls[sTagId]({"num":sChar,"alt":"\ud37c\uc13c\ud2b8"})}}return sTagNumberHTML},
getCommaNumberString:function(sNumberString){if(typeof sNumberString=="undefined")return"0";if(typeof sNumberString!="string")sNumberString=String(sNumberString);var reg=/(\d)(?=(\d\d\d)+$)/igm;sNumberString=
sNumberString.replace(reg,"$1,");return sNumberString},
removeWhiteSpace:function(sText){return typeof sText=="string"?sText.replace(/\s/g,""):""},
replaceWhiteSpace:function(sText){return typeof sText=="string"?sText.replace(/\s{2}/g,"\x26nbsp;\x26nbsp;"):""},
restoreWhiteSpace:function(sText){return typeof sText=="string"?sText.replace(/\&nbsp\;/g," "):""},
getDateString:function(oDate){var month=oDate.getMonth()+1;month=month>=10?""+month:"0"+month;var day=oDate.getDate();day=day>=10?""+day:"0"+day;return oDate.getFullYear()+month+day},
getDateObjectFromDate:function(dDate){var oRet={};if(dDate)oRet={"time":dDate.getTime(),"minutes":dDate.getMinutes(),"seconds":dDate.getSeconds(),"hours":dDate.getHours(),"month":dDate.getMonth()+1,"year":String(dDate.getFullYear()).substring(2,
4),"timezoneOffset":dDate.getTimezoneOffset(),"day":dDate.getDay(),"date":dDate.getDate()};return oRet},
getFullStringNumber:function(num,length){var isMinus=num<0;var sNum=String(isMinus?-1*num:num);var sPrefix="";var sRet=num;for(var idx=0;idx<length-sNum.length;idx++)sPrefix+="0";sRet=isMinus?"-"+sPrefix+
sNum:sPrefix+sNum;return sRet},
getPostDate:function(oNowDate,oPostedDate,oFormat){var nTimeStampToday,nTimeStampPosted;if(oNowDate&&oNowDate.time)nTimeStampToday=oNowDate.time;if(oPostedDate&&oPostedDate.time)nTimeStampPosted=oPostedDate.time;
var dPostedDate=new Date;var dNowDate=new Date;dPostedDate.setTime(nTimeStampPosted);dNowDate.setTime(nTimeStampToday);oPostedDate=this.getDateObjectFromDate(dPostedDate);oNowDate=this.getDateObjectFromDate(dNowDate);
if(!oFormat)oFormat={c1:{start:86400,end:864E6,format:"{{\x3dit.year}}.{{\x3dit.month}}.{{\x3dit.date}}."},c2:{start:1200,end:86400,format:"{{\x3dit.hours}}:{{\x3dit.minutes}}"},c3:{start:20,end:1200,format:"\x3cem\x3e{{\x3dit.aftermin}}\x3c/em\x3e\ubd84 \uc804"},
c4:{start:-1E5,end:20,format:"\x3cem\x3e{{\x3dit.aftersec}}\x3c/em\x3e\ucd08 \uc804"}};if(typeof nTimeStampToday!="number")nTimeStampToday=Number(nTimeStampToday);if(typeof nTimeStampPosted!="number")nTimeStampPosted=
Number(nTimeStampPosted);var nRemainder=Math.ceil((nTimeStampToday-nTimeStampPosted)/1E3);var year=this.getFullStringNumber(oPostedDate.year,2);var month=this.getFullStringNumber(oPostedDate.month,2);var hours12=
oPostedDate.hours>12?oPostedDate.hours-12:oPostedDate.hours;hours12=this.getFullStringNumber(hours12,2);var hours=this.getFullStringNumber(oPostedDate.hours,2);var date=this.getFullStringNumber(oPostedDate.date,
2);var minutes=this.getFullStringNumber(oPostedDate.minutes,2);var aftermin=Math.ceil(nRemainder/60);var aftersec=Math.ceil(nRemainder);var afterhour=Math.ceil(aftermin/60);aftermin=aftermin==0?1:aftermin;
aftersec=aftersec<1?1:aftersec;afterhour=afterhour==0?1:afterhour;var meridiem=oPostedDate.hours>12?"\uc624\ud6c4":"\uc624\uc804";var oData={year:year,month:month,date:date,hours:hours,hours12:hours12,
minutes:minutes,aftermin:aftermin,aftersec:aftersec,afterhour:afterhour,meridiem:meridiem};var oReturn={};var x,tpl;if(oPostedDate.date!=oNowDate.date){x="c1";tpl=doT.template(oFormat[x].format);oReturn=
{strHtml:tpl(oData),type:x}}else for(x in oFormat){var obj=oFormat[x];if(nRemainder>=obj.start&&nRemainder<obj.end){tpl=doT.template(obj.format);oReturn={strHtml:tpl(oData),type:x}}}oReturn.isOver24=oData.afterhour>=
24;oReturn.isOver20Sec=oData.aftersec>20;return oReturn},
changeJavascriptDate:function(sNormalDate){var aMatchedValue=sNormalDate.match(/^([0-9]{4,})-([01][0-9])-([0-3][0-9]) ([0-2][0-9]):([0-5][0-9]):([0-5][0-9])/);if(aMatchedValue)return new Date(aMatchedValue[1],
Number(aMatchedValue[2])-1,aMatchedValue[3],aMatchedValue[4],aMatchedValue[5],aMatchedValue[6]);aMatchedValue=sNormalDate.match(/^([0-9]{4,})-([01][0-9])-([0-3][0-9])/);if(aMatchedValue)return new Date(aMatchedValue[1],
Number(aMatchedValue[2])-1,aMatchedValue[3]);aMatchedValue=sNormalDate.match(/^([0-9]{4,})\.([01][0-9])\.([0-3][0-9])\. ([0-2][0-9]):([0-5][0-9]):([0-5][0-9])/);if(aMatchedValue)return new Date(aMatchedValue[1],
Number(aMatchedValue[2])-1,aMatchedValue[3],aMatchedValue[4],aMatchedValue[5],aMatchedValue[6]);aMatchedValue=sNormalDate.match(/^([0-9]{4,})\.([01][0-9])\.([0-3][0-9])\./);if(aMatchedValue)return new Date(aMatchedValue[1],
Number(aMatchedValue[2])-1,aMatchedValue[3]);return null},
changeDateFormat:function(sDate,sFormat){var sFormatReg=/(Y{0,4})[^YMDhms]*(M{0,2})[^YMDhms]*(D{0,2})[^YMDhms]*(h{0,2})[^YMDhms]*(m{0,2})[^YMDhms]*(s{0,2})[^YMDhms]*/;var aFormatMatch=sFormat.match(sFormatReg);
if(!aFormatMatch)return false;var sYearFormat=aFormatMatch[1];var sMonthFormat=aFormatMatch[2];var sDayFormat=aFormatMatch[3];var sHourFormat=aFormatMatch[4];var sMinuteFormat=aFormatMatch[5];var sSecondFormat=
aFormatMatch[6];var sDateReg=/(\d\d\d\d)-(\d\d)-(\d\d)[ ](\d\d):(\d\d):(\d\d)/i;var aDateMatch=sDate.match(sDateReg);if(!aDateMatch)return false;var sChangedDate=sFormat;if(sYearFormat){var sYear=aDateMatch[1];
if(sYearFormat=="YY")sYear=sYear.slice(2);sChangedDate=sChangedDate.replace(sYearFormat,sYear)}if(sMonthFormat){var sMonth=aDateMatch[2];if(sMonthFormat=="M")sMonth=parseInt(sMonth,10)<10?sMonth.slice(1):
sMonth;sChangedDate=sChangedDate.replace(sMonthFormat,sMonth)}if(sDayFormat){var sDay=aDateMatch[3];if(sDayFormat=="D")sDay=parseInt(sDay,10)<10?sDay.slice(1):sDay;sChangedDate=sChangedDate.replace(sDayFormat,
sDay)}if(sHourFormat){var sHour=aDateMatch[4];if(sHourFormat=="h"){sHour=parseInt(sHour,10)<10?sHour.slice(1):sHour;sHour=parseInt(sHour,10)<12?"\uc624\uc804 "+sHour:"\uc624\ud6c4 "+sHour}sChangedDate=
sChangedDate.replace(sHourFormat,sHour)}if(sMinuteFormat){var sMinute=aDateMatch[5];if(sMinuteFormat=="m")sMinute=parseInt(sMinute,10)<10?sMinute.slice(1):sMinute;sChangedDate=sChangedDate.replace(sMinuteFormat,
sMinute)}if(sSecondFormat){var sSecond=aDateMatch[6];if(sSecondFormat=="s")sSecond=parseInt(sSecond,10)<10?sSecond.slice(1):sSecond;sChangedDate=sChangedDate.replace(sSecondFormat,sSecond)}return sChangedDate},
cutString:function(sTargetString,nLength,sTailString){if(!sTargetString)return false;if(!sTailString)sTailString="...";if(typeof sTargetString!=="string")sTargetString.toString();sTargetString=sTargetString.length>
nLength?sTargetString.substring(0,nLength)+sTailString:sTargetString;return sTargetString},
cutStringByByte:function(sTargetString,nByte,sTailString,bFlag){if(!sTargetString)return false;if(!sTailString)sTailString="...";var aResultString=[];var sTmpChar="";var b2Byte=bFlag||false;sTargetString=
sTargetString.replace(/\r?\n/gim," ");var totalByte=this.getByteString(sTargetString,b2Byte);if(totalByte<=nByte)return sTargetString;var nCalByte=0;for(var i=0;i<sTargetString.length;i++){sTmpChar=sTargetString.charAt(i);
if(sTmpChar===" "){aResultString.push("");continue}else aResultString.push(sTmpChar);nCalByte+=this.getByteString(sTmpChar,b2Byte);if(nCalByte>nByte)return sTargetString.substring(0,aResultString.length-
1)+sTailString}return sTargetString},
getByteString:function(sTargetString,bFlag){if(!sTargetString)return false;var b2Byte=bFlag||false;var nByte=0;for(var i=0,len=sTargetString.length;i<len;i++)if(b2Byte){var sUnitChar=sTargetString.charAt(i);
if(/[A-Z]|[\$]|[\@]/.test(sUnitChar))nByte+=2;else nByte+=sTargetString.charCodeAt(i)>128?2:1}else nByte+=sTargetString.charCodeAt(i)>128?2:1;return nByte},
getConstructorName:function(oTarget){if(oTarget&&oTarget.constructor){var sCode=oTarget.constructor.toString();var aMatch=sCode.match(/function ([^\(]*)/);return aMatch&&aMatch[1]||null}return null},
checkEqualObject:function(oBase,oComparison){if(!oBase||!oComparison)return false;if(Object.keys(oBase).length!=Object.keys(oComparison).length)return false;for(var x in oBase)if(oBase[x]instanceof Object){if(!this.checkEqualObject(oBase[x],
oComparison[x]))return false}else if(oBase[x]!=oComparison[x])return false;return true},
deepObjectCopy:function(oSourceTarget){var sConstructor;var oDestinationTarget;if(typeof oSourceTarget=="object"&&(sConstructor=this.getConstructorName(oSourceTarget))){oDestinationTarget=eval("new "+sConstructor+
"()");var key;if(oSourceTarget.prototype)for(key in oSourceTarget.prototype)oDestinationTarget.prototype[key]=this.deepObjectCopy(oSourceTarget.prototype[key]);for(key in oSourceTarget)oDestinationTarget[key]=
this.deepObjectCopy(oSourceTarget[key]);return oDestinationTarget}oDestinationTarget=oSourceTarget;return oDestinationTarget},
deepArrayCopy:function(aArray){var retArray=[];for(var i=0,len=aArray.length;i<len;i++)if(aArray[i]==null)retArray.push(aArray[i]);else retArray.push(typeof aArray[i]=="object"?naver.kin.pc.common.deepObjectCopy(aArray[i]):
aArray[i]);return retArray},
base64Encoding:function(sString){var oBase64Encode=new this.Base64Encode;var sEncoded=oBase64Encode.encode(sString);return sEncoded},
base64Decoding:function(sString){var oBase64Encode=new this.Base64Encode;var sDecoded=oBase64Encode.decode(sString);return sDecoded},
initializeLayerPopup:function(elBtn,layer){return new this.LayerPopup(elBtn,layer)},
getKinNumber2ImageTag:function(nNumber,sPartition){if(typeof nNumber=="undefined")return false;var sNumber=String(nNumber);var aImageHtml=[];for(var i=0;i<sNumber.length;i++){var sTmpChar=sNumber.charAt(i);
aImageHtml.push('\x3cimg class\x3d"num'+sTmpChar+'" width\x3d"1" height \x3d"1" alt\x3d"'+sTmpChar+'" src\x3d"'+this.getImagePath()+'blank.gif" /\x3e')}return aImageHtml.join(sPartition||"")},
getKinGetDetailURI:function(nDirId,nDocId){return"/qna/detail.nhn?d1id\x3d"+this.getD1Id(nDirId)+"\x26dirId\x3d"+nDirId+"\x26docId\x3d"+nDocId},
getKinGetAnswerFormURI:function(nDirId,nDocId){return"/qna/answer.nhn?serviceId\x3dkin\x26d1id\x3d"+this.getD1Id(nDirId)+"\x26dirId\x3d"+nDirId+"\x26docId\x3d"+nDocId},
getD1Id:function(nDirId){var sDirId=typeof nDirId=="string"?nDirId:String(nDirId);sDirId=sDirId.length%2==1?"0"+sDirId:sDirId;var nRetD1Id=Number(sDirId.substr(0,2));return nRetD1Id},
getDirDepth:function(nDirId){var nMaxDepth=5;if(nDirId<=0)return-1;var nDepth=0;for(var i=nMaxDepth-1;i>=0;i--){var nId=Math.floor(nDirId/Math.pow(100,i));if(nId>0){nDepth=i+1;break}}return nDepth},
resizeIframe:function(sFrameId,sCssQuery,nOffsetPx){var el=$("#"+sFrameId)[0];if(!el)return;var elStyle=el.style;var elDocument=el.contentWindow.document;var elBody=elDocument[elDocument.compatMode=="CSS1Compat"?
"documentElement":"body"];var elStandardHeight=elBody;if(sCssQuery)elStandardHeight=$(sCssQuery,elBody)[0]||elBody;var broswer=eg.agent().browser.name;if(broswer==="ie"||broswer==="chrome")elStyle.height=
elStandardHeight.clientHeight+(nOffsetPx?nOffsetPx:0)+"px";elStyle.height=elBody[broswer==="ie"||broswer==="opera"||broswer==="firefox"?"scrollHeight":"offsetHeight"]+"px"},
popup:function(sUrl,sName,oUserSetting){oUserSetting=oUserSetting||null;var sSetting="";if(oUserSetting){var oSetting={"width":0,"height":0,"top":(screen.height-oUserSetting.height)/2,"left":(screen.width-
oUserSetting.width)/2,"resizable":0,"alwaysRaised":1,"toolbar":0,"scrollbars":oUserSetting.scrollbars||0,"status":1},aSetting=[];for(var i in oSetting){if(aSetting[0])aSetting.push(",");aSetting.push(i);
aSetting.push("\x3d");aSetting.push(i in oUserSetting?oUserSetting[i]:oSetting[i])}sSetting=aSetting.join("")}var win=window.open(sUrl,sName,sSetting);if(win===null||typeof win=="undefined")alert("\ud31d\uc5c5 \ucc28\ub2e8\uc744 \ud574\uc81c\ud558\uc5ec \uc8fc\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4.\n\ud31d\uc5c5\uc774 \ucc28\ub2e8\ub418\uc5b4 \uc788\uc73c\uba74 \ubaa8\ub4e0 \uc11c\ube44\uc2a4\ub97c \uc62c\ubc14\ub85c \uc774\uc6a9\ud558\uc2e4 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.");
else win.focus();return win},
resizeImage:function(sName,nWidth,sTarget){var oTargetWin=sTarget?window.frames[sTarget]:window;if(typeof oTargetWin=="undefined")return;var oImage=oTargetWin.document.images[sName],nHeight=0;nWidth=nWidth||
this._DETAIL_IMG_RESIZE_WIDTH;if(typeof oImage=="undefined")return;oImage.style.cursor="pointer";if(typeof oImage.complete!="undefined"&&oImage.complete){nHeight=oImage.height;if(oImage.width>nWidth){oImage.style.height=
nWidth*(oImage.height/oImage.width)+"px";oImage.style.width=nWidth+"px";if(nHeight>0&&oImage.height<1)oImage.style.height=nHeight+"px"}}else setTimeout(function(){try{(parent&&typeof parent.naver.kin.pc.common!=
"undefined"?parent:window).naver.kin.pc.common.resizeImage(sName,nWidth,sTarget)}catch(e){}},100)},
loadAllDetailImage:function(bUsePhotoViewer){var aElDummySpan=$("div._container span._waitingForReplaceImage");if(!aElDummySpan)return;var wImageTemplate=doT.template('{{? it.isShowWatermark}}\x3cdiv class\x3d"watermark"{{? !it.isEquation}} onclick\x3d"imgOriginalView(\'{{\x3dit.imgId}}\')"{{?}}\x3e{{?}}\x3cimg {{? it.isEnablePhotoViewer}}class\x3d"_rolling_{{\x3dit.answerNo}}" {{?}}name\x3d"{{\x3dit.imgId}}" {{? it.width}}width\x3d"{{\x3dit.width}}" {{?}}{{? it.height}}height\x3d"{{\x3dit.height}}" {{?}}{{? it.align !\x3d null}}align\x3d"{{\x3dit.align}}" {{?}}src\x3d"{{\x3dit.imageSrcUrl}}"{{? !it.isEquation}} onload\x3d"imgAutoResize(\'{{\x3dit.imgId}}\')" onerror\x3d"imgError(\'{{\x3dit.imgId}}\')"{{? !it.isShowWatermark}} onclick\x3d"imgOriginalView(\'{{\x3dit.imgId}}\')"{{?}}{{?}} alt\x3d"\ucca8\ubd80 \uc774\ubbf8\uc9c0"\x3e{{? it.isShowWatermark}}\x3cspan class\x3d"mask" aria-hidden\x3d"true"\x3e\x3c/span\x3e\x3c/div\x3e{{?}}');
for(var i=0,len=aElDummySpan.length;i<len;i++){var wElDummySpan=$(aElDummySpan[i]);if(!wElDummySpan)continue;try{var sAlignAttribute=wElDummySpan.attr("data-align");if(sAlignAttribute&&!/^(left|right|middle|top|bottom)$/i.test(sAlignAttribute))sAlignAttribute=
null;wElDummySpan.replaceWith(wImageTemplate({"answerNo":wElDummySpan.attr("data-answer-no")||"","imgId":wElDummySpan.attr("data-image-id")||"","width":wElDummySpan.attr("data-width"),"height":wElDummySpan.attr("data-height"),
"align":sAlignAttribute||null,"imageSrcUrl":wElDummySpan.attr("data-thumb-image-src")||"","isEnablePhotoViewer":bUsePhotoViewer&&wElDummySpan.attr("data-photoviewer-yn")==="Y","isEquation":wElDummySpan.attr("data-equation-yn")===
"Y","isShowWatermark":wElDummySpan.attr("data-watermark-yn")==="Y"}))}catch(e){}}},
viewImage:function(imgName){var oImage=window.document.images[imgName];if(oImage&&oImage.src!=="undefined"){var aAttrs=oImage.attributes;if(aAttrs)for(var i=0,aLen=aAttrs.length;i<aLen;i++)if(aAttrs[i].name==
"nhn_extra_image")return true;try{this.openImage(imgName)}catch(e){}}else return false},
openImage:function(sName,nWidth,sTarget){var oTargetWin=sTarget?window.frames[sTarget]:window;if(typeof oTargetWin=="undefined")return;var oImage=oTargetWin.document.images[sName];nWidth=nWidth||this._DETAIL_IMG_RESIZE_WIDTH;
if(typeof oImage!="undefined"&&oImage.width<=nWidth){var sImgSrc=oImage.src.replace(/\?type=(.*)$/,"");window.open(sImgSrc)}},
notfoundImage:function(sName,sTmp,sTarget){var oTargetWin=sTarget?window.frames[sTarget]:window;if(typeof oTargetWin=="undefined")return;var oImage=oTargetWin.document.images[sName];if(typeof oImage!="undefined"){oImage.src=
"https://ssl.pstatic.net/static/kin/09renewal/img_nophoto2.gif";if(oImage.width>140||oImage.height>140){oImage.style.width=140+"px";oImage.style.height=140+"px"}}},
openLoginPopup:function(sDestUrl){var sUrl="/popup/login.nhn?destUrl\x3d"+encodeURIComponent(sDestUrl||location.href);this.popup(sUrl,"loginPopup",{width:410,height:337,top:200,left:300})},
clickBody:function(){$(document.body).click()},
getRandom:function(nMax){return Math.ceil(Math.random()*nMax)},
stripTags:function(sHTML){return sHTML.replace(/<\/?(?:h[1-5]|[a-z]+(?:\:[a-z]+)?)[^>]*>/ig,"")},
stripHTML:function(sHTML){return sHTML.replace(/(?:<[^>]*>|&nbsp;|\s*)/g,"")},
trim:function(sStr){if(!sStr)return sStr;return sStr.replace(/^[\t\s\u3000]+/,"").replace(/[\t\s\u3000]+$/,"")},
getNClicksClass:function(sArea,sCid,nRank){var aClass=[];aClass.push("_nclicks:"+sArea);if(sCid)aClass.push("i:"+sCid);if(nRank)aClass.push("r:"+nRank);if(aClass.length)return aClass.join(",")},
nClicks:function(sArea,sCid,nRank,oCustomEvent,gField){if(typeof sArea=="undefined")return false;if(typeof oCustomEvent=="undefined")return false;if(typeof oCustomEvent._event=="undefined")oCustomEvent=
$.Event(oCustomEvent);sCid=sCid||"";nRank=nRank||"";var oEvent=oCustomEvent;var elClick=oCustomEvent.currentTarget;var aLcs=sCid.match(/^(\d+)_(\d+)$/);if(aLcs&&aLcs[1]!="0"){var oParam={dirId:aLcs[1],
docId:aLcs[2]};var oAjax=$.ajax({url:"/ajax/getGdidAjax.nhn",data:oParam,async:false,method:"get",success:function(oResponse){var sGdId=oResponse.isSuccess?oResponse.result[0].gdId:sCid;nclk_v2(elClick,
sArea,sGdId,nRank)}.bind(this),
timeout:2E3,error:function(jqXHR,textStatus,errorThrown){nclk_v2(elClick,sArea,sCid,nRank)}.bind(this)})}else nclk_v2(elClick,sArea,sCid,nRank)},
getNclickRegExp:function(){return/_nclicks:([^\s"'>]*)/i},
getClickCodeRegExp:function(){return/_clickcode:([^\s"'>]*)/i},
callNclick:function(oEvent){return this.nClicksByRegExp(oEvent,this.getNclickRegExp())},
callClickCode:function(oEvent){return this.nClicksByRegExp(oEvent,this.getClickCodeRegExp())},
nClicksByRegExp:function(oEvent,sRegExp){var el=oEvent.target,re=sRegExp||this.getClickCodeRegExp(),sType=el.className.match(re),sCurrentHref=location.href;if(!sCurrentHref.match(/[#]$/))sCurrentHref+=
"#";if(!sType&&el.parentNode){el=el.parentNode;sType=el.className.match(re)}if(sType){var sArea=sType[1],sCid="",nRank="",aParam=sType[1].split(",");if(aParam.length>1){sArea=aParam.shift();for(var i=0,
len=aParam.length;i<len;i++)if(aParam[i].indexOf("i:")>-1)sCid=aParam[i].replace("i:","");else if(aParam[i].indexOf("r:")>-1)nRank=aParam[i].replace("r:","")}this.nClicks(sArea,sCid,nRank,oEvent)}if(el.tagName.toLowerCase()==
"a"&&el.href==sCurrentHref&&!$(oEvent.target).hasClass("_btn_profile")&&!$(oEvent.target).hasClass("_btn_profile_close")){oEvent.preventDefault();oEvent.stopPropagation();return false}return true},
parseQueryString:function(){var sQuery=window.location.search.substring(1);var aQuery=sQuery.split("\x26");var oParams={};for(var i=0;i<aQuery.length;i++){var aPair=aQuery[i].split("\x3d");oParams[aPair[0]]=
aPair[1]}return oParams},
getLevelPercent:function(min,max,current,isMaxLevel){if(min<0)min=0;if(current<0)return 0;if(current>=max||isMaxLevel)return 100;if(max<=0)return 0;var denominator=max-min;var numerator=current-min;return Math.round(numerator/
denominator*100)},
getRandomNumberByDigit:function(nDigit){return Math.floor(Math.random()*(Math.pow(10,nDigit)-Math.pow(10,nDigit-1)))+Math.pow(10,nDigit-1)},
insertPageInfo:function(nTotalCount,nCurrentPage,nCountPerPage,nPage,tTemplate,weNavigate,oOption){var nPage=nPage||10;var hasPre=nCurrentPage>nPage?"Y":"N";var lastPage=Math.floor((nTotalCount+nCountPerPage-
1)/nCountPerPage);var hasNext=Math.floor((nCurrentPage-1)/nPage)<Math.floor((lastPage-1)/nPage)?"Y":"N";var prePage=Math.floor((nCurrentPage-1)/nPage)*nPage;var nextPage=Math.floor((nCurrentPage-1)/nPage)*
nPage+nPage+1;var pageList=[];for(var i=prePage+1,j=0;i<(nextPage<=lastPage+1?nextPage:lastPage+1);i++,j++)pageList[j]=i;if(oOption===null)oOption={};var oPageInfo={"page":nCurrentPage,"hasPre":hasPre,
"hasNext":hasNext,"prePage":prePage,"nextPage":nextPage,"lastPage":lastPage,"pageList":pageList,"option":oOption};var tTemplateId=tTemplate||doT.template($("#pageTemplate").html());var weNavigateId=weNavigate||
$("#paginate");var result=tTemplateId({"pageInfo":oPageInfo,"nclickCode":naver.isLogin?"nql_lgd":"nql_nlg"});weNavigateId.empty();weNavigateId.append(result)},
insertOnlyPreNextPageInfo:function(nTotalCount,nCurrentPage,nCountPerPage,tTemplate,weNavigate,nCurrentPageOffset,nPrevPageOffset,nNextPageOffset,bIsSearch,oOption){var lastPage=Math.floor((nTotalCount+
nCountPerPage-1)/nCountPerPage);var hasPre=nCurrentPage>1?"Y":"N";var hasNext="Y";if(nCurrentPage>=lastPage||nNextPageOffset>nTotalCount)hasNext="N";var prePage=nCurrentPage-1;var nextPage=nCurrentPage+
1;if(oOption===null)oOption={};var oPageInfo={"page":nCurrentPage,"hasPre":hasPre,"hasNext":hasNext,"prePage":prePage,"nextPage":nextPage,"option":oOption,"currentPageOffset":nCurrentPageOffset,"prevPageOffset":nPrevPageOffset,
"nextPageOffset":nNextPageOffset,"isSearch":bIsSearch};var tTemplateId=tTemplate||doT.template($("#pageTemplate").html());var weNavigateId=weNavigate||$("#paginate");var result=tTemplateId({"pageInfo":oPageInfo,
"nclickCode":naver.isLogin?"nql_lgd":"nql_nlg"});weNavigateId.empty();weNavigateId.append(result)},
isNumber:function(sChar){return!isNaN(parseInt(sChar))&&isFinite(sChar)},
extractCssSelectorForLookUpChildElement:function(el){if(!el)return null;var className=el.className;if(!className||className.indexOf("_lookUpChildElement")<0)return null;return className.replace(/.*_lookUpChildElement\('([^\)]+)'\).*/g,
"$1")},
getElementByLookUpChildElment:function(elTarget){var sCssSelectorForLookUpChildElement=this.extractCssSelectorForLookUpChildElement(elTarget);if(!sCssSelectorForLookUpChildElement)return elTarget;var aChildElements=
$(sCssSelectorForLookUpChildElement,elTarget);if(aChildElements&&aChildElements.length>0)return aChildElements[0];return elTarget},
skipNavigation:function(sElementId){var oElement=$("#"+sElementId);if(!oElement)return;oElement[0].tabIndex=-1;oElement[0].focus()},
containSuicideKeywords:function(sString){if(!sString)return false;if(sString.indexOf("\uc790\uc0b4")===0)return true;sString=this.removeWhiteSpace(sString);if(!sString)return false;var aSuicideKeywords=
["\uac19\uc774\uc790\uc0b4","\uac19\uc774\uc790\uc0b4\uc5f0\ub77d","\uac19\uc774\uc790\uc0b4\ud558\uc2e4\ubd84","\uac19\uc774\uc8fd\uc744\uc0ac\ub78c","\uac19\uc774\uc8fd\uc744\uc5f0\ub77d","\uac19\uc774\uc8fd\uc790",
"\uace0\ud1b5\uc5c6\ub294\uc790\uc0b4","\uace0\ud1b5\uc5c6\ub294\uc790\uc0b4\ubc29\ubc95","\uace0\ud1b5\uc5c6\uc774\uc790\uc0b4","\uace0\ud1b5\uc5c6\uc774\uc8fd\ub294","\uace0\ud1b5\uc5c6\uc774\uc8fd\ub294\ubc95",
"\uae54\ub054\ud558\uac8c\uc8fd\ub294\ubc29\ubc95","\ub18d\uc57d\uc790\uc0b4","\ub3d9\ub9e5\ub04a\uae30","\ub3d9\ubc18\uc790\uc0b4","\ub3d9\ubc18\uc790\uc0b4\uc0ac\uc774\ud2b8","\ub3d9\ubc18\uc790\uc0b4\uce74\ud398",
"\ub3d9\ubc18\uc790\uc0b4\ud558\uc2e4\ubd84","\ubaa9\ub9e4\uace0\uc790\uc0b4","\ubaa9\ub9e4\ub294\ubc29\ubc95","\ubaa9\ub9e4\ub294\ubc95","\ubaa9\ub9e4\ub2e4\ub294\ubc95","\ubaa9\ub9e4\uc11c\uc790\uc0b4",
"\ubaa9\ub9e4\uc790\uc0b4","\ubc29\ubc95\uc790\uc0b4","\ubc88\uac1c\ud0c4\uc790\uc0b4","\ubd84\uc2e0\uc790\uc0b4","\uc0b4\uae30\uc2eb\ub2e4","\uc0b4\ud558\uc2e4\ubd84","\uc0b6\uc744\ub05d\ub0bc\ucabd\uc9c0",
"\uc0dd\uc744\uac19\uc774\ub9c8\uac10","\uc190\ubaa9\uae0b\uae30","\uc218\uba74\uc81c\uc790\uc0b4","\uc218\uba74\uc81c\uce58\uc0ac\ub7c9","\uc26c\uc6b4\uc790\uc0b4\ubc29\ubc95","\uc27d\uac8c\uc8fd\ub294\ubc29\ubc95",
"\uc27d\uac8c\uc8fd\ub294\ubc95","\uc544\uc8fd\uace0\uc2f6\ub2e4","\uc544\ud504\uc9c0\uc54a\uac8c\uc8fd\ub294\ubc29\ubc95","\uc548\uc544\ud504\uac8c\uc790\uc0b4","\uc548\uc544\ud504\uac8c\uc8fd\ub294\ubc29\ubc95",
"\uc5f0\ud0c4\uc790\uc0b4","\uc628\ub77c\uc778\uc0dd\uba85\uc0ac\ub791\ucea0\ud398\uc778","\uc778\ud130\ub137\uc790\uc0b4\ubaa8\uc784","\uc790*\uc0b4","\uc790+\uc0b4","\uc790+\uc0b4\uc0ac\uc774\ud2b8",
"\uc790+\uc0b4\ud558\uc2e4","\uc790+\uc0b4\ud558\uc2e4\ubd84","\uc790-\uc0b4","\uc790-\uc0b4\ud558\uc2e4\ubd84","\uc790.\uc0b4","\uc790/\uc0b4","\uc7901\uc0b4\ubc29\ubc95","\uc790\uc0b4","\uc790\uc0b4\uacb0\uc2ec",
"\uc790\uc0b4\uae4c\ud398","\uc790\uc0b4\ub3d9\ubc18\ucabd\uc9c0","\uc790\uc0b4\ubaa8\uc784","\uc790\uc0b4\ubb38\uc758","\uc790\uc0b4\ubc29\ubc95","\uc790\uc0b4\ubc95","\uc790\uc0b4\ube14\ub85c\uadf8",
"\uc790\uc0b4\uc0ac\uc774\ud2b8","\uc790\uc0b4\uc0dd\uac01\ucabd\uc9c0","\uc790\uc0b4\uc0dd\uac01\ucabd\uc9c0\uc5f0\ub77d","\uc790\uc0b4\uc2f8\uc774\ud2b8","\uc790\uc0b4\uc57d","\uc790\uc0b4\uc5f0\ub77d",
"\uc790\uc0b4\uc608\ubc29","\uc790\uc0b4\uc744\ud558\uace0\uc2f6\uc5b4\uc694","\uc790\uc0b4\uc885\ub958","\uc790\uc0b4\ucabd\uc9c0","\uc790\uc0b4\ucda9\ub3d9","\uc790\uc0b4\uce74\ud398","\uc790\uc0b4\ud338",
"\uc790\uc0b4\ud558\uace0\uc2dc\ud37c\uc694","\uc790\uc0b4\ud558\uace0\uc2f6\ub2e4","\uc790\uc0b4\ud558\uace0\uc2f6\uc5b4\uc694","\uc790\uc0b4\ud558\ub294\ubc29\ubc95","\uc790\uc0b4\ud558\ub294\ubc95",
"\uc790\uc0b4\ud558\ub824\ud569\ub2c8\ub2e4","\uc790\uc0b4\ud558\uc2e4\ubd84","\uc790\uc0b4\ud558\uc2e4\ubd84\ucabd\uc9c0","\uc790\uc0b4\ud560\uae4c","\uc790\uc0b4\ud560\uae4c?","\uc790\uc0b4\ud560\uae4c?\ub9d0\uae4c?",
"\uc790\uc0b4\ud560\uae4c\ub9d0\uae4c","\uc790\uc0b4\ud560\uae4c\ub9d0\uae4c..","\uc790\uc0b4\ud560\uae4c\ub9d0\uae4c?","\uc790\uc0b4\ud560\ubd84","\uc790\uc0b4\ud560\uc0ac\ub78c","\uc790\uc0b4\ud569\ub2c8\ub2e4",
"\uc790\uc0b4\ud655\uc2e4\ubc29\ubc95","\uc8fd\uace0\uc2f6\ub2e4","\uc8fd\uace0\uc2f6\uc2b5\ub2c8\ub2e4","\uc8fd\uace0\uc2f6\uc5b4","\uc8fd\uace0\uc2f6\uc5b4\uc694","\uc8fd\uace0\uc2f6\uc5b4\uc694.\uc815\ub9d0",
"\uc8fd\uace0\uc2f6\uc5b4\uc694\uc815\ub9d0","\uc8fd\uace0\uc2f6\uc744\ub54c","\uc8fd\ub294\ubc29\ubc95","\uc8fd\ub294\ubc95","\uc8fd\ub294\uc57d","\uc8fd\uc744\uae4c","\uc8fd\uc744\uae4c\ub9d0\uae4c",
"\uc8fd\uc744\uae4c\ub9d0\uae4c?","\uc8fd\uc790","\uc9c0\ud558\ucca0\uc790\uc0b4","\uc9c0\ud558\ucca0\ud22c\uc2e0","\uc9c0\ud558\ucca0\ud22c\uc2e0\uc790\uc0b4","\uc9c4\uc9c0\ud558\uac8c\uc790\uc0b4","\uc9d1\ub2e8\uc790\uc0b4",
"\ucabd\uc9c0\uc790\uc0b4","\ud22c\uc2e0\uc790\uc0b4","\ud3b8\ud558\uac8c\uc8fd\ub294\ubc29\ubc95","\ud3b8\ud558\uac8c\uc8fd\ub294\ubc95","\ud3b8\ud788\uc790\uc0b4","\ud55c\uac15\uc790\uc0b4","\ud55c\uac15\ud22c\uc2e0",
"\ud55c\uac15\ud22c\uc2e0\uc790\uc0b4","\ud568\uaed8\uc790\uc0b4","\ud568\uaed8\uc8fd\uc790","\ud655\uc2e4\ud55c\uc8fd\ub294\ubc29\ubc95","\ud655\uc2e4\ud788\uc8fd\ub294\ubc29\ubc95"];for(var i in aSuicideKeywords)if(aSuicideKeywords[i]==
sString)return true;return false},
getStringFromObject:function(oData){if(oData)return encodeURIComponent(JSON.stringify(oData));else return""},
getObjectFromString:function(sString){if(sString){try{sString=decodeURIComponent(sString)}catch(e){}try{return JSON.parse(sString)}catch(e){}}return null},
isIntoScreen:function(oBoundaryElement){if(!oBoundaryElement)return false;var nTop=$(document).scrollTop();var nBottom=nTop+$(document).height();var nTopOfBoundaryElement=$(oBoundaryElement).offset().top;
var nBottomOfBoundaryElement=nTopOfBoundaryElement+$(oBoundaryElement).height();return nBottomOfBoundaryElement>=nTop&&nTopOfBoundaryElement<=nBottom},
checkLoginAndRedirectToLoginForm:function(sReturnUrl){if(naver.isLogin)return;sReturnUrl=sReturnUrl||location.href;location.href="https://nid.naver.com/nidlogin.login?mode\x3dform\x26url\x3d"+encodeURIComponent(sReturnUrl)},
redirectUrlAfterLogIn:function(sUrl){if(!sUrl)return;if(sUrl===location.href){location.reload();return}var oRegExpForUrlValidation=new RegExp("^(?:https?://[^/]*kin.naver.com)?/(?:.*?)$","i");if(oRegExpForUrlValidation.test(sUrl))location.href=
sUrl;else location.reload()},
LocalStorage:{KEY:{PCWEB_COMMON_LOCAL_STORAGE_GETTER_SETTER_SUPPORT_FLAG:"kin.common.localStorageGetterSetterSupportFlag",PCWEB_COMMON_USER_LAST_VISIT_TIME:"kin.common.userLastVisitTime",PCWEB_HOME_VIEW_TYPE:"kin.home.viewType",
PCWEB_HOME_VIEW_TYPE_TOOLTIP_CLOSE_FLAG:"kin.home.layerNoanswerViewTypeTooltipClose",PCWEB_HOME_COUNT_PER_PAGE:"kin.home.noanswerCountPerPage",PCWEB_HOME_RECOMMEND_TAG_LAYER_CLOSED_TIME:"kin.home.recommendTagLayerClosedTime",
PCWEB_QUESTION_LIST_VIEW_TYPE:"kin.questionList.viewType",PCWEB_QUESTION_LIST_VIEW_TYPE_TOOLTIP_CLOSE_FLAG:"kin.questionList.layerNoanswerViewTypeTooltipClose",PCWEB_QUESTION_LIST_COUNT_PER_PAGE:"kin.questionList.noanswerCountPerPage",
PCWEB_QUESTION_LIST_RECOMMEND_TAG_LAYER_CLOSED_TIME:"kin.questionList.recommendTagLayerClosedTime",PCWEB_VOLUNTEER_VIEW_TYPE:"kin.volunteer.viewType",PCWEB_VOLUNTEER_VIEW_TYPE_TOOLTIP_CLOSE_FLAG:"kin.volunteer.layerNoanswerViewTypeTooltipClose",
PCWEB_VOLUNTEER_COUNT_PER_PAGE:"kin.volunteer.noanswerCountPerPage",PCWEB_VOLUNTEER_SORT_OPTION:"kin.volunteer.noanswerSortOption",PCWEB_END_THANKS_MESSAGE_CLICKED:"kin.detail.thanksMessageClicked",PCWEB_TODAY_KINUP:"kin.today.kinup",
PCWEB_WAIT_FOR_SELECTION:"kin.detail.waitForSelection",PCWEB_BINGO_LAYER_CLOSED_TIME:"kin.bingo.bingoLayerClosedTime",PCWEB_LNB_NEW_ALMIGHTY_GOD_INFO:"kin.lnb.newAlmightyGodInfo",PCWEB_LICENSE_PROMOTION_LAYER:"kin.license.promotionLayer",
PCWEB_TAX_ADJUSTMENT_EVENT_LAYER:"kin.detail.taxAdjustmentEventLayer",PCWEB_HALL_DIRECTORY_ELITE_USER_LAYER_CLOSED:"kin.hall.hallDirectoryEliteUserLayerClosed",PCWEB_LIKE_LIKE_LAYER_CLOSED:"kin.like.likeLayerClosed",
PCWEB_LIKE_USEFUL_LAYER_CLOSED:"kin.like.usefulLayerClosed",PCWEB_LIKE_HAHA_LAYER_CLOSED:"kin.like.hahaLayerClosed",PCWEB_LNB_NEW_ELITE_MARK_INFO:"kin.lnb.newEliteMarkInfo",PCWEB_END_PROMOTION_LAYER_CLOSED:"kin.detail.promotionLayerClosed",
PCWEB_QUSTION_WAIT_FOR_SELECTION_LAYER_CLOSED:"kin.question.waitForSelectionLayerClosed",PCWEB_LAYER_CLOSED_TIME:"kin.common.layerClosedTime",PCWEB_PARTNER_CENTER_ACTIVITY_LAYER:"kin.partnerCenter.activityLayer",
PCWEB_TICKET_LAYER_CLOSED_TIME:"kin.detail.rouletteTicketLayerClosedTime",PCWEB_ROULETTE_END_ALERT_LAYER_CLOSED_ROULETTE_NO:"kin.roulette.endAlertLayerRouletteNo",PCWEB_DETAIL_TUTORIAL_LAYER_CLOSE_FLAG:"kin.detail.tutorialLayerCloseFlag"},
_nExceedCheckLimit:0,_oRemoveTimeOut:null,_EXCEED_CHECK_BUFFER_SIZE:5,isSupportLocalStorage:function(){try{if(typeof localStorage!=="undefined"){localStorage.setItem(this.KEY.PCWEB_COMMON_LOCAL_STORAGE_GETTER_SETTER_SUPPORT_FLAG,
"Y");return true}}catch(e){}return false},
setItem:function(sKey,value){if(!this.isSupportLocalStorage())return false;try{if(this._isExceedLimit()){if(this._oRemoveTimeOut){clearTimeout(this._oRemoveTimeOut);this._oRemoveTimeOut=null}this._oRemoveTimeOut=
setTimeout(function(){this._removeExpiredItem()}.bind(this),200)}localStorage.setItem(sKey,value);
return true}catch(e){this._checkExceededError(e)}return false},
getItem:function(sKey){if(!this.isSupportLocalStorage())return null;try{return localStorage.getItem(sKey)}catch(e){}return null},
removeItem:function(sKey){if(!this.isSupportLocalStorage())return false;try{localStorage.removeItem(sKey);return true}catch(e){}return false},
_checkExceededError:function(oError){if(!oError)return;var sErrorName=oError.name;if(/exceeded/i.test(sErrorName)||sErrorName==="NS_ERROR_DOM_QUOTA_REACHED")localStorage.clear()},
_isExceedLimit:function(){try{if(!this._nExceedCheckLimit)this._nExceedCheckLimit=Object.keys(this.KEY).length+this._EXCEED_CHECK_BUFFER_SIZE}catch(e){return false}return localStorage.length>this._nExceedCheckLimit},
_removeExpiredItem:function(){if(!this.isSupportLocalStorage())return;try{var nLocalStorageKeyCount=localStorage.length;if(nLocalStorageKeyCount<1)return;var aValidKey=$.map(this.KEY,function(val){return val});
if(!aValidKey||aValidKey.length<1){localStorage.clear();return}var aRemoveTargetKey=[];for(var i=0;i<nLocalStorageKeyCount;i++){var sKey=localStorage.key(i);if(sKey&&aValidKey.has(sKey)===false)aRemoveTargetKey.push(sKey)}for(var j=
0,len=aRemoveTargetKey.length;j<len;j++)localStorage.removeItem(aRemoveTargetKey[j])}catch(e){}}},
SessionStorage:{KEY:{LIST_INFO:"kin.common.listInfo",ANSWER_FOLDER_MODULE_EXPANDED_LIST:"kin.detail.answer.folder_module.expand.list"},isSupportSessionStorage:function(){try{if(typeof sessionStorage!==
"undefined")return true}catch(e){}return false},
setItem:function(sKey,value){if(!this.isSupportSessionStorage())return false;try{sessionStorage.setItem(sKey,value);return true}catch(e){}return false},
getItem:function(sKey){if(!this.isSupportSessionStorage())return null;try{return sessionStorage.getItem(sKey)}catch(e){}return null},
removeItem:function(sKey){if(!this.isSupportSessionStorage())return false;try{sessionStorage.removeItem(sKey);return true}catch(e){}return false}},
_AFTERLOGGING_TYPE:{"LIST_NOANSWER_HOME":79,"LIST_INTEREST_DIRECTORY_HOME":80,"LIST_INTEREST_LOCATION_HOME":81,"LIST_INTEREST_KEYWORD_HOME":82,"LIST_RECEIVE_ONE2ONE_HOME":83,"SEARCH_TAG_NOANSWER_LIST_HOME":84},
saveListInfo:function(sAfterLoggingType,nPage,nDirId,nDocId,sSort){if(!sAfterLoggingType)return;var nType=this._AFTERLOGGING_TYPE[sAfterLoggingType];if(!nType||!nPage||!nDirId||!nDocId)return;var sItem=
nType+"_"+nPage+"_"+nDirId+"_"+nDocId+"_"+sSort;this.SessionStorage.setItem(this.SessionStorage.KEY.LIST_INFO,sItem)},
sendListInfo:function(nCurrDirId,nCurrDocId){if(!nCurrDirId||!nCurrDocId)return;var sItem=this.SessionStorage.getItem(this.SessionStorage.KEY.LIST_INFO);if(!sItem)return;var sItemArr=sItem.split("_");if(!sItemArr||
sItemArr.length!=5){this.SessionStorage.removeItem(this.SessionStorage.KEY.LIST_INFO);return}var nType=sItemArr[0];var nPage=sItemArr[1];var nDirId=sItemArr[2];var nDocId=sItemArr[3];var sSort=sItemArr[4];
this.SessionStorage.removeItem(this.SessionStorage.KEY.LIST_INFO);if(nDirId!=nCurrDirId||nDocId!=nCurrDocId)return;var postUrl=pcKinServiceProtocol+"://"+location.hostname+"/ajax/kplog.nhn?dirId\x3d"+nDirId+
"\x26docId\x3d"+nDocId+"\x26type\x3d"+nType+"\x26page\x3d"+nPage+"\x26sort\x3d"+sSort;this.sendUrl(postUrl)},
sendUrl:function(postUrl){try{if(document.images){var obj=new Image;obj.src=postUrl;obj.width=1;obj.height=1}else document.write('\x3cimg src\x3d"'+postUrl+'" width\x3d"1" height\x3d"1" border\x3d"0" /\x3e')}catch(e){return}},
removeServiceDefinedClassFromContents:function(){var aServiceDefinedClassList=["blind","highlight"];var nServiceDefinedClassCount=aServiceDefinedClassList.length;for(var i=0;i<nServiceDefinedClassCount;i++){var sServiceDefinedClass=
aServiceDefinedClassList[i];if(sServiceDefinedClass){var aTargetElementList=$("#container div._endContents ."+sServiceDefinedClass);if(aTargetElementList.existElements()){var nTargetElementCount=aTargetElementList.length;
for(var j=0;j<nTargetElementCount;j++)$(aTargetElementList[j]).removeClass(sServiceDefinedClass)}}}},
getLikeContentsInfo:function(sLikeContentsId){if(!sLikeContentsId)return null;var aLikeContentsInfo=sLikeContentsId.split("_");if(aLikeContentsInfo.length<2)return null;var sGdId=aLikeContentsInfo[0]+"_"+
aLikeContentsInfo[1];var nAnswerNo=0;if(aLikeContentsInfo.length>2){nAnswerNo=parseInt(aLikeContentsInfo[2],10)||-1;if(nAnswerNo<0)return null}return{"gdId":sGdId,"answerNo":nAnswerNo}},
isExpiredLayerClosedTime:function(sLayerElementId,nMaxHideTime){var sLayerClosedTimeList=this.LocalStorage.getItem(this.LocalStorage.KEY.PCWEB_LAYER_CLOSED_TIME);if(!sLayerClosedTimeList)return true;var oRegExpForLayerClosedTime=
new RegExp(";("+sLayerElementId+"):([0-9]+);");var aLayerClosedInfo=sLayerClosedTimeList.match(oRegExpForLayerClosedTime);if(!aLayerClosedInfo||aLayerClosedInfo.length<3)return true;if(!nMaxHideTime)return false;
var nLayerClosedTime=parseInt(aLayerClosedInfo[2]||0,10);var bIsExpired=false;if(typeof nMaxHideTime==="string"&&nMaxHideTime==="today")bIsExpired=this.getDateString(new Date)!==this.getDateString(new Date(nLayerClosedTime*
1E3));else if(this.isNumber(nMaxHideTime)){var nCurrentTime=Math.round((new Date).getTime()/1E3);bIsExpired=nCurrentTime>nLayerClosedTime+nMaxHideTime}else return false;if(bIsExpired===false)return false;
else{setTimeout(function(){sLayerClosedTimeList=sLayerClosedTimeList.replace(oRegExpForLayerClosedTime,function(sMatch,sElementId,nLayerClosedTime,nOffset,sTotalString){return";"});
this.LocalStorage.setItem(this.LocalStorage.KEY.PCWEB_LAYER_CLOSED_TIME,sLayerClosedTimeList)}.bind(this),0);
return true}},
saveLayerClosedTime:function(sLayerElementId){if(!sLayerElementId)return;setTimeout(function(){var sLayerClosedTimeList=this.LocalStorage.getItem(this.LocalStorage.KEY.PCWEB_LAYER_CLOSED_TIME);var nCurrentTime=
Math.round((new Date).getTime()/1E3);if(!sLayerClosedTimeList)sLayerClosedTimeList=";"+sLayerElementId+":"+nCurrentTime+";";else{var oRegExpForLayerClosedTime=new RegExp(";("+sLayerElementId+"):([0-9]+);");
if(oRegExpForLayerClosedTime.test(sLayerClosedTimeList))sLayerClosedTimeList=sLayerClosedTimeList.replace(oRegExpForLayerClosedTime,function(sMatch,sElementId,nLayerClosedTime,nOffset,sTotalString){return";"+
sLayerElementId+":"+nCurrentTime+";"});
else sLayerClosedTimeList=sLayerClosedTimeList+sLayerElementId+":"+nCurrentTime+";"}this.LocalStorage.setItem(this.LocalStorage.KEY.PCWEB_LAYER_CLOSED_TIME,sLayerClosedTimeList)}.bind(this),0)},
scrollToElement:function(sName){var wScrollTargetElement=$.getSingle("a[name\x3d"+sName+"]")||$(sName);if(wScrollTargetElement){var nOffsetTop=wScrollTargetElement.offset().top||0;setTimeout(function(){window.scrollTo(0,
nOffsetTop)},100)}},
getAutoTitle:function(sTitle,sContents){if(!sTitle||sTitle===""||!sContents||sContents==="")return sTitle;return $.trim(sTitle)!=$.trim(sContents)?sTitle+"...":sTitle},
toggleAriaHidden:function(el){var $el=$(el);if(!$el.existElements())return;var bAriaHidden=$el.attr("aria-hidden");if(bAriaHidden===null)return;if(bAriaHidden=="true")$el.attr({"aria-hidden":"false"});
else $el.attr({"aria-hidden":"true"})},
toggleAriaChecked:function(el){var $el=$(el);if(!$el.existElements())return;var bAriaChecked=$el.attr("aria-checked");if(bAriaChecked===null)return;if(bAriaChecked==="true")$el.attr({"aria-checked":"false"});
else $el.attr({"aria-checked":"true"})},
toggleAriaSelected:function(el){var $el=$(el);if(!$el.existElements())return;var bAriaChecked=$el.attr("aria-selected");if(bAriaChecked===null)return;if(bAriaChecked==="true")$el.attr({"aria-selected":"false"});
else $el.attr({"aria-selected":"true"})},
toggleAriaActiveDescendant:function(el,descId){var $el=$(el);if(!$el.existElements())return;var sCurrentDescId=$el.attr("aria-activedescendant");if(sCurrentDescId===descId)$el.attr({"aria-activedescendant":null});
else $el.attr({"aria-activedescendant":descId})}};
naver.kin.pc.common.Base64Encode=eg.Class({_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d",constructor:function(){},
encode:function(input){var output="";var chr1,chr2,chr3,enc1,enc2,enc3,enc4;var i=0;input=this._utf8_encode(input);while(i<input.length){chr1=input.charCodeAt(i++);chr2=input.charCodeAt(i++);chr3=input.charCodeAt(i++);
enc1=chr1>>2;enc2=(chr1&3)<<4|chr2>>4;enc3=(chr2&15)<<2|chr3>>6;enc4=chr3&63;if(isNaN(chr2))enc3=enc4=64;else if(isNaN(chr3))enc4=64;output=output+this._keyStr.charAt(enc1)+this._keyStr.charAt(enc2)+this._keyStr.charAt(enc3)+
this._keyStr.charAt(enc4)}return output},
decode:function(input){var output="";var chr1,chr2,chr3;var enc1,enc2,enc3,enc4;var i=0;input=input.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(i<input.length){enc1=this._keyStr.indexOf(input.charAt(i++));
enc2=this._keyStr.indexOf(input.charAt(i++));enc3=this._keyStr.indexOf(input.charAt(i++));enc4=this._keyStr.indexOf(input.charAt(i++));chr1=enc1<<2|enc2>>4;chr2=(enc2&15)<<4|enc3>>2;chr3=(enc3&3)<<6|enc4;
output=output+String.fromCharCode(chr1);if(enc3!=64)output=output+String.fromCharCode(chr2);if(enc4!=64)output=output+String.fromCharCode(chr3)}output=this._utf8_decode(output);return output},
_utf8_encode:function(string){string=typeof string!="string"?String(string):string;string=string.replace(/\r\n/g,"\n");var utftext="";for(var n=0;n<string.length;n++){var c=string.charCodeAt(n);if(c<128)utftext+=
String.fromCharCode(c);else if(c>127&&c<2048){utftext+=String.fromCharCode(c>>6|192);utftext+=String.fromCharCode(c&63|128)}else{utftext+=String.fromCharCode(c>>12|224);utftext+=String.fromCharCode(c>>
6&63|128);utftext+=String.fromCharCode(c&63|128)}}return utftext},
_utf8_decode:function(utftext){var string="";var i=0;var c=0,c1=0,c2=0,c3=0;while(i<utftext.length){c=utftext.charCodeAt(i);if(c<128){string+=String.fromCharCode(c);i++}else if(c>191&&c<224){c2=utftext.charCodeAt(i+
1);string+=String.fromCharCode((c&31)<<6|c2&63);i+=2}else{c2=utftext.charCodeAt(i+1);c3=utftext.charCodeAt(i+2);string+=String.fromCharCode((c&15)<<12|(c2&63)<<6|c3&63);i+=3}}return string}});
naver.kin.pc.common.LayerPopup=eg.Class({constructor:function(elBtn,layer){this._$element={};this._$element["helpBtn"]=elBtn;this.layer=layer;this._setupEvent()},
_setupEvent:function(){if(this._$element["helpBtn"]instanceof Array)for(var i=0,len=this._$element["helpBtn"].length;i<len;i++)this._$element["helpBtn"][i].on("click",this._onHelpLayer.bind(this));else this._$element["helpBtn"].on("click",
this._onHelpLayer.bind(this))},
showLayer:function(){if(!this._$element["popup"].visible()){this._$element["popup"].show();this._eventAttach()}},
hideLayer:function(){this._$element["popup"].hide();this._destroyLayer()},
isShow:function(){if(this._$element["popup"]&&this._$element["popup"].visible())return true;else return false},
_onHelpLayer:function(we){if(this.isShow())this.hideLayer();this._$element["popup"]=this._searchPopup(we);this.showLayer();we.preventDefault();we.stopPropagation();return false},
_searchPopup:function(we){var el=null;if(typeof this.layer=="object")el=this.layer;else if(typeof this.layer=="string"){var elTarget=we.currentElement;el=$.getSingle(this.layer,elTarget);elTarget=null}return el},
_eventAttach:function(){this._oElement["popup"].on("click",this._onClickLayer.bind(this))},
_onClickLayer:function(we){var elTarget=naver.kin.pc.common.getElementByLookUpChildElment(we.element);var sClassname=elTarget.className;if(sClassname.match(/_close/ig)){this._$element["popup"].hide();this._destroyLayer();
if(this._$element["helpBtn"]instanceof Array===false)this._$element["helpBtn"].focus()}elTarget=null;we.preventDefault();we.stopPropagation();return false},
_destroyLayer:function(){this._$element["popup"].off("click")},
destroy:function(){if(this._$element["helpBtn"]instanceof Array)for(var i=0,len=this._$element["helpBtn"].length;i<len;i++)this._$element["helpBtn"][i].off("click");else this._$element["helpBtn"].off("click");
this._$element=null}});
naver.kin.pc.common.SocialManager={postToMe2day:function(sTitle,sUrl,bNewWindow){if(!sTitle)return;sUrl=sUrl||location.href;bNewWindow=typeof bNewWindow==="undefined"?true:bNewWindow;var me2dayUrl="http://me2day.net/posts/new?new_post[body]\x3d"+
encodeURIComponent('"'+sTitle+'":'+sUrl);if(bNewWindow)window.open(me2dayUrl,"ME2DAY");else location.replace(me2dayUrl)},
postToFacebook:function(sTitle,sDesc,sImageUrl,sUrl,bNewWindow){bNewWindow=typeof bNewWindow==="undefined"?true:bNewWindow;sUrl=sUrl||location.href;var facebookUrl="http://www.facebook.com/sharer.php?s\x3d100\x26p[url]\x3d"+
encodeURIComponent(sUrl)+"\x26p[images][0]\x3d"+encodeURIComponent(sImageUrl)+"\x26p[title]\x3d"+encodeURIComponent(sTitle)+"\x26p[summary]\x3d"+encodeURIComponent(sDesc);if(bNewWindow)window.open(facebookUrl,
"FACEBOOK");else location.replace(facebookUrl)},
postToTwitter:function(sTitle,sUrl,bNewWindow){if(!sTitle)return;sUrl=sUrl||location.href;bNewWindow=typeof bNewWindow==="undefined"?true:bNewWindow;var twitterUrl="http://twitter.com/home?status\x3d"+
encodeURIComponent(sTitle+" : "+sUrl);if(bNewWindow)window.open(twitterUrl,"TWITTER");else location.replace(twitterUrl)}};
naver.kin.pc.common.Bingo={checkAndShowBingoCompleteLayer:function(oResponse){if(oResponse.isSuccess&&(oResponse.completeBingo||oResponse.completeQuest))$.cachedScript(naver.jsDir+"/naver.kin.pc.BingoCompleteLayer.js").done(function(){if(typeof naver.kin.pc.BingoCompleteLayer!==
"undefined")if(oResponse.completeBingo)new naver.kin.pc.BingoCompleteLayer({bingoId:oResponse.completeBingo.bingoId,questId:-1,isCompletedBingo:true});else if(oResponse.completeQuest)new naver.kin.pc.BingoCompleteLayer({bingoId:oResponse.completeQuest.bingoId,
questId:oResponse.completeQuest.questId,isCompletedQuest:true})})},
checkAndShowBingoCompleteLayerFromCookie:function(){var sFeedBack=cookie.read("bingo_feedback");if(sFeedBack){sFeedBack=sFeedBack.replace(/\\/g,"");if(sFeedBack!==""&&sFeedBack.slice(0,1)==='"')sFeedBack=
sFeedBack.substring(1,sFeedBack.length-1);var oFeedBackJson=null;try{oFeedBackJson=JSON.parse(sFeedBack)}catch(e){oFeedBackJson=JSON.parse(unescape(sFeedBack))}var oJson={isSuccess:true};if(oFeedBackJson.completeQuest===
true)oJson.completeQuest={completeQuest:true,bingoId:oFeedBackJson.bingoId,questId:oFeedBackJson.questId};if(oFeedBackJson.completeBingo===true)oJson.completeBingo={completeBingo:true,bingoId:oFeedBackJson.bingoId,
questId:oFeedBackJson.questId};naver.kin.pc.common.Bingo.checkAndShowBingoCompleteLayer(oJson)}cookie.erase("bingo_feedback")},
saveLayerClosedTimeToLocalStorage:function(sId){var oLocalStorage=naver.kin.pc.common.LocalStorage;if(oLocalStorage.isSupportLocalStorage()==false)return;var sLayerClosedTimeList=oLocalStorage.getItem(oLocalStorage.KEY.PCWEB_BINGO_LAYER_CLOSED_TIME);
var nCurrentTime=Math.round((new Date).getTime()/1E3);if(!sLayerClosedTimeList)sLayerClosedTimeList=";"+sId+":"+nCurrentTime+";";else{var oRegExpForLayerClosedTime=new RegExp(";("+sId+"):([0-9]+);");if(oRegExpForLayerClosedTime.test(sLayerClosedTimeList))sLayerClosedTimeList=
sLayerClosedTimeList.replace(oRegExpForLayerClosedTime,";"+sId+":"+nCurrentTime+";");else sLayerClosedTimeList=sLayerClosedTimeList+";"+sId+":"+nCurrentTime+";"}oLocalStorage.setItem(oLocalStorage.KEY.PCWEB_BINGO_LAYER_CLOSED_TIME,
sLayerClosedTimeList)}};
window.naver=window.naver||{};naver.kin=naver.kin||{};naver.kin.pc=naver.kin.pc||{};
naver.kin.pc.GNB=eg.Class({_$element:null,_$templete:null,_$flicking:null,_oOption:null,_bKeydown:false,_sKeydownValue:"",_oFlickingTimer:null,_nRollingDurationTime:1E3,_nRollingIntervalTime:4E3,_disabled:false,
_aAutoCompleteResult:null,_nAutoCompletePos:-1,AUTO_COMPLETE_AJAX_URL:"/ajax/common/searchAutoComplete.nhn",SEARCH_LIST_URL:"/search/list.nhn?query\x3d",AUTO_COMPLETE_COOKIE_NAME:"NaverSuggestUse",construct:function(htOption){this._oOption=
htOption||{};var d=this.getCookie(this.AUTO_COMPLETE_COOKIE_NAME);if(d)this._disabled=d=="use"?false:true;this._setElement();this._setEvent();this._exposeOneItem();this._setAutoComplete();if(this._disabled)this._setTriangleImg("hide")},
_setElement:function(){this._$element={};this._$element["rollingBanner"]=$.getSingle("ul._rolling_banner");this._$element["rollingBannerList"]=this._$element["rollingBanner"].find("li._rollingItem");this._$element["searchInput"]=
$("input._searchInput");this._$element["autoCompleteArea"]=$("div._autoCompleteArea");this._$element["searchBoxStartBtn"]=$("a._searchBoxStartBtn");this._$element["searchBoxEndBtn"]=$("a._searchBoxEndBtn");
this._$element["triangleBtn"]=$("#triangleBtn");this._$template={};this._$template["autoCompleteListTpl"]=doT.template($("#autoCompleteListTpl").html());this._$template["autoCompleteListEmptyTpl"]=doT.template($("#autoCompleteListEmptyTpl").html())},
_setEvent:function(){if(this._$element["searchInput"].existElements()){this._$element["searchInput"].on("keyup",this._onKeyupInput.bind(this));this._$element["searchInput"].on("keydown",this._onKeydownInput.bind(this));
this._$element["searchInput"].on("blur",function(){setTimeout(function(){this._hideAutoCompleteArea()}.bind(this),200)}.bind(this))}if(this._$element["autoCompleteArea"].existElements()){this._$element["autoCompleteArea"].on("click",
"li",this._onClickAutoCompleteList.bind(this));
this._$element["autoCompleteArea"].on("mouseenter","li",this._moveMouseAutoCompleteList.bind(this))}if(this._$element["searchBoxStartBtn"].existElements())this._$element["searchBoxStartBtn"].on("click",
this._onClickSearchBoxStartBtn.bind(this))},
_exposeOneItem:function(){var nItemSize=this._$element["rollingBannerList"].length;var nUserLastVisitTime=null;var oLocalStorage=naver.kin.pc.common.LocalStorage;if(oLocalStorage.isSupportLocalStorage()){nUserLastVisitTime=
oLocalStorage.getItem(oLocalStorage.KEY.PCWEB_COMMON_USER_LAST_VISIT_TIME);if(!nUserLastVisitTime)nUserLastVisitTime=0;oLocalStorage.setItem(oLocalStorage.KEY.PCWEB_COMMON_USER_LAST_VISIT_TIME,(new Date).getTime())}if(nItemSize>
0){var nItemIndex=Math.floor(Math.random()*nItemSize);var $elBannerItem=$(this._$element["rollingBannerList"].get(nItemIndex));if($elBannerItem.existElements()){var nBannerItemStartTime=(new Date($elBannerItem.data("startTime"))).getTime();
if(nUserLastVisitTime!==null&&nBannerItemStartTime>nUserLastVisitTime)$.getSingle("._newMark",$elBannerItem).show();$elBannerItem.show()}}},
_setRollingAnimation:function(){if(this._$element["rollingBanner"].existElements()&&this._$element["rollingBannerList"].length>1){this._$flicking=new eg.Flicking(this._$element["rollingBanner"],{duration:this._nRollingDurationTime,
hwAccelerable:eg.isHWAccelerable(),panelEffect:$.easing.linear,circular:true,horizontal:false});this._$flicking.disableInput();this._oFlickingTimer=setInterval($.proxy(function(){this._$flicking.next()},
this),this._nRollingIntervalTime)}},
_setAutoComplete:function(){if(!this._$element["searchInput"].existElements()||typeof naver.kin.pc.AutoComplete==="undefined"||this._oKinAutoComplete)return;this._oKinAutoComplete=new naver.kin.pc.AutoComplete({inputElement:this._$element["searchInput"],
autoCompleteUrl:this.AUTO_COMPLETE_AJAX_URL,autoCompleteParam:{},queryParamName:"query",fnAutoCompleteCallback:this._onResponseAutoComplete.bind(this),fnGetQuery:this._getKeydownValue.bind(this)})},
_setTriangleImg:function(state){if(state==="show"){if(!this._$element["triangleBtn"].hasClass("on"))this._$element["triangleBtn"].addClass("on")}else if(this._$element["triangleBtn"].hasClass("on"))this._$element["triangleBtn"].removeClass("on")},
_onKeydownInput:function(oEvent){this._bKeydown=true},
_onKeyupInput:function(oEvent){oEvent.stopPropagation();oEvent.preventDefault();if(this._disabled)return;if(this._bKeydown==false)return;else this._bKeydown=false;var sInputValue=this._$element["searchInput"].val();
if(sInputValue=="")return;var nKeyCode=oEvent.keyCode;if(nKeyCode===38||nKeyCode===40){this._moveAutoCompleteList(oEvent);return}else this._sKeydownValue=sInputValue;if(nKeyCode===13){this._moveSearchList(sInputValue);
return}},
_moveAutoCompleteList:function(oKey){var nKeyCode=oKey.keyCode;if(this._aAutoCompleteResult&&this._aAutoCompleteResult.length>0){if(nKeyCode===38){if(this._nAutoCompletePos>0)this._nAutoCompletePos--}else if(nKeyCode===
40)if(this._aAutoCompleteResult.length>this._nAutoCompletePos+1)this._nAutoCompletePos++;if(this._nAutoCompletePos<0)return;var sAutoCompleted=this._aAutoCompleteResult[this._nAutoCompletePos];this._$element["searchInput"].val(this._removeHighlighting(sAutoCompleted));
var oAutoList=$("li",this._$element["autoCompleteArea"]);for(var i=0;i<oAutoList.length;i++){var sAuto=oAutoList[i].className;var $value=$(oAutoList[i]);if($value.hasClass("atcmp_on"))$value.removeClass("atcmp_on");
if(sAuto==sAutoCompleted)$value.addClass("atcmp_on")}}},
_moveMouseAutoCompleteList:function(oEvent){if(this._disabled)return;oEvent.stopPropagation();oEvent.preventDefault();var $elTarget=oEvent.target;if(!$elTarget)return;var sAutoCompletedValue=oEvent.target.innerHTML;
if(!sAutoCompletedValue)return;sAutoCompletedValue=this._removeHighlighting(sAutoCompletedValue);if(this._aAutoCompleteResult&&this._aAutoCompleteResult.length>0){var oAutoList=$("li",this._$element["autoCompleteArea"]);
for(var i=0;i<oAutoList.length;i++){var sAuto=oAutoList[i].className;var $value=$(oAutoList[i]);if($value.hasClass("atcmp_on"))$value.removeClass("atcmp_on");if(sAuto==sAutoCompletedValue){$value.addClass("atcmp_on");
this._nAutoCompletePos=i}}}},
_onClickAutoCompleteList:function(oEvent){if(this._disabled)return;naver.kin.pc.common.callClickCode(oEvent);oEvent.stopPropagation();oEvent.preventDefault();if(!this._$element["searchInput"])return;var $elTarget=
oEvent.target;if(!$elTarget)return;var sAutoCompletedValue=oEvent.target.innerHTML;if(!sAutoCompletedValue)return;sAutoCompletedValue=this._removeHighlighting(sAutoCompletedValue);this._moveSearchList(sAutoCompletedValue)},
_removeHighlighting:function(sHighliting){if(sHighliting)return sHighliting.replace(/<\/?(?:h[1-5]|[a-z]+(?:\:[a-z]+)?)[^>]*>/ig,"");return sHighliting},
_refreshAutoCompleteArea:function(aResult){if(this._disabled)return;if(!aResult||!this._$element["autoCompleteArea"]){this._hideAutoCompleteArea();return}this._$element["autoCompleteArea"].html(this._$template["autoCompleteListTpl"]({result:aResult}));
this._$element["autoCompleteArea"].show()},
_hideAutoCompleteArea:function(){if(!this._$element["autoCompleteArea"])return;this._nAutoCompletePos=-1;this._aAutoCompleteResult=null;this._$element["autoCompleteArea"].html("");if(this._$element["autoCompleteArea"].visible())this._$element["autoCompleteArea"].hide()},
_moveSearchList:function(sInputValue){if(!sInputValue)return;document.location.href=this.SEARCH_LIST_URL+sInputValue},
_getKeydownValue:function(){if(this._disabled)return;if(this._$element["searchInput"].val()===""||this._$element["searchInput"].val()==null)return this._$element["searchInput"].val();return this._sKeydownValue},
_onResponseAutoComplete:function(oResponse){if(this._disabled)return;if(!oResponse){this._hideAutoCompleteArea();return}if(typeof oResponse.isSuccess!=="undefined"&&oResponse.isSuccess===false){this._hideAutoCompleteArea();
return}this._aAutoCompleteResult=this._getAutoCompleteResult(oResponse.result);this._nAutoCompletePos=-1;this._refreshAutoCompleteArea(this._aAutoCompleteResult);this._$element["searchBoxEndBtn"]=$("a._searchBoxEndBtn");
if(this._$element["searchBoxEndBtn"]){this._$element["searchBoxEndBtn"].on("click",this._onClickSearchBoxEndBtn.bind(this));this._$element["searchBoxEndBtn"].on("mouseenter",function(){$("img._searchBoxEndBtnHelp").show()});
this._$element["searchBoxEndBtn"].on("mouseleave",function(){$("img._searchBoxEndBtnHelp").hide()})}},
_getAutoCompleteResult:function(oResult){if(!oResult||!oResult.items||!oResult.query)return null;var aAutoCompleteResult=[];var aOriginalQueryResult=oResult.items[0];if(!aOriginalQueryResult)return null;
var nOriginalResultCount=aOriginalQueryResult.length;for(var i=0;i<nOriginalResultCount;i++){var aResultItem=aOriginalQueryResult[i];if(!aResultItem||aResultItem.length<1)continue;aAutoCompleteResult.push(this._addHighliting(aResultItem[0],
this._sKeydownValue))}if(aAutoCompleteResult.length>0)return aAutoCompleteResult;var aRevisedQueryResult=oResult.items[1];if(!aRevisedQueryResult)return null;var nRevisedResultCount=aRevisedQueryResult.length;
for(var j=0;j<nRevisedResultCount;j++){var aResultItem=aRevisedQueryResult[j];if(!aResultItem||aResultItem.length<1)continue;aAutoCompleteResult.push(this._addHighliting(aResultItem[0],this._sKeydownValue))}return aAutoCompleteResult.length<
1?null:aAutoCompleteResult},
_addHighliting:function(str,addHighlightStr){return str.replace(addHighlightStr,this._getHighlightingStr(addHighlightStr))},
_getHighlightingStr:function(addHighlightStr){return"\x3cem\x3e"+addHighlightStr+"\x3c/em\x3e"},
_onClickSearchBoxStartBtn:function(oEvent){if(this._disabled){this.setCookie(this.AUTO_COMPLETE_COOKIE_NAME,"use",21900,"naver.com");this._$element["autoCompleteArea"].show();this._setTriangleImg("show");
this._$element["searchInput"].focus();this._disabled=false;this._$element["autoCompleteArea"].html(this._$template["autoCompleteListEmptyTpl"]())}else{this._$element["autoCompleteArea"].hide();this._setTriangleImg("hide");
this._disabled=true}},
_onClickSearchBoxEndBtn:function(oEvent){this.setCookie(this.AUTO_COMPLETE_COOKIE_NAME,"unuse",21900,"naver.com");this._disabled=true;this._$element["autoCompleteArea"].hide();this._setTriangleImg("hide");
this._$element["searchInput"].focus()},
getCookie:function(e){var a=document.cookie.split(/\s*;\s*/);var d=new RegExp("^(\\s*"+e+"\\s*\x3d)");for(var c=0,b=a.length;c<b;c++)if(d.test(a[c]))return a[c].substr(RegExp.$1.length);return null},
setCookie:function(c,d,b,a){if(b==0)document.cookie=c+"\x3d"+escape(d)+"; path\x3d/; domain\x3d"+a+";";else document.cookie=c+"\x3d"+escape(d)+"; path\x3d/; expires\x3d"+(new Date((new Date).getTime()+
b*1E3*60*60*24)).toGMTString()+"; domain\x3d"+a+";"},
destroy:function(){if(!this._$element)return;if(this._$element["searchInput"]){this._$element["searchInput"].off("keyup");this._$element["searchInput"].off("keydown");this._$element["searchInput"].off("blur")}if(this._$element["autoCompleteArea"]){this._$element["autoCompleteArea"].off("click");
this._$element["autoCompleteArea"].off("mouseenter")}if(this._$element["searchBoxStartBtn"].existElements())this._$element["searchBoxStartBtn"].off("click");this._$element=this._$templete=this._oOption=
null;this._$flicking=this._oFlickingTimer=this._nRollingIntervalTime=this._nRollingDurationTime=null;this._nAutoCompletePos=this._aAutoCompleteResult=null;this.AUTO_COMPLETE_AJAX_URL=this.SEARCH_LIST_URL=
this.AUTO_COMPLETE_COOKIE_NAME=this._sKeydownValue=null}});
window.naver=window.naver||{};naver.kin=naver.kin||{};naver.kin.pc=naver.kin.pc||{};
naver.kin.pc.LNB=eg.Class({_CHECK_NEW_ALMIGHTY_GOD_URL:"/ajax/hasNewAlmightyGodAjax.nhn",_CHECK_NEW_ELITE_MARK_URL:"/people/elite/checkNewEliteMarkAjax.nhn",_$element:null,_oOption:null,_bMouseOver:false,
_$elCurrentLNBMenu:null,_oTimer:null,_nMouseOverInterval:100,_nMouseOutInterval:50,_bPeopleLnbMarked:false,_elMenuOnInit:false,_oDirectoryToIdx:{home:1,qna:{kin:2,12:2,13:2,20:2},questionList:3,other:{volunteer:4,
people:5,best:6,hall:7,myinfo:8,userinfo:8,profile:8,partnercenter:9,roulette:10,opendic:2,open100:2,knowhow:2}},construct:function(htOption){this._oOption=htOption||{};this._setElement();this._setEvent();
this._setCurrentMenu(htOption?htOption.questionType:null);this._setNewAlmightyGodMark();this._setNewEliteMark()},
_setElement:function(){this._$element={};this._$element["lnb"]=$("#au_lnb");this._$element["lnbMenu"]=$("ul#au_lnb \x3e li");this._$element["lnbMenuAnchor"]=$("ul#au_lnb \x3e li \x3e a");this._$element["containerFluidContentInner"]=
$("div._containerFluidContentInner");var $lastLnbMenu=this._$element["lnbMenu"].get(this._$element["lnbMenu"].length-1);if($lastLnbMenu){var $ulLnbSubMenu=$.getSingle("ul._lnbSubMenu",$lastLnbMenu);if($ulLnbSubMenu)this._$element["lastLnbSubMenuAnchor"]=
$.getSingle("li:last-child a",$ulLnbSubMenu)}},
_setEvent:function(){if(this._$element["lnbMenu"].existElements()){this._$element["lnbMenu"].on("mouseenter",this._eventOnLNBMenu.bind(this));this._$element["lnbMenu"].on("mouseleave",this._eventOnLNBMenu.bind(this))}if(this._$element["lnbMenuAnchor"].existElements()){this._$element["lnbMenuAnchor"].on("focus",
this._eventOnLNBMenu.bind(this));this._$element["lnbMenuAnchor"].on("blur",this._eventOnLNBMenu.bind(this))}if(this._$element["lastLnbSubMenuAnchor"])this._$element["lastLnbSubMenuAnchor"].on("keydown",
this._keydownFromLastLnbSubMenu.bind(this))},
_setNewAlmightyGodMark:function(){var sNewAlmightyGodInfo=naver.kin.pc.common.LocalStorage.getItem(naver.kin.pc.common.LocalStorage.KEY.PCWEB_LNB_NEW_ALMIGHTY_GOD_INFO);if(sNewAlmightyGodInfo){var oNewAlmightyGodInfo=
naver.kin.pc.common.getObjectFromString(sNewAlmightyGodInfo);if((new Date).getTime()-parseInt(oNewAlmightyGodInfo.checkTime||0,10)<864E5){if(oNewAlmightyGodInfo.flag=="Y")this._showNewAlmightyGodMark();
return}}var oAjax=$.ajax({url:this._CHECK_NEW_ALMIGHTY_GOD_URL,method:"get",timeout:5E3,success:function(oResponse){if(oResponse){var bHasNewAlmightyGod=oResponse.hasNewAlmightyGod||false;if(bHasNewAlmightyGod)this._showNewAlmightyGodMark();
naver.kin.pc.common.LocalStorage.setItem(naver.kin.pc.common.LocalStorage.KEY.PCWEB_LNB_NEW_ALMIGHTY_GOD_INFO,naver.kin.pc.common.getStringFromObject({flag:bHasNewAlmightyGod?"Y":"N",checkTime:(new Date).getTime()}))}}.bind(this)})},
_showNewAlmightyGodMark:function(){this._$element["peopleLnbBtn"]=$("#peopleLnbBtn");if(this._$element["peopleLnbBtn"].existElements()&&!this._bPeopleLnbMarked){this._$element["peopleLnbBtn"].html(this._$element["peopleLnbBtn"].html()+
'\x3cspan class\x3d"sp_common ico_new2"\x3eNEW\x3c/span\x3e');this._bPeopleLnbMarked=true}this._$element["kinRankMenuBtn"]=$("#kinRankMenuBtn");if(this._$element["kinRankMenuBtn"].existElements()){var $child=
this._$element["kinRankMenuBtn"].first();if($child.existElements())$child.html($child.html()+'\x3cspan class\x3d"new"\x3eNEW\x3c/span\x3e')}},
_setNewEliteMark:function(){var sNewEliteMarkInfo=naver.kin.pc.common.LocalStorage.getItem(naver.kin.pc.common.LocalStorage.KEY.PCWEB_LNB_NEW_ELITE_MARK_INFO);if(sNewEliteMarkInfo){var oNewEliteMarkInfo=
naver.kin.pc.common.getObjectFromString(sNewEliteMarkInfo);if((new Date).getTime()-parseInt(oNewEliteMarkInfo.checkTime||0,10)<36E5){if(oNewEliteMarkInfo.mark)this._showNewEliteMark(oNewEliteMarkInfo.mark);
return}}var oAjax=$.ajax({url:this._CHECK_NEW_ELITE_MARK_URL,method:"get",timeout:5E3,success:function(oResponse){if(oResponse&&oResponse.isSuccess){var oMark={bLnbPeopleNewMark:oResponse.isLnbPeopleNewMark||
false,bSnbEliteNewMark:oResponse.isSnbEliteNewMark||false,bSnbEliteIngMark:oResponse.isSnbEliteIngMark||false};this._showNewEliteMark(oMark);naver.kin.pc.common.LocalStorage.setItem(naver.kin.pc.common.LocalStorage.KEY.PCWEB_LNB_NEW_ELITE_MARK_INFO,
naver.kin.pc.common.getStringFromObject({mark:oMark,checkTime:(new Date).getTime()}))}}.bind(this)})},
_showNewEliteMark:function(oMark){if(oMark.bLnbPeopleNewMark){this._$element["peopleLnbBtn"]=$("#peopleLnbBtn");if(this._$element["peopleLnbBtn"].existElements()&&!this._bPeopleLnbMarked){this._$element["peopleLnbBtn"].html(this._$element["peopleLnbBtn"].html()+
'\x3cspan class\x3d"sp_common ico_new2"\x3eNEW\x3c/span\x3e');this._bPeopleLnbMarked=true}}if(oMark.bSnbEliteNewMark||oMark.bSnbEliteIngMark){this._$element["kinEliteMenuBtn"]=$("#kinEliteMenuBtn");if(this._$element["kinEliteMenuBtn"].existElements()){var $child=
this._$element["kinEliteMenuBtn"].first();if($child.existElements())if(oMark.bSnbEliteNewMark)$child.html($child.html()+'\x3cspan class\x3d"new"\x3eNEW\x3c/span\x3e');else $child.html($child.html()+'\x3ci class\x3d"ing"\x3e\ud22c\ud45c\uc911\x3c/i\x3e')}}},
_showLNBMenu:function($el){if(!$el)return;var aElUlList=$el.find("ul");if(aElUlList&&aElUlList.length>0){var elAnchor=$el.find("\x3ea");elAnchor.attr("aria-expanded",true);elAnchor.addClass("_ariaExpanded");
var $elMenu=$(aElUlList[0]);if($elMenu.existElements()){$elMenu.show();var nNavSubListWidth=$elMenu.width();$elMenu.css("marginLeft","-"+nNavSubListWidth/2+"px")}}},
_hideLNBMenu:function($el){if(!$el)return;var aElUlList=$el.find("ul");if(aElUlList&&aElUlList.length>0){var elAnchor=$el.find("\x3ea");elAnchor.attr("aria-expanded",false);elAnchor.removeClass("_ariaExpanded");
var $elMenu=$(aElUlList[0]);if($elMenu.existElements())$elMenu.hide()}},
_eventOnLNBMenu:function(oEvent){if(naver.isPortableDevice){oEvent.stopPropagation();oEvent.preventDefault();return}oEvent.stopPropagation();oEvent.preventDefault();var sEventType=oEvent.type;if(!sEventType)return;
var $elTarget=$(oEvent.currentTarget);if(oEvent&&(sEventType==="focus"||sEventType==="blur"))$elTarget=$elTarget.parent();if(!$elTarget.existElements())return;var elAnchor=$elTarget.find("\x3ea");var bAriaExpanded=
elAnchor.hasClass("_ariaExpanded");if(sEventType==="mouseenter"||sEventType==="focus"){this._bMouseOver=true;if(bAriaExpanded)return;else this._hideLNBMenu(this._$elCurrentLNBMenu);this._$elCurrentLNBMenu=
$elTarget;$elTarget.addClass("on");if($elTarget[0]!==this._elMenuOnInit)if(elAnchor){elAnchor.attr("aria-current","page");elAnchor.prepend('\x3cspan class\x3d"blind _selected"\x3e\uc120\ud0dd\ub428\x3c/span\x3e')}this._oTimer=
setTimeout(function(){this._showLNBMenu($elTarget)}.bind(this),this._nMouseOverInterval)}else if(sEventType==="mouseleave"||sEventType==="blur"){this._bMouseOver=false;
if(this._oTimer){clearTimeout(this._oTimer);this._oTimer=null}if($elTarget[0]!==this._elMenuOnInit){$elTarget.removeClass("on");if(elAnchor){elAnchor.attr("aria-current",null);elAnchor.find("span._selected").remove()}}setTimeout(function(){if(this._bMouseOver&&
$elTarget[0]===this._$elCurrentLNBMenu[0])return;if(sEventType==="blur"&&bAriaExpanded)return;this._hideLNBMenu($elTarget)}.bind(this),this._nMouseOutInterval)}},
_keydownFromLastLnbSubMenu:function(oEvent){if(oEvent.shiftKey||oEvent.keyCode!=9)return;var $lastLnbMenu=this._$element["lnbMenu"].last();if($lastLnbMenu){this._$elCurrentLNBMenu=null;setTimeout(function($lastLnbMenu){if(this._bMouseOver&&
$lastLnbMenu===this._$elCurrentLNBMenu[0])return;this._hideLNBMenu($lastLnbMenu)}.bind(this,$lastLnbMenu),this._nMouseOutInterval)}},
_setCurrentMenu:function(questionType){var nLnbIdx=this._oDirectoryToIdx.home||1;var sLocationPathName=location.pathname;var oMatches=sLocationPathName.match(/^\/([^\/]+)\//);if(oMatches){var sPath=oMatches[1];
if(sPath==="qna")if(sLocationPathName==="/qna/questionList.nhn")nLnbIdx=this._oDirectoryToIdx.questionList||2;else if(questionType&&(questionType==="TODAY"||questionType==="SUGGESTION"))nLnbIdx=-1;else if(oMatches=
location.search.match(/dirId=([0-9]+)/))nLnbIdx=this._oDirectoryToIdx["qna"][naver.kin.pc.common.getD1Id(oMatches[1])]||2;else nLnbIdx=this._oDirectoryToIdx["qna"]["kin"]||2;else nLnbIdx=this._oDirectoryToIdx["other"][sPath]||
-1}try{if(nLnbIdx>0){this._elMenuOnInit=this._$element["lnbMenu"].get(nLnbIdx-1);$(this._elMenuOnInit).addClass("on");this._setBlindMenuName($(this._elMenuOnInit));var elAnchor=$(this._elMenuOnInit).find("\x3ea");
elAnchor.attr("aria-current","page");elAnchor.prepend('\x3cspan class\x3d"blind _selected"\x3e\uc120\ud0dd\ub428\x3c/span\x3e')}}catch(e){}},
_setBlindMenuName:function(elLi){var menuName=elLi.find("\x3ea\x3eem").text();var elDiv=this._$element["containerFluidContentInner"];if(elDiv&&menuName!=="")elDiv.prepend('\x3ch3 class\x3d"blind"\x3e'+
menuName+" \uc601\uc5ed\x3c/h3\x3e")}});
window.naver=window.naver||{};naver.kin=naver.kin||{};naver.kin.pc=naver.kin.pc||{};naver.kin.pc.AutoComplete=naver.kin.pc.AutoComplete||{};
naver.kin.pc.AutoComplete=eg.Class({_oOption:null,_$inputElement:null,_sAutoCompleteUrl:null,_aAutoCompleteParam:null,_sQueryParamName:null,_fnAutoCompleteCallback:null,_fnGetQuery:null,_sLastInputValue:null,
_oInputCheckTimer:null,INPUT_WATCH_PERIOD:200,construct:function(htOption){if(!htOption)return;this._oOption=htOption;this._$inputElement=htOption.inputElement;this._sAutoCompleteUrl=htOption.autoCompleteUrl;
this._aAutoCompleteParam=htOption.autoCompleteParam;this._sQueryParamName=htOption.queryParamName||"query";this._fnAutoCompleteCallback=htOption.fnAutoCompleteCallback;this._fnGetQuery=htOption.fnGetQuery;
if(!this._$inputElement||!this._sAutoCompleteUrl||!this._aAutoCompleteParam||typeof this._fnAutoCompleteCallback!=="function")return;this._setEvent()},
_setEvent:function(){if(this._$inputElement&&this._$inputElement.existElements()){this._$inputElement.on("focus",this._onFocusInputElement.bind(this));this._$inputElement.on("blur",this._onBlurInputElement.bind(this))}},
_onFocusInputElement:function(oEvent){if(this._oInputCheckTimer)clearInterval(this._oInputCheckTimer);this._oInputCheckTimer=setInterval(this._watchInputChange.bind(this),this.INPUT_WATCH_PERIOD)},
_watchInputChange:function(){var sCurrentInputValue=this._fnGetQuery()||null;if(sCurrentInputValue===this._sLastInputValue)return;this._sLastInputValue=sCurrentInputValue;if(sCurrentInputValue)this._requestAutoComplete(sCurrentInputValue);
else this._fnAutoCompleteCallback(null)},
_onBlurInputElement:function(oEvent){if(!this._oInputCheckTimer)return null;clearInterval(this._oInputCheckTimer);this._oInputCheckTimer=null},
_requestAutoComplete:function(sInputValue){this._aAutoCompleteParam[this._sQueryParamName]=sInputValue;var oOption={url:this._sAutoCompleteUrl,method:"get",timeout:5E3,data:this._aAutoCompleteParam,success:this._onAutoCompleteResponse.bind(this),
error:function(jqXHR,textStatus,errorThrown){}};
$.ajax(oOption)},
_onAutoCompleteResponse:function(oResponse){if(!oResponse)return;this._fnAutoCompleteCallback(oResponse)},
destroy:function(){if(this._$inputElement!==null&&this._$inputElement.existElements()){this._$inputElement.off("focus");this._$inputElement.off("blur")}this._oOption=this._$inputElement=this._sAutoCompleteUrl=
this._aAutoCompleteParam=this._sQueryParamName=null;this._sLastInputValue=this._oInputCheckTimer=this.INPUT_WATCH_PERIOD=null}});
window.naver=window.naver||{};naver.kin=naver.kin||{};naver.kin.pc=naver.kin.pc||{};
naver.kin.pc.PWFilter=eg.Class({_PWFILTER_AJAX_URL:"/ajax/common/pwfilterJson.nhn",_DEFAULT_ELEMENT_ID:"contents",_DEFAULT_SERVICE_ID:"AA",_DEFAULT_UGC_ID:"UGC010",_RESULT_CODE_WHEN_CONTENTS_INCLUDE_PROHIBITED_WORDS:"03",
_MESSAGE:{TIMEOUT_ALERT:"\ub124\ud2b8\uc6cc\ud06c \uc9c0\uc5f0\uc774 \ubc1c\uc0dd\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.\n\uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.",ERROR_ALERT:"\uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.\n\uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
CONTENTS_INCLUDE_PROHIBITED_WORDS_ALERT:"\uc774\uc6a9\uc790\uc758 \uc2e0\uace0\uac00 \ub9ce\uc740 \ud45c\ud604\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.\n\ub2e4\ub978 \ud45c\ud604\uc744 \uc0ac\uc6a9\ud574 \uc8fc\uc138\uc694.\n"},
_sContents:null,_sMessageKey:null,_sServiceId:null,_sUgcId:null,_fnContainProhibitedWords:null,_fnError:null,_fnReset:null,_fnSubmit:null,construct:function(oInitOption){if(!oInitOption)return;this._sContents=
oInitOption.contents;this._sMessageKey=(oInitOption.id||this._DEFAULT_ELEMENT_ID)+":"+(new Date).getTime();this._sServiceId=oInitOption.serviceId||this._DEFAULT_SERVICE_ID;this._sUgcId=oInitOption.ugcId||
this._DEFAULT_UGC_ID;this._fnContainProhibitedWords=oInitOption.containProhibitedWordsFunction;this._fnError=oInitOption.errorCallbackFunction;this._fnReset=oInitOption.resetFunction;this._fnSubmit=oInitOption.submitFunction;
$(window).on("unload",this.destroy.bind(this))},
process:function(){if(!this._sContents)return;$.ajax({url:this._PWFILTER_AJAX_URL,method:"post",data:{content:this._sContents,messageKey:this._sMessageKey,serviceId:this._sServiceId,ugcTypeId:this._sUgcId},
timeout:3E3,success:this._pwFilterCallback.bind(this),error:function(jqXHR,textStatus,errorThrown){if(this._fnError)this._fnError();alert(textStatus==="timeout"?naver.kin.pc.common.MESSAGE.TIMEOUT:naver.kin.pc.common.MESSAGE.ERROR)}.bind(this)})},
_pwFilterCallback:function(oResponse){if(oResponse&&oResponse.isSuccess&&oResponse.result){var oResult=oResponse.result.message?oResponse.result.message.result||{}:{};if(oResult&&oResult.status&&oResult.status.code==
this._RESULT_CODE_WHEN_CONTENTS_INCLUDE_PROHIBITED_WORDS){var aFilteredWords=[];var aProhibitedWords=oResult.ugcTypes.ugcType.pwords;if(this._isArray(aProhibitedWords.pword))for(var i=0,len=aProhibitedWords.pword.length;i<
len;i++)aFilteredWords.push(aProhibitedWords.pword[i].name);else aFilteredWords.push(aProhibitedWords.pword.name);try{if(this._fnContainProhibitedWords)this._fnContainProhibitedWords(aFilteredWords);else{alert(this._MESSAGE.CONTENTS_INCLUDE_PROHIBITED_WORDS_ALERT+
aFilteredWords.join(", "));if(this._fnReset)this._fnReset()}}catch(e){}return}}if(this._fnSubmit)this._fnSubmit()},
_isArray:function(oObject){return Object.prototype.toString.call(oObject)=="[object Array]"},
destroy:function(){this._sContents=this._sMessageKey=this._sServiceId=this._sUgcId=this._fnContainProhibitedWords=this._fnError=this._fnReset=this._fnSubmit=null}});
window.naver=window.naver||{};naver.kin=naver.kin||{};naver.kin.pc=naver.kin.pc||{};
naver.kin.pc.SimpleBanner=eg.Class({_$element:null,_oOption:null,construct:function(htOption){this._oOption=htOption||{};if(!this._oOption)return;this._setElement();this._setEvent();this._setInitDisplay()},
_setElement:function(){this._$element={};this._$element["bannerArea"]=$("#"+this._oOption.sBannerId);this._$element["bannerCloseBtnList"]=this._$element["bannerArea"].find("._bannerClose")},
_setEvent:function(){if(this._$element["bannerCloseBtnList"].existElements())this._$element["bannerCloseBtnList"].on("click",this._onClickBannerCloseBtn.bind(this))},
_setInitDisplay:function(){if(this._$element["bannerArea"].existElements()&&!this._$element["bannerArea"].is(":visible"))this._$element["bannerArea"].show()},
_onClickBannerCloseBtn:function(oEvent){oEvent.preventDefault();oEvent.stopPropagation();if(this._$element["bannerArea"].is(":visible"))this._$element["bannerArea"].hide()}});
