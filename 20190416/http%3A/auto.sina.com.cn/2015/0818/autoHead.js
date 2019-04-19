var sinaAuto = window.sinaAuto || {};

sinaAuto.navIndex = document.getElementsByName("navIndex")[0] ? document.getElementsByName("navIndex")[0].content : "_";

var mainNavIndex = sinaAuto.navIndex.split("_")[0];
var subNavIndex = sinaAuto.navIndex.split("_")[1];

//console.log(mainNavIndex)
//alert(sinaAuto.navIndex);

sinaAuto.getScrollTop = function () {
    return (document.body.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop) || 0;
};

sinaAuto.getClientSize = function() {
    if(window.innerHeight) {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    } else {
        if(document.documentElement && document.documentElement.clientHeight) {
            return {
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight
            }
        } else {
            return {
                width: document.body.clientWidth,
                height: document.body.clientHeight
            }
        }
    }
}

String.prototype.getStrLength = function() {
    var len = 0;
    for(var i = 0; i < this.length; i++) {
        var c = this.charCodeAt(i);
        // charCodeAt() ·&#189;·¨&#191;&#201;·&#181;&#187;&#216;&#214;&#184;&#182;¨&#206;&#187;&#214;&#195;&#181;&#196;×&#214;·&#251;&#181;&#196; Unicode ±à&#194;&#235;&#161;&#163;&#213;&#226;&#184;&#246;·&#181;&#187;&#216;&#214;&#181;&#202;&#199; 0 - 65535 &#214;&#174;&#188;&#228;&#181;&#196;&#213;&#251;&#202;&#253;&#161;&#163;
        if((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
            len++;
        } else {
            len += 2;
        }
    }
    return Math.ceil(len / 2);
}

/*
 * &#181;&#175;&#179;&#246;&#178;&#227;&#186;&#175;&#202;&#253;
 */
sinaAuto.showLayer = function(source, sourceClass, layer, verticalGap, horizontalGap) {
    if(!verticalGap || !horizontalGap) {
        $(layer).show();
        $(source).addClass(sourceClass);
    } else {
        var offset = $(source).offset();
        $(source).addClass(sourceClass);
        $(layer).show().css("top", (offset.top + verticalGap) + "px").css("left", (offset.left - horizontalGap) + "px");
    }
}
sinaAuto.hideLayer = function(source, sourceClass, layer) {
    $(source).removeClass(sourceClass);
    $(layer).hide();
}

sinaAuto.showNavLayer = function(source, layer, subIndex) {

    if(source == "" && subIndex == "") {return}
    if(!$('#'+source).length) return;
    var oft = $("#mainNav").offset();
    var tLeft = ($("#" + source).offset().left - oft.left) - (5 - $("#" + source).width() / 2);
    if($("#" + layer).length == 0 || $("#" + layer).find("li").length == 0){
        $("#mainNavPop").hide()
    } else {
        $("#mainNavPop").show().css("top", oft.top + 55).attr("data-index", source);
    }

    $("#" + layer).css("left", 0);
    if(layer == "newCarLink" || layer == "guideLink" || layer == "evaluationLink"){
        $("#" + layer).show().css("left", $("#newCar").offset().left).siblings(".main_nav_links").hide();
        // $("#" + layer).show().css("left", $("#" + source).offset().left).siblings(".main_nav_links").hide();
    } else {
        var docWidth = $('#mainNav').find('ul').width();
        var docLeft = $('#mainNav').find('ul').offset().left;
        var mWidth = $("#" + layer).width();
        var mLeft = tLeft + 11/2 + 30 - mWidth/2;
        var mLeftEx = docLeft + docWidth - mWidth;
        // var mLeftEx = tLeft + 11/2 + 30 - mWidth + 18;   //11是小三角宽度，30是多一个的margin值，18是找齐右边距，100是导航最后一个li距离1000宽的右边界的大概距离
        // if(docWidth == 1000) mLeftEx = mLeftEx + 100;
        if(layer == "autoUseLink" || layer == "motorLink" || layer == "marketLink" || layer == "communityLink" || layer == "showGirlLink"){
            $("#" + layer).show().css("left", mLeftEx).siblings(".main_nav_links").hide();
        } else {
            $("#" + layer).show().css("left", mLeft).siblings(".main_nav_links").hide();
        }
    }

    $("#" + source).addClass("on").siblings("li").removeClass("on");
    $(".tips_top").css("left", tLeft);

    if (subIndex != "") {
        $("#" + layer).find("a").eq(parseInt(subIndex)).addClass("on");
    }

}

//&#212;&#218;&#207;&#223;&#181;&#216;·&#189;&#213;&#190;&#201;&#162;&#193;&#208;
var ccity =  {"\u5317\u4eac":"http:\/\/bj.auto.sina.com.cn\/","\u5929\u6d25":"http:\/\/tj.auto.sina.com.cn\/","\u77f3\u5bb6\u5e84":"http:\/\/sjz.auto.sina.com.cn\/","\u6d4e\u5357":"http:\/\/jn.auto.sina.com.cn\/","\u9752\u5c9b":"http:\/\/qd.auto.sina.com.cn\/","\u5a01\u6d77":"http:\/\/weihai.auto.sina.com.cn\/","\u83cf\u6cfd":"http:\/\/heze.auto.sina.com.cn\/","\u6d4e\u5b81":"http:\/\/jining.auto.sina.com.cn\/","\u5e7f\u5dde":"http:\/\/gz.auto.sina.com.cn\/","\u798f\u5dde":"http:\/\/fz.auto.sina.com.cn\/","\u53a6\u95e8":"http:\/\/xm.auto.sina.com.cn\/","\u5357\u660c":"http:\/\/nc.auto.sina.com.cn\/","\u666f\u5fb7\u9547":"http:\/\/jdz.auto.sina.com.cn\/","\u6df1\u5733":"http:\/\/sz.auto.sina.com.cn\/","\u4e1c\u839e":"http:\/\/dg.auto.sina.com.cn\/","\u6f6e\u5dde":"http:\/\/chaozhou.auto.sina.com.cn\/","\u6c55\u5934":"http:\/\/st.auto.sina.com.cn\/","\u63ed\u9633":"http:\/\/jieyang.auto.sina.com.cn\/","\u4f5b\u5c71":"http:\/\/fos.auto.sina.com.cn\/","\u5357\u5b81":"http:\/\/nn.auto.sina.com.cn\/","\u840d\u4e61":"http:\/\/px.auto.sina.com.cn\/","\u65b0\u4f59":"http:\/\/xiny.auto.sina.com.cn\/","\u9e70\u6f6d":"http:\/\/yingt.auto.sina.com.cn\/","\u629a\u5dde":"http:\/\/fuzhou.auto.sina.com.cn\/","\u8d63\u5dde":"http:\/\/ganzhou.auto.sina.com.cn\/","\u5409\u5b89":"http:\/\/ja.auto.sina.com.cn\/","\u5b9c\u6625":"http:\/\/ychun.auto.sina.com.cn\/","\u60e0\u5dde":"http:\/\/huiz.auto.sina.com.cn\/","\u73e0\u6d77":"http:\/\/zhh.auto.sina.com.cn\/","\u4e0a\u9976":"http:\/\/sr.auto.sina.com.cn\/","\u9633\u6c5f":"http:\/\/yj.auto.sina.com.cn\/","\u6e5b\u6c5f":"http:\/\/zhj.auto.sina.com.cn\/","\u4e91\u6d6e":"http:\/\/yf.auto.sina.com.cn\/","\u4e0a\u6d77":"http:\/\/sh.auto.sina.com.cn\/","\u676d\u5dde":"http:\/\/hz.auto.sina.com.cn\/","\u5357\u4eac":"http:\/\/nj.auto.sina.com.cn\/","\u5408\u80a5":"http:\/\/hf.auto.sina.com.cn\/","\u82cf\u5dde":"http:\/\/szh.auto.sina.com.cn\/","\u65e0\u9521":"http:\/\/wx.auto.sina.com.cn\/","\u5e38\u5dde":"http:\/\/cz.auto.sina.com.cn\/","\u5b81\u6ce2":"http:\/\/nb.auto.sina.com.cn\/","\u7ecd\u5174":"http:\/\/sx.auto.sina.com.cn\/","\u53f0\u5dde":"http:\/\/tz.auto.sina.com.cn\/","\u6e56\u5dde":"http:\/\/huzhou.auto.sina.com.cn\/","\u957f\u6c99":"http:\/\/cs.auto.sina.com.cn\/","\u6b66\u6c49":"http:\/\/wh.auto.sina.com.cn\/","\u90d1\u5dde":"http:\/\/zz.auto.sina.com.cn\/","\u5e73\u9876\u5c71":"http:\/\/pds.auto.sina.com.cn\/","\u6210\u90fd":"http:\/\/cd.auto.sina.com.cn\/","\u91cd\u5e86":"http:\/\/cq.auto.sina.com.cn\/","\u8d35\u9633":"http:\/\/gy.auto.sina.com.cn\/","\u9075\u4e49":"http:\/\/zy.auto.sina.com.cn\/","\u897f\u5b89":"http:\/\/xa.auto.sina.com.cn\/","\u54b8\u9633":"http:\/\/xianyang.auto.sina.com.cn\/","\u5170\u5dde":"http:\/\/lz.auto.sina.com.cn\/","\u94f6\u5ddd":"http:\/\/yinchuan.auto.sina.com.cn\/","\u4e4c\u9c81\u6728\u9f50":"http:\/\/wlmq.auto.sina.com.cn\/","\u6c88\u9633":"http:\/\/sy.auto.sina.com.cn\/","\u54c8\u5c14\u6ee8":"http:\/\/heb.auto.sina.com.cn\/","\u5927\u8fde":"http:\/\/dl.auto.sina.com.cn\/"};

//&#181;&#216;·&#189;&#213;&#190;×&#220;&#202;&#253;
var city_total = 0;
$.each(ccity, function(){
    city_total++;
});
$('#cityLink > a > span > em').html(city_total);
//$('#cityLink > a > span > em').html(85);

;(function(window, $) {

    if($('#userLogin').length == 0){
        return false;
    }

    var l = $('#userLogin').offset().left;
    var t = $('#userLogin').offset().top;
    youLikeDataJson = '//dw.opendata.sina.com.cn/recsys/auto/get_like_brand_v2?uid=';

    var loginLayer = window.SINA_OUTLOGIN_LAYER;
    if (loginLayer) {
        loginLayer.set('sso', {
            entry: 'account'
        }).set('styles', {
            'z-index': 9999999,
            'left': (l - 479) + 'px',
            'top': (t + 60) + 'px'
        }).set('plugin', {
            position: 'custom'
        }).register('login_success',
            function() {
                //&#180;&#166;&#192;í&#181;&#199;&#194;&#188;&#179;&#201;&#185;&#166;&#208;è&#210;&#170;&#214;&#180;&#208;&#208;&#181;&#196;&#178;&#217;×÷
                window.userinfo = sinaSSOController.get51UCCookie();
                //&#178;&#185;&#179;&#228;&#198;&#251;&#179;&#181;&#198;&#181;&#181;&#192;&#211;&#166;&#211;&#195;&#200;&#235;&#191;&#218;
                var con_login = $('#userLogin');
                youLikeDataJson = '//dw.opendata.sina.com.cn/recsys/auto/get_like_brand_v2?uid=' + window.userinfo.uid;
                $.ajax({
                    // url: '//news.auto.sina.com.cn/m/api/weibo/weiboInfoByUid.php?uid=' + window.userinfo.uid,
                    url: '//api.weibo.com/2/users/show_brief.json?source=1549609920',
                    dataType: 'jsonp',
                    error: function() {
                        console.log('creat weibo fail')
                    },
                    success: function(data) {
                        console.log('creat weibo ok')
                        weiboPhoto = data.data.profile_image_url;
                        $('.tn-title-login-custom').remove();
                // weiboPhoto = 'http://tp4.sinaimg.cn/'+ window.userinfo.uid +'/50/0';
                        if ($('.tn-title-login-custom').length ==0) {
                            var param = '',
                                html = '',
                                urls = [
                                    {'name' : '\u79c1\u4fe1', 'url' : 'http://weibo.com/messages?topnav=1&amp;wvr=4'},
                                    {'name' : '\u8bc4\u8bba', 'url' : 'http://weibo.com/comment/inbox?topnav=1&amp;wvr=4&amp;f=1'},
                                    {'name' : '@\u6211', 'url' : 'http://weibo.com/at/weibo?topnav=1&amp;wvr=4'}
                                    // ,
                                    // {'name' : '\u6211\u7684\u8F66', 'url' : 'http://i.auto.sina.com.cn/car/selfindex/'},
                                    // {'name' : '\u6211\u559C\u6B22', 'url' : 'http://i.auto.sina.com.cn/like/index/'},
                                    // {'name' : '\u6211\u7684\u8BBA\u575B', 'url' : 'http://bbs.auto.sina.com.cn/space-uid-'+ window.userinfo.uid +'.html'},
                                    // {'name' : '\u6211\u7684\u95EE\u7B54', 'url' : 'http://qa.auto.sina.com.cn/'}
                                ];

                            for (var i in urls) {
                                param += '<li><a href="' + urls[i].url + '" target="_blank">' + urls[i].name + '</a></li>';
                            }
                            html =  '<div class="tn-title-login-custom" node-type="userInfoContainer">' +
                                '<div class="tn-user-custom">' +
                                // '<span class="tn-user-greet" node-type="greet">&#187;&#182;&#211;&#173;&#196;&#227;&#163;&#172;</span>' +
                                '<a node-type="nickCon" style="" href="http://weibo.com/u/' + window.userinfo.uid +'" target="_blank" class="tn-tab-custom">'+
                                '<img src="'+ weiboPhoto +'" alt="">'+
                                '<i><span node-type="nick">' + window.userinfo.nick + '</span><em style="display: none;" class="tn-new-custom" node-type="totalMsg"></em><em class="tn-arrow tn-arrow-custom"></em></i>' +
                                '</a>' +
                                '</div>' +
                                '<div class="top_layer" node-type="infoList" id="topmenulist" style="display:none;">' +
                                '<ul class="tn-text-list">' + param + '<li class="loginout"><a href="javascript:void(0);">\u9000\u51fa</a></li></ul>' +
                                '</div>' +
                                '</div>';
                            con_login.append(html);
                        } else {
                            $('.tn-title-login-custom').css('display', 'block');
                        }
                        if($('#J_rPM_weiboCommentLogin').length){
                            $('.weibotopic-list .li_publish .img img').attr('src', weiboPhoto);
                            $('.weibotopic-list .li_publish .username').html(window.userinfo.nick).removeClass('noentry');
                        }
                        $('body').delegate('.tn-tab-custom',{
                            mouseenter : function() {
                                sinaAuto.showLayer('.tn-tab-custom', 'hover', '#topmenulist', 60, 0);
                            },
                            mouseleave : function() {
                                sinaAuto.hideLayer('.tn-tab-custom', 'hover', '#topmenulist');
                            }
                        });
                        $('body').delegate('#topmenulist',{
                            mouseenter : function() {
                                sinaAuto.showLayer('.tn-tab-custom', 'hover', '#topmenulist');
                            },
                            mouseleave : function() {
                                sinaAuto.hideLayer('.tn-tab-custom', 'hover', '#topmenulist');
                            }
                        });
                        $('body').delegate('.loginout','click', function () {
                            loginLayer.logout();
                            $('.outlogin_LoginBtn').css('display', 'block');
                            $('.tn-title-login-custom').css('display', 'none');
                        });
                    }
                });
            }).register('logout_success',
            function() {
                if($('#J_rPM_weiboCommentLogin').length){
                    $('.weibotopic-list .li_publish .img img').attr('src', 'http://i0.sinaimg.cn/qc/2018/newenergy/images/weibouserphoto.png');
                    $('.weibotopic-list .li_publish .username').html('未登录').addClass('noentry');
                }                //&#180;&#166;&#192;í&#181;&#199;&#179;&#246;&#179;&#201;&#185;&#166;&#208;è&#210;&#170;&#214;&#180;&#208;&#208;&#181;&#196;&#178;&#217;×÷
            }).setLoginButton('userLogin').init();

        window.openLogin = function() {
            var loginLayer = window.SINA_OUTLOGIN_LAYER;
            loginLayer.set('styles', {
                'z-index': 9999999,
                'left': (l - 479) + 'px',
                'top': (t + 60) + 'px'
            }).set('plugin', {
                position: 'custom'
            }).show();
        }
        //done 20160530
        $('body').delegate('.outlogin_LoginBtn','click', function () {
            window.openLogin();
        });
    }
})(window, $);

//alert(useinfo)

$(function() {
    sinaAuto.showNavLayer(mainNavIndex, mainNavIndex + "Link", subNavIndex);

    $(window).resize(function(){
        sinaAuto.showNavLayer(mainNavIndex, mainNavIndex + "Link", subNavIndex);
    });

    $("#otherCityLink").hover(function() {
        sinaAuto.showLayer("#otherCityLink", "hover", "#otherCityHolder", 30, 148);
    }, function() {
        sinaAuto.hideLayer("#otherCityLink", "hover", "#otherCityHolder");
    });

    $("#otherCityHolder").hover(function() {
        sinaAuto.showLayer("#otherCityLink", "hover", "#otherCityHolder");
    }, function() {
        sinaAuto.hideLayer("#otherCityLink", "hover", "#otherCityHolder");
    });

    // city
    $("#cityLink").hover(function() {
        sinaAuto.showLayer("#cityLink", "hover", "#cityHolder", 60, 148);
    }, function() {
        sinaAuto.hideLayer("#cityLink", "hover", "#cityHolder");
    });

    $("#cityHolder").hover(function() {
        sinaAuto.showLayer("#cityLink", "hover", "#cityHolder");
    }, function() {
        sinaAuto.hideLayer("#cityLink", "hover", "#cityHolder");
    });

    // guide
    $("#navLink").hover(function() {
        sinaAuto.showLayer("#navLink", "hover", "#guideHolder", 60, 225);
    }, function() {
        sinaAuto.hideLayer("#navLink", "hover", "#guideHolder");
    });

    $("#guideHolder").hover(function() {
        sinaAuto.showLayer("#navLink", "hover", "#guideHolder");
    }, function() {
        sinaAuto.hideLayer("#navLink", "hover", "#guideHolder");
    });

    // mobile
    $("#mobLink").hover(function() {
        sinaAuto.showLayer("#mobLink", "hover", "#mobileHolder", 60, 52);
    }, function() {
        sinaAuto.hideLayer("#mobLink", "hover", "#mobileHolder");
    });

    $("#mobileHolder").hover(function() {
        sinaAuto.showLayer("#mobLink", "hover", "#mobileHolder");
    }, function() {
        sinaAuto.hideLayer("#mobLink", "hover", "#mobileHolder");
    });

    // mobile
    $("#autoFilter").hover(function() {
        sinaAuto.showLayer("#autoFilter", "hover", "#filterHolder", 39, 475);
    }, function() {
        sinaAuto.hideLayer("#autoFilter", "hover", "#filterHolder");
    });

    $("#filterHolder").hover(function() {
        sinaAuto.showLayer("#autoFilter", "hover", "#filterHolder");
    }, function() {
        sinaAuto.hideLayer("#autoFilter", "hover", "#filterHolder");
    });

    //var curNavIndex = "newCar",
    //    curNavLink = "newCarLink";

    var curNavIndex = mainNavIndex,
        curNavLink = curNavIndex + "Link";

    $("#mainNav li:not(.more)").hover(function() {

        var navId = $(this).attr("id");
        var navLink = navId + "Link";

        curNavIndex = navId;
        curNavLink = navLink;

        sinaAuto.showNavLayer(navId, navLink, 0);

        // if (!navId || $("#" + navLink).length == 0 || $("#" + navLink).find("li").length == 0) {
        //     $("#mainNavPop").hide();
        //     return;
        // }

    }, function() {
        if(mainNavIndex == "" && subNavIndex =="") {
            $("#mainNavPop").hide();
            $("#mainNav li").removeClass("on");
        } else {
            sinaAuto.showNavLayer(mainNavIndex, mainNavIndex + "Link", subNavIndex);
        }

    });

    $("#mainNav li.more").hover(function() {
        $(this).find('.more-pop').stop(true, true).slideDown(100);
    }, function() {
        $(this).find('.more-pop').stop(true, true).slideUp(50);
    });

    $("#mainNavPop").hover(function() {

        sinaAuto.showNavLayer(curNavIndex, curNavLink, 0);

    }, function() {

        if(mainNavIndex == "" && subNavIndex =="") {
            $("#mainNavPop").hide();
            $("#mainNav li").removeClass("on");
        } else {

            //curNavIndex = "newCar";
            //curNavLink = "newCarLink";
            curNavIndex = mainNavIndex,
                curNavLink = curNavIndex + "Link";

            $("#mainNavPop").attr("data-index", "");

            sinaAuto.showNavLayer(mainNavIndex, mainNavIndex + "Link", subNavIndex);
        }
    });

});

// search.
$(function() {
    //20150610 add begin
    window.onload=function(){
        $(".outlogin_LoginBtn .LoginIcon").css('background','url(http://i1.sinaimg.cn/qc/autoimages/buyersGuide/logo.png) 0 0 no-repeat');
    }

    //&#202;ó±ê&#187;&#172;&#185;&#253;°&#180;&#197;&#165;&#184;&#223;&#193;&#193;
    $("#J_searchKeyword").hover(function(){
        $(this).addClass("hover");
    },function(){
        $(this).removeClass("hover");
    });

    //&#206;&#202;&#180;&#240;&#191;ò &#187;&#241;&#200;&#161;&#161;&#162;&#202;§&#200;&#165;&#189;&#185;&#181;&#227;
    $("#J_cText").focus(function(){
        if($(this).val() == this.defaultValue){
            $(this).addClass("focus").val("");
        }
    }).blur(function(){
        if ($(this).val() == "") {
            $(this).removeClass("focus").val(this.defaultValue);
        }
    });
    //commonFoot 关键词搜索跳转
    $("#J_searchKeyword" ).click(function(){
        var valText = $("#J_cText" ).val();
        if( valText != "" ){
            window.open("http://db.auto.sina.com.cn/search/?search_txt=" + encodeURIComponent(valText));
        } else {
            window.open("http://db.auto.sina.com.cn/search/");
        }
    });
    //for 404页面 搜索
    $("#J_exText").focus(function(){
        if($(this).val() == this.defaultValue){
            $(this).addClass("focus").val("");
        }
    }).blur(function(){
        if ($(this).val() == "") {
            $(this).removeClass("focus").val(this.defaultValue);
        }
    });
    $("#J_exSearchKeyword" ).click(function(){
        var valText = $("#J_exText" ).val();
        if( valText != "" ){
            window.open("http://db.auto.sina.com.cn/search/?search_txt=" + encodeURIComponent(valText));
        } else {
            window.open("http://db.auto.sina.com.cn/search/");
        }
    });
    //20150610 add end

    //修改搜索浮层相关内容 陈光 17-07-12
    /*$("#searchText").click(function(event){
        event.stopPropagation();
        var v = $(this).val();
        var left = $(this).offset().left;
        var top = $(this).offset().top;

        //判断搜索框中是否有内容，有内容显示补全内容，无内容显示默认内容
        if(historyli!='' && $("#searchText").val()==''){
            $(".sa_search_list ul").html(historyli);
        }
        // if(v == "") {
        $(".sa_search_list").removeClass("hide");
        $(".sa_search_box").removeClass("hide").css("left", left).css("top", (top + $(this).height() + 1) + "px");
        // }
        //$(this).addClass("sa_search_act");
    });*/
    $("#searchText").click(function(event){
        event.stopPropagation();
        var v = $(this).val();
        var left = $(this).offset().left;
        var top = $(this).offset().top;

        //判断搜索框中是否有内容，有内容显示补全内容，无内容显示默认内容
        if($(".sa_search_box").is(".hide")){
            $(".sa_search_box").css("left", left).css("top", (top + $(this).height() + 1) + "px");
        }else{
            $(".sa_search_box").addClass("hide");
        }
        if(historyli!='' && $("#searchText").val()==''){
            $(".sa_search_list ul").html(historyli);
            $(".sa_search_list").removeClass("hide");
            $(".sa_search_box").removeClass("hide");
        }
        if(v.replace(/\s/ig,'')!=''){
            $.ajax({
                url:'//db.auto.sina.com.cn/search/api/inside/sinaapi/search.json?keyworld='+v,
                type:'get',
                dataType:'jsonp',
                jsonp:'callback',
                jsonpCallback:'search_fun',
                success:function(data){
                    if(data.staus!=1){
                        $(".sa_search_box .sa_search_list ul").html('');
                        $(".sa_search_box .sa_search_list").removeClass("hide");
                        $(".sa_search_box").addClass("hide");
                        return;
                    }
                    var html='';
                    for(var v = 0, len = data.value.length; v< len; v++ ){
                        html += '<li><a href="http://db.auto.sina.com.cn/search/?search_txt=' + data.value[v].r_name + '">' + data.value[v].r_name + '</a></li>';
                    }
                    $(".sa_search_box .sa_search_list ul").html(html);
                    $(".sa_search_box .sa_search_list").removeClass("hide");
                    $(".sa_search_box").removeClass("hide");
                }
            });
        }
    });

    $('body', document).on('click', function(e) {
        $(".sa_search_box").addClass("hide");
        $(".sa_inner_list").addClass("hide");
        $(".auto_match_box").addClass("hide");
        //$(".sa_search_text").removeClass("sa_search_act");
    });

    $("body").delegate(".sa_search_box a","click" ,function(){
        window.open($(this).attr("href"));
        return false;
    });

    $(".sa_search_list").click(function(){
        $("#searchText").focus();
        if($.trim($("#searchText").val())=='')
            return false;
    });

    // &#179;&#245;&#202;&#188;&#187;&#175;&#198;·&#197;&#198;&#193;&#208;±í
    function sa_search_int(json){
        var temp_html2 = "";
        var temp_id2 = [], temp_name2 = [], temp_logo2 = [];
        var data = json.data;
        for(var obj in data) {
            for(var val in data[obj]) {
                temp_id2.push(data[obj][val].id);
                temp_name2.push(data[obj][val].zhName);
            }
        }
        for(var i = 0; i < temp_id2.length; i++) {
            temp_html2 += "<li bid='"  + temp_id2[i] + "'>" + temp_name2[i] + "</li>";
        }
        $(".sa_search_list ul").attr("data-val","-1").html(temp_html2);
    }

    if(typeof(big_brands) != 'undefined'){
        sa_search_int(big_brands);
    }else{
        $.getJSON("//db.auto.sina.com.cn/api/cms/car/getBrandList.json?callback=?", function(brands){
            sa_search_int(brands);
        });
    }

    // &#202;ó±ê&#187;&#172;&#185;&#253;&#207;&#212;&#202;&#190;×&#211;&#198;·&#197;&#198;
    $("body").delegate(".sa_search_list li",{
        mouseenter: function(){
            //如果搜索框有内容不触发鼠标事件，不显示图片列表
            if($.trim($("#searchText").val())==''){
                var t = $(".sa_search_box").offset().top;
                var l = $(".sa_search_box").offset().left;
                // $(".sa_inner_list").removeClass("hide").css("top", (t - 1) + "px").css("left", (l + 200) + "px");
                $(".sa_inner_list").removeClass("hide").css("top", (t - 1) + "px").css("left", (l - 270) + "px");

                var temp_html3 = "";
                var temp_subid3 = [], temp_subname = [], temp_subimg = [], temp_act_price2 =  [], temp_substate = [];
                var bid = $(this).attr("bid");
                $.getJSON("//db.auto.sina.com.cn/api/cms/car/getSerialList.json?brandid=" + bid + "&callback=?", function(data){
                    // &sellStatus=1,2
                    data = eval(data.data);
                    if(data.length > 0){
                        for(var obj in data) {
                            var serialList = data[obj]["serialList"];
                            for(var val in serialList) {
                                temp_subid3.push(serialList[val]["serialId"]);
                                temp_subname.push(serialList[val]["serialName"]);
                                temp_subimg.push(serialList[val]["serialImg"]);
                                temp_act_price2.push(serialList[val]["guidePrice"]);
                                temp_substate.push(serialList[val]["sellStatus"]);
                            }
                        }

                        var k_array2 = [];
                        for(var i = 0; i < temp_act_price2.length; i++) {
                            if(temp_substate[i] == "\u5728\u4EA7"){
                                if(temp_act_price2[i] != "" && temp_act_price2[i] != "\u6682\u65E0\u62A5\u4EF7") {
                                    k_array2.push(temp_act_price2[i]);
                                } else {
                                    k_array2.push(unescape("%u6682%u65E0%u62A5%u4EF7"));
                                }
                            } else {
                                k_array2.push(temp_substate[i]);
                            }
                        }

                        for(var i = 0; i< temp_subid3.length; i++) {
                            temp_html3 += "<li><a href='http://db.auto.sina.com.cn/" + temp_subid3[i] + "/' target='_blank'><img class='sa_car_pic' src='" + temp_subimg[i] + "' /></a><div class='sa_car_inf'><strong><a href='http://db.auto.sina.com.cn/" + temp_subid3[i] + "/' target='_blank'>" + temp_subname[i] + "</a></strong><span><a href='http://dealer.auto.sina.com.cn/price/2_" + temp_subid3[i] + "/' target='_blank'>" + k_array2[i] + "</a></span></div></li>";
                        }

                        $(".sa_inner_list ul").html(temp_html3);
                    } else {
                        $(".sa_inner_list ul").html("<li style='line-height:66px; font-size: 14px; text-align: center; color: #bbbbbb; font-weight: bold;'>暂无相关车系</li>");
                    }
                });
                $(".sa_inner_list").attr("fbid", bid);
            }
            $(".sa_search_list ul").attr("data-val",$(this).index());
            $(this).addClass("cur").siblings("li").removeClass("cur");
        },
        mouseleave: function(){
            $(".sa_inner_list").addClass("hide");
            $(".sa_search_list ul").attr("data-val","-1");
            $(this).removeClass("cur");
        }
    });

    $("body").delegate(".sa_inner_list",{
        mouseenter: function(){
            $(this).removeClass("hide");
            var fbid = $(this).attr("fbid");
            $(".sa_search_list li").removeClass("cur");
            $(".sa_search_list li[bid=" + fbid + "]").addClass("cur");
        },
        mouseleave: function(){
            $(this).addClass("hide");
        }
    })

    //重写搜索补全内容
    // &#188;ü&#197;&#204;&#182;&#175;×÷×&#212;&#182;&#175;&#198;&#165;&#197;&#228;&#189;á&#185;&#251;
    /*$("#searchText").keyup(function(){
     $(".sa_search_list").addClass("hide");
     $(".auto_match_box").removeClass("hide");
     $(".sa_inner_list").addClass("hide");
     var v = $(this).val();
     var temp_html = "", brand_html = "";
     var temp_subid = [], temp_cname = [], temp_focus_img_lists = [], temp_price_area = [], temp_act_price = [];
     var temp_brand_bid = [], temp_brand_cname = [], temp_brand_url = [], temp_brand_logo = [];
     $.getJSON("//so.auto.sina.com.cn/api/iwords_index.php?skey="+v+"&count_subbrand=10&count_brand=10&callback=?", function(json){
     for(var obj in json) {
     for(var val in json[obj]) {
     if(json[obj][val]["subid"]) {
     temp_subid.push(json[obj][val]["subid"]);
     temp_cname.push(json[obj][val]["cname"]);
     temp_focus_img_lists.push(json[obj][val]["focus_img_lists"]);
     temp_price_area.push(json[obj][val]["price_area"]);
     temp_act_price.push(json[obj][val]["act_price"]);
     }
     if(json[obj][val]["bid"]) {
     temp_brand_bid.push(json[obj][val]["bid"]);
     temp_brand_cname.push(json[obj][val]["cname"]);
     temp_brand_url.push(json[obj][val]["url"]);
     temp_brand_logo.push(json[obj][val]["logourl"]);
     }
     }
     }

     var k_array = [];
     for(var i = 0; i < temp_price_area.length; i++) {
     if(temp_price_area[i] != "") {
     k_array.push(temp_price_area[i]);
     } else {
     k_array.push(unescape("%u6682%u65E0%u62A5%u4EF7"));
     }
     }

     //alert(temp_price_area)

     var num = temp_subid.length + temp_brand_bid.length;
     if(num != 0) {

     $(".sa_search_box").removeClass("hide");
     $(".auto_match_box").removeClass("hide");
     $(".sa_search_text").addClass("sa_search_act");

     // &#204;&#238;&#179;&#228;×&#211;&#198;·&#197;&#198;&#193;&#208;±í
     for(var i = 0; i < temp_subid.length; i++) {
     temp_html += "<li><a class='fl' href='http://data.auto.sina.com.cn/" + temp_subid[i] + "'><img src='" + temp_focus_img_lists[i].split(";")[0] + "' /></a>";
     temp_html += "<div class='match_car_inf'><p class='match_car_name'><a href='http://data.auto.sina.com.cn/" + temp_subid[i] + "'>" + temp_cname[i] + "</a></p><p class='match_car_price'><a href='http://data.auto.sina.com.cn/" + temp_subid[i] + "'>" + k_array[i] + "</a></p></div></li>";
     }
     $(".match_list").html(temp_html);

     // &#204;&#238;&#179;&#228;&#198;·&#197;&#198;&#193;&#208;±í
     for(var i = 0; i < temp_brand_bid.length; i++) {
     //曾用链接地址 temp_brand_url[i]
     brand_html += "<li><a href='http://db.auto.sina.com.cn/search/?search_txt=" + encodeURIComponent(temp_brand_cname[i]) + "'><img src='" + temp_brand_logo[i] + "' /></a><strong><a href='http://db.auto.sina.com.cn/search/?search_txt=" + encodeURIComponent(temp_brand_cname[i]) + "'>" + temp_brand_cname[i] + "</a></strong></li>";
     }
     $(".brand_list").html(brand_html);

     } else {
     $(".sa_search_box").addClass("hide");
     $(".auto_match_box").addClass("hide");
     $(".sa_search_text").removeClass("sa_search_act");
     }

     })
     });*/

    $("#commonSearch").click(function(){
        var v = $("#searchText").val();
        if(v != "") {
            if(v == "2015老爷车展"){
                window.open("http://um.auto.sina.com.cn/z/2015IVCSC/");
            } else {
                window.open("http://db.auto.sina.com.cn/search/?search_txt=" + encodeURIComponent(v));
            }
        } else {
            window.open("http://db.auto.sina.com.cn/search/");
        }
    });
    //重写搜索补全内容
    /*$("#searchText").keyup(function(event){
     var code = event.keyCode;
     if(code == 13){
     $("#commonSearch").trigger("click");
     }
     });*/

    //重写搜索补全内容
    var head = document.head;
    var script = document.createElement('script');
    var historyli='';
    if (typeof String.prototype.startsWith != 'function') {
        String.prototype.startsWith = function (prefix){
            return this.slice(0, prefix.length) === prefix;
        };
    }
    script.onload = function () {
        var itmLen=10;
        if(historyli==''){
            historyli=$(".sa_search_list ul").html();
        }
        function afterGetData(data) {

            var html = '';

            if (!data.length) {
                $(".sa_search_list").addClass("hide");
                $(".sa_search_box").addClass("hide");
            } else {
                var left = $("#searchText").offset().left;
                var top = $("#searchText").offset().top;
                data.forEach(function (itm, i) {
                    if (i < itmLen) {
                        html += '<li><a href="http://db.auto.sina.com.cn/search/?search_txt=' + itm + '">' + itm + '</a></li>';
                    }
                });
                $(".sa_search_list ul").html(html);
                $(".sa_inner_list").addClass("hide");
                $(".sa_search_list").removeClass("hide");
                $(".sa_search_box").removeClass("hide").css("left", left).css("top", (top + $("#searchText").height() + 1) + "px");
            }
        }
        $("#searchText").keydown(function(event){
            var code = event.keyCode;
            var currentScroll = 0;
            if(code == 13){
                if($(".sa_search_list ul").attr("data-val") != "-1"){
                    $(".sa_search_list").find("li.cur").children().trigger("click");
                } else {
                    $("#commonSearch").trigger("click");
                }
            } else if(code == 38){
                var prevLiIndex = parseInt($(".sa_search_list ul").attr("data-val")) - 1;
                // currentScroll = $(".sa_search_list").scrollTop();
                if (prevLiIndex >= 0){
                    $(".sa_search_list").stop(true,true).animate({scrollTop: prevLiIndex*32},50);
                    $(".sa_search_list").find("li").eq(prevLiIndex).mouseenter();
                } else {
                    $(".sa_search_list ul").attr("data-val", $(".sa_search_list").find("li").length-1);
                    $(".sa_search_list").find("li").eq($(".sa_search_list").find("li").length-1).mouseenter();
                    $(".sa_search_list").animate({scrollTop: ($(".sa_search_list").find("li").length-1)*32},50);
                }
            } else if(code == 40){
                var nextLiIndex = parseInt($(".sa_search_list ul").attr("data-val")) + 1;
                // currentScroll = $(".sa_search_list").scrollTop();
                if (nextLiIndex < $(".sa_search_list").find("li").length){
                    $(".sa_search_list").find("li").eq(nextLiIndex).mouseenter();
                    if(nextLiIndex > 0){
                        $(".sa_search_list").stop(true,true).animate({scrollTop: nextLiIndex*32},50);
                    } else {
                        $(".sa_search_list").animate({scrollTop: 0},50);
                    }
                } else {
                    $(".sa_search_list ul").attr("data-val","0");
                    $(".sa_search_list").find("li").eq(0).mouseenter();
                    $(".sa_search_list").animate({scrollTop: 0},50);
                }
            } /*else {
                $(".sa_search_list ul").attr("data-val","-1");
                var val = $(this).val().toLowerCase();
                var result = [], resultLen = 0;
                if(val==''){
                    $("#searchText").click();
                    return;
                }
                ALL_AUTO_COMPLETE_RECORDS.every(function (itm, i) {
                    if (resultLen > itmLen)
                        return false;
                    if (itm.name.toLowerCase().startsWith(val) || itm.pinyin.toLowerCase().startsWith(val) || itm.short_pinyin.toLowerCase().startsWith(val)) {
                        // if (itm.name.toLowerCase().indexOf(val)==0 || itm.pinyin.toLowerCase().indexOf(val)==0 || itm.short_pinyin.toLowerCase().indexOf(val)==0) {
                        result.push(itm.name);
                        resultLen++;
                    }
                    return true;
                });
                afterGetData(result);
            }*/
        });
        $("#searchText").bind("keyup",function(event){
            if(event.keyCode==38 || event.keyCode==40 || event.keyCode==13 || event.keyCode==37 || event.keyCode==39) return;
            $(this).parent().removeClass("hover");
            var key=$(this).val();
            if(key==''){
                $(".sa_search_list ul").html(historyli);
                return;
            }
            $.ajax({
                url:'//db.auto.sina.com.cn/search/api/inside/sinaapi/search.json?keyworld='+key,
                type:'get',
                //async:false,
                dataType:'jsonp',
                jsonp:'callback',
                jsonpCallback:'search_fun',
                success:function(data){
                    if(data.staus!=1){
                        $(".sa_search_box").addClass("hide");
                        return;
                    }
                    var html='';
                    for(var v = 0, len = data.value.length; v< len; v++ ){
                        html += '<li><a href="http://db.auto.sina.com.cn/search/?search_txt=' + data.value[v].r_name + '">' + data.value[v].r_name + '</a></li>';
                    }
                    $(".sa_search_box .sa_search_list ul").html(html);
                    $(".sa_search_box .sa_search_list").removeClass("hide");
                    $(".sa_search_box").removeClass("hide");
                }
            });
        });
    };
    script.setAttribute('charset', 'GB2312');
    script.src = '//auto.sina.com.cn/2016Version/1122/data_tags_pinyin.js';
    //head.appendChild(script);
    var node0 = document.getElementsByTagName('script')[0];
    node0.parentNode.insertBefore(script,node0);
});
