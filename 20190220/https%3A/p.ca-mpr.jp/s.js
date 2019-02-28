var campimg = {util: {}, option: {}, i4a : '', cv : '', param : ''};

campimg.protocol = document.location.protocol;

campimg.url = campimg.protocol + "//p.ca-mpr.jp/s";

campimg.util.availableQueryKeyMap = {
  i4a : 'i4a',
  i4sa : 'i4sa',
  i4t : 'i4t',
  i4v : 'i4v',
  i4d : 'i4d',
  i4c : 'i4c'
};

campimg.util.NOOP = function(){};
campimg.util.RET_STR = function(){return '';};

campimg.util.hasEncodeURIComponent = function() {
  return typeof (encodeURIComponent) == 'function';
};

campimg.util.isInIframe = function() {
  return document.referrer == parent.location;
};

campimg.util.getParentQueryString = function() {
  return top.document.location.search;
};

campimg.util.getQueryString = function() {
  return document.location.search;
};

campimg.util.isRendered = function() {
  return !!document.body;
};

campimg.FOOT_PRINTS_PREFIX = 'P';

campimg.util.isFootprintsLeft = function() {
  return window.CAMP_TAG_FOOTPRINTS && typeof window.CAMP_TAG_FOOTPRINTS === 'object';
};

campimg.util.isDuplicated = function(i4c, cvid) {
  return window.CAMP_TAG_FOOTPRINTS.i4c === i4c &&
    window.CAMP_TAG_FOOTPRINTS.cvid === cvid;
};

campimg.util.getKeyValueFromQueryString = function(query) {
  var splited = query.split("=");
  return {
    key : splited[0],
    value : splited[1] || ''
  };
};

campimg.util.isI4cOrI4aExistsInUrl = function(query) {
  return query.has(campimg.util.availableQueryKeyMap.i4c) ||
    query.has(campimg.util.availableQueryKeyMap.i4a);
};

campimg.util.isValidI4c = function(query) {
  if (campimg.i4c && campimg.util.isI4cOrI4aExistsInUrl(query)) {
    return campimg.i4c === query.getRawValueOf(campimg.util.availableQueryKeyMap.i4c);
  }
  return true;
};

campimg.dup = false;

campimg.util.searchFootprints = function(i4c, cvid) {
  if (campimg.util.isFootprintsLeft() &&
      campimg.util.isDuplicated(i4c, cvid)) {
    campimg.dup = true;
    campimg.footprints = window.CAMP_TAG_FOOTPRINTS;
  } else {
    campimg.dup = false;
  }
};

campimg.util.leaveFootprints = function(i4c, cvid) {
  if (!window.CAMP_TAG_FOOTPRINTS) {
    window.CAMP_TAG_FOOTPRINTS = {
      id : [campimg.FOOT_PRINTS_PREFIX + i4c, cvid].join('_'),
      i4c : i4c,
      cvid : cvid
    };
  }
};

campimg.util.changeUrl = function(url) {
  document.location.href = url;
};

campimg.util.getLpDifferenceInfo = function(query) {
  var ret = null;
  if (!campimg.util.isValidI4c(query)) {
    ret = {
      rfKeyName : 'dfrf',
      df4c : campimg.getUrlEncode(campimg.i4c),
      df4a : campimg.i4a? campimg.getUrlEncode(campimg.i4a) : query.getValueOf(campimg.util.availableQueryKeyMap.i4a)
    };
  }
  return ret;
};

campimg.clear = function() {
  campimg.option = {};
  campimg.i4a = '';
};

campimg.createParameter = function() {
  var query = campimg.getQuery();
  var dfInfo = campimg.util.getLpDifferenceInfo(query);
  var rfKeyName = dfInfo? dfInfo.rfKeyName : 'rf';

  campimg.param = "";
  query.remove(campimg.util.availableQueryKeyMap.i4c);

  if (dfInfo) {
    query.remove(campimg.util.availableQueryKeyMap.i4a);
    campimg.i4a = '';
  }

  if (campimg.i4a) {
    campimg.param += "i4a=" + campimg.getUrlEncode(campimg.i4a);
  } else if (query.has(campimg.util.availableQueryKeyMap.i4sa) || !campimg.option.cv) {
    campimg.param += query.toString();
  }

  var rfKey = (!campimg.param? '' : '&') + rfKeyName + '=';

  campimg.param += rfKey + campimg.getUrlEncode(campimg.getReferrer());
  campimg.param += "&lc=" + campimg.getUrlEncode(campimg.getUrl());

  for ( var val in campimg.option ) {
    if (campimg.option[val]) {
      campimg.param += "&" + val + "=" + campimg.getUrlEncode(campimg.option[val]);
    }
  }

  if (dfInfo) {
    campimg.param += '&df4c=' + dfInfo.df4c + '&df4a=' + dfInfo.df4a;
  }

  campimg.param += "&ttl="  + campimg.getUrlEncode(campimg.getTitle());
  campimg.param += "&cke=" + campimg.getCookieEnabled();
  campimg.param += "&ms=" + campimg.getMilliseconds();

  if (campimg.dup) {
    campimg.param += "&duplica=" + campimg.getUrlEncode(campimg.footprints.id);
  }
};

