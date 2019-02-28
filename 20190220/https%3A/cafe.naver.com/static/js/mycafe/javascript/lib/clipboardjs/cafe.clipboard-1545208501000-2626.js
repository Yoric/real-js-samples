/*
 * cafe.clipboard.js 2016-08-23
 *
 * Copyright (c) 2016. NAVER Corp. All rights Reserved.
 * NAVER PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
if(typeof window != "undefined" && typeof window.cafe == 'undefined'){
	window.cafe = {};
}

/**
 * @require JavaScriptLoader.js
 * @require cssquery.js
 * @require clipboard.js
 */
cafe.clipboard = {
	_sClipboardjsURL : "/javascript/lib/clipboardjs/clipboard.min.js",
	_sCopyButtonSelector : '._copyUrl',
	_oClip : null,

	_initClipboard : function() {
		if(typeof Clipboard == "undefined"){
			return;
		}

		var oClip = new Clipboard(this._sCopyButtonSelector);

		oClip.on('success', function(e) {
			e.clearSelection();
			alert("게시글의 주소가 복사되었습니다.");
		});

		oClip.on('error', function(e) {
			try{
				var sTarget = e.trigger.dataset.clipboardTarget || "";
				var elTarget = document.getElementById(sTarget.replace("#", ""));
				var sUrl = elTarget ? elTarget.text : e.trigger.dataset.clipboardText;
				if(sUrl){
					prompt("아래 주소를 복사하여 원하는 곳에 붙여넣기 하세요.", sUrl);
				}
			}catch (e){
				return;
			}

		});

		this._oClip = oClip;
	},

	init : function(htParam) {
		if(htParam){
			this._sCopyButtonSelector = htParam.selector || this._sCopyButtonSelector;
		}

		//MSIE(under 10): cannot load clipboard.js
		//IE11: for handle clipboard access deny exception
		var sUserAgent = navigator.userAgent.toLowerCase() || "";
		if(sUserAgent.indexOf("msie") > -1 || sUserAgent.indexOf("trident") > -1){
			this._bindClickEvent();
			return;
		}

		//except MSIE, load clipboard.js
		JavaScriptLoader.load(this._sClipboardjsURL, this._initClipboard.bind(this));

		return this;
	},

	_bindClickEvent : function() {
		var aEl = cssquery(this._sCopyButtonSelector);
		if(!aEl || aEl.length < 1){
			return;
		}

		var nLength = aEl.length;

		for(var x = 0; x < nLength; x++){
			var el = aEl[x];
			if(el){
				var sTarget = el.getAttribute("data-clipboard-target") || "";
				var elTarget = document.getElementById(sTarget.replace("#", ""));
				var sUrl = elTarget ? elTarget.innerText : el.getAttribute("data-clipboard-text");

				if(sUrl){
					el[window.addEventListener ? 'addEventListener' : 'attachEvent'](window.addEventListener ? 'click' : 'onclick', this._copyToClipboard.bind(this, sUrl), false);
				}
			}
		}
	},

	_copyToClipboard : function(sUrl) {
		if(window.clipboardData.setData("Text", sUrl)){
			alert("게시글의 주소가 복사되었습니다.");
		}else{
			prompt("아래 주소를 복사하여 원하는 곳에 붙여넣기 하세요.", sUrl);
		}
	}
};
