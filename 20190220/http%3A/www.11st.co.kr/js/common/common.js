/* common.js 는 더이상 사용되지 않습니다.
 * headerCommonJs.js 나 footerCommonJs.js를 사용해 주세요.
 * 문의사항은 Listing개발P에 문의바랍니다.
 */
// photo scroll ------------------------
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

function photoScrollWidth(idName,widthV)	{
	var photoScrollList=$ID("" + idName + "");
	var photoScrollEa = photoScrollList.getElementsByTagName("li");
	var photoScrollWidth	= photoScrollEa.length * widthV;
	photoScrollList.style.width = photoScrollWidth + "px";
}

function	photoScrollMove(idName,moveF,moveV,EA)	{

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
			alert("이전사진이 없습니다.")
		}
	}
	else	{

		if (photoScrollLeft > photoScrollWidth)	{
			photoScrollList.style.left = photoScrollLeft + moveV + "px";
		}
		else	{
			photoScrollList.style.left = "0px";
		}
	}
}

function thumb_big(idName,imgName)	{
	idNameV=$ID("" + idName + "");

	idNameV.src= imgName;

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

function layerView(idName, code)	{
	Obj = $ID(idName);
	Obj.style.display="block";
	doCommonStat(code);
}

function layerHidden(idName)	{
	Obj = $ID(idName);
	Obj.style.display="none";
}

function layerView2(idName,T,L)	{
	Obj = $ID(idName);
	Obj.style.display= "block";
	Obj.style.top= T + "px";
	Obj.style.left= L + "px";
}

function layerObjView(idName) {
	var Obj = $ID(idName);
	Obj.style.display = "block";
}

function layerObjHide(idName) {
	var Obj = $ID(idName);
	Obj.style.display = "none";
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

function doLayerCheck(idName) {
	objLayer = $ID(idName);
	if ( objLayer.style.display == "block" ) {
		layerObjHide(idName);
	} else {
		layerObjView(idName);
	}
}

function detailMore()	{
	Obj_W = $ID('detailMore');
	Obj_S = $ID('moreCon');
	Obj_more = $ID('txtMore');
	Obj_txt01 = $ID('txtOpen');
	Obj_txt02 = $ID('txtClose');

	if (Obj_S.style.display == "none")	{
		Obj_W.style.height =245 + "px";
		Obj_W.style.backgroundImage="url('/img/product/bg_moreView02.gif')";
		Obj_S.style.display ="block";
		Obj_more.style.backgroundImage="url('/img/product/ico_moreView02.gif')";
		Obj_txt01.style.display ="none";
		Obj_txt02.style.display ="block";
	}
	else	{
		Obj_W.style.height =26 + "px";
		Obj_W.style.backgroundImage="url('/img/product/bg_moreView.gif')";
		Obj_S.style.display ="none";
		Obj_more.style.backgroundImage="url('/img/product/ico_moreView.gif')";
		Obj_txt01.style.display ="block";
		Obj_txt02.style.display ="none";
	}
}

function tabConView(idName,no,total)	{
	for(var i = 1; i <= total; i++) 	{
		Obj_tab = $ID(idName + "_tab" + i);
		Obj_con = $ID(idName + "_con" + i);
		if(i==no)	{
			Obj_tab.style.display="block";
			Obj_con.style.display="block";
		}
		else	{
			Obj_tab.style.display="none";
			Obj_con.style.display="none";
		}
	}
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

function balloon(){
	$ID("mag_balloon").style.display='block';
}
function balloonout(){
	$ID("mag_balloon").style.display='none';
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

function optionTabW(idName)	{
	var tabList=$ID("" + idName + "");
	var tabEa = tabList.getElementsByTagName("li");
	var tabWidth	= tabEa.length * 134;
	tabList.style.width = tabWidth + "px";
}

function optionTab(idName,moveF,moveV)	{
	var photoScrollList=$ID("" + idName + "");
	var photoScrollLeft = photoScrollList.style.left;
	photoScrollLeft = parseInt(photoScrollLeft.replace("px",""));

	photoScrollWidth = photoScrollList.style.width;
	photoScrollWidth = parseInt(photoScrollWidth.replace("px",""));
	photoScrollWidth = -(photoScrollWidth-980);

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

function optionTab770(idName,moveF,moveV)   {
	var photoScrollList=$ID("" + idName + "");
	var photoScrollLeft = photoScrollList.style.left;
	photoScrollLeft = parseInt(photoScrollLeft.replace("px",""));
	photoScrollWidth = photoScrollList.style.width;
	photoScrollWidth = parseInt(photoScrollWidth.replace("px",""));
	photoScrollWidth = -(photoScrollWidth-770);

	if (moveF == "P") {
	    if (photoScrollLeft !=0){
	    	photoScrollList.style.left = photoScrollLeft + moveV + "px";
	    }
	}
	else{
	    if (photoScrollLeft > photoScrollWidth){
	        photoScrollList.style.left = photoScrollLeft + moveV + "px";
	    }
	}
}

function optionTabW2(idName)	{
	var tabList=$ID("" + idName + "");
	var tabEa = tabList.getElementsByTagName("li");
	var tabWidth	= tabEa.length * 91;
	tabList.style.width = tabWidth + "px";
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

function number(n){
	if (n==1)
	{
		$ID('jumin').style.display='block';
		$ID('saup').style.display='none';
	}
	else
	{
		$ID('jumin').style.display='none';
		$ID('saup').style.display='block';
	}
}

function tab(id,su,n) {
	for(var i = 1; i <= su; i++) {
		obj_Con = $ID(id+i);
		if ( n == i ) {
			obj_Con.style.display = "block";
		} else {
			obj_Con.style.display = "none";
		}
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

function gnbAutoHidden()	{
	$ID("autoArea").style.display="none";
}

function skinChagne(n)	{}

function funcCheckIsLogin() {
	var arg = "TMALL_AUTH=";
	var alen = arg.length;
	var clen = document.cookie.length;
	var i = 0;

	while(i < clen){
		var j = i + alen;
		if(document.cookie.substring(i, j) == arg)
			return true;
			i = document.cookie.indexOf(" ", i) + 1;
		if(i == 0) break;
	}
	return false;
 }

//미성년자 여부(true이면 미성년자임)
function funcCheckIsMinor() {
	var tmallIsMinor = false;
	authkey = getCookieTmall("TMALL_STATIC");
	if(authkey == "N"){
		//authkey가 N이면 미성년자임
		tmallIsMinor = true;
	}
	return tmallIsMinor;
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

function sohoSearch(no,optionV)	{
	obj_sel=$ID("sohoSearch_" + no);
	obj_opt=$ID("sohoSearch0_" + no)
	obj_sel.value=optionV;
	obj_opt.style.display="none";
}

function imgOver(imgName) {
	imgName.src = imgName.src.replace(".gif", "_on.gif");
	imgName.src = imgName.src.replace(".jpg", "_on.jpg");
}
function imgOut(imgName) {
	imgName.src = imgName.src.replace("_on.gif", ".gif");
	imgName.src = imgName.src.replace("_on.jpg", ".jpg");
}

function agreePop(){
	if ($ID("agreeCHK").checked == true){
		layerView('agreeOK');}
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
   top.location.href = 'http://www.11st.co.kr/' + sellerId;
}

function genQuickViewV(prdNo, divId, minorSelCnYn) {}

function genQuickViewOtherDomain(prdNo, divId, minorSelCnYn, prdTab){}

function genQuickView(prdNo, divId, minorSelCnYn, prdTab, otherDomainYn, linkUrl){}

function setPrdPoint(divId, ocbPoint, sPoint)	{
	divObj = $ID(divId);
	if (divObj.innerHTML == "")	{
		var dispStr = "<strong>OK캐쉬백 " + ocbPoint + "P</strong>";
		if ( sPoint != "" )	{
		 dispStr = dispStr + " 또는<br><strong>S포인트 " + sPoint + "P</strong> 적립";
		}
		divObj.innerHTML = dispStr;
	}
	divObj.style.display="block";
}

function setPrdBonus(divId)	{
	divObj = $ID(divId);
	if (divObj.innerHTML == "")	{
		 divObj.innerHTML = "<a href='http://www.11st.co.kr/html/ocbpointEvent2.html' target='_blank' class='godetail'></a>";
	}
	divObj.style.display="block";
}

//비교함에 넣기
function comparePrd(comparePrdNo) {
	hiddenProcess.location.href = _GNB_CONTEXT_PATH_ + "/today/InterestProductAction.tmall?method=getComparePrd&comparePrdNo="+comparePrdNo;
}

function comparePrdList(comparePrdNo, adultsYn) {
	if(adultsYn == 'N'){
		if(!funcCheckIsLogin()) {
			openLogin(1);
			return;
		}
		if(funcCheckIsMinor()) {
			var conUrl = _GNB_CONTEXT_PATH_ + "/jsp/common/checkAdultContents.jsp?isButton=N";
			var conWin = window.open(conUrl, 'PreView', "width=440, height=185, scrollbars=yes, status=no");
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
	}

	if(adultsYn == 'N'){
		if(!funcCheckIsLogin()) {
			openLoginAdults(1);
			return;
		}
		if(funcCheckIsMinor()) {
			var conUrl = _GNB_CONTEXT_PATH_ + "/jsp/common/checkAdultContents.jsp?isButton=N";
			var conWin = window.open(conUrl, 'PreView', "width=440, height=185, scrollbars=yes, status=no");
			return;
		}
		else{
			var win = window.open(url, 'PreView', "width=850, height=" + height + ", scrollbars=yes, status=no, resizable=yes");
		}
	}
	else{
		var win = window.open(url, 'PreView', "width=850, height=" + height + ", scrollbars=yes, status=no, resizable=yes");
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
			var conUrl = _GNB_CONTEXT_PATH_ + "/jsp/common/checkAdultContents.jsp?isButton=N";
			var conWin = window.open(conUrl, 'PreView', "width=440, height=185, scrollbars=yes, status=no");
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

function funcMoveToParent(param) {
	location.href=param;
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
			var conUrl = _GNB_CONTEXT_PATH_ + "/jsp/common/checkAdultContents.jsp?isButton=N";
			var conWin = window.open(conUrl, 'PreView', "width=440, height=185, scrollbars=yes, status=no");
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
			var conUrl = _GNB_CONTEXT_PATH_ + "/jsp/common/checkAdultContents.jsp?isButton=N";
			var conWin = window.open(conUrl, 'PreView', "width=440, height=185, scrollbars=yes, status=no");
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
function jjimExhibition(plnDispNo){
	if(!funcCheckIsLogin()) {
		jjimPlnDispNo = plnDispNo;
		openLogin(5, "afterJjimPlnDispLogin");
		return;
	}else{
		hiddenProcess.location.href = _GNB_CONTEXT_PATH_ + "/browsing/ExhibitionWishPlanDisp.tmall?method=insertWishPlanDisplay&plnDispNo="+plnDispNo;
	}
}

function afterJjimPlnDispLogin(){
	if($ID('divGnbLogin')){
    	var logoutViewLoc = $ID('divGnbLogin');
    	logoutViewLoc.innerHTML = "<img src=\"/img/common/gr/utilMenu_01_2.gif\" alt=\"로그아웃\" onClick=\"logout();\" style=\"cursor:hand\">";
	}
	hiddenProcess.location.href = _GNB_CONTEXT_PATH_ + "/browsing/ExhibitionWishPlanDisp.tmall?method=insertWishPlanDisplay&plnDispNo="+jjimPlnDispNo;
}

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

function funcJjimProductList(prdNo, adultsYn) {
	if(adultsYn == 'N'){
		if(!funcCheckIsLogin()) {
			openLogin(1);
			return;
		}
		if(funcCheckIsMinor()) {
			var conUrl = _GNB_CONTEXT_PATH_ + "/jsp/common/checkAdultContents.jsp?isButton=N";
			var conWin = window.open(conUrl, 'PreView', "width=440, height=185, scrollbars=yes, status=no");
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
			var conUrl = _GNB_CONTEXT_PATH_ + "/jsp/common/checkAdultContents.jsp?isButton=N";
			var conWin = window.open(conUrl, 'PreView', "width=440, height=185, scrollbars=yes, status=no");
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

// icon 주문하기
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
			var conUrl = _GNB_CONTEXT_PATH_ + "/jsp/common/checkAdultContents.jsp?isButton=N";
			var conWin = window.open(conUrl, 'PreView', "width=440, height=185, scrollbars=yes, status=no");
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

// 상품상세 보기19금
function productDetailViewAdults(prdNo,adultsYn,xfrom,xzone,tar){
	var url = _PRODUCT_DETAIL_URL_+prdNo+"&xfrom="+xfrom+"&xzone="+xzone;

	if(adultsYn == 'N')
	 {
		 if(!funcCheckIsLogin())
		 {
			openLoginAdults(1);
			return;
		 }

		 if(funcCheckIsMinor())
		 {
		 	url = _GNB_CONTEXT_PATH_ + "/checkAdult.page?isButton=N";
		 	window.open(url, 'PreView', "width=418, height=181, scrollbars=no, status=no");
		 }
		 else
		 {
    		openProductDetail(url,"TOP");
		 }
	  }else {
    	  openProductDetail(url,"TOP");
	  }
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
/** common by crayon13 ************************************************************** */
/* common Function ************************************************************** */
//doCommonTrim
function doCommonTrim(str)	{
	try	{
		return str.replace(/(^ *)|( *$)/g, "");
	}	catch (ex)	{
		return str;
	}
}

function $ID(d, w) {
	if (w == null)	w = window;
	return w.document.getElementById(d);
}

function $NM(m, w) {
	if (w == null)	w = window;
	return w.document.getElementsByName(m);
}

function $VL(o) {
	return o.value;
}

var $URL = function()	{
	return {
		prd : function(n,pr)	{
		if(pr)
			return _GNB_CONTEXT_PATH_ + "/product/SellerProductDetail.tmall?method=getSellerProductDetail&prdNo=" + n+pr;
		else
			return _GNB_CONTEXT_PATH_ + "/product/SellerProductDetail.tmall?method=getSellerProductDetail&prdNo=" + n;
		}
		,
		plan : function(n)	{ return _GNB_CONTEXT_PATH_ + "/browsing/MallPlanDetail.tmall?method=getMallPlanDetail&planDisplayNumber=" + n; }
		,
		evt : function(i)	{ return _GNB_CONTEXT_PATH_ + "/event/event.page?evt=" + i; }
		,
		ctgr : function(d,n,c)	{
			var ct = "";
			if ( d == 3 )	{
				ct = "S";
			} else if ( d == 4 )	{
				ct = "M";
			}

			return _GNB_CONTEXT_PATH_
			+ "/browsing/DisplayCategory.tmall?method=getDisplayCategory" + d + "Depth&dispCtgrNo=" + n + "&dispCtgrCd=" + c
			+ ( ct != "" ? "&cateType=" + ct : "");
		}
	}
}();


/* Cookie ************************************************************** */
function getCookieTmall(str) {
	var binfo=document.cookie.split(";");
	var tmp="";
	for (var i=0; i<binfo.length; i++) {
		if (binfo[i].indexOf(str)>=0) {
			tmp=binfo[i].substring(binfo[i].indexOf("=")+1,binfo[i].length);
			break;
		}
	}
	return tmp;
}

function getCookie(name){
	return getCookieTmall(name);
}

function getCookieVal(offset){
	var endstr = document.cookie.indexOf(";", offset);
	if(endstr == -1)
		endstr = document.cookie.length;
	return unescape(document.cookie.substring(offset, endstr));
}

function setCookie (name, value, expires) {
  document.cookie = name + "=" + escape (value) + "; path=/; domain=.11st.co.kr; expires=" + expires.toGMTString();
}

/**
 * !! cookie form is shown below
 *  cookieId=cookieName[|cookieValue]#cookieName[|cookieValue]
 * !! cookie samples
 *  TD=FOO1#FOO2|BAR2#FOO3|BAR3
 *  TP=FOO|BAR#FOO_A|BAR_A#FOO_B#FOO_C
 *  TT=TOAST_MKT_OBJNO_HIST|FALSE<*>F^5702091<@>[F^5702092<@>]
 *
 * Field Description -----
 * 1. COOKIE_ID_ARR - Array which contains string of cookie id
 *  TP : Temporary
 *  TD : A Day
 *  TT : Ten Year
 * 2. ckIdIndex - Index of COOKIE_ID_ARR
 *  0 : TP
 *  1 : TD
 *  2 : TT
 * 3. cookieName : The Name of Cookie
 * 4. cookieValue : Value for the cookie
 * 5. !! DO NOT INCLUDE "#" or "|" IN THE NAME OR THE VALUE OF COOKIE
 *
 * Modified on 2nd Apr. 2010. jhjung
 */
var TMCookieUtil = function() {
    var COOKIE_ID_ARR = ["TP", "TD", "TT"]; // !DO NOT CHANGE SORT ORDER
    var HOST_DOMAIN = ".11st.co.kr";
    var TD_PERIOD = 1; // 1Day
    var TT_PERIOD = 365 * 10; // 10Year
    var CK_SP = "#"; // seperator for each sub cookies
    var VL_SP = "|"; // seperator for bewteen name of cookies and there value

    // strip sharp(#) on begining of string and end of string, also trim white space
    String.prototype.stripSharp = function() {
        return this.replace(/^[\#\s]+|[\#\s]+$/g, "");
    }

    // trim white space
    String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, "");
    }

    /**
     * Estimate whether the param value is empty or not
     */
    function isEmpty(param) {
        if(!isNaN(param)) {
            param = param.toString();
        }
        if(param == null || param.trim() == "" || param.trim() == "undefined" || (typeof param == "undefined")) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * get expire date. period -> day
     */
    function getExpireDate(period) {
        var date = new Date();
        date.setDate(date.getDate() + period);
        var nextDay = new Date(date.getFullYear(),date.getMonth(),date.getDate(), 0, 0, 0);
        return nextDay.toGMTString();
    }

    /**
     * Create cookie with string value of sub cookie
     * samples of newCookieStr
     *  "foo1|bar1#foo2#foo3#foo4|bar2"
     * !! Cookie name and value string must be encode
     * !! use encodeURIComponent()
     */
    function createNewCookie(ckIdIndex, newCookieStr) {
        var cookieStr = "";
        var expireDate = "";
        if(!isEmpty(newCookieStr)) {
            cookieStr += COOKIE_ID_ARR[ckIdIndex] + "=" + encodeURIComponent(newCookieStr.stripSharp()) + ";";
            if(ckIdIndex == 1){
                expireDate = getExpireDate(TD_PERIOD);
            }else if(ckIdIndex == 2){
                expireDate = getExpireDate(TT_PERIOD);
            }
            if(!isEmpty(expireDate)) {
                cookieStr += " expires=" + expireDate + ";"
            }
            cookieStr += " domain=" + HOST_DOMAIN + "; path=/;"
            document.cookie = cookieStr;
        } else {
            // remove cookie, when there is no sub cookie at all
            document.cookie = COOKIE_ID_ARR[ckIdIndex] + "= " + "; expires=" + getExpireDate(-1) + "; domain=" + HOST_DOMAIN + "; path=/";
        }
    }

    /**
     * get matched value from arr with specified seperator
     */
    function getMatchedStr(strArr, searchStr, seperator) {
        if(strArr != null && strArr.length > 0 && !isEmpty(searchStr)) {
            for(var index = 0; index < strArr.length; index++) {
                var tempArr = strArr[index].trim().split(seperator);
                if(tempArr[0] == searchStr) {
                    return decodeURIComponent(tempArr[1].trim());
                }
            }
        }
        return "";
    }

    return {
        add : function(ckIdIndex, cookieName, cookieValue){
            /* add cookie */
            if(isEmpty(cookieName)) { return false; }
            var newCookieArr;
            if(isEmpty(cookieValue)) {
                // remove '#' from cookieName
                var regExsp = new RegExp("\\" + CK_SP, "g"); // RegExp => /\#/g
                newCookieArr = cookieName.replace(regExSp, "").trim().split(VL_SP);
            } else {
                // remove '#', '|' from cookieName and cookieValue
                var regExSp = new RegExp("\\" + CK_SP + "|" + "\\" + VL_SP, "g"); // RegExp => /\#|\|/g
                newCookieArr = [cookieName.replace(regExSp, "").trim(), cookieValue.replace(regExSp, "").trim()];
            }
            var classCookieStr = ""; // whole cookie string (ex> foo1#foo2|bar2)
            var newCookieStr = "";
            if(TMCookieUtil.isExistCookie(COOKIE_ID_ARR[ckIdIndex])) {
                // remove exists cookie and add new cookie with value if possible
                classCookieStr = TMCookieUtil.getCookie(COOKIE_ID_ARR[ckIdIndex]);
                var subCookieArr = classCookieStr.split(CK_SP);
                for(var index = subCookieArr.length - 1; index >= 0; index--) {
                    if(subCookieArr[index].split(VL_SP)[0] == newCookieArr[0]) {
                        subCookieArr.splice(index, 1);
                    }
                }
                subCookieArr.push(newCookieArr.join(VL_SP));
                newCookieStr = subCookieArr.join(CK_SP);
            } else {
                // create new cookie with cookie class
                newCookieStr = newCookieArr.join(VL_SP);
            }
            // The value of newCookieStr will be encoded in function 'createNewCookie'
            createNewCookie(ckIdIndex, newCookieStr);
        },
        clear : function(ckIdIndex){
            /* clear cookie - remove TD, TP, TT */
            createNewCookie(ckIdIndex, "");
        },
        remove : function(ckIdIndex, cookieName){
            /* remove name, value pair of sub cookie */
            if(isEmpty(cookieName)) { return false; }
            var CkCdValues = "";
            var delFlag = false;
            var classCookies = TMCookieUtil.getCookie(COOKIE_ID_ARR[ckIdIndex]); // TD=foo|bar#foo2|bar2#foo3#foo4|bar4...
            var subCookies = classCookies.split(CK_SP); // ["cookieName|cookieValue", "foo|bar", "foo2", ...]
            if(subCookies != null && subCookies.length > 0) {
                // remove matched cookie in reverse order
                for(var index = subCookies.length - 1; index >= 0; index--) {
                    if(subCookies[index].split(VL_SP)[0] == cookieName) {
                         subCookies.splice(index, 1);
                    }
                }
            }
            var splicedCookieStr = subCookies.join(CK_SP);
            // The value of newCookieStr will be encoded in function 'createNewCookie'
            createNewCookie(ckIdIndex, splicedCookieStr);
            if(!TMCookieUtil.isExist(ckIdIndex, cookieName)){
                delFlag = true;
            }
            return delFlag;
        },
        isExistCookie : function(ckId){
            /* Estimate whether exists or not with inserted parameter */
            if(!isNaN(ckId)) {
                ckId = COOKIE_ID_ARR[ckId];
            }
            var cookieArr = document.cookie.split(";");
            if(cookieArr != null && cookieArr.length > 0) {
                for(var index = 0; index < cookieArr.length; index++) {
                    var tempArr = cookieArr[index].trim().split("=");
                    if(tempArr[0] == ckId) {
                        return true;
                    }
                }
            }
            return false;
        },
        isExist : function(ckIdIndex, cookieName){
            /* Find sub cookie name, if exist then return true */
            if(isEmpty(cookieName)) { return false; }
            var classCookieValues = TMCookieUtil.getCookie(COOKIE_ID_ARR[ckIdIndex]);
            var subCookieArr = classCookieValues.split(CK_SP);
            if(subCookieArr != null && subCookieArr.length > 0) {
                for(var index = 0; index < subCookieArr.length; index++) {
                    if(subCookieArr[index].split(VL_SP)[0] == cookieName) {
                        return true;
                    }
                }
            }
            return false;
        },
        getCookie : function(ckId){
            /* get string of  sub cookies name,value pair */
            if(!isNaN(ckId)) {
                ckId = COOKIE_ID_ARR[ckId];
            }
            var cookieString = "";
            if(!isEmpty(ckId)) {
                var cookieArr = document.cookie.split(";");
                cookieString = getMatchedStr(cookieArr, ckId, "=").stripSharp();
            }
            return cookieString;
        },
        getSubCookie : function(ckIdIndex, cookieName){
            /* get value of sub cookie */
            if(isEmpty(cookieName)) { return false; }
            var classCookies = TMCookieUtil.getCookie(COOKIE_ID_ARR[ckIdIndex]);
            var subCookieValue = "";
            var subCookies = classCookies.split(CK_SP);
            if(subCookies != null && subCookies.length > 0) {
                for(var index = 0; index < subCookies.length; index++) {
                    if(subCookies[index].split(VL_SP)[0] == cookieName) {
                        var subCookie = subCookies[index].split(VL_SP);
                        if(subCookie.length > 1) {
                            subCookieValue = subCookie[1];
                            return subCookieValue;
                        }
                    }
                }
            }
            return subCookieValue;
        },
        allShowCookie : function(ckIdIndex){
            /* DO NOT USE THIS METHOD, USE 'getCookie' INSTEAD */
            var cookie = TMCookieUtil.getCookie(eval(ckIdIndex));
            return cookie;
        }
//        ,
//        subCkClearTemp : function(ckIdIndex, cookieName){
//            /* DO NOT USE THIS METHOD, USE 'remove' INSTEAD */
//            TMCookieUtil.remove(ckIdIndex, cookieName + "-");
//        }
    };
}();

/* common Ajax ************************************************************** */
function callAjax( url, params, callBack ) {

	var pageRequest = false ; // ajax object를 위한 변수.

	if(window.XMLHttpRequest){                          //IE 이외
	     pageRequest = new XMLHttpRequest();
	}else if(window.ActiveXObject){                     //IE에서
	     pageRequest = new ActiveXObject("Microsoft.XMLHTTP");
	}

	if (!pageRequest && typeof XMLHttpRequest != 'undefined')
		pageRequest = new XMLHttpRequest();

	if (pageRequest){ // pageRequest가 true인 경우만.
		try
		{
			var isAsynch = false ;
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

/* User Info ************************************************************** */
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

/* Url ******************************************************************** */
//공통 이미지 처리
function getCommonImgUrl(imgUrl)	{
	try	{
		var protocol = window.document.location.protocol;
		if ( protocol == "https:" )	{
			if ( _UPLOAD_IMG_PATH_!= "" && imgUrl.indexOf(_UPLOAD_IMG_PATH_) > -1 )	{
				return imgUrl.replace(_UPLOAD_IMG_PATH_, _SSL_UPLOAD_IMG_PATH_);
			} else if ( _IMG_PATH_ != "" && imgUrl.indexOf(_IMG_PATH_) > -1 )	{
				return imgUrl.replace(_IMG_PATH_, _SSL_IMG_PATH_);
			} else if ( _IMG_URL_ != "" && imgUrl.indexOf(_IMG_URL_) > -1 )	{
				return imgUrl.replace(_IMG_URL_, _SSL_IMG_URL_);
			} else if ( _UPLOAD_URL_ != "" && imgUrl.indexOf(_UPLOAD_URL_) > -1 )	{
				return imgUrl.replace(_UPLOAD_URL_, _SSL_UPLOAD_URL_);
			} else if ( _CSS_URL_ != "" && imgUrl.indexOf(_CSS_URL_) > -1 )	{
				return imgUrl.replace(_CSS_URL_, _SSL_CSS_URL_);
			} else if ( imgUrl.indexOf("http:") > -1 )	{
				return imgUrl.replace("http:", protocol);
			}
		}	else if ( protocol == "http:" )	{
			if ( _SSL_UPLOAD_IMG_PATH_ != "" && imgUrl.indexOf(_SSL_UPLOAD_IMG_PATH_) > -1 )	{
				return imgUrl.replace(_SSL_UPLOAD_IMG_PATH_, _UPLOAD_IMG_PATH_);
			} else if ( _SSL_IMG_PATH_ != "" && imgUrl.indexOf(_SSL_IMG_PATH_) > -1 )	{
				return imgUrl.replace(_SSL_IMG_PATH_, _IMG_PATH_);
			} else if ( _SSL_IMG_URL_ != "" && imgUrl.indexOf(_SSL_IMG_URL_) > -1 )	{
				return imgUrl.replace(_SSL_IMG_URL_, _IMG_URL_);
			} else if ( _SSL_UPLOAD_URL_ != "" && imgUrl.indexOf(_SSL_UPLOAD_URL_) > -1 )	{
				return imgUrl.replace(_SSL_UPLOAD_URL_, _UPLOAD_URL_);
			} else if ( _SSL_CSS_URL_ != "" && imgUrl.indexOf(_SSL_CSS_URL_) > -1 )	{
				return imgUrl.replace(_SSL_CSS_URL_, _CSS_URL_);
			} else if ( imgUrl.indexOf("https:") > -1 )	{
				return imgUrl.replace("https:", protocol);
			}
		}
	} catch (e)	{}
	return imgUrl;
}
// 업로드 이미지 SSL 분리
function getUploadImgUrl(imgUrl)	{
	try	{
		if ( imgUrl.indexOf("http:") > -1 || imgUrl.indexOf("https:") > -1 )	{
			return getCommonImgUrl(imgUrl);
		}

		if ( window.document.location.protocol == "https:" )	{
			return _SSL_UPLOAD_URL_ + imgUrl;
		}	else	{
			return _UPLOAD_URL_ + imgUrl;
		}
	} catch (e)	{
		return _UPLOAD_URL_ + imgUrl;
	}
}

/* Product List ******************************************************************** */
//클릭한 상품 노출
function dispClickedPrdBestSeller(style)
{
	dispClickedPrdNew(null, 26, style, 1);
}
function dispClickedPrdFavor(style)
{
	dispClickedPrdNew(null, 26, style, 2);
}
function dispClickedPrd(style)
{
	dispClickedPrdNew(null, 26, style, 0);
}
function dispClickedPrdRnk(rnk, style)
{
	dispClickedPrdNew(null, rnk, style, 0);
}
function dispClickedPrdImage()
{
	dispClickedPrdNew(true, null, null, 0);
}
function dispClickedPrdNew(image, rnk, style, type)
{
	try
	{
		var prdNo = TMCookieUtil.getSubCookie(0, "CLICKED_PRDNO");
		if ((prdNo != null) && (prdNo != ""))
			TMCookieUtil.remove(0, "CLICKED_PRDNO");
		else
		{
			if (document.location.href.indexOf("click=Y") == -1)
				return;

			var index = document.location.href.indexOf("prdNo=");
			if (index != -1)
			{
				var temp = document.location.href.substring(index + 6);
				index = temp.indexOf("&");
				if (index != -1)
					prdNo = temp.substring(0, index);
				else
					prdNo = temp;
			}
		}

		if (setClickedPrdData(prdNo, image))
			return;
		if (image == true)
			return;

		if (rnk == undefined)
			rnk = 26;

		//클릭한 상품이 없으면 상품정보 가져와서 innerHtml로 넣어준다.
		var param = "&prdNo=" + prdNo + "&index=" + rnk + "&style=" + style + "&type=" + type;

		var str = callAjax("/browsing/MainAjax.tmall?method=getMainClickPrd150ImgHTML", param, "");

		//클릭한 상품이 없으면 상품정보 가져와서 innerHtml로 넣어준다.
		var clickedPrd = $ID("rank_" + rnk);
		if ((clickedPrd != undefined) && (clickedPrd != null))
		{
			var clickPrdElement = clickedPrd.parentNode;
			if ((str != "FALE") && (str != "FAIL") && (str != ""))
			{
				clickPrdElement.innerHTML = str.replace("<li>", "").replace("</li>", "");
				setClickedPrdData(prdNo, image);
			}
		}
	}
	catch(e) { }
}
function setClickedPrdData(prdNo, image)
{
	var dispObj = $ID("thisClick_" + prdNo);
	if (dispObj)
	{
		if ((image == null) || (image == ''))
			dispObj.innerHTML = "<a name='thisClickImg_" + prdNo + "'></a><div class='thisClick'><\/div><div class='thisClickImg'><\/div>";
		else
			dispObj.innerHTML = "<div class='thisClick'><\/div><div class='thisClickImg'><img name='thisClickImg_" + prdNo + "' src='" + _IMG_URL_ + "/img/browsing/bestseller/click_title.gif' alt='방금 클릭하신 상품입니다.'/><\/div>";
		document.location.href = "#thisClickImg_" + prdNo;
		return true;
	}
	return false;
}

//Main Click 상품 HTML설정
function setMainClickPrdHtml(rnk)
{
}

/* Log ******************************************************************** */
//스크립트 오류 logging
function jsLog(msg)	{
	return;
	try	{
		//msg 처리;
		var curUrl = document.location.href;
		var fnNm = "top";
		if ( arguments.caller != null )	{
			// 함수 호출
			fnNm = arguments.caller.callee;
		}
	} catch (ex)	{}
}

/* Stat And Click Action ******************************************************************** */
// goCommonUrl
function goCommonUrl(url, target)	{
	try	{
		if (target == null || target == "")	{
			target = top;
		}
		if (url != null && url != "")	{
			if (target == '_blank')
				window.open(url,target);
			else
				target.location.href = url;
		}
	} catch (ex)	{}
}

//stat
function doCommonStat(code)	{
	try	{
		if ( code != null && code != "" )	{
			var	i =	new	Image();
			var protocol = window.document.location.protocol;
			var statDomain = _GNB_CONTEXT_PATH_;

			if ( protocol == "https:" )	{
				statDomain =  statDomain.replace("http:", protocol);
			}

			i.src =	statDomain + "/a.st?url=" + code;
			s_objectID = code;

		}
	} catch (ex)	{}
}

// setComClickedPrd
function setComClickedPrd(prdNo)	{
	if ( prdNo != null && prdNo != "" )	{
		TMCookieUtil.add(0, "CLICKED_PRDNO", prdNo);
	}
}

// goCommonPrdDtl
function goCommonPrdDtl(prdNo,target){
	goCommonUrl(_PRODUCT_DETAIL_URL_ + prdNo, target);
}

//stat goStatUrl
function goStatUrl(url, code, target)	{
	doCommonStat(code);
	goCommonUrl(url, target);
}

//stat goStatPrdDtl
function goStatPrdDtl(prdNo, code, target)	{
	doCommonStat(code);
	goCommonPrdDtl(prdNo,target);
}

//stat goStatPrdDtl + ad trc
function goStatPrdDtlTrc(prdNo, code, target, typGugn, areaGubn, trcNo)	{
	stck( typGugn, areaGubn, trcNo);
	goStatPrdDtl(prdNo, code, target);
}

//stat goStatPrdUrl
function goStatPrdUrl(url, prdNo, code, target)	{
	doCommonStat(code);
	setComClickedPrd(prdNo);
	if ( url != null && url != "" )	{
		if ( url.indexOf("?") > -1 )	{
			goCommonUrl(url+"&prdNo="+prdNo, target);
		} else	{
			goCommonUrl(url+"?prdNo="+prdNo, target);
		}
	}
}

//stat goStatPrdUrl + ad trc
function goStatPrdUrlTrc(url, prdNo, code, target, typGugn, areaGubn, trcNo)	{
	stck( typGugn, areaGubn, trcNo);
	goStatPrdUrl(url, prdNo, code, target);
}

//stat goStatPrdUrl
// func = "fnNm,arg1,arg2"... -> execute fnNm(arg1,arg2)
function doStatFunc(func, code)	{
	doCommonStat(code);
	if ( func != null && func != "" )	{
		try	{
			arrFunc = func.split(",");
			func = doCommonTrim(arrFunc[0]) + "(";

			var strArg = "";
			if ( arrFunc.length > 1 )	{
				strArg = "'" + arrFunc.slice(1).join("','") + "'";
			}
			func += strArg;
			func += ")";

			eval(func);
		}	catch (ex)	{}
	}
}

var omnitureMode = false;

/*
 * 광고 Tracking Code
 */
var isValidTrcStrLength = function( str )
{
	// 길이 체크
	var result = true;
	if( str.length < 6 )
	{
		//alert( "트래킹 문자 길이 오류 : 1" )
		result = false;
	}
	return result;
}

var isValidTrcStrChar = function( str )
{
	// 문자코드 영역 체크
	var result = true;
	var tempVal;
	var loop = str.length;
	for( var i=0; i < loop; i++ )
	{
		tempVal = str.charCodeAt( i );

		if( tempVal < 48 || 122 < tempVal )
		{
			//alert( "문자코드영역 오류 : 1" )
			result = false;
			break;
		}

		if(  57 < tempVal && tempVal < 65 )
		{
			//alert( "문자코드영역 오류 : 2" )
			result = false;
			break;
		}

		if(  90 < tempVal && tempVal < 97 )
		{
			//alert( "문자코드영역 오류 : 3" )
			result = false;
			break;
		}
	}

	return result;
}

var isValidTrcStrTrcCode = function( str )
{
	// 트래킹 코드 체크
	var result = true;
	if( str.substr( 5, 2 ) == "-1" ||
		str.substr( 5, 1 ) == "0" )
	{
		//alert( "트래킹 코드 오류 : 1" )
		result = false;
	}

	return result;
}


var isValidTrcCode = function( code )
{
	var result = true;
	if( code.length < 1 ||
		code.substr( 0, 2 ) == "-1" ||
		code.substr( 0, 1 ) == "0" )
	{
		result = false;
	}

	if( !isValidTrcStrChar( code ) )
	{
		result = false;
	}

	try
	{
		if( isNaN( code ) )
		{
			result = false;
		}
	}
	catch( exp )
	{
		result = false;
	}
	return result;
}

/*
 * trcNo   : Tracking No
 * gubun   : I or C Impression or Click
 * typ     : Tracking type M, C, etc.
 * area    : Tracking area A01, A02, etc.
 * aLing   : Link Url
 * aTarget : Link Target
 * option  : window.open option
 * wh      : where gubun
 */
var OMNITURE_IMP_BANNER="";
function doPushOmniForFla( trcNo, gubun, typ, area, aLink, aTarget, option, wh ) {
	if( trcNo != null )
	{
		if( isValidTrcCode(trcNo) )
		{
			if ( gubun == "C" ) {
				stck( typ, area, trcNo, '', aLink, aTarget, option );
			}

			if ( gubun == "I" ) {
				if(omnitureMode){
					try {
						if ( OMNITURE_IMP_BANNER.indexOf( trcNo+";" ) == -1 ) {
							//banner_imp ( typ+area, typ+area+trcNo );
							banner_imp_list ( typ+area+trcNo, typ+area );
						}
					} catch (e) {}
				}

				if ( wh == null ) {

					try {
						if ( OMNITURE_IMP_BANNER.indexOf( trcNo+";" ) == -1 ) {
							var img = new Image();
							var trcCode = typ+area+"I"+trcNo+"^";
							if( document.location.href.indexOf( "https" ) == 0 )
							{
								img.src = 'https://www.11st.co.kr/a.st?a='+trcCode;
							}
							else
							{
								img.src = 'http://st.11st.co.kr/a.st?a='+trcCode;
							}
						}
					} catch (e) {}
				}

				try {
					OMNITURE_IMP_BANNER = OMNITURE_IMP_BANNER + trcNo+";";
				} catch (e) {}
			}
		}
	}
}

//김청화 동영상리뷰 이용
function getVideoShareUrl()
{
	if(opener != undefined){
		if(opener.top != undefined){
			return opener.top.href;
		} else {
			return opener.href;
		}
	}else if(parent != undefined){
		if(parent.top != undefined){
			return parent.top.location.href;
		}else{
			return parent.location.href;
		}
	}else{
		if(top != undefined){
			return top.href;
		}else{
			return window.href;
		}
	}
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
function call_ems_order(item_code,item_num, item_price)
{
	if (getCookie('EHEMailCont') !="" )
	{
		var URL = 'http://mailing6.11st.co.kr/Amail_tracking.html?item_code='+item_code+'&item_num='+item_num+'&item_price='+item_price;
		callWebServer(URL);
	}
}

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
function checkUrl_IE(){
    try{
        var URL_LIST = new Array();
        var PREV_URL_LIST = new Array();
        var TEMP_URL_LIST = new Array();

        // 에러 체크를 위해서 단순히 추가했다.
        URL_LIST.push(location.href);

        for (var i=0; i<URL_LIST.length; i++){
                TEMP_URL_LIST.push(URL_LIST[i]);
        }

        for (var i=0; i<URL_LIST.length; i++){
            var currentUrl = URL_LIST.shift();
            var prevUrl = PREV_URL_LIST.shift();

            // 이전의 URL_LIST와 비교를 해서 다른 URL만 호출을 한다.

            if(currentUrl!=prevUrl){
                callWebServer(currentUrl);
            }
        }
        PREV_URL_LIST = TEMP_URL_LIST;
    }catch(e){

    }
}

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

//.png24 에 대한 스크립트
function setPng24(obj)
{
	obj.width=obj.height=1;
	obj.className=obj.className.replace(/\bpng24\b/i,'');
	obj.style.filter ="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+ obj.src +"',sizingMethod='image');"
	obj.src='http://s.011st.com/img/common/blank.gif';
	return '';
}

//////////////////////////////////웹트랙   시작 END   ///////////////////////////////////


/**
 * 광고서버 스위치
 */
var _dsSeverMode = true;

// 공통 이동 함수
// 상품상세
function goPrd(prdNo, target,pr)
{
	var url = $URL.prd(prdNo,pr);
	goCommonUrl(url, target);
}
function newPrd(prdNo,pr)
{
	goPrd(prdNo,'_blank',pr);
}
function topPrd(prdNo)
{
	goPrd(prdNo, top);
}
// 기획전
function goPlan(planNo, target)
{
	var url = $URL.plan(planNo);
	goCommonUrl(url, target);
}
function newPlan(planNo)
{
	// 공통리스팅 기획전 이외의 URL정보로 이동시
	if(planNo.indexOf("http://") > -1){
		goCommonUrl(planNo, '_blank');
	}else{
		goPlan(planNo, '_blank');
	}
}
function topPlan(planNo)
{
	goPlan(planNo, top);
}
// 이벤트
function goEvt(evtId, target)
{
	var url = $URL.evt(evtId);
	goCommonUrl(url, target);
}
function newEvt(evtId)
{
	goEvt(evtId, '_blank');
}
function topEvt(evtId)
{
	goEvt(evtId, top);
}
// 카테고리
function goCtgr(depth, ctgrNo, ctgrCd, param, target)
{
	var url = $URL.ctgr(depth, ctgrNo, ctgrCd) + param;
	goCommonUrl(url, target);
}
function newCtgr(depth, ctgrNo, ctgrCd, param)
{
	goCtgr(depth, ctgrNo, ctgrCd, param, '_blank');
}
function topCtgr(depth, ctgrNo, ctgrCd, param)
{
	goCtgr(depth, ctgrNo, ctgrCd, param, top);
}

function postArticle(sns) {
	var url = "";
	url+=_GNB_CONTEXT_PATH_+"/browsing/PostArticle.tmall?method=setPosting";

	var winSize = '';
	var option = '';

	if ("clog" == sns) {
		winSize = "width=400,height=364";
		option = ",scrollbars=no,resizable=no";
	} else if ("facebook" == sns) {
		winSize = "width=600,height=400";
		option = ",scrollbars=yes,status=yes,resizable=yes,toolbar=yes,location=yes,menubar=yes";
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

	var currentUrl = "";
	if (typeof(__SNS_PRD_NO__) != "undefined" && __SNS_PRD_NO__.length > 0 && __SNS_TRACKING_PAGE__ == "spc") {
		var urlTemp = "";
		if (document.URL.indexOf("&toDayPrdNo") > 0) {
			urlTemp = document.URL.substring(0,document.URL.indexOf("&toDayPrdNo"));
		} else {
			urlTemp = document.URL;
		}
		currentUrl = "&url="+encodeURIComponent(urlTemp+"&toDayPrdNo="+__SNS_PRD_NO__);
	} else {
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
function afterJjimSrchLogin() {

	setGnbMember(); //GNB 로그인 이미지 변환처리

	var url = "/srchjjim/AuthInterestProductAction.tmall?method=interestProductTransit&fromUrl=SRCH_PRD_LIST&interestPrdNo="+jjimPrdNo;
	hiddenProcess.location.href = url;
}
function sucessSrchJJim() {
	try {
		removeCookieWB(); //날개배너 쿠키 갱신
		//setWBSwf();       //날개배너 플래쉬 새로고침
		if($NM('srch_jjim_' + jjimPrdNo).length > 1) {
			for(var i=0; i<$NM('srch_jjim_' + jjimPrdNo).length; i++) {
				$NM('srch_jjim_' + jjimPrdNo)[i].className ='pre_zzim_click';
				$NM('srch_jjim_' + jjimPrdNo)[i].title ='찜담기 완료';
			}
		}else {
			$ID('srch_jjim_' + jjimPrdNo).className ='pre_zzim_click';
			$ID('srch_jjim_' + jjimPrdNo).title ='찜담기 완료';
		}
		return false;
	} catch(e) {}
}
//___상품리스트 찜하기

function checkAlliance()
{
	var url = window.document.location.search;
	var index = url.indexOf("pcAlly=Y");

	if (index != -1)
		return true;

	return false;
}

function checkAlliance()
{
	var url = window.document.location.search;
	var index = url.indexOf("pcAlly=Y");

	if (index != -1)
		return true;

	return false;
}

//방문 수령지 위치 보기 팝업
function _goVisitAddrPop(prdNo, memNo, addrSeq, mbAddrLocation)
{
	var url = _GNB_CONTEXT_PATH_ + "/product/SellerProductDetail.tmall?method=getVisitAddrPopUp&prdNo="+ prdNo
	+ "&memNo=" + memNo + "&addrSeq=" + addrSeq + "&mbAddrLocation=" + mbAddrLocation;

	var height = 480;
	var width = 590;

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

// Cache 방지를 위해 원 문자열 끝에 TimeStamp를 붙여서 반환한다.
function appendTimeStamp(source){
	var delimiter = "&"
	if(typeof(source) === "undefined" || source === ""){
		delimiter = "?", source = "";
	}

	return source + delimiter + "noCache=" + (new Date()).getTime();
}

/* headerCommonJs.js에도 같은 함수가 있는데 수정할때 함께 수정 */
function getNitmusParam(isOtherParam){
	var param =TMCookieUtil. getSubCookie(0,'nitmus');
	var result="";
	var appendFirstStr="";
	if (param !== ""){
		param = decodeURIComponent(param);
		appendFirstStr = isOtherParam ? "&" : "?";
		result = appendTimeStamp(appendFirstStr+param);
	}else{
		result = "?noCache=" + (new Date()).getTime();
	}

	return result;
}
