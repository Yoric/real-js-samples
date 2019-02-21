	(function(){

	var youliangAd_id = "19022001",//广告位id
		youliangAd_date = "2019/02/20-xml001-1902",
		ylhref_17173 = "//Cvda.17173.com/click?media_code=17173&ad_code=171731009&resource_code=11338&order_code=1020737",//173的监测链接
	
	//设置视频基本参数
		youliang_sc1={
			"flash_src":"//images.17173.com/2019/www/if/video/youliang/"+youliangAd_date+"/sc.swf",
			"flash_h":263,
			"flash_w":325,
			"flash_href":ylhref_17173,
			"yl_sc_id":youliangAd_id ,
			"show_time":15,
			"interval":10	
		}


	window._youliang_sc={
		playover :null,
		close :null,
		url :null
	}

	var yl_sc1_in,yl_played=0,yl_last_play_time,yl_time;
	//设置cookie, XX时间内只播放一次
	yl_time = new Date().getTime();
	yl_last_play_time = getCookie("yl_lastPlayTime"+youliang_sc1.yl_sc_id);
	if ((yl_last_play_time==null)||(yl_time-yl_last_play_time>=1000*60*youliang_sc1.interval)){
		yl_played=1;
		SetCookie("yl_lastPlayTime"+youliang_sc1.yl_sc_id,yl_time);
	}else {
		yl_played=0;
	};
	//预设广告内容

			//yl_sc1_in='<div id="Youliang_sc" class="Youliang_sc" style="position:fixed;_position:absolute;_top:expression(eval(document.documentElement.scrollTop+document.documentElement.clientHeight-'+youliang_sc1.flash_h+'));_bottom:auto;width:'+youliang_sc1.flash_w+'px;height:'+youliang_sc1.flash_h+'px;right:0px;bottom:0px;z-index:99998;"><embed width="'+youliang_sc1.flash_w+'" height="'+youliang_sc1.flash_h+'" src="'+youliang_sc1.flash_src+'" quality="autohigh" wmode="transparent" type="application/x-shockwave-flash" plugspace="'+htt+'//www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" allowscriptaccess="always"></div>';
	//写入广告的函数
	function yl_sc_putIn(){
		if((navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i))){
			yl_sc1_in='';
		}else if(yl_played==1){
			yl_sc1_in='<div id="Youliang_sc" style="position:absolute;top:0px;width:'+youliang_sc1.flash_w+'px;height:'+youliang_sc1.flash_h+'px;right:0px;z-index:99998;"><a id="Youliang_sy_href" href="'+ ylhref_17173 +'" target="_blank" style="position:absolute;top:15px;background-color:#000;width:'+youliang_sc1.flash_w+'px;height:'+(youliang_sc1.flash_h-51)+'px;right:0px;z-index:99999;filter:alpha(opacity=1);opacity:0.01;"></a><a id="Youliang_sy_hrefuseless" style="position:absolute;top:0px;background-color:#000;width:'+(youliang_sc1.flash_w - 15)+'px;height:15px;right:15px;z-index:99999;filter:alpha(opacity=1);opacity:0.01;"></a><a id="yl_close_btn" style="position:absolute;top:0px;right:0;width:15px;height:15px;z-index:9997;cursor:pointer;z-index:99999;BACKGROUND-COLOR: #000; filter:alpha(opacity=1);opacity:0.01;" onclick="_youliang_sc.close()"></a><embed width="'+youliang_sc1.flash_w+'" height="'+youliang_sc1.flash_h+'" src="'+youliang_sc1.flash_src+'" quality="autohigh" wmode="transparent" type="application/x-shockwave-flash" plugspace="//www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" allowscriptaccess="always"></div>';
			$("body").prepend(yl_sc1_in);
			/*li兼容*/
			/*var ddp = $('#yl_yyy_img'),
				tem_top = $(window).height()+$(window).scrollTop(),
				sp_h = $("#Youliang_sc").height(); 
			if(ddp.length>0&&tem_top<(ddp.offset().top+ddp.height()+sp_h)&&tem_top>ddp.offset().top){
				$("#Youliang_sc").css({'top':ddp.offset().top-sp_h-10});
			}else{
				$("#Youliang_sc").css({top:$(window).height()+$(window).scrollTop()-sp_h});
			}*/
			var swf_top = $(window).height()+$(window).scrollTop()-$("#Youliang_sc").height();
			if(swf_top>=2647 && swf_top<=3097 &&$('#yl_yyy_img').length>0)
				{
				$("#Youliang_sc").css({top:'2533px'});}
			else{
				$("#Youliang_sc").css({top:swf_top});
				}

			//首页模块分析与首页经营分析，异步追加（广告）监控
			$(function(){
				window._jc_ping = window._jc_ping || [];
				_jc_ping.push([
				　'_trackExposure',
				　$("#Youliang_sc"),
				　'66d445d0e932aec127f865e4ce8ffd2d'
				]);
			});
		}
	}

	$("#yl_close_btn").click(function(){
		$("#Youliang_sc").html("");
		$("#Youliang_sc").remove();
		_yl_sc_in_5.s=2;
	});

	//写入接口队列
	AD=new ADM("yl_sc_in",5);
	AddSchedule(AD);
	var _yl_sc_in_5={};
	window.yl_sc_in_main = function(o){
		_yl_sc_in_5=o;
		yl_sc_putIn();
	}

	//关闭
	_youliang_sc.close=function(second){
		$("#Youliang_sc").html("");
		$("#Youliang_sc").remove();
		_yl_sc_in_5.s=2;
	}
	//播放完毕
	_youliang_sc.playover=function(){
		_yl_sc_in_5.s=2;
	}
	//open url
	_youliang_sc.url=function(){
		//首页模块分析与首页经营分析，异步追加（广告）监控
		window._jc_ping = window._jc_ping || [];
		_jc_ping.push([
		　'_trackBlockFlash',
		　'66d445d0e932aec127f865e4ce8ffd2d',
		　'17173_okhref'
		]);
		window.open(youliang_sc1.flash_href);
	}
	//cookie操作函数
	function getCookie(name)//取cookies函数       
	{
		var yl_arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
		if(yl_arr != null) return unescape(yl_arr[2]); return null;
	}

	function SetCookie(name,value)//设置cookie
	{
		var yl_Days = 14; //此 cookie 将被保存XX 天
		var yl_exp = new Date();    //获取当时时间;
		yl_exp.setTime(yl_exp.getTime() + yl_Days*24*60*60*1000);
		document.cookie = name + "="+ escape (value) + ";expires=" + yl_exp.toGMTString();
	}

})();