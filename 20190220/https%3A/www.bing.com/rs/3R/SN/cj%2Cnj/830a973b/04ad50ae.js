var ImgGifPlayer;(function(){function d(){return _w.innerHeight?_w.innerHeight:sb_de.clientHeight}function at(){k=d()}function vt(){f&&(sb_ct(f),f=null);f=sb_st(u,ht)}function h(t){var i=n.gfbc(v,t);return i?n.ga(i,"gif")==="1":!1}function yt(t){var i=null,r=n.gfbc(v,t),u;return r&&(u=n.ga(r,"m"),i=JSON.parse(u)),i&&i.murl?i.murl:null}function g(n){if(n){var t=n.getBoundingClientRect();return t.bottom+y>0&&t.top<k+y}return!1}function e(){var n=document.getElementById("GifToggleInput");return n&&!n.checked}function pt(r,u,f){return function(){n.sa(r,p,u.src);n.sa(r,w,f);n.sa(r,i,t.holding);(r==s||!e()&&g(u))&&c(u,r)}}function wt(r){return function(){n.sa(r,i,t.invalidSrc)}}function u(){for(var r,u,f,a=n.gebc(l,_d),s=0;s<a.length;s++)if(r=a[s],h(r)){if(gt(r),e())continue;u=n.gfbc(o,r);u&&(f=n.ga(r,i),g(u)?f?f===t.holding&&c(u,r):nt(u,r):f===t.playing&&it(u,r))}}function nt(r,u){var f,e;n.sa(u,i,t.init);f=yt(u);f?(e=new Image,e.onload=pt(u,r,f),e.onerror=wt(u),e.src=f):n.sa(u,i,t.invalidSrc)}function tt(){for(var r,i=n.gebc(l,_d),t=0;t<i.length;t++)r=i[t],rt(r)}function it(r,u){r.src=n.ga(u,p);n.rc(u,a);n.sa(u,i,t.holding)}function c(r,u){r.src=n.ga(u,w);n.ac(u,a);n.sa(u,i,t.playing)}function rt(r){var u,f;h(r)&&(u=n.gfbc(o,r),u&&(f=n.ga(r,i),f===t.playing&&it(u,r)))}function bt(r){var u,f;h(r)&&(u=n.gfbc(o,r),u&&(f=n.ga(r,i),f?f===t.holding&&c(u,r):nt(u,r)))}function kt(n){s=n;e()&&bt(n)}function dt(n){s=null;e()&&rt(n)}function gt(t){n.ga(t,b)||(n.sa(t,b,!0),r.bind(t,"mouseenter",function(){return kt(t)}),r.bind(t,"mouseleave",function(){return dt(t)}))}function ni(){n&&(u(),r.bind(_w,lt,at),r.bind(_w,ct,vt),r.bindc(ut,tt),r.bindc(ft,u),r.bindc(st,u),r.bindc(et,u),r.bindc(ot,tt))}var i="data-GifState",l="iuscp",a="nobadge",v="iusc",o="mimg",ut="IFrame.Show",ft="IFrame.Close",et="Gif.Play",ot="Gif.Stop",st="DenseGridResultsUpdated",y=50,ht=20,ct="scroll",lt="resize",p="data-rawsrc",w="data-gifsrc",b="hoverhandlersattached",t={init:"0",playing:"1",holding:"2",invalidSrc:"3"},k=d(),f=null,s,n=pMMUtils,r=SmartEvent;ni()})(ImgGifPlayer||(ImgGifPlayer={}))