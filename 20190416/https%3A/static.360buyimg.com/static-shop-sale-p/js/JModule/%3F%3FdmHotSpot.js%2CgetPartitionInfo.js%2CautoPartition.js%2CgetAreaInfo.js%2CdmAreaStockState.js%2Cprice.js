/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 235);
/******/ })
/************************************************************************/
/******/ ({

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

	/*moduleName:dmHotSpot*/
	/*require:*/
	

J_Module.define('dmHotSpot', [], function () {
    var defaultParam = {
        link: 'hot-spot-link'
    };

    return function dmHotSpot(args) {
        var $this = $(this);

        var param = $.extend({}, defaultParam, args);

        var contentWidth = $this.closest('[instanceid]').width();
        var offsetWidth = contentWidth !== param.maxWidth ? (contentWidth - param.maxWidth) / 2 : 0;

        $this.find('.' + param.link).each(function (index, item) {
            $(item).css({
                left: $(item).position().left + offsetWidth
            });
        });
    };
});

/***/ })

/******/ });/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 246);
/******/ })
/************************************************************************/
/******/ ({

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

	/*moduleName:getPartitionInfo*/
	/*require:*/
	

J_Module.define('getPartitionInfo', [], function () {
    return function getPartitionInfo(args) {
        var param = jQuery.extend({
            skuInfo: [], //商品信息
            skuIds: [], //格式为：skuId_商品数量（默认是1），如果有多个，以英文逗号（“,”）分隔，比如：skuIds=11322972_1,11322973_2。skusId总数最多不得超过100个。
            bizType: 1, //大家电分区：0； 通用分区系统：1，包含消费品；山姆分区：2（603837）；
            cat: '0,0,0', //商品分类地址：默认0,0,0（调用商品去查；大促期间，影响可用率，可能会超时；）；以逗号（“,”）分隔
            area: CookieUtil.getCookie('ipLoc-djd') ? CookieUtil.getCookie('ipLoc-djd') : '1-72-0-0', //用户所在区域，获取不到默认北京市朝阳区；四级地址，以逗号（“_”）分隔，没有补0，比如：1_2810_51081_0
            ch: 1, //商城PC（京东主站）：1; 商城app（含pad）：2; 商城m（m.jd.com手机浏览器）：3; 微信：4; 手Q：5; 易迅PC：8; 未知渠道：9
            venderId: '', //如果是山姆商品，必须传递这个参数; 山姆会员商店官方旗舰店（603837）需要分区
            app: 'jshop', //调用方需要申请一个名字，便于管理
            num: 100 //一次性传入分区接口的sku数量（接口限制100）
        }, args || {}),
            _this = jQuery(this),
            area = param.area.split('-').join('_').split('.')[0],
            skuInfo = param.skuInfo;

        if (skuInfo.length == 0) {
            return;
        }

        /* 拼装参数 */
        var skuIds = [];
        !function handleArgs() {
            for (var i = 0; skuInfo[i]; i++) {
                if (getBizType(skuInfo[i]) != 100) {
                    var str = skuInfo[i].goodsId + '|1|' + getBizType(skuInfo[i]) + '|' + skuInfo[i].category.replace(/,/g, '_');
                    if (getBizType(skuInfo[i]) == 2) {
                        skuIds.push(str + '|' + skuInfo[i].venderId);
                    } else {
                        skuIds.push(str + '|' + 0);
                    }
                }
            }
        }();

        if (skuIds.length == 0) {
            return;
        }

        //20170809星期三
        //目前临时方案：分类值和venderId都通过cat参数传入的第一个商品信息判断

        /* 获取skuid业务类型（大家电和通用的根据配置的第一个sku的分类值判断，新接口上线替换前，用第一个的分类值代表，如果是分区，第一个必须为分区的商品，不然要出错） */
        function getBizType(skuData) {
            var bizType = 100; //默认没有分区
            var catVuale = [[794, 13297], [750, 758]]; //大家电二级和三级分类值

            if (skuData.venderId && skuData.venderId == '603837') {
                bizType = 2; //山姆
            } else if (skuData.category && catVuale[0].isIn(skuData.category.split(',')[1]) || catVuale[1].isIn(skuData.category.split(',')[2])) {
                bizType = 0; //大家电
            } else if (skuData.fqsp && skuData.fqsp > 0) {
                bizType = 1; //通用分区
            } else {
                bizType = 100; //没有分区
            }
            return bizType;
        }

        /* 获取可分区skuid */
        var dtd = jQuery.Deferred();
        jQuery.ajax({
            url: INTERFACE.realSku.mixPartition,
            data: {
                skuIds: skuIds.join(','),
                area: area,
                app: 'jshop'
            },
            dataType: 'jsonp',
            success: function success(data) {
                dtd.resolve(data);
            }
        });
        return dtd.promise();
    };
});

/***/ })

