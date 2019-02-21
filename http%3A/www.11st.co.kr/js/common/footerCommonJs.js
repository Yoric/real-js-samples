//========= common.js

var FooterComm = {};
if(typeof(FooterData) === "undefined" ) FooterData = {};

function photoScrollMove(idName,moveF,moveV,EA) {

	var photoScrollList=$ID("" + idName + "");
	var photoScrollLeft = photoScrollList.style.left;
	photoScrollLeft = parseInt(photoScrollLeft.replace("px",""));

	photoScrollWidth = photoScrollList.style.width;
	photoScrollWidth = parseInt(photoScrollWidth.replace("px",""));
	photoScrollWidth = -(photoScrollWidth + (moveV*EA));

	if (moveF == "P") {
		if (photoScrollLeft !=0)	{
			photoScrollList.style.left = photoScrollLeft + moveV + "px";
		}
		else	{
			alert("이전사진이 없습니다.");
		}
	}	else	{

		if (photoScrollLeft > photoScrollWidth)	{
			photoScrollList.style.left = photoScrollLeft + moveV + "px";
		}
		else	{
			photoScrollList.style.left = "0px";
		}
	}
}

function goBrdList(l,m,b,s) {
	var t = "";
	if(l == "8286"){
		t = _GLOBAL_CONTEXT_PATH_ + "/global/GlobalBrandAction.tmall?method=globalBrand&dispCtgrNo="+m;
		if(b)
			t+="&arrBrandCd="+b;
	}else{
		t = _GNB_CONTEXT_PATH_+"/browsing/DisplayCategory.tmall?method=getDisplayBrand3Depth&lCtgrNo="+l+"&dispCtgrNo="+m;
		if(!b&&!s)
			t = t.replace("3Depth","2Depth");

		if(b)
			t+="&arrBrandCd="+b;
		if(s)
			t+="&mCtgrNo="+s;
	}
	top.location.href=t;
}
function goBrdListPrd(l,m,b,s) {
	var t = "";
	if(l == "8286"){
		t = _GLOBAL_CONTEXT_PATH_ + "/global/GlobalBrandAction.tmall?method=globalBrand&dispCtgrNo="+m;
		if(b)
			t+="&arrBrandCd="+b;
	}else{
		t = _GNB_CONTEXT_PATH_+"/browsing/DisplayCategory.tmall?method=getDisplayBrand3Depth&lCtgrNo="+l+"&dispCtgrNo="+m;
		if(!b&&!s)
			t = t.replace("3Depth","2Depth");

		if(b)
			t+="&arrBrandCd="+b;
		if(s)
			t+="&mCtgrNo="+s;
	}
	window.open(t,"goBrdListPrd");
	//top.location.href=t;
}

var imgObj = new Image();
function showImgWin(imgName) {
	imgObj.src = imgName;
	setTimeout("createImgWin(imgObj)", 100);
}

function createImgWin(imgObj) {
	if (! imgObj.complete) {
		setTimeout("createImgWin(imgObj)", 100);
		return;
	}
	LeftPosition = (screen.width) ? (screen.width-imgObj.width)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-imgObj.height)/2 : 0;
	imageWin = window.open("", "imageWin",
		"width=" + imgObj.width + ",height=" + imgObj.height + ",top="+TopPosition+",left="+LeftPosition);
	imageWin.document.write("<html><body style='margin:0'>");
	imageWin.document.write("<a href=javascript:window.close()><img src='" + imgObj.src + "' border=0></a>");
	imageWin.document.write("</body><html>");
	imageWin.document.title = imgObj.src;
}

var seq = "";
function popsatisfaction(answer){
	Obj = $ID('satisfaction_0' + answer);
	if(seq != Obj){
		if(seq !=""){
			seq.style.display = "none";
		}
		Obj.style.display = "block";
		seq = Obj;
	}
	else{
		Obj.style.display = "none";
		seq = "";
	}
}

var mouseStatus = false;
function initLayerLoad(idName) {
	objLayer = $ID(idName);
	objLayer.onmouseover = function () {mouseStatus=true;}
	objLayer.onmouseout = function () {mouseStatus=false;}
	window.setInterval("doPlay('"+idName+"')", "5000");
}

function doPlay(idName) {
	if(!mouseStatus) layerObjHide(idName);
}

function tabConView2(idName,no,total,imgPass)	{
	for(var i = 1; i <= total; i++) 	{
		Obj_tab = $ID(idName + "_tab");

		Obj_tab.src=imgPass + no + ".gif";

		Obj_con = $ID(idName + "_con" + i);
		if(i==no)	{
			Obj_con.style.display="block";
		}
		else	{
			Obj_con.style.display="none";
		}
	}
}

function optionTab2(idName,moveF,moveV)	{
	var photoScrollList=$ID("" + idName + "");
	var photoScrollLeft = photoScrollList.style.left;
	photoScrollLeft = parseInt(photoScrollLeft.replace("px",""));

	photoScrollWidth = photoScrollList.style.width;
	photoScrollWidth = parseInt(photoScrollWidth.replace("px",""));
	photoScrollWidth = -(photoScrollWidth-195);

	if (moveF == "P") {
		if (photoScrollLeft !=0)	{
			photoScrollList.style.left = photoScrollLeft + moveV + "px";
		}
	}
	else	{
		if (photoScrollLeft > photoScrollWidth)	{
			photoScrollList.style.left = photoScrollLeft + moveV + "px";
		}
	}
}

function layer_on(n){
	$ID(n).style.display='block';
}

function layer_off(n){
	$ID(n).style.display='none';
}

function cateView(idName,H,col)	{
	Obj 	= $ID(idName);
	Obj_btn = $ID(idName + "_btn");

	if	(Obj.style.height=="" || Obj.style.height==H+ "px" )	{
		Obj.style.height="auto";
		Obj_btn.src="/img/common/btn/btn_moreMinus"+col+".gif";
	}
	else	{
		Obj.style.height= H + "px";
		Obj_btn.src="/img/common/btn/btn_morePlus"+col+"02.gif";
	}
}

function commentExView()	{
	Obj 		= $ID("commentEx");
	Obj_btn 	= $ID("commentEx_btn");

	if (Obj.style.display==null || Obj.style.display=="none")	{
		Obj.style.display="block";
		Obj_btn.src="/img/common/btn/btn_comClose.gif";
	}
	else	{
		Obj.style.display="none";
		Obj_btn.src="/img/common/btn/btn_comOpen.gif";
	}
}

function tab_layBrand(n)	{
	for(var i = 1; i <= 2; i++) {
		obj_T = $ID("tabLlayBrand_" + i + "");
		obj_Lay = $ID("layBrand_" + i + "");

		if ( n == i ) {
		obj_T.src="/img/browsing/brandshop/layTab_0" + n + "on.gif";
		obj_Lay.style.display="block"
		} else {
		obj_T.src="/img/browsing/brandshop/layTab_0" + i + ".gif";
		obj_Lay.style.display="none"
		}
	}
}

function selTopHidden(idName)    {
	obj_ID=$ID("" + idName + "");
	setTimeout("obj_ID.style.display='none'",3000);
}

function closeBanner(){
	if(navigator.appName != "Netscape"){
		if(document.all['goldegg'].style.visibility == "visible")
			document.all['goldegg'].style.visibility = "visible";
		else
			document.all['goldegg'].style.visibility = "hidden";
	}
	if(navigator.appName == "Netscape"){
		if(document.layers['goldegg'].visibility == "showow")
			document.layers['goldegg'].visibility = "closeBanner";
		else
			document.layers['goldegg'].visibility = "hide";
	}
}

function imgOver(imgName) {
	imgName.src = imgName.src.replace(".gif", "_on.gif");
	imgName.src = imgName.src.replace(".jpg", "_on.jpg");
}
function imgOut(imgName) {
	imgName.src = imgName.src.replace("_on.gif", ".gif");
	imgName.src = imgName.src.replace("_on.jpg", ".jpg");
}

function convertRRN(cont) {
	var isValidRRN = function(rn1, rn2) {
		if (rn1	== null	|| rn1.length != 6 || rn2 == null || rn2.length	!= 7) return false;

		var	yy = rn1.substr(0,2);		// 년도
		var	mm = rn1.substr(2,2);		// 월
		var	dd = rn1.substr(4,2);		// 일
		var	genda =	rn2.substr(0,1);	// 성별
		var ccd = rn2.substr(6, 1);		// Check Digit

		// 5,6,7,8 외국인
		if (genda == "1" ||	genda == "2" ||	genda == "5" ||	genda == "6") yy = "19"	+	yy;
		else	yy = "20" +	yy;

		// 1. 날짜	형식 체크
		switch (parseInt(mm)) {
			case 2:		// 2월의 경우
				if (parseInt(dd) >	29)	return false;

				if (parseInt(dd) ==	29)	{
					// 2월 29의	경우 당해가	윤년인지를 확인
					if ((yy	% 4	!= 0) ||	(yy	% 100 ==	0) && (yy %	400	!= 0)) return false;
				}
			break;
		case 4:
		case 6:
		case 9:
		case 11:
			if (parseInt(dd) ==	31)	return	false;
		}

		// 2. Check Digit 검사
		var n =	2, sum	= 0;
		for (var i = 0; i < rn1.length; i++)
			sum	+= parseInt(rn1.substr(i, 1)) * n++;

		for (var i = 0 ; i < rn2.length-1; i++) {
			sum	+= parseInt(rn2.substr(i, 1)) * n++;
			if (n == 10) n = 2;
		}
		var c = 11 - sum % 11;
		if (c == 11) c = 1;
		if (c == 10) c = 0;
		if (c != ccd)	return false;
		else return	true;
	};

	var	_REGEX_JMN = /\b[^0-9]*(\d{2}(0[0-9]|1[0-2])([0-2][0-9]|3[0-1]))(-)?([1-8]\d{6})[^0-9]*\b/gm;

	var arr
	var orgStr = new Array();
	var cvntStr = new Array();
	while ((arr = _REGEX_JMN.exec(cont)) != null) {
		// 패턴매칭된 건이 RRN일 경우
		if (isValidRRN(RegExp.$1, RegExp.$5)) {
			orgStr.push(RegExp.$1+RegExp.$4+RegExp.$5);
			cvntStr.push(RegExp.$1+RegExp.$4+"*******");
		}
	}

	if (orgStr.length > 0) {
		for (var i = 0; i < orgStr.length; i++) {
			cont = cont.replace(orgStr[i],cvntStr[i]);
		}
		return cont;
	} else {
		return "";
	}
}

function _goSellerShop(sellerId){
	//HeaderComm.goMiniMall('', sellerId);
	top.location.href = 'http://www.11st.co.kr/' + sellerId;
}

function _goPrdLinkMiniMall(prdNo, sellerId){
	//HeaderComm.goMiniMall(prdNo, sellerId);
	var ajaxUrl = "http://www.11st.co.kr/minimall/MiniMallAjaxAction.tmall?method=getNickNameMappedMinimall&prdNo=" + prdNo;

    var resultData = '';
	try{
		jQuery.ajax({
			url: ajaxUrl,
			dataType: "jsonp",
			success: function(data){
				getHmpgUrl(data, sellerId);
			}
		});
	} catch(e){}
}

function getHmpgUrl(data, sellerId){
	//HeaderComm.goMiniMall('', sellerId);
	if (typeof(data) == "undefined") {
		//ajax 결과값이 없는 경우 대표미니몰로 링크
		top.location.href = 'http://shop.11st.co.kr/' + sellerId;
	}
	else {
		if (data.sellerHmpgUrl.length > 0 ) {
		    top.location.href = 'http://shop.11st.co.kr/' + data.sellerHmpgUrl;
		}
		else {
			//정상으로 매핑된 미니몰이 없는 경우 대표미니몰로 링크
			top.location.href = 'http://shop.11st.co.kr/' + sellerId;
		}
	}
}

function _goSellerSearch(sellerId){
	var gnbFormObj = document.forms["GNBSearchForm"];
	gnbFormObj.kwd.value = sellerId;
	gnbFormObj.tagetTabNm.value = "판매자";
	gnbFormObj.targetTab.value = "SL";
	gnbFormObj.gnbTag.value = "SL";
	gnbFormObj.pageSize.value = "50";
	gnbFormObj.target = "_top";
	gnbFormObj.schFrom.value = "PL_MORE";
	gnbFormObj.action = "http://search.11st.co.kr/SearchPrdAction.tmall";
	gnbFormObj.method.value = "getTotalSearchSeller";
	gnbFormObj.submit();
}

function comparePrdList(comparePrdNo, adultsYn) {
	if(adultsYn == 'N'){
		if(!funcCheckIsLogin()) {
			openLogin(1);
			return;
		}
		if(funcCheckIsMinor()) {
			var conUrl = _GNB_CONTEXT_PATH_ + "/jsp/common/checkAdultContents.jsp?referer=" + document.domain;
			var conWin = window.open(conUrl, 'PreView', "width=800, height=320, scrollbars=yes, status=no");
			return;
		}
		else{
			hiddenProcess.location.href = _GNB_CONTEXT_PATH_ + "/today/InterestProductAction.tmall?method=getComparePrd&comparePrdNo="+comparePrdNo;
		}
	}
	else{
		hiddenProcess.location.href = _GNB_CONTEXT_PATH_ + "/today/InterestProductAction.tmall?method=getComparePrd&comparePrdNo="+comparePrdNo;
	}
}

function funcPopPreview(prdNo){
	var url = _GNB_CONTEXT_PATH_ + "/browsing/PreviewPop.tmall?method=getPreviewPop&prdNo=" + prdNo;
	var win = window.open(url, 'PreView', "width=850, height=590, scrollbars=yes, status=no, resizable=yes");
}

function funcPopPreviewCart(prdNo){
	var url = _GNB_CONTEXT_PATH_ + "/browsing/PreviewPop.tmall?orderPage=YES&method=getPreviewPop&prdNo=" + prdNo;
	var win = window.open(url, 'PreView', "width=850, height=590, scrollbars=yes, status=no, resizable=yes");
}

function funcPopPreviewList(prdNo, adultsYn, reviewYn){
	var url = _GNB_CONTEXT_PATH_ + "/browsing/PreviewPop.tmall?method=getPreviewPop&prdNo=" + prdNo;
	var height = 590;
	if ( getBrowserInfo() == "IE7" )	{
		height = 620;
	}

	if(reviewYn == 'Y') { //[P100712]검색UT 결과 따른 리스팅 개선 - 페이지 접근시 리뷰탭 선택노출 여부 2010.10.26
		url += '&reviewTab=Y';
	}else if (reviewYn == 'AFFL') { //제휴사내 아이프레임에 들어가는 리스트를 위해 추가
		url += '&afflTarget=_blank';
	}else if (reviewYn == 'YAFFL') { //제휴사내 아이프레임에 들어가는 리스트를 위해 추가
		url += '&reviewTab=Y&afflTarget=_blank';
	}

	if(adultsYn == 'N'){
		if(!funcCheckIsLogin()) {
			openLoginAdults(1);
			return;
		}
		if(funcCheckIsMinor()) {
			if (typeof(_callbackScriptName) != 'undefined' && typeof(_callbackScriptParams) != 'undefined') {
				_callbackScriptName = "funcPopPreviewList";
				_callbackScriptParams = prdNo + "†" + adultsYn + "†" +reviewYn;
			}
			var conUrl = _GNB_CONTEXT_PATH_ + "/checkAdult.page?formName=adultCrtf&referer="+ document.domain;
			var conWin = window.open(conUrl, 'PreView', "width=800, height=320, scrollbars=no, status=no");
		}
		else{
			var win = window.open(url, '', "width=850, height=" + height + ", scrollbars=yes, status=no, resizable=yes");
		}
	}
	else{
		var win = window.open(url, '', "width=850, height=" + height + ", scrollbars=yes, status=no, resizable=yes");
	}
}

function funcPopPreviewOtherDomain(prdNo, adultsYn, otherDomainYn){
	var url = "http://www.11st.co.kr/browsing/PreviewPop.tmall?method=getPreviewPop&otherDomainYn="+otherDomainYn+"&prdNo=" + prdNo;

	if(adultsYn == 'N'){
		if(!funcCheckIsLogin()) {
			openLogin(1);
			return;
		}
		if(funcCheckIsMinor()) {
			var conUrl = _GNB_CONTEXT_PATH_ + "/jsp/common/checkAdultContents.jsp?referer=" + document.domain;
			var conWin = window.open(conUrl, 'PreView', "width=800, height=320, scrollbars=yes, status=no");
			return;
		}
		else{
			var win = window.open(url, 'PreView', "width=850, height=590, scrollbars=no, status=no");
		}
	}
	else{
		var win = window.open(url, 'PreView', "width=850, height=590, scrollbars=no, status=no");
	}
}

function funcCartProduct(prdNo) {
	hiddenProcess.location.href = _GNB_CONTEXT_PATH_ + "/cart/CartAction.tmall?method=getRegMultiCart&arrPrdNo="+prdNo+"&accountBar=T";
}

function funcCartProductList(prdNo, adultsYn) {
	if(adultsYn == 'N'){
		if(!funcCheckIsLogin()) {
			openLogin(1);
			return;
		}
		if(funcCheckIsMinor()) {
			var conUrl = _GNB_CONTEXT_PATH_ + "/jsp/common/checkAdultContents.jsp?referer=" + document.domain;
			var conWin = window.open(conUrl, 'PreView', "width=800, height=320, scrollbars=yes, status=no");
			return;
		}
		else{
			hiddenProcess.location.href = _GNB_CONTEXT_PATH_ + "/cart/CartAction.tmall?method=getRegMultiCart&arrPrdNo="+prdNo+"&accountBar=T";
		}
	}
	else{
		hiddenProcess.location.href = _GNB_CONTEXT_PATH_ + "/cart/CartAction.tmall?method=getRegMultiCart&arrPrdNo="+prdNo+"&accountBar=T";
	}
}

function funcCartProductList(prdNo, adultsYn, xzone, xfrom) {
	if(adultsYn == 'N'){
		if(!funcCheckIsLogin()) {
			openLogin(1);
			return;
		}
		if(funcCheckIsMinor()) {
			var conUrl = _GNB_CONTEXT_PATH_ + "/jsp/common/checkAdultContents.jsp?referer=" + document.domain;
			var conWin = window.open(conUrl, 'PreView', "width=800, height=320, scrollbars=yes, status=no");
			return;
		}
		else{
			hiddenProcess.location.href = _GNB_CONTEXT_PATH_ + "/cart/CartAction.tmall?method=getRegMultiCart&arrPrdNo="+prdNo+"&accountBar=T" + "&xzone=" + xzone + "&xfrom=" + xfrom;
		}
	}
	else{
		hiddenProcess.location.href = _GNB_CONTEXT_PATH_ + "/cart/CartAction.tmall?method=getRegMultiCart&arrPrdNo="+prdNo+"&accountBar=T" + "&xzone=" + xzone + "&xfrom=" + xfrom;
	}
}

var jjimPlnDispNo = "";
function jjimExhibition(plnDispNo){}

function likeExhibition(plnDispNo){
	var $likeAreaWrap = jQuery("div[name=like_"+plnDispNo+"]");

	var likePlnDispNo = "";

	if(plnDispNo != "") {
		likePlnDispNo = plnDispNo;
	}else {
		return;
	}

	var success = function(data){

		var likeInfoHtml = "<span class=\"likethis_txt\">좋아요</span>" + data.likeCntString;
		if(data.likeCnt > 9999){
			likeInfoHtml += "<span class=\"num_plus\">+</span>";
		}

		jQuery("button", $likeAreaWrap).html(likeInfoHtml);

		$likeAreaWrap.bind({
			mouseleave : function(){
				jQuery("p", $likeAreaWrap).hide();
			}
		});

		$likeAreaWrap.bind({
			mouseenter : function(){
				jQuery("p", $likeAreaWrap).show();
			}
		});

		$likeAreaWrap.parent("div").css("overflow", "visible");

		jQuery("p", $likeAreaWrap).show();
		jQuery("a", $likeAreaWrap).attr("href", _ACTION_CONTEXT_ + "/browsing/ExhibitionWishPlanDisp.tmall?method=exhibitionWishPlanList");
	}

	var callback = function(data){
		if(data.resultCd == "success"){
			success(data);
		}else if(data.resultCd == "failure"){
			alert("일시적인 오류가 발생했습니다. 다시 시도해 주십시요.");
		}else if(data.resultCd == "already"){
			alert("이미 좋아요 한 기획전입니다.");
		}else if(data.resultCd == "login"){
			openLogin(5, "afterLikeSrchLogin");
			return;
		}
	};

	if(!funcCheckIsLogin()) {
		openLogin(5, "afterLikeSrchLogin");
		return;
	}else {
		$likeAreaWrap.addClass("checked");
		var url = _ACTION_CONTEXT_ + "/commons/LikeAjaxAction.tmall?method=addLikeExhibition&plnDispNo=" + plnDispNo + "&callBack=?";
		jQuery.getJSON(url, callback);
	}
}

