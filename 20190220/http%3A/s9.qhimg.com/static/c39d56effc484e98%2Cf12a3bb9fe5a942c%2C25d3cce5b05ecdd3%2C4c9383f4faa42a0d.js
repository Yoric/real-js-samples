(function(e,t,n,r){e.switchable={Config:{panels:".items > *",initIndex:0,effect:"scroll",loop:!1,onBeforeSwitch:null,onSwitch:null},Effects:{none:function(e,t){var n=this,r=n.panels;r.slice(e,e+1).hide(),r.slice(t,t+1).show()}},Plugins:[]};var i=function(n,i){var s=this,o=e(this),u="beforeSwitch",a="switch";e.extend(s,{_initPlugins:function(){var t=e.switchable.Plugins,n=t.length,r=0;for(;r<n;r++)e.isFunction(t[r].init)&&t[r].init(s)},_warn:function(e){t.console&&t.console.warn&&console.warn(e)},_init:function(){s.root=n,s.config=i;var t=e(n),r;if(t[0]._switchable)return;if(!t.find(i.panels).length){s._warn("No panel in switchable");return}s.panels=t.find(i.panels),s.length=s.panels.length;if(s.length<1){s._warn("No panel group in switchable");return}return e.isFunction(i.onBeforeSwitch)&&o.on(u,i.onBeforeSwitch),e.isFunction(i.onSwitch)&&o.on(a,i.onSwitch),s.index=(i.initIndex%s.length+s.length)%s.length,s._nextIndex=s.index,r=s.panels.slice(s.index,s.index+1),i.effect.toLowerCase()==="none"&&(s.panels.not(r).hide(),r.show()),t[0]._switchable=this,!0},_switchPanels:function(t,n){if(n===t)return;i.effect=i.effect.toLowerCase();if(!i.effect||!e.switchable.Effects[i.effect]){s._warn("No switch effect");return}e.switchable.Effects[i.effect].call(s,t,n)},switchTo:function(t){t%=s.length;if(t===s.index)return s;s._nextIndex=t;var n=e.Event(u);o.trigger(n,[t]);if(n.isDefaultPrevented())return;return s._switchPanels(s.index,t),s.index=t,n.type=a,o.trigger(n,[t]),s},willTo:function(){return s._nextIndex},destroy:function(){s._destroyPlugins(),s._destroy()},_destroyPlugins:function(){var t=e.switchable.Plugins,n=t.length,r=0;for(;r<n;r++)e.isFunction(t[r].destroy)&&t[r].destroy(s)},_destroy:function(){var t;e(n)[0]._switchable=r;for(t in s)delete s[t]}});if(!s._init())return e(n)[0]._switchable;s._initPlugins()};e.fn.switchable=function(t){var n=e(this),r=n.length,s=[],o;t=e.extend({},e.switchable.Config,t);for(o=0;o<r;o++)s[o]=new i(n.eq(o),t);return s[0]}})(jQuery,window,document),function(e,t,n,r){if(!e.switchable)return;e.extend(e.switchable.Config,{duration:500,easing:"ease"}),e.switchable.Animate=function(t,n,s,o,u,a){var f=this,l={},c,h;e.switchable.Transition===r&&(e.switchable.Transition=i()),c=e.switchable.Transition,e.extend(f,{isAnimated:!1,run:function(){if(f.isAnimated)return;f._start();var t,r=[];for(t in s)r.push(t);if(c)l[c+"Property"]=r.join(", ")||"all",l[c+"Duration"]=o+"ms",l[c+"TimingFunction"]=u,n.css(e.extend(s,l)),h=setTimeout(function(){f._clearCss(),f._complete()},o);else{var i=/cubic-bezier\(([\s\d.,]+)\)/,a=u.match(i),p=e.switchable.TimingFn[u];if(p||a)u=e.switchable.Easing(a?a[1]:p.match(i)[1]);n.animate(s,o,u,function(){f._complete()})}return f.isAnimated=!0,f},stop:function(e){if(!f.isAnimated)return;return c?(clearTimeout(h),h=r,e&&(f._clearCss(),f._complete())):n.stop(!1,e),f.isAnimated=!1,f},_start:function(){e.isFunction(t.config.animateStart)&&t.config.animateStart(t.index)},_complete:function(){e.isFunction(a)&&a()},_clearCss:function(){l[c+"Property"]="none",n.css(l)}}),f.run()};var i=function(){var e=n.documentElement,t=["Webkit","Moz"],i="transition",s="",o;if(e.style[i]!==r)s=i;else for(o=0;o<2;o++)if(e.style[i=t[o]+"Transition"]!==r){s=i;break}return s}}(jQuery,window,document),function(e,t,n,r){if(!e.switchable)return;var i=function(e){return"cubic-bezier("+e+")"},s=function(e){var t=[],n=101,r;for(r=0;r<=n;r++)t[r]=e.call(null,r/n);return function(e){if(e===1)return t[n];var r=n*e,i=Math.floor(r),s=t[i],o=t[i+1];return s+(o-s)*(r-i)}},o=function(e,t,n,r,i,s){function h(e){return((o*e+u)*e+a)*e}function p(e){return((f*e+l)*e+c)*e}function d(e){return(3*o*e+2*u)*e+a}function v(e){return 1/(200*e)}function m(e,t){return p(g(e,t))}function g(e,t){function a(e){return e>=0?e:0-e}var n,r,i,s,o,u;for(i=e,u=0;u<8;u++){s=h(i)-e;if(a(s)<t)return i;o=d(i);if(a(o)<1e-6)break;i-=s/o}n=0,r=1,i=e;if(i<n)return n;if(i>r)return r;while(n<r){s=h(i);if(a(s-e)<t)return i;e>s?n=i:r=i,i=(r-n)*.5+n}return i}var o,u,a,f,l,c;return o=u=a=f=l=c=0,a=3*t,u=3*(r-t)-a,o=1-a-u,c=3*n,l=3*(i-n)-c,f=1-c-l,m(e,v(s))};e.switchable.TimingFn={ease:i(".25, .1, .25, 1"),linear:i("0, 0, 1, 1"),"ease-in":i(".42, 0, 1, 1"),"ease-out":i("0, 0, .58, 1"),"ease-in-out":i(".42, 0, .58, 1")},e.switchable.Easing=function(n){var r,u,a=0,f;n=n.split(","),u=n.length;for(;a<u;a++)n[a]=parseFloat(n[a]);return u!==4?t.console&&console.warn(i(n.join(", "))+" missing argument."):(r="cubic-bezier-"+n.join("-"),e.easing[r]||(f=s(function(e){return o(e,n[0],n[1],n[2],n[3],5)}),e.easing[r]=function(e){return f.call(null,e)})),r}}(jQuery,window,document),function(e,t,n,r){if(!e.switchable)return;e.switchable.Effects.fade=function(t,n){var i=this,s=i.config,o=i.panels,u=o.slice(t,t+1),a=o.slice(n,n+1),f=function(){a.css({opacity:1})},l=function(){a.css({zIndex:i.length}),u.css({zIndex:1}),i._anim=r};i._anim&&i._anim.stop(!0),f(),i._anim=new e.switchable.Animate(i,u,{opacity:0},s.duration,s.easing,l)},e.switchable.Plugins.push({name:"fade effect",init:function(e){var t=e.config,n=e.panels,r=e.index,i=n.slice(r,r+1);t.effect.toLowerCase()==="fade"&&(n.css({position:"absolute",top:0,left:0}),n.not(i).css({opacity:0,zIndex:1}),i.css({opacity:1,zIndex:e.length}))},destroy:function(e){e._anim&&e._anim.stop(!0)}})}(jQuery,window,document),function(e,t,n,r){if(!e.switchable)return;var i="position",s="absolute",o="relative";e.extend(e.switchable.Config,{horiz:!0}),e.switchable.Effects.scroll=function(t,n){var i=this,s=i.config,o=i._data,u=t===0&&n===o.max,a=(u||t===o.max&&n===0)&&i._circle,f={},l=function(){f[o.prop]=a?i._adjustPosition(u):-o.size*n},c=function(){a&&i._resetPosition(u),i._anim=r};i._anim&&i._anim.stop(!0),setTimeout(function(){l(),i._anim=new e.switchable.Animate(i,o.wrap,f,s.duration,s.easing,c)},0)},e.switchable.Plugins.push({name:"scroll effect",init:function(t){var n=t.config,u=t.panels,a=u.eq(0).outerWidth(!0),f=u.eq(0).outerHeight(!0),l={},c=t._data={wrap:u.parent(),max:t.length-1,prop:n.horiz?"left":"top",size:n.horiz?a:f};if(n.effect.toLowerCase()!=="scroll")return;n.loop,t.root.css(i)==="static"&&t.root.css(i,o),l[i]=s,l[c.prop]=-c.size*t.index,c.wrap.css(l).css("width",n.horiz?a*t.length:a),t.isHoriz=n.horiz,e.extend(t,{_adjustPosition:function(e){var n=e?c.max:0;return l[i]=o,l[c.prop]=(e?-1:1)*c.size*t.length,u.slice(n,n+1).css(l),e?c.size:-c.size*t.length},_resetPosition:function(e){var t=e?c.max:0;l[i]="",l[c.prop]="",u.slice(t,t+1).css(l),l[i]=r,l[c.prop]=e?-c.size*c.max:0,c.wrap.css(l)}})},destroy:function(e){e._anim&&e._anim.stop(!0)}})}(jQuery,window,document),function(e,t,n,r){if(!e.switchable)return;e.extend(e.switchable.Config,{autoplay:!1,interval:3e3,pauseOnHover:!0,isBackward:!1}),e.switchable.Plugins.push({name:"autoplay",init:function(t){var n=t.config,i=!1,s,o,u,a=function(){u=t.willTo();if(u===!1){t._cancelTimers();return}u===0&&!n.isBackward||u===t.length-1&&n.isBackward?t._circle=!0:t._circle=!1,t.switchTo(u)},f=function(){var e=n.duration||0;o=setInterval(function(){a()},n.interval+e)},l=function(e,r){if(!n.loop&&n.isBackward&&t.index===0)return;if(!n.loop&&!n.isBackward&&t.index===t.length-1)return;var i=1;n.isBackward&&(i=-1),t._nextIndex=(r+i+t.length)%t.length,t._circle=!1};if(!n.autoplay||t.length<=1)return;l(r,t.index),n.pauseOnHover&&t.panels.on("mouseenter.switchAutoplay",function(){t._pause()}).on("mouseleave.switchAutoplay",function(){i||t._play()}),e(t).on("switch",l),e.extend(t,{_play:function(){t._cancelTimers(),t.paused=!1,s=setTimeout(function(){a(),f()},n.interval)},_pause:function(){t._cancelTimers(),t.paused=!0},_cancelTimers:function(){s&&(clearTimeout(s),s=r),o&&(clearInterval(o),o=r)},play:function(){return t._play(),i=!1,t},pause:function(){return t._pause(),i=!0,t}}),t._play()},destroy:function(e){if(!e.config.autoplay||e.length<=1)return;e._pause(),e.panels.off(".switchAutoplay")}})}(jQuery,window,document),function(e,t,n,r){if(!e.switchable)return;e.extend(e.switchable.Config,{triggers:".slide-pagination a",currentTrigger:"active",triggerType:"hover",delay:100}),e.switchable.Plugins.push({name:"trigger",init:function(t){var n=t.config,i=e(t.root),s,o,u=i.find(n.triggers).length;if(!u)return;while(u<t.length)i.find(n.triggers).slice(0,1).clone().insertAfter(i.find(n.triggers).last()),u=i.find(n.triggers).length;t.triggers=i.find(n.triggers).slice(0,t.length),t.triggers.removeClass(n.currentTrigger).eq(t.index).addClass(n.currentTrigger),t.triggers.on("click.switchTrigger",function(n){n.preventDefault(),s=e(this).index(),t._cancelDelayTimer(),t.switchTo(s)}),n.triggerType==="hover"&&t.triggers.on("mouseenter.switchTrigger",function(){s=e(this).index(),t._delayTimer=setTimeout(function(){t.switchTo(s)},n.delay)}).on("mouseleave.switchTrigger",function(){t._cancelDelayTimer()}),e(t).on("switch",function(e,n){t._switchTrigger(n)}),n.autoplay&&n.pauseOnHover&&t.triggers.on("mouseenter.switchTrigger",function(){o=t.paused,t._pause()}).on("mouseleave.switchTrigger",function(){o||t._play()}),e.extend(t,{_cancelDelayTimer:function(){t._delayTimer&&(clearTimeout(t._delayTimer),t._delayTimer=r)},_switchTrigger:function(e){t.triggers.removeClass(n.currentTrigger).eq(e).addClass(n.currentTrigger)}})},destroy:function(t){e(t.root).find(t.config.triggers).length&&(t.triggers.off("click.switchTrigger"),t.triggers.off(".switchTrigger"))}})}(jQuery,window,document),function(e,t,n,r){if(!e.switchable)return;e.extend(e.switchable.Config,{prev:".prev",next:".next",disabledClass:"disabled",respondinAnimating:!0}),e.switchable.Plugins.push({name:"carousel",init:function(t){var n=t.config,r=["prev","next"],i,s,o=0,u,a,f=function(e,r){if(!n.loop&&r&&e===0)return;if(!n.loop&&!r&&e===t.length-1)return;var i=1;r&&(i=-1),t._nextIndex=(e+i+t.length)%t.length};if(!e(t.root).find(n.prev).length&&!e(t.root).find(n.next).length)return;for(;o<2;o++){i=r[o],s=e(t.root).find(n[i]);if(!s.length)continue;t[i+"Btn"]=s}e(t.root).find(n.prev).on("click.switchCarousel",function(r){r.preventDefault();if(!e(this).hasClass(n.disabledClass)){if(t._anim){if(!n.respondinAnimating)return;t._anim.stop(!0)}f(t.index,!0),u=t.willTo(),u===t.length-1?t._circle=!0:t._circle=!1,t.switchTo(u)}}),e(t.root).find(n.next).on("click.switchCarousel",function(r){r.preventDefault();if(!e(this).hasClass(n.disabledClass)){if(t._anim){if(!n.respondinAnimating)return;t._anim.stop(!0)}f(t.index,!1),u=t.willTo(),u===0?t._circle=!0:t._circle=!1,t.switchTo(u)}}),n.autoplay&&n.pauseOnHover&&e(t.root).find(n.prev+", "+n.next).on("mouseenter.switchCarousel",function(){a=t.paused,t._pause()}).on("mouseleave.switchCarousel",function(){a||t._play()}),e(t).on("switch",function(){t.nextBtn&&(t.nextBtn.removeClass(n.disabledClass),!n.loop&&t.index===t.length-1&&t.nextBtn.addClass(n.disabledClass)),t.prevBtn&&(t.prevBtn.removeClass(n.disabledClass),!n.loop&&t.index===0&&t.prevBtn.addClass(n.disabledClass)),t._circle=!1})},destroy:function(t){e(t.root).find(t.config.prev).length&&e(t.root).find(t.config.prev).off(".switchCarousel"),e(t.root).find(t.config.next).length&&e(t.root).find(t.config.next).off(".switchCarousel")}})}(jQuery,window,document),function(e,t,n,r){if(!e.switchable)return;e.extend(e.switchable.Config,{indexOffset:1,numFormat:"[index]/[length]",switchNum:".slide-text"}),e.switchable.Plugins.push({name:"switchnum",init:function(t){var n=t.config,r=function(e,t){var r=n.numFormat.replace(/\[index\]/ig,e+n.indexOffset);return r.replace(/\[length\]/ig,t)};if(!n.switchNum&&e(t.root).find(n.switchNum).length)return;e(t.root).find(n.switchNum).html(r(n.initIndex,t.length)),e(t).on("switch",function(){e(t.root).find(n.switchNum).html(r(t.index,t.length))})}})}(jQuery,window,document),function(e,t,n,r){e.extend(e.switchable.Config,{lazyloadCls:"switchlazyload"}),e.switchable.Plugins.push({name:"lazyload",init:function(t){var n=t.config.lazyloadCls,r=function(e){if(e.hasClass(n)){var t=e.val().trim();return e.replaceWith(t),!0}return!1};e(t).on("beforeSwitch",function(){e(t.panels).each(function(t,i){r(e(i))||r(e(i).find("."+n))})})}})}(jQuery,window,document),function(e){e(".j-switchable").each(function(t,n){var r=e(n).data("slide")||{},i=e(n).switchable(r);e.extend(n,{switchable:i})})}(jQuery);(function(e,t,n){function r(){var e={qhmsg:!1,active:!0,pn:1,last:!1,listen:function(r,i,s){s&&i.call(e),$(t).scroll(function(t){var s=n.documentElement.scrollTop||n.body.scrollTop,o=s+n.documentElement.clientHeight,u=$("#"+r);if(u.length<=0)return;o>=u.height()+u.offset().top&&i.call(e)})},getData:function(n,r){var i=$(t).height();if(!this.active||e.last)return{done:function(){}};this.active=!1;var s='<div class="list-loading" id="list-loading"><span><img src="http://p7.qhimg.com/t01a31740a7ea60487d.gif"/>\u52a0\u8f7d\u66f4\u591a...</span></div>',o=$(".feed").length>0?$(".feed"):$("#main-l");return $(".list-loading").length<=0&&o.append(s),$.get(n+"&pn="+this.pn).always(function(t){t=JSON.parse(t),$("#list-loading").remove();if(r&&e.pn===r)return e.last=!0;if(e.pn>t.data.pn)return e.last=!0;e.pn++,e.active=!0})},render:function(e,t,n){var r=$("#"+e);if(r.length<=0||!t)return;var i=function(e){return(e||"").replace(/http:\/\/(\w\d+)[.]qhimg[.]com\/(dmfd\/.+\/)?/,"http://$1.qhimg.com/dmfd/180_100_/")};for(var s=0;s<t.length;s++){t[s].current_page=n||"",t[s].pic=i(t[s].pic);var o=t[s].picture_cover;if(o)for(var u=0;u<o.length;u++)o[u].pic=i(o[u].pic)}var a=$.tmpl(this.newTmplFragment(),t);r.append('<ul class="feed-list"></ul>').find("ul.feed-list:last-child").append(a)},tmplFragment:function(){},newTmplFragment:function(){return['<li class="feed-item">',"{{if type == 0}}",'<div class="single-img">','<div class="pic">','<a href="/content/${id}" class="img" target="_blank">','<img src="${pic}" alt="${text}">',"</a>","{{if mood}}",'<a target="_blank" href="/list?mood=${mood}" class="mood sp-base sp-base-border-${mood}"></a>',"{{/if}}","</div>",'<div class="title">','<a href="/content/${id}" target="_blank">${text}</a>',"</div>",'<div class="desc clearfix">','<span class="sourceicon"><img src="${source_logo || "http://p8.qhimg.com/t01369e5e9bdac8b3a1.png"}" alt=""></span>','<span class="source">${source_desp || weixin_name || source_name}</span>','{{if current_page === "search-page" || current_page === "mini-page"}}',"{{if tonality}}",'<a class="tonality" target="_blank" href="/list?tonality=${tonality}">#${tonality}#</a>',"{{else}}",'<a class="tags" target="_blank" href="/list?tag=${tags}">#${tags}#</a>',"{{/if}}","{{/if}}","</div>","</div>","{{else type == 1}}",'<div class="single-video">','<div class="pic">','<a href="/content/${id}" class="img" target="_blank">','<img src="${pic}" alt="${text}">',"</a>",'<em class="duration"></em>',"</div>",'<div class="title">','<a href="/content/${id}" target="_blank">${text}</a>',"</div>",'<div class="desc clearfix">','<span class="sourceicon"><img src="${source_logo || "http://p8.qhimg.com/t01369e5e9bdac8b3a1.png"}" alt=""></span>','<span class="source">${source_desp || weixin_name || source_name}</span>','{{if current_page === "search-page"}}',"{{if tonality}}",'<a class="tonality" target="_blank" href="/list?tonality=${tonality}">#${tonality}#</a>',"{{else}}",'<a class="tags" target="_blank" href="/list?tag=${tags}">#${tags}#</a>',"{{/if}}","{{/if}}","</div>","</div>","{{else type == 2}}",'<div class="multiple-img">','<div class="title">','<a href="/photo/detail/${id}" target="_blank">${text}</a>',"</div>",'<div class="pics">','<div class="pics-in clearfix">',"{{each(i, piccover) picture_cover}}","{{if i <= 3}}",'<a class="pic-rect" href="/content/${id}" target="_blank">','<img src="${piccover.pic}">',"</a>","{{/if}}","{{/each}}",'<span class="pic-num">${picture_cover.length}\u56fe</span>',"</div>","</div>",'<div class="desc clearfix">','<span class="sourceicon"><img src="${source_logo || "http://p8.qhimg.com/t01369e5e9bdac8b3a1.png"}" alt=""></span>','<span class="source">${source_desp || weixin_name || source_name}</span>','{{if current_page === "search-page"}}',"{{if tonality}}",'<a class="tonality" target="_blank" href="/list?tonality=${tonality}">#${tonality}#</a>',"{{else}}",'<a class="tags" target="_blank" href="/list?tag=${tags}">#${tags}#</a>',"{{/if}}","{{/if}}","</div>","</div>","{{/if}}","</li>"].join("")}};return e}Object.mix(e.Common,{LoadMore:r})})(global,window,document);(function(e){function t(t,n){this.ele=e(t),this.options=n||{},this.domHei=e("body").height()||document.body.clientHeight,this.winHei=e(window).height()||document.documentElement.clientHeight,this.initWinTop=e(window).scrollTop(),this.winTop=this.initWinTop,this.winBtm=this.domHei-(this.winHei+this.winTop),this._prevNode=this.prevNode(),this._cssStyle=this.cssStyle(),this.init()}t.prototype.init=function(){var e=this;this.winEvent(),this.position(),this.ele.parent().css({"min-height":this.ele.height()});var t=setTimeout(function(){window.scrollTo(0,e.winTop+1),clearTimeout(t)},1e3)},t.prototype.winEvent=function(){var t=this;e(window).scroll(function(){t.domHei=e("body").height()||document.body.clientHeight,t.winTop=e(this).scrollTop(),t.winBtm=t.domHei-(t.winHei+t.winTop),t._prevNode=t.prevNode(),t.position()})},t.prototype.position=function(){var e=this,t=this.ele.width(),n=this.ele.height(),r=this.ele.offset().top,i=this.options.footerHei-this.winBtm;this.winTop<=this._prevNode.top&&(this.ele.prev(".js-sticky-fixed").remove(),this.ele.attr("style","")),this.winTop>this._prevNode.top&&this.ele.css(this._cssStyle.fixedT()),this.winHei-i<n&&this.winBtm<this.options.footerHei&&this.ele.css(this._cssStyle.fixedB(i))},t.prototype.cssStyle=function(){var t=this;return{fixedT:function(){return e.isEmptyObject(t.options.fixedCss)?{position:"fixed",top:0,bottom:"auto"}:(t.options.fixedCss.bottom="auto",t.options.fixedCss)},fixedB:function(e){return{position:"fixed",top:"auto",bottom:e}}}},t.prototype.prevNode=function(){this.ele.prev(".js-sticky-fixed").length<=0&&this.ele.before('<div class="js-sticky-fixed"></div>'),this.ele.prev(".js-sticky-fixed").css({width:this.ele.width()+"px",height:this.ele.height()+"px"});var e=this.ele.prev(".js-sticky-fixed").offset().top;return{top:function(){return e}()}},e.fn.sticky=function(n){return this.each(function(n,r){try{var i=JSON.parse(e(r).attr("data-sticky"))}catch(s){var i={}}var o=e.extend({footerHei:e(".ft-info").height()+e(".doc-ft").height()+20,fixedCss:i},o);new t(r,o)}),this}})(jQuery),function(e){e(".js-sticky").sticky({})}(jQuery);(function(e,t,n){var r=global.Common.LoadMore(),i=global.MEDIAV_SHOWIDS;(function(){return{init:function(){this.windowEvent(),this.focusSlide(),this._feedClassify=this.feedClassify(),this._indexFeeds=this.indexFeeds(),this._feedClassify.tab.call(this),this._indexFeeds.init()},windowEvent:function(){function r(){n._feedClassify&&n._feedClassify.pos(),n._indexFeeds.scroll()}var n=this;e(t).scroll(r),e(t).resize(r)},focusSlide:function(){function n(t,n,r){var i=e("."+t+"-mask"),s=e('.slide-list li:eq("'+n+'") a');i.find(".main a").addClass("active"),i.find(".main").append(s.clone(!0)),i.find(".main a:not([class='active'])").css("opacity",0),i.find(".main a:not([class='active'])").stop().animate({opacity:1},300,"swing",function(){i.find(".main a.active").remove()})}var t=0;e(".doc-focus").hover(function(){e(".slide-arrows").addClass("anim")},function(){e(".slide-arrows").removeClass("anim")}),e(".lside-mask").click(function(){e(".slide-prev").trigger("click")}),e(".rside-mask").click(function(){e(".slide-next").trigger("click")}),e(".doc-focus").switchable({interval:3e3,loop:!0,autoplay:!0,triggers:".slide-point li",currentTrigger:"current",prev:".slide-prev",next:".slide-next",animateStart:function(r){var i=e(".slide-list").find("li").length,s=r-1,o=r+1,u=s>=0?s:i-1,a=o<i?o:0,f;t<r&&(f="left"),t>r&&(f="right"),t===i-1&&r===0&&(f="left"),t===0&&r===i-1&&(f="right"),n("lside",u,f),n("rside",a,f),t=r}})},feedClassify:function(){var n=e("#classifyTab");if(n.length<=0)return;return{pos:function(){var r=e(t).scrollTop();r>n.parent().offset().top?n.css({position:"fixed",top:"0",left:n.parent().offset().left,"z-index":"99"}):n.css({position:"absolute",top:"0",left:"0","margin-left":"0","z-index":"99"})},tab:function(){var t=this;n.find("li").click(function(){n.find("li").removeClass("current"),e(this).addClass("current"),t._indexFeeds.init()})}}},indexFeeds:function(){var s=e("#index-feed"),o=e("#classifyTab"),u,a,f=i&&i.feeds,l;return{init:function(){if(s.length<=0)return;s.html(""),r=global.Common.LoadMore(),l=null,u=o.find("li.current a").attr("data-tag"),a=o.find("li.current a").attr("data-tags"),s.attr("bk","index_feeds_"+a),this.pos(),this.render()},listen:function(){s.find("li").hover(function(){e(this).addClass("hover")},function(){e(this).removeClass("hover")})},render:function(){var n=this,i=u==="\u6700\u65b0"?"/feeds/getListAll?size=20":"/feeds/getListByTag?tag="+encodeURIComponent(u)+"&size=20",o=r.getData(i,20);o.then&&o.then(function(i){var o=JSON.parse(i);return r.render("index-feed",o.data.list),n.listen(),e(t).scrollTop()+e(t).height()>s.height()+s.offset().top&&n.render(),o.data.list}).then(function(t){if(!l){var n=2,r=Math.ceil(t.length/n);l=e("#index-feed").mvAdsLoad({showId:f||"",step:n,adsNum:r})}else l.updata()})},scroll:function(){if(s.length<=0)return;var r=e("body").height()||n.body.clientHeight,i=e(t).height()||n.documentElement.clientHeight,o=e(t).scrollTop()||n.body.scrollTop,u=o+i;if(s.height()===0)return;u>=s.height()&&this.render()},pos:function(){var n=!!s.length&&s.parent().offset().top;o.css("position")==="fixed"&&e(t).scrollTop(n)}}}}})().init()})(jQuery,window,document);