/* sohutv 2017-06-22 16:35:36 */
!function(){function l(l,o){if("string"==typeof l&&(l=document.getElementById(l)),l&&!(l.scrollHeight<=l.clientHeight)&&0!=l.clientHeight){var i={w:6,scrollBarClassName:"scrollbar"},a=$.extend({},i,o);l.scrollBarWidth=a.w||6,l.scrollBar=document.createElement("div"),a.className||(l.scrollBar.style.backgroundColor="#ddd",l.scrollBarIndex.style.backgroundColor="#aaa"),n.push(l),e(l),l.scrollBar.scrollDiv=l,l.scrollBarIndex.scrollDiv=l,l.onmousewheel=r,l.scrollBar.onmousewheel=r,l.scrollBarIndex.onmousewheel=r,l.scrollBarIndex.onmousedown=function(l){return l=l||event,s=l.clientY,c=this.scrollDiv.scrollTop,isScrollMove=!0,document.body.onselectstart=function(){return!1},t=this.scrollDiv,""==this.scrollDiv.scrollBar.className&&(this.scrollDiv.scrollBarIndex.style.backgroundColor="#888"),!1}}}function e(l){l.scrollHeight<=l.clientHeight?(l.scrollTop=0,l.scrollBar.style.display="none"):l.scrollBar.style.display="block";for(var e=0,r=0,t=l;t;)e+=t.offsetLeft,r+=t.offsetTop,t=t.offsetParent;var s=parseInt(l.style.borderTopWidth||0);parseInt(l.style.borderBottomWidth||0);l.scrollBar.style.width=l.scrollBarWidth+"px",l.scrollBar.style.height=l.clientHeight+"px",l.scrollBar.style.top=r+s+"px",l.scrollBar.style.left=e+l.offsetWidth-l.scrollBarWidth+"px",l.scrollBarIndex.style.width=l.scrollBarWidth+"px";var c=l.clientHeight-(l.scrollHeight-l.clientHeight);20>c&&(c=20),l.scrollBarHeight=c,l.scrollBarIndex.style.height=c+"px",l.scrollBarIndex.style.left="0px",o(l)}function o(l){l.scrollBarIndex.style.top=(l.clientHeight-l.scrollBarHeight)*l.scrollTop/(l.scrollHeight-l.clientHeight)+"px"}function r(l){var e=this.scrollDiv||this;if(e.scrollHeight<=e.clientHeight)return!0;l=l||event;var r=20;if(l.wheelDelta<0){if(e.scrollTop>=e.scrollHeight-e.clientHeight)return!0;e.scrollTop+=r}else{if(0==e.scrollTop)return!0;e.scrollTop-=r}return o(e),!1}var t=null,s=0,c=0,n=[];window.onresize=function(){for(var l=0;l<n.length;l++)e(n[l])},document.documentElement.onmousemove=function(l){if(t){l=l||event;var e=(t.scrollHeight-t.clientHeight)/(t.clientHeight-t.scrollBarHeight);t.scrollTop=c-(s-l.clientY)*e,o(t)}},document.documentElement.onmouseup=function(l){t&&(""==t.scrollBar.className&&(t.scrollBarIndex.style.backgroundColor="#aaa"),t=null,document.body.onselectstart=function(){return!0})},sohuHD.scrollBar=l}();