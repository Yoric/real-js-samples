if (self.CavalryLogger) { CavalryLogger.start_js(["BiIuE"]); }

__d("AggregateError",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(b,a);function b(c,d){var e;d=(d=d)!=null?d:g(c);e=a.call(this,d)||this;e.name="AggregateError";e.errors=c;e.message=d;Error.captureStackTrace&&Error.captureStackTrace(babelHelpers.assertThisInitialized(e),b);return e}return b}(babelHelpers.wrapNativeSuper(Error));function g(a){if(a.length===0)return"No errors";return a.length===1?a[0].message:a.map(function(a){return"- "+a.message}).join("\n")}e.exports=a}),null);