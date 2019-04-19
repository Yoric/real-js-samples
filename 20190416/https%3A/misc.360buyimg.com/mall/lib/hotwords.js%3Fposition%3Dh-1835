(function (window, $, undefined) {
	var scriptURL = $('script').filter(function () {
		return $(this).attr('src') && $(this).attr('src').match('//misc.360buyimg.com/mall/lib/hotwords.js')
	}).attr('src');
	var matchResult = scriptURL.match(/\bposition=([ho]-\d+)\b/);

	if (matchResult) {
		$.ajax({
			dataType: 'jsonp',
			scriptCharset: 'utf-8',
			timeout: 6000,
			url: '//cds.3.cn/get_jimdb_key/get?key=hotword&argv=' + matchResult[1],
			success: function (response) {
				if (response.length == 0) {
					return;
				}
				var firstEntry = response.shift();
				var defaultWord = $.trim(firstEntry.name);
				var html = $.map(response, function (entry) {
					if ($.trim(entry.name).length > 0 && $.trim(entry.url_info).length > 0) {
						return '<a data-id="' + entry.id + '" data-position-id="' + entry.order + '" href="' + $.trim(entry.url_info) + '" target="_blank"' + (entry.checked == "1" ? ' class="highlight">' : '>') + $.trim(entry.name) + '</a>'
					}
				}).join('');
				$('#hotwords').html(html).delegate('a', 'click', function () {
					var $this = $(this);
					window.log && window.log('hotWord', 'cmsPortal', 'hotWord_' + $this.data('id'), $this.text(), $this.data('positionId'));
				});

				$("#key").val(defaultWord).bind("focus",function(){
					if (this.value==defaultWord){this.value="";}
					$(this).removeClass('blurcolor').addClass('defcolor')
				}).bind("blur",function(){
					if (this.value==""){this.value=defaultWord;}
					$(this).removeClass('defcolor').addClass('blurcolor');
				});
			}
		})
	}
})(window, $)