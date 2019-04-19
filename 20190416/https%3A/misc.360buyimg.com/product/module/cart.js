/*
 JDModules Compressed by uglify 
 Author:keelii 
 Date: 2016-05-17 
 */
define("product/module/cart",function(require,a,b){function c(a,b,c){b||(b={},c=$.noop),$.isFunction(b)&&(c=b,b={});var d={pid:a,f:3,ptype:1,pcount:1};return $.extend(d,b),$.ajax({url:"//cart.jd.com/gate.action",data:d,dataType:"jsonp",cache:!1,success:c||$.noop})}function d(a){return a=a||$.noop,$.ajax({url:"//cart.jd.com/cart/miniCartServiceNew.action",data:{method:"GetCart"},cache:!1,dataType:"jsonp",success:a})}a.addToCart=c,a.getCart=d});