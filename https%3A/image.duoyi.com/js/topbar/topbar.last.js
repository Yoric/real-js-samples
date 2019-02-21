;(function($){
	function heredoc(fn) {
		return fn.toString().split('\n').slice(1,-1).join('\n') + '\n';
	}

var html= heredoc(function(){/*
<div class="topbar_inner">
    <a href="//www.duoyi.com/" relid="100000" title="多益网络" target="_blank" rel="noopener noreferrer" class="topbar_logo"><img src="//image.duoyi.com/js/topbar/img/logo.png" alt="多益网络"></a>
    <div class="topbar_small_pic">
        <a href="#" target="_blank" rel="noopener noreferrer" ><img /></a>
    </div>
    <div class="topbar_big_pic">
        <a href="#" target="_blank" rel="noopener noreferrer" ><img /></a>
    </div>
    <div class="topbar_nav"> <a relid="100001" href="//www.duoyi.com/" target="_blank" rel="noopener noreferrer">多益网络</a> <a relid="100002"  href="//www.duoyi.com/news/news_4360.shtm" target="_blank" rel="noopener noreferrer">注册帐号</a> <a relid="100003" href="//dygame.duoyi.com/" target="_blank" rel="noopener noreferrer">多益战盟</a>
        <div class="topbar_nav_hr"><span>人才招聘</span>
            <div class="topbar_hr_link"><a relid="100005" href="//sz.duoyi.com/" target="_blank" rel="noopener noreferrer">社会招聘</a><a relid="100004" href="//xz.duoyi.com/" target="_blank" rel="noopener noreferrer">校园招聘</a></div>
        </div> <span class="topbar_show_list">游戏目录<em></em></span> </div>
    <div class="topbar_game_list">
    </div>
</div>
*/});
var css = heredoc(function(){/*
#DY_COMMON_TOPBAR { position: relative; height: 55px; width: 100%; min-width: 1200px; z-index: 9999; background: url(//image.duoyi.com/js/topbar/img/bg_r.jpg) repeat-x 0 0 #F7F7F7; font: normal 14px/180% "\\5FAE\\8F6F\\96C5\\9ED1", "\\5B8B\\4F53", Tahoma, Arial, Helvetica, sans-serif; }
.topbar_inner { width: 1200px; margin-left: auto; margin-right: auto; position: relative; }
.topbar_inner a { text-decoration: none; }
.topbar_inner li,
.topbar_inner ul { list-style: none; padding: 0; margin: 0 }
#DY_COMMON_TOPBAR img { border: 0; display: block; }
.topbar_clfix:after,
.topbar_clfix:before { content: "."; visibility: hidden; clear: both; display: block; height: 0; }
.topbar_clfix { *zoom: 1; }
.topbar_logo { position: absolute; left: 12px; top: 8px; width: 222px; height: 38px; z-index: 20; }
.topbar_small_pic { position: absolute; left: 250px; top: 0; width: 450px; height: 55px; overflow: hidden; display: none; }
.topbar_small_pic img { width: 450px; height: 55px; }
.topbar_big_pic { display: none; z-index: 10; position: relative; }
.topbar_big_pic a { position: absolute; top: 0; left: 125px; width: 950px; height: 245px; z-index: 2; }
.topbar_big_pic:after { content: ""; position: absolute; left: 125px; top: 55px; height: 190px; width: 950px; -webkit-box-shadow: 2px 2px 4px rgba(0, 0, 0, .3); box-shadow: 2px 2px 4px rgba(0, 0, 0, .3) }
.topbar_nav { position: absolute; right: 0; top: 0; height: 55px; z-index: 30; }
.topbar_nav a,
.topbar_nav span,
.topbar_nav_hr span { float: left; padding: 0 13px; height: 54px; line-height: 54px; font-size: 14px; color: #000; cursor: pointer; }
.topbar_nav a:hover { background: url(//image.duoyi.com/js/topbar/img/nav_hover.png) repeat-x 0 0; }
.topbar_show_list em { display: inline-block; width: 14px; height: 12px; background: url(//image.duoyi.com/js/topbar/img/ico_list.png) no-repeat 0 0; margin-left: 2px; }
.topbar_hr_show .topbar_hr_link { display: block; }
.topbar_hr_show .topbar_nav_hr span { background: url(//image.duoyi.com/js/topbar/img/nav_hover.png) repeat-x 0 0; }
.topbar_nav_hr { height: auto; float: left; }
.topbar_hr_link { background: #F3F3F3; float: left; clear: both; width: 100%; display: none; }
.topbar_hr_link a { clear: both; }
.topbar_hr_link a:hover { background: #fff; }
.topbar_game_list { position: absolute; top: 55px; right: 0; display: none; }
.topbar_show_gamelist .topbar_game_list { display: block; }
.topbar_show_gamelist .topbar_show_list { background: url(//image.duoyi.com/js/topbar/img/nav_hover.png) repeat-x 0 0; }
*/});

	var p_box_id = 'DY_COMMON_TOPBAR';
	
	function on(obj,typ,fn){
		if(!obj.length){
			obj.addEventListener ? obj.addEventListener((typ == "mouseenter" ? "mouseover" : (typ=="mouseleave" ? "mouseout" : typ)),fn,false) : obj.attachEvent("on"+typ,function(event){
				event = event || window.event;
				if(!event.target) event.target = event.srcElement;
				fn.call(obj, event);
			});
		}else{
			var l = obj.length;
				while(l--){
				on(obj[l],typ,fn);
			}
		}
		
		return obj;
    }
	if(!$){
		on(window,"load",function(){
			init();
		});
	}else{
		init();
	}

	

function init(){
	if(!window.jQuery){
		return;
	}else{
		$= window.jQuery;
	}
	var par = $("#"+p_box_id);
	if(!par.length){
		par = $("<div id='DY_COMMON_TOPBAR' />").prependTo("body");
	}

	par.append('<style>'+css+'</style>');
	par.append(html);



var id_link = "http://hi.duoyi.com/func/v.aspx?ac=link&id={id}&url={href}";

// $(".topbar_inner a").each(function(){
// 	if($(this).attr("relid")&&$(this).attr("relid").indexOf("id")===-1){
// 		var href = this.href;
// 		$(this).attr("href",id_link.replace("{id}",$(this).attr("relid")).replace("{href}",href));
// 		$(this).attr("relid","id"+$(this).attr("relid"));
// 	}
// });

$(".topbar_inner").on("click","a",function(){
	var relid=$(this).attr("relid");
	var rel=$(this).attr("rel");
	var v=rel?rel:(relid?relid:'');
	if(window.dy_trace){
		dy_trace(["topbar","click",'顶部topbar'+v]);
	}
});

$(".topbar_nav_hr").on("mouseenter",function(){
	$(".topbar_inner").addClass("topbar_hr_show");
});

$(".topbar_nav_hr").on("mouseleave",function(){
	$(".topbar_inner").removeClass("topbar_hr_show");
});

$(".topbar_small_pic ").on("mouseenter",function(){
	$(this).hide();
	var bimg = $(".topbar_big_pic img");
	if(bimg.attr("relsrc")){
		bimg.attr("src",bimg.attr("relsrc"));
		bimg.attr("relsrc","");
	}
	$(".topbar_big_pic ").show();
});
$(".topbar_big_pic ").on("mouseout",function(){
	$(this).hide();
	$(".topbar_small_pic ").show();
});

$(".topbar_game_content ul").on("mouseenter","li",function(){
	var p = $(this).closest("ul");
	p.find(".current").removeClass("current");
	$(this).addClass("current");
});

$(".topbar_show_list").on("mouseenter",function(){
	initList();
	$(".topbar_inner").addClass("topbar_show_gamelist");
});

var shouldHide = true;

$(".topbar_show_list").on("mouseleave",function(){
	setTimeout(function(){
		if(shouldHide){
			hideList();
		}
	},200);
	
});

function initList(){
	var iu = "//image.duoyi.com/js/topbar/gamelist.html?"+Math.random();
	$(".topbar_game_list").html('<iframe id="gameRank" name="gameRank" allowTransparency="true" style="background:transparent;" src="' + iu + '" width="515" height="520" frameBorder="0" scrolling="no"></iframe></div>');
	initList = $.noop;
}

function hideList(){
	shouldHide = true;
	$(".topbar_inner").removeClass("topbar_show_gamelist");
}

$(".topbar_game_list").on("mouseenter",function(){
	shouldHide = false;
});

$(".topbar_game_list").on("mouseleave",function(){
	hideList();
});
$.ajaxSetup({
	cache: true
});
$.getScript("//www.duoyi.com/js_build/hotbanner_289.js",function(){
	if(window.hot_data_289){
		var hots = hot_data_289;
		if(hots.length && hots.length>0){
			var inx = 0;
			if(hots.length>1){
				inx = Math.floor(Math.random()*hots.length);
			}
			var data = hots[inx];
			$(".topbar_small_pic").show().find("img").attr("src",data.src_small);
            //$(".topbar_small_pic").find("a").attr('rel',data.alt+"小图");
            $(".topbar_small_pic").find("img").attr('alt',data.alt);
			$(".topbar_big_pic").find("img").attr("relsrc",data.src);
            //$(".topbar_big_pic").find("a").attr('rel',data.alt+"大图");
            $(".topbar_big_pic").find("img").attr('alt',data.alt);
			$(".topbar_small_pic a,.topbar_big_pic a").attr("href",data.href);
		}
	}
});
}
})(window.jQuery);