/* 1,66,376 2016-01-13 16:04:57 */ 

//coding by lingchen on Oct 27th 2012

//modify by wenyi on 2016/01/11

//姝ｆ枃涓湁鏂扮粍浠跺鍣ㄩ渶瑕佽繃婊ゆ椂璇锋悳绱⑩€滈粦鍚嶅崟瀹瑰櫒class鈥濇坊鍔�

var hzh = {};

hzh.flag = 0;

hzh.divid = "ad_44086";

hzh.pdps = "PDPS000000056053";

hzh.surround_num = 800; //鐜粫鏂囧瓧鏈€浼樺瓧绗︽€绘暟

hzh.str_sum = 0;

hzh.str_temp = 0; 

hzh.p_num = 0; //姝ｆ枃椤祊鏍囩鑺傜偣涓暟

hzh.nodes = []; //鎵€鏈夊瓙鑺傜偣

hzh.p_node = [];//瀛愯妭鐐圭殑p鏍囩鏁扮粍锛堜笉鍖呭惈瀛欒妭鐐癸級

hzh.img_num = null;

//hzh.$ = function(id){return document.getElementById(id);}

hzh.$ = function(vArg){

    this.elements = [];

    switch(typeof vArg){

        case 'function': //window.onload = vArg

            hzh.addEvent(window,'load',vArg);

            break;

        case 'string':

            switch(vArg.charAt(0)){

                case '#': //id

                    var obj = document.getElementById(vArg.substring(1));

                    return obj;

                    break;

                case '.': //class
                    this.elements = hzh.getClass(document,vArg.substring(1));

                    return this.elements;   

                    break;
                    
                default: //tagName  

                    this.elements = document.getElementsByTagName(vArg);

                    return this.elements;   

            }

            break;

        case 'object':

            this.elements.push(vArg);

            return this.elements;   

    }

}

hzh.getClass = function(oParent,sClass){

    var parent = oParent || document;

    var re = new RegExp('\b'+sClass+'\b');

    var aEles = parent.getElementsByTagName('*');

    var arr = [];

    for(var i=0; i<aEles.length; i++){
        if(re.test(aEles[i].className)){arr.push(aEles[i]);}
    }
    return arr;

}

hzh.addEvent = function(obj, sEv, fn){

    if(obj.attachEvent){

        obj.attachEvent('on'+sEv,function(){

            fn.call(obj);   

        }); 

    }

    else{

        obj.addEventListener(sEv, fn, false);   

    }

}

