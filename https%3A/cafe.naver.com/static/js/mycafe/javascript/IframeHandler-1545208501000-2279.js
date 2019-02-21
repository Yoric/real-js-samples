/**
 * iframe parent가 없는 경우 iframe url로 리다이렉트하고 parent의 cafeCss 스타일을 복사해 온다.
 */
var IframeHandler = Class({
	name : "IframeHandler",
	sOriginStyleId : "cafeCss",
	_sStyleType : "text/css",
	_sBodyStyleReplace : "body {background-color:transparent}",
	_rxBodyStyle : /body[^}]*}/i,
	_rxDomain : /^https?:\/\/(cafe|cafe2).naver.com/gi,
	_bRelocation : false,
    _sCafeUrl : "",
	_bCopyParentStyle : true,

	__init : function(htParam) {
		this._bRelocation = htParam.bRelocation;
		this._sCafeUrl = htParam.sDomain + "/" + htParam.sCafeUrl + "?iframe_url=";

		if (typeof htParam.bCopyParentStyle !== 'undefined') {
            this._bCopyParentStyle = htParam.bCopyParentStyle;
		}

        this._checkParentAndCopyStyle(this._bRelocation);

	},

	_checkParentAndCopyStyle : function(bRelocation) {
		if (parent && parent == self) { // iframe 내부 호출이 아닌 경우
			this._redirectToIframe(bRelocation);
			return;
		}

		if (this._bCopyParentStyle) {
            this._copyStyle();
		}
	},

    _copyStyle : function() {
        var elStyle = document.createElement("style");
        var elOriginStyle = top.$(this.sOriginStyleId);

        elStyle.type = this._sStyleType;

        if (elStyle.styleSheet) { // IE
            elStyle.styleSheet.cssText = elOriginStyle.styleSheet.cssText.replace(this._rxBodyStyle, this._sBodyStyleReplace);
        } else { // FF
            var replaceString = elOriginStyle.innerHTML.replace(this._rxBodyStyle, this._sBodyStyleReplace);

            try {
                elStyle.innerHTML = replaceString;
            } catch (e) { // Safari
                elStyle.innerText = replaceString;
            }
        }

        var elHead = document.head || document.getElementsByTagName("head")[0];
        elHead.appendChild(elStyle);
    },

	_redirectToIframe : function(bRelocation) {
		if (!!bRelocation && bRelocation) {
			var locationURL = document.location.href + "&where=search";
			document.location.href = this._sCafeUrl + locationURL.replace(this._rxDomain, "").replace(/\?/gi, "%3F").replace(/&/gi, "%26");
		} else {
			document.location.href = this._sCafeUrl + document.location.href.replace(this._rxDomain, "").replace(/\?/gi, "%3F").replace(/&/gi, "%26");
		}
	}
});
