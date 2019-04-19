(function () {
  var scheme = (("https:" == document.location.protocol) ? "https" : "http");
  var adnxs_domain = 'secure.adnxs.com';
  var aol_domain = 'secure.leadback.advertising.com';
  var rule = ["c75bfc40", "*/adsl/*"];
  if (scheme=='http') { adnxs_domain = 'ib.adnxs.com'; aol_domain = 'leadback.advertising.com';}
  var el = document.createElement("div");
  el.style["width"] = "1px";
  el.style["height"] = "1px";
  el.style["display"] = "inline";
  el.style["position"] = "absolute";
  var content = unescape('%3cimg%20height%3d%221%22%20width%3d%221%22%20style%3d%22border-style%3anone%3b%22%20alt%3d%22%22%20src%3d%22https%3a//d.adroll.com/cm/r/out%3fadvertisable%3dQB3L5TKYDFBQBFBQ6XYGXX%22/%3e%0a%3cimg%20height%3d%221%22%20width%3d%221%22%20style%3d%22border-style%3anone%3b%22%20alt%3d%22%22%20src%3d%22https%3a//d.adroll.com/cm/b/out%3fadvertisable%3dQB3L5TKYDFBQBFBQ6XYGXX%22/%3e%0a%3cimg%20height%3d%221%22%20width%3d%221%22%20style%3d%22border-style%3anone%3b%22%20alt%3d%22%22%20src%3d%22https%3a//d.adroll.com/cm/x/out%3fadvertisable%3dQB3L5TKYDFBQBFBQ6XYGXX%22/%3e%0a%3cimg%20height%3d%221%22%20width%3d%221%22%20style%3d%22border-style%3anone%3b%22%20alt%3d%22%22%20src%3d%22https%3a//d.adroll.com/cm/l/out%3fadvertisable%3dQB3L5TKYDFBQBFBQ6XYGXX%22/%3e%0a%3cimg%20height%3d%221%22%20width%3d%221%22%20style%3d%22border-style%3anone%3b%22%20alt%3d%22%22%20src%3d%22https%3a//d.adroll.com/cm/o/out%3fadvertisable%3dQB3L5TKYDFBQBFBQ6XYGXX%22/%3e%0a%3cimg%20height%3d%221%22%20width%3d%221%22%20style%3d%22border-style%3anone%3b%22%20alt%3d%22%22%20src%3d%22https%3a//d.adroll.com/cm/u/out%3fadvertisable%3dQB3L5TKYDFBQBFBQ6XYGXX%22/%3e%0a%3cimg%20height%3d%221%22%20width%3d%221%22%20style%3d%22border-style%3anone%3b%22%20alt%3d%22%22%20src%3d%22https%3a//d.adroll.com/cm/g/out%3fadvertisable%3dQB3L5TKYDFBQBFBQ6XYGXX%26google_nid%3dadroll5%22/%3e%0a');


  if (__adroll.consent_allowed(__adroll.consent_networks.facebook)) {
      !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
      n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
      document,'script','//connect.facebook.net/en_US/fbevents.js');
  }

  try {
      try {
          
(function () {
    var queue = [];
    var start = new Date().getTime();
    var lastMouseSnap = 0;
    var mousemoveDelay = 100;
    var mousePath = "";
    var mlength = 255;

    var focused = document.hasFocus();
    var focusTimeOnPage = 0;
    var outfocusTimeOnPage = 0;

    var focusedFlushInterval = 10000;
    var unfocusedFlushInterval = 60000;
    var flushInterval = focused === true ? focusedFlushInterval : unfocusedFlushInterval;
    var flushTimeout;

    var scrollTimeout;
    var ieVers = 0, maxUrl = 3900;
    var ve = navigator.appVersion;
    if (ve) {
        (ve.indexOf("MSIE 6.") > -1 ? 
            (ieVers = 6, maxUrl = 1700) : 
            ve.indexOf("MSIE 7.") > -1 ? 
                (ieVers = 7, maxUrl = 1900) : 
                ve.indexOf("MSIE 8.") > -1 && (ieVer = 8));
    }
    var adservers = "https://d.adroll.com";
    var onp_path = "/onp/" + adroll_adv_id + "/" + adroll_pix_id;

    function trunc(s, at) {
        return isString(s) ? s.slice(0, at) : s
    }

    function isObject(o) {
        return o && "object" == typeof o || false
    }

    function isString(s) {
        return "string" == typeof s || isObject(s) && Object.prototype.toString(s) == "[object String]" || false
    }


    function getTarget(evt) {
        return evt.target || evt.srcElement;
    }
    function getClassName(t) {
        var e = function(t) {
            return 1 === t.nodeType && "http://www.w3.org/2000/svg" === t.namespaceURI
        };
        if (void 0 === t) return void 0
        return (e(t) ? t.className ? t.className.baseVal : t.getAttribute("class") : t.className) || ""
    }
    function getAttr(t, e) {
        return "form" === t.tagName.toLowerCase() ? t.getAttribute(e) || "" : t[e]
    }
    function getPath(t) {
        var e, r, o, u;
        for (r = ""; t && t.tagName && "BODY" !== t.tagName && "HTML" !== t.tagName && (e = "@" + t.tagName.toLowerCase() + ";", u = getAttr(t, "id"), u && (e += "#" + u.replace(/\s/g, "") + ";"), o = getClassName(t), o && (e += "." + o.split(/\s+/).sort().join(";.") + ";"), e += "|", !(r.length + e.length > 1024));) r = e + r, t = t.parentElement;
        return r
    }

    function cleanAndTrim(t) {
        if (t == undefined) return t;
        return t = t.toString(), t.length > 255 && (t = t.slice(0, 255).split(" ").slice(0, -1).join(" ")), t.replace(/[\(\)\!\@\#\$\%\^\&\*]/g, "")
    }


    function queueEvent(evt) {
        var evt = evt || window.event,
            target = getTarget(evt),
            evtName = trunc("mouseup" === evt.type ? "click" : evt.type, 255),
            className = getClassName(target),
            // This is cool but invasive
            // tagValue = trunc(content(target).replace(/^\s+|\s+$/g, ""), 64),
            tagPath = evt.type === "scroll" ? "" : getPath(target);

        var ev = {}

        if (target != undefined && (evtName == "click" || evtName == "change" || evtName == "submit")) {
            ev['i'] = trunc(getAttr(target, "id"), 255);
            ev['c'] = cleanAndTrim(className);
            ev['n'] = trunc(target.tagName.toLowerCase(), 255);
        }
        switch (evtName) {
            case "click":
                ev['t'] = 'cli';
                ev['p'] = tagPath;
                ev['h'] = trunc(findAHRef(target), 1024);
                break;
            case "change":
                ev['t'] = 'cha';
                ev['p'] = tagPath;
                break;
            case "scroll":
                ev['t'] = 'scr';
                ev['x'] = evt.x;
                ev['y'] = evt.y;
                break;
            case "mousemove":
                if (queue.length && queue[queue.length-1].t == 'mmv') {
                    ev = undefined;
                    queue[queue.length-1].m += "x"+Math.floor(evt.clientX/5).toString(16)+"y"+Math.floor(evt.clientY/5).toString(16)+".";
                }
                else {
                    ev['t'] = 'mmv';
                    ev['m'] = "x"+Math.floor(evt.clientX/5).toString(16)+"y"+Math.floor(evt.clientY/5).toString(16)+".";
                }
                break;
            case "submit":
                ev['t'] = 'sub';
                ev['p'] = tagPath;
                break;
            case "top":
                ev['t'] = 'top';
                ev['f'] = evt.time;
                break;
            case "focus": case "focusin": case "pageshow":
                ev['t'] = 'foc'
                break;
            case "blur": case "focusout": case "pagehide":
                ev['t'] = 'blu'
                break;
            case "error":
                ev['t'] = 'err'
                break;
            default:
                return;
        }
        if (ev != undefined) {
            var toQueue = "ev=" + encodeURIComponent(objToString(ev));
            if ((queue.join("&").length + toQueue.length) > maxUrl) {
                flush();
            }
            queue.push(toQueue);
            if (evtName == 'click') {
                flush();
            }
        }
    }

    function clearQueue() {
        queue = [];
    }

    function onClick(evt) {
        var target, btn;
        if (evt = evt || window.event,
            button = evt.which || evt.button,
            target = getTarget(evt),
            (!ieVers || target === evt.currentTarget) && target && target.tagName) {
            if ("click" === evt.type) {
                queueEvent(evt)
            }
        }
    }

    function onSubmit(evt) {
        evt = evt || window.event,
        queueEvent(evt)
    }

    function findAHRef(t) {
        for (var e = null; t && "BODY" !== t.tagName && "HTML" !== t.tagName;) {
            if (e = t.getAttribute("href")) return e;
            t = t.parentElement
        }
        return e
    }

    function onScroll(evt) {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(saveScrollPos, 500)
    }

    function saveScrollPos() {
        queueEvent({"type": "scroll", "x": window.pageXOffset, "y": window.pageYOffset});
    }

    function onMousemove(evt) {
        evt = evt || window.event;
        var now = new Date().getTime();
        if (now - lastMouseSnap > mousemoveDelay) {
            queueEvent(evt);
            lastMouseSnap = now;
        }
    }

    function onFocusIn(evt) {
        if (getTarget(evt) != window) { return; }
        focused = true;
        start = new Date().getTime();
        queueEvent(evt);
        flushInterval = focusedFlushInterval;
        clearTimeout(flushTimeout);
        flush();
    }

    function onFocusOut(evt) {
        if (getTarget(evt) != window) { return; }
        queueEvent(evt);
        focused = false;
        flush();
        // Take this out and it will continue to sync even out of focus, but that's not useful.
        clearTimeout(flushTimeout);
        flushInterval = unfocusedFlushInterval;
    }

    function listen(tag, evt, handler, args) {
        document.addEventListener ? tag.addEventListener(evt, handler, args) : document.attachEvent ? tag.attachEvent("on" + evt, function() {
            var e = window.event;
            e.currentTarget = tag;
            e.target = e.srcElement;
            handler.call(tag, e)
        }) : tag["on" + evt] = handler
    }

    function unlisten(tag, evt, handler, args) {
        return tag.removeEventListener ? (tag.removeEventListener(evt, handler, args), !0) : t.detachEvent ? t.detachEvent("on" + evt, handler) : void(tag["on" + evt] == handler && delete tag["on" + evt])
    }

    function listenAll() {

        function wrapException(func) {
            return function wrapper(evt) {
                try {
                    return func(evt);
                } catch(e) {}
            }
        }
        try {
            document.addEventListener("change", wrapException(queueEvent), true);
            document.addEventListener("click", wrapException(onClick), true);
            document.addEventListener("submit", wrapException(onSubmit), true);
            document.addEventListener("scroll", wrapException(onScroll), true);
            document.addEventListener("mousemove", wrapException(onMousemove), true);
            window.addEventListener("beforeunload", wrapException(flush), true);
            window.addEventListener("focus", wrapException(onFocusIn), true);
            window.addEventListener("blur", wrapException(onFocusOut), true);
        } catch(e) {}


        var oldonerror = window.onerror;
        window.onerror = function() {
            queueEvent({"type": "error",
                        "msg": arguments[0], 
                        "url": arguments[1],
                        "lineno": arguments[2],
                        "colno": arguments[3],
                        "error": arguments[4]});
            if (oldonerror) oldonerror.apply(this, arguments);
            return false;
        };

    };

    function objToString(obj, i) {
        var str = "";
        for (var key in obj) {
            if (!obj.hasOwnProperty(key)) continue
            if (!obj[key]) continue
            if (str != "") {
                str += "&";
            }
            str += key + "=" + encodeURIComponent(obj[key]);
        }
        return str;
    }


    function flush() {
        try {
            if (focused) {
                var now = new Date().getTime();
                focusTimeOnPage = focusTimeOnPage + parseInt((now - start)/1000);
                start = now;
                queue.splice(0, 0, "ev=" + encodeURIComponent("t=top&f="+focusTimeOnPage));
            }
            send(queue);
            clearQueue();
            clearTimeout(flushTimeout);
            flushTimeout = setTimeout(flush, flushInterval);
        } catch(e) {}
    }

    function send(paramsList) {
        var toSend = paramsList.join("&");
        if (toSend.length>0) {
            var fullPath = adservers + onp_path + "?" + "pv=" + __adroll.pv + "&" + paramsList.join("&");
            var img = new window.Image();
            img.src = fullPath;
        }
    }


    listenAll();
    flush();

})();

      } catch(e) {}
      try {
          
(function() {
var rtb = document.createElement("div");
rtb.style["width"] = "1px";
rtb.style["height"] = "1px";
rtb.style["display"] = "inline";
rtb.style["position"] = "absolute";
rtb.innerHTML = "<img height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\"src=\"https://d.adroll.com/cm/aol/out?advertisable=QB3L5TKYDFBQBFBQ6XYGXX\"/><img height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\"src=\"https://d.adroll.com/cm/b/out?advertisable=QB3L5TKYDFBQBFBQ6XYGXX\"/><img height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\"src=\"https://d.adroll.com/cm/g/out?advertisable=QB3L5TKYDFBQBFBQ6XYGXX\"/><img height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\"src=\"https://d.adroll.com/cm/index/out?advertisable=QB3L5TKYDFBQBFBQ6XYGXX\"/><img height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\"src=\"https://d.adroll.com/cm/l/out?advertisable=QB3L5TKYDFBQBFBQ6XYGXX\"/><img height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\"src=\"https://d.adroll.com/cm/n/out?advertisable=QB3L5TKYDFBQBFBQ6XYGXX\"/><img height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\"src=\"https://d.adroll.com/cm/narrative/out?advertisable=QB3L5TKYDFBQBFBQ6XYGXX\"/><img height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\"src=\"https://d.adroll.com/cm/o/out?advertisable=QB3L5TKYDFBQBFBQ6XYGXX\"/><img height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\"src=\"https://d.adroll.com/cm/outbrain/out?advertisable=QB3L5TKYDFBQBFBQ6XYGXX\"/><img height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\"src=\"https://d.adroll.com/cm/pubmatic/out?advertisable=QB3L5TKYDFBQBFBQ6XYGXX\"/><img height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\"src=\"https://d.adroll.com/cm/r/out?advertisable=QB3L5TKYDFBQBFBQ6XYGXX\"/><img height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\"src=\"https://d.adroll.com/cm/taboola/out?advertisable=QB3L5TKYDFBQBFBQ6XYGXX\"/><img height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\"src=\"https://d.adroll.com/cm/triplelift/out?advertisable=QB3L5TKYDFBQBFBQ6XYGXX\"/><img height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\"src=\"https://d.adroll.com/cm/u/out?advertisable=QB3L5TKYDFBQBFBQ6XYGXX\"/><img height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\"src=\"https://d.adroll.com/cm/x/out?advertisable=QB3L5TKYDFBQBFBQ6XYGXX\"/>";
__adroll._head().appendChild(rtb);
})();

      } catch(e) {}
      try {
          
(function() {
  var ua = window.navigator.userAgent.toLowerCase();
  if (window === window.top && ua.indexOf('safari') !== -1 && ua.indexOf('chrome') === -1 && ua.indexOf('crios') === -1) {
    window.document.body.className += ' adroll_safari_light_theme';
    var b = window.document.createElement('script');
    b.language = 'javascript';
    b.src = '//d.adroll.com/bounce/pre/QB3L5TKYDFBQBFBQ6XYGXX/Y2UYBRY2CNBOTH74VIHUNU/?d=' + encodeURIComponent('//s.adroll.com/j/bounce.js');
    window.__adroll._head().appendChild(b);
  }
})();

      } catch(e) {}
      try {
          if (__adroll.consent_allowed(__adroll.consent_networks.facebook)) {
    if(typeof __adroll.fb === 'undefined'){
    fbq('init', '122784941419741');
    fbq('set', 'autoConfig', 'false', '122784941419741');
    __adroll.fb=true;

    var __fbcd = {segment_eid: "5ATEWST3JZHGVOEOA7FUPE,VZRQ7YE2Q5HCLBHPGZCAM6,GCPWSVDXDFCGTNVVF5K4WB"};
    for (var prop in __adroll.get_external_data()){
        __fbcd['ar_' + prop] = __adroll.get_external_data()[prop];
    }

    fbq('track', "PageView", __fbcd);


    } else {
    var __fbcd = {event: "EventSegment", segment_eid: "5ATEWST3JZHGVOEOA7FUPE,VZRQ7YE2Q5HCLBHPGZCAM6,GCPWSVDXDFCGTNVVF5K4WB"};
    for (var prop in __adroll.get_external_data()){
        __fbcd['ar_' + prop] = __adroll.get_external_data()[prop];
    }

    fbq('track', "CustomEvent", __fbcd);

    }
}

      } catch(e) {}
  } catch(e) {}


  var r = Math.random()*10000000000000000;
  content = content.replace(/\[ord\]/gi, r);
  content = content.replace(/\[protocol\]/gi, scheme);
  content = content.replace(/\[adnxs_domain\]/gi, adnxs_domain);
  content = content.replace(/\[aol_domain\]/gi, aol_domain);
  var adroll_tpc = __adroll._global('adroll_tpc');
  if (adroll_tpc) {
    var srv_parts = __adroll._srv().split('?');
    var srv_host = srv_parts[0].substr(srv_parts[0].indexOf(':') + 1);
    var srv_re = new RegExp(srv_host + '([^\?\"\'\>\#\S]+)\\?*', 'gi');
    content = content.replace(srv_re, srv_host + '$1?' + srv_parts[1] + '&');
  }
  content = __adroll.replace_external_data(content);
  el.innerHTML = content;
  __adroll._head().appendChild(el);
  if (typeof __adroll.set_pixel_cookie != 'undefined') {__adroll.set_pixel_cookie(adroll_adv_id, adroll_pix_id, "5ATEWST3JZHGVOEOA7FUPE");}
}());
