/**
 * 安全处理openDeeplink()函数调用
 * @author quantone
 * @version 1.0
 */
(function(global) {
    var DEEPLINK_BRIDGE = "deeplink_bridge";
    var DEEPLINK_TYPE = "deeplink";

    // Empty function
    var emptyFn = function() {};

    /**
     * 构造复合结构数据
     *
     * @param {string} deeplinkUrl
     * @param {string} fallbackUrl
     * @returns {(string|Array)}
     */
    var landingpageWrapper_ = function(deeplinkUrl, fallbackUrl) {
        if (global[DEEPLINK_BRIDGE]["disabled"])
            return fallbackUrl;
        // if (deeplinkUrl == "1") {
        //     deeplinkUrl = "com.suning.SuningEBuy://m.suning.com?adTypeCode=1002&adId=" + fallbackUrl;
        // } else if (deeplinkUrl == "2"){
        //     deeplinkUrl = "suning://m.suning.com/index.html?adTypeCode=1002&adId=" + fallbackUrl;
        // }
        return [DEEPLINK_TYPE, [deeplinkUrl, fallbackUrl]];
    };

    /**
     * stringify复合结构数据
     *
     * @param {string} deeplinkUrl
     * @param {string} fallbackUrl
     * @returns {(string|undefined)}
     */
    var stringifyLandingpageWrapper_ = function(deeplinkUrl, fallbackUrl) {
        if (global[DEEPLINK_BRIDGE]["disabled"])
            return fallbackUrl;

        try {
            return JSON.stringify(landingpageWrapper_(deeplinkUrl, fallbackUrl));
        } catch(e) {
            return undefined;
        }
    };

    /**
     *
     * @param {string} strStringifyLandingpageWrapper_
     * @returns {?(string|Object)}
    */
    var parseLandingpageWrapper_ = function(strStringifyLandingpageWrapper_) {
        if (global[DEEPLINK_BRIDGE]["disabled"])
            return strStringifyLandingpageWrapper_;

        try {
            var r = JSON.parse(strStringifyLandingpageWrapper_);
            if (!Array.isArray(r)) {
                r = null;
            }
            return r;
        } catch (e) {
            return null;
        }
    };

    /**
     * 是否为复合结构数据（由landingpageWrapper_(deeplinkUrl, fallbackUrl)生成）
     *
     * @param {Object} landingpageWrapper
     * @returns {boolean}
     */
    var isLandingpageWrapper_ = function(landingpageWrapper) {
        if (global[DEEPLINK_BRIDGE]["disabled"])
            return false;

        return typeof landingpageWrapper == "object" &&
            landingpageWrapper.constructor == Array &&
            landingpageWrapper[0] === DEEPLINK_TYPE;
    };


    /**
     * 如果是复合结构数据, 进入done, 否则fallback
     *
     * @param {?Object} landingpageWrapper
     * @param {(?function(Array, function(string, string)))} done
     * @param {(?function(string, Array))} fallback
     * @returns {(string|boolean)} 错误信息（错误信息代号）或true
     */
    var ifLandingpageWrapper_ = function(landingpageWrapper, done, fallback) {
        var errorMsgId;
        done = done || emptyFn;
        fallback = fallback || emptyFn;

        if (global[DEEPLINK_BRIDGE]["disabled"]) {
            errorMsgId = "disable_landingpageWrapper";
            fallback && fallback(errorMsgId, landingpageWrapper);
            return errorMsgId;
        }

        if (landingpageWrapper) {
            if (isLandingpageWrapper_(landingpageWrapper)) {
                var data = landingpageWrapper[1] || [];
                if (typeof openDeeplink == "function") {
                    done(data, openDeeplink);
                    return true;
                } else {
                    errorMsgId = "undefined_openDeeplink";
                    fallback(errorMsgId, data);
                    return errorMsgId;
                }
            } else {
                try {
                    // Try parse if landingpageWrapper is from JSON.stringify
                    var landingpageWrapper1 = JSON.parse(String(landingpageWrapper));
                    if (!Array.isArray(landingpageWrapper1)) {
                        landingpageWrapper1 = null;
                    }
                    return ifLandingpageWrapper_(landingpageWrapper1, done, fallback);
                } catch (e) {
                    errorMsgId = "not_landingpageWrapper";
                    fallback(errorMsgId, landingpageWrapper);
                    return errorMsgId;
                }
            }
        } else {
            errorMsgId = "not_landingpageWrapper";
            fallback(errorMsgId, landingpageWrapper);
            return errorMsgId;
        }
    };

    /**
     * 如果是复合结构数据, 进入openDeeplink, 否则fallback
     *
     * @param {Array} landingpageWrapper
     * @param {(?function(string, Array))} fallback
     * @returns {(string|boolean)} 错误信息（错误信息代号）或true
     */
    var openDeeplink_ = function(landingpageWrapper, fallback) {
        var errorMsgId;
        fallback = fallback || emptyFn;

        if (global[DEEPLINK_BRIDGE]["disabled"]) {
            errorMsgId = "disable_landingpageWrapper";
            fallback(errorMsgId, landingpageWrapper);
            return errorMsgId;
        }

        return ifLandingpageWrapper_(landingpageWrapper, function(data, openDeeplink) {
            openDeeplink.apply(global, data);
        }, function(msg, data) {
            fallback(msg, data);
        });
    };

    // Export APIs
    global[DEEPLINK_BRIDGE] = {};
    global[DEEPLINK_BRIDGE]["disabled"] = false;
    global[DEEPLINK_BRIDGE]["landingpageWrapper"] = landingpageWrapper_;
    global[DEEPLINK_BRIDGE]["stringifyLandingpageWrapper"] = stringifyLandingpageWrapper_;
    global[DEEPLINK_BRIDGE]["parseLandingpageWrapper"] = parseLandingpageWrapper_;
    global[DEEPLINK_BRIDGE]["openDeeplink"] = openDeeplink_;
    global[DEEPLINK_BRIDGE]["ifLandingpageWrapper"] = ifLandingpageWrapper_;
})(window);