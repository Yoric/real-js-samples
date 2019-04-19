// 20150120154425
// svn:../ui/product/recommender/trunk/
;
(function(exports, name) {
	var fns = [];
	var isReady = 0;
	var iframeStore = null;
	var EXPORTNAME = name || '___CrossDomainStorage___';
	var HANDLE = EXPORTNAME + '.onReady';
	var opt = {
		domain: 'sina.com.cn',
		url: 'http://news.sina.com.cn/iframe/87/store.html'
	};
	var ERROR = {
		domain: 'fail to set domain!'
	};
	var loadStore = function() {
		if (iframeStore) {
			return;
		}
		try {
			document.domain = opt.domain;
		} catch (e) {
			throw new Error(ERROR.domain);
			return;
		}
		var node = document.getElementById(EXPORTNAME);
		if (node) {
			node.parentNode.removeChild(node);
		}
		var iframeWrap = document.createElement('div');
		var doc = document.body;
		var iframe = '<iframe src="' + opt.url + '?handle=' + HANDLE + '&domain=' + opt.domain + '" frameborder="0"></iframe>';
		var px = '-' + 1e5 + 'em';
		iframeWrap.style.position = 'absolute';
		iframeWrap.style.left = px;
		iframeWrap.style.top = px;
		iframeWrap.className = 'hidden';
		iframeWrap.id = EXPORTNAME;
		iframeWrap.innerHTML = iframe;
		doc.insertBefore(iframeWrap, doc.childNodes[0]);
	};
	var checkReady = function() {
		if (!isReady) {
			loadStore();
		}
		return isReady;
	};
	var CrossDomainStorage = {};
	CrossDomainStorage.ready = function(fn) {
		if (!checkReady()) {
			fns.push(fn);
			return;
		}
		fn(iframeStore);
	};
	CrossDomainStorage.onReady = function(store) {
		if (isReady) {
			return
		}
		isReady = 1;
		iframeStore = store;
		if (fns) {
			while (fns.length) {
				fns.shift()(store);
			}
		}
		fns = null
	};
	CrossDomainStorage.config = function(o) {
		if (!o) {
			return
		}
		for (var i in o) {
			if (o.hasOwnProperty(i)) {
				opt[i] = o[i] || opt[i];
			}
		}
		return this;
	};
	exports[EXPORTNAME] = CrossDomainStorage;
})(window);;
(function(exports) {
	var Util = {
		byId: function(id) {
			return document.getElementById(id);
		},
		byAttr: function(node, attname, attvalue) {
			var nodes = [];
			attvalue = attvalue || '';
			var getAttr = function(node) {
				return node.getAttribute(attname);
			};
			for (var i = 0, l = node.childNodes.length; i < l; i++) {
				if (node.childNodes[i].nodeType == 1) {
					var fit = false;
					if (attvalue) {
						fit = (getAttr(node.childNodes[i]) == attvalue);
					} else {
						fit = (getAttr(node.childNodes[i]) != '')
					}
					if (fit) {
						nodes.push(node.childNodes[i]);
					}
					if (node.childNodes[i].childNodes.length > 0) {
						nodes = nodes.concat(arguments.callee.call(null, node.childNodes[i], attname, attvalue));
					}
				}
			}
			return nodes;
		},
		bindEvent: function(o, s, fn) {
			if (o.attachEvent) {
				o.attachEvent('on' + s, fn);
			} else {
				o.addEventListener(s, fn, false);
			}
			return o;
		},
		builder: function(wrap, type) {
			var list, nodes;
			nodes = this.byAttr(wrap, type);
			list = {};
			for (var i = 0, len = nodes.length; i < len; i++) {
				var j = nodes[i].getAttribute(type);
				if (!j) {
					continue;
				}
				list[j] || (list[j] = []);
				list[j].push(nodes[i])
			}
			return {
				box: wrap,
				list: list
			}
		},
		strLeft2: (function() {
			var byteLen = function(str) {
				if (typeof str == "undefined") {
					return 0;
				}
				var aMatch = str.match(/[^\x00-\x80]/g);
				return (str.length + (!aMatch ? 0 : aMatch.length));
			};
			return function(str, len) {
				var s = str.replace(/\*/g, " ").replace(/[^\x00-\xff]/g, "**");
				str = str.slice(0, s.slice(0, len).replace(/\*\*/g, " ").replace(/\*/g, "").length);
				if (byteLen(str) > len) str = str.slice(0, str.length - 1);
				return str;
			};
		})(),
		isArray: function(o) {
			return Object.prototype.toString.call(o) === '[object Array]';
		},
		getGuid: function() {
			return Math.abs((new Date()).getTime()) + '_' + Math.round(Math.random() * 1e8);
		},
		extend: function(target, source, deep) {
			target = target || {};
			var sType = typeof source,
				i = 1,
				options;
			if (sType === 'undefined' || sType === 'boolean') {
				deep = sType === 'boolean' ? source : false;
				source = target;
				target = this;
			}
			if (typeof source !== 'object' && Object.prototype.toString.call(source) !== '[object Function]') {
				source = {};
			}
			while (i <= 2) {
				options = i === 1 ? target : source;
				if (options !== null) {
					for (var name in options) {
						var src = target[name],
							copy = options[name];
						if (target === copy) {
							continue;
						}
						if (deep && copy && typeof copy === 'object' && !copy.nodeType) {
							target[name] = this.extend(src || (copy.length !== null ? [] : {}), copy, deep);
						} else if (copy !== undefined) {
							target[name] = copy;
						}
					}
				}
				i++;
			}
			return target;
		},
		cookie: (function() {
			var co = {};
			co.getCookie = function(name) {
				name = name.replace(/([\.\[\]\$])/g, '\\\$1');
				var rep = new RegExp(name + '=([^;]*)?;', 'i');
				var co = document.cookie + ';';
				var res = co.match(rep);
				if (res) {
					return unescape(res[1]) || "";
				} else {
					return "";
				}
			};
			co.setCookie = function(name, value, expire, path, domain, secure) {
				var cstr = [];
				cstr.push(name + '=' + escape(value));
				if (expire) {
					var dd = new Date();
					var expires = dd.getTime() + expire * 3600000;
					dd.setTime(expires);
					cstr.push('expires=' + dd.toGMTString());
				}
				if (path) {
					cstr.push('path=' + path);
				}
				if (domain) {
					cstr.push('domain=' + domain);
				}
				if (secure) {
					cstr.push(secure);
				}
				document.cookie = cstr.join(';');
			};
			co.deleteCookie = function(name) {
				document.cookie = name + '=;' + 'expires=Fri, 31 Dec 1999 23:59:59 GMT;';
			};
			return co;
		})(),
		jsonp: function(url, params, cb, fix) {
			var head = document.getElementsByTagName('head')[0];
			var idStr = url + '&' + params;
			var ojs = Util.byId(idStr);
			ojs && head.removeChild(ojs);
			var fun = '';
			var js = document.createElement('script');
			fix = fix || false;
			if (fix) {
				if (typeof cb == 'string') {
					fun = cb;
				}
			} else {
				url = url + ((url.indexOf('?') == -1) ? '?' : '&') + '_t=' + Math.random();
				if (typeof cb == 'function') {
					fun = 'fun_' + Util.getGuid();
					eval(fun + '=function(res){cb(res)}');
				}
			}
			url = url + '&callback=' + fun;
			url = url + '&' + params;
			js.src = url;
			js.id = idStr;
			js.type = 'text/javascript';
			js.language = 'javascript';
			head.appendChild(js);
		},
		jsLoad: function(url, cb) {
			var head = document.getElementsByTagName('head')[0];
			var js = document.createElement('script'),
				isLoaded = false;
			js.onload = js.onreadystatechange = function() {
				if (!isLoaded && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
					isLoaded = true;
					js.onload = js.onreadystatechange = null;
					typeof cb == 'function' && cb();
				}
			};
			js.src = url;
			try {
				head.appendChild(js);
			} catch (e) {}
		},
		log: (function() {
			var trace = location.href.indexOf('log=1') != -1;
			var fiter = function(methods) {
				for (var i = 0, len = methods.length; i < len; i++) {
					var method = methods[i];
					if (typeof method == 'undefined') {
						method = function() {};
					}
				}
			};
			if (typeof console == 'undefined') {
				console = {};
			};
			fiter([console.log, console.time, console.timeEnd]);
			return function() {
				if (!trace) {
					console.time = console.timeEnd = function() {};
					return;
				};
				var slice = Array.prototype.slice;
				var args = slice.call(arguments, 0);
				args.unshift("* recommender >>");
				try {
					console.log.apply(console, args);
				} catch (e) {
					console.log(args);
				}
			};
		})(),
		uaTrack: function(key, val) {
			if (typeof _S_uaTrack == 'function') {
				try {
					_S_uaTrack(key, val);
				} catch (e) {}
			}
		},
		timeoutHandle: (function() {
			var events = [];
			var handle = {
				success: function(id) {
					var eve = events[id];
					if (!eve) {
						return;
					}
					eve.isSuccess = true;
					clearTimeout(eve.timer);
				},
				timeout: function(id, fn) {
					var eve = events[id];
					if (!eve) {
						return;
					}
					eve.timer = setTimeout(function() {
						if (eve.isSuccess) {
							return;
						}
						Util.log(id + ' ' + eve.time + ' time out');
						if (typeof fn == 'function') {
							fn.call(this);
						}
					}, eve.time);
				}
			};
			return function(id, fn, time) {
				if (events[id]) {
					throw new Error(id + '已经被占用');
					return;
				}
				events[id] = {};
				events[id].time = time || 5e3;
				events[id].isSuccess = false;
				if (typeof fn == 'function') {
					fn.call(this, handle);
				}
			}
		})(),
		queryToJson: function(query, isDecode) {
			var qList = query.split("&");
			var json = {};
			for (var i = 0, len = qList.length; i < len; i++) {
				if (qList[i]) {
					hash = qList[i].split("=");
					key = hash[0];
					val = hash[1];
					if (hash.length < 2) {
						val = '';
					}
					if (!json[key]) {
						json[key] = val;
					}
				}
			}
			return json;
		}
	};
	Util.app = {
		filterRepeated: function(data) {
			var dataStr = '';
			var result = data.result;
			var all = result.all;
			var datas = result.data;
			var separator = '||';
			var filtUrlAndTit = function(arr) {
				var fArr = [];
				for (var j = 0, len = arr.length; j < len; j++) {
					var item = arr[j];
					var url = item.url;
					var title = item.title;
					if (dataStr.indexOf(url + separator) == -1 && dataStr.indexOf(title + separator) == -1) {
						fArr.push(item);
						dataStr += url + separator + title + separator;
					} else {
						Util.log('重复数据:');
						Util.log(item);
					}
				}
				return fArr;
			};
			data.result.all = filtUrlAndTit(all);
			for (var i in datas) {
				if (datas.hasOwnProperty(i)) {
					data.result.data[i] = filtUrlAndTit(datas[i]);
				}
			}
			return data;
		},
		filter: function(data, fn) {
			var self = this;
			var addItSelf = (function() {
				var url = encodeURIComponent(location.href);
				var oUrl = decodeURIComponent((url.split('?')[0]).split('#')[0]);
				return function(arr) {
					arr.push(oUrl);
					return arr;
				};
			})();
			var hasViewed = (function() {
				var arrStr = null;
				return function(str, arr) {
					if (Util.isArray(arr)) {
						arrStr = arr && arr.join('');
					} else {
						arrStr = ''
					}
					return arrStr.indexOf(str) == -1 ? false : true;
				};
			})();
			var getfilterData = function(readMem) {
				var d = [];
				for (var i = 0, len = data.length; i < len; i++) {
					var item = data[i];
					var itemUrl = item.url;
					if (!hasViewed(itemUrl, readMem)) {
						d.push(item);
					}
				};
				return d;
			};
			var TIMEOUT_NAME = 'loadreadmem_' + Util.getGuid();
			var msg = 'success';
			Util.timeoutHandle(TIMEOUT_NAME, function(handle) {
				handle.timeout(TIMEOUT_NAME, function() {
					msg = 'timeout';
					fn(data, msg);
				});
				exports.___CrossDomainStorage___.ready(function(store) {
					handle.success(TIMEOUT_NAME);
					var readMem = store.get('udv.s.readMem');
					if (typeof readMem == 'undefined' || !readMem) {
						readMem = [];
					}
					readMem = addItSelf(readMem);
					fn(getfilterData(readMem), msg);
				});
			}, 3e3);
		}
	};
	var Clz = function(parent) {
		var klass = function() {
			this.init.apply(this, arguments);
		};
		if (parent) {
			var subclass = function() {};
			subclass.prototype = parent.prototype;
			klass.prototype = new subclass;
		};
		klass.prototype.init = function() {};
		klass.fn = klass.prototype;
		klass.fn.parent = klass;
		klass._super = klass.__proto__;
		klass.extend = function(obj) {
			var extended = obj.extended;
			for (var i in obj) {
				klass[i] = obj[i];
			}
			if (extended) extended(klass)
		};
		klass.include = function(obj) {
			var included = obj.included;
			for (var i in obj) {
				klass.fn[i] = obj[i];
			}
			if (included) included(klass)
		};
		return klass;
	};
	Util.Clz = Clz;
	var Loader = new Clz;
	Loader.include({
		init: function(opt) {
			var self = this;
			self.setStat();
			self.setOpt(opt);
			self.getData();
		},
		setOpt: function(opt) {
			var self = this;
			self.opt = self.opt || {
				api: 'http://interest.mix.sina.com.cn/api/cate/get',
				type: '',
				dpc: '',
				loadComplete: function() {},
				time: 3e3,
				error: function(msg) {}
			};
			var selfOpt = self.opt;
			if (opt || '') {
				selfOpt = Util.extend(selfOpt, opt, true);
			}
		},
		setStat: function() {
			var self = this;
			self._data = null;
		},
		getGuid: function() {
			var isVaild = function(guid) {
				guid = parseInt(guid || '0');
				if (guid <= 0) {
					return false;
				}
				return true;
			};
			var genGuid = function() {
				return Util.getGuid();
			};
			var cookie = Util.cookie;
			var guid = cookie.getCookie('SGUID');
			if (!isVaild(guid)) {
				guid = genGuid();
				cookie.setCookie('SGUID', guid, 43800, '/', 'sina.com.cn');
				Util.log('GUID不存在或非法，重新生成：' + guid);
			}
			Util.log('GUID为：' + guid);
			return guid;
		},
		getUid: function(cb) {
			var self = this;
			var LOGINJS = 'http://i.sso.sina.com.cn/js/ssologin.js';
			var uid = '';
			var co = '';
			var TIMEOUT_NAME = 'ssologin_' + Util.getGuid();
			if (exports.sinaSSOController) {
				co = sinaSSOController.getSinaCookie();
			} else if (exports.sinaSSOManager) {
				co = sinaSSOManager.getSinaCookie();
			} else {
				Util.timeoutHandle(TIMEOUT_NAME, function(handle) {
					handle.timeout(TIMEOUT_NAME, function() {
						Util.log('UID为：');
						cb('');
					});
					Util.jsLoad(LOGINJS, function() {
						handle.success(TIMEOUT_NAME);
						self.getUid(cb);
					});
					Util.log('加载登录脚本：' + LOGINJS);
				}, 3e3);
				return;
			}
			if (co) {
				uid = co.uid;
			}
			Util.log('UID为：' + uid);
			cb(uid);
		},
		getData: function() {
			var self = this;
			var opt = self.opt;
			self.getUid(function(uid) {
				var loadedFnName = 'cb_' + Util.getGuid();
				var TIMEOUT_NAME = 'loadrecommenderdata' + Util.getGuid();
				var guid = self.getGuid();
				var api = self.opt.api;
				var dpcParam = opt.dpc ? 'dpc=1' : '';
				var typeParam = opt.type ? 'type=' + opt.type + '&' : '';
				if (api.indexOf('?') != -1) {
					api = api + '&';
				} else {
					api = api + '?';
				}
				var url = api + typeParam+ 'rnd=' + Util.getGuid();
				Util.log('请求地址：' + url);
				Util.timeoutHandle(TIMEOUT_NAME, function(handle) {
					exports[loadedFnName] = function(m) {
						handle.success(TIMEOUT_NAME);
						self._data = m;
						self._loadComplete(m);
						opt.loadComplete(m);
					};
					handle.timeout(TIMEOUT_NAME, function() {
						opt.error({
							type: 'timeout',
							msg: TIMEOUT_NAME + ' ' + opt.time + ' timeout'
						});
					});
					Util.jsonp(url, dpcParam, loadedFnName, true);
				}, opt.time);
			});
		},
		_loadComplete: function(m) {}
	});
	var PageLoader = new Clz(Loader);
	PageLoader.include({
		init: function(opt) {
			var self = this;
			self.setOpt(opt);
			self.getData();
		},
		setOpt: function(opt) {
			var self = this;
			self.opt = self.opt || {
				api: 'http://interest.mix.sina.com.cn/api/cate/get',
				type: '',
				listNum: 10,
				pageNum: 10,
				handleData: function() {},
				loadComplete: function() {},
				pageComplete: function() {},
				time: 3e3,
				error: function(msg) {}
			};
			var selfOpt = self.opt;
			if (opt || '') {
				selfOpt = Util.extend(selfOpt, opt, true);
			}
		},
		_loadComplete: function(m) {
			var dataHandled = this.opt.handleData(m);
			if (typeof dataHandled !== 'undefined' && dataHandled) {
				m = dataHandled;
			}
			m = Util.app.filterRepeated(m);
			Util.log('自定义处理后的数据');
			Util.log(dataHandled);
			this.page(m);
		},
		page: function(d) {
			Util.log('分页前原数据：');
			Util.log(d);
			var getNumObjByCate = function(total, percent) {
				var numObj = {};
				var num = 0;
				for (var i in percent) {
					var itemNum = Math.round(percent[i] * total);
					itemNum = itemNum > 0 ? itemNum : 1;
					numObj[i] = itemNum;
					num = num + itemNum;
				}
				var diff = num - total;
				for (var i = diff; 0 < i; i--) {
					for (var j in numObj) {
						var item = numObj[j];
						if (item > 1) {
							numObj[j] = item - 1;
							break;
						}
					}
				};
				return numObj;
			};
			var addType = function(data, cate) {
				var d = [];
				var url = encodeURIComponent(location.href);
				var getType = function(url) {
					var types = {
						'blog': '',
						'video': '',
						'slide': ''
					};
					var type = url.split('.')[0].split('//')[1];
					if (url.indexOf('http://you.video') != -1) {
						type = 'video';
					}
					return (type in types) ? type : 'news';
				};
				for (var i = 0; i < data.length; i++) {
					var item = data[i];
					var itemUrl = item.url;
					item.cate = cate;
					item.type = getType(itemUrl);
					d.push(item);
				};
				return d;
			};
			var getAllPageArrByCate = function(listNum, data, all, cates, pageNum) {
				var allPageArr = [];
				var CUSTOMATTR = '__SlicestartpoS__';
				var getStartPos = function(a) {
					return a[CUSTOMATTR] ? a[CUSTOMATTR] : 0;
				};
				var setStartPos = function(a, n) {
					a[CUSTOMATTR] = n;
				};
				var cateArr = (function() {
					var a = [];
					var sa = [];
					for (var i in cates) {
						a.push({
							id: i,
							num: cates[i]
						});
					};
					sa = a.sort(function(a, b) {
						var aPer = cateObj[a.num];
						var bPer = cateObj[b.num];
						if (aPer !== bPer) {
							return bPer - aPer;
						} else {
							return parseInt(b.id) - parseInt(a.id);
						}
					});
					return sa;
				})();
				var getDataArr = function(a, n) {
					var sliceData = [];
					var startPos = getStartPos(a);
					var endPos = startPos + n;
					setStartPos(a, endPos);
					sliceData = a.slice(startPos, endPos);
					return sliceData;
				};
				var getOtherData = function(n) {
					var sliceData = [];
					for (var i = 0, len = cateArr.length; i < len; i++) {
						var cate = cateArr[i].id;
						var cateNum = cates[cate];
						var cateData = data[cate];
						var sliceOtherData = getDataArr(cateData, n - sliceData.length);
						sliceData = sliceData.concat(sliceOtherData);
						if (sliceData.length == n) {
							break;
						}
					}
					if (sliceData.length < n) {
						sliceOtherData = getDataArr(all, n - sliceData.length);
						sliceData = sliceData.concat(sliceOtherData);
					}
					return sliceData;
				};
				var getPageArrByCate = function() {
					var pageArr = [];
					var sliceOtherData = [];
					for (var i = 0, len = cateArr.length; i < len; i++) {
						var cate = cateArr[i].id;
						var cateNum = cates[cate];
						var cateData = data[cate];
						var sliceData = getDataArr(cateData, cateNum);
						if (sliceData.length < cateNum) {
							sliceOtherData = getOtherData(cateNum - sliceData.length);
							sliceData = sliceData.concat(sliceOtherData);
						}
						pageArr = pageArr.concat(sliceData);
					}
					if (pageArr.length < listNum) {
						sliceOtherData = getOtherData(listNum - pageArr.length);
						pageArr = pageArr.concat(sliceOtherData);
					}
					return pageArr;
				};
				for (var i = 0; i < pageNum; i++) {
					var hasDefault = (function() {
						var startPos = getStartPos(all);
						return startPos < all.length;
					})();
					allPageArr.push(getPageArrByCate());
				};
				return allPageArr;
			};
			var self = this;
			var opt = self.opt;
			var listNum = opt.listNum;
			var pageNum = opt.pageNum;
			var pageData = [];
			var result = d.result;
			var cateObj = result.cate;
			var numObjByCate = getNumObjByCate(listNum, cateObj);
			Util.log('各兴趣栏目每页条数：', numObjByCate);
			var url = encodeURIComponent(location.href);
			var all = [];
			var data = {};
			var init = function() {
				pageData = getAllPageArrByCate(listNum, data, all, numObjByCate, pageNum);
				self.opt.pageComplete(pageData);
				Util.log('分页后数据：');
				Util.log(pageData);
			};
			Util.app.filter([], function(fAll, msg) {
				all = addType(result.all, 'all');
				var fData = {};
				var oData = result.data;
				var item = [];
				var index = 0;
				for (var i in oData) {
					item = oData[i];
					if (msg == 'timeout') {
						fData[i] = item;
						data[i] = addType(item, i);
					} else {
						Util.app.filter(item, function(fItem) {
							fData[i] = fItem;
							data[i] = addType(fItem, i);
						});
					}
				}
				init();
			});
		}
	});
	var Recommender = {};
	Recommender.register = function(namespace, method) {
		var i = 0,
			un = Recommender,
			ns = namespace.split('.'),
			len = ns.length,
			upp = len - 1,
			key;
		while (i < len) {
			key = ns[i];
			if (i == upp) {
				if (un[key] !== undefined) {
					throw ns + ':: has registered';
				}
				un[key] = method;
			}
			if (un[key] === undefined) {
				un[key] = {}
			}
			un = un[key];
			i++;
		}
	};
	Recommender.register('util', Util);
	Recommender.register('Clz', Clz);
	Recommender.register('Loader', Loader);
	Recommender.register('PageLoader', PageLoader);
	var EXPORTS_NAME = 'SinaRecommender';
	var UGLIFY_NAME = '___' + EXPORTS_NAME + '___';
	exports[UGLIFY_NAME] = Recommender;
	if (exports[EXPORTS_NAME]) {
		throw '个性化推荐全局变量名"' + EXPORTS_NAME + '"已经被占用，可使用' + UGLIFY_NAME;
	} else {
		exports[EXPORTS_NAME] = Recommender;
	}
})(window);;
(function(exports) {
	var UGLIFY_NAME = '___SinaRecommender___';
	var Recommender = exports[UGLIFY_NAME];
	var Util = Recommender.util;
	var RecommendRender = new Util.Clz;
	var sudaTrack = function(key, val) {
		try {
			_S_uaTrack(key, val);
		} catch (e) {}
	};
	RecommendRender.include({
		init: function(id, opt) {
			var self = this;
			var wrap = Util.byId(id);
			if (!wrap) {
				return;
			}
			self.wrap = wrap;
			self.setStat();
			self.setOpt(opt);
			self.loadData();
		},
		setOpt: function(opt) {
			var self = this;
			self.opt = self.opt || {
				api: 'http://interest.mix.sina.com.cn/api/?s=interest_v2&a=get',
				type: 'slide',
				listNum: 5,
				pageNum: 4,
				itemNum: 16,
				sudaType: 'guess',
				addData: function(data) {
					return data;
				},
				scroll: {
					list: 'SI_Scroll_Guess_List',
					prev: 'SI_Scroll_Guess_Prev',
					next: 'SI_Scroll_Guess_Next',
					dots: 'SI_Scroll_Guess_Dots',
					autoPlay: true,
					width: 1000,
					speed: 10
				}
			};
			var selfOpt = self.opt;
			if (opt || '') {
				selfOpt = Util.extend(selfOpt, opt, true);
			}
		},
		setStat: function() {
			var self = this;
		},
		loadData: function() {
			var self = this;
			var opt = self.opt;
			var pageComplete = function(data) {
				self.render(self, data);
			}
			self.loader = new window.SinaRecommender.PageLoader({
				api: opt.api,
				type: opt.type,
				listNum: opt.listNum,
				pageNum: opt.pageNum,
				handleData: function(data) {
					var r = self.handleData(self, data);
					Util.log(r);
					return r;
				},
				pageComplete: pageComplete,
				error: function(msg) {}
			});
		},
		handleData: function(self, m) {
			var isTimeout = function(date) {
				var DATE = '1365436800000';
				date = date.replace(/-/g, '/');
				date = Date.parse(date);
				return date - DATE < 0;
			};
			opt = self.opt;
			var result = m.result;
			var data = result.data || [];
			data = opt.addData(data);
			var newAll = [];
			var d = {};
			d.all = result.all || result['default'];
			if (!d.all) {
				d.all = [];
				for (var i = 0, len = data.length; i < len; i++) {
					var item = data[i];
					item.thumb = item.ext2 || item.thumb;
					if (item.thumb && item.create_date && !isTimeout(item.create_date)) {
						item.thumb = item.thumb.replace('_t160/', '_t198/');
						newAll.push(item);
					}
				}
				d.all = newAll;
				data = [];
			}
			d.cate = {
				0: 1
			};
			d.data = {
				0: data
			};
			return {
				result: d
			};
		},
		render: function(self, pageData) {
			opt = self.opt;
			var itemLen = opt.itemNum;
			var render = function(data) {
				var html = '';
				var hasAD = (function() {
					var ad = 0;
					if (window.epidiaAdValid && typeof epidiaAdValid == 'function') {
						try {
							ad = epidiaAdValid(epidiaAdResource.end);
						} catch (e) {}
					}
					if (window.PAGE && PAGE.hasEndAD) {
						ad = PAGE.hasEndAD;
					}
					return ad ? 1 : 0;
				})();
				var sudaValSuffix = 'widthout_ad';
				var sudaClick = 'key=new_photo_stats&value=' + opt.sudaType + '_click_';
				if (hasAD) {
					sudaValSuffix = 'width_ad';
				}
				sudaClick += sudaValSuffix;
				var adIndex = 1;
				for (var i = 0, len = data.length; i < len; i++) {
					var page = data[i];
					if (page.length < opt.listNum) {
						break;
					}
					var pageHtml = '';
					for (var j = 0, pageLen = page.length; j < pageLen; j++) {
						var item = page[j];
						var title = item.title;
						var adSudaClick = '';
						if (item.isAD) {
							adSudaClick = 'key=new_photo_stats&value=mt' + adIndex;
							adIndex++;
						}
						var shortTitle = Util.strLeft2(title, itemLen * 2);
						pageHtml += '<div recommend-type="item" class="recommend-scroll-item">' +
							'<a title="' + title + '" href="' + item.url + '" target="_blank"  suda-uatrack="' + (adSudaClick || sudaClick) + '">' +
							'<span class="pic"><img src="http://s.img.mix.sina.com.cn/auto/resize?face=0&size=198_132&img=' + window.encodeURIComponent(item.thumb) + '" /><i></i></span>' +
							'<span class="txt">' + shortTitle + '</span>' +
							'</a>' +
							'</div>';
					};
					html += pageHtml;
					sudaTrack('new_photo_stats', 'new0_pageview0_' + sudaValSuffix);
				};
				return html;
			}
			self.wrap.innerHTML = render(pageData);
			self.scrollpic();
		},
		scrollpic: function() {
			var self = this;
			var sOpt = self.opt.scroll;
			Util.log(sOpt);
			var FS = new ScrollPic();
			self.scroll = FS;
			FS.scrollContId = sOpt.list;
			FS.dotListId = sOpt.dots;
			FS.dotClassName = "";
			FS.dotOnClassName = "current";
			FS.arrLeftId = sOpt.prev;
			FS.arrRightId = sOpt.next;
			FS.listType = "";
			FS.listEvent = "onmouseover";
			FS.frameWidth = sOpt.width;
			FS.pageWidth = sOpt.width;
			FS.upright = false;
			FS.speed = 10;
			FS.space = 40;
			FS.autoPlay = sOpt.autoPlay;
			FS.autoPlayTime = 5;
			FS.circularly = true;
			FS.initialize();
			Util.byId(sOpt.prev).onmousedown = function() {
				FS.pre();
				return false;
			}
			Util.byId(sOpt.next).onmousedown = function() {
				FS.next();
				return false;
			}
			var sudaType = 'ai';
			if (self.opt.sudaType == 'public') {
				sudaType = 'pop';
			}
			Util.bindEvent(Util.byId(sOpt.dots), 'mouseover', function(event) {
				var tar = event.target || event.srcElement;
				if (tar.tagName.toLowerCase() == 'span') {
					sudaTrack('new_photo_stats', sudaType + '_point_change');
				}
			});
		}
	});
	Recommender.register('slide.render', RecommendRender);
})(window);;
(function(exports) {
	var UGLIFY_NAME = '___SinaRecommender___';
	var Recommender = exports[UGLIFY_NAME];
	var Util = Recommender.util;
	var Tab = new Util.Clz;
	Tab.include({
		init: function(id, opt) {
			this.opt = opt || {
				selected: function(index) {}
			};
			this.getDom(id)
				.bindEvent();
		},
		getDom: function(id) {
			var wrap = Util.byId(id);
			if (!wrap) {
				return;
			}
			this.dom = Util.builder(wrap, 'tab-type');
			return this;
		},
		bindEvent: function() {
			var self = this;
			var dom = self.dom.list;
			var navs = dom.nav;
			var conts = dom.cont;
			var eventType = 'mouseover';
			var hasTouch = (typeof(window.ontouchstart) !== 'undefined');
			if (hasTouch) {
				eventType = 'touchstart';
			}
			var hideCurrent = function() {
				var moveClz = function(node) {
					node.setAttribute('tab-stat', '');
					node.className = node.className.replace('current', '');
				};
				var curs = self.getCurrent();
				moveClz(curs.nav);
				moveClz(curs.cont);
				curs.cont.style.display = 'none';
			};
			var showNext = function(nav, cont, index) {
				var addClz = function(node) {
					node.setAttribute('tab-stat', 'current');
					node.className = node.className.replace(' ', '') + ' current';
				};
				addClz(nav);
				addClz(cont);
				cont.style.display = '';
				self.opt.selected(index);
			};
			for (var i = 0, len = navs.length; i < len; i++) {
				(function(_i) {
					Util.bindEvent(navs[_i], eventType, function() {
						hideCurrent();
						showNext(navs[_i], conts[_i], i);
					});
				})(i);
			};
		},
		getCurrent: function() {
			var wrap = this.dom.box;
			var curs = Util.byAttr(wrap, 'tab-stat', 'current');
			return {
				nav: curs[0],
				cont: curs[1]
			}
		}
	});
	Recommender.register('slide.tab', Tab);
})(window);

