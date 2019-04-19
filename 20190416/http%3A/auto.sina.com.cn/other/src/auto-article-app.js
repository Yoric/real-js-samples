$('[node-type="toTop"]').on("click", function() {
    $("body,html").animate({
        scrollTop: 0
    }, 500);
    return false;
});
$('[node-type="toRelated"]').on("click", function() {
    var a = $("#tab_related").offset().top;
    $("body,html").animate({
        scrollTop: a
    }, 500);
    return false;
});
$(window).on("scroll", function() {
    var a = $(document).scrollTop();
    if (a >= 800) {
        $('[node-type="toTop"]').removeClass("fadeOut");
    } else {
        $('[node-type="toTop"]').addClass("fadeOut");
    }
});
SinaPage.loadWidget({
    // trigger:{
    //     id:'wap_articleContentRight'
    // },
    require:[
        // {url:'//n.sinaimg.cn/finance/fe/doT.min.js'}
        {url:'//auto.sina.com.cn/2017Version/1120/doT.min.js'}
    ],
    onAfterLoad:function(){
        // doT.templateSettings = {
        //     evaluate:    /\[\[([\s\S]+?)\]\]/g,
        //     interpolate: /\[\[=([\s\S]+?)\]\]/g,
        //     encode:      /\[\[!([\s\S]+?)\]\]/g,
        //     use:         /\[\[#([\s\S]+?)\]\]/g,
        //     define:      /\[\[##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\]\]/g,
        //     conditional: /\[\[\?(\?)?\s*([\s\S]*?)\s*\]\]/g,
        //     iterate:     /\[\[~\s*(?:\]\]|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\]\])/g,
        //     varname: 'it',
        //     strip: true,
        //     append: true,
        //     selfcontained: false
        // };
        $.ajax({
            type:'GET',
            url:'http://interface.sina.cn/auto/inner/getArticleRightInfo.d.json',
            dataType:'jsonp',
            success:function (data) {
                //hotSearch
                if($('#wrap_label').length){
                    var data01 = data.result.dataGCBBMdata;
                    var tpl01 = $('#TPL_label').html();
                    var evalText01 = doT.template(tpl01);
                    $('#wrap_label').html(evalText01(data01));
                }
                //newcarCalendar
                if($('#wrap_calendar').length){
                    var data02 = data.result.dataNewCar;
                    var tpl02 = $('#TPL_calendar').html();
                    var evalText02 = doT.template(tpl02);
                    $('#wrap_calendar').html(evalText02(data02));
                }
                //newAltas
                if($('#J_altasSlide').length){
                    var data03 = data.result.dataNewPics;
                    var tpl03 = $('#TPL_altas').html();
                    var evalText03 = doT.template(tpl03);
                    $('#J_altasSlide').html(evalText03(data03));
                    autoMove({
                        'imgsCon': '#J_altasSlide',
                        'iconsCon': '#J_altasPoint',
                        'prevIcon': '#J_altasPrev',
                        'nextIcon': '#J_altasNext',
                        'chooseIcon': 'on',
                        'isAuto': false,
                        'isCycle': true,
                        'isSingleImg': true,
                        'moveTime': 300
                    });
                }
                //newVideo
                if($('#J_videoSlide').length){
                    var data04 = data.result.dataNewVideo;
                    var tpl04 = $('#TPL_video').html();
                    var evalText04 = doT.template(tpl04);
                    $('#J_videoSlide').html(evalText04(data04));
                    autoMove({
                        'imgsCon': '#J_videoSlide',
                        'iconsCon': '#J_videoPoint',
                        'prevIcon': '#J_videoPrev',
                        'nextIcon': '#J_videoNext',
                        'chooseIcon': 'on',
                        'isAuto': false,
                        'isCycle': true,
                        'isSingleImg': true,
                        'moveTime': 300
                    });
                }
                //hotArticle
                //“推荐阅读”的之前版为“热门文章”，使用的旧版php组提供接口，为保证之前已上线页面正常展示此段不能删除
                if($('#wap_hotlist').length){
                    var data05 = data.result.dataHotAutoNews;
                    var tpl05 = $('#TPL_hotlist').html();
                    var evalText05 = doT.template(tpl05);
                    $('#wap_hotlist').html(evalText05(data05));
                }
                //cartypeTop
                if($('#wap_typetop').length){
                    var data06 = data.result.dataYouLike, data06ShowIndex = 0, data06ShowCount = 2, data06Len = data06.length;
                    var tpl06 = $('#TPL_typetop').html();
                    function showYouLike(){
                        var data06Show = data06.slice(data06ShowIndex, data06ShowIndex + data06ShowCount);
                        var evalText06 = doT.template(tpl06);
                        $('#wap_typetop').html(evalText06(data06Show));
                    }
                    showYouLike();
                    $('#wap_typetop').parent().prev().find('.change-btn').on('click',function(){
                        data06ShowIndex += data06ShowCount;
                        if(data06ShowIndex + data06ShowCount > data06Len){
                            data06ShowIndex = 0;
                        }
                        showYouLike();
                    });
                }
                //cartypeRank
                if($('#wap_hotRank').length){
                    var data07 = data.result.dataHotCarRank;
                    var tpl07Tit = $('#TPL_hotRankTit').html();
                    var evalText07Tit = doT.template(tpl07Tit);
                    $('#wap_hotRank .tab-head').html(evalText07Tit(data07));
                    var tpl07Con = $('#TPL_hotRankCon').html();
                    var evalText07Con = doT.template(tpl07Con);
                    $('#wap_hotRank .tab-content').html(evalText07Con(data07));
                    handle($('.tab-head a'));
                }
                //buycarGuide
                if($('#wap_buyguide').length){
                    var data08 = data.result.dataCarmanual;
                    var tpl08 = $('#TPL_buyguide').html();
                    var evalText08 = doT.template(tpl08);
                    $('#wap_buyguide').html(evalText08(data08));
                }
                //carBlacktech
                if($('#wap_blacktech').length){
                    var data09 = data.result.dataHkj;
                    var tpl09 = $('#TPL_blacktech').html();
                    var evalText09 = doT.template(tpl09);
                    $('#wap_blacktech').html(evalText09(data09));
                }
                //buycarHelp
                if($('#wap_buyhelp').length){
                    var data10 = data.result.dataGcbbm;
                    var tpl10 = $('#TPL_buyhelp').html();
                    var evalText10 = doT.template(tpl10);
                    $('#wap_buyhelp').html(evalText10(data10));
                }
                //unitWork
                if($('#J_unitSlide').length){
                    var data11 = data.result.dataUnion;
                    var tpl11Con = $('#TPL_unitCon').html();
                    var evalText11Con = doT.template(tpl11Con);
                    $('#J_unitSlide').html(evalText11Con(data11));
                    var tpl11Point = $('#TPL_unitPoint').html();
                    var evalText11Point = doT.template(tpl11Point);
                    $('#J_unitPoint').html(evalText11Point(data11));
                    autoMove({
                        'imgsCon': '#J_unitSlide',
                        'iconsCon': '#J_unitPoint',
                        'prevIcon': '#J_unitPrev',
                        'nextIcon': '#J_unitNext',
                        'chooseIcon': 'on',
                        'isAuto': false,
                        'isCycle': true,
                        'isSingleImg': true,
                        'moveTime': 300
                    });
                }
            },
            error:function (e) {
                console.log('autodata fail!')
                console.log(e);
            }
        })
    }
});
SinaPage.loadWidget({
    // trigger:{
    //     id:'wap_articleContentRight'
    // },
    require:[
        // {url:'//n.sinaimg.cn/finance/fe/doT.min.js'}
        {url:'//auto.sina.com.cn/2017Version/1120/doT.min.js'}
    ],
    onAfterLoad:function(){
        var hasloaduserinfo = false,
            hasloadusertimer;//判断userinfo是否存在了
        //console.log('Browser:'+getBrowserInfo()+',OS:'+detectOS())
        function writeHotlistDoc() {
            $.ajax({
                type:'GET',
                url:'http://db.auto.sina.com.cn/api/recommend/info/getRecommendInfo.json',
                data: {
                    streamId: window.streamId || '',
                    productId: window.productId || '',
                    uid: sinaSSOController.get51UCCookie() ? sinaSSOController.get51UCCookie().uid : '',
                    sinaglobal: cookie('SINAGLOBAL') || '',
                    os: detectOS(),
                    broswerInfo: typeof getBrowserInfo() !== 'undefined' ? getBrowserInfo()[0].replace(/\/|\s/, '_') : '',
                    requestSource: 1,
                    ip: typeof window.clientIp !== 'undefined' ? window.clientIp : '',
                    timeZone: '',
                    serialId: subid,
                    currUrl: window.location.href || '',
                    limit: 10
                },
                dataType:'jsonp',
                success:function (data) {
                    //hotArticle
                    if($('#wap_recomread').length && data.status==0){
                        var data05 = data.data;
                        var tpl05 = $('#TPL_recomread').html();
                        var evalText05 = doT.template(tpl05);
                        $('#wap_recomread').html(evalText05(data05));
                    }
                },
                error:function (e) {
                    console.log('autodata fail!')
                    console.log(e);
                }
            });
        }
        writeHotlistDoc();
        $('#wap_recomread').on('click', 'a',function() {
            var $parentLi = $(this).parents('li');
            var data_targetUrl = $(this).attr('href');
            var data_globalId = $(this).attr('data-globalId');
            var data_title = $(this).html();
            var data_autoEngine = $(this).attr('data-code');
            $.ajax({
                url: 'http://s.auto.sina.com.cn/datacollect/behavior/push/pushRecommendBehaviorData.json',
                data: {
                    streamId: window.streamId || '',
                    productId: window.productId || '',
                    uid: sinaSSOController.get51UCCookie() ? sinaSSOController.get51UCCookie().uid : '',
                    globalId: data_globalId,
                    title: data_title ? data_title : '',
                    autoEngine: data_autoEngine,
                    refferUrl: document.referrer ? document.referrer : '',
                    currUrl: window.location.href ? window.location.href : '',
                    targetUrl: data_targetUrl ? data_targetUrl : '',
                    platform: 'pc'
                },
                dataType:'jsonp',
                success:function(data){
                    if (data.status==0) {
                        console.log('commitDB ok');
                    }
                },
                error:function (e) {
                    console.log('commitDB fail!')
                    console.log(e);
                }
            });
        });
    }
});
SinaPage.loadWidget({
    trigger: {
        id: "top_bar_wrap"
    },
    require: [{
        url: "//finance.sina.com.cn/other/src/pageTools.final.js"
    }],
    triggerAhead: false,
    onAfterLoad: function() {
        new PageTool.SetScrollFixed({
            wrap: "top_bar",
            start: "top_bar_wrap",
            end: "article-bottom",
            fixedClass: "top-bar-fixed"
        });
    }
});
SinaPage.loadWidget({
    require: [{
        url: "//finance.sina.com.cn/other/src/pageTools.final.js"
    }, {
        url: "//n.sinaimg.cn/finance/fe/share.min.js?v=20180321"
    }],
    onAfterLoad: function() {
        new PageTool.FontAdjustor();
        new PageTool.AddFavorite({
            docid: SINA_TEXT_PAGE_INFO.docID
        });
        var c = document.getElementById("artibody").getElementsByTagName("img")[0];
        var b = $(".main-title").html().replace(/<[^<>]*?font[^<>]*?>/gi, "");
        var a = $('meta[name="mobile-agent"]').eq(0).attr('content').split('=')[2] || window.location.href;
        var d = new FnShare("#top_bar",{
            url: a,
            wxurl: a,
            img: c ? c.src : "",
            title: b
        });
        $('[node-type="comment"]').on("click", function() {
            var e = $("#bottom_sina_comment").offset().top;
            $("body,html").animate({
                scrollTop: e
            }, 500);
        });
        $('[node-type="share-more"], #share_more').on("mouseover", function() {
            $("#share_more").show();
        });
        $('[node-type="share-more"], #share_more').on("mouseleave", function() {
            $("#share_more").hide();
        });
    }
});
SinaPage.loadWidget({
    require: [{
        url: "//finance.sina.com.cn/other/src/article-comment-2017.js"
    }],
    onAfterLoad: function() {
        var f = window.SINA_TEXT_PAGE_INFO;
        var a = window.___sinacMNT___;
        var c = "bottom_sina_comment";
        var e = {
            channel: f.channel,
            newsid: f.newsid,
            allNewsid: "",
            parent: "",
            encoding: "utf-8",
            commented: function(h, g) {},
            share_url: location.href.split("#")[0],
            video_url: "",
            img_url: "",
            postTip: "\u6211\u6709\u8bdd\u8981\u8bf4...",
            autoGrow: false,
            content: ""
        };
        var d = {
            url: "",
            channel: f.channel,
            newsid: f.newsid,
            group: 0,
            encoding: "utf-8",
            hotPageNum: 3,
            latestPageNum: 3,
            replyShowNum: 3,
            replyPageNum: 15,
            replyClickMoreTimes: 3,
            clickMoreTimes: 0,
            maxWordCount: 200,
            loaded: function(g) {
                var h = function h(i) {
                    i = i + "";
                    var j = /(-?\d+)(\d{3})/;
                    while (j.test(i)) {
                        i = i.replace(j, "$1,$2");
                    }
                    return i;
                };
                if(g.data.news.status=='N_CLOSE'){
                    $('.tool-icon.tool-cmt').hide();
                }else{
                    if (g.data && g.data.count && g.data.count.total) {
                        $('[node-type="comment-num"]').html(h(g.data.count.total));
                    } else {
                        $('[node-type="comment-num"]').html('');
                    }
                }
            },
            beforeLoad: function() {}
        };
        var b = {
            isBBS: 0,   //是否是论坛页面
            hideList: SINA_TEXT_PAGE_INFO.hideCommentList,   //是否隐藏列表，某些新闻需要隐藏列表，加载数据但不渲染列表
            hideComment: SINA_TEXT_PAGE_INFO.hideComment   //是否隐藏评论
        };
        window.bottom_comment = new a.cmnt.FormList(c,e,d,b);
    }
});
SinaPage.loadWidget({
    trigger: {
        id: "tab_related"
    },
    require: [[{
        url: "//sjs0.sinajs.cn/video/sinaplayer/js/page/player_v1.js"
    }, {
        url: "//h5.sinaimg.cn/m/videoPlayer/js/ty.e56f55e8.js"
    }, {
        url: "//news.sina.com.cn/js/pctianyi/sima.js"
    }], {
        url: "//news.sina.com.cn/js/pctianyi/tianyi.js"
    }, {
        url: "//auto.sina.com.cn/apps/auto-atc-feed/js/feed-app.js"
    }, {
        url: "//n.sinaimg.cn/finance/page/ent/js/weiboList.js"
    }, {
        url: "//n.sinaimg.cn/finance/fe/Tab-min.js"
    }],
    onAfterLoad: function() {
        new PageTool.SetScrollFixed({
            wrap: "tab_related_btn",
            start: "tab_related",
            fixedClass: "tab-related-fixed"
        });
        var a = new Tab({
            bonds: [["tab01_btn01", "tab01_cont01"], ["tab01_btn02", "tab01_cont02"]],
            selected: "cur",
            trigger: "click",
            onAfter: function(e) {
                var c = this;
                var b = $("#tab01_btn02");
                var d = $("#tab_related").offset().top;
                $("body,html").animate({
                    scrollTop: d
                }, 500);
                if (e == 1 && b.attr("data-first") != "1") {
                    new WeiboList({
                        id: "related_wb",
                        keywords: $("#keywords").attr("data-wbkey")
                    });
                    b.attr("data-first", "1");
                }
            }
        });
    }
});
SinaPage.loadWidget({
    trigger: {
        id: "last_side_ad"
    },
    require: [{
        url: "//finance.sina.com.cn/other/src/pageTools.final.js"
    }],
    triggerAhead: false,
    onAfterLoad: function() {
        //new PageTool.SetScrollFixed({
        //    wrap: "last_side_ad",
        //    start: "last_ad_wrap",
        //    fixedClass: "com-fixed",
        //    //onFixed:function(){
        //    //    if($('#top_bar').hasClass('top-bar-fixed')){
        //    //        this.obj.addClass('com-fixed-02');
        //    //    }
        //    //}
        //});
        var $gg_last = $('.gg-last'),gg_last_top =$gg_last.offset().top,gg_last_height=parseInt($gg_last.css('height'),10);
        var $sideObj = $('#last_side_ad');
        $(window).on('scroll',function(){
            var _curTop = $(window).scrollTop();
            if(_curTop >= (gg_last_top+gg_last_height)){
                $sideObj.addClass('com-fixed');
                if($('#top_bar').hasClass('top-bar-fixed')){
                    $sideObj.addClass('com-fixed-02');
                }else{
                    $sideObj.removeClass('com-fixed-02');
                }
            }else{
                $sideObj.removeClass('com-fixed com-fixed-02');
            }
        });
    }
});

