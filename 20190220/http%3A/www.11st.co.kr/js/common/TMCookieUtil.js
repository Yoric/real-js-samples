var TMCookieUtil = function() {
    var COOKIE_ID_ARR = ["TP", "TD", "TT", "TM", "TW"]; // !DO NOT CHANGE SORT ORDER
    var HOST_DOMAIN = ".11st.co.kr";
    var TD_PERIOD = 1; // 1Day
    var TT_PERIOD = 365 * 10; // 10Year
    var TM_PERIOD = TD_PERIOD * 30; // 1Month
    var TW_PERIOD = TD_PERIOD * 7; // 1Week
    var CK_SP = "#"; // seperator for each sub cookies
    var VL_SP = "|"; // seperator for bewteen name of cookies and there value

    // strip sharp(#) on begining of string and end of string, also trim white
	// space
    String.prototype.stripSharp = function() {
        return this.replace(/^[\#\s]+|[\#\s]+$/g, "");
    }

    // trim white space
    String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, "");
    }

    /**
	 * Estimate whether the param value is empty or not
	 */
    function isEmpty(param) {
        if(!isNaN(param)) {
            param = param.toString();
        }
        if(param == null || param.trim() == "" || param.trim() == "undefined" || (typeof param == "undefined")) {
            return true;
        } else {
            return false;
        }
    }

    /**
	 * get expire date. period -> day
	 */
    function getExpireDate(period) {
        var date = new Date();
        date.setDate(date.getDate() + period);
        var nextDay = new Date(date.getFullYear(),date.getMonth(),date.getDate(), 0, 0, 0);
        return nextDay.toGMTString();
    }

    /**
	 * Create cookie with string value of sub cookie samples of newCookieStr
	 * "foo1|bar1#foo2#foo3#foo4|bar2" !! Cookie name and value string must be
	 * encode !! use encodeURIComponent()
	 */
    function createNewCookie(ckIdIndex, newCookieStr) {
        var cookieStr = "";
        var expireDate = "";
        if(!isEmpty(newCookieStr)) {
            cookieStr += COOKIE_ID_ARR[ckIdIndex] + "=" + encodeURIComponent(newCookieStr.stripSharp()) + ";";
            if(ckIdIndex == 1){
                expireDate = getExpireDate(TD_PERIOD);
            }else if(ckIdIndex == 2){
                expireDate = getExpireDate(TT_PERIOD);
            }else if(ckIdIndex == 3){
                expireDate = getExpireDate(TM_PERIOD);
            }else if(ckIdIndex == 4){
                expireDate = getExpireDate(TW_PERIOD);
            }
            if(!isEmpty(expireDate)) {
                cookieStr += " expires=" + expireDate + ";"
            }
            cookieStr += " domain=" + HOST_DOMAIN + "; path=/;"
            document.cookie = cookieStr;
        } else {
            // remove cookie, when there is no sub cookie at all
            document.cookie = COOKIE_ID_ARR[ckIdIndex] + "= " + "; expires=" + getExpireDate(-1) + "; domain=" + HOST_DOMAIN + "; path=/";
        }
    }

    /**
	 * get matched value from arr with specified seperator
	 */
    function getMatchedStr(strArr, searchStr, seperator) {
        if(strArr != null && strArr.length > 0 && !isEmpty(searchStr)) {
            for(var index = 0; index < strArr.length; index++) {
                var tempArr = strArr[index].trim().split(seperator);
                if(tempArr[0] == searchStr) {
                    return decodeURIComponent(tempArr[1].trim());
                }
            }
        }
        return "";
    }

    return {
        add : function(ckIdIndex, cookieName, cookieValue){
            /* add cookie */
            if(isEmpty(cookieName)) { return false; }
            var newCookieArr;
            if(isEmpty(cookieValue)) {
                // remove '#' from cookieName
                var regExsp = new RegExp("\\" + CK_SP, "g"); // RegExp =>
																// /\#/g
                newCookieArr = cookieName.replace(regExSp, "").trim().split(VL_SP);
            } else {
                // remove '#', '|' from cookieName and cookieValue
                var regExSp = new RegExp("\\" + CK_SP + "|" + "\\" + VL_SP, "g"); // RegExp
																					// =>
																					// /\#|\|/g
                newCookieArr = [cookieName.replace(regExSp, "").trim(), cookieValue.replace(regExSp, "").trim()];
            }
            var classCookieStr = ""; // whole cookie string (ex>
										// foo1#foo2|bar2)
            var newCookieStr = "";
            if(TMCookieUtil.isExistCookie(COOKIE_ID_ARR[ckIdIndex])) {
                // remove exists cookie and add new cookie with value if
				// possible
                classCookieStr = TMCookieUtil.getCookie(COOKIE_ID_ARR[ckIdIndex]);
                var subCookieArr = classCookieStr.split(CK_SP);
                for(var index = subCookieArr.length - 1; index >= 0; index--) {
                    if(subCookieArr[index].split(VL_SP)[0] == newCookieArr[0]) {
                        subCookieArr.splice(index, 1);
                    }
                }
                subCookieArr.push(newCookieArr.join(VL_SP));
                newCookieStr = subCookieArr.join(CK_SP);
            } else {
                // create new cookie with cookie class
                newCookieStr = newCookieArr.join(VL_SP);
            }
            // The value of newCookieStr will be encoded in function
			// 'createNewCookie'
            createNewCookie(ckIdIndex, newCookieStr);
        },
        clear : function(ckIdIndex){
            /* clear cookie - remove TD, TP, TT */
            createNewCookie(ckIdIndex, "");
        },
        remove : function(ckIdIndex, cookieName){
            /* remove name, value pair of sub cookie */
            if(isEmpty(cookieName)) { return false; }
            var CkCdValues = "";
            var delFlag = false;
            var classCookies = TMCookieUtil.getCookie(COOKIE_ID_ARR[ckIdIndex]); // TD=foo|bar#foo2|bar2#foo3#foo4|bar4...
            var subCookies = classCookies.split(CK_SP); // ["cookieName|cookieValue",
														// "foo|bar", "foo2",
														// ...]
            if(subCookies != null && subCookies.length > 0) {
                // remove matched cookie in reverse order
                for(var index = subCookies.length - 1; index >= 0; index--) {
                    if(subCookies[index].split(VL_SP)[0] == cookieName) {
                         subCookies.splice(index, 1);
                    }
                }
            }
            var splicedCookieStr = subCookies.join(CK_SP);
            // The value of newCookieStr will be encoded in function
			// 'createNewCookie'
            createNewCookie(ckIdIndex, splicedCookieStr);
            if(!TMCookieUtil.isExist(ckIdIndex, cookieName)){
                delFlag = true;
            }
            return delFlag;
        },
        isExistCookie : function(ckId){
            /* Estimate whether exists or not with inserted parameter */
            if(!isNaN(ckId)) {
                ckId = COOKIE_ID_ARR[ckId];
            }
            var cookieArr = document.cookie.split(";");
            if(cookieArr != null && cookieArr.length > 0) {
                for(var index = 0; index < cookieArr.length; index++) {
                    var tempArr = cookieArr[index].trim().split("=");
                    if(tempArr[0] == ckId) {
                        return true;
                    }
                }
            }
            return false;
        },
        isExist : function(ckIdIndex, cookieName){
            /* Find sub cookie name, if exist then return true */
            if(isEmpty(cookieName)) { return false; }
            var classCookieValues = TMCookieUtil.getCookie(COOKIE_ID_ARR[ckIdIndex]);
            var subCookieArr = classCookieValues.split(CK_SP);
            if(subCookieArr != null && subCookieArr.length > 0) {
                for(var index = 0; index < subCookieArr.length; index++) {
                    if(subCookieArr[index].split(VL_SP)[0] == cookieName) {
                        return true;
                    }
                }
            }
            return false;
        },
        getCookie : function(ckId){
            /* get string of sub cookies name,value pair */
            if(!isNaN(ckId)) {
                ckId = COOKIE_ID_ARR[ckId];
            }
            var cookieString = "";
            if(!isEmpty(ckId)) {
                var cookieArr = document.cookie.split(";");
                cookieString = getMatchedStr(cookieArr, ckId, "=").stripSharp();
            }
            return cookieString;
        },
        getSubCookie : function(ckIdIndex, cookieName){
            /* get value of sub cookie */
            if(isEmpty(cookieName)) { return false; }
            var classCookies = TMCookieUtil.getCookie(COOKIE_ID_ARR[ckIdIndex]);
            var subCookieValue = "";
            var subCookies = classCookies.split(CK_SP);
            if(subCookies != null && subCookies.length > 0) {
                for(var index = 0; index < subCookies.length; index++) {
                    if(subCookies[index].split(VL_SP)[0] == cookieName) {
                        var subCookie = subCookies[index].split(VL_SP);
                        if(subCookie.length > 1) {
                            subCookieValue = subCookie[1];
                            return subCookieValue;
                        }
                    }
                }
            }
            return subCookieValue;
        },
        allShowCookie : function(ckIdIndex){
            /* DO NOT USE THIS METHOD, USE 'getCookie' INSTEAD */
            var cookie = TMCookieUtil.getCookie(eval(ckIdIndex));
            return cookie;
        }
// ,
// subCkClearTemp : function(ckIdIndex, cookieName){
// /* DO NOT USE THIS METHOD, USE 'remove' INSTEAD */
// TMCookieUtil.remove(ckIdIndex, cookieName + "-");
// }
    };
}();