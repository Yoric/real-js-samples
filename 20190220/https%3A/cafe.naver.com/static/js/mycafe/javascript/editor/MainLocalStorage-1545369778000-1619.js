/**
 * local storage 를 관리하는 util 객체   
 * 참고 : http://wiki.navercorp.com/pages/viewpage.action?pageId=286346101
 */
var oMainLocalStorage = {
	// 최근 작성한 게시글의 메뉴 id 관리
	PC_RECENT_POST_MENUID_KEY_PREFIX : 'PC_RECENT_POST_MENU:',
	PC_BGM_LAST_PLAY_TIME : 'lastPlayTime',
    PC_NOTICE_HIDDEN : 'NOTICE_OPEN',
    PC_DELEGATE_NOTICE : 'DELEGATE_NOTICE:',
    PC_POWERCAFE_NOTICE : 'POWERCAFE_NOTICE:',
    PC_HIDE_MYNEWS_TOOLTIP : "HIDE_MYNEWS_TOOLTIP",
    PC_PLUG_FLOATING_ADVERT_EXPOSURE_TIME: "PLUG_FLOATING_ADVERT_EXPOSURE_TIME",

	/* 저장소에 저장할 Key 를 반환 */
	_generateKey : function(nCafeId) {
		return this.PC_RECENT_POST_MENUID_KEY_PREFIX + nCafeId; 
	},

	/* 저장소에 저장할 Key 를 반환 */
	generateKey : function(sPrefix, sValue) {
		return sPrefix + sValue;
	},

	setLocalStorage : function(sKey, sValue) {
		try {
			
			if(localStorage == null || typeof localStorage == "undefined") {
				return;
			}

			localStorage.setItem(sKey, sValue);
		} catch(e) {}
	},

	getLocalStorage : function(sKey) {
		try {
			
			if(localStorage == null || typeof localStorage == "undefined") {
				return null;
			}

			return localStorage.getItem(sKey);
		} catch(e) {}
	},	
	
	/*
	 * localStorage 에 최근 작성한 게시글 menuId 정보 저장  
	 */
	saveRecentMenu : function(nCafeId, nMemuId) {
		this.setLocalStorage(this._generateKey(nCafeId), nMemuId);
	},
	
	/*
	 * 특정 카페의 최근 작성한 게시글 menuId 정보 반환  
	 */
	findRecentMenu : function(nCafeId) {
		return this.getLocalStorage(this._generateKey(nCafeId));
	}
};