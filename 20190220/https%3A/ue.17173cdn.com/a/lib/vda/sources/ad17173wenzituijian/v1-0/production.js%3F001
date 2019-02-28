adv.AdBase.extend('Ad17173WenziTuijian', {
  init: function(options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function(data) {
    this.data = data;
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  play: function() {
    var opt = this.options;
		$('.' + opt.advid).show().find('a').attr('href',this.data.link).text(this.data.text);
    /*if(opt.advid == 'ad17173WenziTuijian2'){
      $('.list-fs-sy1 li:eq(6)').remove();
    }*/
    this.emit(adv.ENUM.EVENTS.played);
  }
});