YUI.add("td-applet-amplify-hpset-mainview",function(e,i){"use strict";var s,o="HP",t="ieInstallerLightbox:show",n="#ieInstallerLightbox",r=".td-applet-amplify-hpset",a=e.Cookie,h=e.Af.Config,c={CH:"chrome",FF:"firefox",IE:"explorer"};e.namespace("TD.Applet").AmplifyHpsetMainView=e.Base.create("TDAmplifyHpsetMainView",e.Af.AppletView,[],{autoRender:!1,initializer:function(e){this.browser=c[h.getContext("browserName")],this.browserVersion=h.getContext("browserVersion"),this.osName=h.getContext("osName"),this.osName="string"==typeof this.osName?this.osName.toLowerCase():"",this.browser&&this.browserVersion&&this.osName&&(s=this.getRapid(),this.extensions=e.extensions,this.container=this.get("container"),this.btnNode=this.container&&this.container.one(r),this.btnNode&&this.initBtn())},initBtn:function(){var e,i;this.isHomepageSet()||("chrome"===this.browser?(e=window.RequestFileSystem||window.webkitRequestFileSystem)&&e(window.TEMPORARY,100,this.handleVerification.bind(this),function(){}):"firefox"===this.browser?window.indexedDB&&((i=window.indexedDB.open("test")).onsuccess=this.handleVerification.bind(this),i.onerror=function(e){}):"explorer"===this.browser&&this.handleVerification())},isHomepageSet:function(){var i=!1,s=e.Object.getValue(e.config.win,["history","length"]);return"1"===a.get(o)?i=!0:"explorer"===this.browser?i=s===(this.browserVersion<10?0:1):"chrome"!==this.browser&&"firefox"!==this.browser||1!==s||(i=!0),i},handleVerification:function(){var e,i,s=this,o={chrome:[s.checkIsExcludedVersion,s.checkHasMarkupFlag],firefox:[s.checkIsExcludedVersion,s.checkHasMarkupFlag],explorer:[s.checkIsExcludedVersion,s.checkDependenciesFail]},t=!1,n=o[s.browser]||[];for(e=0,i=n.length;e<i&&(t=!n[e].call(s));e++);t?s.setupClickEvent():"chrome"!==s.browser&&"firefox"!==s.browser||this.setHPCookie()},checkIsExcludedVersion:function(){var e=this.browserVersion,i=this.extensions||{},s=i[this.browser],o=this.osName,t=!0;return s&&(!s.minVersion||e>=s.minVersion)&&(!s.maxVersion||e<=s.maxVersion)&&(!s.os||s.os.indexOf(o)>=0)&&(t=!1),t},checkHasMarkupFlag:function(){var i=this.extensions||{},s=i.markupFlagClassName,o=e.one("body"),t=!1;return s&&o&&o.hasClass(s)&&(t=!0),t},checkDependenciesFail:function(){var i=e.one(n),s=!i;return s},setupClickEvent:function(){var e=this,i={chrome:e.installChromeExtension,firefox:e.installFirefoxExtension,explorer:e.installExplorerRegistryKey},s=e.browser,o=e.browserVersion,t=i[s],n=e.extensions||{},r=n[s]&&n[s].url,a=n.hashTag;"firefox"===s&&o>=57&&(r=n[s]&&n[s].xpi),t&&r&&(e.btnNode.on("click",function(){e.setupHashTag(a),t.call(e,r)}),e.showModule())},showModule:function(){this.btnNode.removeClass("D\\(n\\)"),s&&s.beaconLinkViews([{sec:"hpset_rr",_links:[{elm:"btn",subsec:"follow-promo"}]}])},setupHashTag:function(e){e&&document&&document.location&&(document.location.hash=e)},installChromeExtension:function(e){this.setHPCookie(),window.open(e,"_blank"),this.fireInstallBeacon()},installFirefoxExtension:function(e){var i=".xpi"===e.substr(-4)?"_self":"_blank";this.setHPCookie(),window.open(e,i),this.fireInstallBeacon()},installExplorerRegistryKey:function(i){this.setHPCookie(),e.Af.Event.fire(t),window.open(i,"_self"),this.fireInstallBeacon()},fireInstallBeacon:function(){s&&s.beaconClick("hpset_rr","Make YAHOO! your homepage","1",{sec:"hpset_rr",subsec:"follow-promo",elm:"btn",itc:1})},setHPCookie:function(){var e=new Date;e.setTime(e.getTime()+1728e5),a.set(o,"1",{domain:".yahoo.com",path:"/",expires:e})}})},"@VERSION@",{requires:["af-applet-view"]});