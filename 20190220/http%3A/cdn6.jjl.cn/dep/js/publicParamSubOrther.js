
function getUrlSetCookieByParam(param, value){
	var params = makeStr(param, value);
	if(params){
		setCookSaveExt("JESONG_EXT_DATA",params,1000*60*60);
	}
}

function getCookReturnExt(name){ 
	var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");arr=document.cookie.match(reg);if(arr){return unescape(arr[2]);}else{return null;}
}


//传单个key和value
function makeStr(param, value){


	var cookie = getCookReturnExt("JESONG_EXT_DATA");
	
	var temp = existCookie(param, value, cookie);

	if(temp){
		return temp;
	}
	
	if(cookie == undefined){
		var globalParams = "#params:";
		var tempStr3 = globalParams+encodeURI(param)+","+encodeURI(value);
		return tempStr3;
	}else{
		if(cookie.lastIndexOf(",") == cookie.length-1){
			cookie += encodeURI(param)+","+ encodeURI(value)+",";
		}else{
			cookie += ","+encodeURI(param)+","+ encodeURI(value)+",";
		}
		if(cookie.length > 8){
			cookie = cookie.substring(0, cookie.length-1);
		}else{
			cookie = undefined;	
		}
		return cookie;
	}
	
}

function existCookie(param, value, cookie){
	if(cookie){
		if(cookie.indexOf(param) >= 0){
			var index = cookie.indexOf(param)+param.length;
			var preStr = cookie.substring(0, index+1);
			var str = cookie.substring(index+1, cookie.length);
			var str2;
			if(str.indexOf(",") >= 0){
				str2 = str.substring(str.indexOf(","), str.length);
				cookie = preStr+encodeURI(value)+str2;
			}else{
				cookie = preStr+encodeURI(value);
			}
			
			
			return cookie;
		}else{
			return undefined;
		}
	}else{
		return undefined;
	}
}


//可以传递多个参数  多个参数以逗号分隔，key和value的参数length要一致
function getByParam(param, value) {
	var queryStr;
	queryStr="#params:";
	if(param != undefined && param.indexOf(",") != -1){
		var paramArr = param.split(",");
		var valueArr = value.split(",");
		if(paramArr.length == valueArr.length){
			for(var i = 0; i < paramArr.length; i++){
				if(paramArr[i] === "firstChannleType"){
					queryStr += encodeURI(paramArr[i])+","+encodeURI(valueArr[i])+",";
				}
			}
		}
	}else{
		if(param === "firstChannleType"){
			queryStr += encodeURI(param)+","+encodeURI(value)+",";
		}
	}
	if(queryStr.length > 8){
		queryStr = queryStr.substring(0,queryStr.length-1);
	}else{
		queryStr = undefined;	
	}
	return queryStr;
}

function setCookSaveExt(name,value,t)
{
	if(typeof t =='undefined' ||t==null) t =60*30*24*60*60*1000;  
	var exp  = new Date(); exp.setTime(exp.getTime() + t);
	document.cookie = name + "="+ escape (value)+ ";expires=" + exp.toGMTString();
}
