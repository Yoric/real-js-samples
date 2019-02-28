/*
* Created by yangyin on 2016/10/27.
* */

/* 头部js控制 开始
$(function(){
   var headerPositionFn=(function($){
     //console.log($(document.body).media());
     var winW=parseInt($(window).width());
     $(window).scroll(function(){
       if(winW > 640){
         if($(document).scrollTop() >= 41){
           $('.bss_headerBox').css({'position':'fixed'}).stop().transition({boxShadow:'-1px 2px 3px rgba(228,232,233,1)'},100,"linear");
           $('.csdn-toolbar').hide();
         }else{
           $('.bss_headerBox').css({'position':'relative','boxShadow':'-1px 2px 3px rgba(228,232,233,1)'});
           $('.csdn-toolbar').show();
         }
       }else{
         if($(document).scrollTop() >= 410){
           $('.bss_headerBox').css({'position':'relative'}).stop().transition({boxShadow:'-1px 2px 3px rgba(228,232,233,1)'},100,"linear");
         }else{
         $('.bss_headerBox').css({'position':'fixed'}).stop().transition({boxShadow:'-1px 2px 3px rgba(228,232,233,0)'},100,"linear");
         }
       }
     });
   })(jQuery);
*/
  // 头部下拉效果
  var headerTopFn = (function(mod){
    var navIcon = $('.navIcon'),
      bss_NavMobile=$('.bss_NavMobile'),
      headerCover = $('.bss_headerCover');
    navIcon.on('singleTap',function(){
      bss_NavMobile.toggle();
      headerCover.toggle();
    });
    headerCover.on('singleTap',function(){
      $(this).hide();
      bss_NavMobile.hide();
    });
    return mod;
  })(window.headerTopFn || {});
});


