if (self.CavalryLogger) { CavalryLogger.start_js(["yZfJe"]); }

__d("VideoWithImmediateAbortLoading",[],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";function a(){}var b=a.prototype;b.enable=function(a){this.$1=a,a.getStreamingFormat()==="dash"&&(a.abortLoading(),a.registerOption("VideoWithImmediateAbortLoading","isWithImmediateAbortLoading"))};b.disable=function(){this.$1.hasOption("VideoWithImmediateAbortLoading","isWithImmediateAbortLoading")&&this.$1.unregisterOption("VideoWithImmediateAbortLoading","isWithImmediateAbortLoading"),this.$1=null};return a}();e.exports=a}),null);
__d("TahoeEllipsisText.react",["DOMContainer.react","LineClamp.react","Link.react","React"],(function(a,b,c,d,e,f){__p&&__p();a=b("React").PropTypes;c=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props.seeMoreLink&&this.props.seeMoreText?b("React").createElement(b("Link.react"),{href:this.props.seeMoreLink},this.props.seeMoreText):"\u2026";return b("React").createElement(b("LineClamp.react"),{lines:this.props.lines,lineHeight:this.props.lineHeight,customEllipsisDisableGradient:!1,customEllipsis:a,fitHeightToShorterText:this.props.fitHeightToShorterText},b("React").createElement(b("DOMContainer.react"),null,this.props.content))};return c}(b("React").Component);c.propTypes={content:a.object.isRequired,lines:a.number.isRequired,lineHeight:a.number.isRequired,seeMoreLink:a.string,seeMoreText:a.string,fitHeightToShorterText:a.bool};e.exports=c}),null);