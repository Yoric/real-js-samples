var SINA_ARTICLE_PAGE_SETTINGS = {
  comment: {
    group: 0,
    page: 1,
    pageSize: 20,
    showReplay: true,
    maxWordCount: 140,
    hotPageNum: 3,
    firstPageNum: 10,
    clickMoreTimes: 3
  },
  isPad: (function() {
    var arr = ["ipad", "mi-pad"],
      android = 'Android',
      len = arr.length,
      userAgent = navigator.userAgent.toLowerCase(),
      valid = false;

    for(var i=0;i<len;i++){
      var txt = (arr[i] + "").toLowerCase(),
      reg = new RegExp(txt,"i"),
      reg_android = new RegExp(android,"i");
      valid = (userAgent.match(reg) == txt && (txt == 'ipad' ? true : userAgent.match(reg_android) == android.toLowerCase()));
      if(valid === true){
        break;
      }
    };
    return valid;
  })()
};

;(function (win, doc) {

    var SinaTextPage = function () {
        this.init();
    };

    SinaTextPage.prototype = {
        init: function () {
            this.initLogin();
            this.initBottomComment();
            this.bindEvent();//暂时无用未绑定任何操作
            this.bindResizeEvent();//暂时无用未绑定任何操作
            this.bindScrollEvent();//暂时无用未绑定任何操作
            this.hideAd();
        },

        initLogin: function () {
            var that = this;
            $('.J_Unlogin').show();
            __SinaTopBar__.user.init(document.getElementById('userLogin'), {
                entry: SINA_TEXT_PAGE_INFO.entry,
                login_success: function () {
                    $('.J_Unlogin').hide();
                    if (win._sinaArticleSurvey) {
                        win._sinaArticleSurvey.onLoginSuccess();
                    }
                },
                logout_success: function () {
                    $('.J_Unlogin').show();
                    if (win._sinaArticleSurvey) {
                        win._sinaArticleSurvey.onLogoutSuccess();
                    }
                },
                getWeiboInfo: function (info) {
                }
            });
        },

        bindEvent: function () {

        },

        bindResizeEvent: function () {

        },

        bindScrollEvent: function () {

        },

        onResize: function () {

        },

        onScroll: function () {

        },

        // 底部评论
        initBottomComment: function () {
            var that = this;
            var comment_wrap_id = 'sinaTextPageCommentBottom';
            var settings = SINA_ARTICLE_PAGE_SETTINGS;
            var commentSettings = {};
            if (settings && settings.comment) {
                commentSettings = settings.comment;
            }

            if (SINA_TEXT_PAGE_INFO.comment) {
                for (var key in SINA_TEXT_PAGE_INFO.comment) {
                    commentSettings[key] = SINA_TEXT_PAGE_INFO.comment[key];
                }
            }

            var sinacMNT = ___sinacMNT___;

            that.isCommentShowing = false;
            that.commentFormList = new ___sinacMNT___.cmnt.FormList(document.getElementById(comment_wrap_id), {
                channel: SINA_TEXT_PAGE_INFO.channel,
                newsid: SINA_TEXT_PAGE_INFO.newsid,
                parent: '',
                encoding: SINA_TEXT_PAGE_INFO.encoding
            }, {
                channel: SINA_TEXT_PAGE_INFO.channel,
                newsid: SINA_TEXT_PAGE_INFO.newsid,
                encoding: SINA_TEXT_PAGE_INFO.encoding,
                group: commentSettings.group,
                page: commentSettings.page || 1,
                pageSize: commentSettings.pageSize || 20,
                showReply: commentSettings.showReply || false,
                maxWordCount: commentSettings.maxWordCount || 140,
                hotPageNum: 3,
                firstPageNum: 3,
                clickMoreTimes: 0,
                hideList: SINA_TEXT_PAGE_INFO.hideCommentList,
                beforeLoad: function () {
                    //右侧飘浮评论模块布码为，上面模块comment_release_f，下面模块comment_interact_f
                    //底部新增评论模块布码，上面模块comment_release_b，下面模块comment_interact_b
                    var wrap = $('#' + comment_wrap_id);
                    wrap.find('.sina-comment-form').attr('data-sudaclick', 'comment_release_b');
                    wrap.find('.sina-comment-list').attr('data-sudaclick', 'comment_interact_b');
                },
                loaded: function (data) {
                    var statusStr = "";
                    try {
                        statusStr = data.data.news.status;
                    } catch (err) {
                        console.error(err)
                    }
                    if (statusStr == "N_CLOSE") {
                        return false;
                    }
                    var count = win.parseInt(data.data.count.total, 10);
                    if (count >= 0) {
                        $('#commentCount1, #commentCount2').html(that.readableCommentCount(count));
                    }
                }
            }, {});
        },
        readableCommentCount: function (count) {
            if (count < 1000) {
                return count;
            }
            if (count < 10000) {
                var s = count + '';
                return s.substring(0, 1) + ',' + s.substring(1);
            }
            return (count / 10000).toFixed(1) + '\u4E07';
        },
        hideAd: function () {
            var pD = new Date(SINA_TEXT_PAGE_INFO.pagepubtime).getTime();
            var dN = (new Date()).getTime();
            if (dN - pD > SINA_TEXT_PAGE_INFO.difDay * 1000 * 24 * 60 * 60) {
                for (var i = 0; i < SINA_TEXT_PAGE_INFO.ADIDs.length; i++) {
                    //console.log($('#' + SINA_TEXT_PAGE_INFO.ADIDs[i]).hide());
                    $('#' + SINA_TEXT_PAGE_INFO.ADIDs[i]).hide();
                }
            }
        }
    };

    var sinaTextPage = new SinaTextPage();

    (function () {

        $('#PublicRelation5 .cmenu01').on('mouseover', 'span', function () {

            $('#PublicRelation5 .cmenu01 span').removeClass('selected');

            $(this).addClass('selected');

            $('#PublicRelation5 .ad_cont_03 div').hide();

            $($('#PublicRelation5 .ad_cont_03 div')[$(this).index()]).show();

        });

    })();

})(window, document);