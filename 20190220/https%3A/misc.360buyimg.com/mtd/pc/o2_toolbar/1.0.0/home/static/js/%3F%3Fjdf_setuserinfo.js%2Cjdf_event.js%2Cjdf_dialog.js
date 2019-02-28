define('jdf/setuserinfo', [
  'jdf/switchable',
  'jdf/dropdown'
], function(require,exports,module){
	/**
	* @获取用户信息并更新在顶栏个人信息
	*/
	var Slider = require('jdf/switchable');
	var dropdown = require('jdf/dropdown');
	
	var setUserInfo = function(options){
		options = $.extend({
			el: $("#loginbar,#ttbar-login"),
			callback: null
		}, options || {});

		var getHttp = function(){
			return 'https:' == document.location.protocol ? 'https://' : 'http://'; 
		};

		var html = '<div class="dt cw-icon">\
						<i class="icon-plus-nickname"></i>\
	                    <i class="ci-right"><s>◇</s></i>\
	                    <a class="nickname" target="_blank" href="//home.jd.com/"></a>\
		            </div>\
		            <div class="dd dorpdown-layer"></div>';

		$.ajax({
			url: getHttp() + "passport.jd.com/new/helloService.ashx", //接口人:穆永俊
			dataType: "jsonp",
			scriptCharset: "GBK",
			success: function (data) {
				if ( !data ) {
					return false;
				}

				//更新顶栏个人信息
				if ( data.nick ) {

					options.el.addClass('dorpdown');
					options.el.html(html);

					options.el.find('.nickname').html(data.nick);
					options.el.find('.dd').html('<div class="dd-spacer"></div><div class="dd-inner"><span class="loading"></span></div>');

					hasLoginInit();

					//绑定下拉框
					options.el.dropdown({
						enterDelay:100,
						trigger:true,
						current:'hover',
						onchange: function(){
							// createCookie('userInfo2016', '1', 10000, '/');
							// $('.u-place-tip').hide();
						}
					});

					// if(!readCookie('userInfo2016') && location.host == 'www.jd.com'){
					// 	var offset = options.el.offset();
					// 	$('body').append('<div class="u-place-tip" style="left: ' + offset.left + 'px; top: ' + (offset.top+25) + 'px"></div>');
					// 	$('.u-place-tip').click(function(){
					// 		createCookie('userInfo2016', '1', 10, '/');
					// 		$(this).hide();
					// 	});
					// }
				}else{
					options.el.html(data.info);
				}

				var callback = function () {
					clearTimeout(timer);
					if ( $.isFunction(options.callback) ) {
						options.callback(data);
					}
					// 执行完一次后清空
					callback = $.noop;
				};
				// 防止sso 有链接异常，造成callback不执行
				var timer = setTimeout(function(){
					callback();
				}, 2000);

				//更新其它域名cookies
				if ( data.sso ) {
					var len = data.sso.length;
					$.each(data.sso, function (i, k) {
						$.getJSON(k).complete(function(){
							if ( --len == 0 ) {
								callback();
							}
						});
					});
				} else {
					callback();
				}
			}
		});

		function tpl(level){
			var userHeadImg =  '//misc.360buyimg.com/lib/img/e/blank.gif';
			var userName = '<div class="u-plus"><a href="https://passport.jd.com/uc/login?ltype=logout" class="link-logout">退出</a><a href="https://plus.jd.com/index" target="_blank" class="icon-plus-dropdown"></a></div>';
			var userinfoHtml = '\
				<div class="dd-spacer"></div>\
				<div class="userinfo">\
					<div class="u-pic"><a target="_blank" href="//home.jd.com/"><img src="'+userHeadImg+'" width="60" height="60" /></a></div>'+userName+'\
					<div class="u-msg"></div>\
				</div>\
			';

			var levelBadges = [
				'',

				'<div class="badge-panel fore2"><a href="//vip.jd.com/help.html#mypri-01" target="_blank"><i></i><p class="u-name">自营运费补贴</p></a></div>\
				<div class="badge-panel fore3"><a href="//vip.jd.com/help.html#mypri-02" target="_blank"><i></i><p class="u-name">售后服务</p></a></div>\
				<div class="badge-panel fore4"><a href="//vip.jd.com/help.html#mypri-03" target="_blank"><i></i><p class="u-name">评价奖励</p></a></div>\
				<div class="badge-panel fore8"><a href="//vip.jd.com/help.html#mypri-06" target="_blank"><i></i><p class="u-name">装机服务</p></a></div>\
				<div class="badge-panel fore5 u-dis"><a href="//vip.jd.com/help.html#mypri-04" target="_blank"><i></i><p class="u-name">会员特价</p></a></div>\
				<div class="badge-panel fore6 u-dis"><a href="//vip.jd.com/help.html#mypri-05" target="_blank"><i></i><p class="u-name">生日礼包</p></a></div>\
				<div class="badge-panel fore7 u-dis"><a href="//vip.jd.com/help.html#mypri-07" target="_blank"><i></i><p class="u-name">专享礼包</p></a></div>\
				<div class="badge-panel fore9 u-dis"><a href="//vip.jd.com/help.html#mypri-08" target="_blank"><i></i><p class="u-name">贵宾专线</p></a></div>\
				<div class="badge-panel fore10 u-dis"><a href="//vip.jd.com/help.html#mypri-09" target="_blank"><i></i><p class="u-name">运费券</p></a></div>',

				'<div class="badge-panel fore2"><a href="//vip.jd.com/help.html#mypri-01" target="_blank"><i></i><p class="u-name">自营运费补贴</p></a></div>\
				<div class="badge-panel fore3"><a href="//vip.jd.com/help.html#mypri-02" target="_blank"><i></i><p class="u-name">售后服务</p></a></div>\
				<div class="badge-panel fore4"><a href="//vip.jd.com/help.html#mypri-03" target="_blank"><i></i><p class="u-name">评价奖励</p></a></div>\
				<div class="badge-panel fore5"><a href="//vip.jd.com/help.html#mypri-04" target="_blank"><i></i><p class="u-name">会员特价</p></a></div>\
				<div class="badge-panel fore8"><a href="//vip.jd.com/help.html#mypri-06" target="_blank"><i></i><p class="u-name">装机服务</p></a></div>\
				<div class="badge-panel fore6 u-dis"><a href="//vip.jd.com/help.html#mypri-05" target="_blank"><i></i><p class="u-name">生日礼包</p></a></div>\
				<div class="badge-panel fore7 u-dis"><a href="//vip.jd.com/help.html#mypri-07" target="_blank"><i></i><p class="u-name">专享礼包</p></a></div>\
				<div class="badge-panel fore9 u-dis"><a href="//vip.jd.com/help.html#mypri-08" target="_blank"><i></i><p class="u-name">贵宾专线</p></a></div>\
				<div class="badge-panel fore10 u-dis"><a href="//vip.jd.com/help.html#mypri-09" target="_blank"><i></i><p class="u-name">运费券</p></a></div>',

				'<div class="badge-panel fore2"><a href="//vip.jd.com/help.html#mypri-01" target="_blank"><i></i><p class="u-name">自营运费补贴</p></a></div>\
				<div class="badge-panel fore3"><a href="//vip.jd.com/help.html#mypri-02" target="_blank"><i></i><p class="u-name">售后服务</p></a></div>\
				<div class="badge-panel fore4"><a href="//vip.jd.com/help.html#mypri-03" target="_blank"><i></i><p class="u-name">评价奖励</p></a></div>\
				<div class="badge-panel fore5"><a href="//vip.jd.com/help.html#mypri-04" target="_blank"><i></i><p class="u-name">会员特价</p></a></div>\
				<div class="badge-panel fore6"><a href="//vip.jd.com/help.html#mypri-05" target="_blank"><i></i><p class="u-name">生日礼包</p></a></div>\
				<div class="badge-panel fore8"><a href="//vip.jd.com/help.html#mypri-06" target="_blank"><i></i><p class="u-name">装机服务</p></a></div>\
				<div class="badge-panel fore7 u-dis"><a href="//vip.jd.com/help.html#mypri-07" target="_blank"><i></i><p class="u-name">专享礼包</p></a></div>\
				<div class="badge-panel fore9 u-dis"><a href="//vip.jd.com/help.html#mypri-08" target="_blank"><i></i><p class="u-name">贵宾专线</p></a></div>\
				<div class="badge-panel fore10 u-dis"><a href="//vip.jd.com/help.html#mypri-09" target="_blank"><i></i><p class="u-name">运费券</p></a></div>',

				'<div class="badge-panel fore2"><a href="//vip.jd.com/help.html#mypri-01" target="_blank"><i></i><p class="u-name">自营运费补贴</p></a></div>\
				<div class="badge-panel fore3"><a href="//vip.jd.com/help.html#mypri-02" target="_blank"><i></i><p class="u-name">售后服务</p></a></div>\
				<div class="badge-panel fore4"><a href="//vip.jd.com/help.html#mypri-03" target="_blank"><i></i><p class="u-name">评价奖励</p></a></div>\
				<div class="badge-panel fore5"><a href="//vip.jd.com/help.html#mypri-04" target="_blank"><i></i><p class="u-name">会员特价</p></a></div>\
				<div class="badge-panel fore6"><a href="//vip.jd.com/help.html#mypri-05" target="_blank"><i></i><p class="u-name">生日礼包</p></a></div>\
				<div class="badge-panel fore7"><a href="//vip.jd.com/help.html#mypri-07" target="_blank"><i></i><p class="u-name">专享礼包</p></a></div>\
				<div class="badge-panel fore8"><a href="//vip.jd.com/help.html#mypri-06" target="_blank"><i></i><p class="u-name">装机服务</p></a></div>\
				<div class="badge-panel fore9 u-dis"><a href="//vip.jd.com/help.html#mypri-08" target="_blank"><i></i><p class="u-name">贵宾专线</p></a></div>\
				<div class="badge-panel fore10 u-dis"><a href="//vip.jd.com/help.html#mypri-09" target="_blank"><i></i><p class="u-name">运费券</p></a></div>',

				'<div class="badge-panel fore2"><a href="//vip.jd.com/help.html#mypri-01" target="_blank"><i></i><p class="u-name">自营运费补贴</p></a></div>\
				<div class="badge-panel fore3"><a href="//vip.jd.com/help.html#mypri-02" target="_blank"><i></i><p class="u-name">售后服务</p></a></div>\
				<div class="badge-panel fore4"><a href="//vip.jd.com/help.html#mypri-03" target="_blank"><i></i><p class="u-name">评价奖励</p></a></div>\
				<div class="badge-panel fore5"><a href="//vip.jd.com/help.html#mypri-04" target="_blank"><i></i><p class="u-name">会员特价</p></a></div>\
				<div class="badge-panel fore6"><a href="//vip.jd.com/help.html#mypri-05" target="_blank"><i></i><p class="u-name">生日礼包</p></a></div>\
				<div class="badge-panel fore7"><a href="//vip.jd.com/help.html#mypri-07" target="_blank"><i></i><p class="u-name">专享礼包</p></a></div>\
				<div class="badge-panel fore8"><a href="//vip.jd.com/help.html#mypri-06" target="_blank"><i></i><p class="u-name">装机服务</p></a></div>\
				<div class="badge-panel fore9"><a href="//vip.jd.com/help.html#mypri-08" target="_blank"><i></i><p class="u-name">贵宾专线</p></a></div>\
				<div class="badge-panel fore10"><a href="//vip.jd.com/help.html#mypri-09" target="_blank"><i></i><p class="u-name">运费券</p></a></div>',

				'<div class="badge-panel fore2"><a href="//vip.jd.com/help.html#mypri-01" target="_blank"><i></i><p class="u-name">自营运费补贴</p></a></div>\
				<div class="badge-panel fore3"><a href="//vip.jd.com/help.html#mypri-02" target="_blank"><i></i><p class="u-name">售后服务</p></a></div>\
				<div class="badge-panel fore4"><a href="//vip.jd.com/help.html#mypri-03" target="_blank"><i></i><p class="u-name">评价奖励</p></a></div>\
				<div class="badge-panel fore5"><a href="//vip.jd.com/help.html#mypri-04" target="_blank"><i></i><p class="u-name">会员特价</p></a></div>\
				<div class="badge-panel fore6"><a href="//vip.jd.com/help.html#mypri-05" target="_blank"><i></i><p class="u-name">生日礼包</p></a></div>\
				<div class="badge-panel fore7"><a href="//vip.jd.com/help.html#mypri-07" target="_blank"><i></i><p class="u-name">专享礼包</p></a></div>\
				<div class="badge-panel fore8"><a href="//vip.jd.com/help.html#mypri-06" target="_blank"><i></i><p class="u-name">装机服务</p></a></div>\
				<div class="badge-panel fore9"><a href="//vip.jd.com/help.html#mypri-08" target="_blank"><i></i><p class="u-name">贵宾专线</p></a></div>\
				<div class="badge-panel fore10"><a href="//vip.jd.com/help.html#mypri-09" target="_blank"><i></i><p class="u-name">运费券</p></a></div>',

				''
			];

			var badgeList = '<div class="badge-list">\
								<a href="javascript:void(0);" class="badge-list-prev">&lt;</a>\
								<div class="u-badges">\
									<div class="badge-panel-main">\
										<div class="badge-panel fore1"><a href="https://plus.jd.com/index" target="_blank"><i></i><p class="u-name">免费试用</p></a></div>' + levelBadges[level] + '</div>\
								</div>\
								<a href="javascript:void(0);" class="badge-list-next">&gt;</a>\
							</div>';

			userinfoHtml = userinfoHtml + badgeList;

			return userinfoHtml;
		}

		//已登陆取数字
		function hasLoginInit(){

			/**
			 * @头像
			 * @接口人 : muyongjun@jd.com
			 * @return {"realName ":aaa,"nickName ":bbb,"imgUrl ":ccc}
			 * 
			 * plusStatus: 1，试用-试用中
                           2，试用-已到期
                           3，正式-正式中
                           4，正式-已到期
                           x，其他状态为未开通

			 * userLevel: 1, 注册会员
			 			  2, 铜牌会员
						  3, 银牌会员
						  4, 金牌会员
						  5, 钻石会员
						  6, VIP会员
						  7, 企业会员
			 */
			 $.ajax({
				url:'//passport.jd.com/user/petName/getUserInfoForMiniJd.action',
				dataType : "jsonp",
				success:function(json){
					if (json) {
						var level = json.userLevel;
						var plusStatus = parseInt(json.plusStatus);

						if(!level){
							level = 1;
						}

						/**
						 * 当前为企业用户时，“京东会员”和“企业采购”需要改成单独的链接地址
						 */
						if(level == 7){
							var url_enterprise = '//sale.jd.com/act/rw4GgcjhpSQ.html';
							$('#shortcut-2014 li.fore4 .dt a').attr('href', url_enterprise);
						} 

						/**
						 * 处理用户昵称下拉框显示逻辑
						 */
						var html = tpl(level);
						options.el.find('.dd').html(html);

						if(json.imgUrl){
							options.el.find(".u-pic img").attr('src', json.imgUrl);	
						}

						var plusMsg = options.el.find('.u-msg');
						var iconPlusState = options.el.find('.badge-panel-main .fore1');

				        if(plusStatus >=1 && plusStatus <=4){
				        	options.el.find('.dt').addClass('icon-plus-state'+plusStatus);
				        	options.el.find('.dd').addClass('icon-plus-state'+plusStatus);
				        }

						var timestamp = new Date().getTime();

						function levelTop3(levelStr){
							if(plusStatus == 1){
								plusMsg.html('<a href="https://plus.jd.com/index" target="_blank">您可享' + levelStr + '特惠，开通PLUS &gt;');
				        		iconPlusState.find('.u-name').html('开通正式版');
							}
							else if(plusStatus == 2){
								plusMsg.html('<a href="https://plus.jd.com/index" target="_blank">您可享' + levelStr + '特惠，开通PLUS &gt;</a>');
				        		iconPlusState.find('.u-name').html('开通正式版');
				        		iconPlusState.addClass('u-dis');
							}
							else if(plusStatus == 3){
								plusMsg.html('<a href="https://plus.jd.com/index" target="_blank">您可享' + levelStr + '特惠，续费PLUS &gt;</a>');
				        		iconPlusState.find('.u-name').html('PLUS专享');
							}
							else if(plusStatus == 4){
								plusMsg.html('<a href="https://plus.jd.com/index" target="_blank">您可享' + levelStr + '特惠，续费PLUS &gt;</a>');
								iconPlusState.find('.u-name').html('PLUS续费');
				        		iconPlusState.addClass('u-dis');
							}
							else{
								plusMsg.html('<a href="https://plus.jd.com/index" target="_blank">您可享' + levelStr + '特惠，开通PLUS &gt;</a>');
				        		iconPlusState.addClass('u-dis');
								//隐藏时间：7月26日15:00-8月1日14:59:59
								if(timestamp >= 1501052400000 && timestamp < 1501570799000){
									$('#shortcut-2014 #ttbar-login .badge-panel.fore1').remove();
									plusMsg.html('<a href="https://plus.jd.com/index" target="_blank">购买Plus会员尊享顶级特权</a>');
								}
							}
						}

						function levelOthers(){
							if(plusStatus == 1){
								plusMsg.html('<a href="https://plus.jd.com/index" target="_blank">试用PLUS会员享更多特权 <span class="style-red">购买</span></a>');
				        		iconPlusState.find('.u-name').html('开通正式版');
							}
							else if(plusStatus == 2){
								plusMsg.html('<a href="https://plus.jd.com/index" target="_blank">购买PLUS会员尊享顶级特权&gt;</a>');
				        		iconPlusState.find('.u-name').html('开通正式版');
				        		iconPlusState.addClass('u-dis');
							}
							else if(plusStatus == 3){
								//如果是铜牌会员或者注册会员的正式期，需要链接到别的页面
								if(level == 2 || level == 1){
									plusMsg.html('<a href="https://sale.jd.com/act/Xno3MQRklCIm.html" target="_blank">PLUS专享商品每周更新&gt;</a>');
								}
								else{
									plusMsg.html('<a href="https://plus.jd.com/index" target="_blank">PLUS专享商品每周更新&gt;</a>');
								}
				        		iconPlusState.find('.u-name').html('PLUS专享');
							}
							else if(plusStatus == 4){
								plusMsg.html('<a href="https://plus.jd.com/index" target="_blank">续费PLUS会员尊享顶级特权 <span class="style-red">续费</span></a>');
								iconPlusState.find('.u-name').html('PLUS续费');
				        		iconPlusState.addClass('u-dis');
							}
							else{
								plusMsg.html('<a href="https://plus.jd.com/index" target="_blank">试用PLUS会员领运费券&gt;</a>');
				        		iconPlusState.addClass('u-dis');

								//隐藏时间：7月26日15:00-8月1日14:59:59
								if(timestamp >= 1501052400000 && timestamp < 1501570799000){
									$('#shortcut-2014 #ttbar-login .badge-panel.fore1').remove();
									plusMsg.html('<a href="https://plus.jd.com/index" target="_blank">购买Plus会员尊享顶级特权</a>');
								}
							}
						}
						
						switch(level){
							case 7:
								levelOthers();
								break;

							case 6:
								levelOthers();
								break;

							case 5:
								levelTop3('钻石');
								break;

							case 4:
								levelTop3('金牌');
								break;

							case 3: 
								levelTop3('银牌');
								break;

							case 2:
								levelOthers();
								break;

							case 1:
								levelOthers();
								break;

							default:
								levelOthers();
								break;
						}

						$('.badge-list').switchable({
				            type:'slider', 
				            mainClass:'badge-panel', 
				            contentClass:'badge-panel-main', 
				            prevClass: 'badge-list-prev',
				            nextClass: 'badge-list-next',
				            step:2,
				            hasPage:true
				        });
                    }
				}
			});
		}
	};
	
	return setUserInfo;
});/**
** update **
*
* 2014-10-27 16:50:00 by chenxiaochun
* 扩展off方法，当没有fun时，则删除name事件以及它的所有回调
* 修复无法删除事件的bug，将原来的实现：even.splice(even[l], 1)，改为：even.splice(l, 1)
* 
*/

