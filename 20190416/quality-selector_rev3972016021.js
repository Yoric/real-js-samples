define(["video-html5/storage","util/helpers"],function(a,b){"use strict";return{getVideoQuality:function(c,d){var e,f,g=a.getParam("quality"),h=this.getQualityByIndex(c,g);return h||(f=b.os.isMobile()||d?["sd","md1","md2","hd","full_hd"]:["hd","full_hd","md2","md1","sd"],e=this.getQualityByIndex(c,f)),h||e},getQualityByIndex:function(a,c){var d,e;if(b.isString(c))for(d=0;d<a.length;d++)if(a[d].name===c)return a[d];if(b.isArray(c))for(d=0;d<c.length;d++)for(e=0;e<a.length;e++)if(c[d]===a[e].name)return a[e];return a[0]}}});