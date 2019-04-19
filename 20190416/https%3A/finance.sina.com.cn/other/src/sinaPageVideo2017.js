(function($){
    function SinaPageVideo(options){
        var _options = {
            wrap:'',//播放器外层id
            videoList:[],
            width:640,
            height:396,
            pageSize:192,
            itemSpace:10,
            speed: 0.5,
            ver:'1.0',
            cssLink:'//n.sinaimg.cn/finance/sinaPageWidgets2017/sinaPageVideo2017.css?v=1.1',
            params: {
                allowNetworking: "all",
                allowScriptAccess: "always",
                wmode: "opaque",
                allowFullScreen: "true",
                quality: "high"
            },
            flashvars: {
                autoPlay: 1,  //是否自动播放
                loop: 0,
                autoLoad: 1,
                //thumbUrl: '',
                tj: 1,
                as: 0
            },
            h5attr: {
                autoPlay: true,  //是否自动播放
                controls: true, //是否显示控制条
                loop: false,
                poster: '', //视频加载前欲加载的图片地址，即播放器一开始显示的截图
                preload: 'auto'
            }
        };
        this.options = $.extend(true,_options,options);
        this.addCss();
        this.initDom();
        this.initConfig();
        this.bindEvent();
        }
        SinaPageVideo.prototype={
        addCss:function(){
            var self = this;
            var opt = self.options;
            if(!$('#video2017Css').length>0){
                var link = document.createElement('link');
                link.type = 'text/css';
                link.id = 'video2017Css';
                link.rel = 'stylesheet';
                link.href = opt.cssLink+'?t='+opt.ver;
                document.getElementsByTagName("head")[0].appendChild(link);
            }
        },
        getByNodeType:function(name){
            var self = this;
            var opt = self.options;
            return $('#'+opt.wrap).find('[node-type="'+name+'"]');
        },
        initConfig:function(){
            //初始化播放器config
            var self = this;
            var opt = self.options;
            self.playerConfig = {
                url: "",    // flash播放器地址,
                container: opt.wrap+'_playArea',
                id: opt.wrap+"_inner",
                width: opt.width,
                height: opt.height,
                params: opt.params,
                attributes: {},
                flashvars: opt.flashvars,
                h5attr: opt.h5attr,
                isSingle:true//同时只播放一个视频
            };
            var videoConfig = opt.videoList[0];
            //self.player = playVideo(playerConfig, videoConfig);

            //
            //self.player.init(videoConfig);
        },
        initDom:function(){
            //初始化dom:视频标题\视频列表
            var self = this;
            var opt = self.options;
            var _videoList = opt.videoList;
            var strArray = [];
            var str = '';
            self.wrap = $('#'+opt.wrap);
            var _itemWidth = opt.pageSize+opt.itemSpace;
            var _listWidth = self.wrap.width();
            var _showNum = parseInt(_listWidth/_itemWidth);
            self.states = {
                firstPlay:true,
                current:0,
                left:0,
                itemWidth:_itemWidth,
                listWidth:_listWidth,
                showNum:_showNum,
                total:_videoList.length,
                totalWidth:_itemWidth*_videoList.length-opt.itemSpace
            };
            //创建视频播放区
            strArray.push('<div class="play-video-area" id="'+opt.wrap+'_playArea" data-sudaclick="component_video_player_i"><a href="javascript:;"  node-type="playArea"><img src="'+_videoList[0].thumbUrl+'" /><em class="i-common i-play-b"></em></a></div>');    
           
            
            //创建视频列表区
            if(_videoList.length==0){
                
                console.log('视频错误');
            }else if(_videoList.length==1){
                //单视频
                self.states.isSingle = true;//当前是否是视频联播
                
                strArray.push('<div class="video-info" node-type="videoInfo" data-sudaclick="component_video_title_p"><a href="'+_videoList[0].url+'" target="_blank">'+_videoList[0].title+'</a></div>');
            }else{
                self.states.isSingle = false;
                
                strArray.push('<div class="video-info" node-type="videoInfo" data-sudaclick="component_video_title_p"><a href="'+_videoList[0].url+'" target="_blank">'+_videoList[0].title+'</a></div>');
                strArray.push('<div class="video-list-area" node-type="listWrap"><div node-type="aniWrap" class="video-aniWrap" style="transition-duration:'+opt.speed+'s"><ul>'); 
                //多视频 创建视频列表
                for(var i = 0;i<_videoList.length;i++){
                    var temp = _videoList[i];
                    strArray.push(['<li>',
                        '<a node-type="videoItem" href="javascript:;" data-sudaclick="component_video_swich_p">',
                            '<span class="pic">',
                                '<img src="'+temp.pic+'">',
                                '<em class="i-common i-play"></em>',
                            '</span>',
                            '<span class="title">'+temp.title+'</span>',
                        '</a>',
                    '</li>'].join(''));
                }
                strArray.push('</ul></div>');
                //<=4 没有箭头
                if(_videoList.length>_showNum){
                    strArray.push('<a data-sudaclick="component_video_left_i" node-type="videoAL" class="i-common i-arrow arrow-left disable" href="javascript:">向左</a>'+
                    '<a data-sudaclick="component_video_right_i" node-type="videoAR" class="i-common i-arrow arrow-right" href="javascript:">向右</a>');   
                }
                //>4 双箭头左侧不可点
                strArray.push('</div>');
                

            };
            str = strArray.join('');
            self.wrap.html(str);
            self.doms = {
                playArea:self.getByNodeType('playArea'),
                videoItem:self.getByNodeType('videoItem'),
                listWrap:self.getByNodeType('listWrap'),
                aniWrap:self.getByNodeType('aniWrap'),
                arrowLeft:self.getByNodeType('videoAL'),
                arrowRight:self.getByNodeType('videoAR'),
                videoInfo:self.getByNodeType('videoInfo')
            };
        },
        getWrapLeft:function(){
            var self = this;
            var opt = self.options;
            var doms = self.doms;
            var states = self.states;
            return Math.abs(states.left)+states.listWidth;
        },
        getWindowIndex:function(index){
            var self = this;
            var opt = self.options;
            return index + self.states.showNum -1;
        },
        onPageScroll:function(){
            //页面滚动事件：暂停 播放新视频
        },
        bindEvent:function(){
            //绑定事件
            var self =this;
            var opt =self.options;
            var doms = self.doms;
            var videoItem = doms.videoItem;
            doms.playArea.on('click',function(){
                doms.videoItem.eq(0).addClass('cur');
                self.playVideo(0);
            });
            if(self.states.isSingle == false){
                videoItem.on('click',function(){
                    var index = $(this).parent().index();
                    doms.videoItem.removeClass('cur');
                    $(this).addClass('cur');
                    self.playVideo(index);
                });
                doms.arrowRight.on('click',function(){
                    self.next();
                });
                doms.arrowLeft.on('click',function(){
                    self.prev();
                });
                $(window).on('resize',function(){
                    self.reSetStates();
                });
            }
        },
        prev:function(){
            //向前移动
            var self =this;
            var opt =self.options;
            var doms = self.doms;
            var states = self.states;
            self.moveTo(states.current-1);  
        },
        next:function(){
            //向后移动，修改aniwrap 的left值
            var self =this;
            var opt =self.options;
            var doms = self.doms;
            var states = self.states;
            self.moveTo(states.current+1);
        },
        moveTo:function(index){
            var self =this;
            var opt =self.options;
            var doms = self.doms;
            var states = self.states;
            //var windowIndex = self.getWindowIndex(index);//获取当前窗口最后一个的index
            if(index==states.current){
                //相等，不作操作
            }else if(index<states.current){
                //向前移动
                if(states.current!=0){
                    states.current = index;
                    states.left = (-1)*states.itemWidth*(index);
                    doms.arrowRight.removeClass('disable');
                    doms.aniWrap.css('left',states.left+'px');
                }else if(states.current ==0){
                    doms.arrowLeft.addClass('disable');
                }else{
                    doms.arrowLeft.removeClass('disable');
                }

            }else if(index>states.current){
                //向后移动
                var totalLeft = self.getWrapLeft();
                var lastDiffer = states.totalWidth-totalLeft;
                if(lastDiffer>states.itemWidth){
                    states.current = index;
                    states.left = (-1)*states.itemWidth*(index);
                    doms.arrowLeft.removeClass('disable');
                    doms.aniWrap.css('left',states.left+'px');
                }else if(lastDiffer>0&&lastDiffer<states.itemWidth){
                    states.current = index;
                    states.left = (-1)*(states.totalWidth - states.listWidth);
                    doms.aniWrap.css('left',states.left+'px');
                    doms.arrowRight.addClass('disable');
                }else if(lastDiffer<=0){
                    doms.arrowRight.addClass('disable');
                }
            }
            self.onChanged();

        },
        onChanged:function(){
            var self =this;
            var opt =self.options;
            var doms = self.doms;
            var states = self.states;
            
        },
        reSetStates:function(){
            var self =this;
            var opt =self.options;
            var doms = self.doms;
            var _listWidth = self.wrap.width();
            var _itemWidth = opt.pageSize+opt.itemSpace;
            var _showNum = parseInt(_listWidth/_itemWidth);
            self.states.listWidth = _listWidth;
            self.states.showNum = _showNum;
        },
        playVideo:function(index){
            //播放某一个视频
            var self =this;
            var opt =self.options;
            var doms = self.doms;
            //切换当前播放的标题链接
            doms.videoInfo.html('<a href="'+opt.videoList[index].url+'" target="_blank">'+opt.videoList[index].title+'</a>');
            if(self.states.firstPlay==true){
                self.states.firstPlay==false; 
            }else{
                self.states.firstPlay==false;
            }
            if(opt.videoList[index].video_id==''){
                //是秒拍视频
                self.playerConfig.flashvars = $.extend(true,opt.flashvars,opt.videoList[index].flashvars);
                self.playerConfig.flashvars.streamurl = encodeURIComponent(decodeURIComponent(opt.videoList[index].flashvars.streamurl));
                //console.log(self.playerConfig.flashvars)
                self.player = playVideo(self.playerConfig);
            }else{
                self.playerConfig.flashvars = opt.flashvars;
                self.player = playVideo(self.playerConfig, opt.videoList[index]);    
            }
        }
    }
    window.SinaPageVideo = SinaPageVideo;
})(window.jQuery);