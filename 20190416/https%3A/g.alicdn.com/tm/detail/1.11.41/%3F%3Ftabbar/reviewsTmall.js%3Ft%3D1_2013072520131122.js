KISSY.add("malldetail/tabbar/reviewsTmall",function(e,t){return{"init":function(a){codeTrack("info.review.init","view.mainBody.init");var i=t.get("#J_Reviews"),n=a.product,o=t.create("<div></div>");i&&(t.append(o,i),n.onLoad(["config","bucketId","misc"],function(t,i,r){window.g_config.reviewsVersionOldFlag&&1==window.g_config.reviewsVersionOldFlag?(e.config({"packages":[{"name":"review","path":(g_config.isDaily?"//g-assets.daily.taobao.net/":"//g.alicdn.com/")+"tm/review/"+window.g_config.reviewsVersion+"/","ignorePackageNameInUri":!0,"debug":!0}]}),e.use(["review/index"],function(e,r){var s=!0,l={"onPaint":function(e){e.count?codeTrack("info.review.render.0","info.review.call"):codeTrack("info.review.render.1","info.review.call"),s&&(s=!1,codeTrack("info.review.render","info.review.call"))}};(t.isTwView||t.isWorldView)&&(l._thwlang="zh_CN:TB-GBK"),t.rateConfig&&-1!==t.tagsId.indexOf("5131")&&(t.rateConfig.rateCloudDisable=!0,t.rateConfig.rateScoreDisable=!0),codeTrack("info.review.call","info.review.init",{"group":t.rateConfig&&t.rateConfig.reviewListType||"0"}),r.init(o,e.mix({"tokenLoader":function(e){n.onLoad("token",function(t){e({"token":t})})},"list":l,"rateConfig":t.rateConfig,"bucketId":i,"ua":function(){try{return window.getUA.apply(window,arguments)}catch(e){}}},a,!0,null,!0)),codeTrack("info.review.show","info.review.call")})):(e.config({"packages":[{"name":"mui/detail-review","path":(g_config.isDaily?"//g-assets.daily.taobao.net/":"//g.alicdn.com/")+"mui/detail-review/"+window.g_config.reviewsVersion+"/","ignorePackageNameInUri":!0,"debug":!0}]}),e.use(["mui/detail-review/index"],function(e,s){var l=!0,c={"onPaint":function(e){e.count?codeTrack("info.review.render.0","info.review.call"):codeTrack("info.review.render.1","info.review.call"),l&&(l=!1,codeTrack("info.review.render","info.review.call"))}};(t.isTwView||t.isWorldView)&&(c._thwlang="zh_CN:TB-GBK"),t.rateConfig&&-1!==t.tagsId.indexOf("5131")&&(t.rateConfig.rateCloudDisable=!0,t.rateConfig.rateScoreDisable=!0),codeTrack("info.review.call","info.review.init",{"group":t.rateConfig&&t.rateConfig.reviewListType||"0"}),r&&r.groupId&&t.rateConfig&&(t.rateConfig.groupId=r.groupId),s.init(o,e.mix({"tokenLoader":function(e){n.onLoad("token",function(t){e({"token":t})})},"list":c,"rootCatId":t.itemDO.rootCatId,"rateConfig":t.rateConfig,"bucketId":i,"ua":function(){try{return window.getUA.apply(window,arguments)}catch(e){}}},a,!0,null,!0)),codeTrack("info.review.show","info.review.call")}))}))}}},{"requires":["dom"]});