define("kg/sidebar/1.0.10/lib/attrs/20161212",[],function(e,a,t){t.exports={show:{value:!0},render:{value:document.body},created:{value:!1},rendered:{value:!1},expanded:{value:{}},shrinking:{value:{}},items:{value:[{list:["pagenav","redpaper","my1111"],splitLine:!0,topSpacing:"0%"},{list:["cart","history"],splitLine:!0,topSpacing:"30"},{list:["help","gotop"],splitLine:!1,topSpacing:"7%"}]},pluginVersion:{value:{cart:"0.0.4",history:"0.0.3",redpaper:"0.0.6",my1111:"0.0.4",gotop:"0.0.3",help:"0.0.2",ww:"0.0.3",pagenav:"0.0.4"}},defaultSpacing:{value:[{height:"0"},{height:"2%"},{height:"7%"}]},defaultSplitLine:{value:[!0,!0,!1]},style:{value:"20161212"},expandToRight:{value:!0},blackList:{value:[]},hostBLackList:{value:["guang.taobao.com","lu.taobao.com","tw.taobao.com","sea.taobao.com","hk.taobao.com","cun.taobao.com"]}}});define("kg/xtemplate/4.5.0/runtime",[],function(n,r,t){var e;e=function(n){var r,t,e,i,o;return r=function(n){function r(){var n="";for(var r in e)n+=r+"|";return n=n.slice(0,-1),o=new RegExp(n,"g")}var t,e={"&":"&amp;",">":"&gt;","<":"&lt;","`":"&#x60;","/":"&#x2F;",'"':"&quot;","'":"&#x27;"},i=/[&<>"'`]/,o=r(),a=/\\?\{([^{}]+)\}/g,f="undefined"!=typeof global?global:window,u=Object.prototype.toString;return n=t={isArray:Array.isArray||function(n){return"[object Array]"===u.call(n)},keys:Object.keys||function(n){var r,t=[];for(r in n)n.hasOwnProperty(r)&&t.push(r);return t},each:function(n,r,e){if(n){var i,o,a,f=0,u=n&&n.length,s=void 0===u||"[object Function]"===Object.prototype.toString.call(n);if(e=e||null,s)for(a=t.keys(n);f<a.length&&(i=a[f],r.call(e,n[i],i,n)!==!1);f++);else for(o=n[0];f<u&&r.call(e,o,f,n)!==!1;o=n[++f]);}return n},mix:function(n,r){if(r)for(var t in r)n[t]=r[t];return n},globalEval:function(n){f.execScript?f.execScript(n):!function(n){f.eval.call(f,n)}(n)},substitute:function(n,r,t){return"string"==typeof n&&r?n.replace(t||a,function(n,t){return"\\"===n.charAt(0)?n.slice(1):void 0===r[t]?"":r[t]}):n},escapeHtml:function(n){return n=""+n,i.test(n)?(n+"").replace(o,function(n){return e[n]}):n},merge:function(){for(var n=0,r=arguments.length,e={};n<r;n++){var i=arguments[n];i&&t.mix(e,i)}return e}}}(),t=function(n){function r(n,r,t){void 0!==n?this.data=n:this.data={},t?(this.parent=t,this.root=t.root):(this.parent=void 0,this.root=this),this.affix=r||{},this.ready=!1}return r.prototype={isScope:1,constructor:r,setParent:function(n){this.parent=n,this.root=n.root},set:function(n,r){this.affix[n]=r},setData:function(n){this.data=n},getData:function(){return this.data},mix:function(n){var r=this.affix;for(var t in n)r[t]=n[t]},get:function(n){var r,t=this.data,e=this.affix;return null!=t&&(r=t[n]),void 0!==r?r:e[n]},resolveInternalOuter:function(n){var r,t=n[0],e=this,i=e;if("this"===t)r=e.data;else if("root"===t)i=i.root,r=i.data;else{if(!t)return[i.data];do r=i.get(t);while(void 0===r&&(i=i.parent))}return[void 0,r]},resolveInternal:function(n){var r=this.resolveInternalOuter(n);if(1===r.length)return r[0];var t,e=n.length,i=r[1];if(void 0!==i){for(t=1;t<e;t++){if(null==i)return i;i=i[n[t]]}return i}},resolveLooseInternal:function(n){var r=this.resolveInternalOuter(n);if(1===r.length)return r[0];var t,e=n.length,i=r[1];for(t=1;null!=i&&t<e;t++)i=i[n[t]];return i},resolveUp:function(n){return this.parent&&this.parent.resolveInternal(n)},resolveLooseUp:function(n){return this.parent&&this.parent.resolveLooseInternal(n)},resolveOuter:function(n,r){var t,e=this,i=e;if(!r&&1===n.length){if(t=e.get(n[0]),void 0!==t)return[t];r=1}if(r)for(;i&&r--;)i=i.parent;return i?[void 0,i]:[void 0]},resolveLoose:function(n,r){var t=this.resolveOuter(n,r);return 1===t.length?t[0]:t[1].resolveLooseInternal(n)},resolve:function(n,r){var t=this.resolveOuter(n,r);return 1===t.length?t[0]:t[1].resolveInternal(n)}},n=r}(),e=function(n){function t(n,r,t){this.list=n,this.init(),this.next=r,this.ready=!1,this.tpl=t}function e(n,r){var e=this;e.config=r,e.head=new t(e,(void 0)),e.callback=n,this.init()}var i=r;return t.prototype={constructor:t,isBuffer:1,init:function(){this.data=""},append:function(n){return this.data+=n,this},write:function(n){if(null!=n){if(n.isBuffer)return n;this.data+=n}return this},writeEscaped:function(n){if(null!=n){if(n.isBuffer)return n;this.data+=i.escapeHtml(n)}return this},insert:function(){var n=this,r=n.list,e=n.tpl,i=new t(r,n.next,e),o=new t(r,i,e);return n.next=o,n.ready=!0,o},async:function(n){var r=this.insert(),t=r.next;return n(r),t},error:function(n){var r=this.list.callback;if(r){var t=this.tpl;if(t){n instanceof Error||(n=new Error(n));var e=t.name,i=t.pos.line,o="XTemplate error in file: "+e+" at line "+i+": ";n.stack=o+n.stack,n.message=o+n.message,n.xtpl={pos:{line:i},name:e}}this.list.callback=null,r(n,void 0)}},end:function(){var n=this;return n.list.callback&&(n.ready=!0,n.list.flush()),n}},e.prototype={constructor:e,init:function(){this.data=""},append:function(n){this.data+=n},end:function(){this.callback(null,this.data),this.callback=null},flush:function(){for(var n=this,r=n.head;r;){if(!r.ready)return void(n.head=r);this.data+=r.data,r=r.next}n.end()}},e.Buffer=t,n=e}(),i=function(n){var e=t,i=r,o={range:function(n,r){var t=r.params,e=t[0],i=t[1],o=t[2];o?(e>i&&o>0||e<i&&o<0)&&(o=-o):o=e>i?-1:1;for(var a=[],f=e;e<i?f<i:f>i;f+=o)a.push(f);return a},"void":function(){},foreach:function(n,r,t){var i,o,a,f,u=r.params,s=u[0],l=u[2]||"xindex",c=u[1];if(s)for(i=s.length,f=0;f<i;f++)o=new e(s[f],{xcount:i,xindex:f},n),a=o.affix,"xindex"!==l&&(a[l]=f,a.xindex=void 0),c&&(a[c]=s[f]),t=r.fn(o,t);return t},forin:function(n,r,t){var i,o,a,f=r.params,u=f[0],s=f[2]||"xindex",l=f[1];if(u)for(a in u)i=new e(u[a],{xindex:a},n),o=i.affix,"xindex"!==s&&(o[s]=a,o.xindex=void 0),l&&(o[l]=u[a]),t=r.fn(i,t);return t},each:function(n,r,t){var e=r.params,a=e[0];return a?i.isArray(a)?o.foreach(n,r,t):o.forin(n,r,t):t},"with":function(n,r,t){var i=r.params,o=i[0];if(o){var a=new e(o,(void 0),n);t=r.fn(a,t)}return t},"if":function(n,r,t){var e=r.params,i=e[0];if(i){var o=r.fn;o&&(t=o(n,t))}else{var a=!1,f=r.elseIfs,u=r.inverse;if(f)for(var s=0,l=f.length;s<l;s++){var c=f[s];if(a=c.test(n)){t=c.fn(n,t);break}}!a&&u&&(t=u(n,t))}return t},set:function(n,r,t){for(var e=r.hash,i=e.length,o=0;o<i;o++){var a=e[o],f=a.key,u=a.depth,s=a.value;if(1===f.length){for(var l=n.root;u&&l!==n;)n=n.parent,--u;n.set(f[0],s)}else{var c=n.resolve(f.slice(0,-1),u);c&&(c[f[f.length-1]]=s)}}return t},include:1,parse:1,extend:1,block:function(n,r,t){var e,i=this,o=i.runtime,a=r.params,f=a[0];2===a.length&&(e=a[0],f=a[1]);var u,s=o.blocks=o.blocks||{},l=s[f],c={fn:r.fn,type:e};if(l){if(l.type)if("append"===l.type)c.next=l,s[f]=c;else if("prepend"===l.type){var v;for(u=l;u&&"prepend"===u.type;)v=u,u=u.next;c.next=u,v.next=c}}else s[f]=c;if(!o.extendTpl)for(u=s[f];u;)u.fn&&(t=u.fn.call(i,n,t)),u=u.next;return t},macro:function(n,r,t){var i=r.hash,o=r.params,a=o[0],f=o.slice(1),u=this,s=u.runtime,l=s.macros=s.macros||{},c=l[a];if(r.fn)l[a]={paramNames:f,hash:i,fn:r.fn};else if(c){var v,d=c.hash||{};if(v=c.paramNames)for(var h=0,p=v.length;h<p;h++){var m=v[h];d[m]=f[h]}if(i)for(var g in i)d[g]=i[g];var x=new e(d);x.root=n.root,t=c.fn.call(u,x,t)}else{var y="can not find macro: "+a;t.error(y)}return t}};return o["debugger"]=function(){i.globalEval("debugger")},n=o}(),o=function(n){function o(n,r,t,e,i,o,a,f){this.name=n,this.originalName=o||n,this.runtime=r,this.root=t,this.pos={line:1},this.scope=e,this.buffer=i,this.fn=a,this.parent=f}function a(n,r,t){var e=t[0],i=n&&n[e]||r&&r[e]||x[e];if(1===t.length)return i;if(i)for(var o=t.length,a=1;a<o;a++)if(i=i[t[a]],!i)return!1;return i}function f(n,r){var t=n.split("/"),e=r.split("/");t.pop();for(var i=0,o=e.length;i<o;i++){var a=e[i];"."===a||(".."===a?t.pop():t.push(a))}return t.join("/")}function u(n,r,t,e,i,o){var f,u,s;if(o||(s=a(n.runtime.commands,n.root.config.commands,i)),s)return s.call(n,r,t,e);if(s!==!1){var l=i.slice(0,-1);if(f=r.resolve(l,o),null==f)return e.error("Execute function `"+i.join(".")+"` Error: "+l.join(".")+" is undefined or null"),e;if(u=f[i[i.length-1]])try{return u.apply(f,t.params||[])}catch(c){return e.error("Execute function `"+i.join(".")+"` Error: "+c.message),e}}return e.error("Command Not Found: "+i.join(".")),e}function s(n,r){var t=this;t.fn=n,t.config=m.merge(s.globalConfig,r),this.subNameResolveCache={}}function l(n,r,t){if("."!==r.charAt(0))return r;var e=t+"_ks_"+r,i=n.subNameResolveCache,o=i[e];return o?o:r=i[e]=f(t,r)}function c(n,r,t,e,i,o){var a=l(n,o,i.name),f=e.insert(),u=f.next;return d(n,a,i.runtime,r,f,o,t,e.tpl),u}function v(n,r,t,e,i){var a=t.insert(),f=a.next,u=new o(i.TPL_NAME,e.runtime,n,r,a,(void 0),i,t.tpl);return a.tpl=u,h(u),f}function d(n,r,t,e,i,a,f,u){var s=new o(r,t,n,e,i,a,(void 0),u);i.tpl=s,n.config.loader.load(s,function(n,r){"function"==typeof r?(s.fn=r,h(s)):n?i.error(n):(r=r||"",f?i.writeEscaped(r):i.data+=r,i.end())})}function h(n){var r=n.fn();if(r){var t,e=n.runtime,i=e.extendTpl;if(i&&(t=i.params[0],!t))return r.error("extend command required a non-empty parameter");var o=e.extendTplFn,a=e.extendTplBuffer;return o?(e.extendTpl=null,e.extendTplBuffer=null,e.extendTplFn=null,v(n.root,n.scope,a,n,o).end()):t&&(e.extendTpl=null,e.extendTplBuffer=null,c(n.root,n.scope,0,a,n,t).end()),r.end()}}function p(n,r,t){var e=r.params;if(!e[0])return t.error("include command required a non-empty parameter");var i=n,o=e[1],a=r.hash;return a&&(o=o?m.mix({},o):{},m.mix(o,a)),o&&(i=new y(o,(void 0),n)),i}var m=r,g=i,x={},y=t,b=e,w={callFn:u,callDataFn:function(n,r){for(var t=r[0],e=t,i=1;i<r.length;i++){var o=r[i];if(!e||null==e[o])return"";t=e,e=e[o]}return e.apply(t,n||[])},callCommand:function(n,r,t,e,i){return u(n,r,t,e,i)}};return m.mix(s,{config:function(n,r){var t=this.globalConfig=this.globalConfig||{};return arguments.length?void(void 0!==r?t[n]=r:m.mix(t,n)):t},nativeCommands:g,utils:w,util:m,addCommand:function(n,r){x[n]=r},removeCommand:function(n){delete x[n]}}),s.prototype={constructor:s,Scope:y,nativeCommands:g,utils:w,removeCommand:function(n){var r=this.config;r.commands&&delete r.commands[n]},addCommand:function(n,r){var t=this.config;t.commands=t.commands||{},t.commands[n]=r},include:function(n,r,t,e){return c(this,p(n,r,t),r.escape,t,e,r.params[0])},includeModule:function(n,r,t,e){return v(this,p(n,r,t),t,e,r.params[0])},render:function(n,r,t){var e="",i=this,a=i.fn,f=i.config;"function"==typeof r&&(t=r,r=null),r=r||{},t=t||function(n,r){if(n)throw n instanceof Error||(n=new Error(n)),n;e=r};var u=i.config.name;!u&&a&&a.TPL_NAME&&(u=a.TPL_NAME);var l;l=n instanceof y?n:new y(n);var c=new s.LinkedBuffer(t,f).head,v=new o(u,{commands:r.commands},i,l,c,u,a);return c.tpl=v,a?(h(v),e):(f.loader.load(v,function(n,r){r?(v.fn=i.fn=r,h(v)):n&&c.error(n)}),e)}},s.Scope=y,s.LinkedBuffer=b,n=s}(),n=o}(),t.exports=e});define("kg/sidebar/1.0.10/lib/kissyConfig",[],function(e,a,i){i.exports=function(){var e=!!~location.hostname.indexOf("daily.taobao.net"),a=e?"//g-assets.daily.taobao.net":"//g.alicdn.com";KISSY.config({modules:{"pk/index":{requires:["./index.css"]}},packages:{pk:{base:a+"/tb/pk/0.1.0/",ignorePackageNameInUri:!0},tp:{base:a+"/tp/",ignorePackageNameInUri:!0},tbc:{base:a+"/tbc/",ignorePackageNameInUri:!0},kg:{base:a+"/kg/",ignorePackageNameInUri:!0}}})}()});