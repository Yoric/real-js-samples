/**
 * ��ǰ�� ���� Util
 * @author kks
 * @version 1.0
 * @since 2013.04.05
 */

String.prototype.replaceAll = function( searchStr, replaceStr ){
    return this.split( searchStr ).join( replaceStr );
}

String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, "");
}

// ��ǰ���� & ��ǰ���� ����
$(window).bind("message", function(event){
    if("#detailIfrm" == event.originalEvent.data || "#returnIfrm" == event.originalEvent.data){
        $(event.originalEvent.data).remove();
    }
});

function _Openpopup(url, _w, _h){
	window.open(url, "_popup", "width="+_w+",height="+_h+",scrollbars=no,status=no,location=no");
}


//[Ajax Call ����] --------------------------------------------------
/**
parameter�� ������, post, �ƴϸ� get ������� ajax�� call�Ѵ�.
callback �Լ��� ������, ȣ�� ����� callback �Լ� argument�� �ѱ��.
callback �Լ��� ������, ȣ�� ����� return�Ѵ�.

params �� ������ ���� ���·�.
params = "method=getCookieVal&param="+paramName+"&authParam="+authParamName

ex> getSeverCookieVal ����.
*/
// �����
function callAjax( url, params, callBack )
{

	var pageRequest = false ; // ajax object�� ���� ����.
	/*@cc_on
	   @if (@_jscript_version >= 5)
	      try {
	      	pageRequest = new ActiveXObject("Msxml2.XMLHTTP") ;
	      }
	      catch (e){
	         try {
	        	 pageRequest = new ActiveXObject("Microsoft.XMLHTTP") ;
	         } catch (e2){
	         	pageRequest = false;
	         }
	      }
	   @end
	@*/

	if (!pageRequest && typeof XMLHttpRequest != 'undefined')
		pageRequest = new XMLHttpRequest();

	if (pageRequest) { // pageRequest�� true�� ��츸.
		try
		{
			var isAsynch = false ;

			//if ( callBack != '' )
			//	isAsynch = true ;
			if ( params != '' )	{
				pageRequest.open('POST', url, isAsynch) ;
				//var params = "method=getCookieVal&param="+paramName+"&authParam="+authParamName ;
				pageRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				pageRequest.setRequestHeader("Content-length", params.length);
				pageRequest.setRequestHeader("Connection", "close");

				pageRequest.send(params);
			} else {
				pageRequest.open('GET', url, isAsynch) ;
				pageRequest.send(null);
			}

			if (pageRequest.status==200 ) {

		 		var returnVal = pageRequest.responseText ;

				if ( callBack != '' ) {
					eval(callBack+"('"+returnVal+"')");
				} else {
					return returnVal ;
				}

	   		} else {

	   			var returnVal = 'FAIL' ;

			    if ( callBack != '' ) {
					eval(callBack+"('"+returnVal+"')");
				} else {
					return returnVal ;
				}
	   		}
		}
		catch (e)
		{
			var returnVal = 'FAIL' ;

		    if ( callBack != '' ) {
				eval(callBack+"('"+returnVal+"')");
			} else {
				return returnVal ;
			}
		}
	}
}

