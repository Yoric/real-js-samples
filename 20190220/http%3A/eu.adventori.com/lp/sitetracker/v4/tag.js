(function () {
try {

  var undefined;
  var version = 1;
  var W = window;
  var D = W.document;
  var C = W.console;
  var navigator = W.navigator;
  var protocol = 'https://';
  var hostname = 'adventori.com';
  var stringDataPrefix = 's_';
  var arrayDataPrefix = 'a_';
  var location;
  var referrer;
  var errors = {};
  var tracker;
  var debug;
  var q;
  var Wq;
  var w;
  var W0 = W;
  var D0 = D;

  var _objectProto = Object.prototype,
    _toString = _objectProto.toString;

  try {
    if (W._adv_inDapIF && W.parent.ADventori) {
      W0 = W.parent;
      D0 = W0.document;
    }
  } catch(e) {}

  try {
    try {
      for (w = W; w != w.top; w = w.parent) {(w.parent.document.domain)}
    } catch(e) {}
    location = (w == w.top) ? w.location.href : ((w.parent == w.top) ? w.document.referrer : null);
    referrer = (w == w.top) ? w.document.referrer : null;
  } catch(e) {}

  var log = function (l) {
    try {
      C && C[l] && C[l].apply(C, ['[ADventori]'].concat([].slice.call(arguments, 1)));
    } catch(e) {}
  };

  var utils = {
    _class2type: (function () {
      var class2type = {};
      var classes = ['Boolean', 'Number', 'String', 'Function', 'Array', 'Date', 'RegExp', 'Object', 'Error', 'Symbol'];
      for (var i = 0; i < classes.length; i++) {
        class2type['[object ' + classes[i] + ']'] = classes[i].toLowerCase();
      }
      return class2type;
    })(),
    type: function (o) {
      if (o == null) {
        return o + '';
      }
      return typeof o === 'object' || typeof o === 'function' ?
          utils._class2type[_toString.call(o)] || 'object' :
          typeof o;
    },
    extend: function (r) {
      var o = arguments;
      for (var i = 1; i < o.length; i++) {
        for (var key in o[i]) {
          if (o[i][key] !== undefined) {
            r[key] = o[i][key];
          }
        }
      }
      return r;
    },
    rand: function () {
      return Math.floor(Math.random() * 2147483647);
    },
    trim: function (o) {
      var type = utils.type(o);
      return (
        type == 'string' ? o.replace(/^[\s\xa0]+|[\s\xa0]+$/g, '') :
        type == 'boolean' ? (+o) :
        o
      );
    },
    toQueryString: function (o) {
      var params = [];
      for (var key in o) {
        if (key != null && o[key] != null) {
          params.push(encodeURIComponent(key) + '=' + encodeURIComponent(utils.trim(o[key])));
        }
      }
      return params.join('&');
    },
    toArrayString: function (o) {
      var params = [];
      for (var i = 0; i < o.length; i++) {
        params.push(encodeURIComponent(utils.trim(o[i])));
      }
      return params.join('|');
    }
  };

  var dom = {
    firePixel: function (url, data) {
      url = data ? (url + '?' + data) : url;
      var i = D.createElement('img');
      i.width = 1;
      i.height = 1;
      i.src = url;
      return true;
    },
    getScript: function (url, data) {
      url = data ? (url + '?' + data) : url;
      var s = D.createElement('script');
      s.async = true;
      s.src = url;
      var sc = D.getElementsByTagName('script')[0];
      sc.parentNode.insertBefore(s, sc);
      return true;
    },
    sendBeacon: function (url, data) {
      try {
        if (navigator && navigator.sendBeacon) {
          return navigator.sendBeacon(url, data);
        }
      } catch(e) {}
      return false;
    }
  };

  var track = {
    transport: 'js',
    nocookie: false,
    collect: function (params, opts) {
      opts = opts || {};
      params = utils.extend({v: version}, params);
      params.dl = params.dl || location;
      params.dr = params.dr || referrer;
      var path = opts.path || '/t/collect';
      var url = protocol + hostname + path;
      var data = utils.toQueryString(params);
      var nocookie = track.nocookie ? ('&noc=' + track.nocookie) : '';
      var cachebuster = '&z=' + utils.rand();
      var transport = opts.transport || track.transport;
      if (transport == 'js') {
        dom.getScript(url, data + '&f=js' + nocookie + cachebuster);
      } else if (transport == 'beacon') {
        dom.sendBeacon(url, data + cachebuster) || dom.firePixel(url, data + '&f=gif' + cachebuster);
      } else {
        dom.firePixel(url, data + '&f=gif' + cachebuster);
      }
      debug && log('info', '#send', params);
      if (data.length > 2036) {
        debug && log('warn', '[Too many data]', {len: data.length, max: 2036});
      }
    },
    error: function (params, e, et) {
      params = utils.extend({v: version}, params);
      params.et = et || 'AdDataErrorTag';
      params.ed = ((e && e.name ? (e.name + ': ' + e.message) : e) + '').slice(0, 1000);
      params.dl = params.dl || location;
      params.dr = params.dr || referrer;
      var key = params.et + '~' + params.ed;
      if (!errors[key]) {
        errors[key] = true;
        dom.firePixel(protocol + hostname + '/t/error', utils.toQueryString(params) + '&z=' + utils.rand());
      }
      var type = utils.type(e);
      log('error', et ? ('[' + et + ']') : '', type != 'error' ? params.ed : '', type != 'string' ? e : '');
    }
  };

  var doc = {
    cookies: {
      get: function(a){try{var b=[],c=D.cookie.split(";");a=new RegExp("^\\s*"+a+"=\\s*(.*?)\\s*$");for(var d=0;d<c.length;d++){var e=c[d].match(a);e&&b.push(e[1])}return b[b.length-1]}catch(e){}}
    },
    url: {
      get: function(a,b){a=new RegExp("[?&#]"+a+"=([^&#]*)").exec(b||location);return a&&a[1]}
    }
  };

  try {
    var Tracker = function (bid, fields) {
      this.params = {
        bid: bid,
        uid: doc.cookies.get('adv_ui'),
        cid: doc.url.get('adv_ui'),
        cs: doc.url.get('adv_src'),
        iid: doc.url.get('adv_iid')
      };
      this.defaults = {
        location: location,
        referrer: referrer
      };
      this.fields = {};
      this.data = [];
      this._set(fields);
      debug = debug || doc.url.get('adv_debug');
    };
    Tracker.fields = {
      params: {
        location: 'dl',
        referrer: 'dr'
      },
      opts: {
        transport: 1,
        dwellTime: 1
      }
    };

    Tracker.prototype._getWithDefault = function (fieldName, fieldValue) {
      return ((fieldName in this.defaults) && (!fieldValue || fieldValue == 'auto')) ? this.defaults[fieldName] : fieldValue;
    };
    Tracker.prototype._set = function (fieldNameOrObject, fieldValue) {
      if (!fieldNameOrObject) {
        return;
      }
      if (utils.type(fieldNameOrObject) == 'object') {
        for (var fieldName in fieldNameOrObject) {
          this.fields[fieldName] = this._getWithDefault(fieldName, fieldNameOrObject[fieldName]);
        }
      } else {
        this.fields[fieldNameOrObject] = this._getWithDefault(fieldNameOrObject, fieldValue);
      }
    };
    Tracker.prototype._formatData = function (data) {
      var params = {};
      for (key in data) {
        if (utils.type(data[key]) == 'array') {
          params[arrayDataPrefix + key] = utils.toArrayString(data[key]);
        } else {
          params[stringDataPrefix + key] = data[key];
        }
      }
      return params;
    };
    Tracker.prototype._sendDwellTime = function (hitType, fields) {
      var params = utils.extend({}, this.params);
      var opts = {
        path: '/t/dwellTime',
        transport: 'beacon'
      };
      var startTime = 0;
      var dwellTime = 0;
      var resetTime = function() {
        startTime = (1*new Date());
      };
      var addTime = function() {
        if (startTime) {
          dwellTime += (1*new Date()) - startTime;
          startTime = 0;
        }
      };
      var onVisibilityChange = function() {
        D0.hidden ? addTime() : resetTime();
      };
      onVisibilityChange();
      if (D0.addEventListener) {
        D0.addEventListener('visibilitychange', onVisibilityChange, false);
      }
      var _onbeforeunload = W.onbeforeunload;
      W.onbeforeunload = function() {
        addTime();
        if (W.adv_ui && W.adv_eid && dwellTime) {
          params.uid = W.adv_ui;
          params.eid = W.adv_eid;
          params.dwt = dwellTime;
          track.collect(params, opts);
        }
        if (_onbeforeunload) {
          _onbeforeunload();
        }
      };
    };
    Tracker.prototype.create = function (bid, fields) {
      tracker = new Tracker(bid, fields);
      debug && log('info', '#create', tracker.fields, tracker.params);
    };
    Tracker.prototype.get = function (fieldName) {
      debug && log('info', '#get', this.fields);
      return this.fields[fieldName];
    };
    Tracker.prototype.set = function (fieldNameOrObject, fieldValue) {
      this._set(fieldNameOrObject, fieldValue);
      debug && log('info', '#set', this.fields);
    };
    Tracker.prototype.addData = function (data) {
      if (utils.type(data) != 'object') {
        this.error({
          name: 'Invalid data',
          message: data,
          args: arguments
        }, 'AdDataErrorTagAssert');
        return;
      }
      this.data.push(data);
      debug && log('info', '#addData', data);
    };
    Tracker.prototype.send = function (hitType, fields) {
      if (!hitType) {
        this.error({
          name: 'Invalid hitType',
          message: hitType,
          args: arguments
        }, 'AdDataErrorTagAssert');
        return;
      }
      var params = utils.extend({}, this.params);
      var mergedFields = utils.extend({}, this.fields, fields);
      var opts = {};
      var key;
      var data;
      params.evt = hitType;
      for (key in Tracker.fields.params) {
        params[Tracker.fields.params[key]] = this._getWithDefault(key, mergedFields[key]);
      }
      for (key in Tracker.fields.opts) {
        opts[key] = this._getWithDefault(key, mergedFields[key]);
      }
      if (this.data.length) {
        while (data = this.data.shift()) {
          track.collect(utils.extend({}, params, this._formatData(data)), opts);
        }
      } else {
        track.collect(params, opts);
      }
      if (opts.dwellTime) {
        this._sendDwellTime(hitType, fields);
      }
    };
    Tracker.prototype.error = function (e, et) {
      track.error(this.params, e, et);
    };

    q = function () {
      q.poll.apply(q, [arguments]);
    };
    q.poll = function () {
      try {
        var args = [].slice.call(arguments);
        var arg;
        var type;
        while (arg = args.shift()) {
          debug && log('info', '#q', arg);
          type = utils.type(arg[0]);
          if (type != 'function' && !Tracker.prototype[arg[0]]) {
            track.error({}, {
              name: 'Invalid command',
              message: 'No command found: ' + arg[0],
              args: arg
            }, 'AdDataErrorTagAssert');
          } else if (!tracker && arg[0] != 'create') {
            track.error({}, {
              name: 'Invalid command',
              message: 'No tracker created: ' + arg[0],
              args: arg
            }, 'AdDataErrorTagAssert');
          } else if (type == 'function') {
            arg[0](tracker);
          } else {
            Tracker.prototype[arg[0]].apply(tracker, [].slice.call(arg, 1));
          }
        }
      } catch (e) {
        track.error(tracker && tracker.params, e);
      }
    };

    debug = debug || doc.url.get('adv_debug');
    W0.ADventori = W0.ADventori || {};
    Wq = W0.ADventori.q;
    if (!Wq || !Wq.loaded) {
      q.loaded = true;
      W0.ADventori.q = q;
      if (Wq) {
        protocol = Wq.p || protocol;
        hostname = Wq.h || hostname;
        track.transport = Wq.t || track.transport;
        track.nocookie = Wq.noc || track.nocookie;
        if (Wq.q) {
          q.poll.apply(q, Wq.q);
        }
      }
    }
  } catch (e) {
    track.error(tracker && tracker.params, e);
  }

} catch(_e) {
  (function() {
    var error = '';
    var context = '';
    var userAgent = '';
    try {
      error = (_e && _e.name ? (_e.name + ': ' + (_e.message || '')) : (_e || '')) + '';
    } catch(__e) {}
    try {
      try {
        context = window.top.location.href;
      } catch(__e) {
        context = window.document.referrer;
      }
    } catch(__e) {}
    try {
      userAgent = (window.navigator && window.navigator.userAgent);
    } catch(__e) {}
    document.createElement('img').src = ('https://adventori.com/tracker/trackPrint?tk_type=AdDataErrorTagInitJs' + '&tk_campaignId=0' + '&tk_cartoucheId=0' + '&tk_urlClick=' + encodeURIComponent(error) + '&tk_context=' + encodeURIComponent(context) + '&tk_retailer_4=' + encodeURIComponent(userAgent));
    try {
      window.console && window.console.error && window.console.error('[ADventori]', 'AdDataErrorTagInitJs', _e);
    } catch(__e) {}
  })();
}
})();
