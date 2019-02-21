function popPCMe(meUrl){
	window.open(meUrl); 
	self.close();
}

function popMobileWebMe(){
	open_window('http://mobile.naver.com/service/popup_galaxyS.nhn?url=http://m.me.naver.com/', 'popMobileWebMe', 375, 645, ''); 
}

function popNaverMeSubscription(){
	open_window('/ViewNaverMeSubscriptions.nhn', 'popNaverMeSubscription', 380, 556, ''); 
	self.close();
}

function subscribe(clubid, menuid) {
	var form = document.subscriptionForm;
	open_wnd('', 'naverme', 380,320);
	form.submit();
}
