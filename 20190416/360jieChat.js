//官网客服切换
//引入方法 <script src="https://support.360jie.com.cn/static/common/360JieChat.js" id="360JieChat" data-type=""></script> type:空或uat
(function(global){'use strict';var _Base64=global.Base64;var version="2.3.2";var buffer;if(typeof module!=='undefined'&&module.exports){try{buffer=require('buffer').Buffer}catch(err){}}var b64chars='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';var b64tab=function(bin){var t={};for(var i=0,l=bin.length;i<l;i++)t[bin.charAt(i)]=i;return t}(b64chars);var fromCharCode=String.fromCharCode;var cb_utob=function(c){if(c.length<2){var cc=c.charCodeAt(0);return cc<0x80?c:cc<0x800?(fromCharCode(0xc0|(cc>>>6))+fromCharCode(0x80|(cc&0x3f))):(fromCharCode(0xe0|((cc>>>12)&0x0f))+fromCharCode(0x80|((cc>>>6)&0x3f))+fromCharCode(0x80|(cc&0x3f)))}else{var cc=0x10000+(c.charCodeAt(0)-0xD800)*0x400+(c.charCodeAt(1)-0xDC00);return(fromCharCode(0xf0|((cc>>>18)&0x07))+fromCharCode(0x80|((cc>>>12)&0x3f))+fromCharCode(0x80|((cc>>>6)&0x3f))+fromCharCode(0x80|(cc&0x3f)))}};var re_utob=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;var utob=function(u){return u.replace(re_utob,cb_utob)};var cb_encode=function(ccc){var padlen=[0,2,1][ccc.length%3],ord=ccc.charCodeAt(0)<<16|((ccc.length>1?ccc.charCodeAt(1):0)<<8)|((ccc.length>2?ccc.charCodeAt(2):0)),chars=[b64chars.charAt(ord>>>18),b64chars.charAt((ord>>>12)&63),padlen>=2?'=':b64chars.charAt((ord>>>6)&63),padlen>=1?'=':b64chars.charAt(ord&63)];return chars.join('')};var btoa=global.btoa?function(b){return global.btoa(b)}:function(b){return b.replace(/[\s\S]{1,3}/g,cb_encode)};var _encode=buffer?buffer.from&&buffer.from!==Uint8Array.from?function(u){return(u.constructor===buffer.constructor?u:buffer.from(u)).toString('base64')}:function(u){return(u.constructor===buffer.constructor?u:new buffer(u)).toString('base64')}:function(u){return btoa(utob(u))};var encode=function(u,urisafe){return!urisafe?_encode(String(u)):_encode(String(u)).replace(/[+\/]/g,function(m0){return m0=='+'?'-':'_'}).replace(/=/g,'')};var encodeURI=function(u){return encode(u,true)};var re_btou=new RegExp(['[\xC0-\xDF][\x80-\xBF]','[\xE0-\xEF][\x80-\xBF]{2}','[\xF0-\xF7][\x80-\xBF]{3}'].join('|'),'g');var cb_btou=function(cccc){switch(cccc.length){case 4:var cp=((0x07&cccc.charCodeAt(0))<<18)|((0x3f&cccc.charCodeAt(1))<<12)|((0x3f&cccc.charCodeAt(2))<<6)|(0x3f&cccc.charCodeAt(3)),offset=cp-0x10000;return(fromCharCode((offset>>>10)+0xD800)+fromCharCode((offset&0x3FF)+0xDC00));case 3:return fromCharCode(((0x0f&cccc.charCodeAt(0))<<12)|((0x3f&cccc.charCodeAt(1))<<6)|(0x3f&cccc.charCodeAt(2)));default:return fromCharCode(((0x1f&cccc.charCodeAt(0))<<6)|(0x3f&cccc.charCodeAt(1)))}};var btou=function(b){return b.replace(re_btou,cb_btou)};var cb_decode=function(cccc){var len=cccc.length,padlen=len%4,n=(len>0?b64tab[cccc.charAt(0)]<<18:0)|(len>1?b64tab[cccc.charAt(1)]<<12:0)|(len>2?b64tab[cccc.charAt(2)]<<6:0)|(len>3?b64tab[cccc.charAt(3)]:0),chars=[fromCharCode(n>>>16),fromCharCode((n>>>8)&0xff),fromCharCode(n&0xff)];chars.length-=[0,0,2,1][padlen];return chars.join('')};var atob=global.atob?function(a){return global.atob(a)}:function(a){return a.replace(/[\s\S]{1,4}/g,cb_decode)};var _decode=buffer?buffer.from&&buffer.from!==Uint8Array.from?function(a){return(a.constructor===buffer.constructor?a:buffer.from(a,'base64')).toString()}:function(a){return(a.constructor===buffer.constructor?a:new buffer(a,'base64')).toString()}:function(a){return btou(atob(a))};var decode=function(a){return _decode(String(a).replace(/[-_]/g,function(m0){return m0=='-'?'+':'/'}).replace(/[^A-Za-z0-9\+\/]/g,''))};var noConflict=function(){var Base64=global.Base64;global.Base64=_Base64;return Base64};global.Base64={VERSION:version,atob:atob,btoa:btoa,fromBase64:decode,toBase64:encode,utob:utob,encode:encode,encodeURI:encodeURI,btou:btou,decode:decode,noConflict:noConflict};if(typeof Object.defineProperty==='function'){var noEnum=function(v){return{value:v,enumerable:false,writable:true,configurable:true}};global.Base64.extendString=function(){Object.defineProperty(String.prototype,'fromBase64',noEnum(function(){return decode(this)}));Object.defineProperty(String.prototype,'toBase64',noEnum(function(urisafe){return encode(this,urisafe)}));Object.defineProperty(String.prototype,'toBase64URI',noEnum(function(){return encode(this,true)}))}}if(global['Meteor']){window.Base64=global.Base64}if(typeof module!=='undefined'&&module.exports){module.exports.Base64=global.Base64}else if(typeof define==='function'&&define.amd){define([],function(){return global.Base64})}})(typeof self!=='undefined'?self:typeof window!=='undefined'?window:typeof global!=='undefined'?global:this);
function chatUtil() {}
chatUtil.isPc = function (){
	if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
		return false;
	}
	else {
		return true;
	}
}