//�񵿱��
function callAjaxAsynch(url, params, callBack)
{
	var pageRequest = false ; // ajax object�� ���� ����.
	/*@cc_on
	   @if (@_jscript_version >= 5)
	      try {
	      	pageRequest = new ActiveXObject("Msxml2.XMLHTTP") ;
	      }
	      catch (e){
	         try {
	        	 pageRequest = new ActiveXObject("Microsoft.XMLHTTP") ;
	         } catch (e2){
	         	pageRequest = false;
	         }
	      }
	   @end
	@*/

	if (!pageRequest && typeof XMLHttpRequest != 'undefined')
		pageRequest = new XMLHttpRequest();

	if (pageRequest)
	{
		// pageRequest�� true�� ��츸.
		try
		{
			var isAsynch = true ;
			if ( params != '' )	{
				pageRequest.open('POST', url, isAsynch) ;
				//var params = "method=getCookieVal&param="+paramName+"&authParam="+authParamName ;
				pageRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				pageRequest.setRequestHeader("Content-length", params.length);
				pageRequest.setRequestHeader("Connection", "close");

				pageRequest.send(params);
			} else {
				pageRequest.open('GET', url, isAsynch) ;
				pageRequest.send(null);
			}

			pageRequest.onreadystatechange = function()  {
				if (pageRequest.readyState == 4)
				{
					var returnVal = 'FAIL' ;
					if (pageRequest.status==200 )
					{
						returnVal = pageRequest.responseText;
					}

					if (typeof(callBack) == "function") {
						callBack(returnVal);
					}
					else if (typeof(callBack) == "string") {
						if ( callBack != '' ) {
							eval(callBack+"('"+returnVal+"')");
						}
					}
				}
			};
		}
		catch (e)
		{
			alert(e);
			var returnVal = 'FAIL' ;

			if (typeof(callBack) == "function") {
				callBack(returnVal);
			}
			else if (typeof(callBack) == "string") {
				if ( callBack != '' ) {
					eval(callBack+"('"+returnVal+"')");
				}
			}
		}
	}
}

//�������˾� center
function launchCenter(url, name, width, height, scroll){
	if (scroll == undefined) scroll = "no";

	var str = "height=" + height + ",innerHeight=" + height;
	str += ",width=" + width + ",innerWidth=" + width;
	str += ",status=no, resizable=no, menubar=no, toolbar=no, location=no, directories=no, scrollbars=" + scroll;

	if (window.screen)
	{
		var ah = screen.availHeight - 30;
		var aw = screen.availWidth - 10;

		var xc = (aw - width) / 2;
		var yc = (ah - height) / 2;

		str += ",left=" + xc + ",screenX=" + xc;
		str += ",top=" + yc + ",screenY=" + yc;
	}

	return window.open(url, name, str);
}

//�Ű��ϱ�
function _fnReportContent(contNo, clfCd, contCd){
	var url = "/community/AuthShoppingInfoAction.tmall?method=getContentsReporting&contNo=" + contNo
			+ "&contDclObjClfCd=" + clfCd
			+ "&contDclObjContCd=" + contCd;

	if (parent.funcCheckIsLogin()){
		var _win = launchCenter(url, "contentReportPopup", 415, 490, "no");
		_win.focus();
	} else {
		parent.openLogin(3, "", url, 415, 490, "Y");
	}
}

//�� ī��Ʈ ����
function _fnContTabCountRefresh(prdNo, lCtgrNo, contTyp){
	try
	{
		var _callBack = function(returnVal)
			{
				if (returnVal != "FAIL") {
					var jsonObj = eval(returnVal);

					if (contTyp != undefined)
					{
						$(".prdc_tab").each(function(){
							if(contTyp == "R"){
								$(this).children("li:eq(2)").find("em:first").text("(" + jsonObj[0].fixThreeday + ")");
								$(this).children("li:eq(2)").find("em:last").text("(" + jsonObj[0].auctStckthree + ")");
							}
						});
					} else {
						$(".prdc_tab").each(function(){
							$(this).children("li:eq(2)").find("em:first").text("(" + jsonObj[0].fixThreeday + ")");
							$(this).children("li:eq(2)").find("em:last").text("(" + jsonObj[0].auctStckthree + ")");
						});
					}
				}
			};

		var url = "/product/SellerProductDetailAjax.tmall";
		var param = "method=sellerProductDetailCountFourJSON&prdNo=" + prdNo + "&ldispCtgrNo=" + lCtgrNo;

		callAjaxAsynch(url, param, _callBack);
	}
	catch (e){}
}

