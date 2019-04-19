(function (window) {
  var ARRAY = 'array',
    BOOLEAN = 'boolean',
    DATE = 'date',
    ERROR = 'error',
    FUNCTION = 'function',
    NUMBER = 'number',
    NULL = 'null',
    OBJECT = 'object',
    REGEX = 'regexp',
    STRING = 'string',
    UNDEFINED = 'undefined',
    TYPES = {
      'undefined': UNDEFINED,
      'number': NUMBER,
      'boolean': BOOLEAN,
      'string': STRING,
      '[object Number]': NUMBER,
      '[object Boolean]': BOOLEAN,
      '[object String]': STRING,
      '[object Function]': FUNCTION,
      '[object RegExp]': REGEX,
      '[object Array]': ARRAY,
      '[object Date]': DATE,
      '[object Object]': OBJECT,
      '[object Error]': ERROR
    },
    _toStr = Object.prototype.toString,
    _type = function (o) {
      return TYPES[typeof o] || TYPES[_toStr.call(o)] || (o ? OBJECT : NULL);
    },

    _isNull = function (o) {
      return _type(o) === NULL;
    },
    _isUndefined = function (o) {
      return _type(o) === UNDEFINED;
    },
    _isFunction = function (o) {
      return _type(o) === FUNCTION;
    },
    _isBoolean = function (o) {
      return _type(o) === BOOLEAN;
    },
    _isNumber = function (o) {
      return _type(o) === NUMBER;
    },
    _isString = function (o) {
      return _type(o) === STRING;
    },
    _isArray = Array.isArray || function (o) {
      return _type(o) === ARRAY;
    },
    _isObject = function (o) {
      return _type(o) === OBJECT;
    },

    MAP = Array.prototype.map,
    _map = MAP ?
    function (array, callback, context) {
      return MAP.call(array, callback, context);
    } :
    function (array, callback, context) {
      var ret = [],
        i = 0,
        len = array.length;
      if (_isFunction(callback)) {
        for (; i < len; i++) {
          ret[i] = callback.call(context, array[i], i, array);
        }
        return ret;
      }
      return slice.call(array, 0);
    },

    stack = [],

    pieceParser = function (eq) {
      var _unescape = window.QueryString.unescape;

      return function parsePiece(key, val) {
        var sliced, numVal, head, tail, ret;
        if (arguments.length !== 2) {
          // key=val, called from the map/reduce
          key = key.split(eq);
          return parsePiece(
            _unescape(key.shift()),
            _unescape(key.join(eq))
          );
        }
        key = key.replace(/^\s+|\s+$/g, '');
        if (_isString(val)) {
          val = val.replace(/^\s+|\s+$/g, '');
          // convert numerals to numbers
          if (!isNaN(val)) {
            numVal = +val;
            if (val === numVal.toString(10)) {
              val = numVal;
            }
          }
        }
        sliced = /(.*)\[([^\]]*)\]$/.exec(key);
        if (!sliced) {
          ret = {};
          if (key) {
            ret[key] = val;
          }
          return ret;
        }
        // ["foo[][bar][][baz]", "foo[][bar][]", "baz"]
        tail = sliced[2];
        head = sliced[1];

        // array: key[]=val
        if (!tail) {
          return parsePiece(head, [val]);
        }

        // obj: key[subkey]=val
        ret = {};
        ret[tail] = val;
        return parsePiece(head, ret);
      };
    },

    // the reducer function that merges each query piece together into one set of params
    mergeParams = function (params, addition) {
      return (
        // if it's uncontested, then just return the addition.
        (!params) ? addition
        // if the existing value is an array, then concat it.
        :
        (_isArray(params)) ? params.concat(addition)
        // if the existing value is not an array, and either are not objects, arrayify it.
        :
        (!_isObject(params) || !_isObject(addition)) ? [params].concat(addition)
        // else merge them as objects, which is a little more complex
        :
        mergeObjects(params, addition)
      );
    },

    // Merge two *objects* together. If this is called, we've already ruled
    // out the simple cases, and need to do the for-in business.
    mergeObjects = function (params, addition) {
      for (var i in addition) {
        if (i && addition.hasOwnProperty(i)) {
          params[i] = mergeParams(params[i], addition[i]);
        }
      }
      return params;
    },

    /**
     *
     */
    _parse = function (qs) {
      var arr = qs.split('&'),
        arrMap = _map(arr, pieceParser('=')),
        result = {},
        i = 0,
        length = arrMap.length;

      for (; i < length; i++) {
        result = mergeParams(result, arrMap[i]);
      }

      return result;
    },

    _stringify = function (obj, arrayKey, name) {
      var begin, end, i, l, n, s,
        sep = '&',
        eq = '=',
        _escape = window.QueryString.escape;
      arrayKey = !!arrayKey;

      if (_isNull(obj) || _isUndefined(obj) || _isFunction(obj)) {
        return name ? _escape(name) + eq : '';
      }

      if (_isBoolean(obj) || _toStr.call(obj) === '[object Boolean]') {
        obj = +obj;
      }

      if (_isNumber(obj) || _isString(obj)) {
        return _escape(name) + eq + _escape(obj);
      }

      if (_isArray(obj)) {
        s = [];
        name = arrayKey ? name + '[]' : name;
        l = obj.length;
        for (i = 0; i < l; i++) {
          s.push(_stringify(obj[i], arrayKey, name));
        }

        return s.join(sep);
      }

      // Check for cyclical references in nested objects
      for (i = stack.length - 1; i >= 0; --i) {
        if (stack[i] === obj) {
          return '';
        }
      }

      stack.push(obj);
      s = [];
      begin = name ? name + '[' : '';
      end = name ? ']' : '';
      for (i in obj) {
        if (obj.hasOwnProperty(i)) {
          n = begin + i + end;
          s.push(_stringify(obj[i], arrayKey, n));
        }
      }

      stack.pop();
      s = s.join(sep);
      if (!s && name) {
        return name + "=";
      }

      return s;
    };


  window.QueryString = {
    escape: encodeURIComponent,
    unescape: function (s) {
      return decodeURIComponent(s.replace(/\+/g, ' '));
    },
    stringify: _stringify,
    parse: _parse
  };
})(window);

