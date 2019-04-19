/*
* IEでlabel要素内のimg要素をクリッカブルに
*/
window.onload = function () {
   var lbs = document.getElementsByTagName('label');
   for(var i=0;i<lbs.length;i++){
   var cimgs = lbs[i].getElementsByTagName('img');
   for(var j=0;j<cimgs.length;j++){
   cimgs[j].formCtrlId = lbs[i].htmlFor;
   cimgs[j].onclick = function(){document.getElementById(this.formCtrlId).click()};
}
}

}



/**
* マウスオーバーでフキダシを表示
*/

function fukidashi(){
 enableTooltips();
}



function enableTooltips(id){
var links,i,h;
if(!document.getElementById || !document.getElementsByTagName) return;
if(!document.getElementById("yftnBubbles")) return false;




h=document.createElement("span");
h.id="btc";
h.setAttribute("id","btc");
h.style.position="absolute";
document.getElementsByTagName("body")[0].appendChild(h);

var tool_id = document.getElementById("yftnBubbles");

links= tool_id.getElementsByTagName("li");

//if(id==null) links=document.getElementsByTagName("li");
//else links=document.getElementById(id).getElementsByTagName("li");


for(i=0;i<links.length;i++){
    Prepare(links[i]);
    }
}

function Prepare(el){
var tooltip,t,b,s,l;
t=el.getAttribute("title");
if(t==null || t.length==0) t="";
el.removeAttribute("title");
tooltip=CreateEl("span","tooltip");
s=CreateEl("span","top");
s.appendChild(document.createTextNode(t));
tooltip.appendChild(s);
setOpacity(tooltip);
el.tooltip=tooltip;
el.onmouseover=showTooltip;
el.onmouseout=hideTooltip;
el.onmousemove=Locate;
}

function showTooltip(e){
document.getElementById("btc").appendChild(this.tooltip);
Locate(e);
}

function hideTooltip(e){
var d=document.getElementById("btc");
if(d.childNodes.length>0) d.removeChild(d.firstChild);
}

function setOpacity(el){
el.style.filter="alpha(opacity:80)";
el.style.KHTMLOpacity="0.8";
el.style.MozOpacity="0.8";
el.style.opacity="0.8";
}

function CreateEl(t,c){
var x=document.createElement(t);
x.className=c;
x.style.display="block";
return(x);
}


function Locate(e){
var posx=0,posy=0;
if(e==null) e=window.event;
if(e.pageX || e.pageY){
    posx=e.pageX; posy=e.pageY;
    }
else if(e.clientX || e.clientY){
    if(document.documentElement.scrollTop){
        posx=e.clientX+document.documentElement.scrollLeft;
        posy=e.clientY+document.documentElement.scrollTop;
        }
    else{
        posx=e.clientX+document.body.scrollLeft;
        posy=e.clientY+document.body.scrollTop;
        }
    }
document.getElementById("btc").style.top=(posy+10)+"px";
document.getElementById("btc").style.left=(posx-20)+"px";
}


/**
* selectで星座を選択すると画像が表示される
*/
function seizaBg1(op) {
	if (op.seizaSelect01.selectedIndex == 1){ document.getElementById('seizaSelect01').parentNode.className = 'seiza01' }
	else if (op.seizaSelect01.selectedIndex == 2){ document.getElementById('seizaSelect01').parentNode.className = 'seiza02' }
	else if (op.seizaSelect01.selectedIndex == 3){ document.getElementById('seizaSelect01').parentNode.className = 'seiza03' }
	else if (op.seizaSelect01.selectedIndex == 4){ document.getElementById('seizaSelect01').parentNode.className = 'seiza04' }
	else if (op.seizaSelect01.selectedIndex == 5){ document.getElementById('seizaSelect01').parentNode.className = 'seiza05' }
	else if (op.seizaSelect01.selectedIndex == 6){ document.getElementById('seizaSelect01').parentNode.className = 'seiza06' }
	else if (op.seizaSelect01.selectedIndex == 7){ document.getElementById('seizaSelect01').parentNode.className = 'seiza07' }
	else if (op.seizaSelect01.selectedIndex == 8){ document.getElementById('seizaSelect01').parentNode.className = 'seiza08' }
	else if (op.seizaSelect01.selectedIndex == 9){ document.getElementById('seizaSelect01').parentNode.className = 'seiza09' }
	else if (op.seizaSelect01.selectedIndex == 10){ document.getElementById('seizaSelect01').parentNode.className = 'seiza10' }
	else if (op.seizaSelect01.selectedIndex == 11){ document.getElementById('seizaSelect01').parentNode.className = 'seiza11' }
	else if (op.seizaSelect01.selectedIndex == 12){ document.getElementById('seizaSelect01').parentNode.className = 'seiza12' }
	else { document.getElementById('seizaSelect01').parentNode.className = 'seiza00' }
}
function seizaBg2(op) {
	if (op.seizaSelect02.selectedIndex == 1){ document.getElementById('seizaSelect02').parentNode.className = 'seiza01' }
	else if (op.seizaSelect02.selectedIndex == 2){ document.getElementById('seizaSelect02').parentNode.className = 'seiza02' }
	else if (op.seizaSelect02.selectedIndex == 3){ document.getElementById('seizaSelect02').parentNode.className = 'seiza03' }
	else if (op.seizaSelect02.selectedIndex == 4){ document.getElementById('seizaSelect02').parentNode.className = 'seiza04' }
	else if (op.seizaSelect02.selectedIndex == 5){ document.getElementById('seizaSelect02').parentNode.className = 'seiza05' }
	else if (op.seizaSelect02.selectedIndex == 6){ document.getElementById('seizaSelect02').parentNode.className = 'seiza06' }
	else if (op.seizaSelect02.selectedIndex == 7){ document.getElementById('seizaSelect02').parentNode.className = 'seiza07' }
	else if (op.seizaSelect02.selectedIndex == 8){ document.getElementById('seizaSelect02').parentNode.className = 'seiza08' }
	else if (op.seizaSelect02.selectedIndex == 9){ document.getElementById('seizaSelect02').parentNode.className = 'seiza09' }
	else if (op.seizaSelect02.selectedIndex == 10){ document.getElementById('seizaSelect02').parentNode.className = 'seiza10' }
	else if (op.seizaSelect02.selectedIndex == 11){ document.getElementById('seizaSelect02').parentNode.className = 'seiza11' }
	else if (op.seizaSelect02.selectedIndex == 12){ document.getElementById('seizaSelect02').parentNode.className = 'seiza12' }
	else { document.getElementById('seizaSelect02').parentNode.className = 'seiza00' }
}






