(function (adv) {
  'use strict';

  var defaultConfig = {
    randomPos: true,
    randomType: adv.ENUM.RANDOMS.firstTime
  };
  adv.DrBase.extend('DrAlterAble', {
    init: function (options) {
      this.base(options);
      if (!options.ads || !options.ads.length) return;
      this.options = adv.merge({}, defaultConfig, options);
      var opt = this.options;
      this.cookie = opt.cookieId || (opt.ads[0] && opt.ads[0].type ? opt.ads[0].type : 'DrAlterAble');
      this._getCurrentAd();
    },
    _getCurrentAd: function () {
      var opt = this.options;
      switch (opt.type) {
        case adv.ENUM.RANDOMS.allways:
          this.ad = opt.ads[adv.util.random(opt.adsLength || opt.ads)];
          break;
        case adv.ENUM.RANDOMS.firstTime:
        default:
          var pos = adv.cookie.getCookie(this.cookie);
          if (!pos) {
            pos = opt.randomPos ? adv.util.random(opt.adsLength || opt.ads) : 0;
          }
          this.ad = opt.ads[pos];
          pos++;
          if(opt.adsLength){
          	pos = pos >= opt.adsLength ? 0 : pos;
          }
          else{
            pos = pos >= opt.ads.length ? 0 : pos;
          }
          adv.cookie.setCookie(this.cookie, pos, adv.cookie.DAY);
          break;
      }
      if (this.ad && this.ad.type) {
        this.emit(adv.ENUM.EVENTS.inited);
      }
    },
    setup: function () {
      var me = this;
      var base = this.base;
      adv.adCenter.config(this.ad);
    },
    play:function() {
      this.base();
      this.emit(adv.ENUM.EVENTS.played);
    }
  });
})(adv);