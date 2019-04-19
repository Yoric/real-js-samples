window.onload = function () {
    var titleUrl = '//'+ window.location.host + '/page/info';
    var phUrl = '//'+ window.location.host + '/hotnews/info';
    var urlStr = window.location.search.slice(1).split('&');
    var channel = '';
    var newsid = '';
    urlStr.forEach(function(val, index) {
        if (val.split('=')[0] == 'channel') {
            channel = val.split('=')[1];
        } else if (val.split('=')[0] == 'newsid') {
            newsid = val.split('=')[1];
        }
    });
    //标题js
    $.ajax({
        url: titleUrl,
        dataType: 'json',
        type: 'get',
        data: {
            format: 'json',
            channel: channel || 'ty',
            newsid: newsid || '6-12-7081102'
        },
        success: function(data) {
            if (data.result.news) {
                var news = data.result.news;
                var htmlStr = '<a href="' + news.url + '"target="_blank">' + news.title + '</a>';
                $('.h-title').html(htmlStr);
                //习李新闻出现cid =187315，187316 隐藏广告
                var configArr = news.config.split('&');
                var isXiLi = false;
                for(var i =0; i < configArr.length;i++){
                    if(configArr[i].split('=')[0] == 'cid') {
                        var cid = configArr[i].split('=')[1];
                        if(parseInt(cid) == 187315 || parseInt(cid) == 187316) {
                            isXiLi = true;
                        }
                    }
                }
                if(!isXiLi){
                    $('.comment-da').show();
                    $('.side-da').show();
                }
            }
        }
    });
    // 排行js
    $.ajax({
        url: phUrl,
        type: 'get',
        dataType: 'json',
        data: {
            format: 'json',
            channel: channel || 'ty',
            hotid: channel + '_day' || 'ty_day'
        },
        success: function(datas) {
            // console.log('datas',datas);
            succFn(datas);
        },
        fail : function(data) {
            console.log('datas',data);
        },
        error: function(data) {
            console.log('error',data);
            // succFn();
        }

    });

    $('.btn-toTop').on('click' , function(e){
        $('body,html').animate({scrollTop:0},500);
    })
    
    $('.list-ft').html('').attr('action-type' , 'getMore').addClass('more').css({'height' : '0'});

    $('.latest-wrap').append('<div class="loadings" style="display:none;"><span>加载中</span><img src="//n.sinaimg.cn/finance/c30320b4/20170512/loading.gif?v=1" alt=""></div>');
    $('.latest-wrap').append('<div class="msg" style="display:none;">已经到底啦~</div>');
    
    if($('.sina-comment-form').eq(1)) $('.sina-comment-form').eq(1).remove();
    var offsetHeight = document.body.offsetHeight;
    $(window).on('scroll' , function (evt) {
        if(!!$('.list-ft.more').offset()) {
            throttle(function(){
                var scrollTop = $(document).scrollTop();
                var listTop = $('.list-ft.more').offset().top;
            
                if(scrollTop  > listTop - offsetHeight) {
                    $('.list-ft.more').click();
                }
            } , 2000 , 300)()
        }
    })
    var throttle = function(callback, delay, time) {
        var startTime = new Date();
        var timer = null;
        return function() {
            var context = this;
            var currTime = new Date();

            clearTimeout(timer);
            if (currTime.getTime() - startTime.getTime() > time) {
                callback.call(context);
                startTime = currTime;
            } else {
                timer = setTimeout(callback, delay);
            }
        }
    }

    var succFn = function(datas) {
        if (!!datas) {
            var hotnews = datas.result.hotnews;
            var phStr = '';
            var conStr = '';
            var value = null;
            var len = hotnews.length;
            for (var i = 0; i < hotnews.length; i++) {
                for (var j = 0; j < hotnews.length - i - 1; j++) {
                    if (parseInt(hotnews[j].total_count) < parseInt(hotnews[j + 1].total_count)) {
                        var temp;
                        temp = hotnews[j];
                        hotnews[j] = hotnews[j + 1];
                        hotnews[j + 1] = temp;
                    }
                }
            }

            var phlistStr = '';
            hotnews.forEach(function(val, index) { 
                if(index < 10) {
                    var indexs = index +1;
                    if(indexs < 10) indexs = '0' + indexs;
                    var liStr = '<li class="list clearfix">' + 
                        '<div class="index">' + indexs + '</div>' +
                        '<div class="txts"><a href="' + val.url + '" target="_blank">' + val.title+ '</a></div> ' +
                        '<div class="nums"><a href="http://comment5.news.sina.com.cn/comment/skin/default.html?channel=' + val.channel + '&newsid=' + val.newsid + '">' + val.total_count +'</a></div>' +
                    '</li>';
                    phlistStr += liStr;
                }
            });
            phStr = '<div class="hd"><h2>热评排行</h2></div><ul class="bd">' + phlistStr + '</ul>';
            $('.top-list').html(phStr);
        }
    };
}
