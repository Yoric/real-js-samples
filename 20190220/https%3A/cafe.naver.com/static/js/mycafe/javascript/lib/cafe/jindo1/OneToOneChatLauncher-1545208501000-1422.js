var oOneToOneChatLauncher = (function() {
	var bRunning = false;
	var _sCafeId = null;
	var _sUserId = null;
	var _sMemberId = null;
	var _bIsCafeMember = true;

	var run = function(sCafeId, sUserId, sMemberId) {
		if(bRunning == true) {
			return;
		}
		
		_sCafeId = sCafeId;
		_sUserId = sUserId;
		_sMemberId = sMemberId;

		if (!_bIsCafeMember) {
		    parent.suggestJoin();
		    return;
        }

		var oSslChecker = new Image();
    	oSslChecker.addEventListener('load', openChatPopup(), true);
        oSslChecker.onerror = oOneToOneChatLauncher.unSupported;
        oSslChecker.src = "https://secure.cafe.naver.com/secure-images/sslcheck/cafe.gif";		
	}
	
	var openChatPopup = function() {
		bRunning = true;

		if(_sUserId === _sMemberId){
			return;
		}
		
		try {
            var sChatUrl = g_sCafeTalk + '/cafes/' + _sCafeId + '/members/' + _sMemberId;
            popupCenterFromIframe(sChatUrl, 'oneToOneChatRoom_' + g_sUserId, 400, 700);
		} catch(e) {}
		
		bRunning = false;
	}

    var setIsCafeMember = function(bIsCafeMember) {
	    _bIsCafeMember = bIsCafeMember;
    }

	var unSupported = function() {
		alert("채팅에 필요한 인증서를 지원하지 않는 OS입니다.");
		return;
	}

	return {
		'run' : run,
        'setIsCafeMember' : setIsCafeMember,
		'openChatPopup' : openChatPopup,
		'unSupported' : unSupported
	};
})();
