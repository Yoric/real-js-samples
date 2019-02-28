_satellite.pushAsyncScript(function(event, target, $variables){
  window.tagging = window.tagging || {};

window.tagging.jsllConfig = window.tagging.jsllConfig || {};

window.tagging.jsllConfig = {
    autoCapture: {
        lineage: true,
        resize: true,
        scroll: true
    },
    coreData: {
        appId: "msedu",
        market: window.location.toString().match(/\w{2}-\w{2}/gi) != null ? window.location.toString().match(/\w{2}-\w{2}/gi)[0] : ""
    }
};

try {
    if (typeof (awa) == 'undefined') {
        jQuery.ajax('https://az725175.vo.msecnd.net/scripts/jsll-4.js', { dataType: "script", cache: true })
            .done(function (script, textStatus) {
                awa.init(window.tagging.jsllConfig);
            })
    }
} catch (e) {

}

window.tagging.data = window.tagging.data || {};
(function (td) {
    //functionality to track deployment versions
    td.deploymentInfoList = [];
    td.addDeploymentInfo = function (inDeploymentName, inCodeVersion) {
        td.deploymentInfoList.push(inDeploymentName + ": " + inCodeVersion);
    };
    td.addDeploymentInfo("msedutaggingframework", "2017nov07v1");

    var lang_loc = window.location.toString().match(/\w{2}-\w{2}/gi);

    var splitVar = "";

    if (lang_loc && lang_loc[0]) {
        td.langLoc = lang_loc[0];
        splitVar = lang_loc[0].split("-");
        if (splitVar[0]) {
            td.lang = splitVar[0];
        } else {
            td.lang = "";
        }
        if (splitVar[1]) {
            td.loc = splitVar[1];
        } else {
            td.loc = "";
        }
    } 
    
    td.getPageTitle = function () {
        var pageTitle = $("[property='og:title']").attr("content");
        if (pageTitle) {
            td.pageName = pageTitle;
        } else {
            td.pageName = "Education";
        }
    };

})(window.tagging.data);

//** Base JSLL functionality
window.tagging.jsll = window.tagging.jsll || {};
(function (tj) {
    tj.JSLLReady = false;
    tj.setPageviewMetaTags = function () {
        //no common metatags identified - all set in custom function if present
        //check for custom metatags
        if (typeof tj.setCustomPageviewMetaTags === "function") {
            tj.setCustomPageviewMetaTags();
        }
    };
    tj.queuedCustomEvents = [];
    tj.processCustomEventQueue = function () {
        var i = tj.queuedCustomEvents.length;
        while (i--) {
            tj.processCustomEventFromArray(tj.queuedCustomEvents[i]);
        }
        tj.queuedCustomEventsProcessed = true;
    };
    tj.processCustomEventFromArray = function (inArray) {
        if (typeof inArray == "undefined" || inArray === null || inArray.length === 0) {
            tu.reportEnsError("processCustomEventFromArray called with no inArray");
            return;
        }
        if (!tj.JSLLReady && !window.awa) {
            tj.queuedCustomEvents.push(inArray);
            return;
        }
        awa.ct.captureContentPageAction(inArray);
    };
    tj.queuedCustomUpdates = [];
    tj.processCustomContentUpdateQueue = function () {
        var i = tj.queuedCustomUpdates.length;
        while (i--) {
            tj.processCustomContentUpdateFromArray(tj.queuedCustomUpdates[i]);
        }
        tj.queuedCustomUpdatesProcessed = true;
    };
    tj.processCustomContentUpdateFromArray = function (inArray) {
        if (typeof inArray == "undefined" || inArray === null || inArray.length === 0) {
            tu.reportEnsError("processCustomEventFromArray called with no inArray");
            return;
        }
        if (!tj.JSLLReady && !window.awa) {
            tj.queuedCustomUpdates.push(inArray);
            return;
        }
        awa.ct.captureContentUpdate(inArray);
    };
    tj.init = function (appid) {
        tj.config = {
            autoCapture: {
                scroll: "true",
                lineage: "true"
            },
            coreData: {
                appId: appid
            }
        };
        tj.setPageviewMetaTags();
        window.awa.init(tj.config);
        tj.JSLLReady = true;
    };
    tj.load = function (appid) {
        tu.loadScriptCallback("//az725175.vo.msecnd.net/scripts/jsll-4.js", function (tj, appid) {
            return function () {
                tj.init(appid);
                setTimeout(function () {
                    tj.processCustomEventQueue();
                    tj.processCustomContentUpdateQueue();
                }, 1000);
            };
        }(tj, appid));
    };
}(window.tagging.jsll));

//** Common Utilities
window.tagging.util = window.tagging.util || {};
(function (td, tu) {
    tu.debugLogToConsole = false;
    tu.debugLogMsgs = [];
    tu.debugLog = function (inMsg) {
        tu.debugLogMsgs.push(inMsg);
        if (tu.debugLogMsgs.length > 50)
            tu.debugLogMsgs.shift();
        if (tu.debugLogToConsole)
            console.log(inMsg)
    };

    tu.reportEnsError = function (inMsg) {
        td.ensErrMsg = "tu.reportError\x3d" + inMsg;
        tu.debugLog(td.ensErrMsg);
    };

    //helper function to trim and lowercase string, or return an alternate value if that result is empty
    tu.formatStr = function (inValue, inAltValue) {
        if (!inValue) {
            inValue = inAltValue || "";
        } else if (typeof inValue == "string") {
            inValue = inValue.toLowerCase();
        } else if (typeof inValue == "object" && inValue instanceof jQuery) {
            inValue = inValue.text().toLowerCase();
        } else {
            inValue = inValue.toString().toLowerCase();
        }
        inValue = jQuery.trim(inValue);
        if (!inValue) {
            inValue = inAltValue || "";
        }
        return inValue;
    };

    //This is how formatStr is named for some other Tagging groups in Microsoft
    tu.tlcStr = function (inValue, inAltValue) {
        return tu.formatStr(inValue, inAltValue)
    };
    tu.tclStr = function (inValue, inAltValue) {
        return tu.formatStr(inValue, inAltValue)
    };
    if (typeof window.jQuery !== "function") {
        td.jQueryLoadedPrior = false;
        tu.reportEnsError("tagging_core: jQuery not loaded")
    }
    tu.createCookie = function (name, value, days) {
        var expires;
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            expires = "; expires=" + date.toGMTString();
        } else {
            expires = "";
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    };
    tu.readCookie = function (name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(";");
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == " ") c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    };
    tu.deleteCookie = function (name) {
        tu.createCookie(name, "", -1);
    };

    tu.getMetaTagContent = function (inMTag, inMTValue) {
        try {
            var mtContent = $("meta[" + inMTag + "='" + inMTName + "']");
            mtContent = mtContent.length > 0 ? mtContent[mtContent.length - 1].content : null;
            return mtContent;
        } catch (e) {
            return null;
        }
    };
    tu.setMetaTag = function (inMTName, inMTContent) {
        if (!inMTName || !inMTContent) {
            return;
        }
        $("head").append(
          "<meta name='" + inMTName + "' content='" + inMTContent + "'>"
        );
    };
    tu.getQueryStringValue = function (name) {
        return decodeURIComponent(window.location.href.replace(new RegExp("^(?:.*[&\\?]" +
        encodeURIComponent(name).replace(/[\.\+\*]/g, "\\$&") +
        "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
    },
    tu.loadScript = function (script) {
        var tjJS = document.createElement('SCRIPT');
        tjJS.setAttribute('src', script);
        tjJS.setAttribute('type', 'text/javascript');
        document.body.appendChild(tjJS);
    };
    tu.loadScriptCallback = function (script, callback) {
        var tjJS = document.createElement('SCRIPT');
        var done = false;
        tjJS.setAttribute('src', script);
        tjJS.setAttribute('type', 'text/javascript');

        document.body.appendChild(tjJS);
        tjJS.onload = tjJS.onreadystatechange = function () {
            if (!done && typeof callback === "function" && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
                done = true;
                callback.apply();
            }
        };
    };

})(window.tagging.data, window.tagging.util);
});
