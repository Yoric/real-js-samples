/**
 * 热门推荐_正文页_新浪财经
 * edited by xuehua on 2018/08/24.
 */
SinaPage.loadWidget({     
    require: [
        {
            url: "//n.sinaimg.cn/finance/article/most_read/qrcode.js"
        },
        {
            url: "//n.sinaimg.cn/finance/article/most_read/qrcode_UTF8.js"
        },
        {
            url: "//n.sinaimg.cn/finance/article/most_read/jquery-qrcode.js"
        }
    ],
    onAfterLoad: function() {
        var isIe8 = window.navigator.appVersion.indexOf('MSIE 8.0') !== -1;
        var mostRead = {
            init: function ($cont) {
                this.$cont = $('#'+$cont);
                this.firstTitle = $('#'+$cont+'-title');
                this.loadStyle();
                this.request();
            },
            newsTmpl: '<div class="@card_class@" suda-uatrack="key=pc_zwy_finapp&value=recommend">\
                                <img class="item-pic" src="@img_url@" alt="@title@">\
                                <div class="item-text">\
                                    <h4>@title@</h4>\
                                    <ul><li>@create_date@</li><li>@create_time@</li><li>APP专享</li><li>@author@</li></ul>\
                                </div>\
                                <span>\u0041\u0050\u0050\u4e13\u4eab</span>\
                           </div>',
            popupTmpl: '<div class="item-text">\
                                <h4>@title@</h4>\
                                <ul><li>@create_date@</li><li>@create_time@</li><li>APP专享</li><li>@author@</li></ul>\
                            </div>\
                            <div class="pop-body">\
                                <div class="part-detail"><p>@content@</p></div>\
                                <div class="part-detail-code">\
                                    <div class="qr' + (isIe8 ? ' ie8' : '') + '" id="finapp_qr"></div>\
                                    <div class="text">\
                                        <h3>扫二维码查看原文</h3>\
                                        <p class="qr-tip">财经APP涵盖最新资讯，此篇文章为APP专享，您可扫码去APP查看</p>\
                                    </div>\
                                </div>\
                            </div>',
            loadStyle: function () {
                setTimeout(function(){
                    $('<link rel="stylesheet" href="//n2.sinaimg.cn/finance/article/most_read/most_read_20180824.css?v=1.1">').appendTo($('head'));    
                },0);
            },
            request: function () {
                //only the first 3 items
                var maxItems = 3;
                var _this = this;
var _cureTime = new Date();
                $.ajax({
                    url: '//cre.mix.sina.com.cn/api/v3/get?cateid=y&cre=tianyi&mod=pcfin&merge=3&statics=1&tm='+Math.round(_cureTime.getTime()/1000)+'&length=15&action=0&up=0&down=0&top_id=',
                    dataType: 'jsonp',
                    success: function (data) {
                       // console.log(data)
                        var res = data,
                            stat = res.status,
                            aData = res.data,
                            _data;

                        if (stat.code) {
                            console.log('Request for article_top3 failed with msg: ' + stat.msg);
                        } else {
                            _data = aData;
                            //_data = aData;
                            _this.renderNews(_this.formatData(_data).slice(0, maxItems));
                            _this.bindPopup(_this.formatData(_data));
                        }
                    }
                });
            },
            formatUrl:function(url){
                var retUrl = url;

                if(url.indexOf('cj.sina.cn')<0&&url.indexOf('cj.sina.com.cn')<0){
                    retUrl = 'https://cj.sina.cn/article/norm_detail?url='+encodeURIComponent(url.split('?')[0])+'&part=1';
                }else{
                    retUrl = url.indexOf('?')>0?url+'&part=1':url+'?part=1'
                }
                return retUrl;
            },
            checkUrl:function(url){
                var ret = true;
                var urlReg = /(slide\.[a-zA-Z0-9\.]+\.sina\.com\.cn)|(photo\.sina(\.com)?\.cn)|(db\.auto\.sina(\.com)?\.cn\/photo\/)|(blog\.sina(\.com)?\.cn)|(zx\.sina\.cn)|(bn\.sina\.cn)|(live\.sina\.com\.cn)|(cj\.sina\.(com\.)*cn\/articles\/view\/)/;
                if(urlReg.test(url)){
                    ret = false;
                }else{
                    ret = true;
                }
                return ret;  
            },
            formatData:function(data){
                var ret =[];
                
                for(var i = 0;i<data.length;i++){
                    var temp = data[i];
                    var title = temp.title||temp.mtitle;
                    //var img_url = temp.thumb==''?(temp.mthumb?temp.mthumb:temp.mthumbs[0]):temp.thumb;
                    var img_url ='';
                    
                    img_url = temp.thumb?temp.thumb:'';
                    var author = temp.author||temp.media;
                    //增加url过滤 20180130
                    if(!this.checkUrl(temp.url)){
                        continue;
                    }
                    var url = this.formatUrl(temp.url);
                    var createTime = new Date(temp.ctime*1000);
                    var create_date = this.dateFormat(createTime,'yyyy年MM月dd日');
                    var create_time = this.dateFormat(createTime,'hh:mm');
                    var content = temp.intro||temp.mintro;
                    //title ,img ,author, date,time,url
                    ret.push({
                        title:title,
                        img_url:img_url,
                        author:author,
                        url:url,
                        create_time:create_time,
                        create_date:create_date,
                        content:content
                    })
                
                    
                }  
                return ret; 
            },
            dateFormat : function(date,fmt){
                var o = {   
                "M+" : date.getMonth()+1,                 //月份   
                "d+" : date.getDate(),                    //日   
                "h+" : date.getHours(),                   //小时   
                "m+" : date.getMinutes(),                 //分   
                "s+" : date.getSeconds(),                 //秒   
                "q+" : Math.floor((date.getMonth()+3)/3), //季度   
                "S"  : date.getMilliseconds()             //毫秒   
              };   
              if(/(y+)/.test(fmt))   
                fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));   
              for(var k in o)   
                if(new RegExp("("+ k +")").test(fmt))   
              fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
              return fmt;   
            },
            renderNews: function (newsData) {
                var _this = this, contHtml = [];

                $(newsData).each(function (index, itemData) {
                    //extend data before render
                    //if no image, add class 'no-pic' to the container;
                    itemData.card_class = itemData.img_url!='' ? 'item-card' : 'item-card no-pic';
                    contHtml.push(
                        _this.newsTmpl.replace(/@(\w+)@/g, function (m, p1) {
                            return itemData[p1];
                        })
                    );
                });
                this.$cont.append(contHtml.join(''));
                this.firstTitle.html(newsData[0].title);
            },
            bindPopup: function (newsData) {
                var _this = this,
                    newsItems = this.$cont.find('.item-card');
                //init popup content and its event handler for each item to store the content in this closure
                $(newsData).each(function (index, itemData) {
                    var popContent,
                        curItem = newsItems.eq(index);

                    popContent = _this.popupTmpl.replace(/@(\w+)@/g, function (m, p1) {
                        return itemData[p1];
                    });
                    curItem.on('click', function () {
                        _this.showPopup(popContent);
                        _this.getQrCode($('#finapp_qr'), itemData.url);
                    });
                });
            },
            showPopup: (function () {
                var body = $('body'),
                    popMask = $('<div class="most-read-popup-mask" style="display: none;"></div>').appendTo(body),
                    popupWrap = $('<div class="most-read-popup" style="display: none;"></div>').appendTo(body);

                popupWrap.on('click', '.btn-close', function () {
                    popupWrap.fadeOut();
                    popMask.hide();
                });

                return function (content) {
                    popMask.show();
                    return popupWrap
                        .html('<span class="btn-close"></span>' + content)
                        .fadeIn();
                }
            })(),
            getQrCode: (function () {
                var qrLogo = $('<img src="//n.sinaimg.cn/finance/article/most_read/finapp_logo.png">')[0];

                return function (container, url) {
                    container.qrcode({
                        // render method: 'canvas', 'image' or 'div'
                        //render: 'div',

                        // version range somewhere in 1 .. 40
                        minVersion: 1,
                        maxVersion: 40,

                        // error correction level: 'L', 'M', 'Q' or 'H'
                        ecLevel: 'H',

                        // offset in pixel if drawn onto existing canvas
                        left: 0,
                        top: 0,

                        // size in pixel
                        size: 96,

                        // code color or image element
                        fill: '#333',

                        // background color or image element, null for transparent background
                        background: '#fff',

                        // content
                        text: url,

                        // corner radius relative to module width: 0.0 .. 0.5
                        radius: 0,

                        // quiet zone in modules
                        quiet: 0,

                        // modes
                        // 0: normal
                        // 1: label strip
                        // 2: label box
                        // 3: image strip
                        // 4: image box
                        mode: 4,

                        mSize: 0.2,
                        mPosX: 0.5,
                        mPosY: 0.5,

                        label: 'no label',
                        fontname: 'sans',
                        fontcolor: '#000',
                        image: qrLogo
                    });
                };

            })()
        };
        mostRead.init('hot-recommend-cont');
        window.mostRead = mostRead;
    }
});