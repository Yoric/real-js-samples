udvDefine("product/guess2/0.1.6/collect", ["sina.permanent", "sina.util"], function(a) {
	function b() {
		for (var a = document.getElementsByTagName("meta"), b = !1, c = 0; c < a.length; c++)
			if (a[c].getAttribute("name") && a[c].getAttribute("name").toLowerCase().indexOf("topic") >= 0) {
				a = a[c].getAttribute("content") || "", a && (b = !0);
				break
			}
		return b ? encodeURI(a) : ""
	}

	function c() {
		if (e.isReady) {
			var a = function(a) {
				return a = parseInt(a || "0"), 0 >= a ? !1 : !0
			}, b = function() {
					return Math.abs((new Date).getTime()) + "_" + Math.round(1e8 * Math.random())
				}, c = "SGUID",
				d = e.get(h) || {}, f = "";
			return f = d.anonymousUid ? d.anonymousUid : g.get(c), a(f) || (f = b()), d.anonymousUid = f, e.set(h, d), g.set(c, f, {
				expires: 1825,
				path: "/",
				domain: "sina.com.cn"
			}), f
		}
	}

	function d() {
		var a = "";
		window.sinaSSOController ? (a = window.sinaSSOController.getSinaCookie(), a && (a = a.uid)) : window.sinaSSOManager && (a = window.sinaSSOManager.getSinaCookie(), a && (a = a.uid));
		var d = "",
			e = b(),
			f = encodeURIComponent(document.referrer),
			g = "open",
			h = i + "?keywords=" + d + "&topic=" + e + "&refer=" + f + "&action=" + g + "&uid=" + c() + (a ? "," + a : "") + "&rdm=" + (new Date).getTime(),
			j = document.createElement("img");
		j.src = h
	}
	var e = a("sina.permanent");
	e = e.getInstance();
	var f = a("sina.util"),
		g = f.cookie,
		h = "guess2store",
		i = "http://log.interest.mix.sina.com.cn/a.js",
		j = function() {
			var a = /slide\..*?.sina.com.cn/;
			return a.test(location.host)
		}();
	j && (window.sinaSSOController || window.sinaSSOManager ? e.ready(d) : a.async("http://i.sso.sina.com.cn/js/ssologin.js", function() {
		e.ready(d)
	})),
	function() {
		var a = {
			byId: function(a) {
				return document.getElementById(a)
			},
			bindEvent: function(a, b, c) {
				return a.attachEvent ? a.attachEvent("on" + b, c) : a.addEventListener(b, c, !1), a
			},
			extend: function(a, b, c) {
				a = a || {};
				var d, e = typeof b,
					f = 1;
				for (("undefined" === e || "boolean" === e) && (c = "boolean" === e ? b : !1, b = a, a = this), "object" != typeof b && "[object Function]" !== Object.prototype.toString.call(b) && (b = {}); 2 >= f;) {
					if (d = 1 === f ? a : b, null !== d)
						for (var g in d) {
							var h = a[g],
								i = d[g];
							a !== i && (c && i && "object" == typeof i && !i.nodeType ? a[g] = this.extend(h || (null !== i.length ? [] : {}), i, c) : void 0 !== i && (a[g] = i))
						}
					f++
				}
				return a
			},
			cookie: function() {
				var a = {};
				return a.getCookie = function(a) {
					a = a.replace(/([\.\[\]\$])/g, "\\$1");
					var b = new RegExp(a + "=([^;]*)?;", "i"),
						c = document.cookie + ";",
						d = c.match(b);
					return d ? unescape(d[1]) || "" : ""
				}, a.setCookie = function(a, b, c, d, e, f) {
					var g = [];
					if (g.push(a + "=" + escape(b)), c) {
						var h = new Date,
							i = h.getTime() + 36e5 * c;
						h.setTime(i), g.push("expires=" + h.toGMTString())
					}
					d && g.push("path=" + d), e && g.push("domain=" + e), f && g.push(f), document.cookie = g.join(";")
				}, a.deleteCookie = function(a) {
					document.cookie = a + "=;expires=Fri, 31 Dec 1999 23:59:59 GMT;"
				}, a
			}(),
			imgLoad: function(a, b) {
				var c = null,
					d = new Image(1, 1);
				d.onload = function() {
					d.onreadystatechange = c, b()
				}, d.onreadystatechange = function() {
					"complete" == d.readyState && (d.onload = c, b())
				}, d.onerror = function() {
					d.onload = c, d.onreadystatechange = c
				}, d.src = a
			},
			jsLoad: function(a, b) {
				var c = document.getElementsByTagName("head")[0],
					d = document.createElement("script"),
					e = !1;
				d.onload = d.onreadystatechange = function() {
					e || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (e = !0, d.onload = d.onreadystatechange = null, "function" == typeof b && b())
				}, d.src = a;
				try {
					c.appendChild(d)
				} catch (f) {}
			},
			domReady: function() {
				var a = [],
					b = 0,
					c = 0,
					b = 0,
					d = function() {
						return "complete" === document.readyState ? 1 : b
					}, e = function() {
						if (!b) {
							if (b = 1, a)
								for (; a.length;) a.shift()();
							a = null
						}
					}, f = function() {
						c || (c = 1, "complete" === document.readyState ? e() : document.addEventListener ? (document.addEventListener("DOMContentLoaded", function() {
							document.removeEventListener("DOMContentLoaded", arguments.callee, !1), e()
						}, !1), window.addEventListener("load", function() {
							window.removeEventListener("load", arguments.callee, !1), e()
						}, !1)) : (document.attachEvent("onreadystatechange", function() {
							"complete" == document.readyState && (document.detachEvent("onreadystatechange", arguments.callee), e())
						}), function() {
							if (!b) {
								var a = new Image;
								try {
									a.doScroll(), a = null
								} catch (c) {
									return setTimeout(arguments.callee, 64), void 0
								}
								e()
							}
						}()))
					};
				return function(b) {
					return f(), d() ? (b.call(), void 0) : (a.push(b), void 0)
				}
			}(),
			log: function() {
				var a = -1 != location.href.indexOf("log=1");
				if (!a) return console = {}, console.time = console.timeEnd = function() {}, void 0;
				if ("undefined" != typeof console) {
					var b = Array.prototype.slice,
						c = b.call(arguments, 0);
					c.unshift("*RECOMMENDER >>>>>>");
					try {
						console.log.apply(console, c)
					} catch (d) {
						console.log(c)
					}
				}
			}
		}, b = function(a) {
				var b = function() {
					this.init.apply(this, arguments)
				};
				if (a) {
					var c = function() {};
					c.prototype = a.prototype, b.prototype = new c
				}
				return b.prototype.init = function() {}, b.fn = b.prototype, b.fn.parent = b, b._super = b.__proto__, b.extend = function(a) {
					var c = a.extended;
					for (var d in a) b[d] = a[d];
					c && c(b)
				}, b.include = function(a) {
					var c = a.included;
					for (var d in a) b.fn[d] = a[d];
					c && c(b)
				}, b
			}, c = new b;
		c.include({
			init: function(a) {
				var b = this;
				b.setStat(), b.setOpt(a), b.bindEvent(), b.upLoad("open")
			},
			setOpt: function(b) {
				var c = this;
				c.opt = c.opt || {
					api: "http://slog.sina.com.cn/b.gif",
					api2: "http://interest.mix.sina.com.cn/api/roll/up_user_data",
					type: "cate_interest"
				};
				var d = c.opt;
				b && (d = a.extend(d, b, !0))
			},
			setStat: function() {
				var a = this;
				a.stat = a.stat || {
					hasShared: !1
				}
			},
			getGuid: function() {
				var b = function(a) {
					return a = parseInt(a || "0"), 0 >= a ? !1 : !0
				}, c = function() {
						return Math.abs((new Date).getTime()) + "_" + Math.round(1e8 * Math.random())
					}, d = a.cookie,
					e = d.getCookie("SGUID");
				return b(e) || (e = c(), d.setCookie("SGUID", e, 43800, "/", "sina.com.cn"), a.log("GUID不存在或非法，重新生成：" + e)), a.log("GUID为：" + e), e
			},
			getUid: function(b) {
				var c = this,
					d = "http://i.sso.sina.com.cn/js/ssologin.js",
					e = "",
					f = "";
				if (window.sinaSSOController) f = sinaSSOController.getSinaCookie();
				else {
					if (!window.sinaSSOManager) return a.jsLoad(d, function() {
						c.getUid(b)
					}), a.log("加载登录脚本：" + d), void 0;
					f = sinaSSOManager.getSinaCookie()
				}
				f && (e = f.uid), a.log("UID为：" + e), b(e)
			},
			bindEvent: function() {
				var b = this,
					c = a.byId("sinashareto"),
					d = "undefined" != typeof window.ontouchstart,
					e = d ? "touchstart" : "mousedown";
				c && a.bindEvent(c, e, function() {
					b.stat.hasShared || (b.upLoad("share"), b.stat.hasShared = !0)
				})
			},
			upLoad: function(b) {
				var c = this,
					d = function() {
						var a = "";
						return "blog.sina.com.cn" == location.hostname && window._cateIdForThisPage_ && (a = "&cateid=" + _cateIdForThisPage_), a
					}();
				c.getUid(function(e) {
					var f = e + "," + c.getGuid();
					b = b || "open";
					var g = "?uid=" + f + d + "&action=" + b + "&type=" + c.opt.type + "&refer=" + encodeURIComponent(document.referrer) + "&rnd=" + (new Date).getTime(),
						h = c.opt.api + g,
						i = c.opt.api2 + g;
					a.imgLoad(h, function() {}), a.imgLoad(i, function() {}), a.log("收集" + b + "数据：" + h + "\n" + i)
				})
			}
		}), a.domReady(function() {
			new c
		})
	}(window)
});