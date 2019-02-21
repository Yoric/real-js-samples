/**
	@modifier
	 - 2010.07.22 by kim min jung(AU2)
	    
	@description
	 - �̸� UI ����� �����ϴ� js.
	 - jindo1 ���.
	 - �� ���� ������ �Ʒ� ����� jindo2 ���ϵ� �Բ� ��������� ��. 
	   /web/javascript/jindo2/cafe_ui.js 
*/
// ==Name UI Handling ==
var uiMenuArr = {
	viewArticle : "�Խñۺ���",
	inviteCafe : "ī���ʴ�",
	inviteCafeChat : "1:1 ä��",
	updateLevel : "��޺���",
	kickMember : "�����Ű��",
	sendMemo : "����������",
	viewBlog : "��α׺���",
	givePresent : "�����ϱ�",
	addNeighbor : "�̿��߰�",
	activityStop : "Ȱ������",
	activityStopRelease : "Ȱ������ ����"
};
var uiMenuNClickID = {
	viewArticle : "nui.article",
	inviteCafe : "nui.invite",
	inviteCafeChat : "nui.1on1",
	updateLevel : "nui.mchange",
	kickMember : "nui.mban",
	sendMemo : "nui.note",
	viewBlog : "nui.blog",
	givePresent : "",
	addNeighbor : "",
	activityStop : "nui.mdisable",
	activityStopRelease : ""
};

/**
 * �̸� UI �ִ� ���� �ȼ� ��
 * �̸� UI ���� �� iframe resize �ÿ� ����Ѵ�.
 * �̸� UI �޴� �׸��� �߰��� ��� 30�� �߰��϶�
 */
var _nUIMaxHeight = 330;

/*	
					1:"��α׺���", 2:"�����ϱ�", 3:"����������", 4:"ī���ʴ�", 
					5:"�̿��߰�", 6:"�Խñۺ���", 7:"��޺���", 8:"�����Ű��",
					9:"���� �� ����", 10:"�� ��õ�ϱ�"
*/				
var sLoadBarTmpl = '<img height="24" width="24" alt="" src="https://cafe.pstatic.net/cafe4/loading_name.gif">';

var ui_memberid = "";
var ui_open_type = "";
var ui_nickname = "";
var ui_clubid = "";
var ui_memberinfo = "";
var ui_memberleveluse = "false";
var ui_cluburl = "";
var uiFactory = null;
var ui_sBeforeID;
var ui_menuid = null;

