_satellite.pushAsyncScript(function(event, target, $variables){
  
if (window.tagging !== null && window.tagging.jsll !== null) {
    (function (tag, tj, tu, $) {
        tu.isNotOurVideo = true;
        tu.videosTagged = false;
        var baseCCPA = awa.ct.captureContentPageAction;
        tu.attachedEvent = {};
        awa.ct.captureContentPageAction = function (o) {
            if (o.behavior > 239 && o.behavior < 253 && o.behavior !== 250 && o.behavior !== 251 && tu.isNotOurVideo) {
                // Do nothing when it received video tagging from OnePlayer
            } else if (o.behavior === 253) {
                // When it received 253, start to put tagging.
                baseCCPA(o);
                if (!tu.videosTagged) {
                    $("iframe[id*=oneplayer]").each(function (idx) {
                        // Static Videos
                        if ($(this).contents().find('video').length) {
                            tu.attachedEvent[idx] = false;
                            tu.videoTagging($(this).contents().find("video"), idx);
                        } else {
                            var attachedEventStatic = false;
                            tu.attachedEvent[idx] = false;
                            $(this).contents().find('.c-video-player').on("DOMNodeInserted", function (e1) {
                                if (tu.attachedEvent[idx] || attachedEventStatic) {
                                    $(this).off("DOMNodeInserted");
                                    return;
                                }
                                if (e1.target.innerHTML.length > 0) {
                                    tu.videoTagging($(this).contents().find("video"), idx);
                                    attachedEventStatic = true;
                                }
                            });
                        }
                        // Dynamic Videos
                        $(this).contents().find('.c-video-player').on('DOMNodeRemoved', function (e2) {
                            if (tu.attachedEvent[idx]) {
                                $(this).off("DOMNodeRemoved");
                                return;
                            }
                            if (e2.target.innerHTML.length > 0) {
                                tu.videoTagging($(this).contents().find("video"), idx);
                                tu.attachedEvent[idx] = true;
                            }
                        });
                    });
                    tu.videosTagged = true;
                }
            } else {
                baseCCPA(o);
            }
        };
        tu.videoTagging = function (theVideo, idx) {
            var isEnded = false;
            var isMuted = "";
            var isloop = "";
            var shouldCapture = true;
            var paused = false;
            var lastSentPercentage = -1;
            var started = false;
            var completed = false;
            var myTimeStamp = Math.floor(Date.now() / 1000);
            var videoObject = {};
            videoObject.contentTags = {};
            videoObject.behavior = "";
            videoObject.actionType = "";
            videoObject.contentTags.vidnm = "";
            videoObject.contentTags.area = "body" || "";
            videoObject.contentTags.vidpct = "";
            videoObject.contentTags.viddur = "";
            videoObject.contentTags.type = "video";
            /**
             * Track Waiting for deciding it's jump or a real pause
             */
            $(theVideo).on("ended", function () {
                isEnded = true;
            });
            /**
             * For behavior video start
             */
            $(theVideo).on("playing", function () {
                if (!videoObject.actionType) {
                    videoObject.actionType = theVideo[0].autoplay ? "A" : "O";
                }
                if (!videoObject.contentTags.viddur) {
                    videoObject.contentTags.viddur = theVideo[0].duration;
                }
                if (typeof isMuted !== "boolean") {
                    isMuted = (theVideo[0].muted || theVideo[0].volume === 0);
                }
                if (typeof isloop !== "boolean") {
                    isloop = theVideo[0].loop;
                }
                if (!videoObject.contentTags.vidnm) {
                    videoObject.contentTags.vidnm = theVideo[0].currentSrc ? theVideo[0].currentSrc.split("/").pop() : $(theVideo).attr("alt") || "";
                }
                if (Math.floor(theVideo[0].currentTime) === 0 && shouldCapture) {
                    if (started && completed && isEnded) {
                        videoObject.behavior = "VIDEOREPLAY";
                        videoObject.contentTags.vidpct = "0";
                        tu.isNotOurVideo = false;
                        window.awa.ct.captureContentPageAction(videoObject);
                        tu.isNotOurVideo = true;
                    } else if (!started) {
                        videoObject.behavior = "VIDEOSTART";
                        videoObject.contentTags.vidpct = "0";
                        tu.isNotOurVideo = false;
                        window.awa.ct.captureContentPageAction(videoObject);
                        tu.isNotOurVideo = true;
                        started = true;
                        tu.attachedEvent[idx] = true;
                    }
                    if (videoObject.actionType === "A") {
                        shouldCapture = false;
                    }
                }
                if (paused && shouldCapture) {
                    paused = false;
                    var roundedPercentage = Math.floor(theVideo[0].currentTime / theVideo[0].duration * 10) * 10;
                    videoObject.behavior = "VIDEOCONTINUE";
                    videoObject.contentTags.vidpct = roundedPercentage.toString();
                    tu.isNotOurVideo = false;
                    window.awa.ct.captureContentPageAction(videoObject);
                    tu.isNotOurVideo = true;
                }
                isEnded = theVideo[0].ended;
            });
            /**
             * For behavior video checkpoint and video complete
             */
            $(theVideo).on("timeupdate", function () {
                if (!videoObject.actionType) {
                    videoObject.actionType = theVideo[0].autoplay ? "A" : "O";
                }
                if (!videoObject.contentTags.viddur) {
                    videoObject.contentTags.viddur = theVideo[0].duration;
                }
                if (typeof isMuted !== "boolean") {
                    isMuted = (theVideo[0].muted || theVideo[0].volume === 0);
                }
                if (typeof isloop !== "boolean") {
                    isloop = theVideo[0].loop;
                }
                if (!videoObject.contentTags.vidnm) {
                    videoObject.contentTags.vidnm = theVideo[0].currentSrc ? theVideo[0].currentSrc.split("/").pop() : $(theVideo).attr("alt") || "";
                }
                var ishundredPercent = ((theVideo[0].currentTime / theVideo[0].duration * 100) >= 99 || (theVideo[0].duration - theVideo[0].currentTime) < 0.75);
                if (videoObject.actionType === "O" && shouldCapture && !ishundredPercent && !paused && !isEnded) {
                    var roundedPercentage = Math.floor(theVideo[0].currentTime / theVideo[0].duration * 10) * 10;
                    // Video CheckPoint 10-19 will be 10%
                    if (roundedPercentage !== lastSentPercentage) {
                        videoObject.behavior = "VIDEOCHECKPOINT";
                        videoObject.contentTags.vidpct = roundedPercentage.toString();
                        tu.isNotOurVideo = false;
                        window.awa.ct.captureContentPageAction(videoObject);
                        tu.isNotOurVideo = true;
                        lastSentPercentage = roundedPercentage;
                    }
                    // turnoff isEnded
                    if (Math.floor(theVideo[0].currentTime / theVideo[0].duration * 100) > 1 && theVideo[0].currentTime > 1) {
                        isEnded = theVideo[0].ended;
                    }
                }
                if (videoObject.actionType === "O" && shouldCapture && !completed && ishundredPercent) {
                    videoObject.behavior = "VIDEOCOMPLETE";
                    videoObject.contentTags.vidpct = "100";
                    tu.isNotOurVideo = false;
                    window.awa.ct.captureContentPageAction(videoObject);
                    tu.isNotOurVideo = true;
                    completed = true;
                    if (isloop) {
                        shouldCapture = false;
                    }
                }
                if (ishundredPercent && videoObject.actionType === "O") {
                    if (lastSentPercentage !== 100) {
                        myTimeStamp = Math.floor(Date.now() / 1000);
                        videoObject.behavior = "VIDEOCHECKPOINT";
                        videoObject.contentTags.vidpct = "100";
                        tu.isNotOurVideo = false;
                        window.awa.ct.captureContentPageAction(videoObject);
                        tu.isNotOurVideo = true;
                        lastSentPercentage = 100;
                        if (isloop) {
                            shouldCapture = false;
                        }
                    }
                }
                if (ishundredPercent) {
                    isEnded = true;
                }
            });

            /**
             * For behavior video jump
             */
            $(theVideo).on("seeked", function () {
                if (shouldCapture && Math.floor(Date.now() / 1000) - myTimeStamp > 1 && !isEnded) {
                    // Video CheckPoint 10-19 will be 10%
                    var exactPercentage = Math.floor(theVideo[0].currentTime / theVideo[0].duration * 100);
                    var roundedPercentage = Math.floor(exactPercentage / 10) * 10;
                    // Stop this event if it's from 100 and started from 0
                    if (lastSentPercentage === 100 && (exactPercentage === 0 || theVideo[0].currentTime < 0.75)) {
                        return;
                    }
                    videoObject.behavior = "VIDEOJUMP";
                    videoObject.contentTags.vidpct = roundedPercentage.toString();
                    tu.isNotOurVideo = false;
                    window.awa.ct.captureContentPageAction(videoObject);
                    tu.isNotOurVideo = true;
                    // lastSentPercentage = roundedPercentage;
                    // shouldCapture = true;
                    if (videoObject.actionType === "A") {
                        videoObject.actionType = "O";
                    }
                    myTimeStamp = Math.floor(Date.now() / 1000);
                }
            });
            /**
             * Tracking user Paused the video
             */
            $(theVideo).on("pause", function () {
                if (theVideo[0].readyState > 2 && !theVideo[0].ended) {
                    paused = true;
                    var roundedPercentage = Math.floor(theVideo[0].currentTime / theVideo[0].duration * 10) * 10;
                    videoObject.behavior = "VIDEOPAUSE";
                    videoObject.contentTags.vidpct = roundedPercentage.toString();
                    tu.isNotOurVideo = false;
                    window.awa.ct.captureContentPageAction(videoObject);
                    tu.isNotOurVideo = true;
                } else {
                    paused = false;
                }
                if (!theVideo[0].ended) {
                    shouldCapture = true;
                    if (videoObject.actionType === "A") {
                        videoObject.actionType = "O";
                    }
                }
            });

            $(theVideo).on("volumechange", function () {
                if (!isMuted && (theVideo[0].muted || theVideo[0].volume === 0) && videoObject.actionType === "A") {
                    isMuted = (theVideo[0].muted || theVideo[0].volume === 0);
                    shouldCapture = false;
                    videoObject.behavior = "VIDEOMUTE";
                } else if (!isMuted && (theVideo[0].muted || theVideo[0].volume === 0) && videoObject.actionType === "O") {
                    isMuted = (theVideo[0].muted || theVideo[0].volume === 0);
                    shouldCapture = true;
                    videoObject.behavior = "VIDEOMUTE";
                } else if (isMuted && (!theVideo[0].muted && theVideo[0].volume > 0)) {
                    isMuted = (theVideo[0].muted || theVideo[0].volume === 0);
                    shouldCapture = true;
                    videoObject.behavior = "VIDEOUNMUTE";
                    if (videoObject.actionType === "A") {
                        videoObject.actionType = "O"
                    }
                } else {
                    // isMuted = theVideo.muted;
                    // shouldCapture = true;
                    // if (videoObject.actionType === "A") {
                    //   videoObject.actionType = "O"
                    // }
                    return;
                }
                var roundedPercentage = Math.floor(theVideo[0].currentTime / theVideo[0].duration * 10) * 10;
                videoObject.contentTags.vidpct = roundedPercentage.toString();
                tu.isNotOurVideo = false;
                window.awa.ct.captureContentPageAction(videoObject);
                tu.isNotOurVideo = true;
            });
        };

        // $("iframe.oneplayer-iframe").each(function(idx){
        //   this.contentWindow.awa.ct.captureContentPageAction = function (o) {
        //     window.awa.ct.captureContentPageAction(o);
        //   };
        // });
    }(window.tagging, window.tagging.jsll, window.tagging.util, window.jQuery));
}
});
