/**
 * URLEncoder
 *
 * @author nagoon97
 * @version 1.0.0
 */
var URLEncoder = new function URLEncoder(){
	var URLEncodingMap = {};
	var base64Digit = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

	function init(){
		for(var encName in sURLEncodingMap){
			if(typeof(sURLEncodingMap[encName]) != "string") continue;
			var sObjectized = objectizeString(sURLEncodingMap[encName]);
			URLEncodingMap[encName] = eval("("+sObjectized+")");
		}
	}

	// insert single quotation marks and colons to the string so that it'll be in the form of an object literal
	// {A123,B234,C345} -> {A:'123',B:'234',C:'345'}
	function objectizeString(str){
		// , -> ',
		str = str.replace(/([^}]),/g, "$1',");
		// } -> '}
		str = str.replace(/([^}])}/g, "$1'}");

		// {A -> {A:'
		str = str.replace(/(\{[0-9A-F])([^:])/g, "$1:'$2");
		// ,A -> ,A:'
		str = str.replace(/([^}],[0-9A-F])/g, "$1:'");

		return str;
	}

	function base64toPercentEncodedHEX(sBase64){
		if(!sBase64 || sBase64.length<2) return sBase64;

		var eachDigit = sBase64.split("");

		var intValue = 0;

		for(var i=0; i<eachDigit.length; i++){
			intValue *= 64;
			intValue += base64Digit.indexOf(eachDigit[i]);
		}

		var sHEX = intValue.toString(16).toUpperCase();
		var result = "";

		if (sHEX.length % 2 == 1) {
			sHEX = "0" + sHEX; // 0 padding
		}
		
		for(var i=0; i<sHEX.length; i++){
			if(i%2 == 0) result += '%';
			result += sHEX.charAt(i);
		}

		return result;
	}

	this.encode = function encode(str, encName){
		var result = "", unicode = "", codeInBase64 = null;

		for(var i=0; i<str.length; i++){
			unicode = str.charCodeAt(i).toString(16).toUpperCase();

			for(var ii=unicode.length; ii<4; ii++) unicode = "0"+unicode;
			unicode = unicode.split("");

			try {
				codeInBase64 = URLEncodingMap[encName][unicode[0]][unicode[1]][unicode[2]][unicode[3]];
				if(!codeInBase64) codeInBase64 = "A/";
			} catch (e) {
				codeInBase64 = "A/";
			}

			result += base64toPercentEncodedHEX(codeInBase64);
		}

		return result;
	}

	init();
};
