(function (){

	var closeAd ;
    var youliang_id = "19022004",//广告位id
		youliang_date = "2019/02/20-0041902",//广告投放序号
		ylhref_17173 = "//Cvda.17173.com/click?media_code=17173&ad_code=171737319&resource_code=11610&order_code=1020737";//173的监测链接

	//设置广告基本参数
	var Youliang_sy={
		"1":youliang_id,
		"2":youliang_id,
		"3":youliang_id,
		"res_url":"",
		"res1":"//images.17173.com/2019/www/if/video/youliang/"+youliang_date+"/a1.swf",
		"res1f":"//images.17173.com/2019/www/if/video/youliang/"+youliang_date+"/a2.swf",
		"href1":ylhref_17173,
		"top1":42,
		"show_time":6
	};

	window._youliang_sy ={
		close:null,
		playover:null,
		replay:null
	}

	//ue.NavSide.hideOverTop(600);
	var Youliang_siye_in = '';
	var yl_sy_fold = '';
	var yl_sy_played,yl_sy_time_area,yl_time,yl_now_timeArea;
	//预设广告内容
	Youliang_siye_in +='<div id="Youliang_sy_fold" class="Youliang_sy_fold" style="width:150px; height:470px; position:absolute; right:15px; top:60px; z-index:999;">';
	Youliang_siye_in +='<div class="yl_fold" style="width:150px; height:470px; position:relative; visibility:hidden;">';
	Youliang_siye_in +='<a href="javascript:_youliang_sy.yl_sy_closeAll()" style="position:absolute; display:inline-block; width:63px; height:19px; left:0px; top:0px; z-index:1000;background:#000;filter:alpha(opacity=1);opacity:0.01;">';
	Youliang_siye_in +='<a style="position:absolute; z-index:900; left:0px; top:0px; display:inline-block; width:150px; height:470px; background:#000;filter:alpha(opacity=1);opacity:0.01;" href="'+Youliang_sy["href"+1]+'" target="_blank"></a>';
	Youliang_siye_in +='<a style="position:absolute; z-index:1000; left:0px; bottom:0px; display:inline-block; width:60px; height:23px; background:#000;filter:alpha(opacity=1);opacity:0.01;" href="javascript:_youliang_sy.yl_play_sy(1)"></a>';
	Youliang_siye_in +='<embed width="150" height="470" src="'+Youliang_sy.res_url+Youliang_sy.res1f+'" quality="autohigh" wmode="transparent" type="application/x-shockwave-flash" plugspace="//www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" allowscriptaccess="always">';
	Youliang_siye_in +='</div>'
	Youliang_siye_in +='</div>';	

	yl_sy_fold='<div id="Youliang_sy_show" class="Youliang_sy_show"  style="width:450px; height:330px; position:absolute; right:168px; top:60px; z-index:1001;">'+Youliang_sy_bigswf(1)+Youliang_sy_bighref(1)+'</div>';
		
	function Youliang_sy_bighref(c){
		var yl_sy_bighref = '';
		yl_sy_bighref += '<a class="Youliang_sy_href" style="position:absolute; z-index:1001; left:0px; top:0px; display:inline-block; width:379px; height:330px; background:#000;filter:alpha(opacity=1);opacity:0.01;" href="'+Youliang_sy["href"+c]+'" target="_blank" ></a>';
		yl_sy_bighref += '<a class="Youliang_sy_href2" style="position:absolute; z-index:1001; left:379px; top:19px; display:inline-block; width:71px; height:311px; background:#000;filter:alpha(opacity=1);opacity:0.01;"  href="'+Youliang_sy["href"+c]+'"href="'+Youliang_sy["href"+c]+'" target="_blank"></a>';
		yl_sy_bighref += '<a class="close_btn" style="position:absolute; top:1px; right:0px;z-index:9999;width:71px;height:18px;filter:Alpha(opacity=0);opacity:0.01;BACKGROUND-COLOR:#000;cursor:pointer;" onclick="_youliang_sy.yl_siye_close()" ></a>';
		return yl_sy_bighref;
	}
	//href="'+Youliang_sy["href"+c]+'"href="'+Youliang_sy["href"+c]+'"
	function Youliang_sy_bigswf(c){
		
		var yl_sy_bigswf='<embed width="450" class="yl_sy_swf" id="yl_sy_swf" height="330" src="'+Youliang_sy.res_url+Youliang_sy["res"+c]+'" quality="autohigh" wmode="transparent" type="application/x-shockwave-flash" plugspace="//www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" allowscriptaccess="always">';
		return yl_sy_bigswf;
	}



	//写入广告的函数
	function yl_sy_putIn(){
		if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i))) {
			return;
		}else{
			$("body").prepend(Youliang_siye_in);
			$("body").prepend(yl_sy_fold);
			$("#Youliang_sy").css({top:($(window).height()-$("#Youliang_sy").height())/2+$(window).scrollTop()});
			closeAd = setTimeout(function(){
				_youliang_sy.yl_siye_close();
			},6000);
			//首页模块分析与首页经营分析，异步追加（广告）监控
			$(function(){
				_jc_ping.push([
				　'_trackBlock',
				　$('.yl_fold2'),
				　'a7c8b91e720933fa51e33c0fed29de09',
				   true
				]);
				_jc_ping.push([
				　'_trackBlock',
				　$('.Youliang_sy_show .Youliang_sy_href,.Youliang_sy_show .Youliang_sy_href2'),
				　'a7c8b91e720933fa51e33c0fed29de09',
				   false
				]);
			})
		}

		
		
	}
	//写入接口队列
	AD=new ADM("yl_sy_in",3);
	AddSchedule(AD);
	var _yl_sy_in_3 = {};
	window.yl_sy_in_main = function(o){
		_yl_sy_in_3=o;
		yl_sy_putIn();
	}

	//大图关闭
	_youliang_sy.yl_siye_close = function(m){
		
		clearTimeout(closeAd);
		$("#Youliang_sy_show").hide();
		$("#yl_sy_swf").remove();
		$(".yl_fold").css({visibility:"visible"});
		m=m+"";
		_yl_sy_in_3.s=2;

	}

	//播放完毕
	_youliang_sy.yl_siye_playover = function (n){
		clearTimeout(closeAd);
		$("#Youliang_sy_show").hide();
		$("#yl_sy_swf").remove();
		$(".yl_fold").css({visibility:"visible"});
		_yl_sy_in_3.s=2;

	}
	//重播
	_youliang_sy.yl_play_sy = function (s){
		clearTimeout(closeAd);
		$("#yl_sy_swf").remove();
		$(".yl_fold").css({visibility:"visible"});
		$(".yl_fold:eq("+(parseInt(s)-1)+")").css({visibility:"hidden"});
		$("#Youliang_sy_show").css({"top":Youliang_sy["top"+s],"display":"block"});
		$("#Youliang_sy_show").prepend(Youliang_sy_bigswf(s));
		$("#Youliang_sy_show").show();

		closeAd = setTimeout("_youliang_sy.yl_siye_playover()",6000);	
		var yl_s=s+"";
	}
	//关闭回收位
	_youliang_sy.yl_sy_closeAll = function (){
		$("#Youliang_sy_fold,#Youliang_sy_show").remove();
		_yl_sy_in_3.s=2;
	};

	$(document).ready(function(){
		$('.festival-box').hide();

			// $('.close_btn').mousedown(function(){
			// 	_youliang_sy.yl_siye_close();
			// }.bind(this));	
	});

})();


    


