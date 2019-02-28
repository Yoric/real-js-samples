(function handshake(iframeApi) {

    window.iFrameApiParent = true;

    var platform_domain = window.partner_settings
        && window.partner_settings.platform_domain
        || 'games.mail.ru';

    var mailru = {
        platformUrl: 'https://' + platform_domain + '/app/',
        external: null,
        paymentWaitMutex: false,
        getLoginStatus: function () {
            console.log('mailru.getLoginStatus called');
            var that = this;
            $.ajax({
                url: this.platformUrl+this.external.appid+'/user/status',
                xhrFields: {
                    withCredentials: true
                },
                success: function (data){
                    that.external.getLoginStatusCallback(data);
                }
            });
        },
        authUser: function () {
            console.log('mailru.authUser called');
            if (window.__GMC && __GMC.showLogin) {
                __GMC.showLogin();
            } else {
                GMR.showSigninForm();
            }
        },
        userInfo: function(){
            console.log('mailru.userInfo called');
            var that = this;
            $.ajax({
                url: this.platformUrl+this.external.appid+'/user/info',
                xhrFields: {
                    withCredentials: true
                },
                success: function (data){
                    that.external.userInfoCallback(data);
                }
            });
        },
        userProfile: function(){
            console.log('mailru.userProfile called');
            var that = this;
            $.ajax({
                url: this.platformUrl+this.external.appid+'/user/profile',
                xhrFields: {
                    withCredentials: true
                },
                success: function (data){
                    if (that.external.userProfileCallback) {
                        that.external.userProfileCallback(data);
                    }
                }
            });
        },
        userFriends: function(){
            console.log('mailru.userFriends called');
            var that = this;
            $.ajax({
                url: this.platformUrl+this.external.appid+'/user/friends',
                xhrFields: {
                    withCredentials: true
                },
                success: function (data){
                    if (that.external.userFriendsCallback) {
                        that.external.userFriendsCallback(data);
                    }
                }
            });
        },
        userSocialFriends: function(){
            console.log('mailru.userSocialFriends called');
            var that = this;
            $.ajax({
                url: this.platformUrl+'user/socialfriends',
                xhrFields: {
                    withCredentials: true
                },
                success: function (data){
                    if (that.external.userSocialFriendsCallback) {
                        that.external.userSocialFriendsCallback(data);
                    }
                }
            });
        },
        registerUser: function (args) {
            console.log('mailru.registerUser called');
            var that = this;
            ovl_open('/user/confirm', {}, 350, 'js-register');
        },
        registerUserNoConfirm: function (args) {
            console.log('mailru.registerUserNoConfirm called');
            var that = this;
            $.ajax({
                url: that.platformUrl+that.external.appid+'/user/register?confirm=0',
                xhrFields: {
                    withCredentials: true
                },
                success: function (data){
                    that.external.registerUserCallback(data);
                }
            });
        },
        userConfirmCheck: function (args) {
            console.log('mailru.userConfirmCheck called');
            var that = this;
            $.ajax({
                url: that.platformUrl+that.external.appid+'/user/confirm_check',
                xhrFields: {
                    withCredentials: true
                },
                success: function (data){
                    that.external
                    && that.external.userConfirmCheckCallback
                    && that.external.userConfirmCheckCallback(data);
                }
            });
        },
        userConfirm: function (args) {
            console.log('mailru.userConfirm called');
            var that = this;
            ovl_open('/user/confirm?continue=1', {}, 350, 'js-confirm');
        },
        paymentFrame: function (args) {
            console.log('mailru.paymentFrame called with args: ', args);
            ovl_open('/billing/frame', args, window.screen.width >= 700 ? 700 : window.screen.width, 'js-billing');
        },
        paymentFrameUrl: function (args) {
            console.log('mailru.paymentFrameUrl called with args: ', args);
            var that = this;
            $.ajax({
                type: 'POST',
                url: this.platformUrl+this.external.appid+'/billing/frame?url=1',
                data: args,
                xhrFields: {
                    withCredentials: true
                },
                success: function (data){
                    that.external.paymentFrameUrlCallback(data);
                }
            });
        },
        getAuthToken: function(){
            var that = this;
            $.ajax({
                type: 'POST',
                url: this.platformUrl+this.external.appid+'/gas/token',
                xhrFields: {
                    withCredentials: true
                },
                success: function (data){
                    that.external.getAuthTokenCallback(data);
                }
            });
        },
        paymentReceived: function(data){
            console.log('mailru.paymentReceived called');
            var that = this;
            that.paymentWaitMutex = false;
            if (that.external.paymentReceivedCallback) {
                that.external.paymentReceivedCallback(data);
            }
        },
        paymentWait: function(){
            console.log('mailru.paymentWaitCallback called');
            var that = this;
            that.paymentWaitMutex = true;
            if (that.external.paymentWaitCallback) {
                that.external.paymentWaitCallback();
            }
        },
        paymentInvoice: function(){
            console.log('mailru.paymentInvoiceCallback called');
            var that = this;
            that.paymentWaitMutex = false;
            if (that.external.paymentInvoiceCallback) {
                that.external.paymentInvoiceCallback();
            }
        },
        paymentWindowClosed: function(){
            console.log('mailru.paymentWindowClosed called');
            var that = this;
            that.paymentWaitMutex = false;
            if (that.external.paymentCanceledCallback) {
                that.external.paymentCanceledCallback();
            }
            if (that.external.paymentWindowClosedCallback) {
                that.external.paymentWindowClosedCallback();
            }
        },
        paymentCanceled: function(){
            console.log('mailru.paymentCanceledCallback called');
            var that = this;
            that.paymentWaitMutex = false;
            if (that.external.paymentCanceledCallback) {
                that.external.paymentCanceledCallback();
            }
        },
        confirmWindowClosed: function(){
            console.log('mailru.confirmWindowClosed called');
            var that = this;
            if (that.external.confirmWindowClosedCallback) {
                that.external.confirmWindowClosedCallback();
            }
        },
        version: '0.1.0' // primitive values are also allowed
    };

    $(document).ready(function() {
        if (window.WSD) {
            WSD.on('message', function(msg) {
                if (msg && msg['type'] == 'partner_payment') {
                    delete msg['type'];
                    mailru.paymentReceived(msg)
                }
            });
        }
    });

    function processDmrCallback(e) {
        if (e.origin != 'https://pw.money.mail.ru') {
            return;
        }

        var data = e.data.payload ? e.data.payload : e.data;
        if (!e.data.payload && typeof data === 'string') {
            try {
                var data = JSON.parse(data);
            } catch (err) {
                console.log("Invalid JSON: " + data);
                return;
            }
            if (data.action) {
                console.log('action: ' + data.action);
                if (data.action == 'closeWindow') {
                    $('.js-ovl-close').trigger('click');
                }
                else if (data.action == 'paySuccess' || data.action == 'waiterStart') {
                    mailru.paymentWait();
                }
                else if (data.action == 'payInvoice') {
                    mailru.paymentInvoice();
                }
                else if (data.action == 'payError') {
                    mailru.paymentCanceled();
                }
                return;
            }
        }
    }
    window.addEventListener('message', processDmrCallback, false);

    var ovlHTML = '<div class="ovl-wrap">\
          <div class="ovl">\
            <i class="popup__close js-ovl-close">&#x2715;</i>\
          </div><div class="middle"></div>\
        </div>',
        ovlFadeHTML = '<div class="ovl-fade"></div>',
        ovlArrows = '<div class="icon-wrap icon-wrap--xsm slider-arrow-left"><i class="icon icon--xsm icon--arr-left"></i><div class="b-link js-ovl-prev"></div></div>\
               <div class="icon-wrap icon-wrap--xsm slider-arrow-right"><i class="icon icon--xsm icon--arr-right"></i><div class="b-link js-ovl-next"></div></div>',
        ovlOpenLink = $('.js-ovl-open');


    $(document).on('click', '.js-ovl-close', function(event) {
        if (mailru.paymentWaitMutex) {
            console.log('Payment window close blocked by paymentWaitMutex');
            return;
        }
        $('.ovl-fade').remove();
        $('.ovl-wrap').remove();
        var $body = $('body').removeClass('ovl-opened');
        if ($body.hasClass('js-billing')) {
            $body.removeClass('js-billing');
            mailru.paymentWindowClosed();
        }
        if ($body.hasClass('js-confirm') || $body.hasClass('js-register')) {
            $body.removeClass('js-confirm').removeClass('js-register');
            mailru.confirmWindowClosed();
        }
    });
    $(document).on('keyup',function(e) {
        if($('body').hasClass('ovl-opened')){
            switch (e.keyCode) {
                case 27:
                    $('.js-ovl-close').trigger('click');
                    break;
            }
        }
    });
    $(document).on('click', '.js-reg', function() {
        var confirm = $('body').hasClass('js-confirm') ? true : false;
        $.ajax({
            url: mailru.platformUrl + mailru.external.appid + (confirm ? '/user/confirm_set' : '/user/register'),
            xhrFields: {
                withCredentials: true
            },
            success: function (data){
                if (data && data.errcode && data.errcode == 1004) {
                    $('.ovl').find(".popup__inner p").text(
                        "Пожалуйста, авторизуйтесь используя почту mail.ru / bk.ru / list.ru / inbox.ru" +
                        ", либо аккаунт социальной сети ОК или ВК").css("color", "red");
                    $('.ovl').find(".popup__form__button").addClass("disabled").removeClass('.js-reg');
                    return;
                }
                if (mailru.external) {
                    if (confirm && mailru.external.userConfirmCallback) {
                        mailru.external.userConfirmCallback(data);
                    }
                    else if (mailru.external.registerUserCallback) {
                        mailru.external.registerUserCallback(data);
                    }
                }
                $('body').removeClass('js-confirm').removeClass('js-register');
                $('.js-ovl-close').trigger('click');
            }
        });
    });

    function ovl_open(_url, _args, _width, _extra_class){
        _args = _args || {};
        _width = _width || 350;
        _extra_class = _extra_class || "";
        $.ajax({
            type: 'POST',
            url: mailru.platformUrl+mailru.external.appid+_url,
            xhrFields: {
                withCredentials: true
            },
            data: _args,
            success: function (data){
                if (!$('.ovl-wrap').length) {
                    $('body').append(ovlFadeHTML).addClass('ovl-opened ' + _extra_class).append(ovlHTML);
                }
                $('.ovl').css('min-width', _width);
                $('.ovl').html('<i class="popup__close js-ovl-close">&#x2715;</i>' + data);
            }
        });
    }

    function connected(externalApi){
        mailru.external = externalApi;
    }

    function error(err) {
        throw new Error('iframeApi error ' + err);
    }

    iframeApi(mailru, {debug: false}).then(connected, error);

}(window.iframeApi));