/**
 * Cross-domain POST
 */
(function (window) {
  var supportPostMsg = !!window.postMessage,

    _extend = function (dest, src, overwrite) {
      if (!src || !dest || dest === src) {
        return dest || null;
      }
      var key;
      if (overwrite) { // 覆盖模式
        for (key in src) {
          dest[key] = src[key];
        }
      } else { // 非覆盖模式
        for (key in src) {
          if (!dest.hasOwnProperty(key)) {
            dest[key] = src[key];
          }
        }
      }
      return dest;
    },

    ARRAY = 'array',
    BOOLEAN = 'boolean',
    DATE = 'date',
    ERROR = 'error',
    FUNCTION = 'function',
    NUMBER = 'number',
    NULL = 'null',
    OBJECT = 'object',
    REGEX = 'regexp',
    STRING = 'string',
    UNDEFINED = 'undefined',
    TYPES = {
      'undefined': UNDEFINED,
      'number': NUMBER,
      'boolean': BOOLEAN,
      'string': STRING,
      '[object Number]': NUMBER,
      '[object Boolean]': BOOLEAN,
      '[object String]': STRING,
      '[object Function]': FUNCTION,
      '[object RegExp]': REGEX,
      '[object Array]': ARRAY,
      '[object Date]': DATE,
      '[object Object]': OBJECT,
      '[object Error]': ERROR
    },
    _toStr = Object.prototype.toString,
    _type = function (o) {
      return TYPES[typeof o] || TYPES[_toStr.call(o)] || (o ? OBJECT : NULL);
    },
    _isNull = function (o) {
      return _type(o) === NULL;
    },
    _isUndefined = function (o) {
      return _type(o) === UNDEFINED;
    },
    _isFunction = function (o) {
      return _type(o) === FUNCTION;
    },
    _isBoolean = function (o) {
      return _type(o) === BOOLEAN;
    },
    _isNumber = function (o) {
      return _type(o) === NUMBER;
    },
    _isString = function (o) {
      return _type(o) === STRING;
    },
    _isArray = Array.isArray || function (o) {
      return _type(o) === ARRAY;
    },
    _isObject = function (o) {
      return _type(o) === OBJECT;
    },

    _arrayify = (function () {
      var SLICE = Array.prototype.slice,
        sliceIt = function (arr) {
          return SLICE.call(arr, 0);
        };

      try {
        SLICE.call(document.documentElement.childNodes, 0);
      } catch (e) {
        sliceIt = function (arr) {
          // IE 下对 NodeList、HTMLCollection 等 slice 会抛异常
          var result = [],
            length = arr.length,
            i = 0;
          for (; i < length; i++) {
            result[i] = arr[i];
          }
          return result;
        };
      }
      return function (obj) {
        if (obj === undefined) return [];

        if (_isArray(obj)) return obj;

        if (obj === null || typeof obj.length !== 'number' ||
          _isString(obj) || _isFunction(obj)) {
          return [obj];
        }

        return sliceIt(obj);
      };
    })(),

    _spTrim = String.prototype.trim,
    _trim = _spTrim ?
    function (s) {
      return (!s) ? '' : _spTrim.call(s);
    } :
    function (s) {
      return (!s) ? '' : s.toString().replace(/^\s+|\s+$/g, '');
    },

    _id = function (prefix) {
      prefix = prefix || '';
      var rnd = (Math.random() + '').slice(2),
        date = (new Date()).getTime();
      return '' + prefix + date + rnd;
    },

    document = window.document,
    _cloneNode = function (node) {
      var newNode = node.cloneNode(true);
      // MSIE 6/7 bug related to some form field elements
      if (ie < 8) {
        newNode.innerHTML = node.innerHTML;
      }
      return newNode;
    },
    _divCreator = function (str, doc) {
      var frag = doc.createElement('div');
      frag.innerHTML = str;
      return frag;
    },
    _createFragment = function (nodes, doc) {
      if (nodes && nodes.length) {
        var frag = null,
          i = 0,
          length = nodes.length;

        doc = doc || nodes[0].ownerDocument;
        frag = doc.createDocumentFragment();

        if (nodes.item) { // a live NodeList
          nodes = _arrayify(nodes);
        }

        for (i = 0, len = nodes.length; i < len; i++) {
          frag.appendChild(nodes[i]);
        }
        return frag;
      }
      return null;
    },
    _createFromStr = function (str, doc) {
      if (typeof str === 'string' && (str = _trim(str))) {
        var nodes = null,
          created, creator = _divCreator;
        doc = doc || document;

        created = creator(str, doc).childNodes;
        if (created.length === 1) {
          nodes = created[0].parentNode.removeChild(created[0]);
        } else {
          nodes = _createFragment(created, doc);
        }
        return nodes;
      }
      return null;
    },

    _defUrl = 'http://api.sina.com.cn/script/javascript/postmsg.html',
    _defDomain = 'sina.com.cn',

    XDPost = {
      extend: _extend,
      arrayify: _arrayify,
      trim: _trim,
      later: function (options) {
        var timerId, f, delayFunc, fn, delay, isPeriodic, params, context,
          defaults = {
            fn: function () {},
            delay: 0,
            isPeriodic: false,
            context: null,
            params: []
          };

        if (!_isFunction(options) && _isObject(options)) {
          _extend(options, defaults, false);
          fn = options.fn;
          delay = options.delay || 0;
          isPeriodic = !!options.isPeriodic;
          params = options.params;
          context = options.context;
        } else {
          fn = arguments[0];
          delay = arguments[1] || 0;
          isPeriodic = !!arguments[2];
          context = arguments[3] || null;
          params = arguments[4] || [];
        }


        f = fn;
        if (context && typeof fn === 'string') {
          f = context[fn];
        }

        if (!f) return null;

        delayFunc = (params && params.length) ? // (typeof params !== 'undefined') ?
          function () {
            f.apply(context, params);
          } :
          function () {
            f.call(context);
          };

        timerId = isPeriodic ? setInterval(delayFunc, delay) : setTimeout(delayFunc, delay);

        // 返回定时器对象
        return {
          id: timerId,
          periodic: isPeriodic,
          cancel: function () {
            if (this.periodic) {
              clearInterval(this.id);
            } else {
              clearTimeout(this.id);
            }
          }
        };
      },
      type: _type,
      isNull: _isNull,
      isUndefined: _isUndefined,
      isFunction: _isFunction,
      isBoolean: _isBoolean,
      isNumber: _isNumber,
      isString: _isString,
      isArray: _isArray,
      isObject: _isObject,
      createNode: _createFromStr,
      cloneNode: _cloneNode,
      generateId: _id,

      mode: supportPostMsg ? 'html5' : 'iframe',
      config: {
        proxyUrl: _defUrl,
        domain: _defDomain,
        form: null
      },
      setConfig: function (cfg) {
        _extend(XDPost.config, cfg, true);
      },

      send: supportPostMsg ?
        function (cfg) {
          var sender = XDPost.sender,
            config = XDPost.config;
          if (!sender) {
            sender = new XDPost.Html5MsgSender({
              proxyUrl: config.proxyUrl
            });
            this.sender = sender;
          }
          sender.send(cfg);
          return sender;
        } : function (cfg) {
          var sender, config = XDPost.config;
          sender = new XDPost.IframeMsgSender({
            domain: config.domain,
            form: config.form
          });
          sender.send(cfg);
          return sender;
        }
    };

  window.XDPost = XDPost;
})(window);

