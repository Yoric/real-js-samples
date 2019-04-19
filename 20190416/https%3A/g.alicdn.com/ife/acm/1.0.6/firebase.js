/*
 * Alibaba Cloud Messaging Core For Import
 * @file acm-core-for-import.js
 * @mergeFrom ./src/firebase-app.js + ./src/firebase-app-messaging.js + ./src/firebase-app-messaging-config-and-init.js
 * @author nuo.xun@alibaba-inc.com
 * @date 2017.3.20
 */

// ---------------------------------------

/*
 * Firebase APP SDK
 * @file firebase-app.js
 * @ver 3.7.2
 * @from https://www.gstatic.com/firebasejs/3.7.2/firebase-app.js
 * @author nuo.xun@alibaba-inc.com
 * @date 2017.3.20
 */
var firebase = null;
(function () {
  var aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
      if (c.get || c.set) throw new TypeError("ES3 does not support getters and setters.");
      a != Array.prototype && a != Object.prototype && (a[b] = c.value)
    },
    k = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this,
    l = function () {
      l = function () {};
      k.Symbol || (k.Symbol = ba)
    },
    ca = 0,
    ba = function (a) {
      return "jscomp_symbol_" + (a || "") + ca++
    },
    p = function () {
      l();
      var a = k.Symbol.iterator;
      a || (a = k.Symbol.iterator = k.Symbol("iterator"));
      "function" != typeof Array.prototype[a] && aa(Array.prototype, a, {
        configurable: !0,
        writable: !0,
        value: function () {
          return m(this)
        }
      });
      p = function () {}
    },
    m = function (a) {
      var b = 0;
      return da(function () {
        return b < a.length ? {
          done: !1,
          value: a[b++]
        } : {
          done: !0
        }
      })
    },
    da = function (a) {
      p();
      a = {
        next: a
      };
      a[k.Symbol.iterator] = function () {
        return this
      };
      return a
    },
    r = this,
    t = function () {},
    u = function (a) {
      var b = typeof a;
      if ("object" == b)
        if (a) {
          if (a instanceof Array) return "array";
          if (a instanceof Object) return b;
          var c = Object.prototype.toString.call(a);
          if ("[object Window]" == c) return "object";
          if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
          if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
        } else return "null";
      else if ("function" == b && "undefined" == typeof a.call) return "object";
      return b
    },
    v = function (a) {
      return "function" == u(a)
    },
    ea = function (a, b, c) {
      return a.call.apply(a.bind, arguments)
    },
    fa = function (a, b, c) {
      if (!a) throw Error();
      if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function () {
          var c = Array.prototype.slice.call(arguments);
          Array.prototype.unshift.apply(c, d);
          return a.apply(b, c)
        }
      }
      return function () {
        return a.apply(b, arguments)
      }
    },
    w = function (a, b, c) {
      w = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ea : fa;
      return w.apply(null, arguments)
    },
    x = function (a, b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return function () {
        var b = c.slice();
        b.push.apply(b, arguments);
        return a.apply(this, b)
      }
    },
    y = function (a, b) {
      function c() {}
      c.prototype = b.prototype;
      a.ha = b.prototype;
      a.prototype = new c;
      a.prototype.constructor = a;
      a.base = function (a, c, h) {
        for (var e = Array(arguments.length - 2), d = 2; d < arguments.length; d++) e[d - 2] = arguments[d];
        return b.prototype[c].apply(a, e)
      }
    };
  var A;
  A = "undefined" !== typeof window ? window : "undefined" !== typeof self ? self : global;
  var __extends = function (a, b) {
      function c() {
        this.constructor = a
      }
      for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
      a.prototype = null === b ? Object.create(b) : (c.prototype = b.prototype, new c)
    },
    __assign = Object.assign ||
    function (a) {
      for (var b, c = 1,
          d = arguments.length; c < d; c++) {
        b = arguments[c];
        for (var e in b) Object.prototype.hasOwnProperty.call(b, e) && (a[e] = b[e])
      }
      return a
    },
    __rest = function (a, b) {
      var d,
        c = {};
      for (d in a) Object.prototype.hasOwnProperty.call(a, d) && 0 > b.indexOf(d) && (c[d] = a[d]);
      if (null != a && "function" === typeof Object.getOwnPropertySymbols) {
        var e = 0;
        for (d = Object.getOwnPropertySymbols(a); e < d.length; e++) 0 > b.indexOf(d[e]) && (c[d[e]] = a[d[e]])
      }
      return c
    },
    __decorate = function (a, b, c, d) {
      var e = arguments.length,
        h = 3 > e ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d,
        g;
      g = A.Reflect;
      if ("object" === typeof g && "function" === typeof g.decorate) h = g.decorate(a, b, c, d);
      else
        for (var f = a.length - 1; 0 <= f; f--)
          if (g = a[f]) h = (3 > e ? g(h) : 3 < e ? g(b, c, h) : g(b, c)) || h;
      return 3 < e && h && Object.defineProperty(b, c, h),
        h
    },
    __metadata = function (a, b) {
      var c = A.Reflect;
      if ("object" === typeof c && "function" === typeof c.metadata) return c.metadata(a, b)
    },
    __param = function (a, b) {
      return function (c, d) {
        b(c, d, a)
      }
    },
    __awaiter = function (a, b, c, d) {
      return new(c || (c = Promise))(function (e, h) {
        function g(a) {
          try {
            q(d.next(a))
          } catch (n) {
            h(n)
          }
        }

        function f(a) {
          try {
            q(d["throw"](a))
          } catch (n) {
            h(n)
          }
        }

        function q(a) {
          a.done ? e(a.value) : (new c(function (b) {
            b(a.value)
          })).then(g, f)
        }
        q((d = d.apply(a, b)).next())
      })
    },
    __generator = function (a, b) {
      function c(a) {
        return function (b) {
          return d([a, b])
        }
      }

      function d(c) {
        if (h) throw new TypeError("Generator is already executing.");
        for (; e;) try {
          if (h = 1, g && (f = g[c[0] & 2 ? "return" : c[0] ? "throw" : "next"]) && !(f = f.call(g, c[1])).done) return f;
          if (g = 0, f) c = [0, f.value];
          switch (c[0]) {
            case 0:
            case 1:
              f = c;
              break;
            case 4:
              return e.label++, {
                value: c[1],
                done: !1
              };
            case 5:
              e.label++;
              g = c[1];
              c = [0];
              continue;
            case 7:
              c = e.G.pop();
              e.I.pop();
              continue;
            default:
              if (!(f = e.I, f = 0 < f.length && f[f.length - 1]) && (6 === c[0] || 2 === c[0])) {
                e = 0;
                continue
              }
              if (3 === c[0] && (!f || c[1] > f[0] && c[1] < f[3])) e.label = c[1];
              else if (6 === c[0] && e.label < f[1]) e.label = f[1],
                f = c;
              else if (f && e.label < f[2]) e.label = f[2],
                e.G.push(c);
              else {
                f[2] && e.G.pop();
                e.I.pop();
                continue
              }
          }
          c = b.call(a, e)
        } catch (z) {
          c = [6, z],
            g = 0
        } finally {
          h = f = 0
        }
        if (c[0] & 5) throw c[1];
        return {
          value: c[0] ? c[1] : void 0,
          done: !0
        }
      }
      var e = {
          label: 0,
          ga: function () {
            if (f[0] & 1) throw f[1];
            return f[1]
          },
          I: [],
          G: []
        },
        h,
        g,
        f;
      return {
        next: c(0),
        "throw": c(1),
        "return": c(2)
      }
    };
  "undefined" !== typeof A.S && A.S || (A.__extends = __extends, A.__assign = __assign, A.__rest = __rest, A.__extends = __extends, A.__decorate = __decorate, A.__metadata = __metadata, A.__param = __param, A.__awaiter = __awaiter, A.__generator = __generator);
  var B = function (a) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, B);
    else {
      var b = Error().stack;
      b && (this.stack = b)
    }
    a && (this.message = String(a))
  };
  y(B, Error);
  B.prototype.name = "CustomError";
  var ga = function (a, b) {
    for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) d += c.shift() + e.shift();
    return d + c.join("%s")
  };
  var C = function (a, b) {
    b.unshift(a);
    B.call(this, ga.apply(null, b));
    b.shift()
  };
  y(C, B);
  C.prototype.name = "AssertionError";
  var ha = function (a, b, c, d) {
      var e = "Assertion failed";
      if (c) var e = e + (": " + c),
        h = d;
      else a && (e += ": " + a, h = b);
      throw new C("" + e, h || []);
    },
    D = function (a, b, c) {
      a || ha("", null, b, Array.prototype.slice.call(arguments, 2))
    },
    E = function (a, b, c) {
      v(a) || ha("Expected function but got %s: %s.", [u(a), a], b, Array.prototype.slice.call(arguments, 2))
    };
  var F = function (a, b, c) {
    this.Y = c;
    this.T = a;
    this.Z = b;
    this.s = 0;
    this.o = null
  };
  F.prototype.get = function () {
    var a;
    0 < this.s ? (this.s--, a = this.o, this.o = a.next, a.next = null) : a = this.T();
    return a
  };
  F.prototype.put = function (a) {
    this.Z(a);
    this.s < this.Y && (this.s++, a.next = this.o, this.o = a)
  };
  var G;
  a: {
    var ia = r.navigator;
    if (ia) {
      var ja = ia.userAgent;
      if (ja) {
        G = ja;
        break a
      }
    }
    G = ""
  };
  var ka = function (a) {
      r.setTimeout(function () {
          throw a;
        },
        0)
    },
    H,
    la = function () {

      /*
      var a = r.MessageChannel;
      "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && -1 == G.indexOf("Presto") && (a = function() {
          
          var a = document.createElement("IFRAME");
          a.style.display = "none";
          a.src = "";
          document.documentElement.appendChild(a);
          var b = a.contentWindow,
          a = b.document;
          a.open();
          a.write("");
          a.close();
          var c = "callImmediate" + Math.random(),
          d = "file:" == b.location.protocol ? "*": b.location.protocol + "//" + b.location.host,
          a = w(function(a) {
              if (("*" == d || a.origin == d) && a.data == c) this.port1.onmessage()
          },
          this);
          b.addEventListener("message", a, !1);
          this.port1 = {};
          this.port2 = {
              postMessage: function() {
                  b.postMessage(c, d)
              }
          }
          
      });
      if ("undefined" !== typeof a && -1 == G.indexOf("Trident") && -1 == G.indexOf("MSIE")) {
          var b = new a,
          c = {},
          d = c;
          b.port1.onmessage = function() {
              if (void 0 !== c.next) {
                  c = c.next;
                  var a = c.J;
                  c.J = null;
                  a()
              }
          };
          return function(a) {
              d.next = {
                  J: a
              };
              d = d.next;
              b.port2.postMessage(0)
          }
      }
      return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ?
      function(a) {
          var b = document.createElement("SCRIPT");
          b.onreadystatechange = function() {
              b.onreadystatechange = null;
              b.parentNode.removeChild(b);
              b = null;
              a();
              a = null
          };
          document.documentElement.appendChild(b)
      }: function(a) {
          r.setTimeout(a, 0)
      }
      */
      return function () {};
    };
  var I = function () {
      this.v = this.g = null
    },
    ma = new F(function () {
        return new J
      },
      function (a) {
        a.reset()
      },
      100);
  I.prototype.add = function (a, b) {
    var c = ma.get();
    c.set(a, b);
    this.v ? this.v.next = c : (D(!this.g), this.g = c);
    this.v = c
  };
  I.prototype.remove = function () {
    var a = null;
    this.g && (a = this.g, this.g = this.g.next, this.g || (this.v = null), a.next = null);
    return a
  };
  var J = function () {
    this.next = this.scope = this.B = null
  };
  J.prototype.set = function (a, b) {
    this.B = a;
    this.scope = b;
    this.next = null
  };
  J.prototype.reset = function () {
    this.next = this.scope = this.B = null
  };
  var M = function (a, b) {
      K || na();
      L || (K(), L = !0);
      oa.add(a, b)
    },
    K,
    na = function () {
      if (-1 != String(r.Promise).indexOf("[native code]")) {
        var a = r.Promise.resolve(void 0);
        K = function () {
          a.then(pa)
        }
      } else K = function () {
        var a = pa;
        !v(r.setImmediate) || r.Window && r.Window.prototype && -1 == G.indexOf("Edge") && r.Window.prototype.setImmediate == r.setImmediate ? (H || (H = la()), H(a)) : r.setImmediate(a)
      }
    },
    L = !1,
    oa = new I,
    pa = function () {
      for (var a; a = oa.remove();) {
        try {
          a.B.call(a.scope)
        } catch (b) {
          ka(b)
        }
        ma.put(a)
      }
      L = !1
    };
  var O = function (a, b) {
      this.b = 0;
      this.R = void 0;
      this.j = this.h = this.u = null;
      this.m = this.A = !1;
      if (a != t) try {
        var c = this;
        a.call(b,
          function (a) {
            N(c, 2, a)
          },
          function (a) {
            try {
              if (a instanceof Error) throw a;
              throw Error("Promise rejected.");
            } catch (e) {}
            N(c, 3, a)
          })
      } catch (d) {
        N(this, 3, d)
      }
    },
    qa = function () {
      this.next = this.context = this.i = this.f = this.child = null;
      this.w = !1
    };
  qa.prototype.reset = function () {
    this.context = this.i = this.f = this.child = null;
    this.w = !1
  };
  var ra = new F(function () {
        return new qa
      },
      function (a) {
        a.reset()
      },
      100),
    sa = function (a, b, c) {
      var d = ra.get();
      d.f = a;
      d.i = b;
      d.context = c;
      return d
    },
    ua = function (a, b, c) {
      ta(a, b, c, null) || M(x(b, a))
    };
  O.prototype.then = function (a, b, c) {
    null != a && E(a, "opt_onFulfilled should be a function.");
    null != b && E(b, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
    return va(this, v(a) ? a : null, v(b) ? b : null, c)
  };
  O.prototype.then = O.prototype.then;
  O.prototype.$goog_Thenable = !0;
  O.prototype.ba = function (a, b) {
    return va(this, null, a, b)
  };
  var xa = function (a, b) {
      a.h || 2 != a.b && 3 != a.b || wa(a);
      D(null != b.f);
      a.j ? a.j.next = b : a.h = b;
      a.j = b
    },
    va = function (a, b, c, d) {
      var e = sa(null, null, null);
      e.child = new O(function (a, g) {
        e.f = b ?
          function (c) {
            try {
              var e = b.call(d, c);
              a(e)
            } catch (z) {
              g(z)
            }
          } : a;
        e.i = c ?
          function (b) {
            try {
              var e = c.call(d, b);
              a(e)
            } catch (z) {
              g(z)
            }
          } : g
      });
      e.child.u = a;
      xa(a, e);
      return e.child
    };
  O.prototype.da = function (a) {
    D(1 == this.b);
    this.b = 0;
    N(this, 2, a)
  };
  O.prototype.ea = function (a) {
    D(1 == this.b);
    this.b = 0;
    N(this, 3, a)
  };
  var N = function (a, b, c) {
      0 == a.b && (a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself")), a.b = 1, ta(c, a.da, a.ea, a) || (a.R = c, a.b = b, a.u = null, wa(a), 3 != b || ya(a, c)))
    },
    ta = function (a, b, c, d) {
      if (a instanceof O) return null != b && E(b, "opt_onFulfilled should be a function."),
        null != c && E(c, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"),
        xa(a, sa(b || t, c || null, d)), !0;
      var e;
      if (a) try {
        e = !!a.$goog_Thenable
      } catch (g) {
        e = !1
      } else e = !1;
      if (e) return a.then(b, c, d), !0;
      e = typeof a;
      if ("object" == e && null != a || "function" == e) try {
        var h = a.then;
        if (v(h)) return za(a, h, b, c, d), !0
      } catch (g) {
        return c.call(d, g), !0
      }
      return !1
    },
    za = function (a, b, c, d, e) {
      var h = !1,
        g = function (a) {
          h || (h = !0, c.call(e, a))
        },
        f = function (a) {
          h || (h = !0, d.call(e, a))
        };
      try {
        b.call(a, g, f)
      } catch (q) {
        f(q)
      }
    },
    wa = function (a) {
      a.A || (a.A = !0, M(a.V, a))
    },
    Aa = function (a) {
      var b = null;
      a.h && (b = a.h, a.h = b.next, b.next = null);
      a.h || (a.j = null);
      null != b && D(null != b.f);
      return b
    };
  O.prototype.V = function () {
    for (var a; a = Aa(this);) {
      var b = this.b,
        c = this.R;
      if (3 == b && a.i && !a.w) {
        var d;
        for (d = this; d && d.m; d = d.u) d.m = !1
      }
      if (a.child) a.child.u = null,
        Ba(a, b, c);
      else try {
        a.w ? a.f.call(a.context) : Ba(a, b, c)
      } catch (e) {
        Ca.call(null, e)
      }
      ra.put(a)
    }
    this.A = !1
  };
  var Ba = function (a, b, c) {
      2 == b ? a.f.call(a.context, c) : a.i && a.i.call(a.context, c)
    },
    ya = function (a, b) {
      a.m = !0;
      M(function () {
        a.m && Ca.call(null, b)
      })
    },
    Ca = ka;

  function P(a, b) {
    if (!(b instanceof Object)) return b;
    switch (b.constructor) {
      case Date:
        return new Date(b.getTime());
      case Object:
        void 0 === a && (a = {});
        break;
      case Array:
        a = [];
        break;
      default:
        return b
    }
    for (var c in b) b.hasOwnProperty(c) && (a[c] = P(a[c], b[c]));
    return a
  };
  O.all = function (a) {
    return new O(function (b, c) {
      var d = a.length,
        e = [];
      if (d)
        for (var h = function (a, c) {
              d--;
              e[a] = c;
              0 == d && b(e)
            },
            g = function (a) {
              c(a)
            },
            f = 0, q; f < a.length; f++) q = a[f],
          ua(q, x(h, f), g);
      else b(e)
    })
  };
  O.resolve = function (a) {
    if (a instanceof O) return a;
    var b = new O(t);
    N(b, 2, a);
    return b
  };
  O.reject = function (a) {
    return new O(function (b, c) {
      c(a)
    })
  };
  O.prototype["catch"] = O.prototype.ba;
  var Q = O;
  "undefined" !== typeof Promise && (Q = Promise);
  var Da = Q;

  function Ea(a, b) {
    a = new R(a, b);
    return a.subscribe.bind(a)
  }
  var R = function (a, b) {
    var c = this;
    this.a = [];
    this.P = 0;
    this.task = Da.resolve();
    this.l = !1;
    this.F = b;
    this.task.then(function () {
      a(c)
    }).
    catch(function (a) {
      c.error(a)
    })
  };
  R.prototype.next = function (a) {
    S(this,
      function (b) {
        b.next(a)
      })
  };
  R.prototype.error = function (a) {
    S(this,
      function (b) {
        b.error(a)
      });
    this.close(a)
  };
  R.prototype.complete = function () {
    S(this,
      function (a) {
        a.complete()
      });
    this.close()
  };
  R.prototype.subscribe = function (a, b, c) {
    var d = this,
      e;
    if (void 0 === a && void 0 === b && void 0 === c) throw Error("Missing Observer.");
    e = Fa(a) ? a : {
      next: a,
      error: b,
      complete: c
    };
    void 0 === e.next && (e.next = T);
    void 0 === e.error && (e.error = T);
    void 0 === e.complete && (e.complete = T);
    a = this.fa.bind(this, this.a.length);
    this.l && this.task.then(function () {
      try {
        d.K ? e.error(d.K) : e.complete()
      } catch (h) {}
    });
    this.a.push(e);
    return a
  };
  R.prototype.fa = function (a) {
    void 0 !== this.a && void 0 !== this.a[a] && (delete this.a[a], --this.P, 0 === this.P && void 0 !== this.F && this.F(this))
  };
  var S = function (a, b) {
      if (!a.l)
        for (var c = 0; c < a.a.length; c++) Ga(a, c, b)
    },
    Ga = function (a, b, c) {
      a.task.then(function () {
        if (void 0 !== a.a && void 0 !== a.a[b]) try {
          c(a.a[b])
        } catch (d) {
          "undefined" !== typeof console && console.error && console.error(d)
        }
      })
    };
  R.prototype.close = function (a) {
    var b = this;
    this.l || (this.l = !0, void 0 !== a && (this.K = a), this.task.then(function () {
      b.a = void 0;
      b.F = void 0
    }))
  };

  function Fa(a) {
    if ("object" !== typeof a || null === a) return !1;
    var b;
    b = ["next", "error", "complete"];
    p();
    var c = b[Symbol.iterator];
    b = c ? c.call(b) : m(b);
    for (c = b.next(); !c.done; c = b.next())
      if (c = c.value, c in a && "function" === typeof a[c]) return !0;
    return !1
  }

  function T() {};
  var Ha = Error.captureStackTrace,
    V = function (a, b) {
      this.code = a;
      this.message = b;
      if (Ha) Ha(this, U.prototype.create);
      else {
        var c = Error.apply(this, arguments);
        this.name = "FirebaseError";
        Object.defineProperty(this, "stack", {
          get: function () {
            return c.stack
          }
        })
      }
    };
  V.prototype = Object.create(Error.prototype);
  V.prototype.constructor = V;
  V.prototype.name = "FirebaseError";
  var U = function (a, b, c) {
    this.$ = a;
    this.aa = b;
    this.U = c;
    this.pattern = /\{\$([^}]+)}/g
  };
  U.prototype.create = function (a, b) {
    void 0 === b && (b = {});
    var c = this.U[a];
    a = this.$ + "/" + a;
    var c = void 0 === c ? "Error" : c.replace(this.pattern,
        function (a, c) {
          a = b[c];
          return void 0 !== a ? a.toString() : "<" + c + "?>"
        }),
      c = this.aa + ": " + c + " (" + a + ").",
      c = new V(a, c),
      d;
    for (d in b) b.hasOwnProperty(d) && "_" !== d.slice(-1) && (c[d] = b[d]);
    return c
  };
  var W = Q,
    X = function (a, b, c) {
      var d = this;
      this.M = c;
      this.N = !1;
      this.c = {};
      this.D = b;
      this.H = P(void 0, a);
      a = "serviceAccount" in this.H;
      ("credential" in this.H || a) && "undefined" !== typeof console && console.log("The '" + (a ? "serviceAccount" : "credential") + "' property specified in the first argument to initializeApp() is deprecated and will be removed in the next major version. You should instead use the 'firebase-admin' package. See https://firebase.google.com/docs/admin/setup for details on how to get started.");
      Object.keys(c.INTERNAL.factories).forEach(function (a) {
        var b = c.INTERNAL.useAsService(d, a);
        null !== b && (b = d.X.bind(d, b), d[a] = b)
      })
    };
  X.prototype.delete = function () {
    var a = this;
    return (new W(function (b) {
      Y(a);
      b()
    })).then(function () {
      a.M.INTERNAL.removeApp(a.D);
      var b = [];
      Object.keys(a.c).forEach(function (c) {
        Object.keys(a.c[c]).forEach(function (d) {
          b.push(a.c[c][d])
        })
      });
      return W.all(b.map(function (a) {
        return a.INTERNAL.delete()
      }))
    }).then(function () {
      a.N = !0;
      a.c = {}
    })
  };
  X.prototype.X = function (a, b) {
    Y(this);
    "undefined" === typeof this.c[a] && (this.c[a] = {});
    var c = b || "[DEFAULT]";
    return "undefined" === typeof this.c[a][c] ? (b = this.M.INTERNAL.factories[a](this, this.W.bind(this), b), this.c[a][c] = b) : this.c[a][c]
  };
  X.prototype.W = function (a) {
    P(this, a)
  };
  var Y = function (a) {
    a.N && Z("app-deleted", {
      name: a.D
    })
  };
  k.Object.defineProperties(X.prototype, {
    name: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        Y(this);
        return this.D
      }
    },
    options: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        Y(this);
        return this.H
      }
    }
  });
  X.prototype.name && X.prototype.options || X.prototype.delete || console.log("dc");

  function Ia() {
    function a(a) {
      a = a || "[DEFAULT]";
      var b = d[a];
      void 0 === b && Z("no-app", {
        name: a
      });
      return b
    }

    function b(a, b) {
      Object.keys(e).forEach(function (d) {
        d = c(a, d);
        if (null !== d && h[d]) h[d](b, a)
      })
    }

    function c(a, b) {
      if ("serverAuth" === b) return null;
      var c = b;
      a = a.options;
      "auth" === b && (a.serviceAccount || a.credential) && (c = "serverAuth", "serverAuth" in e || Z("sa-not-supported"));
      return c
    }
    var d = {},
      e = {},
      h = {},
      g = {
        __esModule: !0,
        initializeApp: function (a, c) {
          void 0 === c ? c = "[DEFAULT]" : "string" === typeof c && "" !== c || Z("bad-app-name", {
            name: c + ""
          });
          void 0 !== d[c] && Z("duplicate-app", {
            name: c
          });
          a = new X(a, c, g);
          d[c] = a;
          b(a, "create");
          void 0 != a.INTERNAL && void 0 != a.INTERNAL.getToken || P(a, {
            INTERNAL: {
              getUid: function () {
                return null
              },
              getToken: function () {
                return W.resolve(null)
              },
              addAuthTokenListener: function () {},
              removeAuthTokenListener: function () {}
            }
          });
          return a
        },
        app: a,
        apps: null,
        Promise: W,
        SDK_VERSION: "0.0.0",
        INTERNAL: {
          registerService: function (b, c, d, n, Ja) {
            e[b] && Z("duplicate-service", {
              name: b
            });
            e[b] = Ja ? c : function (a, b) {
              return c(a, b, "[DEFAULT]")
            };
            n && (h[b] = n);
            n = function (c) {
              void 0 === c && (c = a());
              return c[b]()
            };
            void 0 !== d && P(n, d);
            return g[b] = n
          },
          createFirebaseNamespace: Ia,
          extendNamespace: function (a) {
            P(g, a)
          },
          createSubscribe: Ea,
          ErrorFactory: U,
          removeApp: function (a) {
            b(d[a], "delete");
            delete d[a]
          },
          factories: e,
          useAsService: c,
          Promise: O,
          deepExtend: P
        }
      };
    g["default"] = g;
    Object.defineProperty(g, "apps", {
      get: function () {
        return Object.keys(d).map(function (a) {
          return d[a]
        })
      }
    });
    a.App = X;
    return g
  }

  function Z(a, b) {
    throw Ka.create(a, b);
  }
  var Ka = new U("app", "Firebase", {
    "no-app": "No Firebase App '{$name}' has been created - call Firebase App.initializeApp()",
    "bad-app-name": "Illegal App name: '{$name}",
    "duplicate-app": "Firebase App named '{$name}' already exists",
    "app-deleted": "Firebase App named '{$name}' already deleted",
    "duplicate-service": "Firebase service named '{$name}' already registered",
    "sa-not-supported": "Initializing the Firebase SDK with a service account is only allowed in a Node.js environment. On client devices, you should instead initialize the SDK with an api key and auth domain"
  });
  "undefined" !== typeof firebase && (firebase = Ia());
}).call(this);
firebase.SDK_VERSION = "3.7.2";


