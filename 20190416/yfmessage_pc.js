(function(window) {
    var historyitems   = [];
    var recommenditems = [];

    function showHistoryItems() {
        $('#history').css('display', 'block');
        
        var ul1 = $('#historyItems1');
        var ul2 = $('#historyItems2');
        for (var i = 0; i < historyitems.length; i += 1) {
            if (i == 4) {
                $('#more_history').css('display', 'block');
            }
            if (i < 4) {
                makeTitle(ul1, historyitems[i], i, 'history');
            } else {
                makeTitle(ul2, historyitems[i], i, 'history');
            }
        }
    }

    function showRecommendItems() {
        $('#recommend').css('display', 'block');

        var ul1 = $('#recommendItems1');
        var ul2 = $('#recommendItems2');
        for (var i = 0; i < recommenditems.length; i += 1) {
            if (i == 4) {
                $('#more_recommend').css('display', 'block');
            }
            if (i < 4) {
                makeTitle(ul1, recommenditems[i], i, 'recommend');
            } else {
                makeTitle(ul2, recommenditems[i], i, 'recommend');
            }
        } 
    }

    function makeTitle(ul, item, i, type) {
        var li = $('<li>').addClass('fortuneMenu');
        var div = $('<div>').addClass('fortuneItem');

        // サムネイルとタイトル
        var a   = $('<a>');
        a.attr('href', item['baseurl']);
        if (type == 'recommend') {
            a.attr('data-ylk',  'pos:' + (parseInt(i) + 1) +';'
                              + 'rcmid:m_for01' + ';'
                              + 'rcconid:'  + item['cid'] + ';'
                              + 'rctype:'   + item['type'] + ';'
                              + 'rcbucket:' + item['bucket'] + ';'
                              + 'rcfriid:'  + item['fromItemId']);
        } else {
            a.attr('data-ylk',  'pos:' + (parseInt(i) + 1));
        }
        var img = $('<img>').addClass('tellerImage').attr({'width':'45', 'height':'45', 'src': 'https://ch-fortune.c.yimg.jp/' + item['imagepath_90']});
        a.append(img);
        var title = $('<span>').text(item['item']);
        a.append(title);
        div.append(a);

        // 価格
        var p = $('<p>').addClass('priceBox').text(item['price']);
        var premiumprice = $('<span>').addClass('premium').text(item['price_discount']);
        p.append(premiumprice);
        div.append(p);

        li.append(div);
        ul.append(li);
    }

    window.addEventListener('message', function(e) {
        if (e.origin != "http://charge.fortune.yahoo.co.jp" && e.origin != "https://charge-fortune.yahoo.co.jp") {
            return;
        }

        historyitems = e.data['history_fortune'];
        recommenditems = e.data['recommend_fortune'];

        if (historyitems != null && historyitems.length > 0) {
            showHistoryItems();
        }
        if (recommenditems != null && recommenditems.length > 0) {
            showRecommendItems();
        }

    }, false);

    window.addEventListener('load', function(e) {
        var url = (location.protocol==="https:") ? "https://charge-fortune.yahoo.co.jp":"http://charge.fortune.yahoo.co.jp";
        var messageElm = document.getElementById("messageIframe").contentWindow;
        messageElm.postMessage("fortune", url);
    }, false);

}(this))
