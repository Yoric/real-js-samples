/*
	打开对话框接入到指定的客服
	cId:公司id
	tar：客服登陆账号
	*/
	function openJesongChatByCus(cId,tar){
		return openJesongChat(cId,'c',tar);
	}
	/*
	打开对话框接入到指定的客服分组
	cId:公司id
	tar：客服分组ID
	*/
	function openJesongChatByGroup(cId,tar){
		return openJesongChat(cId,'g',tar);
	}
	function openJesongChat(cId,c,tar){
		if("undefined" == typeof jesong){
			var p='';
			if( c == 'c')
				p = 'n='+tar;
			else if(c == 'g'&&tar!=null&&tar!='0')
				p = 'g=' + tar;
			openNoJesongJsChat(cId,p);
		}else{
			jesong.win.openChat(c,tar);
		}
		return false;
	}	
	function openNoJesongJsChat(cId,params){
				var url = "http://jesong.jjl.cn/live/" +'chat.do?c='+cId;
				url = url +"&chatUrl="+window.encodeURIComponent(window.location.href);
				
				if(typeof params == 'string' &&params.length !=0 ){
					url += '&'+params;
				}
				
				if(getCook('JESONG_VISITOR_ID'))
				{
					url = url +"&v="+getCook('JESONG_VISITOR_ID');
				}
				if(getCook('JESONG_USER_ID'))
				{
					url = url +"&u="+getCook('JESONG_USER_ID');
				}
				  
				if(getCook("im_refer")){
					url = url +"&ref="+window.encodeURIComponent(getCook("im_refer"));
				}
				else
				{
					var refer = getPageRefer();
					if(refer != ""){
				     url = url +"&ref="+window.encodeURIComponent(refer);
				  }
				}
				
				var exts = null;
				if(getCook("JESONG_EXT_DATA")){
					exts = getCook("JESONG_EXT_DATA");
				}
				if(typeof(JESONG_EXT_DATA) != "undefined"){
					exts = JESONG_EXT_DATA;
				}
				if(exts != null && exts != ""){
					url = url + "&ext="+window.encodeURIComponent(exts);
				}
				var p = "height=525,width=800,directories=no,location=no,menubar=no,resizeable=no,status=no,toolbar=no,top=100,left=200";
				try{
					var cw = window.open(url,'chat_'+cId,p);cw.focus();
				}catch(e){
					if(c.force)window.location = url;				
				}
	}
	function jesongGetDomain (url){
		var domain = url.match(/(\w+):\/\/([^\:|\/]+)(\:\d*)?(.*\/)([^#|\?|\n]+)?(#.*)?(\?.*)?/i);
		if(domain.length>2){
			return domain[2];
		}else{
			return null;
		}
	}
	function getPageRefer()
	{
		if(document.referrer)
		{
			try{
				var refer = document.referrer;
				      
				if(refer){
					var referDomain = jesongGetDomain(refer);
					var currDomain = window.location.host;
				  if(referDomain && referDomain == currDomain){
				  	refer = "";
				  }
				 }
				 
				 if(refer != ""){
				 	return refer;
				 }
			}catch(e){};
		}
		return "";
	}
	function getCook(name)
	{ 
		var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");arr=document.cookie.match(reg);if(arr){return unescape(arr[2]);}else{return null;}
	}
	function setCook(name,value,t)
	{
		if(typeof t =='undefined' ||t==null) t =60*30*24*60*60*1000;  
		var exp  = new Date(); exp.setTime(exp.getTime() + t);
		document.cookie = name + "="+ escape (value)+ ";expires=" + exp.toGMTString();
	}
	function initJesongRefer()
	{
		var refer = getPageRefer();
		if(refer != ""){
			setCook('im_refer',refer,10*60*1000);
		}
	}
	initJesongRefer(); //开启cookie记录来源
