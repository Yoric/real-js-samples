/**
 * EventBindProcessor Class
 * @author 어성규
 * @requires Jindo v.1
 */
if(typeof console == undefined){
	console = {
		log : function(){},
		debug : function(){}
	};
}

if(undefined != typeof window) { window.nhn = window.nhn || {}; }

/**
 * AU 이벤트 바인딩 처리기
 */
nhn.EventBindProcessor = Class( {

	/**
	 * 엘리먼트 기준으로 상위 엘리먼트를 찾는 메소드
	 * 
	 * @param {HTMLElement}
	 *            el 기준 엘리먼트
	 * @param {String}
	 *            sTagName 찾고자 하는 태그 네임
	 * @param {String}
	 *            sClassName 찾고자 하는 클래스명
	 * @return {HTMLElement} 찾은 엘리먼트
	 */
	getElement : function(el, sTagName, sClassName) {
		if (!el || !el.tagName) {
			return;
		}
		if (typeof sClassName == "undefined") {
			if (el.tagName.toLowerCase() == sTagName) {
				return el;
			} else {
				return cssquery.getSingle("!" + sTagName, el);
			}
		} else {
			if (el.tagName.toLowerCase() == sTagName
					&& Element.hasClass(el, sClassName)) {
				return el;
			} else {
				return cssquery
						.getSingle("!" + sTagName + "." + sClassName, el);
			}
		}
	},

	/**
	 * 클래스문자열로 부터 파라미터를 배열을 리턴한다.
	 * 
	 * @param {String}
	 *            sClassName 클래스 문자열
	 * @param {String}
	 *            sEvent
	 */
	getParam : function(sClassName, sEvent) {
		if (sClassName) {
			sEvent = sEvent || "param"
			var rxParam = new RegExp("_" + sEvent + "\\((.*?)\\)");
			var aMatch = sClassName.match(rxParam);
			if (aMatch && aMatch[0] && aMatch[1]) {
				return aMatch[1].split("|");
			}
		}
		return null;
	},

	checkEvent : function(we) {
		var el = we.element;
		var elAnchor = this.getElement(el, "a");
		if (Element.hasClass(el, "_stopDefault")
				|| (elAnchor && Element.hasClass(elAnchor, "_stopDefault"))) {
			we.stop();
		}
		if (Element.hasClass(el, "_stopBubble")
				|| (elAnchor && Element.hasClass(elAnchor, "_stopBubble"))) {
			we.stop();
		}
		if (Element.hasClass(el, "_disabled")
				|| (elAnchor && Element.hasClass(elAnchor, "_disabled"))) {
			return false;
		}
		return true;
	},

	/**
	 * 이벤트 처리기
	 * 
	 * @param {$Event}
	 *            we 랩핑된 이벤트
	 * @param {Object}
	 *            oContext 컨텐스트 객체
	 */
	processEvent : function(we, oContext) {
		var el = we.element;
		var aParam, elBtn, fFunc, elNode;
		elBtn = this.getElement(el, "a") || this.getElement(el, "button");
		elNode = this.getElement(el, "li");
		aParam = this.getParam(elBtn ? elBtn.className : el.className, we.type);
		aParam = (!aParam || aParam.length === 0) && elNode ? this.getParam(
				elNode.className, we.type) : aParam;
		if ((aParam && aParam[0] == oContext.name)
				&& (el.className.indexOf("_" + we.type) > -1
						|| (elBtn && elBtn.className.indexOf("_" + we.type) > -1) || (elNode && elNode.className
						.indexOf("_" + we.type) > -1))) {
			fFunc = oContext["_" + we.type + aParam[1]];
			if (typeof fFunc == "function") {
				aParam = aParam.slice(2, aParam.length);
				aParam.unshift(we);
				fFunc.apply(oContext, aParam);
			}
		}
	}
});

var oUtil = new nhn.EventBindProcessor();