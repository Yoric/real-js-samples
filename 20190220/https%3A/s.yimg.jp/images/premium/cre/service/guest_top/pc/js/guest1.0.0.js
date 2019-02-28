//btn fixed
$(function() {

  var nav    = $('#fixedBox'),
      offset = nav.offset();

  if($("#fixedBox").length){
    $(window).scroll(function () {
      if($(window).scrollTop() > offset.top) {
        nav.addClass('fixed');
      } else {
        nav.removeClass('fixed');
      }
    });
  };
});

