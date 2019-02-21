!function() {
  function J(b) {
    for (; 0 < b.length;) {
      var a = b.pop();
      a.parentNode && a.parentNode.removeChild(a);
    }
  }
  function B(b) {
    var a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 900, c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 60900, d = {};
    return d.message = b, d.code = a, d.adErrorCode = c, d;
  }
  function ka(b) {
    return Array(b + 1).join((Math.random().toString(36) + "00000000000000000").slice(2, 18)).slice(0, b);
  }
  function qa(b, a) {
    b.wrappedTags && (a.wrapperAdSystem = b.wrapper || "", a.tag = b.wrappedTags.pop(), a.wrappedTags = b.wrappedTags);
    a.adsystem = b.adsystem || "";
  }
  function la(b, a, c) {
    (a = b.vmap ? b.vmap : b.adschedule || b.adbreak) && c[a.breakid] && (c = c[a.breakid], c = c.bid.getEventObject("vast", c.bidders, b), b.mediationLayerAdServer = c.mediationLayerAdServer, b.bidders = c.bidders, c.floorPriceCents && (b.floorPriceCents = c.floorPriceCents));
    return b;
  }
  function ra(b, a) {
    "boolean" == typeof b.mediaFileCompliance && (a.mediaFileCompliance = b.mediaFileCompliance, b.nonComplianceReasons && (a.nonComplianceReasons = b.nonComplianceReasons));
  }
  function da(b, a) {
    a.request = b.request;
    a.response = b.response;
  }
  function sa(b) {
    return "application/javascript" === (a = b).type || "application/x-javascript" === a.type ? "html5" : "flash";
    var a;
  }
  function V(b) {
    for (var a = void 0, c = 0; c < b.media.length; c++) {
      var d = b.media[c];
      if ("html5" === sa(d)) {
        a = d;
        break;
      }
    }
    return a;
  }
  function ta(b, a, c, d) {
    b.tracker = new na(b.trackers, a, c, d);
  }
  function W(b, a, c) {
    var d = document.createElement("param");
    d.setAttribute("name", a);
    d.setAttribute("value", c);
    b.appendChild(d);
  }
  function Q(b, a, c) {
    a = B(a, 1002, 11002);
    a.id = c;
    b.push(a);
  }
  function ua() {
    var b = Error("No AdBreaks in VMAP");
    throw b.adErrorCode = 60005, b;
  }
  function l(b, a, c) {
    var d = [];
    return b && (d = b.getElementsByTagName(a), c && d && 0 === d.length && (d = b.getElementsByTagName(c + ":" + a))), d;
  }
  function p(b, a) {
    return b ? b.getAttribute(a) : null;
  }
  function va(b, a) {
    var c = p(a, "event");
    "progress" === c && (c = c + "_" + p(a, "offset"));
    K(b, c, v(a));
  }
  function v(b) {
    return b && (b = b.textContent || b.text) ? k.utils.trim(b) : "";
  }
  function K(b, a, c) {
    b[a] || (b[a] = []);
    c && b[a].push(c);
  }
  function wa(b, a, c) {
    b = l(b, a);
    k._.each(b, function(d) {
      K(c, a.toLowerCase(), v(d));
    });
  }
  function xa(b) {
    b.onload = b.onreadystatechange = b.onerror = null;
    "abort" in b && b.abort();
  }
  function X(b, a, c) {
    var d = void 0;
    if (k.utils.foreach(b, function(a, c) {
      (d = d || {})[a] = "_adQueue" === a ? c.slice() : c;
    }), d) {
      return d.requestTimeout = a, d.creativeTimeout = c, d._errors = [], d._waterfallIndex = 0, d;
    }
  }
  function Y(b, a) {
    return "%" === b.toString().slice(-1) ? a * parseFloat(b.slice(0, -1)) / 100 : parseFloat(b);
  }
  function ya(b) {
    return "string" == typeof b ? [b] : Array.isArray(b) ? b.slice(0) : b;
  }
  function Z(b, a) {
    return 0 === b ? 1 / 0 : b || a;
  }
  function oa(b, a, c) {
    if (!b) {
      return b;
    }
    var d, e, f, g, h = (d = a.getConfig(), {playerHeight:a.getHeight() || d.height || "", playerWidth:a.getWidth() || d.width || "", itemDuration:(e = a.getDuration(), f = Math.pow(10, 3), Math.round(e * f) / f || ""), item:d.playlist[a.getPlaylistIndex()] || {}});
    d = h.item;
    e = window.location.href;
    b = y(b = y(b = y(b = y(b = y(b = y(b = y(b = b.replace("__random-number__", Math.random() * Math.pow(10, 18)), "__timestamp__", (new Date).getTime()), "__page-url__", encodeURIComponent(e)), "__referrer__", encodeURIComponent(document.referrer)), "__player-height__", h.playerHeight), "__player-width__", h.playerWidth), "__item-duration__", h.itemDuration), "__domain__", encodeURIComponent((g = (g = window.location.href).match(new RegExp(/^[^/]*:\/\/\/?([^\/]*)/))) && 1 < g.length ? g[1] : ""));
    c = (b = c.companion ? b.replace("__companion-div__", c.companion.id) : b.replace("__companion-div__", "")).match(new RegExp(/__item-[a-z 0-9 A-Z]*__/g));
    for (g = 0; c && g < c.length; g++) {
      h = c[g], e = h.substring(7, h.length - 2), d.hasOwnProperty(e) && "string" == typeof d[e] ? (e = d[e], 1E3 < e.length && (e = e.substring(0, 1E3)), b = y(b, h, encodeURIComponent(e))) : b = b.replace(h, "");
    }
    d = a.getConfig().autostart ? 1 : 0;
    a = a.getMute() ? 1 : 0;
    Ma.test(b) && (b = b + "&vpa=" + d + "&vpmute=" + a);
    return b;
  }
  function y(b, a, c) {
    return b.replace(a, c);
  }
  function pa(b, a) {
    return (new Promise(function(c, d) {
      setTimeout(d, a);
      var e = document.createElement("script");
      e.onload = e.onreadystatechange = function(a) {
        this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (c(a), e.onload = e.onreadystatechange = null, f && e.parentNode && f.removeChild(e));
      };
      e.onerror = d;
      e.type = "text/javascript";
      e.charset = "utf-8";
      e.async = !0;
      e.timeout = a;
      e.src = b;
      var f = document.getElementsByTagName("head")[0] || document.documentElement;
      f.insertBefore(e, f.firstChild);
    }))["catch"](function() {
      return Promise.reject({message:"Error loading script"});
    });
  }
  function za() {
    return null === L && (L = Promise.resolve(window.apstag).then(function(b) {
      return b && b.init && b.fetchBids ? b : pa(["file" === document.location.protocol ? "https:" : "", "//c.amazon-adsystem.com/aax2/apstag.js"].join(""), 3500).then(function() {
        return window.apstag;
      });
    })["catch"](function(b) {
      throw L = null, b;
    })), L;
  }
  function Aa(b) {
    if (null === aa) {
      var a = w(), c = Ba || window.SpotX;
      if (c && c.DirectAdOS) {
        return aa = Promise.resolve({SpotX:c, loadingTime:0});
      }
      var d = ["file" === document.location.protocol ? "https:" : "", "//js.spotx.tv/directsdk/v1/", b, ".js"].join("");
      (aa = "function" == typeof require ? (e = d, f = 3500, (new Promise(function(a, c) {
        setTimeout(c, f);
        require([e], a, c);
      }))["catch"](function() {
        return Promise.reject({message:"Error loading script"});
      })).then(function(c) {
        return {SpotX:Ba = c, loadingTime:w() - a};
      })["catch"](function() {
        return Ca(d, a);
      }) : Ca(d, a))["catch"](function() {
        aa = null;
      });
    }
    var e, f;
    return aa;
  }
  function Ca(b, a) {
    return pa(b, 3500).then(function() {
      return {SpotX:window.SpotX, loadingTime:w() - a};
    });
  }
  function Da(b) {
    return null === M && (M = Promise.resolve(window.indexapi).then(function(a) {
      return a || pa(["file" === document.location.protocol ? "https:" : "", b || "//js-sec.indexww.com/htv/htv-jwplayer.min.js"].join(""), 3500).then(function() {
        return window.indexapi;
      });
    })["catch"](function(a) {
      throw M = null, a;
    })), M;
  }
  function z(b, a) {
    k.utils.style(b, {opacity:a || 1});
  }
  function ea(b) {
    k.utils.style(b, {opacity:0});
  }
  function Ea() {
    z(r);
  }
  function Fa() {
    z(r, .75);
  }
  function Na() {
    z(u);
  }
  function Oa() {
    z(u, .5);
  }
  function Pa(b, a) {
    var c = this;
    return Ga[a] || (this.jwplayerEntitlements = function(a, c, b) {
      var d = {canPlayAds:!0};
      c = new a.key(c);
      if ("unlimited" === c.edition()) {
        return b(d);
      }
      c = ["//", "entitlements.jwplayer.com", "/", c.token(), ".json"];
      "file:" === window.location.protocol && c.unshift("https:");
      a.ajax(c.join(""), function(a) {
        d.canPlayAds = !a || !a.response || !1 !== a.response.canPlayAds;
        b(d);
      }, function() {
        b(d);
      }, {timeout:1E4, responseType:"json"});
    }, Ga[a] = new Promise(function(d, e) {
      c.jwplayerEntitlements(b, a, function(a) {
        a.canPlayAds ? d() : e({message:"Ad Limit Reached"});
      });
    }));
  }
  var Qa = ["adImpression", "adError", "adPodError"], Ra = "adStarted adComplete adImpression adClick adSkipped adError adPlay adPause adMeta".split(" "), t = function(b, a) {
    if (!(b instanceof a)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }, Sa = function() {
    function b(a, c) {
      for (var d = 0; d < c.length; d++) {
        var b = c[d];
        b.enumerable = b.enumerable || !1;
        b.configurable = !0;
        "value" in b && (b.writable = !0);
        Object.defineProperty(a, b.key, b);
      }
    }
    return function(a, c, d) {
      return c && b(a.prototype, c), d && b(a, d), a;
    };
  }(), n = Object.assign || function(b) {
    for (var a = 1; a < arguments.length; a++) {
      var c = arguments[a], d;
      for (d in c) {
        Object.prototype.hasOwnProperty.call(c, d) && (b[d] = c[d]);
      }
    }
    return b;
  }, Ua = function() {
    function b(a, c, d, e, f) {
      var g = this;
      t(this, b);
      this.player = a;
      this.state = a.state;
      this.vpaidURL = d;
      this.adTag = e;
      this.adParams = f.adParams;
      this.vpaidControls = f.vpaidControls;
      this.type = "vpaid";
      this.instream = c || a.createInstream();
      this.toRemove = [];
      this.vpaidState = {linear:!1, expanded:!1, remainingTime:-1};
      this.paused = !1;
      n(this, a.Events);
      this.setMuteCallback = function() {
        g.handleMute ? g.setMute() : g.handleMute = !0;
      };
      this.playerContainer = this.player.getContainer();
      f.adOptOut ? setTimeout(function() {
        g.sendEvent("error", {message:"Conditional ad rejected", code:408});
      }, 0) : (this.iframe = function(a, c, d, b) {
        var e = document.createElement("iframe");
        e.setAttribute("gesture", "media");
        e.setAttribute("allow", "autoplay");
        e.src = "javascript:false";
        a.style(e, {border:0, width:"100%", height:"100%", position:"absolute", overflow:"hidden"});
        e.scrolling = "no";
        d.querySelector(".jw-media").appendChild(e);
        a = e.contentWindow.document;
        return a.open().write("\n    <body onload=\"\n        var js = document.createElement('script');\n        js.src = '" + c + "';\n        js.addEventListener('load', function() { window.myCallback(); });\n        document.body.appendChild(js);\"\n    style=\"margin: 0\">"), e.contentWindow.myCallback = b, a.close(), e;
      }(a.utils, this.vpaidURL, this.playerContainer, this.callback.bind(this)), this.toRemove.push(this.iframe));
    }
    return b.prototype.sendEvent = function(a, c) {
      (c = c || {}).tag || (c.tag = this.adTag);
      this.trigger(a, c);
    }, b.prototype.sendTimeEvent = function(a, c, d) {
      var b = c.getAdDuration();
      c = c.getAdRemainingTime();
      d = n({duration:b}, d);
      this.sendEvent(a, d);
      0 < c && (d.position = b - c, this.trigger("time", d));
    }, b.prototype.handleQuartile = function(a, c) {
      this.sendTimeEvent("quartile", a, {quartile:c});
    }, b.prototype.genEvent = function(a) {
      var c = this;
      return function(d) {
        c.on(a, d);
      };
    }, b.prototype.setMute = function() {
      var a = 0 === this.vpaidAd.getAdVolume();
      this.player.getMute() !== a && this.player.setMute(a);
    }, b.prototype.userActive = function() {
      var a = this.player.utils.hasClass(this.playerContainer, "jw-flag-time-slider-above");
      this.player.utils.style(this.iframe, {bottom:a ? 66 : 60});
    }, b.prototype.userInactive = function() {
      "paused" !== this.player.getState() && this.player.utils.style(this.iframe, {bottom:"0.5em"});
    }, b.prototype.prepareNonlinearAd = function() {
      var a = !this.player.utils.hasClass(this.playerContainer, "jw-flag-user-inactive");
      if (this.player.utils.style(this.iframe, {height:150}), this.resize(null, 150), this.userActive(a), this.player.on("userActive", this.userActive, this), this.player.on("userInactive", this.userInactive, this), this.instream) {
        this.instream.noResume = !0;
        this.instream.applyProviderListeners(null);
        this.instream.destroy();
        this.instream = null;
        a = this.playerContainer.querySelector(".jw-media");
        var c = a.querySelector("video,audio");
        a.insertBefore(c, this.iframe);
        c.play();
      }
    }, b.prototype.genListeners = function(a) {
      var c = this;
      return {AdLoaded:function() {
        a.setAdVolume(c.getPlayerVolume());
        a.startAd();
      }, AdStarted:function() {
        a.getAdLinear() ? c.vpaidControls || (c.instream = c.instream || c.player.createInstream(), c.instream.hide()) : c.prepareNonlinearAd();
        c.sendEvent("impression", {linear:a.getAdLinear() ? "linear" : "nonlinear"});
        c.sendEvent("play", {oldstate:"buffering", newstate:"playing", linear:a.getAdLinear() ? "linear" : "nonlinear"});
        c.handleMute = !0;
        a.subscribe(c.setMuteCallback, "AdVolumeChange", a);
      }, AdVideoStart:function() {
        c.sendEvent("started");
      }, AdStopped:function() {
        J(c.toRemove);
        c.sendEvent("stopped");
      }, AdPaused:function() {
        c.paused || (c.paused = !0, c.sendEvent("pause", {newstate:"paused", oldstate:"playing"}));
      }, AdPlaying:function() {
        c.paused && (c.paused = !1, c.sendEvent("play", {newstate:"playing", oldstate:"paused", linear:a.getAdLinear() ? "linear" : "nonlinear"}));
      }, AdLinearChange:function() {
        a.getAdLinear() ? (c.player.utils.style(c.iframe, {height:"100%"}), c.player.off(null, null, c), c.instream = c.instream || c.player.createInstream(), c.instream.init(), c.vpaidControls || c.instream.hide()) : c.prepareNonlinearAd();
      }, AdDurationChange:function() {
        c.sendTimeEvent("remainingTimeChange", a, {isDurationChange:!0, remainingTime:a.getAdRemainingTime()});
      }, AdRemainingTimeChange:function() {
        c.sendTimeEvent("remainingTimeChange", a, {remainingTime:a.getAdRemainingTime()});
      }, AdExpandedChange:function() {
        c.sendEvent("expandedChange", {expanded:a.getAdExpanded()});
      }, AdSkipped:function() {
        J(c.toRemove);
        c.sendEvent("skipped");
      }, AdVideoFirstQuartile:function() {
        c.handleQuartile(a, 1);
      }, AdVideoMidpoint:function() {
        c.handleQuartile(a, 2);
      }, AdVideoThirdQuartile:function() {
        c.handleQuartile(a, 3);
      }, AdVideoComplete:function() {
        c.sendEvent("complete");
      }, AdUserClose:function() {
        c.sendEvent("close");
      }, AdClickThru:function(a, b, f) {
        c.sendEvent("click", {id:b, url:a, playerHandles:f});
      }, AdError:function(a) {
        J(c.toRemove);
        var d = function(a) {
          if (a) {
            var c = a.match(/\b(?:[34])[0-9]{2}\b/);
            if (c) {
              return parseInt(c[0], 10);
            }
            if (a.match(/timeout/i)) {
              return a.match(/vpaid|vast/i) ? 301 : 402;
            }
            if (a.match(/found/i)) {
              return 401;
            }
            if (a.match(/supported/i)) {
              return 403;
            }
            if (a.match(/(?:displaying|media file)/i)) {
              return 405;
            }
          }
          return 901;
        }(a);
        c.sendEvent("error", {message:a, code:d, adErrorCode:5E4 + d});
      }};
    }, b.prototype.callback = function() {
      var a = this.vpaidAd = this.iframe.contentWindow.getVPAIDAd(), c = a.handshakeVersion("2.0");
      if (1 > parseFloat(c)) {
        throw Error("Invalid vpaid version in handshake");
      }
      var d = this.genListeners(a);
      Object.keys(d).forEach(function(c) {
        a.subscribe(d[c], c, a);
      });
      this.listeners = d;
      c = {AdParameters:this.adParams};
      var b = this.playerContainer.querySelector(".jw-media"), f = this.instream.getMediaElement(), g = this.iframe.contentWindow.document.createElement("div");
      g.className = "jw-vpaid-wrapper";
      g.style.height = "100%";
      this.iframe.contentWindow.document.body.appendChild(g);
      a.initAd(b.clientWidth, b.clientHeight, "normal", 1E3, c, {videoSlot:f, slot:g});
      a.setAdVolume(this.getPlayerVolume());
    }, b.prototype.play = function() {
      this.vpaidAd.resumeAd();
    }, b.prototype.pause = function() {
      this.vpaidAd.pauseAd();
    }, b.prototype.stop = function() {
      if (this.vpaidAd) {
        try {
          this.vpaidAd.stopAd();
        } catch (a) {
          console.log("Unhandled exception from VPAID2 Creative stopAd", a);
        }
      }
    }, b.prototype.getPlayerVolume = function() {
      return this.player.getMute() ? 0 : this.player.getVolume() / 100;
    }, b.prototype.setVolume = function(a) {
      this.handleMute = !1;
      this.vpaidAd.setAdVolume(a / 100);
    }, b.prototype.resize = function(a, c) {
      if (this.vpaidAd && this.vpaidAd.resizeAd) {
        var d = this.player.getFullscreen() || document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen ? "fullscreen" : "normal";
        this.vpaidAd.resizeAd(a || this.player.getWidth(), c || this.player.getHeight(), d);
      }
    }, b.prototype.destroy = function() {
      if (J(this.toRemove), this.removeEvents(), this.vpaidAd) {
        try {
          var a = this.listeners, c = this.vpaidAd;
          Object.keys(a).forEach(function(d) {
            c.unsubscribe(a[d], d, c);
          });
          c.unsubscribe(this.setMuteCallback, "AdVolumeChange", c);
        } catch (d) {
          console.log("Unhandled exception from VPAID2 Creative", d);
        }
      }
      this.instream = this.player = null;
    }, b.prototype.removeEvents = function() {
      this.player && this.player.off(null, null, this);
      this.off();
    }, b.prototype.attachMedia = function() {
    }, b.prototype.detachMedia = function() {
    }, b.prototype.volume = function() {
    }, b.prototype.mute = function() {
    }, b.prototype.getState = function() {
      return this.vpaidState.linear ? this.paused ? "paused" : "playing" : "idle";
    }, b;
  }(), k = {}, R = [], na = function() {
    function b(a, c, d, e) {
      var f = this;
      t(this, b);
      var g = a || {};
      this.map = g;
      this.debugTrackFn = c;
      this.trackerPlayerUtils = {getPosition:function() {
        return d.getPosition();
      }, getFile:function() {
        return d.getPlaylistItem().file;
      }};
      this.trackingFilter = e;
      this.lastQuartile = 0;
      this.progressEvents = [];
      this.hasComp = this.firedError = this.started = this.breakStarted = !1;
      k._.map(g, function(a, c) {
        if (g.hasOwnProperty(c) && 0 === c.indexOf("progress")) {
          var d = "" + c.split("_")[1], b = {key:c, offset:d, tracked:!1, percentage:!1};
          /^\d+%$/.test(d) ? (b.percentage = !0, b.offset = parseFloat(d)) : b.offset = k.utils.seconds(d);
          f.progressEvents.push(b);
        }
      });
      this.setFactories();
    }
    return b.prototype.getUrls = function(a) {
      return this.map.hasOwnProperty(a) ? this.map[a] : [];
    }, b.prototype.addUrl = function(a, c) {
      this.map.hasOwnProperty(a) || (this.map[a] = []);
      this.map[a].push(c);
    }, b.prototype.trackPings = function(a) {
      var c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, d = this.getUrls(a), b = this.trackingFilter, f = [], g = [], h = [];
      if (d.length) {
        for (c = this.replaceMacros(c), d.forEach(function(a) {
          if (a) {
            if (k._.each(c, function(c, d) {
              a = a.replace(d, c);
            }), b && !1 === b(a)) {
              return void g.push(a);
            }
            var d = new Image;
            d.src = a;
            f.push(a);
            h.push(d);
          }
        }), Array.prototype.push.apply(R, h), d = R.length; d-- && (R[d].width || R[d].complete);) {
          R.length = d;
        }
      }
      "function" == typeof this.debugTrackFn && this.debugTrackFn({type:"ping", data:{pingType:a, urls:f, filteredUrls:g, images:h}});
    }, b.prototype.replaceMacros = function(a) {
      var c, d, b, f, g, h, q;
      return a["[TIMESTAMP]"] = encodeURIComponent((c = new Date, d = c.getTime(), b = c.getTimezoneOffset() / 60, f = 6E4 * c.getTimezoneOffset(), (new Date(d - f)).toISOString().slice(0, -1) + (0 < b ? "-" : "+") + ("0" + b).slice(-2))), a["[CACHEBUSTING]"] = Math.random().toString().slice(2, 10), a["[ASSETURI]"] = encodeURIComponent(this.trackerPlayerUtils.getFile()), a["[CONTENTPLAYHEAD]"] = encodeURIComponent((g = this.trackerPlayerUtils.getPosition(), h = ("0" + Math.floor(g / 3600)).slice(-2), 
      q = ("0" + Math.floor((g - 3600 * h) / 60)).slice(-2), h + ":" + q + ":" + ("0" + Math.floor(g - 3600 * h - 60 * q)).slice(-2) + "." + (g % 1).toFixed(3).toString().slice(2, 5))), a;
    }, b.prototype.start = function() {
      this.started = !0;
      this.trackPings("start");
    }, b.prototype.breakStart = function() {
      this.breakStarted = !0;
      this.trackPings("breakStart");
    }, b.prototype.time = function(a, c) {
      if (!(1 >= c)) {
        for (var d = (4 * a + .05) / c | 0; d > this.lastQuartile && 3 > this.lastQuartile;) {
          this.lastQuartile++, 1 === this.lastQuartile ? this.trackPings("firstQuartile") : 2 === this.lastQuartile ? this.trackPings("midpoint") : 3 === this.lastQuartile && this.trackPings("thirdQuartile");
        }
        this.trackProgress(a, c);
      }
    }, b.prototype.trackProgress = function(a, c) {
      for (var d = this.progressEvents.length; d--;) {
        var b = this.progressEvents[d];
        if (!b.tracked) {
          var f = b.offset;
          b.percentage && (f = c * f / 100);
          f <= a && (b.tracked = !0, this.trackPings(b.key));
        }
      }
    }, b.prototype.error = function() {
      var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 900;
      this.firedError = !0;
      var c = {};
      c["[ERRORCODE]"] = a;
      this.trackPings("error", c);
    }, b.prototype.factory = function(a) {
      var c = this;
      return function() {
        c.trackPings(a);
      };
    }, b.prototype.setFactories = function() {
      this.creativeView = this.factory("creativeView");
      this.click = this.factory("click");
      this.skip = this.factory("skip");
      this.complete = this.factory("complete");
      this.pause = this.factory("pause");
      this.resume = this.factory("resume");
      this.mute = this.factory("mute");
      this.unmute = this.factory("unmute");
      this.fullscreen = this.factory("fullscreen");
      this.expand = this.factory("expand");
      this.collapse = this.factory("collapse");
      this.acceptInvitation = this.factory("acceptInvitation");
      this.close = this.factory("close");
      this.rewind = this.factory("rewind");
      this.impression = this.factory("impression");
      this.breakEnd = this.factory("breakEnd");
    }, b;
  }(), Va = function() {
    function b(a, c, d, e, f, g) {
      t(this, b);
      this.player = c;
      this.staticPlayer = d;
      this.companion = e;
      this.playlistItemManager = f;
      this.optionalParams = g;
      this.debugTrackFn = g.debugTrackFn;
      this.scheduledAd = a.scheduledAd();
      this.vastBuffet = a.adBuffet();
      this.vastAdPod = a.adPod();
      this.vastAd = this.vastBuffet.length ? this.vastBuffet[0] : null;
      this.vastOptions = this.creativeTimeout = this.adPodItems = this.mediaType = this.blockingInstreamPlayer = this.instreamPlayer = this.vpaidPlayer = this.adType = null;
      this.initialIndex = this.adPodIndex = this.position = this.duration = 0;
      n(this, c.Events);
    }
    return b.prototype.init = function(a) {
      return this.init = function() {
        throw Error("Adplayer can only be initialized once");
      }, this.blockingInstreamPlayer = a, !!this.prepareAdPod() && (this.player.on("fullscreen", this.playerFullscreenHandler, this), this.player.on("volume", this.playerVolumeHandler, this), this.player.on("mute", this.muteHandler, this), this.player.on("resize", this.playerResizeHandler, this), this.playAd());
    }, b.prototype.prepareAdPod = function() {
      var a = this, c = null, b = 0, e = [];
      if (this.vastAd && (ta(this.vastAd, this.debugTrackFn, this.player, this.optionalParams.trackingFilter), (c = this.prepareAdPodItem(this.vastAd)) && "vpaid" === c.adType && !V(this.vastAd) && (c = null)), this.vastAdPod) {
        for (var f = null, g = 0; g < this.vastAdPod.length; g++) {
          var h = this.vastAdPod[g];
          ta(h, this.debugTrackFn, this.player, this.optionalParams.trackingFilter);
          var q = this.prepareAdPodItem(h);
          if (q) {
            if (f !== q.adType && "instream" === f) {
              break;
            }
            (f = q.adType, "vpaid" !== q.adType || V(h)) ? (h = e.length + b === g, q && h && e.push(q)) : b++;
          } else {
            b++;
          }
        }
      }
      if (!e.length && !c) {
        return this.adError("No Compatible Creatives", 403), !1;
      }
      b = void 0;
      return e.length ? (b = e, this.vastOptions = [], b.forEach(function(c) {
        a.vastOptions.push(a.getInstreamOptions(c.vastAd));
      })) : (b = c, this.vastOptions = this.getInstreamOptions(this.vastAd)), this.adPodItems = b, !(this.adPodIndex = 0);
    }, b.prototype.prepareAdPodItem = function(a) {
      a.tracker.linear = "linear";
      var c = ("" + a.media[0].adType).toLowerCase() || "instream";
      "vpaid" !== c || V(a) || (c = "instream");
      var b = {vastAd:a, sources:[], adType:c};
      this.scheduledAd.skipoffset && (b.skipoffset = this.scheduledAd.skipoffset);
      var e, f, g = {};
      if (k._.each(a.media, function(a) {
        b.sources.push({file:a.file, mimeType:a.type, type:("" + a.type).replace(/^(?:video|audio)\/(?:x-)?/, "")});
        g[a.file] = {width:a.width || 0, height:a.height || 0};
      }), "instream" === c && (b.sources = (e = b.sources, f = void 0, f = jwplayer.api.availableProviders.filter(function(a) {
        return "flash" !== a.name;
      }), e.filter(function(a) {
        return f.some(function(c) {
          return c.supports(a);
        });
      }))), 0 === b.sources.length) {
        return null;
      }
      this.mediaType = ("" + b.sources[0].mimeType).toLowerCase();
      b.vastAd.selectedMedia = b.sources[0];
      var h = this.player.getSafeRegion(!0), q = null, A = null;
      return b.sources.forEach(function(a) {
        var c = g[a.file];
        c.width <= h.width && (!q || c.width > g[q.file].width) && (q = a);
        c.width >= h.width && (!A || c.width < g[A.file].width) && (A = a);
      }), q ? (b.vastAd.selectedMedia = q)["default"] = !0 : A && ((b.vastAd.selectedMedia = A)["default"] = !0), b;
    }, b.prototype.getInstreamOptions = function(a) {
      //var c = 0 <= this.optionalParams.skipoffset ? this.optionalParams.skipoffset : null;
      //return {skipoffset:a.skipoffset || this.scheduledAd.skipoffset || c, skipMessage:this.optionalParams.skipMessage, skipText:this.optionalParams.skipText};
      var c = 0 <= this.optionalParams.skipoffset ? this.optionalParams.skipoffset : null;/*patch*/
      return {skipoffset:c, skipMessage:this.optionalParams.skipMessage, skipText:this.optionalParams.skipText};/*patch*/
    }, b.prototype.getVastAd = function(a) {
      if (this.adPodItems) {
        if ((a = this.adPodItems.length ? this.adPodItems[a] : this.adPodItems).vastAd) {
          return a.vastAd;
        }
      } else {
        if (this.vastAdPod && this.vastAdPod.length) {
          return this.vastAdPod[a];
        }
      }
      return this.vastAd;
    }, b.prototype.adError = function(a, c, b) {
      clearTimeout(this.creativeTimeout);
      var d = this.getVastAd(this.adPodIndex);
      a = B(a, c, b || (c ? 1E4 + c : null));
      (a.creativeId = d.creativeId || "", ra(d, a), da(d, a), this.vastAdPod && this.adPodIndex < this.vastAdPod.length - 1) ? this.triggerEvent("adPodError", a) : (d.tracker.error(a.code), qa(d, a), this.addConditionalAdData(a), this.triggerEvent("adError", a));
    }, b.prototype.playAd = function() {
      var a = this.adPodItems[this.adPodIndex] || this.adPodItems;
      (this.adType = a.adType, this.blockingInstreamPlayer) && this.blockingInstreamPlayer.setText(this.optionalParams.loadingAd);
      if ("vpaid" === this.adType) {
        return this.playVpaid(a.vastAd);
      }
      if ("static" === this.adType) {
        return this.playStatic(), !0;
      }
      a = Array.isArray(this.adPodItems) ? this.adPodItems.slice(this.adPodIndex) : this.adPodItems;
      var c = Array.isArray(this.vastOptions) ? this.vastOptions.slice(this.adPodIndex) : this.vastOptions;
      return this.initialIndex = this.adPodIndex, this.playInstream(a, c);
    }, b.prototype.clearVpaidBlocking = function() {
      if (this.vpaidPlayer.instream) {
        var a = this.vpaidPlayer.instream;
        this.vpaidPlayer.instream = null;
        this.clearBlocking(a);
      }
    }, b.prototype.clearBlocking = function(a) {
      (a = a || this.blockingInstreamPlayer) && a !== this.instreamPlayer && a.destroy();
    }, b.prototype.getState = function() {
      return this.instreamPlayer ? this.instreamPlayer.getState() : this.vpaidPlayer ? this.vpaidPlayer.getState() : "";
    }, b.prototype.clearNonlinear = function() {
      this.staticPlayer.stop();
      this.vpaidPlayer && (this.clearVpaidBlocking(), this.vpaidPlayer && (this.vpaidPlayer.stop(), this.vpaidPlayer.destroy(), this.vpaidPlayer = null));
    }, b.prototype.destroy = function() {
      if (clearTimeout(this.viewableTimeout), clearTimeout(this.creativeTimeout), this.off(), this.removePlayerListeners(), clearTimeout(this.creativeTimeout), this.instreamPlayer) {
        var a = this.instreamPlayer;
        this.instreamPlayer = null;
        this.clearBlocking(a);
      }
      this.vpaidPlayer && (this.clearVpaidBlocking(), this.vpaidPlayer && (this.vpaidPlayer.destroy(), this.vpaidPlayer = null));
      this.clearNonlinear();
      this.vastAdPod = this.vastAd = this.vastBuffet = this.scheduledAd = this.instreamPlayer = this.player = null;
    }, b.prototype.pause = function() {
      this.instreamPlayer ? this.instreamPlayer.pause() : this.vpaidPlayer && this.vpaidPlayer.pause();
    }, b.prototype.play = function() {
      this.instreamPlayer ? this.instreamPlayer.play() : this.vpaidPlayer && this.vpaidPlayer.play();
    }, b.prototype.removePlayerListeners = function() {
      this.player && (this.player.off("fullscreen", this.playerFullscreenHandler, this), this.player.off("volume", this.playerVolumeHandler, this), this.player.off("mute", this.muteHandler, this), this.player.off("viewable", this.viewableHandler, this));
      this.instreamPlayer && this.instreamPlayer.off(null, null, this);
      this.vpaidPlayer && (this.vpaidPlayer.removeEvents(), this.clearVpaidBlocking(), this.vpaidPlayer && (this.vpaidPlayer.destroy(), this.vpaidPlayer = null));
      this.staticPlayer.stop();
      this.staticPlayer.removeEvents();
    }, b.prototype.adEventObject = function(a) {
      var c = this.playlistItemManager.getAdEventObject(this.scheduledAd);
      if (c.viewable = this.player.getViewable(), this.adPodItems && this.adPodItems.length && (c.sequence = this.adPodIndex + 1, c.podcount = this.adPodItems.length), this.mediaType && (c.creativetype = this.mediaType), this.scheduledAd._vmap && (c.vmap = this.scheduledAd._vmap), -1 !== Ra.indexOf(a)) {
        a = this.getVastAd(this.adPodIndex), c.universalAdIdRegistry = a.universalAdIdRegistry, c.universalAdIdValue = a.universalAdIdValue, c.categories = a.categories;
      }
      return c;
    }, b.prototype.playStatic = function() {
      this.vastAd.tracker.linear = "nonlinear";
      var a = this.vastAd.media[0];
      this.vastAd.selectedMedia = a;
      var c = this.vastAd.clickthrough || "", b = this.staticPlayer;
      b.removeEvents();
      b.on("play", this.impressionHandler, this);
      b.on("play", this.playHandler, this);
      b.on("complete", this.combinedCompleteHandler, this);
      b.on("click", this.clickStaticHandler, this);
      b.on("error", this.staticErrorHandler, this);
      b.playAd(a.file, c, a.minDuration, this.scheduledAd._currentTag, this.scheduledAd.requestTimeout);
      this.clearBlocking();
    }, b.prototype.creativeAdError = function(a, c, b) {
      this.adError(a, c, b);
      this.adPodItems && this.adPodItems.length - 1 > this.adPodIndex && (this.vpaidPlayer && (this.vpaidPlayer.destroy(), this.vpaidPlayer = null), this.adPodIndex++, this.scheduledAd._adPodIndex = this.adPodIndex, this.playAd());
    }, b.prototype.playVpaid = function(a) {
      var c = this;
      clearTimeout(this.creativeTimeout);
      this.creativeTimeout = setTimeout(function() {
        c.creativeAdError("VPAID tag communication timeout", 900, 50004);
      }, this.scheduledAd.creativeTimeout);
      var b = V(this.vastAd = a), e = this.optionalParams.conditionaladoptout && a.conditionalAd;
      return (this.vastAd.selectedMedia = b, this.mediaType = b.type, "flash" === sa(b)) ? (this.creativeAdError("Flash creatives are not supported", 403, 10403), !1) : (this.vpaidPlayer = new Ua(this.player, this.blockingInstreamPlayer, b.file, this.scheduledAd._currentTag, {adParams:this.vastAd.adParams, vpaidControls:this.optionalParams.vpaidcontrols, adOptOut:e}), this.blockingInstreamPlayer && this.blockingInstreamPlayer.applyProviderListeners(this.vpaidPlayer), this.vpaidPlayer.on("play", this.playHandler, 
      this), this.vpaidPlayer.on("pause", this.pauseHandler, this), this.vpaidPlayer.on("quartile", this.quartileHandler, this), this.vpaidPlayer.on("remainingTimeChange", this.remainingTimeHandler, this), this.vpaidPlayer.on("click", this.clickVpaidHandler, this), this.vpaidPlayer.on("error", this.playbackErrorHandler, this), this.vpaidPlayer.on("impression", this.impressionHandler, this), this.vpaidPlayer.on("expandedChange", this.vpaidExpandedHandler, this), this.vpaidPlayer.on("close", this.adCloseHandler, 
      this), this.vpaidPlayer.on("skipped", this.vpaidAdSkipped, this), this.vpaidPlayer.on("stopped", this.endOfVpaidAdHandler, this), this.vpaidPlayer.on("complete", this.adCompleteHandler, this), this.vpaidPlayer.on("started", this.adStartedHandler, this), this.setupSkipButton(a), !0);
    }, b.prototype.setupSkipButton = function(a) {
      a = "skipoffset" in a ? k.utils.seconds(a.skipoffset) : -1;
      a = 0 <= this.optionalParams.skipoffset ? this.optionalParams.skipoffset : a;
      0 <= a && this.blockingInstreamPlayer && (this.blockingInstreamPlayer.off("adSkipped", this.skipVpaidAd, this), this.blockingInstreamPlayer.setupSkipButton(a, this.optionalParams, k.utils.noop), this.blockingInstreamPlayer.on("adSkipped", this.skipVpaidAd, this));
    }, b.prototype.playInstream = function(a, c) {
      var b = this, e = this.player.getEnvironment().OS;
      return e.android && 2 === e.version.major && 3 === e.version.minor ? (this.adError("Android 2.3 not supported", 900, 60007), !1) : (clearTimeout(this.creativeTimeout), this.creativeTimeout = setTimeout(function() {
        b.creativeAdError("VAST tag communication timeout", 900, 60004);
      }, this.scheduledAd.creativeTimeout), this.blockingInstreamPlayer ? this.instreamPlayer = this.blockingInstreamPlayer : this.instreamPlayer = this.player.createInstream().init(), this.instreamPlayer.on("play", this.playHandler, this), this.instreamPlayer.on("pause", this.pauseHandler, this), this.instreamPlayer.on("time", this.timeHandler, this), this.instreamPlayer.on("playlistItem", this.playlistItemHandler, this), this.instreamPlayer.on("complete", this.adCompleteHandler, this), this.instreamPlayer.on("playlistComplete", 
      this.endOfAdBreakHandler, this), this.instreamPlayer.on("mute", this.muteHandler, this), this.instreamPlayer.on("instreamClick", this.clickInstreamHandler, this), this.instreamPlayer.on("adSkipped", this.adSkipped, this), this.instreamPlayer.on("error", this.playbackErrorHandler, this), this.instreamPlayer.on("mediaError", this.playbackErrorHandler, this), this.instreamPlayer.on("destroyed", function() {
        b.instreamPlayer = null;
      }, this), this.instreamPlayer.loadItem(a, c), this.clearBlocking(), !0);
    }, b.prototype.playerFullscreenHandler = function(a) {
      var c = this.getVastAd(this.adPodIndex).tracker;
      a.fullscreen && c.started && c.fullscreen();
    }, b.prototype.playerResizeHandler = function(a) {
      this.vpaidPlayer && this.vpaidPlayer.resize(a.width, a.height);
    }, b.prototype.playerVolumeHandler = function(a) {
      this.vpaidPlayer && this.vpaidPlayer.setVolume(a.volume);
    }, b.prototype.playlistItemHandler = function(a) {
      this.instreamPlayer && (this.scheduledAd._adPodIndex = this.adPodIndex = a.index + this.initialIndex);
    }, b.prototype.impressionHandler = function(a) {
      var c = this.getVastAd(this.adPodIndex), b = c.tracker;
      b.impression();
      var e = {};
      e.adposition = this.scheduledAd._position || "";
      e.adtitle = c.adTitle || "";
      e.creativeId = c.creativeId || "";
      qa(c, e);
      e.vastversion = c.vastversion;
      e.clickThroughUrl = c.clickthrough;
      e.duration = c.duration || 0;
      e.mediafile = {file:c.selectedMedia.file};
      e.linear = a.linear || b.linear;
      this.addConditionalAdData(e);
      ra(c, e);
      da(c, e);
      this.triggerEvent("adImpression", e);
      this.addViewableImpressionHandler();
    }, b.prototype.addViewableImpressionHandler = function() {
      this.player.off("viewable", this.viewableHandler, this);
      this.player.on("viewable", this.viewableHandler, this);
      this.viewableHandler();
    }, b.prototype.viewableHandler = function(a) {
      var c = this;
      clearTimeout(this.viewableTimeout);
      this.viewableTimeout = null;
      (a ? a.viewable : this.player.getViewable()) && (this.viewableTimeout = setTimeout(function() {
        c.player.off("viewable", c.viewableHandler, c);
        c.triggerEvent("adViewableImpression", {});
      }, 2E3));
    }, b.prototype.playHandler = function(a) {
      clearTimeout(this.creativeTimeout);
      var c, b, e = this.getVastAd(this.adPodIndex), f = e.tracker, g = void 0;
      if (f.started) {
        "paused" === a.oldstate && (f.resume(), this.dispatchPlay(a));
      } else {
        this.vpaidPlayer && (f.linear = a.linear);
        this.instreamPlayer && this.impressionHandler({linear:f.linear});
        var h = n({linear:f.linear}, this.getInstreamOptions(e));
        h.adMessage = this.optionalParams.dynamicMessage || "";
        h.clickThroughUrl = e.clickthrough;
        h.sequence && (h.podMessage = this.optionalParams.podMessage || "");
        e.adTitle && (h.adtitle = e.adTitle);
        e.companions && (h.companions = e.companions);
        da(e, h);
        this.triggerEvent("adMeta", h);
        e.companions && ((g = {}).companions = (b = e.companions, k._.map(b, function(a) {
          var c = "iframe" === a.type || "html" === a.type ? a.type : "static", b = void 0;
          return a.trackers && a.trackers.creativeView && a.trackers.creativeView.length && (b = a.trackers.creativeView), {width:a.width, height:a.height, type:c, resource:a.source, creativeview:b, click:a.clickthrough};
        })), g.universalAdIdRegistry = e.companionUniversalAdIdRegistry, g.universalAdIdValue = e.companionUniversalAdIdValue, this.triggerEvent("adCompanions", g));
        b = this.companion;
        g = void 0;
        9 < k.utils.flashVersion() ? g = e.companions : (c = e.companions, g = k._.filter(c, function(a) {
          return 0 > a.type.indexOf("flash");
        }));
        this.optionalParams.companion && g && g.length && (f.hasComp = b.addCompanion(this.optionalParams.companion, g));
        f.start();
        f.creativeView();
        this.dispatchPlay(a);
      }
    }, b.prototype.dispatchPlay = function(a) {
      if ("static" !== this.adType && ("vpaid" !== this.adType || "linear" === a.linear)) {
        var c = a.newstate, b = {};
        b.oldstate = a.oldstate;
        b.newstate = c;
        this.triggerEvent("adPlay", b);
        this.vpaidPlayer && this.vpaidPlayer.trigger("state", b);
      }
    }, b.prototype.pauseHandler = function(a) {
      clearTimeout(this.creativeTimeout);
      this.getVastAd(this.adPodIndex).tracker.pause();
      var c = a.oldstate;
      a = a.newstate;
      var b = {};
      b.oldstate = c;
      b.newstate = a;
      this.triggerEvent("adPause", b);
      this.vpaidPlayer && this.vpaidPlayer.trigger("state", {newstate:a, oldstate:c});
    }, b.prototype.remainingTimeHandler = function(a) {
      a.duration ? this.duration = a.duration : this.duration = Math.max(1, this.duration, a.remainingTime);
      this.timeHandler({position:0 <= a.remainingTime ? this.duration - a.remainingTime : 0, duration:this.duration, isDurationChange:a.isDurationChange});
    }, b.prototype.quartileHandler = function(a) {
      this.duration = a.duration ? a.duration : Math.max(this.duration, 1, 4 * a.remainingTime / (4 - a.quartile));
      this.timeHandler({position:this.duration * a.quartile * .25, duration:this.duration});
    }, b.prototype.timeHandler = function(a) {
      var c = this.getVastAd(this.adPodIndex), b = a.position, e = a.duration, f = e - b;
      c = c.tracker;
      var g = this.optionalParams.dynamicMessage || "", h = this.optionalParams.podMessage || "";
      if (g && 0 < f) {
        if (g = g.replace(/(\b)xx(s?\b)/gi, "$1" + Math.ceil(f) + "$2"), this.adPodItems && 1 < this.adPodItems.length && h) {
          g = h.replace(/__AD_POD_CURRENT__/g, "" + (this.adPodIndex + 1)).replace(/__AD_POD_LENGTH__/g, "" + this.adPodItems.length) + " " + g;
        }
        this.instreamPlayer ? this.instreamPlayer.setText(g) : this.vpaidPlayer && this.vpaidPlayer.instream && this.vpaidPlayer.instream.setText(g);
      }
      a.isDurationChange || (c && c.time(b, e), a = {}, a.position = this.position = b, a.duration = e, this.triggerEvent("adTime", a));
    }, b.prototype.combinedCompleteHandler = function() {
      this.adCompleteHandler();
      this.endOfAdBreakHandler();
    }, b.prototype.adCompleteHandler = function() {
      clearTimeout(this.viewableTimeout);
      var a = this.getVastAd(this.adPodIndex).tracker;
      a.firedError || (a.complete(), this.triggerEvent("adComplete"));
    }, b.prototype.adCloseHandler = function() {
      clearTimeout(this.viewableTimeout);
      var a = this.getVastAd(this.adPodIndex).tracker;
      a.firedError || a.close();
    }, b.prototype.adStartedHandler = function() {
      this.triggerEvent("adStarted");
    }, b.prototype.endOfVpaidAdHandler = function() {
      if (clearTimeout(this.viewableTimeout), this.adPodItems && this.adPodItems.length - 1 > this.adPodIndex) {
        return this.vpaidPlayer && (this.vpaidPlayer.destroy(), this.vpaidPlayer = null), this.adPodIndex++, void this.playAd();
      }
      this.endOfAdBreakHandler();
    }, b.prototype.endOfAdBreakHandler = function() {
      this.removePlayerListeners();
      this.trigger("adComplete");
    }, b.prototype.muteHandler = function(a) {
      var c = this.getVastAd(this.adPodIndex).tracker;
      c && (a.mute ? c.mute() : c.unmute(), this.vpaidPlayer && this.vpaidPlayer.setVolume(a.mute ? 0 : this.player.getVolume()));
    }, b.prototype.clickStaticHandler = function() {
      var a = this.getVastAd(this.adPodIndex);
      this.player.pause(!0);
      this.clickThrough(a);
    }, b.prototype.clickVpaidHandler = function(a) {
      var c = this.getVastAd(this.adPodIndex), b = !0;
      a && void 0 !== a.url && (!1 === a.playerHandles && (b = !1), c.clickthrough = a.url);
      this.clickThrough(c, b);
    }, b.prototype.clickInstreamHandler = function() {
      "paused" !== this.instreamPlayer.getState() && this.clickThrough(this.getVastAd(this.adPodIndex));
    }, b.prototype.clickThrough = function(a) {
      var c = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
      a.tracker.click();
      var b = {};
      a.clickthrough && (b.clickThroughUrl = a.clickthrough);
      this.triggerEvent("adClick", b);
      window.jwcast && window.jwcast.player.id || a.clickthrough && c && window.open(a.clickthrough);
    }, b.prototype.skipVpaidAd = function() {
      this.endOfVpaidAdHandler();
      this.vpaidAdSkipped();
    }, b.prototype.vpaidAdSkipped = function() {
      this.adSkipped();
      this.endOfVpaidAdHandler();
    }, b.prototype.adSkipped = function() {
      clearTimeout(this.viewableTimeout);
      var a = this.getVastAd(this.adPodIndex);
      a.tracker.skip();
      var b = this.optionalParams.skipoffset;
      this.triggerEvent("adSkipped", {duration:a.duration, skipoffset:b, position:this.position, watchedPastSkipPoint:this.position - b});
    }, b.prototype.playbackErrorHandler = function(a) {
      var b = a.message || "Error Playing Ad Tag", d = a.code;
      (!d || 4 >= d) && (d = 400);
      this.vpaidPlayer && "function" == typeof this.vpaidPlayer.off ? (this.vpaidPlayer.off(), this.creativeAdError(b, d, a.adErrorCode)) : this.adError(b, d, a.adErrorCode);
    }, b.prototype.staticErrorHandler = function() {
      this.adError("Unable to fetch NonLinear resource", 502);
    }, b.prototype.vpaidExpandedHandler = function(a) {
      var b = this.getVastAd(this.adPodIndex).tracker;
      a.expanded ? b.expand() : b.collapse();
    }, b.prototype.triggerEvent = function(a, b) {
      var c = this.adEventObject(a);
      b && n(c, b);
      -1 !== Qa.indexOf(a) ? this.trigger(a, c) : this.player.trigger(a, c);
    }, b.prototype.addConditionalAdData = function(a) {
      this.vastAd && (a.conditionalAd = this.vastAd.conditionalAd);
      this.vastAdPod && this.vastAdPod.length && (a.conditionalAd = this.vastAdPod[this.adPodIndex].conditionalAd);
      a.conditionalAdOptOut = this.optionalParams.conditionaladoptout;
    }, b;
  }(), Wa = function() {
    function b(a, c) {
      t(this, b);
      this.debugTrackFn = a;
      this.elem = this.div = null;
      this.environment = c;
    }
    return b.prototype.addCompanion = function(a, b) {
      if (this.div = a, this.elem = document.getElementById(this.div.id), !this.elem) {
        return !1;
      }
      for (var c = 0; c < b.length; c++) {
        if (this.fitsDiv(b[c])) {
          return this.placeCompanion(b[c]), !0;
        }
      }
      return !1;
    }, b.prototype.removeCompanion = function() {
      this.elem.innerHTML = "";
    }, b.prototype.sendPings = function(a) {
      (a = a.creativeView) && (a.forEach(function(a) {
        (new Image).src = a;
      }), "function" == typeof this.debugTrackFn && this.debugTrackFn({type:"companion", data:{trackers:a}}));
    }, b.prototype.placeCompanion = function(a) {
      if (this.removeCompanion(), "html" === a.type) {
        var b = document.createElement("div");
        b.innerHTML = a.source;
        var d = b.getElementsByTagName("script");
        return d.length && k._.map(d, function(a) {
          (new k.utils.scriptloader(a.src)).load();
          a.parentElement.removeChild(a);
        }), this.elem.appendChild(b), void this.sendPings(a.trackers);
      }
      if ("iframe" === a.type) {
        return b = document.createElement("iframe"), b.height = this.div.height, b.width = this.div.width, b.src = a.source, b.scrolling = "no", b.style.border = "none", b.marginWidth = 0, b.marginHeight = 0, this.sendPings(a.trackers), this.elem.innerHTML = "", void this.elem.appendChild(b);
      }
      if ("application/x-shockwave-flash" === a.type) {
        return b = document.createElement("object"), b.setAttribute("type", "application/x-shockwave-flash"), b.setAttribute("data", a.source), b.setAttribute("width", "100%"), b.setAttribute("height", "100%"), b.setAttribute("tabindex", 0), W(b, "allowfullscreen", "true"), W(b, "allowscriptaccess", "always"), W(b, "seamlesstabbing", "true"), W(b, "wmode", "opaque"), this.elem.appendChild(b), void this.sendPings(a.trackers);
      }
      b = new Image;
      b.src = a.source;
      k.utils.exists(a.clickthrough) && (b.onclick = function() {
        window.open(a.clickthrough, "_blank").focus();
      });
      this.elem.innerHTML = "";
      this.elem.appendChild(b);
      this.sendPings(a.trackers);
    }, b.prototype.fitsDiv = function(a) {
      return a.width === this.div.width && a.height === this.div.height;
    }, b;
  }(), fa = Date.now || function() {
    return (new Date).getTime();
  }, Xa = function() {
    function b(a) {
      t(this, b);
      this._parsedAds = [];
      this._version = this._error = null;
      a && this.parse(a);
    }
    return b.prototype.parsedAds = function() {
      return this._parsedAds;
    }, b.prototype.error = function() {
      return this._error;
    }, b.prototype.version = function() {
      return this._version;
    }, b.prototype.parse = function(a, b) {
      var c = this, e = void 0, f = void 0;
      "VAST" === a.nodeName ? e = a : (e = l(a, "VAST")[0]) || (e = l(a, "VideoAdServingTemplate")[0]);
      e || this.throwError(101, "Invalid VAST response");
      this._version = f = "VideoAdServingTemplate" === e.tagName ? 1 : parseFloat(p(e, "version") || 0);
      var g, h = l(e, "Ad");
      this._parsedAds = k._.map(h, function(d) {
        d = c.parseAd(f, d);
        return d.vastversion = f, d.response = a, d.request = b || null, d;
      });
      this._parsedAds.length || (g = l(e, "Error"), k._.each(g, function(a) {
        a = v(a).replace("[ERRORCODE]", 303);
        (new Image).src = a;
      }));
    }, b.prototype.parseAd = function(a, b, d) {
      d = d || {};
      var c, f, g, h, q = l(b, "InLine")[0], A = l(b, "Wrapper")[0], Ta = (q = q || A) ? v(l(q, "AdTitle")[0]) : "", G = void 0;
      return d.sequence = p(b, "sequence"), d.adTitle = Ta, (!a || 4 < a || 2 > a) && this.throwError(102, "Vast version not supported"), 4 === a && (d.conditionalAd = !!p(b, "conditionalAd")), q ? (wa(q, "Impression", (G = function(a) {
        var b = l(l(a, "Creatives")[0], "Creative"), c = {}, d = {trackers:c};
        d.adsystem = v(l(a, "AdSystem")[0]);
        a = l(a, "Category");
        return d.categories = k._.map(a, function(a) {
          return v(a);
        }), k._.each(b, function(a) {
          var b = l(a, "Linear")[0], e = l(a, "NonLinear")[0], f = l(l(a, "TrackingEvents")[0], "Tracking"), g = l(a, "UniversalAdId")[0], h = p(g, "idRegistry") || "unknown";
          g = p(g, "idValue") || "unknown";
          d.creativeId = p(a, "id");
          b || e ? (k._.each(f, function(a) {
            va(c, a);
          }), d.universalAdIdRegistry = h, d.universalAdIdValue = g) : (d.companionUniversalAdIdRegistry = h, d.companionUniversalAdIdValue = g);
          f = v(l(a, "AdParameters")[0]);
          if (f && (d.adParams = f), b) {
            var q = l(b, "VideoClicks")[0];
            a = v(l(q, "ClickThrough")[0]);
            q = l(q, "ClickTracking");
            e = p(b, "skipoffset");
            f = v(l(b, "Duration")[0]);
            k._.each(q, function(a) {
              K(c, "click", v(a));
            });
            f && (d.duration = k.utils.seconds(f));
            a && (d.clickthrough = a);
            e && (d.skipoffset = e);
            b = l(l(b, "MediaFiles")[0], "MediaFile");
            a = d.media ? d.media : [];
            d.media = a.concat(k._.map(b, function(a) {
              return {type:p(a, "type"), file:v(a), adType:p(a, "apiFramework") || "", width:parseInt(p(a, "width"), 10) || 0, height:parseInt(p(a, "height"), 10) || 0};
            }).filter(function(a) {
              return a.file;
            }));
          } else {
            if (e) {
              (b = v(l(e, "NonLinearClickThrough")[0])) && (d.clickthrough = b), b = [], (q = l(a, "StaticResource")[0]) && (b.push({type:p(q, "creativeType"), file:v(q), adType:p(l(a, "NonLinear")[0], "apiFramework") || "static", minDuration:p(l(a, "NonLinear")[0], "minSuggestedDuration") || "00:00:00"}), d.media = b);
            } else {
              b = l(l(a, "CompanionAds")[0], "Companion");
              var A = d.companions ? d.companions : [];
              k._.each(b, function(a) {
                var b = l(a, "StaticResource")[0], c = l(a, "IFrameResource")[0], d = l(a, "HTMLResource")[0], e = {}, f = void 0, g = void 0;
                if (b) {
                  f = p(b, "creativeType"), g = v(b);
                } else {
                  if (c) {
                    f = "iframe", g = v(c);
                  } else {
                    if (!d) {
                      return;
                    }
                    f = "html";
                    g = v(d);
                  }
                }
                b = l(l(a, "TrackingEvents")[0], "Tracking");
                k._.each(b, function(a) {
                  var b = p(a, "event");
                  K(e, b, v(a));
                });
                b = v(l(a, "CompanionClickThrough")[0]);
                A.push({width:parseInt(p(a, "width"), 10), height:parseInt(p(a, "height"), 10), type:f, source:g, trackers:e, clickthrough:b});
              });
              d.companions = A;
            }
          }
        }), d;
      }(q)).trackers), wa(q, "Error", G.trackers), g = G, h = {}, k._.each(g.media, function(a) {
        var b = a.type, c = "application/x-mpegURL" === b || "vnd.apple.mpegURL" === b;
        "vpaid" === a.adType.toLowerCase() || c || (h[b] = h[b] || 0, h[b]++);
      }), g.mediaFileCompliance = !0, k._.each(h, function(a, b) {
        3 > a && (g.mediaFileCompliance = !1, g.nonComplianceReasons = g.nonComplianceReasons || [], g.nonComplianceReasons.push(b + " has only " + a + " qualities"));
      }), A && (G.wrappedURI = v(l(A, "VASTAdTagURI")[0]) || v(l(A, "VASTAdTagURL")[0]), G.followAdditionalWrappers = JSON.parse(p(A, "followAdditionalWrappers")), G.allowMultipleAds = JSON.parse(p(A, "allowMultipleAds")), G.fallbackOnNoAd = JSON.parse(p(A, "fallbackOnNoAd"))), c = G, f = n({}, d), k.utils.foreach(c, function(a, b) {
        k.utils.exists(f[a]) ? Array.isArray(b) ? f[a] = f[a].concat(b) : "object" === k.utils.typeOf(b) ? f[a] = n(f[a], c[a]) : f[a] = b : f[a] = b;
      }), G = f) : 2 === a ? this.throwError(900, "Invalid VAST response", 60001) : this.throwError(101, "Invalid VAST response", 10101), G;
    }, b.prototype.throwError = function(a, b, d) {
      var c = this;
      a = B(b, a, d = d || 1E4 + a);
      throw a.toString = function() {
        return c.code + " " + c.message;
      }, this._error = a, this._error;
    }, b;
  }(), Ia = function() {
    function b(a) {
      t(this, b);
      this.postRoll = this.vmap = this.preRoll = null;
      this.midRolls = [];
      this.playedMidRolls = [];
      this.adRules = a;
      this.duration = 0;
      this._vmapXHR = this._vmapPromise = null;
    }
    return b.prototype.load = function(a, b) {
      var c = this;
      return this._vmapPromise || (null !== this._vmapXHR && (xa(this._vmapXHR), this._vmapXHR = null), this._vmapPromise = (new Promise(function(d, f) {
        c._vmapXHR = a.utils.ajax({url:b, withCredentials:!0, retryWithoutCredentials:!0, requireValidXML:!0, timeout:c.requestTimeout}, d, function(a, b, c, d) {
          return f(d);
        });
      })).then(function(a) {
        return c._vmapXHR = null, function(a, b) {
          var c = [], d = l(a, "VMAP", "vmap");
          if (!d.length) {
            throw Error("No VMAP tag in response");
          }
          p(d[0], "version") || Q(c, "VMAP Schema Error: version missing from VMAP tag", "-1");
          d = l(a, "AdBreak", "vmap");
          d.length || ua();
          for (var e = a.lookupNamespaceURI("vmap"), f = 0; f < d.length; f++) {
            var g = {}, Ha = {}, C = d[f], n = p(C, "timeOffset"), ha = p(C, "breakId"), r = p(C, "breakType"), u = p(l(C, "AdSource", "vmap")[0], "id"), x = l(C, "AdTagURI", "vmap")[0], t = l(C, "VASTData", "vmap")[0] || l(C, "VASTAdData", "vmap")[0], D = p(x, "templateType");
            x = v(x);
            C = (y = C, z = "Tracking", S = "vmap", w = void 0, w = [], (B = e) || y ? w = y.getElementsByTagNameNS ? y.getElementsByTagNameNS(B, z) : y.getElementsByTagName(S + ":" + z) : w);
            if (r || Q(c, "VMAP Schema Error: missing breakType on AdBreak", ha), t || D || Q(c, "VMAP Schema Error: missing templateType on AdBreak", ha), n || Q(c, "VMAP Schema Error: missing timeOffset on AdBreak", ha), g._type = r, g._vmap = {id:u, breakid:ha, timeoffset:n}, t) {
              g._adXML = l(t, "VAST")[0];
            } else {
              if ("vast2" !== D && "vast3" !== D && "vast4" !== D) {
                continue;
              }
              g._adQueue = [x];
              g._waterfallIndex = 0;
            }
            u = [];
            if (C) {
              for (t = 0; t < C.length; t++) {
                va(Ha, C[t]), D = p(C[t], "event"), u.push(D);
              }
            }
            switch((0 > u.indexOf("breakStart") || 0 > u.indexOf("breakEnd") || 0 > u.indexOf("error")) && Q(c, "Tracking events are missing breakStart, breakEnd, or error for AdBreak", ha), g._trackers = Ha, g._type = r, n) {
              case "start":
                g._offSet = "pre";
                b.setPreRoll(g);
                break;
              case "100%":
              case "end":
                g._offSet = "post";
                b.setPostRoll(g);
                break;
              default:
                /^#/.test(n) || (/^\d\d?(?:\.\d+)?%$/.test(n) ? g._offSet = n : g._offSet = k.utils.seconds(n), b.addMidRoll(g));
            }
          }
          var B, y, z, S, w;
          return b.preRoll || b.midRolls.length || b.postRoll || ua(), b.sort(null, !0), c;
        }(a.responseXML, c).map(function(a) {
          return a.vmap = b, a;
        });
      })["catch"](function(d) {
        c._vmapXHR = null;
        if (d.message) {
          d = B("VMAP Schema Error: " + d.message, 1002, d.adErrorCode || 11002);
        } else {
          var e = {1:{code:1007, message:"Timeout"}, 602:{code:1E3, message:"Invalid XML"}, "default":{code:1008, message:a.getConfig().localization.errors[d.key]}};
          d = e[d.code] || e["default"];
          a.utils.log(d.message);
          d = B("Error Loading VMAP Schedule", d.code, d.code + 1E4);
        }
        throw d.id = "-1", d.vmap = b, d;
      })), this._vmapPromise;
    }, b.prototype.canWaterfall = function(a) {
      return a._adQueue && a._waterfallIndex + 1 < a._adQueue.length;
    }, b.prototype.setPreRoll = function(a) {
      this.preRoll = a;
    }, b.prototype.getPreRoll = function(a) {
      return a && "none" === this.adRules.startOnSeek ? null : X(this.preRoll, this.requestTimeout, this.creativeTimeout);
    }, b.prototype.getPostRoll = function(a) {
      var b = X(this.postRoll, this.requestTimeout, this.creativeTimeout);
      return this.adRules.timeBetweenAdsAllowsAdPlayback(b, a) ? b : null;
    }, b.prototype.getMidRollAtIndex = function(a) {
      return X(this.midRolls[a], this.requestTimeout, this.creativeTimeout);
    }, b.prototype.getLastMidRollIndexBetweenTime = function(a, b, d) {
      if (b < a) {
        return null;
      }
      this.sort(d);
      for (var c = this.midRolls.length; c--;) {
        var f = this.midRolls[c], g = Y(this.midRolls[c]._offSet, d);
        if (g <= a) {
          break;
        }
        if (g <= b) {
          a = X(f, this.requestTimeout, this.creativeTimeout);
          if (!this.adRules.timeBetweenAdsAllowsAdPlayback(a)) {
            break;
          }
          if (!this.adRules.timeBetweenAds) {
            if (0 <= this.playedMidRolls.indexOf(c)) {
              break;
            }
            this.playedMidRolls.push(c);
          }
          return c;
        }
      }
      return null;
    }, b.prototype.peek = function(a, b, d) {
      if (this.midRolls.length > this.playedMidRolls.length) {
        this.sort(d);
        for (var c = 0; this.midRolls[c];) {
          var f = Y(this.midRolls[c]._offSet, d);
          if (a <= f && -1 === this.playedMidRolls.indexOf(c)) {
            return d = fa() + 1E3 * (f - a), f <= b && this.adRules.timeBetweenAdsAllowsAdPlayback(null, d) ? c : null;
          }
          c += 1;
        }
      }
      c = fa() + 1E3 * (d - a);
      return this.postRoll && d <= b && this.adRules.timeBetweenAdsAllowsAdPlayback(null, c) ? -1 : null;
    }, b.prototype.getNextMidrollIndex = function(a, b, d) {
      return this.adRules.timeBetweenAds || this.adRules.startOnSeek ? this.getLastMidRollIndexBetweenTime(a, b, d) : this.midRolls.length > this.playedMidRolls.length && (a = this.getClosestIndex(b, d), 0 <= a && 0 > this.playedMidRolls.indexOf(a)) ? (this.playedMidRolls.push(a), a) : null;
    }, b.prototype.getMidRolls = function() {
      var a = this;
      return this.midRolls.map(function(b) {
        return X(b, a.requestTimeout, a.creativeTimeout);
      });
    }, b.prototype.reset = function() {
      null !== this._vmapXHR && (xa(this._vmapXHR), this._vmapXHR = null);
      this.playedMidRolls = [];
      this.duration = 0;
    }, b.prototype.addMidRoll = function(a) {
      this.midRolls.push(a);
      this.duration = 0;
    }, b.prototype.setPostRoll = function(a) {
      this.postRoll = a;
    }, b.prototype.sort = function(a, b) {
      (!a || 1 > a) && (a = 1);
      (this.duration !== a || b) && (this.duration = a, this.midRolls.sort(function(b, c) {
        return Y(b._offSet, a) - Y(c._offSet, a);
      }), function(a, b) {
        for (var c = 0; c < a.length; c++) {
          var d = a[c];
          b ? d._vmap.item = c + 1 : d._adbreak = {item:c + 1, tags:d._adQueue, breakid:d._breakId};
        }
      }(this.getAllAds(), b));
    }, b.prototype.getAllAds = function() {
      return (this.preRoll ? [this.preRoll] : []).concat(this.midRolls, this.postRoll ? [this.postRoll] : []);
    }, b.prototype.getAdScheduleEventObject = function() {
      var a = this.getAllAds(), b = [], d = {tag:this.getVMAP(), client:"vast", adbreaks:[]};
      return k.utils.foreach(a, function(a, c) {
        var d = {type:c._type, offset:c._offSet};
        c._vmap ? d.vmap = c._vmap : d.adbreak = n({}, c._adbreak);
        b.push(d);
      }), d.adbreaks = b, d;
    }, b.prototype.setVMAP = function(a) {
      this.vmap = a;
    }, b.prototype.isVMAP = function() {
      return !!this.vmap;
    }, b.prototype.getVMAP = function() {
      return this.vmap;
    }, b.prototype.getClosestIndex = function(a, b) {
      this.sort(b);
      for (var c = this.midRolls.length; c--;) {
        if (a >= Y(this.midRolls[c]._offSet, b)) {
          return c;
        }
      }
      return -1;
    }, b;
  }(), Ya = function() {
    function b() {
      t(this, b);
    }
    return b.prototype.getSchedule = function(a, b) {
      var c = new Ia(b);
      if (c.requestTimeout = Z(a.requestTimeout, 5e3), c.creativeTimeout = Z(a.creativeTimeout, 15e3), a.tag) {
        c.setPreRoll({_offSet:"pre", _adQueue:ya(a.tag), _waterfallIndex:0});
      } else {
        if ("string" == typeof a.vastxml) {
          c.setPreRoll({_offSet:"pre", _adXML:a.vastxml});
        } else {
          if ("string" == typeof a.schedule) {
            return c.setVMAP(a.schedule), c;
          }
          if ("string" == typeof a.adschedule) {
            return c.setVMAP(a.adschedule), c;
          }
          !function(a, b) {
            var c = b.schedule || b.adschedule;
            c && Object.keys(c).forEach(function(d) {
              var e = c[d];
              e.ad && (n(e, e.ad), delete e.ad);
              var f = function(a) {
                if ("start" === a || "0%" === a || !a && 0 !== a) {
                  return "pre";
                }
                if ("end" === a || "100%" === a) {
                  return "post";
                }
                if ("pre" === a || "post" === a || -1 < k._.indexOf(a, "%")) {
                  return a;
                }
                a = k.utils.seconds(a);
                return "number" == typeof a ? a : !1;
              }(e.offset), g = Z(e.requestTimeout, 5e3), h = Z(e.creativeTimeout, 15e3);
              d = {_offSet:f, _type:e.type, _breakId:d, requestTimeout:g, creativeTimeout:h};
              !1 === f && k.utils.log("Error: ad offset format not supported", f);
              g = e.skipoffset || b.skipoffset;
              if (void 0 !== g && (d.skipoffset = g), e.tag) {
                e = function(a, b) {
                  if (!b) {
                    return a;
                  }
                  var c = 0 <= a.indexOf("?") ? "&" : "?", d = a.indexOf("cust_params="), e = "", f = "";
                  return (k.utils.foreach(b, function(a, b) {
                    e = "" + e + f + a + "=" + b;
                    f = "&";
                  }), e = encodeURIComponent(e), 0 <= d) ? (c = a.substr(0, d + 12), d = a.substr(d + 12), "" + c + e + "%26" + d) : "" + a + c + "cust_params=" + e;
                }(e.tag, e.custParams), d._adQueue = ya(e), d._waterfallIndex = 0;
              } else {
                if ("string" != typeof e.vastxml) {
                  return void k.utils.log("Error: no ad tag provided");
                }
                d._adXML = e.vastxml;
              }
              switch(f) {
                case "pre":
                  a.setPreRoll(d);
                  break;
                case "post":
                  a.setPostRoll(d);
                  break;
                default:
                  a.addMidRoll(d);
              }
            });
          }(c, a);
        }
      }
      return c.sort(), c;
    }, b.prototype.getOptParams = function(a, b) {
      var c = {cuetext:b.cuetext, dynamicMessage:b.admessage, loadingAd:b.loadingAd, podMessage:b.podmessage, skipoffset:a.skipoffset || -1, skipMessage:b.skipmessage, skipText:b.skiptext, vpaidcontrols:a.vpaidcontrols || !1, conditionaladoptout:a.conditionaladoptout || !1, requestFilter:a.requestFilter, trackingFilter:a.trackingFilter}, e = a.companiondiv;
      return e && (c.companion = {id:e.id, height:e.height, width:e.width}), c;
    }, b.prototype.getAdRules = function(a) {
      a = a.rules || {};
      var b = parseInt(a.frequency, 10);
      return {startOn:a.startOn || 1, frequency:isNaN(b) ? 1 : b, timeBetweenAds:a.timeBetweenAds || 0, startOnSeek:a.startOnSeek || null};
    }, b;
  }(), Ma = /^((https?:)?\/\/)?(secure)?pubads\.g\.doubleclick\.net\/gampad\/ads\?[\S]*$/, T, Za = function() {
    function b(a, c, d, e, f) {
      t(this, b);
      this._scheduledAd = a;
      this.player = c;
      this.options = d || {};
      this.wrapperOptions = e || {followAdditionalAds:!0, allowMultipleAds:!0};
      this.debugTrackFn = f;
      n(this, c.Events);
      this._history = [];
      this.loadedAds = [];
      this.xmlhttp = this.promise = this.parser = null;
    }
    return b.prototype.load = function(a) {
      var b = this;
      if (null === this.promise) {
        this._history.push(a);
        var d = this.options.requestFilter;
        this.promise = (new Promise(function(c, f) {
          b.xmlhttp = k.utils.ajax({url:a, withCredentials:!0, retryWithoutCredentials:!0, requireValidXML:!0, timeout:b._scheduledAd.requestTimeout, requestFilter:d}, c, function(a, b, c, d) {
            return f(d);
          });
        }))["catch"](function(c) {
          if (null !== b.player) {
            throw b.ajaxError(c, a);
          }
        }).then(function(c) {
          if (null !== b.player) {
            return b.parseXMLString(c.responseXML || c.responseText, a);
          }
        });
      }
      return this.promise;
    }, b.prototype.destroy = function() {
      var a;
      (a = this.xmlhttp) && (a.onload = null, a.onreadystatechange = null, a.onerror = null, a.abort && a.abort());
      this.xmlhttp = this.player = null;
    }, b.prototype.scheduledAd = function() {
      return this._scheduledAd;
    }, b.prototype.allAds = function() {
      return this.loadedAds;
    }, b.prototype.adPod = function() {
      var a = [];
      return this.loadedAds.forEach(function(b) {
        b.sequence && a.push(b);
      }), a.sort(function(a, b) {
        return a.sequence - b.sequence;
      }), a;
    }, b.prototype.adBuffet = function() {
      var a = [];
      return this.loadedAds.forEach(function(b) {
        b.sequence || a.push(b);
      }), a;
    }, b.prototype.history = function() {
      return this._history;
    }, b.prototype.parseXMLString = function(a, c) {
      var d = this;
      return null === this.parser && (this.parser = new Xa), (new Promise(function(b) {
        var c = (c = a, "object" == typeof Node ? c instanceof Node : c && "object" == typeof c && "number" == typeof c.nodeType && "string" == typeof c.nodeName) ? a : k.utils.parseXML(a);
        return d.parser.parse(c, d.xmlhttp), b(d.parser.parsedAds());
      }))["catch"](function(a) {
        if (null !== d.player) {
          var b = a.code || 900;
          throw d.sendErrorEvent(a.message, b, a.adErrorCode || 1E4 + b, c);
        }
      }).then(function(a) {
        if (null === d.player) {
          return null;
        }
        if (0 === a.length) {
          throw a = 2 === d.parser.version(), d.sendErrorEvent("Ad Tag Empty", a ? 900 : 101, a ? 60001 : 10101, c);
        }
        var e = a.filter(function(a) {
          return !a.sequence;
        });
        d.wrapperOptions.allowMultipleAds ? d.loadedAds = a : d.loadedAds = e;
        d.options.wrapper = d.options.wrapper || [];
        d.options.adsystem && d.options.wrapper.push(d.options.adsystem);
        d.options.adsystem = d.loadedAds[0].adsystem;
        var g = [];
        return a.forEach(function(a) {
          if (a.wrappedURI) {
            if (!1 !== d.wrapperOptions.followAdditionalWrappers) {
              d.options.wrappedTags = d.options.wrappedTags || [d._scheduledAd._currentTag];
              d.options.wrappedTags.push(a.wrappedURI);
              var c = (new b(d._scheduledAd, d.player, d.options, {fallbackOnNoAd:a.fallbackOnNoAd, allowMultipleAds:a.allowMultipleAds, followAdditionalWrappers:a.followAdditionalWrappers}, d.debugTrackFn)).load(a.wrappedURI).then(function(b) {
                var c, e;
                b = (c = b.allAds(), e = [], k.utils.foreach(c, function(b, c) {
                  var d, f;
                  a.companions && (c.companions = (c.companions ? c.companions : []).concat(a.companions));
                  a.trackers && (c.trackers = (d = c.trackers, f = a.trackers, d = d || {}, k.utils.foreach(f, function(a, b) {
                    d[a] ? d[a] = d[a].concat(b) : d[a] = b;
                  }), d));
                  a.sequence && (c.sequence = a.sequence);
                  e.push(c);
                }), e);
                c = d.loadedAds.indexOf(a);
                Array.prototype.splice.apply(d.loadedAds, [c, 1].concat(b));
              })["catch"](function(b) {
                var c = d.sendAdpodErrorEvent(b.message, b.code, b.adErrorCode, b.url), f = a.fallbackOnNoAd && a.sequence && e.length && "Ad Tag Empty" === c.message, g = d.loadedAds.indexOf(a);
                if (f) {
                  return a.loadError = c, void b.vloader.destroy();
                }
                if (d.loadedAds.splice(g, 1), b.vloader.destroy(), "adPodError" !== c.type) {
                  throw c;
                }
                d.trigger("adPodError", c);
              });
              g.push(c);
            }
          } else {
            1 < d.options.wrapper.length && (a.wrapper = d.options.wrapper, a.wrappedTags = d.options.wrappedTags);
          }
        }), Promise.all(g);
      }).then(function() {
        if (null === d.player) {
          return null;
        }
        var a = d.loadedAds.filter(function(a) {
          return !a.sequence;
        });
        d.loadedAds.forEach(function(b, c) {
          b.loadError && (a.length ? d.loadedAds[c] = n({}, a[0], {sequence:b.sequence}) : d.trigger("adPodError", b.loadError));
        });
        var b = d.loadedAds.slice(0), c = b.length;
        b.forEach(function(a) {
          a.media && a.media.length || b.length--;
        });
        var h = b.length !== c;
        if (0 === c || h) {
          throw d.sendErrorEvent("Ad Tag Empty", 101, 10101, d._history[d._history.length - 1]);
        }
        return d;
      });
    }, b.prototype.ajaxError = function(a, b) {
      if (this.player.getAdBlock()) {
        return this.sendErrorEvent("Ad playback blocked by an ad blocker", 900, 60003, b);
      }
      var c = a.code;
      if (601 === c || 602 === c) {
        return this.sendErrorEvent("Invalid XML", 100, 10100, b);
      }
      if (1 === c || 404 === c) {
        return this.sendErrorEvent("VAST could not be loaded", 301, 10301, b);
      }
      c = this.options.wrappedTags && this.options.wrappedTags.length;
      return this.sendErrorEvent(a.message || "Error loading file", c ? 303 : 900, c ? 10303 : 60006, b);
    }, b.prototype.firstUrl = function() {
      return this._history && this._history.length ? this._history[0] : "";
    }, b.prototype.sendAdpodErrorEvent = function(a, b, d, e) {
      if (1 === this.loadedAds.length) {
        return this.sendErrorEvent(a, b, d, e);
      }
      a = B(a, b, d);
      return a.type = "adPodError", a.vloader = this, a.url = this.firstUrl() || e, this.wrappedTags = e, a;
    }, b.prototype.sendErrorEvent = function(a, b, d, e) {
      a = B(a, b, d);
      return a.vloader = this, a.url = this.firstUrl() || e, this.options.wrappedTags && (a.wrapperAdSystem = this.options.wrapper || "", a.wrappedTags = this.options.wrappedTags), a.adsystem = this.options.adsystem || "", this.trackError(a), a;
    }, b.prototype.trackError = function(a) {
      var b = a.vloader.allAds();
      b && b.length && (b = b[0]) && (b = b.trackers) && b.error && (new na(b, this.debugTrackFn, this.player, this.options.trackingFilter)).error(a.code);
    }, b;
  }(), Ja = ((T = {})[["dfp"]] = ["APS", "FAN", "Index", "SpotX"], T[["jwp"]] = ["FAN", "SpotX"], T[["jwpdfp"]] = ["SpotX"], T[["jwpspotx"]] = ["SpotX"], T), $a = [{message:"SpotX :: Unable to find ad", result:"noBid", code:0}, {message:"Error loading script", result:"error", code:6}, {message:"Invalid options: 'slot' is required", code:300}, {message:"Invalid options: 'slot' must be part of DOM", code:301}, {message:"Invalid options: 'channel_id' is required.", code:302}, {message:"Invalid options: 'content_width' and 'content_height' are required when no 'video_slot' is provided.", 
  code:303}, {message:"Invalid options: 'content_width' provided but 'content_height' is not.", code:304}, {message:"Invalid options: 'content_height' provided but 'content_width' is not.", code:305}, {message:"Invalid options: 'custom' must be an object.", code:306}, {message:"Invalid options: 'token' must be an object.", code:307}, {message:"Invalid options: 'ados' must be an object.", code:308}, {message:"Invalid options: 'contentPageUrl' must be a string.", code:309}, {message:"Invalid options: 'demand_source_timeout' must be a number.", 
  code:310}, {message:"Invalid options: 'total_bid_timeout' must be a number.", code:311}], ab = [{message:"Incorrect domain", code:321}, {message:"unsupported_platform", code:322}, {message:"Request_URL_noncompliant", code:323}, {message:"Application not authorised for header bidding", code:324}, {message:"pageurl is required", code:325}, {message:"adformats", code:326}], w = Date.now || function() {
    return (new Date).getTime();
  }, Ka = encodeURIComponent(window.location.href), L = null, Ba = null, aa = null, U = void 0, M = null, I, La = ((I = {})[["APS"]] = {requestBids:function(b, a) {
    return b.id && b.slotID ? za().then(function(c) {
      return c.init({id:b.pubId, adServer:b.adServer}), new Promise(function(d) {
        c.fetchBids({slots:[{slotID:b.slotID}], timeout:a.bidTimeout}, d);
      });
    }).then(function(c) {
      return c && c[0] && c[0].slotID === b.slotID ? {result:"bid", code:1, tag:a.tag, custParams:{amznbid:c[0].amznbid, amzniid:c[0].amzniid}} : {result:"noBid", code:0};
    })["catch"](function(a) {
      return {result:"error", code:5, message:"Amazon header bidding failed: " + a};
    }) : Promise.resolve({result:"invalid", code:3});
  }, getCustomResponse:function() {
    return {};
  }}, I[["FAN"]] = {requestBids:function(b, a, c) {
    var d = b.id, e = (f = d, g = a.playerWidth, h = a.playerHeight, ["https://an.facebook.com/v2/placementbid.json?&placementids[]=" + f, "&playerwidth=" + g, "&playerheight=" + h, "&adformats[]=video&SDK[]=3.0.0", "&pageurl=" + Ka, "$random=" + Math.random() * Math.pow(10, 18)].join("")), f, g, h;
    b = e ? "dfp" === a.mediationLayerAdServer || a.floorPriceCents && "usd" === (a.floorPriceCurrency || "usd") : !1;
    return b ? (new Promise(function(a) {
      var b = new XMLHttpRequest;
      b.onreadystatechange = function() {
        4 === this.readyState && (a(this), b = null);
      };
      b.open("GET", e);
      b.withCredentials = !0;
      b.send(null);
      c.then(function() {
        b && (b.abort(), b = null);
      });
    })).then(function(b) {
      if (200 !== b.status) {
        return {result:"error", code:5, message:"Invalid response (status " + b.status + ")"};
      }
      var c, e;
      b = JSON.parse(b.responseText);
      var f = b.errors;
      if (f && f.length) {
        return {result:"invalid", code:(c = f[0], e = ab.filter(function(a) {
          return 0 <= c.indexOf(a.message);
        })[0], e ? e.code : 320)};
      }
      e = b.bids;
      if (!e || !e[d] || !e[d][0]) {
        return {result:"noBid", code:0};
      }
      f = e[d][0];
      e = f.bid_price_cents;
      b = f.bid_id;
      if ("dfp" === a.mediationLayerAdServer) {
        return {result:"bid", code:1, tag:a.tag, custParams:{jwFANBidPrice:Math.round(e / 100), jwFANBidID:b}};
      }
      var g, h;
      f = {result:"bid", code:1, priceInCents:e, priceCurrency:f.bid_price_currency};
      return e >= a.floorPriceCents && (f.tag = (g = a.playerWidth, h = a.playerHeight, ["https://an.facebook.com/v1/instream/vast.xml?placementid=" + d, "&playerwidth=" + g, "&playerheight=" + h, "&SDK[]=3.0.0", "&bidid=" + b, "&pageurl=" + Ka].join(""))), f;
    })["catch"](function(a) {
      return {result:"error", code:5, message:"FAN header bidding failed: " + a};
    }) : Promise.resolve({result:"invalid", code:3});
  }, getCustomResponse:function() {
    return {};
  }}, I[["Index"]] = {requestBids:function(b, a) {
    if (!b.id && !b.script) {
      return Promise.resolve({result:"invalid", code:3});
    }
    var c = n({videoCommonArgs:{protocols:[2, 3, 5, 6], mimes:["video/mp4", "video/webm", "application/javascript"], apiList:[1, 2]}, siteID:b.id}, b);
    return Da().then(function(b) {
      return new Promise(function(d) {
        b.deferQueue = b.deferQueue || [];
        b.deferQueue.push(function() {
          b.solicitIndexVideoAds(a.tag, function(a, b) {
            d({updatedTag:a, indexTargeting:b});
          }, c);
        });
      });
    }).then(function(b) {
      b = b.indexTargeting;
      return void 0 !== b ? {result:"bid", code:1, tag:a.tag, custParams:b} : {result:"noBid", code:0};
    })["catch"](function(a) {
      return {result:"error", code:5, message:"Index Exchange header bidding failed: " + a};
    });
  }, getCustomResponse:function() {
    return {};
  }}, I[["SpotX"]] = {requestBids:function(b, a) {
    if (!b.id) {
      return Promise.resolve({result:"invalid", code:302});
    }
    var c = n({channel_id:b.id, slot:a.playerContainer, content_width:a.playerWidth, content_height:a.playerHeight, player_vendor:"SpotXJW", player_vendor_id:a.playerId, ad_volume:a.adVolume, ad_mute:a.mute ? 1 : 0, autoplay:a.autoplay, blocked_autoplay_override_mode:a.autoplayAdsMuted, start_delay:function(a) {
      if ("start" === a || "0%" === a || !a || "pre" === a || "00:00:00" === a) {
        return 0;
      }
      if ("end" === a || "100%" === a || "post" === a) {
        return -2;
      }
      if ("string" == typeof a && 0 <= a.indexOf("%")) {
        return -1;
      }
      a = parseInt(a);
      return 0 < a ? a : -1;
    }(a.offset), placement:1, hide_skin:!0}, b.optionalParams);
    b.passFloorPrice && a.floorPriceCents && (c.price_floor = a.floorPriceCents / 100);
    return Aa(b.id).then(function(a) {
      var b = a.SpotX;
      U = a.loadingTime;
      a = new b.DirectAdOS(c);
      var d = w();
      return a.getAdServerKVPs().then(function(a) {
        return {response:a, bidNetworkStartTime:d};
      });
    }).then(function(b) {
      var c = b.response;
      b = b.bidNetworkStartTime;
      var d = w() - b;
      b = c.spotx_ad_key;
      var g = {spotx_bid:c.spotx_bid, spotx_ad_key:b};
      c = {result:"bid", code:1, priceInCents:100 * parseFloat(c.spotx_bid), custParams:g, scriptLoadingTime:U, bidNetworkResponseTime:d};
      if ("dfp" === a.mediationLayerAdServer) {
        return c;
      }
      d = ["file:" === document.location.protocol ? "https:" : "", "//search.spotxchange.com/ad/vast.html?key=", b].join("");
      return n(c, {tag:d, tagKey:b});
    })["catch"](function(a) {
      var b = $a.filter(function(b) {
        return b.message === a.message;
      })[0];
      return b ? {result:b.result || "invalid", code:b.code, scriptLoadingTime:U} : {result:"error", message:"SpotX header bidding failed: " + a, code:5, scriptLoadingTime:U};
    });
  }, getCustomResponse:function() {
    return {scriptLoadingTime:U};
  }}, I), bb = function() {
    function b() {
      var a, c, d = this, e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, f = e.settings;
      f = void 0 === f ? {} : f;
      e = e.bidders;
      e = void 0 === e ? [] : e;
      var g = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
      (t(this, b), this.settings = (a = n({bidTimeout:2E3, offset:"", playerContainer:g.container, playerHeight:g.height || 0, playerWidth:g.width || 0, tag:""}, g, f), Ja[a.mediationLayerAdServer] || (a.mediationLayerAdServer = "jwp"), "jwpspotx" === a.mediationLayerAdServer && (a.floorPriceCents = 1), a), this.bidders = e.reduce(function(a, b) {
        return b.name && (a[b.name] = n(b, b.custom_params)), a;
      }, {}), "pre" !== this.settings.offset && 0 !== parseInt(this.settings.offset)) && (this.bidders = this.bidders.SpotX ? ((c = {})[["SpotX"]] = this.bidders.SpotX, c) : {});
      this.bidders.APS && this.bidders.APS.id && this.bidders.APS.slotID && za();
      this.bidders.Index && (this.bidders.Index.script || this.bidders.Index.id) && Da(this.bidders.Index.script);
      this.bidders.SpotX && this.bidders.SpotX.id && Aa(this.bidders.SpotX.id);
      this._onCancelTrigger = this._currentTimeout = this._bidRequest = null;
      this.onCancel = new Promise(function(a) {
        d._onCancelTrigger = a;
      });
    }
    return b.prototype.start = function() {
      var a, b, d, e, f;
      return this._bidRequest || (this._bidRequest = (a = {config:this.bidders, settings:this.settings, onCancel:this.onCancel}, b = a.config, d = a.settings, e = a.onCancel, f = Ja[d.mediationLayerAdServer].filter(function(a) {
        return b[a];
      }).map(function(a) {
        var c = w();
        return Promise.race([La[a].requestBids(b[a], d, e), e]).then(function(d) {
          var e = La[a].getCustomResponse();
          return n({}, b[a], d, e, {timeForBidResponse:w() - c | 0});
        });
      }), Promise.all(f).then(function(a) {
        var b = "dfp" === d.mediationLayerAdServer || "jwpdfp" === d.mediationLayerAdServer, c = "jwp" === d.mediationLayerAdServer || "jwpdfp" === d.mediationLayerAdServer || "jwpspotx" === d.mediationLayerAdServer, e = {priceInCents:d.floorPriceCents, timeForBidResponse:1 / 0}, f = [], g = {}, k = {};
        return k.bidders = a.map(function(a) {
          return b || (a.winner = !1), "bid" === a.result && (f.push(a), n(g, a.custParams), c && (a.priceInCents > e.priceInCents || a.priceInCents === e && a.timeForBidResponse < e.timeForBidResponse) && (e = k.result = a)), a;
        }), c && e.name ? e.winner = !0 : b && f.length && (k.result = {tag:d.tag, custParams:g}), k;
      }))), this._bidRequest;
    }, b.prototype.stop = function() {
      var a = this;
      clearTimeout(this._currentTimeout);
      this._onCancelTrigger({result:"abort", code:4});
      this._onCancelTrigger = this._currentTimeout = this._bidRequest = null;
      this.onCancel = new Promise(function(b) {
        a._onCancelTrigger = b;
      });
    }, b.prototype.getEventObject = function(a, b, d) {
      var c = d.offset, f = d.adBreakId, g = d.adPlayId;
      d = this.settings.mediationLayerAdServer;
      b = b || [];
      "pre" !== c && 0 !== parseInt(c) && (b = b.filter(function(a) {
        return "SpotX" === a.name;
      }));
      a = {client:a, offset:c, mediationLayerAdServer:d, bidders:b, adBreakId:f, adPlayId:g, bidTimeout:this.settings.bidTimeout};
      (c = this.settings.floorPriceCents) && "jwpspotx" !== d && "dfp" !== d && (a.floorPriceCents = c);
      d = this.settings.floorPriceCurrency;
      return d && (a.floorPriceCurrency = d), a;
    }, b.prototype.then = function(a) {
      return this._bidRequest ? this._bidRequest.then(a, a) : null;
    }, b.prototype.timeout = function() {
      clearTimeout(this._currentTimeout);
      this._currentTimeout = setTimeout(this._onCancelTrigger, this.settings.bidTimeout, {result:"timeout", code:2});
    }, b;
  }(), cb = 0, db = function() {
    function b(a, c, d, e, f) {
      var g = this;
      t(this, b);
      this.config = e;
      this.item = d;
      this.params = f;
      this.player = a;
      this.schedule = c;
      this.adIds = {};
      this._preRollPromise = this.vmapPromise = null;
      this._midRollPromise = {};
      this.vmapTracker = this._postRollPromise = null;
      this._errors = [];
      this._vloaderQueue = [];
      this.bids = [];
      this.bidsPromise = null;
      this.bidsResult = {};
      this._debugTrackFn = e.debug && e.trackFn ? e.trackFn : null;
      n(this, a.Events);
      this.trigger = function(b, c) {
        return c.item = g.item, a.Events.trigger.call(g, b, c);
      };
    }
    return b.prototype.init = function(a) {
      var b = this, d = this.schedule, e = d.isVMAP();
      return e && (this.vmapPromise = d._vmapPromise["catch"](this.player.utils.noop)), this.bidsPromise = null === a ? this.vmapPromise || Promise.resolve() : e ? this.vmapPromise.then(function() {
        return b.isDestroyed() ? null : b._createBidsPromise(a);
      }) : this._createBidsPromise(a), this.bidsPromise;
    }, b.prototype._createBidsPromise = function(a) {
      var b = this, d = this.player, e = parseInt(a.bidOnBreaks, 10);
      return e = 0 < e ? e : 1 / 0, this.bids = this.schedule.getAllAds().slice(0, e).map(function(c) {
        var e = new bb(a, {offset:c._offSet, width:d.getWidth(), height:d.getHeight(), container:d.getContainer(), playerId:d.id, autoplay:d.getConfig().autostart, autoplayAdsMuted:b.config.autoplayadsmuted, adVolume:d.getVolume(), mute:d.getMute()});
        e.start();
        var f = b.getAdIds(c), k = f.adBreakId, l = f.adPlayId;
        f = e.getEventObject("vast", a.bidders, {offset:c._offSet, adBreakId:k, adPlayId:l});
        return b.trigger("adBidRequest", f), e.then(function(a) {
          var d = a.bidders;
          a = a.result;
          b.isDestroyed() || (a && !a.error && a.tag && (c._adQueue = c._adQueue || [], c._adQueue[0] = a.tag, c._adXML = null), b.bidsResult[c._vmap ? c._vmap.breakid : c._breakId] = {bid:e, bidders:d}, d = e.getEventObject("vast", d, {offset:c._offSet, adBreakId:k, adPlayId:l}), b.trigger("adBidResponse", d));
        }), e;
      }), Promise.all(this.bids);
    }, b.prototype.getAdIds = function(a) {
      var b = a._offSet;
      this.adIds[b] = this.adIds[b] || {adBreakId:ka(12), adPlayIds:{}};
      var d = this.adIds[b].adPlayIds;
      a = "p" + (a._adPodIndex || 0) + "w" + a._waterfallIndex;
      var e = d[a];
      return e || (d[a] = e = ka(12)), {adBreakId:this.adIds[b].adBreakId, adPlayId:e};
    }, b.prototype.loadPreRoll = function() {
      var a = this, b = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
      return null === this._preRollPromise && (this._preRollPromise = this.bidsPromise.then(function() {
        if (!a.isDestroyed()) {
          var c = a.schedule.getPreRoll(b.startTime);
          return c ? (c._position = "pre", a.loadAd(c, b)) : void 0;
        }
      })), this._preRollPromise;
    }, b.prototype.loadMidRollAtIndex = function(a, b) {
      var c = this;
      return this._midRollPromise[a] || (this._midRollPromise[a] = this.bidsPromise.then(function() {
        if (!c.isDestroyed()) {
          var d = c.schedule.getMidRollAtIndex(a);
          return d ? (d._position = "mid", c.loadAd(d, b)) : void 0;
        }
      })), this._midRollPromise[a];
    }, b.prototype.loadPostRoll = function() {
      var a = this, b = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
      return null === this._postRollPromise && (this._postRollPromise = this.bidsPromise.then(function() {
        if (!a.isDestroyed()) {
          var c = a.schedule.getPostRoll(b.startTime);
          return c ? (c._position = "post", a.loadAd(c, b)) : void 0;
        }
      })), this._postRollPromise;
    }, b.prototype.loadAd = function(a) {
      var b = this, d = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, e = this.player.utils;
      if (a._id = a._id || ka(12), this.config.preloadAds && (a._preload = a._preload || d.preload || !1), a._vmapTracker = this.getVMAPTracker(a), a._adXML) {
        a.currentTag = a._currentTag || "clientloadedtag_" + cb++;
      } else {
        if (!a._adQueue) {
          return void e.log("scheduled ad has no url or xml", a);
        }
      }
      var f = a._adXML ? this._loadXML(a, d) : this._loadTag(a, d);
      return f.then(function() {
        return b.isDestroyed() ? null : b._dispatchAdLoaded(a);
      })["catch"](e.noop), f["catch"](function() {
        return b.isDestroyed() ? null : b._dispatchAdLoaded(a);
      })["catch"](e.noop), f["catch"](function(a) {
        return b.isDestroyed() ? null : b._vloaderWaterfall(a, d);
      });
    }, b.prototype.getVMAPTracker = function(a) {
      if (!a._vmapTracker) {
        var b = new na(a._trackers, this._debugTrackFn, this.player, this.config.trackingFilter);
        a._vmapTracker = this.vmapTracker = b;
      }
      return a._vmapTracker;
    }, b.prototype._loadTag = function(a, b) {
      var c = a._adQueue[a._waterfallIndex], e = oa(c, this.player, this.params);
      if (a._currentTag = e, "function" == typeof this._debugTrackFn && this._debugTrackFn({type:"tagReplacement", data:{actualTag:e, originalTag:c}}), b.adBlock) {
        throw this._adBlockDetected(a);
      }
      c = this._createVastLoader(a).load(e);
      return this._dispatchAdRequest(a, e), c;
    }, b.prototype._loadXML = function(a, b) {
      if (a._currentTag = a._currentTag || a._adXML.toString(), b.adBlock) {
        throw this._adBlockError(a);
      }
      var c = this._createVastLoader(a).parseXMLString(a._adXML);
      return this._dispatchAdRequest(a, a._currentTag), c;
    }, b.prototype._adBlockError = function(a) {
      a = this.getAdEventObject(a);
      var b = B("Ad playback blocked by an ad blocker", 900, 600003);
      return n(a, b);
    }, b.prototype._dispatchAdRequest = function(a, b) {
      this.trigger("adRequest", this.getAdEventObject(a, b));
    }, b.prototype._dispatchAdLoaded = function(a) {
      this.trigger("adLoaded", this.getAdEventObject(a));
    }, b.prototype._vloaderWaterfall = function(a, b) {
      var c = a.vloader;
      this.removeVastLoader(c);
      var e = this._getVloaderErrorObject(a);
      return this.adWaterfall(c, b, e);
    }, b.prototype.adWaterfall = function(a, b, d) {
      a = a.scheduledAd();
      if (this.schedule.canWaterfall(a)) {
        return a._waterfallIndex += 1, this._enqueueAdError(a, d), this.loadAd(a, b);
      }
      throw d;
    }, b.prototype.getAdEventObject = function(a, b) {
      return n((e = b, f = {}, void 0 !== (c = a)._preload && (f.preloadAds = c._preload), void 0 !== c.skipoffset && (f.skipoffset = c.skipoffset), c._adbreak && (f.adschedule = c._adbreak, f.adschedule.offset = c._offSet), n(f, {id:c._id, tag:e || c._currentTag, client:"vast", adposition:c._position, offset:c._offSet, witem:c._waterfallIndex + 1, wcount:c._adQueue ? c._adQueue.length : 1})), this.getAdIds(a));
      var c, e, f;
    }, b.prototype.clearAdIds = function(a) {
      this.adIds[a._offSet] = null;
    }, b.prototype._createVastLoader = function(a) {
      var b = this, d = this.config;
      d = new Za(a, this.player, {requestFilter:d.requestFilter, trackingFilter:d.trackingFilter});
      return this._vloaderQueue.push(d), d.on("adPodError", function(c) {
        c = b._getVloaderErrorObject(c);
        b._enqueueAdError(a, c);
      }), d;
    }, b.prototype._getVloaderErrorObject = function(a) {
      var b = this.getAdEventObject(a.vloader.scheduledAd(), a.url), d = B(a.message, a.code, a.adErrorCode);
      return n(b, d), a.wrappedTags && a.wrappedTags !== a.url && (a.wrapperAdSystem && a.wrapperAdSystem.length !== a.wrappedTags.length && (a.wrapperAdSystem.push(a.adsystem), a.adsystem = ""), b.tag = a.wrappedTags.pop(), b.wrappedTags = a.wrappedTags, b.adsystem = a.adsystem, b.wrapperAdSystem = a.wrapperAdSystem), b;
    }, b.prototype._enqueueAdError = function(a, b) {
      this._errors.push(b);
      a._preload || this.dequeueAdErrors();
    }, b.prototype.dequeueAdErrors = function() {
      var a = this;
      this._errors.forEach(function(b) {
        return a.trigger("adError", b);
      });
      this._errors.splice(0);
    }, b.prototype.removeVastLoader = function(a) {
      var b = this._vloaderQueue.indexOf(a);
      -1 !== b && (a.destroy(), this._vloaderQueue.splice(b, 1));
    }, b.prototype.isDestroyed = function() {
      return null === this.player;
    }, b.prototype.destroy = function() {
      this.bids.forEach(function(a) {
        return a.stop();
      });
      this._vloaderQueue.forEach(function(a) {
        return a.destroy();
      });
      this.player = null;
    }, b;
  }(), u = document.createElement("img"), r = document.createElement("img");
  u.src = r.src = 'data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><circle cx="32" cy="32" r="32" fill="%23191919"/><line stroke="%23CCC" stroke-width="6" x1="32" y1="20" x2="32" y2="44"/><line stroke="%23CCC" stroke-width="6" x1="20" y1="32" x2="44" y2="32"/></svg>';
  u.className = "jw-vast-nonlinear-open-button";
  r.className = "jw-vast-nonlinear-close-button";
  var eb = {cursor:"pointer", position:"absolute", margin:"auto", left:0, right:0, bottom:0, display:"block"}, fb = {"-webkit-transition":"opacity 0.2s", transition:"opacity 0.2s"}, gb = function() {
    function b(a, c, d, e, f) {
      t(this, b);
      this.player = a;
      this.environment = a.getEnvironment();
      this.div = e;
      this.staticURL = c;
      this.clickURL = d;
      this.animationTimer = this.loadTimer = -1;
      this.banner = null;
      n(this, a.Events);
      this.banner = document.createElement("img");
      this.banner.className = "jw-banner";
      this.banner.id = this.player.id + "_vast_static";
      ea([r, u]);
      this.remove(u);
      this.div.appendChild(this.banner);
      this.div.appendChild(r);
      this.loadTimer = setTimeout(this.imageLoadError.bind(this), f);
      this.banner.onerror = this.imageLoadError.bind(this);
      this.banner.onload = this.onLoaded.bind(this);
      this.banner.src = this.staticURL;
    }
    return b.prototype.onLoaded = function() {
      clearTimeout(this.loadTimer);
      0 !== this.banner.naturalWidth ? (this.removeBannerEventListeners(), k.utils.style(r, {top:-this.banner.height - 8, bottom:this.banner.height - 8, left:this.banner.width}, !0), k.utils.style(u, {top:-16}, !0), z([this.div, this.banner]), z(r, .75), (new k.utils.UI(this.banner)).on("click tap", this.sendClick.bind(this)), this.environment.OS.mobile && (this.div.onmouseover = Ea, this.div.onmouseout = Fa), r.onclick = r.ontouchstart = this.collapse.bind(this), u.onclick = u.ontouchstart = this.expand.bind(this), 
      this.trigger("play")) : this.imageLoadError();
    }, b.prototype.imageLoadError = function() {
      clearTimeout(this.loadTimer);
      this.trigger("error");
      this.removeBanner();
    }, b.prototype.sendClick = function() {
      this.trigger("click");
    }, b.prototype.collapse = function(a) {
      var b = this;
      -1 === this.animationTimer && (a.preventDefault(), this.div.onmouseover = this.div.onmouseout = null, ea([this.banner, r, u]), this.div.appendChild(u), this.animationTimer = setTimeout(function() {
        b.remove(b.banner);
        b.remove(r);
        z(u, .5);
        b.div.onmouseover = Na;
        b.div.onmouseout = Oa;
        b.animationTimer = -1;
      }, 250));
    }, b.prototype.expand = function(a) {
      var b = this;
      -1 === this.animationTimer && (a.preventDefault(), this.div.onmouseover = this.div.onmouseout = null, this.div.appendChild(this.banner), this.div.appendChild(r), this.animationTimer = setTimeout(function() {
        z([b.banner, r]);
        b.div.onmouseover = Ea;
        b.div.onmouseout = Fa;
        b.animationTimer = -1;
      }, 50), ea(u));
    }, b.prototype.remove = function(a) {
      this.div.contains(a) && this.div.removeChild(a);
    }, b.prototype.removeBannerEventListeners = function() {
      this.banner.onload = this.banner.onerror = null;
    }, b.prototype.removeBanner = function() {
      this.removeBannerEventListeners();
      this.remove(this.banner);
    }, b.prototype.removeListeners = function() {
      clearTimeout(this.loadTimer);
      clearTimeout(this.animationTimer);
      this.div.onmouseover = this.div.onmouseout = r.onclick = u.onclick = null;
      this.off();
      this.removeBannerEventListeners();
    }, b.prototype.stop = function() {
      ea([this.div, this.banner, r, u]);
      setTimeout(this.removeBanner.bind(this), 400);
      this.remove(r);
      this.remove(u);
    }, b;
  }(), hb = function() {
    function b(a, c) {
      t(this, b);
      this.player = a;
      this.div = c;
      this.minDur = this.startTime = 0;
      this.environment = a.getEnvironment();
      n(this, a.Events);
      this.type = "static";
      a.on("time", this.dispatchTime, this);
    }
    return b.prototype.playAd = function(a, b, d, e, f) {
      this.minDur = k.utils.seconds(d);
      this.adTag = e;
      this["static"] && (this["static"].removeListeners(), this["static"].stop());
      this.div.style.opacity = 0;
      this.div.style.visibility = "visible";
      d = this.environment.Browser.firefox ? {} : fb;
      k.utils.style(this.div, k.utils.extend({top:"", position:"absolute", width:"100%"}, d));
      k.utils.style([r, u], n({width:"18px", height:"18px", opacity:.75}, eb, d));
      k.utils.style(r, {transform:"rotate(45deg)"});
      this["static"] = new gb(this.player, a, b, this.div, f);
      this["static"].on("play", this.startAd, this);
      this["static"].on("click", this.clickHandler, this);
      this["static"].on("error", this.errorHandler, this);
    }, b.prototype.dispatchTime = function(a) {
      this.trigger("time", a);
    }, b.prototype.startAd = function() {
      this.startTime = this.player.getPosition();
      0 < this.minDur && (0 === this.startTime ? this.on("time", this.startTimingAd, this) : this.on("time", this.timeAd, this));
      this.sendEvent("play");
    }, b.prototype.startTimingAd = function(a) {
      this.startTime = a.position;
      this.off("time", this.startTimingAd, this);
      this.on("time", this.timeAd, this);
    }, b.prototype.timeAd = function(a) {
      a.position - this.startTime > this.minDur && (this.off("time", this.timeAd, this), this.stop());
    }, b.prototype.clickHandler = function() {
      this.sendEvent("click");
    }, b.prototype.errorHandler = function() {
      this.sendEvent("error");
    }, b.prototype.sendEvent = function(a, b) {
      (b = b || {}).tag = b.tag || this.adTag;
      this.trigger(a, b);
    }, b.prototype.removeEvents = function() {
      this.off();
    }, b.prototype.getState = function() {
      return "playing";
    }, b.prototype.stop = function() {
      this.startTime && this["static"] && (this.startTime = 0, this.minDur = 0, this.off("time", this.startTimingAd, this), this.off("time", this.timeAd, this), this["static"].removeListeners(), this["static"].stop(), this.sendEvent("complete"));
    }, b.prototype.pause = function() {
    }, b;
  }(), ib = function() {
    function b(a, c) {
      t(this, b);
      this.player = a;
      this.options = c;
      this.ignoreStartOnSeek = !1;
      this.reset();
      c.timeBetweenAds && a.on({adBreakStart:this.handleAdBreakStart, adSkipped:this.handleAdSkipped, adComplete:this.handleAdComplete, adBreakEnd:this.handleAdBreakEnd, destroyPlugin:this.destroy}, this);
    }
    return b.prototype.clearStartOnSeek = function() {
      this.ignoreStartOnSeek = !0;
    }, b.prototype.sendAdBreakIgnored = function(a, b) {
      a && this.player.trigger("adBreakIgnored", {id:a._breakId, tag:a._adQueue && 0 < a._adQueue.length ? a._adQueue[0] : a._adXML, client:"vast", offset:a._offSet, timeSinceLastAd:b, type:"adBreakIgnored"});
    }, b.prototype.rulesAllowAdPlayback = function(a) {
      var b = this.options, d = a >= b.startOn && 0 == (a - b.startOn) % b.frequency;
      return 0 === b.frequency && 1 === a || d;
    }, b.prototype.handleAdBreakStart = function() {
      this.adComplete = this.adSkipped = !1;
    }, b.prototype.handleAdComplete = function() {
      this.adComplete = !0;
    }, b.prototype.handleAdSkipped = function() {
      this.adSkipped = !0;
    }, b.prototype.handleAdBreakEnd = function() {
      !this.adSkipped && this.adComplete && (this.recentCompletedAdTime = fa());
    }, b.prototype.timeBetweenAdsAllowsAdPlayback = function(a) {
      var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : fa();
      return this.options.timeBetweenAds && (b = (b - this.recentCompletedAdTime) / 1E3, b < this.options.timeBetweenAds) ? (this.sendAdBreakIgnored(a, b), !1) : !0;
    }, b.prototype.reset = function() {
      this.ignoreStartOnSeek = !1;
      this.recentCompletedAdTime = 0;
    }, b.prototype.destroy = function() {
      this.player.off(null, null, this);
    }, Sa(b, [{key:"timeBetweenAds", get:function() {
      return this.options.timeBetweenAds;
    }}, {key:"startOnSeek", get:function() {
      return this.ignoreStartOnSeek ? null : this.options.startOnSeek;
    }}]), b;
  }(), Ga = {};
  (window.jwplayerPluginJsonp || window.jwplayer().registerPlugin)("vast", "8.1", function(b, a, c) {
    function d(a) {
      f();
      e(a);
      var b = m;
      Promise.resolve(a).then(function() {
        if (!b.isDestroyed()) {
          return b.loadAd(a, {adBlock:E});
        }
      }).then(function(a) {
        return b.isDestroyed() ? null : l(a);
      })["catch"](function(a) {
        return b.isDestroyed() ? null : w(a);
      });
    }
    function e(a) {
      var c = m.getVMAPTracker(a), d = m.getAdEventObject(a);
      F.once("destroyed", function() {
        O.clear("adBreakStart");
        c.breakEnd();
        b.trigger("adBreakEnd", d);
        m && m.clearAdIds(a);
      });
      O.tick("adBreakStart");
      c.breakStart();
      b.trigger("adBreakStart", d);
    }
    function f() {
      F || (F = b.createInstream().init()).setText(null);
    }
    function g(c, d) {
      var e, f = ca.rulesAllowAdPlayback(d) ? X.isObject(c) && c.adschedule ? M.getSchedule(c, ca) : ma : ea, g = new db(b, f, c, a, H);
      if (g.on(((e = {})[["adBidRequest"]] = function(a) {
        return b.trigger("adBidRequest", a);
      }, e[["adBidResponse"]] = function(a) {
        return b.trigger("adBidResponse", a);
      }, e[["adRequest"]] = y, e[["adLoaded"]] = v, e[["adError"]] = z, e), S), f.isVMAP()) {
        e = oa(f.getVMAP(), b, H), f.load(b, e).then(function(a) {
          g.isDestroyed() || a.forEach(function(a) {
            return b.trigger("adError", a);
          });
        })["catch"](function(a) {
          return g.isDestroyed() ? null : w(a);
        });
      }
      return g.init(T).then(function() {
        if (!g.isDestroyed()) {
          var a = g.schedule.getAdScheduleEventObject();
          a.adbreaks = a.adbreaks.map(function(a) {
            return la(a, g.schedule, g.bidsResult);
          });
          a.item = c;
          b.trigger("adSchedule", a);
        }
      }), g;
    }
    function h() {
      m && (m.schedule.reset(), m.off(null, null, S), m.destroy(), m = null);
      p();
      t();
      r();
      ca.reset();
      b.setCues([]);
      ia = 0;
      I = !1;
    }
    function l(a) {
      if (a) {
        var c = a.scheduledAd();
        return m.dequeueAdErrors(), "nonlinear" === c._type && t(), function(a) {
          0 === a.scheduledAd()._waterfallIndex && r();
          m.removeVastLoader(a);
          var c = new Promise(function(c, d) {
            var e = new Va(a, b, V, W, m, H);
            e.on("adError", d);
            e.on("adImpression", u);
            e.on("adPodError", z);
            if (!e.init(F)) {
              return e.destroy(), c();
            }
            ja = F;
            F = null;
            e.on("adComplete", c);
            N.push(e);
          }), d = m;
          return c["catch"](function(b) {
            if (!d.isDestroyed()) {
              return F = F || ja, d.adWaterfall(a, {adBlock:E}, b).then(function(a) {
                return d.isDestroyed() ? null : l(a);
              });
            }
          });
        }(a);
      }
      t();
    }
    function p() {
      N.forEach(function(a) {
        return a.destroy();
      });
      N.splice(0);
    }
    function u(a) {
      (void 0 === a.podcount || 1 === a.sequence) && (O.tick("adImpression" + a.id), a.timeLoading = O.between("adBreakStart", "adImpression" + a.id));
      la(a, m.schedule, m.bidsResult);
      b.trigger("adImpression", a);
    }
    function r() {
      N.length && N[N.length - 1].clearNonlinear();
    }
    function t() {
      if (F || ja) {
        var a = F || ja;
        F = null;
        a.destroy();
      }
      ja = null;
    }
    function v(a) {
      var c = a.id;
      O.tick("adLoaded" + c);
      a.timeLoading = O.between("adLoading" + c, "adLoaded" + c);
      b.trigger("adLoaded", a);
    }
    function y(a) {
      la(a, m.schedule, m.bidsResult);
      b.trigger("adRequest", a);
      O.tick("adLoading" + a.id);
    }
    function w(a) {
      m.dequeueAdErrors();
      z(a);
      p();
      t();
    }
    function z(a) {
      (void 0 === a.podcount || 1 === a.sequence) && (O.tick("adError" + a.id), a.timeLoading = O.between("adBreakStart", "adError" + a.id));
      n(a, {client:"vast"});
      m.vmapTracker && m.vmapTracker.error(a.code);
      la(a, m.schedule, m.bidsResult);
      50004 !== a.adErrorCode && 50901 !== a.adErrorCode || !b.getAdBlock() || (E = !0);
      U ? b.trigger("adError", a) : b.once("playlistItem", function() {
        b.trigger("adError", a);
      }, S);
    }
    function Q(a) {
      a = a.getMidRolls();
      var c = [];
      a.length && x.foreach(a, function(a, b) {
        "nonlinear" !== b._type && c.push({begin:b._offSet, text:H.cuetext});
      });
      b.setCues(c);
    }
    var x = k.utils = b.utils, X = k._ = b._, D = b.getConfig(), Y = D.key, aa = b.getEnvironment(), R = a.debug && a.trackFn ? a.trackFn : null, S = this, T = null, ba = a.bids && a.bids.settings ? a.bids.settings.mediationLayerAdServer || "jwp" : null;
    "jwp" !== ba && "jwpspotx" !== ba || !a.bids.bidders || (ba = a.bids.bidders, ba.length && (T = n({}, a.bids, {bidders:ba})));
    var H = {}, U = !1, I = !1, m = void 0, N = [], J = !1, ja = void 0, V = void 0, W = void 0, F = void 0, K = 0, ia = 0, E = !1, P = null, Z = !1, L = void 0, M = new Ya, ca = new ib(b, M.getAdRules(a)), O = new jwplayer.utils.Timer;
    this.version = "8.4.13";
    this.bidsVersion = "0.1.6";
    var ea = new Ia(ca), ma = M.getSchedule(a, ca);
    ma.isVMAP() && (ba = oa(ma.getVMAP(), b, H), ma.load(b, ba)["catch"](x.noop));
    n(this, b.Events);
    x.addClass(c, "jw-plugin-vast");
    b.on({ready:function() {
      var d = this;
      if (U = !0, V = new hb(b, c), W = new Wa(R, aa), D.localization = b.getConfig().localization, (H = M.getOptParams(a, D.localization.advertising)).debugTrackFn = R, da["catch"](function(a) {
        h();
        b.off(null, null, d);
        b.playAd = x.noop;
        a = B("Ad Error: " + a.message, null, 60002);
        a.code = void 0;
        a.id = "-1";
        a.client = "vast";
        a.tag = "";
        b.trigger("adError", a);
      }), a.preloadAds) {
        var e = b.getPlugin("related");
        e && e.on("nextUp", function(a) {
          a && "discovery" === a.mode && (L = a);
        });
      }
    }, beforePlay:function(a) {
      if (!J && !I) {
        I = !0;
        m.bids.forEach(function(a) {
          return a.timeout();
        });
        var c = (a || {}).startTime || b.getPosition();
        ia = c || ia;
        if ((a = m.schedule.getPreRoll(c)) || m.vmapPromise) {
          (null !== m.vmapPromise || a && "nonlinear" !== a._type) && f();
          var d = m;
          d.bidsPromise.then(function() {
            if (!d.isDestroyed()) {
              var a = d.schedule.getPreRoll(c);
              a && "nonlinear" !== a._type && e(a);
            }
          });
          c ? "none" === ca.startOnSeek && (m._preRollPromise = null) : ca.clearStartOnSeek();
          d.loadPreRoll({adBlock:E, startTime:c}).then(function(a) {
            return d.isDestroyed() ? null : l(a);
          })["catch"](function(a) {
            return d.isDestroyed() ? null : w(a);
          });
        }
      }
    }, cast:function(a) {
      J = !!a.active;
    }, play:function(a) {
      S.trigger("playing", a);
    }, time:function(c) {
      if (!J && 0 !== c.duration) {
        var d = m.schedule.getNextMidrollIndex(ia, c.position, c.duration);
        if (ia = c.position, null !== d) {
          c = m.schedule.getMidRollAtIndex(d);
          "nonlinear" !== c._type && (f(), e(c));
          var h = m;
          h.loadMidRollAtIndex(d, {adBlock:E}).then(function(a) {
            return h.isDestroyed() ? null : l(a);
          })["catch"](function(a) {
            return h.isDestroyed() ? null : w(a);
          });
        } else {
          if (a.preloadAds) {
            d = c.position + 5;
            var k = m.schedule.peek(c.position, d, c.duration);
            null !== k && 0 <= k ? m.loadMidRollAtIndex(k, {adBlock:E, preload:!0})["catch"](x.noop) : -1 === k ? (c = fa() + 1E3 * (c.duration - c.position), m.loadPostRoll({adBlock:E, preload:!0, startTime:c})["catch"](x.noop)) : null === P && d > c.duration && (c = b.getPlaylistItem(b.getPlaylistIndex() + 1), Z = !c, (c || L) && ((P = g(c || L, K + 1)).loadPreRoll({adBlock:E, preload:!0})["catch"](x.noop), L = null));
          }
        }
      }
    }, beforeComplete:function() {
      if (!J) {
        var a = m.schedule.getPostRoll();
        if (a) {
          "nonlinear" !== a._type && (f(), e(a));
          var b = m;
          b.loadPostRoll({adBlock:E}).then(function(a) {
            return b.isDestroyed() ? null : l(a);
          })["catch"](function(a) {
            return b.isDestroyed() ? null : w(a);
          });
        }
      }
    }, playlistItem:function(c) {
      K += 1;
      h();
      c = b.getPlaylistItem(c.index);
      if (P && c !== P.item && !1 === Z && (P.off(null, null, S), P.destroy(), P = null), m = P || g(c, K), P = null, m.schedule.isVMAP() ? m.vmapPromise.then(function() {
        m.isDestroyed() || Q(m.schedule);
      })["catch"](x.noop) : Q(m.schedule), a.preloadAds && 1 === K) {
        c = D.autostart, !1 === c || "viewable" === c && 0 === b.getViewable() ? m.loadPreRoll({adBlock:E, preload:!0})["catch"](x.noop) : b.once("autostartNotAllowed", function() {
          m.loadPreRoll({adBlock:E, preload:!0})["catch"](x.noop);
        });
      }
    }, playlistComplete:h, complete:function() {
      r();
      I = !1;
    }, destroyPlugin:h}, this);
    b.pauseAd = function(a) {
      if (a = "boolean" != typeof a || a, N.length) {
        var b = N[N.length - 1];
        a ? b.pause() : b.play();
      }
    };
    b.playAd = function(a) {
      r();
      var c = void 0, e = 0 === H.requestTimeout ? 1 / 0 : H.requestTimeout, f = 0 === H.creativeTimeout ? 1 / 0 : H.creativeTimeout;
      c = Array.isArray(a) ? a.slice(0) : [a];
      var g = {_id:ka(12), _adQueue:c, _waterfallIndex:0, _offset:0, _position:b.isBeforePlay() || 0 === b.getPosition() && "idle" === b.getState() ? "pre" : b.isBeforeComplete() || b.getPosition() === b.getDuration() ? "post" : "mid", requestTimeout:e || 5e3, creativeTimeout:f || 15e3};
      m ? d(g) : b.once("playlistItem", function() {
        return d(g);
      });
    };
    var da = Pa.call(this, x, Y);
    da["catch"](x.noop);
    this.destroy = h;
  });
}();