/*
�̸� UI ��� ���� js
@param
 - e : window.event ��ü
 - p_memberid : cafe member ���̵�
 - lv_open_type : 3, � ��������  �𸣰���-_-
 - p_nickname : cafe member ����
 - p_clubid :   cafe club ���̵�
 - p_memberinfo :  me(���), st(��� ����),ma(������)
 - p_entireBoardStaff :  true(��ü�Խ��ǽ���, ������, �θŴ���) / �� �� false
 - p_memberleveluse : false,		//����� ī��  ����
 - p_cluburl : cafe club URL
   p_activityStopExecutable :  true(Ȱ������ ����) / �� �� false
 - sMode : "WIDGET" || "" || null  // ī�� �������� ������ ��쿡�� "WIDGET"�� �־��ְ�, �ƴ� ����  ""�� �Ѱ��ָ� �ȴ�.
*/ 
function ui(e, p_memberid, lv_open_type, p_nickname, p_clubid, p_memberinfo, p_entireBoardStaff, p_memberleveluse, p_cluburl, p_activityStopExecutable, p_menuid, sMode){
	e = e || window.event;
	var sType ="",
	 	elIFrame = self.frameElement;
	
	var ajax = new Ajax("/CafeMemberExistCheck.nhn", {
		method : "POST",
		params : {
			clubid : p_clubid
			, memberid : p_memberid
		},		
		onLoad : onCafeMemberCheckAjaxLoad
	});
	
	
    // ���� ���̵� ���� ������ �⺻������ menu_parent ����
    if(!ui_sBeforeID){
		ui_sBeforeID = "menu_parent";
	}

	// ���� ����� ��ü�� ���̵� ����
	sNewID = "elFloatLayer_"+Math.floor(Math.random()*100000);
	//uiFactory ����
	if (uiFactory==null){
		uiFactory = new uiFactoryObject();
	}
	//Div�ȿ� ��� �� ������ '�ε���'/'�޴�'������ �������ִ� type ����
	sType = "loadingBar";

	//2010.11.29 CAFESUS-6750 iFrame ���̷� ���� ���� ����
	if(elIFrame) {
		var nPosTop = Element.realPos(Event.ready(e).element).top,  // Ŭ���� �߻��� ������ ���� top ��		
			nFrameHeight = document.documentElement.offsetHeight,  // ���� ������ ����
	
			// �̸� UI ���̾ ����Ǿ��� �� ���� ������(������) ũ�⿡ ����� �� �������� ���� ���̸� ���Ѵ�. 
			// (Ŭ���� ���� top �� + �̸� UI ���̾� �ִ� ���̰�) - ���� ������ ���� ��
			nDiff = (nPosTop + _nUIMaxHeight) - nFrameHeight,
			nNewHeight = nFrameHeight + nDiff;  // ���� ������ ���� ��
	
		// ���� ������ ���� ���� ���� ���� ������ Ŭ ��쿡�� ���� �������� ���̸� �����Ѵ�.
		if(nNewHeight > nFrameHeight) {
			elIFrame.style.height = nNewHeight +"px";
		}
	}

	uiFactory.createUi(ui_sBeforeID, sNewID, sType);
	// ���� ���̵� ���� â �� �� ����� ���ο� ���̵� ���� ����
	ui_sBeforeID = sNewID;

	var bApplyMember = false;
	var bSecedeMember = false;
	//Ȱ������ üũ
	var bActivityStop = false;
	
	function onCafeMemberCheckAjaxLoad() {
		try {
			var oJsonData = eval("(" + arguments[0].responseText + ")");
			
			if(oJsonData.exist != "true") {
				bSecedeMember = true;
			}
			if(oJsonData.apply == "true") {
				bApplyMember = true;
			}if(oJsonData.activityStop == "true") {
				bActivityStop = true;
			}		
			
			sType = "menu";
			
			// ���� ����.
			uiFactory.setParameter(p_memberid, lv_open_type, p_nickname, p_clubid, p_memberinfo, p_memberleveluse, p_cluburl, p_menuid);
			
			var htParam = {
				p_memberid: p_memberid,
				lv_open_type: lv_open_type,
				p_nickname: p_nickname,
				p_clubid: p_clubid,
				p_memberinfo: p_memberinfo,
				p_entireBoardStaff: p_entireBoardStaff,
				p_memberleveluse: p_memberleveluse,
				p_cluburl: p_cluburl,
				p_activityStopExecutable: p_activityStopExecutable,
				bApplyMember : bApplyMember,
				bSecedeMember : bSecedeMember,
				bActivityStop : bActivityStop
			};

			// CAFESUS-7964 : IE8���� �� ���� ã�� ���ϴ� ���� & ��ø�� iframe �������� iframe resize ���� ����
			if(elIFrame){
				htParam.fAfterCreate = function(){
					// ���� iframe ����
					nFrameHeight = document.documentElement.offsetHeight;
					var cafe_main_IframeHeight = parseInt(top.$('cafe_main').style.height);
					// nNewHeight �� function ��ܿ��� ������ ���� ����
					// �̸� UI �� �����Ǿ� ������ ���� iframe height �� ���� iframe height ���� Ŭ��� �������Ѵ�.
					if(nNewHeight > nFrameHeight) {
						newCafeMainIframeHeight = (cafe_main_IframeHeight + (nNewHeight - nFrameHeight)) + 'px';
						elIFrame.style.height = nNewHeight + 'px';
						top.$('cafe_main').style.height = newCafeMainIframeHeight; 
					}
				}
			}

			// ���� ���̵� ���� ���ο� ���̵� ���� �Ѱ���
			uiFactory.createUi(ui_sBeforeID, sNewID, sType, htParam);
		} catch(e) {}
	}

	// ���ο� ���̵� ������ ���̾ ������ �Լ� ȣ��
	// add by niceilm(AU2) WIDGET���� �������� ��ũ�ѿ� ���� ���̰� �߰�
	if(sMode=="WIDGET"){
		var nDiffTop = $('lm-list').scrollTop;
		var nHeightElement = Event && Event.ready ? Event.ready(e).element.offsetHeight  : 13;
		nDiffTop = -( nDiffTop == 0 ? 0 : nDiffTop - nHeightElement); 
		oCL.show(sNewID, e, nDiffTop);
	}else{
		oCL.show(sNewID, e);
	}
}

