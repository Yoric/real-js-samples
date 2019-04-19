if (typeof _getQueryString == 'undefined') {
    _getQueryString = function(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return decodeURIComponent(r[2]);
        return null;
    }
}
if (typeof initCollectLayer == 'undefined') {
    function initCollectLayer(){
        // 从url 获取 手机 姓名 省份 城市
        var telNum = _getQueryString('xjMobile'),
            userName = _getQueryString('xjXName'),
            province = _getQueryString('xjProvince'),
            city = _getQueryString('xjCity');
        if(userName){
            $('input[name="info[xname]"]').val(userName)
        }
        if(telNum){
            $('input[name="info[mobile]"]').val(telNum)
        }
        if(province){
            $('select[name="info[province_id]"]').val(province);
        }
        if(city){
            $('select[name="info[city_id]"]').val(city);
        }
    }
}
var autoCollectObj={};
autoCollectObj.dtd=$.Deferred();
var getBrandListUrl = '',getCarBySerialIdUrl='',getSerialListUrl='',getSerialInfoUrl='',getCarInfoByCarIdsUrl='';
var carBySerialIdDataFromApi = {},serialListDataFromApi={},serialInfoDataFromApi={},carInfoDataFromApi={};
var xj_cars_changing = false,xj_car_brand_changing = false;
if (location.hostname === 'auto.sina.com.cn') {
    getBrandListUrl = '//auto.sina.cn/api/db/getBrandList.d.json?callback=?';
    getCarBySerialIdUrl = '//auto.sina.cn/api/db/getCarBySerialId.d.json?status=1&callback=?&serialid=';
    getSerialListUrl = "//db.auto.sina.com.cn/api/cms/car/getSerialList.json?callback=?&sellStatus=1,2,4&brandid=";
    getSerialInfoUrl = '//auto.sina.cn/api/db/getSerialInfo.d.json?callback=?&serialids=';
    getCarInfoByCarIdsUrl = '//auto.sina.cn/api/db/getCarInfoByCarIds.d.json?callback=?&carids=';
}else if (location.hostname === 'db.auto.sina.com.cn'){
    getBrandListUrl = '//db.auto.sina.com.cn/api/cms/car/getBrandList.json';
    getCarBySerialIdUrl = '//db.auto.sina.com.cn/api/cms/car/getCarBySerialId.json?status=1,2,4&serialid=';
    getSerialListUrl = "//db.auto.sina.com.cn/api/cms/car/getSerialList.json?sellStatus=1,2,4&brandid=";
    getSerialInfoUrl = '//db.auto.sina.com.cn/api/cms/car/getSerialInfo.json?serialids=';
    getCarInfoByCarIdsUrl = '//db.auto.sina.com.cn/api/cms/car/getCarInfoByCarIds.json?carids=';
}else{
    getBrandListUrl = '//db.auto.sina.com.cn/api/cms/car/getBrandList.json?callback=?';
    getCarBySerialIdUrl = '//db.auto.sina.com.cn/api/cms/car/getCarBySerialId.json?status=1,2,4&callback=?&serialid=';
    getSerialListUrl = "//db.auto.sina.com.cn/api/cms/car/getSerialList.json?callback=?&sellStatus=1,2,4&brandid=";
    getSerialInfoUrl = '//db.auto.sina.com.cn/api/cms/car/getSerialInfo.json?callback=?&serialids=';
    getCarInfoByCarIdsUrl = '//db.auto.sina.com.cn/api/cms/car/getCarInfoByCarIds.json?callback=?&carids=';
}
if(window.localStorage){
    var xjStorage = {
        set: function (key, value) {
            localStorage.setItem(key, JSON.stringify(value));
        },
        get: function (key) {
            return JSON.parse(localStorage.getItem(key));
        }
    }
}
if(window.sessionStorage){
    var xjSeStorage = {
        set:function(key,value){
            sessionStorage.setItem(key,JSON.stringify(value));
        },
        get:function(key){
            return JSON.parse(sessionStorage.getItem(key));
        }
    }
}
function GetQueryString(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return unescape(r[2]); return null;
}
(function(window,$) {
    //private method
    function handle(elem){
        elem.hover(function(){
            var index = $(this).index();
            var tab_B = $(this).parent();
            $(this).siblings().removeClass("on");
            $(this).addClass("on");
            tab_B.next().children().hide().eq(index).show();
        });
    }
    handle($('.tab-head li'));
    // haddle cookie
    function setCookie(name,value,days, domain, path)
    {
        var Days = days || 30;
        var exp = new Date();
        exp.setTime(exp.getTime() + Days*24*60*60*1000);
        domain = domain || '.auto.sina.com.cn';
        path = path || '/';
        document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString() + ';domain=' + domain + ';path=' + path;
    }

    function getCookie(name)
    {
        var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
        if(arr=document.cookie.match(reg))
            return unescape(arr[2]);
        else
            return null;
    }
    // getcity
    function autoCityFuc(opt){
        this.wrap = $(opt.wrap);
        this.privceDom = this.wrap.find(opt.privceDom);
        this.cityDom = this.wrap.find(opt.cityDom);
        this.callback = opt.callback;
        this.init();

    }
    autoCityFuc.prototype = {
        cityObj:null,
        privceObj:null,
        init:function(){
            var that = this ;
            if(that.cityObj==null){
                $.getScript('//data.auto.sina.com.cn/car/js/city.js',function(){
                    that.privceObj = province;
                    that.cityObj = city;
                    that.getProvince(province);
                    that.privceDom.change(function(){
                        var cityHtml = that.getCity(that.cityDom,that.cityObj,this.value);
                        that.cityDom.html(cityHtml);
                        that.callback();
                    })
                    that.cityDom.change(function(){
                        that.callback();
                    })

                    setTimeout(function(){
                        var cookxjP = getCookie('xjProvince'),cookxjC = getCookie('xjCity');
                        if(cookxjP){
                            $('select[name="info[province_id]"]').val(cookxjP).change();
                        }
                        if(cookxjC){
                            $('select[name="info[city_id]"]').val(cookxjC);
                        }else{
                            $.getJSON('//interface.sina.cn/auto/inner/getProAndCityId.d.json?callback=?',function(data){
                                var data = data.data;
                                $('select[name="info[province_id]"]').val(data.pids).change();
                                $('select[name="info[city_id]"]').val(data.cids);
                            });
                        }
                    },500);
                })
            }

        },
        getProvince:function(){
            var pHtml = '';
            for (var i in province) {
                if (province.hasOwnProperty(i)) {
                    pHtml += '<option value="'+ i +'">'+ province[i] +'</option>'
                }
            }
            this.privceDom.append(pHtml);
            return pHtml
        },
        getCity:function(obj, city, pid){
            var _index = pid,
                cHtml = '<option value="0">\u8bf7\u9009\u62e9</option>';
            for (var i in city[pid]) {
                if (city[pid].hasOwnProperty(i)) {
                    cHtml += '<option value="'+ i +'">'+ city[pid][i] +'</option>'
                }
            }
            return cHtml;
        }
    }
    /*--------------------------------------------- gloable configure ------------------------------------------------*/
    // var brandDtd = $.Deferred();
    var globalBrandData = null ;
    function getGlobalData(callback){
        function afterGetData(json){
            globalBrandData = json ;
            callback.call(this,json);
        }
        if(typeof xjStorage != 'undefined'){
            if (xjStorage.get('brandListDataFromApi') && xjStorage.get('brandListDataFromApiTime') && (new Date * 1 - xjStorage.get('brandListDataFromApiTime') <= 1)) { //60 * 24 * 3600 * 1000
                afterGetData(xjStorage.get('brandListDataFromApi'));
            }else{
                var node = document.createElement('script');
                node.onload = function(){
                    var json = JSON.parse('{"status":"0","msg":"success","data":' + JSON.stringify(g_brand_list_data)+'}');
                    xjStorage.set('brandListDataFromApi', json);
                    xjStorage.set('brandListDataFromApiTime', new Date * 1);
                    afterGetData(json);
                }
                node.onerror = function(){
                    $.getJSON(getBrandListUrl,function(json){
                        xjStorage.set('brandListDataFromApi', json);
                        xjStorage.set('brandListDataFromApiTime', new Date * 1);
                        afterGetData(json);
                    });
                }
                node.setAttribute('charset','utf-8');
                node.src = '//i0.sinaimg.cn/qc/js/brandList.min.js';
                var node0 = document.getElementsByTagName('script')[0];
                node0.parentNode.insertBefore(node,node0);
            }
        }else{
            var node = document.createElement('script');
            node.onload = function(){
                var json = JSON.parse('{"status":"0","msg":"success","data":' + JSON.stringify(g_brand_list_data)+'}');
                afterGetData(json);
            }
            node.onerror = function(){
                $.getJSON(getBrandListUrl,function(json){
                    afterGetData(json);
                });
            }
            node.setAttribute('charset','utf-8');
            node.src = '//i0.sinaimg.cn/qc/js/brandList.min.js';
            var node0 = document.getElementsByTagName('script')[0];
            node0.parentNode.insertBefore(node,node0);
        }
    }
    getGlobalData(globalCollectEntrance);//入口程序
    /*--------------------------------------------- gloable configure ------------------------------------------------*/
    // getdata
    function globalCollectEntrance(globalBrandData){
        function autoBrandDataFuc(opt){
            this.seriesApi = getSerialListUrl;
            this.carApi = getCarBySerialIdUrl;
            this.wrap = $(opt.wrap);
            this.brandDom  = this.wrap.find(opt.brandClass);
            this.seriesDom = this.wrap.find(opt.seriesClass);
            this.carDom = this.wrap.find(opt.carClass);
            this.xnameDom = this.wrap.find(opt.xnameClass);
            this.callback = opt.callback;
            this.initData = opt.initData || '';
            this.defaultTypeData = opt.isBar ? '(选填)' :'' ;
            // this.needXnameBrandIds = [5,120];//标致、纳智捷
            // this.needXnameSubBrandIds = [{brandId:10,subBrandId:2189}];//撼路者
            this.init();
        }
        autoBrandDataFuc.prototype = {
            brandJson:null,
            init:function(){
                var that = this ;
                this.bindEvent();
            },
            bindEvent:function(){
                var that = this ;
                // brand init
                var brandhtml = that.creatCarHtml(globalBrandData,0);
                that.brandDom.append(brandhtml);
                if(that.initData && that.initData.bid){
                    that.brandDom.val(that.initData.bid);
                    setTimeout(function(){
                        that.brandDom.change();
                    },200)
                }

                // if(brandDtd){
                //     brandDtd.resolve();
                // }
                that.brandDom.change(function(){
                    var pid = $(this).find("option:selected").val();
                    if (pid && pid != '0') {
                        // var showXname = false;
                        // for(var i in that.needXnameBrandIds){
                        //     if(that.needXnameBrandIds.hasOwnProperty(i)){
                        //         if(pid == that.needXnameBrandIds[i]){
                        //             showXname = true;
                        //             break;
                        //         }
                        //     }
                        // }
                        if(xj_car_brand_changing)
                            return;
                        xj_car_brand_changing = true;
                        that.xnameDom.parents('.linkageform .list')['show']();
                        function afterGetData(json){
                            var html = that.creatCarHtml(json,1);
                            that.seriesDom.html('<option value="0">选择车系</option>'+html)
                            that.carDom.html('<option value="0">选择车型'+that.defaultTypeData+'</option>');
                            xj_car_brand_changing = false;
                            if(that.initData && that.initData.subid){
                                that.seriesDom.val(that.initData.subid);
                                that.seriesDom.change();
                            }
                        }
                        if(typeof xjSeStorage != 'undefined' && xjSeStorage.get('serialListDataFromApi_'+pid)){
                            afterGetData(xjSeStorage.get('serialListDataFromApi_'+pid));
                        }else if(serialListDataFromApi[pid]){
                            afterGetData(serialListDataFromApi[pid]);
                        }else if(xjStorage.get('serialListDataFromApi_'+pid) && (new Date*1 - xjStorage.get('serialListDataFromApi_'+pid).timeStamp <= 24 * 3600 * 1000) && xjStorage.get('serialListDataFromApi_'+pid).data){
                            afterGetData(xjStorage.get('serialListDataFromApi_'+pid).data);
                        } else{
                            $.getJSON(that.seriesApi+pid,function(json){
                                serialListDataFromApi[pid] =json;
                                try{
                                    xjSeStorage.set('serialListDataFromApi_'+pid,json);
                                    xjStorage.set('serialListDataFromApi_'+pid,{
                                        data:json,
                                        timeStamp:new Date*1
                                    })
                                }catch(e){}
                                afterGetData(json);
                            })
                        }
                    }

                    that.callback()
                })
                that.seriesDom.change(function(){
                    var pid = $(this).find("option:selected").val();
                    function afterGetData(json){
                        var html = that.creatCarHtml(json,2);
                        that.carDom.html('<option value="0">选择车型'+that.defaultTypeData+'</option>'+html);
                        xj_cars_changing = false;
                        if(that.initData && that.initData.carid){
                            that.carDom.val(that.initData.carid);
                            that.carDom.change();
                        }
                    }
                    if (pid && pid != '0') {
                        if(xj_cars_changing)
                            return;
                        xj_cars_changing = true;
                        that.xnameDom.parents('.linkageform .list')['show']();
                        if(typeof xjSeStorage != 'undefined' && xjSeStorage.get('carBySerialIdDataFromApi_'+pid)){
                            afterGetData(xjSeStorage.get('carBySerialIdDataFromApi_'+pid));
                        }else if(carBySerialIdDataFromApi[pid]) {
                            afterGetData(carBySerialIdDataFromApi[pid]);
                        }else if(xjStorage.get('carBySerialIdDataFromApi_'+pid) && (new Date*1 - xjStorage.get('carBySerialIdDataFromApi_'+pid).timeStamp <= 24 * 3600 * 1000) && xjStorage.get('carBySerialIdDataFromApi_'+pid).data){
                            afterGetData(xjStorage.get('carBySerialIdDataFromApi_'+pid).data);
                        } else{
                            $.getJSON(that.carApi+pid,function(json){
                                carBySerialIdDataFromApi[pid] = json;
                                try{
                                    xjSeStorage.set('carBySerialIdDataFromApi_'+pid,json);
                                    xjStorage.set('carBySerialIdDataFromApi_'+pid,{
                                        data:json,
                                        timeStamp:new Date*1
                                    })
                                }catch(e){}
                                afterGetData(json);
                            })
                        }
                    }

                    that.callback()
                })
                that.carDom.change(function(){
                    that.callback()
                })

            },
            reset:function(){
                this.brandDom.find('option[name=0]').attr('selected',true);
                this.brandDom.change();
            },
            creatCarHtml:function(json,type){
                var tempHTML = [], temp_id = [], temp_name = [] ;
                json.data && (json = json.data);
                switch(type){
                    case 0 :{

                        for( var obj in json){
                            // for( var val in json[obj]['id'] ){
                            //     if(typeof(json[obj]['id'][val]) == 'string'){
                            //         temp_id.push(json[obj]['id'][val]);
                            //         temp_name.push(json[obj]['name'][val]);
                            //     }
                            // }
                            tempHTML.push('<optgroup class="sgroup" label=' + obj.toUpperCase() + '>');
                            var carObj = json[obj]

                            for(var i=0, len=carObj.length; i<len; i++){

                                var json_id = carObj[i].id;
                                var json_name = carObj[i].zhName;
                                tempHTML.push('<option value="'+json_id+'">'+obj.toUpperCase()+'-'+json_name+'</option>');
                            }
                            tempHTML.push('</optgroup>');
                            // temp_id = [], temp_name = [];
                        }
                        break;
                    }
                    case 1:{
                        if(json.length==0){
                            tempHTML.push('<option value="0">暂无相关车系</option>');
                        }
                        else{
                            for( var obj=0; obj< json.length;obj++ ){

                                tempHTML.push('<optgroup class="sgroup" label='+json[obj]['corpName']+'>');
                                var sublist = json[obj]['serialList'];
                                for(var i=0, len=sublist.length; i<len; i++){
                                    var json_id = sublist[i].serialId;
                                    var json_name = sublist[i].serialName;
                                    tempHTML.push('<option value="'+json_id+'">'+json_name+'</option>');
                                }

                                tempHTML.push('</optgroup>');
                                // temp_id = [], temp_name = [];
                            }
                        }
                        break;
                    }
                    case 2:{

                        if(!json||json.length==0){

                            tempHTML.push('<option value="">暂无相关在产车型</option>');
                        }else{
                            for(var obj =0;obj<json.length;obj++){
                                tempHTML.push('<option value="'+json[obj]['id']+'">'+json[obj]['name']+'</option>');
                            }
                            temp_id = [], temp_name = [];
                        }
                    }
                        break;

                }
                return tempHTML.join('');
            }
        }

        //dialog
        function autoDialog(opts){
            this.dialogLayer = opts.dialogLayer ? $(opts.dialogLayer) : null;
            this.formWrap = $(opts.dialogLayer).find(opts.formWrap)  ;
            //console.log(this.dialogLayer)

            this.formButton = opts.formButton ? this.dialogLayer.find(opts.formButton) :this.dialogLayer.find('.J-submit') ;
            this.closeButton = opts.closeButton ? this.dialogLayer.find(opts.closeButton) :this.dialogLayer.find('.close');
            this.isRss = opts.isRss ? true :false ;
            // this.needXnameBrandIds = [5,120];//标致、纳智捷
            // this.needXnameSubBrandIds = [{brandId:10,subBrandId:2189}];//撼路者
            this.inquryApi = opts.api ? opts.api:'https://db.auto.sina.com.cn/autoxj/api/XunJia/AjaxAskPrice';
            this.rssApi = '//weidealer.auto.sina.com.cn/new/index.php/api/subscribe/ajaxsubscribe';
            this.phoneDom = opts.phoneDom ? this.dialogLayer.find(opts.phoneDom) : this.dialogLayer.find('.J-phone') ;
            this.xnameDom = opts.xnameDom ? this.dialogLayer.find(opts.xnameDom) : this.dialogLayer.find('.J-xname') ;
            this.initData = opts.initData || {};
            this.autoBrandData = {};
            this.items = {};
            this.scrollFlag = true ;
            this.scrollTop = 0;
            this.isDialog = opts.isDialog;
            this.isDealer = opts.isDealer;
            this.refer = 0 ;
            this.init();
        }
        autoDialog.prototype ={
            rssHaddleBtn:null,
            init:function(){
                var that = this;
                this.autoBrandData = new autoBrandDataFuc({
                    wrap:this.dialogLayer ,
                    brandClass:'.J-brand',
                    seriesClass:'.J-series',
                    carClass:'.J-type',
                    xnameClass: '.J-xname',
                    initData:that.initData,
                    callback:function(){
                        // console.log(that.dialogLayer)
                        that.dialogLayer.find('.error-box').hide();

                    }
                });
                this.items ={
                    'brandDom':{'node':this.autoBrandData.brandDom,'error':'品牌不能为空','must':true},
                    'seriesDom':{'node':this.autoBrandData.seriesDom,'error':'车系不能为空','must':true}
                    // 'phoneDom':{'node':this.phoneDom,'error':'请输入11位手机号码','must':true}
                }
                if(!this.isRss){
                    this.items.carDom = {'node':this.autoBrandData.carDom,'error':'车型不能为空','must':true};
                    this.items.xnameDom = {'node':this.xnameDom,'error':'请输入姓名','must':function(){
                            return true;
                        }};
                    this.items.phoneDom = {'node':this.phoneDom,'error':'请输入11位手机号码','must':true};
                    this.autoCityObj = new autoCityFuc({
                        wrap:this.dialogLayer,
                        privceDom:'.J-privce',
                        cityDom:'.J-city',
                        callback:function(){
                            that.dialogLayer.find('.error-box').hide();
                        }
                    })
                    this.items.privceDom = {'node':this.autoCityObj.privceDom,'error':'省份不能为空','must':true};
                    this.items.cityDom = {'node':this.autoCityObj.cityDom,'error':'城市不能为空','must':true};
                }
                else{
                    this.items.phoneDom = {'node':this.phoneDom,'error':'请输入11位手机号码','must':true};
                }
                this.bindEvent()
            },
            bindEvent:function(){
                var that = this ;
                $('body').on('click',this.closeButton.selector,function(){
                    that.dialogLayer.hide();
                    that.resetDialog();
                }).on('keyup',this.items.phoneDom.node.selector,function(){
                    that.hideError();
                });
                this.items.xnameDom && this.items.xnameDom.node && $('body').on('keyup',this.items.xnameDom.node.selector,function(){
                    that.hideError();
                })
                $(window).on('scroll',function(){
                    if(!that.scrollFlag){
                        $('body').scrollTop(that.scrollTop);
                    }
                })
                this.submit();

            },
            hideError:function(){
                this.dialogLayer.find('.error-box').hide();
            }
            ,
            resetDialog:function(){
                this.autoBrandData.reset();
                // this.items.phoneDom.node.val('');
                this.hideError();
                this.scrollFlag = true;
            },
            setSubscribed:function(opts){
                var carid = opts.carid;
                var subid = opts.subid;
                //console.log(opts)
                var tempCarid = getCookie('carid') ;
                var tempSubid = getCookie('subid') ;

                if(tempCarid){
                    if(tempCarid.indexOf(carid) < 0){
                        carid = tempSubid + ',' + carid;
                    }
                }
                if(tempSubid){
                    if(tempSubid.indexOf(subid) < 0){
                        subid = tempSubid + ',' + subid;
                    }
                }
                if(subid){
                    setCookie('subid',subid);
                }
                if(carid){
                    setCookie('carid',carid);
                }

            },
            setCarData:function(bid,subid,carid){
                var that = this;
                var obj = that.autoBrandData;
                var brandDom = obj.brandDom;
                var seriesDom = obj.seriesDom;
                var carDom = obj.carDom;
                brandDom.find('option[value="'+bid+'"]').attr('selected', true);//品牌
                brandDom.change();
                // console.log( brandDom.html())
                setTimeout(function(){
                    seriesDom.find('option[value="'+ subid+'"]').attr('selected', true);//子品牌
                    seriesDom.change();
                    setTimeout(function() {
                        carDom.find('option[value="'+ carid+'"]').attr('selected', true);//车型
                        carDom.change();
                        // that.bindItemEvent()
                    }, 400);
                }, 400);

            },
            renderLayer:function(caropts,refer,node,resultFlag,ResultCB){
                var that = this;
                that.refer = refer ;
                if(that.isRss){
                    that.rssHaddleBtn = node;
                }
                if(typeof(arguments[0])=='string'){
                    function afterGetData(json){
                        var bid = json.data[0].brandId;
                        var subid = json.data[0].serialId;
                        that.setCarData(bid,subid,carid);
                    }
                    if(typeof xjSeStorage != 'undefined' && xjSeStorage.get('carInfoDataFromApi_'+carid)){
                        afterGetData(xjSeStorage.get('carInfoDataFromApi_'+carid));
                    }else if(carInfoDataFromApi[carid]){
                        afterGetData(carInfoDataFromApi[carid]);
                    }else if(xjStorage.get('carInfoDataFromApi_'+carid) && (new Date*1 - xjStorage.get('carInfoDataFromApi_'+carid).timeStamp <= 24 * 3600 * 1000) && xjStorage.get('carInfoDataFromApi_'+carid).data){
                        afterGetData(xjStorage.get('carInfoDataFromApi_'+carid).data);
                    } else{
                        $.getJSON(getCarInfoByCarIdsUrl+carid, function(json){
                            carInfoDataFromApi[carid] = json;
                            try{
                                xjSeStorage.set('carInfoDataFromApi_'+carid,json);
                                xjStorage.set('carInfoDataFromApi_'+carid,{
                                    data:json,
                                    timeStamp:new Date*1
                                });
                            }catch(e){}
                            afterGetData(json);
                        });
                    }
                }
                else if(typeof(arguments[0]) == 'object'){
                    var bid = parseInt(caropts.bid);
                    var subid = parseInt(caropts.subid);
                    var carid = parseInt(caropts.carid);
                    var bizid = parseInt(caropts.bizid);

                    if(bizid){
                        var $form = this.dialogLayer.find('form');
                        var $bizid = $form.find('input[name=biz_id]');
                        if($bizid.length){
                            $bizid.val(bizid);
                        }else{
                            $form.append('<input type="hidden" name="biz_id" value="'+bizid+'"/>');
                        }
                    }

                    if(bid && subid && carid){

                        that.setCarData(bid,subid,carid);
                    }
                    else if(bid && subid){
                        that.setCarData(bid,subid,'');
                    }
                    else if(bid && !subid){
                        that.setCarData(bid,'','');
                    }
                    else if(carid && !that.isRss){
                        function afterGetData(json){
                            var bid = json.data[0].brandId;
                            var subid = json.data[0].serialId;
                            that.setCarData(bid,subid,carid);
                        }
                        if(typeof xjSeStorage != 'undefined' && xjSeStorage.get('carInfoDataFromApi_'+carid)){
                            afterGetData(xjSeStorage.get('carInfoDataFromApi_'+carid));
                        }else if(carInfoDataFromApi[carid]){
                            afterGetData(carInfoDataFromApi[carid]);
                        }else if(xjStorage.get('carInfoDataFromApi_'+carid) && (new Date*1 - xjStorage.get('carInfoDataFromApi_'+carid).timeStamp <= 24 * 3600 * 1000) && xjStorage.get('carInfoDataFromApi_'+carid).data){
                            afterGetData(xjStorage.get('carInfoDataFromApi_'+carid).data);
                        } else{
                            $.getJSON(getCarInfoByCarIdsUrl+carid, function(json){
                                carInfoDataFromApi[carid] = json;
                                try{
                                    xjSeStorage.set('carInfoDataFromApi_'+carid,json);
                                    xjStorage.set('carInfoDataFromApi_'+carid,{
                                        data:json,
                                        timeStamp:new Date*1
                                    });
                                }catch(e){}
                                afterGetData(json);
                            });
                        }
                    }
                    else if(subid){
                        // console.log(3333333)
                        // http://data.auto.sina.com.cn/car/api/get_subbrand_info.php?oe=utf-8&format=json&big_brand_info=1&subbrand_id=9&qq-pf-to=pcqq.c2c
                        function afterGetData(json){
                            var bid = json.data[subid].brandId;
                            // var subid = json.subbrand_data.subid;
                            that.setCarData(bid,subid);

                            if(resultFlag){
                                ResultCB(subid);
                            }
                        }
                        if(typeof xjSeStorage != 'undefined' && xjSeStorage.get('serialInfoDataFromApi_'+subid)){
                            afterGetData(xjSeStorage.get('serialInfoDataFromApi_'+subid));
                        }else if(serialInfoDataFromApi[subid]){
                            afterGetData(serialInfoDataFromApi[subid]);
                        }else if(xjStorage.get('serialInfoDataFromApi_'+subid) && (new Date*1 - xjStorage.get('serialInfoDataFromApi_'+subid).timeStamp <= 24 * 3600 * 1000) && xjStorage.get('serialInfoDataFromApi_'+subid).data){
                            afterGetData(xjStorage.get('serialInfoDataFromApi_'+subid).data);
                        } else{
                            $.getJSON(getSerialInfoUrl+subid, function(json){
                                serialInfoDataFromApi[subid] = json;
                                try{
                                    xjSeStorage.set('serialInfoDataFromApi_'+subid,json);
                                    xjStorage.set('serialInfoDataFromApi_'+subid,{
                                        data:json,
                                        timeStamp:new Date*1
                                    });
                                }catch(e){}
                                afterGetData(json);
                            });
                        }
                    }
                    // that.setCarData(carid.bid,carid.subid,carid.carid)

                }

                if(!resultFlag){
                    this.dialogLayer.show();
                    this.scrollTop = $(window).scrollTop();
                    this.scrollFlag = false ;
                }

            },
            showError:function(node,msg,wrap){

                var wrap = wrap ? $(wrap) :this.dialogLayer ;
                if(arguments.length == 0||!msg){
                    wrap.find('.error-box').hide();
                    return;
                }
                var pagex = node.offset().left - wrap.offset().left  ;
                var pageY = node.offset().top - wrap.offset().top  ;
                if(wrap.find('.error-box').length>0){
                    var node = wrap.find('.error-box').html(msg);
                }
                else{
                    var node = $('<div class="error-box">'+msg+'</span>');

                }
                node.css({left:pagex,top:pageY-43}).show();
                wrap.append(node)
            },
            checkItemData:function(opt,wrap){
                // console.log(opt)
                var node = opt.node;
                var tagName = node.get(0).tagName.toLowerCase();
                var inputFlag = tagName == 'input' ? true :false ;
                var value = inputFlag ? node.val() : node.find("option:selected").attr('value');
                var telReg = /^[1-9]\d{10}$/;
                var xnameReg = /^([\u4e00-\u9fa5]+|([a-zA-Z]+\s?)+){1,}$/;

                if(typeof opt.must === 'function'){
                    if(!opt.must()){
                        return true;
                    }
                }else{
                    if(!opt.must){
                        return true;
                    }
                }

                if(value == "" || (value == 0 && !inputFlag)){
                    node.parent().addClass('error');
                    node.siblings('.error-box').html(opt.error);
                    this.showError(node,opt.error,wrap)
                    return false;
                }
                else if(inputFlag && value != ''&& !telReg.test(value)){
                    if(node.is('.J-xname')){
                        if(!xnameReg.test(value)){
                            node.parent().addClass('error');
                            this.showError(node,opt.error,wrap);
                            return false;
                        }
                        return true;
                    }
                    node.parent().addClass('error');
                    node.siblings('.error-box').html(opt.wran);
                    this.showError(node,opt.error,wrap)
                    return false;
                }
                else{
                    node.parent().removeClass('error');
                    node.siblings('.error-box').html('');
                    this.showError(node)
                    return true
                }
            },
            validate:function(items,wrap){

                var that = this,flag = true;

                for(var i in items){
                    if(items[i].node.length == 0){
                        continue;
                    }
                    var x = that.checkItemData.call(that,items[i],wrap);
                    if(!x){
                        flag = false;
                        return false;
                    }
                }
                return flag;
            },
            getDialogData:function(items){
                var data = {};
                data.brand = typeof(items.brandDom)!='undefined'? items.brandDom.node.val() :'';
                data.series = typeof(items.seriesDom)!='undefined'? items.seriesDom.node.val():'';
                data.spec = typeof(items.carDom)!='undefined'? items.carDom.node.val():'';
                data.mobile = typeof(items.phoneDom)!='undefined'? items.phoneDom.node.val():'';
                data.prov = typeof(items.privceDom)!='undefined'? items.privceDom.node.val():'';
                data.city = typeof(items.cityDom)!='undefined'? items.cityDom.node.val():'';
                return data;

            },
            submit:function(){
                var that = this;
                $('body').on('click',this.formButton.selector,function(e){
                    e.preventDefault();
                    var hasError = that.validate(that.items);
                    if(!that.isRss){
                        var request = $('#requestPrice');
                        if(request.is(':checked')){
                            request.val(1);
                        }
                        else{
                            request.val(0);
                        }
                    }

                    if(!that.isDialog){
                        that.refer = that.formButton.attr('data-reffer') || 0;
                        if(that.dialogLayer.find('.ask_reffer').length == 0){
                            if(that.isRss == true){
                                var node = $('<input type="hidden" name="info[sub_reffer]" class="ask_reffer">');
                            }
                            else{
                                var node = $('<input type="hidden" name="info[ask_reffer]" class="ask_reffer">');

                            }
                            that.dialogLayer.find('form').append(node);
                        }
                        else{
                            that.dialogLayer.find('.ask_reffer').val(that.refer );
                        }

                    }
                    if(hasError){

                        var refferVal = that.refer ? that.refer : 22;

                        if($(".ask_reffer").val()==26 || $(".ask_reffer").val()==27){
                            refferVal=$(".ask_reffer").val();
                        }

                        if(that.isRss){
                            refferVal = 1;
                        }
                        that.dialogLayer.find('input.ask_reffer').val(refferVal);
                        // http://weidealer.auto.sina.com.cn/new/index.php/api/xunjia/AjaxAskPrice
                        // console.log(that.items)
                        var cookieOpts = {
                            subid:$(that.items.seriesDom.node).val()
                            // carid:$(that.items.carDom.node).val()
                        }

                        try{
                            //$.getJSON('//db.auto.sina.com.cn/autoxj/api/XunJia/AjaxClickCount?ask_reffer='+(refferVal || AUTO_INQUIRY_PARA.ask_reffer)+'&uid='+(typeof userinfo !== 'undefined' ? userinfo.uid : 0)+'&sinaglobal='+(getCookie('SINAGLOBAL') || 0)+'&Apache='+getCookie('Apache')+'&plat=1&callback=?')
                            $.ajax({
                                url:'//db.auto.sina.com.cn/autoxj/api/XunJia/AjaxClickCount',
                                data:{
                                    ask_reffer:(refferVal || AUTO_INQUIRY_PARA.ask_reffer),
                                    plat:1,
                                    Apache:getCookie('Apache'),
                                    uid:(typeof userinfo !== 'undefined' ? userinfo.uid : 0),
                                    sinaglobal:(getCookie('SINAGLOBAL') || 0)
                                },
                                dataType: "json",
                                type:'POST'
                            });
                        }catch(e){
                        }

                        that.submitForm();
                    }
                    else{
                        // alert('fail')
                    }
                })
            },
            submitForm:function(resultReffer,subid){

                var that = this;
                var api = that.isRss ? that.rssApi :that.inquryApi ;

                if(resultReffer){
                    that.dialogLayer.find('input.ask_reffer').val(resultReffer);
                }
                var subid = subid || that.dialogLayer.find('.J-series').val();
                var uid = typeof userinfo !== 'undefined' ? userinfo.uid : 0;
                var sinaglobal = getCookie('SINAGLOBAL') || 0;
                $.ajax({
                    type: "post",
                    url:api,
                    data:that.dialogLayer.find('form').serialize() + encodeURI("&info[Apache]="+(getCookie('Apache') || 'autosinanull')) + '&info[uid]='+uid+ '&info[sinaglobal]='+sinaglobal,// 你的formid
                    dataType: 'json',
                    error: function(request) {
                        // alert("Connection error");
                    },
                    success: function(data) {
                        // console.log(that.rssHaddleBtn)
                        var dialogData = that.getDialogData(that.items);
                        var status = data.status ;
                        var mcCallback = function(status){
                            that.dialogLayer.hide();
                            that.resetDialog();
                        }
                        // for miaoche
                        // if(that.isDialog){
                        //     dialogData.callback = mcCallback;

                        // }

                        if(status == 1 || status == 2){
                            // set has subscribed
                            if(that.isRss ){
                                alert('订阅信息将会下发到您手机，请查收');
                                if(that.rssHaddleBtn != null){
                                    that.rssHaddleBtn.addClass('hassubscribe').html('已订阅');
                                }
                                that.setSubscribed(cookieOpts);

                            }
                            else{
                                var pNode = $('.inquiryformmodel:visible');
                                //  }
                                //记录在前端（询价姓名、手机号，省份，地区）
                                setCookie('xjXName',$('input[name="info[xname]"]').val(),180),setCookie('xjMobile',$('input[name="info[mobile]"]').val(),180);
                                setCookie('xjProvince',$('select[name="info[province_id]"]').val(),180),setCookie('xjCity',$('select[name="info[city_id]"]').val(),180);
                                // McQuotePrice(dialogData).Init();
                                // 询价成功
                                var username = that.dialogLayer.find('input[name="info[xname]"]').val();
                                var province = that.dialogLayer.find('select[name="info[province_id]"]').val();
                                var city = that.dialogLayer.find('select[name="info[city_id]"]').val();
                                var telnum = that.dialogLayer.find('input[name="info[mobile]"]').val();
                                var toUrl =  "http://db.auto.sina.com.cn/xunjia/subid-"+subid+".html" +'?xjProvince='+province+'&xjCity='+city+'&xjBid='+pNode.find('select[name="info[brand_id]"]').val()+'&xjSid='+pNode.find('select[name="info[sub_brand_id]"]').val()+'&xjCarid='+pNode.find('select[name="info[car_id]"]').val()+'&xjBname='+encodeURI(pNode.find('select[name="info[brand_id]"]:visible:eq(0)').find('option:selected').text())+'&xjSname='+encodeURI(pNode.find('select[name="info[sub_brand_id]"]:visible:eq(0)').find('option:selected').text())+'&xjCarname='+encodeURI(pNode.find('select[name="info[car_id]"]:visible:eq(0)').find('option:selected').text());

                                window.location.href = toUrl
                                // alert('询价信息将会下发到您手机，请查收');
                            }

                        }
                        else{
                            alert(data.msg);
                        }
                        if(that.isDialog ){
                            that.dialogLayer.hide();
                            that.resetDialog();
                        }

                    }
                });
            }
        }
        var autoInquiryDialog = new autoDialog({
            dialogLayer:'.J-inquiry-layer',
            isDialog:true,
            formButton:'.J-submit'
        })
        var autoRssDialog = new autoDialog({
            dialogLayer:'.J-rss-layer',
            formButton:'.J-submit',
            isDialog:true,
            isRss:true
        })

        // render
        function autoMoudleRss(opts){
            // console.log(opts)
            this.isRss = opts.isRss || false;
            this.isBar = opts.isBar || false;
            this.sinaFlag = opts.sinaFlag || false;
            this.LayerWrap = opts.LayerWrap ? $(opts.LayerWrap) : null;
            this.haddleButton =this.isBar ? this.LayerWrap.find(opts.haddleButton) : $(opts.haddleButton);
            this.haddleButtonClass = opts.haddleButton;
            this.dialogObj = this.isRss ? autoRssDialog : autoInquiryDialog;
            this.isResult = opts.isResult || false;
            this.carOpts = opts.carOpts || '',
                this.autoBarData = {} ;
            if(opts.dealerDialog){
                this.dialogObj = opts.dealerDialog;
            }
            this.init();

        }
        autoMoudleRss.prototype = {
            init:function(){
                var that = this,
                    bidVal = $('.J-inquiry-bar').attr("data-bid") || '',
                    subidVal = $('.J-inquiry-bar').attr("data-subid") || '';
                if(that.isBar){
                    this.autoBarData = new autoBrandDataFuc({
                        wrap:that.LayerWrap,
                        brandClass:'.J-brand',
                        seriesClass:'.J-series',
                        carClass:'.J-type',
                        callback:function(){
                            that.LayerWrap.find('.error-box').hide();
                        },
                        isBar:true,
                        initData:{bid:bidVal,subid:subidVal}
                        // initData:{bid:164,subid:2463,carid:29440}

                    })

                }
                if(that.isRss){
                    that.checkSubscribed(this.haddleButton);
                }
                // 自动打开
                if(that.sinaFlag){
                    that.dialogObj.renderLayer(that.carOpts,14);
                }
                if(that.carOpts && that.carOpts.subid){
                    var ssubid = that.carOpts.subid;
                    //$.getJSON('//data.auto.sina.com.cn/car/api/get_subbrand_info.php?subbrand_id=' + ssubid + '&oe=utf-8&format=json&big_brand_info=1&brand_info=1&callbk=?', function(json){
                    $.getJSON('//db.auto.sina.com.cn/api/cms/car/getSerialInfo.json?serialids=' + ssubid + '&callback=?', function(json){
                        if(json.data){
                            for(var i in json.data){
                                var bid = json.data[i].brandId;
                                var $brand = $('.J-brand'),$series = $('.J-series'),$type = $('.J-type');
                                $brand.find('option[value="'+bid+'"]').attr('selected', true);//品牌
                                $brand.change();
                                setTimeout(function(){
                                    $series.find('option[value="'+ ssubid+'"]').attr('selected', true);//子品牌
                                    $series.change();
                                    if(that.carOpts.carid){
                                        var scarid = that.carOpts.carid;
                                        setTimeout(function(){
                                            $type.find('option[value="'+ scarid+'"]').attr('selected', true);//车型
                                        }, 400);
                                    }
                                }, 400);
                            }
                        }
                    });
                }
                $('body').on('click',that.haddleButton.selector,function(e){
                    e.stopPropagation()
                    e.preventDefault();
                    var curBtn = $(this).find('.btn');

                    var refer = typeof($(this).attr('data-reffer')) != 'undefined' ? $(this).attr('data-reffer') :0;
                    // console.log(refer)
                    if(that.isBar){
                        if(!that.isRss){
                            var items ={
                                'brandDom':{'node':that.autoBarData.brandDom,'error':'品牌不能为空','must':true},
                                'seriesDom':{'node':that.autoBarData.seriesDom,'error':'车系不能为空','must':true},
                                'carDom':{'node':that.autoBarData.carDom,'error':'车型不能为空','must':false}
                            }
                        }
                        else{
                            var items ={
                                'brandDom':{'node':that.autoBarData.brandDom,'error':'品牌不能为空','must':true},
                                'seriesDom':{'node':that.autoBarData.seriesDom,'error':'车系不能为空','must':true}
                                // 'carDom':{'node':that.autoBarData.carDom,'error':'车型不能为空','must':false}
                            }
                        }
                        var flag = that.dialogObj.validate(items,that.LayerWrap);
                        if(flag){
                            try{
                                //$.getJSON('//db.auto.sina.com.cn/autoxj/api/XunJia/AjaxClickCount?ask_reffer='+(refer || AUTO_INQUIRY_PARA.ask_reffer)+'&uid='+(typeof userinfo !== 'undefined' ? userinfo.uid : 0)+'&sinaglobal='+(getCookie('SINAGLOBAL') || 0)+'&Apache='+getCookie('Apache')+'&plat=1&callback=?')
                                $.ajax({
                                    url:'//db.auto.sina.com.cn/autoxj/api/XunJia/AjaxClickCount',
                                    data:{
                                        ask_reffer:(refer || AUTO_INQUIRY_PARA.ask_reffer),
                                        plat:1,
                                        Apache:getCookie('Apache'),
                                        uid:(typeof userinfo !== 'undefined' ? userinfo.uid : 0),
                                        sinaglobal:(getCookie('SINAGLOBAL') || 0)
                                    },
                                    dataType: "json",
                                    type:'POST'
                                });
                            }catch(e){
                            }
                            var carid = typeof(items.carDom)=='undefined' ? '' : items.carDom.node.val();
                            var subid = items.seriesDom.node.val();
                            var bid = items.brandDom.node.val();
                            var carOpts = {
                                bid:items.brandDom.node.val(),
                                subid:items.seriesDom.node.val(),
                                carid:carid
                            }
                            that.dialogObj.renderLayer(carOpts,refer);
                        }

                    }
                    else{
                        if(that.isRss && $(this).hasClass('hassubscribe')){
                            return ;
                        }
                        var carOpts = {
                            bid:$(this).attr('bid') || '',
                            subid:$(this).attr('subid') || '',
                            carid:$(this).attr('carid') || '',
                            bizid:$(this).attr('bizid') || ''
                        }
                        try{
                            //$.getJSON('//db.auto.sina.com.cn/autoxj/api/XunJia/AjaxClickCount?ask_reffer='+(refer || AUTO_INQUIRY_PARA.ask_reffer)+'&uid='+(typeof userinfo !== 'undefined' ? userinfo.uid : 0)+'&sinaglobal='+(getCookie('SINAGLOBAL') || 0)+'&Apache='+getCookie('Apache')+'&plat=1&callback=?')
                            $.ajax({
                                url:'//db.auto.sina.com.cn/autoxj/api/XunJia/AjaxClickCount',
                                data:{
                                    ask_reffer:(refer || AUTO_INQUIRY_PARA.ask_reffer),
                                    plat:1,
                                    Apache:getCookie('Apache'),
                                    uid:(typeof userinfo !== 'undefined' ? userinfo.uid : 0),
                                    sinaglobal:(getCookie('SINAGLOBAL') || 0)
                                },
                                dataType: "json",
                                type:'POST'
                            });
                        }catch(e){
                        }

                        var resultFlag = that.isResult;

                        if(resultFlag){
                            var ResultCB = function(subid){
                                var reffer = that.haddleButton.attr('data-reffer') || '';
                                that.dialogObj.submitForm(reffer,subid);
                                setTimeout(function(){
                                    curBtn.html('询底价');
                                },500)
                            }
                            curBtn.html('正在获取');

                        }
                        that.dialogObj.renderLayer(carOpts,refer,$(this),resultFlag,ResultCB);

                    }

                })

                // })

            },//判断是否已订阅
            checkSubscribed:function(nodelist){
                var carStr = getCookie('carid');
                var subStr = getCookie('subid');
                if(!carStr && !subStr ){
                    return;
                }
                nodelist.each(function(idx,item){
                    var itemCarid = $(item).attr('carid');
                    var itemSubid= $(item).attr('subid');
                    var flag = false;
                    if(itemCarid && carStr){
                        if(carStr.indexOf(itemCarid) > -1){
                            flag = true ;
                        }
                    }
                    if(itemSubid && subStr){
                        if(subStr.indexOf(itemSubid) > -1){
                            flag = true ;
                        }
                    }

                    if(flag == true){
                        $(item).addClass('hassubscribe').html('已订阅');
                    }

                })
            }

        }
        autoCollectObj['autoDialog']=autoDialog;
        autoCollectObj['autoMoudleRss']=autoDialog;
        autoCollectObj.dtd.resolve();

        // bottom bar
        function initBottomAdv(){
            // var that = this;
            var bottomInquryBar = $('#bottomInquryBar');
            var bottomWrap = bottomInquryBar.find('.J-bottom-inquery');
            var haddleButton = bottomInquryBar.find('.J-bottom-haddle');
            var WinWidth = parseInt(jQuery(window).width());
            var popRight = parseInt((WinWidth-1000)/2 - 10 - 174-20);
            popRight = popRight >0 ? popRight : 0;
            //         console.log(popRight);
            haddleButton.css('right',popRight);
            bottomWrap.delegate('.close','click',function(){
                bottomWrap.hide();
                haddleButton.show().css('display','block');
            })
            haddleButton.on('click',function(){
                $(this).hide();
                bottomWrap.show();
            })
        }
        // if($('#bottomInquryBar').length){
        //     initBottomAdv();
        // }
        // init
        function getQueryString(name) {
            var guideSubid = (typeof articalSerialId === 'undefined' || typeof articalCarId === 'undefined') ? '' : '?subid='+articalSerialId+'&carid='+articalCarId;
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = window.location.search.substr(1).match(reg) || guideSubid.substr(1).match(reg);
            // todo  var articalSerialId = 406;var articalCarId = 32531;
            // var r = '?bid=9&subid=406&carid=32531'.substr(1).match(reg);
            // console.log(r)
            if (r != null) return unescape(r[2]); return null;
        }
        // $(document).on('ready',function(){
        // init data
        var inquiryPageBid = getQueryString('bid') || '';
        var inquiryPageSubid = getQueryString('subid') || '';
        var inquiryPageCarid = getQueryString('carid') || '';
        var sinaFlag =  getQueryString('indexflag') || false;

        var carOpts = {
            bid:inquiryPageBid,
            subid:inquiryPageSubid,
            carid:inquiryPageCarid
            // sinaFlag:sinaFlag
        }

        if($('.J-inquiry-wrap').length){
            var initData = {};
            if(typeof vbid != 'undefined'){
                initData['bid'] = vbid;
            }
            if(typeof vsubid != 'undefined'){
                initData['subid'] = vsubid;
            }
            if(typeof carid != 'undefined'){
                initData['carid'] = carid;
            }
            // 单页询价
            var inquiryPageDialog = new autoDialog({
                dialogLayer:'.J-inquiry-wrap',
                formButton:'.J-submit',
                isDialog:false,
                initData:initData
            })

        }
        if($('.J-inquiry-wrap').length){
            // 单页订阅
            new autoDialog({
                dialogLayer:'.J-rss-wrap',
                isRss:true,
                isDialog:false,
                formButton:'.J-submit'
            })
        }

        // 单条询价
        $('.J-inquiry-bar:visible').each(function(idx,node){
            new autoMoudleRss({
                isBar:true,//单条形式
                isRss:false,
                LayerWrap:node,//外层
                haddleButton:'.J-inquiry-bar .J-bar-btn'//触发按钮
            });
        })
        // 单条订阅
        $('.J-rss-bar').each(function(idx,node){
            new autoMoudleRss({
                isBar:true,//单条形式
                isRss:true,
                LayerWrap:node,//外层
                haddleButton:'.J-rss-bar .J-bar-btn'//触发按钮
            });
        })
        // 询价弹层
        new autoMoudleRss({
            isBar:false,//有城市等信息
            isRss:false,//是否是订阅
            carOpts:carOpts,
            sinaFlag:sinaFlag,
            haddleButton:'.J-auto-price-button'//触发按钮

        });
        //订阅弹层
        new autoMoudleRss({
            isBar:false,//有城市等信息
            isRss:true,//是否是订阅
            haddleButton:'.J-auto-rss-button'//触发按钮
        });

        // 结果页询价
        new autoMoudleRss({
            isBar:false,//有城市等信息
            isRss:false,//是否是订阅
            isResult:true,
            haddleButton:'.J-collect-result-button'//触发按钮
        });

        //搜索页询价
        $(".car_price_btn").bind("click",function(){
            $(".ask_reffer").val(26);
            $(".J-submit").attr("data-reffer",26);
            var carOpts1 = {
                subid:$(this).attr("data-foo")
            }
            new autoMoudleRss({
                isBar:false,//有城市等信息
                isRss:false,//是否是订阅
                carOpts:carOpts1,
                sinaFlag:sinaFlag,
                haddleButton:'.car_price_btn'//触发按钮

            });
        });
        //搜索页询价
        $(".dealer_enquiry").bind("mousedown",function(){
            $(".ask_reffer").val(27);
            $(".J-submit").attr("data-reffer",27);
            $.ajax({
                url:'//data.auto.sina.com.cn/car_compare_new/ajax/getSubs2search.php?bid='+$(this).attr("data-foo"),
                type:'get',
                dataType:'jsonp',
                jsonp:'callbk',
                success:function(jsondata){
                    var carOpts1 = {
                        subid:jsondata['1']['0']['subid']
                    }

                    new autoMoudleRss({
                        isBar:false,//有城市等信息
                        isRss:false,//是否是订阅
                        carOpts:carOpts1,
                        sinaFlag:sinaFlag,
                        haddleButton:'.dealer_enquiry'//触发按钮
                    });
                    /*$(".J-brand").find("option").each(function(){
                     if($(this).val()==jsondata['1']['0']['subid']){
                     $(this).attr("selected",true).siblings("option").attr("selected",false);
                     }
                     });*/
                }
            });
        });
// })
    }

    $('input[name="info[xname]"]').parents('.linkageform .list').show();
    if(getCookie('xjXName')){
        $('input[name="info[xname]"]').val(getCookie('xjXName'))
    }
    if(getCookie('xjMobile')){
        $('input[name="info[mobile]"]').val(getCookie('xjMobile'))
    }
    $('.inquiryboxvessel .inquirylink').attr('href','javascript:;').removeAttr('target');
})(window,jQuery)