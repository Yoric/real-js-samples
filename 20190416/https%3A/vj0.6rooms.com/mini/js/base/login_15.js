if(typeof JSF=="object"){JSF.geetest="https://api.geetest.com/get.php?gt=6afb5fbb4998793df3c0a75732dedbdc";JSF.weixin="https://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js"}var isIpad=/ipad/i.test(navigator.userAgent),isIphone=/iPhone/i.test(navigator.userAgent),isAndroid=/android/i.test(navigator.userAgent);var __domain__=location.protocol+"//"+location.hostname,pageMessage={domain:__domain__,toDomain:(typeof(myHost)=="string")?myHost.slice(0,-1):__domain__,user:{}};function $extend(d,c){for(var e in c){d[e]=c[e]}}function getCookie(b){var a=document.cookie.match(new RegExp("(?:^|;)\\s*"+b+"=([^;]*)"));return(a)?decodeURIComponent(a[1]):null}(function(){var f=getCookie("_vinfo");if(f&&f!="deleted"&&getCookie("ticket_v")){pageMessage.userCheck=1}else{pageMessage.userCheck=0}if(pageMessage.userCheck){var d=getCookie("_coin6");if(d){f=f.split("|");var e=encodeURIComponent(getCookie("ticket_v")),b=f[2];var h=getCookie("_rinfo");var c=d.split(":");pageMessage.user={pic:h||"//vr0.6rooms.com/imges/new_idx/ic_unknowMale_2.gif",encpass:e,username:b,uid:c[0],_6b:c[1],rich:c[2],star:c[3],nickname:c[4],rid:c[5],vip:c[6],fid:c[7],_6d:c[8],cloaking:parseInt(c[9]),rich_next:c[10],star_next:c[11],frozen:(c[12]==10000||c[12]==10001),from:c[13],ltime:c[14],endfollow:c[15],army:c[16],sign:(c[17]||0)>0,phone:c[18],integral:c[19],follow_num:c[20],mood:c[21]}}else{}}else{var g=getCookie("_LiveGuestUser"),a;if(g){a=g.split("|")[0]}else{a=Math.floor(Math.random()*100000000+1800000000)}pageMessage.user.guest_id=a}})();var _puser=pageMessage.user;var Login={curHost:pageMessage.domain,$:function(a){return document.getElementById(a)},logoutHtml:function(){var e=pageMessage.user;var d=getCookie("ticket_v");var b=d&&d.slice(-5)||"";var c=window.location.host.indexOf("dev.")>-1?"v.6.cn":document.domain;var a;if(e.uid){a='<a class="to-logout" href="//passport.6.cn/sso/logout.php?domain='+c+"&prod="+b+"&url="+encodeURIComponent("//"+location.host+"/logout_test.php")+"&next_action="+encodeURIComponent(location.href)+'" title="退出登录"><i></i>退出</a>'}else{a=""}return a}(),getHtml:function(){var d="";var c=pageMessage.user;if(c.uid){var b='<li class="cloaking" id="cloaking"><a '+(c.cloaking==1?'class="offline" ':"online")+'title="当前'+(c.cloaking==1?"隐身":"显身")+'" onmouseover="setCloaking.yvisible(this)"><span>当前'+(c.cloaking?"隐身":"显身")+"</span></a></li>";var a='<li class="get-gift"><a href="/user/reLvCard.php" target="_blank" data-tracing="ipvafi4o"><span></span>领取礼物</a><i class="line"></i></li><li class="my-footprint"><a href="/user/mytrace.php" target="_blank" data-tracing="ipvafi4o"><span>足迹</span>足迹</a><i class="line"></i></li><li class="my-coin" onmouseover="getCoinPop.yvisible(this)"><a href="/user/payshow.php?i=1" target="_blank" data-tracing="ipvafi3p"><span>金币</span></a></li><li class="my-pay"><a href="/user/payshow.php?i=1" target="_blank" data-tracing="ipvafi3p"><em>充值</em></a></li><li class="change-name" id="changename" data-tracing="ipvafi3o"><a><span>换昵称</span></a></li>'+b+'<li class="user-name" id="myAccountTool" data-tracing="ipvafi3u"><a href="'+pageMessage.toDomain+"/"+c.rid+'" target="_blank"><img alt="'+c.nickname+'" src="'+c.pic+'"><em>'+c.nickname+'</em><i class="arrow"></i></a></li><li class="to-join"><i class="line"></i><a href="/help.php" target="_blank" data-tracing="ipvafi4n">申请入驻</a></li>';if(c.frozen){d='<ul><li class="frozen"><a href="'+pageMessage.toDomain+'/user/frozen.php">此账号异常，查看详情</a><i class="line"></i></li><li>'+this.logoutHtml+"</li></ul>"}else{d="<ul>"+a+"</ul>"}}else{d='<ul>                <li class="login"><a href="#" onclick="Login.toLogin(); return false" data-tracing="ipvafi3l">登录</a></li>                <li class="register"><a href="" onclick="Login.toLogin(1); return false" data-tracing="ipvafi3m">注册</a></li>              </ul>'}return d},toLogin:function(a){if(pageMessage.login_hidden){alert("您尚未登录！");return}if(1){loginFast.login(a)}else{location.href=pageMessage.toDomain+(a===1?"/coopapi/userreg.php":"/coopapi/userlogin.php")}},to6:"",write:function(a){var c=this.$("userPanel")||this.$("userPanel_index");if(!c){return}this.to6=typeof(a)=="string"?a:"https://www.6.cn";c.innerHTML=this.getHtml();this.up_coin6();if(/MSIE\s*?6\.0/.test(navigator.userAgent)&&this.$("headerBar")){var b=this.$("headerBar"),d=b.getElementsByTagName("div")[0];window.onresize=function(){if(document.documentElement.clientWidth<940){d.style.width="1000px"}else{d.style.width="100%"}};$LAB.script(JSF.png).wait(function(){DD_belatedPNG.fix("#userPanel span");DD_belatedPNG.fix("#userPanel i")})}},up_coin6:function(){var a=new Image;a.onerror=function(){var e=getCookie("_vinfo"),d;if(e&&e!="deleted"&&getCookie("ticket_v")){d=1}else{d=0}if(pageMessage.userCheck!=d){location.href=location.href;return}var c=getCookie("_coin6");if(!c){return}var b=c.split(":");pageMessage.user._6b=b[1];pageMessage.user._6d=b[8]};a.src="/api/liveInfoCk.php"},getUserInfo:function(){return{userId:_puser.uid,userName:_puser.username,pwd:_puser.encpass}}};