function uiFactoryObject()
{
	var uiArr;
	this.setParameter = function(p_memberid, lv_open_type, p_nickname, p_clubid, p_memberinfo, p_memberleveluse, p_cluburl, p_menuid)
	{
		ui_memberid = p_memberid;
		if (lv_open_type == null){
			ui_open_type = "3";  
		}
		ui_open_type = lv_open_type.toString();
		
		if (p_nickname == null){
			ui_nickname = "";
		}
		else{
			ui_nickname = p_nickname;
		}
	
		if (p_menuid != null) {
			ui_menuid = p_menuid;
		}
		
		ui_clubid = p_clubid;
		ui_memberinfo = p_memberinfo;
		ui_memberleveluse = p_memberleveluse;
		ui_cluburl = p_cluburl;
	};

	this.createUi = function(sParentID, sNewID, sType, htParam)
	{
		if (!document.getElementById(sParentID))
		{
			var oDiv = document.createElement("DIV");
			oDiv.id = "menu_parent";
			oDiv.style.display = "block";
			oDiv.style.position = "absolute";
			oDiv.className = "perid-layer";
			document.body.appendChild(oDiv);
		}
		
		// ���� ���̵� ���� �̿��Ͽ� ��ü�� ã��
		var objMenu =  document.getElementById(sParentID);
		
		// �޴� ��ü�� ���̵� ���� ���� ����
		objMenu.id = sNewID;
		
		//DIV ���� �����ֱ� 
		objMenu.innerHTML ="";
		
		// '�ε���'|'�޴�' ���� ����
		if(sType == "loadingBar"){
			objMenu.style.width = "109px";
			var oDl = document.createElement("dl");
			oDl.className = "nm_load";
			var oDt = document.createElement("dt");
			oDt.innerHTML = sLoadBarTmpl;
			oDl.appendChild(oDt);
			var oDd = document.createElement("dd");
			oDd.innerHTML = '������ �ҷ�����<br>���Դϴ�';
			oDl.appendChild(oDd);
			objMenu.appendChild(oDl);
		}else if(sType == "menu"){
			objMenu.style.width = "109px";
			objMenu.innerHTML ="";
			var oUl = document.createElement("UL");
			//uiFactory�κ��� ui html ���ʺκ��� �����´�.
			oUl.appendChild(this.createFragment(htParam));
			objMenu.appendChild(oUl);
			
			//UI HTML ������ ������ �Լ�(2011.03.28 add by laziel)
			if(typeof htParam.fAfterCreate == "function"){
				htParam.fAfterCreate();
			}
		}
	};

	this.createFragment = function(htParam){
		var aUiContent = this.setUiArr(htParam);
		var oFragment;
		
		oFragment = document.createDocumentFragment();
		var bLine = false;
		for (var i=0, nLen=aUiContent.length ;i<nLen ; i++ ){
			if(aUiContent[i]=="|" && i+1 < nLen){
				bLine = true;
			}else{
				oFragment.appendChild(this.setMenuItem(aUiContent[i], bLine, htParam));
				bLine = false;
			}
		}

		return oFragment;
	};

	this.setUiArr = function(htParam) {
		//2011.9.23 CAFESUS-10215 ������� �����߰�. �̸�UI ���ļ��� ����
		var aUiContent = [];

		if( // �Խñ� ���� ���� , ���� �� ����, �� ��õ �ϱ�
				htParam.p_memberinfo=="me" || // ���
				htParam.p_memberinfo=="st" || // ����
				htParam.p_memberinfo=="ma" // ������
		){
			// ����� ���� ��û �� ����� ��� �ʴ�, ����, ��α� ���� �޴��� ����
			if(htParam.bApplyMember) {
				// �ʴ�
				aUiContent.push("inviteCafe");
				// ����
				aUiContent.push("sendMemo");
				// ��α�
				aUiContent.push("viewBlog");
								
				return aUiContent;
			}
			
			// Ż���� ���������, ���� ������ ��ü �Խ��� ����(�Ŵ���,�θŴ���)�� ��� �����Ѵ�.
			if( htParam.bSecedeMember) {
				if(htParam.p_memberinfo=="ma" || htParam.p_entireBoardStaff == "true") {
					aUiContent.push("viewArticle");
					return aUiContent;
				}
			} else {
			    aUiContent.push("viewArticle");
				if(htParam.p_memberid != g_sUserId){ // ������������ ��� �� ������ ���� 
			        aUiContent.push("inviteCafeChat");
			        aUiContent.push("sendMemo");			
		        }
			}
		}
		
		aUiContent.push("|"); // ���м� �߰�
		
		// ��޺��� , Ȱ�� ����, �����Ű�� : ���� ����
		if ( htParam.p_memberid != g_sUserId ) {			
			if( htParam.p_memberinfo=="st" || // ����
				htParam.p_memberinfo=="ma" // ������ 				     
			){
				if ( htParam.p_memberleveluse == "true" ) { // ��޺���
					aUiContent.push("updateLevel");
				}
				
				if ( htParam.p_activityStopExecutable == "true" ) { //Ȱ������
					if(htParam.bActivityStop == false) {
						aUiContent.push("activityStop");
					} else {
						aUiContent.push("activityStopRelease");
					}
				}
				
				aUiContent.push("kickMember"); //���� ��Ű��
				
				aUiContent.push("|"); // ���м� �߰�
			} else if (	htParam.p_activityStopExecutable == "true" ) {
				if(htParam.bActivityStop == false) {
					aUiContent.push("activityStop");
				} else {
					aUiContent.push("activityStopRelease");
				}
				aUiContent.push("|"); // ���м� �߰�
			}
		}
			
		// ī�� �ʴ�
		aUiContent.push("inviteCafe");
		
		aUiContent.push("|"); // ���м� �߰�

		aUiContent.push("viewBlog");		
		
		return aUiContent;
	};

	this.setMenuItem = function(idx, bLine, htParam){
		var oNewLi;
		oNewLi = document.createElement("Li");
		if(bLine){
			oNewLi.className = "line";
		}
		var oNewA = document.createElement("A");
		oNewA.href= "#";
		oNewA.onclick = function() {
			execMenuItem(idx, htParam.p_memberid, htParam.p_membernick);
			return false;
		}
		
		var oNewSpan = document.createElement("SPAN");
		oNewSpan.innerHTML = uiMenuArr[idx];

		oNewA.appendChild(oNewSpan);
		oNewLi.appendChild(oNewA);

		return oNewLi;
	};

	this.hideUi = function() 
	{
		oCL.hide(ui_sBeforeID);
	};
}

