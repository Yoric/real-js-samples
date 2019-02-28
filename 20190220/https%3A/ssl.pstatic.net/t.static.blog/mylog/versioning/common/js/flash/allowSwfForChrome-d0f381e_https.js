/**
 * Created by Naver on 2015-08-24. ver.1.2 by jukyung.kim@nhn.com
 *  For Chrome 45.0.2454.46
 */
var allowSwfForChrome = (function(W)
{
    var win = W;
    var returnObj = {};

    if (win.navigator.appVersion.indexOf("Chrome") == -1)
    {
        returnObj.allow = function(){};
    }
    else
    {
        var doc = W["document"];

        win.addEventListener("blur", onBlur);
        win.addEventListener("focus", onFocus);

        var dummyArr = [];
        var LIMIT_WIDTH = 398;
        var LIMIT_HEIGHT = 298;
        var dummy;
        var dummyDiv;

        function allowChromeFlash($url, $w, $h, $delayTime, $focusDelayTime) {
            if ($w < LIMIT_WIDTH || $h < LIMIT_HEIGHT)
            {
                if (dummyDiv == null) {
                    dummy = doc.createElement("embed");
                    dummy.wmode = "transparent";
                    dummy.style.visibility = "hidden";

                    dummyDiv = doc.createElement("div");
                    dummyDiv.style.visibility = "hidden";
                    dummyDiv.style.position = "absolute";
                    dummyDiv.style.left = 0;
                    dummyDiv.style.top = 0;
                }
                else {
                    dummy = dummy.cloneNode(false);
                    dummyDiv = dummyDiv.cloneNode(false);
                }
                
                window.dd = dummyDiv;

                dummy.src = $url;
                dummyDiv.style.width = dummy.style.width = (LIMIT_WIDTH + 1) + "px";
                dummyDiv.style.height = dummy.style.height = (LIMIT_HEIGHT + 1) + "px";

                dummyDiv.appendChild(dummy);
                dummyDiv.delayTime = $delayTime || 2000;
                dummyDiv.focusDelayTime = $delayTime || 100;
                dummyDiv.addEventListener("DOMNodeInserted", onInsert);
                document.body.appendChild(dummyDiv);
                dummyArr.push(dummyDiv);
            }
        }

        function onBlur() {
            removeDummyEvent();
        }

        function onFocus() {
            reAppendDummy(0);
            removeDummyEvent();
        }

        function removeDummyEvent() {
            win.removeEventListener("blur", onBlur);
            win.removeEventListener("focus", onFocus);
            dummyDiv = null;
            dummy = null;
            dummyArr = null;
            delete  returnObj.allow;
            returnObj = null;
        }

        function reAppendDummy($idx) {
            if ($idx < dummyArr.length) {
                var i = $idx;
                var c = dummyArr[i];
                c.delayTime = c.focusDelayTime;
                c.addEventListener("DOMNodeInserted", onInsert);
                doc.body.appendChild(c);
                reAppendDummy(++i);
            }
        }

        function onInsert($e) {
            var target = $e.target;
            target.removeEventListener("DOMNodeInserted", onInsert);
            setTimeout(function () {
            	if(!doc.body.contains(target)){
            		return;
            	}
                doc.body.removeChild(target);
            }, target.delayTime);
        }

        returnObj.allow = allowChromeFlash;
    }

    return returnObj;
})(window);
