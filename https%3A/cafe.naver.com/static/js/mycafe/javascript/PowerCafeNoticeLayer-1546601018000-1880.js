/**
 * 개별 카페 레이어 알림을 처리한다.
 */
var PowerCafeNoticeLayer = Class({
    name: "PowerCafeNoticeLayer",

    __init: function (htParam) {
        var aNotices = htParam.aNotices;

        for (var i = 0; i < aNotices.length; i++) {
            if (aNotices[i].show) {
                this._showNotice(aNotices[i].name);
                this._bindEvent(aNotices[i].name);
            }
        }
    },

    _bindEvent: function (sNoticeName) {
        Event.register($(sNoticeName + 'CloseBtn'), 'click', this.closeNotice.bindForEvent(this, sNoticeName));
        Event.register($(sNoticeName + 'PermanentClose'), 'change', this.togglePermanentClose.bindForEvent(this, sNoticeName));
    },

    _showNotice: function (sNoticeName) {
        $('dim').className = 'bg_begin dim_open dim50';
        $(sNoticeName).style.display = '';
    },

    togglePermanentClose: function (we, sNoticeName) {
        if (this._isChekcedPermanentClose(sNoticeName)) {
            $(sNoticeName + 'PermanentClose').className = 'chk checked';
        } else {
            $(sNoticeName + 'PermanentClose').className = 'chk';
        }
    },

    closeNotice: function (we, sNoticeName) {
        if (this._isChekcedPermanentClose(sNoticeName)) {
            this._setPermanentClose();
        }

        $('dim').className = 'bg_begin';
        $(sNoticeName).style.display = 'none';
    },

    _setPermanentClose: function () {
        var sQueryString = "?code=" + $('permanentCode').value + "&cafeId=" + $('cafeId').value;
        var nomorexhr = new XMLHttpRequest();
        nomorexhr.open('GET', '/RegisterNoMoreShow.nhn' + sQueryString);
        nomorexhr.onload = function() {};
        nomorexhr.send();
    },

    _isChekcedPermanentClose: function (sNoticeName) {
        return document.getElementById(sNoticeName + 'PermanentCloseChk').checked;
    }
});