function afterJjimPlnDispLogin(){}

var jjimProdNo = "";
function funcJjimProduct(prdNo) {
	if(!funcCheckIsLogin()) {
		jjimProdNo = prdNo;
		openLogin(5, "afterLogin");
		return;
	}else{
		hiddenProcess.location.href = _GNB_CONTEXT_PATH_ + "/interest/AuthInterestProductAction.tmall?method=interestProductTransit&interestPrdNo="+prdNo+"&accountBar=T";
	}
}

function funcJjimProduct(prdNo,xzone,xfrom) {
	if(!funcCheckIsLogin()) {
		jjimProdNo = prdNo;
		openLogin(5, "afterLogin");
		return;
	}else{
		hiddenProcess.location.href = _GNB_CONTEXT_PATH_ + "/interest/AuthInterestProductAction.tmall?method=interestProductTransit&interestPrdNo="+prdNo+"&accountBar=T" + "&xzone=" + xzone + "&xfrom=" + xfrom;
	}
}

function afterLogin() {
	if($ID('divGnbLogin')){
		var logoutViewLoc = $ID('divGnbLogin');
		logoutViewLoc.innerHTML = "<img src=\"/img/common/gr/utilMenu_01_2.gif\" alt=\"로그아웃\" onClick=\"logout();\" style=\"cursor:hand\">";
	}
	hiddenProcess.location.href = _GNB_CONTEXT_PATH_ + "/interest/AuthInterestProductAction.tmall?method=interestProductTransit&interestPrdNo="+jjimProdNo+"&accountBar=T";
}

function afterLikeSrchLogin() {
	document.location.reload();
}

function funcJjimProductList(prdNo, adultsYn) {
	if(adultsYn == 'N'){
		if(!funcCheckIsLogin()) {
			openLogin(1);
			return;
		}
		if(funcCheckIsMinor()) {
			var conUrl = _GNB_CONTEXT_PATH_ + "/jsp/common/checkAdultContents.jsp?referer=" + document.domain;
			var conWin = window.open(conUrl, 'PreView', "width=800, height=320, scrollbars=yes, status=no");
			return;
		}
		else{
			hiddenProcess.location.href = _GNB_CONTEXT_PATH_ + "/interest/AuthInterestProductAction.tmall?method=interestProductTransit&interestPrdNo="+prdNo+"&accountBar=T";
		}
	}
	else{
		if(!funcCheckIsLogin()) {
			jjimProdNo = prdNo;
			openLogin(5);
			return;
		}
		else{
			hiddenProcess.location.href = _GNB_CONTEXT_PATH_ + "/interest/AuthInterestProductAction.tmall?method=interestProductTransit&interestPrdNo="+prdNo+"&accountBar=T";
		}
	}
}

function funcCompareProduct(prdNo) {
	hiddenProcess.location.href = _GNB_CONTEXT_PATH_ + "/today/InterestProductAction.tmall?method=getComparePrd&comparePrdNo="+prdNo;
}

function funcCompareProductList(prdNo, adultsYn) {
	if(adultsYn == 'N'){
		if(!funcCheckIsLogin()) {
			openLogin(1);
			return;
		}
		if(funcCheckIsMinor()) {
			var conUrl = _GNB_CONTEXT_PATH_ + "/jsp/common/checkAdultContents.jsp?referer=" + document.domain;
			var conWin = window.open(conUrl, 'PreView', "width=800, height=320, scrollbars=yes, status=no");
			return;
		}
		else{
			hiddenProcess.location.href = _GNB_CONTEXT_PATH_ + "/today/InterestProductAction.tmall?method=getComparePrd&comparePrdNo="+prdNo;
		}
	}
	else{
		hiddenProcess.location.href = _GNB_CONTEXT_PATH_ + "/today/InterestProductAction.tmall?method=getComparePrd&comparePrdNo="+prdNo;
	}
}

//icon 주문하기
function funcOrderProduct(prdNo) {
	top.location.href = $URL.prd(prdNo);
}

function funcOrderProductList(prdNo, adultsYn) {
	if(adultsYn == 'N'){
		if(!funcCheckIsLogin()) {
			openLogin(1);
			return;
		}
		if(funcCheckIsMinor()) {
			var conUrl = _GNB_CONTEXT_PATH_ + "/jsp/common/checkAdultContents.jsp?referer=" + document.domain;
			var conWin = window.open(conUrl, 'PreView', "width=800, height=320, scrollbars=yes, status=no");
			return;
		}
		else{
			top.location.href =  $URL.prd(prdNo);
		}
	}
	else{
		top.location.href = $URL.prd(prdNo);
	}
}

//상품상세 보기19금
function productDetailViewAdults(prdNo,adultsYn,xfrom,xzone,tar,redirectUrl){
	var url = _PRODUCT_DETAIL_URL_+prdNo+"&xfrom="+xfrom+"&xzone="+xzone;
	if(typeof(redirectUrl) != "undefined"){
		url = redirectUrl;
	}

	if(adultsYn == 'N')
	{
		if(!funcCheckIsLogin())
		{
			openLoginAdults(2,'',url);
			return;
		}

		if(funcCheckIsMinor())
		{
			var targetUrl = encodeURIComponent(url);
			url = _GNB_CONTEXT_PATH_ + "/checkAdult.page?referer="+ document.domain+"&type=2&targetUrl="+targetUrl;
			window.open(url, 'PreView', "width=800, height=320, scrollbars=no, status=no");
		}
		else
		{
			openProductDetail(url,"TOP");
		}
	}else {
		openProductDetail(url,"TOP");
	}
}

function productDetailViewAdultsCPC(prdNo, adultsYn, trcNo, typGubn, areaGubn, xfrom, xzone){

	var redirectUrl = _GNB_CONTEXT_PATH_ + '/advert/internalAd.tmall?prdNo=' + prdNo + '&trcNo=' + trcNo + '&typGubn=' + typGubn + '&areaGubn=' + areaGubn + '&xfrom=' + xfrom + '&xzone=' + xzone;
	return productDetailViewAdults(prdNo, adultsYn, xfrom, xzone, '', redirectUrl);
}

function openProductDetail(url, tar)
{
	switch (tar){
	case "OPEN":
		window.open(url, '11st', "width=1024, height=768, scrollbars=no, status=no");
		break;
	case "TOP":
		top.location.href = url;
		break;
	case "SELF":
		location.href = url;
		break;
	default:
		window.open(url, '11st', "width=1024, height=768, scrollbars=no, status=no");
		break;
	}
}

//브라우져 정보 리턴
function getBrowserInfo()	{
	var browser = navigator.userAgent.toLowerCase();

	if (browser.indexOf("msie 6") != -1)	{
		return "IE6";
	}	else if (browser.indexOf("msie 7") != -1)	{
		return "IE7";
	}	else if (browser.indexOf("msie 8") != -1)	{
		return "IE8";
	}	else if (browser.indexOf("msie") != -1)		{
		return "IE";
	}	else if (browser.indexOf("firefox") != -1)	{
		return "FF";
	}	else if (browser.indexOf("opera") != -1)	{
		return "OP"
	}
}

//get charset
function getHtmlCharset()	{
	var charset = "euc-kr";
	try	{
		var metas = document.getElementsByTagName("meta");
		for ( var i = 0 ; i < metas.length ; i++)	{
			var content = metas[i].content.toLowerCase();

			if ( content.indexOf("utf-8") > -1 )	{
				charset = "utf-8"
				break;
			}	else if ( content.indexOf("euc-kr") > -1 )	{
				charset = "euc-kr"
				break;
			}
		}
	}	catch (e)	{}

	return charset;
}

//////////////////////////////////웹트랙   시작   ///////////////////////////////////

/*
메인 프레임의 onLoad EventHandler
*/
function eMsEvent()
{
	try
	{
		// 웹추적메일을 통해서 넘어 올 경우 로그 쌓기
		// getCookie -> TMCookieUtil.getSubCookie(0,"name1");
		if (getCookie('EHEMailCont') != "")
		{
			setBrowserType();
			if (parent)
				callWebServer(location.href);
			else
				callWebServer(parent.location.href);
		}
		//초기에 넘어 올 경우 (alpha2 포함된 url한해서)
		else if (document.location.search.indexOf('alpha2=') > 0)
		{
			// 처음 한번만 호출이 된다.
			callWebServer("VISIT_"+document.location.hostname);
		}
		else
		{
			if (parent)
			{
				if (parent.document.location.search.indexOf('alpha2=') > 0)
				{
					// 처음 한번만 호출이 된다.
					callWebServer("VISIT_"+parent.document.location.hostname);
				}
			}
		}

		// 이미 BROWSER_TYPE이 설정이 되어 있다면, IE의 경우 반복적으로 실행할 필요가 없다.
		if (BROWSER_TYPE == "IE")
		{
			return ;
		}
	}
	catch(e)
	{
	}
}

// email tracking call function ( by kittel)
function call_ems_order(item_code,item_num, item_price){}

var BROWSER_TYPE;       // 브라우저 타입 FF:FireFox IE:Internet Explorer
var BROWSER_VERSION;    // 브라우저 버젼
/*
브라우저의 타입과 버젼을 설정한다.
*/
function setBrowserType(){
	var browserType = "";
	var browserVersion = "";

	if (navigator.appName == "Netscape") {
		browserType = "FF";
	} else if ( navigator.appName == "Microsoft Internet Explorer" ) {
		browserType = "IE";
		if (navigator.appVersion.charAt(0) == "4") {
			if(navigator.appVersion.indexOf("MSIE 5") != -1) {
					browserVersion = "5";
			} else if(navigator.appVersion.indexOf("MSIE 6") != -1) {
					browserVersion = "6";
			} else if(navigator.appVersion.indexOf("MSIE 7") != -1) {
					browserVersion = "7";
			} else if(navigator.appVersion.indexOf("MSIE 8") != -1) {
					browserVersion = "8";
			} else {
					browserVersion = "4";
			}
		} else if (navigator.appVersion.charAt(0) == "5") {
			browserVersion = "5";
		}
	}

	BROWSER_TYPE = browserType;
	BROWSER_VERSION = browserVersion;

}
function checkUrl_IE(){}

/*
타겟 페이지의 주소를 매겨변수로 해서, 웹서버 호출
*/
function callWebServer(URL){
	var protocol = window.document.location.protocol;
	if (protocol == "http:")
	{
		var dummy = (new Date()).getTime() + '' + Math.round(Math.random() * 10000);
		(new Image()).src = 'http://mailing6.11st.co.kr/framework.html?' + TMCookieUtil.getSubCookie(0,'EHEMailCont') + '&URL=' + URL  + '&dummy=' + dummy;
	}
}

//100414 dire, 신한,삼성 11개월 할인 이벤트 용 레이어
function showShc1(id)
{
	try
	{
		document.getElementById(id).innerHTML = '<div class="sbox_grayTL"><div class="sbox_grayBR"><div class="sbox_grayTR"><div class="sbox_grayBL">장바구니 결제금액이 5만원 이상일 경우 무이자 할부 가능합니다.</div></div></div></div>';
		document.getElementById(id).style.display='block';
	}
	catch (e) { }
}
//////////////////////////////////웹트랙   시작 END   ///////////////////////////////////
function copy(code){
	window.clipboardData.setData("Text", code);
}
//prdNo파라미터는 상품상세에서만 사용
function postArticle(sns, objNo) {
	var url = "";
	url+=_GNB_CONTEXT_PATH_+"/browsing/PostArticle.tmall?method=setPosting";

	var winSize = '';
	var option = '';

	if ("clog" == sns) {
		winSize = "width=400,height=364";
		option = ",scrollbars=no,resizable=no";

		var priceInfo = ""; // Clog공감상품 선물하기  가격정보
		try{
			if (typeof(__SEL_PRICE__) != "undefined" && __SEL_PRICE__.length > 0) {
				priceInfo = "&tag4=" + escape(encodeURIComponent(num_format(__SEL_PRICE__) + "원"));
				url+=priceInfo;
			}
		} catch(e){}

	} else if ("facebook" == sns) {
		winSize = "width=600,height=400";
		option = ",scrollbars=yes,status=yes,resizable=yes,toolbar=yes,location=yes,menubar=yes";
	} else if ("nate" == sns){
		winSize = "width=500, height=540";
	} else {
		winSize = "width=1024,height=768";
		option = ",scrollbars=yes,status=yes,resizable=yes,toolbar=yes,location=yes,menubar=yes";
	}

	var trackingPage = "";
	if (typeof(__SNS_TRACKING_PAGE__) != "undefined" && __SNS_TRACKING_PAGE__.length > 0) {
		trackingPage = "&tracking="+__SNS_TRACKING_PAGE__;
	} else {
		trackingPage = "&tracking=etc";
	}
	url+=trackingPage;

	url+="&sns="+sns;

	var pathName = document.location.pathname;

	var currentUrl = "";
	if (typeof(__SNS_PRD_NO__) != "undefined" && __SNS_PRD_NO__.length > 0 && __SNS_TRACKING_PAGE__ == "spc") {
		var urlTemp = "";
		if (document.URL.indexOf("&toDayPrdNo") > 0) {
			urlTemp = document.URL.substring(0,document.URL.indexOf("&toDayPrdNo"));
		} else {
			urlTemp = document.URL;
		}
		currentUrl = "&url="+encodeURIComponent(urlTemp+"&toDayPrdNo="+__SNS_PRD_NO__);
	}else if(pathName.indexOf("/SellerProductDetail.tmall") != -1 && objNo!= undefined && objNo != null){
		currentUrl = "&url="+encodeURIComponent($URL.prd(objNo));
	}else if(pathName.indexOf("/MallPlanDetail.tmall") != -1 && objNo!= undefined && objNo != null){
		currentUrl = "&url="+encodeURIComponent($URL.plan(objNo));
	}else {
		currentUrl = "&url="+encodeURIComponent(document.URL);
	}
	url+=currentUrl;

	var subject = "";
	if (typeof(__SNS_SUBJECT__) != "undefined" && __SNS_SUBJECT__.length > 0) {
		subject = "[11번가] "+__SNS_SUBJECT__.replace(/[&]/g,"");
		if (subject.length> 110) {
			subject = subject.substring(0,110)+"...";
		}
	} else {
		subject = "[11번가] 쇼핑스트리트 ";
	}
	url+="&subject="+escape(encodeURIComponent(subject));

	var win = window.open(url, '', winSize+option);
}

function num_format(n) { // 천원단위 끊어주는 JS
	var reg = /(^[+-]?\d+)(\d{3})/;
	n = String(n);

	while(reg.test(n))
		n = n.replace(reg, '$1' + ',' + '$2');

	return n;
}


//상품리스트 찜하기
var jjimPrdNo = "";
function fnSrchPrdJJim(prdNo) {
	if(prdNo != "") {
		jjimPrdNo = prdNo;
	}else {
		return;
	}
	if(!funcCheckIsLogin()) {
		openLogin(5, "afterJjimSrchLogin");
		return;
	}else {
		var url = "/srchjjim/AuthInterestProductAction.tmall?method=interestProductTransit&fromUrl=SRCH_PRD_LIST&interestPrdNo="+jjimPrdNo;
		hiddenProcess.location.href = url;
	}
}

var jjimPrefix = "";
function fnSrchPrdJJim(prdNo, minorYn, prefix, prdTypCd) {
	if(prdNo != "") {
		jjimPrdNo = prdNo;
	}else {
		return;
	}

	if(prdTypCd == "20"){
		alert("다운로드 상품은 찜하기가 적용되지 않습니다.");
		return;
	}

	if(prefix != "" && prefix != undefined) {
		jjimPrefix = prefix;
	}else {
		jjimPrefix = "";
	}

	if(!funcCheckIsLogin()) {
		openLogin(5, "afterJjimSrchLogin");
		return;
	}else {
		var url = "/srchjjim/AuthInterestProductAction.tmall?method=interestProductTransit&fromUrl=SRCH_PRD_LIST&interestPrdNo="+jjimPrdNo;

		if ( typeof document.hiddenProcess != 'undefined' )
		{
			document.hiddenProcess.location.href = url;
		}
		else
		{
			var ifrmHiddenPrcess = document.createElement('iframe');
			ifrmHiddenPrcess.name = 'hiddenProcess';
			ifrmHiddenPrcess.src = url;
			ifrmHiddenPrcess.width = 0;
			ifrmHiddenPrcess.height = 0;
			ifrmHiddenPrcess.frameborder = 0;
			document.body.appendChild(ifrmHiddenPrcess);
		}
	}
}

//제휴사 아이프레임내 찜
function fnSrchPrdJJimAffl(prdNo) {
	if(prdNo != "") {
		jjimPrdNo = prdNo;
	}else {
		return;
	}
	if(!funcCheckIsLogin()) {
		openLogin(5, "afterJjimSrchLoginAffl");
		return;
	}else {
		var url = "/srchjjim/AuthInterestProductAction.tmall?method=interestProductTransit&fromUrl=AFFL_PRD_LIST&interestPrdNo="+jjimPrdNo;
		hiddenProcess.location.href = url;
	}
}

function fnSrchPrdJJimAffl(prdNo, minorYn, prefix, prdTypCd) {
	if(prdNo != "") {
		jjimPrdNo = prdNo;
	}else {
		return;
	}

	if(prdTypCd == "20"){
		alert("다운로드 상품은 찜하기가 적용되지 않습니다.");
		return;
	}

	if(prefix != "" && prefix != undefined) {
		jjimPrefix = prefix;
	}else {
		jjimPrefix = "";
	}

	if(!funcCheckIsLogin()) {
		openLogin(5, "afterJjimSrchLoginAffl");
		return;
	}else {
		var url = "/srchjjim/AuthInterestProductAction.tmall?method=interestProductTransit&fromUrl=AFFL_PRD_LIST&interestPrdNo="+jjimPrdNo;

		if ( typeof document.hiddenProcess != 'undefined' )
		{
			document.hiddenProcess.location.href = url;
		}
		else
		{
			var ifrmHiddenPrcess = document.createElement('iframe');
			ifrmHiddenPrcess.name = 'hiddenProcess';
			ifrmHiddenPrcess.src = url;
			ifrmHiddenPrcess.width = 0;
			ifrmHiddenPrcess.height = 0;
			ifrmHiddenPrcess.frameborder = 0;
			document.body.appendChild(ifrmHiddenPrcess);
		}
	}
}
function sucessSrchJJimAffl() {

	try {
		removeCookieWB(); //날개배너 쿠키 갱신

		if(jjimPrefix != "" && jjimPrefix != undefined)
		{
			var $jjimTextObj = jQuery("#" + jjimPrefix + "_jjim_" + jjimPrdNo + "_text");
			var $jjimLayerObj = jQuery("#" + jjimPrefix + "_jjim_" + jjimPrdNo + "_layer");

			if( $jjimTextObj.is("[newSelected='new']"))
			{
				$jjimTextObj.removeClass().addClass("pub_wishlist selected");
				jQuery("span", $jjimTextObj).removeClass().addClass("selected");
				$jjimTextObj.attr("title","찜담기 완료");

				$jjimLayerObj.css("display", "block");
				$jjimLayerObj.parents("div.title_area").css("z-index", 199);

				$jjimLayerObj.parents("div.product_conts").bind({
					mouseleave : function(){
						$jjimLayerObj.css("display","none");
						$jjimLayerObj.parents("div.title_area").css("z-index", 2);
					}
				});

				$jjimLayerObj.parent("div.pub_wishlist_wrap").bind({
					mouseenter : function(){
						$jjimLayerObj.css("display","block");
						$jjimLayerObj.parents("div.title_area").css("z-index", 199);
					}
				});
			}
		}
		else if( jQuery("#srch_jjim_"+jjimPrdNo).is("[newSelected='new']"))
		{
			jQuery("#srch_jjim_"+jjimPrdNo).removeClass().addClass("pub_wishlist selected");
			jQuery("#srch_jjim_"+jjimPrdNo +"> span").removeClass().addClass("selected");
			jQuery("#srch_jjim_"+jjimPrdNo).attr("title","찜담기 완료");
			WishItemLayer.add('srch_jjim_' + jjimPrdNo);

			jQuery("#list_jjim_"+ jjimPrdNo).css("display", "block");

			jQuery("#list_jjim_"+ jjimPrdNo).one({
				mouseleave : function(){
					jQuery(this).css("display","none");
				}
			});
		}
		else
		{
			if($NM('srch_jjim_' + jjimPrdNo).length > 1) {
				for(var i=0; i<$NM('srch_jjim_' + jjimPrdNo).length; i++) {
					setJJimClickStyle($NM('srch_jjim_' + jjimPrdNo)[i]);
				}
			}else {
				//setJJimClickStyle($ID('srch_jjim_' + jjimPrdNo));
				//WishItemLayer.add('srch_jjim_' + jjimPrdNo);

				var jjimObj = jQuery("#srch_jjim_"+jjimPrdNo);

				if ( jjimObj.hasClass('view_3') )
				{
					jjimObj.removeClass().addClass("view_3_on");
				}
				else if ( jjimObj.hasClass('view_3_on') )
				{
					return false;
				}
				else
				{
					jjimObj.removeClass().addClass("pub_wishlist selected");
					jQuery("#srch_jjim_"+jjimPrdNo +"> span").removeClass().addClass("selected");
				}
			}
		}

		return false;
	} catch(e) {}
}
function afterJjimSrchLoginAffl() {
	//setGnbLogInArea(); //GNB 로그인 이미지 변환처리
	var url = "/srchjjim/AuthInterestProductAction.tmall?method=interestProductTransit&fromUrl=AFFL_PRD_LIST&interestPrdNo="+jjimPrdNo;
	hiddenProcess.location.href = url;
}

