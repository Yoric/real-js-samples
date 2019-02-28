/** 
 * @description 카페 이미지 원본 저장하기 런처 
 * @class SlideLauncher
 * @requires Jindo, cafe_common.js 
 * @version 1.0.0 
 * @author laziel (AjaxUI2), oskm
 * @copyright NHN corp. <http://www.nhncorp.com>
 * @since 2011.03.02
 * @example
 *	function initSlideLauncher(){
		oSLauncher = new SlideLauncher();
		// 원본 저장하기 버튼을 사용할 경우
		oSLauncher.setSupportSaveBtn(true);
		oSLauncher.bindEvent();
		oSLauncher.fOnClick = function(){
			...
		};
	}
	LH.add("initSlideLauncher()");
 */
if(typeof window != "undefined" && typeof window.cafe == 'undefined') {
	window.cafe = {};
}

cafe.ImageLauncher = Class({
	/**
	 * @description 원본 저장하기 버튼을 보여줄 DIV 객체
	 * @type {Object}
	 */
	oLauncher : null,
	
	/**
	 * @description 원본 저장하기 HTMLElement
	 */
	elSaveImageLayer : null,
	/**
	 * @description 원본 저장하기 레이어 ID
	 */
	sSaveImageLayerId : 'saveImageLayer',
	
	/**
	 * @description PC 저장 / Ndrive 저장 옵션 영역 레이어 HTMLElement
	 */
	elSaveOptionLayer : null,
	
	/**
	 * @description PC 저장 / Ndrive 저장 옵션 영역 레이어 ID
	 */
	sSaveOptionLayerId : 'saveOptionLayer',
	
	/**
	 * @description 타입별 가로세로 사이즈
	 * @type {Object}
	 */
	oSize : {
		normal : {width:104, height:25},
		mini : {width:28, height:25}
	},
	
	/**
	 * @description 첨부파일Id
	 * @type {Number}
	 */
	nAttachId : null,
	
	/**
	 * 레이어 숨김 처리 타이머
	 */
	_nLayerHideTimer : null,
	
	/**
	 * @description 원본 저장하기 기능을 지원할 지 여부에 대한 flag 변수
	 */
	_bSupportSaveBtn : false,
	
	/**
	 * @description 원본 저장하기 레이어를 보여줄 수 있는 지 여부에 대한 flag 변수
	 */
	_bShowableSaveImageLayer : false,
	
	htAttachMap : {},
	
	/**
	 * @description 생성자 (초기화 함수)
	 */
	__init : function(){
		// 컨테이너(DIV) 엘리먼트 생성 
		this.oLauncher = $C('div');
		this.elSaveImageLayer = $(this.sSaveImageLayerId);
		this.elSaveOptionLayer = $(this.sSaveOptionLayerId);
		Element.setCSS(this.oLauncher, {
			position : 'absolute',
			display : 'none',
			width : this.oSize.normal.width + 'px',
			height : this.oSize.normal.height + 'px',
			cursor : 'pointer'
		});
	},

	/**
	 * @description 이미지(IMG) 태그 컬렉션 반환 함수
	 * @param {String} sParentId 찾으려는 IMG 태그들이 들어있는 영역(부모) 객체의 식별자
	 * @return {Array} IMG 엘리먼트를 담고 있는 배열
	 */
	_getTargetImages : function(sParentId){
		sParentId = (!sParentId) ? 'tbody' : sParentId;
		return $(sParentId).getElementsByTagName('img');//$$("span.slide_area > img", $(sParentId));
	},
	
	/**
	 * @description 이벤트 바인딩 함수
	 */
	bindEvent : function(){
		// 각 이미지에 이벤트 바인딩
		this.fMouseOver = this._onmouseover.bind(this);
		this.fMouseOut = this._onmouseout.bind(this);
		this.aImgs = this._getTargetImages();
		this.nImgs = this.aImgs.length;

		for(i=0; i < this.nImgs; i++){
			var oImg = this.aImgs[i];
			var nAttachId = this._getAttachId(oImg);

			if(nAttachId != false){
				this.htAttachMap[nAttachId] = oImg;
				Event.register(oImg, 'mouseover', this.fMouseOver);
				Event.register(oImg, 'mouseout', this.fMouseOut);
			}
		}
		
		// 원본 저장하기 버튼에 이벤트 바인딩
		if (this.isSupportSaveBtn()) {
			Event.register(this.elSaveImageLayer, 'mouseover', this.show.bind(this));
			Event.register(this.elSaveImageLayer, 'mouseout', this.hide.bind(this));
			Event.register(document.body, 'mouseover', this._hideOptionLayer.bind(this));
			Event.register(this.elSaveImageLayer, 'click', this._showOptionLayer.bind(this));
			Event.register(this.elSaveOptionLayer, 'click', this._onClickSaveOption.bind(this));
		}
		
		// 소멸자 이벤트 바인딩
		Event.register(window, 'unload', this.destroy.bind(this));
	},
	
	/**
	 * @description 소멸자 함수
	 */
	destroy : function(){
		// 이벤트 detach
		this._detachEvent();

		// 변수 소거
		this.oLauncher = this.oSize = this.fMouseOver = this.fMouseOut = this.aImgs = this.nImgs = null;
		this.elSaveImageLayer = this.sSaveImageLayerId = this.elSaveOptionLayer = this.sSaveOptionLayerId = this._nLayerHideTimer = this._bSupportSaveBtn = null;
	
	},
	
	/**
	 * @description 이벤트 언바인드 함수
	 * @private
	 */
	_detachEvent : function(){
		// 각 이미지 이벤트 제거
		for(i=0; i < this.nImgs; i++){
			var oImg = this.aImgs[i];
			if(this._getAttachId(oImg) != false){
				Event.unregister(oImg, 'mouseover', this.fMouseOver);
				Event.unregister(oImg, 'mouseout', this.fMouseOut);
			}
		}
		
		// 원본 저장하기 버튼 이벤트 바인딩 제거
		if (this.isSupportSaveBtn()) {
			Event.unregister(this.elSaveImageLayer, 'mouseover', this.show.bind(this));
			Event.unregister(document.body, 'mouseover', this._hideOptionLayer.bind(this));
			Event.unregister(this.elSaveImageLayer, 'click', this._showOptionLayer.bind(this));
			Event.unregister(this.elSaveOptionLayer, 'click', this._onClickSaveOption.bind(this));
		}
	},
	
	/**
	 * @description mouseover 이벤트 핸들러
	 * @private
	 */
	_onmouseover : function(eEvent){
		var elTarget = eEvent.srcElement || eEvent.target;
		this._setShowableSaveImageLayer(elTarget);
		this._setPositionSaveImageLayer(elTarget);
		this.nAttachId = this._getAttachId(elTarget);
		this.show();
	},
	
	/**
	 * @description 원본 저장하기 버튼 위치 조정 함수
	 * @private
	 * @param {Object} elTarget 원본 저장하기 버튼을 보여줄 대상 이미지 엘리먼트
	 */
	_setPositionSaveImageLayer : function(elTarget){
		var oPos = this._getPositionSaveImageLayer(elTarget);
		
		Element.setCSS(this.elSaveImageLayer, {
			top : oPos.top + 'px',
			left : oPos.left + 'px'
		});
	},

	/**
	 * @description 첨부 파일 Id 얻어내는 함수
	 * @private
	 * @param {Object} elTarget 원본 저장하기 버튼을 보여주는 대상 이미지 엘리먼트
	 * @return {Number} 첨부 파일 Id(attachId)
	 */
	_getAttachId : function(elTarget){
		var sId = this._findScriptElement(elTarget);
		
		var elAttachId = $(sId);
		if(elAttachId){
			var nAttachId = elAttachId.innerHTML;
			return nAttachId;
		}
		return false;
	}, 
	
	/**
	 * @description 선택된 이미지 element에 매칭되는 파일 정보를 담고 있는 스크립트 엘리먼트를 얻는다.
	 * ArticleRead.jsp 의 <script type="text/plain" .. > 이다.
	 * @param {Object} elTarget
	 */
	_findScriptElement : function(elTarget) {
		var nSlideIndex = 7;
		if (elTarget.src.indexOf('https') == 0) {
			nSlideIndex = 8;
		}
		var sId = elTarget.src.slice(nSlideIndex),
		sId = sId.slice(sId.indexOf('/'));
		//remove query string
		var questionMarkIndex = sId.lastIndexOf('?');
		if(questionMarkIndex > -1) {
			sId = sId.slice(0,questionMarkIndex);
		}

		return decodeURIComponent(sId);
	},
	
	/**
	 * @description 첨부 파일 정보를 얻는 함수
	 * ArticleRead.jsp 의 <script type="text/plain" .. 영역에 첨부파일 정보가 담겨있다. 이 정보를 가져와 사용한다.
	 * @param {Object} elTarget
	 */
	_getFileInfo : function(elTarget){
		var sId = this._findScriptElement(elTarget);
		
		var path = sId, fileName = '', fileSize = 0, fileUrl = '';
		var elSId = $(sId);
		fileSize = elSId.attributes['fileSize'].nodeValue;
		fileUrl = elSId.attributes['fileUrl'].nodeValue;
		fileName = elSId.attributes['fileName'].nodeValue;
		
		return {
					'path' : sId,
					'fileName' : fileName,
					'fileSize' : fileSize,
					'fileUrl' : fileUrl
			   };
	},
	
	/**
	 * @description mouseout 이벤트 핸들러
	 * @private 
	 */
	_onmouseout : function(eEvent){
		this.hide();
	},
	
	/**
	 * @description 내PC 저장 N드라이브 저장 영역 노출 처리 
	 * @param {Object} evt
	 */
	_showOptionLayer : function(evt) {
		Element.toggle(this.elSaveOptionLayer);
		Event.ready(evt).stop();
	},
	
	/**
	 * @description 내PC 저장 N드라이브 저장 영역 숨김 처리
	 * @param {Object} evt
	 */
	_hideOptionLayer : function(evt) {
		var we = Event.ready(evt);
		var el = we.element;
		var tEl = cssquery.getSingle('!div', el) ? cssquery.getSingle('!div', el) : el;
		
		if(this._nLayerHideTimer) {
			clearInterval(this._nLayerHideTimer);
			this._nLayerHideTimer = null;
		}
		
		this._nLayerHideTimer = setInterval((function (tEl) {
			if(tEl === this.elSaveImageLayer || tEl === this.elSaveOptionLayer) {
			} else {
				Element.hide(this.elSaveOptionLayer);
			}
			
			clearInterval(this._nLayerHideTimer);
			this._nLayerHideTimer = null;
		}).bind(this, tEl), 100);
	},
	
	/**
	 * saveOptionLayer 영역을 클릭 이벤트 핸들러
	 * @param {Object} evt
	 */
	_onClickSaveOption : function(evt) {
		var we = Event.ready(evt);
		var el = we.element;
		var tEl = cssquery.getSingle('!a', el) ? cssquery.getSingle('!a', el) : el;
		
		var oImg = this.htAttachMap[this.nAttachId];
		var oFileInfo = this._getFileInfo(oImg);
		
		if(Element.hasClass(tEl, '_saveToLocal')) {
			document.location.href = oFileInfo.fileUrl + '?type=attachment';
			
		} else if(Element.hasClass(tEl, '_saveToNdrive')) {
			this._saveNdrive(oFileInfo.fileUrl, oFileInfo.fileName, oFileInfo.fileSize);
		}
		
		we.stop();
	},
	
	/**
	 * @description N 드라이브 업로드 팝업을 생성한다.
	 * @param {Object} path
	 * @param {Object} filename
	 * @param {Object} filesize
	 */
	_saveNdrive : function(path, filename, filesize) {
        //path 에 한글이 있을 경우 인코딩 여부에 관계 없이 네이버 클라우드 쪽에서 에러가 발생함. (실서비스에서만)
        try {
            var sNDriveParam = JSON.stringify({
								name : encodeURIComponent(filename),
								size : filesize,
                				downloadUrl : encodeURIComponent(path.replace(filename, "file"))
							});

            var oWin = open_window(g_sNdriveHttps + '/saveFile.nhn?service=cafe&resource=' + sNDriveParam, 'ndrive_popup', 312, 350);

			if(oWin && !oWin.closed) {
				oWin.focus();
			}
		} catch(e) {}
	},

	/**
	 * @description 원본 저장하기 버튼 영역을 보여주는 함수
	 */
	show : function(){
		if (this.isSupportSaveBtn() && this.isShowableSaveImageLayer()) {
			Element.show(this.sSaveImageLayerId);
		}
	},
	
	/**
	 * @description 원본 저장하기 버튼 영역을 숨기는 함수
	 */
	hide : function(){
		if (this.isSupportSaveBtn()) {
			Element.hide(this.sSaveImageLayerId);
		}
	},
	
	/**
	 * @description 버튼을 출력할 위치를 계산하는 함수
	 * @private
	 * @param {Object} elTarget 원본 저장하기 버튼을 보여줄 대상 이미지 엘리먼트
	 */
	_getPositionSaveImageLayer : function(elTarget){
		var oPos = Element.realPos(elTarget);

		return {
			top : this._getImageTopPos(oPos.top, elTarget.clientHeight) - parseInt(this.oLauncher.style.height) - 2,
			left : this._getImageLeftPos(oPos.left, elTarget.clientWidth) - parseInt(this.oLauncher.style.width) - 2
		};
	},
	
	/**
	 * @description 이미지의 TOP 위치 값을 구한다.
	 * 이미지의 크기가 보여지는 영역보다 커 스크롤이 생긴 경우에 대한 처리 포함
	 * @param {Number} nTop 이미지 위측 위치 
	 * @param {Number} nHeight 이미지 높이
	 */
	_getImageTopPos : function(nTop, nHeight) {
		var elTbody = $("tbody"), nVal = 0;
		
		// 내용 영역이 가로 스크롤이 생성되어 있다면
		if(elTbody && elTbody.scrollWidth > elTbody.offsetWidth) {
			
			if( (elTbody.offsetTop + elTbody.offsetHeight + 16) > (nTop + nHeight) ) {
				nVal = nTop + nHeight ;
			} else {
				// 이미지의 아래영역이 스크롤에 가려지면 스크롤 높이만큼 위치값을 조정한다.
				nVal = nTop + nHeight -16;
			}
		} else {
			nVal = nTop + nHeight;
		}

		return nVal;
	},
	
	/**
	 * @description 이미지의 좌측 위치 값을 구한다.
	 * 이미지의 크기가 보여지는 영역보다 커 스크롤이 생긴 경우에 대한 처리 포함
	 * @param {Number} nLeft 이미지 좌측 위치 
	 * @param {Number} nWidth 이미지 너비
	 */
	_getImageLeftPos : function(nLeft, nWidth) {
		var elTbody = $("tbody"), nVal = 0;
		
		// 내용 영역이 가로 스크롤이 생성되어 있다면 (CAFESUS-9304)
		if(elTbody && elTbody.scrollWidth > elTbody.offsetWidth) {
			// 좌측 여백크기를 구한다. 이미지의 좌측영역이 현재 영역의 경계와 맞닿으면 0이 되고, 가려지면 음수값을 갖는다.
			// (14픽셀은 스크롤바의 좌측 화살표 버튼의 너비값)
			nVal = nLeft - (elTbody.scrollLeft+14);
			// 이미지가 스크롤에 의해 가려지면, 가려지는 영역만큼 이미지 크기에서 뺀다. (14 픽셀은 스크롤바의 우측 화살표 버튼의 너비값)		
			if( nVal >= 0 ) {
				nVal = nWidth + nLeft - elTbody.scrollLeft; // 이미지가 좌측스크롤에 안가려짐
			} else {
				nVal = nWidth + nVal + 14; // 이미지가 좌측스크롤에 가려짐
			}
			
			// 이미지 우측이 화면에 잘리는 경우 이미지슬라이드 위치를 우측 끝으로 설정
			if( nVal > elTbody.offsetWidth + 14 ){
				nVal = elTbody.offsetWidth + 14;
			}
			
		} else {
			nVal = nLeft + nWidth; // 스크롤없음
		}

		return nVal;
	},
	
	/**
	 * @description 원본 저장하기 버튼 노출 기준을 체크하여 저장한다.
	 * @param {Object} elTarget
	 */
	_setShowableSaveImageLayer : function(elTarget) {
		var oSize = this._getResizedImageSize(elTarget);
		
		// 215x75 이상만 보여주지 않는다.
		if(oSize.nWidth > 214 && oSize.nHeight > 74) {
			this.setShowableSaveImageLayer(true);
		} else {
			this.setShowableSaveImageLayer(false);
		}
		
		//var oImg = this.htAttachMap[this.nAttachId];
		var oFileInfo = this._getFileInfo(elTarget);
		
		if(oFileInfo.fileUrl.trim() == "") {
			this.setShowableSaveImageLayer(false);
		}
	},
	
	/**
	 * resize 된 이후의 사이즈를 계산하여 리턴한다.
	 * @param {Object} elTarget
	 */
	_getResizedImageSize : function(elTarget) {
		// resize된 이후의 사이즈로 출력 크기 계산
        var IMAGE_WIDTH = 740;
        var nWidth = elTarget.clientWidth;
        var nHeight = elTarget.clientHeight;

        if (nWidth > IMAGE_WIDTH){
        	var ratio = IMAGE_WIDTH / nWidth;
        	nWidth = IMAGE_WIDTH;
        	nHeight = nHeight * ratio;
        }
		
		return {
			'nWidth' : nWidth,
			'nHeight' : nHeight
		};
	},
	/**
	 * @description 투명 필터 처리 함수 (for IE5/6)
	 * @private
	 * @param {Object} 필터를 적용할 이미지 엘리먼트
	 */
	_setPng24 : function(oImg){
		oImg.width = oImg.height = 1;
		oImg.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+ oImg.src +"',sizingMethod='image');"
	},
	
	/**
	 * @description 원본 저장하기 버튼 지원 여부를 설정 한다.
	 * @param {Object} bSupport
	 */
	setSupportSaveBtn : function(bSupport) {
		this._bSupportSaveBtn = bSupport;
	},
	
	/**
	 * @description 원본 저장하기 버튼 지원 여부를 리턴 한다.
	 * @return true 원본 저장하기 버튼 지원 
	 */
	isSupportSaveBtn : function() {
		return this._bSupportSaveBtn;
	},
	
	/**
	 * @description 원본 저장하기를 보여줄 수 있는 지 여부를 설정한다.
	 * @param {Object} bShowable
	 */
	setShowableSaveImageLayer : function(bShowable) {
		this._bShowableSaveImageLayer = bShowable;
	},
	
	/**
	 * @description 원본 저장하기를 보여줄 수 있는 지 여부를 리턴한다.
	 * @return true 원본 저장하기 버튼을 보여줄 수 있는 지
	 */
	isShowableSaveImageLayer : function() {
		return this._bShowableSaveImageLayer;		
	}
});