/******/ });/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 220);
/******/ })
/************************************************************************/
/******/ ({

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

	/*moduleName:autoPartition*/
	/*require:getPartitionInfo*/
	

J_Module.define('autoPartition', ['getPartitionInfo'], function () {
    var getPartitionInfo = J_Module.require('getPartitionInfo');
    return function autoPartition(args) {
        var param = jQuery.extend({
            skuIds: [], //传入的sku
            mprice: 'data-sku-m',
            opprice: 'data-sku-op',
            pprice: 'data-sku-p',
            spprice: 'data-sku-sp',
            tppprice: 'data-sku-tpp',
            tkpprice: 'data-sku-tkp',
            upprice: 'data-sku-up',
            priceType: ['data-sku-m', 'data-sku-op', 'data-sku-p', 'data-sku-sp', 'data-sku-tpp', 'data-sku-tkp', 'data-sku-up'],
            maxCount: 20 //传入的sku最大限制
        }, args || {}),
            node = param.skuIds,
            aPriceType = param.priceType,
            num = param.maxCount,
            skuInfo = [],
            //存储所有sku信息
        _sku = []; //存储去重的sku

        //获取当前展示出来的节点skuid信息去重
        function getSkuInfo() {
            for (var i = 0; node[i]; i++) {
                var e = jQuery(node[i]);

                for (var j = 0; aPriceType[j]; j++) {
                    if (e.attr(aPriceType[j]) && !_sku.isIn(e.attr(aPriceType[j]))) {
                        _sku.push(e.attr(aPriceType[j])); //存储去重的sku，同一个商品调多个价格时，sku会重复
                        if (e.attr('data-cat') && e.attr('data-cat').length > 0) {
                            //所有商品都有分类
                            var o = {
                                goodsId: e.attr(aPriceType[j]),
                                category: e.attr('data-cat'), //商品分类
                                fqsp: e.attr('data-fqsp') ? e.attr('data-fqsp') : 0, //通用分区
                                venderId: e.attr('data-venderId') ? e.attr('data-venderId') : 0 //店铺ID
                            };
                            skuInfo.push(o);
                        } else {
                            var o = {
                                goodsId: e.attr(aPriceType[j]), //没有分类、fqsp、venderId就会判断为100无分区，就不取真实sku；
                                category: '0,0,0', //商品分类
                                fqsp: 0, //通用分区
                                venderId: 0 //店铺ID
                            };
                            skuInfo.push(o);
                        }
                    }
                }
            }
        }

        function getAreaSku() {
            var len = Math.ceil(skuInfo.length / num); //循环次数
            var number = 0,

            //计数，累加
            total = 0,
                //计数，总数
            realSkuInfo = []; //存储分区skuId

            for (var i = 0; i < len; i++) {
                total = total + i;
            }
            for (var i = 0; i < len; i++) {
                var skuInfoFragment = skuInfo.slice(i * num, Math.min(skuInfo.length, (i + 1) * num));
                (function (len, i, skuInfoFragment) {
                    jQuery.when(getPartitionInfo({ skuInfo: skuInfoFragment, num: num })).done(function (data) {
                        if (data) {
                            //如果有分区sku
                            for (var j = 0; skuInfo[j]; j++) {
                                for (var n in data) {
                                    if (n == skuInfo[j].goodsId) {
                                        skuInfo[j].realSkuId = data[n].realSkuId; //将分区sku覆盖老sku
                                        realSkuInfo.push(skuInfo[j]);
                                    }
                                }
                            }
                        }
                        number = number + i;
                        if (number == total) {
                            //判断是否请求完成
                            getGoodsInfo(realSkuInfo); //只修改有分区的商品节点
                        }
                    });
                })(len, i, skuInfoFragment);
            }
        }

        function getGoodsInfo(realSkuInfo) {
            if (realSkuInfo.length > 0) {
                for (var i = 0; realSkuInfo[i]; i++) {
                    for (var j = 0; aPriceType[j]; j++) {
                        var _node = jQuery('[' + aPriceType[j] + '=' + realSkuInfo[i].goodsId + ']');
                        if (_node && _node.length > 0) {
                            _node.each(function (n, e) {
                                var value = jQuery(e).attr(aPriceType[j]);
                                jQuery(e).attr(aPriceType[j], realSkuInfo[i].realSkuId); //预防没有li节点的情况

                                if (jQuery(e).closest('li').length > 0) {
                                    var reg = new RegExp(value, 'g');
                                    var $list = jQuery(e).closest('li');
                                    $list.find('.J_imgLazyload').not('[original]').each(function (index, img) {
                                        var $img = $(img);
                                        var src = $img.attr('src');
                                        $img.attr('original', src);
                                    });
                                    var str = $list.html().replace(reg, realSkuInfo[i].realSkuId);
                                    $list.attr('data-skuId', value).html(str);
                                    $list.find('[module-function]').each(function (index, elem) {
                                        var $elem = $(elem);
                                        var functions = $elem.attr('module-function') && $elem.attr('module-function').split(',');
                                        functions.forEach(function (name) {
                                            var moduleParam = {};
                                            try {
                                                moduleParam = JSON.parse($elem.attr('module-param').replace(/'/g, '"').replace(/(\{|,)\s*\w+\s*:/g, function (str, matchKey) {
                                                    return matchKey + '"' + str.match(/\w+/) + '":';
                                                }));
                                            } catch (error) {}
                                            J_Module.use(name.trim()).then(function () {
                                                J_Module.module[name.trim()].bind($elem)(moduleParam);
                                            });
                                        });
                                    });
                                }
                            });
                            dtd.resolve(skuInfo); //返回被替换过的商品（分区+不分区）信息
                        }
                    }
                }
            } else {
                dtd.resolve(skuInfo); //返回商品（不分区）信息
            }
        }

        var venderId = $('#vender_id').val() || '';
        var partitionVender = ($('#partition_vender').val() || '').split(',');
        if (!(getPageType() === 4 || getPageType() === 1) || !partitionVender.includes(venderId)) {
            return false;
        }
        var dtd = jQuery.Deferred();
        getSkuInfo();
        if (skuInfo.length === 0) {
            return;
        }
        getAreaSku();
        return dtd.promise();
    };
});

/***/ })

/******/ });/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 243);
/******/ })
/************************************************************************/
/******/ ({

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

	/*moduleName:getAreaInfo*/
	/*require:*/
	

/**
 * 从cookie中获取四级地址,若cookie中不存在，则默认取 北京
 */
J_Module.define('getAreaInfo', [], function () {

    return function () {
        var area = CookieUtil.getCookie('ipLoc-djd') ? CookieUtil.getCookie('ipLoc-djd').replace(/-/g, ',') : '1,72,2799,0'; //用户所在区域，获取不到默认北京'
        // 过滤四级地址中含有”.“的情况，如果接口中area字段含有"."，会报错
        try {
            area = area.split(',').map(function (v) {
                var index = v.indexOf('.');
                if (index !== -1) {
                    return v.slice(0, index);
                } else {
                    return v;
                }
            }).join(',');
        } catch (e) {
            console.log(e);
        }
        return area;
    }();
});

/***/ })