function afterJjimSrchLogin() {
	var url = document.URL;
	if (url.indexOf("town.11st.co.kr") != -1){
		setGnbTownLogInArea(); //GNB 타운용 로그인 이미지 변환처리
	}else{
		setGnbLogInArea(); //GNB 로그인 이미지 변환처리
	}

	var url = "/srchjjim/AuthInterestProductAction.tmall?method=interestProductTransit&fromUrl=SRCH_PRD_LIST&interestPrdNo="+jjimPrdNo;
	hiddenProcess.location.href = url;
}
function sucessSrchJJim() {

	try {

		//document.getElementById("srch_jjim_" +jjimPrdNo).className ='pre_zzim_click';
		removeCookieWB(); //날개배너 쿠키 갱신
		//setWBSwf();       //날개배너 플래쉬 새로고침


		if(jjimPrefix != "" && jjimPrefix != undefined)
		{
			var $jjimTextObj = jQuery("#" + jjimPrefix + "_jjim_" + jjimPrdNo + "_text");
			var $jjimLayerObj = jQuery("#" + jjimPrefix + "_jjim_" + jjimPrdNo + "_layer");

			if( $jjimTextObj.is("[newSelected='new']"))
			{
				$jjimTextObj.removeClass().addClass("pub_wishlist selected");
				jQuery("span", $jjimTextObj).removeClass().addClass("selected");
				$jjimTextObj.attr("title","찜담기 완료");

				$jjimLayerObj.css("display", "block");
				$jjimLayerObj.parents("div.title_area").css("z-index", 199);

				$jjimLayerObj.parents("div.product_conts").bind({
					mouseleave : function(){
						$jjimLayerObj.css("display","none");
						$jjimLayerObj.parents("div.title_area").css("z-index", 2);
					}
				});

				$jjimLayerObj.parent("div.pub_wishlist_wrap").bind({
					mouseenter : function(){
						$jjimLayerObj.css("display","block");
						$jjimLayerObj.parents("div.title_area").css("z-index", 199);
					}
				});
			}
		}
		else if( jQuery("#srch_jjim_"+jjimPrdNo).is("[newSelected='new']"))
		{
			jQuery("#srch_jjim_"+jjimPrdNo).removeClass().addClass("pub_wishlist selected");
			jQuery("#srch_jjim_"+jjimPrdNo +"> span").removeClass().addClass("selected");
			jQuery("#srch_jjim_"+jjimPrdNo).attr("title","찜담기 완료");
			WishItemLayer.add('srch_jjim_' + jjimPrdNo);

			jQuery("#list_jjim_"+ jjimPrdNo).css("display", "block");

			jQuery("#list_jjim_"+ jjimPrdNo).one({
				mouseleave : function(){
					jQuery(this).css("display","none");
				}
			});
		}
		else
		{
			if($NM('srch_jjim_' + jjimPrdNo).length > 1) {
				for(var i=0; i<$NM('srch_jjim_' + jjimPrdNo).length; i++) {
					setJJimClickStyle($NM('srch_jjim_' + jjimPrdNo)[i]);
				}
			}else {
				//setJJimClickStyle($ID('srch_jjim_' + jjimPrdNo));
				//WishItemLayer.add('srch_jjim_' + jjimPrdNo);

				var jjimObj = jQuery("#srch_jjim_"+jjimPrdNo);

				if ( jjimObj.hasClass('view_3') )
				{
					jjimObj.removeClass().addClass("view_3_on");
				}
				else if ( jjimObj.hasClass('view_3_on') )
				{
					return false;
				}
				else
				{
					jjimObj.removeClass().addClass("pub_wishlist selected");
					jQuery("#srch_jjim_"+jjimPrdNo +"> span").removeClass().addClass("selected");
				}
			}
		}

		return false;
	} catch(e) {}
}
//___상품리스트 찜하기

function setJJimClickStyle(jjimObj)
{
	if ( jjimObj.className == 'view_3')
	{
		//싸이닉
		jjimObj.className ='view_3_on';
	}
	else
	{
		jjimObj.className ='pre_zzim_click';
	}
	jjimObj.title ='찜담기 완료';
}

/**
 * 찜 레이어 삽입
 */
var WishItemLayer = function() {
	var id = "";				// 찜 버튼 ID
	var layerId = "";			// 찜 레이어 ID
	var $jjimBtnArea;			// 찜 버튼 영역
	var isRender = false;		// 찜 레이어 생성 여부
	var isApplyCss = true;		// 찜 레이어의 css 적용 여부
	try{
		jQuery("li.listing_subtit .list_hgroup").css("z-index","1");
	}catch(e){}

	var updateZindex = function(objId) {

		var $listClass = jQuery("#"+objId).parents("ul").attr("class");

		jQuery("ul."+$listClass+" li").css("z-index","1");
		jQuery("ul."+$listClass+" .product_conts").css("z-index","1");
		jQuery(".title_area").css("z-index","1");
		jQuery("#"+objId).parents("ul."+$listClass+" li").css("z-index","12");
		jQuery("#"+objId).parents("ul."+$listClass+" .product_conts").css("z-index","12");
		jQuery("#"+objId).parents(".title_area").css("z-index","12");

		/* 구템플릿 적용은 연기함
		if(jQuery("#"+objId).is("[newSelected='new']")) {
			jQuery("ul.list_type .product_conts").css("z-index","1");
			jQuery("#"+objId).parents("ul.list_type .product_conts").css("z-index","10");
		}else{
			jQuery("ul.list_line").css("position","relative");
			jQuery("ul.list_line").css("z-index","1");
			jQuery("#"+objId).parents("ul.list_line").css("z-index","10");
		}
		*/

	};

	// ID설정
	var setId = function(btnId) {
		id = btnId;
		layerId = id+"_layer";
		updateZindex(id);
	};

	// 찜 레이어 그려진 여부 확인
	// => 찜 버튼의 wrapper 태그가 div이면서 class="pub_wishlist_wrap"인 경우 찜 레이어가 생성된 것으로 인식
	var checkRendering = function() {
		var $wrapperObj;
		$jjimBtnArea = jQuery("#"+id);

		while(true) {
			$wrapperObj = $jjimBtnArea.parent();
			if(getWrapperTagName($wrapperObj) == "DIV")
				break;

			$jjimBtnArea = $wrapperObj;
		}

		if($wrapperObj.attr("class") == "pub_wishlist_wrap")
			isRender = true;
	};

	// 부모 태그명 추출
	var getWrapperTagName = function($obj) {
		return $obj.get(0).tagName.toUpperCase();
	};

	// 찜 레이어 코딩 삽입
	var makeLayer = function() {
		var url =  _GNB_CONTEXT_PATH_ + "/interest/AuthInterestProductAction.tmall?method=getAllInterestProductInfo";

		$jjimBtnArea.wrap("<div class=\"pub_wishlist_wrap\"></div>");
		$jjimBtnArea.after("<p id=\""+ layerId +"\" style=\"display:block;\">찜한상품 등록완료 <a href=\""+ url +"\">확인하기</a></p>");

		// css 적용여부 확인(방어코드)
		if(jQuery("#"+layerId).css("position") != "absolute") {
			isApplyCss = false;
			removeLayer();
		} else {
			jQuery("#"+layerId).show();
		}
	};

	// 레이어 코딩 삭제(css가 적용되지 않은 경우 찜 레이어 코딩을 제거한다.)
	var removeLayer = function() {
		$jjimBtnArea.unwrap();
		jQuery("#"+layerId).remove();
	};

	// 이벤트 설정
	var setEventHandler = function() {
		if(isApplyCss) {
			eventInjection(id);			// 찜 버튼
			eventInjection(layerId);	// 찜 레이어
		}
	};

	// 해당 id에 이벤트 주입
	var eventInjection = function(eventObjId) {
		var targetId = layerId;

		jQuery("#"+eventObjId).mouseover(function() {
			updateZindex(eventObjId);
			layerView(targetId);
		}).mouseout(function() {
			layerHidden(targetId);
		});
	};

	var initialize = function(btnId) {
		setId(btnId);
		checkRendering();
		if(!isRender) {
			makeLayer();
			setEventHandler();
		}
		isRender = false;
	};

	return {
		add : function(btnId) {
			jQuery("div.pub_wishlist_wrap p").css("display","none");
			initialize(btnId);
		}
	}

}();


//방문 수령지 위치 보기 팝업
function _goVisitAddrPop(prdNo, memNo, addrSeq, mbAddrLocation)
{
	var url = _GNB_CONTEXT_PATH_ + "/product/SellerProductDetail.tmall?method=getVisitAddrPopUp&prdNo="+ prdNo
	+ "&memNo=" + memNo + "&addrSeq=" + addrSeq + "&mbAddrLocation=" + mbAddrLocation;

	var height = 730;
	var width = 630;

	var str = "height=" + height + ",innerHeight=" + height
			+ ",width=" + width + ",innerWidth=" + width
			+ ",status=no, resizable=no, menubar=no, toolbar=no, location=no, directories=no, scrollbars=no";

	if (window.screen)
	{
		var ah = screen.availHeight - 30;
		var aw = screen.availWidth - 10;

		var xc = (aw - width) / 2;
		var yc = (ah - height) / 2;

		str += ",left=" + xc + ",screenX=" + xc;
		str += ",top=" + yc + ",screenY=" + yc;
	}

	var _win = window.open(url, "visitAddrPop", str);
	_win.focus();
}

function goMembershipPop(url) {
	var membershipUrl = url + '&referer=' + location.host + '&protocols=' + location.protocol.substring(0,4);
	
	if (funcCheckIsLogin()) {
		funcCheckIsIdentityVerificationAjax(membershipUrl);
	} else {
		//로그인페이지 이동
		login();
	}
}

function funcCheckIsIdentityVerificationAjax(membershipUrl) {
	var isIdentityVerification = false;
	var ajaxUrl = 'http://www.11st.co.kr/register/checkCookie.tmall?method=getCookieVal&authParam=isCIDIAuthMember';

	try{
		jQuery.ajax({
			url: ajaxUrl,
			dataType: 'jsonp',
			success: function(data){
				isIdentityVerification = data;
				if (isIdentityVerification) {
					popViewMembershipCard(membershipUrl);
				} else {
					goIdentityVerification();
				}
			},
			error: function(){} 
		});
	} catch(e){}
}

function popViewMembershipCard(url) {
	window.open(url ,'membershipPop', 'width=550, height=575, status=no, scrollbars=yes');
}

//본인인증페이지 이동
function goIdentityVerification(code, previousUrl, returnUrl) {
	var prevUrl = encodeURIComponent(document.location.href);
	var retUrl = encodeURIComponent(document.location.href);
	
	if ( typeof(previousUrl) !== 'undefined' && previousUrl !== null && previousUrl !== '') {
		prevUrl = encodeURIComponent(previousUrl);
	}		
	
	if( typeof(returnUrl) !== 'undefined'  && returnUrl !== null && returnUrl !== '') {
		retUrl = encodeURIComponent(returnUrl);
	}
	
	goStatUrl(_GNB_CONTEXT_PATH_ + '/register/bridgeForAuth.tmall?method=bridgeForAuth&prevURL=' + prevUrl + '&returnURL=' + retUrl, code);
}


// 컨텐츠 신고하기 -- 2011.04 소셜댓글에서 추가
function commonReportContent(contNo, clfCd, contCd){
    var url="/browsing/OpenContReviewAction.tmall?method=getContentsReporting&contNo="+contNo+"&contDclObjClfCd="+clfCd+"&contDclObjContCd="+contCd;

    if(funcCheckIsLogin()){
        //var _win=window.open(url, "contentReportPopup", "scrollbars=no,resizable=no,width=415,height=490");
        var POP_WIDTH=415;
        var POP_HEIGHT=490;
        var popOption="height="+POP_HEIGHT+",innerHeight="+POP_HEIGHT+",width="+POP_WIDTH+",innerWidth="+POP_WIDTH+",status=no,resizable=no,menubar=no,toolbar=no,location=no,directories=no,scrollbars=no";

        if(window.screen){
            var ah=screen.availHeight-30;
            var aw=screen.availWidth-10;

            var xc=(aw-POP_WIDTH)/2;
            var yc=(ah-POP_HEIGHT)/2;

            popOption+=",left="+xc+",screenX="+xc;
            popOption+=",top="+yc+",screenY="+yc;
        }
        window.open(url, "contentReportPopup", popOption).focus();
    }else{
        openLogin(3, "", url, 415, 490, "Y");
    }
}

function GetIEVersion() {
  var sAgent = window.navigator.userAgent;
  var Idx = sAgent.indexOf("MSIE");

  // If IE, return version number.
  if (Idx > 0) 
    return parseInt(sAgent.substring(Idx+ 5, sAgent.indexOf(".", Idx)));

  // If IE 11 then look for Updated user agent string.
  else if (!!navigator.userAgent.match(/Trident\/7\./)) 
    return 11;

  else
    return 0; //It is not IE
}

//====== gnb.js
function setHomePage()
{
	if (GetIEVersion() > 0){
	var url = document.URL;
	
	if(GetIEVersion() == 11){
		alert("Internet Explorer 10 이전버전에서만 지원 됩니다.");
		return;
	}
	
	try{
		if(url.indexOf("town.11st.co.kr") != -1){
			$ID('lay_direct').style.behavior='url(#default#homepage)';
			$ID('lay_direct').setHomePage('http://town.11st.co.kr');
		}else{
			$ID('lay_direct').style.behavior='url(#default#homepage)';
			$ID('lay_direct').setHomePage('http://www.11st.co.kr/connect/Gateway.tmall?method=Xsite&tid=1000013091');
		}
	}catch(e){}
	} else {
		alert("Internet Explorer 에서만 지원 됩니다.");
	}
}

function goTopUrl(url, code) {
	goStatUrl(url, code);
}

function mouseOverLi(ulId)	{
	var objUl = $ID(ulId);
	objUl.value = "on";
}

function mouseOutLi(ulId)	{
	var objUl = $ID(ulId);
	objUl.value = "off";
}

function mouseOutUl(ulId)    {
	if ($ID(ulId).name == "true")	{
		$ID(ulId).name = "false"
		setTimeout("mouseOutUlAct('" + ulId + "')",3000);
	}
}

function mouseOutUlAct(ulId)	{
	if ( $ID(ulId).value == "off" )	{
		$ID(ulId).style.display = "none";
	}

	$ID(ulId).name = "true";
}

function cately_view(par){
	if ($ID(par).style.display=="" ||$ID(par).style.display=="none"){
		$ID(par).style.display="block";
	}else{
		$ID(par).style.display="none";
	}
}

//선택조건 클릭시 탭 변경처리
function vC2(gubun) {
	var gnbFormObj = document.forms["GNBSearchForm"];
	if(gubun == "f") {
		gnbFormObj = document.forms["FooterSearchForm"];
	}
	var onTabVal   = gnbFormObj.targetTab.value;
	var onTabNum   = 1;
	if(onTabVal == "T" || onTabVal == "P" ) {
		onTabNum = 1;
	}else if(onTabVal == "MODEL") {
		onTabNum = 2;
	}else if(onTabVal == "N") {
		onTabNum = 3;
	}else if(onTabVal == "SL") {
		onTabNum = 4;
	}else if(onTabVal == "SEMANTIC") {
		onTabNum = 5;
	}else if(onTabVal == "CONTENTS") {
		onTabNum = 6;
	}else if(onTabVal == "MO") {
		onTabNum = 7;
	}else if(onTabVal == "TOUR11ST") {
		onTabNum = 8;
	}else if(onTabVal == "TICKET") {
		onTabNum = 9;
	}
	for(var i=1; i<=9; i++) {
		if(i==onTabNum) {
			$ID('vSB_'+ gubun + '_' + i).className="on";
		}else{
			$ID('vSB_'+ gubun + '_' + i).className="";
		}
	}
}

/*** 4. 서비스 링크 ***************************************************************************************/
function quick(code)
{
	if ((code == null) || (code == ""))
		code = "A0105";

	goStatUrl(_GNB_CONTEXT_PATH_+'/html/main.html',code);
}
function fashionDS(code){
	goStatUrl("http://www.11st.co.kr/html/FashionDept.html",code);
}
function book11st(code)
{
	goStatUrl("http://book.11st.co.kr/index.html",code);
}
function mart11st(code)
{
	goStatUrl("http://www.11st.co.kr/mart/MartCatalogMainAction.tmall?method=showMain",code);
}
function tour11st(code, target)
{
	goStatUrl("http://tour.11st.co.kr/tour/TourfrontAction.tmall?method=main",code, target);
}
function ticket11st(code, target)
{
	goStatUrl("http://ticket.11st.co.kr",code, target);
}
function town11st(code, target)
{
	goStatUrl("http://town.11st.co.kr",code, target);
}
function point(code)
{
	goStatUrl(_GNB_CONTEXT_PATH_+'/browsing/NewPlusZonePlace.tmall?method=getNewMain',code);
}
function cupnZone(code){
	goStatUrl(_GNB_CONTEXT_PATH_+'/browsing/CouponPlace.tmall?method=getCouponZoneMain&addCtgrNo=950089',code);
}
function bnfZone(code){
	goStatUrl(_GNB_CONTEXT_PATH_+'/browsing/NewPlusZonePlace.tmall?method=getEventPage&addCtgrNo=951965',code);
}
function best(code)
{
	goStatUrl(_GNB_CONTEXT_PATH_+'/browsing/BestSeller.tmall?method=getBestSellerMain&xfrom=main^gnb',code);
}
function deal(code)
{
	goStatUrl('http://deal.11st.co.kr/html/nc/deal/main.html',code);
}
function hotRecomm(code)
{
	goStatUrl(_GNB_CONTEXT_PATH_+'/html/HotRecommendClick.html',code);
}
function favorShop(code)
{
	var url = "/html/FavorShopMainPage.html";
	goStatUrl(_GNB_CONTEXT_PATH_+url,code);
}
function global(code)
{
	goStatUrl('http://globalshopping.11st.co.kr',code);
}
function beauty11(code)
{
	goStatUrl('http://beauty.11st.co.kr/html/beauty/beautyMain.html',code);
}
function scinic11(code)
{
	goStatUrl('http://scinic.11st.co.kr/html/beauty/scinicBrandMain.html',code);
}
function scinic(code)
{
	goStatUrl('http://scinic.11st.co.kr/html/beauty/scinicMain.html',code);
}
function shopping(code)
{
	goStatUrl('http://www.11st.co.kr/html/browsing/openCont/openContMain.html',code);
	//2013-05-06 열린쇼핑개편으로 URL 변경
	//goStatUrl(_GNB_CONTEXT_PATH_+'/community/ShoppingInfoCategoryAction.tmall?method=getShoppingInfoMain',code);
}
function nowDelivery(code){
	goStatUrl(_GNB_CONTEXT_PATH_ + '/disp/DTAction.tmall?ID=NOWDEV&ctgrNo=67821',code);
}
function chap(code)
{
	if (CP_IS_AUTH)
	{
		var url = 'http://chatping.11st.co.kr/Chatping/ChatpingAgreement.tmall';
		chatping = window.open(url,'chatping','width=700,height=600,top=10,left=10,scrollbars=no,dependent=yes,status=no,resizable=yes');
	}
	else
		openLogin(1);
	doCommonStat(code);
}

