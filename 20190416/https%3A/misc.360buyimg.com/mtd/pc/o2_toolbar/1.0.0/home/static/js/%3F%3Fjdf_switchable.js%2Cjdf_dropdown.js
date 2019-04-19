/**
 *####switch切换组件####
 *
 * switch切换组件提供一个可切换的panel,可广泛应用在tab切换,focus焦点图,slider,旋转木马carousel等
 *
 ***Demo**
 * [switchable切换](../ui/switchable/1.0.0/example/switchable.html "Demo")
 * [tab切换](../ui/tab/1.0.0/example/tab.html "Demo")
 * [focus焦点图](../ui/focus/1.0.0/example/focus.html "Demo")
 * [slider](../ui/slider/1.0.0/example/slider.html "Demo")
 * [carousel旋转木马](../ui/carousel/1.0.0/example/carousel.html "Demo")
 *
 ***参数**
 *
 *  - `type`   {String}  'tab'    panel方式tab,focus,slider,carousel,imgscroll
 *  - `direction`   {String}  'left'   slider类型的方向值 left,top
 *  - `hasSetup`   {Boolean}  false   tab的显示和隐藏是否自己处理
 *  - `navClass`   {String}  'ui-switchable-trigger'    nav的className
 *  - `navItem`  {String}   'ui-switchable-item'    nav中item的className
 *  - `navSelectedClass`  {String}   'ui-switchable-selected'    nav选中时className
 *  - `navDisabledClass`  {String}   'disabled'    添加后此nav不会被选中
 *  - `navIframe`  {String}   'data-iframe'    nav中iframe的配置项
 *  - `contentClass`  {String}   'ui-switchable-panel-main'    主体
 *  - `mainClass`  {String}   'ui-switchable-panel'    主体panel的className
 *  - `mainSelectedClass`  {String}   'ui-switchable-selected' 主体panel选中时className
 *  - `bodyClass`  {String}   'ui-switchable-panel-body' 主体panel的父级元素className
 *  - `hasPage`  {Boolean}  false    是否带翻页
 *  - `autoLock` {Boolean}   false    带翻页时超过最大值是否锁定
 *  - `prevClass`  {String}   'ui-switchable-prev'    带翻页时上一页的className
 *  - `nextClass`  {String}   'ui-switchable-next'    带翻页时下一页的className
 *  - `pagCancelClass` {String}    'ui-switchable-page-cancel'    分页不能点击时的增加class
 *  - `hasArrow` {Boolean}   false    tab下面小箭头(特殊需求)
 *  - `arrowClass`   {String}  'ui-switchable-arrow'    小箭头(className)
 *  - `event`  {String}   'mouseover'    绑定事件建议为mouseover||click
 *  - `callback` {Function}   null    回调函数
 *  - `onNext` {Function}   null    下一页回调，按钮事件或自动播放时执行
 *  - `onPrev` {Function}   null    上一页回调，按钮事件或自动播放时执行
 *  - `speed` {Number} || {String}  400  动画速度值:fast,slow或者具体数字
 *  - `delay`  {Number}  150    延时触发
 *  - `defaultPanel`   {Number}  0    默认选中的panel,第一个为0
 *  - `autoPlay`  {Boolean}  false
 *  - `playDirection`  {String}  'next' 播放方向，next或prev
 *  - `stayTime`  {Number}  5000  自动播放间隔时间
 *  - `mouseenterStopPlay` {Boolean}   true   鼠标移入主体时停止滚动
 *  - `includeMargin` {Boolean}   false  在使用自动计算节点宽高时，outerWidth或outerHeight中也包含margin值
 *  - `width`  {Number}  0    主体panel的width
 *  - `height`  {Number}  0    主体panel的height
 *  - `seamlessLoop` {Boolean}   false  无缝滚动
 *  - `imgscrollClass`   'ui-switchable-imgscroll-img' imgscroll类型主体img的className
 *  - `imgscrollItemClass`   'ui-switchable-imgscroll-item' imgscroll类型主体item的className
 *  - `imgscrollLazyload` {Boolean} false imgscroll类型lazyload加载图片
 *  - `step` {Number} 1 每次步进值
 *  - `visible` {Number} 1 默认显示几个panel
 *  - `easing` {String} 'swing' easing 动画效果
 *
 ***举例**
 * html部分
 *
 *	<div class="ui-switchable clearfix" id="tab">
 *		<ul class="ui-switchable-nav clearfix">
 *			<li class="ui-switchable-item">今日特价</li>
 *			<li class="ui-switchable-item">热卖商品</li>
 *			<li class="ui-switchable-item">最新降价</li>
 *			<li class="ui-switchable-item">新品到货</li>
 *		</ul>
 *		<div class="ui-switchable-body clearfix">
 *			<div class="ui-switchable-panel-main">
 *				<div class="ui-switchable-panel" ><img src="http://img13.360buyimg.com/da/g14/M05/15/1C/rBEhVVJfWUwIAAAAAADuXEur8t8AAER1AJFwNkAAO50477.jpg" /></div>
 *				<div class="ui-switchable-panel" style="display:none;"><img src="http://img13.360buyimg.com/da/g14/M04/16/05/rBEhVlJgxDkIAAAAAADnpQs6f5gAAEVKwFHGIwAAOe9074.jpg" /></div>
 *				<div class="ui-switchable-panel" style="display:none;"><img src="http://img10.360buyimg.com/da/g15/M03/0F/18/rBEhWFJeTdgIAAAAAADnzmiSQTQAAENfwKFvmMAAOfm066.jpg" /></div>
 *				<div class="ui-switchable-panel" style="display:none;"><img src="http://img11.360buyimg.com/da/g14/M00/15/15/rBEhVlJeCegIAAAAAADhV3zKug8AAEO1AGW8mYAAOFv185.jpg" /></div>
 *			</div>
 *		</div>
 *	</div>
 *
 *
 * js部分
 *
 *	$('#tab').switch({
*		type:'tab'
*	});
 *
 * **update**
 *
 * 2014-10-17 by wuyaoheng
 * [add]添加options.includeMargin,在使用自动计算节点宽高时，outerWidth或outerHeight中也包含margin值
 *
 *
 * 2013-10-17 9:10:17 by liuwei1
 *
 */

