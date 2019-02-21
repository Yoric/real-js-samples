adv.AdBase.extend('Ad17173ZhuanquHotLink', {
  init: function(options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function(data) {
    this.data = data;
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  _setGame:function(game){
    var link,
    	advEl = $('.' +  this.options.advid);
    advEl.find('a').each(function(i,n){
      if($.trim($(n).text()) == game.name){
        link = $(n);
      }
    });
    if(link){
      if(~navigator.userAgent.indexOf('iPad')){
        var clone = link[0].cloneNode(true);
        link[0].parentNode.replaceChild(clone, link[0]);
        link = $(clone);
      }
      link.text(game.name).addClass('tg-bg-red').removeClass('link-sameip');
      /*var toolTip = $('<div style="display: none;position:absolute;width:120px;z-index:1000;padding: 0 5px;text-align: center;border: 1px solid #828282;background-color: #fff899;">'+game.desc+'</div>');*/
      var toolTip = $(adv.razor('<div class="tg-links-tip">@desc</div>',game));
      var offset = link.offset();
      $(document.body).append(toolTip);
      game.ipaCode && adv.util.sendIpa(link,game.ipaCode);
      $('.tip-game-info[data-ui-game="'+game.name+'"]').remove();
      link.hover(function(){
        toolTip.show();
      },function(){
        toolTip.hide();
      }).mousemove(function(e){
        toolTip.css({
          left:e.pageX - 50,
          top:e.pageY + 20
        });
      });
    }
  },
  play: function() {
    var opt = this.options;
    var games = this.data.games,game;
    while(games.length)this._setGame(games.shift());
    this.emit(adv.ENUM.EVENTS.played);
  }
});