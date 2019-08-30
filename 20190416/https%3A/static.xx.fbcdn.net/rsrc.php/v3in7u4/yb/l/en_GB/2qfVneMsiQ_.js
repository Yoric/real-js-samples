if (self.CavalryLogger) { CavalryLogger.start_js(["YBQrC"]); }

__d("PluginLoggedOutUserTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:PluginLoggedOutUserLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:PluginLoggedOutUserLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:PluginLoggedOutUserLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setHref=function(a){this.$1.href=a;return this};c.setIsSDK=function(a){this.$1.is_sdk=a;return this};c.setPluginAppID=function(a){this.$1.plugin_app_id=a;return this};c.setPluginName=function(a){this.$1.plugin_name=a;return this};c.setRefererURL=function(a){this.$1.referer_url=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};c.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};return a}();var g={href:!0,is_sdk:!0,plugin_app_id:!0,plugin_name:!0,referer_url:!0,time:!0,weight:!0};e.exports=a}),null);
__d("FormSubmit",["AsyncRequest","AsyncResponse","CSS","DOMQuery","Event","Form","Parent","trackReferrer"],(function(a,b,c,d,e,f){__p&&__p();var g={buildRequest:function(a,c){__p&&__p();var d=(b("Form").getAttribute(a,"method")||"GET").toUpperCase();c=c&&b("Parent").byTag(c,"button")||c;var e=c&&b("Parent").byClass(c,"stat_elem")||a;if(b("CSS").hasClass(e,"async_saving"))return null;if(c&&(c.form!==a||c.nodeName!="INPUT"&&c.nodeName!="BUTTON"||c.type!="submit")){var f=b("DOMQuery").scry(a,".enter_submit_target")[0];f&&(c=f)}f=b("Form").serialize(a,c);b("Form").setDisabled(a,!0);c=b("Form").getAttribute(a,"ajaxify")||b("Form").getAttribute(a,"action");var g=!!b("Form").getAttribute(a,"data-cors");b("trackReferrer")(a,c);return new(b("AsyncRequest"))().setAllowCrossOrigin(g).setURI(c).setData(f).setNectarModuleDataSafe(a).setReadOnly(d=="GET").setMethod(d).setRelativeTo(a).setStatusElement(e).setInitialHandler(b("Form").setDisabled.bind(null,a,!1)).setHandler(function(c){b("Event").fire(a,"success",{response:c})}).setErrorHandler(function(c){b("Event").fire(a,"error",{response:c})!==!1&&b("AsyncResponse").defaultErrorHandler(c)}).setFinallyHandler(b("Form").setDisabled.bind(null,a,!1))},send:function(a,b){a=g.buildRequest(a,b);a&&a.send();return a}};e.exports=g}),null);
__d("PopupWindow",["DOMDimensions","DOMQuery","Layer","Popup","getViewportDimensions"],(function(a,b,c,d,e,f){__p&&__p();var g={_opts:{allowShrink:!0,strategy:"vector",timeout:100,widthElement:null},init:function(a){Object.assign(g._opts,a),setInterval(g._resizeCheck,g._opts.timeout)},_resizeCheck:function(){__p&&__p();var a=b("getViewportDimensions")(),c=g._getDocumentSize(),d=b("Layer").getTopmostLayer();if(d){d=d.getRoot().firstChild;var e=b("DOMDimensions").getElementDimensions(d);e.height+=b("DOMDimensions").measureElementBox(d,"height",!0,!0,!0);e.width+=b("DOMDimensions").measureElementBox(d,"width",!0,!0,!0);c.height=Math.max(c.height,e.height);c.width=Math.max(c.width,e.width)}d=c.height-a.height;e=c.width-a.width;e<0&&!g._opts.widthElement&&(e=0);e=e>1?e:0;!g._opts.allowShrink&&d<0&&(d=0);if(d||e)try{window.console&&window.console.firebug,window.resizeBy(e,d),e&&window.moveBy(e/-2,0)}catch(a){}},_getDocumentSize:function(){var c=b("DOMDimensions").getDocumentDimensions();g._opts.strategy==="offsetHeight"&&(c.height=document.body.offsetHeight);if(g._opts.widthElement){var d=b("DOMQuery").scry(document.body,g._opts.widthElement)[0];d&&(c.width=b("DOMDimensions").getElementDimensions(d).width)}d=a.Dialog;d&&d.max_bottom&&d.max_bottom>c.height&&(c.height=d.max_bottom);return c},open:function(a,c,d,e){return b("Popup").open(a,d,c,e)}};e.exports=g}),null);
__d("AsyncFormRequestUtils",["Arbiter"],(function(a,b,c,d,e,f){a={subscribe:function(a,c,d){b("Arbiter").subscribe("AsyncRequest/"+c,function(b,c){b=c.request.relativeTo;b&&b===a&&d(c)})}};e.exports=a}),null);
__d("EmbeddedPostPluginActionTypes",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CLICK:"click"})}),null);
__d("EmbeddedPostPluginActions",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({EMBEDDED_POSTS_COMMENT:"embedded_post_comment",EMBEDDED_POSTS_LIKE:"embedded_post_like",EMBEDDED_POSTS_SHARE:"embedded_post_share",EMBEDDED_POSTS_UNLIKE:"embedded_post_unlike"})}),null);
__d("XPostPluginLoggingController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/platform/plugin/post/logging/",{})}),null);
__d("PluginFeedFooterActionLogger",["AsyncRequest","DOM","EmbeddedPostPluginActions","EmbeddedPostPluginActionTypes","Event","XPostPluginLoggingController"],(function(a,b,c,d,e,f){__p&&__p();a={initializeClickLoggers:function(a,c,d,e,f,g,h,i,j){var k=function(c,d){try{c=b("DOM").find(a,"."+c);b("Event").listen(c,"click",function(a){new(b("AsyncRequest"))().setURI(b("XPostPluginLoggingController").getURIBuilder().getURI()).setData({action:d,action_type:b("EmbeddedPostPluginActionTypes").CLICK,source:g,story_token:h,referer_url:i,is_sdk:j}).send()})}catch(a){}};k(c,b("EmbeddedPostPluginActions").EMBEDDED_POSTS_LIKE);k(d,b("EmbeddedPostPluginActions").EMBEDDED_POSTS_UNLIKE);k(e,b("EmbeddedPostPluginActions").EMBEDDED_POSTS_COMMENT);k(f,b("EmbeddedPostPluginActions").EMBEDDED_POSTS_SHARE)}};e.exports=a}),null);
__d("FBFeedLocations",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({NEWSFEED:1,GROUP:2,GROUP_PERMALINK:3,COMMUNITY:4,PERMALINK:5,SHARE_OVERLAY:6,PERMALINK_STREAM:7,GROUP_PINNED:8,FRIEND_LIST:9,TIMELINE:10,HASHTAG_FEED:11,TOPIC_FEED:12,PAGE:13,NOTIFICATION_FEED:14,GROUP_REPORTED:15,GROUP_PENDING:16,PAGES_FEED_IN_PAGES_MANAGER:17,TICKER_CLASSIC:18,PAGES_SUGGESTED_FEED_IN_PAGES_MANAGER:19,SEARCH:20,GROUP_SEARCH:21,NO_ATTACHMENT:22,EMBED:23,EMBED_FEED:24,ATTACHMENT_PREVIEW:25,STORIES_TO_SHARE:26,PROMPT_PERMALINK:27,TREND_HOVERCARD:28,OPEN_GRAPH_PREVIEW:30,HOTPOST_IN_PAGES_FEED:31,SCHEDULED_POSTS:32,TIMELINE_NOTES:33,PAGE_INSIGHTS:34,COMMENT_ATTACHMENT:35,PAGE_TIMELINE:36,GOODWILL_THROWBACK_PERMALINK:37,LIKE_CONFIRM:39,GOODWILL_THROWBACK_PROMOTION:40,BROWSE_CONSOLE:42,GROUP_FOR_SALE_COMPACT:43,ENTITY_FEED:44,GROUP_FOR_SALE_DISCUSSION:45,PAGES_CONTENT_TAB_PREVIEW:46,GOODWILL_THROWBACK_SHARE:47,TIMELINE_VIDEO_SHARES:48,EVENT:49,PAGE_PLUGIN:50,SRT:51,PAGES_CONTENT_TAB_INSIGHTS:52,ADS_PE_CONTENT_TAB_INSIGHTS:53,PAGE_ACTIVITY_FEED:54,VIDEO_CHANNEL:55,POST_TO_PAGE:56,GROUPS_GSYM_HOVERCARD:57,GROUP_POST_TOPIC_FEED:58,FEED_SURVEY:59,PAGES_MODERATION:60,SAVED_DASHBOARD:61,PULSE_SEARCH:62,GROUP_NUX:63,GROUP_NUX_POST_VIEW:64,EVENT_PERMALINK:65,FUNDRAISER_PAGE:66,EXPLORE_FEED:67,CRT:68,REVIEWS_FEED:69,VIDEO_HOME_CHANNEL:70,NEWS:71,TIMELINE_FRIENDSHIP:72,SAVED_REMINDERS:73,PSYM:74,ADMIN_FEED:75,CAMPFIRE_NOTE:76,PAGES_CONTEXT_CARD:77,ACTIVITY_LOG:78,WALL_POST_REPORT:79,TIMELINE_BREAKUP:80,TOWN_HALL:81,PRODUCT_DETAILS:82,SPORTS_PLAY_FEED:83,GROUP_TOP_STORIES:84,PAGE_TIMELINE_PERMALINK:86,OFFERS_WALLET:87,INSTREAM_VIDEO_IN_LIVE:88,SPOTLIGHT:89,SEARCH_DERP:90,SOCIAL_BALLOT:91,GROUP_SUGGESTIONS_WITH_STORY:92,SOCIAL_BALLOT_PERMALINK:93,LOCAL_SERP:94,FUNDRAISER_SELF_DONATION_FEED:95,CONVERSATION_NUB:97,GROUP_TOP_SALE_STORIES:98,GROUP_LEARNING_COURSE_UNIT_FEED:99,SUPPORT_INBOX_READ_TIME_BLOCK:100,PAGE_POSTS_CARD:101,CRISIS_POST:102,SUPPORT_INBOX_GROUP_RESPONSIBLE:103,PAGE_POST_DIALOG:104,CRISIS_DIALOG_POST:105,PAGE_LIVE_VIDEOS_CARD:106,PAGE_POSTS_CARD_COMPACT:107,GROUP_MEMBER_BIO_FEED:108,LIVE_COMMENT_ATTACHMENT:109,GROUP_COMPOSER:110,GROUP_INBOX_GROUP:111,GROUP_INBOX_AGGREGATED:112,ENDORSEMENTS:113,EVENTS_DASHBOARD:114,CURATED_COLLECTIONS_PAGE:115,OYML:116,COLLEGE_HOMEPAGE:117,GROUP_LIVE_VIDEOS_CARD:118,COLLEGE_HIGHLIGHTS:119,VIDEO_PERMALINK:120,JOB_CAROUSEL_NETEGO:121,TOPIC_PAGE:122,USER_SCHEDULED_POSTS:123,GOODWILL_THROWBACK_ATTACHMENT_PREVIEW:124,INSTREAM_VIDEO_IN_WASLIVE:125,INSTREAM_VIDEO_IN_NONLIVE:126,SIGNAL_APP:127,ALBUM_FEED:128,TOP_MARKETPLACE_STORIES:129,CE_PII_STRIPPED_FEED:130,TAHOE:131,SAVE_COUNT_DIALOG:132,GROUP_POST_TAG_FEED:133,GOV_DIGEST:134,GROUP_SCHEDULED:135,GAMEROOM_FEED:136,WORKPLACE_HUB_PREVIEW:137,BRANDED_CONTENT_TRENDING_POSTS:138,GROUP_ANNOUNCEMENTS:139,GROUP_ANNOUNCEMENTS_FEED:140,EXTERN_CE_PII_STRIPPED_FEED:141,CRISIS_HUB_DESKTOP:142,GROUP_DRAFT_POSTS:143,TRENDING_ISSUES:144,GAME_HUB_FEED:145,LUMOS_POST_PREVIEW:146,BRANDED_CONTENT_PAGE_SETTINGS:147,BC_MULTI_POST_REVIEW:149,ADS_TRANSPARENCY_SHOW_ADS:150,POLITICAL_POST_FEED:151,RECOMMENDATIONS_DASHBOARD:152,SEEN_CONTENT:153,AGGREGATED_FEED:154,GROUP_HOISTED:155,GROUP_MENTORSHIP_OVERVIEW_FEED:156,GROUP_MENTORSHIP_CURRICULUM_FEED:157,PAGE_SURFACE_RECOMMENDATIONS:158,SURVEY_GALLERY:159,GAMING_VIDEO_STREAMER_HUB:160,GROUP_MEETUP_FEED:161,GROUP_FLAGGED_FEED:162,PAGE_RECOMMENDATIONS_TOOL:163,MEDIA_MANAGER_HOME:164,WOODHENGE_EXCLUSIVE_FEED:165,PAGE_RECOMMENDATIONS_TAB_FEED:166,GROUP_ANNOUNCEMENTS_WITH_UFI:167,GROUP_ADMIN_TO_MEMBER_FEEDBACK:168,MEDIA_MANAGER_POST_INSIGHTS:169,MISINFORMATION_FACT_CHECKER_APP:170,WORKPLACE_TEAM_FEED:171,NEWS_STORYLINE_FEED:172,PAGE_RECOMMENDATIONS_VERTEX_TAB_FEED:173,MONTHLY_ACTIVITY_DIGEST:174,ACTOR_EXPERIENCE_APPEALS:175,WORKPLACE_NEWSFEED_PROMOTED_POST:176,ASSET3D_PHOTO_FULLSCREEN:177,MARKETPLACE_MEGAMALL:178,CIVIC_PROPOSAL:179,WORKPLACE_DISCOVERY_FEED:180,CE_PII_AND_ATTACHMENTS_STRIPPED_FEED:182,SOURCERY_PII_STRIPPED:183,ACTOR_GATEWAY:191,FBR:192,NEWS_STORYLINE_NEWSFEED_QP:193,JOBS_SINGLE_GROUP_BROWSER:194,JOBS_MULTI_GROUP_BROWSER:195,ACTION_EXPERIENCE:196,GROUP_ALERTED_FEED:197,CANDIDATE_PACKET_REVIEW:198,BUSINESS_FEED:199,NEWS_OCT_DRAFT_POST_PREVIEW:200,CENTRA_INVESTIGATION_FEED:201,TOP_GROUP_POSTS_TOOL:202,VIDEO_HOME_FEED:203,WORKPLACE_SHORTCUTS_FEED:204,NEXT_TOOL:205,CLIPS_LIBRARY:206,GRAMMAR_SEARCH:207,NEWSFEED_INJECTED_STORY_FROM_EMAIL_NOTIFICATION:208})}),null);
__d("PluginMessage",["DOMEventListener"],(function(a,b,c,d,e,f){a={listen:function(){b("DOMEventListener").add(window,"message",function(a){if(/\.facebook\.com$/.test(a.origin)&&/^FB_POPUP:/.test(a.data)){a=JSON.parse(a.data.substring(9));"reload"in a&&/^https?:/.test(a.reload)&&document.location.replace(a.reload)}})}};e.exports=a}),null);
__d("PluginOptin",["DOMEvent","DOMEventListener","PlatformWidgetEndpoint","PluginLoggedOutUserTypedLogger","PluginMessage","PopupWindow","URI","UserAgent_DEPRECATED"],(function(a,b,c,d,e,f){__p&&__p();function g(a,c){Object.assign(this,{return_params:b("URI").getRequestURI().getQueryData(),login_params:{},optin_params:{},plugin:a,api_key:c}),this.addReturnParams({ret:"optin"}),delete this.return_params.hash}Object.assign(g.prototype,{addReturnParams:function(a){Object.assign(this.return_params,a);return this},addLoginParams:function(a){Object.assign(this.login_params,a);return this},addOptinParams:function(a){Object.assign(this.optin_params,a);return this},start:function(){var a=this.api_key||127760087237610;b("URI").getRequestURI().getQueryData().kid_directed_site&&(this.login_params.kid_directed_site=!0);this.login_params.referrer=document.referrer;var c=new(b("URI"))(b("PlatformWidgetEndpoint").dialog("plugin.optin")).addQueryData(this.optin_params).addQueryData({app_id:a,secure:b("URI").getRequestURI().isSecure(),social_plugin:this.plugin,return_params:JSON.stringify(this.return_params),login_params:JSON.stringify(this.login_params)});b("UserAgent_DEPRECATED").mobile()?c.setSubdomain("m"):c.addQueryData({display:"popup"});this.return_params.act!==null&&this.return_params.act==="send"&&new(b("PluginLoggedOutUserTypedLogger"))().setPluginAppID(a).setPluginName(this.return_params.act).setHref(this.return_params.href).logVital();this.popup=b("PopupWindow").open(c.toString(),420,450);b("PluginMessage").listen();return this}});g.starter=function(a,b,c,d){a=new g(a);a.addReturnParams(b||{});a.addLoginParams(c||{});a.addOptinParams(d||{});return a.start.bind(a)};g.listen=function(a,c,d,e,f){b("DOMEventListener").add(a,"click",function(a){new(b("DOMEvent"))(a).kill(),g.starter(c,d,e,f)()})};e.exports=g}),null);
__d("PluginFeedLikeButton",["Arbiter","AsyncFormRequestUtils","ClientIDs","CSS","DOM","DOMEventListener","FBFeedLocations","FormSubmit","Keys","PluginOptin","URI"],(function(a,b,c,d,e,f){__p&&__p();window.resetConfirmStoryLike=function(a){b("CSS").show(b("DOM").find(document,"#likeStory_"+a)),b("DOM").remove(b("DOM").find(document,"#confirmStory_"+a))};a={addClientId:function(a){a.setAttribute("value",b("ClientIDs").getNewClientID())},loggedOutLikeButton:function(a,c,d){var e="";if(c===b("FBFeedLocations").EMBED)e="post";else if(c===b("FBFeedLocations").PAGE_PLUGIN)e="page";else throw new Error("Invalid FBFeedLocation type.");c=new(b("PluginOptin"))(e).addReturnParams({act:"like_"+a});b("DOMEventListener").add(d,"click",c.start.bind(c))},init:function(a,c,d,e,f){__p&&__p();var g=function(a){if(a.type==="keypress")if(a.keyCode===b("Keys").RETURN||a.keyCode===b("Keys").SPACE)b("FormSubmit").send(f);else return;b("FormSubmit").send(f)};b("DOMEventListener").add(c,"click",g);b("DOMEventListener").add(d,"click",g);b("DOMEventListener").add(c,"keypress",g);b("DOMEventListener").add(d,"keypress",g);g=e.getAttribute("value")==="1";b("AsyncFormRequestUtils").subscribe(f,"send",function(f){f=e.getAttribute("value")==="1";b("CSS").conditionShow(d,f);b("CSS").conditionShow(c,!f);b("Arbiter").inform("embeddedUfiToggle",{isLike:f,storyToken:a});e.setAttribute("value",f?"":"1")});b("AsyncFormRequestUtils").subscribe(f,"response",function(f){f=f.response.payload;if(f&&!f.success){f=f.isLike;b("CSS").conditionShow(c,f);b("CSS").conditionShow(d,!f);b("Arbiter").inform("revertLike",{isLike:f,storyToken:a});e.setAttribute("value",f?"1":"")}});var h=new(b("URI"))(window.location.search).getQueryData();g&&h.act==="like_"+a&&b("FormSubmit").send(f)}};e.exports=a}),null);
__d("EmbeddedVideoSaveButton",["cx","fbt","Arbiter","AsyncFormRequestUtils","Banzai","CSS","DOM","Event","FormSubmit","guid"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i="saved_for_later:imp",j="saved_for_later:click",k="overlay_toggle_button",l="embedded_video";a=function(){"use strict";__p&&__p();function a(a,c,d,e,f,g,i,j,k,l){__p&&__p();var m=this;this.$1=a;this.$2=[];this.objectID=k;this.impressed=!1;this.$3=i;this.$4=j;l?(this.$5=h._("Watch Later"),this.$6=h._("Watch Later")):(this.$5=h._("Save"),this.$6=h._("Unsave"));b("DOM").setContent(this.$3,this.$5);b("DOM").setContent(this.$4,this.$6);var n=function(a){a?(b("CSS").hide(d),b("CSS").show(e)):(b("CSS").hide(e),b("CSS").show(d)),b("Arbiter").inform("embeddedUfiToggle"),m.$2.length===0&&(a?g.setAttribute("value",1):g.setAttribute("value",0),b("FormSubmit").send(f)),m.$2.push(a),m.$7()};a=function(a){a=g.getAttribute("value")==="1";if(m.$2.length>1){var c=m.$2[m.$2.length-1];(a&&!c||!a&&c)&&(c?g.setAttribute("value",1):g.setAttribute("value",0),b("FormSubmit").send(f))}m.$2=[]};b("Event").listen(d,"click",function(){return n(!0)});b("Event").listen(e,"click",function(){return n(!1)});c.addListener("beginPlayback",function(){m.$8(),b("CSS").removeClass(m.$1,"_4_me")});b("AsyncFormRequestUtils").subscribe(f,"response",a)}var c=a.prototype;c.hideText=function(){b("DOM").setContent(this.$3,null),b("DOM").setContent(this.$4,null)};c.showText=function(){b("DOM").setContent(this.$3,this.$5),b("DOM").setContent(this.$4,this.$6)};c.$8=function(){if(this.impressed)return;this.impressed=!0;var a={mechanism:k,surface:l,og_object_id:this.objectID,event_id:b("guid")()};b("Banzai").post(i,a,{delay:0,retry:!0})};c.$7=function(){var a={mechanism:k,surface:l,og_object_id:this.objectID,event_id:b("guid")()};b("Banzai").post(j,a,{delay:0,retry:!0})};return a}();e.exports=a}),null);