chatUtil.isAndroid = function() {
	var _userAgentInfo = navigator.userAgent,
		_isAndroid = _userAgentInfo.indexOf('Android') > -1 || _userAgentInfo.indexOf('Linux') > -1 || navigator.platform.indexOf('Linux') > -1;
	return _isAndroid;
};

//检测iphonex
chatUtil.isIphonex = function(){
	var isIphonex = (window.screen.height === 812 && window.screen.width === 375) || (window.screen.height === 896 && window.screen.width === 414);
	return isIphonex;
};

//检测微信
chatUtil.isWeixin = function(){
	var userAgentInfo = window.navigator.userAgent;
	var ua = userAgentInfo.toLowerCase();
	var isWeixin = ua.match(/MicroMessenger/i) == 'micromessenger';
	return isWeixin;
};

var resetHeight = function(cutHt){
	var _cutHt = cutHt ? cutHt : 0;
	var _headerHt = $(".qihoo_chatpup .header").outerHeight(true);
	$("#liveFrame").height($(window).height() - _headerHt - _cutHt);

};

var setIframeHeight = function(){
	$(window).resize(function () {
		resetHeight();
	});
};

chatUtil.chatTextClick =  function (data) {
	if(!chatUtil.isAndroid()) {
		setTimeout(function () {
			var _srollTop = $("body").scrollTop();
			if(_srollTop>200) {
				resetHeight(_srollTop);
				$('html,body').animate({scrollTop: 0}, 0);
			}else{
				$('html,body').animate({scrollTop: $(window).height()}, 0);
			}
		}, 300);
	}
};
chatUtil.chatTextBlur =  function (data) {
	if(!chatUtil.isAndroid()) {
		resetHeight();
		$('html,body').animate({scrollTop: $(window).height()}, 0);
	}
};

