/*
    * 依赖 /script/module/utils.js   thick_login登录封装、saleAttent关注公共方法
*/

var sidebarHtml = '<div class="s-jd-toolbar" style="opacity:0;">  '
+    '<span class="s-icon-more" title="" clstag="jshopmall|keycount|jsdcblan|jsa21"></span>'
+    '<div class="s-icon-list">       '
+        '<div class="s-header" data-widget="s-header"> '
+           '<span class="s-mt s-icon-header" data-before="\u6d3b\u52a8\u5927\u4fc3"></span>    '
+            '<div class="s-mc">   '
+                '<div class="s-list">      '
+                '</div>      '
+            '</div>   '
+        '</div>  '
+        '<div class="s-order" data-widget="s-order"> '
+           '<span class="s-mt s-icon-order" data-before="\u6211\u7684\u8ba2\u5355" clstag="jshopmall|keycount|jsdcblan|jsa1"><em></em></span>    '
+            '<div class="s-mc">   '
+                '<div class="s-user-info">'
+                    '<span class="s-img"><img src="//img13.360buyimg.com/cms/jfs/t5344/362/1429992154/16184/9c28e251/59100797Nfa981584.jpg" width="70" height="70"></span>'
+                   '<span class="s-name">Hi，<em></em><span></span></span>'
+                   '<span class="s-level"></span>'
+                '</div>'
+                '<div class="s-mt-sub">\u6211\u7684\u8ba2\u5355</div>     '
+                '<div class="s-list">      '
+                    '<div class="s-tips">       '
+                        '<span>\u60a8\u8fd8\u6ca1\u6709\u8ba2\u5355\u54e6\uff01</span>\u8d76\u5feb\u5230<a href="//www.jd.com" target="_blank">\u4eac\u4e1c\u9996\u9875</a>\u770b\u770b\u5427\uff01      '
+                    '</div> '
+                    '<ul class="s-li-con">'
+                    '</ul>'
+                   '<a href="//order.jd.com" target="_blank" class="s-btn" clstag="jshopmall|keycount|jsdcblan|jsa3">\u67e5\u770b\u5168\u90e8\u8ba2\u5355</a>'
+                '</div>      '
+               '<div class="s-track-list">'
+                   '<span class="s-close" title="\u5173\u95ed"></span>'
+                   '<table>'
+                       '<thead>'
+                           '<tr>'
+                               '<th width="65">\u5904\u7406\u65f6\u95f4</th>'
+                               '<th>\u5904\u7406\u4fe1\u606f</th>'
+                           '</tr>'
+                       '</thead>'
+                   '</table>'
+                   '<div class="s-list-area">'
+                       '<table>'
+                           '<tbody>'
+                           '</tbody>'
+                       '</table>'
+                   '</div>'
+               '</div> '
+            '</div>   '
+        '</div>  '
+        '<div class="s-attention" data-widget="s-attention">    '
+            '<span class="s-mt s-icon-attention" data-before="\u6211\u7684\u5173\u6ce8" clstag="jshopmall|keycount|jsdcblan|jsa4"><em></em></span>    '
+            '<div class="s-mc">     '
+                '<div class="s-mt-sub">'
+                '\u6211\u7684\u5173\u6ce8     '
+                '</div>     '
+                '<div class="s-list">      '
+                    '<div class="s-tab">       '
+                        '<a href="javascript:void(0)" class="s-first-child">\u5546\u54c1</a>'
+                        '<a href="javascript:void(0)">\u5e97\u94fa</a>'
+                        '<a href="javascript:void(0)">\u6d3b\u52a8</a>      '
+                    '</div>      '
+                    '<div class="s-con">       '
+                        '<div class="s-tab-con s-goods">        '
+                            '<div class="s-tips">         '
+                                '<span>\u60a8\u8fd8\u6ca1\u5173\u6ce8\u4efb\u4f55\u5546\u54c1\u54e6\uff01</span>\u8d76\u5feb\u5230<a href="//www.jd.com" target="_blank">\u4eac\u4e1c\u9996\u9875</a>\u770b\u770b\u5427\uff01        '
+                            '</div>        '
+                            '<ul class="s-li-con">        '
+                            '</ul>       '
+                        '</div>       '
+                        '<div class="s-tab-con s-mall">        '
+                            '<div class="s-tips">         '
+                                '<span>\u60a8\u8fd8\u6ca1\u5173\u6ce8\u4efb\u4f55\u5e97\u94fa\u54e6\uff01</span>\u8d76\u5feb\u5230<a href="//www.jd.com" target="_blank">\u4eac\u4e1c\u9996\u9875</a>\u770b\u770b\u5427\uff01        '
+                            '</div>        '
+                            '<ul class="s-li-con">        '
+                            '</ul>       '
+                        '</div>       '
+                        '<div class="s-tab-con s-sale">        '
+                            '<div class="s-tips">         '
+                                '<span>\u60a8\u8fd8\u6ca1\u5173\u6ce8\u4efb\u4f55\u6d3b\u52a8\u54e6\uff01</span>\u8d76\u5feb\u5230<a href="//www.jd.com" target="_blank">\u4eac\u4e1c\u9996\u9875</a>\u770b\u770b\u5427\uff01        '
+                            '</div>        '
+                            '<ul class="s-li-con">        '
+                            '</ul>       '
+                        '</div>      '
+                    '</div>     '
+                '</div>    '
+            '</div>   '
+        '</div>   '
+        '<div class="s-coupon" data-widget="s-coupon">    '
+            '<span class="s-mt s-icon-coupon" data-before="\u6211\u7684\u4f18\u60e0\u5238" clstag="jshopmall|keycount|jsdcblan|jsa9"><em></em></span>    '
+            '<div class="s-mc">'
+                '<div class="s-list"> '
+                    '<div class="s-scrollbar">'
+                    '<div class="s-t-text">\u6211\u7684\u8D44\u4EA7</div>'
+                    '<div class="s-asset">       '
+                        '<span class="s-first-child">\u4f59\u989d<em class="s-balance-num">0</em></span>'
+                        '<span>\u4eac\u8c46<em class="s-beans-num">0</em></span>'
+                        '<span>\u4f18\u60e0\u5238<em class="s-coupon-num">0</em></span>      '
+                    '</div>      '
+                    '<div class="s-tips">       '
+                        '<span>\u60a8\u8fd8\u6ca1\u6709\u4f18\u60e0\u5238\u54e6\uff01</span>\u8d76\u5feb\u5230<a href="//www.jd.com" target="_blank">\u4eac\u4e1c\u9996\u9875</a>\u770b\u770b\u5427\uff01      '
+                    '</div>      '
+                    '<a class="s-centre" href="//a.jd.com/" target="_blank" title="\u9886\u5238\u4E2D\u5FC3"></a>'
+                    '<ul class="s-li-con hide js-use"></ul>'
+                    '<ul class="s-li-con hide js-curt"></ul>'
+                    '<ul class="s-li-con hide js-got"></ul>'
+                    '</div>'
+                '</div>    '
+            '</div>   '
+        '</div>   '
+        '<div class="s-records" data-widget="s-records">    '
+            '<span class="s-mt s-icon-records" data-before="\u6211\u7684\u8db3\u8ff9" clstag="jshopmall|keycount|jsdcblan|jsa14"><em></em></span>    '
+            '<div class="s-mc">     '
+                '<div class="s-mt-sub">\u6211\u7684\u8db3\u8ff9</div>     '
+                '<div class="s-total">\u6211\u6d4f\u89c8\u8fc7\u7684<em></em>\u4ef6\u5546\u54c1</div>     '
+                '<div class="s-list">      '
+                    '<div class="s-tips">       '
+                        '<span>\u60a8\u8fd8\u6ca1\u7559\u4e0b\u8db3\u8ff9\u54e6\uff01</span>\u8d76\u5feb\u5230<a href="//www.jd.com" target="_blank">\u4eac\u4e1c\u9996\u9875</a>\u770b\u770b\u5427\uff01      '
+                    '</div>      '
+                    '<ul class="s-li-con">      '
+                    '</ul>     '
+                '</div>    '
+            '</div>   '
+        '</div> '
// +        '<div class="s-jimi" data-widget="s-jimi">    '
// +            '<span class="s-mt s-icon-jimi" data-before="\u6211\u7684JIMI" clstag="jshopmall|keycount|jsdcblan|jsa17"><em></em></span>    '
// +            '<div class="s-mc">     '
// +                '<div class="s-mt-sub">\u6211\u7684JIMI</div>       '
// +                '<div class="s-list">        '
// +               ''
// +                '</div>    '
// +            '</div>   '
// +        '</div>'
+        '<div class="s-im" data-widget="s-im">    '
+            '<span class="s-mt s-icon-im" data-before="\u8054\u7cfb\u5356\u5bb6" clstag="jshopmall|keycount|jsdcblan|jsa23"><em></em></span>    '
+            '<div class="s-mc">'
+            '</div>'
+        '</div>'
+        '<div class="s-cart" data-widget="s-cart">    '
+            '<span class="s-mt s-icon-cart" data-before="\u6211\u7684\u8d2d\u7269\u8f66" clstag="jshopmall|keycount|jsdcblan|jsa11"><em></em><span class="s-cart-text">购物车</span><span class="s-cart-num">0</span></span>    '
+            '<div class="s-mc">     '
+                '<div class="s-mt-sub">      '
+                    '\u6211\u7684\u8d2d\u7269\u8f66     '
+                '</div>     '
+                '<div class="s-list">      '
+                    '<div class="s-tips">       '
+                        '<span>\u60a8\u7684\u8d2d\u7269\u8f66\u8fd8\u662f\u7a7a\u7684\u54e6\uff01</span>\u8d76\u5feb\u5230<a href="//www.jd.com" target="_blank">\u4eac\u4e1c\u9996\u9875</a>\u770b\u770b\u5427\uff01      '
+                    '</div>      '
+                    '<ul class="s-li-con">      '
+                    '</ul>      '
+                    '<div class="s-addtocart">       '
+                        '<div class="s-total">        '
+                            '<span>\u5171<span class="s-num">0</span>\u4ef6\u5546\u54c1</span>&nbsp;&nbsp;<span>\u5171\u8ba1<span class="s-price">¥<em>0.00</em></span></span>       '
+                        '</div>       '
+                        '<a href="//cart.jd.com/cart/cart.html" target="_blank" class="s-btn" clstag="jshopmall|keycount|jsdcblan|jsa13">\u53bb\u8d2d\u7269\u8f66\u7ed3\u7b97</a>      '
+                    '</div>     '
+                '</div>    '
+            '</div>   '
+        '</div> '
+        '<div class="s-delivery J_deliveryWrap">'
+           '<a href="javascript:void(0)"><img src="//img11.360buyimg.com/cms/jfs/t18700/287/354288825/14626/767008ef/5a70238dNe2e06f4b.png"/></a>'
+        '</div>'
+    '</div>'
+    '<!-- 附属图标列表 -->'
+    '<div class="s-icon-extra">'
+        '<div class="s-extra-3d" data-widget="s-extra-3d">    '
+            '<span class="s-mt s-icon-extra-3d" data-before="3D\u5e97\u94fa" clstag="jshopmall|keycount|jsdcblan|jsa22" id="usage3D_iconTd" class="iconTd"><em></em></span>    '
+            '<div class="s-mc">'
+            '</div>'
+        '</div>'
+        '<div class="s-extra-share" data-widget="s-extra-share">'
+            '<span class="s-mt s-icon-extra-share" data-before="\u5206\u4eab" clstag="jshopmall|keycount|jsdcblan|jsa19"><em></em></span>'
+            '<div class="s-mc">'
+                '<div class="s-share-area">'
+                   '<div class="jQrCodeArea">'
+                       '<div class="qrWrap">'
+                           '<p class="qrPic"></p>'
+                           '<p class="qrDesc">微信扫码享优惠</p>'
+                       '</div>'
+                   '</div>'
+                '</div>'
+            '</div>'
+        '</div>'
+        '<div class="s-extra-attention" data-widget="s-extra-attention">    '
+            '<span class="s-mt s-icon-extra-attention" data-before="\u52a0\u5173\u6ce8"  data-id="" data-state="0" data-type="0" clstag="jshopmall|keycount|jsdcblan|jsa18"><em></em></span>    '
+            '<div class="s-mc">'
+            '</div>'
+        '</div>'
+        '<div class="s-extra-favorite" data-widget="s-extra-favorite">'
+            '<span class="s-mt s-icon-extra-favorite" data-before="\u6536\u85cf"><em></em></span>'
+            '<div class="s-mc">'
+            '</div>'
+        '</div>'
+        '<div class="s-extra-totop" data-widget="s-extra-totop">'
+            '<span class="s-mt s-icon-extra-totop" data-before="\u8fd4\u56de\u9876\u90e8" clstag="jshopmall|keycount|jsdcblan|jsa20"><em></em></span>'
+            '<div class="s-mc">'
+            '</div>'
+        '</div> '
+    '</div>'
+'</div>';