function execMenuItem(opType, ui_memberid, ui_nickname){
	window[opType](ui_memberid, ui_nickname);
	uiFactory.hideUi();
	var sNClickId = uiMenuNClickID[opType];
	if(!!sNClickId && sNClickId != "") clickcr(this, sNClickId , '', '', '');
}
function getTop()
{
    return (screen.height - 500) / 2;
}
function getLeft()
{
    return (screen.width - 330) / 2;
}
function viewBlog(ui_memberid) 
{
    popblog(ui_memberid);
}
function sendMemo(id,nick)
{
	try {
		intimacyLogMaker(id, g_sClubId, "sendMemo");
	} catch(e) {}
	window.open("https://note.naver.com/note/sendForm.nhn?popup=1&svcType=2&targetUserId=" + id, "popWin","width=330,height=200,scrollbars=no,resizable=yes,top=" + getTop() + ", left=" + getLeft());
}

function inviteCafe(tid)
{
    window.open("/CafeInviteView.nhn?m=view&inviteid=" + tid +"" ,"popWin","width=350,height=390,scrollbars=no,resizable=yes,top=" + getTop() + ",left=" +getLeft());
}

function inviteCafeChat(sMemberId)
{
	var sUserId = g_sUserId;
	var sCafeId = g_sClubId;
	try {
		intimacyLogMaker(sMemberId, g_sClubId, "inviteCafeChat");
	} catch(e) {}
	oOneToOneChatLauncher.run(sCafeId, sUserId, sMemberId);
}

