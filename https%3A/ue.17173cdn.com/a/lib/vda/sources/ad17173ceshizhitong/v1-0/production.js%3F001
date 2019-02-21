adv.AdBase.extend('Ad17173CeShiZhiTong', {
  init: function(options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function() {
    var self = this,
        opt = this.options;
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  play: function() {
    var games = this.options.games,game;
    var advEl = $('.' + this.options.advid);
    while(games.length){
      game = games.shift();
      advEl.find('a').each(function(i,n){
        if($.trim($(n).text()) == game.name){
          $(n).after('\r\n<a href="'+game.link+'" target="_blank" class="ad-csb-live"><img src="http://ue2.17173cdn.com/a/www/index/2015/img/ico-ad-live.png" alt="" width="26" height="16" /></a>');
          return;
        }
      });
    }
    this.emit(adv.ENUM.EVENTS.played);
  }
});