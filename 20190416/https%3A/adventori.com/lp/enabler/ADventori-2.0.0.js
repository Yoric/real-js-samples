(function() {
try {


var undefined;

// json2.js
"object"!=typeof JSON&&(JSON={}),function(){"use strict";function f(t){return 10>t?"0"+t:t}function quote(t){return escapable.lastIndex=0,escapable.test(t)?'"'+t.replace(escapable,function(t){var e=meta[t];return"string"==typeof e?e:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+t+'"'}function str(t,e){var r,n,o,f,u,p=gap,a=e[t];switch(a&&"object"==typeof a&&"function"==typeof a.toJSON&&(a=a.toJSON(t)),"function"==typeof rep&&(a=rep.call(e,t,a)),typeof a){case"string":return quote(a);case"number":return isFinite(a)?a+"":"null";case"boolean":case"null":return a+"";case"object":if(!a)return"null";if(gap+=indent,u=[],"[object Array]"===Object.prototype.toString.apply(a)){for(f=a.length,r=0;f>r;r+=1)u[r]=str(r,a)||"null";return o=0===u.length?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+p+"]":"["+u.join(",")+"]",gap=p,o}if(rep&&"object"==typeof rep)for(f=rep.length,r=0;f>r;r+=1)"string"==typeof rep[r]&&(n=rep[r],o=str(n,a),o&&u.push(quote(n)+(gap?": ":":")+o));else for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(o=str(n,a),o&&u.push(quote(n)+(gap?": ":":")+o));return o=0===u.length?"{}":gap?"{\n"+gap+u.join(",\n"+gap)+"\n"+p+"}":"{"+u.join(",")+"}",gap=p,o}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var cx,escapable,gap,indent,meta,rep;"function"!=typeof JSON.stringify&&(escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(t,e,r){var n;if(gap="",indent="","number"==typeof r)for(n=0;r>n;n+=1)indent+=" ";else"string"==typeof r&&(indent=r);if(rep=e,e&&"function"!=typeof e&&("object"!=typeof e||"number"!=typeof e.length))throw Error("JSON.stringify");return str("",{"":t})}),"function"!=typeof JSON.parse&&(cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,JSON.parse=function(text,reviver){function walk(t,e){var r,n,o=t[e];if(o&&"object"==typeof o)for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(n=walk(o,r),void 0!==n?o[r]=n:delete o[r]);return reviver.call(t,e,o)}var j;if(text+="",cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(t){return"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}();

var ADventori = window.ADventori = {};

var PrintTracker = {
  AdErrorOpen: 'AdErrorOpen',
  AdErrorUrl: 'AdErrorUrl',
  AdErrorCreative: 'AdErrorCreative',
  AdErrorCreativeErrorJs: 'AdErrorCreativeErrorJs',
  AdErrorCreativeUrl: 'AdErrorCreativeUrl',
  AdErrorEnablerInitJs: 'AdErrorEnablerInitJs',
  AdErrorEnablerMessage: 'AdErrorEnablerMessage',
  AdErrorEnablerExec: 'AdErrorEnablerExec',
  AdErrorEnablerEnv: 'AdErrorEnablerEnv',
  AdErrorEnablerArgs: 'AdErrorEnablerArgs',
  AdErrorEnablerMraid: 'AdErrorEnablerMraid',
  AdErrorEnablerUnsupported: 'AdErrorEnablerUnsupported'
};

var ENV_TESTPAGE = 'testPage';
var ENV_VALIDATIONPAGE = 'validationPage';
var ENV_PROD = 'prod';

var PROTOCOL_POSTMESSAGE = 'ADventori:';
var EVENT_COMMAND = 'event';
var MRAID_COMMAND = 'mraid';

var _slice = Array.prototype.slice;
var _console;

var _utils = {
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
        _utils._class2type[Object.prototype.toString.call(o)] || 'object' :
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
  toQueryString: function (o) {
    var params = [];
    for (var key in o) {
      if (key != null && o[key] != null) {
        params.push(encodeURIComponent(key) + '=' + encodeURIComponent(o[key]));
      }
    }
    return params.join('&');
  }
};

var debug = {
  _log: function(l, args) {
    try {
      var C;
      args = _slice.call(args || []);
      (C = _console) && C[l] && C[l].apply(C, ['[Enabler]'].concat(args));
    } catch(e) {}
  },
  log: function() {
    debug._log('log', arguments);
  },
  error: function() {
    debug._log('error', arguments);
  }
};

/**
 * Parse window.name
 */
(function () {
  try {
    if (window.name) {
      var windowNameObject = JSON.parse(window.name);
      ADventori.env = windowNameObject['env'];
      ADventori.conf = windowNameObject['conf'];
      ADventori.data = windowNameObject['data'];
      ADventori.mraidData = windowNameObject['mraidData'];
    }
  } catch (e) {}
})();

/**
 * ADventori Track
 */
(function () {

  ADventori.Track = {
    _trackedErrors: {},
    disabledErrors: {},

    toErrorString: function(e) {
      return (e && e.name ? (e.name + ': ' + (e.message || '')) : (e || '')) + '';
    }

  };
})();

/**
 * ADventori Macro
 */
(function () {

  ADventori.Macro = {

    pattern: /\[%(URI_ENCODE:)?([^\[\]]+)%\]/g,
    replace: function (str, macros) {
      if (typeof str == 'string') {
        return str.replace(ADventori.Macro.pattern, function (match, p1, p2) {
          return (macros && macros[p2] != null ? (p1 ? encodeURIComponent(macros[p2]) : macros[p2]) : '');
        });
      }
      return str;
    }

  };
})();

/**
 * ADventori Core
 */
(function () {

  ADventori.exec = function (cmd, args) {
      try {
        var protocol = PROTOCOL_POSTMESSAGE;
        var win = window.parent;
        if (ADventori.conf && win && win != window) {
          win.postMessage(protocol + JSON.stringify({
            id: ADventori.conf.id,
            cmd: cmd,
            args: _slice.call(args || [])
          }), '*');
        }
      } catch (e) {
        (function() {
          try {
            if (ADventori.conf) {
              var trackerType = PrintTracker.AdErrorEnablerMessage;
              if (!ADventori.Track.disabledErrors[trackerType]) {
                var message = ADventori.Track.toErrorString(e);
                var trackedErrorKey = trackerType + '~' + message;
                if (!ADventori.Track._trackedErrors[trackedErrorKey]) {
                  ADventori.Track._trackedErrors[trackedErrorKey] = true;
                  document.createElement('img').src = (ADventori.conf.track.urlError + '&tk_urlClick=' + encodeURIComponent([cmd, args, message].join('|')));
                }
                debug.error(trackerType, e, [cmd, args]);
              }
            }
          } catch (_e) {}
        })();
      }
  };

  ADventori.log = function () {
    ADventori.exec('log', arguments);
    debug.log.apply(null, arguments);
  };

  ADventori.error = function (e, trackerType) {
    trackerType = trackerType || PrintTracker.AdErrorCreative;
    ADventori.exec('error', [ADventori.Track.toErrorString(e), trackerType]);
    debug.error(trackerType, e);
  };

  ADventori.open = function (url, opts) {
    if (!url) {
      ADventori.error({name: 'NO_URL'}, PrintTracker.AdErrorUrl);
      return 'no_url';
    }
    if (!/^https?:\/\//.test(url)) {
      ADventori.error({name: 'NO_PROTOCOL', message: url}, PrintTracker.AdErrorUrl);
    }
    try {
      var newWin;
      // open target
      if (opts) {
        if (opts.target == 'top') {
          window.top.location.href = url;
          newWin = 'top';
        }
      }
      // MRAID open
      if (!newWin) {
        if (ADventori.mraid && ADventori.mraid.open) {
          ADventori.mraid.open(url);
          newWin = 'mraid';
        }
      }
      // window.open
      if (!newWin) {
        newWin = window.open(url, '_blank');
        if (newWin) {
          try {
            newWin.opener = null;
          } catch (e) {}
        }
      }
      // top.location
      if (!newWin) {
        window.top.location.href = url;
        newWin = 'top';
      }
      return (newWin != null && newWin == newWin.window ? 'window' : (newWin + ''));
    } catch (e) {
      ADventori.error(e, PrintTracker.AdErrorOpen);
      return 'error';
    }
  };

  ADventori.click = function (e, item, macros, opts) {
    var itemId = item && item.id;
    var itemUrl = (typeof item == 'string' ? item : (item && item.data && item.data.url)) || '';
    var finalUrl = (ADventori.conf && ADventori.conf.finalUrl) || '';
    var clickTag = (ADventori.conf && ADventori.conf.clickTag) || '';
    var encodeUrl = (ADventori.conf && ADventori.conf.encodeUrl);
    if (clickTag && itemId != null) {
      clickTag = clickTag.replace('&URL=', ('&tk_clickItemId=' + encodeURIComponent(itemId) + '&tk_retailer_1=' + encodeURIComponent(itemId)) + '&URL=');
    }
    finalUrl = itemUrl || finalUrl;
    clickTag = ADventori.Macro.replace(clickTag, macros);
    finalUrl = ADventori.Macro.replace(finalUrl, macros);
    finalUrl = encodeUrl && encodeUrl.finalUrl ? encodeURIComponent(finalUrl) : finalUrl;
    finalUrl = encodeUrl && encodeUrl.clickTag ? encodeURIComponent(finalUrl) : finalUrl;
    var open = ADventori.open(clickTag + finalUrl, opts);
    ADventori.exec('click', [{"open": open, "item": item, "macros": macros}]);
    if (e) {
      if (e.preventDefault) {
        e.preventDefault();
      } else {
        e.returnValue = false;
      }
      if (e.stopPropagation) {
        e.stopPropagation();
      } else {
        e.cancelBubble = true;
      }
    }
  };

  ADventori.initData = function (defaults) {
    if ((!ADventori.env && !ADventori.data) || (ADventori.env && ADventori.env.name == ENV_TESTPAGE && ADventori.env.testInitData)) {
      ADventori.data = defaults;
    }
    ADventori.exec('creaInitData', [ADventori.data]);
    return ADventori.data;
  };

})();

/**
 * Tracks logs & errors
 */
(function () {

  try {
    var log = ADventori.log;
    _console = window.console;
    window.console = {
      log: log, info: log, warn: log, debug: log, error: log
    };
  } catch (e) {
    ADventori.error(e, PrintTracker.AdErrorEnablerEnv);
  }

  try {
    if (ADventori.conf && ADventori.conf.track && ADventori.conf.track.enabled && ADventori.conf.track.enabled.errorCreative) {
      window.onerror = function () {
        ADventori.error(_slice.call(arguments, 0, 4).join(','), PrintTracker.AdErrorCreativeErrorJs);
      };
    }
  } catch (e) {
    ADventori.error(e, PrintTracker.AdErrorEnablerEnv);
  }

})();

/**
 * ADventori DOM
 */
(function () {
  var _guid = 1;
  var _guidKey = 'ADventori_dom_guid';
  var _listeners = {};

  ADventori.Dom = {

    addEventListener: function (el, type, fn) {
      el[_guidKey] = el[_guidKey] || _guid++;
      fn[_guidKey] = fn[_guidKey] || _guid++;
      var eventListenerId = [type, el[_guidKey], fn[_guidKey]].join('_');
      if (!_listeners[eventListenerId]) {
        var eventListener = _listeners[eventListenerId] = function (e) {
          fn.apply(el, [e || window.event].concat(_slice.call(arguments, 1)));
        };
        if (el.addEventListener) {
          el.addEventListener(type, eventListener, false);
        } else if (el.attachEvent) {
          el.attachEvent('on' + type, eventListener);
        }
      }
    },

    removeEventListener: function (el, type, fn) {
      var eventListenerId = [type, el[_guidKey], fn[_guidKey]].join('_');
      var eventListener = _listeners[eventListenerId];
      if (eventListener) {
        if (el.removeEventListener) {
          el.removeEventListener(type, eventListener, false);
        } else if (el.detachEvent) {
          el.detachEvent('on' + type, eventListener);
        }
        _listeners[eventListenerId] = null;
      }
    },

    onReady: function (fn) {
      var readyFn = function() {
        if (!document.body) {
          return setTimeout(readyFn);
        }
        fn();
      };
      var completed = function() {
        if (document.addEventListener || event.type === 'load' || document.readyState === 'complete') {
          ADventori.Dom.removeEventListener(document, document.addEventListener ? 'DOMContentLoaded' : 'readystatechange', completed);
          ADventori.Dom.removeEventListener(window, 'load', completed);
          readyFn();
        }
      };
      if (document.readyState === 'complete') {
        setTimeout(readyFn);
      } else {
        ADventori.Dom.addEventListener(document, document.addEventListener ? 'DOMContentLoaded' : 'readystatechange', completed);
        ADventori.Dom.addEventListener(window, 'load', completed);
      }
    },

    firePixel: function (url) {
      var i = document.createElement('img');
      i.width = 1;
      i.height = 1;
      i.src = url;
    },

    getComputedStyle: function(el, styleProp) {
        var style = document.defaultView.getComputedStyle(el, null);
        return style != null ? style.getPropertyValue(styleProp) : null;
    }
  };
})();

/**
 * ADventori Messaging
 */
(function () {

  ADventori.commands = {};

  ADventori.Dom.addEventListener(window, 'message', function (e) {
    var protocol;
    var data;
    var fn;
    try {
      protocol = PROTOCOL_POSTMESSAGE;
      if (!(typeof e.data === 'string' && e.data.slice(0, protocol.length) === protocol)) {
        return;
      }
      data = JSON.parse(e.data.slice(protocol.length));
      fn = ADventori.commands[data.cmd] || window[data.cmd];
    } catch (_e) {
      ADventori.error(_e, PrintTracker.AdErrorEnablerExec);
      return;
    }
    if (typeof fn == 'function') {
      fn.apply(null, _slice.call(data.args || []));
    } else {
      ADventori.error({name: 'crea.execCrea', message: ['INVALID_COMMAND', data && data.cmd].join(',')}, PrintTracker.AdErrorEnablerExec);
    }
  });

  ADventori.Dom.onReady(function () {
    ADventori.exec('creaReady');
  });

  ADventori.Dom.addEventListener(window, 'load', function () {
    ADventori.exec('creaLoad');
  });

})();

/**
 * ADventori Event
 */
(function () {
  var _guid = 1;
  var _guidKey = 'ADventori_event_guid';
  var _listeners = {};

  ADventori.Event = {

    dispatchEvent: function (event, args) {
      for (var listenerId in _listeners[event]) {
        if (_listeners[event][listenerId]) {
          _listeners[event][listenerId].apply(null, _slice.call(args || []));
        }
      }
    },

    addEventListener: function (event, listener) {
      var listenerId = listener[_guidKey] = listener[_guidKey] || _guid++;
      _listeners[event] = _listeners[event] || {};
      _listeners[event][listenerId] = listener;
    },

    removeEventListener: function (event, listener) {
      var listenerId = listener[_guidKey];
      if (_listeners[event] && _listeners[event][listenerId]) {
        _listeners[event][listenerId] = null;
      }
    },

    addEventListenerOnce: function (event, listener) {
      var listenerOnce = function() {
        ADventori.Event.removeEventListener(event, listenerOnce);
        listener.apply(this, arguments);
      };
      ADventori.Event.addEventListener(event, listenerOnce);
    }

  };

  ADventori.commands[EVENT_COMMAND] = ADventori.Event.dispatchEvent;

})();

/**
 * ADventori Visibility
 */
(function () {
  var visible = true;
  var eventDispatched = false;
  var viewEnabled = false;

  ADventori.Event.VISIBLE = 'visible';
  ADventori.Event.HIDDEN = 'hidden';

  if (ADventori.conf && ADventori.env) {
    viewEnabled = (ADventori.conf.track && ADventori.conf.track.enabled && ADventori.conf.track.enabled.view);
    if (ADventori.env.name == ENV_TESTPAGE || viewEnabled) {
      visible = false;
    }
    if (ADventori.env.name == ENV_TESTPAGE || ADventori.env.name == ENV_VALIDATIONPAGE) {
      ADventori.Event.VISIBLE = 'test.visible';
      ADventori.Event.HIDDEN = 'test.hidden';
    }
    if (ADventori.env.name == ENV_PROD && viewEnabled) {
      ADventori.Dom.addEventListener(window, 'load', function() {
        setTimeout(function() {
          if (!eventDispatched) {
            ADventori.Event.dispatchEvent(ADventori.Event.VISIBLE);
          }
        }, 1000);
      });
    }
  }

  ADventori.isVisible = function() {
    return visible;
  };

  ADventori.Event.addEventListener(ADventori.Event.VISIBLE, function() {
    eventDispatched = true;
    visible = true;
  });

  ADventori.Event.addEventListener(ADventori.Event.HIDDEN, function() {
    eventDispatched = true;
    visible = false;
  });
})();

/**
 * ADventori MRAID
 */
(function () {
  if (!ADventori.mraidData) {
    return;
  }

  var _guid = 1;
  var _guidKey = 'ADventori_mraid_guid';
  var _listeners = {};

  var broadcastEvent = function (event, args) {
    for (var listenerId in _listeners[event]) {
      if (_listeners[event][listenerId]) {
        _listeners[event][listenerId].apply(null, _slice.call(args || []));
      }
    }
  };

  var broadcastError = function (name, message) {
    try {
      broadcastEvent('error', [message, name]);
    } catch (e) {}
    ADventori.error({name: name, message: message}, PrintTracker.AdErrorEnablerMraid);
  };

  var addEventListener = function (event, listener) {
    if (!event || !listener) {
      broadcastError('addEventListener', 'Both event and listener are required.');
      return;
    }
    var listenerId = listener[_guidKey] = listener[_guidKey] || _guid++;
    _listeners[event] = _listeners[event] || {};
    _listeners[event][listenerId] = listener;
  };

  var removeEventListener = function (event, listener) {
    if (!event) {
      broadcastError('removeEventListener', 'Must specify an event.');
      return;
    }
    if (!listener) {
      for (var listenerId in _listeners[event]) {
        _listeners[event][listenerId] = null;
      }
      return;
    }
    var listenerId = listener[_guidKey];
    if (_listeners[event] && _listeners[event][listenerId]) {
      _listeners[event][listenerId] = null;
    }
  };

  var mraid = window.mraid = {};

  var mraidData = ADventori.mraidData;

  var mraidCommands = {
    'event': broadcastEvent
  };

  var mraidExec = function (cmd, args) {
    ADventori.exec(MRAID_COMMAND, [cmd, _slice.call(args || [])]);
  };

  ADventori.commands[MRAID_COMMAND] = function (cmd, args) {
    var fn = mraidCommands[cmd];
    if (typeof fn == 'function') {
      fn.apply(null, _slice.call(args || []));
    } else {
      ADventori.error({name: 'mraid.execCrea', message: ['INVALID_COMMAND', cmd].join(',')}, PrintTracker.AdErrorEnablerMraid);
    }
  };

  ADventori.mraid = {
    open: function (url) {
      mraidExec('open', [url]);
    }
  };

  mraid.addEventListener = addEventListener;

  mraid.removeEventListener = removeEventListener;

  mraid.getState = function () {
    return mraidData.state;
  };

  mraid.getVersion = function () {
    return mraidData.version;
  };

  mraid.getPlacementType = function () {
    return mraidData.placementType;
  };

  mraid.isViewable = function () {
    return mraidData.viewable;
  };

  mraid.getCurrentPosition = function () {
    return mraidData.currentPosition;
  };

  mraid.getDefaultPosition = function () {
    return mraidData.defaultPosition;
  };

  mraid.getMaxSize = function () {
    return mraidData.maxSize;
  };

  mraid.getScreenSize = function () {
    return mraidData.screenSize;
  };

  mraid.getExpandProperties = function () {
    return _utils.extend({}, mraidData.expandProperties, mraidData.customExpandProperties);
  };

  mraid.getResizeProperties = function () {
    return _utils.extend({}, mraidData.resizeProperties, mraidData.customResizeProperties);
  };

  mraid.getOrientationProperties = function () {
    return _utils.extend({}, mraidData.orientationProperties, mraidData.customOrientationProperties);
  };

  mraid.setExpandProperties = function (props) {
    mraidData.customExpandProperties = _utils.extend({}, mraidData.customExpandProperties, props);
  };

  mraid.setResizeProperties = function (props) {
    mraidData.customResizeProperties = _utils.extend({}, mraidData.customResizeProperties, props);
  };

  mraid.setOrientationProperties = function (props) {
    mraidData.customOrientationProperties = _utils.extend({}, mraidData.customOrientationProperties, props);
    mraidExec('setOrientationProperties', [mraidData.customOrientationProperties]);
  };

  mraid.useCustomClose = function (value) {
    mraidData.useCustomClose = value;
    mraidExec('useCustomClose', [value]);
  };

  mraid.supports = function (feature) {
    return mraidData.supports[feature];
  };

  mraid.open = function (url) {
    ADventori.click(null, url);
  };

  mraid.close = function () {
    mraidExec('close');
  };

  mraid.expand = function (url) {
    mraidExec('expand', [mraidData.customExpandProperties, url]);
  };

  mraid.resize = function () {
    mraidExec('resize', [mraidData.customResizeProperties]);
  };

  mraid.createCalendarEvent = function (params) {
    mraidExec('createCalendarEvent', [params]);
  };

  mraid.storePicture = function (url) {
    mraidExec('storePicture', [url]);
  };

  mraid.playVideo = function (url) {
    mraidExec('playVideo', [url]);
  };
})();

/**
 * ADventori.Display
 */
(function () {
    /*
     options: {fit: 'contain'|'cover',width: in px , height : in px}
     */
    function adaptImage(options) {
    // Hidden element
    if (this.style.display == "none") {
      return;
    }
    var width, height;
    if (options.width && options.height) {
      width = this.parentNode.style.width = options.width + 'px';
      height = this.parentNode.style.height = options.height + 'px';
    }
    width = width || ADventori.Dom.getComputedStyle(this.parentNode, 'width');
    var pw = width && parseFloat(width);
    var pwUnit = width && width.match(/[a-zA-Z]*$/)[0];
    height = height || ADventori.Dom.getComputedStyle(this.parentNode, 'height');
    var ph = height && parseFloat(height);
    var phUnit = height && height.match(/[a-zA-Z]*$/)[0];

    // Hidden iframe (Firefox) or detached element (Chrome)
    if (!width && !height) {
      return;
    }

    if (!pw || pwUnit != 'px' || !ph || phUnit != 'px') {
      ADventori.error({
        name: 'adaptImage',
        message: 'Unsupported width / height, pw=' + pw + ', pwUnit=' + pwUnit + ', ph=' + ph + ', phUnit=' + phUnit
      }, PrintTracker.AdErrorEnablerUnsupported);
      return;
    }

    this.parentNode.style["overflow"] = "hidden";

    var elem = this;
    var pr = pw / ph;
    var img = document.createElement('img');
    img.onload = function () {
      var w = parseFloat(ADventori.Dom.getComputedStyle(elem, 'width')),
          h = parseFloat(ADventori.Dom.getComputedStyle(elem, 'height')),
          r = w / h;

      var condition = (options.fit === 'cover') ? pr > r : pr < r;
      if (condition) {
        elem.style.width = pw + 'px';
        h = parseFloat(ADventori.Dom.getComputedStyle(elem, 'height'));
        elem.style.marginTop = -((h - ph) / 2 ) + 'px';
      } else {
        elem.style.height = ph + 'px';
        w = parseFloat(ADventori.Dom.getComputedStyle(elem, 'width'));
        elem.style.marginLeft = -((w - pw) / 2 ) + 'px';
      }
    };
    img.src = this.src;
  }

    function adaptText(minFontSizeInPx, innerHTML,options) {
    /*
    options: {width: in px , height : in px}
    */
        // Hidden element
    if (this.style.display == "none") {
      return;
    }
    if (options && options.width && options.height) {
      this.style.width = options.width+'px';
      this.style.height= options.height+'px';
    }

    var fontSize = ADventori.Dom.getComputedStyle(this, "font-size"),
        fontSizeFloat = fontSize && parseFloat(fontSize),
        fontSizeUnit = fontSize && fontSize.match(/[a-zA-Z]*$/)[0];

    // Hidden iframe (Firefox) or detached element (Chrome)
    if (!fontSize) {
      return;
    }

    if (!fontSizeFloat || fontSizeUnit != 'px') {
      ADventori.error({
        name: 'adaptText',
        message: 'Unsupported font-size, float=' + fontSizeFloat + ', unit=' + fontSizeUnit
      }, PrintTracker.AdErrorEnablerUnsupported);
      return;
    }

    var lineHeight = ADventori.Dom.getComputedStyle(this, "line-height"),
        lineHeightFloat = lineHeight && parseFloat(lineHeight),
        lineHeightUnit = lineHeight && lineHeight.match(/[a-zA-Z]*$/)[0];
    if (!lineHeightFloat || lineHeightUnit != 'px') {
      lineHeightFloat = fontSizeFloat * 1.2;
    }
    this.style.fontSize = fontSize;
    this.style.lineHeight = lineHeight;
    var min = minFontSizeInPx;
    var max = fontSizeFloat;
    var currentSize = max;
    // Reset styles text-overflow & white-space
    this.style["textOverflow"] = "clip";
    this.style["whiteSpace"] = "normal";
    var position = ADventori.Dom.getComputedStyle(this, "position");
    if (position == "static") {
      this.style["position"] = "relative";
    }

    var paddingLeft = ADventori.Dom.getComputedStyle(this, "padding-left"),
        paddingLeftFloat = paddingLeft && parseFloat(paddingLeft);
    var paddingRight = ADventori.Dom.getComputedStyle(this, "padding-right"),
        paddingRightFloat = paddingRight && parseFloat(paddingRight);
    var paddingWidth = paddingLeftFloat + paddingRightFloat;
    var paddingTop = ADventori.Dom.getComputedStyle(this, "padding-top"),
        paddingTopFloat = paddingTop && parseFloat(paddingTop);
    var paddingBottom = ADventori.Dom.getComputedStyle(this, "padding-bottom"),
        paddingBottomFloat = paddingBottom && parseFloat(paddingBottom);
    var paddingHeight = paddingTopFloat + paddingBottomFloat;

    while (currentSize >= min && ((this.scrollHeight - paddingHeight) > (this.offsetHeight - paddingHeight) || (this.scrollWidth - paddingWidth) > (this.offsetWidth - paddingWidth))) {
      this.style.fontSize = currentSize + 'px';
      this.style.lineHeight = lineHeightFloat * currentSize / max + 'px';
      currentSize = currentSize - 1;
    }

    var initialHTML = innerHTML, insertionPoint = initialHTML.length;
    var spanId = _utils.rand() + '';
    this.innerHTML = innerHTML + '<span id="' + spanId + '" style="display:inline;float:none;"></span>';
    var spanElement = document.getElementById(spanId);
    // Detached element
    if (!spanElement) {
      return;
    }
    //while the span is not complety visible
    // we push span to top
    while (insertionPoint >= 0 && (spanElement.offsetTop + spanElement.offsetHeight - paddingHeight) > (this.offsetHeight - paddingHeight)) {
      insertionPoint--;
      //manage for the balise tag
      if (initialHTML[insertionPoint] === '>') {
        while (insertionPoint >= 0 && initialHTML[insertionPoint] !== '<') {
          insertionPoint--;
        }
      }
      while (insertionPoint >= 0 && initialHTML[insertionPoint] === ' ') {
        insertionPoint--;
      }
      this.innerHTML = initialHTML.slice(0, insertionPoint) + ('<span id="' + spanId + '" style="display:inline;float:none;">…</span>');
      spanElement = document.getElementById(spanId);
    }
  }

  function verticalAlign(innerHTML) {
    var spanId = _utils.rand() + '';
    this.innerHTML = innerHTML + '<br/><span id="' + spanId + '" style="display:inline;float:none;vertical-align:middle;">.</span>';
    var spanElement = document.getElementById(spanId);
    // Detached element
    if (!spanElement) {
      return;
    }
    var paddingInPx = Math.floor((this.offsetHeight - spanElement.offsetTop) / 2) + 0.5;
    this.innerHTML = (paddingInPx > 0 ? '<span style="opacity:0;display: block; font-size:1px; line-height:' + paddingInPx + 'px;">-</span>' : '') + innerHTML;
    if (this.height < this.offsetHeight) {
      this.height = this.offsetHeight;
    }
  }

  var timerFns = [];

  var timer = 100;

  function execTimers() {
    for (var i = 0; i < timerFns.length; i++) {
      timerFns[i]();
    }
    if (timer < 10000) {
      setTimeout(execTimers, (timer = timer * 2));
    }
  }

  execTimers();

  function addToTimerFns(fn, elem) {
    if (!elem.ADventori_notFirst) {
      elem.ADventori_notFirst = true;
      elem.ADventori_innerHTML = elem.innerHTML;
      timerFns.push(function () {
        fn(elem.ADventori_innerHTML);
      });
    } else {
      timerFns.push(function () {
        fn(elem.innerHTML);
      });
    }
    fn(elem.innerHTML);
  }

  var Display = {
    setText: function (html) {
      this.innerHTML = html;
    },

    adaptText: function (minFontSizeInPx, options) {
     //adaptText.apply(this, arguments);
      var self = this;
      addToTimerFns(function (innerHTML) {
        adaptText.apply(self, [minFontSizeInPx,innerHTML, options]);
      }, this);
    },

    setAndAdaptText: function (html, minFontSizeInPx, options) {
      Display.setText.apply(this, [html]);
      Display.adaptText.apply(this, [minFontSizeInPx, options]);
    },

    verticalAlign: function () {
      //verticalAlign.apply(this, arguments);
      var self = this;
      addToTimerFns(function (innerHTML) {
        verticalAlign.apply(self, [innerHTML]);
      }, this);
    },

    setImageUrl: function (url, defaultUrl, trackError) {
      function error(message) {
        if (trackError) {
          ADventori.error({
            name: 'setImageUrl',
            message: message + ' (url=' + url + ', defaultUrl=' + defaultUrl + ')'
          }, PrintTracker.AdErrorCreativeUrl);
        }
      }

      if (!url && !defaultUrl) {
        error('No url, no defaultUrl');
        return;
      }
      if (!url) {
        error('No url');
        url = defaultUrl;
        defaultUrl = null;
      }
      this.onerror = function () {
        error('Error loading url');
        url = defaultUrl;
        defaultUrl = null;
        if (url) {
          this.src = url;
        } else {
          this.onerror = undefined;
        }
      };
      this.src = url;
    },

    adaptImage: function (options) {
    if (typeof options == 'object') {
        adaptImage.apply(this, arguments);
    }else {
        var parent = this.parentNode;
        Display.empty.apply(parent);
        parent.className += ' adventoriImgContainer';
        Display.setImageUrl.apply(this, arguments);
        parent.appendChild(this);
    }
    },

    addImage: function () {
      var img = document.createElement('img');
      Display.setImageUrl.apply(img, arguments);
      this.appendChild(img);
    },

    addAndAdaptImage: function (url, defaultUrl, options) {
    if (typeof options == 'object') {
        Display.addImage.apply(this, arguments);
        Display.adaptImage.apply(this.lastChild, _slice.call(arguments, 2));
    } else {
        Display.addImage.apply(this);
        Display.adaptImage.apply(this.lastChild, arguments);
    }
    },

    remove: function () {
      if (this.parentNode) {
        this.parentNode.removeChild(this);
      }
    },

    empty: function () {
      while (this.firstChild) {
        this.removeChild(this.firstChild);
      }
    }
  };

  ADventori.Display = ADventori.Format = {};
  for (var fn in Display) {
    (function (fn) {
      ADventori.Display[fn] = function (nodes) {
        nodes = 'length' in nodes ? nodes : [nodes];
        for (var i = 0; i < nodes.length; i++) {
          Display[fn].apply(nodes[i], _slice.call(arguments, 1));
        }
        return this;
      };
    })(fn);
  }
})();

/**
 * ADventori.Carousel
 */
(function () {
  /*
   conf: {items, hSplit, vSplit, elSlides, elBullets, cta, autoStart, interval, duration, insertHtmlStruct, carouselContainer, navPrev, navNext, hiddenBullets, animation}
   */
  var Carousel = function (conf) {
    if (!(this instanceof Carousel)) {
      return new Carousel(conf);
    }
    conf = conf || {};
    conf.items = conf.items || [];
    conf.interval = conf.interval || 3000;
    conf.duration = conf.duration || 30000;
    conf.hSplit = conf.hSplit || 1;
    conf.vSplit = conf.vSplit || 1;
    conf.onSlide = conf.onSlide || (function(){});
    this.conf = conf;
    this.slidesCount = 0;
    this.curSlide = 0;
    this.timerId = -1;
    this.started = false;
    conf.hiddenBullets = conf.hiddenBullets || false;
    conf.animation = conf.animation || "default";
    if (conf.insertHtmlStruct && conf.insertHtmlStruct == true) {
      this.makeSlide();
    }
    this.index = Carousel.instances.length;
    Carousel.instances[this.index] = this;
    this.init();

  };

  Carousel.instances = [];

  Carousel.prototype.init = function () {
    var self = this;
    window.setTimeout(function () {
      self.stop();
    }, this.conf.duration);
    this.initSlides();
    this.goto(this.curSlide);
    if (this.conf.autoStart) {
      this.start();
    }
    return this;
  };


  Carousel.prototype.makeSlide = function () {
    function setAttributes(el, options) {
      for (var attr in options) {
        el.setAttribute(attr, options[attr]);
      }
    }

    var adventoriAd = document.createElement("div");
    setAttributes(adventoriAd, {
      "id": "adventoriAd",
      "onmouseover": "carousel.pause()",
      "onmouseout": "carousel.play()"
    });
    var adventoriSlides = document.createElement("div");
    adventoriSlides.setAttribute("id", "adventoriSlides");
    this.conf.elSlides = adventoriSlides;
    var adventoriNav = document.createElement("div");
    adventoriNav.setAttribute("id", "adventoriNav");
    var adventoriBullets = document.createElement("div");
    adventoriBullets.setAttribute("id", "adventoriBullets");
    this.conf.elBullets = adventoriBullets;
    this.conf.carouselContainer ? this.conf.carouselContainer.appendChild(adventoriAd) : document.body.insertBefore(adventoriAd, document.body.firstChild);
    adventoriAd.appendChild(adventoriSlides);
    adventoriAd.appendChild(adventoriBullets);
    adventoriAd.appendChild(adventoriNav);
    //Nav Prev && Nav Next
    if (this.conf.navPrev && this.conf.navNext) {
      adventoriNav.innerHTML = "<label>" + this.conf.navPrev + "</label><label>" + this.conf.navNext + "</label>";
      var labelPrev = adventoriNav.firstChild;
      var labelNext = adventoriNav.lastChild;
      setAttributes(labelPrev, {"onclick": "carousel.prev()", "class": "prev"});
      setAttributes(labelNext, {"onclick": "carousel.next()", "class": "next"});
    }
  }

  Carousel.prototype.initSlides = function () {
    var nbItemsPerSlide = this.conf.hSplit * this.conf.vSplit;
    this.slidesCount = Math.ceil(this.conf.items.length / nbItemsPerSlide);
    var slidesHTML = '', bulletsHTML = '';
    var itemClass = 'item item' + this.conf.hSplit + 'h item' + this.conf.vSplit + 'v';
    for (var iSlide = 0; iSlide < this.slidesCount; iSlide++) {
      slidesHTML += '<div id="slide_' + this.index + '_' + iSlide + '" class="slide-container prev-active ' + this.conf.animation + '_prev"><div class="slide">';
      for (var i, iProduct = 0; iProduct < nbItemsPerSlide && (i = iSlide * nbItemsPerSlide + iProduct) < this.conf.items.length; iProduct++) {
        var item = this.conf.items[i];
        if (!(item && item.data)) {
          continue;
        }
        slidesHTML += '<a class="' + itemClass + ' item' + iProduct + '" href="' + (item.data.url || '#') + '" onclick="var carousel = ADventori.Carousel.instances[' + this.index + ']; carousel.stop(); ADventori.click(event, carousel.conf.items[' + i + ']);">';
        slidesHTML += this.initSlide(item.data);
        slidesHTML += '</a>';
      }
      slidesHTML += '</div></div>';
      bulletsHTML += '<label id="bullet_' + this.index + '_' + iSlide + '" onclick="ADventori.Carousel.instances[' + this.index + '].goto(' + iSlide + ');">●</label>';
    }

    this.conf.elSlides.innerHTML = slidesHTML;

    if (this.slidesCount > 1) {
      this.conf.elBullets.innerHTML = bulletsHTML;
    }
    else {
      document.getElementById('adventoriNav').style.display = "none";
      document.getElementById('adventoriBullets').style.display = "none";
    }
    //Hidden Bullets
    if (this.conf.hiddenBullets == true) {
      document.getElementById('adventoriBullets').style.display = "none";
    }
  };

  Carousel.prototype.initSlide = function (data) {
    var partsPrice = data.price ? data.price.split(',') : [];
    var partsOriginal_Price = data.original_price ? data.original_price.split(',') : [];
    return ('<div class="img_container"><span class="img_helper"></span><img src="' + data.img + '"></div>'
    + '<div class="name">' + data.name + '</div>'
    + '<div class="description">' + data.description + '</div>'
    + (partsOriginal_Price.length > 0 ? '<div class="original_price"><div class="barre"></div><span class="a">' + partsOriginal_Price[0] + '</span>' + (partsOriginal_Price.length > 1 ? '<span class="b">,</span>' : '') + '<span class="e">€</span>' + (partsOriginal_Price.length > 1 ? '<span class="c">' + partsOriginal_Price[1] + '</span>' : '') + '</div>' : '')
    + '<div class="price"><span class="a">' + partsPrice[0] + '</span>' + (partsPrice.length > 1 ? '<span class="b">,</span>' : '') + '<span class="e">€</span>' + (partsPrice.length > 1 ? '<span class="c">' + partsPrice[1] + '</span>' : '') + '</div>'
    + '<div class="cta">' + this.conf.cta + '</div>');
  };

  Carousel.prototype.nextSlideNo = function (i) {
    return (i + 1 < this.slidesCount) ? (i + 1) : 0;
  };

  Carousel.prototype.prevSlideNo = function (i) {
    return (i == 0) ? (this.slidesCount - 1) : (i - 1);
  };

  Carousel.prototype.goto = function (slideNo) {
    if (this.slidesCount > 0) {
      document.getElementById("slide_" + this.index + "_" + this.curSlide).className = "slide-container prev-active " + this.conf.animation + "_prev";
      if (this.slidesCount > 1) document.getElementById("bullet_" + this.index + "_" + this.curSlide).className = "";
      this.curSlide = this.prevSlideNo(this.nextSlideNo(slideNo));
      document.getElementById("slide_" + this.index + "_" + this.nextSlideNo(this.curSlide)).className = "slide-container next-active " + this.conf.animation + "_next";
      document.getElementById("slide_" + this.index + "_" + this.curSlide).className = "slide-container active " + this.conf.animation + "_active";
      if (this.slidesCount > 1) document.getElementById("bullet_" + this.index + "_" + this.curSlide).className = "active";
      this.conf.onSlide(this.curSlide);
    }
    return this;
  };

  Carousel.prototype.next = function () {
    this.goto(this.nextSlideNo(this.curSlide));
    return this;
  };

  Carousel.prototype.prev = function () {
    this.goto(this.prevSlideNo(this.curSlide));
    return this;
  };

  Carousel.prototype.play = function () {
    if (this.started && this.slidesCount > 0) {
      var self = this;
      window.clearInterval(this.timerId);
      this.timerId = window.setInterval(function () {
        self.next();
      }, this.conf.interval);
    }
    return this;
  };

  Carousel.prototype.pause = function () {
    window.clearInterval(this.timerId);
    return this;
  };

  Carousel.prototype.start = function () {
    this.started = true;
    this.play();
    return this;
  };

  Carousel.prototype.stop = function () {
    this.started = false;
    this.pause();
    return this;
  };

  ADventori.Carousel = Carousel;
})();

/**
* ADventori.ADventoriMaps
*/
(function() {
  ADventori.ADventoriMaps = {};

  ADventori.ADventoriMaps.StaticMap = function(container, options) {
    options = options || {};
    options.center = options.center || null;
    options.zoom = options.zoom != null ? options.zoom : null;
    options.maxZoom = options.maxZoom != null ? options.maxZoom : 16;
    options.size = options.size || null;
    options.markers = options.markers || [];
    this.container = container;
    this.options = options;
    this.explicitViewport = !!(options.center && options.zoom);

    if (!this.container) {
      ADventori.error({
        name: 'ADventoriMaps.StaticMap',
        message: 'No container for map'
      }, PrintTracker.AdErrorEnablerArgs);
      return;
    }
    if (options.markers.length > 0) {
      if (!((options.center && (options.zoom >= 1 && options.zoom <= 16)) || (!options.center && !options.zoom))) {
        ADventori.error({
          name: 'ADventoriMaps.StaticMap',
          message: 'Both, or neither of, center and zoom (between 1 and 16) should be defined, if markers present'
        }, PrintTracker.AdErrorEnablerArgs);
        return;
      }
      if (!(options.maxZoom >= 1 && options.maxZoom <= 16)) {
        ADventori.error({
          name: 'ADventoriMaps.StaticMap',
          message: 'Invalid maxZoom (between 1 and 16)'
        }, PrintTracker.AdErrorEnablerArgs);
        return;
      }
    } else {
      if (!(options.center && (options.zoom >= 1 && options.zoom <= 16))) {
        ADventori.error({
          name: 'ADventoriMaps.StaticMap',
          message: 'Center and zoom (between 1 and 16) required, if markers not present'
        }, PrintTracker.AdErrorEnablerArgs);
        return;
      }
    }

    this.mapWidth = options.size ? options.size.width : this.container.offsetWidth;
    this.mapHeight = options.size ? options.size.height : this.container.offsetHeight;

    if (!(this.mapWidth && this.mapHeight)){
      ADventori.error({
        name: 'ADventoriMaps.StaticMap',
        message: 'No container size'
      }, PrintTracker.AdErrorEnablerArgs);
      return;
    }

    this.buildMap();
  };

  ADventori.ADventoriMaps.StaticMap.TILE_SIZE = 256;
  ADventori.ADventoriMaps.StaticMap.lng2tile = function(lon,zoom) {
    return (lon+180)/360*Math.pow(2,zoom);
  };
  ADventori.ADventoriMaps.StaticMap.lat2tile = function(lat,zoom)  {
    return (1-Math.log(Math.tan(lat*Math.PI/180) + 1/Math.cos(lat*Math.PI/180))/Math.PI)/2 *Math.pow(2,zoom);
  };
  ADventori.ADventoriMaps.StaticMap.getZoomForBounds = function(north, west, south, east, mapWidth, mapHeight, maxZoom) {
    function latRad(lat) {
      var sin = Math.sin(lat * Math.PI / 180);
      var radX2 = Math.log((1 + sin) / (1 - sin)) / 2;
      return Math.max(Math.min(radX2, Math.PI), -Math.PI) / 2;
    }

    function zoom(mapPx, fraction) {
      return Math.floor(Math.log(mapPx / ADventori.ADventoriMaps.StaticMap.TILE_SIZE / fraction) / Math.LN2);
    }

    var latFraction = (latRad(north) - latRad(south)) / Math.PI;
    var lngDiff = east - west;
    var lngFraction = ((lngDiff < 0) ? (lngDiff + 360) : lngDiff) / 360;

    return Math.min(zoom(mapHeight, latFraction), zoom(mapWidth, lngFraction), maxZoom);
  };
  ADventori.ADventoriMaps.StaticMap.prototype.buildMap = function() {
    var markers = this.options.markers;

    var north, west, south, east;
    var xMargin, yMargin;

    //Calc bounding box of all markers, and required margin in pixel
    if (markers.length > 0) {
      north = markers[0].position.lat;
      west = markers[0].position.lng;
      south = markers[0].position.lat;
      east = markers[0].position.lng;
      xMargin = markers[0].size.width;
      yMargin = markers[0].size.height;
      for(var i = 1; i<markers.length; i++){
        north = Math.max(north, markers[i].position.lat);
        south = Math.min(south, markers[i].position.lat);
        east = Math.max(east, markers[i].position.lng);
        west = Math.min(west, markers[i].position.lng);
        xMargin = Math.max(markers[i].size.width, xMargin);
        yMargin = Math.max(markers[i].size.height, yMargin);
      }
    }

    var TILE_SIZE = ADventori.ADventoriMaps.StaticMap.TILE_SIZE;
    var zoom = this.explicitViewport ? this.options.zoom : ADventori.ADventoriMaps.StaticMap.getZoomForBounds(north, west, south, east, this.mapWidth-xMargin, this.mapHeight-yMargin, this.options.maxZoom);
    var center = this.explicitViewport ? this.options.center : {lat: (north+south)/2, lng: (west+east)/2};

    // get top left tile by removing half map width/height in tile space
    var firstTile = {
      x: Math.floor( ADventori.ADventoriMaps.StaticMap.lng2tile(center.lng, zoom) - this.mapWidth/2/TILE_SIZE),
      y: Math.floor( ADventori.ADventoriMaps.StaticMap.lat2tile(center.lat, zoom) - this.mapHeight/2/TILE_SIZE)
    };
    // Move map in container to center the center of the bounding box
    var map = document.createElement('div');
    map.style.marginLeft = Math.floor(this.mapWidth / 2 - TILE_SIZE * (ADventori.ADventoriMaps.StaticMap.lng2tile(center.lng, zoom) - firstTile.x)) + 'px';
    map.style.marginTop = Math.floor(this.mapHeight / 2 - TILE_SIZE * (ADventori.ADventoriMaps.StaticMap.lat2tile(center.lat, zoom) - firstTile.y)) + 'px';

    // Add tiles to the map
    for(var x = 0 ; x*TILE_SIZE < this.mapWidth+TILE_SIZE ; x++){
      for(var y = 0 ; y*TILE_SIZE < this.mapHeight+TILE_SIZE ; y++){
        var tile = document.createElement('img');
        tile.style.position = 'absolute';
        tile.style.width = tile.style.height = TILE_SIZE+'px';
        tile.style.marginLeft = (TILE_SIZE*x)+'px';
        tile.style.marginTop = (TILE_SIZE*y)+'px';
        tile.src = 'https://hap2.adventori.com/maptiles/'+zoom+'/'+(firstTile.x+x)+'/'+(firstTile.y+y)+'.png';
        tile.draggable = false;
        map.append(tile);
      }
    }
    //Add markers over the tiles
    for(i = 0; i<markers.length; i++){
      var anchorX = markers[i].anchor ? markers[i].anchor.x : (markers[i].size.width / 2);
      var anchorY = markers[i].anchor ? markers[i].anchor.y : markers[i].size.height;
      var map_logo = document.createElement('img');
      map_logo.style.position = 'absolute';
      map_logo.style.marginLeft = Math.floor(TILE_SIZE * (ADventori.ADventoriMaps.StaticMap.lng2tile(markers[i].position.lng, zoom) - firstTile.x) - anchorX) + 'px';
      map_logo.style.marginTop = Math.floor(TILE_SIZE * (ADventori.ADventoriMaps.StaticMap.lat2tile(markers[i].position.lat, zoom) - firstTile.y) - anchorY) + 'px';
      map_logo.style.width = markers[i].size.width + 'px';
      map_logo.style.height = markers[i].size.height + 'px';
      map_logo.src = markers[i].icon;
      map_logo.draggable = false;
      map.append(map_logo);
    }

    if (this.options.size) {
      this.container.style.width = this.options.size.width + 'px';
      this.container.style.height = this.options.size.height + 'px';
    }
    this.container.style.overflow = 'hidden';
    this.container.style.position = 'absolute';
    this.container.append(map);
  };

})();

/**
 * ADventori.GoogleMaps
 */
(function() {
  // Compatibility ADventori.Maps
  ADventori.GoogleMaps = ADventori.Maps = {};

  ADventori.GoogleMaps.StaticMap =  function(conf) {
      conf = conf || {};
      conf.mapContainer = conf.mapContainer || null;
      conf.markeur = conf.markeur || undefined;
      conf.zoom = conf.zoom || 7;
      conf.size = conf.size || '40x40';
      conf.scale = conf.scale || 1;
      conf.retailers = conf.retailers || undefined;
      conf.format = conf.format || 'JPEG';
      conf.maptype = conf.maptype || 'roadmap';
      conf.language = conf.language || 'fr';
      conf.key = conf.key || undefined;
      conf.type = conf.type || 'background';
      this.conf = conf;
      this.init();
  };

  ADventori.GoogleMaps.StaticMap.prototype.init = function() {
      var self = this;
      if (!this.conf.mapContainer) {
          ADventori.error({
              name: 'GoogleMaps.StaticMap',
              message: 'No container for map'
          }, PrintTracker.AdErrorEnablerArgs);
          return;
      }
      this.makeMaps();
      return this;
  };

    ADventori.GoogleMaps.StaticMap.prototype.makeMaps = function() {
        var retailerTab = this.conf.retailers;
        var retailerPlaces = '';
        var url;
        for (i = 0; i < retailerTab.length; i++) {
            var Lat = retailerTab[i].gmLatitude, Lng = retailerTab[i].gmLongitude;
            (i == 0) ? (retailerPlaces = Lat + ',' + Lng) : (retailerPlaces += '|' + Lat + ',' + Lng);
        }
        if (ADventori.conf && ADventori.conf.placementId) {
            url = ADventori.conf.request.protocol + ADventori.conf.request.hostname + '/staticMap/signature?' + _utils.toQueryString({
                'size': this.conf.size,
                'markers': 'icon:' + this.conf.markeur + '|shadow:false|' + retailerPlaces,
                'zoom': this.conf.zoom,
                'scale': this.conf.scale,
                'formatImage': this.conf.format,
                'maptype': this.conf.maptype,
                'placementId': ADventori.conf.placementId,
                'key': this.conf.key,
                'preview': ADventori.env.preview
            });
        } else {
            if (!this.conf.key) {
                ADventori.error({
                    name: 'GoogleMaps.StaticMap',
                    message: 'No Google map key'
                }, PrintTracker.AdErrorEnablerArgs);
                return;
            }
            url = 'https://maps.googleapis.com/maps/api/staticmap?' + _utils.toQueryString({
                'size': this.conf.size,
                'markers': 'icon:' + this.conf.markeur + '|shadow:false|' + retailerPlaces,
                'zoom': this.conf.zoom,
                'scale': this.conf.scale,
                'format': this.conf.format,
                'maptype': this.conf.maptype,
                'key': this.conf.key
            });
        }
        if (this.conf.type == 'image') {
            var img = document.createElement('img');
            img.src = url;
            this.conf.mapContainer.appendChild(img);
        } else {
            this.conf.mapContainer.style.cssText = 'background-image:url(' + url + ');';
        }
    };

  ADventori.GoogleMaps.DynamicMap =  function(conf) {
      conf = conf || {};
      conf.mapContainer = conf.mapContainer || null;
      conf.markeur = conf.markeur || undefined;
      conf.zoom = conf.zoom || 8;
      conf.retailers = conf.retailers|| undefined;
      conf.map = conf.map || undefined;
      conf.options = conf.options || null;
      this.conf = conf;
      this.init();
      return this.conf.map;
  };

  ADventori.GoogleMaps.DynamicMap.prototype.init = function() {
      this.makeMaps();
      this.dropPin();
  };

  ADventori.GoogleMaps.DynamicMap.prototype.makeMaps = function() {
      var retailerTab = this.conf.retailers;
      var options = {zoom: this.conf.zoom, disableDefaultUI: true};
      for (var key in this.conf.options) {
          options[key]=this.conf.options[key];
      }
      if(retailerTab.length==1){
          var coord = new google.maps.LatLng(retailerTab[0].gmLatitude, retailerTab[0].gmLongitude);
          options['center']=coord;
          map = new google.maps.Map(this.conf.mapContainer,options);
      }else{
          var result =new google.maps.LatLngBounds();
          options['center']=result.getCenter();
          for (i = 0; i < retailerTab.length; i++) {
              var t = {name:retailerTab[i].name,lat:retailerTab[i].gmLatitude,lng:retailerTab[i].gmLongitude };
              result.extend(t);
          }
          map = new google.maps.Map(this.conf.mapContainer, options);
          map.fitBounds(result);
      }
      this.conf.map = map;
  };

  ADventori.GoogleMaps.DynamicMap.prototype.dropPin = function() {
      var retailerTab = this.conf.retailers ;
      for (i = 0; i < retailerTab.length; i++) {
          var villes = retailerTab[i];
          var city = villes.name;
          var Lat = villes.gmLatitude, Lng = villes.gmLongitude;
          var myLatLng = new google.maps.LatLng(Lat, Lng);
          var infoWindow = new google.maps.InfoWindow();
          var cityMArkerOpt = {
              position: myLatLng,
              map: this.conf.map,
              icon: this.conf.markeur,
              title: city,
              animation: google.maps.Animation.DROP
          }
          cityMarker = new google.maps.Marker(cityMArkerOpt);
          (function(i) {
              google.maps.event.addListener(cityMarker, "click", function() {
                  var villes = retailerTab[i];
                  infoWindow.close();
                  infoWindow.setContent("<div><strong>" + villes.name + "</strong></div>");
                  infoWindow.open(map, this);
              });
          })(i);
      }
  };
})();
/**
* ADventori.Video
*/
(function() {
  var Video = function(conf) {
   if (!(this instanceof Video)) {
      return new Video(conf);
  }
   conf = conf || {};
   conf.videoElement = conf.videoElement || null;
   conf.controlsElement = null;
   conf.urlMp4 = conf.urlMp4 || undefined;
   conf.urlWebM = conf.urlWebM || undefined;
   conf.autoplay = conf.autoplay || false;
   conf.showControls = conf.showControls || false;
   conf.lightControls = conf.lightControls || false;
   conf.sound = conf.sound || false;
   conf.cssStyle = conf.cssStyle || undefined;
   conf.controlsStyle = conf.controlsStyle || undefined;
   conf.clicUrl = conf.clicUrl || null;
   conf.quartileEvents = [
       {event: 'AdVideoStart', value: 0},
       {event: 'AdVideoFirstQuartile', value: 25},
       {event: 'AdVideoMidpoint', value: 50},
       {event: 'AdVideoThirdQuartile', value: 75},
       {event: 'AdVideoComplete', value: 99}
   ];
   conf.lastQuartileIndex = 0;
   this.conf = conf;
   this.init();
};

Video.prototype.init = function() {
   var self = this;
   this.makeVideo();
   return this;
};

Video.prototype.makeVideo = function() {
   var flagGWD = false, flagEdge = false, flagHTML = false;

   function setAttributes(el, options) {
      for (var attr in options) {
        el.setAttribute(attr, options[attr]);
      }
   }

   var bounds;
   if (this.conf.videoContainer.width != null) {
      //edge
      bounds = {
        "width": parseInt(this.conf.videoContainer.width()),
        "height": parseInt(this.conf.videoContainer.height())
      };
      flagEdge = true;
   } else {
       var className = '';
       if (this.conf.videoContainer.parentElement && this.conf.videoContainer.parentElement.parentElement) {
           className = this.conf.videoContainer.parentElement.parentElement.className;
       }
      if (this.conf.videoContainer.style.width == "" && className.indexOf("gwd-") != -1) {
        //GWD
        bounds = {
          "width": parseInt(getComputedStyle(this.conf.videoContainer).width),
          "height": parseInt(getComputedStyle(this.conf.videoContainer).height)
        };
        flagGWD = true;
    } else {
        //html5
        bounds = {
          "width": parseInt(getComputedStyle(this.conf.videoContainer).width),
          "height": parseInt(getComputedStyle(this.conf.videoContainer).height)
        };
        flagHTML = true;
    }
}
var container = document.createElement("div");
this.conf.videoContainer.appendChild(container);
container.style.visibility = "visible";
container.style.position = "relative";
container.style.left = 0;
container.style.top = 0;
(flagGWD) ? container.style.overflow = "hidden" : container.style.overflow = "auto";
var video = document.createElement('video');
video.width = bounds.width - 2;
video.height = bounds.height;
var self = this;
video.ontimeupdate = function() {
    self.trackQuartile()
};
this.conf.videoElement = video;
if (this.conf.showControls != undefined) {
    (this.conf.showControls == true || this.conf.showControls == "true") ? (video.setAttribute("controls", "controls")) : (video.removeAttribute("controls"));
}
if (this.conf.lightControls != undefined) {
    if (this.conf.lightControls) {
        var playerContainer = document.createElement('div');
        playerContainer.id = 'controlContainer';
        playerContainer.style.cssText = 'z-Index:9;width:100%;height:10%;position:absolute;bottom:0;text-align:center;';
        this.conf.controlsElement = playerContainer;
        var playButton = document.createElement('span');
        playButton.style.cssText = 'position:absolute;top:0px;left:5%;z-Index:9;color:inherit;';
        (this.conf.autoplay) ? (playButton.setAttribute('class', 'icon-pause-circled')) : playButton.setAttribute('class', 'icon-play-circled');
        playButton.onmouseover = function(e) {
            playButton.style.opacity = 0.5;
        }
        playButton.onmouseout = function(e) {
            playButton.style.opacity = 1;
        }
        playButton.onclick = function(e) {
            e.stopPropagation();
            (self.conf.videoElement.paused) ? (self.play(), e.currentTarget.setAttribute('class', 'icon-pause-circled')) : (self.pause(), e.currentTarget.setAttribute('class', 'icon-play-circled'));
        }
        playerContainer.appendChild(playButton);
        var muteButton = document.createElement('span');
        muteButton.style.cssText = 'position:absolute;top:0px;right:5%;z-Index:9;color:inherit;';
        (this.conf.sound) ? (muteButton.setAttribute('class', 'icon-volume-off')) : (muteButton.setAttribute('class', 'icon-volume-up'));
        muteButton.onmouseover = function(e) {
            muteButton.style.opacity = 0.5;
        }
        muteButton.onmouseout = function(e) {
            muteButton.style.opacity = 1;
        }
        muteButton.onclick = function(e) {
            e.stopPropagation();
            (self.conf.videoElement.muted) ? (self.unmute(), e.currentTarget.setAttribute('class', 'icon-volume-off')) : (self.mute(), e.currentTarget.setAttribute('class', 'icon-volume-up'));
        }
        playerContainer.appendChild(muteButton);
        video.onended = function() {
            playButton.style.display='none';
            muteButton.style.display='none';
            var restartButton = document.createElement('span');
            restartButton.style.cssText = 'top:0px;z-Index:9;color:inherit;';
            restartButton.setAttribute('class', 'icon-cw');
            restartButton.onmouseover = function(e) {
                restartButton.style.opacity = 0.5;
            }
            restartButton.onmouseout = function(e) {
                restartButton.style.opacity = 1;
            }
            restartButton.onclick = function(e) {
                e.stopPropagation();
                playButton.style.display='block';
                muteButton.style.display='block';
                self.restart();
                restartButton.style.display = 'none';
            }
            playerContainer.appendChild(restartButton);
        };
        if (this.conf.controlsStyle) {
            var cssPair;
            var cssStyles = this.conf.controlsStyle.split(";");
            var i = cssStyles.length;
            while (i) {
                cssPair = cssStyles[--i].split(":");
                if (cssPair.length == 2) {
                    this.conf.controlsElement.style[cssPair[0].trim()] = cssPair[1].trim();
                }
            }
        }
        this.conf.videoContainer.insertBefore(playerContainer, this.conf.videoContainer.firstChild);
    }
}
if (this.conf.autoplay != undefined) {
    (this.conf.autoplay == true || this.conf.autoplay == 'true' ) ? ( video.autoPlay = true, video.autoplay = 'autoplay', video.onloadstart = function() {
        video.play();
    }) : (video.autoPlay = 'false');

    if (flagGWD && this.conf.autoplay) {
      video.addEventListener("canplaythrough", function() {
          video.play();
      }, true);
    }
}
(this.conf.sound == false || this.conf.sound == "false") ? (video.muted = true) : null;
if (this.conf.urlMp4) {
    var mp4Url = document.createElement("source");
    mp4Url.type = "video/mp4";
    mp4Url.src = this.conf.urlMp4;
    video.appendChild(mp4Url);
    container.appendChild(video);
}
if (this.conf.urlWebM) {
    var webMUrl = document.createElement("source");
    webMUrl.type = "video/webm";
    webMUrl.src = this.conf.urlWebM;
    video.appendChild(webMUrl);
    container.appendChild(video);
}

if (this.conf.cssStyle) {
    var cssPair;
    var cssStyles = this.conf.cssStyle.split(";");
    var i = cssStyles.length;
    while (i) {
        cssPair = cssStyles[--i].split(":");
        if (cssPair.length == 2) {
          video.style[cssPair[0].trim()] = cssPair[1].trim();
        }
    }
}
if (this.conf.clicUrl != undefined) {
    if(flagEdge){
        this.conf.videoContainer[0].style.cursor = "pointer";
        var self = this;
        this.conf.videoContainer[0].onclick = function(e) {
            ADventori.click(e, self.conf.clicUrl);
            (self.conf.showControls == true) ? self.conf.videoElement.pause() : '';
        };
    }else{
        this.conf.videoContainer.style.cursor = "pointer";
        var self = this;
        this.conf.videoContainer.onclick = function(e) {
          ADventori.click(e, self.conf.clicUrl);
          (self.conf.showControls == true) ? self.conf.videoElement.pause() : '';
        };
    }
}
}

Video.prototype.play = function() {
   var self = this;
   self.conf.videoElement.play();
   this.trackEvent('AdVideoResume', '');
   return this;
};

Video.prototype.pause = function() {
   var self = this;
   self.conf.videoElement.pause();
   this.trackEvent('AdVideoPause', '');
   return this;
};

Video.prototype.mute = function() {
   var self = this;
   self.conf.videoElement.muted = true;
   this.trackEvent('AdVideoMute', '');
   return this;
};
Video.prototype.unmute = function() {
   var self = this;
   self.conf.videoElement.muted = false;
   this.trackEvent('AdVideoUnmute', '');
   return this;
};
Video.prototype.restart = function() {
   var self = this;
   self.conf.videoElement.play();
   this.trackEvent('AdVideoRewind', '');
   return this;
};

Video.prototype.trackQuartile = function() {
   var self = this;
   var quartile = this.conf.videoElement.duration / 4;
   if (self.conf.lastQuartileIndex >= self.conf.quartileEvents.length) {
       return;
   }
   if (self.conf.videoElement.duration >= 0 && self.conf.videoElement.currentTime >= 0) {
       var percentPlayed = self.conf.videoElement.currentTime / self.conf.videoElement.duration * 100.0;
       if (percentPlayed >= self.conf.quartileEvents[self.conf.lastQuartileIndex].value && self.conf.lastQuartileIndex != self.conf.quartileEvents.length) {
           this.callNextQuartile();
       }
   }
};

Video.prototype.callNextQuartile = function() {
   var self = this;
   self.conf.lastQuartileEvent = self.conf.quartileEvents[self.conf.lastQuartileIndex].event;
   console.log("QuartileEvent ", self.conf.lastQuartileEvent);
   //ADventori.exec('videoQuartile', [self.conf.lastQuartileEvent, self.conf.lastQuartileIndex]);
   ADventori.exec('videoQuartile', ['AdVideoQuartile', self.conf.lastQuartileIndex]);
   self.conf.lastQuartileIndex += 1;
}

Video.prototype.trackEvent = function(name, id) {
   var self = this;
   console.log("TrackEvent ", name);
   ADventori.exec('videoQuartile', [name, id]);
}

  ADventori.Video = Video;
})();

    /**
     * ADventori.SlidingBanner
     */
    (function (ADventori) {
        /*
          conf: {direction, adContainer, layoutToShow, urlClick1, urlClick2, scope}
        */

        ADventori.SlidingBanner = {};

        var SlidingBanner = function(conf){
            this.cursorX = 0, this.cursorY = 0;
            conf = conf || {};
            (conf.direction && (conf.direction == 'horizontal' || conf.direction == 'vertical'))? this.direction = conf.direction : this.direction = 'horizontal';
            (conf.adContainer)?this.adContainer = { id:conf.adContainer, adContainerWidth:conf.adContainer.offsetWidth,adContainerHeight:conf.adContainer.offsetHeight}: this.adContainer = undefined;
            this.layoutToShow = conf.layoutToShow || undefined;
            this.urlClick1 = conf.urlClick1 || undefined;
            this.urlClick2 = conf.urlClick2 || undefined;
            if(this.adContainer){
                if(conf.scope && conf.scope == 'window'){
                    this.scope = window;
                }else if(conf.scope && conf.scope == 'bannerAndWindow'){//Arche mode
                    this.scope == ADventori.Event;
                    this.archeMode=true;
                }else{
                    this.scope = this.adContainer.id;
                    this.allowMobile=true;
                }
            }
            if(this.adContainer){
                var bannerPosition = this.adContainer.id.getBoundingClientRect(), scrollLeft = document.documentElement.scrollLeft, scrollTop = document.documentElement.scrollTop;
                this.differenceWindowBannerX = Math.floor(bannerPosition.left + scrollLeft);
                this.differenceWindowBannerY = Math.floor(bannerPosition.top + scrollTop);
            }
            (this.confElementsExist())? this.init() : console.log(this.showError());
        }
        SlidingBanner.prototype.confElementsExist = function(){
            return(this.adContainer != undefined && this.layoutToShow != undefined && this.urlClick1 != undefined && this.urlClick2 != undefined);
        }
        SlidingBanner.prototype.showError = function(){
            if(this.adContainer == undefined){return 'adContainer is undefined'}
            if(this.layoutToShow == undefined){return 'layoutToShow is undefined'}
            if(this.urlClick1 == undefined){return 'urlClick1 is undefined'}
            if(this.urlClick2 == undefined){return 'urlClick2 is undefined'}
        }
        SlidingBanner.prototype.init = function(){
            var self=this;
            this.adClickArea();
            this.doItSlide();
            this.initScope(this.scope);
            if(this.archeMode){this.initScope(this.adContainer.id)}//Execute a second time to manage Arche mode (window + banner)
            if ((this.allowMobile)&& (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch)) {
                this.initScopeMobile(this.scope);
            }
            window.addEventListener('resize', function(event) {
                self.adContainer.adContainerWidth = self.adContainer.id.offsetWidth;
                self.adContainer.adContainerHeight = self.adContainer.id.offsetHeight;
                self.doItSlide();
            });
        }
        SlidingBanner.prototype.doItSlide = function(){
            this.layoutToShow.style.clip = (this.direction == 'vertical')?"rect(0px "+this.adContainer.adContainerWidth+"px "+this.cursorY+"px 0px)":"rect(0px "+this.cursorX+"px "+this.adContainer.adContainerHeight+"px 0px)";
        }
        SlidingBanner.prototype.chooseClick = function(event){
            var click = (this.direction == 'vertical')?(this.cursorY <= this.adContainer.adContainerHeight/2) ? this.urlClick1 : this.urlClick2 :(this.cursorX <= this.adContainer.adContainerWidth/2) ? this.urlClick1 : this.urlClick2;
            document.getElementById('clickAreaSlidingBannerADventori').setAttribute("onclick","ADventori.click(event,'"+click+"')" );
        }
        SlidingBanner.prototype.adClickArea = function(){
            var clickArea = document.createElement('a');
            clickArea.id="clickAreaSlidingBannerADventori";
            clickArea.href="javascript:void(0);"
            clickArea.setAttribute('style', 'display:block;width:100%;height:100%;position:absolute;top:0;left:0;outline:none;')
            this.adContainer.id.appendChild(clickArea);
        }
        SlidingBanner.prototype.initScope = function(scope){
            var self=this;
            scope.addEventListener('mousemove', function(event){
                (event.preventDefault)?	event.preventDefault():event.returnValue = false;
                self.cursorX = event.pageX - self.differenceWindowBannerX;
                self.cursorY = event.pageY - self.differenceWindowBannerY;
                self.doItSlide();
                self.chooseClick(event);
            });
        }
        SlidingBanner.prototype.initScopeMobile = function(scope){
            var self=this;
            scope.addEventListener('touchmove', function(e){
                (e.preventDefault)? e.preventDefault(): e.returnValue = false;
                for (var i=0; i < e.changedTouches.length; i++) {
                    self.cursorX = e.changedTouches[i].pageX - self.differenceWindowBannerX;
                    self.cursorY = e.changedTouches[i].pageY - self.differenceWindowBannerY;
                    self.doItSlide();
                    self.chooseClick(e);
                }
            });
        }


        ADventori.SlidingBanner = SlidingBanner;

    })(ADventori);

} catch(_e) {
  (function() {
    var error = '';
    var context = '';
    var userAgent = '';
    try {
      error = (_e && _e.name ? (_e.name + ': ' + (_e.message || '')) : (_e || '')) + '';
    } catch(__e) {}
    try {
      context = window.location.href;
    } catch(__e) {}
    try {
      userAgent = (window.navigator && window.navigator.userAgent);
    } catch(__e) {}
    document.createElement('img').src = ('https://adventori.com/tracker/trackPrint?tk_type=AdErrorEnablerInitJs' + '&tk_campaignId=0' + '&tk_cartoucheId=0' + '&tk_urlClick=' + encodeURIComponent(error) + '&tk_context=' + encodeURIComponent(context) + '&tk_retailer_4=' + encodeURIComponent(userAgent));
    try {
      window.console && window.console.error && window.console.error('[Enabler]', 'AdErrorEnablerInitJs', _e);
    } catch(__e) {}
  })();
}
})();
