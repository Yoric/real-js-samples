;(function($){
    if(!$){
        return false;
    }
    var default_cfg = {
        trace:"",//分享标记，默认为空，假如设置了，分享出去的标记为trace_cmd
        title:$("title").text() || "",//分享标题，默认抓title标签
        desc:$("meta[name=description]").attr("content")||"",//分享描述，默认抓description标签
        comment:"",//分享评论，默认留空
        link:window.location.href,//分享链接，默认当前页链接
        pics:"",//分享图片，默认留空
        searchPic:"false",
        beforeClick:function(cmd,cfg){
            //cfg.title = "ssss";
            //返回值为更新后的配置
            return cfg;
        },
        afterClick: function(cmd){

        }
    };
    
    function _open(cfg,typ,context){
        var ctx = context || window;

        if($.isFunction(cfg.beforeClick)){
            var fn = $.proxy(cfg.beforeClick,ctx,typ,$.extend({},cfg));
            var k = fn();
            cfg = $.extend(cfg,k);
        }

        var stitle = cfg.title;
        var surl = cfg.link;
        var spic = cfg.pics;
        var sdesc = cfg.desc;
        var scom = cfg.comment;

        var st = cfg.trace ? cfg.trace+"_"+typ : typ;

        if(surl.indexOf("?")!==-1){
            if(surl.indexOf("dyshare=")===-1){
                surl+="&dyshare="+st;
            }else{
                surl = surl.replace(/dyshare=[^&]*(&?)/,"dyshare="+st+"$1");
            }
        }else{  
            surl+="?dyshare="+st;
        }

        surl = encodeURIComponent(surl);
        stitle = encodeURIComponent(stitle);
        spic = encodeURIComponent(spic);
        sdesc = encodeURIComponent(sdesc);
        scom = encodeURIComponent(scom);

        if(typ==="quan"){
            window.open("http://quan.duoyi.com/dyq/api/getShareMessage?url="+surl+"&title="+stitle+"&picture_url="+spic+"&description="+sdesc);
        }

        if(typ==="qq"){
            window.open("http://connect.qq.com/widget/shareqq/index.html?url="+surl+"&title="+stitle+"&pics="+spic+"&summary="+scom+"&desc="+sdesc);
        }

        if(typ==="qzone"){
            window.open("http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url="+surl+"&title="+stitle+"&pics="+spic+"&summary="+scom+"&desc="+sdesc);
        }

        if(typ==="weixin"){
            window.open("http://www.duoyi.com/weichat/code.shtm?url="+surl+"&title="+stitle+"&desc="+sdesc,"_blank","width= 620,height= 700,top= 100, left= 200, toolbar=no, menubar= no, scrollbars= no, resizable= yes, location= no, status=no ");
        }

        if(typ==="weibo"){
            window.open("http://service.weibo.com/share/share.php?url="+surl+"&title="+stitle+"&pic="+spic+"&desc="+sdesc+"&searchPic="+cfg.searchPic);
        }

        if($.isFunction(cfg.afterClick)){
            var fn2 = $.proxy(cfg.afterClick,ctx,typ);
            fn2();
        }
    }

    dyShare={
        open: function(cfg,typ){
            _open(cfg,typ);
        }
    };
    $.fn.dyShare = function(option){
        return this.each(function(){
            var cfg = $.extend( {},default_cfg, option);
            var t = $(this);
            t.on("click",'[data-cmd="qq"]',function(){
                _open($.extend({},cfg),"qq",this);
            });
            t.on("click",'[data-cmd="qzone"]',function(){
                _open($.extend({},cfg),"qzone",this);
            });
            t.on("click",'[data-cmd="weixin"]',function(){
                _open($.extend({},cfg),"weixin",this);
            });
            t.on("click",'[data-cmd="tsina"]',function(){
                _open($.extend({},cfg),"weibo",this);
            });
            t.on("click",'[data-cmd="weibo"]',function(){
                _open($.extend({},cfg),"weibo",this);
            });
            t.on("click",'[data-cmd="quan"]',function(){
                _open($.extend({},cfg),"quan",this);
            });
        });
    }
})(window.jQuery || {});