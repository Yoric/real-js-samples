/**
	@modifier
	 - 2010.07.22 by kim min jung(AU2)
	    
	@description
	 - 이름 UI 기능을 제공하는 js.
	 - jindo1 기반.
	 - 이 파일 수정시 아래 경로의 jindo2 파일도 함께 수정해줘야 함. 
	   /web/javascript/jindo2/cafe_ui.js 
*/
// ==Name UI Handling ==
var uiMenuArr = {
	viewArticle : "게시글보기",
	inviteCafe : "카페초대",
	inviteCafeChat : "1:1 채팅",
	updateLevel : "등급변경",
	kickMember : "강퇴시키기",
	sendMemo : "쪽지보내기",
	viewBlog : "블로그보기",
	givePresent : "선물하기",
	addNeighbor : "이웃추가",
	activityStop : "활동정지",
	activityStopRelease : "활동정지 해제"
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
 * 이름 UI 최대 높이 픽셀 값
 * 이름 UI 생성 후 iframe resize 시에 사용한다.
 * 이름 UI 메뉴 항목이 추가될 경우 30을 추가하라
 */
var _nUIMaxHeight = 330;

/*	
					1:"블로그보기", 2:"선물하기", 3:"쪽지보내기", 4:"카페초대", 
					5:"이웃추가", 6:"게시글보기", 7:"등급변경", 8:"강퇴시키기",
					9:"참여 앱 보기", 10:"앱 추천하기"
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
이름 UI 기능 구현 js
@param
 - e : window.event 객체
 - p_memberid : cafe member 아이디
 - lv_open_type : 3, 어떤 값인지는  모르겠음-_-
 - p_nickname : cafe member 별명
 - p_clubid :   cafe club 아이디
 - p_memberinfo :  me(멤버), st(멤버 스탭),ma(마스터)
 - p_entireBoardStaff :  true(전체게시판스탭, 마스터, 부매니저) / 그 외 false
 - p_memberleveluse : false,		//등급제 카페  여부
 - p_cluburl : cafe club URL
   p_activityStopExecutable :  true(활동정지 권한) / 그 외 false
 - sMode : "WIDGET" || "" || null  // 카페 위젯에서 실행할 경우에는 "WIDGET"을 넣어주고, 아닐 경우는  ""로 넘겨주면 된다.
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
	
	
    // 이전 아이디 값이 없으면 기본값으로 menu_parent 설정
    if(!ui_sBeforeID){
		ui_sBeforeID = "menu_parent";
	}

	// 새로 사용할 객체의 아이디를 설정
	sNewID = "elFloatLayer_"+Math.floor(Math.random()*100000);
	//uiFactory 생성
	if (uiFactory==null){
		uiFactory = new uiFactoryObject();
	}
	//Div안에 들어 갈 내용이 '로딩바'/'메뉴'인지를 결정해주는 type 변수
	sType = "loadingBar";

	//2010.11.29 CAFESUS-6750 iFrame 높이로 인한 버그 관련
	if(elIFrame) {
		var nPosTop = Element.realPos(Event.ready(e).element).top,  // 클릭이 발생한 영역의 실제 top 값		
			nFrameHeight = document.documentElement.offsetHeight,  // 현재 페이지 높이
	
			// 이름 UI 레이어가 노출되었을 때 현재 페이지(프레임) 크기에 노출될 수 있을지에 대한 차이를 구한다. 
			// (클릭된 영역 top 값 + 이름 UI 레이어 최대 높이값) - 현재 페이지 높이 값
			nDiff = (nPosTop + _nUIMaxHeight) - nFrameHeight,
			nNewHeight = nFrameHeight + nDiff;  // 새로 설정될 높이 값
	
		// 새로 설정될 높이 값이 기존 높이 값보다 클 경우에만 현재 페이지의 높이를 조정한다.
		if(nNewHeight > nFrameHeight) {
			elIFrame.style.height = nNewHeight +"px";
		}
	}

	uiFactory.createUi(ui_sBeforeID, sNewID, sType);
	// 이전 아이디 값에 창 열 때 사용한 새로운 아이디 값을 저장
	ui_sBeforeID = sNewID;

	var bApplyMember = false;
	var bSecedeMember = false;
	//활동정지 체크
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
			
			// 변수 셋팅.
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

			// CAFESUS-7964 : IE8에서 제 높이 찾지 못하는 문제 & 중첩된 iframe 구조에서 iframe resize 오류 수정
			if(elIFrame){
				htParam.fAfterCreate = function(){
					// 현재 iframe 높이
					nFrameHeight = document.documentElement.offsetHeight;
					var cafe_main_IframeHeight = parseInt(top.$('cafe_main').style.height);
					// nNewHeight 는 function 상단에서 구해진 값을 재사용
					// 이름 UI 가 생성되어 보여진 후의 iframe height 가 현재 iframe height 보다 클경우 재조정한다.
					if(nNewHeight > nFrameHeight) {
						newCafeMainIframeHeight = (cafe_main_IframeHeight + (nNewHeight - nFrameHeight)) + 'px';
						elIFrame.style.height = nNewHeight + 'px';
						top.$('cafe_main').style.height = newCafeMainIframeHeight; 
					}
				}
			}

			// 이전 아이디 값과 새로운 아이디 값을 넘겨줌
			uiFactory.createUi(ui_sBeforeID, sNewID, sType, htParam);
		} catch(e) {}
	}

	// 새로운 아이디 값으로 레이어를 열도록 함수 호출
	// add by niceilm(AU2) WIDGET에서 열때에는 스크롤에 따른 차이값 추가
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
		
		// 이전 아이디 값을 이용하여 객체를 찾음
		var objMenu =  document.getElementById(sParentID);
		
		// 메뉴 객체의 아이디 값을 새로 설정
		objMenu.id = sNewID;
		
		//DIV 내용 지워주기 
		objMenu.innerHTML ="";
		
		// '로딩바'|'메뉴' 선택 생성
		if(sType == "loadingBar"){
			objMenu.style.width = "109px";
			var oDl = document.createElement("dl");
			oDl.className = "nm_load";
			var oDt = document.createElement("dt");
			oDt.innerHTML = sLoadBarTmpl;
			oDl.appendChild(oDt);
			var oDd = document.createElement("dd");
			oDd.innerHTML = '정보를 불러오는<br>중입니다';
			oDl.appendChild(oDd);
			objMenu.appendChild(oDl);
		}else if(sType == "menu"){
			objMenu.style.width = "109px";
			objMenu.innerHTML ="";
			var oUl = document.createElement("UL");
			//uiFactory로부터 ui html 안쪽부분을 가져온다.
			oUl.appendChild(this.createFragment(htParam));
			objMenu.appendChild(oUl);
			
			//UI HTML 생성후 실행할 함수(2011.03.28 add by laziel)
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
		//2011.9.23 CAFESUS-10215 멤버관리 사유추가. 이름UI 정렬순서 변경
		var aUiContent = [];

		if( // 게시글 보기 조건 , 참여 앱 보기, 앱 추천 하기
				htParam.p_memberinfo=="me" || // 멤버
				htParam.p_memberinfo=="st" || // 스텝
				htParam.p_memberinfo=="ma" // 마스터
		){
			// 대상이 가입 신청 중 멤버일 경우 초대, 쪽지, 블로그 보기 메뉴만 노출
			if(htParam.bApplyMember) {
				// 초대
				aUiContent.push("inviteCafe");
				// 쪽지
				aUiContent.push("sendMemo");
				// 블로그
				aUiContent.push("viewBlog");
								
				return aUiContent;
			}
			
			// 탈퇴한 멤버이지만, 현재 유저가 전체 게시판 스탭(매니저,부매니저)일 경우 노출한다.
			if( htParam.bSecedeMember) {
				if(htParam.p_memberinfo=="ma" || htParam.p_entireBoardStaff == "true") {
					aUiContent.push("viewArticle");
					return aUiContent;
				}
			} else {
			    aUiContent.push("viewArticle");
				if(htParam.p_memberid != g_sUserId){ // 쪽지보내기의 경우 단 본인은 제외 
			        aUiContent.push("inviteCafeChat");
			        aUiContent.push("sendMemo");			
		        }
			}
		}
		
		aUiContent.push("|"); // 구분선 추가
		
		// 등급변경 , 활동 정지, 강퇴시키기 : 본인 제외
		if ( htParam.p_memberid != g_sUserId ) {			
			if( htParam.p_memberinfo=="st" || // 스텝
				htParam.p_memberinfo=="ma" // 마스터 				     
			){
				if ( htParam.p_memberleveluse == "true" ) { // 등급변경
					aUiContent.push("updateLevel");
				}
				
				if ( htParam.p_activityStopExecutable == "true" ) { //활동정지
					if(htParam.bActivityStop == false) {
						aUiContent.push("activityStop");
					} else {
						aUiContent.push("activityStopRelease");
					}
				}
				
				aUiContent.push("kickMember"); //강퇴 시키기
				
				aUiContent.push("|"); // 구분선 추가
			} else if (	htParam.p_activityStopExecutable == "true" ) {
				if(htParam.bActivityStop == false) {
					aUiContent.push("activityStop");
				} else {
					aUiContent.push("activityStopRelease");
				}
				aUiContent.push("|"); // 구분선 추가
			}
		}
			
		// 카페 초대
		aUiContent.push("inviteCafe");
		
		aUiContent.push("|"); // 구분선 추가

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
		alert("가입 대기중인 멤버입니다");
	}else{
		//alert("탈퇴한 멤버입니다.");
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
		alert("매니저나 스탭의 등급을 변경할 수 없습니다.");
	}
	else if(res.apply=="true"){
		alert("가입 대기중인 멤버입니다");	
	}
	else
	{
		alert("탈퇴한 멤버입니다.");
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
		alert("매니저는 탈퇴시킬 수 없습니다.");
	}
	else if(res.apply=="true") {
		alert("가입 대기중인 멤버입니다");	
	}
	else {
		alert("탈퇴한 멤버입니다.");
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
		alert("스탭 이상은 활동정지 할 수 없습니다.");
	}
	else if(res.apply=="true"){
		alert("가입 대기중인 멤버입니다");	
	}
	else
	{
		alert("탈퇴한 멤버입니다.");
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
		if (confirm("활동이 가능하도록 처리하시겠습니까?")) {			
			
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
						// script error 방지..
					}
				}
			});	
		}
	}
	else
	{
		alert("탈퇴한 멤버입니다.");
	}
}

/******************************** ajax request ********************************/
/** cafe_ui script에서는 ajax라이브러리를 import 할 수 없으므로 직접 구현한다. */
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