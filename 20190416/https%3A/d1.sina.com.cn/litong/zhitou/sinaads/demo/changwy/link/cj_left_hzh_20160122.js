//coding by lingchen on Oct 27th 2012

//modify by wenyi on 2016/01/22


var hzh = {};

hzh.flag = 0;

hzh.divid = "ad_44099";

hzh.pdps = "PDPS000000044099";

hzh.surround_num = 800; 

hzh.str_sum = 0;

hzh.str_temp = 0; 

hzh.p_num = 0; 

hzh.nodes = []; 

hzh.p_node = [];

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

hzh.main_container = hzh.$("#artibody"); //����������

hzh.p = hzh.main_container.getElementsByTagName("p"); //����ڵ��p��ǩ����

hzh.div = hzh.main_container.getElementsByTagName("div"); //����ڵ��div��ǩ����

hzh.className = 'otherContent_01';

hzh.cssText = 'display:none;margin:10px 20px 10px 0px; float:left; overflow:hidden; clear:both; padding:4px;';

hzh.zhengwen_div = hzh.main_container.getElementsByTagName("div"); //����ڵ��div��ǩ����

hzh.noAD = hzh.$("#noAD");

hzh.ua = navigator.userAgent.toLowerCase();

hzh.isIE6 = /msie 6/.test(hzh.ua);

hzh.isIE7 = /msie 7/.test(hzh.ua);

hzh.iOS = /\((iPhone|iPad|iPod)/i.test(hzh.ua);

hzh.iOS_tag = 1;

//��ȡcookie

hzh.getAdCookie = function(N){

    var c=document.cookie.split("; ");

    for(var i=0;i<c.length;i++){var d=c[i].split("=");if(d[0]==N)return unescape(d[1]);}

    return "";

};

hzh.removeHTMLTag = function(str) {

    str = str.replace(/<\/?[^>]*>/g,''); //ȥ��HTML tag

    str = str.replace(/[ | ]*\n/g,'\n'); //ȥ����β�հ�

    //str = str.replace(/\n[\s| | ]*\r/g,'\n'); //ȥ���������

    str=str.replace(/&nbsp;/ig,'');//ȥ��&nbsp;

    return str;

}

hzh.Len = function(str){ //�����ַ���

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

hzh.insertAfter = function(newElement,targetElement) { //��װ�ĺ�庯��

    var parent = targetElement.parentNode;

    if (parent.lastChild == targetElement) {

        //������Ľڵ���Ŀ��Ԫ�أ���ֱ����ӡ�

        parent.appendChild(newElement);

    }else {

        //������ǣ��������Ŀ��Ԫ�ص���һ���ֵܽڵ��ǰ�档Ҳ����Ŀ��Ԫ�صĺ��档

        parent.insertBefore(newElement,targetElement.nextSibling);

    }

}

hzh.createHzh = function(){ //�������л����������div��ǩ��

    var oDiv = document.createElement("div");

	oDiv.id = hzh.divid;

    oDiv.className = hzh.className;

    oDiv.style.cssText = hzh.cssText;

	oDiv.innerHTML = '<ins class="sinaads" id="Sinads49447" data-ad-pdps="'+hzh.pdps+'" data-ad-status="async"></ins>';

    return oDiv;    

}

hzh.createSpanHzh = function(){ //�������л����������span��ǩ��

    var oDiv = document.createElement("span");

	oDiv.id = hzh.divid;

    oDiv.className = hzh.className;

    oDiv.style.cssText = hzh.cssText;

	oDiv.innerHTML = '<ins class="sinaads"  id="Sinads49447" data-ad-pdps="'+hzh.pdps+'" data-ad-status="async"></ins>';

    return oDiv;    

}

hzh.insertAd_after = function(insert_p){ //�����

    var cur_p = insert_p;

    hzh.insertAfter(hzh.createHzh(),cur_p);

}

hzh.insertSpanAd_after = function(insert_p){ //�����(span)

    var cur_p = insert_p;

    hzh.insertAfter(hzh.createSpanHzh(),cur_p);

}

hzh.insertAd_before = function(thisDiv){ //ǰ����

    var parent = thisDiv.parentNode;

    parent.insertBefore(hzh.createHzh(),thisDiv);

}

hzh.insertClear =function(insert_p){ //�����������div

    //�帡��div

    var oDivClear = document.createElement("div");

    oDivClear.style.fontSize = "0px";

    oDivClear.style.height = "0px";

    oDivClear.style.clear = "both";

    var last_p = insert_p;

    hzh.insertAfter(oDivClear,last_p);

}

hzh.nodePage = hzh.$(".page")[0];

hzh.nodeShare = hzh.$("#sinashareto");

//�ж����������Ƿ��з�ҳ����

hzh.hasPage = function(){

    if(hzh.nodePage){

        return true;

    }else{

        return false;

    }

}();

//�ж����������Ƿ��з�������

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

    if(hzh.div[i].innerHTML.indexOf('�鿴������ͼ��������ֻõ�ͼ��')!=-1){

        hzh.yule_node = hzh.div[i].parentNode;

    }

}

//����1��ɸѡ�����������ڷ�ҳ�������������֮�������ӽڵ�(�������ı��ڵ�)

for(var i=0;i<hzh.main_container.childNodes.length;i++){

    if(hzh.main_container.childNodes[i].nodeType==1){

        var sel_childNodes = hzh.main_container.childNodes[i];

        //�ж����������Ƿ��С��鿴������ͼ��������ֻõ�ͼ�����ڵ�

        var yule_txt = '�鿴������ͼ��������ֻõ�ͼ��';

        if(sel_childNodes.id=="sinashareto" || sel_childNodes.innerHTML.indexOf(yule_txt)!=-1 || sel_childNodes.className=="page"){

            break;

        }else{

            hzh.nodes.push(hzh.main_container.childNodes[i]);

        }

    }

}

//����2��

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

    //����������class

    var classList = ['weiboListBox otherContent_01','contentPlayer','blk_video_news','hdFigureWrap','artical-player-wrap','sdFigureWrap','img_wrapper','fin_reference'];

    for(var k=0;k<classList.length;k++){

        if(zhengwen_node_class==classList[k]){

            nodeClassTag = true;

            break;  

        }

    }

    //ɸѡ���������ڵ�һ���������ӽڵ��������ӽڵ��е�λ�ã��ų�����jpgͼƬ��script��ǩ��table��ǩ��΢����������p��ǩ���о������ԡ��Լ������ϵĽڵ㣩

    if((zhengwen_img_arr[0] && (zhengwen_img_arr[0].src.indexOf(".jpg")!=-1 || zhengwen_img_arr[0].src.indexOf(".png")!=-1)) || zhengwen_table_node=="table" || zhengwen_child_table_node[0] || zhengwen_p_script_arr[0] || zhengwen_p_align==true || nodeClassTag == true){

        hzh.img_num = i+1;

        break;

    }

    else{

        hzh.img_num = i;

    }

}

