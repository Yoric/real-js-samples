if (self.CavalryLogger) { CavalryLogger.start_js(["QIUF4"]); }

__d("UFIPager.react",["cx","LeftRight.react","React","SutroBlingBarGatingConfig","UFIImageBlock.react","XUISpinner.react","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.onPagerClick=function(a){!c.props.isLoading&&c.props.onPagerClick&&c.props.onPagerClick(),a.nativeEvent.prevent()},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.render=function(){var a=this.onPagerClick,c=b("SutroBlingBarGatingConfig").enabled,d=b("joinClasses")("UFIRow"+(this.props.isUnseen?" UFIUnseenItem":"")+" UFIPagerRow _4oep"+(this.props.isFirstCommentComponent?" _48pi":"")+(this.props.isLastCommentComponent?" UFILastCommentComponent":"")+(this.props.isFirstComponent||c&&this.props.isFirstCommentComponent?" _4204":"")+(this.props.isLastComponent?" _2o9m":"")),e=null;this.props.isLoading&&(e=b("React").createElement(b("XUISpinner.react"),{className:"mls",background:"light",size:"small"}));e=b("React").createElement("a",{className:"UFIPagerLink",onClick:a,href:"#",role:"button"},this.props.pagerLabel,e);var f="fcg UFIPagerCount";c=c&&b("React").createElement("span",{className:f},this.props.countSentence);this.props.contextArgs.entstream||!this.props.isReply?f=b("React").createElement(b("LeftRight.react"),{direction:b("LeftRight.react").DIRECTION.right},e,c):f=b("React").createElement(b("UFIImageBlock.react"),null,b("React").createElement("a",{className:"UFIPagerIcon",onClick:a,href:"#",role:"button"}),e,c);return b("React").createElement("div",{className:d,"data-ft":this.props["data-ft"]},f)};return c}(b("React").Component);e.exports=a}),null);
__d("UFIPagerLabel",["fbt","NumberFormat"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function h(a){return b("NumberFormat").formatInteger(a.count)}var i={VIEW_ONE:"view_one",VIEW_ONE_MORE:"view_one_more",VIEW_ALL:"view_all",VIEW_MORE_EXPLICIT:"view_more_explicit",VIEW_MORE:"view_more",VIEW_PREVIOUS:"view_previous",VIEW_PREVIOUS_EXPLICIT:"view_previous_explicit",_getReplyLabel:function(a,b){switch(a){case i.VIEW_ONE:return g._("\u67e5\u770b 1 \u5247\u56de\u8986");case i.VIEW_ONE_MORE:return g._("\u6aa2\u8996\u53e6 1 \u5247\u56de\u8986");case i.VIEW_ALL:return g._({"*":"\u67e5\u770b\u5168\u90e8{count}\u5247\u56de\u8986"},[g._param("count",h(b),[0,b.count])]);case i.VIEW_MORE_EXPLICIT:return g._({"*":{"*":"\u6aa2\u8996\u53e6{count}\u5247\u56de\u8986","_1":"\u67e5\u770b\u53e6{count}\u5247\u56de\u8986"}},[g._param("count",h(b),[0,b.count]),g._plural(b.count)]);case i.VIEW_MORE:return g._("\u67e5\u770b\u66f4\u591a\u56de\u8986");case i.VIEW_PREVIOUS:return g._("\u67e5\u770b\u4e4b\u524d\u7684\u56de\u8986");case i.VIEW_PREVIOUS_EXPLICIT:return g._({"*":{"*":"\u67e5\u770b{count}\u5247\u5148\u524d\u7684\u56de\u8986"}},[g._param("count",h(b),[0,b.count]),g._plural(b.count)]);default:return null}},_getCommentLabel:function(a,b){switch(a){case i.VIEW_ONE:return g._("\u67e5\u770b 1 \u5247\u7559\u8a00");case i.VIEW_ONE_MORE:return g._("\u67e5\u770b\u53e6 1 \u5247\u7559\u8a00");case i.VIEW_ALL:return g._({"*":"\u67e5\u770b\u5168\u90e8{count}\u5247\u7559\u8a00"},[g._param("count",h(b),[0,b.count])]);case i.VIEW_MORE_EXPLICIT:return g._({"*":{"*":"\u6aa2\u8996\u53e6{count}\u5247\u7559\u8a00","_1":"\u67e5\u770b\u53e6{count}\u5247\u7559\u8a00"}},[g._param("count",h(b),[0,b.count]),g._plural(b.count)]);case i.VIEW_MORE:return g._("\u67e5\u770b\u66f4\u591a\u7559\u8a00");case i.VIEW_PREVIOUS_EXPLICIT:return g._({"*":{"*":"\u67e5\u770b{count}\u5247\u5148\u524d\u7684\u7559\u8a00"}},[g._param("count",h(b),[0,b.count]),g._plural(b.count)]);case i.VIEW_PREVIOUS:return g._("\u986f\u793a\u5148\u524d\u7684\u7559\u8a00");default:return null}},_getCommentLabelWithHiddenCommentCount:function(a,b){switch(a){case i.VIEW_ONE:return g._("See comments");case i.VIEW_ALL:return g._("\u67e5\u770b\u6240\u6709\u7559\u8a00");case i.VIEW_ONE_MORE:case i.VIEW_MORE_EXPLICIT:case i.VIEW_MORE:return g._("See more comments");case i.VIEW_PREVIOUS_EXPLICIT:case i.VIEW_PREVIOUS:return g._("See previous comments");default:return null}},_getQuestionLabel:function(a,b){switch(a){case i.VIEW_ONE:return g._("\u67e5\u770b\u554f\u984c");case i.VIEW_ONE_MORE:return g._("\u67e5\u770b\u53e6\u4e00\u5247\u6c11\u8abf\u554f\u7b54");case i.VIEW_ALL:return g._({"*":"\u67e5\u770b\u5168\u90e8{count}\u5247\u554f\u984c"},[g._param("count",h(b),[0,b.count])]);case i.VIEW_MORE_EXPLICIT:return g._({"*":{"*":"\u67e5\u770b\u53e6\u5916{count}\u5247\u554f\u984c","_1":"\u67e5\u770b\u53e6{count}\u500b\u554f\u984c"}},[g._param("count",h(b),[0,b.count]),g._plural(b.count)]);case i.VIEW_MORE:return g._("\u67e5\u770b\u53e6\u5916\u7684\u554f\u984c");case i.VIEW_PREVIOUS:return g._("\u67e5\u770b\u5148\u524d\u7684\u554f\u984c");case i.VIEW_PREVIOUS_EXPLICIT:return g._({"*":{"*":"\u67e5\u770b{count}\u500b\u5148\u524d\u7684\u554f\u984c"}},[g._param("count",h(b),[0,b.count]),g._plural(b.count)]);default:return null}},_getAnswerLabel:function(a,b){switch(a){case i.VIEW_ONE:return g._("\u67e5\u770b 1 \u500b\u7b54\u6848");case i.VIEW_ONE_MORE:return g._("\u67e5\u770b\u5176\u4ed6 1 \u500b\u7b54\u6848");case i.VIEW_ALL:return g._({"*":"\u67e5\u770b\u6240\u6709{count}\u500b\u7b54\u6848"},[g._param("count",h(b),[0,b.count])]);case i.VIEW_MORE_EXPLICIT:return g._({"*":{"*":"\u67e5\u770b\u5176\u4ed6{count}\u500b\u7b54\u6848"}},[g._param("count",h(b),[0,b.count]),g._plural(b.count)]);case i.VIEW_MORE:return g._("\u67e5\u770b\u66f4\u591a\u7b54\u6848");case i.VIEW_PREVIOUS_EXPLICIT:return g._({"*":{"*":"\u67e5\u770b{count}\u500b\u4e4b\u524d\u7684\u7b54\u6848"}},[g._param("count",h(b),[0,b.count]),g._plural(b.count)]);case i.VIEW_PREVIOUS:return g._("\u67e5\u770b\u5148\u524d\u7684\u7b54\u6848");default:return null}},getLabel:function(a,b,c){if(b)return i._getReplyLabel(a,c);else return c.hideCount?i._getCommentLabelWithHiddenCommentCount(a,c):i._getCommentLabel(a,c)}};e.exports=i}),null);
__d("UFIPagerGenerator",["fbt","NumberFormat","React","TrackingNodes","UFIConstants","UFIOrderingModeStore","UFIPager.react","UFIPagerLabel","UFIRange"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("UFIConstants").UFIPaging;a={isBottomPager:function(a,c,d){return b("UFIOrderingModeStore").isInverted(c,d)&&!a},needsStartOfRangePager:function(a){return a>0},renderPagers:function(a){__p&&__p();var c=a.commentCount,d=a.contextArgs,e=a.currentLength,f=a.currentOffset,i=a.deletedCount,j=a.feedback,k=a.hideCount,l=a.onPageCallback,m=a.orderingMode,n=a.range;a=a.targetID;var o=c-i;i=e-i;var p=a!==d.ftentidentifier,q=this.isBottomPager(p,m,a);m={topPager:null,bottomPager:null};var r=n.isLoadingPrev();n=n.isLoadingNext();k={count:0,hideCount:k};var s=f+e==c;if(c<d.pagesize&&s||i===0){var t=Math.min(c,d.pagesize);s=function(){return l(q?h.BOTTOM:h.TOP,new(b("UFIRange"))(c-t,t))};var u;i===0?o==1?u=b("UFIPagerLabel").VIEW_ONE:(k.count=o,u=b("UFIPagerLabel").VIEW_ALL):o-i==1?u=b("UFIPagerLabel").VIEW_ONE_MORE:(u=b("UFIPagerLabel").VIEW_MORE_EXPLICIT,k.count=o-i);var v=b("TrackingNodes").getTrackingInfo(b("TrackingNodes").types.VIEW_ALL_COMMENTS);u=b("UFIPagerLabel").getLabel(u,p,k);j=b("React").createElement(b("UFIPager.react"),{key:"allPager"+a,ref:q?"topLevelBottomPager":null,contextArgs:d,isUnseen:j.hasunseencollapsed,isLoading:q?n:r,isReply:p,pagerLabel:u,onPagerClick:s,"data-ft":v});q?m.bottomPager=j:m.topPager=j;return m}u=b("UFIPagerLabel").getLabel(b("UFIPagerLabel").VIEW_MORE,p,k);s=b("UFIPagerLabel").getLabel(b("UFIPagerLabel").VIEW_PREVIOUS,p,k);if(this.needsStartOfRangePager(f)){var w=Math.max(f-d.pagesize,0),x=f+e-w,y;if(!p||i>1){v=b("NumberFormat").formatInteger(i);j=b("NumberFormat").formatInteger(o);y=g._("{totalcount}\u5247\u4e2d\u7684{countshown}\u5247",[g._param("countshown",v),g._param("totalcount",j)])}k=function(){return l(q?h.BOTTOM:h.TOP,new(b("UFIRange"))(w,x))};q?m.bottomPager=b("React").createElement(b("UFIPager.react"),{key:"bottomPager"+a,ref:p?null:"topLevelBottomPager",contextArgs:d,isLoading:r,isReply:p,pagerLabel:u,onPagerClick:k,countSentence:y}):m.topPager=b("React").createElement(b("UFIPager.react"),{key:"topPager"+a,contextArgs:d,isLoading:r,isReply:p,pagerLabel:s,onPagerClick:k,countSentence:y})}if(f+e<c){var z=Math.min(e+d.pagesize,c-f);i=function(){return l(q?h.TOP:h.BOTTOM,new(b("UFIRange"))(f,z))};q?m.topPager=b("React").createElement(b("UFIPager.react"),{key:"topPager"+a,contextArgs:d,isLoading:n,isReply:p,pagerLabel:s,onPagerClick:i}):m.bottomPager=b("React").createElement(b("UFIPager.react"),{key:"bottomPager",ref:p?null:"topLevelBottomPager",contextArgs:d,isLoading:n,isReply:p,pagerLabel:u,onPagerClick:i})}return m}};e.exports=a}),null);
__d("distinctArrayBy",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a){return a}function a(a,b){__p&&__p();b===void 0&&(b=g);var c=[],d=new Set();for(var a=a,e=Array.isArray(a),f=0,a=e?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var h;if(e){if(f>=a.length)break;h=a[f++]}else{f=a.next();if(f.done)break;h=f.value}h=h;var i=b(h);d.has(i)||(d.add(i),c.push(h))}return c}e.exports=a}),null);
__d("UFICommentFilterFallbackWarning.react",["cx","fbt","React","UFIPagerGenerator","UFIPaging","WebCommentViewOption","distinctArrayBy"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();function i(a,c,d){var e=c.availableComments;c=c.repliesMap;d?d=c[a]||[]:d=e||[];d=b("distinctArrayBy")(d,function(a){return a.id});return d.length}a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}c.shouldRender=function(a,c,d,e){__p&&__p();if(!a)return!1;var f=a.availableComments,g=a.commentCounts,h=a.deletedCounts,j=a.hasPagedToplevel,k=a.orderingMode,l=a.ranges,m=a.repliesExpandedMap,n=a.repliesMap;if(!f||!g||!h||!k||!l||!m||!n)return!1;f=Math.max((g[c]||0)-(h[c]||0),0);n=l[c];if(!n||!f||k!==b("WebCommentViewOption").RANKED_THREADED||e&&!m[c]||!e&&!j)return!1;g=i(c,a,e);h=n.isLoadingPrev();l=n.isLoadingNext();m=n.getOffset();j=n.getLength();a=b("UFIPagerGenerator").isBottomPager(e,k,c);n=Math.min(j,f);if(d===b("UFIPaging").ALL)return!h&&!l&&m===0&&j>=f&&g<n;else if(!a&&d===b("UFIPaging").TOP||a&&d===b("UFIPaging").BOTTOM)return!h&&m===0&&g<n;else if(!a&&d===b("UFIPaging").BOTTOM||a&&d===b("UFIPaging").TOP)return!l&&m+j>=f&&g<n;return!1};var d=c.prototype;d.$1=function(){__p&&__p();var a=this.props,b=a.asReplyWarning;a=a.ufiProps;a=a||{};var c=a.feedback,d=a.orderingMode;a=c&&c.orderingmodes||[];c=a.find(function(a){return a&&a.value===d});a=c&&c.name;if(b)if(a)return h._("\u4f60\u9078\u64c7\u4e86{ordering mode name}\uff0c\u56e0\u6b64\u7cfb\u7d71\u53ef\u80fd\u5df2\u904e\u6ffe\u6389\u90e8\u5206\u56de\u8986\u3002",[h._param("ordering mode name",a)]);else return h._("\u7cfb\u7d71\u53ef\u80fd\u5df2\u6839\u64da\u6240\u9078\u7684\u6392\u5e8f\u6a21\u5f0f\u904e\u6ffe\u6389\u90e8\u5206\u56de\u8986\u3002");else if(a)return h._("\u4f60\u9078\u64c7\u4e86{ordering mode name}\uff0c\u56e0\u6b64\u7cfb\u7d71\u53ef\u80fd\u5df2\u904e\u6ffe\u6389\u90e8\u5206\u7559\u8a00\u3002",[h._param("ordering mode name",a)]);else return h._("\u7cfb\u7d71\u53ef\u80fd\u5df2\u6839\u64da\u6240\u9078\u7684\u6392\u5e8f\u6a21\u5f0f\u904e\u6ffe\u6389\u90e8\u5206\u7559\u8a00\u3002")};d.render=function(){var a=this.props,c=a.ufiProps,d=a.targetID,e=a.pagingDirection;a=a.asReplyWarning;return!this.constructor.shouldRender(c,d,e,a)?null:b("React").createElement("div",{className:"_2ah8 _4oep UFIRow"},b("React").createElement("div",{className:"_2ah9"},this.$1()))};return c}(b("React").Component);e.exports=a}),null);
__d("BanzaiBase",["BanzaiAdapter","BanzaiConsts","BanzaiLazyQueue","ErrorUtils","FBLogger"],(function(a,b,c,d,e,f){__p&&__p();var g=b("BanzaiAdapter"),h="ods:banzai",i="send_via_beacon_failure",j=0,k=1,l=2,m=null,n,o=[],p=null,q=[];function r(a,b){a.__meta.status=j,a[3]=(a[3]||0)+1,!a.__meta.retry&&b>=400&&b<600&&o.push(a)}var s={adapter:g,SEND:b("BanzaiConsts").SEND,OK:b("BanzaiConsts").OK,ERROR:b("BanzaiConsts").ERROR,SHUTDOWN:b("BanzaiConsts").SHUTDOWN,VITAL_WAIT:b("BanzaiConsts").VITAL_WAIT,BASIC_WAIT:b("BanzaiConsts").BASIC_WAIT,VITAL:{delay:g.config.MIN_WAIT||b("BanzaiConsts").VITAL_WAIT},BASIC:{delay:g.config.MAX_WAIT||b("BanzaiConsts").BASIC_WAIT},isEnabled:function(a){return g.config.gks&&g.config.gks[a]},post:function(a,c,d){__p&&__p();a||b("FBLogger")("banzai").mustfix("Banzai.post called without specifying a route");d=d||{};var e=d.retry;if(g.config.disabled)return;var f=g.config.blacklist;if(f&&(f.indexOf&&(typeof f.indexOf=="function"&&f.indexOf(a)!=-1)))return;var h=s._wrapData(a,c,s._getEventTime(),e);d.callback&&(h.__meta.callback=d.callback);d.compress!=null&&(h.__meta.compress=d.compress);f=d.delay;f==null&&(f=b("BanzaiConsts").BASIC_WAIT);if(d.signal){h.__meta.status=k;c=[{user:s._getUserId(),page_id:s._getPageId(),posts:[h],trigger:a}];g.send(c,function(){h.__meta.status=l,h.__meta.callback&&h.__meta.callback()},function(a){r(h,a)},!0);if(!e)return}o.push(h);(s._schedule(f)||!p)&&(p=a);d=b("BanzaiLazyQueue").flushQueue();d.forEach(function(a){return s.post.apply(s,a)})},registerToSendWithBeacon:function(a,c,d,e){if(!(navigator&&navigator.sendBeacon&&g.isOkToSendViaBeacon()))return!1;if(!a){b("FBLogger")("banzai").mustfix("Banzai.registerToSendWithBeacon called without specifying a route");return!1}q.push({cb:c,route:a,onSuccess:d,onFailure:e});return!0},flush:function(b,c){a.clearTimeout(m),m=null,s._sendWithCallbacks(b,c)},subscribe:g.subscribe,canUseNavigatorBeacon:function(){return navigator&&navigator.sendBeacon&&g.isOkToSendViaBeacon()},_canSend:function(a){return a[2]>=s._getEventTime()-(g.config.EXPIRY||b("BanzaiConsts").EXPIRY)},_getPostBuffer:function(){return o},_clearPostBuffer:function(){o=[]},_schedule:function(b){var c=s._getEventTime()+b;if(!n||c<n){n=c;m&&a.clearTimeout(m);m=a.setTimeout(function(){s._sendWithCallbacks()},b);return!0}return!1},_sendWithCallbacks:function(a,c,d){__p&&__p();n=null;s._schedule(s.BASIC.delay);if(!g.readyToSend()){c&&c();return}if(s.isEnabled("flush_storage_periodically")||s.isEnabled("error_impact_test")){var e=s._getStorage();b("ErrorUtils").applyWithGuard(e.flush,e)}g.inform(b("BanzaiConsts").SEND);e=[];var f=[];o=s._gatherWadsAndPostsFromBuffer(e,f,!0,o,d);if(e.length<=0){g.inform(b("BanzaiConsts").OK);a&&a();return}e[0].trigger=p;p=null;e[0].send_method="ajax";e.map(g.prepWadForTransit);g.send(e,function(){f.forEach(function(a){a.__meta.status=l,a.__meta.callback&&a.__meta.callback()}),a&&a()},function(a){f.forEach(function(b){r(b,a)}),c&&c()})},_gatherWadsAndPostsFromBuffer:function(a,b,c,d,e){__p&&__p();e===void 0&&(e=null);var f={},g=d.length,h=!1;return d.filter(function(d,i){__p&&__p();if(h)return!0;var j=d.__meta;if(j.status>=l||!s._canSend(d))return!1;if(j.status>=k)return!0;var m=j.compress!=null?j.compress:!0,n=j.pageID+j.userID+(m?"compress":""),o=f[n];o||(o={user:j.userID,page_id:j.pageID,posts:[],snappy:m},f[n]=o,a.push(o));j.status=k;o.posts.push(d);b.push(d);e!=null&&e>0&&(e--,e==0&&(h=!0,i<g-1&&s._schedule(0)));return c&&j.retry})},_resetPostStatus:function(a){a.__meta.status=j},_store:function(a){a=s._getStorage();b("ErrorUtils").applyWithGuard(a.store,a)},_restore:function(a){a=s._getStorage();b("ErrorUtils").applyWithGuard(a.restore,a);s._schedule(g.config.RESTORE_WAIT||b("BanzaiConsts").VITAL_WAIT)},_wrapData:function(a,b,c,d){a=[a,b,c,0];a.__meta={pageID:s._getPageId(),userID:s._getUserId(),retry:d===!0,status:j};return a},_tryToSendViaBeacon:function(){__p&&__p();if(!(navigator&&navigator.sendBeacon&&g.isOkToSendViaBeacon()))return!1;var b=[],c=[];o=s._gatherWadsAndPostsFromBuffer(b,c,!1,o);if(b.length<=0)return!1;b[0].send_method="beacon";b.map(g.prepWadForTransit);b=new Blob([g.addRequestAuthData(g.prepForTransit(b))],{type:"application/x-www-form-urlencoded"});b=a.navigator.sendBeacon(s.adapter.endpoint,b);if(!b){c.forEach(function(a){o.push(a)});o.push(s._wrapData(h,(b={},b[i]=[1],b),s._getEventTime()));return!1}return!0},_processCallbacksAndSendViaBeacon:function(){__p&&__p();var b=[];q.forEach(function(a){var c=a.cb();c.forEach(function(c){var d=a.route;if(d){d=s._wrapData(d,c,s._getEventTime());d.__meta.onSuccess=a.onSuccess;d.__meta.onFailure=a.onFailure;b.push(d)}})});q=[];var c=[],d=[];s._gatherWadsAndPostsFromBuffer(c,d,!0,b);if(c.length>0){c[0].send_method="beacon";c.map(g.prepWadForTransit);c=new Blob([g.addRequestAuthData(g.prepForTransit(c))],{type:"application/x-www-form-urlencoded"});c=a.navigator.sendBeacon(s.adapter.endpoint,c);c?d.forEach(function(a){return a.__meta&&a.__meta.onSuccess&&a.__meta.onSuccess()}):d.forEach(function(a){return a.__meta&&a.__meta.onFailure&&a.__meta.onFailure()})}},_unload:function(){navigator&&navigator.sendBeacon&&g.isOkToSendViaBeacon()&&s._processCallbacksAndSendViaBeacon(),g.cleanup(),g.inform(b("BanzaiConsts").SHUTDOWN),o.length>0&&((!s.adapter.useBeacon||!s._tryToSendViaBeacon())&&s._store(!1))},_getEventTime:function(){return Date.now()},_testState:function(){return{postBuffer:o,triggerRoute:p}},_getStorage:function(){return{store:function(){},restore:function(){},flush:function(){}}},_getPageId:function(){return"0"},_getUserId:function(){return"0"},_initialize:function(){}};e.exports=s}),null);
__d("BanzaiNew",["BanzaiBase","BanzaiConsts","BanzaiStreamPayloads","CurrentUser","ExecutionEnvironment","FBJSON","NavigationMetrics","SetIdleTimeoutAcrossTransitions","TimeSlice","Visibility","WebStorage","emptyFunction","isInIframe","lowerFacebookDomain","pageID","performanceAbsoluteNow","WebStorageMutex"],(function(a,b,c,d,e,f){__p&&__p();var g="bz:",h={_getStorage:b("BanzaiBase")._getStorage,_getPageId:b("BanzaiBase")._getPageId,_getUserId:b("BanzaiBase")._getUserId,_initialize:b("BanzaiBase")._initialize,_schedule:b("BanzaiBase")._schedule,flush:b("BanzaiBase").flush,_unload:b("BanzaiBase")._unload,post:b("BanzaiBase").post},i=b("isInIframe")(),j=null,k,l,m,n,o=!1;function p(){o||(o=!0,n=b("WebStorage").getLocalStorage());return n}function q(){var a="check_quota";try{var b=p();if(!b)return!1;b.setItem(a,a);b.removeItem(a);return!0}catch(a){return!1}}b("BanzaiBase")._getStorage=function(){__p&&__p();m||(!i?m={store:function(){var a=p();if(!a||b("BanzaiBase")._getPostBuffer().length<=0)return;var c=b("BanzaiBase")._getPostBuffer().map(function(a){return[a[0],a[1],a[2],a[3]||0,a.__meta]});b("BanzaiBase")._clearPostBuffer();b("WebStorage").setItemGuarded(a,g+b("pageID")+"."+b("BanzaiBase")._getEventTime(),b("FBJSON").stringify(c))},restore:function(){__p&&__p();var a=p();if(!a)return;var c=b("WebStorageMutex"),d=function(c){__p&&__p();var d=[];for(var e=0;e<a.length;e++){var f=a.key(e);f.indexOf(g)===0&&f.indexOf("bz:__")!==0&&d.push(f)}d.forEach(function(c){__p&&__p();var d=a.getItem(c);a.removeItem(c);if(!d)return;c=b("FBJSON").parse(d);c.forEach(function(a){if(!a)return;var c=a.__meta=a.pop(),d=b("BanzaiBase")._canSend(a);if(!d)return;d=b("CurrentUser").getID();(c.userID===d||d==="0")&&(b("BanzaiBase")._resetPostStatus(a),b("BanzaiBase")._getPostBuffer().push(a))})});c&&c.unlock()};q()?new c("banzai").lock(d):b("SetIdleTimeoutAcrossTransitions").start(d,0)},flush:function(){var a=p();if(a){j===null&&(j=parseInt(a.getItem(b("BanzaiConsts").LAST_STORAGE_FLUSH),10));var c=j&&b("performanceAbsoluteNow")()-j>=b("BanzaiConsts").STORAGE_FLUSH_INTERVAL;c&&b("BanzaiBase")._restore(!1);(c||!j)&&(j=b("performanceAbsoluteNow")(),b("WebStorage").setItemGuarded(a,b("BanzaiConsts").LAST_STORAGE_FLUSH,j.toString()))}}}:m={store:b("emptyFunction"),restore:b("emptyFunction"),flush:b("emptyFunction")});return m};b("BanzaiBase")._getPageId=function(){return b("pageID")};b("BanzaiBase")._getUserId=function(){return b("CurrentUser").getID()};b("BanzaiBase")._initialize=function(){b("ExecutionEnvironment").canUseDOM&&(b("BanzaiBase").adapter.useBeacon&&b("Visibility").isSupported()?(b("Visibility").addListener(b("Visibility").HIDDEN,function(){b("BanzaiBase")._getPostBuffer().length>0&&(b("BanzaiBase")._tryToSendViaBeacon()||b("BanzaiBase")._store(!1))}),(b("BanzaiBase").isEnabled("enable_client_logging_clear_on_visible")||b("BanzaiBase").isEnabled("error_impact_test"))&&b("Visibility").addListener(b("Visibility").VISIBLE,function(){b("BanzaiBase")._tryToSendViaBeacon()||b("BanzaiBase")._restore(!1)})):b("BanzaiBase").adapter.setHooks(b("BanzaiBase")),b("BanzaiBase").adapter.setUnloadHook(b("BanzaiBase")),b("NavigationMetrics").addListener(b("NavigationMetrics").Events.NAVIGATION_DONE,function(a,c){if(c.pageType!=="normal")return;b("BanzaiBase")._restore(!1);b("NavigationMetrics").removeCurrentListener()}))};b("BanzaiBase")._getEventTime=function(){return b("performanceAbsoluteNow")()};var r=b("TimeSlice").guard(function(){k=null,b("BanzaiBase")._sendWithCallbacks()},"Banzai.send",{propagationType:b("TimeSlice").PropagationType.ORPHAN});b("BanzaiBase")._schedule=function(a){__p&&__p();var c=b("BanzaiBase")._getEventTime()+a;if(!k||c<k){k=c;b("SetIdleTimeoutAcrossTransitions").clear(l);c=function(){l=b("SetIdleTimeoutAcrossTransitions").start(r,a)};c();return!0}return!1};b("BanzaiBase").flush=function(a,c){b("SetIdleTimeoutAcrossTransitions").clear(l),k=null,b("BanzaiBase")._sendWithCallbacks(a,c)};b("BanzaiBase")._unload=function(){b("BanzaiStreamPayloads").unload(b("BanzaiBase").post),h._unload()};b("BanzaiBase").post=function(c,d,e){__p&&__p();if(b("BanzaiBase").adapter.config.disabled)return;if(!b("ExecutionEnvironment").canUseDOM)return;if(i&&b("lowerFacebookDomain").isValidDocumentDomain()){var f;try{f=a.top.require("Banzai")}catch(a){f=null}if(f){f.post.apply(f,arguments);return}}h.post(c,d,e)};b("BanzaiBase")._initialize();e.exports=b("BanzaiBase")}),null);
__d("AtSignMentionsWithLongAliasStrategy",["DocumentMentionsRegex"],(function(a,b,c,d,e,f){__p&&__p();a=b("DocumentMentionsRegex").PUNCTUATION;c=["@","\\uff20"].join("");d="[^"+c+a+"\\s]";f="(?:\\.[ |$]| |["+a+"]|)";b=20;var g=new RegExp("(?:^|\\s|\\()(["+c+"]((?:"+d+f+"){0,"+b+"}))$");a=50;var h=new RegExp("(?:^|\\s|\\()(["+c+"]((?:"+d+"){0,"+a+"}))$");f={name:"AtSignMentionsWithLongAliasStrategy",findMentionableString:function(a){var b=g.exec(a);b===null&&(b=h.exec(a));if(b!==null){a=b[2];if(a.length)return{matchingString:a,leadOffset:b[1].length}}return null}};e.exports=f}),null);