define('jdf/event', function(require,exports,module){
	/**
	* @自定义事件
	*/
	var event = {
		//绑定事件
		on:function (name, fun) {
			var me = this;
			//event list
			this.list = this.list || (this.list = []);
			this.list[name] = this.list[name] || [];
			var funType = typeof(fun);
			
			if (typeof(fun) === 'undefined'){
				var fun = function(){
					if (me[name]){
						 me[name]();
					}
				}
			}

			if (typeof(fun) === 'function'){
				this.list[name].push(fun);
			}
		},
		//解除事件绑定
		off:function (name, fun) {
			if(typeof(fun) == 'function'){
				if (typeof(this.list) != 'undefined') {
					var even = this.list[name];
					if (even) {
						var l = even.length;
						while (l--) {
							if (even[l] === fun) {
								even.splice(l, 1);
							}
						}
					}
				}
			}else{
				//如果没有指定fun，则清除name事件以及它的所有回调函数
				this.list[name] = [];
			}
		},
		//触发事件
		trigger : function (name, obj) {
			if (typeof(this.list) != 'undefined') {
				var event = this.list[name];
				if (event) {
					for (var i in event ){
						if(event.hasOwnProperty(i)){
							if (typeof(event[i]) == 'function'){
								event[i](obj);
							}
						}
					}
				}
			}
		},
		//移除所有事件
		removeAll:function (name) {
			this.list = [];
		}
	};
	return event;
});/**
*####弹出层组件####
* 
***Demo**
* [dialog](../ui/dialog/1.0.0/example/dialog.html "Demo")
*
***参数**
*
*  - `maskHas` {Boolean} true  是否有遮盖层
*  - `maskClass`{String} 'ui-mask'  遮盖层的className
*  - `maskIframe`{Boolean} false  遮盖层是否用iframe
*  - `maskClose` {Boolean} false  是否可以点击mask关闭dialog
*  - `opacity` {Number} 0.15  遮盖层透明度
*  - `zIndex` {Number} 9998  遮盖层zIndex,主体和主体上面的元素依次累加
*  - `type` {String} 'text'  主体类型包括text,html,image,json,iframe
*  - `source` {String} null  主体的内容
*  - `extendMainClass` {String} null  扩展主体的class,可以添加多个，如 "class1 class2 ..."
*  - `autoIframe`{Boolean} true  主体类型如果是iframe是否自适应
*  - `autoOpen` {Boolean} true  是否直接打开对话框
*  - `autoCloseTime` {Number} 0  倒计时N秒后关闭,默认不开启
*  - `title` {String} ''  标题方案,设置为null则不显示标题
*  - `hasButton` {Boolean} false  是否有确定,取消按钮
*  - `submitButton` {String} ''  '确认' 确认按钮文字
*  - `cancelButton` {String} ''  '取消' 取消按钮文字
*  - `onSubmit` {Function} null 确认按钮回调函数
*  - `onCancel` {Function} null  取消按钮回调函数，或者是弹层关闭时的回调函数
*  - `onBeforeClose` {Function} null  关闭弹窗前的回调函数
*  - `closeButton` {Boolean} true  是否有关闭按钮
*  - `onReady` {Function} null  创建完成后回调
*  - `width` {Number} null  主体宽度
*  - `height ` {Number} null  主体高度
*  - `fixed` {Boolean} false  主体是否加position:fixed固定
*  - `autoUpdate` {Boolean} false  主体自适应窗口调整top值
*  - `maskId` {String} null 遮盖层id
*  - `mainId` {String} null 主体系id
*  - `contentId` {String} null 主体内容部分id
*  - `titleId` {String} null 标题id
*  - `iframeName` {String} 'dialogIframe' iframe类型iframe name
*  - `iframeTimestamp` {Boolean} true iframe类型iframe url加时间戳
*
***备注**
* 
*  关闭当前页面1个dialog:  var a = $('body').dialog(); a.close();
*  关闭当前页面所有dialog: $.closeDialog() 
* 
***举例**
* 
*	$('#dialog').dialog({
*		title:'title',
*		type:'iframe',
*		source:'iframe.html'
*	});
*
* **update**
* 2015-06-02 14:12:00 by chenxiaochun
* 当弹层关闭时调用onCancel函数
*
* 2015-02-11 16:33:00 by chenxiaochun
* 添加是否可以点击mask关闭dialog
*
* 2013-10-17 9:10:17 by liuwei1
*/

