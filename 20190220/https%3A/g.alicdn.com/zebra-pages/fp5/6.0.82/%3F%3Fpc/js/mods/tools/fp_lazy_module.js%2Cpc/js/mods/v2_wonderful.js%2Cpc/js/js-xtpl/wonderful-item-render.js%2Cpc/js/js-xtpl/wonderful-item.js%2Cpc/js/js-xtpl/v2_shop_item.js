define("zebra-pages/fp5/pc/js/mods/tools/fp_lazy_module",["zebra-pages/fp5/pc/js/mods/model","zebra-pages/fp5/pc/js/mods/util"],function(e,t,a){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=e("zebra-pages/fp5/pc/js/mods/model"),i=e("zebra-pages/fp5/pc/js/mods/util"),o=300,s=$(window).height(),l=s,d=[],c=function(){};window.console=window.console||{"error":c,"log":c,"warn":c};var p={"init":function(){var e=i.buffer(this.detect,o,this);$(window).on("scroll",e)},"detect":function(){var e=($(document).height(),$(window).scrollTop()),t=[];d.forEach(function(a,n){var r=0,i=void 0;i=a.el instanceof $?a.el:$(a.el),r=i.offset().top,i.height(),s+e+a.diff>=r&&(a.callback&&a.callback(a.id),t.push(n))});for(var a=t.length;a>0;a--)d.splice(t[a-1])},"add":function(e,t){if(!t||!t.el)throw new Error("lazyload must have config, must set an el");d.push({"id":t.id||S.guid(),"diff":t.diff||l,"callback":e,"el":t.el}),t.immediately&&this.detect()},"removeCallback":function(e){for(var t=0;t<d.length;t++){d[t].id==e&&d.splice(t,1)}}};p.init();var u=function(e){return{"batch":function(e){var t=[];if("object"===(void 0===e?"undefined":n(e))&&e!==undefined){t=Object.keys(e);for(var a in e){e[a]}}else console.error("wrong DataLoader.batch call, illegal aldSetting");return r.loadAlds(t).then(function(e){return e})},"single":function(e,t){return r.loadAld(e).then(function(e){return e})}}};a.exports={"load":function(e,t){var a=void 0;if(!e)throw new Error("fp_lazy_module: wrong moduleSetting");e.moduleName;e.customizeInit&&(a=e.customizeInit),t?setTimeout(function(){a.apply(e,[p,u(e)])},t):a.apply(e,[p,u(e)])}}});define("zebra-pages/fp5/pc/js/mods/v2_wonderful",["mui/jquery/jquery","zebra-pages/fp5/pc/js/mods/util","zebra-pages/fp5/pc/js/mods/exposure","zebra-pages/fp5/pc/js/js-xtpl/wonderful-item-render"],function(e,t,a){function o(e,t,a){return t in e?Object.defineProperty(e,t,{"value":a,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=a,e}var n=e("mui/jquery/jquery"),r=e("zebra-pages/fp5/pc/js/mods/util"),i=e("zebra-pages/fp5/pc/js/mods/exposure"),s=e("zebra-pages/fp5/pc/js/js-xtpl/wonderful-item-render"),l=20,d={"el":n(".j_end"),"id":"20001"};a.exports={"moduleName":"wonderfull","$mEle":n(".j_wonderful"),"api_id_wonderfull":"201509290","api_id_shop":"09041","customizeInit":function(e,t){var a=this;this.cachedData=[],e.add(function(){codeTrack("wonderfull.firstpage.fetchdata","app.init"),codeTrack("flagshipshop.fetchdata","app.init"),a._loadFirstPage(t).then(function(e){a._renderFirstPage(e)},function(e){throw codeTrack("error:wonderfull.firstpage","wonderfull.firstpage.fetchdata"),codeTrack("error:flagshipshop","flagshipshop.fetchdata"),a._firstPageErr(e),new Error("first page error")}).then(function(){a._loadMorePage(t,2,e)})["catch"](function(){})},d)},"_loadFirstPage":function(e){var t=this.api_id_wonderfull;return e.batch(o({},t,{"dataEmpty":"error","len":20,"apiName":"wonderful_first"}))},"_renderFirstPage":function(e){for(var t=e[this.api_id_wonderfull],a=[];;){var o=t.data.shift();if(!o)break;if(a.push(o),a.length>=20)break}return this.cachedData=this.cachedData.concat(t.data),t.data=a,this._doRender(t,1),!0},"_firstPageErr":function(){this.$mEle.hide()},"_loadMorePage":function(e,t,a){var o=this,r=void 0;a.add(function(){!0!==r&&(r=!0,codeTrack("wonderfull.morepage.fetchdata","app.init"),e.single({"appId":o.api_id_wonderfull,"page":t,"pageSize":l}).then(function(e){if(r=!1,e[o.api_id_wonderfull]&&e[o.api_id_wonderfull].data&&e[o.api_id_wonderfull].data.length){var a=e[o.api_id_wonderfull];return o._renderMorePage(a,t),a}return void codeTrack("error:wonderfull.morepage","wonderfull.morepage.fetchdata")}).then(function(r){r&&r.hasMore?o._loadMorePage(e,++t,a):n(".tm-end").addClass("show")}))},d)},"_renderMorePage":function(e,t){this.cachedData=this.cachedData.concat(e.data),e.data=this.cachedData.splice(0,l),e.data.length%5!=0&&(e.data.length=5*Math.floor(e.data.length/5)),this._doRender(e,t)},"_doRender":function(e,t){var a=n(".module-content",this.mEle),o=2*(t-1)+1,l=s({"goldCode":"/tmallfp.5710","spm":"2016101"+t,"item":e,"trimPrefix":r.trimPrefix,"trimPic":r.trimPic,"startIndex":o}),d=n(l);a.append(d),n(".j_exposureExtra"+o,a).each(function(e,t){window.g_fpDataLazyload&&window.g_fpDataLazyload.addCallback(t,function(){i.exposure(t)})})},"_morePageError":function(){}}});define("zebra-pages/fp5/pc/js/js-xtpl/wonderful-item-render",["./wonderful-item","zebra-pages/fp5/pc/js/mods/x-runtime"],function(e,t,a){var n=e("./wonderful-item"),r=e("zebra-pages/fp5/pc/js/mods/x-runtime"),i=new r(n);a.exports=function(){return i.render.apply(i,arguments)}});define("zebra-pages/fp5/pc/js/js-xtpl/wonderful-item",["./v2_shop_item"],function(e,t,a){(a.exports=function(t){function a(e,t,a){var n=e.data,r=e.affix;t.data+='\n    <span class="mui-price-decimal">.',A.line=9;var i=(z=r.priceArr)!==a?r.priceArr[1]:(z=n.priceArr)!==a?z[1]:e.resolveLooseUp(["priceArr",1]);return t=t.writeEscaped(i),t.data+="</span>\n    ",t}function n(e,t,n){var r=e.data,i=e.affix;t.data+='\n<span class="mui-price ',A.line=5;var o=(z=i.config)!==n?i.config.size:(z=r.config)!==n?z.size:e.resolveLooseUp(["config","size"]);t=t.writeEscaped(o),t.data+=" ";var s=(z=i.config)!==n?i.config.color:(z=r.config)!==n?z.color:e.resolveLooseUp(["config","color"]);t=t.writeEscaped(s),t.data+='">\n    <i class="mui-price-rmb">&yen;</i>\n    <span class="mui-price-integer">',A.line=7;var l=(z=i.priceArr)!==n?i.priceArr[0]:(z=r.priceArr)!==n?z[0]:e.resolveLooseUp(["priceArr",0]);t=t.writeEscaped(l),t.data+="</span>\n    ",A.line=8,A.line=8;var d=(z=i.priceArr)!==n?i.priceArr[1]:(z=r.priceArr)!==n?z[1]:e.resolveLooseUp(["priceArr",1]);return t=M.call(C,e,{"params":[d],"fn":a},t),t.data+="\n</span>\n",t}function r(e,t,a){var r=e.data,i=e.affix;t.data+="\n",A.line=2;var o=(z=i.price)!==a?z:(z=r.price)!==a?z:e.resolveLooseUp(["price"]),s=o;s=o+"";var l;l=X.call(C,e,{"hash":{"priceStr":s}},t),t=t.writeEscaped(l),t.data+="\n",A.line=3;var d;d=N(C,e,{"params":["."]},t,["priceStr","split"]);var c;c=X.call(C,e,{"hash":{"priceArr":d}},t),t=t.writeEscaped(c),t.data+="\n",A.line=4,A.line=4;var p=(z=i.priceArr)!==a?i.priceArr[0]:(z=r.priceArr)!==a?z[0]:e.resolveLooseUp(["priceArr",0]),u=p;return u="undefined"!==p,t=M.call(C,e,{"params":[u],"fn":n},t),t.data+="\n",t}function i(e,t,a){var n=e.data,r=e.affix;t.data+=" j_exposureExtra";var i=(z=r.startIndex)!==a?z:(z=n.startIndex)!==a?z:e.resolveLooseUp(["startIndex"]);return t=t.writeEscaped(i),t.data+=" ",t}function o(e,t,a){var n=e.data,r=e.affix;t.data+="";var i=(z=r.goldCode)!==a?z:(z=n.goldCode)!==a?z:e.resolveLooseUp(["goldCode"]);t=t.writeEscaped(i),t.data+=".";var o=(z=r.startIndex)!==a?z:(z=n.startIndex)!==a?z:e.resolveLooseUp(["startIndex"]),s=o,l=(z=r.xindex)!==a?z:(z=n.xindex)!==a?z:e.resolveLooseUp(["xindex"]),d=l;return d=l/10,s=o+d,t=t.writeEscaped(s),t.data+="",t}function s(e,t,a){var n=e.data,r=e.affix;t.data+='\n<ul class="wonderful-line ',A.line=19;var s=(z=r.xindex)!==a?z:(z=n.xindex)!==a?z:e.resolveLooseUp(["xindex"]),l=s;l=s%10;var d=l;d=0===l,t=M.call(C,e,{"params":[d],"fn":i},t),t.data+='" data-code="';var c=(z=r.xindex)!==a?z:(z=n.xindex)!==a?z:e.resolveLooseUp(["xindex"]),p=c;p=c%10;var u=p;return u=0===p,t=M.call(C,e,{"params":[u],"fn":o},t),t.data+='">\n    ',t}function l(e,t,a){e.data,e.affix;return t.data+=" last",t}function d(e,t,a){e.data,e.affix;return t.data+=" last-1366 ",t}function c(e,t,a){e.data,e.affix;return t.data+=" last-1920",t}function p(e,t,a){var n=e.data,r=e.affix;t.data+='<em class="rec-reason">';var i=(z=r.recReason)!==a?z:(z=n.recReason)!==a?z:e.resolveLooseUp(["recReason"]);return t=t.writeEscaped(i),t.data+="</em>",t}function u(e,t,a){var n=e.data;e.affix;t.data+='\n                              <img src="',A.line=37;var r,i=n;return r=N(C,e,{"escape":1,"params":[i]},t,["root","trimPrefix"]),t=t.writeEscaped(r),t.data+='" height="18px"/>\n                            ',t}function f(e,t,a){var n=e.data,r=e.affix;t.data+='\n                        <span class="item-tag">\n                            ',A.line=36,A.line=36;var i=(z=r.tags)!==a?z:(z=n.tags)!==a?z:e.resolveLooseUp(["tags"]);return t=R.call(C,e,{"params":[i],"fn":u},t),t.data+="\n                        </span>\n                        ",t}function m(e,t,a){var n=e.data,r=e.affix;return A.line=40,(z=r.subTitle)!==a?z:(z=n.subTitle)!==a?z:e.resolveLooseUp(["subTitle"])}function g(e,t,a){var n=e.data,r=e.affix;t.data+='\n                        <span class="item-addition">',A.line=41;var i=(z=r.subTitle)!==a?z:(z=n.subTitle)!==a?z:e.resolveLooseUp(["subTitle"]);return t=t.writeEscaped(i),t.data+="</span>\n                        ",t}function v(e,t,a){var n=e.data,r=e.affix;t.data+='\n    <li class="wonderful-item ',A.line=22;var i=(z=r.xindex)!==a?z:(z=n.xindex)!==a?z:e.resolveLooseUp(["xindex"]),o=i;o=i%5;var s=o;s=4===o;var u=s;if(!u){var v=(z=r.xindex)!==a?z:(z=n.xindex)!==a?z:e.resolveLooseUp(["xindex"]),h=v,b=(z=r.item)!==a?r.item.data.length:(z=n.item)!==a?null!=(k=z.data)?k.length:k:e.resolveLooseUp(["item","data","length"]),x=b;x=b-1,h=v===x,u=h}t=M.call(C,e,{"params":[u],"fn":l},t),t.data+='">\n        <a class="card-item ',A.line=23;var y=(z=r.xindex)!==a?z:(z=n.xindex)!==a?z:e.resolveLooseUp(["xindex"]),w=y;w=y%5;var _=w;_=3===w;var j=_;if(!j){var L=(z=r.xindex)!==a?z:(z=n.xindex)!==a?z:e.resolveLooseUp(["xindex"]),U=L,E=(z=r.item)!==a?r.item.data.length:(z=n.item)!==a?null!=(k=z.data)?k.length:k:e.resolveLooseUp(["item","data","length"]),T=E;T=E-1,U=L===T,j=U}t=M.call(C,e,{"params":[j],"fn":d},t),t.data+=" ";var S=(z=r.xindex)!==a?z:(z=n.xindex)!==a?z:e.resolveLooseUp(["xindex"]),I=S;I=S%5;var D=I;D=4===I;var B=D;if(!B){var P=(z=r.xindex)!==a?z:(z=n.xindex)!==a?z:e.resolveLooseUp(["xindex"]),q=P,R=(z=r.item)!==a?r.item.data.length:(z=n.item)!==a?null!=(k=z.data)?k.length:k:e.resolveLooseUp(["item","data","length"]),X=R;X=R-1,q=P===X,B=q}t=M.call(C,e,{"params":[B],"fn":c},t),t.data+='" href="';var O=(z=r.action)!==a?z:(z=n.action)!==a?z:e.resolveLooseUp(["action"]);t=t.writeEscaped(O),t.data+=' ">\n            <span class="item-pic">\n            <img src="',A.line=25;var H,W=(z=r.imgUrl)!==a?z:(z=n.imgUrl)!==a?z:e.resolveLooseUp(["imgUrl"]);H=N(C,e,{"escape":1,"params":[W]},t,["root","trimPic"]),t=t.writeEscaped(H),t.data+='_400x400q60.jpg"\n                 width="100%"/>\n                </span>\n                <span class="item-info">\n                    <span class="item-desc">\n                        ',A.line=30;var V=(z=r.recReason)!==a?z:(z=n.recReason)!==a?z:e.resolveLooseUp(["recReason"]);t=M.call(C,e,{"params":[V],"fn":p},t),t.data+='<em class="item-name" title="';var J=(z=r.title)!==a?z:(z=n.title)!==a?z:e.resolveLooseUp(["title"]);t=t.writeEscaped(J),t.data+='">';var G=(z=r.title)!==a?z:(z=n.title)!==a?z:e.resolveLooseUp(["title"]);t=t.writeEscaped(G),t.data+='</em>\n                    </span>\n                    <span class="item-detail">\n                        <span class="item-price">',A.line=33;var K,Q=(z=r.price)!==a?z:(z=n.price)!==a?z:e.resolveLooseUp(["price"]);K=F.call(C,e,{"params":["mui-price",Q]},t),t=t.writeEscaped(K),t.data+="</span>\n                        ",A.line=34,A.line=34;var Y=(z=r.tags)!==a?z:(z=n.tags)!==a?z:e.resolveLooseUp(["tags"]);return t=M.call(C,e,{"params":[Y],"fn":f,"elseIfs":[{"test":m,"fn":g}]},t),t.data+="\n                    </span>\n                </span>\n        </a>\n    </li>\n    ",t}function h(e,t,a){e.data,e.affix;return t.data+=" hidden-1366 ",t}function b(e,t,a){e.data,e.affix;return t.data+=" hidden-990 ",t}function x(e,t,a){e.data,e.affix;return t.data+=" last-1366 ",t}function y(e,t,a){e.data,e.affix;return t.data+=" last-1920 ",t}function w(e,t,a){var n=e.data,r=e.affix;t.data+='\n    <li class="wonderful-item ',A.line=50;var i=(z=r.xindex)!==a?z:(z=n.xindex)!==a?z:e.resolveLooseUp(["xindex"]),o=i;o=i%5;var s=o;s=4===o;var l=s;if(!l){var d=(z=r.xindex)!==a?z:(z=n.xindex)!==a?z:e.resolveLooseUp(["xindex"]),c=d,p=(z=r.item)!==a?r.item.data.length:(z=n.item)!==a?null!=(k=z.data)?k.length:k:e.resolveLooseUp(["item","data","length"]),u=p;u=p-1,c=d===u,l=c}t=M.call(C,e,{"params":[l],"fn":h},t),t.data+=" ";var f=(z=r.xindex)!==a?z:(z=n.xindex)!==a?z:e.resolveLooseUp(["xindex"]),m=f;m=f%5;var g=m;g=m>2;var v=g;if(!v){var w=(z=r.xindex)!==a?z:(z=n.xindex)!==a?z:e.resolveLooseUp(["xindex"]),_=w,j=(z=r.item)!==a?r.item.data.length:(z=n.item)!==a?null!=(k=z.data)?k.length:k:e.resolveLooseUp(["item","data","length"]),L=j;L=j-1,_=w===L,v=_}t=M.call(C,e,{"params":[v],"fn":b},t),t.data+='">\n        <a class="card-item subject-item ',A.line=51;var U=(z=r.xindex)!==a?z:(z=n.xindex)!==a?z:e.resolveLooseUp(["xindex"]),E=U;E=U%5;var T=E;T=3===E;var S=T;if(!S){var I=(z=r.xindex)!==a?z:(z=n.xindex)!==a?z:e.resolveLooseUp(["xindex"]),D=I,B=(z=r.item)!==a?r.item.data.length:(z=n.item)!==a?null!=(k=z.data)?k.length:k:e.resolveLooseUp(["item","data","length"]),P=B;P=B-1,D=I===P,S=D}t=M.call(C,e,{"params":[S],"fn":x},t),t.data+=" ";var q=(z=r.xindex)!==a?z:(z=n.xindex)!==a?z:e.resolveLooseUp(["xindex"]),N=q;N=q%5;var R=N;R=4===N;var X=R;if(!X){var F=(z=r.xindex)!==a?z:(z=n.xindex)!==a?z:e.resolveLooseUp(["xindex"]),O=F,H=(z=r.item)!==a?r.item.data.length:(z=n.item)!==a?null!=(k=z.data)?k.length:k:e.resolveLooseUp(["item","data","length"]),W=H;W=H-1,O=F===W,X=O}t=M.call(C,e,{"params":[X],"fn":y},t),t.data+='" href="';var V=(z=r.action)!==a?z:(z=n.action)!==a?z:e.resolveLooseUp(["action"]);t=t.writeEscaped(V),t.data+='">\n            <img src="',A.line=52;var J=(z=r.imgUrl)!==a?z:(z=n.imgUrl)!==a?z:e.resolveLooseUp(["imgUrl"]);return t=t.writeEscaped(J),t.data+='_q30.jpg"\n                 width="100%"/>\n        </a>\n    </li>\n    ',t}function _(e,t,a){var n=e.data,r=e.affix;A.line=47;var i=(z=r.isShopData)!==a?z:(z=n.isShopData)!==a?z:e.resolveLooseUp(["isShopData"]);return!0===i}function j(t,a,n){t.data,t.affix;a.data+="\n        ",A.line=48;var r;return a=T.includeModule(t,{"params":[e("./v2_shop_item")]},a,C),a=a.writeEscaped(r),a.data+="\n    ",a}function L(e,t,a){e.data,e.affix;return t.data+="\n</ul>\n",t}function U(e,t,a){var n=e.data,r=e.affix;t.data+="\n",A.line=18,A.line=18;var i=(z=r.xindex)!==a?z:(z=n.xindex)!==a?z:e.resolveLooseUp(["xindex"]),o=i;o=i%5;var l=o;l=0===o,t=M.call(C,e,{"params":[l],"fn":s},t),t.data+="\n    ",A.line=21,A.line=21;var d=(z=r.type)!==a?z:(z=n.type)!==a?z:e.resolveLooseUp(["type"]),c=d;c="27"===d,t=M.call(C,e,{"params":[c],"fn":v,"inverse":w,"elseIfs":[{"test":_,"fn":j}]},t),t.data+="\n    ",A.line=57;var p=(z=r.xindex)!==a?z:(z=n.xindex)!==a?z:e.resolveLooseUp(["xindex"]),u=p;u=p%5;var f=u;f=4===u;var m=f;if(!m){var g=(z=r.xindex)!==a?z:(z=n.xindex)!==a?z:e.resolveLooseUp(["xindex"]),h=g,b=(z=r.item)!==a?r.item.data.length:(z=n.item)!==a?null!=(k=z.data)?k.length:k:e.resolveLooseUp(["item","data","length"]),x=b;x=b-1,h=g===x,m=h}return t=M.call(C,e,{"params":[m],"fn":L},t),t.data+="\n",t}function E(e,t,a){e.data,e.affix;return t.data+='\n<div class="j_exposureEnd" data-code="/tmallfp.5012.1"></div>\n',t}var z,k,C=this,T=C.root,S=C.buffer,I=C.scope,A=(C.runtime,C.name,C.pos),D=I.data,B=I.affix,P=T.nativeCommands,q=T.utils,N=q.callFn,R=(q.callCommand,P.range,P.foreach,P.forin,P.each),M=(P["with"],P["if"]),X=P.set,F=(P.include,P.parse,P.extend,P.block,P.macro);P["debugger"];S.data+="",A.line=1,S=F.call(C,I,{"params":["mui-price","price"],"fn":r},S),S.data+="\n\n",A.line=15;var O,H=(z=B.item)!==t?B.item.startIndex:(z=D.item)!==t?z.startIndex:I.resolveLooseUp(["item","startIndex"]);O=X.call(C,I,{"hash":{"startIndex":H}},S),S=S.writeEscaped(O),S.data+='\n<div data-spm="',A.line=16;var W=(z=B.spm)!==t?z:(z=D.spm)!==t?z:I.resolveLooseUp(["spm"]);S=S.writeEscaped(W),S.data+='">\n',A.line=17,A.line=17;var V=(z=B.item)!==t?B.item.data:(z=D.item)!==t?z.data:I.resolveLooseUp(["item","data"]);S=R.call(C,I,{"params":[V],"fn":U},S),S.data+="\n</div>\n\n",A.line=63;var J=(z=B.item)!==t?B.item.hasMore:(z=D.item)!==t?z.hasMore:I.resolveLooseUp(["item","hasMore"]),G=J;return G=!1===J,S=M.call(C,I,{"params":[G],"fn":E},S)}).TPL_NAME=a.id||a.name});define("zebra-pages/fp5/pc/js/js-xtpl/v2_shop_item",function(e,t,a){(a.exports=function(e){var t,a,n=this,r=n.root,o=n.buffer,i=n.scope,s=(n.runtime,n.name,n.pos),l=i.data,d=i.affix,c=r.nativeCommands,p=r.utils;p.callFn,p.callCommand,c.range,c.foreach,c.forin,c.each,c["with"],c["if"],c.set,c.include,c.parse,c.extend,c.block,c.macro,c["debugger"];o.data+='<li class="shop-in-wonder">\n    ',o.data+='\n    <a class="img-ctn" href="';var u=(t=d.shopItems)!==e?d.shopItems[0].action:(t=l.shopItems)!==e?null!=(a=t[0])?a.action:a:i.resolveLooseUp(["shopItems",0,"action"]);o=o.writeEscaped(u),o.data+='">\n        <img class="shop-item-pic" src="',s.line=4;var f=(t=d.shopItems)!==e?d.shopItems[0].imgUrl:(t=l.shopItems)!==e?null!=(a=t[0])?a.imgUrl:a:i.resolveLooseUp(["shopItems",0,"imgUrl"]);o=o.writeEscaped(f),o.data+='"/>\n        <div class="black-mask"></div>\n\n    </a>\n    ',o.data+='\n    <a class="meow-head" href="',s.line=9;var m=(t=d.shopAction)!==e?t:(t=l.shopAction)!==e?t:i.resolveLooseUp(["shopAction"]);o=o.writeEscaped(m),o.data+='">\n        ',o.data+="\n        ",o.data+='\n        <div class="shop-logo-wrapper">\n            <img class="shop-logo" src="',s.line=13;var g=(t=d.shopLogo)!==e?t:(t=l.shopLogo)!==e?t:i.resolveLooseUp(["shopLogo"]);o=o.writeEscaped(g),o.data+='">\n        </div>\n    </a>\n    <a class="shop-name" href="',s.line=16;var h=(t=d.shopAction)!==e?t:(t=l.shopAction)!==e?t:i.resolveLooseUp(["shopAction"]);o=o.writeEscaped(h),o.data+='">';var v=(t=d.shopName)!==e?t:(t=l.shopName)!==e?t:i.resolveLooseUp(["shopName"]);o=o.writeEscaped(v),o.data+='</a>\n    <p class="shop-fans">',s.line=17;var b=(t=d.shopFans)!==e?t:(t=l.shopFans)!==e?t:i.resolveLooseUp(["shopFans"]);return o=o.writeEscaped(b),o.data+="</p>\n</li>\n",o}).TPL_NAME=a.id||a.name});