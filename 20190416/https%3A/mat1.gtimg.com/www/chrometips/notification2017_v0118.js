/**
* @�������������
* @author limeizhang#tencent.com 
* @time 2017-05-24
* @https
*/
window.FERD_UserData = function(res){
	var _this = FERD_NavNotice,
		_data = "",
		date = new Date();
	if(res.code === 0){
		_data = res.data,
		len = _data.length;
		for(var i = 0;i<len;i++){
			_this.arrObj.push({"url":_data[i].url,"title":_data[i].title,"url_img":_data[i].url_img});
		}
		localStorage["FERD_NOTICE_GET_NEWS"] = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate();
		localStorage["FERD_NOTICE_INDEX"] = 0;
		localStorage["FERD_NOTICE_SUM"] = len;
		localStorage["FERD_NOTICE_NOTICE_CONTENT"] = JSON.stringify(_this.arrObj);
		_this.showNotification(_this.pushType);
	}else{
		return;
	}
};
window.FERD_NewsNotice = function(res){};

var FERD_NavNotice = {

	_this : this,
	arrObj : [],
	noticeTitle : "��л���ģ�",
	noticeBody:"��Ѷ���Ƽ�����  ����鿴",
	noticeIcon : "//mat1.gtimg.com/news/lmz/navnotice/images/qqlogo.png",
	noticeUrl : "http://www.qq.com/chrometips/welcome.htm",
	notification : "",
	site : "",
	pageType : "",
	browser : "chrome",
	entrance : "others",
	Timer : null,
	pushType : "active",
	obj1 : ["����ã�","����ã����������£�","����ã�Ϊ���Ƽ�","����ã��µ�һ��"],
	obj2 : ["����ã�","����ã���Ϣһ�°ɣ�","����ã�æ�꿴���Ű�","����ã�Ԥף��ĩ��죡"],

	getScript : function(src, func){
		var script = document.createElement('script');
        script.async = "async";
        script.charset = "utf-8";
        script.src = src;
        if (func) {
          script.onload = func;
        }
        document.getElementsByTagName("head")[0].appendChild( script );
	},

	init : function(obj){
		var _this = this,
			_site = window.location.host.split(".qq.com")[0],
			ua = window.navigator.userAgent.toLowerCase(),
			url = window.location.href.toLowerCase(),
			sitecn = "";
		_this.site = _site;
		if(_site == "2016"){
			return;
		}
		if(ua.indexOf("chrome")<0||ua.indexOf('se 2.x') != -1||ua.indexOf('baidu')!=-1||ua.indexOf('greenbrowser')!=-1||ua.indexOf('worldchrome')!=-1||ua.indexOf('theworld')!=-1||ua.indexOf('aoyou')!=-1||ua.indexOf('360se')!=-1||ua.indexOf('360ee')!=-1||ua.indexOf('opr')!=-1){
			return;
		}else if(ua.indexOf('qqbrowser')!=-1){
			_this.browser = "qq";
		}
		if(NavNoticeSiteName.indexOf(_site)<0){
			return;
		}
		switch(_site){
			case "tech" : sitecn = "�Ƽ�Ƶ��";break;
			case "edu" : sitecn = "����Ƶ��";break;
			case "house" : sitecn = "����Ƶ��";break;
			case "auto" : sitecn = "����Ƶ��";break;
			case "ent" : sitecn = "����Ƶ��";break;
			case "finance" : sitecn = "�ƾ�Ƶ��";break;
			case "news" : sitecn = "����Ƶ��";break;
			case "games" : sitecn = "��ϷƵ��";break;
			case "cul" : sitecn = "�Ļ�Ƶ��";break;
			case "fashion" : sitecn = "ʱ��Ƶ��";break;
			case "sports" : sitecn = "����Ƶ��";break;
			default :sitecn = "";
		}
		this.noticeBody = "��Ѷ��"+sitecn+"�Ƽ�����  ����鿴";
		if(_this.isSupport){
			_this.noticeUrl = "http://www.qq.com/chrometips/"+FERD_NavNotice.site+".htm";
			_this.setInfo(url);
			_this.checkPermission();
		}
	},

	// entrance & pageType
	setInfo : function(url){
		var _this = this;
		if(url.indexOf("adtag=client.qq")>-1){
			_this.entrance = "qqTips";
		}else if(url.indexOf("pgv_ref=aio2015")>-1){
			_this.entrance = "QQAIO";
		}
	},

	// �Ƿ�֧��NOTIFICATION
	isSupport : function(){
		return !!window.Notification;  
	},

	// PACͳһ�ϱ�
	pacBeehive : function(turl){
		var _this = this,
			g_btrace_BOSS = new Image(1,1),
			url = window.location.href,
			a = document.cookie.match(new RegExp('(^|)pac_uid=([^;]*)(;|$)')),
			pacUID = (a == null ? "" : unescape(a[2])),
			detail = "browserTips_"+_this.pageType;
		g_btrace_BOSS.src = "//btrace.qq.com/kvcollect?BossId=4118&Pwd=1894948148&productOutline=browserTips&productDetail="+detail+"&domain="+FERD_NavNotice.site+"&url="+url+"&pacUID="+pacUID+"&targetUrl="+turl+"&_dc=" + Math.random();
	},

	// boss
	beehive : function(dataType,sTargetUrl){
		var _this = FERD_NavNotice,
			g_btrace_BOSS = new Image(1,1),
			url = window.location.href,
			a = document.cookie.match(new RegExp('(^|)pac_uid=([^;]*)(;|$)')),
			pacUID = (a == null ? "" : unescape(a[2])),
			date = new Date(),
			hour = date.getHours(),
			period = "";
		if(hour<12){
			period = "am";
		}else if(hour>11 && hour<18){
			period = "pm";
		}else if(hour>17){
			period = "night";
		}
		g_btrace_BOSS.src = "//btrace.qq.com/kvcollect?BossId=3982&Pwd=1823624630&pageType=&pdtType=chromeNotification&dataTpye=&sLocalUrl="+escape(url)+"&sTargetUrl="+sTargetUrl+"&dataType="+dataType+"&pacUID="+pacUID+"&broswer="+_this.browser+"&period="+period+"&delay=2&entrance="+_this.entrance+"&pushType="+_this.pushType+"&channel="+FERD_NavNotice.site+"&_dc=" + Math.random();
	},


	// ��¼����֪ͨ״̬
	isNoticed : function(){
		var date = new Date(),
			day = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate(),
			hour = date.getHours();
		if(hour<12){
			localStorage["TECNENCT_FERD_NOTICED_FIRST"] = day;
		}else if(hour>11 && hour<18){
			localStorage["TECNENCT_FERD_NOTICED_SECOND"] = day;
		}else if(hour>17){
			localStorage["TECNENCT_FERD_NOTICED_THIRD"] = day;
		}
		localStorage["TECNENCT_FERD_LAST_TIME"] = date.getTime();
	},

	// ��¼����Ȩ��ѯ��״̬
	isRequested : function(time){
		localStorage["TECNENCT_FERD_REQUESTED"] = time;
	},

	// ��ʱ ���Ƶ��10����
	autoNews : function(){
		var _this = this;
		_this.Timer = setInterval(function(){
			var _now = new Date(),
				_hour = _now.getHours(),
				_minute = _now.getMinutes(),
				_day = _now.getDay(),
				_tmp_auto = localStorage["TECNENCT_FERD_LAST_AUTO_TIME"] ? Number(localStorage["TECNENCT_FERD_LAST_AUTO_TIME"]) : 0,
				_tmp = localStorage["TECNENCT_FERD_LAST_TIME"] ? Number(localStorage["TECNENCT_FERD_LAST_TIME"]) : 0,
				_tmp_minute = ((_now.getTime()-_tmp)/60000).toFixed(1);
				_tmp_minute2 = ((_now.getTime()-_tmp_auto)/60000).toFixed(1);
			if((_tmp_minute>2)&&(_tmp_minute2>10)&&((_hour==16&&(_minute>44&&_minute<55))||(_hour==10&&(_minute>14&&_minute<25)))){
				_this.pushType = "time";
				_this.getNewsList(_hour,_day);
			}
			_now = _hour = _minute = _tmp_minute = _tmp = null;
		},600000);
	},

	// get news list
	getNewsList : function(_hour,_day){
		var _this = this,
			date = new Date(),
			sum = localStorage["FERD_NOTICE_SUM"] ? Number(localStorage["FERD_NOTICE_SUM"]) : 0,
			isToday = (localStorage["FERD_NOTICE_GET_NEWS"] == (date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate()));
		if(sum == 0||(!isToday)){
			_this.getScript("//i.match.qq.com/notice/browser?action=getAll&ch="+_this.site+"&type=1&is_list=1&num=20&callback=window.FERD_UserData");
		}else{
			_this.showNotification(_this.pushType,_hour,_day);
			_this.pushType = "active";
		}
	},

	// ���Ȩ��
	checkPermission : function(){
		var _this = this,
			time_limit = 72,
			time = new Date().getTime();
			_tmp = localStorage["TECNENCT_FERD_LAST_TIME"] ? Number(localStorage["TECNENCT_FERD_LAST_TIME"]) : 0,
			_tmp_minute = ((time-_tmp)/60000).toFixed(1),
			_tmp_src = "";
		if(window.Notification.permission=="granted"){
			if((_this.entrance!="others"||_this.isPushTime())&&(_tmp_minute>2)){
				_this.getNewsList();
			}
			_this.autoNews();
		}else if(window.Notification.permission=="default"){
			var date = new Date(),
				time = date.getTime(),
				tmp_time = localStorage["TECNENCT_FERD_REQUESTED"] ? Number(localStorage["TECNENCT_FERD_REQUESTED"]) : 0,
				sep_time = ((time - tmp_time)/3600000).toFixed(1);
			if(_this.site=="edu"||_this.site=="cul"||_this.site=="games"){
				time_limit = 48;
			}else if(_this.site=="auto"||_this.site=="house"){
				time_limit = 24;
			}else if(_this.site=="ent"||_this.site=="finance"){
				time_limit = 168;
			}
			if(Number(sep_time) > time_limit){
				_this.isRequested(time);
				// �Զ��������� ֻ���chrome
				if(_this.browser=='chrome'){
					var iframe =  document.createElement("iframe");
					iframe.id = "tips-guide";
					iframe.style.position = "fixed";
					iframe.style.border = "none";
					iframe.style.top = "130px";
					iframe.style.left = "90px";
					iframe.style.zIndex = "9999";
					if(_this.site=="ent"||_this.site=="games"||_this.site=="edu"||_this.site=="auto"||_this.site=="finance"){
						_tmp_src = "http://www.qq.com/chrometips/tipsguide/guide_a.htm?site="+_this.site;
						iframe.style.height = "249px";
						iframe.style.width = "438px";
					}else{
						_tmp_src = "http://www.qq.com/chrometips/tipsguide/guide_b.htm?site="+_this.site;
						iframe.style.height = "148px";
						iframe.style.width = "331px";
					}
					iframe.src = _tmp_src;
					setTimeout(function(){
						document.body.appendChild(iframe);
					},1250);
				}
				// Ĭ�������
				Notification.requestPermission(function(permission){
					if(permission === 'granted') {
						_this.showFirst();
						_this.beehive("uYes");
						_this.autoNews();
					}else if(permission === 'denied'){
						_this.beehive("uNo");
					}
					if(_this.browser=='chrome'){
						document.getElementById("tips-guide").style.display = "none";
					}
				});
				_this.beehive("sQuery");
			}

		}
	},

	// ��ʾ��ӭ��Ϣ
	showFirst : function(){
		var _this = this;
		FERD_NavNotice.notification = new Notification(_this.noticeTitle,{
			body : _this.noticeBody,
			icon : _this.noticeIcon,
			tag : 1,
			requireInteraction : true
		});
		FERD_NavNotice.notification.onclick=function(){
			window.open(_this.noticeUrl);
			this.close();
		};
		function addOnBeforeUnload(e) {
			FERD_NavNotice.notification.close();
		}
		if(window.attachEvent){
			window.attachEvent('onbeforeunload', addOnBeforeUnload);
		} else {
			window.addEventListener('beforeunload', addOnBeforeUnload, false);
		}
	},
	
	// �Ƿ�������ʱ����
	isPushTime : function(){
		var date = new Date(),
			hour = date.getHours(),
			minute = date.getMinutes(),
			day = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate();
		if(hour<12){
			if(localStorage["TECNENCT_FERD_NOTICED_FIRST"] == day){
				return false;
			}else{
				return true;
			}
		}else if(hour>11 && hour<18){
			if(localStorage["TECNENCT_FERD_NOTICED_SECOND"] == day){
				return false;
			}else{
				return true;
			}
		}else if(hour>17){
			if(localStorage["TECNENCT_FERD_NOTICED_THIRD"] == day){
				return false;
			}else{
				return true;
			}
		}
	},

	// ��ʾ���Ի�֪ͨ
	showNotification : function(type,hour,day){
		var _this = this,
			s_date = new Date(),
			s_hour = s_date.getHours(),
			_notice_tit = "",
			news = JSON.parse(localStorage["FERD_NOTICE_NOTICE_CONTENT"]),
			index = localStorage["FERD_NOTICE_INDEX"] ? Number(localStorage["FERD_NOTICE_INDEX"]) : 0,
			sum = Number(localStorage["FERD_NOTICE_SUM"]),
			_tmp_tit = "";
		if(isNaN(index)||isNaN(sum)||index == sum||index > sum){
			return;
		}else{
			if(window.location.href.indexOf(news[index].url)>-1){
				index++;
				if(index > sum||index == sum){
					return;
				}
			}
			setTimeout(function(res){
				if(type=="time"){
					_this.pushType = "time";
					if(s_hour<12){
						_notice_tit = (day == 1)?_this.obj1[Math.floor(Math.random()*4)]:_this.obj1[Math.floor(Math.random()*3)];
					}else{
						_notice_tit = (day == 5)?_this.obj2[Math.floor(Math.random()*4)]:_this.obj2[Math.floor(Math.random()*3)];
					}
					_tmp_tit = news[index].title;
					if(news[index].title.length>19){
						_tmp_tit = news[index].title.substring(0,17)+"��";
					}
					_this.notification = new Notification(_notice_tit,{
						body : _tmp_tit,
						icon : news[index].url_img,
						tag : 1,
						requireInteraction : true
					});
					localStorage["TECNENCT_FERD_LAST_AUTO_TIME"] = (new Date()).getTime();
				}else{
					_this.pushType = "active";
					_this.notification = new Notification(news[index].title+"  [����鿴]",{
						icon : news[index].url_img,
						tag : 1,
						requireInteraction : true
					});
				}
				_this.notification.onclick=function(){
					_this.beehive("uClick",news[index].url);
					_this.pacBeehive(news[index].url);
					window.open(news[index].url);
					_this.notification.close();
				};
				function addOnBeforeUnload(e) {
					_this.notification.close();
				}
				if(window.attachEvent){
					window.attachEvent('onbeforeunload', addOnBeforeUnload);
				} else {
					window.addEventListener('beforeunload', addOnBeforeUnload, false);
				}
				_this.beehive("nShow");
				localStorage["FERD_NOTICE_INDEX"] = index+1;
			}, 2000);
			_this.isNoticed();
		}
	}
};
FERD_NavNotice.init();/*  |xGv00|9351b67a18804a0927884fb6942f8c21 */