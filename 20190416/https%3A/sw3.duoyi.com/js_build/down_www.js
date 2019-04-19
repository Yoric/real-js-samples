var sw3_ver = "https://dl.duoyi.com/sw3/setup/sw3Setup_1.0.112.exe",sw3_size = "3.69 GB",sw3_verNum = "1.0.112",sw3_patch = "//dl.duoyi.com/sw3/patch/patch_1.0.122.exe", sw3_date = "2019-03-13";var sw3_ver_m = {'ver_url':'https://dl.duoyi.com/sw3/setup/sw3MiniSetup_1.0.5.exe','ver_size':'335MB','ver_num':'1.0.5','ver_patch':'//dl.duoyi.com/sw3/patch/patch_1.0.122.exe','ver_date':'2017-11-24'};var sw3_ver_downloader = {'ver_url':'https://dydl.duoyi.com/zm/win/miniinstall/mini8/SwSetup.exe','ver_size':'2.52MB','ver_num':'1.0.0','ver_patch':'//dl.duoyi.com/sw3/patch/patch_1.0.122.exe','ver_date':'2017-11-09'};

;(function(){
    var cookie = function(name, value, days){
		if(value === undefined){
			var cookiestring = '; ' + document.cookie;
			var cookies = cookiestring.split('; ' + name + '=');
			if (cookies.length === 2){
				return cookies.pop().split(';').shift();
			}
			return null;
		}
		else {
			if(value === false){
				days = -1;
			}
			var expires = '';
			if (days) {
				var date = new Date();
				date.setTime(date.getTime() + ( days * 24 * 60 * 60 * 1000 ));
				expires = '; expires='+date.toGMTString();
			}
			document.cookie = name + '=' + value + expires + '; path=/';
		}
	};
    var ag = cookie('fromadid') || '';
    if (ag){
        sw3_ver = sw3_ver.replace(/([^?]*)(.*)/i,'$1?f=ad&ag='+ag+'&t=direct');
    }
})();