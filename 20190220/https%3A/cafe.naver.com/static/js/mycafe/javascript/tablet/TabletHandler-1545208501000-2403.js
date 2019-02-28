/**
 * 게시글 쓰기 이외의 모든 영역에 대한 태블릿 지원여부 처리를 담당한다.
 */
var TabletHandler =  Class({
	tabletClass : "_tabletRestrict",
	tabletMsg : "tabletMsg",
	defaultDesc : "해당",
	
	__init : function (bTablet) {
		// Tablet PC가 아니면 event를 bind 하지 않는다.
		if (!bTablet) {
			return;
		}
		
		this._setEvent();
	},
	
	_setEvent : function () {
		Event.register(window, 'load', this.removeOnClick.bindForEvent(this));
		Event.register(document.body, 'click', this.onClick.bindForEvent(this));
	}, 
	
	onClick : function (evt) {
		var el = Event.ready(evt).element;
		var tEl = cssquery.getSingle('!a', el) ? cssquery.getSingle('!a', el) : el;
		var tDiv = cssquery.getSingle('!div', el) ? cssquery.getSingle('!div', el) : el;

		if (this.hasTabletClass(tEl, this.tabletClass)) {
			this.processAlert(evt, this.getDesc(tEl.className));
		}
		
		if (this.hasTabletClass(tDiv, this.tabletClass)) {
			this.processAlert(evt, this.getDesc(tDiv.className));
		}
	},
	
	/**
	 * tablet 미지원 기능에 걸려있는 onClick 속성을 빈 function으로 덮어씌운다.
	 */
	removeOnClick : function(evt) {
		var targetTags = [ "a" ];
		for(i=0; i<targetTags.length; i++) {
			var aEl = document.getElementsByTagName(targetTags[i]);
			for(j=0; j<aEl.length ; j++) {
				var tEl = aEl[j];
				if (this.hasTabletClass(tEl, this.tabletClass)) {
					tEl.onclick = '';
				}
			}
		}
	},
	
	/**
	 * click 한 element의 기능명세를 반환한다. </br>
	 * @param {Object} wEl
	 */
	getDesc : function (sClassName) {
		if (sClassName) {
			var rxParam = new RegExp(this.tabletClass + "\\((.*?)\\)");
			var aMatch = sClassName.match(rxParam);
			if (aMatch && aMatch[0] && aMatch[1]) {
				return aMatch[1];
			}
		}
		return this.defaultDesc;
	},
	 
	/**
	 * click 한 element에 _tabletRestrict 속성이 존재하는지 판단한다.
	 * 
	 * @param {Object} wel
	 * @param {Object} sClassName
	 */
	hasTabletClass : function (wel, sClassName) {
		return wel.className.indexOf(sClassName) > -1;
	}, 
	
	processAlert : function (evt, sDesc) {
        if (evt) {
            Event.stop(evt);
        }
        var sAlertMsg = "태블릿PC에서는 " + sDesc + " 기능을 지원하지 않습니다. PC에서 이용해주세요.";
        alert(sAlertMsg);
	}
});