/* sohutv 2019-04-01 14:49:28 */
window.sohuHD||(window.sohuHD={}),sohuHD.cookie||(sohuHD.cookie=function(e,t,i){if(void 0===t){var n=new RegExp("(?:^|; )"+e+"=([^;]*)").exec(document.cookie);return n&&n[1]||""}i=i||{},null===t&&(t="",i.expires=-1);var o,r="";i.expires&&("number"==typeof i.expires||i.expires.toUTCString)&&("number"==typeof i.expires?(o=new Date).setTime(o.getTime()+24*i.expires*60*60*1e3):o=i.expires,r="; expires="+o.toUTCString());var a=i.path?"; path="+i.path:"",c=i.domain?"; domain="+i.domain:"",s=i.secure?"; secure":"";document.cookie=[e,"=",t,r,a,c,s].join("")}),sohuHD.getJSONP||(sohuHD.getScript=function(e,t,i,n,o){var r=document.getElementsByTagName("head")[0]||document.documentElement,a=document.createElement("script");a.src=e,a.charset=i||sohuHD.docCharset,o=o||[];var c=!1;a.onload=a.onreadystatechange=function(){c||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(c=!0,t&&t.apply(this,o),a.onload=a.onreadystatechange=null,n&&(a.onerror=n),r&&a.parentNode&&r.removeChild(a))},r.insertBefore(a,r.firstChild)},sohuHD.getJSONP=function(e,i,t,n){var o="jsonp"+(new Date).getTime();-1<e.indexOf("callback=?")&&(e=e.replace("callback=?","callback="+o),window[o]=function(e){i(e);try{delete window[o]}catch(t){}},sohuHD.getScript(e+"&_="+(new Date).getTime(),null,t,n))}),function(H,T){if("undefined"==typeof H._hdpv){var e,n={},o=1,U={pingback:function(e){var t=new Image,i="hdpv_"+o++;(n[i]=t).onload=t.onerror=t.onabort=function(){n[i]=null},t.src=e},sendClickLog:function(e,t){e=e||"";var i=location.href,n=t&&t.getAttribute?t.getAttribute("href"):"",o=encodeURIComponent;this.pingback("//click.hd.sohu.com.cn/s.gif?type="+e+"&ref="+o(i)+"&des="+o(n))},utf8to16:function(e){var t,i,n,o,r,a,c,s;for(t=[],o=e.length,i=n=0;i<o;){switch((r=e.charCodeAt(i++))>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:t[n++]=e.charAt(i-1);break;case 12:case 13:a=e.charCodeAt(i++),t[n++]=String.fromCharCode((31&r)<<6|63&a);break;case 14:a=e.charCodeAt(i++),c=e.charCodeAt(i++),t[n++]=String.fromCharCode((15&r)<<12|(63&a)<<6|63&c);break;case 15:switch(15&r){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:s=(7&r)<<18|(63&(a=e.charCodeAt(i++)))<<12|(63&(c=e.charCodeAt(i++)))<<6|(63&e.charCodeAt(i++))-65536,t[n]=0<=s&&s<=1048575?String.fromCharCode(s>>>10&1023|55296,1023&s|56320):"?";break;case 8:case 9:case 10:case 11:i+=4,t[n]="?";break;case 12:case 13:i+=5,t[n]="?"}}n++}return t.join("")},b64_decodex:function(e){var t,i=new Array,n="";for(t=0;t<e.length;t+=4)n+=U.b64_423(e.substr(t,4));for(t=0;t<n.length;t+=8)i+=U.b2i(n.substr(t,8));return i},b64_423:function(e){for(var t=new Array("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","-","_"),i=new String,n=0;n<e.length;n++){for(var o=0;o<64;o++)if(e.charAt(n)==t[o]){var r=o.toString(2);i+=("000000"+r).substr(r.length);break}if(64==o)return 2==n?i.substr(0,8):i.substr(0,16)}return i},b2i:function(e){for(var t=0,i=128,n=0;n<8;n++,i/=2)"1"==e.charAt(n)&&(t+=i);return String.fromCharCode(t)}};U.passport=(e=function(){return function(e){e=e||"";var t,i,n,o={};try{for(e=e.split("|"),t=0,i=e.length;t<i;t++)1<(n=e[t].split(":")).length&&(o[n[0]]=n[2])}catch(r){}return o}(function(e){var t,i=U.utf8to16,n=U.b64_decodex;try{return"1"!=(e=unescape(e).split("|"))[0]&&"2"!=e[0]||(t=i(n(e[3]))),t}catch(o){}}(function(){var e,t,i,n=["ppinf","ppinfo","passport"];for(e=0,t=n.length;e<t;e++)if((i=new RegExp("\\b"+n[e]+"\\b=(.*?)(?:$|;)").exec(T.cookie))&&i.length){i=i[1];break}return i}()))},{getAppid:function(){return e().appid||""},getPassport:function(){return e().userid||""},getUid:function(){return e().uid||""},getUUID:function(){return e().uuid||""},getQname:function(){return e().uniqname||""}});var t,j={ie:!-[1],swfurl:"//tv.sohu.com/upload/swf/playerGetUID131031.swf",timer:null,intervalID:null,container:null,pageLB:sohuHD.cookie("series_video"),guid:function(){return["TT",(+new Date+o++).toString(36),(1e18*Math.random()).toString(36)].join("").slice(0,16).toUpperCase()},getLandrefer:function(){var e,t=sohuHD.cookie("landingrefer");return t||(t=(e=T.referrer)&&-1==(e=(e=e.split("?")[0]).split("#")[0]).indexOf("tv.sohu.com")?(sohuHD.cookie("landingrefer",encodeURIComponent(T.referrer),{path:"/",domain:"tv.sohu.com"}),T.referrer):""),t},createSWF:function(){this.container||(this.container=T.createElement("div"),T.body.firstChild?T.body.insertBefore(this.container,T.body.firstChild):T.body.appendChild(this.container),this.container.setAttribute("style","display:block;clear:both;float:none;position:absolute;right:0;bottom:0;border:none;"));var e=this.guid();this.container.innerHTML='<object name="'+e+'" id="'+e+(this.ie?'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" ':"")+'" data="'+this.swfurl+'" type="application/x-shockwave-flash"  width="1" height="1" style="position:absolute;right:0;bottom:0;border:none;" ><param name="movie" value="'+this.swfurl+'" /><param name="wmode" value="transparent" /><param name="version" value="10" /><param name="allowScriptAccess" value="always" /><param name="flashvars" /></object>',this.swf=T.getElementById(e)},run:function(){if(clearTimeout(this.timer),this.itmer=null,"undefined"==typeof this.flashVersion){this.flashVersion="";try{var e=H.navigator.plugins["Shockwave Flash"]||H.ActiveXObject;this.flashVersion=e.description||new e("ShockwaveFlash.ShockwaveFlash").GetVariable("$version")}catch(i){}this.flashVersion=(this.flashVersion.match(/\d+/g)||[0])[0]}var t=this;this.executed=!1,this.flashVersion<9?r(null,H.undefined):T.body?(t.createSWF(),t.timer=setTimeout(function(){r(null,H.undefined,"timeout=1")},1e4)):null==this.intervalID&&(this.intervalID=setInterval(function(){T.body&&(clearInterval(t.intervalID),t.intervalID,t.createSWF(),t.timer=setTimeout(function(){r(null,H.undefined,"timeout=1")},1e4))},100))}},E=((t=sohuHD.cookie("newpuid"))?20!=t.length&&(t=c(20),sohuHD.cookie("newpuid",t,{path:"/",domain:"tv.sohu.com",expires:100})):(t=c(20),sohuHD.cookie("newpuid",t,{path:"/",domain:"tv.sohu.com",expires:100})),t),A=0,r=function(e,t,i){if(0==A&&j.swf&&"function"!=typeof j.swf.getData){A+=1;var n=Array.prototype.slice.call(arguments),o=arguments.callee;return setTimeout(function(){o.apply(H,n)},50),!1}if(A=0,j.timer&&(clearTimeout(j.timer),j.timer=null),!j.executed){j.executed=!0;var r,a=(r=j.lb?j.lb:j.pageLB?j.pageLB:0,j.lb=null,delete j.lb,r),c="undefined"==typeof _tv_hdpv_options?{}:_tv_hdpv_options,s="undefined"!=typeof top&&top.location==self.location?"t":"f",u=T.cookie.indexOf("ppinf=")<0&&T.cookie.indexOf("ppinfo=")<0&&T.cookie.indexOf("passport=")<0?"f":"t",d=U.passport.getPassport(),h=j.swf,l=function(){var e="",t=sohuHD.cookie("SUV"),i="";try{i=h?h.getData("SUV"):""}catch(n){}if(i)sohuHD.cookie("SUV",i,{path:"/",domain:".sohu.com",expires:100}),e=i;else if(t){try{h&&h.setData("SUV",t)}catch(o){}e=t}return e}(),p=~~!!H.cid,f=p?"9001"==H.cid?1:0:-1;e=function(){var e="",t=sohuHD.cookie("fuid")||sohuHD.cookie("newpuidtest2");if(t&&(e=t),p){var i=T.getElementById("player");if(i)if(i.j2sGetFlashUid){var n=i.j2sGetFlashUid();!t&&n&&(e=n),t==n?I("pv_fuid_same"):!t&&n?I("pv_fuid_cookieempty"):t!=n&&I("pv_fuid_diff")}else{var o=!!i.getElementsByTagName("video").length,r=-1!=["embed","object"].indexOf(i.tagName.toLowerCase()),a=!1;H.messagebus&&messagebus.subscribe("play.playerReady",function(){a=!0},null,null,{cache:!0});var c=t?"pv_flash_apierror_c1":"pv_flash_apierror_c0";o?I(c,"isH5"):r?r&&!a?(I(c,"isFlashAndNoReady"),setTimeout(function(){I("pv_flash_isReady",a)},1e4)):I(c,[o,r,a].join("_")):I(c,"isNoFlash")}else I("pv_flash_disb")}else{var s="";try{s=h?h.getData("id"):""}catch(u){}if(t){try{h&&h.setData("id",t)}catch(d){}e=t}else s&&(e=s)}return e}();var m=H.vid||"",g=encodeURIComponent(T.referrer),v=encodeURIComponent(H.location.href);1==a&&j.lbInfo&&(m=j.lbInfo.vid,j.lbInfo.url&&(v=encodeURIComponent(j.lbInfo.url)),j.lbInfo.preUrl&&(g=encodeURIComponent(j.lbInfo.preUrl)),j.lbInfo=null,delete j.lbInfo);var b,y=(b="",H.cateCode?b=H.cateCode:H._videoInfo&&H._videoInfo.cateCode&&(b=H._videoInfo.cateCode),b),w=sohuHD.cookie("YYID"),k=sohuHD.cookie("showqd"),_="";try{"f"==s&&(_=H.top.location.href)}catch(C){}var x="",D=T.documentElement.clientWidth;try{x="url="+v+"&refer="+g+"&fuid="+e+"&newpuid="+E+"&yyid="+(w||"")+"&showqd="+(k||"")+"&vid="+m+"&nid="+("undefined"!=typeof nid&&""!==nid?nid:"")+"&pid="+("undefined"!=typeof pid&&""!==pid?pid:"")+"&cid="+(H.cid||"")+"&suv="+(null!==l?l:"")+(c.is404?"&is404=t":"")+(c.urlExt?"&"+c.urlExt:"")+"&istoploc="+s+"&topurl="+_+"&lb="+a+"&oth="+sohuHD.cookie("_LQD")+"&cd="+sohuHD.cookie("_LCODE")+"&lf="+encodeURIComponent(j.getLandrefer())+"&passport="+d+"&_="+(new Date).getTime()+"&islogin="+u+"&catename="+("undefined"!=typeof filmType&&""!==filmType?filmType:"")+"&catecode="+y+"&ugu="+(H.ugu||"")+"&ugcode="+(H.ugcode||"")+"&pagewidth="+D+("undefined"!=typeof cateId?"&cateid="+cateId:"")+"&playlistid="+(H.vrs_playlist_id||H._playListId||H.playlistId||H.PLAYLIST_ID||"")+("undefined"!=typeof _uid?"&buid="+_uid:"")+(t?"&"+t:"")+(i?"&"+i:"")+"&isPlay="+p+(p?"&systype="+f:"")}catch(S){}U.pingback("//pv.hd.sohu.com/pvpb.gif?"+x)}function I(e,t){t=t||"";var i="&isPlay="+p+(p?"&systype="+f:""),n="//pv.hd.sohu.com/mc.gif?type=impress&txid="+e+"&url="+location.href+"&refer="+T.referrer+"&sid="+sohuHD.cookie("SUV")+"&fuid="+sohuHD.cookie("fuid")+"&newpuid="+sohuHD.cookie("newpuid")+"&playlistid="+H.playlistId+"&vid="+H.vid+"&catecode="+(H.cateCode||H.cateId)+"&cid="+H.cid+"&other="+t+i+"&ver=v20141016&_="+1e13*Math.random();U.pingback(n)}};sohuHD.cookie("series_video",null,{path:"/"});var i=T.referrer,a="//click.hd.sohu.com.cn/s.gif?";-1!=i.search("so.tv.sohu.com/mts?")&&(U.pingback(a+"type=search_kpi_0&ref="+escape(i)),setTimeout(function(){U.pingback(a+"type=search_kpi_1&ref="+escape(i))},1e4),setTimeout(function(){U.pingback(a+"type=search_kpi_2&ref="+escape(i))},6e4)),j.run(),H.messagebus&&messagebus.subscribe("play.nextVideoPlayed",function(e,t){j.lb=1,j.lbInfo=t,j.run()},null,null,{cache:!0}),U.pv=j,H.gotPlayerUID=r,H._hdpv=U}function c(e){e=e||18;var t=1e3+Math.pow(10,e-13),i=Math.random();i=i<.1?i+.1:i;var n=Math.floor(1e3+i*t);return(new Date).getTime().toString()+n.toString()}}(window,document),{cookie:function(e,t,i){if(void 0===t){var n=new RegExp("(?:^|; )"+e+"=([^;]*)").exec(document.cookie);return n&&n[1]||""}i=i||{},null===t&&(t="",i.expires=-1);var o,r="";i.expires&&("number"==typeof i.expires||i.expires.toUTCString)&&("number"==typeof i.expires?(o=new Date).setTime(o.getTime()+3600*i.expires*1e3):o=i.expires,r="; expires="+o.toUTCString());var a=i.path?"; path="+i.path:"",c=i.domain?"; domain="+i.domain:"",s=i.secure?"; secure":"";document.cookie=[e,"=",t,r,a,c,s].join("")},init:function(){this.check(),this.cookie("beans_freq")||this.connect()},connect:function(){var e=this.cookie("SUV"),t=this.cookie("TUV"),i=this.cookie("FUID"),n=document.domain,o=encodeURIComponent(e+"|"+t+"|"+i+"|"+n);this.cookie("beans_freq","1",{expires:.5,path:"/",domain:"sohu.com"}),sohuHD.getJSONP("//hui.sohu.com/mum/ipqueryjp?callback=?",function(e){for(var t=e.urls||[],i=0;i<t.length;i++){var n=t[i]+(-1===t[i].indexOf("?")?"?":"&")+"cookie="+o;window._hdpv.pingback(n)}})},check:function(){1===Math.ceil(100*Math.random())&&((new Image).src="//hui.sohu.com/mum/jsurl?_="+(new Date).getTime())}}.init(),function(){var c=sohuHD.cookie,s=function(e,t){var i=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),n=(t=t?t.substr(t.indexOf("?")+1):window.location.search.substr(1)).match(i);return null!=n?unescape(n[2]):null},e={url:"//t.go.sohu.com/ask_cm.gif",init:function(){var i=this,e=c("SUV"),t=c("beans_dmp"),n=s("ref"),o={callback:"?"},r=c("beans_dmp_done"),a=new Date;tomorrow=new Date(a.getFullYear(),a.getMonth(),a.getDate()+1),r||(this.idstr=e,this.exp=t?JSON.parse(decodeURIComponent(t)):{},this.idstr&&(n&&(o.ref=n),sohuHD.getJSONP(i.url+"?"+function(e){var t=[];if("object"==typeof e)for(var i in e)t.push(i+"="+e[i]);return t.join("&")}(o),function(e,t){e&&e.data&&e.data.length&&(i.resolve(e.data),c("beans_dmp_done","1",{expires:tomorrow,domain:"sohu.com",path:"/"}))})))},resolve:function(e){for(var t=Math.ceil((new Date).getTime()/1e3),i=this.exp,n=0,o=e.length;n<o;n++){var r=e[n].MID,a=e[n].MURL;this.report(a),this.exp[r]=t}c("beans_dmp",encodeURIComponent(JSON.stringify(i)),{domain:"sohu.com",path:"/",expires:30})},report:function(e){e=e.replace(/{{idstr}}/g,this.idstr);var t=new Image(1,1);t.onload=t.onerror=function(){t=null},t.src=e+"&_="+(new Date).getTime()}};sohuHD.CookieMapping=e,sohuHD.CookieMapping.init()}(),function(u){if(u.kao&&u.__tv_dict&&!/film.sohu.com/.test(location.href)){var t={name:"impress",config:{flag:"pb-impress"},_watchs:[],addWatchElem:function(e){0<e.length&&(this._watchs=this._watchs.concat(e))},checkWatchElem:function(e,t){var i=e.getBoundingClientRect(),n=i.width||i.right-i.left,o=i.height||i.bottom-i.top,r=i.left,a=(i.right,i.top),c=(i.bottom,n*(1-1/3)),s=o*(1-1/3),u=0<r+c&&r-c<t.width-n,d=0<a+s&&a-s<t.height-o;return u&&d},detect:function(){var i=this.$$;return i("["+this.config.flag+"]").not(function(){var e=i(this),t=e.data("pb-impress-count")||0;return t+=1,e.data("pb-impress-count",t),1<t}).toArray()},digest:function(e){var t=[],i=[];if(this._watchs.length<=0)return[];for(var n,o=0;n=this._watchs[o];o++)this.checkWatchElem(n,e)?t.push(n):i.push(n);return this._watchs=i,t},handler:function(e){var i=this,t=this.$$,n=this.digest(e);0!==n.length&&t.each(n,function(e,t){i.ping(t)})},ping:function(e){var t=(0,this.$$)(e),i=t.attr("pb-impress")||"mc",n={type:"impress",txid:function(){return t.data("pb-txid")},other:function(){var e=t.data("pb-other");return"object"==typeof e?JSON.stringify(e):e}};this.pinger(i,n)},watch:function(){var e,t,i,n=this,o=this.$$;i=function(){var e=n.detect();0<e.length&&(n.addWatchElem(e),n.logger("info","watch:detect "+e.length+" element")),n.handler({scrollLeft:t.scrollLeft(),scrollTop:t.scrollTop(),width:t.width(),height:t.height()})},t=o(u).bind("scroll resize",function(){e&&u.clearTimeout(e),e=u.setTimeout(i,1e3)}),n.logger("info","watch:impress"),i()}},i={name:"click",ping:function(e,t){var i=this.$$,n=i(e),o=i(t),r=n.attr("pb-click")||n.attr("pb-click-a")||"mc",a={type:"click",txid:function(){return o.data("pb-txid")||n.data("pb-txid")},other:function(){var e=o.data("pb-other")||n.data("pb-other");return"object"==typeof e?JSON.stringify(e):e}};this.pinger(r,a)},watch:function(){var n=this,o=this.$$;o("body").delegate("[pb-click]","click",function(e){var t=o(e.target);n.ping(this,t)}).delegate("[pb-click-a]","click",function(e){var t=o(e.target);if(t.is("a"))n.ping(this,t);else{var i=t.closest("a");i.length&&n.ping(this,i)}}),this.logger("info","watch:click")}},n={name:"hover",ping:function(e){var t=(0,this.$$)(e),i=t.attr("pb-hover")||"mc",n={type:"hover",txid:function(){return t.data("pb-txid")},other:function(){var e=t.data("pb-other");return"object"==typeof e?JSON.stringify(e):e}};this.pinger(i,n)},watch:function(){var i=this,n=this.$$;n("body").delegate("[pb-hover]","hover",function(){var e=n(this),t=e.data("_tid");t=t?(u.clearTimeout(t),0):u.setTimeout(function(){i.ping(e)},1e3),e.data("_tid",t)}),this.logger("info","watch:hover")}},o={name:"pv",ping:function(e){var t={type:"pv",txid:e[1]};this.pinger("normal",t)},hasPvtxid:function(){var e=(document.location.href||"").match(/pvtxid=([^&]+)/i);return!(!e||!e[1])&&e},watch:function(){var e=this.hasPvtxid();e&&this.ping(e)}},r={name:"mbus",ping:function(e){var t=e.url||"mc",i={type:e.type||"impress",txid:e.txid,other:e.other||""};this.pinger(t,i)},watch:function(){var i=this;messagebus.subscribe("statV2.ping",function(e,t){i.ping(t)},null,null,{cache:!0})}};kao("jquery",function(){var e=sohuHD.statV2=a(u.jQuery);e.createWatch(t),e.createWatch(i),e.createWatch(n),e.createWatch(o),e.createWatch(r)})}function a(r){var o={cookie:function(e){return sohuHD.cookie(e)},uuid:function(){return sohuHD.cookie("fuid")},fuid:function(){return sohuHD.cookie("fuid")},yyid:function(){return sohuHD.cookie("YYID")},sid:function(){return sohuHD.cookie("SUV")},url:function(){return location.href},refer:function(){return document.referrer},random:function(){return 1e13*Math.random()},resolution:function(){return[u.screen.width,u.screen.height].join("*")},pixelsUser:function(){return[document.body.clientWidth,document.body.clientHeight].join("*")},pixelsReal:function(){var e=(document.body.className||"").match(/W[-_](\d+)/);return[e&&0<e.length?e[1]:document.body.clientWidth,document.body.clientHeight].join("*")},vid:function(){return u.vid},cid:function(){return u.cid},playlistid:function(){return u.playlistId},catecode:function(){return u.cateCode||u.cateId},urlExt:u._tv_pinger_urlExt?"&"+u._tv_pinger_urlExt:""},a={mc:"//pv.hd.sohu.com/mc.gif?type={type}&txid={txid}&url={url}&refer={refer}&sid={sid}&fuid={fuid}&playlistid={playlistid}&vid={vid}&catecode={catecode}&cid={cid}&newpuid={cookie-newpuid}&other={other}&ver=v20141016&_={random}",normal:"//pv.hd.sohu.com/mc.gif?type={type}&txid={txid}&url={url}&refer={refer}&sid={sid}&fuid={fuid}&newpuid={cookie-newpuid}&ver=v20141016&_={random}",hot:"//pv.hd.sohu.com/mvv.gif?type=hot&txid={txid}&url={url}&refer={refer}&x={x}&y={y}&pixels_screen={resolution}&pixels_user={pixelsUser}&pixels_real={pixelsReal}&button={button}&linkname={linkName}&plinkname={plinkName}"};function e(e,t){(e=function i(e,o){return e&&r.isPlainObject(o)?(e=e.replace(/\{(\w+)(?:-(\w+))?\}/g,function(e,t,i){var n=o[t];return r.isFunction(n)&&(n=n(i)),encodeURIComponent(n||"")}))+o.urlExt:""}(e=function n(e){return e&&10<e.length?e:a[e]||e}(e),r.extend({},o,t)))&&0<e.length&&u._hdpv.pingback(e)}var i={$$:r,pinger:e,logger:function s(e,t){try{console[e](t)}catch(i){}},ping:function(e){},watch:function(){},init:function(){var e=this;e.$$(function(){e.watch()}),e.init=function(){}}},n=0,c={};return{_ins:c,ping:e,createWatch:function(e){var t=r.extend({},i,e);return t.init(),t.name||(t.name="ins"+ ++n),c[t.name]=t}}}}(window);