;(function($, undefined) {
	$.ui.define('switchable', {
		options:{
			hasCssLink:false,
			baseVersion:'1.0.0',
			cssLinkVersion:'1.0.0',

			type:'tab',//panel方式tab,focus,slider,carousel
			direction:'left',//slider的方向值 left,top
			hasSetup: false,//tab类型的显示和隐藏是否自己处理
			navClass:'ui-switchable-trigger',//nav的className
			navItem:'ui-switchable-item',//nav中item的className
			navSelectedClass:'ui-switchable-selected',//nav选中时className
			navDisabledClass:'disabled',//不可操作nav
			navIframe:'data-iframe',//nav中iframe的配置项

			contentClass:'ui-switchable-panel-main',//主体

			mainClass:'ui-switchable-panel',//主体panel的className
			mainSelectedClass:'ui-switchable-panel-selected',//主体panel选中时className

			bodyClass:'ui-switchable-panel-body',//主体panel的父级元素className

			hasPage:false,//翻页
			autoLock:false,//超过数量时是否锁定
			prevClass:'ui-switchable-prev',//上一页
			nextClass:'ui-switchable-next',//下一页
			pagCancelClass:'ui-switchable-page-cancel',//分页不能点击时的增加class

			hasArrow:false,//tab下面小箭头,特殊需求
			arrowClass:'ui-switchable-arrow',//小箭头className

			event:'mouseover',//绑定事件建议为mouseover||click
			speed:400,//动画速度值
			callback:null,//回调函数
			onNext:null,//下一页回调，按钮事件或自动播放时执行
			onPrev:null,//上一页回调，按钮事件或自动播放时执行
			delay:150,//延时触发
			defaultPanel:0,//默认选中的panel

			autoPlay:false,//自动播放
			playDirection:'next',//播放方向，next或prev
			stayTime:5000,//自动播放间隔时间
			mouseenterStopPlay:true,//鼠标移入主体时停止滚动

			includeMargin:false, //在使用自动计算节点宽高时，outerWidth或outerHeight中也包含margin值
			width:0,//主体panel的width
			height:0,//主体panel的height
			seamlessLoop:false,//无缝滚动
			hasHash:false,//是否支持hash

			imgscrollClass:'ui-switchable-imgscroll-img',//imgscroll类型主体img的className
			imgscrollItemClass:'ui-switchable-imgscroll-item',//imgscroll类型主体item的className
			imgscrollLazyload:false, //imgscroll类型lazyload加载图片

			step:1,//每次步进值
			visible:1,//默认显示几个panel
			easing:'swing',//easing
			hasLoop:false //是否走一个循环
		},
		init:function(){
			var self = this;
			var opts = self.options;
			var hasSplitScreen = true;//根据切换步伐来判断是否有分屏，有分屏此组件才会正常执行
			self.addClass();

            //修正显示个数低于步进的值
            if ( opts.visible < opts.step ) {
                opts.visible = opts.step;
            }

			self.nav = self.el.find('.'+opts.navItem);
			self.main = self.el.find('.'+opts.mainClass);

			opts.step = Math.max(opts.step || 1, 1);
			self.size = self.main.size();
			self.pageCount = Math.ceil(self.main.size() / opts.step);
			self.content = self.el.find('.'+opts.contentClass);
			self.mainWidth = self.main.outerWidth(opts.includeMargin);
			hasSplitScreen = opts.step < self.size;
			if ( opts.type == 'tab' && opts.navSelectedClass && self.nav.length > 0) {
				var dIdx = -1;
				self.nav.each(function(i){
					var _this = $(this);
					if ( _this.hasClass(opts.navSelectedClass) ) {
						if ( dIdx == -1 ) {
							dIdx = i;
						} else {
							_this.removeClass(opts.navSelectedClass);
						}
					}
				});
				if ( dIdx > -1 ) {
					opts.defaultPanel = dIdx;
				}
			}

			if (opts.width) {
				self.mainWidth = opts.width;
			}

			self.mainHeight = self.main.outerHeight(opts.includeMargin);
			if (opts.height) {
				self.mainHeight = opts.height;
			}

            self.cloneCount = Math.max(opts.step, opts.visible);
			if ( opts.seamlessLoop && hasSplitScreen ) {
				var firstList = [];
				var endList = [];
                var cloneCount = self.cloneCount;
                for ( var i = 0; i < cloneCount; i++ ) {
                    firstList.push(self.main.eq(i).clone().attr('data-switchable-clone',1).data('switchable-clone-from',cloneCount+i));
                    endList.push(self.main.eq(self.size-(i+1)).clone().attr('data-switchable-clone',1).data('switchable-clone-from',self.size+i));
                }
                for ( var j = 0; j < cloneCount; j++ ) {
                    self.content.prepend(endList[j]).append(firstList[j]);
                }
				self.main = self.el.find('.'+opts.mainClass);
			}
			self.main.each(function(i){
				$(this).data('switchable-idx', i);
			});

			var now = opts.defaultPanel;
			if (opts.hasHash) {
				now = self.getHash(now);
			}

			self.last = now;
			self.current = now;
			self.isInit = true;
			if ( opts.seamlessLoop && hasSplitScreen ) {
				self.switchTo(now ,now + self.cloneCount);
			} else {
				self.switchTo(now, now);
			}

			self.autoInterval=null;
			self.eventTimer=null;

			if ( opts.hasPage ) {
				//根据条件判断，是否有第二屏，如果没有则停止执行，不绑定事件
				if ( hasSplitScreen ) {
					self.page();
				}
				if ( opts.autoLock ) {
					self.updatePageButState();
				}
			}

			if ( hasSplitScreen ) {
				self.autoPlay();
				self.bind();
			}

		},
		//根据不同类型为主体增加相应样式
		addClass:function(){
			var self = this;
			//self.el.addClass('ui-switchable-'+self.options.type)
		},
		bind:function(){
			var self = this;
			var opts = self.options;
			self.nav.each(function(i){
				var _this = $(this);
				_this.bind(opts.event,function(){
					clearInterval(self.autoInterval);
					if ( opts.navDisabledClass && _this.hasClass(opts.navDisabledClass) ) {
						return ;
					}
					if (opts.delay === 0) {
						self.current = i;
						self.switchTo(i , opts.seamlessLoop ? i + self.cloneCount : i);
					}else {
						clearTimeout(self.eventTimer);
						self.eventTimer = setTimeout(function(){
							self.current = i;
							self.switchTo(i , opts.seamlessLoop ? i + self.cloneCount : i);
						},opts.delay);
					}
				}).bind('mouseleave',function(){
					clearTimeout(self.eventTimer);
					if (!opts.mouseenterStopPlay) {
						self.autoPlay();
					}
				});

				if (opts.event=='click'){
					_this.bind('mouseover',function(){
						clearTimeout(self.eventTimer);
						clearInterval(self.autoInterval);
					})
				}
			});

			if (opts.mouseenterStopPlay) {
				self.el.each(function(i){
					$(this).bind('mouseenter',function(){
						clearInterval(self.autoInterval);
					}).bind('mouseleave',function(){
						self.autoPlay();
					});
				})
			}

			//移动端暂支持focus,slider;暂不支持tab(侧滑有bug),carousel,imgscroll
			if ($.browser.isMobile() && (opts.type == 'focus' || opts.type == 'slider') ) {
				self.main.swipeLeft(function(){
					self.next();
				});

				self.main.swipeRight(function(){
					self.prev();
				});
			}
		},
		//获取hash
		getHash:function(now){
			var self = this;
			var hash = window.location.hash;
			if (hash != '') {
				var nav = self.nav;
				var index = null;
				$.each(nav, function(i) {
					if ($(this).attr('data-hash') == hash ) {
						index = i;
					};
				});
				if (index != null) {
					now = index;

					//跳转到了对应的nav
					var top = self.nav.eq(index).offset().top;
					//webkit刷新当前页面会保留在上一个滚动条位置???
					var delay = $.browser.webkit ? 50 : 0;
					setTimeout(function(){
						$(window).scrollTop(top);
					},delay);
				};
			};
			return now;
		},
		//设置hash
		setHash:function(i){
			var self = this;
			if (self.options.hasHash) {
				if ( self.isInit && !window.location.hash ){
					return;
				}
				var hash = self.nav.eq(i).attr('data-hash');
				hash = hash.replace(/#/,'');
				window.location.hash = hash;
			}
		},
		/**
		 * 展示选中的nav和panel
		 * @param {Number} i 展示第i个nav
		 * @method switchTo
		 * i = 原始坐标， 如果是无逢，则j为转变后的坐标
		 */
		switchTo:function(i,j){
			var self = this;
			if (typeof(j) == 'undefined') {
				var j = i;
			};
			self.switchNavTo(i);
			self.switchMainTo(j);
		},
		/**
		 * 展示选中的nav
		 * @param {Number} i 展示第i个nav
		 * @method switchNavTo
		 */
		switchNavTo:function(i){
			var self = this;
			var opts = self.options;
			self.nav.removeClass(opts.navSelectedClass);
			self.nav.eq(i).addClass(opts.navSelectedClass);
			self.setHash(i);
		},
		/**
		 * 展示选中的panel
		 * @param {Number} i 展示第i个panel
		 * @method switchMainTo
		 */
		switchMainTo:function(i){
			var self = this;
			var opts = self.options;

			self.iframe(i);
			if (opts.type !='imgscroll') {
				self.main.removeClass(opts.mainSelectedClass);
				self.main.eq(i).addClass(opts.mainSelectedClass);
			}

			//当前panel重复多次点击时仅触发第一次
			if (!self.isInit && self.last == i ){
				return;
			}

			self.switchType(i);

			if (opts.callback!=null){
				var currentIndex = i;
				var isLast = false;
				var currentItems = this.main.eq(currentIndex);
				if( currentIndex + 1 == self.pageCount ){
					isLast = true;
				}
				if ( opts.seamlessLoop ) {
					this.main.each(function(){
						if ( currentIndex == $(this).data('switchable-clone-from') ) {
							currentItems = currentItems.add($(this));
							return false;
						}
					});
				}
				opts.callback.call(self, currentIndex , isLast, currentItems);
			}

			self.last = i;
		},
		/**
		 * 展示不同类型的panel
		 * @method switchType
		 * @param {Number} i 展示第i个panel
		 */
		switchType:function(i){
			var self = this;
			var opts = self.options;
			switch (opts.type){
				case "tab":
					self.tab(i);
					break ;
				case "focus":
					self.focus(i);
					break ;
				case "slider":
					self.slider(i);
					break ;
				case "carousel":
					self.carousel(i);
					break ;
				case "imgscroll":
					self.imgscroll(i);
					break ;
			}
		},
		/**
		 * 默认panel配置,也可应用tab
		 * @param {Number} i 切换至第i个panel
		 * @method switchDefault
		 */
		switchDefault:function(i){
			var self = this;
			self.main.hide();
			self.main.eq(i).show();
		},
		/**
		 * tab切换
		 * @method tab
		 * @param {Number} i 切换至第i个panel
		 */
		tab:function(i){
			var self = this;
			var opts = self.options;
			if (!opts.hasSetup){
				self.switchDefault(i);
			}

			if (opts.hasArrow){
				var arrowClass = opts.arrowClass ;
				var left = (self.nav.eq(i).outerWidth(true)) * i;
				if (self.isInit){
					var navParent = self.nav.parent();
					navParent.prepend('<div class="'+arrowClass+'"><b></b></div>').css({position:'relative'});
					self.el.find('.'+arrowClass).css({left:left});
					self.isPlayLock = false;
				}else{
					setTimeout(function(){self.isPlayLock = false;},opts.speed);
					self.el.find('.'+arrowClass).stop(true).animate({left:left},opts.speed,opts.easing);
				}
			}

			self.isInit = false;
		},
		/**
		 * 焦点图
		 * @method focus
		 * @param {Number} i 切换panel i
		 */
		focus:function(i){
			var self = this;
			var opts = self.options;
			if (self.isInit){
				self.main.parent().css({position:'relative'})
				self.main.css({position:'absolute',zIndex:0,opacity:0}).show();
				self.main.eq(i).css({zIndex:1,opacity:1});
				self.isPlayLock = false;
			}else{
				setTimeout(function(){self.isPlayLock = false;},opts.speed);
				self.main.eq(self.last).css({zIndex:0}).stop(true).animate({opacity:1},opts.speed,opts.easing,function(){
					$(this).css('opacity',0);
				});
			}
			self.main.eq(i).css({zIndex:1}).stop(true).animate({opacity:1},opts.speed,opts.easing);
			self.isInit = false;
		},
		/**
		 * slider
		 * @method slider
		 * @param {Number} i 切换至第i个panel
		 */
		slider:function(i){
			var self = this;
			var opts = self.options;
			var content = self.content;

			var h = self.mainHeight;
			var height = h * i;
			var w = self.mainWidth;
			var width = w * i;

			if (self.isInit){
				if (opts.direction == 'left'){
					//左右滚动
					self.main.css({'float':'left'});
					if ( opts.seamlessLoop ) {
						//因为当启动无逢时，前后都会添加 1 组 跳转的节点（stop * 2）
						content.css({width:w*(self.size+(2*self.cloneCount))});
					} else {
						content.css({width:w*self.size});
					}
					content.css({left:-width});
				}else if (opts.direction == 'top'){
					//上下滚动 
					content.css({top:-height});
				}
				content.parent().css({position:'relative'});
				content.css({position:'absolute'});
				self.switchDefault(i);
				self.isInit = false;
				self.isPlayLock = false;
			}else{
				setTimeout(function(){self.isPlayLock = false;},opts.speed);
				if (opts.direction == 'left'){
					//左右滚动
					content.stop(true).animate({left:-width},opts.speed,opts.easing);
				}else if (opts.direction == 'top'){
					//上下滚动 
					content.stop(true).animate({top:-height},opts.speed,opts.easing);
				}
			}
			self.main.show();
		},
		/**
		 * 悬转木马
		 * @method carousel
		 * @param {Number} i 切换至第i个panel
		 */
		carousel:function(i){
			var self = this;
			self.slider(i);
		},
		/**
		 * 图片滚动
		 * @method imgscroll
		 * @param {Number} i 切换panel i
		 */
		imgscroll:function(i){
			var self = this;
			var opts = self.options;
			var w = self.mainWidth;
			var imgscroll = self.el.find('.'+opts.imgscrollClass);

			if (self.isInit){
				self.el.find('.'+opts.bodyClass).css({
					position:'relative',
					overflow:'hidden',
					width:w * opts.visible
				});

				self.content.css({
					position:'absolute',
					width:w * self.size
				});
				self.main.css({'float':'left'});
				var currentClass = opts.mainSelectedClass;
				self.main.eq(0).addClass(currentClass);

				//设置和第一个小图为当前imgscrll的src
				if (!imgscroll.attr('src')){
					var url = self.el.find('.'+opts.imgscrollItemClass).eq(0).attr('data-url');
					imgscroll.attr('src',url);
				}

				if (opts.imgscrollLazyload) {
					//其实是这里应用了预加载(opts.visible +1) 
					for (var i = self.current  ; i < opts.visible +1 ;i++  ){
						var m = self.main.eq(i).find('.'+opts.imgscrollItemClass);
						var url = m.attr('data-src');
						m.attr('src',url);
					}
				}

				//bind
				self.main.bind(opts.event,function(){
					var _t = $(this);
					var url = _t.find('.'+opts.imgscrollItemClass).attr('data-url');
					self.main.removeClass(currentClass);
					_t.addClass(currentClass);
					imgscroll.attr('src',url);
				});

				self.isInit = false;
				self.isPlayLock = false;
			}else {
				setTimeout(function(){self.isPlayLock = false;},opts.speed);
				var left = self.current * w;

				if (opts.imgscrollLazyload) {
					//预加载当前的下一个
					var m = self.main.eq(opts.visible+self.current).find('.'+opts.imgscrollItemClass);
					var url = m.attr('data-src');
					m.attr('src',url);
				}
				self.content.stop(true).animate({left:-left},opts.speed);
			}
		},
		/**
		 * 翻页
		 * @method page
		 */
		page:function(){
			var self = this;
			var opts = self.options;
			var next = self.el.find('.'+opts.nextClass);
			var prev = self.el.find('.'+opts.prevClass);

			prev.bind('click',function(event){
				if ( self.isPlayLock && self.content && self.content.length > 0 ) {
					return;
				}

				if (opts.autoLock && self.current == 0) {
					return;
				}

				self.isPlayLock = true;
				self.prev();
				event.stopPropagation();//fix ie7 animation not smooth
			});

			next.bind('click',function(event){
				if ( self.isPlayLock && self.content && self.content.length > 0 ) {
					return;
				}

				if (opts.autoLock && self.current >= self.size - opts.visible) {
					return;
				}

				self.isPlayLock = true;
				self.next();
				event.stopPropagation();//fix ie7 animation not smooth
			});
		},
		/**
		 * 下一帧
		 * @method next
		 */
		next:function(){
			var self = this;
			var opts = self.options;

			self.current = self.current + opts.step;

			self.offsetIndex();

			var j = 0;
			if ( !opts.seamlessLoop && opts.hasLoop ) {
				j = - opts.visible + opts.step;
			}

			if (self.current >= self.size + j ) {
				self.current = 0;
			}
			//避免在滚动到最后时，出现空白
			var _v = opts.visible > opts.step ? opts.visible : opts.step;
			if ( !opts.seamlessLoop && self.current + _v > self.size) {
				self.current = self.size > _v ? self.size - _v : 0;
			}

			var i = opts.seamlessLoop ? self.current + self.cloneCount : self.current;
			self.switchTo(self.current,i);
			self.updatePageButState();

			if ($.isFunction(opts.onNext)) {
				opts.onNext.call(self);
			}
		},
		/**
		 * 上一帧
		 * @method prev
		 */
		prev:function(){
			//todo autoLock
			var self = this;
			var opts = self.options;

			if ( opts.seamlessLoop ) {
				self.offsetIndex(true);
			} else {
				self.current -= opts.step;
				if ( self.current < 0 ) {
					//避免在滚动到最开始时，出现空白
					if ( self.current > -opts.step ) {
						self.current = 0;
					} else {
						self.current =  self.size - opts.step;
					}
				}
			}
			var i = opts.seamlessLoop ? self.current + self.cloneCount : self.current;
			self.switchTo(self.current, i);
			self.updatePageButState();

			if ($.isFunction(opts.onPrev)) {
				opts.onPrev.call(self);
			}
		},
		updatePageButState:function(){
			var self = this;
			var opts = self.options;
			if ( opts.hasPage && opts.autoLock ) {
				var next = self.el.find('.'+opts.nextClass);
				var prev = self.el.find('.'+opts.prevClass);
				var cancelClass = opts.pagCancelClass;
				if ( self.current >= self.size - Math.max(opts.visible, opts.step) ) {
					next.addClass(cancelClass);
				} else {
					next.removeClass(cancelClass);
				}

				if ( self.current <= 0 ) {
					prev.addClass(cancelClass);
				} else {
					prev.removeClass(cancelClass);
				}
			}
		},
		offsetIndex:function(back){
			var self = this;
			var content = self.content;
			var opts = self.options;
			var w = self.mainWidth;
			var h = self.mainHeight;
			var newLeft = null;
			var newTop = null;
			var newIndex = null;

			//向后
			if ( back && opts.seamlessLoop ) {
				newIndex = self.current;
				if ( self.current <= 0 ) {
					newIndex = self.size - opts.step + self.current;
					newLeft = - ((self.size + (self.cloneCount + self.current)) * w);
					newTop = - ((self.size + (self.cloneCount + self.current)) * h);
				} else {
					newIndex -= opts.step;
				}
				self.current = newIndex;
			} else // 向前
			if ( self.current >= self.size && opts.seamlessLoop ) {
				newIndex = self.current - self.size;
				newLeft = - ((newIndex+self.cloneCount-opts.step) * w);
				newTop = - ((newIndex+self.cloneCount-opts.step) * h);
				self.current = newIndex;
			}

			if (newLeft != null && opts.direction == 'left'){
				content.css({left:newLeft});
			} else
			if (newTop != null && opts.direction == 'top'){
				content.css({top:newTop});
			}
		},
		autoPlay:function(){
			var self = this;
			if (self.options.autoPlay){
				self.startPlay();
			}
		},
		/**
		 * 开始自动播放
		 * @method startPlay
		 */
		startPlay:function(){
			var self = this;
			var opts = self.options;
			self.stopPlay();
			self.autoInterval = setInterval(function(){
				if ( self.main.length <= opts.step ) {
					self.stopPlay();
				} else {
					if ( opts.playDirection == 'prev' ) {
						self.prev();
					} else {
						self.next();
					}
				}
			},opts.stayTime);
		},
		/**
		 * 停止播放
		 * @method stopPlay
		 */
		stopPlay:function(){
			var self = this;
			clearInterval(self.autoInterval);
		},
		/**
		 * iframe配置
		 * @method iframe
		 */
		iframe:function(i){
			var self = this;
			var $main = self.main.eq(i);
			var $nav = self.nav.eq(i);
			var iframeSrc = $nav.attr(self.options.navIframe);
			if (iframeSrc){
				var iframe = document.createElement('iframe');
				iframe.src = iframeSrc;
				iframe.border = 0;
				iframe.frameborder = 'no';
				iframe.marginwidth = 0;
				iframe.marginheight = 0;
				$main.html(iframe);
				$nav.removeAttr(self.options.navIframe);
			}
		},
		/**
		 * 更新节点
		 * @method update
		 * @param item {number||$node}
		 * @param {function} callback
		 * @return
		 * this = 重新索引后的原生对象（已排除clone节点）
		 * context = contextClass $对象
		 * index = 重新计算后的索引
		 * init = 初始化函数（正常情况下会自动执行，如果想手动执行，则在调用的回调中 reutrn true;然后手动初始化）,如下代码
		 * switchable.update($(this), function(content, index, init){ init();return true;});
		 * */
		update:function(item, callback){
			var self = this;
			var opts = self.options;
			var len = self.main.length;
			var newIdx = -1;
			var idx = -1;
			var tempAutoPlay = false;//是否暂时关掉自动播放
			if ($.isFunction(item)){
				callback = item;
				item = 0;
			}
			if (isNaN(parseInt(item))){
				if ( !item.hasClass(opts.mainClass) ) {
					item = item.closest('.'+opts.mainClass);
				}
				if ( item.hasClass(opts.mainClass) ) {
					idx = item.data('switchable-idx');
				}
			} else {
				idx = item;
			}
			newIdx = idx;
			//if ( newIdx == -1 || newIdx >= len) return;

			if (opts.autoPlay){
				self.stopPlay();
				opts.autoPlay = false;
				tempAutoPlay = true;
			}

			//个数小于滚动step，不会创建无缝
			if ( opts.seamlessLoop && len > opts.step ) {
				var slen = self.main.length - ( opts.step * 2) ;
				var hasClone = false;
				self.main.each(function(i){
					var _this = $(this);
					if ( _this.data('switchable-clone') == '1' ) {
						hasClone = true;
						$(this).remove();
					}
				});
				//有克隆的话 重新指定索引
				if ( hasClone ) {
					if ( idx < opts.step || idx >= slen+opts.step) {

						if ( idx >= slen+opts.step ) {
							newIdx =  (idx - slen) - opts.step;
						} else {
							newIdx = slen - opts.step + idx;
						}
					} else{
						newIdx = idx - opts.step;
					}
				}
			}
			if (opts.hasPage){
				var next = self.el.find('.'+opts.nextClass);
				var prev = self.el.find('.'+opts.prevClass);
				next.unbind('click');
				prev.unbind('click');
			}
			self.main = self.el.find('.'+opts.mainClass);
			//获取处理后的长度
			len = self.main.length;

			//更新节点后的回调初始化
			var init = function( index ){
				if ( index == undefined || index == null ) {
					var nmlen = self.el.find('.'+opts.mainClass).length;
					if (  nmlen < len ) {
						newIdx = newIdx - (len - nmlen);
					} else if (nmlen > len) {
						newIdx = nmlen > opts.visible ? nmlen - opts.visible : 0;
					} else {
						newIdx = self.current;
					}
					if ( newIdx < 0 ) newIdx = 0;

					//如果刚刚关了自动播放，则重新开启
					if ( tempAutoPlay ) {
						opts.autoPlay = true;
					}
					//处理有结束锁的索引
					if ( opts.autoLock && !opts.seamlessLoop ) {
						if ( newIdx + opts.visible >= nmlen ) {
							newIdx = nmlen - opts.visible;
							if ( newIdx < 0 ) newIdx = 0;
						}
					}
				} else {
					newIdx = index;
				}

				opts.defaultPanel = newIdx;
				self.init();
			};

			//如果回调中return true 则不自动执行初始化方法，则调用者手动执行
			if ( !callback.call(self.main.eq(newIdx), self.content, newIdx, init) ) {
				init();
			} else {
				//重新建议索引,方便多次操作，一次回调
				self.el.find('.'+opts.mainClass).each(function(i){
					$(this).data('switchable-idx', i);
				});
			}
		}
	});
})(jQuery);/**
 *####下拉菜单####
 *
 ***Demo**
 * [dropdown](../ui/dropdown/1.0.0/example/dropdown.html "Demo")
 *
 ***参数**
 *
 *  - `item` {String}  'ui-dropdown-item'  菜单className
 *  - `trigger` {Boolse} false
 *  - `current`{String}  "ui-dropdown-hover"  菜单选中加的样式
 *  - `bodyClass` {String}  'ui-dropdown-bd'  菜单主体class
 *  - `subBodyClass` {String} 'ui-dropdown-sub'  菜单主体class
 *  - `topspeed` {Boolean} false  极速模式
 *  - `boundary` {Number} 10  边界值
 *  - `enterDelay` {Number}  0  菜单进入时delay
 *  - `leaveDelay`{Number}  0  菜单移除后delay
 *  - `zIndex` {Number} 1000  菜单主体zindex
 *  - `align` {String} 'bottom'  下面或者右侧
 *  - `left` {Number} null  菜单主体left
 *  - `top` {Number} null  菜单主体top
 *  - `submenuLeft` {Number} 0  二级菜单距主体left
 *  - `submenuTop` {Number}  0二级菜单距主体top
 *  - `onchange` {Function} null 触发时回调
 *  - `onmouseleave` {Function} null 离开时回调
 *
 ***举例**
 *html部分
 *
 *	<div class="ui-dropdown clearfix" id="dropdown">
 *		<ul>
 *			<li class="ui-dropdown-item">
 *				<a href="#">我的订单 </a> |
 *			</li>
 *			<li class="ui-dropdown-item">
 *				<a href="#">我的手机</a> |
 *			</li>
 *			<li class="ui-dropdown-item">
 *				<div class="ui-dropdown-hd">客户服务 ^</div>
 *				<div class="ui-dropdown-bd">
 *					<ul>
 *						<li><a href="#" target="_blank"> 帮助中心 </a></li>
 *						<li><a href="#" target="_blank"> 售后服务</a> </li>
 *						<li><a href="#" target="_blank"> 在线客服</a> </li>
 *					</ul>
 *				</div>
 *			</li>
 *		</ul>
 *	</div>
 *
 * js部分
 *
 *	$('#dropdown').dropdown();
 *
 * **update**
 * 2013-10-21 17:31:29 by liuwei1
 *
 */
;(function($, undefined) {
	$.ui.define('dropdown', {
		options: {
			hasCssLink:false,
			baseVersion:'1.0.0',
			cssLinkVersion:'1.0.0',
			item:'ui-dropdown-item',//菜单className
			trigger:false,
			current:"ui-dropdown-hover",//菜单选中加的样式
			bodyClass:'ui-dropdown-bd',//菜单主体class
			subBodyClass:'ui-dropdown-sub',//菜单主体class
			topspeed:false,//极速模式
			boundary:10,//边界值
			enterDelay:0,//菜单进入时delay
			leaveDelay:0,//菜单移除后delay
			zIndex:1000,//菜单主体zindex
			align:'bottom',//下面或者右侧
			left:null,//菜单主体left
			top:null,//菜单主体top
			submenuLeft:0,//二级菜单距主体left
			submenuTop:0,//二级菜单距主体top
			onchange:null,//触发时回调
			onmouseleave:null//离开时回调
		},
		init:function(){
			this.mouseLocs = [];
			this.lastDelayLoc = null;
			this._create();
			this.bind();
		},
		_create:function(){
			var opts = this.options;
			if (opts.trigger) {
				this.item = this.el;
			}else {
				this.item = this.el.find('.'+opts.item);
			}

			//this.item.css({position:'relative'});

			this.body = this.el.find('.'+opts.bodyClass);
			var topOrigin = opts.top;
			var leftOrigin = opts.left;
			if (opts.align == 'bottom') {
				if (opts.top == null) {
					opts.top = this.item.outerHeight();
				}
			}

			if (opts.align == 'right') {
				opts.top = 0;
				if (opts.left == null) {
					opts.left = this.item.outerWidth();
				}
			}

			if (topOrigin != null || leftOrigin != null) {
				this.body.css({
					position:'absolute',
					top:opts.top,
					left:opts.left,
					zIndex:opts.zIndex
				})
			}

			this.el.find('.'+opts.subBodyClass).css({
				//position:'relative',
				zIndex:opts.zIndex+1
			});
			this.bodyOuterWidth = this.body.outerWidth();
			this.bodyBorderWidth = 2*( this.getStyle(this.body[0],'borderWidth'));
		},
		bind:function(){
			var self = this;
			var opts = this.options;

			var showTag = false;
			var dropdownTimer,enterTimer;
			var mouseLocsLength = 3;

			var currentItem = null;
			var delayItem = null;

			//防止内容更新时产生事件反复执行
			var isOpen = false;

			//主体绑定
			this.el.bind('mouseenter',function(){
				clearTimeout(dropdownTimer);
			});

			this.el.bind('mouseleave',function(){
				if (showTag){
					dropdownTimer = setTimeout(function(){
						self.removeClass();
					},opts.leaveDelay);
				}

				if (opts.onmouseleave) {
					opts.onmouseleave($(this));
				}
				currentItem = null;
			});

			//item绑定
			this.item.bind('mouseenter',function(){
				if ( isOpen ) {
					return false;
				}
				var $this = $(this);

				var trigger = function(){
					isOpen = true;
					currentItem = $this.index();
					self.removeClass();
					$this.addClass(opts.current);

					showTag = true;
					if( opts.onchange ) {
						opts.onchange($this);
					}
				};

				enterTimer = setTimeout(function(){
					if ( self.topspeed($this) == 0 ) {
						trigger();
						clearTimeout(delayItem);
					}
				}, opts.enterDelay);

				//极速模式
				if (opts.topspeed){
					delayItem = setTimeout(function(){
						if (currentItem != $this.index()) {
							trigger();
						}
					},700)
				}
			});

			this.item.bind('mouseleave',function(){
				clearTimeout(enterTimer);
				clearTimeout(delayItem);
				isOpen = false;
			});

			//二级菜单绑定
			this.el.find('.'+opts.subBodyClass).bind('mouseenter',function(){
				var left = self.bodyOuterWidth - self.bodyBorderWidth + opts.submenuLeft;
				var padding = self.getStyle($(this)[0],'paddingLeft');
				left = $.browser.isIE6() ? left - padding : left;
				var top = 0 + opts.submenuTop;
				$(this).find('.' + opts.bodyClass).show().css({
					left:left,
					top:top
				});
			}).bind('mouseleave',function(){
				$(this).find('.' + opts.bodyClass).hide();
			});

			if (opts.topspeed){
				$(document).mousemove(function(e){
					self.mouseLocs.push({x: e.pageX, y: e.pageY});
					if (self.mouseLocs.length > mouseLocsLength) {
						self.mouseLocs.shift();
					}
				});
			}
		},
		removeClass:function(){
			this.item.removeClass(this.options.current);
		},
		//取得元素的style
		getStyle:function(obj,type){
			if(!obj) {return};
			var b = window.getComputedStyle ? window.getComputedStyle(obj,null)[type] : obj.currentStyle[type];
			b = parseInt(b);
			if (!b) { b = 0;}
			return b;
		},
		/**
		 * 极速模式
		 * @method topspeed
		 */
		topspeed:function(){
			var opts = this.options;
			if (!opts.topspeed){
				return 0;
			}

			var o = this.el;
			var offset = o.offset(),
				upperLeft = {
					x: offset.left,
					y: offset.top
				},
				upperRight = {
					x: offset.left + o.outerWidth(),
					y: upperLeft.y
				},
				lowerLeft = {
					x: offset.left,
					y: offset.top + o.outerHeight()
				},
				lowerRight = {
					x: offset.left + o.outerWidth(),
					y: lowerLeft.y
				}
			loc = this.mouseLocs[this.mouseLocs.length - 1],
				prevLoc = this.mouseLocs[0];

			if (!loc) {
				return 0;
			}

			if (!prevLoc) {
				prevLoc = loc;
			}

			if (prevLoc.x < offset.left || prevLoc.x > lowerRight.x ||
				prevLoc.y < offset.top || prevLoc.y > lowerRight.y) {
				return 0;
			}

			if (this.lastDelayLoc && loc.x == this.lastDelayLoc.x && loc.y == this.lastDelayLoc.y) {
				return 0;
			}

			//求倾斜率
			function slope(a, b) {
				return (b.y - a.y) / (b.x - a.x);
			}

			var decreasingCorner = upperRight,
				increasingCorner = lowerRight;

			var	decreasingSlope = slope(loc, decreasingCorner),
				prevDecreasingSlope = slope(prevLoc, decreasingCorner),

				increasingSlope = slope(loc, increasingCorner),
				prevIncreasingSlope = slope(prevLoc, increasingCorner);

			if (decreasingSlope < prevDecreasingSlope && increasingSlope > prevIncreasingSlope) {
				if ( (prevLoc.x-upperLeft.x) < opts.boundary){
					return 0;
				}
				this.lastDelayLoc = loc;
				return 300;
			}

			this.lastDelayLoc = null;
			return 0;
		}
	});
})(jQuery);