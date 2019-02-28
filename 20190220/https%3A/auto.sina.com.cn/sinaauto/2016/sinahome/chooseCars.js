/* 30,96,81 2015-12-04 15:36:32 */
(function () {
    if(typeof JSON === 'undefined'){
        var JSON = (function () {
            JSON = {};
            function f(n) {
                return n < 10 ? "0" + n : n
            }

            if (typeof Date.prototype.toJSON !== "function") {
                Date.prototype.toJSON = function (key) {
                    return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
                };
                String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function (key) {
                    return this.valueOf()
                }
            }
            var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {"\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"}, rep;

            function quote(string) {
                escapable.lastIndex = 0;
                return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
                    var c = meta[a];
                    return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                }) + '"' : '"' + string + '"'
            }

            function str(key, holder) {
                var i, k, v, length, mind = gap, partial, value = holder[key];
                if (value && typeof value === "object" && typeof value.toJSON === "function") {
                    value = value.toJSON(key)
                }
                if (typeof rep === "function") {
                    value = rep.call(holder, key, value)
                }
                switch (typeof value) {
                    case"string":
                        return quote(value);
                    case"number":
                        return isFinite(value) ? String(value) : "null";
                    case"boolean":
                    case"null":
                        return String(value);
                    case"object":
                        if (!value) {
                            return"null"
                        }
                        gap += indent;
                        partial = [];
                        if (Object.prototype.toString.apply(value) === "[object Array]") {
                            length = value.length;
                            for (i = 0; i < length; i += 1) {
                                partial[i] = str(i, value) || "null"
                            }
                            v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
                            gap = mind;
                            return v
                        }
                        if (rep && typeof rep === "object") {
                            length = rep.length;
                            for (i = 0; i < length; i += 1) {
                                if (typeof rep[i] === "string") {
                                    k = rep[i];
                                    v = str(k, value);
                                    if (v) {
                                        partial.push(quote(k) + (gap ? ": " : ":") + v)
                                    }
                                }
                            }
                        } else {
                            for (k in value) {
                                if (Object.prototype.hasOwnProperty.call(value, k)) {
                                    v = str(k, value);
                                    if (v) {
                                        partial.push(quote(k) + (gap ? ": " : ":") + v)
                                    }
                                }
                            }
                        }
                        v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
                        gap = mind;
                        return v
                }
            }

            if (typeof JSON.stringify !== "function") {
                JSON.stringify = function (value, replacer, space) {
                    var i;
                    gap = "";
                    indent = "";
                    if (typeof space === "number") {
                        for (i = 0; i < space; i += 1) {
                            indent += " "
                        }
                    } else {
                        if (typeof space === "string") {
                            indent = space
                        }
                    }
                    rep = replacer;
                    if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
                        throw new Error("JSON.stringify")
                    }
                    return str("", {"": value})
                }
            }
            if (typeof JSON.parse !== "function") {
                JSON.parse = function (text, reviver) {
                    var j;

                    function walk(holder, key) {
                        var k, v, value = holder[key];
                        if (value && typeof value === "object") {
                            for (k in value) {
                                if (Object.prototype.hasOwnProperty.call(value, k)) {
                                    v = walk(value, k);
                                    if (v !== undefined) {
                                        value[k] = v
                                    } else {
                                        delete value[k]
                                    }
                                }
                            }
                        }
                        return reviver.call(holder, key, value)
                    }

                    text = String(text);
                    cx.lastIndex = 0;
                    if (cx.test(text)) {
                        text = text.replace(cx, function (a) {
                            return"\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                        })
                    }
                    if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                        j = eval("(" + text + ")");
                        return typeof reviver === "function" ? walk({"": j}, "") : j
                    }
                    throw new SyntaxError("JSON.parse")
                }
            }
            return JSON;
        }());
    }
})();

