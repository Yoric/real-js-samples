/*global OS jQuery seajs Tracker define DOM:true*/
/* eslint-disable no-script-url */
define(function (require, exports, module) {
  OS.onlineServer = {
    onlineServiceDOM: function (config, logourl, seed, data) {
      var html = '',
        reason = '',
        menuHtml = '',
        hideMenuHtml = '';
      if (typeof (seed) == 'undefined') {
        var seed = '';
      }
      var domPosition = '';
      window.ENTERSERVPOSITION = window.ENTERSERVPOSITION || {};
      if (window.ENTERSERVPOSITION.top) {
        domPosition += 'top:' + window.ENTERSERVPOSITION.top + ';';
      } else if (window.ENTERSERVPOSITION.bottom) {
        domPosition += 'bottom:' + window.ENTERSERVPOSITION.bottom + ';';
      } else {
        domPosition += 'top:228px;';
      }
      if (window.ENTERSERVPOSITION.right) {
        domPosition += 'right:' + window.ENTERSERVPOSITION.right + ';';
      } else if (window.ENTERSERVPOSITION.left) {
        domPosition += 'left:' + window.ENTERSERVPOSITION.left + ';';
      } else {
        domPosition += 'right:0';
      }
      if (data && data.recommend) {
        jQuery.each(data.recommend, function (i, elem) {
          html += '<div>' + elem.title + '</div>';
        })
      }
      var menuArr = [
        {
          name: '我的客服',
          href: '',
          icon: 'https://gw.alipayobjects.com/mdn/pa_custsrv/afts/img/A*ymBVTZxh_hAAAAAAAAAAAABjARQnAQ'
        },
        {
          name: '帮助中心',
          href: 'https://cshall.alipay.com/enterprise/index.htm',
          icon: 'https://gw.alipayobjects.com/mdn/pa_custsrv/afts/img/A*DLG0TaTnvzEAAAAAAAAAAABjAQAAAQ/original'
        },
        {
          name: '吐槽反馈',
          href: 'https://egg.alipay.com/egg/advice.htm',
          icon: 'https://gw.alipayobjects.com/mdn/pa_custsrv/afts/img/A*cKGcSJ5sQhQAAAAAAAAAAABjAQAAAQ/original'
        },
        {
          name: '回到顶部',
          href: '',
          icon: 'https://gw.alipayobjects.com/mdn/pa_custsrv/afts/img/A*1xbFQ7BDUIgAAAAAAAAAAABjAQAAAQ/original'
        }
      ]
      // 菜单样式逻辑处理
      jQuery.each(menuArr, function (i, elem) {
        var href = 'javascript:void(0)',
          className = '';
        if (i === 0) {
          className = 'menu J-menu J-more-btn';
        } else {
          href = elem.href;
          className = 'menu J-menu'
        }
        menuHtml += '<a class="' + className + '" href="' + href + '" target="_blank" ><img src="' + elem.icon + '" /><span>' + elem.name + '</span></a>';
        hideMenuHtml += '<a class="' + className + '" href="' + href + '" target="_blank" style="width:36px;height:36px;float:right"><span class="hide-text hide">' + elem.name + '</span><img class="hide-icon" src="' + elem.icon + '" /></a>';
      })

      if (data && data.evaluateCause && data.evaluateCause.length !== 0) {
        jQuery.each(data.evaluateCause, function (i, elem) {
          reason += '<span>' + elem + '</span>';
        })
      } else {
        reason = '<span>知识点看不懂</span><span>对产品规则不满意</span><span>操作了没解决</span><span>其他原因</span>';
      }
      if ((data && data.recommend) || window.ENTERSERVPOSITION.spread === 'false') {
        DOM = jQuery('<div id="pc-merchant-onlineService" class="pc-merchant-onlineService" seed="online-service" data-sourceId=' + config.sourceId + '></div>')
          .html('<div class="hide-status J-hide-status"><div class="mada J-mada hide-mada"><img src="' +
            logourl + '" alt=""><div class="unfold J-unfold hide">点我展开哦~<span><span></span></span></div></div>' + hideMenuHtml +
            '</div></div><div class="show-status J-show-status"><div style="float:right" ><div class="mada J-mada"><img src="' +
            logourl + '" alt=""><div class="pack-up J-pack-up hide">点我收起哦~<span><span></span></span></div></div><div class="pc-content J-pc-content"><div class="issue J-issue"><span class="title J-title">猜你想问：</span>' +
            html + '</div>' + menuHtml + '</div></div><div class="supernatant J-supernatant"><div><div class="reason J-reason hide"><div class="point"></div><div class="close J-close"></div><div class="reason-tips">您的反馈可以帮助我们更好的服务</div>' +
            reason + '</div><div class="thx-text J-thx-text hide"><div class="thx-icon"></div><span>谢谢您的反馈</span></div><p><span class="supernatant-title J-supernatant-title"></span><span class="back J-back"></span></p>' +
            '' + '<div class="issue-cont J-issue-cont"><div class="J-klg-content klg-content"></div><div class="klg-evaluate J-klg-evaluate"><div class="evaluate-text">这条知识点对您来说有用吗？</div><div class="like J-like evaluate-common like-click"></div><div class="dislike J-dislike dislike-click evaluate-common"></div></div></div>');
      } else {
        DOM = jQuery('<div id="onlineService" style="' + domPosition + '" seed="online-service" data-sourceId=' + config.sourceId + '></div>')
          .html('<a href="javascript:void(0)" seed="' + seed + '" style="position:relative;display:inline-block;">' +
            '<img style="display: none" src="' + logourl + '" />' +
            '<span title="关闭" class="J-close-online-service-trigger" style="position: absolute;right:5px;top:-12px;font-size:14px;background:#eee;padding:1px 2px;border-radius:3px;font-family:simsun;line-height: normal;color: #AC593F;" seed="pcportal_close_icon_trigger">' +
            '&times;' +
            '</span>' +
            '</a>');
      }
      return DOM;
    },
    // 去除字符串空格
    trim: function (str) {
      return str.replace(/(^\s+)|(\s+$)/g, "");
    },
    // 获取cookie中的值
    getCookie: function (name) {
      var cookies = document.cookie,
        value = '',
        that = this;
      if (cookies.length > 0) {
        var cookieArr = cookies.split(';')
        for (var i = 0; i < cookieArr.length; i += 1) {
          var item = cookieArr[i];
          if (item.indexOf(name) !== -1) {
            value = that.trim(item).substr(name.length + 1, item.length - 1);
          }
        }
      } else {
        value = '';
      }
      return value;
    },
    // 设置评价组件的位置
    setEvalHeight: function () {
      if (jQuery('#pc-merchant-onlineService .J-klg-content').height() > 343) {
        jQuery('#pc-merchant-onlineService .J-klg-evaluate').removeClass('klg-evaluate').addClass('no-position');
        // 对ie单独设置样式
        if (navigator.userAgent.indexOf('Trident') !== -1) {
          jQuery('#pc-merchant-onlineService .J-klg-evaluate').removeClass('no-positon').addClass('ie-no-position');
          jQuery('#pc-merchant-onlineService .J-klg-content').removeClass('klg-content').addClass('ie-klg-content');
        }
      } else {
        jQuery('#pc-merchant-onlineService .J-klg-evaluate').removeClass('no-position').removeClass('ie-no-position').addClass('klg-evaluate')
      }
    },
    // 显示隐藏评价提示
    showEvalTips: function () {
      jQuery('#pc-merchant-onlineService .J-thx-text').fadeIn(300, function () {
        jQuery('#pc-merchant-onlineService .J-thx-text').removeClass('hide').addClass('show');
      }).delay(2000).fadeOut(300, function () {
        jQuery('#pc-merchant-onlineService .J-thx-text').removeClass('show').addClass('hide');
      })
    },
    // 隐藏选择原因浮层
    hideReason: function () {
      jQuery('#pc-merchant-onlineService .J-reason').fadeOut(300, function () {
        jQuery('#pc-merchant-onlineService .J-reason').removeClass('show').addClass('hide');
      })
    },
    // 渲染数据
    setData: function (data, params) {
      var that = this;
      //  如果没有相应数据 就不展示
      if (data && !data.recommend) {
        jQuery('#pc-merchant-onlineService .J-issue').addClass('hide');
      }
      if (data && data.recommend) {
        var recommendArr = [];
        jQuery.each(data.recommend, function (i, item) {
          recommendArr.push(item.id);
          window.pcHelperKlgIds.recommendKnowIds = recommendArr;
        })
        jQuery('#pc-merchant-onlineService .J-issue > div').click(function (e) {
          var currentIndex = jQuery(e.currentTarget).index() - 1;
          jQuery('#pc-merchant-onlineService .J-klg-content').html(data.recommend[currentIndex].content);
          jQuery('#pc-merchant-onlineService .J-supernatant-title').html(data.recommend[currentIndex].title);
          window.pcHelperClickKlgId = data.recommend[currentIndex].id;
          that.seed('recommendClick', {
            sceneCode: params.scene,
            sessionId: params.sessionId,
            knowleageId: data.recommend[currentIndex].id,
            cna: that.getCookie('cna')
          });
        })
      }
    },
    seed: function (en, params) {
      var eventName = {
          'recommendClick': 'SEED_MS_KNOWLEAGE_CLICK',
          'attentionClick': 'SEED_MS_KNOWLEAGE_CLICK',
          'bannerClick': 'SEED_MS_KNOWLEAGE_CLICK',
          'helperShowClick': 'SEED_MS_MANUAL_EXPOSURE',
          'likeClick': 'SEED_MS_KNOWLEAGE_EVALUATE',
          'closeReasonClick': 'SEED_MS_KNOWLEAGE_EVALUATE',
          'dislikeReasonClick': 'SEED_MS_KNOWLEAGE_EVALUATE',
          'getMoreClick': 'SEED_MS_ROBOT_EXPOSURE',
        },
        triggerPoint = {
          'recommendClick': 'recommendClick',
          'attentionClick': 'attentionClick',
          'bannerClick': 'bannerClick',
          'helperShowClick': 'helperShowClick',
          'likeClick': 'likeClick',
          'closeReasonClick': 'closeReasonClick',
          'dislikeReasonClick': 'dislikeReasonClick',
          'getMoreClick': 'getMoreClick'
        };
      jQuery.ajax({
        url: OS.server.cschannelServer + '/seed.json',
        timeout: 300,
        dataType: 'jsonp',
        jsonp: '_callback',
        jsonpCallback: "success_callback",
        data: {
          eventName: eventName[en],
          triggerPoint: triggerPoint[en],
          _input_charset: 'utf-8',
          params: JSON.stringify(params) || {}
        }
      })
    },
    // 初始化请求
    getInitData: function (o, bu, scene, enterurl) {
      var that = this;
      jQuery.ajax({
        url: OS.server.cschannelServer + '/merchantsAssistantInit.json', // 'http://localhost:3000/res',
        timeout: 3000,
        dataType: 'jsonp',
        jsonp: '_callback',
        jsonpCallback: "success_callback",
        // url: 'http://localhost:3000/res', //  OS.server.cschannelServer + '/merchantsAssistantInit.json',
        // // timeout: 3000,
        // // dataType: 'jsonp',
        // // jsonp: '_callback',
        // // jsonpCallback: "success_callback",
        data: {
          enterurl: enterurl,
          scene: scene,
          _input_charset: 'utf-8',
          ctoken: that.getCookie('ctoken')
        },
        success: function (res) {
          if (res.stat === 'ok') {
            res.params = {
              scene: scene,
              sessionId: res.token
            };
            that.buildOnlineService(o, bu, res.data, res.params);
            that.openNewWin(OS.config.newPortalServerURL, jQuery("#pc-merchant-onlineService .J-more-btn"), scene, res.token);
          } else {
            that.buildOnlineService(o, bu);
            that.openNewWin(OS.config.newPortalServerURL, jQuery("#onlineService a"), scene, res.token);
          }
        },
        error: function () {
          that.buildOnlineService(o, bu);
          that.openNewWin(OS.config.newPortalServerURL, jQuery("#onlineService a"), scene);
        },
      });
    },
    behavior: function () {
      if (OS.params.uid == '' || OS.params.behavior != '1') {
        return false
      }
      jQuery.ajax({
        url: OS.server.initiativeServer + '/forward',
        dataType: 'jsonp',
        jsonp: '_callback',
        jsonpCallback: "jquery_callback",
        data: {
          userId: OS.params.uid,
          token: '',
          sourceTag: 'SERVICE_POINT_' + OS.params.sourceId,
          applicationTag: '',
          featureStr: OS.params.featureStr
        },
        success: function (data) {},
        error: function (XMLHttpRequest, textStatus, errorThrown) {
          window.Tracker && Tracker.click('os-forward-error-' + textStatus);
        }
      });
    },

    buildOnlineService: function (config, bu, data, params) {
      var that = this,
        random = Math.random().toFixed(2);
      jQuery.extend(OS.params, config)
      var build = function () {
        jQuery('body').append(that.onlineServiceDOM(config, that.buildLogo(config.logoId, bu), config.scriptTag, data));
        if ((data && params) || window.ENTERSERVPOSITION.spread === 'false') {
          // 将pc小助手所展示的所有知识点id 保存在window.pcHelperKlgIds
          window.pcHelperKlgIds = {};
          // 左侧浮层展示的内容
          that.setData(data, params)
          var $pcMerchant = jQuery('#pc-merchant-onlineService'),
            $pcContent = jQuery('#pc-merchant-onlineService .J-pc-content'),
            $mada = jQuery('#pc-merchant-onlineService .J-mada'),
            $packUp = jQuery('#pc-merchant-onlineService .J-pack-up'),
            $unfold = jQuery('#pc-merchant-onlineService .J-unfold'),
            $like = jQuery('#pc-merchant-onlineService .J-like'),
            $dislike = jQuery('#pc-merchant-onlineService .J-dislike'),
            $reason = jQuery('#pc-merchant-onlineService .J-reason'),
            $back = jQuery('#pc-merchant-onlineService .J-back'),
            $close = jQuery('#pc-merchant-onlineService .J-close'),
            $issueCont = jQuery('#pc-merchant-onlineService .J-issue-cont'),
            $showStatus = jQuery('#pc-merchant-onlineService .J-show-status'),
            $hideStatus = jQuery('#pc-merchant-onlineService .J-hide-status');
          // 控制初始化展开还是折叠
          if (window.ENTERSERVPOSITION.spread === 'false') {
            $showStatus.addClass('hide');
          } else {
            $hideStatus.addClass('hide');
          }
          // 动态设置容器高度
          var height = $pcContent.height();
          // 初始化隐藏回到顶部
          $hideStatus.find('.J-menu').last().addClass('hide');
          $showStatus.find('.J-menu').last().addClass('hide');
          if ($showStatus.attr('class') && $showStatus.attr('class').indexOf('hide') !== -1) {
            // 改变容器宽度高度
            $pcMerchant.animate({
              width: '40px',
            }, 0);
          }
          // 设置 左侧浮层的弹窗
          jQuery('#pc-merchant-onlineService .J-supernatant').height(height);
          var seedEvalParams = {};
          // 点击小蚂哥头像 收起或展开
          if (!(window.ENTERSERVPOSITION.spread === 'false')) {
            $mada.click(function () {
              // 隐藏 左侧浮层
              jQuery('#pc-merchant-onlineService .J-supernatant > div').animate({
                right: '-562px'
              }, 300);
              // 点击头像 操作提示消失
              $packUp.removeClass('show').addClass('hide');
              $unfold.removeClass('show').addClass('hide');
              // 如果是收起状态
              if ($showStatus.attr('class').indexOf('hide') !== -1) {
                $showStatus.removeClass('hide').addClass('show');
                $hideStatus.addClass('hide')
                that.seed('helperShowClick', {
                  sceneCode: params.scene,
                  sessionId: params.sessionId,
                  cna: that.getCookie('cna'),
                  attentionknowId: window.pcHelperKlgIds.attentionknowId,
                  recommendKnowIds: window.pcHelperKlgIds.recommendKnowIds,
                  bannerKnowId: window.pcHelperKlgIds.bannerKnowId
                });
                // 展开状态
              } else if ($hideStatus.attr('class').indexOf('hide') !== -1) {
                $hideStatus.removeClass('hide').addClass('show')
                $showStatus.addClass('hide');
              }
            });
          }
          // 点击 去掉问题列表中选中样式
          $pcMerchant.on('click', '.J-back, .J-mada, .J-more-btn', function () {
            jQuery('.J-issue > div').removeClass('click');
          })
          // 点击问题列表 右侧划出窗口
          $pcContent.on('click', '.J-issue > div', function (e) {
            // 知识点评价seed公共参数
            seedEvalParams = {
              sceneCode: params.scene,
              sessionId: params.sessionId,
              knowleageId: window.pcHelperClickKlgId,
              cna: that.getCookie('cna')
            }
            // 点赞
            $like.unbind("click").on('click', function () {
              $like.removeClass('like').addClass('like-click');
              that.showEvalTips();
              seedEvalParams.evaluate = '1';
              that.seed('likeClick', seedEvalParams);
              // 禁止点击
              $like.off('click');
              $dislike.off('click');
            })
            // 点踩
            $dislike.unbind("click").on('click', function () {
              $dislike.removeClass('dislike').addClass('dislike-click');
              $reason.fadeIn(300, function () {
                $reason.removeClass('hide').addClass('show');
              })
              // 禁止点击
              $dislike.off('click');
              $like.off('click');
            })
            that.setEvalHeight();
            // 设置获取到知识点img和table宽度
            jQuery('#pc-merchant-onlineService .J-klg-content table').css('width', '100%')
            jQuery('#pc-merchant-onlineService .J-klg-content img').css('width', '100%')
            // 点击其他知识点，评价选择原因消失
            that.hideReason();
            // 点击其他问题  点菜点赞恢复到没点击之前的状态
            $dislike.removeClass('dislike-click').addClass('dislike');
            $like.removeClass('like-click').addClass('like');
            // 每次点击都重置滚动条top
            $issueCont.scrollTop(0);
            //  点击问题列表一个 其他问题去除样式
            if (jQuery(e.target).closest('#pc-merchant-onlineService .J-issue')[0]) {
              jQuery(e.currentTarget).addClass('click');
              jQuery(e.currentTarget).siblings('#pc-merchant-onlineService .J-issue > div').removeClass('click');
            }
            // 改变容器宽度
            $pcMerchant.animate({
              width: '658px'
            }, 1)
            // 获取猜你问题高度
            var issueHeight = jQuery('.J-issue').outerHeight();
            // 动态设置左侧浮层的高度（猜你想问加上3个菜单的高度）
            jQuery('#pc-merchant-onlineService .J-supernatant').animate({
              height: issueHeight + (36 * 3)
            }, 1);
            // 减2是为了把阴影边框显示出来
            jQuery('#pc-merchant-onlineService .J-supernatant > div').delay(2).animate({
              right: '0px',
              height: issueHeight + (36 * 3) - 2
            }, 300);
            $issueCont.animate({
              height: issueHeight + 15
            }, 1)
            $issueCont.css('overflow', 'auto');
            var klgContHeight = $issueCont.find('.J-klg-content').height();
            // 动态设置评价组件的位置 92是评价组件的高度加上距离底部的距离
            if ((klgContHeight + 92) < issueHeight + 15) {
              jQuery('#pc-merchant-onlineService .J-klg-evaluate').css({
                'position': 'absolute',
                'bottom': '24px',
                'left': '189px'
              })
            } else {
              jQuery('#pc-merchant-onlineService .J-klg-evaluate').css({
                'margin': '0 auto',
                'position': 'static'
              })
            }
          });
          // 鼠标滚动时候回到顶部显示隐藏
          jQuery(window).scroll(function () {
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            if (scrollTop !== 0) {
              $showStatus.find('.J-menu').last().removeClass('hide').addClass('show');
              $hideStatus.find('.J-menu').last().removeClass('hide').addClass('show');
            } else {
              $showStatus.find('.J-menu').last().removeClass('show').addClass('hide');
              $hideStatus.find('.J-menu').last().removeClass('show').addClass('hide');
            }
          })
          // 点击回到顶部
          $pcMerchant.on('click', '.J-show-status .J-menu, .J-hide-status .J-menu', function (e) {
            if (jQuery(e.currentTarget).text() === '回到顶部') {
              jQuery(e.currentTarget).attr('href', 'javascript:void(0)');
              jQuery(e.currentTarget).attr('target', '_self');
              jQuery(window).scrollTop(0);
            }
          })
          // 收起状态下hover菜单
          jQuery.each($hideStatus.find('.J-menu'), function (i, item) {
            jQuery(item).hover(function (e) {
              jQuery(e.currentTarget).css('width', '96px');
              $pcMerchant.css('width', '96px');
              jQuery(e.currentTarget).find('.hide-text').removeClass('hide').addClass('show');
            }, function () {
              $hideStatus.find('.J-menu').css('width', '36px');
              $pcMerchant.css('width', '40px');
              $hideStatus.find('.J-menu').find('.hide-text').removeClass('show').addClass('hide');
            })
          })
          // 点击选择原因的关闭按钮
          $close.on('click', function () {
            that.hideReason();
            seedEvalParams.evaluate = '0';
            seedEvalParams.evaluateCause = '';
            that.seed('closeReasonClick', seedEvalParams);
          })
          // 点击问题原因
          $reason.find('span').on('click', function (e) {
            that.showEvalTips();
            that.hideReason();
            seedEvalParams.evaluate = '0';
            seedEvalParams.evaluateCause = jQuery(e.target).html();
            that.seed('dislikeReasonClick', seedEvalParams);
          })
          // 点击浮层返回收起
          $back.click(function () {
            jQuery('#pc-merchant-onlineService .J-supernatant > div').animate({
              right: '-562px',
            }, 300);
            // 改变容器宽度高度
            $pcMerchant.delay(300).animate({
              width: '96px',
            }, 1);
          });
          // 鼠标hover时候 提示
          if (!(window.ENTERSERVPOSITION.spread === 'false')) {
            $mada.hover(function () {
              if ($showStatus.attr('class').indexOf('hide') !== -1) {
                $unfold.removeClass('hide').addClass('show');
                // 改变容器宽度高度
                $pcMerchant.animate({
                  width: '96px',
                }, 0);
              } else if ($hideStatus.attr('class').indexOf('hide') !== -1) {
                // 如果是有浮层的情况不设置高度
                if ($pcMerchant.width() <= 120) {
                  // 改变容器宽度高度
                  $pcMerchant.animate({
                    width: '120px',
                  }, 0);
                }
                $packUp.removeClass('hide').addClass('show');
              }
            }, function () {
              if ($showStatus.attr('class').indexOf('hide') !== -1) {
                $pcMerchant.animate({
                  width: '40px',
                }, 0);
              } else if ($hideStatus.attr('class').indexOf('hide') !== -1) {
                if ($pcMerchant.width() <= 120) {
                  // 改变容器宽度高度
                  $pcMerchant.animate({
                    width: '96px',
                  }, 0);
                }
              }
              $packUp.removeClass('show').addClass('hide');
              $unfold.removeClass('show').addClass('hide');
            });
          }
        }
        if (jQuery('#onlineService img')) {
          jQuery('#onlineService img').fadeIn(300, function () {
            jQuery('#onlineService img').css({
              display: 'block'
            });
          });
        }
        if (config.scriptTag) {
          jQuery('#pc-merchant-onlineService .J-more-btn').attr('seed', config.scriptTag);
          jQuery('#onlineService a').attr('seed', config.scriptTag);
          that.buildScriptTag(config.scriptTag);
        }
        // 图标可被关闭
        jQuery("#onlineService .J-close-online-service-trigger").on("click", function (e) {
          jQuery(this).parents('#onlineService').remove();
          e.stopPropagation();
          e.preventDefault();
        });
      }
      if ((config.showProbability < 1) && (random < config.showProbability)) {
        build();
      } else if (config.showProbability == 1) {
        build();
      }
    },
    matchURL: function () {
      var that = this,
        currentUrl = window.location.hostname + window.location.pathname,
        currnetAllUrl = window.location.hostname + window.location.pathname + window.location.search,
        isContinueMatch = true;
      jQuery.each(window.ONLINESERVERCONFIG.preciseMatchURL, function (i, o) {
        if (o.url == currentUrl || o.url == currnetAllUrl) {
          that.buildOnlineService(o, "customer");
          that.openWin(OS.config.onlineServerURL, jQuery("#onlineService a"), o.sourceId);
          isContinueMatch = false;
          return false;
        }
      });
      if (isContinueMatch) {
        jQuery.each(window.ONLINESERVERCONFIG.vagueMatchURL, function (i, o) {
          if (currentUrl.indexOf(o.url) >= 0) {
            that.buildOnlineService(o, "customer");
            that.openWin(OS.config.onlineServerURL, jQuery("#onlineService a"), o.sourceId);
            isContinueMatch = false;
            return false;
          }
        });
      }
      //老portal
      if (!window.PORTALSERVERCONFIG) return false;
      if (isContinueMatch) {
        jQuery.each(window.PORTALSERVERCONFIG.excludeMatchURL, function (i, o) {
          if (o.url == currentUrl || o.url == currnetAllUrl) {
            isContinueMatch = false;
            return false;
          }
        });
      }
      if (isContinueMatch) {
        jQuery.each(window.PORTALSERVERCONFIG.preciseMatchURL, function (i, o) {
          if (o.url == currentUrl || o.url == currnetAllUrl) {
            that.buildOnlineService(o, "customer");
            isContinueMatch = false;
            return false;
          }
        });
      }
      if (isContinueMatch) {
        jQuery.each(window.PORTALSERVERCONFIG.vagueMatchURL, function (i, o) {
          if (currnetAllUrl.indexOf(o.url) >= 0) {
            that.buildOnlineService(o, "customer");
            isContinueMatch = false;
            return false;
          }
        });
      }
      //商户服务
      if (!window.MERSERVSERVERCONFIG) return false;
      if (isContinueMatch) {
        jQuery.each(window.MERSERVSERVERCONFIG.preciseMatchURL, function (i, o) {
          if (o.url == currentUrl || o.url == currnetAllUrl) {
            that.getInitData(o, "merchant", o.sourceId, encodeURIComponent(document.URL))
            isContinueMatch = false;
            return false;
          }
        });
      }
      if (isContinueMatch) {
        jQuery.each(window.MERSERVSERVERCONFIG.vagueMatchURL, function (i, o) {
          if (currnetAllUrl.indexOf(o.url) >= 0) {
            that.getInitData(o, "merchant", o.sourceId, encodeURIComponent(document.URL))
            isContinueMatch = false;
            return false;
          }
        });
      }
      // 口碑服务
      if (!window.KOUBEISERVERCONFIG) return false;
      if (isContinueMatch) {
        jQuery.each(window.KOUBEISERVERCONFIG.preciseMatchURL, function (i, o) {
          if (o.url == currentUrl || o.url == currnetAllUrl) {
            that.buildOnlineService(o, "koubei");
            that.openNewWin(OS.config.newPortalServerURL, jQuery("#onlineService a"), o.sourceId)
            isContinueMatch = false;
            return false;
          }
        });
      }
      if (isContinueMatch) {
        jQuery.each(window.KOUBEISERVERCONFIG.vagueMatchURL, function (i, o) {
          if (currnetAllUrl.indexOf(o.url) >= 0) {
            that.buildOnlineService(o, "koubei");
            that.openNewWin(OS.config.newPortalServerURL, jQuery("#onlineService a"), o.sourceId)
            return false;
          }
        });
      }
      //产品化portal
      if (!window.CUSTSERVSERVERCONFIG) return false;
      if (isContinueMatch) {
        jQuery.each(window.CUSTSERVSERVERCONFIG.preciseMatchURL, function (i, o) {
          if (o.url == currentUrl || o.url == currnetAllUrl) {
            that.buildOnlineService(o, "prod_customer");
            that.openNewWin(OS.config.newPortalServerURL, jQuery("#onlineService a"), o.sourceId)
            isContinueMatch = false;
            return false;
          }
        });
      }
      if (isContinueMatch) {
        jQuery.each(window.CUSTSERVSERVERCONFIG.vagueMatchURL, function (i, o) {
          if (currnetAllUrl.indexOf(o.url) >= 0) {
            that.buildOnlineService(o, "prod_customer");
            that.openNewWin(OS.config.newPortalServerURL, jQuery("#onlineService a"), o.sourceId)
            isContinueMatch = false;
            return false;
          }
        });
      }
    },
    matchID: function () {
      if (!window.PORTALSERVERCONFIG) return false;
      if (!window.PORTALSERVERCONFIG.preciseMatchID) return false;
      var that = this;
      jQuery.each(jQuery("*[portalServer]"), function (s, el) {
        jQuery.each(window.PORTALSERVERCONFIG.preciseMatchID, function (i, o) {
          if (o.ruleId == jQuery(el).attr('portalServer')) {
            jQuery(el).attr('data-sourceId', o.sourceId)
            that.openWin(OS.config.portalServerURL, jQuery(el), o.sourceId)
          }
        });
      });
    },
    buildLogo: function (logoId, bu) {
      var logoUrl;
      var logoData = window.PORTALSERVERCONFIG.logoDATA;
      if (bu == "customer") {
        logoData = window.PORTALSERVERCONFIG.logoDATA;
      } else if (bu == "prod_customer") {
        logoData = window.CUSTSERVSERVERCONFIG.logoDATA;
      } else if (bu == "merchant") {
        logoData = window.MERSERVSERVERCONFIG.logoDATA;
      } else if (bu == "koubei") {
        logoData = window.KOUBEISERVERCONFIG.logoDATA;
      }
      jQuery.each(logoData, function (i, o) {
        if (o.logoId == logoId) {
          logoUrl = o.logoUrl;
          return false;
        }
      });
      OS.params.logoUrl = logoUrl;
      return logoUrl;
    },
    buildScriptTag: function (scriptTagId) {
      var that = this;
      if (!window.PORTALSERVERCONFIG.scriptDATA) return false;
      if (!scriptTagId) return false;
      var scriptTagUrl;
      jQuery.each(window.PORTALSERVERCONFIG.scriptDATA, function (i, o) {
        if (o.scriptTag == scriptTagId) {
          seajs.use(o.scriptUrl, function () {
            if (typeof (OS.params.behaviorLazyLoad) == 'undefined') {
              that.behavior();
            }
          });
        }
      });
    },
    openWin: function (url, dom, sourceId, token, pointId) {
      if (typeof (token) == 'undefined') {
        var token = '';
      }
      if (typeof (pointId) == 'undefined') {
        var pointId = '';
      }
      dom.on("click", function (e) {
        window.open(url + '?sourceId=' + sourceId + '&token=' + token + '&pointId=' + pointId + '&enterurl=' + encodeURIComponent(document.URL), 'newConWindow', 'toolbar=0,scrollbars=0,location=0,menubar=0,resizable=1,width=1003,height=600');
        e.preventDefault();
      });
    },
    openNewWin: function (url, dom, sourceId, token, pointId) {
      var that = this;
      if (typeof (token) == 'undefined') {
        var token = '';
      }
      if (typeof (pointId) == 'undefined') {
        var pointId = '';
      }
      dom.on("click", function (e) {
        window.open(url + '?scene=' + sourceId + '&token=' + token + '&eventToken=' + token + '&pointId=' + pointId + '&enterurl=' + encodeURIComponent(document.URL), 'newConWindow', 'toolbar=0,scrollbars=0,location=0,menubar=0,resizable=1,width=880,height=600');
        if (jQuery(e.target).closest('#pc-merchant-onlineService')[0]) {
          that.seed('getMoreClick', {
            sceneCode: sourceId,
            sessionId: token,
            cna: that.getCookie('cna')
          });
        }
        e.preventDefault();
      });
    },
    init: function () {
      this.matchURL();
      this.matchID();
    }
  };
  OS.onlineServer.init();
});