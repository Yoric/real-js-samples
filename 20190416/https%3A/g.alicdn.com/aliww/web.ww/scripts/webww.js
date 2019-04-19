!function() {
    function t(i) {
        var t = i.target || i.srcElement;
        if (!(-1 !== location.href.indexOf("itemlist/list_bought_items") || -1 !== location.href.indexOf("itemlist/listBoughtItems.htm"))) return "";
        for (;t && "TBODY" !== t.nodeName; ) t = t.parentNode;
        return t.getAttribute("data-status");
    }
    function e(i) {
        Light._log("wwgw.light.openClient");
        var t = document.createElement("iframe");
        t.src = i, document.body.appendChild(t), setTimeout(function() {
            t.parentNode.removeChild(t);
        }, 500);
    }
    var o = KISSY;
    parseFloat(o.version) >= 1.4 && o.config({
        modules: {
            ajax: {
                alias: [ "io" ]
            }
        }
    }), o.use("dom,event,cookie,ajax,ua", function(o, n, a, l, r, s) {
        function c() {
            return o.unparam(location.search.replace(/^\?/, "")).id;
        }
        function d(i) {
            try {
                new Image().src = i;
            } catch (i) {}
        }
        n = n || o.DOM, a = a || o.Event, l = l || o.Cookie, r = r || o.IO || o.Ajax, s = s || o.UA;
        var g, p = !1, s = o.UA, f = window, m = document, u = window.localStorage, h = encodeURIComponent, w = decodeURIComponent, _ = o.now(), b = unescape((l.get("_nk_") || l.get("tracknick") || l.get("l") && l.get("l").split("::")[0] || "").replace(/\\u/g, "%u")), x = (c(), 
        "x"), v = f.navigator.userAgent, W = /Windows NT 6.2/g.test(v), y = s.ie || /MSIE ([^;]*)|Trident.*; rv(?:\s|:)?([0-9.]+)/.test(v), I = (v.indexOf("Edge"), 
        /tablet/i.test(v)), k = f.g_config || {}, D = 0, S = function() {
            var i, t = location.hostname;
            return t.indexOf("tmall.com") > -1 ? (i = "tmall.com", x = "otherx") : t.indexOf("daily.tmall.net") > 0 ? (i = "daily.tmall.net", 
            x = "otherx") : i = t.indexOf("taobao.net") > 0 ? "taobao.net" : "taobao.com", i;
        }(), T = !/daily/i.test(location.host) ? "taobao.com" : "daily.taobao.net", C = "cntaobao", O = function() {
            return !!l.get("_l_g_");
        }, J = 6, N = 6 === (f.g_config || 0).appId, L = location.protocol + "//amos.alicdn.com/getcid.aw?v=3&groupid=0&s=1&charset=utf-8", E = location.protocol + "//amos.alicdn.com/mulstatus?beginnum=0&charset=utf-8&uids=", B = location.protocol + "//amos.alicdn.com/getRealCid.aw?fromurl=" + (location.hostname + location.pathname) + "&t=" + l.get("t") + "&toId=", X = "//log.mmstat.com/ww?cache=" + _, F = location.protocol + "//t.alicdn.com/t/gettime";
        ONLINE_MSG = {
            SNS: "\u6211\u5728\u7ebf\uff0c\u548c\u6211\u804a\u804a\u5427~",
            DEFAULT: "\u70b9\u6b64\u53ef\u4ee5\u76f4\u63a5\u548c\u5356\u5bb6\u4ea4\u6d41\u9009\u597d\u7684\u5b9d\u8d1d\uff0c\u6216\u76f8\u4e92\u4ea4\u6d41\u7f51\u8d2d\u4f53\u9a8c\uff0c\u8fd8\u652f\u6301\u8bed\u97f3\u89c6\u9891\u5662\u3002"
        }, BROWSER_LOG = [ "ie", "firefox", "chrome", "safari", "opera" ], STATUS_MAP = [ 1, 2, 10, 8, 12, 12, 12 ], 
        Light = {
            __setIsOk: function(i) {
                g = i;
            },
            addonIsOK: function(i) {
                var t = this;
                return location.href.indexOf("topen") > -1 ? (i && i.call(null, !1), g = !1, !1) : 1 == o.unparam(l.get("x")).c ? (i && i.call(null, !0), 
                g = !0, !0) : (o.isBoolean(g) ? i && i.call(null, g) : this._checkWangWangInstalled(function(e) {
                    e || t._log("wwgw.light.notInstallClient"), g = e, i && i.call(null, g);
                }), i ? void 0 : g);
            },
            data: {},
            lightedUsers: [],
            init: function() {
                var i = this;
                i._log("wwgw.light.pv"), n.addStyleSheet('.ww-light{overflow:hidden;}.ww-block{display:block;margin-top:3px;}.ww-inline{display:inline-block;vertical-align:text-bottom;}.ww-light a{background-image: url("//img.alicdn.com/tps/i1/T15AD7FFFaXXbJnvQ_-130-60.gif");background-image: -webkit-image-set(url("//img.alicdn.com/tps/i1/T15AD7FFFaXXbJnvQ_-130-60.gif") 1x,url("//img.alicdn.com/tps/i4/T1Rsz7FPJaXXbZhKn7-520-240.gif") 4x);background-image: -moz-image-set(url("//img.alicdn.com/tps/i1/T15AD7FFFaXXbJnvQ_-130-60.gif") 1x,url("//img.alicdn.com/tps/i4/T1Rsz7FPJaXXbZhKn7-520-240.gif") 4x);background-image: -o-image-set(url("//img.alicdn.com/tps/i1/T15AD7FFFaXXbJnvQ_-130-60.gif") 1x,url("//img.alicdn.com/tps/i4/T1Rsz7FPJaXXbZhKn7-520-240.gif") 4x);background-image: -ms-image-set(url("//img.alicdn.com/tps/i1/T15AD7FFFaXXbJnvQ_-130-60.gif") 1x,url("//img.alicdn.com/tps/i4/T1Rsz7FPJaXXbZhKn7-520-240.gif") 4x);text-decoration:none!important;width:20px;height:20px;zoom:1;}.ww-large a{width:67px;}a.ww-offline{background-position:0 -20px;}a.ww-mobile{background-position:0 -40px;}.ww-small .ww-online{background-position:-80px 0;}.ww-small .ww-offline{background-position:-80px -20px;}.ww-small .ww-mobile{background-position:-80px -40px;}.ww-static .ww-online{background-position:-110px 0;}.ww-static .ww-offline{background-position:-110px -20px;}.ww-static .ww-mobile{background-position:-110px -40px;}.ww-light a span{display:none;}'), 
                i.light();
                for (var t = 0, e = BROWSER_LOG.length; t < e; ++t) if (s[BROWSER_LOG[t]]) {
                    D = BROWSER_LOG[t] + s[BROWSER_LOG[t]];
                    break;
                }
            },
            initStart: function() {
                var i = this;
                if (!N) {
                    var t = o.unparam(location.search.substring(1));
                    ("g_config" in f && "appId" in f.g_config && -1 != f.g_config.appId || "tstart" in t || "tdog" in t) && o.ready(function() {
                        var t = m.getElementsByTagName("head")[0] || m.documentElement, e = (m.createElement("link"), 
                        m.createElement("script")), o = function(i, t) {
                            var e = (t = t || location.hostname).split("."), o = e.length;
                            return o <= 2 ? t : ((i = i || 1) > o - 2 && (i = o - 2), e.slice(i).join("."));
                        }(2), n = !/daily/i.test(location.host) ? "g.alicdn.com" : "assets.daily.taobao.net/g", a = location.protocol + "//" + n + "/aliww/web.ww.im/0.2.1/scripts/adapter.js";
                        "etao.com" != o && (e.src = a, t.insertBefore(e, t.firstChild), !i.addonIsOK() && f.g_config.toolbar && f.g_config.toolbar.delay && (f.g_config.toolbar.delay = 0));
                    });
                }
            },
            light: function(i) {
                function t(i) {
                    l(I[i], y[i], k[i], function() {
                        ++O < T && t(++i);
                    });
                }
                function e(i, t, e, a) {
                    a && s._log("wwgw.light.degradeCount"), o.each(i, function(i, o) {
                        if (0 == n.query("a", i).length) {
                            var l = a ? 1 : e[o];
                            s._lightToken(i, t[o], l);
                        }
                    });
                }
                function a(i, t, o) {
                    r({
                        dataType: "jsonp",
                        url: F,
                        data: {},
                        jsonp: "callback",
                        success: function(n) {
                            if (u && u.WWLightDegradeInfo) try {
                                var a = JSON.parse(u.WWLightDegradeInfo);
                                if (n.time = +n.time, !(n.time && a.beginTime && a.endTime)) throw new Error();
                                n.time >= a.beginTime && n.time < a.endTime ? e(i, t, [], !0) : (u && (u.WWLightDegradeInfo = ""), 
                                o && o(n.time));
                            } catch (o) {
                                u && (u.WWLightDegradeInfo = ""), e(i, t, [], !0);
                            } else o && o(n.time);
                        },
                        error: function(o) {
                            u && (u.WWLightDegradeInfo = ""), e(i, t, [], !0);
                        }
                    });
                }
                function l(i, t, o, n) {
                    f.online = [], a(t, o, function(a) {
                        r({
                            dataType: "jsonp",
                            url: E + i.join(";") + "&site=" + C,
                            data: {},
                            jsonp: "callback",
                            success: function(i) {
                                var l = i.data;
                                if (i.success) {
                                    if (e(t, o, l), u) if (i.enableDegrade && i.degradeInfo) {
                                        var r = i.degradeInfo;
                                        if (a = +a, r.endTime - r.beginTime > 86400) {
                                            r.beginTime = a;
                                            var s = a + 86400;
                                            s < r.endTime && (r.endTime = s);
                                        }
                                        u.WWLightDegradeInfo = JSON.stringify(i.degradeInfo);
                                    } else u.WWLightDegradeInfo = "";
                                    n && n();
                                } else e(t, o, [], !0);
                            },
                            error: function(i) {
                                e(t, o, [], !0);
                            }
                        });
                    });
                }
                i = n.get(i) || m.body;
                var s = this, c = n.query(".J_WangWang", i), d = c.length;
                if (0 !== d) {
                    var g, p, w, _ = [], b = [];
                    for (w = 0; w < d; ++w) p = s._getParamsFromData(c[w]), _.push(p), g = p.nick, b.push(h(g));
                    C = _[0].from || C;
                    var x, v, W = 1800, y = [], I = [], k = [], D = "", S = 0, T = 0;
                    for (x = 0; x < d; ++x) ((function(i) {
                        return i.length > W;
                    })(D + b[x]) || x - 100 * T >= 100 || x === d - 1) && (v = x === d - 1 ? d : x, 
                    I[T] = b.slice(S, v), y[T] = c.slice(S, v), k[T] = _.slice(S, v), D = "", S = x, 
                    T++), D += b[x] + ";";
                    t(0);
                    var O = 0;
                }
            },
            _lightToken: function(i, s, d) {
                var g = this, p = n.create('<a href="javascript: void(0);" target="_blank"></a>'), m = s.from, u = s.encode ? w(s.nick) : s.nick, _ = m + u, v = s.item, y = s.items, I = s.portal, D = s.extra, S = _;
                C = m, v && (S += "-{" + v + "}"), g.data[S] = {
                    key: S,
                    userName: u,
                    userId: _,
                    fromSite: m,
                    status: STATUS_MAP[d],
                    itemId: v,
                    itemsId: y,
                    portalId: I
                }, i.className = "ww-light ww-" + s.icon, p.className = "ww-" + s.display, 1 === d ? (n.addClass(p, "ww-online"), 
                p.title = ONLINE_MSG.DEFAULT, k.appId && 4 == k.appId && (p.title = ONLINE_MSG.SNS), 
                p.innerHTML = "<span>\u65fa\u65fa\u5728\u7ebf</span>") : 4 === d || 5 === d ? (n.addClass(p, "ww-mobile"), 
                p.innerHTML = "<span>\u624b\u673a\u5728\u7ebf</span>") : (n.addClass(p, "ww-offline"), 
                p.innerHTML = "<span>\u65fa\u65fa\u79bb\u7ebf</span>");
                var T = "";
                if ("object" == typeof D) for (var O in D) T += "&" + O + "=" + D[O];
                p.href = L + "&uid=" + encodeURIComponent(u) + "&site=" + m + "&fromid=" + m + b + T, 
                a.on(p, "click", function(i) {
                    g._log("wwgw.1.37"), g._log("wwgw.light.click");
                    var n = o.unparam(l.get(x)), a = g.data[S], s = unescape((l.get("_nk_") || l.get("tracknick") || l.get("l") && l.get("l").split("::")[0] || "").replace(/\\u/g, "%u"));
                    if ((g.addonIsOK() || n && 1 == n.e) && i.preventDefault(), g.addonIsOK() || (i.preventDefault(), 
                    !g._isOtherHost())) {
                        var m = "";
                        if (!a.dispatched && d < 4 && -1 == a.userId.indexOf(":")) {
                            try {
                                m = 0 === location.href.indexOf("//trade.taobao.com/") || -1 !== location.href.indexOf("//list.taobao.com/") || 0 === location.href.indexOf("//list.tmall.com/search_product.htm") || 0 === location.href.indexOf("//s.taobao.com/") ? "" : "&clientX=" + i.clientX + "&clientY=" + i.clientY, 
                                0 !== location.href.indexOf("//detail.taobao.com/") && 0 !== location.href.indexOf("//item.taobao.com/") || (m += "&itemId=" + v || c());
                                var u = t(i);
                                u && (m += "&orderStatus=" + u);
                            } catch (i) {}
                            r.getScript(B + h(a.userId) + "&charset=utf-8" + m + "&fromId=" + C + h(s), function() {
                                var i = w(f.realcid);
                                i && i !== a.userId && (a.userName = i.substring(8), a.userId = i), a.dispatched = !0, 
                                g._openChatDialog(a, p);
                            }, "utf-8");
                        } else g._openChatDialog(a, p);
                    } else W ? e("aliim:sendmsg?" + g._paramUserInfo(a, null, p)) : (e("aliim:sendmsg?" + g._paramUserInfo(a, null, p)), 
                    alert("\u5982\u679c\u60a8\u8fd8\u672a\u5b89\u88c5\u963f\u91cc\u65fa\u65fa,\u8bf7\u4e0b\u8f7d\u963f\u91cc\u65fa\u65fa!"), 
                    window.open("//www.taobao.com/wangwang"));
                }), i.appendChild(p);
            },
            _directToTBLogin: function(i) {
                var t = location, e = t.protocol + "//" + t.host + t.pathname, n = t.search, a = t.hash, l = t.href, r = "https://login." + T + "/member/login.jhtml?f=top";
                "wwlight" in (n = n ? o.unparam(n.substring(1)) : {}) && delete n.wwlight, i && (n.wwlight = i), 
                n = o.param(n), l = h(l = e + "?" + n + a), t.href = r + "&redirectURL=" + l;
            },
            _openTBLoginPopup: function(i) {
                function t(i) {
                    n.css(i, "left", parseInt(n.viewportWidth() / 2) - parseInt(f.offsetWidth / 2) + "px"), 
                    n.css(i, "top", parseInt(n.viewportHeight() / 2) - parseInt(f.offsetHeight / 2) + (6 === o.UA.ie ? n.scrollTop() : 0) + "px");
                }
                var e, l = (p = location).protocol + "//" + p.host + p.pathname, r = p.search, s = p.hash, c = p.href, d = this, g = location.hostname.indexOf("taobao.com") > -1;
                "wwlight" in (r = r ? o.unparam(r.substring(1)) : {}) && delete r.wwlight, i && (r.wwlight = i, 
                d.isSearch() ? (e = r.q, delete r.q, r.wwlight = i) : r.wwlight = i), r = o.param(r), 
                this.isSearch() && e && (r = "q=" + e + "&" + r), c = l + "?" + r + s;
                var p = location;
                n.addStyleSheet(".tstart-login{width:410px;height:300px;bottom:100px;left:200px;opacity:1;position:fixed;_position:absolute;z-index:100000000;background-color:#fff;padding:0;overflow:hidden;-moz-border-radius-bottomleft:5px;-moz-border-radius-bottomright:5px;-moz-border-radius-topleft:5px;-moz-border-radius-topright:5px;border:7px solid #BBB;}.tstart-login .hd{height:22px;line-height:22px;padding-left:8px;border-bottom:1px solid #D1D1D1;font-weight:bold;background-color:#fff;}.tstart-login .ft{background-color:#F5F5F5;}.tstart-login .ft .btn-close{color:#C9C9C9;font-family:Tahoma,sans;font-size:12px;font-weight:bold;position:absolute;right:8px;text-decoration:none;top:3px;}");
                var f = n.get(".tstart-login");
                if (f) n.css(f, "display", "block"), t(f); else {
                    if (f = n.create('<div id="tstartLogin" class="tstart-login"><div class="hd"><h3></h3></div><div class="bd" style="padding: 0px; overflow: hidden;"><iframe width="410" height="270" frameborder="0" scrolling="no" id="frameContent" name="frameContent" ></iframe></div><div class="ft"><a class="btn-close" title="\u5173\u95ed\u6b64\u7a97\u53e3" href="javascript:void(0)">x</a></div></div>'), 
                    document.body.appendChild(f), t(f), a.on(n.get(".btn-close", f), "click", function() {
                        n.css(f, "display", "none");
                    }), 6 === o.UA.ie ? a.on(window, "scroll resize", function() {
                        t(f);
                    }) : a.on(window, "scroll resize", function() {
                        n.css(f, "left", parseInt(n.viewportWidth() / 2) - parseInt(f.offsetWidth / 2) + "px");
                    }), g) m = "//www.taobao.com/go/act/share/loginsuccess.php"; else var m = "//www.daily.taobao.net/go/act/share/loginsuccess.php";
                    var u = "https://login." + T + "/member/login.jhtml?style=mini&full_redirect=false&redirect_url=" + m, h = f.getElementsByTagName("iframe")[0];
                    h.src = u, a.on(h, "load", function() {
                        O() && (location.href = c);
                    });
                }
            },
            _isOtherHost: function() {
                var t = location.hostname, e = [ "tmall.net", "tmall.com", "taobao.com", "daily.taobao.net" ], o = e.length;
                for (i = 0; i < o; i++) if (t.indexOf(e[i]) > -1) return !1;
                return !0;
            },
            isSearch: function() {
                var i, t = [ "search.taobao.com", "sandbox.search.taobao.com", "search8.taobao.com", "search8.daily.taobao.net", "s.taobao.com", "list.mall.daily.taobao.net", "list.mall.taobao.com", "s8.taobao.com", "list.tmall.com", "list.daily.tmall.net" ], e = t.length, o = location;
                for (i = 0; i < e; i++) if (o.host.indexOf(t[i] > -1)) return !0;
            },
            _paramUserInfo: function(i, t, e) {
                var o = i.userId || i.siteid + i.touid, n = "";
                return t && (o = h(o)), 6 != J ? "uid=" + o.split("cntaobao")[1] + "&tositeid=" + i.fromSite + "&status=" + i.status + "&suid=" + i.portalId : (e && e.parentNode && (n = e.parentNode.getAttribute("data-items") || ""), 
                "&touid=" + o + "&siteid=" + (i.fromSite || i.siteid) + "&status=" + i.status + "&portalId=" + (i.portalId || "") + "&gid=" + (i.itemId || "") + "&itemsId=" + n);
            },
            _openChatDialog: function(i, t) {
                var r = this, c = 1;
                if (r.userInfo = i, r.link = t, r.addonIsOK()) {
                    if (y) try {
                        new ActiveXObject("AliIMX.WangWangX").ExecCmd("Aliim:sendmsg?" + r._paramUserInfo(i, !0, t));
                    } catch (o) {
                        e("aliim:sendmsg?" + r._paramUserInfo(i, null, t));
                    } else r._openChatDialogInUnIE(i, t);
                    c = 0;
                } else if (p) if (s.firefox) {
                    var g = n.get("#J_WebWangWangPluginNotice");
                    if (g) n.css(g, "display", "block"), n.css("#J_WebWangWangPluginNoticeMask", "display", "block"); else {
                        document.body.appendChild(n.create('<div id="J_WebWangWangPluginNoticeMask" style="background-color:#000;opacity:.6;position:fixed;width:100%;height:100%;left:0;top:0;z-index:100000004"></div><div id="J_WebWangWangPluginNotice" class="webww-plugin-notice" style="background-color:#fff;position:fixed;width:400px;height:120px;z-index:100000005;text-align:center;margin-left:-200px;left:50%;top:50%;margin-top:-60px"><div class="webww-plugin-notice-content" style="padding:15px;line-height:80px">\u4eb2\uff0c\u60a8\u5f53\u524d\u6d4f\u89c8\u5668\u672a\u5f00\u542f\u65fa\u65fa\u63d2\u4ef6\uff0c<a href="//bangpai.taobao.com/group/thread/15625975-291119934.htm?spm=0.0.0.0.PBQheF" target="_blank">\u70b9\u6b64\u67e5\u770b\u5f00\u542f\u65fa\u65fa\u63d2\u4ef6\u6559\u7a0b</a></div><div class="webww-plugin-notice-footer" style="padding:10px;height:20px;background-color:#eaeaea;cursor:pointer">\u53d6\u6d88<div></div>')), 
                        g = n.get("#J_WebWangWangPluginNotice"), a.on(g, "click", function(i) {
                            n.hasClass(i.target, "webww-plugin-notice-footer") && (n.css(g, "display", "none"), 
                            n.css("#J_WebWangWangPluginNoticeMask", "display", "none"));
                        });
                    }
                } else try {
                    r._openChatDialogInUnIE(i, t);
                } catch (i) {} else {
                    if (!W) return void r._openWebWW();
                    if (I) r._openDialogBySelectionDialog(i, t, 2); else {
                        var f = o.unparam(l.get(x)).c;
                        f > 1 ? r._openDialogBySelectionDialog(i, t, f) : r._createSelectionDialog();
                    }
                }
                d(X + "&uid=" + b + "&tid=" + i.userId + "&gid=" + i.itemId + "&ver=" + c + "&browse=" + D + "&playform=" + navigator.platform);
            },
            _openWebWW: function(i) {
                var t = this, n = t.userInfo, a = o.unparam(l.get(x));
                O() ? a && 1 == a.e ? (t._isOtherHost() ? e("aliim:sendmsg?" + t._paramUserInfo(n, null, i)) : window.TDog && TDog.EventCenter && (t._log("wwgw.light.webChat"), 
                TDog.EventCenter.fire(TDog.EVENTS.CLICK_LIGHT_ICON, {
                    userInfo: n
                })), d(X + "&uid=" + b + "&tid=" + n.userId + "&gid=" + n.itemId + "&ver=2&browse=" + D + "&playform=" + navigator.platform)) : window.TDog && TDog.EventCenter ? (t._log("wwgw.light.webChat"), 
                TDog.EventCenter.fire(TDog.EVENTS.CLICK_LIGHT_ICON, {
                    userInfo: n
                })) : t._directToTBLogin(n.key) : t._directToTBLogin(n.key);
            },
            _openChatDialogInUnIE: function(i, t) {
                var o = this;
                if (o.plugin) {
                    var n = "function" == typeof o.plugin.NPWWVersion;
                    if (s.webkit && n && o.numberify(o.plugin.NPWWVersion()) < 1.005) e("aliim:sendmsg?" + o._paramUserInfo(i, null, t)); else try {
                        var a = "aliim:sendmsg?" + o._paramUserInfo(i, !0, t);
                        o.plugin.SendCommand(a, 1);
                    } catch (n) {
                        e("aliim:sendmsg?" + o._paramUserInfo(i, null, t));
                    }
                } else e("aliim:sendmsg?" + o._paramUserInfo(i, null, t));
            },
            _createSelectionDialog: function() {
                var i = this, t = o.unparam(l.get(x));
                if (i.selectionDialog) (e = i.selectionDialog).style.display = "block"; else {
                    n.addStyleSheet("#J_Windows8_Selection_Dialog{display:block;width:440px;height:270px;position:fixed;top: 50%;left:50%;margin:-134px 0 0 -220px;padding:0;z-index:100000001;}#J_Windows8_Selection_Dialog_Bg{width:100%;height:100%;background:#000;opacity:0.2;filter:alpha(opacity=20);position:fixed;left:0;top:0;z-index:100000000;}#J_Windows8_Selection_Dialog .win8-dialog-bg{display:block;width: 440px;height:270px;background:#000;opacity:0.2;filter:alpha(opacity=20);position:absolute;top:0;left:0;padding:0;margin:0;}#J_Windows8_Selection_Dialog .win8-dialog-con{display:block;margin:5px;width:390px;height:220px;background:#fff;position:absolute;top:0;left:0;font:14px/1.5 Microsoft YaHei;padding:20px;}#J_Windows8_Selection_Dialog h4{font-size:18px;font-weight:bold;padding:0;margin:0;color:#000;}#J_Windows8_Selection_Dialog ul{padding:15px 0 30px 20px;margin:10px 0 0 0;}#J_Windows8_Selection_Dialog li{padding:0 0 0 40px;margin:0;list-style:none;background:url('//gtd.alicdn.com/tps/i2/T1pEcjXdRhXXcCnGHx-30-300.png') no-repeat 0 2px;height:30px;line-height:30px;font-size: 16px;color: #000;cursor:pointer;}#J_Windows8_Selection_Dialog li.win8-slt{background-position: 0 -45px;}#J_Windows8_Selection_Dialog li.win8-tip{background:none;cursor:default;font-size:12px;color:#666;line-height:16px;height:16px;margin-bottom:5px;}#J_Windows8_Selection_Dialog .win8-btn{font-size:14px;padding:30px 0 0 0;border-top:1px solid #ddd;}#J_Windows8_Selection_Dialog .win8-cb{display:block;float:left;margin:5px 50px 0 0;padding:0;}#J_Windows8_Selection_Dialog .win8-cb input{vertical-align:-1px;margin-right:5px;}#J_Windows8_Selection_Dialog .win8-btn a{display: block;float:left;width:96px;height:28px;background:#fff;border:2px solid #ddd;color:#737373;text-decoration:none;text-align:center;line-height:28px;font-size:16px;margin-right:15px;overflow:hidden;}#J_Windows8_Selection_Dialog .win8-btn a:hover{background:#00ade8;color:#fff;text-decoration:none;}#J_Windows8_Btn_Close{display:block;width:40px;height:40px;background:url('//gtd.alicdn.com/tps/i2/T1pEcjXdRhXXcCnGHx-30-300.png') no-repeat 8px -113px;position:absolute;top:0;right:0;text-indent:-9999px;}#J_Windows8_Btn_Close:hover{background-position:8px -188px}");
                    var e = n.create('<div><div id="J_Windows8_Selection_Dialog_Bg" class="win8-bg"></div><div id="J_Windows8_Selection_Dialog"><div class="win8-dialog-bg"></div><div class="win8-dialog-con"><h4>\u8bf7\u9009\u62e9\u9700\u8981\u6253\u5f00\u7684\u65fa\u65fa\uff1a</h4><ul><li class="win8-slt J_Windows8_selection_item" data-value="2">\u963f\u91cc\u65fa\u65fa for Windows 8</li><li class="win8-tip">\u5982\u679c\u672a\u5b89\u88c5\uff0c\u8bf7\u5148\u5728\u5e94\u7528\u5546\u5e97\u4e0b\u8f7d\u5b89\u88c5</li><li class="J_Windows8_selection_item" data-value="3">\u963f\u91cc\u65fa\u65fa\u7f51\u9875\u7248</li></ul><div class="win8-btn"><label class="win8-cb"><input type="checkbox" id="J_Window8_remember" />\u8bb0\u4f4f\u6211\u7684\u9009\u62e9</label><a href="javascript:;" title="\u786e\u5b9a" id="J_Windows8_Btn_Yes">\u786e\u5b9a</a><a href="javascript:;" title="\u53d6\u6d88" id="J_Windows8_Btn_No">\u53d6\u6d88</a></div><a href="javascript:;" title="\u5173\u95ed" id="J_Windows8_Btn_Close">\u5173\u95ed</a></div></div></div>');
                    i.selectionDialog = e, m.body.appendChild(e), a.on(e, "click", function(a) {
                        var r = a.target;
                        if ("J_Windows8_Btn_Yes" === r.id) {
                            var s = n.attr(n.get(".win8-slt"), "data-value");
                            n.get("#J_Window8_remember").checked ? (t.c = parseInt(s), l.set(x, o.param(t), 365, S, "/"), 
                            i._destorySelectionDialog()) : e.style.display = "none", i._openDialogBySelectionDialog(i.userInfo, i.link, s);
                        } else "J_Windows8_Btn_No" === r.id || "J_Windows8_Btn_Close" === r.id ? e.style.display = "none" : n.hasClass(r, "J_Windows8_selection_item") && !n.hasClass("win8-slt") && (n.addClass(r, "win8-slt"), 
                        n.removeClass(n.siblings(r), "win8-slt"));
                    });
                }
            },
            _destorySelectionDialog: function() {
                var i = this;
                n.remove(i.selectionDialog), a.remove(i.selectionDialog, "click"), i.selectionDialog = null;
            },
            _openDialogBySelectionDialog: function(i, t, o) {
                var n = this;
                2 == o ? e("aliim:sendmsg?" + n._paramUserInfo(i, null, t)) : 3 == o && n._openWebWW(t);
            },
            _checkWangWangInstalled: function(i) {
                var t = this, e = !1, a = (o.unparam(l.get(x)), navigator.platform.indexOf("Mac") > -1);
                if (this._log("wwgw.1.38"), location.href.indexOf("topen") > -1) return e = !1, 
                void (i && i.call(null, e));
                if (a) return e = !0, void (i && i.call(null, e));
                if (!e && y) return e = t._checkWangWangVersion(), void (i && i.call(null, e));
                if (navigator.mimeTypes["application/ww-plugin"]) {
                    var r = m.createElement("embed");
                    return r.setAttribute("type", "application/ww-plugin"), n.css(r, "visibility", "hidden"), 
                    n.css(r, "width", 0), n.css(r, "height", 0), m.body.appendChild(r), "function" == typeof r.NPWWVersion ? t.numberify(r.NPWWVersion()) >= 1.003 && (e = !0) : p = !0, 
                    t.plugin = r, void (i && i.call(null, e));
                }
                return this.localServer(function(e) {
                    e ? i && i.call(null, e) : t.localServer(function(t) {
                        i && i.call(null, t);
                    }, "https:" == location.protocol ? "4813" : "4812");
                }), e && this._log("wwgw.1.39"), e;
            },
            localServer: function(i, t) {
                var e = this;
                if (e._log("wwgw.light.localServer"), this._log("wwgw.1.40"), i) var o = setTimeout(function() {
                    i.call(null, !1);
                }, 1500);
                t = t || ("https:" == location.protocol ? "4013" : "4012"), r({
                    dataType: "jsonp",
                    url: location.protocol + "//localhost.wwbizsrv.alibaba.com:" + t,
                    success: function(t) {
                        e._log("wwgw.1.41"), o && clearTimeout(o), i && i.call(null, !0);
                    }
                });
            },
            numberify: function(i) {
                var t = 0;
                return parseFloat(i.replace(/\./g, function() {
                    return 0 == t++ ? "." : "";
                }));
            },
            _checkWangWangVersion: function() {
                var i = !0;
                o.unparam(l.get(x));
                try {
                    new ActiveXObject("aliimx.wangwangx");
                } catch (t) {
                    try {
                        new ActiveXObject("WangWangX.WangWangObj"), J = 5;
                    } catch (t) {
                        i = !1;
                    }
                } finally {
                    null;
                }
                return i;
            },
            _getParamsFromData: function(i) {
                var t = n.attr(i, "data-encode") || !1, e = n.attr(i, "data-nick") || "";
                t && (e = w(e));
                var o, a = {
                    nick: e,
                    item: n.attr(i, "data-item") || (f.g_config || {}).itemId || "",
                    items: n.attr(i, "data-items") || "",
                    display: n.attr(i, "data-display") || "inline",
                    icon: n.attr(i, "data-icon") || "large",
                    from: n.attr(i, "data-from") || "cntaobao",
                    portal: n.attr(i, "data-portal") || "",
                    fromId: n.attr(i, "data-portal") || "",
                    encode: h
                }, l = n.attr(i, "data-extra");
                try {
                    o = JSON.parse(decodeURIComponent(l));
                } catch (i) {}
                return o && (a.extra = o), a;
            },
            _log: function(i, t) {
                d("//gm.mmstat.com/" + i + "?cache=" + Math.floor(-8888888 * Math.random() + 9999999) + "&wwnick=" + C + b);
            }
        }, window.Light = Light, o.ready(function() {
            Light.addonIsOK(function() {
                Light.initStart();
            }), Light.init();
        });
    });
}();