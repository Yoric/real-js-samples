$(function(){
    var $size = 5,
        page = 2,
        tur = true;
    $(window).on("scroll", function(){
        if(this.end){
            return;
        }
        var scrollTop = $(this).scrollTop(),
        // 文档高度
            scrollHeight = $(document).height(),
            windowHeight = $(this).height();  
        var positionValue = (scrollTop + windowHeight) - scrollHeight;
        if (positionValue >= 0) {
            setTimeout(AddSth(),500); 
            tur = false; 
        }
    })
    function AddSth() {
        var _this = this;
        $.ajax({
            type: 'get',
            url: "http://interface.sina.cn/pc_zt_api/zt_latest_news.d.json",
            dataType: "json",
            data: {
                cids: $cid ,
                page: page++,
                size: $size
            },
            success: function (data){
                tur = true;
                var realHtml = doT.template(render());
                console.log(realHtml);
                $('[data-type="pl_headlineNews_more"]').append(realHtml(data.result.data));
            }
        });
    }
    function render(data){
        return[
            '{{for(var item in it) { }}',
                '<dl class="content">',
                    '<dt class="news-tit ellipsis"><a href="{{=it[item].url}}" target="_blank">{{=it[item].title}}</a></dt>',
                        '<dd class="news-con col1">',
                            '<a href="{{=it[item].url}}" target="_blank" class="news-img">',
                                '<img src="{{=it[item].pic}}" alt="{{=it[item].title}}">',
                            '</a>',
                            '<div class="news-des">',
                                '{{ if(it[item].summary == null ){ }}',
                                    '<p></p>',
                                '{{ }else{ }}',
                                    '<p>{{=it[item].summary}}</p>',
                                '{{ } }}',
                            '</div>',
                        '</dd>',
                        '<dd>',
                        '</dd>',
                        '<dd class="new-info">',
                            '<div class="labels col2">',
                                '<span class="date">{{=it[item].source}}</span>|',
                                '<span class="time">{{=it[item].date}}&nbsp;&nbsp;{{=it[item].time}}</span>',
                                '<a style="display:none;" href="http://tags.gs.sina.com.cn/华为/" target="_blank" class="label col1">华为</a>',          '<a style="display:none;" href="http://tags.gs.sina.com.cn/苹果/" target="_blank" class="label col1">苹果</a> ',
                                '<a style="display:none;" href="http://tags.gs.sina.com.cn/应用软件/" target="_blank" class="label col1">应用软件</a>',   '<a style="display:none;" href="http://tags.gs.sina.com.cn/环球时报/" target="_blank" class="label col1">环球时报</a></div>',
                            '<div class="oper">',
                                '<a href="{{=it[item].commentUrl}}" target="_blank" class="review col2"><i class="CC-icon-review"></i><span class="num" name="cmnt_count" cmnt_id="{{=it[item].commentId}}">539</span></a><a href="#" class="share col2" style="display:none;">分享</a>',
                            '</div>',
                        '</dd>',
                '</dl>',
                '{{ } }}'
        ].join('')
    }
})