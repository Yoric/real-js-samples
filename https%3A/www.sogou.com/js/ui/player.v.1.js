/**
 * ������
 * new ui.player({
 * divId: "#xxx"  ��div��id�����flash��audio������  
 * autoPlay: boolean  �Ƿ��Զ����ţ�Ĭ�Ϸ�
 * music: {mp3: "", ogg: ""} Ĭ�ϸ����������в�ͬ��ʽ���ɲ���
 * cssSelectorAncestor: "#xxx" ������id
 * bufferBar�����������
 * cssSelector { ���������������ʽ��������id(#xxx)���棬û�ж�Ӧ������Բ���
 *     play: ".xxx", ���Ű�ť��ʽ
 *     pause��".xxx", ��ͣ��ť��ʽ
 *     seekBar��".xxx", ���Ž�������ʽ
 *     playBar��".xxx", �Ѳ��Ž�������ʽ
 *     mute: ".xxx",  ������ʽ
 *     unmute: ".xxx", �Ǿ�����ʽ
 *     volumeBar: ".xxx", ��������ʽ
 *     volumeBarValue: ".xxx", ��ǰ��������ʽ
 *     currentTime: ".xxx", ��ǰ�Ѳ���ʱ����ʽ
 *     duration: ".xxx", ��ʱ����ʽ
 *     playDot: ".xxx", ���Ž������ϵ�ǰʱ��ͼ��
 *     volumeDot: ".xxx", �������ϵ�ǰ����ͼ��
 * },
 * verticalVolume: boolean  ��ֱ��������Ĭ��ˮƽ
 * lyric: "" ��ʣ�lrc��ʽ�ı�����\n�ָ�ÿһ�У��ɲ���
 * lyricContainer: "#xxx"  ���������id
 * curLyricClass: ��ǰ�����ʽ���ɲ���
 * solution: "html,flash" Ĭ��������֧�֣���ǿ��ָ��һ��
 * remainingDuration: boolean ��duration��ʾʣ��ʱ��
 * })
 */
