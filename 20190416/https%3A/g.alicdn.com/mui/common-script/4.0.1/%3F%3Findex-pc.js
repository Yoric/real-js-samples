define("mui/common-script/index-pc",function(e,o,t){function a(){var e=window,o=document,t=e.g_config||{},a="mobile"==t.devId||"m"==t.devId,i={"addClass":function(e,o){e.className=e.className+" "+o},"unparam":function(e,o,t){if("string"!=typeof e||!e)return{};o=o||"&",t=t||"=";for(var a,n,l,d={},r=function(e){return decodeURIComponent(e.replace(/\+/g," "))},c=e.split(o),s=0,m=c.length;s<m;++s){if(a=c[s].indexOf(t),a===-1)n=r(c[s]),l=void 0;else{n=r(c[s].substring(0,a)),l=c[s].substring(a+1);try{l=r(l)}catch(p){}i.endsWith(n,"[]")&&(n=n.substring(0,n.length-2))}n in d?d[n]&&d[n].push?d[n].push(l):d[n]=[d[n],l]:d[n]=l}return d}},n="CSS1Compat",l="compatMode",d=Math.max,r="document",c="body",s="documentElement",m="viewport",p="scroll",g="client";["Width","Height"].forEach(function(o){i["doc"+o]=function(){return d(e[s][p+o],e[c][p+o],i[m+o](e))},i[m+o]=function(){var t=e["inner"+o];if(a&&t)return t;var i=g+o,d=e[r],m=d[c],p=d[s],u=p[i];return d[l]===n&&u||m&&m[i]||u}});var u={"ieHandler":function(){var a=2003==t.appId,n=1==t.appId,l=navigator.userAgent,d=l.toLowerCase(),r=d.indexOf("trident/4")>=0,c=d.indexOf("trident/5")>=0,s=d.indexOf("trident/6")>=0,m=2==t.appId,p=e.location.hostname.indexOf("tmall.com")>=0||e.location.hostname.indexOf("tmall.net")>=0||e.location.hostname.indexOf("tmall.hk")>=0;if(p){var g,u="//pages.tmall.com/wow/portal/act/app-download",f="http://www.uc.cn/ucbrowser/download/",w="http://support.microsoft.com/zh-cn/help/17621/internet-explorer-downloads";if(!r||m||t.notNeedIe8Guide){if(c||s||r&&m){var b=o.createElement("div");b.id="J_BrowserUpdate",b.className="mui-global-browser-update",b.setAttribute("data-spm","a2226mw"),b.innerHTML='<span class="mui-global-update-inner">                    <a class="mui-global-tmall-app-icon" title="\u624b\u673a\u5929\u732b" href="'+u+'"></a>                    <span id="J_updateNotice">\u55b5~\u4e3a\u4e86\u4fdd\u969c\u8d2d\u7269\u5b89\u5168\uff0c\u4eab\u53d7\u66f4\u68d2\u7684\u8d2d\u7269\u4f53\u9a8c\uff0c\u5efa\u8bae\u60a8\u4f7f\u7528<a title="\u624b\u673a\u5929\u732b" href="'+u+'">\u624b\u673a\u5929\u732b</a>\u6d4f\u89c8\uff0c\u6216\u8005\u4f7f\u7528<a href="'+w+'" target="_blank" title="\u70b9\u51fb\u5347\u7ea7\u6d4f\u89c8\u5668">\u65b0\u7248\u672cIE\u6d4f\u89c8\u5668</a>\u6216<a class="mui-global-uc-link" href="'+f+'" title="UC\u6d4f\u89c8\u5668web\u7248">UC\u6d4f\u89c8\u5668</a>                    </span>                </span>';var h=o.getElementsByTagName("div")[0];h&&(o.body.insertBefore(b,h),window.goldlog&&window.goldlog.record&&window.goldlog.record("/tmallcommon.oldie.updatenotice","EXP","","H1506430541"))}}else{var v=encodeURIComponent("https://img.alicdn.com/tps/TB177tvMXXXXXbeXVXXXXXXXXXX-68-68.png"),C="//gcodex.alicdn.com/qrcode.do?size=200&biz_code=tmallpc&logo_url="+v+"&content=",X="//g.alicdn.com/s.gif",y="http://m.laiwang.com/wow/portal/act/app-download";if(a){var I=i.unparam(e.location.search.replace("?",""))||{};g=y+"?mmstat=global_list&type=list&key="+I.q,X=C+encodeURIComponent(g)}else if(n){var _="";e.g_config&&e.g_config.itemId&&(_=e.g_config.itemId),_&&(g=y+"?mmstat=global_detail&type=detail&key="+_,X=C+encodeURIComponent(g))}else g=y+"?mmstat=global_zebra&type=internal&key="+e.location.href,X=C+encodeURIComponent(g);var x=o.createElement("div");x.id="J_ieCover",x.className="mui-global-ie-cover";var E=o.createElement("div");E.id="J_ieCoverContent",E.className="mui-global-ie-cover-content",E.setAttribute("data-spm","a2226mw"),E.innerHTML='<iframe src="about: blank" class="mui-global-ie-iframe"></iframe>                <div class="mui-global-ie-cover-inner">                    <a class="mui-global-ie-ieLink" href="'+w+'" title="\u70b9\u51fb\u5347\u7ea7\u6d4f\u89c8\u5668"></a>                    <a class="mui-global-ie-ucLink" href="'+f+'" title="UC\u6d4f\u89c8\u5668web\u7248"></a>                    <img class="mui-global-ie-qrcode" src="'+X+'" width="96"/>                </div>',i.addClass(o.body,"mui-global-ie-100"),i.addClass(o.documentElement,"mui-global-ie-100"),x.style.height=i.viewportHeight()+"px",o.body.appendChild(x),o.body.appendChild(E),window.goldlog&&window.goldlog.record&&window.goldlog.record("/tmallcommon.oldie.covershow","EXP","","H1484266076")}}}};for(var f in u)u[f]()}t.exports=a});