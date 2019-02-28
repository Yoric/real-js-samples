function msccSetCookie(cookieProperties) {
    if (typeof(mscc) == 'undefined' || !mscc || mscc.hasConsent()) {      
        document.cookie = cookieProperties;
    }
    else if (mscc) {
        mscc.on('consent', function () {           
            document.cookie = cookieProperties;
        });
    }
}

function msccRunFunctionOnConsent(func) {
    if (typeof (mscc) == 'undefined' || !mscc || mscc.hasConsent()) {
        func();
    }
    else if (mscc) {
        mscc.on('consent', function () {
            func();
        });
    }
}

function getQueryValue(n, t) {
    var r = new RegExp("[\\?&]" + t + "=([^&#]*)", "gi"),
        i = r.exec(n);
    return i == null ? "" : decodeURIComponent(i[1].replace(/\+/g, " "))
}

function getStore(n) {
    var t = "ClosestStore.asmx",
        r, i;
    $(".store-geo[data-GeoStoreLocalServiceURL]").length && (t = $(".store-geo").first().attr("data-GeoStoreLocalServiceURL")), i = "POST", typeof n != "undefined" && (r = {
        latitude: JSON.stringify(n.coords.latitude),
        longitude: JSON.stringify(n.coords.longitude)
    }, t = t + "ClientGeo", i = "GET"), $.ajax({
        url: t,
        type: i,
        timeout: 5e3,
        data: r,
        contentType: "application/json; charset=UTF-8",
        dataType: "json",
        error: function() {
            $(".store-geo").remove(), $(".store-editorial").fadeIn(1e3)
        },
        success: function(n) {
            if (typeof n != "undefined" && typeof n.d != "undefined" && typeof n.d.City != "undefined" && n.d.City != "" && n.d.StoreUrl != "undefined" && n.d.StoreUrl != "") {
                var t = $(".store-geo:first").text();
                $(".store-geo a").html(t + " " + n.d.City), $(".store-geo a").attr("href", n.d.StoreUrl), $(".store-editorial").remove(), $(".store-geo").fadeIn(1e3)
            } else $(".store-geo").remove(), $(".store-editorial").fadeIn(1e3)
        }
    })
}

function GetFlashVersion() {
    try {
        return new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(/\D+/g, ",").match(/^,?(.+),?$/)[1]
    } catch (n) {
        try {
            if (navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin) return (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1]
        } catch (n) {}
    }
    return "0,0,0"
}

function sortAlpha(n, t) {
    return $(t).text() < $(n).text() ? 1 : -1
}

function updateLocalListLocation(n) {
    var t, i, r;
    $(n).length > 0 && (t = parseInt(($(window).width() - $(n).width()) * .5), i = $("html").css("direction") == "ltr" ? "margin-left" : "margin-right", $("#divLocaleDetail .r-mstLcpLangSites").css(i, t), r = $(".footerinner>div").eq(1).height() + $(".footerinner>div").eq(2).height() + 20, $("#divLocaleDetail").css("bottom", r + "px"))
}

function initLocale() {
    var r = $("meta[name='MscomContentLocale']").attr("content"),
        t = $(".localeLinkList>div:first-child li a[href*='" + r + "']"),
        i = t.text().split("-", 1),
        n;
    i != "" && $("#divLocaleSelector a").html("<span class='icon-globe'><\/span>" + i), t.remove(), $(".localeLinkList>div:first-child ul li").sort(sortAlpha).appendTo(".localeLinkList>div:first-child ul"), $(".localeLinkList>div:first-child ul li:empty").remove(), n = Math.ceil($(".localeLinkList>div li").length / 4), $(".localeLinkList>div:first-child ul li:gt(" + (3 * n - 1) + ")").appendTo($(".localeLinkList>div").eq(3).find("ul")), $(".localeLinkList>div:first-child ul li").slice(2 * n, 3 * n).appendTo($(".localeLinkList>div").eq(2).find("ul")), $(".localeLinkList>div:first-child ul li").slice(n, 2 * n + 1).appendTo($(".localeLinkList>div").eq(1).find("ul"))
}

function initLinkClick(n) {
    $(n).find("a").each(function() {
        var n = $(this).attr("href") ? $(this).attr("href") : "";
        $(this).hasClass("mscom-popup-link") || $(this).hasClass("mscom-popup-close") || $(this).hasClass("mscom-accordion-item-link") || $(this).hasClass("mscom-pivot-item-link") || n != "javascript:void(0)" && n != "#" && n != "" && $(this).addClass("epgLink")
    }), $(n).find("a.epgLink").unbind("click"), $(n).find("a.epgLink").each(function() {
        var t = $(this).attr("href"),
            y = new RegExp("[a-zA-Z]*.aspx"),
            forceNewWindow = $(this).data("forcenewwindow") || false,
            r, h, i, u, v;
        
        if (y.test(t) && !forceNewWindow) $(this).attr("target", "_self");
        else if (t.indexOf("http://") >= 0 || t.indexOf("https://") >= 0)
            if (t.indexOf(domain) >= 0 && t != "") {
                var f = t.substring(t.indexOf(domain) + domain.length),
                    e = "en-us",
                    o = "",
                    s = lans.split(",");
                for (i = 0; i < s.length; i++)
                    if (r = s[i], f.indexOf(r) >= 0) {
                        e = r, o = f.split(r)[1].split("/")[1];
                        break
                    }
                h = "/" + e + "/" + o + "/", f.indexOf(h) >= 0 ? $(this).attr("target", "_self") : $(this).attr("target", "_blank")
            } else $(this).attr("target", "_blank");
        else if (t.indexOf("mailto") >= 0 || t.startsWith("#")) $(this).attr("target", "_self");
        else {
            var c = "en-us",
                l = "",
                a = lans.split(",");
            for (i = 0; i < a.length; i++)
                if (u = a[i], t.indexOf(u) >= 0) {
                    c = u, l = t.split(u)[1].split("/")[1];
                    break
                }
            v = "/" + c + "/" + l + "/", t.indexOf(v) >= 0 ? $(this).attr("target", "_self") : $(this).attr("target", "_blank")
        }
    }), $(n).find("a.epgLink").hover(function() {
        return window.status = "", !0
    }, function() {
        return window.status = "", !0
    })
}

function DataFormat(n, t) {
    if (n && n != null && n.length == 8) {
        var i = n.substring(0, 4),
            r = n.substring(4, 6),
            u = n.substring(6, 8),
            f = new Date(i + "-" + r + "-" + u);
        return new Date(f).Format(t)
    }
    return null
}

function sortData(n, t) {
    return t.Date - n.Date
}

function getCTATexts(n, t) {
    for (var u = "", i = 0; i < n.length; i++) {
        var r = $.trim(n[i].CTAText),
            f = n[i].CTAUrl,
            e = n[i].CTAImage,
            o = n[i].target,
            s = n[i].CTAClass != null ? n[i].CTAClass : "",
            bgImage = e !== null ? 'background-image: url(http://www.microsoft.com' + e + ')' : '' ;
        u += r.toLowerCase() === "live chat" ? "<li><a class='epgChat' href='" + f + "' target='" + o + "' style='" + bgImage + "'>" + r + "<\/a><\/li>" : r.toLowerCase() === "request a call" ? "<li><a class='epgChat' href='" + f + "' target='" + o + "' style='background-image:url(http://www.microsoft.com" + e + ")'>" + r + "<\/a><\/li>" : "<li><a href='" + f + "' target='" + o + "' class='" + s + "' style='background-image:url(http://www.microsoft.com" + e + ")'>" + r + "<\/a><\/li>"
    }
    $(t).find("ul").append(u), initLinkClick(".BodyContainer"), $(".epgPsNextSteps .epgChat").click(function(n) {
        n.preventDefault(), $("#lpChatButton > a").trigger("click")
    }), $(".epgPsNextSteps .popupModalCLE").epgPopupModalCLEForm()
}

function LoadTakeAwarysData(n, t, i, r, u, callback) {
    $.ajax({
        url: "https://dynamicservice-prod.azurewebsites.net/api/feed?c={0}&l={1}&s={2}".format(u, n, i),
        type: "GET",
        success: function (n) {
            var f = n.DataLoad.Feed.FeedList,
                h, a, o, c, i, v, l, s, e;
            if (u.toLowerCase() == "epgsolution")
                for (h = !1, a = "ID-Generic", i = 0; i < f.length; i++) o = $.trim(f[i].Content.solution.solutionId.toLowerCase()), c = f[i].Content.solution.solutionTakeaways.takeawayCTAs.takeawayCTA, console.log("currentID: " + o), console.log("Key.toLowerCase(): " + t.toLowerCase()), console.log("currentID == Key.toLowerCase(): " + o == t.toLowerCase()), o === t.toLowerCase() && (h = !0, getCTATexts(c, r)), h || o !== a.toLowerCase() || getCTATexts(c, r);
            else
                for (i = 0; i < f.length; i++)
                    if (v = $.trim(f[i].Content.trend.trendShortName.toLowerCase()), l = "", v === t.toLowerCase()) {
                        for (s = f[i].Content.trend.trendTakeaways.takeawayCTAs.takeawayCTA, e = 0; e < s.length; e++) {
                            var y = $.trim(s[e].CTAText),
                                p = s[e].CTAUrl,
                                w = s[e].CTAImage;
                            l += "<li><a href='" + p + "' style='background-image:url(http://www.microsoft.com" + w + ")'>" + y + "<\/a><\/li>"
                        }
                        $(r).find("ul").append(l), initLinkClick(".BodyContainer")
                    }
            // If a callback has been supplied and it's a function, call it
            // Setting the timeout to 0 ensures it's not called until the thread has completed
            setTimeout(function () {
                if (callback && typeof callback === "function") {
                    callback();
                }
            }, 0)
            
        },
        error: function() {}
    })
}

// "More Information" and live "Chat"comes from a remote feed.  We must check and remove the CLE link
// after the data has returned
function checkLocaleForCLE() {
    var locale = document.body.dataset.locale,
        cleLink = $(".popupModalCLE"),
        epgChat = $(".epgChat");

    if (locale !== "en-US") {
        cleLink.remove();
        epgChat.remove();
    }
}


function epgOpenModal(n) {
    $("#epgModal > .epgModalBorderProtector").css({
        "line-height": $(window).height() - 100 + "px"
    }), epgModalCreated === !1 && createEPGModal();
    var t = "<div class='clearFixVert'>Vertical Clear-Fix<\/div>";
    $("#epgModal > .epgModalBorderProtector").html(n + t), $("#epgModal").fadeIn(function() {
        var n = $("#epgModal > .epgModalBorderProtector").children().first();
        n.on("click", function(n) {
            n.stopPropagation()
        });
        n.resize(function() {
            checkCloseButtonSize(n)
        }), checkCloseButtonSize(n), $("#epgModal .epgModalCloseButton").fadeIn(), $(document).keyup(checkESCKey)
    })
}

function checkCloseButtonSize(n) {
    var t = $(window).width(),
        r = $(window).height(),
        i = !1,
        u = setInterval(function() {
            var f, o, e;
            n.outerWidth() > 150 && n.outerHeight() > 150 && (n.outerHeight() > $(".epgModalBorderProtector").outerHeight() ? (f = $(".epgModalBorderProtector").outerHeight(), o = !0) : (f = n.outerHeight(), o = !1), e = n.outerWidth() > $(".epgModalBorderProtector").outerWidth() ? $(".epgModalBorderProtector").outerWidth() : n.outerWidth(), n.outerWidth() >= t - 175 && (i = !0, widthLimited = n.outerWidth() >= t - 90 ? !0 : o === !0 && n.outerWidth() >= t - 105 ? !0 : !1), n.outerHeight() >= r - 175 && (i = !0), i === !1 ? positionCloseButton(f, e) : positionSmallCloseButton(f, e), clearInterval(u))
        }, 10)
}

function positionCloseButton(n, t) {
    var i = t / 2 + 25,
        r = -50 - n / 2;
    $("#epgModal .epgModalCloseButton").css({
        margin: r + "px 0 0 " + i + "px"
    }), $("#epgModal .epgModalCloseButton").removeClass("epgModalSmallCloseButton")
}

function positionSmallCloseButton(n, t) {
    var i = 10,
        r = 40,
        u, f;
    widthLimited === !0 && (i = -23, r = 43), u = t / 2 + i, f = 0 - n / 2 - r, $("#epgModal .epgModalCloseButton").css({
        margin: f + "px 0 0 " + u + "px"
    }), $("#epgModal .epgModalCloseButton").addClass("epgModalSmallCloseButton")
}

function checkESCKey(n) {
    n.keyCode == 27 && epgCloseModal()
}

function epgCloseModal() {
    typeof window.popupVideo != "undefined" && (window.popupVideo.dispose(), window.popupVideo = undefined), $("#epgModal > .epgModalBorderProtector").html(""), $("#epgModal .epgModalCloseButton").css({
        margin: "-25px 0 0 -24px",
        display: "none"
    }), $("#epgModal").fadeOut(), $(document).unbind("keyup", checkESCKey)
}

function createEPGModal() {
    if ($("#epgModal").length === 0) {
        var n = "<div id='epgModal'><div class='epgModalBG'><\/div><div class='epgModalCloseButton'><img src='//c.s-microsoft.com/CMSImages/citynext_epgModalClose.png?version=a492805b-9c96-6066-7d4d-fe91edcbbeb8' /><\/div><div class='epgModalBorderProtector'><\/div><\/div>";
        $("body").append(n), epgModalCreated = !0
    }
}

function loadCustomerStory(n, t, i, r, u, f) {
    var e = {
        contentType: "epgCustomerEvidence",
        local: "en-us",
        siteName: "education",
        industry: "Education",
        readMore: "Read More",
        watchVideo: "Watch Video",
        defaultCustomerImage: "http://c.s-microsoft.com/CMSImages/CustomerStoryDefaultImage.png?version=9fa6f3ef-2772-07c5-0b5c-ea2b56579f8d"
    };
    $.extend(e, u), $.ajax({
        type: "GET",
        url: "https://dynamicservice-prod.azurewebsites.net/api/feed?c=" + e.contentType + "&l=" + e.local + "&s=" + e.siteName + "&q.indu=" + e.industry + "",
        dataType: "json",
        success: function(u) {
            var o, l, y, c;
            if (u.DataLoad.hasOwnProperty("Feed")) {
                for (o = "", l = 0; l < u.DataLoad.Feed.FeedList.length; l++) {
                    var a = u.DataLoad.Feed.FeedList[l].Content.CustomerEvidence,
                        b = a.Title,
                        v = a.ExecutiveSummary,
                        p = a.Assets.Asset,
                        w = a.SyndicationUrl,
                        h = "",
                        s = "";
                    for (v.length > 62 && (v = v.substring(0, 62) + "..."), y = 0; y < p.length; y++) c = p[y], c.Type === "Logo" && (s = c.Url, s != null && s.indexOf("http://") == -1 && s.indexOf("https://") == -1 && (s = "http://www.microsoft.com" + s)), c.Type === "Video" && (h = c.Url);
                    o += "<li class='item'>", o += "<a class='topLink mscom-popup-link' href='" + (h == "" ? w : h) + "' target='_blank'>", h != "" && (o += "<span class='playBtn'><\/span>"), o += "<img src='" + (s != "" && s != null ? s : e.defaultCustomerImage) + "'><\/img>", o += "<\/a>", o += "<div class='details'><h4 class='title'>" + b + "<\/h4><p>" + v + "<\/p>", (h == "" ? e.readMore : e.watchVideo) != "" && (o += "<a class='carouselCTA' href='" + (h == "" ? w : h) + "' target='_blank'>" + (h == "" ? e.readMore : e.watchVideo) + "<\/a><\/div>"), o += "<\/li>"
                }
                $(n).find(".innerWrap").find(".container").find("ul").append(o), $(n).find(".innerWrap").find(".container").find("ul").find("img").error(function() {
                    $(this).attr("src", e.defaultCustomerImage)
                }), sliderType2(n, t, i, r, f)
            }
        }
    })
}

function sliderType(n, t, i, r, u, f) {
    typeof f == "undefined" && (f = !0), typeof u != "undefined" ? loadCustomerStory(n, t, i, r, u, f) : sliderType2(n, t, i, r, f)
}

function sliderType2(n, t, i, r, u) {
    getSortList(n, ".innerWrap", u), resetSliderBlockWidth(n, t, i, r);
    var f = parseInt($(n).find(".container").attr("data-page"));
    r ? f === 1 ? ($(n).find(".rightArrow").addClass("max").removeClass("ableClick"), $(n).find(".leftArrow").addClass("max").removeClass("ableClick")) : ($(n).find(".rightArrow").addClass("ableClick").removeClass("max"), $(n).find(".leftArrow").addClass("ableClick").removeClass("max")) : f === 1 ? ($(n).find(".rightArrow").addClass("max").removeClass("ableClick"), $(n).find(".leftArrow").addClass("max").removeClass("ableClick")) : ($(n).find(".rightArrow").addClass("ableClick").removeClass("max"), $(n).find(".leftArrow").addClass("max").removeClass("ableClick")), $(n).find(".rightArrow").click(function() {
        var f = parseInt($(n).find(".container").find(".item").css("marginLeft").replace("px", "")) + parseInt($(n).find(".container").find(".item").css("marginRight").replace("px", "")),
            i = $(n).find(".item").outerWidth() + f,
            t = $(this).parent().children(".innerWrap").children(".container").attr("data-index"),
            u = $(this).parent().children(".innerWrap").children(".container").attr("data-page");
        r ? $(this).parent().children(".innerWrap").children(".container").is(":animated") || ($("html").css("direction") == "ltr" ? (t == u - 1 && ($(this).parent().children(".innerWrap").children(".container").css("marginLeft", windowWidth < 540 ? 0 : "0px"), t = windowWidth < 540 ? 0 : 0), $(this).parent().children(".innerWrap").children(".container").animate({
            marginLeft: "-=" + i + "px"
        }, "slow", function() {
            t++, $(this).attr("data-index", t)
        })) : (t == u - 1 && ($(this).parent().children(".innerWrap").children(".container").css("marginRight", windowWidth < 540 ? 0 : "0px"), t = windowWidth < 540 ? 0 : 0), $(this).parent().children(".innerWrap").children(".container").animate({
            marginRight: "-=" + i + "px"
        }, "slow", function() {
            t++, $(this).attr("data-index", t)
        }))) : $(this).hasClass("ableClick") && ($(this).parent().children(".innerWrap").children(".container").is(":animated") || ($("html").css("direction") == "ltr" ? $(this).parent().children(".innerWrap").children(".container").animate({
            marginLeft: "-=" + i + "px"
        }, "slow") : $(this).parent().children(".innerWrap").children(".container").animate({
            marginRight: "-=" + i + "px"
        }, "slow"), t++, $(this).parent().children(".innerWrap").children(".container").attr("data-index", t)), $(n).find(".leftArrow").removeClass("max ableClick"), $(this).removeClass("max ableClick"), t == 1 ? $(n).find(".leftArrow").removeClass("ableClick").addClass("max") : $(n).find(".leftArrow").removeClass("max").addClass("ableClick"), t == u ? $(this).removeClass("ableClick").addClass("max") : $(this).removeClass("max").addClass("ableClick"))
    }), $(n).find(".leftArrow").click(function() {
        var f = parseInt($(n).find(".container").find(".item").css("marginLeft").replace("px", "")) + parseInt($(n).find(".container").find(".item").css("marginRight").replace("px", "")),
            i = $(n).find(".item").outerWidth() + f,
            t = $(this).parent().children(".innerWrap").children(".container").attr("data-index"),
            u = $(this).parent().children(".innerWrap").children(".container").attr("data-page");
        r ? $(this).parent().children(".innerWrap").children(".container").is(":animated") || ($("html").css("direction") == "ltr" ? (t == 0 && ($(this).parent().children(".innerWrap").children(".container").css("marginLeft", -(i * (u - 1)) + "px"), t = u - 1), $(this).parent().children(".innerWrap").children(".container").animate({
            marginLeft: "+=" + i + "px"
        }, "slow", function() {
            t--, $(this).attr("data-index", t)
        })) : (t == 0 && ($(this).parent().children(".innerWrap").children(".container").css("marginRight", -(i * (u - 1)) + "px"), t = u - 1), $(this).parent().children(".innerWrap").children(".container").animate({
            marginRight: "+=" + i + "px"
        }, "slow", function() {
            t--, $(this).attr("data-index", t)
        }))) : $(this).hasClass("ableClick") && ($(this).parent().children(".innerWrap").children(".container").is(":animated") || ($("html").css("direction") == "ltr" ? $(this).parent().children(".innerWrap").children(".container").animate({
            marginLeft: "+=" + i + "px"
        }, "slow") : $(this).parent().children(".innerWrap").children(".container").animate({
            marginRight: "+=" + i + "px"
        }, "slow"), t--, $(this).parent().children(".innerWrap").children(".container").attr("data-index", t)), $(n).find(".rightArrow").removeClass("max ableClick"), $(this).removeClass("max ableClick"), t == 1 ? $(this).removeClass("ableClick").addClass("max") : $(this).removeClass("max").addClass("ableClick"), t == u ? $(n).find(".rightArrow").removeClass("ableClick").addClass("max") : $(n).find(".rightArrow").removeClass("max").addClass("ableClick"))
    })
}

function checkDisplayArrow(n, t, i) {
    t === 1 && (t === i ? ($(n).find(".rightArrow").addClass("max").removeClass("ableClick"), $(n).find(".leftArrow").addClass("max").removeClass("ableClick")) : t < i && ($(n).find(".rightArrow").hasClass("ableClick") || $(n).find(".leftArrow").hasClass("ableClick") || ($(n).find(".rightArrow").addClass("ableClick").removeClass("max"), $(n).find(".leftArrow").addClass("max").removeClass("ableClick"))))
}

function resetSliderBlockWidth(n, t, i, r) {
    var l = i,
        o = t,
        v = $(n).width(),
        s = parseInt($(n).find(".container").find(".item").eq(0).css("marginRight").replace("px", "")),
        p, w, b, e, c, a, y;
    r && windowWidth > 540 ? ($(n).find(".container ul").find(".item").eq(1).hasClass("lastClone") || (p = $(n).find(".container ul").children(".item").slice(0, t - 1).clone().addClass("firstClone"), w = $(n).find(".container ul").find(".item").last().clone().addClass("lastClone")), $(n).find(".container ul").find(".item").eq(0).before(w), $(n).find(".container ul").append(p)) : r && windowWidth <= 540 && ($(n).find(".container ul").find(".item").eq(1).hasClass("lastClone") || (b = $(n).find(".container ul").children(".item").first().clone().addClass("firstClone")), $(n).find(".container ul").append(b)), $("html").css("direction") == "ltr" ? (e = v - $(n).find(".innerWrap").css("marginLeft").replace("px", "") * 2, c = parseInt($(n).find(".container").find(".item").css("marginLeft").replace("px", "")) + s) : (e = v - $(n).find(".innerWrap").css("marginRight").replace("px", "") * 2, c = parseInt($(n).find(".container").find(".item").css("marginRight").replace("px", "")) + s);
    var u = 0,
        h = 0,
        f = 1;
    $(n).find(".container").attr("data-index", "1"), o == 1 && (f = $(n).find(".item").length, $(n).find(".container").attr("data-page", f), l == !0 ? (u = e - s, h = (u + s) * $(n).find(".innerWrap").find(".item").length) : (u = e - c, h = (u + c) * $(n).find(".innerWrap").find(".item").length)), windowWidth >= 931 && o >= 2 ? (f = $(n).find(".item").length - o + 1, $(n).find(".item").length < o && (f = 1), $(n).find(".container").attr("data-page", f), l == !0 ? (u = (e - s) / o, h = (u + s) * $(n).find(".innerWrap").find(".item").length) : (u = e / o - c, h = (u + c) * $(n).find(".innerWrap").find(".item").length)) : windowWidth < 931 && o >= 2 && windowWidth >= 724 ? o > 2 ? (f = r ? $(n).find(".item").length - o + 1 : $(n).find(".item").length < o ? 1 : $(n).find(".item").length - 2, $(n).find(".container").attr("data-page", f), l == !0 ? (u = (e - s) / 3, h = (u + s) * $(n).find(".innerWrap").find(".item").length) : (u = e / 3 - c, h = (u + c) * $(n).find(".innerWrap").find(".item").length)) : (f = r ? $(n).find(".item").length - o + 1 : $(n).find(".item").length < o ? 1 : $(n).find(".item").length - 1, $(n).find(".container").attr("data-page", f), l == !0 ? (u = (e - s) / 2, h = (u + s) * $(n).find(".innerWrap").find(".item").length) : (u = e / 2 - c, h = (u + c) * $(n).find(".innerWrap").find(".item").length)) : windowWidth < 724 && o >= 2 && windowWidth >= 540 ? (f = r ? $(n).find(".item").length - o + 1 : $(n).find(".item").length < o ? 1 : $(n).find(".item").length - 1, $(n).find(".container").attr("data-page", f), l == !0 ? (u = (e - s) / 2, h = (u + s) * $(n).find(".innerWrap").find(".item").length) : (u = e / 2 - c, h = (u + c) * $(n).find(".innerWrap").find(".item").length)) : windowWidth < 540 && (f = $(n).find(".item").length, $(n).find(".container").attr("data-index") == 0 && $(n).find(".container").attr("data-index", "1"), $(n).find(".container").attr("data-page", f), l == !0 ? (u = e - s, h = (u + s) * $(n).find(".innerWrap").find(".item").length) : (u = e - c, h = (u + c) * $(n).find(".innerWrap").find(".item").length)), $(n + " .innerWrap").width(e), $(n).find(".container").width(h), $(n).find(".container").find(".item").width(u), $(n).find(".container").find(".item").css("max-width", u), a = ($(n).find(".outerWrap>.innerWrap").height() - $(n).find(".leftArrow >.arrow").height()) / 2, $(n).find(".leftArrow").find(".arrow").css("marginTop", a), $(n).find(".rightArrow").find(".arrow").css("marginTop", a);
    var d = parseInt($(n).find(".container").find(".item").css("marginLeft").replace("px", "")),
        g = parseInt($(n).find(".container").find(".item").css("marginRight").replace("px", "")),
        k = d + g;
    r && $("html").css("direction") == "ltr" ? $(n).find(".container").css("marginLeft", -(u + k)) : $(n).find(".container").css("marginRight", -(u + k)), y = parseInt($(n).find(".container").attr("data-page")), $(window).resize(function() {
        var c, w, b, k, i, p;
        windowWidth = $(window).width(), c = $(n).find(".container").attr("data-index"), v = $(n).width(), s = parseInt($(n).find(".container").find(".item").eq(0).css("marginRight").replace("px", "")), r && windowWidth > 540 ? ($(n).find(".container ul").find(".item.firstClone").remove(), $(n).find(".container ul").find(".item.lastClone").remove(), $(n).find(".container ul").find(".item").eq(1).hasClass("lastClone") || (w = $(n).find(".container ul").children(".item").slice(0, t - 1).clone().addClass("firstClone"), b = $(n).find(".container ul").children(".item").last().clone().addClass("lastClone")), $(n).find(".container ul").find(".item").eq(0).before(b), $(n).find(".container ul").append(w)) : r && windowWidth <= 540 && ($(n).find(".container ul").find(".item.firstClone").remove(), $(n).find(".container ul").find(".item.lastClone").remove(), $(n).find(".container ul").find(".item").eq(1).hasClass("lastClone") || (k = $(n).find(".container ul").find(".item").first().clone().addClass("firstClone")), $(n).find(".container ul").append(k)), $("html").css("direction") == "ltr" ? (e = v - $(n).find(".innerWrap").css("marginLeft").replace("px", "") * 2, i = parseInt($(n).find(".container").find(".item").css("marginLeft").replace("px", "")) + s) : (e = v - $(n).find(".innerWrap").css("marginRight").replace("px", "") * 2, i = parseInt($(n).find(".container").find(".item").css("marginRight").replace("px", "")) + s), o == 1 && (f = $(n).find(".item").length, $(n).find(".container").attr("data-page", f), l == !0 ? (u = e - s, h = (u + s) * $(n).find(".innerWrap").find(".item").length) : (u = e - i, h = (u + i) * $(n).find(".innerWrap").find(".item").length)), windowWidth >= 931 && o >= 2 ? (l == !0 ? (u = (e - s) / o, h = (u + s) * $(n).find(".innerWrap").find(".item").length) : (u = e / o - i, h = (u + i) * $(n).find(".innerWrap").find(".item").length), f = $(n).find(".item").length - o + 1, $(n).find(".item").length < o && (f = 1), $(n).find(".container").attr("data-index") > f && $(n).find(".container").attr("data-index", f), $(n).find(".container").attr("data-page", f), checkDisplayArrow(n, y, f)) : windowWidth < 931 && o >= 2 && windowWidth >= 724 ? o > 2 ? (f = r ? $(n).find(".item").length - o + 1 : $(n).find(".item").length < o ? 1 : $(n).find(".item").length - 2, $(n).find(".container").attr("data-index") > f && $(n).find(".container").attr("data-index", f), $(n).find(".container").attr("data-page", f), l == !0 ? (u = (e - s) / 3, h = (u + s) * $(n).find(".innerWrap").find(".item").length) : (u = e / 3 - i, h = (u + i) * $(n).find(".innerWrap").find(".item").length), checkDisplayArrow(n, y, f)) : (f = r ? $(n).find(".item").length - o + 1 : $(n).find(".item").length - 1, $(n).find(".container").attr("data-index") > f && $(n).find(".container").attr("data-index", f), $(n).find(".container").attr("data-page", f), l == !0 ? (u = (e - s) / 2, h = (u + s) * $(n).find(".innerWrap").find(".item").length) : (u = e / 2 - i, h = (u + i) * $(n).find(".innerWrap").find(".item").length)) : windowWidth < 724 && o >= 2 && windowWidth >= 540 ? (f = r ? $(n).find(".item").length - o + 1 : $(n).find(".item").length < o ? 1 : $(n).find(".item").length - 1, $(n).find(".container").attr("data-index") > f && $(n).find(".container").attr("data-index", f), $(n).find(".container").attr("data-page", f), l == !0 ? (u = (e - s) / 2, h = (u + s) * $(n).find(".innerWrap").find(".item").length) : (u = e / 2 - i, h = (u + i) * $(n).find(".innerWrap").find(".item").length), checkDisplayArrow(n, y, f)) : windowWidth < 540 && (f = $(n).find(".item").length, $(n).find(".container").attr("data-index") == 0 && $(n).find(".container").attr("data-index", "1"), $(n).find(".container").attr("data-page", f), l == !0 ? (u = e - s, h = (u + s) * $(n).find(".innerWrap").find(".item").length) : (u = e - i, h = (u + i) * $(n).find(".innerWrap").find(".item").length), checkDisplayArrow(n, y, f)), $(n + " .innerWrap").width(e), $(n).find(".container").width(h), $(n).find(".container").find(".item").width(u), $(n).find(".container").find(".item").css("max-width", u), a = ($(n).find(".outerWrap>.innerWrap").height() - $(n).find(".leftArrow >.arrow").height()) / 2, $(n).find(".leftArrow").find(".arrow").css("marginTop", a), $(n).find(".rightArrow").find(".arrow").css("marginTop", a), i = parseInt($(n).find(".container").find(".item").css("marginLeft").replace("px", "")) + parseInt($(n).find(".container").find(".item").css("marginRight").replace("px", "")), r ? $("html").css("direction") == "ltr" ? $(n).find(".innerWrap").find(".container").css("marginLeft", -(u + i) * c) : $(n).find(".innerWrap").find(".container").css("marginRight", -(u + i) * c) : (p = $(n).find(".container").attr("data-index"), $("html").css("direction") == "ltr" ? $(n).find(".innerWrap").find(".container").css("marginLeft", -(u + i) * (p - 1)) : $(n).find(".innerWrap").find(".container").css("marginRight", -(u + i) * (p - 1)))
    })
}

function loadSliderData(n, t) {
    function l() {
        $(n).find(".sliderStatus>div>div").removeClass("statusPointCur").addClass("statusPoint").eq(r).addClass("statusPointCur").removeClass("statusPoint");
        var l = $(n).find(".owl-wrapper>li").eq(r).attr("index"),
            a = parseInt(l),
            v = c - parseInt(l) - 1,
            t = parseInt(l),
            e = parseInt(l),
            o;
        f > 0 ? (o = "-=" + i + "px", $(n).find(".owl-wrapper>li").eq(h).after($(n).find(".owl-wrapper>li").eq(s))) : f == 0 ? (o = "-=" + i + "px", $(n).find(".owl-wrapper>li").eq(c - 1).after($(n).find(".owl-wrapper>li").eq(0).clone())) : (o = "+=" + i + "px", $(n).find(".owl-wrapper>li").eq(h).before($(n).find(".owl-wrapper>li").eq(s))), u.is(":animated") || ($("html").css("direction") == "ltr" ? u.animate({
            marginLeft: o
        }, 1e3, function() {
            var r, o, s;
            for (f == 0 && $(n).find(".owl-wrapper>li").eq(0).detach(), r = 0; r < a; r++) o = $(n).find(".owl-wrapper>li[index=" + t + "]"), t--, s = $(n).find(".owl-wrapper>li[index=" + t + "]"), o.before(s);
            for (r = 0; r < v; r++) o = $(n).find(".owl-wrapper>li[index=" + e + "]"), e++, s = $(n).find(".owl-wrapper>li[index=" + e + "]"), o.after(s);
            u.css("marginLeft", -a * i + "px")
        }) : u.animate({
            marginRight: o
        }, 1e3, function() {
            var r, o, s;
            for (f == 0 && $(n).find(".owl-wrapper>li").eq(0).detach(), r = 0; r < a; r++) o = $(n).find(".owl-wrapper>li[index=" + t + "]"), t--, s = $(n).find(".owl-wrapper>li[index=" + t + "]"), o.before(s);
            for (r = 0; r < v; r++) o = $(n).find(".owl-wrapper>li[index=" + e + "]"), e++, s = $(n).find(".owl-wrapper>li[index=" + e + "]"), o.after(s);
            u.css("marginRight", -a * i + "px")
        }))
    }
    var e = $(n).find(".owl-wrapper").find(".owl-item").length,
        o;
    for ($(n).find(".sliderStatus > div").children().remove(), $(n).find(".sliderStatus > div").append("<div class='statusPointCur'><\/div>"), o = 0; o < e - 1; o++) $(n).find(".sliderStatus > div").append("<div class='statusPoint'><\/div>");
    $(n).find(".owl-wrapper").find(".owl-item").each(function(n) {
        $(this).attr("index", n)
    });
    var u = $(n).find(".owl-wrapper"),
        c = e,
        r = 0,
        f = 0,
        s = 1,
        h = 0,
        i = $(n).children("div").width();
    $(n).find(".owl-item").css("width", i + "px"), $(n).find(".owl-wrappers").css("width", i + "px"), $(n).find(".owl-wrapper").css("width", (e + 1) * i + "px"), getSortList(n, ".owl-wrappers", t), $(n).find(".sliderStatus>div>div").each(function(n) {
        $(this).click(function() {
            s = n, h = r, u.is(":animated") || (r == n ? (f = n - r, r = n) : (f = n - r, r = n, l()))
        })
    }), $(window).resize(function() {
        i = $(n).children(".owl-wrapper-outer").width(), $(n).find(".owl-wrappers").css("width", i + "px"), $(n).find(".owl-wrapper").css("width", (e + 1) * i + "px"), $(n).find(".owl-item").css("width", i + "px"), u.css("margin-left", -$(n).find(".sliderStatus>div>div.statusPointCur").index() * i + "px")
    })
}

function getSortList(n, t, i) {
    var u, f, e, r, o;
    if (i) {
        for (u = $(n).find(t).find("ul").eq(0).children(), f = [], r = 0; r < u.length; r++) f.push(u[r]);
        for (e = SortList(f), $(n).find(t).find("ul").eq(0).children().remove(), r = 0; r < e.length; r++) o = e[r], $(o).attr("index", r), $(n).find(t).find("ul").eq(0).append(o)
    }
    $(n).find(t).find("a.mscom-popup-link").popuVideoModalWindow()
}

function SortList(n) {
    var r = [],
        i, t;
    if (n && n.length > 0)
        for (i = randomItem(n.length), t = 0; t < i.length; t++) r.push(n[i[t]]);
    return r
}

function randomItem(n) {
    for (var t = [], i; t.length < n;) i = Math.floor(Math.random() * n), t.indexOf(i) == -1 && t.push(i);
    return t
}

function SetSliderStyle(n) {
    var t = !1,
        o = $(window).innerWidth(),
        f, e;
    o <= 300 && (t = !0);
    var i = 20,
        r = parseInt($(n).find(".rightArrow").css("right")),
        u = parseInt($(n).find(".rightArrow").css("width"));
    $(n).find(".controls").is(":visible") && (f = $(n).find(".controls").find(".statusPoint").length, e = $(n).find(".controls").find(".statusPoint").outerWidth(!0), i = e * f, $(n).find(".controls").css({
        width: i + "px",
        right: r + u + (t ? 0 : 6) + "px",
    }));

    if (!$(n).find("pCarousel")) {
        $(n).find(".leftArrow").css("right", r + u + i + (t ? 0 : 20) + "px")
    }
}

function CreateControls(n) {
    var i = $(n).find(".innerWrap").find(".item").length,
        t;
    for ($(n).find(".controls").append("<div class='statusPoint selectStatusPoint' index='1'><\/div>"), t = 2; t < i + 1; t++) $(n).find(".controls").append("<div class='statusPoint' index='" + t + "'><\/div>");
    $(n).find(".controls").find(".statusPoint").each(function() {
        $(this).click(function() {
            $(this).addClass("").addClass("selectStatusPoint").siblings().removeClass("selectStatusPoint");
            var r = $(n).find(".innerWrap").find(".item").width(),
                u = $(n).find(".innerWrap").find(".item.lastClone").length,
                t = parseInt($(this).attr("index")),
                i = r * (t + u - 1);
            $(n).find(".container").attr("data-index", t), $(n).find(".container").is(":animated") || ($("html").css("direction") == "ltr" ? $(n).find(".container").animate({
                marginLeft: "-" + i + "px"
            }, "slow", function() {
                $(this).attr("data-index", t)
            }) : $(this).parent().children(".innerWrap").children(".container").animate({
                marginRight: "-" + i + "px"
            }, "slow", function() {
                $(this).attr("data-index", t)
            }))
        })
    })
}

function SetControls(n) {
    if ($(n).find(".controls").length != 0) {
        var t = $(n).find(".container").attr("data-index");
        $(n).find(".controls").find(".statusPoint:[index=" + t + "]").addClass("selectStatusPoint").siblings().removeClass("selectStatusPoint")
    }
}

function touchSlider(n, t) {
    GetSortList(n, ".innerWrap"), toutchResetSliderBlockWidth(n), $(n).find(".rightArrow").click(function() {
        var i = $(n).find(".item").outerWidth(),
            t = $(this).parent().children(".innerWrap").children(".container").attr("data-index"),
            r = $(this).parent().children(".innerWrap").children(".container").attr("data-page");
        $(this).parent().children(".innerWrap").children(".container").is(":animated") || ($("html").css("direction") == "ltr" ? $(this).parent().children(".innerWrap").children(".container").animate({
            marginLeft: "-=" + i + "px"
        }, "slow", function() {
            t++, $(this).attr("data-index", t), t == r - 1 && ($(this).css("marginLeft", -i + "px"), t = 1, $(this).attr("data-index", t)), SetControls(n)
        }) : $(this).parent().children(".innerWrap").children(".container").animate({
            marginRight: "-=" + i + "px"
        }, "slow", function() {
            t++, $(this).attr("data-index", t), t == r - 1 && ($(this).css("marginLeft", -i + "px"), t = 1, $(this).attr("data-index", t)), SetControls(n)
        }))
    }), $(n).find(".leftArrow").click(function() {
        var i = $(n).find(".item").outerWidth(),
            t = $(this).parent().children(".innerWrap").children(".container").attr("data-index"),
            r = $(this).parent().children(".innerWrap").children(".container").attr("data-page");
        $(this).parent().children(".innerWrap").children(".container").is(":animated") || ($("html").css("direction") == "ltr" ? $(this).parent().children(".innerWrap").children(".container").animate({
            marginLeft: "+=" + i + "px"
        }, "slow", function() {
            t--, $(this).attr("data-index", t), t <= 0 && ($(this).css("marginLeft", -(i * (r - 2)) + "px"), t = r - 2, $(this).attr("data-index", t)), SetControls(n)
        }) : $(this).parent().children(".innerWrap").children(".container").animate({
            marginRight: "+=" + i + "px"
        }, "slow", function() {
            t--, $(this).attr("data-index", t), t <= 0 && ($(this).css("marginLeft", -(i * (r - 2)) + "px"), t = r - 2, $(this).attr("data-index", t)), SetControls(n)
        }))
    }), t && ($(n).find(".container").bind("swipeleft", function() {
        var r = $(n).find(".item").outerWidth(),
            i = $(this).attr("data-index"),
            u = $(this).attr("data-page");
        $(this).is(":animated") || ($("html").css("direction") == "ltr" ? $(this).animate({
            marginLeft: "-=" + r + "px"
        }, "slow", function() {
            i++, $(this).attr("data-index", i), i == u - 1 && ($(this).parent().children(".container").css("marginLeft", -r + "px"), i = 1, $(this).attr("data-index", i)), SetControls(n)
        }) : $(this).animate({
            marginLeft: "-=" + r + "px"
        }, "slow", function() {
            i++, $(this).attr("data-index", i), i == u - 1 && ($(this).parent().children(".container").css("marginRight", -r + "px"), i = 1, $(this).attr("data-index", i)), SetControls(n)
        }))
    }), $(n).find(".container").bind("swiperight", function() {
        var r = $(n).find(".item").outerWidth(),
            i = $(this).attr("data-index"),
            u = $(this).attr("data-page");
        $(this).is(":animated") || ($("html").css("direction") == "ltr" ? $(this).animate({
            marginLeft: "+=" + r + "px"
        }, "slow", function() {
            i--, $(this).attr("data-index", i), i <= 0 && ($(this).parent().children(".container").css("marginLeft", -(r * (u - 2)) + "px"), i = u - 2, $(this).attr("data-index", i)), SetControls(n)
        }) : $(this).animate({
            marginLeft: "+=" + r + "px"
        }, "slow", function() {
            i--, $(this).attr("data-index", i), i <= 0 && ($(this).parent().children(".container").css("marginRight", -(r * (u - 2)) + "px"), i = u - 2, $(this).attr("data-index", i)), SetControls(n)
        }))
    }))
}

function toutchResetSliderBlockWidth(n) {
    var t = $(n).width(),
        i = t - $(n).find(".innerWrap").css("marginLeft").replace("px", "") * 2,
        e, o, f, r, u;
    $(n).find(".container ul").find(".item").eq(0).hasClass("lastClone") || (e = $(n).find(".container ul").find(".item").eq(0).clone().addClass("firstClone").removeClass("owl-item"), o = $(n).find(".container ul").find(".item").last().clone().addClass("lastClone").removeClass("owl-item")), $(n).find(".container ul").find(".item").eq(0).before(o), $(n).find(".container ul").append(e), f = $(n).find(".container ul").find(".item").length, $(n).find(".container").attr("data-index", "1"), $(n).find(".container").attr("data-page", f), r = t * f, $(n + " .innerWrap").width(i), $(n).find(".container").width(r), $(n).find(".container").find(".item").width(i), u = $(n).find(".item").outerWidth(), $(n).find(".container").css("marginLeft", -u + "px"), $(window).resize(function() {
        touchWindowWidth = $(window).width(), t = $(n).width(), i = t - $(n).find(".innerWrap").css("marginLeft").replace("px", "") * 2, r = t * $(n).find(".innerWrap").find(".item").length, $(n + " .innerWrap").width(i), $(n).find(".container").width(r), $(n).find(".container").find(".item").width(i);
        var f = $(n).find(".innerWrap").children(".container").attr("data-index");
        u = $(n).find(".container").find(".item").outerWidth(), $(n).find(".innerWrap").children(".container").css("marginLeft", -u * (f - 1) + "px")
    })
}

function srcoll(n) {
    var i = $(n).find(".item").outerWidth(),
        t = $(n).find(".outerWrap").children(".innerWrap").children(".container").attr("data-index"),
        r = $(n).find(".outerWrap").children(".innerWrap").children(".container").attr("data-page");
    $(n).find(".outerWrap").children(".innerWrap").children(".container").is(":animated") || ($("html").css("direction") == "ltr" ? $(n).find(".outerWrap").children(".innerWrap").children(".container").animate({
        marginLeft: "-=" + i + "px"
    }, "slow", function() {
        t++, $(this).attr("data-index", t), t == r - 1 && ($(this).parent().children(".container").css("marginLeft", -i + "px"), t = 1, $(this).attr("data-index", t)), SetControls(n)
    }) : $(n).find(".outerWrap").children(".innerWrap").children(".container").animate({
        marginLeft: "-=" + i + "px"
    }, "slow", function() {
        t++, $(this).attr("data-index", t), t == r - 1 && ($(this).parent().children(".container").css("marginRight", -i + "px"), t = 1, $(this).attr("data-index", t)), SetControls(n)
    }))
}

function dynamicSlider(n, t, i) {
    var r = {
        contentType: "epgISV",
        local: "en-us",
        siteName: "main",
        industry: "",
        isCreateControls: !0
    };
    $.extend(r, i), $.ajax({
        url: "https://dynamicservice-prod.azurewebsites.net/api/feed?c=" + r.contentType + "&l=" + r.local + "&s=" + r.siteName + "" + (r.industry != "" ? "&q.indu=" + r.industry + "" : "") + "",
        type: "GET",
        success: function(i) {
            var e, u, f;
            if (i.DataLoad.hasOwnProperty("Feed"))
                for (e = "", u = 0; u < i.DataLoad.Feed.FeedList.length; u++) f = i.DataLoad.Feed.FeedList[u].Content.item, e += "<li class='item'><a href='http://www.microsoft.com/" + f.link + "' title='" + f.name + "'><img style='max-width: 200px' src='http://edudownloads.azureedge.net/images/" + f.logo + "'/><\/a><\/li>";
            $(n).find(".innerWrap").find(".container").find("ul").children().length <= 0 && $(n).find(".innerWrap").find(".container").find("ul").append(e), r.isCreateControls && CreateControls(n), pageId = n, SetSliderStyle(n), touchSlider(n, t)
        }
    })
}

function touchSliderControl(n, t, i, r) {
    i ? dynamicSlider(n, t, r) : touchSlider(n, t)
}

function GetSortList(n, t) {
    for (var f = $(n).find(t).find("ul").eq(0).children(), e = [], r, u, i = 0; i < f.length; i++) e.push(f[i]);
    for (r = SortList(e), $(n).find(t).find("ul").eq(0).children().remove(), i = 0; i < r.length; i++) u = r[i], $(u).attr("index", i), $(n).find(t).find("ul").eq(0).append(u)
}

function SortList(n) {
    var r = [],
        i, t;
    if (n && n.length > 0)
        for (i = randomItem(n.length), t = 0; t < i.length; t++) r.push(n[i[t]]);
    return r
}

function randomItem(n) {
    for (var t = [], i; t.length < n;) i = Math.floor(Math.random() * n), t.indexOf(i) == -1 && t.push(i);
    return t
}

function get_hostname(n) {
    var t = ((n || "") + "").match(/^http:\/\/[^/]+/) || ((n || "") + "").match(/^https:\/\/[^/]+/),
        i;
    if (t && (t[0].indexOf("microsoft.com") != -1 || t[0].indexOf("wwwstaging") != -1)) return t[0].replace("http:", "") + "/enterprise";
    for (i = 0; i < t.length; i++) t[i] = t[i].replace("http:", "");
    return t ? t[0] : null
}

function formatDate(n, t) {
    var i = new Date(n);
    return i.getMonth() + 1 + t + i.getDate() + t + i.getFullYear()
}

function solutionWinowResize() {
    var n = $(window).width();
    $(".fullscreen").each(function() {
        var r = $(this).width(),
            t = (n - r) / 2,
            i = 0 - t;
        $(this).css("padding-right", t + "px"), $(this).css("padding-left", t), $(this).css("margin-left", i), $(this).css("margin-right", i)
    })
}

function videoResize() {
    var n = $(window).width();
    $(".epg_videofullhero").each(function() {
        $(this).css("margin-left", ""), $(this).css("margin-right", "");
        var i = $(this).width(),
            r = (n - i) / 2,
            t = 0 - r;
        $(this).css("margin-left", t), $(this).css("margin-right", t)
    })
}

function herohomeResize() {
    var n = $(window).width();
    $(".epg_herohome").each(function() {
        $(this).css("margin-left", ""), $(this).css("margin-right", "");
        var i = $(this).width(),
            r = (n - i) / 2,
            t = 0 - r;
        $(this).css("margin-left", t), $(this).css("margin-right", t)
    })
}

function crossScreen() {
    $(".epgCrossScreen").each(function() {
        var n = 0;
        $(".textWrap", $(this)).height(""), $(".textWrap", $(this)).each(function() {
            $(this).height() > n && (n = $(this).height())
        }), $(".textWrap", $(this)).height(n)
    })
}

function triggerLiveChart() {
    $("#heroChatBtn").click(function(n) {
        n.preventDefault(), $("#lpChatButton > a").trigger("click")
    })
}

function epgEnCaPsEPGCrossScreenResize() {
    var n = $(window).width();
    $(".fullscreenEnCa").each(function() {
        $(this).css("margin-left", ""), $(this).css("margin-right", "");
        var i = $(this).width(),
            r = (n - i) / 2,
            t = 0 - r;
        $(this).css("margin-left", t), $(this).css("margin-right", t)
    })
}

function epgPsEPGCrossScreenResize() {
    var n = $(window).width();
    n <= 1180 && $("html").prop("dir").toUpperCase() != "RTL" ? ($(".epgCrossScreens").css("width", n + "px"), $(".epgCrossScreens").css("margin-left", "-20px")) : n <= 1180 && $("html").prop("dir").toUpperCase() === "RTL" ? ($(".epgCrossScreens").css("width", n + "px"), $(".epgCrossScreens").css("margin-right", "-20px")) : $("html").prop("dir").toUpperCase() === "RTL" ? ($(".epgCrossScreens").css("width", n + "px"), $(".epgCrossScreens").css("margin-right", (n - 1180) / -2 + "px")) : ($(".epgCrossScreens").css("width", n + "px"), $(".epgCrossScreens").css("margin-left", (n - 1180) / -2 + "px"), $(".epgBox").css("width", n + "px"), $(".epgBox").css("margin-left", -((n - 1180) / -2) + "px"))
}

function epgGetScrollBarWidth() {
    var t = document.createElement("p"),
        n, r, i;
    return t.style.width = "100%", t.style.height = "200px", n = document.createElement("div"), n.style.position = "absolute", n.style.top = "0px", n.style.left = "0px", n.style.visibility = "hidden", n.style.width = "200px", n.style.height = "150px", n.style.overflow = "hidden", n.appendChild(t), document.body.appendChild(n), r = t.offsetWidth, n.style.overflow = "scroll", i = t.offsetWidth, r == i && (i = n.clientWidth), document.body.removeChild(n), r - i
}

function setDivHeight() {
    var i = window.innerWidth,
        n = 0,
        t = 0;
    $("#higher-education-faculty-offers .epgES.eduSol .textWrap").each(function() {
        n = n < $(this).height() ? $(this).height() : n
    }), $("#higher-education-faculty-offers .epgES.solPap .textWrap").each(function() {
        t = t < $(this).height() ? $(this).height() : t
    }), $("#higher-education-faculty-offers .epgES.eduSol .textWrap").each(function() {
        i > 540 ? $(this).next("a").css("margin-top", n - $(this).height() + "px") : $(this).next("a").css("margin-top", "0")
    }), $("#higher-education-faculty-offers .epgES.solPap .textWrap").each(function() {
        i > 540 ? $(this).next("a").css("margin-top", t - $(this).height() + "px") : $(this).next("a").css("margin-top", "0")
    })
}

function setPanelHeightWidth() {
    $(".panel_body").each(function() {
        if ($(".panel_image", this).hasClass("swap") && ($(".panel_text", this).height(""), $(".panel_text", this).width(""), $(".panel_image", this).width(""), $(window).width() > 679)) {
            $(".panel_image", this).css("cssText", "float:none!important");
            var n = $(this).height(),
                t = $(".panel_image", this).width(),
                i = $(this).width() - $(".panel_image", this).outerWidth();
            $(".panel_image", this).css("cssText", "width:" + t + "px!important"), $(".panel_text", this).css("cssText", "width:" + i + "px!important"), $(".panel_text", this).height(n)
        }
    })
}

function dcsMultiTrack() {
    if (typeof _tag != "undefined") return _tag.dcsMultiTrack()
}

function dcsDebug() {
    if (typeof _tag != "undefined") return _tag.dcsDebug()
}

function dcsSetVar() {
    if (typeof _tag != "undefined") return _tag.dcsMSSetVar()
}

function getCookie(n) {
    var t = " " + document.cookie,
        i = t.indexOf(" " + n + "="),
        r;
    return i == -1 ? t = null : (i = t.indexOf("=", i) + 1, r = t.indexOf(";", i), r == -1 && (r = t.length), t = unescape(t.substring(i, r))), t
}

function MscomInit() {
    setTimeout(function () {       
        msccRunFunctionOnConsent(function () {
            MscomsetEvents(), wcsAfPV = window.varAutoFirePV != undefined ? window.varAutoFirePV : 1, wcsCDFpc = window.varDisableServerFPC != undefined ? window.varDisableServerFPC : 0, wcsEFpc == 1 && wcsCDFpc == 0 ? MscomProvisionFPC() : wcsAfPV == 1 && MscomSendPageView(0), wcsMUIDset != 1 && MscomGetMUID(0)
        });        
    }, 0);
}

function MscomProvisionFPC() {
    var i = MscomGetCookieKeyValue(wcsFpcC, "CS"),
        n, t;
    i == null || i == "0" ? (n = document.head || document.getElementsByTagName("head")[0] || document.documentElement, t = document.createElement("script"), t.src = window.location.protocol, n.insertBefore(t, n.firstChild), wcsPVsFpc != 1 && wcsAfPV == 1 && MscomSendPageView(0)) : wcsAfPV == 1 && MscomSendPageView(0)
}

function MscomSetFPC(n) {
    var f, o, e, i, r, u, t;
    wcsFpcSet = 1;
    try {
        n != null ? f = new String("ID=" + n.ID + "&CS=" + n.CS + "&LV=" + n.LV + "&V=" + n.V).toString() : (e = new Date, o = "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(n) {
            var t = Math.random() * 16 | 0,
                i = n == "x" ? t : t & 3 | 8;
            return i.toString(16)
        }), i = e.getMonth() + 1, f = new String("ID=" + o + "&CS=0&LV=" + e.getFullYear() + (/[\d]{2}/.test(i.toString()) ? i : "0" + i))), r = "", u = document.location.hostname, u != null && (t = u.split("."), r = t.length >= 2 ? t[t.length - 2] + "." + t[t.length - 1] : u), expireDate = new Date(+new Date + 63072e6), msccSetCookie(wcsFpcC + "=" + f + "; expires= " + expireDate.toUTCString() + "; path=/" + (r != "" ? "; domain=" + r : ""))
    } catch (s) {}
    wcsPVsFpc == 1 && wcsAfPV == 1 && MscomSendPageView(0)
}

function MscomGetFPC() {
    var n = MscomGetCookie(wcsFpcC);
    n == null && wcsFpcSet == 0 && (MscomSetFPC(null), n = MscomGetCookie(wcsFpcC)), wcs["wcs.fpc"] = n != null ? escape(n) : ""
}

function MscomGetClientCookies() {
    var r = "",
        u = [],
        n = wcsccks,
        t, i;
    try {
        try {
            window.varCustomerCookies != undefined && window.varCustomerCookies.length > 0 && (n = n.concat(window.varCustomerCookies))
        } catch (f) {}
        for (t in n) u.hasOwnProperty(n[t]) || (u[n[t]] = "", i = decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(n[t]).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")), i != "" && (r += n[t] + "=" + MscomEncode(i) + ";"))
    } catch (f) {}
    wcs["wcs.cks"] = r
}

function MscomGetCookieKeyValue(n, t) {
    var f = MscomGetCookie(n),
        r, i, u;
    if (f != undefined)
        for (r = f.split("&"), i = 0; i < r.length; i++)
            if (u = r[i].split("="), t == u[0]) return u[1];
    return null
}

function MscomGetCookie(n) {
    var r = document.cookie.split("; "),
        t, u;
    for (i = 0; i < r.length; i++)
        if (t = r[i].split("="), u = Mscomdecode(t.shift()), u == n) return Mscomdecode(t.join("="));
    return null
}

function MscomSendPageView(n) {
    MscomResetArrays(), MscomSetSharedData(0), wcs["wcs.et"] = 0, n != undefined && n != 0 && wcsMUIDset != 1 && MscomGetMUID(0)
}

function MscomCustomEvent() {
    var f, i, r, t, n, u;
    try {
        for (MscomResetArrays(), MscomSetSharedData(5), wcs["wcs.et"] = 1, f = arguments.length, i = 0; i < f;) r = arguments[i].toString().toLowerCase(), u = r.indexOf("="), u >= 0 ? (n = unescape(r.substring(0, u)), t = unescape(r.substring(u + 1, r.length)), t = t == undefined ? "" : t, wcsOrPms.indexOf("," + n.toLowerCase() + ",") >= 0 ? (wcs["wcs." + n.toLowerCase()] = t == undefined ? "" : t, i = i + 1) : (n.indexOf("ms.") == 0 ? ms[n] = t : na[n] = t, i = i + 1)) : (n = arguments[i].toString(), t = arguments[i + 1] == undefined ? "" : arguments[i + 1].toString(), n.indexOf("wcs.") == 0 ? wcs[n.toLowerCase()] = t : n.indexOf("ms.") == 0 ? ms[n] = t : wcsOrPms.indexOf("," + n.toLowerCase() + ",") >= 0 ? wcs["wcs." + n.toLowerCase()] = t : na[n] = t, i = i + 2);
    } catch (e) {}
}

function MscomProcessClick(n) {
    var e, t, i, c, u, o, h, f, s, r, l;
    MscomResetArrays(), wcs["wcs.et"] = 2;
    try {
        if (e = n || window.event, e)
            for (t = e.srcElement || e.target; t.tagName && MscomIsInList(t.tagName) == 0;) t = t.parentElement || t.parentNode;
        if (i = 0, t && t.tagName) switch (t.tagName) {
            case "A":
                MscomSetSharedData(1), MscomReadAllTags(t), i = MscomIsPII(t), i == 0 && (c = document.all ? t.innerText || t.innerHTML : t.text || t.innerHTML, wcs["wcs.cn"] = c, wcs["wcs.cid"] = MscomGetId(t), wcs["wcs.ct"] = t.href ? t.href : "");
                break;
            case "IMG":
                MscomSetSharedData(2), MscomReadAllTags(t), i = MscomIsPII(t), i == 0 && (wcs["wcs.cn"] = t.alt ? t.alt : "", wcs["wcs.cid"] = MscomGetId(t), wcs["wcs.ct"] = MscomGetImageHREF(t));
                break;
            case "AREA":
                MscomSetSharedData(3), MscomReadAllTags(t), i = MscomIsPII(t), i == 0 && (wcs["wcs.cn"] = t.alt ? t.alt : "", wcs["wcs.cid"] = MscomGetId(t), wcs["wcs.ct"] = t.href ? t.href : "");
                break;
            case "INPUT":
                if (MscomSetSharedData(4), MscomReadAllTags(t), u = t.type || "", o = "", u && (u == "button" || u == "reset" || u == "submit" || u == "image") || u == "text" && (e.which || e.keyCode) == 13) {
                    if (h = t.value || t.name || t.alt || t.id, i = MscomIsPII(t), i == 0 && (wcs["wcs.cn"] = h ? h : "", wcs["wcs.cid"] = MscomGetId(t)), t.form)
                        for (wcs["wcs.ct"] = t.form.action || window.location.pathname, f = t.form.elements, s = 1, r = 0; r < f.length; r++) l = f[r].type, l == "text" && (i = MscomIsPII(f[r]), i == 0 && (o += "&wcs.t" + s + "=" + MscomEncode(f[r].name || f[r].id) + "&wcs.v" + s + "=" + MscomEncode(f[r].value), s++));
                    else wcs["wcs.ct"] = window.location.pathname;
                    wcs["wcs.ctx"] = o != "" ? o : ""
                }
                MscomBeacon()
        }
    } catch (t) {}
}

function MscomGetDebugValues() {
    wcs["wcs.v"] = vs, wcs["wcs.vct"] = window.varCustomerTracking != undefined ? window.varCustomerTracking : "", wcs["wcs.vs"] = window.varSegmentation != undefined ? window.varSegmentation : "", wcs["wcs.vclt"] = window.varClickTracking != undefined ? window.varClickTracking : "", wcs["wcs.vfpv"] = window.varAutoFirePV != undefined ? window.varAutoFirePV : ""
}

function MscomSetTitle() {
    wcs["wcs.ti"] = document.title
}

function MscomSetTimeZoneOffSet() {
    var n = 420,
        t = new Date;
    n = t.getTimezoneOffset(), wcs["wcs.tz"] = n / -60
}

function MscomSetReferrer() {
    var n = document.referrer;
    n != null && n != "" && (wcs["wcs.r"] = n)
}

function MscomSetTimeStamp() {
    var n = new Date,
        t = n.getTime();
    wcs["wcs.ts"] = t.toString()
}

function MscomSetScreenResolution() {
    typeof screen == "object" && (wcs["wcs.sr"] = screen.width + "x" + screen.height)
}

function MscomSetClickStreamFlag() {
    window.varSegmentation != undefined && varSegmentation == 1 && (wcs["wcs.cs"] = "1")
}

function MscomReadAllTags(n) {
    while (n && n != "undefined") MscomReadElementTags(n), n = n.parentElement || n.parentNode
}

function MscomSetCot(n) {
    wcs["wcs.cot"] = n != undefined ? n : ""
}

function MscomSetSharedData(n) {
    MscomSetTimeZoneOffSet(), MscomSetCot(n), MscomSetRouteCtrl(), MscomSetTimeStamp(), MscomGetFPC(), MscomSetReferrer(), MscomSetCookieDisabledFlag(), MscomSetEventId(), MscomSetScreenResolution(), MscomGetBrowserSize(), MscomGetSilverLightInfo(), MscomGetFlashInfo(), MscomGetCTypeHpInfo(), MscomSetClickStreamFlag(), MscomIsHP(), MscomGetCurrentSD(), MscomGetClientCookies(), MscomSetTitle(), MscomGetDebugValues()
}

function MscomGetCurrentSD() {
    wcs["wcs.rsd"] = window.location.host, wcs["wcs.rsus"] = window.location.pathname != "" ? window.location.pathname : "", wcs["wcs.rsqs"] = window.location.search != "" ? window.location.search + window.location.hash : "", wcs["wcs.rihs"] = window.location.protocol == "https" || window.location.protocol == "https:" ? "1" : "0"
}

function MscomGetFlashInfo() {
    var t, i, n, r;
    if (navigator.plugins["Shockwave Flash"]) wcs["wcs.fi"] = "1", t = navigator.plugins["Shockwave Flash"], wcs["wcs.fv"] = t.description.split(" ")[2];
    else if (navigator.userAgent.indexOf("MSIE") != -1)
        for (i = (new Date).getFullYear() - 1992, n = i; n > 0; n--) try {
            r = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + n), wcs["wcs.fi"] = "1", wcs["wcs.fv"] = n + ".0";
            break
        } catch (u) {}
}

function MscomGetSilverLightInfo() {
    var r, n, t, i;
    window.Silverlight != undefined && (wcs["wcs.se"] = "1");
    try {
        navigator.plugins["Silverlight Plug-In"] ? (r = navigator.plugins["Silverlight Plug-In"], wcs["wcs.si"] = "1", n = r.description, n && n != undefined && (t = n.split("."), n = t[0] + "." + t[1], wcs["wcs.sv"] = n)) : navigator.userAgent.indexOf("MSIE") != -1 && (i = new ActiveXObject("AgControl.AgControl"), i && (wcs["wcs.si"] = "1", wcs["wcs.sv"] = MscomGetSlvVersion(i)))
    } catch (u) {}
}

function MscomInitMeta() {
    var n, i, t, r;
    if (document.all ? n = document.all.tags("meta") : document.documentElement && (n = document.getElementsByTagName("meta")), metaTags = "", typeof n != "undefined")
        for (i = 0; i < n.length; i++) t = n.item(i), t.name && (r = t.name.toLowerCase(), r.indexOf("ms.") == 0 && (ms[t.name] = t.content))
}

function MscomReadElementTags(n) {
    var r, t, i, u;
    if (n && (r = MscomIsPII(n), r == 0))
        for (t in n.attributes) t != undefined && n.attributes[t] != null && n.attributes[t] != undefined && (i = n.attributes[t].name, i != null && i != undefined && (u = i.toLowerCase(), u.indexOf("ms.") == 0 && (ms[i] = n.attributes[t].value)));
    return ""
}

function MscomSetEventId() {
    wcs["wcs.eid"] = GenerateGuid()
}

function MscomGetBrowserSize() {
    document.body.clientWidth != undefined ? wcs["wcs.bs"] = document.body.clientWidth + "x" + document.body.clientHeight : document.documentElement && document.documentElement.clientWidth != undefined ? wcs["wcs.bs"] = document.documentElement.clientWidth + "x" + document.documentElement.clientHeight : window.innerWidth != undefined && (wcs["wcs.bs"] = window.innerWidth + "x" + window.innerHeight)
}

function MscomSetRouteCtrl() {
    wcs["wcs.route"] = window.Route != undefined ? window.Route : "", wcs["wcs.ctrl"] = window.Ctrl != undefined ? window.Ctrl : ""
}

function MscomGetCTypeHpInfo() {
    try {
        document.body && document.body.addBehavior && (document.body.addBehavior("#default#clientCaps"), document.body.connectionType && (wcs["wcs.cnt"] = document.body.connectionType))
    } catch (n) {}
}

function MscomIsHP() {
    try {
        document.body && document.body.addBehavior && (document.body.addBehavior("#default#homePage"), wcs["wcs.hp"] = document.body.isHomePage(location.href) ? "1" : "0")
    } catch (n) {}
}

function MscomSetCookieDisabledFlag() {
    var i = "",
        n = "MC0",
        t = document.cookie.indexOf(n + "="),
        r, u;
    if (t == -1) {
        if (MscomSetTimeStamp(), wcsSId = wcs["wcs.ts"], wcs["wcs.cd"] == 1) return;
        i = n + "=" + wcsSId
    } else r = t + n.length + 1, u = document.cookie.length, i = n + "=" + document.cookie.substring(r, u);
    msccSetCookie(i), t = document.cookie.indexOf(n + "="), wcs["wcs.cd"] = t == -1 ? 1 : 0
}

function GuidPart() {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1)
}

function GenerateGuid() {
    return GuidPart() + GuidPart() + "-" + GuidPart() + "-" + GuidPart() + "-" + GuidPart() + "-" + GuidPart() + GuidPart() + GuidPart()
}

function MscomGetSlvVersion(n) {
    for (var t = "", u = (new Date).getYear() - 2004, i, r = u; r > 0; r--)
        for (i = 9; i >= 0; i--)
            if (t = r + "." + i, n.IsVersionSupported(t)) return t;
    return t
}

function Mscomdebug() {
    window.alert(arguments[0])
}

function MscomGetId(n) {
    return n ? n.id == undefined ? "" : n.id : ""
}

function MscomGetImageHREF(n) {
    var t = n;
    if (n) {
        if (n = n.parentElement || n.parentNode, n && n.tagName == "A") return n.href ? n.href : "";
        if (t && t.src) return t.src
    }
    return ""
}

function MscomIsInList(n) {
    for (var t in wedcsCE)
        if (wedcsCE[t] == n.toUpperCase()) return 1;
    return 0
}

function MscomsetEvents() {
    if (window.varClickTracking != undefined && varClickTracking == 1 && document.body)
        if (document.body.addEventListener) {
            var n = navigator.appVersion.indexOf("MSIE") != -1 ? "click" : "mousedown";
            document.body.addEventListener(n, window.MscomProcessClick, 0)
        } else document.body.attachEvent && document.body.attachEvent("onclick", window.MscomProcessClick)
}

function MscomGetMUID(n) {
    if (wcsMUIDset == 1 && n == 1) {
        return
    }
    if (window.varCustomerTracking != undefined && varCustomerTracking == 1) try {
        var t = window.location.protocol + "//c1.microsoft.com/c.gif?DI=4050&did=1&t=";
        n == 1 ? insertHTML('afterBegin', '<iframe id="_msnFrame" src="' + t + '" style="z-index:-1;height:1px;width:1px;display:none;visibility:hidden;"><\/iframe>') : insertHTML('afterBegin', '<iframe id="_msnFrame" src="' + t + '" style="z-index:-1;height:1px;width:1px;display:none;visibility:hidden;"><\/iframe>'), wcsMUIDset = 1
    } catch (i) {
        wcsMUIDset = 0
    } else n == 1
}

function insertHTML(location, text) {
    $(function () {
        document.body.insertAdjacentHTML(location, text);
    });
}
function MscomEncode(n) {
    return typeof encodeURIComponent == "function" ? encodeURIComponent(n) : escape(n)
}

function Mscomdecode(n) {
    var t = decodeURIComponent(n.replace("/+/g", " "));
    return t.indexOf('"') == 0 && (t = t.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")), t
}

function MscomGetStrFromArray(n) {
    var i = "",
        t;
    for (t in n) n.hasOwnProperty(t) && (i += n[t] != undefined ? "&" + MscomEncode(t) + "=" + MscomEncode(n[t]) : "&" + MscomEncode(t) + "=");
    return i
}

function MscomResetArrays() {
    wcs = [], na = [], ms = []
}

function MscomIsPII(n) {
    try {
        var t = n.getAttribute("data-dc");
        return t != null && t != undefined ? t.toLowerCase() == "pii" ? 1 : 0 : 0
    } catch (i) {
        return 0
    }
}
var MSCom, slick, lpTag, lpMTagConfig, windowWidth, numPostsToDisplay, _tag, _esaq, __bk_m, m;
(function() {
    function k() {
        function r() {
            for (var f = n + "=", e = document.cookie.split(";"), i, r, u = 0; u < e.length; u++) {
                for (i = e[u]; i.charAt(0) == " ";) i = i.substring(1);
                if (i.indexOf(f) != -1) return r = i.substring(f.length, i.length), r.length > 0 && (r = t + r), r
            }
            return ""
        }
        var n = "MUID",
            t = "t:";
        return r()
    }
    var n = this,
        o, f, u, e, l, a, v;
    this.Asimov = this.Asimov || {}, this.Asimov._schemas = this.Asimov._schemas || [], this.Asimov.uploadUrl = "https://vortex.data.microsoft.com/collect/v1", this.Asimov.commonSchemaEnvelopeVersion = "2.1", this.Asimov.javascriptVersion = "2.15.3.8", this.Asimov.correlationVectorTag = "cV", this.Asimov.correlationVectorHeader = "MS-CV", this.Asimov.originatingCLLTag = "cll", this.Asimov.experimentIdTag = "expId", this.Asimov.userId = k(), this.Asimov.allowedGetLength = 2048, this.Asimov.getMethodQueryStringParameter = "json", o = "JS:", f = "appId", this.Asimov.verbosityLevels = {
        NONE: 0,
        ERROR: 1,
        WARNING: 2,
        INFORMATION: 3
    }, Object.freeze && Object.freeze(this.Asimov.verbosityLevels), this.Asimov.consoleVerbosity = this.Asimov.verbosityLevels.NONE;
    var s = 63,
        h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        r = null;
    "withCredentials" in new window.XMLHttpRequest ? r = "jQuery" : window.XDomainRequest && (r = "XDomainRequest"), u = "Unknown", e = n.navigator && n.navigator.appVersion ? n.navigator.appVersion : "", e.indexOf("Win") != -1 ? u = "Windows" : e.indexOf("Mac") != -1 ? u = "MacOS" : e.indexOf("X11") != -1 ? u = "Unix" : e.indexOf("Linux") != -1 && (u = "Linux"), l = window.location.hostname, a = function() {
        for (var t = "", n = 0; n < 16; n++) t += h.charAt(Math.floor(Math.random() * h.length));
        return t
    }, this.Asimov.CorrelationVector = function() {
        var i = "0000000000000000",
            n = i,
            t = 0,
            r = function() {
                return n === i ? !1 : !0
            },
            u = function(n) {
                return n.getValue().length + 2 <= s ? !0 : !1
            },
            f = function() {
                return n.length + 1 + (t + 1 + "").length <= s ? !0 : !1
            };
        this.getValue = function() {
            return n.concat(".", t)
        }, this.setValue = function(i) {
            if (Asimov.CorrelationVector.isValid(i)) {
                var r = i.lastIndexOf(".");
                n = i.substr(0, r), t = parseInt(i.substr(r + 1), 10)
            } else throw "Cannot set invalid correlation vector value";
            return n.concat(".", t)
        }, this.init = function() {
            return n = a(), this.getValue()
        }, this.extend = function() {
            return r() || this.init(), u(this) && (n = n.concat(".", t), t = 0), this.getValue()
        }, this.increment = function() {
            return r() || this.init(), f() && (t = t + 1), this.getValue()
        }
    }, v = new RegExp("^[" + h + "]{16}(.[0-9]+)+$"), this.Asimov.CorrelationVector.isValid = function(n) {
        return v.test(n) && n.length <= s
    }, this.Asimov.cv = new this.Asimov.CorrelationVector;
    var d = function() {
            return n.jQuery ? !n.JSON || !n.JSON.stringify ? (t("Unable to write event: the global JSON.stringify method does not exist"), !1) : r ? r == "XDomainRequest" && n.Asimov.uploadUrl && n.Asimov.uploadUrl.indexOf(window.location.protocol) != 0 ? (t("Unable to write event: CORS requests are not supported cross-protocol in this browser"), !1) : !0 : (t("Unable to write event: CORS not supported in this browser"), !1) : (t("Unable to write event: jQuery is not present"), !1)
        },
        y = function(n, i) {
            t("Failure sending data to vortex: " + i)
        },
        c = function() {
            nt("Success sending data to vortex")
        },
        g = function() {
            t("Failure sending data to vortex using XDomainRequest")
        },
        t = function(t) {
            n.Asimov.consoleVerbosity >= n.Asimov.verbosityLevels.ERROR && n.console && n.console.error && n.console.error("JSLL: " + t)
        },
        p = function(t) {
            n.Asimov.consoleVerbosity >= n.Asimov.verbosityLevels.WARNING && n.console && n.console.warn && n.console.warn("JSLL: " + t)
        },
        nt = function(t) {
            n.Asimov.consoleVerbosity >= n.Asimov.verbosityLevels.INFORMATION && n.console && n.console.log && n.console.log("JSLL: " + t)
        },
        i = function(n, t) {
            if (n == "string") return typeof t == "string" || t instanceof String || t instanceof Date;
            if (n == "bool") return typeof t == "boolean" || t instanceof Boolean;
            if (!(typeof t == "number") || t instanceof Number) return !1;
            if (n == "uint8") {
                if (t < 0 || t > 255 || t % 1 != 0) return !1
            } else if (n == "uint16") {
                if (t < 0 || t > 65535 || t % 1 != 0) return !1
            } else if (n == "uint32") {
                if (t < 0 || t > 4294967295 || t % 1 != 0) return !1
            } else if (n == "uint64") {
                if (t < 0 || t > 18446744073709551615 || t % 1 != 0) return !1
            } else if (n == "int8") {
                if (t < -128 || t > 127 || t % 1 != 0) return !1
            } else if (n == "int16") {
                if (t < -32768 || t > 32767 || t % 1 != 0) return !1
            } else if (n == "int32") {
                if (t < -2147483648 || t > 2147483647 || t % 1 != 0) return !1
            } else if (n == "int64") {
                if (t < -9223372036854775808 || t > 9223372036854775807 || t % 1 != 0) return !1
            } else if (n == "float") {
                if (t < -3402823e32 || t > 3402823e32) return !1
            } else if (n == "double" && (t < -17976931348623157e292 || t > 17976931348623157e292)) return !1;
            return !0
        },
        w = function(n, r, u) {
            for (var h = r.fields, f, e, a, s, v, o, y, p, b, l, c = 0; c < h.length; c++) {
                if (f = h[c], e = u[f.name], e === null || e === undefined) {
                    if (f.req) return t("Missing required property: " + f.name), !1;
                    continue
                }
                if (f.type == "map") {
                    a = {};
                    for (s in e) {
                        if (!i(f.key, s)) return t("A key in the map was of the wrong type: " + f.name), !1;
                        if (!i(f.element, e[s])) return t("A value in the map was of the wrong type: " + f.name), !1;
                        a[s] = e[s]
                    }
                    n[f.name] = a
                } else if (f.type == "list" || f.type == "set") {
                    if (v = [], Object.prototype.toString.call(e) === "[object Array]")
                        for (o = 0; o < e.length; o++) {
                            if (e[o] != null && !i(f.element, e[o])) return t("The list contains a value of the wrong type: " + f.name), !1;
                            v[o] = e[o]
                        } else return t("The " + f.type + " " + f.name + " was not an array as expected"), !1;
                    n[f.name] = v
                } else if (f.type == "struct") {
                    if (y = {}, !w(y, f.def, e)) return !1;
                    n[f.name] = y
                } else {
                    if (!i(f.type, e)) return t("Property is the wrong type: " + f.name), !1;
                    n[f.name] = e
                }
            }
            for (p in u) {
                for (b = !1, l = 0; l < h.length; l++)
                    if (h[l].name == p) {
                        b = !0;
                        break
                    }
                b || t("An unexpected property was found in the event content and dropped: " + p)
            }
            return !0
        },
        b = function(t, i) {
            var f, o, a, w, b, s, h, l, v, e, u;
            if (t && d()) {
                if (f = i == !0, o = [], n.jQuery.isArray(t))
                    for (f && p("only one message may be sent via get method per request -- using post instead"), f = !1, a = 0; a < t.length; a++) w = n.Asimov._validateAndTranslateEvent(t[a]), w.success && o.push(w.event);
                else b = n.Asimov._validateAndTranslateEvent(t), b.success && o.push(b.event);
                if (o.length != 0) {
                    for (s = "", h = 0; h < o.length; h++) h > 0 && (s += "\n"), s += n.JSON.stringify(o[h]);
                    l = "", f && (l = encodeURIComponent(s), n.Asimov.uploadUrl.length + n.Asimov.getMethodQueryStringParameter.length + 2 + l.length > n.Asimov.allowedGetLength && (p("event is too large to send using get -- using post instead"), f = !1)), r === "jQuery" ? (v = {}, v = f ? {
                        accepts: {
                            text: "application/json"
                        },
                        url: n.Asimov.uploadUrl,
                        type: "get",
                        dataType: "text",
                        data: n.Asimov.getMethodQueryStringParameter + "=" + l,
                        crossDomain: !0
                    } : {
                        accepts: {
                            text: "application/json"
                        },
                        url: n.Asimov.uploadUrl,
                        type: "post",
                        dataType: "text",
                        data: s,
                        crossDomain: !0,
                        headers: {
                            "Content-Type": "application/x-json-stream"
                        }
                    }, e = window.jQuery.ajax(v), e.fail ? e.fail(y) : e.error(y), e.done ? e.done(c) : e.success(c)) : r === "XDomainRequest" && (u = new XDomainRequest, u.onload = c, u.onerror = function() {
                        g(u)
                    }, f ? (u.open("get", n.Asimov.uploadUrl + "?" + n.Asimov.getMethodQueryStringParameter + "=" + l), u.send()) : (u.open("post", n.Asimov.uploadUrl), u.send(s)))
                }
            }
        };
    this.Asimov.writeEvent = function (n) {
        if (typeof (mscc) == 'undefined' || !mscc || mscc.hasConsent()) {
            b(n, !1);
        }        
    }, this.Asimov.writeEventWithGet = function (n) {
        if (typeof (mscc) == 'undefined' || !mscc || mscc.hasConsent()) {
            b(n, !0);
        }        
    }, this.Asimov._validateAndTranslateEvent = function(n) {
        var r = {},
            c = {},
            a = {},
            e = {
                event: r,
                success: !1
            },
            h, s, p, v, y, b, k, d;
        if (!n) return t("Unable to write null event"), e;
        if (!n.name) return t("Unable to write event with missing name"), e;
        if (!this._schemas.hasOwnProperty(n.name)) return t("Unable to write event: a schema for the event named {" + n.name + "} does not exist"), e;
        if (!n.content) return t("Unable to write event: the event is missing content"), e;
        h = this._schemas[n.name];
        for (s in h)
            if (s !== "name") {
                if (p = h[s], !n.content.hasOwnProperty(s)) return t("Unable to write event: missing expected part: " + s), e;
                if (p.part == "C" ? v = a : (v = {}, a.baseData = v, a.baseType = s), !w(v, p.def, n.content[s])) return e
            }
        for (y in n.content) h[y] && h[y].part || t("An unexpected property was found in the event content and dropped: " + y);
        if (r.ver = this.commonSchemaEnvelopeVersion, r.name = n.name, r.time = new Date, r.data = a, r.tags = {}, r.os = u, n.hasOwnProperty(this.correlationVectorTag))
            if (this.CorrelationVector.isValid(n[this.correlationVectorTag])) r.cV = n[this.correlationVectorTag];
            else return t("Unable to write event: The correlation vector value is invalid: " + n[this.correlationVectorTag]), e;
        else r.cV = this.cv.getValue();
        if (n.hasOwnProperty(this.experimentIdTag))
            if (i("string", n[this.experimentIdTag])) b = {}, b[this.experimentIdTag] = n[this.experimentIdTag], c.app = b;
            else return t("Unable to write event: The supplied experiment id is invalid: " + n[this.experimentIdTag]), e;
        return r.tags[this.originatingCLLTag] = "JSLL", n.hasOwnProperty(f) ? i("string", n[f]) ? r.appId = o + n[f] : t("Unable to write event: The supplied appId is invalid: " + n[f]) : r.appId = o + l, k = {}, k.libVer = this.javascriptVersion, c.javascript = k, this.userId != null && (i("string", this.userId) ? (d = {}, d.localId = this.userId, c.user = d) : t("ignoring the userid value because it is invalid: " + this.userId)), r.ext = c, e.success = !0, e
    }, this.Asimov._registerSchemas = function(n) {
        for (var t = 0; t < n.length; t++) this._schemas[n[t].name] = n[t]
    }
})(),
function() {
    this.Asimov._registerSchemas([{
        name: "Microsoft.Infrastructure.Events.MSCOMRendering.ClientError",
        "Microsoft.Infrastructure.Events.MSCOMRendering.ClientError": {
            part: "C",
            def: {
                fields: [{
                    req: !0,
                    name: "ErrorInfo",
                    type: "string"
                }, {
                    name: "WasDisplayed",
                    type: "bool"
                }]
            }
        }
    }, {
        name: "Microsoft.Infrastructure.Events.MSCOMRendering.PageAction",
        "Ms.Content.PageAction": {
            part: "B",
            def: {
                fields: [{
                    req: !0,
                    name: "pageName",
                    type: "string"
                }, {
                    name: "uri",
                    type: "string"
                }, {
                    name: "destUri",
                    type: "string"
                }, {
                    name: "pageType",
                    type: "string"
                }, {
                    name: "pageTags",
                    type: "string"
                }, {
                    name: "product",
                    type: "string"
                }, {
                    name: "screenState",
                    type: "int32"
                }, {
                    name: "customSessionGuid",
                    type: "string"
                }, {
                    name: "impressionGuid",
                    type: "string"
                }, {
                    name: "actionInputMethod",
                    type: "int32"
                }, {
                    name: "behavior",
                    type: "int32"
                }, {
                    name: "contentJsonVer",
                    type: "float"
                }, {
                    name: "content",
                    type: "string"
                }]
            }
        },
        "Microsoft.Infrastructure.Events.MSCOMRendering.PageAction": {
            part: "C",
            def: {
                fields: [{
                    req: !0,
                    name: "VisitorId",
                    type: "string"
                }, {
                    name: "GroupId",
                    type: "string"
                }, {
                    name: "FlightId",
                    type: "string"
                }, {
                    name: "TimeToAction",
                    type: "int32"
                }, {
                    name: "Route",
                    type: "string"
                }, {
                    name: "PageVersion",
                    type: "string"
                }, {
                    name: "BrowserSize",
                    type: "string"
                }, {
                    name: "PageSize",
                    type: "string"
                }]
            }
        }
    }, {
        name: "Microsoft.Infrastructure.Events.MSCOMRendering.PageView",
        "Ms.Content.PageView": {
            part: "B",
            def: {
                fields: [{
                    req: !0,
                    name: "pageName",
                    type: "string"
                }, {
                    name: "uri",
                    type: "string"
                }, {
                    name: "referrerUri",
                    type: "string"
                }, {
                    name: "pageType",
                    type: "string"
                }, {
                    name: "pageTags",
                    type: "string"
                }, {
                    name: "product",
                    type: "string"
                }, {
                    name: "screenState",
                    type: "int32"
                }, {
                    name: "customSessionGuid",
                    type: "string"
                }, {
                    name: "impressionGuid",
                    type: "string"
                }, {
                    name: "contentJsonVer",
                    type: "float"
                }, {
                    name: "content",
                    type: "string"
                }]
            }
        },
        "Microsoft.Infrastructure.Events.MSCOMRendering.PageView": {
            part: "C",
            def: {
                fields: [{
                    name: "VisitorId",
                    type: "string"
                }, {
                    name: "GroupId",
                    type: "string"
                }, {
                    name: "FlightId",
                    type: "string"
                }, {
                    name: "ClientUTCOffset",
                    type: "int32"
                }, {
                    req: !0,
                    name: "UserAgent",
                    type: "string"
                }, {
                    name: "BrowserLanguage",
                    type: "string"
                }, {
                    name: "DNTStatus",
                    type: "string"
                }, {
                    name: "CookiesEnabled",
                    type: "bool"
                }, {
                    name: "SilverLightInstalled",
                    type: "bool"
                }, {
                    name: "SilverLightEnabledOnPage",
                    type: "bool"
                }, {
                    name: "SilverLightVersion",
                    type: "string"
                }, {
                    name: "FlashInstalled",
                    type: "bool"
                }, {
                    name: "FlashVersion",
                    type: "string"
                }, {
                    name: "BrowserSize",
                    type: "string"
                }, {
                    name: "Cookies",
                    type: "string"
                }, {
                    name: "PageLoadTime",
                    type: "int32"
                }, {
                    name: "PageTitle",
                    type: "string"
                }, {
                    name: "Route",
                    type: "string"
                }, {
                    name: "PageVersion",
                    type: "string"
                }, {
                    name: "ScreenResolution",
                    type: "string"
                }, {
                    name: "PageSize",
                    type: "string"
                }, {
                    name: "Scrl",
                    type: "string"
                }]
            }
        }
    }, {
        name: "Microsoft.Infrastructure.Events.MSCOMRendering.TimeSpan",
        "Microsoft.Infrastructure.Events.MSCOMRendering.TimeSpan": {
            part: "C",
            def: {
                fields: [{
                    name: "RequestUrl",
                    type: "string"
                }, {
                    name: "Culture",
                    type: "string"
                }, {
                    name: "UserAgent",
                    type: "string"
                }, {
                    name: "BeginTime",
                    type: "string"
                }, {
                    name: "PageLoadTime",
                    type: "int32"
                }, {
                    name: "PageTimingDetails",
                    type: "string"
                }, {
                    name: "TotalRequests",
                    type: "int32"
                }, {
                    name: "SecondaryResourceDetails",
                    type: "string"
                }, {
                    name: "AdditionalInformation",
                    type: "string"
                }, {
                    name: "VisitorId",
                    type: "string"
                }, {
                    name: "RenderingVer",
                    type: "string"
                }]
            }
        }
    }, {
        name: "Ms.Content.PageAction",
        "Ms.Content.PageAction": {
            part: "B",
            def: {
                fields: [{
                    req: !0,
                    name: "pageName",
                    type: "string"
                }, {
                    name: "uri",
                    type: "string"
                }, {
                    name: "destUri",
                    type: "string"
                }, {
                    name: "pageType",
                    type: "string"
                }, {
                    name: "pageTags",
                    type: "string"
                }, {
                    name: "product",
                    type: "string"
                }, {
                    name: "screenState",
                    type: "int32"
                }, {
                    name: "customSessionGuid",
                    type: "string"
                }, {
                    name: "impressionGuid",
                    type: "string"
                }, {
                    name: "actionInputMethod",
                    type: "int32"
                }, {
                    name: "behavior",
                    type: "int32"
                }, {
                    name: "contentJsonVer",
                    type: "float"
                }, {
                    name: "content",
                    type: "string"
                }]
            }
        }
    }, {
        name: "Ms.Content.PageView",
        "Ms.Content.PageView": {
            part: "B",
            def: {
                fields: [{
                    req: !0,
                    name: "pageName",
                    type: "string"
                }, {
                    name: "uri",
                    type: "string"
                }, {
                    name: "referrerUri",
                    type: "string"
                }, {
                    name: "pageType",
                    type: "string"
                }, {
                    name: "pageTags",
                    type: "string"
                }, {
                    name: "product",
                    type: "string"
                }, {
                    name: "screenState",
                    type: "int32"
                }, {
                    name: "customSessionGuid",
                    type: "string"
                }, {
                    name: "impressionGuid",
                    type: "string"
                }, {
                    name: "contentJsonVer",
                    type: "float"
                }, {
                    name: "content",
                    type: "string"
                }]
            }
        }
    }])
}(), window.MSCOMRendering === undefined && (window.MSCOMRendering = {}), MSCOMRendering.Jll = function() {
        function v() {
            y(), e = w(), p(), $(window).load(function() {
                var e = window.location.href,
                    t, n, u, f, i;
                if (window.performance != undefined) {
                    var o = window.performance.timing.domComplete - window.performance.timing.fetchStart,
                        c = +new Date,
                        a = c - window.performance.timing.navigationStart,
                        v = {
                            domLoadTime: o,
                            timing: window.performance.timing
                        },
                        s = !0,
                        r = [];
                    try {
                        for (t = window.performance.getEntries(), n = 0; n < t.length; n++) u = t[n].name.indexOf("c.microsoft.com") > -1 || t[n].name.indexOf("tags.bluekai.com") > -1 ? t[n].name.substring(0, 100) : t[n].name, r.push({
                            name: u,
                            initiatorType: t[n].initiatorType,
                            entryType: t[n].entryType,
                            type: t[n].type,
                            startTime: t[n].startTime,
                            fetchStart: t[n].fetchStart,
                            duration: t[n].duration
                        })
                    } catch (y) {
                        s = !1
                    }
                    f = "", i = "", s ? (i = JSON.stringify(v), f = JSON.stringify(r)) : i = '{"domLoadTime": ' + o + ',"timing" {"navigationStart":' + window.performance.timing.navigationStart + ',"unloadEventStart":' + window.performance.timing.unloadEventStart + ',"unloadEventEnd":' + window.performance.timing.unloadEventEnd + ',"redirectStart":' + window.performance.timing.redirectStart + ',"redirectEnd":' + window.performance.timing.redirectEnd + ',"fetchStart":' + window.performance.timing.fetchStart + ',"domainLookupStart":' + window.performance.timing.domainLookupStart + ',"domainLookupEnd":' + window.performance.timing.domainLookupEnd + ',"connectStart":' + window.performance.timing.connectStart + ',"connectEnd":' + window.performance.timing.connectEnd + ',"requestStart":' + window.performance.timing.requestStart + ',"responseStart":' + window.performance.timing.responseStart + ',"responseEnd":' + window.performance.timing.responseEnd + ',"domLoading":' + window.performance.timing.domLoading + ',"domInteractive":' + window.performance.timing.domInteractive + ',"domContentLoadedEventStart":' + window.performance.timing.domContentLoadedEventStart + ',"domContentLoadedEventEnd":' + window.performance.timing.domContentLoadedEventEnd + ',"domComplete":' + window.performance.timing.domComplete + ',"loadEventStart":' + window.performance.timing.loadEventStart + ',"loadEventEnd":' + window.performance.timing.loadEventEnd + ',"msFirstPaint":' + window.performance.timing.msFirstPaint + "}}", h(window.performance.timing.navigationStart.toString(), r.length, l(), f, i, "", e, a)
                } else h("0", 0, l(), "Not Supported", "Not Supported", "", e, 0)
            })
        }

        function y() {
            var t = document.getElementsByTagName("meta"),
                i = "",
                n;
            if (t)
                for (n = 0; n < t.length; n++)
                    if (t[n].getAttribute("name") == "CorrelationVector") {
                        i = t[n].getAttribute("content");
                        break
                    }
            Asimov.cv = new Asimov.CorrelationVector, i != "" && Asimov.cv.setValue(i)
        }

        function p() {
            var t = document.getElementsByTagName("meta"),
                n;
            if (t)
                for (n = 0; n < t.length; n++)
                    if (t[n].getAttribute("name") == "RenderingVersion") {
                        c = t[n].getAttribute("content");
                        break
                    }
        }

        function l() {
            var t = document.getElementsByTagName("meta"),
                n;
            if (t)
                for (n = 0; n < t.length; n++)
                    if (t[n].getAttribute("name") == "MscomContentLocale") return t[n].getAttribute("content");
            return ""
        }

        function w() {
            var u = document.cookie.indexOf(s + "="),
                n, t, r;
            if (u == -1) return n = d(), msccSetCookie(s + "=" + n), n;
            for (t = document.cookie.split("; "), i = 0; i < t.length; i++)
                if (r = t[i].split("="), s === r.shift()) return r.join("=");
            return e
        }

        function b() {
            n.domain = window.location.host, n.siteStem = "", n.queryString = "", window.location.pathname != "" && (n.siteStem = window.location.pathname), window.location.search != "" && (n.queryString = window.location.search)
        }

        function k() {
            n.screenResolution = "", n.screenResolutionWidth = "", n.screenResolutionHeight = "", typeof screen == "object" && (n.screenResolution = screen.width + "x" + screen.height, n.screenResolutionHeight = screen.height, n.screenResolutionWidth = screen.width)
        }

        function r() {
            return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1)
        }

        function d() {
            return r() + r() + "-" + r() + "-" + r() + "-" + r() + "-" + r() + r() + r()
        }

        function g() {
            var t = new Date;
            tz = t.getTimezoneOffset(), n.timeZoneOffSet = tz / -60
        }

        function nt() {
            var i = "",
                e = new Date,
                t = document.cookie.indexOf(u + "="),
                r, f;
            if (t == -1) {
                if (MscomSetTimeStamp(), sessionId = e.getTime(), n.cookieEnabled == !1) return;
                i = u + "=" + sessionId
            } else r = t + u.length + 1, f = document.cookie.length, i = u + "=" + document.cookie.substring(r, f);
            msccSetCookie(i), t = document.cookie.indexOf(u + "="), n.cookieEnabled = t == -1 ? !1 : !0
        }

        function tt() {
            var i, t, u, r;
            if (n.flashInstalled = !1, n.flashVersion = "", i = (new Date).getFullYear() - 1992, navigator.userAgent.indexOf("MSIE") != -1)
                for (t = i; t > 0; t--) try {
                    u = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + t), n.flashInstalled = !0, n.flashVersion = t + ".0";
                    break
                } catch (f) {} else navigator.plugins["Shockwave Flash"] && (n.flashInstalled = !0, r = navigator.plugins["Shockwave Flash"], n.flashVersion = r.description.split(" ")[2])
        }

        function it() {
            var u, t, i, r;
            n.silverlightEnabled = !1, n.silverlightInstalled = !1, n.silverlightVersion = "0.0", window.Silverlight != undefined && (n.silverlightEnabled = !0);
            try {
                navigator.plugins["Silverlight Plug-In"] ? (u = navigator.plugins["Silverlight Plug-In"], n.silverlightInstalled = !0, t = u.description, t && (i = t.split("."), t = i[0] + "." + i[1], n.silverlightVersion = t)) : navigator.userAgent.indexOf("MSIE") != -1 && (r = new ActiveXObject("AgControl.AgControl"), r && (n.silverlightInstalled = !0, n.silverlightVersion = rt(r)))
            } catch (f) {}
        }

        function rt(n) {
            for (var t = "", u = (new Date).getYear() - 2004, r, i = u; i > 0; i--)
                for (r = 9; r >= 0; r--)
                    if (t = i + "." + r, n.IsVersionSupported(t)) return t;
            return t
        }

        function ut() {
            n.browserSize = "", document.body && document.body.clientWidth != undefined ? n.browserSize = document.body.clientWidth + "x" + document.body.clientHeight : document.documentElement && document.documentElement.clientWidth != undefined ? n.browserSize = document.documentElement.clientWidth + "x" + document.documentElement.clientHeight : window.innerWidth != undefined && (n.browserSize = window.innerWidth + "x" + window.innerHeight)
        }

        function ft() {
            var t = +new Date,
                n;
            return window.performance && window.performance.timing && (n = window.performance.timing.domComplete, n !== 0) ? t - n : -1
        }

        function a() {
            n.title = document.title, n.referrer = document.referrer, g(), nt(), k(), ut(), tt(), it(), b()
        }

        function et(n) {
            return typeof n == "number" && n % 1 == 0
        }

        function t(n) {
            return n ? n : ""
        }

        function o(n) {
            return n && et(n) ? n : 0
        }

        function ot(i) {
            n = i, a();
            var r = [{
                name: "Microsoft.Infrastructure.Events.MSCOMRendering.PageView",
                content: {
                    "Ms.Content.PageView": {
                        pageName: n.title,
                        uri: window.location.href,
                        referrerUri: n.referrer,
                        pageType: "WebPage",
                        pageTags: "{'InteractionType': '" + t(n.interactiontype) + "', 'LinkId': '" + t(n.linkid) + "', 'LinkType': '" + t(n.linktype) + "', 'Environment': '" + t(n.env) + "', 'Lang': '" + t(n.lang) + "', 'Loc': '" + t(n.loc) + "',}",
                        product: "",
                        screenState: 0,
                        customSessionGuid: e,
                        impressionGuid: "",
                        contentJsonVer: 2,
                        content: ""
                    },
                    "Microsoft.Infrastructure.Events.MSCOMRendering.PageView": {
                        VisitorId: f,
                        GroupId: "",
                        FlightId: "",
                        ClientUTCOffset: n.timeZoneOffSet,
                        UserAgent: navigator.userAgent,
                        BrowserLanguage: navigator.userLanguage,
                        DNTStatus: navigator.doNotTrack,
                        CookiesEnabled: n.cookieEnabled,
                        SilverLightInstalled: n.silverlightInstalled,
                        SilverLightEnabledOnPage: n.silverlightEnabled,
                        SilverLightVersion: n.silverlightVersion,
                        FlashInstalled: n.flashInstalled,
                        FlashVersion: n.flashVersion,
                        BrowserSize: t(n.viewport),
                        Cookies: "",
                        PageLoadTime: -1,
                        PageTitle: n.title,
                        Route: t(n.route),
                        PageVersion: "",
                        ScreenResolution: n.screenResolution,
                        PageSize: n.browserSize,
                        Scrl: t(n.scrollable)
                    }
                }
            }];
            window.Asimov.writeEvent(r)
        }

        function st(i) {
            n = i, a();
            var r = [{
                name: "Microsoft.Infrastructure.Events.MSCOMRendering.PageAction",
                content: {
                    "Ms.Content.PageAction": {
                        pageName: n.title,
                        uri: window.location.href,
                        destUri: t(n["wcs.ct"]),
                        pageType: "WebPage",
                        pageTags: "{'InteractionType': '" + t(n.interactiontype) + "', 'LinkId': '" + t(n.linkid) + "', 'LinkType': '" + t(n.linktype) + "', 'Environment': '" + t(n.env) + "', 'ClickedObjectId': '" + t(n["wcs.cid"]) + "', 'ClickedTargetUrl': '" + t(n["wcs.ct"]) + "', 'ClickedObjectName': '" + t(n["wcs.cn"]) + "', 'ClickedObjectType': '" + o(n.cot) + "', 'SearchType': '" + t(n.searchtype) + "', 'SearchQuery': '" + t(n.searchquery) + "', 'Index': '" + o(n.index) + "', 'PageArea': '" + t(n.pgarea) + "', 'ComponentGroup': '" + t(n.cmpgrp) + "', 'ComponentName': '" + t(n.cmpnm) + "', 'ComponentType': '" + t(n.cmptyp) + "', 'Lang': '" + t(n.lang) + "', 'Loc': '" + t(n.loc) + "',}",
                        product: "",
                        screenState: 0,
                        customSessionGuid: e,
                        impressionGuid: "",
                        actionInputMethod: 0,
                        behavior: 0,
                        contentJsonVer: 2,
                        content: ""
                    },
                    "Microsoft.Infrastructure.Events.MSCOMRendering.PageAction": {
                        VisitorId: f,
                        GroupId: "",
                        FlightId: "",
                        TimeToAction: ft(),
                        Route: t(n.route),
                        PageVersion: "",
                        BrowserSize: t(n.viewport),
                        PageSize: n.browserSize
                    }
                }
            }];
            window.Asimov.writeEvent(r)
        }

        function ht(n, t, i, r, u) {
            var f = "{'ErrorTitle': '" + r + "', 'RequestURL': '" + t + "', 'LineNumber': '" + i + "', 'ErrorMessage': '" + n.replace(/'/g, '"') + "',}";
            ct(f, u)
        }

        function ct(n, t) {
            var i = [{
                name: "Microsoft.Infrastructure.Events.MSCOMRendering.ClientError",
                content: {
                    "Microsoft.Infrastructure.Events.MSCOMRendering.ClientError": {
                        ErrorInfo: n,
                        WasDisplayed: t
                    }
                }
            }];
            window.Asimov.writeEvent(i)
        }

        function h(n, t, i, r, u, e, s, h) {
            var l = [{
                name: "Microsoft.Infrastructure.Events.MSCOMRendering.TimeSpan",
                content: {
                    "Microsoft.Infrastructure.Events.MSCOMRendering.TimeSpan": {
                        RequestUrl: s,
                        Culture: i,
                        UserAgent: navigator.userAgent,
                        BeginTime: n,
                        PageLoadTime: o(h),
                        PageTimingDetails: u,
                        TotalRequests: o(t),
                        SecondaryResourceDetails: r,
                        AdditionalInformation: e,
                        VisitorId: f,
                        RenderingVer: c
                    }
                }
            }];
            window.Asimov.writeEvent(l)
        }
        var n = {},
            u = "MC0",
            f = "",
            s = "MSCOMBIID",
            e = "",
            c = "";
        return v(), {
            SendError: ht,
            SentPageAction: st,
            SentPageView: ot,
            SendTimeSpan: h
        }
    }(), window.onerror = function(n, t, i) {
        return MSCOMRendering.Jll.SendError(n, t, i, "ErrorTitle", !1), !0
    }, $(document).ready(function() {
        $(".mscomAd:visible").length > 0 && window.Mscom.Helper.loadScript("http://Ads1.msn.com/library/dap.js", function() {
            $(".mscomAd:visible").each(function(n) {
                if (dapMgr != "undefined") {
                    var t = "Ad" + n,
                        i = $(this).attr("data-ad-pageGroup"),
                        r = $(this).attr("data-ad-sizeCode"),
                        u = $(this).attr("data-ad-width"),
                        f = $(this).attr("data-ad-height");
                    $(this).attr("id", t);
                    try {
                        dapMgr.enableACB(t, !1), dapMgr.renderAd(t, "&PG=" + i + "&AP=" + r, u, f)
                    } catch (e) {}
                }
            })
        })
    }), window.Mscom === undefined && (window.Mscom = {
        init: function() {
            this.ResponsiveBP3Width = 899, this.ResponsiveBP2Width = 679, this.ResponsiveBP1Width = 539, this.Direction = $("html").css("direction"), this.Left = this.Direction == "ltr" ? "left" : "right", this.Right = this.Direction == "ltr" ? "right" : "left";
            var n = $('meta[name="MscomContentLocale"]').attr("content");
            this.ContentLocale = window.Mscom.Helper.IsValid(n) ? n : navigator.browserLanguage
        }
    }), window.Mscom.BrowserDetect = {
        init: function() {
            this.browser = this.searchString(this.dataBrowser) || "Other", this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "Unknown"
        },
        searchString: function(n) {
            for (var i, t = 0; t < n.length; t++)
                if (i = n[t].string, this.versionSearchString = n[t].subString, i.indexOf(n[t].subString) != -1) return n[t].identity
        },
        searchVersion: function(n) {
            var t = n.indexOf(this.versionSearchString);
            if (t != -1) return parseFloat(n.substring(t + this.versionSearchString.length + 1))
        },
        dataBrowser: [{
            string: navigator.userAgent,
            subString: "Chrome",
            identity: "Chrome"
        }, {
            string: navigator.userAgent,
            subString: "MSIE",
            identity: "Explorer"
        }, {
            string: navigator.userAgent,
            subString: "Firefox",
            identity: "Firefox"
        }, {
            string: navigator.userAgent,
            subString: "Safari",
            identity: "Safari"
        }, {
            string: navigator.userAgent,
            subString: "Opera",
            identity: "Opera"
        }]
    }, window.Mscom.Helper = {
        htmlEncode: function(n) {
            return n == "undefined" || n == null ? n : $("<div/>").text(n).html()
        },
        htmlDecode: function(n) {
            return n == "undefined" || n == null ? n : $("<div/>").html(n).text()
        },
        htmlAttrEncode: function(n) {
            return n = this.htmlEncode(n), n = n.replace(/"/g, "&quot;"), n.replace(/'/g, "&#039;")
        },
        isIE7: function() {
            return navigator.appVersion.indexOf("MSIE 7.") != -1
        },
        isResponsive: function() {
            return $(document.body).hasClass("mscom-responsive") ? !0 : !1
        },
        IsValid: function(n) {
            return n == null || n == "undefined" || n.length == 0 ? !1 : !0
        },
        setCookie: function(n, t, i, r, u, f) {
            var o = new Date,
                e;
            i && (i = i * 864e5), e = new Date(o.getTime() + i), msccSetCookie(n + "=" + escape(t) + (i ? ";expires=" + e.toGMTString() : "") + (r ? ";path=" + r : "") + (u ? ";domain=" + u : "") + (f ? ";secure" : ""))
        },
        getCookie: function(n, t) {
            for (var u = document.cookie.split("; "), r, i = 0; i < u.length; i++)
                if (r = u[i].split("="), n === r[0]) return unescape(r[1]);
            return t
        },
        deleteCookie: function(n) {
            var t = new Date;
            t.setDate(t.getDate() - 1), msccSetCookie(n + "=;expires=" + t.toGMTString() + ";")
        },
        BiTrack: function(n, t, i, r) {
            if ($.bi) try {
                var u = $.bi.getLinkData(n);
                t && (u.title = t), this.IsValid(r) && (u.interactiontype = r), this.IsValid(i) && (u.cot = i), $.bi.record(u)
            } catch (f) {}
        },
        loadScript: function(n, t) {
            var i = document.createElement("script");
            i.src = n, document.body.appendChild(i), i.onload = i.onreadystatechange = i.onerror = function() {
                if ((!i || !i.readyState || !/^(?!(?:loaded|complete)$)/.test(i.readyState)) && typeof this.callbackComplete == "undefined") {
                    try {
                        t && t()
                    } catch (n) {
                        return
                    }
                    this.callbackComplete = !0
                }
            }
        },
        GetQueryValue: function(n, t) {
            var r = new RegExp("[\\?&]" + t + "=([^&#]*)", "gi"),
                i = r.exec(n);
            return i == null ? "" : decodeURIComponent(i[1].replace(/\+/g, " "))
        },
        GetViewport: function() {
            var n = window,
                t = "inner";
            return "innerWidth" in window || (t = "client", n = document.documentElement || document.body), {
                width: n[t + "Width"],
                height: n[t + "Height"]
            }
        }
    }, String.prototype.format = function() {
        var n = arguments;
        return this.replace(/{(\d+)}/g, function(t, i) {
            return n[i]
        })
    }, typeof $ != "undefined" && $(function() {
        if (Mscom.init(), $(document.body).removeClass("mscom-nonjs"), Mscom.BrowserDetect.init(), Mscom.BrowserDetect.browser == "Explorer") {
            var n = "";
            Mscom.BrowserDetect.version < 9 && (n = " lt-ie9", Mscom.BrowserDetect.version < 8 && (n += " lt-ie8", Mscom.BrowserDetect.version < 7 && (n += " lt-ie7")), $(document.body).addClass(n))
        }
    }), Mscom.Accordion = function(n) {
        this.Control = $("#" + n), this.ItemClass = ".mscom-accordion-item", this.ItemContainerClass = ".mscom-accordion-item-container", this.ItemLinkClass = ".mscom-accordion-item-link", this.AriaExpanded = "aria-expanded", this.AriaSelected = "aria-selected", $($.proxy(this.Init, this))
    }, Mscom.Accordion.prototype = {
        Init: function() {
            this.Control.find("> ul > " + this.ItemClass + " > " + this.ItemLinkClass).click($.proxy(this.ItemClick, this))
        },
        ItemClick: function(n) {
            n.preventDefault();
            var t = $(n.currentTarget),
                i = t.closest(this.ItemClass),
                r = i.children(this.ItemContainerClass);
            r.is(":hidden") ? (r.slideDown(200), Mscom.Helper.BiTrack(n.target, null, 5, 9), i.addClass("selected"), t.attr(this.AriaExpanded, !0).attr(this.AriaSelected, !0)) : (r.slideUp(200), Mscom.Helper.BiTrack(n.target, null, 5, 10), i.removeClass("selected"), t.attr(this.AriaExpanded, !1).attr(this.AriaSelected, !1))
        }
    }, MSCom = MSCom || {}, MSCom.CMS = MSCom.CMS || {}, MSCom.CMS.LocalePickerLinkControl = {
        CookieName: "mslocale",
        CookieExpirationDays: 45,
        toggleLocaleFlyout: function(n) {
            $(".mscom-locale-flyout").is(":visible") ? (Mscom.Helper.BiTrack(n, null, 5, 10), $(".pagebody").show(), $(".mscom-locale-flyout").hide()) : (Mscom.Helper.BiTrack(n, null, 5, 9), $(".pagebody").hide(), $(".mscom-locale-flyout").show()), $("html").animate({
                scrollTop: 0
            }, "200")
        },
        SetCookie: function(n) {
            var f = MSCom.CMS.LocalePickerLinkControl.CookieName,
                h = MSCom.CMS.LocalePickerLinkControl.CookieExpirationDays,
                u = {},
                t = "",
                e, i, o, r, s;
            document.cookie.length > 0 && document.cookie.indexOf(f + "=") != -1 && (t = document.cookie.substr(document.cookie.indexOf(f + "=") + f.length + 1), t.indexOf(";") > 0 && (t = t.substring(0, t.indexOf(";"))), t = t.replace(/\|/g, ","), t = t.replace(/'/g, '"'), typeof JSON != "undefined" && (u = JSON.parse(t))), u.u = n, e = new Date, e.setDate(e.getDate() + h), typeof JSON != "undefined" ? i = JSON.stringify(u) : t.length == 0 ? i = '{"u":"' + u.u + '"}' : t.indexOf('"u":') == -1 ? (o = '{"u":"' + u.u + '",', i = t.replace("{", o)) : (o = '"u":"' + u.u + '"', r = t.substr(t.indexOf('"u":')), r = r.indexOf(",") != -1 ? r.substring(0, r.indexOf(",")) : r.substring(0, r.length - 1), i = t.replace(r, o)), i = i.replace(/"/g, "'"), i = i.replace(/,/g, "|"), s = f + "=" + i + ";expires=" + e.toUTCString() + ";path=/", msccSetCookie(s)
        },
        bindLocaleLinks: function(n) {
            var t = $(".mscom-locale-flyout a");
            t.bind("click", function(t) {
                var i, r, u;
                t.preventDefault(), i = $(this).attr("bi:locale"), n(i), r = "/" + Mscom.ContentLocale + "/", u = location.pathname.contains(r) ? location.pathname.replace(r, "/" + i + "/") : "/" + i + location.pathname, document.location.href = u + window.location.search
            })
        },
        localePickerhandler: function(n) {
            var r, i, t;
            if (typeof this.fragmentloaded == "undefined") {
                r = this, this.fragmentloaded = !1, i = $(".mscom-locale-flyout .mscom-ajax-contentinclude").attr("id"), t = MSCom.CMS.Mashup.ContentIncludes["_" + i] = new MSCom.CMS.Mashup.ContentInclude2($("#" + i)), t.handler = this, t.Control = n.delegateTarget;
                var u = this.bindLocaleLinks,
                    f = this.toggleLocaleFlyout,
                    e = this.SetCookie;
                t.render(function() {
                    u(e), f(n.delegateTarget), r.fragmentloaded = !0
                })
            } else if (this.fragmentloaded === !0) this.toggleLocaleFlyout(n.delegateTarget);
            else return;
            n.preventDefault()
        }
    }, $(function() {
        $(".pagebody").length > 0 && $(".mscom-locale-flyout .mscom-ajax-contentinclude").length > 0 && $(".mscom-footer-localepicker a").bind("click", function(n) {
            MSCom.CMS.LocalePickerLinkControl.localePickerhandler(n)
        })
    }), MSCom = MSCom || {}, MSCom.CMS = MSCom.CMS || {}, MSCom.CMS.Mashup = MSCom.CMS.Mashup || {}, MSCom.CMS.Mashup.ContentInclude = function(n, t, i, r, u, f, e, o) {
        e || (e = ""), this._url = n ? n + "/api/controls/contentinclude/" + e : window.location.protocol + "//" + window.location.host + "/api/controls/contentinclude/" + e, this._collection = getQueryValue(window.location.href, "CollectionId"), this._locale = i, this._pageId = t, this._ppaId = r, this._controlAttributeMapping = u, this._siteContextName = f, this._action = e, this._query = o
    }, MSCom.CMS.Mashup.ContentInclude.prototype = {
        render: function(n) {
            var t, i;
            this._divToRender = n, t = this._url + "?locale=" + this._locale + "&pageId=" + this._pageId + "&site=" + this._siteContextName, this._collection && (t += "&CollectionId=" + this._collection), this._ppaId && (t += "&ProgrammableContentArea=" + this._ppaId);
            for (i in this._query) t += "&" + i + "=" + this._query[i];
            $.ajax({
                type: "POST",
                url: t,
                data: {
                    controlAttributeMapping: this._controlAttributeMapping
                },
                xhrFields: {
                    withCredentials: !0
                },
                success: function(t) {
                    t != null && $(n).html(t)
                }
            })
        }
    }, MSCom = MSCom || {}, MSCom.CMS = MSCom.CMS || {}, MSCom.CMS.Mashup = MSCom.CMS.Mashup || {}, MSCom.CMS.Mashup.ContentIncludes = MSCom.CMS.Mashup.ContentIncludes || {}, MSCom.CMS.Mashup.ContentInclude2 = function(n, t, i) {
        i || (i = "html"), this._locale = n.attr("data-urllocale"), this._url = t ? t + "/" + this._locale + "/api/controls/contentinclude/" + i : window.location.protocol + "//" + window.location.host + "/" + this._locale + "/api/controls/contentinclude/" + i, this._collection = this.getQueryValue(window.location.href, "CollectionId"), this._pageId = n.attr("data-defaultPageId"), this._ppaId = n.attr("data-ProgrammableContentArea"), this._host = n.attr("data-Host"), this._hostsegments = n.attr("data-host-segments"), this._hostquery = n.attr("data-host-querystring"), this._controlAttributeMapping = n.attr("data-ControlAttributesMapping"), this._action = i;
        var r = n.attr("data-ajaxQuery");
        r && (this._query = JSON.parse(r)), this._divToRender = "#" + n.attr("id")
    }, MSCom.CMS.Mashup.ContentInclude2.prototype = {
        getQueryValue: function(n, t) {
            var r = new RegExp("[\\?&]" + t + "=([^&#]*)", "gi"),
                i = r.exec(n);
            return i == null ? "" : decodeURIComponent(i[1].replace(/\+/g, " "))
        },
        render: function(n) {
            var r = this._divToRender,
                t = this._url + "?pageId=" + this._pageId + "&host=" + this._host + "&segments=" + this._hostsegments + "&query=" + this._hostquery,
                i;
            this._collection && (t += "&CollectionId=" + this._collection), this._ppaId && (t += "&ProgrammableContentArea=" + this._ppaId);
            for (i in this._query) t += "&" + i + "=" + this._query[i];
            $.ajax({
                type: "POST",
                url: t,
                data: {
                    controlAttributeMapping: this._controlAttributeMapping
                },
                xhrFields: {
                    withCredentials: !0
                },
                success: function(t) {
                    t != null && ($(r).html(t), n && n())
                }
            })
        }
    }, $(document).ready(function() {
        $(".euCookie .mscom-alert-close").click(function(n) {
            n.preventDefault(), $(".euCookie").hide(), Mscom.Helper.setCookie("euCookie", 1, 365 / 2, "/", "microsoft.com"), Mscom.Helper.BiTrack(n.target, null, 5, 10)
        })
    }), Mscom.Header = function(n) {
        this.Control = $("#" + n), this.navToggleClass = ".mscom-header-navtogglelink", this.searchToggleClass = ".mscom-header-searchtogglelink", this.searchSectionClass = ".mscom-header-search-section", this.navSectionClass = ".mscom-header-nav-section", $($.proxy(this.Ready, this))
    }, Mscom.Header.prototype = {
        Ready: function() {
            this.Control.find(this.searchToggleClass).click($.proxy(this.SearchToggle, this)), this.Control.find(this.navToggleClass).click($.proxy(this.NavToggle, this))
        },
        SearchToggle: function(n) {
            n.preventDefault(), $(this.searchSectionClass).is(":hidden") ? ($(this.searchSectionClass).slideDown(200), Mscom.Helper.BiTrack(n.currentTarget, "SearchToogle", 5, 9)) : ($(this.searchSectionClass).slideUp(200), Mscom.Helper.BiTrack(n.currentTarget, "SearchToogle", 5, 10))
        },
        NavToggle: function(n) {
            n.preventDefault(), $(this.navSectionClass).is(":hidden") ? ($(this.navSectionClass).slideDown(200), Mscom.Helper.BiTrack(n.currentTarget, "NavToogle", 5, 9)) : ($(this.navSectionClass).slideUp(200), Mscom.Helper.BiTrack(n.currentTarget, "NavToogle", 5, 10))
        }
    }, typeof $ != "undefined" && $(function() {
        Mscom && Mscom.Account && new Mscom.Account("divAccountControl")
    }), Mscom.Account = function(n) {
        this.Control = $("#" + n), this._id = n, this.accountViewOneSection = ".mscom-accountcontrol-viewone", this.accountViewOneLinkClass = ".mscom-account-viewonelink", this._itemClass = ".mscom-accountcontrol-container", this._accountClass = ".mscom-account", this._accountLinkClass = ".mscom-account-link", this.Control.find(this._accountLinkClass).click($.proxy(this.ItemClick, this)).keydown($.proxy(this.ItemKeyDown, this)), $(this.accountViewOneLinkClass).click($.proxy(this.ItemViewOneClick, this)), $(document).click($.proxy(this.DocClick, this))
    }, Mscom.Account.prototype = {
        DocClick: function(n) {
            var t = this.Control.find(".selected"),
                i;
            t.size() > 0 && (i = $.contains(t.get(0), n.target), i || this.HideAccounts(n))
        },
        ItemClick: function(n) {
            n.preventDefault(), this.IsAccountVisible(n) ? this.HideAccounts(n) : this.ShowAccount(n)
        },
        ItemViewOneClick: function(n) {
            n.preventDefault(), $(this.accountViewOneSection).is(":hidden") ? ($(this.accountViewOneSection).slideDown(200), Mscom.Helper.BiTrack(n.target, "AccountViewOne", 5, 9)) : ($(this.accountViewOneSection).slideUp(200), Mscom.Helper.BiTrack(n.target, "AccountViewOne", 5, 10))
        },
        ItemKeyDown: function(n) {
            n.which == 9 && n.shiftKey && this.HideAccounts(n)
        },
        IsAccountVisible: function(n) {
            return $(n.target).parents(this._itemClass, this.Control).find(this._accountClass).css("display") != "none"
        },
        ShowAccount: function(n) {
            $(n.target).parents(this._itemClass, this.Control).addClass("selected"), Mscom.Helper.BiTrack(n.target, "Account", 5, 9)
        },
        HideAccounts: function(n) {
            $(n.target).parents(this._itemClass, this.Control).removeClass("selected"), Mscom.Helper.BiTrack(n.target, "Account", 5, 10)
        }
    }, typeof JSON != "object" && (JSON = {}),
    function() {
        "use strict";

        function i(n) {
            return n < 10 ? "0" + n : n
        }

        function o(n) {
            return e.lastIndex = 0, e.test(n) ? '"' + n.replace(e, function(n) {
                var t = s[n];
                return typeof t == "string" ? t : "\\u" + ("0000" + n.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + n + '"'
        }

        function u(i, f) {
            var s, l, h, a, v = n,
                c, e = f[i];
            e && typeof e == "object" && typeof e.toJSON == "function" && (e = e.toJSON(i)), typeof t == "function" && (e = t.call(f, i, e));
            switch (typeof e) {
                case "string":
                    return o(e);
                case "number":
                    return isFinite(e) ? String(e) : "null";
                case "boolean":
                case "null":
                    return String(e);
                case "object":
                    if (!e) return "null";
                    if (n += r, c = [], Object.prototype.toString.apply(e) === "[object Array]") {
                        for (a = e.length, s = 0; s < a; s += 1) c[s] = u(s, e) || "null";
                        return h = c.length === 0 ? "[]" : n ? "[\n" + n + c.join(",\n" + n) + "\n" + v + "]" : "[" + c.join(",") + "]", n = v, h
                    }
                    if (t && typeof t == "object")
                        for (a = t.length, s = 0; s < a; s += 1) typeof t[s] == "string" && (l = t[s], h = u(l, e), h && c.push(o(l) + (n ? ": " : ":") + h));
                    else
                        for (l in e) Object.prototype.hasOwnProperty.call(e, l) && (h = u(l, e), h && c.push(o(l) + (n ? ": " : ":") + h));
                    return h = c.length === 0 ? "{}" : n ? "{\n" + n + c.join(",\n" + n) + "\n" + v + "}" : "{" + c.join(",") + "}", n = v, h
            }
        }
        typeof Date.prototype.toJSON != "function" && (Date.prototype.toJSON = function() {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + i(this.getUTCMonth() + 1) + "-" + i(this.getUTCDate()) + "T" + i(this.getUTCHours()) + ":" + i(this.getUTCMinutes()) + ":" + i(this.getUTCSeconds()) + "Z" : null
        }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
            return this.valueOf()
        });
        var f = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            e = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            n, r, s = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            t;
        typeof JSON.stringify != "function" && (JSON.stringify = function(i, f, e) {
            var o;
            if (n = "", r = "", typeof e == "number")
                for (o = 0; o < e; o += 1) r += " ";
            else typeof e == "string" && (r = e);
            if (t = f, f && typeof f != "function" && (typeof f != "object" || typeof f.length != "number")) throw new Error("JSON.stringify");
            return u("", {
                "": i
            })
        }), typeof JSON.parse != "function" && (JSON.parse = function(n, t) {
            function r(n, i) {
                var f, e, u = n[i];
                if (u && typeof u == "object")
                    for (f in u) Object.prototype.hasOwnProperty.call(u, f) && (e = r(u, f), e !== undefined ? u[f] = e : delete u[f]);
                return t.call(n, i, u)
            }
            var i;
            if (n = String(n), f.lastIndex = 0, f.test(n) && (n = n.replace(f, function(n) {
                    return "\\u" + ("0000" + n.charCodeAt(0).toString(16)).slice(-4)
                })), /^[\],:{}\s]*$/.test(n.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return i = eval("(" + n + ")"), typeof t == "function" ? r({
                "": i
            }, "") : i;
            throw new SyntaxError("JSON.parse");
        })
    }(), window.Mscom === undefined && (window.Mscom = {}), typeof $ != "undefined" && $(function() {
        Mscom && Mscom.Nav && new Mscom.Nav(".mscom-nav")
    }), Mscom.Nav = function(n) {
        this.Control = $(n), this.navFlyoutLinkClass = ".mscom-nav-item-flyout-link", this.navFlyoutClass = ".mscom-nav-flyout", this.navFlyoutItemClass = ".mscom-navitem", $($.proxy(this.Ready, this))
    }, Mscom.Nav.prototype = {
        Ready: function() {
            $(document).click($.proxy(this.DocClick, this)), $("a").focus($.proxy(this.DocClick, this)), this.Control.find(this.navFlyoutLinkClass).click($.proxy(this.navItemClick, this))
        },
        DocClick: function(n) {
            var t = this.Control.find(".selected"),
                i;
            t.size() > 0 && (i = $.contains(t.get(0), n.target), i || this.hideAllFlyout())
        },
        navItemClick: function(n) {
            n.preventDefault(), this.IsFlyoutVisible(n) ? this.hideFlyout(n) : this.showFlyout(n)
        },
        showFlyout: function(n) {
            this.hideAllFlyout(), $(n.target).parents(this.navFlyoutItemClass).addClass("selected"), jQuery.browser.opera || jQuery.browser.msie && document.documentMode <= 7 ? $(n.target).parents(this.navFlyoutItemClass).find(this.navFlyoutClass).show() : $(n.target).parents(this.navFlyoutItemClass).find(this.navFlyoutClass).slideDown(200), Mscom.Helper.BiTrack(n.target, null, 5, 9)
        },
        hideFlyout: function(n) {
            $(n.target).parents(this.navFlyoutItemClass).removeClass("selected"), jQuery.browser.opera || jQuery.browser.msie && document.documentMode <= 7 ? $(n.target).parents(this.navFlyoutItemClass).find(this.navFlyoutClass).hide() : $(n.target).parents(this.navFlyoutItemClass).find(this.navFlyoutClass).slideUp(200), Mscom.Helper.BiTrack(n.target, null, 5, 10)
        },
        hideAllFlyout: function() {
            var n = this.Control.find(".selected"),
                t;
            n.size() > 0 && (t = $(n.get(0)).find(".mscom-link"), Mscom.Helper.BiTrack(t, null, 5, 10)), this.Control.find(this.navFlyoutItemClass).removeClass("selected"), this.Control.find(this.navFlyoutItemClass).find(this.navFlyoutClass).slideUp(200)
        },
        IsFlyoutVisible: function(n) {
            return !$(n.target).parents(this.navFlyoutItemClass).find(this.navFlyoutClass).is(":hidden")
        }
    }, window.Mscom === undefined && (window.Mscom = {}), typeof $ != "undefined" && $(function() {
        if (Mscom && Mscom.Pivot) var n = new Mscom.Pivot(".mscom-pivot-nav"),
            t = new Mscom.PivotTab(".mscom-pivot-tab")
    }), Mscom.Pivot = function(n) {
        this.Control = $(n), this.showItemAlways = !1, this.Control.find(".mscom-pivot-container").hasClass("mscom-pivot-showitemalways") && (this.showItemAlways = !0), this.pivotFlyoutLinkClass = ".mscom-pivot-item-flyout-link", this.pivotFlyoutClass = ".mscom-pivot-flyout", this.pivotFlyoutItemClass = ".mscom-pivot-item", this.pivotContainerClass = ".mscom-pivot-container", $($.proxy(this.Ready, this))
    }, Mscom.Pivot.prototype = {
        Ready: function() {
            this.Control.find(this.pivotFlyoutLinkClass).click($.proxy(this.pivotItemClick, this)), this.showItemAlways || $(document).click($.proxy(this.DocClick, this))
        },
        DocClick: function(n) {
            var i = this.Control.find(".selected"),
                t;
            i.size() > 0 && (t = $.contains(i.get(0), n.target), console.log(t), t || this.hideAllFlyout())
        },
        pivotItemClick: function(n) {
            n.preventDefault(), this.IsFlyoutVisible(n) && !this.showItemAlways ? this.hideFlyout(n) : this.showFlyout(n)
        },
        showFlyout: function(n) {
            this.hideAllFlyout(), $(n.target).parents(this.pivotFlyoutItemClass).addClass("selected"), Mscom.Helper.BiTrack(n.target, null, 5, 9)
        },
        hideFlyout: function(n) {
            $(n.target).parents(this.pivotFlyoutItemClass).removeClass("selected"), Mscom.Helper.BiTrack(n.target, null, 5, 10)
        },
        hideAllFlyout: function() {
            this.Control.find(this.pivotFlyoutItemClass).removeClass("selected")
        },
        IsFlyoutVisible: function(n) {
            return !$(n.target).parents(this.pivotFlyoutItemClass).find(this.pivotFlyoutClass).is(":hidden")
        }
    }, Mscom.PivotTab = function(n) {
        this.Control = $(n), this.showItemAlways = !1, this.Control.find(".mscom-pivot-container").hasClass("mscom-pivot-showitemalways") && (this.showItemAlways = !0), this.pivotFlyoutLinkClass = ".mscom-pivot-item-flyout-link", this.pivotFlyoutClass = ".mscom-pivot-flyout", this.pivotFlyoutItemClass = ".mscom-pivot-item", this.pivotContainerClass = ".mscom-pivot-container", $($.proxy(this.Ready, this))
    }, Mscom.PivotTab.prototype = {
        Ready: function() {
            this.Control.find(this.pivotFlyoutLinkClass).click($.proxy(this.pivotItemClick, this)), !this.showItemAlways
        },
        DocClick: function(n) {
            var t = this.Control.find(".selected"),
                i;
            t.size() > 0 && (i = $.contains(t.get(0), n.target), i || this.hideAllFlyout())
        },
        pivotItemClick: function(n) {
            n.preventDefault(), this.IsFlyoutVisible(n) && !this.showItemAlways ? this.hideFlyout(n) : this.showFlyout(n)
        },
        showFlyout: function(n) {
            Mscom.Helper.BiTrack(n.target, null, 5, 4), this.hideAllFlyout(), $(n.target).addClass("selected"), this.Control.find($(n.target).attr("id").replace("a-", "#")).addClass("selected")
        },
        hideFlyout: function(n) {
            Mscom.Helper.BiTrack(n.target, null, 5, 10), $(n.target).removeClass("selected"), this.Control.find($(n.target).attr("id").replace("a-", "#")).removeClass("selected")
        },
        hideAllFlyout: function() {
            this.Control.find("*").removeClass("selected")
        },
        IsFlyoutVisible: function(n) {
            return $(n.target).hasClass("selected")
        }
    }, Mscom.Popup = function(n) {
        this.Control = $(n), this.CloseOnOutSideClick = this.Control.attr("data-closeonoutsideclick"), this.OpenInteractionType = this.Control.attr("data-openinteractiontype"), this.CloseInteractionType = this.Control.attr("data-closeinteractiontype"), Mscom.Helper.IsValid(this.OpenInteractionType) || (this.OpenInteractionType = 9), Mscom.Helper.IsValid(this.CloseInteractionType) || (this.CloseInteractionType = 10), this.Link = $(this.Control.find(".mscom-popup-link:first")), this.CloseButton = $(this.Control.find(".mscom-popup-close:first")), this.PopupContainer = $(this.Control.find(".mscom-popup-container:first")), this.IsContentIncludeLoaded = !1, this.ContentIncludeCount = 0, $($.proxy(this.Init, this))
    }, Mscom.Popup.prototype = {
        Init: function() {
            this.Link.click($.proxy(this.OpenPopup, this)), this.CloseButton.click($.proxy(this.ClosePopup, this));
            $(document).on("keydown", $.proxy(this.DocumentKeyDown, this));
            this.CloseOnOutSideClick.toLowerCase() == "true" && ($(this.Control.find(".mscom-popup-mask:first")).click($.proxy(this.ClosePopup, this)), navigator.userAgent.match(/iemobile/i) && $(this.Control.find(".mscom-popup-layout:first")).click(function() {}))
        },
        DocumentKeyDown: function(n) {
            n.keyCode === 27 && this.CloseButton.trigger("click")
        },
        GetContenInclude: function() {
            var t = this;
            this.PopupContainer.find(".mscom-ajax-contentinclude").not(this.PopupContainer.find(".mscom-popup .mscom-ajax-contentinclude")).each(function() {
                var n = $(this),
                    i;
                n.html().length === 0 && (t.ContentIncludeCount === 0 && t.showProgressBar(), t.ContentIncludeCount++, i = n.attr("data-defaultpageid"), MSCom.CMS.Mashup.ContentIncludes["_" + i] = new MSCom.CMS.Mashup.ContentInclude2(n), MSCom.CMS.Mashup.ContentIncludes["_" + i].render($.proxy(t.hideProgressBar, t)))
            })
        },
        showProgressBar: function() {
            this.PopupContainer.find(".mscom-popup-content").append("<div class='mscom-progressbar'><div>")
        },
        hideProgressBar: function() {
            this.ContentIncludeCount--, this.ContentIncludeCount === 0 && this.PopupContainer.find(".mscom-progressbar").remove()
        },
        OpenPopup: function(n) {
            n.preventDefault(), Mscom.Helper.BiTrack(n.target, null, 5, this.OpenInteractionType), $("html").css("overflow", "hidden"), this.IsContentIncludeLoaded || (this.IsContentIncludeLoaded = !0, this.GetContenInclude()), this.PopupContainer.addClass("mscom-show-popup"), this.PopupContainer.trigger("popupOpened")
        },
        ClosePopup: function(n) {
            n.preventDefault(), Mscom.Helper.BiTrack(n.target, "close", 5, this.CloseInteractionType), $("html").css("overflow", ""), this.PopupContainer.removeClass("mscom-show-popup"), this.PopupContainer.trigger("popupClosed")
        }
    }, typeof $ != "undefined" && $(function() {
        Mscom && Mscom.Popup && $(".mscom-popup").each(function(n) {
            Mscom.Popup.Popups || (Mscom.Popup.Popups = []), Mscom.Popup.Popups[n] = new Mscom.Popup(this)
        })
    }), Mscom.Search = function(n, t, i, r, u, f, e, o, s, h) {
        this.FadeSpeed = 200, this.watermarkTimer = null, this.dropdownTimer = null, this.IsAutoFocus = f, this.Control = $("#" + n), this.Textbox = this.Control.find(".mscom-search-TextBox"), this.Button = this.Control.find(".mscom-search-Button"), this.Control.find("#" + t).hide(), this.Scopes = u, this.CurrentScope = i, this.Control.find(".mscom-search-Source").val(this.CurrentScope), this.suggestionsRequestedText = "", this.suggestionsRequestedScope = -1, this.CurrentLocale = r, this.WatermarkText = this.Textbox.attr("title"), this.TextboxWidth = this.Textbox.width() + 12, this.processedRequestTime = 0, this.BiTags = o, this.SearchHistoryOptions = {
            EnableSearchHistory: e,
            CookieName: "search-history",
            CookieExpiresDays: 5,
            CookiePath: "/",
            CookieDomain: "microsoft.com",
            MaxCount: 8,
            HideSearchScopes: !0
        }, this.EnableQuickSearch = s, s === !0 && h && $.trim(h.ServiceUrl).length > 0 && h.MaxCount > 0 ? this.QuickSearchFeature = new Mscom.Search.QuickSearchFeature(this, h) : this.EnableQuickSearch = !1, this.CurrentVisibleSearchHistory = [], this.MaxAutoSuggestionCount = 8, this.SearchHistoryContainer = this.Control.find(".mscom-search-history"), this.AutoSuggestionContainer = this.Control.find(".mscom-search-Suggestions"), this.SuggestionBorderStyle = this.AutoSuggestionContainer.css("border-top-width") + " " + this.AutoSuggestionContainer.css("border-top-style") + " " + this.AutoSuggestionContainer.css("border-top-color"), $($.proxy(this.initV3, this))
    }, Mscom.Search.prototype = {
        initV3: function() {
            var n = this,
                t, i;
            this.SearchHistoryOptions.EnableSearchHistory && this.SearchHistoryOptions.HideSearchScopes && this.hideSearchScopes(), this.IsAutoFocus && this.Textbox.get(0).focus(), this.Control.find("#SearchControlForm").submit(function(t) {
                n.SearchClick(t)
            }), this.Control.find(".mscom-search-Button").click(function(t) {
                n.SearchClick(t)
            }), this.Textbox.bind("keydown", function(t) {
                n.textboxKeydown(t)
            }).bind("keyup", function(t) {
                n.textboxKeyup(t)
            }).bind("input", function(t) {
                n.textboxInput(t)
            }).bind("cut paste", function() {
                n.handleCutAndPaste()
            }), window.location.href.indexOf("q=") === -1 ? this.Textbox.val("") : this.lastTypedText = this.Textbox.val();
            this.Control.on("mouseenter", ".mscom-search-Dropdown a", function(t) {
                n.selectDropdownItem($(t.currentTarget), !1)
            });
            this.Control.on("mouseleave", ".mscom-search-Dropdown a", function() {
                n.selectDropdownItem(null, !1)
            });
            t = function() {
                n.dropdownTimer = window.setTimeout(function() {
                    n.Control.find(".mscom-search-Dropdown").slideUp(200)
                }, 200)
            };
            this.Control.on("focus", ".mscom-search-TextBox, .mscom-search-Button, .mscom-search-Dropdown a", $.proxy(n.showDropDown, n));
            this.Control.on("blur", ".mscom-search-TextBox, .mscom-search-Button, .mscom-search-Dropdown a", t);
            this.Control.find(".mscom-search-Sources ul a").click(function(t) {
                n.selectSource($(this)), t.preventDefault()
            }), i = window.attachEvent ? "click" : "mousedown";
            this.Control.on(i, ".mscom-search-Suggestions ul a", function() {
                var t = $(this).text();
                n.Textbox.val(t), n.SearchHistoryOptions.EnableSearchHistory && n.saveSearchHistory(t), n.biTrack()
            });
            if (this.SearchHistoryOptions.EnableSearchHistory) this.SearchHistoryContainer.on("mousedown", "ul a", function() {
                var t = $(this).text();
                n.Textbox.val(t), n.saveSearchHistory(t), n.biTrack()
            })
        },
        showDropDown: function() {
            this.dropdownTimer != null && (window.clearTimeout(this.dropdownTimer), this.dropdownTimer = null), this.Control.find(".mscom-search-Dropdown").slideDown(200), this.SearchHistoryOptions.EnableSearchHistory && this.Textbox.val().length === 0 && this.showSearchHistory("")
        },
        selectSource: function(n) {
            var t, i;
            window.clearTimeout(this.dropdownTimer), this.dropdownTimer = null, t = this.Control.find(".mscom-search-Sources li").index(n.parent("li")), t !== this.CurrentScope && (this.CurrentScope = t, this.Control.find(".mscom-search-Source").val(t), this.Control.find(".mscom-search-Sources li").removeClass("currentScope"), n.parent("li").addClass("currentScope"), i = $.trim(n.text()), this.Textbox.attr("title", i), this.Button.attr("title", i), this.getSuggestions()), this.Textbox.get(0).focus()
        },
        shiftHighlight: function(n, t) {
            var r, u, s, f, e = ".mscom-search-Suggestions a:visible, .mscom-search-history a:visible",
                o = ".mscom-search-Suggestions a.selected, .mscom-search-history a.selected",
                i;
            this.EnableQuickSearch ? (r = this.Control.find(e + ", .quick-search-item:visible"), u = this.Control.find(o + ", .quick-search-item.selected")) : (r = this.Control.find(e), u = this.Control.find(o)), f = u.length ? r.index(u) : t === "down" ? -1 : r.length, i = f, t === "down" ? (i++, i >= r.length && (i = -1)) : t === "up" && (i === 0 ? i = -1 : i--), i !== -1 ? this.selectDropdownItem($(r[i]), !0) : this.selectDropdownItem(null, !1)
        },
        selectDropdownItem: function(n, t) {
            this.Control.find(".mscom-search-Dropdown a").removeClass("selected"), this.Control.find(".mscom-search-Suggestions a, .mscom-search-history a").removeClass("selected"), this.EnableQuickSearch && this.Control.find(".quick-search-item").removeClass("selected"), n ? (n.addClass("selected"), t && (n.closest(".mscom-search-Suggestions").length || this.SearchHistoryOptions.EnableSearchHistory && n.closest(".mscom-search-history").length ? this.Textbox.val(n.text()) : this.restoreLastTypedText())) : this.SearchHistoryOptions.EnableSearchHistory || this.restoreLastTypedText()
        },
        restoreLastTypedText: function() {
            this.Textbox.val(this.lastTypedText)
        },
        textboxInput: function() {
            this.keyDown == !1 && (this.getSuggestions(), this.EnableQuickSearch && this.Textbox.val().length === 0 && this.QuickSearchFeature.clearSuggestions())
        },
        textboxKeydown: function(n) {
            var t, i, r;
            if (this.keyDown || (this.textOnKeydown = this.Textbox.val()), this.keyDown = !0, n.which === 13) {
                if (t = this.Control.find(".mscom-search-Sources a.selected"), t.length && t.closest("li.currentScope").length === 0) {
                    this.selectSource(t), n.preventDefault();
                    return
                }
                if (this.EnableQuickSearch && (i = this.Control.find(".quick-search-item.selected:visible:first"), i.length > 0 && (r = i.attr("url"), r))) {
                    window.location.href = r, n.preventDefault();
                    return
                }
            }
        },
        textboxKeyup: function(n) {
            if (this.keyDown = !1, n.which === 40) return this.shiftHighlight(n, "down"), !1;
            if (n.which === 38) return this.shiftHighlight(n, "up"), !1;
            this.Textbox.val() !== this.textOnKeydown && (this.lastTypedText = this.Textbox.val(), this.IsAutoFocus && this.showDropDown(), this.getSuggestions(), this.SearchHistoryOptions.EnableSearchHistory && this.showSearchHistory(this.Textbox.val()), this.EnableQuickSearch && this.QuickSearchFeature.showSuggestions(this.Textbox.val()))
        },
        handleCutAndPaste: function() {
            var n = this;
            setTimeout(function() {
                n.lastTypedText = n.Textbox.val(), n.getSuggestions()
            }, 0)
        },
        getSuggestions: function() {
            if (this.MaxAutoSuggestionCount > 0) {
                var i = this.leftTrim(this.Textbox.val().replace(/\s+/gi, " ")),
                    t, f, u, n, e, r;
                if (i !== this.suggestionsRequestedText || this.CurrentScope !== this.suggestionsRequestedScope) {
                    this.suggestionsRequestedText = i, this.suggestionsRequestedScope = this.CurrentScope, u = +new Date;
                    try {
                        t = this.Scopes[this.CurrentScope], t.AutoSuggest && i.length >= t.AutoSuggest.MinChars ? (f = this["processSuggestions_" + t.AutoSuggest.ResultType], n = this, e = this.formatAutoSuggestRequest(i, t), r = {
                            success: function(r) {
                                if (u > n.processedRequestTime) {
                                    n.processedRequestTime = u;
                                    var s = n.MaxAutoSuggestionCount;
                                    n.SearchHistoryOptions.EnableSearchHistory && (s = n.calculateMaxAutoSuggestionCount()), s > 0 && f.call(n, r, i, t, s, $.proxy(n.isDuplicate, n))
                                }
                            }
                        }, t.AutoSuggest.JsonpCallbackName ? (r.jsonp = "cb", r.dataType = "jsonp") : r.dataType = "json", $.ajax(e, r)) : (this.processedRequestTime = u, this.hideSuggestions())
                    } catch (o) {}
                }
            }
        },
        processSuggestions_bingJSON: function(n, t, i, r, u) {
            var f, e, o, h = !1,
                s;
            try {
                if (n.AS.Results)
                    for (e = n.AS.Results[0].Suggests, f = 0; f < e.length; ++f)
                        if (e[f].Txt) {
                            h = !0;
                            break
                        }
            } catch (c) {
                return
            }
            if (h) {
                for (this.clearSuggestions(), s = 0, f = 0; f < e.length; ++f)
                    if (o = e[f], o.Txt) {
                        if (u.call(this, o.Txt)) continue;
                        if (this.addSuggestion(o.Txt, this.formatSearchRequest(Mscom.Helper.htmlDecode(o.Txt), i)), s++, s + 1 >= r) break
                    }
                this.showSuggestions()
            } else this.hideSuggestions()
        },
        processSuggestions_smcUnmarkedArray: function(n, t, i, r, u) {
            var f, e, o;
            if (n && n.length > 1) {
                for (this.clearSuggestions(), o = 0, f = 1; f < n.length; ++f)
                    if (!u.call(this, n[f]) && (e = Mscom.Helper.htmlEncode(n[f]), this.addSuggestion(this.highlightQuery(e, t), this.formatSearchRequest(e, i)), o++, o >= r)) break;
                this.showSuggestions()
            } else this.hideSuggestions()
        },
        processSuggestions_apiUnmarkedArray: function(n, t, i, r, u) {
            var f, e, o;
            if (n && n.length > 0) {
                for (this.clearSuggestions(), o = 0, f = 0; f < n.length; ++f)
                    if (!u.call(this, n[f]) && (e = Mscom.Helper.htmlEncode(n[f]), this.addSuggestion(this.highlightQuery(e, t), this.formatSearchRequest(e, i)), o++, o >= r)) break;
                this.showSuggestions()
            } else this.hideSuggestions()
        },
        highlightQuery: function(n, t) {
            var i = n.toLowerCase().indexOf(t.toLowerCase()),
                r = t.length;
            return i === -1 ? n : i === 0 ? n.substr(0, r) + "<strong>" + n.substring(r) + "<\/strong>" : "<strong>" + n.substr(0, i) + "<\/strong>" + n.substr(i, r) + "<strong>" + n.substring(r + i) + "<\/strong>"
        },
        formatAutoSuggestRequest: function(n, t) {
            return this.formatRequest(Mscom.Helper.htmlDecode(t.AutoSuggest.ServiceUrlFormat), n)
        },
        formatSearchRequest: function(n, t) {
            return this.formatRequest(t.SearchUrlFormat, n)
        },
        formatRequest: function(n, t) {
            return n.replace(/\{0\}/g, encodeURIComponent(t)).replace(/\{1\}/g, encodeURIComponent(this.CurrentLocale))
        },
        clearSuggestions: function() {
            this.Control.find(".mscom-search-Suggestions ul").html("")
        },
        addSuggestion: function(n, t) {
            this.Control.find(".mscom-search-Suggestions ul").append("<li><a href='" + t.replace(/'/g, "&#39;") + "' tabindex='-1' bi:track='false'><span class='mscom-search-Text'>" + n + "<\/span><\/a><\/li>")
        },
        fixDropdownContentOldIE: function(n) {
            var u, t, i, r;
            $.browser.msie && parseInt($.browser.version) <= 7 && (u = this, setTimeout(function() {
                t = u.Control.find(n), r = t.css("display"), t.css("display", ""), t.css("display", r), i = u.Control.find(".mscom-search-Sources"), r = i.css("display"), i.css("display", ""), i.css("display", r)
            }, 1))
        },
        hideSuggestions: function() {
            var n = this;
            this.AutoSuggestionContainer.slideUp(200, function() {
                n.fixDropdownContentOldIE(".mscom-search-Suggestions"), n.AutoSuggestionContainer.find("a.selected").removeClass("selected"), (n.SearchHistoryOptions.EnableSearchHistory || n.EnableQuickSearch) && n.updateBorderStyle()
            })
        },
        showSuggestions: function() {
            var n = this;
            this.AutoSuggestionContainer.slideDown(200, function() {
                n.fixDropdownContentOldIE(".mscom-search-Suggestions"), (n.SearchHistoryOptions.EnableSearchHistory || n.EnableQuickSearch) && (n.restrictSuggestionItemsDisplayCount(), n.updateBorderStyle())
            })
        },
        shiftFocus: function() {
            window.setTimeout($.proxy(function() {
                this.Textbox.get(0).focus()
            }, this), 0)
        },
        IsSuggestionsServiceEnabled: function() {
            var n;
            return n = location.protocol.toString().toLowerCase() == "http:" ? !0 : !1
        },
        getSearchHistory: function() {
            var n = Mscom.Helper.getCookie(this.SearchHistoryOptions.CookieName, null);
            return Mscom.Helper.IsValid(n) ? JSON.parse(n) : []
        },
        reorderSearchHistory: function(n) {
            var t = this.getSearchHistory(),
                i = $.inArray(n, t);
            return i === 0 ? t : (i > 0 ? (t.splice(i, 1), t.splice(0, 0, n)) : (t.splice(0, 0, n), t.length >= this.SearchHistoryOptions.MaxCount && (t.length = this.SearchHistoryOptions.MaxCount)), t)
        },
        filterSearchHistory: function(n) {
            var i = [],
                r = this.getSearchHistory(),
                t;
            if (Mscom.Helper.IsValid(n)) {
                for (t = 0; t < r.length; t++)
                    if (r[t].indexOf(n) === 0 && (i.push(r[t]), i.length >= this.SearchHistoryOptions.MaxCount)) break
            } else i = r;
            return i
        },
        saveSearchHistory: function(n) {
            if (Mscom.Helper.IsValid(n)) {
                n = $.trim(n.replace(/\s+/gi, " "));
                var t = this.reorderSearchHistory(n),
                    i = JSON.stringify(t);
                Mscom.Helper.setCookie(this.SearchHistoryOptions.CookieName, i, this.SearchHistoryOptions.CookieExpiresDays, this.SearchHistoryOptions.CookiePath, this.SearchHistoryOptions.CookieDomain)
            }
        },
        clearSearchHistory: function() {
            this.SearchHistoryContainer.find("ul").html("")
        },
        addSearchHistory: function(n, t) {
            this.SearchHistoryContainer.find("ul").append("<li><a href='" + t.replace(/'/g, "&#39;") + "' tabindex='-1' bi:track='false'><span class='mscom-search-Text'>" + n + "<\/span><\/a><\/li>")
        },
        hideSearchHistory: function() {
            var n = this;
            this.clearSearchHistory(), this.SearchHistoryContainer.slideUp(200, function() {
                n.fixDropdownContentOldIE(".mscom-search-history"), $(this).find("a.selected").removeClass("selected")
            })
        },
        hideSearchScopes: function() {
            var n = this.Control.find(".mscom-search-Sources");
            n.hide(), this.updateBorderStyle()
        },
        updateBorderStyle: function() {
            var i = this.Control.find(".mscom-search-Sources").is(":visible"),
                t, n;
            this.Control.find(".mscom-search-suggestion-container").css({
                "border-bottom": "none",
                "border-top": "none"
            }), this.Control.find(".mscom-search-suggestion-container:visible:last").css({
                "border-bottom": i ? "none" : this.SuggestionBorderStyle,
                "border-top": "none"
            }), this.Control.find(".mscom-search-suggestion-container:visible:first").css("border-top", this.SuggestionBorderStyle), this.EnableQuickSearch && (t = !1, n = this.Control.find(".mscom-search-suggestion-container:visible"), n.length === 1 && n.hasClass("mscom-search-quick-search") && (t = !0), t && n.find(".quick-search-item:last").css("border-bottom", "none"))
        },
        showSearchHistory: function(n) {
            var i;
            n = $.trim(n.replace(/\s+/gi, " "));
            var u = this,
                f, t, e = this.Scopes[this.CurrentScope],
                r = this.filterSearchHistory(n);
            if (this.CurrentVisibleSearchHistory.length = 0, r && r.length > 0) {
                for (this.clearSearchHistory(), i = 0; i < r.length; i++)
                    if (t = Mscom.Helper.htmlEncode(r[i]), f = n.length > 0 ? this.highlightQuery(t, n) : t, this.addSearchHistory(f, this.formatSearchRequest(t, e)), this.CurrentVisibleSearchHistory.push(t), i + 1 >= this.SearchHistoryOptions.MaxCount) break;
                this.SearchHistoryContainer.slideDown(200, function() {
                    u.restrictSuggestionItemsDisplayCount(), u.updateBorderStyle(), u.fixDropdownContentOldIE(".mscom-search-history")
                })
            } else this.hideSearchHistory()
        },
        calculateMaxAutoSuggestionCount: function() {
            var n = 0,
                t = this.getVisibleSearchHistoryCount();
            return t < this.SearchHistoryOptions.MaxCount && (n = this.SearchHistoryOptions.MaxCount - t), n
        },
        getVisibleSearchHistoryCount: function() {
            return this.SearchHistoryContainer.find("ul li").length
        },
        isDuplicate: function(n) {
            return this.SearchHistoryOptions.EnableSearchHistory ? $.inArray(n, this.CurrentVisibleSearchHistory) !== -1 : !1
        },
        leftTrim: function(n) {
            return n.replace(/^\s+/, "")
        },
        restrictSuggestionItemsDisplayCount: function() {
            var t, n;
            if (this.EnableQuickSearch && (t = this.Control.find(".mscom-search-suggestion-container:visible > ul li").length, t > this.MaxAutoSuggestionCount)) {
                var u = t - this.MaxAutoSuggestionCount,
                    i = this.Control.find(".mscom-search-history:visible > ul li, .mscom-search-Suggestions:visible > ul li"),
                    r = 0;
                for (n = i.length - 1; n >= 0; n--)
                    if ($(i[n]).remove(), r++, r >= u) break;
                this.Control.find(".mscom-search-suggestion-container").each(function() {
                    var n = $(this);
                    n.find("> ul li").length === 0 && n.hide()
                })
            }
        },
        SearchClick: function(n) {
            n.preventDefault();
            var r = this.Scopes[this.CurrentScope],
                i, t = $.trim(this.Control.find(".mscom-search-TextBox").val());
            t.length ? (this.SearchHistoryOptions.EnableSearchHistory && this.saveSearchHistory(t), i = Mscom.Helper.htmlDecode(r.SearchUrlFormat).replace(/\{0\}/g, encodeURIComponent(t)).replace(/\{1\}/g, encodeURIComponent(this.CurrentLocale)), window.location = i, this.biTrack(n)) : this.Textbox.get(0).focus()
        },
        biTrack: function() {
            var i, r;
            if ($.bi) {
                var f = this.Control.find("form"),
                    u = this.Control.find(".mscom-search-TextBox").val(),
                    t = $.bi.getLinkData(f);
                if (t.interactiontype = 3, t.cot = 4, t.title = "searchbtn", t.searchtype = "MSCOM", t.searchquery = u, t.linkid = "searchmscomclick", t["wcs.cn"] = "searchbtn", t.priorterm = u, t["wcs.ct"] = window.location.href, Mscom.Helper.IsValid(this.BiTags)) {
                    i = JSON.parse(this.BiTags);
                    for (r in i) t[r] = i[r]
                }
                $.bi.record(t)
            }
        }
    }, Mscom.Search.QuickSearchFeature = function(n, t) {
        this.Options = {
            MaxCount: 3,
            MaxDescriptionLength: 100,
            ContainerSelector: ".mscom-search-quick-search"
        }, $.extend(this.Options, t), this.Container = n.Control.find(this.Options.ContainerSelector), this.QuickSearchList = this.Container.find(".quick-search-list"), this.SearchInstance = n, this.LatestRequestUrl = "", this.Options.DeeplinksMapping = [{
            MetaKey: "BuyUrl",
            DisplayText: this.Options.Deeplinks.BuyLinkText
        }, {
            MetaKey: "SupportUrl",
            DisplayText: this.Options.Deeplinks.SupportLinkText
        }, {
            MetaKey: "InstallUrl",
            DisplayText: this.Options.Deeplinks.InstallLinkText
        }, {
            MetaKey: "DownloadUrl",
            DisplayText: this.Options.Deeplinks.DownloadLinkText
        }], $($.proxy(this.init, this))
    }, Mscom.Search.QuickSearchFeature.prototype = {
        init: function() {
            this.Container.on("click", ".mscom-search-quick-search .quick-search-item", function(n) {
                var t = $(n.target),
                    i = $(this).attr("url");
                t.is("a") || (window.location.href = i, n.preventDefault())
            });
            $.ajaxPrefilter(function(n, t, i) {
                i.originalUrl = t.url
            })
        },
        showSuggestions: function(n) {
            if (n = this.SearchInstance.leftTrim(n.replace(/\s+/gi, " ")), this.Options.MaxCount <= 0 || n.length === 0 || this.Options.ServiceUrl.length === 0) {
                this.clearSuggestions(), this.hideSuggestions();
                return
            }
            var r, t, i, u;
            that = this, r = +new Date, u = this.SearchInstance.Scopes[this.SearchInstance.CurrentScope];
            try {
                t = this.SearchInstance.formatRequest(Mscom.Helper.htmlDecode(this.Options.ServiceUrl), n), this.LatestRequestUrl = t, i = {
                    url: t,
                    jsonp: "cb",
                    dataType: "jsonp",
                    success: function(n, t, i) {
                        if (i.originalUrl && i.originalUrl === that.LatestRequestUrl) {
                            var r = $.trim(that.SearchInstance.Textbox.val());
                            that.processResponse(r, n)
                        }
                    }
                }, $.ajax(t, i)
            } catch (f) {}
        },
        processResponse: function(n, t) {
            var i, v, c, l, f, s, e, a, r, o, u, h;
            if (this.clearSuggestions(), this.Options.MaxCount > 0 && n.length > 0 && t && t.ResultSets && t.ResultSets.length > 0 && t.ResultSets[0].Results.length > 0) {
                if (e = this, a = this.SearchInstance.Scopes[this.SearchInstance.CurrentScope], n.length < a.AutoSuggest.MinChars) return;
                for (r = 0; r < t.ResultSets[0].Results.length; r++) {
                    if (i = t.ResultSets[0].Results[r], l = Mscom.Helper.htmlEncode(i.Title), f = this.truncateStringWithEllipsis(Mscom.Helper.htmlEncode(i.Description), this.Options.MaxDescriptionLength), c = i.Url, s = [], this.Options.DeeplinksMapping && this.Options.DeeplinksMapping.length > 0)
                        for (o = 0; o < this.Options.DeeplinksMapping.length; o++)(u = this.Options.DeeplinksMapping[o], $.trim(u.MetaKey).length != 0 && $.trim(u.DisplayText).length != 0) && (h = this.getMetaValue(i.Metas, u.MetaKey), $.trim(h).length > 0 && s.push({
                            Url: h,
                            DisplayText: u.DisplayText
                        }));
                    if (n.length > 0 && (f = f.replace(new RegExp("(" + n + ")", "gi"), "<strong>$1<\/strong>")), this.addSuggestionItem({
                            Title: l,
                            Url: c,
                            ImageUrl: this.getMetaValue(i.Metas, "ImageUrl"),
                            Description: f,
                            DeepLinks: s
                        }), r + 1 >= this.Options.MaxCount) break
                }
                this.Container.slideDown(200, function() {
                    e.SearchInstance.restrictSuggestionItemsDisplayCount(), e.SearchInstance.updateBorderStyle(), e.SearchInstance.fixDropdownContentOldIE(".mscom-search-quick-search")
                })
            } else this.hideSuggestions()
        },
        getMetaValue: function(n, t) {
            var i, r;
            if (n)
                for (i = 0; i < n.length; i++)
                    if (r = n[i], r.Key.toLowerCase() === t.toLowerCase()) return Mscom.Helper.htmlEncode(r.Value);
            return ""
        },
        hideSuggestions: function() {
            var n = this;
            this.Container.slideUp(200, function() {
                n.SearchInstance.updateBorderStyle()
            })
        },
        clearSuggestions: function() {
            this.QuickSearchList.html(""), this.SearchInstance.updateBorderStyle()
        },
        addSuggestionItem: function(n) {
            var t = "",
                i, r, u, f;
            if (n.DeepLinks.length > 0) {
                for (r = 0; r < n.DeepLinks.length; r++) i = n.DeepLinks[r], t += '<li><a title="' + i.DisplayText + '" href="' + i.Url + '">' + i.DisplayText + "<\/a><\/li>";
                t = '<ul class="quick-search-links">' + t + "<\/ul>"
            }
            u = "<img " + (n.ImageUrl.length > 0 ? "" : ' class="error"') + ' onerror="$(this).addClass(\'error\');" src="' + n.ImageUrl + '" alt="' + n.Title + '"/>', f = '<li><div class="quick-search-item" url="' + n.Url + '"><div class="quick-search-thumbnail">' + u + '<\/div><div class="quick-search-caption"><h3>' + n.Title + "<\/h3><p>" + n.Description + "<\/p>" + t + "<\/div><\/div><\/li>", this.QuickSearchList.append(f)
        },
        truncateStringWithEllipsis: function(n, t) {
            var i = n;
            return n.length > t && (i = i.substr(0, t) + "..."), i
        }
    }, $(window).load(function() {
        var n = window.attachEvent ? "click" : "mousedown",
            t;
        n == "mousedown" && typeof("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch) != "undefined" && (n += " touchstart");
        $(".heroitem .box, .heroitem .text, .heroitem .text-container").on("click", function(n) {
            if (n.target.tagName.toLowerCase() != "a") {
                n.stopPropagation();
                var t = $(this).parents(".heroitem").first().find("a").first();
                t.size() > 0 && (t.trigger("click"), window.location = t.attr("href"))
            }
        });
        if (!window.attachEvent) $(".heroitem .box").on(n, function(n) {
            if (n.target.tagName.toLowerCase() != "a") {
                n.stopPropagation();
                var t = $(this).parents(".heroitem").first().find("a").first();
                t.size() > 0 && t.eq(0).trigger(n.type)
            }
        });
        $(".heroitem .media a").on(n, function() {
            if ($.bi && !this.touchflag) {
                this.touchflag = !0;
                var i = $.bi.getLinkData(this),
                    t = $(this).parents(".heroitem").find(".box .box-title").text();
                t == "" && (t = $(this).find("img").attr("alt")), i.title = t, i["wcs.cn"] = t, $.bi.record(i)
            }
        });
        t = function(n) {
            var t;
            t = n ? $(".slideshow-hero .slides > li:eq(" + n + ") .heroitem") : $(".slideshow-hero .slides > li .heroitem:visible").eq(0), t.hasClass("light-foreground") ? $(".prev-next").addClass("light-foreground") : $(".prev-next").removeClass("light-foreground")
        }, $.each($(".slideshow .slides"), function(n, i) {
            $(i).responsiveSlideshow({
                speed: 4500,
                sliderIndex: n,
                rootSelector: ".slideshow",
                controlNav: $(i).children().length > 1 ? ".slideshow .navigation" : null,
                directionNav: ".slideshow .prev-next",
                init: function() {
                    $(".heroitem.dark-foreground").removeClass("light-foreground"), t()
                },
                between: t
            })
        })
    }), window.Modernizr = function(n, t, i) {
        function k(n) {
            nt.cssText = n
        }

        function o(n, t) {
            return typeof n === t
        }

        function ft(n, t) {
            return !!~("" + n).indexOf(t)
        }

        function d(n, t) {
            var u, r;
            for (u in n)
                if (r = n[u], !ft(r, "-") && nt[r] !== i) return t == "pfx" ? r : !0;
            return !1
        }

        function et(n, t, r) {
            var f, u;
            for (f in n)
                if (u = t[n[f]], u !== i) return r === !1 ? n[f] : o(u, "function") ? u.bind(r || t) : u;
            return !1
        }

        function e(n, t, i) {
            var r = n.charAt(0).toUpperCase() + n.slice(1),
                u = (n + " " + it.join(r + " ") + r).split(" ");
            return o(t, "string") || o(t, "undefined") ? d(u, t) : (u = (n + " " + rt.join(r + " ") + r).split(" "), et(u, t, i))
        }
        var ot = "2.6.2",
            r = {},
            v = !0,
            f = t.documentElement,
            s = "modernizr",
            g = t.createElement(s),
            nt = g.style,
            st, ht = {}.toString,
            y = " -webkit- -moz- -o- -ms- ".split(" "),
            tt = "Webkit Moz O ms",
            it = tt.split(" "),
            rt = tt.toLowerCase().split(" "),
            ut = {
                svg: "http://www.w3.org/2000/svg"
            },
            u = {},
            ct = {},
            lt = {},
            p = [],
            w = p.slice,
            h, c = function(n, i, r, u) {
                var l, a, c, v, e = t.createElement("div"),
                    h = t.body,
                    o = h || t.createElement("body");
                if (parseInt(r, 10))
                    while (r--) c = t.createElement("div"), c.id = u ? u[r] : s + (r + 1), e.appendChild(c);
                return l = ["&#173;", '<style id="s', s, '">', n, "<\/style>"].join(""), e.id = s, (h ? e : o).innerHTML += l, o.appendChild(e), h || (o.style.background = "", o.style.overflow = "hidden", v = f.style.overflow, f.style.overflow = "hidden", f.appendChild(o)), a = i(e, n), h ? e.parentNode.removeChild(e) : (o.parentNode.removeChild(o), f.style.overflow = v), !!a
            },
            b = {}.hasOwnProperty,
            l, a;
        l = !o(b, "undefined") && !o(b.call, "undefined") ? function(n, t) {
            return b.call(n, t)
        } : function(n, t) {
            return t in n && o(n.constructor.prototype[t], "undefined")
        }, Function.prototype.bind || (Function.prototype.bind = function(n) {
            var t = this,
                i, r;
            if (typeof t != "function") throw new TypeError;
            return i = w.call(arguments, 1), r = function() {
                var f, e, u;
                return this instanceof r ? (f = function() {}, f.prototype = t.prototype, e = new f, u = t.apply(e, i.concat(w.call(arguments))), Object(u) === u ? u : e) : t.apply(n, i.concat(w.call(arguments)))
            }, r
        }), u.flexbox = function() {
            return e("flexWrap")
        }, u.canvas = function() {
            var n = t.createElement("canvas");
            return !!n.getContext && !!n.getContext("2d")
        }, u.touch = function() {
            var i;
            return "ontouchstart" in n || n.DocumentTouch && t instanceof DocumentTouch ? i = !0 : c(["@media (", y.join("touch-enabled),("), s, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(n) {
                i = n.offsetTop === 9
            }), i
        }, u.backgroundsize = function() {
            return e("backgroundSize")
        }, u.cssanimations = function() {
            return e("animationName")
        }, u.csstransforms = function() {
            return !!e("transform")
        }, u.csstransforms3d = function() {
            var n = !!e("perspective");
            return n && "webkitPerspective" in f.style && c("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(t) {
                n = t.offsetLeft === 9 && t.offsetHeight === 3
            }), n
        }, u.csstransitions = function() {
            return e("transition")
        }, u.fontface = function() {
            var n;
            return c('@font-face {font-family:"font";src:url("https://")}', function(i, r) {
                var f = t.getElementById("smodernizr"),
                    u = f.sheet || f.styleSheet,
                    e = u ? u.cssRules && u.cssRules[0] ? u.cssRules[0].cssText : u.cssText || "" : "";
                n = /src/i.test(e) && e.indexOf(r.split(" ")[0]) === 0
            }), n
        }, u.video = function() {
            var i = t.createElement("video"),
                n = !1;
            try {
                (n = !!i.canPlayType) && (n = new Boolean(n), n.ogg = i.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = i.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = i.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
            } catch (r) {}
            return n
        }, u.audio = function() {
            var i = t.createElement("audio"),
                n = !1;
            try {
                (n = !!i.canPlayType) && (n = new Boolean(n), n.ogg = i.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = i.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = i.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (i.canPlayType("audio/x-m4a;") || i.canPlayType("audio/aac;")).replace(/^no$/, ""))
            } catch (r) {}
            return n
        }, u.svg = function() {
            return !!t.createElementNS && !!t.createElementNS(ut.svg, "svg").createSVGRect
        }, u.inlinesvg = function() {
            var n = t.createElement("div");
            return n.innerHTML = "<svg/>", (n.firstChild && n.firstChild.namespaceURI) == ut.svg
        };
        for (a in u) l(u, a) && (h = a.toLowerCase(), r[h] = u[a](), p.push((r[h] ? "" : "no-") + h));
        return r.addTest = function(n, t) {
            if (typeof n == "object")
                for (var u in n) l(n, u) && r.addTest(u, n[u]);
            else {
                if (n = n.toLowerCase(), r[n] !== i) return r;
                t = typeof t == "function" ? t() : t, typeof v != "undefined" && v && (f.className += " " + (t ? "" : "no-") + n), r[n] = t
            }
            return r
        }, k(""), g = st = null, r._version = ot, r._prefixes = y, r._domPrefixes = rt, r._cssomPrefixes = it, r.testProp = function(n) {
            return d([n])
        }, r.testAllProps = e, r.testStyles = c, f.className = f.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (v ? " js " + p.join(" ") : ""), r
    }(this, this.document),
    function(n, t) {
        function c(n, t) {
            var i = n.createElement("p"),
                r = n.getElementsByTagName("head")[0] || n.documentElement;
            return i.innerHTML = "x<style>" + t + "<\/style>", r.insertBefore(i.lastChild, r.firstChild)
        }

        function u() {
            var n = i.elements;
            return typeof n == "string" ? n.split(" ") : n
        }

        function f(n) {
            var t = p[n[y]];
            return t || (t = {}, h++, n[y] = h, p[h] = t), t
        }

        function l(n, i, u) {
            if (i || (i = t), r) return i.createElement(n);
            u || (u = f(i));
            var e;
            return e = u.cache[n] ? u.cache[n].cloneNode() : it.test(n) ? (u.cache[n] = u.createElem(n)).cloneNode() : u.createElem(n), e.canHaveChildren && !tt.test(n) ? u.frag.appendChild(e) : e
        }

        function w(n, i) {
            if (n || (n = t), r) return n.createDocumentFragment();
            i = i || f(n);
            for (var o = i.frag.cloneNode(), e = 0, s = u(), h = s.length; e < h; e++) o.createElement(s[e]);
            return o
        }

        function b(n, t) {
            t.cache || (t.cache = {}, t.createElem = n.createElement, t.createFrag = n.createDocumentFragment, t.frag = t.createFrag()), n.createElement = function(r) {
                return i.shivMethods ? l(r, n, t) : t.createElem(r)
            }, n.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + u().join().replace(/\w+/g, function(n) {
                return t.createElem(n), t.frag.createElement(n), 'c("' + n + '")'
            }) + ");return n}")(i, t.frag)
        }

        function a(n) {
            n || (n = t);
            var u = f(n);
            return i.shivCSS && !s && !u.hasCSS && (u.hasCSS = !!c(n, "article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}")), r || b(n, u), n
        }

        function k(n) {
            for (var t, i = n.getElementsByTagName("*"), r = i.length, e = RegExp("^(?:" + u().join("|") + ")$", "i"), f = []; r--;) t = i[r], e.test(t.nodeName) && f.push(t.applyElement(d(t)));
            return f
        }

        function d(n) {
            for (var t, r = n.attributes, u = r.length, i = n.ownerDocument.createElement(e + ":" + n.nodeName); u--;) t = r[u], t.specified && i.setAttribute(t.nodeName, t.nodeValue);
            return i.style.cssText = n.style.cssText, i
        }

        function g(n) {
            for (var t, i = n.split("{"), r = i.length, f = RegExp("(^|[\\s,>+~])(" + u().join("|") + ")(?=[[\\s,>+~#.:]|$)", "gi"), o = "$1" + e + "\\:$2"; r--;) t = i[r] = i[r].split("}"), t[t.length - 1] = t[t.length - 1].replace(f, o), i[r] = t.join("}");
            return i.join("{")
        }

        function nt(n) {
            for (var t = n.length; t--;) n[t].removeNode()
        }

        function v(n) {
            function r() {
                clearTimeout(i._removeSheetTimer), t && t.removeNode(!0), t = null
            }
            var t, u, i = f(n),
                o = n.namespaces,
                s = n.parentWindow;
            return !ut || n.printShived ? n : (typeof o[e] == "undefined" && o.add(e), s.attachEvent("onbeforeprint", function() {
                r();
                for (var o, s, f, l = n.styleSheets, e = [], i = l.length, h = Array(i); i--;) h[i] = l[i];
                while (f = h.pop())
                    if (!f.disabled && rt.test(f.media)) {
                        try {
                            o = f.imports, s = o.length
                        } catch (a) {
                            s = 0
                        }
                        for (i = 0; i < s; i++) h.push(o[i]);
                        try {
                            e.push(f.cssText)
                        } catch (a) {}
                    }
                e = g(e.reverse().join("")), u = k(n), t = c(n, e)
            }), s.attachEvent("onafterprint", function() {
                nt(u), clearTimeout(i._removeSheetTimer), i._removeSheetTimer = setTimeout(r, 500)
            }), n.printShived = !0, n)
        }
        var o = n.html5 || {},
            tt = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            it = /^<|^(?:a|b|button|code|div|fieldset|form|h1|h2|h3|h4|h5|h6|i|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul)$/i,
            s, y = "_html5shiv",
            h = 0,
            p = {},
            r, i;
        (function() {
            try {
                var n = t.createElement("a");
                n.innerHTML = "<xyz><\/xyz>", s = "hidden" in n, r = n.childNodes.length == 1 || function() {
                    t.createElement("a");
                    var n = t.createDocumentFragment();
                    return typeof n.cloneNode == "undefined" || typeof n.createDocumentFragment == "undefined" || typeof n.createElement == "undefined"
                }()
            } catch (i) {
                s = !0, r = !0
            }
        })(), i = {
            elements: o.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup main mark meter nav output progress section summary time video",
            shivCSS: o.shivCSS !== !1,
            supportsUnknownElements: r,
            shivMethods: o.shivMethods !== !1,
            type: "default",
            shivDocument: a,
            createElement: l,
            createDocumentFragment: w
        }, n.html5 = i, a(t);
        var rt = /^$|\b(?:all|print)\b/,
            e = "html5shiv",
            ut = !r && function() {
                var i = t.documentElement;
                return typeof t.namespaces != "undefined" && typeof t.parentWindow != "undefined" && typeof i.applyElement != "undefined" && typeof i.removeNode != "undefined" && typeof n.attachEvent != "undefined"
            }();
        i.type += " print", i.shivPrint = v, v(t)
    }(this, document),
    function(n, t, i) {
        function h(n) {
            return "[object Function]" == y.call(n)
        }

        function c(n) {
            return "string" == typeof n
        }

        function l() {}

        function w(n) {
            return !n || "loaded" == n || "complete" == n || "uninitialized" == n
        }

        function f() {
            var n = a.shift();
            v = 1, n ? n.t ? o(function() {
                ("c" == n.t ? u.injectCss : u.injectJs)(n.s, 0, n.a, n.x, n.e, 1)
            }, 0) : (n(), f()) : v = 0
        }

        function ut(n, i, s, h, c, l, y) {
            function k(t) {
                if (!nt && w(p.readyState) && (tt.r = nt = 1, !v && f(), p.onload = p.onreadystatechange = null, t)) {
                    "img" != n && o(function() {
                        g.removeChild(p)
                    }, 50);
                    for (var u in r[i]) r[i].hasOwnProperty(u) && r[i][u].onload()
                }
            }
            var y = y || u.errorTimeout,
                p = t.createElement(n),
                nt = 0,
                b = 0,
                tt = {
                    t: s,
                    s: i,
                    e: c,
                    a: l,
                    x: y
                };
            1 === r[i] && (b = 1, r[i] = []), "object" == n ? p.data = i : (p.src = i, p.type = n), p.width = p.height = "0", p.onerror = p.onload = p.onreadystatechange = function() {
                k.call(this, b)
            }, a.splice(h, 0, tt), "img" != n && (b || 2 === r[i] ? (g.insertBefore(p, d ? null : e), o(k, y)) : r[i].push(p))
        }

        function ft(n, t, i, r, u) {
            return v = 0, t = t || "j", c(n) ? ut("c" == t ? et : nt, n, t, this.i++, i, r, u) : (a.splice(this.i++, 0, n), 1 == a.length && f()), this
        }

        function b() {
            var n = u;
            return n.loader = {
                load: ft,
                i: 0
            }, n
        }
        var s = t.documentElement,
            o = n.setTimeout,
            e = t.getElementsByTagName("script")[0],
            y = {}.toString,
            a = [],
            v = 0,
            k = "MozAppearance" in s.style,
            d = k && !!t.createRange().compareNode,
            g = d ? s : e.parentNode,
            s = n.opera && "[object Opera]" == y.call(n.opera),
            s = !!t.attachEvent && !s,
            nt = k ? "object" : s ? "script" : "img",
            et = s ? "script" : nt,
            tt = Array.isArray || function(n) {
                return "[object Array]" == y.call(n)
            },
            p = [],
            r = {},
            it = {
                timeout: function(n, t) {
                    return t.length && (n.timeout = t[0]), n
                }
            },
            rt, u;
        u = function(n) {
            function a(n) {
                for (var n = n.split("!"), f = p.length, i = n.pop(), e = n.length, i = {
                        url: i,
                        origUrl: i,
                        prefixes: n
                    }, u, r, t = 0; t < e; t++) r = n[t].split("="), (u = it[r.shift()]) && (i = u(i, r));
                for (t = 0; t < f; t++) i = p[t](i);
                return i
            }

            function f(n, t, u, f, e) {
                var o = a(n),
                    s = o.autoCallback;
                o.url.split(".").pop().split("?").shift(), o.bypass || (t && (t = h(t) ? t : t[n] || t[f] || t[n.split("/").pop().split("?")[0]]), o.instead ? o.instead(n, t, u, f, e) : (r[o.url] ? o.noexec = !0 : r[o.url] = 1, u.load(o.url, o.forceCSS || !o.forceJS && "css" == o.url.split(".").pop().split("?").shift() ? "c" : i, o.noexec, o.attrs, o.timeout), (h(t) || h(s)) && u.load(function() {
                    b(), t && t(o.origUrl, e, f), s && s(o.origUrl, e, f), r[o.url] = 2
                })))
            }

            function s(n, t) {
                function a(n, o) {
                    if (n) {
                        if (c(n)) o || (i = function() {
                            var n = [].slice.call(arguments);
                            s.apply(this, n), u()
                        }), f(n, i, t, 0, e);
                        else if (Object(n) === n)
                            for (r in v = function() {
                                    var t = 0,
                                        i;
                                    for (i in n) n.hasOwnProperty(i) && t++;
                                    return t
                                }(), n) n.hasOwnProperty(r) && (!o && !--v && (h(i) ? i = function() {
                                var n = [].slice.call(arguments);
                                s.apply(this, n), u()
                            } : i[r] = function(n) {
                                return function() {
                                    var t = [].slice.call(arguments);
                                    n && n.apply(this, t), u()
                                }
                            }(s[r])), f(n[r], i, t, r, e))
                    } else o || u()
                }
                var e = !!n.test,
                    o = n.load || n.both,
                    i = n.callback || l,
                    s = i,
                    u = n.complete || l,
                    v, r;
                a(e ? n.yep : n.nope, !!o), o && a(o)
            }
            var e, t, o = this.yepnope.loader;
            if (c(n)) f(n, 0, o, 0);
            else if (tt(n))
                for (e = 0; e < n.length; e++) t = n[e], c(t) ? f(t, 0, o, 0) : tt(t) ? u(t) : Object(t) === t && s(t, o);
            else Object(n) === n && s(n, o)
        }, u.addPrefix = function(n, t) {
            it[n] = t
        }, u.addFilter = function(n) {
            p.push(n)
        }, u.errorTimeout = 1e4, null == t.readyState && t.addEventListener && (t.readyState = "loading", t.addEventListener("DOMContentLoaded", rt = function() {
            t.removeEventListener("DOMContentLoaded", rt, 0), t.readyState = "complete"
        }, 0)), n.yepnope = b(), n.yepnope.executeStack = f, n.yepnope.injectJs = function(n, i, r, s, h, c) {
            var a = t.createElement("script"),
                v, y, s = s || u.errorTimeout;
            a.src = n;
            for (y in r) a.setAttribute(y, r[y]);
            i = c ? f : i || l, a.onreadystatechange = a.onload = function() {
                !v && w(a.readyState) && (v = 1, i(), a.onload = a.onreadystatechange = null)
            }, o(function() {
                v || (v = 1, i(1))
            }, s), h ? a.onload() : e.parentNode.insertBefore(a, e)
        }, n.yepnope.injectCss = function(n, i, r, u, s, h) {
            var u = t.createElement("link"),
                c, i = h ? f : i || l;
            u.href = n, u.rel = "stylesheet", u.type = "text/css";
            for (c in r) u.setAttribute(c, r[c]);
            s || (e.parentNode.insertBefore(u, e), o(i, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    },
    function(n) {
        var t = [],
            o = function() {
                return typeof n.screen.systemXDPI != "undefined" && n.screen.systemXDPI >= n.screen.logicalXDPI ? n.screen.systemXDPI / n.screen.logicalXDPI : typeof n.devicePixelRatio != "undefined" ? n.devicePixelRatio : 1
            },
            u = function() {
                var i = !1,
                    t = i == !1 || n.screen.width > n.screen.height ? n.screen.width : n.screen.height,
                    r = i == !1 || n.innerWidth > n.innerHeight ? n.innerWidth : n.innerHeight;
                return t > r && (t = r), t
            },
            f = function() {
                return navigator.userAgent.toLowerCase().indexOf("webkit") > -1 ? document.documentElement.clientWidth : n.innerWidth
            },
            i = function(n) {
                return n = n.substring(0, n.length - 2), Number(n)
            },
            s = function(n) {
                var e, r, s;
                if (n = $.trim(n), n.length > 0)
                    for (n = n.toLowerCase(), n = n.substring(1, n.length - 1), e = n.split(") and ("), r = 0, s = e.length; r < s; r++) {
                        var h = e[r].indexOf(":"),
                            c = $.trim(e[r].substring(0, h)),
                            t = $.trim(e[r].substring(h + 1));
                        switch (c) {
                            case "min-width":
                                if (t = i(t), t > f()) return !1;
                                break;
                            case "max-width":
                                if (t = i(t), t < f()) return !1;
                                break;
                            case "min-device-pixel-width":
                                if (t = i(t), t > u()) return !1;
                                break;
                            case "max-device-pixel-width":
                                if (t = i(t), t < u()) return !1;
                                break;
                            case "min-device-pixel-ratio":
                                if (Number(t) > o()) return !1;
                                break;
                            default:
                                return !1
                        }
                    }
                return !0
            },
            e = function(t) {
                var f, e, r, u, l, i, c, o;
                t.setAttribute("data-resolved", "true"), f = $(t).find("div[data-src]").get();
                n: for (u = f.length - 1; u >= 0; u--)
                    if (l = s(f[u].getAttribute("data-media")), l == !0) {
                        e = f[u].getAttribute("data-src"), r = u;
                        break
                    }
                if (typeof e != "undefined") {
                    if (i = t.getElementsByTagName("img")[0], c = !1, i) {
                        if (o = i.getAttribute("data-source-index"), o == r || t.getAttribute("data-disable-swap-above") !== null && o >= r || t.getAttribute("data-disable-swap-below") !== null && o <= r) return
                    } else c = !0, i = n.document.createElement("img"), i.alt = t.getAttribute("data-alt"), t.appendChild(i);
                    c ? (i.src = e, i.setAttribute("data-source-index", r)) : h(i, e, r)
                } else !i
            },
            h = function(n, i, u) {
                if (typeof t[i] == "object" && t[i].complete) r(n, i, u);
                else if (document.images) {
                    var f = $("<img />");
                    f.bind("load", function() {
                        r(n, f.attr("src"), u)
                    }).bind("error", function() {
                        c(i, f)
                    }), t[i] = f, f.attr("src", i)
                } else r(n, i, u)
            },
            r = function(n, t, i) {
                n.src = t, n.setAttribute("data-source-index", i)
            },
            c = function(n, i) {
                i.unbind("error").unbind("load"), i.get(0).src = "", t[n] = undefined
            };
        n.picturePolyfill = {}, n.picturePolyfill.resolveLast = function() {
            var n = $("div[data-picture]:not([data-resolved],[data-defer])").last().get()[0];
            e(n)
        }, n.picturePolyfill.init = function(n) {
            var i, t, r;
            for (typeof n != "boolean" && (n = !0), i = $("div[data-picture]").get(), t = 0, r = i.length; t < r; t++)(i[t].getAttribute("data-resolved") === null || i[t].getAttribute("data-disable-swap") === null) && (n === !0 || i[t].getAttribute("data-defer") === null) && e(i[t])
        }, n.addEventListener ? (n.addEventListener("resize", n.picturePolyfill.init, !1), n.addEventListener("DOMContentLoaded", function() {
            n.picturePolyfill.init(!1)
        }, !1), n.addEventListener("load", n.picturePolyfill.init, !1)) : n.attachEvent && n.attachEvent("onload", n.picturePolyfill.init)
    }(window), typeof window.MSCOM == "undefined" && (window.MSCOM = {}), window.MSCOM.Helper = {
        htmlEncode: function(n) {
            return n == "undefined" || n == null ? n : $("<div/>").text(n).html()
        },
        htmlDecode: function(n) {
            return n == "undefined" || n == null ? n : $("<div/>").html(n).text()
        },
        htmlAttrEncode: function(n) {
            return n = this.htmlEncode(n), n = n.replace(/"/g, "&quot;"), n.replace(/'/g, "&#039;")
        },
        isIE7: function() {
            return navigator.appVersion.indexOf("MSIE 7.") != -1
        }
    }, window.MSCOM.Helper.Content = {
        images: {},
        doc: {},
        queue: {},
        curThread: 0,
        maxThread: 2,
        nextDelay: 100,
        logenabled: !1,
        isBodyLoaded: !1,
        prefetchEnabled: !0,
        onload: function() {
            this.log("window.MSCOM.Helper.Content: Body Onload"), this.isBodyLoaded = !0, setTimeout($.proxy(this.next, this), this.nextDelay)
        },
        log: function(n) {
            if (this.logenabled) try {
                console.log(n)
            } catch (t) {} else window.location.hash.indexOf("helplog") > 0 && (this.logenabled = !0)
        },
        sortQ: function() {
            var n = [],
                i = {},
                t;
            for (t in this.queue) n.push(t);
            n.sort();
            for (t in n) i[n[t]] = this.queue[n[t]];
            this.queue = i
        },
        registerImage: function(n) {
            if (this.prefetchEnabled) {
                var t = {
                    path: "",
                    priority: 0,
                    type: "img",
                    callback: null,
                    passvar: null,
                    cache: !0
                };
                $.extend(t, n), this.addToQueue(t)
            }
            return this.prefetchEnabled
        },
        registerDoc: function(n) {
            if (this.prefetchEnabled) {
                var t = {
                    path: "",
                    priority: 0,
                    type: "doc",
                    callback: null,
                    passvar: null,
                    cache: !0
                };
                $.extend(t, n), this.addToQueue(t)
            }
            return this.prefetchEnabled
        },
        unregister: function(n) {
            var r, i, t;
            for (r in this.queue)
                for (i = this.queue[r], t = 0; t < i.length; ++t)
                    if (i[t].path === n) return this.log(["unregister", i[t]]), i.splice(t, 1), !0;
            return !1
        },
        addToQueue: function(n) {
            this.log(["addToQueue", n]), this.queue[n.priority] == undefined && (this.queue[n.priority] = [], this.sortQ()), this.queue[n.priority].push(n), setTimeout($.proxy(this.next, this), this.nextDelay)
        },
        next: function() {
            var n, t;
            if (!this.prefetchEnabled || this.curThread >= this.maxThread || !$.isReady && !this.isBodyLoaded) return !1;
            for (t in this.queue) {
                if (!this.isBodyLoaded && parseInt(t) > -1) return !1;
                if (this.queue[t].length > 0) {
                    n = this.queue[t].shift();
                    break
                }
            }
            n && (this.log(["Next:starting item", n]), this.curThread++, n.type == "img" && this.loadImage(n), n.type == "doc" && this.loadDocument(n))
        },
        loadImage: function(n) {
            if (n.cache && this.images[n.path] != undefined && this.images[n.path].complete) this.imageLoaded(this.images[n.path], n);
            else if (document.images) {
                var t = new Image,
                    i = this;
                $(t).load(function() {
                    i.imageLoaded(t, n)
                }), $(t).error(function() {
                    i.imageError(t, n)
                }), t.src = n.path, this.images[n.path] = t
            }
        },
        loadDocument: function(n) {
            if (n.cache && this.doc[n.path] != undefined) this.docLoaded(this.doc[n.path], n);
            else {
                var t = this;
                $.get(n.path, function(i) {
                    t.docLoaded(i, n)
                })
            }
        },
        imageLoaded: function(n, t) {
            this.curThread = this.curThread > 0 ? this.curThread - 1 : 0, t.callback && t.callback(n, t.passvar), setTimeout($.proxy(this.next, this), this.nextDelay)
        },
        imageError: function(n, t) {
            this.curThread = this.curThread > 0 ? this.curThread - 1 : 0, t.callback && t.callback(n, t.passvar), setTimeout($.proxy(this.next, this), this.nextDelay)
        },
        docLoaded: function(n, t) {
            this.curThread = this.curThread > 0 ? this.curThread - 1 : 0;
            try {
                t.callback && t.callback(n, t.passvar)
            } catch (i) {
                this.log(i)
            }
            setTimeout($.proxy(this.next, this), this.nextDelay)
        }
    }, typeof $ != "undefined" ? $(window).load($.proxy(window.MSCOM.Helper.Content.onload, window.MSCOM.Helper.Content)) : document.addEventListener ? window.addEventListener("load", function() {
        window.MSCOM.Helper.Content.onload()
    }, !1) : window.attachEvent && window.attachEvent("onload", function() {
        window.MSCOM.Helper.Content.onload()
    }), $(function() {
        var n = $(".top-bar-storelink").children().clone(!0);
        $(".menulevel-storelink").prepend(n)
    }), $(function() {
        if ($(".store-geo").length)
            if (typeof navigator.geolocation != "undefined" && $(".store-geo[data-clientgeo=true]").length) {
                var n = setTimeout(function() {
                    $(".store-editorial").fadeIn(1e3)
                }, 1e4);
                navigator.geolocation.getCurrentPosition(function(t) {
                    clearTimeout(n), getStore(t)
                })
            } else getStore()
    }),
    function(n, t, i, r) {
        n.responsiveSlideshow = function(u, f) {
            var l = n(u),
                a = l.children(),
                e = f.sliderIndex,
                v = f.rootSelector,
                s = 0,
                y = {},
                o, p = n.extend({}, n.responsiveSlideshow.defaults, f),
                c, h = [];
            n("body").data("settings") === r && (n("body").data("settings", []), n("body").data("slides", []), n("body").data("controlNav", []), n("body").data("directionNav", []), n.each(n(v + " .navigation .grid-container"), function(t, i) {
                n(i).attr("data-slidercontrolindex", t)
            }), n.each(n(v + " .prev-next"), function(t, i) {
                n(i).attr("data-sliderdirectionindex", t)
            })), n("body").data("settings").push(p), n("body").data("slides").push(a), n.data(u, "responsiveSlideshow", l), y = {
                init: function() {
                    var t, u, f, h;
                    o = this, n("body").data("settings")[e].init(), t = n("body").data("slides")[e], i.documentElement.dir == "rtl" ? t.css({
                        "margin-left": "-100%",
                        float: "right",
                        width: "100%"
                    }) : t.css({
                        "margin-right": "-100%",
                        float: "left",
                        width: "100%"
                    }), t.each(function(n, t) {
                        t.style.display === "none" && (t.style.display = "")
                    }), t.length > 1 && (n("*[data-slidercontrolindex='" + e + "']").addClass("show"), n("*[data-sliderdirectionindex='" + e + "']").addClass("show")), u = t.eq(s), t.not(u).addClass(o.getFadeClassName()), o.goToSlide(s, e), u.data("shown", !0);
                    t.on("mouseenter", function() {
                        o.handlePause("hover", "enter")
                    }).on("mouseleave", function() {
                        o.handlePause("hover", "leave")
                    });
                    t.find("a").on("focus", function() {
                        o.handlePause("focus", "enter")
                    }).on("blur", function() {
                        o.handlePause("focus", "leave")
                    });
                    if (n("body").data("settings")[e].controlNav) {
                        n("body").data("controlNav").push(n("*[data-slidercontrolindex='" + e + "']")), f = function() {
                            n("body").data("slides")[e].each(function(t) {
                                var f = n(this).attr("selectBi");
                                f === r && (f = "");
                                var u = '<a href="{{target_id}}" title="{{title}}" bi:index="{{idx}}"' + f + '><span aria-hidden="true" class="bi-hidetext">{{icon}}<\/span> <span class="screen-reader-text">{{idx}}<\/span><\/a>',
                                    o = /{{\w*}}/gi,
                                    s = u.match(o),
                                    i = [];
                                i.idx = t, i.target_id = "Slide" + e + t, i.title = n("*[data-slidercontrolindex='" + e + "']").data("title-text") ? n("*[data-slidercontrolindex='" + e + "']").data("title-text").replace("{{idx}}", t + 1) : "", i.icon = n("*[data-slidercontrolindex='" + e + "']").data("icon-text") ? n("*[data-slidercontrolindex='" + e + "']").data("icon-text") : "&#x25CF;", n(s).each(function(n, t) {
                                    u = u.replace(t, i[t.replace("{{", "").replace("}}", "")])
                                }), n("*[data-slidercontrolindex='" + e + "']").append(u)
                            })
                        }, n("*[data-slidercontrolindex='" + e + "']").children().length === 0 && n("*[data-slidercontrolindex='" + e + "']").parents().parents().hasClass("slideshow-hero") === !0 && f(), n("*[data-slidercontrolindex='" + e + "']").find("a").eq(0).addClass("active");
                        n("*[data-slidercontrolindex='" + e + "']").find("a").on("click", function(t) {
                            var f, i, h, u;
                            if ((t.preventDefault(), f = n("*[data-slidercontrolindex='" + e + "']").find("a").index(n(this)), s !== f) && (o.goToSlide(f, e), n.bi)) {
                                i = n.bi.getLinkData(this), h = n.bi.getAttrData(n("body").data("slides")[e].eq(f).find("a:visible"));
                                for (u in h) i[u] === r ? i[u] = h[u] : i[u] += ";" + h[u];
                                i.typestructure += n("body").data("slides")[e].find("*[bi\\:type]").length > 0 ? ";" + n("body").data("slides")[e].find("*[bi\\:type]").attr("bi:type") : ";slideshowitem", i.interactiontype = 6, i.cot = 5, n.bi.record(i)
                            }
                        })
                    }
                    if (n("body").data("settings")[e].directionNav) {
                        n("body").data("directionNav").push(n("*[data-sliderdirectionindex='" + e + "']")), h = function() {
                            var t = n('<button class="prev">Previous<\/button><button class="next">Next<\/button>');
                            n("*[data-sliderdirectionindex='" + e + "']").append(t)
                        }, n("*[data-sliderdirectionindex='" + e + "']").children().length === 0 && h();
                        n("*[data-sliderdirectionindex='" + e + "']").find(".prev").on("click", function(t) {
                            var s, i, f, u;
                            if (t.preventDefault(), s = o.getPrevSlideIndex(), o.prevSlide(), n.bi) {
                                i = n.bi.getLinkData(this), f = n.bi.getAttrData(n("body").data("slides")[e].eq(s).find("a:visible"));
                                for (u in f) i[u] === r ? i[u] = f[u] : i[u] += ";" + f[u];
                                i.typestructure += n("body").data("slides")[e].find("*[bi\\:type]").length > 0 ? ";" + n("body").data("slides")[e].find("*[bi\\:type]").attr("bi:type") : ";slideshowitem", i.interactiontype = 5, i.cot = 5, i.index = s, n.bi.record(i)
                            }
                        });
                        n("*[data-sliderdirectionindex='" + e + "']").find(".next").on("click", function(t) {
                            var s, i, f, u;
                            if (t.preventDefault(), s = o.getNextSlideIndex(), o.nextSlide(), n.bi) {
                                i = n.bi.getLinkData(this), f = n.bi.getAttrData(n("body").data("slides")[e].eq(s).find("a:visible"));
                                for (u in f) i[u] === r ? i[u] = f[u] : i[u] += ";" + f[u];
                                i.typestructure += n("body").data("slides")[e].find("*[bi\\:type]").length > 0 ? ";" + n("body").data("slides")[e].find("*[bi\\:type]").attr("bi:type") : ";slideshowitem", i.interactiontype = 4, i.cot = 5, i.index = s, n.bi.record(i)
                            }
                        })
                    }
                    o.goToSlide(s, e)
                },
                handlePause: function(n, t) {
                    if (h[n] = t === "enter", h[n]) o.clearTimer();
                    else {
                        for (var i in h)
                            if (h[i]) return;
                        o.setTimer()
                    }
                },
                setTimer: function() {
                    if (n("body").data("settings")[e].slideshow) {
                        var i = n("*[data-slidercontrolindex='" + e + "']").closest(".slideshow-news");
                        c = t.setTimeout(o.autoNextSlide, i.hasClass("slideshow-news") ? i.attr("data-speed") : n("body").data("settings")[e].speed)
                    }
                },
                clearTimer: function() {
                    n("body").data("settings")[e].slideshow && !!c && t.clearTimeout(c)
                },
                getNextSlideIndex: function() {
                    var t = s + 1;
                    return t === n("body").data("slides")[e].length ? 0 : t
                },
                getPrevSlideIndex: function() {
                    var t = s - 1;
                    return t < 0 ? n("body").data("slides")[e].length - 1 : t
                },
                autoNextSlide: function() {
                    var f = o.getNextSlideIndex(),
                        i = n("body").data("slides")[e].eq(f),
                        s = !0,
                        u, t;
                    i.find("img").each(function(n, t) {
                        if (t.complete == !1) return s = !1, !1
                    }), s == !0 && i.find("div[data-picture]:not([data-resolved])").size() == 0 ? (o.nextSlide(), i.data("shown") != !0 && (i.data("shown", !0), n.bi && (u = "slideshow;", u += a.find("*[bi\\:type]").length > 0 ? n("body").data("slides")[e].find("*[bi\\:type]").attr("bi:type") : "slideshowitem", t = n.bi.getAttrData(i.find("a:visible")), t.typestructure = u, t.index = f, t.interactiontype = 1, t.cot = 5, t.uridomain = r, t.uripath = r, t.uriquery = r, n.bi.record(t)))) : (o.clearTimer(), o.setTimer())
                },
                nextSlide: function() {
                    o.goToSlide(o.getNextSlideIndex(), e)
                },
                prevSlide: function() {
                    o.goToSlide(o.getPrevSlideIndex(), e)
                },
                goToSlide: function(i, r) {
                    var f = o.getFadeClassName(),
                        u;
                    (n("body").data("settings")[r].before(), o.clearTimer(), o.setTimer(), s !== i) && (n("*[data-slidercontrolindex='" + r + "']") && n("*[data-slidercontrolindex='" + r + "']").find("a").removeClass("active").eq(i).addClass("active"), n("body").data("slides")[r].eq(s).is(":visible") ? n("body").data("slides")[r].eq(s).addClass(f) : n("body").data("slides")[r].eq(s).addClass(f), s = i, u = n("body").data("slides")[r].eq(i), u.css("display") === "none" && u.css("display", ""), u.removeClass(f), t.setTimeout(function() {
                        n("body").data("settings")[r].between(i)
                    }, n("body").data("settings")[r].animationDuration / 2))
                },
                getFadeClassName: function() {
                    return Modernizr && Modernizr.csstransitions ? "fade-out" : "hide"
                }
            }, y.init()
        }, n.responsiveSlideshow.defaults = {
            slideshow: !0,
            speed: 5e3,
            directionNav: null,
            controlNav: null,
            sliderIndex: 0,
            rootSelector: ".slideshow-hero",
            animationDuration: 400,
            init: function() {},
            before: function() {},
            after: function() {},
            between: function() {}
        }, n.fn.responsiveSlideshow = function(t) {
            return n(this).each(function() {
                new n.responsiveSlideshow(n(this), t)
            })
        }
    }(jQuery, window, document), Mscom.Video = function(n) {
        this.Control = n, $(this.Control).find(".mscom-html5-video").length > 0 ? (this.SupportsVideo = !!document.createElement("video").canPlayType, this.IsMSNPlayer = !1, this.Video = this.Control.getElementsByTagName("video")[0], this.FlashVersion = GetFlashVersion().split(",").shift(), this.SupportsVideo === !0 && this.Video.controls === !1 ? (this.playButton = $(this.Control).find(".play").get(0), this.muteButton = $(this.Control).find(".mute").get(0), this.fullscreen = $(this.Control).find(".fullscreen").get(0), this.light = $(this.Control).find(".video-light").get(0), this.captions = $(this.Control).find(".captions").get(0), this.facebook = $(this.Control).find(".video-facebook").get(0), this.twitter = $(this.Control).find(".video-twitter").get(0), this.CaptionMenuButtons = [], this.CaptionsMenu, this.PageUrlParameterName = "url", this.ShareWindows = {}) : $(this.Control).children(".video-button-container").hide()) : (this.IsMSNPlayer = !0, this.VideoContainer = $(this.Control).find(".mscom-video-container").first(), $(this.Control).attr("data-loaded", "true"), this.VideoContainerID = this.VideoContainer.attr("id"), this.VideoID = this.VideoContainer.attr("data-videoid"), this.BiTags = this.VideoContainer.attr("data-bitag"), this.PlayerName = this.VideoContainer.attr("data-playername"), this.PlayerRefName = this.VideoContainer.attr("data-playerrefname"), this.AutoPlay = this.VideoContainer.attr("data-autoplay"), this.Mute = this.VideoContainer.attr("data-mute"), this.Loop = this.VideoContainer.attr("data-loop"), this.CSID = "ux-cms-en-us-msoffice", this.PlayerOverrides = {}, this.IsVideoLoaded = !1, this.IsVideoRendered = !1, this.VideoTitle, this.IsPopupVideo = !1, this.PopupContent, Mscom.Helper.IsValid(this.PlayerName) || (this.PlayerName = "ShowcaseMSN1"), Mscom.Helper.IsValid(this.PlayerRefName) || (this.PlayerRefName = "MPL_CMG_ShowcaseMSN1"), Mscom.Helper.IsValid(this.AutoPlay) || (this.AutoPlay = "False"), Mscom.Helper.IsValid(this.Mute) || (this.Mute = "False"), Mscom.Helper.IsValid(this.Loop) || (this.Loop = "False"), this.VideoWidgetId = this.VideoContainerID + "_ux1_1_1_1"), $($.proxy(this.Init, this))
    }, Mscom.Video.prototype = {
        Init: function() {
            var n = $(this.Control).closest(".mscom-popup-container"),
                t;
            if (n.length > 0) {
                this.IsPopupVideo = !0, this.PopupContent = n.find(".mscom-popup-content").first();
                n.on("popupOpened", $.proxy(this.VideoPopupOpen, this));
                n.on("popupClosed", $.proxy(this.VideoPopupClose, this))
            }
            if (this.IsMSNPlayer)
                if (t = {
                        videoFilter: {
                            type: "Uuid",
                            uuids: [this.VideoID]
                        }
                    }, this.PlayerOverrides[this.PlayerRefName + ".Width"] = "100%", this.PlayerOverrides[this.PlayerRefName + ".AutoPlayVideo"] = this.AutoPlay, this.PlayerOverrides[this.PlayerRefName + ".PlayerMute"] = this.Mute.toLowerCase(), this.PlayerOverrides[this.PlayerRefName + ".DefaultVideo"] = {}, this.PlayerOverrides[this.PlayerRefName + ".DefaultVideo"].videoQuery = t, this.IsPopupVideo === !1) this.Render("init");
                else this.VideoContainer.on("DOMSubtreeModified", $.proxy(this.VideoPopupLoaded, this));
            else this.SupportsVideo === !0 && $(this.Control).find("#video-controls").length > 0 ? (this.BindVideoEvents(), this.BindButtonEvents(), this.InitializeCaptionMenu(), this.ResizeVideo()) : $("#parentDiv").children().filter("#video-controls").remove(), this.SupportsVideo === !1 && this.FlashVersion < 10 && ($(this.Control).children().filter(":not(#video-error)").remove(), $(this.Control).find("#video-error").css("display", "block")), this.IsPopupVideo && this.Video.pause()
        },
        VideoPopupClose: function() {
            this.IsMSNPlayer ? this.TriggerVideoEvent("pauseVideo") : this.Video.pause()
        },
        VideoPopupOpen: function() {
            this.IsMSNPlayer === !1 && this.Video.autoplay === !0 ? ($("video").each(function() {
                this.pause()
            }), this.Video.play()) : (this.PauseAllVideo(), this.Render("popupOpened"))
        },
        VideoPopupLoaded: function() {
            this.VideoContainer.off("DOMSubtreeModified", this.VideoPopupLoaded)
        },
        Render: function() {
            this.IsVideoRendered ? this.AutoPlay.toLowerCase() === "true" && this.TriggerVideoEvent("playVideo") : (MsnVideoUx.render(this.PlayerName, this.VideoContainerID, this.PlayerOverrides, {
                csid: this.CSID
            }), MsnVideo2.addMessageReceiver({
                eventType: "playbackStatusChanged",
                widgetId: this.VideoWidgetId,
                funcCb: $.proxy(this.biTrack, this)
            }), this.IsVideoRendered = !0)
        },
        TriggerVideoEvent: function(n) {
            this.IsVideoRendered && MsnVideo2.sendMessage({
                type: n,
                targetId: this.VideoWidgetId
            })
        },
        PauseAllVideo: function() {
            if (Mscom.Helper.IsValid(Mscom.Video.Videos)) {
                var n = this;
                $.each(Mscom.Video.Videos, function() {
                    this.VideoWidgetId !== n.VideoWidgetId && this.TriggerVideoEvent("pauseVideo")
                })
            }
        },
        ResizeVideo: function() {
            this.IsMSNPlayer === !1 && this.SupportsVideo === !0 && ($(window).width() < 373 ? ($(this.Control).children(".video-button-container").hide(), this.Video.controls = !0) : ($(this.Control).children(".video-button-container").show(), this.Video.controls = !1))
        },
        biTrack: function(n) {
            var u, f, t, i, r;
            if (n.sourceId === this.VideoWidgetId && (n.param.status == "loaded" && (this.IsPopupVideo, this.IsVideoLoaded = !0, Mscom.BrowserDetect.browser == "Explorer" && Mscom.BrowserDetect.version <= 7 && (u = $(this.Control).find("div .vxp_richEmbedContainer object"), u.css("zoom", "1")), f = MsnVideo2.getProperties({
                    type: "currentVideo",
                    targetId: this.VideoWidgetId
                }), this.VideoTitle = f[0].param.video.title), this.Loop.toLowerCase() === "true" && n.param.status === "videoPlayCompleted" && this.TriggerVideoEvent("playVideo"), (n.param.status == "videoPaused" || n.param.status == "videoPlayCompleted") && (this.IsVideoLoaded = !0), this.IsVideoLoaded == !0 && n.param.status === "videoPlaying" && (this.PauseAllVideo(), this.IsVideoLoaded = !1, $.bi))) {
                if (t = $.bi.getLinkData($(this.Control)), t["wcs.cn"] = this.VideoTitle, t.title = this.VideoTitle, Mscom.Helper.IsValid(this.BiTags)) {
                    i = JSON.parse(this.BiTags);
                    for (r in i) t[r] = i[r]
                }
                $.bi.record(t)
            }
        },
        BindVideoEvents: function() {
            var n = this;
            $(window).on("resize", $.proxy(this.ResizeVideo, this));
            $(this.Video).bind("progress", function(t) {
                n.ProgressEvent(t)
            }).bind("timeupdate", function(t) {
                n.TimeCode(t)
            }).bind("cuechange", function(t) {
                n.CueChange(t)
            }).bind("loadedmetadata", function(t) {
                n.Loadedmetadata(t)
            }).bind("ended", function() {
                n.Video.src = n.Video.currentSrc
            }).bind("click", function(t) {
                n.Video.paused ? n.Play(t) : n.Pause(t)
            }).bind("play", function() {
                $(n).parent().children("#init").remove()
            })
        },
        BindButtonEvents: function() {
            var n = this;
            this.playButton.addEventListener("click", function() {
                n.Video.paused === !0 ? (n.Video.play(), $(this).css("background-position", "0px -1428px")) : (n.Video.pause(), $(this).css("background-position", "0px -1544px"))
            }), this.muteButton.addEventListener("click", function() {
                n.Video.muted === !1 ? (n.Video.muted = !0, $(this).css("background-position", "0px -1312px")) : (n.Video.muted = !1, $(this).css("background-position", "0px -1660px"))
            }), this.captions.addEventListener("click", function() {
                n.CaptionsMenu && $(n.CaptionsMenu).toggle()
            }), this.fullscreen.addEventListener("click", function(t) {
                n.HandleFullscreen(t)
            }), this.facebook !== undefined && this.facebook.addEventListener("click", function() {
                n.SharePage(this)
            }), this.facebook !== undefined && this.twitter.addEventListener("click", function() {
                n.SharePage(this)
            }), this.light !== undefined && this.light.addEventListener("click", function() {
                $(this).toggleClass("lighton"), $(this).hasClass("lighton") ? $(".video-container-overlay").remove() : ($("body").append('<div class="video-container-overlay"><\/div>'), $(".video-container-overlay").css({
                    width: "100%",
                    height: $(document).height()
                }), $(".mscom-html5-videoContainer").css({
                    "z-index": 1e3
                }))
            }), $(this.Video).bind("volumechange", function(t) {
                n.VolumeChangedEvent(t)
            }, !1), $(this.Control).find("#video_volumebar").bind("mousedown", function() {
                n.isHoldingVolume = !0
            }).bind("mouseup", function(t) {
                n.isHoldingVolume = !1, n.SetVolume(t)
            }).bind("mousemove", function(t) {
                n.isHoldingVolume && n.SetVolume(t)
            }), $(this.Control).find("#video_timebar").bind("mousedown", function() {
                n.isHoldingTime = !0
            }).bind("mouseup", function(t) {
                n.isHoldingTime = !1, n.SetPosition(t, !0)
            }).bind("mousemove", function(t) {
                n.NoticeTimecode(t), n.isHoldingTime && n.SetPosition(t, !1)
            }), document.addEventListener("fullscreenchange", function() {
                this.SetFullscreenData(!!(document.fullScreen || document.fullscreenElement))
            }), document.addEventListener("webkitfullscreenchange", function() {
                this.SetFullscreenData(!!document.webkitIsFullScreen)
            }), document.addEventListener("mozfullscreenchange", function() {
                this.SetFullscreenData(!!document.mozFullScreen)
            }), document.addEventListener("msfullscreenchange", function() {
                this.SetFullscreenData(!!document.msFullscreenElement)
            })
        },
        Play: function() {
            var t = this;
            t.Video.play(), $(t.playButton).css("background-position", "0px -1544px")
        },
        Pause: function() {
            var t = this;
            t.Video.pause(), $(t.playButton).css("background-position", "0px -1428px")
        },
        ProgressEvent: function() {
            var t = this,
                i, r, u;
            t.Video.buffered.length !== 0 && (i = {
                start: t.Video.buffered.start(0),
                end: t.Video.buffered.end(0)
            }, i.end === t.Video.duration ? $(t.Control).find("#video_timebar_buffer")[0].style.width = $(t.Control).find("#video_timebar")[0].offsetWidth - 2 + "px" : (r = $(t.Control).find("#video_timebar")[0].offsetWidth, u = Math.round(i.end * r / t.Video.duration), $(t.Control).find("#video_timebar_buffer")[0].style.width = u + "px"))
        },
        TimeCode: function() {
            var t = this;
            $(t.Control).find("#video_curpos")[0] !== undefined && ($(t.Control).find("#video_curpos")[0].innerHTML = t.ParseTimeCode(t.Video.currentTime), isNaN(t.Video.duration) || $(t.Control).find("#video_duration")[0].innerHTML !== "00:00" || ($(t.Control).find("#video_duration")[0].innerHTML = t.ParseTimeCode(t.Video.duration)), this.isHoldingTime || ($(t.Control).find("#video_timebar_inner")[0].style.width = t.Video.currentTime * 99 / t.Video.duration + "%"))
        },
        Loadedmetadata: function() {
            $(this).parent().append('<div id="init"><\/div>').on("click", function() {
                $(this).children("#init").remove(), $(this).unbind("click"), $(this).find(".play").css("background-position", "0px -1428px"), $(this).children("video").get(0).play()
            })
        },
        SharePage: function(n) {
            var f = $(n).data("action-endpoint-url"),
                u = $(n).data("window-options"),
                i = $(n).data("share-target-id"),
                r = this.GetShareUrl(f, this.PageUrlParameterName),
                t;
            return r === undefined ? !1 : (t = this.ShareWindows[i], t === undefined || t === null || t.closed ? (t = u === undefined || u === null ? window.open(r, i) : window.open(r, i, u), this.ShareWindows[i] = t) : t.location = r, t.focus(), !1)
        },
        GetShareUrl: function(n, t) {
            var i, r, f, u;
            if (n !== undefined) return window.location === undefined ? void 0 : (i = null, r = null, t !== undefined && t !== null && (f = window.location.href, u = {}, u[t] = f, i = $.param(u)), r = i !== null ? n + "?" + i : n)
        },
        ParseTimeCode: function(n) {
            var r, t, i;
            for (n = Math.floor(n), r = 0; n - 60 > 0;) n = n - 60, r++;
            return t = n.toString(), t.length === 1 && (t = "0" + t), i = r.toString(), i.length === 1 && (i = "0" + i), i + ":" + t
        },
        SetPosition: function(n, t) {
            var i = this,
                r = $(i.Control).find("#video_timebar")[0],
                f = this.FindPos(r),
                e = n.pageX - f.x,
                u = Math.round(e * 99 / r.offsetWidth);
            $(i.Control).find("#video_timebar_inner")[0].style.width = u.toString() + "%", t && (i.Video.currentTime = Math.round(u * i.Video.duration / 99))
        },
        FindPos: function(n) {
            var t = y = 0;
            if (n.offsetParent)
                do t += n.offsetLeft, y += n.offsetTop; while (n = n.offsetParent);
            return {
                x: t,
                y: y
            }
        },
        NoticeTimecode: function(n) {
            var t = this,
                u = $(t.Control).find("#video_timebar")[0],
                i = $(t.Control).find("#video_timebar_notice")[0],
                e = t.FindPos(u),
                f = n.pageX - e.x,
                r = Math.round(f * 100 / u.offsetWidth);
            r < 0 && (r = 0), i.innerHTML = t.ParseTimeCode(Math.round(r * t.Video.duration / 100)), i.style.marginLeft = f + 3 - i.offsetWidth / 2 + "px"
        },
        SetVolume: function(n) {
            var t = this,
                r = $(t.Control).find("#video_volumebar")[0],
                u = this.FindPos(r),
                f = n.pageY - u.y,
                i = 100 - Math.round(f * 100 / r.offsetHeight);
            i <= 100 && ($(t.Control).find("#video_volumebar_inner")[0].style.height = i.toString() + "%", t.Video.volume = i / 100), t.Video.volume === 0 ? (t.Video.muted = !0, $(t.muteButton).css("background-position", "0px -1312px")) : (t.Video.muted = !1, $(t.muteButton).css("background-position", "0px -1660px"))
        },
        VolumeChangedEvent: function() {
            var t = this;
            t.Video.volume <= 1 && ($(t.Control).find("#video_volumebar_inner")[0].style.height = (t.Video.volume * 100).toString() + "%")
        },
        SetFullscreenData: function(n) {
            var t = this;
            t.Control.setAttribute("data-fullscreen", !!n), t.fullscreen.setAttribute("data-state", !n ? "go-fullscreen" : "cancel-fullscreen")
        },
        IsFullScreen: function() {
            return !!(document.fullScreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement)
        },
        HandleFullscreen: function() {
            var t = this;
            t.IsFullScreen() ? (document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen(), t.SetFullscreenData(!1)) : (t.Control.requestFullscreen ? t.Control.requestFullscreen() : t.Control.mozRequestFullScreen ? t.Control.mozRequestFullScreen() : t.Control.webkitRequestFullScreen ? t.Video.webkitRequestFullScreen() : t.Control.msRequestFullscreen && t.Control.msRequestFullscreen(), t.SetFullscreenData(!0))
        },
        CreateMenuItem: function(n, t, i) {
            var r = this,
                f = document.createElement("li"),
                u = f.appendChild(document.createElement("button"));
            return u.setAttribute("id", n), u.className = "captions-button", t.length > 0 && u.setAttribute("lang", t), u.value = i, u.setAttribute("data-state", "inactive"), u.appendChild(document.createTextNode(i)), u.addEventListener("click", function() {
                var i, t;
                for (r.CaptionMenuButtons.map(function(n, t) {
                        r.CaptionMenuButtons[t].setAttribute("data-state", "inactive")
                    }), i = this.getAttribute("lang"), t = 0; t < r.Video.textTracks.length; t++) r.Video.textTracks[t].language === i ? (r.Video.textTracks[t].mode = "showing", this.setAttribute("data-state", "active")) : r.Video.textTracks[t].mode = "hidden";
                r.CaptionsMenu.style.display = "none"
            }), r.CaptionMenuButtons.push(u), f
        },
        InitializeCaptionMenu: function() {
            for (var t = this, r, i = 0; i < t.Video.textTracks.length; i++) t.Video.textTracks[i].mode = "hidden";
            if (t.Video.textTracks.length > 0) {
                for (r = document.createDocumentFragment(), t.CaptionsMenu = r.appendChild(document.createElement("ul")), t.CaptionsMenu.className = "captions-menu", t.CaptionsMenu.appendChild(t.CreateMenuItem("captions-off", "", "Off")), i = 0; i < t.Video.textTracks.length; i++) t.CaptionsMenu.appendChild(t.CreateMenuItem("captions-" + t.Video.textTracks[i].language, t.Video.textTracks[i].language, t.Video.textTracks[i].label));
                t.Control.appendChild(t.CaptionsMenu)
            } else $(t.captions).css("display", "none")
        }
    }, typeof $ != "undefined" && $(function() {
        var n = "";
        Mscom && Mscom.Helper && Mscom.Video && $(".mscom-video").length > 0 && (n = window.location.protocol == "https:" ? "https://imgs1-video.ssl.catalog.video.msn.com/s/js/vxp.js" : "http://img1.video.s-msn.com/s/js/vxp.js", window.Mscom.Helper.loadScript(n, function() {
            $(".mscom-video").not("[data-loaded=true]").each(function(n) {
                $(this).children(".mscom-html5-video")[0] !== "undefined" && $(this).children(".mscom-html5-video").parent().removeClass("mscom-video").addClass("mscom-html5-videoContainer"), Mscom.Video.Videos || (Mscom.Video.Videos = []), Mscom.Video.Videos[n] = new Mscom.Video(this)
            })
        }))
    }), ! function(n) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], n) : "undefined" != typeof exports ? module.exports = n(require("jquery")) : n(jQuery)
    }(function(n) {
        "use strict";
        var t = window.Slick || {};
        t = function() {
            function t(t, r) {
                var f, e, u = this;
                if (u.defaults = {
                        accessibility: !0,
                        adaptiveHeight: !1,
                        appendArrows: n(t),
                        appendDots: n(t),
                        arrows: !0,
                        asNavFor: null,
                        prevArrow: '<button type="button" data-role="none" class="slick-prev">Previous<\/button>',
                        nextArrow: '<button type="button" data-role="none" class="slick-next">Next<\/button>',
                        autoplay: !1,
                        autoplaySpeed: 3e3,
                        centerMode: !1,
                        centerPadding: "50px",
                        cssEase: "ease",
                        customPaging: function(n, t) {
                            return '<button type="button" data-role="none">' + (t + 1) + "<\/button>"
                        },
                        dots: !1,
                        dotsClass: "slick-dots",
                        draggable: !0,
                        easing: "linear",
                        fade: !1,
                        focusOnSelect: !1,
                        infinite: !0,
                        initialSlide: 0,
                        lazyLoad: "ondemand",
                        onBeforeChange: null,
                        onAfterChange: null,
                        onInit: null,
                        onReInit: null,
                        onSetPosition: null,
                        pauseOnHover: !0,
                        pauseOnDotsHover: !1,
                        respondTo: "window",
                        responsive: null,
                        rtl: !1,
                        slide: "div",
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        speed: 500,
                        swipe: !0,
                        swipeToSlide: !1,
                        touchMove: !0,
                        touchThreshold: 5,
                        useCSS: !0,
                        variableWidth: !1,
                        vertical: !1,
                        waitForAnimate: !0
                    }, u.initials = {
                        animating: !1,
                        dragging: !1,
                        autoPlayTimer: null,
                        currentDirection: 0,
                        currentLeft: null,
                        currentSlide: 0,
                        direction: 1,
                        $dots: null,
                        listWidth: null,
                        listHeight: null,
                        loadIndex: 0,
                        $nextArrow: null,
                        $prevArrow: null,
                        slideCount: null,
                        slideWidth: null,
                        $slideTrack: null,
                        $slides: null,
                        sliding: !1,
                        slideOffset: 0,
                        swipeLeft: null,
                        $list: null,
                        touchObject: {},
                        transformsEnabled: !1
                    }, n.extend(u, u.initials), u.activeBreakpoint = null, u.animType = null, u.animProp = null, u.breakpoints = [], u.breakpointSettings = [], u.cssTransitions = !1, u.paused = !1, u.positionProp = null, u.respondTo = null, u.shouldClick = !0, u.$slider = n(t), u.$slidesCache = null, u.transformType = null, u.transitionType = null, u.windowWidth = 0, u.windowTimer = null, u.options = n.extend({}, u.defaults, r), u.currentSlide = u.options.initialSlide, u.originalSettings = u.options, f = u.options.responsive || null, f && f.length > -1) {
                    u.respondTo = u.options.respondTo || "window";
                    for (e in f) f.hasOwnProperty(e) && (u.breakpoints.push(f[e].breakpoint), u.breakpointSettings[f[e].breakpoint] = f[e].settings);
                    u.breakpoints.sort(function(n, t) {
                        return t - n
                    })
                }
                u.autoPlay = n.proxy(u.autoPlay, u), u.autoPlayClear = n.proxy(u.autoPlayClear, u), u.changeSlide = n.proxy(u.changeSlide, u), u.clickHandler = n.proxy(u.clickHandler, u), u.selectHandler = n.proxy(u.selectHandler, u), u.setPosition = n.proxy(u.setPosition, u), u.swipeHandler = n.proxy(u.swipeHandler, u), u.dragHandler = n.proxy(u.dragHandler, u), u.keyHandler = n.proxy(u.keyHandler, u), u.autoPlayIterator = n.proxy(u.autoPlayIterator, u), u.instanceUid = i++, u.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, u.init(), u.checkResponsive()
            }
            var i = 0;
            return t
        }(), t.prototype.addSlide = function(t, i, r) {
            var u = this;
            if ("boolean" == typeof i) r = i, i = null;
            else if (0 > i || i >= u.slideCount) return !1;
            u.unload(), "number" == typeof i ? 0 === i && 0 === u.$slides.length ? n(t).appendTo(u.$slideTrack) : r ? n(t).insertBefore(u.$slides.eq(i)) : n(t).insertAfter(u.$slides.eq(i)) : r === !0 ? n(t).prependTo(u.$slideTrack) : n(t).appendTo(u.$slideTrack), u.$slides = u.$slideTrack.children(this.options.slide), u.$slideTrack.children(this.options.slide).detach(), u.$slideTrack.append(u.$slides), u.$slides.each(function(t, i) {
                n(i).attr("index", t)
            }), u.$slidesCache = u.$slides, u.reinit()
        }, t.prototype.animateSlide = function(t, i) {
            var u = {},
                r = this,
                f;
            1 === r.options.slidesToShow && r.options.adaptiveHeight === !0 && r.options.vertical === !1 && (f = r.$slides.eq(r.currentSlide).outerHeight(!0), r.$list.animate({
                height: f
            }, r.options.speed)), r.options.rtl === !0 && r.options.vertical === !1 && (t = -t), r.transformsEnabled === !1 ? r.options.vertical === !1 ? r.$slideTrack.animate({
                left: t
            }, r.options.speed, r.options.easing, i) : r.$slideTrack.animate({
                top: t
            }, r.options.speed, r.options.easing, i) : r.cssTransitions === !1 ? n({
                animStart: r.currentLeft
            }).animate({
                animStart: t
            }, {
                duration: r.options.speed,
                easing: r.options.easing,
                step: function(n) {
                    r.options.vertical === !1 ? (u[r.animType] = "translate(" + n + "px, 0px)", r.$slideTrack.css(u)) : (u[r.animType] = "translate(0px," + n + "px)", r.$slideTrack.css(u))
                },
                complete: function() {
                    i && i.call()
                }
            }) : (r.applyTransition(), u[r.animType] = r.options.vertical === !1 ? "translate3d(" + t + "px, 0px, 0px)" : "translate3d(0px," + t + "px, 0px)", r.$slideTrack.css(u), i && setTimeout(function() {
                r.disableTransition(), i.call()
            }, r.options.speed))
        }, t.prototype.asNavFor = function(t) {
            var i = this,
                r = null != i.options.asNavFor ? n(i.options.asNavFor).getSlick() : null;
            null != r && r.slideHandler(t, !0)
        }, t.prototype.applyTransition = function(n) {
            var t = this,
                i = {};
            i[t.transitionType] = t.options.fade === !1 ? t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : "opacity " + t.options.speed + "ms " + t.options.cssEase, t.options.fade === !1 ? t.$slideTrack.css(i) : t.$slides.eq(n).css(i)
        }, t.prototype.autoPlay = function() {
            var n = this;
            n.autoPlayTimer && clearInterval(n.autoPlayTimer), n.slideCount > n.options.slidesToShow && n.paused !== !0 && (n.autoPlayTimer = setInterval(n.autoPlayIterator, n.options.autoplaySpeed))
        }, t.prototype.autoPlayClear = function() {
            var n = this;
            n.autoPlayTimer && clearInterval(n.autoPlayTimer)
        }, t.prototype.autoPlayIterator = function() {
            var n = this;
            n.options.infinite === !1 ? 1 === n.direction ? (n.currentSlide + 1 === n.slideCount - 1 && (n.direction = 0), n.slideHandler(n.currentSlide + n.options.slidesToScroll)) : (0 == n.currentSlide - 1 && (n.direction = 1), n.slideHandler(n.currentSlide - n.options.slidesToScroll)) : n.slideHandler(n.currentSlide + n.options.slidesToScroll)
        }, t.prototype.buildArrows = function() {
            var t = this;
            t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow = n(t.options.prevArrow), t.$nextArrow = n(t.options.nextArrow), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.appendTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), t.options.infinite !== !0 && t.$prevArrow.addClass("slick-disabled"))
        }, t.prototype.buildDots = function() {
            var i, r, t = this;
            if (t.options.dots === !0 && t.slideCount > t.options.slidesToShow) {
                for (r = '<ul class="' + t.options.dotsClass + '">', i = 0; i <= t.getDotCount(); i += 1) r += "<li>" + t.options.customPaging.call(this, t, i) + "<\/li>";
                r += "<\/ul>", t.$dots = n(r).appendTo(t.options.appendDots), t.$dots.find("li").first().addClass("slick-active")
            }
        }, t.prototype.buildOut = function() {
            var t = this;
            t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function(t, i) {
                n(i).attr("index", t)
            }), t.$slidesCache = t.$slides, t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? n('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), t.options.centerMode === !0 && (t.options.slidesToScroll = 1), n("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.options.accessibility === !0 && t.$list.prop("tabIndex", 0), t.setSlideClasses("number" == typeof this.currentSlide ? this.currentSlide : 0), t.options.draggable === !0 && t.$list.addClass("draggable")
        }, t.prototype.checkResponsive = function() {
            var r, i, u, t = this,
                f = t.$slider.width(),
                e = window.innerWidth || n(window).width();
            if ("window" === t.respondTo ? u = e : "slider" === t.respondTo ? u = f : "min" === t.respondTo && (u = Math.min(e, f)), t.originalSettings.responsive && t.originalSettings.responsive.length > -1 && null !== t.originalSettings.responsive) {
                i = null;
                for (r in t.breakpoints) t.breakpoints.hasOwnProperty(r) && u < t.breakpoints[r] && (i = t.breakpoints[r]);
                null !== i ? null !== t.activeBreakpoint ? i !== t.activeBreakpoint && (t.activeBreakpoint = i, t.options = n.extend({}, t.originalSettings, t.breakpointSettings[i]), t.refresh()) : (t.activeBreakpoint = i, t.options = n.extend({}, t.originalSettings, t.breakpointSettings[i]), t.refresh()) : null !== t.activeBreakpoint && (t.activeBreakpoint = null, t.options = t.originalSettings, t.refresh())
            }
        }, t.prototype.changeSlide = function(t, i) {
            var e, o, c, u, s, r = this,
                l = n(t.target),
                f, h;
            switch (l.is("a") && t.preventDefault(), c = 0 != r.slideCount % r.options.slidesToScroll, e = c ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, t.data.message) {
                case "previous":
                    o = 0 === e ? r.options.slidesToScroll : r.options.slidesToShow - e, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - o, !1, i);
                    break;
                case "next":
                    o = 0 === e ? r.options.slidesToScroll : e, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + o, !1, i);
                    break;
                case "index":
                    if (f = 0 === t.data.index ? 0 : t.data.index || n(t.target).parent().index() * r.options.slidesToScroll, u = r.getNavigableIndexes(), s = 0, u[f] && u[f] === f)
                        if (f > u[u.length - 1]) f = u[u.length - 1];
                        else
                            for (h in u) {
                                if (f < u[h]) {
                                    f = s;
                                    break
                                }
                                s = u[h]
                            }
                        r.slideHandler(f, !1, i);
                default:
                    return
            }
        }, t.prototype.clickHandler = function(n) {
            var t = this;
            t.shouldClick === !1 && (n.stopImmediatePropagation(), n.stopPropagation(), n.preventDefault())
        }, t.prototype.destroy = function() {
            var t = this;
            t.autoPlayClear(), t.touchObject = {}, n(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && "object" != typeof t.options.prevArrow && t.$prevArrow.remove(), t.$nextArrow && "object" != typeof t.options.nextArrow && t.$nextArrow.remove(), t.$slides.parent().hasClass("slick-track") && t.$slides.unwrap().unwrap(), t.$slides.removeClass("slick-slide slick-active slick-center slick-visible").removeAttr("index").css({
                position: "",
                left: "",
                top: "",
                zIndex: "",
                opacity: "",
                width: ""
            }), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$list.off(".slick"), n(window).off(".slick-" + t.instanceUid), n(document).off(".slick-" + t.instanceUid)
        }, t.prototype.disableTransition = function(n) {
            var t = this,
                i = {};
            i[t.transitionType] = "", t.options.fade === !1 ? t.$slideTrack.css(i) : t.$slides.eq(n).css(i)
        }, t.prototype.fadeSlide = function(n, t, i) {
            var r = this;
            r.cssTransitions === !1 ? (r.$slides.eq(t).css({
                zIndex: 1e3
            }), r.$slides.eq(t).animate({
                opacity: 1
            }, r.options.speed, r.options.easing, i), r.$slides.eq(n).animate({
                opacity: 0
            }, r.options.speed, r.options.easing)) : (r.applyTransition(t), r.applyTransition(n), r.$slides.eq(t).css({
                opacity: 1,
                zIndex: 1e3
            }), r.$slides.eq(n).css({
                opacity: 0
            }), i && setTimeout(function() {
                r.disableTransition(t), r.disableTransition(n), i.call()
            }, r.options.speed))
        }, t.prototype.filterSlides = function(n) {
            var t = this;
            null !== n && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(n).appendTo(t.$slideTrack), t.reinit())
        }, t.prototype.getCurrent = function() {
            var n = this;
            return n.currentSlide
        }, t.prototype.getDotCount = function() {
            var n = this,
                i = 0,
                r = 0,
                t = 0;
            if (n.options.infinite === !0) t = Math.ceil(n.slideCount / n.options.slidesToScroll);
            else
                for (; i < n.slideCount;) ++t, i = r + n.options.slidesToShow, r += n.options.slidesToScroll <= n.options.slidesToShow ? n.options.slidesToScroll : n.options.slidesToShow;
            return t - 1
        }, t.prototype.getLeft = function(n) {
            var f, r, i, t = this,
                u = 0;
            return t.slideOffset = 0, r = t.$slides.first().outerHeight(), t.options.infinite === !0 ? (t.slideCount > t.options.slidesToShow && (t.slideOffset = -1 * t.slideWidth * t.options.slidesToShow, u = -1 * r * t.options.slidesToShow), 0 != t.slideCount % t.options.slidesToScroll && n + t.options.slidesToScroll > t.slideCount && t.slideCount > t.options.slidesToShow && (n > t.slideCount ? (t.slideOffset = -1 * (t.options.slidesToShow - (n - t.slideCount)) * t.slideWidth, u = -1 * (t.options.slidesToShow - (n - t.slideCount)) * r) : (t.slideOffset = -1 * t.slideCount % t.options.slidesToScroll * t.slideWidth, u = -1 * t.slideCount % t.options.slidesToScroll * r))) : n + t.options.slidesToShow > t.slideCount && (t.slideOffset = (n + t.options.slidesToShow - t.slideCount) * t.slideWidth, u = (n + t.options.slidesToShow - t.slideCount) * r), t.slideCount <= t.options.slidesToShow && (t.slideOffset = 0, u = 0), t.options.centerMode === !0 && t.options.infinite === !0 ? t.slideOffset += t.slideWidth * Math.floor(t.options.slidesToShow / 2) - t.slideWidth : t.options.centerMode === !0 && (t.slideOffset = 0, t.slideOffset += t.slideWidth * Math.floor(t.options.slidesToShow / 2)), f = t.options.vertical === !1 ? -1 * n * t.slideWidth + t.slideOffset : -1 * n * r + u, t.options.variableWidth === !0 && (i = t.slideCount <= t.options.slidesToShow || t.options.infinite === !1 ? t.$slideTrack.children(".slick-slide").eq(n) : t.$slideTrack.children(".slick-slide").eq(n + t.options.slidesToShow), f = i[0] ? -1 * i[0].offsetLeft : 0, t.options.centerMode === !0 && (i = t.options.infinite === !1 ? t.$slideTrack.children(".slick-slide").eq(n) : t.$slideTrack.children(".slick-slide").eq(n + t.options.slidesToShow + 1), f = i[0] ? -1 * i[0].offsetLeft : 0, f += (t.$list.width() - i.outerWidth()) / 2)), f
        }, t.prototype.getNavigableIndexes = function() {
            for (var n = this, t = 0, i = 0, r = []; t < n.slideCount;) r.push(t), t = i + n.options.slidesToScroll, i += n.options.slidesToScroll <= n.options.slidesToShow ? n.options.slidesToScroll : n.options.slidesToShow;
            return r
        }, t.prototype.getSlideCount = function() {
            var r, t = this,
                i;
            return t.options.swipeToSlide === !0 ? (i = null, t.$slideTrack.find(".slick-slide").each(function(r, u) {
                if (u.offsetLeft + n(u).outerWidth() / 2 > -1 * t.swipeLeft) return i = u, !1
            }), r = Math.abs(n(i).attr("index") - t.currentSlide)) : t.options.slidesToScroll
        }, t.prototype.init = function() {
            var t = this;
            n(t.$slider).hasClass("slick-initialized") || (n(t.$slider).addClass("slick-initialized"), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots()), null !== t.options.onInit && t.options.onInit.call(this, t)
        }, t.prototype.initArrowEvents = function() {
            var n = this;
            n.options.arrows === !0 && n.slideCount > n.options.slidesToShow && (n.$prevArrow.on("click.slick", {
                message: "previous"
            }, n.changeSlide), n.$nextArrow.on("click.slick", {
                message: "next"
            }, n.changeSlide))
        }, t.prototype.initDotEvents = function() {
            var t = this;
            t.options.dots === !0 && t.slideCount > t.options.slidesToShow && n("li", t.$dots).on("click.slick", {
                message: "index"
            }, t.changeSlide), t.options.dots === !0 && t.options.pauseOnDotsHover === !0 && t.options.autoplay === !0 && n("li", t.$dots).on("mouseenter.slick", function() {
                t.paused = !0, t.autoPlayClear()
            }).on("mouseleave.slick", function() {
                t.paused = !1, t.autoPlay()
            })
        }, t.prototype.initializeEvents = function() {
            var t = this;
            t.initArrowEvents(), t.initDotEvents(), t.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), t.options.pauseOnHover === !0 && t.options.autoplay === !0 && (t.$list.on("mouseenter.slick", function() {
                t.paused = !0, t.autoPlayClear()
            }), t.$list.on("mouseleave.slick", function() {
                t.paused = !1, t.autoPlay()
            })), t.options.accessibility === !0 && t.$list.on("keydown.slick", t.keyHandler), t.options.focusOnSelect === !0 && n(t.options.slide, t.$slideTrack).on("click.slick", t.selectHandler), n(window).on("orientationchange.slick.slick-" + t.instanceUid, function() {
                t.checkResponsive(), t.setPosition()
            }), n(window).on("resize.slick.slick-" + t.instanceUid, function() {
                n(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
                    t.windowWidth = n(window).width(), t.checkResponsive(), t.setPosition()
                }, 50))
            }), n("*[draggable!=true]", t.$slideTrack).on("dragstart", function(n) {
                n.preventDefault()
            }), n(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), n(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition)
        }, t.prototype.initUI = function() {
            var n = this;
            n.options.arrows === !0 && n.slideCount > n.options.slidesToShow && (n.$prevArrow.show(), n.$nextArrow.show()), n.options.dots === !0 && n.slideCount > n.options.slidesToShow && n.$dots.show(), n.options.autoplay === !0 && n.autoPlay()
        }, t.prototype.keyHandler = function(n) {
            var t = this;
            37 === n.keyCode && t.options.accessibility === !0 ? t.changeSlide({
                data: {
                    message: "previous"
                }
            }) : 39 === n.keyCode && t.options.accessibility === !0 && t.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, t.prototype.lazyLoad = function() {
            function f(t) {
                n("img[data-lazy]", t).each(function() {
                    var t = n(this),
                        i = n(this).attr("data-lazy");
                    t.load(function() {
                        t.animate({
                            opacity: 1
                        }, 200)
                    }).css({
                        opacity: 0
                    }).attr("src", i).removeAttr("data-lazy").removeClass("slick-loading")
                })
            }
            var e, r, i, u, t = this;
            t.options.centerMode === !0 ? t.options.infinite === !0 ? (i = t.currentSlide + (t.options.slidesToShow / 2 + 1), u = i + t.options.slidesToShow + 2) : (i = Math.max(0, t.currentSlide - (t.options.slidesToShow / 2 + 1)), u = 2 + (t.options.slidesToShow / 2 + 1) + t.currentSlide) : (i = t.options.infinite ? t.options.slidesToShow + t.currentSlide : t.currentSlide, u = i + t.options.slidesToShow, t.options.fade === !0 && (i > 0 && i--, u <= t.slideCount && u++)), e = t.$slider.find(".slick-slide").slice(i, u), f(e), t.slideCount <= t.options.slidesToShow ? (r = t.$slider.find(".slick-slide"), f(r)) : t.currentSlide >= t.slideCount - t.options.slidesToShow ? (r = t.$slider.find(".slick-cloned").slice(0, t.options.slidesToShow), f(r)) : 0 === t.currentSlide && (r = t.$slider.find(".slick-cloned").slice(-1 * t.options.slidesToShow), f(r))
        }, t.prototype.loadSlider = function() {
            var n = this;
            n.setPosition(), n.$slideTrack.css({
                opacity: 1
            }), n.$slider.removeClass("slick-loading"), n.initUI(), "progressive" === n.options.lazyLoad && n.progressiveLazyLoad()
        }, t.prototype.postSlide = function(n) {
            var t = this;
            null !== t.options.onAfterChange && t.options.onAfterChange.call(this, t, n), t.animating = !1, t.setPosition(), t.swipeLeft = null, t.options.autoplay === !0 && t.paused === !1 && t.autoPlay()
        }, t.prototype.progressiveLazyLoad = function() {
            var r, t, i = this;
            r = n("img[data-lazy]", i.$slider).length, r > 0 && (t = n("img[data-lazy]", i.$slider).first(), t.attr("src", t.attr("data-lazy")).removeClass("slick-loading").load(function() {
                t.removeAttr("data-lazy"), i.progressiveLazyLoad()
            }).error(function() {
                t.removeAttr("data-lazy"), i.progressiveLazyLoad()
            }))
        }, t.prototype.refresh = function() {
            var t = this,
                i = t.currentSlide;
            t.destroy(), n.extend(t, t.initials), t.init(), t.changeSlide({
                data: {
                    message: "index",
                    index: i
                }
            }, !0)
        }, t.prototype.reinit = function() {
            var t = this;
            t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.options.focusOnSelect === !0 && n(t.options.slide, t.$slideTrack).on("click.slick", t.selectHandler), t.setSlideClasses(0), t.setPosition(), null !== t.options.onReInit && t.options.onReInit.call(this, t)
        }, t.prototype.removeSlide = function(n, t, i) {
            var r = this;
            return "boolean" == typeof n ? (t = n, n = t === !0 ? 0 : r.slideCount - 1) : n = t === !0 ? --n : n, r.slideCount < 1 || 0 > n || n > r.slideCount - 1 ? !1 : (r.unload(), i === !0 ? r.$slideTrack.children().remove() : r.$slideTrack.children(this.options.slide).eq(n).remove(), r.$slides = r.$slideTrack.children(this.options.slide), r.$slideTrack.children(this.options.slide).detach(), r.$slideTrack.append(r.$slides), r.$slidesCache = r.$slides, r.reinit(), void 0)
        }, t.prototype.setCSS = function(n) {
            var r, u, t = this,
                i = {};
            t.options.rtl === !0 && (n = -n), r = "left" == t.positionProp ? n + "px" : "0px", u = "top" == t.positionProp ? n + "px" : "0px", i[t.positionProp] = n, t.transformsEnabled === !1 ? t.$slideTrack.css(i) : (i = {}, t.cssTransitions === !1 ? (i[t.animType] = "translate(" + r + ", " + u + ")", t.$slideTrack.css(i)) : (i[t.animType] = "translate3d(" + r + ", " + u + ", 0px)", t.$slideTrack.css(i)))
        }, t.prototype.setDimensions = function() {
            var t = this,
                i, r;
            (t.options.vertical === !1 ? t.options.centerMode === !0 && t.$list.css({
                padding: "0px " + t.options.centerPadding
            }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), t.options.centerMode === !0 && t.$list.css({
                padding: t.options.centerPadding + " 0px"
            })), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), t.options.vertical === !1 && t.options.variableWidth === !1) ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : t.options.variableWidth === !0 ? (i = 0, t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.children(".slick-slide").each(function() {
                i += Math.ceil(n(this).outerWidth(!0))
            }), t.$slideTrack.width(Math.ceil(i) + 1)) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length))), r = t.$slides.first().outerWidth(!0) - t.$slides.first().width(), t.options.variableWidth === !1 && t.$slideTrack.children(".slick-slide").width(t.slideWidth - r)
        }, t.prototype.setFade = function() {
            var i, t = this;
            t.$slides.each(function(r, u) {
                i = -1 * t.slideWidth * r, t.options.rtl === !0 ? n(u).css({
                    position: "relative",
                    right: i,
                    top: 0,
                    zIndex: 800,
                    opacity: 0
                }) : n(u).css({
                    position: "relative",
                    left: i,
                    top: 0,
                    zIndex: 800,
                    opacity: 0
                })
            }), t.$slides.eq(t.currentSlide).css({
                zIndex: 900,
                opacity: 1
            })
        }, t.prototype.setHeight = function() {
            var n = this,
                t;
            1 === n.options.slidesToShow && n.options.adaptiveHeight === !0 && n.options.vertical === !1 && (t = n.$slides.eq(n.currentSlide).outerHeight(!0), n.$list.css("height", t))
        }, t.prototype.setPosition = function() {
            var n = this;
            n.setDimensions(), n.setHeight(), n.options.fade === !1 ? n.setCSS(n.getLeft(n.currentSlide)) : n.setFade(), null !== n.options.onSetPosition && n.options.onSetPosition.call(this, n)
        }, t.prototype.setProps = function() {
            var n = this,
                t = document.body.style;
            n.positionProp = n.options.vertical === !0 ? "top" : "left", "top" === n.positionProp ? n.$slider.addClass("slick-vertical") : n.$slider.removeClass("slick-vertical"), (void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.msTransition) && n.options.useCSS === !0 && (n.cssTransitions = !0), void 0 !== t.OTransform && (n.animType = "OTransform", n.transformType = "-o-transform", n.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (n.animType = !1)), void 0 !== t.MozTransform && (n.animType = "MozTransform", n.transformType = "-moz-transform", n.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (n.animType = !1)), void 0 !== t.webkitTransform && (n.animType = "webkitTransform", n.transformType = "-webkit-transform", n.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (n.animType = !1)), void 0 !== t.msTransform && (n.animType = "msTransform", n.transformType = "-ms-transform", n.transitionType = "msTransition", void 0 === t.msTransform && (n.animType = !1)), void 0 !== t.transform && n.animType !== !1 && (n.animType = "transform", n.transformType = "transform", n.transitionType = "transition"), n.transformsEnabled = null !== n.animType && n.animType !== !1
        }, t.prototype.setSlideClasses = function(n) {
            var u, i, r, f, t = this;
            t.$slider.find(".slick-slide").removeClass("slick-active").removeClass("slick-center"), i = t.$slider.find(".slick-slide"), t.options.centerMode === !0 ? (u = Math.floor(t.options.slidesToShow / 2), t.options.infinite === !0 && (n >= u && n <= t.slideCount - 1 - u ? t.$slides.slice(n - u, n + u + 1).addClass("slick-active") : (r = t.options.slidesToShow + n, i.slice(r - u + 1, r + u + 2).addClass("slick-active")), 0 === n ? i.eq(i.length - 1 - t.options.slidesToShow).addClass("slick-center") : n === t.slideCount - 1 && i.eq(t.options.slidesToShow).addClass("slick-center")), t.$slides.eq(n).addClass("slick-center")) : n >= 0 && n <= t.slideCount - t.options.slidesToShow ? t.$slides.slice(n, n + t.options.slidesToShow).addClass("slick-active") : i.length <= t.options.slidesToShow ? i.addClass("slick-active") : (f = t.slideCount % t.options.slidesToShow, r = t.options.infinite === !0 ? t.options.slidesToShow + n : n, t.options.slidesToShow == t.options.slidesToScroll && t.slideCount - n < t.options.slidesToShow ? i.slice(r - (t.options.slidesToShow - f), r + f).addClass("slick-active") : i.slice(r, r + t.options.slidesToShow).addClass("slick-active")), "ondemand" === t.options.lazyLoad && t.lazyLoad()
        }, t.prototype.setupInfinite = function() {
            var i, r, u, t = this;
            if (t.options.fade === !0 && (t.options.centerMode = !1), t.options.infinite === !0 && t.options.fade === !1 && (r = null, t.slideCount > t.options.slidesToShow)) {
                for (u = t.options.centerMode === !0 ? t.options.slidesToShow + 1 : t.options.slidesToShow, i = t.slideCount; i > t.slideCount - u; i -= 1) r = i - 1, n(t.$slides[r]).clone(!0).attr("id", "").attr("index", r - t.slideCount).prependTo(t.$slideTrack).addClass("slick-cloned");
                for (i = 0; u > i; i += 1) r = i, n(t.$slides[r]).clone(!0).attr("id", "").attr("index", r + t.slideCount).appendTo(t.$slideTrack).addClass("slick-cloned");
                t.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                    n(this).attr("id", "")
                })
            }
        }, t.prototype.selectHandler = function(t) {
            var i = this,
                r = parseInt(n(t.target).parents(".slick-slide").attr("index"));
            return r || (r = 0), i.slideCount <= i.options.slidesToShow ? (i.$slider.find(".slick-slide").removeClass("slick-active"), i.$slides.eq(r).addClass("slick-active"), i.options.centerMode === !0 && (i.$slider.find(".slick-slide").removeClass("slick-center"), i.$slides.eq(r).addClass("slick-center")), i.asNavFor(r), void 0) : (i.slideHandler(r), void 0)
        }, t.prototype.slideHandler = function(n, t, i) {
            var u, f, o, e, s = null,
                r = this;
            return t = t || !1, r.animating === !0 && r.options.waitForAnimate === !0 || r.options.fade === !0 && r.currentSlide === n || r.slideCount <= r.options.slidesToShow ? void 0 : (t === !1 && r.asNavFor(n), u = n, s = r.getLeft(u), e = r.getLeft(r.currentSlide), r.currentLeft = null === r.swipeLeft ? e : r.swipeLeft, r.options.infinite === !1 && r.options.centerMode === !1 && (0 > n || n > r.getDotCount() * r.options.slidesToScroll) ? (r.options.fade === !1 && (u = r.currentSlide, i !== !0 ? r.animateSlide(e, function() {
                r.postSlide(u)
            }) : r.postSlide(u)), void 0) : r.options.infinite === !1 && r.options.centerMode === !0 && (0 > n || n > r.slideCount - r.options.slidesToScroll) ? (r.options.fade === !1 && (u = r.currentSlide, i !== !0 ? r.animateSlide(e, function() {
                r.postSlide(u)
            }) : r.postSlide(u)), void 0) : (r.options.autoplay === !0 && clearInterval(r.autoPlayTimer), f = 0 > u ? 0 != r.slideCount % r.options.slidesToScroll ? r.slideCount - r.slideCount % r.options.slidesToScroll : r.slideCount + u : u >= r.slideCount ? 0 != r.slideCount % r.options.slidesToScroll ? 0 : u - r.slideCount : u, r.animating = !0, null !== r.options.onBeforeChange && n !== r.currentSlide && r.options.onBeforeChange.call(this, r, r.currentSlide, f), o = r.currentSlide, r.currentSlide = f, r.setSlideClasses(r.currentSlide), r.updateDots(), r.updateArrows(), r.options.fade === !0 ? (i !== !0 ? r.fadeSlide(o, f, function() {
                r.postSlide(f)
            }) : r.postSlide(f), void 0) : (i !== !0 ? r.animateSlide(s, function() {
                r.postSlide(f)
            }) : r.postSlide(f), void 0)))
        }, t.prototype.startLoad = function() {
            var n = this;
            n.options.arrows === !0 && n.slideCount > n.options.slidesToShow && (n.$prevArrow.hide(), n.$nextArrow.hide()), n.options.dots === !0 && n.slideCount > n.options.slidesToShow && n.$dots.hide(), n.$slider.addClass("slick-loading")
        }, t.prototype.swipeDirection = function() {
            var i, r, u, n, t = this;
            return i = t.touchObject.startX - t.touchObject.curX, r = t.touchObject.startY - t.touchObject.curY, u = Math.atan2(r, i), n = Math.round(180 * u / Math.PI), 0 > n && (n = 360 - Math.abs(n)), 45 >= n && n >= 0 ? t.options.rtl === !1 ? "left" : "right" : 360 >= n && n >= 315 ? t.options.rtl === !1 ? "left" : "right" : n >= 135 && 225 >= n ? t.options.rtl === !1 ? "right" : "left" : "vertical"
        }, t.prototype.swipeEnd = function() {
            var n = this;
            if (n.dragging = !1, n.shouldClick = n.touchObject.swipeLength > 10 ? !1 : !0, void 0 === n.touchObject.curX) return !1;
            if (n.touchObject.swipeLength >= n.touchObject.minSwipe) switch (n.swipeDirection()) {
                case "left":
                    n.slideHandler(n.currentSlide + n.getSlideCount()), n.currentDirection = 0, n.touchObject = {};
                    break;
                case "right":
                    n.slideHandler(n.currentSlide - n.getSlideCount()), n.currentDirection = 1, n.touchObject = {}
            } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
        }, t.prototype.swipeHandler = function(n) {
            var t = this;
            if (!(t.options.swipe === !1 || "ontouchend" in document && t.options.swipe === !1 || t.options.draggable === !1 && -1 !== n.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = n.originalEvent && void 0 !== n.originalEvent.touches ? n.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, n.data.action) {
                case "start":
                    t.swipeStart(n);
                    break;
                case "move":
                    t.swipeMove(n);
                    break;
                case "end":
                    t.swipeEnd(n)
            }
        }, t.prototype.swipeMove = function(n) {
            var r, f, u, i, t = this;
            return i = void 0 !== n.originalEvent ? n.originalEvent.touches : null, !t.dragging || i && 1 !== i.length ? !1 : (r = t.getLeft(t.currentSlide), t.touchObject.curX = void 0 !== i ? i[0].pageX : n.clientX, t.touchObject.curY = void 0 !== i ? i[0].pageY : n.clientY, t.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(t.touchObject.curX - t.touchObject.startX, 2))), f = t.swipeDirection(), "vertical" !== f ? (void 0 !== n.originalEvent && t.touchObject.swipeLength > 4 && n.preventDefault(), u = (t.options.rtl === !1 ? 1 : -1) * (t.touchObject.curX > t.touchObject.startX ? 1 : -1), t.swipeLeft = t.options.vertical === !1 ? r + t.touchObject.swipeLength * u : r + t.touchObject.swipeLength * (t.$list.height() / t.listWidth) * u, t.options.fade === !0 || t.options.touchMove === !1 ? !1 : t.animating === !0 ? (t.swipeLeft = null, !1) : (t.setCSS(t.swipeLeft), void 0)) : void 0)
        }, t.prototype.swipeStart = function(n) {
            var i, t = this;
            return 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow ? (t.touchObject = {}, !1) : (void 0 !== n.originalEvent && void 0 !== n.originalEvent.touches && (i = n.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== i ? i.pageX : n.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== i ? i.pageY : n.clientY, t.dragging = !0, void 0)
        }, t.prototype.unfilterSlides = function() {
            var n = this;
            null !== n.$slidesCache && (n.unload(), n.$slideTrack.children(this.options.slide).detach(), n.$slidesCache.appendTo(n.$slideTrack), n.reinit())
        }, t.prototype.unload = function() {
            var t = this;
            n(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && "object" != typeof t.options.prevArrow && t.$prevArrow.remove(), t.$nextArrow && "object" != typeof t.options.nextArrow && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible").css("width", "")
        }, t.prototype.updateArrows = function() {
            var t, n = this;
            t = Math.floor(n.options.slidesToShow / 2), n.options.arrows === !0 && n.options.infinite !== !0 && n.slideCount > n.options.slidesToShow && (n.$prevArrow.removeClass("slick-disabled"), n.$nextArrow.removeClass("slick-disabled"), 0 === n.currentSlide ? (n.$prevArrow.addClass("slick-disabled"), n.$nextArrow.removeClass("slick-disabled")) : n.currentSlide >= n.slideCount - n.options.slidesToShow && n.options.centerMode === !1 ? (n.$nextArrow.addClass("slick-disabled"), n.$prevArrow.removeClass("slick-disabled")) : n.currentSlide > n.slideCount - n.options.slidesToShow + t && n.options.centerMode === !0 && (n.$nextArrow.addClass("slick-disabled"), n.$prevArrow.removeClass("slick-disabled")))
        }, t.prototype.updateDots = function() {
            var n = this;
            null !== n.$dots && (n.$dots.find("li").removeClass("slick-active"), n.$dots.find("li").eq(Math.floor(n.currentSlide / n.options.slidesToScroll)).addClass("slick-active"))
        }, n.fn.slick = function(n) {
            var i = this;
            return i.each(function(i, r) {
                r.slick = new t(r, n)
            })
        }, n.fn.slickAdd = function(n, t, i) {
            var r = this;
            return r.each(function(r, u) {
                u.slick.addSlide(n, t, i)
            })
        }, n.fn.slickCurrentSlide = function() {
            var n = this;
            return n.get(0).slick.getCurrent()
        }, n.fn.slickFilter = function(n) {
            var t = this;
            return t.each(function(t, i) {
                i.slick.filterSlides(n)
            })
        }, n.fn.slickGoTo = function(n, t) {
            var i = this;
            return i.each(function(i, r) {
                r.slick.changeSlide({
                    data: {
                        message: "index",
                        index: parseInt(n)
                    }
                }, t)
            })
        }, n.fn.slickNext = function() {
            var n = this;
            return n.each(function(n, t) {
                t.slick.changeSlide({
                    data: {
                        message: "next"
                    }
                })
            })
        }, n.fn.slickPause = function() {
            var n = this;
            return n.each(function(n, t) {
                t.slick.autoPlayClear(), t.slick.paused = !0
            })
        }, n.fn.slickPlay = function() {
            var n = this;
            return n.each(function(n, t) {
                t.slick.paused = !1, t.slick.autoPlay()
            })
        }, n.fn.slickPrev = function() {
            var n = this;
            return n.each(function(n, t) {
                t.slick.changeSlide({
                    data: {
                        message: "previous"
                    }
                })
            })
        }, n.fn.slickRemove = function(n, t) {
            var i = this;
            return i.each(function(i, r) {
                r.slick.removeSlide(n, t)
            })
        }, n.fn.slickRemoveAll = function() {
            var n = this;
            return n.each(function(n, t) {
                t.slick.removeSlide(null, null, !0)
            })
        }, n.fn.slickGetOption = function(n) {
            var t = this;
            return t.get(0).slick.options[n]
        }, n.fn.slickSetOption = function(n, t, i) {
            var r = this;
            return r.each(function(r, u) {
                u.slick.options[n] = t, i === !0 && (u.slick.unload(), u.slick.reinit())
            })
        }, n.fn.slickUnfilter = function() {
            var n = this;
            return n.each(function(n, t) {
                t.slick.unfilterSlides()
            })
        }, n.fn.unslick = function() {
            var n = this;
            return n.each(function(n, t) {
                t.slick && t.slick.destroy()
            })
        }, n.fn.getSlick = function() {
            var n = null,
                t = this;
            return t.each(function(t, i) {
                n = i.slick
            }), n
        }
    }), slick = function(n) {
        function r() {
            n(".section-carousel").not(".unifiedChannel .section-carousel").each(function(t, r) {
                i(n(r))
            })
        }

        function i(n) {
            n.hasClass("carousel-8") && n.slick({
                infinite: !1,
                speed: 800,
                slide: ".slide",
                slidesToShow: 8,
                slidesToScroll: 8,
                appendArrows: n.closest(".section").find(".section-header-arrows"),
                responsive: [{
                    breakpoint: t.vp4,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 6
                    }
                }, {
                    breakpoint: t.vp3,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4
                    }
                }, {
                    breakpoint: t.vp2,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        arrows: !1,
                        dots: !0
                    }
                }, {
                    breakpoint: t.vp1 + 60,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        arrows: !1,
                        dots: !0
                    }
                }]
            })
        }
        var t = {
            vp1: 320,
            vp2: 540,
            vp3: 768,
            vp4: 992,
            vp5: 1400
        };
        return {
            loadAll: r,
            loadOne: i
        }
    }, $(document).ready(function() {
        slick(jQuery).loadAll()
    }),
    function(n, t) {
        "use strict";
        var t = t || {};
        t.utils = t.utils || {}, t.utils.heroSliderInit = function(t) {
            var t = t || {},
                o = document.scripts[document.scripts.length - 1],
                s = n(o.parentNode),
                i = ".slideshow" + (t.cssClassId && "-" + t.cssClassId || ""),
                r = s.find(i + " .slides"),
                f = 4500,
                e = function(t) {
                    var r;
                    r = t ? n(i + " .slides > li:eq(" + t + ") .heroitem") : n(i + " .slides > li .heroitem:visible").eq(0), r.hasClass("light-foreground") ? n(".prev-next").addClass("light-foreground") : n(".prev-next").removeClass("light-foreground")
                },
                u;
            n(".slideshow-news").each(function(t, i) {
                var r = n(i);
                r.attr("data-speed") || r.attr("data-speed", f)
            }), u = n("body").data("settings") && n("body").data("settings").length || 0, r.length && (r.parent().find(".navigation .grid-container").attr("data-slidercontrolindex", u), r.parent().find(".prev-next").attr("data-sliderdirectionindex", u)), n.responsiveSlideshow && r.length && r.responsiveSlideshow({
                speed: f,
                sliderIndex: n("body").data("settings") && n("body").data("settings").length || 0,
                rootSelector: i,
                directionNav: i + " .prev-next",
                controlNav: r.children().length > 1 ? i + " .navigation" : null,
                init: function() {
                    n(".heroitem.dark-foreground").removeClass("light-foreground"), e()
                },
                between: e
            })
        }
    }(jQuery, Mscom), $.fn.SetHeaderWidth = function(n) {
        $(window).load(function() {
            var t = $(".headerFlyout>ul").width(),
                i = $("a.mscom-siteIdentity").width(),
                r = i + n - 6;
            $("a.mscom-siteIdentity").width(r), $(".headerFlyout>ul").width(t + n), $("a.mscom-siteIdentity .dropdownCTA").css("margin-left", n + "px")
        })
    }, $(function() {
        var l = $(window).width(),
            t, i, s, h, n, r, o, f, e;
        $("a.mscom-siteIdentity").parent().css("min-width", "250px"), t = $("meta[name='MscomContentLocale']").attr("content"), $("a.mscom-siteLogo").attr("href", "http://www.microsoft.com/" + t), i = "en-au,en-ca,en-cb,en-eg,en-gulf,en-hk,en-ie,en-in,en-jo,en-lb,en-my,en-ng,en-nz,en-ph,en-pk,en-sa,en-sg,en-us,en-za,fr-ca,id-id,vi-vn,zh-cn,zh-tw,th-th,es-xl,fr-fr", i.indexOf(t) != -1 && $("#CityNext .cityNextlist li").css("font-size", "100%"), i = "ar-eg,ar-gulf,ar-iq,ar-ly,tr-tr", i.indexOf(t) != -1 && $("#CityNext .cityNextlist li").css("font-size", "16px"), i = "ja-jp,ko-kr,zh-cn,fr-dz,fr-tn,sk-sk,fr-fr,da-dk,en-lk,fr-ma,tr-tr", i.indexOf(t) != -1 && $("#CityNext h2").css("font-size", "28.8px"), i = "de-de,da-dk,es-xl", window.navigator.userAgent.indexOf("Chrome") != -1 && i.indexOf(t) != -1 && $(".footerCopyRight_ltr").css("margin-left", "40px"), s = $(".mscom-siteIdentity").attr("href"), h = $(".mscom-siteIdentity").text(), $(".mscom-siteIdentity").attr("href", "javascript:void(0)"), $(".mscom-siteIdentity").html(""), $("a.mscom-siteIdentity").append("<a class='dropdownText' href='" + s + "'>" + h + "<\/a><span class='dropdownCTA'><\/span>"), $(".mscom-header-row-2>div:nth-child(1)").append("<div class='headerFlyout'><\/div>");
        n = parseInt($("a.mscom-siteIdentity").width()), $("a.mscom-siteIdentity").css("width", n + "px"), r = 0, $("div.mscom-header-row-2").addClass("titleaddborder"), $("a.mscom-siteIdentity").addClass("titleaddborder"), $(window).resize(function() {
            l = $(window).width(), n = parseInt($("a.mscom-siteIdentity").width()), $(".headerFlyout>ul").css("width", n + "px"), $(".headerFlyout").slideUp(function() {
                $("a.mscom-siteIdentity").removeClass("active"), $("div.mscom-header-row-2").removeClass("active")
            }), r = 0
        }), $(".headerFlyout>ul").css("width", n + "px"), $("span.dropdownCTA").click(function(t) {
            $(".content").is(":animated") || r != 0 ? $(".content").is(":animated") || r != 1 || ($(".headerFlyout>ul").css("width", n + "px"), $(".headerFlyout").slideUp(function() {
                $("a.mscom-siteIdentity").removeClass("active"), $("div.mscom-header-row-2").removeClass("active")
            }), r--) : (n = parseInt($("a.mscom-siteIdentity").width()), $(".headerFlyout>ul").css("width", n + "px"), $("a.mscom-siteIdentity").addClass("active"), $(".headerFlyout").slideDown(), r++), t.stopPropagation()
        }), updateLocalListLocation("#CityNext"), $(window).resize(function() {
            updateLocalListLocation("#CityNext")
        }), $(document).click(function() {
            $(".mscom-siteIdentity").click(function() {}), $(".headerFlyout").click(function() {}), $(".content").is(":animated") || r != 1 || ($(".headerFlyout>ul").css("width", n + "px"), $(".headerFlyout").slideUp(function() {
                $("a.mscom-siteIdentity").removeClass("active"), $("div.mscom-header-row-2").removeClass("active")
            }), r = 0)
        }), o = $("html").css("direction") == "ltr" ? "padding-right" : "padding-left", $(".epgPsSocialShareing .icon .text").hide(), $(".epgPsSocialShareing .icon").hover(function() {
            $(".epgPsSocialShareing .icon .text").hide(), $(this).find(".text").show(), $(".epgPsSocialShareingBox").css("overflow", "visible"), $(this).css(o, $(this).find(".text").width() + 20 + "px"), $(this).css("background-color", "#464646")
        }, function() {
            $(".epgPsSocialShareing .icon .text").hide(), $(".epgPsSocialShareingBox").css("overflow", "hidden"), $(this).css(o, "0px")
        });
        try {
            meteor.sharing.configure("9081c086-c500-4e70-9391-dbe2dea191c0"), f = $(location).attr("href"), e = $(document).attr("title");
            $(".epgSocialWidget-root-facebook").on("click", function() {
                this.href = meteor.sharing.href("Facebook", {
                    url: f,
                    title: e
                })
            });
            $(".epgSocialWidget-root-LinkedIn").on("click", function() {
                this.href = meteor.sharing.href("LinkedIn", {
                    url: f,
                    title: e
                })
            });
            $(".epgSocialWidget-root-twitter").on("click", function() {
                this.href = meteor.sharing.href("Twitter", {
                    url: f,
                    title: e
                })
            });
            $(".epgSocialWidget-root-email").on("click", function() {
                this.href = meteor.sharing.href("Email", {
                    title: e,
                    desc: f
                })
            })
        } catch (v) {}
        $(document).ready(function() {
            $(".icon-customLink-sign").hover(function() {
                $(this).css("background-color", "")
            }, function() {
                $(this).css("background-color", "#fff")
            }), $(".mscom-nav-item-flyout-link").attr("href", "javascript:void(0)")
        })
    }), $(function() {
        initLocale(), updateLocalListLocation("#epg_page"), $(window).resize(function() {
            updateLocalListLocation("#epg_page")
        }), $("#divLocaleSelector").click(function() {
            $("#divLocaleDetail").css("display") == "none" ? $("#divLocaleDetail").addClass("r-mstLcpFlyoutShow") : $("#divLocaleDetail").removeClass("r-mstLcpFlyoutShow")
        }), $(".r-mstLcpClose").click(function() {
            $("#divLocaleDetail").removeClass("r-mstLcpFlyoutShow"), $(".r-mstLcpSearchText").val(""), $(".localeLinkList ul li").css("display", "block")
        });
        $(".r-mstLcpSearchText").on("input", function() {
            var n = $(".r-mstLcpSearchText").val().toLowerCase();
            $(".localeLinkList ul li a").each(function() {
                var i = $(this).text(),
                    t = i.split("-"),
                    r = $.trim(t[0]).toLowerCase(),
                    u = $.trim(t[1]).toLowerCase();
                r.substr(0, n.length) == n || u.substr(0, n.length) == n ? $(this).parent().css("display", "block") : $(this).parent().css("display", "none")
            })
        })
    });
var domain = window.location.origin,
    lans = "ar-eg,ar-gulf,ar-iq,ar-ly,cs-cz,da-dk,de-at,de-ch,de-de,el-gr,en-au,en-ca,en-cb,en-eg,en-gb,en-gulf,en-hk,en-ie,en-in,en-jo,en-lb,en-my,en-ng,en-nz,en-ph,en-pk,en-sa,en-sg,en-us,en-za,es-es,es-xl,fi-fi,fr-be,fr-ca,fr-dz,fr-fr,fr-ma,fr-tn,he-il,hu-hu,id-id,it-id,ja-jp,ko-kr,nb-no,bl-be,nl-nl,pl-pl,pt-br,pt-pt,ro-ro,ru-ru,sk-sk,sv-se,th-th,tr-tr,uk-ua,vi-vn,zh-cn,zh-tw",
    local = [];
$(function() {
        initLinkClick(".BodyContainer")
    }), $(function() {
        var n = $(location).attr("href"),
            t = $(document).attr("title"),
            i = $("#cnxSocialWidget-root-subject").val(),
            r = $("#cnxSocialWidget-root-body").val();
        $(".cnxSocialWidget-root-facebook").attr("href", "http://www.facebook.com/sharer.php?u=" + encodeURIComponent(n)), $(".cnxSocialWidget-root-LinkedIn").attr("href", "http://www.linkedin.com/shareArticle?mini=true&url=" + encodeURIComponent(n) + "&title=" + encodeURIComponent(t)), $(".cnxSocialWidget-root-twitter").attr("href", "http://twitter.com/share?text=" + encodeURIComponent(n) + "&url=" + encodeURIComponent(t)), $(".cnxSocialWidget-root-email").attr("href", "mailto:?subject=" + i + "&body=" + r)
    }), Date.prototype.Format = function(n) {
        var i = {
                "M+": this.getMonth() + 1,
                "d+": this.getDate(),
                "h+": this.getHours(),
                "m+": this.getMinutes(),
                "s+": this.getSeconds(),
                "q+": Math.floor((this.getMonth() + 3) / 3),
                S: this.getMilliseconds()
            },
            t;
        /(y+)/.test(n) && (n = n.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
        for (t in i) new RegExp("(" + t + ")").test(n) && (n = n.replace(RegExp.$1, RegExp.$1.length == 1 ? i[t] : ("00" + i[t]).substr(("" + i[t]).length)));
        return n
    }, Array.prototype.contains = function(n) {
        try {
            if (this.indexOf && typeof this.indexOf == "function") return this.indexOf(n) > -1;
            for (var t in this)
                if (this[t] == n) return !0;
            return !1
        } catch (i) {
            return !1
        }
    }, $(function() {}),
    function(n) {
        var t = [],
            i = function(t, i, r) {
                this.type = i;
                switch (this.type) {
                    case "mp4":
                        this.type = "video/mp4";
                        break;
                    case "webm":
                        this.type = "video/webm";
                        break;
                    case "ogg":
                    case "ogv":
                        this.type = "video/ogg"
                }
                if (this.autoPlay = r !== !1 ? " autoplay" : "", this.poster = "", this.captions = [], this.src = t.attr("href"), this.type === "YouTube") this.src = this.src.replace(/(?:https?:)?(?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:embed\/)?(?:watch\?v=)?(.+)/g, "//www.youtube-nocookie.com/embed/$1");
                else {
                    var u = this;
                    t.children("input.popuPoster").each(function() {
                        u.poster = n(this).data("imgsrc")
                    }), t.children("input.popuCaption").each(function() {
                        var t = n(this);
                        u.captions.push({
                            src: t.data("src"),
                            lang: t.data("lang"),
                            langAbbr: t.data("langabbr"),
                            defaultCaption: t.data("defaultcaption")
                        })
                    })
                }                
                if (this.type === "YouTube") {
                    var params = Cortex.Utilities.getUrlParameters(this.src);
                    if (params != null) {
                        if (!params.hasOwnProperty("enablejsapi")) {
                            this.src = this.src + '&enablejsapi=1';
                        }
                    }
                    else {
                        this.src = this.src + '?enablejsapi=1';
                    }
                }                
                this.captions.length > 0 && typeof videojs == "undefined"
            },
            r = function(i) {
                var s, r, u, h, f, e, o;
                if (typeof window.popupVideo != "undefined" && (window.popupVideo.dispose(), window.popupVideo = undefined), this.vidJSLoadTryCount = 0, this.initVidJS = function() {
                        if (typeof videojs != "undefined") {
                            window.popupVideo = videojs("epgPopupVideo"), n("#epgPopupVideo").addClass("vjs-default-skin video-js").css({
                                width: "100%",
                                height: "100%",
                                "background-color": "#000",
                                position: "absolute",
                                top: "0px",
                                left: "0px",
                                "font-size": "13px"
                            }), n("#epgPopupVideo .vjs-subtitles-button-shown:before").css({
                                content: "'e008' !important"
                            }), n("#epgPopupVideo .vjs-text-track-display").css({
                                left: "50%",
                                right: "auto"
                            }), n("#epgPopupVideo .vjs-big-play-button").css({
                                display: "none"
                            }), n("#epgPopupVideo .vjs-menu-content > li").css({
                                "text-transform": "capitalize"
                            }), n("head").append("<style>#epgPopupVideo .vjs-text-track{left:-50%; position:relative; padding:0 0.3em;}<\/style>");
                            var t = 0,
                                i = setInterval(function() {
                                    n("#epgPopupVideo").hasClass("vjs-playing") ? (window.popupVideo.pause().play(), clearInterval(i)) : (t++, t >= 100 && clearInterval(i))
                                }, 100)
                        } else this.vidJSLoadTryCount < 100 && (this.vidJSLoadTryCount++, setTimeout(this.initVidJS, 100))
                    }, i.preventDefault ? i.preventDefault() : i.returnValue = !1, target = i.currentTarget ? i.currentTarget : i.srcElement, videoInstance = t[n(target).data("vidNum")], n(window).width() <= 600) s = window.open(videoInstance.src, "_blank"), s.focus();
                else {
                    if (videoInstance.type === "YouTube") r = "<div id='epgPopupYoutubeCont' style='width:100%; height:auto; max-width:800px; max-height:100%; position:relative;'><div class='epgPopupYTHeight' style='width:100%; padding-bottom:56.25%;'><iframe src='" + videoInstance.src + "' style='position:absolute; height:100%; width:100%; top:0px; left:0px;' frameborder='0' allowfullscreen><\/iframe><\/div><\/div>";
                    else {
                        if (r = "<div style='width:100%; height:auto; max-width:800px; max-height:100%; position:relative; overflow:hidden; text-align:left;'><div style='padding-bottom:56.25%; position:relative;'><div style='width:100%; height:100%; text-align:left; position:absolute; background-color:#000000;'><\/div><\/div>", videoInstance.type !== "wmv")
                            for (r += "<video id='epgPopupVideo' style='width:100%; height:100%; background-color:#000; position:absolute; top:0px; left:0px;' controls" + videoInstance.autoPlay + " poster='" + videoInstance.poster + "'><source src='" + videoInstance.src + "' ", (videoInstance.type === "video/mp4" || videoInstance.type === "video/webm" || videoInstance.type === "video/ogg") && (r += "type='" + videoInstance.type + "' "), r += "/>", u = 0; u < videoInstance.captions.length; u++) r += "<track src='" + videoInstance.captions[u].src + "' kind='subtitles' srclang='" + videoInstance.captions[u].langAbbr + "' label='" + videoInstance.captions[u].lang, r += videoInstance.captions[u].defaultCaption === !0 ? "' default />" : "' />";
                        h = videoInstance.autoPlay, videoInstance.autoPlay === " autoplay" && (h = !0), videoInstance.type == "wmv" && (f = window.location.protocol, videoInstance.src = videoInstance.src.toUpperCase().indexOf("HTTP:") == 0 ? videoInstance.src.replace(videoInstance.src.substr(0, 5), f) : videoInstance.src.toUpperCase().indexOf("HTTPS:") == 0 ? videoInstance.src.replace(videoInstance.src.substr(0, 6), f) : videoInstance.src.toUpperCase().indexOf("//") == 0 ? f + videoInstance.src : f + "//" + videoInstance.src), e = videoInstance.src.lastIndexOf(".ism"), e > 0 ? (o = videoInstance.src.indexOf("/manifest"), o > 0 && o + 9 === videoInstance.src.length ? r += ", mediaurl=" + videoInstance.src : e + 4 === videoInstance.src.length ? r += ", mediaurl=" + videoInstance.src + "/manifest" : console.log("Video extension error")) : r += ", deliverymethod=Progressive Download, mediaurl=" + videoInstance.src, r += "' />", r += "<\/object>", videoInstance.type !== "wmv" && (r += "<\/video>"), r += "<\/div>"
                    }
                    epgOpenModal(r), videoInstance.captions.length > 0 && this.initVidJS()
                }
            };
        n.fn.popuVideoModalWindow = function() {
            var f = n(this),
                u = arguments;
            f.each(function() {
                var e = n(this),
                    h, o, s, c, f;
                if (e.is("a")) {
                    if (h = !0, u.length > 0)
                        for (o = 0; o < u.length; o++) typeof u[o] == "boolean" && (h = u[o]);
                    s = e.attr("href"), s.indexOf("youtu") !== -1 ? (t.push(new i(e, "YouTube", h)), e.attr("href", "#").on("click", r).data("vidNum", t.length - 1)) : (c = s.lastIndexOf(".") + 1, f = s.substr(c, s.length), (f === "mp4" || f === "ogv" || f === "ogg" || f === "webm" || f === "wmv" || f === "wmx" || f === "ism") && (t.push(new i(e, f, h)), e.attr("href", "#").on("click", r).data("vidNum", t.length - 1)))
                }
            })
        }
    }(jQuery);
var epgModalCreated = !1,
    currentObjPercentW = "0",
    currentObjPercentH = "0",
    currentObjPercentMaxW = "0",
    currentObjPercentMaxH = "0",
    widthLimited = !1,
    heightLimited = !1,
    dimsAlertDisplayed = !1,
    widthAdjusted = !1,
    scrollBarActivated = !1;
$(document).ready(function() {
        createEPGModal(), $(window).resize(function() {
            $("#epgModal > .epgModalBorderProtector").css({
                "line-height": $(window).height() - 100 + "px"
            });
            var n = $("#epgModal > .epgModalBorderProtector").children().first();
            checkCloseButtonSize(n)
        }), $("#epgModal .epgModalBG").click(epgCloseModal), $("#epgModal .epgModalCloseButton").click(epgCloseModal), $("#epgModal .epgModalBorderProtector").click(epgCloseModal)
    }), String.prototype.DelHtmlTag = function() {
        return this.replace(/<[^>]+>/g, "")
    },
    function(n) {
        n.fn.epgModernCalendar = function(t) {
            function ct(n) {
                var e = [],
                    u, s, c, l;
                if (n.indexOf("-") > -1) {
                    var t = n.split("-"),
                        o = Math.abs(+new Date(t[0].substring(0, 4), parseInt(t[0].substring(4, 6)) - 1, t[0].substring(6, 8)) - +new Date(t[1].substring(0, 4), parseInt(t[1].substring(4, 6)) - 1, t[1].substring(6, 8))) / 864e5,
                        h = new Date(t[0].substring(0, 4), parseInt(t[0].substring(4, 6)), 0).getDate(),
                        i = t[0].substring(4, 6),
                        f = t[0].substring(0, 4),
                        r = parseInt(t[0].substring(6, 8)) - 1;
                    for (u = 0; u <= o; u++) r += 1, r > h && (r = 1, i = parseInt(i) + 1, o = o - u, u = 0), s = new Date(f, i - 1, r), f = s.getFullYear(), i = s.getMonth() + 1, h = new Date(f, i, 0).getDate(), c = i < 10 ? "0" + i : i.toString(), l = r < 10 ? "0" + r : r.toString(), e.push(f.toString() + c + l)
                } else e = n.split(",");
                return e
            }

            function c(n) {
                for (var r = new RegExp("[`~!@#$^&*()=|{}':;' ,\\[\\].<>/?~&*]"), i = "", t = 0; t < n.length; t++) i = i + n.substr(t, 1).replace(r, "");
                return i
            }

            function ti(n, t) {
                return n && t ? parseInt(n.eventDate, 10) - parseInt(t.eventDate, 10) : 0
            }

            function ii(n) {
                return n.getDay() !== 0 && n.setDate(n.getDate() - n.getDay()), n
            }

            function w(n, t, r, u) {
                var f = "";
                return i.calendarVersion.toUpperCase() === "V1" ? (f += "<div class='elementcalendar_displayV1'>", f += "<span class='month' style='background-color: " + n + "'>" + t + "<\/span>", f += "<span class='day'>" + r + "<\/span>", f += "<span class='year'>" + u + "<\/span>", f += "<\/div>") : (f += "<div class='elementcalendar_displayV2'>", f += "<span class='month' style='background-color: " + n + "'>" + t + "<\/span>", f += "<span class='day'>" + r + "<\/span>", f += "<\/div>"), f
            }

            function d(n) {
                return "" + n.getFullYear() + (parseInt(n.getMonth(), 10) + 1 > 9 ? parseInt(n.getMonth(), 10) + 1 : "0" + (parseInt(n.getMonth(), 10) + 1)) + (parseInt(n.getDate(), 10) > 9 ? n.getDate() : "0" + n.getDate())
            }
            var i = {
                    calendarURL: "",
                    trendsURL: "",
                    eventSchemaURL: "",
                    initiativesURL: "",
                    itemsatatime: 5,
                    defaultView: "list",
                    displayedViews: ["list", "calendar", "grid"],
                    nodesToSortBy: [{
                        key: "tred",
                        name: "trend",
                        translation: "TREND"
                    }, {
                        key: "sect",
                        name: "eventSector",
                        translation: "PUBLIC SECTOR"
                    }, {
                        key: "indu",
                        name: "industry",
                        translation: "INDUSTRY"
                    }, {
                        key: "type",
                        name: "eventType",
                        translation: "EVENT TYPE"
                    }, {
                        key: "loc",
                        name: "eventLocation",
                        translation: "LOCATION"
                    }, {
                        key: "year",
                        name: "eventDate",
                        translation: "YEAR"
                    }],
                    months: [{
                        shortName: "JAN",
                        longName: "January"
                    }, {
                        shortName: "FEB",
                        longName: "February"
                    }, {
                        shortName: "MAR",
                        longName: "March"
                    }, {
                        shortName: "APR",
                        longName: "April"
                    }, {
                        shortName: "MAY",
                        longName: "May"
                    }, {
                        shortName: "JUN",
                        longName: "June"
                    }, {
                        shortName: "JUL",
                        longName: "July"
                    }, {
                        shortName: "AUG",
                        longName: "August"
                    }, {
                        shortName: "SEP",
                        longName: "September"
                    }, {
                        shortName: "OCT",
                        longName: "October"
                    }, {
                        shortName: "NOV",
                        longName: "November"
                    }, {
                        shortName: "DEC",
                        longName: "December"
                    }],
                    days: {
                        Monday: {
                            shortName: "MON",
                            longName: "Monday"
                        },
                        Tuesday: {
                            shortName: "TUE",
                            longName: "Tuesday"
                        },
                        Wednesday: {
                            shortName: "WED",
                            longName: "Wednesday"
                        },
                        Thursday: {
                            shortName: "THUR",
                            longName: "Thursday"
                        },
                        Friday: {
                            shortName: "FRI",
                            longName: "Friday"
                        },
                        Saturday: {
                            shortName: "SAT",
                            longName: "Saturday"
                        },
                        Sunday: {
                            shortName: "SUN",
                            longName: "Sunday"
                        }
                    },
                    translations: {
                        moreResults: "More Results",
                        of: "of",
                        eventOverview: "eventOverview",
                        errorMessage: "No events are currently scheduled that match your criteria",
                        eventDetails: "EVENT DETAILS",
                        selectAll: "(Select All)",
                        copyLink: "Copy Link:"
                    },
                    selectedHideOptions: ["ID-Enterprise", "ID-Industry", "ID-Trend"],
                    lastItemSetting: {
                        crossTrend: "Cross Trend",
                        crossIndustry: "Cross Industry",
                        crossHostedBy: "Cross Functional Area"
                    },
                    firstItemSetting: {
                        eventType: "Online"
                    },
                    eventTypes: {
                        Online: "#7FBA00",
                        "Online Event": "#00BCF2",
                        "In Person": "#00BCF2",
                        "In-person Event": "#7FBA00",
                        "On-demand Webcast": "#0044CC",
                        "Local Events": "#9B4F96",
                        "Live Webcast": "#0044CC",
                        "Third Party": "#008cf2",
                        Microsoft: "#00BCF2",
                        Webcast: "#0044CC"
                    },
                    displayXMonthsInTheFuture: 12,
                    displayCalendarViewModal: "yes",
                    displayListViewModal: "no",
                    calendarVersion: "V1",
                    changeOrder: {},
                    settings: {},
                    defaultFilters: {},
                    loadStartEventCallbackEventHandler: null,
                    loadCompletedEventCallbackEventHandler: null,
                    fillterLoadCompletedEventCallbackEventHandler: null
                },
                ft;
            n.extend(i, t);
            var e = [],
                s = [],
                r = [],
                l = [],
                b = [],
                o = n(this).find(".leftRail .calendarViews"),
                f = n(this).find(".rightRail");
            loader = n("#epgModernCalendar .calendarHolder .leftRail .loader");
            var h, g, u = "",
                nt = !0,
                ot = function() {
                    lt(), ei(), wt(), loader.show(), i.loadStartEventCallbackEventHandler != null && i.loadStartEventCallbackEventHandler(), ft();
                    var r = y(),
                        t = n("#epgModernCalendar .calendarHolder .leftRail .header .buttonHolder");
                    u = r.view || (n.inArray(i.defaultView, i.displayedViews) == -1 ? i.displayedViews[0] : i.defaultView), t.find(".button").removeClass("active"), t.find("." + u).addClass("active"), o.find(".view").hide(), o.find("." + u).show(), st(function() {
                        ht(function() {
                            vt(), yt(), i.fillterLoadCompletedEventCallbackEventHandler != null && i.fillterLoadCompletedEventCallbackEventHandler(), it(function() {
                                var n = y();
                                tt(n.eventDate), p(u), loader.hide(), i.loadCompletedEventCallbackEventHandler != null && i.loadCompletedEventCallbackEventHandler(), oi()
                            }, rt())
                        })
                    });
                    o.on("click", ".evWrap.toModal", function() {
                        var t = n(n(this).find(".modalcontent")),
                            u = t.data("color"),
                            i = n(t).data("date"),
                            f = n(t).data("description"),
                            e = n(t).data("location"),
                            o = n(t).data("cta"),
                            s = n(t).data("url"),
                            r = n(t).data("title"),
                            h = n(t).data("type"),
                            c = n(t).data("time"),
                            l = n(t).data("tracking");
                        a({
                            popEventDate: i,
                            popTitle: r
                        }), epgOpenModal(et(unescape(u), unescape(i), unescape(f), unescape(e), unescape(o), unescape(s), unescape(r), unescape(h), unescape(c), l), a)
                    })
                },
                tt = function(t) {
                    var r, u;
                    n(f).find(".filterMain.eventDate").find(".year").remove();
                    var e = "",
                        y = "",
                        c = parseInt(h.substr(4, 2)),
                        a = parseInt(h.substr(0, 4));
                    for (r in s.eventDate)
                        if (r > a && (c = 1), s.eventDate.hasOwnProperty(r)) {
                            for (e += "<div class='year'>", e += "<div class='title'>" + r + "<\/div>", u = c; u < 13; u++) {
                                var o = u > 9 ? u : "0" + u,
                                    v = r + "" + o,
                                    l = t && t.indexOf(v) >= 0 ? "selected" : "";
                                t || (l = "selected"), s.eventDate[r][o] && s.eventDate[r][o].length > 0 && (e += "<div class='filter " + l + "' data-year='" + r + "' data-month='" + o + "'><span><\/span>" + i.months[u - 1].longName + "(" + s.eventDate[r][o].length + ")<\/div>")
                            }
                            e += "<\/div>"
                        }
                    n(f).find(".filterMain.eventDate").append(e)
                },
                st = function(t) {
                    n.ajax({
                        type: "GET",
                        url: i.trendsURL,
                        dataType: "json",
                        success: function(n) {
                            var f, r, e, s;
                            if (!n.DataLoad.hasOwnProperty("Feed")) {
                                o.find("." + u).html("<span class='error'>" + i.translations.errorMessage + "<\/span>"), loader.hide(), i.loadStartEventCallbackEventHandler != null && i.loadStartEventCallbackEventHandler();
                                return
                            }
                            for (f = n.DataLoad.Feed.FeedList, r = 0; r < f.length; r++) e = f[r].Content.trend.trendShortName, s = f[r].Content.trend.trendFullName, l[e] = s;
                            t && typeof t == "function" && t()
                        }
                    })
                },
                v = [],
                ht = function(t) {
                    n.ajax({
                        type: "GET",
                        url: i.eventSchemaURL + "&f.DateExpired=" + h,
                        dataType: "json",
                        success: function(n) {
                            if (!n.DataLoad.hasOwnProperty("FilterList") || n.DataLoad.FilterList.length == 0) {
                                o.find("." + u).html("<span class='error'>" + i.translations.errorMessage + "<\/span>"), loader.hide(), i.loadStartEventCallbackEventHandler != null && i.loadStartEventCallbackEventHandler();
                                return
                            }
                            for (var r = 0; r < n.DataLoad.FilterList.length; r++) v[n.DataLoad.FilterList[r].PropertyType] = n.DataLoad.FilterList[r].PropertyEnum;
                            t && typeof t == "function" && t()
                        }
                    })
                },
                it = function(t, r) {
                    f.find(".filter").addClass("disable"), loader.show(), i.loadStartEventCallbackEventHandler != null && i.loadStartEventCallbackEventHandler(), n.ajax({
                        type: "GET",
                        url: r,
                        dataType: "json",
                        success: function(n) {
                            var o, k, f, a, e, v, d, nt, i, u, c;
                            if (s.eventDate = [], n.DataLoad.hasOwnProperty("Feed"))
                                for (o = 0; o < n.DataLoad.Feed.FeedList.length; o++) {
                                    var t = n.DataLoad.Feed.FeedList[o].Content.event,
                                        y = t.eventDate,
                                        r = [],
                                        l = [],
                                        p = [],
                                        w = [],
                                        b = [];
                                    r = ct(y), k = t.eventType, f = t.eventFullDescription != null ? t.eventFullDescription : "", typeof f == "object" && (f = f["#cdata-section"]);
                                    for (a in t.trends) t.trends[a] == "" ? l.push("Cross Trend") : l.push(t.trends[a]);
                                    for (e in t.eventSectorSolutions)
                                        if (t.eventSectorSolutions[e] != "" && t.eventSectorSolutions[e] != null)
                                            for (; v < t.eventSectorSolutions[e].length; v++) p.push(t.eventSectorSolutions[e][v]);
                                    for (d in t.industries) w.push(t.industries[d]);
                                    for (nt in t.eventSectors) b.push(t.eventSectors[nt]);
                                    for (i = 0; i < r.length; i++) r[i] >= h && r[i] <= g && (u = r[i].substring(0, 4), s.eventDate[u] || (s.eventDate[u] = []), c = y.substring(4, 6), s.eventDate[u][c] || (s.eventDate[u][c] = []), s.eventDate[u][c].push({
                                        eventTitle: t.eventTitle,
                                        eventType: k,
                                        eventDate: r[i],
                                        eventTime: t.eventTime,
                                        eventLocation: t.eventLocation,
                                        eventFullDescription: f,
                                        eventPrimaryCTA: t.eventPrimaryCTA,
                                        eventPrimaryLink: t.eventPrimaryLink,
                                        eventShortDescription: t.eventShortDescription,
                                        trend: l,
                                        solution: p,
                                        eventImage: t.eventImage,
                                        industry: w,
                                        hostedBy: t.hostedBy,
                                        eventSector: b,
                                        eventTracking: t.tracking
                                    }))
                                }
                        },
                        complete: function() {
                            t && typeof t == "function" && (t(), f.find(".filter").removeClass("disable"), loader.hide(), i.loadCompletedEventCallbackEventHandler != null && i.loadCompletedEventCallbackEventHandler())
                        }
                    })
                },
                rt = function() {
                    for (var r = "", c = f.find(".filterMain"), u, t = 0; t < c.length; t++) {
                        var l = n(c[t]).data("key");
                        if (l === "tred" || l === "indu") continue;
                        var o = "",
                            s = n(c[t]).find(".filter.selected");
                        for (u = 0; u < s.length; u++) {
                            if (s.hasClass("selectall")) break;
                            l != "year" && (o += n(s[u]).data("val")), u < s.length - 1 && (o += ",")
                        }
                        o != "" && (r += "&q." + l + "=" + o)
                    }
                    return r, i.calendarURL + r;
                };
            var lt = function() {
                    var r = new Date,
                        f = r.getFullYear(),
                        n = r.getMonth() + 1,
                        t = r.getDate(),
                        u;
                    h = f.toString() + (n < 10 ? "0" + n : n).toString() + (t < 10 ? "0" + t : t).toString(), u = new Date((new Date).setMonth(r.getMonth() + i.displayXMonthsInTheFuture)), f = u.getFullYear(), n = u.getMonth() + 1, t = u.getDate(), g = f.toString() + (n < 10 ? "0" + n : n).toString() + (t < 10 ? "0" + t : t).toString()
                },
                at = function(n, t) {
                    var i, r;
                    return i = l.hasOwnProperty(n.Key) ? l[n.Key].toLocaleLowerCase() : n.Key.toLocaleLowerCase(), r = l.hasOwnProperty(t.Key) ? l[t.Key].toLocaleLowerCase() : t.Key.toLocaleLowerCase(), b.indexOf(r) > -1 ? 1 : b.indexOf(i) > -1 ? -1 : i.localeCompare(r)
                },
                vt = function() {
                    for (var u, r, t, n = 0; n < i.nodesToSortBy.length; n++) i.nodesToSortBy[n].name != "eventDate" && (e[i.nodesToSortBy[n].name] = v[i.nodesToSortBy[n].key].sort(at));
                    for (u = h.substring(0, 4), r = [], t = 0; t < v.year.length; t++) v.year[t].Key >= u && r.push(v.year[t]);
                    e.eventDate = r
                },
                yt = function() {
                    for (var r = "", u = y(), t = 0; t < i.nodesToSortBy.length; t++) i.nodesToSortBy.hasOwnProperty(t) && e[i.nodesToSortBy[t].name] && e[i.nodesToSortBy[t].name].length > 0 && (r += i.nodesToSortBy[t].name != "eventDate" ? pt(t, u[i.nodesToSortBy[t].name]) : bt(t, u[i.nodesToSortBy[t].name]));
                    f.append(r);
                    n(f).find(".filterMain .title").on("click", function() {
                        n(n(this).parent()).toggleClass("collapsed")
                    })
                };
            var pt = function(t, r) {
                    var h = "",
                        v = "",
                        u = i.nodesToSortBy[t].name,
                        o = "<div class='filterMain " + u + "' data-filter='" + u + "' data-key='" + i.nodesToSortBy[t].key + "' >",
                        f, s, a;
                    for (o += "<div class='title'>" + i.nodesToSortBy[t].translation + "<\/div>", a = ut(r, null, t), o += typeof i.translations.selectAll != "undefined" ? "<div class='filter " + a.selectAll + " selectall' data-val='selectall'><span style='background-color:'><\/span>" + i.translations.selectAll + "<\/div>" : "<div class='filter " + a.selectAll + " selectall' data-val='selectall'><span style='background-color:'><\/span>(Select All)<\/div>", f = 0; f < e[u].length; f++) u === "trend" && (v = l[e[u][f].Key]), u === "eventType" && (h = i.eventTypes[e[u][f].Key]), s = e[u][f].Key, a = ut(r, c(s), t), o += u === "eventProduct" && n.trim(e[u][f].Value) == "" ? "<div style='display:none;' class='filter " + a.selectOption + "' data-val='" + s + "' style='color:" + h + "'><span style='background-color:" + h + "'><\/span>" + (v || e[u][f].Value) + "<\/div>" : s == "ID-Enterprise" || s == "ID-Industry" || s == "ID-Trend" ? "<div class='filter selected' data-val='" + s + "' style='display:none;color:" + h + "'><span style='background-color:" + h + "'><\/span>" + (v || e[u][f].Value) + "<\/div>" : "<div class='filter " + a.selectOption + "' data-val='" + s + "' style='color:" + h + "'><span style='background-color:" + h + "'><\/span>" + (v || e[u][f].Value) + "<\/div>", v = "";
                    return o += "<\/div>"
                },
                wt = function() {
                    i.firstItemSetting && n.each(i.firstItemSetting, function(n, t) {
                        b.push(t.toLocaleLowerCase())
                    })
                },
                ut = function(n, t, r) {
                    var h = e[i.nodesToSortBy[r].name],
                        f = "selected",
                        u = "selected",
                        o, s;
                    return typeof n == "undefined" ? (i.nodesToSortBy[r].unselectAll == "Yes" && (f = "", u = ""), i.selectedHideOptions.indexOf(t) > -1 && (u = ""), i.defaultFilters.hasOwnProperty(i.nodesToSortBy[r].name) && i.defaultFilters[i.nodesToSortBy[r].name].indexOf(t) > -1 && (u = "selected")) : (o = n.split(",").slice(1, n.split(",").length), o.length != h.length && (f = ""), n.toLowerCase().indexOf("selectall") == -1 && (f = ""), t != null && n.split(",").indexOf(t) < 0 && (u = ""), u = f == "selected" ? u = "selected" : u), s = {
                        selectAll: f,
                        selectOption: u
                    }
                },
                bt = function(n, t) {
                    var r = "",
                        e = "",
                        s = parseInt(h.substr(4, 2)),
                        c = parseInt(h.substr(0, 4)),
                        o = i.nodesToSortBy[n].name,
                        f;
                    return t = t ? t.split(",") : "", nt || (e = "display: none !important;"), f = "", u != "calendar" && (f = "selected"), r += "<div class='filterMain " + o + "' data-filter='" + o + "' ' data-key='" + i.nodesToSortBy[n].key + "' style='" + e + "'>", r += "<div class='title'>" + i.nodesToSortBy[n].translation + "<\/div>", r += typeof i.translations.selectAll != "undefined" ? "<div class='filter " + f + " selectall' data-val='selectall'><span style='background-color:'><\/span>" + i.translations.selectAll + "<\/div>" : "<div class='filter " + f + " selectall' data-val='selectall'><span style='background-color:'><\/span>(Select All)<\/div>", r += "<\/div>"
                },
                kt = function() {
                    var f, p, y, e, a, s, h, rt;
                    if (o.find("." + u).html(""), f = "", p = 0, r.length === 0) f += "<span class='error'>" + i.translations.errorMessage + "<\/span>";
                    else {
                        if (i.calendarVersion.toUpperCase() === "V1") {
                            for (f += "<div class='listView_V1'>", h = 0; h < r.length && r[h]; h++) {
                                var t = r[h],
                                    b = t.eventType,
                                    v = t.eventDate,
                                    nt = parseInt(v.substring(4, 6)),
                                    tt = parseInt(v.substring(6, 8)),
                                    it = parseInt(v.substring(0, 4)),
                                    g = t.eventLocation + " / " + t.eventTime;
                                if (f += "<div class='event' style='display:none;'>", f += "<div class='left'>", y = i.eventTypes[b], f += w(y, i.months[nt - 1].longName, tt, it), f += "<\/div>", f += "<div class='right'>", t.trend.length) {
                                    for (f += "<div class='trends'><span>" + i.translations.trend + " <\/span>", e = 0; e < t.trend.length; e++) n.inArray("ID-Trend", t.trend[e]) == -1 && n.inArray("ID-Industry", t.trend[e]) == -1 && (f += "<span class='activeTrendFilter' data-target='" + t.trend[e] + "'>*" + (l[t.trend[e]] || t.trend[e]) + "<\/span>", e < t.trend.length - 1 && (f += ", "), p++);
                                    f += "<\/div>"
                                }
                                t.eventTime || (g = t.eventLocation), f += "<div class='title'>" + t.eventTitle + "<\/div>", f += "<div class='details'><span class='detailsText'>" + i.translations.eventDetails + "<\/span> <span class='eventTime' style='color: rgb(0, 68, 204);'><div class='subtitle'>" + g + "<\/div><\/span><span class='eventType' style='color: " + y + "'>" + b + (b != t.eventLocation ? " @ " + t.eventLocation : "") + "<\/span><\/div>", f += "<div class='description'><span class='shortDesc'>" + i.translations.eventOverview + "<\/span><div class='hideDesc' style='display:none'>" + t.eventFullDescription + "<\/div><\/div>", f += "<a class='registerbutton' href='" + t.eventPrimaryLink + "' target='_blank'", t.hasOwnProperty("eventTracking") && typeof t.eventTracking != "undefined" && t.eventTracking !== null && t.eventTracking.hasOwnProperty("rioAtlas") && typeof t.eventTracking.rioAtlas != "undefined" && t.eventTracking.rioAtlas !== null && (f += 'onclick="return RioTracking.click(' + Number(t.eventTracking.rioAtlas.inboundCode) + ", '" + t.eventTracking.rioAtlas.uatid + "', '" + t.eventTracking.rioAtlas.actionName + "');\""), f += ">" + t.eventPrimaryCTA + "<\/a>", f += "<\/div>", f += "<\/div>"
                            }
                            f += "<\/div>"
                        }
                        if (i.calendarVersion.toUpperCase() === "V2") {
                            for (f += "<div class='listView_V2'>", h = 0; h < r.length && r[h]; h++) {
                                var t = r[h],
                                    b = t.eventType,
                                    v = t.eventDate,
                                    nt = parseInt(v.substring(4, 6)),
                                    tt = parseInt(v.substring(6, 8)),
                                    it = parseInt(v.substring(0, 4));
                                if (f += "<div class='event' style='display:none;'>", f += "<div class='left'>", y = i.eventTypes[b], f += w(y, i.months[nt - 1].longName, tt, it), f += "<\/div>", f += "<div class='right'>", f += "<div class='title'>" + t.eventTitle + "<\/div>", t.trend.length) {
                                    for (f += "<div class='trends'><span>" + i.translations.trend + " <\/span>", e = 0; e < t.trend.length; e++) n.inArray("ID-Trend", t.trend[e]) == -1 && n.inArray("ID-Industry", t.trend[e]) == -1 && (f += "<span class='activeTrendFilter' data-target='" + t.trend[e] + "'>*" + t.trend[e] + "<\/span>", e < t.trend.length - 1 && (f += ", "), p++);
                                    f += "<\/div>"
                                }
                                f += "<div class='details'><span class='eventType' style='color: " + y + "'><div class='subtitle'>" + t.eventLocation + " / " + t.eventTime + "<\/div><\/span><\/div>", f += "<div class='description'><span class='shortDesc'>" + i.translations.eventOverview + "<\/span><div class='hideDesc' style='display:none'>" + t.eventFullDescription.text() + "<\/div><\/div>", f += "<a class='registerbutton' href='" + t.eventPrimaryLink + "' target='_blank'", t.hasOwnProperty("eventTracking") && typeof t.eventTracking != "undefined" && t.eventTracking !== null && t.eventTracking.hasOwnProperty("rioAtlas") && typeof t.eventTracking.rioAtlas != "undefined" && t.eventTracking.rioAtlas !== null && (f += 'onclick="return RioTracking.click(' + Number(t.eventTracking.rioAtlas.inboundCode) + ", '" + t.eventTracking.rioAtlas.uatid + "', '" + t.eventTracking.rioAtlas.actionName + "');\""), f += "<\/div>", f += "<\/div>"
                            }
                            f += "<\/div>"
                        }
                    }
                    a = o.find("." + u), i.itemsatatime == "" && (i.itemsatatime = 5), s = i.itemsatatime, a.html(f), p == 0 && n(".right .trends").hide();
                    o.find("." + u + " .shortDesc").on("click", function() {
                        n(this).toggleClass("selected").parent().find(".hideDesc").slideToggle()
                    });
                    var k = a.find(".event"),
                        c = k.length,
                        d = i.translations.moreResults + " (" + (s * 1 + 1) + " - " + (Number(s) + Number(i.itemsatatime) < c ? Number(s) + Number(i.itemsatatime) : c) + ") " + i.translations.of + " " + c,
                        ut = "<div id='displayMore' class='displayMore'> <span>" + d + "<\/span><\/div>";
                    for (h = 0; h < Number(s); h++) n(k[h]).show();
                    s < c && a.append(ut), a.find("#displayMore").click(function() {
                        rt()
                    }), rt = function() {
                        for (var t = Number(s); t < Number(s) + Number(i.itemsatatime); t++) n(k[t]).show();
                        s = Number(s) + Number(i.itemsatatime), Number(s) < c ? (d = i.translations.moreResults + " (" + (Number(s) + 1) + " - " + (Number(s) + i.itemsatatime < c ? Number(s) + i.itemsatatime : c) + ") " + i.translations.of + " " + c, a.find("#displayMore").html(d)) : n(a.find("#displayMore")).remove()
                    }
                },
                dt = function() {
                    var t, a, g, nt, h, tt, w, e, b, it;
                    if (o.find("." + u).html(""), t = "", r.length === 0) {
                        t += "<span class='error'>" + i.translations.errorMessage + "<\/span>", o.find("." + u).html(t);
                        return
                    }
                    var v = n(n(f).find(".filterMain.eventDate .filter.selected")).data("year"),
                        c = n(n(f).find(".filterMain.eventDate .filter.selected")).data("month"),
                        ft = v + "" + (c > 9 ? c : "0" + c),
                        rt = new Date(v, parseInt(c, 10) - 1, 1),
                        s = new Date,
                        ut = new Date(s.getFullYear(), s.getMonth(), 1),
                        s = ii(rt),
                        y = "disButton",
                        p = "disButton",
                        l = n(".eventDate>.year >.selected"),
                        k = n(l).prev();
                    if (k.length > 0 && n(k).attr("class") != "title" ? y = "" : (a = n(l).parent().prev(), console.log(a), a.length > 0 && !a.hasClass("selectall") && (y = "")), g = n(l).next(), g.length > 0 ? p = "" : (nt = n(l).parent().next(), nt.length > 0 && (p = "")), t += "<div class='dateDetail'><a class='preButton " + y + "'> <\/a><span style='vertical-align:middle;' class='month'>" + i.months[parseInt(c) - 1].longName + "<\/span>, <span style='vertical-align:middle;' class='year'>" + v + "<\/span><a class='nextButton " + p + "'> <\/a><\/div>", r.length === 0) t += "<span class='error'>" + i.translations.errorMessage + "<\/span>";
                    else {
                        for (t += "<div class='calendarDays'>", t += "<div>" + i.days.Sunday.shortName + "<\/div>", t += "<div>" + i.days.Monday.shortName + "<\/div>", t += "<div>" + i.days.Tuesday.shortName + "<\/div>", t += "<div>" + i.days.Wednesday.shortName + "<\/div>", t += "<div>" + i.days.Thursday.shortName + "<\/div>", t += "<div>" + i.days.Friday.shortName + "<\/div>", t += "<div>" + i.days.Saturday.shortName + "<\/div>", t += "<\/div>", h = 0; h < 35; h++) {
                            tt = d(s), h % 7 == 0 && (t += "<div class='row'>"), t += "<div class='weekDay'>", w = "", s < ut && (w = "expired"), t += "<span class='" + w + "'>" + s.getDate() + "<\/span>";
                            for (e in r) r.hasOwnProperty(e) && r[e].eventDate === tt && (t += "<a class='evWrap " + (i.displayCalendarViewModal && i.displayCalendarViewModal === "yes" ? "toModal" : "") + "'onclick='return false;' href='javascript:void(0)' data-eventDate='" + r[e].eventDate + "' data-title='" + escape(r[e].eventTitle) + "' target='_blank'>", b = i.eventTypes[r[e].eventType], t += "<span class='title' style='color: " + b + "; '>" + r[e].eventLocation + "<\/span>", t += "<span class='desc'>" + r[e].eventTitle + "<\/span>", it = "<input type='hidden' class='modalcontent'data-date='" + escape(r[e].eventDate) + "'data-time ='" + escape(r[e].eventTime) + "'data-color='" + escape(b) + "'data-type='" + escape(r[e].eventType) + "'data-location='" + escape(r[e].eventLocation) + "'data-title='" + escape(r[e].eventTitle) + "'data-url='" + escape(r[e].eventPrimaryLink) + "'data-cta='" + r[e].eventPrimaryCTA + "'data-description='" + escape(r[e].eventFullDescription) + "'/>", t += it, t += i.displayCalendarViewModal && i.displayCalendarViewModal === "yes" ? "<\/a>" : "<\/a>");
                            t += "<\/div>", (h % 7 == 6 || h === 34) && (t += "<\/div>"), s.setDate(s.getDate() + 1)
                        }
                        n("#epgCalendarWW .calendar .calendarViewHolder").append(t)
                    }
                    o.find("." + u).html(t), n(".dateDetail>.preButton").click(function() {
                        var r = n(".eventDate>.year >.selected"),
                            t = n(r).prev(),
                            i;
                        t.length > 0 && n(t).attr("class") != "title" ? n(t).click() : (i = n(r).parent().prev(), console.log(i), i.length > 0 && (t = n(i).children(":last"), n(t).click()))
                    }), n(".dateDetail>.nextButton").click(function() {
                        var r = n(".eventDate>.year >.selected"),
                            t = n(r).next(),
                            i;
                        t.length > 0 ? (n(this).hasClass("disButton") && n(this).removeClass("disButton"), n(t).click()) : (i = n(r).parent().next(), i.length > 0 && (t = n(i).children(":eq(1)"), n(t).click()))
                    })
                },
                gt = function() {
                    var e, f, l, w, s, n, c, v, h;
                    if (o.find("." + u).html(""), e = "", r.length === 0) e += "<span class='error'>" + i.translations.errorMessage + "<\/span>";
                    else {
                        for (e = "<div>", f = new Date, l = new Date((new Date).setMonth(f.getMonth() + i.displayXMonthsInTheFuture)); f < l;) {
                            var y = d(f).substring(0, 6) + "00",
                                p = d(f).substring(0, 6) + "32",
                                a = 0,
                                t = "";
                            if (t += "<div class='monthrow'>", t += "<div class='left'><span class='month'>" + i.months[f.getMonth()].shortName + "<\/span><span class='year'>" + f.getFullYear() + "<\/span><\/div>", t += "<div class='right'>", r.length > 0)
                                for (w = !1, s = 0; s < r.length && r[s]; s++) n = r[s], n.eventDate > y && n.eventDate < p && (c = i.eventTypes[n.eventType], v = s % 4 == 3 ? "" : " middle", t += "<a class='evWrap toModal" + v + "' href='javascript:void(0)' data-eventDate='" + n.eventDate + "' data-title='" + escape(n.eventTitle) + "'>", t += "<div class='top'><span class='day'>" + n.eventDate.substring(6, 8) + "<\/span><span class='location' style='color: " + c + "'>" + n.eventLocation + "<\/span><\/div>", t += "<div class='title modalAction'>" + n.eventTitle + "<\/div>", h = "<input type='hidden' class='modalcontent'data-date='" + escape(n.eventDate) + "' data-time='" + escape(n.eventTime) + "' data-color='" + escape(c) + "'data-type='" + escape(n.eventType) + "' data-location='" + escape(n.eventLocation) + "' data-title='" + escape(n.eventTitle) + "' data-url='" + escape(n.eventPrimaryLink) + "' data-cta='" + escape(n.eventPrimaryCTA) + "' data-description='" + escape(n.eventFullDescription) + "' ", typeof n.eventTracking != "undefined" ? (h += "data-tracking=" + JSON.stringify(n.eventTracking), h += ">") : h += ">", t += h, t += "<\/a>", a++);
                            t += "<\/div>", t += "<\/div>", a > 0 && (e += t), f = new Date(f.setMonth(f.getMonth() + 1, 1))
                        }
                        e += "<\/div>"
                    }
                    o.find("." + u).html(e)
                },
                p = function(t, i) {
                    if (t == "list") {
                        i === "calendar" && f.find(".filterMain.eventDate").find(".selectall").trigger("click"), k(), kt();
                        return
                    }
                    if (t == "grid") {
                        i === "calendar" && f.find(".filterMain.eventDate").find(".selectall").trigger("click"), k(), gt();
                        return
                    }
                    if (t == "calendar") {
                        f.find(".filterMain.eventDate").find(".selectall").removeClass("selected"), n(f).find(".year .filter.selected").length != 1 && ni(h.substring(4, 6), h.substring(0, 4)), k(), dt();
                        return
                    }
                },
                ni = function(t, i) {
                    n(f).find(".year .filter").each(function() {
                        n(this).removeClass("selected")
                    }), n(f).find(".year .filter[data-year='" + i + "'][data-month='" + t + "']").each(function() {
                        n(this).addClass("selected")
                    }), n(f).find(".year .filter.selected").length == 0 && n(f).find(".year .filter").eq(0).addClass("selected"), a()
                };
            ft = function() {
                var f = "",
                    e = "",
                    r, t, s;
                for (n("#epgModernCalendar .calendarHolder .leftRail .header").append("<div class='buttonHolder'><\/div>"), t = 0; t < i.displayedViews.length; t++) i.displayedViews.hasOwnProperty(t) && (f += "<div data-val='" + i.displayedViews[t] + "' class='button " + i.displayedViews[t] + (t === 0 ? " active" : "") + "' style='width: " + 100 / i.displayedViews.length + "%'><div class='holder'><\/div><\/div>", e += "<div class='" + i.displayedViews[t] + " view' " + (t === 0 ? "style='display:block'" : "") + "><\/div>");
                for (r = n("#epgModernCalendar .calendarHolder .leftRail .header .buttonHolder"), r.append(f), o.append(e), t = 0; t < i.displayedViews.length; t++)
                    if (i.displayedViews.hasOwnProperty(t)) {
                        s = t;
                        n(r.find("." + i.displayedViews[s])).on("click", function() {
                            if (!n(this).hasClass("active") && !loader.is(":visible")) {
                                n(r.find(".button")).removeClass("active"), n(this).addClass("active"), n(o.find(".view")).hide(), n(o.find("." + i.displayedViews[n(this).index()])).show();
                                var t = u;
                                u = i.displayedViews[n(this).index()], a(), p(u, t)
                            }
                        })
                    }
            };
            var et = function(t, r, u, f, e, o, s, h, c, l) {
                    var a;
                    return i.calendarVersion.toUpperCase() === "V1" ? (a = "<div class='modalpopup epgModernCalendarPopupV1'>", a += "<div class='top'><div class='left'>" + w(t, i.months[parseInt(r.toString().substring(4, 6)) - 1].longName, parseInt(r.toString().substring(6, 8)), parseInt(r.toString().substring(0, 4))) + "<\/div><div class='right'><div class='subtitle' style='color: " + t + "; border-bottom-color:" + t + "'>" + h + " @ " + f + "<\/div><div class='title'>" + s + "<\/div><\/div><\/div>", a += "<div class='content'><div class='description'>" + unescape(u) + "<\/div><div class='ctaArea'><a href='" + o + "' target='_blank' class='registerCTA' ", typeof l != "undefined" && l !== null && (typeof l == "string" && (l = JSON.parse(l)), l.hasOwnProperty("rioAtlas") && typeof l.rioAtlas != "undefined" && l.rioAtlas !== null && (a += 'onclick="return RioTracking.click(' + Number(l.rioAtlas.inboundCode) + ", '" + l.rioAtlas.uatid + "', '" + l.rioAtlas.actionName + "');\"")), a += ">" + e + "<\/a><div class='copyLink'><span>" + i.translations.copyLink + "<\/span><input type='text' name='copyLinkInput' class='copyLinkInput' value='" + window.location.href + "'/><\/div><\/div><\/div>", a += "<\/div>") : (a = "<div class='modalpopup epgModernCalendarPopupV2'>", a += "<div class='top'><div class='left'>" + w(t, i.months[parseInt(r.toString().substring(4, 6)) - 1].shortName, parseInt(r.toString().substring(6, 8)), parseInt(r.toString().substring(0, 4))) + "<\/div><div class='right'><div class='title' style='border-bottom-color:" + t + "'>" + s + "<\/div><div class='subtitle'>" + f + " / " + c + "<\/div><\/div><\/div>", a += "<div class='content'><div class='description'>" + unescape(u) + "<\/div><div class='ctaArea'><a href='" + o + "' target='_blank' class='registerCTA' ", typeof l != "undefined" && l !== null && (typeof l == "string" && (l = JSON.parse(l)), l.hasOwnProperty("rioAtlas") && typeof l.rioAtlas != "undefined" && l.rioAtlas !== null && (a += 'onclick="return RioTracking.click(' + Number(l.rioAtlas.inboundCode) + ", '" + l.rioAtlas.uatid + "', '" + l.rioAtlas.actionName + "');\"")), a += ">" + e + "<\/a>", a += "<div class='copyLink'><span>" + i.translations.copyLink + "<\/span><input type='text' name='copyLinkInput' class='copyLinkInput' value='" + window.location.href + "'/><\/div><\/div><\/div>", a += "<\/div>"), window.setTimeout(function() {
                        n(n("body").find(".modalpopup .ctaArea .copyLinkInput").val(window.location.href))
                    }, 300), a
                },
                k = function() {
                    var t = [],
                        i, u, e;
                    r = [], t.eventDate = [], f.find(".filterMain.eventDate").find(".filter.selected").each(function() {
                        var r = n(this).data("year"),
                            i = n(this).data("month");
                        i = i > 9 ? i : "0" + i, t.eventDate[r] || (t.eventDate[r] = []), t.eventDate[r][i] || (t.eventDate[r][i] = !0)
                    });
                    for (i in s.eventDate)
                        if (s.eventDate.hasOwnProperty(i) && t.eventDate.hasOwnProperty(i))
                            for (u = 1; u <= 12; u++) e = u > 9 ? u : "0" + u, s.eventDate[i].hasOwnProperty(e) && t.eventDate[i].hasOwnProperty(e) && (r = r.concat(s.eventDate[i][e]));
                    r = n.grep(r, function(n) {
                        return n
                    }), r = r.sort(ti), ui(), fi()
                },
                si = function(n, t) {
                    var r, i, u;
                    if (typeof n == "string" && typeof t == "string") return c(n) === c(t);
                    if (typeof n == "string")
                        for (i = 0; i < t.length; i++)
                            if (c(n) === c(t[i])) return !0;
                    if (typeof t == "string")
                        for (i = 0; i < n.length; i++)
                            if (c(t) === c(n[i])) return !0;
                    for (r = 0; r < n.length; r++)
                        for (i = 0; i < t.length; i++)
                            for (u = 0; u < t[i].length; u++)
                                if (c(n[r]) === c(t[i][u])) return !0;
                    return !1
                },
                ri = function(n) {
                    var t = 0,
                        i;
                    for (i in n) n.hasOwnProperty(i) && (t += 1);
                    return t
                },
                ui = function() {
                    var u, f, t, e;
                    if (ri(i.changeOrder) > 0) {
                        for (u = [], t = 0; t < r.length; t++)
                            for (f in i.changeOrder) i.changeOrder.hasOwnProperty(f) && r[t] && f === r[t].eventTitle && (u[+i.changeOrder[f] - 1] = r[t], r[t] = null);
                        for (u = n.grep(u, function(n) {
                                return n
                            }), t = 0; t < r.length; t++) {
                            for (e = 0; u[e];) e++;
                            u[e] = r[t]
                        }
                        r = u
                    }
                },
                fi = function() {
                    i.settings.maxNumberOfEvents != undefined && +i.settings.maxNumberOfEvents < r.length && (r = r.slice(0, +i.settings.maxNumberOfEvents))
                };
            var ei = function() {
                    for (var n = 0; n < i.nodesToSortBy.length; n++) i.nodesToSortBy.hasOwnProperty(n) && e.indexOf(i.nodesToSortBy[n].name) === -1 && (e[i.nodesToSortBy[n].name] = []);
                    e.hasOwnProperty("eventDate") || (nt = !1, e.eventDate = [], i.nodesToSortBy.push({
                        name: "eventDate",
                        translation: "Year_HIDDEN"
                    }))
                },
                a = function(t) {
                    var s = "",
                        l, r, o, i;
                    for (s = "view=" + u, l = f.find(".filterMain"), i = 0; i < l.length; i++) {
                        var a = n(l[i]).data("filter"),
                            h = "",
                            e = n(l[i]).find(".filter.selected");
                        for (r = 0; r < e.length; r++) {
                            if (e.hasClass("selectall")) break;
                            a === "eventDate" ? (o = n(e[r]).data("month"), o = o > 9 ? o : "0" + o, h += n(e[r]).data("year") + "" + o) : h += c(n(e[r]).data("val")), r < e.length - 1 && (h += ",")
                        }
                        h != "" && (s += "&" + a + "=" + h)
                    }
                    if (t) try {
                        for (i in t) t.hasOwnProperty(i) && (s += s === "" ? i + "=" + t[i] : "&" + i + "=" + t[i])
                    } catch (v) {
                        console.error("Error with KeyValuePairs in reHashURL function: " + v.message)
                    }
                    window.location.hash = s
                },
                y = function() {
                    var t = {},
                        i = window.location.hash,
                        u, r, n, f;
                    for (i = i ? decodeURIComponent(i).substring(1) : "", u = i.split("&"), r = 0; r < u.length; r++) n = u[r].split("="), typeof t[n[0]] == "undefined" ? t[n[0]] = n[1] : typeof t[n[0]] == "string" ? (f = [t[n[0]], n[1]], t[n[0]] = f) : t[n[0]].push(n[1]);
                    return t
                },
                oi = function() {
                    var e = y(),
                        u = unescape(e.popEventDate),
                        f = unescape(e.popTitle),
                        t, n;
                    if (u && u != "" && f && f != "" && r.length > 0)
                        for (t = 0; t < r.length && r[t]; t++)
                            if (n = r[t], n.eventDate == u && n.eventTitle.indexOf(f) >= 0) {
                                var o = n.eventType,
                                    s = i.eventTypes[o],
                                    u = n.eventDate,
                                    h = n.eventTime,
                                    c = n.eventFullDescription,
                                    l = n.eventLocation,
                                    v = n.eventPrimaryCTA,
                                    p = n.eventPrimaryLink,
                                    w = n.eventTitle,
                                    b = n.eventTracking;
                                epgOpenModal(et(unescape(s), unescape(u), unescape(c), unescape(l), unescape(v), unescape(p), unescape(w), unescape(o), unescape(h), b), a)
                            }
                };
            f.on("click", ".filter", function() {
                n(this).hasClass("disable") || (u == "calendar" && n(this).parent().hasClass("year") && !n(this).hasClass("selected") ? (f.find(".year .filter").removeClass("selected"), n(this).addClass("selected")) : n(this).hasClass("selectall") && !n(this).hasClass("selected") ? n(this).parent().find(".filter").addClass("selected") : n(this).hasClass("selectall") && n(this).hasClass("selected") ? n(this).parent().find(".filter").not("[data-val~=ID-Trend],[data-val~=ID-Enterprise],[data-val~=ID-Industry]").removeClass("selected") : (n(this).toggleClass("selected"), n(this).parent().find(".filter").length > n(this).parent().find(".filter.selected").length && n(this).parent().find(".selectall").length > 0 ? n(this).parent().find(".selectall").removeClass("selected") : n(this).parent().parent().find(".selectall").removeClass("selected")), a(), n(this).parent().hasClass("year") || n(this).parent().hasClass("eventDate") ? p(u) : it(function() {
                    var n = y();
                    tt(n.eventDate), p(u)
                }, rt()))
            });
            return ot(), this        
        }, n.fn.epgEventsWebinars = function(t) {
            var e = {
                    description: "Join Microsoft, educators and industry experts for a free monthly webinar series designed to help educators and administrators learn how to help students meet college and career goals.",
                    title: "Upcoming live webinars",
                    eventsUrl: "https://dynamicservice-dev.azurewebsites.net/api/feed?c=epgEvent&amp;l=en-us&amp;s=education&amp;q.sris=EduCast&amp;q.host=It%20Academy&amp;f.Sort=eventDate,asc",
                    pastEventsUrl: "https://dynamicservice-dev.azurewebsites.net/api/feed?c=epgEvent&amp;l=en-us&amp;s=education&amp;q.sris=EduCast&amp;q.host=It%20Academy&amp;f.Sort=eventDate,desc",
                    eventsContainer: "#eventsContainer",
                    pastContainer: "#pastEvents",
                    pastTitle: "On-demand webinars",
                    month: {
                        Jan: "January",
                        Feb: "February",
                        Mar: "March",
                        Apr: "April",
                        May: "May",
                        Jun: "June",
                        Jul: "July",
                        Aug: "August",
                        Sep: "September",
                        Oct: "October",
                        Nov: "November",
                        Dec: "December"
                    },
                    dateFormat: "dd mm yyyy"
                },
                s;
            n.extend(e, t);
            var r = [],
                u = [],
                i = "<h2>" + t.title + "<\/h2>",
                f = function(i, r, u) {
                    var e;
                    if (typeof i != "undefined") {
                        if (e = "", r = r.trim() == "" ? n("#DateFormatInfo div").text() : r, i.trim().length == 8) {
                            var o = i.substr(0, 4),
                                f = i.substr(4, 2),
                                s = i.substr(6, 2);
                            if (u) switch (parseInt(f)) {
                                case 1:
                                    f = t.month.Jan;
                                    break;
                                case 2:
                                    f = t.month.Feb;
                                    break;
                                case 3:
                                    f = t.month.Mar;
                                    break;
                                case 4:
                                    f = t.month.Apr;
                                    break;
                                case 5:
                                    f = t.month.May;
                                    break;
                                case 6:
                                    f = t.month.Jun;
                                    break;
                                case 7:
                                    f = t.month.Jul;
                                    break;
                                case 8:
                                    f = t.month.Aug;
                                    break;
                                case 9:
                                    f = t.month.Sep;
                                    break;
                                case 10:
                                    f = t.month.Oct;
                                    break;
                                case 11:
                                    f = t.month.Nov;
                                    break;
                                case 12:
                                    f = t.month.Dec
                            }
                            e = r.toLowerCase().replace("yyyy", o).replace("mm", f).replace("dd", s)
                        }
                        return e
                    }
                },
                o = function() {
                    n.ajax({
                        url: t.eventsUrl,
                        type: "GET",
                        dataType: "json",
                        success: function(i) {
                            var u = i.DataLoad.Feed.FeedList;
                            n.each(u, function(n, i) {
                                var u = i.Content.event,
                                    o = f(u.eventDate, t.dateFormat, !0),
                                    s = o + " " + u.eventTime,
                                    e;
                                new Date(o) > new Date && (r[u.eventTitle] ? (e = r[u.eventTitle], e.dateTime = e.dateTime + " and " + s, r[u.eventTitle] = e) : r[u.eventTitle] = {
                                    eventFullDescription: u.eventFullDescription != null ? u.eventFullDescription : "",
                                    dateTime: s,
                                    eventPrimaryLink: u.eventPrimaryLink
                                })
                            })
                        },
                        error: function(n, t) {
                            console.log(n.status), console.log(n.readyState), console.log(t)
                        },
                        complete: function() {
                            for (var u in r) r.hasOwnProperty(u) && (i += "<div class='epgPWLInstance' >", i += "<div class='epgPWLDateTime' >", i += r[u].dateTime + "<\/div>", i += "<a class='epgPWLLink' href='" + r[u].eventPrimaryLink + "' target='_blank' >", i += "<h4 class='epgPWLTitle'>" + u + "<\/h4><\/a>", i += "<p class='epgPWLDesc'>" + r[u].eventFullDescription.DelHtmlTag() + "<\/p>", i += "<\/div>");
                            n(t.eventsContainer).html(i)
                        }
                    }).always(function() {
                        n.ajax({
                            url: t.pastEventsUrl,
                            type: "GET",
                            dataType: "json",
                            success: function(i) {
                                var r = i.DataLoad.Feed.FeedList;
                                n.each(r, function(n, i) {
                                    var r = i.Content.event,
                                        e = f(r.eventDate, t.dateFormat, !0),
                                        o = e + " " + r.eventTime,
                                        s;
                                    new Date(e) < new Date && (u[r.eventTitle] ? (s = u[r.eventTitle], s.dateTime += " and " + o) : u[r.eventTitle] = {
                                        eventFullDescription: r.eventFullDescription != null ? r.eventFullDescription : "",
                                        dateTime: o,
                                        eventPrimaryLink: r.eventPrimaryLink
                                    })
                                })
                            },
                            complete: function() {
                                i = "<h2>" + t.pastTitle + "<\/h2>";
                                for (var r in u) u.hasOwnProperty(r) && (i += "<div class='epgPWLInstance' >", i += "<div class='epgPWLDateTime' >", i += u[r].dateTime + "<\/div>", i += "<a class='epgPWLLink' href='" + u[r].eventPrimaryLink + "' target='_blank' >", i += "<h4 class='epgPWLTitle'>" + r + "<\/h4><\/a>", i += "<p class='epgPWLDesc'>" + u[r].eventFullDescription.DelHtmlTag() + "<\/p>", i += "<\/div>");
                                n(t.pastContainer).html(i), n(".epgPWLMainTitle").text(t.description)
                            }
                        })
                    })
                };
            try {
                s = function() {
                    o()
                }()
            } catch (h) {}
        }, n.fn.epgPaginateV2 = function(t) {
            var r = n(this),
                h, c, l, a, v, y, f = [],
                s, i, e, u = {
                    separator: "/",
                    itemsAtATime: 5,
                    targetElementSelector: "",
                    parentContainerSelector: ""
                };
            n.extend(u, t);
            var k = function() {
                    g(), d(), tt(), o()
                },
                d = function() {
                    f = n("body").find(u.parentContainerSelector + " " + u.targetElementSelector), h = r.find(".goFirst"), c = r.find(".goLast"), l = r.find(".goLeft"), a = r.find(".goRight"), v = r.find(".currentPage"), y = r.find(".totalPages"), p(), w()
                },
                g = function() {
                    var t = "<div class='navControl' id='navControl'>";
                    t += "<div class='goFirst'><div class='vbar' style=''><\/div><div class='arrowLeft' style=''><\/div><\/div>", t += "<div class='goLeft'><div class='arrowLeft' style=''><\/div><\/div>", t += "<input type='text' id='currentPage' class='currentPage' value='1'>", t += "<span class='separator'>/<\/span><span id='totalPages' class='totalPages'><\/span>", t += "<div class='goRight'><div class='arrowRight' style=''><\/div><\/div>", t += "<div class='goLast'><div class='arrowRight'><\/div><div class='vbar' style=''><\/div><\/div>", t += "<\/div>", n(r).prepend(t)
                },
                p = function() {
                    s = f.length, i = 1, e = Math.ceil(s / u.itemsAtATime)
                },
                w = function() {
                    s > u.itemsAtATime ? r.show() : r.hide(), n(v).val(i.toString()), n(y).html(e), nt()
                },
                b = !0,
                nt = function() {
                    i <= 1 ? (n(h).addClass("limit"), n(l).addClass("limit")) : (n(h).removeClass("limit"), n(l).removeClass("limit")), i == e ? (n(c).addClass("limit"), n(a).addClass("limit")) : (n(c).removeClass("limit"), n(a).removeClass("limit"))
                },
                tt = function() {
                    n(r).on("click", ".goLeft", function() {
                        it()
                    });
                    n(r).on("click", ".goRight", function() {
                        rt()
                    });
                    n(r).on("click", ".goFirst", function() {
                        ut()
                    });
                    n(r).on("click", ".goLast", function() {
                        ft()
                    });
                    n(r).on("keyup", ".currentPage", function(n) {
                        n.keyCode == 13 && (n.cancelBubble = !0, n.returnValue = !1, n.preventDefault(), window.setTimeout(function() {
                            var t = v.val(),
                                n = i;
                            n = t <= 0 ? 1 : t > e ? e : t, o(n)
                        }, 50))
                    })
                },
                it = function() {
                    i - 1 > 0 && o(i - 1)
                },
                rt = function() {
                    i + 1 <= e && o(i + 1)
                },
                ut = function() {
                    o(1)
                },
                ft = function() {
                    o(e)
                },
                et = function(t, i) {
                    try {
                        n(f[Math.abs(t - i)]).removeClass("hidden").animate({
                            opacity: "1"
                        }, 500)
                    } catch (r) {}
                },
                o = function(t) {
                    var e, o, r;
                    if (b || n(n("body").find(u.parentContainerSelector)).stop(!0, !0).css({
                            opacity: "0.4"
                        }).animate({
                            opacity: 1
                        }, 600), b = !1, t && t != i)
                        for (i = t, e = i * u.itemsAtATime - u.itemsAtATime, o = Math.min(i * u.itemsAtATime, s), n(f).hide(), r = e; r < o; r++) n(f[r]).show();
                    else
                        for (e = i * u.itemsAtATime - u.itemsAtATime, o = Math.min(i * u.itemsAtATime, s), r = e; r < o; r++) n(f[r]).show();
                    w()
                };
            return k(), {
                refresh: function() {
                    f = n("body").find(u.parentContainerSelector + " " + u.targetElementSelector), p(), o()
                }
            }
        }, n.fn.epgPaginate = function(t) {
            var i = n(this),
                h, c, l, a, y, o = [],
                v, s, r, f, u = {
                    separator: "/",
                    itemsAtATime: 5,
                    targetElementSelector: "",
                    parentContainerSelector: "",
                    elementsCount: 0,
                    t: function() {}
                };
            n.extend(u, t);
            var k = function() {
                    g(), d(), tt(), e()
                },
                d = function() {
                    o = n("body").find(u.parentContainerSelector + " " + u.targetElementSelector), h = i.find(".goFirst"), c = i.find(".goLast"), l = i.find(".goLeft"), a = i.find(".goRight"), v = i.find(".currentPage"), y = i.find(".totalPages"), p(), w()
                },
                g = function() {
                    var t = "<div class='navControl' id='navControl'>";
                    t += "<div class='goFirst'><div class='vbar' style=''><\/div><div class='arrowLeft' style=''><\/div><\/div>", t += "<div class='goLeft'><div class='arrowLeft' style=''><\/div><\/div>", t += "<input type='text' id='currentPage' class='currentPage' value='1'>", t += "<span class='separator'>/<\/span><span id='totalPages' class='totalPages'><\/span>", t += "<div class='goRight'><div class='arrowRight' style=''><\/div><\/div>", t += "<div class='goLast'><div class='arrowRight'><\/div><div class='vbar' style=''><\/div><\/div>", t += "<\/div>", n(i).prepend(t)
                },
                p = function() {
                    s = u.elementsCount, r = 1, f = Math.ceil(s / u.itemsAtATime)
                },
                w = function() {
                    s > u.itemsAtATime ? i.show() : i.hide(), n(v).val(r.toString()), n(y).html(f), nt()
                },
                b = !0,
                nt = function() {
                    r <= 1 ? (n(h).addClass("limit"), n(l).addClass("limit")) : (n(h).removeClass("limit"), n(l).removeClass("limit")), r == f ? (n(c).addClass("limit"), n(a).addClass("limit")) : (n(c).removeClass("limit"), n(a).removeClass("limit"))
                },
                tt = function() {
                    n(i).on("click", ".goLeft", function() {
                        it()
                    });
                    n(i).on("click", ".goRight", function() {
                        rt()
                    });
                    n(i).on("click", ".goFirst", function() {
                        ut()
                    });
                    n(i).on("click", ".goLast", function() {
                        ft()
                    });
                    n(i).on("keyup", ".currentPage", function (n) {
                        n.keyCode == $.ui.keyCode.ENTER && (n.cancelBubble = !0, n.returnValue = !1, n.preventDefault(), window.setTimeout(function () {
                            var t = v.val(),
                                n = r;
                            n = t <= 0 ? 1 : t > f ? f : t, e(n)
                        }, 50))
                    })
                },
                it = function() {
                    r - 1 > 0 && e(r - 1)
                },
                rt = function() {
                    r + 1 <= f && e(r + 1)
                },
                ut = function() {
                    e(1)
                },
                ft = function() {
                    e(f)
                },
                et = function(t, i) {
                    try {
                        n(o[Math.abs(t - i)]).removeClass("hidden").animate({
                            opacity: "1"
                        }, 500)
                    } catch (r) {}
                },
                e = function(t) {
                    b || n(n("body").find(u.parentContainerSelector)).stop(!0, !0).css({
                        opacity: "0.4"
                    }).animate({
                        opacity: 1
                    }, 600), b = !1, n(o).show(), t && t != r && (r = t, u.t(!1, s, 10, r)), w()
                };
            return k(), {
                refresh: function(t) {
                    o = n("body").find(u.parentContainerSelector + " " + u.targetElementSelector), u.elementsCount = t, p(), e()
                }
            }        
        }, n.fn.epgPsApps = function(t) {
            var r = {
                contentType: "epgApp",
                local: "en-us",
                site: "ps",
                epgAppUrl: "https://dynamicservice-prod.azurewebsites.net/api/feed?c={0}&l={1}&s={2}",
                epgAppSchema: "https://dynamicservice-prod.azurewebsites.net/api/schema?c={0}&l={1}&s={2}",
                divStories: ".apps",
                divStoriesList: ".appsList",
                divFilterLabels: "#filterLabels",
                divResultInfo: "#resultInfo",
                toggleSpeed: "slow",
                pagination: !0,
                resultsPerPage: 12,
                view: "gallery",
                showViewToggle: !0,
                defaultSector: "Education",
                popTitle: "Office 365 Apps"
            };
            n.extend(r, t);
            var i = {},
                f = {},
                e = "",
                u = [],
                o = [],
                l = function() {
                    e = r.view === "gallery" ? "gallery" : "list", r.showViewToggle === !0 && n(".viewToggle").show(), a(function() {
                        y(), b()
                    })
                },
                a = function(t) {
                    n.ajax({
                        type: "GET",
                        url: r.epgAppSchema.replace("{0}", r.contentType).replace("{1}", r.local).replace("{2}", r.site) + "&_=wwww",
                        dataType: "json",
                        success: function(n) {
                            var i, r;
                            if (n.DataLoad.FilterList.length > 0) {
                                for (i = 0; i < n.DataLoad.FilterList.length; i++)
                                    if (r = n.DataLoad.FilterList[i], r.PropertyType == "tags") {
                                        f = r.PropertyEnum;
                                        break
                                    }
                                t && typeof t == "function" && t()
                            }
                        }
                    })
                },
                v = function(n, t) {
                    return n.Key < t.Key ? -1 : n.Key == t.Key ? 0 : 1
                },
                y = function() {
                    n.ajax({
                        type: "GET",
                        url: r.epgAppUrl.replace("{0}", r.contentType).replace("{1}", r.local).replace("{2}", r.site),
                        dataType: "json",
                        success: function(t) {
                            var l, u, w, b, s, e;
                            if (t.DataLoad.hasOwnProperty("Feed")) {
                                for (l = t.DataLoad.Feed.FeedList, e = 0; e < l.length; e++) {
                                    u = "", u = r.contentType == "epgO365Solution" ? l[e].Content.solution : l[e].Content.app;
                                    var a = u.title,
                                        k = u.image,
                                        d = u.url,
                                        tt = u.shortdescription,
                                        y = [],
                                        c = r.contentType == "epgO365Solution" ? [] : "",
                                        p = {},
                                        it = u.description;
                                    if (r.contentType == "epgO365Solution") {
                                        if (u.tags == null) continue;
                                        for (s = 0; s < u.tags.tag.length; s++) w = n.trim(u.tags.tag[s]), c.push(w)
                                    } else c = u.tags;
                                    for (b in u.sectors) y.push(u.sectors[b]);
                                    if (r.contentType == "epgO365Solution" && (p = u.ctas.cta), n.inArray(r.defaultSector, y[0]) !== -1)
                                        if (i[a] = {
                                                title: a,
                                                image: k,
                                                url: d,
                                                description: tt,
                                                category: c,
                                                ctas: p,
                                                detailedDesc: it
                                            }, r.contentType == "epgO365Solution")
                                            for (s = 0; s < c.length; s++) n.inArray(c[s], o) === -1 && o.push(c[s]);
                                        else n.inArray(c, o) === -1 && o.push(c)
                                }
                                for (e = 0; e < f.length; e++) console.log("key:" + f[e].Key + "-----Value:" + f[e].Value);
                                f = f.sort(v), console.log(f), g(f, n("#focus")), h(!1), nt()
                            }
                        },
                        error: function(t) {
                            n(r.divStories).html(t)
                        }
                    })
                },
                p = function() {
                    n(".app a").on("click", function(t) {
                        t.preventDefault();
                        var i = n(this).parents(".app"),
                            u = n(i.find(".title a")).text(),
                            f = n(i.find("h4")).text(),
                            e = n(i.find(".logo img")),
                            r = n(e).attr("src"),
                            h = r.substr(r.lastIndexOf("/") + 1, r.length),
                            o = i.data(),
                            s = i.find(".detailedDes").val(),
                            linkURL = i.attr('x-url');

                        w(r, u, f, o, s, linkURL)
                    })
                },
                w = function(n, t, i, u, f, url) {
                    var e = "",
                        o;
                    e = "<div class='pop-container'>", e += "<div class='left'>", e += "<img src='" + n + "' />", e += "<\/div>", e += "<div class='middle'>", e += "<h2 style='padding-bottom:5px;font-size:20px;'>" + r.popTitle + "<\/h2>", e += "<p style='margin-top:10px;font-size:15px;margin-bottom:10px;font-weight:700'>" + t + "<\/p>", e += "<p style='margin-top:5px;'>" + unescape(f) + "<\/p>", e += "<p style='margin-top:15px;'>";
                    for (o in u) u.hasOwnProperty(o) && o != "contains" && (e += "<a class='btnCTA' href='" + url + "' target='_blank'>" + u[o].text + "<\/a>");
                    e += "<\/p>", e += "<div class='clear'><\/div>", epgOpenModal(e)
                },
                b = function() {
                    n(".filters").on("click", "a", function(t) {
                        k.call(n(this), t)
                    });
                    n(".filterOptions").on("click", r.divFilterLabels + " a", function(t) {
                        d.call(n(this), t)
                    });
                    n(".viewGallery").on("click", function(t) {
                        t.preventDefault(), n(this).hasClass("selected") || c("gallery")
                    });
                    n(".viewList").on("click", function(t) {
                        t.preventDefault(), n(this).hasClass("selected") || c("list")
                    })
                },
                c = function(n) {
                    e = n, h(!0)
                },
                s = function(t, i) {
                    t === "remove" ? u.splice(n.inArray(i, u), 1) : u.push(i), h(!0)
                },
                k = function(t) {
                    var f = "",
                        i = n(this).data("focus");
                    t.preventDefault(), n(this).addClass("selected"), n.inArray(i, u) === -1 ? (s("add", i), f = ' <span class="filterLabel"><a href="#" data-focus="' + i + '"><span class="icon-closex"><\/span><\/a> ' + i + "<\/span>") : (s("remove", i), n(this).removeClass("selected"), n('.filterLabel [data-focus="' + i + '"]').parent().remove()), n(r.divFilterLabels).append(f)
                },
                d = function(t) {
                    t.preventDefault();
                    var i = n(this).data("focus");
                    s("remove", i), n(this).parent().remove(), n('.toggle [data-focus="' + i + '"]').removeClass("selected")
                },
                h = function(t) {
                    var o = "",
                        s = 0,
                        h, f;

                    
                    for (f in i) i.hasOwnProperty(f) && ((r.contentType == "epgO365Solution" ? tt(i[f].category, u) : n.inArray(i[f].category, u) > -1) || u.length === 0) && (r.contentType == "epgO365Solution" ? e === "gallery" ? (o += '<div class="app"  x-url="' + i[f].url + '">',
                        getImgSource = function () {
                            return n.trim(i[f].image).indexOf("http") !== -1
                                ? n.trim(i[f].image)
                                : "http://www.microsoft.com" +n.trim(i[f].image);
                        },
                        o += "<input class='detailedDes' type='hidden' value='" +i[f].detailedDesc + "'/>", o += "<input class='uri' type='hidden' value='" +i[f].url + "'/>",
                        o += '<div class="logo"><a href="#"><img src="' + this.getImgSource() + '" alt="' + i[f].title + '" title="' + i[f].title + '" /><\/a><\/div>',
                        o += '<div class="title"><h3><a href="#">' + i[f].title + "<\/a><\/h3><h4>" + i[f].description + "<\/h4><\/div>", o += "<\/div>") : (o += '<div class="app">', o += "<input class='detailedDes' type='hidden' value='" + i[f].detailedDesc + "'/>", o += "<input class='uri' type='hidden' value='" + i[f].url + "'/>", o += '<a class="logo" href="#" style="display: none;"><img src="http://www.microsoft.com' + n.trim(i[f].image) + '" alt="' + i[f].title + '" title="' + i[f].title + '" /><\/a>', o += '<div class="title"><h4><a href="#">' + i[f].title + "<\/a><\/h4><\/div>", o += '<div class="title"><p>' + i[f].description + "<\/p><\/div>", o += '<a class="viewNow" href="#">Read More<\/a><a href="#"><span class="icon-rightarrcirc viewNowArrow"><\/span><\/a>', o += "<\/div>") : e === "gallery" ? (o += '<div class="app">', o += '<div class="logo"><a href="' + i[f].url + '" target="_blank"><img src="http://www.microsoft.com' + n.trim(i[f].image) + '" alt="' + i[f].title + '" title="' + i[f].title + '" /><\/a><\/div>', o += '<div class="title"><h3><a href="' + i[f].url + '"  target="_blank">' + i[f].title + "<\/a><\/h3><h4>" + i[f].description + "<\/h4><\/div>", o += "<\/div>") : (o += '<div class="app">', o += '<div class="title"><h4><a href="' + i[f].url + '">' + i[f].title + "<\/a><\/h4><\/div>", o += '<div class="title"><p>' + i[f].description + "<\/p><\/div>", o += '<a class="viewNow" href="' + i[f].url + '">View Now<\/a><a href="' + i[f].url + '"><span class="icon-rightarrcirc viewNowArrow"><\/span><\/a>', o += "<\/div>"), s++);
                    if (e === "gallery" ? (n(".viewGallery").addClass("selected"), n(".viewList").removeClass("selected"), n(".apps").show(), n(".appsList").hide(), n(r.divStoriesList).html(""), n(r.divStories).html(o)) : (n(".viewList").addClass("selected"), n(".viewGallery").removeClass("selected"), n(".appsList").show(), n(".apps").hide(), n(r.divStories).html(""), n(r.divStoriesList).html(o)), r.contentType == "epgO365Solution") {
                        h = 0;
                        for (f in i) i.hasOwnProperty(f) && (n(".app").eq(h).data(i[f].ctas), h++);
                        p()
                    }
                    r.pagination ? t ? navElementCallback.refresh() : navElementCallback = n(r.divResultInfo).epgPaginateV2({
                        itemsAtATime: r.resultsPerPage,
                        targetElementSelector: ".app",
                        parentContainerSelector: ".epgPsCaseStudyArea"
                    }) : (n(r.divResultInfo).html(s + " results"), s = 0, n(".app").css("display", "block"), n(".epgPsCaseStudyArea #resultInfo").css("text-align", "left"))
                },
                g = function(t, i) {
                    for (var s = "", h = 0, e, r, f = 0; f < t.length; f++)(e = t[f], r = n.trim(e.Value), n.inArray(r, o) !== -1) && (s += n.inArray(r, u) !== -1 ? '<a href="#" data-focus="' + r + '" class="selected">' + r + " (" + e.Total + ")<\/a>" : '<a href="#" data-focus="' + r + '">' + r + " (" + e.Total + ")<\/a>", h++);
                    i.html(s), n("#catNum").html(h.toString())
                },
                nt = function() {
                    for (var i = "", t = 0; t < u.length; t++) i += '<span class="filterLabel"><a href="#" data-focus="' + u[t] + '"><span class="glyphicon-remove-circle"><\/span><\/a> ' + u[t] + "<\/span>";
                    n(r.divFilterLabels).html(i)
                },
                tt = function(n, t) {
                    var r, i;
                    if (typeof n == "string" && typeof t == "string") return n === t;
                    if (typeof n == "string")
                        for (i = 0; i < t.length; i++)
                            if (n === t[i]) return !0;
                    if (typeof t == "string")
                        for (i = 0; i < n.length; i++)
                            if (t === n[i]) return !0;
                    for (r = 0; r < n.length; r++)
                        for (i = 0; i < t.length; i++)
                            if (n[r] === t[i]) return !0;
                    return !1
                };
            return l(), this
        }, n.fn.epgCustomerEvidenceGrid = function (t) {
            var y = {
                    contentType: "epgCustomerEvidence",
                    locale: document.body.dataset.locale || "en-us",
                    site: "ps",
                    epgCustomerEvidenceUrl: "https://dynamicservice-prod.azurewebsites.net/api/feed?c={0}&l={1}&s={2}",
                    epgCustomerEvidenceSchema: "https://dynamicservice-prod.azurewebsites.net/api/schema?c={0}&l={1}&s={2}",
                    divStories: ".storiesCol",
                    divFilters: ".filtersCol",
                    divFilterLabels: "#filterLabels",
                    divResultInfo: "#resultInfo",
                    pagination: !0,
                    resultsPerPage: 12,
                    view: "gallery",
                    defaultImage: "//c.s-microsoft.com/CMSImages/CustomerStoryDefaultImage.png?version=9fa6f3ef-2772-07c5-0b5c-ea2b56579f8d",
                    defaultFilters: {},
                    collapsedFilterLists: [],
                    hiddenFilterLists: [],
                    maxTitleLength: 55,
                    maxDescLength: 102,
                    translations: {
                        errorMessage: "Sorry, there was an error loading stories.",
                        readMore: "Read More",
                        watchNow: "Watch Now"
                    }
                },
                t = n.extend(y, t),
                s = [],
                i = [],
                h = [],
                u = "",
                r = [],
                e = !1,
                l, p = function(i) {
                    u = t.view === "gallery" ? "gallery" : "list", t.showViewToggle === !0 && n(".viewToggle").show(), b(i, function() {
                        k(i, function() {
                            d(i), ft(i), n.isEmptyObject(t.defaultFilters) || w(i), o(i, e), a(i), e = !0
                        })
                    })
                },
                w = function(i) {
                    n.each(t.defaultFilters, function(r, u) {
                        var e = i.find(t.divFilters).find('[data-propertytype="' + r + '"]'),
                            f;
                        if (n.isArray(u))
                            for (f = 0; f < u.length; f++) e.find('input[data-key="' + u[f] + '"]').prop("checked", !0), c(u[f], u[f], r);
                        else e.find('input[data-key="' + u + '"]').prop("checked", !0), c(u, u, r)
                    })
                },
                b = function (i, r) {
                    var locale = t.locale.toLowerCase() === "es-mx" ? "es-xl" : t.locale;
                    var u = t.epgCustomerEvidenceSchema.replace("{0}", t.contentType).replace("{1}", locale).replace("{2}", t.site),
                        f = n.ajax({
                            type: "GET",
                            url: u,
                            cache: !1,
                            dataType: "json"
                        }).done(function(n) {
                            n.DataLoad.FilterList.length > 0 && (h = n.DataLoad.FilterList), r && typeof r == "function" && r()
                        }).fail(function(n) {
                            console.error("Error getting epgCustomerEvidence Schema data: " + n.message), i.find(t.divStories).html(t.translations.errorMessage)
                        })
                },
                k = function (i, r) {
                    var locale = t.locale.toLowerCase() === "es-mx" ? "es-xl" : t.locale;
                    var u = t.epgCustomerEvidenceUrl.replace("{0}", t.contentType).replace("{1}", locale).replace("{2}", t.site),
                        f = n.ajax({
                            type: "GET",
                            url: u,
                            cache: !1,
                            dataType: "json"
                        }).done(function(n) {
                            var i, t;
                            if (n.DataLoad.hasOwnProperty("Feed")) {
                                for (i = n.DataLoad.Feed.FeedList, t = 0; t < i.length; t++) s.push(i[t].Content.CustomerEvidence);
                            } else {
                                console.error('data.DataLoad object does not have property "Feed".');
                            }
                            r && typeof r == "function" && r()
                        }).fail(function(n) {
                            console.error("Error getting epgCustomerEvidence data: " + n.message), i.find(t.divStories).html(t.translations.errorMessage)
                        })
                },
                d = function(i) {
                    for (var c, r, l, o, v, e = 0; e < h.length; e++) {
                        var s = h[e],
                            u = s.PropertyEnum,
                            a = u.length,
                            f = i.find('.filtersRow[data-propertyType="' + s.PropertyType + '"]');
                        for (t.hiddenFilterLists.length && n.inArray(s.PropertyType, t.hiddenFilterLists) >= 0 && f.detach(), f.find(".numFilterItems").text(a), g(u), c = "", r = 0; r < a; r++) c += '<li><input type="checkbox" id="' + u[r].Key + '" data-key="' + u[r].Key + '" value="' + u[r].Value + '"><label for="' + u[r].Key + '">' + u[r].Value + " (" + u[r].Total + ")<\/label><\/li>";
                        if (l = f.find(".filterList"), l.append(c), t.collapsedFilterLists.length)
                            for (o = 0; o < t.collapsedFilterLists.length; o++)
                                if (v = t.collapsedFilterLists[o], v === f.data("propertytype")) {
                                    f.addClass("closed"), l.hide();
                                    break
                                }
                    }
                },
                g = function(n) {
                    n.sort(function(n, t) {
                        return n.Value > t.Value ? 1 : n.Value < t.Value ? -1 : 0
                    })
                },
                o = function(i, r) {
                    nt(i), tt(i);
                    var u = n(t.divStories);
                    t.pagination === !0 && (u.find(".story").hide(), r ? l.refresh() : l = n(t.divResultInfo).epgPaginateV2({
                        itemsAtATime: t.resultsPerPage,
                        targetElementSelector: ".story",
                        parentContainerSelector: ".stories"
                    }))
                },
                nt = function(u) {
                    var v = u.find(t.divStories),
                        a;
                    v.empty(), v.find(".loader").show(), i.length = 0;
                    var l = new Date,
                        y = l.getFullYear(),
                        p = l.getMonth() + 1 > 9 ? l.getMonth() + 1 : "0" + (l.getMonth() + 1),
                        w = l.getDate() > 9 ? l.getDate() : "0" + l.getDate(),
                        b = "" + y + p + w;
                    for (a = 0; a < s.length; a++) {
                        var o = !0,
                            h = s[a],
                            c = [],
                            e = [];
                        r.length > 0 && (e = n.grep(r, function(n) {
                            return n.filterPropertyType === "stype"
                        }), e.length > 0 && (h.StoryType != null ? (c = [h.StoryType], f(c, e, !1) || (o = !1)) : o = !1), e = n.grep(r, function(n) {
                            return n.filterPropertyType === "cont"
                        }), e.length > 0 && (h.Taxonomy.Countries != null ? (c = h.Taxonomy.Countries.Country, f(c, e, !0) || (o = !1)) : o = !0), e = n.grep(r, function(n) {
                            return n.filterPropertyType === "indu"
                        }), e.length > 0 && (h.Taxonomy.Industries != null ? (c = h.Taxonomy.Industries.Industry, f(c, e, !0) || (o = !1)) : o = !1), e = n.grep(r, function(n) {
                            return n.filterPropertyType === "eduvert"
                        }), e.length > 0 && (h.Taxonomy.EduVerticals != null ? (c = h.Taxonomy.EduVerticals.EduVertical, f(c, e, !0) || (o = !1)) : o = !1), e = n.grep(r, function(n) {
                            return n.filterPropertyType === "bneeds"
                        }), e.length > 0 && (h.Taxonomy.BusinessNeeds != null ? (c = h.Taxonomy.BusinessNeeds.BusinessNeed, f(c, e, !0) || (o = !1)) : o = !1), e = n.grep(r, function(n) {
                            return n.filterPropertyType === "lang"
                        }), e.length > 0 && (h.Language != null ? (c = [h.Language], f(c, e, !1) || (o = !1)) : o = !1), e = n.grep(r, function(n) {
                            return n.filterPropertyType === "prod"
                        }), e.length > 0 && (h.Taxonomy.Products != null ? (c = h.Taxonomy.Products.Product, f(c, e, !0) || (o = !1)) : o = !1)), o && i.push(h)
                    }
                },
                f = function(t, i, r) {
                    var u, f;
                    if (r) {
                        for (u = 0; u < i.length; u++)
                            for (f = 0; f < t.length; f++)
                                if (n.trim(i[u].filterKey) === n.trim(t[f].Name)) return !0
                    } else
                        for (u = 0; u < i.length; u++)
                            for (f = 0; f < t.length; f++)
                                if (n.trim(i[u].filterKey) === n.trim(t[f])) return !0; return !1
                },
                et = function() {},
                ot = function() {},
                tt = function(i) {
                    var f = i.find(t.divStories),
                        r;
                    u == "gallery" && (r = n('<div class="stories gallery">'), it(f, r)), u == "list" && (r = n('<div class="stories list">'), rt(f, r))
                },
                it = function(r, u) {
                    for (var e, o, s, l, h, c, a, f = 0; f < i.length; f++) e = n('<div class="story"><div class="logo"><a href="' + n.trim(i[f].SyndicationUrl) + '" target=""><img src="' + ut(i[f]) + '" alt="' + n.trim(i[f].Title) + '"><\/a><\/div><div class="titleDesc"><a class="title" href="' + n.trim(i[f].SyndicationUrl) + '">' + n.trim(i[f].Title) + '<\/a><p class="desc">' + n.trim(i[f].ExecutiveSummary) + "<\/p><\/div><\/div>"), e.data(i[f]), i[f].StoryType != null && n.trim(i[f].StoryType).toLowerCase() === "video" && e.addClass("video"), o = e.find(".title"), s = o.text(), s.length > t.maxTitleLength && (l = n.trim(s).substring(0, t.maxTitleLength).split(" ").slice(0, -1).join(" ") + "...", o.text(l)), h = e.find(".desc"), c = h.text(), c.length > t.maxDescLength && (a = n.trim(c).substring(0, t.maxDescLength).split(" ").slice(0, -1).join(" ") + "...", h.text(a)), u.append(e);
                    r.find(".loader").hide(), r.html(u), r.find(".story.video a").popuVideoModalWindow()
                },
                rt = function(r, u) {
                    for (var e, f = 0; f < i.length; f++) e = n('<div class="story"><a class="title" href="' + n.trim(i[f].SyndicationUrl) + '" target="">' + n.trim(i[f].Title) + '<\/a><p class="desc">' + n.trim(i[f].ExecutiveSummary) + '<\/p><a class="cta" href="' + n.trim(i[f].SyndicationUrl) + '"><span class="icon-rightarrcirc viewNowArrow"><\/span><span class="ctaText">' + t.translations.readMore + "<\/span><\/a><\/div>"), e.data(i[f]), i[f].StoryType != null && n.trim(i[f].StoryType).toLowerCase() === "video" && (e.addClass("video"), e.find(".ctaText").text(t.translations.watchNow)), u.append(e);
                    r.find(".loader").hide(), r.html(u), r.find(".story.video a").popuVideoModalWindow()
                },
                ut = function(i) {
                    for (var r, u = 0; u < i.Assets.Asset.length; u++)
                        if (r = i.Assets.Asset[u], r.Type != null && r.Url != null && n.trim(r.Type).toLowerCase() === "logo") return r.Url;
                    return t.defaultImage
                },
                st = function(t) {
                    var r, i;
                    if (t.StoryType != null && n.trim(t.StoryType).toLowerCase() === "video") {
                        for (r = 0; r < t.Assets.Asset.length; r++)
                            if (i = t.Assets.Asset[r], i.Type != null && i.Url != null && n.trim(i.Type).toLowerCase() === "video") return n.trim(i.Url);
                        return console.warn("epgCustomerEvidence item: " + t.Title + " is missing video url."), ""
                    }
                    return t.SyndicationUrl != null ? n.trim(t.SyndicationUrl) : (console.warn("epgCustomerEvidence item: " + t.Title + " is missing SyndicationUrl."), "")
                },
                ft = function(i) {
                    var f = i.find(".viewToggle"),
                        r = i.find(t.divFilters);
                    r.find("h3").click(function() {
                        n(this).parents(".filtersRow").toggleClass("closed"), n(this).next().slideToggle()
                    }), r.find("input").change(function() {
                        var t = n(this).data("key"),
                            r = n(this).val(),
                            u = n(this).parents("[data-propertytype]").data("propertytype");
                        n(this).prop("checked") ? c(t, r, u) : v(t), o(i, e)
                    });
                    n(t.divFilterLabels).on("click", ".filterLabel", function(t) {
                        t.preventDefault();
                        var u = n(this).data("key");
                        r.find('input[data-key="' + u + '"]').prop("checked", !1), v(u), o(i, e)
                    });
                    f.find("a").click(function(t) {
                        if (t.preventDefault(), n(this).hasClass("viewGallery") && u !== "gallery") u = "gallery";
                        else if (n(this).hasClass("viewList") && u !== "list") u = "list";
                        else return;
                        a(i), o(i, e)
                    })
                },
                a = function(n) {
                    var t = n.find(".viewToggle");
                    t.find("a").removeClass("selected"), u === "gallery" && t.find(".viewGallery").addClass("selected"), u === "list" && t.find(".viewList").addClass("selected")
                },
                c = function(i, u, f) {
                    r.push({
                        filterKey: i,
                        filterVal: u,
                        filterPropertyType: f
                    }), !t.hiddenFilterLists.length || n.inArray(f, t.hiddenFilterLists) >= 0 || n(t.divFilterLabels).append('<a href="#" class="filterLabel icon-closex" data-propertytype="' + f + '" data-key="' + i + '">' + u + "<\/a>")
                },
                v = function(i) {
                    r = n.grep(r, function(n) {
                        return n.filterKey !== i
                    }), n(t.divFilterLabels).find('[data-key="' + i + '"]').remove()
                };
            return this.each(function() {
                var t = n(this);
                p(t)
            })
        }, n.fn.epgPsEventsPanel = function(t) {
            function u(n, t) {
                return parseInt(n.Content.event.eventDate) - parseInt(t.Content.event.eventDate)
            }

            function f() {
                var n = new Date,
                    r = n.getFullYear(),
                    t = n.getMonth() + 1,
                    i = n.getDate();
                return parseInt(r + (t < 10 ? "0" : "") + t + (i < 10 ? "0" : "") + i)
            }

            function e(t, i) {
                var r = "#666",
                    u = n.trim(t.eventType.toLowerCase());
                return r = i.eventColors[u]
            }

            function o(t, i) {
                var r = t.find(".eventItem").length,
                    u = i.gutterPercent,
                    f = 100 / r - (r - 1) * u,
                    e = n("html").attr("direction") === "rtl" ? "margin-right" : "margin-left";
                t.find(".eventItem").each(function() {
                    n(this).css("width", f + "%"), n(this).css(e, u + "%")
                })
            }

            function s(n) {
                return n.eventType.toLowerCase().trim() === "in person" ? n.eventType.trim() + " @ " + n.eventLocation : n.eventType.trim()
            }

            function h(t, i, r, u) {
                var o = n.trim(i.eventDate).substring(0, 4),
                    a = n.trim(i.eventDate).substring(4, 6),
                    h = n.trim(i.eventDate).substring(6, 8),
                    v = new Date(o, a - 1, h),
                    y = moment(v).locale(u).format("MMMM"),
                    p = n.trim(i.eventTitle),
                    w = n.trim(i.eventPrimaryLink),
                    b = n.trim(i.eventPrimaryCTA),
                    f = i.eventFullDescription;
                f = typeof f == "object" && i.eventFullDescription.hasOwnProperty("#cdata-section") ? n.trim(i.eventFullDescription["#cdata-section"]) : n.trim(f), console.log("eventFullDescription:"), console.log(f);
                var c = e(i, r),
                    k = t.find(".eventList"),
                    l = n("<li />", {
                        "class": "eventItem"
                    }).append(n("<div />", {
                        "class": "left"
                    }).append(n("<div />", {
                        "class": "calendarBox"
                    }).append(n("<span />", {
                        "class": "month",
                        css: {
                            "background-color": c
                        },
                        text: y
                    }), n("<span />", {
                        "class": "day",
                        text: h
                    }), n("<span />", {
                        "class": "year",
                        text: o
                    })))).append(n("<div />", {
                        "class": "right"
                    }).append(n("<div />", {
                        "class": "eventDetails"
                    }).append(n("<span />", {
                        "class": "title",
                        text: p
                    }), n("<div />", {
                        "class": "details"
                    }).append(n("<span />", {
                        "class": "detailsText",
                        text: r.translations.eventDetails + ": "
                    }), n("<span />", {
                        "class": "eventType",
                        css: {
                            color: c
                        },
                        text: s(i)
                    })))).append(n("<a />", {
                        "class": "registerButton",
                        href: w,
                        text: b,
                        target: "_blank"
                    })));
                f != null && f != "" && l.find(".eventDetails").append(n("<div />", {
                    "class": "description",
                    html: f
                })), k.append(l)
            }

            function c(n, t) {
                n.find(".eventList").after('<footer><a class="mainCTA" href="' + t.ctaUrl + '"><span>' + t.translations.viewAll + '<\/span><span class="icon icon-rightlongarrcirc"><\/span><\/a><\/footer>')
            }

            function l(t, i) {
                n.getScript("https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.3/moment-with-locales.min.js").done(function() {
                    t.hide();
                    var r = i.numEvents,
                        e = n('meta[name="MscomContentLocale"]').attr("content"),
                        s = i.calendarURL;
                    n.getJSON(s).done(function(s) {
                        var y = f(),
                            a = s.DataLoad.Feed.FeedList,
                            l = [],
                            v = 0;
                        a.sort(u), n.each(a, function(t, i) {
                            if (v >= r) return !1;
                            var u = i.Content.event;
                            parseInt(n.trim(u.eventDate)) >= y && (l.push(u), v++)
                        }), l.length > 0 ? (n.each(l, function(n, r) {
                            h(t, r, i, e)
                        }), o(t, i), i.ctaUrl && c(t, i), t.show()) : console.log("epgPsEventsPanel.js: matchingEventsArray is empty")
                    }).fail(function(n, t, i) {
                        var r = t + ", " + i;
                        console.log("epgPsEventsPanel.js: Request Failed: " + r)
                    })
                }).fail(function() {
                    console.log("epgPsEventsPanel.js: failed to load moment.js")
                })
            }
            var i = {
                    calendarURL: "https://dynamicservice-prod.azurewebsites.net/api/feed?c=epgEvent&l=en-us&s=education&q.sris=EduCast&q.host=It%20Academy",
                    numEvents: 2,
                    gutterPercent: 2,
                    linkColor: "#0072c6",
                    ctaUrl: "",
                    eventColors: {
                        online: "#7FBA00",
                        "in person": "#00BCF2",
                        webcast: "#0044CC"
                    },
                    translations: {
                        eventDetails: "Event details",
                        viewAll: "View all"
                    }
                },
                r = n.extend(!0, {}, i, t);
            return this.each(function() {
                var t = n(this);
                l(t, r)
            })
        }
    }(jQuery), $.fn.heightPercent = function(n, t) {
        var i = $(this);
        i.height(""), i.each(function() {
            var i = $(this);
            i.height(i.parents(t).height() * (n / 100))
        })
    }, $.fn.epgCarousel = function(n) {
        function d() {
            y(), e.removeClass("glyphicon-pause").addClass("glyphicon-play"), h = !0
        }

        function g() {
            a(), e.removeClass("glyphicon-play").addClass("glyphicon-pause"), h = !1
        }

        function nt() {
            h ? g() : d()
        }

        function v() {
            var n = i;
            n + 1 === u ? n = 0 : n++, o(n), l(n), i = n
        }

        function tt() {
            var n = i;
            n === 0 ? n = u - 1 : n--, o(n), l(n), i = n
        }

        function l(n) {
            f.stop(!0, !1).animate({
                "margin-left": -100 * n + "%"
            }, "slow")
        }

        function o(n) {
            $(".dot", t).eq(i).removeClass("active"), $(".dot", t).eq(n).addClass("active"), $(".nextitem", t.parent()).html($(".nextcontent div").eq(n).html())
        }

        function y() {
            s = window.clearInterval(s)
        }

        function a() {
            s = self.setInterval(v, n)
        }
        var n = typeof n == "undefined" ? Math.floor(Math.random() * 18e3) + 13e3 : n,
            p = '<span class="dot" ><\/span>',
            r = $(this),
            f = $(">ul", r),
            u = $(">li", f).length,
            t = $(".navigation .span", r),
            w = $(".prev-next", r),
            i = -1,
            s, h = !1,
            b = $(".icon-back", r),
            k = $(".icon-forward", r),
            e = $(".icon-toggle", r),
            c;
        if (u <= 1) t.css({
            display: "none"
        }), w.css({
            display: "none"
        });
        else {
            for (f.css({
                    width: 100 * u + "%",
                    display: "table"
                }), f.children("li").css({
                    width: 100 / u + "%",
                    display: "table-cell"
                }), c = 0; c < u; c++) t.append(p);
            t.parent().hasClass("nexttext") && t.parent().append('<div class="navigationtext"><span class="next">NEXT:&#160;<\/span><span class="nextitem"><\/span><\/div><div><\/div>');
            $(".dot", t).on("click", function() {
                y();
                var n = $(this).index(".navigation .span >.dot");
                o(n), l(n), i = n, e.hasClass("glyphicon-play") || a()
            })
        }
        a(), o(0), i = 0, b.click(function(n) {
            n.preventDefault(), tt()
        }), k.click(function(n) {
            n.preventDefault(), v()
        }), e.click(function(n) {
            n.preventDefault(), nt()
        }), $(window).load(function() {
            if ($(window).width() < 480) {
                $(".epg_hero.epgSlideShow >ul >li").heightPercent(100, "ul")
            };
            $(".epg_hero.epgSlideShow >ul >li").children().css("height", "100%"), $(window).width() < 480 && ($(".epg_hero.epgSlideShow >ul >li .epg_slidehero").css("position", "relative"), $(".epg_hero.epgSlideShow >ul >li .epg_slidehero .herocontent").css({
                position: "absolute",
                bottom: "0px"
            })), $(window).resize(function() {
                $(".epg_hero.epgSlideShow >ul >li .epg_slidehero").css("position", ""), $(".epg_hero.epgSlideShow >ul >li .epg_slidehero .herocontent").css({
                    position: "",
                    bottom: ""
                });
                if ($(window).width() < 480) {
                $(".epg_hero.epgSlideShow >ul >li").heightPercent(100, "ul")
            };
                 $(".epg_hero.epgSlideShow >ul >li").children().css("height", "100%"), $(window).width() < 480 && ($(".epg_hero.epgSlideShow >ul >li .epg_slidehero").css("position", "relative"), $(".epg_hero.epgSlideShow >ul >li .epg_slidehero .herocontent").css({
                    position: "absolute",
                    bottom: "0px"
                }))
            })
        })
    }, windowWidth = $(window).width(), $(function() {});
var touchWindowWidth = 0,
    timeConfig = 6e3,
    pageId = "";
$(function() {}), $(window).resize(function() {
        SetSliderStyle(pageId)
    }), ! function(n) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], n) : "undefined" != typeof exports ? module.exports = n(require("jquery")) : n(jQuery)
    }(function (n) {
        "use strict";
        var t = window.Slick || {};
        t = function() {
            function t(t, r) {
                var o, f, e, u = this;
                if (u.defaults = {
                        accessibility: !0,
                        adaptiveHeight: !1,
                        appendArrows: n(t),
                        appendDots: n(t),
                        arrows: !0,
                        asNavFor: null,
                        prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="previous">Previous<\/button>',
                        nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="next">Next<\/button>',
                        autoplay: !1,
                        autoplaySpeed: 3e3,
                        centerMode: !1,
                        centerPadding: "50px",
                        cssEase: "ease",
                        customPaging: function(n, t) {
                            return '<button type="button" data-role="none">' + (t + 1) + "<\/button>"
                        },
                        dots: !1,
                        dotsClass: "slick-dots",
                        draggable: !0,
                        easing: "linear",
                        edgeFriction: .35,
                        fade: !1,
                        focusOnSelect: !1,
                        infinite: !0,
                        initialSlide: 0,
                        lazyLoad: "ondemand",
                        mobileFirst: !1,
                        pauseOnHover: !0,
                        pauseOnDotsHover: !1,
                        respondTo: "window",
                        responsive: null,
                        rows: 1,
                        rtl: !1,
                        slide: "",
                        slidesPerRow: 1,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        speed: 500,
                        swipe: !0,
                        swipeToSlide: !1,
                        touchMove: !0,
                        touchThreshold: 5,
                        useCSS: !0,
                        variableWidth: !1,
                        vertical: !1,
                        verticalSwiping: !1,
                        waitForAnimate: !0
                    }, u.initials = {
                        animating: !1,
                        dragging: !1,
                        autoPlayTimer: null,
                        currentDirection: 0,
                        currentLeft: null,
                        currentSlide: 0,
                        direction: 1,
                        $dots: null,
                        listWidth: null,
                        listHeight: null,
                        loadIndex: 0,
                        $nextArrow: null,
                        $prevArrow: null,
                        slideCount: null,
                        slideWidth: null,
                        $slideTrack: null,
                        $slides: null,
                        sliding: !1,
                        slideOffset: 0,
                        swipeLeft: null,
                        $list: null,
                        touchObject: {},
                        transformsEnabled: !1,
                        unslicked: !1
                    }, n.extend(u, u.initials), u.activeBreakpoint = null, u.animType = null, u.animProp = null, u.breakpoints = [], u.breakpointSettings = [], u.cssTransitions = !1, u.hidden = "hidden", u.paused = !1, u.positionProp = null, u.respondTo = null, u.rowCount = 1, u.shouldClick = !0, u.$slider = n(t), u.$slidesCache = null, u.transformType = null, u.transitionType = null, u.visibilityChange = "visibilitychange", u.windowWidth = 0, u.windowTimer = null, o = n(t).data("slick") || {}, u.options = n.extend({}, u.defaults, o, r), u.currentSlide = u.options.initialSlide, u.originalSettings = u.options, f = u.options.responsive || null, f && f.length > -1) {
                    u.respondTo = u.options.respondTo || "window";
                    for (e in f) f.hasOwnProperty(e) && (u.breakpoints.push(f[e].breakpoint), u.breakpointSettings[f[e].breakpoint] = f[e].settings);
                    u.breakpoints.sort(function(n, t) {
                        return u.options.mobileFirst === !0 ? n - t : t - n
                    })
                }
                "undefined" != typeof document.mozHidden ? (u.hidden = "mozHidden", u.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (u.hidden = "webkitHidden", u.visibilityChange = "webkitvisibilitychange"), u.autoPlay = n.proxy(u.autoPlay, u), u.autoPlayClear = n.proxy(u.autoPlayClear, u), u.changeSlide = n.proxy(u.changeSlide, u), u.clickHandler = n.proxy(u.clickHandler, u), u.selectHandler = n.proxy(u.selectHandler, u), u.setPosition = n.proxy(u.setPosition, u), u.swipeHandler = n.proxy(u.swipeHandler, u), u.dragHandler = n.proxy(u.dragHandler, u), u.keyHandler = n.proxy(u.keyHandler, u), u.autoPlayIterator = n.proxy(u.autoPlayIterator, u), u.instanceUid = i++, u.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, u.init(!0), u.checkResponsive(!0)
            }
            var i = 0;
            return t
        }(), t.prototype.addSlide = t.prototype.slickAdd = function(t, i, r) {
            var u = this;
            if ("boolean" == typeof i) r = i, i = null;
            else if (0 > i || i >= u.slideCount) return !1;
            u.unload(), "number" == typeof i ? 0 === i && 0 === u.$slides.length ? n(t).appendTo(u.$slideTrack) : r ? n(t).insertBefore(u.$slides.eq(i)) : n(t).insertAfter(u.$slides.eq(i)) : r === !0 ? n(t).prependTo(u.$slideTrack) : n(t).appendTo(u.$slideTrack), u.$slides = u.$slideTrack.children(this.options.slide), u.$slideTrack.children(this.options.slide).detach(), u.$slideTrack.append(u.$slides), u.$slides.each(function(t, i) {
                n(i).attr("data-slick-index", t)
            }), u.$slidesCache = u.$slides, u.reinit()
        }, t.prototype.animateHeight = function() {
            var n = this,
                t;
            1 === n.options.slidesToShow && n.options.adaptiveHeight === !0 && n.options.vertical === !1 && (t = n.$slides.eq(n.currentSlide).outerHeight(!0), n.$list.animate({
                height: t
            }, n.options.speed))
        }, t.prototype.animateSlide = function(t, i) {
            var u = {},
                r = this;
            r.animateHeight(), r.options.rtl === !0 && r.options.vertical === !1 && (t = -t), r.transformsEnabled === !1 ? r.options.vertical === !1 ? r.$slideTrack.animate({
                left: t
            }, r.options.speed, r.options.easing, i) : r.$slideTrack.animate({
                top: t
            }, r.options.speed, r.options.easing, i) : r.cssTransitions === !1 ? (r.options.rtl === !0 && (r.currentLeft = -r.currentLeft), n({
                animStart: r.currentLeft
            }).animate({
                animStart: t
            }, {
                duration: r.options.speed,
                easing: r.options.easing,
                step: function(n) {
                    n = Math.ceil(n), r.options.vertical === !1 ? (u[r.animType] = "translate(" + n + "px, 0px)", r.$slideTrack.css(u)) : (u[r.animType] = "translate(0px," + n + "px)", r.$slideTrack.css(u))
                },
                complete: function() {
                    i && i.call()
                }
            })) : (r.applyTransition(), t = Math.ceil(t), u[r.animType] = r.options.vertical === !1 ? "translate3d(" + t + "px, 0px, 0px)" : "translate3d(0px," + t + "px, 0px)", r.$slideTrack.css(u), i && setTimeout(function() {
                r.disableTransition(), i.call()
            }, r.options.speed))
        }, t.prototype.asNavFor = function(t) {
            var r = this,
                i = r.options.asNavFor;
            i && null !== i && (i = n(i).not(r.$slider)), null !== i && "object" == typeof i && i.each(function() {
                var i = n(this).slick("getSlick");
                i.unslicked || i.slideHandler(t, !0)
            })
        }, t.prototype.applyTransition = function(n) {
            var t = this,
                i = {};
            i[t.transitionType] = t.options.fade === !1 ? t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : "opacity " + t.options.speed + "ms " + t.options.cssEase, t.options.fade === !1 ? t.$slideTrack.css(i) : t.$slides.eq(n).css(i)
        }, t.prototype.autoPlay = function() {
            var n = this;
            n.autoPlayTimer && clearInterval(n.autoPlayTimer), n.slideCount > n.options.slidesToShow && n.paused !== !0 && (n.autoPlayTimer = setInterval(n.autoPlayIterator, n.options.autoplaySpeed))
        }, t.prototype.autoPlayClear = function() {
            var n = this;
            n.autoPlayTimer && clearInterval(n.autoPlayTimer)
        }, t.prototype.autoPlayIterator = function() {
            var n = this;
            n.options.infinite === !1 ? 1 === n.direction ? (n.currentSlide + 1 === n.slideCount - 1 && (n.direction = 0), n.slideHandler(n.currentSlide + n.options.slidesToScroll)) : (0 == n.currentSlide - 1 && (n.direction = 1), n.slideHandler(n.currentSlide - n.options.slidesToScroll)) : n.slideHandler(n.currentSlide + n.options.slidesToScroll)
        }, t.prototype.buildArrows = function() {
            var t = this;
            t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow = n(t.options.prevArrow), t.$nextArrow = n(t.options.nextArrow), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.appendTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), t.options.infinite !== !0 && t.$prevArrow.addClass("slick-disabled"))
        }, t.prototype.buildDots = function() {
            var i, r, t = this;
            if (t.options.dots === !0 && t.slideCount > t.options.slidesToShow) {
                for (r = '<ul class="' + t.options.dotsClass + '">', i = 0; i <= t.getDotCount(); i += 1) r += "<li>" + t.options.customPaging.call(this, t, i) + "<\/li>";
                r += "<\/ul>", t.$dots = n(r).appendTo(t.options.appendDots), t.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
            }
        }, t.prototype.buildOut = function() {
            var t = this;
            t.$slides = t.$slider.children(":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function(t, i) {
                n(i).attr("data-slick-index", t).data("originalStyling", n(i).attr("style") || "")
            }), t.$slidesCache = t.$slides, t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? n('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), (t.options.centerMode === !0 || t.options.swipeToSlide === !0) && (t.options.slidesToScroll = 1), n("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.options.accessibility === !0 && t.$list.prop("tabIndex", 0), t.setSlideClasses("number" == typeof this.currentSlide ? this.currentSlide : 0), t.options.draggable === !0 && t.$list.addClass("draggable")
        }, t.prototype.buildRows = function() {
            var t, i, r, f, c, u, e, n = this,
                o, s, h;
            if (f = document.createDocumentFragment(), u = n.$slider.children(), n.options.rows > 1) {
                for (e = n.options.slidesPerRow * n.options.rows, c = Math.ceil(u.length / e), t = 0; c > t; t++) {
                    for (o = document.createElement("div"), i = 0; i < n.options.rows; i++) {
                        for (s = document.createElement("div"), r = 0; r < n.options.slidesPerRow; r++) h = t * e + (i * n.options.slidesPerRow + r), u.get(h) && s.appendChild(u.get(h));
                        o.appendChild(s)
                    }
                    f.appendChild(o)
                }
                n.$slider.html(f), n.$slider.children().children().children().css({
                    width: 100 / n.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, t.prototype.checkResponsive = function(t) {
            var u, r, f, i = this,
                e = !1,
                o = i.$slider.width(),
                s = window.innerWidth || n(window).width();
            if ("window" === i.respondTo ? f = s : "slider" === i.respondTo ? f = o : "min" === i.respondTo && (f = Math.min(s, o)), i.originalSettings.responsive && i.originalSettings.responsive.length > -1 && null !== i.originalSettings.responsive) {
                r = null;
                for (u in i.breakpoints) i.breakpoints.hasOwnProperty(u) && (i.originalSettings.mobileFirst === !1 ? f < i.breakpoints[u] && (r = i.breakpoints[u]) : f > i.breakpoints[u] && (r = i.breakpoints[u]));
                null !== r ? null !== i.activeBreakpoint ? r !== i.activeBreakpoint && (i.activeBreakpoint = r, "unslick" === i.breakpointSettings[r] ? i.unslick(r) : (i.options = n.extend({}, i.originalSettings, i.breakpointSettings[r]), t === !0 && (i.currentSlide = i.options.initialSlide), i.refresh(t)), e = r) : (i.activeBreakpoint = r, "unslick" === i.breakpointSettings[r] ? i.unslick(r) : (i.options = n.extend({}, i.originalSettings, i.breakpointSettings[r]), t === !0 && (i.currentSlide = i.options.initialSlide), i.refresh(t)), e = r) : null !== i.activeBreakpoint && (i.activeBreakpoint = null, i.options = i.originalSettings, t === !0 && (i.currentSlide = i.options.initialSlide), i.refresh(t), e = r), t || e === !1 || i.$slider.trigger("breakpoint", [i, e])
            }
        }, t.prototype.changeSlide = function(t, i) {
            var f, e, o, r = this,
                u = n(t.target),
                s;
            switch (u.is("a") && t.preventDefault(), u.is("li") || (u = u.closest("li")), o = 0 != r.slideCount % r.options.slidesToScroll, f = o ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, t.data.message) {
                case "previous":
                    e = 0 === f ? r.options.slidesToScroll : r.options.slidesToShow - f, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - e, !1, i);
                    break;
                case "next":
                    e = 0 === f ? r.options.slidesToScroll : f, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + e, !1, i);
                    break;
                case "index":
                    s = 0 === t.data.index ? 0 : t.data.index || u.index() * r.options.slidesToScroll, r.slideHandler(r.checkNavigable(s), !1, i), u.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, t.prototype.checkNavigable = function(n) {
            var t, i, u = this,
                r;
            if (t = u.getNavigableIndexes(), i = 0, n > t[t.length - 1]) n = t[t.length - 1];
            else
                for (r in t) {
                    if (n < t[r]) {
                        n = i;
                        break
                    }
                    i = t[r]
                }
            return n
        }, t.prototype.cleanUpEvents = function() {
            var t = this;
            t.options.dots && null !== t.$dots && (n("li", t.$dots).off("click.slick", t.changeSlide), t.options.pauseOnDotsHover === !0 && t.options.autoplay === !0 && n("li", t.$dots).off("mouseenter.slick", n.proxy(t.setPaused, t, !0)).off("mouseleave.slick", n.proxy(t.setPaused, t, !1))), t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide)), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), n(document).off(t.visibilityChange, t.visibility), t.$list.off("mouseenter.slick", n.proxy(t.setPaused, t, !0)), t.$list.off("mouseleave.slick", n.proxy(t.setPaused, t, !1)), t.options.accessibility === !0 && t.$list.off("keydown.slick", t.keyHandler), t.options.focusOnSelect === !0 && n(t.$slideTrack).children().off("click.slick", t.selectHandler), n(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), n(window).off("resize.slick.slick-" + t.instanceUid, t.resize), n("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), n(window).off("load.slick.slick-" + t.instanceUid, t.setPosition), n(document).off("ready.slick.slick-" + t.instanceUid, t.setPosition)
        }, t.prototype.cleanUpRows = function() {
            var n, t = this;
            t.options.rows > 1 && (n = t.$slides.children().children(), n.removeAttr("style"), t.$slider.html(n))
        }, t.prototype.clickHandler = function(n) {
            var t = this;
            t.shouldClick === !1 && (n.stopImmediatePropagation(), n.stopPropagation(), n.preventDefault())
        }, t.prototype.destroy = function(t) {
            var i = this;
            i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), n(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && "object" != typeof i.options.prevArrow && i.$prevArrow.remove(), i.$nextArrow && "object" != typeof i.options.nextArrow && i.$nextArrow.remove(), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                n(this).attr("style", n(this).data("originalStyling"))
            }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.unslicked = !0, t || i.$slider.trigger("destroy", [i])
        }, t.prototype.disableTransition = function(n) {
            var t = this,
                i = {};
            i[t.transitionType] = "", t.options.fade === !1 ? t.$slideTrack.css(i) : t.$slides.eq(n).css(i)
        }, t.prototype.fadeSlide = function(n, t) {
            var i = this;
            i.cssTransitions === !1 ? (i.$slides.eq(n).css({
                zIndex: 1e3
            }), i.$slides.eq(n).animate({
                opacity: 1
            }, i.options.speed, i.options.easing, t)) : (i.applyTransition(n), i.$slides.eq(n).css({
                opacity: 1,
                zIndex: 1e3
            }), t && setTimeout(function() {
                i.disableTransition(n), t.call()
            }, i.options.speed))
        }, t.prototype.filterSlides = t.prototype.slickFilter = function(n) {
            var t = this;
            null !== n && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(n).appendTo(t.$slideTrack), t.reinit())
        }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
            var n = this;
            return n.currentSlide
        }, t.prototype.getDotCount = function() {
            var n = this,
                t = 0,
                i = 0,
                r = 0;
            if (n.options.infinite === !0)
                for (; t < n.slideCount;) ++r, t = i + n.options.slidesToShow, i += n.options.slidesToScroll <= n.options.slidesToShow ? n.options.slidesToScroll : n.options.slidesToShow;
            else if (n.options.centerMode === !0) r = n.slideCount;
            else
                for (; t < n.slideCount;) ++r, t = i + n.options.slidesToShow, i += n.options.slidesToScroll <= n.options.slidesToShow ? n.options.slidesToScroll : n.options.slidesToShow;
            return r - 1
        }, t.prototype.getLeft = function(n) {
            var f, r, i, t = this,
                u = 0;
            return t.slideOffset = 0, r = t.$slides.first().outerHeight(), t.options.infinite === !0 ? (t.slideCount > t.options.slidesToShow && (t.slideOffset = -1 * t.slideWidth * t.options.slidesToShow, u = -1 * r * t.options.slidesToShow), 0 != t.slideCount % t.options.slidesToScroll && n + t.options.slidesToScroll > t.slideCount && t.slideCount > t.options.slidesToShow && (n > t.slideCount ? (t.slideOffset = -1 * (t.options.slidesToShow - (n - t.slideCount)) * t.slideWidth, u = -1 * (t.options.slidesToShow - (n - t.slideCount)) * r) : (t.slideOffset = -1 * t.slideCount % t.options.slidesToScroll * t.slideWidth, u = -1 * t.slideCount % t.options.slidesToScroll * r))) : n + t.options.slidesToShow > t.slideCount && (t.slideOffset = (n + t.options.slidesToShow - t.slideCount) * t.slideWidth, u = (n + t.options.slidesToShow - t.slideCount) * r), t.slideCount <= t.options.slidesToShow && (t.slideOffset = 0, u = 0), t.options.centerMode === !0 && t.options.infinite === !0 ? t.slideOffset += t.slideWidth * Math.floor(t.options.slidesToShow / 2) - t.slideWidth : t.options.centerMode === !0 && (t.slideOffset = 0, t.slideOffset += t.slideWidth * Math.floor(t.options.slidesToShow / 2)), f = t.options.vertical === !1 ? -1 * n * t.slideWidth + t.slideOffset : -1 * n * r + u, t.options.variableWidth === !0 && (i = t.slideCount <= t.options.slidesToShow || t.options.infinite === !1 ? t.$slideTrack.children(".slick-slide").eq(n) : t.$slideTrack.children(".slick-slide").eq(n + t.options.slidesToShow), f = i[0] ? -1 * i[0].offsetLeft : 0, t.options.centerMode === !0 && (i = t.options.infinite === !1 ? t.$slideTrack.children(".slick-slide").eq(n) : t.$slideTrack.children(".slick-slide").eq(n + t.options.slidesToShow + 1), f = i[0] ? -1 * i[0].offsetLeft : 0, f += (t.$list.width() - i.outerWidth()) / 2)), f
        }, t.prototype.getOption = t.prototype.slickGetOption = function(n) {
            var t = this;
            return t.options[n]
        }, t.prototype.getNavigableIndexes = function() {
            var i, n = this,
                t = 0,
                r = 0,
                u = [];
            for (n.options.infinite === !1 ? i = n.slideCount : (t = -1 * n.options.slidesToScroll, r = -1 * n.options.slidesToScroll, i = 2 * n.slideCount); i > t;) u.push(t), t = r + n.options.slidesToScroll, r += n.options.slidesToScroll <= n.options.slidesToShow ? n.options.slidesToScroll : n.options.slidesToShow;
            return u
        }, t.prototype.getSlick = function() {
            return this
        }, t.prototype.getSlideCount = function() {
            var u, i, r, t = this;
            return r = t.options.centerMode === !0 ? t.slideWidth * Math.floor(t.options.slidesToShow / 2) : 0, t.options.swipeToSlide === !0 ? (t.$slideTrack.find(".slick-slide").each(function(u, f) {
                if (f.offsetLeft - r + n(f).outerWidth() / 2 > -1 * t.swipeLeft) return i = f, !1
            }), u = Math.abs(n(i).attr("data-slick-index") - t.currentSlide) || 1) : t.options.slidesToScroll
        }, t.prototype.goTo = t.prototype.slickGoTo = function(n, t) {
            var i = this;
            i.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(n)
                }
            }, t)
        }, t.prototype.init = function(t) {
            var i = this;
            n(i.$slider).hasClass("slick-initialized") || (n(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots()), t && i.$slider.trigger("init", [i])
        }, t.prototype.initArrowEvents = function() {
            var n = this;
            n.options.arrows === !0 && n.slideCount > n.options.slidesToShow && (n.$prevArrow.on("click.slick", {
                message: "previous"
            }, n.changeSlide), n.$nextArrow.on("click.slick", {
                message: "next"
            }, n.changeSlide))
        }, t.prototype.initDotEvents = function() {
            var t = this;
            t.options.dots === !0 && t.slideCount > t.options.slidesToShow && n("li", t.$dots).on("click.slick", {
                message: "index"
            }, t.changeSlide), t.options.dots === !0 && t.options.pauseOnDotsHover === !0 && t.options.autoplay === !0 && n("li", t.$dots).on("mouseenter.slick", n.proxy(t.setPaused, t, !0)).on("mouseleave.slick", n.proxy(t.setPaused, t, !1))
        }, t.prototype.initializeEvents = function() {
            var t = this;
            t.initArrowEvents(), t.initDotEvents(), t.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), n(document).on(t.visibilityChange, n.proxy(t.visibility, t)), t.$list.on("mouseenter.slick", n.proxy(t.setPaused, t, !0)), t.$list.on("mouseleave.slick", n.proxy(t.setPaused, t, !1)), t.options.accessibility === !0 && t.$list.on("keydown.slick", t.keyHandler), t.options.focusOnSelect === !0 && n(t.$slideTrack).children().on("click.slick", t.selectHandler), n(window).on("orientationchange.slick.slick-" + t.instanceUid, n.proxy(t.orientationChange, t)), n(window).on("resize.slick.slick-" + t.instanceUid, n.proxy(t.resize, t)), n("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), n(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), n(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition)
        }, t.prototype.initUI = function() {
            var n = this;
            n.options.arrows === !0 && n.slideCount > n.options.slidesToShow && (n.$prevArrow.show(), n.$nextArrow.show()), n.options.dots === !0 && n.slideCount > n.options.slidesToShow && n.$dots.show(), n.options.autoplay === !0 && n.autoPlay()
        }, t.prototype.keyHandler = function(n) {
            var t = this;
            37 === n.keyCode && t.options.accessibility === !0 ? t.changeSlide({
                data: {
                    message: "previous"
                }
            }) : 39 === n.keyCode && t.options.accessibility === !0 && t.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, t.prototype.lazyLoad = function() {
            function f(t) {
                n("img[data-lazy]", t).each(function() {
                    var t = n(this),
                        i = n(this).attr("data-lazy"),
                        r = document.createElement("img");
                    r.onload = function() {
                        t.animate({
                            opacity: 1
                        }, 200)
                    }, r.src = i, t.css({
                        opacity: 0
                    }).attr("src", i).removeAttr("data-lazy").removeClass("slick-loading")
                })
            }
            var e, r, i, u, t = this;
            t.options.centerMode === !0 ? t.options.infinite === !0 ? (i = t.currentSlide + (t.options.slidesToShow / 2 + 1), u = i + t.options.slidesToShow + 2) : (i = Math.max(0, t.currentSlide - (t.options.slidesToShow / 2 + 1)), u = 2 + (t.options.slidesToShow / 2 + 1) + t.currentSlide) : (i = t.options.infinite ? t.options.slidesToShow + t.currentSlide : t.currentSlide, u = i + t.options.slidesToShow, t.options.fade === !0 && (i > 0 && i--, u <= t.slideCount && u++)), e = t.$slider.find(".slick-slide").slice(i, u), f(e), t.slideCount <= t.options.slidesToShow ? (r = t.$slider.find(".slick-slide"), f(r)) : t.currentSlide >= t.slideCount - t.options.slidesToShow ? (r = t.$slider.find(".slick-cloned").slice(0, t.options.slidesToShow), f(r)) : 0 === t.currentSlide && (r = t.$slider.find(".slick-cloned").slice(-1 * t.options.slidesToShow), f(r))
        }, t.prototype.loadSlider = function() {
            var n = this;
            n.setPosition(), n.$slideTrack.css({
                opacity: 1
            }), n.$slider.removeClass("slick-loading"), n.initUI(), "progressive" === n.options.lazyLoad && n.progressiveLazyLoad()
        }, t.prototype.next = t.prototype.slickNext = function() {
            var n = this;
            n.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, t.prototype.orientationChange = function() {
            var n = this;
            n.checkResponsive(), n.setPosition()
        }, t.prototype.pause = t.prototype.slickPause = function() {
            var n = this;
            n.autoPlayClear(), n.paused = !0
        }, t.prototype.play = t.prototype.slickPlay = function() {
            var n = this;
            n.paused = !1, n.autoPlay()
        }, t.prototype.postSlide = function(n) {
            var t = this;
            t.$slider.trigger("afterChange", [t, n]), t.animating = !1, t.setPosition(), t.swipeLeft = null, t.options.autoplay === !0 && t.paused === !1 && t.autoPlay()
        }, t.prototype.prev = t.prototype.slickPrev = function() {
            var n = this;
            n.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, t.prototype.preventDefault = function(n) {
            n.preventDefault()
        }, t.prototype.progressiveLazyLoad = function() {
            var r, i, t = this;
            r = n("img[data-lazy]", t.$slider).length, r > 0 && (i = n("img[data-lazy]", t.$slider).first(), i.attr("src", i.attr("data-lazy")).removeClass("slick-loading").load(function() {
                i.removeAttr("data-lazy"), t.progressiveLazyLoad(), t.options.adaptiveHeight === !0 && t.setPosition()
            }).error(function() {
                i.removeAttr("data-lazy"), t.progressiveLazyLoad()
            }))
        }, t.prototype.refresh = function(t) {
            var i = this,
                r = i.currentSlide;
            i.destroy(!0), n.extend(i, i.initials), i.init(), t || i.changeSlide({
                data: {
                    message: "index",
                    index: r
                }
            }, !1)
        }, t.prototype.reinit = function() {
            var t = this;
            t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.options.focusOnSelect === !0 && n(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses(0), t.setPosition(), t.$slider.trigger("reInit", [t])
        }, t.prototype.resize = function() {
            var t = this;
            n(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
                t.windowWidth = n(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
            }, 50))
        }, t.prototype.removeSlide = t.prototype.slickRemove = function(n, t, i) {
            var r = this;
            return "boolean" == typeof n ? (t = n, n = t === !0 ? 0 : r.slideCount - 1) : n = t === !0 ? --n : n, r.slideCount < 1 || 0 > n || n > r.slideCount - 1 ? !1 : (r.unload(), i === !0 ? r.$slideTrack.children().remove() : r.$slideTrack.children(this.options.slide).eq(n).remove(), r.$slides = r.$slideTrack.children(this.options.slide), r.$slideTrack.children(this.options.slide).detach(), r.$slideTrack.append(r.$slides), r.$slidesCache = r.$slides, r.reinit(), void 0)
        }, t.prototype.setCSS = function(n) {
            var r, u, t = this,
                i = {};
            t.options.rtl === !0 && (n = -n), r = "left" == t.positionProp ? Math.ceil(n) + "px" : "0px", u = "top" == t.positionProp ? Math.ceil(n) + "px" : "0px", i[t.positionProp] = n, t.transformsEnabled === !1 ? t.$slideTrack.css(i) : (i = {}, t.cssTransitions === !1 ? (i[t.animType] = "translate(" + r + ", " + u + ")", t.$slideTrack.css(i)) : (i[t.animType] = "translate3d(" + r + ", " + u + ", 0px)", t.$slideTrack.css(i)))
        }, t.prototype.setDimensions = function() {
            var n = this,
                t;
            n.options.vertical === !1 ? n.options.centerMode === !0 && n.$list.css({
                padding: "0px " + n.options.centerPadding
            }) : (n.$list.height(n.$slides.first().outerHeight(!0) * n.options.slidesToShow), n.options.centerMode === !0 && n.$list.css({
                padding: n.options.centerPadding + " 0px"
            })), n.listWidth = n.$list.width(), n.listHeight = n.$list.height(), n.options.vertical === !1 && n.options.variableWidth === !1 ? (n.slideWidth = Math.ceil(n.listWidth / n.options.slidesToShow), n.$slideTrack.width(Math.ceil(n.slideWidth * n.$slideTrack.children(".slick-slide").length))) : n.options.variableWidth === !0 ? n.$slideTrack.width(5e3 * n.slideCount) : (n.slideWidth = Math.ceil(n.listWidth), n.$slideTrack.height(Math.ceil(n.$slides.first().outerHeight(!0) * n.$slideTrack.children(".slick-slide").length))), t = n.$slides.first().outerWidth(!0) - n.$slides.first().width(), n.options.variableWidth === !1 && n.$slideTrack.children(".slick-slide").width(n.slideWidth - t)
        }, t.prototype.setFade = function() {
            var i, t = this;
            t.$slides.each(function(r, u) {
                i = -1 * t.slideWidth * r, t.options.rtl === !0 ? n(u).css({
                    position: "relative",
                    right: i,
                    top: 0,
                    zIndex: 800,
                    opacity: 0
                }) : n(u).css({
                    position: "relative",
                    left: i,
                    top: 0,
                    zIndex: 800,
                    opacity: 0
                })
            }), t.$slides.eq(t.currentSlide).css({
                zIndex: 900,
                opacity: 1
            })
        }, t.prototype.setHeight = function() {
            var n = this,
                t;
            1 === n.options.slidesToShow && n.options.adaptiveHeight === !0 && n.options.vertical === !1 && (t = n.$slides.eq(n.currentSlide).outerHeight(!0), n.$list.css("height", t))
        }, t.prototype.setOption = t.prototype.slickSetOption = function(n, t, i) {
            var r = this;
            r.options[n] = t, i === !0 && (r.unload(), r.reinit())
        }, t.prototype.setPosition = function() {
            var n = this;
            n.setDimensions(), n.setHeight(), n.options.fade === !1 ? n.setCSS(n.getLeft(n.currentSlide)) : n.setFade(), n.$slider.trigger("setPosition", [n])
        }, t.prototype.setProps = function() {
            var n = this,
                t = document.body.style;
            n.positionProp = n.options.vertical === !0 ? "top" : "left", "top" === n.positionProp ? n.$slider.addClass("slick-vertical") : n.$slider.removeClass("slick-vertical"), (void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.msTransition) && n.options.useCSS === !0 && (n.cssTransitions = !0), void 0 !== t.OTransform && (n.animType = "OTransform", n.transformType = "-o-transform", n.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (n.animType = !1)), void 0 !== t.MozTransform && (n.animType = "MozTransform", n.transformType = "-moz-transform", n.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (n.animType = !1)), void 0 !== t.webkitTransform && (n.animType = "webkitTransform", n.transformType = "-webkit-transform", n.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (n.animType = !1)), void 0 !== t.msTransform && (n.animType = "msTransform", n.transformType = "-ms-transform", n.transitionType = "msTransition", void 0 === t.msTransform && (n.animType = !1)), void 0 !== t.transform && n.animType !== !1 && (n.animType = "transform", n.transformType = "transform", n.transitionType = "transition"), n.transformsEnabled = null !== n.animType && n.animType !== !1
        }, t.prototype.setSlideClasses = function(n) {
            var u, i, r, f, t = this;
            t.$slider.find(".slick-slide").removeClass("slick-active").attr("aria-hidden", "true").removeClass("slick-center"), i = t.$slider.find(".slick-slide"), t.options.centerMode === !0 ? (u = Math.floor(t.options.slidesToShow / 2), t.options.infinite === !0 && (n >= u && n <= t.slideCount - 1 - u ? t.$slides.slice(n - u, n + u + 1).addClass("slick-active").attr("aria-hidden", "false") : (r = t.options.slidesToShow + n, i.slice(r - u + 1, r + u + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === n ? i.eq(i.length - 1 - t.options.slidesToShow).addClass("slick-center") : n === t.slideCount - 1 && i.eq(t.options.slidesToShow).addClass("slick-center")), t.$slides.eq(n).addClass("slick-center")) : n >= 0 && n <= t.slideCount - t.options.slidesToShow ? t.$slides.slice(n, n + t.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= t.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (f = t.slideCount % t.options.slidesToShow, r = t.options.infinite === !0 ? t.options.slidesToShow + n : n, t.options.slidesToShow == t.options.slidesToScroll && t.slideCount - n < t.options.slidesToShow ? i.slice(r - (t.options.slidesToShow - f), r + f).addClass("slick-active").attr("aria-hidden", "false") : i.slice(r, r + t.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === t.options.lazyLoad && t.lazyLoad()
        }, t.prototype.setupInfinite = function() {
            var i, r, u, t = this;
            if (t.options.fade === !0 && (t.options.centerMode = !1), t.options.infinite === !0 && t.options.fade === !1 && (r = null, t.slideCount > t.options.slidesToShow)) {
                for (u = t.options.centerMode === !0 ? t.options.slidesToShow + 1 : t.options.slidesToShow, i = t.slideCount; i > t.slideCount - u; i -= 1) r = i - 1, n(t.$slides[r]).clone(!0).attr("id", "").attr("data-slick-index", r - t.slideCount).prependTo(t.$slideTrack).addClass("slick-cloned");
                for (i = 0; u > i; i += 1) r = i, n(t.$slides[r]).clone(!0).attr("id", "").attr("data-slick-index", r + t.slideCount).appendTo(t.$slideTrack).addClass("slick-cloned");
                t.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                    n(this).attr("id", "")
                })
            }
        }, t.prototype.setPaused = function(n) {
            var t = this;
            t.options.autoplay === !0 && t.options.pauseOnHover === !0 && (t.paused = n, n ? t.autoPlayClear() : t.autoPlay())
        }, t.prototype.selectHandler = function(t) {
            var i = this,
                u = n(t.target).is(".slick-slide") ? n(t.target) : n(t.target).parents(".slick-slide"),
                r = parseInt(u.attr("data-slick-index"));
            return r || (r = 0), i.slideCount <= i.options.slidesToShow ? (i.$slider.find(".slick-slide").removeClass("slick-active").attr("aria-hidden", "true"), i.$slides.eq(r).addClass("slick-active").attr("aria-hidden", "false"), i.options.centerMode === !0 && (i.$slider.find(".slick-slide").removeClass("slick-center"), i.$slides.eq(r).addClass("slick-center")), i.asNavFor(r), void 0) : (i.slideHandler(r), void 0)
        }, t.prototype.slideHandler = function(n, t, i) {
            var u, f, s, e, o = null,
                r = this;
            return t = t || !1, r.animating === !0 && r.options.waitForAnimate === !0 || r.options.fade === !0 && r.currentSlide === n || r.slideCount <= r.options.slidesToShow ? void 0 : (t === !1 && r.asNavFor(n), u = n, o = r.getLeft(u), e = r.getLeft(r.currentSlide), r.currentLeft = null === r.swipeLeft ? e : r.swipeLeft, r.options.infinite === !1 && r.options.centerMode === !1 && (0 > n || n > r.getDotCount() * r.options.slidesToScroll) ? (r.options.fade === !1 && (u = r.currentSlide, i !== !0 ? r.animateSlide(e, function() {
                r.postSlide(u)
            }) : r.postSlide(u)), void 0) : r.options.infinite === !1 && r.options.centerMode === !0 && (0 > n || n > r.slideCount - r.options.slidesToScroll) ? (r.options.fade === !1 && (u = r.currentSlide, i !== !0 ? r.animateSlide(e, function() {
                r.postSlide(u)
            }) : r.postSlide(u)), void 0) : (r.options.autoplay === !0 && clearInterval(r.autoPlayTimer), f = 0 > u ? 0 != r.slideCount % r.options.slidesToScroll ? r.slideCount - r.slideCount % r.options.slidesToScroll : r.slideCount + u : u >= r.slideCount ? 0 != r.slideCount % r.options.slidesToScroll ? 0 : u - r.slideCount : u, r.animating = !0, r.$slider.trigger("beforeChange", [r, r.currentSlide, f]), s = r.currentSlide, r.currentSlide = f, r.setSlideClasses(r.currentSlide), r.updateDots(), r.updateArrows(), r.options.fade === !0 ? (i !== !0 ? r.fadeSlide(f, function() {
                r.postSlide(f)
            }) : r.postSlide(f), r.animateHeight(), void 0) : (i !== !0 ? r.animateSlide(o, function() {
                r.postSlide(f)
            }) : r.postSlide(f), void 0)))
        }, t.prototype.startLoad = function() {
            var n = this;
            n.options.arrows === !0 && n.slideCount > n.options.slidesToShow && (n.$prevArrow.hide(), n.$nextArrow.hide()), n.options.dots === !0 && n.slideCount > n.options.slidesToShow && n.$dots.hide(), n.$slider.addClass("slick-loading")
        }, t.prototype.swipeDirection = function() {
            var i, r, u, n, t = this;
            return i = t.touchObject.startX - t.touchObject.curX, r = t.touchObject.startY - t.touchObject.curY, u = Math.atan2(r, i), n = Math.round(180 * u / Math.PI), 0 > n && (n = 360 - Math.abs(n)), 45 >= n && n >= 0 ? t.options.rtl === !1 ? "left" : "right" : 360 >= n && n >= 315 ? t.options.rtl === !1 ? "left" : "right" : n >= 135 && 225 >= n ? t.options.rtl === !1 ? "right" : "left" : t.options.verticalSwiping === !0 ? n >= 35 && 135 >= n ? "left" : "right" : "vertical"
        }, t.prototype.swipeEnd = function() {
            var t, n = this;
            if (n.dragging = !1, n.shouldClick = n.touchObject.swipeLength > 10 ? !1 : !0, void 0 === n.touchObject.curX) return !1;
            if (n.touchObject.edgeHit === !0 && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) switch (n.swipeDirection()) {
                case "left":
                    t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.slideHandler(t), n.currentDirection = 0, n.touchObject = {}, n.$slider.trigger("swipe", [n, "left"]);
                    break;
                case "right":
                    t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.slideHandler(t), n.currentDirection = 1, n.touchObject = {}, n.$slider.trigger("swipe", [n, "right"])
            } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
        }, t.prototype.swipeHandler = function(n) {
            var t = this;
            if (!(t.options.swipe === !1 || "ontouchend" in document && t.options.swipe === !1 || t.options.draggable === !1 && -1 !== n.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = n.originalEvent && void 0 !== n.originalEvent.touches ? n.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, t.options.verticalSwiping === !0 && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), n.data.action) {
                case "start":
                    t.swipeStart(n);
                    break;
                case "move":
                    t.swipeMove(n);
                    break;
                case "end":
                    t.swipeEnd(n)
            }
        }, t.prototype.swipeMove = function(n) {
            var f, e, r, u, i, t = this;
            return i = void 0 !== n.originalEvent ? n.originalEvent.touches : null, !t.dragging || i && 1 !== i.length ? !1 : (f = t.getLeft(t.currentSlide), t.touchObject.curX = void 0 !== i ? i[0].pageX : n.clientX, t.touchObject.curY = void 0 !== i ? i[0].pageY : n.clientY, t.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(t.touchObject.curX - t.touchObject.startX, 2))), t.options.verticalSwiping === !0 && (t.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(t.touchObject.curY - t.touchObject.startY, 2)))), e = t.swipeDirection(), "vertical" !== e ? (void 0 !== n.originalEvent && t.touchObject.swipeLength > 4 && n.preventDefault(), u = (t.options.rtl === !1 ? 1 : -1) * (t.touchObject.curX > t.touchObject.startX ? 1 : -1), t.options.verticalSwiping === !0 && (u = t.touchObject.curY > t.touchObject.startY ? 1 : -1), r = t.touchObject.swipeLength, t.touchObject.edgeHit = !1, t.options.infinite === !1 && (0 === t.currentSlide && "right" === e || t.currentSlide >= t.getDotCount() && "left" === e) && (r = t.touchObject.swipeLength * t.options.edgeFriction, t.touchObject.edgeHit = !0), t.swipeLeft = t.options.vertical === !1 ? f + r * u : f + r * (t.$list.height() / t.listWidth) * u, t.options.verticalSwiping === !0 && (t.swipeLeft = f + r * u), t.options.fade === !0 || t.options.touchMove === !1 ? !1 : t.animating === !0 ? (t.swipeLeft = null, !1) : (t.setCSS(t.swipeLeft), void 0)) : void 0)
        }, t.prototype.swipeStart = function(n) {
            var i, t = this;
            return 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow ? (t.touchObject = {}, !1) : (void 0 !== n.originalEvent && void 0 !== n.originalEvent.touches && (i = n.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== i ? i.pageX : n.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== i ? i.pageY : n.clientY, t.dragging = !0, void 0)
        }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
            var n = this;
            null !== n.$slidesCache && (n.unload(), n.$slideTrack.children(this.options.slide).detach(), n.$slidesCache.appendTo(n.$slideTrack), n.reinit())
        }, t.prototype.unload = function() {
            var t = this;
            n(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && "object" != typeof t.options.prevArrow && t.$prevArrow.remove(), t.$nextArrow && "object" != typeof t.options.nextArrow && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible").attr("aria-hidden", "true").css("width", "")
        }, t.prototype.unslick = function(n) {
            var t = this;
            t.$slider.trigger("unslick", [t, n]), t.destroy()
        }, t.prototype.updateArrows = function() {
            var t, n = this;
            t = Math.floor(n.options.slidesToShow / 2), n.options.arrows === !0 && n.options.infinite !== !0 && n.slideCount > n.options.slidesToShow && (n.$prevArrow.removeClass("slick-disabled"), n.$nextArrow.removeClass("slick-disabled"), 0 === n.currentSlide ? (n.$prevArrow.addClass("slick-disabled"), n.$nextArrow.removeClass("slick-disabled")) : n.currentSlide >= n.slideCount - n.options.slidesToShow && n.options.centerMode === !1 ? (n.$nextArrow.addClass("slick-disabled"), n.$prevArrow.removeClass("slick-disabled")) : n.currentSlide >= n.slideCount - 1 && n.options.centerMode === !0 && (n.$nextArrow.addClass("slick-disabled"), n.$prevArrow.removeClass("slick-disabled")))
        }, t.prototype.updateDots = function() {
            var n = this;
            null !== n.$dots && (n.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), n.$dots.find("li").eq(Math.floor(n.currentSlide / n.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
        }, t.prototype.visibility = function() {
            var n = this;
            document[n.hidden] ? (n.paused = !0, n.autoPlayClear()) : n.options.autoplay === !0 && (n.paused = !1, n.autoPlay())
        }, n.fn.slick = function() {
            var u, i = this,
                r = arguments[0],
                f = Array.prototype.slice.call(arguments, 1),
                e = i.length,
                n = 0;
            for (n; e > n; n++)
                if ("object" == typeof r || "undefined" == typeof r ? i[n].slick = new t(i[n], r) : u = i[n].slick[r].apply(i[n].slick, f), "undefined" != typeof u) return u;
            return i
        }
    });
var matchHeroMedia = function(n) {
        if (n = $.trim(n), n.length > 0) {
            n = n.toLowerCase(), n = n.substring(1, n.length - 1);
            var t = n.indexOf(":"),
                i = Number($.trim(n.substring(t + 1, n.length - 2)));
            if (i < $(window).width()) return !1
        }
        return !0
    },
    setHeroBgimage = function () {
        $(".herobg div[data-picture]").each(function() {
            for (var t = $(this).find("div[data-src]").get(), i, r, n = t.length - 1; n >= 0; n--)
                if (r = matchHeroMedia(t[n].getAttribute("data-media")), r == !0) {
                    i = t[n].getAttribute("data-src");
                    break
                }
            $(this).parents(".herobg").css("background-image", "url(" + i + ")")
        })
    },
    setHeroSlideFullscreen = function() {
        var n = $(window).width();
        $(".epg_slideherofullscreendisplay").each(function() {
            $(this).css("margin-left", "0px"), $(this).css("margin-right", "0px");
            var r = $(this).width(),
                t = (n - r) / 2,
                i = 0 - t;
            $(this).css("margin-left", i), $(this).css("margin-right", i), n > 800 ? $(".herocontent", this).each(function() {
                $(this).css("padding-left", t), $(this).css("padding-right", t)
            }) : $(".herocontent", this).each(function() {
                $(this).css("padding-left", "0px"), $(this).css("padding-right", "0px")
            })
        })
    },
    setHeroContentFullscreen = function() {
        var n = $(window).width();
        $(".epg_slideherofullscreendisplay .epg_slideherofullscreen .herocontent > .row-fluid").height(""), n <= 800 && $(".epg_slideherofullscreendisplay").each(function() {
            var n = 0;
            $(".epg_slideherofullscreen .herocontent >.row-fluid", this).each(function() {
                $(this).height() > n && (n = $(this).height())
            }), $(".epg_slideherofullscreen .herocontent >.row-fluid", this).height(n)
        })
    },
    setHeroBackgroundImage = function() {
        var n = $(window).width();
        $("#empowering-educators_hero").each(function() {
            $(this).css("margin-left", "0px"), $(this).css("margin-right", "0px");
            var r = $(this).width(),
                t = (n - r) / 2,
                i = 0 - t;
            $(this).css("margin-left", i), $(this).css("margin-right", i), n > 800 ? $(".herocontent", this).each(function() {
                $(this).css("padding-left", t), $(this).css("padding-right", t)
            }) : $(".herocontent", this).each(function() {
                $(this).css("padding-left", "0px"), $(this).css("padding-right", "0px")
            })
        })
    };
if ($(document).ready(function() {
        setHeroBgimage(), setHeroSlideFullscreen(), setHeroBackgroundImage(), setHeroContentFullscreen(), $(window).resize(function() {
            setHeroBgimage(), setHeroSlideFullscreen(), setHeroBackgroundImage(), setHeroContentFullscreen()
        })
    }), $(window).load(function() {
        var i = function() {
                var n = "microsoftedu";
                return {
                    getPinterestAccountName: function() {
                        return n
                    }
                }
            }(),
            n, t;
        $(".touch .educationPreFooter .popup, .touch .educationPreFooter .popup iframe").hide(), $(".no-touch .educationPreFooter ul > li").hover(function() {
            var t = $(this).children(".popup");
            n(t), $(this).addClass("hover")
        }, function() {
            $(this).removeClass("hover")
        }), $(".educationPreFooter .popup iframe").hover(function() {
            $(this).parent("li").addClass("hover")
        }), n = function(n) {
            var t = n.outerWidth(),
                i = n.parent().outerWidth(),
                r = (i - t) / 2;
            n.css("left", r + "px")
        }, $(".educationPreFooter .pinterest").length && (t = i.getPinterestAccountName(), $.ajax({
            method: "GET",
            url: "https://api.pinterest.com/v3/pidgets/users/" + t + "/pins",
            dataType: "jsonp",
            success: function(n) {
                var t = n.data.user.follower_count;
                $("#pinterestFollowersNum").text(t)
            }
        }))
    }), String.prototype.format = function() {
        for (var t = this, i, n = 0; n < arguments.length; n++) i = new RegExp("\\{" + n + "\\}", "gi"), t = t.replace(i, arguments[n]);
        return t
    }, function(n) {
        var i = "<div class='blogEntry'><a href='{0}'><div class='thumbnailContainer'><img src='{1}' alt='{2}'><\/div><div class='abstractContainer'><p>{3}<\/p><\/div><\/a><\/div>";
        n.fn.epgPsHugBlogRss = function(t) {
            var i = {
                formatDate: "mm/dd/yyyy",
                apiUrl: "",
                paras: "",
                numToDisplay: 0,
                title: "",
                linkText: "",
                linkUrl: "",
                container: ""
            };
            n.extend(i, t), e(i.apiUrl, i.paras, i.formatDate, i.container, i.numToDisplay, i.title, i.linkText, i.linkUrl)
        };
        var r = function(t, i, r, u) {
                var f = n("#" + t).children("div").children("div").children("div"),
                    o = f.children("h3"),
                    e = f.children("div:eq(1)").children("div:eq(1)").children("a");
                o.html("").html(i), e.html("").html(r), e.attr({
                    href: u
                })
            },
            u = function(t, r) {
                for (var s = n("#" + r).children("div").children("div").children("div"), h = s.children("div:eq(0)"), o = "", e, f, u = 0; u < t.length; u++)
                    if (e = t[u], e != null && e != undefined) f = t[u].Content.article, o += i.format(f.articleLink, f.contributorThumbnail, f.contributorName.split(",", 1), f.articleAbstract);
                    else break;
                h.html("").html(o)
            },
            t = function(t, i) {
                var r = n("#" + t).children("div").children("div").children("div"),
                    f = r.children("h3"),
                    u;
                f.html("").html("Error"), u = r.children("div:eq(0)"), u.html("").html(i)
            },
            f = function(n, t) {
                return parseInt(n.Content.article.publishDate) < parseInt(t.Content.article.publishDate) ? 1 : -1
            },
            e = function(i, e, o, s, h, c, l, a) {
                r(s, c, l, a), n.ajax({
                    type: "GET",
                    url: i,
                    data: e,
                    timeout: 5e3,
                    dataType: "json",
                    success: function(n) {
                        var i;
                        try {
                            var o = eval(n),
                                r = [],
                                e = o.DataLoad.Feed.FeedList;
                            for (e.sort(f), i = 0; i < h; i++) r.push(e[i]);
                            u(r, s)
                        } catch (c) {
                            t(s, c)
                        }
                    },
                    error: function(n, i, r) {
                        var u = r;
                        t(s, u)
                    }
                })
            }
    }(jQuery), function(n) {
        var i = "<div class='blogPost'><div class='blogEntry'><div class='bTitle' style='max-width:100%;'>{0}<\/div><div class='bDate'>{1}<\/div><div class='cssClear'><\/div><div class='bCopy'>{2}<a href='{3}' style='display:inline;'> [read more]<\/a><\/div><\/div><\/div>",
            r = "<div class='blogPost'><div class='blogEntry'><div class='bTitle' style='max-width:100%;'>{0}<\/div><div class='bDate'>{1}<\/div><div class='cssClear'><\/div><div class='bCopyEnt'>{2}<a href='{3}'> read more<\/a><\/div><\/div><\/div>";
        n.fn.epgPsBlogsFeed = function(t) {
            var i = {
                formatDate: "mm/dd/yyyy",
                apiUrl: "",
                paras: "",
                numToDisplay: 0,
                title: "",
                linkText: "",
                linkUrl: "",
                container: "",
                siteStyle: "citynext",
                showMoreLink: !1,
                showRssIcon: !1,
                rssUrl: ""
            };
            n.extend(i, t), s(i.apiUrl, i.paras, i.formatDate, i.container, i.numToDisplay, i.title, i.linkText, i.linkUrl, i.showMoreLink, i.siteStyle, i.showRssIcon, i.rssUrl)
        };
        var u = function(t, i, r, u, f, e, o, s) {
                var h = n("#" + t).children("div").children("div").children("div"),
                    c = h.children("div.epgPsBlogsFeedHeader").children("div").children("h3"),
                    l = h.children("div.epgPsBlogsFeedLink").children("div").children("a");
                c.html("").html(i), l.html("").html(s), l.attr({
                    href: o
                }), e == "citynext" ? c.css({
                    "line-height": "46px",
                    "font-family": "segoe ui light",
                    "font-size": "36px",
                    "margin-bottom": "13px"
                }) : e == "goverment" && h.children("div.epgPsBlogsFeedHeader").children("div").css({
                    width: "auto"
                }), r || h.children("div.epgPsBlogsFeedLink").css({
                    display: "none"
                }), u ? c.siblings("img.rssIcon").click(function() {
                    window.open(f)
                }) : (c.siblings("img.rssIcon").css({
                    display: "none"
                }), h.children("div.epgPsBlogsFeedLink").children("div").css({
                    width: "100%"
                }))
            },
            f = function(t, u, f) {
                var a = n("#" + u).children("div").children("div").children("div"),
                    v = a.children("div.epgPsBlogsFeedContent").children("div.blogsFeed"),
                    l = "",
                    h = "",
                    e, c, s;
                for (f == "citynext" ? h = i : f == "goverment" && (h = r), e = 0; e < t.length; e++)
                    if (c = t[e], c != null && c != undefined) s = t[e].Content.article, l += h.format(s.articleTitle, o(s.publishDate), s.articleAbstract, s.articleLink);
                    else break;
                v.html("").html(l)
            },
            t = function(t, i) {
                var r = n("#" + t).children("div").children("div").children("div"),
                    u = r.children("div.epgPsBlogsFeedHeader").children("div").children("h3"),
                    f = r.children("div.epgPsBlogsFeedContent").children("div.blogsFeed");
                u.html("").html("error"), f.html("").html(i)
            },
            e = function(n, t) {
                return parseInt(n.Content.article.publishDate) < parseInt(t.Content.article.publishDate) ? 1 : -1
            },
            o = function(n) {
                var t = n.substr(0, 4),
                    i = n.substr(4, 2),
                    r = n.substr(6, 2);
                return i + "." + r + "." + t
            },
            s = function(i, r, o, s, h, c, l, a, v, y, p, w) {
                u(s, c, v, p, w, y, a, l), n.ajax({
                    type: "GET",
                    url: i,
                    data: r,
                    timeout: 5e3,
                    dataType: "json",
                    success: function(n) {
                        var i;
                        try {
                            var o = eval(n),
                                r = [],
                                u = o.DataLoad.Feed.FeedList;
                            for (u.sort(e), i = 0; i < h; i++) r.push(u[i]);
                            f(r, s, y)
                        } catch (c) {
                            t(s, c)
                        }
                    },
                    error: function(n, i, r) {
                        var u = r;
                        t(s, u)
                    }
                })
            }
    }(jQuery), function(n) {
        var i = "<div class='additionalStory blog'><span class='icon' style='background-image: url(\"{0}\");'><\/span><a title='{1}' class='title' href='{2}'>{3}<\/a><\/div>",
            r = "<div class='feature blog'><div class='heroWrap'><a class='hero' style='background-image: url(\"{0}\");height:170px;' href='{1}'><div class='overlay' style='background-color: rgb(0, 47, 140);'><div class='overlayInner'><span class='article' style='background-image: url(\"{2}\");'><\/span><span class='trend'>Blog<\/span><\/div><\/div><\/a><\/div><div class='contentWrap'><a title='{3}' class='title' href='{4}'>{5}<\/a><div class='dateAuthor'><span class='date'>{6}<\/span><span class='dateAuthor'>{7}<\/span><\/div><a title='Read More' class='action' href='{8}'> read more<\/a><\/div><\/div>",
            u = "<div class='feature blog'><div class='heroWrap'><a class='hero' style='background-image: url(\"{0}\");height:200px;' href='{1}' style='height:200px;'><div class='overlay' style='background-color: rgb(76, 101, 201);'><div class='overlayInner'><span class='article' style='background-image: url(\"{2}\");'><\/span><span class='overlayText'>Blog<\/span><\/div><\/div><\/a><\/div><a title='{3}' class='title' href='{4}' style='font-size:28px;'>{5}<\/a><p class='description'>{6}<\/p><\/div>",
            f = "<div class='feature blog'><div class='heroWrap'><a class='hero' style='background-image: url(\"{0}\");height:142px;' href='{1}'><div class='overlay' style='background-color: rgb(0, 47, 140);'><div class='overlayInner'><span class='article' style='background-image: url(\"{2}\");'><\/span><span class='trend'>Blog<\/span><\/div><\/div><\/a><\/div><div class='contentWrap'><a title='{3}' class='title' href='{4}'>{5}<\/a><\/div>";
        n.fn.epgPsFeature = function(t) {
            var i = {
                formatDate: "mm/dd/yyyy",
                apiUrl: "",
                paras: "",
                numToDisplay: 0,
                title: "",
                linkText: "",
                linkUrl: "",
                container: "",
                style: "citynext",
                rssIconUrl: "//c.s-microsoft.com/CMSImages/blogs_icon.png?version=e34dd121-bb10-6390-7b0d-dabe4a979b54",
                rssBlueIconUrl: "//c.s-microsoft.com/CMSImages/blogs_icon_blue.png?version=78a936a8-8d11-64bb-5454-0353c02b31b2"
            };
            n.extend(i, t), c(i.apiUrl, i.paras, i.formatDate, i.container, i.numToDisplay, i.title, i.linkText, i.linkUrl, i.style, i.rssIconUrl, i.rssBlueIconUrl)
        };
        var e = function(t, i, r, u, f) {
                var e = n("#" + t).children("div").children("div").children("div"),
                    s = e.children("div.featureHead").children("div").children("h3"),
                    o = e.children("div.featureCTA").children("div:eq(1)").children("a");
                s.html("").html(i), o.html("").html(r), o.attr({
                    href: u
                }), f == "small" && e.children("div.featureCTA").children("div:eq(1)").css({
                    margin: "0px"
                })
            },
            o = function(t, e, o, s, c) {
                var w = n("#" + e).children("div").children("div").children("div"),
                    k = w.children("div.featureBlog"),
                    l, a, p, b, v, y;
                if (t[0] != null) {
                    if (l = t[0].Content.article, a = "", o == "big" ? a = r.format(l.articleImage, l.articleLink, s, l.articleTitle, l.articleLink, l.articleTitle, h(l.publishDate), l.contributorName.split(",", 1), l.articleLink) : o == "mid" ? a = u.format(l.articleImage, l.articleLink, s, l.articleTitle, l.articleLink, l.articleTitle, l.articleAbstract) : o == "small" && (a = f.format(l.articleImage, l.articleLink, s, l.articleTitle, l.articleLink, l.articleTitle)), t.length > 1) {
                        for (p = "", b = w.children("div.featureRelated"), v = 1; v < t.length; v++) t[v] != undefined && (y = t[v].Content.article, p += i.format(c, y.articleTitle, y.articleLink, y.articleTitle));
                        b.html("").html(p)
                    }
                    k.html("").html(a)
                }
            },
            t = function() {},
            s = function(n, t) {
                return parseInt(n.Content.article.publishDate) < parseInt(t.Content.article.publishDate) ? 1 : -1
            },
            h = function(n) {
                var t = n.substr(0, 4),
                    i = n.substr(4, 2),
                    r = n.substr(6, 2);
                return i + "." + r + "." + t
            },
            c = function(i, r, u, f, h, c, l, a, v, y, p) {
                e(f, c, l, a, v), n.ajax({
                    type: "GET",
                    url: i,
                    data: r,
                    timeout: 5e3,
                    dataType: "json",
                    success: function(n) {
                        var i;
                        try {
                            var e = eval(n),
                                r = [],
                                u = e.DataLoad.Feed.FeedList;
                            for (u.sort(s), i = 0; i < h; i++) r.push(u[i]);
                            o(r, f, v, y, p)
                        } catch (c) {
                            t(f, c)
                        }
                    },
                    error: function(n, i, r) {
                        var u = r;
                        t(f, u)
                    }
                })
            }
    }(jQuery), function(n) {
        var r = "<div class='epgPsTwitterFeeds-content' style='background-image:url(\"{0}\"); background-repeat:no-repeat;background-position:center;'><a class='twitter-timeline' height='{1}' href='{2}' data-widget-id='{3}' data-link-color='{4}' data-chrome='{5}'><\/a><\/div>",
            t, i;
        n.fn.epgPsTwitterFeeds = function(t) {
            var r = {
                url: "",
                widgetId: "",
                linkColor: "#008CF2",
                dataChrome: "noheader noborders noscrollbar",
                preloadImg: "//c.s-microsoft.com/CMSImages/loader-animated.gif?version=f8627c45-94ae-d697-c3df-fcb9f3c432d5",
                widgetHeight: "395",
                container: "",
                showTWLink: !0,
                linkUrl: "",
                linkText: "",
                title: ""
            };
            n.extend(r, t), i(r.url, r.widgetId, r.linkColor, r.dataChrome, r.preloadImg, r.widgetHeight, r.container, r.showTWLink, r.linkUrl, r.linkText, r.title)
        }, t = function() {
            ! function(n, t, i) {
                var r, u = n.getElementsByTagName(t)[0],
                    f = /^http:/.test(n.location) ? "http" : "https";
                n.getElementById(i) || (r = n.createElement(t), r.id = i, r.src = f + "://platform.twitter.com/widgets.js", u.parentNode.insertBefore(r, u))
            }(document, "script", "twitter-wjs")
        }, i = function(i, u, f, e, o, s, h, c, l, a, v) {
            var y = n("#" + h).children("div").children("div").children("div"),
                k = y.children("div.epgPsTwitterFeedsHeader").children("div").children("h3"),
                w, p, b;
            k.html("").html(v), w = y.children("div.epgPsTwitterFeedsContent").children("div"), p = y.children("div.epgPsTwitterFeedsLink").children("div:eq(1)").children("a"), c ? (p.html("").html(a), p.attr({
                href: l
            })) : y.children("div.epgPsTwitterFeedsLink").css({
                display: "none"
            }), b = r.format(o, s, i, u, f, e), w.html("").html(b), t()
        }
    }(jQuery), numPostsToDisplay = 5, $(function() {
        $.fn.epgStoryNewsBlogsFeed = function(n) {
            url = n, 
            $.ajax({
                type: "GET",
                url: "https://api.rss2json.com/v1/api.json",
                dataType: "json",
                data: {
                    rss_url: url,
                },
                    success: function (n) {
                    var f = n.items,
                        u = [],
                        t = "",
                        r, i;
                    for ($(f).each(function(n) {
                            if (n < numPostsToDisplay) {
                                var t = $(this).attr("title").toString(),
                                    i = $(this).attr("link"),
                                    r = $(this).attr("pubDate").toString(),
                                    f = $(this).attr("content").toString(),
                                    e = $(this).attr("author");
                                u.push({
                                    title: t,
                                    link: i,
                                    pubDate: r,
                                    description: f,
                                    creator: e
                                })
                            }
                        }), r = 0; r < u.length; r++) i = u[r], t += "<div class='blog'>", t += "<div class='dateauthor'>", t += "<span class='date'>" + formatDate(i.pubDate, ".") + "<\/span>", t += "<span class='author'>" + i.creator + "<\/span>", t += "<\/div>", t += "<a class='title' href='" + i.link + "' title='" + i.title + "' target='_blank'>" + i.title + "<\/a>", t += "<p class='abstract'>" + i.description + "<\/p>", t += "<\/div>";
                    $("#blogFeed").append(t), $(".blogFeedContainer a").attr("target", "_blank")
                },
                error: function(n, t, i) {
                    console.error(i)
                }
            })
        }
    }), $(document).ready(function() {
        triggerLiveChart(), solutionWinowResize(), videoResize(), crossScreen(), herohomeResize(), epgEnCaPsEPGCrossScreenResize(), $(window).resize(function() {
            solutionWinowResize(), videoResize(), crossScreen(), herohomeResize(), epgEnCaPsEPGCrossScreenResize()
        })
    }), $(function() {
        epgPsEPGCrossScreenResize(), $(window).resize(epgPsEPGCrossScreenResize)
    }), $(window).load(function() {
        setDivHeight(), $(window).resize(function() {
            setDivHeight()
        })
    }), $(window).load(function() {
        setPanelHeightWidth(), $(window).resize(function() {
            setPanelHeightWidth()
        })
    }), $.fn.multiTileLayout = function(n) {
        var t = {
                cutoffs: ""
            },
            i, u = $(this),
            r = u.find(".article .content");
        $.extend(t, n);
        var o = function() {
                for (var r = t.cutoffs.split(","), u = [], i, n = 0; n < r.length; n++) i = r[n].split(":"), u[i[0]] = i[1];
                return u
            },
            f = function() {
                for (var t = 0, n = 0; n < r.length; n++) t = Math.max(t, $(r[n]).height());
                $(r[n]).css({
                    height: t + "px"
                })
            },
            s = function() {
                var i = t.cutoffs[""],
                    r = $(window).width(),
                    n;
                for (n in t.cutoffs)
                    if (t.cutoffs.hasOwnProperty(n) && r <= n) {
                        i = t.cutoffs[n];
                        break
                    }
                return +i
            },
            e = function() {
                var n = s();
                n != i && (i = n, u.attr("class", "epgPSCarouselConfigurable").addClass("columns-" + i))
            };
        t.cutoffs = o(), f(), e(), $(window).resize(function() {
            f(), e()
        })
    }(function(n) {
        n.fn.epgPopupModalCLEForm = function(t) {
            var i = n.extend({}, n.fn.epgPopupModalCLEForm.defaults, t);
            return this.each(function() {
                var t = n(this);
                i.iframeSrc = i.iframeSrc !== "" ? i.iframeSrc : t.attr("href"), t.click(function(t) {
                    t.preventDefault(), n.fn.epgPopupModalCLEForm.openModal(i.iframeSrc, i.iframeID, i.iframeName)
                })
            })
        }, n.fn.epgPopupModalCLEForm.defaults = {
            iframeSrc: "",
            iframeID: "modalCLEForm",
            iframeName: "modalCLEForm"
        }, n.fn.epgPopupModalCLEForm.openModal = function(t, i, r) {
            epgOpenModal('<iframe src="' + t + '" id="' + i + '" name="' + r + '" scrolling="auto"><\/iframe>'), n("#" + i).load(function() {
                n(this).addClass("loaded");
                window.scrollTo(0, 0);
            })
        }
    }(jQuery)), function(n) {
        var t = !1;
        n(window).on("load hashchange", function() {
            var u = location.hash.slice(1),
                i, r;
            t || u.indexOf("thankyou") != -1 && (t = !0, i = location.pathname.split("/").pop(), r = location.href.replace(i, "thankyou.aspx"), n.fn.epgPopupModalCLEForm.openModal(r, "modalCLEForm", "modalCLEForm"))
        })
    }(jQuery), $(document).ready(function() {
        $(".CSPvNext img:not([alt])").attr("alt", "")
    }), function(n) {
        n(document).ready(function() {
            var t = n("#epgBuyButton"),
                u = t.find(".buy-link"),
                i = t.find(".drawer"),
                r;
            t.find(".buy-link").click(function(n) {
                n.preventDefault(), n.stopPropagation(), t.addClass("open")
            }), t.find(".btn-close").click(function(n) {
                n.preventDefault(), t.removeClass("open")
            }), n(document).click(function(i) {
                t.hasClass("open") && !n(i.target).closest("#epgBuyButton .drawer").length && t.removeClass("open")
            }), t.find(".chat").click(function(t) {
                t.preventDefault(), n("#lpChatButton a").triggerHandler("click")
            }), r = u.outerHeight() / 2 - i.outerHeight() / 2 + "px", i.css("top", r)
        })
    }(jQuery), function(n) {
        var t = 0,
            r = function() {
                n(".dropdown-menu").toggle()
            },
            u = function() {
                var r, i, f;
                n(".epgSegmentPivotConnectRow .mscom-pivot-tab .tabShowMore").length == 0 && n(".epgSegmentPivotConnectRow .mscom-pivot-tab > a.mscom-pivot-item-link").last().after("<div class='tabShowMore tabShowMoreAdd' style='display: inline-block;' bi:track='false'><span class='icon-downarr' aria-hidden='true'><\/span><\/div>"), t = n(window).width();
                var e = 0,
                    o = 0,
                    u = 0,
                    s = 0;
                if (e = n(".epgSegmentPivotConnectRow .mscom-pivot-tab").outerWidth(), o = n(".epgSegmentPivotConnectRow .mscom-pivot-tab a.selected").outerWidth(), s = n(".epgSegmentPivotConnectRow .mscom-pivot-tab .tabShowMore").outerWidth(), u += o, n(".epgSegmentPivotConnectRow .mscom-pivot-tab > a.selected").removeClass("HideNav"), n(".epgSegmentPivotConnectRow .mscom-pivot-tab > a.selected").addClass("ShowNav").show(), r = n(".epgSegmentPivotConnectRow .mscom-pivot-tab > a").not(".selected"), t <= 540) n(".epgSegmentPivotConnectRow .mscom-pivot-tab > a").not(".selected").each(function() {
                    var t = n(this).outerWidth();
                    n(this).removeClass("ShowNav"), n(this).addClass("HideNav"), n(this).hide()
                });
                else
                    for (n(".epgSegmentPivotConnectRow .mscom-pivot-tab > a").not(".selected").removeClass("HideNav").removeClass("ShowNav"), n(".epgSegmentPivotConnectRow .mscom-pivot-tab > a").not(".selected").hide(), n(".epgSegmentPivotConnectRow .mscom-pivot-tab > a").not(".selected").addClass("HideNav"), i = 0; i < n(r).length; i++)
                        if (f = n(r).eq(i).outerWidth(), i == n(r).length - 1)
                            if (u + f <= e) n(r).eq(i).removeClass("HideNav"), n(r).eq(i).addClass("ShowNav"), n(r).eq(i).show(), u += f;
                            else break;
                else if (u + f + s + 20 <= e) n(r).eq(i).removeClass("HideNav"), n(r).eq(i).addClass("ShowNav"), n(r).eq(i).show(), u += f;
                else break;
                n(".epgSegmentPivotConnectRow .mscom-pivot-tab > a.HideNav").length > 0 ? n(".epgSegmentPivotConnectRow .mscom-pivot-tab .tabShowMore").show() : n(".epgSegmentPivotConnectRow .mscom-pivot-tab .tabShowMore").hide()
            },
            f = function() {
                var e = 0,
                    o = 0,
                    c = 0,
                    u = 0,
                    s = 0,
                    r, h, i, f;
                if (o = n(".epgSegmentPivotConnectRow .mscom-pivot-tab").outerWidth(), c = n(".epgSegmentPivotConnectRow .mscom-pivot-tab a.selected").outerWidth(), s = n(".epgSegmentPivotConnectRow .mscom-pivot-tab .tabShowMore").outerWidth(), u += c, e = n(window).width(), r = n(".epgSegmentPivotConnectRow .mscom-pivot-tab > a").not(".selected"), h = 0, n(".epgSegmentPivotConnectRow .mscom-pivot-tab > a").not(".selected").each(function() {
                        h += n(this).outerWidth()
                    }), e <= 540) n(".epgSegmentPivotConnectRow .mscom-pivot-tab > a").not(".selected").each(function() {
                    var t = n(this).outerWidth();
                    n(this).removeClass("ShowNav"), n(this).addClass("HideNav"), n(this).hide()
                });
                else if (e >= t)
                    for (n(".epgSegmentPivotConnectRow .mscom-pivot-tab > a").not(".selected").removeClass("ShowNav"), n(".epgSegmentPivotConnectRow .mscom-pivot-tab > a").not(".selected").hide(), n(".epgSegmentPivotConnectRow .mscom-pivot-tab > a").not(".selected").addClass("HideNav"), i = 0; i < n(r).length; i++)
                        if (f = n(r).eq(i).outerWidth(), i == n(r).length - 1)
                            if (u + f <= o) n(r).eq(i).removeClass("HideNav"), n(r).eq(i).addClass("ShowNav"), n(r).eq(i).show(), u += f;
                            else break;
                else if (u + f + s + 20 <= o) n(r).eq(i).removeClass("HideNav"), n(r).eq(i).addClass("ShowNav"), n(r).eq(i).show(), u += f;
                else break;
                else if (e < t)
                    for (n(".epgSegmentPivotConnectRow .mscom-pivot-tab > a").not(".selected").removeClass("HideNav").removeClass("ShowNav"), n(".epgSegmentPivotConnectRow .mscom-pivot-tab > a").not(".selected").show(), n(".epgSegmentPivotConnectRow .mscom-pivot-tab > a").not(".selected").addClass("ShowNav"), u += h, i = n(r).length - 1; i >= 0; i--)
                        if (f = n(r).eq(i).outerWidth(), i == n(r).length - 1)
                            if (u > o) n(r).eq(i).removeClass("ShowNav"), n(r).eq(i).addClass("HideNav"), n(r).eq(i).hide(), u = u - f;
                            else break;
                else if (u + s + 20 > o) n(r).eq(i).removeClass("ShowNav"), n(r).eq(i).addClass("HideNav"), n(r).eq(i).hide(), u = u - f;
                else break;
                t = e, n(".epgSegmentPivotConnectRow .mscom-pivot-tab > a.HideNav").length > 0 ? n(".epgSegmentPivotConnectRow .mscom-pivot-tab .tabShowMore").show() : n(".epgSegmentPivotConnectRow .mscom-pivot-tab .tabShowMore").hide()
            },
            i = function() {
                var f, t, e;
                n(".epgSegmentPivotConnectRow .mscom-pivot-tab > a").removeAttr("currentHtml"), n(".epgSegmentPivotConnectRow .mscom-pivot-tab > a").each(function() {
                    n(this).attr("currentHtml", n(this).html())
                }), n(".epgSegmentPivotConnectRow div.mscom-pivot-tab").css("position", "relative"), n(".epgSegmentPivotConnectRow .mscom-pivot-tab .dropdown-menu").remove(), f = "<ul class='dropdown-menu'>", n(".epgSegmentPivotConnectRow .mscom-pivot-tab > a.HideNav").each(function() {
                    f += "<li title='" + n(this).html() + "'  class='dropDownLi' ><a href='javascript:void(0)'>" + n(this).html() + "<\/a><\/li>"
                }), f += "<\/ul>", n(".epgSegmentPivotConnectRow .mscom-pivot-tab > a.mscom-pivot-item-link").last().after(f), t = n(".epgSegmentPivotConnectRow .mscom-pivot-tab > a.selected").outerHeight(), n(".epgSegmentPivotConnectRow .mscom-pivot-tab .dropdown-menu").css("margin-top", "0"), n(".epgSegmentPivotConnectRow .mscom-pivot-tab .dropdown-menu").css("top", t + 3), n(".epgSegmentPivotConnectRow .mscom-pivot-tab .tabShowMore").off("click");
                n(".epgSegmentPivotConnectRow .mscom-pivot-tab .tabShowMore").on("click", function() {
                    n(".dropdown-menu").toggle()
                });
                if (n(".epgSegmentPivotConnectRow .mscom-pivot-tab .tabShowMore").css({
                        height: t - 1,
                        "line-height": t - 1 + "px"
                    }), n(".epgSegmentPivotConnectRow .mscom-pivot-tab > a").off("click", r), n(".epgSegmentPivotConnectRow .mscom-pivot-tab > a.ShowNav").not(".selected").length == 0) {
                    e = n(".epgSegmentPivotConnectRow .mscom-pivot-tab").outerWidth(), n(".epgSegmentPivotConnectRow .mscom-pivot-tab .dropdown-menu").css("width", e), n(".epgSegmentPivotConnectRow .mscom-pivot-tab .tabShowMore").css({
                        height: t - 1,
                        "line-height": t - 1 + "px"
                    }), n(".epgSegmentPivotConnectRow .mscom-pivot-tab .dropdown-menu .dropDownLi").show();
                    n(".epgSegmentPivotConnectRow .mscom-pivot-tab > a.selected").on("click", r)
                }
                n(".epgSegmentPivotConnectRow .mscom-pivot-tab ul.dropdown-menu li a").click(function() {
                    var t = n(this).html();
                    n(".epgSegmentPivotConnectRow .mscom-pivot-tab > a[currentHtml*='" + t + "']").click(), u(), i()
                }), n(".dropdown-menu").hide()
            };
        n(document).ready(function() {
            u(), i(), n(window).resize(function() {
                f(), i()
            })
        })
    }(jQuery), typeof gFpc != "undefined") {
}! function() {
    function i(n, t, i) {
        var u = new Date,
            f = i ? u.getTime() + 864e5 * i : u.getTime(),
            r = [];
        u.setTime(f), r.push(n), r.push("="), r.push(t), r.push(i ? "; expires=" + u.toGMTString() : ""), r.push("; path=/"), msccSetCookie(r.join(""))
    }

    function t(n) {
        for (var r = n + "=", u = document.cookie.split(";"), e = u.length, t = "", f = null, i = e - 1; i >= 0; i--) {
            for (t = u[i];
                " " === t.charAt(0);) t = t.slice(1);
            if (0 === t.indexOf(r)) {
                f = t.slice(r.length);
                break
            }
        }
        return f
    }

    function u(n) {
        var t = "",
            r = -1;
        n && i(n, t, r)
    }
    var f, r, n;
    ! function(t) {
        function s(n, t) {
            var f, c, e, o, i, s, l, r = t && t.split("/"),
                h = u.map,
                a = h && h["*"] || {};
            if (n && "." === n.charAt(0) && t) {
                for (r = r.slice(0, r.length - 1), n = r.concat(n.split("/")), i = 0; l = n[i]; i++)
                    if ("." === l) n.splice(i, 1), i -= 1;
                    else if (".." === l) {
                    if (1 === i && (".." === n[2] || ".." === n[0])) return !0;
                    i > 0 && (n.splice(i - 1, 2), i -= 2)
                }
                n = n.join("/")
            }
            if ((r || a) && h)
                for (f = n.split("/"), i = f.length; i > 0; i -= 1) {
                    if (c = f.slice(0, i).join("/"), r)
                        for (s = r.length; s > 0; s -= 1)
                            if (e = h[r.slice(0, s).join("/")], e && (e = e[c])) {
                                o = e;
                                break
                            }
                    if (o = o || a[c]) {
                        f.splice(0, i, o), n = f.join("/");
                        break
                    }
                }
            return n
        }

        function l(n, i) {
            return function() {
                return e.apply(t, b.call(arguments, 0).concat([n, i]))
            }
        }

        function y(n) {
            return function(t) {
                return s(t, n)
            }
        }

        function p(n) {
            return function(t) {
                i[n] = t
            }
        }

        function c(n) {
            if (o.hasOwnProperty(n)) {
                var r = o[n];
                delete o[n], v[n] = !0, h.apply(t, r)
            }
            if (!i.hasOwnProperty(n)) throw new Error("No " + n);
            return i[n]
        }

        function a(n, t) {
            var r, i, u = n.indexOf("!");
            return -1 !== u ? (r = s(n.slice(0, u), t), n = n.slice(u + 1), i = c(r), n = i && i.normalize ? i.normalize(n, y(t)) : s(n, t)) : n = s(n, t), {
                f: r ? r + "!" + n : n,
                n: n,
                p: i
            }
        }

        function w(n) {
            return function() {
                return u && u.config && u.config[n] || {}
            }
        }
        var h, e, i = {},
            o = {},
            u = {},
            v = {},
            b = [].slice;
        h = function(n, r, u, f) {
            var d, y, e, k, b, s, h = [];
            if (f = f || n, "function" == typeof u) {
                for (r = !r.length && u.length ? ["require", "exports", "module"] : r, s = 0; s < r.length; s++)
                    if (b = a(r[s], f), e = b.f, "require" === e) h[s] = l(n);
                    else if ("exports" === e) h[s] = i[n] = {}, d = !0;
                else if ("module" === e) y = h[s] = {
                    id: n,
                    uri: "",
                    exports: i[n],
                    config: w(n)
                };
                else if (i.hasOwnProperty(e) || o.hasOwnProperty(e)) h[s] = c(e);
                else if (b.p) b.p.load(b.n, l(f, !0), p(e), {}), h[s] = i[e];
                else if (!v[e]) throw new Error(n + " missing " + e);
                k = u.apply(i[n], h), n && (y && y.exports !== t && y.exports !== i[n] ? i[n] = y.exports : k === t && d || (i[n] = k))
            } else n && (i[n] = u)
        }, f = r = e = function(n, i, r, f) {
            return "string" == typeof n ? c(a(n, i).f) : (n.splice || (u = n, i.splice ? (n = i, i = r, r = null) : n = t), i = i || function() {}, f ? h(t, n, i, r) : setTimeout(function() {
                h(t, n, i, r)
            }, 15), e)
        }, e.config = function(n) {
            return u = n, e
        }, n = function(n, t, i) {
            t.splice || (i = t, t = []), o[n] = [n, t, i]
        }, n.amd = {
            jQuery: !0
        }
    }(), n("../vendor/almond", function() {}), "object" != typeof JSON && (JSON = {}),
        function() {
            function i(n) {
                return 10 > n ? "0" + n : n
            }

            function f(n) {
                return o.lastIndex = 0, o.test(n) ? '"' + n.replace(o, function(n) {
                    var t = s[n];
                    return "string" == typeof t ? t : "\\u" + ("0000" + n.charCodeAt(0).toString(16)).slice(-4)
                }) + '"' : '"' + n + '"'
            }

            function r(i, e) {
                var s, l, h, a, c, v = n,
                    o = e[i];
                switch (o && "object" == typeof o && "function" == typeof o.toJSON && (o = o.toJSON(i)), "function" == typeof t && (o = t.call(e, i, o)), typeof o) {
                    case "string":
                        return f(o);
                    case "number":
                        return isFinite(o) ? String(o) : "null";
                    case "boolean":
                    case "null":
                        return String(o);
                    case "object":
                        if (!o) return "null";
                        if (n += u, c = [], "[object Array]" === Object.prototype.toString.apply(o)) {
                            for (a = o.length, s = 0; a > s; s += 1) c[s] = r(s, o) || "null";
                            return h = 0 === c.length ? "[]" : n ? "[\n" + n + c.join(",\n" + n) + "\n" + v + "]" : "[" + c.join(",") + "]", n = v, h
                        }
                        if (t && "object" == typeof t)
                            for (a = t.length, s = 0; a > s; s += 1) "string" == typeof t[s] && (l = t[s], h = r(l, o), h && c.push(f(l) + (n ? ": " : ":") + h));
                        else
                            for (l in o) Object.prototype.hasOwnProperty.call(o, l) && (h = r(l, o), h && c.push(f(l) + (n ? ": " : ":") + h));
                        return h = 0 === c.length ? "{}" : n ? "{\n" + n + c.join(",\n" + n) + "\n" + v + "}" : "{" + c.join(",") + "}", n = v, h
                }
            }
            "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
                return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + i(this.getUTCMonth() + 1) + "-" + i(this.getUTCDate()) + "T" + i(this.getUTCHours()) + ":" + i(this.getUTCMinutes()) + ":" + i(this.getUTCSeconds()) + "Z" : null
            }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
                return this.valueOf()
            });
            var e = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                o = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                n, u, s = {
                    "\b": "\\b",
                    "\t": "\\t",
                    "\n": "\\n",
                    "\f": "\\f",
                    "\r": "\\r",
                    '"': '\\"',
                    "\\": "\\\\"
                },
                t;
            "function" != typeof JSON.stringify && (JSON.stringify = function(i, f, e) {
                var o;
                if (n = "", u = "", "number" == typeof e)
                    for (o = 0; e > o; o += 1) u += " ";
                else "string" == typeof e && (u = e);
                if (t = f, !f || "function" == typeof f || "object" == typeof f && "number" == typeof f.length) return r("", {
                    "": i
                });
                throw new Error("JSON.stringify");
            }), "function" != typeof JSON.parse && (JSON.parse = function(n, t) {
                function r(n, i) {
                    var f, e, u = n[i];
                    if (u && "object" == typeof u)
                        for (f in u) Object.prototype.hasOwnProperty.call(u, f) && (e = r(u, f), void 0 !== e ? u[f] = e : delete u[f]);
                    return t.call(n, i, u)
                }
                var i;
                if (n = String(n), e.lastIndex = 0, e.test(n) && (n = n.replace(e, function(n) {
                        return "\\u" + ("0000" + n.charCodeAt(0).toString(16)).slice(-4)
                    })), /^[\],:{}\s]*$/.test(n.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return i = eval("(" + n + ")"), "function" == typeof t ? r({
                    "": i
                }, "") : i;
                throw new SyntaxError("JSON.parse");
            })
        }(), n("../vendor/json2", function() {}), n("../src/bootstrap", [], function() {
            var t = function(n, t) {
                    for (var u = t.split("."), r = n, f = u.length, i = 0; f > i; i++) "undefined" == typeof r[u[i]] && (r[u[i]] = {}), r = r[u[i]];
                    return r
                },
                n;
            return "undefined" == typeof BKTAG && t(window, "BKTAG"), BKTAG.ns = t, n = {
                createFrame: function(n) {
                    var t = document.createElement("iframe");
                    return t.setAttribute("name", n), t.setAttribute("id", n), t.setAttribute("title", "bk"), t.style.border = "0px", t.style.width = "0px", t.style.height = "0px", t.style.display = "none", t.style.position = "absolute", t.style.clip = "rect(0px 0px 0px 0px)", "function" == typeof bk_frameLoad && (t.onload = bk_frameLoad), t.src = "about:blank", t
                },
                checkFrame: function(t) {
                    var i = "__bkframe",
                        u, r;
                    ("undefined" == typeof frames[i] || "undefined" == typeof document.getElementById(i)) && (u = n.createFrame(i), r = document.getElementsByTagName("body")[0], r && r.appendChild(u)), "function" == typeof t && t()
                }
            }
        }), n("../vendor/htmlparser", [], function() {
            var t = function(n) {
                    for (var i = {}, r = n.split(","), t = 0; t < r.length; t++) i[r[t]] = !0;
                    return i
                },
                n = {
                    leftTrim: function(n) {
                        return n.replace(/^\s+/, "")
                    },
                    startTag: /^<(\w+)((?:\s+\w+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
                    endTag: /^<\/(\w+)[^>]*>/,
                    attr: /(\w+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,
                    empty: t("area,base,basefont,br,col,frame,hr,img,input,isindex,link,meta,param,embed"),
                    block: t("address,applet,blockquote,button,center,dd,del,dir,div,dl,dt,fieldset,form,frameset,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,NOSCRIPT,object,ol,p,pre,script,SCRIPT,table,tbody,td,tfoot,th,thead,tr,ul"),
                    inline: t("a,abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,SCRIPT,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),
                    closeSelf: t("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"),
                    fillAttrs: t("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"),
                    special: t("script,SCRIPT,style"),
                    one: t("html,head,body,title"),
                    structure: {
                        link: "head",
                        base: "head"
                    },
                    htmlParser: function(t, i) {
                        function a(t, u, f, o) {
                            if (n.block[u])
                                for (; r.last() && n.inline[r.last()];) e("", r.last());
                            if (n.closeSelf[u] && r.last() == u && e("", u), o = n.empty[u] || !!o, o || r.push(u), i.start) {
                                var s = [];
                                f.replace(n.attr, function(t, i) {
                                    var r = arguments[2] ? arguments[2] : arguments[3] ? arguments[3] : arguments[4] ? arguments[4] : n.fillAttrs[i] ? i : "";
                                    s.push({
                                        name: i,
                                        value: r,
                                        escaped: r.replace(/(^|[^\\])"/g, '$1\\"')
                                    })
                                }), i.start && i.start(u, s, o)
                            }
                        }

                        function e(n, t) {
                            var u, f;
                            if (t)
                                for (u = r.length - 1; u >= 0 && r[u] != t; u--);
                            else u = 0;
                            if (u >= 0) {
                                for (f = r.length - 1; f >= u; f--) i.end && i.end(r[f]);
                                r.length = u
                            }
                        }
                        var u, o, f, r = [],
                            h = t,
                            l;
                        for (r.last = function() {
                                return this[this.length - 1]
                            }; t;) {
                            if (o = !0, t = n.leftTrim(t), r.last() && n.special[r.last()]) {
                                var c = new RegExp("<\/" + r.last() + ">", "i"),
                                    u = t.search(c),
                                    s = t.substring(0, u);
                                s.length > 0 && (i.chars && i.chars(s), t = t.replace(s, "")), t = t.replace(c, ""), e("", r.last())
                            } else(0 == t.indexOf("<!--") ? (u = t.indexOf("-->"), u >= 0 && (i.comment && i.comment(t.substring(4, u)), t = t.substring(u + 3), o = !1)) : 0 == t.indexOf("<\/") ? (f = t.match(n.endTag), f && (t = t.substring(f[0].length), f[0].replace(n.endTag, e), o = !1)) : 0 == t.indexOf("<") && (f = t.match(n.startTag), f && (t = t.substring(f[0].length), f[0].replace(n.startTag, a), o = !1)), o) && (u = t.indexOf("<"), l = 0 > u ? t : t.substring(0, u), t = 0 > u ? "" : t.substring(u), i.chars && i.chars(l));
                            if (t == h) throw "Parse Error: " + t;
                            h = t
                        }
                        e()
                    },
                    htmlToDom: function(t, i) {
                        var u = [],
                            e = i.documentElement || i.getOwnerDocument && i.getOwnerDocument() || i,
                            f, r;
                        if (!e && i.createElement && function() {
                                var n = i.createElement("html"),
                                    t = i.createElement("head");
                                t.appendChild(i.createElement("title")), n.appendChild(t), n.appendChild(i.createElement("body")), i.appendChild(n)
                            }(), i.getElementsByTagName)
                            for (f in n.one) n.one[f] = i.getElementsByTagName(f)[0];
                        r = n.one.body, n.htmlParser(t, {
                            start: function(t, f, e) {
                                if (n.one[t]) return void(r = n.one[t]);
                                for (var o = i.createElement(t), s = 0; s < f.length; s++) o.setAttribute(f[s].name, f[s].value);
                                n.structure[t] && "boolean" != typeof _one[n.structure[t]] ? n.one[n.structure[t]].appendChild(o) : r && r.appendChild && (window.addEventListener || "NOSCRIPT" != r.tagName) && r.appendChild(o), e || (u.push(o), r = o)
                            },
                            end: function() {
                                u.length -= 1, r = u.length > 0 ? u[u.length - 1] : n.one.body
                            },
                            chars: function(n) {
                                if (window.addEventListener) {
                                    var t = i.createTextNode(n);
                                    r.appendChild(t)
                                } else r.text = n
                            },
                            comment: function() {}
                        })
                    }
                };
            return n
        }), n("../src/utils", ["../src/bootstrap", "../vendor/htmlparser"], function(n, t) {
            var i = {
                getKwds: function() {
                    for (var t = document.getElementsByTagName("meta"), i = [], r = t.length, n = 0; r > n; n++) t[n].name && "keywords" === t[n].name.toLowerCase() && "" !== t[n].content && i.push(t[n].content);
                    return i.join(",")
                },
                getMeta: function(n) {
                    for (var t, r = document.getElementsByTagName("meta"), u = r.length, i = 0; u > i; i++)
                        if (t = r[i], t.name.toLowerCase() === n.toLowerCase() && "" !== t.content) return t.content;
                    return null
                },
                scriptWithOnload: function(n, t) {
                    var i = document.createElement("script");
                    return i.src = n, i.onloadDone = !1, i.onload = function() {
                        i.onloadDone || (i.onloadDone = !0, "function" == typeof t && t())
                    }, i.onreadystatechange = function() {
                        "loaded" !== i.readyState && "complete" !== i.readyState || i.onloadDone || (i.onloadDone = !0, "function" == typeof t && t())
                    }, i
                },
                isMobile: function() {
                    var n = !1,
                        t = ["Mobile", "Tablet", "Handheld", "Android", "iPhone", "Kindle", "Silk", "Nokia", "Symbian", "BlackBerry"],
                        i;
                    for (i in t)
                        if (-1 !== navigator.userAgent.indexOf(t[i])) {
                            n = !0;
                            break
                        }
                    return n
                },
                isDebug: function() {
                    var n = !1;
                    return "undefined" != typeof window.location && "undefined" != typeof window.location.search && -1 !== window.location.search.indexOf("debug=1") && (n = !0), n
                },
                addEvent: function(n, t, i) {
                    n.addEventListener ? n.addEventListener(t, i, !1) : n.attachEvent("on" + t, function(t) {
                        return i.call(n, t)
                    })
                },
                normalizeEmail: function(n) {
                    var r = [],
                        t = [],
                        i = n;
                    try {
                        i = n.trim().toLowerCase(), r = i.split("@"), t = r[0], t.indexOf("+") > -1 && (t = t.substr(0, t.indexOf("+"))), i = t + "@" + r[1]
                    } catch (u) {}
                    return i
                },
                normalizePhone: function(n) {
                    var t = n;
                    try {
                        t = t.trim().replace(/^[0]+/g, "").replace(/\D/g, "")
                    } catch (i) {}
                    return t
                },
                trim: function() {
                    return this.replace(/^\s+|\s+$/g, "")
                }
            };
            return "function" != typeof String.prototype.trim && (String.prototype.trim = i.trim), window.BKTAG.htmlToDom = t.htmlToDom, window.BKTAG.util = i, i
        }), n("../vendor/cookies", function() {}), n("../vendor/numis", [], function() {
            var n = {
                    java: function(n) {
                        for (var r = 31, u = 0, t = 0, i = 0; i < n.length; i++) t = r * t + n.charCodeAt(i) << u;
                        return t
                    },
                    javaHex: function(t) {
                        return Math.abs(n.java(t)).toString(16)
                    }
                },
                t = {
                    1: "dtzpmk".split("")
                },
                i = {
                    indexed_comma: function(n) {
                        for (var u, f = [n], e = t[n], i = 0; i < e.length; i++) u = r[e[i]][0], f.push(encodeURIComponent(u ? u : ""));
                        return f.join(",")
                    }
                },
                r = {
                    a: [navigator.userAgent, "userAgent"],
                    e: [function() {
                        return n.javaHex(navigator.userAgent)
                    }(), "userAgent hashed"],
                    d: [
                        [screen.width, screen.height, screen.colorDepth].join(""), "Screen concat"
                    ],
                    t: [+new Date, "Time"],
                    z: [(new Date).getTimezoneOffset(), "Timezone"],
                    n: [function() {
                        var n, t;
                        for (n in navigator) return t = [], "string" == typeof navigator[n] && t.push(navigator[n]), t.join("")
                    }(), "Navigator"],
                    p: [function() {
                        for (var i = [], t = 0, r = navigator.plugins; t < r.length; t++) i.push(r[t].name);
                        return n.javaHex(i.join(","))
                    }(), "Plugins hashed"],
                    pv: [function() {
                        for (var t, i = 0, n = 0, r = navigator.plugins; n < r.length; n++) t = r[n].description.match(/\d+(.\d+){1,3}/), t && (i += t[0]);
                        return i
                    }(), "Plugin version concat"],
                    m: [function() {
                        for (var i = [], t = 0, r = navigator.mimeTypes; t < r.length; t++) i.push(r[t].description);
                        return n.javaHex(i.join(","))
                    }(), "mimeTypes hashed"],
                    l: [navigator.language, "language"],
                    k: [navigator.cookieEnabled ? 1 : 0, "cookies"],
                    ps: [navigator.productSub, "productSub"],
                    u: [navigator.cpuClass, "cpuClass"],
                    g: [navigator.browserLanguage, "browserLanguage"],
                    s: [document.defaultCharset, "charset"]
                };
            return {
                collect: function(n, t) {
                    var r = n || "indexed_comma",
                        u = t || 1;
                    return i[r](u)
                }
            }
        }), n("../vendor/md5", [], function() {
            function a(n) {
                return y(v(p(n)))
            }

            function v(n) {
                return c(f(o(n), 8 * n.length))
            }

            function y(n) {
                try {} catch (f) {
                    s = 0
                }
                for (var t, r = s ? "0123456789ABCDEF" : "0123456789abcdef", u = "", i = 0; i < n.length; i++) t = n.charCodeAt(i), u += r.charAt(t >>> 4 & 15) + r.charAt(15 & t);
                return u
            }

            function p(n) {
                for (var t, u, i = "", r = -1; ++r < n.length;) t = n.charCodeAt(r), u = r + 1 < n.length ? n.charCodeAt(r + 1) : 0, t >= 55296 && 56319 >= t && u >= 56320 && 57343 >= u && (t = 65536 + ((1023 & t) << 10) + (1023 & u), r++), 127 >= t ? i += String.fromCharCode(t) : 2047 >= t ? i += String.fromCharCode(192 | t >>> 6 & 31, 128 | 63 & t) : 65535 >= t ? i += String.fromCharCode(224 | t >>> 12 & 15, 128 | t >>> 6 & 63, 128 | 63 & t) : 2097151 >= t && (i += String.fromCharCode(240 | t >>> 18 & 7, 128 | t >>> 12 & 63, 128 | t >>> 6 & 63, 128 | 63 & t));
                return i
            }

            function o(n) {
                for (var i = Array(n.length >> 2), t = 0; t < i.length; t++) i[t] = 0;
                for (t = 0; t < 8 * n.length; t += 8) i[t >> 5] |= (255 & n.charCodeAt(t / 8)) << t % 32;
                return i
            }

            function c(n) {
                for (var i = "", t = 0; t < 32 * n.length; t += 8) i += String.fromCharCode(n[t >> 5] >>> t % 32 & 255);
                return i
            }

            function f(f, e) {
                f[e >> 5] |= 128 << e % 32, f[(e + 64 >>> 9 << 4) + 14] = e;
                for (var o = 1732584193, s = -271733879, h = -1732584194, c = 271733878, l = 0; l < f.length; l += 16) {
                    var a = o,
                        v = s,
                        y = h,
                        p = c;
                    o = n(o, s, h, c, f[l + 0], 7, -680876936), c = n(c, o, s, h, f[l + 1], 12, -389564586), h = n(h, c, o, s, f[l + 2], 17, 606105819), s = n(s, h, c, o, f[l + 3], 22, -1044525330), o = n(o, s, h, c, f[l + 4], 7, -176418897), c = n(c, o, s, h, f[l + 5], 12, 1200080426), h = n(h, c, o, s, f[l + 6], 17, -1473231341), s = n(s, h, c, o, f[l + 7], 22, -45705983), o = n(o, s, h, c, f[l + 8], 7, 1770035416), c = n(c, o, s, h, f[l + 9], 12, -1958414417), h = n(h, c, o, s, f[l + 10], 17, -42063), s = n(s, h, c, o, f[l + 11], 22, -1990404162), o = n(o, s, h, c, f[l + 12], 7, 1804603682), c = n(c, o, s, h, f[l + 13], 12, -40341101), h = n(h, c, o, s, f[l + 14], 17, -1502002290), s = n(s, h, c, o, f[l + 15], 22, 1236535329), o = t(o, s, h, c, f[l + 1], 5, -165796510), c = t(c, o, s, h, f[l + 6], 9, -1069501632), h = t(h, c, o, s, f[l + 11], 14, 643717713), s = t(s, h, c, o, f[l + 0], 20, -373897302), o = t(o, s, h, c, f[l + 5], 5, -701558691), c = t(c, o, s, h, f[l + 10], 9, 38016083), h = t(h, c, o, s, f[l + 15], 14, -660478335), s = t(s, h, c, o, f[l + 4], 20, -405537848), o = t(o, s, h, c, f[l + 9], 5, 568446438), c = t(c, o, s, h, f[l + 14], 9, -1019803690), h = t(h, c, o, s, f[l + 3], 14, -187363961), s = t(s, h, c, o, f[l + 8], 20, 1163531501), o = t(o, s, h, c, f[l + 13], 5, -1444681467), c = t(c, o, s, h, f[l + 2], 9, -51403784), h = t(h, c, o, s, f[l + 7], 14, 1735328473), s = t(s, h, c, o, f[l + 12], 20, -1926607734), o = i(o, s, h, c, f[l + 5], 4, -378558), c = i(c, o, s, h, f[l + 8], 11, -2022574463), h = i(h, c, o, s, f[l + 11], 16, 1839030562), s = i(s, h, c, o, f[l + 14], 23, -35309556), o = i(o, s, h, c, f[l + 1], 4, -1530992060), c = i(c, o, s, h, f[l + 4], 11, 1272893353), h = i(h, c, o, s, f[l + 7], 16, -155497632), s = i(s, h, c, o, f[l + 10], 23, -1094730640), o = i(o, s, h, c, f[l + 13], 4, 681279174), c = i(c, o, s, h, f[l + 0], 11, -358537222), h = i(h, c, o, s, f[l + 3], 16, -722521979), s = i(s, h, c, o, f[l + 6], 23, 76029189), o = i(o, s, h, c, f[l + 9], 4, -640364487), c = i(c, o, s, h, f[l + 12], 11, -421815835), h = i(h, c, o, s, f[l + 15], 16, 530742520), s = i(s, h, c, o, f[l + 2], 23, -995338651), o = r(o, s, h, c, f[l + 0], 6, -198630844), c = r(c, o, s, h, f[l + 7], 10, 1126891415), h = r(h, c, o, s, f[l + 14], 15, -1416354905), s = r(s, h, c, o, f[l + 5], 21, -57434055), o = r(o, s, h, c, f[l + 12], 6, 1700485571), c = r(c, o, s, h, f[l + 3], 10, -1894986606), h = r(h, c, o, s, f[l + 10], 15, -1051523), s = r(s, h, c, o, f[l + 1], 21, -2054922799), o = r(o, s, h, c, f[l + 8], 6, 1873313359), c = r(c, o, s, h, f[l + 15], 10, -30611744), h = r(h, c, o, s, f[l + 6], 15, -1560198380), s = r(s, h, c, o, f[l + 13], 21, 1309151649), o = r(o, s, h, c, f[l + 4], 6, -145523070), c = r(c, o, s, h, f[l + 11], 10, -1120210379), h = r(h, c, o, s, f[l + 2], 15, 718787259), s = r(s, h, c, o, f[l + 9], 21, -343485551), o = u(o, a), s = u(s, v), h = u(h, y), c = u(c, p)
                }
                return Array(o, s, h, c)
            }

            function e(n, t, i, r, f, e) {
                return u(w(u(u(t, n), u(r, e)), f), i)
            }

            function n(n, t, i, r, u, f, o) {
                return e(t & i | ~t & r, n, t, u, f, o)
            }

            function t(n, t, i, r, u, f, o) {
                return e(t & r | i & ~r, n, t, u, f, o)
            }

            function i(n, t, i, r, u, f, o) {
                return e(t ^ i ^ r, n, t, u, f, o)
            }

            function r(n, t, i, r, u, f, o) {
                return e(i ^ (t | ~r), n, t, u, f, o)
            }

            function u(n, t) {
                var i = (65535 & n) + (65535 & t),
                    r = (n >> 16) + (t >> 16) + (i >> 16);
                return r << 16 | 65535 & i
            }

            function w(n, t) {
                return n << t | n >>> 32 - t
            }
            var l = {},
                s, h;
            return l.hex_md5 = a, s = 0, h = "", l
        }), n("../vendor/sha256", [], function() {
            function h(n) {
                return l(c(a(n)))
            }

            function c(n) {
                return u(i(r(n), 8 * n.length))
            }

            function l(n) {
                try {} catch (f) {
                    o = 0
                }
                for (var t, r = o ? "0123456789ABCDEF" : "0123456789abcdef", u = "", i = 0; i < n.length; i++) t = n.charCodeAt(i), u += r.charAt(t >>> 4 & 15) + r.charAt(15 & t);
                return u
            }

            function a(n) {
                for (var t, u, i = "", r = -1; ++r < n.length;) t = n.charCodeAt(r), u = r + 1 < n.length ? n.charCodeAt(r + 1) : 0, t >= 55296 && 56319 >= t && u >= 56320 && 57343 >= u && (t = 65536 + ((1023 & t) << 10) + (1023 & u), r++), 127 >= t ? i += String.fromCharCode(t) : 2047 >= t ? i += String.fromCharCode(192 | t >>> 6 & 31, 128 | 63 & t) : 65535 >= t ? i += String.fromCharCode(224 | t >>> 12 & 15, 128 | t >>> 6 & 63, 128 | 63 & t) : 2097151 >= t && (i += String.fromCharCode(240 | t >>> 18 & 7, 128 | t >>> 12 & 63, 128 | t >>> 6 & 63, 128 | 63 & t));
                return i
            }

            function r(n) {
                for (var i = Array(n.length >> 2), t = 0; t < i.length; t++) i[t] = 0;
                for (t = 0; t < 8 * n.length; t += 8) i[t >> 5] |= (255 & n.charCodeAt(t / 8)) << 24 - t % 32;
                return i
            }

            function u(n) {
                for (var i = "", t = 0; t < 32 * n.length; t += 8) i += String.fromCharCode(n[t >> 5] >>> 24 - t % 32 & 255);
                return i
            }

            function t(n, t) {
                return n >>> t | n << 32 - t
            }

            function f(n, t) {
                return n >>> t
            }

            function v(n, t, i) {
                return n & t ^ ~n & i
            }

            function y(n, t, i) {
                return n & t ^ n & i ^ t & i
            }

            function p(n) {
                return t(n, 2) ^ t(n, 13) ^ t(n, 22)
            }

            function w(n) {
                return t(n, 6) ^ t(n, 11) ^ t(n, 25)
            }

            function b(n) {
                return t(n, 7) ^ t(n, 18) ^ f(n, 3)
            }

            function k(n) {
                return t(n, 17) ^ t(n, 19) ^ f(n, 10)
            }

            function i(t, i) {
                var f, s, h, a, e, c, l, g, nt, u, tt, it, r = [1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225],
                    o = new Array(64);
                for (t[i >> 5] |= 128 << 24 - i % 32, t[(i + 64 >> 9 << 4) + 15] = i, nt = 0; nt < t.length; nt += 16) {
                    for (f = r[0], s = r[1], h = r[2], a = r[3], e = r[4], c = r[5], l = r[6], g = r[7], u = 0; 64 > u; u++) o[u] = 16 > u ? t[u + nt] : n(n(n(k(o[u - 2]), o[u - 7]), b(o[u - 15])), o[u - 16]), tt = n(n(n(n(g, w(e)), v(e, c, l)), d[u]), o[u]), it = n(p(f), y(f, s, h)), g = l, l = c, c = e, e = n(a, tt), a = h, h = s, s = f, f = n(tt, it);
                    r[0] = n(f, r[0]), r[1] = n(s, r[1]), r[2] = n(h, r[2]), r[3] = n(a, r[3]), r[4] = n(e, r[4]), r[5] = n(c, r[5]), r[6] = n(l, r[6]), r[7] = n(g, r[7])
                }
                return r
            }

            function n(n, t) {
                var i = (65535 & n) + (65535 & t),
                    r = (n >> 16) + (t >> 16) + (i >> 16);
                return r << 16 | 65535 & i
            }
            var e = {};
            e.hex_sha256 = h;
            var o = 0,
                s = "",
                d = [1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998];
            return e
        }), n("../src/bknumis", [], function() {
            var n = function() {
                    var t = {
                            x86Hash128: function(t, i) {
                                t = t || "", i = i || 0;
                                for (var w = t.length % 16, b = t.length - w, u = i, h = i, c = i, l = i, f = 0, e = 0, o = 0, s = 0, a = 597399067, v = 2869860233, y = 951274213, p = 2716044179, r = 0; b > r; r += 16) f = 255 & t.charCodeAt(r) | (255 & t.charCodeAt(r + 1)) << 8 | (255 & t.charCodeAt(r + 2)) << 16 | (255 & t.charCodeAt(r + 3)) << 24, e = 255 & t.charCodeAt(r + 4) | (255 & t.charCodeAt(r + 5)) << 8 | (255 & t.charCodeAt(r + 6)) << 16 | (255 & t.charCodeAt(r + 7)) << 24, o = 255 & t.charCodeAt(r + 8) | (255 & t.charCodeAt(r + 9)) << 8 | (255 & t.charCodeAt(r + 10)) << 16 | (255 & t.charCodeAt(r + 11)) << 24, s = 255 & t.charCodeAt(r + 12) | (255 & t.charCodeAt(r + 13)) << 8 | (255 & t.charCodeAt(r + 14)) << 16 | (255 & t.charCodeAt(r + 15)) << 24, f = n.x86.multiply(f, a), f = n.x86.rotl(f, 15), f = n.x86.multiply(f, v), u ^= f, u = n.x86.rotl(u, 19), u += h, u = n.x86.multiply(u, 5) + 1444728091, e = n.x86.multiply(e, v), e = n.x86.rotl(e, 16), e = n.x86.multiply(e, y), h ^= e, h = n.x86.rotl(h, 17), h += c, h = n.x86.multiply(h, 5) + 197830471, o = n.x86.multiply(o, y), o = n.x86.rotl(o, 17), o = n.x86.multiply(o, p), c ^= o, c = n.x86.rotl(c, 15), c += l, c = n.x86.multiply(c, 5) + 2530024501, s = n.x86.multiply(s, p), s = n.x86.rotl(s, 18), s = n.x86.multiply(s, a), l ^= s, l = n.x86.rotl(l, 13), l += u, l = n.x86.multiply(l, 5) + 850148119;
                                switch (f = 0, e = 0, o = 0, s = 0, w) {
                                    case 15:
                                        s ^= t.charCodeAt(r + 14) << 16;
                                        break;
                                    case 14:
                                        s ^= t.charCodeAt(r + 13) << 8;
                                        break;
                                    case 13:
                                        s ^= t.charCodeAt(r + 12), s = n.x86.multiply(s, p), s = n.x86.rotl(s, 18), s = n.x86.multiply(s, a), l ^= s;
                                        break;
                                    case 12:
                                        o ^= t.charCodeAt(r + 11) << 24;
                                        break;
                                    case 11:
                                        o ^= t.charCodeAt(r + 10) << 16;
                                        break;
                                    case 10:
                                        o ^= t.charCodeAt(r + 9) << 8;
                                        break;
                                    case 9:
                                        o ^= t.charCodeAt(r + 8), o = n.x86.multiply(o, y), o = n.x86.rotl(o, 17), o = n.x86.multiply(o, p), c ^= o;
                                        break;
                                    case 8:
                                        e ^= t.charCodeAt(r + 7) << 24;
                                        break;
                                    case 7:
                                        e ^= t.charCodeAt(r + 6) << 16;
                                        break;
                                    case 6:
                                        e ^= t.charCodeAt(r + 5) << 8;
                                        break;
                                    case 5:
                                        e ^= t.charCodeAt(r + 4), e = n.x86.multiply(e, v), e = n.x86.rotl(e, 16), e = n.x86.multiply(e, y), h ^= e;
                                        break;
                                    case 4:
                                        f ^= t.charCodeAt(r + 3) << 24;
                                        break;
                                    case 3:
                                        f ^= t.charCodeAt(r + 2) << 16;
                                        break;
                                    case 2:
                                        f ^= t.charCodeAt(r + 1) << 8;
                                        break;
                                    case 1:
                                        f ^= t.charCodeAt(r), f = n.x86.multiply(f, a), f = n.x86.rotl(f, 15), f = n.x86.multiply(f, v), u ^= f
                                }
                                return u ^= t.length, h ^= t.length, c ^= t.length, l ^= t.length, u += h, u += c, u += l, h += u, c += u, l += u, u = n.x86.fmix(u), h = n.x86.fmix(h), c = n.x86.fmix(c), l = n.x86.fmix(l), u += h, u += c, u += l, h += u, c += u, l += u, ("00000000" + (u >>> 0).toString(16)).slice(-8) + ("00000000" + (h >>> 0).toString(16)).slice(-8) + ("00000000" + (c >>> 0).toString(16)).slice(-8) + ("00000000" + (l >>> 0).toString(16)).slice(-8)
                            },
                            x64Hash128: function(t, i) {
                                t = t || "", i = i || 0;
                                for (var c = t.length % 16, l = t.length - c, e = [0, i], o = [0, i], u = [0, 0], f = [0, 0], s = [2277735313, 289559509], h = [1291169091, 658871167], r = 0; l > r; r += 16) u = [255 & t.charCodeAt(r + 4) | (255 & t.charCodeAt(r + 5)) << 8 | (255 & t.charCodeAt(r + 6)) << 16 | (255 & t.charCodeAt(r + 7)) << 24, 255 & t.charCodeAt(r) | (255 & t.charCodeAt(r + 1)) << 8 | (255 & t.charCodeAt(r + 2)) << 16 | (255 & t.charCodeAt(r + 3)) << 24], f = [255 & t.charCodeAt(r + 12) | (255 & t.charCodeAt(r + 13)) << 8 | (255 & t.charCodeAt(r + 14)) << 16 | (255 & t.charCodeAt(r + 15)) << 24, 255 & t.charCodeAt(r + 8) | (255 & t.charCodeAt(r + 9)) << 8 | (255 & t.charCodeAt(r + 10)) << 16 | (255 & t.charCodeAt(r + 11)) << 24], u = n.x64.multiply(u, s), u = n.x64.rotl(u, 31), u = n.x64.multiply(u, h), e = n.x64.xor(e, u), e = n.x64.rotl(e, 27), e = n.x64.add(e, o), e = n.x64.add(n.x64.multiply(e, [0, 5]), [0, 1390208809]), f = n.x64.multiply(f, h), f = n.x64.rotl(f, 33), f = n.x64.multiply(f, s), o = n.x64.xor(o, f), o = n.x64.rotl(o, 31), o = n.x64.add(o, e), o = n.x64.add(n.x64.multiply(o, [0, 5]), [0, 944331445]);
                                switch (u = [0, 0], f = [0, 0], c) {
                                    case 15:
                                        f = n.x64.xor(f, n.x64.leftshift([0, t.charCodeAt(r + 14)], 48));
                                        break;
                                    case 14:
                                        f = n.x64.xor(f, n.x64.leftshift([0, t.charCodeAt(r + 13)], 40));
                                        break;
                                    case 13:
                                        f = n.x64.xor(f, n.x64.leftshift([0, t.charCodeAt(r + 12)], 32));
                                        break;
                                    case 12:
                                        f = n.x64.xor(f, n.x64.leftshift([0, t.charCodeAt(r + 11)], 24));
                                        break;
                                    case 11:
                                        f = n.x64.xor(f, n.x64.leftshift([0, t.charCodeAt(r + 10)], 16));
                                        break;
                                    case 10:
                                        f = n.x64.xor(f, n.x64.leftshift([0, t.charCodeAt(r + 9)], 8));
                                        break;
                                    case 9:
                                        f = n.x64.xor(f, [0, t.charCodeAt(r + 8)]), f = n.x64.multiply(f, h), f = n.x64.rotl(f, 33), f = n.x64.multiply(f, s), o = n.x64.xor(o, f);
                                        break;
                                    case 8:
                                        u = n.x64.xor(u, n.x64.leftshift([0, t.charCodeAt(r + 7)], 56));
                                        break;
                                    case 7:
                                        u = n.x64.xor(u, n.x64.leftshift([0, t.charCodeAt(r + 6)], 48));
                                        break;
                                    case 6:
                                        u = n.x64.xor(u, n.x64.leftshift([0, t.charCodeAt(r + 5)], 40));
                                        break;
                                    case 5:
                                        u = n.x64.xor(u, n.x64.leftshift([0, t.charCodeAt(r + 4)], 32));
                                        break;
                                    case 4:
                                        u = n.x64.xor(u, n.x64.leftshift([0, t.charCodeAt(r + 3)], 24));
                                        break;
                                    case 3:
                                        u = n.x64.xor(u, n.x64.leftshift([0, t.charCodeAt(r + 2)], 16));
                                        break;
                                    case 2:
                                        u = n.x64.xor(u, n.x64.leftshift([0, t.charCodeAt(r + 1)], 8));
                                        break;
                                    case 1:
                                        u = n.x64.xor(u, [0, t.charCodeAt(r)]), u = n.x64.multiply(u, s), u = n.x64.rotl(u, 31), u = n.x64.multiply(u, h), e = n.x64.xor(e, u)
                                }
                                return e = n.x64.xor(e, [0, t.length]), o = n.x64.xor(o, [0, t.length]), e = n.x64.add(e, o), o = n.x64.add(o, e), e = n.x64.fmix(e), o = n.x64.fmix(o), e = n.x64.add(e, o), o = n.x64.add(o, e), ("00000000" + (e[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (e[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (o[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (o[1] >>> 0).toString(16)).slice(-8)
                            }
                        },
                        n = {
                            x86: {
                                multiply: function(n, t) {
                                    return (65535 & n) * t + (((n >>> 16) * t & 65535) << 16)
                                },
                                rotl: function(n, t) {
                                    return n << t | n >>> 32 - t
                                },
                                fmix: function(t) {
                                    return t ^= t >>> 16, t = n.x86.multiply(t, 2246822507), t ^= t >>> 13, t = n.x86.multiply(t, 3266489909), t ^= t >>> 16
                                }
                            },
                            x64: {
                                add: function(n, t) {
                                    n = [n[0] >>> 16, 65535 & n[0], n[1] >>> 16, 65535 & n[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
                                    var i = [0, 0, 0, 0];
                                    return i[3] += n[3] + t[3], i[2] += i[3] >>> 16, i[3] &= 65535, i[2] += n[2] + t[2], i[1] += i[2] >>> 16, i[2] &= 65535, i[1] += n[1] + t[1], i[0] += i[1] >>> 16, i[1] &= 65535, i[0] += n[0] + t[0], i[0] &= 65535, [i[0] << 16 | i[1], i[2] << 16 | i[3]]
                                },
                                multiply: function(n, t) {
                                    n = [n[0] >>> 16, 65535 & n[0], n[1] >>> 16, 65535 & n[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
                                    var i = [0, 0, 0, 0];
                                    return i[3] += n[3] * t[3], i[2] += i[3] >>> 16, i[3] &= 65535, i[2] += n[2] * t[3], i[1] += i[2] >>> 16, i[2] &= 65535, i[2] += n[3] * t[2], i[1] += i[2] >>> 16, i[2] &= 65535, i[1] += n[1] * t[3], i[0] += i[1] >>> 16, i[1] &= 65535, i[1] += n[2] * t[2], i[0] += i[1] >>> 16, i[1] &= 65535, i[1] += n[3] * t[1], i[0] += i[1] >>> 16, i[1] &= 65535, i[0] += n[0] * t[3] + n[1] * t[2] + n[2] * t[1] + n[3] * t[0], i[0] &= 65535, [i[0] << 16 | i[1], i[2] << 16 | i[3]]
                                },
                                rotl: function(n, t) {
                                    return t %= 64, 32 === t ? [n[1], n[0]] : 32 > t ? [n[0] << t | n[1] >>> 32 - t, n[1] << t | n[0] >>> 32 - t] : (t -= 32, [n[1] << t | n[0] >>> 32 - t, n[0] << t | n[1] >>> 32 - t])
                                },
                                leftshift: function(n, t) {
                                    return t %= 64, 0 === t ? n : 32 > t ? [n[0] << t | n[1] >>> 32 - t, n[1] << t] : [n[1] << t - 32, 0]
                                },
                                xor: function(n, t) {
                                    return [n[0] ^ t[0], n[1] ^ t[1]]
                                },
                                fmix: function(t) {
                                    return t = n.x64.xor(t, [0, t[0] >>> 1]), t = n.x64.multiply(t, [4283543511, 3981806797]), t = n.x64.xor(t, [0, t[0] >>> 1]), t = n.x64.multiply(t, [3301882366, 444984403]), t = n.x64.xor(t, [0, t[0] >>> 1])
                                }
                            }
                        };
                    return t
                }(),
                t = function(t) {
                    var i, r;
                    i = Array.prototype.forEach, r = Array.prototype.map, this.iosRegex = new RegExp(".*Mobile/([0-9a-f]+).*", "i"), this.androidRegex = new RegExp(".*;\\s?([0-9a-z/\\-_\\.\\s\\[\\]\\(\\)\\&\\+]+Build/[0-9a-z\\-_\\.\\s]+).*", "i"), this.each = function(n, t, r) {
                        var u, e, f;
                        if (null !== n)
                            if (i && n.forEach === i) n.forEach(t, r);
                            else if (n.length === +n.length) {
                            for (u = 0, e = n.length; e > u; u++)
                                if (t.call(r, n[u], u, n) === {}) return
                        } else
                            for (f in n)
                                if (n.hasOwnProperty(f) && t.call(r, n[f], f, n) === {}) return
                    }, this.map = function(n, t, i) {
                        var u = [];
                        return null === n ? u : r && n.map === r ? n.map(t, i) : (this.each(n, function(n, r, f) {
                            u[u.length] = t.call(i, n, r, f)
                        }), u)
                    }, this.defaultHasher = n, this.hasher = n.x86Hash128, "object" == typeof t ? (this.hasher = t.hasher || n.x86Hash128, this.screen_resolution = t.screen_resolution, this.screen_orientation = t.screen_orientation, this.user_agent_parse = t.user_agent_parse, this.canvas = t.canvas, this.ie_activex = t.ie_activex) : "function" == typeof t && (this.hasher = t)
                };
            return t.prototype = {
                get: function() {
                    var n = [],
                        t = "",
                        i;
                    if (n.push("ver=2.0"), this.user_agent_parse) {
                        try {
                            t = this.defaultHasher.x86Hash128(this.parseUserAgentString(navigator.userAgent), 31)
                        } catch (r) {}
                        n.push("ua=" + t)
                    } else n.push("ua=");
                    return (n.push("t=" + +new Date), n.push("m=" + function(n) {
                        for (var i = [], t = 0, r = navigator.mimeTypes; t < r.length; t++) i.push(r[t].description);
                        return n(i.join(","), 31)
                    }(this.defaultHasher.x86Hash128)), n.push("k=" + (navigator.cookieEnabled ? 1 : 0)), n.push("lang=" + this.defaultHasher.x86Hash128(navigator.language ? navigator.language : "", 31)), this.screen_resolution) ? (i = this.getScreenResolution(), n.push("undefined" != typeof i ? "sr=" + (this.getScreenResolution().join("x") ? this.getScreenResolution().join("x") : "") : "sr=")) : n.push("sr="), n.push("tzo=" + (new Date).getTimezoneOffset()), n.push("hss=" + this.hasSessionStorage()), n.push("hls=" + this.hasLocalStorage()), n.push("idb=" + !!window.indexedDB), n.push(document.body ? "addb=" + typeof document.body.addBehavior : "addb=undefined"), n.push("odb=" + typeof window.openDatabase), n.push("cpu=" + this.defaultHasher.x86Hash128(navigator.cpuClass ? navigator.cpuClass : "", 31)), n.push("platform=" + this.defaultHasher.x86Hash128(navigator.platform ? navigator.platform : "", 31)), n.push("notrack=" + ("boolean" == typeof navigator.doNotTrack ? navigator.doNotTrack : "")), n.push("plugins=" + this.defaultHasher.x86Hash128(this.getPluginsString() ? this.getPluginsString() : "", 31)), n.push(this.canvas && this.isCanvasSupported() ? "cn=" + this.defaultHasher.x86Hash128(this.getCanvasFingerprint() ? this.getCanvasFingerprint() : "", 31) : "cn="), n.join(",")
                },
                hasLocalStorage: function() {
                    try {
                        return !!window.localStorage
                    } catch (n) {
                        return !0
                    }
                },
                hasSessionStorage: function() {
                    try {
                        return !!window.sessionStorage
                    } catch (n) {
                        return !0
                    }
                },
                isCanvasSupported: function() {
                    var n = document.createElement("canvas");
                    return !!n.getContext && !!n.getContext("2d")
                },
                isIE: function() {
                    return "Microsoft Internet Explorer" === navigator.appName ? !0 : "Netscape" === navigator.appName && /Trident/.test(navigator.userAgent) ? !0 : !1
                },
                getPluginsString: function() {
                    return this.isIE() && this.ie_activex ? this.getIEPluginsString() : this.getRegularPluginsString()
                },
                getRegularPluginsString: function() {
                    return this.map(navigator.plugins, function(n) {
                        var t = this.map(n, function(n) {
                            return [n.type, n.suffixes].join("~")
                        }).join(",");
                        return [n.name, n.description, t].join("::")
                    }, this).join(";")
                },
                getIEPluginsString: function() {
                    if (window.ActiveXObject) {
                        var n = ["ShockwaveFlash.ShockwaveFlash", "AcroPDF.PDF", "PDF.PdfCtrl", "QuickTime.QuickTime", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "RealPlayer", "SWCtl.SWCtl", "WMPlayer.OCX", "AgControl.AgControl", "Skype.Detection"];
                        return this.map(n, function(n) {
                            try {
                                var t = new window.ActiveXObject(n);
                                return t = t, n
                            } catch (i) {
                                return null
                            }
                        }).join(";")
                    }
                    return ""
                },
                parseUserAgentString: function(n) {
                    var t, i;
                    return (n = n.toLowerCase(), n.match("android", "i")) ? (t = this.androidRegex.exec(n), t ? t[1] : "ANDROID") : n.match("ip(hone|ad|od|od\\stouch)") ? (i = this.iosRegex.exec(n), i ? i[1] : "IOS") : n
                },
                getScreenResolution: function() {
                    var n;
                    return n = this.screen_orientation ? screen.height > screen.width ? [screen.height, screen.width, screen.colorDepth] : [screen.width, screen.height, screen.colorDepth] : [screen.height, screen.width, screen.colorDepth]
                },
                getCanvasFingerprint: function() {
                    var t = document.createElement("canvas"),
                        n = t.getContext("2d"),
                        i = "Mr. Jock, TV quiz Ph-D, bags few lynx!",
                        r = "Ù©(Í¡à¹Ì¯Í¡à¹)Û¶Ù©(-Ì®Ì®Ìƒâ€¢Ìƒ)Û¶Ù©(Ì¾â—Ì®Ì®ÌƒÌ¾â€¢ÌƒÌ¾)Û¶Ù©(-Ì®Ì®Ìƒ-Ìƒ)Û¶(Í¡Â°ÍœÊ–Í¡Â°)";
                    return n.textBaseline = "top", n.font = "14px 'Arial'", n.textBaseline = "alphabetic", n.fillStyle = "#f60", n.fillRect(125, 1, 62, 20), n.fillStyle = "#069", n.fillText(i, 2, 15), n.font = "18pt 'BKNOFONT'", n.fillStyle = "rgba(102, 204, 0, 0.7)", n.fillText(i, 4, 17), n.font = "11pt Arial", n.fillStyle = "rgba(204, 0, 102, 0.6)", n.fillText(r, 1, 11), n.font = "15pt 'BKNOFONT'", n.fillStyle = "rgba(204, 126, 0, 0.3)", n.fillText(r, 3, 13), t.toDataURL()
                }
            }, t
        }), n("../src/core", ["../src/bootstrap", "../src/utils", "../vendor/cookies", "../vendor/numis", "../vendor/md5", "../vendor/sha256", "../src/bknumis"], function(n, r, f, e, o, s, h) {
            var a = [],
                v = !1,
                p = new h({
                    screen_resolution: !0,
                    screen_orientation: !0,
                    user_agent_parse: !0,
                    canvas: !0
                }),
                l = {
                    site: "site_id",
                    limit: "pixel_limit",
                    excludeBkParams: "ignore_meta",
                    excludeTitle: "exclude_title",
                    excludeKeywords: "exclude_keywords",
                    excludeReferrer: "exclude_referrer",
                    excludeLocation: "exclude_location",
                    partnerID: "partner_id",
                    allowMultipleCalls: "allow_multiple_calls",
                    suppressMultipleCalls: "suppress_multiple_calls",
                    callback: "callback",
                    useImage: "use_image",
                    useMultipleIframes: "use_multiple_iframes",
                    allData: "all_data",
                    timeOut: "timeout",
                    ignoreOutsideIframe: "ignore_outside_iframe",
                    eventScheduling: "event_scheduling",
                    suppressEventScheduling: "suppress_event_scheduling",
                    suppressCacheBusting: "suppress_cache_busting",
                    pixelUrl: "pixel_url",
                    pixelSecure: "pixel_secure",
                    useFirstParty: "use_first_party",
                    suppressFirstParty: "suppress_first_party",
                    sendStatidPayload: "send_statid_payload",
                    suppressStatidPayload: "suppress_statid_payload",
                    metaVars: "meta_vars",
                    jsList: "js_list",
                    paramList: "param_list",
                    useMobile: "use_mobile",
                    disableMobile: "disable_mobile",
                    isDebug: "is_debug",
                    limitGetLength: "limit_get_length"
                },
                c = {
                    readCookie: t,
                    createCookie: i,
                    eraseCookie: u,
                    _dest: null,
                    addParam: function(n, t, i) {
                        return "undefined" != typeof varMap && varMap[t] && (t = varMap[t]), a.push("undefined" != typeof i ? n + "=" + encodeURIComponent(t + "=" + i) : n + "=" + t), BKTAG
                    },
                    addBkParam: function(n, t) {
                        if ("string" == typeof n && "string" == typeof t) c.addParam("phint", "__bk_" + n, t);
                        else
                            for (var i in n) n.hasOwnProperty(i) && "string" == typeof n[i] && c.addParam("phint", "__bk_" + i, n[i]);
                        return BKTAG
                    },
                    addHash: function(n, t, i) {
                        return c.addParam("phint", n, i && "" !== i ? o.hex_md5(i) : ""), c.addParam("phint", t, i && "" !== i ? s.hex_sha256(i) : ""), BKTAG
                    },
                    addEmailHash: function(n) {
                        return n ? "string" != typeof n && (n = n.toString()) : n = "", n = BKTAG.util.normalizeEmail(n), c.addHash("e_id_m", "e_id_s", n)
                    },
                    addPhoneHash: function(n) {
                        return n ? "string" != typeof n && (n = n.toString()) : n = "", n = BKTAG.util.normalizePhone(n), c.addHash("p_id_m", "p_id_s", n)
                    },
                    _reset: function() {
                        var n, t;
                        v = !1, a = [];
                        for (n in l)
                            if (l.hasOwnProperty(n)) {
                                t = "bk_" + l[n], window[t] = void 0;
                                try {
                                    delete window[t]
                                } catch (i) {}
                            }
                        return BKTAG
                    },
                    params: function() {
                        return a
                    },
                    getGlobals: function(n) {
                        var r, i, t;
                        if (n.length)
                            for (r = 0; r < n.length; r++) i = n[r], "undefined" != typeof window[i] && "" !== i && "" !== window[i] && bk_addPageCtx(i, window[i]);
                        else
                            for (t in n) n.hasOwnProperty(t) && "string" == typeof t && ("string" == typeof n[t] || "number" == typeof n[t] || "boolean" == typeof n[t]) && bk_addPageCtx(t, n[t])
                    },
                    doTag: function(u, f, o, s, h, y, w, b, k) {                        
                        var d = {
                                site: u,
                                limit: f,
                                excludeBkParams: o,
                                partnerID: s,
                                allowMultipleCalls: h,
                                callback: y,
                                allData: w,
                                timeOut: b,
                                ignoreOutsideIframe: k
                            },
                            nt, tt, et, ht, it, ot, ut, lt, st, rt, ft;
                        for (nt in l) l.hasOwnProperty(nt) && "undefined" != typeof window["bk_" + l[nt]] && (d[nt] = window["bk_" + l[nt]]);
                        if ("object" == typeof u)
                            for (tt in l) l.hasOwnProperty(tt) && "undefined" != typeof u[l[tt]] && (d[tt] = u[l[tt]]);
                        if (!(d.suppressMultipleCalls === !0 || "undefined" != typeof v && v && d.allowMultipleCalls !== !0)) {
                            if (v = !0, void 0 === d.timeOut && (d.timeOut = 1e3), a.unshift("ret=" + (d.callback ? "js" : "html")), et = "undefined" != typeof d.partnerID && null !== d.partnerID, et && a.unshift("partner=" + encodeURIComponent(d.partnerID)), ht = {
                                    2607: 1,
                                    2834: 1,
                                    2894: 1,
                                    3316: 1,
                                    3317: 1,
                                    3318: 1,
                                    3319: 1,
                                    3321: 1,
                                    3322: 1,
                                    3323: 1,
                                    3324: 1,
                                    3325: 1,
                                    3326: 1,
                                    3327: 1,
                                    3328: 1,
                                    3329: 1,
                                    3330: 1,
                                    3331: 1,
                                    3332: 1,
                                    3333: 1,
                                    3334: 1,
                                    3338: 1,
                                    3339: 1,
                                    3340: 1,
                                    3341: 1,
                                    3344: 1,
                                    3345: 1,
                                    3346: 1,
                                    3348: 1
                                }, !d.excludeBkParams && !d.excludeTitle && "" !== document.title && c.addBkParam("t", document.title), !d.excludeBkParams && !d.excludeKeywords && c.addBkParam("k", r.getKwds()), !d.excludeBkParams && !d.excludeReferrer && "referrer" in document && "" !== document.referrer && c.addBkParam("pr", document.referrer), !d.excludeBkParams && !d.excludeLocation && c.addBkParam("l", window.location.toString()), d.callback ? c.addParam("jscb", encodeURIComponent(d.callback)) : "undefined" != typeof d.limit && c.addParam("limit", encodeURIComponent(d.limit)), d.allData === !0 && c.addParam("data", "all"), d.disableMobile !== !0 && d.suppressStatidPayload !== !0 && (r.isMobile() || d.sendStatidPayload) && "undefined" != typeof e && c.addParam("bknms", p.get()), d.suppressEventScheduling !== !0 && d.eventScheduling === !0 && r.addEvent("message", function(n) {
                                    var u, i, f;
                                    if ("http://tags.bluekai.com" === n.origin) {
                                        var r = document.getElementById("__bkframe"),
                                            e = function(n) {
                                                return function() {
                                                    r.contentWindow.postMessage(JSON.stringify({
                                                        event: n
                                                    }), "*"), r.contentWindow.postMessage(JSON.stringify({
                                                        schedule: "run"
                                                    }), "*")
                                                }
                                            },
                                            t = JSON.parse(n.data);
                                        if (t.status && "loaded" === t.status && r.contentWindow.postMessage(JSON.stringify({
                                                get: "events"
                                            }), "*"), t.scheduled) {
                                            u = JSON.parse(t.scheduled);
                                            for (i in u) f = "window" === u[i] ? window : document.getElementById(u[i]), f.addEventListener(i, e(i), !1)
                                        }
                                        t.status && "complete" === t.status && r.contentWindow.postMessage(JSON.stringify({
                                            status: "ack"
                                        }), "*")
                                    }
                                }, !1), d.suppressFirstParty !== !0 && d.useFirstParty && (t("bkrid") || i("bkrid", Math.floor(Math.random() * Math.pow(2, 31)), 180), t("bkrid") && c.addParam("bkrid", encodeURIComponent(t("bkrid")))), (r.isDebug() || d.isDebug) && c.addParam("debug", "1"), !d.excludeBkParams && "undefined" != typeof d.paramList && c.getGlobals(d.paramList), !d.excludeBkParams && "undefined" != typeof d.jsList && c.getGlobals(d.jsList), !d.excludeBkParams && "undefined" != typeof d.metaVars)
                                for (it = 0; it < d.metaVars.length; it++) ot = r.getMeta(d.metaVars[it]), null !== ot && c.addBkParam(d.metaVars[it], ot);
                            d.suppressCacheBusting !== !0 && c.addParam("r", parseInt(99999999 * Math.random(), 10));
                            var at = "https://stags.bluekai.com/",
                                vt = "http://tags.bluekai.com/",
                                ct = ("https:" === document.location.protocol ? d.pixelSecure ? d.pixelSecure : at : d.pixelUrl ? d.pixelUrl : vt) + (et ? "psite" : "site") + "/" + d.site,
                                g = ct + "?" + a.join("&");
                            (d.limitGetLength && (g = g.substr(0, 2e3)), BKTAG._dest = c._dest = g, d.callback) ? d.useImage ? (ut = document.createElement("span"), ut.style.display = "none", lt = document.getElementsByTagName("body")[0], lt.appendChild(ut), st = document.createElement("img"), st.src = c._dest, ut.appendChild(st)) : (rt = document.createElement("script"), rt.type = "text/javascript", rt.src = c._dest, rt.id = "__bk_script__", ht["" + u] && setTimeout(function() {
                                var n = document.getElementById("__bk_script__");
                                n && (n.removeNode ? n.removeNode(!0) : n.parentNode.removeChild(n))
                            }, d.timeOut), document.getElementsByTagName("head")[0].appendChild(rt)): (n.checkFrame(function() {
                                var t, i;
                                setTimeout(function () {
                                                                d.useMultipleIframes ? (t = n.createFrame("__bkframe_" + d.site + "_" + (new Date).valueOf()), t.className = "__bkframe_site_" + d.site, t.src = g, document.getElementsByTagName("body")[0].appendChild(t)) : frames && frames.__bkframe ? frames.__bkframe.location.replace(g) : (i = n.createFrame("__bkframe"), document.getElementsByTagName("body")[0].appendChild(i), frames.__bkframe.location.replace(g))

                                }, 0);
                            }), a.shift(), "undefined" != typeof d.ignoreOutsideIframe && d.ignoreOutsideIframe === !1) && (a.unshift("ret=jsht"), g = ct + "?" + a.join("&"), g = g.substr(0, 2e3), ft = document.createElement("script"), ft.src = g, ft.type = "text/javascript", document.getElementsByTagName("body").item(0).appendChild(ft)), "function" == typeof f && f(), a = []
                        }
                    }
                },
                y;
            for (y in c) c.hasOwnProperty(y) && (window.BKTAG[y] = c[y]);
            return "function" == typeof window.bk_async && window.setTimeout(function() {
                bk_async()
            }, 0), c
        }), n("../src/aliases", ["../src/core"], function() {
            window.BKTAG.addCtxParam = function(n, t) {
                return BKTAG.addParam("phint", n, t), BKTAG
            }, window.BKTAG.addBkParam = function(n, t) {
                return BKTAG.addParam("phint", "__bk_" + n, t), BKTAG
            }, window.BKTAG.addPageCtx = window.bk_addPageCtx = window.BKTAG.addUserCtx = window.bk_addUserCtx = function(n, t) {
                return BKTAG.addParam("phint", n, t), BKTAG
            }, window.bk_addEmailHash = function(n) {
                return BKTAG.addEmailHash(n), BKTAG
            }, window.bk_addPhoneHash = function(n) {
                return BKTAG.addPhoneHash(n), BKTAG
            }, window.BKTAG.doJSTag = window.bk_doJSTag = function (n, t, i) {
                msccRunFunctionOnConsent(function () { BKTAG.doTag(n, t, !1, null, i) })                
            }, window.BKTAG.doJSTag2 = window.bk_doJSTag2 = function (n, t) {
                msccRunFunctionOnConsent(function () { BKTAG.doTag(n, t) })                
            }, window.BKTAG.doCarsJSTag = window.bk_doCarsJSTag = function (n, t) {
                msccRunFunctionOnConsent(function () { BKTAG.doTag(n, t, !0) })                
            }, window.BKTAG.doPartnerAltTag = window.bk_doPartnerAltTag = function(n, t, i) {
                ("undefined" == typeof i || null === i) && (i = 0), msccRunFunctionOnConsent(function () { BKTAG.doTag(n, t, !1, i) })
            }, window.BKTAG.doCallbackTag = window.bk_doCallbackTag = function (n, t, i, r) {
                msccRunFunctionOnConsent(function () { BKTAG.doTag(n, 0, !1, null, i, t, r) })                
            }, window.BKTAG.doCallbackTagWithTimeOut = window.bk_doCallbackTagWithTimeOut = function (n, t, i, r, u) {
                msccRunFunctionOnConsent(function(){BKTAG.doTag(n, 0, !1, null, i, t, r, u)})                
            }, window.BKTAG.sendData = function (n) {
                msccRunFunctionOnConsent(function () { BKTAG.doTag(n) })                
            }
        }), n("mobile", ["../vendor/json2", "../src/core", "../src/aliases"], function() {}), r("mobile")
}(), BKTAG.version = "3.0.23b";
var varClickTracking = 1,
    varCustomerTracking = 1,
    varAutoFirePV = 1,
    Route = "LE070",
    Ctrl = "SS001";
document.onreadystatechange = function() {
    if (document.readyState === 'complete') {
        insertHTML('afterBegin', "<iframe name='__bkframe' style='display:none;' height='0' width='0' frameborder='0' src='javascript:void(0)'><\/iframe>")
    }
},
window.bk_async = function () {
    bk_addPageCtx("muid", getCookie("MUID")), msccRunFunctionOnConsent(function () { BKTAG.doTag(16353, 4) })
},  __bk_m = document.cookie.match(/MUID=(.*?);/), __bk_m != null && __bk_m.length > 0 && (m = __bk_m[1], bk_addPageCtx("muid", m)), bk_allow_multiple_calls = !0, bk_use_multiple_iframes = !0, bk_doJSTag(16353, 4);
var wcsIAr = [],
    wcsIArI = 0,
    wedcsCE = ["A", "IMG", "AREA", "INPUT"],
    wcsTPUrl = "//c.microsoft.com/trans_pixel.aspx?",
    wcsPVsFpc = 0,
    wcsEFpc = 1,
    wcsCDFpc = 0,
    wcsFpcC = "MSFPC",
    wcsFpcSet = 0,
    wcsFPCUrl = "//cs.microsoft.com/getid.js?jsoncb=MscomSetFPC",
    wcsAfPV = 0,
    wcsMUIDset = 0,
    wcsOrPms = ",sr,bs,ts,tz,ctrl,route,ti,si,se,sv,fi,fv,cid,tr,cn,ct,cot,cs,cnt,hp,cd,rsd,rsus,rsqs,rihs,r,pkey,",
    wcsccks = ["ANON"],
    customTags = "",
    clickInfo = "",
    customInfo = "",
    wcs = [],
    na = [],
    ms = [],
    vs = 4;
MscomInit(), Mscom.Slider = function(n, t) {
    this.Control = $("#" + n), this.SlideTransitionSpeed = parseInt(t), this.SliderContainer = $(this.Control.find(".mscom-slider-container")), this.Prev = $(this.Control.find(".mscom-prev")), this.Next = $(this.Control.find(".mscom-next")), this.SliderItems = $(this.Control.find(".mscom-slider-item")), this.SliderItemCount = this.SliderItems.length, this.DataView4 = parseInt(this.Control.attr("data-view4")), this.DataView3 = parseInt(this.Control.attr("data-view3")), this.DataView2 = parseInt(this.Control.attr("data-view2")), this.DataView1 = parseInt(this.Control.attr("data-view1")), this.SlideTransitionSpeedPerSlide = parseInt(this.SlideTransitionSpeed / this.DataView4), this.DataStyle4 = this.Control.attr("data-style4").toLowerCase(), this.DataStyle3 = this.Control.attr("data-style3").toLowerCase(), this.DataStyle2 = this.Control.attr("data-style2").toLowerCase(), this.DataStyle1 = this.Control.attr("data-style1").toLowerCase(), this.IsTouchEnabled = !1, this.CurrentItemIndex = 0, this.CurrentView = 4, this.CurrentViewItem = this.DataView4, this.CurrentViewStyle = this.DataStyle4, $($.proxy(this.Init, this))
}, Mscom.Slider.prototype = {
    Init: function() {
        Modernizr !== undefined && Modernizr.touch && (this.IsTouchEnabled = !0);
        $(window).on("resize", $.proxy(this.WindowResize, this));
        this.Prev.attr("href", "javascript:void(0);"), this.Next.attr("href", "javascript:void(0);"), this.WindowResize(), this.EnableNext(!0)
    },
    EnableNext: function(n) {
        this.BindNextEvents(n), this.Next.addClass("mscom-disable"), n && this.SliderItemCount > this.CurrentItemIndex + this.CurrentViewItem && this.Next.removeClass("mscom-disable")
    },
    EnablePrev: function(n) {
        this.BindPrevEvents(n), this.Prev.addClass("mscom-disable"), n && this.SliderItemCount > this.CurrentViewItem && this.CurrentItemIndex > 0 && this.Prev.removeClass("mscom-disable")
    },
    BindNextEvents: function(n) {
        if (this.IsTouchEnabled && this.SliderContainer.off("swipe" + Mscom.Left), this.Next.off("click"), n && this.SliderItemCount > this.CurrentItemIndex + this.CurrentViewItem) {
            if (this.IsTouchEnabled && !this.IsVerticalStyle()) this.SliderContainer.on("swipe" + Mscom.Left, $.proxy(this.SlideNext, this));
            this.Next.on("click", $.proxy(this.SlideNext, this))
        }
    },
    BindPrevEvents: function(n) {
        if (this.IsTouchEnabled && this.SliderContainer.off("swipe" + Mscom.Right), this.Prev.off("click"), n && this.SliderItemCount > this.CurrentViewItem && this.CurrentItemIndex > 0) {
            if (this.IsTouchEnabled && !this.IsVerticalStyle()) this.SliderContainer.on("swipe" + Mscom.Right, $.proxy(this.SlidePrev, this));
            this.Prev.on("click", $.proxy(this.SlidePrev, this))
        }
    },
    GetViewport: function() {
        var n = window,
            t = "inner";
        return "innerWidth" in window || (t = "client", n = document.documentElement || document.body), {
            width: n[t + "Width"],
            height: n[t + "Height"]
        }
    },
    WindowResize: function() {
        if (Mscom.BrowserDetect.browser == "Explorer" && Mscom.BrowserDetect.version < 9) this.SetCurrentView(4, this.DataView4, this.DataStyle4);
        else {
            var n = this.GetViewport().width;
            if (n < Mscom.ResponsiveBP1Width + 1) {
                this.SetCurrentView(1, this.DataView1, this.DataStyle1);
                return
            }
            if (n < Mscom.ResponsiveBP2Width + 1) {
                this.SetCurrentView(2, this.DataView2, this.DataStyle2);
                return
            }
            if (n < Mscom.ResponsiveBP3Width + 1) {
                this.SetCurrentView(3, this.DataView3, this.DataStyle3);
                return
            }
            if (n > Mscom.ResponsiveBP3Width) {
                this.SetCurrentView(4, this.DataView4, this.DataStyle4);
                return
            }
        }
    },
    SetCurrentView: function(n, t, i) {
        if (this.CurrentView != n || this.CurrentViewStyle != i) {
            this.CurrentView = n, this.CurrentViewItem = t, this.CurrentViewStyle = i, this.CurrentItemIndex = 0, this.EnableNext(!0), this.EnablePrev(!1), this.SliderItems.addClass("mscom-hide"), this.IsVerticalStyle() ? this.Control.addClass("mscom-slider-vertical") : this.Control.removeClass("mscom-slider-vertical");
            for (var r = 0; r < this.CurrentViewItem; r++) this.SliderItems.eq(r).removeClass("mscom-hide")
        }
    },
    IsVerticalStyle: function() {
        return this.CurrentViewStyle == "vertical"
    },
    GetItemMargin: function() {
        var n = $(this.Control.find(".mscom-slider-item:visible:first"));
        return parseInt(n.outerWidth(!0)) - parseInt(n.width())
    },
    GetItemDimesionToAdd: function(n, t) {
        return this.IsVerticalStyle() ? parseInt(n.outerHeight(t)) : parseInt(n.outerWidth(t))
    },
    SlidePrev: function(n) {
        n.preventDefault(), Mscom.Helper.BiTrack(n.target, "Prev", 5, 5), this.SlideClick(n, this.IsVerticalStyle() ? "bottom" : Mscom.Right, !1)
    },
    SlideNext: function(n) {
        n.preventDefault(), Mscom.Helper.BiTrack(n.target, "Next", 5, 4), this.SlideClick(n, this.IsVerticalStyle() ? "top" : Mscom.Left, !0)
    },
    SlideClick: function(n, t, i) {
        var r, u;
        this.BindNextEvents(!1), this.BindPrevEvents(!1);
        var s = 0,
            f = 0,
            e = 0,
            o = this.GetItemDimesionToAdd($(this.Control.find(".mscom-slider-items")), !1);
        for (i && !this.IsVerticalStyle() && (o -= parseInt(this.GetItemMargin())), r = 0; r < this.CurrentViewItem; r++) {
            if (i) {
                if (this.CurrentItemIndex + this.CurrentViewItem + r >= this.SliderItemCount) break;
                e = this.CurrentItemIndex + this.CurrentViewItem + r
            } else {
                if (this.CurrentItemIndex - r - 1 < 0) break;
                e = this.CurrentItemIndex - r - 1
            }
            u = this.SliderItems.eq(e), u.css(t, o.toString() + "px"), u.addClass("mscom-currentslide"), u.removeClass("mscom-hide"), o += this.GetItemDimesionToAdd(u, !0), s += this.GetItemDimesionToAdd(u, !0), f += 1
        }
        i ? this.CurrentItemIndex += f : this.CurrentItemIndex -= f, this.SlideItems(t, s, f, i)
    },
    SlideItems: function(n, t, i) {
        var f = 0,
            u = this,
            o = parseInt(parseInt(this.SlideTransitionSpeedPerSlide) * parseInt(i)),
            e = {};
        e[n] = "-=" + t, this.SliderItems.animate(e, {
            duration: o,
            specialEasing: {
                width: "linear"
            },
            complete: function() {
                $(this).removeClass("mscom-currentslide"), $(this).removeAttr("style"), (f < u.CurrentItemIndex || f >= u.CurrentItemIndex + u.CurrentViewItem) && f != u.CurrentItemIndex && $(this).addClass("mscom-hide"), f >= u.SliderItemCount - 1 && (u.EnableNext(!0), u.EnablePrev(!0)), f += 1
            }
        })
    }
}

function appInsightsInit(instrumentKey, enable) {
    if (enable === void 0) {
        enable = false;
    }
    if (enable) {
        var appInsights = function (config) {
            function r(config) {
                t[config] = function () {
                    var i = arguments;
                    t.queue.push(function () {
                        t[config].apply(t, i)
                    })
                }
            }
            var t = {
                config: config
            },
                u = document,
                e = window,
                o = "script",
                s = u.createElement(o),
                i, f;
            for (s.src = config.url || "//az416426.vo.msecnd.net/scripts/a/ai.0.js", u.getElementsByTagName(o)[0].parentNode.appendChild(s), t.cookie = u.cookie, t.queue = [], i = ["Event", "Exception", "Metric", "PageView", "Trace"]; i.length;) r("track" + i.pop());
            return r("setAuthenticatedUserContext"), r("clearAuthenticatedUserContext"), config.disableExceptionTracking || (i = "onerror", r("_" + i), f = e[i], e[i] = function (config, r, u, e, o) {
                var s = f && f(config, r, u, e, o);
                return s !== !0 && t["_" + i](config, r, u, e, o), s
            }), t
        }({
            instrumentationKey: instrumentKey,
            isCookieUseDisabled: false,
            disableTelemetry: false,
            isStorageUseDisabled: false,
            enableSessionStorageBuffer: true
        });
        window.appInsights = appInsights;
        appInsights.trackPageView();
    }
    else {
        window.appInsights = null;
    }
}

function IFrameCookieManager(enable) {
    if (enable === void 0) {
        enable = false;
    }
    if (Cortex.IFrames === void 0) {
        Cortex.IFrames = [];
    }
    if (enable) {
        $.each(Cortex.IFrames, function (idx, item) {          
            $('iframe[ctex-mscc=' + item.Id + ']').attr('src', item.Url);
        });
    }
    else {
        $.each($('iframe'), function (idx, el) {
            $(el).attr('ctex-mscc', idx);
            Cortex.IFrames.push({'Id': idx, 'Url': el.src});
        });
        $('iframe').attr('src', '');
    }
}

if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (searchString, position) {
        position = position || 0;
        return this.indexOf(searchString, position) === position;
    };
}