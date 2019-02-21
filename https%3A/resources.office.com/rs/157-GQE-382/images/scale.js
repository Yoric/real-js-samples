var $JQ = jQuery.noConflict();

$JQ(document).ready(function($JQ) {
	var scaleBody = function(){
		var html = $JQ('html');
		var body = $JQ('body');
		var windowWidth = html[0].getBoundingClientRect().width;
		if(windowWidth > 1920){
			var scale = windowWidth / 1920;
			//current height * (scale - 1) / scale will give the amount of extra padding needed at the bottom of the body for scrolling.
			var bodyPadding = html.height() * (scale - 1) / scale;
			body.css({
				"transform" : "scale(" + scale + ")",
				"paddingBottom" : bodyPadding + "px"
			});
		}else{
			//If resizing from a higher resolution, remove CSS attributes.
			body.css({
				"transform" : "",
				"paddingBottom" : ""
			});
		}
	};

	scaleBody();
	$JQ(window).resize(scaleBody);
});