function popblog(tid)
{
	var wnd = window.open("http://blog.naver.com/" + tid, "popblog");
    wnd.focus();
}

function givePresent(userid)
{
    window.open('http://item.naver.com/itembag/GiftPop.jsp?userid='+userid,'gift','width=400,height=500,status=no,scrollbars=no');
}
function popMemberProfile(sCafeUrl, sMemberId)
{
	var wnd = window.open("/" + sCafeUrl + "/member/" + sMemberId + "/article", "popMemberProfile");	
    wnd.focus();
}
function viewArticle(ui_memberid)
{
	uiRequest.doProcess("/CafeMemberExistCheck.nhn", "&clubid="+ ui_clubid + "&memberid="+ ui_memberid, viewArticleProcess);
}
function viewArticleProcess(req)
{
	var res = eval("(" + req.responseText + ")");
	if (res.apply != "true")
	{
		var url = "/CafeMemberNetworkView.nhn?m=view&clubid=" + ui_clubid + "&memberid="+ ui_memberid;
		var newwindowurl = "/" + ui_cluburl + ".cafe?iframe_url=/CafeMemberNetworkView.nhn%3Fm=view%26memberid=" + ui_memberid;
		try
		{
			top.document.getElementById("cafe_main").src = url;
		}
		catch(e)
		{
			window.open(newwindowurl);
		}
	}else if(res.apply=="true"){
		alert("���� ������� ����Դϴ�");
	}else{
		//alert("Ż���� ����Դϴ�.");
	}
}
function updateLevel(ui_memberid)
{
	uiRequest.doProcess("/CafeMemberExistCheck.nhn", "&clubid="+ ui_clubid + "&luc=true&memberid="+ ui_memberid, updateLevelProcess);
}
function updateLevelProcess(req)
{
	var res = eval("(" + req.responseText + ")");
	if (res.exist=="true" && res.updatable=="true")
	{
		window.open("/ManageLevelUp.nhn?m=view&fromUpService=member&model.clubid=" + ui_clubid + "&model.memberid=" + ui_memberid, "levelup", "width=350,height=476");
	}
	else if (res.exist=="true" && res.updatable=="false")
	{
		alert("�Ŵ����� ������ ����� ������ �� �����ϴ�.");
	}
	else if(res.apply=="true"){
		alert("���� ������� ����Դϴ�");	
	}
	else
	{
		alert("Ż���� ����Դϴ�.");
	}
}
function kickMember(ui_memberid)
{
	uiRequest.doProcess("/CafeMemberExistCheck.nhn", "&clubid="+ ui_clubid + "&luc=true&memberid="+ ui_memberid, kickMemberProcess);
}
function kickMemberProcess(req) {
	var res = eval("(" + req.responseText + ")");
	if (res.exist=="true" && res.manager=="false") {
		window.open("/ManageSecedePopupView.nhn?clubid=" + ui_clubid + "&memberids=" + ui_memberid  + "&nickname=" + ui_nickname, "", "width=350,height=472");
	}
	else if (res.exist=="true" && res.manager=="true") {
		alert("�Ŵ����� Ż���ų �� �����ϴ�.");
	}
	else if(res.apply=="true") {
		alert("���� ������� ����Դϴ�");	
	}
	else {
		alert("Ż���� ����Դϴ�.");
	}
}

