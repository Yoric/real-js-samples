/* fourFreeOne-2.0.0 main.js Date:2018-06-15 18:05:02 */
var searchUnit={pType:0};!function(){var a="undefined"!=typeof params&&params.istsyx===!0;var b=a&&"1713"===params.firstCatId;var c=a&&!b;searchUnit.isBookMvd=a,searchUnit.isBook=b,searchUnit.isMvd=c}(),define("APP_ROOT/js/main.js",function(require,a,b){var c=require("JDF_UNIT/globalInit/5.0.0/globalInit.js");var d=require("JDF_UNIT/hotwords/5.0.0/hotwords.js");require("JDF_UI/switchable/1.0.0/switchable.js");require("JDF_UI/lazyload/1.0.0/lazyload.js");require("JDF_UNIT/notif/1.0.0/notif.js");require("MISC/product/module/clslog.js");var i=require("APP_ROOT/js/selector.js");require("APP_ROOT/js/promotion.js");var k=require("APP_ROOT/js/goodsList.js");var l=require("APP_ROOT/js/backtop.js");var m=require("APP_ROOT/js/tools.js");require("APP_ROOT/js/common-618-n.js").init();var o=$("body");if(c(),d(),tem){var p=tem.replace(/\d+/,"");$("body").addClass(p)}var q=null;$("body").undelegate("mouseenter.enter").delegate(".J-picon-tips","mouseenter.enter",function(){var a=$(this);var b=a.parents(".gl-item");var c=b.find(".J-picon-tips:eq(0)");var d=a.parents(".p-icons");var e=b.index();var f="ui-tips"+e;var g=0,h=0;a.parents(".gl-i-wrap").width()+2;var j=a.attr("data-tips");var k="";clearTimeout(q),0==$("#"+f).length?(k='<div class="ui-tips ui-tips-top ui-tips-x-left ui-tips-skin1" style="z-index: 101;" id="'+f+'"><div class="ui-tips-main">'+j+'</div><span class="ui-tips-arrow" style="z-index: 101;"></span></div>',d.after(k),g=c.offset().left,h=a.offset().left-g,$("#"+f).find(".ui-tips-arrow").css({marginLeft:h-1})):(g=c.offset().left,h=a.offset().left-g,$("#"+f).show().find(".ui-tips-main").html(j).end().find(".ui-tips-arrow").css({marginLeft:h-1}))}),$("body").undelegate("mouseleave.leave").delegate(".J-picon-tips","mouseleave.leave",function(){q=setTimeout(function(){$(this);var b=$(this).parents(".gl-item");var c=b.index();var d="ui-tips"+c;$("#"+d).hide()},100)}),$("body").undelegate("mouseleave.leave2").delegate(".p-icons","mouseleave.leave2",function(){var a=$(this).parents(".gl-item").find(".ui-tips-skin1");a.hide()}),function(){var a=$(".menu-drop");a.hover(function(){var a=$(this);a.addClass("z-menu-drop-open")},function(){var a=$(this);a.removeClass("z-menu-drop-open")})}();var i=i;i.init();var k=k;k.init();var l=new l;searchUnit.setImgLazyload=function(a){var a=a||"body";$(a).lazyload({type:"img",placeholder:"//misc.360buyimg.com/lib/img/e/blank.gif",delay:20,space:200}),$(a).length>0&&pageConfig.FN_ImgError($(a)[0])},searchUnit.setImgLazyload("body"),searchUnit.initAside=function(){searchUnit.setImgLazyload("#J_goodsList")},searchUnit.initAside(),searchUnit.initFooter=function(){var a=$("#GLOBAL_FOOTER");if(a.length>0){a.attr("type")||"";o.lazyload({type:"fn",source:a,space:500,onchange:function(){var b=this;var c=a.attr("type")||"";$.ajax({url:"//d.3.cn/footer?type="+c,dataType:"jsonp",cache:!0,scriptCharset:"gb2312",jsonpCallback:"showfooter",success:function(a){a&&a.content&&b.source.html(a.content.replace(/data\-lazyload/g,"src"))}})}})}},searchUnit.initFooter();var r=$("#plist");var s=[];r.find(".j-sku-item").each(function(a,b){s.push($(b).attr("data-sku"))}),m.priceNum({skus:s,$el:r,callback:function(a,b){var c="";c=b.p>0?"<em>\xa5</em><i>"+b.p+"</i>":"<i>\u6682\u65e0\u62a5\u4ef7</i>",r.find(".j-sku-item[data-sku="+a+"]").find(".p-price strong").html(c)}})});var filtUrl=function(a,b){var c,d;return a||b?(b?(c=a,d=b):(c=window.location.pathname+window.location.search,d=a),c.replace(new RegExp("(^|\\?|&)"+d+"=([^&]*)","gi"),"")):""};var page_jump=function(a){var b=$("#page_jump_num").val();b&&(window.location=filtUrl(window.location.href,"page")+"&page="+b)};$("#categorys-2014 .dd .dd-inner .item").mouseenter(function(){var a=$(this),b=$(this).index();$("#categorys-2014 .dd .dd-inner .item").removeClass("hover hover2"),a.addClass("hover"),$.trim($("#categorys-2014 .dorpdown-layer .item-sub").eq(b).find("dd a").html())?$("#categorys-2014 .dorpdown-layer").show():a.addClass("hover2");var c=a.attr("data-index");$("#categorys-2014 .dorpdown-layer .item-sub").removeClass("hover"),$("#category-item-"+c).addClass("hover")}),$("#categorys-2014 .dd").mouseleave(function(){$("#categorys-2014 .dd .dd-inner .item").removeClass("hover hover2"),$("#categorys-2014 .dd .dorpdown-layer .item-sub").removeClass("hover"),$("#categorys-2014 .dorpdown-layer").hide()});
