/*! market 2015-08-24 */
!function(){for(var a="1.3.24",b=["ctrl","msg","getHelper","xctrl"],c={},d=function(){var a=new Date;return a.getFullYear()+""+a.getMonth()+a.getDate()},e=0;e<b.length;e+=1)c["market/"+b[e]]={alias:["tbc/market/"+a+"/"+b[e]]};KISSY.config({combine:!0,packages:[{name:"tms",tag:d(),path:"//g.alicdn.com/tbc/market/"+a+"/",charset:"gb2312"}],modules:c}),KISSY.use("node",function(a,b){function c(a){var c=b.one(a),d=g_SPM.getParam(a),e=d.a+"+"+d.b,f=e+"+"+d.c,g=c.parent(".J_Module").attr("data-name"),h=c.attr("data-tab-index");goldlog.record("/tbmarket.2014.1","","tab="+h+"&page="+e+"&space="+f+"&divname="+g,"H46896547")}var d;b.one(document).delegate("mouseenter mouseleave",".J_spm_tab_mouseenter",function(a){"mouseenter"===a.type?(clearTimeout(d),d=setTimeout(function(){c(a.target)},300)):clearTimeout(d)}),b.one(document).delegate("mousedown",".J_spm_tab_mousedown",function(a){c(a.target)})})}();