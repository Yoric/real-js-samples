//wm渠道值传递
(function (d) {
    var mdLastDate = new Date * 1;

    function __getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = location.search.substr(1).match(reg);
        if (r != null) return decodeURIComponent(r[2]);
        return null;
    }

    function addArg(ele, reg, key, value) {
        var $links = ele;
        var $link, href, aHref;
        for (var i = 0, len = $links.length; i < len; i++) {
            $link = $links[i];
            href = $link.getAttribute('href');
            if (reg.test(href)) {
                var hashReg = /#\S+/;
                var rReg = href.match(hashReg);
                if (href.indexOf('?') === -1) {
                    if (rReg) {
                        aHref = href.replace(rReg[0], '') + '?' + key + '=' + value + rReg[0];
                    } else {
                        aHref = href + '?' + key + '=' + value;
                    }
                } else if (href.indexOf('&') === -1) {
                    if (href.indexOf('' + key + '=') === -1) {
                        if (rReg) {
                            aHref = href.replace(rReg[0], '') + '&' + key + '=' + value + rReg[0];
                        } else {
                            aHref = href + '&' + key + '=' + value;
                        }
                    } else {
                        aHref = href;
                    }
                } else {
                    if (href.indexOf('' + key + '=') === -1) {
                        if (rReg) {
                            aHref = href.replace(rReg[0], '') + '&' + key + '=' + value + rReg[0];
                        } else {
                            aHref = href + '&' + key + '=' + value;
                        }
                    } else {
                        aHref = href;
                    }
                }
                $link.setAttribute('href', aHref);
            }
        }
    }
    function addUaTrack(pNode, key, value, cNode, reg){
        pNode.on('click', cNode || 'a',function(e){
            if(window.SUDA && SUDA.uaTrack){
                var me = $(this),href = me.attr('href');
                if((reg || /db.auto.sina.cn\/\d+/).test(href)){
                    if(me.attr('target') != '_blank'){
                        e.preventDefault();
                        SUDA.uaTrack(key,value,href);
                        setTimeout(function(){
                            location.href = href;
                        },100);
                    }else{
                        SUDA.uaTrack(key,value,href);
                    }
                }
            }
        });
    }

    d.addEventListener('DOMContentLoaded', function () {
        var wm = __getQueryString('wm'), $pos = document.getElementsByName('pos');
        if (wm) {
            addArg(document.getElementsByTagName('a'), /http:|https:|\/\//, 'wm', wm);
            d.addEventListener('DOMSubtreeModified', function () {
                if (new Date * 1 - mdLastDate >= 500) {
                    addArg(document.getElementsByTagName('a'), /http:|https:|\/\//, 'wm', wm);
                    mdLastDate = new Date * 1;
                }
            });
        }
        if ($pos.length && $pos[0] && $pos[0].value) { //for首页
            addArg(document.getElementsByTagName('a'), /http:|https:|\/\//, 'pos', $pos[0].value);
            d.addEventListener('DOMSubtreeModified', function () {
                if (new Date * 1 - mdLastDate >= 500) {
                    addArg(document.getElementsByTagName('a'), /http:|https:|\/\//, 'pos', $pos[0].value);
                    mdLastDate = new Date * 1;
                }
            });
        }

        /*车型库leads（sid传递）*/
        if(location.hostname === 'auto.sina.com.cn'){
            if(location.pathname === '/'){//首页
            }else if(location.pathname.indexOf('/detail-') !== -1){//正文页
                if($('.model-right-moudle').length){
                    addArg(document.querySelectorAll('.model-right-moudle .cuxiao a'),/auto.sina.cn.+?.d.html|auto.sina.com.cn.+?.shtml/,'hqid','11010');
                    addUaTrack($('.model-right-moudle .cuxiao'),'hqid','11010','a',/auto.sina.cn.+?.d.html|auto.sina.com.cn.+?.shtml/);
                }
            }else if(/^\/tuji\/?$/.test(location.pathname)){
                // addUaTrack($('body'),'cxpic','02203','.module-box a',/.+db.auto.sina.cn\/photo\/.+?\.html/); //图集feed流
                // addArg(document.querySelectorAll('.module-box a'),/.+db.auto.sina.cn\/photo\/.+?\.html/,'sid','02203');
            }
        }else if(location.hostname === 'db.auto.sina.com.cn'){
            if(location.pathname === '/cars/'){//车型大全-品牌选车
                // addArg(document.querySelectorAll('.hotCx .carGroup a'),/db.auto.sina.cn\/\d+/,'sid','00202');//热门车型
                // addUaTrack($('.hotCx .carGroup'),'sid','00202');
            }else if(/^\/\d+\/?$/.test(location.pathname)){//车型库
                addArg(document.querySelectorAll('.con_img .cimg_right .infos li a'),/auto.sina.cn.+?.d.html|auto.sina.com.cn.+?.shtml/,'hqid','11002'); //降价广告
                addUaTrack($('.con_img .cimg_right .infos li'),'hqid','11002','a',/auto.sina.cn.+?.d.html|auto.sina.com.cn.+?.shtml/);
            }else if(location.pathname.indexOf('/price/s') !== -1){//车型库子品牌页
                if($('.latestOffersBox').length){
                    addArg(document.querySelectorAll('.latestOffersBox a'),/auto.sina.cn.+?.d.html|auto.sina.com.cn.+?.shtml/,'hqid','11003');
                }
            }else if(location.pathname.indexOf('/photo') !== -1){//图集
                addArg(document.querySelectorAll('.content_bar .jj_art'),/auto.sina.cn.+?.d.html|auto.sina.com.cn.+?.shtml/,'hqid','11011'); //降价广告
            }else if(location.pathname === '/price/'){ //报价库-降价信息
                addArg(document.querySelectorAll('.market-list li a'),/auto.sina.cn.+?.d.html|auto.sina.com.cn.+?.shtml/,'hqid','11001');
                addUaTrack($('.market-list li'),'hqid','11001','a',/auto.sina.cn.+?.d.html|auto.sina.com.cn.+?.shtml/);
            }
        }
    }, false);
})(document);