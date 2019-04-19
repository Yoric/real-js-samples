/**
 * mini购物车
 * 2015年07月03日
 * caoyang
 */
var cart = window.csdn || function () {
};
cart.timer = '';
cart.timershow = '';
cart.ident = true;
cart.pay_code_timeout = 5 * 60 * 1000;
cart.prefix_domain = '';
cart.order_number = '';
cart.listItem_string = "mini_cart";
cart.mini_cart_num_string = "mini_cart_num";
cart.session_id = 'dc_session_id';
cart.username = 'UserName';
cart.host2 = window.location.host;
cart.protocol = document.location.protocol;
if (cart.host2.match(/^beta[a-z]*/) || cart.host2.match(/^test[a-z]*/)) {
    cart.prefix_domain = 'beta';
} else if (cart.host2.match(/^l[a-z]*/)) {
    cart.prefix_domain = 'l';
}
cart.domain = cart.protocol + '//'+ cart.prefix_domain + 'cart.csdn.net/';
cart.order_url = cart.protocol + '//'+ cart.prefix_domain + 'order.csdn.net/';
cart.flag = 1;
cart.miNiItem = $("#mini_cart_show");
cart.timeout_time = 10000;
cart.default_error_msg = "服务器端错误，请稍后重试！";

// 加入购物车 已废弃 请使用 cart.addCart 方法
// 文档地址：http://jira.csdn.net/browse/CSDNMALL-721
cart.add = function (flag, product_id, goods_id, num, call_back_function) {
    call_back_function = call_back_function || '';

    if (typeof call_back_function === "string") {
        call_back_function = eval(call_back_function);
    }

    obj = {
        flag: flag,
        product_id: product_id,
        goods_id: goods_id,
        num: num,
        success_function: call_back_function
    };

    cart.addCart(obj);
};

// 加入购物车 new
// 文档地址：http://jira.csdn.net/browse/CSDNMALL-721
cart.addCart = function (obj) {
    var success_function;
    obj = cart.getObj(obj);

    if (typeof obj.success_function === "function") {
        success_function = obj.success_function;
        delete obj.success_function;
    }

    $.ajax({
        type: 'get',
        url: cart.domain + 'cart/add_cart',
        data: obj,
        dataType: 'jsonp',
        jsonp: "callback",
        jsonpCallback: "addCartCallback",
        timeout: cart.timeout_time,
        success: function (msg) {
            cart.get_cache_cart_mum_jsonp();
            success_function(msg);
        },
        error: function () {
            error_function(cart.default_error_msg);
        }
    });
};
var addCartCallback = function () {};

cart.callback = function (callback) {
    if (typeof callback === "function")
        callback();
};

cart.getMiNiList = function (flag) {
    var getJson = {"flag": flag, "is_ajax": 1};
    $.ajax({
        type: 'get',
        url: cart.domain + 'cart/mini_cart_ajax',
        data: getJson,
        dataType: 'jsonp',
        jsonp: "callback",
        async: false,
        jsonpCallback: "miniCartAjaxCallback",
        timeout: cart.timeout_time,
        success: function (msg) {
            var _list_item_string = $("#" + cart.listItem_string);
            _list_item_string.show();
            cart.get_cache_cart_mum_jsonp();
            _list_item_string.html(msg.Message);
            cart.show_out_cart();
        },
        error: function () {
            console.log(cart.default_error_msg);
        }
    });
};
var miniCartAjaxCallback = function () {};

cart.getMiNiHtml = function () {
    var miNiHtml = '<div><div class="shopping_miniCar"><a target="_blank" href="' + cart.domain + 'cart" onmouseover="cart.getMiNiList()" class="shopMini_buyCar tracing-ad" data-mod="popu_344"><a href="' + cart.domain + 'cart" onmouseover="cart.getMiNiList()"> 购物车</a><span class="shopMini_num" style="display:none;" id="' + cart.mini_cart_num_string + '">0</span><em class="shopMini_line"></em></a><div id="' + cart.listItem_string + '"></div></div></div>';
    cart.miNiItem.html(miNiHtml);
    $("#mini_cart_show").html(miNiHtml);
    cart.get_cache_cart_mum_jsonp();
};

