;(function (root, factory) {
	if (typeof define === 'function' && define.amd) {   // jshint ignore:line
		// AMD
		define([                                            // jshint ignore:line
			'jquery'
		], factory);
	} else {
		// Browser globals
		root.skp11 = root.skp11 || {};
		root.skp11.product = root.skp11.product || {};
		root.skp11.product.ShowMore = factory(
			root.jQuery
		);
	}
}(this, function ($) {
	'use strict';
	var ShowMore;

	ShowMore = function () {
		this.content = $('.review_list');
		this.btn = '.btn_bbs_open, .btn_bbs_close';
		this.text = '.bbs_summary';
		this.textLimitHeight = 40;
	};

	ShowMore.prototype.init = function () {
		var _this = this;
//16-10-14 더보기가 없을 경우 A 태그가 span 태그 처리 START
		_this.content.find(_this.text).each(function () {
			var $this = $(this),
				isSeller = $this.find('.seller_txt').size() > 0,
				isTextOver = $this.find('.summ_conts').height() > _this.textLimitHeight,
				isPicture = $this.parent().siblings('.bbs_img').size() > 0,
				$buyer = $this.find('.summ_conts'),
				buyerText = $buyer.children().last().html();        //16-10-19 MPQA-4053 수정
				//buyerText = $buyer.children().html();             //16-10-19 MPQA-4053 수정

			if(isPicture) return;

			//var $a = '<a href="#">'+(buyerText)+'</a>',         //16-10-19 MPQA-4053 수정
			var $a = buyerText,                                     //16-10-19 MPQA-4053 수정
				$span = '<span class="summ_txt">'+(buyerText)+'</span>',
				$buyer = $buyer.children().last().empty();          //16-10-19 MPQA-4053 수정
				//$buyer = $buyer.empty();                           //16-10-19 MPQA-4053 수정

			if(isSeller || isTextOver){
				$buyer.append($a);
				$this.closest('li').find('.prdc_more').show();
				$buyer.on('click', function (e) {        //16-10-19 MPQA-4053 수정
				//$buyer.on('click', 'a', function (e) {        //16-10-19 MPQA-4053 수정
					e.preventDefault();
					$(this).closest('li').find(_this.btn).trigger('click');
				});
			}else{
				//$buyer.append($span);                             //16-10-19 MPQA-4053 수정
				$buyer.replaceWith($span);                          //16-10-19 MPQA-4053 수정
			}
		});
//16-10-14 더보기가 없을 경우 A 태그가 span 태그 처리 START
		_this.eventBind();
	};

	ShowMore.prototype.eventBind = function () {
		var _this = this;

		_this.content.on('click', _this.btn, function () {
			$(this).toggleClass('btn_bbs_close').toggleClass('btn_bbs_open');
			$(_this.text, $(this).closest('li')).toggleClass('bbs_auto');
			_this.resize();
		});
	};	
	
	ShowMore.prototype.resize = function () {
		var me = this;
		
		if (parent.document.getElementById("ifrmReview") == null) {
			return;
		}
		try {
			var thisFrame = parent.document.getElementById("ifrmReview");
			var userAgent = navigator.userAgent;

			thisFrame.style.height = "0px";

			if (userAgent.indexOf("MSIE") != -1 || userAgent.indexOf("Firefox") != -1) {
				thisFrame.style.height = (document.body.scrollHeight + 36) + "px";
			} else {
				thisFrame.style.height = (document.documentElement.scrollHeight + 36) + "px";
			}
		} catch (ex) {}

		if(me.preView == 'true') {
			$("#ifrmReview", parent.document).width(800);
		}	
		
		parent.callEventFromIfram('layoutUpdate');
	};

	return ShowMore;
}));