;
(function(exports) {
	var UGLIFY_NAME = '___SinaRecommender___';
	var Recommender = exports[UGLIFY_NAME];
	var Loader = Recommender.Loader;
	var Util = Recommender.util;
	var NewRecommendRender = new Util.Clz;
	var sudaTrack = function(key, val) {
		try {
			_S_uaTrack(key, val);
		} catch (e) {}
	};
	NewRecommendRender.include({
		init: function(id, opt) {
			var self = this;
			var wrap = Util.byId(id);
			if (!wrap) {
				return;
			}
			self.wrap = wrap;
			self.setStat();
			self.setOpt(opt);
			self.loadData();
		},
		setOpt: function(opt) {
			var self = this;
			self.opt = self.opt || {
				api: 'http://interest.mix.sina.com.cn/api/?s=interest_v2&a=get',
				backUpApi: 'http://cre.mix.sina.com.cn/top/news?cateid=t_s&offset=0&length=54',
				type: 'slide',
				listNum: 5,
				pageNum: 4,
				itemNum: 16,
				sudaType: 'guess',
				addData: function(data) {
					return data;
				},
				scroll: {
					list: 'SI_Scroll_Guess_List',
					prev: 'SI_Scroll_Guess_Prev',
					next: 'SI_Scroll_Guess_Next',
					dots: 'SI_Scroll_Guess_Dots',
					autoPlay: true,
					width: 1000,
					speed: 10
				}
			};
			var selfOpt = self.opt;
			if (opt || '') {
				selfOpt = Util.extend(selfOpt, opt, true);
			}
		},
		setStat: function() {
			var self = this;
		},
		loadData: function() {
			var self = this;
			var opt = self.opt;
			new Loader({
				api: opt.api,
				type: false,
				listNum: opt.listNum,
				pageNum: opt.pageNum,
				loadComplete: function(data) {
					self.render(self.handleData(data));
				},
				time:5e3,
				error:function(info){
					if(info.type === 'timeout'){
						new Loader({
							api: opt.backUpApi,
							loadComplete: function(data) {
								var newData = {};
								newData.status = {
									code: 0
								};
								newData.data = data;
								self.render(self.handleData(newData));
							},
							error:function(info){

							}
						});
					}
				}
			});
		},
		handleData: function(m) {
			var newData = [];
			if (m.status && m.status.code == 0 && m.data) {
				if (m.data == undefined || m.data.length == 0) {
					m.data = [];
				}
			}
			if(SLIDE_DATA && typeof(SLIDE_DATA.recommenderFilter) === 'function'){
				newData = SLIDE_DATA.recommenderFilter(m.data);
				if(Util.isArray(newData)){
					m.data = newData;
				}
			}
            if(this.opt && this.opt.addData){
                return this.opt.addData(m.data);
            }
			return m.data;
		},
		render: function(pageData) {
			// listNum每页数，pageNum页数
			var arraySlice = function(data,listNum,pageNum){
	            var len = data.length, index = 0,to,i,pages = [];
	            pageNum = pageNum||Infinity;
	            listNum = listNum||len;
	            for (i = 0; i < pageNum; i++) {
	                to = index + listNum;
	                if(to>len){
	                    break;
	                }
	                pages.push(data.slice(index, to));
	                index += listNum;
	            }
	            return pages;
	        };
	        var self = this;
	        opt = self.opt;
	        var newPageData = arraySlice(pageData,opt.listNum,opt.pageNum);

			pageData = newPageData;

			var itemLen = opt.itemNum;
			$.ajax({
					url: 'http://interface.sina.cn/news/2017.photo.sohu.d.json',
					type: 'get',
					dataType: 'jsonp',
					success:function(resData) {
						var render = function(data) {
									var html = '';
									var hasAD = (function() {
										var ad = 0;
										if (window.epidiaAdValid && typeof epidiaAdValid == 'function') {
											try {
												ad = epidiaAdValid(epidiaAdResource.end);
											} catch (e) {}
										}
										if (window.PAGE && PAGE.hasEndAD) {
											ad = PAGE.hasEndAD;
										}
										return ad ? 1 : 0;
									})();
									var sudaValSuffix = 'widthout_ad';
									var sudaClick = 'key=new_photo_stats&value=new1_' + opt.sudaType + '_click_';
									var sudaClick1="key=news_sohuhl&value=slide-recommend-";
									if (hasAD) {
										sudaValSuffix = 'width_ad';
									}
									sudaClick += sudaValSuffix;
									var adIndex = 1;
									var sohuD;
									if(resData.status.code==0){
										sohuD=resData.data;
									}
									for (var i = 0, len = data.length; i < len; i++) {
										var page = data[i];
										if (page.length < opt.listNum) {
											break;
										}
										var pageHtml = '';
										if(sohuD&&sohuD[i+1]){
											page[0]=sohuD[i+1];
											//console.log(page[0]);
										}
										for (var j = 0, pageLen = page.length; j < pageLen; j++) {
											var item = page[j];
											var title = item.stitle || item.title;
											var adSudaClick = '';
											if (item.isAD) {
												adSudaClick = 'key=new_photo_stats&value=new1_mt' + adIndex;
												adIndex++;
											}

											var shortTitle = Util.strLeft2(title, itemLen * 2);
											if(sohuD&&sohuD[i+1]&&j==0){
													//page[0]=sohuD[i];
													adSudaClick=sudaClick1+(i+1);
													pageHtml += '<div recommend-type="item" class="recommend-scroll-item">' +
												'<a title="' + title + '" href="' + item.url + '" target="_blank"  suda-uatrack="' + adSudaClick + '">' +
												'<span class="pic"><img src="' +item.pic + '" /><i></i></span>' +
												'<span class="txt">' + shortTitle + '</span>' +
												'</a>' +
												'</div>';
											}else{
													pageHtml += '<div recommend-type="item" class="recommend-scroll-item">' +
													'<a title="' + title + '" href="' + item.url + '" target="_blank"  suda-uatrack="' + (adSudaClick || sudaClick) + '">' +
													'<span class="pic"><img src="http://s.img.mix.sina.com.cn/auto/resize?face=0&size=198_132&img=' + window.encodeURIComponent(item.thumb) + '" /><i></i></span>' +
													'<span class="txt">' + shortTitle + '</span>' +
													'</a>' +
													'</div>';
											};
											}

									html += pageHtml;
									sudaTrack('new_photo_stats', 'new1_pageview1_' + sudaValSuffix);
								};
									return html;

						}
						self.wrap.innerHTML = render(pageData);
						self.scrollpic();
					}
				});


		},
		scrollpic: function() {
			var self = this;
			var sOpt = self.opt.scroll;
			Util.log('滚动图片配置：');
			Util.log(sOpt);
			var FS = new ScrollPic();
			self.scroll = FS;
			FS.scrollContId = sOpt.list;
			FS.dotListId = sOpt.dots;
			FS.dotClassName = "";
			FS.dotOnClassName = "current";
			FS.arrLeftId = sOpt.prev;
			FS.arrRightId = sOpt.next;
			FS.listType = "";
			FS.listEvent = "onmouseover";
			FS.frameWidth = sOpt.width;
			FS.pageWidth = sOpt.width;
			FS.upright = false;
			FS.speed = 10;
			FS.space = 40;
			FS.autoPlay = sOpt.autoPlay;
			FS.autoPlayTime = 5;
			FS.circularly = true;
			FS.initialize();
			Util.byId(sOpt.prev).onmousedown = function() {
				FS.pre();
				return false;
			}
			Util.byId(sOpt.next).onmousedown = function() {
				FS.next();
				return false;
			}
			var sudaType = 'ai';
			if (self.opt.sudaType == 'public') {
				sudaType = 'pop';
			}
			Util.bindEvent(Util.byId(sOpt.dots), 'mouseover', function(event) {
				var tar = event.target || event.srcElement;
				if (tar.tagName.toLowerCase() == 'span') {
					sudaTrack('new_photo_stats', sudaType + '_point_change');
				}
			});
			if(SLIDE_DATA&&typeof SLIDE_DATA.recommenderReady === 'function'){
				SLIDE_DATA.recommenderReady(Util.byId(sOpt.list));
			}
		}
	});
	Recommender.register('slide.newrender', NewRecommendRender);
})(window);;
(function(exports) {
	var UGLIFY_NAME = '___SinaRecommender___';
	var Recommender = exports[UGLIFY_NAME];
	var Util = Recommender.util;
	var Tab = Recommender.slide.tab;
	var RecommendRender = Recommender.slide.render;
	var NewRecommendRender = Recommender.slide.newrender;
	var init = function(hasAD) {
		var getConfig = function(id) {
			var wrap = Util.byId(id);
			if (!wrap) {
				return {};
			}
			var config = wrap.getAttribute('data-recommender');
			config = Util.queryToJson(config);
			config.itemlen = parseInt(config.itemlen || 16, 10);
			config.pagelen = parseInt(config.pagelen || 3, 10);
			config.listlen = parseInt(config.listlen || 4, 10);
			config.width = parseInt(config.width || 1000, 10);
			Util.log(id + '的配置为：');
			Util.log(config);
			return config;
		};
		var guessConfig = getConfig('SI_Scroll_Guess_List');
		var viewConfig = getConfig('SI_Scroll_View_List');
		var hotConfig = getConfig('SI_Scroll_Hot_List');
		var type = 'slide';
		var GuessRender = new NewRecommendRender('SI_Scroll_Guess_List', {
			api: 'http://cre.mix.sina.com.cn/api/v3/get?oe=gb2312&statics=1&this_page=1&length='+(guessConfig.pagelen*guessConfig.listlen)+'&type=1&cateid=t_s&fields=url,title,thumb,stitle&cre=picpagepc&mod=picg&merge=3&statics=1',
			sudaType: 'guess',
			listNum: guessConfig.listlen,
			pageNum: guessConfig.pagelen,
			itemNum: guessConfig.itemlen,
			scroll: {
				list: 'SI_Scroll_Guess_List',
				prev: 'SI_Scroll_Guess_Prev',
				next: 'SI_Scroll_Guess_Next',
				dots: 'SI_Scroll_Guess_Dots',
				autoPlay: true,
				width: guessConfig.width,
				speed: 10
			}
		});
		hasAD = hasAD || false;
		var viewWrap = Util.byId('SI_Scroll_View_Wrap');
		if (!viewWrap) {
			return;
		}
		if (hasAD) {
			viewWrap.style.display = 'none';
			Util.log('-----------------------------------有广告---------------------------------');
			return;
		}
		viewWrap.style.display = 'block';
		var itSelf = viewConfig.url;
		if (typeof itSelf === 'undefined' || !itSelf) {
			itSelf = (location.href.split('.html')[0]) + '.html';
			if (itSelf.indexOf('http://dc.sina.com.cn/') != -1) {
				itSelf = 'http://slide.ent.sina.com.cn/star/slide_4_704_51575.html';
			}
		}
		itSelf = encodeURIComponent(itSelf);
		var ViewRender = new NewRecommendRender('SI_Scroll_View_List', {
            api: 'http://cre.mix.sina.com.cn/api/v3/get?pageurl='+itSelf+'&this_page=1&length='+(viewConfig.pagelen*viewConfig.listlen)+'&cateid=t_s&cre=picpagepc&mod=photo&merge=3&statics=1',
			// api: 'http://cre.mix.sina.com.cn/api/news/related?pageurl='+itSelf+'&this_page=1&length='+(viewConfig.pagelen*viewConfig.listlen)+'&type=2&cre=picpagepc&mod=photo&merge=3&statics=1',
			sudaType: 'public',
			listNum: viewConfig.listlen,
			pageNum: viewConfig.pagelen,
			itemNum: viewConfig.itemlen,
			addData: function(data) {
				var firstpics = [];
				try {
					firstpics = eval(viewConfig.firstpics);
				} catch (e) {}
				if (typeof firstpics != 'undefined' && Util.isArray(firstpics)) {
					firstpics = (function(arr) {
						var data = [];
						for (var i = 0, len = arr.length; i < len; i++) {
							var item = arr[i];
							item.isAD = 1;
							data.push(item);
						}
						return data;
					})(firstpics);
					data = firstpics.concat(data);
				}
				return data;
			},
			scroll: {
				list: 'SI_Scroll_View_List',
				prev: 'SI_Scroll_View_Prev',
				next: 'SI_Scroll_View_Next',
				dots: 'SI_Scroll_View_Dots',
				autoPlay: true,
				width: viewConfig.width,
				speed: 10
			}
		});
	};
	Recommender.register('slide.render.init', init);
})(window);