/**
 * Cross-domain POST using window.postMessage()
 */
(function (window) {
  var XDPost = window.XDPost,
    _extend = XDPost.extend,
    _isFunction = XDPost.isFunction,
    _later = XDPost.later,

    _add = document.addEventListener ?
    function (elem, type, fn) {
      if (elem && elem.addEventListener) {
        elem.addEventListener(type, fn, false);
      }
    } :
    function (elem, type, fn) {
      if (elem && elem.attachEvent) {
        elem.attachEvent('on' + type, fn);
      }
    },
    _remove = document.removeEventListener ?
    function (elem, type, fn) {
      if (elem && elem.removeEventListener) {
        elem.removeEventListener(type, fn, false);
      }
    } :
    function (elem, type, fn) {
      if (elem && elem.detachEvent) {
        elem.detachEvent('on' + type, fn);
      }
    },

    NOOP = function () {},
    RE_URL = /^http\s?\:\/\/[a-z\d\-\.]+/i,
    ID_PREFIX = 'sina-xdpost-iframe-',
    _id = XDPost.generateId,

    /**
     * Message sender class
     */
    MsgSender = function (cfg) {
      if (!(this instanceof MsgSender)) {
        return new MsgSender(cfg);
      }
      cfg = cfg || {};
      this.init(cfg);
    };

  _extend(MsgSender.prototype, {
    ready: false,

    init: function (cfg) {
      if (this.ready) {
        return;
      }
      var me = this,
        iframeId, iframeHtml, iframe, loaded, receiver,
        proxyUrl = cfg.proxyUrl;
      me.onsuccess = cfg.onsuccess || NOOP;
      me.onfailure = cfg.onfailure || NOOP;
      if (!proxyUrl) {
        return;
      }

      receiver = function (e) {
        if (!me.ready || e.origin !== me.target) {
          return;
        }
        var ret = e.data;
        if (!ret || ret === 'failure') {
          me.onfailure && me.onfailure();
        } else {
          me.onsuccess && me.onsuccess(e.data);
        }
      };
      _add(window, 'message', receiver);

      // insert an iframe
      iframeId = _id(ID_PREFIX);
      iframeHtml = '<iframe id="' + iframeId + '" name="' + iframeId +
        '" src="' + proxyUrl + '" frameborder="0" ' +
        'style="width:0;height:0;display:none;"></iframe>';
      iframe = XDPost.createNode(iframeHtml);
      loaded = function () {
        me.ready = true;
        var src = iframe.src,
          matched = src.match(RE_URL);
        me.target = (matched && matched[0]) || '*';
      };
      _add(iframe, 'load', loaded);
      document.body.insertBefore(iframe, document.body.firstChild);

      me._iframe = iframe;
      me._iframeLoaded = loaded;
      me._receiver = receiver;
    },

    send: function (cfg) {
      cfg = cfg || {};
      var me = this,
        url = cfg.url,
        data = cfg.data,
        onsuccess = cfg.onsuccess,
        onfailure = cfg.onfailure;

      if (!url || typeof url !== 'string') {
        return;
      }
      if (onsuccess) {
        me.onsuccess = onsuccess;
      }
      if (onfailure) {
        me.onfailure = onfailure;
      }

      if (!me.ready) {
        _later(function () {
          me.send(cfg);
        }, 50);
        return;
      }

      if (data) {
        data += '&_url=' + window.encodeURIComponent(url);
      } else {
        data = '_url=' + window.encodeURIComponent(url);
      }
      me._iframe.contentWindow.postMessage(data, me.target);
    },

    destroy: function () {
      var iframe = this._iframe;
      _remove(iframe, 'load', this._iframeLoaded);
      iframe.parentNode.removeChild(iframe);
      _remove(window, 'message', this._receiver);
      this._iframe = null;
      this._iframeLoaded = null;
      this._receiver = null;
    }
  });

  XDPost.Html5MsgSender = MsgSender;
})(window);

