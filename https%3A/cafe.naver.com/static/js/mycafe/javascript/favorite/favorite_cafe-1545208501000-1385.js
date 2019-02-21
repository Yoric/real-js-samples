function setupFavoriteCafe(isLogin, isCafeMember, clubid) {
	if (!isLogin || !isCafeMember) {
		joinCafe();
		return;
	}
	
	var oFavoriteInCafeInfo = $('favoriteCafeInCafeInfo');
	var oFavoriteInMemberInfo = $('favoriteCafeInMemberInfo');
	var isSetup = Element.hasClass(oFavoriteInCafeInfo, "btn-bookmark-off");
	
	var htParam = "{params : {isInteresting : " + isSetup + ", cafeInfo : [{clubid : " + clubid + ", isExternal : false}]}}";

	var ajax = new Ajax("/FavoriteCafeSetupAjax.nhn", {
 		method : "POST",
 		params : {
 			"json" : htParam,
 			"clubId" : clubid
 		},
		charset : "euc-kr",
		onLoad : function(res) {
			var json = eval( '(' + res.responseText + ')' );
			
			if (json == true) {
				toggleFavoriteCafe(oFavoriteInCafeInfo, isSetup);
				toggleFavoriteCafe(oFavoriteInMemberInfo, isSetup);
			}
		}
	});	
}

function toggleFavoriteCafe(oFavorite, isSetup) {
	var oParentElement = oFavorite.parentNode;

	if (isSetup) {
		oParentElement.title = "���ã�� ī�� ����";
		oFavorite.alt = "���ã�� ī�� ����";
		Element.removeClass(oFavorite, "btn-bookmark-off");
		Element.addClass(oFavorite, "btn-bookmark-on");
	} else {
		oParentElement.title = "���ã�� ī�� ���";
		oFavorite.alt = "���ã�� ī�� ���";
		Element.removeClass(oFavorite, "btn-bookmark-on");
		Element.addClass(oFavorite, "btn-bookmark-off");
	}
}
