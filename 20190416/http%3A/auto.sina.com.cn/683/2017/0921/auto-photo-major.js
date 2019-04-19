/*ad_common.js start*/
function getCookie(c_name) {
    if (document.cookie.length>0) {
        c_start=document.cookie.indexOf(c_name + "=")
        if (c_start!=-1) {
            c_start=c_start + c_name.length+1
            c_end=document.cookie.indexOf(";",c_start)
            if (c_end==-1) c_end=document.cookie.length
            return unescape(document.cookie.substring(c_start,c_end))
        }
    }
    return ""
}

function setCookie(c_name,value,expiredays) {
    var exdate=new Date()
    exdate.setDate(exdate.getDate()+expiredays)
    document.cookie=c_name+ "=" +escape(value)+";path=/"+((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
    //alert(value)
}

function checkCookie(){
    //alert("check");
    var ip_str = "ad_10click";
    //alert(ip_str);
    var click_num = getCookie(ip_str);
    if(click_num != null && click_num != '' && click_num != "null"){
        count = parseInt(click_num)+1;
        //alert(count);
        if(count == 11){
            var city_arr = get_ip_city();
            if(city_arr['province'] != '宁夏' && city_arr['province'] != '青海' &&city_arr['province'] != '西藏' &&city_arr['city'] != '香港' &&city_arr['city'] != '澳门' && city_arr['province'] != '台湾'){
                Roeve.init("center");
            }
        }
        //document.write("<script type='text/javascript'>var _gaq = _gaq || [];_gaq.push(['_setAccount', 'UA-33634641-1']);_gaq.push(['_setDomainName', 'sina.com.cn']);_gaq.push(['_trackPageview']);(function() {var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s); })();</script>");
        setCookie(ip_str,count,1);

    }else{
        setCookie(ip_str,1,1);
    }
}
/*ad_common.js end*/

function getScrollbarSize() {
    // Create an Outer scrolling div
    var dv = document.createElement('div');
    dv.style.position = 'absolute';
    dv.style.left = '-1000px';
    dv.style.top = '-1000px';
    dv.style.width = '100px';
    dv.style.height = '100px';
    dv.style.padding = '0px';
    dv.style.margin = '0px';
    dv.style.overflow = 'scroll';
    dv.style.border = '0px';

    // Attach it to the DOM  document.body.appendChild(dv);
    // Inner div to deform the scrolling div and create a scroll bar
    var inn = document.createElement('div');
    inn.style.position = 'relative';
    inn.style.border = '0px';
    inn.style.height = '200px';
    inn.style.padding = '0px';
    inn.style.margin = '0px';
    dv.appendChild(inn);

    document.body.appendChild(dv);
    var scrollbarWidth = 100-inn.offsetWidth;
    document.body.removeChild(dv);
    return scrollbarWidth;
}
var sinaBokePlayerConfig_o = {
    container: "flash",  //Div容器的id
    width:950,           //宽
    height:635,          //高
    autoLoad: 1,         //自动加载
    autoPlay: 1,         //自动播放
    popBtn:1,
    as:0,                //广告
    tj:0,                //推荐
    logo:0
};
var player = sinaVideoPlayerClient(sinaBokePlayerConfig_o);
function PlayVideo(vid,uid,pid,tid,did,vTitle,vUrl,vPic,vSummary) {
    player.addVars('vid',vid);
    player.addVars('pid',pid);
    player.addVars('tid',tid);
    player.showFlashPlayer();
}
var imgtpl =	'<% for(var i=0,l=data.length; i<l; i++){ %>'+
    '<li>'+
    '<a href="javascript: void 0;">'+
    '<img photo_no="<%=data[i].photo_NO%>" photoid="<%=data[i].photoid%>" title="<%=data[i].title%>" photo_950="<%=data[i].img%>" src="<%=data[i].img_150%>" img_src="<%=data[i].img_src%>" type_name="<%=data[i].type_name%>" type_photonum="<%=data[i].type_photonum%>" typeid="<%=data[i].type3%>" >'+
    '</a>'+
    '</li>'+
    '<% } %>';
var groupDataLength = $('.pic_list li').length;

function PictureSwitch(config){
    $.extend(this, config);

    this.cur = 0;
    this.count = $('.pic_list li').length;
    this.itemSelector = '.pic_list li';
    this.$el = $('.pic_list').eq(0);
    this.imgWidth = 160;
    this.imgHeight = 110;

    this.$itemContainer = $('.pic_list ul').eq(0);
    this.$itemShower = $('.pic_list .list_wrap');
    this.$items = $(this.itemSelector);

    this.$rightBtn = $('.btn_right');
    this.$leftBtn = $('.btn_left');
    this.$preTuji = $('#pre_url').attr('pre_url');
    this.$bigImg = $('.pic_big');
    this.$bigImgSay = $('.main_summary');
    this.$playBtn = $('.btn_play');
    this.$flash = $('#flash');
    this.$openBtn = $('.open_btn');
    this.$adDiv = $('.adver');

    this.state = 'collapse';
    this.scrollbarWidth = getScrollbarSize();
    this.column = this.getColumn();
    this.num = 6;
    this.$titleIndex = $('.header .index em');
    this.$titleCount = $('.header .index strong');
    // this.$titleIndex = $('.nav .page em');
    // this.$titleCount = $('.nav .page strong');

    this.adHieght = 36;

    this.init();
}
PictureSwitch.prototype = {
    next: function(){
        $('.nav .car-des').html($('.scroll-pane li').eq(this.cur + 1).find('img').attr('title')).attr('title',$('.scroll-pane li').eq(this.cur + 1).find('img').attr('title'));
        // if(this.cur + 1 > this.column - 1){
        // if(this.cur + 1 > this.count - 1){
        if(this.cur + 1 > groupDataLength - 1){
            if(groupDataLength < 6){
                if(this.onNextEnd){
                    this.onNextEnd();
                }
            } else {
                this.pageDown();
            }
        }else{
            this.cur++;
            this.showCur();
        }
    },
    pre: function(){
        $('.nav .car-des').html($('.scroll-pane li').eq(this.cur - 1).find('img').attr('title')).attr('title',$('.scroll-pane li').eq(this.cur - 1).find('img').attr('title'));
        if(this.cur - 1 < 0){
            this.pageUp();
        }else{
            this.cur--;
            this.showCur();
        }
    },
    showCur: function(){
        this.beforeShow();

        var cur = this.cur,
            $cur = this.$items.eq(cur),
            $img = $cur.find('img');
        this.computePos();
        $('.pic_list .active').remove();
        $('<div class="active"></div>').appendTo($cur);
        this.$bigImg.attr('src', $img.attr('photo_950'));
        this.$bigImgSay.text($img.attr('photo_script'));

        this.afterShow($img, cur);
    },
    beforeShow: function(){},
    afterShow: function($img, cur){
        //处理视频
        this.afterVideoPlay();
        if( (cur+1) in this.videoInfo){
            this.$playBtn.show();
        }else{
            this.$playBtn.hide();
        }

        //处理附加信息
        if( (cur+1) in this.extendInfo){
            this.$adDiv.attr('href', this.extendInfo[cur+1][1] ).text(this.extendInfo[cur+1][0]);
            this.$adDiv.show();
        }else{
            this.$adDiv.hide();
        }

        //处理下载
        // $('.side_btns .download').attr("href", $img.attr("img_src") );
        $('.side_btns .download').attr("href", $img.attr("photo_src") );
        if(this.onAfterShow){
            this.onAfterShow(cur);
        }

        //序号
        this.$titleIndex.text($img.attr('photo_no'));
        this.$titleCount.text($img.attr('type_photonum'));
        bimg_pre_load(cur);

        //pv
        var param_c = $("#param_c").attr("param_c");

        if(param_c){
            param_c = '&' + param_c;
        } else {
            param_c = '';
        }
        var photoid = window.location.href.split('#')[1];
        /*if(window.location.href.indexOf('um') > 0){
         $("#pv_iframe").attr("src", "http://photo.auto.sina.com.cn/pv/um_highpix_pv.html?HDid="+$(".like").attr("HDid")+"&tags="+$('#tags_id').attr('tags_id')+param_c+'&photoid='+photoid+"&r="+Math.floor(Math.random()*1000000000));
         } else {
         $("#pv_iframe").attr("src", "http://photo.auto.sina.com.cn/pv/highpix_pv.html?HDid="+$(".like").attr("HDid")+"&tags="+$('#tags_id').attr('tags_id')+param_c+'&photoid='+photoid+"&r="+Math.floor(Math.random()*1000000000));
         }*/
        //$("#pv_iframe").attr("src", window.location.href+"?photoid="+photoid+"&r="+Math.floor(Math.random()*1000000000));
        if(typeof(SUDA)!='undefined'){
            var para=window.location.href+"?photoid="+photoid+"&r="+Math.floor(Math.random()*1000000000);
            SUDA.log && SUDA.log('','',para);
        }

        //hash
        if($img.attr('photoid')){
            location.hash = '#'+$img.attr('photoid');
        }
    },
    beforeVideoPlay: function(){
        this.$flash.show();
        this.$playBtn.hide();
        //this.$leftBtn.height(this.$bigImg.height() - this.adHieght);
        //this.$rightBtn.height(this.$bigImg.height() - this.adHieght);
        this.$leftBtn.height(579);
        this.$rightBtn.height(579);
    },
    afterVideoPlay: function(){
        this.$flash.hide();
        this.$leftBtn.height('100%');
        this.$rightBtn.height('100%');
    },
    getColumn: function(){
        var containerWidth = this.$el.width();

        if(this.state == 'open'){
            containerWidth -= (this.scrollbarWidth+10);
        }
        return Math.floor(containerWidth/this.imgWidth);
    },
    onResize: function(){
        this.column = this.getColumn();
        if(this.state == 'open'){
            this.$itemContainer.width(this.column * this.imgWidth + this.scrollbarWidth + 10);
        }
        this.computePos();
    },
    computePos: function(){
        var row = Math.floor(this.cur/this.column);

        if(this.state == 'collapse'){
            this.$itemContainer.css('top', -row*this.imgHeight);
        }else{
            if(row + 4 > Math.ceil(this.count/this.column) - 1 ){
                row = Math.ceil(this.count/this.column) - 4;
            }
            this.$itemContainer.scrollTop(row*this.imgHeight);
        }
        this.adjustMargin();
    },
    adjustMargin: function(){
        var column = this.column,
            me = this,
            margin = 10;

        this.$items.each(function(i, item){
            var cur_row = Math.floor(i/column),
                cur_col = i%column;
            $(this).css({left: cur_col*(150+margin), top: cur_row*(me.imgHeight)});
        });
    },
    toggleList: function(){
        if(this.state == 'collapse'){
            this.$el.css('padding-top', '35px');
            this.$itemShower.css({'height': 4*this.imgHeight-10});
            this.$itemContainer.css({'height': 4*this.imgHeight-10, 'overflow': 'auto', 'top': 0});
            this.state = 'open';
        }else{
            this.$el.css('padding-top', '22px');
            this.$itemShower.css({'height': this.imgHeight-10});
            this.$itemContainer.css({'height': 'auto', 'overflow': 'visible'});
            this.state = 'collapse';
        }
        this.onResize();
    },
    init: function(){
        var me = this;
        //this.$rightBtn.click($.proxy(this, 'next'));
        //this.$leftBtn.click($.proxy(this, 'pre'));
        this.$openBtn.click($.proxy(this, 'toggleList'));

        /*this.$el.delegate('li', 'click', function(e){
            var index = $(this).index();
            me.cur = index;
            me.showCur();
            e.preventDefault();

            $(window).scrollTop(65);
        });*/

        this.$playBtn.click(function(){
            var pos = me.cur+1;
            me.beforeVideoPlay();
            PlayVideo(me.videoInfo[pos], "1288636590", "33");
            $('video').css('-webkit-transform-style', 'preserve-3d');
        });

        this.getVideoInfo();
        this.getExtendInfo();
        this.showSmallVideoICON();

        //var cur = $('.pic_list .cur').index();
        var cur = 0;
        var url_id = this.checkUrl();
        if( url_id ){
            var $url_id_img = $('.pic_list li img[photoid="'+url_id+'"]');
            if( $url_id_img.length ){
                cur = $url_id_img.closest('li').index();
            }
        }
        if(cur < 0){
            cur = 0;
        }
        this.showIndex(cur);
    },
    getVideoInfo: function(){
        var videoInfo = {},
            $video_div = $('#video_value'),
            pos_arr,
            vid_arr;

        if($video_div.length && $video_div.attr('video_pos') ){
            pos_arr = ( $video_div.attr('video_pos') || '' ).split(',');
            vid_arr = ( $video_div.attr('video_id') || '' ).split(',');

            for(var i=0, l = pos_arr.length; i<l; i++){
                videoInfo[ trim(pos_arr[i]) ] = trim(vid_arr[i]);
            }
        }
        this.videoInfo = videoInfo;
    },
    showSmallVideoICON: function(){
        var videoInfo = this.videoInfo,
            pos,
            $video_item;
        for(pos in videoInfo){
            $video_item = this.$items.eq(pos-1);
            $video_item.append('<span class="video_icon"></span>');
        }
    },
    showIndex: function(index){
        this.cur = index;
        this.showCur();
    },
    getExtendInfo: function(){
        var extendInfo = {},
            $extend_div = $('#extend_value'),
            pos_arr,
            url_arr,
            text_arr;

        if($extend_div.length && $extend_div.attr('extend_info_pos') ){
            pos_arr = ( $extend_div.attr('extend_info_pos') || '' ).split(',');
            url_arr = ( $extend_div.attr('extend_info_url') || '' ).split(';');
            text_arr = ( $extend_div.attr('extend_info_text') || '' ).split(',');

            for(var i=0, l = pos_arr.length; i<l; i++){
                extendInfo[ trim(pos_arr[i]) ] = [ text_arr[i], trim(url_arr[i]) ];
            }
        }
        this.extendInfo = extendInfo;
    },
    checkUrl: function(){
        var hash = location.hash.match(/\d+$/);
        if(hash == null){
            return null;
        }
        hash = hash[0];
        var url_id = location.pathname.match(/(\d+)\.html$/);
        if(url_id == null){
            return null;
        }
        url_id = url_id[1];
        if(hash == url_id){
            return null;
        }
        return hash;
    },
    loadData: function(dir, photo_id, callback){
        var me = this;
        $.getJSON('http://photo.auto.sina.com.cn/api/picture/getUmPhoto/'+dir+'/'+photo_id+'/'+this.num+'/?clean=yes&callback=?', function(data){
            groupDataLength = data.length;
            if(data.length <=0){
                if(dir == 'next'){
                    if(me.onNextEnd){
                        me.onNextEnd();
                    };
                } else if(dir == 'pre'){
                    if(me.onPrevEnd){
                        me.onPrevEnd();
                    };
                }
                return;
            }
            me.showData(data);
            // me.column = data.length;
            if(callback){
                callback(data.length);
            }
        });
    },
    showData: function(data){
        var html = baidu.template(imgtpl, {data: data});
        this.$itemContainer.html(html);
        this.$items = $(this.itemSelector);
    },
    pageUp: function(){
        var photo_id = this.$items.eq(0).find('img').attr('photoid') || 0,
            me = this;
        this.loadData('pre', photo_id, function(){
            me.showIndex(me.column);
        });
    },
    pageDown: function(){
        var photo_id = this.$items.eq(this.column).find('img').attr('photoid') || 0,
            me = this;
        this.loadData('next', photo_id, function(){
            me.showIndex(0);
        });
    }
}

function trim(str){
    if(!str){
        return '';
    }
    return str.replace(/^\s+|\s+$/g,"");
}

//加载剩余小图
function simg_load(){
    var li_list = $(".pic_list li"),
        li_len = li_list.length,
        this_img,
        i;
    for (i=8; i<li_len; i++){
        this_img = li_list.eq(i).find("img");
        this_img.attr("src",this_img.attr("src_nl"))
    }
}

var cur_loaded_group = 0;
//分组预加载大图
function bimg_pre_load(cur_index){
    var group_id = Math.ceil( (cur_index+1)/8 ),
        img;
    if(cur_loaded_group != group_id){
        var imgs_small = $(".list_wrap").find("img");

        for(var i=0; i<imgs_small.length; i++){
            if(Math.ceil((i+1)/8) == group_id){
                img = new Image();
                img.src = imgs_small.eq(i).attr("photo_950");
            }
        }
        cur_loaded_group = group_id;
        img = null;
    }
}

/*function getPlcount() {
    var channel = $("#comment_value").attr("params").split("&")[0].split("=")[1],
        cmnt_id = channel + ':33-HD-'+$(".cmt").attr("HDid")+':0';
    $.getJSON('http://comment5.news.sina.com.cn/cmnt/count?format=json&oe=utf-8&callback=?&newslist=' + cmnt_id , function(json) {
        if (json.result.status.code == 0) {
            for (var i in json.result.count) {
                if (i == cmnt_id) {
                    $(".cmt").find("span").html(json.result.count[i].show);
                    $(".cmt_a").find("span").html(json.result.count[i].show);
                }
            }
        }
    });
}*/

if(typeof(window.sinaSSOController) == 'undefined' || window.sinaSSOController.get51UCCookie() == null){
    window.sinaSSOController.get51UCCookie = function(){return {'uid': false};};
}

function likeHD(){
    var curuid = sinaSSOController.get51UCCookie().uid;
    var HDid_c = $(".like").attr("HDid");
    var ajax_url = 'http://i.auto.sina.com.cn/api/favorite/add/highpix/'+HDid_c+'/notdomai/?callback=?&random='+Math.random();

    /*yxc add 2015.4.22*/
    //uatrack部码
    var uacode = "auto_like_highpix";
    var uscodeid = uacode + "_" + HDid_c;
    _S_uaTrack(uacode, uscodeid);
    /*yxc add end*/

    if(curuid){
        $.getJSON(ajax_url,function(data){
            if(data.ret == "1"){
                getLikeHD();
                //AutoDFavorite.add({code:'highpix',oid:HDid_c});
            }else{
                alert("您已喜欢过该图集！");
            }
        });
    }else{
        var highpix_cookie = getCookie("HDid_liked");

        if(highpix_cookie!=null && highpix_cookie!="" && highpix_cookie!="null") {
            var c_index = highpix_cookie.indexOf(HDid_c);
            if(c_index == -1){
                setCookie("HDid_liked",highpix_cookie+'H'+HDid_c,1);
                $.getJSON(ajax_url,function(data){
                    if(data.ret == "1"){
                        getLikeHD();
                        //AutoDFavorite.add({code:'highpix',oid:HDid_c});
                    }
                });
            }else{
                alert("您已喜欢过该图集！");
            }
        }else{
            setCookie("HDid_liked",HDid_c,1);
            $.getJSON(ajax_url,function(data){
                if(data.ret == "1"){
                    getLikeHD();
                    //AutoDFavorite.add({code:'highpix',oid:HDid_c});
                }
            });
        }
    }
}

function getLikeHD(){
    var curuid = sinaSSOController.get51UCCookie().uid;
    var HDid_c = $(".like").attr("HDid");
    $.getJSON('http://i.auto.sina.com.cn/api/open/getFavorite/?callback=?&uid='+curuid+'&code=highpix&oid='+$(".like").attr("HDid")+'&_='+Math.random(),function(data){
        $(".like").find("span").html(data.list[HDid_c].sum);
        $(".like_a").find("span").html(data.list[HDid_c].sum);
        if(data.list[HDid_c].isfavorite){
            hasLikeHD();
        }else{
            var highpix_cookie = getCookie("HDid_liked");

            if(highpix_cookie!=null && highpix_cookie!="" && highpix_cookie!="null") {
                var c_index = highpix_cookie.indexOf(HDid_c);
                if(c_index != -1){
                    hasLikeHD();
                }
            }
        }

    });
}

function hasLikeHD(){
    $(".like").addClass('selected_like');
    $(".like_a").addClass('selected_like_a');
}

/*看了又看*/
(function(exports){
    // 添加两个方法及一个对象单例 daichang 20130808
    // 是否有尾页广告
    var hasAD = function() {
        var ad = 0;
        if (window.epidiaAdValid && typeof epidiaAdValid == 'function') {
            try {
                ad = epidiaAdValid(epidiaAdResource.end);
            } catch (e) {}
        }
        return ad ? 1 : 0;
    };
    // suda统计
    var sudaTrackWithAD = function(val){
        // suda统计
        //  具体咨询 @孙晗
        // 1.有广告时右上角关闭按钮 点击 每次点击 请求 suda-uatrack="key=new_photo_stats&value=close_with_ad" epidiascope中
        // 2.无广告时右上角关闭按钮 点击 每次点击 请求 suda-uatrack="key=new_photo_stats&value=close_with_ad"  epidiascope中
        // 5.推荐悬浮框弹出，且有广告时请求  suda-uatrack="key=new_photo_stats&value=pageview_with_ad"
        // 6.推荐悬浮框弹出，且无广告时请求  suda-uatrack="key=new_photo_stats&value=pageview_without_ad"

        var sudaValSuffix = 'widthout_ad';
        var sudaVal = val+'_';
        if(hasAD()){
            sudaValSuffix = 'width_ad';
        }
        sudaVal += sudaValSuffix;
        try{if(window._S_uaTrack){_S_uaTrack('new_photo_stats', sudaVal);}}catch(e){}
    };
    exports.EndSelect = {
        inited:false,
        wrap:null,
        render:function(){
            if(this.inited){
                return;
            }
            var Recommender =  window.___SinaRecommender___;
            if(typeof Recommender == 'undefined'){
                return;
            }
            // 渲染猜你喜欢，看了又看和高清图集
            Recommender.slide.render.init(hasAD());
            this.inited = true;

        },
        show:function(){
            if($('.lp_next img').length <= 0){
                $('.lp_next a').prepend('<img src="'+$('.lp_next a').attr('next_src')+'" />');
            }
            $('#last_page').show().siblings().hide();
            $('.content').css('border-bottom', '1px solid #efefef');
            this.render();
            //sudaTrackWithAD(action);
        }
    };
})(window);

/*猜你喜欢*/
function getGuessLike(){
    /*此接口为旧版接口
     $.getJSON('http://interest.mix.sina.com.cn/api/?s=interest_v2&a=get&type=slide&&callback=?', function(data){
     if(data.result.data.length >= 6){
     data = data.result.data;
     }else{
     data = data.result.data.concat( data.result.all );
     }
     */

    $.getJSON('http://cre.mix.sina.com.cn/api/v3/get?cre=picpagepc&mod=picg&statics=1&merge=3&type=1&length=16&cateid=t_s&fields=url,stitle,title,thumb&callback=?', function(data){
        data = data.data;

        var template =  '<% for(var i=0,l=data.length;i<l;i++){ %>'+
            '<a title="<%=data[i].title%>" href="<%=data[i].url%>" target="_blank">'+
            '<img src="<%=data[i].thumb%>" />'+
            '<span class="center"></span>'+
            '<span class="bg"></span>'+
            '<span class="text"><%=data[i].title%></span>'+
            '</a>'+
            '<% } %>';
        // data = data.slice(0, 6);
        data = data.slice(0, 4);
        var html = baidu.template(template, {data: data});
        $('.love_list').html(html);
        // checkLoveList();
        // $(window).resize(checkLoveList);
    });
}

// function checkLoveList(){
// 	if($(window).width() > 1260){
// 		$('.sidebar').width(416);
// 		$('.comment').css('margin-right', '436px');
// 	}else{
// 		$('.sidebar').width(198);
// 		$('.comment').css('margin-right', '218px');
// 	}
// }

var share_url = '';
window.onload = function(){weibo_share_init();};
function weibo_share_init()
{
    var share_title = $(".header h1").find("a").attr("title");
    share_title = share_title.replace(/-/g,"－");
    var $share_txt_div = $('#share_txt');
    var share_summary = ' ';
    if( $share_txt_div.length && $share_txt_div.attr('share_txt_value') ){
        share_summary += $share_txt_div.attr('share_txt_value');
    }
    var share_pic = $(".list_wrap li").find("img").attr("photo_950");
    var url_local = window.location.href;
    var url_arr = url_local.split('/');
    var photoid_str = url_arr.pop();
    var hash2 = window.location.hash.replace('#','');
    if(hash2 != ''){
        share_url = url_arr.join('/')+'/'+hash2.replace('#','')+'.html';
    }
    //alert(share_url);
    if (bShare.entries.length != 0) {
        bShare.entries.splice(0, bShare.entries.length);
    }
    var pics = $('.list_wrap img');
    if(pics && pics.length){
        pics = $.map(pics, function(item){ return $(item).attr('photo_950');});
        pics = pics.slice(0, pics.length);
        pics = pics.join('||');
    }else{
        pics = share_pic;
    }
    bShare.addEntry({
        title: share_title,
        url: url_local,
        summary: share_summary
        //,
        //pic: pics
    });
}

function backToTop(id){
    var $window = $(window),
        $btn = $('#'+id),
        right,
        windowWidth;

    function computPos(){
        if($window.scrollTop() > 0){
            $btn.show();
        }else{
            $btn.hide();
        }
    }
    $window.scroll(computPos);
    $window.resize(computPos);

    $btn.click(function(){
        $window.scrollTop(0);
    });
}

function ProgressNavBar(){
    this.$el = $('.nav_ul');
    this.$items = $('li', this.$el);
    this.addNavClickHandler();
}
ProgressNavBar.prototype = {
    countPerDot: 5,
    createProgressDots: function(totalcount){
        var item_nums = $.map(this.$items, function(item){
                return parseInt($(item).attr('num'), 10);
            }),
            dot_nums = [],
            dot_html,
            dot_num,
            dot_count,
            countPerDot = this.countPerDot,
            dot_set = {};

        //初始化dot中的值
        for(var i=0, l=item_nums.length; i<l; i++){
            start_num = item_nums[i];
            end_num = item_nums[i+1] ? item_nums[i+1] : totalcount;

            dot_count = Math.ceil( (end_num - start_num)/countPerDot );

            dot_html = '<div class="dot_space">';
            for(var j=0; j<dot_count; j++){
                dot_num = start_num + j * countPerDot;
                dot_html += '<span num="' + dot_num + '"></span>';
                dot_nums.push(dot_num);
            }
            dot_html += '</div>';

            this.$items.eq(i).append(dot_html);
        }

        $('span', this.$el).each(function(){
            dot_set[ $(this).attr('num') ] = $(this);
        });

        this.dot_nums = dot_nums;
        this.dot_set = dot_set;

    },
    focusOnIndex: function(i){
        var dot_nums = this.dot_nums,
            dot_set = this.dot_set,
            l = dot_nums.length,
            res_dot_num,
            dot_num,
            $cur_dot;

        for(var j=0; j<l; j++){
            dot_num = dot_nums[j];
            if(i > dot_num){
                if(j != l-1){
                    continue;
                }else{
                    res_dot_num = dot_num;
                }
            }else if(i == dot_num){
                res_dot_num = dot_num;
                break;
            }else{
                if(j > 0){
                    res_dot_num = dot_nums[j-1];
                }
                break;
            }
        }

        if(res_dot_num){
            $cur_dot =  dot_set[res_dot_num];;
            $('.cur', this.$el).removeClass('cur');
            $cur_dot.addClass('cur');
            $cur_dot.closest('li').addClass('hover').siblings().removeClass('hover');
        }else{
            this.blur();
        }
    },
    blur: function(){
        if($('.cur', this.$el).length){
            $('.cur', this.$el).removeClass('cur');
        }
        if($('.hover', this.$el).length){
            $('.hover', this.$el).removeClass('hover');
        }
    },
    addNavClickHandler: function(){
        var me = this;
        this.$el.delegate('a', 'click', function(){
            var $nav_item = $(this).parent(),
                num = parseInt( $nav_item.attr('num'), 10);

            if(me.afterItemClick){
                me.afterItemClick(num, $nav_item);
            }
        });
    }
}

$(function(){
    //处理展开按钮
    $('.open_btn').click(function(){
        var $this = $(this);
        if($this.hasClass('off_open_btn')){
            $this.text('展开全部小图列表');
        }else{
            $this.text('返回全部小图顶部');
        }
        $this.toggleClass('off_open_btn');
    });

    var navbar = new ProgressNavBar;
    navbar.createProgressDots($('.pic_list li').length);

    //初始化图片切换效果
    var picswitcher = new PictureSwitch({
        onNextEnd: function(){
            var url = $('#last_page').find('.lp_next').find('a').eq(0).attr('href');
            if(url){
                location.href = url;
            }
        },
        onPrevEnd: function(){
            var url = this.$preTuji;
            if(url == ''){
                alert('这是第一个图集了！');
            } else {
                window.location.href = url;
            }
        },
        onAfterShow: function(cur){
            navbar.focusOnIndex(cur+1);
        }
    });

    navbar.afterItemClick = function(num){
        picswitcher.showIndex(num-1);
    };

    simg_load();
    getGuessLike();
    getLikeHD();
    //getPlcount();
    backToTop('to_top');

    /*$('#left_arrow').click(function(){
        picswitcher.pageUp();
    });

    $('#right_arrow').click(function(){
        if(groupDataLength < 6){
            if(picswitcher.onNextEnd){
                picswitcher.onNextEnd();
            }
        } else {
            picswitcher.pageDown();
        }
    });*/

    $(".like").click(function(){
        if( $(this).hasClass('selected_like') ){
            alert('您已喜欢过该图集！');
        }
        likeHD();
    });

    $(".like_a").click(function(){
        if( $(this).hasClass('selected_like_a') ){
            alert('您已喜欢过该图集！');
        }
        likeHD();
    });

    //重新播放
    $('.replay').click(function(){
        $('#last_page').hide().siblings().show();
        $('.content').css('border-bottom', 'none');
        picswitcher.showIndex(0);
        picswitcher.state = 'open';
        picswitcher.toggleList();
    });

    $(".main_pic").mousedown(function(e){
        var $this;
        if(e.button==2){
            $this = $(this);
            $('.btn_left, .btn_right', $this).hide();
            setTimeout(function(){ $('.btn_left, .btn_right', $this).show();},1500);
        }
    });

    (function(){
        var $areas = $('.header, .pic_list, .comment_area, #last_page'),
            $area_main = $('.main_wrap'),
            timer = null;

        function checkWinSize(){
            var win_width = $(window).width();
            if( win_width <= 1020){
                $areas.css({'margin': '0', 'padding-left': '10px', 'padding-right': '10px'});
                $area_main.css({'margin': '0', 'padding-left': '10px', 'padding-right': '10px'});
                $('.content').css('min-width', '1060px');
            }else if( win_width <= 1040){
                $areas.css({'margin': '0', 'padding-left': (win_width-1000)/2 +'px', 'padding-right': (win_width-1000)/2 +'px'});
                $area_main.css({'margin': '0', 'padding-left': (win_width-1000)/2 +'px', 'padding-right': (win_width-1000)/2 +'px'});
                $('.content').css('min-width', 1050+(win_width-1000)/2+'px');
            }else{
                $areas.css({'margin': '0 auto', 'padding-left': '20px', 'padding-right': '20px'});
                if( win_width <= 1100 ){
                    $area_main.css({'margin': '0', 'padding-left': (win_width-1000)/2 +'px', 'padding-right': (win_width-1000)/2 +'px'});
                    $('.content').css('min-width', 1050+(win_width-1000)/2+'px');
                }else{
                    $area_main.css({'margin': '0 auto', 'padding-left': '50px', 'padding-right': '50px'});
                }
            }
            picswitcher.onResize();
        }

        $(window).resize(function(){
            clearTimeout(timer);
            timer = setTimeout(checkWinSize, 50);
        });

        checkWinSize();
    })();

    //喜欢、分享等按钮自适应
    //   (function(){
    //       var maxWidth = 100,
    //           minWidth = 50,
    //           contentWidth = 1000,
    //           $side_btns = $('.side_btns'),
    // 	$btns = $('.side_btns .btn'),
    // 	startAD = true;

    //       function isBigWin(){
    //           return ($(window).width() - contentWidth)/2 >= maxWidth - minWidth;
    //       }

    // function hasAD(){
    // 	return $('#sinaadToolkitBox1').length > 0;
    // }

    //       function changeBtn(){
    // 	if(startAD && hasAD()){
    // 		if($(window).width()<=1340){
    // 			$side_btns.removeClass('big_side_btns').find('.app').hide();
    // 			return;
    // 		}else{
    // 			$side_btns.find('.app').show();
    // 		}
    // 	}
    //           if(isBigWin() && $btns.eq(0).width() <= minWidth){
    //               $side_btns.addClass('big_side_btns');
    //               return;
    //           }
    //           if(!isBigWin() && $btns.eq(0).width() >= maxWidth){
    //               $side_btns.removeClass('big_side_btns');
    //           }
    //       }

    //       $(window).resize(changeBtn);
    //       changeBtn();
    //   })();

    $(document).keydown(function(event){
        if(event.keyCode == 37) {
            picswitcher.pre();
            event.preventDefault();
        } else if(event.keyCode == 39) {
            picswitcher.next();
            event.preventDefault();
        }
    });

    (function(){
        var start = (new Date()).getTime();
        function checkAD(){
            if( (new Date()).getTime() - start >= 5000){
                return;
            }
            if( $('#sinaadToolkitBox1').length ){
                if( $(window).width() <= 1340 ){
                    $('.side_btns').removeClass('big_side_btns').find('.app').hide();
                }
            }else{
                setTimeout(checkAD, 50);
            }
        }
        checkAD();
    })();

    $(".btn.cmt").html('<em>\u8bc4\u8bba</em>');
    setTimeout(function(){
        $(".btn.cmt").html('<em>\u8bc4\u8bba</em>(<span>'+$("#sinaTextPageCommentBottom .count em:nth-child(1) a").html()+'</span>)');
    },500);
});

/*分享 start*/
(function() {
    function C() {
        if (!d.anchorsBinded) {
            d.anchorsBinded = !0;

            var sharesina = function(a){
                    weibo_share_init();
                    d.share(a, 'sinaminiblog', 0);
                },
                sharemore = function(a){
                    weibo_share_init();
                    d.more(a);
                }

            j.getElem(A, "a", "bshare-more",function(a, b) {
                j.getElem(a, "i", "clickToWeibo", function(a) {
                    A.addEventListener ? a.addEventListener("click", sharesina, !1) : a.attachEvent("onclick", sharesina);
                });
                j.getElem(a, "i", "clickToAll", function(a) {
                    A.addEventListener ? a.addEventListener("click", sharemore, !1) : a.attachEvent("onclick", sharemore);
                });
            });
        }
    }
    var w = window,
        j = w.bShareUtil,
        d = w.bShare,
        n = d.config,
        h = d.imageBasePath,
        A = document,
        p = h + "logos/s4/",
        r = h + "logos/m2/",
        s = h + "logos/mp2/",
        t = h + "logos/l3/",
        D = -18,
        E = -26,
        F = -34,
        G = -52,
        l = "sprite/top_logos_sprite",
        c = "*display:inline;display:inline-block;}",
        m = " no-repeat;" + c,
        f, i, b, a, q = j.isIe ? ".gif": ".png",
        H = "more-style-",
        e,
        y = ["android", "apple", "sharethis", "sharethis-orange", "addthis"];
    j.ready(function() {
        var a = function() {
            d.completed ? (C(), d.params.type != 15 && n.pop != -1 && !n.beta && !n.popjs && j.loadScript(d.jsBasePath + "styles/bshareS887.js?v=20140606")) : setTimeout(a, 50)
        };
        a()
    })
})();
/*分享 end*/
