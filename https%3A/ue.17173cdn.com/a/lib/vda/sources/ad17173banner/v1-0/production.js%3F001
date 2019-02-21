adv.AdBase.extend('Ad17173Banner', {
  init: function(options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function(data) {
    if(data.source){
      this.html = adv.razor('<a href="@link" target="_blank"><img src="@source" alt="" width="@width" height="@height" /></a>',data);
    }
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  play: function() {
    if(this.html){
      $('.' + this.options.advid).text('').append(this.html).show();
      this.emit(adv.ENUM.EVENTS.played);
    }
  }
});