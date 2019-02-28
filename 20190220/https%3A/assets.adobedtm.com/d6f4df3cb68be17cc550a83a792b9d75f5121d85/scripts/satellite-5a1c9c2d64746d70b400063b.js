_satellite.pushAsyncScript(function(event, target, $variables){
  var t = window.tagging;
(function (td, tu, $) {

    var elem;
    var mainSelector = "main, [role=main], .digitalTransformation, .BodyContainer";
    var prefooter_sel = ".prefooter";
    var elemParents, childElements, lastElemId, jqThis, pElemId, idx_g = 1;

    // This will set the ID of the div/sections of the footer
    if ($(prefooter_sel).not("[data-bi-id]")) {
        var mainElemId = $(mainSelector).attr("data-bi-id");
        pElemId = (mainElemId || "").replace(/a(\d*)Body/g, "a$1");
        // Find the data-bi-id of the last element on the page to find the correct number for "r"
        lastElemId = ($("[data-bi-id*='a3']:last", mainSelector).attr("data-bi-id") || "").match(/r(\d*)a(\d*)/i);
        if (lastElemId && lastElemId[1]) {
            $(prefooter_sel).attr("data-bi-id", "r" + (parseInt(lastElemId[1], 10) + 1) + pElemId);
        } else {
            $(prefooter_sel).attr("data-bi-id", "r" + "1" + pElemId);
        }
        $(prefooter_sel).attr("data-bi-name", tu.getLineageName($(this), "socialShare"));
        var prefooterID = $(prefooter_sel).attr("data-bi-id")
        // Going down to where id's are present
        $(prefooter_sel).children().children().children().each(function () {
            grp = "m" + idx_g + prefooterID;
            $(this).attr("data-bi-id", grp);
            if (!$(this).attr("data-bi-name")) {
                 $(this).attr("data-bi-name", tu.getLineageName($(this), $(this).attr("data-bi-id") || "undefined"));
            }
            idx_g++;
        });
    }

    // This will set the Name of the Links (this is special because the link "names" are in the list element that is a parent of the link
    var tagFooterName = function (elem) {
        try {
            var parentElem = elem.parent();
            if (parentElem.is("li")) {
                elem.attr("data-bi-name", tu.formatStr(parentElem.attr("title"), "undefined"));
            }
        } catch (e) {
            tu.debugLog("Error tagging data-bi-name(link text) in the pre-footer. Error: " + e);
        }
    };


    // This will set the ID of the links in the footer
    $("a, button", prefooter_sel).not("[data-bi-id]").each(function () {
        jqThis = jQuery(this);
        if (!jqThis.attr("data-bi-id")) {
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
        // try and tag the links
        tu.tagGenericName(jqThis);
        if (!jqThis.attr("data-bi-name") || jqThis.attr("data-bi-name") == "undefined") {
            tagFooterName(jqThis);
        }
    });

  
  if (typeof awa !== 'undefined' && awa && !(td.isPageNameSet)) {
    awa.extendCoreData({"pageName": td.pageName});
    td.isPageNameSet = true;
  }
 

}(t.data, t.util, window.jQuery));
});
