KISSY.add("mui/datalazyload/index",function(t,e,n,a,o){var i=t.Env.host,r=i.document,l="data-ks-lazyload",c="ks-datalazyload",f="-custom",s="default",u="none",d="scroll",m="touchmove",g="resize",h=100,_=0,v="img-ks-lazyload",p,y;if(i.navigator&&i.navigator.userAgent){p=function(t){if(/Android (\d+\.\d+)/i.test(t)){if(parseFloat(RegExp["$1"])<4.3){return false}}return true}(i.navigator.userAgent,o)}function w(t){var n=e.scrollLeft(),a=e.scrollTop();if(t.getBoundingClientRect){var o=t.getBoundingClientRect(),i=document,r=i.body,l=i&&i.documentElement,c=window.getComputedStyle&&window.getComputedStyle(t).zoom||1;n+=o.left*c-(l.clientLeft||r.clientLeft||0);a+=o.top*c-(l.clientTop||r.clientTop||0)}return{left:n,top:a}}function b(t){var e,n,a=[],o;return function(i,r){if(r!==0&&!r){r=1}if(r&1&&!n){n=true;t(function(t){e=t;while(o=a.shift()){try{o&&o.apply(null,[e])}catch(n){setTimeout(function(){throw n},0)}}})}if(e){i&&i.apply(null,[e]);return e}if(!(r&2)){i&&a.push(i)}return e}}function A(e,n,a){var o,i=0,r=0,n=n||150;function l(){if(o){o.cancel();o=0}i=t.now();e.apply(a||this,arguments);r=t.now()}return t.mix(function(){if(!i||r>=i&&t.now()-r>n||r<i&&t.now()-i>n*8){l()}else{if(o){o.cancel()}o=t.later(l,n,0,null,arguments)}},{stop:function(){if(o){o.cancel();o=0}}})}function k(t,e,n){var a=t.length;function o(){a?t[--a].call(null,e,o):n(e)}o()}function R(t,n,a){if(!t.offsetWidth){return false}var o=w(t),i=window.getComputedStyle&&window.getComputedStyle(t).zoom||1,r=true,l,c=o.left,f=o.top,s={left:c,top:f,right:c+(t._ks_lazy_width||(t._ks_lazy_width=e.outerWidth(t)*i)),bottom:f+(t._ks_lazy_height||(t._ks_lazy_height=e.outerHeight(t)*i))};l=I(n,s);if(l&&a){r=I(a,s)}return r&&l}function C(t){if(/^(loaded|complete)$/.test(document.readyState)){return t()}if(window.addEventListener){return window.addEventListener("load",t,false)}if(window.attachEvent){return window.attachEvent("onload",t)}}function S(n,a){var o=this;if(!(o instanceof S)){return new S(n,a)}var i=n;if(!t.isPlainObject(i)){i=a||{};if(n){i.container=n}}S.superclass.constructor.call(o,i);if(p&&!y){y=true;var r=o.get("imgCls")||v;e.addStyleSheet("@-webkit-keyframes ks-fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes ks-fadeIn{0%{opacity:0}100%{opacity:1}}."+r+"{-webkit-animation:ks-fadeIn 350ms linear 0ms 1 normal both;animation:ks-fadeIn 350ms linear 0ms 1 normal both;opacity:1}.img-ks-beforeload{opacity:0}")}o._diffRatio=0;o._callbacks={};o._startLis=[];o._containerIsNotDocument=o.get("container").nodeType!=9;if(t.isArray(i.container)){o._backCompact=1}o["_initLoadEvent"]();i.container&&o.addElements(i.container);o._loadFn();t.ready(function(){o._loadFn()});C(function(){o._diffRatio=Math.max(t.UA.ios?2:1,o._diffRatio);o._loadFn()});o.resume();o.on("afterDiffChange",function(t){if(t.newVal===t.prevVal)return;o._windowRegion=o["_getBoundingRect"]();if(!o._backCompact&&o._containerIsNotDocument){o._containerRegion=o["_getBoundingRect"](o.get("container"))}})}S.ATTRS={diff:{value:s},placeholder:{value:window.ActiveXObject&&!document.documentMode?"//g.alicdn.com/s.gif":"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="},execScript:{value:true},container:{setter:function(n){n=n||r;if(t.isWindow(n)){n=n.document}else{n=e.get(n);if(e.nodeName(n)=="body"){n=n.ownerDocument}}return n},valueFn:function(){return r}},autoDestroy:{value:true},onStart:{value:null}};function I(t,e){var n={};n.top=Math.max(t.top,e.top);n.bottom=Math.min(t.bottom,e.bottom);n.left=Math.max(t.left,e.left);n.right=Math.min(t.right,e.right);return n.bottom>=n.top&&n.right>=n.left}t.extend(S,a,{addStartListener:function(e){var n=this._startLis;if(!e||t.indexOf(e,n)>=0){return}n.push(e)},_initLoadEvent:function(){var a=this,o=a.get("autoDestroy");a.addStartListener(function(t,e){var n=a.get("onStart");if(n){var o=n.apply(this,arguments);if(o===true||o===false){t.returnValue=o}}e()});a.addStartListener(function(e,n){var o=a.get("webpReplacer");if(t.isFunction(o)){t.use("mui/datalazyload/webp",function(t,a){a.isSupport(function(t){if(t){e.src=o(e.src)}n()})})}else{n()}});a.imgHandle=function(){var t=this,o=a.get("imgFlag")||l,i=a.get("imgCls")||v,r=t.getAttribute(o);k(a._startLis,{type:"img",elem:t,src:r},function(a){if(a.returnValue===false){return}if(a.src&&t.src!=a.src){if(p){var r="img-ks-beforeload",l;e.addClass(t,r);l=function(){e.removeClass(t,r);e.addClass(t,i);n.detach(t,"load",l);l=null};n.on(t,"load",l)}t.src=a.src}t.removeAttribute(o)})};a.textareaHandle=function(){var t=this;t.style.display=u;t.className="";var n=e.create("<div>");t.parentNode.insertBefore(n,t);k(a._startLis,{type:"textarea",elem:t,value:t.value},function(t){if(t.returnValue===false){return}e.html(n,t.value,a.get("execScript"));a.addElements(n)})};a._loadFn=A(function(){if(o&&t.isEmptyObject(a._callbacks)){a.destroy()}a["_loadItems"]()},h,a);a._onScroll=function(e){a._onScroll=a._loadFn;a._diffRatio=Math.max(t.UA.ios?4:2,a._diffRatio);a._loadFn()}},refresh:function(){this._loadFn()},_loadItems:function(){var e=this,n=e.get("container");if(e._containerIsNotDocument&&!n.offsetWidth){return}e._windowRegion=e["_getBoundingRect"]();if(!e._backCompact&&e._containerIsNotDocument){e._containerRegion=e["_getBoundingRect"](e.get("container"))}t.each(e._callbacks,function(t,n){t&&e._loadItem(n,t)})},_loadItem:function(t,e){var n=this,e=e||n._callbacks[t];if(!e){return true}var a=e.el,o=false,i=e.fn;if(n.get("force")||R(a,n._windowRegion,n._containerRegion)){try{o=i.call(a)}catch(r){setTimeout(function(){throw r},0)}}if(o!==false){delete n._callbacks[t]}return o},addCallback:function(n,a){n=e.get(n);var o=this,i=o._callbacks,r={el:n||document,fn:a||t.noop},l=++_;i[l]=r;if(o._windowRegion){o._loadItem(l,r)}else{o.refresh()}return l},removeCallback:function(n,a){n=e.get(n);var o=this._callbacks;t.each(o,function(t,e){if(t.el==n&&(a?t.fn==a:1)){delete o[e]}})},getElements:function(){var e=this,n=[],a=[],o=e._callbacks;t.each(o,function(t){if(t.fn==e.imgHandle){n.push(t.el)}if(t.fn==e.textareaHandle){a.push(t.el)}});return{images:this._images,textareas:this._textareas}},addElements:function(n,a){if(typeof n=="string"){n=e.query(n)}else if(!t.isArray(n)){n=[n]}var o=this;t.each(n,function(n){if(!n){return}if(!a||a==="img"){t.each(t.filter([n].concat(e.query("img",n)),function(t){return t.getAttribute&&t.getAttribute(o.get("imgFlag")||l)},o),function(t){var e=o.addCallback(t,o.imgHandle);if(!t.offsetWidth){t.onload=t.onerror=function(){setTimeout(function(){o._loadItem(e)},0)};if(!t.src){o.onPlaceHolder=o.onPlaceHolder||b(function(t){var e=o._phImg=new Image,n=o.get("placeholder");e.onload=e.onerror=function(){t(n)};e.src=n});o.onPlaceHolder(function(e){if(!t.src){t.src=e}})}}})}if(!a||a==="textarea"){t.each(e.query("textarea."+(o.get("areaFlag")||c),n),function(t){o.addCallback(t,o.textareaHandle)})}})},removeElements:function(n){if(typeof n=="string"){n=e.query(n)}else if(!t.isArray(n)){n=[n]}var a=this,o=a._callbacks;t.each(o,function(e,a){if(t.inArray(e.el,n)){delete o[a]}})},_getBoundingRect:function(n){var a,i,r,l;if(n!==o){a=e.outerHeight(n);i=e.outerWidth(n);var c=w(n);r=c.left;l=c.top}else{a=e.viewportHeight();i=e.viewportWidth();r=e.scrollLeft();l=e.scrollTop()}var f=this.get("diff"),u=this._diffRatio;if(f===s){f={left:0,top:0,right:i*u,bottom:a*u}}else if(!t.isObject(f)){f={left:f,top:f,right:f,bottom:f}}return{left:r-(f.left||0),top:l-(f.top||0),right:r+i+(f.right||0),bottom:l+a+(f.bottom||0)}},pause:function(){var t=this,e=t._onScroll,a=t._loadFn;if(t._destroyed){return}n.remove(i,d,e);n.remove(i,m,e);n.remove(i,g,a);a.stop();if(t._containerIsNotDocument){var o=t.get("container");n.remove(o,d,e);n.remove(o,m,e)}},resume:function(){var t=this,e=t._onScroll,a=t._loadFn;if(t._destroyed){return}n.on(i,d,e);n.on(i,m,e);n.on(i,g,a);if(t._containerIsNotDocument){var o=t.get("container");n.on(o,d,e);n.on(o,m,e)}},destroy:function(){var e=this;e.pause();e._callbacks={};t.log("datalazyload is destroyed!");e.fire("destroy");e._destroyed=1}});function x(n,a,o,i){if(a==="img-src"){a="img"}if(!t.isArray(n)){n=[e.get(n)]}var s=new S(r,{});s.set("imgFlag",o||l+f);s.set("imgCls",o||v+f);s.set("areaFlag",o||c+f);s.set("onStart",i);s.set("force",true);s.addElements(n,a)}S.loadCustomLazyData=x;var E;S.instance=function(){return E||(E=new S(null,{autoDestroy:false}))};t.DataLazyload=S;return S},{requires:["dom","event","base"]});