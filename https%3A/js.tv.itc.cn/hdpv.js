/* sohutv 2018-04-23 16:38:06 */
window.sohuHD||(window.sohuHD={}),sohuHD.cookie||(sohuHD.cookie=function(e,t,i){if(void 0===t){var n=new RegExp("(?:^|; )"+e+"=([^;]*)").exec(document.cookie);return n?n[1]||"":""}i=i||{},null===t&&(t="",i.expires=-1);var o="";if(i.expires&&("number"==typeof i.expires||i.expires.toUTCString)){var r;"number"==typeof i.expires?(r=new Date,r.setTime(r.getTime()+24*i.expires*60*60*1e3)):r=i.expires,o="; expires="+r.toUTCString()}var a=i.path?"; path="+i.path:"",c=i.domain?"; domain="+i.domain:"",s=i.secure?"; secure":"";document.cookie=[e,"=",t,o,a,c,s].join("")}),sohuHD.getJSONP||(sohuHD.getScript=function(e,t,i,n,o){var r=document.getElementsByTagName("head")[0]||document.documentElement,a=document.createElement("script");a.src=e,a.charset=i||sohuHD.docCharset,o=o||[];var c=!1;a.onload=a.onreadystatechange=function(){c||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(c=!0,t&&t.apply(this,o),a.onload=a.onreadystatechange=null,n&&(a.onerror=n),r&&a.parentNode&&r.removeChild(a))},r.insertBefore(a,r.firstChild)},sohuHD.getJSONP=function(e,t,i,n){var o="jsonp"+(new Date).getTime();e.indexOf("callback=?")>-1&&(e=e.replace("callback=?","callback="+o),window[o]=function(e){t(e);try{delete window[o]}catch(i){}},sohuHD.getScript(e+"&_="+(new Date).getTime(),null,i,n))}),function(e,t){function i(e){var e=e||18,t=1e3+Math.pow(10,e-13),i=Math.random();i=i<.1?i+.1:i;var n=Math.floor(1e3+i*t);return(new Date).getTime().toString()+n.toString()}if("undefined"==typeof e._hdpv){var n={},o=1,r={pingback:function(e){var t=new Image,i="hdpv_"+o++;n[i]=t,t.onload=t.onerror=t.onabort=function(){n[i]=null},t.src=e},sendClickLog:function(e,t){e=e||"";var i=location.href,n=t&&t.getAttribute?t.getAttribute("href"):"",o=encodeURIComponent;this.pingback("//click.hd.sohu.com.cn/s.gif?type="+e+"&ref="+o(i)+"&des="+o(n))},utf8to16:function(e){var t,i,n,o,r,a,c,s,u;for(t=[],o=e.length,i=n=0;i<o;){switch((r=e.charCodeAt(i++))>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:t[n++]=e.charAt(i-1);break;case 12:case 13:a=e.charCodeAt(i++),t[n++]=String.fromCharCode((31&r)<<6|63&a);break;case 14:a=e.charCodeAt(i++),c=e.charCodeAt(i++),t[n++]=String.fromCharCode((15&r)<<12|(63&a)<<6|63&c);break;case 15:switch(15&r){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:a=e.charCodeAt(i++),c=e.charCodeAt(i++),s=e.charCodeAt(i++),u=(7&r)<<18|(63&a)<<12|(63&c)<<6|(63&s)-65536,t[n]=0<=u&&u<=1048575?String.fromCharCode(u>>>10&1023|55296,1023&u|56320):"?";break;case 8:case 9:case 10:case 11:i+=4,t[n]="?";break;case 12:case 13:i+=5,t[n]="?"}}n++}return t.join("")},b64_decodex:function(e){var t,i=new Array,n="";for(t=0;t<e.length;t+=4)n+=r.b64_423(e.substr(t,4));for(t=0;t<n.length;t+=8)i+=r.b2i(n.substr(t,8));return i},b64_423:function(e){for(var t=new Array("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","-","_"),i=new String,n=0;n<e.length;n++){for(var o=0;o<64;o++)if(e.charAt(n)==t[o]){var r=o.toString(2);i+=("000000"+r).substr(r.length);break}if(64==o)return 2==n?i.substr(0,8):i.substr(0,16)}return i},b2i:function(e){for(var t=0,i=128,n=0;n<8;n++,i/=2)"1"==e.charAt(n)&&(t+=i);return String.fromCharCode(t)}};r.passport=function(){var e=function(){var e,i,n,o=["ppinf","ppinfo","passport"];for(e=0,i=o.length;e<i;e++)if((n=new RegExp("\\b"+o[e]+"\\b=(.*?)(?:$|;)").exec(t.cookie))&&n.length){n=n[1];break}return n},i=function(e){var t,i=r.utf8to16,n=r.b64_decodex;try{return e=unescape(e).split("|"),"1"!=e[0]&&"2"!=e[0]||(t=i(n(e[3]))),t}catch(o){}},n=function(e){e=e||"";var t,i,n,o={};try{for(e=e.split("|"),t=0,i=e.length;t<i;t++)n=e[t].split(":"),n.length>1&&(o[n[0]]=n[2])}catch(r){}return o},o=function(){return n(i(e()))};return{getAppid:function(){return o().appid||""},getPassport:function(){return o().userid||""},getUid:function(){return o().uid||""},getUUID:function(){return o().uuid||""},getQname:function(){return o().uniqname||""}}}();var a={ie:!-[1],swfurl:"//tv.sohu.com/upload/swf/playerGetUID131031.swf",timer:null,intervalID:null,container:null,pageLB:sohuHD.cookie("series_video"),guid:function(){return["TT",(+new Date+o++).toString(36),(1e18*Math.random()).toString(36)].join("").slice(0,16).toUpperCase()},getLandrefer:function(){var e=sohuHD.cookie("landingrefer");return e||(!function(){var e=t.referrer;return!!e&&(e=e.split("?")[0],e=e.split("#")[0],-1==e.indexOf("tv.sohu.com"))}()?e="":(sohuHD.cookie("landingrefer",encodeURIComponent(t.referrer),{path:"/",domain:"tv.sohu.com"}),e=t.referrer)),e},createSWF:function(){this.container||(this.container=t.createElement("div"),t.body.firstChild?t.body.insertBefore(this.container,t.body.firstChild):t.body.appendChild(this.container),this.container.setAttribute("style","display:block;clear:both;float:none;position:absolute;right:0;bottom:0;border:none;"));var e=this.guid();this.container.innerHTML='<object name="'+e+'" id="'+e+(this.ie?'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" ':"")+'" data="'+this.swfurl+'" type="application/x-shockwave-flash"  width="1" height="1" style="position:absolute;right:0;bottom:0;border:none;" ><param name="movie" value="'+this.swfurl+'" /><param name="wmode" value="transparent" /><param name="version" value="10" /><param name="allowScriptAccess" value="always" /><param name="flashvars" /></object>',this.swf=t.getElementById(e)},run:function(){if(clearTimeout(this.timer),this.itmer=null,"undefined"==typeof this.flashVersion){this.flashVersion="";try{var i=e.navigator.plugins["Shockwave Flash"]||e.ActiveXObject;this.flashVersion=i.description||function(){return new i("ShockwaveFlash.ShockwaveFlash").GetVariable("$version")}()}catch(o){}this.flashVersion=(this.flashVersion.match(/\d+/g)||[0])[0]}var n=this;this.executed=!1,this.flashVersion<9?u(null,e.undefined):t.body?(n.createSWF(),n.timer=setTimeout(function(){u(null,e.undefined,"timeout=1")},1e4)):null==this.intervalID&&(this.intervalID=setInterval(function(){t.body&&(clearInterval(n.intervalID),n.intervalID,n.createSWF(),n.timer=setTimeout(function(){u(null,e.undefined,"timeout=1")},1e4))},100))}},c=function(){var e=sohuHD.cookie("newpuid");return e?20!=e.length&&(e=i(20),sohuHD.cookie("newpuid",e,{path:"/",domain:"tv.sohu.com",expires:100})):(e=i(20),sohuHD.cookie("newpuid",e,{path:"/",domain:"tv.sohu.com",expires:100})),e}(),s=0,u=function(i,n,o){function u(i,n){n=n||"";var o="&isPlay="+y+(y?"&systype="+w:""),a="//pv.hd.sohu.com/mc.gif?type=impress&txid="+i+"&url="+location.href+"&refer="+t.referrer+"&sid="+sohuHD.cookie("SUV")+"&fuid="+sohuHD.cookie("fuid")+"&playlistid="+e.playlistId+"&vid="+e.vid+"&catecode="+(e.cateCode||e.cateId)+"&cid="+e.cid+"&other="+n+o+"&ver=v20141016&_="+1e13*Math.random();r.pingback(a)}if(0==s&&a.swf&&"function"!=typeof a.swf.getData){s+=1;var h=Array.prototype.slice.call(arguments),d=arguments.callee;return setTimeout(function(){d.apply(e,h)},50),!1}if(s=0,a.timer&&(clearTimeout(a.timer),a.timer=null),!a.executed){a.executed=!0;var l=function(){var e=0;return e=a.lb?a.lb:a.pageLB?a.pageLB:0,a.lb=null,delete a.lb,e}(),f="undefined"==typeof _tv_hdpv_options?{}:_tv_hdpv_options,p="undefined"!=typeof top&&top.location==self.location?"t":"f",m=t.cookie.indexOf("ppinf=")<0&&t.cookie.indexOf("ppinfo=")<0&&t.cookie.indexOf("passport=")<0?"f":"t",g=r.passport.getPassport(),v=a.swf,b=function(){var e="",t=sohuHD.cookie("SUV"),i="";try{i=v?v.getData("SUV"):""}catch(n){}if(i)sohuHD.cookie("SUV",i,{path:"/",domain:".sohu.com",expires:100}),e=i;else if(t){try{v&&v.setData("SUV",t)}catch(o){}e=t}return e}(),y=~~!!e.cid,w=function(){return y?"9001"==e.cid?1:0:-1}();i=function(){var i="",n=sohuHD.cookie("fuid")||sohuHD.cookie("newpuidtest2");if(n&&(i=n),y){var o=t.getElementById("player");if(o)if(o.j2sGetFlashUid){var r=o.j2sGetFlashUid();!n&&r&&(i=r),n==r?u("pv_fuid_same"):!n&&r?u("pv_fuid_cookieempty"):n!=r&&u("pv_fuid_diff")}else{var a=!!o.getElementsByTagName("video").length,c=-1!=["embed","object"].indexOf(o.tagName.toLowerCase()),s=!1;e.messagebus&&messagebus.subscribe("play.playerReady",function(){if(s=!0,!n){var e=o.j2sGetFlashUid();sohuHD.cookie("fuid",e,{path:"/",domain:"tv.sohu.com",expires:100})}},null,null,{cache:!0});var h=n?"pv_flash_apierror_c1":"pv_flash_apierror_c0";a?u(h,"isH5"):c?c&&!s?(u(h,"isFlashAndNoReady"),setTimeout(function(){u("pv_flash_isReady",s)},1e4)):u(h,[a,c,s].join("_")):u(h,"isNoFlash")}else u("pv_flash_disb")}else{var d="";try{d=v?v.getData("id"):""}catch(l){}if(n){try{v&&v.setData("id",n)}catch(f){}i=n}else d&&(i=d)}return i}();var k=e.vid||"",_=encodeURIComponent(t.referrer),x=encodeURIComponent(e.location.href);1==l&&a.lbInfo&&(k=a.lbInfo.vid,a.lbInfo.url&&(x=encodeURIComponent(a.lbInfo.url)),a.lbInfo.preUrl&&(_=encodeURIComponent(a.lbInfo.preUrl)),a.lbInfo=null,delete a.lbInfo);var D=function(){var t="";return e.cateCode?t=e.cateCode:e._videoInfo&&e._videoInfo.cateCode&&(t=e._videoInfo.cateCode),t}(),I=sohuHD.cookie("YYID"),C=sohuHD.cookie("showqd"),S="";try{"f"==p&&(S=e.top.location.href)}catch(U){}var H="",T=t.documentElement.clientWidth;try{H="url="+x+"&refer="+_+"&fuid="+i+"&newpuid="+c+"&yyid="+(I||"")+"&showqd="+(C||"")+"&vid="+k+"&nid="+("undefined"!=typeof nid&&""!==nid?nid:"")+"&pid="+("undefined"!=typeof pid&&""!==pid?pid:"")+"&cid="+(e.cid||"")+"&suv="+(null!==b?b:"")+(f.is404?"&is404=t":"")+(f.urlExt?"&"+f.urlExt:"")+"&istoploc="+p+"&topurl="+S+"&lb="+l+"&oth="+sohuHD.cookie("_LQD")+"&cd="+sohuHD.cookie("_LCODE")+"&lf="+encodeURIComponent(a.getLandrefer())+"&passport="+g+"&_="+(new Date).getTime()+"&islogin="+m+"&catename="+("undefined"!=typeof filmType&&""!==filmType?filmType:"")+"&catecode="+D+"&ugu="+(e.ugu||"")+"&ugcode="+(e.ugcode||"")+"&pagewidth="+T+("undefined"!=typeof cateId?"&cateid="+cateId:"")+"&playlistid="+(e.vrs_playlist_id||e._playListId||e.playlistId||e.PLAYLIST_ID||"")+("undefined"!=typeof _uid?"&buid="+_uid:"")+(n?"&"+n:"")+(o?"&"+o:"")+"&isPlay="+y+(y?"&systype="+w:"")}catch(j){}r.pingback("//pv.hd.sohu.com/pvpb.gif?"+H)}};sohuHD.cookie("series_video",null,{path:"/"});var h=t.referrer,d="//click.hd.sohu.com.cn/s.gif?";-1!=h.search("so.tv.sohu.com/mts?")&&(r.pingback(d+"type=search_kpi_0&ref="+escape(h)),setTimeout(function(){r.pingback(d+"type=search_kpi_1&ref="+escape(h))},1e4),setTimeout(function(){r.pingback(d+"type=search_kpi_2&ref="+escape(h))},6e4)),a.run(),e.messagebus&&messagebus.subscribe("play.nextVideoPlayed",function(e,t){a.lb=1,a.lbInfo=t,a.run()},null,null,{cache:!0}),r.pv=a,e.gotPlayerUID=u,e._hdpv=r}}(window,document),function(){({cookie:function(e,t,i){if(void 0===t){var n=new RegExp("(?:^|; )"+e+"=([^;]*)").exec(document.cookie);return n?n[1]||"":""}i=i||{},null===t&&(t="",i.expires=-1);var o="";if(i.expires&&("number"==typeof i.expires||i.expires.toUTCString)){var r;"number"==typeof i.expires?(r=new Date,r.setTime(r.getTime()+3600*i.expires*1e3)):r=i.expires,o="; expires="+r.toUTCString()}var a=i.path?"; path="+i.path:"",c=i.domain?"; domain="+i.domain:"",s=i.secure?"; secure":"";document.cookie=[e,"=",t,o,a,c,s].join("")},init:function(){this.check(),this.cookie("beans_freq")||this.connect()},connect:function(){var e=this.cookie("SUV"),t=this.cookie("TUV"),i=this.cookie("FUID"),n=document.domain,o=encodeURIComponent(e+"|"+t+"|"+i+"|"+n);this.cookie("beans_freq","1",{expires:.5,path:"/",domain:"sohu.com"}),sohuHD.getJSONP("//hui.sohu.com/mum/ipqueryjp?callback=?",function(e){for(var t=e.urls||[],i=0;i<t.length;i++){var n=t[i]+(-1===t[i].indexOf("?")?"?":"&")+"cookie="+o;window._hdpv.pingback(n)}})},check:function(){1===Math.ceil(100*Math.random())&&((new Image).src="//hui.sohu.com/mum/jsurl?_="+(new Date).getTime())}}).init()}(),function(){var e=sohuHD.cookie,t=function(e){var t=[];if("object"==typeof e)for(var i in e)t.push(i+"="+e[i]);return t.join("&")},i={query:function(e,t){var i=new RegExp("(^|&)"+e+"=([^&]*)(&|$)");t=t?t.substr(t.indexOf("?")+1):window.location.search.substr(1);var n=t.match(i);return null!=n?unescape(n[2]):null}},n={url:"//t.go.sohu.com/ask_cm.gif",init:function(){var n=this,o=e("SUV"),r=e("beans_dmp"),a=i.query("ref"),c={callback:"?"},s=e("beans_dmp_done"),u=new Date;tomorrow=new Date(u.getFullYear(),u.getMonth(),u.getDate()+1),s||(this.idstr=o,this.exp=r?JSON.parse(decodeURIComponent(r)):{},this.idstr&&(a&&(c.ref=a),sohuHD.getJSONP(n.url+"?"+t(c),function(t,i){t&&t.data&&t.data.length&&(n.resolve(t.data),e("beans_dmp_done","1",{expires:tomorrow,domain:"sohu.com",path:"/"}))})))},resolve:function(t){for(var i=Math.ceil((new Date).getTime()/1e3),n=this.exp,o=0,r=t.length;o<r;o++){var a=t[o].MID,c=t[o].MURL;this.report(c),this.exp[a]=i}e("beans_dmp",encodeURIComponent(JSON.stringify(n)),{domain:"sohu.com",path:"/",expires:30})},report:function(e){e=e.replace(/{{idstr}}/g,this.idstr);var t=new Image(1,1);t.onload=t.onerror=function(){t=null},t.src=e+"&_="+(new Date).getTime()}};sohuHD.CookieMapping=n,sohuHD.CookieMapping.init()}(),function(e){function t(t){function i(e,t){try{console[e](t)}catch(i){}}function n(e){return e&&e.length>10?e:c[e]||e}function o(e,i){return e&&t.isPlainObject(i)?(e=e.replace(/\{(\w+)(?:-(\w+))?\}/g,function(e,n,o){var r=i[n];return t.isFunction(r)&&(r=r(o)),encodeURIComponent(r||"")}))+i.urlExt:""}function r(i,r){i=n(i),(i=o(i,t.extend({},a,r)))&&i.length>0&&e._hdpv.pingback(i)}var a={cookie:function(e){return sohuHD.cookie(e)},uuid:function(){return sohuHD.cookie("fuid")},fuid:function(){return sohuHD.cookie("fuid")},yyid:function(){return sohuHD.cookie("YYID")},sid:function(){return sohuHD.cookie("SUV")},url:function(){return location.href},refer:function(){return document.referrer},random:function(){return 1e13*Math.random()},resolution:function(){return[e.screen.width,e.screen.height].join("*")},pixelsUser:function(){return[document.body.clientWidth,document.body.clientHeight].join("*")},pixelsReal:function(){var e,t,i=(document.body.className||"").match(/W[-_](\d+)/);return e=i&&i.length>0?i[1]:document.body.clientWidth,t=document.body.clientHeight,[e,t].join("*")},vid:function(){return e.vid},cid:function(){return e.cid},playlistid:function(){return e.playlistId},catecode:function(){return e.cateCode||e.cateId},urlExt:e._tv_pinger_urlExt?"&"+e._tv_pinger_urlExt:""},c={mc:"//pv.hd.sohu.com/mc.gif?type={type}&txid={txid}&url={url}&refer={refer}&sid={sid}&fuid={fuid}&playlistid={playlistid}&vid={vid}&catecode={catecode}&cid={cid}&other={other}&ver=v20141016&_={random}",normal:"//pv.hd.sohu.com/mc.gif?type={type}&txid={txid}&url={url}&refer={refer}&sid={sid}&fuid={fuid}&ver=v20141016&_={random}",hot:"//pv.hd.sohu.com/mvv.gif?type=hot&txid={txid}&url={url}&refer={refer}&x={x}&y={y}&pixels_screen={resolution}&pixels_user={pixelsUser}&pixels_real={pixelsReal}&button={button}&linkname={linkName}&plinkname={plinkName}"},s={$$:t,pinger:r,logger:i,ping:function(e){},watch:function(){},init:function(){var e=this;e.$$(function(){e.watch()}),e.init=function(){}}},u=0,h={};return{_ins:h,ping:r,createWatch:function(e){var i=t.extend({},s,e);return i.init(),i.name||(i.name="ins"+ ++u),h[i.name]=i,i}}}if(e.kao&&e.__tv_dict&&!/film.sohu.com/.test(location.href)){var i={name:"impress",config:{flag:"pb-impress"},_watchs:[],addWatchElem:function(e){e.length>0&&(this._watchs=this._watchs.concat(e))},checkWatchElem:function(e,t){var i=e.getBoundingClientRect(),n={width:i.width||i.right-i.left,height:i.height||i.bottom-i.top,left:i.left,right:i.right,top:i.top,bottom:i.bottom},o={width:n.width*(1-1/3),height:n.height*(1-1/3)},r=n.left+o.width>0&&n.left-o.width<t.width-n.width,a=n.top+o.height>0&&n.top-o.height<t.height-n.height;return r&&a},detect:function(){var e=this.$$;return e("["+this.config.flag+"]").not(function(){var t=e(this),i=t.data("pb-impress-count")||0;return i+=1,t.data("pb-impress-count",i),i>1}).toArray()},digest:function(e){var t=[],i=[];if(this._watchs.length<=0)return[];for(var n,o=0;n=this._watchs[o];o++)this.checkWatchElem(n,e)?t.push(n):i.push(n);return this._watchs=i,t},handler:function(e){var t=this,i=this.$$,n=this.digest(e);0!==n.length&&i.each(n,function(e,i){t.ping(i)})},ping:function(e){var t=this,i=this.$$,n=i(e),o=n.attr("pb-impress")||"mc",r={type:"impress",txid:function(){return n.data("pb-txid")},other:function(){var e=n.data("pb-other");return"object"==typeof e?JSON.stringify(e):e}};t.pinger(o,r)},watch:function(){var t,i,n,o=this,r=this.$$;n=function(){var e=o.detect();e.length>0&&(o.addWatchElem(e),o.logger("info","watch:detect "+e.length+" element")),o.handler({scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:i.width(),height:i.height()})},i=r(e).bind("scroll resize",function(){t&&e.clearTimeout(t),t=e.setTimeout(n,1e3)}),o.logger("info","watch:impress"),n()}},n={name:"click",ping:function(e,t){var i=this,n=this.$$,o=n(e),r=n(t),a=o.attr("pb-click")||o.attr("pb-click-a")||"mc",c={type:"click",txid:function(){return r.data("pb-txid")||o.data("pb-txid")},other:function(){var e=r.data("pb-other")||o.data("pb-other");return"object"==typeof e?JSON.stringify(e):e}};i.pinger(a,c)},watch:function(){var e=this,t=this.$$;t("body").delegate("[pb-click]","click",function(i){var n=t(i.target);e.ping(this,n)}).delegate("[pb-click-a]","click",function(i){var n=t(i.target);if(n.is("a"))e.ping(this,n);else{var o=n.closest("a");o.length&&e.ping(this,o)}}),this.logger("info","watch:click")}},o={name:"hover",ping:function(e){var t=this,i=this.$$,n=i(e),o=n.attr("pb-hover")||"mc",r={type:"hover",txid:function(){return n.data("pb-txid")},other:function(){var e=n.data("pb-other");return"object"==typeof e?JSON.stringify(e):e}};t.pinger(o,r)},watch:function(){var t=this,i=this.$$;i("body").delegate("[pb-hover]","hover",function(){var n=i(this),o=n.data("_tid");o?(e.clearTimeout(o),o=0,n.data("_tid",o)):(o=e.setTimeout(function(){t.ping(n)},1e3),n.data("_tid",o))}),this.logger("info","watch:hover")}},r={name:"pv",ping:function(e){var t={type:"pv",txid:e[1]};this.pinger("normal",t)},hasPvtxid:function(){var e=(document.location.href||"").match(/pvtxid=([^&]+)/i);return!(!e||!e[1])&&e},watch:function(){var e=this.hasPvtxid();e&&this.ping(e)}},a={name:"mbus",ping:function(e){var t=e.url||"mc",i={type:e.type||"impress",txid:e.txid,other:e.other||""};this.pinger(t,i)},watch:function(){var e=this;messagebus.subscribe("statV2.ping",function(t,i){e.ping(i)},null,null,{cache:!0})}};kao("jquery",function(){var c=sohuHD.statV2=t(e.jQuery);c.createWatch(i),c.createWatch(n),c.createWatch(o),c.createWatch(r),c.createWatch(a)})}}(window);