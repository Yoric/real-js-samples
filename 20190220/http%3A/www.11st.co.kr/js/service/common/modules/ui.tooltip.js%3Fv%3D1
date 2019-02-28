;(function (root, factory) {
	'use strict';
	if (typeof define === 'function' && define.amd) {   // jshint ignore:line
		// AMD
		define([                                            // jshint ignore:line
			'jquery'
		], factory);
	} else {
		root.skp11 = root.skp11 || {};
		root.skp11.common = root.skp11.common || {};
		root.skp11.common.ToolTip = factory(
			root.jQuery
		);
	}
}(this, function ($) {
	'use strict';
	var ToolTip;

	ToolTip = function () {
		this.$win = $(window);
		this.$doc = $(document);
	};

	ToolTip.prototype.init = function () {
		this.eventBind();
	};

	ToolTip.prototype.eventBind = function () {
		var _this = this;
		
		_this.$doc.on('infoContentClose', function () {
			var tgtUiCont = $('.ui_info_content:not(.me_discount_wrap)');

			tgtUiCont.each(function(){
				var $this = $(this);
				$this.hide();

				_this.zIndex($this, false);         //16-10-18 zIndex 토글 수정
				if($this.prev().is('.ui_info_button')){
					$this.prev().removeClass('dn').addClass('up');
				}else{
					$this.prev().find('.ui_info_button').removeClass('dn').addClass('up');
				}
			});

		});

		_this.$doc.off('click', '.ui_info_button').on('click', '.ui_info_button', function (e) {
			e.preventDefault();
			var $this = $(this),
				$spanTxt = $this.find('span.txt'),
				isToggle = false, $target;

			if ($spanTxt.html() === '전체보기' || $spanTxt.html() === '접기') {
				isToggle = true;
			}

			if ($this.next().length) {
				$target = $this.next();
			} else {
				$target = $this.parent().next();
			}

			if (!$target.is(':visible')) {
				_this.$doc.trigger('infoContentClose');
				_this.$win.trigger('optionLayerClose');
			}

			$target.toggle();
			_this.zIndex($target, $target.is(':visible'));

			if ($this.is('.up')) {
				$this.removeClass('up').addClass('dn'); 
				if (isToggle) {
					$spanTxt.html('접기');
				}
			} else if ($this.is('.dn')) {
				$this.removeClass('dn').addClass('up');
				if (isToggle) {
					$spanTxt.html('전체보기');
				}
			}
		}).on('click', '.ui_info_close', function () {
			var $this = $(this);

			$this.closest('.ui_info_content')
				.hide()
					.prev()
						.focus();
			_this.zIndex($this.closest('.ui_info_content'), false);         //16-10-18 zIndex 토글 기능 수정
			_this.$doc.trigger('infoContentClose');
			_this.$win.trigger('optionLayerClose');

		}).on('click mouseenter mouseleave focusin focusout', '.ui_tooltip', function (e) {
			e.preventDefault();
			var $this = $(this), $target;

			if ($this.next().length) {
				$target = $this.next();
			} else {
				$target = $this.parent().next();
			}

			switch (e.type) {
				case 'click' :
					_this.zIndex($target, !$target.is(':visible'));
					$target.toggle();
					break;
				case 'mouseenter' :
				case 'focusin' :
					_this.zIndex($target, true);
					$target.show();
					break;
				case 'mouseleave' :
				case 'focusout' :
					_this.zIndex($target, false);
					$target.hide();
					break;
			}
		});
	};

	ToolTip.prototype.zIndex = function ($el, isOpen) {
		if (isOpen) {
			// 레이어가 보일때 부모요소들의 zIndex를 같이 올려줌
			$el.parentsUntil('body').filter(function () {
				return $(this).css('position') === 'relative';
			}).addClass('zindex');
		} else {
			// 레이어가 닫힐때 부모요소들의 zIndex를 원래대로 돌림
			$el.parentsUntil('body').filter(function () {
				return $(this).css('position') === 'relative';
			}).removeClass('zindex');
		}
	};

	return ToolTip;
}));