/******/ });/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 228);
/******/ })
/************************************************************************/
/******/ ({

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

	/*moduleName:dmAreaStockState*/
	/*require:getAreaInfo*/
	

J_Module.define('dmAreaStockState', ['getAreaInfo'], function () {
    function dmAreaStockState(skuIds) {
        var json_city = window.json_city || {
            '0': {
                '1': '北京',
                '2': '上海',
                '3': '天津',
                '4': '重庆',
                '5': '河北',
                '6': '山西',
                '7': '河南',
                '8': '辽宁',
                '9': '吉林',
                '10': '黑龙江',
                '11': '内蒙古',
                '12': '江苏',
                '13': '山东',
                '14': '安徽',
                '15': '浙江',
                '16': '福建',
                '17': '湖北',
                '18': '湖南',
                '19': '广东',
                '20': '广西',
                '21': '江西',
                '22': '四川',
                '23': '海南',
                '24': '贵州',
                '25': '云南',
                '26': '西藏',
                '27': '陕西',
                '28': '甘肃',
                '29': '青海',
                '30': '宁夏',
                '31': '新疆',
                '32': '台湾',
                '42': '香港',
                '43': '澳门',
                '52993': '港澳',
                '84': '钓鱼岛',
                '53283': '海外'
            },
            '1': {
                '72': '朝阳区',
                '2800': '海淀区',
                '2801': '西城区',
                '2802': '东城区',
                '2803': '崇文区',
                '2804': '宣武区',
                '2805': '丰台区',
                '2806': '石景山区',
                '2807': '门头沟',
                '2808': '房山区',
                '2809': '通州区',
                '2810': '大兴区',
                '2812': '顺义区',
                '2814': '怀柔区',
                '2816': '密云区',
                '2901': '昌平区',
                '2953': '平谷区',
                '3065': '延庆县'
            },
            '2': {
                '2813': '徐汇区',
                '2815': '长宁区',
                '2817': '静安区',
                '2820': '闸北区',
                '2822': '虹口区',
                '2823': '杨浦区',
                '2824': '宝山区',
                '2825': '闵行区',
                '2826': '嘉定区',
                '2830': '浦东新区',
                '2833': '青浦区',
                '2834': '松江区',
                '2835': '金山区',
                '2836': '南汇区',
                '2837': '奉贤区',
                '2841': '普陀区',
                '2919': '崇明县',
                '78': '黄浦区'
            },
            '3': {
                '51035': '东丽区',
                '51036': '和平区',
                '51037': '河北区',
                '51038': '河东区',
                '51039': '河西区',
                '51040': '红桥区',
                '51041': '蓟县',
                '51042': '静海县',
                '51043': '南开区',
                '51044': '塘沽区',
                '51045': '西青区',
                '51046': '武清区',
                '51047': '津南区',
                '51048': '汉沽区',
                '51049': '大港区',
                '51050': '北辰区',
                '51051': '宝坻区',
                '51052': '宁河县'
            },
            '4': {
                '113': '万州区',
                '114': '涪陵区',
                '115': '梁平县',
                '119': '南川区',
                '123': '潼南县',
                '126': '大足区',
                '128': '黔江区',
                '129': '武隆县',
                '130': '丰都县',
                '131': '奉节县',
                '132': '开县',
                '133': '云阳县',
                '134': '忠县',
                '135': '巫溪县',
                '136': '巫山县',
                '137': '石柱县',
                '138': '彭水县',
                '139': '垫江县',
                '140': '酉阳县',
                '141': '秀山县',
                '48131': '璧山县',
                '48132': '荣昌县',
                '48133': '铜梁县',
                '48201': '合川区',
                '48202': '巴南区',
                '48203': '北碚区',
                '48204': '江津区',
                '48205': '渝北区',
                '48206': '长寿区',
                '48207': '永川区',
                '50950': '江北区',
                '50951': '南岸区',
                '50952': '九龙坡区',
                '50953': '沙坪坝区',
                '50954': '大渡口区',
                '50995': '綦江区',
                '51026': '渝中区',
                '51027': '高新区',
                '51028': '北部新区',
                '4164': '城口县',
                '3076': '高新区'
            },
            '5': {
                '142': '石家庄市',
                '148': '邯郸市',
                '164': '邢台市',
                '199': '保定市',
                '224': '张家口市',
                '239': '承德市',
                '248': '秦皇岛市',
                '258': '唐山市',
                '264': '沧州市',
                '274': '廊坊市',
                '275': '衡水市'
            },
            '6': {
                '303': '太原市',
                '309': '大同市',
                '318': '阳泉市',
                '325': '晋城市',
                '330': '朔州市',
                '336': '晋中市',
                '350': '忻州市',
                '368': '吕梁市',
                '379': '临汾市',
                '398': '运城市',
                '3074': '长治市'
            },
            '7': {
                '412': '郑州市',
                '420': '开封市',
                '427': '洛阳市',
                '438': '平顶山市',
                '446': '焦作市',
                '454': '鹤壁市',
                '458': '新乡市',
                '468': '安阳市',
                '475': '濮阳市',
                '482': '许昌市',
                '489': '漯河市',
                '495': '三门峡市',
                '502': '南阳市',
                '517': '商丘市',
                '527': '周口市',
                '538': '驻马店市',
                '549': '信阳市',
                '2780': '济源市'
            },
            '8': {
                '560': '沈阳市',
                '573': '大连市',
                '579': '鞍山市',
                '584': '抚顺市',
                '589': '本溪市',
                '593': '丹东市',
                '598': '锦州市',
                '604': '葫芦岛市',
                '609': '营口市',
                '613': '盘锦市',
                '617': '阜新市',
                '621': '辽阳市',
                '632': '朝阳市',
                '6858': '铁岭市'
            },
            '9': {
                '639': '长春市',
                '644': '吉林市',
                '651': '四平市',
                '2992': '辽源市',
                '657': '通化市',
                '664': '白山市',
                '674': '松原市',
                '681': '白城市',
                '687': '延边州'
            },
            '10': {
                '727': '鹤岗市',
                '731': '双鸭山市',
                '737': '鸡西市',
                '742': '大庆市',
                '753': '伊春市',
                '757': '牡丹江市',
                '765': '佳木斯市',
                '773': '七台河市',
                '776': '黑河市',
                '782': '绥化市',
                '793': '大兴安岭地区',
                '698': '哈尔滨市',
                '712': '齐齐哈尔市'
            },
            '11': {
                '799': '呼和浩特市',
                '805': '包头市',
                '810': '乌海市',
                '812': '赤峰市',
                '823': '乌兰察布市',
                '835': '锡林郭勒盟',
                '848': '呼伦贝尔市',
                '870': '鄂尔多斯市',
                '880': '巴彦淖尔市',
                '891': '阿拉善盟',
                '895': '兴安盟',
                '902': '通辽市'
            },
            '12': {
                '904': '南京市',
                '911': '徐州市',
                '919': '连云港市',
                '925': '淮安市',
                '933': '宿迁市',
                '939': '盐城市',
                '951': '扬州市',
                '959': '泰州市',
                '965': '南通市',
                '972': '镇江市',
                '978': '常州市',
                '984': '无锡市',
                '988': '苏州市'
            },
            '13': {
                '2900': '济宁市',
                '1000': '济南市',
                '1007': '青岛市',
                '1016': '淄博市',
                '1022': '枣庄市',
                '1025': '东营市',
                '1032': '潍坊市',
                '1042': '烟台市',
                '1053': '威海市',
                '1058': '莱芜市',
                '1060': '德州市',
                '1072': '临沂市',
                '1081': '聊城市',
                '1090': '滨州市',
                '1099': '菏泽市',
                '1108': '日照市',
                '1112': '泰安市'
            },
            '14': {
                '1151': '黄山市',
                '1159': '滁州市',
                '1167': '阜阳市',
                '1174': '亳州市',
                '1180': '宿州市',
                '1201': '池州市',
                '1206': '六安市',
                '2971': '宣城市',
                '1114': '铜陵市',
                '1116': '合肥市',
                '1121': '淮南市',
                '1124': '淮北市',
                '1127': '芜湖市',
                '1132': '蚌埠市',
                '1137': '马鞍山市',
                '1140': '安庆市'
            },
            '15': {
                '1158': '宁波市',
                '1273': '衢州市',
                '1280': '丽水市',
                '1290': '台州市',
                '1298': '舟山市',
                '1213': '杭州市',
                '1233': '温州市',
                '1243': '嘉兴市',
                '1250': '湖州市',
                '1255': '绍兴市',
                '1262': '金华市'
            },
            '16': {
                '1303': '福州市',
                '1315': '厦门市',
                '1317': '三明市',
                '1329': '莆田市',
                '1332': '泉州市',
                '1341': '漳州市',
                '1352': '南平市',
                '1362': '龙岩市',
                '1370': '宁德市'
            },
            '17': {
                '1432': '孝感市',
                '1441': '黄冈市',
                '1458': '咸宁市',
                '1466': '恩施州',
                '1475': '鄂州市',
                '1477': '荆门市',
                '1479': '随州市',
                '3154': '神农架林区',
                '1381': '武汉市',
                '1387': '黄石市',
                '1396': '襄阳市',
                '1405': '十堰市',
                '1413': '荆州市',
                '1421': '宜昌市',
                '2922': '潜江市',
                '2980': '天门市',
                '2983': '仙桃市'
            },
            '18': {
                '4250': '耒阳市',
                '1482': '长沙市',
                '1488': '株洲市',
                '1495': '湘潭市',
                '1499': '韶山市',
                '1501': '衡阳市',
                '1511': '邵阳市',
                '1522': '岳阳市',
                '1530': '常德市',
                '1540': '张家界市',
                '1544': '郴州市',
                '1555': '益阳市',
                '1560': '永州市',
                '1574': '怀化市',
                '1586': '娄底市',
                '1592': '湘西州'
            },
            '19': {
                '1601': '广州市',
                '1607': '深圳市',
                '1609': '珠海市',
                '1611': '汕头市',
                '1617': '韶关市',
                '1627': '河源市',
                '1634': '梅州市',
                '1709': '揭阳市',
                '1643': '惠州市',
                '1650': '汕尾市',
                '1655': '东莞市',
                '1657': '中山市',
                '1659': '江门市',
                '1666': '佛山市',
                '1672': '阳江市',
                '1677': '湛江市',
                '1684': '茂名市',
                '1690': '肇庆市',
                '1698': '云浮市',
                '1704': '清远市',
                '1705': '潮州市'
            },
            '20': {
                '3168': '崇左市',
                '1715': '南宁市',
                '1720': '柳州市',
                '1726': '桂林市',
                '1740': '梧州市',
                '1746': '北海市',
                '1749': '防城港市',
                '1753': '钦州市',
                '1757': '贵港市',
                '1761': '玉林市',
                '1792': '贺州市',
                '1806': '百色市',
                '1818': '河池市',
                '3044': '来宾市'
            },
            '21': {
                '1827': '南昌市',
                '1832': '景德镇市',
                '1836': '萍乡市',
                '1842': '新余市',
                '1845': '九江市',
                '1857': '鹰潭市',
                '1861': '上饶市',
                '1874': '宜春市',
                '1885': '抚州市',
                '1898': '吉安市',
                '1911': '赣州市'
            },
            '22': {
                '2103': '凉山州',
                '1930': '成都市',
                '1946': '自贡市',
                '1950': '攀枝花市',
                '1954': '泸州市',
                '1960': '绵阳市',
                '1962': '德阳市',
                '1977': '广元市',
                '1983': '遂宁市',
                '1988': '内江市',
                '1993': '乐山市',
                '2005': '宜宾市',
                '2016': '广安市',
                '2022': '南充市',
                '2033': '达州市',
                '2042': '巴中市',
                '2047': '雅安市',
                '2058': '眉山市',
                '2065': '资阳市',
                '2070': '阿坝州',
                '2084': '甘孜州'
            },
            '23': {
                '3690': '三亚市',
                '3698': '文昌市',
                '3699': '五指山市',
                '3701': '临高县',
                '3702': '澄迈县',
                '3703': '定安县',
                '3704': '屯昌县',
                '3705': '昌江县',
                '3706': '白沙县',
                '3707': '琼中县',
                '3708': '陵水县',
                '3709': '保亭县',
                '3710': '乐东县',
                '3711': '三沙市',
                '2121': '海口市',
                '3115': '琼海市',
                '3137': '万宁市',
                '3173': '东方市',
                '3034': '儋州市'
            },
            '24': {
                '2144': '贵阳市',
                '2150': '六盘水市',
                '2155': '遵义市',
                '2169': '铜仁市',
                '2180': '毕节市',
                '2189': '安顺市',
                '2196': '黔西南州',
                '2205': '黔东南州',
                '2222': '黔南州'
            },
            '25': {
                '4108': '迪庆州',
                '2235': '昆明市',
                '2247': '曲靖市',
                '2258': '玉溪市',
                '2270': '昭通市',
                '2281': '普洱市',
                '2291': '临沧市',
                '2298': '保山市',
                '2304': '丽江市',
                '2309': '文山州',
                '2318': '红河州',
                '2332': '西双版纳州',
                '2336': '楚雄州',
                '2347': '大理州',
                '2360': '德宏州',
                '2366': '怒江州'
            },
            '26': {
                '3970': '阿里地区',
                '3971': '林芝地区',
                '2951': '拉萨市',
                '3107': '那曲地区',
                '3129': '山南地区',
                '3138': '昌都地区',
                '3144': '日喀则地区'
            },
            '27': {
                '2428': '延安市',
                '2442': '汉中市',
                '2454': '榆林市',
                '2468': '商洛市',
                '2476': '安康市',
                '2376': '西安市',
                '2386': '铜川市',
                '2390': '宝鸡市',
                '2402': '咸阳市',
                '2416': '渭南市'
            },
            '28': {
                '2525': '庆阳市',
                '2534': '陇南市',
                '2544': '武威市',
                '2549': '张掖市',
                '2556': '酒泉市',
                '2564': '甘南州',
                '2573': '临夏州',
                '3080': '定西市',
                '2487': '兰州市',
                '2492': '金昌市',
                '2495': '白银市',
                '2501': '天水市',
                '2509': '嘉峪关市',
                '2518': '平凉市'
            },
            '29': {
                '2580': '西宁市',
                '2585': '海东地区',
                '2592': '海北州',
                '2597': '黄南州',
                '2603': '海南州',
                '2605': '果洛州',
                '2612': '玉树州',
                '2620': '海西州'
            },
            '30': {
                '2628': '银川市',
                '2632': '石嘴山市',
                '2637': '吴忠市',
                '2644': '固原市',
                '3071': '中卫市'
            },
            '31': {
                '4110': '五家渠市',
                '4163': '博尔塔拉蒙古自治州阿拉山口口岸',
                '15945': '阿拉尔市',
                '15946': '图木舒克市',
                '2652': '乌鲁木齐市',
                '2654': '克拉玛依市',
                '2656': '石河子市',
                '2658': '吐鲁番地区',
                '2662': '哈密地区',
                '2666': '和田地区',
                '2675': '阿克苏地区',
                '2686': '喀什地区',
                '2699': '克孜勒苏州',
                '2704': '巴音郭楞州',
                '2714': '昌吉州',
                '2723': '博尔塔拉州',
                '2727': '伊犁州',
                '2736': '塔城地区',
                '2744': '阿勒泰地区'
            },
            '32': {
                '2768': '台湾市'
            },
            '42': {
                '2754': '香港特别行政区'
            },
            '43': {
                '2770': '澳门市'
            },
            '84': {
                '1310': '钓鱼岛'
            }
        };
        var area = 0;

        if (CookieUtil.getCookie('ipLoc-djd')) {
            area = CookieUtil.getCookie('ipLoc-djd').split('-');
        }

        var param = {
            attrSkuName: 'data-area-sku', //存储sku的伪属性
            maxCount: 100, //一次性传入sku最大数量
            app: 'jshop_web', //系统接入名，李汪洋配置
            ch: 1, //商城PC（京东主站）：1 ;   商城app(手机app（含Pad）)：2; 商城m（m.jd.com手机浏览器）：3 【 m渠道（m.jd.com）目前无法区分，m暂时使用app渠道。库存接口中预留了m渠道，可以区分了再使用】微信：4;   手Q：5 ; 拍拍：6 ; 易讯PC:8；若您不再渠道列表当中，请联系库存组王振。
            // area: CookieUtil.getCookie('ipLoc-djd') ? CookieUtil.getCookie('ipLoc-djd').replace(/-/g, ',') : 0, //用户所在区域，获取不到默认0
            area: area === 0 ? area : area.join(),
            coord: '', //非必传
            site: '', //非必传
            t: new Date().getTime(), //时间戳
            state: {
                33: '现货',
                34: '无货',
                39: '在途',
                36: '预订',
                40: '可配货'
            }
        };

        if (skuIds.length > 0 && param.area !== 0) {
            var len = Math.ceil(skuIds.length / param.maxCount);

            for (var i = 0; i < len; i++) {
                var skuFragment = skuIds.slice(i * param.maxCount, Math.min(skuIds.length, (i + 1) * param.maxCount));

                jQuery.ajax({
                    url: INTERFACE.ss.areaStockState,
                    data: {
                        app: param.app,
                        skuNum: skuIds.join(';'),
                        ch: param.ch,
                        area: param.area,
                        coord: param.coord,
                        site: param.site,
                        t: param.t
                    },
                    dataType: 'jsonp',
                    success: function success(data) {
                        domOperate(skuFragment, data);
                    }
                });
            }
        }

        function domOperate(skuFragment, data) {
            var styleStock = '<style id="J_styleStock">' + '.d-stock{position:absolute;bottom:0;left:0;right:0;line-height:25px;height:25px; font-size:12px; color:#fff;filter:progid:DXImageTransform.Microsoft.gradient(enabled="true", ' + 'startColorstr="#66000000", endColorstr="#66000000");background:rgba(0,0,0,.4);text-align:left; text-indent:10px;}' + '</style>',
                htmlStock = '<div class="d-stock">state</div>',
                sku;
            var updateFlag = false;

            for (var i = 0; skuFragment[i]; i++) {
                (function (i, sku) {
                    if (data[sku] && data[sku].a === '34') {
                        var noStockProcess = function noStockProcess() {
                            if (jQuery('#J_styleStock').length === 0) {
                                //判断当前页面上是否已经有无货样式
                                jQuery('body').append(styleStock);
                            }
                            jQuery('a[' + param.attrSkuName + '=' + sku + ']').each(function (index, n) {
                                var currentImgNode = jQuery(n).parent();

                                if (!currentImgNode.data('isStock')) {
                                    if (currentImgNode.css('position') === 'static') {
                                        //如果当前图片节点没有相对定位或绝对定位属性
                                        currentImgNode.css('position', 'relative');
                                    }
                                    currentImgNode.find('.d-stock').remove();
                                    currentImgNode.append(htmlStock.replace(/state/, json_city[0][area[0]] + param.state[data[sku].a])).data('isStock', true);
                                    var currentNode = currentImgNode.closest('li');
                                    // 判断当前模块是否允许重新排序。20161230，赵增俊，主要是防止设计师模板在重新排序后商品展示错乱。
                                    if (!(currentNode.closest('.j-module').attr('module-function') && currentNode.closest('.j-module').attr('module-function').indexOf('ridSort') !== -1)) {
                                        // 如果当前商品是已售罄状态，就不需要再移动
                                        if (!currentNode.hasClass('d-sold-out')) {
                                            updateFlag = true;
                                            if (currentNode.closest('ul').find('.d-sold-out').length) {
                                                // 将无货的商品移动到模块中已售罄商品之前
                                                $(currentNode.closest('ul').find('.d-sold-out')[0]).before(currentNode);
                                            } else {
                                                // 将无货的商品放到模块最后，
                                                currentNode.closest('ul').append(currentNode);
                                            }
                                            // 重新执行autoQueue方法
                                            JModuleFunctionRefresh.call(currentNode.closest('.j-module'), 'autoQueue');
                                        }
                                    }
                                }
                            });
                        };

                        //20161202星期五 明书，只有是无货时才显示
                        noStockProcess();
                    }
                })(i, skuFragment[i]);
            }
            if (updateFlag) {
                jQuery(window).trigger('scroll');
            }
        }
    }

    return dmAreaStockState;
});

/***/ })

