if (typeof window != "undefined" && typeof window.cafe == 'undefined') {
	window.cafe = {};
}

/**
 * 캡챠 검증 객체를 관리하기 위한 전역 변수
 */
cafe.CommentCaptchaManager = {
	_sAbuseType : "CommentPost",
	_htAbuserCheckApiUrl : "/AbuserCheckAjax.nhn", // 캡챠 대상여부 체크 및 초기값 생성 API
	_oCaptchaValidator : null, // 캡챠 검증을 위한 객체
	_prevElSubmit : null, // 가장 최근 누른 Submit 버튼을 기억 (최근 표시된 캡챠 영역을 확인하기 위해)
	_elCaptchaArea : null, // 가장 최근 생성한 캡챠 영역을 기억 (캡챠 영역 제거를 위해)
	_bShowCaptchaArea : false, // 캡챠 화면 표시 여부

	/**
	 * 현재 캡챠 영역과 검증 객체를 반환
	 */
	_getInstance : function(elSubmit) {
		// 기존 다른 버튼에 의해 생성된 캡챠는 제거
		if (this._prevElSubmit != null && this._prevElSubmit != elSubmit) {
			this.destroyInstance(this._prevElSubmit);
		}

		// 기존에 생성된 검증 객체가 있다면, 이를 반환
		if (this._oCaptchaValidator != null) {
			return this._oCaptchaValidator;
		}

		return null;
	},
	/**
	 * 캡챠 검증 instance와 캡챠 화면을 생성하고, 제거를 위해 멤버변수에 저장
	 */
	_createInstance : function(elSubmit, initCsKey, initCsImageUrl) {
		// 캡챠 화면 붙이기
		this._appendCaptchaArea(elSubmit);

		// 검증 객체 생성
		this._oCaptchaValidator = new cafe.CommentCaptchaValidator({
			'sAbuseType' : this._sAbuseType,
			'welCaptchaArea' : $('captchaArea_comment'),
			'welCsKey' : $('csKey_comment'),
			'welCsValue' : $('csValue_comment'),
			'welReloadCaptcha' : $('reloadCaptcha_comment'),
			'welCaptchaImage' : $('captchaImg_comment'),
			'welCaptchaResult' : $('captchaResult_comment'),
			'csKey' : initCsKey,
			'csImageUrl' : initCsImageUrl
		});

		this._prevElSubmit = elSubmit;

		return this._oCaptchaValidator;
	},
	/**
	 * 캡챠 영역을 댓글 아래쪽 영역에 붙임
	 */
	_appendCaptchaArea : function(elSubmit) {
		// 캡챠 화면 생성
		this._elCaptchaArea = $C("LI");
		this._elCaptchaArea.innerHTML = $T(CafeCommentTemplate.CaptchaArea);

		// 캡챠 화면 위치: 댓글 입력 버튼을 감싸는 div.box-reply2
		var elTarget = cssquery.getSingle("! table.cminput !> div", elSubmit);
		elTarget.appendChild(this._elCaptchaArea);
	},
	/**
	 * 캡챠 영역을 화면에서 제거
	 */
	_removeCaptchaArea : function(elSubmit) {
		// 캡챠 화면 위치: 댓글 입력 버튼을 감싸는 div.box-reply2
		var elTarget = cssquery.getSingle("! table.cminput !> div", elSubmit);
		elTarget.removeChild(this._elCaptchaArea);

		this._elCaptchaArea = null;
	},
	/**
	 * 캡챠 검증을 수행
	 */
	isValidCaptcha : function(elSubmit) {
		var oCaptchaValidator = this._getInstance(elSubmit);

		// 인스턴스가 null이라면,
		if (oCaptchaValidator == null) {
			// (대상일때만) 캡챠 검증 객체 생성
			oResponse = cafe.SyncAjaxExecuter.execute(this._htAbuserCheckApiUrl, {
				abuseType : this._sAbuseType,
				cafeId : g_sClubId
			});

			if (oResponse != null && oResponse.abuser) {
				this._createInstance(elSubmit, oResponse.csKey, oResponse.csImageUrl);
				return false;
			}

			return true;
		}

		// 캡챠 값을 입력했는지 확인
		if (this.getCsValue().trim() == "") {
			alert(CafeCommentTemplate.MSG.EMPTYCAPTCHAMSG);
			return false;
		}

		// 캡챠값 검증
		if (!oCaptchaValidator.isValidCaptcha()) {
			alert(CafeCommentTemplate.MSG.INVALIDCAPTCHAMSG);
			return false;
		}

		return true;
	},
	/**
	 * 사용 후, instance를 삭제
	 */
	destroyInstance : function(elSubmit) {
		if (this._elCaptchaArea != null) {
			this._removeCaptchaArea(elSubmit);
		}
		this._oCaptchaValidator = null;
		this._prevElSubmit = null;
	},
	/**
	 * oCaptchaValidator.getCsKey() delegator
	 */
	getCsKey : function() {
		if (this._oCaptchaValidator != null) {
			return this._oCaptchaValidator.getCsKey();
		}

		return null;
	},
	/**
	 * oCaptchaValidator.getCsValue() delegator
	 */
	getCsValue : function() {
		if (this._oCaptchaValidator != null) {
			return this._oCaptchaValidator.getCsValue();
		}

		return null;
	}
};
