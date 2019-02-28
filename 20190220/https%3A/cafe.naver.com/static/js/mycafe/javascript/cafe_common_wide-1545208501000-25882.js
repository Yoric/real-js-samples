/*
 * cafe_common_wide.js 2018-07-08
 *
 * Copyright NAVER Corp. All rights Reserved.
 * NAVER PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */

/**
 * encoding info : MS949 
 * Ŀ�Խÿ� ���� ����!
 */
document.domain = "naver.com";

var NS4;
var IE4;
var sUserAgent = navigator.userAgent;
var isOpera = sUserAgent.indexOf("Opera") > -1;
var isIE = sUserAgent.indexOf("compatible") > -1 
           && sUserAgent.indexOf("MSIE") > -1
           && !isOpera;

function getIEVersion()
{ 
	var rv = -1;
	if (navigator.appName == 'Microsoft Internet Explorer') {
	var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})"); 
	if (re.exec(sUserAgent) != null) 
		rv = parseFloat( RegExp.$1 );
	} 
	return rv; 
}

if (isIE)
{
    IE4 = true;
    NS4 = false;
}
else
{
    IE4 = false;
    NS4 = true;
}
var isWin = (navigator.appVersion.indexOf("Win") != -1)

var goWindows = {};

function popupCenter(url, title, w, h) {
    // Fixes dual-screen position                         Most browsers      Firefox
    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : window.screenX;
    var dualScreenTop = window.screenTop != undefined ? window.screenTop : window.screenY;

    var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    var left = ((width / 2) - (w / 2)) + dualScreenLeft;
    var top = ((height / 2) - (h / 2)) + dualScreenTop;

	var newWindow = window.open(url, title, 'toolbar=0,status=0,menubar=0,location=0,scrollbars=yes,resizable=yes,width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

    if (!newWindow) {
        alert("�����Ͻ� ����� ���ܵǾ����ϴ�.\n�˾� ������ �����Ͻ� �Ŀ� �ٽ� �õ��� �ּ���.");
    }

    // Puts focus on the newWindow
    if (window.focus) {
        newWindow.focus();
    }
}

// iframe ���ο��� �˾� �߾����� ��� �� left, top ����
function popupCenterFromIframe(url, title, w, h) {
    // Fixes dual-screen position                         Most browsers      Firefox
    var dualScreenLeft = window.parent.screenLeft != undefined ? window.parent.screenLeft : window.parent.screenX;
    var dualScreenTop = window.parent.screenTop != undefined ? window.parent.screenTop : window.parent.screenY;

    var width = window.parent.innerWidth ? window.parent.innerWidth : parent.document.documentElement.clientWidth ? parent.document.documentElement.clientWidth : screen.width;
    var height = window.parent.innerHeight ? window.parent.innerHeight : parent.document.documentElement.clientHeight ? parent.document.documentElement.clientHeight : screen.height;

    var left = ((width / 2) - (w / 2)) + dualScreenLeft;
    var top = ((height / 2) - (h / 2)) + dualScreenTop;

	var newWindow = window.open(url, title, 'toolbar=0,status=0,menubar=0,location=0,scrollbars=yes,resizable=yes,width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

    if (!newWindow) {
        alert("�����Ͻ� ����� ���ܵǾ����ϴ�.\n�˾� ������ �����Ͻ� �Ŀ� �ٽ� �õ��� �ּ���.");
    }

    // Puts focus on the newWindow
    if (window.focus) {
        newWindow.focus();
    }
}

function open_window(url, name, width, height, feature) {
    var windowX = Math.ceil( (window.screen.width  - width) / 2 );
    var windowY = Math.ceil( (window.screen.height - height) / 2 );
    var specs = feature+",width="+width+",height="+height+",left="+windowX+",top="+windowY;
	var oWnd = goWindows[name];

	if(!oWnd || oWnd.closed) {
		if(isIE) {
			oWnd = window.open("", name, specs);
			if (!oWnd) {
				alert("�����Ͻ� ����� ���ܵǾ����ϴ�.\n�˾� ������ �����Ͻ� �Ŀ� �ٽ� �õ��� �ּ���.");
			} else {
				oWnd.location.href=url;
				goWindows[name] = oWnd;
			}
		} else {
			oWnd = window.open(url, name, specs);
			goWindows[name] = oWnd;
		}
	} else {
		oWnd.location.href = url;
	}

	return oWnd;
}
function open_wnd(url, name, width, height)
{
	var oWnd = open_window(url, name, width, height, "toolbar=0,menubar=0,resizable=yes,scrollbars=no");
	return oWnd;
}
function open_wnd_post(url, name, width, height)
{
	var formElement = document.createElement("form");
	document.body.appendChild(formElement);
	var windowX = Math.ceil( (window.screen.width  - width) / 2 );
	var windowY = Math.ceil( (window.screen.height - height) / 2 );
	var oWin = window.open("", name, "toolbar=0,menubar=0,resizable=yes,scrollbars=no,width=" + width +",height=" + height+",left="+windowX+",top="+windowY );
	formElement.target = name;
	formElement.method = "post";
	formElement.action = url;
	formElement.submit();
	document.body.removeChild(formElement);
}
function popup(url, name, width, height, scrollbars)
{
    var oWnd = open_window(url, name, width, height, "toolbar=0,menubar=0,resizable=yes,scrollbars="+scrollbars);
    return oWnd;
}
function pop(url,width,height,flag)
{
    if (flag == 1 )
        var oPop = open_window(url, "", width, height, "toolbar=0,menubar=0,scrollbars=yes,resizable=yes");    
    else
        var oPop = open_window(url, "", width, height, "toolbar=0,menubar=0,scrollbars=no,resizable=yes");    
    return oPop;        
}


function openWindow(url, name, width, height, feature) {
	try {
		this.childWin = open_window(url, name, width, height, feature);
	} catch(e) {}

	if(this.childWin && !this.childWin.closed) {this.childWin.focus();}
}

function findLoginUrl(returnUrl, popupLogin) {
    if (returnUrl == null || returnUrl == '') {
        returnUrl = encodeURIComponent(document.location.href);
    } else {
    	// white list ������� ������ ����, ArticleRead, PageRead �� �������ش�.
    	if(returnUrl.match("/ArticleRead\.nhn")) {
    		returnUrl = encodeURIComponent(returnUrl);
    	} else {
    		returnUrl = encodeURIComponent(returnUrl);
    	}
    }
        
    if(returnUrl.match("#$")) returnUrl = encodeURIComponent(returnUrl.substring(0, returnUrl.length-1));
	var loginUrl = "https://nid.naver.com/nidlogin.login?mode=form";
	var templateParameter = (popupLogin)? '&template=plogin':'';	
	var redirectParameter = '&url=' + returnUrl;
    
	return loginUrl + templateParameter + redirectParameter;
}

function toLoginPage(returnUrl) {
    top.location.href = findLoginUrl(returnUrl);
}

function popupLoginPage(openerUrl) {
    var pOpenerUrl = (openerUrl == null || openerUrl == '')? document.location : openerUrl;
	var returnUrl = 'http://' + document.location.host + '/OpenerRedirect.nhn?openerurl=' + encodeURIComponent(pOpenerUrl);
	var oWnd = open_wnd(findLoginUrl(returnUrl, true), "naverLoginPop", 410, 280);
	if (!oWnd) {
		alert("�����Ͻ� ����� ���ܵǾ����ϴ�.\n�˾� ������ �����Ͻ� �Ŀ� �ٽ� �õ��� �ּ���.");
    }
    return oWnd;
}

function toCertPage(rurl, surl){
	if (rurl == null || rurl == '')
        rurl = document.location.href;
        
	var url = "https://nid.naver.com/user/cert.nhn?todo=cert_start&svc=common&rurl=" + rurl;
    
    if(surl != null && surl != '')
    	url += "&surl="+surl;
    
    top.location.href = url;
}

function toAdultLoginPage(loginUrl) {    
    var url = loginUrl + encodeURIComponent(document.location.href);
    
    top.location.href = url;
}

function LH_create()
{
    this._list = new Array;
    this._isLoaded = false;
    this.add = function(strExec)
    {
        this._list[this._list.length] = strExec;        
    }
    this.exec = function()
    {
        if(this._isLoaded) return;
        this._isLoaded = true;
        var list_len = this._list.length;
        for (var i = 0; i < list_len; i++)
        {
            try{
                eval(this._list[i]);
            }catch(e){}
        }      
    }
}

function LH_exec()
{
    if(LH) LH.exec();    
}

String.prototype.cut = function(len, tail) 
{
    var str = this;
    var l = 0;
    for (var i=0; i<str.length; i++) 
    {
        l += (str.charCodeAt(i) > 128) ? 2 : 1;
        if (l > len) return str.substring(0,i) + tail;
    }
    return str;
}
String.prototype.bytes = function() 
{
    var str = this;
    var l = 0;
    for (var i=0; i<str.length; i++) 
        l += (str.charCodeAt(i) > 128) ? 2 : 1;

    return l;
}
String.prototype.trim = function()
{
    return this.replace(/(^\s*)|(\s*$)/g, ""); 
}
function replaceBackslash(paramStr) 
{
    var str = paramStr;
    if (str.indexOf("\\") >= 0) str = str.replace(/\\/g, "\\\\");
    if (str.indexOf("\"") >= 0) str = str.replace(/\"/g, "\\\"");
    return str;
}
function setTop()
{
	window.scrollTo(0,0);
}

// ī�� �� Ifreame �ֻ������ �������� ��Ŀ���ǵ��� ��ũ���� ����
function setTopInIframe() {
	$("cafe_main").scrollIntoView();
}

//ī�� �� ��� �������� �������� ��Ŀ���ǵ��� ��ũ���� ����
function setTopInIframeComment() {
	var nWaitForContentAreaLoad = 300;
	setTimeout (function(){
		try {
			document.getElementById("cafe_main").contentWindow.document.getElementById("cmtMenu").scrollIntoView();
		} catch(e){}
	}, nWaitForContentAreaLoad);
}

// ī��� Iframe ���� �������� Panel �ֻ������ �������� ��Ŀ���ǵ��� ��ũ���� ����
function setTopInPanel()
{
	$("main-area").scrollIntoView();
}
var frmMinWidth = -1;
var frmMinHeight = -1;
var applyMinSize = false;
var frmMaxWidth = -1;
var frmMaxHeight = -1;
var applyMaxSize = false;
function setMinSize(width, height)
{
    frmMinWidth = width;
    frmMinHeight = height
    applyMinSize = true;
}
function setMaxSize(width, height)
{
    frmMaxWidth = width;
    frmMaxHeight = height
    applyMaxSize = true;
}

function resizeIframeHeight(name) {
	if(name == null || name == ""){
		name = "ManageRemocon";
		
	}
	try {
		var oTarget;
    
        if(isIE && (getIEVersion()<=7 || document.documentMode<=7)){
			var oIFrame = document.getElementById(name);
			var oFrameHtml = window.frames[name].document.getElementsByTagName('HTML')[0];
			var oFrameBody = window.frames[name].document.getElementsByTagName('BODY')[0];
			var oFrameBody2 = window.frames[name].document.documentElement;
			
			var frmHeight = Math.max(oFrameBody.scrollHeight, oFrameBody2.scrollHeight);//[CAFESUS-8596] 2011.06.16
        } else {
            var oBody = document.getElementById(name).contentDocument.documentElement;
            var oBody2 = document.getElementById(name).contentDocument.body;
	        var oIFrame = document.getElementById(name);
			
	        var frmHeight = Math.max(oBody.scrollHeight, oBody2.scrollHeight);

	        if(frmHeight==parseInt(oIFrame.style.height) || !parseInt(oIFrame.style.height) || frmHeight==0){
				var s = oBody.getElementsByTagName("BODY")[0].appendChild(document.createElement('DIV'));			
				s.style.clear = 'both';
				s.innerHTML="";
				var nHeight = s.offsetTop;			
				s.parentNode.removeChild(s);
				if(nHeight>0){
					frmHeight = nHeight;
				}
			}
			
	        
	        if(applyMinSize){
	        	frmHeight = (frmMinHeight>-1) ? Math.max(frmHeight, frmMinHeight) : frmHeight;
	        }
	        
	        if(applyMaxSize){
	        	frmHeight = (frmMaxHeight>-1) ? Math.min(frmHeight, frmMaxHeight) : frmHeight;
	        }
		}
        oIFrame.style.height = frmHeight + "px";
		
	} catch(e){}
}

function resizeIframe(name, userHtmlScroll){
    if(name == null || name == ""){
        name = "cafe_main";
    }

	try {
    	var oTarget;
    
        if(isIE && (getIEVersion()<=7 || document.documentMode<=7)){
			var oIFrame = document.getElementById(name);
			var oFrameHtml = window.frames[name].document.getElementsByTagName('HTML')[0];
			var oFrameBody = window.frames[name].document.getElementsByTagName('BODY')[0];
			var oFrameBody2 = window.frames[name].document.documentElement;
			
			var frmWidth =  oFrameBody.scrollWidth;
			var frmHeight = Math.max(oFrameBody.scrollHeight, oFrameBody2.scrollHeight);//[CAFESUS-8596] 2011.06.16
        } else {
            var oBody = document.getElementById(name).contentDocument.documentElement;
            var oBody2 = document.getElementById(name).contentDocument.body;
	        var oIFrame = document.getElementById(name);
			
	        var frmWidth  = Math.max(oBody.scrollWidth, oBody2.scrollWidth);
	        var frmHeight = Math.max(oBody.scrollHeight, oBody2.scrollHeight);

	        // iframe �� ������(body)�� ���� ���̸� ����Ѵ�.[CAFESUS-8596] 2011.06.16
	        // 
	        // html, body �� ���� css �Ӽ� �� height �� 100% �� ������ �� ���,
	        // iframe ���̰� ����� �� iframe ���� ���� ���� ������(body) �ε� ��
	        // �������� ���̴� iframe �� ���߾� �����ȴ�. 
	        // (������� ���� content �� ���̰� 700px �̴��� iframe �� 1200px �̸� oBody.scrollHeight �� 1200 �� ��ȯ�Ѵ�.)
	        //
	        // ��, iframe �� �ѹ� Ŀ���� ���Ŀ��� ��Ȯ�� Iframe resize�� �Ұ����ϹǷ�
	        // ���� IE8 �� ����Ǿ��� tricky �����, �ӽ� DIV �� ������ �ϴܿ� ���̰� 
	        // offsetTop �� ���� �� �ٽ� DIV �� ����� ������� ������ ���� ���̸� ����Ѵ�. 
	        //if(isIE && getIEVersion()==8 && (frmHeight==parseInt(oIFrame.style.height) || !parseInt(oIFrame.style.height) || frmHeight==0)){
	        if(frmHeight==parseInt(oIFrame.style.height) || !parseInt(oIFrame.style.height) || frmHeight==0){
				var s = oBody.getElementsByTagName("BODY")[0].appendChild(document.createElement('DIV'))			
				s.style.clear = 'both';
				s.innerHTML="";
				s.innerHTML="";
				var nHeight = s.offsetTop;			
				s.parentNode.removeChild(s);
				if(nHeight>0){
					frmHeight = nHeight;
				}
			}
			
	        if(isIE && (navigator.userAgent.indexOf('Trident/5') > -1)){
	        	frmWidth = (oBody.clientWidth) ? oBody.clientWidth : frmWidth; // CAFESUS-7681
	        }
	        
	        if(applyMinSize){
	        	frmWidth = (frmMinWidth>-1) ? Math.max(frmWidth, frmMinWidth) : frmWidth;
	        	frmHeight = (frmMinHeight>-1) ? Math.max(frmHeight, frmMinHeight) : frmHeight;
	        }
	        
	        if(applyMaxSize){
	        	frmWidth = (frmMaxWidth>-1) ? Math.min(frmWidth, frmMaxWidth) : frmWidth;
	        	frmHeight = (frmMaxHeight>-1) ? Math.min(frmHeight, frmMaxHeight) : frmHeight;
	        }
		}

		// ������ Ȯ����� �ӽ� �߰� �ڵ�
		frmHeight += 200;

        oIFrame.style.height = frmHeight + "px";

        // ������ Ȯ�� ���� �ӽ� ��Ȱ��ȭ �ڵ�
        // oIFrame.style.width = frmWidth + "px";
    }catch(e){}
}

function parentResizeIframe(name, userHtmlScroll){
	if (parent && parent != this && parent.resizeIframe != null){
        parent.resizeIframe(name, userHtmlScroll);
    }
}

function photocastCallback() {
	parentResizeIframe('cafe_main');
}

/**
 * Ŭ���� ������Ʈ�� ��ġ�� ��������, ������ ���̸�ŭ�� ���� �����ӿ���
 * ����� �� �ִ��� Ȯ����, ����� �� ���ٸ� �������� ���̸� �����Ѵ�.
 * 
 * @param {Object} oEvent �̺�Ʈ ��ü
 * @param {Object} nHeight ������ ����
 */
function customResizeIFrame(oEvent, nHeight) {
	var elIFrame = self.frameElement;
	
	if(elIFrame) {
		var nPosTop = Element.realPos(Event.ready(oEvent).element).top,  // Ŭ���� �߻��� ������ ���� top ��		
			nFrameHeight = document.documentElement.offsetHeight,  // ���� ������ ����
	
			// �̸� UI ���̾ ����Ǿ��� �� ���� ������(������) ũ�⿡ ����� �� �������� ���� ���̸� ���Ѵ�. 
			// (Ŭ���� ���� top �� + nHeight ��) - ���� ������ ���� ��
			nDiff = (nPosTop + nHeight) - nFrameHeight,
			nNewHeight = nFrameHeight + nDiff;  // ���� ������ ���� ��
	
		// ���� ������ ���� ���� ���� ���� ������ Ŭ ��쿡�� ���� �������� ���̸� �����Ѵ�.
		if(nNewHeight > nFrameHeight) {
			elIFrame.style.height = nNewHeight +"px";
		}
	}
}

/**
* sString  + sTail�� nMaxPixel ��ŭ�� ���̷� �ڸ� �� ��ȯ
* @name		cutStringByPixel
* @function
* @param 	{String} 		sString 		���� ���ڿ�
* @param 	{Number} 	nMaxPixel 	������ �ִ� pixel ũ��
* @param 	{String} 		[sTail] 		���� �� ���� ���� ���ڿ� (default : "")
* @returns 	{String} 					������ ���ڿ�
* @requires 	Jindo.$Element
* @see		cutString
* @see		cutStringByByte
* @example
* cutStringByPixel("abcde �����ٶ� 12345", 100)
* // ���: "abcde ������"
*
* cutStringByPixel("abcde �����ٶ� 12345", 100, "...")
* // ���: "abcde ����..."
*/
function cutStringByPixel(sString, nMaxPixel, sTail) {
	var sSource = (typeof sString != "String") ? sString.toString() : sString,
		nLimit = parseInt(nMaxPixel, 10),
		sAdd = sTail || "",
		aResultString = [],
		sTmpChat = "",
		$this = arguments.callee;
	
	if(!$this.welMeasure) {
		$this.welMeasure = document.createElement("SPAN");
		$this.welMeasure.style.position = "absolute";
		$this.welMeasure.style.top = "-1000px";
		$this.welMeasure.style.left = "-1000px";

		document.body.appendChild($this.welMeasure);
	}else{
		$this.welMeasure.innerHTML = "";
	}
	
	sSource = sSource.replace(/\r?\n/gim, " "); 

	for(var i = 0, nLen = sSource.length; i < nLen; i++){
		sTmpChat = sSource.charAt(i);				
		
		if(sTmpChat === " ") {
			aResultString.push(";");
		}else{
			aResultString.push(sTmpChat);
		}

		$this.welMeasure.innerHTML = aResultString.join("") + sAdd;

		if($this.welMeasure.offsetWidth > nLimit) {
			return sSource.substring(0,(aResultString.length-1)) + sAdd;
		}
		
	}
	
	return sSource;
}

if (NS4) 
{
    document.captureEvents(Event.KEYDOWN)
    document.onkeydown = trapRefresh;
} 
else if (IE4) 
{
    document.onkeydown = trapRefresh;
}

function trapRefresh(e)
{
    var event;
    if (window.event) event = window.event;
    else event = e;

    if (event.keyCode == 116)
    {
        if (window.event) 
            event.keyCode = 0;
        event.cancelBubble = true; 
        event.returnValue = false;
        document.location.reload();
    }
}

function initRead(id){
    document.getElementById(id).oncontextmenu = new Function("return false");
    document.getElementById(id).onselectstart = new Function("return false"); 
	document.getElementById(id).ondragstart = new Function("return false"); 
}

function toggleBlockDragInFF(bEnable){
	if(bEnable) cancelBlockDragInFF();
	else blockDragInFF();
}

function blockMouseRight() {
	document.oncontextmenu = document.onselectstart = document.ondragstart = function(event) { 
		var e = event || window.event, el = e.target || e.srcElement, sTagName = el.tagName || ""; 
		return /(?:textarea|input)/i.test(sTagName); 
		
	};

	if(window.document.body) window.document.body.style.MozUserSelect ='none';
}
	
function blockDragInFF(){
	if(window.document.body) window.document.body.style.MozUserSelect ='none';
} 

function cancelBlockDragInFF(){
	if(window.document.body) window.document.body.style.MozUserSelect ='text';		
}	


/* �˻� ui�� �������� (����Ʈ�ڽ������� �ϴܿ� 100px ������ �� �д�.) */
function CancelBlockMouseRight(){ 
	document.ondragstart = document.onselectstart = document.oncontextmenu = null; 
	document.body.style.MozUserSelect ='text'; 
}



//added by blankus 2008-06-11
//�޴����� - �۾�� ���κ� 20�� ����
var prevSelIdx = 0;
function chkWriteFormCount(oSel, formid){
	for(var i=0; i<oSel.length; i++){
		if(oSel[i].selected){			
			if(formid != oSel[i].value && Number(oSel[i].getAttribute('wf')) >= 20){
				alert('�����Ͻ� �۾���� �̹� �ٸ� 20���� �޴����� ���ǰ� �ֽ��ϴ�.');
				oSel[prevSelIdx].selected = true;
			}else{
				prevSelIdx = i;
			}
		}
		
	}
}

// css�� word-break �Ӽ��� ������� �ʴ� ���������� ����
function wordBreak(el) {
	if(!el){
		return;
	}
	
	var oAgent = $Agent();
	if(oAgent.IE9 || oAgent.IE10){
		var html = el.innerHTML;
		
		if (html == null || html == "") {
			return;
		}
		
		var nickname = html.match(g_sNicknameRegex)[0];
		var imgTag = html.match(/<img [a-zA-Z0-9\=\"\-\s\:\/\.\_]*>/gi);
		if (imgTag == null) {
			imgTag = "";
		}
		
		nickname = nickname.replace(/./g, function(sChar){ return sChar+'&#x200B;'; });
		el.innerHTML = nickname + imgTag;
	} else {
		return;
	}
}

function checkNumber(input) {
    var regexp = /[^0-9]/g;
    var str = input.value;
    if(str.match(regexp) != null ) {
      str = str.replace(regexp, "");
      input.value = str;
    } 
    
    return true;
}

function onclickRos() {
	alert("�˼��մϴ�.\nī�� ���� ���� ���Դϴ�.\n���� �ð� ���� ��� �̿��� ���ѵ˴ϴ�.\n�ڼ��� ������ ī������� Ȯ���� �ּ���. ");
	return false;
}

function onclickRosNotJoin() {
	alert("ī�� ���� ���� ���Դϴ�.\n������ ���� �Ŀ� ī�� ������ �����մϴ�.");
	return false;
}

function initRosEvent() {
	var rosClass = "_rosRestrict";
	if(document.getElementsByClassName) {
		var elements = document.getElementsByClassName(rosClass);
		for(i=0; i<elements.length ; i++) {
			var obj = elements[i];
			if(obj != null) obj.onclick = onclickRos;
		}
	} else {
		var targetTags = [ "a","div","span" ];
		for(i=0; i<targetTags.length; i++) {
			var elements = document.getElementsByTagName(targetTags[i]);
			for(j=0; j<elements.length ; j++) {
				var obj = elements[j];
				if (obj.className.indexOf(rosClass)>-1) {
					obj.onclick = onclickRos;
				}
			}
		}
	}
}

/*
 * �����ټ� - ���������� ������ ���������� �������� ����
 */
function changeTitle(sPageTitle) {
    // ���� ����ϴ� HTML entity decode
    top.document.title = (typeof(sPageTitle) == "string") ? decodeHtmlEntity(sPageTitle) : "";
}

function decodeHtmlEntity(htmlEntity) {
    var eDiv = document.createElement("div");
    eDiv.innerHTML = htmlEntity.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    return eDiv.innerText;
}

function linkToNotice()
{		
	var wnd = window.open("${readOnlyMode.linkToNoticeURL}","underConstructionNotice");		
}

/*
 * �Ϲ�/���� �Խ��� �۾���, ������, �����亯�Խ��� �亯 ���� ��
 * ���ε� �� �̹����� width ����� 740px ���� ū ���
 * resize ó���Ѵ�.
 */
function resizeImageSizeForPost(img) {
	var IMAGE_WIDTH = 740;        	    
    
	if(img.width > IMAGE_WIDTH) {		      		
	    var width = img.width;
	    var height = img.height;
	    var ratio = IMAGE_WIDTH/width;
	       
	    img.width = IMAGE_WIDTH;
	    img.height = height*ratio;
	}
    return img;
}

/*
 * �Խñ� �б⿡��, �̹��� Ŭ���� �����̹����� �����ֱ� ����
 * cafeptthumb.phinf.naver.net �� �̹���URL�� cafefile.naver.net ���� �����Ѵ�.
 */
function imageUrlReplacer(oldUrl, newUrl) {
	var domain = /(https:\/\/cafeptthumb-phinf.pstatic.net|http:\/\/(beta.)?cafeptthumb(\d{1})?.phinf.naver.net)\.*/;
	var matcher = oldUrl.match(domain);
	if (matcher && matcher[0] && matcher[1]) {
		oldUrl = oldUrl.replace(matcher[1], newUrl).replace(/\?.*/, "")
		return oldUrl;
	}
	
	return oldUrl;
}

function imageUrlReplacerForSkin(oldUrl, newUrl) {
	var domain = /(https:\/\/cafeskthumb-phinf.pstatic.net|http:\/\/(beta.)?cafeskthumb.phinf.naver.net)\.*/;
	var matcher = oldUrl.match(domain);
	if (matcher && matcher[0] && matcher[1]) {
		oldUrl = oldUrl.replace(matcher[1], newUrl).replace(/\?.*/, "")
		return oldUrl;
	}
	
	return oldUrl;
}

function openPopupSendURL(){
    var oWin;
    try {
        var width = 285, height = 402, top = 100, left = 100, sWebMsgUrl = "http://webmsg.naver.com/popup_send/send_url.php", sOption = "toolbar=no,status=no,menubar=no,location=no,scrollbars=no,resizable=no";
        sOption += ",width=" + width + ",height=" + height + ",left=" + left + ",top=" + top;
        
        oWin = window.open(sWebMsgUrl + "?code=cafe&SMSID=ESW00017&MMSID=EMG00005", 'sendURL', sOption);
    } 
    catch (ex) {
    };
    if (oWin && !oWin.closed) {
        oWin.focus();
    }
}

function intimacyLogMaker(intimacyMemberId, clubid, m) {
	var ajax = new Ajax("/IntimacyLogMake.nhn", {
		method: "POST",
		params: {
			intimacyMemberId : intimacyMemberId,
			clubid : clubid,
			m : m
		}
	});			
}

/*
 *  Top Layer �˻�â�� �˻�� �� ���·� �����ϱ� ���� 
 */
function initTopLayerQuery() {
	var topLayerQueryInput = parent.document.getElementById("topLayerQueryInput");
	
	if(topLayerQueryInput == null ) {return;}
	if(topLayerQueryInput === "undefined") {return;}	
	
	topLayerQueryInput.value="";
}

/*
 * [�����ټ�] ��ŵ �׺���̼� - �Խñ� �б� ������ ����������� �̵��� �����  
 */
function skipToMobileweb(skipUrl) {
	var skipToMobilewebArea = parent.document.getElementById("u_skipToMobileweb");
	
	if(skipToMobilewebArea == null ) {return;}
	if(skipToMobilewebArea === "undefined") {return;}	
	
	skipToMobilewebArea.href = skipUrl;
}

function targetCleaner(oElement){
	try{
		if (typeof oElement == 'undefined' ||  oElement == null){
			return;
		}
		
		if (!!$Agent() && $Agent().macSafari){
			oElement.target="_self";
		}
	}catch(er){
		if (oElement.tagName != null){
			JEagleEyeClient.raiseError(er, this, {
				message : "targetCleaner - " + oElement.tagName});
		} else {
			JEagleEyeClient.raiseError(er, this, {
				message : "cafe_common.js > targetCleaner fail"});
		}
	}
}

function targetChangeToTop(oElement){
	try{
		if (typeof oElement == 'undefined' ||  oElement == null){
			return;
		}
		
		if (!!$Agent() && $Agent().macSafari){
			oElement.target="_top";
		}
	}catch(er){
		if (oElement.tagName != null){
			JEagleEyeClient.raiseError(er, this, {
				message : "targetCleaner - " + oElement.tagName});
		} else {
			JEagleEyeClient.raiseError(er, this, {
				message : "cafe_common.js > targetCleaner fail"});
		}
	}
}


/**
 * cafe_main iframe������ �̵��ÿ� ����ϴ� �Լ��� 
 * Mac Safari�� ��� iframe�� �ƴ� top�� document.location�� �����Ѵ�.
 * @param sURL
 */
function targetChangeForMacSafari(sURL){
	if(!sURL){
		return false;
	}
	
	 document.location.href = sURL;
}

function escapeXssCharacters(sOriginalText) {
	if(sOriginalText == null) {
		return sOriginalText;
	}

	var entities = {'"':'quot','<':'lt','>':'gt'};
	var s = sOriginalText.replace(/[<>"]/g, function(m0){
		return entities[m0]?'&'+entities[m0]+';':m0;
	});
	return s;
};

/**
 * ������ Ư�����ڿ� ���ؼ��� uri encoding �� ���ڿ��� ��ȯ�ϴ� �޼ҵ�
 * - _ . ! ~ * ' ( ) 
 *
 * ���� : http://mdn.beonex.com/en/JavaScript/Reference/Global_Objects/encodeURIComponent.html
 * 
 * @param sOriginal
 * @returns
 */
function encodeURIWithSpecialCharacter(sOriginal) {
	return encodeURIComponent(sOriginal).replace(/[!'()*]/g, escape);
}