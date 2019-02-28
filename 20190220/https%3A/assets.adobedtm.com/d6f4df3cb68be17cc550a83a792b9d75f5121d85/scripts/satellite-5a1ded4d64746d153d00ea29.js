_satellite.pushAsyncScript(function(event, target, $variables){
  //element tagging after dom ready
try {
    var t = window.tagging;
    (function (td, tu, $) {
        //helper variables
        var elem, href, datahref, title, elemClass;
        var wlh = window.location.hostname,
            wlp = window.location.pathname;
        var mainSelector = "main, [role=main], .digitalTransformation, .BodyContainer";
        var prefooter_sel = ".prefooter";
        td.addDeploymentInfo("edu_jsll_element_tagging", "2017nov");


        /******************************************************/
        /* Content Name - data-bi-name - title of the element */
        /******************************************************/
        tu.tagGenericName = function (elem) {
            try {
                if (elem.children().length > 1 && elem.children().first()[0].textContent.length > 0) { //links with nested children. Will weed out nested images and find the first child with text
                    elem.attr("data-bi-name", tu.formatStr(elem.children().first()[0].textContent, "undefined"));
                } else if (elem[0].textContent.length > 0) { //normal link with a textContent length greater than 0; apply data-bi-name
                    elem.attr("data-bi-name", tu.formatStr(elem.text(), "undefined"));
                }

                //special use case for price spider links that open the lightbox
                if (elem.hasClass("ps-enabled")) {
                    elem.attr("data-bi-name", tu.formatStr(elem.find(".ps-button-label").text(), "undefined"));
                }
            } catch (e) {
                tu.debugLog("Error tagging data-bi-name(link text) in the common tagging script. Error: " + e);
            }
        };

        /************************************************************************/
        /* Content Type - data-bi-type - media type associated with the element */
        /************************************************************************/
        tu.tagGenericContentType = function (elem) {
            try {
                if (elem.is("a")) {
                    href = elem.attr("href") || "";
                    datahref = elem.attr("data-href") || "";
                    elemClass = elem.attr("class") || "";
                    if (href.match(/go\.microsoft\.com/i)) { //app download (on-network)
                        elem.attr("data-bi-bhvr", "DOWNLOAD");
                    } else if (href.match(/microsoft\.com/i) && href.match(/\/store/i)) { //microsoft store referral
                        if (href.match(/\/(b|d|config|buy)\/|cat0=devices/i)) {
                            elem.attr("data-bi-bhvr", "PARTNERREFERRAL");
                        } else {
                            elem.attr("data-bi-bhvr", "DOWNLOADCOMMIT");
                        }
                        elem.attr({
                            "data-bi-type": "referral",
                            "data-bi-prtnm": "ms store"
                        });
                    } else if (href.match(/redir\.pricespider\.com/i)) { //microsoft store referral
                        elem.attr({
                            "data-bi-type": "referral",
                            "data-bi-bhvr": "PARTNERREFERRAL",
                            "data-bi-prtnm": "ms store"
                        });
                    } else if (href.match(/microsoft\.com/i) && href.match(/\/surface/i)) { //internal link that stays on Surface site
                        elem.attr({
                            "data-bi-type": "learn",
                            "data-bi-bhvr": "OTHER"
                        });
                    } else if (href.match(/facebook\.com/i)) {
                        if (datahref.match(/\/sharer\//i)) {
                            elem.attr("data-bi-bhvr", "SOCIALSHARE");
                        } else {
                            elem.attr("data-bi-bhvr", "SOCIALLIKE");
                        }
                        elem.attr({
                            "data-bi-socchn": "facebook",
                            "data-bi-name": "facebook"
                        });
                    } else if (href.match(/twitter\.com/i)) {
                        if (datahref.match(/\/share/i)) {
                            elem.attr("data-bi-bhvr", "SOCIALSHARE");
                        } else {
                            elem.attr("data-bi-bhvr", "SOCIALLIKE");
                        }
                        elem.attr({
                            "data-bi-socchn": "twitter",
                            "data-bi-name": "twitter"
                        });
                    } else if (href.match(/instagram\.com/i)) {
                        elem.attr({
                            "data-bi-bhvr": "SOCIALLIKE",
                            "data-bi-socchn": "instagram",
                            "data-bi-name": "instagram"
                        });
                    } else if (href.match(/\.exe/i)) {
                        elem.attr("data-bi-bhvr", "DOWNLOAD");
                    }
                    if (elemClass && elemClass.match(/glyph-play/i)) { //initiate video start cta
                        if (elem.attr("aria-label")) {
                            elem.attr("data-bi-vidnm", tu.formatStr(elem.attr("aria-label"), "undefined"));
                        }
                        elem.attr({
                            "data-bi-bhvr": "VIDEOSTART",
                            "data-bi-type": "learn",
                            "data-bi-vidpct": "0"
                        });
                    }
                }
            } catch (e) {
                tu.debugLog("Error tagging content type in the common tagging script. Error: " + e);
            }
        };

        /**********************************************************************/
        /*Content Area - data-bi-area - area of the page the element exists in*/
        /**********************************************************************/
        $("section:not([data-m])").attr("data-bi-area", "body");
        $(prefooter_sel).attr("data-bi-area", "footer");

        $("a[href], section:not([data-m]) button").not("section[data-m] a").each(function () {
            try {
                tu.tagGenericName($(this));
            } catch (e) {
                tu.debugLog("Error calling the tagGenericName function in the .each loop in the common tagging script. Error: " + e);
            }
            try {
                //tu.tagGenericContentType($(this)); /* TODO This might want to come back */
            } catch (e) {
                tu.debugLog("Error calling the tagGenericContentType function in the .each loop in the common tagging script. Error: " + e);
            }
        });

  
        /* TODO This might want to be added back
            //use case to tag responsive links or ctas that are loaded after page load without data-bi-type
            $(document).on("mousedown", "section:not([data-m]) a[href]:not([data-bi-type])", function () {
                try {
                    tu.tagGenericContentType($(this));
                } catch (e) {
                    tu.debugLog("Error calling the tagGenericContentType function in the mousedown listener in the common tagging script. Error: " + e);
                }
            });
        */
        /*********************************************************************/
        /* Product - data-bi-prod - product name associated with the element */
        /*********************************************************************/
        /* TODO add both selects back 
            $("section:not([data-m])").find("[data-name]").each(function () {
                //map the value in data-name to data-bi-prod and add to the element
                try {
                    $(this).attr("data-bi-prod", $(this).attr("data-name"));
                } catch (e) {
                    tu.debugLog("Error tagging product name in the common tagging script. Error: " + e);
                }
            });
        
            //use case to tag responsive links of ctas that are loaded after page load without data-bi-prod
            $(document).on("mousedown", "section:not([data-m]) [data-name]:not([data-bi-prod])", function () {
                //map the value in data-name to data-bi-prod and add to the element
                try {
                    $(this).attr("data-bi-prod", $(this).attr("data-name"));
                } catch (e) {
                    tu.debugLog("Error tagging product name in the mousedown listener in the common tagging script. Error: " + e);
                }
            });
        */
        /********************************************/
        /* Product ID - data-bi-prodid - product id */
        /********************************************/
        //only applicable to ms store links with the productID path. https://www.microsoftstore.com/store/msusa/en_US/pdp/productID.5074012200
        /* TODO add this back
            $("[href*='microsoftstore']").each(function () {
                try {
                    try {
                        if ($(this).attr("href").match(/productID/i)) {
                            $(this).attr("data-bi-prodid", $(this)[0].pathname.split("productID.")[1]);
                        }
                    } catch (e) {
                        tu.debugLog("Error tagging microsoftstore links with the productID value. In common tagging script. Error: " + e);
                    }
                    $(this).attr({
                        "data-bi-prtnm": "ms store",
                        "data-bi-type": "referral",
                        "data-bi-bhvr": "PARTNERREFERRAL"
                    });
                } catch (e) {
                    tu.debugLog("Error tagging microsoftstore links in the common tagging script. Error: " + e);
                }
            });
        
            $(document).on("mousedown", "[href*='microsoftstore']:not([data-bi-type])", function () {
                try {
                    try {
                        if ($(this).attr("href").match(/productID/i)) {
                            $(this).attr("data-bi-prodid", $(this)[0].pathname.split("productID")[1]);
                        }
                    } catch (e) {
                        tu.debugLog("Error tagging microsoftstore links with the productID value in the mousedown listener. In common tagging script. Error: " + e);
                    }
                    $(this).attr({
                        "data-bi-prtnm": "ms store",
                        "data-bi-type": "referral",
                        "data-bi-bhvr": "PARTNERREFERRAL"
                    });
                } catch (e) {
                    tu.debugLog("Error tagging microsoftstore links in the mousedown listener in the common tagging script. Error: " + e);
                }
            });
        */
        /********************************************************************/
        /* Partner Name - data-bi-prtnm - captures the name of the retailer */
        /********************************************************************/
        /* TODO Add this back
            var retailer, product;
        
            $("a[href*='store/b/surface']", mainSelector).each(function () {
                try {
                    $(this).attr({
                        "data-bi-prtnm": "ms store",
                        "data-bi-type": "referral",
                        "data-bi-bhvr": "PARTNERREFERRAL"
                    });
                } catch (e) {
                    tu.debugLog("Error tagging store/b/surface links in the common tagging script. Error: " + e);
                }
            });
            //Surface buy now buttons tagging 
            $(".surface-wheretobuy-items A[data-bi-name='buy online']").each(function () {
                var partnerName = this.href.split('/')[2].replace('www.', '');
                try {
                    $(this).attr({
                        "data-bi-prtnm": partnerName,
                        "data-bi-type": "referral",
                        "data-bi-bhvr": "DOWNLOADCOMMIT"
                    });
                } catch (e) {
                    tu.debugLog("Error tagging surface Buy Now Buttons links. Error: " + e);
                }
            });
        */

        /* TODO This can probably be removed
        
            $("a[data-retailer]:not([data-bi-type])").each(function () {
                try {
                    retailer = tu.formatStr($(this).attr("data-retailer"), "undefined");
                    $(this).attr({
                        "data-bi-prtnm": retailer,
                        "data-bi-type": "referral",
                        "data-bi-bhvr": "PARTNERREFERRAL"
                    });
                } catch (e) {
                    tu.debugLog("Error tagging data-retailer. Inside common tagging script. Error: " + e);
                }
            });
            //special case for buy pages that don't include data-retailer attributes
            $(".v4-other-retailers a.rtm-button:not([data-bi-type])").each(function () {
                try {
                    href = tu.formatStr($(this).attr("href"), "undefined");
                    href = href.replace(/^https?:\/\//i, '');
                    href = href.replace(/^www\./i, '');
                    retailer = href.split(".")[0];
                    $(this).attr({
                        "data-bi-prtnm": retailer,
                        "data-bi-type": "referral",
                        "data-bi-bhvr": "PARTNERREFERRAL"
                    });
                } catch (e) {
                    tu.debugLog("Error tagging buy other retailer. Inside common tagging script. Error: " + e);
                }
            });
        
        */

        //data-bi-name special use case on apps
        $(".context-app a").each(function () {
            try {
                //fix data-bi-name attributes
                jQuery(this).attr("data-bi-name", tu.formatStr(jQuery(this).find("[itemprop='product name']").text() || jQuery(this).attr("data-bi-name"), "undefined"));
            } catch (e) {
                tu.debugLog("Error tagging the app titles for data-bi-name on the apps section. Inside common tagging script. Error: " + e);
            }
        });
        /* TODO this would have to be updated
            //Surface buy now buttons tagging on Buy page
            $(".surface-wheretobuy-items A[data-bi-name='buy online']").each(function () {
                var partnerName;
                partnerName = this.href.split('/')[2].replace('www.', '');
                try {
                    $(this).attr({
                        "data-bi-prtnm": partnerName,
                        "data-bi-type": "referral",
                        "data-bi-bhvr": "PARTNERREFERRAL"
                    });
                } catch (e) {
                    tu.debugLog("Error tagging surface Buy Now Buttons links. Error: " + e);
                }
            });
        
         */

        $("a, button", mainSelector).not("[data-bi-id]").each(function () {
            jqThis = jQuery(this);
            if (!jqThis.attr("data-bi-id")) {
                if (jqThis.attr("id") != undefined) {
                    jqThis.attr("data-bi-id", jqThis.attr("id"));
                } else {
                    elemParents = jqThis.parents("[data-bi-id]:first");
                    if (elemParents.length > 0) {
                        /*if(!jqThis.attr("data-bi-area")){
                          jqThis.attr("data-bi-area", elemParents.attr("data-bi-id"));
                        }*/
                        childElements = elemParents.find("a[data-bi-id],button[data-bi-id]");
                        pElemId = (elemParents.attr("data-bi-id") || "").replace(/a(\d*)Body/g, "a$1");
                        if (childElements.length > 0) {
                            lastElemId = (childElements.last().attr("data-bi-id") || "").match(/^n(\d*)(c|m|r|a)/i);
                            if (lastElemId && lastElemId[1]) {
                                jqThis.attr("data-bi-id", "n" + (parseInt(lastElemId[1], 10) + 1) + pElemId);
                            } else {
                                jqThis.attr("data-bi-id", "n" + "1" + pElemId);
                            }
                        } else {
                            jqThis.attr("data-bi-id", "n" + "1" + pElemId);
                        }
                    }
                }
            }
        });

        jQuery(mainSelector).find("[data-bi-id]:not([data-bi-name])").each(function () {
            jQuery(this).attr("data-bi-name", jQuery(this).attr("data-bi-id"));
        });
    }(t.data, t.util, window.jQuery));
} catch (e) {
    $("main a").not("[data-bi-name]").each(function () {
        $(this).attr("data-bi-name", $(this).text().trim() || $(this).attr("id"));
    });
} finally {
    //use case to tag responsive links or ctas that are loaded after page load with data-bi-name(link text)
    $(document).on("mousedown", "section:not([data-m]) a[href]:not([data-bi-name]), section:not([data-m]) a[href][data-bi-name='undefined'], section:not([data-m]) button:not([data-bi-name]), section:not([data-m]) button[data-bi-name='undefined']", function () {
        try {
            tu.tagGenericName($(this));
            if (!$(this).attr("data-bi-id")) {
                // the name was not set, but will be set in the link click, there should be an id too, but for now it will set undefined for testing purpouses
                $(this).attr("data-bi-id", "undefined");
            }
        } catch (e) {
            tu.debugLog("Error calling the tagGenericName function in the mousedown listener in the common tagging script. Error: " + e);
        }
    });
}

});
