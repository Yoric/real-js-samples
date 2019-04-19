/*! LAB.js (LABjs :: Loading And Blocking JavaScript)
    v2.0.3 (c) Kyle Simpson
    MIT License 
*/
if(!window.isLab){window.isLab=1;
/*! LAB.js (LABjs :: Loading And Blocking JavaScript)
    v2.0.3 (c) Kyle Simpson
    MIT License
*/
(function(q){var u=q.$LAB,j="UseLocalXHR",p="AlwaysPreserveOrder",m="AllowDuplicates",l="CacheBust"
/*!START_DEBUG*/
,k="Debug"
/*!END_DEBUG*/
,e="BasePath",r=/^[^?#]*\//.exec(location.href)[0],B=/^\w+\:\/\/\/?[^\/]+/.exec(r)[0],f=document.head||document.getElementsByTagName("head"),h=(q.opera&&Object.prototype.toString.call(q.opera)=="[object Opera]")||("MozAppearance" in document.documentElement.style)
/*!START_DEBUG*/
,c=function(){},n=c
/*!END_DEBUG*/
,z=document.createElement("script"),a=typeof z.preload=="boolean",w=a||(z.readyState&&z.readyState=="uninitialized"),x=!w&&z.async===true,y=!w&&!x&&!h;
/*!START_DEBUG*/
if(q.console&&q.console.log){if(!q.console.error){q.console.error=q.console.log}c=function(C){q.console.log(C)};n=function(D,C){q.console.error(D,C)};
/*!END_DEBUG*/
}function t(C){return Object.prototype.toString.call(C)=="[object Function]"}function A(C){return Object.prototype.toString.call(C)=="[object Array]"}function g(E,D){var C=/^\w+\:\/\//;if(/^\/\/\/?/.test(E)){E=location.protocol+E}else{if(!C.test(E)&&E.charAt(0)!="/"){E=(D||"")+E}}return C.test(E)?E:((E.charAt(0)=="/"?B:r)+E)}function i(D,E){for(var C in D){if(D.hasOwnProperty(C)){E[C]=D[C]}}return E}function b(D){var E=false;for(var C=0;C<D.scripts.length;C++){if(D.scripts[C].ready&&D.scripts[C].exec_trigger){E=true;D.scripts[C].exec_trigger();D.scripts[C].exec_trigger=null}}return E}function d(E,D,C,F){E.onload=E.onreadystatechange=function(){if((E.readyState&&E.readyState!="complete"&&E.readyState!="loaded")||D[C]){return}E.onload=E.onreadystatechange=null;F()}}function v(C){C.ready=C.finished=true;for(var D=0;D<C.finished_listeners.length;D++){C.finished_listeners[D]()}C.ready_listeners=[];C.finished_listeners=[]}function s(E,F,D,G,C){setTimeout(function(){var H,J=F.real_src,I;if("item" in f){if(!f[0]){setTimeout(arguments.callee,25);return}f=f[0]}H=document.createElement("script");if(F.type){H.type=F.type}if(F.charset){H.charset=F.charset}if(C){if(w){
/*!START_DEBUG*/
if(E[k]){c("start script preload: "+J);
/*!END_DEBUG*/
}D.elem=H;if(a){H.preload=true;H.onpreload=G}else{H.onreadystatechange=function(){if(H.readyState=="loaded"){G()}}}H.src=J}else{if(C&&J.indexOf(B)==0&&E[j]){I=new XMLHttpRequest();
/*!START_DEBUG*/
if(E[k]){c("start script preload (xhr): "+J);
/*!END_DEBUG*/
}I.onreadystatechange=function(){if(I.readyState==4){I.onreadystatechange=function(){};D.text=I.responseText+"\n//@ sourceURL="+J;G()}};I.open("GET",J);I.send()}else{
/*!START_DEBUG*/
if(E[k]){c("start script preload (cache): "+J);
/*!END_DEBUG*/
}H.type="text/cache-script";d(H,D,"ready",function(){f.removeChild(H);G()});H.src=J;f.insertBefore(H,f.firstChild)}}}else{if(x){
/*!START_DEBUG*/
if(E[k]){c("start script load (ordered async): "+J);
/*!END_DEBUG*/
}H.async=false;d(H,D,"finished",G);H.src=J;f.insertBefore(H,f.firstChild)}else{
/*!START_DEBUG*/
if(E[k]){c("start script load: "+J);
/*!END_DEBUG*/
}d(H,D,"finished",G);H.src=J;f.insertBefore(H,f.firstChild)}}},0)}function o(){var E={},J=w||y,C=[],D={},G;E[j]=true;E[p]=false;E[m]=false;E[l]=false;
/*!START_DEBUG*/
E[k]=false;
/*!END_DEBUG*/
E[e]="";function I(M,O,L){var K;function N(){if(K!=null){K=null;v(L)}}if(D[O.src].finished){return}if(!M[m]){D[O.src].finished=true}K=L.elem||document.createElement("script");if(O.type){K.type=O.type}if(O.charset){K.charset=O.charset}d(K,L,"finished",N);if(L.elem){L.elem=null}else{if(L.text){K.onload=K.onreadystatechange=null;K.text=L.text}else{K.src=O.real_src}}f.insertBefore(K,f.firstChild);if(L.text){N()}}function F(M,Q,P,K){var L,O,N=function(){Q.ready_cb(Q,function(){I(M,Q,L)})},R=function(){Q.finished_cb(Q,P)};Q.src=g(Q.src,M[e]);Q.real_src=Q.src+(M[l]?((/\?.*$/.test(Q.src)?"&_":"?_")+~~(Math.random()*1000000000)+"="):"");if(!D[Q.src]){D[Q.src]={items:[],finished:false}}O=D[Q.src].items;if(M[m]||O.length==0){L=O[O.length]={ready:false,finished:false,ready_listeners:[N],finished_listeners:[R]};s(M,Q,L,((K)?function(){L.ready=true;for(var S=0;S<L.ready_listeners.length;S++){L.ready_listeners[S]()}L.ready_listeners=[]}:function(){v(L)}),K)}else{L=O[0];if(L.finished){R()}else{L.finished_listeners.push(R)}}}function H(){var N,R=i(E,{}),K=[],M=0,O=false,Q;function T(V,U){
/*!START_DEBUG*/
if(R[k]){c("script preload finished: "+V.real_src);
/*!END_DEBUG*/
}V.ready=true;V.exec_trigger=U;L()}function S(W,V){
/*!START_DEBUG*/
if(R[k]){c("script execution finished: "+W.real_src);
/*!END_DEBUG*/
}W.ready=W.finished=true;W.exec_trigger=null;for(var U=0;U<V.scripts.length;U++){if(!V.scripts[U].finished){return}}V.finished=true;L()}function L(){while(M<K.length){if(t(K[M])){
/*!START_DEBUG*/
if(R[k]){c("$LAB.wait() executing: "+K[M]);
/*!END_DEBUG*/
}try{K[M++]()}catch(U){
/*!START_DEBUG*/
if(R[k]){n("$LAB.wait() error caught: ",U);
/*!END_DEBUG*/
}}continue}else{if(!K[M].finished){if(b(K[M])){continue}break}}M++}if(M==K.length){O=false;Q=false}}function P(){if(!Q||!Q.scripts){K.push(Q={scripts:[],finished:true})}}N={script:function(){for(var U=0;U<arguments.length;U++){(function(Y,W){var X;if(!A(Y)){W=[Y]}for(var V=0;V<W.length;V++){P();Y=W[V];if(t(Y)){Y=Y()}if(!Y){continue}if(A(Y)){X=[].slice.call(Y);X.unshift(V,1);[].splice.apply(W,X);V--;continue}if(typeof Y=="string"){Y={src:Y}}Y=i(Y,{ready:false,ready_cb:T,finished:false,finished_cb:S});Q.finished=false;Q.scripts.push(Y);F(R,Y,Q,(J&&O));O=true;if(R[p]){N.wait()}}})(arguments[U],arguments[U])}return N},wait:function(){if(arguments.length>0){for(var U=0;U<arguments.length;U++){K.push(arguments[U])}Q=K[K.length-1]}else{Q=false}L();return N}};return{script:N.script,wait:N.wait,setOptions:function(U){i(U,R);return N}}}G={setGlobalDefaults:function(K){i(K,E);return G},setOptions:function(){return H().setOptions.apply(null,arguments)},script:function(){return H().script.apply(null,arguments)},wait:function(){return H().wait.apply(null,arguments)},queueScript:function(){C[C.length]={type:"script",args:[].slice.call(arguments)};return G},queueWait:function(){C[C.length]={type:"wait",args:[].slice.call(arguments)};return G},runQueue:function(){var M=G,K=C.length,L=K,N;for(;--L>=0;){N=C.shift();M=M[N.type].apply(null,N.args)}return M},noConflict:function(){q.$LAB=u;return G},sandbox:function(){return o()}};return G}q.$LAB=o();(function(E,C,D){if(document.readyState==null&&document[E]){document.readyState="loading";document[E](C,D=function(){document.removeEventListener(C,D,false);document.readyState="complete"},false)}})("addEventListener","DOMContentLoaded")})(this);(function(){var a=function(d,i){var c=false,h=true,k=d.document,j=k.documentElement,n=k.addEventListener?"addEventListener":"attachEvent",l=k.addEventListener?"removeEventListener":"detachEvent",b=k.addEventListener?"":"on",m=function(o){if(o.type=="readystatechange"&&k.readyState!="complete"){return}(o.type=="load"?d:k)[l](b+o.type,m,false);if(!c&&(c=true)){i.call(d,o.type||o)}},g=function(){try{j.doScroll("left")}catch(o){setTimeout(g,50);return}m("poll")};if(k.readyState=="complete"){i.call(d,"lazy")}else{if(k.createEventObject&&j.doScroll){try{h=!d.frameElement}catch(f){}if(h){g()}}k[n](b+"DOMContentLoaded",m,false);k[n](b+"readystatechange",m,false);d[n](b+"load",m,false)}};a(window,function(){window.isReady=1});window.AddReady=function(b){if(this.isReady){b()}else{a(this,b)}}})()}$LAB.setOptions({AlwaysPreserveOrder:true,Debug:true});