// 立即购买 废弃 请使用 cart.buyNow 方法
// 文档地址：http://jira.csdn.net/browse/CSDNMALL-721
cart.buy_now = function (product_id, goods_id, num, flag,error_function,timeout_function,obje) {
    obje = obje || {};
    var obj = {
        product_id: product_id,
        goods_id: goods_id,
        num: num,
        flag: flag,
        coupon_code: obje.coupon_code || "",
        error_function: error_function,
        timeout_function: timeout_function
    }
    cart.buyNow(obj);
};

// 立即购买 new
// 文档地址：http://jira.csdn.net/browse/CSDNMALL-721
cart.buyNow = function (obj) {
    var success_function,error_function,timeout_function;
    obj = cart.getObj(obj);

    if (typeof obj.success_function === "function") {
        success_function = obj.success_function;
        delete obj.success_function;
    }

    if (typeof obj.error_function === "function") {
        error_function = obj.error_function;
        delete obj.error_function;
    }

    if (typeof obj.timeout_function === "function") {
        timeout_function = obj.timeout_function;
        delete obj.timeout_function;
    }
    $.ajax({
        type: 'get',
        url: cart.domain + 'cart/buy_now',
        data: obj,
        dataType: 'jsonp',
        jsonp: "callback",
        jsonpCallback: "buyNowCallback",
        timeout: cart.timeout_time,
        success: function (msg) {
            if (msg.status == 1) {
                cart.post(cart.order_url + 'order/order_purchase_submit', {
                    t: new Date().getTime(),
                    cart_id: msg.product_info,
                    coupon_code: obj.coupon_code || ""
                });
                return false;
            }
            error_function(msg);
        },
        error: function () {
            error_function(cart.default_error_msg);
        },
        complete: function (XMLHttpRequest, status) {
            if (status === 'timeout') {
                timeout_function();
            }
        }

    });
};
var buyNowCallback = function () {};

//直接加入订单 CSDNMALL-551
cart.addOrderDirectly = function (obj) {
    var success_function,error_function,timeout_function;
    obj = obj || {};
    obj.t = new Date().getTime();
    obj.is_ajax = 1;

    if (typeof obj.success_function === "function") {
        success_function = obj.success_function;
        delete obj.success_function;
    }

    if (typeof obj.error_function === "function") {
        error_function = obj.error_function;
        delete obj.error_function;
    }

    if (typeof obj.timeout_function === "function") {
        timeout_function = obj.timeout_function;
        delete obj.timeout_function;
    }

    $.ajax({
        type: 'get',
        url: cart.domain + 'cart/add_order_directly',
        data: obj,
        dataType: 'jsonp',
        jsonp: "callback",
        jsonpCallback: "addOrderDirectlyCallback",
        timeout: cart.timeout_time,
        success: function (msg) {
            if (msg.status == 1) {
                cart.post(cart.order_url + 'order/order_submit_info', {
                    t: new Date().getTime(),
                    cart_box: msg.cart_box,
                    cart_flag: obj.flag
                });
                return false;
            }
            error_function(msg);
        },
        error: function () {
            error_function(cart.default_error_msg);
        },
        complete: function (XMLHttpRequest, status) {
            if (status === 'timeout') {
                timeout_function();
            }
        }

    });
};
var addOrderDirectlyCallback = function () {};

cart.mouseout = function () {
    $("#" + cart.listItem_string).hide();
    $(".shopMini_line").removeClass("shopMini_line_hide");
    $('.shopMini_con').addClass('shopMini_hide');
    $('.shopMini_buyCar').removeClass("shopMini_buyCar_hover");
    $('.line_r').show();
};

