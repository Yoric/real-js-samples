// change page title
if (document.getElementById('pageTitle') !== null) {
	if (document.getElementById('pageTitle').textContent !== "") {
		var pageTitle = document.getElementById('pageTitle');
		document.title = pageTitle.textContent;
	}
}
if (document.getElementById('pageMata') !== null) {
	if (document.getElementById('pageMata').textContent !== "") {
		var pageMeta = document.getElementById('pageMata');
		jQuery('Meta[name="description"]').attr('content',"");
		jQuery('Meta[name="description"]').attr('content',pageMeta.textContent);
		
	}
}
if (document.getElementById('heroImage') !== null) {
	if (document.getElementById('heroImage').textContent !== "") {
		var heroImageDyn = document.getElementById('heroImage');
		jQuery(".title-area").css('background-image',"");
		//jQuery(".title-area").css('background-image',heroImageDyn.textContent);
		jQuery(".title-area").css("background-image", "url("+heroImageDyn.textContent+")");
		
	}
}

// change page direction if needed
var url = window.location.href;
var lcid = url.match(/LCID=(\w{2})(-\w{2})?/ig);
if ( lcid !== null) {
	lcid = lcid.toString();
	lcid = lcid.toUpperCase();
	lcid = lcid.replace("LCID=", "");
	if ( lcid == "AR" || lcid == "HE" || lcid == "AR-SA" || lcid == "BH-BH") {
		document.body.dir = "RTL";
		document.body.className += " rtl";
	}
}

