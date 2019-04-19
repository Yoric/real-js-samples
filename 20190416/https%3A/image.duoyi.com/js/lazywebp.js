;(function($){
    if(!$){
        return false;
    }
    /** 延时加载webp  **/
var lazyWebp = {
    ele: [],
    _ele: [],
    pan: null,
    off: 0,
    timer: null,
    add: function (n, fn) {
        var self = this;
        if(typeof n === "string"){
            n = $(n);
        }
        n.each(function () {
            self.ele.push($(this));
            $(this).data("dso", fn);
        });
    },
    die: function () {
        this.pan.off("scroll.wp");
        $(window).off("resize.wp");
    },
    dos: function (a) {
        var self = this;
        if (a.is(":hidden")) {
            return self.dos(a.parent());
        } else {
            if (this.pan.scrollTop() + this.pan.height() + this.off > a.offset().top) {
                return true;
            }
        }
    },
    isWebp:function(){ //是否支持webp
        var self=this;
        if(document.createElement('canvas').getContext){
            var isSupportWebp =document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0;
            return isSupportWebp;
        }else{
            return false;
        }
    },
    browserLimit:function(){
        if(navigator.userAgent.indexOf('QQBrowser') !== -1){
            return true;
        }
    },
    isSupport:function(){
        return this.isWebp() && !this.browserLimit();
    },
    run: function () {
        var self = this;
        this.pan = !this.pan ? $(window) : this.pan;
 
        this.pan.on("scroll.wp", function () {
            clearTimeout(self.timer);
            self.timer = setTimeout(function () {
                if (self.ele.length < 1) {
                    self.die();
                }
 
                $.each(self.ele, function (inx, ele) {
                    var th = $(this);
                    if (self.dos(th)) {
                        if (th.data("dso")) {
                            th.data("dso")(th);
                            th.data("dso", false);
                        }
                        if (th.attr("relsrc")) {
                            if(self.isSupportWebp){
                                th.attr("src",th.attr("relsrc").replace(/(\.jpg|\.png)/g,".webp"));
                            }else{
                                th.attr("src",th.attr("relsrc"));
                            }
                            th.removeAttr("relsrc");
                        }else{
                            if(self.isSupportWebp){
                                th.addClass('img-webp').removeClass("lazy-webp"); //加载webp图片
                            }else{
                                th.addClass('img-ori').removeClass("lazy-webp"); //加载原始图片
                            }
                        }
                    } else {
                        self._ele.push(ele);
                    }
                });
                self.ele = self._ele;
                self._ele = [];
            }, 100);
        }).trigger("scroll.wp");
 
        $(window).on({
            "resize.wp": function () {
                self.pan.trigger("scroll.wp");
            }
        });
    },
    init:function(){
        this.add(".lazy-webp");
        this.isSupportWebp=this.isSupport();
        this.run();
    }
};
lazyWebp.init();
window.lazyWebp=lazyWebp;
})(window.jQuery || {});