var initJieLive = function() {
	//PC端客服
	var showLive = function (d) {
		var app_clientId = localStorage.getItem("app_clientId");
		if (app_clientId) {
			d.clientId = app_clientId;
		} else {
			localStorage.setItem("app_clientId", d.clientId);
		}

		$(".kefu").show();
		if(d.platform == "Imcc") {
			d.accessId = d.accessId ? d.accessId : "Q3bjHo";
			$(".kefu").attr("onclick","")
			$(".kefu").on("click", function () {
				var imNumber = d.accessId;  //接入号码，请按正确修改
				var hastab = false;  //是否存在右侧标签页，（ true 存在，不存在不需要该参数。）
				var isstatic = false;  //true=弹出框不可隐藏,false弹出框可隐藏
				var openid = "";  //访问者唯一标识(可选参数，默认为0或者为空)
				var params = {
					imUserNick: d.userName,
					imUserNumber: d.clientId,
					hostImNumber: d.accessId,
					showIcon: "2", //可以转人工不用登录
					crmUrl: d.crmUrl
				}; //自定义参数, JSON字符串格式UTF8编码经base64转码
				new WebchatPop(imNumber, hastab, isstatic, openid, Base64.encode(JSON.stringify(params)))
					.ready(function (webchat) {
						$("#adaptation").prepend('<span style="position: absolute;z-index: 1000;right: 10px;top: 5px;font-size: 18px;cursor: pointer;color: #323232;font-family: Microsoft Yahei" id="close">×</span>'),
							$("#close").on("click", function () {
								$("#adaptation").remove()
							})
						webchat.show()
					});
			});
		}
	};

	//手机端客服
	var appendChatDiv = function () {
		var html = '<style>'+
		'.qihoo_chatpup{position:absolute;right:0;left:0;bottom:0;top:0;height:100%;width:100%;z-index:2147483647;overflow:hidden;background:#fff;-webkit-transform:translate3d(0,0,0);display: none}'+
		'.qihoo_chatpup .header{position:absolute;top:0;width:100%;height:50px;background-color:#00bf5f;color:#fff}'+
		'#live-iframe-box{position:absolute;bottom:0;top:50px;width:100%;}'+
		'.qihoo_chatpup .ser-info{height:45px;width:230px;margin:0 auto;text-align:center;padding-top:5px;position:relative}'+
		'.qihoo_chatpup .logo img{max-width:300px;height:22px}'+
		'.qihoo_chatpup .ser-company{font-size:12px;white-space:nowrap;text-overflow:ellipsis;width:230px;overflow:hidden}'+
		'.qihoo_chatpup .corner-btn{position:absolute;z-index:120;height:20px;bottom:12.5px;top:12.5px;width:75px;right:0;margin-right:5px}'+
		'.qihoo_chatpup .chat-close{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAABQCAYAAACnFg0qAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAUdSURBVHja7JtZiBxVFIa/6sRI1CgqSEZxIfMQnztuowZiQFExZtRk+kHBh7gEg4pGEBPojKMZRVxAHwaNERUMTMZshiwPURszigQdRSdqMIKJy+iDSCKKDhmOD31Ki/JWdXXVrbY6fQ9caOqee6r+u5zlr2pPROgUme7/qFarpv4ZQK+2HuBsYBL4HvgE2AJs02tGGRgYKB5Yg9wEPAUcBoaBqv4GOA9YCCwHBoGHgc3N3jxightK2gk0gZ2mAG4E7gRqBp2D2l4CFgBDwKXAKmDKAOo6YD3QlXFxJoBlwK40g0uGa4PAZfrwtQQ2asAlqj8YobMe6AO8jK1PbWED7BJgsa7q0Sbs/BYYt8TQ3wWMWjh2o1l2RynkjJ7VbXIkha0jOvY5tVU4CYJdChwA3g9cW6urttYw1tT3AfCVbjebslebNbC9wMZQ/0PAKcB9hrFRfRvVlm3xbIK9GHg31P808DvwvGFsVN87wEUJ7j0b2KPOrZHMB660CXZ2II76slpXb7VhbFTfdwmcSBn4EDikO+GcVp/ZSeDEFtyzAuwA7lGH9gKwCZgZsXVvA06wDXbC0gyfq7ZMD/448JhmXzv1+jPq1NaFzmUJeFGPyx7gLJtgP9OzEZQfgTkx47uAX0LXFgIfGXQ3B5KPL0N9dwHdmnb6WdyrOnHdwG5gn25/K2C3GkLGEPAycFJEkTCkKWNQ+tRWWA4D1wO/Gvom1YMvB24BNqg/WKxO8AlghW5/K2BHgLnA5aHU8WuNvdfojJeAq4D3gL+ANQH9HuBCtRWW+4FjMc/yM3Az8LoC7AtVUzs0D7dS9UwCK3UlezQjmgLuBq4FHgBe03M1rhVRsNI5DXgFeFAnIY2MASfH9B+wWeKNaLzdBizSDAk9M7tj7MzSMdsjVnVC42TW/PgK4CdbhQDAI8Dn6hCSbJsFqjuuY01yh06CZGzDGq6s1bNTwL3qKNYB32rgf1sThhnqJefrubpAQb4ZU2zvNCUaaYv3PJiKTbotlyprsSoQh38APtbwMBJHy+TBOKROrm0RbllXyQfu24maiGq1mnqSSnSQ/LOy3thwLuyilCuFLN5N7OJ+jbM14GoNMWdqWKppxrNfk4HCS0vYRW9s2Cq7KOWKYxcdu+jYRccuOnbRsYuOXXTsomMXHbvo2EXHLjp20bGLubOLUq4Y2cUIduR/pWV8dnGegV3c0ohdLBItk5pdzGtV8pwcr5O+XewoKrWjwAa9seRZOLuVzeDHGiyOUS8K7JTWnV7BV1Wa6TOBfVQT/g05EGd58FHSAOi/uiLiN18QkX79fUxEegM6RWsSeu6oa4hI5PvZfp2d27USocArLBEr7MUlFWJQOpX6m4FZgQooSrfZM2XT60sSO6WQQljpKPX/A3waKtLbPs5GSRk4X7e278DyXqmsHllM904CditwK/BGAHARQ48XuvYfwM0UAhUFPK0gmZXEPIexb7pF51IUoCYv7TUC2w75sJcwLCU+s+0GMlLP1bMOrAN7fIKdA7xl+d552GwQsOJLqJkiskZE/jCVTClbHjYTtbjOG0TkYFx9mKLlYTMV2L3SWBCRQyKyUkRKCW6Q1GZLmqmebRSk51J/B7SP+udBWevZlmVqacBC/SXVF8Dp7QQ2bej5M1T9HLdx9gzgyZaHDctgk74VH6f+vdSKBLqjhUIb470Wicg3lj1nHjatxFk/AejPIanoL1pSEWzdIrLd8s3zsJk4zrpCwIFtU/l7AFms3DR9xMCSAAAAAElFTkSuQmCC) no-repeat -40px -43px;width:20px;height:20px;display:inline-block;cursor:pointer;float:right;margin-right:3px}'+
		'.qihoo_chatpup .loading{position:absolute;color:#999;height:25px;top:40%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);z-index:2000}'+
		'</style>'+
		'<div class="qihoo_chatpup">'+
		'	<div class="header">'+
		'	<div class="ser-info">'+
		'	<div class="logo"><img id="logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAqCAYAAAAu9HJYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkU2N0U2NTU0NEE0MTExRTg4RDlGQjk5MThBODI4OEVCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkU2N0U2NTU1NEE0MTExRTg4RDlGQjk5MThBODI4OEVCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTY3RTY1NTI0QTQxMTFFODhEOUZCOTkxOEE4Mjg4RUIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTY3RTY1NTM0QTQxMTFFODhEOUZCOTkxOEE4Mjg4RUIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7JSMi1AAAFJ0lEQVR42sRZe2hVdRz/nnPua+5uzqVuc7OHc67RQBYNwiSKsgLLqEiENIMgm39lrZYYWWgPzRUFZVZguFnhKChCKqVoPQgWmJVbW1qK29SMtXY397j3ntPne+/vzvs459zfuY/1hc8Y9/wen/P7vn9HMXouoxyIB7gUmA0UAOPA38AAEMp2cVeG8/zAKuAmYDmwyGKtKaAP6AQOAweBSaebKQ5Psg5oBlYLok5lCNgHtAL9uSZZBuwA1gFqDsyDT/h1YCsQSDdYZsN7gd+A9TkiGLPhTUA3cEM2JPnZy8ABoITyI1XCVh/NhKQG7Bdvm2/RhI3uauyclLZJBdgr1DstYYPo7VMhOj1uRN3bpdDaKo0WFihpWXQN63TwnE5Bw4gs3lii0qpyzWzoM8CzMiGoJZkgy3DQoLb+cISsErd5+9UemqVZE/zzgkHNx4I0pV+c1ztq2JHsBT6wU/cyYJvZ7Es8Cq1ekLjwmQmDdp+0jtU6Xmh7XyhCMF6aLrcNz28B1VYk3WKA5QoPY/EqX6J6PxwM05F/ddPx7w2EqTuQ+OzGuWoENlIEvGFFsgm4ym62F6O3LIm+gyHAFPi0JpJ4noLtsg0n7O5W6LFqqSR3C3BnMkmOW0/IzG6YrdI9SWofgNr3xKmd+T5vouZNi1xU6lFkvf6pZJKc5iplZ2+E2hckqf0A1P7LSJRVB9R8dCSR4fJSlW6b7ygXXCPqgmmSa2VmfTekR5yFvXlzjYuUpBDFamdvfjNJzcUIVy01GdUy62Iki0Q1YykhEHj1j1AklFwIR3/jWHd3hZZihw/+NEXj4cT5j1RrNFdezfHClZbCwXwl/vnUatQgTm5LT4h6RqPqqy9Sp+MiO8vPI7p19cKhAn8aSlLV7MNPj8OJ5nnTkq9nHTRYPT18XqcXfg/SWNzJ/BrQHR0Fa6HrH/M5K+YZQFqSjfyKV5o9GYVZ7UeGGQvnL2kbcsNqmWS5aemNM96z1E13VWh5I+mWM9Nyl12F7cErtCx20dJilXYejzrNmkotkiLjpQ/2euh8qkr5BSt85kwKsPZ1pVIhqUgqLnB8q/V76MnuIN1RplF1YeLGn/+lmJK8FfP4BbMVXmFUZuAVsxTa2+ChMq+S1YZ9qIACzvrHAJM8KzuaQ4/fld2pcHRYf2TKSZQ46xL9i60cHzPoozPhSOllJv0T5g/aER0+8+gp9SVnraajQdqA9HofCuc0uulNG8xZWk+EqGPQeSySMYxr56j0dK2L5li7er0qGndbKwkbeYtC9AMC/TbkfIst2BS7VdH3fml7zaHkj+TtaCNerHNbnfonHPNjbtAmCk3zxhv1Y4FGljZ5Enb2zZBZCNJovjep54F9f4uxPqzXjNy9ssw2WbTFd4u81AknNWVinNRpa28w5XfOWMlx8gvE03dQyj2H06sptFXRj5y34+tJbnh3zkCPTXX+aLxNQ5Blu1mPsxs4lm+S3KcXpi8HDgEfm5FkfT3Ezkz/r7Ajb7Tru7+Pb4BkxWuRnn1qRmFhA+ePdDcYO8Q95P2yqy5DNfPAQo2G43ynEmpd4ndMkq9Y3pe9n2SraQfWzKCaWxs7J5u7rvc6ukRlJe6agZs19oHNwEuZ3E/q4t6Qe/LhPBHki/8VdgTTkYxJh+iD9gniuRC+jn5F2P5XMkWvjJwT14H1wLvAWIbk+GL/NWCx0FJAZpKS4Xec2CeSm+niJxKzEM3+zp9IvqYZ/ERi2bMBvFCxuBEJiFM7TTn42PSfAAMAlvmVW+2vOUIAAAAASUVORK5CYII="></div>'+
		'	<div class="ser-company">360借条</div></div>'+
		'<div class="corner-btn"><span class="chat-close" id="chat-close"></span></div></div><div id="live-iframe-box"></div><div class="loading">正在加载...</div></div>';
		if($(".qihoo_chatpup").length ==0) {
			$("body").append(html);
			$(document).on("click", "#chat-close", function () {
				$(".qihoo_chatpup").hide();
			});
		}
	};
	//云软点击弹出框
	window.imccChatClick = function () {
		if(!window._loadLiveConfig){
			alert("页面尚未加载完，请稍后点击咨询");
			return false;
		}
		var iframeSrc = "https://support.360jie.com.cn/live.html?appMobileNo=&userNo=&pkg=jietiaogw&chatFrom=generalize";
		if(window._api_type == "uat"){
			iframeSrc = "http://support.uat.360jie.com.cn/live.html?appMobileNo=&userNo=&pkg=jietiaogw&chatFrom=generalize";
		}

		var _iframeHt = $(window).height() - $(".qihoo_chatpup .header").outerHeight(true);
		var $iframe = $('<iframe id="liveFrame" name="liveFrame" scrolling="yes" frameborder="no" height="100%" width="100%"></iframe>');
		$iframe.attr("src", iframeSrc);
		if($("#live-iframe-box #liveFrame").length == 0) {
			$("#live-iframe-box").append($iframe);
		}
		var liveFrame = document.getElementById("liveFrame");
		liveFrame.onload = function () {
			$(".loading").hide();
			setIframeHeight();
		};
		$(".qihoo_chatpup").show();
	};

	window._loadLiveConfig = false; //判断载入聊天配置文件时候加载完毕
	var getLiveConfig = function() {
		var BASE_API = "https://dispatch.360jie.com.cn/api/help";
		if(window._api_type == "uat"){
			BASE_API = "https://dispatch-test.360jie.com.cn/api/help";
		}
		$.ajax({
			type: "get",
			url: BASE_API + '/webjsonphelpDoLive',
			data: {
				pkg: "jietiaogw",
				appMobileNo: "",
				userNo: ""
			},
			dataType: "jsonp",
			jsonp: "callback",
			success: function (data) {
				if(chatUtil.isPc()) {
					showLive(data.result.data);
				}else{
					appendChatDiv();
					window._livePlatform = data.result.data.platform;
				}
				window._loadLiveConfig = true;
			},
			error: function (err) {
				setTimeout(function () {
					getLiveConfig();
				}, 1000);
			}
		});
	};
	getLiveConfig();
};

(function (){
	$(".kefu").hide();
	var _api_type = $("#360JieChat").data("type");
	window._api_type = _api_type;
	if(chatUtil.isPc()) {
		var _url = "https://cc.360jie.com.cn";
		if (_api_type == "uat") {
			_url = "https://cc-sandbox.360jie.com.cn";
		}
		var script = document.createElement('script');
		script.async = "async";
		script.src = _url + "/webchat_new/static/js/webchat_pop.js";
		script.onload = function () {
			initJieLive();
		};
		document.getElementsByTagName("head")[0].appendChild(script);
	}else{
		initJieLive();
	}
})();

window.addEventListener('message',function(e){
	if(!e.origin || !e.data) return;
	try{
		var _obj = JSON.parse(e.data);
		if(_obj.func && chatUtil[_obj.func]){
			chatUtil[_obj.func].call(this, _obj);
		}
	}catch(e){
		console.log(e);
	}
},false);
