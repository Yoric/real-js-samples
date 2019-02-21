(function () { "use strict"; var doT = { name: "doT", version: "1.1.1", templateSettings: { evaluate:    /\{\{([\s\S]+?(\}?)+)\}\}/g, interpolate: /\{\{=([\s\S]+?)\}\}/g, encode:      /\{\{!([\s\S]+?)\}\}/g, use:         /\{\{#([\s\S]+?)\}\}/g, useParams:   /(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g, define:      /\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g, defineParams:/^\s*([\w$]+):([\s\S]+)/, conditional: /\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g, iterate:     /\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g, varname:	"it", strip:		true, append:		true, selfcontained: false, doNotSkipEncoded: false }, template: undefined, compile:  undefined, log: true }, _globals; doT.encodeHTMLSource = function(doNotSkipEncoded) { var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "/": "&#47;" }, matchHTML = doNotSkipEncoded ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g; return function(code) { return code ? code.toString().replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : ""; }; }; _globals = (function(){ return this || (0,eval)("this"); }()); if (typeof module !== "undefined" && module.exports) { module.exports = doT; } else if (typeof define === "function" && define.amd) { define(function(){return doT;}); } else { _globals.doT = doT; } var startend = { append: { start: "'+(",      end: ")+'",      startencode: "'+encodeHTML(" }, split:  { start: "';out+=(", end: ");out+='", startencode: "';out+=encodeHTML(" } }, skip = /$^/; function resolveDefs(c, block, def) { return ((typeof block === "string") ? block : block.toString()) .replace(c.define || skip, function(m, code, assign, value) { if (code.indexOf("def.") === 0) { code = code.substring(4); } if (!(code in def)) { if (assign === ":") { if (c.defineParams) value.replace(c.defineParams, function(m, param, v) { def[code] = {arg: param, text: v}; }); if (!(code in def)) def[code]= value; } else { new Function("def", "def['"+code+"']=" + value)(def); } } return ""; }) .replace(c.use || skip, function(m, code) { if (c.useParams) code = code.replace(c.useParams, function(m, s, d, param) { if (def[d] && def[d].arg && param) { var rw = (d+":"+param).replace(/'|\\/g, "_"); def.__exp = def.__exp || {}; def.__exp[rw] = def[d].text.replace(new RegExp("(^|[^\\w$])" + def[d].arg + "([^\\w$])", "g"), "$1" + param + "$2"); return s + "def.__exp['"+rw+"']"; } }); var v = new Function("def", "return " + code)(def); return v ? resolveDefs(c, v, def) : v; }); } function unescape(code) { return code.replace(/\\('|\\)/g, "$1").replace(/[\r\t\n]/g, " "); } doT.template = function(tmpl, c, def) { c = c || doT.templateSettings; var cse = c.append ? startend.append : startend.split, needhtmlencode, sid = 0, indv, str  = (c.use || c.define) ? resolveDefs(c, tmpl, def || {}) : tmpl; str = ("var out='" + (c.strip ? str.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g," ") .replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g,""): str) .replace(/'|\\/g, "\\$&") .replace(c.interpolate || skip, function(m, code) { return cse.start + unescape(code) + cse.end; }) .replace(c.encode || skip, function(m, code) { needhtmlencode = true; return cse.startencode + unescape(code) + cse.end; }) .replace(c.conditional || skip, function(m, elsecase, code) { return elsecase ? (code ? "';}else if(" + unescape(code) + "){out+='" : "';}else{out+='") : (code ? "';if(" + unescape(code) + "){out+='" : "';}out+='"); }) .replace(c.iterate || skip, function(m, iterate, vname, iname) { if (!iterate) return "';} } out+='"; sid+=1; indv=iname || "i"+sid; iterate=unescape(iterate); return "';var arr"+sid+"="+iterate+";if(arr"+sid+"){var "+vname+","+indv+"=-1,l"+sid+"=arr"+sid+".length-1;while("+indv+"<l"+sid+"){" +vname+"=arr"+sid+"["+indv+"+=1];out+='"; }) .replace(c.evaluate || skip, function(m, code) { return "';" + unescape(code) + "out+='"; }) + "';return out;") .replace(/\n/g, "\\n").replace(/\t/g, '\\t').replace(/\r/g, "\\r") .replace(/(\s|;|\}|^|\{)out\+='';/g, '$1').replace(/\+''/g, ""); if (needhtmlencode) { if (!c.selfcontained && _globals && !_globals._encodeHTML) _globals._encodeHTML = doT.encodeHTMLSource(c.doNotSkipEncoded); str = "var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : (" + doT.encodeHTMLSource.toString() + "(" + (c.doNotSkipEncoded || '') + "));" + str; } try { return new Function(c.varname, str); } catch (e) { if (typeof console !== "undefined") console.log("Could not create a template function: " + str); throw e; } }; doT.compile = function(tmpl, def) { return doT.template(tmpl, null, def); }; }()); 
doT.templateSettings = { 
    evaluate:    /\@\@([\s\S]+?)\$\$/g, 
    interpolate: /\@\@=([\s\S]+?)\$\$/g, 
    encode:      /\@\@!([\s\S]+?)\$\$/g, 
    use:         /\@\@#([\s\S]+?)\$\$/g, 
    define:      /\@\@##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\$\$/g, 
    conditional: /\@\@\?(\?)?\s*([\s\S]*?)\s*\$\$/g, 
    iterate:     /\@\@~\s*(?:\$\$|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\$\$)/g, 
    varname: 'it', 
    strip: true, 
    append: true, 
    selfcontained: false 
};
var __TPL__VISITED = '<div class="my-visited-wrap">\
                        <div class="my-visited-list">\
                            <div class="my-visited-head">\
                                <span class="my-col-1">股票简称</span>\
                                <span class="my-col-2">最新价</span>\
                                <span class="my-col-3">涨跌幅</span>\
                            </div>\
                            @@?it.vlist.length$$\
                            <div class="my-visited-body">\
                                @@~it.vlist:value:index$$\
                                <div class="my-visited-item" data-stock="@@=value$$">\
                                    <span class="stock-nameLink my-col-1"></span>\
                                    <span class="stock-price my-col-2"></span>\
                                    <span class="stock-percent my-col-3"></span>\
                                </div>\
                                @@~$$\
                            </div>\
                            @@?$$\
                        </div>\
                        @@?it.hlist.length$$\
                        <div class="my-hot-list">\
                            <div class="my-hot-head">以下为热门股票</div>\
                            <div class="my-hot-body">\
                                @@~it.hlist:value:index$$\
                                <div class="my-hot-item" data-stock="@@=value[0]$$">\
                                    <span class="stock-nameLink my-col-1"></span>\
                                    <span class="stock-price my-col-2"></span>\
                                    <span class="stock-percent my-col-3"></span>\
                                </div>\
                                @@~$$\
                            </div>\
                        </div>\
                        @@?$$\
                    </div>';


var __TPL__MYSTOCK = '<div class="my-stock-wrap">\
                        @@?!it.login$$\
                        <div class="my-stock-login">\
                            <span>您未登录，请先登录</span>\
                            <span class="my-login" ds-tabs-event="login">登录</span>\
                        </div>\
                        @@??it.list.length$$\
                        <div class="my-stock-list">\
                            <div class="my-stock-head">\
                                <span class="my-col-1">股票简称</span>\
                                <span class="my-col-2">最新价</span>\
                                <span class="my-col-3">涨跌幅</span>\
                            </div>\
                            <div class="my-stock-body">\
                                @@~it.list:value:index$$\
                                <div class="my-stock-item" data-stock="@@=value$$">\
                                    <span class="stock-nameLink my-col-1"></span>\
                                    <span class="stock-price my-col-2"></span>\
                                    <span class="stock-percent my-col-3"></span>\
                                </div>\
                                @@~$$\
                            </div>\
                        </div>\
                        @@??$$\
                        <div class="my-stock-empty">\
                            <span>无自选股</span>\
                        </div>\
                        @@?$$\
                    </div>';
if (typeof _MYSTOCK === 'undefined') {
    var _MYSTOCK = {};
}
(function ($) {
    var __tabs__ = {
        init: function () {
            var _tabs = $('.tabs'), _that = this;
            _tabs.each(function (index, obj) {
                if ($(obj).data('init')) {
                    return true;
                }
                var _this = $(obj).data('init', true);
                if ($('.tabs-contsWrap', _this).size() === 0) {
                    _that.creatHtml(_this);
                } else {
                    _this.contWrap = $('.tabs-contsWrap:first', _this);
                }
                _that.tabData(_this);
            })
        },
        creatHtml: function (parent) {
            parent.contWrap = $('<div class="tabs-contsWrap"></div>').appendTo(parent);
            $('.tabs-menu li:not(".disable")', parent).each(function () {
                $('<div class="tabs-cont"></div>').appendTo(parent.contWrap);
            });
        },
        tabData: function (parent) {
            var _menu = $('.tabs-menu:first li:not(".disable")', parent),
                _that = this;
            _menu.each(function (index, obj) {
                var _tabsConts = parent.contWrap.children('.tabs-cont');
                var _tabsCont = _tabsConts.eq(index);
                _tabsCont.html() && $(obj).data('temp', _tabsCont.html());
                var _event = $(obj).attr('ds-tabs-action') || 'click';
                $(obj).data('cont', _tabsCont).data('eventMethod', _event)[_event](function () {
                    var index = $(this).index();
                    _menu.parent().removeClass().addClass('tabs-menu-bg' + index);
                    _menu.removeClass('cur');
                    var that = $(this).addClass('cur');
                    var _action = that.attr('ds-tabs') || '';
                    var _callback = that.attr('data-cb') || '';
                    _tabsConts.hide(0);
                    if (typeof(that.attr('ds-tabs-update')) !== 'undefined') {
                        that.data('loaded', false);
                    }
                    if (!that.data('loaded')) {
                        _that.eventClick(_action, that.data('cont').show(), that);
                    } else {
                        that.data('cont').show(0, function () {
                            _that.eventClick(_callback, that.data('cont'), that, true);
                        });
                    }
                    that.data('loaded', true);
                });
            });
            var _curMenu = _menu.filter('.cur').size() > 0 ? _menu.filter('.cur') : _menu.eq(0);
            _method = _curMenu.data('eventMethod');
            _curMenu.trigger(_method);
        },
        eventClick: function (action, dom, btn, flag) {
            if (!action) return;
            var fun, step, k;
            if (!flag) dom.html($('<div class="my-loading"></div>'));
            if (action.indexOf('|') > 0) {
                fun = action.split('|');
                step = _MYSTOCK;
            } else {
                fun = action.split('.');
                step = window;
            }
            while (k = fun.shift()) {
                if (fun.length) {
                    step = step[k];
                } else {
                    if (step[k] === undefined)
                        return;
                    (typeof step[k] === 'function') && step[k].call(dom, btn);
                }
            }
        }
    };
    _MYSTOCK.tabs = __tabs__;
})(jQuery);
if (typeof _MYSTOCK === 'undefined') {
    var _MYSTOCK = {};
}
//最近访问
(function ($) {

    var Cookie = {
        set: function (k, v, h, d) {
            var hour = h || 24,
                now = new Date(),
                domain = d || document.domain,
                exp = new Date(now.getTime() + hour * 3600 * 1000),
                expires = exp.toGMTString();
            document.cookie = k + '=' + escape(v) + ';path=/;expires=' + expires + ';domain=' + domain;
        },
        get: function (k) {
            var coo = unescape(document.cookie),
                s = coo.indexOf(k + '='),
                kl = s + k.length + 1,
                e = coo.indexOf(';', kl);
            if (s == -1) {
                return '';
            }
            if (e == -1) {
                return coo.substr(kl);
            }
            return coo.slice(kl, e);
        },
        remove: function (k, d) {
            var now = new Date(),
                domain = d || document.domain,
                exp = new Date(now.getTime() - 3600 * 1000),
                expires = exp.toGMTString();
            document.cookie = k + '=;path=/;expires=' + expires + ';domain=' + domain;
        }
    };
    var __visited__ = {
        _cookieKey: 'FINA_V_S_2',
        _maxVisited: 20,
        _data: {
            vlist: [], //最近访问列表
            hlist: [] //热门股票列表
        },
        _max: 6,    //最多显示
        _showHot: true, //显示热门股票
        _visitedList: [], //最近访问列表
        _hotShow: true, //是否显示最热股票
        _hotList: [],
        // add: function () {
        //     Cookie.set('FINA_V_S_2', 'sh601668,sz000018,sz000009,sz000725,sz002230,sz300089,sh601166,sh601313,sz002049,sz000717')
        //     Cookie.set('FINA_V_S_2', 'sh601668,sz000018')
        // },
        init: function () {
            // this.add()
            this.getCookie();
            this.getData();
        },
        list: function (btn) {
            __visited__.rendar(this)
        },
        rendar: function (dom) {
            var _content = doT.template(__TPL__VISITED);
            var _tmp = _content(this._data)
            dom.html(_tmp);
            this.update()
        },
        update: function () {
            window._MYSTOCK && _MYSTOCK.stockData && _MYSTOCK.stockData.update()
        },
        getCookie: function () {
            var _visited = Cookie.get(this._cookieKey) || '';
            _visited = _visited.split(',');
            var _v = [];
            for (var i = 0; i < _visited.length; i++) {
                if (/^s[hz]\d{6}$/.test(_visited[i])) {
                    _v.push(_visited[i]);
                }
            }
            _v.length = Math.min(_v.length, this._max);
            this._visitedList = _v
        },
        _getHotList: function () {
            if (!this._hotShow) return;
            var num = Math.max(this._max - this._visitedList.length - 1, 0);
            this._data.hlist = window.hotstock_daily_a && hotstock_daily_a.slice(0, num) || [];
        },
        getData: function () {
            this._data.vlist = this._visitedList
            if (this._visitedList.length < (this._max - 1)) { //获取最热股票
                this._getHotList();
            }
        }
    };
    __visited__.init();
    _MYSTOCK.visited = __visited__;
})(jQuery);
if (typeof _MYSTOCK === 'undefined') {
    var _MYSTOCK = {};
}
//我的自选
(function ($) {
    var __api__ = '//watchlist.finance.sina.com.cn/portfolio/api/openapi.php/HoldV2Service.getAllPySymbolsList?source=newstock_pc_mzx&type=cn';
    Function.prototype.fnBind || (Function.prototype.fnBind = function (a, b) {
        var c = this;
        return function () {
            var d, e;
            if (b && arguments.length) {
                d = Array.prototype.slice.call(b, 0);
                for (e = 0; e < arguments.length; e++)Array.prototype.push.call(d, arguments[e])
            }
            return c.apply(a || this, d || b || arguments)
        }
    });
    var __stock__ = {
        _dom: null,
        _max: 6,
        _data: {
            list: [],
            login: 0 //默认未登录
        },
        init: function () {
            this.checkLogin();
            this.getList();
        },
        login: function () {
            window.SINA_OUTLOGIN_LAYER && SINA_OUTLOGIN_LAYER.show();
            $('html,body').animate({
                scrollTop: 0
            }, 200)
        },
        rendar: function () {
            var _content = doT.template(__TPL__MYSTOCK);
            var _tmp = _content(this._data)
            this._dom && this._dom.html(_tmp)
            this.update();

        },
        update: function () {
            window._MYSTOCK && _MYSTOCK.stockData && _MYSTOCK.stockData.update()
        },
        checkLogin: function () {
            var _loginStatus = window.SINA_OUTLOGIN_LAYER && SINA_OUTLOGIN_LAYER.isLogin();
            this._data.login = _loginStatus
        },
        getData: function () {
            this.checkLogin();
            if (!this._data.login) {
                this.rendar();
            } else {
                this.getList()
            }

        },
        getList: function () {
            var _this = this;
            $.ajax({
                url: __api__,
                cache: true,
                dataType: 'jsonp',
                scriptCharset: 'gb2312'
            }).done(function (data) {
                _this.format(data.result.data)
                _this.rendar();
            })
        },
        format: function (data) {
            var _data = [];
            var _len = Math.min(this._max, data.length);
            for (var i = 0; i < _len; i++) {
                _data.push(data[i].market + data[i].code)
            }
            this._data.list = _data;
        },
        list: function (btn) { //登录后渲染数据
            if (!window.SINA_OUTLOGIN_LAYER) {
                setTimeout(__stock__.list.fnBind(this, [btn]), 100);
                return;
            }
            var _dom = this;
            __stock__._dom = this;
            __stock__.initEvent()
            __stock__.getData()
        },
        initEvent: function () {
            var _this = this;
            _this._dom.on('click', '[ds-tabs-event]', function () {
                var _action = $(this).attr('ds-tabs-event');
                _action && (typeof _this[_action] === 'function') && _this[_action].call(_this);
            })
        }
    };
    _MYSTOCK.stock = __stock__;
})(jQuery);
/**
 * Created by xuehua1 on 2016/6/2.
 */
(function ($, win) {
    Function.prototype.Bind = function () {
        var __m = this, object = arguments[0], args = new Array()
        for (var i = 1; i < arguments.length; i++) {
            args.push(arguments[i])
        }

        return function () {
            return __m.apply(object, args)
        }
    }
    var version = '1.0.0'
    if (win._MYSTOCK) {
        if (win._MYSTOCK.stock && win._MYSTOCK.stock.version > version) {
            return
        }
    } else {
        win._MYSTOCK = {}
    }
    var __stock__ = {
        _parent: $('body'),
        _hqUrl: '//hq.sinajs.cn/rn=@RN@&list=',
        version: '1.0.0',
        stocklength: 0,
        hqData: {},
        getHqStr: function (dom) {
            var _symbol = dom.attr('data-stock')
            var _str = dom.attr('data-stockstr') || ''
            var _type = _symbol && _symbol.slice(0, 2).toLowerCase()
            if (!dom.attr('data-type')) {
                switch (_type) {
                    case 'sh' :
                    case 'sz' :
                        _str = _symbol
                        dom.attr('data-type', 'cn').data('type', 'cn')
                        break
                    case 'hk' :
                        _str = 'rt_' + _symbol
                        dom.attr('data-type', 'hk').data('type', 'hk')
                        break
                    case 'us' :
                        _str = 'gb_' + _symbol.slice(2).toLowerCase()
                        dom.attr('data-type', 'us').data('type', 'us')
                }
            }
            !dom.attr('data-stockstr') && dom.attr('data-stockstr', _str).data('stockstr', _str)
            return _str
        },
        update: function () {
            var me = this
            me.getHq()
            me._timeout && clearInterval(me._timeout)
            me._timeout = setInterval(function () {
                me.getHq()
            }, 10000)
            // }
        },
        getDoms: function () {
            var me = this
            var stocksObj = this.doms = $('[data-stock]', this._parent);
            me.stocklength = stocksObj.size();
            var _stockStr = me._stockstr = [];
            if (me.stocklength) {
                stocksObj.each(function () {
                    var _it = $(this)
                    var _hqStr = me.getHqStr(_it)
                    _stockStr.push(_hqStr)
                })
                me._url = me._hqUrl.replace('@RN@', (new Date()).getTime()) + _stockStr.join(',')
            }
        },
        getJsData: function (e, d, c) {
            var b = document.createElement('script')
            if (typeof d === 'string') {
                b.charset = d
            }
            b.onreadystatechange = b.onload = function () {
                if (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete') {
                    if (d && typeof d === 'function') {
                        d()
                    }
                    if (c && typeof c === 'function') {
                        c()
                    }
                    b.onreadystatechange = b.onload = null
                    b.parentNode.removeChild(b)
                }
            }
            b.src = e
            document.getElementsByTagName('head')[0].appendChild(b)
        },
        getHq: function () {
            var me = this;
            me.getDoms();
            if (!me.stocklength) return;
            this.getJsData(this._url, function () {
                me.doms.each(function () {
                    var _symbol = $(this).attr('data-stock')
                    var _str = $(this).attr('data-stockstr')
                    var _type = $(this).attr('data-type')
                    if (_str) {
                        var str = window['hq_str_' + _str]
                        if (str) {
                            $(this).show();
                            var sData = str.split(',');
                            var _content = me.parseData(sData, _type, _symbol)
                            me.hqData[_symbol] = _content
                            me.fill($(this), _content)
                        } else {
                            $(this).hide();
                        }
                    }
                })
                setTimeout(me.resetBg.Bind(me), 1000)
            })
        },
        checkHours: function () {
            var date = new Date();
            var hours = date.getHours();
            var minutes = date.getMinutes();
            if (hours == 9 && minutes < 30) {
                return true
            } else {
                return false
            }
        },
        stopHq: function () {
            var me = this
            me._timeout && clearInterval(me._timeout)
        },
        parseData: function (sData, type, symbol) {
            var getPercent = function (l, h, f) {
                f = f || 2;
                h = h * 1;
                if (!h) return '0.00';
                var e = "", k = Math.abs(l);
                (l * 1 > h * 1) && (e = "+");
                var g = ((10000 * (l - h) / h).toFixed(f) / 100).toFixed(f);
                (!k || g == '0.00') && (e = "");
                (!k || g == '-0.00') && (g = "0.00");
                return e + g
            };
            var _a = {
                name: '',
                price: '--',
                percent: '--',
                updown: '',
                zdnum: '--',
                url: '',
                nameLink: ''
            };
            switch (type) {
                case 'cn':
                    var _p = sData[3] * 1 || sData[11] || 0;
                    var _pecent = getPercent(_p, sData[2]);
                    var stockStatus = '';
                    if (sData[32] == "01" || sData[32] == "02" || sData[32] == "03" || sData[32] == "04" || sData[32] == "05") {
                        var q = {
                            "01": "停牌一小时",
                            "02": "停牌一天",
                            "03": "连续停牌",
                            "04": "盘中停牌",
                            "05": "停牌半天",
                            "07": "暂停",
                            "08": "临时停牌",
                            "09": "临时停牌"
                        };
                        stockStatus = q[sData[32]];
                    }
                    _a['name'] = sData[0]
                    _a['price'] = stockStatus ? stockStatus : (_p * 1).toFixed(2);
                    _a['percent'] = getPercent(_p, sData[2]) + '%'
                    _a['updown'] = this.setColorClass(+_pecent)
                    _a['zdnum'] = (_p - sData[2]) > 0 ? '+' + (_p - sData[2]).toFixed(2) : (_p - sData[2]).toFixed(2)
                    _a['url'] = 'http://finance.sina.com.cn/realstock/company/' + symbol + '/nc.shtml'
                    _a['nameLink'] = '<a href="' + _a['url'] + '" target="_blank">' + _a['name'] + '</a>'
                    break
                case 'hk' :
                    var _code = symbol.slice(2).toUpperCase()
                    _a['name'] = sData[1]
                    _a['price'] = sData[6]
                    _a['percent'] = (sData[8] * 1) > 0 ? ['+', sData[8], '%'].join('') : [sData[8], '%'].join('')
                    _a['updown'] = this.setColorClass((sData[7] * 1))
                    _a['zdnum'] = (sData[7] * 1) > 0 ? '+' + sData[7] : sData[7]
                    _a['url'] = 'http://stock.finance.sina.com.cn/hkstock/quotes/' + _code + '.html'
                    _a['nameLink'] = '<a href="' + _a['url'] + '" target="_blank">' + _a['name'] + '</a>'
                    break
                case 'us':
                    var _code = symbol.slice(2).toUpperCase()
                    _a['name'] = sData[0]
                    _a['price'] = (sData[1] * 1).toFixed(2)
                    _a['percent'] = (sData[2] * 1) > 0 ? ['+', (sData[2] * 1).toFixed(2), '%'].join('') : [(sData[2] * 1).toFixed(2), '%'].join('')
                    _a['updown'] = this.setColorClass((sData[2] * 1))
                    _a['zdnum'] = (sData[4] * 1) > 0 ? '+' + (sData[4] * 1).toFixed(2) : (sData[4] * 1).toFixed(2)
                    _a['url'] = 'http://stock.finance.sina.com.cn/usstock/quotes/' + _code + '.html'
                    _a['nameLink'] = '<a href="' + _a['url'] + '" target="_blank">' + _a['name'] + '</a>'
                    break
                case 'bb':
                    var _code = symbol.slice(2).toUpperCase()
                    _a['name'] = sData[0]
                    _a['price'] = sData[1]
                    _a['percent'] = (sData[3] * 1) > 0 ? ['+', sData[3], '%'].join('') : [sData[3], '%'].join('')
                    _a['updown'] = this.setColorClass((sData[2] * 1))
                    _a['zdnum'] = (sData[2] * 1) > 0 ? '+' + sData[2] : sData[2]
                    _a['nameLink'] = _a['name']
                    break
                case 'forex':
                    var _code = symbol
                    var _change = sData[8] - sData[3]
                    _a['name'] = sData[9]
                    _a['price'] = (sData[8] * 1).toFixed(4)
                    _a['percent'] = _change > 0 ? ['+', (_change / sData[3] * 100).toFixed(4), '%'].join('') : [(_change / sData[3] * 100).toFixed(4), '%'].join('')
                    _a['updown'] = this.setColorClass(_change * 1)
                    _a['zdnum'] = (_change * 1) > 0 ? '+' + _change.toFixed(4) : _change.toFixed(4)
                    _a['url'] = 'http://finance.sina.com.cn/money/forex/hq/' + _code + '.shtml'
                    _a['nameLink'] = '<a href="' + _a['url'] + '" target="_blank">' + _a['name'] + '</a>'
                    break
                case 'fu':
                    var _code = symbol.slice(3)
                    var _change = sData[0] - sData[7]
                    _a['name'] = sData[13]
                    _a['price'] = (sData[0] * 1).toFixed(2)
                    _a['percent'] = _change > 0 ? ['+', (_change / sData[7] * 100).toFixed(2), '%'].join('') : [(_change / sData[7] * 100).toFixed(2), '%'].join('')
                    _a['updown'] = this.setColorClass(_change * 1)
                    _a['zdnum'] = (_change * 1) > 0 ? '+' + _change.toFixed(2) : _change.toFixed(2)
                    _a['url'] = 'http://finance.sina.com.cn/futures/quotes/' + _code + '.shtml'
                    _a['nameLink'] = '<a href="' + _a['url'] + '" target="_blank">' + _a['name'] + '</a>'
                    break
            }
            return _a
        },
        setColorClass: function (value) {
            return value != 0 ? (value > 0 ? 'red' : 'green') : ''
        },
        fill: function (dom, content) {
            var priceObj = $('.stock-price', dom)
            var oldPrice = priceObj.text()
            if (!content.price) {
                dom.hide();
            }
            dom.removeClass('red green flat').addClass(content.updown)
            $('.stock-nameLink', dom).html(content.nameLink)
            if (content.url) {
                $('.stock-namelink a', dom).attr('href', content.url).attr('target', '_blank')
            } else {
                $('.stock-namelink', dom).text($('.stock-namelink', dom).attr('data-title') || '');
            }
            $('.stock-name', dom).html(content.name)
            $('.stock-price', dom).html('<span>' + content.price + '</span>')
            $('.stock-zdnum', dom).html('<span>' + content.zdnum + '</span>')
            $('.stock-percent', dom).html('<span>' + content.percent + '</span>')
            // this.flash(dom, oldPrice, content)
        },
        flash: function (dom, oldValue, content) {
            var newValue = content.price
            var _data = newValue,
                _bgColor = (content.updown == 'red') ? 'f_red' : (content.updown == 'green' ? 'f_green' : '')
            if (!dom.size() || !oldValue || !newValue || isNaN(oldValue) || isNaN(newValue)) return
            newValue = 1 * (newValue.replace('%', ''))
            oldValue = 1 * (oldValue.replace('%', ''))
            if (newValue != oldValue) {
                dom.removeClass('f_red f_green').addClass(_bgColor)
            }
        },
        resetBg: function () {
            this.doms.removeClass('f_red f_green')
        }
    }
    win._MYSTOCK.stockData = __stock__
})(jQuery, window)
window._MYSTOCK && _MYSTOCK.tabs && _MYSTOCK.tabs.init()