/*!build time : 2014-08-14 5:32:31 PM*/
KISSY.add("kg/countdown/2.0.1/timer",function(a){function b(){for(;d.length;)d.shift()();var a=+new Date-b.nextTime,e=1+Math.floor(a/100);a=100-a%100,b.nextTime+=100*e;var f,g,h,i;for(h=0,i=c.length;i>h;h+=2)f=c[h+1],0===f?c[h](e):(f+=2*e-1,g=Math.floor(f/20),g>0&&c[h](g),c[h+1]=f%20+1);setTimeout(b,a)}var c=[],d=[];return b.nextTime=+new Date,b(),{add:function(a,b){d.push(function(){c.push(a),c.push(1e3===b?1:0)})},remove:function(b){d.push(function(){var d=a.indexOf(b,c);-1!==d&&c.splice(a.indexOf(b,c),2)})}}}),KISSY.add("kg/countdown/2.0.1/effect",function(a){var b={normal:{paint:function(){var b,c=this;a.each(c.hands,function(d){d.lastValue!==d.value&&(b="",a.each(c._toDigitals(d.value,d.bits),function(a){b+=c._html(a,"","digital")}),d.node.html(b))})}},slide:{paint:function(){var c,d,e,f,g=this;a.each(g.hands,function(a){if(a.lastValue!==a.value){for(c="",d=a.bits,e=g._toDigitals(a.value,d),f=void 0===a.lastValue?e:g._toDigitals(a.lastValue,d);d--;)c=f[d]!==e[d]?g._html([g._html(e[d],"","digital"),g._html(f[d],"","digital")],"slide-wrap")+c:g._html(e[d],"","digital")+c;a.node.html(c)}}),b.slide.afterPaint.apply(g)},afterPaint:function(){a.each(this.hands,function(a){if(a.lastValue!==a.value&&void 0!==a.lastValue){var b=a.node,c=b.one(".digital").height();b.css("height",c),b.all(".slide-wrap").css("top",-c).animate("top: 0",.5,"easeIn")}})}},flip:{paint:function(){var c,d,e,f=this;a.each(f.hands,function(b){b.lastValue!==b.value&&(c="",d="",e="",a.each(f._toDigitals(b.value,b.bits),function(a){d+=f._html(a,"","digital")}),void 0===b.lastValue?b.node.html(d):(d=f._html(d,"handlet"),a.each(f._toDigitals(b.lastValue,b.bits),function(a){e+=f._html(a,"","digital")}),c=f._html(e,"handlet mask"),e=f._html(e,"handlet"),b.node.html(d+e+c)))}),b.flip.afterPaint.apply(f)},afterPaint:function(){a.each(this.hands,function(a){if(a.lastValue!==a.value&&void 0!==a.lastValue){var b=a.node,c=b.all(".handlet"),d=c.item(0),e=c.item(1),f=c.item(2),g=b.width(),h=b.height(),i=Math.floor(h/2);e.css({clip:"rect("+i+"px, "+g+"px, "+h+"px, 0)"}),f.css({overflow:"hidden",height:i+"px"}),f.animate({top:i+"px",height:0},.15,"easeNone",function(){f.html(d.html()),f.css({top:0,height:i+"px",clip:"rect("+i+"px, "+g+"px, "+h+"px, 0)"}),f.animate("height: "+h+"px",.3,"bounceOut")})}})}}};return b},{requires:[]}),KISSY.add("kg/countdown/2.0.1/index",function(a,b,c,d,e,f){function g(b){if(!(this instanceof g))return new g(b);if(b.el=a.one(b.el),b.el){var c=b.el.attr("data-config");c&&(c=d.parse(c.replace(/'/g,'"')),b=a.merge(c,b)),g.superclass.constructor.call(this,b),this._init()}}var h="afterPaint";return a.extend(g,c,{_init:function(){var b=this,c=b.get("el"),d=[];b.hands=d,b.frequency=1e3,b._notify=[];var f=c.html(),g=b.get("varRegular");g.lastIndex=0,c.html(f.replace(g,function(a,c){("u"===c||"s-ext"===c)&&(b.frequency=100);var e="";return"s-ext"===c?(d.push({type:"s"}),d.push({type:"u"}),e=b._html("","s","handlet")+b._html(".","","digital")+b._html("","u","handlet")):d.push({type:c}),b._html(e,c,"hand")}));var h=b.get("clock");a.each(d,function(a){var b,d=a.type,e=100;for(a.node=c.one(".hand-"+d),b=h.length-3;b>-1&&d!==h[b];b-=3)e*=h[b+1];a.base=e,a.radix=h[b+1],a.bits=h[b+2]}),b._getLeft(),b._reflow();var i=b._reflow;b._reflow=function(){return i.apply(b,arguments)},e.add(b._reflow,b.frequency),c.show()},_getLeft:function(){var b=1e3*this.get("leftTime"),c=this.get("stopPoint");!b&&c&&(b=c-a.now()),this.left=b-b%this.frequency},_reflow:function(b){b=b||0;var c=this;return c.left=c.left-c.frequency*b,a.each(c.hands,function(a){a.lastValue=a.value,a.value=Math.floor(c.left/a.base)%a.radix}),c._repaint(),c._notify[c.left]&&a.each(c._notify[c.left],function(a){a.call(c)}),c.left<1&&e.remove(c._reflow),c},_repaint:function(){f[this.get("effect")].paint.apply(this),this.fire(h)},_toDigitals:function(a,b){a=0>a?0:a;for(var c=[];b--;)c[b]=a%10,a=Math.floor(a/10);return c},_html:function(b,c,d){switch(a.isArray(b)&&(b=b.join("")),d){case"hand":c=d+" hand-"+c;break;case"handlet":c=d+" hand-"+c;break;case"digital":c="."===b?d+" "+d+"-point "+c:d+" "+d+"-"+b+" "+c}return'<s class="'+c+'">'+b+"</s>"},notify:function(a,b){a=1e3*a,a-=a%this.frequency;var c=this._notify[a]||[];return c.push(b),this._notify[a]=c,this}},{ATTRS:{el:{},stopPoint:{},leftTime:{value:0},template:{},varRegular:{value:/\$\{([\-\w]+)\}/g},clock:{value:["d",100,2,"h",24,2,"m",60,2,"s",60,2,"u",10,1]},effect:{value:"normal"}}}),g},{requires:["node","base","json","./timer","./effect","./index.css"]});/*!build time : 2014-10-30 5:36:56 PM*/
KISSY.add("kg/sticky/2.0.0/index",function(a,b,c,d){"use strict";function e(a){e.superclass.constructor.call(this,a),this.initializer()}var f=c.all,g=f(document),h=["-webkit-","-ms-","-o-","-moz-",""],i=0,j=b.ie>0,k=6==b.ie;return a.extend(e,d,{initializer:function(){var a=this.get("top"),b=this.get("bottom");if(null!=a||null!=b)return null!=a?this._stickyType="top":null!=b&&(this._stickyType="bottom"),this._stickyId=i++,this.render(),this},destory:function(){return this._restore(),this.get("el").data("bind-sticked",!1),f(window).detach("scroll."+this._stickyId),f(window).detach("resize."+this._stickyId),this},refresh:function(){return this.destory().render(),this},render:function(){var a=this.get("el"),b=this.get("top");if(a.length&&!a.data("bind-sticked")){var c=this._originTop=a.offset().top,d=!1;b===Number.MAX_VALUE&&(d=!0,"top"==this._stickyType,this.set("top",b=c)),"bottom"==this._stickyType&&(d=!0);var e=this._originStyles={position:null,top:null,left:null};for(var g in e)e.hasOwnProperty(g)&&(this._originStyles[g]=a.css(g));var i;if(this.isPositionStickySupported()&&!d){i=this._supportSticky;for(var k="",l=0;l<h.length;l++)k+="position:"+h[l]+"sticky;";a[0].style.cssText+=k+"top: "+b+"px;"}else this.isPositionFixedSupported()?i=this._supportFixed:(i=this._supportAbsolute,f('<style type="text/css"> * html{ background:url(null) no-repeat fixed; } </style>').appendTo("head"));i.call(this);var m=this;return f(window).on("scroll."+this._stickyId,function(){"none"!==!a[0].style.display&&"hidden"!==a[0].style.visibility&&i.call(m)}),j||"bottom"!=this._stickyType||f(window).on("resize."+this._stickyId,function(){m.refresh()}),a.data("bind-sticked",!0),this}},_supportAbsolute:function(){var b=this.get("el"),c=this.get("top"),d=this.get("bottom"),e=this.get("target")||a.one("body"),f=this._originTop-g.scrollTop();if("top"==this._stickyType)c>=f?(b.data("sticked")||(this._addPlaceholder(),b.data("sticked",!0),this.get("callback").call(this,!0)),b.css({position:"absolute",top:c+g.scrollTop()-e.offset().top})):b.data("sticked")&&f>c&&this._restore();else if("bottom"==this._stickyType){var h=a.DOM.viewportHeight(),i=h-d-b.height();f>=i?(b.data("sticked")||(this._addPlaceholder(),b.data("sticked",!0),this.get("callback").call(this,!0)),b.css({position:"absolute",top:i+g.scrollTop()-e.offset().top})):b.data("sticked")&&i>f&&this._restore()}},_supportFixed:function(){var b=this.get("el"),c=this.get("top"),d=this.get("bottom"),e=this._originTop-g.scrollTop();if("top"==this._stickyType)if(!b.data("sticked")&&c>=e){var f=b.offset().left;this._addPlaceholder(),b.css({position:"fixed",top:c,left:f}),b.data("sticked",!0),this.get("callback").call(this,!0)}else b.data("sticked")&&e>c&&this._restore();else if("bottom"==this._stickyType){var h=a.DOM.viewportHeight(),i=h-d-b.height();if(!b.data("sticked")&&e>=i){var f=b.offset().left;this._addPlaceholder(),b.css({position:"fixed",top:i,left:f}),b.data("sticked",!0),this.get("callback").call(this,!0)}else b.data("sticked")&&i>e&&this._restore()}},_supportSticky:function(){var a=this.get("el"),b=this.get("top"),c=this.get("callback"),d=this._originTop-g.scrollTop();!a.data("sticked")&&b>=d?(a.data("sticked",!0),c.call(this,!0)):a.data("sticked")&&d>b&&c.call(this,!1)},_restore:function(){this._removePlaceholder();var a=this.get("el");a.css(this._originStyles),a.data("sticked",!1),this.get("callback").call(this,!1)},_addPlaceholder:function(){var a=!1,b=this.get("el"),c=b.css("position");("static"===c||"relative"===c)&&(a=!0),"block"!==b.css("display")&&(a=!1),a&&(this._placeholder=f('<div style="visibility:hidden;margin:0;padding:0;"></div>'),this._placeholder.width(b.outerWidth(!0)).height(b.outerHeight(!0)).css("float",b.css("float")).insertAfter(b))},_removePlaceholder:function(){this._placeholder&&this._placeholder.remove()},isPositionFixedSupported:function(){return!k},isPositionStickySupported:function(){if(j)return!1;var a=g[0].body;if(g[0].createElement&&a&&a.appendChild&&a.removeChild){var b=!1,c=g[0].createElement("div"),d=function(a){return window.getComputedStyle?window.getComputedStyle(c).getPropertyValue(a):c.currentStyle.getAttribute(a)};a.appendChild(c);for(var e=0;e<h.length&&(c.style.cssText="position:"+h[e]+"sticky;visibility:hidden;",!(b=-1!==d("position").indexOf("sticky")));e++);return c.parentNode.removeChild(c),b}}},{ATTRS:{el:{value:null,setter:function(a){return f(a)}},target:{value:null,setter:function(a){return f(a)}},top:{value:null,setter:function(a){return isNaN(a)?!1:void 0}},bottom:{value:null,setter:function(a){return isNaN(a)?!1:void 0}},callback:{value:function(){}}}}),e.fixed=function(a){return new e({el:a,top:Number.MAX_VALUE})},e},{requires:["ua","node","base"]});