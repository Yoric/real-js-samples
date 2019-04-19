window.noAdBlock=!0,function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("video.js")):"function"==typeof define&&define.amd?define(["video.js"],t):e.videojsContribAds=t(e.videojs)}(this,function(e){"use strict";e=e&&e.hasOwnProperty("default")?e.default:e;var t=function(e,t){t.isImmediatePropagationStopped=function(){return!0},t.cancelBubble=!0,t.isPropagationStopped=function(){return!0}},n=function(e,n,o){t(0,o),e.trigger({type:n+o.type,originalEvent:o})},o=function(e,o){e.ads.isInAdMode()&&(e.ads.isContentResuming()?e.ads._contentEnding&&n(e,"content",o):e.ads._cancelledPlay?t(0,o):n(e,"ad",o))},a=function(e,t){if(e.ads.isInAdMode()){if(e.ads.isContentResuming())return;n(e,"ad",t)}else e.ads._contentHasEnded||n(e,"content",t)},r=function(e,t){if(!("loadstart"===t.type&&!e.ads._hasThereBeenALoadStartDuringPlayerLife||"loadeddata"===t.type&&!e.ads._hasThereBeenALoadedData||"loadedmetadata"===t.type&&!e.ads._hasThereBeenALoadedMetaData))if(e.ads.inAdBreak())n(e,"ad",t);else{if(e.currentSrc()!==e.ads.contentSrc)return;n(e,"content",t)}},i=function(e,t){var o=e.ads._cancelledPlay&&!e.ads.isInAdMode();e.ads.inAdBreak()?n(e,"ad",t):(e.ads.isContentResuming()||o)&&n(e,"content",t)};function d(e){"playing"===e.type?o(this,e):"ended"===e.type?a(this,e):"loadstart"===e.type||"loadeddata"===e.type||"loadedmetadata"===e.type?r(this,e):"play"===e.type?i(this,e):this.ads.isInAdMode()&&(this.ads.isContentResuming()?n(this,"content",e):n(this,"ad",e))}var s,u="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},l="undefined"!=typeof window?window:void 0!==u?u:"undefined"!=typeof self?self:{},c={},p=(Object.freeze||Object)({default:c}),f=p&&c||p,h=void 0!==u?u:"undefined"!=typeof window?window:{};"undefined"!=typeof document?s=document:(s=h["__GLOBAL_DOCUMENT_CACHE@4"])||(s=h["__GLOBAL_DOCUMENT_CACHE@4"]=f);var y=s,g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v=(function(){function e(e){this.value=e}function t(t){var n,o;function a(n,o){try{var i=t[n](o),d=i.value;d instanceof e?Promise.resolve(d.value).then(function(e){a("next",e)},function(e){a("throw",e)}):r(i.done?"return":"normal",i.value)}catch(e){r("throw",e)}}function r(e,t){switch(e){case"return":n.resolve({value:t,done:!0});break;case"throw":n.reject(t);break;default:n.resolve({value:t,done:!1})}(n=n.next)?a(n.key,n.arg):o=null}this._invoke=function(e,t){return new Promise(function(r,i){var d={key:e,arg:t,resolve:r,reject:i,next:null};o?o=o.next=d:(n=o=d,a(e,t))})},"function"!=typeof t.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(t.prototype[Symbol.asyncIterator]=function(){return this}),t.prototype.next=function(e){return this._invoke("next",e)},t.prototype.throw=function(e){return this._invoke("throw",e)},t.prototype.return=function(e){return this._invoke("return",e)}}(),function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}),m=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},A=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},T=function(e,t){return t?encodeURIComponent(e):e},b=function(e,t,n){if(e&&e[n])for(var o=e[n],a=Object.keys(o),r=0;r<a.length;r++){t["{mediainfo."+n+"."+a[r]+"}"]=o[a[r]]}};var _={processMetadataTracks:function(e,t){for(var n=e.textTracks(),o=function(n){"metadata"===n.kind&&(e.ads.cueTextTracks.setMetadataTrackMode(n),t(e,n))},a=0;a<n.length;a++)o(n[a]);n.addEventListener("addtrack",function(e){o(e.track)})},setMetadataTrackMode:function(e){},getSupportedAdCue:function(e,t){return t},isSupportedAdCue:function(e,t){return!0},getCueId:function(e,t){return t.id}},k=function(e,t){return void 0!==t&&e.ads.includedCues[t]},S=function(e,t){void 0!==t&&""!==t&&(e.ads.includedCues[t]=!0)};_.processAdTrack=function(t,n,o,a){t.ads.includedCues={};for(var r=0;r<n.length;r++){var i=n[r],d=this.getSupportedAdCue(t,i);if(!this.isSupportedAdCue(t,i))return void e.log.warn("Skipping as this is not a supported ad cue.",i);var s=this.getCueId(t,i),u=i.startTime;if(k(t,s))return void e.log("Skipping ad already seen with ID "+s);a&&a(t,d,s,u),o(t,d,s,u),S(t,s)}};var C=function(){function t(e){v(this,t),this.player=e}return t.prototype.transitionTo=function(e){var t=this.player;this.cleanup();var n=new e(t);t.ads._state=n,t.ads.debug(this.constructor.name+" -> "+n.constructor.name);for(var o=arguments.length,a=Array(o>1?o-1:0),r=1;r<o;r++)a[r-1]=arguments[r];n.init.apply(n,[t].concat(a))},t.prototype.init=function(){},t.prototype.cleanup=function(){},t.prototype.onPlay=function(){},t.prototype.onPlaying=function(){},t.prototype.onEnded=function(){},t.prototype.onAdsReady=function(){e.log.warn("Unexpected adsready event")},t.prototype.onAdsError=function(){},t.prototype.onAdsCanceled=function(){},t.prototype.onAdTimeout=function(){},t.prototype.onAdStarted=function(){},t.prototype.onContentChanged=function(){},t.prototype.onContentResumed=function(){},t.prototype.onContentEnded=function(){e.log.warn("Unexpected contentended event")},t.prototype.onNoPreroll=function(){},t.prototype.onNoPostroll=function(){},t.prototype.startLinearAdMode=function(){e.log.warn("Unexpected startLinearAdMode invocation (State via "+this.constructor.name+")")},t.prototype.endLinearAdMode=function(){e.log.warn("Unexpected endLinearAdMode invocation (State via "+this.constructor.name+")")},t.prototype.skipLinearAdMode=function(){e.log.warn("Unexpected skipLinearAdMode invocation (State via "+this.constructor.name+")")},t.prototype.isAdState=function(){throw new Error("isAdState unimplemented for "+this.constructor.name)},t.prototype.isContentResuming=function(){return!1},t.prototype.inAdBreak=function(){return!1},t.prototype.handleEvent=function(e){var t=this.player;"play"===e?this.onPlay(t):"adsready"===e?this.onAdsReady(t):"adserror"===e?this.onAdsError(t):"adscanceled"===e?this.onAdsCanceled(t):"adtimeout"===e?this.onAdTimeout(t):"ads-ad-started"===e?this.onAdStarted(t):"contentchanged"===e?this.onContentChanged(t):"contentresumed"===e?this.onContentResumed(t):"contentended"===e?this.onContentEnded(t):"playing"===e?this.onPlaying(t):"ended"===e?this.onEnded(t):"nopreroll"===e?this.onNoPreroll(t):"nopostroll"===e&&this.onNoPostroll(t)},t}(),P=function(e){function t(n){v(this,t);var o=A(this,e.call(this,n));return o.contentResuming=!1,o}return m(t,e),t.prototype.isAdState=function(){return!0},t.prototype.onPlaying=function(){this.contentResuming&&this.transitionTo(x)},t.prototype.onContentResumed=function(){this.contentResuming&&this.transitionTo(x)},t.prototype.isContentResuming=function(){return this.contentResuming},t.prototype.inAdBreak=function(){return!0===this.player.ads._inLinearAdMode},t}(C),L=function(e){function t(){return v(this,t),A(this,e.apply(this,arguments))}return m(t,e),t.prototype.isAdState=function(){return!1},t.prototype.onContentChanged=function(e){e.ads.debug("Received contentchanged event (ContentState)"),e.paused()?this.transitionTo(j):(this.transitionTo(M,!1),e.pause(),e.ads._pausedOnContentupdate=!0)},t}(C);function R(e){e.ads.cancelPlayTimeout||(e.ads.cancelPlayTimeout=e.setTimeout(function(){e.ads.cancelPlayTimeout=null,e.ads.isInAdMode()&&(e.ads.settings.delayPreroll||e.paused()||e.pause(),e.ads._cancelledPlay=!0)},1))}var w={start:function(t){t.ads.debug("Starting ad break"),t.ads._inLinearAdMode=!0,t.trigger("adstart"),t.ads.shouldPlayContentBehindAd(t)||(t.ads.snapshot=function(t){var n=void 0;n=e.browser.IS_IOS&&t.ads.isLive(t)&&t.seekable().length>0?t.currentTime()-t.seekable().end(0):t.currentTime();var o=t.$(".vjs-tech"),a=t.textTracks?t.textTracks():[],r=[],i={ended:t.ended(),currentSrc:t.currentSrc(),src:t.tech_.src(),currentTime:n,type:t.currentType()};o&&(i.nativePoster=o.poster,i.style=o.getAttribute("style"));for(var d=0;d<a.length;d++){var s=a[d];r.push({track:s,mode:s.mode}),s.mode="disabled"}return i.suppressedTracks=r,i}(t)),t.ads.shouldPlayContentBehindAd(t)&&(t.ads.preAdVolume_=t.volume(),t.volume(0)),t.addClass("vjs-ad-playing"),t.hasClass("vjs-live")&&t.removeClass("vjs-live"),t.ads.removeNativePoster()},end:function(t){t.ads.debug("Ending ad break"),t.ads.adType=null,t.ads._inLinearAdMode=!1,t.trigger("adend"),t.removeClass("vjs-ad-playing"),t.ads.isLive(t)&&t.addClass("vjs-live"),t.ads.shouldPlayContentBehindAd(t)||function(t,n){if(!0!==t.ads.disableNextSnapshotRestore){var o=t.$(".vjs-tech"),a=20,r=n.suppressedTracks,i=void 0,d=function(){for(var e=0;e<r.length;e++)(i=r[e]).track.mode=i.mode},s=function(){var o=void 0;e.browser.IS_IOS&&t.ads.isLive(t)?n.currentTime<0&&(o=t.seekable().length>0?t.seekable().end(0)+n.currentTime:t.currentTime(),t.currentTime(o)):n.ended?t.currentTime(t.duration()):t.currentTime(n.currentTime),n.ended||t.play(),t.ads.shouldRemoveAutoplay_&&(t.autoplay(!1),t.ads.shouldRemoveAutoplay_=!1)},u=function n(){if(t.off("contentcanplay",n),t.ads.tryToResumeTimeout_&&(t.clearTimeout(t.ads.tryToResumeTimeout_),t.ads.tryToResumeTimeout_=null),(o=t.el().querySelector(".vjs-tech")).readyState>1)return s();if(void 0===o.seekable)return s();if(o.seekable.length>0)return s();if(a--)t.setTimeout(n,50);else try{s()}catch(t){e.log.warn("Failed to resume the content after an advertisement",t)}};n.nativePoster&&(o.poster=n.nativePoster),"style"in n&&o.setAttribute("style",n.style||""),t.ads.videoElementRecycled()?(t.one("contentloadedmetadata",d),e.browser.IS_IOS&&!t.autoplay()&&(t.autoplay(!0),t.ads.shouldRemoveAutoplay_=!0),t.src({src:n.currentSrc,type:n.type}),t.one("contentcanplay",u),t.ads.tryToResumeTimeout_=t.setTimeout(u,2e3)):(d(),t.ended()||t.play())}else t.ads.disableNextSnapshotRestore=!1}(t,t.ads.snapshot),t.ads.shouldPlayContentBehindAd(t)&&t.volume(t.ads.preAdVolume_)}},M=function(t){function n(){return v(this,n),A(this,t.apply(this,arguments))}return m(n,t),n.prototype.init=function(e,t){e.addClass("vjs-ad-loading");var n=e.ads.settings.timeout;"number"==typeof e.ads.settings.prerollTimeout&&(n=e.ads.settings.prerollTimeout),this._timeout=e.setTimeout(function(){e.trigger("adtimeout")},n),t?this.handleAdsReady():this.adsReady=!1},n.prototype.onAdsReady=function(t){t.ads.inAdBreak()||t.ads.isContentResuming()?e.log.warn("Unexpected adsready event (Preroll)"):(t.ads.debug("Received adsready event (Preroll)"),this.handleAdsReady())},n.prototype.handleAdsReady=function(){this.adsReady=!0,this.player.ads.nopreroll_?this.noPreroll():this.readyForPreroll()},n.prototype.afterLoadStart=function(e){var t=this.player;t.ads._hasThereBeenALoadStartDuringPlayerLife?e():(t.ads.debug("Waiting for loadstart..."),t.one("loadstart",function(){t.ads.debug("Received loadstart event"),e()}))},n.prototype.noPreroll=function(){var e=this;this.afterLoadStart(function(){e.player.ads.debug("Skipping prerolls due to nopreroll event (Preroll)"),e.transitionTo(x)})},n.prototype.readyForPreroll=function(){var e=this.player;this.afterLoadStart(function(){e.ads.debug("Triggered readyforpreroll event (Preroll)"),e.trigger("readyforpreroll")})},n.prototype.onPlay=function(e){e.ads.debug("Received play event (Preroll)"),this.inAdBreak()||this.isContentResuming()||R(this.player)},n.prototype.onAdsCanceled=function(e){var t=this;e.ads.debug("adscanceled (Preroll)"),this.afterLoadStart(function(){t.transitionTo(x)})},n.prototype.onAdsError=function(t){var n=this;e.log("adserror (Preroll)"),this.inAdBreak()&&t.ads.endLinearAdMode(),this.afterLoadStart(function(){n.transitionTo(x)})},n.prototype.startLinearAdMode=function(){var t=this.player;!this.adsReady||t.ads.inAdBreak()||this.isContentResuming()?e.log.warn("Unexpected startLinearAdMode invocation (Preroll)"):(t.clearTimeout(this._timeout),t.ads.adType="preroll",w.start(t))},n.prototype.onAdStarted=function(e){e.removeClass("vjs-ad-loading")},n.prototype.endLinearAdMode=function(){var e=this.player;this.inAdBreak()&&(e.removeClass("vjs-ad-loading"),w.end(e),this.contentResuming=!0)},n.prototype.skipLinearAdMode=function(){var t=this,n=this.player;n.ads.inAdBreak()||this.isContentResuming()?e.log.warn("Unexpected skipLinearAdMode invocation"):this.afterLoadStart(function(){n.trigger("adskip"),n.ads.debug("skipLinearAdMode (Preroll)"),t.transitionTo(x)})},n.prototype.onAdTimeout=function(e){var t=this;this.afterLoadStart(function(){e.ads.debug("adtimeout (Preroll)"),t.transitionTo(x)})},n.prototype.onNoPreroll=function(t){t.ads.inAdBreak()||this.isContentResuming()?e.log.warn("Unexpected nopreroll event (Preroll)"):this.noPreroll()},n.prototype.cleanup=function(){var t=this.player;t.ads._hasThereBeenALoadStartDuringPlayerLife||e.log.warn("Leaving Preroll state before loadstart event can cause issues."),t.removeClass("vjs-ad-loading"),t.clearTimeout(this._timeout)},n}(P),B=function(e){function t(){return v(this,t),A(this,e.apply(this,arguments))}return m(t,e),t.prototype.init=function(e){e.ads.adType="midroll",w.start(e)},t.prototype.endLinearAdMode=function(){var e=this.player;this.inAdBreak()&&(this.contentResuming=!0,w.end(e))},t.prototype.onAdsError=function(e){this.inAdBreak()&&e.ads.endLinearAdMode()},t}(P),E=function(t){function n(){return v(this,n),A(this,t.apply(this,arguments))}return m(n,t),n.prototype.init=function(e){var t=this;if(e.ads._contentEnding=!0,e.ads.nopostroll_)e.setTimeout(function(){e.ads.debug("Triggered ended event (no postroll)"),t.contentResuming=!0,e.trigger("ended")},1);else{e.addClass("vjs-ad-loading");var n=e.ads.settings.timeout;"number"==typeof e.ads.settings.postrollTimeout&&(n=e.ads.settings.postrollTimeout),this._postrollTimeout=e.setTimeout(function(){e.trigger("adtimeout")},n)}},n.prototype.startLinearAdMode=function(){var t=this.player;t.ads.inAdBreak()||this.isContentResuming()?e.log.warn("Unexpected startLinearAdMode invocation (Postroll)"):(t.ads.adType="postroll",t.clearTimeout(this._postrollTimeout),w.start(t))},n.prototype.onAdStarted=function(e){e.removeClass("vjs-ad-loading")},n.prototype.endLinearAdMode=function(){var e=this.player;this.inAdBreak()&&(e.removeClass("vjs-ad-loading"),w.end(e),this.contentResuming=!0,e.ads.debug("Triggered ended event (endLinearAdMode)"),e.trigger("ended"))},n.prototype.skipLinearAdMode=function(){var t=this.player;t.ads.inAdBreak()||this.isContentResuming()?e.log.warn("Unexpected skipLinearAdMode invocation"):(t.ads.debug("Postroll abort (skipLinearAdMode)"),t.trigger("adskip"),this.abort())},n.prototype.onAdTimeout=function(e){e.ads.debug("Postroll abort (adtimeout)"),this.abort()},n.prototype.onAdsError=function(e){e.ads.debug("Postroll abort (adserror)"),e.ads.inAdBreak()&&e.ads.endLinearAdMode(),this.abort()},n.prototype.onEnded=function(){this.isContentResuming()?this.transitionTo(I):e.log.warn("Unexpected ended event during postroll")},n.prototype.onContentChanged=function(e){this.isContentResuming()?this.transitionTo(j):this.inAdBreak()||this.transitionTo(M)},n.prototype.onNoPostroll=function(t){this.isContentResuming()||this.inAdBreak()?e.log.warn("Unexpected nopostroll event (Postroll)"):this.transitionTo(I)},n.prototype.abort=function(){var e=this.player;this.contentResuming=!0,e.removeClass("vjs-ad-loading"),e.ads.debug("Triggered ended event (postroll abort)"),e.trigger("ended")},n.prototype.cleanup=function(){var e=this.player;e.clearTimeout(this._postrollTimeout),e.ads._contentEnding=!1},n}(P),j=function(e){function t(){return v(this,t),A(this,e.apply(this,arguments))}return m(t,e),t.prototype.init=function(e){this.adsReady=!1},t.prototype.onAdsReady=function(e){e.ads.debug("Received adsready event (BeforePreroll)"),this.adsReady=!0},t.prototype.onPlay=function(e){e.ads.debug("Received play event (BeforePreroll)"),R(e),this.transitionTo(M,this.adsReady)},t.prototype.onAdsCanceled=function(e){e.ads.debug("adscanceled (BeforePreroll)"),this.transitionTo(x)},t.prototype.onAdsError=function(){this.transitionTo(x)},t.prototype.onNoPreroll=function(){this.player.ads.debug("Skipping prerolls due to nopreroll event (BeforePreroll)"),this.transitionTo(x)},t.prototype.skipLinearAdMode=function(){this.player.trigger("adskip"),this.transitionTo(x)},t.prototype.onContentChanged=function(){},t}(L),x=function(e){function t(){return v(this,t),A(this,e.apply(this,arguments))}return m(t,e),t.prototype.init=function(e){e.paused()&&(e.ads._cancelledPlay||e.ads._pausedOnContentupdate)&&e.play()},t.prototype.onAdsReady=function(e){e.ads.debug("Received adsready event (ContentPlayback)"),e.ads.nopreroll_||(e.ads.debug("Triggered readyforpreroll event (ContentPlayback)"),e.trigger("readyforpreroll"))},t.prototype.onContentEnded=function(e){e.ads.debug("Received contentended event"),this.transitionTo(E)},t.prototype.startLinearAdMode=function(){this.transitionTo(B)},t}(L),I=function(t){function n(){return v(this,n),A(this,t.apply(this,arguments))}return m(n,t),n.prototype.init=function(e){e.ads._contentHasEnded=!0},n.prototype.startLinearAdMode=function(){e.log.warn("Unexpected startLinearAdMode invocation (AdsDone)")},n}(L),O=e.getTech("Html5").Events,D={timeout:5e3,prerollTimeout:void 0,postrollTimeout:void 0,debug:!1,stitchedAds:!1},N=function(t){var n=this,o=e.mergeOptions(D,t),a=O.concat(["firstplay","loadedalldata","playing"]);n.on(a,d),n.setTimeout(function(){n.ads._hasThereBeenALoadStartDuringPlayerLife||""===n.src()||e.log.error("videojs-contrib-ads has not seen a loadstart event 5 seconds after being initialized, but a source is present. This indicates that videojs-contrib-ads was initialized too late. It must be initialized immediately after video.js in the same tick. As a result, some ads will not play and some media events will be incorrect. For more information, see https://github.com/videojs/videojs-contrib-ads#important-note-about-initialization")},5e3),n.on("ended",function(){n.hasClass("vjs-has-started")||n.addClass("vjs-has-started")}),n.on(["addurationchange","adcanplay"],function(){n.ads.snapshot&&n.currentSrc()===n.ads.snapshot.currentSrc||n.ads.inAdBreak()&&n.play()}),n.on("nopreroll",function(){n.ads.debug("Received nopreroll event"),n.ads.nopreroll_=!0}),n.on("nopostroll",function(){n.ads.debug("Received nopostroll event"),n.ads.nopostroll_=!0}),n.on("playing",function(){n.ads._cancelledPlay=!1,n.ads._pausedOnContentupdate=!1}),n.one("loadstart",function(){n.ads._hasThereBeenALoadStartDuringPlayerLife=!0}),n.on("loadeddata",function(){n.ads._hasThereBeenALoadedData=!0}),n.on("loadedmetadata",function(){n.ads._hasThereBeenALoadedMetaData=!0}),n.ads={settings:o,disableNextSnapshotRestore:!1,_contentEnding:!1,_contentHasEnded:!1,_hasThereBeenALoadStartDuringPlayerLife:!1,_hasThereBeenALoadedData:!1,_hasThereBeenALoadedMetaData:!1,_inLinearAdMode:!1,adType:null,VERSION:"__VERSION__",reset:function(){n.ads.disableNextSnapshotRestore=!1,n.ads._contentEnding=!1,n.ads._contentHasEnded=!1,n.ads.snapshot=null,n.ads.adType=null,n.ads._hasThereBeenALoadedData=!1,n.ads._hasThereBeenALoadedMetaData=!1,n.ads._cancelledPlay=!1,n.ads.nopreroll_=!1,n.ads.nopostroll_=!1},startLinearAdMode:function(){n.ads._state.startLinearAdMode()},endLinearAdMode:function(){n.ads._state.endLinearAdMode()},skipLinearAdMode:function(){n.ads._state.skipLinearAdMode()},stitchedAds:function(e){return void 0!==e&&(this._stitchedAds=!!e),this._stitchedAds},videoElementRecycled:function(){if(n.ads.shouldPlayContentBehindAd(n))return!1;if(!this.snapshot)throw new Error("You cannot use videoElementRecycled while there is no snapshot.");var e=n.tech_.src()!==this.snapshot.src,t=n.currentSrc()!==this.snapshot.currentSrc;return e||t},isLive:function(t){return t.duration()===1/0||"8"===e.browser.IOS_VERSION&&0===t.duration()},shouldPlayContentBehindAd:function(t){return!e.browser.IS_IOS&&!e.browser.IS_ANDROID&&t.duration()===1/0},isInAdMode:function(){return this._state.isAdState()},isContentResuming:function(){return this._state.isContentResuming()},isAdPlaying:function(){return this._state.inAdBreak()},inAdBreak:function(){return this._state.inAdBreak()},removeNativePoster:function(){var e=n.$(".vjs-tech");e&&e.removeAttribute("poster")},debug:function(){if(this.settings.debug){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];1===n.length&&"string"==typeof n[0]?e.log("ADS: "+n[0]):e.log.apply(e,["ADS:"].concat(n))}}},n.ads._state=new j(n),n.ads.stitchedAds(o.stitchedAds),n.ads.cueTextTracks=_,n.ads.adMacroReplacement=function(t,n,o){void 0===n&&(n=!1);var a={};for(var r in void 0!==o&&(a=o),a["{player.id}"]=this.options_["data-player"],a["{mediainfo.id}"]=this.mediainfo?this.mediainfo.id:"",a["{mediainfo.name}"]=this.mediainfo?this.mediainfo.name:"",a["{mediainfo.description}"]=this.mediainfo?this.mediainfo.description:"",a["{mediainfo.tags}"]=this.mediainfo?this.mediainfo.tags:"",a["{mediainfo.reference_id}"]=this.mediainfo?this.mediainfo.reference_id:"",a["{mediainfo.duration}"]=this.mediainfo?this.mediainfo.duration:"",a["{mediainfo.ad_keys}"]=this.mediainfo?this.mediainfo.ad_keys:"",a["{player.duration}"]=this.duration(),a["{timestamp}"]=(new Date).getTime(),a["{document.referrer}"]=y.referrer,a["{window.location.href}"]=l.location.href,a["{random}"]=Math.floor(1e12*Math.random()),b(this.mediainfo,a,"custom_fields"),b(this.mediainfo,a,"customFields"),a)t=t.split(r).join(T(a[r],n));return t=t.replace(/{pageVariable\.([^}]+)}/g,function(t,o){for(var a=void 0,r=l,i=o.split("."),d=0;d<i.length;d++)d===i.length-1?a=r[i[d]]:r=r[i[d]];var s=void 0===a?"undefined":g(a);return null===a?"null":void 0===a?(e.log.warn('Page variable "'+o+'" not found'),""):"string"!==s&&"number"!==s&&"boolean"!==s?(e.log.warn('Page variable "'+o+'" is not a supported type'),""):T(String(a),n)})}.bind(n),function(e){e.ads.contentSrc=e.currentSrc(),e.ads._seenInitialLoadstart=!1,e.on("loadstart",function(){if(!e.ads.inAdBreak()){var t=e.currentSrc();t!==e.ads.contentSrc&&(e.ads._seenInitialLoadstart&&e.trigger({type:"contentchanged"}),e.trigger({type:"contentupdate",oldValue:e.ads.contentSrc,newValue:t}),e.ads.contentSrc=t),e.ads._seenInitialLoadstart=!0}})}(n),n.on("contentchanged",n.ads.reset);var r=function(){var t=n.textTracks();if(!n.ads.shouldPlayContentBehindAd(n)&&n.ads.inAdBreak()&&n.tech_.featuresNativeTextTracks&&e.browser.IS_IOS&&!Array.isArray(n.textTracks()))for(var o=0;o<t.length;o++){var a=t[o];"showing"===a.mode&&(a.mode="disabled")}};n.ready(function(){n.textTracks().addEventListener("change",r)}),n.on(["play","playing","ended","adsready","adscanceled","adskip","adserror","adtimeout","ads-ad-started","contentchanged","contentresumed","contentended","nopreroll","nopostroll"],function(e){n.ads._state.handleEvent(e.type)}),n.on("dispose",function(){n.textTracks().removeEventListener("change",r)})};return(e.registerPlugin||e.plugin)("ads",N),N});