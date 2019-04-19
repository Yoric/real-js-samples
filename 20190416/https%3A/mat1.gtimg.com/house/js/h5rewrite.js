(function() {

	var pcurl = window.location.href;
	var pathname = window.location.pathname;

	var ARTICLE_ID = pathname.replace(/(\/|a|.htm)|(_\w+).htm|/ig,'');
	var quyuArr = ['house.qq.com', 'ly.qq.com', 'city.qq.com'];
	var currSite = '';

	// sy\nj\yichang 沈阳\南京\宜昌 不在大网频道
	var cityArr = {
		'house': 'house',
		'bj': 'beijing',
		'jm': 'jiangmen',
		'news': 'news',
		'sg': 'shaoguan',
		'zs': 'zhongshan',
		'cd': 'chengdu',
		'cs': 'changsha',
		'cq': 'chongqing',
		'dg': 'dongguan',
		'fs': 'foshan',
		'fz': 'fuzhou',
		'gz': 'guangzhou',
		'hz':'hangzhou',
		'huizhou': 'huizhou',
		'qy': 'qingyuan',
		'sz': 'shenzhen',
		'sh': 'shanghai',
		'wh': 'wuhan',
		'xm': 'xiamen',
		'xian': 'xian',
		'zh': 'zhuhai',
		'zz': 'zhenzhou'
	};
	var currCity = cityArr[pcurl.split('/')[2].split('.')[0]];

	var i;
	for(i = quyuArr.length - 1; i >= 0; i--) {
		if(new RegExp(quyuArr[i]).test(pcurl)) {
			currSite = quyuArr[i];
			break;
		}
	}

	function reWriteUrl(pathname) {
		var surl = '//' + window.location.hostname + pathname + '?newspc';
		return reNewsWriteUrl(surl);
	}

	function reNewsWriteUrl(url) {
		var splits = url.split('/')[2].split('qq.com')[0].split('.');
		var siteName;
		if (splits.length === 3) {
			siteName = splits[0] + '_' + splits[1];
		} else {
			siteName = splits[0];
		}
		var aids=url.split('/a/')[1].split('.htm')[0].replace(/[^0-9]/g, '');
		var site='';

		if(siteName && aids){
			if(siteName.split('.').length>2){
				var len = siteName.split('.').length;
				var i;
				for(i = 0; i < len; i ++){
						site+=siteName.split('.')[i];
						if(i < len-2){
							site += '_';
						}
				}
			}else{
				site=siteName.split('.')[0];
			}
			return '//xw.qq.com/' + siteName + '/' + aids;
		}
	};

	function sendBoss(sOp) {
		var sRef = sRef || '';
		var sUrl = encodeURIComponent(window.location.href);
		var g_btrace_BOSS = new Image(1,1);
		g_btrace_BOSS.src = '//btrace.qq.com/kvcollect?BossId=3355&Pwd=1959290082&sEvent='+ ARTICLE_ID +'&sOp='+ sOp + '&iFromtype=5&sUrl='+ sUrl +'&sRef='+ sRef +'&_dc=' + Math.random();
	}

	function redirect(url) {
		if (url) {
			window.location.href = url;
		}
	}
	
	var targetUrl = '';
	// 移动端、区域、文章
	var isMobile = (/Android|webOS|iPhone|Windows Phone|iPod|BlackBerry|SymbianOS/i).test(navigator.userAgent)
	if(isMobile && currSite ) {
		if(pcurl.indexOf('/a/') > 0) {
			if(pcurl.indexOf('?newspc') > 0) {
				// 回跳的处理
				if(/house.qq.com/.test(window.location.host) && currCity) {
					// 大网新闻频道 - 默认新闻页
					sendBoss('article_source_xw');
					targetUrl = reNewsWriteUrl(pcurl);
					redirect(targetUrl);
					return;
				}
			} else if(pcurl.indexOf('njtm') < 0 && pcurl.indexOf('?pc') < 0) {
				// pc 发起跳转
				sendBoss('article_'+quyuArr[i].split('.')[0]);
				targetUrl = reWriteUrl(pathname);
				redirect(targetUrl);
				return;
			}
		} else if (pcurl.indexOf('?mobile') < 0 && /house.qq.com/.test(window.location.host) ) {
			sendBoss('article_source_xw');
			targetUrl = '//xw.qq.com/m/house/index.htm';
			redirect(targetUrl);
			return;
		}
		sendBoss('article_source_pc');
	}

})();/*  |xGv00|aedf7bc6d75d9557b7117f1df7b9db3f */