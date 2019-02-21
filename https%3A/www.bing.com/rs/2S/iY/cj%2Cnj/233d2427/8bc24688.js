(function(n){function ai(n,t,i,r,u,f,e){this.Height=n;this.CollapsedHeight=t;this.TileWidth=i;this.TileHeight=r;this.NavigationButtonWidth=u;this.AddInterestWidth=f;this.TilePadding=e}function vi(n,t){t?a(n):rt(n)}function kt(n,i){i?u(n):t(n)}function dt(t){n.elmMdAll&&vi(n.elmTbar,t)}function gt(){return n.elmMdAll?n.elmMdAll.style.display===ut?wt:w:li}function ht(n){sj_cook.set(k,d,n,!0,"/")}function yi(){return sj_cook.get(k,d)===at}function ni(){return sj_cook.get(k,d)===vt}function ti(){return sj_cook.get(k,d)===yt}function pi(){return yi()||ni()||ti()}function wi(){var i=r&&ti()?c:ni()?p:nt;tt&&(i=p);!_H.tablet||pi()||_H.pnfe||(i=c);!st||ULC.isBelowThreshold(_H.ULC.Carousel)||bi()||(i=c);a(n.elmMdAll);switch(i){case p:t(n.elmCloser);t(n.elmEdit);kt(n.elmOpener,tt?!1:!r);r&&kt(n.elmHide,!tt);n.addStyleClass(sj_b,f);n.addStyleClass(n.elmMdC,f);n.show(null,ct);!_H.vert&&n&&n.tbarAnim&&n.tbarAnim.revert&&n.tbarAnim.revert(sj_wf(sj_evt.fire,g));break;case c:t(n.elmCloser);t(n.elmEdit);u(n.elmOpener);r&&t(n.elmHide);a(n.elmTbar);n.addStyleClass(sj_b,ot);ct();h&&a(h);break;default:t(n.elmOpener);u(n.elmCloser);r&&t(n.elmHide);u(n.elmEdit);n.addStyleClass(sj_b,et);n.show(null,ct)}l=i;sj_evt.fire("CARO_INIT_STATE",i)}function ct(){sj_evt.fire(ri);_w.Log&&Log.Log&&_w.g_crsInst&&Log.Log("Load","HP","Carousel",!1,null)}function lt(n){sj_evt.fire("CARO_CHNG_STATE",n)}function bi(){var n=_ge(ci),t=n&&n.querySelectorAll&&n.querySelectorAll(hi);return t&&t.length>0}function ki(){var t=_ge("hp_trivia_outer"),n=_ge("hp_bottomCell");t&&n&&(n.children.length>0?n.insertBefore(t,n.children[0]):n.appendChild(t))}function di(){function p(n){var i=_ge("hp_container"),r=_ge("sc_mdCrs"),f;i&&r&&t&&(f=Math.min(i.clientWidth,si),r.style.width=f+y,n||u())}function w(n){var u,t,i,r;if(c){for(u=c.children,t=null,i=1;i<u.length;++i)r=u[i],r.offsetLeft<n&&r.offsetLeft>(t?t.offsetLeft:0)&&(t=r);return t}return null}function g(){var n,i;t&&(n=w(t.scrollLeft+t.clientWidth),n?r(t.scrollLeft,n.offsetLeft):(i=Math.min(t.scrollLeft+t.clientWidth,t.scrollWidth-t.clientWidth),r(t.scrollLeft,i)))}function nt(){var n,i;t&&(n=w(t.scrollLeft),n?(i=n.offsetLeft+n.clientWidth-t.clientWidth,r(t.scrollLeft,i)):(i=Math.max(t.scrollLeft-t.clientWidth,0),r(t.scrollLeft,i)))}function r(n,i){if(n!=i){a=!0;var r=_anim.animE(t,tt,n,i,{duration:pt});r.start(u)}}function u(){var u,f,h,c,r;k.display=ut;d.display=ut;u=_ge(s);u&&(n.removeStyleClass(u,e),_w.hp_enable(u));f=_ge(o);f&&(n.removeStyleClass(f,e),_w.hp_enable(f));t.scrollLeft==0&&(r=_ge(i&&!l?o:s),r&&(n.addStyleClass(r,e),_w.hp_disable(r)));h=Math.abs(t.scrollLeft)+t.clientWidth;c=t.scrollWidth;h>=c&&(r=_ge(i&&!l?s:o),r&&(n.addStyleClass(r,e),_w.hp_disable(r)));sj_evt.fire(fi);a=!1}function tt(n,t){n&&(n.scrollLeft=t)}function it(){var r=_ge("hp_ctrls"),l=_ge("hp_ctrls_dark"),a=_ge("caro_sunset"),y=" hidden",w,c;r&&n.elmCtrls&&(r.getAttribute("data-tbarhidden")&&(n.elmCtrls.className+=y,l&&(l.className+=y)),r.appendChild(n.elmCtrls));r&&a&&r.appendChild(a);w=_ge("sc_mdCrs");w&&(c=i?_ge(o):_ge(s),c&&(n.addStyleClass(c,e),_w.hp_disable(c)),rt()&&sj_so(c,0));sj_be(h,v,g);sj_be(f,v,nt);sj_be(_w,"resize",sj_wf(p,!1));p(!0);t&&(sj_be(t,ii,u),n.resizePane());sj_evt.fire(ui)}function rt(){return n.elmMdC.getAttribute("data-crsfilt")==="1"}var b=_w.sb_i9p||_w.navigator.msPointerEnabled,f=_ge(s),k=f.style,h=_ge(o),d=h.style,c=_ge("crs_pane"),t=_ge("crs_scroll"),l=document.body.className.indexOf("wkit")!=-1,a=!1,i=_G&&_G.RTL===!0,ft=i&&(b||_w.sb_i8l)?-1:1;it()}var ut="block",v="click",ii="scroll",y="px",k=_H.basic?"_UR2":"_UR",d="TC",at="C0",vt="C1",yt="C2",g="HPTBD",ri="EVT_TB_START",ui="EVT_CRS_SETUPDONE",fi="EVT_CRS_SCROLLDONE",ft="height",pt=500,ei=300,oi=150,si=1366,et="crs_open",f="crs_collaps",ot="crs_hidden",e="crs_bt_disabled",o="crs_btRight",s="crs_btLeft",hi="li.itile",ci="crs_pane",nt=0,p=1,c=2;n.IEB_ID="sc_interests_edit";var st=_w.ULC&&_H.ULC&&_H.ULC.Carousel&&ULC.incrementCustom&&ULC.reset&&ULC.disable&&ULC.isBelowThreshold&&ULC.markSunsetNotified,wt,w,bt=function(n){n&&n()},li={start:bt,revert:bt,updateDur:function(){}},b,r,h,tt,it,l,i=new ai(124,36,186,124,40,289,8);var a=hp_show,u=hp_showib,rt=hp_hide,t=rt;n.updateCaroControls=function(t){var i=_ge(n.IEB_ID),r,u;!i&&t?(r=_ge("sc_opener"),r&&r.parentNode&&(r.parentNode.appendChild(t),n.elmEdit=t)):i&&!t&&(i.parentNode.removeChild(i),n.elmEdit=null);l===nt&&n.tbarOpen(null,!0);_w.sb_i8l&&(u=_ge("caroToggle"),u&&sb_st(function(){u.style.width=u.clientWidth+"px"},0))};n.init=function(){if(n.elmMdC=_ge("sc_mdc"),n.elmTbar=_ge("hp_tbar"),n.elmCtrls=_ge("carouselControls"),n.elmOpener=_ge("sc_opener"),n.elmCloser=_ge("sc_closer"),n.elmEdit=_ge("sc_interests_edit"),n.elmHide=_ge("sc_hide"),n.elmCaroHover=_ge("cs_hover"),n.elmCarousel=_ge("sc_mdCrs"),n.elmFooter=_ge("sb_foot"),n.elmCarouselPane=_ge("crs_pane"),n.elmMdAll=_ge("sc_md"),n.searchbox=_ge("sbox"),n.searchboxInput=_ge("sb_form_q"),it=!!n.elmCarousel&&n.elmCarouselPane&&n.elmCarouselPane.children.length>0,tt=it&&n.elmCarousel.className.indexOf(f)!=-1,r=it&&n.elmHide,h=r&&_ge("crs_break_news"),b=!0,n.updateCaroControls(_ge(n.IEB_ID)),ki(),n.elmMdC&&n.elmTbar&&n.elmCtrls&&n.elmOpener&&n.elmCloser){if(n.elmTbar&&n.elmTbar.className.indexOf("hp_cnCarousel")>-1&&(i.CollapsedHeight=40,i.Height=115,i.TileHeight=115),it)di();else return;if(_w._anim&&(wt=_anim.animE(n.elmTbar,ft,0,i.Height,{duration:ei,unit:y}),w=_anim.animE(n.elmTbar,ft,0,i.CollapsedHeight,{duration:oi,unit:y}),n.tbarAnim=_anim.animE(n.elmTbar,ft,i.CollapsedHeight,i.Height,{duration:pt,unit:y})),n.elmTbar.appendChild(n.elmMdC),n.elmHusb=_ge("hp_husb"),n.elmHusbC=_ge("sc_husb"),n.elmHusb&&n.elmHusbC?(n.elmHusb.appendChild(n.elmHusbC),a(n.elmHusb)):rt(n.elmHusb),sj_be(n.elmOpener,v,n.tbarOpen),sj_be(n.elmCloser,v,n.tbarClose),r){sj_be(n.elmHide,v,n.tbarHide);var t=_ge("crs_break_news"),u=_ge("hp_ctrls");u&&t&&u.appendChild(t)}(sj_evt.bind("onUlcCaroSunset",function(){st&&ULC.markSunsetNotified(_H.ULC.Carousel)}),n.elmMdC&&n.elmTbar&&n.elmCtrls&&n.elmOpener&&n.elmCloser)&&wi()}};n.tbarOpen=function(i,r,c){n.removeStyleClass(sj_b,ot);r||n.addStyleClass(sj_b,et);n.elmMdC&&n.removeStyleClass(n.elmMdC,f);var a=_G&&_G.RTL===!0?_ge(o):_ge(s),v=_G&&_G.RTL===!0?_ge(s):_ge(o);!r&&a&&n.addStyleClass(a,e);_w.hp_disable(a);v&&n.removeStyleClass(v,e);_w.hp_enable(v);u(n.elmCloser);t(n.elmHide);t(n.elmOpener);u(n.elmEdit);_H.vert||r||n.tbarAnim.start(sj_wf(sj_evt.fire,g));c||ht(at);h&&rt(h);l=nt;lt(nt);st&&ULC.disable(_H.ULC.Carousel)};n.tbarClose=function(i,e){n.removeStyleClass(sj_b,et);n.addStyleClass(sj_b,f);n.elmMdC&&n.addStyleClass(n.elmMdC,f);r?(t(n.elmOpener),u(n.elmHide)):u(n.elmOpener);t(n.elmCloser);t(n.elmEdit);!_H.vert&&n&&n.tbarAnim&&n.tbarAnim.revert&&n.tbarAnim.revert(sj_wf(sj_evt.fire,g));e||ht(vt);l=p;lt(p)};n.tbarHide=function(i,r){u(n.elmOpener);t(n.elmCloser);t(n.elmEdit);t(n.elmHide);!_H.vert&&w&&w.revert&&w.revert(sj_wf(sj_evt.fire,g));r||ht(yt);n.removeStyleClass(sj_b,f);n.addStyleClass(sj_b,ot);h&&a(h);l=c;lt(c)};n.show=function(n,t){if(b){var i=gt();dt(!0);n&&i.updateDur(n);i.start(t);b=!1}else t&&t()};n.hide=function(n,t){if(b)t&&t();else{var i=gt();n&&i.updateDur(n);i.revert(function(){dt(!1);t&&t()});b=!0}};n.addStyleClass=function(n,t){n&&t&&(n.className+=" "+t)};n.removeStyleClass=function(n,t){if(n&&t){var i=n.className.replace(t,"").replace(/^\s+|\s+$/g,"");n.className=i}};n.containsStyleClass=function(n,t){return!n||!t?!1:n.className.indexOf(t)!=-1};n.resizePane=function(){var u=_ge("crs_pane"),n,f,t,r,e;if(u){for(n=u.getElementsByTagName("li"),f=0,t=0;t<n.length;t++)r=parseInt(n[t].getAttribute("data-w")),!isNaN(r)&&isFinite(r)&&(f+=r-i.TileWidth);e=_ge("crs_addint")?i.AddInterestWidth:0;u.style.width=n.length*(i.TileWidth+i.TilePadding)+e+f+y}};n.isCollapsedOrHidden=function(){return l!=0}})(_w.bhptb=_w.bhptb||{}),function(n){n.loadedHpmOnce=!1}(_w.hpmst=_w.hpmst||{});_H.getCaroParam=function(){if(_H.crsSw&&_w.g_hpLocal){var n=hp_lsGetItem("CrsSwActv");if(typeof n!="undefined"&&n!=null)return"swc="+n}return""};_w.hpmRequest=function(n,t){var e,o,f,a,v;_w.hpmst.loadedHpmOnce=!0;_w.hp_llog&&hp_llog("CaroStart",Math.round(performance.now()));var i=sj_gx(),r=hp_pushparams([]),y=function(n){for(var t,r=_d.head||_d.getElementsByTagName("head")[0],i=0,u=n.length;i<u;i++)t=sj_ce("style"),t.setAttribute("type","text/css"),t.textContent!==undefined?t.textContent=n[i]:t.styleSheet.cssText=n[i],r.appendChild(t)},s=function(n){var t=[],i=n.replace(/<style\s+[^>]+>([^<]*)<\/style>/g,function(n,i){return t.push(i),""});return y(t),i},p=function(n,t){var f,e,r,i,u;if(n){for(f=n,e=f.getElementsByTagName("script"),r=0;r<e.length;r++)i=e[r],u=sj_ce("script"),i.src?u.src=i.src:u.text=i.text,i.parentElement.insertBefore(u,i),i.parentElement.removeChild(i);t&&t.appendChild(f)}},w=function(){var n=hp_getelemsbyclass(sj_b,"div","hpmob_rms"),t,i,r;if(n&&(t=n.length,t>0))for(i=0;i<t;i++)r=n[0],r.className="",p(r)},u=null;if(_H.crsIID&&(u=_H.crsIID),t&&t.IID&&(u=t.IID,delete t.IID),u&&r.push("IID="+u),_G&&_G.IG&&r.push("IG="+_G.IG),n&&r.push("refresh=1"),_H.feature&&r.push("feature="+_H.feature),e=_H.getCaroParam(),e&&r.push(e),t)for(o in t)r.push(o+"="+t[o]);if(_w.QuickSettings){var h=_w.QuickSettings.getActiveSettings(),c=["DisableCarousel","DisableIOTD","DisableNav"],l=0;for(f=0;f<h.length;++f)a=h[f].name,c.indexOf(a)>=0&&++l;if(l===c.length){_w.g_NPLE&&!--_w.g_NPLE&&(sj_evt.fire("onRBComplete"),_w._H&&_H.postrb&&sj_evt.fire("postRBComplete"));return}}v="/hpm?"+r.join("&");i.open("GET",v,!0);i.onreadystatechange=function(){var r,f,e,o,h,u,c,l,a,t,v;if(4==i.readyState){if(200==i.status&&i.responseText)if(r=sj_ce("div"),n){for(f=s(i.responseText),r.innerHTML=f,e=r.getElementsByTagName("ul"),o=null,t=0;t<e.length;t++)e[t].id==="crs_pane"&&(o=e[t]);if(!o)return;for(h=!1,u=_ge("crs_scroll"),u&&(c=u.children&&u.children[0],c&&(u.replaceChild(o,c),h=!0)),l=null,a=r.getElementsByTagName("a"),t=0;t<a.length;t++)v=a[t],v.id===bhptb.IEB_ID&&(l=v);bhptb.updateCaroControls(l);h&&(bhptb.resizePane(),sj_evt.fire("EVT_CRS_REFRESHDONE"))}else sj_b.appendChild(r),r.style.display="none",f=s(i.responseText),r.innerHTML=f,bhptb.init(),_w.hp_llog&&hp_llog("CaroLoad",Math.round(performance.now())),w(),_w.g_NPLE&&!--_w.g_NPLE?sj_evt.fire("onRBComplete"):_w.g_NPLE===0&&sj_evt.fire("onRBCompleteQS");try{i.onreadystatechange=null}catch(y){}}};i.send(null)};sj_evt.bind("onInvokeHpm",sj_wf(hpmRequest,!1),1);_w.setTimeout(function(){_w.hpmst&&!_w.hpmst.loadedHpmOnce&&(_H.crsP1?hpmRequest(!1):sj_evt.bind("onBgSet",sj_wf(hpmRequest,!1),1))},2e3)