/**
 * Cross-domain POST using iframe
 */
(function (window) {
  var XDPost = window.XDPost,
    _extend = XDPost.extend,
    // _ready = XDPost.ready,
    _later = XDPost.later,
    QS = window.QueryString,
    _parse = QS.parse,

    NOOP = function () {},
    FORM_PREFIX = 'sina-xdpost-form-',
    IFRAME_PREFIX = 'sina-xdpost-iframe-',
    _id = XDPost.generateId,

    /**
     * Message sender class
     */
    MsgSender = function (cfg) {
      if (!(this instanceof MsgSender)) {
        return new MsgSender(cfg);
      }
      cfg = cfg || {};
      this.init(cfg);
    };

  MsgSender.defaultDomain = 'sina.com.cn';
  _extend(MsgSender.prototype, {
    ready: false,

    init: function (cfg) {
      if (this.ready) {
        return;
      }
      var me = this,
        formId, placeholder, fnName, callback,
        form = cfg.form,
        domain = cfg.domain || MsgSender.defaultDomain;
      me.onsuccess = cfg.onsuccess || NOOP;
      me.onfailure = cfg.onfailure || NOOP;

      if (!form) {
        // create a hidden form
        formId = _id(FORM_PREFIX);
        form = document.createElement('form');
        form.id = formId;
        form.method = 'POST';
        document.body.insertBefore(form, document.body.firstChild);
        // me.ready = true;
      }

      callback = function (data) {
        me._clear();
        me.onsuccess && me.onsuccess(data);
      };
      fnName = _id('callback');
      window[fnName] = callback;

      // me.ready = S.isReady;
      me.ready = true;
      me._callbackName = fnName;
      me._form = form;
      document.domain = domain;
    },

    send: function (cfg) {
      cfg = cfg || {};
      var me = this,
        db,
        iframeId, iframeHtml, iframe, placeholder,
        form, key, inputs = [],
        fnName = me._callbackName,
        url = cfg.url,
        data = cfg.data,
        onsuccess = cfg.onsuccess,
        onfailure = cfg.onfailure;

      if (!url || typeof url !== 'string') {
        return;
      }
      if (onsuccess) {
        me.onsuccess = onsuccess;
      }
      if (onfailure) {
        me.onfailure = onfailure;
      }

      if (!me.ready) {
        _later(function () {
          me.send(cfg);
        }, 50);
        return;
      }

      if (!(placeholder = me._placeholder)) {
        db = document.body;
        placeholder = document.createElement('div');
        placeholder.style.display = 'none';
        placeholder.style.visibility = 'hidden';
        // document.body.appendChild(placeholder);
        db.insertBefore(placeholder, db.firstChild);
        me._placeholder = placeholder;
      }
      form = this._form;
      iframeId = _id(IFRAME_PREFIX);
      iframeHtml = '<iframe id="' + iframeId + '" name="' + iframeId +
        '" src="about:blank" frameborder="0" ' +
        'style="width:0;height:0;display:none;"></iframe>';
      this._iframeId = iframeId;
      placeholder.innerHTML = iframeHtml;
      if (url.indexOf('?') === -1) {
        form.action = url + '?callback=' + fnName;
      } else {
        form.action = url + '&callback=' + fnName;
      }
      form.target = iframeId;

      if (data) {
        if (typeof data === 'string') {
          data = _parse(data) || {};
        }
        for (key in data) {
          inputs.push('<input type="hidden" name="');
          inputs.push(key);
          inputs.push('" value="');
          inputs.push(data[key]);
          inputs.push('" />');
        }
        frag = XDPost.createNode(inputs.join(''));
        form.appendChild(frag);
      }

      form.submit();
      form.removeChild(frag);
    },

    inProgress: function () {
      return !!(me._iframeId && document.getElementById(me._iframeId));
    },

    _clear: function () {
      var iframe = this._iframeId &&
        document.getElementById(this._iframeId);
      if (iframe) {
        iframe.parentNode.removeChild(iframe);
      }
      this._iframeId = null;
    },

    cancel: function () {
      this._clear();
    },

    destroy: function () {
      var form = this._form,
        ph = this._placeholder;
      form.parentNode.removeChild(form);
      ph.parentNode.removeChild(ph);
      this._form = null;
      this._placeholder = null;
      delete window[this._callbackName];
      this._iframeId = null;
    }
  });

  XDPost.IframeMsgSender = MsgSender;
})(window);