$(function() {
    $.extend({
        brand: function(main, sub, btn, json) {
            var data = json['data'], tempHTML = [ "<li>选品牌</li>" ], temp_id = [], temp_name = [];
            for (var obj in data) {
                for( var brand in data[obj] ){
                    if(typeof(data[obj][brand]['id']) == 'string'){
                        temp_id.push(data[obj][brand]['id']);
                        temp_name.push(data[obj][brand]['zhName']);
                    }
                }
                tempHTML.push('<li class="sgroup">' + obj.toUpperCase() + '</li>');
                for(var i = 0, len = temp_id.length; i < len; i ++){
                    var json_id = temp_id[i];
                    var json_name = temp_name[i];
                    tempHTML.push('<li class="noption" value="' + json_id + '">'+json_name+'</li>');
                }
                temp_id = [], temp_name = [];
            }
            $(main).append(tempHTML.join(""));
            var brandTitle = $("[node-type=brandTitle]", $(".searchCars"));
            var typeTitle = $("[node-type=typeTitle]", $(".searchCars"));
            $("[node-type=brand]", $(".searchCars")).on("click", function() {
                $(main).show();
                $(sub).hide();
                return false;
            });
            $("[node-type=type]", $(".searchCars")).on("click", function() {
                if (!!$(sub).attr("disabled") && $(sub).attr("disabled") === "disabled") {
                    return false;
                }
                $(sub).show();
                $(main).hide();
                return false;
            });
            $(main).on("click", "li:not(.sgroup)", function(e) {
                var tempHTML = [], temp_id = [], temp_name = [];
                var _target = e.target;
                var pid = $(_target).attr("value");
                $(sub).empty().removeAttr("disabled").append("<li>选车型</li>");
                brandTitle.text($(_target).text());
                function afterGetData(json){
                    json = eval(json);
                    var data = json['data'];
                    for(var obj in data){
                        for( var serial in data[obj]['serialList'] ){
                            if(data[obj]['serialList'][serial]['serialId'] != 0){
                                temp_id.push(data[obj]['serialList'][serial]['serialId']);
                                temp_name.push(data[obj]['serialList'][serial]['serialName']);
                            }
                        }
                        if(temp_id.length == 0){
                            tempHTML.push('<li value="">暂无相关车系</li>');
                        }else{
                            tempHTML.push('<li class="sgroup">' + data[obj]['corpName'] + '</li>');
                            for(var i = 0, len = temp_id.length; i < len; i ++){
                                var json_id = temp_id[i];
                                var json_name = temp_name[i];
                                tempHTML.push('<li class="noption" value="' + json_id + '">' + json_name + '</li>');
                            }
                        }
                        temp_id = [], temp_name = [];
                    }
                    $(sub).append(tempHTML.join(""));
                    if ($(sub).children().length === 1) {
                        $(sub).attr("disabled", "disabled");
                    }
                }
                if(serialListDataFromApi[pid]){
                    afterGetData(serialListDataFromApi[pid]);
                }else if(typeof xjStorage !== 'undefined' && xjStorage.get('serialListDataFromApi_'+pid) && (new Date*1 - xjStorage.get('serialListDataFromApi_'+pid).timeStamp <= 24 * 3600 * 1000) && xjStorage.get('serialListDataFromApi_'+pid).data){
                    afterGetData(xjStorage.get('serialListDataFromApi_'+pid).data);
                } else{
                    $.getJSON(getSerialListUrl+pid,function(json){
                        serialListDataFromApi[pid] =json;
                        try{
                            xjStorage.set('serialListDataFromApi_'+pid,{
                                data:json,
                                timeStamp:new Date*1
                            })
                        }catch(e){}
                        afterGetData(json);
                    })
                }
                $(main).attr("value", pid);
                $(main).hide();
                typeTitle.text("选车型");
                e.stopPropagation();
            });
            $(sub).on("click", "li:not(.sgroup)", function(e) {
                var _target = e.target;
                var pid = $(_target).attr("value");
                typeTitle.text($(_target).text());
                $(sub).attr("value", pid).hide();
                e.stopPropagation();
            });
            $("body").on("click", function(e) {
                $(sub).hide();
                $(main).hide();
            });
            if (btn && btn != "") $(btn).click(function() {
                var subid = $(sub).attr("value"), bid = $(main).attr("value"), url='//db.auto.sina.com.cn/';
                if (bid != "选品牌" && bid != "" && bid !== "0" && !!bid) {
                    if (subid != "选车型" && subid != "" && subid !== "0" && !!subid) {
                        url += subid + "/"+'?indexflag=sinahome&bid='+bid +'&subid=' +subid;
                    } else {
                        url +=  '?indexflag=sinahome&bid='+bid;
                    }
                } else {
                    url +=  '?indexflag=sinahome';
                }
                window.open(url);
                return false;
            });
        }
    });
    $("#J_tType").attr("disabled", "disabled");

    var getBrandListUrl = '',getCarBySerialIdUrl='',getSerialListUrl='',getSerialInfoUrl='',getCarInfoByCarIdsUrl='';
    var carBySerialIdDataFromApi = {},serialListDataFromApi={},serialInfoDataFromApi={},carInfoDataFromApi={};
    var xj_cars_changing = false,xj_car_brand_changing = false;
    if (location.hostname === 'auto.sina.com.cn'){
        getBrandListUrl = '//auto.sina.cn/api/db/getBrandList.d.json?callback=?';
        getCarBySerialIdUrl = '//auto.sina.cn/api/db/getCarBySerialId.d.json?status=1&callback=?&serialid=';
        getSerialListUrl = "//db.auto.sina.com.cn/api/cms/car/getSerialList.json?callback=?&sellStatus=1&brandid=";
        getSerialInfoUrl = '//auto.sina.cn/api/db/getSerialInfo.d.json?callback=?&serialids=';
        getCarInfoByCarIdsUrl = '//auto.sina.cn/api/db/getCarInfoByCarIds.d.json?callback=?&carids=';
    }else if (location.hostname === 'db.auto.sina.com.cn'){
        getBrandListUrl = '//db.auto.sina.com.cn/api/cms/car/getBrandList.json';
        getCarBySerialIdUrl = '//db.auto.sina.com.cn/api/cms/car/getCarBySerialId.json?status=1&serialid=';
        getSerialListUrl = "//db.auto.sina.com.cn/api/cms/car/getSerialList.json?sellStatus=1&brandid=";
        getSerialInfoUrl = '//db.auto.sina.com.cn/api/cms/car/getSerialInfo.json?serialids=';
        getCarInfoByCarIdsUrl = '//db.auto.sina.com.cn/api/cms/car/getCarInfoByCarIds.json?carids=';
    }else{
        getBrandListUrl = '//db.auto.sina.com.cn/api/cms/car/getBrandList.json?callback=?';
        getCarBySerialIdUrl = '//db.auto.sina.com.cn/api/cms/car/getCarBySerialId.json?status=1&callback=?&serialid=';
        getSerialListUrl = "//db.auto.sina.com.cn/api/cms/car/getSerialList.json?callback=?&sellStatus=1&brandid=";
        getSerialInfoUrl = '//db.auto.sina.com.cn/api/cms/car/getSerialInfo.json?callback=?&serialids=';
        getCarInfoByCarIdsUrl = '//db.auto.sina.com.cn/api/cms/car/getCarInfoByCarIds.json?callback=?&carids=';
    }
    if(window.localStorage && typeof JSON !== 'undefined'){
        var xjStorage = {
            set: function (key, value) {
                localStorage.setItem(key, JSON.stringify(value));
            },
            get: function (key) {
                return $.parseJSON(localStorage.getItem(key));
            }
        }
    }
    //开始调用
    if(typeof xjStorage != 'undefined'){
        if (xjStorage.get('brandListDataFromApi') && xjStorage.get('brandListDataFromApiTime') && (new Date * 1 - xjStorage.get('brandListDataFromApiTime') <= 60 * 24 * 3600 * 1000)) {
            $.brand("#J_tBrand", "#J_tType", "#J_searchType", xjStorage.get('brandListDataFromApi'));
        }else{
            var node = document.createElement('script');
            node.onreadystatechange = function(){
                var r = node.readyState;
                if (r === 'loaded' || r === 'complete') {
                    node.onreadystatechange = null;
                    var json = $.parseJSON('{"status":"0","msg":"success","data":' + JSON.stringify(g_brand_list_data)+'}');
                    xjStorage.set('brandListDataFromApi', json);
                    xjStorage.set('brandListDataFromApiTime', new Date * 1);
                    $.brand("#J_tBrand", "#J_tType", "#J_searchType", json);
                }
            }
            node.onload = function(){
                var json = $.parseJSON('{"status":"0","msg":"success","data":' + JSON.stringify(g_brand_list_data)+'}');
                xjStorage.set('brandListDataFromApi', json);
                xjStorage.set('brandListDataFromApiTime', new Date * 1);
                $.brand("#J_tBrand", "#J_tType", "#J_searchType", json);
            }
            node.onerror = function(){
                $.getJSON(getBrandListUrl,function(json){
                    xjStorage.set('brandListDataFromApi', json);
                    xjStorage.set('brandListDataFromApiTime', new Date * 1);
                    $.brand("#J_tBrand", "#J_tType", "#J_searchType", json);
                });
            }
            node.setAttribute('charset','utf-8');
            node.src = '//www.sinaimg.cn/qc/js/brandList.min.js';
            var node0 = document.getElementsByTagName('script')[0];
            node0.parentNode.insertBefore(node,node0);
        }
    }else{
        if(typeof JSON !== 'undefined'){
            var node = document.createElement('script');
            node.onload = function(){
                var json = $.parseJSON('{"status":"0","msg":"success","data":' + JSON.stringify(g_brand_list_data)+'}');
                $.brand("#J_tBrand", "#J_tType", "#J_searchType", json);
            }
            node.onerror = function(){
                $.getJSON(getBrandListUrl,function(json){
                    $.brand("#J_tBrand", "#J_tType", "#J_searchType", json);
                });
            }
            node.setAttribute('charset','utf-8');
            node.src = '//www.sinaimg.cn/qc/js/brandList.min.js';
            var node0 = document.getElementsByTagName('script')[0];
            node0.parentNode.insertBefore(node,node0);
        }else{
            $.getJSON(getBrandListUrl,function(json){
                $.brand("#J_tBrand", "#J_tType", "#J_searchType", json);
            });
        }
    }

});