//�񵿱��
function callAjaxAsynch(url, params, callBack)
{
	var pageRequest = false ; // ajax object�� ���� ����.

	if (!pageRequest && typeof XMLHttpRequest != 'undefined')
		pageRequest = new XMLHttpRequest();

	if (pageRequest)
	{
		// pageRequest�� true�� ��츸.
		try
		{
			var isAsynch = true ;
			if ( params != '' )	{
				pageRequest.open('POST', url, isAsynch) ;
				pageRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				pageRequest.setRequestHeader("Content-length", params.length);
				pageRequest.setRequestHeader("Connection", "close");

				pageRequest.send(params);
			} else {
				pageRequest.open('GET', url, isAsynch) ;
				pageRequest.send(null);
			}

			pageRequest.onreadystatechange = function()  {
				if (pageRequest.readyState == 4)
				{
					var returnVal = 'FAIL' ;
					if (pageRequest.status==200 )
					{
						returnVal = pageRequest.responseText;
					}

					if (typeof(callBack) == "function") {
						callBack(returnVal);
					}
					else if (typeof(callBack) == "string") {
						if ( callBack != '' ) {
							eval(callBack+"('"+returnVal+"')");
						}
					}
				}
			};
		}
		catch (e)
		{
			alert(e);
			var returnVal = 'FAIL' ;

			if (typeof(callBack) == "function") {
				callBack(returnVal);
			}
			else if (typeof(callBack) == "string") {
				if ( callBack != '' ) {
					eval(callBack+"('"+returnVal+"')");
				}
			}
		}
	}
}

//	Iframe ������ ����
function adjustIframeHeight($frm){
	if($frm)
		$frm.height($frm.contents().find('body').outerHeight()+30);
}

//���̾� ó��
function _showLayer(lyNm){
	var obj = document.getElementById(lyNm);
	if (obj == null)	return;
	obj.style.display = "block";
}
function _hideLayer(lyNm){
	var obj = document.getElementById(lyNm);
	if (obj == null) 	return;
	obj.style.display = "none";
}
//��ǰ�� ����
function _fnGoPrdDetail(prdNo, str){
	var obj = document.frmPrview;
	if (str == "_opener")		//�̵�
	{
		try
		{
			opener.top.window.name = new Date();
			obj.target = opener.top.window.name;
	    }
	    catch(e){
		    str = "_blank";
	    	obj.target = str;
	    }
	} else {					//��â
		obj.target = str;
	}
	obj.action = "/product/SellerProductDetail.tmall?method=getSellerProductDetailView&prdNo=" + prdNo + "&xzone=preview^popup";
	obj.submit();

	if (str == "_opener") self.close();	//�̵��ÿ��� �˾�â �ݱ�
}

String.prototype.Digit2Comma = function()
{
	var num = this;
	var argStr = num.trim();
	var rtnStr = "";
	var split1 = "";
	var split2 = "";
	var isMinus = false;

	if (argStr == "") return "";

	if (num < 0) {
		num *= -1;
		argStr = num+"";
		isMinus = true;
	}

	if (argStr.indexOf(".") > 0) {
		split1 = argStr.substring(0, argStr.indexOf("."));
		split2 = argStr.substr(argStr.indexOf("."));
		argStr = split1;
	}

	var commaPos = argStr.length % 3;

	if (commaPos) {
		rtnStr = argStr.substring(0, commaPos);
		if (argStr.length > 3)
			rtnStr += ",";
	} else {
		rtnStr = "";
	}

	for ( var i = commaPos; i < argStr.length; i += 3) {
		rtnStr += argStr.substring(i, i + 3);
		if (i < argStr.length - 3)
			rtnStr += ",";
	}

	if (isMinus)
		rtnStr = "-" + rtnStr;
	return rtnStr + split2;
}

//[ȸ�� �α��� ] ------------------------------------------------------
/**
 * �α��� Ȯ��
 * @return
 */
function _fnCheckMemberAuth(){
	var _chkAuth = function(returnVal){
		if (returnVal == "FAIL"){
			alert('���� ��ְ� �ֽ��ϴ�. �����ͷ� ���� �ּ���.');
			return false;
		}
		var jsonObj = eval(returnVal);
		return parseInt(jsonObj[0]) > 0;
	};

	var url = "/product/SellerProductDetailAjax.tmall?method=sellerProductDetailAuthMemberJSON";
	return _chkAuth(callAjax(url, '', ''));
}