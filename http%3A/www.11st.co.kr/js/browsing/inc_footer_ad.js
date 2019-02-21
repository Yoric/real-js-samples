jQuery(function() {
	window.onerror = function(msg, url, line) {
		if ( (url && url.indexOf("ds.11st.co.kr") > -1) || (!isNaN(line) && parseInt(line) <= 3) )
			return true;
		else return false;
	};
	try{
		if (jQuery("#historyW_mytmall").size() == 0 && document.location.host != 'buy.11st.co.kr'){
			var targetUrl = "//ds.11st.co.kr/NetInsight/text/11st/11st_sub/sub@page?noCache="+(new Date()).getTime();
			if(typeof lCtgrNo != "undefined") {
				targetUrl += lCtgrNo;
			}
			var callbackName = "dsBottomAdBack";
			var adNewFooterAdvHTML = '';
			var newFooterAdArea = new getJsonpData();
	
			newFooterAdArea.setUrl(targetUrl);
			newFooterAdArea.setCharSet("EUC-KR");
			newFooterAdArea.setCallbackName(callbackName);
			newFooterAdArea.init();
		}
	}catch(e){}
});

function dsBottomAdBack(data) {
	try {
		if (data === null || data === undefined) {
		}else if (data && typeof data == 'object') {
			if ("LURL1" in data && "IMG1" in data && "ALT" in data) {
				adNewFooterAdvHTML = makeNewFooterADHTML(data.LURL1, data.IMG1, data.ALT);
				if (adNewFooterAdvHTML != null && "" != adNewFooterAdvHTML.trim()) {
					jQuery('#newFooterAdArea').html(adNewFooterAdvHTML);
					jQuery('#newFooterAdArea').css('display', 'block');
				}
			}
		}
	} catch (e) {
	}
}

function makeNewFooterADHTML(linkURL, imgURL, altTEXT) {
	var htmlArray = [];

	htmlArray.push("	<div class='ftr_banner'>");
	htmlArray.push("		<a href='"+linkURL+"' target=\"_blank\" onclick=\"doCommonStat('HIS0901')\">");
	htmlArray.push("			<img src='"+ getCommonImgUrl(imgURL) +"' alt='"+ altTEXT +"'>");
	htmlArray.push("			<span class='bnrborder'></span>");
	htmlArray.push("		</a>");
	htmlArray.push("	</div>");
	return htmlArray.join('');
}