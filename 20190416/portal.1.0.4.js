$(function () {
    "use strict";

    var ff59 = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    if (ff59) {
        $(".recommend").addClass("is-ff59");
        if ($(".recommend__cmp").not(".bx-clone").length === 2) {
            if (reservedSlide1 === "") {
                reservedSlide1 = reservedSlide2;
            }
            $(".bxslider").append(reservedSlide1);
        } else if ($(".recommend__cmp").not(".bx-clone").length <= 1) {
            $(".bxslider").append(reservedSlide1 + reservedSlide2);
        }

    } else {
        // スライダー設定
        var slider = $(".bxslider").bxSlider({
            useCSS: false,
            slideWidth: 270,
            minSlides: 2,
            maxSlides: 2,
            moveSlides: 1,
            speed: 200,
            auto: true,
            pause: 3000,
            autoHover: true,
            touchEnabled: false,//chorme73対応//
            slideMargin: 10
        });

        // スライダーコントローラ
        $(".bx-controls-direction, .bx-pager").hover(function () {
            slider.stopAuto();
        });
        $(".bx-controls-direction, .bx-pager").mouseleave(function () {
            slider.startAuto();
        });

        if ($(".recommend__cmp").not(".bx-clone").length === 2) {
            if (reservedSlide1 === "") {
                reservedSlide1 = reservedSlide2;
            }
            $(".bxslider").append(reservedSlide1);
            slider.reloadSlider();
        } else if ($(".recommend__cmp").not(".bx-clone").length <= 1) {
            $(".bxslider").append(reservedSlide1 + reservedSlide2);
            slider.reloadSlider();
        }

    }

    // 毎日くじの表示位置を一番下に移動させる
    $("li[id^='00everyday']").detach().appendTo(".cmpPossible ul");

    // タブ切り替え
    function toggleTabs() {
        $(".cmpList").each(function () {
            if ($(this).hasClass("isActive")) {
                $(this).removeClass("isActive");
            } else {
                $(this).addClass("isActive");
            }
        });
        var target = $(".cmpTab").offset().top - 20;
        $("html, body").animate({
            scrollTop: target
        }, 200);
        return false;
    }

    // ログイン時に参加済みキャンペーンを呼ぶ
    function loadDoneList() {
        var request = new XMLHttpRequest();
        // 参加済みキャンペーンAPIのURL
        var host = "//" + window.location.host;
        var url = host + "/v1/participationCampaigns";

        // エラー文言
        var errorText = "<p class='textCenter'>参加済みキャンペーン情報を読み込めませんでした。<br/>時間をおいてご確認ください。</p>";

        request.open('GET', url, true);

        // タイムアウト設定 (10秒)
        request.timeout = 10000;

        // 通信時の処理
        request.onload = function () {
            if (request.status >= 200 && request.status < 400) {
                var data = JSON.parse(request.responseText);
                var doneCampList = data.participationCampaignList;
                var itemBlockArray = [];

                if (data.login === true) {
                    for (var i in doneCampList) {
                        var item = doneCampList[i];
                        var cPath = item.campaignPath;
                        var cName = item.campaignName;
                        var cImage = item.portalTopImageUrl;
                        var cUrl = item.campaignUrl;
                        var cHistoryUrl = item.narrowingUrl;
                        var cSlk = item.slkCampaignPath;
                        //var parser = new DOMParser();

                        var itemBlock = '<li class="cmpBox">' +
                            '<a href="' + cUrl + '" data-ylk="' + cSlk + '">' +
                            '<div class="cmpBox__bnr">' +
                            '<img src="' + cImage + '" alt="' + cName + '">' +
                            '</div>' +
                            '<div class="cmpBox__title">' +
                            '<p>' + cName + '</p>' +
                            '</div>' +
                            '</a>' +
                            '<div class="cmpBox__history">' +
                            '<a href="' + cHistoryUrl + '" data-campId="' + cPath + '">' +
                            '参加結果を見る' +
                            '</a>' +
                            '</div>' +
                            '</li>';
                        itemBlockArray.push(itemBlock);
                    }
                    document.getElementById("encmpbnr").innerHTML = itemBlockArray.join('');

                    checkJoinedCamp();

                } else if (data.login === false) {
                    $(".loginBox").show();
                }

            } else {
                // 通信時に、400系、500系のエラーが出たときはエラー文言出す
                // ticketBox.innerHTML = ticketErrorText;
            }
        };

        // タイムアウト時は、エラー文言出す
        request.ontimeout = function () {
            // ticketBox.innerHTML = ticketErrorText;
        };

        // 通信エラー時にはエラー文言出す
        request.onerror = function () {
            // ticketBox.innerHTML = ticketErrorText;
        };

        request.send(null);
    }

    // ログイン時の参加済みキャンペーン有無チェック、要素出し分け
    function checkJoinedCamp() {
        $(".cmpDone__linkEverydayHistory, .historyBox").show();
        // 参加済みのキャンペーンがなかったとき
        if ($(".cmpDone li").length === 0) {
            $(".cmpDone ul").hide();
            $(".cmpDone .noCamp").show();
        } else {
            $(".doneText").show();
        }
    }

    // タブクリックしたときの処理
    $(".cmpTab__list").click(function () {
        if (!$(this).hasClass("isActive")) {
            if ($(this).hasClass("cmpTab__done") && $(".cmpDone li").length === 0) {
                loadDoneList();
            }
            $(this).parent().find("li").removeClass("isActive");
            $(this).addClass("isActive");
            toggleTabs();
        }
    });

    // 開催中キャンペーン無い場合の説明テキストクリックしたとき
    $(".noCamp__link").click(function () {
        $(".cmpTab__done").trigger("click");
    });

    // 開催中のキャンペーンがなかったとき
    if ($(".cmpPossible ul li").length === 0) {
        $(".cmpPossible ul").hide();
        $(".cmpPossible .noCamp").show();
    }

    // ページトップへ戻る
    var topBtn = $(".goTop");
    topBtn.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn(200);
        } else {
            topBtn.fadeOut(200);
        }
    });

    topBtn.click(function () {
        $("body,html").animate({
            scrollTop: 0
        }, 300);
        return false;
    });

    //一次対応
    $(".cmpBox__history a").addClass("rapid-noclick-resp");

    $(".cmpBox__history a").on("click", function () {
        var thisCampId = $(this).attr("data-campId");
        var thisRapidP = $(this).attr("data-rapid_p");
        var thisLinkData = [{
            sec: 'encphis',
            _links: [{
                slk: thisCampId,
                _p: thisRapidP
            }]
        }];
        // クリックログを可視化するためにまずLinkViewsを送信
        ins.beaconLinkViews(thisLinkData, false);

        // どのキャンペーンのモーダルを開いたかを判別するために、
        // sec:modalopen
        // slk:キャンペーンID
        // p: Rapidで自動裁判されたdata-rapid_pと同じもの
        // をセットして送信
        ins.beaconClick("encphis", thisCampId, thisRapidP);
    });

});
