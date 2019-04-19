$('ul[id^="imgs_cont"]').each(function(){
    if ($(this) && $(this).children().length > 7) {
        $(this).children(':gt(6)').remove();
    }
    var cont=$(this).siblings('#moveiconsbox #icons_cont');
    if (cont && cont.children().length > 7) {
        cont.children(':gt(6)').remove();
    }
});
// if ($('#imgs_cont') && $('#imgs_cont').children().length > 7) {
//     $('#imgs_cont').children(':gt(6)').remove();
// }

// if ($('#moveiconsbox #icons_cont') && $('#moveiconsbox #icons_cont').children().length > 7) {
//     $('#moveiconsbox #icons_cont').children(':gt(6)').remove();
// }

function vehicleBoxPrice(){
    var stringSubid = '',
        vehicleURL = 'http://db.auto.sina.com.cn/api/cms/car/getSerialInfo.json?callback=?&serialids=';
    $('.vehicle-box .price-box .price').each(function(){
        var that = $(this),
            thatBox = that.parents('.vehicle-box'),
            thatSubid = thatBox.attr('data-subid');
        if(typeof thatSubid !== 'undefined' && thatSubid !== ''){
            stringSubid += ','+thatSubid;
            thatBox.addClass('vehicle'+thatSubid);
        }
    });
    if(stringSubid !== ''){
        stringSubid = stringSubid.slice(1);
        vehicleURL = vehicleURL+stringSubid;
        $.getJSON(vehicleURL, function(data){
            var datas = data.data;
            for(var subrand in datas){
                var sPrice = datas[subrand].serialGuidePriceArea;
                if(sPrice == (''||'0.00-0.00万元'||'暂时无报价')){
                    $('.vehicle'+subrand).find('.price').text('暂无报价');
                } else {
                    $('.vehicle'+subrand).find('.price').text(sPrice);
                }
            }
        });
    }
}
vehicleBoxPrice();

//焦点图切换效果
/*
 imgsCon  //运动元素的id或class
 iconsCon  //包含按钮的元素的id或class
 prevIcon  //向前按钮的元素的id或class
 nextIcon   //向后按钮的元素的id或class
 chooseIcon   //按钮被选择时增加或删除的class  默认是on
 focusNum  //包含显示当前第几页的元素的id或class
 moveTime  //动画运动时间  默认800毫秒
 delayTime  //动画延迟时间  默认5000毫秒
 isAuto  //是否自动轮换  默认不自动
 isCycle  //是否运动到头继续循环  默认不循环
 isSingleImg // 是单图刷的轮换还是多图刷刷刷的轮换 默认是刷刷刷的轮换
 direction //运动方向 默认是水平运动
 step //每次轮的步数 默认是1
 imgDescDom //用于存放图片描述信息的id或class
 cannotClickClass //左右不能点击时加的class 默认加end
 beginPos //适用于起始位置不是left 0 的运动 默认是0
 */
function autoMove(options) {

    var $imgs_c = $(options.imgsCon),
        $icons_c = $(options.imgsCon).parent().parent().find(options.iconsCon),
        $imgs = $imgs_c.children(),
        $icons = $icons_c.children(),
        iconsTagName = $icons.eq(0).get(0) ? $icons.eq(0).get(0).tagName.toLowerCase() : 'li',
        $imgDescDom = $(options.imgDescDom),
        $prevIcon = $(options.imgsCon).parent().parent().find(options.prevIcon),
        $nextIcon = $(options.imgsCon).parent().parent().find(options.nextIcon),
        chooseIcon = options.chooseIcon ? options.chooseIcon : 'on',
        step = options.step ? options.step : 1,
        cannotClickClass = options.cannotClickClass || 'end',
        moveTime = options.moveTime ? options.moveTime : 800,
        delayTime = options.delayTime ? options.delayTime : 5000,
        isSingleImg = options.isSingleImg ? options.isSingleImg : false,//是否是单图刷的轮换，默认是刷刷刷的轮换
        isAuto = options.isAuto ? options.isAuto : false,
        isCycle = options.isCycle ? options.isCycle : false,
        directionData = {},
        direction = options.direction ? options.direction : 'left',
        moveDistance = direction === 'left' ? $imgs.eq(0).outerWidth(true) : $imgs.eq(0).outerHeight(true),
        beginPos = options.beginPos ? options.beginPos : 0,
        $focusNum,
        page = 0,
        moveTimer = null,
        showImgLen = $imgs.length,
        move;
    if (options.focusNum) {
        $focusNum = $(options.focusNum);
    }

    if (showImgLen === step) {
        $prevIcon.addClass(cannotClickClass);
        $nextIcon.addClass(cannotClickClass);
        return;
    } else if (step == 1 && isCycle && !isSingleImg) {
        $imgs_c.append($imgs.eq(0).clone(true));
        if (direction === 'left') {
            $imgs_c.width(moveDistance * (showImgLen + 1));
        }
    } else if (!isSingleImg) {
        if (direction === 'left') {
            $imgs_c.width(moveDistance * showImgLen);
        }
    } else if (isSingleImg) {
        $imgs.eq(0).css(direction, '0px');
    }

    move = function(){
        window.clearTimeout(moveTimer);
        if (!$imgs_c.is(':animated') && !isSingleImg) {
            page++;
            if (page === Math.ceil(showImgLen / step) && isCycle) {
                if ($focusNum) {
                    $focusNum.html(1);
                }
                $imgs_c.next().children().eq(0).addClass(chooseIcon).siblings().removeClass(chooseIcon);
                directionData[direction] = beginPos - moveDistance * step * page;
                $imgs_c.stop().animate(directionData, moveTime, function () {
                    $imgs_c.css(direction, beginPos + 'px');
                    page = 0;
                    if (options.callback) {
                        options.callback(page);
                    }
                    if (isAuto) {
                        moveTimer = window.setTimeout(move, delayTime);
                    }
                });
            } else if (page === Math.ceil(showImgLen / step) && !isCycle) {
                page--;
                return;
            } else {
                if ($focusNum) {
                    $focusNum.html(page + 1);
                }
                directionData[direction] = beginPos - moveDistance * step * page;
                $imgs_c.stop().animate(directionData, moveTime, function() {
                    if (options.callback) {
                        options.callback(page);
                    }
                    if (page + 1 === Math.ceil(showImgLen / step) && !isCycle) {
                        $nextIcon.addClass(cannotClickClass);
                    }
                });
                $imgs_c.next().children().eq(page).addClass(chooseIcon).siblings().removeClass(chooseIcon);
                if (isAuto) {
                    moveTimer = window.setTimeout(move, delayTime);
                }
            }
        } else if (!$imgs.eq(page).is(':animated') && isSingleImg) {
            page++;
            if (page === showImgLen) {
                page = 0;
                directionData[direction] = beginPos - moveDistance;
                $imgs.eq(showImgLen - 1).stop().animate(directionData, moveTime);
            } else {
                directionData[direction] = beginPos - moveDistance;
                $imgs.eq(page - 1).stop().animate(directionData, moveTime);
            }
            directionData[direction] = beginPos;
            $imgs.eq(page).css(direction, moveDistance).stop().animate(directionData, moveTime);
            if (options.isZhengwenye) {
                $imgs_c.next().children().children().eq(page).addClass(chooseIcon).siblings().removeClass(chooseIcon);
            } else {
                $imgs_c.next().children().eq(page).addClass(chooseIcon).siblings().removeClass(chooseIcon);
            }
            if (isAuto) {
                moveTimer = window.setTimeout(move, delayTime);
            }
        }
    };

    if (isAuto) {
        moveTimer = window.setTimeout(move, delayTime);
    }

    $imgs_c.delegate($(this).children(), 'mouseover', function (e) {
        window.clearTimeout(moveTimer);
    });

    $imgs_c.delegate($(this).children(), 'mouseout', function (e) {
        if (isAuto) {
            moveTimer = window.setTimeout(move, delayTime);
        }
    });

    $icons_c.delegate(iconsTagName, 'mouseover', function (e) {
        window.clearTimeout(moveTimer);
        if (!isSingleImg) {
            page = $(e.target).index();
            if ($focusNum) {
                $focusNum.html(page + 1);
            }
            directionData[direction] = beginPos - moveDistance * step * page;
            $imgs_c.stop().animate(directionData, moveTime, function() {
                if (options.callback) {
                    options.callback(page);
                }
            });
            $(e.target).addClass(chooseIcon).siblings().removeClass(chooseIcon);
        } else if (isSingleImg && $(e.target).index() !== page) {
            if (page > $(e.target).index()) {//点顺序小于当前的按钮
                $imgs.eq($(e.target).index()).css(direction, beginPos - moveDistance);
                directionData[direction] = moveDistance - beginPos;
                $imgs.eq(page).stop(false, true).animate(directionData, moveTime);
                page = $(e.target).index();
                directionData[direction] = beginPos;
                $imgs.eq(page).stop().animate(directionData, moveTime);
                $(e.target).addClass(chooseIcon).siblings().removeClass(chooseIcon);
            } else {
                directionData[direction] = beginPos - moveDistance;
                $imgs.eq(page).stop(false, true).animate(directionData, moveTime);
                page = $(e.target).index();
                directionData[direction] = beginPos;
                $imgs.eq(page).css(direction, moveDistance).stop().animate(directionData, moveTime);
                $(e.target).addClass(chooseIcon).siblings().removeClass(chooseIcon);
            }
        }
    });

    $icons_c.delegate(iconsTagName, 'mouseout', function (e) {
        if (isAuto) {
            moveTimer = window.setTimeout(move, delayTime);
        }
    });

    $prevIcon.click(function() {
        $(this).next().removeClass(cannotClickClass);//$nextIcon
        if (page === 0 && !isCycle && !isSingleImg) {
            return;
        } else {
            window.clearTimeout(moveTimer);
            if (typeof(SUDA) != 'undefined') {
                var para = window.location.href+'#!?sourcetype=wap_auto';
                SUDA.log && SUDA.log('', '', para);
            }
            if (!$imgs_c.is(':animated') && !isSingleImg) {
                page--;
                if (page === -1) {
                    $imgs_c.css(direction, beginPos - moveDistance * step * showImgLen + 'px');
                    page = showImgLen - 1;
                }
                if ($focusNum) {
                    $focusNum.html(page + 1);
                }
                directionData[direction] = beginPos - moveDistance * step * page;
                $imgs_c.stop().animate(directionData, moveTime, function() {
                    if (options.callback) {
                        options.callback(page);
                    }
                    if (page === 0 && !isCycle) {
                        $prevIcon.addClass(cannotClickClass);
                    }
                });
                $imgs_c.next().children().eq(page).addClass(chooseIcon).siblings().removeClass(chooseIcon);
                if (isAuto) {
                    moveTimer = window.setTimeout(move, delayTime);
                }
            } else if (!$imgs.eq(page).is(':animated') && isSingleImg) {
                page--;
                if (page === -1) {
                    page = showImgLen - 1;
                    $imgs.eq(page).css(direction, beginPos - moveDistance);
                    directionData[direction] = moveDistance - beginPos;
                    $imgs.eq(0).stop(false, true).animate(directionData, moveTime);
                } else {
                    $imgs.eq(page).css(direction, beginPos - moveDistance);
                    directionData[direction] = moveDistance - beginPos;
                    $imgs.eq(page + 1).stop(false, true).animate(directionData, moveTime);
                }
                directionData[direction] = beginPos;
                $imgs.eq(page).stop().animate(directionData, moveTime);
                if (options.isZhengwenye) {
                    $imgs_c.next().children().children().eq(page).addClass(chooseIcon).siblings().removeClass(chooseIcon);
                } else {
                    $imgs_c.next().children().eq(page).addClass(chooseIcon).siblings().removeClass(chooseIcon);
                }
                if (isAuto) {
                    moveTimer = window.setTimeout(move, delayTime);
                }
            }
        }
    });
    $nextIcon.click(function() {
        $(this).prev().removeClass(cannotClickClass);//$prevIcon
        if (page === showImgLen - 1 && !isCycle && !isSingleImg) {
            return;
        } else {
            if (typeof(SUDA) != 'undefined') {
                var para = window.location.href+'#!?sourcetype=wap_auto';
                SUDA.log && SUDA.log('', '', para);
            }
            move();
        }
    });
}
autoMove({
    'imgsCon': '#J_modelImg',
    'prevIcon':'#J_modelPrev',
    'nextIcon': '#J_modelNext',
    'step': 3
});
$('ul[id^="imgs_cont"]').each(function(i,v){
    if ($(this).find('li').length > 1) {
        $(this).parent("div").attr("id","movecont_"+i);
        if($(this).parent("div").is(".movecont")==false){
            $(this).parent("div").addClass("movecont");
        }
        autoMove({
            'imgsCon': '#movecont_'+i+' #imgs_cont',
            'iconsCon': '#movecont_'+i+' #icons_cont',
            'prevIcon': '#movecont_'+i+' #prevIcon',
            'nextIcon': '#movecont_'+i+' #nextIcon',
            'chooseIcon': 'on',
            'isCycle': true,
            'isSingleImg': true,
            'isZhengwenye': true
        });
    } else if ($(this).find('li').length == 1) {
        $(this).find('li').css('left', '0px');
    }
});
// if ($('#imgs_cont li').length > 1) {
//     autoMove({
//         'imgsCon': '#imgs_cont',
//         'iconsCon': '#icons_cont',
//         'prevIcon': '#prevIcon',
//         'nextIcon': '#nextIcon',
//         'chooseIcon': 'on',
//         'isCycle': true,
//         'isSingleImg': true,
//         'isZhengwenye': true
//     });
// } else if ($('#imgs_cont li').length == 1) {
//     $('#imgs_cont li').css('left', '0px');
// }

