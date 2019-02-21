/* Custom Front-End jQuery scripts */
jQuery(document).ready(function($) {

	"use strict";

	/* Nav Menu */
	$(function() {

		$('.menu .sub-links').not($('.sub-menu .sub-links')).wrap('<div class="sub-menu" />');/* Fix for Custom Link only */

        var $main_menu = $('.main-menu');

		$main_menu.find('> ul > li > .sub-menu').each(function (index, element) {
			if ($(element).children().hasClass('sub-posts') && $(element).children().hasClass('sub-links')) {
				$(element).parent().addClass('sub-menu-two-columns menu-item-has-mega-menu');
			} else if ($(element).children().hasClass('sub-posts') && (!$(element).children().hasClass('sub-links'))) {
				$(element).parent().addClass('sub-menu-full-width menu-item-has-mega-menu');
			} else if ($(element).parent().hasClass('columns-menu')) {
				$(element).parent().addClass('sub-menu-columns');
			} else {
				$(element).parent().addClass('sub-links-only');
			}

			if ($(element).children().length) {
				$(element).parent().addClass('link-arrow');
			}
		});

		$('.sub-menu-columns > .sub-menu > .sub-links').each(function (index, element) {
			var count = $(element).children().length;
			$(element).parents('.sub-menu-columns').addClass('sub-menu-columns-'+count);
		});

		$('.sub-menu').each(function (index, element) {
			if ($(element).children().length === 0) {
				$(element).remove();
			}
		});

        $main_menu.find('li:has(ul)')
        .add( $main_menu.find('.sub-links li') )
        .add( $('.secondary-menu li:has(ul)') )
        .doubleTapToGo();

	});


	/* Sticky menu */
	$('.main-menu-fixed').hcSticky({
		offResolutions: [-960],
		stickTo: document,
		wrapperClassName: 'sticky-menu-container'
	});


	/* Mobile Menu */
    $(function() {

        $('#mobile-menu-toggle').click(function(e) {
            e.preventDefault();
            $('body').toggleClass("mobile-menu-open");
        });

        var mobile_menu = $('#pageslide');

        $('.main-menu').children().clone().removeAttr('id').appendTo($(mobile_menu)).wrap('<nav class="block main-menu-mobile" />');
        $('body:not(.hide-strip) .secondary-menu').children().clone().removeAttr('id').appendTo($(mobile_menu)).wrap('<nav class="block secondary-menu-mobile" />');

        $.each($(mobile_menu).find('.menu li').not('.sub-menu-full-width'), function() {
            var children = $(this).find('> .sub-menu').children();
            $(this).find('> .sub-menu').before('<span class="sub-menu-arrow"></span>');
        });

        $(mobile_menu).find('.menu li .sub-menu').prepend('<span class="sub-menu-back"><i class="icomoon-arrow-left"></i></span>');

        var $sub_parent = $(mobile_menu).find('.sub-menu-arrow');
        var $sub_menu = $(mobile_menu).find('.sub-menu');

        $sub_parent.click(function(){
            var $that = $(this);
            var $parent_menu = $that.parents('.menu');
            var $menu_index = $parent_menu.index();
            var $current_item = $that.next('.sub-menu');
            $parent_menu.addClass('sub-level-open');
            $current_item.addClass('sub-menu-open');
        });

        var $sub_back = $('.sub-menu-back');

        $sub_back.click(function(){
            var $that = $(this);
            var $menuIndex = $that.parent().index();
            var $currentItem = $that.parent('.sub-menu');
            var $parent_menu = $that.parents('.menu');
            $currentItem.removeClass('sub-menu-open');
            $parent_menu.removeClass('sub-level-open');
        });

    });

    /* Mobile Search Form */
    $('.top-strip .mobile-search-button').click(function(){
        $('.top-strip').toggleClass("search-form-open");
        $('.top-strip .search-form input').focus();
    });


    /* Sliders */
	$(function() {

        var $slider_arrows = {
			prevArrow:'<a heref="#" class="slider-nav-arrow prev-arrow"></a>',
			nextArrow:'<a heref="#" class="slider-nav-arrow next-arrow"></a>'
        };

        $(function() {
            // Posts slider
            $('.posts-slider').slick(
                $.extend({
                    dots:true,
                    autoplay:true,
                    autoplaySpeed:5000,
                    adaptiveHeight:true
                }, $slider_arrows)
            );

            $('.posts-slider .slick-dots').each(function(){
                var slider_image_count = $(this).children().length;
                $(this).append( '<li class="slider-image-count">' + slider_image_count + '</li>');
            });

        });

		// Widgets slider
		$('.widget-slider').slick(
            $.extend({
                autoplay:true,
                autoplaySpeed:5000,
                adaptiveHeight:true
            }, $slider_arrows)
        );

		// Featured Posts carousel
        $('.featured-carousel').slick(
            $.extend({
                rows:2,
                vertical:true,
                slidesToShow:2,
                slidesToScroll:2,
                infinite:false,
                verticalSwiping:true,
                appendArrows:$('.featured-posts .carousel-navigation'),
                responsive:[
                {
                    breakpoint:750,
                        settings: {
                            vertical:false,
                            slidesToShow:1,
                            slidesToScroll:1,
                            infinite:true,
                            adaptiveHeight:true,
                            verticalSwiping:false
                        }
                    }
                ]
            }, $slider_arrows)
        );


        $(function() {

            var $FullWidthCarousel = $('.full-width-media .gallery-carousel'),
                $AboveContentCarousel = $('.above-content-media .gallery-carousel');

            var $GalleryCaption = $('.gallery-caption');

            // Page Composer and Post Format carousel
            $FullWidthCarousel.slick(
                $.extend({
                    dots:true,
                    centerMode:true,
                    variableWidth:true,
                    responsive: [{
                        breakpoint:750,
                            settings: {
                            centerMode:false,
                            variableWidth:false,
                            adaptiveHeight:true,
                        }
                    }]
                }, $slider_arrows)
            );

            // Gallery Above the Content
            $AboveContentCarousel.slick({
                arrows:false,
                adaptiveHeight:true,
                asNavFor:$GalleryCaption
            });

            // Gallery Caption
            $GalleryCaption.slick(
                $.extend({
                    dots:true,
                    fade:true,
                    adaptiveHeight:true,
                    asNavFor:$AboveContentCarousel
                }, $slider_arrows)
            );

            $([$FullWidthCarousel, $GalleryCaption]).each( function(){
                var $slider_image_count = $(this).find('.slick-dots li').length;
                $(this).find('.slick-dots').append( '<li class="slider-image-count">' + $slider_image_count + '</li>');
            });

        });

		// Related posts
        $('.related-posts').find('.carousel').slick(
            $.extend({
                slidesToShow:3,
                adaptiveHeight:true,
                responsive: [{
                    breakpoint:750,
                        settings: {
                        slidesToShow:1,
                    }
                }]
            }, $slider_arrows)
        );

		// Authors widget
		$(function(){

			var $carousel = $('.widget_ti_site_authors .carousel');
			var n = $carousel.find('.item').length;
			if (n > 10) {

				$carousel.slick(
                    $.extend({
                        rows:2,
                        slidesToShow:5,
                        variableWidth:true,
                    }, $slider_arrows)
				);

                $carousel.addClass('with-arrows');

			}

		});

		// Latest Reviews Slider
        $(function() {

            var $carousel = $('.latest-reviews-carousel');

            $carousel.on('init', function(slick){
                $(this).addClass('carousel-initialized');
            });

            $carousel.slick({
                dots:true,
                arrows:false,
                infinite:false,
                slidesToShow:4,
                slidesToScroll:4,
                adaptiveHeight:true,
                responsive:[{
                    breakpoint:960,
                        settings: {
                            slidesToShow:2,
                            slidesToScroll:2
                        }
                    },{
                    breakpoint:750,
                        settings: {
                            slidesToShow:1,
                            slidesToScroll:1
                        }
                }]
            });

        });

        // Latest By Format Slider
        $(function LatestFormatSlider() {

            var Container = $('.media-posts');

            $(Container).each(function() {

                var Slides = $(this).find('.media-post-slides'),
                    Thumbs = $(this).find('.media-post-thumbs'),
                    Details = $(this).find('.media-post-details'),
                    BgImage = $(this).find('.media-post-bg');

                Slides.on('init', function(slick){
                    $(this).parents().eq(1).addClass('section-init');
                });

                Slides.on('beforeChange', function(event, slick, nextSlide) {
                    $(this).find('.media-content').empty();
                    $(this).find('.entry-image').removeClass('content-loading content-added');
                });

                Slides.slick(
                    $.extend({
                        slidesToShow:1,
                        fade:true,
                        asNavFor:Thumbs.add(Details).add(BgImage),
                        responsive: [{
                            breakpoint:750,
                                settings: {
                                    fade:false,
                                    adaptiveHeight:true
                            }
                        }]
                    }, $slider_arrows)
                );

                Details.slick({
                    slidesToShow:1,
                    fade:true,
                    arrows:false,
                    asNavFor:Slides.add(Thumbs)
                });

                Thumbs.slick({
                    slidesToShow:3,
                    slidesToScroll:1,
                    centerMode:true,
                    centerPadding:0,
                    focusOnSelect:true,
                    dots:true,
                    arrows:false,
                    asNavFor:Slides.add(Details).add(BgImage)
                });

                BgImage.slick({
                    slidesToShow:1,
                    fade:true,
                    arrows:false,
                    asNavFor:Slides.add(Thumbs)
                });

            });

        });

        // Single Rating. Add slider if more than six items were added
        $('.rating-labels').slick(
            $.extend({
                slidesToShow:7,
                responsive:[{
                    breakpoint:960,
                        settings: {
                            slidesToShow:4
                        }
                    }]
            }, $slider_arrows)
        );

	}); // end of sliders


    /* Masonry Layout */
    $(function() {
        var $m_container = $('.ltr .masonry-layout');
        $m_container.imagesLoaded( function() {
            $m_container.masonry({
                itemSelector:'.post-item'
            });
        });
    });

    $(function() { // Right-To-Left direction
        var $m_container = $('.rtl .masonry-layout');
        $m_container.imagesLoaded( function() {
            $m_container.masonry({
                itemSelector:'.post-item',
                isOriginLeft:false
            });
        });
    });


	/* Tabs */
	var tabContainers = $('.tab-box .tab-box-content > div');
	tabContainers.addClass('tab-hidden').filter(':first').addClass('tab-visible');

	$('.tab-box .tab-box-button a').click(function(e) {
        e.preventDefault();
		tabContainers.addClass('tab-hidden').removeClass('tab-visible');
		tabContainers.filter(this.hash).addClass('tab-visible').removeClass('tab-hidden');
		$('.tab-box .tab-box-button a').removeClass('active');
		$(this).addClass('active');
	}).filter(':first').click();


	/* WordPress Editor Gallery */
	if ( $().imgLiquid ){
		$('.custom-gallery').find('.gallery-item').imgLiquid({
			fill:true
		});
	}


	/* Sticky sidebar */
    function stickySidebar() {
        $('.sidebar-fixed').hcSticky({
            top:70,
            bottomEnd:0,
            offResolutions:[-1024],
            wrapperClassName:'sticky-bar-container'
        });
    }

    if ($(window).width() > 1024) {
       stickySidebar();
    }


	/* Force equal height in Grid layout */
    $('.grid-layout:not(".details-hover")').each(function() {
        $(this).find('.entry-header').responsiveEqualHeightGrid();
    });


	/* Show an animation when images are loaded */
	$('.entry-image').on('inview', function(event, isInView) {
		if (isInView) {
			$(this).addClass('inview');
		}
	});


	/* Show bottom single post slide dock */
	if ($('.slide-dock').length) {

		var $random_post = $('.slide-dock');
		$('#footer').on('inview', function(event, isInView) {
			if (isInView) {
				$random_post.addClass('slide-dock-on');
			} else {
				$random_post.removeClass('slide-dock-on');
			}
		});

		$('.close-dock').click(function(e){
			e.preventDefault();
			$('.slide-dock').toggleClass('slide-dock-on slide-dock-off');
		});

	}

	/* Sitemap toggle */
	$('.sitemap .row .trigger').click(function(e){
		e.preventDefault();
		$(this).toggleClass('active').next().slideToggle('fast');
	});


	 /* LightBox */
	if ( $().swipebox ){
		$('.custom-gallery .gallery-item a').swipebox({
			hideBarsDelay:0
		});

        $('.entry-content a[href$="jpg"],.entry-content a[href$="jpeg"],.entry-content a[href$="png"],.entry-content a[href$="gif"]').swipebox({
			hideBarsDelay:0
		});
	}


	/* Fluid Width Video */
	if ( $().fitVids ){
		$('.video-wrapper, .entry-content, .page-content, .advertising').fitVids({ignore:'[src*="youtube.com/subscribe_widget"]'});
	}


    /* Social icons */
    $('.share-more').click(function(){
        $(this).toggleClass('share-more-opened');
    });


    /* Scroll to comments form */
	$('[href^="#comments"]').click(function(e){
        e.preventDefault();
		$('html, body').animate({scrollTop: $("#comments").offset().top}, 700);
	});

	/* Back to Top link */
	$('.back-top').click(function(e){
        e.preventDefault();
		$('html, body').animate({scrollTop:0}, 'fast');
	});

});// - document ready