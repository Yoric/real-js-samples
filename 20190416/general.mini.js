function newWindow(e,t,n,i,o){win[t]=null,LeftPosition=screen.width?(screen.width-n)/2:100,TopPosition=screen.height?(screen.height-i)/2:100,settings="width="+n+",height="+i+",top="+TopPosition+",left="+LeftPosition+",scrollbars="+o+",location=no,directories=no,status=no,menubar=no,toolbar=no,resizable=no",win[t]=window.open(e,t,settings),win[t].focus&&win[t].focus()}function displayImg(e,t,n){var i=screen.width?(screen.width-t)/2:200,o=screen.height?(screen.height-n)/2:200;if(document.getElementById("img_disp")){var d=document.getElementById("img_disp");d.style.position="absolute",d.style.zindex=1e4,d.style.left=i,d.style.top=o,d.style.width=t,d.style.height=n,d.style.background="#EEEEEE",d.style.padding=0,d.style.border="2px #225588 solid",d.style.display="inline",d.innerHTML='<img src="'+e+'" width="'+t+'" height="'+n+'" border="0" onclick="javascript: this.parentNode.style.display = \'none\';" />'}}function showtime(){var e=document.getElementById("date_b"),t=new Date,n=t.getHours(),i=t.getMinutes(),o=t.getSeconds();i=(10>i?"0":"")+i,o=(10>o?"0":"")+o,e.innerHTML=n+":"+i+":"+o,setTimeout("showtime()",1e3)}function showHideDiv(e){"none"==e.style.display?(e.style.display="","div_regs"==e.id?(document.getElementById("div_months").style.display="none",document.getElementById("div_years").style.display="none"):"div_months"==e.id?(document.getElementById("div_regs")&&(document.getElementById("div_regs").style.display="none"),document.getElementById("div_years").style.display="none"):"div_years"==e.id&&(document.getElementById("div_months").style.display="none",document.getElementById("div_regs")&&(document.getElementById("div_regs").style.display="none"))):e.style.display="none"}function selStatNewsFilter(e){var t=new Array("green","yellow","red");document.getElementById("filter_stat").value=e;for(var n=0;n<t.length;n++)document.getElementById("filter_img_stat_"+t[n]).className=e==t[n]?"active":""}function explode(e,t){var n={0:""};return 2!=arguments.length||"undefined"==typeof arguments[0]||"undefined"==typeof arguments[1]?null:""===e||e===!1||null===e?!1:"function"==typeof e||"object"==typeof e||"function"==typeof t||"object"==typeof t?n:(e===!0&&(e="1"),t.toString().split(e.toString()))}function goPostUrl(e,t){var n,o=document.createElement("form"),d=new Array;for(o.action=e,o.method="POST",o.style.display="none",i=0;i<t.length;i++)d=explode(":",t[i]),n=document.createElement("input"),n.type="hidden",n.name=d[0],n.value=d[1],o.appendChild(n);document.body.appendChild(o),o.submit()}function number_format(e,t,n,i){var o,d,r,s,l;return isNaN(t=Math.abs(t))&&(t=2),void 0==n&&(n=","),void 0==i&&(i="."),o=parseInt(e=(+e||0).toFixed(t))+"",(d=o.length)>3?d%=3:d=0,l=d?o.substr(0,d)+i:"",r=o.substr(d).replace(/(\d{3})(?=\d)/g,"$1"+i),s=t?n+Math.abs(e-o).toFixed(t).replace(/-/,0).slice(2):"",l+r+s}function decode_utf8(e){for(var t="",n=0,i=c1=c2=0;n<e.length;)i=e.charCodeAt(n),128>i?(t+=String.fromCharCode(i),n++):i>191&&224>i?(c2=e.charCodeAt(n+1),t+=String.fromCharCode((31&i)<<6|63&c2),n+=2):(c2=e.charCodeAt(n+1),c3=e.charCodeAt(n+2),t+=String.fromCharCode((15&i)<<12|(63&c2)<<6|63&c3),n+=3);return t}function miniAction(url,func){var result=null;$.ajax({url:url,type:"POST",data:{},cache:!1,async:!1,error:function(e,t,n){alert("пїЅпїЅпїЅ пїЅпїЅпїЅпїЅпїЅпїЅпїЅ пїЅпїЅ пїЅпїЅпїЅпїЅпїЅпїЅ пїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅ пїЅпїЅпїЅпїЅпїЅпїЅ!")},success:function(data,textStatus){data&&(eval("data = (function(){ return "+data+"; })();"),"function"==typeof func?func(data):"string"==typeof func&&window[func](data))}})}function str_pad(e,t,n,i){var o,d="",r=function(e,t){for(var n="";n.length<t;)n+=e;return n=n.substr(0,t)};return"STR_PAD_LEFT"!=i&&"STR_PAD_RIGHT"!=i&&"STR_PAD_BOTH"!=i&&(i="STR_PAD_RIGHT"),(o=t-e.length)>0&&("STR_PAD_LEFT"==i?e=r(n,o)+e:"STR_PAD_RIGHT"==i?e+=r(n,o):"STR_PAD_BOTH"==i&&(d=r(n,Math.ceil(o/2)),e=d+e+d,e=e.substr(0,t))),e}function trim(e,t){t=t?t.replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g,"$1"):" \\s\\xA0";var n=new RegExp("^["+t+"]+|["+t+"]+$","g");return e.replace(n,"")}var win=[];