//document.body.innerHTML.replace(/((^|\s)+)([^\n\r]+)(\n|\r)/g, "+$1'$3'$4").replace(/^\+/g, "")

!function(w, $, undefined){
    /* 区分采销活动0、商家店铺1、商家活动2、自营店铺3、其他等 */
    /* 根据src地址，获取里面的type和appId */
    var APPTYPE = function(){
            var queryCss = '#jshopSidebar',
                domId = jQuery(queryCss),
                src = domId.attr('src'),
                result = {};        

        try{
            var searchString = src.split('?')[1],
                json = {};

                jQuery.each(searchString.split('&'),function(index,n){
                    if(n.indexOf('=') != -1){
                        var a = n.split('=');
                        json[a[0]] = a[1];
                    }
                });
            result.TYPE = parseInt(json.type);
            result.ID = json.id;
            result.CSSURL = src.split('?')[0].replace('.js', '.css');
            if(result.TYPE === 1 || result.TYPE === 3)  result.SHOPID = json.shopId;
        }catch(e){
            if($('#pageInstance_appId').length > 0){// 模块化后引用sidebar
                result.TYPE = 0;
                result.ID = appId;
                seajs.use('sidebarCss');
                return result;
            }
            result.TYPE = 1;
        }

        return result;
    }();

    /* 定义全局浏览器高度参数 0, 1, 2 */
    var screenSize;

    /* 根据不同屏幕高度，执行不同业务 */
    function resizeScale() {
        if ($(window).height() > 800 && $(window).height() <= 1050) {//一般液晶显示器
            return 0;
        } else if ($(window).height() > 1050) {//大屏幕显示器
            return 1;
        } else {//笔记本显示器
            return 2;
        }
    };

    /* 根据屏幕高度控制显示数量，默认2种 */
    function SHOWNUM1(){
        screenSize = resizeScale();

        if(screenSize == 0){
            return {
                orderNum : 5, attentionGoodsNum : 9, attentionMallNum : 5, attentionSaleNum : 9, couponNum : 8, cartNum : 7, historyNum : 9
            }
        }else if(screenSize == 1){
            return {
                orderNum : 5, attentionGoodsNum : 9, attentionMallNum : 5, attentionSaleNum : 9, couponNum : 8, cartNum : 7, historyNum : 9
            }
        }else{
            return {
                orderNum : 3, attentionGoodsNum : 5, attentionMallNum : 3, attentionSaleNum : 6, couponNum : 5, cartNum : 4, historyNum : 6
            }
        }
    };

    var SHOWNUM = SHOWNUM1();
    $(window).bind('resize', function(){
        SHOWNUM = SHOWNUM1();
    });

    /* 主体功能：订单、关注、优惠券、购物车、足迹、JIMI */
    var sidebar = function(){
        return {
            getHeader : function(arg){
                var param = jQuery.extend({
                    nodeParent : '.s-header',
                    nodeTitle : '.s-mt',
                    nodeCon : '.s-list',
                    domNodeTitle : '.s-sale-title',// 活动大促标题html
                    domNodeCon : '.s-sale-con',// 活动大促内容html
                    className : 's-show'
                },arg),
                that = jQuery(param.nodeParent),
                nodeTitle = that.find(param.nodeTitle),
                nodeCon = that.find(param.nodeCon),
                domNodeTitle = jQuery(param.domNodeTitle),
                domNodeCon = jQuery(param.domNodeCon);
                if(nodeCon.find(param.domNodeCon).length == 0){
                    nodeCon.append(domNodeCon);
                    //新增如果为ie低版本浏览器，再次重复调用加载  2016-08-29 thz
                    if(/msie (6|7|8).0/.test(window.navigator.userAgent.toLocaleLowerCase())){
                        domNodeCon.find("iframe").attr("src",domNodeCon.find("iframe").attr("src"));
                    }
                }
            },
            /**
             * @function：获取订单记录
             * @param arg
             * @author：luxingyuan@jd.com 2014-10-15
             */
            getOrder : function(arg){
                var param = jQuery.extend({
                    nodeParent : '.s-order',
                    nodeCon : '.s-list > ul',
                    domNode : 'li',
                    nodePhoto : '.s-user-info img',
                    nodeName : '.s-name em',
                    levelIcon: '.s-name span',
                    nodeLevel :  '.s-level',
                    urlUser : INTERFACE.actJshop.userExd + '?pin=',// 用户信息接口,
                    urlOrder : INTERFACE.actJshop.getOrderInfo,// 订单信息接口
                    track : '.s-track',
                    trackList : '.s-track-list',
                    tbody : 'tbody',
                    closeTrack : '.s-close'
                },arg),
                that = jQuery(param.nodeParent),
                node_con = that.find(param.nodeCon),
                trackList = that.find(param.trackList);

                if(!node_con.length) return;

                //数组验真：判断数组中是否存在某个值
                Array.prototype.has = function(value){
                    for(var i =0, len = this.length; i < len; i++){
                        if(this[i] === value) return true;
                    }
                    return false;
                };

                /**
                 * 初始化用户信息
                 */
                !function initUserInfor(){
                    $.ajax({
                        url: "//act-jshop.jd.com/ct.html",
                        dataType: "jsonp",
                        success: function(token){
                            jQuery.ajax({
                                url : param.urlUser + (readCookie('pin')? readCookie('pin') : ""),
                                data: { '_token_': token.t },
                                dataType : 'jsonp',
                                success : function(data){
                                    if(data.levelName){
                                        if(data.midImg) that.find(param.nodePhoto).attr("src", data.midImg.replace('.jd','.360buyimg'));
                                        that.find(param.nodeName).attr('title', data.nickName).text(data.nickName);
                                        // that.find(param.nodeLevel).text(data.levelName.replace("\u7528\u6237", "\u4f1a\u5458"));
                                        // 显示京享值 2017-09-13  leeli
                                        that.find(param.levelIcon).removeClass().addClass('level-' + data.level);
                                        if(data.level == 90){
                                            that.find(param.nodeLevel).hide();
                                        }else if(data.scores && data.scores.totalScore){
                                            var jdScore = data.scores.totalScore;
                                            if(jdScore / 1000000 > 1){
                                                jdScore = Math.floor(data.scores.totalScore / 10000) + '万+';
                                            }
                                            that.find(param.nodeLevel).html('<span class="text">京享值'+jdScore+'</span><em></em>');
                                        }
                                    }
                                }
                            });
                        }
                    });
                    
                }();

                /* 过滤虚拟订单
                * 4：虚拟商品；8：服务产品；28：团购(虚拟)；30：手机充值；33：电子礼品卡；34：游戏点卡；35：机票；36：彩票
                * 37:手机充值(新)；38:电子书订单；39：酒店订单；43：电影票；44：景点门票；45：租车；46：火车票；47：旅游；
                * 48：保险；51：误购取件费订单；52：捐赠订单；53：票务订单；55：域名订单；57：应用商店订单；58：数字音乐；
                * 62：网页游戏；64：非车险保险订单；65：车险订单；66：数字音乐IAP订单；67：电子书IAP订单；68：POP拍卖保证金订单
                * 69：京东服务产品订单；70：软件服务订单；71：培训服务订单；72：模板服务订单；73：需求外包；74：生活缴费订单
                * 76：云产品订单；78：电商云订单 ；79：电商云平台订单；80：服务市场代销；81：电商云代销；82：汽车票订单；
                * 83：国际机票订单；84：拍拍对接快捷支付实物订单；85：拍拍对接快捷支付虚拟订单；86：合约机虚拟订单；
                * 87：手机流量充值；201：酒店团购；
                */
                var virtualOrderType = [4,8,28,30,33,34,35,36,37,38,39,43,44,45,46,47,48,51,52,53,55,57,58,62,64,65,66,67,68,69,70,71,72,73,74,76,78,79,80,81,82,83,84,85,86,87,201];

                !function initOrderList(){
                    $.ajax({
                        url: "//act-jshop.jd.com/ct.html",
                        dataType: "jsonp",
                        success: function(token){
                            jQuery.ajax({
                                url : param.urlOrder,
                                data : {index: 1, size : 15, '_token_': token.t},
                                dataType : 'jsonp',
                                success : function(data){
                                    var html = "",
                                        tplHtml = '<li data-orderId="{orderId}">' +
                                                '    <span class="s-time">{dateSubmit}</span>' +
                                                '    <div class="s-item">' +
                                                '        <span class="s-img">$subTpl$</span>' +
                                                '        <span class="s-pay-info">' +
                                                '            <span class="s-price">￥{shouldPay}</span>' +
                                                '            <span class="s-client">{customerName}</span>' +
                                                '            <span class="s-pay">{paymentTypeName}</span>' +
                                                '        </span>' +
                                                '        <span class="s-status-info">' +
                                                '            {detailUrlTag}' +
                                                '            <span class="s-track">\u8ddf\u8e2a&gt;</span>' +
                                                '            <span class="s-status">{stateName}</span>' +
                                                '        </span>' +
                                                '    </div>' +
                                                '</li>',
                                        subTplHtml = '<a href="{wareUrl}" target="_blank" clstag="jshopmall|keycount|jsdcblan|jsa2"><img src="{imgPath}" width="50" height="50"></a>';

                                    /* 过滤虚拟订单 */
                                    for(var i = 0; i < data.length; i++){
                                        if(virtualOrderType.has(data[i].orderType)){
                                            data.splice(i,1);
                                            i--;
                                        };
                                    }

                                    for(var i = 0; i < data.length; i++){
                                        var item = data[i],
                                            tempHtml = "";
                                        if(item.customerName === undefined) continue;
                                        for(var j = 0; j < item.orderWareInfos.length; j++){
                                            if(j > 2) break;
                                            var obj = item.orderWareInfos[j];
                                            //http协议头格式处理
                                            obj.wareUrl = obj.wareUrl.replace(/https?:/,'');
                                            obj.imgPath = obj.imgPath.replace(/https?:/,'');
                                            tempHtml += renderHTML(subTplHtml, obj);
                                        }

                                        item.dateSubmit = new Date(item.dateSubmit).format("yyyy-MM-dd hh:mm:ss");

                                        item.paymentTypeName = item.orderListBussinessInfo.paymentTypeName;
                                        item.stateName = item.orderListBussinessInfo.stateName || '';
                                        var operate = item.orderListBussinessInfo.bussinessStatusListOperate;
                                        item.detailUrlTag = operate? '<a href=' + operate.match(/http\S+(?=")|javascript:void\(0\)/)[0].replace(/https?:/,'') + ' target="_blank" class="s-look-detail">\u67e5\u770b</a>': '';
                                        html += renderHTML(tplHtml, item).replace(/\$subTpl\$/g, tempHtml);
                                    }

                                    node_con.html(html);

                                    var dom_node = node_con.find(param.domNode);
                                    addPage(that, dom_node, {eleLen:dom_node.length, pageNum:SHOWNUM.orderNum, siblingNode:node_con});

                                    getTrack(dom_node);
                                }
                            });
                        }
                    });
                }();

                function compare(value1, value2){
                    if(value1.msgTime<value2.msgTime){
                        return -1;
                    }else if(value1.msgTime>value2.msgTime){
                        return 1;
                    }else{
                        return 0;
                    }
                }

                function getTrack(dom_node){
                    /* 组装html片段 */
                    function getHtml(data){
                        var oTr = '<tr>' +
                                    '<td width="65">{msgTime}</td>' +
                                    '<td>{content}</td>' +
                                  '</tr>',
                        html = '';

                        var newA = data.ziyingShowResult;
                        if(data.thirdPsShowResult){
                            newA = data.ziyingShowResult.concat(data.thirdPsShowResult.slice(1));
                        }
                        newA.sort(compare);

                        for (var i = 0, len = newA.length; i < len; i++) {
                            if(newA[i].msgTime){
                                newA[i].msgTime = new Date(newA[i].msgTime).format("yyyy-MM-dd hh:mm:ss");
                            }else{
                                newA[i].msgTime = '';
                            }
                            html += renderHTML(oTr, newA[i]);
                        }
                        trackList.find(param.tbody).html(html);

                    }

                    that.find(param.track).click(function(){
                        var that = this,
                            orderId = jQuery(that).parents(param.domNode).attr('data-orderid');

                        $.ajax({
                            url: "//act-jshop.jd.com/ct.html",
                            dataType: "jsonp",
                            success: function(token){  
                                jQuery.ajax({
                                    url: INTERFACE.actJshop.getOrderTrack,
                                    data: {
                                        orderId: orderId,
                                        '_token_': token.t
                                    },
                                    dataType: 'jsonp',
                                    success: function(data) {
                                        getHtml(data);
                                        trackList.addClass('s-current');
                                        trackList.find(param.closeTrack).click(function(){
                                            trackList.find(param.tbody).html('');
                                            trackList.removeClass('s-current');
                                        });
                                    }
                                });
                            }
                        });
                    });
                }
            },
            /*
             * @function：获取历史记录
             * @description：获取用户浏览历史记录，30条，接口上限是200条
             * 应用场景：任意
             * @param：nodeCon装拼装好的容器节点ul；url接口；
             * @author：cdwanchuan@jd.com 2014-10-15
            */
            getHistory : function(arg){
                var param = jQuery.extend({
                        nodeParent : '.s-records',
                        nodeCon : '.s-list ul',
                        domNode : 'li',
                        url : INTERFACE.diviner//接口
                    },arg),
                    that = jQuery(param.nodeParent),
                    node_con = that.find(param.nodeCon);

                if(!node_con.length) return;

                /* 组装html片段 */
                function getHtml(data){
                    if(!data.data) return;
                    var oLi = '<li><a href="//item.jd.com/{sku}.html" target="_blank" data-clk="{clk}" class="s-img" clstag="jshopmall|keycount|jsdcblan|jsa16"><img src="//img13.360buyimg.com/n4/{img}" width="77" height="77" alt=""></a><span class="s-info"><a href="//item.jd.com/{sku}.html" target="_blank" class="s-desc" clstag="jshopmall|keycount|jsdcblan|jsa16">{t}</a><span class="s-jd-price">&yen; {jp}</span><!--<span class="s-sale-price">&yen; {mp}</span>--><a href="//cart.jd.com/cart/dynamic/gate.action?pid={sku}&pcount=1&ptype=1" class="s-btn" target="_blank" clstag="jshopmall|keycount|jsdcblan|jsa15">\u52a0\u5165\u8d2d\u7269\u8f66</a></span></li>',
                    html = '';
                    for (var i = 0, len = data.data.length || 0; i < len; i++) {
                        html += oLi.replace(/\{sku\}/g, data.data[i].sku).replace("{clk}", data.data[i].clk).replace("{img}", data.data[i].img).replace("{t}", data.data[i].t).replace("{jp}", data.data[i].jp > 0 ?data.data[i].jp:'\u6682\u65e0\u62a5\u4ef7').replace("{mp}", data.data[i].mp > 0 ?data.data[i].mp:'\u6682\u65e0\u62a5\u4ef7');
                    }
                    node_con.html(html);
                }

                /* 埋点方法 */
                function newImage(src) {
                    var img = new Image();
                    src = src + "&m=UA-J2011-1&ref=" + encodeURIComponent(document.referrer) + "&random=" + Math.random();
                    img.setAttribute('src', src);
                }

                /* 获取数据 */
                !function getList(){
                    var data = {
                        p : 305006,
                        lid : readCookie('areald') ? readCookie('areald') : 1,
                        ec : 'utf-8',
                        lim : 30,
                        uuid : readCookie('uuid') ? readCookie('uuid') : '',
                        pin : decodeURI(readCookie('pin')),
                        ck : 'pin,aview,pinId,lighting'
                    };

                    jQuery.ajax({
                        url : param.url,
                        data : data,
                        dataType : 'jsonp',
                        jsonpCallback  : 'history' + new Date().getTime(),
                        success : function(data){
                            getHtml(data);
                            newImage(data.impr);//初始化埋点
                            jshop.module.ridLazy(that);//去除图片懒加载
                            var dom_node = that.find(param.domNode);
                            addPage(that, dom_node, {eleLen:dom_node.length, pageNum:SHOWNUM.historyNum, siblingNode:node_con});
                            that.find('.s-total em').html(dom_node.length);
                            dom_node.find('a').click(function(){newImage(jQuery(this).attr('data-clk'))});

                        }
                    });
                }();
            },
            /*
             * @function：获取优惠券，余额，京豆
             * @description：获取用户所有的优惠券列表
             * 应用场景：任意
             * @param：node装拼装好的容器节点ul；url接口；
             * @author：cdwanchuan@jd.com 2014-10-14
            */
            getCoupon : function(arg){
                var param = jQuery.extend({
                        nodeParent : '.s-coupon',
                        nodeCon : '.s-list ul.js-got',
                        curtCon : '.s-list ul.js-curt',
                        useCon: '.s-list ul.js-use',
                        domNode : 'li > .s-detail',
                        urlJdCoupon : INTERFACE.actJshop.couponInfo, // 京东优惠券接口
                        urlJdShopCoupon : INTERFACE.actJshop.getShopCoupon, // 店铺优惠券接口
                        urlJdBalance : INTERFACE.actJshop.balance, // 账户余额接口
                        urlJdJingdou : INTERFACE.actJshop.jbn, // 用户京豆数量接口
                        balanceNum : '.s-asset .s-balance-num',
                        beansNum : '.s-asset .s-beans-num',
                        couponNum : '.s-asset .s-coupon-num'
                    },arg),
                    that = jQuery(param.nodeParent),
                    node_con = that.find(param.nodeCon);
                    curt_con = that.find(param.curtCon);
                    use_con = that.find(param.useCon);

                if(!node_con.length || !curt_con.length || !use_con.length) return;

                /* 获取用户账户余额
                 * Add by cdzhengwujiang@jd.com 2015/01/07
                 */
                !function(){
                    $.ajax({
                        url: "//act-jshop.jd.com/ct.html",
                        dataType: "jsonp",
                        success: function(token){
                            jQuery.ajax({
                                url: param.urlJdBalance,
                                data: {
                                    pin: readCookie('pin'),
                                    '_token_': token.t
                                },
                                dataType: 'jsonp',
                                success: function(data) {
                                    that.find(param.balanceNum).html('&yen;'+data.accountBalance);
                                }
                            });
                        }
                    });
                }();

                /* 获取用户京豆数量
                 * Add by cdzhengwujiang@jd.com 2015/01/07
                 */
                !function(){
                    $.ajax({
                        url: "//act-jshop.jd.com/ct.html",
                        dataType: "jsonp",
                        success: function(token){
                            jQuery.ajax({
                                url: param.urlJdJingdou,
                                data: {
                                    pin: readCookie('pin'),
                                    '_token_': token.t
                                },
                                dataType: 'jsonp',
                                success: function(data) {
                                    that.find(param.beansNum).html(data.jBeanNum);
                                }
                            });
                        }
                    });
                }();

                /* 组装html片段 */
                function getHtml(data, isUse){
                    var state = isUse == 1 ? '\u5DF2\u9886\u53D6' : isUse == 2 ? '\u7ACB\u5373\u4F7F\u7528' : '\u7ACB\u5373\u9886\u53D6';
                    var outHtml = '',
                        oJdLi = '<li class="{classType}'+(isUse == 1 ? ' s-use-coupon' : isUse == 2 ? ' s-got-coupon' : ' s-join-coupon')+'" roleid="{roleId}" batchid="{batchId}" couponkind="{couponKind}" key="{encryptedKey}" coupontype="{couponType}"><div class="s-detail clearfix"><span class="flag-icon"></span><div class="s-info"><div class="s-mian-text">\u514D\u8FD0\u8D39\u5238</div><div class="s-num"><i>¥</i><em>{faceValue}</em><span>{typeName}</span></div><div class="s-desc">\u6ee1{consumeValue}\u4f7f\u7528</div><p class="s-text" title="{counponLimitInfo}">{counponLimitInfo}</p><p class="s-time">{beginTime}~<br> {endTime}</p></div><div class="s-action"><a class="js-get-coupon" {useUrl}>'+state+'</a></div></div></li>';
                    if(!data.length) return outHtml;
                    for (var i = 0, len = data.length; i < len; i++) {
                        if((APPTYPE.TYPE == 1 || APPTYPE.TYPE == 3)){
                            if((isUse == 1 && (data[i].couponKind == 0 || data[i].couponKind == 2 || data[i].couponKind == 3))
                            || (isUse == 0 && (data[i].couponKind == 2 || data[i].couponKind == 3)) || isUse == 2){
                                outHtml += renderHTML(oJdLi, data[i]);
                            }
                        }else{
                            outHtml += renderHTML(oJdLi, data[i]);
                        }                        
                    }
                    return outHtml;
                }

                that.find('.s-scrollbar').bind('mousewheel', function(e){
                    e.stopPropagation();
                    var stop = $(this).scrollTop();
                    $(this).scrollTop(stop += e.wheelDelta > 0 ? -60 : 60);
                    return false;
                })

                var sCoupon = jdCoupon = '', couponCount = 0, //定义数据对象变量
                    expandMore = '<div class="check-more-coupon"><a class="expand-more" href="javascript:;">\u5C55\u5F00\u5168\u90E8</a></div>',
                    checkMoreCouponHtml = '<div class="check-more-coupon"><a href="//quan.jd.com/user_quan.action" target="_blank" clstag="jshopmall|keycount|jsdcblan|jsa23">\u67E5\u770B\u66F4\u591A</a></div>';
                
                // 获取京东优惠券数据
                !function(){
                    jQuery.ajax({
                        url : param.urlJdCoupon,
                        data : {},
                        dataType : 'jsonp',
                        success : function(data){
                            if(data.length > 0){
                                couponCount += data.length;
                                var newData = data.splice(0, 3);
                                jdCoupon = getHtml(trimData(newData), 2);
                                node_con.removeClass('hide').html('<li class="s-mt-sub">\u6211\u5DF2\u9886\u53D6\u7684\u4F18\u60E0\u5238</li>' + jdCoupon);                            
                                var dom_node = that.find('.js-got > ' + param.domNode);
                                addPage(that, dom_node, {eleLen:dom_node.length, pageNum: 3, siblingNode:node_con});
                                node_con.after(checkMoreCouponHtml);
                                node_con.find('.s-mt-sub').addClass('s-current');
                                that.find('.s-page').remove();                            
                                jQuery(param.couponNum).html(couponCount);
                                that.find('.s-list').css('background', 'none');
                            }                            
                        }
                    });
                }();

                !function(){
                    var useCoupon = [], joinCoupon = [], useHtml = '', joinHtml = '';
                    if(APPTYPE.TYPE == 1 || APPTYPE.TYPE == 3){
                        var skuIds = getPageSkuids('.layout-container');
                        if(skuIds.length > 0){
                            getCurrentCoupon('findCanUseCouponsUniq', skuIds.splice(0, 1)).done(function(data){
                                if (data.data && data.data.length > 0){
                                    useCoupon = trimData(data.data);
                                    that.find('.s-list').css('background', 'none');
                                    useHtml = getHtml(useCoupon, 1);
                                    use_con.removeClass('hide').html('<li class="s-mt-sub">\u5F53\u524D\u5E97\u94FA\u53EF\u7528\u4F18\u60E0\u5238</li>' + useHtml);
                                    var dom_node = that.find('.js-use > ' + param.domNode);
                                    addPage(that, dom_node, {eleLen:dom_node.length, pageNum: 3, siblingNode:curt_con});
                                    use_con.find('.s-mt-sub').addClass('s-current');
                                    that.find('.s-page').remove();
                                    if(useCoupon.length > 3){
                                        var $more = $(expandMore);
                                        $more.find('.expand-more').attr('data-conten', 'js-use');
                                        use_con.after($more);
                                        bindExpandEvent();
                                    }
                                    bindGetCouponEvent();
                                }
                            });
                            getCurrentCoupon('findJoinActivesUniq', skuIds.splice(0, 1)).done(function(data){
                                if (data.data && data.data.length > 0){
                                    joinCoupon = trimData(data.data);
                                    that.find('.s-list').css('background', 'none');
                                    joinHtml = getHtml(joinCoupon, 0);
                                    curt_con.removeClass('hide').html('<li class="s-mt-sub">\u5F53\u524D\u5E97\u94FA\u53EF\u9886\u4F18\u60E0\u5238</li>' + joinHtml);
                                    var dom_node = that.find('.js-curt > ' + param.domNode);
                                    addPage(that, dom_node, {eleLen:dom_node.length, pageNum: 3, siblingNode:curt_con});
                                    curt_con.find('.s-mt-sub').addClass('s-current');
                                    that.find('.s-page').remove();
                                    if(joinCoupon.length > 3){
                                        var $more = $(expandMore);
                                        $more.find('.expand-more').attr('data-conten', 'js-curt');
                                        curt_con.after($more);
                                        bindExpandEvent();
                                    }
                                    bindGetCouponEvent();
                                }
                            });                            
                        }
                    }else{
                        var skuIds = getPageSkuids('.layoutcontainer');
                        var newSkus = skuIds.splice(0, 200);
                        if(newSkus.length > 0){
                            getCurrentCoupon('findCanUseCouponsUniq', newSkus).done(function(data){
                                if (data.data && data.data.length > 0){
                                    that.find('.s-list').css('background', 'none');
                                    useCoupon = trimData(data.data);
                                    useHtml = getHtml(useCoupon, 1);
                                    curt_con.removeClass('hide').html('<li class="s-mt-sub">\u6839\u636E\u5F53\u524D\u6D3B\u52A8\u9875\u5546\u54C1\u4E3A\u60A8\u63A8\u8350</li>' + useHtml + joinHtml);
                                    var dom_node = that.find('.js-curt > ' + param.domNode);
                                    addPage(that, dom_node, {eleLen:dom_node.length, pageNum: 3, siblingNode:curt_con});
                                    curt_con.find('.s-mt-sub').addClass('s-current');
                                    that.find('.s-page').remove();
                                    if((useCoupon.length + joinCoupon.length) > 3){
                                        var $more = $(expandMore);
                                        $more.attr('data-conten', 'js-curt');
                                        if(that.find('.check-more-coupon[data-conten="js-curt"]').length < 1) {
                                            curt_con.after($more);
                                            bindExpandEvent();
                                        }
                                    }
                                    bindGetCouponEvent();
                                }
                            });
                            getCurrentCoupon('findJoinActivesUniq', newSkus).done(function(data){
                                if (data.data && data.data.length > 0){
                                    that.find('.s-list').css('background', 'none');
                                    joinCoupon = trimData(data.data);                                    
                                    joinHtml = getHtml(joinCoupon, 0);                                
                                    curt_con.removeClass('hide').html('<li class="s-mt-sub">\u6839\u636E\u5F53\u524D\u6D3B\u52A8\u9875\u5546\u54C1\u4E3A\u60A8\u63A8\u8350</li>' + useHtml + joinHtml);
                                    var dom_node = that.find('.js-curt > ' + param.domNode);
                                    addPage(that, dom_node, {eleLen:dom_node.length, pageNum: 3, siblingNode:curt_con});
                                    curt_con.find('.s-mt-sub').addClass('s-current');
                                    that.find('.s-page').remove();
                                    if((useCoupon.length + joinCoupon.length) > 3){
                                        var $more = $(expandMore);
                                        $more.attr('data-conten', 'js-curt');
                                        if(that.find('.check-more-coupon[data-conten="js-curt"]').length < 1) {
                                            curt_con.after($more);
                                            bindExpandEvent();
                                        }
                                    }
                                    bindGetCouponEvent();
                                }    
                            })
                        }
                    }
                }();                

                function getCurrentCoupon(funId, pageSize){
                    var defer = $.Deferred();
                    $.ajax({
                        url: INTERFACE.actJshop.goodsCoupon,
                        data: {
                            method: funId,
                            platform: 2,
                            resultCount: 4,
                            skuInfos: pageSize.join(',')
                        },
                        dataType: 'jsonp',
                        type: 'GET',
                        success: function(data){
                            var nData = typeof data == 'object' ? data : {};
                            defer.resolve(nData);
                        },
                        error: function(){
                            defer.resolve({});
                        }
                    })
                    return defer;
                }

                function trimData(newData){
                    if(newData.length > 0){
                        for (var i = 0, ii = newData.length; i < ii; i++) {
                            var couponType = (newData[i].couponType != undefined) ? newData[i].couponType : newData[i].type;
                            newData[i].faceValue = newData[i].faceValue || newData[i].discount || newData[i].parValue;
                            newData[i].consumeValue = (newData[i].consumeValue != undefined) ? newData[i].consumeValue : newData[i].quota;
                            newData[i].counponLimitInfo = newData[i].counponLimitInfo || newData[i].name || '';
                            newData[i].typeName = couponType == 0 ? '\u4EAC\u5238' : (couponType == 1 ? '\u4E1C\u5238' : '\u514D\u8FD0\u8D39\u5238');
                            newData[i].classType = couponType == 0 ? 's-jing' : (couponType == 1 ? 's-dong' : 's-mian');
                            if(typeof newData[i].beginTime == 'string'){
                                var begintime = newData[i].beginTime;
                                if(begintime.indexOf('.')===-1){
                                    newData[i].beginTime = Number(begintime);
                                }       
                            }
                            if(typeof newData[i].beginTime == 'number'){
                                var Stime = new Date(newData[i].beginTime);
                                newData[i].beginTime = Stime.format('yyyy.MM.dd hh:mm');
                            }
                            if(typeof newData[i].endTime == 'string'){
                                var endtime = newData[i].endTime;
                                if(endtime.indexOf('.')===-1){
                                    newData[i].endTime = Number(endtime);
                                } 
                            }
                            if(typeof newData[i].endTime == 'number'){
                                var Etime = new Date(newData[i].endTime);
                                newData[i].endTime = Etime.format('yyyy.MM.dd hh:mm');
                            }
                            if(newData[i].counponLimitType == 0){
                                newData[i].useUrl = 'href="//what.jd.com/" target="_blank"';
                            }else if(newData[i].counponLimitType == 1 || newData[i].counponLimitType == 3){
                                newData[i].useUrl = 'href="//search.jd.com/Search?coupon_batch=' + newData[i].batchId + '&coupon_id=' + newData[i].id + '" target="_blank"';
                            }else{
                                newData[i].useUrl = 'href="javascript:;"';
                            }
                        }
                    }
                    return newData;
                }

                function bindGetCouponEvent(){
                    if($('.js-curt li[batchid]').length < 1){
                        $('.js-curt').addClass('hide').html('');
                    }
                    if($('.js-use .s-use-coupon').length < 1){
                        $('.js-use').addClass('hide').html('');
                    }
                    if(that.find('.js-got li[batchid]').length > 0){
                        that.find('.s-tips').removeClass('s-current');
                    }
                    var flag = false;
                    that.find('.s-use-coupon').each(function(i){
                        $(this).unbind('click').bind('click', function(){
                            var $self = $(this);
                            var couponKind = $(this).attr('couponkind');
                            if(couponKind == 0) return false;
                            if(flag) return false;
                            flag = true;
                            $(this).siblings('.s-use-coupon').find('.s-product').slideUp();
                            if($(this).hasClass('s-show')){                                
                                $(this).find('.s-product').slideToggle();
                                flag = false;
                            }else{
                                var couponId = $(this).attr('batchid');
                                $.ajax({ //获取当前优惠券可使用的商品
                                    url: INTERFACE.actJshop.getSkuByCoupon,
                                    data: {couponBatch: couponId, pageSize: 2, page: 1},
                                    dataType: 'jsonp',
                                    type: 'GET',
                                    success: function(data){                                      
                                        if(data.wareIds.length > 0){
                                            var temp = [];
                                            for (var i = 0, ii = data.wareIds.length; i < ii; i++) {
                                                temp.push('J_' + data.wareIds[i]);
                                            }
                                            $.ajax({
                                                url: INTERFACE.actJshop.goodsInfo,
                                                data: {skuIds: data.wareIds.join(',')},
                                                dataType : 'jsonp',
                                                success: function(data){
                                                    flag = false;
                                                    if(data.length > 0){
                                                        var goods = makeGoodsHtml(data, couponId);
                                                        $self.append(goods);
                                                        jshop.component.getPrice($self);
                                                        $self.find('.s-product').slideDown();
                                                        $self.addClass('s-show');
                                                        $self.find('.s-morep').unbind('click').bind('click', function(e){
                                                            e.stopPropagation();
                                                        })
                                                    } 
                                                },
                                                error: function(){
                                                    flag = false;
                                                }
                                            });                                                                               
                                        }else{
                                            flag = false;
                                        }
                                    },
                                    error: function(){
                                        flag = false;
                                    }
                                });
                            }
                        });
                    });

                    that.find('.js-curt .s-join-coupon').each(function(i){
                        $(this).unbind('click').bind('click', function(){
                            var $self = $(this);
                            var couponId = $(this).attr('roleid');
                            var key = $(this).attr('key');
                            if(flag) {
                                return false;
                            }
                            flag = true;
                            
                            getJdEidtoWindow(function(JdEid){
                                var data = {}
                                if(APPTYPE.TYPE===0){   //老活动需要额外传一个applicationId
                                    data = {
                                        ruleId: couponId,
                                        key: key,
                                        eid: JdEid.eid,
                                        fp: JdEid.fp,
                                        shshshfp: CookieUtil.getCookie('shshshfp'),
                                        shshshfpa: CookieUtil.getCookie('shshshfpa'),
                                        shshshfpb: CookieUtil.getCookie('shshshfpb'),
                                        jda: CookieUtil.getCookie('__jda') || -1,
                                        pageClickKey: -1,   //侧边栏无埋点
                                        platform: 0,
                                        applicationId:$('#pageInstance_appId').val()
                                    }
                                }else if(APPTYPE.TYPE===1||APPTYPE.TYPE===3){     //店铺需要传shopId和venderId
                                    data = {
                                        ruleId: couponId,
                                        key: key,
                                        eid: JdEid.eid,
                                        fp: JdEid.fp,
                                        shshshfp: CookieUtil.getCookie('shshshfp'),
                                        shshshfpa: CookieUtil.getCookie('shshshfpa'),
                                        shshshfpb: CookieUtil.getCookie('shshshfpb'),
                                        jda: CookieUtil.getCookie('__jda') || -1,
                                        pageClickKey: -1,   //侧边栏无埋点
                                        platform: 0,
                                        shopId:$('#shop_id').val(),
                                        venderId:$('#vender_id').val()
                                    }
                                }else if(APPTYPE.TYPE===2){ //店铺活动需要传venderId和projectId
                                    data = {
                                        ruleId: couponId,
                                        key: key,
                                        eid: JdEid.eid,
                                        fp: JdEid.fp,
                                        shshshfp: CookieUtil.getCookie('shshshfp'),
                                        shshshfpa: CookieUtil.getCookie('shshshfpa'),
                                        shshshfpb: CookieUtil.getCookie('shshshfpb'),
                                        jda: CookieUtil.getCookie('__jda') || -1,
                                        pageClickKey: -1,   //侧边栏无埋点
                                        platform: 0,
                                        shopId:$('#shop_id').val(),
                                        venderId:$('#vender_id').val()
                                    }
                                }
                                $.ajax({
                                    url: INTERFACE.actJshop.couponSend,
                                    data: data,
                                    dataType: 'jsonp',
                                    success: function(data){
                                        flag = false;
                                        var mask = '<div class="s-state"><span class="s-msg">'+data.desc+'</span><div class="s-bgcolor"></div></div>';                                    
                                        $self.find('.s-detail').append(mask);
                                        $self.find('.s-msg').css('margin-top', - parseInt($self.find('.s-msg').outerHeight())/2);                                    
                                        setTimeout(function(){
                                            $self.find('.s-state').remove();
                                            if(data.code == 999){
                                                if(APPTYPE.TYPE == 1 || APPTYPE.TYPE == 3){
                                                    $self.removeClass('s-join-coupon').addClass('s-use-coupon');
                                                    $self.find('.js-get-coupon').html('\u5DF2\u9886\u53D6');
                                                    if($('.js-use .s-use-coupon').length < 1){
                                                        $('.js-use').removeClass('hide').html('<li class="s-mt-sub s-current">\u5F53\u524D\u5E97\u94FA\u53EF\u7528\u4F18\u60E0\u5238</li>');
                                                        $self.insertAfter($('.js-use .s-mt-sub'));
                                                    }else{
                                                        $self.insertBefore($('.js-use .s-use-coupon').eq(0));
                                                    }                                                                                                
                                                    var dom_node = that.find('.js-use > ' + param.domNode);
                                                    addPage(that, dom_node, {eleLen:dom_node.length, pageNum: 3, siblingNode:use_con});
                                                    that.find('.s-page').remove();
                                                }else{
                                                    $self.removeClass('s-join-coupon').addClass('s-use-coupon');
                                                    $self.find('.js-get-coupon').html('\u5DF2\u9886\u53D6');
                                                    $self.insertBefore($('.js-curt .s-use-coupon').eq(0));
                                                    var dom_node = that.find('.js-curt > ' + param.domNode);
                                                    if($('.check-more-coupon[data-conten="js-curt"]').find('.expand-more').hasClass('s-expand')){
                                                        addPage(that, dom_node, {eleLen:dom_node.length, pageNum: 6, siblingNode:curt_con});
                                                    }else{
                                                        addPage(that, dom_node, {eleLen:dom_node.length, pageNum: 3, siblingNode:curt_con});
                                                        that.find('.s-page').remove();
                                                    }
                                                }
                                                bindGetCouponEvent();
                                            }
                                        }, 3000);
                                    },
                                    error: function(){
                                        flag = false;
                                    }
                                });
                            })
                        });
                    });
                }

                function bindExpandEvent(){
                    that.find('.s-list .expand-more').unbind('click').bind('click', function(){
                        that.find('.s-use-coupon').find('.s-product').slideUp();
                        if($(this).data('conten') == 'js-use'){
                            that.find('.s-list .js-curt')
                            var curt_node = that.find('.js-curt > ' + param.domNode);
                            addPage(that, curt_node, {eleLen:curt_node.length, pageNum: 3, siblingNode:curt_con});
                            var use_node = that.find('.js-use > ' + param.domNode);
                            if($(this).hasClass('s-expand')){
                                $(this).removeClass('s-expand').html('\u5C55\u5F00\u5168\u90E8');
                                addPage(that, use_node, {eleLen:use_node.length, pageNum: 3, siblingNode:use_con});
                                that.find('.s-page').remove();
                            }else{
                                $(this).addClass('s-expand').html('\u6536\u8D77\u5C55\u793A');
                                addPage(that, use_node, {eleLen:use_node.length, pageNum: 6, siblingNode:use_con});
                            }
                        }else{
                            var use_node = that.find('.js-use > ' + param.domNode);
                            addPage(that, use_node, {eleLen:use_node.length, pageNum: 3, siblingNode:use_con});
                            var curt_node = that.find('.js-curt > ' + param.domNode);
                            if($(this).hasClass('s-expand')){
                                $(this).removeClass('s-expand').html('\u5C55\u5F00\u5168\u90E8');
                                addPage(that, curt_node, {eleLen:curt_node.length, pageNum: 3, siblingNode:curt_con});
                                that.find('.s-page').remove();
                            }else{
                                $(this).addClass('s-expand').html('\u6536\u8D77\u5C55\u793A');
                                addPage(that, curt_node, {eleLen:curt_node.length, pageNum: 6, siblingNode:curt_con});
                            }
                        }
                    })
                }

                // 获取当前页面所有skuId
                function getPageSkuids(dom){
                    var regArr = [
                        /\/\/item\.jd\.com\/(\d+)\.html/g,
                        /\/\/item\.jd\.hk\/(\d+)\.html/g,
                        /\/\/item\.yiyaojd\.com\/(\d+)\.html/g
                    ]
                    var bodyHtml = $(dom).html();
                    var links = [], skuIds = [];
                    for (var i = 0, ii = regArr.length; i < ii; i++) {
                        var link = bodyHtml.match(regArr[i]);
                        if (link && link.length > 0) {
                            links = $.merge(links, $.unique(link));
                        }                        
                    }
                    var reg = /(\d+)/;
                    for (var i = 0, ii = links.length; i < ii; i++) {
                        var skuId = links[i].match(reg);
                        if(skuId && skuId.length > 0){
                            skuIds = $.merge(skuIds, $.unique(skuId));
                        }                        
                    }
                    return $.unique(skuIds);//数组去重
                }

                function makeGoodsHtml(data, couponId){
                    var html = '<div class="s-product"><ul>';
                    for (var i = 0, ii = data.length; i < ii; i++) {
                        html += '<li class="s-item clearfix"><a href="//item.jd.com/'+data[i].goodsId+'.html" target="_blank" class="s-img"><img src="//img13.360buyimg.com/cms/s60x60_'+data[i].imageurl+'!cc_60x60" alt="'+data[i].wname+'" width="60" height="60"></a><div class="s-pinfo"><a href="//item.jd.com/'+data[i].goodsId+'.html" target="_blank" class="s-pname" title="'+data[i].wname+'">'+data[i].wname+'</a><div class="s-price">&yen;<span jshop="price" jdPrice="'+data[i].goodsId+'"></span></div></div></li>';
                    }
                    html += '</ul><a class="s-morep" href="//search.jd.com/Search?coupon_batch='+couponId+'" target="_blank"><span>\u53BB\u770B\u66F4\u591A\u4F18\u60E0\u5546\u54C1&ensp;&gt;</span></a></div>';
                    return html;
                }
            },
            /*
             * @function：获取已领优惠券的最大优惠额度
             * @description：获取已领优惠券的最大优惠额度
             * 应用场景：任意
             * @author：cdliqiaojun@jd.com 2016-10-31
            */
            getCouponQuota: function(obj){
                jQuery.ajax({
                    url : INTERFACE.actJshop.couponInfo,
                    data : {},
                    dataType : 'jsonp',
                    success : function(data){
                        if(data.length > 0){
                            var maxVal = 0;
                            for (var i = 0, ii = data.length; i < ii; i++) {
                                if(maxVal < data[i].faceValue){
                                    maxVal = parseInt(data[i].faceValue);
                                }
                            }
                            if(maxVal > 0){
                                obj.attr('data-before', '\u53EF\u4F18\u60E0'+maxVal+'\u5143');
                                obj.addClass('js-edited');
                            }
                        }
                    }
                });
            },
            /*
             * @function：获取关注的商品
             * @description：获取用户关注的商品，30条
             * 应用场景：任意
             * @param：nodeCon装拼装好的容器节点ul；url接口；
             * @author：cdwanchuan@jd.com 2014-10-16
            */
            getAttentionGoods : function(arg){
                var param = jQuery.extend({
                        nodeParent : '.s-attention .s-goods',
                        nodeCon : 'ul',
                        domNode : 'li',
                        url : INTERFACE.productFollow.queryForPage//接口
                    },arg),
                    that = jQuery(param.nodeParent),
                    node_con = that.find(param.nodeCon);

                if(!node_con.length) return;

                /* 组装html片段 */
                function getHtml(data){
                    var oLi = '<li data-sku="{productId}"><a href="//item.jd.com/{productId}.html" target="_blank" class="s-img" clstag="jshopmall|keycount|jsdcblan|jsa5"><img src="//m.360buyimg.com/cms/g10/M00/13/04/rBEQWFFj4PUIAAAAAAAESxyqJLUAADvdAIHC9oAAARj186.gif" width="77" height="77" alt=""/></a><span class="s-info"><a href="//item.jd.com/{productId}.html" target="_blank" class="s-desc" clstag="jshopmall|keycount|jsdcblan|jsa5"></a><span class="s-jd-price">¥ {followedPrice}</span><a href="//cart.jd.com/cart/dynamic/gate.action?pid={productId}&pcount=1&ptype=1" class="s-btn" target="_blank" clstag="jshopmall|keycount|jsdcblan|jsa6">\u52a0\u5165\u8d2d\u7269\u8f66</a></span></li>',
                    html = '';
                    for (var i = 0, len = data.data.list.length; i < len; i++) {
                        html += oLi.replace(/\{productId\}/g, data.data.list[i].productId).replace("{followedPrice}", data.data.list[i].followedPrice > 0 ? data.data.list[i].followedPrice.toFixed(2) :'\u6682\u65e0\u62a5\u4ef7');
                    }
                    node_con.html(html);
                }

                /* 获取数据 */
                !function getList(){
                    var data = {
                        indexPage : 1,
                        pageSize : 30,
                        sysName : (APPTYPE.TYPE == 0 || APPTYPE.TYPE == 2) ? 'sale.jd.com' : 'mall.jd.com'
                    };

                    jQuery.ajax({
                        url : param.url,
                        data : data,
                        dataType : 'jsonp',
                        success : function(data){
                            getHtml(data);
                            var dom_node = that.find(param.domNode);
                            getGoodsInfo(dom_node);
                            addPage(that, dom_node, {eleLen:dom_node.length, pageNum:SHOWNUM.attentionGoodsNum, siblingNode:node_con});
                        }
                    });
                }();

                /* 获取商品图片、标题 */
                function getGoodsInfo(dom_node){
                    var url = INTERFACE.actJshop.goodsInfo,
                        skuid = [];

                    for(var i = 0, len = dom_node.length; i< len; i+=1){
                        skuid.push(dom_node.eq(i).attr('data-sku'));
                    }

                    var data = {
                        skuIds : skuid.join(',')
                    };

                    jQuery.ajax({
                        url : url,
                        data : data,
                        dataType : 'jsonp',
                        success : function(data){
                            for(var i = 0, len = data.length; i<len; i+=1){
                                dom_node.eq(i).find('img').attr('src', '//img13.360buyimg.com/n4/' + data[i].imageurl);
                                dom_node.eq(i).find('.s-info a:eq(0)').html(data[i].wname);
                            }
                        }
                    });
                }
            },
            /*
             * @function：获取关注的店铺
             * @description：获取用户关注的活动，30条
             * 应用场景：任意
             * @param：nodeCon装拼装好的容器节点ul；url接口；
             * @author：cdwanchuan@jd.com 2014-10-16
            */
            getAttentionMall : function(arg){
                var param = jQuery.extend({
                        nodeParent : '.s-attention .s-mall',
                        nodeCon : 'ul',
                        domNode : 'li',
                        url : INTERFACE.venderFollow.queryForPage//接口
                    },arg),
                    that = jQuery(param.nodeParent),
                    node_con = that.find(param.nodeCon);

                if(!node_con.length) return;

                /* 组装html片段 */
                function getHtml(data){
                    if(data.data.list.length < 0) return;
                    var oLi = '<li><a href="//mall.jd.com/index-{venderId}.html" target="_blank" clstag="jshopmall|keycount|jsdcblan|jsa7"><img src="{img}" width="180" height="60" /><span class="s-desc">{venderName}</span><span class="s-btn">\u8fdb\u5165\u5e97\u94fa &gt;</span></a></li>',
                    html = '&nbsp;';
                    for (var i = 0, len = data.data.list.length; i < len; i++) {
                        if(oMallInfo && oMallInfo[data.data.list[i].venderId].logoURI){
                            data.data.list[i].img = oMallInfo[data.data.list[i].venderId].logoURI.replace(/https?:/,'');
                        }else{ // 如果没得logoURI，避免浏览器发送undefined请求
                            data.data.list[i].img = '';
                        }

                        html += oLi.replace("{venderId}", data.data.list[i].venderId).replace("{img}", data.data.list[i].img).replace("{venderName}", data.data.list[i].venderName);
                    }
                    node_con.html(html);

                    if(!data.length) return html;
                }

                /* venderId数组、返回回来的店铺信息对象 */
                var aVenderId = [],
                    oMallInfo;

                /* 获取数据 */
                !function getList(){
                    var data = {
                        indexPage : 1,
                        pageSize : 30,
                        sysName : (APPTYPE.TYPE == 0 || APPTYPE.TYPE == 2) ? 'sale.jd.com' : 'mall.jd.com'
                    };

                    jQuery.ajax({
                        url : param.url,
                        data : data,
                        dataType : 'jsonp',
                        success : function(data){
                            if(data.data.list.length > 0){
                                aVenderId = [];
                                for (var i = 0, len = data.data.list.length; i < len; i++) {
                                    aVenderId.push(data.data.list[i].venderId);
                                }
                            }
                            getMallLogo(function(){
                                getHtml(data); //获取关注的店铺信息
                                jshop.module.ridLazy(that);//去除图片懒加载
                                var dom_node = that.find(param.domNode);
                                addPage(that, dom_node, {eleLen:dom_node.length, pageNum:SHOWNUM.attentionMallNum, siblingNode:node_con});
                            }); //获取所有店铺信息，包含LOGO
                        }
                    });

                    /* 获取店铺LOGO */
                    function getMallLogo(fun){
                        if(aVenderId.length > 0){
                            jQuery.ajax({
                                url : INTERFACE.actJshop.getPopShopInfo,
                                data : {
                                    shopId : aVenderId.join(',')
                                },
                                dataType : 'jsonp',
                                success : function(data){
                                    oMallInfo = data;
                                    fun();
                                }
                            });
                        }else{
                            fun();
                        }
                    }

                }();
            },
            /*
             * @function：获取关注的活动
             * @description：获取用户关注的活动，30条
             * 应用场景：任意
             * @param：nodeCon装拼装好的容器节点ul；url接口；
             * @author：cdwanchuan@jd.com 2014-10-16
            */
            getAttentionSale : function(arg){
                var param = jQuery.extend({
                        nodeParent : '.s-attention .s-sale',
                        nodeCon : 'ul',
                        domNode : 'li',
                        url : INTERFACE.activityFollw.queryForPage//接口
                    },arg),
                    that = jQuery(param.nodeParent),
                    node_con = that.find(param.nodeCon);

                if(!node_con.length) return;

                /* 组装html片段 */
                function getHtml(data){
                    var oLi = '<li class="{classText}"><a href="{activityUrl}" target="_blank" class="s-desc" clstag="jshopmall|keycount|jsdcblan|jsa8">{activityName}</a><span class="s-time">{startDate}-{endDate}</span><a href="{activityUrl}" target="_blank" class="s-btn s-btn-go" title="\u8fdb\u5165\u6d3b\u52a8" clstag="jshopmall|keycount|jsdcblan|jsa8">\u8fdb\u5165\u6d3b\u52a8 ></a><a href="javascript:void(0);" class="s-btn s-btn-wait">\u656c\u8bf7\u671f\u5f85</a><a href="javascript:void(0);" class="s-btn s-btn-over">\u5df2\u7ecf\u7ed3\u675f</a></li>',
                    html = '',
                    nDate = new Date().format("yyyy.MM.dd hh:mm:ss");

                    if(data.data.list){
                        for (var i = 0, len = data.data.list.length; i < len; i++) {

                            var startDate = new Date(data.data.list[i].startDate).format("yyyy.MM.dd hh:mm:ss"),
                                endDate = new Date(data.data.list[i].endDate).format("yyyy.MM.dd hh:mm:ss"),

                                sDate = startDate,
                                eDate = endDate;

                            //数据预处理
                            data.data.list[i].activityUrl = data.data.list[i].activityUrl.replace(/https?:/,'');

                            if(startDate > endDate){
                                sDate = endDate;
                                eDate = startDate;
                            }

                            data.data.list[i].classText='';
                            if (sDate >= nDate) {
                                data.data.list[i].classText = "s-wait";
                            }

                            if(eDate < nDate){
                                data.data.list[i].classText = "s-over";
                            }

                            if(sDate < nDate && eDate > nDate){
                                data.data.list[i].classText = "s-go";
                            }
                            if(data.data.list[i].classText !== 's-over'){
                                html += oLi.replace("{classText}", data.data.list[i].classText).replace(/\{activityUrl\}/g, data.data.list[i].activityUrl).replace("{activityName}", data.data.list[i].activityName).replace("{startDate}", sDate.substring(0,10)).replace("{endDate}", eDate.substring(0,10));

                            }
                        }
                    }
                    node_con.html(html);
                }

                /* 获取数据 */
                !function getList(){
                    var data = {
                        indexPage : 1,
                        pageSize : 30,
                        sysName : (APPTYPE.TYPE == 0 || APPTYPE.TYPE == 2) ? 'sale.jd.com' : 'mall.jd.com'
                    };

                    jQuery.ajax({
                        url : param.url,
                        data : data,
                        dataType : 'jsonp',
                        success : function(data){
                            getHtml(data);
                            var dom_node = that.find(param.domNode);
                            addPage(that, dom_node, {eleLen:dom_node.length, pageNum:SHOWNUM.attentionSaleNum, siblingNode:node_con});
                        }
                    });
                }();
            },
            /*
             * @function：获取购物商品列表
             * @description：获取用户的购物车商品，30条
             * 应用场景：任意
             * @param：nodeCon装拼装好的容器节点ul；url接口；
             * @author：cdwanchuan@jd.com 2014-10-17
            */
            getCart : function(arg){
                var param = jQuery.extend({
                        nodeParent : '.s-cart',
                        nodeCon : '.s-list ul',
                        domNode : 'li',
                        url : INTERFACE.miniCartServiceNew//接口
                    },arg),
                    that = jQuery(param.nodeParent),
                    node_con = that.find(param.nodeCon);

                if(!node_con.length) return;

                var totalPrice = 0; //20151216星期三 由于迷你购物车接口将TotalPromotionPrice修改为只有用户选择了才返回价格，所以这里只有拼接所有商品的价格

                /* 组装html片段 */
                function getHtml(data){
                    var oLi = '<li data-cartid="{cartId}" data-targetid="{targetId}"><a href="//item.jd.com/{Id}.html" target="_blank" class="s-img" clstag="jshopmall|keycount|jsdcblan|jsa12"><img src="//img13.360buyimg.com/n4/{ImgUrl}" width="100" height="100" alt=""/></a><span class="s-info"><a href="//item.jd.com/{Id}.html" target="_blank" class="s-desc" clstag="jshopmall|keycount|jsdcblan|jsa12">{Name}</a><span class="s-sale-price">¥ {SalePrice}</span><span class="s-jd-price">¥ <em>{PromotionPrice}</em></span><span class="s-num">×<em>{Num}</em></span><a href="javascript:void(0);" class="s-btn">\u5220\u9664</a></span></li>',
                        html = '';
                    //单品
                    for (var i = 0, len = data.Cart.TheSkus.length; i < len; i++) {
                        html += oLi.replace(/\{cartId\}/g, data.Cart.TheSkus[i].Id).replace(/\{targetId\}/g, data.Cart.TheSkus[i].Id).replace(/\{Id\}/g, data.Cart.TheSkus[i].Id).replace("{ImgUrl}", data.Cart.TheSkus[i].ImgUrl).replace("{Name}", data.Cart.TheSkus[i].Name).replace("{SalePrice}", data.Cart.TheSkus[i].SalePrice).replace("{PromotionPrice}", data.Cart.TheSkus[i].PromotionPrice.toFixed(2)).replace("{Num}", data.Cart.TheSkus[i].Num);
                        totalPrice += data.Cart.TheSkus[i].PromotionPrice;
                    }
                    //赠品
                    for (var i = 0, len = data.Cart.TheGifts.length; i < len; i++) {
                            html += oLi.replace(/\{cartId\}/g, data.Cart.TheGifts[i].MainSKU.Id).replace(/\{targetId\}/g, data.Cart.TheGifts[i].Id).replace(/\{Id\}/g, data.Cart.TheGifts[i].MainSKU.Id).replace("{ImgUrl}", data.Cart.TheGifts[i].MainSKU.ImgUrl).replace("{Name}", data.Cart.TheGifts[i].MainSKU.Name).replace("{SalePrice}", data.Cart.TheGifts[i].SalePrice).replace("{PromotionPrice}", data.Cart.TheGifts[i].PromotionPrice.toFixed(2)).replace("{Num}", data.Cart.TheGifts[i].Num);
                            totalPrice += data.Cart.TheGifts[i].PromotionPrice;
                    }
                    //套装
                    for (var i = 0, len = data.Cart.TheSuit.length; i < len; i++) {
                        for (var j = 0, lenth = data.Cart.TheSuit[i].Skus.length; j < lenth; j++) {
                            html += oLi.replace(/\{cartId\}/g, data.Cart.TheSuit[i].Skus[j].Id).replace(/\{targetId\}/g, data.Cart.TheSuit[i].Id).replace(/\{Id\}/g, data.Cart.TheSuit[i].Skus[j].Id).replace("{ImgUrl}", data.Cart.TheSuit[i].Skus[j].ImgUrl).replace("{Name}", data.Cart.TheSuit[i].Skus[j].Name).replace("{SalePrice}", data.Cart.TheSuit[i].Skus[j].SalePrice).replace("{PromotionPrice}", data.Cart.TheSuit[i].Skus[j].PromotionPrice.toFixed(2)).replace("{Num}", data.Cart.TheSuit[i].Skus[j].Num);
                            totalPrice += data.Cart.TheSuit[i].Skus[j].PromotionPrice;
                        }
                    }
                    //满减
                    for (var i = 0, len = data.Cart.ManJian.length; i < len; i++) {
                        for (var j = 0, lenth = data.Cart.ManJian[i].Skus.length; j < lenth; j++) {
                            html += oLi.replace(/\{cartId\}/g, data.Cart.ManJian[i].Skus[j].Id).replace(/\{targetId\}/g, data.Cart.ManJian[i].Id).replace(/\{Id\}/g, data.Cart.ManJian[i].Skus[j].Id).replace("{ImgUrl}", data.Cart.ManJian[i].Skus[j].ImgUrl).replace("{Name}", data.Cart.ManJian[i].Skus[j].Name).replace("{SalePrice}", data.Cart.ManJian[i].Skus[j].SalePrice).replace("{PromotionPrice}", data.Cart.ManJian[i].Skus[j].PromotionPrice.toFixed(2)).replace("{Num}", data.Cart.ManJian[i].Skus[j].Num);
                            totalPrice += data.Cart.ManJian[i].Skus[j].PromotionPrice;
                        }
                    }
                    //满赠
                    for (var i = 0, len = data.Cart.ManZeng.length; i < len; i++) {
                        for (var j = 0, lenth = data.Cart.ManZeng[i].Skus.length; j < lenth; j++) {
                            html += oLi.replace(/\{cartId\}/g, data.Cart.ManZeng[i].Skus[j].Id).replace(/\{targetId\}/g, data.Cart.ManZeng[i].Id).replace(/\{Id\}/g, data.Cart.ManZeng[i].Skus[j].Id).replace("{ImgUrl}", data.Cart.ManZeng[i].Skus[j].ImgUrl).replace("{Name}", data.Cart.ManZeng[i].Skus[j].Name).replace("{SalePrice}", data.Cart.ManZeng[i].Skus[j].SalePrice).replace("{PromotionPrice}", data.Cart.ManZeng[i].Skus[j].PromotionPrice.toFixed(2)).replace("{Num}", data.Cart.ManZeng[i].Skus[j].Num);
                            totalPrice += data.Cart.ManZeng[i].Skus[j].PromotionPrice;
                        }
                    }
                    node_con.html(html);
                }

                /* 获取数据 */
                !function getList(){
                    var data = {
                        method : 'GetCart'
                    };

                    jQuery.ajax({
                        url : param.url,
                        data : data,
                        dataType : 'jsonp',
                        jsonpCallback  : 'jsonp' + new Date().getTime(),
                        success : function(data){
                            getHtml(data);
                            jshop.module.ridLazy(that);//去除图片懒加载
                            var dom_node = that.find(param.domNode);
                            addPage(that, dom_node, {eleLen:dom_node.length, pageNum:SHOWNUM.cartNum, siblingNode:node_con});
                            that.find('.s-total .s-num,.s-cart-num').html(data.Cart.Num);
                            that.find('.s-total .s-price em').html(totalPrice.toFixed(2));
                            if(dom_node.length > 0){
                                that.find('.s-addtocart').addClass('s-current');
                            }else{
                                that.find('.s-addtocart').removeClass('s-current');
                            }
                        }
                    });
                }();

                /* 删除商品 */
                !function delGoods(dom_node){
                    var param = {
                        url : INTERFACE.miniCartServiceNew,
                        methodSingle : 'RemoveProduct',
                        methodMore : 'RemoveSuit'
                    },
                    data;

                    that.delegate('.s-btn','click',function(){
                        var goodsNum = 0,
                        totalPrice = 0;

                        var id = {
                            cartId : jQuery(this).parents('li').attr('data-cartid'),
                            targetId : jQuery(this).parents('li').attr('data-targetid')
                        };

                        if(id.cartId === id.targetId){
                            data = {
                                cartId : id.cartId,
                                method : param.methodSingle,
                                url : param.url
                            }
                        }else{
                            data = {
                                cartId : id.cartId,
                                targetId : id.targetId,
                                method : param.methodMore,
                                url : param.url
                            }
                        }

                        var currentNode = jQuery(this).parents('li'),
                            remain_node = currentNode.siblings();
                        for(var i = 0; i<remain_node.length; i++){
                            goodsNum += ~~jQuery(remain_node[i]).find('.s-num em').html();
                            totalPrice += ~~(jQuery(remain_node[i]).find('.s-jd-price em').html() * ~~jQuery(remain_node[i]).find('.s-num em').html());
                        }
                        jQuery.ajax({
                            url : data.url,
                            data : data,
                            dataType : 'jsonp',
                            jsonpCallback  : 'jsonp' + new Date().getTime(),
                            success : function(data){
                                if(data.Result){
                                    //getList();每次都取数据会出现接口获取频繁而重定向，所以采用以下前端删除
                                    currentNode.remove();
                                    addPage(that, remain_node, {eleLen:remain_node.length, pageNum:SHOWNUM.cartNum, siblingNode:node_con});

                                    that.find('.s-total .s-num,.s-cart-num').html(goodsNum);
                                    that.find('.s-total .s-price em').html(totalPrice + '.00');
                                    if(remain_node.length < 1){
                                        that.find('.s-addtocart').removeClass('s-current');
                                        that.find('.s-page').css('display','none');
                                    }
                                }
                            }
                        });
                    });
                }();
            },
            /*
             * @function：获取购物商品数量
             * @description：获取用户的购物车商品数量
             * 应用场景：任意
             * @param：domNode购物车数量节点；
             * @author：cdwanchuan@jd.com 2015-05-12
            */
            getCartNum : function(arg){
                var param = jQuery.extend({
                        nodeParent : '.s-cart .s-mt',
                        domNode : '.s-cart-num',
                        url : INTERFACE.miniCartServiceNew//接口
                    },arg),
                    that = jQuery(param.nodeParent),
                    domNode = that.find(param.domNode);

                if(!domNode.length) return;

                //如果cookie里面有cn值 20151026徐阳
                var cn = readCookie('cn');
                if(cn){
                    domNode.html(cn);
                    return;
                }

                /* 获取数据 */
                var data = {
                    method : 'GetCart'
                };

                jQuery.ajax({
                    url : param.url,
                    data : data,
                    dataType : 'jsonp',
                    jsonpCallback  : 'jsonp' + new Date().getTime(),
                    success : function(data){
                        domNode.html(data.Cart.Num);
                    }
                });
            },
            // getJimi : function(arg){
            //     //20190221周四 梅定 cdmeiding@jd.com 老jimi无人维护，更新为新jimi链接
            //     window.open('//chat.jd.com/chat/index.action?venderId=1&entry=jd_web_jimi_babelEmbed');
            //     /*var param = jQuery.extend({
            //             nodeParent : '.s-jimi',
            //             nodeCon : '.s-list',
            //             url : '<iframe frameborder = "0" width = "210" height = "500" src = "' + INTERFACE.linkJimi + (jQuery('#JSHOP_CHANNEL_FLAG').val()=='jr' ? '?source=activityFinancing' : '?source=jshopEmbed')+'&pagetype=activity_page&pagevalue=' + APPTYPE.ID +'" ></iframe>'//接口
            //         },arg),
            //         that = jQuery(param.nodeParent),
            //         node_con = that.find(param.nodeCon);
            //
            //     if(!node_con.length) return;
            //     node_con.html(param.url);*/
            // },
            getIm : function(arg){
                var param = jQuery.extend({
                    nodeParent : '.s-im',
                    nodeCon : '.s-list',
                    url : INTERFACE.checkChat//接口
                },arg);
                
                window.open(jQuery(param.nodeParent).attr('data-href'));
                
            }
        };
    }();


    /* 附属功能：关注、收藏、分享、返回顶部 */

    var pageExtra = function(){
        return {
            /* 关注：活动和店铺 */
            addFollow : function(){

            },
            /* 收藏：活动和店铺 */
            addFavorite : function(arg){
                var param = jQuery.extend({
                        nodeParent : '.s-extra-favorite',
                        title : document.title,
                        href : location.href
                    },arg),
                    that = jQuery(param.nodeParent),
                    TITLE = param.title,
                    HREF = encodeURIComponent(param.href);

                if(!that.length) return;

                if (document.all) {
                    window.external.AddFavorite(HREF, TITLE);
                } else if (window.sidebar) {
                    window.sidebar.addPanel(TITLE, HREF, "");
                } else {
                    alert("\u5bf9\u4e0d\u8d77\uff0c\u60a8\u7684\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u6b64\u64cd\u4f5c!\n\u8bf7\u60a8\u4f7f\u7528\u83dc\u5355\u680f\u6216Ctrl+D\u6536\u85cf\u672c\u7ad9\u3002");
                }
            },
            /* 显示分享二维码：活动和店铺 */
            addShare : function(args){
                var param = jQuery.extend({
                    scope: '.s-extra-share',
                    iconQrCode : '.s-icon-extra-share',
                    qrCodeArea : '.s-share-area',
                    qrCode : '.qrPic',
                    urlText: ''
                }, args || {}),
                    _this = jQuery(param.scope),
                    iconQrCode = _this.find(param.iconQrCode)                

                // 判断当前页面是活动还是店铺
                switch(APPTYPE.TYPE) {
                    case 0:
                    case 2:
                        // 活动
                        param.urlText = window.location.href + '&qrcode=0&utm_campaign=t_1000001992_pchuodong&utm_source=&utm_medium=&utm_term=&pc_source=pc_jshop_' + $('#pageInstance_appId').val();
                        break;
                    case 1:
                    case 3:
                        // 店铺
                        param.urlText = getHttp()+'ok.jd.com/m/index-' + $('#shop_id').val() + '.html' + '&qrcode=1';
                        break;
                    default:
                        break;
                }

                // 鼠标移动到节点上显示二维码
                iconQrCode.bind('mouseover', function (e) {
                    createQrCode(_this);
                });

                //二维码主逻辑
                function createQrCode(dom){
                    var qrCodeArea = dom.find(param.qrCodeArea),
                        qrCode = qrCodeArea.find(param.qrCode),
                        urlText,
                        qrCodeText;
                    if(qrCode.html() === '') {
                        urlText = param.urlText.replace(/ /g, "");
                        qrCodeText = encodeURIComponent(urlText);
                        qrCode.html('<img src="http://qrimg.jd.com/'+qrCodeText+'-160-1-4-2.png" width="160" height="160"/>');
                    }
                }
            },
            /* 返回顶部 */
            toTop : function(arg){
                jQuery('body,html').animate({scrollTop:0}, 800);
            },
            /* 3d店铺 */
            threeD : function(arg){
               if(jQuery('#use3DShop').attr('value') == 'true'){
                window.open(jQuery('#url3d').attr('value'));
               }
            }
        };
    }();



    /* 调用函数 */
    jQuery(function(){
        /* 初始化页面结构及CSS */
        if(APPTYPE.CSSURL){ $('body').append('<link href="' + APPTYPE.CSSURL + '" rel="stylesheet" type="text/css" />')}
        $('body').append(sidebarHtml);
        if(jQuery('.s-jd-toolbar').length > 0){
            /* 如果是ipad浏览器或者是ie6，则隐藏侧栏 */
            if (/ipad/i.test(navigator.userAgent) || (jQuery.browser.msie && (jQuery.browser.version == "6.0") && !jQuery.support.style)) {
                jQuery('.s-jd-toolbar').css('display','none');
            }else{
                setTimeout(function(){
                    jQuery('.s-jd-toolbar').removeAttr('style').addClass('s-show');
                } , 1000);
            }
        }

        /* 20151020 统一关注接口 依赖utils.js关注公共方法 */
        !function(){
            var _this = jQuery('.s-extra-attention');
            if(!_this.find('.s-mt').attr('data-id')){
                if(APPTYPE.TYPE === 2){ //店铺活动的关注需要传递活动ID
                    var appId = (typeof _appId === 'undefined') ? $('#pageInstance_appId').val() : _appId;
                    _this.find('.s-mt').attr('data-id', appId);
                }else if(APPTYPE.TYPE === 1 || APPTYPE.TYPE === 3){
                    _this.find('.s-mt').attr('data-id', APPTYPE.SHOPID);
                }else{
                    _this.find('.s-mt').attr('data-id', APPTYPE.ID);
                }
            }

            var args = {};
            args.attentType = (APPTYPE.TYPE == 0 || APPTYPE.TYPE == 2) ? 'activity' : 'vender';
            if(APPTYPE.TYPE == 0){
                args.activityType = 1;
            }
            if(APPTYPE.TYPE == 2){
                args.activityType = 0;
            }
            args.node = '.s-mt';
            args.dataId = 'data-id';
            args.dataState = 'data-state';
            args.dataType = 'data-type';
            args.current = 'current';

            _this.saleAttent(args);
        }();

        /* 获取广告位内容 */
        function getRightCon(){
            var appId,
                param = {
                    node : '.s-jd-toolbar',
                    iconList : '.s-icon-list',
                    iconExtra: '.s-icon-extra',
                    header : '.s-header',
                    className : 's-show',
                    smallScreen : 's-small-screen',
                    headerTitle : '.s-mt',
                    domNodeTitle : '.s-sale-title'
                },
                node = jQuery(param.node),
                iconList = node.find(param.iconList),
                iconExtra = node.find(param.iconExtra),
                header  = node.find(param.header),
                headerTitle = header.find(param.headerTitle);

            if(APPTYPE.TYPE == 0 || APPTYPE.TYPE == 2){
                getJshopAdvertise(); //获取广告位内容
            }

            /* 获取jshop里面配置的广告内容 */
            function getJshopAdvertise(){
                $.ajax({
                    url : SLD.actJshop + '/pcSidebarAd.html',
                    dataType : 'jsonp',
                    success : function(data){
                        if(data.data!=''){
                            var _thisObj = $('<div>'+data.data+'</div>');
                            if(_thisObj.find('#J_activityInstanceId').length){
                                var activeIds = _thisObj.find('#J_activityInstanceId').val().split(','),activeIdsLen=activeIds.length,_thisActiveId = $("#pageInstance_appId").val();
                                for(var i = 0; i < activeIdsLen;i++){
                                    if(activeIds[i] === _thisActiveId){
                                        $(data.data).appendTo('body');
                                        headerTitle.append(jQuery(param.domNodeTitle));
                                        header.addClass(param.className);
                                        setListPosition();
                                        return false
                                    }
                                }
                            }else {
                                $(data.data).appendTo('body');
                                headerTitle.append(jQuery(param.domNodeTitle));
                                header.addClass(param.className);
                                setListPosition();
                            }
                        }else{
                            //getAdvertiseId();
                        }
                    }
                });
            }

            /* 获取提报广告位ID
            function getAdvertiseId(){
                jQuery.ajax({
                    url : '//act.jshop.jd.com/adv.html',
                    data : {
                        appId :  APPTYPE.ID,
                        appType : APPTYPE.TYPE/2
                    },
                    dataType : 'jsonp',
                    success : function(data){
                        if(data.result){
                            var str = jQuery.trim(data.values);
                            if(str == '') return;
                            else{
                                appId = data.values;
                                getOtherAdvertise();
                            }
                        }
                    }
                });
            }*/

            /* 获取提报系统里面配置的广告内容
            function getOtherAdvertise(){
                $.ajax({
                    url : '//mg.jd.com/json/gateway/at_tempAd.action?tempId=' + appId,
                    dataType : 'jsonp',
                    success : function(data){
                        try{
                            if(data.success){
                                if(typeof data.rightContent != 'undefined' && data.rightContent != ''){
                                    $(data.rightContent).appendTo('body');

                                    var domNodeTitle = jQuery(param.domNodeTitle);
                                    headerTitle.append(domNodeTitle);
                                    header.addClass(param.className);
                                    setListPosition();
                                }
                            }
                        }
                        catch(e){}
                    }
                });
            }*/
        }
        getRightCon();

        /* 修改主图标列表位置 */
        function setListPosition(){
            var param = {
                node : '.s-jd-toolbar',
                iconList : '.s-icon-list',
                iconExtra: '.s-icon-extra',
                header : '.s-header',
                className : 's-show',
                smallScreen : 's-small-screen',
                headerTitle : '.s-mt',
                domNodeTitle : '.s-sale-title'
            },
                node = jQuery(param.node),
                iconList = node.find(param.iconList),
                iconExtra = node.find(param.iconExtra),
                header  = node.find(param.header),
                headerTitle = header.find(param.headerTitle),
                domNodeTitle = jQuery(param.domNodeTitle);

            var w = jQuery(window).width();
            if(w <= 1380 || screenSize == 2){
                node.addClass(param.smallScreen);
            }else{
                node.removeClass(param.smallScreen);
            }

            var top = (jQuery(window).height() - 100 - 370)/2;
            if(APPTYPE.TYPE == 1 || APPTYPE.TYPE == 3){
                top = (jQuery(window).height() - 113 - 370)/2;
                // 在店铺端、首页、京配标志位为true的时候，才展示京配入口
                if ($('#J_DeliveryRegionTag').val() === 'true' && getPageType() === 1) {
                    // 侧边栏工具整体上移，留出京配入口位置. 20170710 cdhewu@jd.com
                    top = (jQuery(window).height() - 113 - 370 - 80)/2;
                    // 如果当前没有执行过京配逻辑，就执行
                    if (!window.hasExcutedJingPei) {
                        window.hasExcutedJingPei = true;
                        renderDeliveryIcon();
                    }
                }
                //iconExtra.addClass('s-current');
            }

            header.find('.s-mt').css({height:top});

            //如果有活动大促
            if(domNodeTitle.length){
                iconList.css({marginTop : 0});
            }else{
                top = top > 0 ? top : 0;
                iconList.css({marginTop : top});
            }
        }
        setListPosition();
        jQuery(window).resize(function(){
            setListPosition();
        });

        /* 显示返回顶部、3D店铺 */
        var showExtraIcon = function(){
            var param = {
                node : '.s-jd-toolbar',
                iconTotop : '.s-extra-totop',
                icon3d : '.s-extra-3d'
            },
                node = jQuery(param.node),
                iconTotop = node.find(param.iconTotop),
                icon3d = node.find(param.icon3d);

            jQuery(window).scroll(function(){
                var topPos = jQuery(this).scrollTop();
                if(topPos > 200){
                    iconTotop.show(300);
                }else{
                    iconTotop.hide(300);
                }
            });

            if(APPTYPE.TYPE == 1 || APPTYPE.TYPE == 3){
                setTimeout(function(){
                    //icon3d.show();  20151228星期一 去除3D店铺显示
                },1000);
            }
        }();


        /* 点击外侧收起侧栏 */
        jQuery(window).click(function(e){
            if($(e.target).closest('.s-jd-toolbar').length) return;

            var param = {
                currentIcon : '.s-icon-list>div.s-current .s-mt'
            };
            if(jQuery(param.currentIcon)){
                jQuery(param.currentIcon).trigger('click');
            }
        });


        /* 判断客服是否是在线或者可留言 */
        function showIm(arg){
            var param = jQuery.extend({
                nodeParent : '.s-im',
                nodeCon : '.s-list',
                defaultClass:'s-online',
                url : INTERFACE.checkChat//接口
            },arg);

            /* 获取数据 */
            var data = {
                shopId : APPTYPE.SHOPID
            };

            jQuery.ajax({
                url : param.url,
                data : data,
                dataType : 'jsonp',
                success : function(data){
                    if(data.code != 0){
                        jQuery(param.nodeParent).show();
                        jQuery(param.nodeParent).attr('data-href', INTERFACE.chat.chat + '?shopId=' + data.shopId + '&code=' + data.code)
                    }
                    if (data.code == 1) {
                        jQuery(param.nodeParent).addClass(param.defaultClass);
                    }
                }
            });
        };

        //20151023星期五 江春志强烈要求自营店铺侧边栏去掉咚咚
        /*if(APPTYPE.TYPE == 1){
            showIm();
        }*/
        //20160518江春志需要同时展示POP和自营的咚咚
        if(APPTYPE.TYPE == 1 || APPTYPE.TYPE == 3){
            showIm();
            if(APPTYPE.TYPE == 3){
                jQuery('.s-icon-im').addClass('s-self');
            }
        }

         /* tab切换 */
         !function tab(){
            var param = {
                node : '.s-attention',
                tabNode:'.s-tab a',
                tabContent:'.s-con .s-tab-con',
                defaultClass:'s-current',
                eventType : 'mouseenter'
            },
                node = jQuery(param.node),
                tabNode = node.find(param.tabNode),
                tabContent = node.find(param.tabContent),
                index = 0;


            //初始化结构
            tabNode.eq(0).addClass(param.defaultClass);
            tabContent.eq(0).addClass(param.defaultClass);

            //绑定鼠标移动事件
            tabNode.each(function(ind,n){
                $(n)[param.eventType](function(){
                    index = ind;
                    $(this).addClass(param.defaultClass).siblings().removeClass(param.defaultClass);
                    tabContent.eq(index).addClass(param.defaultClass).siblings().removeClass(param.defaultClass);
                });
            });
         }();

        /* 侧栏图标事件 */
        jQuery('.s-icon-list>div .s-mt').click(function(){
            var that = jQuery(this);

            //20190221周四 梅定 cdmeiding@jd.com 老jimi无人维护，更新为新jimi链接
            if(that.hasClass('s-icon-im') /*|| that.hasClass('s-icon-jimi')*/){
                _function[that.parent().attr('data-widget')]();
                return;
            }
            
            //如果是广告位，且不需要展开，而是跳转
            if(that.hasClass('s-icon-header') && jQuery('.s-sale-con').attr('data-changeUrl')){
                window.open(jQuery('.s-sale-con').attr('data-changeUrl'));
                return;
            }

            //如果是展开状态
            if(that.parent().hasClass('s-current')){
                that.parent().removeClass('s-current');
                that.parents('.s-jd-toolbar').removeClass('s-current');
                setTimeout(function(){that.parent().find('.s-li-con').html('');that.parent().find('.check-more-coupon').remove();},300);//关闭时，CSS动画完成后清空数据
            }else{
                jQuery('.s-header, .s-icon-list>div').removeClass('s-current');
                that.parent().find('.s-page').remove();//图标切换时删除分页
                that.parent().find('.s-li-con').html('');
                that.parent().find('.check-more-coupon').remove();//图标切换时先清空数据
                that.parent().addClass('s-current');
                that.parents('.s-jd-toolbar').addClass('s-current');
                if(!that.hasClass('s-icon-header')){
                    login(that.parent());
                }else{
                    _function[that.parent().attr('data-widget')]();
                }
            }
         });

        jQuery('.s-icon-list > .s-coupon > .s-mt').hover(function(){
            if(!$(this).hasClass('js-edited')){
                sidebar.getCouponQuota($(this));
            }
        })

         /* 显示购物车数量 */
         sidebar.getCartNum();
         jQuery('.s-cart .s-mt').mouseenter(function(){
            sidebar.getCartNum();
         });

         /* 更多图标点击判断 */
         jQuery('.s-icon-extra>div .s-mt').click(function(){
            var that = jQuery(this);
            if(that.parent().hasClass('s-extra-attention')){
                login(that.parent());
            }else{
                _function[that.parent().attr('data-widget')]();
            }
         });
         pageExtra.addShare();//上面函数也会执行分享，这里分享不需要点击图标，所以也可立即执行


        /* 方法对象 */
        var _function = {
            's-header' : function(){sidebar.getHeader();},//获取我的广告位
            's-order' : function(){sidebar.getOrder();},//获取我的订单
            's-records' : function(){sidebar.getHistory();},//获取我的足迹
            's-coupon' : function(){sidebar.getCoupon();},//获取我的优惠券
            's-cart' : function(){sidebar.getCart();},//获取我的购物车
            's-attention' : function(){
                sidebar.getAttentionGoods();//获取我关注的商品
                sidebar.getAttentionMall();//获取我关注的店铺
                sidebar.getAttentionSale();//获取我关注的活动
            },
            // 's-jimi' : function(){sidebar.getJimi();}, //JIMI咨询
            's-im' : function(){sidebar.getIm();}, //在线客服
            's-extra-attention' : function(){pageExtra.addFollow();}, //关注
            's-extra-favorite' : function(){pageExtra.addFavorite();}, //收藏
            's-extra-share' : function(){pageExtra.addShare();}, //分享
            's-extra-totop' : function(){pageExtra.toTop();}, //返回顶部
            's-extra-3d' : function(){pageExtra.threeD();} //3d店铺
        }

        /* 验证登陆过程，成功则获取数据 */
        function login(that){
            if(jQuery('#testSidebar').val()){//临时测试JDF登录，店铺系统还未升级JDF
                thick_login(function(){
                    _function[that.attr('data-widget')]();
                 });
            }else{
                jQuery.extend(jdModelCallCenter,{
                    voteLogin:function(obj){
                        jQuery.login({
                            modal:true,
                            complete:function(c){
                                if(c&&c.IsAuthenticated){
                                    _function[that.attr('data-widget')]();
                                }
                            }
                        });
                    }
                });
                jQuery.extend(jdModelCallCenter.settings,{
                    object:this,
                    fn:function(){
                        jdModelCallCenter.voteLogin(this);
                    }
                });
                jdModelCallCenter.settings.fn();
            }
        }
    });
}(window, jQuery);

/*
 * @function: 简单模板渲染
 * @description：根据html模板及数据拼接html片段
 * 应用场景：任意
 * @param：
 * @author：cdzhengwujiang@jd.com 2015-01-07
 */
function renderHTML(tpl, data) {
    var subTpl = tpl,
        reg = /{([\w-_]+)}/,
        mArr;
    while (mArr = subTpl.match(reg)) {
        subTpl = subTpl.replace(reg, data[mArr[1]]);
    }
    return subTpl;
};

/*
 * @function：静态分页
 * @description：根据元素总数量及当前可显示数量生成静态分页
 * 应用场景：任意
 * @param：
 * @author：cdwanchuan@jd.com 2014-10-15
*/
function addPage(that, dom_node, args){
    var param = jQuery.extend({
        node : '.s-page',
        prev : '.s-prev',
        next : '.s-next',
        pageCon : '.s-page-area',//页码父级容器
        pageScroll : '.s-scroll',
        pageNode : 'a',
        eleLen : 1,//元素个数
        pageNum : 1,//每页显示数量
        siblingNode : null,
        className : 's-current'
     }, args || {});

    if(dom_node.length < 1){
        that.find('.s-tips').addClass(param.className);
        that.find('.s-list').css('background','none');
        return;
    }else{
        that.find('.s-tips').removeClass(param.className);
        that.find('.s-page').remove();
    }

    var totalLen = Math.ceil(param.eleLen / param.pageNum);//获取总页数

    /* 生成分页 */
    function createPage(){
        var oA = '<a href="javascript:void(0);">{i}</a>',
        html = '';
        for (var i = 1, len = totalLen; i <= len; i++) {
            html += oA.replace("{i}", i);
        }

        var pageHtml = '<div class="s-page"><div class="s-con"><span class="s-bg-left"></span><span class="s-prev"></span><div class="s-page-area"><div class="s-scroll">' + html + '</div></div><span class="s-more">...</span><span class="s-next"></span><span class="s-bg-right"></span></div></div>';

        that.find(param.siblingNode).after(pageHtml);
    }
    createPage();

    /* 箭头、页面容器数量、容器宽度定义 */
    var prev = that.find(param.node).find(param.prev),//上一个箭头
        next = that.find(param.node).find(param.next),//下一个箭头
        index = 0,
        pageNode = that.find(param.pageCon).find(param.pageNode),//页码节点
        pageConNum = 5,//页码容器可显示数量
        pageConW = (pageNode.length < pageConNum) ? pageNode.length * pageNode.outerWidth(true) :pageConNum *  pageNode.outerWidth(true),//页码容器宽度
        minIndex=0,maxIndex=Math.min(pageConNum,totalLen) - 1;

    that.find(param.pageCon).css('width', pageConW);//控制页码容器宽度


    /* 如果少于1页，则上下移动箭头不显示 */
    if(totalLen < 2){
        prev.hide();
        next.hide();
    }

    function domOperate(){
        pageNode.removeClass(param.className);
        pageNode.eq(index).addClass(param.className);

        //当页码数量大于z容器可显示宽度时，移动容器位置
        if(index > maxIndex){
            that.find(param.pageScroll).css('margin-left', -(index - pageConNum + 1)*pageNode.outerWidth(true));
            maxIndex = index;
            minIndex = index - pageConNum + 1;
        }
        else if(index < minIndex){
            that.find(param.pageScroll).css('margin-left', -index*pageNode.outerWidth(true));
            minIndex = index;
            maxIndex = index + pageConNum - 1;
        }
        else{

        }
        showData();
    }

    /* 显示当前页数据 */
    function showData(){
        dom_node.removeClass(param.className);
        if($('.s-coupon .s-product').length > 0 ) $('.s-coupon .s-product').slideUp();
        for(var i = index*param.pageNum; i <= index*param.pageNum +param.pageNum - 1; i+=1){
            dom_node.eq(i).addClass(param.className);
        }
    }

    /* 点击下一页 */
    next.click(function(){
        if((index+1) == pageNode.length) {return;};
        index +=1;
        domOperate();
    });
    /* 点击下一页 */
    prev.click(function(){
        if(index == 0) {return;};
        index -=1;
        domOperate();
    });

    /* 页码事件绑定及第一页初始化 */
    pageNode.each(function(i,e){
        jQuery(e).click(function(){
            index = i;
            domOperate();
            if(index == 0){
                that.find(param.node).addClass(param.className)
            }
        });
    });
    pageNode.eq(index).trigger('click');
}

/* 时间戳转日期格式 */
Date.prototype.format = function (format) {
    var o = {
        "M+": this.getMonth() + 1,//month
        "d+": this.getDate(),//day
        "h+": this.getHours(),//hour
        "m+": this.getMinutes(),//minute
        "s+": this.getSeconds(),//second
        "q+": Math.floor((this.getMonth() + 3) / 3),//quarter
        "S": this.getMilliseconds() //millisecond
    };

    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }

    for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return format;
};
/* example
var testDate = new Date(1320336000000); //这里必须是整数，毫秒
var testStr = testDate.format("yyyy年MM月dd日hh小时mm分ss秒");
var testStr2 = testDate.format("yyyyMMdd hh:mm:ss");
alert(testStr + " " + testStr2);
*/

/*
 * @function: 初始京配入口
 * @description：根据当前页面的参数确定京配入口url
 * 应用场景：任意
 * @param：
 * @author：cdhewu@jd.com 2017-07-10
 */
function renderDeliveryIcon() {
    //20170725, 龚小冬，mall.jd.com/view/checkAreaGoodsStock.html?shopId=25789
    //前端调用搜索接口，根据返回值判断，如果当前商家有京配商品才展示京配小车
    $.ajax({
        url: '//mall.jd.com/view/checkAreaGoodsStock.html?shopId='+ $('#shop_id').val(),
        dataType: 'jsonp', 
        success: function (data) {
            if (data && data.result && data.areaStock) {
                var delivery = $('.s-jd-toolbar .J_deliveryWrap');
                // 根据页面参数，生成京配入口url， 示例：//mall.jd.com/view_search-354149-80429-103760-0-1-0-0-1-1-24.html?col_type=L0M0
                var url = '//';
                if ($('#hkFlag').val() === 'true') {
                    url += 'mall.jd.hk/view_search';
                } else {
                    url += 'mall.jd.com/view_search';
                }
                url += '-' + $('#pageInstance_appId').val() + '-' + $('#vender_id').val() + '-' + $('#shop_id').val() + '-0-1-0-0-1-1-60.html';
                if (window.location.search === '') {
                    url += '?col_type=L0M0';
                } else {
                    url += window.location.search + '&col_type=L0M0';
                }
                delivery.find('a').attr('href', url);
                delivery.css('display', 'block');
            }
        }
    });
}

function getJdEidtoWindow(callBack){
    if(window.JdEid && typeof callBack === 'function' ){
        callBack.call(window, window.JdEid);
    }else{
        var getTimer = setInterval(function(){
            if(window.getJdEid && typeof window.getJdEid == 'function'){
                try{
                    getJdEid(function(eid,fp,udfp){
                        window.JdEid = { eid: eid, fp: fp, udfp: udfp};
                        if(callBack && typeof callBack == 'function'){
                            callBack.call(window, window.JdEid);
                        }
                    });
                }catch(e){
                    window.JdEid = {};
                    if(callBack && typeof callBack == 'function'){
                        callBack.call(window, window.JdEid);
                    }
                }
                window.clearInterval(getTimer);
            }
        }, 100);
    }
    
}