campimg.getMilliseconds = function(){
  return new Date().getMilliseconds();
};

campimg.createImgTag = function() {
  var imgtag = new Image(1,1);
  imgtag.src = campimg.url + "/" + campimg.i4c + "/" + "?" + campimg.param;
  imgtag.onerror = imgtag.onabort = imgtag.onload = campimg.util.NOOP;
};

campimg.createImgTagOption = function (cbFunc) {
  var imgtag = new Image(1, 1);
  imgtag.onload = cbFunc;
  imgtag.onerror = cbFunc;
  imgtag.onabort = cbFunc;
  imgtag.src = campimg.url + "/" + campimg.i4c + "/" + "?" + campimg.param;
};

campimg.createImgTagOld = function () {
  if (campimg.util.isRendered()) {
    document.write('<img src="' + campimg.url + "/" + campimg.i4c + "/" + "?" + campimg.param + '" width="1" height="1" >');
  } else {
    var imgtag = new Image(1, 1);
    imgtag.src = campimg.url + "/" + campimg.i4c + "/" + "?" + campimg.param;
  }
};

campimg.getUrlEncode = function(str) {
  if (campimg.util.hasEncodeURIComponent()) {
    return encodeURIComponent(str);
  } else {
    return escape(str);
  }
};

campimg.getQueryString = function() {
  try {
    if (campimg.util.isInIframe()) {
      return campimg.util.getParentQueryString();
    } else {
      return campimg.util.getQueryString();
    }
  } catch (e) {
    return campimg.util.getQueryString();
  }
};

campimg.getQuery = function () {
  var rawQueryString = campimg.getQueryString().slice(1);
  var resultQueryMap = {};
  var queryKeyValueList = rawQueryString.split("&");
  var maybeQueryKey;
  var kv;

  for (var i = 0, len = queryKeyValueList.length; i < len; i++) {
    kv = campimg.util.getKeyValueFromQueryString(queryKeyValueList[i]);
    maybeQueryKey = campimg.util.availableQueryKeyMap[kv.key];
    if (maybeQueryKey) {
      resultQueryMap[maybeQueryKey] = {
        encodedKey : campimg.getUrlEncode(maybeQueryKey),
        encodedValue : campimg.getUrlEncode(kv.value),
        rawValue : kv.value
      };
    }
  }
  return new campimg.Query(resultQueryMap);
};

campimg.getI4sa = campimg.getQuery;

campimg.Query = function(queryMap) {
  this._queryMap = queryMap;
};

campimg.Query.prototype.has = function(key) {
  return key in this._queryMap;
};

campimg.Query.prototype.getRawValueOf = function(keyName) {
  var ret = this._queryMap[keyName];
  return ret? ret.rawValue : '';
};

campimg.Query.prototype.getValueOf = function(keyName) {
  var ret = this._queryMap[keyName];
  return ret? ret.encodedValue : '';
};

campimg.Query.prototype.remove = function(key) {
  if (key in this._queryMap) {
    delete this._queryMap[key];
  }
};

campimg.Query.prototype.toString = function() {
  var ret = [];
  var info;
  for (var prop in this._queryMap) {
    info = this._queryMap[prop];
    ret.push(info.encodedKey + '=' + info.encodedValue);
  }
  return ret.join('&');
};

campimg.getReferrer = function () {
  try {
    if (document.referrer == parent.location) {
      return top.document.referrer;
    } else {
      return document.referrer;
    }
  } catch (e) {
    return document.referrer;
  }
};

campimg.getUrl = function() {
  return document.location.href;
};

campimg.getTitle = function() {
  return document.title;
};

campimg.getCookieEnabled = function() {
  return navigator.cookieEnabled ? 1 : 0;
};

