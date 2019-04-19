
;(function(win, doc) {
    (function(con) {
        var methods = ['error', 'info', 'log', 'warn'],func;
        for (var i = methods.length - 1; i >= 0; i--) {
            func = methods[i];
            con[func] = con[func] || function(){};
        }
    }(win.console = win.console || {}));
    console = win.console;
    var hasTouch = typeof(window.ontouchstart) === 'undefined';
    var clickType = hasTouch ? 'click' : 'touchstart';
    var hasClass = function(el, clz) {
        if (!el) {
            return false;
        }
        return el.className.match(new RegExp('(\\s|^)' + clz + '(\\s|$)'));
    };
    var addClass = function(el, clz) {
        if (!hasClass(el, clz)) {
            el.className = el.className.replace(/(^\s*)|(\s*$)/g, '') + ' ' + clz;
        }
    };
    var removeClass = function(el, clz) {
        if (hasClass(el, clz)) {
            var reg = new RegExp('(\\s|^)' + clz + '(\\s|$)');
            el.className = el.className.replace(reg, ' ');
        }
    };
    var byAttr = function(node, attname, attvalue) {
        var match = [];
        var item;
        var args = [];
        for (var i = 0, len = node.childNodes.length; i < len; i++) {
            item = node.childNodes[i];
            if (item.nodeType === 1) {
                if (attvalue !== '*') {
                    if (item.getAttribute(attname) === attvalue) {
                        match.push(item);
                    }
                } else {
                    if (item.getAttribute(attname) !== '') {
                        match.push(item);
                    }
                } if (item.childNodes.length > 0) {
                    args = Array.apply(null, arguments);
                    args[0] = item;
                    match = match.concat(arguments.callee.apply(null, args));
                }
            }
        }
        return match;
    };
    var getDom = function(wrap, type) {
        var nodes, dom;
        nodes = byAttr(wrap, type, '*');
        dom = {
            __wrap__: wrap
        };
        for (var i = 0, len = nodes.length; i < len; i++) {
            var j = nodes[i].getAttribute(type);
            if (j) {
                dom[j] || (dom[j] = nodes[i]);
            }
        }
        return dom;
    };
    var contains = function(a, b) {
        try {
            return a.contains ? a != b && a.contains(b) : !!(a.compareDocumentPosition(b) & 16);
        } catch (e) {
            return false;
        }
    };
    var addEvent = (function() {
        var hover = function(e, fun) {
            var t = e.relatedTarget,
                t2 = e.target;
            if (this == t2 && t && !(this.comparedocPosition && this.comparedocPosition(t) == 20)) {
                fun.call(this);
            }
            t = t2 = null;
        };
        var add;
        if (win.addEventListener) {
            add = function(ele, type, fn) {
                if ('on' + type in ele) {
                    ele.addEventListener(type, fn, false);
                } else {
                    if (type === 'mouseenter') {
                        ele.addEventListener('mouseover', function(e) {
                            hover.call(this, e, fn);
                        }, false);
                    } else if (type === 'mouseleave') {
                        ele.addEventListener('mouseout', function(e) {
                            hover.call(this, e, fn);
                        }, false);
                    } else {
                        ele.addEventListener(type, fn, false);
                    }
                }
            };
        } else {
            add = function(ele, type, fn) {
                ele.attachEvent('on' + type, fn);
            };
        }
        return add;
    })();
    var DropDown = (function() {
        var navClz = 'sina-top-bar-nav';
        var showClz = navClz + '-show';
        var timerId = null;
        var show = function() {
            clearTimeout(timerId);
            addClass(dom.nav, showClz);
        };
        var hide = function() {
            clearTimeout(timerId);
            timerId = setTimeout(function() {
                removeClass(dom.nav, showClz);
            }, 300);
        };
        return {
            init: function() {
                addEvent(dom.moreLnk, 'mouseenter', show);
                addEvent(dom.moreLnk, 'mouseleave', hide);
                addEvent(dom.guideLnk, 'mouseenter', show);
                addEvent(dom.guideLnk, 'mouseleave', hide);
                addEvent(dom.sub, 'mouseenter', show);
                addEvent(dom.sub, 'mouseleave', hide);
                addEvent(dom.moreLnk, clickType, show);
                addEvent(dom.guideLnk, clickType, show);
                addEvent(doc.body, clickType, function(e) {
                    e = e || win.event;
                    var target = e.target || e.srcElement;
                    if (!contains(dom.nav, target)) {
                        removeClass(dom.nav, showClz);
                    }
                });
            },
            show: show,
            hide: hide
        };
    })();
    var ScrollFix = (function() {
        var d = doc.documentElement;
        var b = doc.body;
        var wrapClz = 'sina-top-bar-wrap';
        var fixedClz = wrapClz + '-fixed';
        var addSudaClick = function(key){
            try{
                wrap.setAttribute('data-sudaclick',key);
            }catch(e){}
        };
        var fix = function() {
            addClass(wrap, fixedClz);
            addSudaClick('top_channel_2');
        };
        var unfix = function() {
            removeClass(wrap, fixedClz);
            addSudaClick('top_channel_1');
        };
        var toggle = function() {
            if (d.scrollTop + b.scrollTop > 100) {
                fix();
            } else {
                unfix();
            }
        };
        return {
            init: function() {
                addEvent(win, 'scroll', toggle);
                addSudaClick('top_channel_1');
            }
        };
    })();
    var wrap = doc.getElementById('SI_TopBar'),
        dom,
        inited = false;
    var TopBar = {
        init: function(w) {
            if (inited) {
                return;
            }
            wrap = w;
            dom = getDom(wrap, 'top-node-type');
            DropDown.init();
            // ScrollFix.init();
            inited = true;
        },
        getDom: function() {
            return dom;
        },
        hasTouch: hasTouch,
        clickType: clickType,
        showSub: DropDown.show,
        hideSub: DropDown.hide,
        showMain: ScrollFix.fix,
        hideMain: ScrollFix.unfix
    };
    if (wrap && wrap.getAttribute('top-data') === 'auto') {
        TopBar.init(wrap);
    }
    win.__SinaTopBar__ = TopBar;

})(window, document);
(function(win) {
    var isFn = function(fn, data) {
        if (fn && typeof fn === 'function') {
            fn(data);
        }
    };
    var UserPanel,
        wrap = document.getElementById('SI_User'),
        bar = document.getElementById('SI_TopBar'),
        TopBar = win.__SinaTopBar__,
        LoginLayer,
        inited = false,
        timerId = null,
        tip = null,
        User = {
            init: function(w, config) {
                if (inited) {
                    return;
                }
                inited = true;
                wrap = w;
                UserPanel = win.SINA_USER_PANEL;
                UserPanel = UserPanel.set("container", {
                    'node' : wrap
                });
                UserPanel = UserPanel.set('extra', {
                    'css' : '//i.sso.sina.com.cn/css/outlogin/v1/outlogin_skin_reversion.css'
                });
                UserPanel = UserPanel.set('outLoginLayer', {
                    'ready' : function() {
                        LoginLayer = win.SINA_OUTLOGIN_LAYER;
                        if (LoginLayer) {
                            LoginLayer.set('sso', {
                                entry: config.entry || 'account'
                            }).set('styles', {
                                // 'margin-top': '0px',
                                // 'z-index': '10001'
                            }).set('plugin', {
                                position:'custom',
                                parentNode: bar
                            }).register('login_success', function(info) {
                                isFn(config.login_success, info);
                                LoginLayer.getWeiboInfo({
                                    timeout: 15e3,
                                    onSuccess: function(rs) {
                                        isFn(config.getWeiboInfo, rs);
                                    },
                                    onFailure: function(rs) {}
                                });
                            }).register('logout_success', function(info) {
                                isFn(config.logout_success, info);
                            }).register('layer_hide',function(){
                                User.hideTip();
                            }).init();
                        }
                    }
                });
                UserPanel.init();
            },
            fireLoginSuccess: function() {
                LoginLayer && LoginLayer.listener.fire('login_success');
            },
            fireLogoutSuccess: function() {
                LoginLayer && LoginLayer.listener.fire('logout_success');
            },
            showTip: function(html){
                LoginLayer = win.SINA_OUTLOGIN_LAYER;
                if(!tip){
                    tip = document.createElement('div');
                    tip.className = 'sina-top-bar-user-tip';
                    LoginLayer.nodes.box.insertBefore(tip, LoginLayer.nodes.box.firstChild);
                }
                if(html){
                    tip.innerHTML = html;
                    tip.style.display = 'block';
                }
            },
            hideTip:function(){
                if(tip){
                    tip.style.display = 'none';
                }
            }
        };
    if (wrap && wrap.getAttribute('top-data') === 'auto') {
        timerId = setInterval(function() {
            if (UserPanel) {
                User.init(wrap);
                clearInterval(timerId);
            }
        }, 50);
    }
    win.__SinaTopBar__.user = User;
})(window);