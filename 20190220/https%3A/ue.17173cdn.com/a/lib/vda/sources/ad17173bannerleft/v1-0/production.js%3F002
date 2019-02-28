adv.AdBase.extend('Ad17173BannerLeft', {
  init: function(options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function(data) {
    data = data || this.options;
    this.data = data;
    if (!!this.data.image) {
      //dom
      var tmpl = function() {/*@preserve
        <div class="tg-bevel-bg tg-bevel-bg-l" style="background:url(@image) no-repeat;">
          <div class="c1">
            <div class="tip"@if(textBgColor){ style="background: @textBgColor;"}>@text</div>
            <div class="arr"@if(textBgColor){ style="border-left-color: @textBgColor;"}></div>
            @if(go){
            <i class="go"></i>
            }
          </div>
        </div>
        <a class="tg-bevel-link-l" href="@link" target="_blank">
          <div class="tg-rectangle"></div>
          <div class="tg-parallelogram"></div>
        </a>
      */};
      this.data.advid = this.options.advid;
      this.data.html = adv.razor(tmpl, this.data);
      this.emit(adv.ENUM.EVENTS.setuped);
    }
  },
  play: function() {
    var advEl = $('.'+this.data.advid);
    if (this._supportBleve()) {
      $('.'+this.data.advid).addClass('tg-bevel');
    } else {
      $('.'+this.data.advid).addClass('tg-nobevel');
    }
    advEl.prepend(this.data.html).parent('.pn-tg').show();
    if(this.options.adskey){ 
      adv.util.sendIpa(advEl.find('.tg-bevel-bg-l'),this.options.adskey,true);
      adv.util.sendIpa(advEl.find('.tg-bevel-link-l'),this.options.adskey,false);
    }
    this.emit(adv.ENUM.EVENTS.played);
  },
  _supportBleve: function() {
    var isSupport = false; 
        body = document.body || document.documentElement,
        style = body.style,
        vendor = ['webkit', 'khtml', 'moz', 'ms', 'o'];
    for (var i = 0; i < vendor.length; i++) {
      if (typeof style[vendor[i] + 'TransformOriginX'] === 'string' && typeof style[vendor[i] + 'MaskImage'] === 'string') {
        isSupport = true;
      }
    }
    return isSupport;
  }
});