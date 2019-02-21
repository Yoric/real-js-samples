
var player_styles = '\
\
#video_player {\
	width: 1px;\
	height: 1px;\
	position: absolute;\
	top: 0px;\
	left: 0px;\
	z-index: 1000;\
	}\
\
#player_overlay {\
	width: 100%;\
	height: 100%;\
	display: none;\
	position: fixed;\
	top: 0px;\
	left: 0px;\
	background: rgba(4, 8, 12, 0.9);\
	z-index: 1000;\
	}\
\
#player_content {\
	width: auto;\
	height: auto;\
	display: none;\
	position: fixed;\
	top: 50%;\
	left: 50%;\
	border-radius: 0px;\
	-webkit-transform: translate(-50%, -50%);\
	transform: translate(-50%, -50%);\
	z-index: 1001;\
	}\
\
#player_close {\
	width: 10vh;\
	height: 10vh;\
	display: none;\
	position: fixed;\
	top: 0px;\
	right: 0px;\
	background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTU5NDA5ODY0QjE4MTFFNUFBQ0FCMTQyNTZGNzEyRDEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTU5NDA5ODc0QjE4MTFFNUFBQ0FCMTQyNTZGNzEyRDEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5NTk0MDk4NDRCMTgxMUU1QUFDQUIxNDI1NkY3MTJEMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5NTk0MDk4NTRCMTgxMUU1QUFDQUIxNDI1NkY3MTJEMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiTdSrEAAAF+SURBVHjapJZNSwMxEIZDL4KCV1Gq1t2utSqioj9XbG9+/BXxJJRSEA8qKrq6/bBUxfgGJhji5GPrwHNJJu/MTjLJCimlIM7ABNSNsbI0wTc412N6oiV/7Q2kU4hvgIGh09YBTuRfK0p+icp8yOicqskbyVsfNCLEN8HIoXGtHNYpY87Uwi2P+A4YO9aqUmfaUZXj1eE4JiFbfJcOBWc5WDM3WdBA7lgwIUHtuw8+HL7PYNU+RZoaeHEs/ASLxJfD5wksm5pcXVcoC85uCc4eQdXWc21elRbE2j19mYgNoFgCDxHid2DBpRM64xXQ8YhfhfqkIvw2C2YC8/NeBU/0lJolZKrjs7IlihUP3l2ceOLp6i7huhrSUIDEk7nKco4oYoPEXhWFVed6IEhiB6h5xF2bmHmC5KQpQuLDwJsQDKKcep63oBnx4DSsp9K0nmq0S6Y93sEh6IiwdcEBGDBzFzqL4yky58rVN3SO7FPUpprv/eO3ZZv2pKXHfgQYANgdLu4BU/uzAAAAAElFTkSuQmCC");\
	background-position: center center;\
	background-repeat: no-repeat;\
	opacity: 0.7;\
	z-index: 1002;\
	cursor: pointer;\
	}\
#player_close:hover {\
	opacity: 1;\
	}\
';

$(document).ready(function(){
	
	var player_container = '\
	<div id="video_player">\
		<div id="player_overlay"></div>\
		<div id="player_content"></div>\
		<div id="player_close"></div>\
		<style>'+ player_styles +'</style>\
	</div>\
	';
	
	$('body').append(player_container);
});

$(document).keyup(function(event){
	if (event.keyCode == 27) {
		if ($('#player_overlay').is(':visible'))
			$('#player_overlay').click();
	}
});

function reset_win_size() {
	var video_size = 0.8,
		win_width = $('#player_overlay').width(),
		win_height = $('#player_overlay').height(),
		cur_height = 0,
		cur_width = 0;
	
	if (win_width < 960) video_size = 1;
	
	if (win_height / 9 > win_width / 16) {
		cur_width = win_width * video_size;
		cur_height = Math.ceil((cur_width / 16) * 9);
	}
	else {
		cur_height = win_height * video_size;
		cur_width = Math.ceil((cur_height / 9) * 16);
	}
	
	cur_width += 'px';
	cur_height += 'px';
	
	$('#player_content').css('width', cur_width).css('height', cur_height);
}

$(window).on('resize',function() {
	reset_win_size();
});

$(document).on('click', '#player_overlay', function(){
	$(this).fadeOut(100);
	$('#player_content, #player_close').fadeOut(100);
	$('#player_content').empty();
});

$(document).on('click', '#player_close', function(){
	$('#player_overlay').click();
});

$(document).on('click', '[data-video]', function(){
	$('#player_overlay, #player_content, #player_close').fadeIn(100);
	reset_win_size();
	$('#player_content').html('<iframe width="100%" height="100%" frameborder="0" allowfullscreen="" src="'+$(this).data('video')+'?rel=0&autoplay=0"></iframe>');
});