//获取浏览器相关信息
function getBrowserInfo() {
    var agent = navigator.userAgent.toLowerCase(),
        regStr_ie = /msie [\d.]+;/gi,
        regStr_ff = /firefox\/[\d.]+/gi,
        regStr_chrome = /chrome\/[\d.]+/gi,
        regStr_saf = /safari\/[\d.]+/gi;
    //IE
    if(agent.indexOf("msie") > 0) {
        return agent.match(regStr_ie);
    }
    //firefox
    if(agent.indexOf("firefox") > 0) {
        return agent.match(regStr_ff);
    }
    //Safari
    if(agent.indexOf("safari") > 0 && agent.indexOf("chrome") < 0) {
        return agent.match(regStr_saf);
    }
    //Chrome
    if(agent.indexOf("chrome") > 0) {
        return agent.match(regStr_chrome);
    }
    // return "";
}
//获取操作系统
function detectOS() {
    var sUserAgent = navigator.userAgent;
    var isWin = (navigator.platform == "Win32") || (navigator.platform == "Windows");
    var isMac = (navigator.platform == "Mac68K") || (navigator.platform == "MacPPC") || (navigator.platform == "Macintosh") || (navigator.platform == "MacIntel");
    if (isMac) return "Mac";
    var isUnix = (navigator.platform == "X11") && !isWin && !isMac;
    if (isUnix) return "Unix";
    var isLinux = (String(navigator.platform).indexOf("Linux") > -1);
    if (isLinux) return "Linux";
    if (isWin) {
        var isWin2K = sUserAgent.indexOf("Windows NT 5.0") > -1 || sUserAgent.indexOf("Windows 2000") > -1;
        if (isWin2K) return "Win2000";
        var isWinXP = sUserAgent.indexOf("Windows NT 5.1") > -1 || sUserAgent.indexOf("Windows XP") > -1;
        if (isWinXP) return "WinXP";
        var isWin2003 = sUserAgent.indexOf("Windows NT 5.2") > -1 || sUserAgent.indexOf("Windows 2003") > -1;
        if (isWin2003) return "Win2003";
        var isWinVista= sUserAgent.indexOf("Windows NT 6.0") > -1 || sUserAgent.indexOf("Windows Vista") > -1;
        if (isWinVista) return "WinVista";
        var isWin7 = sUserAgent.indexOf("Windows NT 6.1") > -1 || sUserAgent.indexOf("Windows 7") > -1;
        if (isWin7) return "Win7";
    }
    return "other";
}

/*many tuji automove start*/
if ($('.manytuji-swiper-container').length > 0 && typeof Swiper != 'undefined') {
    $('.manytuji-swiper-container').each(function(index, el) {
        if ($(el) && $(el).find('.swiper-slide').length > 7) {
            for (var manyi = $(el).find('.swiper-slide').length; manyi > 7 ; manyi--) {
                $(el).find('.swiper-slide').eq(manyi - 1).remove();
            }
        }

        new Swiper($(el), {
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            direction: 'horizontal',
            autoHeight: true,
            loop: false,
            pagination: '.swiper-pagination-box',
            paginationClickable: true,
            paginationBulletRender: function (swiper, index, className) {
                var imgtemp = $(swiper.paginationContainer[0]).parent().siblings('.swiper-wrapper').find('.swiper-slide').eq(index).find('img');
                return '<img class="' + className + '" src="' + (imgtemp.attr('data-src') || imgtemp.attr('src')) +'" alt="">';
            },
            preloadImages: false,
            lazyLoading: true,
            lazyLoadingInPrevNext: true,
            lazyLoadingInPrevNextAmount: 2,
            onInit: function(swiper){
                // console.log('ok')
            }
        });
    });

    $('.manytuji-swiper-container').mouseenter(function() {
        $(this).find('.swiper-pagination').show();
        $(this).find('.swiper-button-prev').show();
        $(this).find('.swiper-button-next').show();
    }).mouseleave(function() {
        $(this).find('.swiper-pagination').hide();
        $(this).find('.swiper-button-prev').hide();
        $(this).find('.swiper-button-next').hide();
    });
}
/*many tuji automove end*/

/*many tuji threecars!! automove start*/
if ($('.manytuji-swiper-container-threecars').length > 0 && typeof Swiper != 'undefined') {
    $('.manytuji-swiper-container-threecars').each(function(index, el) {
        if ($(el) && $(el).find('.swiper-slide').length > 7) {
            for (var manyi = $(el).find('.swiper-slide').length; manyi > 7 ; manyi--) {
                $(el).find('.swiper-slide').eq(manyi - 1).remove();
            }
        }

        new Swiper($(el), {
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            direction: 'horizontal',
            autoHeight: true,
            loop: false,
            onInit: function(swiper){
                // console.log('ok')
            }
        });
    });
}
/*many tuji threecars!! automove end*/

$(function(){
    //评论切换功能 start
    if ($('.about_kb_comment_tit_list').length > 0) {
        $('.about_kb_comment_tit_list').delegate('.li', 'click', function() {
            $(this).addClass('act').siblings('.li').removeClass('act');
            $(this).parents('#div2').find('.kbpinglunlist').addClass('none');
            $(this).parents('#div2').find('.kbpinglunlist').eq($(this).attr('data-i')).removeClass('none');
        });

    }
    //评论切换功能 end
    //车型问答
    setTimeout(function(){
        $('.car_ask_content #J_Article_Player').each(function(i,item){
            var me = $(this);
            if(me.find('embed').length){
                var $pContent = me.parents('.car_ask_content');
                $pContent.removeClass('none');
                $pContent.prev('.car_ask_title').removeClass('none');
            }
        });
    },500);
    //投诉详情
    if ($('.problemProgress').length) {
        $.getJSON('http://feedback.auto.sina.com.cn/api/getFeedbackState?article_id=' + window.SINA_TEXT_PAGE_INFO.newsid.split('-')[1] + '&callback=?', function(json) {
            if (json.status == '1000') {
                var temphtml = '';
                var tempclass = '';
                if (json.data.status.length) {
                    for (var i = 0; i <json.data.status.length; i++) {
                        if (json.data.status.length == 2) {
                            $('.problemProgress ul').addClass('two');
                            if (i == 0) {
                                tempclass = json.data.status[i].has_over ? 'hasdone' : 'unfinished';
                                temphtml += '<li class="' + tempclass + '">';
                                temphtml += json.data.status[i].has_over ? '<img src="http://i1.sinaimg.cn/qc/2017/1124/hasdonefirst.png" alt="">' : '<img src="http://i0.sinaimg.cn/qc/2017/1124/unfinishedfirst.png" alt="">';
                                temphtml += '<div class="tit">' + json.data.status[i].name + '</div></li>';
                            } else {
                                tempclass = json.data.status[i].has_over ? 'hasdone' : 'unfinished';
                                temphtml += '<li class="fR ' + tempclass + '">';
                                temphtml += json.data.status[i].has_over ? '<img src="http://i1.sinaimg.cn/qc/2017/1124/hasdonefirst.png" alt="">' : '<img src="http://i0.sinaimg.cn/qc/2017/1124/unfinishedfirst.png" alt="">';
                                temphtml += '<div class="tit">' + json.data.status[i].name + '</div></li>';
                            }
                        }
                        if (json.data.status.length == 3) {
                            $('.problemProgress ul').addClass('three');
                            if (i == 0) {
                                tempclass = json.data.status[i].has_over ? 'hasdone' : 'unfinished';
                                temphtml += '<li class="' + tempclass + '">';
                                temphtml += json.data.status[i].has_over ? '<img src="http://i1.sinaimg.cn/qc/2017/1124/hasdonefirst.png" alt="">' : '<img src="http://i0.sinaimg.cn/qc/2017/1124/unfinishedfirst.png" alt="">';
                                temphtml += '<div class="tit">' + json.data.status[i].name + '</div></li>';
                            } else if (i ==1) {
                                tempclass = json.data.status[i].has_over ? 'hasdone' : 'unfinished';
                                temphtml += '<li class="mid ' + tempclass + '">';
                                temphtml += json.data.status[i].has_over ? '<img src="http://i1.sinaimg.cn/qc/2017/1124/hasdonefirst.png" alt="">' : '<img src="http://i0.sinaimg.cn/qc/2017/1124/unfinishedfirst.png" alt="">';
                                temphtml += '<div class="tit">' + json.data.status[i].name + '</div></li>';
                            } else {
                                tempclass = json.data.status[i].has_over ? 'hasdone' : 'unfinished';
                                temphtml += '<li class="fR ' + tempclass + '">';
                                temphtml += json.data.status[i].has_over ? '<img src="http://i1.sinaimg.cn/qc/2017/1124/hasdonefirst.png" alt="">' : '<img src="http://i0.sinaimg.cn/qc/2017/1124/unfinishedfirst.png" alt="">';
                                temphtml += '<div class="tit">' + json.data.status[i].name + '</div></li>';
                            }
                        }
                    }
                    $('.problemProgress ul').html(temphtml);
                    $('.problemProgress ul .unfinished').each(function(index, el) {
                        $(el).prev('li').addClass('grey');
                    });
                } else {
                    $('.problemProgress').hide();
                }

                if (json.data.pingjia.content) {
                    $(".satisfaction .star_in span").removeClass('h').addClass('g');
                    $(".satisfaction .star_in span:lt(" + json.data.pingjia.score + ")").removeClass('g');
                    $(".satisfaction .star .txt").html(json.data.pingjia.score_desc);
                    $(".satisfaction .desc").html(json.data.pingjia.content);
                } else {
                    $('.satisfaction').hide();
                }

                if (json.data.reply.reply) {
                    $(".officialReply .txt p").html(json.data.reply.reply);
                    $(".officialReply .txt .txttime").html(json.data.reply.date);
                } else {
                    $(".officialReply").hide();
                }
            }
        });
    }
});
//select layer
function handle(elem){
    elem.hover(function(){
        var index = $(this).index();
        var tab_B = $(this).parent();
        $(this).siblings().removeClass("on");
        $(this).addClass("on");
        tab_B.next().children().hide().eq(index).show();
    });
}
handle($('.tab-head a'));
// extent read
$('.extend-read').each(function(idx,node){
    $(node).find('img').attr('width','auto')
})
// shijia  begin
// &#188;ó&#212;&#216;&#190;-&#207;úéì

