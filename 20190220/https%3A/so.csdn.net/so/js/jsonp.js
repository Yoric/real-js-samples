function jsonp(url, data, fnSucc, cbName)
{
	var fnName='jsonp_'+Math.random();
	fnName=fnName.replace('.', '');
	
	data[cbName]=fnName;
	
	window[fnName]=function (json)
	{
		fnSucc && fnSucc(json);
		
		oHead.removeChild(oS);
		window[fnName]=null;
	};
	
	//data->&
	var arr=[];
	for(var i in data)
	{
		arr.push(i+'='+encodeURIComponent(data[i]));
	}
	
	var str=url+'?'+arr.join('&');
	
	//请求
	var oS=document.createElement('script');
	
	oS.src=str;
	
	var oHead=document.getElementsByTagName('head')[0];
	oHead.appendChild(oS);
}


function getByClass(oParent, sClass)
{
	if(oParent.getElementsByClassName)
	{
		return oParent.getElementsByClassName(sClass);
	}
	
	var aEle=oParent.getElementsByTagName('*');
	
	var re=new RegExp('\\b'+sClass+'\\b');
	var result=[];
	
	for(var i=0;i<aEle.length;i++)
	{
		if(re.test(aEle[i].className))
		{
			result.push(aEle[i]);
		}
	}
	
	return result;
}

function getPos(obj)
{
   var l=0;
   var t=0;
   while(obj)
   {
	   l+=obj.offsetLeft;
	   t+=obj.offsetTop;
	   obj=obj.offsetParent;   
   };
   
   return {left:l,top:t}
};


function domReady(fn){
	if(document.addEventListener){  
		document.addEventListener('DOMContentLoaded',function(){
			fn && fn();	
		},false);	
	}else{
		document.onreadystatechange=function(){
			if(document.readyState=='complete'){
				fn && fn();	
			}	
		}	
	}	
}

function GetRequest() 
{
	var url = location.search;
	var theRequest = new Object();  
	if(url.indexOf("?") != -1) 
	{   
		var str = url.substr(1);  
		strs = str.split("&");  
		for(var i = 0; i < strs.length; i ++)  
		{   
			theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);  
		}  
	}  
		return theRequest;  
}
