/*
 * nclick v1.0.8
 * Last Updated: 2009.04.16
 * Lee Daebeom, LogModeling Team, NHN corp. 
 */
if (typeof nclk == "undefined") {
	nclk = {}
}
if (typeof nclkMaxDepth == "undefined") {
	var nclkMaxDepth = 8
}
if (typeof ccsrv == "undefined") {
	var ccsrv = "cc.naver.com"
}
if (typeof nclkModule == "undefined") {
	var nclkModule = "cc"
}
if (typeof nsc == "undefined") {
	var nsc = "decide.me"
}
if (typeof g_pid == "undefined") {
	var g_pid = ""
}
if (typeof g_sid == "undefined") {
	var g_sid = ""
}
var nclkImg = [];
if (typeof nclkMaxEvtTarget == "undefined") {
	var nclkMaxEvtTarget = 4
}
if (typeof nclk_evt == "undefined") {
	var nclk_evt = 0
}
nclk.nclktagVersion = "1.0.8";
nclk.addEvent = function(e, b, a) {
	if (e.addEventListener) {
		e.addEventListener(b, a, false)
	} else {
		if (e.attachEvent) {
			e["e" + b + a] = a;
			e[b + a] = function() {
				e["e" + b + a](window.event)
			};
			e.attachEvent("on" + b, e[b + a])
		}
	}
};
nclk.generateCC = function(l) {
	var r = l || window.event;
	var f = r.target || r.srcElement;
	var o = f.nodeName;
	var m, p;
	var q;
	var b = "", t = "", k = "", g = "";
	var a = 0, n = 0;
	var h, s;
	var i;
	var j = -1;
	if (r.button == 2) {
		return
	}
	if (f.nodeType == 3) {
		f = f.parentNode
	}
	if (f.parentNode && f.parentNode.nodeName == "A") {
		f = f.parentNode
	}
	p = f;
	while (j <= nclkMaxEvtTarget) {
		if (j >= nclkMaxEvtTarget) {
			if (nclk_evt == 2 || nclk_evt == 4) {
				h = 0;
				m = p;
				break
			} else {
				return
			}
		} else {
			i = nclk.getTag(f);
			h = i[0];
			s = i[1];
			if (h == 0) {
				if (f.parentNode) {
					f = f.parentNode;
					j++
				} else {
					h = 0;
					m = p;
					break
				}
			} else {
				m = f;
				break
			}
		}
	}
	switch (h) {
	case 0:
	case 1:
	case 2:
	case 3:
		if (nclk_evt == 2 || nclk_evt == 4) {
			b = "ncs.blank"
		} else {
			return
		}
		break;
	case 4:
		b = nclk.findArea(m, 1);
		if (b == undefined) {
			b = ""
		}
		q = nclk.parseNCStr(h, s);
		b = b + "." + q[0];
		break;
	case 5:
		b = nclk.findArea(m, 2);
		if (b == undefined) {
			b = ""
		}
		q = nclk.parseNCStr(h, s);
		break;
	case 6:
		q = nclk.parseNCStr(h, s);
		b = q[0];
		break;
	default:
		return
	}
	if (h == 4 || h == 5 || h == 6) {
		k = q[1];
		t = q[2];
		g = q[3];
		n = q[4]
	}
	if (n == "2") {
		return
	} else {
		a = n
	}
	if (g) {
		clickcr(m, b, t, k, r, a, g)
	} else {
		clickcr(m, b, t, k, r, a)
	}
};
nclk.searchNextObj = function(a) {
	var b = a.nextSibling;
	if (b && b.nodeType == 3) {
		b = b.nextSibling
	}
	return b
};
nclk.getTag = function(g) {
	var b = 0;
	if (!g) {
		return 0
	}
	var i;
	var f;
	var h;
	var a = "";
	if (nclk_evt == 1 || nclk_evt == 2) {
		var e = nclk.searchNextObj(g);
		if (e) {
			if (e != null && e.nodeType == 8 && e.data.indexOf("=") > 0) {
				a = nclk.trim(e.data)
			} else {
				return [ 0, "" ]
			}
		} else {
			return [ 0, "" ]
		}
	} else {
		if (nclk_evt == 3 || nclk_evt == 4) {
			if (g.className) {
				a = nclk.getClassTag(g.className);
				if (!a) {
					return [ 0, "" ]
				}
			} else {
				return [ 0, "" ]
			}
		}
	}
	a = nclk.trim(a);
	i = a.split("=");
	f = i[0].charAt(0);
	h = i[0].substring(1);
	if (f != "N") {
		return [ 0, "" ]
	}
	if (h == "E") {
		b = 1
	} else {
		if (h == "I") {
			b = 2
		} else {
			if (h == "EI" || h == "IE") {
				b = 3
			} else {
				if (h == "IP" || h == "PI") {
					b = 4
				} else {
					if (h == "P") {
						b = 5
					} else {
						if (i[0].length == 1) {
							b = 6
						} else {
							b = 0
						}
					}
				}
			}
		}
	}
	return [ b, a ]
};
nclk.findArea = function(b, h) {
	var j = 0;
	var g;
	var k;
	var m, f;
	var e = "";
	var a = 0;
	var l;
	var i;
	if (!b) {
		return
	}
	if (h == 1) {
		a = 1
	} else {
		if (h == 2) {
			a = 0
		}
	}
	while (b = b.parentNode) {
		g = b;
		while (1) {
			if (nclk_evt == 1 || nclk_evt == 2) {
				g = g.previousSibling;
				if (g) {
					if (g.nodeType == 8) {
						k = nclk.trim(g.data)
					} else {
						continue
					}
				} else {
					break
				}
			} else {
				if (nclk_evt == 3 || nclk_evt == 4) {
					k = b.className;
					if (k) {
						k = nclk.getClassTag(k)
					} else {
						break
					}
				}
			}
			if (k.indexOf("=") > 0) {
				m = k.split("=");
				if (m[0].charAt(0) != "N") {
					continue
				}
				i = m[0].substring(1);
				if (i == "I" && a == 0) {
					f = m[1].split(":");
					if (f[0] == "a") {
						if (f[1] != "" && f[1] != undefined) {
							e = f[1]
						}
					}
					a++;
					break
				} else {
					if (i == "E" && a == 1) {
						if (a == 1) {
							f = m[1].split(":");
							if (f[0] == "a") {
								if (e == "") {
									e = f[1]
								} else {
									e = ((f[1] == undefined) ? "" : f[1]) + "."
											+ e
								}
							}
						}
						a++;
						break
					} else {
						if ((i == "EI" || i == "IE") && a == 0) {
							f = m[1].split(":");
							if (f[0] == "a") {
								e = f[1]
							}
							a += 2;
							break
						}
					}
				}
			}
			if (nclk_evt == 3 || nclk_evt == 4) {
				break
			}
		}
		j++;
		if (a >= 2) {
			l = e;
			break
		}
		if (j >= nclkMaxDepth) {
			l = "";
			break
		}
	}
	return l
};
nclk.getServiceType = function() {
	var a;
	if (typeof g_ssc != "undefined" && typeof g_query != "undefined") {
		a = 1
	} else {
		a = 0
	}
	return a
};
nclk.parseNCStr = function(h, o) {
	var a;
	var m;
	var l;
	var e;
	var b = "", k = "", p = "", f = "", n = 0;
	var g = 2;
	o = nclk.trim(o);
	switch (h) {
	case 4:
		g = 4;
		break;
	case 5:
		g = 3;
		break;
	case 6:
		g = 2;
		break;
	case 1:
	case 2:
	case 3:
	default:
		return
	}
	m = o.substring(g);
	l = m.split(",");
	for ( var j = 0; j < l.length; j++) {
		e = l[j].split(":");
		if (e[0] == "a") {
			b = e[1]
		} else {
			if (e[0] == "r") {
				k = e[1]
			} else {
				if (e[0] == "i") {
					p = e[1]
				} else {
					if (e[0] == "g") {
						f = e[1]
					} else {
						if (e[0] == "t") {
							n = e[1]
						}
					}
				}
			}
		}
	}
	return [ b, k, p, f, n ]
};
nclk.trim = function(a) {
	return a.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
};
nclk.getClassTag = function(g) {
	var f = "";
	if (typeof (g) == "string") {
		f = g
	} else {
		if (g.baseVal) {
			f = g.baseVal
		} else {
			f = "" + g
		}
	}
	var b = new RegExp("N[^=]*=([^ $]*)");
	var e = f.match(b);
	var a = "";
	if (e) {
		a = e[0]
	}
	return a
};
function nclk_do() {
	if (nclk_evt == 1 || nclk_evt == 2 || nclk_evt == 3 || nclk_evt == 4) {
		nclk.addEvent(document, "click", nclk.generateCC)
	}
}
nclk.getScrollBarWidth = function() {
	var e = document.createElement("p");
	e.style.width = "200px";
	e.style.height = "200px";
	var f = document.createElement("div");
	f.style.position = "absolute";
	f.style.top = "0px";
	f.style.left = "0px";
	f.style.visibility = "hidden";
	f.style.width = "200px";
	f.style.height = "150px";
	f.style.overflow = "hidden";
	f.appendChild(e);
	document.body.appendChild(f);
	var b = e.offsetWidth;
	f.style.overflow = "scroll";
	var a = e.offsetWidth;
	if (b == a) {
		a = f.clientWidth
	}
	document.body.removeChild(f);
	return (b - a)
};
nclk.findPos = function(b) {
	var f = curtop = 0;
	try {
		if (b.offsetParent) {
			do {
				f += b.offsetLeft;
				curtop += b.offsetTop
			} while (b = b.offsetParent)
		} else {
			if (b.x || b.y) {
				if (b.x) {
					f += b.x
				}
				if (b.y) {
					curtop += b.y
				}
			}
		}
	} catch (a) {
	}
	return [ f, curtop ]
};
nclk.windowSize = function(e) {
	if (!e) {
		e = window
	}
	var a = 0;
	if (e.innerWidth) {
		a = e.innerWidth;
		if (typeof (e.innerWidth) == "number") {
			var b = nclk.getScrollBarWidth();
			a = e.innerWidth - b
		}
	} else {
		if (document.documentElement && document.documentElement.clientWidth) {
			a = document.documentElement.clientWidth
		} else {
			if (document.body
					&& (document.body.clientWidth || document.body.clientHeight)) {
				a = document.body.clientWidth
			}
		}
	}
	return a
};
nclk.checkIframe = function(i) {
	var f = document.URL;
	var h = i.parentNode;
	var a;
	var b;
	if (h == null || h == undefined) {
		return false
	}
	while (1) {
		if (h.nodeName.toLowerCase() == "#document") {
			if (h.parentWindow) {
				a = h.parentWindow
			} else {
				a = h.defaultView
			}
			try {
				if (a.frameElement != null && a.frameElement != undefined) {
					if (a.frameElement.nodeName.toLowerCase() == "iframe") {
						b = a.frameElement.id;
						if (!b) {
							return false
						}
						return b
					} else {
						return false
					}
				} else {
					return false
				}
			} catch (g) {
				return false
			}
		} else {
			h = h.parentNode;
			if (h == null || h == undefined) {
				return false
			}
		}
	}
};
nclk.absPath = function(a) {
	var e = window.location;
	var f = e.href;
	var b = e.protocol + "//" + e.host;
	if (a.charAt(0) == "/") {
		if (a.charAt(1) == "/") {
			return e.protocol + a
		} else {
			return b + a
		}
	}
	if (/^\.\//.test(a)) {
		a = a.substring(2)
	}
	while (/^\.\./.test(a)) {
		if (b != f) {
			f = f.substring(0, f.lastIndexOf("/"))
		}
		a = a.substring(3)
	}
	if (b != f) {
		if (a.charAt(0) != "?" && a.charAt(0) != "#") {
			f = f.substring(0, f.lastIndexOf("/"))
		}
	}
	if (a.charAt(0) == "/") {
		return f + a
	} else {
		if (a.charAt(0) == "?") {
			f = f.split("?")[0];
			return f + a
		} else {
			if (a.charAt(0) == "#") {
				f = f.split("#")[0];
				return f + a
			} else {
				return f + "/" + a
			}
		}
	}
};
function clickcr(g, I, u, E, F, B, z) {
	if (arguments.length == 1) {
		if (typeof nclk.generateCC != "undefined") {
			nclk.generateCC(arguments[0])
		}
		return
	}
	var G = navigator.userAgent.toLowerCase();
	var k = (G.indexOf("safari") != -1 ? true : false);
	var D = /msie/.test(G) && !/opera/.test(G);
	var l = (window.location.protocol == "https:") ? "https:" : "http:";
	var a = ccsrv.substring(ccsrv.indexOf(".") + 1);
	var t = window.event ? window.event : F;
	var s = -1;
	var q = -1;
	var p = -1;
	var n = -1;
	var S, f, i;
	var r, j, m;
	var N, K, J, M, A, C, w;
	var P;
	var H = 0;
	if (!B) {
		B = "0"
	} else {
		B = String(B)
	}
	if (!z) {
		z = ""
	}
	if (B.indexOf("n") == 0) {
		H = 0
	} else {
		if (window.g_ssc != undefined && window.g_query != undefined) {
			H = 1
		} else {
			H = 0
		}
	}
	try {
		M = nclk.windowSize(window);
		i = nclk.checkIframe(g);
		if (i) {
			var v = nclk.findPos(document.getElementById(i));
			if (t.clientX && t.clientX != undefined) {
				S = document.body;
				if (S.clientLeft && S.clientTop) {
					ifrSx = t.clientX - S.clientLeft;
					ifrSy = t.clientY - S.clientTop
				} else {
					ifrSx = t.clientX;
					ifrSy = t.clientY
				}
			}
			p = v[0] + ifrSx;
			n = v[1] + ifrSy;
			if (document.body
					&& (document.body.scrollTop || document.body.scrollLeft)) {
				S = document.body;
				s = p - S.scrollLeft;
				q = n - S.scrollTop
			} else {
				if (document.documentElement
						&& (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
					f = document.documentElement;
					s = p - f.scrollLeft;
					q = n - f.scrollTop
				} else {
					s = p;
					q = n
				}
			}
		} else {
			if (t.clientX && t.clientX != undefined) {
				S = document.body;
				if (S.clientLeft && S.clientTop) {
					s = t.clientX - S.clientLeft;
					q = t.clientY - S.clientTop
				} else {
					s = t.clientX;
					q = t.clientY
				}
			}
			if (document.body
					&& (document.body.scrollTop || document.body.scrollLeft)) {
				p = document.body.scrollLeft + (s < 0 ? 0 : s);
				n = document.body.scrollTop + (q < 0 ? 0 : q)
			} else {
				if (document.documentElement
						&& (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
					f = document.documentElement;
					if (f.scrollLeft != undefined) {
						p = f.scrollLeft + (s < 0 ? 0 : s)
					}
					if (f.scrollTop != undefined) {
						n = f.scrollTop + (q < 0 ? 0 : q)
					}
				} else {
					p = (s < 0 ? 0 : s);
					n = (q < 0 ? 0 : q)
				}
			}
			if (t.pageX) {
				p = t.pageX
			}
			if (t.pageY) {
				n = t.pageY
			}
		}
	} catch (Q) {
	}
	if (I == "" || typeof I == "undefined") {
		return
	}
	if (B.indexOf("1") != -1) {
		r = 0
	} else {
		if (g.href) {
			A = g.nodeName.toLowerCase();
			C = g.href.toLowerCase();
			if ((g.target && g.target != "_self" && g.target != "_top" && g.target != "_parent")
					|| (C.indexOf("javascript:") != -1)
					|| (g.getAttribute("href", 2) && g.getAttribute("href", 2)
							.charAt(0) == "#")
					|| (C.indexOf("#") != -1 && (C.substr(0, C.indexOf("#")) == document.URL))
					|| A.toLowerCase() == "img"
					|| D
					&& window.location.host.indexOf(a) == -1) {
				r = 0
			} else {
				r = 1
			}
		} else {
			r = 0
		}
	}
	if (g.href && g.href.indexOf(l + "//" + ccsrv) == 0) {
		j = g.href
	} else {
		j = l + "//" + ccsrv + "/" + nclkModule + "?a=" + I + "&r=" + E + "&i="
				+ u;
		j += "&bw=" + M + "&px=" + p + "&py=" + n + "&sx=" + s + "&sy=" + q
				+ "&m=" + r;
		if (H == 0) {
			j += "&nsc=" + nsc
		} else {
			if (H == 1) {
				j += "&ssc=" + g_ssc + "&q=" + encodeURIComponent(g_query)
						+ "&s=" + g_sid + "&p=" + g_pid + "&g=" + z
			}
		}
		if (C && C.indexOf(l + "//" + ccsrv) != 0 && A.toLowerCase() != "img") {
			var O = g.href;
			if (g.outerHTML && !window.XMLHttpRequest) {
				O = (/\shref=\"([^\"]+)\"/i.test(g.outerHTML) && RegExp.$1)
						.replace(/\\/g, "\\\\").replace(/%([A-Z0-9]{2})/ig,
								"\\$1");
				(d = document.createElement("div")).innerHTML = O;
				O = d.innerText.replace(/\\([A-Z0-9]{2})/gi, "%$1").replace(
						/\\\\/g, "\\")
			}
			C = O.toLowerCase();
			if (C.indexOf("http:") == 0 || C.indexOf("https:") == 0
					|| C.indexOf("javascript:") == 0) {
				j += "&u=" + encodeURIComponent(O)
			} else {
				w = nclk.absPath(O);
				j += "&u=" + encodeURIComponent(w)
			}
		} else {
			if (g.href) {
				if (g.href.length > 0) {
					j += "&u=" + encodeURIComponent(g.href)
				} else {
					j += "&u=about%3Ablank"
				}
			} else {
				j += "&u=about%3Ablank"
			}
		}
	}
	if (r == 1) {
		P = g.innerHTML;
		g.href = j;
		if (g.innerHTML != P) {
			g.innerHTML = P
		}
	} else {
		if (document.images) {
			var L = new Date().getTime();
			j += "&time=" + L;
			if (k && !g.href) {
				var R = c = new Date();
				while ((R.getTime() - c.getTime()) < 100) {
					R = new Date()
				}
				var N = new Image();
				nclkImg.push(N);
				N.src = j
			} else {
				var N = new Image();
				nclkImg.push(N);
				N.src = j
			}
		}
	}
	
	/* 2013.09.30 front 에서 사용하는 tracker 같아서 우선 제거함.
	 * 추가하기 위해서는 
	 * shop.tracker_v1.js 까지 추가 되어야함.
	 * 
	if(g != null && g['getAttributeNode'] != null && g['getAttributeNode'] != 'undefined' && g.getAttributeNode('track') != null && g.getAttributeNode('track').value == 'flush'){
		shop.tracker.nClick.flush({
			'g' : g, 
			'I' : I, 
			'u' : u, 
			'E' : E, 
			'F' : F, 
			'B' : B, 
			'z' : z
		});
	} else {
		shop.tracker.nClick.push({
			'g' : g, 
			'I' : I, 
			'u' : u, 
			'E' : E, 
			'F' : F, 
			'B' : B, 
			'z' : z
		});
	}
	*/
	return true
};