function goScrpWgt(scrpWgtCd)	{
	var scrpWgtUrl = "/browsing/ScrapWidgetAction.tmall?method=getScrapWidgetMain&pageCd=main"
	if ( scrpWgtCd != null && scrpWgtCd != "" )	{
		scrpWgtUrl += "&widgetCode=" + scrpWgtCd;
	}
	goCommonUrl(_GNB_CONTEXT_PATH_+ scrpWgtUrl);
}

function goYahooShopping(){
	var url = "http://shopping.yahoo.co.kr/redirect/outOpenShoppingAd.do?id=S011M&partner=10003&url=http://shopping.yahoo.co.kr";
	goStatUrl(url,'B0407', '_blank')
}

function goGSearch(v)
{
	var f = document.forms["searchForm"];
	f.prdTab.value="T";
	f.dispCtgrNo.value = v;
	f.submit();
}

function categoryLayerView(idName,index){
	for(var i=1; i<=ctgrLayerLevel; i++) {
		if(idName == "headSelO_" + i ) {
			if( document.getElementById("headSelO_" + i).style.display == "block" ) {
				document.getElementById("headSelO_" + i).style.display = "none";
			}else {
				document.getElementById("headSelO_" + i).style.display = "block";
			}
		}else {
			document.getElementById("headSelO_" + i).style.display = "none";
		}
	}

	if(idName == "headSelO_1"){
		if(displayCategoryLayerHtml1 == ""){
			jQuery(document).ready(function(){
				displayCategoryLayerHtml1 = getDisplayMetaCategoryLayerHtml();
			});
		}

		if(jQuery("#" + idName).attr("class") == "inner_cate_v2"){
			document.getElementById(idName).innerHTML = displayCategoryLayerHtml1;
		}
	}else if(idName == "headSelO_2"){
		document.getElementById("displayCategoryLayer2").innerHTML = displayCategoryLayerHtml2;
	}else if(idName == "headSelO_3"){
		document.getElementById("displayCategoryLayer3").innerHTML = displayCategoryLayerHtml3;
	}else if(idName == "headSelO_4"){
		document.getElementById("displayCategoryLayer4").innerHTML = displayCategoryLayerHtml4;
	}
}

function getDisplayMetaCategoryLayerHtml(){
	var layerHtml = "";
	var lineClass = "";
	var currentUrl = $(location).attr('href');
	var gaLink = "";
	
	if ( currentUrl.indexOf('/DisplayCategory') > -1 ) {
		gaLink = "ga('send', 'event', '중소세카테고리', '중/소/세분류 리스팅' , '카테고리 네비게이션');";
	}
	
	for(var i = 1 ; i <= 12 ; i++){
		var grpData = eval("FooterData.metaCtgrGrp2016_" + i);
		
		//해외직구 처리
		var isGlobal = false;
		if( grpData  == undefined && i == 12){
			if(typeof(FooterData.lCtgrGrp2016_12) != 'undefined' && FooterData.lCtgrGrp2016_12.length > 0 ){
				grpData = FooterData.lCtgrGrp2016_12;
				isGlobal = true;
			}else{
				layerHtml += "</div></div>";
				break;
			}
		}
		
		if(i==1){
			layerHtml += "<div class=\"cate\"><div class=\"line01\">";
		}else if(i==7){
			layerHtml += "<div class=\"line05\">";
		}
		
		
		for(var idx = 0 ; idx < grpData.length ; idx++) {
			var data = grpData[idx];
			if(data.CtgrLv == 1) {
				if(i<5){
					layerHtml += "<div><h2 class=\"s_tit\">" + data.CtgrNm + "</h2><div class=\"scroll_wrap\"><ul>";
				}else{
					layerHtml += "<div><h2 class=\"s_tit\">" + data.CtgrNm + "</h2><div class=\"scroll_wrap\"><ul>";
				}
			} else if(data.CtgrLv == 3 && data.CtgrKindCd == "02") { // 전시카테고리
				if(data.RefCtgrNo == $("#RefCtgrNo").val()){
					layerHtml += "<li class=\"point\"><a href=\"#\" data-log-actionid-label=\"category\" data-log-body=\"{'btn_name':'" + data.CtgrNm + "','content_no':'" + data.CtgrNo + "','category_no':'" + data.CtgrNo + "','content_type':'CATEGORY'}\" onClick=\"rakeLog.sendRakeLog(this);headSel('1', '" + data.CtgrNm + "');"+gaLink+" location.href = getGnbCtgrUrl('1', '" + data.RefCtgrNo + "', '" + data.RefCtgrCd + "');\">" + data.CtgrNm + "</a></li>";
				}else{
					layerHtml += "<li><a href=\"#\" data-log-actionid-label=\"category\" data-log-body=\"{'btn_name':'" + data.CtgrNm + "','content_no':'" + data.CtgrNo + "','category_no':'" + data.CtgrNo + "','content_type':'CATEGORY'}\" onClick=\"rakeLog.sendRakeLog(this);headSel('1', '" + data.CtgrNm + "');"+gaLink+" location.href = getGnbCtgrUrl('1', '" + data.RefCtgrNo + "', '" + data.RefCtgrCd + "');\">" + data.CtgrNm + "</a></li>";
				}
			}else if(isGlobal == true && data.CtgrLv == 2 && data.CtgrKindCd == "02"){ //해외직구 처리
				var point = data.CtgrNo == $("#RefCtgrNo").val() ? " class=\"point\"" : "";
				if(idx == 1){
					layerHtml += "<li"+point+"><a href=\"#\" data-log-actionid-label=\"category\" data-log-body=\"{'btn_name':'해외직구','content_no':'8286','category_no':'8286','content_type':'CATEGORY'}\" onClick=\"rakeLog.sendRakeLog(this);headSel('1', '해외직구');"+gaLink+" location.href = getGnbCtgrUrl('1', '8286', '');\">해외직구</a></li>";
				}
				if(data.CtgrNo == 476017){//DLUXURY11 처리
					layerHtml += '<li><a href="http://www.11st.co.kr/disp/DTAction.tmall?ID=DLUXURY11" onClick="headSel(\'1\', \'' + data.CtgrNm + '\');'+gaLink+'">' + data.CtgrNm + '</a></li>';
				}else{
					layerHtml += "<li"+point+"><a href=\"#\" data-log-actionid-label=\"category\" data-log-body=\"{'btn_name':'" + data.CtgrNm + "','content_no':'" + data.CtgrNo + "','category_no':'" + data.CtgrNo + "','content_type':'CATEGORY'}\" onClick=\"rakeLog.sendRakeLog(this);headSel('1', '" + data.CtgrNm + "');"+gaLink+" location.href = getGnbCtgrUrl('2', '" + data.CtgrNo + "', '');\">" + data.CtgrNm + "</a></li>";
				}
			}
		}

		layerHtml += "</div></ul></div>";
		
		if(i==6){
			layerHtml += "</div>";
		}
		if(i==12){
			layerHtml += "</div></div>";
		}
	}

	return layerHtml;
}


function categoryLayerViewOld(idName,index){
	for(var i=1; i<=ctgrLayerLevel; i++) {
		if(idName == "headSelO_" + i ) {
			if( document.getElementById("headSelO_" + i).style.display == "block" ) {
				document.getElementById("headSelO_" + i).style.display = "none";
			}else {
				document.getElementById("headSelO_" + i).style.display = "block";
			}
		}else {
			document.getElementById("headSelO_" + i).style.display = "none";
		}

		var $locationBoxId = jQuery("#location_boxid_"+i);

		$locationBoxId.removeClass("location_box_on").addClass("location_box");
		if( i == index ) {
			$locationBoxId.removeClass("location_box").addClass("location_box_on");
		}
	}

	if(idName == "headSelO_1"){
		if(displayCategoryLayerHtml1 == ""){
			jQuery(document).ready(function(){
				displayCategoryLayerHtml1 = getDisplayMetaCategoryLayerHtmlOld();
			});
		}

		if(jQuery("#" + idName).attr("class") == "loca_conts"){
			document.getElementById(idName).innerHTML = displayCategoryLayerHtml1;
		}
	}else if(idName == "headSelO_2"){
		document.getElementById("displayCategoryLayer2").innerHTML = displayCategoryLayerHtml2;
	}else if(idName == "headSelO_3"){
		document.getElementById("displayCategoryLayer3").innerHTML = displayCategoryLayerHtml3;
	}else if(idName == "headSelO_4"){
		document.getElementById("displayCategoryLayer4").innerHTML = displayCategoryLayerHtml4;
	}
}

function getDisplayMetaCategoryLayerHtmlOld(){
	var layerHtml = "";

	var lineClass = "";
	for(var i = 1 ; i <= 8 ; i++){
		var grpData = eval("FooterData.metaCtgrGrp" + i);

		lineClass = (i<4) ? "cate_firstline" : "" ;

		layerHtml += "<div class =\"" + lineClass + "\">";

		for(var idx = 0 ; idx < grpData.length ; idx++) {
			var data = grpData[idx];
			if(data.CtgrLv == 1) {
				layerHtml += "<h3>" + data.CtgrNm + "</h3><ul>";
			} else if(data.CtgrLv == 3 && data.CtgrKindCd == "02") { // 전시카테고리
				layerHtml += "<li><a href=\"#\" onClick=\"headSel('1', '" + data.CtgrNm + "'); location.href = getGnbCtgrUrl('1', '" + data.RefCtgrNo + "', '" + data.RefCtgrCd + "');\">" + data.CtgrNm + "</a></li>";
			}
		}

		layerHtml += "</ul></div>";
	}

	return layerHtml;
}


//사이트리뉴얼 사용안함
function setiFrameSize(idName, width, heigth){}
//사이트리뉴얼 사용안함
function iframeDelete(){}

var isAkcLayoutLoaded = false;
function textOnFocus() {
	if(!isAkcLayoutLoaded) {
		$ID('autoArea').src = '/html/search/akc_layout_v3.html?v=20101015';
		$ID('autoArea').style.display = "block";
		isAkcLayoutLoaded = true;
	}
}

function vSemantic(flag)
{
	vLayer(flag, "lay_semantic",
		"<p class=\"arrow\"></p>"
		+ "<p class=\"box\">"
		+ "<a href=\"#\" class=\"btn_semantic_close\" onclick=\"document.getElementById('lay_semantic').style.display='none'; isSmtLayoutXBtnClicked=true; return false;\">닫기</a>"
		+ "<span id=\"lay_semantic_cont\"></span>"
		+ "<a href=\"javascript:goBeforeSemanticPage();\" class=\"before_go\" id=\"smt_before_go_btn\" style=\"display:none\">이전 시맨틱 더보기 페이지로 이동 </a>"
		+ "</p>");
}

var isSmtLayoutXBtnClicked = false;
function textColorChange(targetObject) {

	var gnbFormObj = document.forms["GNBSearchForm"];

	if(gnbFormObj.targetTab.value == 'SEMANTIC' && !isSmtLayoutXBtnClicked)
	{
		try
		{
			vSemantic(true);
			$ID('lay_semantic_cont').innerHTML = '시맨틱 검색결과가 없는 키워드는 통합검색 결과로 연결됩니다.';
			$ID('smt_before_go_btn').style.display='none';
			setTimeout("vSemantic(false);",5000);
		}
		catch (e) { }
	}
	clearAdUrl();
	if(targetObject != null) {
		targetObject.className='';
	}
}

function goBeforeSemanticPage(){
	var kwd = escape(encodeURIComponent($ID('semanticKeyword').value));
	document.location.href = "http://search.11st.co.kr/SemanticSearchAction.tmall?method=getSemanticSearch&targetTab=SEMANTIC&semanticFromGNB=Y&kwd=" + kwd;
}

function setGnbData(renew){
	var url = document.URL;

	if (url.indexOf("www.11st.co.kr/mart11st/") != -1)
	{
		setGnbMart11stCtgrAll();	//카테고리 전체보기
		setGnbMart11stCtgrGrp();	//메타카테고리  마우스오버시 대카레이어
		setGnbMart11stCorner();		//주요코너(인기코너/혜택,마트 브랜드관)
	}
	else if (url.indexOf("www.11st.co.kr/html/martMain.html") != -1)
	{
		setGnbMart11stCtgrAll();	//카테고리 전체보기
		setGnbMart11stCtgrGrp();	//메타카테고리  마우스오버시 대카레이어
		setGnbMart11stCorner();		//주요코너(인기코너/혜택,마트 브랜드관)
	}
	else if (url.indexOf("www.11st.co.kr") != -1 && url.indexOf("www.11st.co.kr/mart11st/") == -1 && url.indexOf("www.11st.co.kr/mart/") == -1)
	{
		setGnbKwdAd();
	}
	else if (url.indexOf("beauty.11st.co.kr/") != -1)
	{
		setGnbNewBeautyBanner();
	}
	else if (url.indexOf("scinic.11st.co.kr/") != -1)
	{
		setGnbBeautyCtgrGrp();
		setBtPopConnerBanner();
	}
	else if (url.indexOf("tour.11st.co.kr") != -1)
	{
		setTrGnbBanner();
	}
	else if (url.indexOf("ticket.11st.co.kr/") != -1)
	{
        setGnbKwdAd();
	}
	else if (url.indexOf("search.11st.co.kr") != -1)
	{
		try{
			if(!isIE6){
			}
		}catch(e){	}
	}
	else if (url.indexOf("town.11st.co.kr") != -1 && url.indexOf("login.11st.co.kr") == -1){
		// 2014.07.11 타운 내재화로 영역 그리기 주석 처리
		/*setGnbTownCtgrAll(); 	//town 11번가 전체 보기
		setGnbTownCtgrGrp(); 	//개별 카테고리 보기
		setGnbTownTotAreaGrp(); //지역 전체 보기
		setGnbTownConnerGrp();	//검색창 위 텍스트
		setGnbTownLWBnnr();		//gnb 좌측 날개 배너 영역
		setGnbTownKwdAd();		//검색 키워드 광고*/
	}
	else if (url.indexOf("books.11st.co.kr") != -1){

	}
	else
	{
		setGnbKwdAd();
	}

	try{
		ADImpression();
	}catch(e){}
}
function getMyCartPrdCnt() {}
function viewMyCartPrd() {}

function show_direct()
{
	var str = "바로가기 비접속중";
	if(getBookMarkYn())
		str = "바로가기 접속중";

	$ID("gbox_text").innerHTML = str;
}
/**
 * 최근본 상품 삭제
 */
function deleteRecentViewProduct(prdNo) {
	var domain = document.domain;
	var WWW_URL = window.document.location.protocol + "//"+domain;
	$.ajax({
		url: WWW_URL + "/wingBanner/WingBannerAjaxAction.tmall?method=deleteRecentViewProduct",
		type: "POST",
		data: "prdNo=" + prdNo,
		error: function() {
			alert("최근본 상품 삭제 실패 다시 시도해 주세요.");
		}
	})
}

function chkKeywordEvent(keyword)	{
	for ( var i = arrEvents.length - 1; i > -1 ; i-- )	{
		if (arrEvents[i].goEventUrl(getInnocentWord(keyword)))	{
			return true;
		}
	}
	return false;
}
/* 키워드 광고 수동 처리 끝 */


/* 풋터검색창 추가 */
function goFooterSearch(code) {
	if(code != undefined && code != null){
		doCommonStat(code);
	}
	var footerFormObj = document.forms["FooterSearchForm"];
	var keyword = trim(footerFormObj.kwd.value);
	if(footerFormObj.targetTab.value == "SL" ){	 // 판매자 검색
		footerFormObj.action = "http://search.11st.co.kr/SearchPrdAction.tmall";
		footerFormObj.method.value = "getTotalSearchSeller";
	}else if(footerFormObj.targetTab.value == "S"){ // 가게
		footerFormObj.action = "http://search.11st.co.kr/SearchSellerShopAction.tmall";
	}else if(footerFormObj.targetTab.value == "CH"){	// 뷰티11번가
		footerFormObj.action = "http://beauty.11st.co.kr/TotalSearch.do";
		footerFormObj.category.value = "cherrya";
		footerFormObj.cmd.value = "productList";
	}else if(footerFormObj.targetTab.value == "MO"){	// 도서11번가
		footerFormObj.action = "http://book.11st.co.kr/TotalSearch.do";
		footerFormObj.category.value = "morning365";
		footerFormObj.cmd.value = "productList";
	} else if ( footerFormObj.targetTab.value == "TOUR11ST" ) {// 여행 11번가
		footerFormObj.action = "http://tour.11st.co.kr/vertical/Tour11stSearchAction.tmall";
	} else if ( footerFormObj.targetTab.value == "TOUR" ) {// 여행
		footerFormObj.action = "http://tour.11st.co.kr/vertical/Tour11stSearchAction.tmall";
	} else if ( footerFormObj.targetTab.value == "OVERSEAS" ) {// 해외호텔
		footerFormObj.action = "http://tour.11st.co.kr/vertical/Tour11stSearchAction.tmall";
	} else if ( footerFormObj.targetTab.value == "DOMESTIC" ) {// 국내숙박
		footerFormObj.action = "http://tour.11st.co.kr/vertical/Tour11stSearchAction.tmall";
	} else if ( footerFormObj.targetTab.value == "SEMANTIC" ) {// 시맨틱 검색
		footerFormObj.action = "http://search.11st.co.kr/SemanticSearchAction.tmall";
	}

	if( keyword == "" ) {
		alert("검색어를 입력하세요.");
		footerFormObj.kwd.focus();
		return;
	} else if ( chkKeywordEvent(keyword) ) {
		return;
	} else {
		if ( footerFormObj.targetTab.value == "D" && !IsNumeric(keyword) ) {
			alert("운송번호 조회는 숫자(정수)만 가능합니다.");
			footerFormObj.kwd.focus();
		} else if ( footerFormObj.targetTab.value == "D" && keyword.length < 10 ) {
			alert("운송번호 10자리 이상 입력하세요.");
			footerFormObj.kwd.focus();
		} else if ( footerFormObj.targetTab.value == "N"  ) {
			if ( !IsNumeric(keyword) ) {
				alert("상품번호는 숫자(정수)만 가능합니다.");
				footerFormObj.kwd.focus();
			} else {
				document.location.href = _GNB_CONTEXT_PATH_ + "/product/SellerProductDetail.tmall?method=getSellerProductDetail&prdNo=" + keyword;
			}
		} else if ( footerFormObj.targetTab.value == "SL") {

			footerFormObj.kwd.value = encodeKwd(keyword);
			footerFormObj.submit();
		} else { // T/P/NP/M/I/S
			setSearchTarget(footerFormObj.targetTab.value ,'f');
			footerFormObj.kwd.value = encodeKwd(keyword);
			footerFormObj.submit();
		}
	}
}
/* 풋터검색창 추가 끝 */


