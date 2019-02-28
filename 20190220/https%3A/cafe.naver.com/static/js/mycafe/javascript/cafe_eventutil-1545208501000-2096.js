var EventUtil = new Object;
EventUtil.addEventHandler = function (oTarget, sEventType, fnHandler) {
    if (oTarget.addEventListener) {
        oTarget.addEventListener(sEventType, fnHandler, false);
    } else if (oTarget.attachEvent) {
        oTarget.attachEvent("on" + sEventType, fnHandler);
    } else {
        oTarget["on" + sEventType] = fnHandler;
    }
};
        
EventUtil.removeEventHandler = function (oTarget, sEventType, fnHandler) {
    if (oTarget.removeEventListener) {
        oTarget.removeEventListener(sEventType, fnHandler, false);
    } else if (oTarget.detachEvent) {
        oTarget.detachEvent("on" + sEventType, fnHandler);
    } else { 
        oTarget["on" + sEventType] = null;
    }
};

EventUtil.formatEvent = function (oEvent) {

    if (typeof oEvent.charCode == "undefined") {
        oEvent.charCode = (oEvent.type == "keypress") ? oEvent.keyCode : 0;
        oEvent.isChar = (oEvent.charCode > 0);
    }
    
    if (oEvent.srcElement && !oEvent.target) {
        oEvent.eventPhase = 2;
        oEvent.pageX = oEvent.clientX + document.body.scrollLeft;
        oEvent.pageY = oEvent.clientY + document.body.scrollTop;
        
        if (!oEvent.preventDefault) {
                oEvent.preventDefault = function () {
                    this.returnValue = false;
                };
        }

        if (oEvent.type == "mouseout") {
            oEvent.relatedTarget = oEvent.toElement;
        } else if (oEvent.type == "mouseover") {
            oEvent.relatedTarget = oEvent.fromElement;
        }

        if (!oEvent.stopPropagation) {
                oEvent.stopPropagation = function () {
                    this.cancelBubble = true;
                };
        }
        
        oEvent.target = oEvent.srcElement;
        oEvent.time = (new Date).getTime();
    
    }
    
    return oEvent;
};

EventUtil.getEvent = function() {
    if (window.event) {
        return this.formatEvent(window.event);
    } else {
        return EventUtil.getEvent.caller.arguments[0];
    }
};
