/**
 * [�º� ����] �е���� �������� �ʴ� ��ɿ� �����ϸ�, ���� ��쵵�� ó��
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
			
			//iOS7 ���� ������, alert�� ��� �� setTimeout�� ��. BTS[CAFESUS-23943] ����
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
			add({sCheckValue : "bMarketBoard", oReason : {sWhy : "��ǰ��� �Խ���", sAlertMessage : "�º�PC������ ��ǰ��ϰԽ��� ���Ⱑ �������� �ʽ��ϴ�. PC���� �̿����ּ���"}});
			add({sCheckValue : "bStaffBoard", oReason : {sWhy : "���� �Խ���", sAlertMessage : "�º�PC������ ���ǰԽ��� ���Ⱑ �������� �ʽ��ϴ�. PC���� �̿����ּ���"}});
			add({sCheckValue : "bCafeProfile", oReason : {sWhy : "ī�� ������", sAlertMessage : "�º�PC������ ������ ������ �������� �ʽ��ϴ�. PC���� �̿����ּ���"}});
			add({sCheckValue : "bCafeBook", oReason : {sWhy : "ī���", sAlertMessage : "�º�PC������ ī��� ������ �������� �ʽ��ϴ�. PC���� �̿����ּ���"}});
			add({sCheckValue : "bHasArticleForm", oReason : {sWhy : "�۾�� �Խ���", sAlertMessage : "�º�PC������ �۾�� �Խ��� ���Ⱑ �������� �ʽ��ϴ�. PC���� �̿����ּ���"}});
			add({sCheckValue : "bArticleFormList", oReason : {sWhy : "�۾�� �����", sAlertMessage : "�º�PC������ �۾�� ����Ⱑ �������� �ʽ��ϴ�. PC���� �̿����ּ���"}});
			add({sCheckValue : "bHasTemplate", oReason : {sWhy : "���ø� �Խ���", sAlertMessage : "�º�PC������ ���ø� �Խ��� ���Ⱑ �������� �ʽ��ϴ�. PC���� �̿����ּ���"}});
		}
		
		return oChecker;
	})()
};

Tablet.editing = {
	ClickAlert : function() { return new Tablet.core.ClickAlertTemplate(Tablet.checkers.oEditingChecker) },
	JustAlert :  function() { return new Tablet.core.JustAlertTemplate(Tablet.checkers.oEditingChecker) }
};
