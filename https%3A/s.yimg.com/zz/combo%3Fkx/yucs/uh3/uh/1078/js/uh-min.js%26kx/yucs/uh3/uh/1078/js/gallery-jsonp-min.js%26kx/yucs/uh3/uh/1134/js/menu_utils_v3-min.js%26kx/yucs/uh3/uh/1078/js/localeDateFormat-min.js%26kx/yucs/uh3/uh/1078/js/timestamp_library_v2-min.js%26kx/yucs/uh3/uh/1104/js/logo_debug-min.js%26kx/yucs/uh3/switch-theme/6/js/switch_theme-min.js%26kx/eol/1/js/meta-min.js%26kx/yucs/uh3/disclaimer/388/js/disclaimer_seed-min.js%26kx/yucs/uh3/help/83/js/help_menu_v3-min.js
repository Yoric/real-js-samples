window.ucs||(window.ucs={}),window.ucs.UH_MAIN_ID||(window.ucs.UH_MAIN_ID="#yucs"),window.ucs.ymreqid||(window.ucs.ymreqid=function(){var a=(new Date).getTime(),b=null,c="xxxxxxxx-xxxx-xxxx-09xx-xxxxxxxxxx00".replace(/x/g,function(){return b=(a+16*Math.random())%16|0,a=Math.floor(a/16),b.toString(16)});return c}),window.ucs._sendBeacon||(window.ucs._sendBeacon=function(a){var b=new Image;b.height=0,b.width=0,b.style.display="none",b.src="https://geo.yahoo.com/t"+a,document.body.appendChild(b)}),window.ucs.YObj||(window.ucs.YObj=function(){var a=document.getElementById("yucs");return"undefined"!=typeof window.Y&&a&&"srp"===a.getAttribute("data-property")?window.Y:YUI()}());YUI.add("gallery-jsonp",function(a){function b(){this._init.apply(this,arguments)}var c=a.Lang.isObject,d=a.Lang.isFunction;b._pattern=/\bcallback=(.*?)(?=&|$)/i,b._template="callback={callback}",b.prototype={_init:function(b,c){this.url=b,c=c||{},d(c)&&(c={on:{success:c}}),c.on=c.on||{},c.on.success||(c.on.success=this._getCallbackFromUrl(b)),this._config=a.merge({on:{},context:this,args:[],format:this._format},c)},_getCallbackFromUrl:function(e){var f,g,h,i,j=e.match(b._pattern);if(j){for(g=a.config.win,h=j[1].split(/\./).reverse(),f=h.shift(),i=h.length-1;i>=0;--i)if(g=g[h[i]],!c(g))return null;if(c(g)&&d(g[f]))return a.bind(g[f],g)}return null},send:function(){function b(a){return d(a)?function(b){delete YUI.Env.JSONP[c],a.apply(e.context,[b].concat(e.args))}:null}if(!this._config.on.success)return this;var c=a.guid().replace(/-/g,"_"),e=this._config,f=e.format.call(this,this.url,"YUI.Env.JSONP."+c);return YUI.Env.JSONP[c]=b(e.on.success),a.Get.script(f,{onFailure:b(e.on.failure),onTimeout:b(e.on.timeout||e.on.failure),timeout:e.timeout}),this},_format:function(a,c){var d,e=b._template.replace(/\{callback\}/,c);return b._pattern.test(a)?a.replace(b._pattern,e):(d=a.slice(-1),"&"!==d&&"?"!==d&&(a+=a.indexOf("?")>-1?"&":"?"),a+e)}},a.JSONPRequest=b,a.jsonp=function(b,c){return new a.JSONPRequest(b,c).send()},YUI.Env.JSONP||(YUI.Env.JSONP={})},"gallery-2010.08.11-20-39",{requires:["get","oop"]});YUI.add("ucs-menu-utils",function(a){if(a.namespace("ucs"),!a.ucs.MenuUtils){var b='{separatorTop}<li class="{isDisabled} {isActive} {menuClass}"><a target="{target}" {actionData} href="{url}" {disabledAria}>{icon}{menuText}</a></li>{separatorBottom}',c='{separatorTop}<li class="{isDisabled} {isActive} {menuClass}"><a href="#" data-customevt="true" {actionData} {disabledAria} {checkedAria}>{icon}{menuText}</a></li>{separatorBottom}',d='<span class="separator" role="presentation"></span>',e="click",f="a",g="role",h="tabIndex",i="yucs-hide",j="iframe",k="ul",l="li",m="parentNode",n="http://l.yimg.com/a/lib/ush/icon.gif",o="https://s.yimg.com/lq/lib/ush/icon.gif",p=300;a.ucs.MenuUtils=function(a,b){var c=b&&b.panelSelector||k;this.menu=a,this.enableClick=b&&b.enableClick,this.panel=this.menu.one(c),this.panel&&this.init(),this.openDelay=b&&"undefined"!=typeof b.openDelay?b.openDelay:p,this.closeTimer=null,this.overPanel=!1,this.overLink=!1},a.ucs.MenuUtils.prototype={init:function(){this.keyedup=!1,this.menu.on("hover",a.bind(this._handleMenuEnter,this),a.bind(this._handleMouseOut,this),this),this.panel.on("hover",a.bind(this._handlePanelEnter,this),a.bind(this._handlePanelLeave,this),this),this.enableClick&&this.menu.on("click",a.bind(this._handleMenuToggle,this),this),this.menu.delegate(e,this._handleMenuItemClick,"li a",this),this.menu.on("keyup",this._handleKeyup,this),this.menu.on("keydown",this._handleKeydown,this),this.menu.removeClass("yucs-activate"),this._initAria()},_initAria:function(){this.menu.one(f).set(g,"button"),this.panel.all(f).set(g,"menuitemradio"),this.panel.set(g,"menu"),this.panel.all("div,ul,li").set(g,"presentation"),a.UA.ipad||a.UA.mobile||this.panel.set(h,-1),this.focusmanager=this.panel.plug(a.Plugin.NodeFocusManager,{descendants:f,keys:{next:"down:40",previous:"down:38"},focusClass:{className:"yucs-has-focus",fn:function(a){return a.get(m)}},circular:!0})},_refreshAria:function(){this.focusmanager.focusManager.refresh()},_destructAria:function(){this.panel.unplug(a.Plugin.NodeFocusManager),this.panel.one(f).set(h,0)},_handleMenuClick:function(a){this.overLink&&this.panel.hasClass(i)&&(this._accessShowMenu(a),this.closeTimer&&(this.closeTimer.cancel(),this.closeTimer=null))},_handleMenuEnter:function(b){b.halt(),this.overLink=!0,a.later(this.openDelay,this,this._handleMenuClick)},_handlePanelEnter:function(){this.closeTimer&&(this.closeTimer.cancel(),this.closeTimer=null),this.overPanel=!0},_handlePanelLeave:function(){this.overPanel=!1,this.panelShown&&this._handleMouseOut()},_handleMenuToggle:function(){this.overLink=this.overLink?!1:!0,this.panelShown?(this.closeTimer&&(this.closeTimer.cancel(),this.closeTimer=null),this.panel.hasClass(i)||(this.closeTimer=a.later(500,this,this._handleLeave))):a.later(this.openDelay,this,this._handleMenuClick)},_handleKeyup:function(a){27===a.keyCode?(this.menu.one(f).focus(),this._hideMenu()):40!==a.keyCode||this.keyedup||(this.panel.one(f).focus(),this.keyedup=!0)},_handleKeydown:function(a){this.panel.hasClass(i)||a.stopPropagation(),40===a.keyCode&&a.preventDefault()},_handleDocumentClick:function(a){return this.panel.contains(a.target)||a.target._node===this.panel._node||this.panel.hasClass(i)||a.target===this.menu.one(">a")||a.target.get("parentNode")===this.menu.one(">a")?void(this.skipBlur=!0):void this._hideMenu()},_accessShowMenu:function(b){this._hideAllMenus(),this._showMenu(b),this.panel.focus(),a.Node.DOM_EVENTS.touchend=!0,this.documentBlurHandle=a.on("blur",function(a){var b=this;this.panel.contains(a.target)||a.target._node===this.panel._node||this.panel.hasClass(i)||(this.skipBlur||(this.timeout=setTimeout(function(){b._hideMenu()},50)),this.skipBlur=!1)},this.panel,this),this.documentFocusHandle=a.on("focus",function(a){this.timeout&&this.panel.hasChildNodes(a.target)&&(clearTimeout(this.timeout),this.timeout=null)},this.panel,this)},_showMenu:function(){this.panel.removeClass(i),this._addIframeShim();var a=this.menu.one(j);a&&a.removeClass(i)},_position:function(){var a=this.menu.get("region");this.panel.hasClass("yucs-menu-right")||this.panel.hasClass("yucs-menu-left")||this.panel.setStyle("left",a[0]),this.panel.setStyle("top",a[1]+13)},_handleMouseOut:function(){this.overLink=!1,this.closeTimer&&(this.closeTimer.cancel(),this.closeTimer=null),this.panel.hasClass(i)||(this.closeTimer=a.later(500,this,this._handleLeave))},_handleLeave:function(){this.overPanel||this.overLink||this._hideMenu()},_hideMenu:function(){this.panel.addClass(i),this.overPanel=!1;var a=this.menu.one(j);a&&a.addClass(i),this.documentBlurHandle&&this.documentBlurHandle.detach(),this.documentFocusHandle&&this.documentFocusHandle.detach(),this.documentClickHandle&&this.documentClickHandle.detach(),this.documentMouseDownHandle&&this.documentMouseDownHandle.detach(),this.documentTouchEndHandle&&this.documentTouchEndHandle.detach(),this.keyedup=!1},_hideAllMenus:function(){var b=a.all("yucs-menu iframe"),c=a.one("#yucs-top-menu");this._hideMenu(),c&&c.one("ul")&&(c.one("ul").addClass(i),a.one("#yucs-more").removeClass("yucs-menu-active")),b.addClass(i)},_addIframeShim:function(){var b,c=a.all("select"),d=a.UA.ie<=6;d&&0!==c.size()&&(b=this.menu.one(j),b||(b=document.createElement(j),b=this.panel.get(m).insertBefore(b,this.panel)),b.className="yucs-shim",b.setStyle("position","absolute"),b.setStyle("width",this.panel.getComputedStyle("width")),b.setStyle("height",this.panel.getComputedStyle("height")),b.setStyle("top",this.panel.getY()+"px"),b.setStyle("border","0px none"),this.menu.hasClass("yucs-help")||b.setStyle("left",0),b.frameBorder=0)},_addMenuGroups:function(a,b,c){for(var d=this.menu.one(k),e="",f=d.get("children")._nodes.length?!0:!1,g=0,h=a.length;h>g;g++){var i=a[g].length;"bottom"===b?a[g][0].separatorTop=!0:(h-1>g||f)&&(a[g][i-1].separatorBottom=!0),e+=this._addMenuGroup(a[g],c)}"bottom"===b?d.append(e):d.prepend(e)},_addMenuGroup:function(a,b){for(var c="",d=0,e=a.length;e>d;d++)b?(a[d].isDebugItem=!0,a[d].menuClass="debug-item"):(a[d].isDebugItem=!1,a[d].menuClass="minty-item"),c+=this._addMenuItem(a[d]);return c},_addMenuItem:function(d){var e="";switch(d.checkedAria=d.isActive?'aria-checked="true"':"",d.disabledAria=d.isDisabled?'aria-disabled="true"':"",d.actionType){case"link":e=a.substitute(b,d,this._processTemplateValue);break;case"customEvent":e=a.substitute(c,d,this._processTemplateValue)}return e&&(e=d.isDebugItem?e.replace(/separator/,"separator debug-item"):e.replace(/separator/,"separator minty-item")),e},_clearMenuItem:function(a){this.menu.one(k).all("."+a).each(function(a){a.remove(!0)})},_processTemplateValue:function(b,c,e){a.log("key = "+b+" value = "+c+" meta_data = "+e);var f="",g="https:"===document.location.protocol?o:n;switch(b){case"icon":void 0!==c&&(f="available"===c?'<img src="'+g+'" class="yucs-opi available"/>':"offline"===c?'<img src="'+g+'" class="yucs-opi offline"/>':"invisible"===c?'<img src="'+g+'" class="yucs-opi invisible"/>':"busy"===c?'<img src="'+g+'" class="yucs-opi busy"/>':"idle"===c?'<img src="'+g+'" class="yucs-opi idle"/>':'<img src="'+c+'" />');break;case"separatorTop":c&&(f=d);break;case"separatorBottom":c&&(f=d);break;case"actionData":c&&(f='data-mad="'+c+'"');break;case"isDisabled":c&&(f="disabled");break;case"isActive":c&&(f="sp active");break;case"checkedAria":f=c;break;default:f=c}return f},_resetItemStatus:function(a){var b,c=a.ancestor(k).all(l),d=a.ancestor(k).all("li.disabled");c.removeClass("sp active"),d.removeClass("disabled"),a.getAttribute("data-dis")&&(b=a.ancestor(l),b.addClass("disabled")),a.getAttribute("data-hs")&&(b=a.ancestor(l),b.addClass("sp active"))},_handleMenuItemClick:function(a){a.target}}}},"1.0",{requires:["node","event","event-hover","event-custom","substitute","node-focusmanager"]}),function(){var a=document.getElementById("yucs");a&&window.ucs.YObj.use("node","ucs-menu-utils",function(a){var b=a.one("#yucs").all("li.yucs-menu.yucs-activate");b.each(function(b){new a.ucs.MenuUtils(b)})})}();!function(){function a(a){switch(a){case"tr-tr":return[" "];case"es-cl":case"nl-nl":case"ta-in":case"zh-hant-cn":case"hi-in":case"kn-in":return["-"];case"de-at":case"de-ch":case"de-de":case"fi-fi":case"nb-no":case"pl-pl":case"ro-ro":case"ru-ru":return["."];default:return["/"]}}function b(a){switch(a){case"en-ae":case"en-au":case"en-ca":case"en-ie":case"en-in":case"en-my":case"en-nz":case"en-ph":case"en-sg":case"en-us":case"es-us":case"ja-jp":case"sv-se":return[e,g,f,g,d].join("");case"ro-ro":case"fi-fi":case"pl-pl":case"en-gb":case"th-th":case"en-ie":case"tr-tr":case"vi-vn":return[f,g,e,g,c].join("");case"zh-hant-cn":case"zh-hant-tw":return[d,g,e,g,f].join("");default:return[f,g,e,g,d].join("")}}var c="%Y",d="%y",e="%m",f="%d",g="_",h=document.getElementById("yucs")&&document.getElementById("yucs").getAttribute("data-lang").toLowerCase()||"en-us";window.ucs||(window.ucs={}),window.ucs.getLocalDateFormat=function(c){c=c.toLowerCase();var d=a(c),e=b(c);return e.replace(new RegExp(g,"g"),d)},window.ucs.localeDateFormat=window.ucs.getLocalDateFormat(h)}();window.ucs.YObj.use("datatype-date",function(){}),YUI.add("ucs-timestamp-library",function(a){a.namespace("ucs.Timestamp"),a.ucs.Timestamp={getTimeStamp:function(b){var c,d,e,f,g,h="AM",i=a.one("#yucs"),j=b.dateRef||new Date,k=b.date,l=b.locale?b.locale:i.getAttribute("data-lang"),m=k.getTime(),n=k.getDate(),o=j.getDate(),p=j.getTime(),q=p-m,r=o-n,s=!0,t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return s=/^en-us$/i.test(l),q=parseInt(q/1e3,10),d=k.getMonth(),e=k.getHours(),f=k.getMinutes(),g=p-(60*j.getHours()*60*1e3+60*j.getMinutes()*1e3+1e3*j.getSeconds()+j.getMilliseconds()),10>f&&(f="0"+f),e>=12&&(h="PM"),e>12&&(e-=12),b.type&&"short"===b.type&&a.DataType&&a.DataType.Date?0===r?c=e+":"+f+" "+h:(/^th-th$/i.test(l)&&k.setFullYear(k.getFullYear()+543),c=a.DataType.Date.format(k,{format:window.ucs.localeDateFormat}).replace(/\b0(?=\d)/g,"")):s?0===r?60>q?c=q>1?q+" secs ago":q+" sec ago":3600>q?(q=Math.ceil(q/60,10),c=2>q?q+" min ago":q+" mins ago"):86400>q&&(q=Math.ceil(q/3600),c=q>1?q+" hours ago":q+" hour ago"):c=864e5>g-m&&0!==r?"Yesterday "+e+":"+f+" "+h:t[d]+" "+n+"&nbsp;&nbsp;"+e+":"+f+" "+h:c=t[d]+" "+n+"&nbsp;&nbsp;"+e+":"+f+" "+h,c}}},"1.0",{requires:["node","datatype-date"]});YUI.add("ucs-logodebug",function(a){a.namespace("ucs");var b=document.getElementById("imageCheck"),c=document.getElementById("yucs-logo-ani"),d=!1;-1!==navigator.userAgent.toLowerCase().indexOf("msie")&&(d=!0),(b&&0===b.offsetWidth&&void 0===b.readyState||b&&0===b.offsetWidth&&"uninitialized"===b.readyState||d&&b&&"uninitialized"===b.readyState||d&&b&&void 0===b.readyState)&&(c.style.visibility="visible",c.style.position="relative"),a.ucs.LogoDebug=function(a){a.on("click",this._handleClick,this),this.publish("ucs:logoDebug",{broadcast:2,emitFacade:!0})},a.ucs.LogoDebug.prototype={_handleClick:function(a){a.altKey&&(a.halt(),this.fire("ucs:logoDebug"))}},a.Global.on("ucs:themeChange",function(){a.later(11,this,function(){a.one("#animator")&&a.one("#animator").setStyle("display","none"),a.one("#yucs-logo-ani")&&(a.one("#yucs-logo-ani").setStyle("position","relative"),a.one("#yucs-logo-ani").setStyle("visibility","visible"),a.one(".lt #yucs-logo-ani")?a.one(".lt #yucs-logo-ani").setStyle("backgroundPosition","-350px 0 !important"):a.one("#yucs-logo-ani").setStyle("backgroundPosition","0% 0% !important"))})}),a.Global.on("ucs:playLogo",function(){"undefined"!=typeof Aniden&&Aniden.play&&Aniden.play()}),a.augment(a.ucs.LogoDebug,a.EventTarget)},"1.0",{requires:["node"]}),function(){window.ucs.YObj.use("node","ucs-logodebug",function(a){var b=a.one("#yucs-logo");if(b){new a.ucs.LogoDebug(b)}})}();YUI.add("ucs-switch-theme",function(a){"use strict";a.namespace("ucs"),a.ucs.SwitchTheme=function(a){this.init(a)},a.ucs.SwitchTheme.prototype={init:function(a){this.container=a},_getTheme:function(){return this.container.hasClass("lt")?"light":"dark"},_setTheme:function(a){"light"===a?this.container.addClass("lt"):"dark"===a&&this.container.removeClass("lt")}}}),window.ucs.YObj.use("node","ucs-switch-theme",function(a){if(window.ucs.UhTheme){var b=a.one("#yucs");window.ucs.UhTheme=new a.ucs.SwitchTheme(b),window.ucs.UhTheme.getTheme=function(){return window.ucs.UhTheme._getTheme()},window.ucs.UhTheme.setTheme=function(a){return window.ucs.UhTheme._setTheme(a)}}});if(window.ucs&&window.ucs.YObj){(function(ucs){YUI.add("ucs-meta",function(Y){"use strict";Y.namespace("ucs");if(Y.ucs.Meta){Y.log("Y.ucs.Meta is already defined.","debug","ucs-meta");return}var self=null;var meta=null;var components=null;var data={};var getData=function(node){if(Y.version>="3.5.1"){return node.getData()}else{return{beacon:node.getAttribute("data-beacon"),authstate:node.getAttribute("data-authState"),cobrand:node.getAttribute("data-cobrand"),crumb:node.getAttribute("data-crumb"),mccrumb:node.getAttribute("data-mc-crumb"),gta:node.getAttribute("data-gta"),device:node.getAttribute("data-device"),experience:node.getAttribute("data-experience"),firstname:node.getAttribute("data-firstname"),flight:node.getAttribute("data-flight"),forcecobrand:node.getAttribute("data-forcecobrand"),msrc:node.getAttribute("data-msrc"),guid:node.getAttribute("data-guid"),host:node.getAttribute("data-host"),https:node.getAttribute("data-https"),languagetag:node.getAttribute("data-languagetag"),property:node.getAttribute("data-property"),protocol:node.getAttribute("data-protocol"),shortfirstname:node.getAttribute("data-shortfirstname"),shortuserid:node.getAttribute("data-shortuserid"),status:node.getAttribute("data-status"),spaceid:node.getAttribute("data-spaceid"),test_id:node.getAttribute("data-test_id"),userid:node.getAttribute("data-userid"),style:node.getAttribute("data-style")}}};Y.ucs.Meta=function(root){self=this;self.components={meta:root};self.data=getData(root);self.imgBeacon()};Y.ucs.Meta.prototype={imgBeacon:function(){var img;var path;var beacon=self.beacon();if(beacon==="1"){path="https://www.yahoo.com/_td_api/beacon/info?"+Y.QueryString.stringify({site:"fp",src:"uhlegacy",property:self.property(),ucsdevice:self.device(),exp:self.experience(),host:self.host(),lang:self.languagetag(),cobrand:self.cobrand(),forecobrand:self.forcecobrand(),msrc:self.msrc(),_rnd:(new Date).getTime().toString().substr(7)});img=new window.Image;img.src=path}},authState:function(){return Y.Object.getValue(self.data,"authstate")},beacon:function(){return Y.Object.getValue(self.data,"beacon")},cobrand:function(){return Y.Object.getValue(self.data,"cobrand")},crumb:function(){return Y.Object.getValue(self.data,"crumb")},msrc:function(){return Y.Object.getValue(self.data,"msrc")},mccrumb:function(){return Y.Object.getValue(self.data,"mccrumb")},gta:function(){return Y.Object.getValue(self.data,"gta")},device:function(){return Y.Object.getValue(self.data,"device")},experience:function(){return Y.Object.getValue(self.data,"experience")},find:function(component){return Y.one(Y.Lang.sub("#yucs-{component}",{component:component}))},firstname:function(){return Y.Object.getValue(self.data,"firstname")},flight:function(){return Y.Object.getValue(self.data,"flight")},forcecobrand:function(){return Y.Object.getValue(self.data,"forcecobrand")},guid:function(){return Y.Object.getValue(self.data,"guid")},host:function(){return Y.Object.getValue(self.data,"host")},https:function(){return Y.Object.getValue(self.data,"https")},languagetag:function(){return Y.Object.getValue(self.data,"languagetag")},property:function(){return Y.Object.getValue(self.data,"property")},protocol:function(){return Y.Object.getValue(self.data,"protocol")},shortfirstname:function(){return Y.Object.getValue(self.data,"shortfirstname")},shortuserid:function(){return Y.Object.getValue(self.data,"shortuserid")},status:function(){return Y.Object.getValue(self.data,"status")},spaceid:function(){return Y.Object.getValue(self.data,"spaceid")},test_id:function(){return Y.Object.getValue(self.data,"test_id")},userid:function(){return Y.Object.getValue(self.data,"userid")},style:function(){return Y.Object.getValue(self.data,"style")},toJSON:function(){return{authState:self.authState(),cobrand:self.cobrand(),crumb:self.crumb(),mccrumb:self.mccrumb(),gta:self.gta(),device:self.device(),experience:self.experience(),firstname:self.firstname(),flight:self.flight(),forcecobrand:self.forcecobrand(),guid:self.guid(),host:self.host(),https:self.https(),languagetag:self.languagetag(),property:self.property(),protocol:self.protocol(),shortfirstname:self.shortfirstname(),shortuserid:self.shortuserid(),status:self.status(),spaceid:self.spaceid(),test_id:self.test_id(),userid:self.userid(),style:self.style()}}}},"0.0.1",{requires:["node","querystring-stringify"]});ucs.YObj.use("ucs-meta",function(Y){if(!Y.Lang.isObject(ucs.Meta)||!(ucs.Meta instanceof Y.ucs.Meta)){ucs.Meta=new Y.ucs.Meta(Y.one("#yucs-meta"))}})})(window.ucs)}YUI.add("ucs-disclaimer-seed",function(a){a.namespace("ucs"),a.ucs.DisclaimerSeed={init:function(){var b,c=!1,d=a.one("#yucs-disclaimer")?a.one("#yucs-disclaimer"):a.one("#yucs-disclaimer-md"),e=d.getAttribute("data-property"),f=(d.getAttribute("data-lang"),d.getAttribute("data-dss")),g=(d.getAttribute("data-cu"),d.getAttribute("data-cobrand"),!1),h=!1,i=(a.Cookie.get("DSS"),parseInt((new Date).getTime()/1e3),a.Cookie.getSub("ucs","disclaimer",Number),"desktop"),j="false",k=navigator.userAgent.toLowerCase(),l=a.Cookie.getSub("AO","o")?a.Cookie.getSub("AO","o"):a.Cookie.getSub("AO",'"o'),m=a.Cookie.getSub("AO","u")?a.Cookie.getSub("AO","u"):a.Cookie.getSub("AO",'"u'),n=(a.Cookie.getSub("AO","t")?a.Cookie.getSub("AO","t"):a.Cookie.getSub("AO",'"t'),a.Cookie.getSub("AO","dnt")?a.Cookie.getSub("AO","dnt"):a.Cookie.getSub("AO",'"dnt'));this.jsPath="https://s.yimg.com/zz/combo?kx/yucs/uh3/disclaimer/388/js/disclaimer-min.js",this.cssPath="https://s.yimg.com/zz/combo?kx/yucs/uh3/disclaimer/388/css/disclaimer-min.css",a.one("#yucs-disclaimer")?i=a.one("#yucs-disclaimer").getAttribute("data-device"):a.one("#yucs-disclaimer-md")&&(i=a.one("#yucs-disclaimer-md").getAttribute("data-device")),j=i&&(i.match(/smartphone/gi)||i.match(/tablet/gi)),"frontpage"===e&&(i.match(/smartphone/gi)||i.match(/tablet/gi))&&(a.one("#OpenMenuBtn")&&a.one("#OpenMenuBtn").on("touchstart",this.setKillswitch,this),a.one("#OpenWidgetsBtn")&&a.one("#OpenWidgetsBtn").on("touchstart",this.setKillswitch,this)),f&&"0"===f&&k.indexOf("version")>=0&&k.indexOf("crios")<0&&(b=k.match(/version\/(\d+)/),i.match(/desktop/gi)&&b&&b[1]&&parseInt(b[1])<8?this.loadCSS(this.cssPath,this.jsPath):j&&a.UA.ios&&a.UA.ios<8&&this.loadCSS(this.cssPath,this.jsPath)),n&&(n=n.replace('"',""),n=n.replace("'",""),n=parseInt(n)),m&&(m=m.replace('"',""),m=m.replace("'",""),m=parseInt(m)),l?(l=l.replace('"',""),l=l.replace("'",""),l=parseInt(l)):c=!0,c=!0,g=!0,n&&1===n&&g===!0&&h===!1&&(n=a.Cookie.get("AO",{raw:!0}),n=n.replace("o=1","o=0"),a.Cookie.set("AO",n,{expires:new Date("January 12, 2025"),path:"/",domain:"yahoo.com",raw:!0}))},setKillswitch:function(){a.one("#yucs-disclaimer").setAttribute("data-killswitch","1")},loadCSS:function(b,c){var d={onSuccess:function(){this.loadJS(c)},onFailure:function(){this.loadCSS(b)},context:this};a.Get.css(b,d)},checkTimer:function(){var b=a.Cookie.getSub("ucs","disclaimerts",Number),c=(new Date).getTime();return c>=b||null===b?!0:!1},loadJS:function(b){var c={onFailure:function(){this.loadJS(b)},context:this};a.Get.script(b,c)}}},"1.0",{requires:["node","cookie"]}),function(){if("undefined"!=typeof ucs&&ucs.YObj)ucs.YObj.use("ucs-disclaimer-seed",function(a){a.ucs.DisclaimerSeed.init()});else{var a=document.getElementById("yUnivHead"),b=a&&"srp"===a.getAttribute("data-property")?Y:YUI();b.use("ucs-disclaimer-seed",function(a){a.ucs.DisclaimerSeed.init()})}}();YUI.add("ucs-helpmenu",function(a){"use strict";a.namespace("ucs.HelpMenu");var b="ucs:helpMenuShow",c="ucs:helpDebugMenuShow",d="ucs:helpMenuItemClick",e="ucs:helpDebugMenuItemClick",f="ucs:utilityMenuShow",g="ucs:utilityMenuItemClick",h='{separatorTop}<li class="{isDisabled} {isActive} {menuClass}"><div><a target="{target}" {actionData} href="{url}" {disabledAria}>{icon}{menuText}</a></div></li>{separatorBottom}',i='{separatorTop}<li class="{isDisabled} {isActive} {menuClass}"><div><a href="#" data-customevt="true" {actionData} {disabledAria} {checkedAria}>{icon}{menuText}</a></div></li>{separatorBottom}',j='<span class="yucs-separator" role="presentation"></span>',k="http://l.yimg.com/a/lib/ush/icon.gif",l="https://s.yimg.com/lq/lib/ush/icon.gif",m=YUI.namespace("YHELP.config"),n=a.one("#yucs-meta");n&&(m.locale=n.getData("languagetag"),m.product=n.getData("property"),n.getData("firstname")&&(m.user=n.getData("firstname"))),m.alignNode=a.one("#yucs"),a.ucs.HelpMenu=function(b){this.menuContainer=b.ancestor("div"),this.shown=!1,this.helpLink=a.one("#yucs-help_button"),this.helpLink.setAttribute("data-mad","true"),this.previewPanel=a.one("#yucs-help_inner"),this.ylt=this.previewPanel.getAttribute("data-yltmenushown"),this.PANEL_OFFSET=30,this.PANEL_OFFSET_Y=3,this.headerNode=a.one("#yucs"),a.ucs.HelpMenu.superclass.constructor.apply(this,[this.menuContainer,{panelSelector:"#yucs-help_inner"}]),this._initCustomEvents(),b.removeClass("yucs-hm-activate")},a.extend(a.ucs.HelpMenu,a.ucs.MenuUtils,{_initCustomEvents:function(){this.publish(b,{broadcast:2,emitFacade:!0}),this.publish(c,{broadcast:2,emitFacade:!0}),this.publish(d,{broadcast:2,emitFacade:!0}),this.publish(e,{broadcast:2,emitFacade:!0}),this.publish(f,{broadcast:2,emitFacade:!0}),this.publish(g,{broadcast:2,emitFacade:!0}),a.Global.on("ucs:utilityMenuItems",this._handleHelpMenuItems,this,{location:"top",menuType:"minty-utility-item"}),a.Global.on("ucs:helpMenuItems",this._handleHelpMenuItems,this,{location:"bottom",menuType:"minty-help-item"}),a.Global.on("ucs:helpDebugMenuItems",this._handleHelpDebugMenuItems,this,{location:"bottom",menuType:"minty-debug-item"}),a.one("#yhelp-link")&&a.one("#yhelp-link").on("click",function(a){YUI.YHELP.config.uhClickEvent=a,YUI.YHELP.initiate()})},_showMenu:function(d){this.previewPanel.hasClass("yucs-hide")&&this._sendBeacon(),a.ucs.HelpMenu.superclass._showMenu.apply(this,arguments),"mail"===a.one("#yucs").getAttribute("data-property")&&this.menu.all("li").addClass("yucs-hide"),d&&(d.ctrlKey||d.metaKey)&&d.shiftKey?(this.fire(c),this.shown===!1?a.later(4e3,this,function(){this.fire(c)}):this._showDebugMenuItems()):(this.fire(b),this.fire(f),this.shown===!1?a.later(4e3,this,function(){this.fire(b),this.fire(f)}):this._showMenuItems()),this._setPosition()},_showDebugMenuItems:function(){this.shown=!0,this.menu.all("li").addClass("yucs-hide"),this.menu.all("span.minty-item").setStyle("display","none"),this.menu.all("li.debug-item").removeClass("yucs-hide"),this.menu.all("span.debug-item").setStyle("display","block")},_showMenuItems:function(){this.shown=!0,this.menu.all("li").removeClass("yucs-hide"),this.menu.all("span.minty-item").setStyle("display","block"),this.menu.all("li.debug-item").addClass("yucs-hide"),this.menu.all("span.debug-item").setStyle("display","none"),this._destructAria(),this._initAria()},_setPosition:function(){this.mailIcon=a.one("#yucs-help_button");var b,c=this.previewPanel.one(".yucs-dock"),d=c&&c.get("offsetWidth"),e=this.headerNode.get("offsetHeight");this.rtl?this.previewPanel.setX(Math.round(this.headerNode.getX()+this.PANEL_OFFSET)):a.one("#yucs-country")||this.previewPanel.setX(Math.round(this.headerNode.getX()+this.headerNode.get("offsetWidth")-this.panel.get("offsetWidth")-2)),this.panel.setY(a.one("#search_hot_keyword_block")?this.headerNode.getY()+e-this.PANEL_OFFSET_Y-30:e>0?this.headerNode.getY()+e-this.PANEL_OFFSET_Y:this.mailIcon.getY()+this.mailIcon.get("offsetHeight")+3),c&&(b=this.mailIcon.get("offsetWidth")/2-d/2,c.setX(this.mailIcon.getX()+b))},_handleKeyup:function(a){27===a.keyCode||9===a.keyCode?(this.menu.one("a").focus(),this._hideMenu()):40!==a.keyCode||this.keyedup||(this.panel.one("a")&&(this._showMenu(a),this.panel.one("a").focus()),this.keyedup=!0)},_handleHelpMenuItems:function(b,c){a.log("help menu items received");var d,e,f=c&&c.location||"top",g=c&&c.menuType||"minty-help-item";b.menuGroups&&b.menuGroups.length&&(d=b.menuGroups,e=this.menu.one("#yuhead-help-panel"),b.reset&&e&&e.all("."+g).remove(!0),this._addMenuGroups(d,f,!1,g),this._showMenuItems())},_handleHelpDebugMenuItems:function(b){a.log("help menu items received");var c,d;b.menuGroups&&b.menuGroups.length&&(c=b.menuGroups,d=this.menu.one("#yuhead-help-panel"),b.reset&&d&&d.all(".minty-debug-item").remove(!0),this._addMenuGroups(c,"top",!0,"minty-debug-item"),this._showDebugMenuItems())},_handleMenuItemClick:function(b){a.log("help menu item click");var c,f,h,i;if(c=b.target,c=c.ancestor("a",!0),f=c.getAttribute("data-mad"),h=c.getAttribute("data-customevt"),i=c.ancestor("li").hasClass("disabled"))return void b.halt();if(h&&b.preventDefault(),!i){var j={actionData:f},k=c.ancestor("li");k.hasClass("debug-item")?this.fire(e,j):k.hasClass("minty-utility-item")?this.fire(g,j):this.fire(d,j)}},_addMenuGroups:function(a,b,c,d){var e,f,g,h=this.menu.one("#yuhead-help-panel"),i="",j=a.length;for(e=h.hasChildNodes(),f=0;j>f;f++)g=a[f].length,"bottom"===b?f>0&&(a[f][0].separatorTop=!0):(j-1>f||e)&&(a[f][g-1].separatorBottom=!0),i+=this._addMenuGroup(a[f],c,d);h.ancestor("div.yucs-yql_loading")&&h.ancestor("div.yucs-yql_loading").removeClass("yucs-yql_loading"),"bottom"===b?h.append(i):h.prepend(i),h.one(".yucs-keepatbottom")&&h.all(".yucs-keepatbottom").each(function(a){h.append(a)})},_addMenuGroup:function(a,b,c){var d,e="",f=a.length;for(d=0;f>d;d++)b?(a[d].isDebugItem=!0,a[d].menuClass=c+" debug-item"):(a[d].isDebugItem=!1,a[d].menuClass=c+" minty-item"),e+=this._addMenuItem(a[d],c);return e},_addMenuItem:function(b,c){var d="";switch(b.checkedAria=b.isActive?'aria-checked="true"':"",b.disabledAria=b.isDisabled?'aria-disabled="true"':"",b.actionType){case"link":d=a.substitute(h,b,this._processTemplateValue);break;case"customEvent":d=a.substitute(i,b,this._processTemplateValue)}return d&&(d=b.isDebugItem?d.replace(/separator/,"separator debug-item "+c):d.replace(/separator/,"separator minty-item "+c)),d},_processTemplateValue:function(b,c,d){a.log("key = "+b+" value = "+c+" meta_data = "+d);var e="",f="https:"===document.location.protocol?l:k;switch(b){case"icon":void 0!==c&&(e="available"===c?'<img src="'+f+'" class="yucs-opi available"/>':"offline"===c?'<img src="'+f+'" class="yucs-opi offline"/>':"invisible"===c?'<img src="'+f+'" class="yucs-opi invisible"/>':"busy"===c?'<img src="'+f+'" class="yucs-opi busy"/>':"idle"===c?'<img src="'+f+'" class="yucs-opi idle"/>':'<img src="'+c+'" />');break;case"separatorTop":c&&(e=j);break;case"separatorBottom":c&&(e=j);break;case"actionData":c&&(e='data-mad="'+c+'"');break;case"isDisabled":c&&(e="disabled");break;case"isActive":c&&(e="sp active");break;case"checkedAria":e=c;break;default:e=c}return e},_sendBeacon:function(){this.ylt&&window.ucs._sendBeacon(this.ylt+"?t="+Math.random())}}),a.augment(a.ucs.HelpMenu,a.EventTarget)},"1.0",{requires:["oop","node","event-custom","substitute","ucs-menu-utils"]}),function(){window.ucs.YObj.use("node","ucs-helpmenu",function(a){var b,c=a.one("#yucs").all(".yucs-hm-activate");c.each(function(c){b=new a.ucs.HelpMenu(c)})})}();