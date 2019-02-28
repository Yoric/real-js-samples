(function(win){

    //$WDSCONFIG = {}
    //cookie  check用户登陆状态
    //script  WDSTopGlobal

    var WDSTopGlobal = {},
        isdebugger   = 0,
        CONFIG       = null,
        IE           =  /msie/i.test(navigator.userAgent),
        WDS_STORE_PREFIX = 'WDSStore',
        _wv          = 'v3',
        version      = null;
    win['WDSTopGlobal'] = WDSTopGlobal;

    WDSTopGlobal.console = {
        log : function(){
             if(!isdebugger) {
                 return;
             }
             if(window.console && window.console.log) {
                 console.log(arguments);
             }
        }
    };
    //CDN版本号
    WDSTopGlobal.version = function(){
        var cookie = WDSTopGlobal.util.cookie(),
            localVersion = cookie.get(WDS_STORE_PREFIX) || '5555';
        WDSTopGlobal.console.log('cookie.get(WDS_STORE_PREFIX)', cookie.get(WDS_STORE_PREFIX));
        return {
            get : function(){
                //从cookies中获取 cookie -> WDSStore :
                WDSTopGlobal.console.log('cookie' , cookie.get(WDS_STORE_PREFIX));
                return localVersion;
            } ,
            set : function(version){
                var cookie = WDSTopGlobal.util.cookie();
                localVersion = version;
                cookie.set(WDS_STORE_PREFIX, localVersion, {'expire' : 200000000});
            }
        }
    };
    WDSTopGlobal.topInit = function(){
        var loginMini = document.getElementById('WDS_TopNav');
        try {
             this.util.jsonp({
                'url' : CONFIG['topUserInfo'] ,
                'onComplete'  : function(data){

                    if(data && data['data']) {
                        var json      = data;
                        //version.set(json['data']['version']);
                        if(loginMini) {
                            loginMini.innerHTML = json['data']['html'];
                        }
                    }
                },
                args : {
                    // 'uid' : CONFIG['uid']
                }
             });
        }catch(e){ WDSTopGlobal.console.log(e.message);}
    };
    WDSTopGlobal.templ = {
        'top' : function(callback){
            var topTempl = '',
                loginStatus = '';
                if(CONFIG['islogin'] != 1) {
                    //loginStatus = '';
                    loginStatus =
                        '<ul class="WDS_global_nav_ul">'+
                        '   <li>'+
                        '       <a class="sr-js-checkLogin" href="javascript:;">登录</a>'+
                        '       <i class="txt_line">|</i>'+
                        '   </li>'+
                        '   <li>'+
                        '       <a target="_blank" href="http://weibo.com/signup/signup.php">注册</a>'+
                        '       <i class="txt_line">|</i>'+
                        '   </li>'+
                        '   <li>'+
                        '       <a class="sr-js-checkLogin" href="http://book.weibo.com/shop/cart" title="购物车">购物车</a>'+
                        '   </li>'+
                        '</ul>';
                }

            callback && callback();
        }
    };
    WDSTopGlobal.util = {
        cookie: function(){
            var self = this;
            var b = {
              set: function(b, c, d) {
                var e = [], f, g, h = self.extend({expire: null,path: "/",domain: null,secure: null,encode: !0}, d, true);
                  WDSTopGlobal.console.log(h);
                h.encode == !0 && (c = escape(c));
                e.push(b + "=" + c);
                h.path != null && e.push("path=" + h.path);
                h.domain != null && e.push("domain=" + h.domain);
                h.secure != null && e.push(h.secure);
                if (h.expire != null) {
                    f = new Date;
                    g = f.getTime() + h.expire * 36e5;
                    f.setTime(g);
                    e.push("expires=" + f.toGMTString())
                }
                document.cookie = e.join(";")
            },get: function(a) {
                a = a.replace(/([\.\[\]\$])/g, "\\$1");
                var b = new RegExp(a + "=([^;]*)?;", "i"), c = document.cookie + ";", d = c.match(b);
                return d ? d[1] || "" : ""
            },remove: function(a, c) {
                c = c || {};
                c.expire = -10;
                b.set(a, "", c)
            }};
            return b;
        },

        extend : function(target, src, override){
            if(!target) {
                target = {};
            }
            if(src){
                for(var i in src) {
                    if(target[i]===undefined || override) {
                        target[i] = src[i];
                    }
                }
            }
            return target;
        },
        getUniqueKey : (function() {
            var b = (new Date).getTime().toString(), c = 1;
            return function() {
                return b + c++ ;
            }
        })(),
        queryString : function(obj) {
            if(!obj)
                return '';
            var arr = [];
            for(var k in obj){
                var ov = obj[k], k = encodeURIComponent(k);
                var type = typeof ov;
                if(type === 'undefined'){
                    arr.push(k, "=&");
                }else if(type != "function" && type != "object"){
                    arr.push(k, "=", encodeURIComponent(ov), "&");
                }else if(ov instanceof Array){
                    if (ov.length) {
                        for(var i = 0, len = ov.length; i < len; i++) {
                            arr.push(k, "=", encodeURIComponent(ov[i] === undefined ? '' : ov[i]), "&");
                        }
                    } else {
                        arr.push(k, "=&");
                    }
                }else if(type === 'object'){
                    // 例如"extra_params":{"interview_id":"27"}形式
                    for(var kk in ov){
                        arr.push(k,'[',kk,']','=', encodeURIComponent(ov[kk]),'&');
                    }
                }
            }
            arr.pop();
            return arr.join("");
        },
        jsonp : function(opts){
            var self = this, c = self.extend({
                url: "",
                charset: "UTF-8",
                timeout: 3e4,
                args: {},
                onComplete: null,
                onTimeout: null,
                responseName: null,
                isEncode: !1,
                varkey: "callback"}, opts, true), d = -1, e = c.responseName || "STK_" + self.getUniqueKey(),
                f = c.onComplete,
                g = c.onTimeout;
                c.args[c.varkey] = e;
                c.url += '?' + self.queryString(c.args);
            window[e] = function(a) {
                if (d != 2 && f != null) {
                    d = 1;
                    f.call(null, a);
                }
            };
            c.onComplete = null;
            c.onTimeout = function() {
                if (d != 1 && g != null) {
                    d = 2;
                    g();
                }
            };
            return self.scriptLoader(c) ;
        },
        cssLoader : function(opts){
            // css 加载
            var options  = {'charset' : 'utf-8'},
                options  = this.extend(options, opts, true),
                //cssPath  = 'http://static.vmanhua.com/sv{version}/'+_wv+'/css/front/out/';
                href       = options.href,
                fragment = document.createDocumentFragment(),
                headElem = document.getElementsByTagName('head')[0] || document.documentElement ;
                linkElem = document.createElement('link');
                linkElem.setAttribute('rel', 'stylesheet');
                linkElem.setAttribute('type', 'text/css');
                linkElem.setAttribute('charset', options.charset);
                linkElem.setAttribute('href', href);
            //append样式
            fragment.appendChild(linkElem);
            headElem.appendChild(fragment);
            fragment = null;
        },
        scriptLoader : function(opts) {
            //js 加载
            var b = {},
                self = this,
                c = {
                    url: "",
                    charset: "UTF-8",
                    timeout: 30000,
                    version : 0,
                    args : {},
                    type : 'jsonp',
                    onComplete: function(){},
                    onTimeout: function(){},
                    uniqueID: null
                },
                e,
                f,
                g = self.extend(c, opts, true),
                type  = g.type,
                head = document.getElementsByTagName("head")[0];
            if (g.url == "") {
                throw "scriptLoader: url is null";
            }
            var h = g.uniqueID || self.getUniqueKey();
            e = b[h];
            if (e != null && IE != !0) {
                e.parentNode.removeChild(e);
                e = null
            }
            e = document.createElement('script');
            e.charset = g.charset;
            e.id      = "scriptRequest_script_" + h;
            e.type    = "text/javascript";
            IE ? e.onreadystatechange = function() {
                    if (e.readyState.toLowerCase() == "loaded" || e.readyState.toLowerCase() == "complete") {
                        try {
                            clearTimeout(f);
                            head.removeChild(e);
                            e.onreadystatechange = null ;
                        } catch (a) {
                    }
                    !type && g.onComplete();
                }
            } : e.onload = function() {
                    !type && g.onComplete();
                    try {
                        clearTimeout(f);
                        e.parentNode.removeChild(e);
                    } catch (b) {
                }
            };

            e.src = g.version !== 0 ? (jsPath.replace(regVersion, g.version) + g.url) : g.url;
            head.appendChild(e);
            g.timeout > 0 && (f = setTimeout(function() {
                try {
                    head.removeChild(e)
                } catch (a) {}
                g.onTimeout();
            }, g.timeout));
            return e;
        }
    };

    WDSTopGlobal.init = function(cfg){

         //加载样式
         CONFIG = cfg ;
         version = WDSTopGlobal.version();
         //初始微博顶导
         WBtopGlobal && WBtopGlobal.init(CONFIG);
         var curVersion = version.get(),
             topTpl,
             self = this;
             _wv  = CONFIG['_wv'] || _wv; //版本

         this.util.cssLoader({'href' : CONFIG.topCssPath});
         //header
         if(cfg['top'] == 1) {
             WDSTopGlobal.templ.top(function(){
                 self.topInit();
             });
         }
    };
})(window);