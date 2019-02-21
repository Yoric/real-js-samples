//获取cookie
function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++) {
	 var c = ca[i];
	 while (c.charAt(0)==' ') c = c.substring(1);
	 if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
	}
	//如果没有获取到城市cookie，默认取1，表示取北京
	if (cname == 'gr_user_id') {
		return null;
	} else if (cname == 'referweb') {
		return null;
	} else {
		return '1';
	}
}
// 写cookie
function setCook(name,value,t){
	if(typeof t =='undefined' ||t==null) t =60*30*24*60*60*1000;
	var exp  = new Date(); exp.setTime(exp.getTime() + t);
	document.cookie = name + "="+ escape (value)+ ";expires=" + exp.toGMTString();
}
function jesongGetDomain (url){
	var domain = url.match(/(\w+):\/\/([^\:|\/]+)(\:\d*)?(.*\/)([^#|\?|\n]+)?(#.*)?(\?.*)?/i);
	if(domain.length>2){
		return domain[2];
	}else{
		return null;
	}
}
function getPageReferweb(){
	// console.log('cookie(referweb)', cookie('referweb'))
	if (cookie('referweb') != null) {
		// console.log(1111);
		return false;
	} else {
		// console.log(2222);
		if(document.referrer){
			try{
				var refer = document.referrer;
				// console.log(3333);
				if(refer){
					var referDomain = jesongGetDomain(refer);
					var currDomain = window.location.host;
					if(referDomain && referDomain == currDomain){
						// 推广来源和页面同源
						refer = "";
					} else {
						// 推广来源首次进入页面写cookie
						if (refer == window.location.href) {
							// refer与url相同
                            setCook('referweb', refer, 1000*60*60);
                            return false;
						} else {
							// refer与url不同，以url为准
                            setCook('referweb', window.location.href, 1000*60*60);
                            return false;
						}
					}
				 } else {
                    console.log('推广来源refer异常,以url为准');
                    setCook('referweb', window.location.href, 1000*60*60);
                    return false;
                 }
				 //if(refer != ""){
					//return refer;
				 //}
			}catch(e){
				console.log('获取refer异常');
			};
		} else {
			// console.log('不是推广过来的页面，网站调用');
			var urll = window.location.href;
			var main = urll.match(/(\w+):\/\/([^\:|\/]+)(\:\d*)?(.*\/)([^#|\?|\n]+)?(#.*)?(\?.*)?/i);
			// console.log('main', main[7])
			// if (main[7] != 'undefined') {
				// console.log('refer写入cookie成功')
                setCook('referweb', urll, 1000*60*60);
                return false;
			// } else {
            //     console.log('非法注入');
            //     return false;
			// }
		}
	}
}