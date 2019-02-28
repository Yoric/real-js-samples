if (typeof window != "undefined" && typeof window.cafe == 'undefined') {
	window.cafe = {};
}

/**
 * 동기 형식으로 Ajax 호출을 수행하고, Json 결과를 반환하는 클래스
 */
cafe.SyncAjaxExecuter = {
	name : "SyncAjaxExecuter",
	oJsonResponse : null, // API 수행 결과

	/**
	 * AjaxApi와 Ajax 호출 파라미터를 받아
	 * Async로 실행한 후, 결과를 리턴
	 */
	execute : function(sApiUrl, oParams) {
		var ajax = new Ajax(sApiUrl, {
			'method' : 'POST',
			'async' : false,
			'headers' : {
				'ajax' : true
			},
			'params' : oParams,
			'suspend' : false,
			'onLoad' : this._fnExecuteApi.bind(this)
		});

		return this.oJsonResponse;
	},
	/**
	 * Json 객체를 저장
	 */
	_fnExecuteApi : function(res) {
		var oRes;
		try {
			eval('oRes=' + res.responseText);
		} catch (e) {
			oRes = null;
		}

		if (!oRes.isSuccess) {
			oRes = null;
		}

		this.oJsonResponse = oRes.result;
	}
};
