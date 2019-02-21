(function () {

    /*
        probability props:
            ifNoId      - use branch for all without id
            office      - for all office
            users       - for user list ['email1', 'email2']
            slots       - [0,1,2,3]
            corp
            deprecated  - remove branch lock
     */

    var WA = window.WebAgent = window.WebAgent || {};
    apply(WA, window.WebAgentConfig || {});

    if (WA.UID) return;

    var MASTER = 'master';

    var dl = (''+document.location),
        host = document.location.host,
        branch = 'master',
        path = 'release/505',
        base = 'webim/agent/',
        probability = [],
        lastForcedVersion = '20131126154524',
        isLocalhost = host.indexOf('localhost') != -1,
        testServer = host.match(/[^.]+\.((?:f|my\.rapira)\d*)\.mail\.ru/),
        devServer = host.match(/^.+\.dev\.mail\.ru$/),
        isRapira = testServer && testServer[1].indexOf('my.rapira') == 0,
        utf = true,//!!window.IS_UTF,
        domainProps = {},
        domain = '//img.imgsmail.ru',
        login = getUserLogin(),
        useBranch = (dl.match(/\Wwa_use_branch=([a-z0-9-]*)/i)||[0,false])[1],
        useLang = (dl.match(/\Wwa_lang=([a-z]{2})/i)||[0,false])[1],
        useOnce = (dl.match(/\Wbranch=([a-z0-9-]*)/i)||[0,false])[1],
        appVersion = (dl.match(/\Wwa_appver=([\.0-9]*)/i)||[0,false])[1],
        usedBranch = branch;

    var features = {
        FEATURE_FLAG_RTF_MESSAGE : 0x00000001,
        FEATURE_FLAG_BASE_SMILES : 0x00000002,
        FEATURE_FLAG_ADVANCED_SMILES : 0x00000004,
        FEATURE_FLAG_CONTACTS_EXCH : 0x00000008,
        FEATURE_FLAG_WAKEUP : 0x00000010,
        FEATURE_FLAG_MULTS : 0x00000020,
        FEATURE_FLAG_FILE_TRANSFER : 0x00000040,
        FEATURE_FLAG_VOICE : 0x00000080,
        FEATURE_FLAG_VIDEO : 0x00000100,
        FEATURE_FLAG_GAMES : 0x00000200,
        FEATURE_FLAG_ENABLE_VIDEO_CAMERA : 0x00000400,
        FEATURE_FLAG_WEBRTC : 0x00000800,
        FEATURE_FLAG_WEB_CALL : 0x00004000,
        FEATURE_FLAG_WEBRTC_CRYPTO : 0x00008000
    };

    var localStorage_waUseBranch = false;

    try {
        localStorage_waUseBranch = window.localStorage && localStorage.waUseBranch;
        if(localStorage_waUseBranch) {
            each(probability, function (p) {
                if(p.branch == localStorage_waUseBranch) {
                    if(p.deprecated) {
                        localStorage.removeItem('waUseBranch');
                    }
                    return false;
                }
            })
        }

        if(useBranch === '' && window.localStorage) {
            localStorage.removeItem('waUseBranch');
        } else if (useBranch !== false && window.localStorage) {
            localStorage.waUseBranch = useBranch;
        }

        localStorage_waUseBranch = window.localStorage && localStorage.waUseBranch;

    } catch (e) {}

    var head = document.getElementsByTagName('head')[0];
    if (head) {
        var jsLinks = head.getElementsByTagName('script');
        var jsLen = jsLinks.length;
        while (jsLen--) {
            var el = jsLinks[jsLen];
            if (el.src && el.src.match(/release\/loader\.js/i)) {
                var ver = el.src.match(/version=(\d{14})/);
                if (ver) lastForcedVersion = ver[1];
                var loadBranch = el.src.match(/\Wbranch=([a-z0-9-]*)/i);
                if (loadBranch) useOnce = loadBranch[1];
            }
        }
    }

    if (isLocalhost) {
        domain = '';
        base = '';
        domainProps.branch = 'webagent';
        domainProps.server = 'localhost';
        if (useOnce) {
            path = 'build/' + useOnce;
        }
    } else if (useOnce) {
        path = 'build/' + useOnce;
        usedBranch = useOnce;
        domainProps.branch = usedBranch;
    } else if (localStorage_waUseBranch) {
        path = 'build/' + localStorage_waUseBranch;
        usedBranch = localStorage_waUseBranch;
        domainProps.branch = usedBranch;
    } else if (branch == MASTER) {
        var k = WA.i ? WA.i % 100 : -1,
            usedBranch = false;

        if(host.indexOf('f6.') == -1) {
            each(probability, function (p) {
                if(WA.o && p.office || k == -1 && p.ifNoId) {
                    usedBranch = p.branch;
                    return false;
                } else if (p.corp && login && login.indexOf('@corp') != -1) {
                    usedBranch = p.branch;
                    return false;
                } else if (p.users && login) {
                    return each(p.users, function (l) {
                        if(l === login) {
                            usedBranch = p.branch;
                            return false;
                        }
                    })
                } else if (k != -1 && p.slots && p.slots.length) {
                    return each(p.slots, function (s) {
                        if(s === k) {
                            usedBranch = p.branch;
                            return false;
                        }
                    })
                }
            });
        }

        if (usedBranch) {
            path = 'build/' + usedBranch;
            domainProps.branch = usedBranch;
        }
    } else {
        if (!testServer) {
            return; // wrong domain or build
        } else {
            domain = '';
            domainProps.branch = branch;
            domainProps.server = testServer[1];
        }
    }

    if (utf && !isLocalhost) {
        base = 'webim/agent/';
    } else if (isRapira) {
        base = 'ru/images/webagent/';
    }

    domainProps.usedBranch = usedBranch || branch;
    domainProps.path = base + path;
    var props = makeGet(domainProps);
    apply(WA, {
        icqSupport: true,
        charset: utf ? 'UTF-8' : 'windows-1251',
        resDomain: domain,
        resPath: '/' + base + path,
        resProps: props,
        isLocalhost: isLocalhost,
        testServer: testServer,
        devServer: devServer,
        branch: branch,
        usedBranch: usedBranch || branch,
        useLang: useLang,
        isProduction: branch == MASTER,
        lastForcedVersion: lastForcedVersion,
        suffix: '?ver='+lastForcedVersion + (appVersion || ''),

        ACTIVE_MAIL: login,
        imgPath: '//img.imgsmail.ru/webim/agent/',
        getUserLogin: getUserLogin,
        ss: ss
    });

    apply(WA, features);

    function apply (to, from) {
        eachKey(from, function (value, key) {
            to[key] = value;
        });
        return to;
    }

    function each (arr, cb) {
        for(var i=0, len=arr.length; i < len; i++) {
            if(cb(arr[i], i) === false) {
                return false;
            }
        }
        return undefined;
    }

    function eachKey (hash, cb) {
        for (var key in hash) {
            if(hash.hasOwnProperty(key)) {
                cb(hash[key], key)
            }
        }
    }

    function makeGet (hash) {
        var get = [];
        eachKey(hash, function (v, k) {
            get[get.length] = k + '=' + encodeURIComponent(v);
        });
        return get.join('&');
    }


    function getUserLogin () {
        return window.patron && patron.useremail || (/Mpop=.*?:([^@:]+@[^:]+)/.exec(document.cookie.toString()) || [0, false])[1];
    }

    function ss () {
        return {
            login: WA.ACTIVE_MAIL,
            slot: (WA.i ? WA.i % 100 : -1),
            branch: WA.usedBranch,
            path: WA.resPath
        };
    }

})();(function () {

    var WA = window.WebAgent = window.WebAgent || {};

    if (WA.UID) return;
    WA.UID = Math.floor(Math.random()*99999);

    var ua = navigator.userAgent;
    var isIE = /*@cc_on!@*/false;
    var ieVer = (ua.match(/MSIE\s(\d+)/ )||[0,0])[1];
    var isIE8x64on64 = (ua.indexOf('Trident/4')!=-1) && (ua.indexOf('x64')!=-1);
    var isMobile = ua.match(/iPhone|iPad|iPod|Opera\sMobi|Opera\sMini/i);
    var isOpera = ua.match(/Opera/i);
    var isStrict = document.compatMode == 'CSS1Compat';
    var availLangs = 'ru,uk';

    var compatible = isCompatible();
    if (compatible === true) {
        wait(getHeadFirst, includeWebagent);
    } else {
        if (compatible) {
            wait(getBody, function () {
                incompatible(compatible);
            });
        }
        fireCustomEvent('waIncompatible');
    }

    function isCompatible () {
        if(isMobile || isIE8x64on64 || isOpera && getOperaVersion() < 10.5) {
            return false;
        }

//        if (ua.match(/rv:11\.0/i) && ua.match(/Trident\/7\.0/i)) {
//            return false
//        }

        try {
            if (window.localStorage) {
                if (isIE && !isStrict) {
                    return 'Пока невозможно запустить вебагент на этой странице.';
                } else {
                    return true;
                }
            } else {
                return 'На данный момент Ваша версия браузера не поддерживается вебагентом.';
            }
        } catch (ex) {}
    }

    function includeWebagent(el) {
        if (!isStyleLinked('webagent.css')) {
            var style = document.createElement('link');
            style.type = 'text/css';
            style.rel = 'stylesheet';
            style.href = WA.resDomain + WA.resPath + '/webagent.css'+WA.suffix;
            el.parent.insertBefore(style, el.first);
        }

        WA.useLang = (WA.useLang || WA.lang || '').substr(0, 2);
        WA.useLang = WA.useLang && WA.useLang.length == 2 && availLangs.indexOf(WA.useLang) > -1 ? WA.useLang : false;
        var lang = WA.useLang ? '.' + WA.useLang : '';

        var now = +new Date();
        WA._intData = {loading:{start:now, list:{wajs:{ts:now}}}};

        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.charset = 'UTF-8';
        script.src = WA.resDomain + WA.resPath + '/webagent' + lang + '.js' + WA.suffix;
        el.parent.insertBefore(script, el.first);
    }

    function isStyleLinked (filename) {
        var styles = document.getElementsByTagName('link');
        for (var i = 0, len = styles.length; i < len;) {
            if (styles[i].href && styles[i].href.indexOf('/' + filename) != -1) {
                styles[i].parentNode.removeChild(styles[i]);
                len = styles.length;
            } else {
                i++;
            }
        }
    }

    function incompatible(reason) {
        positionFixedWorkaround();
        var className = 'wa-root' + getBrowserFilter();
        var before = document.body.getElementsByTagName('*')[0];
        document.body.insertBefore(document.createElement('div'), before).innerHTML = '<div class="' + className + '" id="wa-root" style="display: block; "><div id="wa-bound" class="wa-bound"><div class="wa-main-btn wa-status-btn wa-cl-status-gray" style="display: block; cursor: default;" title="' + reason + '"></div></div></div>';
    }

    function positionFixedWorkaround() {
        if (ieVer == 6 || isIE && !isStrict) {
            try {
                document.execCommand('BackgroundImageCache', false, true);
            } catch (e) {}
            
            document.body.style.backgroundImage = 'url(//img.imgsmail.ru/0.gif)';
            document.body.style.backgroundAttachment = 'fixed';

            var lastTop = 0, doc = document, de = doc.documentElement, db = doc.body, title = document.title;
            window.WebAgent = {
                updateFixedOffset: function(p) {
                    var t = (de.clientHeight || de.offsetHeight) + (de.scrollTop || db.scrollTop) - 1;
                    if (t != lastTop) {
                        p.style.top = (lastTop = t) + 'px';
                    }
                }
            };
        }
    }

    function getBrowserFilter() {
        var docmode = isStrict ? '-s' : '-q';
        var className = '';
        if (isIE) {
            className += ' filter-ie';
            className += ' filter-ie' + docmode;
            className += ' filter-ie' + ieVer;
            className += ' filter-ie' + ieVer + docmode;
            if (ieVer == 6 || !isStrict) {
                className += ' filter-lowcompat';

            }
        }
        return className;
    }

    function wait(cb, readyCb) {
        var r = cb();
        if (r) {
            readyCb(r);
            return;
        }
        window.setTimeout(function () {
            wait(cb, readyCb);
        }, 10);
    }

    function getHeadFirst() {
        var head = document.getElementsByTagName('head')[0];
        if (head) {
            var before = head.getElementsByTagName('*')[0];
            if (before) {
                return {
                    parent: head,
                    first: before
                };
            }
        }
        return false;
    }

    function getBody() {
        if (document.body) {
            return document.body;
        }
        return false;
    }

    function fireCustomEvent(eventType) {
        try{
            if ( document.dispatchEvent ) {
                var e = document.createEvent('UIEvents');
                e.initEvent(eventType, false, false);
                document.dispatchEvent(e);
            } else if ( document.attachEvent ) {
                if ( !document.documentElement[eventType] )
                    document.documentElement[eventType] = 1;
                else
                    document.documentElement[eventType] += 1;
            }
        } catch(e) {}
    }

    function getOperaVersion() {
        var prefix;
        if (ua.indexOf('Version/') != -1) {
            prefix = 'Version/';
        } else if (ua.indexOf('Opera ') != -1) {
            prefix = 'Opera ';
        } else {
            prefix = 'Opera/';
        }
        var t = ua.match(new RegExp(prefix + '(\\d+\\.\\d+)'));
        if (t) {
            return parseFloat(t[1]);
        } else {
            return false;
        }

    }

})();
