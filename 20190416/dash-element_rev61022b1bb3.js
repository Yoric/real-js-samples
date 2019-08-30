define(["jquery","counters","base/event","util/helpers","video-html5/quality-selector","video-html5/storage"],function(a,b,c,d,e,f){"use strict";var g=c.extend({props:{CNT:{init:25786767,manifestError:25786788,initError:25786797,segmentError:25786800,playBackError:25786802},deferred:{dash:"mpeg-dash",dashDebug:"mpeg-dash-debug",webRTC:"web-rtc"},defaultOptions:{webRTCUrl:"//cdn.candy.systems/js/mm/candy2.min.js",delayAfterSetQuality:2e3,maxSeekTime:1e4}},public:{init:function(a){return this.options=d.extend(!0,{},this.defaultOptions,a),this.$video=this.options.$video,this.video=this.$video.get(0),this.activeRequests={},this.errorMode=!1,this.require(this.options.debug?"dashDebug":"dash",function(a){this.initVideo()}.bind(this)),this},initVideo:function(){this.currentQuality=this.getVideoQuality(),this.currentQuality&&(this.currentSrc=this.getMpdUrl(this.currentQuality.src)),this.startTime=this.options.time||0,this.options.useWebRTC?this.require(this.options.webRTCUrl).then(function(){this.initPlayer(Candy.dashWrapper(10,dashjs.MediaPlayer().create()))}.bind(this),function(){this.initPlayer(dashjs.MediaPlayer().create())}.bind(this)):this.initPlayer(dashjs.MediaPlayer().create()),this.initStartAt=Date.now(),b.myrb(this.CNT.init)},initPlayer:function(a){this.player=a,this.player.setXHRWithCredentials(!0),this.initStartAt=Date.now(),this.player.initialize(this.video,this.currentSrc,!1),this.player.isReady()&&(this.player.setFastSwitchEnabled(!0),this.player.setAutoSwitchQuality(!1),this.options.dashBufferTime>0&&(this.player.setBufferToKeep(this.options.dashBufferTime),this.player.setBufferTimeAtTopQuality(this.options.dashBufferTime)),this.player.getDebug().setLogToBrowserConsole(!!this.options.debug),this.bindEvents(),this.options.onReady())},getId:function(){return"dash"},destroy:function(){this.player&&(this.player.off(dashjs.MediaPlayer.events.STREAM_INITIALIZED,this.onStreamInited,this),this.player.off(dashjs.MediaPlayer.events.PLAYBACK_ENDED,this.onStreamComplete,this),this.player.off(dashjs.MediaPlayer.events.PLAYBACK_PLAYING,this.onStreamPlay,this),this.player.off(dashjs.MediaPlayer.events.ERROR,this.onStreamError,this),this.player.off(dashjs.MediaPlayer.events.PLAYBACK_ERROR,this.onPlaybackError,this),this.player.off("fragmentLoadingStarted",this.onSegmentLoadingStart,this),this.player.off("fragmentLoadingCompleted",this.onSegmentLoadingComplete,this),this.player.off("fragmentLoadingAbandoned",this.onSegmentLoadingComplete,this),this.player.isReady()&&this.player.reset()),this.seekTimer&&(clearInterval(this.seekTimer),delete this.seekTimer),this.loadingTimer&&(clearInterval(this.loadingTimer),delete this.loadingTimer),g.__super__.destroy.call(this)},setQuality:function(a){if(this.startTime=this.video.currentTime,this.currentQuality=this.getQualityByIndex(a),this.currentSrc=this.getMpdUrl(this.currentQuality.src),this.qualitySwitching=!0,this.errorMode=!1,0===this.currentSrc.indexOf("//")){var b=new URL(location.href).protocol;this.currentSrc=b+this.currentSrc}this.player.attachSource(this.currentSrc),f.setParam("quality",a),this.$video.trigger("video.qualityChanged",[this.currentQuality.name,a])},isPaused:function(){if(this.player&&this.player.isReady())return this.player.isPaused()},play:function(){this.errorMode||(this.started=!0,this.player.play())},pause:function(){this.player.pause()},seek:function(a){a=parseInt(a,10),a>=0&&(this.watchSeekProgress(a),this.player.seek(a))},isSeeking:function(){return this.player.isSeeking()},getCurrentTime:function(){return this.player.time()},getDuration:function(){return void 0!==this.player.isPaused()&&this.player.isReady()?this.player.duration():0},setVolume:function(a){this.player&&a>=0&&this.player.setVolume(a)},getVolume:function(){return this.player.getVolume()},getCdn:function(){return this.currentSrc.match(/cdn\d+/)[0]},getBufferedPercent:function(){var a,b=0;try{a=this.player.getBufferLength("video")}catch(b){a=0}return a>0&&(b=(this.getCurrentTime()+a)/this.getDuration()*100),b}},protected:{getMpdUrl:function(a){var b=a.indexOf(".mp4");return a.indexOf("stream.mpd")===-1&&(a=a.slice(0,b+4)+"/stream.mpd"+a.slice(b+4,a.length)),a},bindEvents:function(){this.player.on(dashjs.MediaPlayer.events.STREAM_INITIALIZED,this.onStreamInited,this),this.player.on(dashjs.MediaPlayer.events.PLAYBACK_ENDED,this.onStreamComplete,this),this.player.on(dashjs.MediaPlayer.events.PLAYBACK_PLAYING,this.onStreamPlay,this),this.player.on(dashjs.MediaPlayer.events.ERROR,this.onStreamError,this),this.player.on(dashjs.MediaPlayer.events.PLAYBACK_ERROR,this.onPlaybackError,this),this.player.on("fragmentLoadingStarted",this.onSegmentLoadingStart,this),this.player.on("fragmentLoadingCompleted",this.onSegmentLoadingComplete,this),this.player.on("fragmentLoadingAbandoned",this.onSegmentLoadingComplete,this)},onStreamInited:function(a){this.startTime&&this.seek(this.startTime),this.qualitySwitching&&this.play(),this.qualitySwitching=!1},onStreamComplete:function(a){this.completed=!0,this.startTime=0,setTimeout(function(){this.player.attachSource(this.currentSrc)}.bind(this),100)},onStreamPlay:function(a){this.completed=!1},onStreamError:function(a){switch(a.event.id){case"initialization":var c=(Date.now()-this.initStartAt)/1e3;b.myrb(this.CNT.initError),c>=20?this.options.stat.sendToGraphite("dash_loading.20.init_error"):c>=10?this.options.stat.sendToGraphite("dash_loading.10.init_error"):c>=5&&this.options.stat.sendToGraphite("dash_loading.5.init_error");break;case"manifest":b.myrb(this.CNT.manifestError);break;case"content":b.myrb(this.CNT.segmentError)}this.$video.trigger("dash.error",[a]),this.errorMode=!0},onPlaybackError:function(a){this.$video.trigger("dash.error",[a]),b.myrb(this.CNT.playBackError),this.errorMode=!0},onSegmentLoadingStart:function(a){this.activeRequests[a.request.url]=Date.now(),this.checkLoadingTime()},onSegmentLoadingComplete:function(a){delete this.activeRequests[a.request.url]},checkLoadingTime:function(){var a,b,c,d=Date.now();return Object.keys(this.activeRequests).length>0&&this.loadingTimer?void(this.loadingTimer=setInterval(this.checkLoadingTime.bind(this),5e3)):0===Object.keys(this.activeRequests).length?(clearInterval(this.loadingTimer),void delete this.loadingTimer):(Object.keys(this.activeRequests).forEach(function(e){d-this.activeRequests[e]>=2e4?c=e.match(/cdn\d+/)[0]:d-this.activeRequests[e]>=1e4?b=e.match(/cdn\d+/)[0]:d-this.activeRequests[e]>=5e3&&(a=e.match(/cdn\d+/)[0])}.bind(this)),void(c?this.options.stat.sendToGraphite("dash_loading.20."+c):b?this.options.stat.sendToGraphite("dash_loading.10."+b):a&&this.options.stat.sendToGraphite("dash_loading.5."+a)))},getVideoQuality:function(){return e.getVideoQuality(this.options.qualityList,this.options.external)},getQualityByIndex:function(a){return e.getQualityByIndex(this.options.qualityList,a)},watchSeekProgress:function(a){this.seekTimer&&clearInterval(this.seekTimer),this.seekTimer=setInterval(function(){var b,c=0,d=-1;if(this.video.seeking){for(c;c<this.video.buffered.length;c++)if(b=this.video.buffered.start(c),b-a<10&&b>a&&(b<d||d===-1)&&(d=b),a>=b&&a<=this.video.buffered.end(c)){d=-1;break}d!==-1&&(console.log("force seek: "+d+" from time: "+a),this.video.currentTime=Math.ceil(d),clearInterval(this.seekTimer))}else clearInterval(this.seekTimer)}.bind(this),this.options.maxSeekTime)}}});return g});