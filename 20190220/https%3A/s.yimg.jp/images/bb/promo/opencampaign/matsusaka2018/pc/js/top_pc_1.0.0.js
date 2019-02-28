/* スムーススクロール */
//[アンカーリンク]をスムーズに移動するイベント
$(function(){
  $('a[href^=#]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    /* aosでfade-upを指定している場合にpositionに補正をかける */
    if(target.attr('data-aos')  == 'fade-up'){
      /* fade-upのoffsetとして想定される値の分をマイナス */
      position = position - 100;
    }
    $("html, body").animate({scrollTop:position}, speed, "swing");
    $('body').addClass('isAnimated'); //他アニメーション制御用
    return false;
  });
});

/* フロートボタン */
//[.js__float]を出現させるスクロールイベント
$(function(){
  $(window).scroll(function(){
    //最上部から現在位置までの距離を取得して、変数[now]に格納
    var now = $(window).scrollTop();
    //最下部から現在位置までの距離を計算して、変数[under]に格納
    var under = $('body').height() - (now + $(window).height());

    // クリックスクロール時には表示させない
    if($('body').hasClass('isAnimated')){

      setTimeout(function(){
        $('body').removeClass('isAnimated');
      }, 500);

    } else {
      //最上部から現在位置までの距離(now)が650以上かつ
      //最下部から現在位置までの距離(under)が200px以上だったら
      if(now > 650 && under > 200 ){
        //[#page-top]をゆっくりフェードインする
        $('.js__float').fadeIn('slow');
        //それ以外だったらフェードアウトする
      }else{
        $('.js__float').fadeOut('slow');
      }
    }
  });
});

/* スライダー */
//[.js__bxslider]をスライドさせるイベント・jquery.bxsliderを利用
$(function(){
  $('.js__bxslider').bxSlider({
    mode: 'fade',
    captions: false,
    responsive: true,
    controls: false,
    pager: false,
    auto: true,
    infiniteLoop: false,
    preventDefaultSwipeY:false,
    autoHover: false,
    touchEnabled: false,
    stopAutoOnClick: true,
    oneToOneTouch:false,
    preventDefaultSwipeX:false,
    preventDefaultSwipeY:false
  });
});

/* アニメーション */
//[data-aos]が指定された箇所にアニメーションを付与するイベント・aosを利用
$(function(){
  var ua = navigator.userAgent;
  if (ua.indexOf("Android 4.") > 0) {
    //android4では動作を止める
    AOS.init({
      disable: 'mobile'
    });
  }else{
    //android4以外は動く
  AOS.init({
    offset: 200,
    duration: 1000,
    });
  }
});