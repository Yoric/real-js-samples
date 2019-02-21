_satellite.pushAsyncScript(function(event, target, $variables){
  var PartReferralSelectror = "main a[href*='cdw.com/shop'], main a[href*='govconnection.com/shop'], main a[href*='govconnection.com/product']";
var PurchaseSelector = "main a[href*='store/b'], main a[href*='microsoftstore.com/store']";
var DownloadSelector = "main a[href*='education-store'], main a[href*='educationstore.microsoft.com'], main a[href*='store/p'], " +
    "main a[href*='edudownloads.azureedge.net'], main a[href*='microsoft.com/education-store']";

//This page already has an extra click event for tracking, don't add a second one
var pagesToExclude = new RegExp('\\w{2}-\\w{2}\/education\/products\/office-365-app\/default');

//Set the behavior ID for the links with the Hrefs
try {
    $(PartReferralSelectror).each(function () {
        $(this).attr("data-bi-bhvr", "PARTNERREFERRAL");
    });
    $(PurchaseSelector).each(function () {
        $(this).attr("data-bi-bhvr", "PURCHASE");
    });
    $(DownloadSelector).each(function () {
        $(this).attr("data-bi-bhvr", "DOWNLOAD");
    });
} catch (e) {
    tagging.util.debugLog("Error tagging Referrals. Error: " + e);
}

var setBehaveIDOfParents = function (elem, behavID) {
    var elemHref = "";

    if ($(elem).length) {
        elemHref = $(elem).attr("href");
        elemTxt = "undefined";

        //if no href is found, this function should not be used so exit out of this function
        if (elemHref.length == 0) {
            return;
        }

        //get the text of the element
        if (elem.children().length > 1 && elem.children().first()[0].textContent.length > 0) {
            elemTxt = tagging.util.formatStr(elem.children().first()[0].textContent);
        }

        var parentElem = $(elem).closest("[data-js-href=\'" + elemHref + "\']");

        //if the parentElem exists and this code has not run on it before
        if ($(parentElem).length && $(parentElem).not("[data-bi-flag=true]").length) {
            $(parentElem).not("[data-bi-flag=true]").mousedown(function (e) {
                var foundLink = $(this).find("a");

                if ($(e.target).closest('a').is('a') || $(e.target).is('a') || $(e.target).closest('button').is('button') || $(e.target).is('button')) {
                    e.preventDefault();
                    return;
                }

                var overrideValues = {
                    behavior: behavID,
                    contentTags: {
                        contentName: elemTxt,
                    }
                };

                // Manually fire JSLL
                awa.ct.capturePageAction(this, overrideValues);
            });
        } else {
            $(elem).attr("data-bi-bhvr", behavID);
        }
        $(elem).attr("data-bi-flag", "true");

        //Incase there are links under a parent with "valid" hrefs we only want to add the event one time
        if ($(parentElem).length) {
            $(parentElem).attr("data-bi-flag", "true");
        };

    }
};

var handleDataJSHrefs = function (eventData, elem) {
    try {
      //A diffrent custom rule adds an event on this(these) page(s) so don't add this click event
      if (pagesToExclude.test(window.location.href)) {
        return;
      }
      
        //If the event is being exicuted on a link or button, break out of this funtion and let jsll handel the event instead of firing an extra call
        if ($(eventData.target).closest('a').is('a') || $(eventData.target).is('a') || $(eventData.target).closest('button').is('button') || $(eventData.target).is('button')) {
            eventData.preventDefault();
            return;
        }

        var linkInElem = $("a", elem);

        var elemHref = $(elem).attr("data-js-href");
        var elemTxt = "undefined";

        //if no href is found, this function should not be used so exit out of this function
        if (elemHref.length == 0) {
            return;
        }

        //if the "section" has more than 1 link inside of it, stop running this code, because at best the links "should" need to go to the same location
        if (linkInElem.length > 1) {
            try {
                tagging.util.debugLog("Error tagging data-js-href sections. There were multiple links in the section. The text associated with this error is: " + $(elem).text().trim());
            } finally { //using finally instead of catch because either way, this function should stop running 
                return;
            }
        } else if (linkInElem.length == 0) { //because there is no link in the secrion for a name, just use the href
            elemTxt = elemHref;
        } else {
            if (linkInElem.children().length > 1 && linkInElem.children().first()[0].textContent.length > 0) { //get the text of the element
                elemTxt = tagging.util.formatStr(linkInElem.children().first()[0].textContent);
            } else {
                elemTxt = tagging.util.formatStr(linkInElem);
            }
        }

        var overrideValues = {
            contentTags: {
                contentName: elemTxt,
            }
        };

        // Manually fire JSLL
        awa.ct.capturePageAction(elem, overrideValues);
    } catch (e) {
        tagging.util.debugLog("Error tagging data-js-href sections. Error: " + e);
    };
};

//Because data-js-href shows up after the code runs, we want a mouse down click to trigger code to look for those links
try {
    $("main").mousedown(function (e) {
        $(PartReferralSelectror).not("[data-bi-flag=true]").each(function () {
            setBehaveIDOfParents($(this), "PARTNERREFERRAL")
        });
        $(PurchaseSelector).not("[data-bi-flag=true]").each(function () {
            setBehaveIDOfParents($(this), "PURCHASE")
        });
        $(DownloadSelector).not("[data-bi-flag=true]").each(function () {
            setBehaveIDOfParents($(this), "DOWNLOAD")
        });
    });
    //fire data-js-href calls
    $("main").on("mousedown", "[data-js-href]", function (eventData) {
        handleDataJSHrefs(eventData, $(this));
    })

} catch (e) {
    tagging.util.debugLog("Error tagging data-js-href Referrals. Error: " + e);
}
});