/**
 * JSON 字符串与 JavaScript 数据的相互转换.
 * @module json
 * @author 朴扬
 */
(function (window) {
  var _toStr = Object.prototype.toString,
    isFunction = function (o) {
      return (_toStr.call(o) === '[object Function]');
    },
    isObject = function (o) {
      return (_toStr.call(o) === '[object Object]');
    },
    isArray = function (o) {
      return (_toStr.call(o) === '[object Array]');
    },
    gJSON = window.JSON,
    Native = (_toStr.call(gJSON) === '[object JSON]' && gJSON),
    useNativeStringify = !!Native,
    useNativeParse = useNativeStringify,

    UNDEFINED = 'undefined',
    OBJECT = 'object',
    NULL = 'null',
    STRING = 'string',
    NUMBER = 'number',
    BOOLEAN = 'boolean',
    DATE = 'date',
    _allowable = {
      'undefined': UNDEFINED,
      'string': STRING,
      '[object String]': STRING,
      'number': NUMBER,
      '[object Number]': NUMBER,
      'boolean': BOOLEAN,
      '[object Boolean]': BOOLEAN,
      '[object Date]': DATE,
      '[object RegExp]': OBJECT
    },
    EMPTY = '',
    OPEN_O = '{',
    CLOSE_O = '}',
    OPEN_A = '[',
    CLOSE_A = ']',
    COMMA = ',',
    COMMA_CR = ",\n",
    CR = "\n",
    COLON = ':',
    COLON_SP = ': ',
    QUOTE = '"',

    // Regex used to capture characters that need escaping before enclosing
    // their containing string in quotes.
    _SPECIAL_CHARS = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,

    _CHARS = {
      '\b': '\\b',
      '\t': '\\t',
      '\n': '\\n',
      '\f': '\\f',
      '\r': '\\r',
      '"': '\\"',
      '\\': '\\\\'
    },

    // =============================== stringify ===============================

    // Utility function used to determine how to serialize a variable.
    _type = function (o) {
      var t = typeof o;
      return _allowable[t] || // number, string, boolean, undefined
        _allowable[_toStr.call(o)] || // Number, String, Boolean, Date
        (t === OBJECT ?
          (o ? OBJECT : NULL) : // object, array, null, misc natives
          UNDEFINED); // function, unknown
    },

    // Escapes a special character to a safe Unicode representation
    _char = function (c) {
      if (!_CHARS[c]) {
        _CHARS[c] = '\\u' + ('0000' + (+(c.charCodeAt(0))).toString(16)).slice(-4);
      }
      return _CHARS[c];
    },

    // Enclose escaped strings in quotes
    _string = function (s) {
      return QUOTE + s.replace(_SPECIAL_CHARS, _char) + QUOTE;
    },

    // Adds the provided space to the beginning of every line in the input string
    _indent = function (s, space) {
      return s.replace(/^/gm, space);
    },

    // JavaScript implementation of stringify (see API declaration of stringify)
    _stringify = function (o, w, space) {
      if (o === undefined) {
        return undefined;
      }

      var replacer = isFunction(w) ? w : null,
        format = _toStr.call(space).match(/String|Number/) || [],
        _date = window.JSONUtils.dateToString,
        stack = [],
        tmp, i, len;

      if (replacer || !isArray(w)) {
        w = undefined;
      }

      // Ensure whitelist keys are unique (bug 2110391)
      if (w) {
        tmp = {};
        for (i = 0, len = w.length; i < len; ++i) {
          tmp[w[i]] = true;
        }
        w = tmp;
      }

      // Per the spec, strings are truncated to 10 characters and numbers
      // are converted to that number of spaces (max 10)
      space = format[0] === 'Number' ?
        new Array(Math.min(Math.max(0, space), 10) + 1).join(" ") :
        (space || EMPTY).slice(0, 10);

      function _serialize(h, key) {
        var value = h[key],
          t = _type(value),
          a = [],
          colon = space ? COLON_SP : COLON,
          arr, i, keys, k, v;

        // Per the ECMA 5 spec, toJSON is applied before the replacer is
        // called.  Also per the spec, Date.prototype.toJSON has been added, so
        // Date instances should be serialized prior to exposure to the
        // replacer.  I disagree with this decision, but the spec is the spec.
        if (isObject(value) && isFunction(value.toJSON)) {
          value = value.toJSON(key);
        } else if (t === DATE) {
          value = _date(value);
        }

        if (isFunction(replacer)) {
          value = replacer.call(h, key, value);
        }

        if (value !== h[key]) {
          t = _type(value);
        }

        switch (t) {
          case DATE: // intentional fallthrough.  Pre-replacer Dates are
            // serialized in the toJSON stage.  Dates here would
            // have been produced by the replacer.
          case OBJECT:
            break;
          case STRING:
            return _string(value);
          case NUMBER:
            return isFinite(value) ? value + EMPTY : NULL;
          case BOOLEAN:
            return value + EMPTY;
          case NULL:
            return NULL;
          default:
            return undefined;
        }

        // Check for cyclical references in nested objects
        for (i = stack.length - 1; i >= 0; --i) {
          if (stack[i] === value) {
            throw new Error("JSON.stringify. Cyclical reference");
          }
        }

        arr = isArray(value);

        // Add the object to the processing stack
        stack.push(value);

        if (arr) { // Array
          for (i = value.length - 1; i >= 0; --i) {
            a[i] = _serialize(value, i) || NULL;
          }
        } else { // Object
          // If whitelist provided, take only those keys
          keys = w || value;
          i = 0;

          for (k in keys) {
            if (keys.hasOwnProperty(k)) {
              v = _serialize(value, k);
              if (v) {
                a[i++] = _string(k) + colon + v;
              }
            }
          }
        }

        // remove the array from the stack
        stack.pop();

        if (space && a.length) {
          return arr ?
            OPEN_A + CR + _indent(a.join(COMMA_CR), space) + CR + CLOSE_A :
            OPEN_O + CR + _indent(a.join(COMMA_CR), space) + CR + CLOSE_O;
        } else {
          return arr ?
            OPEN_A + a.join(COMMA) + CLOSE_A :
            OPEN_O + a.join(COMMA) + CLOSE_O;
        }
      }

      // process the input
      return _serialize({
        '': o
      }, '');
    },

    // =============================== parse ===============================

    _eval = window['eval'],
    _UNICODE_EXCEPTIONS = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    _ESCAPES = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
    _VALUES = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
    _BRACKETS = /(?:^|:|,)(?:\s*\[)+/g,
    _UNSAFE = /[^\],:{}\s]/,

    _escapeException = function (c) {
      return '\\u' + ('0000' + (+(c.charCodeAt(0))).toString(16)).slice(-4);
    },

    _revive = function (data, reviver) {
      var walk = function (o, key) {
        var k, v, value = o[key];
        if (value && typeof value === 'object') {
          for (k in value) {
            if (value.hasOwnProperty(k)) {
              v = walk(value, k);
              if (v === undefined) {
                delete value[k];
              } else {
                value[k] = v;
              }
            }
          }
        }
        return reviver.call(o, key, value);
      };

      return typeof reviver === 'function' ? walk({
        '': data
      }, '') : data;
    },

    _parse = function (s, reviver) {
      // Replace certain Unicode characters that are otherwise handled
      // incorrectly by some browser implementations.
      // NOTE: This modifies the input if such characters are found!
      s = s.replace(_UNICODE_EXCEPTIONS, _escapeException);

      // Test for any remaining invalid characters
      if (!_UNSAFE.test(s.replace(_ESCAPES, '@').replace(_VALUES, ']').replace(_BRACKETS, ''))) {
        // Eval the text into a JavaScript data structure, apply any
        // reviver function, and return
        return _revive(_eval('(' + s + ')'), reviver);
      }

      throw new SyntaxError('JSON.parse');
    },

    _parseUsed;


  // Double check basic native functionality.  This is primarily to catch broken
  // early JSON API implementations in Firefox 3.1 beta1 and beta2.
  if (Native) {
    try {
      useNativeStringify = ('0' === Native.stringify(0));
    } catch (e) {
      useNativeStringify = false;
    }

    try {
      useNativeParse = (Native.parse('{"ok":false}', function (k, v) {
        return k === "ok" ? true : v;
      })).ok;
    } catch (e) {
      useNativeParse = false;
    }
  }

  _parseUsed = useNativeParse ? Native.parse : _parse;



  // expose
  window.JSONUtils = {
    /**
     * 序列化.
     */
    stringify: useNativeStringify ? Native.stringify : _stringify,

    /**
     * 反序列化.
     */
    parse: function (s, reviver) {
      if (typeof s !== 'string') {
        s += '';
      }
      try {
        return _parseUsed(s, reviver);
      } catch (e) {}
    },

    // 测试用
    _stringify: _stringify,
    _parse: _parse,

    useNativeParse: useNativeParse,
    useNativeStringify: useNativeStringify
  };
})(window);
(function (window) {
  if (!window.WeiboFollow) {
    window.WeiboFollow = {};
  }

  var XDPost = window.XDPost,
    _extend = XDPost.extend,
    _isFunction = XDPost.isFunction,
    _isString = XDPost.isString,
    _isArray = XDPost.isArray,
    QS = window.QueryString,
    JSON = window.JSONUtils,
    NOOP = function () {},
    _isIE = !!window.ActiveXObject,

    _splitUrl = function (url) {
      var base, pSlash, pQs, pHash, qs, fragId;

      if ((pSlash = url.lastIndexOf('/')) === -1) {
        pSlash = 0;
      }
      pHash = url.indexOf('#', pSlash);
      fragId = (pHash > -1) ? url.substr(pHash + 1) : '';
      pQs = url.indexOf('?', pSlash);
      if (pQs > -1) {
        qs = (pHash > -1) ?
          url.substr(pQs + 1, pHash - pQs - 1) :
          url.substr(pQs + 1);
        base = url.substr(0, pQs);
      } else {
        qs = '';
        base = (pHash > -1) ? url.substr(0, pHash) : url;
      }

      return [base, qs, fragId];
    },

    _scriptOnload = document.createElement('script').readyState ?
    function (node, callback) {
      var oldCallback = node.onreadystatechange;
      node.onreadystatechange = function () {
        var rs = node.readyState;
        if (rs === 'loaded' || rs === 'complete') {
          node.onreadystatechange = null;
          oldCallback && oldCallback();
          callback.call(this);
        }
      };
    } :
    function (node, callback) {
      node.addEventListener('load', callback, false);
    },
    _head = document.getElementsByTagName('head')[0] ||
    document.documentElement,
    _getScript = function (url, fn) {
      var node = document.createElement('script');
      node.src = url;
      node.async = true;
      _scriptOnload(node, function () {
        if (_isFunction(fn)) {
          fn.call(node, '');
        }
        if (_head && node.parentNode) {
          _head.removeChild(node);
        }
      });
      _head.insertBefore(node, _head.firstChild);
      return node;
    },
    _jsonp = function (url, data, success) {
      var jsonpCallback = arguments[3],
        jsonp = arguments[4];
      if (_isFunction(data)) {
        // 没有传 data 参数
        jsonp = jsonpCallback;
        jsonpCallback = success;
        success = data;
        data = null;
      }

      var splitted = _splitUrl(url),
        base = splitted[0],
        qs = splitted[1],
        fragId = splitted[2],
        rndCallback, str, tempCallback, fn = null;
      // data
      if (_isString(data)) {
        qs += (qs.length) ? '&' + data : data;
      }
      jsonp = jsonp || 'callback';
      rndCallback = 'jsonp' + (new Date()).getTime() +
        Math.floor(Math.random() * 100000);
      jsonpCallback = jsonpCallback || rndCallback;
      str = jsonp + '=' + jsonpCallback;
      qs += (qs.length) ? '&' + str : str;

      tempCallback = window[jsonpCallback];
      window[jsonpCallback] = function (data) {
        if (_isFunction(tempCallback)) {
          tempCallback(data);
        } else {
          try {
            delete window[jsonpCallback];
          } catch (e) {}
          window[jsonpCallback] = undefined;
        }
        // onsuccess
        if (_isFunction(success)) {
          success(data);
        }
      };

      // url = base + '?' + qs + '#' + fragId;
      url = base;
      if (qs) {
        url += '?' + qs;
      }
      if (fragId) {
        url += '#' + fragId;
      }
      return _getScript(url, fn);
    },

    _postRequest = function (opts) {
      opts = opts || {};
      var url = opts.url,
        data = opts.data || {},
        success = opts.onsuccess || NOOP,
        failure = opts.onfailure || NOOP,
        onsuccess;
      // failure = function() {
      //     onfailure({'code': -10000002, 'msg': '通讯错误'});
      // };

      if (!url || typeof url !== 'string') {
        failure({
          code: -10000003,
          msg: '接口 URL 未指定'
        });
        return;
      }
      if (XDPost.mode === 'html5') {
        data = QS.stringify(data);
        onsuccess = function (ret) {
          ret = JSON.parse(ret);
          var status = ret && ret.result && ret.result.status;
          if (status && status.code === 0) {
            success(ret.result.data);
          } else {
            if (status) {
              failure(status);
            } else {
              failure({
                code: -10000001,
                msg: '未知错误'
              });
            }
          }
        };
      } else {
        onsuccess = function (ret) {
          var status = ret && ret.result && ret.result.status;
          if (status && status.code === 0) {
            success(ret.result.data);
          } else {
            if (status) {
              failure(status);
            } else {
              failure({
                code: -10000001,
                msg: '未知错误'
              });
            }
          }
        };
      }
      XDPost.send({
        url: url,
        data: data,
        onsuccess: onsuccess,
        onfailure: NOOP
      });
    },

    _getRequest = function (opts) {
      opts = opts || {};
      var url = opts.url,
        data = opts.data || {},
        success = opts.onsuccess || NOOP,
        failure = opts.onfailure || NOOP;

      if (!url || typeof url !== 'string') {
        failure({
          code: -10000003,
          msg: '接口 URL 未指定'
        });
        return;
      }
      _jsonp(url, QS.stringify(data), function (ret) {
        var status = ret && ret.result && ret.result.status;
        if (status && status.code === 0) {
          success(ret.result.data);
        } else {
          if (status) {
            failure(status);
          } else {
            failure({
              'code': -10000001,
              'msg': '未知错误'
            });
          }
        }
      });
    },

    SSO = 'sinaSSOController',
    SSO_ERR = '没有载入 SSO 模块',
    _apiBase = 'http://api.sina.com.cn/weibo/';


  _extend(WeiboFollow, {
    apis: {
      check: _apiBase + 'wb/friendships_exists.json',
      follow: _apiBase + 'wb/friendships_create.' +
        (_isIE ? 'xml' : 'json'),
      appKey: '2835469272'
    },
    config: function (cfg) {
      _extend(this.apis, cfg, true);
    },

    _check: function (opts) {
      opts = opts || {};
      var url = opts.url,
        apis = this.apis;
      if (!url) {
        url = apis.check;
      }
      if (url.indexOf('?') >= 0) {
        url += '&source=' + apis.appKey;
      } else {
        url += '?source=' + apis.appKey;
      }
      opts.url = url;
      _getRequest(opts);
    },

    _follow: function (opts) {
      opts = opts || {};
      var url = opts.url,
        apis = this.apis;
      if (!url) {
        url = apis.follow;
      }
      if (url.indexOf('?') >= 0) {
        url += '&source=' + apis.appKey;
      } else {
        url += '?source=' + apis.appKey;
      }
      opts.url = url;
      _postRequest(opts);
    },

    LOGIN_URL: 'http://weibo.com/login.php',
    LOGIN_MSG: '您还没有登录，无法添加关注。您是否现在登录？',

    check: function (users) {
      var sso = window[SSO],
        cookie, uid;
      cookie = sso && sso.getSinaCookie();
      uid = (cookie && cookie.uid) || 0;
      if (!_isArray(users)) {
        users = [users];
      }
      WeiboFollow._check({
        data: {
          uid: uid,
          uids: users.join(',')
        },
        onsuccess: function (data) {
          WeiboFollow.oncheck && WeiboFollow.oncheck(data);
        },
        onfailure: function (status) {
          alert('获取关注状态失败：' + status.msg);
        }
      });
    },

    follow: function (users, o) {
      var url = "https://weibo.com/";
      url += users;
      window.open(url);
    },

    onfollow: function (data, o) {
      // o.parentNode.innerHTML = "<span class='add_yet'>已关注</span>";
      var clz = o.getAttribute('data-clz');
      var txt = o.getAttribute('data-txt');
      var btn = document.createElement('span');
      btn.innerHTML = txt || '已关注';
      btn.className = clz || 'disabled';
      o.parentNode.replaceChild(btn, o);
    },
    oncheck: null
  });
})(window);
