if (self.CavalryLogger) { CavalryLogger.start_js(["Zdd49"]); }

__d("VCKDraftSetsDataProviderPlugin",["LoadObjectMap","VCKDraftsDataManager","promiseDone","promiseLoadObjectsFromKeys"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a,b){a(function(a){var c=a;b.targetID.forEach(function(b){var d=a.get(b);c=c.set(b,d.loading())});return c})}function h(a,b){a(function(a){var c=a;b.draftSetsWithResourcesMap.forEach(function(a,b){c=c.set(b,a)});return c})}a={initialState:function(a){return b("LoadObjectMap").create(function(c){g(a,{targetID:c}),b("promiseDone")(b("promiseLoadObjectsFromKeys")(c,function(a){return b("VCKDraftsDataManager").fetchDrafts(a)}),function(b){h(a,{draftSetsWithResourcesMap:b})})})}};e.exports=a}),null);