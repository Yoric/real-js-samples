if (self.CavalryLogger) { CavalryLogger.start_js(["pQBJm"]); }

__d("MetricsValidationSignalTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:MetricsValidationSignalLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:MetricsValidationSignalLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:MetricsValidationSignalLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setAppID=function(a){this.$1.app_id=a;return this};c.setContext=function(a){this.$1.context=b("GeneratedLoggerUtils").serializeMap(a);return this};c.setErrorFields=function(a){this.$1.error_fields=b("GeneratedLoggerUtils").serializeVector(a);return this};c.setErrorMessages=function(a){this.$1.error_messages=b("GeneratedLoggerUtils").serializeVector(a);return this};c.setErrorTypes=function(a){this.$1.error_types=b("GeneratedLoggerUtils").serializeVector(a);return this};c.setEventFields=function(a){this.$1.event_fields=b("GeneratedLoggerUtils").serializeVector(a);return this};c.setEvents=function(a){this.$1.events=b("GeneratedLoggerUtils").serializeVector(a);return this};c.setLogVersion=function(a){this.$1.log_version=a;return this};c.setMetrics=function(a){this.$1.metrics=b("GeneratedLoggerUtils").serializeVector(a);return this};c.setResult=function(a){this.$1.result=a;return this};c.setSystem=function(a){this.$1.system=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setType=function(a){this.$1.type=a;return this};c.setValidator=function(a){this.$1.validator=a;return this};c.setVolume=function(a){this.$1.volume=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={app_id:!0,context:!0,error_fields:!0,error_messages:!0,error_types:!0,event_fields:!0,events:!0,log_version:!0,metrics:!0,result:!0,system:!0,time:!0,type:!0,validator:!0,volume:!0,weight:!0};e.exports=a}),null);
__d("ViewableSessionStore",["BanzaiODS","CurrentUser","MetricsValidationSignalTypedLogger","ge","getViewportDimensions","setTimeout"],(function(a,b,c,d,e,f){__p&&__p();var g="viewable_session_validation",h={};function a(a,c,d){try{var e=k(a);h[e]||(h[e]={context:a,isValid:!1});i(e,c,d);!h[e].isValid?j(e)&&(h[e].isValid=!0):j(e)||(h[e].isValid=!1,h[e].invalidTime=Date.now())}catch(a){b("BanzaiODS").bumpEntityKey(g,"error.onViewUpdate."+a.message)}}function i(a,b,c){__p&&__p();var d;c=c.getBoundingClientRect();var e=c.bottom,f=c.top,g=c.left;c=c.right;var i={};d=(d=(d=h[a])==null?void 0:(d=d.boundaryDimensions)==null?void 0:d.ref)!=null?d:0;switch(b){case"top":i={top:e,left:g,right:c,ref:++d};break;case"bottom":i={bottom:f,left:g,right:c,ref:--d};break}h[a]=babelHelpers["extends"]({},h[a],{boundaryDimensions:babelHelpers["extends"]({},(b=h[a])==null?void 0:b.boundaryDimensions,i)})}function j(a){a=(a=h[a])==null?void 0:a.boundaryDimensions;if(a==void 0)return!1;var c=b("ge")("pagelet_bluebar"),d=b("getViewportDimensions")(),e=d.width;d=d.height;c=c!=null?c.offsetHeight+c.offsetTop:0;return a.top!=void 0&&a.bottom!=void 0&&a.top<a.bottom&&a.top<d&&a.bottom>c&&a.left<a.right&&a.left<e&&a.right>0}function k(a){return a.postId}function l(a){var b=h[a];if(b==void 0)return!1;var c=b.invalidTime;return b.isValid===!0||c!=void 0&&Date.now()-c<1e3||j(a)}function m(a,c,d,e){__p&&__p();e===void 0&&(e=1);try{var f,i;f="event_logged."+a+"."+((f=d)!=null?f:"null")+".";i=new(b("MetricsValidationSignalTypedLogger"))().setSystem("WEB_CLIENT").setValidator("VIEWABLE_SESSION_VALIDATOR").setEvents([a]).setContext({userid:b("CurrentUser").getAccountID(),sessionKey:c,sessionDetail:JSON.stringify(h[c]),storyLocation:(i=d)!=null?i:"null",viewportDimensions:JSON.stringify(b("getViewportDimensions")())}).setType("n/a");if(l(c))i.setResult(0),b("BanzaiODS").bumpEntityKey(g,f+"pass");else{if(e>0){b("setTimeout")(function(){m(a,c,d,e-1)},500);return}i.setResult(1).setErrorFields([a]).setErrorTypes(["over-logging"]).setErrorMessages(["events are logged when component is not visible"]);b("BanzaiODS").bumpEntityKey(g,f+"overlogging")}i.log()}catch(a){b("BanzaiODS").bumpEntityKey(g,"error.onEventLogged."+a.message)}}e.exports={ViewableSessionStore:h,onViewUpdate:a,onEventLogged:m}}),null);
__d("ViewableSessionValidationBoundary.react",["Event","React","ViewableSessionStore","ViewableSessionValidationConfig","throttle"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("ViewableSessionStore").onViewUpdate;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),h=0;h<e;h++)f[h]=arguments[h];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$5=function(a){return d.$4=a},d.$6=function(){d.$4&&g(d.props.viewableSessionContext,d.props.boundaryLocation,d.$4)},d.$9=b("ViewableSessionValidationConfig").throttle_timeout!=null?b("throttle").acrossTransitions(d.$6,b("ViewableSessionValidationConfig").throttle_timeout):d.$6,c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentDidMount=function(){this.$6(),this.$7()};d.componentWillUnmount=function(){this.$8()};d.render=function(){return b("React").createElement("div",{ref:this.$5})};d.$7=function(){var a={attributes:!0,subtree:!0};this.$3=new MutationObserver(this.$9);this.$3.observe(document,a);this.$1=b("Event").listen(window,"scroll",this.$9);this.$2=b("Event").listen(window,"resize",this.$9)};d.$8=function(){this.$3.disconnect(),this.$1&&this.$1.remove(),this.$2&&this.$2.remove()};return c}(b("React").PureComponent);e.exports=a}),null);