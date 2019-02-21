var VideoRichHoverInst;(function(n){function c(n,i){f&&o&&t&&n&&f.bind&&o.icd&&!(n.length<1)&&(h=f.bind,e[n]&&(e[n]=null),e[n]=new s(i.enperfinst,i.enhoverhb,i.enmmstinst,i.chflturl&&i.chflturl.length>0,i.enmuteinst,i.hoverdelayms,i.instName,n))}function i(n,t){return Math.max(t-n,0)}function l(n,t,i){var r={T:"MMHoverVideo",AppNS:n,K:t,TS:null,DU:null,THLT:null,RCLT:null,MOS:null,MOT:null,IsMT:0,VPST:null,VDT:null,MaxVPT:null,SCNT:0,MMSTLT:null,IsMMT:null,MuteCNT:0,Mute:null};(i===VRHEnums.ThumbnailType.MT||i===VRHEnums.ThumbnailType.MMMT)&&(r.IsMMT=0,r.VPST=null,r.VDT=null,r.MaxVPT=null);switch(i){case VRHEnums.ThumbnailType.MT:r.IsMT=1;break;case VRHEnums.ThumbnailType.MMMT:r.IsMMT=1;r.IsMT=1;r.SCNT=0;r.MMSTLT=null}return r}function r(n,t,i,r){return{T:"CI.Hover",AppNS:n,K:t,Name:i,TS:sb_gt(),HType:r}}function a(n,t,i,r,u,f){return{T:"CI.RichHover_Channel",AppNS:n,K:t,Name:i,TS:sb_gt(),PubUser:r,PubId:u,EventType:f}}function v(n,t,i,r){return{T:"CI.RichHover_MMSTHover",AppNS:n,K:t,Name:r,TS:sb_gt(),EN:"mmst_hover",Index:i}}var u="undefined",o=typeof pInstr!=u?pInstr:null,f=typeof SmartEvent!=u?SmartEvent:null,t=typeof VRHConsts!=u?VRHConsts:null,h,e=[],s;n.init=c;s=function(){function n(n,u,f,e,o,s,h,c){var y=this;this.hoverDelayTime=0;this.enablePerf=!1;this.enableHover=!1;this.enableMMSTHover=!1;this.bindEvents=function(){sj_evt.bind(t.HoverMouseInEvt,y.mouseIn);sj_evt.bind(t.HoverMouseOutEvt,y.mouseOut);y.enablePerf&&(sj_evt.bind(t.HoverCaptionLoadEvt,y.richCaptionLoaded),sj_evt.bind(t.HoverMMSTLoadEvt,y.mmstLoaded),sj_evt.bind(t.PlayerDownloadEndEvt,y.videoDownloaded),sj_evt.bind(t.PlayerEndEvt,y.videoEnd),sj_evt.bind(t.PlayerStartEvt,y.videoStart),sj_evt.bind(t.HoverThumbLoadEvt,y.thumbnailLoaded));y.enableHover&&sj_evt.bind(t.HoverStartEvt,y.hoverStart);y.enableMMSTHover&&sj_evt.bind(t.MMSTSeekEvt,y.seek);y.enableChannelFilter&&sj_evt.bind(t.HoverChannelFilterEvt,y.channelEvent);y.enableMuteInst&&sj_evt.bind(t.HoverMuteEvt,y.muteClick)};this.isCallMe=function(n){return n&&n.length>1&&n[1]&&n[1].AppNS&&n[1].K&&n[1].HoverContainerId&&y.nameSpace===n[1].AppNS&&y.kValue===n[1].K&&y.containerName===n[1].HoverContainerId?!0:!1};this.mouseIn=function(n){if(n||!(n.length<4)){var t=[];(t.push(n[0]),t.push(n[1].instMetaData),y.isCallMe(t))||(y.nameSpace=n[1].instMetaData.AppNS,y.kValue=n[1].instMetaData.K,y.hoverType=n[1].instMetaData.HoverType,y.thumbnailType=n[3],(y.enablePerf||y.enableMMSTHover||y.enableMuteInst)&&(y.perfInst=l(y.nameSpace,y.kValue,y.thumbnailType),y.perfInst.MOS=i(_G.ST,sb_gt()),y.mouseInStartTime=sb_gt()))}};this.mouseOut=function(n){y.isCallMe(n)&&(y.enablePerf&&y.perfInst&&(y.perfInst.TS=sb_gt(),y.perfInst.MOT=i(y.mouseInStartTime,y.perfInst.TS),y.perfInst.DU=Math.max(y.perfInst.MOT,y.perfInst.MMSTLT,y.perfInst.THLT,y.perfInst.RCLT),y.perfInst.MaxVPT||(y.perfInst.MaxVPT=y.perfInst.MOT),y.perfInst.MOS>0&&y.perfInst.MOT>y.hoverDelayTime+100&&mmLog(JSON.stringify(y.perfInst)),y.perfInst=null),y.nameSpace=null,y.kValue=null,y.hoverType=null,y.hoverStartTime=null,y.mouseInStartTime=null,y.videoStartTime=null,y.perfInst=null);y.hoverStop=!0;y.unbindHoverHeartBeatEvents()};this.hoverStart=function(n){if(y.isCallMe(n)&&(y.hoverStop=!1,y.hoverStartTime=sb_gt(),y.enableHover)){var t=r(y.nameSpace,y.kValue,y.instName,"h");mmLog(JSON.stringify(t));y.bindHoverHeartBeatEvents(n)}};this.channelEvent=function(n){y.isCallMe(n)!==!1&&(n.length<5&&n[2]&&n[2].length>0&&n[3]&&n[3].length>0&&n[4]&&n[4].length>0||mmLog(JSON.stringify(a(y.nameSpace,y.kValue,y.instName,n[3],n[4],n[5]))))};this.unbindHoverHeartBeatEvents=function(){y.hoverInst2&&sb_ct(y.hoverInst2);y.hoverInst5&&sb_ct(y.hoverInst5);y.hoverInst10&&sb_ct(y.hoverInst10);y.hoverInst2=y.hoverInst5=y.hoverInst10=null};this.videoStart=function(n){y.isCallMe(n)&&!y.videoStartTime&&(y.videoStartTime=sb_gt(),y.perfInst.VPST=i(y.mouseInStartTime,y.videoStartTime))};this.videoEnd=function(n){y.isCallMe(n)&&!y.perfInst.MaxVPT&&(y.perfInst.MaxVPT=i(y.videoStartTime,sb_gt()))};this.muteClick=function(n){y.isCallMe(n)&&y.perfInst&&(y.perfInst.MuteCNT++,n.length>2&&(y.perfInst.Mute=n[2]===!0?1:0))};this.seek=function(n){if(y.isCallMe(n)&&(y.perfInst&&y.perfInst.SCNT++,y.enableMMSTHover)){if(!n||n.length<3)return;var t=parseInt(n[2]);if(!y.nameSpace||!y.kValue||isNaN(t))return;mmLog(JSON.stringify(v(y.nameSpace,y.kValue,t,y.instName)))}};this.videoDownloaded=function(n){y.isCallMe(n)&&y.perfInst&&!y.perfInst.VDT&&(y.perfInst.VDT=i(y.mouseInStartTime,sb_gt()),y.enableMuteInst&&n.length>3&&(y.perfInst.Mute=n[3]===!0?1:0))};this.thumbnailLoaded=function(n){y.isCallMe(n)&&y.perfInst&&!y.perfInst.THLT&&(y.perfInst.THLT=i(y.mouseInStartTime,sb_gt()))};this.mmstLoaded=function(n){y.isCallMe(n)&&y.perfInst&&!y.perfInst.MMSTLT&&(y.perfInst.MMSTLT=i(y.mouseInStartTime,sb_gt()))};this.richCaptionLoaded=function(n){y.isCallMe(n)&&y.perfInst&&!y.perfInst.RCLT&&(y.perfInst.RCLT=i(y.mouseInStartTime,sb_gt()))};s>0&&(this.hoverDelayTime=s);this.enablePerf=n;this.enableHover=u;this.enableMMSTHover=f;this.enableChannelFilter=e;this.enableMuteInst=o;this.instName=h;this.containerName=c;this.bindEvents()}return n.prototype.bindHoverHeartBeatEvents=function(){var n=this;this.hoverInst2=sb_st(function(){n.hoverStop||(n.hoverInst2=null,mmLog(JSON.stringify(r(n.nameSpace,n.kValue,n.instName,"d2"))))},2e3);this.hoverInst5=sb_st(function(){n.hoverStop||(n.hoverInst5=null,mmLog(JSON.stringify(r(n.nameSpace,n.kValue,n.instName,"d5"))))},5e3);this.hoverInst10=sb_st(function(){n.hoverStop||(n.hoverInst10=null,mmLog(JSON.stringify(r(n.nameSpace,n.kValue,n.instName,"d10"))))},1e4)},n}()})(VideoRichHoverInst||(VideoRichHoverInst={}))