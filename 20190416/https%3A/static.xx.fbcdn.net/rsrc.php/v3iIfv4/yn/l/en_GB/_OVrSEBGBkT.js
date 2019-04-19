if (self.CavalryLogger) { CavalryLogger.start_js(["mQUYx"]); }

__d("PagesAboutSectionLogger",["Event","PagesEventObserver","Run"],(function(a,b,c,d,e,f){"use strict";a={registerLogEvent:function(a,c,d){var e=b("Event").listen(a,"click",function(){return b("PagesEventObserver").notify(c,d)});b("Run").onLeave(function(){e.remove()})}};e.exports=a}),null);
__d("PagesPostsByOthersUnit",["DOM"],(function(a,b,c,d,e,f){__p&&__p();var g;a=function(){"use strict";__p&&__p();function a(a,b){this.$1=a,this.$2=b,g=this}var c=a.prototype;c.getRoot=function(){return this.$1};c.insertPost=function(a){var c=this.getRoot();b("DOM").prependContent(c,a);c.children.length>this.$2&&b("DOM").remove(c.lastChild);this.$3&&(b("DOM").remove(this.$3),this.$3=null)};a.insertPostIntoCurrentInstance=function(a){this.getInstance().insertPost(a)};a.initPlaceholderElement=function(a){this.getInstance().$3=a};a.getInstance=function(){return g};return a}();e.exports=a}),null);
__d("PagesTimelineSearchBar.react",["ix","cx","fbt","Arbiter","Image.react","PagesEventObserver","PagesEventType","React","XUIButton.react","XUITextInput.react","fbglyph"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();a=b("React").PropTypes;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={query:d.props.searchQuery,disabled:!1},d.$1="",d.$3=function(a){!d.$1?d.setState({query:""}):d.state.disabled||(d.setState({disabled:!0,query:""}),b("Arbiter").inform("PagesTimelineSearch/search",{query:""}),b("PagesEventObserver").notify(b("PagesEventType").SEARCH_TIMELINE_POSTS,d.props.pageID,{searchTerm:""}))},d.$5=function(a){a=a.target.value;a.length<=d.props.maxLength&&d.setState({query:a})},d.$4=function(a){d.state.disabled||(d.setState({disabled:!0}),b("Arbiter").inform("PagesTimelineSearch/search",{query:d.state.query}),b("PagesEventObserver").notify(b("PagesEventType").SEARCH_TIMELINE_POSTS,d.props.pageID,{searchTerm:d.state.query}))},d.$2=function(a,b){b.query===d.state.query&&(d.setState({disabled:!1}),d.$1=b.query)},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.UNSAFE_componentWillMount=function(){b("Arbiter").subscribe("PagesTimelineSearch/searchDone",this.$2)};d.render=function(){var a=i._("Search for posts on this Page"),c=null;!this.state.disabled&&this.state.query&&(c=b("React").createElement(b("XUIButton.react"),{className:"_5wkw",image:b("React").createElement(b("Image.react"),{src:g("141941")}),label:i._("Clear"),labelIsHidden:!0,onClick:this.$3}));var d=this.state.disabled?"_1fa6 _1wqb":"_1fa6";return b("React").createElement("div",{className:d},b("React").createElement(b("XUIButton.react"),{className:"_3fbq",disabled:this.state.disabled,image:b("React").createElement(b("Image.react"),{src:g("142454")}),label:i._("Search"),labelIsHidden:!0,onClick:this.$4}),b("React").createElement(b("XUITextInput.react"),{className:"_3fbp",onChange:this.$5,placeholder:a,value:this.state.query,onEnter:this.$4,disabled:this.state.disabled}),c)};return c}(b("React").Component);c.propTypes={pageID:a.string.isRequired,searchQuery:a.string.isRequired,maxLength:a.number.isRequired};e.exports=c}),null);
__d("PagesIntegrityTransparencyServerLoggingActions",["Event","PagesIntegrityEvent","PagesIntegrityEventTypedLogger","tidyEvent"],(function(a,b,c,d,e,f){"use strict";a={logOnClick:function(a,c,d,e,f,g){b("tidyEvent")(b("Event").listen(a,"click",function(a){new(b("PagesIntegrityEventTypedLogger"))().setVC(c).setPageID(f).setEvent(b("PagesIntegrityEvent").CLICK).setEventTarget(d).setEventCallsite(e).setTargetID(g).log()}))},logOnClickWithoutPageID:function(a,c,d,e){b("tidyEvent")(b("Event").listen(a,"click",function(a){new(b("PagesIntegrityEventTypedLogger"))().setVC(c).setEvent(b("PagesIntegrityEvent").CLICK).setEventTarget(d).setEventCallsite(e).log()}))}};e.exports=a}),null);
__d("PageTimelineViewportTracking",["csx","Banzai","DataAttributeUtils","DOM","TimelineViewportTrackingLogType","ViewportTracking","$","viewportTrackingBuilder"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function h(a){return{getAllStories:function(){return b("DOM").scry(b("$")("globalContainer"),"._5pat")},getStoryID:function(a){a=JSON.parse(b("DataAttributeUtils").getDataFt(a));return a&&a.top_level_post_id},getDataToLog:function(a){return JSON.parse(b("DataAttributeUtils").getDataFt(a))||{}},getStream:function(){return b("$")("globalContainer")},getDataFromConfig:function(a,b){b.isTimetrackingEnabled=!0}}}var i=function(c){__p&&__p();babelHelpers.inheritsLoose(a,c);function a(){return c.apply(this,arguments)||this}var d=a.prototype;d.getTimetrackingDataToLog=function(a){a=c.prototype.getTimetrackingDataToLog.call(this,a);a.log_type=b("TimelineViewportTrackingLogType").DURATION;return a};d.getAllStoriesFromCache=function(){return this.behavior.getAllStories()};d.sendDataToLog=function(a,c,d,e){if(!c.ft)return;a={};e&&(a.retry=e);d&&(a.delay=2e3);b("Banzai").post("page_timeline_vpv_tracking",c,a)};d.cleanup=function(){j.clearSingleton(),c.prototype.cleanup.call(this)};return a}(b("ViewportTracking")),j=b("viewportTrackingBuilder")(function(a){var b=new i(h(a));b.init(a);return b});j.init=j.singleton.bind(j);e.exports=j}),null);
__d("PagesPostsSearch",["cx","Arbiter","CSS","DOM","LoadingIndicator.react","React","ReactDOM","Run","SubscriptionsHandler","UIPagelet"],(function(a,b,c,d,e,f,g){__p&&__p();var h=100;a={searchPosts:function(a,c,d){this._pageID=a;this._postsContainer=c;this._searchResultsContainer=d;var e=new(b("SubscriptionsHandler"))();e.addSubscriptions(b("Arbiter").subscribe("PagesTimelineSearch/search",this._handleSearchBarAction.bind(this)));b("Run").onLeave(function(){return e.release()})},_handleSearchBarAction:function(a,c){var d=this;this._query=c.query;this._query!==""?this._handleSearch():this._handleClearField();setTimeout(function(){b("Arbiter").inform("PagesTimelineSearch/searchDone",{query:d._query})},h)},_handleSearch:function(){b("CSS").hide(this._postsContainer),b("ReactDOM").render(b("React").createElement("div",{className:"_3x9t"},b("React").createElement(b("LoadingIndicator.react"),{color:"white",size:"large"})),this._searchResultsContainer),b("UIPagelet").loadFromEndpoint("PagePostsSearchResultsPagelet",this._searchResultsContainer,{page_id:this._pageID,search_query:this._query})},_handleClearField:function(){b("DOM").setContent(this._searchResultsContainer,null),b("CSS").show(this._postsContainer)}};e.exports=a}),null);
__d("ReactionLogging",["DataStore","Event","MarauderLogger"],(function(a,b,c,d,e,f){__p&&__p();var g="reaction_logging";function a(a,c,d){b("DataStore").set(a,g,c),d&&b("Event").listen(a,"click",function(){h(a)})}function h(a){a=b("DataStore").get(a,g);if(!a||!a.logging_data)return;a=a.logging_data;b("MarauderLogger").log("reaction_unit_interaction","guide_cards_null_state",a)}e.exports={startLogTracking:a}}),null);
__d("MorePagerFetchOnScroll",["AsyncRequest","DOMQuery","Event","Style","Vector","throttle"],(function(a,b,c,d,e,f){__p&&__p();var g={};a=function(){"use strict";__p&&__p();function a(a,b,c){this._pager=a,this._offset=b||0,this._hasEventHandlers=!1,c&&this.setup(),g[a.id]=this}var c=a.prototype;c.setup=function(){this._scrollParent=b("Style").getScrollParent(this._pager),this.setPagerInViewHandler(this._defaultPagerInViewHandler.bind(this)),this.check()||(this._scrollListener=b("Event").listen(this._scrollParent,"scroll",b("throttle")(function(){this.check()}.bind(this),50)),this._clickListener=b("Event").listen(this._scrollParent,"click",b("throttle")(function(){this.check()}.bind(this),50)),this._hasEventHandlers=!0)};c.check=function(){__p&&__p();if(!b("DOMQuery").contains(document.body,this._pager)){this.removeEventListeners();return!0}var a=b("Vector").getElementPosition(this._pager).y,c=this._scrollParent===window?b("Vector").getViewportDimensions().y:b("Vector").getElementDimensions(this._scrollParent).y;c=this._scrollParent===window?b("Vector").getScrollPosition().y+c:b("Vector").getElementPosition(this._scrollParent).y+c;if(a-this._offset<c){this._inViewHandler();this.removeEventListeners();return!0}return!1};c.removeEventListeners=function(){this._hasEventHandlers&&(this._scrollListener&&this._scrollListener.remove(),this._clickListener&&this._clickListener.remove(),this._hasEventHandlers=!1)};c.setPagerInViewHandler=function(a){this._inViewHandler=a;return this};c._defaultPagerInViewHandler=function(){var a=b("DOMQuery").scry(this._pager,"a")[0];a&&b("AsyncRequest").bootstrap(a.getAttribute("ajaxify")||a.href,a)};a.getInstance=function(a){return g[a]};return a}();e.exports=a}),null);
__d("PagesPageWebsiteClickFalcoEvent",["FalcoLoggerInternal"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){}a.log=function(a){b("FalcoLoggerInternal").log("pages_page_website_click",a())};a.logImmediately=function(a){b("FalcoLoggerInternal").log("pages_page_website_click",a(),!0)};return a}();e.exports=a}),null);
__d("TBLPagesPageWebsiteClickFalcoEventWrapper",["PagesPageWebsiteClickFalcoEvent"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(){}a.log=function(a){b("PagesPageWebsiteClickFalcoEvent").log(function(){return a.data})};a.registerLogOnClick=function(a){a.element.addEventListener("click",function(){b("PagesPageWebsiteClickFalcoEvent").log(function(){return a.data})})};return a}();e.exports=a}),null);