//����3��ɸѡʣ���ӽڵ��б�ǩ��Ϊp�Ľڵ�

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

    //ie6,7���ж��Ƿ�����Ƶ�������о�ֱ�Ӳ�����Ƶ�����ĺ���(����ʹ��span������ǩ)

    //�󸡶���������ʽ��blk_ntchack1

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

        //ɸѡ����p����Ϊ0ʱ�������ڷ�ҳ����֮�ϣ����û�з�ҳ�������������֮�ϣ����û�з���������ֱ�Ӳ��������������

        if(hzh.p_node.length<1){

            if(hzh.hasPage == true){

                hzh.insertAd_before(hzh.nodePage);

                hzh.insertClear(hzh.$("#"+hzh.divid));

            }else if(hzh.yule_node){ //����Ƶ������ڵ�

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

        //ɸѡ����p����Ϊ1ʱ�������ڸ�p��ǰ�� 

        else if(hzh.p_node.length==1){

            hzh.insertClear(hzh.p_node[hzh.p_node.length-1]);

            hzh.insertAd_before(hzh.p_node[hzh.p_node.length-1]);

        }

        //ɸѡ����p��������1ʱ�������ָ�������

        else if(hzh.p_node.length>1){

            //�ַ�����С����ѻ����������ڵ�һ��p��ǰ��

            if(hzh.str_sum<=hzh.surround_num){

                hzh.insertClear(hzh.p_node[hzh.p_node.length-1]);

                hzh.insertAd_before(hzh.p_node[0]);

            }else{

                //�ַ���������hzh.surround_num���Ӻ���ǰ����ѡ����p����ַ������ܺͳ���800�󣬹����ڸ�p��ǰ��

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

	adScript.src = '//d9.sina.com.cn/litong/zhitou/sinaads/release/sinaads.js';

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