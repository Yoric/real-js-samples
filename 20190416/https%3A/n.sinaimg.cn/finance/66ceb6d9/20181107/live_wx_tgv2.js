(function($) {
    var _liveUrl = '//n.sinaimg.cn/tech/66ceb6d9/20180528/article_live_banner.js?201805281631';
    var _wxtgUrl = '//n.sinaimg.cn/finance/66ceb6d9/20181107/tgv2.js';
    $("head").append("<link>");
    $("head").children(":last").attr({
        rel: "stylesheet",
        type: "text/css",
        href: "//n.sinaimg.cn/finance/66ceb6d9/20181107/stylev2.css"
    });
    var _blog = (/blog\.sina/g).test(location.href);
    Math.random() > 0.5 ?
        SFF.jsLoader(_wxtgUrl, function() { SFF.wx.list('wx-tg-cont', 1, _blog ? 'blog' : 'zwy') }) :
        SFF.jsLoader(_liveUrl, function() { SFF.live.banner() });
})(jQuery)