/*
top.js
Copyright (C) 2017 Passrevo Corporation. All Rights Reserved.
Copyright (C) 2017 Yahoo Japan Corporation. All Rights Reserved.
*/

(function($){
  $(window).on('load',function(){
    var pickupLength = $('.swiper-slide').length;
    if(pickupLength > 1){
      $('#pickupSlide').addClass('pickupSlide_active');
      var $swiperBtn = $('[class^="swiper-button"]');
      $swiperBtn.css('visibility','visible');
      var pickupSlide = new Swiper('.swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 0,
        loop: true,
        speed: 1000,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 4000
      });
    }
  });
})(jQuery);