declare("jPlayer", "/js/jplayer/jquery.jplayer.min.js");
define("ui.player", ["$", "jPlayer"], function($) { 
    var player = function(options) {
        this.options = options || {};
        for (var name in this.options) {
            this[name] = this.options[name];
        }
        
        this.ready = false;     //�����Ƿ�������
        this.volume = 1;       //��ǰ������0-1
        this.curLyric = null;   //��ǰ���
        this.hideVolumeBar = false;  //����������
        this.start = false;    //�Ƿ�ʼ����
        
        init(this);
    }
    
    //����
    player.prototype.play = function() {
        if (this.ready) {
            $(this.divId).jPlayer("play");
        } else {
            this.autoPlay = true;
        }
    }
    
    //��ͣ
    player.prototype.pause = function() {
        $(this.divId).jPlayer("pause");
    }
    
    //����������{mp3: "", ogg: ""}
    player.prototype.setMedia = function(obj) {
        $(this.divId).jPlayer("setMedia", obj);
    }
    
    //��ʼ���ŵĻص��������ɸ���
    player.prototype.onStart = function(){};
    
    //����Ļص��������ɸ���
    player.prototype.onEnd = function(){}
    
    //ÿ����ʵĹ�������Ĭ������<p>��ǩ���ɸ���
    player.prototype.lyricMaker = function(text, time) {
        $(this.lyricContainer).append("<p t='" + (time||'') + "'>" + text + "</p>");
    }
    
    //��ʾ��ǰ��ʣ��ɸ���
    player.prototype.showCurLyric = function(curLyric) {
        if (!curLyric) {
            //�ص���ʼ״̬
            $(this.lyricContainer).animate({scrollTop: 0}, "normal");
            return;
        }
        $(this.lyricContainer).stop();
        var tmp, containerHeight, containerScrollHeight, containerTop, lrcHeight, lrcTop, position;  
        containerHeight = $(this.lyricContainer).height();
        containerTop = $(this.lyricContainer).scrollTop();
        containerScrollHeight = $(this.lyricContainer)[0].scrollHeight;
        lrcHeight = $(curLyric).height();
        lrcTop = $(curLyric).position().top;
        position = (containerHeight - lrcHeight) / 2;
        tmp = lrcTop + containerTop - position;
        if (tmp < 0) {
            tmp = 0;
        }
        if (Math.abs(tmp - containerTop) > 100) {
            $(this.lyricContainer).animate({scrollTop: tmp}, "fast");
        } else {
            $(this.lyricContainer).animate({scrollTop: tmp}, "normal");
        }
    }

    function init(player) {
        if (!player.divId) {
            return;
        }
        
        //��ʼ�����
        if (player.lyric) {
            initLyric(player);
        }
        
        //��ʼ��jplayer
        initPlayer(player);
        
        //��ʼ��������ק
        onVolumeDotMove(player);
        
        //��ʼ�����Ž��Ȱ�ť��ק
        onPlayDotMove(player);

        // ��ʼ�����ؽ���
        buffer(player);
    }
    
    function initLyric(player) {
        var i, j, line, tags, text, tmp, lines = player.lyric.split("\\n"), lrcArr = [];
        for (i = 0; i < lines.length; i++) {
            line = $.trim(lines[i]);
            tags = line.match(/\[(.*?)\]/g);
            if (!tags) {
                continue;
            }
            text = line.replace(/\[.*?\]/g, "");
            for (j = 0; j < tags.length; j++) {
                tmp = tags[j].replace(/[\[\]]/g, "");
                tmp = tmp.split(":");
                if (tmp.length < 2) {
                    continue;
                }
                if (tmp[0] == "ti" || tmp[0] == "ar") {
                    lrcArr[tmp[0]] = tmp[1];
                } else if (isNaN(tmp[0]) || isNaN(tmp[1])) {
                    continue;
                } else {
                    lrcArr.push([parseInt(tmp[0]) * 60 * 1000 + parseFloat(tmp[1]) * 1000, text]);
                }
            }
        }
        lrcArr.sort(function(a,b){return a[0] > b[0]? 1:-1});
        if (lrcArr["ti"]) {
            player.lyricMaker(lrcArr["ti"]);
        }
        if (lrcArr["ar"]) {
            player.lyricMaker(lrcArr["ar"]);
        }
        for (i = 0; i < lrcArr.length; i++) {
            player.lyricMaker(lrcArr[i][1], lrcArr[i][0]);
        }
    }
    
    function initPlayer(player) {
        var options = {
            swfPath: "/js/jplayer",
            supplied: "mp3,m4a,oga",
            solution: player.solution || "html,flash",
            oggSupport: true,
            volume: player.volume,
            verticalVolume: player.verticalVolume,
            cssSelectorAncestor: player.cssSelectorAncestor,
            cssSelector: player.cssSelector,
            remainingDuration: player.remainingDuration,
            preload: player.preload || "metadata",
            ready: function() {
                if (player.music) {
                    $(this).jPlayer("setMedia", player.music);
                    if (player.autoPlay) {
                        $(this).jPlayer("play");
                    }
                }
                if (player.hideVolumeBar && player.cssSelector && player.cssSelector.volumeBar) {
                    $(player.cssSelector.volumeBar).hide();
                    $(player.cssSelector.volumeBar).parent().show();
                } 
                player.ready = true;
            },
            timeupdate: function(e){
                movePlayDot(player);
                if (!player.lyric) {
                    return;
                }
                var curLyric, time = e.jPlayer.status.currentTime * 1000;
                $(player.lyricContainer).children().each(function(){
                    var t = $(this).attr("t");
                    if (!t) {
                        return true;
                    }
                    if (parseInt(t) <= time) {
                        curLyric = this;
                    } else {
                        return false;
                    }
                });
                if (!curLyric || curLyric == player.curLyric) {
                    return;
                }
                if (player.curLyricClass) {
                    $(curLyric).attr("class", player.curLyricClass);
                    $(player.curLyric).attr("class", "");
                }
                player.curLyric = curLyric;
                player.showCurLyric(curLyric);
            },
            volumechange: function(e) {
                moveVolumeDot(player);
            },
            play: function() {
                if (player.start) {
                    return;
                }
                player.onStart();
                player.start = true;
            },
            ended: function() {
                player.onEnd();
                player.start = false;
            }
        };
        $(player.divId).jPlayer(options);
    }
    
    function movePlayDot(player) {
        if (!player.cssSelector || !player.cssSelector.playDot || !player.cssSelector.playBar) {
            return;
        }
        $(player.cssSelector.playDot).css("left", $(player.cssSelector.playBar).width() + "px");
    }
    
    function moveVolumeDot(player) {
        if (!player.cssSelector || !player.cssSelector.volumeDot || !player.cssSelector.volumeBarValue) {
            return;
        }
        $(player.cssSelector.volumeDot).css("bottom", $(player.cssSelector.volumeBarValue).height() + "px");
    }
    
    function onVolumeDotMove(player) {
        if (!player.cssSelector || !player.cssSelector.volumeDot || !player.cssSelector.volumeBarValue) {
            return;
        }

        $(player.cssSelector.volumeDot).mousedown(function(e) {
            var x = e.pageX;
            var y = e.pageY;
            var h = $(player.cssSelector.volumeBarValue).height();
            $(document).bind("mousemove", function(ev) {
                var _x = ev.pageX - x;
                var _y = ev.pageY - y;
                var _h = h - _y;

                if(_h > 37 || _h < 0){
                    return;
                }

                $(player.cssSelector.volumeDot).css({"bottom": _h + "px"});
                $(player.cssSelector.volumeBarValue).css({"height": _h + "px"});

                return false;
            });
        });  
          
        $(document).mouseup(function() {   
            $(this).unbind("mousemove");  
        });
    }
    
    function onPlayDotMove(player) {
        var flag;
        if (!player.cssSelector || !player.cssSelector.playDot || !player.cssSelector.playBar) {
            return;
        }
        $(player.cssSelector.playDot).mousedown(function(e) {
            $(player.divId).jPlayer("option", "cssSelector.playBar", "");
            var x = e.pageX;
            var y = e.pageY;
            var w = $(player.cssSelector.playBar).width();
            $(document).bind("mousemove", function(ev) {
                var _x = ev.pageX - x;
                var _y = ev.pageY - y;
                var _w = w + _x;
                if(_w > 177 || _w < 0){
                    return;
                }
                $(player.cssSelector.playDot).css({"left": _w + "px"});
                $(player.cssSelector.playBar).css({"width": _w + "px"});
            });
            flag = true;
        });  
          
        $(document).mouseup(function() { 
            if (flag) {
                setTimeout(function(){$(player.divId).jPlayer("option", "cssSelector.playBar", player.cssSelector.playBar);}, 800);
                $(player.divId).jPlayer("playHead", $(player.cssSelector.playBar).width()/177*100);
                flag = false;
            }
            $(this).unbind("mousemove");
        });
    }

    // �������
    function buffer(player) {
        var self = player,
            isIE9 = navigator.userAgent.toLowerCase().indexOf('msie 9') > -1,
            isIE10 = navigator.userAgent.toLowerCase().indexOf('msie 10') > -1,
            isIE11 = navigator.userAgent.toLowerCase().indexOf('rv 11') > -1;

        if (isIE9 || isIE10 || isIE11) {
            return;
        }

        $(player.divId).bind($.jPlayer.event.ready, function(event) {
            if(event.jPlayer.html.used && event.jPlayer.html.audio.available) {
                self.audio = $(player.divId + ' audio')[0];
            }
        });

        // This event fired as buffered time increments
        $(player.divId).bind($.jPlayer.event.progress, function(event) {
            var percent = 0;

            setTimeout(function() {
                if(self.audio && (typeof self.audio.buffered === "object") && (self.audio.buffered.length > 0)) {
                    if(self.audio.duration > 0) {
                        var bufferTime = 0;
                        for(var i = 0; i < self.audio.buffered.length; i++) {
                            bufferTime += self.audio.buffered.end(i) - self.audio.buffered.start(i);
                            // console.log(i + " | start = " + self.audio.buffered.start(i) + " | end = " + self.audio.buffered.end(i) + " | bufferTime = " + bufferTime + " | duration = " + self.audio.duration);
                        }
                        percent = 100 * bufferTime / self.audio.duration;
                    } // else the Metadata has not been read yet.
                    // console.log("percent = " + percent);
                } else { // Fallback if buffered not supported
                    percent = event.jPlayer.status.seekPercent;
                    //percent = 0; // Cleans up the inital conditions on all browsers, since seekPercent defaults to 100 when object is undefined.
                }
                $(player.bufferBar).css('width', percent + '%');
                // self.progress(percent); // Problem here at initial condition. Due to the Opera clause above of buffered.length > 0 above... Removing it means Opera's white buffer ring never shows like with polyfill.
                // Firefox 4 does not always give the final progress event when buffered = 100%
            }, 300);
        });
    }

    function log(msg) {
        if (window.console) {
            window.console.log(msg);
        }
    }
    return player;
});