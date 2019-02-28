var Cortex;
(function (Cortex) {
    var Components;
    (function (Components) {
        var OnePlayer;
        (function (OnePlayer) {
            var players;
            function Init(controlId) {
                $(document).ready(function () {
                    InitPlayer();
                });
            }
            OnePlayer.Init = Init;
            function InitPlayer() {
                for (var i = 0; i < players.length; i++) {
                    var thisPlayer = players[i];
                    MsOnePlayer.render(thisPlayer.containerId, thisPlayer, function (player) {
                        player.addPlayerEventListener(function (e) {
                        });
                    });
                }
                ;
                ResizeVideo();
                $(window).on('resize', function () {
                    ResizeVideo();
                });
            }
            OnePlayer.InitPlayer = InitPlayer;
            function ResizeVideo(containerID) {
                var videoContainers, x, y;
                videoContainers = $('.onePlayerContainer');
                if (videoContainers != undefined) {
                    videoContainers.each(function () {
                        var thisContainer = $(this);
                        calculateVideoResize(thisContainer, x, y);
                    });
                }
            }
            OnePlayer.ResizeVideo = ResizeVideo;
            function calculateVideoResize(thisContainer, x, y) {
                if (thisContainer.hasClass("Wide16_9")) {
                    x = thisContainer.width();
                    y = x / 16 * 9;
                    thisContainer.height(y);
                }
                else if (thisContainer.hasClass("Wide21_9")) {
                    x = thisContainer.width();
                    y = x / 21 * 9;
                    thisContainer.height(y);
                }
                else if (thisContainer.hasClass("CustomWide21_7")) {
                    x = thisContainer.width();
                    y = x / 21 * 7.88;
                    thisContainer.height(y);
                }
                else {
                    x = thisContainer.width();
                    y = x / 4 * 3;
                    thisContainer.height(y);
                }
            }
            OnePlayer.calculateVideoResize = calculateVideoResize;
            function AddVideoPlayer(containerId, autoPlay, mute, loop, fullScreen, market, videoId, maskLevel) {
                if (players == undefined) {
                    players = new Array();
                }
                var playerData;
                playerData = {
                    containerId: containerId,
                    options: {
                        autoplay: autoPlay,
                        mute: mute,
                        loop: loop,
                        playFullScreen: fullScreen,
                        market: market,
                        maskLevel: maskLevel
                    },
                    metadata: {
                        videoId: videoId
                    }
                };
                players.push(playerData);
            }
            OnePlayer.AddVideoPlayer = AddVideoPlayer;
            function PlayVideo(el, videoId, scrollOption) {
                el.preventDefault();
                var currentVideoId = videoId;
                players.forEach(function (player) {
                    if (player.containerId === currentVideoId) {
                        player.options.autoplay = true;
                        InitPlayer();
                    }
                });
                if (scrollOption) {
                    $('html,body').animate({ scrollTop: $('#' + videoId).offset().top - 50 }, 'slow');
                }
            }
            OnePlayer.PlayVideo = PlayVideo;
        })(OnePlayer = Components.OnePlayer || (Components.OnePlayer = {}));
        var Drawer;
        (function (Drawer) {
            var selectedDrawer, expandGlyph, collapseGlyph, toggleIcons, toggleHeaders, toggleButtons, toggleButton, drawerContent, newAriaButtonTextEl, maxChildElHeight, maxToggleIndicatorWidth, drawerId, expandText;
            function toggleDrawer(e) {
                selectedDrawer = $(e.currentTarget).parents('.ctex-drawer-toggle').first();
                expandGlyph = selectedDrawer.find('.c-glyph.glyph-plus');
                collapseGlyph = selectedDrawer.find('.c-glyph.glyph-minus');
                toggleButton = selectedDrawer.find('.ctex-drawer-toggle-glyph');
                if ($(selectedDrawer).hasClass('expanded')) {
                    $(selectedDrawer).removeClass('expanded')
                        .siblings().slideUp();
                    expandGlyph.removeClass('ctex-hidden');
                    collapseGlyph.addClass('ctex-hidden');
                    toggleButton.attr('aria-expanded', 'false');
                }
                else {
                    $(selectedDrawer).addClass('expanded')
                        .siblings().slideDown(400, function () {
                        $('.ctex-drawer .ctex-drawer-container .ctex-drawer-content').css('overflow', 'visible');
                    });
                    expandGlyph.addClass('ctex-hidden');
                    collapseGlyph.removeClass('ctex-hidden');
                    toggleButton.attr('aria-expanded', 'true');
                }
                sizeDrawerMargins();
            }
            Drawer.toggleDrawer = toggleDrawer;
            function sizeDrawerBar() {
                $('.ctex-drawer').each(function (index, element) {
                    maxChildElHeight = 10;
                    var drawerSections = $(element).find('.ctex-drawer-toggle > *');
                    $(drawerSections).each(function (index, element) {
                        if ($(element).height() > maxChildElHeight) {
                            maxChildElHeight = $(element).height();
                        }
                    });
                    $(element).find('.ctex-drawer-toggle').height(maxChildElHeight);
                });
            }
            Drawer.sizeDrawerBar = sizeDrawerBar;
            function sizeDrawerMargins() {
                maxToggleIndicatorWidth = 25;
                $('.ctex-drawer').each(function (index, element) {
                    var drawerSections = $(element).find('.ctex-drawer-toggle .ctex-drawer-toggle-glyph').get(0);
                    if ($(drawerSections).width() > maxToggleIndicatorWidth) {
                        maxToggleIndicatorWidth = $(drawerSections).width();
                    }
                    $(element).find('.ctex-drawer-toggle .ctex-drawer-toggle-text').css('margin-right', maxToggleIndicatorWidth + "px");
                });
            }
            Drawer.sizeDrawerMargins = sizeDrawerMargins;
            function refreshDOM() {
                sizeDrawerMargins();
                sizeDrawerBar();
            }
            Drawer.refreshDOM = refreshDOM;
            function Init() {
                $(document).ready(function () {
                    initDOMState();
                    refreshDOM();
                    initEventHandlers();
                });
            }
            Drawer.Init = Init;
            function initDOMState() {
                toggleIcons = $('.ctex-drawer-container .ctex-drawer-toggle-icon');
                toggleHeaders = $('.ctex-drawer-container .ctex-drawer-toggle');
                toggleButtons = toggleHeaders.find('.ctex-drawer-toggle-glyph');
                toggleButtons.attr('tabindex', '0');
                toggleButtons.attr('aria-expanded', 'false').attr('role', 'button');
                $('.ctex-drawer .ctex-drawer-toggle > *').attr('aria-hidden', 'false');
                toggleIcons.attr('aria-hidden', 'true');
                $('.ctex-drawer').each(function (index, el) {
                    drawerId = "ctexDrawer_" + index;
                    toggleButton = $(el).find('.ctex-drawer-toggle-glyph').first();
                    drawerContent = $(el).find('.ctex-drawer-content').first();
                    toggleButton.attr('aria-controls', drawerId);
                    drawerContent.attr('id', drawerId);
                });
                $('.ctex-drawer-container .ctex-drawer-toggle .c-glyph.glyph-minus').addClass('ctex-hidden');
                $('.ctex-drawer-container .ctex-drawer-toggle .ctex-drawer-toggle-glyph > * ').attr('aria-hidden', 'true');
                expandText = $('.ctex-drawer-container .ctex-drawer-toggle .c-glyph.glyph-plus').first().text();
                newAriaButtonTextEl = $('<span>').text(expandText);
                newAriaButtonTextEl.addClass('x-screen-reader');
                $('.ctex-drawer-container .ctex-drawer-toggle .ctex-drawer-toggle-glyph').append(newAriaButtonTextEl);
            }
            Drawer.initDOMState = initDOMState;
            function initEventHandlers() {
                window.onresize = function () {
                    refreshDOM();
                };
                toggleButtons.on('click keyup', function (e) {
                    if (Cortex.Utilities.elementSelected(e)) {
                        e.stopPropagation();
                        toggleDrawer(e);
                    }
                });
                toggleHeaders.on('click keyup', function (e) {
                    if (Cortex.Utilities.elementSelected(e)) {
                        $(e.currentTarget).find('.ctex-drawer-toggle-glyph').focus().trigger('click');
                    }
                });
            }
            Drawer.initEventHandlers = initEventHandlers;
        })(Drawer = Components.Drawer || (Components.Drawer = {}));
        var ProgressIndicator;
        (function (ProgressIndicator) {
            var AriaState;
            (function (AriaState) {
                AriaState[AriaState["Loading"] = 0] = "Loading";
                AriaState[AriaState["Loaded"] = 1] = "Loaded";
            })(AriaState || (AriaState = {}));
            var loadingText, loadedText, firstLoad, pendingRequests;
            function Init(controlId, ignoreFirstRequest) {
                if (ignoreFirstRequest === void 0) { ignoreFirstRequest = true; }
                firstLoad = true;
                pendingRequests = new Array();
                loadingText = $("#" + controlId + " .loading").text();
                loadedText = $("#" + controlId + " .loaded").text();
                $("#" + controlId + " .c-progress").addClass('ctex-hidden');
                $("#" + controlId).data('aria-state', AriaState.Loaded);
                $(document).ajaxSend(function (event, jqxhr, settings) {
                    if (GetPendingRequestsForControl(null, null, controlId).length == 0) {
                        if (firstLoad == false || (firstLoad && ignoreFirstRequest == false)) {
                            if ($("#" + controlId).data('aria-state') == AriaState.Loaded) {
                                $("#" + controlId).data('aria-state', AriaState.Loading);
                                $("#" + controlId + " .x-screen-reader").text(loadingText);
                            }
                        }
                    }
                    AddRequest(settings.url, controlId);
                    $("#" + controlId + " .c-progress").removeClass('ctex-hidden');
                });
                $(document).ajaxComplete(function (event, xhr, settings) {
                    if (RemoveRequest(settings.url, controlId)) {
                        if (GetPendingRequestsForControl(null, null, controlId).length == 0) {
                            if (firstLoad == false || (firstLoad && ignoreFirstRequest == false)) {
                                if ($("#" + controlId).data('aria-state') == AriaState.Loading) {
                                    $("#" + controlId).data('aria-state', AriaState.Loaded);
                                    $("#" + controlId + " .x-screen-reader").text(loadedText);
                                }
                            }
                            firstLoad = false;
                        }
                    }
                    $("#" + controlId + " .c-progress").addClass('ctex-hidden');
                });
            }
            ProgressIndicator.Init = Init;
            function AddRequest(url, controlId) {
                var hash = $.md5(url);
                pendingRequests.push({ key: controlId, value: hash });
            }
            ProgressIndicator.AddRequest = AddRequest;
            function RemoveRequest(url, controlId) {
                var hash = $.md5(url);
                var requests = GetPendingRequestsForControl(null, hash, controlId);
                if (requests.length > 0) {
                    for (var i = pendingRequests.length - 1; i >= 0; i--) {
                        if (pendingRequests[i].key === controlId && pendingRequests[i].value == hash) {
                            pendingRequests.splice(i, 1);
                            return true;
                        }
                    }
                }
                return false;
            }
            ProgressIndicator.RemoveRequest = RemoveRequest;
            function GetPendingRequestsForControl(url, hash, controlId) {
                if (hash == null) {
                    hash = $.md5(url);
                }
                if (url == null && hash == null) {
                    return pendingRequests
                        .filter(function (item) {
                        return item.key == controlId;
                    });
                }
                return pendingRequests
                    .filter(function (item) {
                    return item.key == controlId && item.value == hash;
                });
            }
            ProgressIndicator.GetPendingRequestsForControl = GetPendingRequestsForControl;
        })(ProgressIndicator = Components.ProgressIndicator || (Components.ProgressIndicator = {}));
        var OfficeSignup;
        (function (OfficeSignup) {
            function Init(formID) {
                $("#" + formID + " .c-text-field").on('keydown', function (e) {
                    if (Cortex.Utilities.getKeyCode(e) === $.ui.keyCode.ENTER) {
                        e.preventDefault();
                        e.stopPropagation();
                        $("#" + formID + " .cc-office-signup-submit").trigger('click');
                    }
                });
                $("#" + formID + " .cc-office-signup-submit").on('click keyup', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    if (Cortex.Utilities.elementSelected(e)) {
                        if (FormIsValid(formID)) {
                            $("#" + formID).submit();
                        }
                        else {
                            $("#" + formID + " .c-text-field").focus();
                        }
                    }
                });
            }
            OfficeSignup.Init = Init;
            function FormIsValid(formID) {
                var valid = true;
                $("#" + formID + " .pmgJS-EmailValidationError").hide();
                $("#" + formID + " .pmgJS-EmailDomainError").hide();
                var emailBox = $("#" + formID + " .c-text-field");
                var reg = new RegExp("^(?!^[.])([-'a-zA-Z0-9_]+\\.)*[-'a-zA-Z0-9_]+@(?!\\.+)([-a-zA-Z0-9]+\\.)+[a-zA-Z]{2,}$");
                if (emailBox.val().length == 0) {
                    valid = false;
                    $("#" + formID + " .pmgJS-EmailDomainError").show();
                }
                if (!reg.test(emailBox.val())) {
                    valid = false;
                    $("#" + formID + " .pmgJS-EmailValidationError").show();
                }
                return valid;
            }
            OfficeSignup.FormIsValid = FormIsValid;
        })(OfficeSignup = Components.OfficeSignup || (Components.OfficeSignup = {}));
        var Locales;
        (function (Locales) {
            function Init(querySelector) {
                var urlLocale = $('body').attr('data-locale'), selector = querySelector, ctexLocales, visibility, gepLocales = 'en-us, en-ie, en-au, en-gb, es-mx, es-xl, de-de, en-ca';
                $(selector).each(function (val, element) {
                    ctexLocales = $(element).attr('ctex-locales').split(', ');
                    visibility = $(element).attr('ctex-visible');
                    if (ctexLocales == 'gep') {
                        ctexLocales = gepLocales;
                    }
                    if (visibility === "true") {
                        if (!localeArrayContains(urlLocale.toLowerCase(), ctexLocales)) {
                            $(element).remove();
                        }
                    }
                    else {
                        if (localeArrayContains(urlLocale.toLowerCase(), ctexLocales)) {
                            $(element).remove();
                        }
                    }
                });
            }
            Locales.Init = Init;
            function localeArrayContains(needle, haystack) {
                return (haystack.indexOf(needle) > -1);
            }
        })(Locales = Components.Locales || (Components.Locales = {}));
        var HowToBuyModule;
        (function (HowToBuyModule) {
            var previousWidth, currentWidth;
            function init() {
                previousWidth = $(window).width();
                findTextHeight();
                $(window).resize(function () {
                    currentWidth = $(window).width();
                    if (currentWidth !== previousWidth) {
                        previousWidth = currentWidth;
                        resizeHowToBuy();
                    }
                });
                $('my-app .ng-valid').on("click keypress", function () {
                    setTimeout(function () {
                        $('my-app .c-action-trigger, my-app .c-button:not(.active .c-button), #DevicesClearAllButton, #DevicesFilterButton, my-app .ng-valid').on("click keypress", function () {
                            $('.Ctex-HowToBuy-Expanding-Products > div > div div > a, .Ctex-HowToBuy-Expanding-Products .closeButton').off("click keypress", encapsulateHTBModule);
                            $('.Ctex-HowToBuy-Expanding-Products > div > div div > a, .Ctex-HowToBuy-Expanding-Products .closeButton').on("click keypress", encapsulateHTBModule);
                        });
                    }, 500);
                });
                $(document).on("click keypress", ".Ctex-HowToBuy-Expanding-Products > div > div div > a, .Ctex-HowToBuy-Expanding-Products .closeButton", encapsulateHTBModule);
                function encapsulateHTBModule(e) {
                    var code = e.keyCode || e.which, listItems = $('.Ctex-HowToBuy-Expanding-Products > div > div'), hiddenItems = $('.Ctex-HowToBuy-Expanding-Products > div > div [data-grid="col-12"]:last-of-type'), thisGrandParent = $(this).parent().parent(), thisLiCount = thisGrandParent.index();
                    if (code == 13 || code == 1) {
                        listItems.removeClass('ActiveItem');
                        thisGrandParent.addClass("ActiveItem");
                        $(".whiteCoverUp").css("background-color", "rgba(0,0,0,0)");
                        $(this).parent().find(".whiteCoverUp").css("background-color", "#fff");
                        if ($(this).hasClass('activeAnchor') || $(this).hasClass("closeButton")) {
                            if ($(this).hasClass("closeButton")) {
                                thisGrandParent.slideUp(400, function () {
                                    listItems.height('');
                                    $(this).removeClass("active").addClass("hidden");
                                    $(".whiteCoverUp").css("background-color", "rgba(0,0,0,0)");
                                }).parent().find("a").attr("aria-expanded", "false")[0].focus();
                            }
                            else {
                                if (thisGrandParent.find('.active').context.id === "DevicesClearAllButton") {
                                    $('.device-properties').find('.active').slideUp(400, function () {
                                        listItems.height('');
                                        $(this).removeClass("active").addClass("hidden");
                                        $(".whiteCoverUp").css("background-color", "rgba(0,0,0,0)");
                                    });
                                    $(this).attr("aria-expanded", "false");
                                }
                                thisGrandParent.find(".active").slideUp(400, function () {
                                    listItems.height('');
                                    $(this).removeClass("active").addClass("hidden");
                                    $(".whiteCoverUp").css("background-color", "rgba(0,0,0,0)");
                                });
                                $(this).attr("aria-expanded", "false");
                            }
                            listItems.removeClass('ActiveItem').find('a').removeClass("activeAnchor");
                        }
                        else {
                            listItems.find('a').removeClass("activeAnchor");
                            $(this).addClass("activeAnchor");
                            $(this).attr("aria-expanded", "true");
                            hiddenItems.addClass("hidden").removeClass("active");
                            listItems.height('');
                            hiddenItems.hide();
                            var heightToOffset = $('.Ctex-HowToBuy-Expanding-Products').offset().top - $(this).offset().top, activeElement = $('.Ctex-HowToBuy-Expanding-Products > div > div a.activeAnchor');
                            sliceHowToBuy($(this), thisLiCount, listItems, thisGrandParent, activeElement.parent().parent().find('.hidden').height() + activeElement.height());
                            thisGrandParent.find(".hidden").removeClass("hidden").addClass("active").slideDown(400, function () {
                                $(this).parent().find(".whiteCoverUp").css("background-color", "#fff");
                            });
                            htbSetHeight(heightToOffset, activeElement, false);
                            $(this)[0].scrollIntoView();
                        }
                    }
                }
                ;
                function resizeHowToBuy() {
                    var maxDivHeight = 0, maxActiveHeight = 0, getScreenWidth = window.innerWidth;
                    findTextHeight();
                    $('.Ctex-HowToBuy-Expanding-Products > div > div').each(function () {
                        if ($(this).attr('style')) {
                            if ($(this).find('a').height() > maxDivHeight) {
                                maxDivHeight = $(this).find('a').height();
                            }
                            if ($(this).find('.active').height() > maxActiveHeight) {
                                maxActiveHeight = $(this).find('.active').height();
                            }
                            $(this).height(maxDivHeight + maxActiveHeight);
                        }
                    });
                    $('.Ctex-HowToBuy-Expanding-Products li:not(.ActiveItem)').height('');
                    var thisItem = $('.Ctex-HowToBuy-Expanding-Products > div > div.ActiveItem div:first-of-type a'), thisLiCount = $('.Ctex-HowToBuy-Expanding-Products > div > div.ActiveItem').index(), listItems = $('.Ctex-HowToBuy-Expanding-Products > div > div'), thisGrandParent = $('.Ctex-HowToBuy-Expanding-Products > div > div.ActiveItem');
                    sliceHowToBuy(thisItem, thisLiCount, listItems, thisGrandParent, maxDivHeight + maxActiveHeight);
                    htbSetHeight(null, null, true);
                }
                ;
                function htbSetHeight(heightToOffset, activeElement, isResize) {
                    var activeElementOffset = $('.Ctex-HowToBuy-Expanding-Products > div > div a.activeAnchor').offset(), activeElementHeight = $('.Ctex-HowToBuy-Expanding-Products > div > div a.activeAnchor').height();
                    if (isResize && activeElementOffset != null) {
                        var heightToOffsetResize = activeElementOffset.top - $('.Ctex-HowToBuy-Expanding-Products').offset().top, activeElementResize = $('.Ctex-HowToBuy-Expanding-Products > div > div a.activeAnchor');
                        activeElementResize.parent().parent().find('.active').css("top", heightToOffsetResize + activeElementHeight + 1);
                    }
                    else if (activeElementOffset != null) {
                        heightToOffset = activeElementOffset.top - $('.Ctex-HowToBuy-Expanding-Products').offset().top;
                        activeElement.parent().parent().find('.active').css("top", heightToOffset + activeElementHeight + 1);
                    }
                }
                function findTextHeight() {
                    var textHeight = 0, textItems = $('.Ctex-HowToBuy-Expanding-Products > div > div > div > a >  h3');
                    textItems.each(function () {
                        $(this).css('height', '');
                        if ($(this).outerHeight() > textHeight) {
                            textHeight = $(this).outerHeight();
                        }
                    });
                    textItems.each(function () {
                        $(this).css('height', textHeight);
                    });
                }
                function sliceHowToBuy(thisItem, thisLiCount, listItems, thisGrandParent, tempHeight) {
                    var getScreenWidth = window.innerWidth;
                    if ($('.Ctex-HowToBuy-Expanding-Products > .device-properties > div').find('a').hasClass("activeAnchor")) {
                        if (getScreenWidth <= 550 && getScreenWidth <= 1024) {
                            if (thisLiCount < 1) {
                                listItems.slice(0, 1).height(tempHeight + 100);
                            }
                            else if (thisLiCount >= 1 && thisLiCount < 2) {
                                listItems.slice(1, 2).height(tempHeight + 100);
                            }
                            else if (thisLiCount >= 2 && thisLiCount < 3) {
                                listItems.slice(2, 3).height(tempHeight + 100);
                            }
                            else if (thisLiCount >= 3 && thisLiCount < 4) {
                                listItems.slice(3, 4).height(tempHeight + 100);
                            }
                            else if (thisLiCount >= 4 && thisLiCount < 5) {
                                listItems.slice(4, 5).height(tempHeight + 100);
                            }
                            else if (thisLiCount >= 5 && thisLiCount < 6) {
                                listItems.slice(5, 6).height(tempHeight + 100);
                            }
                            else if (thisLiCount >= 6 && thisLiCount < 7) {
                                listItems.slice(6, 7).height(tempHeight + 100);
                            }
                            else if (thisLiCount >= 7 && thisLiCount < 8) {
                                listItems.slice(7, 8).height(tempHeight + 100);
                            }
                            else if (thisLiCount >= 8 && thisLiCount < 9) {
                                listItems.slice(8, 9).height(tempHeight + 100);
                            }
                            else if (thisLiCount >= 9 && thisLiCount < 10) {
                                listItems.slice(9, 10).height(tempHeight + 100);
                            }
                            else if (thisLiCount >= 10 && thisLiCount < 11) {
                                listItems.slice(10, 11).height(tempHeight + 100);
                            }
                            else if (thisLiCount >= 11 && thisLiCount < 12) {
                                listItems.slice(11, 12).height(tempHeight + 100);
                            }
                        }
                        else if (getScreenWidth >= 550 && getScreenWidth <= 1024) {
                            if (thisLiCount < 2) {
                                listItems.slice(0, 2).height(tempHeight + 100);
                            }
                            else if (thisLiCount >= 2 && thisLiCount < 4) {
                                listItems.slice(2, 4).height(tempHeight + 100);
                            }
                            else if (thisLiCount >= 4 && thisLiCount < 6) {
                                listItems.slice(4, 6).height(tempHeight + 100);
                            }
                            else if (thisLiCount >= 6 && thisLiCount < 8) {
                                listItems.slice(6, 8).height(tempHeight + 100);
                            }
                            else if (thisLiCount >= 8 && thisLiCount < 10) {
                                listItems.slice(8, 10).height(tempHeight + 100);
                            }
                            else if (thisLiCount >= 10 && thisLiCount < 12) {
                                listItems.slice(10, 12).height(tempHeight + 100);
                            }
                        }
                        else {
                            if (thisLiCount < 3) {
                                listItems.slice(0, 3).height(tempHeight + 50);
                            }
                            else if (thisLiCount >= 3 && thisLiCount < 6) {
                                listItems.slice(3, 6).height(tempHeight + 50);
                            }
                            else if (thisLiCount >= 6 && thisLiCount < 9) {
                                listItems.slice(6, 9).height(tempHeight + 50);
                            }
                            else if (thisLiCount >= 9 && thisLiCount < 12) {
                                listItems.slice(9, 12).height(tempHeight + 50);
                            }
                            else if (thisLiCount >= 12 && thisLiCount < 15) {
                                listItems.slice(12, 15).height(tempHeight + 50);
                            }
                            else if (thisLiCount >= 15 && thisLiCount < 18) {
                                listItems.slice(15, 18).height(tempHeight + 50);
                            }
                            else if (thisLiCount >= 18 && thisLiCount < 21) {
                                listItems.slice(18, 21).height(tempHeight + 50);
                            }
                        }
                    }
                    else if ($('.Ctex-HowToBuy-Expanding-Products > div > div').find('a').hasClass("activeAnchor")) {
                        if (getScreenWidth <= 768) {
                            if (thisLiCount < 2) {
                                listItems.slice(0, 2).height(tempHeight + 100);
                            }
                            else if (thisLiCount >= 2 && thisLiCount < 4) {
                                listItems.slice(2, 4).height(tempHeight + 100);
                            }
                            else if (thisLiCount >= 4 && thisLiCount < 6) {
                                listItems.slice(4, 6).height(tempHeight + 100);
                            }
                            else if (thisLiCount >= 6 && thisLiCount < 8) {
                                listItems.slice(6, 8).height(tempHeight + 100);
                            }
                            else if (thisLiCount >= 8 && thisLiCount < 10) {
                                listItems.slice(8, 10).height(tempHeight + 100);
                            }
                            else if (thisLiCount >= 10 && thisLiCount < 12) {
                                listItems.slice(10, 12).height(tempHeight + 100);
                            }
                        }
                        else if (getScreenWidth <= 940 && getScreenWidth >= 769) {
                            if (thisLiCount < 3) {
                                listItems.slice(0, 3).height(tempHeight + 50);
                            }
                            else if (thisLiCount >= 3 && thisLiCount < 6) {
                                listItems.slice(3, 6).height(tempHeight + 50);
                            }
                            else if (thisLiCount >= 6 && thisLiCount < 9) {
                                listItems.slice(6, 9).height(tempHeight + 50);
                            }
                            else if (thisLiCount >= 9 && thisLiCount < 12) {
                                listItems.slice(9, 12).height(tempHeight + 50);
                            }
                            else if (thisLiCount >= 12 && thisLiCount < 15) {
                                listItems.slice(12, 15).height(tempHeight + 50);
                            }
                        }
                        else {
                            if (thisLiCount < 4) {
                                listItems.slice(0, 4).height(tempHeight + 50);
                            }
                            else if (thisLiCount >= 4 && thisLiCount < 8) {
                                listItems.slice(4, 8).height(tempHeight + 50);
                            }
                            else if (thisLiCount >= 8 && thisLiCount < 12) {
                                listItems.slice(8, 12).height(tempHeight + 50);
                            }
                            else if (thisLiCount >= 12 && thisLiCount < 15) {
                                listItems.slice(12, 16).height(tempHeight + 50);
                            }
                            else if (thisLiCount >= 15 && thisLiCount < 19) {
                                listItems.slice(16, 20).height(tempHeight + 50);
                            }
                        }
                    }
                }
            }
            HowToBuyModule.init = init;
        })(HowToBuyModule = Components.HowToBuyModule || (Components.HowToBuyModule = {}));
    })(Components = Cortex.Components || (Cortex.Components = {}));
})(Cortex || (Cortex = {}));
var Cortex;
(function (Cortex) {
    var INXPO;
    (function (INXPO) {
        var ErrorType;
        (function (ErrorType) {
            ErrorType[ErrorType["Unknown"] = 0] = "Unknown";
            ErrorType[ErrorType["ModelValidation"] = 1] = "ModelValidation";
            ErrorType[ErrorType["API"] = 2] = "API";
        })(ErrorType = INXPO.ErrorType || (INXPO.ErrorType = {}));
        function Init(formID, countryList, countryOptions) {
            Cortex.INXPO.countryList = countryList;
            Cortex.INXPO.countryOptions = countryOptions;
            Cortex.INXPO.formID = formID;
            $("#" + Cortex.INXPO.formID).on('click', '#submit', function (e) {
                $.ajax({
                    type: "POST",
                    url: "/MSEDUCommon/Views/INXPO.aspx/Process",
                    data: JSON.stringify({ 'model': $("#" + Cortex.INXPO.formID).serializeObject() }),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (data, status, jqXHR) {
                        var response = data.d;
                        if (!response.Success) {
                            displayResponseErrors(response);
                        }
                        else {
                            $("#" + Cortex.INXPO.formID + " .inputSection").hide();
                            $("#" + Cortex.INXPO.formID + " .successSection").show();
                        }
                    }
                });
                return false;
            });
            initialiseForm();
        }
        INXPO.Init = Init;
        function initialiseForm() {
            $("#" + Cortex.INXPO.formID + " #chkOptin").prop('checked', false);
            $("#" + Cortex.INXPO.formID + " #submit").attr('disabled', 'true');
            $("#" + Cortex.INXPO.formID + " #checkboxtext:before").css('visibility', 'hidden');
            setDefaults();
            initMWF();
            attachEventHandlers();
        }
        INXPO.initialiseForm = initialiseForm;
        function clearAllErrors() {
            $("#" + Cortex.INXPO.formID).find('input[type="email"], input[type="hidden"], input[type="text"], input[type="password"], input[type="checkbox"]:checked, input[type="radio"]:checked, select').each(function (index, formField) {
                $(formField).removeClass('ctex-invalid');
            });
        }
        INXPO.clearAllErrors = clearAllErrors;
        function displayResponseErrors(response) {
            clearAllErrors();
            var errors = response.Errors;
            var propertiesInError = response.PropertiesInError;
            var apiErrorFound = false;
            var errorWrapper = $('<ul>');
            $('#errorContainer').empty();
            for (var _i = 0, errors_1 = errors; _i < errors_1.length; _i++) {
                var error = errors_1[_i];
                if (apiErrorFound && error.Type === ErrorType.API) {
                    continue;
                }
                apiErrorFound = error.Type === ErrorType.API;
                var errorItem = $('<li class="error-item">');
                errorItem.text(error.Message);
                errorWrapper.append(errorItem);
                $('#errorContainer').append(errorWrapper);
            }
            for (var _a = 0, propertiesInError_1 = propertiesInError; _a < propertiesInError_1.length; _a++) {
                var propertyName = propertiesInError_1[_a];
                $("#" + Cortex.INXPO.formID + " [name=" + propertyName + "]").addClass('ctex-invalid');
            }
        }
        INXPO.displayResponseErrors = displayResponseErrors;
        function initMWF() {
            mwf.ComponentFactory.create([
                {
                    'component': mwf.Checkbox,
                    callback: function (checkBoxes) {
                        for (var idx = 0; idx < checkBoxes.length; idx++) {
                            if (checkBoxes[idx].input === $("#" + Cortex.INXPO.formID + " #chkOptin").get(0)) {
                                checkBoxes[idx].subscribe({
                                    onValueChanged: function (notification) {
                                        optinMetaUpdate();
                                    }
                                });
                            }
                        }
                    }
                }
            ]);
        }
        INXPO.initMWF = initMWF;
        function attachEventHandlers() {
            $("#" + Cortex.INXPO.formID + " #CountryId").on('change', function (e) {
                var countryId = $(e.currentTarget).val();
                countryChange(countryId);
            });
        }
        INXPO.attachEventHandlers = attachEventHandlers;
        function setDefaults() {
            var countriesList = $("#" + Cortex.INXPO.formID + " #CountryId option");
            var defaultCountry = countriesList.filter(':selected');
            if (defaultCountry.length === 1) {
                var defaultCountryID = defaultCountry.val();
                countryChange(defaultCountryID);
            }
        }
        INXPO.setDefaults = setDefaults;
        function countryChange(countryid) {
            var countryOption = Cortex.Utilities.findObjectByKey(INXPO.countryOptions, 'CountryID', countryid);
            serviceAvailability(countryOption);
            optinChecked(countryOption);
            optinText(countryOption);
            optinMetaUpdate();
        }
        INXPO.countryChange = countryChange;
        function serviceAvailability(countryOption) {
            if (countryOption.ServiceAvailability === 0) {
                $("#" + Cortex.INXPO.formID + " input").attr('disabled', 'true');
                $("#" + Cortex.INXPO.formID + " #submit").attr('disabled', 'true');
            }
            else {
                $("#" + Cortex.INXPO.formID + " input").removeAttr('disabled');
                $("#" + Cortex.INXPO.formID + " #submit").removeAttr('disabled');
            }
        }
        INXPO.serviceAvailability = serviceAvailability;
        function optinChecked(countryOption) {
            var isVisible = countryOption.OptinCheckState != 2;
            var isChecked = countryOption.OptinCheckState != 0;
            $("#" + Cortex.INXPO.formID + " #chkOptin").prop('checked', isChecked);
            if (isVisible && countryOption.ServiceAvailability != 0) {
                $("#" + Cortex.INXPO.formID + " #chkOptin").removeAttr('disabled');
            }
            else {
                $("#" + Cortex.INXPO.formID + " #chkOptin").attr('disabled', 'true');
            }
        }
        INXPO.optinChecked = optinChecked;
        function optinText(countryOption) {
            var optinText = $("#" + Cortex.INXPO.formID + " #optinTexts #" + countryOption.OptinTextID).html();
            $("#" + Cortex.INXPO.formID + " #checkboxtext").html(optinText);
        }
        INXPO.optinText = optinText;
        function optinMetaUpdate() {
            var isChecked = $("#" + Cortex.INXPO.formID + " #chkOptin").prop('checked');
            if (isChecked) {
                $("#" + Cortex.INXPO.formID + " [name=UDF1014]").val('1');
                $("#" + Cortex.INXPO.formID + " [name=UDF1015]").val('MSFT = OKC');
            }
            else {
                $("#" + Cortex.INXPO.formID + " [name=UDF1014]").val('0');
                $("#" + Cortex.INXPO.formID + " [name=UDF1015]").val('MSFT = DKC');
            }
        }
        INXPO.optinMetaUpdate = optinMetaUpdate;
    })(INXPO = Cortex.INXPO || (Cortex.INXPO = {}));
})(Cortex || (Cortex = {}));
var Cortex;
(function (Cortex) {
    var LiveChat;
    (function (LiveChat) {
        var Section;
        (function (Section) {
            Section[Section["enUS"] = 0] = "enUS";
            Section[Section["enAU"] = 1] = "enAU";
            Section[Section["CloudPlatformUS"] = 2] = "CloudPlatformUS";
            Section[Section["CloudPlatformAU"] = 3] = "CloudPlatformAU";
        })(Section = LiveChat.Section || (LiveChat.Section = {}));
        function LocaleEnableMatch(currentLocale, localesToApply) {
            for (var idx = 0; idx < localesToApply.length; idx++) {
                if (localesToApply[idx].match(new RegExp(currentLocale, 'i')) != null) {
                    return true;
                }
            }
            return false;
        }
        LiveChat.LocaleEnableMatch = LocaleEnableMatch;
        function Apply(lpSectionCode, currentLocale, localesToApply) {
            if (localesToApply) {
                if (!LocaleEnableMatch(currentLocale, localesToApply)) {
                    return;
                }
            }
            var lpSection, MSFTConfig = {
                coreData: {
                    siteID: '60270350'
                }
            };
            switch (lpSectionCode) {
                case Section.enAU:
                    lpSection = 'productivity-leadgen-en-au-education';
                    break;
                case Section.enUS:
                    lpSection = 'productivity-leadgen-en-us-education';
                    break;
                case Section.CloudPlatformUS:
                    lpSection = 'cloudplatform-leadgen-en-us-education';
                    break;
                case Section.CloudPlatformAU:
                    lpSection = 'cloudplatform-leadgen-en-au-education';
                    break;
            }
            var lpTag = lpTag || {}, lpMTagConfig = lpMTagConfig || {};
            lpTag.vars = lpTag.vars || [];
            lpTag.dbs = lpTag.dbs || [];
            lpTag.sdes = lpTag.sdes || [];
            lpTag.section = lpSection;
            window.lpTag = window.lpTag || {};
            if (typeof window.lpTag._tagCount === 'undefined') {
                window.lpTag = {
                    site: MSFTConfig.coreData.siteID || '',
                    section: lpTag.section || '',
                    autoStart: lpTag.autoStart === false ? false : true,
                    ovr: lpTag.ovr || {},
                    _v: '1.6.0',
                    _tagCount: 1,
                    protocol: 'https:',
                    events: {
                        bind: function (app, ev, fn) { lpTag.defer(function () { lpTag.events.bind(app, ev, fn); }, 0); },
                        trigger: function (app, ev, json) {
                            lpTag.defer(function () { lpTag.events.trigger(app, ev, json); }, 1);
                        }
                    },
                    defer: function (fn, fnType) {
                        if (fnType == 0) {
                            this._defB = this._defB || [];
                            this._defB.push(fn);
                        }
                        else if (fnType == 1) {
                            this._defT = this._defT || [];
                            this._defT.push(fn);
                        }
                        else {
                            this._defL = this._defL || [];
                            this._defL.push(fn);
                        }
                    },
                    load: function (src, chr, id) {
                        var t = this;
                        setTimeout(function () {
                            t._load(src, chr, id);
                        }, 0);
                    },
                    _load: function (src, chr, id) {
                        var url = src;
                        if (!src) {
                            url = this.protocol + '//' + ((this.ovr && this.ovr.domain) ? this.ovr.domain : 'lptag.liveperson.net') + '/tag/tag.js?site=' + this.site;
                        }
                        var s = document.createElement('script');
                        s.setAttribute('charset', chr ? chr : 'UTF-8');
                        if (id) {
                            s.setAttribute('id', id);
                        }
                        s.setAttribute('src', url);
                        document.getElementsByTagName('head').item(0).appendChild(s);
                    },
                    init: function () {
                        this._timing = this._timing || {};
                        this._timing.start = (new Date()).getTime();
                        var that = this;
                        if (window.attachEvent) {
                            window.attachEvent('onload', function () {
                                that._domReady('domReady');
                            });
                        }
                        else {
                            window.addEventListener('DOMContentLoaded', function () { that._domReady('contReady'); }, false);
                            window.addEventListener('load', function () { that._domReady('domReady'); }, false);
                        }
                        if (typeof (window._lptStop) == 'undefined') {
                            this.load();
                        }
                    }, start: function () { this.autoStart = true; }, _domReady: function (n) { if (!this.isDom) {
                        this.isDom = true;
                        this.events.trigger('LPT', 'DOM_READY', { t: n });
                    } this._timing[n] = (new Date()).getTime(); }, vars: lpTag.vars || [], dbs: lpTag.dbs || [], ctn: lpTag.ctn || [], sdes: lpTag.sdes || [], ev: lpTag.ev || []
                };
                lpTag = window.lpTag;
                lpTag.init();
            }
            else {
                window.lpTag._tagCount += 1;
            }
            function lpBindButton() {
                function lpButtonShow(eventData, eventInfo) {
                    var elements = document.getElementsByClassName("LPMcontainer");
                    var elementLength = elements.length;
                    for (var i = elementLength; i--;) {
                        var element = elements[i];
                        element.onclick = function () {
                            lpTag.sdes.push({
                                "type": "lead",
                                "lead": { "topic": "Education" }
                            });
                        };
                    }
                }
                lpTag.events.bind("LP_OFFERS", "OFFER_DISPLAY", lpButtonShow);
            }
            lpTag.events.bind('LP_OFFERS', 'START', lpBindButton);
            console.log('chat start');
        }
        LiveChat.Apply = Apply;
    })(LiveChat = Cortex.LiveChat || (Cortex.LiveChat = {}));
})(Cortex || (Cortex = {}));
var Cortex;
(function (Cortex) {
    var Tracking;
    (function (Tracking) {
        var Type;
        (function (Type) {
            Type[Type["Atlas"] = 0] = "Atlas";
            Type[Type["GoogleAdWords"] = 1] = "GoogleAdWords";
            Type[Type["AWA"] = 2] = "AWA";
            Type[Type["DoubleclickFloodlight"] = 3] = "DoubleclickFloodlight";
            Type[Type["BingUET"] = 4] = "BingUET";
            Type[Type["GoogleTagManager"] = 5] = "GoogleTagManager";
            Type[Type["FacebookTracker"] = 6] = "FacebookTracker";
        })(Type = Tracking.Type || (Tracking.Type = {}));
        var Action;
        (function (Action) {
            Action[Action["Click"] = 0] = "Click";
            Action[Action["PageLoad"] = 1] = "PageLoad";
        })(Action = Tracking.Action || (Tracking.Action = {}));
        var CounterType;
        (function (CounterType) {
            CounterType[CounterType["PerAction"] = 0] = "PerAction";
            CounterType[CounterType["PerPage"] = 1] = "PerPage";
            CounterType[CounterType["PerSession"] = 2] = "PerSession";
        })(CounterType = Tracking.CounterType || (Tracking.CounterType = {}));
        function Init() {
            if (Tracking.types == undefined) {
                Tracking.types = new Array();
                Tracking.type = {};
                Tracking.type.TrackerTypeKey = Type.Atlas;
                Tracking.type.URL_JS = 'https://ad.atdmt.com/m/a.js';
                Tracking.type.URL_HTML = 'https://ad.atdmt.com/m/a.html';
                Tracking.types.push(Tracking.type);
                Tracking.type = {};
                Tracking.type.TrackerTypeKey = Type.GoogleAdWords;
                Tracking.type.URL_JS = 'https://www.googleadservices.com/pagead/conversion_async.js';
                Tracking.types.push(Tracking.type);
                Tracking.type = {};
                Tracking.type.TrackerTypeKey = Type.AWA;
                Tracking.type.URL_JS = 'https://az725175.vo.msecnd.net/scripts/jsll-4.js';
                Tracking.types.push(Tracking.type);
                Tracking.type = {};
                Tracking.type.TrackerTypeKey = Type.DoubleclickFloodlight;
                Tracking.type.IFrameSource = 'https://{0}.fls.doubleclick.net/activityi';
                Tracking.types.push(Tracking.type);
                Tracking.type = {};
                Tracking.type.TrackerTypeKey = Type.BingUET;
                Tracking.type.URL_JS = 'https://bat.bing.com/bat.js';
                Tracking.types.push(Tracking.type);
                Tracking.type = {};
                Tracking.type.TrackerTypeKey = Type.GoogleTagManager;
                Tracking.type.URL_JS = 'https://www.googletagmanager.com/gtm.js';
                Tracking.types.push(Tracking.type);
                Tracking.type = {};
                Tracking.type.TrackerTypeKey = Type.FacebookTracker;
                Tracking.type.URL_JS = 'http://connect.facebook.net/en_US/fbevents.js';
                Tracking.types.push(Tracking.type);
            }
        }
        Tracking.Init = Init;
        function ParamsValid(trackerType, trackerAction, id, currentLocale, localesToApply, elementSelector, eventTag, configJson, elementAttributes) {
            if (id == undefined) {
                console.error('CTEX: Tracker setup error - ID is a required parameter.');
                return false;
            }
            if (!(trackerType in Type)) {
                console.error('CTEX: Tracker setup error - TrackerType invalid.');
                return false;
            }
            if (trackerType == undefined) {
                console.error('CTEX: Tracker setup error - TrackerType not specified.');
                return false;
            }
            if (!currentLocale) {
                console.error('CTEX: Tracker setup error - currentLocale not defined.');
                return false;
            }
            if (localesToApply && !Array.isArray(localesToApply)) {
                console.error('CTEX: Tracker setup error - localesToApply must be an array.');
                return false;
            }
            if ($ === undefined) {
                console.error('CTEX: Tracker setup error - $ undefined. Tracker requires JQuery 1.7 or greater.');
                return false;
            }
            if (trackerAction === Action.Click && elementSelector === undefined) {
                console.error('CTEX: Tracker setup error - element ID required for click tracking.');
                return false;
            }
            if (trackerType == Type.Atlas || trackerType == Type.GoogleAdWords) {
                if (trackerAction == undefined) {
                    console.error('CTEX: Tracker setup error - Action not specified.');
                    return false;
                }
                if (!localesToApply) {
                    console.error('CTEX: Tracker setup error - No applicable locales provided.');
                    return false;
                }
            }
            return true;
        }
        Tracking.ParamsValid = ParamsValid;
        function Apply(trackerType, trackerAction, id, currentLocale, localesToApply, elementSelector, eventTag, configJson, elementAttributes) {
            if (!ParamsValid(trackerType, trackerAction, id, currentLocale, localesToApply, elementSelector, eventTag, configJson, elementAttributes)) {
                return;
            }
            if (localesToApply) {
                if (!LocaleEnableMatch(currentLocale, localesToApply)) {
                    return;
                }
            }
            Init();
            switch (trackerType) {
                case Type.Atlas:
                    AtlasInit(trackerAction, id, elementSelector, eventTag);
                    break;
                case Type.GoogleAdWords:
                    GoogleAdWordsInit(trackerAction, id, elementSelector, eventTag);
                    break;
                case Type.AWA:
                    AWAInit(trackerAction, id, currentLocale, elementSelector, elementAttributes, configJson);
                    break;
                case Type.DoubleclickFloodlight:
                    DCFloodlightInit(trackerAction, id, elementSelector, eventTag, configJson);
                    break;
                case Type.BingUET:
                    BingUET(trackerAction, id, elementSelector, eventTag);
                    break;
                case Type.GoogleTagManager:
                    GoogleTagManager(trackerAction, id, elementSelector, eventTag);
                    break;
                case Type.FacebookTracker:
                    FacebookTracker(trackerAction, id, elementSelector, eventTag);
                    break;
            }
        }
        Tracking.Apply = Apply;
        function FacebookTracker(trackerAction, id, elementSelector, eventTag) {
            if ($('[ctex-facebookTracker-asyncjs]').length == 0) {
                var el = document.createElement('script');
                el.setAttribute('ctex-facebookTracker-asyncjs', 'true');
                el.charset = 'utf-8';
                el.src = Tracking.types[Type.FacebookTracker].URL_JS;
                var firstScript = document.getElementsByTagName('script')[0];
                firstScript.parentNode.insertBefore(el, firstScript);
            }
            if (trackerAction === Action.PageLoad) {
                $(window).load(function () {
                    window.fbq('init', id, {
                        em: ""
                    });
                    window.fbq('track', 'PageView');
                    InjectAsyncPixelTracker("https://www.facebook.com/tr?id=" + id + "&ev=PageView", true);
                });
            }
        }
        Tracking.FacebookTracker = FacebookTracker;
        function AtlasInit(trackerAction, id, elementSelector, eventTag) {
            var url = Tracking.types[Type.Atlas].URL_JS;
            if (trackerAction === Action.PageLoad) {
                url += ';m=' + id;
                url += ';cache=' + GetCacheParam();
                var el = document.createElement('script');
                el.async = true;
                el.src = url;
                var firstScript = document.getElementsByTagName('script')[0];
                firstScript.parentNode.insertBefore(el, firstScript);
                url = Tracking.types[Type.Atlas].URL_HTML;
                url += ';m=' + id;
                url += ';noscript=1';
                var noScriptEl = document.createElement('noscript');
                var iFrame = document.createElement('iframe');
                iFrame.style.display = 'none';
                iFrame.src = url;
                noScriptEl.appendChild(iFrame);
                firstScript.parentNode.insertBefore(noScriptEl, firstScript);
            }
            else if (trackerAction === Action.Click) {
                url += ';m=' + id;
                if (eventTag !== undefined) {
                    url += '?event=' + eventTag;
                }
                $(document).on('click', elementSelector, function () {
                    $.getScript(url);
                });
            }
        }
        Tracking.AtlasInit = AtlasInit;
        function GoogleAdWordsInit(trackerAction, id, elementSelector, eventTag) {
            if ($('[ctex-ga-asyncjs]').length == 0) {
                var el = document.createElement('script');
                el.setAttribute('ctex-ga-asyncjs', 'true');
                el.charset = 'utf-8';
                el.src = Tracking.types[Type.GoogleAdWords].URL_JS;
                var firstScript = document.getElementsByTagName('script')[0];
                firstScript.parentNode.insertBefore(el, firstScript);
            }
            if (trackerAction === Action.PageLoad) {
                $(window).on('load', function () {
                    window.google_trackConversion({
                        google_conversion_id: id,
                        google_custom_params: {
                            guid: 'ON',
                            script: 0
                        },
                        google_remarketing_only: true
                    });
                });
            }
            else if (trackerAction === Action.Click) {
                if (eventTag == undefined) {
                    console.error('CTEX: eventTag (label) must be specfified for tracker type.');
                    return;
                }
                $(document).on('click', elementSelector, function () {
                    window.google_trackConversion({
                        google_conversion_id: id,
                        google_custom_params: {
                            label: eventTag,
                            guid: 'ON',
                            script: 0
                        },
                        google_remarketing_only: true
                    });
                });
            }
        }
        Tracking.GoogleAdWordsInit = GoogleAdWordsInit;
        function BingUET(trackerAction, id, elementSelector, eventTag) {
            if ($('[ctex-bingUAT-asyncjs]').length == 0) {
                var el = document.createElement('script');
                el.setAttribute('ctex-bingUAT-asyncjs', 'true');
                el.charset = 'utf-8';
                el.src = Tracking.types[Type.BingUET].URL_JS;
                var firstScript = document.getElementsByTagName('script')[0];
                firstScript.parentNode.insertBefore(el, firstScript);
            }
            if (trackerAction === Action.PageLoad) {
                $(window).load(function () {
                    window["uetq"] = new UET({ ti: id });
                    window.uetq.push({ gv: id });
                });
            }
        }
        Tracking.BingUET = BingUET;
        function AWAInit(trackerAction, appId, currentLocale, elementSelector, elementAttributes, configJson) {
            if (trackerAction == Action.Click) {
                if (elementAttributes != undefined) {
                    var attributesObject, el;
                    try {
                        el = $(elementSelector);
                        attributesObject = JSON.parse(elementAttributes);
                        for (var property in attributesObject) {
                            if (attributesObject.hasOwnProperty(property)) {
                                el.attr(property.toString(), attributesObject[property]);
                            }
                        }
                    }
                    catch (e) {
                        console.error('CTEX: AWA tracker setup error - "elementAttributes" parameter malformed. Expected JSON string.');
                        return;
                    }
                }
            }
            var metaTag = $('<meta>');
            metaTag.attr('name', 'ms.appid');
            metaTag.attr('content', 'JS:' + appId);
            $('head').append(metaTag);
            try {
                var config = {
                    coreData: {
                        appId: appId,
                        market: currentLocale
                    }
                };
                if (configJson && configJson.length > 0) {
                    var configObject = JSON.parse(configJson);
                    $.extend(true, config, configObject);
                }
            }
            catch (e) {
                console.error('CTEX: AWA tracker setup error - "configJson" parameter malformed. Expected JSON string.');
                return;
            }
            if (typeof (awa) == 'undefined') {
                $.cachedScript(Tracking.types[Type.AWA].URL_JS)
                    .done(function (script, textStatus) {
                    awa.init(config);
                })
                    .fail(function (jqxhr, settings, exception) {
                    console.error('CTEX: AWA tracker setup error - Failed to retrieve core script.');
                    return;
                });
            }
        }
        Tracking.AWAInit = AWAInit;
        function DCFloodlightInit(trackerAction, id, elementSelector, eventTag, configJson) {
            Tracking.DCFloodlightCounterType = CounterType.PerAction;
            var firstBodyElement;
            var url = DCFloodlightGetUrl(id, configJson);
            firstBodyElement = document.body.firstChild;
            if (trackerAction === Action.PageLoad) {
                document.body.insertBefore(GetIFrameElement(url), firstBodyElement);
            }
            if (trackerAction === Action.Click) {
                $(document).on('click', elementSelector, function () {
                    document.body.insertBefore(GetIFrameElement(url), firstBodyElement);
                });
            }
        }
        Tracking.DCFloodlightInit = DCFloodlightInit;
        function DCFloodlightGetUrl(id, configJson) {
            var url;
            var propertyName;
            var propertyValue;
            var config;
            switch (Tracking.DCFloodlightCounterType) {
                case CounterType.PerAction:
                    Tracking.dcFloodlightVisitorID = Math.random() * 10000000000000;
                    break;
                case CounterType.PerPage:
                    if (typeof (Tracking.dcFloodlightVisitorID) != 'number') {
                        Tracking.dcFloodlightVisitorID = Math.random() * 10000000000000;
                        $(document).ready(function () {
                            Tracking.dcFloodlightVisitorID = null;
                        });
                    }
                    break;
                case CounterType.PerSession:
                    if (typeof (Tracking.dcFloodlightVisitorID) != 'number') {
                        Tracking.dcFloodlightVisitorID = Math.random() * 10000000000000;
                    }
                    break;
                default:
                    Tracking.dcFloodlightVisitorID = Math.random() * 10000000000000;
                    break;
            }
            url = Tracking.types[Type.DoubleclickFloodlight].IFrameSource.replace("{0}", id);
            config = {
                src: id,
                type: null,
                cat: null,
                u1: null,
                u2: null,
                u5: null,
                u6: null,
                u25: null,
                u26: null,
                u52: null,
                dc_lat: null,
                dc_rdid: null,
                tag_for_child_directed_treatment: null,
                ord: Tracking.dcFloodlightVisitorID
            };
            if (typeof (configJson) !== 'undefined') {
                $.extend(true, config, configJson);
                Object.keys(config).forEach(function (key, index) {
                    propertyName = key;
                    propertyValue = config[key];
                    url += ";" + propertyName + "=" + (propertyValue == null ? '' : propertyValue);
                });
            }
            return url;
        }
        Tracking.DCFloodlightGetUrl = DCFloodlightGetUrl;
        function GoogleTagManager(trackerAction, id, elementSelector, eventTag) {
            if (trackerAction === Action.PageLoad) {
                if ($('[ctex-gtm-asyncjs]').length == 0) {
                    var el = document.createElement('script');
                    el.setAttribute('ctex-gtm-asyncjs', 'true');
                    el.charset = 'utf-8';
                    var url = Tracking.types[Type.GoogleTagManager].URL_JS;
                    var wl = wl || [];
                    wl.push({
                        'gtm.start': new Date().getTime(),
                        event: 'gtm.js'
                    });
                    url += "?id=" + id;
                    InjectAsyncScript(url);
                    InjectIframeTracker(url);
                }
            }
        }
        Tracking.GoogleTagManager = GoogleTagManager;
        function GetIFrameElement(url) {
            var iFrame;
            iFrame = document.createElement('iframe');
            iFrame.src = url;
            iFrame.width = '1';
            iFrame.height = '1';
            iFrame.frameBorder = '0';
            iFrame.style.display = 'none';
            return iFrame;
        }
        Tracking.GetIFrameElement = GetIFrameElement;
        function GetCacheParam() {
            return Math.random();
        }
        Tracking.GetCacheParam = GetCacheParam;
        function LocaleEnableMatch(currentLocale, localesToApply) {
            for (var idx = 0; idx < localesToApply.length; idx++) {
                if (localesToApply[idx].match(new RegExp(currentLocale, 'i')) != null) {
                    return true;
                }
            }
            return false;
        }
        Tracking.LocaleEnableMatch = LocaleEnableMatch;
        function InjectAsyncScript(scriptURL) {
            var firstScriptOnPage = document.getElementsByTagName("script")[0];
            var newScript = document.createElement("script");
            newScript.type = "application/javascript";
            newScript.async = true;
            newScript.src = scriptURL;
            firstScriptOnPage.parentNode.insertBefore(newScript, firstScriptOnPage);
        }
        Tracking.InjectAsyncScript = InjectAsyncScript;
        function InjectAsyncPixelTracker(imageURL, noScriptWrapper) {
            if (noScriptWrapper === void 0) { noScriptWrapper = false; }
            var pixelTracker, trackerContainer;
            pixelTracker = $('<img>');
            pixelTracker.attr('height', '1');
            pixelTracker.attr('width', '1');
            pixelTracker.attr('alt', '');
            pixelTracker.attr('style', 'display:none;');
            pixelTracker.attr('src', imageURL);
            if (noScriptWrapper) {
                trackerContainer = $('<noscript>');
                trackerContainer.append(pixelTracker);
            }
            else {
                trackerContainer = pixelTracker;
            }
            $('body').append(trackerContainer);
        }
        Tracking.InjectAsyncPixelTracker = InjectAsyncPixelTracker;
        function InjectIframeTracker(URI) {
            var frameTracker, trackerContainer;
            frameTracker = $('<iframe>');
            frameTracker.attr('height', '0');
            frameTracker.attr('width', '0');
            frameTracker.attr('alt', '');
            frameTracker.attr('style', 'display:none;visibility:hidden');
            frameTracker.attr('src', URI);
            trackerContainer = $('<noscript>');
            trackerContainer.text(frameTracker.get(0).outerHTML);
            $('body').append(trackerContainer);
        }
        Tracking.InjectIframeTracker = InjectIframeTracker;
    })(Tracking = Cortex.Tracking || (Cortex.Tracking = {}));
})(Cortex || (Cortex = {}));
jQuery.cachedScript = function (url, options) {
    options = $.extend(options || {}, {
        dataType: "script",
        cache: true,
        url: url
    });
    return jQuery.ajax(options);
};
var Cortex;
(function (Cortex) {
    var Utilities;
    (function (Utilities) {
        function XSSSanitise(input) {
            var regex = new RegExp("^[a-zA-Z'.\s]+$");
            if (!regex.test(input)) {
                return '';
            }
            return input;
        }
        Utilities.XSSSanitise = XSSSanitise;
        function getKeyCode(e) {
            var key = e.which || e.keyCode || e.key || 0;
            return key;
        }
        Utilities.getKeyCode = getKeyCode;
        function elementSelected(e) {
            if (e.type === 'click') {
                return true;
            }
            if (e.type === 'keyup') {
                if (Cortex.Utilities.getKeyCode(e) === $.ui.keyCode.ENTER) {
                    return true;
                }
            }
            return false;
        }
        Utilities.elementSelected = elementSelected;
        function findObjectByKey(array, key, value) {
            for (var i = 0; i < array.length; i++) {
                if (array[i][key] == value) {
                    return array[i];
                }
            }
            return null;
        }
        Utilities.findObjectByKey = findObjectByKey;
        function getUrlParameters(url) {
            var queryString, keyValuePairs, keyValue, params;
            params = null;
            queryString = url.split("?")[1];
            if (typeof (queryString) !== 'undefined') {
                params = new Array();
                keyValuePairs = queryString.split("&");
                keyValue = new Array();
                keyValuePairs.forEach(function (pair) {
                    keyValue = pair.split("=");
                    params[keyValue[0]] = decodeURIComponent(keyValue[1]).replace("+", " ");
                });
            }
            return params;
        }
        Utilities.getUrlParameters = getUrlParameters;
        function loadPartialView(pageUrl, cultureCode, containerId, failureCB, defaultParams) {
            if (window.location.hostname !== "localhost") {
                pageUrl = "/en-us/education" + pageUrl;
            }
            var firstParam = true;
            for (var param in defaultParams) {
                pageUrl += firstParam ? '?' : '&';
                pageUrl += param + "=" + encodeURI(defaultParams[param]);
                firstParam = false;
            }
            pageUrl += firstParam ? "?lang=" + cultureCode : "&lang=" + cultureCode;
            $(document).ready(function () {
                $.ajax({
                    type: "GET",
                    url: pageUrl,
                    success: function (response) {
                        $("#" + containerId).html(response);
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        if (failureCB != undefined && failureCB != null && typeof (failureCB) == 'function') {
                            failureCB(jqXHR, textStatus, errorThrown, pageUrl);
                        }
                    },
                    complete: function () {
                    }
                });
            });
        }
        Utilities.loadPartialView = loadPartialView;
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        Utilities.getRandomInt = getRandomInt;
        function setLinkTargets() {
            $(document).ready(function () {
                var main = document.querySelector('main'), links = main.querySelectorAll('a');
                Array.prototype.slice.call(links).forEach(function (link) {
                    if (!link.href.match(/(microsoft.com\/education|\/[a-zA-Z]{2}-[a-zA-Z]{2}\/education|localhost|ms-p9-s3-|ms-p1-s3-)/)) {
                        link.setAttribute('target', '_blank');
                    }
                    else {
                        var linkURL = new URL(link.href).pathname.substring(1, 6);
                        if (document.body.dataset['locale'].toLowerCase() !== linkURL.toLowerCase()) {
                            link.setAttribute('target', '_blank');
                        }
                        else {
                            link.removeAttribute('target');
                        }
                    }
                });
            });
        }
        Utilities.setLinkTargets = setLinkTargets;
    })(Utilities = Cortex.Utilities || (Cortex.Utilities = {}));
})(Cortex || (Cortex = {}));
(function (funcName, baseObj) {
    'use strict';
    funcName = funcName || 'docReady';
    baseObj = baseObj || window;
    var readyList = [];
    var readyFired = false;
    var readyEventHandlersInstalled = false;
    function ready() {
        if (!readyFired) {
            readyFired = true;
            for (var i = 0; i < readyList.length; i++) {
                readyList[i].fn.call(window, readyList[i].ctx);
            }
            readyList = [];
        }
    }
    function readyStateChange() {
        if (document.readyState === 'complete') {
            ready();
        }
    }
    baseObj[funcName] = function (callback, context) {
        if (typeof callback !== 'function') {
            throw new TypeError('callback for docReady(fn) must be a function');
        }
        if (readyFired) {
            setTimeout(function () { callback(context); }, 1);
            return;
        }
        else {
            readyList.push({ fn: callback, ctx: context });
        }
        if (document.readyState === 'complete' || (!document.attachEvent && document.readyState === 'interactive')) {
            setTimeout(ready, 1);
        }
        else if (!readyEventHandlersInstalled) {
            if (document.addEventListener) {
                document.addEventListener('DOMContentLoaded', ready, false);
                window.addEventListener('load', ready, false);
            }
            else {
                document.attachEvent('onreadystatechange', readyStateChange);
                window.attachEvent('onload', ready);
            }
            readyEventHandlersInstalled = true;
        }
    };
})("docReady", window);
(function (jQuery) {
    jQuery.fn.serializeObject = function () {
        var o = {};
        $(this).find('input[type="email"], input[type="hidden"], input[type="text"], input[type="password"], input[type="checkbox"]:checked, input[type="radio"]:checked, select').each(function () {
            if ($(this).attr('type') == 'hidden') {
                var $parent = $(this).parent();
                var $chb = $parent.find('input[type="checkbox"][name="' + this.name.replace(/\[/g, '\[').replace(/\]/g, '\]') + '"]');
                if ($chb != null) {
                    if ($chb.prop('checked'))
                        return;
                }
            }
            if (this.name === null || this.name === undefined || this.name === '')
                return;
            var elemValue = null;
            if ($(this).is('select'))
                elemValue = $(this).find('option:selected').val();
            else
                elemValue = this.value;
            if (elemValue.length == 0) {
                return;
            }
            if (o[this.name] !== undefined) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(elemValue || '');
            }
            else {
                o[this.name] = elemValue || '';
            }
        });
        return o;
    };
}($));
(function ($) {
    'use strict';
    function safe_add(x, y) {
        var lsw = (x & 0xFFFF) + (y & 0xFFFF), msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return (msw << 16) | (lsw & 0xFFFF);
    }
    function bit_rol(num, cnt) {
        return (num << cnt) | (num >>> (32 - cnt));
    }
    function md5_cmn(q, a, b, x, s, t) {
        return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
    }
    function md5_ff(a, b, c, d, x, s, t) {
        return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
    }
    function md5_gg(a, b, c, d, x, s, t) {
        return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
    }
    function md5_hh(a, b, c, d, x, s, t) {
        return md5_cmn(b ^ c ^ d, a, b, x, s, t);
    }
    function md5_ii(a, b, c, d, x, s, t) {
        return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
    }
    function binl_md5(x, len) {
        x[len >> 5] |= 0x80 << ((len) % 32);
        x[(((len + 64) >>> 9) << 4) + 14] = len;
        var i, olda, oldb, oldc, oldd, a = 1732584193, b = -271733879, c = -1732584194, d = 271733878;
        for (i = 0; i < x.length; i += 16) {
            olda = a;
            oldb = b;
            oldc = c;
            oldd = d;
            a = md5_ff(a, b, c, d, x[i], 7, -680876936);
            d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
            c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
            b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
            a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
            d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
            c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
            b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
            a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
            d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
            c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
            b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
            a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
            d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
            c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
            b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);
            a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
            d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
            c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
            b = md5_gg(b, c, d, a, x[i], 20, -373897302);
            a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
            d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
            c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
            b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
            a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
            d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
            c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
            b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
            a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
            d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
            c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
            b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);
            a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
            d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
            c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
            b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
            a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
            d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
            c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
            b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
            a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
            d = md5_hh(d, a, b, c, x[i], 11, -358537222);
            c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
            b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
            a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
            d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
            c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
            b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);
            a = md5_ii(a, b, c, d, x[i], 6, -198630844);
            d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
            c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
            b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
            a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
            d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
            c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
            b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
            a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
            d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
            c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
            b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
            a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
            d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
            c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
            b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);
            a = safe_add(a, olda);
            b = safe_add(b, oldb);
            c = safe_add(c, oldc);
            d = safe_add(d, oldd);
        }
        return [a, b, c, d];
    }
    function binl2rstr(input) {
        var i, output = '';
        for (i = 0; i < input.length * 32; i += 8) {
            output += String.fromCharCode((input[i >> 5] >>> (i % 32)) & 0xFF);
        }
        return output;
    }
    function rstr2binl(input) {
        var i, output = [];
        output[(input.length >> 2) - 1] = undefined;
        for (i = 0; i < output.length; i += 1) {
            output[i] = 0;
        }
        for (i = 0; i < input.length * 8; i += 8) {
            output[i >> 5] |= (input.charCodeAt(i / 8) & 0xFF) << (i % 32);
        }
        return output;
    }
    function rstr_md5(s) {
        return binl2rstr(binl_md5(rstr2binl(s), s.length * 8));
    }
    function rstr_hmac_md5(key, data) {
        var i, bkey = rstr2binl(key), ipad = [], opad = [], hash;
        ipad[15] = opad[15] = undefined;
        if (bkey.length > 16) {
            bkey = binl_md5(bkey, key.length * 8);
        }
        for (i = 0; i < 16; i += 1) {
            ipad[i] = bkey[i] ^ 0x36363636;
            opad[i] = bkey[i] ^ 0x5C5C5C5C;
        }
        hash = binl_md5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
        return binl2rstr(binl_md5(opad.concat(hash), 512 + 128));
    }
    function rstr2hex(input) {
        var hex_tab = '0123456789abcdef', output = '', x, i;
        for (i = 0; i < input.length; i += 1) {
            x = input.charCodeAt(i);
            output += hex_tab.charAt((x >>> 4) & 0x0F) +
                hex_tab.charAt(x & 0x0F);
        }
        return output;
    }
    function str2rstr_utf8(input) {
        return unescape(encodeURIComponent(input));
    }
    function raw_md5(s) {
        return rstr_md5(str2rstr_utf8(s));
    }
    function hex_md5(s) {
        return rstr2hex(raw_md5(s));
    }
    function raw_hmac_md5(k, d) {
        return rstr_hmac_md5(str2rstr_utf8(k), str2rstr_utf8(d));
    }
    function hex_hmac_md5(k, d) {
        return rstr2hex(raw_hmac_md5(k, d));
    }
    $.md5 = function (string, key, raw) {
        if (!key) {
            if (!raw) {
                return hex_md5(string);
            }
            else {
                return raw_md5(string);
            }
        }
        if (!raw) {
            return hex_hmac_md5(key, string);
        }
        else {
            return raw_hmac_md5(key, string);
        }
    };
}(typeof jQuery === 'function' ? jQuery : this));
var Cortex;
(function (Cortex) {
    var vCMS;
    (function (vCMS) {
        function StopvCMSVideo(e) {
            var ele = $(e.currentTarget);
            var iframe = $(ele).parents('.vCMSdialog').find('iframe').get(0);
            if (iframe != undefined) {
                var currentUrl = iframe.getAttribute('src');
                iframe.setAttribute('src', '');
                window.setTimeout(function () {
                    iframe.setAttribute('src', currentUrl);
                }, 50);
            }
        }
        function RenderError(errorMessage) {
            console.log(errorMessage);
        }
        vCMS.RenderError = RenderError;
        if (typeof (mscc) != 'undefined' && mscc && !mscc.hasConsent()) {
            mscc.on('consent', function () {
                if (localStorage) {
                    localStorage.setItem('vCMSScrollPos', document.body.scrollTop.toString());
                }
                window.location.reload(true);
            });
        }
        docReady(function () {
            if (localStorage) {
                var scrollPos = localStorage.getItem('vCMSScrollPos');
                if (scrollPos != null) {
                    window.scrollTo(0, parseInt(scrollPos));
                    localStorage.removeItem('vCMSScrollPos');
                }
            }
        });
        $(document).on('click', '.vCMSdialog [data-js-dialog-hide]', function (e) {
            StopvCMSVideo(e);
        });
        $(document).on('keydown', '.vCMSdialog [data-js-dialog-hide]', function (e) {
            var key = Cortex.Utilities.getKeyCode(e);
            if (key == $.ui.keyCode.ENTER) {
                StopvCMSVideo(e);
            }
        });
        $(document).keydown(function (e) {
            var key = Cortex.Utilities.getKeyCode(e);
            if (key == $.ui.keyCode.ESCAPE) {
                StopvCMSVideo(e);
            }
        });
        if (typeof (mwf) != 'undefined') {
            mwf.ComponentFactory.create([
                {
                    'component': mwf.Dialog,
                    'callback': function (dialogObject) {
                    }
                }
            ]);
        }
    })(vCMS = Cortex.vCMS || (Cortex.vCMS = {}));
})(Cortex || (Cortex = {}));
