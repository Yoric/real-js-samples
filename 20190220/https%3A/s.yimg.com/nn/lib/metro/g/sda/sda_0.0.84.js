YUI.add("type_sda",function(a){a.namespace("My.Extensions.Sda");var b="#my-adsLREC2-config",p="#my-adsLREC2",f="#my-adsMAST",e="#sticky-lrec2-footer",g="fetch_selective_ad",h=window.DARLA||null,m="LREC2",q="LREC3",i="LREC4",j="MON2",d=false,c=1000,k="hlAdsAll",l="",o="2023538075";function n(){var r=this;YMedia.after("appletsinit",function(s){r.init();});}n.prototype.init=function(){var s=this;var r=a.one(b);if(!r){return;}var v=r.getData("config");if(!v){return;}try{lrec2PositionMeta=a.JSON.parse(v);}catch(u){return;}p="#my-ads"+lrec2PositionMeta.pos;this.container=a.one(p);this.streamRestoreState=false;if(!this.container||!h){return;}var t=a.one("body");var w=t&&!!t.one("#bbnavdetect");t.plug(a.Plugin.ScrollInfo);this.scrollInfo=t.scrollInfo;this.scrollevent=this.scrollInfo.on("scroll",a.bind(this.VisibleLREC2Ads,this,true),this);if(w){a.Global.on("stream:normal-load",function(){s.addAutoEvent();s.VisibleLREC2Ads();});a.Global.on("stream:restore-state",function(){if(s.isNodeInViewport(p)){var x=true;s.fetchDarlaAd(x);}},s);}else{setTimeout(function(){s.addAutoEvent();s.VisibleLREC2Ads();},300);}};n.prototype.isNodeInViewport=function(r){var s=this.scrollInfo.getOnscreenNodes(r,100);if(a.one("html").hasClass("Reader-open")&&!a.one("html").hasClass("Reader-closed")){return false;}return !s.isEmpty();},n.prototype.VisibleLREC2Ads=function(){if(this.isNodeInViewport(p)){this.fetchDarlaAd();if(this.scrollevent){this.scrollevent.detach();this.scrollevent=null;}}};n.prototype.addAutoEvent=function(){var s=this;var r=a.one(b);var t=r.getData("autorotate")==="1";if(!t){return;}if(window.DARLA&&window.DARLA.inProgress()){setTimeout(function(){s.addAutoEvent();},500);}else{window._darlaAutoEvt=s.getAutoEvent();if(window.DARLA&&window._darlaAutoEvt){window.DARLA.add(window._darlaAutoEvt);}}},n.prototype.getAutoEvent=function(){var r={pg:{property:"fp",test:window.Af.context.bucket,intl:window.Af.context.region,rid:window.Af.context.rid,device:window.Af.context.device}},u='Y-BUCKET="'+window.Af.context.bucket+'"',D=(window.location.protocol==="http:")?0:1,A=a.one(b),K=A.getData("disablerotation")==="1",w=A.getData("lrec4enabled")==="1",E=A.getData("mon2Enabled")==="1",F=A.getData("autoeventrt"),s=A.getData("mastrt"),G=A.getData("lrecrt"),v=A.getData("ldrbrt"),J=A.getData("defaultrt"),C=A.getData("currentpos"),H={},y=A.getData("lrec2SelectiveEnabled")==="1",t,B="",z=o;if(window.facCustomTimout&&window.facCustomTimout>0){u+=" ctout="+window.facCustomTimout;}if(window.flSAKey&&"undefined"!==window.flInstalled){u+=" "+window.flSAKey+"="+window.flInstalled;}if(window.segBlob){var I="";var L="";for(var x in window.segBlob){if(window.segBlob.hasOwnProperty(x)){I+=L+x+":"+window.segBlob[x];L=";";}}u+=' rs="'+I+'"';}if(window.YAHOO&&window.YAHOO.i13n){B=window.YAHOO.i13n.currentSID||"";z=window.YAHOO.i13n.SPACEID||o;}if(!K){H[C]={autoIV:1,autoMax:25,autoRT:J};if(w){H.LREC4={autoIV:1,autoMax:25,autoRT:J};}if(E){H.MON2={autoIV:1,autoMax:25,autoRT:J};}}if(s&&a.Array.indexOf(window.pageloadNonCollapsedAds||[],"MAST")>=0){H.MAST={autoIV:1,autoMax:25,autoRT:s};}if(v&&a.Array.indexOf(window.pageloadNonCollapsedAds||[],"LDRB")>=0){H.LDRB={autoIV:1,autoMax:25,autoRT:v};}if(G&&a.Array.indexOf(window.pageloadNonCollapsedAds||[],"LREC")>=0){H.LREC={autoIV:1,autoMax:25,autoRT:G};}t={ps:H,name:"AUTO",sp:z,autoStart:1,autoMax:25,autoRT:F,autoIV:1,autoDDG:1,ssl:D,secure:1,ref:window.location.href,npv:1,property:"fp",ult:r,experience:{pt:"index",pd:"modal",rid:window.Af.context.rid,sid:B,bucket:window.Af.context.bucket}};if(bucketSAEnabled){t.sa=u;}return t;},n.prototype.fetchAdLater=function(u){var t=this;var r=0;var s=setInterval(function(){if(r>20){clearInterval(s);return;}if(!h.inProgress()){clearInterval(s);t.fetchDarlaAd(u);}r++;},500);},n.prototype.fetchDarlaAd=function(I){var L,N,E,r,aa,U,z=this,D,w=false,P=false,B=false,S=a.one(b),K=S.getData("config"),x=S.getData("lrec4pos")||"LREC4",M=S.getData("mon2pos")||"MON2",u=a.one("#my-adsLREC3")&&a.one("#my-adsLREC3").getData("config"),V=a.one("#my-ads"+x)&&a.one("#my-ads"+x).getData("config"),G=a.one("#my-ads"+M)&&a.one("#my-ads"+M).getData("config"),F={pos:"LREC2",clean:"my-adsLREC2",dest:"my-adsLREC2-iframe",metaSize:true,w:300,h:250,supports:false},v={pos:"LREC3",clean:"my-adsLREC3",dest:"my-adsLREC3-iframe",metaSize:true,w:300,h:250,supports:false},W={pos:x,clean:"my-ads"+x,dest:"my-ads"+x+"-iframe",metaSize:true,w:300,h:250,supports:false},Q={pos:M,clean:"my-ads"+M,dest:"my-ads"+M+"-iframe",metaSize:true,w:300,h:600,supports:false},C={pg:{property:"fp",test:window.Af.context.bucket,intl:window.Af.context.region,rid:window.Af.context.rid,device:window.Af.context.device}},R='Y-BUCKET="'+window.Af.context.bucket+'"',y=(window.location.protocol==="http:")?0:1,H,J=a.one(b).getData("lrec2SelectiveEnabled")==="1",s="",Y=o;aa=S.getData("autoeventrt");if(aa){aa=parseInt(aa,10);}if(window.facCustomTimout&&window.facCustomTimout>0){R+=" ctout="+window.facCustomTimout;}if(window.flSAKey&&"undefined"!==window.flInstalled){R+=" "+window.flSAKey+"="+window.flInstalled;}if(window.segBlob){var A="";var O="";for(var Z in window.segBlob){if(window.segBlob.hasOwnProperty(Z)){A+=O+Z+":"+window.segBlob[Z];O=";";}}R+=' rs="'+A+'"';}if(window.YAHOO&&window.YAHOO.i13n){s=window.YAHOO.i13n.currentSID||"";Y=window.YAHOO.i13n.SPACEID||o;}if(K){F=a.JSON.parse(K);m=F.pos;}if(V){W=a.JSON.parse(V);i=W.pos;}if(G){Q=a.JSON.parse(G);j=Q.pos;}F.id=m;w=S.getData("autorotate")==="1";E=g+"_"+m.toLowerCase();B=S.getData("lrec4enabled")==="1";mon2Enabled=S.getData("mon2enabled")==="1";D=m;if(B){D=D+","+i;}if(mon2Enabled){D=D+","+j;}L={ps:D,name:E,sp:Y,ssl:y,secure:1,ref:window.location.href,npv:1,property:"fp",ult:C,experience:{pt:"index",pd:"modal",rid:window.Af.context.rid,sid:s,bucket:window.Af.context.bucket}};if(bucketSAEnabled){L.sa=R;}var X=B?[W,F]:[F];if(mon2Enabled){X.push(Q);}if(h.inProgress()){var T=h.inProgress();if(T&&T===k){h.abort();h.add(L);h.addPos(X);h.event(E);}else{this.fetchAdLater(I);return;}}else{if(J){h.add(L);h.addPos([X]);h.event(E);}}U=z.getAutoEvent();if(w){h.add(U);}if(!h.isAutoOn()){h.startAuto();}var t=function(){if(h.inProgress()){var ab=h.inProgress();if(ab&&ab===k){h.abort();}else{return;}}d=true;if(z.scrollevent){z.scrollevent.detach();z.scrollevent=null;}if(w){h.add(U);if(!h.isAutoOn()){h.startAuto();}}l="";var ad=false;var ac=document.getElementById("my-adsMON2");ad=ac&&ac.className.indexOf("D-n")===-1;if(z.isNodeInViewport(e)){if((mon2Enabled&&!ad)||!mon2Enabled){l=l?l+","+m:m;}if(mon2Enabled&&ad){l=l?l+","+j:j;}else{if((B&&!ad)||!mon2Enabled){l=l?l+","+i:i;}}}if(l){L.ps=l;h.add(L);h.event(E);}};a.Af.Event.on("modal:hide",t);};n.prototype.destructor=function(){};a.My.Extensions.Sda.init=new n();},"0.0.1",{requires:["node-scroll-info","json-parse"]});/* Copyright (c) 2019, Yahoo! Inc.  All rights reserved. */