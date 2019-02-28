if ( typeof window != "undefined" && typeof window.cafe == 'undefined') {
	window.cafe = {};
}

cafe.CommentCaptchaValidator = Class({
	name : "CommentCaptchaValidator",
	_sAbuseType : null,
	_sCaptchaValueDefaultMsg : "자동입력 방지문자",
	_nCaptchaCount : 0,
	_htCaptchaValidateApiUrl : "/CafeCaptchaCheckAjax.nhn",
	_sSvcCode : "commentpost",
	_welCaptchaArea : null,
	_welCsKey : null,
	_welCsValue : null,
	_welReloadCaptcha : null,
	_welCaptchaImage : null,
	_welCaptchaResult : null,

	_bShowArea : false,

	__init : function(htParam) {
		if (htParam) {
			this._sAbuseType = htParam.sAbuseType;

			this._welCaptchaArea = htParam.welCaptchaArea;
			this._welCsKey = htParam.welCsKey;
			this._welCsValue = htParam.welCsValue;
			this._welReloadCaptcha = htParam.welReloadCaptcha;
			this._welCaptchaImage = htParam.welCaptchaImage;
			this._welCaptchaResult = htParam.welCaptchaResult;

			this._welCsKey.value = htParam.csKey;
			this._welCaptchaImage.src = htParam.csImageUrl;
		}

		this._setEvent();
	},
	/**
	 * 캡챠 엘리먼트의 이벤트 바인딩
	 */
	_setEvent : function() {
		if (this._welReloadCaptcha) {
			Event.register(this._welReloadCaptcha, "click", this._onEvent.bindForEvent(this));
		}
		if (this._welCsValue) {
			Event.register(this._welCsValue, "keyup", this._onEvent.bindForEvent(this));
			Event.register(this._welCsValue, "click", this._onEvent.bindForEvent(this));
			Event.register(this._welCsValue, "blur", this._onEvent.bindForEvent(this));
		}
	},
	_onEvent : function(we) {
		if (oUtil.checkEvent(we)) {
			oUtil.processEvent(we, this);
		}
	},
	/**
	 * 캡차를 다른 그림으로 변경 클릭 핸들러
	 */
	_clickRecaptcha : function() {
		this._welCaptchaImage.src = this._welCaptchaImage.src + "&" + this._getCaptchaCount();
	},
	/**
	 * 캡차 입력 영역과 보안 문자 결과 문구를 지워주는 이벤트 핸들러
	 */
	_clickClearInitMessage : function() {
		// 기본 문구 제거
		if (this._sCaptchaValueDefaultMsg == this._welCsValue.value) {
			this._welCsValue.value = "";
		}
		// 보안문자 결과 메시지 제거
		this._welCaptchaResult.innerHTML = "";
	},
	/**
	 * 캡차 입력 영역과 보안 문자 결과 문구를 지워주는 이벤트 핸들러
	 */
	_keyupClearInitMessage : function() {
		this._clickClearInitMessage();
	},
	/**
	 * 캡차카운트 반환
	 *
	 * @return {Number} 캡차카운트
	 */
	_getCaptchaCount : function() {
		return this._nCaptchaCount++;
	},
	/**
	 * 캡챠 검증 결과를 확인하여 성공/실패 메시지 표시
	 */
	_showCaptchaResultText : function(bValidateResult) {
		var elNode = this._createCaptchaResultNode(bValidateResult);
		this._welCaptchaResult.appendChild(elNode);
	},
	_createCaptchaResultNode : function(bValidateResult) {
		var elNode = null;
		
		if (bValidateResult) {
			elNode = $C("em");
			elNode.innerHTML= "보안문자를 정확히 입력하셨습니다.";
		} else {
			elNode = $C("strong");
			elNode.innerHTML= "보안문자를 잘못 입력하셨습니다.";
		}
		
		return elNode;
	},
	/**
	 * 캡챠 코드가 검증되었는지 여부를 확인하고, Submit 메소드를 호출
	 */
	isValidCaptcha : function() {
		// 폼 영역에 기본 문구가 존재한다면 검증전에 제거
		this._clickClearInitMessage();

		// 캡챠 입력값 확인
		var oResponse = cafe.SyncAjaxExecuter.execute(this._htCaptchaValidateApiUrl, {
			csKey : this._welCsKey.value,
			csValue : this._welCsValue.value,
			svcCode : this._sSvcCode
		});

		// AJax 이상으로 올바른 결과를 반환하지 못한다면, 검증 된 상태로 반환
		if (oResponse == null) {
			return true;
		}

		/* 캡챠결과가 올바를 경우 */
		if (oResponse.validationResult == "CLEAR") {
			this._showCaptchaResultText(true);
			return true;
		}

		/* 캡챠결과가 맞지 않을 경우, 이미지를 다시 보여줌 */
		if (oResponse.validationResult == "INVALIDCHARACTER") {
			this._showCaptchaResultText(false);
			this._welCaptchaImage.src = oResponse.csImageUrl;
			this._welCsKey.value = oResponse.csKey;

			return false;
		}

		return true;
	},
	/**
	 * csKey 값 반환
	 */
	getCsKey : function() {
		if (!this._welCsKey) {
			return "";
		}
		return this._welCsKey.value;
	},
	/**
	 * csValue 값 반환
	 * (Element가 존재하지 않거나, 기본문구와 동일하다면 ""를 리턴)
	 */
	getCsValue : function() {
		if (!this._welCsValue) {
			return "";
		}

		if (this._welCsValue.value.trim() == this._sCaptchaValueDefaultMsg) {
			return "";
		}

		return this._welCsValue.value.trim();
	}
});
