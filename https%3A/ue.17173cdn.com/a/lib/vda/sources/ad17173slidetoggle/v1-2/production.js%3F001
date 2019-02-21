adv.AdBase.extend('Ad17173SlideToggle', {
  init: function(options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function(data) {
    this.html = $('.' + this.options.advid);
    this.wrap = this.html.find('ul');
    this.items = this.html.find('.item');
    this._setupSources(data);
    this._setupAni();
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  _setupSources:function(data){
    this.items.css('height',130).each(function(i,n){
      var $n = $(n),source = data.sources[i];
      $n.data('index',i).css('width',280).find('a').attr('href',source.link);
      $n.find('.c1 img').attr('src',source.smallImg);
      $n.find('.c1 .txt').text(source.title);
      if(~source.bigImg.indexOf('.swf')){
        $n.find('.c2').text('').append(
          adv.flash.embed({
            source: source.bigImg,
            width: 820,
            height: 130
          })
        );
      }
      else{
        $n.find('.c2 img').css('width',820).css('height',130).attr('src',source.bigImg);
      }
      adv.util.sendIpa($n,source.ipaCode);
    });
  },
  _setupAni:function(){
    var aniTime = 700,me= this;
    this.items.hover(function () {
      var innerWrap = $(this);
      var targetMarginLeft = innerWrap.data('index') * 280;
      innerWrap.stop().animate({width:1100}, aniTime);
      innerWrap.find('.c2').stop().animate( { width: 820 }, aniTime);
      me.wrap.stop().animate({
        'margin-left': -targetMarginLeft
      }, aniTime);
    },function(){
      var innerWrap = $(this);
      me.wrap.stop().animate({'margin-left': 0}, aniTime);
      innerWrap.find('.c2').stop().animate({ width: 0 }, aniTime);
    	innerWrap.stop().animate({width:280}, aniTime);
    });
  },
  play: function() {
    this.html.show();
    this.emit(adv.ENUM.EVENTS.played);
  }
});