campimg.checkUrl = function (userUrl) {
  var regUrl = /^(https?|ftp)(:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#]+)$/;
  var regLink = /([-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#]+)$/;
  var regJs = /^javascript:/;
  var urlForCheck = userUrl.toLowerCase();
  if (regJs.test(urlForCheck)) {
    return false;
  } else if (regUrl.test(urlForCheck)) {
    return true;
  } else if (regLink.test(urlForCheck)) {
    return true;
  } else {
    return false;
  }
};

campimg.createTag = function() {
  campimg.createParameter();
  campimg.createImgTag();
  campimg.clear();
};

campimg.createTagOld = function () {
  campimg.createParameter();
  campimg.createImgTagOld();
  campimg.clear();
};

campimg.createTagOption = function (cbFunc) {
  campimg.createParameter();
  campimg.createImgTagOption(cbFunc);
  campimg.clear();
};

campimg.makeLinkBack = function (backUrl) {
  return function () {
    if (campimg.checkUrl(backUrl)) {
      campimg.util.changeUrl(backUrl);
    }
  };
};

campimg.makeSendForm = function (formId) {
  return function () {
    if (document.getElementById(formId) != undefined) {
      var formObj = document.getElementById(formId);
      formObj.submit();
    }
  };
};

campimg.getFuncByName = function (funcName) {
  if (window[funcName]) {
    return window[funcName];
  }
};

campimg.parseOptionHash = function(optionHash) {
  for (var key in optionHash) {
    campimg.option[key] = optionHash[key];
  }
};

campimg.clear();

function createTag(i4c) {
  campimg.i4c = i4c;
  campimg.option.method = "createTag";
  campimg.createTagOld();
}

function createLpTag(i4c) {
  campimg.i4c = i4c;
  campimg.option.method = "createLpTag";
  campimg.createTag();
}

function createCvTag(i4c,cv){
  campimg.i4c = i4c;
  campimg.option.cv = cv;
  campimg.util.searchFootprints(i4c, cv);
  campimg.util.leaveFootprints(i4c, cv);
  campimg.option.method = "createCvTag";
  campimg.createTag();
}

function createCvTagAnchor(i4c, cv, sendUrl) {
  campimg.i4c = i4c;
  campimg.option.cv = cv;
  campimg.dup = false;
  campimg.option.method = "createCvTagAnchor";
  if (sendUrl && typeof (sendUrl) === 'string') {
    campimg.createTagOption(campimg.makeLinkBack(sendUrl));
  }
}

function createCvTagForm(i4c, cv, formId) {
  campimg.i4c = i4c;
  campimg.option.cv = cv;
  campimg.dup = false;
  campimg.option.method = "createCvTagForm";
  if (formId) {
    if (typeof (formId) === "string") {
      campimg.createTagOption(campimg.makeSendForm(formId));
    }
  }
}

function createCvTagFunc(i4c, cv, funcName) {
  campimg.i4c = i4c;
  campimg.option.cv = cv;
  campimg.dup = false;
  campimg.option.method = "createCvTagFunc";
  if (funcName) {
    var cbType = typeof (funcName);
    if (cbType === "string" && ( funcName in window ) ) {
      campimg.createTagOption(campimg.getFuncByName(funcName));
    } else if (cbType === "function") {
      campimg.createTagOption(funcName);
    }
  }
}

function createFlashLpTag(i4c) {
  campimg.i4c = i4c;
  campimg.option.method = "createFlashLpTag";
  campimg.createTag();
}

function createFixedIdLpTag(i4c, i4a) {
  campimg.i4c = i4c;
  campimg.i4a = i4a;
  campimg.option.method = "createFixedIdLpTag";
  campimg.createTag();
}

function createFlashCvTag(i4c,cv){
  campimg.i4c = i4c;
  campimg.option.cv = cv;
  campimg.dup = false;
  campimg.option.method = "createFlashCvTag";
  campimg.createTag();
}

function createFlashCvTagOptionHash(i4c,cv,optionHash){
  campimg.i4c = i4c;
  campimg.parseOptionHash(optionHash);
  campimg.option.cv = cv;
  campimg.dup = false;
  campimg.option.method = "createFlashCvTagOptionHash";
  campimg.createTag();
}

(function(oldMethodNameList) {
  for (var i = 0, len = oldMethodNameList.length; i < len; i++) {
    campimg[oldMethodNameList[i]] = campimg.util.RET_STR;
  }
})(['getFlashVersion', 'getJavaEnabled', 'getColorDepth',
    'getOsName', 'getBrowserType', 'getBrowserVersion',
    'getScreenWidth', 'getScreenHeight', 'getWindowWidth', 'getWindowHeight']);