/*
 * javascriptLoader.js 2016-08-24
 */
var JavaScriptLoader = {
	load : function(src, callback) {
		var loaded;
		var script = document.createElement('script');
		script.setAttribute('type', 'text/javascript');
		script.setAttribute('src', src);

		if(callback){
			script.onreadystatechange = script.onload = function() {
				if(!loaded){
					callback();
				}
				loaded = true;
			};
		}

		document.getElementsByTagName('head')[0].appendChild(script);
	}
};