/*鹏辉需求 页面通读率统计*/
$(function(){
    var uid,plat = 'pc',readyTime = new Date*1;
    var docid = $('meta[name="publishid"]').attr('content') || $('.art_content').data('docid') || '0';

    var $tag = $('#keywords').eq(0),hasTag = $tag.length,tagTop,tagReveal = false,readMaxHeight = 0;
    if(hasTag){
        tagTop = $tag.offset().top;
    }
    $(window).on('scroll',function(){
        var scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop,
            winHeight = document.documentElement.clientHeight;
        if(scrollY + winHeight > readMaxHeight){
            readMaxHeight = scrollY + winHeight;
        }
        if(hasTag && scrollY + winHeight >= tagTop && !tagReveal){
            tagReveal = true;
        }
    }).trigger('scroll');

    window.addEventListener('unload',function(){
        var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
        var nowHeight = (window.scrollY || document.documentElement.scrollTop)
            + (document.documentElement.clientHeight || document.body.clientHeight);
        if(plat === 'wap'){
            uid = window.userInfo && window.userInfo.uid || '';
        }else{
            uid = window.sinaSSOController && sinaSSOController.get51UCCookie() && sinaSSOController.get51UCCookie().uid || '';
        }
        var read_ratio = tagReveal ? 100 : Math.round((readMaxHeight / scrollHeight) * 100);
        var stay_time = Math.round((new Date * 1 - readyTime) / 1000);

        $.ajax({
            url : '//xunjia.auto.sina.cn/api/track/adv/page/pbl.json',
            type: 'POST',
            async: false,
            data:{
                info:{
                    uid : uid,
                    stay_time : stay_time,
                    read_ratio: read_ratio,
                    plat : plat,
                    url:location.href,
                    sinaglobal:cookie('SINAGLOBAL') || 0,
                    apache:cookie('Apache') || 0,
                    browser:navigator.userAgent,
                    docid:docid
                }
            }
        });
    });
});