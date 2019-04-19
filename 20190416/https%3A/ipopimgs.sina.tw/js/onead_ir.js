// ipop - OneAD IR

request_isip=function(){
    window.is_requesting_isip = true;
    var ONEAD = {};
    window.ONEAD = ONEAD;
    ONEAD.isDfpMode = true;
    (function () {
     
    var slot= document.getElementById('oneadIRTag');
    
    var slots = ['div-inread-ad'];
    for (var i = slots.length - 1; i >= 0; i--) {
        var s = document.createElement('div');
        s.id = slots[i];

        if (window.frameElement) {
            ONEAD.isDfpIframeMode = true;
            window.frameElement.parentNode.insertBefore(
                s,
                window.frameElement.parentNode.children[0]
                )
        } else {
            slot.appendChild(s);
        }
    }

    ONEAD.channel = 21;
    ONEAD.volume = 0.05; // range is 0 to 1 (float)
    ONEAD.slot_limit = { width: 946, height: 402 };
    // optional(s)
    ONEAD.slot_limit_multiple = {
        inread: {
            width: 600,
            height: 368
        }
    };

    ONEAD.response_freq = {
        start: 1,
        step: 1
    };

    ONEAD.response_freq_multiple = {
        inread: '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50'
    };

    ONEAD.uid = "1000121";
    ONEAD.external_url = "//onead.onevision.com.tw/"; // base_url, post-slash is necessary
    ONEAD.wrapper = 'ONEAD_player_wrapper';
    ONEAD.wrapper_multiple = {
        instream: "ONEAD_player_wrapper", // equals to inpage
        inread: "ONEAD_inread_wrapper",
        incover: "ONEAD_incover_wrapper"
    };

    ONEAD.cmd = ONEAD.cmd || [];
    ONEAD.cmd.push(function () {
        ONEAD.ONEAD_slot('div-inread-ad','inread');
    });

    // 這個函式名稱是固定的，廣告播放完畢會呼叫之
    if ( parent.window.changeADState === undefined ){
        parent.window.changeADState=[];
    }
    parent.window.changeADState.push(function (obj) {
        if (obj.newstate == 'COMPLETED' || obj.newstate == 'DELETED') {//this is IP
            if (ONEAD.play_mode == 'incover') {
                // remove the dimming block
                 ONEAD.ONEAD_cleanup(ONEAD.play_mode);
            } else {
                 ONEAD.ONEAD_cleanup();
            }

            setTimeout(function () {
                slot.style.display = 'none';
            }, 400);
        }
    });

    if (parent.ONEAD_on_get_response===undefined){
        parent.ONEAD_on_get_response=[];
    }
    parent.ONEAD_on_get_response.push(function (params) {
        if (params !== null) {
            slot.style.width = 'auto';
            slot.style.height = 'auto';
            slot.style.margin = '0 auto';
            if ( params.play_mode  == 'inread' ) {
                // OneAD MIR 廣告文中插播
                ONEAD.parser_content('oneadIRTag','artiBlock',0,0.5,0);
            }            
        }
        if (ONEAD.isip_index != 0) {parent.window.ONEAD_is_window_onload = true;}
    });

    ONEAD.parser_content = function (slot_div, content_div, content_class_index, percent_number, ignore_number) {
        //看要抓的物件名稱是 id 還是 class 用不同的抓法
        var div_content = parent.document.getElementsByClassName(content_div)[content_class_index];
        if (div_content === undefined) {
            div_content = parent.document.getElementById(content_div);
            if (div_content === null) {
                return;
            }
            if (percent_number > 1) {
                return;
            }
        }
        //var div_content = parent.document.getElementById(content_div);
        var content_length = div_content.children.length - ignore_number;
        var count = parseInt(content_length * percent_number);
        var childNode = div_content.children[count];
        var div = parent.document.getElementById(slot_div);
        if (childNode instanceof HTMLElement) {
            //節點前或後，看媒體情況調整
            div_content.insertBefore(div, childNode);
            //div_content.insertAfter(div,childNode);  
        } else {
            div_content.appendChild(div);
        }

    }

if(parent.window.ONEADs===undefined){
    parent.window.ONEADs=[];
}
ONEAD.isip_index = parent.window.ONEADs.length;
parent.window.ONEADs.push(ONEAD);

(function () {
     var src = '//ad-specs.guoshipartners.com/static/js/isip.js';

    var js = document.createElement('script');
    js.async = true;
    js.onload = function () {
        if (ONEAD.isDfpIframeMode) {
            for (var k in parent.window) {
                if (k.indexOf('ONEAD_') !== -1) {
                    window[k] = parent.window[k];
                }
            }
        }

    };
    js.type = 'text/javascript';
    js.src = src;
    var node = document.getElementsByTagName('script')[0];
    node.parentNode.insertBefore(js, node.nextSibling); // insert after
})();

})();
}
var check_requesting_isip = function(window){
    if ( window.is_requesting_isip !== undefined ){
        if(window.is_requesting_isip){
            setTimeout(function(){
                check_requesting_isip(window.frameElement === null? parent.window: window );
            }, 300);
        }
        else{
             request_isip();
        }
    }
    else{
        request_isip();
    }
}

check_requesting_isip(window.frameElement === null? parent.window: window );