function activityStop(ui_memberid)
{
	uiRequest.doProcess("/CafeMemberExistCheck.nhn", "&clubid="+ ui_clubid + "&memberid="+ ui_memberid, activityStopProcess);
}
function activityStopProcess(req)
{
	var res = eval("(" + req.responseText + ")");
	if (res.exist=="true" && res.updatable=="true")
	{
		window.open("/ManageActivityStopPopupView.nhn?clubid=" + ui_clubid + "&memberids=" + ui_memberid + "&nickname=" + ui_nickname + "&menuid=" + ui_menuid, "activityStopPopup", "width=350,height=472");
	}
	else if (res.exist=="true" && res.updatable=="false")
	{
		alert("���� �̻��� Ȱ������ �� �� �����ϴ�.");
	}
	else if(res.apply=="true"){
		alert("���� ������� ����Դϴ�");	
	}
	else
	{
		alert("Ż���� ����Դϴ�.");
	}
}

function activityStopRelease(ui_memberid)
{
	uiRequest.doProcess("/CafeMemberExistCheck.nhn", "&clubid="+ ui_clubid + "&memberid="+ ui_memberid, activityStopReleaseProcess);
}
function activityStopReleaseProcess(req)
{	
	var res = eval("(" + req.responseText + ")");
	
	if (res.exist=="true" && res.updatable=="true")
	{
		if (confirm("Ȱ���� �����ϵ��� ó���Ͻðڽ��ϱ�?")) {			
			
			var ajax = new Ajax("/ManageActivityStopReleaseAjax.nhn", {
		 		method : "POST",
		 		params : {
						"clubid":ui_clubid,
		 	        	"activityStopId":ui_memberid
		 	        	},
		 	    charset : "euc-kr",
				onLoad : function(res){
					try {
						var oJsonData = eval( '(' + res.responseText + ')' );
						
						alert(oJsonData.message);
					} catch(e) {
						// script error ����..
					}
				}
			});	
		}
	}
	else
	{
		alert("Ż���� ����Դϴ�.");
	}
}

/******************************** ajax request ********************************/
/** cafe_ui script������ ajax���̺귯���� import �� �� �����Ƿ� ���� �����Ѵ�. */
var uiRequest = new Object();
uiRequest.xmlHttp = null;

uiRequest.doProcess = function(url, params, func)
{
	uiRequest.xmlHttp = getXmlHttpRequest();
	
	var uiUrl = url + "?t=" + (new Date()).getTime();
	
	uiRequest.xmlHttp.onreadystatechange = function()
	{
		if (uiRequest.xmlHttp.readyState == 4)
		{
			func(uiRequest.xmlHttp);
			uiRequest.xmlHttp = null;
		}
	};
	
	uiRequest.xmlHttp.open("POST", uiUrl, true, null, null);
	
	if (typeof(uiRequest.xmlHttp.setRequestHeader)!="undefined") {
		uiRequest.xmlHttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=UTF-8');
	}
	
	uiRequest.xmlHttp.send(params);
}

function getXmlHttpRequest()
{
	if (window.XMLHttpRequest) {
		return new XMLHttpRequest();
	}
	else if (window.ActiveXObject) {
		/*@cc_on @*/
		/*@if (@_jscript_version >= 5)
		try {
			return new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try {
				return new ActiveXObject("Microsoft.XMLHTTP");
			} catch (E) {
				return null;
			}
		}
		@end @*/
	}
	else {
		return null;
	}	
}