var getDealer=function(wrap,cityId,dataId,limit,type){
        var type = type=='car'?'Car':'Subbrand';
        var dealerUrl='http://data.auto.sina.com.cn/api/dataautoapi/get'+type+'Dealer/'+dataId+'/';
        // var store=store?store:'4s';
        // var index=store=='4s'?0:1;
        dealerUrl=dealerUrl+cityId+'?callback=?';
        $.getJSON(dealerUrl,function(json){
            var dealerHtml='';
            dealerHtml=formatterDealerData(json['4s'],limit);
            wrap.find('ul').html(dealerHtml);
        })
    },
    formatterDealerData=function(data,limit){
        var newsHtml='',telHtml='',addHtml='',dealerHtml='';
        limit=data.length>limit?limit:data.length;
        for(var i=0;i<limit;i++){
            newsData=data[i].news?data[i].news:'';
            if(data[i].tel.length>0){
                telHtml='<p class="phone_c"><em>&#207;úê&#219;èè&#207;&#223;￡o</em><span class="phone"><span>'+data[i].tel+'</span><i></i></span><i class="mark" style="display: none;">&#184;&#195;μ&#231;&#187;°&#190;-1yè&#207;&#214;¤￡&#172;&#199;&#235;·&#197;D&#196;2|′ò</i></p>';
            }
            if(data[i].address!=" "){
                addHtml='<p><em>μê&#195;&#230;μ&#216;&#214;·￡o</em><span class="add">'+data[i].address+'</span><a href="http://dealer.auto.sina.com.cn/dealer/map/?vendor_id='+data[i].vid+'" class="map" target="_blank">2é&#191;′μ&#216;í&#188;&gt;&gt;</a></p>';
            }
            if(newsData.length>0){
                // for(var j=0;j<newsData.length;j++){
                var newsLen=newsData.length<4?newsData.length:4;
                newsHtml='<em class="fL">éì&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#187;ú￡o</em><div class="oppo_c">';
                for(var j=0;j<newsLen;j++){
                    newsHtml+='<a href="'+newsData[j].link+'" target="_blank" class="oppo">'+newsData[j].title+'</a>';
                }
                newsHtml+='</div>';
            }
            dealerHtml+='<li class="fL"><h6 class="title clearfix"><span class="fR price">'
                +data[i].price_data.price_min+'íò-'+data[i].price_data.price_max+'íò</span><i class="fL"></i><a href="http://weibo.com/'+data[i].vid+'" class="fL name" target="_blank">'+data[i].name+'</a></h6>'+
                telHtml+addHtml+'</li>'
        }
        return dealerHtml;
    };
//3&#245;ê&#188;&#187;ˉμ±&#199;°3&#199;êD
// var province = null;
// var initCurCity=function(){
//     jQuery.getScript("http://supports.auto.sina.com.cn/api/ip.php").done(function(){
//         var cityName=get_city(),cityArr,cityCode;
//          province = province;
//         cityArr=get_ip_city();
//         cityCode=cityArr['citycode'];
//         vcityid=cityCode;

//         // getDealer($('#J_dealer'),vcityid,subid,2);//3&#245;ê&#188;&#187;ˉ&#190;-&#207;úéìáD±í

//      })
// }
// initCurCity();

// &#209;ˉμ×&#188;&#219;
//ê&#212;&#188;Y&#161;￠&#209;ˉμ×&#188;&#219;μˉ&#191;ò3&#245;ê&#188;&#187;ˉ
function msgrest(){
    $("#province_pop").find("option").eq(0).attr("selected","selected");
    $("#city_pop").find("option").eq(0).attr("selected","selected");
    $("#errorarea p").css("color","#a2a2a2").html("");
    $("#errorname p").css("color","#a2a2a2").html("");
    $("#errordate p").css("color","#a2a2a2").html("");
    $("#errorphone p").css("color","#a2a2a2").html("");
}

var tempArr = [];//&#182;&#212;±è1|&#196;ü￡&#172;′&#230;·&#197;3μID￡&#172;3¤&#182;è×&#238;′ó&#206;a4

if (!Array.prototype.indexOf) {//2é&#209;ˉ&#196;3&#212;a&#203;&#216;&#212;úêy×é&#214;Dμ&#196;&#207;&#194;±ê￡&#172;&#188;&#230;èYIE8
    Array.prototype.indexOf = function(str) {
        for (var i = 0; i < this.length; i++) {
            if (str == this[i]) {
                return i;
            }
        }
        return -1;
    }
}

var province = null ;
//ê&#161;·Y3&#199;êD
function getProvince(obj, province) {
    var pHtml = '';

    for (var i in province) {
        if (province.hasOwnProperty(i)) {
            pHtml += '<option value="'+ i +'">'+ province[i] +'</option>'
        }
    }
    obj.append(pHtml);
}

function getCity(obj, city, pid) {
    var _index = pid,
        cHtml = '';
    for (var i in city[pid]) {
        if (city[pid].hasOwnProperty(i)) {
            cHtml += '<option value="'+ i +'">'+ city[pid][i] +'</option>'
        }
    }
    obj.html(cHtml);
}
//shijia  end

