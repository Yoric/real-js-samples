/* 
 * Feed
 * 
 * @author Liu Qifeng
 * @version 1.2.2
 */

;(function(doc, win){
  doT.templateSettings = {
    evaluate:    /\<\%([\s\S]+?)\%\>/g,
    interpolate: /\<\%=([\s\S]+?)\%\>/g,
    varname: 'it'
  };

/*
 * utils
 * helpers
 */
var utils = {};

(function(utils){

  var toString = Object.prototype.toString;

  function encodeFormData(data){
    var pairs = [], regExp = /%20/g;

    var value;
    for(var key in data){
      value = data[key].toString();

      pairs.push(win.encodeURIComponent(key).replace(regExp, '+') +
        '=' + win.encodeURIComponent(value).replace(regExp, '+'));
    }

    return pairs.join('&');
  }

  function isFunction(obj){
    return toString.call(obj) === '[object Function]';
  }

  function getJSON(str){
    if(toString.call(str) === '[object String]') {
      if(str){
        if(win.JSON){
          return win.JSON.parse(str);
        } else {
          return eval('(' + str + ')');
        }
      } else {
        return null;
      }
    }
    return str;
  }

  var viewData = function(){
    var e = 0, l = 0, i = 0, g = 0, f = 0, m = 0;
    var j = window, h = document, k = h.documentElement;
    e = k.clientWidth || h.body.clientWidth || 0;
    l = j.innerHeight || k.clientHeight || h.body.clientHeight || 0;
    g = h.body.scrollTop || k.scrollTop || j.pageYOffset || 0;
    i = h.body.scrollLeft || k.scrollLeft || j.pageXOffset || 0;
    f = Math.max(h.body.scrollWidth, k.scrollWidth || 0);
    m = Math.max(h.body.scrollHeight, k.scrollHeight || 0, l);
    return {scrollTop: g,scrollLeft: i,documentWidth: f,documentHeight: m,viewWidth: e,viewHeight: l};
  };

  function readableDate(time){
    var oDate = new Date(time * 1000), cDate = new Date(), interval = cDate - oDate,
      hour, minute, hourStr, minuteStr, result;

    var hourSeconds = 1 * 60 * 60 * 1000;

    //一小时内
    if(interval < hourSeconds){
      if(Math.ceil(interval/60000) == 0){
        result = '\u521A\u521A';
      } else {
        result = (Math.ceil(interval/60000)).toString() + '\u5206\u949F\u524D';
      }
    } else {
      //今年之内
      hour = oDate.getHours();
      minute = oDate.getMinutes();
      hourStr = hour < 10 ? '0' + hour.toString() : hour.toString();
      minuteStr = minute < 10 ? '0' + minute.toString() : minute.toString();
      if(cDate.getFullYear() === oDate.getFullYear() && cDate.getMonth() === oDate.getMonth()){
        //今日之内
        if(cDate.getDate() === oDate.getDate()){
          result = '\u4ECA\u5929' + hourStr + ':' + minuteStr;
        } else {
          //今日以前
          result = (oDate.getMonth() + 1).toString() + '\u6708' + oDate.getDate().toString() + '\u65E5 ' + hourStr + ':' + minuteStr;
        }
      } else {
        //今年以前
        result = oDate.getFullYear().toString() + '\u5E74 ' + (oDate.getMonth() + 1).toString() + '\u6708' + oDate.getDate().toString() + '\u65E5 ' + hourStr + ':' + minuteStr;
      }
    }
    return result;
  }

  function fillOptions(obj, options){
    for(var key in options){
      obj[key] = options[key];
    }
  }

  function fillOptionsWithDefault(obj, options, defaultOptions){
    fillOptions(obj, defaultOptions);
    fillOptions(obj, options);
  }

  function trim(a) {
    return a.replace(/(^\s*)|(\s*$)/g, "")
  }
  function safeStr(a) {
    return a.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function getPosition(a) {
    for (var b = {x: 0,y: 0}; a.offsetParent; )
      b.x += a.offsetLeft, b.y += a.offsetTop, a = a.offsetParent;
    return b
  }
  function getMousePos(e) {
    return 'pageX' in e ? {
      x : e.pageX,
      y : e.pageY
    } : {
      x : Math.max(document.body.scrollTop,document.documentElement.scrollTop) + e.clientX,
      y : Math.max(document.body.scrollLeft,document.documentElement.scrollLeft) + e.clientY
    }
  }

  function cn_size(a, b) {
    b = b || !1;
    for (var c = a.length, d = 0, e = 0; c > e; e++)
      d += a.charCodeAt(e) < 27 || a.charCodeAt(e) > 126 ? 2 : 1;
    return b ? d : Math.ceil(d / 2)
  }

  var APIndexOf = Array.prototype.indexOf;

  var indexOf = (function(){

    if(APIndexOf){
      return function(ary, item){
        return APIndexOf.call(ary, item);
      };
    } else {
      return function(ary, item){
        for(var i = 0, len = ary.length; i < len; i ++){
          if(ary[i] == item){
            return i;
          }
        }
        return -1;
      };
    }

  })();

  // var url1 = " http:\/\/n.sinaimg.cn\/news\/transform\/135\/w550h385\/20180510\/VjwQ-haichqz6356762.jpg ";
  var removeProtocol = function( url ){
  	var url = url;
  	var protocolRegExp = /^https?:/gi;
  	var needUrl = url.replace( protocolRegExp , '' );
  	return needUrl;
  };

  var reIE = /MSIE\s([^;]*)/;
  var browser = {
    ie: 0,
    loaded: false
  };

  (function(browser){
    function toNumber(str){
      var count = 0;
      return parseFloat(str.replace(/\./g, function() {
        count++;
        return (count === 1) ? '.' : '';
      }));
    }
    var ua = (navigator && navigator.userAgent) || '';
    var temp = ua.match(reIE);
    if(temp && temp[1]){
      browser.ie = toNumber(temp[1]);
    }
  })(browser);

  var isTouch = 'ontouchstart' in win;

  utils.isTouch = isTouch;

  utils.downEvent = isTouch ? 'touchstart' : 'mousedown';
  utils.upEvent = isTouch ? 'touchend' : 'mouseup';
  utils.moveEvent = isTouch ? 'touchmove' : 'mousemove';

  utils.getMousePos = getMousePos;
  utils.getPosition = getPosition;

  utils.encodeFormData = encodeFormData;
  utils.isFunction = isFunction;
  utils.getJSON = getJSON;
  utils.viewData = viewData;
  utils.readableDate = readableDate;
  utils.fillOptions = fillOptions;
  utils.fillOptionsWithDefault = fillOptionsWithDefault;
  utils.safeStr = safeStr;
  utils.trim = trim;
  utils.cn_size = cn_size;
  utils.indexOf = indexOf;
  utils.browser = browser;
  utils.removeProtocol = removeProtocol; //将资源url的http(s)协议头去掉

})(utils);

var storage = (function(){

  var localStorage = win.localStorage;

  // 优先使用localStorage
  if(localStorage){
    return {
      getItem: function(key){
        return localStorage.getItem(key);
      },
      setItem: function(key, value){
        // 在一些设备下, setItem之前必须调用removeItem
        localStorage.removeItem(key);
        localStorage.setItem(key, value);
      },
      removeItem: function(key){
        localStorage.removeItem(key);
      }
    };
  } else {
    return {
      getItem: function(key){
        var cookieKey = key + '=';
        var result = '';
        if(doc.cookie.length > 0){
          var index = doc.cookie.indexOf(cookieKey);
          if(index != -1){
            index += cookieKey.length;
            var lastIndex = doc.cookie.indexOf(';', index);
            if(lastIndex == -1){
              lastIndex = doc.cookie.length;
            }
            result = win.decodeURIComponent(doc.cookie.substring(index, lastIndex));
          }
        }
        return result;
      },
      setItem: function(key, value){
        var time = new Date();
        time.setFullYear(time.getFullYear() + 1);
        doc.cookie = key + '=' + win.encodeURIComponent(value) + '; expires=' + time.toGMTString() + ';';
      },
      removeItem: function(key){
        var time = new Date;
        time.setFullYear(time.getFullYear() - 1);
        doc.cookie = key + '=0; expires=' + time.toGMTString();
      }
    };
  }
})();

var IO = (function(){
  var head = doc.getElementsByTagName('head')[0] || doc.documentElement;
  var base = doc.getElementsByTagName('base')[0];
  var readyReg = /^(?:loaded|complete|undefined)$/;

  function encodeFormData(obj){
    var result = [], plusReg = /%20/g;
    for(var key in obj){
      var value = obj[key].toString();
      // encodeURIComponent encodes spaces as %20 instead of "+"
      result.push(win.encodeURIComponent(key).replace(plusReg, '+') + '=' + win.encodeURIComponent(value).replace(plusReg, '+'));
    }
    return result.join('&');
  }

  function scriptOnLoad(node){
    node.onload = node.onreadystatechange = function(){
      if(readyReg.test(node.readyState)){
        node.onload = node.onreadystatechange = null;
        head.removeChild(node);
        node = null;
      }
    };
  }

  function loadScript(url, encode){
    var script = doc.createElement('script');
    script.src = url;
    script.async = true;
    script.charset = encode ? encode : 'utf-8';

    scriptOnLoad(script);

    // IE6 Bug: http://bugs.jquery.com/ticket/2709
    if(base){
      head.insertBefore(script, base);
    } else {
      head.appendChild(script);
    }
  }

  var uuid;

  function jsonp(obj){
    var callbackKey = obj.jsonpKey || 'callback';
    var callbackValue = obj.jsonpValue || 'jsonpCallback_' + jsonp.count;
    var callbackStr = callbackKey + '=' + callbackValue;
    uuid = obj.uuid || (new Date).getTime();

    // (function(theUUID){
      win[callbackValue] = function(result){
        obj.onsuccess(result, uuid);

        // 低版本的IE浏览器不支持delete window上的属性

        // 不能删掉回掉函数
        // 因为，如果请求A
        /*try {
          delete win[callbackValue];
        } catch(e){
          win[callbackValue] = null;
        }*/
      };
    // })(uuid);

    var andTag = obj.url.indexOf('?') > 0 ? '&' : '?';

    loadScript(obj.url + andTag + encodeFormData(obj.data) + '&' + callbackStr + '&_=' + (new Date).getTime(), obj.encode);
    jsonp.count ++;
  }

  jsonp.count = 1;

  return {
    jsonp: jsonp
  };
})();

/*
 * dom:
 * selector, class, event
 */
var dom = {
  $: function(id){
    return doc.getElementById(id);
  }
};

(function(){

  // 是否支持selector新型接口
  var queryAPI = !!doc.querySelectorAll;
  // 是否支持class新型接口
  var classAPI = !!doc.body.classList;

  var getByClassName = queryAPI ? function(parent, className){
    if(!parent){
      parent = doc.body;
    }

    return parent.querySelectorAll('.' + className);
  } : function(parent, className){
    if(!parent){
      parent = doc.body;
    }
    var els = parent.getElementsByTagName('*'), arr = [];

    for(var i = 0, len = ele.length; i < len; i ++){
      if(hasClass(ele[i], className)){
        arr.push(ele[i]);
      }
    }

    return arr;
  };

  dom.getByClassName = getByClassName;

  var getByAttributeName = queryAPI ? function(parent, key, value, tag){
    if(!parent){
      parent = doc.body;
    }
    var newTag = tag || '*';
    return parent.querySelectorAll(newTag + '[' + key + '="' + value + '"]');
  } : function(parent, key, value, tag){
    if(!parent){
      parent = doc.body;
    }
    var newTag = tag || '*';
    var els = parent.getElementsByTagName(newTag), arr = [];
    for (var i = 0, n = els.length; i < n; i++) {
      if(els[i].getAttribute(key) == value){
        arr.push(els[i]);
      }
    }
    return arr;
  };

  dom.getByAttributeName = getByAttributeName;

  var hasClass = classAPI ? function(elem, className){
    return elem.classList.contains(className);
  } : function(elem, className){
    className = ' ' + className + ' ';
    if(elem && elem.nodeType === 1 && (' ' + elem.className + ' ').replace(/[\t\r\n\f]/g, ' ').indexOf(className) >= 0){
      return true;
    }
    return false;
  };

  var removeClass = classAPI ? function(elem, className){
    elem.classList.remove(className);
  } : function(elem, className){
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
    elem.className = elem.className.replace(reg, ' ');
  };

  var addClass = classAPI ? function(elem, className){
    if(hasClass(elem, className)) return;
    elem.classList.add(className);
  } : function(elem, className){
    if(hasClass(elem, className)) return;
    elem.className += ' ' + className;
  };

  var addEvent = doc.addEventListener ? function(ele, type, callback){
    ele.addEventListener(type, callback, false);
  } : function(ele, type, callback){
    ele.attachEvent('on' + type, callback);
  };

  var getEvent = function(e){
    if(e) return e;
    return win.event;
  };

  var getTarget = function(e){
    e = getEvent(e);
    return e.target || e.srcElement;
  };

  function preventDefault(e){
    e = getEvent(e);
    if(e.preventDefault){
      e.preventDefault();
    } else {
      e.returnValue = false;
    }
  }

  function stopPropagation(e){
    e = getEvent(e);
    if(e.stopPropagation){
      e.stopPropagation();
    } else {
      e.cancelBubble = true;
    }
  }

  dom.addClass = addClass;
  dom.hasClass = hasClass;
  dom.removeClass = removeClass;
  dom.addEvent = addEvent;
  dom.getEvent = getEvent;
  dom.getTarget = getTarget;
  dom.preventDefault = preventDefault;
  dom.stopPropagation = stopPropagation;
  dom.getByAttributeName = getByAttributeName;

})();

var FEED_TEMPLATE = {
  ICON: 'feed-card-icon ',
  IMG_ICON: 'feed-card-icon-img ',
  RECO_ICON: 'feed-card-icon-reco ',
  VIDEO_ICON: 'feed-card-icon-video ',
  QAQ: 'feed-card-icon-qaq ',
  BBS: 'feed-card-icon-bbs ',
  VOTE: 'feed-card-icon-vote ',
  SCORE: 'feed-card-icon-score ',
  HOT: 'feed-card-icon-hot '
};

var IMAGE_DIV_HTML = '<div class="feed-card-img" style="width:<%= __SinaFeedCard__cardImageParam.w + "px" %>; height:<%= __SinaFeedCard__cardImageParam.h + "px" %>;">';

var feedTemplateTrack = {
  urlTrack: ' suda-uatrack="key=index_feed&value=news_click:<%= news.lid %>:<%= newsIndex + it.fromCount %>:<%= news._uaTrackValue %>" ',
  videoTrack: ' suda-uatrack="key=index_feed&value=video_play:<%= news.lid %>:<%= newsIndex + it.fromCount %>:<%= news._uaTrackValue %>" ',
  closeVideoTrack: ' suda-uatrack="key=index_feed&value=close_video_play:<%= news.lid %>:<%= newsIndex + it.fromCount %>:<%= news._uaTrackValue %>" '
};

function templateInfoHTML(newsKey){
  var infoHTML = [];
  infoHTML.push('<div class="feed-card-a feed-card-clearfix"><div class="feed-card-time"><%= ' + newsKey + '.timeStr %></div>');

  // 标签
  infoHTML.push('<div class="feed-card-tags">');

  infoHTML.push('<% if(' + newsKey + '.columnInfos) { %>');
  infoHTML.push("<% for(var columnIndex = 0; columnIndex < " + newsKey + ".columnInfos.length; columnIndex ++) { %>");

  infoHTML.push('<% if(FEED_CARD_INFO.enableTagFeed) { %>');
  infoHTML.push('<a suda-uatrack="key=index_feed&value=news_column_click" href="javascript:;" target="_blank" onclick="__SinaFeedCard__.addTagToTab(\'<%= ' + newsKey + '.columnInfos[columnIndex].name %>\'); return false;" title="\u70B9\u51FB\u53EF\u4EE5\u6DFB\u52A0\u6807\u7B7E"><%= ' + newsKey + '.columnInfos[columnIndex].name %></a>');
  infoHTML.push('<% } else { %>');
  infoHTML.push('<a suda-uatrack="key=index_feed&value=news_column_click" href="<%= ' + newsKey + '.columnInfos[columnIndex].url %>" target="_blank"><%= ' + newsKey + '.columnInfos[columnIndex].name %></a>');
  infoHTML.push("<% } %>");
  infoHTML.push("<% } %>");
  infoHTML.push('<span class="feed-card-news-spliter">|</span>');
  infoHTML.push("<% } %>");

  infoHTML.push("<% for(var tagi = 0; tagi < " + newsKey + ".keywords.length; tagi ++) { %>");
  infoHTML.push('<% if(FEED_CARD_INFO.enableTagFeed) { %>');
  infoHTML.push('<a suda-uatrack="key=index_feed&value=news_label_click" href="javascript:;" target="_blank" onclick="__SinaFeedCard__.addTagToTab(\'<%= ' + newsKey + '.keywords[tagi] %>\'); return false;" title="\u70B9\u51FB\u53EF\u4EE5\u6DFB\u52A0\u6807\u7B7E"><%= ' + newsKey + '.keywords[tagi] %></a>');
  infoHTML.push('<% } else { %>');
  infoHTML.push('<a suda-uatrack="key=index_feed&value=news_label_click" href="<%= window.FEED_CARD_INFO.tagURL %>/<%= ' + newsKey + '.keywords[tagi] %>" target="_blank"><%= ' + newsKey + '.keywords[tagi] %></a>');
  infoHTML.push('<% } %>');

  infoHTML.push("<% } %>");

  infoHTML.push('</div>');

  infoHTML.push('<div class="feed-card-actions">');

  // 广告 
  infoHTML.push('<% if(' + newsKey + '.isAdNews) { %>');
  infoHTML.push('<a href="<%=' + newsKey + '.namonitor.zurl%>&url=<%= window.encodeURIComponent(' + newsKey + '.zurl) %>" class="feed-card-tg" target="_blank" suda-uatrack="key=index_feed&value=news_tg<%= newsIndex %>">\u8D5E\u52A9</a>');
  infoHTML.push('<% } %>');

  // 评论
  infoHTML.push('<% if(' + newsKey + '.isAdNews && ' + newsKey + '.namonitor.comment && ' + newsKey + '.commentid) { %>');

  infoHTML.push('<% if(FEED_CARD_INFO.enablePageComment) { %>');
  infoHTML.push('<a href="javascript:;" onclick="__SinaFeedCard__.showComment(this, \'<%=' + newsKey + '.c_channel%>\',\'<%=' + newsKey + '.c_id%>\',\'<%=' + newsKey + '.c_style%>\', <%= newsIndex %>, \'<%=' + newsKey + '.comment_show %>\', \'<%=' + newsKey + '.url %>\', \'<%=' + newsKey + '.namonitor.comment %>\'); return false;" class="feed-card-comment" suda-uatrack="key=index_feed&value=news_comment_click:<%= newsIndex %>:<%= news._uaTrackValue %>" target="_blank">\u8BC4\u8BBA<%= ' + newsKey + '.comment_total > 0 ? "(" + ' + newsKey + '.comment_total + ")" : "" %></a><span class="feed-card-spliter">|</span>');
  infoHTML.push('<% } else { %>');
  infoHTML.push('<a href="<%=' + newsKey + '.namonitor.comment%>&url=http%3A%2F%2Fcomment5.news.sina.com.cn%2Fcomment%2Fskin%2Fdefault.html%3Fchannel%3D<%= ' + newsKey + '.c_channel %>%26newsid%3D<%= ' + newsKey + '.c_id %>%26style%3D<%= ' + newsKey + '.c_style %>" class="feed-card-comment" suda-uatrack="key=index_feed&value=news_comment_click:<%= newsIndex %>:<%= news._uaTrackValue %>" target="_blank">\u8BC4\u8BBA<%= ' + newsKey + '.comment_total > 0 ? "(" + ' + newsKey + '.comment_total + ")" : "" %></a><span class="feed-card-spliter">|</span>');
  infoHTML.push('<% } %>');

  infoHTML.push('<% } else { %>');
  infoHTML.push('<% if(' + newsKey + '.categoryid == 4) { %>');
  infoHTML.push('<a href="<%=' + newsKey + '.url %>?tj=tech#commonComment" class="feed-card-comment" suda-uatrack="key=index_feed&value=news_comment_click:<%= newsIndex %>:<%= news._uaTrackValue %>" target="_blank">\u8BC4\u8BBA<%= ' + newsKey + '.comment_total ? "(" + ' + newsKey + '.comment_total + ")" : "" %></a><span class="feed-card-spliter">|</span>');
  infoHTML.push('<% } else if(' + newsKey + '.c_channel) { %>');

  // 当前页评论
  infoHTML.push('<% if(FEED_CARD_INFO.enablePageComment) { %>');
  infoHTML.push('<a href="javascript:;" onclick="__SinaFeedCard__.showComment(this, \'<%=' + newsKey + '.c_channel%>\',\'<%=' + newsKey + '.c_id%>\',\'<%=' + newsKey + '.c_style%>\', <%= newsIndex %>, \'<%=' + newsKey + '.comment_show %>\', \'<%=' + newsKey + '.url %>\'); return false;" class="feed-card-comment" suda-uatrack="key=index_feed&value=news_comment_click:<%= newsIndex %>:<%= news._uaTrackValue %>" target="_blank">\u8BC4\u8BBA<%= ' + newsKey + '.comment_total > 0 ? "(" + ' + newsKey + '.comment_total + ")" : "" %></a><span class="feed-card-spliter" style="display: none;">|</span>');
  infoHTML.push('<% } else { %>');
  infoHTML.push('<a href="http://comment5.news.sina.com.cn/comment/skin/default.html?channel=<%= ' + newsKey + '.c_channel %>&newsid=<%= ' + newsKey + '.c_id %>&style=<%= ' + newsKey + '.c_style %>" class="feed-card-comment" suda-uatrack="key=index_feed&value=news_comment_click:<%= newsIndex %>:<%= news._uaTrackValue %>" target="_blank">\u8BC4\u8BBA<%= ' + newsKey + '.comment_total > 0 ? "(" + ' + newsKey + '.comment_total + ")" : "" %></a><span class="feed-card-spliter" style="display: none;">|</span>');
  infoHTML.push('<% } %>');

  infoHTML.push('<% } %>');

  infoHTML.push('<% } %>');

  // 分享
  infoHTML.push('<span id="bdshare" class="bdshare_t bds_tools get-codes-bdshare feed-card-share" style="display: none" data="');
  infoHTML.push('<% if(news.docid) { %>');
  infoHTML.push('text:\'<%= ' + newsKey + '.title %>\',url:\'<%= "http://doc.sina.cn/?id=" + ' + newsKey + '.docid %>\'');
  infoHTML.push('<% } else { %>');
  infoHTML.push('text:\'<%= ' + newsKey + '.title %>\',url:\'<%= ' + newsKey + '.url %>\'');
  infoHTML.push('<% } %>');

  infoHTML.push("<% if(" + newsKey + ".templateid == 0 && " + newsKey + ".img && " + newsKey + ".img.u) { %>");
  infoHTML.push(',pic:\'<%= ' + newsKey + '.img.u %>\'');
  infoHTML.push("<% } %>");

  infoHTML.push("<% if(" + newsKey + ".templateid == 1 && " + newsKey + ".images && " + newsKey + ".images.length) { %>");
  infoHTML.push(',pic:\'<%= ' + newsKey + '.images[0].u %>\'');
  infoHTML.push("<% } %>");

  infoHTML.push('"><span class="bds_more">\u5206\u4EAB</span></span>');
  infoHTML.push('</div>');
  infoHTML.push('</div>');

  infoHTML.push('<div style="display:none; margin-top:10px;" class="feed-card-comment-w" data-id="feedCardComment_<%= ' + newsKey + '.c_id %>_w">');
  infoHTML.push('<div class="feed-card-comment-top" data-id="feedCardCommentTop_<%= ' + newsKey + '.c_id %>"><em>\u25C6</em><span>\u25C6</span></div>');
  infoHTML.push('<div class="feed-card-comment-c" data-id="feedCardComment_<%= ' + newsKey + '.c_id %>_c"></div>');
  infoHTML.push('<a href="javascript:;" class="feed-card-comment-close" onclick="__SinaFeedCard__.hideComment(this, \'<%=' + newsKey + '.c_id %>\'); return false;"><span>\u2571\u2572</span> \u6536\u8D77</a>');
  infoHTML.push('</div>');

  infoHTML = infoHTML.join('');
  return infoHTML;
};

/**
 * templateid为0的新闻
 * 
 */

var feedTemplate0 = (function(){
  

  var titleAdURL = ['<% if(!news.img && news.isAdNews && !(news.categoryid == 3 || news.hasVideo == 1)) { %>'];
  titleAdURL.push('<a class="feed-card-wb-ad-url" href="<%= news.weibourl %>" target="_blank"><%= news.weiboname %></a>');
  titleAdURL.push('<% } %>');
  titleAdURL = titleAdURL.join('');

  var html = ['<% switch(news.templateid) { case 0: %>'];

  // 如果是推荐新闻, 则用推荐图标

  html.push('<% if(news.isCreNews) { %>');
  html.push('<h2' + feedTemplateTrack.urlTrack + 'class="' + FEED_TEMPLATE.ICON + FEED_TEMPLATE.RECO_ICON + ' <%= news.iconClass %>"><a href="<%= news.url %>" target="_blank"><%= news.title %></a></h2>');
  html.push('<% } else if(news.comment_total > __FEED_CARD_HOT_COUNT) { %>');
  html.push('<h2' + feedTemplateTrack.urlTrack + 'class="' + FEED_TEMPLATE.ICON + FEED_TEMPLATE.HOT + ' <%= news.iconClass %>"><a href="<%= news.url %>" target="_blank"><%= news.title %></a>' + titleAdURL + '</h2>');
  // 如果是视频新闻, 则用视频图标
  html.push('<% } else if (news.categoryid == 3 || news.hasVideo == 1) { %>');
  html.push('<h2' + feedTemplateTrack.urlTrack + 'class="' + FEED_TEMPLATE.ICON + FEED_TEMPLATE.VIDEO_ICON + ' <%= news.iconClass %>"><a href="<%= news.url %>" target="_blank"><%= news.title %></a></h2>');
  html.push('<% } else { %>');
  // 无图标
  html.push('<h2' + feedTemplateTrack.urlTrack + ' class="<%= news.iconClass %>"><a href="<%= news.url %>" target="_blank"><%= news.title %></a>' + titleAdURL + '</h2>');
  html.push('<% } %>');

  // 图片或视频新闻
  html.push('<% if(news.img && news.img.u) { %>');
  html.push('<div class="feed-card-c feed-card-c1 feed-card-clearfix" id="videoPlayerC-<%= news.ctime %>">');
  html.push(IMAGE_DIV_HTML);

  // 如果是视频新闻，则为视频新闻增加视频播放功能
  html.push('<% if(news.categoryid == 3 || news.hasVideo == 1) { %>');

  html.push('<% if(news.vid != 0) { %>');
  html.push('<a href="javascript:;"' + feedTemplateTrack.videoTrack + 'target="_blank" onclick="__SinaFeedCard__.playVideo(<%= news.ctime %>, <%= news.vid %>, <%= news.channelid %>); return false;"><img src="<%= news.img.u %>" alt="<%= news.title %>" style="width:<%= __SinaFeedCard__cardImageParam.w + "px" %>; height:<%= __SinaFeedCard__cardImageParam.h + "px" %>;">');
  html.push('<% } else { %>')
  html.push('<a href="<%= news.url %>"' + feedTemplateTrack.urlTrack + 'target="_blank"><img src="<%= news.img.u %>" alt="<%= news.title %>" style="width:<%= __SinaFeedCard__cardImageParam.w + "px" %>; height:<%= __SinaFeedCard__cardImageParam.h + "px" %>;">');
  html.push('<% } %>');
  html.push('<i class="feed-card-icon feed-card-icon-svideo"></i>');

  html.push('<% } else { %>')
  html.push('<a href="<%= news.url %>"' + feedTemplateTrack.urlTrack + 'target="_blank"><img src="<%= news.img.u %>" alt="<%= news.title %>" style="width:<%= __SinaFeedCard__cardImageParam.w + "px" %>; height:<%= __SinaFeedCard__cardImageParam.h + "px" %>;">');
  html.push('<% } %>');
  html.push('</a>');
  html.push('</div>');
  html.push('<div class="feed-card-txt">');
  html.push('<a href="<%= news.url %>" class="feed-card-txt-summary" rel="nofollow"' + feedTemplateTrack.urlTrack + 'target="_blank"><%= news.intro %></a>');
  html.push('<a href="<%= news.url %>" class="feed-card-txt-detail" rel="nofollow"' + feedTemplateTrack.urlTrack + 'target="_blank">[\u8BE6\u7EC6]</a>');
  html.push('</div>');

  html.push('<% if(FEED_CARD_INFO.enableHotComment && news.rcomment) { %>');

  html.push('<div class="feed-card-hotc">');
  html.push('<a class="photo" href="http://weibo.com/u/<%= news.rcomment.uid %>" target="_blank"><img src="https://tp3.sinaimg.cn/<%= news.rcomment.uid %>/50/5661682855/1" /></a>');
  html.push('<a class="name" href="http://comment5.news.sina.com.cn/comment/skin/default.html?info_type=1&style=1&user_uid=<%= news.rcomment.uid %>" target="_blank" title="<%= news.rcomment.nickname %>"><%= news.rcomment.nickname.length > 4 ? news.rcomment.nickname.substring(0, 4) + "...": news.rcomment.nickname %></a>&nbsp;:');
  html.push('<a class="c" href="http://comment5.news.sina.com.cn/comment/skin/default.html?channel=<%= news.c_channel %>&newsid=<%= news.c_id %>&style=<%= news.c_style %>" target="_blank"><%= news.rcomment.content %></a>');
  html.push('</div>');

  html.push('<% } else if(news.weibourl) { %>');
  html.push('<div class="feed-card-wb"><a href="<%= news.weibourl %>" target="_blank"><%= news.weiboname %></a></div>');
  html.push('<% } %>');

  html.push('</div>');

  // 文字新闻
  html.push('<% } else if(news.intro) { %>');
  html.push('<div class="feed-card-c"><div class="feed-card-txt">');
  html.push('<a href="<%= news.url %>" class="feed-card-txt-summary" rel="nofollow"' + feedTemplateTrack.urlTrack + 'target="_blank"><%= news.intro %></a>');
  html.push('<a href="<%= news.url %>" class="feed-card-txt-detail" rel="nofollow"' + feedTemplateTrack.urlTrack + 'target="_blank">[\u8BE6\u7EC6]</a>');
  html.push("</div>");

  html.push('<% if(FEED_CARD_INFO.enableHotComment && news.rcomment) { %>');

  html.push('<div class="feed-card-hotc">');
  html.push('<a class="photo" href="http://weibo.com/u/<%= news.rcomment.uid %>" target="_blank"><img src="https://tp3.sinaimg.cn/<%= news.rcomment.uid %>/50/5661682855/1" /></a>');
  html.push('<a class="name" href="http://comment5.news.sina.com.cn/comment/skin/default.html?info_type=1&style=1&user_uid=<%= news.rcomment.uid %>" target="_blank" title="<%= news.rcomment.nickname %>"><%= news.rcomment.nickname.length > 4 ? news.rcomment.nickname.substring(0, 4) + "...": news.rcomment.nickname %></a>&nbsp;:');
  html.push('<a class="c" href="http://comment5.news.sina.com.cn/comment/skin/default.html?channel=<%= news.c_channel %>&newsid=<%= news.c_id %>&style=<%= news.c_style %>" target="_blank"><%= news.rcomment.content %></a>');
  html.push('</div>');

  html.push('<% } %>');

  html.push("</div>");
  html.push('<% } %>');

  html.push('<% if((news.categoryid == 3 || news.hasVideo == 1) && news.vid != 0) { %>');
  html.push('<div class="feed-card-video-player-w" style="display:none;" id="videoPlayerV-<%= news.ctime %>">');
    html.push('<div class="feed-card-video-player-close"' + feedTemplateTrack.closeVideoTrack + 'onclick="__SinaFeedCard__.stopVideo(<%= news.ctime %>);">\u6536\u8D77\u89C6\u9891</div>');
    html.push('<div class="feed-card-video-player-c">');
      html.push('<div class="feed-card-video-player" id="videoPlayerVC-<%= news.ctime %>"></div>');
    html.push('</div>');
  html.push('</div>');
  html.push('<% } %>');

  html.push(templateInfoHTML('news'));

  html.push('<% break; %>')

  return html.join('');
})();

/**
 * templateid为1的新闻
 * 即: 图集
 */

var feedTemplate1 = (function(){


  var titleAdURL = ['<% if(news.isAdNews) { %>'];
  titleAdURL.push('<a class="feed-card-wb-ad-url" href="<%= news.weibourl %>" target="_blank"><%= news.weiboname %></a>');
  titleAdURL.push('<% } %>');
  titleAdURL = titleAdURL.join('');

  var imageCountHTML = '<% if(news.imageCount && news.imageCount > 1) { %><i class="feed-card-icon feed-card-icon-picAlbum"><%= news.imageCount %></i><% } %>';

  var html = ['<% case 1: %>'];

  // 如果是推荐，用推荐图标
  html.push("<% if(news.isCreNews) { %>");
  html.push('<h2' + feedTemplateTrack.urlTrack + 'class="' + FEED_TEMPLATE.ICON + FEED_TEMPLATE.RECO_ICON + ' <%= news.iconClass %>"><a href="<%= news.url %>" target="_blank"><%= news.title %>' + imageCountHTML + '</a>' + titleAdURL + '</h2>');
  html.push('<% } else { %>')
  html.push('<h2' + feedTemplateTrack.urlTrack + 'class="' + FEED_TEMPLATE.ICON + FEED_TEMPLATE.IMG_ICON + '"><a href="<%= news.url %>" target="_blank"><%= news.title %>' + imageCountHTML + '</a>' + titleAdURL + '</h2>');
  html.push('<% } %>');
  html.push('<div class="feed-card-c"><div class="feed-card-picAlbum feed-card-clearfix">');
  html.push("<% for(var albumIndex = 0; news.images && albumIndex < news.images.length; albumIndex ++ ) { var newsAlbumItem = news.images[albumIndex];%>");
  html.push('<a href="<%= news.url %>" target="_blank" class="feed-card-picAlbum-i"' + feedTemplateTrack.urlTrack + '><img height="143" alt="<%= news.title %>" src="<%= newsAlbumItem.u %>"></a>');
  html.push("<% } %>");
  html.push("</div></div>");

  html.push(templateInfoHTML('news'));

  html.push('<% break; %>')

  return html.join('');
})();

/**
 * templateid为2的新闻
 * 即: 微博
 */

var feedTemplate2 = (function(){


  var shareUserHTML = [];
  shareUserHTML.push('<% if(creItem.uids && creItem.uids.length) { %>')
  shareUserHTML.push('<div class="feed-card-share-users feed-card-clearfix">');
  shareUserHTML.push('<% for(var i3 = 0; i3 < creItem.uids.length; i3 ++) { %>');
  shareUserHTML.push('<a href="http://weibo.com/u/<%= creItem.uids[i3] %>" target="_blank" data-uid="<%= creItem.uids[i3] %>" class="feed-card-share-user">');
  shareUserHTML.push('<%= creItem.uids[i3] %>');
  shareUserHTML.push('</a>');
  shareUserHTML.push('<% } %>');
  shareUserHTML.push('<span class="feed-card-share-num"><%= creItem.weiboCount > 2 ? "\u7B49" + creItem.weiboCount + "\u4F4D\u597D\u53CB" : "" %>\u4E5F\u5173\u6CE8</span>');
  shareUserHTML.push('</div>');
  shareUserHTML.push('<% } else { %>');
  shareUserHTML.push('<div class="feed-card-share-users feed-card-clearfix feed-card-wb">');
  shareUserHTML.push('<span class="feed-card-share-num"><a href="http://weibo.com" target="_blank"></a><%= creItem.weiboCount %>\u4EBA\u4E5F\u5173\u6CE8</span>');
  shareUserHTML.push('</div>');
  shareUserHTML.push('<% } %>');
  shareUserHTML = shareUserHTML.join('');

  var html = ['<% case 2: %>'];

  html.push('<div class="feed-card-c2">');
  html.push('<div class="feed-card-scroll-w" id="feedCardListScrollNews">');

    html.push("<% for(var i2 = 0; i2 < news.sub.length; i2 ++ ) { var creItem = news.sub[i2]; %>");
    html.push('<div class="feed-card-scroll-i" style="display:none;">');
    html.push('<h2 suda-uatrack="key=index_feed&value=news_click:<%= news.lid %>:<%= newsIndex + it.fromCount %>:<%= news._uaTrackValue %>:<%= i2 %>"  class="feed-card-icon feed-card-icon-wb <%= news.iconClass %>"><a href="<%= creItem.url %>" target="_blank"><%= creItem.title %></a></h2>');
    // 图片或视频新闻内容
    html.push("<% if(creItem.img && creItem.img.u) { %>");
    html.push('<div class="feed-card-c feed-card-c1 feed-card-clearfix">');
    html.push(IMAGE_DIV_HTML);
    html.push('<a href="<%= creItem.url %>" style="display:block;width:100%;height:100%;" target="_blank" suda-uatrack="key=index_feed&value=news_click:<%= news.lid %>:<%= newsIndex + it.fromCount %>:<%= news._uaTrackValue %>:i2"><img style="display:block;width:100%;height:100%;" src="<%= creItem.img.u %>" alt="<%= creItem.title %>">');
    html.push("<% if(creItem.categoryid == 3 || news.hasVideo == '1') { %>");
    html.push('<i class="feed-card-icon feed-card-icon-svideo"></i>');
    html.push("<% } %>");
    html.push("</a>");
    html.push("</div>");
    html.push('<div class="feed-card-txt">');
    html.push('<a href="<%= creItem.url %>" class="feed-card-txt-summary" rel="nofollow" suda-uatrack="key=index_feed&value=news_click:<%= news.lid %>:<%= newsIndex + it.fromCount %>:<%= news._uaTrackValue %>:i2" target="_blank"><%= creItem.intro%></a><a href="<%= creItem.url %>" target="_blank" class="feed-card-txt-detail" suda-uatrack="key=index_feed&value=news_click:<%= news.lid %>:<%= newsIndex + it.fromCount %>:<%= news._uaTrackValue %>:i2" rel="nofollow">[\u8BE6\u7EC6]</a>');
    html.push("</div>");
    html.push(shareUserHTML);
    html.push("</div>");

    // 文字新闻内容
    html.push("<% } else if(creItem.intro){ %>");
    html.push('<div class="feed-card-c"><div class="feed-card-txt">');
    html.push('<a href="<%= creItem.url %>" class="feed-card-txt-summary" rel="nofollow" suda-uatrack="key=index_feed&value=news_click:<%= news.lid %>:<%= newsIndex + it.fromCount %>:<%= news._uaTrackValue %>:i2" target="_blank"><%= creItem.intro %></a><a href="<%= creItem.url %>" class="feed-card-txt-detail" suda-uatrack="key=index_feed&value=news_click:<%= news.lid %>:<%= newsIndex + it.fromCount %>:<%= news._uaTrackValue %>:i2" target="_blank" rel="nofollow">[\u8BE6\u7EC6]</a>');
    html.push("</div>");
    html.push(shareUserHTML);
    html.push("</div>");
    html.push("<% } %>");

    html.push(templateInfoHTML('creItem'));

    html.push("</div>");
    html.push("<% } %>");

  html.push('</div>');

  html.push('<div class="feed-card-scroll-page">');
  html.push('<span class="feed-card-scroll-num" id="feedCardListScrollNewsNum">1/<%= news.sub.length %></span><a href="javascript:;" class="feed-card-scroll-prev feed-card-icon" id="feedCardListScrollNewsPrev" suda-uatrack="key=index_feed&value=sns_prev">Prev</a><a href="javascript:;" class="feed-card-scroll-next feed-card-icon" id="feedCardListScrollNewsNext" suda-uatrack="key=index_feed&value=sns_next">Next</a>');
  html.push('</div>');

  html.push("</div>");

  html.push('<% break; %>')

  return html.join('');
})();

/**
 * templateid为3的新闻
 * 即: 问答
 */

var feedTemplate3 = (function(){

  var html = ['<% case 3: %>'];

  html.push('<h2' + feedTemplateTrack.urlTrack + 'class="' + FEED_TEMPLATE.ICON + FEED_TEMPLATE.QAQ + ' <%= news.iconClass %>"><a href="<%= news.url %>" target="_blank"><%= news.title %></a></h2>');
  html.push('<div class="feed-card-c feed-card-c-qa feed-card-clearfix">');
  html.push('<div class="feed-card-icon feed-card-icon-qaa"></div>');
  html.push('<a href="<%= news.url %>" target="_blank"' + feedTemplateTrack.urlTrack + ' class="feed-card-qaa-a"><%= news.answer %></a>');
  html.push("</div>");

  html.push('<div class="feed-card-a feed-card-a-qa">');
  html.push('<span><%= news.keywords.join(",") %></span>');
  html.push('<span class="feed-card-news-spliter">|</span>');
  html.push('<span class="feed-card-news-label">\u4E13\u5BB6:</span>');
  html.push('<span><%= news.nick %></span>');
  html.push('</div>');

  html.push('<% break; %>')

  return html.join('');
})();

/**
 * templateid为4的新闻
 * 即: 论坛
 */

var feedTemplate4 = (function(){

  var html = ['<% case 4: %>'];

  html.push('<h2' + feedTemplateTrack.urlTrack + 'class="' + FEED_TEMPLATE.ICON + FEED_TEMPLATE.BBS + ' <%= news.iconClass %>"><a href="<%= news.url %>" target="_blank"><%= news.title %></a></h2>');
  html.push('<div class="feed-card-c"><div class="feed-card-txt"><a href="<%= news.url %>" target="_blank"' + feedTemplateTrack.urlTrack + ' class="feed-card-c-bbs-a">');
  html.push('<%= news.summary %></a>');
  html.push("</div></div>");

  html.push('<div class="feed-card-a">');
  html.push('<div class="feed-card-time"><%= news.timeStr %></div>');
  html.push('<div class="feed-card-bbs-info">');
  // html.push('<span class="feed-card-news-label">\u6765\u81EA:</span>');
  // html.push('<a href="<%= news.bbsUrl %>" target="_blank"><%= news.bbsName %></a>');
  // html.push('<span class="feed-card-news-spliter">|</span>');
  html.push('<span class="feed-card-news-label">\u53D1\u5E16\u4EBA:</span>');
  html.push('<%= news.author %>');
  html.push('</div>');
  html.push('</div>');

  html.push('<% break; %>')

  return html.join('');
})();

/**
 * templateid为5和6的新闻
 * 即: 投票和打分
 */

var feedTemplate5_6 = (function(){


  var titleAdURL = ['<% if(news.isAdNews) { %>'];
  titleAdURL.push('<a class="feed-card-wb-ad-url" href="<%= news.weibourl %>" target="_blank"><%= news.weiboname %></a>');
  titleAdURL.push('<% } %>');
  titleAdURL = titleAdURL.join('');

  var html = ['<% case 5: case 6: %>'];

  html.push("<% if(news.templateid == 5) { %>");
  html.push('<h2' + feedTemplateTrack.urlTrack + 'class="' + FEED_TEMPLATE.ICON + FEED_TEMPLATE.VOTE + ' <%= news.iconClass %>"><a href="<%= news.url %>" target="_blank"><%= news.title %></a>' + titleAdURL + '</h2>');
  html.push('<% } else { %>')
  html.push('<h2' + feedTemplateTrack.urlTrack + 'class="' + FEED_TEMPLATE.ICON + FEED_TEMPLATE.SCORE + ' <%= news.iconClass %>"><a href="<%= news.url %>" target="_blank"><%= news.title %></a></h2>');
  html.push('<% } %>');

  html.push('<div class="feed-card-c feed-card-c1 feed-card-clearfix">');
  html.push(IMAGE_DIV_HTML);
  html.push('<a href="<%= news.url %>"' + feedTemplateTrack.urlTrack + 'target="_blank"><img src="<%= news.img %>" alt="<%= news.title %>">');
  html.push('</a>');
  html.push('</div>');
  html.push('<div class="feed-card-txt">');
  html.push('<a href="<%= news.url %>" class="feed-card-txt-summary" rel="nofollow"' + feedTemplateTrack.urlTrack + 'target="_blank"><%= news.intro %></a>');
  html.push('<a href="<%= news.url %>" class="feed-card-txt-detail" rel="nofollow"' + feedTemplateTrack.urlTrack + 'target="_blank">[\u8BE6\u7EC6]</a>');
  html.push('</div>');

  html.push("<% if(news.templateid == 5) { %>");
  html.push('<div class="feed-card-do-vote"><a href="<%= news.url %>" target="_blank">\u5F00\u59CB\u6295\u7968</a></div>');
  html.push('<% } else { %>')
  html.push('<div class="feed-card-do-score"><a href="<%= news.url %>" target="_blank">\u5F00\u59CB\u6253\u5206</a></div>');
  html.push('<% } %>');

  html.push('</div>');

  html.push(templateInfoHTML('news'));

  html.push('<% break; %>')

  return html.join('');
})();

var feedTemplate7 = (function(){

  var html = ['<% case 7: %>'];

  html.push('<% if(news.comment_total > __FEED_CARD_HOT_COUNT) { %>');
  html.push('<h2' + feedTemplateTrack.urlTrack + 'class="' + FEED_TEMPLATE.ICON + FEED_TEMPLATE.HOT + ' <%= news.iconClass %>"><a href="<%= news.url %>" target="_blank"><%= news.title %></a></h2>');
  html.push('<% } else { %>')
  html.push('<h2' + feedTemplateTrack.urlTrack + '><a href="<%= news.url %>" target="_blank"><%= news.title %></a></h2>');
  html.push('<% } %>');
  html.push('<div class="feed-card-c" data-id="news-<%= news.mid %>">');
  html.push("</div>");

  // html.push(templateInfoHTML('news'));

  html.push('<% break; %>')

  return html.join('');
})();
/**
 * templateid为101的新闻
 * 即: 手动模板1
 */

var feedTemplate101 = (function(){


  var html = ['<% case 101: %>'];

  html.push('<% if(news.comment_total > __FEED_CARD_HOT_COUNT) { %>');
  html.push('<h2' + feedTemplateTrack.urlTrack + 'class="' + FEED_TEMPLATE.ICON + FEED_TEMPLATE.HOT + ' <%= news.iconClass %>"><a href="<%= news.url %>" target="_blank"><%= news.title %></a></h2>');
  html.push('<% } else { %>');
  html.push('<h2' + feedTemplateTrack.urlTrack + '><a href="<%= news.url %>" target="_blank"><%= news.title %></a></h2>');
  html.push('<% } %>');
  html.push('<div class="feed-card-c"><div class="feed-card-photos feed-card-clearfix">');
  html.push("<% for(var subIndex = 0; subIndex < news.sub.length; subIndex ++ ) { var subItem = news.sub[subIndex];%>");
  html.push('<div class="feed-card-photo <%= subIndex == news.sub.length - 1 ? "last-feed-card-photo" : "" %>"><a href="<%= subItem.url %>" target="_blank" class="img"' + feedTemplateTrack.urlTrack + '><img src="<%= subItem.img %>">');
  html.push('<% if(subItem.categoryid == 2) { %>');
  html.push('<i class="feed-card-icon feed-card-icon-picAlbum"><%= subItem.images ? (subItem.images.length > 1 ? subItem.images.length : "") : "" %></i>');
  html.push('<% } else if(subItem.categoryid == 3) { %>');
  html.push('<i class="feed-card-icon feed-card-icon-svideo"></i>');
  html.push('<% } %>');

  html.push('</a><a href="<%= subItem.url %>"' + feedTemplateTrack.urlTrack + ' target="_blank"><%= subItem.title %></a></div>');

  html.push("<% } %>");
  html.push("</div></div>");

  html.push(templateInfoHTML('news'));

  html.push('<% break; %>')

  return html.join('');
})();

/**
 * templateid为102的新闻
 * 即: 手动模板2
 */

var feedTemplate102 = (function(){


  var html = ['<% case 102: %>'];

  html.push('<% if(news.comment_total > __FEED_CARD_HOT_COUNT) { %>');
  html.push('<h2' + feedTemplateTrack.urlTrack + 'class="' + FEED_TEMPLATE.ICON + FEED_TEMPLATE.HOT + ' <%= news.iconClass %>"><a href="<%= news.url %>" target="_blank"><%= news.title %></a></h2>');
  html.push('<% } else { %>');
  html.push('<h2' + feedTemplateTrack.urlTrack + 'class="' + FEED_TEMPLATE.ICON + FEED_TEMPLATE.VIDEO_ICON + '"><a href="<%= news.url %>" target="_blank"><%= news.title %></a></h2>');
  html.push('<% } %>');
  html.push('<div class="feed-card-c"><div class="feed-card-videos feed-card-clearfix">');
  html.push("<% for(var subIndex = 0; subIndex < news.sub.length; subIndex ++ ) { var subItem = news.sub[subIndex];%>");
  html.push('<div class="feed-card-video <%= subIndex == news.sub.length - 1 ? "last-feed-card-video" : "" %>"><a href="<%= subItem.url %>" target="_blank" class="img"' + feedTemplateTrack.urlTrack + '><img src="<%= subItem.img %>"><i class="feed-card-icon feed-card-icon-svideo"></i></a>');
  html.push('<a href="<%= subItem.url %>" target="_blank"' + feedTemplateTrack.urlTrack + '><%= subItem.title %></a></div>');
  html.push("<% } %>");
  html.push("</div></div>");

  html.push(templateInfoHTML('news'));

  html.push('<% break; %>')

  return html.join('');
})();

/**
 * templateid为103_104的新闻
 * 即: 手动模板3,4
 */

var feedTemplate103_104 = (function(){


  var html = ['<% case 103: case 104: %>'];

  html.push('<h2' + feedTemplateTrack.urlTrack + ' class="<%= news.templateid == 103 ? "feed-card-icon feed-card-icon-topic" : "" %> <%= news.iconClass %>"><a href="<%= news.url %>" target="_blank"><%= news.title %></a></h2>');
  html.push('<div class="feed-card-c feed-card-clearfix">');
  html.push('<div class="feed-card-topic-img"><a href="<%= news.url %>" target="_blank"' + feedTemplateTrack.urlTrack + '><img src="<%= news.img %>"></a></div>');
  html.push('<div class="feed-card-topic-txt"><p><a href="<%= news.url %>" target="_blank"' + feedTemplateTrack.urlTrack + ' rel="nofollow"><%= news.summary %></a><a href="<%= news.url %>" target="_blank"' + feedTemplateTrack.urlTrack + ' rel="nofollow">[\u8BE6\u7EC6]</a>');

  html.push('<% if(news.isAdNews) { %>');
  html.push('<br /><a class="feed-card-wb-ad-url" href="<%= news.weibourl %>" target="_blank"><%= news.weiboname %></a>');
  html.push('<% } %>');

  html.push('</p>');
  html.push('<div class="feed-card-topics feed-card-clearfix">');
  html.push("<% for(var subIndex = 0; subIndex < news.sub.length; subIndex ++ ) { var subItem = news.sub[subIndex];%>");
  html.push('<div class="feed-card-topic <%= subIndex == news.sub.length - 1 ? "last-feed-card-topic" : "" %>"><a href="<%= subItem.url %>" target="_blank" class="img"' + feedTemplateTrack.urlTrack + '><img src="<%= subItem.img %>"></a><a href="<%= subItem.url %>" target="_blank"' + feedTemplateTrack.urlTrack + '><%= subItem.title %></a></div>');
  html.push("<% } %>");
  html.push("</div></div></div>");

  html.push(templateInfoHTML('news'));

  html.push('<% break; %>')

  return html.join('');
})();

/**
 * templateid为102的新闻
 * 即: 手动模板2
 */

var feedTemplate105_106 = (function(){


  var html = ['<% case 105: case 106: %>'];

  html.push('<h2' + feedTemplateTrack.urlTrack + ' class="<%= news.templateid == 103 ? "feed-card-icon feed-card-icon-topic" : "" %> <%= news.iconClass %>"><a href="<%= news.url %>" target="_blank"><%= news.title %></a></h2>');
  html.push('<div class="feed-card-c feed-card-clearfix">');
  html.push('<div class="feed-card-topic-img"><a href="<%= news.url %>" target="_blank"' + feedTemplateTrack.urlTrack + '><img src="<%= news.img %>"></a></div>');
  html.push('<div class="feed-card-topic-txt feed-card-topic-txt2"><p><a href="<%= news.url %>" target="_blank"' + feedTemplateTrack.urlTrack + ' rel="nofollow"><%= news.summary %></a><a href="<%= news.url %>" target="_blank" rel="nofollow"' + feedTemplateTrack.urlTrack + '>[\u8BE6\u7EC6]</a></p>');
  html.push('<div class="feed-card-topic-list"><h5>\u70ED\u70B9\u63A8\u8350</h5><ul class="feed-card-list">');
  html.push("<% for(var subIndex = 0; subIndex < news.sub.length; subIndex ++ ) { var subItem = news.sub[subIndex];%>");
  html.push('<li><a href="<%= subItem.url %>" target="_blank"' + feedTemplateTrack.urlTrack + '><%= subItem.title %></a></li>');
  html.push("<% } %>");
  html.push("</ul></div></div></div>");

  html.push(templateInfoHTML('news'));

  html.push('<% break; %>')

  return html.join('');
})();

var feedTemplate107 = (function(){

  var html = ['<% case 107: %>'];

  html.push('<% if(news.icon) { %>');
  html.push('<% if(news.iconurl) { %>');
  html.push('<h2' + feedTemplateTrack.urlTrack + ' class="<%= news.iconClass %>"><a href="<%= news.iconurl %>" target="_blank" style="float:left; margin:4px 10px 0 0;"><img src="<%= news.icon %>" height="20" /></a><a href="<%= news.url %>" target="_blank"><%= news.title %></a></h2>');
  html.push('<% } else { %>');
  html.push('<h2' + feedTemplateTrack.urlTrack + ' class="<%= news.iconClass %>"><a href="<%= news.url %>" target="_blank"><img src="<%= news.icon %>" height="20" style="float:left; margin:4px 10px 0 0;" /><%= news.title %></a></h2>');
  html.push('<% } %>');
  html.push('<% } else { %>');
  html.push('<h2' + feedTemplateTrack.urlTrack + '><a href="<%= news.url %>" target="_blank"><%= news.title %></a></h2>');
  html.push('<% } %>');

  html.push('<div class="feed-card-c feed-card-clearfix">');
  html.push('<div class="feed-card-topic-img"><a href="<%= news.url %>" target="_blank"' + feedTemplateTrack.urlTrack + '><img src="<%= news.img.u %>"></a></div>');
  html.push('<div class="feed-card-topic-txt feed-card-topic-txt2"><p><a href="<%= news.url %>" target="_blank"' + feedTemplateTrack.urlTrack + ' rel="nofollow"><%= news.summary %></a><a href="<%= news.url %>" target="_blank" rel="nofollow"' + feedTemplateTrack.urlTrack + '>[\u8BE6\u7EC6]</a></p>');
  html.push('<div class="feed-card-topic-list"><h5>\u70ED\u70B9\u63A8\u8350</h5><ul class="feed-card-list">');
  html.push("<% for(var subIndex = 0; subIndex < news.sub.length; subIndex ++ ) { var subItem = news.sub[subIndex];%>");
  html.push('<li><a href="<%= subItem.url %>" target="_blank"' + feedTemplateTrack.urlTrack + '><%= subItem.title %></a></li>');
  html.push("<% } %>");
  html.push("</ul></div></div></div>");

  html.push(templateInfoHTML('news'));

  html.push('<% break; %>')

  return html.join('');
})();

/**
 * 具体template是由 categoryid, templateid, isAdNews, isTopNews, isDataNews, isCreNews 共同决定
 */
var feedTemplates = (function(){
  var __FEED_CARD_HOT_COUNT = 50;

  if(win.FEED_CARD_INFO.hotNewsCount){
    __FEED_CARD_HOT_COUNT = win.FEED_CARD_INFO.hotNewsCount;
  }

  win.__FEED_CARD_HOT_COUNT = __FEED_CARD_HOT_COUNT;

  var BEGIN_HTML    = '<% for(var newsIndex = 0, newsLen = it.newsList.length; newsIndex < newsLen; newsIndex ++) { var news = it.newsList[newsIndex]; %> <div class="feed-card-item">';
  var END_HTML      = '</div><% } %>';

  // var SWITCH_BEGIN_HTML = '<% switch(news.templateid) { case 0: %>';
  var SWITCH_END_HTML   = '<% } %>';

  var template = [BEGIN_HTML];

  template.push(feedTemplate0);
  template.push(feedTemplate1);
  template.push(feedTemplate2);
  template.push(feedTemplate3);
  template.push(feedTemplate4);
  template.push(feedTemplate5_6);
  template.push(feedTemplate7);
  template.push(feedTemplate101);
  template.push(feedTemplate102);
  template.push(feedTemplate103_104);
  template.push(feedTemplate105_106);
  template.push(feedTemplate107);

  template.push(SWITCH_END_HTML);

  template.push(END_HTML);

  return template.join('');
})();

/**
 * 单条微博模板
 */

var feedTemplateWeibo = (function(){

  var html = [];

  html.push('<div class="feed-card-weibo feed-card-clearfix">');
    html.push('<div class="feed-card-weibo-portrait">');
    html.push('<a href="http://weibo.com/u/<%= it.user.id %>" target="_blank"><img src="<%= it.user.profile_image_url %>" alt="<%= it.user.screen_name %>"></a>');
    html.push('</div>');

    html.push('<div class="feed-card-weibo-c">');
      html.push('<div class="feed-card-weibo-author">');
      html.push('<a href="http://weibo.com/u/<%= it.user.id %>" target="_blank"><%= it.user.screen_name %><%= it.user.remark ? "(" + it.user.remark + ")" : "" %></a>');

      html.push('<% if(it.user.verified) {%>');

      html.push('<a href="http://verified.weibo.com/verify" target="_blank">');
        html.push('<i title="\u5FAE\u535A\u8BA4\u8BC1" class="feed-card-weibo-icon feed-card-weibo-icon-verify<%= it.user.verified_type %>"></i>');
      html.push('</a>');

      html.push('<% } %>');

      html.push('</div>');
      html.push('<div class="feed-card-weibo-txt"><%= it.text %></div>');

      html.push('<% if(it.pic_urls && it.pic_urls.length) { %>');
      html.push('<div class="feed-card-weibo-photos feed-card-clearfix">');
        html.push('<% for(var picIndex = 0, picLen = it.pic_urls.length; picIndex < picLen; picIndex ++) { %>');
        html.push('<a href="<%= it.url %>" target="_blank"><img src="<%= it.pic_urls[picIndex].thumbnail_pic %>"></a>');
        html.push('<% } %>');
      html.push('</div>');
      html.push('<% } %>');

      html.push('<div class="feed-card-weibo-a feed-card-clearfix">');
        html.push('<div class="feed-card-weibo-time">');
          html.push('<a href="<%= it.url %>" target="_blank"><%= it.timeStr %></a>');
        html.push('</div>');
        html.push('<div class="feed-card-weibo-source">');
          html.push('\u6765\u81EA <%= it.source %>');
        html.push('</div>');
        html.push('<div class="feed-card-weibo-actions">');
          html.push('<a href="<%= it.url %>" target="_blank"><i title="\u8D5E" class="feed-card-weibo-icon feed-card-weibo-icon-zan"></i>\u8D5E<%= it.attitudes_count > 0 ? "(" + it.attitudes_count + ")" : "" %></a>');
            html.push('<span class="feed-card-weibo-spliter">|</span>');
            html.push('<a href="<%= it.url %>" target="_blank">\u8F6C\u53D1<%= it.reposts_count > 0 ? "(" + it.reposts_count + ")" : "" %></a>');
            html.push('<span class="feed-card-weibo-spliter">|</span>');
            html.push('<a href="<%= it.url %>" target="_blank">\u6536\u85CF</a>');
            html.push('<span class="feed-card-weibo-spliter">|</span>');
            html.push('<a href="<%= it.url %>" target="_blank">\u8BC4\u8BBA<%= it.comments_count > 0 ? "(" + it.comments_count + ")" : "" %></a>');
          html.push('</div>');
        html.push('</div>');
      html.push('</div>');
    html.push('</div>');
  html.push('</div>');

  return doT.template(html.join(''));
})();

var tabTemplate = (function(){
  var html = [];

  html.push('<div class="feed-card-tab" id="feedCardTab">');

    html.push('<div class="feed-card-tabs feed-card-clearfix" data-sudaclick="feed_nav">');
      html.push('<div class="feed-card-tab-firstTab" style="width:<%= it.css_width + 20 %>px;">');
        html.push('<span id="feedCardTabFirstTab" style="width:<%= it.css_width %>px;" class="feed-card-tab-tabi feed-card-tab-tabi-selected" data-lid="<%= it.lid %>"><%= it.txt %></span>');
      html.push("</div>");

      html.push('<div class="feed-card-tab-tabContainer">');
        html.push('<div id="feedCardConfigurableTabs" class="feed-card-tab-ctabs feed-card-clearfix"></div>');
        html.push('<div id="feedCardMoreTabsTrigger" class="feed-card-tab-more-trigger" style="display:none;">\u66F4\u591A<i></i></div>');
      html.push("</div>");

      html.push('<div class="feed-card-tab-lastTab" suda-uatrack="key=index_feed&value=float_setting">');
        html.push('<span class="feed-card-tab-tabi" id="feedCardSettingsTrigger">\u5174\u8DA3\u8BBE\u7F6E</span>');
      html.push("</div>");

    html.push("</div>");

    html.push('<div class="feed-card-tab-more" id="feedCardMoreTabs" style="display:none;"></div>');
    html.push('<div class="feed-card-tab-edit" id="feedCardTabEditor" data-sudaclick="posi-setting" style="display:none;"></div>');
    html.push('<div class="feed-card-tab-toast" id="feedCardTabToast" style="display:none;"><div id="feedCardTabToastC"></div><a href="javascript:;" id="feedCardTabToastClose">Close</a><span></span></div>');

    html.push('<div class="feed-card-tab-labels2" id="feedCardLabels" style="display:none;">');
    html.push('<a href="javascript;" class="feed-card-tab-labels-toggle" id="feedCardLabelsToggle">\u66F4\u591A</a>');
    html.push('<div class="feed-card-tab-labels-c feed-card-clearfix" id="feedCardLabelsC"></div>');
    html.push('</div>');

  html.push("</div>");

  html.push('<div class="feed-card-tag-tip" id="feedCardTagTip" suda-uatrack="key=index_feed&value=tag_tip" style="display:none;">');
  html.push('<div>\u559C\u6B22\u201C<em id="feedCardTagTipLabel"></em>\u201D\uFF1F<a href="javascript;" id="feedCardTagTipAdd">\u9A6C\u4E0A\u8BA2\u9605</a>\u6B23\u8D4F\u6700\u7CBE\u5F69\u5185\u5BB9~</div>')
  html.push('<a href="javascript;" id="feedCardTagTipClose">\u5173\u95ED</a>');
  html.push('</div>');

  html.push('<div class="feed-card-select-tag" id="feedCardSelectTag" style="display:none;">');
  html.push('<div class="feed-card-select-tag-will">\u6B32\u6DFB\u52A0\u7684\u7684\u6807\u7B7E\uFF1A<span id="feedCardSelectWillTag"></span></div>')
  html.push('<div class="feed-card-select-tag-close"><a href="javascript;" id="feedCardSelectTagClose">\u5173\u95ED</a></div>');
  html.push('<div class="feed-card-select-tags feed-card-clearfix" id="feedCardSelectTagLabels"></div>');
  html.push('<div class="feed-card-select-tag-tip feed-card-clearfix"><p id="feedCardSelectTagTip"></p><a href="javascript;" id="feedCardSelectTagDone" class="disable">\u5B8C\u6210</a></div>');
  html.push('</div>');

  html.push('<div class="feed-card-notification2" id="feedCardNotification2" style="display:none;"></div>');

  html.push('<div class="feed-card-notification" id="feedCardNotification" style="display:none;" suda-uatrack="key=index_feed&value=notification"></div>');

  html.push('<div class="feed-card-content" id="feedCardContent" data-sudaclick="feed_list"></div>');

  return html.join('');
})();

var columnEditorTemplate = (function(){
  var html = [];

  html.push('<div class="feed-card-tab-select" id="feedCardEditStep1">');
  html.push('<div class="feed-card-tab-edit-col">');
  html.push('<div class="feed-card-tab-edit-tit feed-card-clearfix">');
  html.push("<h5>\u6211\u7684\u680F\u76EE\uFF1A</h5>");
  html.push("<p>\u8BF7\u70B9\u51FB\u9009\u62E9\u60A8\u6240\u611F\u5174\u8DA3\u7684\u680F\u76EE</p>");
  html.push("</div>");
  html.push('<div class="feed-card-tab-edit-cols feed-card-clearfix" id="feedCardEditCols">');
  html.push("</div></div>");
  html.push("<% if(it.supportKeywords) { %>");
  html.push('<div class="feed-card-tab-edit-label" id="feedCardTabEditLabelC">');
  html.push('<div class="feed-card-tab-edit-label-tip" id="feedCardEditLabelTip" style="display:none;">\u6700\u591A\u53EA\u80FD\u6DFB\u52A0<%= it.maxKeywordsCount %>\u4E2A\u6807\u7B7E<i></i></div>');
  html.push('<div class="feed-card-tab-edit-tit feed-card-clearfix">');
  html.push("<h5>\u6211\u7684\u6807\u7B7E\uFF1A</h5>");
  html.push("<p>\u60A8\u53EF\u4EE5\u8F93\u5165\u81EA\u5DF1\u611F\u5174\u8DA3\u7684\u4EBA\u7269\u6216\u4E8B\u4EF6</p>");
  html.push("</div>");
  html.push('<div class="feed-card-tab-edit-addLabel feed-card-clearfix">');
  html.push('<div class="feed-card-tab-edit-addLabelForm">');
  html.push('<input type="text" name="feedCardAddLabelInput" id="feedCardAddLabelInput" placeholder="\u6700\u591A\u8F93\u5165<%= it.maxKeywordLengthEn %>\u4E2A\u5B57">');
  html.push('<a href="javascript:;" id="feedCardAddLabelButton">Add</a>');
  html.push("</div>");
  html.push('<div class="feed-card-tab-edit-hotLabels" id="feedCardEditHotLabels">');
  html.push("<span>\u70ED\u8BCD\u63A8\u8350:</span>");
  html.push("<% for(var index = 0; index < it.hotKeywords.length; index ++) { %>");
  html.push('<a href="javascript:;" suda-uatrack="key=index_feed&value=label_recommend"><%= it.hotKeywords[index] %></a>');
  html.push("<% } %>");
  html.push("</div>");
  html.push("</div>");
  html.push('<div class="feed-card-tab-edit-labels feed-card-clearfix" id="feedCardEditSelectLabels">');
  html.push("</div>");
  html.push("</div>");
  html.push("<% } %>");
  html.push("</div>");
  html.push('<div class="feed-card-tab-reorder" style="display:none;" id="feedCardEditStep2">');
  html.push('<div class="feed-card-tab-edit-tit feed-card-clearfix">');
  html.push("<p>\u60A8\u53EF\u4EE5\u62D6\u62FD\u8C03\u6574\u663E\u793A\u987A\u5E8F</p>");
  html.push("</div>");
  html.push('<div class="feed-card-tab-reorder-c feed-card-clearfix" id="feedCardEditSelectW">');
  html.push("</div></div>");
  html.push('<div class="feed-card-tab-edit-step feed-card-clearfix">');
  html.push('<p id="feedCardEditTip"></p>');
  html.push('<div class="feed-card-tab-edit-steps">');
  html.push('<a href="javascript:;" class="prev" id="feedCardEditPrev" style="display:none;" suda-uatrack="key=index_feed&value=setting_btn_prev">\u4E0A\u4E00\u6B65</a>');
  html.push('<a href="javascript:;" class="next" id="feedCardEditNext" suda-uatrack="key=index_feed&value=setting_btn_next">\u4E0B\u4E00\u6B65</a>');
  html.push('<a href="javascript:;" class="done" id="feedCardEditDone" style="display:none;" suda-uatrack="key=index_feed&value=setting_btn_save">\u5B8C\u6210</a>');
  html.push("</div></div>");

  return html.join('');
})();

var userData = (function(){

  var DEFAULT_DATA_KEY = 'FEED_CARD_DEFAULT_TAB';

  function generateStr(lids, keywords, selectedTag){
    var result;
    if(lids.length && keywords.length){
      result = '{"lids":[' + lids.join(',') + '],"keywords":["' + keywords.join('","') + '"],';
    } else if(keywords.length == 0){
      result = '{"lids":[' + lids.join(',') + '],"keywords":[],';
    } else if(lids.length == 0){
      result = '{"lids":[],"keywords":["' + keywords.join('","') + '"],';
    }
    if(selectedTag){
      result += '"selectedTag":"' + selectedTag + '"}';
    } else {
      result += '"selectedTag":""}';
    }
    return result;
  }

  function setDefaultData(lids, keywords){
    storage.setItem(DEFAULT_DATA_KEY, generateStr(lids, keywords));
  }

  function getDefaultData(){
    var str = storage.getItem(DEFAULT_DATA_KEY);
    if(str){
      try {
        return utils.getJSON(str);
      } catch(e) {

      }
    }
    return null;
  }

  function uploadUserData(lids, keywords){
    dom.$('columnEditorFormValueInput').value = generateStr(lids, keywords);
    dom.$('columnEditorForm').submit();
  }

  function getUserDataFromNet(homeid, callback){
    IO.jsonp({
      url: 'https://interest.mix.sina.com.cn/api/customize/feed_get',
      data: {
        homeId: homeid
      },
      onsuccess: function(result){
        if(result && result.result && result.result.status && result.result.status.code == 0){
          var jsonResult = utils.getJSON(result.result.data);
          callback(jsonResult);
        }
      }
    });
  }

  return {
    setDefaultData: setDefaultData,
    getDefaultData: getDefaultData,
    getUserDataFromNet: getUserDataFromNet,
    generateStr: generateStr
  };
})();

var ScrollCard = (function(){

  var ScrollCardClass = function(obj){
    var that = this;

    that.index = 0;

    var parent = dom.$(obj.containerID);
    that.items = [];

    /*
      IE6 不支持
      Array.prototype.push.apply(that.items, parent.children);
      */
    for(var i = 0; i < parent.children.length; i ++){
      that.items.push(parent.children[i]);
    }
    that.items[0].style.display = 'block';
  };

  ScrollCardClass.prototype = {
    _show: function(index){
      var that = this;
      for (var i = that.items.length - 1; i >= 0; i--) {
        that.items[i].style.display = 'none';
      }
      that.items[index].style.display = 'block';
    },
    goToNext: function(){
      var that = this;
      that.index ++;
      if(that.index >= that.items.length){
        that.index = 0;
      }
      that._show(that.index);
      if(that.onChange){
        that.onChange(that.index, that.items.length);
      }
    },
    goToPrev: function(){
      var that = this;
      that.index --;
      if(that.index < 0){
        that.index = that.items.length - 1;
      }
      that._show(that.index);
      if(that.onChange){
        that.onChange(that.index, that.items.length);
      }
    },
    goTo: function(index){
      if(index >= 0 && index < that.items.length){
        that.index = index;
        that._show(index);
        if(that.onChange){
          that.onChange(that.index, that.items.length);
        }
      }
    }
  };

  return ScrollCardClass;

})();

var NotificationGuarder = (function(){

  var NotificationGuarderClass = function(obj){
    utils.fillOptionsWithDefault(this, obj, {
      notificationTemplate: '\u6709{n}\u6761\u6D88\u606F\uFF0C\u70B9\u51FB\u67E5\u770B',
      notificationTimeout: 1000 * 30
    });

    if(this.notificationTimeout < 1000 * 10){
      this.notificationTimeout = 1000 * 10;
    }

    this.count = 0;

    this.dom = dom.$('feedCardNotification');
  };

  NotificationGuarderClass.prototype = {
    begin: function(time, pageid, lid){
      var that = this;
      that.time = time;
      that.pageid = pageid;
      that.lid = lid;
      that.enable = true;
      that.count = 0;
      if(that.timeout) {
        win.clearInterval(that.timeout);
      }
      that.timeout = win.setInterval(function(){
        that._sendRequest();
      }, that.notificationTimeout);
    },
    _sendRequest: function(){
      var that = this;
      IO.jsonp({
        url: 'https://vfeed.sina.com.cn/api/roll/last_news_count',
        jsonpValue: 'feedCardJsonpCallback2',
        data: {
          ctime: that.time,
          pageid: that.pageid,
          lid: that.lid
        },
        onsuccess: function(res){
          if(res && res.result && res.result.status && res.result.status.code == 0){
            if(res.result.total > 0 && that.enable){
              that.time = res.result.ctime;
              that.showDOM(res.result.total);
            }
          }
        }
      });
    },
    hideDOM: function(){
      this.dom.style.display = 'none';
      win.clearTimeout(this.timeout);
      this.enable = false;
    },
    showDOM: function(count){
      this.count += count;
      this.dom.style.display = 'block';
      this.dom.innerHTML = this.notificationTemplate.replace('{n}', this.count);
    }
  };

  return NotificationGuarderClass;

})();

var FeedCard = (function(){

  var STEP_SIZE = 3;
  var PAGE_SIZE = 15;

  var LID_URL = 'https://feed.sina.com.cn/api/roll/get';
  var TAG_URL = 'https://feed.sina.com.cn/api/roll/tags';
  var GUESS_LIKE_URL = 'https://feed.sina.com.cn/api/roll/cre';
  var STATIC_LID_URL = 'https://news.sina.com.cn/iframe/feed/';

  var SINA_IMG_REG = /^https:\/\/[^\/]+\.(sina\.com\.cn|sina\.cn|weibo\.com|weibo\.cn|sinaimg\.cn|sinaimg\.com|sinastorage\.com|sinaedge\.com|v\.iask\.com)/i;

  var DEFAULT_LOAD_TYPE = 1;
  var DEFAULT_TAB_HEIGHT = 50;

  var noLabelText = '\u8FD8\u672A\u6DFB\u52A0\u6807\u7B7E! <span onclick="window.__SinaFeedCard__.openSettings();" style="text-decoration:underline; cursor:pointer;">\u7ACB\u5373\u6DFB\u52A0</span>';

  var LOADING_IMAGE_URL = 'https://i1.sinaimg.cn/home/main/ipadwww14/04/loading.gif';

  var FeedCard = function(obj){

    var that = this;
    utils.fillOptionsWithDefault(that, obj, {
      pageSize: PAGE_SIZE,
      stepSize: STEP_SIZE,
      _iotype: 0,
      isLoading: false,
      loadType: DEFAULT_LOAD_TYPE,
      yPosition: 'auto',
      tabHeight: DEFAULT_TAB_HEIGHT,
      tagsShowCount: 3,
      cardImageParam: {w: 130, h: 87},
      albumImageParam: {w: 0, h: 143}
    });

    win.__SinaFeedCard__cardImageParam = that.cardImageParam;

    if(that.supportNotification){
      that.notificationGuarder = new NotificationGuarder({
        notificationTemplate: that.notificationTemplate,
        notificationTimeout: that.notificationTimeout
      });
    }

    that.container = dom.$(obj.containerID);

    that.htmlGenerator = doT.template(feedTemplates);

    that.fromCount = 0;

    that.init();
  };

  FeedCard.prototype = {
    init: function(){
      var that = this;

      var fragment = doc.createDocumentFragment();

      var contentDiv = that.contentDiv = doc.createElement('div');
      var loadingDiv = that.loadingDiv = doc.createElement('div');

      var loadingImage = doc.createElement('img');
      loadingImage.src = LOADING_IMAGE_URL;
      loadingImage.width = 30;
      loadingImage.height = 30;
      loadingDiv.appendChild(loadingImage);
      loadingDiv.className = 'feed-card-loading feed-card-loading0';
      loadingDiv.style.display = 'none';

      var pageControlDiv = that.pageControlDiv = doc.createElement('div');
      pageControlDiv.className = 'feed-card-page';
      pageControlDiv.style.display = 'none';

      fragment.appendChild(contentDiv);
      fragment.appendChild(loadingDiv);

      if(that.loadType === 1){
        that._initScrollEnd();
      } else if(that.loadType === 2){
        that._initClickLoad(fragment);
      }

      fragment.appendChild(pageControlDiv);

      that.container.appendChild(fragment);

      dom.addEvent(that.pageControlDiv, 'click', function(e){
        var target = dom.getTarget(e);

        that._pageOnClick(target);

        dom.preventDefault(e);
      });

      if(that.supportNotification){
        dom.addEvent(dom.$('feedCardNotification'), 'click', function(){
          that.setLidAndLoad(that.firstTab.lid);
        });
      }
    },
    _initScrollEnd: function(){
      var that = this;

      var timeout = null;

      dom.addEvent(win, 'scroll', function(){
        if(timeout) {
          win.clearTimeout(timeout);
        }
        timeout = win.setTimeout(function(){
          var vd = utils.viewData();
          var ald = utils.isFunction(that.autoLoadDistance) ? that.autoLoadDistance() : that.autoLoadDistance;
          if(vd.viewHeight + vd.scrollTop + ald >= vd.documentHeight){
            that._loadMore();
          }
        }, 100);
      });

    },
    _initClickLoad: function(fragment){
      var that = this;

      var div = doc.createElement('div');
      div.style.display = 'none';
      div.className = 'feed-card-loading feed-card-loading1';
      div.innerHTML = that.clickLoadText;
      fragment.appendChild(div);
      that.clickLoadDiv = div;

      dom.addEvent(that.clickLoadDiv, 'click', function(){
        that._loadMore();
        that.clickLoadDiv.style.display = 'none';
      });
    },
    _setLoadingState: function(isLoading){
      var that = this;
      that.isLoading = isLoading;

      if(isLoading){
        that.loadingDiv.style.display = 'block';
      } else {
        that.loadingDiv.style.display = 'none';
      }
    },
    _loadMore: function(){
      var that = this;
      if(that.isLoading) {
        return;
      }
      if(that.step > that.stepSize){
        return;
      }

      that._loadNews(that.page, that.step);
    },
    _loadNews: function(page, step, renderType){
      var that = this;

      var encode = null;

      if(that.lid == win.FEED_CARD_INFO.firstTab.lid){
        var ignoreLidCheck = win.FEED_CARD_INFO.firstTab.ignoreLidCheck;
        encode = win.FEED_CARD_INFO.firstTab.encode;
      } else {
        var ignoreLidCheck = win.FEED_CARD_INFO.tabInfos['tab_' + that.lid].ignoreLidCheck;
        encode = win.FEED_CARD_INFO.firstTab.encode;
      }

      var realPage = (page - 1) * that.stepSize + step;

      if(that.isLoading || that.isThereNews === false) return;

      if(step == 1){
        that.contentDiv.innerHTML = '';
        that.fromCount = 0;
      }
      that._setLoadingState(true);
      that.pageControlDiv.style.display = 'none';

      var url, data;

      switch(that._iotype){
        // 正常
        case 0:
          url = LID_URL;

          data = {
            pageid: that.pageid,
            lid: that.lid,
            num: that.pageSize,
            versionNumber: that.versionNumber
          };
          if(that.enableStatic){
            url = STATIC_LID_URL + that.staticJSONDate + '/' + that.staticJSONMinute + '_nocre_pageid_' + that.pageid + '_lid_' + that.lid + '.json';
            data = {

            };
          }
        break;
        // 我的标签
        case 1:
          url = TAG_URL + '?' + that.searchQuery;
          data = {
            tags: that._keywords.join(','),
            num: that.pageSize,
            lid: that.lid,
            versionNumber: that.versionNumber
          };
        break;
        // 猜你喜欢
        case 2:
          url = GUESS_LIKE_URL + '?' + that.creQuery;
          data = {
            num: that.pageSize,
            lid: that.lid,
            versionNumber: that.versionNumber
          };
        break;
        // 第三方
        case 3:
          try{
            url = win.FEED_CARD_INFO.tabInfos['tab_' + that.lid].url;
          } catch(e) {

          }

          data = {
            num: that.pageSize,
            lid: that.lid,
            versionNumber: that.versionNumber
          };
        break;
      }

      if(that.lastTime){
        data.ctime = that.lastTime;
      } else {
        data.page = realPage;
      }

      var jsonpValue = 'feedCardJsonpCallback';
      if(that.enableStatic){
        jsonpValue = 'feed_cb_nomore_nocre';
      }

      data.encode = encode || 'utf-8';

      IO.jsonp({
        url: url,
        data: data,
        jsonpValue: jsonpValue,
        uuid: that.uuid,
        onsuccess: function(result, uuid){
          if(that.sendTrackTimeout){
            win.clearTimeout(that.sendTrackTimeout);
          }
          that._setLoadingState(false);

          that._uaTrack('index_feed', 'n_feed_pageview:' + that.lid);
          that._uaTrack('index_feed', 'refresh:' + ((that.page - 1) * 3 + that.step - 1) + ':' + that.lid);

          if(result && result.result && result.result.status && result.result.status.code == 0){
            if(ignoreLidCheck || result.result.lid == that.lid){

              if(that.page == 1 && that.step == 1 && that.lid == that.firstTab.lid && !that.enableStatic && that.supportNotification){
                that.notificationGuarder.begin(result.result.start, that.pageid, that.lid);
              }

              that.lastTime = result.result.end;
              that.totalCount = win.parseInt(result.result.total, 10);
              that.totalPage = Math.ceil(win.parseInt(result.result.total, 10) / that.stepSize / that.pageSize);
              that._renderNews(that._sortNews(result.result), renderType);
              that.step ++;

              that._createScrollCard();
              that._getWeibos();
            }
          }
        }
      });

      that.sendTrackTimeout = win.setTimeout(function(){
        that._uaTrack('index_feed', 'feed_timeout:' + that.lid);
      }, 5 * 1000);
    },
    _sortNews: function(newsObj){
      var that = this;

      var result = [];

      var newsMap = {};

      function addNews(newsList, type){
        if(newsList){
          newsList.sort(function(news1, news2){
            return win.parseInt(news1.pos, 10) - win.parseInt(news2.pos, 10);
          });

          for(var i = 0; i < newsList.length; i ++){
            var news = newsList[i];
            switch(type){
              case 1:
              news.isAdNews = true;
              break;
              case 2:
              news.isCreNews = true;
              break;
              case 3:
              news.isTopNews = true;
              break;
            }

            while(newsMap[news.pos]){
              news.pos ++;
            }
            newsMap[news.pos] = news;
          }
        }
      }

      addNews(newsObj.pdps, 1);
      addNews(newsObj.cre, 2);
      addNews(newsObj.top, 3);

      var data = newsObj.data;
      for(var i = 0; i < data.length; i ++){
        var news = data[i];
        news.isDataNews = true;

        if(!that.commonNewsSupportWeiboInfo){
          news.weiboName = null;
        }

        result.push(news);
      }

      for(var key in newsMap){
        result.splice(win.parseInt(key, 10) - 1, 0, newsMap[key]);
      }

      return result;
    },
    _getWeiboInfo: function(uids){
      var that = this;
      IO.jsonp({
        url: 'https://api.sina.com.cn/weibo/2/users/show_batch.json',
        data: {
          source: 4526198296,
          uids: uids.join(',')
        },
        onsuccess: function(result){
          if(result && result.result && result.result.status && result.result.status.code == 0){
            var users = result.result.data.users;
            for(var i = 0; i < users.length; i ++){
              var user = users[i];
              var elems = dom.getByAttributeName(that.container, 'data-uid', user.id, 'a');
              for(var j = 0; j < elems.length; j ++){
                elems[j].innerHTML = '<img src="' + user.profile_image_url + '" alt="' + user.screen_name + '" />' + user.screen_name;
              }
            }
          }
        }
      });
    },
    _createScrollCard: function(){
      if(!dom.$('feedCardListScrollNews')){
        return;
      }
      var scrollCard = new ScrollCard({
        containerID: 'feedCardListScrollNews'
      });
      var feedCardListScrollNewsNum = dom.$('feedCardListScrollNewsNum');
      scrollCard.onChange = function(index, length){
        feedCardListScrollNewsNum.innerHTML = (index + 1) + '/' + length;
      };
      dom.addEvent(dom.$('feedCardListScrollNewsPrev'), 'click', function(e){

        scrollCard.goToPrev();

        dom.preventDefault(e);
      });
      dom.addEvent(dom.$('feedCardListScrollNewsNext'), 'click', function(e){

        scrollCard.goToNext();

        dom.preventDefault(e);
      });

      this._getWeiboInfo(this.weiboUids);
    },
    _getWeibos: function(){
      var that = this;
      if(that._weiboMids && that._weiboMids.length){
        IO.jsonp({
          url: 'https://api.weibo.com/2/statuses/show_batch.json',
          data: {
            source: '4526198296',
            ids: that._weiboMids.join(',')
          },
          onsuccess: function(res){
            if(res.code == 1){
              var statuses = res.data.statuses;
              for(var i = 0; i < statuses.length; i ++){
                var status = statuses[i];
                try{
                  var d = new Date(status.created_at.replace(/\+[^\s]+/g, '') + '+0800');
                }catch(e){
                  var d = new Date(status.created_at);
                }
                status.timeStr = utils.readableDate(d.getTime() / 1000);
                status.url = that._weiboUrls[status.id];

                var elems = dom.getByAttributeName(that.container, 'data-id', 'news-' + status.id, 'div');
                for(var j = 0; j < elems.length; j ++){
                  elems[j].innerHTML = feedTemplateWeibo(status);
                }
              }
            }
          }
        });
        that._weiboMids = null;
      }
    },
    _dealNews: function(newsList){
      var that = this;
      var result = [];
      for(var i = 0; i < newsList.length; i ++) {
        if(that._dealNewsItem(newsList[i])){
          result.push(newsList[i]);
        }
      }
      return result;
    },
    _dealNewsItem: function(news){
      var that = this;
      if( news && news.img && news.img.u  ){
        news.img.u = utils.removeProtocol( utils.trim( news.img.u ) );
      }
      // 如果没有url，过滤掉
      // 但是，社交推荐没有标题，不过滤
      if(!news.url && news.templateid != 2){
        return false;
      }

      // 如果社交推荐没有数据
      if(news.templateid == 2){
        if(!news.sub || news.sub.length == 0){
          return false;
        }
      }

      // 公用配置
      if(that.iconGenerator && (typeof that.iconGenerator == 'function')){
        news.iconClass = that.iconGenerator(news);
      }

      // 如果是微博，则保留mid
      if(news.templateid == 7){
        if(!that._weiboMids){
          that._weiboMids = [];
          that._weiboUrls = {};
        }
        that._weiboMids.push(news.mid);
        that._weiboUrls[news.mid] = news.url;
      }

      // 评论
      if(news.commentid){
        var commentAry = news.commentid.split(':');
        if(commentAry.length >= 3){
          news.c_channel = commentAry[0];
          news.c_id = commentAry[1];
          news.c_style = commentAry[2];
        }
      }

      // 处理栏目属性
      if(news.columnid){
        var columnidAry = news.columnid.split(',');
        var columnInfos = win.FEED_CARD_INFO.columnInfos;
        if(columnInfos){
          for(var cIndex = 0, cLen = columnidAry.length; cIndex < cLen; cIndex ++){
            if(columnInfos[columnidAry[cIndex]] && columnInfos[columnidAry[cIndex]].columnid == 0){
              break;
            }
          }
          if(cIndex < cLen){
            news.columnInfos = [columnInfos[columnidAry[cIndex]]];
          }
        }
      }

      // 发布时间
      news.timeStr = utils.readableDate(news.ctime);

      // 模板id
      news.templateid = win.parseInt(news.templateid, 10);

      // lid
      news.lid = that.lid;

      // 关键字
      try{
        news.keywords = news.keywords ? news.keywords.split(',') : [];
        news.keywords = news.keywords.slice(0, that.tagsShowCount);
      }catch(e){
        news.keywords = [];
      }

      // 新闻简介处理: 
      // 如果指定参数，则使用这个参数; 如果没有指定，则使用intro
      if(that.summaryKey){
        // 如果指定的参数是summary，但是summary字段为空，则还是使用intro
        if(that.summaryKey === 'summary' && !news.summary){
          news.intro = news.intro;
        } else {
          news.intro = news[that.summaryKey];
        }
      }

      if(news.isAdNews){
        // 广告统计
        if(news.pvmonitor && news.pvmonitor.length){
          // news.url = news.pvmonitor + '&url=' + win.encodeURIComponent(news.url);
          if(news.namonitor && news.namonitor.weibourl){
            news.weibourl = news.namonitor.weibourl + '&url=' + win.encodeURIComponent(news.weibourl);
          }
          try{
            var div = doc.createElement('div');
            div.style.display = 'none';
            for(var newsIndex = 0; newsIndex < news.pvmonitor.length; newsIndex ++){
              var img = new Image();
              img.src = news.pvmonitor[newsIndex];
              div.appendChild(img);
            }
            doc.body.appendChild(div);
          }catch(e){

          }
        }
      }

      // 如果是社交推荐
      if(news.isCreNews && news.sub && news.sub.length){

        var weiboUids = [];

        if(news.sub && news.sub.length){
          for(var j = 0; j < news.sub.length; j ++){
            that._dealNewsItem(news.sub[j]);

            if(news.sub[j].uids && news.sub[j].uids.length){
              news.sub[j].weiboCount = news.sub[j].uids.length;
              news.sub[j].uids = news.sub[j].uids.slice(0, 2);
              for(var k = 0; k < news.sub[j].uids.length; k ++){
                news.sub[j].uids[k] = news.sub[j].uids[k].substring(0, news.sub[j].uids[k].indexOf('_'));
              }
              Array.prototype.push.apply(weiboUids, news.sub[j].uids);
            } else {
              news.sub[j].weiboCount = news.sub[j].top_num;
            }
          }
        }

        that.weiboUids = weiboUids;
      }

      // 如果是图集，且有图片
      if(news.categoryid == 2){
        if(news.images && news.images.length){
          news.imageCount = news.images.length;
          news.images = that._getCalculatedImagesWidth(news.images);
          for(var i=0;i<news.images.length;i++){
            if( news.img && news.img.u  ){
              news.images[i].u = utils.removeProtocol( utils.trim( news.images[i].u ) );
            }
          }
        }
      }


      if(news.templateid < 100 && news.img && news.img.u){
        if(SINA_IMG_REG.test(news.img.u)){
          news.img.u = "https://s.img.mix.sina.com.cn/auto/resize?img=" + news.img.u + "&size=" + that.cardImageParam.w + '_' + that.cardImageParam.h;
        }
      }

      //location.protocol + 
      if(news.templateid === 107){
        if(SINA_IMG_REG.test(news.img.u)){
          news.img.u = "https://s.img.mix.sina.com.cn/auto/resize?img=" + news.img.u + "&size=" +
            300 + '_' + 200;
        }
      }

      if(news.isDataNews){
        if(news.img && news.img.u){
          if(news.img.w < that.cardImageParam.w * 0.9 || news.img.h < that.cardImageParam.h * 0.9){
            news.img = [];
          }
        }
      }

      // 如果是我的标签，如果img无内容，但是images字段有内容，则用images字段的横图
      // TODO  应该用最接近3/2的图

      if(that.lid === -100){
        // 有些图片img字段居然是null！！！
        if(news.categoryid != 2){
          if(news.img && news.img.length === 0 && news.images && news.images.length){
            for(var imgIndex = 0, imgLen = news.images.length; imgIndex < imgLen; imgIndex ++){
              if(news.images[imgIndex].w >= news.images[imgIndex].h){
                break;
              }
            }
            if(imgIndex == news.images.length){
              news.img = news.images[0];
            } else {
              news.img = news.images[imgIndex];
            }
            if(SINA_IMG_REG.test(news.img.u)){
              news.img.u = 'https://s.img.mix.sina.com.cn/auto/crop?img=' + news.img.u + '&size=' + that.cardImageParam.w + '_' + that.cardImageParam.h;
            }
          }
        }
      }

      // 处理rcomment（最热评论）
      if(that.enableHotComment){
        if(news.rcomment){
          try{
            news.rcomment = utils.getJSON(news.rcomment);
            news.rcomment.nickname = news.rcomment.nickname || 'nickname';
          }catch(e){
            news.rcomment = '';
          }
        } else {
          news.rcomment = '';
        }
      } else {
        news.rcomment = '';
      }

      return true;
    },
    _uaTrack: function(key, value){
      if(win.SUDA && win.SUDA.uaTrack){
        win.SUDA.uaTrack(key, value);
      }
    },
    _getCalculatedImagesWidth: function(a){
      var that = this;

      for (var b = 660, c = that.albumImageParam.h, d = 5, e = [], f = 0, g = 0, h = a.length; h > g; g++) {
        var i = Math.floor(c / a[g].h * a[g].w);
        if (f += i + d, f > b){
          if(g == 0){
            SINA_IMG_REG.test(a[g].u) && (a[g].u = "https://s.img.mix.sina.com.cn/auto/resize?img=" + a[g].u + "&size=" + that.albumImageParam.w + "_" + that.albumImageParam.h), e.push(a[g]);
          }
          break;
        }

        SINA_IMG_REG.test(a[g].u) && (a[g].u = "https://s.img.mix.sina.com.cn/auto/resize?img=" + a[g].u + "&size=" + that.albumImageParam.w + "_" + that.albumImageParam.h), e.push(a[g]);
      }

      return e;
    },
    _sendUATrack: function(newsList){
      var that = this;

      for(var i = 0; i < newsList.length; i ++){
        var news = newsList[i];
        // 添加统计位
        if(news.isDataNews){
          news._uaTrackValue = 0;
        } else if(news.isTopNews){
          news._uaTrackValue = 1;
        } else if(news.isCreNews){
          news._uaTrackValue = 2;
          if(news.templateid == 2 && news.sub && news.sub.length){
            that._uaTrack('index_feed', 'creNewsShow_SNS:' + i + ':' + that.lid);
          } else {
            that._uaTrack('index_feed', 'creNewsShow:' + i + ':' + that.lid);
          }

        } else if(news.isAdNews){
          news._uaTrackValue = 3;
        }
      }
    },
    _renderNews: function(newsList, renderType){
      var that = this;
      newsList = that._dealNews(newsList);

      if(that.beforeRender && (typeof that.beforeRender == "function")) {
        that.beforeRender(newsList);
      }

      that.isThereNews = true;

      if(newsList.length){

        that._sendUATrack(newsList);

        var html = that.htmlGenerator({newsList: newsList, fromCount: that.fromCount});

        that.fromCount += newsList.length;

        if(that.step == 1){
          that.contentDiv.innerHTML = html;
        } else {
          var fragment = doc.createDocumentFragment();
          var div = doc.createElement('div');
          div.innerHTML = html;
          fragment.appendChild(div);
          that.contentDiv.appendChild(fragment);
        }

        if(that.step == that.stepSize || that.totalCount <= that.pageSize * that.stepSize * (that.page - 1) + that.pageSize * that.step){
          that.pageControlDiv.innerHTML = that._createPageControl(that.totalPage, that.page);
          that.pageControlDiv.style.display = 'block';
          if(that.totalCount <= that.page * that.pageSize * that.stepSize){
            that.isThereNews = false;
          }
        } else {
          if(that.clickLoadDiv){
            that.clickLoadDiv.style.display = 'block';
          }
        }
        if(win.bdShare && win.bdShare.fn && win.bdShare.fn.init){
          win.bdShare.fn.init();
        }

        // 如果是静态内容，直接出分页控件，也只显示第一页
        if(that.enableStatic){
          that.pageControlDiv.innerHTML = that._createPageControl(1, that.page);
          that.pageControlDiv.style.display = 'block';
          that.isThereNews = false;

          return;
        }
      } else {
        that.isThereNews = false;
        if(that.step == 1 && renderType != 1){
          // 如果是第一次加载，提示用户没有更多新闻
          var div = doc.createElement('div');
          div.className = 'feed-card-item-no-data';

          div.innerHTML = that.noDataText;
          that.contentDiv.appendChild(div);
        } else {
          // 如果是不是第一次加载，则出分页控件
          that.pageControlDiv.innerHTML = that._createPageControl(that.totalPage, that.page);
          that.pageControlDiv.style.display = 'block';
        }
      }

      // 如果是tag点击之后的加载，则不显示分页控件
      if(renderType === 1){
        that.isThereNews = false;
        that.pageControlDiv.style.display = 'none';
        var tagDiv = doc.createElement('div');
        tagDiv.className = 'feed-card-tag-more';
        tagDiv.innerHTML = '\u66F4\u591A\u5173\u4E8E<a href="http://search.sina.com.cn/?c=news&ie=utf-8&q=' + win.encodeURIComponent(that._keywords[0]) + '" target="_blank">' + that._keywords[0] + '</a>\u7684\u6587\u7AE0\uFF0C<a href="http://search.sina.com.cn/?c=news&ie=utf-8&q=' + win.encodeURIComponent(that._keywords[0]) + '" target="_blank">\u70B9\u51FB\u67E5\u770B &gt;</a>';
        that.contentDiv.appendChild(tagDiv);
      }
    },
    _createPageControl: function(a, b) {
            var c, d, e = [], f = b - 1;
            if (f >= 5 * Math.floor((a - 1) / 5)) {
                for (a > 5 && e.push('<span class="pagebox_pre pre5"><a href="javascript:void 0;">\u4E0A5\u9875</a></span>'), e.push(0 === f ? '<span class="pagebox_pre_nolink">\u4E0A\u4E00\u9875</span>' : '<span class="pagebox_pre"><a href="javascript:void 0;">\u4E0A\u4E00\u9875</a></span>'), c = 5 * Math.floor((a - 1) / 5); a > c; c++)
                    e.push(c === f ? '<span class="pagebox_num_nonce">' + (c + 1) + "</span>" : '<span class="pagebox_num" data-page="' + c + '"><a href="javascript:void 0;">' + (c + 1) + "</a></span>");
                e.push(f === a - 1 ? '<span class="pagebox_next_nolink">\u4E0B\u4E00\u9875</span>' : '<span class="pagebox_next"><a href="javascript:void 0;">\u4E0B\u4E00\u9875</a></span>')
            } else if (f >= 5) {
                for (e.push('<span class="pagebox_pre pre5"><a href="javascript:void 0;">\u4E0A5\u9875</a></span>'), e.push('<span class="pagebox_pre"><a href="javascript:void 0;">\u4E0A\u4E00\u9875</a></span>'), d = 5 * Math.floor(f / 5), c = 5 * Math.floor(f / 5); d + 5 > c; c++)
                    e.push(c === f ? '<span class="pagebox_num_nonce">' + (c + 1) + "</span>" : '<span class="pagebox_num" data-page="' + c + '"><a href="javascript:void 0;">' + (c + 1) + "</a></span>");
                e.push('<span class="pagebox_next"><a href="javascript:void 0;">\u4E0B\u4E00\u9875</a></span>'), e.push('<span class="pagebox_next next5"><a href="javascript:void 0;">\u4E0B5\u9875</a></span>')
            } else {
                for (e.push(0 === f ? '<span class="pagebox_pre_nolink">\u4E0A\u4E00\u9875</span>' : '<span class="pagebox_pre"><a href="javascript:void 0;">\u4E0A\u4E00\u9875</a></span>'), c = 0; 5 > c; c++)
                    e.push(c === f ? '<span class="pagebox_num_nonce">' + (c + 1) + "</span>" : '<span class="pagebox_num" data-page="' + c + '"><a href="javascript:void 0;">' + (c + 1) + "</a></span>");
                e.push('<span class="pagebox_next"><a href="javascript:void 0;">\u4E0B\u4E00\u9875</a></span>'), e.push('<span class="pagebox_next next5"><a href="javascript:void 0;">\u4E0B5\u9875</a></span>')
            }
            return e.join("")
    },
    _pageOnClick: function(target){
      var that = this;
      var s = target.parentNode;
      var shouldJump = false;

      if(dom.hasClass(s, 'pagebox_next')){
        if(dom.hasClass(s, 'next5')){
          this.page = (Math.floor((this.page - 1) / 5) + 1) * 5 + 1;
        } else {
          this.page += 1;
        }
        shouldJump = true;
      } else if(dom.hasClass(s, 'pagebox_pre')){
        if(dom.hasClass(s, 'pre5')){
          this.page = (Math.floor((this.page - 1) / 5) - 1) * 5 + 1;
        } else {
          this.page -= 1;
        }
        shouldJump = true;
      } else if(dom.hasClass(s, 'pagebox_num')){
        this.page = win.parseInt(s.getAttribute('data-page'), 10) + 1;
        shouldJump = true;
      }

      if(shouldJump){
        that.step = 1;
        that.ctime = null;
        that.lastTime = null;
        if(that.yPosition === 'auto'){
          win.scrollTo(0, utils.getPosition(that.contentDiv).y - 2 * that.tabHeight);
        } else {
          win.scrollTo(0, that.yPosition - taht.tabHeight);
        }
        that.isThereNews = true;
        that._loadNews(that.page, that.step);
      }
    },
    setLidAndLoad: function(lid){
      var that = this;
      that.page = 1;
      that.step = 1;
      that.uuid = (new Date()).getTime() + '_' + Math.random();
      that.lid = lid;
      that.lastTime = null;

      if(that.supportNotification){
        that.notificationGuarder.hideDOM();
      }

      if(lid == -101){
        that._iotype = 2;
      } else if(lid == -100) {
        that._iotype = 1;
      } else {
        that._iotype = 0;
      }

      if(lid <= -1000 && lid >= -10000){
        that._iotype = 3;
      }

      that.isThereNews = true;
      that.pageControlDiv.style.display = 'none';

      that.ctime = null;
      that.isLoading = false;
      if(that.clickLoadDiv){
        that.clickLoadDiv.style.display = 'none';
      }
      that._loadNews(1,1);
    },
    setKeywordsAndLoad: function(keywords, renderType){
      var that = this;

      if(that.supportNotification){
        that.notificationGuarder.hideDOM();
      }

      that.page = 1;
      that.step = 1;
      that.lid = -100;
      that.isThereNews = true;
      // 用来确认是否是本次jsonp请求
      that.uuid = (new Date()).getTime() + '_' + Math.random();
      that.lastTime = null;
      that._keywords = keywords;
      that.pageControlDiv.style.display = 'none';
      that._iotype = 1;
      that.isLoading = false;
      if(that.clickLoadDiv){
        that.clickLoadDiv.style.display = 'none';
      }
      // 去掉去重
      that.ctime = null;
      if(keywords && keywords.length){
        that._loadNews(1,1, renderType);
      } else {

        var div = doc.createElement('div');
        div.className = 'feed-card-item-no-data';
        div.innerHTML = noLabelText;
        that.contentDiv.innerHTML = '';
        that.contentDiv.appendChild(div);
      }
    }
  };

  return FeedCard;
})();

var ColumnEditor = (function(){
  var ColumnEditorClass = function(obj){
    var that = this;

    utils.fillOptions(that, obj);

    that.container = dom.$(that.containerID);

    that.htmlGenerator = doT.template(columnEditorTemplate);

    that.createHTML();
  };

  ColumnEditorClass.prototype = {
    createHTML: function(){
      var that = this;

      var maxKeywordLengthEn = 7;
      if(that.maxKeywordLength){
        maxKeywordLengthEn = Math.floor(that.maxKeywordLength / 2);
      }

      that.container.innerHTML = that.htmlGenerator({
        supportKeywords: that.supportKeywords,
        maxKeywordsCount: that.maxKeywordsCount,
        maxKeywordLengthEn: maxKeywordLengthEn,
        hotKeywords: that.hotKeywords
      });

      that.feedCardTabEditor = dom.$('feedCardTabEditor');

      that.feedCardEditCols = dom.$('feedCardEditCols');
      that.feedCardEditNext = dom.$('feedCardEditNext');
      that.feedCardEditPrev = dom.$('feedCardEditPrev');
      that.feedCardEditDone = dom.$('feedCardEditDone');
      that.feedCardEditTip = dom.$('feedCardEditTip');

      that.feedCardEditStep1 = dom.$('feedCardEditStep1');
      that.feedCardEditStep2 = dom.$('feedCardEditStep2');
      that.feedCardEditSelectW = dom.$('feedCardEditSelectW');

      that.feedCardEditHotLabels = dom.$('feedCardEditHotLabels');

      that.initDrag();

      dom.addEvent(that.feedCardEditDone, 'click', function(e){
        var target = dom.getTarget(e);
        that.onEditDone();
        dom.preventDefault(e);
      });
      dom.addEvent(that.feedCardEditNext, 'click', function(e){
        var target = dom.getTarget(e);
        that.goToStep2();
        dom.preventDefault(e);
      });
      dom.addEvent(that.feedCardEditPrev, 'click', function(e){
        var target = dom.getTarget(e);
        that.goToStep1();
        dom.preventDefault(e);
      });

      dom.addEvent(that.feedCardEditCols, 'click', function(e){
        var target = dom.getTarget(e);

        if(target.tagName.toUpperCase() === 'A'){
          var lid = win.parseInt(target.getAttribute('data-lid'), 10);
          if(dom.hasClass(target, 'selected')){
            dom.removeClass(target, 'selected');
            that.tabInfos['tab_' + lid].selected = false;
            var index = utils.indexOf(that.selectedLids, lid);
            that.selectedLids.splice(index, 1);
            if(lid === -100){
              if(that.supportKeywords){
                that.feedCardTabEditLabelC.style.display = 'none';
              }
            }
          } else {
            dom.addClass(target, 'selected');
            that.tabInfos['tab_' + lid].selected = true;
            that.selectedLids.push(lid);
            if(lid === -100){
              if(that.supportKeywords){
                that.feedCardTabEditLabelC.style.display = 'block';
              }
            }
          }
        }

        dom.preventDefault(e);
      });

      if(that.supportKeywords){
        that.feedCardTabEditLabelC = dom.$('feedCardTabEditLabelC');
        that.feedCardEditSelectLabels = dom.$('feedCardEditSelectLabels');
        that.feedCardAddLabelInput = dom.$('feedCardAddLabelInput');
        that.feedCardAddLabelButton = dom.$('feedCardAddLabelButton');
        that.feedCardEditLabelTip = dom.$('feedCardEditLabelTip');

        that.feedCardEditLabelTipHTML = that.feedCardEditLabelTip.innerHTML;

        dom.addEvent(dom.$('feedCardEditHotLabels'), 'click', function(e){
          var target = dom.getTarget(e);

          if(target.tagName.toUpperCase() === 'A'){
            if(that.addKeyword(target.innerHTML)){
              dom.addClass(target, 'selected');
            }
          }

          dom.preventDefault(e);
        });

        dom.addEvent(that.feedCardEditSelectLabels, 'click', function(e){
          var target = dom.getTarget(e);

          if(target.tagName.toUpperCase() === 'A'){
            that.removeKeyword(target.innerHTML);
          }

          dom.preventDefault(e);
        });

        dom.addEvent(that.feedCardAddLabelButton, 'click', function(e){
          var target = dom.getTarget(e);

          if(that.addKeyword(that.feedCardAddLabelInput.value)){
            that.feedCardAddLabelInput.value = '';
          }

          dom.preventDefault(e);
        });

        dom.addEvent(that.feedCardAddLabelInput, 'keyup', function(e){
          var e = dom.getEvent(e);
          switch(e.keyCode){
            case 13:
              if(that.addKeyword(that.feedCardAddLabelInput.value)){
                that.feedCardAddLabelInput.value = '';
              }
            break;
            default:
              that.feedCardEditLabelTip.style.display = 'none';
            break;
          }
        });
      }

    },

    initDrag: function(){
      var that = this;

      var isMouseDown = false, isDragging = false;
      var px, py, pl, pt;
      var movingTarget;
      var pos;

      dom.addEvent(that.feedCardEditSelectW, utils.downEvent, function(e){
        var target = dom.getTarget(e);

        if(target.tagName.toUpperCase() === 'A'){
          movingTarget = target;
          isMouseDown = true;

          pos = utils.getMousePos(dom.getEvent(e));
          movingTarget.style.position = 'relative';
          movingTarget.style.zIndex = '1000';
          px = pos.x;
          py = pos.y;
          pl = 0;
          pt = 0;
        } else {
          movingTarget = null;
          isMouseDown = false;
        }

        dom.preventDefault(e);
        dom.stopPropagation(e);
      });

      dom.addEvent(that.feedCardEditSelectW, utils.moveEvent, function(e){
        if(isMouseDown && movingTarget){
          isDragging = true;
          pos = utils.getMousePos(dom.getEvent(e));
          movingTarget.style.left = pos.x - px + 'px';
          movingTarget.style.top = pos.y - py + 'px';
        }

        win.getSelection ? win.getSelection().removeAllRanges() : doc.selection.empty();

        dom.preventDefault(e);
        dom.stopPropagation(e);
      });
      dom.addEvent(doc, utils.upEvent, function(e){
        if(!isDragging || !movingTarget) return;
        movingTarget.style.position = '';
        movingTarget.style.left = '';
        movingTarget.style.top = '';
        movingTarget.style.zIndex = '';

        isDragging = false;
        movingTarget = null;
        isMouseDown = false;
      });
      dom.addEvent(that.feedCardEditSelectW, utils.upEvent, function(e){

        if(!isDragging || !movingTarget) return;

        var cx = pos.x - px;
        var cy = pos.y - py;
        var deltaX = Math.floor(Math.abs(cx) / 122) * (cx > 0 ? 1 : (cx == 0 ? 0 : -1));
        var deltaY = Math.floor(Math.abs(cy) / 42) * (cy > 0 ? 1 : (cy == 0 ? 0 : -1));
        var index = win.parseInt(movingTarget.getAttribute('data-index'), 10);
        var cIndex = index + deltaX + deltaY * 5;

        // cIndex = cIndex <
        if(cIndex < 0) {
          cIndex = 0;
        }
        if(cIndex >= that.selectedLids.length){
          cIndex = that.selectedLids.length - 1;
        }

        that.selectedLids.splice(index, 1);
        that.selectedLids.splice(cIndex, 0, win.parseInt(movingTarget.getAttribute('data-lid'), 10));

        var html = [];
        for(var i = 0; i < that.selectedLids.length; i ++){
          var tabInfo = that.tabInfos['tab_' + that.selectedLids[i]];
          html.push('<a href="javascript:;" data-lid="' + tabInfo.lid + '" data-index="' + i + '">' + tabInfo.txt + '</a>');
        }

        that.feedCardEditSelectW.innerHTML = html.join('');

        movingTarget.style.position = '';
        movingTarget.style.left = '';
        movingTarget.style.top = '';
        movingTarget.style.zIndex = '';

        isDragging = false;
        movingTarget = null;
        isMouseDown = false;

        dom.preventDefault(e);
        dom.stopPropagation(e);
      });
    },

    addKeyword: function(keyword){
      var that = this;
      that.feedCardEditLabelTip.style.display = 'none';
      keyword = utils.safeStr(utils.trim(keyword));
      var addResult = false;
      if(keyword && utils.cn_size(keyword, true) <= that.maxKeywordLength){
        if(that.keywords.length >= that.maxKeywordsCount){
          that.feedCardEditLabelTip.innerHTML = that.feedCardEditLabelTipHTML;
          that.feedCardEditLabelTip.style.display = 'block';
        } else {
          if(utils.indexOf(that.keywords, keyword) < 0){
            that.keywords.push(keyword);
            that.feedCardEditSelectLabels.innerHTML += '<a href="javascript:;">' + keyword + '</a>';
            addResult = true;
          } else {
            that.feedCardEditLabelTip.innerHTML = '\u8BE5\u6807\u7B7E\u5DF2\u6DFB\u52A0!<i></i>';
            that.feedCardEditLabelTip.style.display = 'block';
          }
        }
      } else {
        if(keyword){
          that.feedCardEditLabelTip.innerHTML = '\u6DFB\u52A0\u7684\u6807\u7B7E\u8FC7\u957F!<i></i>';
          that.feedCardEditLabelTip.style.display = 'block';
        } else {
          that.feedCardEditLabelTip.innerHTML = '\u8BF7\u8F93\u5165\u6807\u7B7E!<i></i>';
          that.feedCardEditLabelTip.style.display = 'block';
        }
      }

      var myLabel = dom.$('feedCardEditCols_-100');
      if(myLabel){
        if(that.keywords.length > 0){
          dom.addClass(myLabel, 'selected');

          that.tabInfos['tab_-100'].selected = true;
          var index = utils.indexOf(that.selectedLids, -100);
          if(index < 0){
            that.selectedLids.push(-100);
          }
        }
      }

      that.updateHotKeywords();

      return addResult;
    },

    removeKeyword: function(keyword){
      var that = this;
      // var index = that.keywords.indexOf(keyword);
      keyword = utils.safeStr(utils.trim(keyword));
      var index = utils.indexOf(that.keywords, keyword);
      if(index >= 0){
        that.keywords.splice(index, 1);
      }

      if(that.keywords.length == 0){
        var myLabel = dom.$('feedCardEditCols_-100');
        if(myLabel){
          dom.removeClass(myLabel, 'selected');

          that.tabInfos['tab_-100'].selected = false;
          var index = utils.indexOf(that.selectedLids, -100);

          if(index >= 0){
            that.selectedLids.splice(index, 1);
          }

        }
      }

      that.updateHotKeywords();

      that.createKeywordsHTML();
    },

    dealTabInfos: function(){
      var that = this;
      for(var i = 0, len = that.allTabs.length; i < len; i ++){
        var tabInfo = that.tabInfos['tab_' + that.allTabs[i]];
        if(tabInfo){
          tabInfo.selected = false;
          // if(that.tabs.indexOf(tabInfo.lid) >= 0){
          if(utils.indexOf(that.tabs, tabInfo.lid) >= 0){
            tabInfo.selected = true;
          }
        }
      }
    },
    createTabHTML: function(){
      var that = this;

      var html = [];

      for(var i = 0, len = that.allTabs.length; i < len; i ++){
        var tabInfo = that.tabInfos['tab_' + that.allTabs[i]];
        if(tabInfo){
          if(tabInfo.selected){
            html.push('<a href="javascript:;" id="feedCardEditCols_' + tabInfo.lid + '" data-lid="' + tabInfo.lid + '" class="selected">' + tabInfo.txt + '</a>');
          } else {
            html.push('<a href="javascript:;" id="feedCardEditCols_' + tabInfo.lid + '" data-lid="' + tabInfo.lid + '">' + tabInfo.txt + '</a>');
          }
        }
      }

      that.feedCardEditCols.innerHTML = html.join('');
    },
    createKeywordsHTML: function(){
      var that = this;

      if(that.supportKeywords){

        var html = [];

        for(var i = 0; i < that.keywords.length; i ++){
          html.push('<a href="javascript:;">' + that.keywords[i] + '</a>');
        }

        that.feedCardEditSelectLabels.innerHTML = html.join('');

        // var myLabel = dom.$('feedCardEditCols_-100');
        // if(myLabel){
        //   if(that.keywords.length > 0){
        //     dom.addClass(myLabel, 'selected');

        //     that.tabInfos['tab_-100'].selected = true;
        //     var index = utils.indexOf(that.selectedLids, -100);
        //     if(index < 0){
        //       that.selectedLids.push(-100);
        //     }
        //   } else {
        //     dom.removeClass(myLabel, 'selected');

        //     that.tabInfos['tab_-100'].selected = false;
        //     var index = utils.indexOf(that.selectedLids, -100);
        //     if(index >= 0){
        //       that.selectedLids.splice(index, 1);
        //     }
        //   }
        // }
      }
    },
    adjustEditorHeight: function(){
      var that = this;
      var height = that.feedCardTabEditor.offsetHeight;
      var vH = utils.viewData().viewHeight;
      var top = (win.FEED_CARD_INFO.fixedTop || 0) + (win.FEED_CARD_INFO.tabHeight || 0);
      if(height > vH - top){
        that.feedCardTabEditor.style.height = vH - top + 'px';
        that.feedCardTabEditor.style.overflowY = 'scroll';
      } else {
        that.feedCardTabEditor.style.height = '';
        that.feedCardTabEditor.style.overflowY = '';
      }
    },
    updateHotKeywords: function(){
      var that = this;
      if(that.supportKeywords){
        var hotLinks = that.feedCardEditHotLabels.getElementsByTagName('a');

        for(var i = 0; i < hotLinks.length; i ++){

          if(utils.indexOf(that.keywords, hotLinks[i].innerHTML) >= 0){
            dom.addClass(hotLinks[i], 'selected');
          } else {
            dom.removeClass(hotLinks[i], 'selected');
          }
        }
      }
    },
    goToStep1: function(){
      var that = this;
      that.feedCardEditDone.style.display = 'none';
      that.feedCardEditPrev.style.display = 'none';
      that.feedCardEditNext.style.display = '';
      that.feedCardEditStep1.style.display = 'block';
      that.feedCardEditStep2.style.display = 'none';
      that.feedCardEditTip.innerHTML = that.editTips[0];

      if(that.supportKeywords){

        that.updateHotKeywords();

        that.feedCardEditLabelTip.style.display = 'none';

        var index = utils.indexOf(that.selectedLids, -100);

        if(index >= 0){
          that.feedCardTabEditLabelC.style.display = 'block';
        } else {
          that.feedCardTabEditLabelC.style.display = 'none';
        }
      }

      win.setTimeout(function(){
        that.adjustEditorHeight();
      }, 100);
    },
    goToStep2: function(){
      var that = this;
      that.feedCardEditDone.style.display = '';
      that.feedCardEditPrev.style.display = '';
      that.feedCardEditNext.style.display = 'none';

      that.feedCardEditStep1.style.display = 'none';

      that.feedCardEditTip.innerHTML = that.editTips[1];

      var html = [];

      for(var i = 0, len = that.selectedLids.length; i < len; i ++){
        var tabInfo = that.tabInfos['tab_' + that.selectedLids[i]];

        if(tabInfo){
          html.push('<a href="javascript:;" data-lid="' + tabInfo.lid + '" data-index="' + i + '">' + tabInfo.txt + '</a>');
        }
      }

      var uaTrackValue = 'key=index_feed&value=setting_btn_save:';

      uaTrackValue += that.selectedLids.join(':');

      if(that.tabInfos['tab_-100'] && that.tabInfos['tab_-100'].selected){
        uaTrackValue += '_' + win.encodeURIComponent(that.keywords.join(':'));
      }

      that.feedCardEditDone.setAttribute('suda-uatrack', uaTrackValue);

      that.feedCardEditSelectW.innerHTML = html.join('');

      that.feedCardEditStep2.style.display = 'block';

      win.setTimeout(function(){
        that.adjustEditorHeight();
      }, 100);
    },
    onEditDone: function(){
      var that = this;

      that.tabs = that.selectedLids;
      that.hide();
      if(that.onEditDoneCallback){
        that.onEditDoneCallback(that.tabs, that.keywords);
      }
    },
    show: function(tabs, keywords){
      var that = this;

      // 由于外部有可能会修改这个统计属性，所以这里给改回来
      that.container.setAttribute('data-sudaclick', 'posi-setting');

      that.tabs = tabs;
      that.keywords = keywords;
      that.dealTabInfos();
      that.createTabHTML();

      that.selectedLids = [];
      Array.prototype.push.apply(that.selectedLids, tabs);

      that.createKeywordsHTML();

      that.container.style.display = 'block';

      that.goToStep1();

      that.adjustEditorHeightInterval = win.setInterval(function(){
        that.adjustEditorHeight();
      }, 300);
    },

    hide: function(){
      var that = this;
      win.clearInterval(that.adjustEditorHeightInterval);
      that.container.style.display = 'none';
    }
  };

  return ColumnEditorClass;
})();

var coverLayer = {
  divObj: null,
  _coverTime: null,
  _coverRe: function() {
    if (!this.wid && !this.hei) {
      if (document.body.offsetHeight < document.documentElement.clientHeight) {
        this.divObj.style.width = document.body.clientWidth + "px";
        this.divObj.style.height = document.documentElement.clientHeight + "px";
      } else {
        this.divObj.style.width = document.body.clientWidth + "px";
        this.divObj.style.height = document.body.clientHeight + "px";
      }
    }
  },
  isIE: navigator.appVersion.indexOf("MSIE") != -1 ? true : false,
  on: function(w, h, x, y) {
    this.wid = w;
    this.hei = h;
    this.x = x;
    this.y = y;
    if (this.divObj == null) {
      this.divObj = document.createElement("div");
      this.divObj.className = 'cover';
      this.divObj.style.zIndex = 10000;
      this.divObj.style.left = '0px';
      this.divObj.style.top = '0px';
      this.divObj.style.overflow = 'hidden';
      this.divObj.style.position = "absolute";
      this.divObj.style.backgroundColor = "#000";
      if (this.isIE) {
        var tempFrame = document.createElement("iframe");
        tempFrame.style.filter = "Alpha(Opacity=0)";
        tempFrame.frameBorder = 0;
        tempFrame.scrolling = "no";
        tempFrame.style.width = "100%";
        tempFrame.style.height = "100%";
        this.divObj.appendChild(tempFrame);
        this.divObj.style.filter = "Alpha(Opacity=70)";
        this.divObj.style.opacity = 0.7;
      } else {
        this.divObj.style.opacity = 0.7;
      };
      document.body.appendChild(this.divObj);
    };
    this.divObj.style.width = this.divObj.style.height = '100%';
    this.divObj.style.left = this.divObj.style.top = '0px';
    if (w) this.divObj.style.width = w + 'px';
    if (h) this.divObj.style.height = h + 'px';
    if (x) this.divObj.style.left = x + 'px';
    if (y) this.divObj.style.top = y + 'px';
    if (!w && !h) {
      if (document.body.offsetHeight < document.documentElement.clientHeight) {
        this.divObj.style.width = document.body.clientWidth + "px";
        this.divObj.style.height = document.documentElement.clientHeight + "px";
      } else {
        this.divObj.style.width = document.body.clientWidth + "px";
        this.divObj.style.height = document.body.clientHeight + "px";
      };
    }
    this.divObj.style.display = "block";
    clearInterval(this._coverTime);
    this._coverTime = setInterval(function(){
      coverLayer._coverRe();
    }, 50);
  },
  off: function() {
    if (this.divObj) {
      this.divObj.style.display = "none"
    };
    clearInterval(this._coverTime);
  }
};

var Toast = (function(){

  var toastTemplate = ['<div class="feed-card-toast-c feed-card-clearfix">'];
  toastTemplate.push('<div class="feed-card-toast-icon<%= it.state %>"></div>');
  toastTemplate.push('<div class="feed-card-toast-tip"><%= it.tip %></div>');
  toastTemplate.push('</div>');

  toastTemplate.push('<div class="feed-card-toast-action">');
  toastTemplate.push('<a href="javascript:;" id="feedCardToastCloseBtn1"><%= it.btnTxt %></a>');
  toastTemplate.push('</div>');
  toastTemplate.push('<div class="feed-card-toast-close">');
  toastTemplate.push('<a href="javascript:;" id="feedCardToastCloseBtn2">close</a>');
  toastTemplate.push('</div>');

  var ToastClass = function(obj){
    var that = this;

    that.showingDuration = obj.showingDuration;

    that.htmlGenerator = doT.template(toastTemplate.join(''));
  };

  ToastClass.prototype = {
    show: function(obj){
      var that = this;

      that.onClose = obj.onClose;

      coverLayer.on();

      var contentDiv = document.createElement('div');
      contentDiv.className = 'feed-card-toast';
      that.contentDiv = contentDiv;

      var vD = utils.viewData();
      contentDiv.style.top = vD.scrollTop + vD.viewHeight / 2 - 100 + 'px';

      that.contentDiv.innerHTML = that.htmlGenerator(obj);

      doc.body.appendChild(that.contentDiv);

      that._bindEvent();
    },
    _bindEvent: function(){
      var that = this;
      that.timeout = win.setTimeout(function(){
        that._hide(0);
      }, that.showingDuration);
      dom.addEvent(dom.$('feedCardToastCloseBtn2'), 'click', function(e){
        that._hide(2);
        dom.preventDefault(e);
      });
      dom.addEvent(dom.$('feedCardToastCloseBtn1'), 'click', function(e){
        that._hide(1);
        dom.preventDefault(e);
      });
    },
    _hide: function(from){
      var that = this;
      coverLayer.off();
      doc.body.removeChild(that.contentDiv);
      that.contentDiv = null;
      if(that.timeout){
        win.clearTimeout(that.timeout);
        that.timeout = null;
      }
      if(that.onClose){
        that.onClose(from);
      }
    }
  };

  return ToastClass;

})();

var LabelEditor = function(tab){

  this.tab = tab;

  this.feedCardTagTip = dom.$('feedCardTagTip');
  this.feedCardTagTipLabel = dom.$('feedCardTagTipLabel');

  this.feedCardSelectTag = dom.$('feedCardSelectTag');
  this.feedCardSelectTagLabels = dom.$('feedCardSelectTagLabels');
  this.feedCardSelectTagTip = dom.$('feedCardSelectTagTip');
  this.feedCardSelectTagDone = dom.$('feedCardSelectTagDone');

  this.feedCardSelectWillTag = dom.$('feedCardSelectWillTag');

  this._bindEvent();
};
LabelEditor.prototype = {
  _bindEvent: function(){
    var that = this;
    dom.addEvent(dom.$('feedCardTagTipAdd'), 'click', function(e){

      that._add();

      dom.preventDefault(e);
    });

    dom.addEvent(dom.$('feedCardTagTipClose'), 'click', function(e){

      that._hideTip();

      dom.preventDefault(e);
    });

    dom.addEvent(that.feedCardSelectTagLabels, 'click', function(e){

      var target = dom.getTarget(e);

      if(target.tagName.toUpperCase() == 'A'){

        if(target.innerHTML != that.toAddLabel){
          target.parentNode.removeChild(target);
        }

        // dom.removeClass(that.feedCardSelectTagDone, 'disable');
        that.feedCardSelectTagTip.innerHTML = '<span>\u6E29\u99A8\u63D0\u793A:</span>\u60A8\u8BA2\u9605\u7684\u6807\u7B7E\u572815\u4E2A\u4EE5\u5185\uFF0C\u8BF7\u70B9\u51FB\u201C\u5B8C\u6210\u201D\u4FDD\u5B58\u3002';
      }

      dom.preventDefault(e);
    });

    dom.addEvent(dom.$('feedCardSelectTagClose'), 'click', function(e){
      that.toAddLabel = null;
      that.feedCardSelectTag.style.display = 'none';

      dom.preventDefault(e);
    });

    dom.addEvent(that.feedCardSelectTagDone, 'click', function(e){
      var target = dom.getTarget(e);

      if(that.feedCardSelectTagLabels.childNodes.length < 15){
        var labels = [];
        labels.push(that.toAddLabel);
        for(var i = 0; i < that.feedCardSelectTagLabels.childNodes.length; i ++){
          labels.push(that.feedCardSelectTagLabels.childNodes[i].innerHTML);
        }
        that.tab.showLabel(that.toAddLabel, labels, true, true);
        that.toAddLabel = null;

        that.feedCardSelectTag.style.display = 'none';
      } else {
        dom.addClass(that.feedCardSelectTagTip, 'error');
        win.setTimeout(function(){
          dom.removeClass(that.feedCardSelectTagTip, 'error');
        }, 2000);
      }

      dom.preventDefault(e);
    });
  },
  _add: function(){
    if(this.tab.isLogin){
      if(this.tab.isLogin()){
        if(this.tab.keywords.length >= 15){
          this._hideTip();
          this.feedCardSelectWillTag.innerHTML = this.toAddLabel;
          this._selectLabels();
        } else {
          this._hideTip();
          this.tab.keywords.splice(0, 0, this.toAddLabel);
          this.tab.showLabel(this.toAddLabel, this.tab.keywords, true, true);
          this.toAddLabel = null;
        }
      } else {
        this.tab.requireLogin('<span>\u6E29\u99A8\u63D0\u793A: </span>\u8BF7\u767B\u5F55\u4EE5\u4FDD\u5B58\u8BA2\u9605\u5185\u5BB9');
      }
    }
  },
  onLoginSuccess: function(){
    if(this.toAddLabel){
      if(this.tab.keywords.length >=15){
        this._hideTip();
        this.feedCardSelectWillTag.innerHTML = this.toAddLabel;
        this._selectLabels();
      } else {
        this._hideTip();
        this.tab.keywords.splice(0, 0, this.toAddLabel);
        this.tab.showLabel(this.toAddLabel, this.tab.keywords, true, true);
      }
    }
  },
  onLoginCancel: function(){
  },
  _selectLabels: function(){
    // this._isSelected = false;
    this.feedCardSelectTagTip.innerHTML = '<span>\u6E29\u99A8\u63D0\u793A:</span>\u4F60\u8BA2\u9605\u7684\u6807\u7B7E\u591A\u4E8E15\u4E2A\uFF0C\u8BF7\u5220\u9664\u90E8\u5206\u6807\u7B7E\u5B8C\u6210\u6DFB\u52A0\u3002';

    var html = [];
    for(var i = 0; i < this.tab.keywords.length; i ++){
      html.push('<a href="javascript:;">' + this.tab.keywords[i] + '</a>');
    }
    this.feedCardSelectTagLabels.innerHTML = html.join('');

    this.feedCardSelectTag.style.display = 'block';
  },
  _hideTip: function(){
    this.feedCardTagTip.style.display = 'none';
  },
  _showTip: function(label){
    this.feedCardTagTipLabel.innerHTML = label;
    this.feedCardTagTip.style.display = 'block';
  },
  addLabel: function(label){
    this.toAddLabel = label;

    this._showTip(label);
  }
};
/*
 * 当内容过多的时候，将多余标签放在"更多中"
 */

var Tab = (function(){

  var MAX_WIDTH = 660 - 2;
  if (win.FEED_CARD_INFO.containerWidth) {
    MAX_WIDTH = win.FEED_CARD_INFO.containerWidth - 2;
  }
  var TAB_PADDING = 10;
  var SETTINGS_WIDTH = 115;
  var NAV_WIDTH = 20;
  var MORE_WIDTH = 73;

  var TabClass = function(obj){
    var that = this;

    utils.fillOptionsWithDefault(that, obj, {
      fixedTop: 0
    });

    that.container = dom.$(that.containerID);

    that.htmlGenerator = doT.template(tabTemplate);

    that.centerWidth = that.supportTabEdit ? MAX_WIDTH - that.firstTab.css_width - SETTINGS_WIDTH : MAX_WIDTH - that.firstTab.css_width;

    // 减去第一个tab的padding
    that.centerWidth -= TAB_PADDING * 2;

    that.createHTML();

    that.fillHTML();

    that.labelEditor = new LabelEditor(that);

    that.feedCardLabels = dom.$('feedCardLabels');
    that.feedCardLabelsC = dom.$('feedCardLabelsC');
    that.feedCardLabelsToggle = dom.$('feedCardLabelsToggle');

    that.bindEvent();

    obj.containerID = 'feedCardContent';

    that.loader = new FeedCard(obj);

    that.editor = new ColumnEditor({
      containerID: 'feedCardTabEditor',
      tabs: that.tabs,
      allTabs: that.allTabs,
      tabInfos: that.tabInfos,
      supportKeywords: that.supportKeywords,
      maxKeywordsCount: that.maxKeywordsCount,
      maxKeywordLength: that.maxKeywordLength || 10,
      hotKeywords: that.hotKeywords,
      editTips: that.editTips,
      onEditDoneCallback: function(lids, keywords){
        that.tabs = lids;
        that.keywords = keywords;
        that.setTabs(that.tabs);
        that.setKeywords(that.keywords);
        that.cancelSettings();

        that.showTab(that.feedCardTabFirstTab);

        if(utils.isFunction(that.isLogin)){
          if(!that.isLogin()){
            if(utils.isFunction(that.requireLogin)){
              that.shouldUploadData = true;
              that.requireLogin('<span>\u6E29\u99A8\u63D0\u793A: </span>\u60A8\u5DF2\u7ECF\u5B8C\u6210\u5174\u8DA3\u8BBE\u7F6E\uFF0C\u5EFA\u8BAE\u767B\u5F55\u540E\u4FDD\u5B58\u3002');
            }
          } else {
            // 设置结束之后，如果已经登录
            if(that.uid){
              that.uploadData();
            }
          }
        }
      }
    });

    that.loader.setLidAndLoad(that.firstTab.lid);
  };

  TabClass.prototype = {
    _uaTrack: function(key, value){
      if(win.SUDA && win.SUDA.uaTrack){
        win.SUDA.uaTrack(key, value);
      }
    },
    onLogout: function(){
      this.fillHTML();
    },
    onLoginCancel: function(){
      var that = this;
      // 只有取消用户定制完成的登录，才更新LS
      if(that.shouldUploadData){
        that.shouldUploadData = false;
        userData.setDefaultData(that.tabs, that.keywords);
      }
      that.labelEditor.onLoginCancel();
    },
    onLoginSuccess: function(uid, homeid){
      var that = this;
      that.uid = uid;

      if(that.supportTabEdit){
        // 如果是定制完成的登录， 则更新DB
        if(that.shouldUploadData){
          that.shouldUploadData = false;
          that.uploadData();
        } else {
          // 如果是其他地方的登录， 则从db获取数据，然后更新UI
          userData.getUserDataFromNet(homeid, function(data){
            // 如果获取成功
            if(data){
              if(data.lids){
                that._uaTrack('index_feed', 'issetting');
                that.tabs = data.lids;
                that.setTabs(data.lids);
              } else {
                that._uaTrack('index_feed', 'nosetting');
                that.setTabs(that.tabs);
              }
              if(data.keywords){
                that.keywords = that.keywords;
                that.setKeywords(data.keywords);
              } else {
                that.setKeywords(that.keywords);
              }
            } else {
              that._uaTrack('index_feed', 'nosetting');
            // 如果获取失败
              that.setTabs(that.tabs);
              that.setKeywords(that.keywords);
            }

            that.labelEditor.onLoginSuccess();
          });
        }
      }
    },
    uploadData: function(hideToast){
      var that = this;
      if(hideToast){
        win.SINAFEEDCARD_COLUMNS_EDIT_DONE.hideToast = true;
      } else {
        win.SINAFEEDCARD_COLUMNS_EDIT_DONE.hideToast = false;
      }
      dom.$('columnEditorFormValueInput').value = userData.generateStr(that.tabs, that.keywords, that.selectedTagName);
      dom.$('columnEditorForm').submit();
    },
    createHTML: function(){
      var that = this;

      if(utils.isTouch){
        dom.addClass(that.container, 'feed-card-ipad');
      }

      that.container.innerHTML = that.htmlGenerator(that.firstTab);

      that.feedCardTab = dom.$('feedCardTab');

      that.feedCardTabFirstTab = dom.$('feedCardTabFirstTab');

      that.feedCardConfigurableTabs = dom.$('feedCardConfigurableTabs');

      that.feedCardSettingsTrigger = dom.$('feedCardSettingsTrigger');

      that.feedCardMoreTabsTrigger = dom.$('feedCardMoreTabsTrigger');
      that.feedCardMoreTabs = dom.$('feedCardMoreTabs');

      that.feedCardTabFirstTab = dom.$('feedCardTabFirstTab');
      that.currentTab = that.feedCardTabFirstTab;

      that.feedCardConfigurableTabs.parentNode.style.width = that.centerWidth + 'px';
      that.feedCardMoreTabs.style.right = (that.supportTabEdit ? SETTINGS_WIDTH : 0) + 'px';

      that.feedCardTabToast = dom.$('feedCardTabToast');
      that.feedCardTabToastC = dom.$('feedCardTabToastC');
    },
    fillHTML: function(){
      var that = this;

      var defaultData = userData.getDefaultData();

      // 未登录
      // 如果有默认数据, 则使用默认数据
      if(defaultData && that.supportTabEdit){
        if(defaultData.lids){
          that._uaTrack('index_feed', 'issetting');
          that.setTabs(defaultData.lids);
        } else {
          that._uaTrack('index_feed', 'nosetting');
          that.setTabs(that.tabs);
        }
        if(defaultData.keywords){
          that.setKeywords(defaultData.keywords);
        } else {
          that.setKeywords(that.keywords);
        }
      } else {
        that._uaTrack('index_feed', 'nosetting');
        // 如果没有默认数据，则使用页面配置数据
        var tabs = win.FEED_CARD_INFO.tabs || [];
        var keywords = win.FEED_CARD_INFO.keywords || [];
        that.setTabs(tabs);
        that.setKeywords(keywords);
      }
    },
    bindEvent: function(){
      var that = this;
      if(that.supportTabEdit){
        dom.addEvent(that.feedCardSettingsTrigger, 'click', function(e){
          if(dom.hasClass(that.feedCardSettingsTrigger, "feed-card-tab-tabi-selected")){
            that.cancelSettings();
          } else {
            that.openSettings();
          }
        });

      } else {
        that.feedCardSettingsTrigger.parentNode.style.display = 'none';
      }

      dom.addEvent(doc, 'click', function(e){
        if(dom.hasClass(that.feedCardMoreTabsTrigger, 'feed-card-tab-more-trigger-open')){
          dom.removeClass(that.feedCardMoreTabsTrigger, 'feed-card-tab-more-trigger-open');
          that.feedCardMoreTabs.style.display = 'none';
        }
      });

      dom.addEvent(that.feedCardMoreTabsTrigger, 'click', function(e){
        if(dom.hasClass(that.feedCardMoreTabsTrigger, 'feed-card-tab-more-trigger-open')){
          dom.removeClass(that.feedCardMoreTabsTrigger, 'feed-card-tab-more-trigger-open');
          that.feedCardMoreTabs.style.display = 'none';
        } else {
          dom.addClass(that.feedCardMoreTabsTrigger, 'feed-card-tab-more-trigger-open');
          that.feedCardMoreTabs.style.display = 'block';
        }
        dom.stopPropagation(e);
      });

      dom.addEvent(that.feedCardMoreTabs, 'click', function(e){
        var target = dom.getTarget(e);
        that.cancelSettings();

        var lastShowTabIndex = that.resortTabs(win.parseInt(target.getAttribute('data-lid'), 10));
        that.showTabByIndex(lastShowTabIndex);

        that.feedCardMoreTabs.style.display = 'none';
        dom.removeClass(that.feedCardMoreTabsTrigger, 'feed-card-tab-more-trigger-open');
      });

      dom.addEvent(that.feedCardConfigurableTabs, 'click', function(e){
        var target = dom.getTarget(e);
        that.cancelSettings();
        that.showTab(target);
      });

      dom.addEvent(that.feedCardTabFirstTab, 'click', function(e){
        var target = dom.getTarget(e);
        that.cancelSettings();
        that.showTab(target);
      });

      dom.addEvent(that.feedCardLabelsToggle, 'click', function(e){

        if(dom.hasClass(that.feedCardLabelsToggle, 'feed-card-tab-labels-toggle-open')){

          that.closeLabelToggle();
        } else {

          that.openLabelToggle();
        }

        dom.preventDefault(e);
      });

      dom.addEvent(that.feedCardLabelsC, 'click', function(e){
        var target = dom.getTarget(e);

        if(target.tagName.toUpperCase() == 'A'){
          for(var i = 0; i < that.feedCardLabelsC.childNodes.length; i ++){
            dom.removeClass(that.feedCardLabelsC.childNodes[i], 'active');
          }

          dom.addClass(target, 'active');

          if(target == that.feedCardLabelsC.firstChild){
            that.currentKeyword = null;
            that.loader.setKeywordsAndLoad(that.keywords);
          } else {
            that.currentKeyword = target.innerHTML;
            that.loader.setKeywordsAndLoad([that.currentKeyword], 1);
          }
        }

        dom.preventDefault(e);
      });

      if(that.isTabFixed && utils.browser.ie != 6){
        var timeout = null;

        var theY = 0;
        if(that.yPosition != 'auto') {
          theY = utils.getPosition(that.container).y;
        }

        dom.addEvent(win, 'scroll', function(){
          if(timeout) {
            win.clearTimeout(timeout);
          }
          timeout = win.setTimeout(function(){
            var vd = utils.viewData();
            var y = 0;
            if(that.yPosition === 'auto'){
              var posY = utils.getPosition(that.container).y;
              if(posY > 0) {
                y = posY;
              } else {
                y = theY;
              }
            } else {
              y = that.yPosition;
            }

            if(vd.scrollTop + that.fixedTop > y){
              if(that.fixedTop > 0){
                that.feedCardTab.style.top = that.fixedTop + 'px';
              }
              dom.addClass(that.container, 'feed-card-fixed');
            } else {
              dom.removeClass(that.container, 'feed-card-fixed');
              that.feedCardTab.style.top = '';
            }
          }, 10);
        });
      }
    },
    closeLabelToggle: function(){
      this.feedCardLabelsC.style.height = '30px';
      dom.removeClass(this.feedCardLabelsToggle, 'feed-card-tab-labels-toggle-open');
      this.feedCardLabelsToggle.innerHTML = '\u5C55\u5F00';
    },
    openLabelToggle: function(){
      this.feedCardLabelsC.style.height = 'auto';
      dom.addClass(this.feedCardLabelsToggle, 'feed-card-tab-labels-toggle-open');
      this.feedCardLabelsToggle.innerHTML = '\u6536\u8D77';
    },
    showTab: function(tab){
      var that = this;
      if(that.currentTab == tab || tab.tagName.toUpperCase() === 'DIV'){
        return;
      }

      var lid = win.parseInt(tab.getAttribute('data-lid'), 10);

      if(that.supportKeywords){

        if(lid == -100){
          dom.removeClass(that.currentTab, 'feed-card-tab-tabi-selected');
          that.currentTab = tab;
          dom.addClass(that.currentTab, 'feed-card-tab-tabi-selected');
          if(that.currentKeyword){
            that.loader.setKeywordsAndLoad([that.currentKeyword], 1);
            that.renderLabels(that.currentKeyword, that.keywords);
          } else {
            that.loader.setKeywordsAndLoad(that.keywords);
            that.renderLabels('\u5168\u90E8', that.keywords);
          }
          that.scrollToTabPosition();
          that.feedCardLabels.style.display = 'block';
          return;
        }
      }

      if(lid != -102){
        that.labelEditor.toAddLabel = null;
        that.labelEditor._hideTip();
      }

      that.feedCardLabels.style.display = 'none';

      that.scrollToTabPosition();

      dom.removeClass(that.currentTab, 'feed-card-tab-tabi-selected');
      that.currentTab = tab;
      dom.addClass(that.currentTab, 'feed-card-tab-tabi-selected');

      if(lid == -102){
        that.loader.setKeywordsAndLoad([that.tabInfos['tab_-102'].txt], 1);
      } else {
        that.loader.setLidAndLoad(win.parseInt(that.currentTab.getAttribute('data-lid'), 10));
      }

      dom.removeClass(that.feedCardMoreTabsTrigger, 'feed-card-tab-more-trigger-open');
      that.feedCardMoreTabs.style.display = 'none';

    },
    scrollToTabPosition: function(forceJump){
      var that = this;
      var y = 0;
      if(that.yPosition === 'auto'){
        y = utils.getPosition(that.container).y;
      } else {
        y = that.yPosition;
      }
      var vd = utils.viewData();
      if(vd.scrollTop > y || forceJump){
        var delta;
        if(utils.isFunction(that.deltaYPosition)){
          delta = that.deltaYPosition();
        }else{
          delta = that.deltaYPosition;
        };

        win.scrollTo(0, y + (delta || 0));
      }
    },
    addTagToTab: function(tagName){
      var that = this;

      // 如果点击的是已订阅的正常标签
      for(var i = 0; i < that.tabs.length; i ++){
        var tabInfo = that.tabInfos['tab_' + that.tabs[i]];
        if(tabInfo.txt == tagName){

          if(i < that._tabRenderLength){
            that.showTabByIndex(i);
          } else {
            var resortLength = that.resortTabs(tabInfo.lid);
            that.showTabByIndex(resortLength);
          }
          return;
        }
      }

      // 如果点击的是未订阅的正常标签
      for(var key in that.tabInfos){
        var tabInfo = that.tabInfos[key];
        if(tabInfo && tabInfo.txt == tagName && tabInfo.lid != -102){

          that.tabs.push(tabInfo.lid);
          var resortLength = that.resortTabs(tabInfo.lid);
          that.showTabByIndex(resortLength);

          that.uploadData(true);

          return;
        }
      }

      var indexOfTagName = utils.indexOf(that.keywords, tagName);
      if(indexOfTagName >= 0){
        // 如果是普通tag的话，且已订阅
        that.showLabel(tagName, that.keywords, false, false);
      } else {
        // 如果是普通tag的话，且未订阅，则先将该tag显示在tab上，然手弹出订阅tag的模块
        that.labelEditor.addLabel(tagName);

        var tagLen = utils.cn_size(tagName, true);
        var tagWidth = tagLen * 10 + TAB_PADDING * 2;

        that.tabInfos['tab_-102'] = {
          txt: tagName,
          lid: -102,
          css_width: tagWidth - TAB_PADDING * 2
        };

        if(utils.indexOf(this.tabs, -102) < 0){
          that.tabs.push(-102);
        }
        var resortLength = that.resortTabs(-102);
        that.showTabByIndex(resortLength);
      }
    },
    showLabel: function(label, labels, update, showNotification){

      this.keywords = labels;

      if(utils.indexOf(this.tabs, -100) < 0){
        this.tabs.push(-100);
      }
      var index102 = utils.indexOf(this.tabs, -102);
      if(index102 >= 0){
        this.tabs.splice(index102, 1);
      }

      var resortLength = this.resortTabs(-100);

      this.currentKeyword = label;

      this.showTabByIndex(resortLength);

      if(showNotification){
        dom.$('feedCardNotification2').innerHTML = '\u4F60\u5DF2\u6210\u529F\u8BA2\u9605\u201C' + label + '\u201D\uFF0C\u53EF\u4EE5\u5F00\u59CB\u9605\u8BFB\u5566\u3002';
        dom.$('feedCardNotification2').style.display = 'block';
        setTimeout(function(){
          dom.$('feedCardNotification2').style.display = 'none';
        }, 2000);
      }

      if(update){
        this.uploadData(true);
      }
    },
    renderLabels: function(label, labels){
      var labelHtml = [];
      if(label == '\u5168\u90E8'){
        labelHtml.push('<a href="javascript:;" class="active" style="border-left:none;">\u5168\u90E8</a>');
      } else {
        labelHtml.push('<a href="javascript:;" style="border-left:none;">\u5168\u90E8</a>');
        var labelIndex = utils.indexOf(labels, label);
        if(labelIndex >= 0){
          labels.splice(labelIndex, 1);
          labels.splice(0, 0, label);
        }
      }

      for(var i = 0; i < labels.length; i ++){
        if(label == labels[i]){
          labelHtml.push('<a href="javascript:;" class="active">' + labels[i] + '</a>');
        } else {
          labelHtml.push('<a href="javascript:;">' + labels[i] + '</a>');
        }
      }

      this.feedCardLabelsC.innerHTML = labelHtml.join('');

      this.feedCardLabels.style.display = 'block';

      var that = this;
      that.feedCardLabelsC.style.height = 'auto';
      setTimeout(function(){
        if(that.feedCardLabelsC.offsetHeight > 30){
          that.feedCardLabelsToggle.style.display = 'inline';
          that.closeLabelToggle();
        } else {
          that.feedCardLabelsToggle.style.display = 'none';
        }
      }, 100);
    },
    resortTabs: function(lid){
      var that = this;

      var allTabWidth = MORE_WIDTH + that.tabInfos['tab_' + lid].css_width + TAB_PADDING * 2;
      var tabRenderLength = 0;

      for(var i = 0; i < that.tabs.length; i ++){
        var tabInfo = that.tabInfos['tab_' + that.tabs[i]];
        if(that.tabs[i].lid != lid){
          allTabWidth += tabInfo.css_width + TAB_PADDING * 2;
          if(allTabWidth > that.centerWidth){
            tabRenderLength = i;
            break;
          }
        }
      }

      var index = utils.indexOf(that.tabs, lid);
      that.tabs.splice(index, 1);

      that.tabs.splice(tabRenderLength, 0, lid);

      that.renderTabs(tabRenderLength + 1);
      return tabRenderLength;
    },
    showTabByIndex: function(index){
      var tab = this.feedCardConfigurableTabs.getElementsByTagName('span')[index];
      this.showTab(tab);
    },
    setTabs: function(tabs){
      var that = this;

      var existTabs = [];

      var allTabWidth = 0;

      for(var i = 0; i < tabs.length; i ++){
        var tabInfo = that.tabInfos['tab_' + tabs[i]];
        if(!tabInfo){
          continue;
        }
        existTabs.push(tabInfo.lid);
        allTabWidth += tabInfo.css_width + TAB_PADDING * 2;
      }

      var tabRenderLength = existTabs.length;

      if(allTabWidth > that.centerWidth){
        allTabWidth = MORE_WIDTH;
        for(var i = 0; i < existTabs.length; i ++){
          var tabInfo = that.tabInfos['tab_' + existTabs[i]];
          allTabWidth += tabInfo.css_width + TAB_PADDING * 2;
          if(allTabWidth > that.centerWidth){
            tabRenderLength = i;
            break;
          }
        }
      }

      that.tabs = existTabs;

      that.renderTabs(tabRenderLength);
    },
    renderTabs: function(tabRenderLength){
      var that = this;
      var html = [];
      that._tabRenderLength = tabRenderLength;
      for(var i = 0; i < tabRenderLength; i ++){
        var tabInfo = that.tabInfos['tab_' + that.tabs[i]];

        if(tabInfo.lid == -100){
          html.push('<span class="feed-card-tab-tabi feed-card-tab-tabi2" id="feedCardLabelsTrigger" data-lid="' + tabInfo.lid + '" style="width:' + tabInfo.css_width + 'px;" suda-uatrack="key=index_feed&value=cate_float:' + tabInfo.lid + '">' + tabInfo.txt + '<i></i></span>');
        } else {
          html.push('<span class="feed-card-tab-tabi" data-lid="' + tabInfo.lid + '" style="width:' + tabInfo.css_width + 'px;" suda-uatrack="key=index_feed&value=cate_float:' + tabInfo.lid + '">' + tabInfo.txt + '</span>');
        }
      }

      that.feedCardConfigurableTabs.innerHTML = html.join('');

      var html2 = [];
      for(var j = tabRenderLength; j < that.tabs.length; j ++){
        var tabInfo = that.tabInfos['tab_' + that.tabs[j]];

        if(tabInfo.lid == -100){
          html2.push('<span class="feed-card-tab-tabi feed-card-tab-tabi2" id="feedCardLabelsTrigger" data-lid="' + tabInfo.lid + '" suda-uatrack="key=index_feed&value=cate_float:' + tabInfo.lid + '">' + tabInfo.txt + '<i></i></span>');
        } else {
          html2.push('<span class="feed-card-tab-tabi" data-lid="' + tabInfo.lid + '" suda-uatrack="key=index_feed&value=cate_float:' + tabInfo.lid + '">' + tabInfo.txt + '</span>');
        }
      }

      that.feedCardMoreTabs.innerHTML = html2.join('');
      that.feedCardMoreTabs.style.display = 'none';

      if(html2.length){
        that.feedCardMoreTabsTrigger.style.display = 'block';
      } else {
        that.feedCardMoreTabsTrigger.style.display = 'none';
      }
    },
    setKeywords: function(keywords){
      this.keywords = keywords;
      if(!keywords){
        keywords = [];
        that.keywords = keywords;
      }
    },
    openSettings: function(){
      var that = this;

      that.feedCardSettingsTrigger.innerHTML = '\u53D6\u6D88\u8BBE\u7F6E';
      dom.addClass(that.feedCardSettingsTrigger, "feed-card-tab-tabi-selected");

      that.editor.show(that.tabs, that.keywords);
    },
    cancelSettings: function(){
      var that = this;
      that.feedCardSettingsTrigger.innerHTML = '\u5174\u8DA3\u8BBE\u7F6E';
      dom.removeClass(that.feedCardSettingsTrigger, "feed-card-tab-tabi-selected");

      that.editor.hide();
    }
  };

  return TabClass;

})();

;(function(){
  var versionNumber = '1.2.4';

  doT.templateSettings = {
    evaluate:    /\<\%([\s\S]+?)\%\>/g,
    interpolate: /\<\%=([\s\S]+?)\%\>/g,
    varname: 'it'
  };

  var settings = win.FEED_CARD_INFO;
  settings.versionNumber = versionNumber;
  var tab = new Tab(settings);

  win.__SinaFeedCard__ = {
    onLoginCancel: function(){
      tab.onLoginCancel();
    },
    onLoginSuccess: function(uid, homeid){
      tab.onLoginSuccess(uid, homeid);
    },
    onLogout: function(){
      tab.onLogout();
    },
    showSettings: function(){
      tab.openSettings();
      tab.scrollToTabPosition(true);
    },
    openSettings: function(){
      tab.openSettings();
    },
    playVideo: function(domId, vid, pid){
      dom.$('videoPlayerC-' + domId).style.display = 'none';
      dom.$('videoPlayerV-' + domId).style.display = 'block';

      sinaBokePlayerConfig_o.container = 'videoPlayerVC-' + domId;
      sinaBokePlayerConfig_o.vid = vid;
      sinaBokePlayerConfig_o.pid = pid;

      sinaVideoPlayer(sinaBokePlayerConfig_o).init();
    },
    stopVideo: function(domId){
      dom.$('videoPlayerC-' + domId).style.display = 'block';
      dom.$('videoPlayerV-' + domId).style.display = 'none';
      dom.$('videoPlayerVC-' + domId).innerHTML = '';
    },
    addTagToTab: function(tagName){
      tab.addTagToTab(tagName);
    },
    showComment: function(target, channel, id, style, newsIndex, count, newsURL, adURL){
      var parent = target.parentNode.parentNode.parentNode;
      var ele = dom.getByAttributeName(parent, 'data-id', 'feedCardComment_' + id + '_w', 'div');
      if(ele && ele.length){
        ele = ele[0];
        if(ele.style.display === 'block'){
          ele.style.display = 'none';
          ___sinacMNT___.cmnt.commentTip.hide();
        } else {
          ele.style.display = 'block';

          if(adURL){
            var img = new Image();
            img.src = adURL;
            img.style.display = 'none';
            doc.body.appendChild(img);
          }

          dom.removeClass(ele, 'show-close');

          if(count > 0){
            dom.getByAttributeName(parent, 'data-id', 'feedCardCommentTop_' + id, 'div')[0].style.right = 62 + count.length * 5 + 'px';

            win.setTimeout(function(){
              dom.addClass(ele, 'show-close');
            }, 1000);
          }

          var formList = new ___sinacMNT___.cmnt.FormList(dom.getByAttributeName(parent, 'data-id', 'feedCardComment_' + id + '_c', 'div')[0], {
            channel: channel,
            newsid: id,
            parent: '',
            encoding: settings.pageCommentEncoding || 'gbk'
          }, {
            channel: channel,
            newsid: id,
            group: style,
            encoding: settings.pageCommentEncoding || 'gbk',
            page: 1,
            pageSize: 20,
            showReply: settings.pageCommentShowReply === undefined ? 0 : settings.pageCommentShowReply,
            maxWordCount: settings.pageCommentMaxWordCount || 140,
            hotPageNum: settings.pageCommentHotPageNum || 3,
            firstPageNum: settings.pageCommentFirstPageNum || 10,
            clickMoreTimes: 0,
            loaded: function(data){
              var count = win.parseInt(data.data.count.total, 10);
              if(count > 0){
                target.innerHTML = '\u8BC4\u8BBA(' + count + ')';
              } else {
                target.innerHTML = '\u8BC4\u8BBA';
              }
            }
          }, {});

          formList.setFormOpt('share_url', newsURL);

          var inputDOM = formList.commentForms[0].get('dom.cont');
          win.setTimeout(function(){
            inputDOM.focus();
          }, 10);
        }
      }
    },
    hideComment: function(target, id){
      var parent = target.parentNode.parentNode;
      var ele = dom.getByAttributeName(parent, 'data-id', 'feedCardComment_' + id + '_w', 'div');

      if(ele && ele.length){
        ele = ele[0];
        var pos = utils.getPosition(ele);
        if(pos && pos.y){
          win.scrollTo(0, pos.y - 250);
        }

        ele.style.display = 'none';

        ___sinacMNT___.cmnt.commentTip.hide();
      }
    }
  };

  win.SINAFEEDCARD_COLUMNS_EDIT_DONE = function(result){
    if(SINAFEEDCARD_COLUMNS_EDIT_DONE.hideToast){
      return;
    }
    var editToastTimeout = win.FEED_CARD_INFO.editToastTimeout || 3000;
    var editSuccessToast = win.FEED_CARD_INFO.editSuccessToast || '\u60A8\u7684\u5174\u8DA3\u8BBE\u7F6E\u5DF2\u7ECF\u4FDD\u5B58\u6210\u529F!';
    var editFailToast = win.FEED_CARD_INFO.editFailToast || '\u60A8\u7684\u5174\u8DA3\u8BBE\u7F6E\u4FDD\u5B58\u5931\u8D25!';
    var editToastOKBtnTxt = win.FEED_CARD_INFO.editToastOKBtnTxt || '\u5F00\u59CB\u6D4F\u89C8';
    var editToastOKNBtnTxt = win.FEED_CARD_INFO.editToastOKNBtnTxt || '\u8FD4\u56DE\u4FEE\u6539';

    var toast = new Toast({
      showingDuration: editToastTimeout
    });

    if(result && result.result && result.result.status && result.result.status.code == 0){
      toast.show({
        tip: editSuccessToast,
        btnTxt: editToastOKBtnTxt,
        state: 0
      });
    } else {
      toast.show({
        tip: editFailToast,
        btnTxt: editToastOKNBtnTxt,
        state: 1,
        onClose: function(from){
          if(from == 1){
            tab.openSettings();
          }
        }
      });
    }

  };
})();

})(document, window);