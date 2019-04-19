(function() {
	"use strict";
	var doc = window.document;

	function findScriptNode() {
		var scripts,
			result = doc.currentScript;
		if (!result) {
			scripts = doc.getElementsByTagName('script');
			result = scripts[scripts.length - 1];
		}
		return result;
	}

	function createImage() {
		var SIZE = '300x250';
		var widthHeight = SIZE.split('x');
		var result = doc.createElement('img');
		result.src = 'https://static.adsafeprotected.com/passback_' + SIZE + '.png';
		result.width = widthHeight[0];
		result.height = widthHeight[1];
		return result;
	}

	function findClickMacro(thisScriptNode) {
		var result, parsed;
		var rjssScript = thisScriptNode.previousSibling;

		// TODO: there's probably a more elegant way to write this
		while (rjssScript) {
			if (rjssScript.src && typeof rjssScript.src === 'string') {
				parsed = /ias_pb_click=([^&]+)/.exec(rjssScript.src);
				if (parsed && parsed[1]) {
					result = parsed[1];
					break;
				} else {
					rjssScript = rjssScript.previousSibling; // set to null when we run out of nodes
				}
			} else {
				rjssScript = rjssScript.previousSibling; // set to null when we run out of nodes
			}
		}

		return result;
	}

	function createAnchor(thisScriptNode) {
		var clickMacro = findClickMacro(thisScriptNode);
		var macroIsExpanded = typeof clickMacro === 'string' && clickMacro.indexOf('http') === 0;
		var IAS_LANDING_PAGE = 'https://integralads.com/capabilities/brand-safety/?utm_campaign=GLB-g&utm_medium=gdisplay&utm_source=gsites';
		var result = doc.createElement('a');
		result.href = (clickMacro && macroIsExpanded) ? decodeURIComponent(clickMacro) + encodeURIComponent(IAS_LANDING_PAGE) : IAS_LANDING_PAGE;
		result.target = '_blank';
		return result;
	}

	function appendTag(thisScriptNode) {
		var img = createImage();
		var a = createAnchor(thisScriptNode);
		a.appendChild(img);
		thisScriptNode.parentNode.insertBefore(a, thisScriptNode);
	}

	function sendDiag(e) {
		try {
			var img = new Image();
			img.src = 'https://pixel.adsafeprotected.com/jsdiagnostic' +
				'?code:housead' +
				'&err:' + encodeURIComponent(e.message);
		} catch(err) {}
	}

	try {
		appendTag(findScriptNode());
	} catch(e) {
		sendDiag(e);
	}

})();