//cookieéè&#214;&#195;
var cookie = function(name, value, options) {
    if (typeof value != 'undefined') {
        options = options || {};
        if (value === null) {
            value = '';
            options = $.extend({}, options);
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString();
        }

        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else {
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = $.trim(cookies[i]);
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};

// 行情正文模块
function initHangqing(){
    var hqWrap = $('#dealerHangqing');
    if(!hqWrap.length){
        return;
    }
    var id = hqWrap.attr('data-bid') || '' ;
    if(id == ''){
        return;
    }
    var api = 'http://maiche.sina.com/Data/BizCard/index?source=0&callback=?&id='+id;
    var html = '<h3>商家信息</h3><div class="con">';
    $.getJSON(api,function(json){
        //console.log(json);
        var bidInfo = json.rows.biz_info;
        var sellerInfo = json.rows.seller_info;
        var tel = 0;
        if(bidInfo.tel_400 != ''){
            tel = bidInfo.tel_400 ;
            if(bidInfo.small_tel_400 != ''){
                tel = bidInfo.tel_400+'转'+bidInfo.small_tel_400;
            }
        }
        else if(bidInfo.tel_phone !=''){
            tel = bidInfo.tel_phone;
        }
        html += '<div class="hd">'+
            '<h4><a href="'+bidInfo.pc_url+'">'+bidInfo.biz_name+'</a></h4>'+
            '<p><span class="tel fR"><i class="tel"></i>'+tel+'</span><i class="address"></i>'+bidInfo.biz_address+
            '</p></div>';
        html += '<ul class="list clearfix">'
        for(var i=0;i<sellerInfo.length;i++){
            var sellerTel = 0;
            if(bidInfo.tel_400 && sellerInfo[i].small_number){
                sellerTel = bidInfo.tel_400  +'转'+sellerInfo[i].small_number ;
            }
            else{
                sellerTel = sellerInfo[i].mobile;
            }
            var classname= i%2 == 1 ? "odd" : '';

            html+='<li class="'+classname+'"><div class="item"><a href="'+sellerInfo[i].pc_url+'" class="img fL">'+
                '<img src="'+sellerInfo[i].avatar+'" alt="">'+
                '<span>'+sellerInfo[i].name+'</span></a>'+
                '<div class="info">'+
                '<p class="tag"><span>金牌销售<i></i></span></p>'+
                '<p class="tel"><i class="tel"></i>'+sellerTel+'</p>'+
                '<p>'+
                '<a href="'+sellerInfo[i].pc_url+'" class="msg-btn" target="_blank">给他留言</a>'+
                '</p>'+
                '</div>'+
                '</div></li>';
        }
        hqWrap.html(html);

    })
}
initHangqing();

//正文页吸底推广位
// if($("#J_threePop").size()<1){
//     $("#CCCFloatBarRight").css("bottom","111px");
//     $.ajax({
//         url:"http://interface.sina.cn/auto/inner/getChezhanPcSmartData.d.json",
//         type:"get",
//         dataType:"jsonp",
//         jsonp:"callback",
//         success:function(data){
//             if(data && data.data && data.data.data){
//                 var htmlLiList='';
//                 $("#J_threePop .alink ").attr("href",data.data.url);
//                 for(var i in data.data.data){
//                     htmlLiList+='<li class="fL">'+
//                                     '<div class="img">'+
//                                         '<a href="'+data.data.data[i].url+'" target="_blank">'+
//                                             '<img src="'+data.data.data[i].img180+'" alt="'+data.data.data[i].title+'">'+
//                                             '<i class="air-b"></i>'+
//                                             '<i class="air-w">'+data.data.data[i].title+'</i>'+
//                                         '</a>'+
//                                     '</div>'+
//                                 '</li>';
//                 }
//                 var htmlBottomPop = '<!-- 吸底 begin-->'+
//                                     '<div id="J_threePop" class="popbox315">'+
//                                         '<div class="threelist clearfix">'+
//                                             '<a class="alink fL" href="' + data.data.url +'" target="_blank"></a>'+
//                                             '<ul class="ilist120 fR clearfix">'+
//                                                 htmlLiList+
//                                             '</ul>'+
//                                         '</div>'+
//                                         '<i class="close-btn">关闭</i>'+
//                                     '</div>'+
//                                     '<div id="J_threePopOpen" class="popbox315-open" href="javascript:void(0);">展开</div>'+
//                                     '<!-- 吸底 end -->';
//                 $(".footer").after(htmlBottomPop);
//                 // var threeLeft = $('#articleArea').offset().left + 1000;
//                 // $('#J_threePopOpen').css('left', threeLeft);
//                 // $(window).resize(function(event) {
//                 //     threeLeft = $('#articleArea').offset().left + 1000;
//                 //     $('#J_threePopOpen').css('left', threeLeft);
//                 // });
//             }
//         }
//     });
// }
$('body').delegate('#J_threePop .close-btn', 'click', function() {
    $('#CCCFloatBarRight').css('bottom','80px');
    $('#J_threePop').hide();
    $('#J_threePopOpen').show();
});
$('body').delegate('#J_threePopOpen','click', function() {
    $(this).hide();
    $('#J_threePop').show();
});

// zhexiantu start
if (typeof echarts !== "undefined") {
    //处理走势图折线图最大最小值
    Array.prototype.max = function(){
        return Math.max.apply({},this)
    }
    Array.prototype.min = function(){
        return Math.min.apply({},this)
    }
    var strzerobackup = '000000000000000000';
    function getYMax (dataval) {//取y轴值中最大位数加1
        return (parseInt((parseInt(dataval.max())+'').substr(0,1)) + 1) + strzerobackup.substr(0,(parseInt(dataval.max())+'').length-1);
    }
    function getYMin (dataval) {//取y轴值中最小位数且其后尾均为0
        return (parseInt(dataval.min())+'').substr(0,1) + strzerobackup.substr(0,(parseInt(dataval.min())+'').length-1);
    }
    function setUpdateDot (dotdata, dotbox, dotboxwidth,piancha,color) {
        color = color || '#3cbdf7';
        var flag=false;
        for(var i = 0; i < dotdata.length; i++) {
            if (!dotdata[i] && flag) {
                $(dotbox).append(
                    '<div style="position:absolute;top:30%;left:'+ parseInt(piancha+i*dotboxwidth/dotdata.length) + 'px;width:40px;height:30px;text-align: center;">'+
                    '<i style="display:block;width:8px;height:8px;border: 3px solid ' + color + ';border-radius: 50%;margin: 0 auto;"></i>'+
                    '<span style="font-size:12px;text-align:center">\u5f85\u66f4\u65b0</span>'+
                    '</div>');
            } else if (dotdata[i]) {
                flag=true;
            }
        }
    }

    function setUpdateZhu (dotdata, dotbox, dotboxwidth,piancha) {
        var flag=false;
        for(var i = 0; i < dotdata.length; i++) {
            if (!dotdata[i] && flag) {
                $(dotbox).append(
                    '<div style="position:absolute;bottom:60px;left:'+ parseInt(piancha+i*dotboxwidth/dotdata.length) + 'px;width:40px;height:80px;text-align: center;">'+
                    '<i style="position:absolute;bottom:0px;left:8px;width:13px;height:55px;border: 3px dashed #9bce4a;"></i>'+
                    '<span style="position:absolute;top:0px;left:0px;font-size:12px;text-align:center">\u5f85\u66f4\u65b0</span>'+
                    '</div>');
            } else if (dotdata[i]) {
                flag=true;
            }
        }
    }

    //走势图柱状图
    if (typeof xiaoliang_val !== "undefined" && document.getElementById('trendchart2')) {
        //处理是否显示走势图柱形图及折线的x轴显示
        var hidetrendzhu = false,//走势图的柱形图隐藏的话折线图的x轴则显示
            xiaoliang_valrecord = 0,
            xiaoliang_valbackup = [];//保存有效值
        for( var i = 0; i < xiaoliang_val.length; i++) {
            if (!xiaoliang_val[i]) {
                xiaoliang_valrecord++;
            } else {
                xiaoliang_valbackup.push(xiaoliang_val[i]);
            }
        }
        if (xiaoliang_valrecord == xiaoliang_val.length) {
            hidetrendzhu = true;
        }
        if (hidetrendzhu) {
            $('#trendchart2').hide();
        }

        var chart_trendzhu = echarts.init(document.getElementById('trendchart2'));
        var chart_trendzhu_option = {
            color: ['#9bce4a'],
            tooltip: {
                trigger: 'axis'
            },
            legend: {
            },
            xAxis: [
                {
                    type: 'category',
                    data: chenjiao_month,
                    axisPointer: {
                        show: false,
                        type: 'line'
                    },
                    splitLine: {
                        // show:true
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '',
                    axisLabel: {
                        formatter: ''
                    }
                }
            ],
            series: [
                {
                    name:'成交价',
                    type:'bar',
                    barWidth:'30%',
                    itemStyle : {
                        normal: {
                            label : {
                                show: true,
                                position: 'top',
                                textStyle:{
                                    color:'#333',
                                    fontWeight: 'bold',
                                    fontSize: '14'
                                }
                            }
                        }
                    },
                    data:xiaoliang_val
                }
            ]
        };
        chart_trendzhu.setOption(chart_trendzhu_option);

        setUpdateZhu (xiaoliang_val, $('#trendchart2'), 640, 90);
    } else {
        $('#trendchart2').hide();
        hidetrendzhu = true;
    }

    //走势图折线图
    if (typeof chenjiao_val !== "undefined" && document.getElementById('trendchart1')) {
        //处理是否显示走势图折线图
        var hidetrendzhe = false,//走势图的折线图隐藏
            chenjiao_valrecord = 0,
            chenjiao_valbackup = [];//保存有效值
        for( var i = 0; i < chenjiao_val.length; i++) {
            if (!chenjiao_val[i]) {
                chenjiao_valrecord++;
            } else {
                chenjiao_valbackup.push(chenjiao_val[i]);
            }
        }
        if (chenjiao_valrecord == chenjiao_val.length) {
            hidetrendzhe = true;
        }
        if (hidetrendzhe) {
            $('#trendchart1').hide();
            $('#trendchart2').css({'marginTop':20});
        }

        var chart_trendzhe = echarts.init(document.getElementById('trendchart1'));
        var chart_trendzhe_option = {
            color: ['#3cbdf7'],
            tooltip: {
                trigger: 'axis'
            },
            legend: {
            },
            xAxis: [{
                show: hidetrendzhu,
                type: 'category',
                data: chenjiao_month,
                axisPointer: {
                    show: false,
                    type: 'line'
                }
            }],
            yAxis: [{
                type: 'value',
                name: '',
                min: 'dataMin',
                max: 'dataMax',
                axisLabel: {
                    formatter: ''
                }
            }],
            series: [
                {
                    name:'销量',
                    type:'line',
                    itemStyle : {
                        normal: {
                            label : {
                                show: true,
                                position: 'top',
                                textStyle:{
                                    color:'#333',
                                    fontWeight: 'bold',
                                    fontSize: '14'
                                }
                            }
                        }
                    },
                    symbolSize: 10,
                    symbol: 'circle',
                    smooth: true,
                    data:chenjiao_val
                }
            ]
        };
        chart_trendzhe.setOption(chart_trendzhe_option);

        setUpdateDot (chenjiao_val, $('#trendchart1'), 640, 90, '#3cbdf7');
    } else {
        $('#trendchart1').hide();
        $('#trendchart2').css({'marginTop':20});
    }

    //竞品月销量柱状图
    if (typeof jpin_val !== "undefined" && document.getElementById('trendchart3')) {
        var chart_monsales = echarts.init(document.getElementById('trendchart3'));
        var chart_monsales_option = {
            color: ['#9bce4a'],
            tooltip: {
                trigger: 'axis'
            },
            legend: {
            },
            xAxis: [
                {
                    type: 'category',
                    data: jpin_cars,
                    axisPointer: {
                        show: false,
                        type: 'line'
                    },
                    splitLine: {
                        // show:true
                    },
                    axisLabel: {
                        textStyle: {
                            fontSize: '12'
                        }
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '',
                    axisLabel: {
                        formatter: '{value}'
                    }
                }
            ],
            series: [
                {
                    name:'成交价',
                    type:'bar',
                    barWidth:'30%',
                    itemStyle : {
                        normal: {
                            label : {
                                show: true,
                                position: 'top',
                                textStyle:{
                                    color:'#333',
                                    fontWeight:'bold',
                                    fontSize: '14'
                                }
                            }
                        }
                    },
                    data:jpin_val.map(function(item,i){
                        return {
                            value : item,
                            itemStyle:{
                                normal:{
                                    color: location.href.indexOf('/autonews/qa/') !== -1 ? (  !i ? '#e9463f' : '#9bce4a') : '#9bce4a'
                                }
                            }
                        }
                    })
                }
            ]
        };
        chart_monsales.setOption(chart_monsales_option);
    } else {
        $('#trendchart3').parents('.trendchartbox').parent().hide();
    }

    //竞品月销量柱状图新版
    if (typeof jpin_data_new !== "undefined" && jpin_data_new.length != 0 && $('.trendchart_jingpin').length > 0) {
        $('.trendchart_jingpin').each(function(index, el) {
            if ($(el).attr('hascharts') == 1) {
                return true;
            } else {
                var chart_monsales = echarts.init($(el)[0]);
                var chart_monsales_option = {
                    color: ['#ea4740'],
                    xAxis: [
                        {
                            type: 'category',
                            data: jpin_data_new[index]['time'],
                            splitLine:{
                                show:false
                            },
                            axisPointer: {
                                show: false,
                                type: 'line'
                            },
                            axisLine: {
                                show:false
                            },
                            axisTick: {
                                show: false
                            },
                            axisLabel: {
                                textStyle: {
                                    fontSize: '12'
                                }
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            name: '',
                            axisLabel: {
                                formatter: ''
                            },
                            splitLine:{
                                show:false
                            },
                            axisPointer: {
                                show: false,
                                type: 'line'
                            },
                            axisLine: {
                                show:false
                            },
                            axisTick: {
                                show: false
                            }
                        }
                    ],
                    series: [
                        {
                            name:'总销量',
                            type:'bar',
                            barWidth:'30%',
                            itemStyle : {
                                normal: {
                                    label : {
                                        show: true,
                                        position: 'top',
                                        textStyle:{
                                            color:'#ea4740',
                                            fontSize: '14'
                                        }
                                    }
                                }
                            },
                            data: jpin_data_new[index]['num']
                        }
                    ]
                };
                chart_monsales.setOption(chart_monsales_option);
            }
        });

    } else {
        $('.trendchart_jingpin').parents('.jingpinsaleslistbox').parent().hide();
    }

    //口碑柱状图
    if (typeof koubei_val !== "undefined" && document.getElementById('trendchart4')) {
        var chart_koubei = echarts.init(document.getElementById('trendchart4'));
        var chart_koubei_option = {
            color: ['#e94740'],
            tooltip: {
                trigger: 'axis'
            },
            legend: {
            },
            xAxis: [
                {
                    type: 'category',
                    data: koubei_sorts,
                    axisPointer: {
                        show: false,
                        type: 'line'
                    },
                    splitLine: {
                        // show:true
                    },
                    axisLabel: {
                        textStyle: {
                            fontSize: '14',
                        }
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '分',
                    axisLabel: {
                        formatter: ''
                    }
                }
            ],
            series: [
                {
                    name:'成交价',
                    type:'bar',
                    barWidth:'30%',
                    itemStyle : {
                        normal: {
                            label : {
                                show: true,
                                position: 'top',
                                textStyle:{
                                    color:'#333',
                                    fontWeight: 'bold',
                                    fontSize: '14'
                                }
                            }
                        }
                    },
                    data:koubei_val
                }
            ]
        };
        chart_koubei.setOption(chart_koubei_option);
    } else {
        $('#trendchart4').hide();
    }

    //口碑柱状图
    if (typeof koubei_val !== "undefined" && $('.trendchart4_V2').length > 0) {
        if ($('.trendchart4_V2').length > 1) {
            $('.trendchart4_V2').each(function(index, el) {
                var chart_koubei = echarts.init($(el)[0]);
                var chart_koubei_option = {
                    color: ['#e94740'],
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: koubei_sorts,
                            axisPointer: {
                                show: false,
                                type: 'line'
                            },
                            splitLine: {
                                // show:true
                            },
                            axisLabel: {
                                textStyle: {
                                    fontSize: '14',
                                }
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            name: '分',
                            axisLabel: {
                                formatter: ''
                            }
                        }
                    ],
                    series: [
                        {
                            name:'成交价',
                            type:'bar',
                            barWidth:'30%',
                            itemStyle : {
                                normal: {
                                    label : {
                                        show: true,
                                        position: 'top',
                                        textStyle:{
                                            color:'#333',
                                            fontWeight: 'bold',
                                            fontSize: '14'
                                        }
                                    }
                                }
                            },
                            data:koubei_val[index]
                        }
                    ]
                };
                chart_koubei.setOption(chart_koubei_option);
            });
        } else {
            var chart_koubei_V2 = echarts.init($('.trendchart4_V2')[0]);
            var chart_koubei_V2_option = {
                color: ['#e94740'],
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                },
                xAxis: [
                    {
                        type: 'category',
                        data: koubei_sorts,
                        axisPointer: {
                            show: false,
                            type: 'line'
                        },
                        splitLine: {
                            // show:true
                        },
                        axisLabel: {
                            textStyle: {
                                fontSize: '14',
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: '分',
                        axisLabel: {
                            formatter: ''
                        }
                    }
                ],
                series: [
                    {
                        name:'成交价',
                        type:'bar',
                        barWidth:'30%',
                        itemStyle : {
                            normal: {
                                label : {
                                    show: true,
                                    position: 'top',
                                    textStyle:{
                                        color:'#333',
                                        fontWeight: 'bold',
                                        fontSize: '14'
                                    }
                                }
                            }
                        },
                        data:koubei_val
                    }
                ]
            };
            chart_koubei_V2.setOption(chart_koubei_V2_option);
        }
    }

    //各地优惠价格柱状图
    if (typeof gedijiage_val !== "undefined" && document.getElementById('chart_localPrice')) {
        var chart_chart_localPrice = echarts.init(document.getElementById('chart_localPrice'));
        var chart_chart_localPrice_option = {
            color: ['#e94740'],
            tooltip: {
                trigger: 'axis'
            },
            legend: {
            },
            xAxis: [
                {
                    type: 'category',
                    data: gedijiage_cars,
                    axisPointer: {
                        show: false,
                        type: 'line'
                    },
                    splitLine: {
                        // show:true
                    },
                    axisLabel: {
                        textStyle: {
                            fontSize: '12'
                        }
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '',
                    axisLabel: {
                        formatter: '{value}'
                    }
                }
            ],
            series: [
                {
                    name:'成交价',
                    type:'bar',
                    barWidth:'30%',
                    itemStyle : {
                        normal: {
                            label : {
                                show: true,
                                position: 'top',
                                textStyle:{
                                    color:'#e94740',
                                    fontWeight:'bold',
                                    fontSize: '14'
                                }
                            }
                        }
                    },
                    data:gedijiage_val
                }
            ]
        };
        chart_chart_localPrice.setOption(chart_chart_localPrice_option);
    } else {
        $('#chart_localPrice').parents('.trendchartbox').parent().hide();
    }

    //三车对比折线图
    if (typeof chengjiaojia_car1 !== "undefined" && typeof chengjiaojia_car2 !== "undefined" && typeof chengjiaojia_car3 !== "undefined"
        && document.getElementById('chart_threeCarComparison')) {
        var chart_threeCarComparison = echarts.init(document.getElementById('chart_threeCarComparison'));
        var chart_threeCarComparison_option = {
            color: ['#e94740', '#3cbdf7', '#9bce4a'],
            tooltip: {
                trigger: 'item'
            },
            legend: {
            },
            xAxis: [{
                show: true,
                type: 'category',
                data: chenjiao_month,
                axisPointer: {
                    show: false,
                    type: 'line'
                }
            }],
            yAxis: [{
                type: 'value',
                name: '',
                min: 'dataMin',
                max: 'dataMax',
                axisLabel: {
                    formatter: '{value}'
                }
            }],
            series: [
                {
                    name:$('#chart_threeCarComparison').parent('.trendchartbox').siblings('.art_t').find('.classify1').html(),
                    type:'line',
                    itemStyle : {
                        normal: {
                            label : {
                                show: false,
                                position: 'top',
                                textStyle:{
                                    color:'#e94740',
                                    fontWeight: 'bold',
                                    fontSize: '14'
                                }
                            }
                        }
                    },
                    symbolSize: 10,
                    symbol: 'circle',
                    smooth: true,
                    data: chengjiaojia_car1
                },{
                    name:$('#chart_threeCarComparison').parent('.trendchartbox').siblings('.art_t').find('.classify2').html(),
                    type:'line',
                    itemStyle : {
                        normal: {
                            label : {
                                show: false,
                                position: 'top',
                                textStyle:{
                                    color:'#3cbdf7',
                                    fontWeight: 'bold',
                                    fontSize: '14'
                                }
                            }
                        }
                    },
                    symbolSize: 10,
                    symbol: 'circle',
                    smooth: true,
                    data: chengjiaojia_car2
                },{
                    name:$('#chart_threeCarComparison').parent('.trendchartbox').siblings('.art_t').find('.classify3').html(),
                    type:'line',
                    itemStyle : {
                        normal: {
                            label : {
                                show: false,
                                position: 'top',
                                textStyle:{
                                    color:'#9bce4a',
                                    fontWeight: 'bold',
                                    fontSize: '14'
                                }
                            }
                        }
                    },
                    symbolSize: 10,
                    symbol: 'circle',
                    smooth: true,
                    data: chengjiaojia_car3
                }
            ]
        };
        chart_threeCarComparison.setOption(chart_threeCarComparison_option);
    }

    /***************************更新于2017.9.14******************************************/
    if(typeof xlph_val !== "undefined" && typeof xlph_month !== "undefined" && $('#trendchart_xlph').length){
        var chart_xlph = echarts.init($('#trendchart_xlph')[0]);
        var option_xlph = {
            title: {
                show: false
            },
            legend: {
                show: false
            },
            animation: false,
            color: ['#e94740'],
            tooltip: {
                show: false
            },
            legend: {
            },
            xAxis: [
                {
                    type: 'category',
                    data: xlph_month,
                    axisPointer: {
                        show: false,
                        type: 'line'
                    },
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            // color: '#797979'
                        }
                    },
                    axisTick: {
                        show: false
                    }
                }
            ],
            yAxis: [
                {
                    color: ['#797979'],
                    axisTick: {
                        show: false
                    },
                    type: 'value',
                    name: '',
                    splitNumber: 3,
                    axisLabel: {
                        formatter: ''
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#797979'
                        }
                    }
                }
            ],
            series: [
                {
                    name: '',
                    type: 'line',
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                position: 'top',
                                textStyle: {
                                    color: '#e94740',
                                    fontWeight: 'bold',
                                    fontSize: 14
                                }
                            }
                        }
                    },
                    symbolSize: 10,
                    symbol: 'circle',
                    smooth: true,
                    data: xlph_val
                }
            ]
        };
        chart_xlph.setOption(option_xlph);
        setUpdateDot(xlph_val, $('#trendchart_xlph'), 660, 90, '#e94740');
    }

    if(typeof xlqs_val !== "undefined" && $('#trendchart_xlqs').length){
        var chart_xlqs = echarts.init($('#trendchart_xlqs')[0]);
        var opt_xlqs = {
            title : {
                x:'center'
            },
            animation: false,
            //legend: {
            //    orient : 'right',
            //    x : 'right',
            //    data:['销量前三','其他']
            //},
            calculable : true,
            series : [
                {
                    name:'销量',
                    type:'pie',
                    radius : '90%',
                    center: ['42%', '50%'],
                    data:(function(){
                        return xlqs_val.map(function(item,i){
                            return {
                                value : item,
                                name : xlqs_label[i]
                            }
                        });
                    })(),
                    itemStyle : {
                        normal : {
                            label : {
                                position : 'inner',
                                formatter : function (params) {
                                    return (params.percent - 0).toFixed(0) + '%'
                                },
                                textStyle:{
                                    fontWeight:'bold',
                                    fontSize: '18'
                                }
                            },
                            labelLine : {
                                show : false
                            }
                        }
                    }
                }
            ],
            color:['#efae51','#e94740']
        };
        chart_xlqs.setOption(opt_xlqs);
    }

    if (typeof xlqstype_val !== "undefined" && $('#trendchart_xlqstype').length) {
        var chart_xlqstype = echarts.init($('#trendchart_xlqstype')[0]);
        var chart_xlqstype_option = {
            animation: false,
            color: ['#e94740'],
            tooltip: {
                //trigger: 'axis',
                show: false
            },
            legend: {
            },
            xAxis: [
                {
                    type: 'category',
                    data: (function(){
                        return xlqstype_label.map(function(item){
                            return {
                                value : item,
                                textStyle:{
                                    color:'#333'
                                }
                            }
                        })
                    })(),
                    axisPointer: {
                        type: 'line'
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        // show:true
                    },
                    axisLabel: {
                        textStyle: {
                            fontSize: '12'
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#e9ebec'
                        }
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '',
                    axisTick: {
                        // show: false
                    },
                    axisLabel: {
                        formatter: '{value}'
                        // formatter: ''
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#8f8f8f'
                        }
                    }
                }
            ],
            series: [
                {
                    name:'',
                    type:'bar',
                    barWidth:'30%',
                    itemStyle : {
                        normal: {
                            label : {
                                show: true,
                                position: 'top',
                                textStyle:{
                                    color:'#e94740',
                                    //fontWeight:'bold',
                                    fontSize: '14'
                                }
                            }
                        }
                    },
                    data:xlqstype_val
                }
            ]
        };
        chart_xlqstype.setOption(chart_xlqstype_option);
    }

    if (typeof premiumRate_val !== "undefined" && typeof premiumRate_year !== "undefined" && $('#chart_premiumRate').length) {
        var chart_premiumRate = echarts.init($('#chart_premiumRate')[0]);
        var option_premiumRate = {
            title: {
                show: false
            },
            legend: {
                show: false
            },
            animation: false,
            color: ['#e94740'],
            tooltip: {
                show: false
            },
            xAxis: [
                {
                    name: '车龄',
                    nameTextStyle: {
                        fontSize: 14
                    },
                    type: 'category',
                    data: premiumRate_year,
                    axisPointer: {
                        show: false,
                        type: 'line'
                    },
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#797979'
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        textStyle: {
                            fontSize: '14',
                        }
                    }
                }
            ],
            yAxis: [
                {
                    name: '保值率',
                    nameTextStyle: {
                        fontSize: 14
                    },
                    color: ['#797979'],
                    axisTick: {
                        show: false
                    },
                    type: 'value',
                    max: '100',
                    axisLabel: {
                        formatter : function (params) {
                            return params + '%'
                        },
                        textStyle: {
                            fontSize: '14',
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#797979'
                        }
                    }
                }
            ],
            series: [
                {
                    name: '',
                    type: 'line',
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                position: 'top',
                                textStyle: {
                                    color: '#e94740',
                                    fontWeight: 'bold',
                                    fontSize: 14
                                }
                            }
                        }
                    },
                    symbolSize: 10,
                    symbol: 'circle',
                    smooth: true,
                    data: premiumRate_val
                }
            ]
        };
        chart_premiumRate.setOption(option_premiumRate);
    }
}

