_.Module.define({path:"entertainment-game/widget/GameRankInHead",requires:["tbui/widget/ScrollPanel"],sub:{curTab:null,initial:function(){var t=this;this.openBtn=$(".j_game_rank_open"),this.wrapper=$(".game_list_and_rank"),this.openBtn.on("click",function(){t.wrapper.slideDown(),$(this).hide(),t.wrapper.data("open")||(t.initailContent(),t.initialBlock(),t.wrapper.data("open",1))})},initailContent:function(){var t=this,i=$("#gameRankArea").html()+$("#gameListArea").html();this.wrapper.find(".game_rank_loading").remove(),this.listTab=$(".list_tab"),this.gameWrapper=$(".game_wrapper"),this.closeBtn=this.wrapper.find(".j_game_head_rank_close"),this.rankScroll=t.use("common/widget/ScrollPanel",{container:t.gameWrapper,height:140,content:i}),this.gameList=this.gameWrapper.find(".list_block"),this.tabList=this.listTab.find("li"),this.gameWrapper.append('<div class="dot_split"></div>'),this.bindEvents()},initialBlock:function(){this.tabList.first().trigger("click"),this.loopStart()},bindEvents:function(){var t=this;this.wrapper.on("click","a",function(){$.stats.track($(this).tbattr("title"),"FRS\u5934\u90e8\u6e38\u620f\u6392\u884c\u699c\u70b9\u51fb\u7edf\u8ba1","frs")}),this.listTab.on("click","li",function(){t.slideGames($(this)),t.curTab=$(this)}),this.wrapper.bind("mouseenter",function(){t.loopEnd()}).bind("mouseleave",function(){t.loopStart()}),this.closeBtn.on("click",function(){t.wrapper.slideUp(),t.openBtn.show()})},slideGames:function(t){var i=t.data("cataid");this.tabList.removeClass("tab_sel"),t.addClass("tab_sel"),this.gameList.addClass("block_unsel"),this.gameWrapper.find("."+i).removeClass("block_unsel"),this.rankScroll.scrollTopTo()},loopStart:function(){var t=this;this.time=setInterval(function(){var i=t.curTab.next();0==i.length&&(i=t.tabList.first()),i.trigger("click")},5e3)},loopEnd:function(){clearInterval(this.time),this.time=null}}});_.Module.define({path:"entertainment-game/widget/GameFrsHead",_container:null,_isLogin:null,sub:{_cookieName:"FRS_GH",initial:function(e,i){this._isLogin=e,this._container=$("#game_frs_head"),this._cookieFids=$.cookie(this._cookieName)||"",this._bindEvents(i),this._stats(),this._initSlider()},_bindEvents:function(e){var i=this,t=i._container.find(".j_game_frs_open"),a=i._container.find(".j_game_frs_close1"),n=i._container.find(".j_game_frs_close2"),o=(i._container.find(".j_game_frs_title2"),i._container.find(".j_game_frs_step1")),r=i._container.find(".j_game_frs_step2"),s=i._container.find(".j_game_frs_item");"none"!==t.css("display")&&i._gameGuideTip(),t.on("click",function(){$("#game_guide_tip").remove(),i.gameGuideTip=null,$(this).fadeOut(),o.slideDown(function(){i._initSlider()}),e||$.cookie(i._cookieName,null)}),a.on("click",function(){o.slideUp(),t.fadeIn(function(){i._gameGuideTip()}),e||$.cookie(i._cookieName,1,{expires:i._getCookieDate(),path:"/"})}),n.on("click",function(){var e=i._container.find("#game_frs_iframe");r.slideUp(),o.show(),setTimeout(function(){e[0].src="about:blank"},800),$("html, body").animate({scrollTop:0})}),s.on("click",function(){if(!i._isLogin)return TbCom.process("User","buildLoginFrame"),void 0;var e=$(this).data("url"),t=$(this).data("name"),a=!!$(this).data("scroll"),n=i._container.offset().top,s=i._container.find("#game_frs_iframe"),_=i._container.find(".j_game_frs_cur"),d="SD\u9ad8\u8fbe"==t?590:620,c=$(this).data("download");if(1==c)window.open(e);else{if(o.hide(),r.show(),_.text(t),0===s.length){var f=$('<iframe id="game_frs_iframe" src="'+e+'" '+(a?"":'scrolling="no"')+' frameborder="0" width="978" height="'+d+'" />').appendTo(r);f[0].src=e}else s[0].src=e,s[0].height=d,a?s.tbattr("scrolling","auto"):s.tbattr("scrolling","no");$("html, body").animate({scrollTop:n-40})}}),$("body").delegate(".game_guide_tip_close","click",function(){return $("#game_guide_tip").remove(),i.gameGuideTip=null,$.cookie("game_guide_tip","1",{expires:365}),!1})},_stats:function(){var e=this;e._container.on("click",function(e){var i=e.target||e.srcElement,t=$(i).data("log"),a=$(i).data("loc");if(t&&($.stats.track(a,"FRS\u9875\u6e38\u620f\u7edf\u8ba1","frs",t),"\u6536\u8d77"!=t)){var n=$(i).parents(".game_frs_item").find(".game_frs_item_name").text();$.stats.track("frs\u9875_\u5934\u90e8\u6e38\u620f_\u5185\u5d4c","PC\u7aef\u5546\u4e1a\u5316\u6e38\u620f\u7edf\u8ba1",PageData.product||"",t,{obj_url:$(i).parents(".game_frs_item").find("img").tbattr("src"),obj_name:n,obj_type:"\u6e38\u620f"})}});var i=$(".j_game_frs_item"),t=[];i.length>0&&(i.each(function(){t.push($(this).tbattr("title"))}),$.stats.track("frs\u9875_\u5934\u90e8\u6e38\u620f_\u5185\u5d4c","PC\u7aef\u5546\u4e1a\u5316\u6e38\u620f\u7edf\u8ba1",PageData.product||"","\u5c55\u73b0",{obj_name:t.join(","),obj_type:"\u6e38\u620f"}))},_getCookieDate:function(){return parseFloat(((24-(new Date).getHours())/24).toFixed(4))},_gameGuideTip:function(){if("1"!=$.cookie("game_guide_tip")){var e=this,i=this._container.find(".game_frs_open"),t=['<div class="game_guide_tip">',"\u70b9\u51fb\u8fd9\u91cc\u6709\u6e38\u620f\u5662\uff01",'<a href="#" target="_blank" class="game_guide_tip_close"></a>',"</div>"].join("");e.gameGuideTip&&(e.gameGuideTip.closeCard(),e.gameGuideTip=null),_.Module.use("common/widget/Card",{content:t,card_css:{top:i.offset().top-30,left:i.offset().left-28,width:145,zIndex:100},arrow_pos:{left:72},card_leave_display:!0,attr:"id = 'game_guide_tip'"},function(i){e.gameGuideTip=i,i.showCard()})}},_initSlider:function(){var e=this;return $(".frs-head-slider").is(":hidden")?void 0:(e._container.find(".frs-head-slider").jCarouselLite({visible:4,speed:200,btnNext:".j_frs_game_next",btnPrev:".j_frs_game_prev",circular:!1}),e._container.find("#frs-head-slider li").length<=4&&(e._container.find(".frs-head-slider .next").fadeOut(),e._container.find(".frs-head-slider .prev").fadeOut()),void 0)}}});