hzh.main_container = hzh.$("#artibody"); //正文处ID
hzh.p = hzh.main_container.getElementsByTagName("p"); //
hzh.div = hzh.main_container.getElementsByTagName("div"); //
hzh.className = 'otherContent_01';
hzh.cssText = 'display:none;margin:10px 20px 10px 0px; float:left; overflow:hidden; clear:both; padding:4px;';
hzh.zhengwen_div = hzh.main_container.getElementsByTagName("div"); //
hzh.noAD = hzh.$("#noAD");
hzh.ua = navigator.userAgent.toLowerCase();
hzh.isIE6 = /msie 6/.test(hzh.ua);
hzh.isIE7 = /msie 7/.test(hzh.ua);
hzh.iOS = /\((iPhone|iPad|iPod)/i.test(hzh.ua);
hzh.iOS_tag = 1;
//鑾峰彇cookie
hzh.getAdCookie = function(N){
    var c=document.cookie.split("; ");
    for(var i=0;i<c.length;i++){var d=c[i].split("=");if(d[0]==N)return unescape(d[1]);}
    return "";
};
hzh.removeHTMLTag = function(str) {//杩囨护瀛楃涓查噷鐨則ag锛岀┖鐧界瓑
    str = str.replace(/<\/?[^>]*>/g,''); //鍘婚櫎HTML tag
    str = str.replace(/[ | ]*\n/g,'\n'); //鍘婚櫎琛屽熬绌虹櫧
    //str = str.replace(/\n[\s| | ]*\r/g,'\n'); //鍘婚櫎澶氫綑绌鸿
    str=str.replace(/&nbsp;/ig,'');//鍘绘帀&nbsp;
    return str;

}

hzh.Len = function(str){ //璁＄畻瀛楃鏁�

     var i,sum;

     sum=0;

     for(i=0;i<str.length;i++){

         if ((str.charCodeAt(i)>=0) && (str.charCodeAt(i)<=255))

             sum=sum+1;

         else

             sum=sum+2;

     }

     return sum;

}

hzh.insertAfter = function(newElement,targetElement) { //灏佽鐨勫悗鎻掑嚱鏁�

    var parent = targetElement.parentNode;

    if (parent.lastChild == targetElement) {

        //濡傛灉鏈€鍚庣殑鑺傜偣鏄洰鏍囧厓绱狅紝鍒欑洿鎺ユ坊鍔犮€�

        parent.appendChild(newElement);

    }else {

        //濡傛灉涓嶆槸锛屽垯鎻掑叆鍦ㄧ洰鏍囧厓绱犵殑涓嬩竴涓厔寮熻妭鐐圭殑鍓嶉潰銆備篃灏辨槸鐩爣鍏冪礌鐨勫悗闈€�

        parent.insertBefore(newElement,targetElement.nextSibling);

    }

}

hzh.createHzh = function(){ //鍒涘缓鐢讳腑鐢诲箍鍛婂鍣紙div鏍囩锛�

    var oDiv = document.createElement("div");

    oDiv.id = hzh.divid;

    oDiv.className = hzh.className;

    oDiv.style.cssText = hzh.cssText;

    oDiv.innerHTML = '<ins class="sinaads" id="Sinads49447" data-ad-pdps="'+hzh.pdps+'" data-ad-status="async"></ins>';

    return oDiv;    

}

hzh.createSpanHzh = function(){ //鍒涘缓鐢讳腑鐢诲箍鍛婂鍣紙span鏍囩锛�

    var oDiv = document.createElement("span");

    oDiv.id = hzh.divid;

    oDiv.className = hzh.className;

    oDiv.style.cssText = hzh.cssText;

    oDiv.innerHTML = '<ins class="sinaads"  id="Sinads49447" data-ad-pdps="'+hzh.pdps+'" data-ad-status="async"></ins>';

    return oDiv;    

}

hzh.insertAd_after = function(insert_p){ //鍚庢彃骞垮憡

    var cur_p = insert_p;

    hzh.insertAfter(hzh.createHzh(),cur_p);

}

hzh.insertSpanAd_after = function(insert_p){ //鍚庢彃骞垮憡(span)

    var cur_p = insert_p;

    hzh.insertAfter(hzh.createSpanHzh(),cur_p);

}

hzh.insertAd_before = function(thisDiv){ //鍓嶆彃骞垮憡

    var parent = thisDiv.parentNode;

    parent.insertBefore(hzh.createHzh(),thisDiv);

}

hzh.insertClear =function(insert_p){ //鎻掑叆娓呴櫎娴姩div

    //娓呮诞鍔╠iv

    var oDivClear = document.createElement("div");

    oDivClear.style.fontSize = "0px";

    oDivClear.style.height = "0px";

    oDivClear.style.clear = "both";

    var last_p = insert_p;

    hzh.insertAfter(oDivClear,last_p);

}

hzh.nodePage = hzh.$(".page")[0];

hzh.nodeShare = hzh.$("#sinashareto");

//鍒ゆ柇涓诲鍣ㄩ噷鏄惁鏈夊垎椤靛鍣�

hzh.hasPage = function(){

    if(hzh.nodePage){

        return true;

    }else{

        return false;

    }

}();

//鍒ゆ柇涓诲鍣ㄩ噷鏄惁鏈夊垎浜鍣�

hzh.hasShare = function(){

    var shareFlag = false;

    for(var i=0;i<hzh.div.length;i++){

        if(hzh.div[i].id=="sinashareto"){

            shareFlag = true;

            break;  

        }

    }

    return shareFlag;

}();

hzh.yule_node = null;

for(var i=0;i<hzh.div.length;i++){

    if(hzh.div[i].innerHTML.indexOf('鏌ョ湅鏇村缇庡浘璇疯繘鍏ュū涔愬够鐏浘闆�')!=-1){

        hzh.yule_node = hzh.div[i].parentNode;

    }

}

//姝ラ1锛氱瓫閫夊嚭涓诲鍣ㄥ唴鍦ㄥ垎椤靛鍣ㄦ垨鍒嗕韩瀹瑰櫒涔嬩笂鎵€鏈夊瓙鑺傜偣(涓嶅寘鍚枃鏈妭鐐�)

for(var i=0;i<hzh.main_container.childNodes.length;i++){

    if(hzh.main_container.childNodes[i].nodeType==1){

        var sel_childNodes = hzh.main_container.childNodes[i];

        //鍒ゆ柇涓诲鍣ㄩ噷鏄惁鏈夆€滄煡鐪嬫洿澶氱編鍥捐杩涘叆濞变箰骞荤伅鍥鹃泦鈥濊妭鐐�

        var yule_txt = '鏌ョ湅鏇村缇庡浘璇疯繘鍏ュū涔愬够鐏浘闆�';

        if(sel_childNodes.id=="sinashareto" || sel_childNodes.innerHTML.indexOf(yule_txt)!=-1 || sel_childNodes.className=="page"){

            break;

        }else{

            hzh.nodes.push(hzh.main_container.childNodes[i]);

        }

    }

}

//姝ラ2锛�

for(var i=hzh.nodes.length-1;i>=0;i--){

    var zhengwen_img_arr = hzh.nodes[i].getElementsByTagName("img");

    var zhengwen_p_script_arr = [];

    var zhengwen_p_align = false;

    if(hzh.nodes[i].nodeName.toLowerCase() == 'p'){

        zhengwen_p_script_arr = hzh.nodes[i].getElementsByTagName("script");

        if(hzh.nodes[i].getAttribute("align")=='center'){

            zhengwen_p_align = true;

        }

    }

    var zhengwen_table_node = hzh.nodes[i].nodeName.toLowerCase();

    var zhengwen_child_table_node = hzh.nodes[i].getElementsByTagName("table");

    var zhengwen_node_class = hzh.nodes[i].className;

    var nodeClassTag = false;

    //榛戝悕鍗曞鍣╟lass

    var classList = ['weiboListBox otherContent_01','contentPlayer','blk_video_news','hdFigureWrap','artical-player-wrap','sdFigureWrap','img_wrapper'];

    for(var k=0;k<classList.length;k++){

        if(zhengwen_node_class==classList[k]){

            nodeClassTag = true;

            break;  

        }

    }

    //绛涢€夊嚭涓诲鍣ㄥ唴绗竴涓櫧鍚嶅崟瀛愯妭鐐瑰湪鏁翠釜瀛愯妭鐐逛腑鐨勪綅缃紙鎺掗櫎鍚湁jpg鍥剧墖锛宻cript鏍囩锛宼able鏍囩锛屽井鍗氬鍣紝鈥減鏍囩閲屾湁灞呬腑灞炴€р€濅互鍙婂畠浠ヤ笂鐨勮妭鐐癸級

    if((zhengwen_img_arr[0] && (zhengwen_img_arr[0].src.indexOf(".jpg")!=-1 || zhengwen_img_arr[0].src.indexOf(".png")!=-1)) || zhengwen_table_node=="table" || zhengwen_child_table_node[0] || zhengwen_p_script_arr[0] || zhengwen_p_align==true || nodeClassTag == true){

        hzh.img_num = i+1;

        break;

    }

    else{

        hzh.img_num = i;

    }

}

//姝ラ3锛氱瓫閫夊墿浣欏瓙鑺傜偣涓爣绛惧悕涓簆鐨勮妭鐐�

for(var i=hzh.img_num;i<hzh.nodes.length;i++){

    if(hzh.nodes[i].nodeName.toLowerCase() == 'p'){

        hzh.p_node.push(hzh.nodes[i]);

    }

}

if(hzh.p_node.length>0){

    for(i=0;i<hzh.p_node.length;i++){ 

        var html = hzh.p_node[i].innerHTML; 

        var txt = hzh.removeHTMLTag(html);

        var p_str_num = hzh.Len(txt);

        hzh.str_sum += p_str_num;

        hzh.p_num++;

    }

}

if(!hzh.noAD){

    //ie6,7涓嬪垽鏂槸鍚︽湁瑙嗛瀹瑰櫒锛屾湁灏辩洿鎺ユ彃鍦ㄨ棰戝鍣ㄧ殑鍚庨潰(骞朵笖浣跨敤span瀹瑰櫒鏍囩)

    //宸︽诞鍔ㄥ鍣紝鏍峰紡鍚峛lk_ntchack1

    var lFloatArr = hzh.$('.blk_ntchack1');

    var lFloatTarget = null;

    if(lFloatArr.length==1){

        lFloatTarget = lFloatArr[0];    

    }else if(lFloatArr.length>1){

        lFloatTarget = lFloatArr[lFloatArr.length-1];   

    }

    if((hzh.isIE6||hzh.isIE7) && lFloatTarget||( hzh.$("#p_player")||(hzh.$("#J_Article_Player")&&hzh.$("#J_Article_Player").parentNode.className.indexOf('blk_video_news')!=-1))){

        if(hzh.$("#p_player")){

            var oSpan = hzh.$("#p_player").parentNode;

            hzh.insertSpanAd_after(oSpan);

        }else if(lFloatTarget){

            hzh.insertSpanAd_after(lFloatTarget);

        }

        else{

            var oSpan = hzh.$("#J_Article_Player").parentNode;

            hzh.insertSpanAd_after(oSpan);

        }

    }

    else{

        //绛涢€夊嚭鐨刾涓暟涓�0鏃跺皢骞垮憡鎻掑湪鍒嗛〉瀹瑰櫒涔嬩笂锛涘鏋滄病鏈夊垎椤碉紝鎻掑叆鍒嗕韩瀹瑰櫒涔嬩笂锛涘鏋滄病鏈夊垎浜鍣紝鐩存帴鎻掑湪涓诲鍣ㄧ殑鏈€鍚�

        if(hzh.p_node.length<1){

            if(hzh.hasPage == true){

                hzh.insertAd_before(hzh.nodePage);

                hzh.insertClear(hzh.$("#"+hzh.divid));

            }else if(hzh.yule_node){ //濞变箰棰戦亾鐗规畩鑺傜偣

                hzh.insertAd_before(hzh.yule_node);

                hzh.insertClear(hzh.$("#"+hzh.divid));

            }else if(hzh.hasShare == true){

                hzh.insertAd_before(hzh.nodeShare);

                hzh.insertClear(hzh.$("#"+hzh.divid));

            }else{

                hzh.main_container.appendChild(hzh.createHzh());

                hzh.insertClear(hzh.$("#"+hzh.divid)); 

            }

        }

        //绛涢€夊嚭鐨刾涓暟涓�1鏃跺皢骞垮憡鎻掑湪璇鐨勫墠闈� 

        else if(hzh.p_node.length==1){

            hzh.insertClear(hzh.p_node[hzh.p_node.length-1]);

            hzh.insertAd_before(hzh.p_node[hzh.p_node.length-1]);

        }

        //绛涢€夊嚭鐨刾涓暟澶т簬1鏃惰繘琛屾枃瀛椾釜鏁拌绠�

        else if(hzh.p_node.length>1){

            //瀛楃鎬绘暟灏忎簬鏈€浣崇幆缁曟暟锛屾彃鍦ㄧ涓€涓猵鐨勫墠闈�

            if(hzh.str_sum<=hzh.surround_num){

                hzh.insertClear(hzh.p_node[hzh.p_node.length-1]);

                hzh.insertAd_before(hzh.p_node[0]);

            }else{

                //瀛楃鎬绘暟澶т簬hzh.surround_num锛屼粠鍚庡悜鍓嶉亶鍘嗛€夊嚭鐨刾閲岀殑瀛楃鏁帮紝鎬诲拰瓒呰繃800鍚庯紝骞垮憡鎻掑湪璇鐨勫墠闈�

                for(var i=hzh.p_num-1; i>=0; i--)

                {

                    var txt_last = hzh.removeHTMLTag(hzh.p_node[i].innerHTML);

                    var txt_last_num = hzh.Len(txt_last);

                    hzh.str_temp += (parseInt(txt_last_num/30) + 1)*30;

                    if(hzh.str_temp < hzh.surround_num){

                        hzh.p_num--;

                    }

                    else{

                        hzh.insertClear(hzh.p_node[hzh.p_node.length-1]);

                        hzh.insertAd_before(hzh.p_node[hzh.p_num-1]);

                        break;

                    }

                }

            }

        }

    }

}

hzh.hzh_div = hzh.$("#"+hzh.divid);

(function(){

    var adScript = document.createElement('script');

    adScript.src = 'http://d9.sina.com.cn/litong/zhitou/sinaads/release/sinaads.js';

    document.getElementsByTagName('head')[0].appendChild(adScript);

})();

(sinaads = window.sinaads || []).push({
    element: document.getElementById('Sinads49447'),

    params : {

      sinaads_success_handler : function (element, data, config) { 

            if(hzh.iOS&&(hzh.hzh_div.innerHTML.toLowerCase().indexOf('.swf')!=-1||hzh_div.innerHTML.toLowerCase().indexOf('<iframe')!=-1)){

                hzh.hzh_div.style.display = 'none'; 

            }else{

                hzh.hzh_div.style.display = 'block'; 

            }
            var hzhDiv = document.getElementById(hzh.divid);
            hzhDiv.style.width = config.sinaads_ad_width + "px";
            hzhDiv.style.height = config.sinaads_ad_height + "px";

            /*try{

                _ssp_ad.load(hzh.divid,function(){

                    hzh.hzh_div.style.display = 'none';

                });

            }catch(e){

                hzh.hzh_div.style.display = 'none';

            }*/

      },

      sinaads_fail_handler : function () {

      }

    }   

});