;(function($, undefined) {
	$.ui.define('dialog', {
		options:{		
			hasCssLink:true,
			baseVersion:'1.0.0',
			cssLinkVersion:'1.0.0',
			maskHas : true,//是否有遮盖层
			maskClass:'ui-mask',//遮盖层的className
			maskIframe:false,//遮盖层是否用iframe
			maskClose: false,//是否可以点击mask关闭dialog
			opacity : 0.15,//遮盖层透明度
			zIndex:9998,//遮盖层zIndex,主体和主体上面的元素依次累加

			type:'text',//主体类型 text,html,image,json,iframe
			source:null,//主体的内容
            extendMainClass:null,//扩展主体的class
			autoIframe:true,//主体类型如果是iframe是否自适应
			autoOpen:true,//是否直接打开对话框
			autoCloseTime:0,//倒计时N秒后关闭,默认不开启
			
			title:true,//标题方案,设置为null则不显示标题
			hasButton:false,//是否有确定,取消按钮
			submitButton:'确认',//确认按钮文字
			cancelButton:'取消',//取消按钮文字
			onSubmit:null,//确认按钮回调函数
			onCancel:null,//取消按钮回调函数
			onBeforeClose: null, //关闭按钮前回调函数

			closeButton:true,//是否有关闭按钮

			onReady:null,//创建完成后回调
			width : 480,//主体宽度
			height :null,//主体高度
			fixed:false,//主体是否加position:fixed固定
			autoUpdate:false,//主体自适应窗口调整top值

			maskId:null,//遮盖层id
			mainId:null,//主体系id
			contentId:null,//主体内容部分id
			titleId:null,//标题id

			iframeName:'dialogIframe', //iframe类型iframe name
			iframeTimestamp:true //iframe类型iframe url加时间戳
		},
		init:function(){
			var opts = this.options;
			
			if ($.browser.isIE6()) {
				opts.fixed = false;
			}

			this.createMain();
			this.createMask();
			this.mainStyle();
			
			if (opts.autoOpen){
				this.open();
			}else {
				this.hide();
			}

			this.bind();
		},
		show:function(){
			if(this.mask){
				this.mask.show();
			}
			this.el.show();
		},
		hide:function(){
			if(this.mask){
				this.mask.hide();
			}
			this.el.hide();
		},
		tpl:{
			mask: '<div class="ui-mask"></div>',
			
			close: '<a class="ui-dialog-close" title="关闭"><span class="ui-icon ui-icon-delete"></span></a>',
			title: '<div class="ui-dialog-title">\
						<span><%=title%></span>\
					</div>\
				',
			wrap: '<div class="ui-dialog"></div>',
			conten: '<div class="ui-dialog-content"></div>',
			button:'<div class="ui-dialog-btn">\
						<%if($.trim(submit)){%><a class="ui-dialog-btn-submit"><%=submit%></a><%}%>\
						<%if($.trim(cancel)){%><a class="ui-dialog-btn-cancel"><%=cancel%></a><%}%>\
					</div>\
				'
		},
		//创建主体
		createMain:function(){
			var self = this;
			var opts = this.options;
			var title = '';
			
			//title
			if (opts.title){
				title = $.tpl(this.tpl.title,{title:opts.title});
			}

			var button = $.tpl(this.tpl.button,{submit:this.options.submitButton,cancel:this.options.cancelButton});

            var dialogHtml = title + this.tpl.conten + (!opts.hasButton ? '' :  button);
			
			//wrap
			this.el = $(this.tpl.wrap);
            //添加扩展样式
            if ( opts.extendMainClass ) {
                this.el.addClass(opts.extendMainClass);
            }

			$(dialogHtml).appendTo(this.el);
			this.el.appendTo('body');

			
			//主体
			this.content = this.el.find('.ui-dialog-content');
			this.title = this.el.find('.ui-dialog-title');
			
			//配置id
			if (opts.mainId) {
				this.el.attr('id',opts.mainId);
			}

			if (opts.contentId) {
				this.content.attr('id',opts.contentId)
			}

			if (opts.titleId) {
				this.title.attr('id',opts.titleId)
			}

			//顶部关闭按钮
			if (opts.closeButton){
				this.el.append(this.tpl.close);
			}
		},
		/**
         * 创建遮盖层
         * @method createMask
         */
		createMask:function(){
			var self = this;
			var opts = this.options;
			if (!opts.maskHas) return;
			
			var maskObj = this.mask = $(document.createElement("div"));
			this.mask.addClass(opts.maskClass).css({
				position:"absolute",
				left:0,
				top:0,
				opacity:opts.opacity,
				zIndex:opts.zIndex,
				backgroundColor:"#000",
				width:$.page.docWidth(),
				height:$.page.docHeight()
			});

			if (opts.maskId) {
				this.mask.attr('id',opts.maskId)
			}

			if (!$('.'+opts.maskClass)[0]) this.mask.appendTo('body');
			
			//for IE6 add iframe
			if ($.browser.isIE6() || opts.maskIframe){
				this.mask.append('<iframe src="about:blank" class="jdMaskIframe" frameBorder="0" style="width:100%;height:100%;position:absolute;z-index:'+(opts.zIndex+1)+';opacity:0;filter:alpha(opacity=0);top:0;left:0;">');
			}

			//自适应窗口
			$(window).resize(function(){
				self.mask.css({
					width:$.page.docWidth(),
					height:$.page.docHeight()
				}); 
			});
		},
		getPadding:function(ele){
			 return {
			 	width:parseInt(ele.css('paddingLeft'),10) + parseInt(ele.css('paddingRight'),10),
			 	height:parseInt(ele.css('paddingTop'),10) + parseInt(ele.css('paddingBottom'),10)
			 }
		},
		/**
         * 主体样式配置
         * @method mainStyle
         */
		mainStyle:function(){
			var opts = this.options;

			if (opts.title){
				//增加一个title的高度
				opts.height = opts.height ? opts.height+28 : opts.height;
				this.title.css({width:opts.width-this.getPadding(this.content).width});
			}
			
			this.content.css({
				height:!opts.height ? '' : opts.height,
				width:!opts.width ? '' : opts.width-this.getPadding(this.content).width,
				overflow: 'hidden'
			})

			//主体宽度不设置IE6会有bug
			if (opts.width) {
				this.el.css({width:opts.width})
			}

			var postionValue = opts.fixed && !$.browser.isIE6() ? 'fixed' : 'absolute';
			this.el.css({
				position: postionValue,
				zIndex:opts.zIndex+2,
				display:'block',
				overflow:'hidden'
			});

			this.updateMain();
		},
		/**
         * 更新主体top,left (用在:窗口有变动时,更新一个主体位置)
         * @method updateMain
         */
		updateMain:function(){
			var opts = this.options;
			var scrollbarWidth = $.page.docWidth() != $.page.clientWidth() ? 16 :0;
			var scrollTop = opts.fixed ? 0 : $(document).scrollTop();
			var scrollLeft = opts.fixed ? 0 : $(document).scrollLeft();

			var top = ( $.page.clientHeight() - this.el.outerHeight() ) / 2 + scrollTop;
			//css3 border宽度
			//var borderWidth = !parseInt(this.el.css('borderWidth')) ?  0 :  2 * parseInt(this.el.css('borderWidth'));
			var borderWidth = $.browser.msie && $.browser.version < 10 ? 0 : 8;
			
			var left = ( $.page.clientWidth() - scrollbarWidth - (!opts.width ? 0 : opts.width +borderWidth) ) / 2 + scrollLeft;
			
			if (top<0) { top = 0;}
			if (left<0) { left = 0;}

			this.el.css({
				top:top,
				left:left
			});
		},
		bind:function(){
			var self = this;
			var opts = this.options;
			if (this.options.closeButton){
				this.el.find('.ui-dialog-close').bind('click',function(){
					self.close();
				});
			}

			if (this.options.autoUpdate) {
				$(window).resize(function(){
					self.updateMain();
				});
			}

			if (opts.hasButton) {
				this.el.find('.ui-dialog-btn-submit').bind('click',function(){
					if (opts.onSubmit){
						opts.onSubmit.call(this);
					}
				})

				this.el.find('.ui-dialog-btn-cancel').bind('click',function(){
					 self.close();
				})
			}

			if(this.options.maskHas && this.options.maskClose){
				$(this.mask).bind('click', function(){
					self.close();
				});
			}
		},
		/**
         * 打开对话框
         * @method open
         */
		open:function(){
			this.openType();
			this.autoClose();
			this.show();
			this.iframeSet();
			if (this.options.onReady){
				this.options.onReady.call(this);
			}
		},
		/**
         * 打开不同类型的遮盖层
         * @method openType
         */
		openType:function(){
			var opts = this.options;
			var self = this;
			switch (opts.type){
				case "text":
					this.content.html(opts.source);
					break ;
				case "html":
					$(opts.source).clone().appendTo(this.content);
					break ;
				case "iframe":
					var css = {
						width:"100%",
						height:"100%"
					}

					if(opts.iframeTimestamp && !/&t=/.test(opts.source) ){
						opts.source += (opts.source.indexOf('?') > -1 ?  '&' : '?') + 't=' + new Date().getTime();
					}
					
					this.iframe = $('<iframe src="'+opts.source+'" id="'+opts.iframeName+'" name="'+opts.iframeName+'" marginwidth="0" marginheight="0" frameborder="0" scrolling="no" style="border:0"></iframe>').css(css).appendTo(this.content);
					//this.iframe.attr('name','dialogIframe' + new Date().getTime())
					break ;
				case "image":
					var width = opts.width ? 'width="' + opts.width +'"' : '';
					var height = opts.height ? 'height="' + opts.height +'"' : '';
					var img = $('<img src='+opts.source+' '+width+height+'/>');
					img.appendTo(this.content);
					img.bind('load',function(){
						self.updateMain();
					});
					break ;
				case "json":
					//todo
					break ;
			}

			self.updateMain();
		},
		 /**
         * 关闭当前对话框
         * @method close
         */
		close:function(){
			var opts = this.options;
			var autoCloseTime = this.options.autoCloseTime;

			if (opts.onBeforeClose) {
			   	opts.onBeforeClose.call(this);
			}

			this.el.remove();
			if(this.mask){
				this.mask.remove();
			}

			if (opts.onCancel){
				opts.onCancel.call(this);
			}
		},
		 /**
         * 倒计时autoCloseTime秒后关闭当前对话框
         * @method autoClose
         * @param {Number} autoCloseTime
         */
		autoClose:function(){
			var self = this;
			var autoCloseTime = this.options.autoCloseTime;
			 if (autoCloseTime){
				var x = autoCloseTime;
				$("<div class='ui-dialog-autoclose'><span id='ui-autoclose'>" + x + "</span>秒后自动关闭</div>").appendTo(this.el);
				clearInterval(window.autoCloseTimerDialog);
				window.autoCloseTimerDialog = setInterval(function() {
					x--;
					$("#ui-autoclose").html(x);
					if (x == 0) {
						x = autoCloseTime;
						self.close();
						clearInterval(window.autoCloseTimerDialog);
					}
				}, 1000);
				this.updateMain();
			 }
		},
		//iframe高度
		getIframeHeight:function (iframe) {
			var doc = iframe[0].contentWindow.document;
			if (doc.body.scrollHeight && doc.documentElement.scrollHeight) {
				return Math.min(
					doc.body.scrollHeight,
					doc.documentElement.scrollHeight
				);
			} else if (doc.documentElement.scrollHeight) {
				return doc.documentElement.scrollHeight;
			} else if (doc.body.scrollHeight) {
				return doc.body.scrollHeight;
			}
		},
		//同步iframe高度
		syncHeight:function(){
			var self = this;
			var height;

			try {height = self.getIframeHeight(self.iframe);}catch(e) {}

			if ( height ) {
				//主体样式重置
				self.iframe.css({height:height});
				self.updateMain();
			}
		},
		//iframe配置
		iframeSet:function(){
			var self = this;
			var opts = this.options;
			if (opts.type != "iframe"){
				return;
			}
			if(opts.autoIframe){
				//iframe加载慢的时候会有空白
				//this.el.css({visibility:'hidden'});
				this.iframe.one('load',function(){
					//this.iframeInterval = setInterval(function(){
					//	self.syncHeight();
					//},300);
					self.syncHeight();
					//self.el.css({visibility:'visible'});
				})
			}
		}
	});

	/**
	* @关闭当前页面的所有对话框
	*/
	$.closeDialog = function(){
		$('.ui-dialog,.ui-mask').remove();
		clearInterval(window.autoCloseTimerDialog);
	}

})(jQuery);