!function(t){"use strict";function e(t,e){if("undefined"==typeof e||null===e)return null;var o;return o="number"==typeof e?":eq("+e+")":"first"===e||"last"===e?":"+e:e,0===t.children().filter(o).length&&(o=":eq(0)"),t.children().filter(o)}function o(e){var o=e.attr("data-"+n+"-parameter");if("undefined"!=typeof o){o=o.split(",");var i,a=o.length,r={};for(i=0;i<a;i++){var l=t.trim(o[i]).split(":");"true"===l[1]?l[1]=!0:"false"===l[1]?l[1]=!1:isNaN(Number(l[1]))||(l[1]=Number(l[1])),r[l[0]]=l[1]}t.extend(!0,e.data(n),r)}}var n="libScroll",i=navigator.userAgent.toLowerCase(),a="ontouchstart"in window,r=function(){return i.indexOf("android 2.")>=0}(),l=function(){if(!a||i.match("android"))return!1;if(i.match("applewebkit")){var t=(i+";").replace(/ /g,";"),e=t.indexOf("applewebkit/")+"applewebkit/".length,o=t.indexOf(";",e),n=parseFloat(t.substring(e,o));if(n<600)return!0}}(),f=(function(){return!a||!r&&!l}(),{initialize:function(i){return this.each(function(){t(this).data(n,t.extend(!0,{id:t(this).attr("data-"+n+"-id"),from:null,to:null,$from:null,$to:null,minDuration:150,maxDuration:300,delay:1e3,isInitial:!1,originalOffset:t(this).offset(),scrollMode:"left",scrollBefore:null,scrollAfter:null},i));var u=t(this),s=u.data(n),c=s.id;o(t(this)),"undefined"==typeof c&&(c=n+"-"+t("[data-"+n+"]").index(this),u.attr("data-"+n+"-id",c),s.id=c),a&&r&&f.swipeScroll.apply(u),s.$from=e(u,s.from),s.$to=e(u,s.to),null!==s.$from&&u.scrollLeft(s.$from.offset().left-s.originalOffset.left),null!==s.$to&&f.autoScroll.apply(u),l&&f.resizeReflow.apply(u)})},autoScroll:function(){var e,o,i,a=t(this),u=a.data(n),s=a.scrollLeft(),c=u.$to,d=function(){var e,o=a.css("background");""===o&&(o="transparent"),e=t("<style data-"+n+'-parts="css">').append("[data-"+n+"]{background: "+o+";}").insertAfter(a),setTimeout(function(){e.remove()},100)};if(f.applyCallback.apply([a,"scrollBefore"]),o=s+c.offset().left-u.originalOffset.left,0!==o&&u.$from[0]!==c[0]){if(r||l)return a.scrollLeft(o),void f.applyCallback.apply([a,"scrollAfter"]);"center"===u.scrollMode&&(o+=c.outerWidth()-.5*a.outerWidth()-.5*c.outerWidth()),o=Math.round(o),e=Math.abs(Math.abs(s)-Math.abs(o)),e=e<u.minDuration?u.minDuration:e,e=e>u.maxDuration?u.maxDuration:e,u.isInitial?i=0:(u.isInitial=!0,i=u.delay),setTimeout(function(){a.stop().animate({scrollLeft:o},e,"swing").promise().done(function(){d(),f.applyCallback.apply([a,"scrollAfter"])})},i)}},goto:function(){var o=t(this),i=o.data(n),a=arguments[0];i.$to=e(o,a),f.autoScroll.apply(o)},swipeScroll:function(){var e=t(this),o=0,i=0,a=0,r=!1,l="touchstart."+n+" mousedown."+n,u="touchmove."+n+" mousemove."+n,s="touchend."+n+" mouseup."+n+" mouseout."+n;e.on(l,function(e){r=!0,"mousedown"==e.type&&e.preventDefault(),a=t(this).scrollLeft(),o=f.getTouchPostion(e,"x"),i=f.getTouchPostion(e,"y")}).on(u,function(e){if(r){var n=f.getTouchPostion(e,"x"),l=f.getTouchPostion(e,"y"),u=f.checkAngle(o,n,i,l);if(u){e.preventDefault();var s=a+(o-f.getTouchPostion(e,"x"));t(this).scrollLeft(s)}}}).on(s,function(){r&&(r=!1)})},getTouchPostion:function(t,e){return"x"==e?"object"==typeof t.originalEvent.changedTouches?t.originalEvent.changedTouches[0].pageX:t.pageX:"y"==e?"object"==typeof t.originalEvent.changedTouches?t.originalEvent.changedTouches[0].pageY:t.pageY:void 0},checkAngle:function(t,e,o,n){var i=45,a=t-e,r=n-o,l=Math.atan2(r,a)/(Math.PI/180);if(180==l||l==-180)return!0;if(a>0&&r>0){if(l<i)return!0}else if(a<0&&r>0){if(l>180-i)return!0}else if(a>0&&r<0){if(l>i*-1)return!0}else if(a<0&&r<0&&l<-180+i)return!0;return!1},applyCallback:function(){var t=this[0],e=t.data(n),o=this[1];"function"==typeof e[o]&&e[o]()},resizeReflow:function(){var e=t(this),o=e.data(n);o.originalOffset=e.offset(),t(window).on("resize."+n,function(){e.css({"padding-right":"+=1"}),setTimeout(function(){e.css({"padding-right":""})},100)})},destroy:function(){var e=t(this),o=e.data(n);"undefined"!=typeof o&&(e.off("."+n),e.removeData(n))}});t.fn[n]=function(t){return f[t]?f[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void 0:f.initialize.apply(this,arguments)}}(jQuery);