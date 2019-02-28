require.config({
	baseUrl: '/js'
	,paths: {
		'jquery': 'lib/jquery/jquery-1.12.4.min',
        'lazyload': 'lib/jquery/jquery.lazyload',
        'jquery.resizeImg': 'lib/jquery.resizeImg',
        'handlebars': 'lib/handlebars/handlebars-v4.0.5',
        'template': 'service/common/modules/ui.template',
        'tooltip': 'service/common/modules/ui.tooltip',
        'toolLike': 'service/common/modules/ui.toolLike',
        'imgHover': 'service/common/modules/ui.imgHover',
        'slider': 'service/common/modules/slider',
        'alike': 'service/common/modules/ui.alike',
        'plusProduct': 'service/common/modules/plusProduct',
        'text':	'lib/require/text.min'
    },

	shim: {
		'lazyload': {
			deps: ['jquery'] // lazyload�� �ε�Ǳ� ���� jquery�� �ε�Ǿ�� �Ѵ�.
		}
	}

	,waitSeconds: 0 // ����� �ε� �ð��� �����Ѵ�. (0:disable)

});