/******/ });/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 370);
/******/ })
/************************************************************************/
/******/ ({

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

	/*moduleName:price*/
	/*require:autoPartition, dmAreaStockState*/
	

J_Module.define('price', ['autoPartition', 'dmAreaStockState'], function () {
    var autoPartition = J_Module.require('autoPartition');
    var dmAreaStockState = J_Module.require('dmAreaStockState');
    price();

    function price() {
        var param = {
            tagAttr: '[data-price="true"]', //价格伪属性
            attrName: 'data-price', //价格伪属性名
            mprice: 'data-sku-m', //skuid的市场价，注：该价格可能返回小于0的价格，如遇小于0的价格请重试。<span class="p-num" data-price="true" data-sku-m="1964702652"></span>
            opprice: 'data-sku-op', //skuid的后台京东价（由采销录入的原始价格），注：该价格可能返回小于0的价格，如遇小于0的价格请重试。 <span class="p-num" data-price="true" data-sku-op="1964702652"></span>
            pprice: 'data-sku-p', //skuid的前台京东价，注：该价格可能返回小于0的价格， -1 ：很大程度上是商品下柜造成，请调用者在程序中做好处理。<span class="p-num" data-price="true" data-sku-p="1964702652"></span>
            spprice: 'data-sku-sp', //skuid的山姆会员价。注：该skuid无山姆会员价时不显示该字段。<span class="p-num" data-price="true" data-sku-sp="1964702652"></span>
            tppprice: 'data-sku-tpp', //skuid的正式+试用会员plus价。注：该skuid无正式+试用会员plus价时不显示该字段。<span class="p-num" data-price="true" data-sku-tpp="1964702652"></span>
            tkpprice: 'data-sku-tkp', //skuid的令牌价 <span class="p-num" data-price="true" data-sku-tkp="10734205004"></span>
            upprice: 'data-sku-up', //双价格优先展示的价格标记，当前字段只有一个值，为方便以后出现n个价格，我们里面存储是以逗号隔开的字符串，目前存在的值枚举：tpp,pp,tkp,sp。举例：tpp    tpp,tkp   <span class="p-num" data-price="true" data-sku-up="10734205004"></span>
            leaseprice: 'data-sku-lease', //分期价格，通过另一个接口获取 <span class="p-num" data-price="true" data-sku-lease="10734205004"></span>
            discountRate: 'data-sku-discount', //折扣率，仅图书频道在用，市场价/京东价，和商详页算法一致<span class="p-num" data-price="true" data-sku-discount="10734205004"></span>
            maxCount: 10, //传入的sku最大限制
            selfTag: '<span class="cd-self-tag J-selfTag">自营</span>', //  增加自营标签
            nameNode: '.J-wname' //  添加标签的节点
        };

        var aPriceType = ['data-sku-m', 'data-sku-op', 'data-sku-p', 'data-sku-sp', 'data-sku-tpp', 'data-sku-tkp', 'data-sku-up', 'data-sku-lease'],
            nodes = [],
            //存储处理过的节点
        skuidStr = '',
            //拼装的sku字符串，价格接口参数
        nodesShow = [],
            //临时数组：存储当前页面已经显示的节点
        skuCurrent = [],
            //临时数组：存储当前页面上显示出来的节点，获取的sku去重后的数组；调p.3.cn
        skuCurrentLease = []; //临时数组：存储当前页面上显示出来的节点，获取的sku去重后的数组；//存储分期的SKU

        var _window = jQuery(window);

        /** 获取未处理过的节点对象 */
        function _get_nodes() {
            nodes = jQuery(param.tagAttr);
        }

        /** 获取当前窗口显示的节点数组*/
        function _load() {
            _get_nodes();

            nodesShow = []; //初始化

            var __scroll = _window.scrollTop(),
                __winHeitht = _window.height(),
                __min = __scroll ? Math.floor(__scroll - __winHeitht / 4) : 0,
                //非首屏加载回退0.25屏
            __top = __scroll ? Math.floor(__scroll + 1.5 * __winHeitht) : __winHeitht; //首屏加载1屏，其他加载1.5屏

            for (var i = 0, len = nodes.length; i < len; i++) {
                //遍历全部节点
                var __node = jQuery(nodes[i]),
                    __offsetTop = __node.offset().top;

                //兼容以往的老数据
                if (__node.html().length === 0) {
                    __node.html('&nbsp;');
                }

                if (__offsetTop < __top && __offsetTop > __min) {
                    //当前页面上展示出来的节点，位置高度就会大于min小于top
                    nodesShow.push(nodes[i]); //展示出来的就存到临时数组
                    __node.removeAttr(param.attrName); //已经加入到取价格的数组里面的节点，就移除属性名
                }
            }
            $.when(autoPartition({ skuIds: nodesShow })).done(function (data) {
                getSkuid(data);
            });
        }

        //获取当前展示出来的节点skuid，并去重
        function getSkuid(data) {
            skuCurrent = []; //p.3.cn
            skuCurrentLease = []; //存储分期的SKU
            if (data && data.length > 0) {
                for (var i = 0; i < data.length; i += 1) {
                    if (data[i].realSkuId) {
                        skuCurrent.push(data[i].realSkuId);
                    } else {
                        skuCurrent.push(data[i].goodsId);
                    }
                }
            } else {
                for (var i = 0; nodesShow[i]; i++) {
                    //获取属性sku
                    for (var j = 0; aPriceType[j]; j++) {
                        if (jQuery(nodesShow[i]).attr(aPriceType[j])) {
                            if (aPriceType[j] == param.leaseprice) {
                                skuCurrentLease.push(jQuery(nodesShow[i]).attr(aPriceType[j]));
                            } else {
                                skuCurrent.push(jQuery(nodesShow[i]).attr(aPriceType[j]));
                            }
                        }
                    }
                }
            }

            skuCurrent = skuCurrent.unique();
            skuCurrentLease = skuCurrentLease.unique();
            if (skuCurrent.length > 0) {
                getData();
                getTag(skuCurrent);
                dmAreaStockState(skuCurrent);
            }
            if (skuCurrentLease.length > 0) {
                getLeaseData();
                getTag(skuCurrentLease);
                dmAreaStockState(skuCurrentLease);
            }
        }

        /** 获取数据 */
        function getData() {
            var len = Math.ceil(skuCurrent.length / param.maxCount);

            for (var i = 0; i < len; i++) {
                var skuFragment = skuCurrent.slice(i * param.maxCount, Math.min(skuCurrent.length, (i + 1) * param.maxCount));

                var prefix = 'J_',
                    priceUrl = INTERFACE.price.jd,
                    postData = {
                    source: 'jshop',
                    area: CookieUtil.getCookie('ipLoc-djd') ? CookieUtil.getCookie('ipLoc-djd').replace(/-/g, '_') : '' //浏览该商品用户的地址信息串,用下划线将多级地址ID从高到低连接,如果不传则获取全国最高价
                };
                // 1号店价格接口不加J_前缀，加上渠道ID，修改source为'jshopact'
                if ($('#J_AppType').val() === '3') {
                    prefix = '';
                    priceUrl = INTERFACE.price.yhd;
                    postData.source = 'jshopact';
                    postData.origin = '8';
                }
                //拼装skuid字符串
                skuidStr = '';
                for (var j = 0; skuFragment[j]; j++) {
                    skuidStr += prefix + skuFragment[j] + ',';
                }
                postData.skuids = skuidStr;

                jQuery.ajax({
                    url: priceUrl,
                    data: postData,
                    dataType: 'jsonp',
                    success: function success(data) {
                        callBackPriceService(data);
                    }
                });
                presaleHidePrice(skuidStr);
            }
        }

        /**
         * 获取预售状态并决定是否将价格改为“待发布”
         */
        function presaleHidePrice(skuids) {
            skuids = skuids.replace(/J_/g, '');
            getPresaleInfo(skuids).then(function (data) {
                if (data.result === true) {
                    var map = data.skuMap;
                    for (var sku in map) {
                        var shouldHide = map[sku].hidePrice;
                        var isPresale = map[sku].status != 4 && map[sku].status != 5;
                        if (shouldHide === true && isPresale) {
                            hidePrice(sku);
                        }
                    }
                }
            });

            /**
             * 将该sku对应的节点价格替换为“待发布”，并打上标data-hide-price
             * @param {string} sku sku
             */
            function hidePrice(sku) {
                $('[data-sku-p="' + sku + '"]').each(function () {
                    var $node = $(this);
                    $node.html('待发布').attr('data-hide-price', 'true');
                });
            }

            function getPresaleInfo(skuids) {
                var promise = $.Deferred();
                $.ajax({
                    url: '//f-mall.jd.com/product/checkOrder.html',
                    data: {
                        skuIds: skuids
                    },
                    dataType: 'jsonp',
                    success: function success(data) {
                        promise.resolve(data);
                    }
                });
                return promise.promise();
            }
        }

        /**
         *  获取pop 店铺  京东自营 标签
         */
        function getTag(skuIds) {
            if ($('#isFuseShop').val() !== 'true') {
                return false;
            }
            if (skuIds.length === 0) {
                return false;
            }

            for (var i = 0; i < Math.ceil(skuIds.length / param.maxCount); i += 1) {
                var fragment = skuIds.slice(i * param.maxCount, (i + 1) * param.maxCount);

                $.ajax({
                    url: '//f-mall.jd.com/product/getSelfState',
                    data: {
                        skuIds: fragment.join()
                    },
                    dataType: 'jsonp',
                    success: function success(data) {
                        if (data.result) {
                            data.productState.forEach(function (skuId) {
                                var name = $('li[data-skuId=' + skuId + ']').find(param.nameNode);
                                if (name.find('.J-selfTag').length === 0) {
                                    name.prepend(param.selfTag);
                                }
                            });
                        }
                    }
                });
            }
        }

        /** 获取分期数据 */
        function getLeaseData() {
            var len = Math.ceil(skuCurrentLease.length / param.maxCount);

            for (var i = 0; i < len; i++) {
                var skuFragment = skuCurrentLease.slice(i * param.maxCount, Math.min(skuCurrentLease.length, (i + 1) * param.maxCount));

                var leaseSkuidStr = ''; //拼装的分期价格sku字符串
                for (var j = 0; skuFragment[j]; j++) {
                    leaseSkuidStr += skuFragment[j] + ',';
                }

                // 如果发现有分期用的商品，就走分期用的接口,目前分期用商品只有搜索接口会打标，所以这里只针对主从，分页，全部商品，高级搜索模块。
                // 20171020，by cdhewu
                jQuery.ajax({
                    url: INTERFACE.price.leasePrice,
                    data: { skuIds: leaseSkuidStr },
                    dataType: 'jsonp',
                    success: function success(data) {
                        //如果传入的商品都没有分期价，data.data是Null
                        if (!data.data) {
                            var arr = leaseSkuidStr.split(',');
                            arr.pop();

                            arr.each(function (index, item) {
                                jQuery('[' + param.leaseprice + '=' + item + ']').html('暂无定价');
                            });
                            return;
                        }
                        // 如果商品下架或者售罄，接口不会返回对应的sku，所以这里对比一下前后的sku，设置售罄状态
                        if (data.data && leaseSkuidStr.split(',').length - 1 !== data.data.length) {
                            var resultSkuIdList = data.data.map(function (item) {
                                return item.skuId + '';
                            });
                            leaseSkuidStr.split(',').each(function (index, item) {
                                if (item && $.inArray(item, resultSkuIdList) === -1) {
                                    /*p.JD_price._set_sold_out({
                                        id: item
                                    },param.leaseprice);*/
                                    var soldOutGood = jQuery('span[' + param.leaseprice + '=' + item + ']');
                                    soldOutGood.html('暂无定价');
                                }
                            });
                        }
                        if (data.data) {
                            callBackLeasePriceService(data.data);
                        }
                    }
                });
            }
        }

        /** 滚动时，获取商品价格*/
        function _event_register() {
            var delayTimer = 0;
            _window.bind('scroll resize mousemove click', function () {
                clearTimeout(delayTimer);
                delayTimer = setTimeout(_load, 150);
            });
        }

        function _init() {
            _get_nodes();
            _load();
            _event_register();
        }

        /** 价格请求回调函数 */
        function callBackPriceService(data) {
            for (var i = 0, len = data.length; i < len; i++) {
                var skuid;
                // 1号店接口专属逻辑，回参中的skuid不含"J_"，不用去除 cdzhusiyi@jd.com 20170926
                if (jQuery('#J_AppType').val() === '3') {
                    skuid = data[i].id;
                } else {
                    skuid = data[i].id.substr(2);
                }
                data[i].id = skuid;
                p.getNumPriceService(data[i]);
            }
        }

        /** 分期价格请求回调函数 */
        function callBackLeasePriceService(data) {
            var skuid = 0;
            for (var i = 0, len = data.length; i < len; i++) {
                skuid = data[i].skuId;
                data[i].id = skuid;
                if (jQuery('[' + param.leaseprice + ']').length > 0) {
                    p.JD_price._set_lease_price(data[i], '暂无定价');
                } //获取分期价格
            }
        }

        /** 价格填充 */
        var p = {};

        /*
         * 填充价格
         */
        p.getNumPriceService = function (data) {
            if (!data) return;
            var _no_price_tag = '暂无定价';
            if (jQuery('[' + param.mprice + ']').length > 0) {
                p.JD_price._set_m_price(data, _no_price_tag);
            }
            //skuid的市场价
            if (jQuery('[' + param.opprice + ']').length > 0) {
                p.JD_price._set_op_price(data, _no_price_tag);
            }
            //skuid的后台京东价
            if (jQuery('[' + param.pprice + ']').length > 0) {
                p.JD_price._set_p_price(data, _no_price_tag);
            }
            //skuid的前台京东价
            if (jQuery('[' + param.spprice + ']').length > 0) {
                p.JD_price._set_sp_price(data, _no_price_tag);
            }
            //skuid的山姆会员价
            if (jQuery('[' + param.tppprice + ']').length > 0) {
                p.JD_price._set_tpp_price(data, _no_price_tag);
            }
            //skuid的正式+试用会员plus价
            if (jQuery('[' + param.tkpprice + ']').length > 0) {
                p.JD_price._set_tkp_price(data, _no_price_tag);
            }
            //skuid的令牌价
            if (jQuery('[' + param.upprice + ']').length > 0) {
                p.JD_price._set_up_price(data, _no_price_tag);
            }
            //双价格优先展示的价格标记
            if (jQuery('[' + param.discountRate + ']').length > 0) {
                p.JD_price._set_discount_rate(data);
            }
            //获取折扣率
        };

        p.JD_price = {
            /*
             * skuid的市场价
             */
            _set_m_price: function _set_m_price(data, tag) {
                var _price = data.m >= 0 ? data.m : tag;
                jQuery('[' + param.mprice + '=' + data.id + ']').each(function (index, n) {
                    jQuery(n).html(_price);
                });
            },
            /*
             * skuid的后台京东价
             */
            _set_op_price: function _set_op_price(data, tag) {
                var _price = data.op >= 0 ? data.op : tag;
                jQuery('[' + param.opprice + '=' + data.id + ']').each(function (index, n) {
                    jQuery(n).html(_price);
                });
            },
            /*
             * skuid的前台京东价
             */
            _set_p_price: function _set_p_price(data, tag) {
                var _price = data.p >= 0 ? data.p : tag;
                jQuery('[' + param.pprice + '=' + data.id + ']').each(function (index, n) {
                    var $node = $(n);
                    if ($node.attr('data-hide-price') === 'true') {
                        return;
                    }
                    $node.html(_price);
                });
                if (data.p < 0) {
                    p.JD_price._set_sold_out(data, param.pprice);
                }
            },
            /*
             * skuid的山姆会员价
             */
            _set_sp_price: function _set_sp_price(data, tag) {
                var _price = data.sp >= 0 ? data.sp : tag;
                jQuery('[' + param.spprice + '=' + data.id + ']').each(function (index, n) {
                    jQuery(n).html(_price);
                });
            },
            /*
             * 设置正式+试用会员plus价
             */
            _set_tpp_price: function _set_tpp_price(data, tag) {
                var _price = data.tpp >= 0 ? data.tpp : tag;
                jQuery('[' + param.tppprice + '=' + data.id + ']').each(function (index, n) {
                    jQuery(n).html(_price);
                });
            },
            /*
             * 商品令牌价 20171019星期四 wanchuan
             */
            _set_tkp_price: function _set_tkp_price(data, tag) {
                var _price = '',
                    dataPrice = '';
                if (data.tkp && data.tkp >= 0) {
                    //如果有令牌价
                    _price = data.tkp;
                    dataPrice = param.tkpprice;
                } else if (data.p >= 0) {
                    //没有则展示京东价
                    _price = data.p;
                    dataPrice = param.pprice;
                } else {
                    _price = tag;
                }

                jQuery('[' + param.tkpprice + '=' + data.id + ']').each(function (index, n) {
                    jQuery(n).html(_price).attr('data-price', dataPrice);
                });
            },
            /*
             * 智能显示价格 20171019星期四 wanchuan
             * 双价格优先展示的价格标记，当前字段只有一个值，为方便以后出现n个价格，我们里面存储是以逗号隔开的字符串，目前存在的值枚举：tpp,pp,tkp,sp。举例：tpp    tpp,tkp
             * 20171019星期四吴国晓：'up':'tpp,pp,tkp,sp'，up参数是价格接口推荐展示的价格，如果里面出现了多个，则以值的先后顺序，展示第一个；
             */
            _set_up_price: function _set_up_price(data, tag) {
                var _price = '',
                    dataPrice = '';
                if (data.up) {
                    data.up = data.up.split(',')[0]; //取推荐里面的第一个
                    _price = data[data.up] >= 0 ? data[data.up] : tag;
                    dataPrice = data.up;
                } else {
                    _price = data.p >= 0 ? data.p : tag;
                    dataPrice = 'p';
                }

                jQuery('[' + param.upprice + '=' + data.id + ']').each(function (index, n) {
                    jQuery(n).html(_price).attr('data-price', dataPrice);
                });
                if (_price == tag) {
                    p.JD_price._set_sold_out(data, param.upprice);
                }
            },
            /*
             * 获取分期价格
             */
            _set_lease_price: function _set_lease_price(data, tag) {
                var _price = data.leastPlanAmount >= 0 ? data.leastPlanAmount + '起×' + data.longestPlanStages + '期' : tag;

                jQuery('[' + param.leaseprice + '=' + data.id + ']').each(function (index, n) {
                    jQuery(n).html(_price);
                });
            },
            /*
             * 获取折扣率
             */
            _handle_discount: function _handle_discount(jp, mp) {
                if (typeof jp === 'undefined' || typeof mp === 'undefined') {
                    return;
                }
                jp = parseFloat(jp);
                mp = parseFloat(mp);

                if (!jp || !mp) {
                    return '';
                }
                //float精度16
                var discount = Math.ceil(parseFloat(mp / jp).toFixed(15) * 100);
                return discount ? parseFloat(discount / 10) : '';
            },
            /*
             * 设置促销折扣率
             */
            _set_discount_rate: function _set_discount_rate(data) {
                var __jdprice = data.p >= 0 ? data.p : 0,
                    __sales_price = data.m >= 0 ? data.m : 0;
                $('[' + param.discountRate + '=' + data.id + ']').each(function (index, n) {
                    $(n).html(p.JD_price._handle_discount(__sales_price, __jdprice));
                });
            },
            /*
             * 设置已售完
             */
            _set_sold_out: function _set_sold_out(data, priceType) {
                var htmlSoldOut = '<div class="d-soldout">' + '<a href="#" target="_blank">' + '<span class="d-soldout-bg"></span>' + '<b></b>' + '</a>' + '</div>',
                    styleSoldOut = '<style id="J_styleSoldOut">' + '.d-soldout{display:block; top:0; height:100%; position:absolute; left:0; width:100%; -webkit-transition: all .2s ease-out; -moz-transition: all .2s ease-out; -ms-transition: all .2s ease-out; -o-transition: all .2s ease-out; transition: all .2s ease-out;}' + '.d-soldout .d-soldout-bg{height: 100%; opacity: .4; filter: alpha(opacity=40); position: absolute; left: 0; top: 0; z-index: 1; width: 100%; background: #000;}' + '.d-soldout b{background: url(//img10.360buyimg.com/cms/jfs/t2977/349/2488392477/6460/7b22cb4c/57b136c4N366eaa28.png) no-repeat;position: absolute; left: 50%; top: 50%; z-index: 2; width: 160px; height: 160px; margin-left: -80px; margin-top: -80px;}' + '.d-sold-out .d-stock{display:none;}' + '</style>';

                if (jQuery('#J_styleSoldOut').length == 0) {
                    //判断当前页面上是否已经有售罄样式
                    jQuery('body').append(styleSoldOut);
                }

                var updateFlag = false;
                jQuery('[' + priceType + '=' + data.id + ']').each(function (index, n) {
                    var currentNode = jQuery(n).closest('li');
                    if (!currentNode.data('isSold')) {
                        if (currentNode.css('position') == 'static') {
                            //如果当前节点没有相对定位或绝对定位属性
                            currentNode.css('position', 'relative');
                        }
                        JD_price.autoReplaceGoods(currentNode);
                        currentNode.append(htmlSoldOut.replace(/#/, currentNode.find('a').attr('href'))).data('isSold', true).addClass('d-sold-out');
                        // 判断当前模块是否允许重新排序。20161230，赵增俊，主要是防止设计师模板在重新排序后商品展示错乱。
                        if (!(currentNode.closest('.j-module').attr('module-function') && currentNode.closest('.j-module').attr('module-function').indexOf('ridSort') != -1)) {
                            updateFlag = true;
                            // By cdhewu, 将已售罄的商品移动到模块最后
                            currentNode.closest('ul').append(currentNode);

                            //重新刷新自适应
                            // var module = currentNode.closest('.j-module'),
                            //     _param = {},
                            //     func = module.attr('data-function');
                            //
                            // if (func !== undefined) {
                            //     var funcs = func.split(',');
                            //
                            //     try {
                            //         _param = eval('(' + module.attr('module-param') + ')');
                            //     } catch (e) {
                            //         _param = {};
                            //     }
                            //
                            //     if ($.inArray('autoQueue', funcs) >= 0) {
                            //         J_Module.use('autoQueue').then((autoQueue) => {
                            //             autoQueue.call(module, Object.assign({ "numForce": module.attr('data-numForce') }, _param));
                            //         });
                            //     }
                            // }
                            // 重新执行autoQueue方法
                            JModuleFunctionRefresh.call(currentNode.closest('.j-module'), 'autoQueue');
                        }
                    }
                });
                if (updateFlag) {
                    _window.trigger('scroll');
                }
            },

            // 浏览界面，商品推荐模块，需要判断是否需要换货
            autoReplaceGoods: function autoReplaceGoods(currentNode) {
                // 预览页面，装修页面，或者1号店店铺所有页面，都不执行补货逻辑
                if (getPageType() === 2 || getPageType() === 3 || jQuery('#J_AppType').val() === '3') {
                    return;
                }
                var moduleNode = currentNode.parents('div[module-name="GoodsRec"]');
                // 如果当前节点的模块不是商品推荐模块，不执行
                if (!moduleNode.length) {
                    return;
                }
                // 如果当前模块已经执行过自动替换，就不再执行
                if (jQuery(moduleNode).attr('isAutoPlace') === 'true') {
                    return;
                }
                jQuery(moduleNode).attr('isAutoPlace', 'true');
                // 出于安全考虑，后台会自己获取模块skuId，并调用后台接口检测商品是否下架。
                // var goodsNodes = jQuery(moduleNode).find('span[jshop="price"]'),
                //拼装skuid字符串
                // skuidStr = '';
                // for(var j = 0; goodsNodes[j]; j++){
                //     skuidStr += jQuery(goodsNodes[j]).attr('pprice') + ',';
                // }
                jQuery.ajax({
                    url: INTERFACE.price.replaceGoods,
                    data: {
                        // allGoodsIdStr: skuidStr,
                        pageInstanceId: jQuery('#pageInstance_id').val(),
                        moduleInstanceId: jQuery(moduleNode).attr('instanceid')
                    },
                    dataType: 'jsonp',
                    success: function success(data) {
                        // 不需要关心返回结果，自动替换的商品会在第二次刷新页面的时候生效
                    }
                });
            }
        };

        /** 模块内容刷新时使用 */
        window.JD_local_new_price = function (obj) {
            if (!obj || !obj.length) {
                return;
            }
            if (typeof obj == 'string') {
                obj = jQuery(obj);
            }

            var nodesModule = obj.find(param.tagAttr);
            if (!nodesModule.length) {
                return;
            }

            nodesShow = nodesModule;
            getData();
            getTag();
        };

        //预览页面2和二级页面浏览4使用了bigpipe加载，需要调用getRenderPrice；
        //window.getRenderPrice = _init;

        //20180322星期四万川：此新逻辑会实时从页面行获取节点，所以不需要在任何地方独立调用；
        jQuery(function () {
            _init();
        });
    }

    return price;
});

/***/ })

/******/ });