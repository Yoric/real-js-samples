(function () {
	var olProjectId = '274';
	//var olEntryPoint = '10';
	var olEntryPointStr = (typeof olEntryPoint != 'undefined') ? '&_1larg_ep=' + olEntryPoint : '';
	var olScript = document.createElement('script');
	olScript.type = 'text/javascript';
	olScript.async = true;
	olScript.src = '//wf.mail.ru/1l/v1/hit/' + olProjectId + '.js?r=' + encodeURIComponent(document.referrer) + olEntryPointStr + '&rnd=' + Math.random();
	var firstScript = document.getElementsByTagName('script')[0];
	firstScript.parentNode.insertBefore(olScript, firstScript);
})();
