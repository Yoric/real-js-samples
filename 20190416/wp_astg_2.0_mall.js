function WPTG_tracking_tag_execute(){if("undefined"!=typeof wp_page_type&&"undefined"!=typeof wp_pars&&"undefined"!=typeof wp_conf){var t=setTimeout(function(){WPTG.Track(document.location.protocol+"//astg.widerplanet.com/delivery/wpc.php",wp_pars,wp_page_type,wp_conf)},3e3);WPTG.loadScript({id:"wp_id_script_"+(new Date).getTime(),js:"//altg.widerplanet.com/delivery/wp.js",dom:document.getElementById("wp_tg_cts")},function(){WPTG.Track(document.location.protocol+"//astg.widerplanet.com/delivery/wpc.php",wp_pars,wp_page_type,wp_conf,window.____wp_uid),clearTimeout(t)})}}if("undefined"==typeof wp_pars)var wp_pars=[];if("undefined"==typeof wp_page_type)var wp_page_type="Home";var wptg_tagscript_history=wptg_tagscript_history||{history_peak:{},history_ty:{},ty_grade:{Home:1,Item:2,Cart:3,PurchaseComplete:4,Join:4},ty_isola:{Login:1}};if(WPTRACKER=function(){for(var t=[],e=document.getElementsByTagName("span"),r=[],n=0;n<e.length;n++){var o=e[n];"wp_detection"==o.getAttribute("name")&&r.push(o)}e=null;for(var i=0;i<r.length;i++){var a=r[i].getAttribute("tag"),p=r[i].innerHTML;switch(t[a]=void 0==t[a]?1:t[a]+1,a){case"i":0<=p.indexOf("{")&&0<=window.location.href.indexOf("product_no")&&(p=window.location.href);var c=p.match(/product_no=([a-zA-Z0-9-_]*)/);null!=c&&2==c.length?wp_pars[a+t[a]]=c[1]:wp_pars[a+t[a]]=p.replace(/([\t\n])*/g,"").replace(/\<[^>]*\>/g,"");break;case"p":wp_pars[a+t[a]]=p.replace(/([\t\n])*/g,"").replace(/\<[^>]*\>/g,"").replace(/,/g,"").replace(/^[^0-9]*/,"");break;default:wp_pars[a+t[a]]=p.replace(/([\t\n])*/g,"").replace(/\<[^>]*\>/g,"")}}},"undefined"==typeof WPTG)var WPTG=function(){function t(t){return"string"==typeof t?encodeURIComponent(t):""}function e(t,e){!function(r,n,o){var i,a=r;document.getElementById(o)||(i=document.createElement(n),i.id=o,i.onload=function(){"function"==typeof e&&e()},i.src=t.js,a.appendChild(i))}(t.dom,"script",t.id)}function r(t){for(var e=t+"=",r=document.cookie.split(";"),n=0;n<r.length;n++){for(var o=r[n];" "==o.charAt(0);)o=o.substring(1);if(0==o.indexOf(e))return o.substring(e.length,o.length)}return""}function n(n,o,i,a,p){if(document.createElement){var c=document.createElement("IFRAME");if(c){n+="?"+a,n+="&ver=2_0_mall&ty="+i;var s=!1;for(var _ in o)"undefined"!=typeof o[_]&&""!=o[_]&&o.hasOwnProperty(_)&&"length"!==_&&(n+="&"+_+"="+t(o[_]),s=!0);n+=document.charset?"&charset="+document.charset:parent.document.characterSet?"&charset="+parent.document.characterSet:"",n+="&tc="+(new Date).getTime(),document.referrer&&(n+="&ref="+t(document.referrer)),document.location.href&&(n+="&loc="+t(document.location.href));var g=n+"&md=bs",d=r("_wp_uid"),u=r("_ga");""!==u&&"GA"===u.substring(0,2)&&(u=u.substring(2,u.length).split("."),4===u.length&&/[0-9]/.test(u[0])&&u[1]&&/^[0-9]+$/.test(u[1])&&u[2]&&/^[0-9]+$/.test(u[2])&&u[3]&&/^[0-9]+$/.test(u[3])&&(u[2]=parseFloat(u[2]).toString(32),u[3]=parseFloat(u[3]).toString(32),u=u.reverse().join("-"),g+="&ga="+u)),d&&(g+="&wp_uid="+d),p&&(g+="&eid="+p);var f=document.getElementById("wp_tg_cts");g&&document.createElement&&null!=f&&e({id:"wp_tag_script_"+(new Date).getTime(),js:g,dom:f},function(){})}}}var o={Track:function(t){t()}};return{Track:function(t,e,r,i,a){var p=i.match(/ti=([0-9]+)/);if("undefined"!=typeof p[1]){var c=p[1],s=r,_=function(t,e){for(var r=t.length>>>0,n=0;n<r;n++)if(n in t&&t[n]===e)return n;return-1};if(!wptg_tagscript_history.ty_grade.hasOwnProperty(s)&&!wptg_tagscript_history.ty_isola.hasOwnProperty(s))return;if(wptg_tagscript_history.history_ty.hasOwnProperty(c)&&_(wptg_tagscript_history.history_ty[c],s)>0)return;if(wptg_tagscript_history.ty_grade.hasOwnProperty(s)){if(wptg_tagscript_history.history_peak.hasOwnProperty(c)&&wptg_tagscript_history.ty_grade[s]<=wptg_tagscript_history.history_peak[c])return;wptg_tagscript_history.history_peak[c]=wptg_tagscript_history.ty_grade[s]}wptg_tagscript_history.history_ty.hasOwnProperty(c)||(wptg_tagscript_history.history_ty[c]=[]),wptg_tagscript_history.history_ty[c].push(s)}o.Track(function(){n(t,e,r,i,a)})},loadScript:e}}();"undefined"!=typeof wp_function&&0!=wp_function||(WPTRACKER(),WPTG_tracking_tag_execute());