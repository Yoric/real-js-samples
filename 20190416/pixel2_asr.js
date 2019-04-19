/*
 * logicad pixel2_asr.js
 */
(function (window, document, SCRIPT, URL, FUNCTION) {
	var Smn = window.Smn || (window.Smn = {});
	var Logicad = Smn.Logicad || (Smn.Logicad = {});

	/**
	 * @param {Object.<String,*>} parameters 
	 * @param {String} name 
	 * @returns {String}
	 */
	var getParameterAsString = function (parameters, name) {
		var value = parameters[name];
		if ((value == null) || ((value = String(value)) == "")) { return ""; }
		var length = value.length;
		if ((length > 1000) && window.console && console.log) {
			console.log("logicad: " + name + " is too long (" + length + ")");
			return value.substr(0, 1000);
		}
		return value;
	};

	/**
	 * @param {String} name 
	 * @param {*} value 
	 * @returns {String}
	 */
	var makeQueryNext = function (name, value) {
		if (value == null || (value = String(value)) == "") { return ""; }
		return "&" + name + "=" + encodeURIComponent(value);
	};

	/**
	 * @param {Object.<String,*>} parameters
	 */
	var execute = Logicad[FUNCTION] = function (parameters) {
		parameters = Object(parameters);

		var script = document.createElement(SCRIPT);
		script.async = true;
		script.charset = "utf-8";
		script.src = URL + "&advertiser_id=" + getParameterAsString(parameters, "smnAdvertiserId")
			+ makeQueryNext("pgid", getParameterAsString(parameters, "smnProductGroupId"))
			+ makeQueryNext("apid", getParameterAsString(parameters, "smnAdvertiserProductId"))
			+ makeQueryNext("referer", document.referrer);

		var element = document.getElementsByTagName(SCRIPT)[0];
		element.parentNode.insertBefore(script, element)
	};

	var queue = Logicad[FUNCTION + "_queue"];
	if (Object.prototype.toString.call(queue) == "[object Array]") {
		while (queue.length) {
			var args = queue.shift();
			if (!args) continue;
			execute(args[0])
		}
	}
})(window, document, "script", "//px.ladsp.com/pixel?asr=1", "pixel_asr");