//입체검색에서 사용됨
function go11styleURL(urls, code)	{
	var wdt = screen.width;
	var hgt = screen.height-100;
	op = window.open(urls, "11style", "location=yes,fullscreen=no,scrollbars=yes,resizable=no,left=0,top=0,width="+wdt+",height="+hgt);
	doCommonStat(code);
}
//테마쇼핑
function goThemeShopping(code) {
	goStatUrl(_GNB_CONTEXT_PATH_+'/browsing/ThemeCtgr.tmall?method=getThemeCtgrMain', code);
}
function goFashionStory(code){
	goStatUrl(_GNB_CONTEXT_PATH_+'/browsing/FashionStory.tmall?method=getFashionStoryMain',code);
}
function layerToggle(obj, layerId){
	var classNm = obj.className;

	if(classNm.indexOf("_on") != -1){
		obj.className = classNm.replace("_on","");
	}else{
		obj.className = classNm + "_on";
	}

	if(layerId != undefined && layerId != null){
		if($ID(layerId).style.display == "block"){
			layerHidden(layerId);
		}else{
			layerView(layerId);
		}
	}
}

function quickTown(code){ //타운 메인
	goStatUrl(_TOWN_DOMAIN_,code);
}

function goTownCtgr(dispCtgrNo, type, level, code, keyword){ //dispCtgrNo:카테고리 번호 || type : B(일반 카테고리), D(배달 카테고리), A(지역 카테고리) || level : 1(대카), 2(중카)
	//일반 중 카테고리
	var goCtgrUrl 		= _TOWN11ST_URL_ + "/town/TownCategoryListAction.tmall?method=getDisplayCategory2Depth&dispCtgrNo="+dispCtgrNo; //중카와 동일한 리스트 페이지로

	//배달 대 카테고리
	var goDlvCtgrUrl 	= _TOWN11ST_URL_ + "/town/TownCategoryListAction.tmall?method=getDispTownCtgrDeliver1Depth&dispCtgrNo="+dispCtgrNo;
	//지역 대 카테고리
	var goAreaCtgrUrl	= _TOWN11ST_URL_ + "/town/TownCategoryListAction.tmall?method=getDisplayCategory2Depth&dispCtgrNo="+dispCtgrNo;

	if(type == "B"){ //일반 카테고리
		if (keyword != undefined && keyword != "") {
			goCtgrUrl+="&keyword="+keyword;
		}

		if(level == 1 || level == 2){
			goStatUrl(goCtgrUrl,code);
		}
	}
	if(type == "D"){ //배달 카테고리
		if(level == 1){
			goStatUrl(goDlvCtgrUrl,code);
		}
	}
	if(type == "A"){ //지역 카테고리
		if(level == 1){
			goStatUrl(goAreaCtgrUrl,code);
		}
	}
}

function goTownSearch(code) {
	if(code != undefined && code != null){
		doCommonStat(code);
	}
	var gnbFormObj = document.forms["GNBSearchForm"];
	var keyword = trim(gnbFormObj.keyword.value);

	if (keyword == "") {
		alert("검색어를 입력하세요.");
		gnbFormObj.keyword.focus();
		return false;
	} else {
		var ad_banner_url = "";

		try {
			ad_banner_url = gnbFormObj.adUrl.value;
		} catch(e) {}

		if(ad_banner_url == "") {
			//키워드 검색
			doCommonStat('TMB0401');
			gnbFormObj.target = "_top";
			gnbFormObj.keyword.value = keyword;
			gnbFormObj.submit();
		} else {
			//키워드 광고
			doCommonStat('TMB0402');
			//정해지지 않아 주석처리
			//stck( 'M', 'A01', gnbFormObj.adKwdTrcNo.value);
			top.location.href = ad_banner_url;
		}
	}
}


function doTownKwdCtgrSearch(dispCtgrNo, lev, kwd) {
	try {
		var gnbFormObj = document.forms["GNBSearchForm"];
		var keyword = trim(gnbFormObj.keyword.value);

		doCommonStat('TMB0401');
		gnbFormObj.target = "_top";
		gnbFormObj.keyword.value = kwd;

		if (lev == 1) {
			gnbFormObj.lCtgrNoList.value = dispCtgrNo;
		}
		else if (lev == 2) {
			gnbFormObj.mCtgrNoList.value = dispCtgrNo;
		}

		gnbFormObj.submit();
	} catch(e) {}
}

function townCategoryLayerView(idName,index){
	for(var i=1; i<=ctgrLayerLevel; i++) {
		if(idName == "headSelO_" + i ) {
			if( document.getElementById("headSelO_" + i).style.display == "block" ) {
				document.getElementById("headSelO_" + i).style.display = "none";
			}else {
				document.getElementById("headSelO_" + i).style.display = "block";
			}
		}else {
			document.getElementById("headSelO_" + i).style.display = "none";
		}

		var $locationBoxId = jQuery("#location_boxid_"+i);

		$locationBoxId.removeClass("location_box_on").addClass("location_box");
		if( i == index ) {
			$locationBoxId.removeClass("location_box").addClass("location_box_on");
		}
	}

	if(idName == "headSelO_1"){
		if(typeof(displayCategoryLayer1) != "undefined" && typeof(displayCategoryLayer1) == "object"){
			document.getElementById("displayCategoryLayer1").innerHTML = displayCategoryLayerHtml1;
		}
	}
}


//숫자에 세자리마다 콤마
function getCommaString(val) {
	var pVal = val + "";
	if (val == undefined || val == "" || !IsNumeric(val)) return 0;
	if (pVal.length > 3) {
		var result = "";
		for (var i = pVal.length, j = 0; i >= 0; i--, j++) {
			if (i != pVal.length && i%3 == 0 && i != 0) {
				result += ",";
			}
			result += pVal.charAt(j);
		}
		return result;
	} else {
		return pVal;
	}
}

/*
 * 동영상 광고 Viewer
 */
var AdMovieViewer_footerCommonJs = function() {

	var prdNo = 0;
	var movieNo = 0;
	var videoNo = 0;
	var btnPosX = 0;
	var btnPosY = 0;
	var viwerHtmlUrl = "/html/webCommon/adMovieViewer.html";

	var $movieLayerWrap;
	var $closeBtn;
	var $movieFrame;

	function getLayerPosition(obj) {
		var marginX = 60;
		var marginY = -120;
		btnPosX = jQuery(obj).offset().left + marginX;
		btnPosY = jQuery(obj).offset().top + marginY;

		if(btnPosX > 1000) btnPosX -= 400;

	}

	function closeMovieLayer() {
		$movieFrame.attr("src", "http://www.11st.co.kr/html/blank.html");
		$movieFrame.hide();
		$movieLayerWrap.hide();
		//$closeBtn.hide();
	}

	function drawMovieLayer() {
		if(movieNo <= 0) {
			alert("동영상 정보가 올바르지 않습니다.");
			return;
		}
		if($movieLayerWrap == null) {
			$movieLayerWrap = jQuery("<div/>" , {className:"movWrap"});

			$closeBtn = jQuery("<span/>", {className:"bt_close"}).append("<img src=\""+_IMG_URL_+"/img/common/bt_close.gif\" alt=\"닫기\" border=\"0\" style=\"cursor:pointer\">");
			$closeBtn.click(function() {
				closeMovieLayer();
			});
			$movieLayerWrap.append($closeBtn);

			$movieLayerWrap.append($movieFrame);

			jQuery("body").append($movieLayerWrap);
		}
		$movieFrame.load(function() {
			if(jQuery(this).attr("src") != "http://www.11st.co.kr/html/blank.html") {
				$movieLayerWrap.css({"position":"absolute", "top":btnPosY+"px", "left":btnPosX+"px", "z-index":"99999"});
				$movieFrame.show();
				$movieLayerWrap.show();
			}
		})
	}

	function loadMovieFrame() {
		if(movieNo > 0) {
			if($movieFrame == null) {
				$movieFrame = jQuery("<iframe/>", {id:"adMovieViwer", width:"320", height:"273", scrolling:"no", frameborder:"0", marginheight:"0", marginwidth:"0", leftmargin:"0", topmargin:"0"});
			}
			$movieFrame.attr("src", viwerHtmlUrl + "?v="+movieNo+"&k=l&f=adMovieViwer");
		}
	}

	function getAdMovieInfo() {
		if(prdNo > 0) {
			var url = "http://www.11st.co.kr/browsing/DisplayCategory.tmall?callBack=?";

			var data = {
					"method" : "getAdMovieInfo",
					"prdNo" : prdNo
					};
			try{
				jQuery.getJSON(url, data, function(data) {
					if(data.success) {
						movieNo = data.movieNo;
						loadMovieFrame();
						drawMovieLayer();
					}
				})
			} catch(e) {}
		}
	}

	return {
		open : function(vPrdNo, obj, minorSelYn) {
			if(minorSelYn == 'N'){
				if(!funcCheckIsLogin()) {
					openLogin(1);
					return;
				}

				if(funcCheckIsMinor()) {
					var conUrl = "http://www.11st.co.kr/jsp/common/checkAdultContents.jsp?referer=" + document.domain;
					var conWin = window.open(conUrl, 'PreView', "width=800, height=320, scrollbars=no, status=no");
					return;
				}
			}

			getLayerPosition(obj);
			prdNo = vPrdNo;
			getAdMovieInfo();
		}
	}

}();

function goCategoryUrl(ctgrNo, level, brandYn, lCtgrNo, brandCd, code, popupNm){

	var url = "";

	if(level == '1'){
		url = "http://www.11st.co.kr/html/category/" + ctgrNo + ".html?xzone=ctgr1^html";
	}else{
		url = _NEW_CATEGORY_ACTION_URL_ + "?method=getDisplayCategory" + level + "Depth&dispCtgrNo=" + ctgrNo;
	}

	if(popupNm != undefined){
		goStatPopUp(url, code, popupNm);
	}else{
		goStatUrl(url, code);
	}
}

function goTotalSearch(keyword, code, popupNm){
	doCommonStat(code);

	if(popupNm != undefined){
        var url = "http://search.11st.co.kr/Search.tmall?kwd=" + encodeKwdNew(keyword);
		goStatPopUp(url, code, popupNm);
	}else{
		var gnbFormObj = document.forms["GNBSearchForm"];
		gnbFormObj.kwd.value = encodeKwd(keyword);
		gnbFormObj.targetTab.value = "T";
		gnbFormObj.submit();
	}
}

/****************************************
 **
 * 선택상품 장바구니 담기 function :
 * (찜한상품, 최근본상품, 구매한상품 3개 페이지 공통으로 사용하기 위해 옮김.)
 *
 * 2012.11.29 박성준
 *
 * formObjNm : target을 지정할 form명
 * chkboxObj : 체크박스이름
 * bcktYnObj : 장바구니 담기 가능상품 여부 오브젝트명
 * prdNmObj : 상품명 오브젝트명
 * prdTypCdObj : 상품타입 오브젝트명
 * gblDlvYn : 전세계배송 여부
 *
 * 호출방법 : <a onclick="javascript:cart('orderList', 'prdCk', 'bcktYn', 'prdNm', 'prdTypCd', 'N', 'martNo');return false;" class="btn_kordeliver2">
 *
 ****************************************/
if ( typeof cart == 'undefined' )
{
	var cart = function (formObjNm, chkboxObj, bcktYnObj, prdNmObj, prdTypCdObj, gblDlvYn) {

		var obj = document.getElementsByName(chkboxObj);
		var bcktYn = document.getElementsByName(bcktYnObj);
		var prdNm = document.getElementsByName(prdNmObj);
		var prdTypCd = document.getElementsByName(prdTypCdObj);
		var prdNoList = "";
		var bcktList = "";
		var cnt = 0;
		var bcktCnt=0;
		var martCnt=0;

		for( var i=0; i<obj.length; i++ ) {
			if( obj[i].checked == true ) {
				if( cnt == 0 ) {
					prdNoList = obj[i].value;
				} else {
					prdNoList = prdNoList + "," + obj[i].value;
				}

				cnt++;
			}
		}

		if( cnt == 0 ) {
			alert("상품을 선택해 주십시오.");
			return "";
		}

		for(var j=0; j<bcktYn.length;j++){
			//alert(j+'//'+prdNm[j].value+'//'+obj[j].checked+'//'+bcktYn[j].value);
			if( obj[j].checked == true && (bcktYn[j].value == 'Y'||prdTypCd[j].value == '22') ) {
				if( bcktCnt == 0 ) {
					bcktList = "**"+prdNm[j].value+"**";
				} else {
					bcktList = bcktList + "," + "\n**"+prdNm[j].value+"**";
				}
				bcktCnt++;
			}
		}
		if( bcktCnt > 0 ) {
			alert(bcktList+"은 즉시구매만 가능합니다.\n상품상세로 이동하셔서 즉시구매 해주세요.");
			return "";
		}

		for(var j=0; j<prdTypCd.length;j++){
			if( obj[j].checked == true && prdTypCd[j].value == '11' ) {
				martCnt++;
			}
		}
		if( martCnt > 0 ) {
			if(!funcCheckIsLogin()) {
				openLogin(1);
				return;
			}
		}

		var confirmMessage = "선택한 상품을 국내배송 장바구니에 담으시겠습니까?";
		if(gblDlvYn == 'Y'){
			confirmMessage = "선택한 상품을 전세계배송 장바구니에 담으시겠습니까?";
		}

		if(!confirm(confirmMessage)) { return; }

		//마트 상품일 경우 장바구니 미적용 여부체크(현재 홈플러스만 적용)
		if (martCnt > 0) {
			var homeplusAlertMessage = '선택하신 상품중에 장바구니에 담을 수 없는 상품이 포함되어 있습니다.\n(마트상품의 경우 상품상세 페이지에서 장바구니 담기를 진행해 주세요)';
			if (gblDlvYn == 'Y') {
				homeplusAlertMessage = '선택하신 상품중에 전세계배송이 불가능한 상품이 포함되어 있습니다';
			}
			var cartDlvMartNo = document.getElementsByName('cartDlvMartNo');	//공통로직이므로 인자추가보다는 name값 fix로 선택, 장바구니 미적용 할경우 해당 martNo 네이밍 사용
			for(var j=0; j<cartDlvMartNo.length;j++){
				if( obj[j].checked == true && cartDlvMartNo[j].value == '5' ) {
					alert(homeplusAlertMessage);
					return;
				}
			}
		}

		var formObj = document.forms[formObjNm];
		formObj.target = "hiddenFrame";
		formObj.action = _ORDER_URL_ + "/cart/CartAction.tmall?method=getRegMultiCart&arrPrdNo="+prdNoList+"&accountBar=T&gblDlvYn=" + gblDlvYn;
		formObj.submit();
	}
}

//라인맵 카테고리
function goTownLineCtgr(dispCtgrNo, dispCtgrAreaNo, level, target){ //dispCtgrNo:카테고리 번호 || dispCtgrAreaNo: 지역 카테고리번호 || level : 1(대카), 2(중카)
	var param = "";

	if('' != dispCtgrNo){		//업종 param
		param += "&dispCtgrNo=" + dispCtgrNo;
	}
	if('' != dispCtgrAreaNo){	//지역 param
		param += "&dispCtgrAreaNo=" + dispCtgrAreaNo;
	}

	//일반 대,중 카테고리
	var goCtgrUrl 		= _TOWN11ST_URL_ + "/town/TownCategoryListAction.tmall?method=getDisplayCategory2Depth" + param;

	if(level == 1 || level == 2){
		goStatUrl(goCtgrUrl , '', target);
	}
}









//숫자 중간 콤마 삽입
function getCommaSplit(srcNumber) {
	var txtNumber = '' + srcNumber;
	if (isNaN(txtNumber) || txtNumber == "") {

	} else {
		var rxSplit = new RegExp('([0-9])([0-9][0-9][0-9][,.])');
		var arrNumber = txtNumber.split('.');
		arrNumber[0] += '.';

		do {
			arrNumber[0] = arrNumber[0].replace(rxSplit, '$1,$2');
		} while (rxSplit.test(arrNumber[0]));

		if (arrNumber.length > 1) {
			return arrNumber.join('');
		} else {
			return arrNumber[0].split('.')[0];
		}
	}
}

