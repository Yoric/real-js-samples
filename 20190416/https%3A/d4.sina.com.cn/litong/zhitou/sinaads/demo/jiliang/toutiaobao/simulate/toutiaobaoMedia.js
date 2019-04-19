(function(window, sinaadToolkit) {
	"use strict";

	var box_size = [300, 382],
		box_pos = ['left', 'bottom'],
		closeBtnSize = [70, 17],
		clsoBtnSrc = "//d3.sina.com.cn/litong/zhitou/sinaads/demo/jiliang/toutiaobao/close.jpg";

	function toutiaoBox(config) {
		var me = this;
		me.width = config.width || box_size[0];
		me.height = config.height || box_size[1];
		me.position = config.position || box_pos;

		//整个区域
		var monbox = me.monbox = new sinaadToolkit.Box({
			width: me.width,
			height: me.height,
			position: {
				my: 'left bottom',
				of: 'window',
				at: 'left bottom'
			},
			follow: 1,
			zIndex: 10505
		});

		monbox.getMain().style.backgroundColor = "#F5F5F5";
		monbox.getMain().style.fontFamily = "microsoft yahei";
		monbox.getMain().style.border = "1px solid #fff";
		//关闭按钮
		var closeBtn = me.closeBtn = document.createElement('a');
		closeBtn.id = 'closeBtn';
		closeBtn.style.cssText = 'position:absolute;' + 'right:-1px;top:-' + closeBtnSize[1] + 'px;display:block;width:' + closeBtnSize[0] + ';height:' + closeBtnSize[1] + 'cursor:pointer;text-decoration:none;border:none;';
		closeBtn.href = 'javascript:void(0);';
		closeBtn.innerHTML = '<img src="' + clsoBtnSrc + '" style="cursor:pointer;border:none;">';
		monbox.getMain().appendChild(closeBtn);

		var clicked = 0;
		window.onscroll = function() {
			if(clicked == 0) {
				var st = document.body.scrollTop || document.documentElement.scrollTop;
				if(st > 1700) {
					monbox.hide();
				} else {
					monbox.show();
				}
			}
		}

		sinaadToolkit.event.on(closeBtn, 'click', function() {
			clicked = 1;
			monbox.hide();
			monbox.remove();
		});

		// if(leadNewsData.focusPicture != 'undefined' && leadNewsData.focusPicture.state === 'true') {
		if(leadNewsData.focusPicture != 'undefined') {
			//栏目条
			var lanmutiao = me.lanmutiao = document.createElement('div');
			lanmutiao.id = 'lanmutiao';
			lanmutiao.style.cssText = 'width: 300px;height: 30px;background-color: #d44229;line-height:30px;text-indent:.5em;color: #fff;font-size: 16px;font-weight:bold;';
			lanmutiao.innerHTML = '<a suda-uatrack="key=homepage_toutiao&value=toutiao_title" href="' + leadNewsData.focusPicture.lanmutiao.link + '" target="_blank" style="text-decoration: none;color: #fff;">' + leadNewsData.focusPicture.lanmutiao.title + '</a>';
            monbox.getMain().appendChild(lanmutiao);
            lanmutiao.style.display = 'none';

			//logo赞助
			var logoAD = document.createElement('div');
			logoAD.style.cssText = 'float: right;height:20px;margin-top: 2.5px;text-indent:0;';
			logoAD.innerHTML = '<ins class="sinaads" data-ad-pdps="8F959F769243"></ins>';
			lanmutiao.appendChild(logoAD);
			(sinaads = window.sinaads || []).push({
				params: {
					sinaads_fail_handler: function() {
						if(leadNewsData.focusPicture.state != 'true') {
							lanmutiao.style.display = 'none';
							if(leadNewsData.headlinePoster != 'undefined' && leadNewsData.headlinePoster.state === 'true') {
								var headlinePoster = me.headlinePoster = document.createElement('div');
								headlinePoster.id = 'headlinePoster';
								headlinePoster.style.cssText = 'width: 300px;height:380px;overflow:hidden;';
								headlinePoster.innerHTML = '<a suda-uatrack="key=homepage_toutiao&value=yizhenpic" href="' + leadNewsData.headlinePoster.link[0] + '" target="_blank" style="text-decoration: none;color: #fff;"><img src="' + leadNewsData.headlinePoster.images.src[0] + '"></a>';

								monbox.getMain().appendChild(headlinePoster);

								//    一帧曝光检测
								if(leadNewsData.headlinePoster != null) {
									window.SIMA && window.SIMA({
										action: "toutiaobao",
										pk: '179823',
										data: {
											exp: "visual",
											cre: "tianyi",
											mod: "headttb"
										}
									});
									headlinePoster.onclick = function() {
										window.SIMA && window.SIMA({
											action: "toutiaobao",
											pk: '179823',
											data: {
												exp: "clickhead",
												cre: "tianyi",
												mod: "headttb"
											}
										})
									}
								}

							} else if(leadNewsData.successively != 'undefined' && leadNewsData.successively.state === 'true') {
								var images = leadNewsData.successively.images;
								var sclyi = images.srcgroup.length;
								var wid = (sclyi + 1) * 300;
								var lef = 0;

								var successively = me.successively = document.createElement('div');
								successively.id = 'successively';
								successively.style.cssText = 'width:300px;height:380px;position: relative;overflow: hidden;';
								monbox.getMain().appendChild(successively);

								var success = document.createElement('div');
								success.id = 'success';
								success.style.cssText = 'width:' + wid + 'px;height:380px;overflow: hidden;position: absolute;left:0';

								for(var i = 0; i < sclyi; i++) {
									success.innerHTML += '<a href="' + images.linkgroup[i] + '" target="_blank" style="text-decoration: none;color: #fff;float:left;"><img src="' + images.srcgroup[i] + '"></a>';
								}
								success.innerHTML += '<a href="' + images.linkgroup[0] + '" target="_blank" style="text-decoration: none;color: #fff;float:left;"><img src="' + images.srcgroup[0] + '"></a>';
								successively.appendChild(success);

								(function set() {
									setTimeout(function() {
										if(lef <= (-wid + 300)) {
											lef = 0;
										}

										var num = 0;
										var seti = setInterval(function() {
											num++;
											lef -= 10;
											success.style.left = lef + 'px';
											if(num == 30) {
												clearInterval(seti);
												set();
											}
										}, 10);
									}, 5000);
								})();

								//  	轮播曝光计算
								if(leadNewsData.successively != null) {
									window.SIMA && window.SIMA({
										action: "toutiaobao",
										pk: '179823',
										data: {
											exp: "visual",
											cre: "tianyi",
											mod: "sucttb"
										}
									});
									success.onclick = function() {
										window.SIMA && window.SIMA({
											action: "toutiaobao",
											pk: '179823',
											data: {
												exp: "clicksuc",
												cre: "tianyi",
												mod: "sucttb"
											}
										})
									}
								}

							} else if(leadNewsData.videoTmp != 'undefined' && leadNewsData.videoTmp.state === 'true') {
								
								// 视频模板

								// 上部图片
								var videoTmpImg = me.videoTmpImg = document.createElement('div');
								var ImgTopHeight = null;

								if(leadNewsData.videoTmp.choice === 1) {
									ImgTopHeight = 78;
								} else {
									ImgTopHeight = 133;
								}
								videoTmpImg.id = 'videoTmpImg';
								videoTmpImg.style.cssText = 'width: 300px;height:' + ImgTopHeight + 'px;background-color: #BFBFBF;color: #000;font-size: 30px;';
								videoTmpImg.innerHTML = '<a target="_blank" href = "' + leadNewsData.videoTmp.linkTop + '"><img style="width:300px;display:block;float:left;" src="' + leadNewsData.videoTmp.imgtop + '" alt="" /></a>'

								monbox.getMain().appendChild(videoTmpImg);
								
								//视频放大按钮
								var videoBtn = document.createElement('a');
								videoBtn.innerText = '放大看视频';
								videoBtn.href = leadNewsData.videoTmp.video.link;
								videoBtn.target = '_blank';
								videoBtn.style.cssText = 'width:70px;height: 20px; color:#EEEEEE; background: #535353; text-align: center; border:1px solid #BDBDBD; text-decoration:none; display: inline-block;border-radius: 10px;position: absolute;top: '+ (ImgTopHeight-26) +'px; right: 6px; font-size: 12px;';
								monbox.getMain().appendChild(videoBtn);
								
								// 中间视频
								var videoTmpBody = me.videoTmpBody = document.createElement('div');
								videoTmpBody.style.cssText = 'width: 300px;height: 169px;background-color: #000;';
								videoTmpBody.innerHTML = '<video loop muted width="300" height="169" controls="controls" autoplay="autoplay" style="background-color: #000;"><source src="' + leadNewsData.videoTmp.video.src + '" type="video/mp4" />您的浏览器不支持</video>';
								monbox.getMain().appendChild(videoTmpBody);

								// 下部图片
								var videoTemBottom = me.videoTemBottom = document.createElement('div');
								videoTemBottom.id = 'videoTemBottom';
								videoTemBottom.style.cssText = 'width: 300px;background-color: #BFBFBF;text-indent:.5em;color: #000;';
								videoTemBottom.innerHTML = '<a  target="_blank" href = "' + leadNewsData.videoTmp.linkBottom + '"><img style="width:300px;display:block;float:left;" src="' + leadNewsData.videoTmp.imgbottom + '" alt="" /></a>'
								monbox.getMain().appendChild(videoTemBottom);

								//视频头条报的可视曝光、点击曝光

								if(leadNewsData.videoTmp != null) {
									window.SIMA && window.SIMA({
										action: "toutiaobao",
										pk: '179823',
										data: {
											exp: "visual",
											cre: "tianyi",
											mod: "pchomettb"
										}
									})
									videoTmpImg.onclick = function() {
										window.SIMA && window.SIMA({
											action: "toutiaobao",
											pk: '179823',
											data: {
												exp: "clicktop",
												cre: "tianyi",
												mod: "pchomettb"
											}
										})
									}
									videoTemBottom.onclick = function() {
										window.SIMA && window.SIMA({
											action: "toutiaobao",
											pk: '179823',
											data: {
												exp: "clickbottom",
												cre: "tianyi",
												mod: "pchomettb"
											}
										})
									}
									videoBtn.onclick = function() {
										window.SIMA && window.SIMA({
											action: "toutiaobao",
											pk: '179823',
											data: {
												exp: "clickBtn",
												cre: "tianyi",
												mod: "pchomettb"
											}
										})
									}
								}

							} else if(leadNewsData.question != 'undefined' && leadNewsData.question.state === 'true') {
								var question = me.question = document.createElement('div');
								question.innerHTML = '<iframe src = "' + leadNewsData.question.src + '" frameborder="0" width="300" height="380" scrolling="no"></iframe>';
								monbox.getMain().appendChild(question);
							};
						} else if(leadNewsData.focusPicture.state == 'true') {
							ZaoWanBao(monbox);
						};
					}, //广告加载失败回调 [function]
					sinaads_success_handler: function() {
						ZaoWanBao(monbox);
					} //广告加载成功回调 [function]
				}
			});

		};

		function ZaoWanBao(monbox) {
            lanmutiao.style.display = 'block';
			//焦点图
			if(leadNewsData.focusPicture.focusPic.src) {

				var src = leadNewsData.focusPicture.focusPic.src,
					w = leadNewsData.focusPicture.focusPic.width,
					h = leadNewsData.focusPicture.focusPic.height;

				var ifr = document.createElement('iframe');
				ifr.setAttribute("src", src);
				ifr.setAttribute("width", w);
				ifr.setAttribute("height", h);
				ifr.setAttribute("frameborder", "0");
				ifr.setAttribute("scrolling", "no");
				ifr.style.display = 'block';
				monbox.getMain().appendChild(ifr);
			};

			//运营内容1
			var channel1 = document.createElement('div');
			channel1.style.cssText = 'width: 300px;height: 87px;border-bottom: 1px solid #ABABAB;';
			channel1.innerHTML = '<div suda-uatrack="key=homepage_toutiao&value=toutiao_click1" style="width: 90px;height: 70px;padding:9px;float:left;"><a href="' + leadNewsData.focusPicture.tuwen1.link + '" target="_blank" style="text-decoration: none;"><img src="' + leadNewsData.focusPicture.tuwen1.imgSrc + '"></a></div><div style="width: 172px;height: 70px;float: left;margin: 9px 16px 9px 4px;"><a href="' + leadNewsData.focusPicture.tuwen1.link + '" target="_blank" style="text-decoration: none;font-size: 14px;color: #333;line-height:18px;">' + leadNewsData.focusPicture.tuwen1.title + '</a><a href="' + leadNewsData.focusPicture.tuwen1.link + '" target="_blank" style="text-decoration: none;"><p style="font-size: 12px;color: #9a9a9a;line-height:16px;">' + leadNewsData.focusPicture.tuwen1.content + '</p></a></div>';
			monbox.getMain().appendChild(channel1);

			//图文广告
			var tuwenAD = document.createElement('ins');
			tuwenAD.style.cssText = 'width: 300px;height: 87px;border-bottom: 1px solid #ABABAB;';
			tuwenAD.setAttribute('class', 'sinaads');
			tuwenAD.setAttribute('data-ad-pdps', '243BA85D45D5');
			monbox.getMain().appendChild(tuwenAD);
			(sinaads = window.sinaads || []).push({
				params: {
					sinaads_ad_tpl: function() {
						return '<div style="width: 90px;height: 70px;padding:9px;float:left;"><a href="#{link0}" target="_blank" style="text-decoration: none;"><img src="#{src0}"></a></div><div style="width: 172px;height: 70px;float: left;margin: 9px 16px 9px 4px;"><a href="#{link0}" target="_blank" style="text-decoration: none;font-size: 14px;color: #333;line-height:18px;">#{src1}</a><a href="#{link0}" target="_blank" style="text-decoration: none;"><p style="font-size: 12px;color: #9a9a9a;line-height:16px;">#{src2}</p></a></div>';
					},
					//图文广告加载失败时，加载运营内容2
					sinaads_fail_handler: function() {
						var channel2 = document.createElement('div');
						channel2.style.cssText = 'width: 300px;height: 87px;border-bottom: 1px solid #ABABAB;';
						channel2.innerHTML =
							'<div suda-uatrack="key=homepage_toutiao&value=toutiao_click2" style="width: 90px;height: 70px;padding:9px;float:left;"><a href="' +
							leadNewsData.focusPicture.tuwen2.link +
							'" target="_blank" style="text-decoration: none;"><img src="' +
							leadNewsData.focusPicture.tuwen2.imgSrc +
							'"></a></div><div style="width: 172px;height: 70px;float: left;margin: 9px 16px 9px 4px;"><a href="' + leadNewsData.focusPicture.tuwen2.link +
							'" target="_blank" style="text-decoration: none;font-size: 14px;color: #333;line-height:18px;">' +
							leadNewsData.focusPicture.tuwen2.title +
							'</a><a href="' +
							leadNewsData.focusPicture.tuwen2.link +
							'" target="_blank" style="text-decoration: none;"><p style="font-size: 12px;color: #9a9a9a;line-height:16px;">' +
							leadNewsData.focusPicture.tuwen2.content +
							'</p></a></div>';
						tuwenAD.appendChild(channel2);
					}
				}
			});
			// 更多
			var moreInfo = document.createElement('div');
			moreInfo.style.cssText = 'width: 300px;height: 28px;text-align: center;font-size: 12px;';
			moreInfo.innerHTML = '<a suda-uatrack="key=homepage_toutiao&value=toutiao_clickmore" style="display: block;padding-top: 4px;color: #a8a8a8;" href="' + leadNewsData.focusPicture.lanmutiao.link + '" target="_blank">查看更多</a>';
			monbox.getMain().appendChild(moreInfo);

			//图文曝光检测
			if(leadNewsData.focusPicture != null) {
				window.SIMA && window.SIMA({
					action: "toutiaobao",
					pk: '179823',
					data: {
						exp: "visual",
						cre: "tianyi",
						mod: "focusttb"
					}
				});
				monbox.getMain().onclick = function() {
					window.SIMA && window.SIMA({
						action: "toutiaobao",
						pk: '179823',
						data: {
							exp: "clickfocus",
							cre: "tianyi",
							mod: "focusttb"
						}
					})
				}
			}
		}
		try {
			sinaadToolkit.debug('Media: In building toutiaoBox complete!');
			return this;
		} catch(e) {}
	}

	toutiaoBox.prototype = {
		show: function() {
			var me = this;
			me.monbox.show();
		},
		hide: function() {
			var me = this;
			me.monbox.hide();
		}
	};
	sinaadToolkit.toutiaoBox = sinaadToolkit.toutiaoBox || toutiaoBox;
})(window, sinaadToolkit);