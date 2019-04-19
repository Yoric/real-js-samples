jQtnk(function ($) {
	setTimeout(function () {
		if(typeof $('#CheckStart')[0]!=="undefined" && typeof $('#CheckFinish')[0]!=="undefined"){
			var height=$('#CheckFinish').offset().top-($('#CheckStart').offset().top + $('#CheckStart').outerHeight(true));
			if(height < 100){
				$.post('/JS/meterAjax.php',{uri:window.location.pathname});
				}
		}
	}, 1);
});