/* product-search/0.0.1 responsive.js Date:2014-12-09 13:24:02 */
define("product/search/js/responsive.js",[],function(require,a,b){var c={};c.init=function(){var a=this;this.mediaQueriesSupport()||(this.setResponsiveLevel(),this.bindEvent(function(){a.setResponsiveLevel()}))},c.mediaQueriesSupport=function(){var a=$.browser.msie&&$.browser.version<9;return!a},c.bindEvent=function(a,b){var a=a||function(){},b=b||20,d=null;$(window).resize(function(){clearTimeout(d),d=setTimeout(function(){a()},b)})},c.setResponsiveLevel=function(){var a=$(window).width();console.log(a),1210>a?$("html").removeClass():$("html").removeClass().addClass(a>=1210&&1390>a?"resp01":"resp02")},b.exports=c});
