(function() {
    function init() {
        var pagePath = window.location.pathname + window.location.search;
        if(getCookie("Flt20170306")) return;

        var params = {
            url : "http://www.11st.co.kr/jsp/browsing/event/floatingEvent.jsp?inflowUrl="+encodeURIComponent(pagePath),
            method: "post",
            success : function(result) {
                try {
                    if(result) {
                        var obj = jQuery.parseJSON(result);
                        if (result) {
                            displayBanner(obj);
                        }
                    }
                } catch(e) {}
            },
            error: function(e) {}
        };
        callAjax(params)
    };

    function displayBanner(data) {
        if(data.floatIcon) {
            var left = (jQuery(window).width() - 1200);
            left = (left < 0) ? '700px' : '50%';
            var margin = (left < 0) ? '0' : '400px';

            var iconHtml = '<div id="floatWrap" style="position:absolute; width:120px; height:120px; top:660px; left:'+left+';margin-left:'+margin+';z-index:20">';
            iconHtml += '<div class="closeArea" id="floatCloseArea" style="position:absolute; top:0; right:0; width:40px; height:40px; z-index:20;">';
            iconHtml += '<a href="javascript:void(0);"><img src="http://i.011st.com/ui_img/cm_display/2016/07/MPSM/120-15/float/close.png" alt=""></a>';
            iconHtml += '</div>';
            iconHtml += '<div class="bnrArea" id="floatIconArea" style="position:relative;width:120px; height:120px; z-index:10;">';
            iconHtml += '<a href="javascript:void(0);"><img src="'+data.floatIcon+'" alt="" width="120" height="120"></a>';
            iconHtml += '</div>';
            iconHtml += '</div>';

            jQuery('body').append(iconHtml);

            var floatIconArea = document.getElementById('floatIconArea');

            jQuery('#floatIconArea').bind('click', {callback : eventProc, callbackdata: data}, function(event) {
                event.data.callback(event.data.callbackdata);
                jQuery('#floatWrap').hide();
                setCookieExpireToday("Flt20170306", "Y");
                ga('send', 'event', 'PC_메인 소 레이어팝업', '배너_클릭' , '배너_클릭');

            })
            jQuery('#floatCloseArea').click(function() {
                jQuery('#floatWrap').hide();
                setCookieExpireToday("Flt20170306", "Y");
                ga('send', 'event', 'PC_메인 소 레이어팝업', '닫기_버튼' , '닫기_버튼');
            });
        }
    }

    function eventProc(data) {
        var procUrl = data.eventProcUrl;
        if(procUrl) {
            document.location.href = procUrl;
        } else {
            document.location.href = 'https://login.11st.co.kr/login/Login.tmall?returnUrl='+encodeURIComponent(document.URL);
        }

    }

    function setCookie(cName, value, expiredays) {
        var todayDate = new Date();
        todayDate.setDate(todayDate.getDate() + expiredays);
        document.cookie = cName + "=" + escape(value) + "; path=/; expires="
            + todayDate.toGMTString() + ";";
    }

    function setCookieExpireToday(cName, value) {
        var todayDate = new Date();
        todayDate.setHours(23, 59, 59);
        document.cookie = cName + "=" + escape(value) + "; path=/; expires="
            + todayDate.toGMTString() + ";";
    }

    function getCookie(cName) {
        cName = cName + '=';
        var cookieData = document.cookie;
        var start = cookieData.indexOf(cName);
        var cValue = '';
        if(start != -1){
            start += cName.length;
            var end = cookieData.indexOf(';', start);
            if(end == -1)end = cookieData.length;
            cValue = cookieData.substring(start, end);
        }
        return unescape(cValue);
    }

    function callAjax(s) {
        var xhr = window.ActiveXObject ? new window.ActiveXObject('Microsoft.XMLHTTP') : new window.XMLHttpRequest();
        var method = s.method ? s.method : 'get';
        var async = s.async ? s.async : true;
        try {
            if (s.param && s.param != "") {
                xhr.open(method, url.url, async);
                var contentType = url.contentType ? s.contentType : "application/x-www-form-urlencoded";
                xhr.setRequestHeader("Content-type", contentType);
                xhr.setRequestHeader("Content-length", s.param.length);
                xhr.setRequestHeader("Connection", "close");
                xhr.send(s.param);
            } else {
                xhr.open(method, s.url, async);
                xhr.send(null);
            }

            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4) {
                    var data;
                    if (xhr.status == 200) {
                        data = xhr.responseText;
                        if(s.success) s.success(data);
                    }
                }
            };
        } catch (e){
            if(s.error) s.error(e);
        }
    };

    init();


})();
