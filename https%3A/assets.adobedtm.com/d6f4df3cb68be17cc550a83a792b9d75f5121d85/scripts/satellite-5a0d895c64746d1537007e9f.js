_satellite.pushAsyncScript(function(event, target, $variables){
  /* Rule Id: 2067861 */
var t = window.tagging;
t.vt = window.tagging.vt || {};
(function (td, tu, tj, vt, $) {
    vt.codeVersion = "2017nov16v1";
    vt.checkpointCntnr = function (inPct, inTextValue, inParentCntnr) {
        try {
            this.cpPercent = inPct;
            this.textValue = inTextValue;
            this.parentCntnr = inParentCntnr;
            this.hasFired = false;

            if (this.textValue === "start") {
                this.behaviorVal = "240";
            } else if (this.textValue === "finish") {
                this.behaviorVal = "245";
            } else {
                this.behaviorVal = "243";
            }
        } catch (e) {
            tu.debugLog("Error in the vt.checkpointCntnr function. Inside video tracking script. Error: " + e);
        }
    };
    var tWdxObj;
    vt.checkpointCntnr.prototype.fireEvent = function () {
        try {
            if (this.hasFired || !this.parentCntnr) {
                return;
            }
            this.hasFired = true;
            //transformation on cpPercent to align with SDG
            this.cpPercent = this.cpPercent * 100;
            //end transformations
            tWdxObj = {};
            tWdxObj.contentTags = {};
            tWdxObj.behavior = this.behaviorVal;
            tWdxObj.actionType = "A";
            tWdxObj.contentTags.vidnm = this.parentCntnr.videoTitle;
            tWdxObj.contentTags.area = this.parentCntnr.pgarea;
            tWdxObj.contentTags.vidpct = this.cpPercent;
            tWdxObj.contentTags.type = "learn";
            if (this.parentCntnr.videoId) {
                tWdxObj.contentTags.vidid = this.parentCntnr.videoId;
            }
            //call the awa captureContentPageAction API
            awa.ct.captureContentPageAction(tWdxObj);
        } catch (e) {
            tu.debugLog("Error in the vt.checkpointCntnr.prototype.fireEvent function. Inside video tracking script. Error: " + e);
        }
    };
    vt.checkpointCompRates = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9];
    vt.videoCntnr = function (inTitle, inVideoId, inVideoSite) {
        try {
            this.videoTitle = inTitle;
            this.videoId = inVideoId;
            this.videoSite = inVideoSite;
            this.player = null;
            this.jqVideoElement = null;
            this.videoLength = 0;
            this.watchTime = 0;
            this.completionRate = 0;
            this.pgarea = "body";
            this.cpStart = new vt.checkpointCntnr(0, "start", this);
            this.cpFinish = new vt.checkpointCntnr(1, "finish", this);
            //a list of progress checkpoints
            this.cpList = [];

            var self = this;
            $.each(vt.checkpointCompRates, function (index, cpCompRate) {
                self.cpList.push(new vt.checkpointCntnr(cpCompRate, cpCompRate.toString(), self));
            });
        } catch (e) {
            tu.debugLog("Error in the vt.videoCntnr function. Inside video tracking script. Error: " + e);
        }
    };
    vt.videoCntnr.prototype.setPlayer = function (inVideoElement) {
        try {
            if (this.player && this.jqVideoElement && this.jqVideoElement.length > 0) {
                //util.debugLog("setPlayer : already set for " + this.videoTitle);
                return;
            }
            this.player = inVideoElement;
            this.jqVideoElement = $(inVideoElement);
        } catch (e) {
            tu.debugLog("Error in the vt.videoCntnr.prototype.setPlayer function. Inside video tracking script. Error: " + e);
        }
    };
    //this is for html5 videos
    vt.videoCntnr.prototype.registerPlayerEvents = function () {
        try {
            var self = this;
            //util.debugLog("registerEvents for :" + self.videoTitle);

            if (!self.player) {
                //util.debugLog("registerEvents : no player object");
                return;
            } else if (self.jqVideoElement.attr("data-pmcvt") === "true") {
                //util.debugLog("tracking already set for " + self.videoTitle);
                return;
            }

            if (vt.ignoreVideo(self)) {
                self.jqVideoElement.attr("data-pmcvt", "ignore");
                //util.debugLog("ignore videoTracking : video title = " + self.videoTitle);
                return;
            }

            self.jqVideoElement.attr("data-pmcvt", "true");

            self.videoLength = Math.round(self.player.duration);

            self.cpStart.fireEvent();

            self.jqVideoElement.on("timeupdate", function () {
                self.videoLength = Math.round(self.player.duration);
                self.watchTime = Math.round(self.player.currentTime);
                self.completionRate = 100 * self.watchTime / self.videoLength;
                //util.debugLog("video timeupdate for :" + self.videoTitle + "; completionRate=" + self.completionRate);
                $.each(self.cpList, function (index, cpItem) {
                    if (!cpItem.hasFired && cpItem.cpPercent * 100 <= self.completionRate) {
                        cpItem.fireEvent();
                    }
                });
                if (self.completionRate >= 98 || self.videoLength - self.watchTime <= 1) {
                    self.cpFinish.fireEvent();
                }
            });
            self.jqVideoElement.on("ended", function () {
                //util.debugLog("video ended");
                self.cpFinish.fireEvent();
            });
        } catch (e) {
            tu.debugLog("Error in the vt.videoCntnr.prototype.registerPlayerEvents function. Inside video tracking script. Error: " + e);
        }
    };
    vt.currVideoCntnr = null;
    vt.videoCntnrList = [];
    vt.addVideoCntnr = function (inVideoElement, inVideoTitle) {
        try {
            var tVideoTitle = inVideoTitle || inVideoElement.getAttribute("title").toLowerCase();

            var tNewVideoCntnr = new vt.videoCntnr(tVideoTitle);
            tNewVideoCntnr.setPlayer(inVideoElement);
            vt.videoCntnrList.push(tNewVideoCntnr);
            return tNewVideoCntnr;
        } catch (e) {
            tu.debugLog("Error in the vt.addVideoCntnr function. Inside video tracking script. Error: " + e);
        }
    };
    vt.ignoreVideo = function (inVideoCntnr) {
        returnVal = false;

        if ($(inVideoCntnr.player).attr("autoplay") == "autoplay") {
            returnVal = true;
        }

        return returnVal;
    };
    vt.setupTracking = function (inVideoElement) {
        try {
            //util.debugLog("setupTracking : start");
            if (!inVideoElement) {
                //util.debugLog("setupTracking : no video element");
                return;
            }
            var tVideoTitle = "";
            try {
                tVideoTitle = inVideoElement.getAttribute("data-pmcvidtitle") || "";
            } catch (e) { }
            if (!tVideoTitle) {
                try {
                    tVideoTitle = inVideoElement.getAttribute("data-videotitle") || "";
                    tVideoTitle = tVideoTitle.toLowerCase();
                } catch (e) {
                    //util.debugLog("setupTracking : video title exception");
                }
            }
            if (!tVideoTitle) {
                try {
                    tVideoTitle = inVideoElement.getAttribute("title") || "";
                    tVideoTitle = tVideoTitle.toLowerCase();
                } catch (e) {
                    //util.debugLog("setupTracking : video title exception");
                }
            }
            if (!tVideoTitle) {
                try {
                    tVideoTitle = inVideoElement.getAttribute("src") || "";
                    tVideoTitle = tVideoTitle.split("/").pop().toLowerCase();
                } catch (e) {
                    //util.debugLog("setupTracking : video src exception");
                }
            }
            if (!tVideoTitle) {
                try {
                    var tVideoSources = inVideoElement.getElementsByTagName("source");
                    if (tVideoSources && tVideoSources.length > 0) {
                        $.each(tVideoSources, function (index, vsrcItem) {
                            tVideoTitle = vsrcItem.getAttribute("src");
                            if (tVideoTitle) {
                                tVideoTitle = tVideoTitle.split("=").pop().toLowerCase();
                                return false;
                            }
                        });
                    }
                } catch (e) {
                    //util.debugLog("setupTracking : video child source exception");
                }
            }
            if (!tVideoTitle) {
                tVideoTitle = "unspecified";
            }
            tVideoTitle = tVideoTitle.replace(/\%20/g, " ");
            //util.debugLog("setupTracking : video title = " + tVideoTitle);
            vt.currVideoCntnr = null;
            $.each(vt.videoCntnrList, function (index, vcItem) {
                if (vcItem.videoTitle === tVideoTitle) {
                    //util.debugLog("setupTracking : match videoCntnr");
                    vt.currVideoCntnr = vcItem;
                    return false;
                }
            });
            if (vt.currVideoCntnr) {
                vt.currVideoCntnr.setPlayer(inVideoElement);
            } else {
                //util.debugLog("- create new videoCntnr");
                vt.currVideoCntnr = vt.addVideoCntnr(inVideoElement, tVideoTitle);
            }
            vt.currVideoCntnr.registerPlayerEvents();
        } catch (e) {
            tu.debugLog("Error in the vt.setupTracking function. Inside video tracking script. Error: " + e);
        }
    };

    //*** Event Listener and base processing for HTML5 Video elements
    vt.listenForVideoInitEvents = function () {
        try {
            //Listen for videos on page at DOM Ready
            $("video").on("play", function () {
                //util.debugLog("video play event");
                vt.setupTracking($(this)[0]);
            });

            //Listen for new video elements that are loaded after DOM ready
            //true setting means to catch in capturing phase instead of bubbling phase.
            document.addEventListener("durationchange", function (event) {
                //util.debugLog("video durationchange");
                vt.vidDCEvent = event;
                var tVideoElement = event.target || event.srcElement;
                vt.setupTracking(tVideoElement);
            }, true);
        } catch (e) {
            tu.debugLog("Error in the vt.listenForVideoInitEvents function. Inside video tracking script. Error: " + e);
        }
    };
    $(document).ready(function () {
        try {
            vt.listenForVideoInitEvents();
        } catch (e) {
            tu.debugLog("Error in the document.ready listener that calls the vt.listenForVideoInitEvents function. Inside video tracking script. Error: " + e);
        }
    });

    //*** YouTube Event Listener and base processing using Post message events
    //*** Requires: iframes are set to enablejsapi=1 and the //www.youtube.com/iframe_api is loaded
    vt.ytAPIStatus = "unknown";
    vt.pendingYTIframes = [];
    vt.setupYTPlayer = function (inIframe) {
        try {
            if (vt.ytAPIStatus === "api ready") {
                try {
                    vt.ytPlayer = new window.YT.Player(inIframe);
                } catch (e) {
                    vt.ytPlayer = e;
                }
            } else {
                vt.pendingYTIframes.push(inIframe);
            }
        } catch (e) {
            tu.debugLog("Error in the vt.setupYTPlayer function. Inside video tracking script. Error: " + e);
        }
    };
    vt.setupEnabledYTIframes = function () {
        try {
            vt.ytIframes = $("iframe[src*='enablejsapi=1']");
            vt.ytIframes.each(function () {
                vt.setupYTPlayer($(this)[0]);
            });
        } catch (e) {
            tu.debugLog("Error in the vt.setupEnabledYTIframes function. Inside video tracking script. Error: " + e);
        }
    };
    vt.checkYTAPIReadyCount = 0;
    vt.checkYTAPIReady = function () {
        try {
            vt.checkYTAPIReadyCount++;
            if (typeof window.YT == "object" && typeof window.YT.Player == "function") {
                vt.ytAPIStatus = "api ready";
                $.each(vt.pendingYTIframes, function (i, v) {
                    vt.setupYTPlayer(v);
                });
            } else {
                vt.ytAPIStatus = "checking api ready: " + vt.checkYTAPIReadyCount;
                window.setTimeout(function () {
                    vt.checkYTAPIReady();
                }, 100);
            }
        } catch (e) {
            tu.debugLog("Error in the vt.checkYTAPIReady function. Inside video tracking script. Error: " + e);
        }
    };

    //Event for HCL to trigger when a youtube iframe is either dynamically loaded or its src attribute is udpated.
    //$(window).trigger("youtubeIframeLoaded", $("iframe[src*='enablejsapi=1']")[0]);
    $(window).on("youtubeIframeLoaded", function (inEvent, inObj) {
        try {
            vt.ytEventObj = inObj;
            if (typeof inObj == "object" && typeof inObj.nodeName == "string" && inObj.nodeName === "IFRAME") {
                vt.setupYTPlayer(inObj);
            } else {
                vt.setupEnabledYTIframes();
            }
        } catch (e) {
            tu.debugLog("Error in the youtubeIframeLoaded listener. Inside video tracking script. Error: " + e);
        }
    });

    var eData;
    vt.ytVideoCntnrLookupByPlayerId = [];
    vt.processPostMessageEvent = function (e) {
        try {
            if (!e.origin.match(/https?:\/\/www\.youtube(-nocookie)?\.com/i)) {
                return;
            }
            eData = JSON.parse(e.data);
            if (eData.event === "onReady") {
                vt.ytEonReady = e;
                //do processing on other events
                return;
            }
            var tVideoCntnr, currVideoCntnr;
            if (eData.event === "onStateChange") {
                vt.ytEonStateChange = e;

                if (eData.info === 0) {
                    currVideoCntnr = vt.ytVideoCntnrLookupByPlayerId[eData.id];
                    if (currVideoCntnr) {
                        //util.debugLog("yt : videoCntnr ended");
                        currVideoCntnr.cpFinish.fireEvent();
                    }
                }
            }
            if (eData.event === "infoDelivery" && eData.info) {
                vt.ytEinfoDelivery = e;
                if (eData.info.videoData && eData.info.duration) {
                    var currVideoId = eData.info.videoData.video_id || "youtube playerid#" + eData.id;
                    //var currVideoTitle = util.formatStr(eData.info.videoData.title, currVideoId);
                    var currVideoTitle = tu.formatStr(eData.info.videoData.title, currVideoId);
                    tVideoCntnr = vt.ytVideoCntnrLookupByPlayerId[eData.id];
                    if (tVideoCntnr && tVideoCntnr.videoId === currVideoId) {
                        //util.debugLog("yt : videoCntnr already set in position");
                        currVideoCntnr = tVideoCntnr;
                    } else {
                        $.each(vt.videoCntnrList, function (index, vcItem) {
                            if (vcItem.videoId === currVideoId) {
                                //util.debugLog("vt : match videoCntnr");
                                currVideoCntnr = vcItem;
                                return false;
                            }
                        });

                        if (!currVideoCntnr) {
                            //util.debugLog("yt : create new videoCntnr");
                            currVideoCntnr = new vt.videoCntnr(currVideoTitle, currVideoId, "youtube");
                            vt.videoCntnrList.push(currVideoCntnr);
                            currVideoCntnr.videoLength = Math.round(eData.info.duration);
                            currVideoCntnr.cpStart.fireEvent();
                        }

                        vt.ytVideoCntnrLookupByPlayerId[eData.id] = currVideoCntnr;
                    }
                }

                currVideoCntnr = currVideoCntnr || vt.ytVideoCntnrLookupByPlayerId[eData.id];

                if (currVideoCntnr && currVideoCntnr.videoLength && eData.info.currentTime) {
                    currVideoCntnr.watchTime = Math.round(eData.info.currentTime);
                    currVideoCntnr.completionRate = 100 * currVideoCntnr.watchTime / currVideoCntnr.videoLength;
                    //util.debugLog("yt : video timeupdate for :" + currVideoCntnr.videoTitle + "; completionRate=" + currVideoCntnr.completionRate);
                    $.each(currVideoCntnr.cpList, function (index, cpItem) {
                        if (!cpItem.hasFired && cpItem.cpPercent * 100 <= currVideoCntnr.completionRate) {
                            cpItem.fireEvent();
                        }
                    });
                    if (currVideoCntnr.completionRate >= 98 || currVideoCntnr.videoLength - currVideoCntnr.watchTime <= 1) {
                        currVideoCntnr.cpFinish.fireEvent();
                    }
                }
            }
        } catch (e) {
            tu.debugLog("Error in the vt.processPostMessageEvent function. Inside video tracking script. Error: " + e);
        }
    };
    vt.setupYTTracking = function () {
        try {
            //Start Post Message Listener
            if (window.addEventListener) {
                window.addEventListener("message", vt.processPostMessageEvent, false);
            } else if (window.attachEvent) {
                window.attachEvent("onmessage", vt.processPostMessageEvent);
            }

            vt.setupEnabledYTIframes();
            if ($("script[src*='www.youtube.com/iframe_api']").length > 0) {
                vt.ytAPIStatus = "api loaded";
                vt.checkYTAPIReady();
            } else {
                vt.ytAPIStatus = "loading api";
                tu.loadScriptCallback("//www.youtube.com/iframe_api", function () {
                    vt.ytAPIStatus = "api loaded";
                    vt.checkYTAPIReady();
                });
            }
        } catch (e) {
            tu.debugLog("Error in the vt.setupYTTracking function. Inside video tracking script. Error: " + e);
        }
    };
    try {
        vt.setupYTTracking();
    } catch (e) {
        tu.debugLog("Error calling the vt.setupYTTracking function. Inside video tracking script. Error: " + e);
    }
}(t.data, t.util, t.jsll, t.vt, window.jQuery));
});