if (typeof get_ip_city != 'undefined') {
    var  zhixiaPIds = ['11','12','31','50'],findProAndCity = false;

    if(zhixiaPIds.indexOf(get_ip_city().citycode.substr(0,2)) !== -1){
        $('.changecity-box .cityselect').find('option').each(function(i,item){
            if(item.value == get_ip_city().citycode.substr(0,2)+'0000'){
                findProAndCity = true;
            }
        });
        if(findProAndCity){
            $('.changecity-box .cityselect option[value="' + get_ip_city().citycode.substr(0,2)+'0000' + '"]').attr("selected", true);
            selectTable(get_ip_city().citycode.substr(0,2)+'0000');
        }
    }else{
        $('.changecity-box .cityselect').find('option').each(function(i,item){
            if(item.value == get_ip_city().citycode.substr(0,2)+'0100'){
                findProAndCity = true;
            }
        });
        if(findProAndCity){
            $('.changecity-box .cityselect option[value="' + get_ip_city().citycode.substr(0,2)+'0100' + '"]').attr("selected", true);
            selectTable(get_ip_city().citycode.substr(0,2)+'0100');
        }
    }

    function selectTable (selectval) {
        if (get_ip_city() && selectval) {
            $('.carMarketList').each(function(index, ele) {
                if($(ele).attr('data-citycode') == selectval) {
                    $(ele).removeClass('hide').siblings('table').addClass('hide');
                    return;
                }
            });
        }
    }
}

if(window.carjson){
    var json = JSON.parse(window.carjson);
    var bid = json.bigbrandid,reffer_sj=json.reffer_sj,reffer_xj=json.reffer_xj,
        cars = json.cars,data = json.data;
    var $spana = $(".carMarketList-box .carMarketList tr:first-child td[colspan='6'] span.name a"),spanhref = $spana.attr('href'),
        spanname = $spana.text();
    var cachedHtml = {};
    $('.changecity-box .cityselect').change(function(){
        var cityCode = $(this).val(),html='';
        if(cachedHtml[cityCode]) {
            html = cachedHtml[cityCode];
        }else{
            html = '<table class="carMarketList"><tbody>';
            html += '<tr><td colspan="6" class="clearfix">\
                        <span class="name"><a href="'+spanhref+'" title="">'+spanname+'</a> </span>\
                        </td>\
                        </tr>';
            html += '<tr><th>车型名称</th><th>指导价</th><th>优惠幅度</th><th>折扣</th><th>成交价</th><th>优惠购车</th></tr>';
            var name = '',cj= 0,zdj=0;
            for(var i in data){
                if(i == cityCode){
                    var thisData = data[i];
                    thisData.forEach(function(item,j){
                        for(var k in cars){
                            if(k == item.carid){
                                name = cars[k];
                                break;
                            }
                        }
                        cj = item.cj -0;
                        zdj = item.zdj-0;
                        html += '<tr citycode="'+cityCode+'">';
                        html += '<td><a href="http://db.auto.sina.com.cn/car/'+item.carid+'" title="">'+name+'</a></td>';
                        html += '<td>'+item.zdj+'万</td>';
                        html += '<td>'+(cj<=zdj?('<span class="price-down"><em>↓</em>'+Math.abs(cj-zdj).toFixed(2)+'万</span>'):('<span class="price-up"><em>↑</em>'+Math.abs(cj-zdj).toFixed(2)+'万</span>'))+'</td>';
                        html += cj>= zdj ? ('<td>无折扣</td>'): ('<td>'+(cj*10/zdj).toFixed(2)+'折</td>');
                        html += '<td>'+cj+'万</td>';
                        html += '<td><span class="enlistBtn" carname="'+name+'" carid="'+item.carid+'" data-sudaclick="hangqing_cmswz_yjbm" reffer_code_pc="'+reffer_xj+'">优惠购车</span></td>';
                        html += '</tr>';
                    });
                    break;
                }
            }
            html += '<tr><td colspan="6">车市信息变化频繁，具体售价请与当地经销商商谈</td></tr>';
            html += '</tbody></table>';

            cachedHtml[cityCode] = html;
        }
        $('.carMarketList-box table').remove();
        $('.changecity-box').after(html);
    }).trigger('change');
}else{
    $('.changecity-box .cityselect').change(function(){
        selectTable(this.value);
    }).trigger('change');
}