/*
 * Firebase Messaging SDK
 * @file firebase-app-messaging.js
 * @ver 3.7.2
 * @author nuo.xun@alibaba-inc.com
 * @date 2017.3.22
 */
(function () {
  var f = function (a, b) {
      function c() {}

      c.prototype = b.prototype;
      a.prototype = new c;
      for (var d in b)
        if (Object.defineProperties) {
          var e = Object.getOwnPropertyDescriptor(b, d);
          e && Object.defineProperty(a, d, e)
        } else a[d] = b[d]
    },
    g = this,
    h = function (a) {
      var b = typeof a;
      if ("object" == b)
        if (a) {
          if (a instanceof Array) return "array";
          if (a instanceof Object) return b;
          var c = Object.prototype.toString.call(a);
          if ("[object Window]" == c) return "object";
          if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
          if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
        } else return "null";
      else if ("function" == b && "undefined" == typeof a.call) return "object";
      return b
    },
    k = function (a, b) {
      function c() {}

      c.prototype = b.prototype;
      a.B = b.prototype;
      a.prototype = new c;
      a.u = function (a, c, n) {
        for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];
        return b.prototype[c].apply(a, d)
      }
    };
  var m = function (a) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, m);
    else {
      var b = Error().stack;
      b && (this.stack = b)
    }
    a && (this.message = String(a))
  };
  k(m, Error);
  var p = function (a, b) {
    for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) d += c.shift() + e.shift();
    return d + c.join("%s")
  };
  var q = function (a, b) {
    b.unshift(a);
    m.call(this, p.apply(null, b));
    b.shift()
  };
  k(q, m);
  var r = function (a, b, c) {
    if (!a) {
      var d = "Assertion failed";
      if (b) var d = d + (": " + b),
        e = Array.prototype.slice.call(arguments, 2);
      throw new q("" + d, e || []);
    }
  };
  var u = null;
  var v = function (a) {
    a = new Uint8Array(a);
    var b = h(a);
    r("array" == b || "object" == b && "number" == typeof a.length, "encodeByteArray takes an array as a parameter");
    if (!u)
      for (u = {}, b = 0; 65 > b; b++) u[b] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(b);
    for (var b = u, c = [], d = 0; d < a.length; d += 3) {
      var e = a[d],
        n = d + 1 < a.length,
        l = n ? a[d + 1] : 0,
        z = d + 2 < a.length,
        t = z ? a[d + 2] : 0,
        M = e >> 2,
        e = (e & 3) << 4 | l >> 4,
        l = (l & 15) << 2 | t >> 6,
        t = t & 63;
      z || (t = 64, n || (l = 64));
      c.push(b[M], b[e], b[l], b[t])
    }
    return c.join("").replace(/\+/g, "-").replace(/\//g,
      "_").replace(/=+$/, "")
  };
  var w = {},
    x = (w["only-available-in-window"] = "This method is available in a Window context.", w["only-available-in-sw"] = "This method is available in a service worker context.", w["should-be-overriden"] = "This method should be overriden by extended classes.", w["bad-sender-id"] = "Please ensure that 'messagingSenderId' is set correctly in the options passed into firebase.initializeApp().", w["permission-default"] = "The required permissions were not granted and dismissed instead.", w["permission-blocked"] = "The required permissions were not granted and blocked instead.",
      w["unsupported-browser"] = "This browser doesn't support the API's required to use the firebase SDK.", w["notifications-blocked"] = "Notifications have been blocked.", w["failed-serviceworker-registration"] = "We are unable to register the default service worker. {$browserErrorMessage}", w["sw-registration-expected"] = "A service worker registration was the expected input.", w["get-subscription-failed"] = "There was an error when trying to get any existing Push Subscriptions.", w["invalid-saved-token"] = "Unable to access details of the saved token.",
      w["sw-reg-redundant"] = "The service worker being used for push was made redundant.", w["token-subscribe-failed"] = "A problem occured while subscribing the user to FCM: {$message}", w["token-subscribe-no-token"] = "FCM returned no token when subscribing the user to push.", w["token-subscribe-no-push-set"] = "FCM returned an invalid response when getting an FCM token.", w["use-sw-before-get-token"] = "You must call useServiceWorker() before calling getToken() to ensure your service worker is used.", w["invalid-delete-token"] =
      "You must pass a valid token into deleteToken(), i.e. the token from getToken().", w["delete-token-not-found"] = "The deletion attempt for token could not be performed as the token was not found.", w["bg-handler-function-expected"] = "The input to setBackgroundMessageHandler() must be a function.", w["no-window-client-to-msg"] = "An attempt was made to message a non-existant window client.", w["unable-to-resubscribe"] = "There was an error while re-subscribing the FCM token for push messaging. Will have to resubscribe the user on next visit. {$message}",
      w["no-fcm-token-for-resubscribe"] = "Could not find an FCM token and as a result, unable to resubscribe. Will have to resubscribe the user on next visit.", w["failed-to-delete-token"] = "Unable to delete the currently saved token.", w["no-sw-in-reg"] = "Even though the service worker registration was successful, there was a problem accessing the service worker itself.", w["incorrect-gcm-sender-id"] = "Please change your web app manifest's 'gcm_sender_id' value to '103953800507' to use Firebase messaging.", w);
  var y = {
    userVisibleOnly: !0,
    applicationServerKey: new Uint8Array([4, 51, 148, 247, 223, 161, 235, 177, 220, 3, 162, 94, 21, 113, 219, 72, 211, 46, 237, 237, 178, 52, 219, 183, 71, 58, 12, 143, 196, 204, 225, 111, 60, 140, 132, 223, 171, 182, 102, 62, 242, 12, 212, 139, 254, 227, 249, 118, 47, 20, 28, 99, 8, 106, 111, 45, 177, 26, 149, 176, 206, 55, 192, 156, 110])
  };
  var A = new firebase.INTERNAL.ErrorFactory("messaging", "Messaging", x),
    B = function () {
      this.a = null
    },
    C = function (a) {
      if (a.a) return a.a;
      a.a = new Promise(function (a, c) {
        var b = g.indexedDB.open("fcm_token_details_db", 1);
        b.onerror = function (a) {
          c(a.target.error)
        };
        b.onsuccess = function (b) {
          a(b.target.result)
        };
        b.onupgradeneeded = function (a) {
          a = a.target.result.createObjectStore("fcm_token_object_Store", {
            keyPath: "swScope"
          });
          a.createIndex("fcmSenderId", "fcmSenderId", {
            unique: !1
          });
          a.createIndex("fcmToken", "fcmToken", {
            unique: !0
          })
        }
      });
      return a.a
    },
    D = function (a) {
      a.a ? a.a.then(function (b) {
        b.close();
        a.a = null
      }) : Promise.resolve()
    },
    E = function (a, b) {
      return C(a).then(function (a) {
        return new Promise(function (c, e) {
          var d = a.transaction(["fcm_token_object_Store"]).objectStore("fcm_token_object_Store").index("fcmToken").get(b);
          d.onerror = function (a) {
            e(a.target.error)
          };
          d.onsuccess = function (a) {
            c(a.target.result)
          }
        })
      })
    },
    F = function (a, b) {
      return C(a).then(function (a) {
        return new Promise(function (c, e) {
          var d = [],
            l = a.transaction(["fcm_token_object_Store"]).objectStore("fcm_token_object_Store").openCursor();
          l.onerror = function (a) {
            e(a.target.error)
          };
          l.onsuccess = function (a) {
            (a = a.target.result) ? (a.value.fcmSenderId === b && d.push(a.value), a.continue()) : c(d)
          }
        })
      })
    },
    G = function (a, b, c) {
      var d = v(b.getKey("p256dh")),
        e = v(b.getKey("auth"));
      a = "authorized_entity=" + a + "&" + ("endpoint=" + b.endpoint + "&") + ("encryption_key=" + d + "&") + ("encryption_auth=" + e);
      c && (a += "&pushSet=" + c);
      c = new Headers;
      c.append("Content-Type", "application/x-www-form-urlencoded");
      return fetch("https://fcm.googleapis.com/fcm/connect/subscribe", {
        method: "POST",
        headers: c,
        body: a
      }).then(function (a) {
        return a.json()
      }).then(function (a) {
        if (a.error) throw A.create("token-subscribe-failed", {
          message: a.error.message
        });
        if (!a.token) throw A.create("token-subscribe-no-token");
        if (!a.pushSet) throw A.create("token-subscribe-no-push-set");
        return {
          token: a.token,
          pushSet: a.pushSet
        }
      })
    },
    H = function (a, b, c, d, e, n) {
      var l = {
        swScope: c.scope,
        endpoint: d.endpoint,
        auth: v(d.getKey("auth")),
        p256dh: v(d.getKey("p256dh")),
        fcmToken: e,
        fcmPushSet: n,
        fcmSenderId: b
      };
      return C(a).then(function (a) {
        return new Promise(function (b,
          c) {
          var d = a.transaction(["fcm_token_object_Store"], "readwrite").objectStore("fcm_token_object_Store").put(l);
          d.onerror = function (a) {
            c(a.target.error)
          };
          d.onsuccess = function () {
            b()
          }
        })
      })
    };
  B.prototype.i = function (a, b) {
    return b instanceof ServiceWorkerRegistration ? "string" !== typeof a || 0 === a.length ? Promise.reject(A.create("bad-sender-id")) : F(this, a).then(function (c) {
      if (0 !== c.length) {
        var d = c.findIndex(function (c) {
          return b.scope === c.swScope && a === c.fcmSenderId
        });
        if (-1 !== d) return c[d]
      }
    }).then(function (a) {
      if (a) return b.pushManager.getSubscription().catch(function () {
        throw A.create("get-subscription-failed");
      }).then(function (b) {
        var c;
        if (c = b) c = b.endpoint === a.endpoint && v(b.getKey("auth")) === a.auth &&
          v(b.getKey("p256dh")) === a.p256dh;
        if (c) return a.fcmToken
      })
    }) : Promise.reject(A.create("sw-registration-expected"))
  };
  B.prototype.getSavedToken = B.prototype.i;
  B.prototype.h = function (a, b) {
    var c = this;
    return "string" !== typeof a || 0 === a.length ? Promise.reject(A.create("bad-sender-id")) : b instanceof ServiceWorkerRegistration ? b.pushManager.getSubscription().then(function (a) {
      return a ? a : b.pushManager.subscribe(y)
    }).then(function (d) {
      return G(a, d).then(function (e) {
        return H(c, a, b, d, e.token, e.pushSet).then(function () {
          return e.token
        })
      })
    }) : Promise.reject(A.create("sw-registration-expected"))
  };
  B.prototype.createToken = B.prototype.h;
  B.prototype.deleteToken = function (a) {
    var b = this;
    return "string" !== typeof a || 0 === a.length ? Promise.reject(A.create("invalid-delete-token")) : E(this, a).then(function (a) {
      if (!a) throw A.create("delete-token-not-found");
      return C(b).then(function (b) {
        return new Promise(function (c, d) {
          var e = b.transaction(["fcm_token_object_Store"], "readwrite").objectStore("fcm_token_object_Store").delete(a.swScope);
          e.onerror = function (a) {
            d(a.target.error)
          };
          e.onsuccess = function (b) {
            0 === b.target.result ? d(A.create("failed-to-delete-token")) :
              c(a)
          }
        })
      })
    })
  };
  var I = function (a) {
    var b = this;
    this.a = new firebase.INTERNAL.ErrorFactory("messaging", "Messaging", x);
    if (!a.options.messagingSenderId || "string" !== typeof a.options.messagingSenderId) throw this.a.create("bad-sender-id");
    this.l = a.options.messagingSenderId;
    this.c = new B;
    this.app = a;
    this.INTERNAL = {};
    this.INTERNAL.delete = function () {
      return b.delete
    }
  };
  I.prototype.getToken = function () {
    var a = this,
      b = Notification.permission;
    return "granted" !== b ? "denied" === b ? Promise.reject(this.a.create("notifications-blocked")) : Promise.resolve(null) : this.f().then(function (b) {
      return a.c.i(a.l, b).then(function (c) {
        return c ? c : a.c.h(a.l, b)
      })
    })
  };
  I.prototype.getToken = I.prototype.getToken;
  I.prototype.deleteToken = function (a) {
    var b = this;
    return this.c.deleteToken(a).then(function () {
      return b.f()
    }).then(function (a) {
      return a ? a.pushManager.getSubscription() : null
    }).then(function (a) {
      if (a) return a.unsubscribe()
    })
  };
  I.prototype.deleteToken = I.prototype.deleteToken;
  I.prototype.f = function () {
    throw this.a.create("should-be-overriden");
  };
  I.prototype.requestPermission = function () {
    throw this.a.create("only-available-in-window");
  };
  I.prototype.useServiceWorker = function () {
    throw this.a.create("only-available-in-window");
  };
  I.prototype.useServiceWorker = I.prototype.useServiceWorker;
  I.prototype.onMessage = function () {
    throw this.a.create("only-available-in-window");
  };
  I.prototype.onMessage = I.prototype.onMessage;
  I.prototype.onTokenRefresh = function () {
    throw this.a.create("only-available-in-window");
  };
  I.prototype.onTokenRefresh = I.prototype.onTokenRefresh;
  I.prototype.setBackgroundMessageHandler = function () {
    throw this.a.create("only-available-in-sw");
  };
  I.prototype.setBackgroundMessageHandler = I.prototype.setBackgroundMessageHandler;
  I.prototype.delete = function () {
    D(this.c)
  };
  var J = function (a, b) {
    var c = {};
    return c["firebase-messaging-msg-type"] = a, c["firebase-messaging-msg-data"] = b, c
  };
  var K = self,
    P = function (a) {
      I.call(this, a);
      var b = this;
      this.a = new firebase.INTERNAL.ErrorFactory("messaging", "Messaging", x);
      K.addEventListener("push", function (a) {
        return L(b, a)
      }, !1);
      K.addEventListener("pushsubscriptionchange", function (a) {
        return N(b, a)
      }, !1);
      K.addEventListener("notificationclick", function (a) {
        return O(b, a)
      }, !1);
      this.b = null
    };
  f(P, I);
  var L = function (a, b) {
      var c;
      try {
        c = b.data.json()
      } catch (e) {
        return
      }
      var d = Q().then(function (b) {
        if (b) {
          if (c.notification || a.b) return R(a, c)
        } else {
          if ((b = c) && "object" === typeof b.notification) {
            var d = Object.assign({}, b.notification),
              e = {};
            d.data = (e.FCM_MSG = b, e);
            b = d
          } else b = void 0;
          if (b) return K.registration.showNotification(b.title || "", b);
          if (a.b) return a.b(c)
        }
      });
      b.waitUntil(d)
    },
    N = function (a, b) {
      var c = a.getToken().then(function (b) {
        if (!b) throw a.a.create("no-fcm-token-for-resubscribe");
        var c = a.c;
        return E(c, b).then(function (b) {
          if (!b) throw a.a.create("invalid-saved-token");
          return K.registration.pushManager.subscribe(y).then(function (a) {
            return G(b.w, a, b.v)
          }).catch(function (d) {
            return c.deleteToken(b.A).then(function () {
              throw a.a.create("unable-to-resubscribe", {
                message: d
              });
            })
          })
        })
      });
      b.waitUntil(c)
    },
    O = function (a, b) {
      if (b.notification && b.notification.data && b.notification.data.FCM_MSG) {
        b.stopImmediatePropagation();
        b.notification.close();
        var c = b.notification.data.FCM_MSG,
          d = c.notification.click_action;
        if (d) {
          var e = S(d).then(function (a) {
            return a ? a : K.clients.openWindow(d)
          }).then(function (b) {
            if (b) return delete c.notification,
              T(a, b, J("notification-clicked", c))
          });
          b.waitUntil(e)
        }
      }
    };
  P.prototype.setBackgroundMessageHandler = function (a) {
    if (a && "function" !== typeof a) throw this.a.create("bg-handler-function-expected");
    this.b = a
  };
  P.prototype.setBackgroundMessageHandler = P.prototype.setBackgroundMessageHandler;
  var S = function (a) {
      var b = (new URL(a)).href;
      return K.clients.matchAll({
        type: "window",
        includeUncontrolled: !0
      }).then(function (a) {
        for (var c = null, e = 0; e < a.length; e++)
          if ((new URL(a[e].url)).href === b) {
            c = a[e];
            break
          }
        if (c) return c.focus(), c
      })
    },
    T = function (a, b, c) {
      return new Promise(function (d, e) {
        if (!b) return e(a.a.create("no-window-client-to-msg"));
        b.postMessage(c);
        d()
      })
    },
    Q = function () {
      return K.clients.matchAll({
        type: "window",
        includeUncontrolled: !0
      }).then(function (a) {
        return a.some(function (a) {
          return "visible" ===
            a.visibilityState
        })
      })
    },
    R = function (a, b) {
      return K.clients.matchAll({
        type: "window",
        includeUncontrolled: !0
      }).then(function (c) {
        var d = J("push-msg-received", b);
        return Promise.all(c.map(function (b) {
          return T(a, b, d)
        }))
      })
    };
  P.prototype.f = function () {
    return Promise.resolve(K.registration)
  };
  var V = function (a) {
    I.call(this, a);
    var b = this;
    this.j = null;
    this.m = firebase.INTERNAL.createSubscribe(function (a) {
      b.j = a
    });
    this.s = null;
    this.o = firebase.INTERNAL.createSubscribe(function (a) {
      b.s = a
    });
    U(this)
  };
  f(V, I);
  V.prototype.getToken = function () {
    var a = this;
    return "serviceWorker" in navigator && "PushManager" in window && "Notification" in window && ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification") && PushSubscription.prototype.hasOwnProperty("getKey") ? W(this).then(function () {
      return I.prototype.getToken.call(a)
    }) : Promise.reject(this.a.create("unsupported-browser"))
  };
  V.prototype.getToken = V.prototype.getToken;
  var W = function (a) {
    if (a.g) return a.g;
    var b = document.querySelector('link[rel="manifest"]');
    b ? a.g = fetch(b.href).then(function (a) {
      return a.json()
    }).catch(function () {
      return Promise.resolve()
    }).then(function (b) {
      if (b && b.gcm_sender_id && "103953800507" !== b.gcm_sender_id) throw a.a.create("incorrect-gcm-sender-id");
    }) : a.g = Promise.resolve();
    return a.g
  };
  V.prototype.requestPermission = function () {
    var a = this;
    return "granted" === Notification.permission ? Promise.resolve() : new Promise(function (b, c) {
      var d = function (d) {
          return "granted" === d ? b() : "denied" === d ? c(a.a.create("permission-blocked")) : c(a.a.create("permission-default"))
        },
        e = Notification.requestPermission(function (a) {
          e || d(a)
        });
      e && e.then(d)
    })
  };
  V.prototype.requestPermission = V.prototype.requestPermission;
  V.prototype.useServiceWorker = function (a) {
    if (!(a instanceof ServiceWorkerRegistration)) throw this.a.create("sw-registration-expected");
    if ("undefined" !== typeof this.b) throw this.a.create("use-sw-before-get-token");
    this.b = a
  };
  V.prototype.useServiceWorker = V.prototype.useServiceWorker;
  V.prototype.onMessage = function (a, b, c) {
    return this.m(a, b, c)
  };
  V.prototype.onMessage = V.prototype.onMessage;
  V.prototype.onTokenRefresh = function (a, b, c) {
    return this.o(a, b, c)
  };
  V.prototype.onTokenRefresh = V.prototype.onTokenRefresh;
  var X = function (a, b) {
    var c = b.installing || b.waiting || b.active;
    return new Promise(function (d, e) {
      if (c)
        if ("activated" === c.state) d(b);
        else if ("redundant" === c.state) e(a.a.create("sw-reg-redundant"));
      else {
        var n = function () {
          if ("activated" === c.state) d(b);
          else if ("redundant" === c.state) e(a.a.create("sw-reg-redundant"));
          else return;
          c.removeEventListener("statechange", n)
        };
        c.addEventListener("statechange", n)
      } else e(a.a.create("no-sw-in-reg"))
    })
  };
  V.prototype.f = function () {
    var a = this;
    if (this.b) return X(this, this.b);
    this.b = null;
    return navigator.serviceWorker.register("/firebase-messaging-sw.js", {
      scope: "/firebase-cloud-messaging-push-scope"
    }).catch(function (b) {
      throw a.a.create("failed-serviceworker-registration", {
        browserErrorMessage: b.message
      });
    }).then(function (b) {
      return X(a, b).then(function () {
        a.b = b;
        b.update();
        return b
      })
    })
  };
  var U = function (a) {
    "serviceWorker" in navigator && navigator.serviceWorker.addEventListener("message", function (b) {
      if (b.data && b.data["firebase-messaging-msg-type"]) switch (b = b.data, b["firebase-messaging-msg-type"]) {
        case "push-msg-received":
        case "notification-clicked":
          a.j.next(b["firebase-messaging-msg-data"])
      }
    }, !1)
  };
  if (!(firebase && firebase.INTERNAL && firebase.INTERNAL.registerService)) throw Error("Cannot install Firebase Messaging - be sure to load firebase-app.js first.");
  firebase.INTERNAL.registerService("messaging", function (a) {
    return self && "ServiceWorkerGlobalScope" in self ? new P(a) : new V(a)
  }, {
    Messaging: V
  });
}).call(this);

/*
 * ACM config and init with Firebase Cloud Messaging for Alibaba.com
 * @file firebase-app-messaging-config-and-init.js
 * @author nuo.xun@alibaba-inc.com
 * @date 2017.3.20
 */
firebase.initializeApp({
  apiKey: "AIzaSyBLOdfl6ag8nAqP5snyOy4_iDxtW1nCUwg",
  messagingSenderId: "1040632223304"
});
