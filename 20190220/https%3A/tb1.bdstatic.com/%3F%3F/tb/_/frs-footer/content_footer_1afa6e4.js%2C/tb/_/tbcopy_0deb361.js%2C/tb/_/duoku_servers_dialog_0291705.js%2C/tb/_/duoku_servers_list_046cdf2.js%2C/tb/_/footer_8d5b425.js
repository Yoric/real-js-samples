_.Module.define({path:"frs-footer/pagelet/content_footer",sub:{initial:function(t){var e=$(".editor_wrap_bright");t&&t.on("tab_change",function(t){var o=t.tab||"frs";"frs"===o?e.show():e.hide()})}}});_.Module.define({path:"tbui/widget/tbcopy/zero_clipboard",sub:{get:function(){return this.ZeroClipboard},getClient:function(e){return new this.ZeroClipboard(e)},initial:function(){var e=this;!function(t,n){"use strict";var r,a=t,i=a.document,o=a.navigator,l=a.setTimeout,s=a.Number.parseInt||a.parseInt,u=a.Number.parseFloat||a.parseFloat,c=a.Number.isNaN||a.isNaN,f=a.encodeURIComponent,p=a.Math,d=a.Date,h=a.ActiveXObject,y=a.Array.prototype.slice,v=a.Object.keys,g=a.Object.prototype.hasOwnProperty,m=function(){return"function"==typeof a.Object.defineProperty&&function(){try{var e={};return a.Object.defineProperty(e,"y",{value:"z"}),"z"===e.y}catch(t){return!1}}()?a.Object.defineProperty:void 0}(),b=function(e){return y.call(e,0)},w=function(e,t,n){if("function"==typeof t.indexOf)return t.indexOf(e,n);var r,a=t.length;for("undefined"==typeof n?n=0:0>n&&(n=a+n),r=n;a>r;r++)if(g.call(t,r)&&t[r]===e)return r;return-1},C=function(){var e,t,r,a,i,o,l=b(arguments),s=l[0]||{};for(e=1,t=l.length;t>e;e++)if(null!=(r=l[e]))for(a in r)if(g.call(r,a)){if(i=s[a],o=r[a],s===o)continue;o!==n&&(s[a]=o)}return s},x=function(e){var t,n,r,a;if("object"!=typeof e||null==e)t=e;else if("number"==typeof e.length)for(t=[],n=0,r=e.length;r>n;n++)g.call(e,n)&&(t[n]=x(e[n]));else{t={};for(a in e)g.call(e,a)&&(t[a]=x(e[a]))}return t},E=function(e,t){for(var n={},r=0,a=t.length;a>r;r++)t[r]in e&&(n[t[r]]=e[t[r]]);return n},T=function(e,t){var n={};for(var r in e)-1===w(r,t)&&(n[r]=e[r]);return n},j=function(e){if(null==e)return[];if(v)return v(e);var t=[];for(var n in e)g.call(e,n)&&t.push(n);return t},D=function(e){if(e)for(var t in e)g.call(e,t)&&delete e[t];return e},k=function(e,t){t in e&&"function"==typeof m&&m(e,t,{value:e[t],writable:!1,configurable:!0,enumerable:!0})},I=function(e){return function(){var t;return t=e.now?e.now():(new e).getTime()}}(d),O={bridge:null,version:"0.0.0",pluginType:"unknown",disabled:null,outdated:null,unavailable:null,deactivated:null,overdue:null,ready:null},N="11.0.0",z={},L={},_=null,S={ready:"Flash communication is established",error:{"flash-disabled":"Flash is disabled or not installed","flash-outdated":"Flash is too outdated to support ZeroClipboard","flash-unavailable":"Flash is unable to communicate bidirectionally with JavaScript","flash-deactivated":"Flash is too outdated for your browser and/or is configured as click-to-activate","flash-overdue":"Flash communication was established but NOT within the acceptable time limit"}},F=(function(){var e,t,n,r,a="ZeroClipboard.swf";if(!i.currentScript||!(r=i.currentScript.src)){var o=i.getElementsByTagName("script");if("readyState"in o[0])for(e=o.length;e--&&("interactive"!==o[e].readyState||!(r=o[e].src)););else if("loading"===i.readyState)r=o[o.length-1].src;else{for(e=o.length;e--;){if(n=o[e].src,!n){t=null;break}if(n=n.split("#")[0].split("?")[0],n=n.slice(0,n.lastIndexOf("/")+1),null==t)t=n;else if(t!==n){t=null;break}}null!==t&&(r=t)}}return r&&(r=r.split("#")[0].split("?")[0],a=r.slice(0,r.lastIndexOf("/")+1)+a),a}(),{swfPath:"//tb2.bdstatic.com/tb/img/ZCB_8fd7d9f.swf",trustedDomains:t.location.host?[t.location.host]:[],cacheBust:!0,forceEnhancedClipboard:!1,flashLoadTimeout:3e4,autoActivate:!0,bubbleEvents:!0,containerId:"global-zeroclipboard-html-bridge",containerClass:"global-zeroclipboard-container",swfObjectId:"global-zeroclipboard-flash-bridge",hoverClass:"zeroclipboard-is-hover",activeClass:"zeroclipboard-is-active",forceHandCursor:!1,title:null,zIndex:999999999}),$=function(e){if("object"==typeof e&&null!==e)for(var t in e)if(g.call(e,t))if(/^(?:forceHandCursor|title|zIndex|bubbleEvents)$/.test(t))F[t]=e[t];else if(null==O.bridge)if("containerId"===t||"swfObjectId"===t){if(!q(e[t]))throw new Error("The specified `"+t+"` value is not valid as an HTML4 Element ID");F[t]=e[t]}else F[t]=e[t];return"string"==typeof e&&e?g.call(F,e)?F[e]:void 0:x(F)},X=function(){return{browser:E(o,["userAgent","platform","appName"]),flash:T(O,["bridge"]),zeroclipboard:{version:jt.version,config:jt.config()}}},A=function(){return!!(O.disabled||O.outdated||O.unavailable||O.deactivated)},Y=function(e,t){var n,r,a,i={};if("string"==typeof e&&e)a=e.toLowerCase().split(/\s+/);else if("object"==typeof e&&e&&"undefined"==typeof t)for(n in e)g.call(e,n)&&"string"==typeof n&&n&&"function"==typeof e[n]&&jt.on(n,e[n]);if(a&&a.length){for(n=0,r=a.length;r>n;n++)e=a[n].replace(/^on/,""),i[e]=!0,z[e]||(z[e]=[]),z[e].push(t);if(i.ready&&O.ready&&jt.emit({type:"ready"}),i.error){var o=["disabled","outdated","unavailable","deactivated","overdue"];for(n=0,r=o.length;r>n;n++)if(O[o[n]]===!0){jt.emit({type:"error",name:"flash-"+o[n]});break}}}return jt},B=function(e,t){var n,r,a,i,o;if(0===arguments.length)i=j(z);else if("string"==typeof e&&e)i=e.split(/\s+/);else if("object"==typeof e&&e&&"undefined"==typeof t)for(n in e)g.call(e,n)&&"string"==typeof n&&n&&"function"==typeof e[n]&&jt.off(n,e[n]);if(i&&i.length)for(n=0,r=i.length;r>n;n++)if(e=i[n].toLowerCase().replace(/^on/,""),o=z[e],o&&o.length)if(t)for(a=w(t,o);-1!==a;)o.splice(a,1),a=w(t,o,a);else o.length=0;return jt},M=function(e){var t;return t="string"==typeof e&&e?x(z[e])||null:x(z)},H=function(e){var t,n,r;return e=G(e),e&&!nt(e)?"ready"===e.type&&O.overdue===!0?jt.emit({type:"error",name:"flash-overdue"}):(t=C({},e),tt.call(this,t),"copy"===e.type&&(r=st(L),n=r.data,_=r.formatMap),n):void 0},P=function(){if("boolean"!=typeof O.ready&&(O.ready=!1),!jt.isFlashUnusable()&&null===O.bridge){var e=F.flashLoadTimeout;"number"==typeof e&&e>=0&&l(function(){"boolean"!=typeof O.deactivated&&(O.deactivated=!0),O.deactivated===!0&&jt.emit({type:"error",name:"flash-deactivated"})},e),O.overdue=!1,ot()}},Z=function(){jt.clearData(),jt.deactivate(),jt.emit("destroy"),lt(),jt.off()},R=function(e,t){var n;if("object"==typeof e&&e&&"undefined"==typeof t)n=e,jt.clearData();else{if("string"!=typeof e||!e)return;n={},n[e]=t}for(var r in n)"string"==typeof r&&r&&g.call(n,r)&&"string"==typeof n[r]&&n[r]&&(L[r]=n[r])},V=function(e){"undefined"==typeof e?(D(L),_=null):"string"==typeof e&&g.call(L,e)&&delete L[e]},K=function(e){if(e&&1===e.nodeType){r&&(vt(r,F.activeClass),r!==e&&vt(r,F.hoverClass)),r=e,yt(e,F.hoverClass);var t=e.getAttribute("title")||F.title;if("string"==typeof t&&t){var n=it(O.bridge);n&&n.setAttribute("title",t)}var a=F.forceHandCursor===!0||"pointer"===mt(e,"cursor");xt(a),Ct()}},U=function(){var e=it(O.bridge);e&&(e.removeAttribute("title"),e.style.left="0px",e.style.top="-9999px",e.style.width="1px",e.style.top="1px"),r&&(vt(r,F.hoverClass),vt(r,F.activeClass),r=null)},q=function(e){return"string"==typeof e&&e&&/^[A-Za-z][A-Za-z0-9_:\-\.]*$/.test(e)},G=function(e){var t;if("string"==typeof e&&e?(t=e,e={}):"object"==typeof e&&e&&"string"==typeof e.type&&e.type&&(t=e.type),t){C(e,{type:t.toLowerCase(),target:e.target||r||null,relatedTarget:e.relatedTarget||null,currentTarget:O&&O.bridge||null,timeStamp:e.timeStamp||I()||null});var n=S[e.type];return"error"===e.type&&e.name&&n&&(n=n[e.name]),n&&(e.message=n),"ready"===e.type&&C(e,{target:null,version:O.version}),"error"===e.type&&(/^flash-(disabled|outdated|unavailable|deactivated|overdue)$/.test(e.name)&&C(e,{target:null,minimumVersion:N}),/^flash-(outdated|unavailable|deactivated|overdue)$/.test(e.name)&&C(e,{version:O.version})),"copy"===e.type&&(e.clipboardData={setData:jt.setData,clearData:jt.clearData}),"aftercopy"===e.type&&(e=ut(e,_)),e.target&&!e.relatedTarget&&(e.relatedTarget=J(e.target)),e=W(e)}},J=function(e){var t=e&&e.getAttribute&&e.getAttribute("data-clipboard-target");return t?i.getElementById(t):null},W=function(e){if(e&&/^_(?:click|mouse(?:over|out|down|up|move))$/.test(e.type)){var t=e.target,r="_mouseover"===e.type&&e.relatedTarget?e.relatedTarget:n,o="_mouseout"===e.type&&e.relatedTarget?e.relatedTarget:n,l=wt(t),s=a.screenLeft||a.screenX||0,u=a.screenTop||a.screenY||0,c=i.body.scrollLeft+i.documentElement.scrollLeft,f=i.body.scrollTop+i.documentElement.scrollTop,p=l.left+("number"==typeof e._stageX?e._stageX:0),d=l.top+("number"==typeof e._stageY?e._stageY:0),h=p-c,y=d-f,v=s+h,g=u+y,m="number"==typeof e.movementX?e.movementX:0,b="number"==typeof e.movementY?e.movementY:0;delete e._stageX,delete e._stageY,C(e,{srcElement:t,fromElement:r,toElement:o,screenX:v,screenY:g,pageX:p,pageY:d,clientX:h,clientY:y,x:h,y:y,movementX:m,movementY:b,offsetX:0,offsetY:0,layerX:0,layerY:0})}return e},Q=function(e){var t=e&&"string"==typeof e.type&&e.type||"";return!/^(?:(?:before)?copy|destroy)$/.test(t)},et=function(e,t,n,r){r?l(function(){e.apply(t,n)},0):e.apply(t,n)},tt=function(e){if("object"==typeof e&&e&&e.type){var t=Q(e),n=z["*"]||[],r=z[e.type]||[],i=n.concat(r);if(i&&i.length){var o,l,s,u,c,f=this;for(o=0,l=i.length;l>o;o++)s=i[o],u=f,"string"==typeof s&&"function"==typeof a[s]&&(s=a[s]),"object"==typeof s&&s&&"function"==typeof s.handleEvent&&(u=s,s=s.handleEvent),"function"==typeof s&&(c=C({},e),et(s,u,[c],t))}return this}},nt=function(e){var t=e.target||r||null,n="swf"===e._source;switch(delete e._source,e.type){case"error":w(e.name,["flash-disabled","flash-outdated","flash-deactivated","flash-overdue"])&&C(O,{disabled:"flash-disabled"===e.name,outdated:"flash-outdated"===e.name,unavailable:"flash-unavailable"===e.name,deactivated:"flash-deactivated"===e.name,overdue:"flash-overdue"===e.name,ready:!1});break;case"ready":var a=O.deactivated===!0;C(O,{disabled:!1,outdated:!1,unavailable:!1,deactivated:!1,overdue:a,ready:!a});break;case"copy":var i,o,l=e.relatedTarget;!L["text/html"]&&!L["text/plain"]&&l&&(o=l.value||l.outerHTML||l.innerHTML)&&(i=l.value||l.textContent||l.innerText)?(e.clipboardData.clearData(),e.clipboardData.setData("text/plain",i),o!==i&&e.clipboardData.setData("text/html",o)):!L["text/plain"]&&e.target&&(i=e.target.getAttribute("data-clipboard-text"))&&(e.clipboardData.clearData(),e.clipboardData.setData("text/plain",i));break;case"aftercopy":jt.clearData(),t&&t!==ht()&&t.focus&&t.focus();break;case"_mouseover":jt.activate(t),F.bubbleEvents===!0&&n&&(rt(C({},e,{type:"mouseover"})),rt(C({},e,{type:"mouseenter",bubbles:!1})));break;case"_mouseout":jt.deactivate(),F.bubbleEvents===!0&&n&&(rt(C({},e,{type:"mouseout"})),rt(C({},e,{type:"mouseleave",bubbles:!1})));break;case"_mousedown":yt(t,F.activeClass),F.bubbleEvents===!0&&n&&rt(C({},e,{type:e.type.slice(1)}));break;case"_mouseup":vt(t,F.activeClass),F.bubbleEvents===!0&&n&&rt(C({},e,{type:e.type.slice(1)}));break;case"_click":case"_mousemove":F.bubbleEvents===!0&&n&&rt(C({},e,{type:e.type.slice(1)}))}return/^_(?:click|mouse(?:over|out|down|up|move))$/.test(e.type)?!0:void 0},rt=function(e){if(e&&"string"==typeof e.type&&e){var t,n=e.target||e.srcElement||null,r=n&&n.ownerDocument||i,o={view:r.defaultView||a,canBubble:!0,cancelable:!0,detail:"click"===e.type?1:0,button:"number"==typeof e.which?e.which-1:"number"==typeof e.button?e.button:r.createEvent?0:1},l=C(o,e);n&&(r.createEvent&&n.dispatchEvent?(l=[l.type,l.canBubble,l.cancelable,l.view,l.detail,l.screenX,l.screenY,l.clientX,l.clientY,l.ctrlKey,l.altKey,l.shiftKey,l.metaKey,l.button,l.relatedTarget],t=r.createEvent("MouseEvents"),t.initMouseEvent&&(t.initMouseEvent.apply(t,l),n.dispatchEvent(t))):r.createEventObject&&n.fireEvent&&(t=r.createEventObject(l),n.fireEvent("on"+l.type,t)))}},at=function(){var e=i.createElement("div");return e.id=F.containerId,e.className=F.containerClass,e.style.position="absolute",e.style.left="0px",e.style.top="-9999px",e.style.width="1px",e.style.height="1px",e.style.zIndex=""+Et(F.zIndex),e},it=function(e){for(var t=e&&e.parentNode;t&&"OBJECT"===t.nodeName&&t.parentNode;)t=t.parentNode;return t||null},ot=function(){var e,t=O.bridge,n=it(t);if(!t){var r=dt(a.location.host,F),o="never"===r?"none":"all",l=ft(F),s=F.swfPath+ct(F.swfPath,F);n=at();var u=i.createElement("div");n.appendChild(u),i.body.appendChild(n);var c=i.createElement("div"),f="activex"===O.pluginType;c.innerHTML='<object id="'+F.swfObjectId+'" name="'+F.swfObjectId+'" width="100%" height="100%" '+(f?'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"':'type="application/x-shockwave-flash" data="'+s+'"')+">"+(f?'<param name="movie" value="'+s+'"/>':"")+'<param name="allowScriptAccess" value="'+r+'"/><param name="allowNetworking" value="'+o+'"/><param name="menu" value="false"/><param name="wmode" value="transparent"/><param name="flashvars" value="'+l+'"/></object>',t=c.firstChild,c=null,t.ZeroClipboard=jt,n.replaceChild(t,u)}return t||(t=i[F.swfObjectId],t&&(e=t.length)&&(t=t[e-1]),!t&&n&&(t=n.firstChild)),O.bridge=t||null,t},lt=function(){var e=O.bridge;if(e){var t=it(e);t&&("activex"===O.pluginType&&"readyState"in e?(e.style.display="none",function n(){if(4===e.readyState){for(var r in e)"function"==typeof e[r]&&(e[r]=null);e.parentNode&&e.parentNode.removeChild(e),t.parentNode&&t.parentNode.removeChild(t)}else l(n,10)}()):(e.parentNode&&e.parentNode.removeChild(e),t.parentNode&&t.parentNode.removeChild(t))),O.ready=null,O.bridge=null,O.deactivated=null}},st=function(e){var t={},n={};if("object"==typeof e&&e){for(var r in e)if(r&&g.call(e,r)&&"string"==typeof e[r]&&e[r])switch(r.toLowerCase()){case"text/plain":case"text":case"air:text":case"flash:text":t.text=e[r],n.text=r;break;case"text/html":case"html":case"air:html":case"flash:html":t.html=e[r],n.html=r;break;case"application/rtf":case"text/rtf":case"rtf":case"richtext":case"air:rtf":case"flash:rtf":t.rtf=e[r],n.rtf=r}return{data:t,formatMap:n}}},ut=function(e,t){if("object"!=typeof e||!e||"object"!=typeof t||!t)return e;var n={};for(var r in e)if(g.call(e,r)){if("success"!==r&&"data"!==r){n[r]=e[r];continue}n[r]={};var a=e[r];for(var i in a)i&&g.call(a,i)&&g.call(t,i)&&(n[r][t[i]]=a[i])}return n},ct=function(e,t){var n=null==t||t&&t.cacheBust===!0;return n?(-1===e.indexOf("?")?"?":"&")+"noCache="+I():""},ft=function(e){var t,n,r,i,o="",l=[];if(e.trustedDomains&&("string"==typeof e.trustedDomains?i=[e.trustedDomains]:"object"==typeof e.trustedDomains&&"length"in e.trustedDomains&&(i=e.trustedDomains)),i&&i.length)for(t=0,n=i.length;n>t;t++)if(g.call(i,t)&&i[t]&&"string"==typeof i[t]){if(r=pt(i[t]),!r)continue;if("*"===r){l=[r];break}l.push.apply(l,[r,"//"+r,a.location.protocol+"//"+r])}return l.length&&(o+="trustedOrigins="+f(l.join(","))),e.forceEnhancedClipboard===!0&&(o+=(o?"&":"")+"forceEnhancedClipboard=true"),"string"==typeof e.swfObjectId&&e.swfObjectId&&(o+=(o?"&":"")+"swfObjectId="+f(e.swfObjectId)),o},pt=function(e){if(null==e||""===e)return null;if(e=e.replace(/^\s+|\s+$/g,""),""===e)return null;var t=e.indexOf("//");e=-1===t?e:e.slice(t+2);var n=e.indexOf("/");return e=-1===n?e:-1===t||0===n?null:e.slice(0,n),e&&".swf"===e.slice(-4).toLowerCase()?null:e||null},dt=function(){var e=function(e,t){var n,r,a;if(null!=e&&"*"!==t[0]&&("string"==typeof e&&(e=[e]),"object"==typeof e&&"number"==typeof e.length))for(n=0,r=e.length;r>n;n++)if(g.call(e,n)&&(a=pt(e[n]))){if("*"===a){t.length=0,t.push("*");break}-1===w(a,t)&&t.push(a)}};return function(t,n){var r=pt(n.swfPath);null===r&&(r=t);var a=[];e(n.trustedOrigins,a),e(n.trustedDomains,a);var i=a.length;if(i>0){if(1===i&&"*"===a[0])return"always";if(-1!==w(t,a))return 1===i&&t===r?"sameDomain":"always"}return"never"}}(),ht=function(){try{return i.activeElement}catch(e){return null}},yt=function(e,t){if(!e||1!==e.nodeType)return e;if(e.classList)return e.classList.contains(t)||e.classList.add(t),e;if(t&&"string"==typeof t){var n=(t||"").split(/\s+/);if(1===e.nodeType)if(e.className){for(var r=" "+e.className+" ",a=e.className,i=0,o=n.length;o>i;i++)r.indexOf(" "+n[i]+" ")<0&&(a+=" "+n[i]);e.className=a.replace(/^\s+|\s+$/g,"")}else e.className=t}return e},vt=function(e,t){if(!e||1!==e.nodeType)return e;if(e.classList)return e.classList.contains(t)&&e.classList.remove(t),e;if("string"==typeof t&&t){var n=t.split(/\s+/);if(1===e.nodeType&&e.className){for(var r=(" "+e.className+" ").replace(/[\n\t]/g," "),a=0,i=n.length;i>a;a++)r=r.replace(" "+n[a]+" "," ");e.className=r.replace(/^\s+|\s+$/g,"")}}return e},gt=function(){var e=/\-([a-z])/g,t=function(e,t){return t.toUpperCase()};return function(n){return n.replace(e,t)}}(),mt=function(e,t){var n,r,i;return a.getComputedStyle?n=a.getComputedStyle(e,null).getPropertyValue(t):(r=gt(t),n=e.currentStyle?e.currentStyle[r]:e.style[r]),"cursor"!==t||n&&"auto"!==n||(i=e.tagName.toLowerCase(),"a"!==i)?n:"pointer"},bt=function(){var e,t,n,r=1;return"function"==typeof i.body.getBoundingClientRect&&(e=i.body.getBoundingClientRect(),t=e.right-e.left,n=i.body.offsetWidth,r=p.round(t/n*100)/100),r},wt=function(e){var t={left:0,top:0,width:0,height:0};if(e.getBoundingClientRect){var n,r,o,l=e.getBoundingClientRect();"pageXOffset"in a&&"pageYOffset"in a?(n=a.pageXOffset,r=a.pageYOffset):(o=bt(),n=p.round(i.documentElement.scrollLeft/o),r=p.round(i.documentElement.scrollTop/o));var s=i.documentElement.clientLeft||0,u=i.documentElement.clientTop||0;t.left=l.left+n-s,t.top=l.top+r-u,t.width="width"in l?l.width:l.right-l.left,t.height="height"in l?l.height:l.bottom-l.top}return t},Ct=function(){var e;if(r&&(e=it(O.bridge))){var t=wt(r);C(e.style,{width:t.width+"px",height:t.height+"px",top:t.top+"px",left:t.left+"px",zIndex:""+Et(F.zIndex)})}},xt=function(e){O.ready===!0&&(O.bridge&&"function"==typeof O.bridge.setHandCursor?O.bridge.setHandCursor(e):O.ready=!1)},Et=function(e){if(/^(?:auto|inherit)$/.test(e))return e;var t;return"number"!=typeof e||c(e)?"string"==typeof e&&(t=Et(s(e,10))):t=e,"number"==typeof t?t:"auto"},Tt=function(e){function t(e){var t=e.match(/[\d]+/g);return t.length=3,t.join(".")}function n(e){return!!e&&(e=e.toLowerCase())&&(/^(pepflashplayer\.dll|libpepflashplayer\.so|pepperflashplayer\.plugin)$/.test(e)||"chrome.plugin"===e.slice(-13))}function r(e){e&&(s=!0,e.version&&(p=t(e.version)),!p&&e.description&&(p=t(e.description)),e.filename&&(f=n(e.filename)))}var a,i,l,s=!1,c=!1,f=!1,p="";if(o.plugins&&o.plugins.length)a=o.plugins["Shockwave Flash"],r(a),o.plugins["Shockwave Flash 2.0"]&&(s=!0,p="2.0.0.11");else if(o.mimeTypes&&o.mimeTypes.length)l=o.mimeTypes["application/x-shockwave-flash"],a=l&&l.enabledPlugin,r(a);else if("undefined"!=typeof e){c=!0;try{i=new e("ShockwaveFlash.ShockwaveFlash.7"),s=!0,p=t(i.GetVariable("$version"))}catch(d){try{i=new e("ShockwaveFlash.ShockwaveFlash.6"),s=!0,p="6.0.21"}catch(h){try{i=new e("ShockwaveFlash.ShockwaveFlash"),s=!0,p=t(i.GetVariable("$version"))}catch(y){c=!1}}}}O.disabled=s!==!0,O.outdated=p&&u(p)<u(N),O.version=p||"0.0.0",O.pluginType=f?"pepper":c?"activex":s?"netscape":"unknown"};Tt(h);var jt=function(){return this instanceof jt?("function"==typeof jt._createClient&&jt._createClient.apply(this,b(arguments)),void 0):new jt};jt.version="2.0.0",k(jt,"version"),jt.config=function(){return $.apply(this,b(arguments))},jt.state=function(){return X.apply(this,b(arguments))},jt.isFlashUnusable=function(){return A.apply(this,b(arguments))},jt.on=function(){return Y.apply(this,b(arguments))},jt.off=function(){return B.apply(this,b(arguments))},jt.handlers=function(){return M.apply(this,b(arguments))},jt.emit=function(){return H.apply(this,b(arguments))},jt.create=function(){return P.apply(this,b(arguments))},jt.destroy=function(){return Z.apply(this,b(arguments))},jt.setData=function(){return R.apply(this,b(arguments))},jt.clearData=function(){return V.apply(this,b(arguments))},jt.activate=function(){return K.apply(this,b(arguments))},jt.deactivate=function(){return U.apply(this,b(arguments))};var Dt=0,kt={},It=0,Ot={},Nt={};C(F,{autoActivate:!0});var zt=function(e){var t=this;t.id=""+Dt++,kt[t.id]={instance:t,elements:[],handlers:{}},e&&t.clip(e),jt.on("*",function(e){return t.emit(e)}),jt.on("destroy",function(){t.destroy()}),jt.create()},Lt=function(e,t){var n,r,a,i={},o=kt[this.id]&&kt[this.id].handlers;if("string"==typeof e&&e)a=e.toLowerCase().split(/\s+/);else if("object"==typeof e&&e&&"undefined"==typeof t)for(n in e)g.call(e,n)&&"string"==typeof n&&n&&"function"==typeof e[n]&&this.on(n,e[n]);if(a&&a.length){for(n=0,r=a.length;r>n;n++)e=a[n].replace(/^on/,""),i[e]=!0,o[e]||(o[e]=[]),o[e].push(t);if(i.ready&&O.ready&&this.emit({type:"ready",client:this}),i.error){var l=["disabled","outdated","unavailable","deactivated","overdue"];for(n=0,r=l.length;r>n;n++)if(O[l[n]]){this.emit({type:"error",name:"flash-"+l[n],client:this});break}}}return this},_t=function(e,t){var n,r,a,i,o,l=kt[this.id]&&kt[this.id].handlers;if(0===arguments.length)i=j(l);else if("string"==typeof e&&e)i=e.split(/\s+/);else if("object"==typeof e&&e&&"undefined"==typeof t)for(n in e)g.call(e,n)&&"string"==typeof n&&n&&"function"==typeof e[n]&&this.off(n,e[n]);if(i&&i.length)for(n=0,r=i.length;r>n;n++)if(e=i[n].toLowerCase().replace(/^on/,""),o=l[e],o&&o.length)if(t)for(a=w(t,o);-1!==a;)o.splice(a,1),a=w(t,o,a);else o.length=0;return this},St=function(e){var t=null,n=kt[this.id]&&kt[this.id].handlers;return n&&(t="string"==typeof e&&e?n[e]?n[e].slice(0):[]:x(n)),t},Ft=function(e){if(Bt.call(this,e)){"object"==typeof e&&e&&"string"==typeof e.type&&e.type&&(e=C({},e));var t=C({},G(e),{client:this});Mt.call(this,t)}return this},$t=function(e){e=Ht(e);for(var t=0;t<e.length;t++)if(g.call(e,t)&&e[t]&&1===e[t].nodeType){e[t].zcClippingId?-1===w(this.id,Ot[e[t].zcClippingId])&&Ot[e[t].zcClippingId].push(this.id):(e[t].zcClippingId="zcClippingId_"+It++,Ot[e[t].zcClippingId]=[this.id],F.autoActivate===!0&&Rt(e[t]));var n=kt[this.id]&&kt[this.id].elements;-1===w(e[t],n)&&n.push(e[t])}return this},Xt=function(e){var t=kt[this.id];if(!t)return this;var n,r=t.elements;e="undefined"==typeof e?r.slice(0):Ht(e);for(var a=e.length;a--;)if(g.call(e,a)&&e[a]&&1===e[a].nodeType){for(n=0;-1!==(n=w(e[a],r,n));)r.splice(n,1);var i=Ot[e[a].zcClippingId];if(i){for(n=0;-1!==(n=w(this.id,i,n));)i.splice(n,1);0===i.length&&(F.autoActivate===!0&&Vt(e[a]),delete e[a].zcClippingId)}}return this},At=function(){var e=kt[this.id];return e&&e.elements?e.elements.slice(0):[]},Yt=function(){this.unclip(),this.off(),delete kt[this.id]},Bt=function(e){if(!e||!e.type)return!1;if(e.client&&e.client!==this)return!1;var t=kt[this.id]&&kt[this.id].elements,n=!!t&&t.length>0,r=!e.target||n&&-1!==w(e.target,t),a=e.relatedTarget&&n&&-1!==w(e.relatedTarget,t),i=e.client&&e.client===this;return r||a||i?!0:!1},Mt=function(e){if("object"==typeof e&&e&&e.type){var t=Q(e),n=kt[this.id]&&kt[this.id].handlers["*"]||[],r=kt[this.id]&&kt[this.id].handlers[e.type]||[],i=n.concat(r);if(i&&i.length){var o,l,s,u,c,f=this;for(o=0,l=i.length;l>o;o++)s=i[o],u=f,"string"==typeof s&&"function"==typeof a[s]&&(s=a[s]),"object"==typeof s&&s&&"function"==typeof s.handleEvent&&(u=s,s=s.handleEvent),"function"==typeof s&&(c=C({},e),et(s,u,[c],t))}return this}},Ht=function(e){return"string"==typeof e&&(e=[]),"number"!=typeof e.length?[e]:e},Pt=function(e,t,n){return e&&1===e.nodeType?(e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent&&e.attachEvent("on"+t,n),e):e},Zt=function(e,t,n){return e&&1===e.nodeType?(e.removeEventListener?e.removeEventListener(t,n,!1):e.detachEvent&&e.detachEvent("on"+t,n),e):e},Rt=function(e){if(e&&1===e.nodeType){var t=function(t){(t||a.event)&&jt.activate(e)};Pt(e,"mouseover",t),Nt[e.zcClippingId]={mouseover:t}}},Vt=function(e){if(e&&1===e.nodeType){var t=Nt[e.zcClippingId];"object"==typeof t&&t&&("function"==typeof t.mouseover&&Zt(e,"mouseover",t.mouseover),delete Nt[e.zcClippingId])}};jt._createClient=function(){zt.apply(this,b(arguments))},jt.prototype.on=function(){return Lt.apply(this,b(arguments))},jt.prototype.off=function(){return _t.apply(this,b(arguments))},jt.prototype.handlers=function(){return St.apply(this,b(arguments))},jt.prototype.emit=function(){return Ft.apply(this,b(arguments))},jt.prototype.clip=function(){return $t.apply(this,b(arguments))},jt.prototype.unclip=function(){return Xt.apply(this,b(arguments))},jt.prototype.elements=function(){return At.apply(this,b(arguments))},jt.prototype.destroy=function(){return Yt.apply(this,b(arguments))},jt.prototype.setText=function(e){return jt.setData("text/plain",e),this},jt.prototype.setHtml=function(e){return jt.setData("text/html",e),this},jt.prototype.setRichText=function(e){return jt.setData("application/rtf",e),this},jt.prototype.setData=function(){return jt.setData.apply(this,b(arguments)),this},jt.prototype.clearData=function(){return jt.clearData.apply(this,b(arguments)),this},jt.prototype.getFlashState=function(){return O},"function"==typeof define&&define.amd?define(function(){return jt}):"object"==typeof module&&module&&"object"==typeof module.exports&&module.exports?module.exports=jt:e.ZeroClipboard=jt}(function(){return this}())}}}),_.Module.define({path:"tbui/widget/tbcopy",requires:["tbui/widget/tbcopy/zero_clipboard"],sub:{text:"",initial:function(e){var t=$(e.ele),n=e.text,r=this.requireInstance("tbui/widget/tbcopy/zero_clipboard"),a=r.get();this.clip=new a(t),this.setText(n)},add:function(e){var t=$(e);return t.length?(this.clip.clip(t),this):!1},remove:function(e){var t=$(e);return"undefined"==typeof e||t.length?(this.clip.unclip(e),this):!1},elements:function(){return $(this.clip.elements())},setText:function(e){var t=this;return this.clip.off("copy"),this.clip.on("copy",function(n){if("function"==typeof e)t.text=e(n);else{if("string"!=typeof e)return!1;t.text=e}n.clipboardData.setData("text/plain",t.text),t.successCallback?t.successCallback():$.dialog.alert("\u590d\u5236\u6210\u529f\uff01")}),!0},getText:function(){return this.text},getFlashElement:function(){var e=this.clip.getFlashState();return e.bridge},setSuccessCallback:function(e){return this.successCallback=e,!0}}});_.Module.define({path:"entertainment-game/widget/duoku_servers_dialog",requires:["tbui/widget/tbcopy"],sub:{_dialog_tmp:{fail_html:['<div class="comforum_duoku_servers_dialog">','<!--div class="fail_img"></div-->','<div class="duoku_servers_qrcode_wrapper">','<div class="qrcode_content"></div>',"<p>\u626b\u63cf\u4e8c\u7ef4\u7801\u4e0b\u8f7d\u6e38\u620f</p>","</div>",'<div class="qrcode_right_area">',"<p>\u5df2\u88ab#{code_label}\u5149\u4e86\uff0c\u4f46\u53ef\u4ee5\u7ee7\u7eed\u4e0b\u8f7d\u54e6~</p>",'<div class="btns">','<a href="#{button_url}" class="j_duoku_download btn_default btn_middle" target="_blank">',"<span><em>\u7acb\u5373\u4e0b\u8f7d</em></span>","</a>","</div>","</div>","</div>"].join(""),cong_html:['<div class="comforum_duoku_servers_dialog">','<div class="duoku_servers_qrcode_wrapper">','<div class="qrcode_content"></div>',"<p>\u626b\u63cf\u4e8c\u7ef4\u7801\u4e0b\u8f7d\u6e38\u620f</p>","</div>",'<div class="qrcode_right_area">',"<p>\u60a8\u5df2\u7ecf#{code_label}\uff0c\u8d76\u7d27\u4e0b\u8f7d\u6e38\u620f\u5f00\u59cb\u5427</p>",'<p class="duoku_code j_duoku_code">#{code_title}\uff1a<span class="j_duoku_code_value duoku_code_value">#{game_code}</span></p>','<div class="btns">','<button class="j_duoku_copy duoku_copy btn_default btn_middle"><span><em>\u590d\u5236#{code_title}</em></span></button>','<a href="#{button_url}" class="j_duoku_download btn_default btn_middle" target="_blank">',"<span><em>\u7acb\u5373\u4e0b\u8f7d</em></span>","</a>","</div>","</div>","</div>"].join(""),hadcode_html:['<div class="comforum_duoku_servers_dialog">','<div class="duoku_servers_qrcode_wrapper">','<div class="qrcode_content"></div>',"<p>\u626b\u63cf\u4e8c\u7ef4\u7801\u4e0b\u8f7d\u6e38\u620f</p>","</div>",'<div class="qrcode_right_area">',"<p>\u60a8\u5df2\u7ecf#{code_label}\uff0c\u8d76\u5feb\u4e0b\u8f7d\u5427\u3002</p>",'<p class="duoku_code j_duoku_code">#{code_title}\uff1a<span class="j_duoku_code_value duoku_code_value">#{game_code}</span></p>','<div class="btns">','<button class="j_duoku_copy duoku_copy btn_default btn_middle"><span><em>\u590d\u5236#{code_title}</em></span></button>','<a href="#{button_url}" class="j_duoku_download btn_default btn_middle" target="_blank">',"<span><em>\u7acb\u5373\u4e0b\u8f7d</em></span>","</a>","</div>","</div>","</div>"].join("")},initial:function(){},showDialog:function(e){this.game=e.game,this.postTrack=e.postTrack,this.src=e.src,this.tbs=e.tbs,this._getCode()},_getCode:function(){var e=this,o="/game/duoku/applyToPlay",d=this.game,t=d.game_id,a=d.game_name,_=d.kaifu_id;this.postTrack("\u83b7\u53d6\u8d44\u683c",d),d&&$.post(o,{game_id:t,kaifu_id:_,game_name:a,tbs:this.tbs,src:this.src},function(o){var t=o.data&&(o.data.game_code||o.data.gift_code),a=o.no;d.applied&&(a=2),d.code_title=d.check_code?"\u6d4b\u8bd5\u7801":d.gift_code?"\u793c\u5305\u7801":"\u6d4b\u8bd5\u7801",d.code_label=d.check_code?"\u62a2\u5230\u4e86\u6d4b\u8bd5\u8d44\u683c":d.gift_code?"\u9886\u53d6\u4e86\u6e38\u620f\u793c\u5305":"\u62a2\u5230\u4e86\u6d4b\u8bd5\u8d44\u683c",0==a?(e.postTrack("\u62a2\u53f7\u6210\u529f\u6d6e\u5c42\u5c55\u793a",d,{},"view"),e._showDialog("cong_html","\u606d\u559c\u60a8",d,t)):1==a?(d.code_label=d.gift_code?"\u9886":"\u62a2",e.postTrack("\u5931\u8d25\u6d6e\u5c42\u5c55\u793a",d,{},"view"),e._showDialog("fail_html","\u5f88\u9057\u61be... ...",d,t)):2==a?(e.postTrack("\u5df2\u62a2\u8fc7\u53f7\u6d6e\u5c42\u5c55\u793a",d,{},"view"),e._showDialog("hadcode_html","\u60a8\u5df2\u7ecf\u62a2\u8fc7\u55bd~",d,t)):4==a?e.requireInstanceAsync("common/widget/LoginDialog",["","userBar"]):alert("\u670d\u52a1\u5668\u62bd\u98ce")})},_showDialog:function(e,o,d,t){var a=new $.dialog({html:$.tb.format(this._dialog_tmp[e],{button_url:d.button_url,game_name:d.game_name,game_code:t,code_label:d.code_label,code_title:d.code_title}),title:o,width:436,height:156,draggable:!1,closeable:!0});$.JsLoadManager.use("//tb1.bdstatic.com/tb/static-entertainment-game/qrcode_665d0df.js",function(){new window.QRCode($(".comforum_duoku_servers_dialog .qrcode_content")[0],{text:d.download_url,width:128,height:128})}),t&&(a.element.find(".j_duoku_copy, .j_duoku_code").show(),this.tbcopy?this.tbcopy.add(a.element.find(".j_duoku_copy")):this.tbcopy=this.requireInstance("tbui/widget/tbcopy",{ele:a.element.find(".j_duoku_copy")}),this.tbcopy.setText($(".comforum_duoku_servers_dialog .j_duoku_code_value").text()));var _=this;a.element.on("click",".j_duoku_download",function(){_.postTrack("",d,"","download")}),a.element.on("click",".j_duoku_copy",function(){_.postTrack("\u590d\u5236\u6309\u94ae",d)})}}});_.Module.define({path:"entertainment-game/widget/duoku_servers_list",requires:["entertainment-game/widget/duoku_servers_dialog"],sub:{_btn_list_tmp:{get_code:['<li class="j_dsh_game" data-index="#{index}">','<a href="#{thread_url}" target="_blank"><img src="#{icon_url}"></a>','<span class="game_title"><a href="#{thread_url}" target="_blank">#{game_name}</a></span>','<a href="#{get_code_action}" target="_blank" class="get_code_btn">','<div class="#{platform_class} get_code_icon"></div>',"<span>#{apply_text}</span>","</a>","</li>"].join("")},locateMap:{frs:"p0117",pb:"p0118"},initial:function(e){this.redirectUrl=e.redirectUrl,this.$wrapper=$("#duoku_servers_list");var t=this;this._loader().done(function(e){t._render(e.data),t.dialog=t.requireInstance("entertainment-game/widget/duoku_servers_dialog")}),this._bindEvents()},_loader:function(){var e="/game/duoku/getHotGames?timestamp="+(new Date).getTime(),t=$.getJSON(e);return t},_formatRedirectUrl:function(e,t){for(var a=e.split("?"),r=a[0],i=a[1].split("&"),n={},o=[],d=0,_=i.length;_>d;d++){var l=i[d],s=l.split("=")[0],c=l.split("=")[1];n[s]=c}n._t=+new Date,t&&(delete n.client_type,delete n.refer,delete n.url,delete n.url,delete n.fid,delete n.fname,delete n.page,delete n.type,delete n.ie);for(var g in n)n.hasOwnProperty(g)&&n[g]&&o.push(g+"="+n[g]);return["http://",$.tb.location.getHost(),r,"?",o.join("&")].join("")},getRedirectUrl:function(e,t,a,r,i,n){var o=[this._formatRedirectUrl(this.redirectUrl,n),"location=p0012","obj_ref=3000601","obj_id="+i,"obj_name="+encodeURIComponent(r),"type="+a,"tbjump="+encodeURIComponent(e),"loc_param="+t].join("&");return o},_render:function(e){e=e||[],this.games=e,0==this.games.length&&this.$wrapper.hide();var t=this.$wrapper.find(".servers_list_wrapper"),a="",r=e.length;r=r>7?7:r;for(var i,n=0;r>n;n++){var o=e[n];o.qrcode_url=this.getRedirectUrl(o.redirect_url,"qr_code","download",o.game_name,o.game_id,!0),o.button_url=this.getRedirectUrl(o.redirect_url,"button","click",o.game_name,o.game_id),i="android"==o.supported_os.toLowerCase()?"get_code_android":"get_code_iphone",a+=$.tb.format(this._btn_list_tmp.get_code,{game_name:o.game_name,thread_url:o.thread_url,icon_url:o.icon_url,platform_class:i,apply_text:o.applied?"\u5df2\u9886\u53d6":o.not_available?"\u5e93\u5b58\u544a\u6025":o.check_code?"\u83b7\u53d6\u8d44\u683c":o.gift_code?"\u9886\u53d6\u793c\u5305":"-1"==o.download_url?"\u4e86\u89e3\u8be6\u60c5":"\u7acb\u5373\u4e0b\u8f7d",get_code_action:o.applied||o.not_available||o.check_code||o.gift_code?"javascript:;":"-1"==o.download_url?o.thread_url:o.download_url,index:n})}t.html(a)},_bindEvents:function(){var e=this;this.$wrapper.on("click",".get_code_btn",function(t){if("javascript:;"==$(t.currentTarget).tbattr("href"))e._getGameCode(t);else{var a=$(t.currentTarget).closest(".j_dsh_game").tbattr("data-index"),r=e.games[a];e._postTrack("",r,"","download")}}),this.$wrapper.on("click",".servers_detail_link",function(){e._postTrack("\u66f4\u591a\u94fe\u63a5")})},_getGameCode:function(e){var t=this,a=$(e.currentTarget).closest(".j_dsh_game").tbattr("data-index"),r=this.games[a];return t.dialog.showDialog({tbs:PageData.tbs,game:r,postTrack:$.proxy(t._postTrack,t),src:"list"}),!1},_postTrack:function(e,t,a,r){e||(e=this.locateMap[PageData.product]),"undefined"==typeof r&&(r="click"),a=a||{},a=$.extend({obj_ref:3000603},a),t&&(a=$.extend({obj_name:t.game_name,obj_game_id:t.game_id},a)),$.stats.track(e,"mg_pioneerba","",r,a)}}});_.Module.define({path:"common/widget/footer",sub:{initial:function(){this._handleEvents()},_handleEvents:function(){var i=$("#btnFroceToPad");i.bind("click",function(){$.cookie("tb_device",null);var i=window.location.href.toString();-1!==i.indexOf("kw")&&-1===i.indexOf("ie=utf-8")&&(i+=-1!==i.indexOf("?")?"&ie=utf-8":"?ie=utf-8"),$.tb.location.setHref(i)})}}});