if (typeof get_ip_city != 'undefined') {
    var province_id = 11,
        city_id = 00,
        submitcarname = '',
        submitcarid='',
        submitsubid='',
        submitbigbid='',
        reffer_code='';
    if (get_ip_city().citycode.length == 4) {
        province_id = get_ip_city().citycode.substr(0,2),
            city_id = get_ip_city().citycode.substr(2,2);
    }
}

$('body').on('click', '.carMarketList .enlistBtn,.gediyouhui .enlistBtn', function () {
    submitcarname = $(this).attr('carname');
    submitcarid = $(this).attr('carid');
    submitsubid=$(this).attr('subid');
    submitbigbid=$(this).attr('bigbrandid');
    reffer_code = $(this).attr('reffer_code_pc') || 2001;

    if (cookie('hangqingInfo_username')) {
        $('.fix-bm-bg #div_1 input[name="bm_name"]').val(cookie('hangqingInfo_username'));
        $('.fix-bm-bg #div_1 input[name="bm_mobile"]').val(cookie('hangqingInfo_usermobile'));
    } else {
        $.ajax({
            type:'GET',
            url:'http://price.auto.sina.com.cn/api/WbUserinfo/getinfo',
            data:{
                uid: window.userinfo ? window.userinfo.uid : 0,
                is_web:1
            },
            dataType:'jsonp',
            success:function(result){
                if(result && result.data && result.data.name){
                    $('.fix-bm-bg #div_1 input[name="bm_name"]').val(result.data.name);
                    $('.fix-bm-bg #div_1 input[name="bm_mobile"]').val(result.data.tel);
                    cookie('hangqingInfo_username',result.data.name,{'expires': 180});
                    cookie('hangqingInfo_usermobile',result.data.tel,{'expires': 180});
                }else{
                    $('.fix-bm-bg #div_1 input[name="bm_name"]').val('');
                    $('.fix-bm-bg #div_1 input[name="bm_mobile"]').val('');
                }
            },
            error:function(){
                $('.fix-bm-bg #div_1 input[name="bm_name"]').val('');
                $('.fix-bm-bg #div_1 input[name="bm_mobile"]').val('');
            }
        });
    }

    if ($(this).parents('table').hasClass('carMarketList')) {//普通行情页
        var carML=$(this).parents(".carMarketList").find(".enlistBtn");
        var carseloption='';
        carML.each(function(i,v){
            if(submitcarid==carML.eq(i).attr("carid")){
                $('.fix-bm-bg .bm_car em').html('（指导价：'+carML.eq(i).parents("tr").find("td").eq(1).html()+'）');
                $('.fix-bm-bg .bm_car span').html(carML.eq(i).attr("carname"));
                carseloption+='<li class="cur" reffer_code_pc="'+carML.eq(i).attr("reffer_code_pc")+'" data_id="'+carML.eq(i).attr("carid")+'"><div>'+carML.eq(i).attr("carname")+'</div><span>（指导价：<em>'+carML.eq(i).parents("tr").find("td").eq(1).html()+'</em>）</span></li>';
            }else{
                carseloption+='<li reffer_code_pc="'+carML.eq(i).attr("reffer_code_pc")+'"  data_id="'+carML.eq(i).attr("carid")+'"><div>'+carML.eq(i).attr("carname")+'</div><span>（指导价：<em>'+carML.eq(i).parents("tr").find("td").eq(1).html()+'</em>）</span></li>';
            }
        });
        $('.fix-bm-bg #div_2 .carlist ul').html(carseloption);
        $('.fix-bm-bg').removeClass('hide');
    } else if($(this).parent().parent().parent().hasClass('swiper-container')) {//三车对比行情页
        var index = $(this).parent('.btn').index();
        var $threecarlayer_carlist = $(this).parents('.btnbox').siblings('.swiper-wrapper').children('.swiper-slide').eq(index).children('.threecarlayer_carlist');
        $('.fix-bm-bg .bm_car em').html('（指导价：'+$threecarlayer_carlist.children('.cur').find('em').html()+'）');
        $('.fix-bm-bg .bm_car span').html($threecarlayer_carlist.children('.cur').children('div').html());
        $('.fix-bm-bg #div_2 .carlist ul').html($threecarlayer_carlist.html());
        $('.fix-bm-bg').removeClass('hide');
    } else if($(this).parents('.dd').parent().hasClass('table')) {//三车对比行情页
        var index = $(this).parent().index() - 1;
        var $threecarlayer_carlist = $(this).parents('.table').find('.threecarlayer_carlist').eq(index);
        $('.fix-bm-bg .bm_car em').html('（指导价：'+$threecarlayer_carlist.children('.cur').find('em').html()+'）');
        $('.fix-bm-bg .bm_car span').html($threecarlayer_carlist.children('.cur').children('div').html());
        $('.fix-bm-bg #div_2 .carlist ul').html($threecarlayer_carlist.html());
        $('.fix-bm-bg').removeClass('hide');
    }
    $.ajax({
        url:'http://xunjia.auto.sina.cn/api/XunJia/AjaxClickHQCount',
        data:{
            ask_reffer:reffer_code,
            plat:1,
            Apache:cookie('Apache'),
            uid:(typeof userinfo !== 'undefined' ? userinfo.uid : 0),
            sinaglobal:(cookie('SINAGLOBAL') || 0)
        },
        datatype: "json",
        type:'POST'
    });
});
$(".fix-bm-bg #div_1 .bm_car").bind("click",function(){
    if($(".fix-bm-bg #div_2").is(":visible")){
        $(".fix-bm-bg #div_2").hide();
        return;
    }
    $(".fix-bm-bg #div_1").show();
    $(".fix-bm-bg #div_2").css({top:$(".fix-bm-bg #div_1 .bm_car").position().top+$(".fix-bm-bg #div_1 .bm_car").height()+16,left:$(".fix-bm-bg #div_1 .bm_car").position().left-15}).show();
    $(".fix-bm-bg #div_3").hide();
});
$(".fix-bm-bg #div_2 .carlist").on("click","li",function(){
    var carreffer_code=$(this).attr("reffer_code_pc");
    var carid=$(this).attr("data_id");
    var carname=$(this).find("div").html();
    var carp=$(this).find("span > em").html();
    $('.fix-bm-bg .bm_car em').html('（指导价：'+carp+'）');
    $('.fix-bm-bg .bm_car span').html(carname);
    submitcarname=carname;
    submitcarid=carid;
    reffer_code=carreffer_code;
    $(".fix-bm-bg #div_2").hide();
    $(this).addClass("cur").siblings("li").removeClass("cur");
});
/*$('.fix-bm-bg .bm_car em').bind("click",function(){
 console.log("em click");
 $('.fix-bm-bg .bm_car select').trigger("focus").trigger("click");
 var WshShell = new ActiveXObject("Wscript.Shell");
 console.log(WshShell);
 try{
 WshShell.SendKeys("%{DOWN}");
 }
 catch(e){}
 WshShell.Quit;
 });*/

function openSelect(obj){
    var element=document.getElementById("bm_car");
    element.onclick = demo();
    //document.getElementById("student").onclick();
}

function demo(){
    bm_car.focus();
    var WshShell = new ActiveXObject("Wscript.Shell");
    try {
        WshShell.SendKeys("%{DOWN}");
    } catch(e){}
    WshShell.Quit;
}

var carlist='';
$(".monsaleslistbox li").each(function(i,v){
    if(i>2)return;
    carlist+='<li>'+$(this).html()+'</li>';
});
$(".fix-bm-bg #div_3 ul.car_list").html(carlist);
$('.fix-bm-bg .bm-content .close').on('click', function () {
    $('.fix-bm-bg').addClass('hide');
    $(".fix-bm-bg #div_3").hide();
    $(".fix-bm-bg #div_2").hide();
    $(".fix-bm-bg #div_1").show();
});
$('.fix-bm-bg .bm-content .submit').on('click', function () {
    var $name = $('.fix-bm-bg .bm-content .bm_name'),
        $mobile = $('.fix-bm-bg .bm-content .bm_mobile'),
        name = $.trim($name.val()),
        mobile = $.trim($mobile.val()),
        agreechecked = $('.fix-bm-bg .bm-content .bm_statement').attr('checked');

    if (!name) {
        alert('请填写姓名');
    } else if (!mobile) {
        alert('请填写手机号');
    } else if (!/^1[3|5|8|7]\d{9}$/.test(mobile)) {
        alert('手机号输入有误');
    } else if (agreechecked != 'checked') {
        alert('请阅读并接受个人信息保护');
    } else {
        if(submitsubid){
            sub_brand_id=submitsubid;
        }
        if(submitbigbid){
            big_brand_id=submitbigbid;
        }
        var uid = typeof userinfo !== 'undefined' ? userinfo.uid : 0;
        var url = 'http://price.auto.sina.com.cn/api/GUsers/index';

        $.ajax({
            type: "GET",
            url: url,
            data: {
                is_web:1,
                info: {
                    mobile: mobile,
                    province_id: province_id,
                    city_id: city_id,
                    big_brand_id: big_brand_id,
                    sub_brand_id: sub_brand_id,
                    uname: name,
                    car_name: submitcarname,
                    car_id: submitcarid ? submitcarid : '',
                    reffer_code: reffer_code,
                    from_reffer: document.referrer,
                    uid: uid,
                    sinaglobal: cookie('SINAGLOBAL')
                }
            },
            dataType: "jsonp",
            success: function (result) {
                // result = JSON.parse(result);
                if (result) {
                    if (result.status) {
                        $(".fix-bm-bg #div_3").show();
                        $(".fix-bm-bg #div_2").hide();
                        $(".fix-bm-bg #div_1").hide();
                        cookie('hangqingInfo_username', $('.fix-bm-bg #div_1 input[name="bm_name"]').val(), {'expires': 180});
                        cookie('hangqingInfo_usermobile', $('.fix-bm-bg #div_1 input[name="bm_mobile"]').val(), {'expires': 180});
                        if ($('.fix-bm-bg #div_3 .car_list li').length == 0) {
                            $('.fix-bm-bg #div_3 .content').hide();
                            $('.fix-bm-bg #div_3 .close').hide();
                            $('.fix-bm-bg .bm-content').css({'height': '160px','marginTop': '-80px'});
                            $('.fix-bm-bg #div_3 .msg').css({'border-bottom': '0px solid #dcdcdc'});
                            setTimeout(function (){
                                $('.fix-bm-bg #div_3 .close').trigger('click');
                                $('.fix-bm-bg #div_3 .content').show();
                                $('.fix-bm-bg #div_3 .close').show();
                                $('.fix-bm-bg .bm-content').css({'height': '574px','marginTop': '-238px'});
                                $('.fix-bm-bg #div_3 .msg').css({'border-bottom': '1px solid #dcdcdc'});
                            }, 1500);
                        }
                    } else {
                        // alert('报名失败!'+result.msg);
                        $(".fix-bm-bg #div_3").show();
                        $(".fix-bm-bg #div_2").hide();
                        $(".fix-bm-bg #div_1").hide();
                        $('.fix-bm-bg #div_3 .content').hide();
                        $('.fix-bm-bg #div_3 .close').hide();
                        $('.fix-bm-bg .bm-content').css({'height': '160px','marginTop': '-80px'});
                        $('.fix-bm-bg #div_3 .msg').css({'border-bottom': '0px solid #dcdcdc'});
                        $('.fix-bm-bg #div_3 .msg i').hide();
                        $('.fix-bm-bg #div_3 .msg span').html(result.msg);
                        setTimeout(function (){
                            $('.fix-bm-bg #div_3 .close').trigger('click');
                            $('.fix-bm-bg #div_3 .content').show();
                            $('.fix-bm-bg #div_3 .close').show();
                            $('.fix-bm-bg .bm-content').css({'height': '574px','marginTop': '-238px'});
                            $('.fix-bm-bg #div_3 .msg').css({'border-bottom': '1px solid #dcdcdc'});
                            $('.fix-bm-bg #div_3 .msg i').show();
                            $('.fix-bm-bg #div_3 .msg span').html('提交成功，请注意查收短信');
                        }, 1500);
                    }
                }
            },
            complete: function (XMLHttpRequest, textStatus) {
            },
            error: function (result) {
                // result = JSON.parse(result);
                // alert('报名失败!'+result.msg);
                $(".fix-bm-bg #div_3").show();
                $(".fix-bm-bg #div_2").hide();
                $(".fix-bm-bg #div_1").hide();
                $('.fix-bm-bg #div_3 .content').hide();
                $('.fix-bm-bg #div_3 .close').hide();
                $('.fix-bm-bg .bm-content').css({'height': '160px','marginTop': '-80px'});
                $('.fix-bm-bg #div_3 .msg').css({'border-bottom': '0px solid #dcdcdc'});
                $('.fix-bm-bg #div_3 .msg i').hide();
                $('.fix-bm-bg #div_3 .msg span').html(result.msg);
                setTimeout(function (){
                    $('.fix-bm-bg #div_3 .close').trigger('click');
                    $('.fix-bm-bg #div_3 .content').show();
                    $('.fix-bm-bg #div_3 .close').show();
                    $('.fix-bm-bg .bm-content').css({'height': '574px','marginTop': '-238px'});
                    $('.fix-bm-bg #div_3 .msg').css({'border-bottom': '1px solid #dcdcdc'});
                    $('.fix-bm-bg #div_3 .msg i').show();
                    $('.fix-bm-bg #div_3 .msg span').html('提交成功，请注意查收短信');
                }, 1500);
            }
        });
    }
});
// zhexiantu end

