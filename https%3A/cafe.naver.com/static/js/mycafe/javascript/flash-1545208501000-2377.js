/**
 * NHN Flash UI common - Flash Contents
 * v1.0 lastUpdate : 2007. 6. 14 (modified by hooriza - 200080716)
 *
 * @see http://wiki.nhncorp.com/display/lsuit/nhn.Flash
 */
if (typeof nhn == 'undefined') nhn = {};
 
nhn.Flash = (function() {

	var Flash = {};

	Flash.getCode = function(sURL, sID, nWidth, nHeight, sWmode, sFlashVars, sBgColor) {

		window.title = sID;

		var sClsID = 'clsid:d27cdb6e-ae6d-11cf-96b8-444553540000';
		var sCodeBase = 'http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0';

		sWmode = sWmode || 'transparent';
		sFlashVars = sFlashVars || '';
		sBgColor = sBgColor || '#FFFFFF';

		var sCode = '';

		if (/MSIE/.test(navigator.userAgent)) {

			sCode =
				'<object classid="' + sClsID + '" codebase="' + sCodeBase + '" width="' + nWidth + '" height="' + nHeight + '" id="' + sID + '" align="middle">' +
					'<param name="allowScriptAccess" value="always" />' +
					'<param name="quality" value="high" />' +
					'<param name="movie" value="' + sURL + '" />' +
					'<param name="wmode" value="' + sWmode + '" />' +
					'<param name="bgcolor" value="' + sBgColor + '" />' +
					'<param name="FlashVars" value="' + sFlashVars + '">' +
				'</object>';

		} else {

			sCode =
				'<embed src="' + sURL + '" quality="high" wmode="' + sWmode + '" FlashVars="' + sFlashVars + '" bgcolor="' + sBgColor + '"' +
				' width="' + nWidth + '" height="' + nHeight + '" name="' + sID + '" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />'; 

		}

		return sCode;

	};

	Flash.find = function(sID, oDoc) {
		oDoc = oDoc || document;
		return oDoc[sID] || oDoc.all[sID];
	};

	var bind = function(oElement, sEvent, fpHandler) {
		
		if (typeof oElement.attachEvent != 'undefined')
			oElement.attachEvent('on' + sEvent, fpHandler);
		else
			oElement.addEventListener(sEvent, fpHandler, true);
		
	};

	// for 'Out of memory line at 56' error _add 2007. 6. 12
	var unloadHandler = function() {
		
		obj = document.getElementsByTagName('OBJECT');

		for (var i = 0, theObj; theObj = obj[i]; i++) {

			theObj.style.display = 'none';

			for (var prop in theObj)
				if (typeof(theObj[prop]) == 'function')
					try { theObj[prop] = null; } catch(e) {}

		}
		
	};
	
	bind(window, 'unload', unloadHandler);

	return Flash;

})();