cart.mouseover = function () {
    $("#" + cart.listItem_string).show();
    $(".shopMini_line").addClass("shopMini_line_hide");
    $('.shopMini_con').removeClass('shopMini_hide');
    $('.shopMini_buyCar').addClass("shopMini_buyCar_hover");
    $('.line_r').hide();

};

//移除选中商品
cart.delete_cart_goods = function (cart_id) {
    $.ajax({
        type: "get",
        url: cart.domain + "cart/delete_cart_good_jsonp",
        async: false,
        data: 'cart_id=' + cart_id + '&t=' + new Date().getTime() + '&is_ajax=1',
        dataType: 'jsonp',
        jsonp: "callback",
        jsonpCallback: "deleteCartGoodsCallback",
        timeout: cart.timeout_time,
        success: function (msg) {
            if (msg.status == 1) {
                if (msg.type == 3) {
                    get_sheet_cart();
                } else {
                    cart.getMiNiHtml();
                    if (is_cart == true) {
                        cart.get_cache_cart_mum_jsonp();
                        cart.getMiNiHtml();
                        alert('商品删除成功!');
                    }
                }
            }
        }
    })
};
var deleteCartGoodsCallback = function () {};

//获取购物车商品数量
cart.get_cache_cart_mum_jsonp = function () {
    $.ajax({
        type: "get",
        url: cart.domain + "cart/get_cache_cart_mum_jsonp",
        async: false,
        data: 't=' + new Date().getTime() + '&is_ajax=1',
        dataType: 'jsonp',
        jsonp: "callback",
        jsonpCallback: "getCacheCartNumJsonpCallback",
        timeout: cart.timeout_time,
        success: function (msg) {
            var _mini_cart_num = $("#mini_cart_num");
            if (msg !== 'obj' && msg !== '') {
                var insert_num = parseInt(msg) ? parseInt(msg) : 0;
                if (insert_num !== '' || insert_num !== 0) {
                    _mini_cart_num.text(insert_num);
                    _mini_cart_num.show();
                } else {
                    _mini_cart_num.text(0);
                    _mini_cart_num.hide();
                }
            } else {
                _mini_cart_num.text(0);
                _mini_cart_num.hide();
            }
        }
    })
};
var getCacheCartNumJsonpCallback = function () {};

cart.post = function (URL, PARAMS) {
    var temp = document.createElement("form");
    temp.action = URL;
    temp.method = "post";
    temp.style.display = "none";
    temp.target = "_top";
    for (var x in PARAMS) {
        var opt = document.createElement("textarea");
        opt.name = x;
        opt.value = PARAMS[x];
        temp.appendChild(opt);
    }
    document.body.appendChild(temp);
    temp.submit();
    return temp;
};

cart.show_out_cart = function () {
    var $buyCar = $(".shopping_miniCar");

    $buyCar.hover(function () {
        $("#" + cart.listItem_string).show();
        $(".shopMini_line").addClass("shopMini_line_hide");
        $('.shopMini_buyCar').addClass("shopMini_buyCar_hover");
        $('.line_r').hide();
    }, function () {
        setTimeout(function () {
            $("#" + cart.listItem_string).hide()
        }, 800);
        $(".shopMini_line").removeClass("shopMini_line_hide");
        $('.shopMini_buyCar').removeClass("shopMini_buyCar_hover");
        $('.line_r').show();

    });
};

// 扫码支付 废弃 请使用 cart.scanPay 方法
// 文档地址：http://jira.csdn.net/browse/CSDNMALL-721
cart.scan_pay = function (product_id, goods_id, num, request_type, flag, success_function, error_function, timeout_function) {
    obj = {
        product_id: product_id,
        goods_id: goods_id,
        num: num,
        request_type: request_type,
        flag: flag,
        success_function: success_function,
        error_function: error_function,
        timeout_function: timeout_function,
    };
    cart.scanPay(obj);
};

