if (self.CavalryLogger) { CavalryLogger.start_js(["7aiXQ"]); }

__d("adsCreateAdAccountGKSelector",["AdsAccountStore","adsAccountGK","adsCreateSelector","memoizeWithArgs"],(function(a,b,c,d,e,f){"use strict";function a(a){return b("adsCreateSelector")([b("AdsAccountStore").getSelectedAccount],function(c){return b("adsAccountGK")(c.value,a)},{name:e.id})}e.exports=b("memoizeWithArgs")(a,function(a){return a})}),null);