//SKP OCB 동의 팝업띄우기
function SKPlaunchCenter(url, name, width,height, scroll)
{
	var str = "height=" + height + ",innerHeight=" + height;
	str += ",width=" + width + ",innerWidth=" + width;
	str += ",status=no,scrollbars=" + scroll;

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

//2012-12-07 나의 타운11번가
var showFlag = false;
var quickFlag = false;

//나의 타운 11번가
function quickMyTown(){
	if(!showFlag){
		ctgrNaviLayerInit();
	}

	if(!quickFlag){
		if(!funcCheckIsLogin()) {
			openLogin(1);
			return;
		}
		quickMyTownAjax();
		quickFlag = true;
	}

	if(!showFlag){
		jQuery("#quickMyTown").show();
		showFlag = true;
	}else{
		jQuery("#quickMyTown").hide();
		showFlag = false;
	}
}

//나의 타운 11번가 Ajax
function quickMyTownAjax(){
	jQuery.ajax({
		type: "POST",
		url: _TOWN11ST_URL_ + "/town/TownCategoryListAction.tmall?method=getQuickMyTownAjax",
		dataType: "HTML",
		data: ({}),
		success: function(result) {
			jQuery("#quickMyTown").append(result);
		},
		error: function() {
			alert('서버와의 통신이 원할하지 않습니다.\n다시 시도해 주십시오.');
		}
	});
}

//나의 타운 11번가 초기화
function quickMyTownInit(){
	jQuery("#quickMyTown").hide().empty();
	showFlag = false;
	quickFlag = false;
}

function vSearch2(gubun) {
	var gnbFormObj = document.forms["GNBSearchForm"];
	if(gubun == "f") {
		gnbFormObj = document.forms["FooterSearchForm"];
	}
	var onTabVal   = gnbFormObj.targetTab.value;
	var onTabNum   = 1;
	if(onTabVal == "T" || onTabVal == "P" ) {
		onTabNum = 1;
	}else if(onTabVal == "MODEL") {
		onTabNum = 2;
	}else if(onTabVal == "N") {
		onTabNum = 3;
	}else if(onTabVal == "SL") {
		onTabNum = 4;
	}else if(onTabVal == "SEMANTIC") {
		onTabNum = 5;
	}else if(onTabVal == "CONTENTS") {
		onTabNum = 6;
	}else if(onTabVal == "MO") {
		onTabNum = 7;
	}else if(onTabVal == "TOUR11ST") {
		onTabNum = 8;
	}else if(onTabVal == "TICKET") {
		onTabNum = 9;
	}
	for(var i=1; i<=9; i++) {
		if(i==onTabNum) {
			$ID('vSB_'+ gubun + '_' + i).className="on";
		}else{
			$ID('vSB_'+ gubun + '_' + i).className="";
		}
	}
}

FooterComm.prdImgToggle = {
	info: {ver: 1.0, author: "ms.song", desc: "11st gif product images controll util"},
	isFirst: true,
	useTrace: true,
	isAni: true,
	selector: ".pub_photo img, .dp_photo img, .thumb img, div[name=prdPhoto] img",
	intObj: "",
	init: function(obj, selector){
		if(selector) this.selector = selector;
		this.isAni = !this.isAni;
		if(	this.isFirst){
			this.initialize();
			if(jQuery("#frmCpc").length > 0)	this.initialize(jQuery("#frmCpc").contents()); // 랭킹페이지 메인 CPC영역, 리펙토링 대상
		} else {
			this.toggleImg();
			if(jQuery("#frmCpc").length > 0)	this.toggleImg(jQuery("#frmCpc").contents());
		}
		this.isFirst = false;
		this.ctrlBtn(obj);
		//this.liveImg();
	},
	ctrlBtn: function(obj){
		jQuery(obj).find("span").text(this.isAni ? "이미지 정지" : "이미지 동작");
	},
	initialize: function(doc){
		var _this = this, doc = doc ? doc : document;
		jQuery(this.selector, doc).each(function(){
			var that = this;
			setTimeout(function(){	_this.setData(that);	}, 100);
		}).load(function(){
			_this.setData(this);//	 for dynamic objects
		});
	},
	liveImg: function(){
		var _this = this;
		if(!this.isAni){
			this.intObj = "";
			this.intObj = setInterval(function(){
				_this.trace("interval", jQuery(_this.selector).filter(":not(.gif_checked, .toggle_live_binded)").length);
				jQuery(_this.selector).filter(":not(.gif_checked, .toggle_live_binded)").addClass("toggle_live_binded").each(function(){ var that = this; setTimeout(function(){ _this.trace("liveImg", that); _this.setData(that);}, 100);}
				);
			}, 1000);
		} else {
			clearInterval(this.intObj);
		}
	},
	setData: function(thisObj){
		var $this = jQuery(thisObj), gifData = $this.data("gif"), thisSrc = $this.attr("src");
		if(gifData && ((this.isAni && thisSrc === gifData.ori) || (!this.isAni && thisSrc === gifData.stop))){
			return;
		}
		this.trace("init SETDATA!!", $this);
		var obj = this.extract($this);
		if(this.hasAni(obj) && this.isOm($this)){
			var oriUrl = obj.src, stopUrl = this.getStopUrl(oriUrl, obj.oriPt, obj.cutObj);
			this.trace("data", $this.data("gif"));
			$this.addClass("gif_checked").data("gif", {ori:oriUrl, stop:stopUrl}).attr("src", this.isAni ? oriUrl : stopUrl);
		} else if(this.isStatic($this)){
			$this.data("gif", "");
		}
	},
	toggleImg: function(doc){
		var _this = this, doc = doc ? doc : document;
		jQuery(".gif_checked", doc).attr("src", function(){
			var data = jQuery(this).data("gif");
			_this.trace("toggleImage: ", data.ori, data.stop);
			return _this.isAni ? data.ori : data.stop;
		});
	},
	extract: function($this){
		var src = $this.attr("src"), oldPt = /\/[a-z]\/[0-9_]{3,6}/, oldCutPt = /[0-9_]{1,6}/, newPt = /\/[0-9]{1,2}\/src/, newCutPt = /[0-9]{1,2}/ ,oriPt = "", cutObj = {};
		if(oldPt.test(src)){
			oriPt = src.match(oldPt)[0];
			cutObj = {typ:"old", cut:oriPt.match(oldCutPt)[0].substr(4)};
		} else if(newPt.test(src)){
			oriPt = src.match(newPt)[0];
			cutObj = {typ:"new", cut:oriPt.match(newCutPt)[0]};
		} else {
			oriPt = "";
			cutObj = {typ:"none", cut:1};
		}
		return {src: src, oriPt: oriPt, cutObj: cutObj};
	},
	getStopUrl: function(src, oriPt, cutObj){
		if(cutObj.typ === "old"){
			var idx = oriPt.indexOf("_"), stopPt = (idx > 0) ? oriPt.substr(0, idx) + "_1" : oriPt + "_1";
		} else if(cutObj.typ === "new"){
			stopPt = "/1/src";
		}
		return src.replace(oriPt, stopPt);
	},
	hasAni: function(obj){
		return (parseInt(obj.cutObj.cut, 10)) !== 1 ? true : false;
	},
	isOm: function($this){
		return this.checkDomain($this, "http://i.011st.com/");
	},
	isStatic: function($this){
		return this.checkDomain($this, "http://s.011st.com/");
	},
	checkDomain: function($this, domain){
		return $this.attr("src").lastIndexOf(domain, 0) === 0;
	},
	trace: function(){
		if(this.useTrace && window.console) console.log(arguments);
	}
};

/**
 * ToastBanner (inc_footer_data_v6에서 이관함. ms.song)
 * 주문서에서 htmlToastBanner 객체를 사용하고 있기 때문에, FooterComm 을 추가하기 전까지 에러 방지 목적으로 htmlToastBanner를 할당해 둠.
 */
var htmlToastBanner = FooterComm.htmlToastBanner = {
	version: "1.1",
	author: "ms.song, ms.song@11st.co.kr",
	desc: "토스트배너 wrapper및 motion을 구성한다.",
	since: "2011",
	info: "inc_footer_data_v6.js와 함께 사용",
	$wrapperHeight: 0, /* for IE6 */
	extraPixcel4IE6: 10,
	bottomLimit4IE6: 0,
	$wrapper: "",
	$contWrap: "",
	$toastTitle: "",
	$closeBtn: "",
	$downBtn: "",
	$closeToday: "",
	$window: "",
	bodyHeight: "",
	isIE6: false,
	timoutObj: "",
	contId: "",
	bannerTitle: "",
	bannerImg: "",
	bannerLink: "",
	bannerHTML: "",
	contentsType: "I", // default 배너 (I :배너, C : 텍스트+배너, T : 텍스트)
	useCloseToday: "",
	closeTodayCallBack: "",
	clickCallback: "",
	impressionCallBack: "",
	target: "",
	useToast: false,
	isRandom: false,
	dispRnk: "",
	setObj: function(){
		this.$wrapper = jQuery("#toastBannerWrap");
		this.$contWrap = jQuery("#toastContWrap");
		this.$toastTitle = jQuery("#toastTitle");
		this.$closeBtn = jQuery("#closeBtn");
		this.$downBtn = jQuery("#downBtn");
		this.$closeToday = jQuery("#closeToday");
		this.$window = jQuery(window);
		this.bodyHeight = jQuery("body").height();
	},
	init: function(){
		if(this.useToast){
			var that = this;
			this.setObj();
			this.createWrapper();
			this.initIE6();
			this.setContents();
			this.dispCloseToday();
			this.setEventHandler();
			setTimeout(function(){
				that.upBanner();
			}, 500);
		}
	},
	setBannerData: function(data){
		this.useToast = data.useToast;
		this.isRandom = data.isRandom;

		if(data.imgBanner && data.imgBanner.length > 0) {
			var idx = 0;
			if(this.isRandom) {
				idx = Math.floor(Math.random() *  data.imgBanner.length);
			}

			this.contId = this.getObjPropVal("contId", data.imgBanner[idx]);
			this.bannerTitle = this.getObjPropVal("title", data.imgBanner[idx]);
			this.bannerImg = this.getObjPropVal("imgUrl", data.imgBanner[idx]);
			this.bannerLink = this.getObjPropVal("link", data.imgBanner[idx]);
			this.bannerHTML = this.getObjPropVal("html", data.imgBanner[idx]);
			this.contentsType = this.getObjPropVal("type", data.imgBanner[idx]);
			if(this.contentsType == null)  this.contentsType = "I";
		}

		this.useCloseToday = this.isUndefined(data.useCloseToday) ? true : data.useCloseToday;
		this.closeTodayCallBack = data.closeTodayCallBack;
		this.target = data.target;
		this.clickCallback = data.clickCallBack;
		this.impressionCallBack = data.impressionCallBack;
		this.dispRnk = data.dispRnk;

		// 일단 이미지형만 처리, 이미지와 링크가 없다면, 토스트 노출하지 않는다.
		if(this.useToast && !(this.bannerImg || this.bannerHTML)){
			this.useToast = false;
		}
	},
	getObjPropVal: function(key, obj){
		var rtnVal = null;
		var existObj = !this.isUndefined(obj);
		if(existObj){
			try {
				rtnVal = obj[key].indexOf("null") === -1 ? obj[key] : null; // "null"을 반환하는 BO가 있어, string "null"을 object null로 변경한다.
				if (_protocol === "https:"){
					rtnVal = rtnVal.split("http://i.011st.com").join("https://image.11st.co.kr");
				}
			} catch(e){}
		}
		return rtnVal;
	},
	isUndefined: function(obj){
		return (typeof obj === "undefined");
	},
	createWrapper: function() {
		var wrapperFrag = document.createDocumentFragment();

		var divAllWrap = document.createElement("div");
		var $divAllWrap = jQuery(divAllWrap).addClass("toastbnr_wrap").attr("id", "toastBannerWrap");

		var $divTitle = jQuery("<h3 />", {id: "toastTitle"});

		var toastTitleName = "";

		if(this.bannerTitle && this.bannerTitle != ""){
			toastTitleName = this.bannerTitle;
		}else{
			if("01" == this.dispRnk) { // 미니몰쿠폰 토스트배너 Title
				toastTitleName = "단골쿠폰 알림"
			} else { // 마케팅 토스트배너 Title
				toastTitleName = "고객님께 드리는 특별한 선물";
			}
		}

		var $spanTitleText = ' <button type="button" id="downBtn">'+toastTitleName+'</button>';
		$divTitle.append($spanTitleText);

		var $divCont =  jQuery("<div />", {"class": "toast_inner", id: "toastContWrap"});

		var $divTodayWrap = jQuery("<div />", {"class": "close_wrap"});
		var $divTodayText = jQuery("<label />", {id: "closeToday"}).attr('for', 'tClose');
		$divTodayText.append('<input type="checkbox" id="tClose" checked="">오늘 다시 열지 않기</input>');
		var $divTodayBtn = ' <button type="button" id="closeBtn">닫기</button>';
		$divTodayWrap.append($divTodayText).append($divTodayBtn);

		$divAllWrap.append($divTitle).append($divCont).append($divTodayWrap);

		wrapperFrag.appendChild(divAllWrap);
		document.body.appendChild(wrapperFrag);

		this.$contWrap = $divCont;
		this.$wrapper = $divAllWrap;
		this.$downBtn = jQuery('#downBtn');
		this.$closeBtn = jQuery('#closeBtn');
		this.$closeToday = $divTodayText;
	},
	initIE6: function(){
		if(/*@cc_on!@*/false){
			this.isIE6 = (jQuery.browser.version === "6.0");
			this.$wrapperHeight = this.$wrapper.outerHeight() - this.extraPixcel4IE6; //10xp 여유 추가
			this.bottomLimit4IE6 = -1 * (this.$wrapperHeight + this.extraPixcel4IE6);

			var initBottom = this.getTargetPosition();
			this.$wrapper.css("bottom", initBottom + "px");
		}
	},
	getTargetPosition: function(){
		var bottomPosition = 0;
		if(this.isIE6){
			bottomPosition = this.bodyHeight - (this.$window.scrollTop() + this.$window.height() + this.$wrapperHeight);
			// 배너가 무한대로 내려가는걸 막는다.
			if(this.bottomLimit4IE6 >= bottomPosition){
				bottomPosition = this.bottomLimit4IE6;
			}
		}
		return bottomPosition;
	},
	getCurrWrapBottom: function(){
		var bottom = this.$wrapper.css("bottom");
		return parseInt(bottom, 10);
	},
	/* 오늘하루 그만보기 사용여부 */
	dispCloseToday: function(){
		var that = this;
		if(!this.useCloseToday){
			this.$closeToday.css("display", "none");
		}
	},
	injectionImgCont: function(){
		// 일단 주문완료 배너부터, 간단하게 진행
		var that = this;
		var $span = jQuery("<span />", {"class": "imgonly"})
		var $a = jQuery("<a />", {href: "#"});
		var imgObj = new Image();
		imgObj.src = this.bannerImg;
		jQuery(imgObj).load(function(){ // 개선의 여지가 있음 -_-;
			$span.append($a.append(imgObj));
			that.$contWrap.append($span);
		})
	},
	injectionHTMLCont: function() {
		this.$contWrap.append(this.bannerHTML);
	},
	injectionTEXTCont: function(msg) {
		this.$contWrap.unbind();
		var $span = jQuery("<span />", {"class": "txtonly"})
		$span.append(msg);
		this.$contWrap.html($span);
	},
	setContents: function(){
		if(this.contentsType == "C" || this.contentsType == "T" ) {
			this.injectionHTMLCont();
		} else if(this.contentsType == "I") {
			this.injectionImgCont();
		}

		if(typeof this.impressionCallBack === "function"){
			try {
				this.impressionCallBack();
			} catch(e){}
		}
	},
	clearTimeoutObj: function(){
		if(this.timoutObj){
			clearTimeout(this.timoutObj);
			this.timoutObj = null;
		}
	},
	stopAnimation: function(){
		this.$wrapper.stop();
	},
	setEventHandler: function(){
		var that = this;
		this.$wrapper.bind({
			"mouseenter": function(){
				that.upBanner({callback: null});
			},
			"mouseleave": function(){
				that.downBanner();
			}
		});
		this.$contWrap.click(function(){
			/* tracking 펑션 실행을 위함. 뻑나면 걍 흐름.*/
			if(typeof that.clickCallback === "function"){
				try {
					that.clickCallback();
				} catch(e){}
			}
			setTimeout(function() {that.redirectPage()}, 500);

			return false;
		});
		this.$closeBtn.click(function(e){
			if(jQuery("#tClose").is(":checked") == true){
				if(typeof that.closeTodayCallBack === "function"){
					try {
						that.closeTodayCallBack();
					} catch(e){}
				}
			}else{
				e.stopPropagation();
				that.$wrapper.fadeOut("fast");
			}
			return false;
		});
		this.$downBtn.click(function(e){
			that.downBanner({duration: 500});
			return false;
		});
		this.$window.bind({
			"scroll resize": function(){
				if(that.isIE6){
					var $this = jQuery(this);
					if($this.scrollTop() >= that.bodyHeight){
						$this.scrollTop(that.bodyHeight);
						return;
					}
					var toastNewTop = that.getTargetPosition();
					that.$wrapper.css("bottom", toastNewTop + "px");
				}
			}
		});
	},
	redirectPage: function(){
		var targetObj = document;
		if(this.target === "_blank"){
			targetObj = window.open("", "");
		}
		targetObj.location.href = this.bannerLink;
	},
	moveBanner: function(data){
		var targetP, dura, callBack, thisObj, that, timeout;
		that = this;
		targetP = data.targetPosition;
		dura = data.duration;
		callback = data.callback;
		timeout = data.timeout ? data.timeout : 0;

		this.clearTimeoutObj();
		this.stopAnimation();

		this.$wrapper.animate({
			bottom: targetP + "px"
		}, {
			duration: dura,
			complete: function(){
				if(callback === null || callback === ""){
					return;
				}
				var fn;
				if(typeof callback === "function"){
					fn = function(){callback.call(that)};

				} else if(typeof callback === "string") {
					fn = function(){that[callback]()};
				}

				that.timoutObj = setTimeout(fn, timeout);
			}
		});
	},
	getMergedOption: function(defaultOpt, newOpt){
		var rtnOption = defaultOpt;
		if(newOpt){
			rtnOption = jQuery.extend({}, defaultOpt, newOpt);
		}
		return rtnOption;
	},
	dispWrapper: function(boolVal){
		var dispStyleVal = boolVal ? "block" : "none";
		this.$wrapper.css("display", dispStyleVal);
	},
	downBanner: function(newOption){
		var BANNER_DOWN = -185
		var position = BANNER_DOWN + this.getTargetPosition();
		var option = {targetPosition: position, duration: 1000, callback: this.removeBanner, timeout:5000};
		option = this.getMergedOption(option, newOption);

		this.moveBanner(option);
	},
	upBanner: function(newOption){
		this.dispWrapper(true);
		var BANNER_UP = 0;
		var position = BANNER_UP + this.getTargetPosition();
		var option = {targetPosition: position, duration: 500, callback: this.downBanner, timeout: 10000};
		option = this.getMergedOption(option, newOption);
		this.moveBanner(option);
	},
	removeBanner: function(){
		var BANNER_REMOVE = -200
		var position = BANNER_REMOVE + this.getTargetPosition();
		this.moveBanner({targetPosition: position, duration: 1000, callback: this.dispWrapper});
	}
};

/* 토스트 배너 데이터 컨트롤러*/
FooterComm.toastBnnr = {

	init : function(toastState){

		// 영문,국문 체크
		var isKor = TMCookieUtil.getCookie(2, "CONN_IP_LOC") === "FOR" ? false : true;

		// 토스트배너 실행 (쿠키 체크 후, 설정된 배너 노출)
		var toastState = this.getState();
		if(toastState > 0){
			if(isKor){
				// toastState = 1: 비로그인 상태, 2: 로그인 상태
				switch(toastState){
					case 1 :
						this.pcidToastBnnr();
						break;
					case 2 :
						this.memIdToastBnnr();
						break;
					default:
						break;
				}
			}
		}
	},
	getState: function(){
		var toastState = 0;

		if(!isToastBnnr) { // isToastBnnr는 headerSub에 정의되어 있으며, webpagse의 파라미터로 결정된다.
			return toastState;
		}

		if(!HeaderComm.funcCheckIsLogin()) {
			toastState = 1;
		} else {
			toastState = 2;
		}

		return toastState;
	},

	/* PCID 별 토스트 배너 */
	pcidToastBnnr : function() {
		if(this.getToastDataCheck(0)){
			var that = this;
			var toastActDataArr = this.getToastActData();
			var dispCnt = parseInt(toastActDataArr[0]);

			// 최대 4회까지 노출
			if(dispCnt < 4 && toastActDataArr[1] == "N"){
				var that = this;
				var dataUrl = TB_WWW_URL + "/toastBanner/ToastBannerAjaxAction.tmall?method=getPcidToastBanner";
				jQuery.ajax({
					url: dataUrl,
					dataType: "jsonp",
					scriptCharset: "utf-8",
					success: function( data ) {
						var bannerData = data.jsonPCID;

						if(bannerData.length > 0){

							var targetDataIdx = that.getNextDispToastIdx(bannerData, parseInt(toastActDataArr[2]));

							if(targetDataIdx > -1){
								var targetData = bannerData[targetDataIdx];

								if(targetData != ""){
									// 캠페인 ID별 1일 1회 노출 제한 로직 추가
									that.setDailyViewHist(targetData.contId);

									FooterComm.htmlToastBanner.setBannerData({
										useToast: true,
										useCloseToday: true,
										imgBanner: [targetData],
										closeTodayCallBack: function(){
											jQuery("#toastBannerWrap").hide();

											that.setToastActData(dispCnt, "Y", targetDataIdx, toastActDataArr[3], toastActDataArr[4], toastActDataArr[5]);
										},
										clickCallBack: function() {
											if(targetData.clickYn == "N"){
												that.toastMsgUpdateCallBack ("Pcid", targetData.contId, "C");
											}
										},
										impressionCallBack: function() {
											dispCnt++;

											that.setToastActData(dispCnt, "N", targetDataIdx, toastActDataArr[3], toastActDataArr[4], toastActDataArr[5]);

											if(targetData.dispYn == "N"){
												that.toastMsgUpdateCallBack ("Pcid", targetData.contId, "D");
											}
										},
										target: "_blank",
										dispRnk: targetData.dispRnk

									});

									FooterComm.htmlToastBanner.init();
								}
							}

						//데이터가 없는 경우 더이상 호출 하지 않음(브라우저 종료시까지)
						}else{
							var toastDataCheck = TMCookieUtil.getSubCookie(0, "TB_DATA_CHK");

							TMCookieUtil.add(0, "TB_DATA_CHK", "N:" + toastDataCheck.split(":")[1]);
						}
					}
				});
			}
		}
	},

	/* MEMID 토스트 배너 */
	memIdToastBnnr : function() {

		if(this.getToastDataCheck(1)){
			var that = this;
			var toastActDataArr = this.getToastActData();
			var dispCnt = parseInt(toastActDataArr[3]);

			jQuery.ajax({
				url: TB_WWW_URL + "/toastBanner/ToastBannerAjaxAction.tmall?method=getMemIdToastBanner",
				dataType: "jsonp",
				scriptCharset: "utf-8",
				success: function( data ) {
					var bannerData = data.jsonMEMID;

					// 최대 4회까지 노출
					if(dispCnt < 4 && toastActDataArr[4] == "N" && bannerData.length > 0){

						var targetDataIdx = that.getNextDispToastIdx(bannerData, parseInt(toastActDataArr[5]));

						if(targetDataIdx > -1){
							var targetData = bannerData[targetDataIdx];

							if(targetData != ""){
								// 캠페인 ID별 1일 1회 노출 제한 로직 추가
								that.setDailyViewHist(targetData.contId);

								FooterComm.htmlToastBanner.setBannerData({
									useToast: true,
									useCloseToday: true,
									imgBanner: [targetData],
									closeTodayCallBack: function(){
										jQuery("#toastBannerWrap").hide();

										that.setToastActData(toastActDataArr[0], toastActDataArr[1], toastActDataArr[2], dispCnt, "Y", targetDataIdx);
									},
									clickCallBack: function() {
										if(targetData.clickYn == "N"){
											that.toastMsgUpdateCallBack ("MemId", targetData.contId, "C");
										}
									},
									impressionCallBack: function() {
										dispCnt++;

										that.setToastActData(toastActDataArr[0], toastActDataArr[1], toastActDataArr[2], dispCnt, "N", targetDataIdx);

										if(targetData.dispYn == "N"){
											that.toastMsgUpdateCallBack ("MemId", targetData.contId, "D");
										}
									},
									target: "_blank",
									dispRnk: targetData.dispRnk

								});

								FooterComm.htmlToastBanner.init();

								that.issuLoyaltyCms(); //쿠폰 발급
							}
						}
					//데이터가 없는 경우 더이상 호출 하지 않음(브라우저 종료시까지)
					}else{
						var toastDataCheck = TMCookieUtil.getSubCookie(0, "TB_DATA_CHK");

						TMCookieUtil.add(0, "TB_DATA_CHK", toastDataCheck.split(":")[0] + ":N");
					}
				}
			});
		}
	},
	issuLoyaltyCms: function() {
		var $link = jQuery("<a />", {href: TB_WWW_URL+"/loyalty/loyaltyCmsDtls.tmall?method=cmsDtlsList"});
		var img = new Image();
		img.src = WWW_URL + "/img/toast/alt_img.jpg";
		$link.append(img);

		jQuery.ajax({
			url: TB_WWW_URL+"/loyalty/loyaltyCms.tmall?method=issueAllCmsLoyalty",
			dataType: "jsonp",
			success: function(data){},
			error: function(){}
		});
	},
	toastMsgUpdateCallBack: function(target, cmCode, type) {
		var setUrl = TB_WWW_URL + "/toastBanner/ToastBannerAjaxAction.tmall?method=update" + target + "ToastBanner&typeCode="+type+"&cmCode="+cmCode;
		jQuery.ajax({
			url: setUrl,
			dataType: "script"
		});
	},
	getToastActData: function(){
		// 토스트배너 노출 정보
		var toastActData = TMCookieUtil.getSubCookie(1, "TB_ACT_DATA");

		var toastActDataArr = new Array();

		if(toastActData == ""){
			toastActData = "0:N:-1:0:N:-1"; //PCID노출회수:todayClose:마지막노출토스트배너Index:MEMID노출회수:todayClose:마지막노출토스트배너Index

			TMCookieUtil.add(1, "TB_ACT_DATA", toastActData);
		}

		toastActDataArr = toastActData.split(":");

		return toastActDataArr;
	},
	//토스트배너 데이터 존재 여부 검사
	getToastDataCheck: function(checkIdx){
		var toastDataCheck = TMCookieUtil.getSubCookie(0, "TB_DATA_CHK");

		if(toastDataCheck == ""){
			toastDataCheck = "Y:Y"; //PCID 데이터 존재 여부 : MEMID 데이터 존재 여부
			TMCookieUtil.add(0, "TB_DATA_CHK", toastDataCheck);
		}

		var toastDataCheckArr = toastDataCheck.split(":");

		if(toastDataCheckArr[checkIdx] == "Y"){
			return true;
		}else{
			return false;
		}
	},
	setToastActData: function(pcidCnt, pcidClose, pcidLastIdx, memidCnt, memidClose, memidLastIdx){
		TMCookieUtil.add(1, "TB_ACT_DATA", pcidCnt + ":" + pcidClose + ":" + pcidLastIdx + ":" + memidCnt + ":" + memidClose + ":" + memidLastIdx);
	},
	getNextDispToastIdx: function(dataArr, lastDispToastIdx){
		var targetDispToastIdx = lastDispToastIdx;
		var dailyViewHist = TMCookieUtil.getSubCookie(1, "TB_DAILY_VIEW_TOAST_HST");

		for(; targetDispToastIdx < dataArr.length; ){
			targetDispToastIdx++;

			//캠페인 ID별 1일 1회 노출 제한 로직
			if(targetDispToastIdx < dataArr.length && dailyViewHist.indexOf("[" + dataArr[targetDispToastIdx].contId + "]") != -1){
				continue;
			}else{
				break;
			}
		}

		if(targetDispToastIdx >= dataArr.length){
			targetDispToastIdx = -1;
		}

		return targetDispToastIdx;
	},
	isUseToastBnnr : function( stDate , enDate ){
		var isUse = true;

		var td = new Date();
		var yyyy = new String(td.getFullYear());
		var mm = new String(td.getMonth()+1);
		var dd = new String(td.getDate());
		var hh = new String(td.getHours());
		var mi = new String(td.getMinutes());
		var ss = new String(td.getSeconds());

		if(mm.length == 1) {
			mm = "0" + mm;
		}

		if(dd.length == 1) {
			dd = "0" + dd;
		}

		if(hh.length == 1) {
			hh = "0" + hh;
		}

		if(mi.length == 1) {
			mi = "0" + mi;
		}

		if(ss.length == 1) {
			ss = "0" + ss;
		}

		var dateStr = yyyy + mm + dd + hh + mi + ss;
		var dateNum = dateStr * 1;

		if(dateNum < enDate && dateNum > stDate )
			isUse = false;

		return isUse;
	},
	setDailyViewHist : function(contId){
		var dailyViewHist = TMCookieUtil.getSubCookie(1, "TB_DAILY_VIEW_TOAST_HST");
		dailyViewHist += "[" + contId + "]";
		TMCookieUtil.add(1, "TB_DAILY_VIEW_TOAST_HST", dailyViewHist);
	}
};
try {
	jQuery(function(){
		FooterComm.toastBnnr.init();
	});
} catch(e){}

/**
 * 상품 이미지 더보기_개편 2013
 */
FooterComm.ImageSplit = function() {
	var imgUrl = '';
	var largeImgList = [];
	var smallImgList = [];
	var size = 0;
	var selectedIndex = 0;
	var startIndex = 0;
	var showLimit = 5;
	var $target = '';
	var timer = '';
	var prdImg = '';
	var prdNo = 0;
	var version = '';
	var openList = [];


	var maxZindex = 0
	var zIndex = {
		max : function(){
			if(!maxZindex){
				var cur = 0, max = 0;

				//브랜드 더보기 레이어 열렸을 경우
				if(jQuery('#lnb_brand_search').css('display') === 'block'){
					return parseInt(jQuery('#lnb_brand_search').css('z-index')) - 1;
				}

				//카테고리 더보기 레이어 열렸을 경우
				if(jQuery('#cateMoreView').css('display') === 'block'){
					return parseInt(jQuery('button[name=close_btn]').css('z-index')) - 1;
				}

				jQuery('div').each(function(){
					cur = parseInt(jQuery(this).css('z-index'));
					max = cur > max ? cur : max;
				});

				maxZindex = max;
			}
			return maxZindex++;
		}
	};

	try{
		jQuery('div[name=imageSplit]', '#contsWrap').live({
			mouseenter : function(thisObj){
				$target = jQuery(thisObj.currentTarget);
				prdNo = $target.attr('prdNo');
				prdImg = $target.attr('img');
				version = '1.0';
				getImageCutUrl();
			}
		});

		jQuery('div[name=prdPhotoMoreView]', '#contsWrap').live({
			mouseenter : function(thisObj){
				$target = jQuery(thisObj.currentTarget);
				prdNo = $target.attr('prdNo');
				prdImg = $target.attr('img');
				version = '1.1';
				getImageCutUrl();
			}
		});

		jQuery('div.pub_photo:has(div[name=imageSplit])', '.listtype_wrap').live({
			mouseleave : function(thisObj){
				var $targetObj = jQuery(thisObj.currentTarget);
				jQuery('.img_moreview', $targetObj).css('display', 'none');
				jQuery('.img_moreview', $targetObj).css('z-index', 1);
				jQuery($target).parent('div').css('z-index', 1);
				jQuery($target).parents('div.title_area').css('z-index', 2);
				jQuery($target).parents('div.category_tblwrap').css('z-index', 2);
				selectedIndex = 0;
				startIndex = 0;
				largeImgList = [];
				smallImgList = [];
			}
		});

		jQuery('div[name=prdPhoto]:has(div[name=prdPhotoMoreView])', '.listing_wrap').live({
			mouseleave : function(thisObj) {
				var $targetObj = jQuery(thisObj.currentTarget);
				var $moreViewImg = jQuery('.moreview_img', $targetObj);

				if ( $moreViewImg.css('display') != 'none' ) {
					var openListKey = '' + jQuery('div[name=prdPhotoMoreView]', $targetObj).attr('prdNo');
					openList[openListKey] = false;

					var $prdArea = jQuery($targetObj).parent();
					var $ulArea = $prdArea.parent();
					$prdArea.css('z-index', '');
					$ulArea.css('z-index', '');

					window.setTimeout(
							function() {
								if ( !openList[openListKey] )  {
									$moreViewImg.hide().css('z-index', '');
								}
							}
							, 200
						);

					selectedIndex = 0;
					startIndex = 0;
					largeImgList = [];
					smallImgList = [];
				}
			}
		});

		jQuery('button[name=split_btn_next]').live({
			click : function(){
				if(selectedIndex == 5){
					selectedIndex = 0;
					startIndex = 0;
				}else{
					selectedIndex = 5;
					startIndex = 5;
				}

				drawBigImage();
				drawSplitImage();
			}
		});

		jQuery('li[name=small_img]').live({
			mouseenter : function(thisObj){

				var $targetObj = jQuery(thisObj.currentTarget);
				selectedIndex = jQuery('li[name=small_img]', $target).index($targetObj);
				drawBigImage();

			}
		});

	}catch(e){}

	var getImageCutUrl = function(){
		try{
			size = 0;
			largeImgList = [];
			smallImgList = [];

			size = smallImgList.length;

			if(smallImgList.length > 0 && largeImgList.length > 0) {
				drawBigImage();
				drawSplitImage();
			}else{
				var url = _SEARCH_ACTION_URL_ + '?method=getProductImageSplit&version=' + version + '&imgUrl=' + prdImg + '&callBack=?';
				jQuery.getJSON(url, function(data) {
					if(data.success) {
						largeImgList = data.LARGE_IMG_LIST;
						smallImgList = data.SMALL_IMG_LIST;
						size = smallImgList.length;
						if(smallImgList.length > 0 && largeImgList.length > 0) {
							drawBigImage();
							drawSplitImage();
							var zIdx = zIndex.max();
							jQuery('.img_moreview, .moreview_img', $target).css({'display':'block', 'z-index': zIdx});

							if ( version == '1.1' ) {
								var $photoArea = jQuery($target).parent();
								var $prdArea = $photoArea.parent();
								$photoArea.css('z-index', zIdx);
								$prdArea.css('z-index', zIdx);
							} else {
								jQuery($target).parent('div').css('z-index', zIdx);
								jQuery($target).parents('div.title_area').css('z-index', zIdx);
								jQuery($target).parents('div.category_tblwrap').css('z-index', zIdx);
							}
						}
					}
				});
			}

			openList['' + prdNo] = true;
		} catch(e) {}
	};

	var drawSplitImage = function(){
		var count = 0;
		jQuery('li[name=small_img]', $target).css('display', 'none');

		for(var index=0; index < size && index < showLimit; index++){
			try{
				if(startIndex + index < size){
					var $imgObj = jQuery(jQuery('img[name=image]', $target).get(startIndex + index));
					var src = smallImgList[startIndex + index];
					if($imgObj.attr('src').indexOf('/img/common/blank.gif') != -1 && src != undefined){

						if(src != undefined && src.indexOf(_UPLOAD_URL_) < 0){
							src = _UPLOAD_URL_ + src;
						}

						$imgObj.attr('src', src);
					}
					$imgObj.parent('a').parent('li').css('display', '');
				}else{
					var $imgObj = jQuery(jQuery('img[name=image]', $target).get(startIndex + index));
					$imgObj.parent('a').parent('li').css('display', 'none');
				}

			}catch(e){}
		}

		if(size > 5){
			jQuery('div[name=btn_ctrl]', $target).css('display', 'block');
		}
	};

	var drawBigImage = function(){
		var largeImgUrl = largeImgList[selectedIndex];

		if(largeImgUrl != undefined && largeImgUrl.indexOf(_UPLOAD_URL_) < 0){
			largeImgUrl = _UPLOAD_URL_ + largeImgUrl;
		}

		jQuery('img[name=bigImage]', $target).attr('src', largeImgUrl);
	};
}();

//Go Top, Bottom
FooterComm.scrollControl = {
	goTop : function() {
	jQuery("html,body").animate({scrollTop: "0px"}, {duration:500});
	return false;
	},
	goBottom : function() {
		var height = jQuery(document).height();
		jQuery("html,body").animate({scrollTop: height}, {duration:500});
		return false;
	}
};
//즐겨찾기 추가
FooterComm.addFavorite = function(){
	var url		= "http://www.11st.co.kr/connect/Gateway.tmall?method=Xsite&tid=1000013091";
	var title	=  "11번가 - 고객감동 No.1, 11번가";
	if(window.sidebar){// firefox
		window.sidebar.addPanel(title, url, "");
	}else if(window.external && ('AddFavorite' in window.external)){
		window.external.AddFavorite(url, title);
	}else{// Google Chrome && 그외
		alert("Ctrl+D키를 누르시면 즐겨찾기에 추가하실 수 있습니다.");
	}
	doCommonStat("MAZ0901");
};
// 11st URL Cliper
FooterComm.clip11stUrl = function() {
	if(document.all) {
		var url = 'http://www.11st.co.kr';
		var rtn = window.clipboardData.setData('Text', url);
		if(rtn) {
			alert('11번가 주소 (' + url + ')가 복사되었습니다. 주소창에 붙여 넣으세요.');
		}
	} else {
		alert("Internet Explorer 에서만 지원 됩니다. www.11st.co.kr 을 주소입력창에 직접 입력해 주세요.");
	}
};

FooterComm.fnSrchPrdLike = function(prdNo, likeFrom, prdTypCd) {
	if(prdTypCd == "20"){
		alert("다운로드 상품은 좋아요가 적용되지 않습니다.");
		return;
	}

	if(prdNo == '') {
		return;
	}
	if(!funcCheckIsLogin()) {
		openLogin(5, "afterLikeSrchLogin");
		return;
	}else {
		FooterComm.likePrd.callback.init( prdNo, likeFrom, prdTypCd );

		jQuery.ajax({
	        url : _GNB_CONTEXT_PATH_ + '/commons/LikeAjaxAction.tmall?method=addLikeProduct&likePrdNo=' + prdNo + '&callBack=FooterComm.likePrd.callback.execute'
			, dataType: 'jsonp'
			, scriptCharset: 'utf-8'
	    });
		//jQuery.getJSON(url, callback);
	}
}

FooterComm.likePrd = {};
FooterComm.likePrd.callback = function() {
	var prdNo;
	var likeFrom = '';
	var prdTypCd;

	var $likeAreaWrap;
	var $bindParentObj;
	var $zindexParentObj;

	var callback = function(data){
		if(data.resultCd == "success"){
			$likeAreaWrap.addClass("checked");
			success(data);
		}else if(data.resultCd == "failure"){
			alert("일시적인 오류가 발생했습니다. 다시 시도해 주십시요.");
		}else if(data.resultCd == "already"){
			$likeAreaWrap.addClass("checked");
			alert("이미 좋아요 한 상품입니다.");

			var likeInfoHtml = "<span class=\"likethis_txt\">좋아요</span>" + data.likeCntString;
			if(data.likeCnt > 9999){
				likeInfoHtml += "<span class=\"num_plus\">+</span>";
			}
			jQuery("button", $likeAreaWrap).html(likeInfoHtml);

			if(likeFrom == "SOHOLIST"){
				//소호 리스트형 리스팅
				if(data.likeCnt > 999){
					$likeAreaWrap.parent("div").addClass("likethis_plus");
				}
			} else if (likeFrom == "DEAL"){
				//쇼킹딜 리스팅
				$likeAreaWrap.attr("class","like_this checked").parent("div").attr("class","like_info");
			}

		}else if(data.resultCd == "login"){
			openLogin(5, "afterLikeSrchLogin");
			return;
		}else if(data.resultCd == "isEmailAuth"){
			alert("죄송합니다. 이메일 인증회원은 국문사이트 상품의 좋아요♥가 불가합니다.\n영문 사이트 혹은 로그아웃 후 비회원 구매하기를 통해 주문해 주시기 바랍니다.");
		}else if(data.resultCd == "isMinor"){
			var conUrl = _GNB_CONTEXT_PATH_ + "/jsp/common/checkAdultContents.jsp?referer=" + document.domain;
			window.open(conUrl, "PreView", "width=800, height=320, scrollbars=no, status=no");
		}
	};

	var success = function(data){
		var _conf = {
			action : "set",
			method : "zzim",
			prdNoList : prdNo
		};

		try{
			HeaderComm.callHotClick(_conf);
		}catch (e) {}

		// view 컨트롤
		FooterComm.likePrd.display(prdNo, likeFrom, prdTypCd, data);

		callRecopick(data);
	};

	var callRecopick = function(data) {
		if ( data.prdNo && data.mid && data.lCtgrNm && data.mCtgrNm && data.sCtgrNm ) {
			var paramObj = {
				process : FooterComm.recopick.process.like
				, domain : FooterComm.recopick.domain.common
				, items	: [{
	                id: data.prdNo,
	                c1: data.lCtgrNm,
	                c2: data.mCtgrNm,
	                c3: data.sCtgrNm
	            }]
				, mid : data.mid
			}

			if ( data.addDispCtgrNo && data.brandCd ) {
				var item = paramObj.items[0];
				item.bc1 = data.addDispCtgrNo;
				item.brand = data.brandCd;
			}

			FooterComm.recopick.execute( paramObj );
		}
	}

	return {
		init : function( $prdNo, $likeFrom, $prdTypCd ) {
			prdNo = $prdNo;
			likeFrom = $likeFrom;
			prdTypCd = $prdTypCd;

			$likeAreaWrap = jQuery("div[name=like_"+prdNo+"]");
			$bindParentObj = $likeAreaWrap.parents("div.product_conts");
			$zindexParentObj = $likeAreaWrap.parents("div.title_area");
		}
		, execute : function( _data ) {
			callback( _data );
		}
	}
}();

FooterComm.likePrd.display = function(prdNo, likeFrom, prdTypCd, data) {
	var $likeAreaWrap = jQuery("div[name=like_"+prdNo+"]");
	var $zindexPhotoParentObj = $likeAreaWrap.parents("div.pub_photo");
	var $bindParentObj = $likeAreaWrap.parents("div.product_conts");
	var $zindexParentObj = $likeAreaWrap.parents("div.title_area");


	//좋아요 숫자 포멧 관련 함수
	var decimalFmt = function(likeCnt){
		if(likeCnt < 100000){
			var reg = /(^[+-]?\d+)(\d{3})/;
			likeCnt = likeCnt+"";

			while(reg.test(likeCnt)){
				likeCnt = likeCnt.replace(reg, '$1' + ',' + '$2');
			}
			return likeCnt;
		}else if(likeCnt>=100000){
			likeCnt = likeCnt/10000+"";
			var dotIdx = likeCnt.indexOf('.');
			if(dotIdx>0)
				likeCnt = likeCnt.substring(0, dotIdx+2);
			else
				likeCnt = likeCnt+".0";
			return likeCnt+"만"
		}else{
			return 0;
		}
	};


	// 좋아요가 되었습니다 레이어 컨트롤
	var likeCompleteLayerCtrl = function() {
		if ( $zindexParentObj.size() > 0 ) {
			$likeAreaWrap.parents('li').bind({
				mouseleave : function(){
					jQuery("p", $likeAreaWrap).hide();
				}
			});

			$likeAreaWrap.bind({
				mouseenter : function(){
					$zindexPhotoParentObj.css("z-index", 100);
					jQuery("p", $likeAreaWrap).show();
				},
				mouseleave : function(){
					jQuery("p", $likeAreaWrap).hide();
					$zindexPhotoParentObj.css("z-index", 2);
				}
			});
		} else {
			$zindexParentObj.css("z-index", 199);
			$bindParentObj.bind({
				mouseleave : function(){
					jQuery("p", $likeAreaWrap).hide();
					$zindexParentObj.css("z-index", 2);
				}
			});

			$likeAreaWrap.bind({
				mouseenter : function(){
					$zindexPhotoParentObj.css("z-index", 100);
					jQuery("p", $likeAreaWrap).show();
					$zindexParentObj.css("z-index", 199);
				},
				mouseleave : function(){
					jQuery("p", $likeAreaWrap).hide();
					$zindexParentObj.css("z-index", 2);
					$zindexPhotoParentObj.css("z-index", 2);
				}

			});
		}

		$zindexPhotoParentObj.css("z-index", 100);
		jQuery("p", $likeAreaWrap).show();
		jQuery("a", $likeAreaWrap).bind({
			click : function(e) {
				e.preventDefault();
				if (likeFrom == "IFRAME") {
					parent.document.location.href= _GNB_CONTEXT_PATH_ + "/interest/AuthInterestProductAction.tmall?method=getAllInterestProductInfo";
				} else {
					document.location.href= _GNB_CONTEXT_PATH_ + "/interest/AuthInterestProductAction.tmall?method=getAllInterestProductInfo";
				}
			}
		});
	};

	//소호전시구좌
	if(likeFrom == "SOHODISP"){
		jQuery("#shpLikeCnt"  + prdNo).text(" "+decimalFmt(data.likeCnt));
		var shpLikeView = jQuery("#shpLikeView" + prdNo);
		if(shpLikeView != undefined && shpLikeView != null){
			if(shpLikeView.css("display") == "none"){
				shpLikeView.css("display", "");
			}
		}

		window.open(_ACTION_CONTEXT_URL_ + "/commons/LikeAction.tmall?method=getShpPrdLikePopupSoho", "", "width=350, height=220");
	}else{
		//var likeInfoHtml = "<span class=\"likethis_txt\">좋아요</span>" + data.likeCntString;
		var likeInfoHtml = "<span class=\"likethis_txt\">좋아요</span>" + data.likeCntString;
		if(data.likeCnt > 9999){
			likeInfoHtml += "<span class=\"num_plus\">+</span>";
		}
		jQuery("button", $likeAreaWrap).html(likeInfoHtml);

		if(likeFrom == "SOHOLIST"){
			//소호 리스트형 리스팅
			if(data.likeCnt > 999){
				$likeAreaWrap.parent("div").addClass("likethis_plus");
			}
		}


		//쇼킹딜 리스팅
		if (likeFrom == "DEAL") {
			$likeAreaWrap.attr("class","like_this checked").parent("div").attr("class","like_info");
			$bindParentObj = $likeAreaWrap.parents("li[name=dealPrdLiWrap]");
			$zindexParentObj = $bindParentObj;
		}

		likeCompleteLayerCtrl();
	}
}


FooterComm.fnSrchPrdLikeDelete = function(prdNoList) {
	var callback = function(data){
		if(data.resultCd == "success"){
			alert("해당 찜한 상품을 삭제하였습니다.");
			location.href = location.href;
		}else if(data.resultCd == "failure"){
			alert("일시적인 오류가 발생했습니다. 다시 시도해 주십시요.");
		}
	};

	if(!funcCheckIsLogin()) {
		openLogin(5, "afterLikeSrchLogin");
		return;
	}else {
		var delPrdNoList = prdNoList.replace(/,/g, encodeURIComponent("#@#"));
		var url = _ACTION_CONTEXT_URL_ + "/commons/LikeAjaxAction.tmall?method=deleteLikeProductList&data=" + delPrdNoList + "&callBack=?";
		jQuery.getJSON(url, callback);
	}
}

FooterComm.recopick = function() {
	var process = {
		like : 'like'
		, search : 'search'
	}

	var domain = {
		common : '11st.co.kr'
		, deal : 'deal.11st.co.kr'
	}

	var getRecopickUserInfo = function(mid) {
	   	try{
	    	var userInfo    = '';
	        var birthyear   = TMCookieUtil.getSubCookie(0, 'HODY');
	        var gender = TMCookieUtil.getSubCookie(0, 'GND');

	        if( gender && (gender == '10' || gender == '20') ){
	             gender = ( gender == "10") ? "M" : "F";
	        }

	        userInfo = '{"user":{"birthyear":"' + birthyear + '","gender":"' +gender + '","mid":"' + mid + '"}}';

	        return FooterComm.Base64.encode(userInfo);
		} catch (e) {
			return '';
		}
	}

	var sendData = function( paramObj ) {
		var data = {
            url: document.location.href
            , ref: document.referrer
		}

		if ( paramObj.mid ) {
			data.b = getRecopickUserInfo( paramObj.mid );
		}

		if ( paramObj.items ) {
			data.items = paramObj.items;
		}

		if ( paramObj.q ) {
			data.q = paramObj.q;
		}

		jQuery.ajax({
	        url : 'https://api.recopick.com/v1/logs/' + paramObj.process + '/' + paramObj.domain + '/' + TMCookieUtil.getCookie('PCID')
	        , method : 'POST'
	        , dataType : 'jsonp'
	        , data : data
	    });
	}

	return {
		'process' : process
		, 'domain' : domain
		, 'execute' : function( paramObj ) {
			sendData( paramObj );
		}
	}
}();


/**
*  Base64 encode / decode
*  http://www.webtoolkit.info/
**/
FooterComm.Base64 = {_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(b){var a="",d,c,f,g,h,e,k=0;for(b=this._utf8_encode(b);k<b.length;)d=b.charCodeAt(k++),c=b.charCodeAt(k++),f=b.charCodeAt(k++),g=d>>2,d=(d&3)<<4|c>>4,h=(c&15)<<2|f>>6,e=f&63,isNaN(c)?h=e=64:isNaN(f)&&(e=64),a=a+this._keyStr.charAt(g)+this._keyStr.charAt(d)+this._keyStr.charAt(h)+this._keyStr.charAt(e);return a},decode:function(b){var a="",d,c,f,g,h,e=0;for(b=b.replace(/[^A-Za-z0-9\+\/\=]/g,"");e<
b.length;)d=this._keyStr.indexOf(b.charAt(e++)),c=this._keyStr.indexOf(b.charAt(e++)),g=this._keyStr.indexOf(b.charAt(e++)),h=this._keyStr.indexOf(b.charAt(e++)),d=d<<2|c>>4,c=(c&15)<<4|g>>2,f=(g&3)<<6|h,a+=String.fromCharCode(d),64!=g&&(a+=String.fromCharCode(c)),64!=h&&(a+=String.fromCharCode(f));return a=this._utf8_decode(a)},_utf8_encode:function(b){b=b.replace(/\r\n/g,"\n");for(var a="",d=0;d<b.length;d++){var c=b.charCodeAt(d);128>c?a+=String.fromCharCode(c):(127<c&&2048>c?a+=String.fromCharCode(c>>
6|192):(a+=String.fromCharCode(c>>12|224),a+=String.fromCharCode(c>>6&63|128)),a+=String.fromCharCode(c&63|128))}return a},_utf8_decode:function(b){for(var a="",d=0,c=c1=c2=0;d<b.length;)c=b.charCodeAt(d),128>c?(a+=String.fromCharCode(c),d++):191<c&&224>c?(c2=b.charCodeAt(d+1),a+=String.fromCharCode((c&31)<<6|c2&63),d+=2):(c2=b.charCodeAt(d+1),c3=b.charCodeAt(d+2),a+=String.fromCharCode((c&15)<<12|(c2&63)<<6|c3&63),d+=3);return a},URLEncode:function(b){return escape(this._utf8_encode(b))},URLDecode:function(b){return this._utf8_decode(unescape(b))}};


// 상품의 장바구니 제한여부 체크
function fnPrdBsktExYn(prdNo){
	var result = '';

	jQuery.ajax({
		url: '/interest/AuthInterestProductAction.tmall?method=getProductBasketExcludeYn&prdNo=' + prdNo,
		dataType: 'text',
		async: false,
		success: function(data) {
			result = data;
		},
		error: function() {
			alert('일시적인 오류가 발생했습니다. 다시 시도해 주십시요.');
		}
	});

	return result;
}

FooterComm.installDirectVisit = function(code) {
	try{
		doCommonStat(code);
		clickStat('install');
		alert('바로가기 파일을 설치하시면\n\n바탕화면 바로가기 및 브라우저의 즐겨찾기 추가가 완료 됩니다.');
		window.location.href = 'http://www.11st.co.kr/ocx/11stShortCut.exe';
	} catch(e) {
		alert("확인 버튼을 누르면 바로가기 ON상태로 변경됩니다.");
		top.location.href = 'http://www.11st.co.kr/connect/Gateway.tmall?method=Xsite&tid=1000013091';
	}
}


FooterComm.fnSrchBrandLike = function(brandCd, likeFrom) {
	if(brandCd == '') {
		return;
	}

	if(!funcCheckIsLogin()) {
		openLogin(5, "afterLikeSrchLogin"); //확인
		return;
	}else {
		FooterComm.likeBrand.callback.init( brandCd, likeFrom );

		jQuery.ajax({
	        url : _GNB_CONTEXT_PATH_ + '/commons/LikeAjaxAction.tmall?method=addLikeBrand&likeBrandCd=' + brandCd + '&callBack=FooterComm.likeBrand.callback.execute'
			, dataType: 'jsonp'
			, scriptCharset: 'utf-8'
	    });
		//jQuery.getJSON(url, callback);
	}
}


FooterComm.likeBrand = {};
FooterComm.likeBrand.callback = function() {
	var brandCd;
	var likeFrom = '';

	var $likeAreaWrap;
	var $bindParentObj;
	var $zindexParentObj;

	var callback = function(data){
		if(data.resultCd == "success"){
			$likeAreaWrap.addClass("checked");
			success(data);
		}else if(data.resultCd == "failure"){
			alert("일시적인 오류가 발생했습니다. 다시 시도해 주십시요.");
		}else if(data.resultCd == "already"){
			$likeAreaWrap.addClass("checked");
			alert("이미 좋아요 한 브랜드입니다.");

			var likeInfoHtml = "<span class=\"likethis_txt\">좋아요</span>" + data.likeCntString;
			if(data.likeCnt > 9999){
				likeInfoHtml += "<span class=\"num_plus\">+</span>";
			}
			jQuery("button", $likeAreaWrap).html(likeInfoHtml);

		}else if(data.resultCd == "login"){
			openLogin(5, "afterLikeSrchLogin");
			return;
		}else if(data.resultCd == "isEmailAuth"){
			alert("죄송합니다. 이메일 인증회원은 국문사이트 브랜드의 좋아요♥가 불가합니다.\n영문 사이트 혹은 로그아웃 후 비회원 구매하기를 통해 주문해 주시기 바랍니다.");
		}else if(data.resultCd == "isMinor"){
			var conUrl = _GNB_CONTEXT_PATH_ + "/jsp/common/checkAdultContents.jsp?referer=" + document.domain;
			window.open(conUrl, "PreView", "width=800, height=320, scrollbars=no, status=no");
		}
	};

	var success = function(data){
		// view 컨트롤
		FooterComm.likeBrand.display(brandCd, likeFrom, data);
	};

	return {
		init : function( $brandCd, $likeFrom ) {
			brandCd = $brandCd;
			likeFrom = $likeFrom;

			$likeAreaWrap = jQuery("div[name=like_"+brandCd+"]");
			$bindParentObj = $likeAreaWrap.parents("div.product_conts");
			$zindexParentObj = $likeAreaWrap.parents("div.title_area");
		}
		, execute : function( _data ) {
			callback( _data );
		}
	}
}();

FooterComm.fnSrchBrandLikeDelete = function(brandCdList) {
	var callback = function(data){
		if(data.resultCd == "success"){
			alert("해당 좋아요한 브랜드를 삭제하였습니다.");
			location.href = location.href;
		}else if(data.resultCd == "failure"){
			alert("일시적인 오류가 발생했습니다. 다시 시도해 주십시요.");
		}
	};

	if(!funcCheckIsLogin()) {
		openLogin(5, "afterLikeSrchLogin");
		return;
	}else {
		var delBrandCdList = brandCdList.replace(/,/g, encodeURIComponent("#@#"));
		var url = _ACTION_CONTEXT_URL_ + "/commons/LikeAjaxAction.tmall?method=deleteLikeBrandList&data=" + delBrandCdList + "&callBack=?";
		jQuery.getJSON(url, callback);
	}
}

FooterComm.likeBrand.display = function(brandCd, likeFrom, data) {
	var $likeAreaWrap = jQuery("div[name=like_"+brandCd+"]");
	var $bindParentObj = $likeAreaWrap.parents("div.product_conts");
	var $zindexParentObj = $likeAreaWrap.parents("div.title_area");


	//좋아요 숫자 포멧 관련 함수
	var decimalFmt = function(likeCnt){
		if(likeCnt < 100000){
			var reg = /(^[+-]?\d+)(\d{3})/;
			likeCnt = likeCnt+"";

			while(reg.test(likeCnt)){
				likeCnt = likeCnt.replace(reg, '$1' + ',' + '$2');
			}
			return likeCnt;
		}else if(likeCnt>=100000){
			likeCnt = likeCnt/10000+"";
			var dotIdx = likeCnt.indexOf('.');
			if(dotIdx>0)
				likeCnt = likeCnt.substring(0, dotIdx+2);
			else
				likeCnt = likeCnt+".0";
			return likeCnt+"만"
		}else{
			return 0;
		}
	};


	// 좋아요가 되었습니다 레이어 컨트롤
	var likeCompleteLayerCtrl = function() {
		if ( $zindexParentObj.size() > 0 ) {
			$likeAreaWrap.parents('li').bind({
				mouseleave : function(){
					jQuery("p", $likeAreaWrap).hide();
				}
			});

			$likeAreaWrap.bind({
				mouseenter : function(){
					jQuery("p", $likeAreaWrap).show();
				},
				mouseleave : function(){
					jQuery("p", $likeAreaWrap).hide();
				}
			});
		} else {
			$zindexParentObj.css("z-index", 199);
			$bindParentObj.bind({
				mouseleave : function(){
					jQuery("p", $likeAreaWrap).hide();
					$zindexParentObj.css("z-index", 2);
				}
			});

			$likeAreaWrap.bind({
				mouseenter : function(){
					jQuery("p", $likeAreaWrap).show();
					$zindexParentObj.css("z-index", 199);
				},
				mouseleave : function(){
					jQuery("p", $likeAreaWrap).hide();
					$zindexParentObj.css("z-index", 2);
				}

			});
		}

		jQuery("p", $likeAreaWrap).show();
		jQuery("a", $likeAreaWrap).bind({
			click : function(e) {
				e.preventDefault();
				if (likeFrom == "IFRAME") {
					parent.document.location.href= _GNB_CONTEXT_PATH_ + "/interestBrand/AuthInterestBrandAction.tmall?method=getAllInterestBrandInfo";
				} else {
					document.location.href= _GNB_CONTEXT_PATH_ + "/interestBrand/AuthInterestBrandAction.tmall?method=getAllInterestBrandInfo";
				}
			}
		});
	};


	//var likeInfoHtml = "<span class=\"likethis_txt\">좋아요</span>" + data.likeCntString;
	var likeInfoHtml = "<span class=\"likethis_txt\">좋아요</span>" + data.likeCntString;
	if(data.likeCnt > 9999){
		likeInfoHtml += "<span class=\"num_plus\">+</span>";
	}
	jQuery("button", $likeAreaWrap).html(likeInfoHtml);

	likeCompleteLayerCtrl();
}



// 특정 카드 제휴사를 통해 페이지 접근시 내맘대로 할인 중복혜택 제외 안내 팝업 노출
function benefitCardLayer() {
	
	var isExceptXsite = false;
	try{ 
		var xSite = TMCookieUtil.getCookie("XSITE");
		
		if(_EXCEPT_XSITE_LIST_.indexOf("|" + xSite + "|") >= 0){ // 제외 제휴사
			isExceptXsite = true;
		}
	}catch(e){}
	
	if(isExceptXsite == true){

		// 현재 URL 주소 
		var thisPathName = window.location.pathname;
		var thisSearch = window.location.search;
		if(thisSearch != '') {
			thisSearch = thisSearch.split('&')[0];
		}
		thisPathName = thisPathName + thisSearch;
		
		// 레이어팝업 노출할 URL 경로
		var mainPath = '/browsing/Main.tmall?method=showMain';									//메인URL1
		var mainOldPath = '/browsing/Main.tmall?method=showMainOld';							//메인URL2
		var mainGenPath = '/html/main.html';													//메인젠URL
		var prdDetailPath = '/product/SellerProductDetail.tmall?method=getSellerProductDetail';	//상품상세
		var mallPlanDetailPath ='/browsing/MallPlanDetail.tmall?method=getMallPlanDetail';		//기획전상세
		
		
		if (thisPathName.indexOf(mainPath) > -1 || 
				thisPathName.indexOf(mainOldPath) > -1 || 
				thisPathName.indexOf(mainGenPath) > -1 || 
				thisPathName.indexOf(prdDetailPath) > -1 || 
				thisPathName.indexOf(mallPlanDetailPath) > -1) {
			
			var layerPopTitle = "내맘대로 할인 중복혜택 제외 안내";
			var layerPopExcept = "내맘대로 할인/T멤버쉽/마일리지";
			if(xSite == "1000436475"){
				layerPopTitle = "카드할인 및 기타 11번가 중복혜택 제외 안내";
				layerPopExcept = "카드 추가할인/T멤버쉽/마일리지";
			}
							
			var layerPopStr = '<div class="dayclose_popwrap">'
					+ '		<div class="daypop">'
					+ '			<div class="daypop_cnt" id="capop_cont">'
					+ '				<h4><div class="title">' + layerPopTitle + '</div></h4>'
					+ '				<div class="cont">'
					+ '					<div class="my_benefit">'
					+ '						<strong>카드사 제휴쇼핑몰을 통해 유입시,<br>11번가에서 제공하는 일부 혜택은 적용되지 않습니다.</strong>'
					+ '						<span>카드사 포인트 적립 또는 청구할인 혜택은 정상 적용됩니다.</span>'
					+ '						<em>적용불가 혜택 : ' + layerPopExcept + '<br>카드사 : 신한/롯데/국민/현대/삼성/하나(구 하나SK)/씨티</em>'
					+ '					</div>'
					+ '				</div>'
					+ '				<div class="close_wrap">'
					+ '					<label for="tClose"><input type="checkbox" id="tClose">오늘 다시 열지 않기</label>'
					+ '					<button type="button" onclick="layerTodayClose();">닫기</button>'
					+ '				</div>'
					+ '			</div>'
					+ '		</div>'
					+ '	</div>';
		
			if (thisPathName.indexOf(mainPath) > -1 || 
					thisPathName.indexOf(mainOldPath) > -1 || 
					thisPathName.indexOf(mainGenPath) > -1 || 
					thisPathName.indexOf(prdDetailPath) > -1 || 
					thisPathName.indexOf(mallPlanDetailPath) > -1) {
				jQuery('#layBodyWrap').prepend(layerPopStr);
			} else {
				jQuery('#layBody').prepend(layerPopStr);
			}
				
		}
	}
}


// 레이어 닫기버튼
function layerTodayClose() {
	var tClose = document.getElementById('tClose');
	if(tClose.checked==true) {
		TMCookieUtil.add(1,'INFO_LAYERPOP_CONTROLL_KEY', 'Y');
	}
	jQuery('#capop_cont').hide();
}


//카드사 제휴 할인 제외 안내 팝업
try {
	jQuery(document).ready(function(){
		if(!TMCookieUtil.isExist(1, 'INFO_LAYERPOP_CONTROLL_KEY')){
			benefitCardLayer();
		}
	});
}catch(e){}

function catchAnchorGAToEvent(e) {
	var evt = e || window.event;
	var node = evt.srcElement || evt.target;
	
	while(1) {
		if (node.nodeName &&
				( node.nodeName.toLowerCase() === 'a' || node.nodeName.toLowerCase() === 'input' || node.nodeName.toLowerCase() === 'button'  || node.nodeName.toLowerCase() === 'select') ) {
			break;
		} else {
			if (node.parentNode) {node = node.parentNode;}
			else {break;}
		}
	}
	
	catchAnchorGA(node);
	return true;
}

function catchAnchorGA(obj) {
	try {
		var ctg = '';
		var action = '';
		var label = '';
		var dimension = null;
		
		jQuery.each(jQuery(obj)[0].dataset,function(key,value){
			if (key == "gaEventCategory") {
				ctg = value;
			} else if (key == "gaEventAction") {
				action = value;
			} else if (key == "gaEventLabel") {
				label = value;
			} else if (key.indexOf("gaDimension") > -1) {
				if (dimension == null) {
					dimension = {};
				}
				dimension[key.replace("ga","").replace("-","").toLowerCase()] = value;
			}
		});
		
		if (ctg != '' && action != '') {
			if(dimension != null) {
				ga("send", "event", ctg, action, label, dimension);
			} else {
				ga("send", "event", ctg, action, label);
			}
		}
	} catch (e) {}
	
}