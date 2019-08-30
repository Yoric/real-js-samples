define(["jquery","counters","base/view","util/helpers","util/htmlescape","video-html5/commerce/trash-wrapper","video-html5/commerce/rbadman-wrapper"],function(a,b,c,d,e,f,g){"use strict";var h=c.extend({props:{events:{timeupdate:"onVideoTimeUpdate",ended:"onVideoEnded",pause:"onVideoPaused",play:"onVideoPlay"},cssClasses:{advContainer:"b-video-html5__adv-container",overlayContainer:"b-video-html5__overlay-container",preloader:"b-video-html5__preloader"},overlayTriggerName:{TIME:1,PAUSE:2,BLACK_SCREEN:3,FULLSCREEN:4,PREVIOUS:5},trashOverlayPolicyName:{FULLSCREEN:"fullscreen",BLACK:"black",EMPTY:"empty",REPLACE:"replace",EXLUDE_DOMAIN:"exclude_domain",CLOSE_ON_CLICK:"closeOnClick"},deferred:{blackScreenDetector:"video-html5/plugins/black-screen-detector",external:"video-html5/commerce/external"},defaultOptions:{overlayPercents:[25,50,75],overlayStartTime:5,checkTitlesSince:3600},CNT:{advStarted:16705972,advStartedInternal:16706038,advStartedExternal:16706049,advStartedAuth:23841661,advFinished:16706107,advFinishedInternal:16706124,advFinishedExternal:16706137,channelAdv:6086996,overlayRequest:20088895,overlayClicked:22307989,overlayRepeated:26648465,overlayRepeatedClick:26737969,overlayBlackShown:26994395,overlayBlackClicked:26994402,overlayFullscreenShow:27095748,overlayFullscreenClick:27095806,goAdvRequest:25568714,siteZone3:25606531,siteZone3And30:25606536,skipAd:25606833}},public:{init:function(){return this.stat=this.options.stat,this.$video=this.$el,this.createChildren(),this.options.params.videoEl=this.$advVideo.get(0),this.options.$overlayContainer=this.$overlayContainer,this.trashOverlayPolicy=this.options.customOverlayShowPolicy?JSON.parse(e.unescape(this.options.customOverlayShowPolicy).replace(/\\/g,"")):{},this.externalAdvConfig=this.options.externalAdvConfig?JSON.parse(e.unescape(this.options.externalAdvConfig).replace(/\\/g,"")):{},this.trash=f.createRunTime(d.extend(!0,this.options,{$container:this.$advContainer,closeOverlayOnClick:this.trashOverlayPolicy[this.trashOverlayPolicyName.CLOSE_ON_CLICK]}),this.$video),this.adman=g.createRunTime(this.options,this.$video),this.bindEvents(),this.canLoadExternalAdv()&&"1"===this.externalAdvConfig.onInit&&(!this.options.autoplay||"1"!==this.externalAdvConfig.onPlay&&"1"!==this.externalAdvConfig.onOverlay)&&this.showExternalAd(),h.__super__.init.call(this)},destroy:function(){return this.adman&&(this.adman.off(),this.adman.destroy(),delete this.adman),this.trash&&(this.trash.destroy(),delete this.trash),this.updateOverlayTimer&&clearTimeout(this.updateOverlayTimer),a(document).off("webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange",this.fullScreenChangeHandler),h.__super__.destroy.call(this)},pause:function(){this.currentPreroll&&this.currentPreroll.pause(),a(document).trigger("VideoPlayer.pause",[this.$video[0]])},clearOverlay:function(){this.$overlayContainer.find("*").empty(),this.overlayCleared=!0},resume:function(){this.currentPreroll&&this.currentPreroll.resume(),a(document).trigger("VideoPlayer.play",[this.$video[0]])},isPlaying:function(){return!!this.currentPreroll},getControls:function(){if(this.currentPreroll)return this.currentPreroll.getControls()}},protected:{createChildren:function(){this.$advContainer=a("<div></div>").addClass(this.cssClasses.advContainer).appendTo(this.options.$parentElement).hide(),this.$preloader=a("<div></div>").addClass(this.cssClasses.preloader).appendTo(this.$advContainer),this.$advVideo=a("<video preload autoplay ><source></source></video>").css({width:"100%",height:"100%"}).appendTo(this.$advContainer),this.$overlayContainer=a("<div></div>").addClass(this.cssClasses.overlayContainer).appendTo(this.options.$parentElement)},bindEvents:function(){this.fullScreenChangeHandler=this.onFullScreenChange.bind(this),a(document).on("webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange",this.fullScreenChangeHandler),this.adman.on("overlay_clicked",this.onOverlayClicked.bind(this))},onVideoPlay:function(){this.overlayCleared=!1,this.inited||(this.canShowAdman()&&this.adman.load().then(function(){this.canShowAdmanPreroll()?(this.currentPreroll=this.adman,this.startPreroll()):b.myrb(this.CNT.skipAd)}.bind(this)),this.canShowTrashPreroll()&&(this.currentPreroll=this.trash,this.startPreroll()),this.inited=!0,3==this.options.params.params._SITEZONE&&(b.myrb(this.CNT.siteZone3),this.options.params.params.duration>1800&&b.myrb(this.CNT.siteZone3And30)),this.canLoadExternalAdv()&&"1"===this.externalAdvConfig.onPlay&&this.showExternalAd().then(function(){this.externalAdvPlayed||(m1play(),this.externalAdvPlayed=!0)}.bind(this)))},showExternalAd:function(){return new Promise(function(a,b){this.require("external",function(b){b.createRunTime(this.externalAdvConfig,this.$video),a()}.bind(this))}.bind(this))},startPreroll:function(){this.$advContainer.show(),this.$video[0].pause(),this.currentPreroll.playPreroll().then(this.onPrerollComplete.bind(this),this.onPrerollComplete.bind(this)),b.myrb(this.CNT.advStarted),this.options.external?b.myrb(this.CNT.advStartedExternal):b.myrb(this.CNT.advStartedInternal),this.options.authorized&&b.myrb(this.CNT.advStartedAuth),"go"===this.options.partnerId&&b.myrb(this.CNT.goAdvRequest),this.stat.sendTNS("start-pre-roll"),a(document).trigger("VideoPlayer.advStarted")},onPrerollComplete:function(){this.$video[0].play(),delete this.currentPreroll,b.myrb(this.CNT.advFinished),this.options.external?b.myrb(this.CNT.advFinishedExternal):b.myrb(this.CNT.advFinishedInternal),this.stat.comScoreStop(),a(document).trigger("VideoPlayer.advComplete")},onFullScreenChange:function(a){var b=!!(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement);this.overlayCleared=!1,!b&&this.canShowOverlay()&&(this.overlayTrigger=this.overlayTriggerName.FULLSCREEN,this.startOverlay())},onVideoEnded:function(a){this.$overlayContainer.find("*").empty()},onVideoTimeUpdate:function(a){if(!this.overlayTimePoints){var b,c;if(this.overlayTimePoints=[this.options.overlayStartTime],this.options.multiOverlay)for(b=0;b<this.options.overlayPercents.length;b++)c=parseInt(this.$video[0].duration*this.options.overlayPercents[b]/100,10)+5,c-this.overlayTimePoints[this.overlayTimePoints.length-1]>600&&this.overlayTimePoints.push(c)}this.$video[0].currentTime>=this.overlayTimePoints[0]&&this.canShowOverlay()&&(this.overlayTrigger=this.overlayTriggerName.TIME,this.startOverlay(),this.overlayTimePoints.shift()),this.options.checkTitlesSince>-1&&this.$video[0].duration>this.options.checkTitlesSince&&!this.blackScreenDetector&&this.detectBlackScreen()},onVideoPaused:function(a){this.canShowOverlay()&&!this.$video[0].ended&&(this.overlayTrigger=this.overlayTriggerName.PAUSE,this.startOverlay())},onOverlayClicked:function(){b.myrb(this.CNT.overlayClicked),this.overlayTrigger===this.overlayTriggerName.BLACK_SCREEN?b.myrb(this.CNT.overlayBlackClicked):this.overlayTrigger===this.overlayTriggerName.FULLSCREEN?b.myrb(this.CNT.overlayFullscreenClick):this.overlayTrigger===this.overlayTriggerName.PREVIOUS&&b.myrb(this.CNT.overlayRepeatedClick)},detectBlackScreen:function(){window.Worker&&this.require("blackScreenDetector",function(a){this.blackScreenDetector=a.createRunTime({onDetect:function(){this.canShowOverlay()&&(this.overlayTrigger=this.overlayTriggerName.BLACK_SCREEN,this.startOverlay())}.bind(this)},this.$video)}.bind(this))},startOverlay:function(){this.canShowTrashOverlay()?(this.overlayPending=!0,b.myrb(this.CNT.overlayRequest),this.overlayTrigger===this.overlayTriggerName.BLACK_SCREEN?b.myrb(this.CNT.overlayBlackShown):this.overlayTrigger===this.overlayTriggerName.FULLSCREEN&&b.myrb(this.CNT.overlayFullscreenShow),this.trash.startOverlay().then(function(){this.overlayPending=!1,this.startUpdateTimer()}.bind(this),function(){this.overlayPending=!1,this.isTrashCluster("overlay",this.trashOverlayPolicyName.REPLACE)&&this.canShowAdmanOverlay()?this.adman.startOverlay().then(null,this.onOverlayFail.bind(this)):this.onOverlayFail()}.bind(this))):this.canShowAdmanOverlay()?(this.overlayPending=!0,b.myrb(this.CNT.overlayRequest),this.overlayTrigger===this.overlayTriggerName.BLACK_SCREEN?b.myrb(this.CNT.overlayBlackShown):this.overlayTrigger===this.overlayTriggerName.FULLSCREEN&&b.myrb(this.CNT.overlayFullscreenShow),this.adman.startOverlay().then(function(){this.overlayPending=!1}.bind(this),function(){this.overlayPending=!1,this.options.showLastOverlay?(this.overlayTrigger=this.overlayTriggerName.PREVIOUS,this.adman.showLastOverlay().then(null,this.onOverlayFail.bind(this)),b.myrb(this.CNT.overlayRepeated),b.myrb(this.CNT.overlayRequest)):this.isTrashCluster("overlay",this.trashOverlayPolicyName.EMPTY)&&this.isTrashOverlayAllowedDomain()&&this.checkPlayerSize()?this.trash.startOverlay().then(function(){this.startUpdateTimer()}.bind(this),this.onOverlayFail.bind(this)):this.onOverlayFail()}.bind(this))):this.onOverlayFail(),this.canLoadExternalAdv()&&"1"===this.externalAdvConfig.onOverlay&&this.showExternalAd().then(function(){this.externalAdvPlayed||(m1play(),this.externalAdvPlayed=!0)}.bind(this))},startUpdateTimer:function(){this.trashOverlayPolicy.updatePeriod>0&&(this.updateOverlayTimer&&clearTimeout(this.updateOverlayTimer),this.updateOverlayTimer=setTimeout(function(){0!==this.$overlayContainer.children().children().length&&this.startOverlay()}.bind(this),1e3*this.trashOverlayPolicy.updatePeriod))},onOverlayFail:function(){this.overlayTrigger===this.overlayTriggerName.PAUSE&&this.$video[0].paused&&!this.options.isCorp&&this.options.onPauseOverlayFail&&this.options.onPauseOverlayFail()},canLoadExternalAdv:function(){if(void 0===this._canLoadExternalAdv){var a,b=this.externalAdvConfig.excludedDomains&&this.externalAdvConfig.excludedDomains.split(",");if(b&&this.options.referrer)for(a=0;a<b.length;a++)if(this.options.referrer.indexOf(b[a])!==-1)return this._canLoadExternalAdv=!1,this._canLoadExternalAdv;this._canLoadExternalAdv="1"===this.externalAdvConfig.enabled&&(this.options.external||"1"===this.externalAdvConfig.internal)&&(!this.options.authorized||"1"!==this.externalAdvConfig.unauth)&&!this.options.isCorp}return this._canLoadExternalAdv},isTrashCluster:function(a,b){var c,d=!1;return c="overlay"===a&&b?this.trashOverlayPolicy&&this.trashOverlayPolicy[b]:"overlay"===a?this.options.trashOverlayClusters:this.options.trashPrerollClusters,"all"===c?d=!0:c&&this.options.cluster&&("string"==typeof c&&(c=c.split(",")),d=c.indexOf(String(this.options.cluster.id))!==-1),d},canShowTrashPreroll:function(){return!this.options.isCorp&&this.isTrashCluster("preroll")},canShowTrashOverlay:function(){return this.isTrashOverlayAllowedDomain()&&this.checkPlayerSize()&&(this.isTrashCluster("overlay")||this.isTrashCluster("overlay",this.trashOverlayPolicyName.FULLSCREEN)&&this.overlayTrigger===this.overlayTriggerName.FULLSCREEN||this.isTrashCluster("overlay",this.trashOverlayPolicyName.BLACK)&&this.overlayTrigger===this.overlayTriggerName.BLACK_SCREEN)},isTrashOverlayAllowedDomain:function(){var a,b=this.trashOverlayPolicy&&this.trashOverlayPolicy[this.trashOverlayPolicyName.EXLUDE_DOMAIN];if(this.options.isCorp)return!1;if(b&&this.options.referrer)for(b=b.split(","),a=0;a<b.length;a++)if(this.options.referrer.indexOf(b[a])!==-1)return!1;return!0},checkPlayerSize:function(){return this.trashOverlayPolicy.minWidth<=this.$video.width()},canShowAdmanPreroll:function(){return!this.options.disablePreroll},canShowAdmanOverlay:function(){return!this.options.disableOverlay},canShowAdman:function(){return this.canShowAdmanPreroll()||this.canShowAdmanOverlay()},canShowTrash:function(){return this.isTrashCluster("overlay",this.trashOverlayPolicyName.FULLSCREEN)||this.isTrashCluster("overlay",this.trashOverlayPolicyName.BLACK)||this.canShowTrashPreroll()},canShowOverlay:function(){return(0===this.$overlayContainer.children().children().length||this.trashOverlayPolicy.forceUpdate)&&!this.currentPreroll&&!this.overlayPending&&!this.overlayCleared&&this.inited}}});return h});