//do hangqingye suda sid
function addArg(ele, reg, key, value) {
    var $links = ele;
    var $link, href, aHref;
    for (var i = 0, len = $links.length; i < len; i++) {
        $link = $links[i];
        href = $link.getAttribute('href');
        if (reg.test(href)) {
            var hashReg = /#\S+/;
            var rReg = href.match(hashReg);
            if (href.indexOf('?') === -1) {
                if (rReg) {
                    aHref = href.replace(rReg[0], '') + '?' + key + '=' + value + rReg[0];
                } else {
                    aHref = href + '?' + key + '=' + value;
                }
            } else if (href.indexOf('&') === -1) {
                if (href.indexOf('' + key + '=') === -1) {
                    if (rReg) {
                        aHref = href.replace(rReg[0], '') + '&' + key + '=' + value + rReg[0];
                    } else {
                        aHref = href + '&' + key + '=' + value;
                    }
                } else {
                    aHref = href;
                }
            } else {
                if (href.indexOf('' + key + '=') === -1) {
                    if (rReg) {
                        aHref = href.replace(rReg[0], '') + '&' + key + '=' + value + rReg[0];
                    } else {
                        aHref = href + '&' + key + '=' + value;
                    }
                } else {
                    aHref = href;
                }
            }
            $link.setAttribute('href', aHref);
        }
    }
}

$('body').delegate('.outlogin_LoginBtn', 'click', function () {
    $('.outlogin_layerbox_bylx').css({
        'left': 'auto',
        'right': 0
    });
});

$('body').on('click','.monsaleslistbox ul li .img',function(){
    if(window.SUDA && SUDA.uaTrack){
        var href = $(this).attr('href');
        SUDA.uaTrack('sid','01400',href);
    }
});
addArg(document.querySelectorAll('.monsaleslistbox ul li .img'),/db.auto.sina.com.cn\/\d+/,'sid','01400');

// if(SINA_TEXT_PAGE_INFO.hideComment == true){
//     $('#wrap_bottom_omment').hide();
//     $('.page-tools .tool-cmt').hide();
// }

//20180612新增估价保护率等
if ($('.reputationcircle_V2 .circle').length > 0) {
    $('.reputationcircle_V2 .circle canvas').each(function(){
        var t=0;
        var g = $(this).attr('data-percent');
        if (g<=0) {
            return;
        }
        var c = $(this).css('color');
        var timer=null;
        var ctx = $(this)[0].getContext("2d");
        var circ = Math.PI * 2;
        var quart = Math.PI / 2;
        var imd = null;
        var circ = Math.PI * 2;
        var quart = Math.PI / 2;

        ctx.clearRect(0, 0, 130, 130);
        ctx.beginPath();
        ctx.strokeStyle = c;
        ctx.lineCap = 'square';
        ctx.closePath();
        ctx.fill();
        ctx.lineWidth = 5.0;
        imd = ctx.getImageData(0, 0, 130, 130);
        // timer =  setInterval(function(){
        //     if(t>=g){
        //         clearInterval(timer);
        //     }else{
        ctx.putImageData(imd, 0, 0);
        ctx.beginPath();
        ctx.arc(65,65, 62, -(quart), ((circ) * g) - quart, false);
        ctx.stroke();
        t+=0.01;
        //     }
        // },10);
        timer=null;
    });

    $('.evaluationbox').delegate('.result_layer .hd .clostbtn', 'click', function() {
        $(this).parents('.result_layer').hide();
    });
}

