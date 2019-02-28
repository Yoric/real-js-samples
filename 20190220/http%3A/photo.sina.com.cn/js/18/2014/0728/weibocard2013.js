// [1505,18,17] published at 2014-07-28 10:05:56

var weiboCard = function () {};

weiboCard._class = function (cN, Upnode) {
    return SINA.query('.' + cN, Upnode || document.body);
};
weiboCard._getStrLen = function(str) {
    return str.replace(/([^\x00-\xff])/g, "\x00$1").length;
};
weiboCard._clipStr = function(str, a, b) {
    var s = str.replace(/([^\x00-\xff])/g, "\x00$1");
    return (s.length < b) ? str : (s.substring(a, b - 4).replace(/\x00/g, '') + '... ');
};
// \u5FAE\u535A\u683C\u5F0F\u8F93\u51FA\u65F6\u95F4
weiboCard._initDate = function (time) {
    //time = 'Fri Jul 27 20:29:09 +0800 2011';
    //\u9884\u5904\u7406\u5B57\u7B26\u4E32
    if (isNaN((new Date(time)).getDate())) {
        time = time.replace(/\+[^\s]+/g, '');
        time += ' +0800';
    }
    //console.log(time)
    var oDate = new Date(time),
        cDate = new Date(),
        interval = cDate - oDate,
        hour, minute, hourStr, minuteStr, result;
    //\u4E00\u5C0F\u65F6\u5185
    if (interval < 3600000) {
        result = (Math.ceil(interval / 216000)).toString() + '\u5206\u949F\u524D';
    }
    //\u4ECA\u5E74\u4E4B\u5185
    else {
        hour = oDate.getHours();
        minute = oDate.getMinutes();
        hourStr = hour < 10 ? '0' + hour.toString() : hour.toString();
        minuteStr = minute < 10 ? '0' + minute.toString() : minute.toString();
        if (cDate.getFullYear() === oDate.getFullYear()) {
            //\u4ECA\u65E5\u4E4B\u5185
            if (cDate.getDate() === oDate.getDate()) {
                result = '\u4ECA\u5929' + hourStr + ':' + minuteStr;
            }
            //\u4ECA\u65E5\u4EE5\u524D
            else result = (oDate.getMonth() + 1).toString() + '\u6708' + oDate.getDate().toString() + '\u65E5 ';
        }
        //\u4ECA\u5E74\u4EE5\u524D
        else result = oDate.getFullYear().toString() + '\u5E74 ' + (oDate.getMonth() + 1).toString() + '\u6708' + oDate.getDate().toString() + '\u65E5 ';
    }
    return result;
};
weiboCard._getElePos = function(o) {
    var p = {
        x: 0,
        y: 0
    };
    while (o.offsetParent) {
        p.x += o.offsetLeft;
        p.y += o.offsetTop;
        o = o.offsetParent;
    }
    return p;
};
weiboCard._init = function(opts) {
    var that = this;
    this._timeout = null;
    this._timeoutUid = null;
    this.URL_USER = 'http://api.sina.com.cn/weibo/2/users/show.json';
    // this.URL_USER = 'http://api.sina.com.cn/weibo/2/users/show.json?source=2835469272&uid=1188552450';
    this.URL_CKFL = 'http://api.sina.com.cn/weibo/2/friendships/show.json';
    // this.URL_CKFL = 'http://api.sina.com.cn/weibo/2/friendships/show.json?source=2835469272&source_id=2219574291&target_screen_name=%E9%83%AD%E6%95%AC%E6%98%8E';
    this.data = {
        checkFollowed: {}
    };
    this.showing = false;
    this.requestingFollow = false;
    this.curUid = opts.uid;
    this.relatedEle = opts.ele;
    this.appKey = opts.appKey || Weibo.appKey;
    this.card = document.createElement('div');
    this.card.className = 'wb_card_w';
    this.card.style.display = 'none';
    document.body.insertBefore(this.card, document.body.childNodes[0]);

    // event
    SINA.Event.delegate(this.card, 'click', '.wb_card_add', function(e) {
        if(that.requestingFollow){ return; }
        that.requestingFollow = false;
        var _apis = Weibo.apis,
            Login = Weibo.Login,
            Widgets = Weibo.Widgets;
        var thisUid = this.getAttribute('data-uid');
        var fromLogin = false;
        var _onFollowSuccess = function () {
            var btn_add = SINA.query('.wb_card_add', that.card)[0];
            if(btn_add && thisUid == btn_add.getAttribute('data-uid')){
                that._followed();
            }
            that.data.checkFollowed[thisUid] = true;
            if(fromLogin){
                Weibo.Widgets.Messages.alert('\u5173\u6CE8\u6210\u529F', 'right');
                fromLogin = false;
            }
            that.requestingFollow = false;
        };
        var params = {
            data: {
                uid: thisUid
            },
            onsuccess: function() {
                _onFollowSuccess();
            },
            onfailure: function(st) {
                if (st && st.code == 20506) {
                    _onFollowSuccess();
                }
                that.requestingFollow = false;
            }
        };
        var orgAppkey = Weibo.appKey;
        // \u5224\u65AD\u767B\u5F55
        if (!Login.check()) {
            var loginDlg = Widgets.getLoginDialog();
            loginDlg.loginCallbackOnce = function() {
                fromLogin = true;
                Weibo.appKey = that.appKey;
                _apis.follow(params);
                Weibo.appKey = orgAppkey;
            };
            loginDlg.show();
            return;
        }
        // \u5173\u6CE8
        Weibo.appKey = that.appKey;
        _apis.follow(params);
        Weibo.appKey = orgAppkey;

    });
    SINA.Event.addListener(this.card, 'mouseover', function () {
        if(that._timeout){
            clearTimeout(that._timeout);
        }
    });
    SINA.Event.addListener(this.card, 'mouseout', function () {
        that._timeoutUid = that.curUid;
        that._timeout = setTimeout(function () {
            if(that.curUid == that._timeoutUid){
                that.hide();
            }
        }, 100);
    });
    /*SINA.Event.addListener(this.relatedEle, 'mouseover', function () {
        if(that._timeout){
            clearTimeout(that._timeout);
        }
    });*/
    /*SINA.Event.addListener(this.relatedEle, 'mouseout', function () {
        that._timeoutUid = that.curUid;
        that._timeout = setTimeout(function () {
            if(that.curUid == that._timeoutUid){
                that.hide();
            }
        }, 100);
    });*/
    this._inited = true;
};
weiboCard._requestUser = function (uid) {
    var that = this;
    var _onUserSucess = function (d) {
        that.data[uid] = d;
        if(that.curUid == d.result.data.idstr){
            that._render(d);
        }
    };
    SINA.IO.getJSONP(this.URL_USER, 'source=2835469272&uid=' + uid, _onUserSucess);
};
weiboCard._requestFriendShip = function (uid) {
    var that = this;
    var _onFSSucess = function (d) {
        var res = d.result.data.source.following
        that.data.checkFollowed[uid] = res;
        if(res && uid == that.curUid){
            that._followed();
        }
    };
    SINA.IO.getJSONP(this.URL_CKFL, 'source=2835469272&source_id=' + sinaSSOController.getSinaCookie().uid + '&target_id=' + uid, _onFSSucess);
};
weiboCard._followed = function () {
    var btn_add = SINA.query('.wb_card_add', this.card)[0];
    var added = SINA.query('.wb_card_added', this.card)[0];
    if(btn_add && added){
        btn_add.style.display = 'none';
        added.style.display = 'block';
    }
};
weiboCard._render = function (d) {
    var userData = d.result.data;
    var PREFIX_WB = 'http://weibo.com/';
    var link_user = PREFIX_WB + 'u/' + userData.idstr;
    var link_fans = PREFIX_WB + userData.idstr + '/fans';
    var nick = userData.screen_name + (userData.verified ? ('<img title="\u65B0\u6D6A\u8BA4\u8BC1" class="wb_card_v' + userData.verified_type + '" src="http://timg.sjs.sinajs.cn/t3/style/images/common/transparent.gif"></a>') : '');
    var intro = userData.verified ? userData.verified_reason : userData.description;
    var time, link_wb, text_wb;
    var wbHTML = '', addBtnHTML;
    // \u53EF\u80FD\u8BE5\u7528\u6237\u6CA1\u6709\u5FAE\u535A
    if(userData.status){
        time = this._initDate(userData.status.created_at);
        link_wb = PREFIX_WB + userData.idstr + '/' + userData.status.proxy_mid_base62;
        text_wb = userData.status.text || '\u65E0';
        if(this._getStrLen(text_wb) > 96){
            text_wb = this._clipStr(text_wb, 0, 96);
            text_wb += ('<a href="' + link_wb + '" target="_blank">\u8BE6\u7EC6 &#187;</a>');
        }
        wbHTML = '<p class="wb_card_wb"><a href="' + link_wb + '" target="_blank" class="wb_card_wb_time">' + time + '</a>' + text_wb + '</p>';
    }
    // \u5982\u679C\u5DF2\u7ECF\u68C0\u67E5\u8FC7\u662F\u5426\u5173\u6CE8
    addBtnHTML = '<a data-uid="' + userData.idstr + '" suda-uatrack="key=content_weibo_user&value=layerfocus" class="wb_card_add" href="javascript:void(0)" onclick="return false;"><em>+</em>\u52A0\u5173\u6CE8</a><span class="wb_card_added" style="display: none;">\u5DF2\u5173\u6CE8</span>';
    if(userData.idstr in this.data.checkFollowed){
        if(this.data.checkFollowed[userData.idstr]){
            addBtnHTML = '<a data-uid="' + userData.idstr + '" suda-uatrack="key=content_weibo_user&value=layerfocus" class="wb_card_add" style="display: none;" href="javascript:void(0)" onclick="return false;"><em>+</em>\u52A0\u5173\u6CE8</a><span class="wb_card_added">\u5DF2\u5173\u6CE8</span>';
        }
    }
    this.card.innerHTML = '\
        <div class="wb_card_bg"></div>\
        <div class="wb_card clearfix">\
            <div class="wb_card_hd clearfix">\
                <span class="wb_card_ptp"><a href="' + link_user + '" target="_blank"><img src="' + userData.profile_image_url + '" alt="' + userData.screen_name + '"></a></span>\
                <div class="wb_card_ptt">\
                    <p class="wb_card_nick"><a href="' + link_user + '" target="_blank">' + nick + '</a></p>\
                    <p class="wb_card_fans"><a href="' + link_fans + '" target="_blank">\u7C89\u4E1D</a> ' + userData.followers_count + '</p>\
                    <p class="wb_card_add_w">' + addBtnHTML + '</p>\
                </div>\
            </div>\
            <p class="wb_card_info">\u7B80\u4ECB\uFF1A' + intro + '</p>\
            ' + wbHTML + '\
        </div>\
        <span class="wb_card_arr wb_card_arr_bot"></span>';

    if(this.curUid == userData.idstr){
        this.card.style.display = 'block';
        this.setPos();
        this.card.style.visibility = 'visible';
        this.showing = true;
    }
};
weiboCard.setPos = function () {
    var relatedEle = this.relatedEle;
    var relatedEleH = relatedEle.offsetHeight;
    var relatedPos = this._getElePos(relatedEle);
    var card = this.card;
    var cardBg = this._class('wb_card_bg', card)[0];
    var cardArrow = this._class('wb_card_arr', card)[0];
    var cardH = this.card.offsetHeight;
    var d = document.documentElement, b = document.body, ST = window.pageYOffset || (d && d.scrollTop) || b.scrollTop;
    card.style.left = relatedPos.x - 20 + 'px';
    // \u5224\u65AD\u9AD8\u5EA6\u591F\u4E0D\u591F\u5728\u4E0A\u9762\u5C55\u793A
    if(relatedPos.y - ST > cardH){
        card.style.top = (relatedPos.y - cardH - 10) + 'px';
        cardArrow.className = 'wb_card_arr wb_card_arr_bot';
    }
    else{
        card.style.top = (relatedPos.y + relatedEleH + 10) + 'px';
        cardArrow.className = 'wb_card_arr wb_card_arr_top';
    }
    cardBg.style.height = cardH + 8 + 'px';
};
weiboCard.show = function (opts) {
    var that = this;
    var ele, uid;
    if(!this._inited){
        this._init(opts);
    }
    else{
        this.curUid = opts.uid;
    }
    uid = opts.uid;
    ele = opts.ele;
    this.relatedEle = opts.ele;
    if(this._timeout){
        clearTimeout(this._timeout);
    }
    this.relatedEle.onmouseout = function (e) {
        that._timeoutUid = that.curUid;
        that._timeout = setTimeout(function () {
            if(that.curUid == that._timeoutUid){
                that.hide();
            }
        }, 100);
    };
    if(uid in this.data){
        this._render(this.data[uid]);
    }
    else{
        this._requestUser(uid);
        if(Weibo.Login.check()){
            this._requestFriendShip(uid);
        }
    }
};
weiboCard.hide = function (opts) {
    this.card.style.visibility = 'hidden';
    this.card.style.display = 'none';
    this.showing = false;
};

/*weiboCard.show({
    uid : '2219574291',
    autoPos : false,
    ele : document.getElementById('weibocardele'),
    offX : 0,
    offY : 0
});*/

// weiboCard.show({uid : '2219574291', ele : this});