// 扫码支付 new
// 文档地址：http://jira.csdn.net/browse/CSDNMALL-721
cart.scanPay = function (obj) {
    var success_function,error_function,timeout_function;
    var session_value = cart.getCookie(cart.session_id);
    obj = cart.getObj(obj);
    obj.session_id = session_value;

    if (typeof obj.success_function === "function") {
        success_function = obj.success_function;
        delete obj.success_function;
    }

    if (typeof obj.error_function === "function") {
        error_function = obj.error_function;
        delete obj.error_function;
    }

    if (typeof obj.timeout_function === "function") {
        timeout_function = obj.timeout_function;
        delete obj.timeout_function;
    }

    var scanPayAjax = $.ajax({
        type: 'get',
        url: cart.domain + 'cart/scan_pay',
        data: obj,
        dataType: 'jsonp',
        jsonp: "callback",
        jsonpCallback: "scanPayCallback",
        timeout: cart.timeout_time,
        success: function (msg) {
            if (msg.status == 1) {
                success_function(obj.request_type, msg);
                cart.order_number = msg.order_number;
                cart.request_type = obj.request_type;
                cart.flag = obj.flag;
                cart.product_id = obj.product_id;
                cart.goods_id = obj.goods_id;
                cart.cacheKey = obj.cacheKey;
                cart.clearTimer();
                cart.timer = setInterval(cart.get_pay_status, 3000);
                cart.timershow = setInterval(function(){
                    cart.pay_code_time_out(timeout_function);
                }, cart.pay_code_timeout);
                return false;
            } else {
                error_function(msg);
            }
        },
        error: function () {
            error_function({status: 15, errorMessage: "获取二维码失败"});
        },
        complete: function (XMLHttpRequest, status) {
            if (status === 'timeout') {
                scanPayAjax.abort();
            }
        }
    });
};
var scanPayCallback = function () {};

//二维码超时
cart.pay_code_time_out = function(timeout_function){
    timeout_function();
    cart.cancel_pay();
};

function getCookie(name){
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}

//轮询查询订单状态
cart.get_pay_status = function () {
    if (cart.ident === false) {
        return false;
    } else {
        cart.ident = false;
        $.ajax({
            type: "get",
            url: cart.order_url + "get_status",
            async: false,
            data: {
                "order_number": cart.order_number,
                "type": cart.request_type,
                "flag": cart.flag,
                "t": new Date().getTime(),
                "is_ajax": 1
            },
            dataType: 'jsonp',
            jsonp: "callback",
            jsonpCallback: "get_pay_status",
            timeout: cart.timeout_time,
            success: function (msg) {
                if (msg.status == 1) {
                    cart.ident = false;
                    // 支付成功，删除缓存
                    cart.delScanPayCache();
                    setTimeout(function(){
                        window.location.replace(msg.url);
                    },300)
                } else if (msg.status == 0) {
                    console.log('获取订单信息获取失败!');
                    cart.ident = false;
                } else {
                    cart.ident = true;
                }
            }, error: function (msg) {
                cart.ident = true;
            }
        });
    }
};

// 支付成功后，删除扫码支付缓存
cart.delScanPayCache = function () {
    var img = new Image();
    img.src = cart.domain + "cart/delScanPayCache/" + cart.cacheKey;
};

// 取消支付
cart.cancel_pay = function () {
    cart.clearTimer();
};

// 清除定时器
cart.clearTimer = function () {
    if(typeof(cart.timer)!="undefined"){
        clearInterval(cart.timer);
    }
    if(typeof(cart.timershow) !== "undefined"){
        clearInterval(cart.timershow);
    }
};

//获取cookie值
cart.getCookie = function(name){
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
};

// 添加默认字段
cart.getObj = function (obj) {
    obj = obj || {};
    if (typeof obj.product_id === "undefined") {
        obj.product_id = 0;
    }

    if (typeof obj.goods_id === "undefined") {
        obj.goods_id = 0;
    }

    if (typeof obj.num === "undefined") {
        obj.num = 1;
    }

    if (typeof obj.is_ajax === "undefined") {
        obj.is_ajax = 1;
    }

    if (typeof obj.t === "undefined") {
        obj.t = new Date().getTime();
    }

    return obj;
};