if ($('.evaluationbox').length > 0) {
    $.getJSON('http://price.auto.sina.cn/api/JzgApi/citys', function(data) {
        if (data.status == 1) {
            var privce_html='<option value="0">\u8bf7\u9009\u62e9\u7701\u4efd</option>',city_html='<option value="0">\u8bf7\u9009\u62e9\u57ce\u5e02</option>';

            for(var i in data.data.province){
                privce_html+='<option value="'+i+'">'+data.data.province[i]+'</option>';
            }
            $(".evaluationbox .oldcarbox .J-hangqing-province").html(privce_html);

            $(".evaluationbox .oldcarbox .J-hangqing-province").bind("change",function(){
                var v=$(this).val(),city_html='<option value="0">\u8bf7\u9009\u62e9\u57ce\u5e02</option>';
                this.city=data.data.citys[v];
                for(var i in this.city){
                    city_html+='<option value="'+i+'">'+this.city[i]+'</option>';
                }
                $(this).parents('.inputmodule').find(".J-hangqing-city").html(city_html);
            });
            $('.evaluationbox .oldcarbox .J-hangqing-province').find('option').each(function(index, el) {
                if ($(el).text() == get_ip_city().province) {
                    $(el).attr("selected",true);
                    $(el).change();
                    var flag = false;
                    setTimeout(function () {
                        $('.evaluationbox .oldcarbox .J-hangqing-city').find('option').each(function(index, el) {
                            if ($(el).text() == get_ip_city().city) {
                                $(el).attr("selected",true);
                                $(el).change();
                                flag = true;
                                return false;
                            }
                        });
                        if (!flag) {
                            $('.evaluationbox .oldcarbox .J-hangqing-city').find('option').eq(1).attr("selected",true);
                            $('.evaluationbox .oldcarbox .J-hangqing-city').change();
                        }
                    }, 2000);
                    return false;
                }
            });
        }
    });

    $.getScript('http://data.auto.sina.com.cn/car/js/city.js',function(){
        var privce_html='<option value="0">\u8bf7\u9009\u62e9\u7701\u4efd</option>',city_html='<option value="0">\u8bf7\u9009\u62e9\u57ce\u5e02</option>';

        for(var i in province){
            privce_html+='<option value="'+i+'">'+province[i]+'</option>';
        }
        $(".evaluationbox .newcarbox .J-hangqing-province").html(privce_html);

        $(".evaluationbox .newcarbox .J-hangqing-province").bind("change",function(){
            var v=$(this).val(),city_html='<option value="0">\u8bf7\u9009\u62e9\u57ce\u5e02</option>';
            this.city=city[v];
            for(var i in this.city){
                city_html+='<option value="'+i+'">'+this.city[i]+'</option>';
            }
            $(this).parents('.inputmodule').find(".J-hangqing-city").html(city_html);
        });
        $('.evaluationbox .newcarbox .J-hangqing-province').find('option').each(function(index, el) {
            if ($(el).text() == get_ip_city().province) {
                $(el).attr("selected",true);
                $(el).change();
                var flag = false;
                setTimeout(function () {
                    $('.evaluationbox .newcarbox .J-hangqing-city').find('option').each(function(index, el) {
                        if ($(el).text() == get_ip_city().city) {
                            $(el).attr("selected",true);
                            $(el).change();
                            flag = true;
                            return false;
                        }
                    });
                    if (!flag) {
                        $('.evaluationbox .newcarbox .J-hangqing-city').find('option').eq(1).attr("selected",true);
                        $('.evaluationbox .newcarbox .J-hangqing-city').change();
                    }
                }, 2000);
                return false;
            }
        });
    });

    $(".evaluationbox .newcarbox .J-hangqing-city").bind("change",function(){
        $('.evaluationbox .result_layer .bd .baojia .city').html($(".evaluationbox .newcarbox .carSellCity .J-hangqing-city").find("option:selected").text());
    });

    //车型品牌联动
    var getBrandListUrl = '',getCarBySerialIdUrl='',getSerialListUrl='',getSerialInfoUrl='',getCarInfoByCarIdsUrl='';
    var carBySerialIdDataFromApi = {},serialListDataFromApi={},serialInfoDataFromApi={},carInfoDataFromApi={};
    var xj_cars_changing = false,xj_car_brand_changing = false;
    if (location.hostname === 'auto.sina.com.cn') {
        getBrandListUrl = 'http://auto.sina.cn/api/db/getBrandList.d.json?callback=?';
        getCarBySerialIdUrl = 'http://auto.sina.cn/api/db/getCarBySerialId.d.json?status=1&callback=?&serialid=';
        getSerialListUrl = "http://db.auto.sina.com.cn/api/cms/car/getSerialList.json?callback=?&sellStatus=1,2&brandid=";
        getSerialInfoUrl = 'http://auto.sina.cn/api/db/getSerialInfo.d.json?callback=?&serialids=';
        getCarInfoByCarIdsUrl = 'http://auto.sina.cn/api/db/getCarInfoByCarIds.d.json?callback=?&carids=';
    }else if (location.hostname === 'db.auto.sina.com.cn'){
        getBrandListUrl = 'http://db.auto.sina.com.cn/api/cms/car/getBrandList.json';
        getCarBySerialIdUrl = 'http://db.auto.sina.com.cn/api/cms/car/getCarBySerialId.json?status=1,2&serialid=';
        getSerialListUrl = "http://db.auto.sina.com.cn/api/cms/car/getSerialList.json?sellStatus=1,2&brandid=";
        getSerialInfoUrl = 'http://db.auto.sina.com.cn/api/cms/car/getSerialInfo.json?serialids=';
        getCarInfoByCarIdsUrl = 'http://db.auto.sina.com.cn/api/cms/car/getCarInfoByCarIds.json?carids=';
    }else{
        getBrandListUrl = 'http://db.auto.sina.com.cn/api/cms/car/getBrandList.json?callback=?';
        getCarBySerialIdUrl = 'http://db.auto.sina.com.cn/api/cms/car/getCarBySerialId.json?status=1,2&callback=?&serialid=';
        getSerialListUrl = "http://db.auto.sina.com.cn/api/cms/car/getSerialList.json?callback=?&sellStatus=1,2&brandid=";
        getSerialInfoUrl = 'http://db.auto.sina.com.cn/api/cms/car/getSerialInfo.json?callback=?&serialids=';
        getCarInfoByCarIdsUrl = 'http://db.auto.sina.com.cn/api/cms/car/getCarInfoByCarIds.json?callback=?&carids=';
    }

    function getBrandlist_old(){
        $.getJSON('http://price.auto.sina.cn/api/JzgApi/brands', function(jsond) {
            var html='<option value="0">\u8bf7\u9009\u62e9\u54c1\u724c</option>'; //选品牌
            for(var i in jsond.data){
                html+='<optgroup label="'+i.toUpperCase()+'">';
                for(var j in jsond.data[i]){
                    if(jsond.data[i][j].id) {
                        html+='<option value="'+jsond.data[i][j].id+'">'+jsond.data[i][j].make_name+'</option>';
                    }
                }
                html+='</optgroup>';
            }
            $(".evaluationbox .oldcarbox .J_tBrand").html(html);
        });
    }
    $(".evaluationbox .oldcarbox .J_tBrand").bind("change",function(){
        getSeriallist_old($(this).val());
        $(".evaluationbox .oldcarbox .J_tCar option[value=0]").attr("selected",true);
    });
    function getBrandlist_new(){
        $.getJSON(getBrandListUrl,function(jsond){
            var html='<option value="0">\u8bf7\u9009\u62e9\u54c1\u724c</option>'; //选品牌
            for(var i in jsond.data){
                html+='<optgroup label="'+i.toUpperCase()+'">';
                for(var j in jsond.data[i]){
                    if(jsond.data[i][j].id) {
                        html+='<option value="'+jsond.data[i][j].id+'">'+jsond.data[i][j].zhName+'</option>';
                    }
                }
                html+='</optgroup>';
            }
            $(".evaluationbox .newcarbox .J_tBrand").html(html);

            $('.evaluationbox .newcarbox .J_tBrand').find('option').each(function(index, el) {
                if ($(el).val() == big_brand_id) {
                    $(el).attr("selected",true);
                    $(el).change();
                    return false;
                }
            });
        });
    }
    $(".evaluationbox .newcarbox .J_tBrand").bind("change",function(){
        getSeriallist_new($(this).val());
        $(".evaluationbox .newcarbox .J_tCar option[value=0]").attr("selected",true);
    });
    function getSeriallist_old(bid){
        if(!bid)return;
        $.getJSON('http://price.auto.sina.cn/api/JzgApi/subbrands?brand_id='+bid,function(jsond){
            if(jsond.data) {
                var html='<option value="0">\u8bf7\u9009\u62e9\u8f66\u7cfb</option>'; //选车系
                for (var i in jsond.data) {
                    if(jsond.data[i].group_name) {
                        html+='<optgroup label="'+jsond.data[i].group_name+'">';
                        for(var j in jsond.data[i].subs_list){
                            if (jsond.data[i].subs_list[j].id) {
                                html+='<option value="'+jsond.data[i].subs_list[j].id+'">'+jsond.data[i].subs_list[j].sub_name+'</option>';
                            }
                        }
                        html+='</optgroup>';
                    }
                }
                $(".evaluationbox .oldcarbox .J_tType").html(html);
            }
        });
    }
    $(".evaluationbox .oldcarbox .J_tType").bind("change",function(){
        getCarlist('http://price.auto.sina.cn/api/JzgApi/cars?sub_id=',$(this).val(),$(".evaluationbox .oldcarbox"));
    });
    function getSeriallist_new(bid){
        if(!bid)return;
        $.getJSON(getSerialListUrl+bid,function(jsond){
            if(jsond.data) {
                var html='<option value="0">\u8bf7\u9009\u62e9\u8f66\u7cfb</option>'; //选车系
                for (var i in jsond.data) {
                    if(jsond.data[i].corpName) {
                        html+='<optgroup label="'+jsond.data[i].corpName+'">';
                        for(var j in jsond.data[i].serialList){
                            if (jsond.data[i].serialList[j].serialId) {
                                html+='<option value="'+jsond.data[i].serialList[j].serialId+'">'+jsond.data[i].serialList[j].serialName+'</option>';
                            }
                        }
                        html+='</optgroup>';
                    }
                }
                $(".evaluationbox .newcarbox .J_tType").html(html);
                if (!flag_hasSelect_series) {
                    $('.evaluationbox .newcarbox .J_tType').find('option').each(function(index, el) {
                        if ($(el).val() == sub_brand_id) {
                            $(el).attr("selected",true);
                            $(el).change();
                            return false;
                        }
                    });
                    flag_hasSelect_series = true;
                }
            }
        });
    }
    $(".evaluationbox .newcarbox .J_tType").bind("change",function(){
        getCarlist(getCarBySerialIdUrl,$(this).val(),$(".evaluationbox .newcarbox"));
    });
    $(".evaluationbox .newcarbox .J_tCar").bind("change",function(){
        $('.evaluationbox .result_layer .bd .txt span').html($(".evaluationbox .newcarbox .carBrand .J_tCar").find("option:selected").text());
    });
    function getCarlist(api,sid,wrapele){
        if(!sid)return;
        $.getJSON(api+sid,function(jsond){
            if(jsond.data){
                var html='<option value="0">\u8bf7\u9009\u62e9\u8f66\u578b</option>'; //选车款
                for(var i in jsond.data){
                    if (jsond.data[i].id) {
                        html+='<option value="'+jsond.data[i].id+'">'+jsond.data[i].name+'</option>';
                    }
                }
                wrapele.find(".J_tCar").html(html);
                if (!flag_hasSelect_car) {
                    $('.evaluationbox .newcarbox .J_tCar').find('option').eq(1).attr("selected",true);
                    $('.evaluationbox .newcarbox .J_tCar').change();
                    flag_hasSelect_car = true;
                }
            }
        });
    }

    getBrandlist_old();
    getBrandlist_new();

    var flag_hasSelect_series = false;
    var flag_hasSelect_car = false;
    if (cookie('hangqingInfo_usermobile')) {
        $('.evaluationbox .calculationwrap .inputwrap input').val(cookie('hangqingInfo_usermobile'));
    }

    $('.evaluationbox .calculationwrap .calculationBtn').click(function() {
        if ($('.evaluationbox .oldcarbox .J-hangqing-province').val() == 0) {
            alert('\u8bf7\u9009\u62e9\u7701\u4efd');
            return;
        } else if ($('.evaluationbox .oldcarbox .J-hangqing-city').val() == 0) {
            alert('\u8bf7\u9009\u62e9\u57ce\u5e02');
            return;
        } else if ($('.evaluationbox .oldcarbox .J_tBrand').val() == 0) {
            alert('\u8bf7\u9009\u62e9\u54c1\u724c');
            return;
        } else if ($('.evaluationbox .oldcarbox .J_tType').val() == 0) {
            alert('\u8bf7\u9009\u62e9\u8f66\u7cfb');
            return;
        } else if ($('.evaluationbox .oldcarbox .J_tCar').val() == 0) {
            alert('\u8bf7\u9009\u62e9\u8f66\u578b');
            return;
        } else if ($('.evaluationbox .oldcarbox .J_year').val() == 0) {
            alert('\u8bf7\u9009\u62e9\u5e74\u4efd');
            return;
        } else if ($('.evaluationbox .oldcarbox .J_month').val() == 0) {
            alert('\u8bf7\u9009\u62e9\u6708\u4efd');
            return;
        } else if ($('.evaluationbox .oldcarbox .inputwrap input').val() == 0) {
            alert('\u8bf7\u8f93\u5165\u884c\u9a76\u91cc\u7a0b');
            return;
        } else if ($('.evaluationbox .newcarbox .J-hangqing-province').val() == 0) {
            alert('\u8bf7\u9009\u62e9\u7701\u4efd');
            return;
        } else if ($('.evaluationbox .newcarbox .J-hangqing-city').val() == 0) {
            alert('\u8bf7\u9009\u62e9\u57ce\u5e02');
            return;
        } else if ($('.evaluationbox .newcarbox .J_tBrand').val() == 0) {
            alert('\u8bf7\u9009\u62e9\u54c1\u724c');
            return;
        } else if ($('.evaluationbox .newcarbox .J_tType').val() == 0) {
            alert('\u8bf7\u9009\u62e9\u8f66\u7cfb');
            return;
        } else if ($('.evaluationbox .newcarbox .J_tCar').val() == 0) {
            alert('\u8bf7\u9009\u62e9\u8f66\u578b');
            return;
        } else if ($('.evaluationbox .calculationwrap .inputwrap input').val() == 0) {
            alert('\u8bf7\u8f93\u5165\u624b\u673a\u53f7\u7801');
            return;
        } else if (/^[1][3,4,5,7,8][0-9]{9}$/.test($('.evaluationbox .calculationwrap .inputwrap input').val()) == false) {
            alert('\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u624b\u673a\u53f7\u7801');
            return;
        }

        $.getJSON('http://price.auto.sina.cn/api/JzgApi/gz', {
            car_id: $('.evaluationbox .oldcarbox .J_tCar').val(),
            mile: $('.evaluationbox .oldcarbox .inputwrap input').val() * 10000,
            buy_date: $('.evaluationbox .oldcarbox .J_year').val() + '-' + $('.evaluationbox .oldcarbox .J_month').val() + '-01',
            city_id: $('.evaluationbox .oldcarbox .J-hangqing-city').val(),
            province_id: $('.evaluationbox .oldcarbox .J-hangqing-province').val(),
            n_carid: $('.evaluationbox .newcarbox .J_tCar').val(),
            n_cid: $('.evaluationbox .newcarbox .J-hangqing-city').val(),
            n_pid: $('.evaluationbox .newcarbox .J-hangqing-province').val(),
            mobile: $('.evaluationbox .calculationwrap .inputwrap input').val(),
            reffer_code: 2021
        }, function(data) {
            if (data.data.new_price == '') {
                $('.evaluationbox .result_layer .bd .nodata').show().siblings('.hasdata').hide();
            } else {
                $('.evaluationbox .result_layer .bd .hasdata').html(data.data.new_price+'\u4e07').show().siblings('.nodata').hide();
            }
            if (data.data.gz == '') {
                $('.evaluationbox .result_layer .nodatabox').show().siblings('.hasdatabox').hide();
            } else {
                $('.evaluationbox .result_layer .hasdatabox').show().siblings('.nodatabox').hide();
                for (var i in data.data.gz.c2BPrices) {
                    if (i == 'a') {
                        $('.evaluationbox .result_layer .hasdatabox .desc').eq(2).find('.guzhijia').html(data.data.gz.c2BPrices[i]+'\u4e07');
                    } else if (i == 'b') {
                        $('.evaluationbox .result_layer .hasdatabox .desc').eq(1).find('.guzhijia').html(data.data.gz.c2BPrices[i]+'\u4e07');
                    } else if (i == 'c') {
                        $('.evaluationbox .result_layer .hasdatabox .desc').eq(0).find('.guzhijia').html(data.data.gz.c2BPrices[i]+'\u4e07');
                    }
                }
                if (data.data.gz.text['a'] == '') {
                    $('.evaluationbox .result_layer .hasdatabox .desc .jijinjiabox').hide();
                } else {
                    for (var j in data.data.gz.text) {
                        if (j == 'a') {
                            $('.evaluationbox .result_layer .hasdatabox .desc').eq(2).find('.jijinjiabox').show().html(data.data.gz.text[j]+'\u4e07');
                        } else if (j == 'b') {
                            $('.evaluationbox .result_layer .hasdatabox .desc').eq(1).find('.jijinjiabox').show().html(data.data.gz.text[j]+'\u4e07');
                        } else if (j == 'c') {
                            $('.evaluationbox .result_layer .hasdatabox .desc').eq(0).find('.jijinjiabox').show().html(data.data.gz.text[j]+'\u4e07');
                        }
                    }
                }
            }
            $('.evaluationbox .result_layer').show();

            cookie('hangqingInfo_usermobile', $('.evaluationbox .calculationwrap .inputwrap input').val(), {'expires': 180});
        });
    });

    $('body').delegate('.evaluationbox .result_layer .hasdatabox .tags li', 'click', function() {
        var nindex = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $(this).parents('.hasdatabox').find('.desc').eq(nindex).show().siblings('.desc').hide();
    });
}

$('.gediyouhui').delegate('.show_more', 'click', function() {
    $(this).parents('.dd').children('.hide').removeClass('hide');
    $(this).addClass('hide');
});