/**
* 検索の文字を表示＆クリックの時に消す
*/
function searchDefault() {
init01();
init02();
};

         function inputDefault(elm, msg) {
            this.elm     = elm;
            this.msg     = msg;
         }

         inputDefault.prototype.set = function() {
            this._cleared  = false;
            this.elm.value = this.msg;

            var _this = this;
            addEvent( this.elm,      'focus',  function() { _this.clear();  } );
            addEvent( this.elm.form, 'submit', function() { _this.submit(); } );
         }

         inputDefault.prototype.clear = function() {
            if(this._cleared) return;

            this.elm.value = '';
            this._cleared  = true;
         }

         inputDefault.prototype.submit = function() {
            if(this._cleared) return;

            var _this = this;
            this.elm.disabled = true;
            window.setTimeout(function() { _this.elm.disabled = false; }, 1);
         }

         function addEvent(elm, type, event) {
            if(elm.addEventListener) {
               elm.addEventListener(type, event, false);
               } else if(elm.attachEvent) {
               elm.attachEvent('on'+type, event);
               } else {
               elm['on'+type] = event;
            }
         }

         function init01() {
             if(!document.getElementById('search_box')) return false;
             var input = new inputDefault(document.getElementById('search_box'), '占師・恋愛運・片想いなどキーワードで検索');
             input.set();
         }

         function init02() {
             if(!document.getElementById('keyword_box')) return false;
             var input_keyword = new inputDefault(document.getElementById('keyword_box'), '占師・恋愛運・片想いなどキーワードで検索');
             input_keyword.set();
         }


function createbtn(){
	
	if(!document.getElementById) return false;
	if(!document.copy) return false;
	
	
	// onFocus Event
	var text_area = document.copy.elements;
	
	for(var i=0; i < text_area.length; i++) {
		text_area[i].onfocus = function (){
			this.select();
		}
		}


	// Text Copy Button (IE only)
	if(navigator.userAgent && navigator.userAgent.indexOf("MSIE")>=0 && navigator.userAgent.indexOf("Windows")>=0){ //IE
	
	if(!document.getElementById("blogBtn")) return false;
	if(!document.getElementById("htmlBtn")) return false;
	
	var blog_btn = document.getElementById("blogBtn");
	var html_btn = document.getElementById("htmlBtn");
	
	blog_btn.innerHTML = "<p class=\"copy\"><img src=\"https://s.yimg.jp/images/fortune/images/12astro/yftn12a_md26_btn_copy.gif\" alt=\"コピー\" onclick=\"setClipboard(\'0')\"></p>";
	html_btn.innerHTML = "<p class=\"copy\"><img src=\"https://s.yimg.jp/images/fortune/images/12astro/yftn12a_md26_btn_copy.gif\" alt=\"コピー\" onclick=\"setClipboard(\'1')\"></p>";
	
	} else {
		return false;
	}
}


function setClipboard(n){
	document.copy.elements[n].select();
	var txt = document.copy.elements[n].value;

	if(navigator.userAgent && navigator.userAgent.indexOf("MSIE")>=0 && navigator.userAgent.indexOf("Windows")>=0){ //IE

			 if (clipboardData.setData("Text", txt)) {
			 alert("ソースをクリップボードにコピーしました。");
			 }
			 }
}






// onload Event

addLoadEvent(fukidashi);
addLoadEvent(searchDefault);
addLoadEvent(createbtn);



/**
 * 12星座占い結果のタブ切り替え
 */
    function chg12astroLuckyMenu(menu){
        switch(menu)
        {
            case 'menu_love':
                $("#menu_love").css('display', 'block');
                $("#menu_money").css('display', 'none');
                $("#menu_job").css('display', 'none');
                break;
            case 'menu_money':
                $("#menu_love").css('display', 'none');
                $("#menu_money").css('display', 'block');
                $("#menu_job").css('display', 'none');
                break;
            case 'menu_job':
                $("#menu_love").css('display', 'none');
                $("#menu_money").css('display', 'none');
                $("#menu_job").css('display', 'block');
                break;
            default:
        }
    }

