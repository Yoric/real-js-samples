/**
 * [태블릿 대응] 패드류에 지원하지 않는 기능에 접근하면, 얼럿을 띄우도록 처리
 */

var Tablet = {};

Tablet.core = {
	SupportChecker : Class({
		aCheckTable : [],
		
		add : function(oCondtion) {
			this.aCheckTable.push(oCondtion);
			return this;
		},
		
		check : function(htOptions) {
			for (var i = 0, item; item = this.aCheckTable[i]; i++) {
				if (htOptions[item.sCheckValue]) {
					return item.oReason;
				}
			}
			
			return null;
		}
	}),
	
	JustAlertTemplate : Class({
		oChecker : null,
		
		__init : function(oChecker) {
			this.oChecker = oChecker;
		},
		
		check : function(htOptions) {
			var bAccessTabletPC = htOptions['bAccessTabletPC'];
			var bReadOnlyStatus = htOptions['bReadOnlyStatus'] || false;
			
			if (!bAccessTabletPC || bReadOnlyStatus) {
				return true;
			}
			
			var oReason = this.oChecker.check(htOptions);
			
			//iOS7 버그 때문에, alert을 띄울 때 setTimeout을 줌. BTS[CAFESUS-23943] 참고
			if (oReason) {
				setTimeout(function(){alert(oReason.sAlertMessage)},200);
				return false;
			}
			
			return true;
		}
	}),
	
	ClickAlertTemplate : Class({
		oChecker : null,
		oReason : null,
		
		__init : function(oChecker) {
			this.oChecker = oChecker;
		},
		
		check : function(htOptions) {
			var bAccessTabletPC = htOptions['bAccessTabletPC'];
			var bReadOnlyStatus = htOptions['bReadOnlyStatus'] || false;
			
			if (!bAccessTabletPC || bReadOnlyStatus) {
				return this;
			}
			
			this.oReason = this.oChecker.check(htOptions);
			
			return this;
		},
		
		click : function(sElementId) {
			return new this.ClickRuleBuilder(this, sElementId);
		},
		
		ClickRuleBuilder : Class({
			__init : function(oParent, sElementId) {
				this.oParent = oParent;
				this.sElementId = sElementId;
			},
			
			collectElements : function(sElementIds) {
				var results = [];
				
				if (sElementIds instanceof Array) {
					sElementIds.each(function(sElementId) {
						results.push($(sElementId));
					});
				} else {
					results.push($(this.sElementId));
				}
				
				return results;
			},
			
			run : function(fCallback, oThis) {
				var oParent = this.oParent;
				
				this.collectElements(this.sElementId).each(function(oElement) {
					if (!oElement) {
						return;
					}
					
					Event.register(oElement, "click", function(event) {
						if (oParent.oReason) {
							alert(oParent.oReason.sAlertMessage);
							Event.stop(event);
							return;
						}
						
						fCallback.call(oThis, event);
					});
				});
				
				return this.oParent;
			}
		})
	})
};

Tablet.checkers = {
	oEditingChecker : (function() {
		var oChecker = new Tablet.core.SupportChecker();
		
		with(oChecker) {
			add({sCheckValue : "bMarketBoard", oReason : {sWhy : "상품등록 게시판", sAlertMessage : "태블릿PC에서는 상품등록게시판 쓰기가 지원되지 않습니다. PC에서 이용해주세요"}});
			add({sCheckValue : "bStaffBoard", oReason : {sWhy : "스탭 게시판", sAlertMessage : "태블릿PC에서는 스탭게시판 쓰기가 지원되지 않습니다. PC에서 이용해주세요"}});
			add({sCheckValue : "bCafeProfile", oReason : {sWhy : "카페 프로필", sAlertMessage : "태블릿PC에서는 프로필 편집이 지원되지 않습니다. PC에서 이용해주세요"}});
			add({sCheckValue : "bCafeBook", oReason : {sWhy : "카페북", sAlertMessage : "태블릿PC에서는 카페북 편집이 지원되지 않습니다. PC에서 이용해주세요"}});
			add({sCheckValue : "bHasArticleForm", oReason : {sWhy : "글양식 게시판", sAlertMessage : "태블릿PC에서는 글양식 게시판 쓰기가 지원되지 않습니다. PC에서 이용해주세요"}});
			add({sCheckValue : "bArticleFormList", oReason : {sWhy : "글양식 만들기", sAlertMessage : "태블릿PC에서는 글양식 만들기가 지원되지 않습니다. PC에서 이용해주세요"}});
			add({sCheckValue : "bHasTemplate", oReason : {sWhy : "템플릿 게시판", sAlertMessage : "태블릿PC에서는 템플릿 게시판 쓰기가 지원되지 않습니다. PC에서 이용해주세요"}});
		}
		
		return oChecker;
	})()
};

Tablet.editing = {
	ClickAlert : function() { return new Tablet.core.ClickAlertTemplate(Tablet.checkers.oEditingChecker) },
	JustAlert :  function() { return new Tablet.core.JustAlertTemplate(Tablet.checkers.oEditingChecker) }
};
