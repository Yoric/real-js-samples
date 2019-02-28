var Cafe = {}

Cafe.menu = {
	Menu : Class({
		__init : function(htOptions) {
			this.nMenuId = htOptions["nMenuId"];
			this.bFavoriteMenu = htOptions["bFavoriteMenu"] || false;
			
			this.bBadMenu = htOptions["bBadMenu"];
			this.sMenuType = htOptions["sMenuType"];
			this.sBoardType = htOptions["sBoardType"];
			this.bHasArticleForm = htOptions["bHasArticleForm"];
			this.bHasTemplate = htOptions["bHasTemplate"];
		},
		
		isBoard :  function() {
			return this.sMenuType == "B";
		},
		
		isStaffBoard : function() {
			return this.sMenuType == "8";
		},
		
		isMarketBoard : function() {
			return this.sMenuType == "B" && this.sBoardType == "T";
		},
		
		hasArticleForm : function() {
			return this.bHasArticleForm
		},
		
		hasTemplate : function() {
			return this.bHasTemplate
		},
		
		isSupportTablet : function() {
			return !(this.isStaffBoard() || this.isMarketBoard() || this.hasArticleForm());
		},
		
		makeDefaultStyle : function() {
			if (this.bBadMenu) {
				this._setClassName("gm-tcol-c filter-50 display-inblock");
				return;
			}
			
			this._setClassName("gm-tcol-c");
		},
		
		makeBoldStyle : function() {
			this._setClassName("gm-tcol-c b");
		},
		
		getMenuElemId : function() {
			if (this.bFavoriteMenu) {
				return "favoriteMenuLink" + this.nMenuId;
			}
			
			return "menuLink" + this.nMenuId;
		},
		
		isNull : function() {
			return false;
		},
		
		_setClassName : function(className) {
			var oMenuElem = $(this.getMenuElemId());
			
			if (!oMenuElem) {
				return;
			}
			
			oMenuElem.className = className;
		}
	}),
	
	/**
	 * NullObject
	 */
	oNullMenu : {
		nMenuId : "",
		isNull : function() { return true; },
		isSupportTablet : function() { return true; },
		isMarketBoard : function() { return false },
		isBoard : function() { return false },
		isStaffBoard : function() { return false },
		hasArticleForm : function() { return false },
		hasTemplate : function() { return false }
	},

	Menus : Class({
		__init : function() {
			this.aMenus = [];
		},
		
		adjustMenuStyle : function(oSelectedMenu) {
			this._makeAllMenusDefaultStyle();
			
			if (!oSelectedMenu.isNull()) {
				this._makeMenuBoldStyle(oSelectedMenu);
				this._selectSpecialMenu(oSelectedMenu.nMenuId);
			}
		},
		
		getMenuType : function(nMenuId) {
			return this.find(nMenuId).sMenuType;
		},
		
		add : function(oMenu) {
			this.aMenus.push(oMenu);
		},
		
		addFavoriteMenu : function(nMenuId) {
			var oNewMenu = new Cafe.menu.Menu(this.find(nMenuId, false));
			oNewMenu.bFavoriteMenu = true;
			this.add(oNewMenu);
		},
		
		addFavoriteMenus : function(aMenuIds) {
			for (var i = 0, nMenuId; nMenuId = aMenuIds[i]; i++) {
				this.addFavoriteMenu(nMenuId);
			}
		},
		
		find : function(nMenuId) {
			return this._find(nMenuId, false);
		},
		
		findFavoriteMenu : function(nMenuId) {
			return this._find(nMenuId, true);
		},
		
		_find : function(nMenuId, bFavoriteMenu) {
			for (var i = 0, oMenu; oMenu = this.aMenus[i]; i++) {
				if (oMenu.nMenuId == nMenuId && oMenu.bFavoriteMenu == bFavoriteMenu) {
					return oMenu;
				}
			}
			
			return Cafe.menu.oNullMenu;
		},
		
		_makeAllMenusDefaultStyle : function() {
			for (var i = 0, oMenu; oMenu = this.aMenus[i]; i++) {
				oMenu.makeDefaultStyle();
			}
		},
		
		_makeMenuBoldStyle : function(oMenu) {
			if (oMenu == null) {
				return;
			}
			
			oMenu.makeBoldStyle();
		},
		
		_selectSpecialMenu : function(nMenuId) {
			if (typeof selectSpecialMenu == "undefined") {
				return;
			}
			
			selectSpecialMenu(nMenuId);
		}
	}),
	
	MenuMoveUpdater : Class({
		__init : function(oMenus) {
			this.oMenus = oMenus;
			this.oCurrentMenu = Cafe.menu.oNullMenu;
		},
		
		current : function() {
			return this.oCurrentMenu;
		},
		
		update : function(nNewMenuId) {
			this._update(oMenus.find(nNewMenuId));
		},
		
		updateWhenFavoriteMenu : function(nNewMenuId) {
			this._update(oMenus.findFavoriteMenu(nNewMenuId));
		}, 
		
		_update : function(oNewMenu) {
			this.oCurrentMenu = oNewMenu;
			this.oMenus.adjustMenuStyle(oNewMenu);
		}
	})
};
