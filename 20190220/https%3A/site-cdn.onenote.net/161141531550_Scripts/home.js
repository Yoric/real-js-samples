function StopEventPropagation(a){if(a.stopPropagation)a.stopPropagation();else a.cancelBubble=true}function TabLoop(a,c,d){var e=d,f=c;if(a.shiftKey){e=c;f=d}if(a.target&&a.target.id==e){a.preventDefault();StopEventPropagation(a);var b=document.getElementById(f);b!=null&&b.focus()}}function ExpandHeader(){var a=document.getElementById("sw_bar");a.style.display="block";if(typeof $!="undefined"){$(document).keydown(OnSwitcherDialogKeyDown);$(document).keyup(OnSwitcherDialogKeyUp);$("#sw_bar").toggleClass("closeAnimation",false)}var d=document.getElementById("h_bar"),c=d.clientHeight+"px";window.setTimeout(function(){a.style.top=c},0);window.setTimeout(function(){a.style.opacity=1},0);document.getElementById("sw_barBG").style.display="block";var b=document.getElementById("sw_Outlook");b!=null&&b.focus();return false}function OnSwitcherLauncherKeyDown(a){a.which==32&&ExpandHeader()}function CollapseHeader(){var a=document.getElementById("sw_bar");typeof $!="undefined"&&$("#sw_bar").toggleClass("closeAnimation",true);a.style.top="30px";a.style.opacity="0";window.setTimeout(function(){a.style.display="none"},200);document.getElementById("sw_barBG").style.display="none";if(typeof $!="undefined"){$(document).unbind("keydown",OnSwitcherDialogKeyDown);$(document).unbind("keyup",OnSwitcherDialogKeyUp)}return false}var g_rootDomain=GetRootDomain();function DismissPopupBanner(f,d,c){var e=d?1:Math.floor(Date.now()/1e3);CreateCookie(f,""+e,"."+g_rootDomain,c);var g=document.getElementById("h_popup");g.style.display="none";var b=document.getElementById("h_bar");b.className=b.className.replace(/HeaderPopupShown/,"");var a=document.getElementById("b_content");if(a)a.className=a.className.replace(/HeaderPopupShown/,"");return false}function GetRootDomain(){var b=document.location.hostname.split("."),a=b.pop();if(0!==b.length)a=b.pop()+"."+a;return a}function CreateCookie(d,e,c,a){var b=new Date;a=a>730?730:a;b.setDate(b.getDate()+a);c="localhost"===g_rootDomain?"":";domain="+c;document.cookie=d+"="+e+";expires="+b.toUTCString()+";path=/"+c}var g_instantCreateNewToken,g_instantCreateNewTokenExpiry,g_instantCreateNewTokenFailure=false,g_isFormDigestRequestActive=false;function GetFormDigestForInstantCreateNew(){if(g_isFormDigestRequestActive)return;g_isFormDigestRequestActive=true;Diag.ULS.sendTraceTag(34939925,g_msoulscat_Wac_WebAppsPortal,Diag.ULSTraceLevel.verbose,"GetFormDigestForInstantCreateNew: Requesting formDigest.");var a="CreateNewAuthHandler.ashx?auth=2";if(typeof g_cid!="undefined"&&g_cid)a+="&pcid="+g_cid;a=a+"&docliburl="+encodeURIComponent(g_orgidDestinationUrl);var b=5e3;if(typeof g_instantCreateNewAuthTimeout!="undefined"&&g_instantCreateNewAuthTimeout>0)b=g_instantCreateNewAuthTimeout;typeof $!="undefined"&&$.ajax({url:a,type:"GET",dataType:"json",timeout:b,success:function(a,e,b){g_isFormDigestRequestActive=false;if(typeof a!="undefined"&&a){a.Token;a.TokenTtl;if(typeof a.Token!="undefined"){g_instantCreateNewToken=a.Token;if(typeof a.TokenTtl!="undefined"&&a.TokenTtl>0)g_instantCreateNewTokenExpiry=new Date(+new Date+a.TokenTtl)}Diag.ULS.sendTraceTag(34939926,g_msoulscat_Wac_WebAppsPortal,Diag.ULSTraceLevel.info,"GetFormDigestForInstantCreateNew success.");GetCreateNewReqsAndNavigateIfClicked()}else{var d=null,c=null;if(typeof b!=="undefined"&&b){d=b.status;c=b.getResponseHeader("X-CorrelationId")}Diag.ULS.sendTraceTag(34939927,g_msoulscat_Wac_WebAppsPortal,Diag.ULSTraceLevel.info,"GetServerUserInfo [textStatus: {0}] [status:{1}] [CorrelationId: {2}]",e,d,c);OnGetFormDigestForInstantCreateNewFailed()}},error:function(a,e,d){g_isFormDigestRequestActive=false;var c=null,b=null;if(typeof a!=="undefined"&&a){c=a.status;b=a.getResponseHeader("X-CorrelationId")}Diag.ULS.sendTraceTag(34939928,g_msoulscat_Wac_WebAppsPortal,Diag.ULSTraceLevel.warning,"GetServerUserInfo [textStatus: {0}] [status:{1}] [errorThrown: {2}] [CorrelationId: {3}]",e,c,d,b);OnGetFormDigestForInstantCreateNewFailed()},beforeSend:function(a){a.setRequestHeader("X-Key",g_canary)}})}function FormDigestIsValid(){return typeof g_instantCreateNewToken!="undefined"?typeof g_instantCreateNewTokenExpiry!="undefined"?g_instantCreateNewTokenExpiry>new Date:true:false}function OnSwitcherDialogKeyDown(a){if(a.which==9){var b="sw_Outlook",c="sw_OfficeDotCom";TabLoop(a,b,c)}}function OnSwitcherDialogKeyUp(b){if(b.which==27){CollapseHeader();var a=document.getElementById("h_logoChev");a!=null&&a.focus()}}var g_persistentDialog=false,g_hrdTimeout=null;function BypassSignInControl(){if(g_hrdOverride){HandleShowNext({nextScreen:g_hrdOverride});return true}return false}function ExtractHostnameFromUrl(b){if(b!=null){var a=b.split("://"),c=/[\/\?#]/;if(a.length>1)return a[1].split(c)[0]}return""}function ProcessSignIn(a){if(g_defaultSignInEnabled)AttemptDefaultSignIn(a);else ProcessSignInControlDialog(a)}var g_defaultSignInTimeout=null,g_preferredIdpForDefaultSignIn,g_orgIdReturnUrl,g_msaReturnUrl,g_appId;function AttemptDefaultSignIn(a){var b={preferredIdp:g_preferredIdpForDefaultSignIn,aadConfig:{replyUri:g_orgIdReturnUrl!=null?g_orgIdReturnUrl:window.location.href,host:ExtractHostnameFromUrl(g_defaultSignInAadHost),appId:g_appId},msaConfig:{replyUri:g_msaReturnUrl!=null?g_msaReturnUrl:window.location.href,host:ExtractHostnameFromUrl(g_msaLoginUrl)},enableConsoleLogging:true};g_defaultSignInTimeout=window.setInterval(function(){g_defaultSignInTimeout=null;Diag.ULS.sendTraceTag(25241096,g_msoulscat_Wac_WebAppsPortal,Diag.ULSTraceLevel.warning,"DefaultSignIn timeout");ProcessSignInControlDialog(a)},1e4);getAccount(b,function(b){if(g_defaultSignInTimeout!=null){window.clearInterval(g_defaultSignInTimeout);g_defaultSignInTimeout=null;Diag.ULS.sendTraceTag(25241097,g_msoulscat_Wac_WebAppsPortal,Diag.ULSTraceLevel.info,"DefaultSignIn response received");HandleDefaultSignInResult(b,a)}else Diag.ULS.sendTraceTag(25241098,g_msoulscat_Wac_WebAppsPortal,Diag.ULSTraceLevel.info,"DefaultSignIn completed after timeout")})}function HandleDefaultSignInResult(a,c){Diag.ULS.sendTraceTag(25241099,g_msoulscat_Wac_WebAppsPortal,Diag.ULSTraceLevel.info,"DefaultSignInResult: Operation to perform: {0}, errorCode: {1}, IDP of the default signed in user: {2}, hasUpn: {3}, telemetry: {4}",a.op,a.errorCode,a.idp,!!a.upn,JSON.stringify(a.telemetry));if(a.op=="Redirect"){var b=a.idp=="aad"?g_orgIdLoginUrl:g_msaLoginUrl;if(a.upn!=null)b=AppendOrReplaceQueryParameter(b,"login_hint",a.upn);if(b==null){Diag.ULS.sendTraceTag(25241100,g_msoulscat_Wac_WebAppsPortal,Diag.ULSTraceLevel.warning,"HandleDefaultSignInResult: redirectUrl is null");ProcessSignInControlDialog(c)}else window.location.href=b}else ProcessSignInControlDialog(c)}function ProcessSignInControlDialog(b){if(!b){var a=document.getElementById("h_overlay");if(a.style.display=="block"){HideSignInControl();return}MakeSignInControlVisible();typeof $!="undefined"&&$(document).keyup(onSignInDialogKeyUp);a.onclick=HideSignInControl}else MakeSignInControlVisible()}function ShowPersistentSignInControl(){if(BypassSignInControl())return;g_persistentDialog=true;ProcessSignIn(g_persistentDialog)}function ShowSignInControl(){if(BypassSignInControl())return;g_persistentDialog=false;ProcessSignIn(g_persistentDialog)}function MakeSignInControlVisible(){typeof $!="undefined"&&$("#h_signiniframe").addClass("iframeloading");g_hrdTimeout=window.setInterval(function(){SendClickInfo("hrd_hrdloadtimeout");window.location=g_msaLoginUrl},1e4);document.getElementById("h_overlay").style.display="block";document.getElementById("h_signincntrl").style.display="block";document.getElementById("h_signiniframe").src=g_hrdIframeUrl}function HideSignInControl(){if(document.getElementById("h_overlay").style.display=="none"||g_persistentDialog)return;document.getElementsByTagName("body")[0].style.overflow="";document.getElementById("h_overlay").style.display="none";document.getElementById("h_signincntrl").style.display="none";document.getElementById("h_signiniframe").src="";document.getElementById("h_signiniframe").innerhtml="";typeof $!="undefined"&&$(document).unbind("keyup",HideSignInControl);SendClickInfo("hrd_canceldialog");if(!window.removeEventListener)window.detachEvent("onresize",PositionHrd);else window.removeEventListener("resize",PositionHrd)}function onSignInDialogKeyUp(a){a.which==27&&HideSignInControl()}function hideAllDropDownMenus(){for(var b=document.querySelectorAll(".linkWithMenu.selected"),a=0;a<b.length;a++)b[a].className=b[a].className.replace(" selected","");for(var d=document.querySelectorAll(".dropDownMenu"),c=0;c<d.length;c++)d[c].style.display="none"}function toggleDropDownMenu(e,c,d){var b=document.getElementById(c),a=document.getElementById(d);if(b&&a)if(a.style.display=="inline")hideAllDropDownMenus();else{hideAllDropDownMenus();b.className+=" selected";a.style.display="inline";StopEventPropagation(e)}}function OnSwitcherTileMouseDown(){if(!window.addEventListener)return;var a=this;a.className+=" tilePressed"}function RestoreSwitcherTileVisuals(){var a=GetSwitcherTiles();if(a==null)return;for(var b=0;b<a.length;b++)a[b].className=a[b].className.replace(" tilePressed","")}function GetSwitcherTiles(){var a=document.getElementById("sw_tileList"),b=null;if(a!=null&&typeof a.getElementsByClassName!="undefined")b=a.getElementsByClassName("swTile");return b}function AttachSwitcherTileEvents(){if(!window.addEventListener)return;document.body&&document.body.addEventListener&&document.body.addEventListener("mouseup",RestoreSwitcherTileVisuals);var a=GetSwitcherTiles();if(a==null)return;for(var b=0;b<a.length;b++){a[b].addEventListener("mousedown",OnSwitcherTileMouseDown);a[b].addEventListener("dragstart",function(a){a.preventDefault()})}}window.onclick=hideAllDropDownMenus;window.addEventListener&&window.addEventListener("load",AttachSwitcherTileEvents);function HRDListener(d){var c=document.createElement("a"),b=document.createElement("a");c.href=g_hrdIframeUrl;b.href=d.origin;if(b.hostname!=c.hostname)return;if(!window.JSON||!window.JSON.parse)return;var a=JSON.parse(d.data);if(!a||!a.op){window.location=g_msaLoginUrl;return}switch(a.op){case"ShowNext":HandleShowNext(a);break;case"LaunchUrl":HandleLaunchUrl(a);break;case"CancelDialog":HideSignInControl();break;case"OnReady":HandleOnHrdReady(a);break;default:return}}function RegisterHRDListener(){if(!window.addEventListener)window.attachEvent("onmessage",HRDListener);else window.addEventListener("message",HRDListener)}function AppendOrReplaceQueryParameter(a,b,c){if(/^[^?#]*&/.test(a))return a;b=encodeURIComponent(b);c=encodeURIComponent(c);var d=new RegExp("(^[^#]*?[?&])"+b.replace(/[.*()]/g,"\\$1")+"(=.*?|)(&|#|$)","i");if(d.test(a))return a.replace(d,"$1"+b+"="+c+"$3");else{var e=/^[^#]*?\?/.test(a)?"&":"?";return a.replace(/(#|$)/,e+b+"="+c+"$1")}}function HandleShowNext(a){if(!a.nextScreen)return;var b="",d="";switch(a.nextScreen){case"0":b=g_signupUrl;d="hrd_signup";break;case"1":b=g_msaLoginUrl;d="hrd_signin";break;case"2":var e=g_orgIdLoginUrl;if(a.federationProvider=="microsoftonline.de"){var c=document.createElement("a");c.href=g_orgIdLoginUrl;c.href=c.href.replace(/login\.microsoftonline(.*?).com/,"login."+a.federationProvider);c.href=c.href.replace(/\.com/g,".de");e=c.href}else if(a.federationProvider!=null)e="https://portal."+a.federationProvider;else e=g_orgIdLoginUrl;b=e;d="hrd_orgid";break;case"3":b=g_msaPasswordResetUrl;d="hrd_resetpassword";break;default:return}if(a.emailAddress){var f=a.nextScreen=="2"&&!a.federationProvider?"login_hint":"username";b=AppendOrReplaceQueryParameter(b,f,a.emailAddress)}SendClickInfo(d);window.location=b}function PositionHrd(){if(typeof $!="undefined")if(!g_fullScreenHrd){var a=$("#h_signincntrl"),e=$("#h_bar"),d=e.offset().top+e.height(),b=$("#f_bar");a.css("top","50%");a.css("margin-top",-a.height()/2);if(a.offset().top<d){a.css("margin-top",0);a.css("top",d)}var c=a.offset().top+a.height();b.css("position","");b.css("top","");b.css("margin-top","");if(b.offset().top<c){b.css("position","absolute");b.css("top",c);b.css("margin-top","0")}}else $("body").css("overflow","hidden")}function HandleOnHrdReady(a){if(g_hrdTimeout!=null){window.clearInterval(g_hrdTimeout);g_hrdTimeout=null}if(typeof $!="undefined"){var b=$("#h_signincntrl"),c=$("#h_signiniframe");c.removeClass("iframeloading");if(!g_fullScreenHrd&&a.calcHeightPx&&a.calcHeightPx>b.height()){b.height(a.calcHeightPx);b.css("margin-top",-a.calcHeightPx/2);c.height(a.calcHeightPx)}PositionHrd();c.focus()}if(!window.addEventListener)window.attachEvent("onresize",PositionHrd);else window.addEventListener("resize",PositionHrd);SendClickInfo("hrd_hrdloaded");SetStaticAssetsFrameUrl()}function HandleLaunchUrl(a){if(!a.url)return;window.location=a.url}function hasCookie(c){for(var d=c+"=",b=document.cookie.split(";"),a=0;a<b.length;a++){var e=b[a].trim();if(e.indexOf(d)==0)return true}return false}var g_createNewClicked=false,g_getServerUserInfoCallFailed=false,g_createNewNavigated=false,g_showNavigateToTeamSiteDialog=false,g_teamSiteUrl="",g_spinnerHandle,g_prewarmAuthAlreadyRun=false,g_createNewNavigateStarted=false;function GetCreateNewReqsAndNavigateIfClicked(){if(g_authType=="OrgId"){if((typeof g_orgidDestinationUrl=="undefined"||!g_orgidDestinationUrl)&&!g_showNavigateToTeamSiteDialog){GetOrgIdDestinationUrl();return}if(typeof g_instantCreateNewIsEnabled!="undefined"&&g_instantCreateNewIsEnabled)if(typeof g_getFormDigestForInstantCreateNew!="undefined"&&g_getFormDigestForInstantCreateNew)if(!g_instantCreateNewTokenFailure){if(!FormDigestIsValid()){GetFormDigestForInstantCreateNew();return}}else g_instantCreateNewIsEnabled=false;if(!g_createNewClicked||ShouldWaitOnPrewarm()&&(typeof g_orgidAuthPreloadFinished=="undefined"||!g_orgidAuthPreloadFinished))if(typeof g_orgidShouldPrewarmAuth!="undefined"&&g_orgidShouldPrewarmAuth&&typeof g_orgidAuthPreloadLayoutsUrl!="undefined"&&g_orgidAuthPreloadLayoutsUrl&&typeof g_orgidAuthPreloadFrameUrl!="undefined"&&g_orgidAuthPreloadFrameUrl)if(!g_prewarmAuthAlreadyRun){SetPrewarmAuthFrameUrl();return}if(typeof g_instantCreateNewIsEnabled!="undefined")if(typeof g_orgidAuthPreloadFinished=="undefined"||!g_orgidAuthPreloadFinished)g_instantCreateNewIsEnabled=false}g_createNewClicked&&NavigateToCreateNewDocument()}function GetOrgIdDestinationUrl(){Diag.ULS.sendTraceTag(22906324,g_msoulscat_Wac_WebAppsPortal,Diag.ULSTraceLevel.info,"GetServerUserInfo: Requesting destinationUrl.");var a="GetServerUserInfo.ashx?auth=2&nf=1";if(typeof g_cid!="undefined"&&g_cid)a+="&pcid="+g_cid;typeof $!="undefined"&&$.ajax({url:a,type:"GET",dataType:"json",success:function(a,f,b){if(typeof a!="undefined"&&a&&typeof a.durl!="undefined"&&a.durl){var d=false;if(typeof a.isTeamSiteUrl!="undefined"&&a.isTeamSiteUrl.toLowerCase()=="true")d=true;Diag.ULS.sendTraceTag(22906325,g_msoulscat_Wac_WebAppsPortal,Diag.ULSTraceLevel.info,"GetServerUserInfo success.");if(d){g_showNavigateToTeamSiteDialog=true;g_teamSiteUrl=a.durl}else{g_orgidDestinationUrl=a.durl;GetCreateNewReqsAndNavigateIfClicked();return}GetCreateNewReqsAndNavigateIfClicked()}else{var e=null,c=null;if(typeof b!=="undefined"&&b){e=b.status;c=b.getResponseHeader("X-CorrelationId")}Diag.ULS.sendTraceTag(6936135,g_msoulscat_Wac_WebAppsPortal,Diag.ULSTraceLevel.info,"GetServerUserInfo [textStatus: {0}] [status:{1}] [CorrelationId: {2}]",f,e,c);OnGetServerUserInfoCallFailed()}},error:function(a,e,d){var c=null,b=null;if(typeof a!=="undefined"&&a){c=a.status;b=a.getResponseHeader("X-CorrelationId")}Diag.ULS.sendTraceTag(6936136,g_msoulscat_Wac_WebAppsPortal,Diag.ULSTraceLevel.error,"GetServerUserInfo [textStatus: {0}] [status:{1}] [errorThrown: {2}] [CorrelationId: {3}]",e,c,d,b);OnGetServerUserInfoCallFailed()},beforeSend:function(a){a.setRequestHeader("X-Key",g_canary)}})}function ShowNavigateToTeamSiteDialog(b){g_spinnerHandle&&clearTimeout(g_spinnerHandle);var c=document.getElementById("placesoverlay");c.className="overlay";var a=g_sessionIdString.format(g_sid);SetErrorHtml("b_dialogpanel",g_strK1ErrorHeader,g_strK1ErrorMessage,b,g_strK1TeamSiteButtonText,g_urlOfficeDotComHomePage,g_strK1OfficeDotComButtonText,a)}function OnGetServerUserInfoCallFailed(){if(g_createNewClicked)NavigateToErrorPage(3);else g_getServerUserInfoCallFailed=true}function OnGetFormDigestForInstantCreateNewFailed(){g_instantCreateNewTokenFailure=true;g_createNewClicked&&GetCreateNewReqsAndNavigateIfClicked()}function NavigateToErrorPage(b){var a=g_createNewErrorPage;if(typeof b!="undefined"&&b)a=AppendOrReplaceQueryParameter(a,"ec",b);a=AppendOrReplaceQueryParameter(a,"pcid",typeof g_cid!="undefined"?g_cid:"unknown");window.location.href=a}function CreateNewDocument(b,a){g_createNewClicked=true;if(typeof g_instantCreateNewIsEnabled!="undefined"&&g_instantCreateNewIsEnabled&&g_authType=="OrgId")if(!!a)g_instantCreateNewPath=a;if(!!b)g_createNewHandlerPath=b;ShowLoadingSpinnerOnPanel();if(g_getServerUserInfoCallFailed){NavigateToErrorPage(4);return}if(g_showNavigateToTeamSiteDialog){ShowNavigateToTeamSiteDialog(g_teamSiteUrl);return}if(g_authType=="OrgId")GetCreateNewReqsAndNavigateIfClicked();else NavigateToCreateNewDocument()}function ShowLoadingSpinnerOnPanel(){var a=document.getElementById("b_dialogpanel");a.innerHTML="";a.className+=" iframeloading";g_spinnerHandle=setTimeout(function(){if(g_createNewNavigated)NavigateToErrorPage(6);else NavigateToErrorPage(5)},g_createNewTimeout)}function NavigateToCreateNewDocument(){if(g_createNewNavigateStarted)return;g_createNewNavigateStarted=true;if(g_authType=="WindowsLiveId"&&!hasCookie("PPLState")||g_authType=="OrgId"&&!hasCookie("AADState")){Diag.ULS.sendTraceTag(7473307,g_msoulscat_Wac_WebAppsPortal,Diag.ULSTraceLevel.info,"User has signed out [PageCorrelation: {0}]",typeof g_cid!="undefined"?g_cid:"unknown");window.location.href=g_signedOutUrl;return}var a=g_createNewHandlerPath,b={};if(g_authType=="OrgId"&&g_orgidDestinationUrl&&g_orgidDestinationUrl.length>0)if(g_orgidAuthPreloadLayoutsUrl&&typeof g_instantCreateNewIsEnabled!="undefined"&&g_instantCreateNewIsEnabled){a=GetInstantCreateNewBaseUrl()+g_instantCreateNewPath+"&or=wacAppStartPages-instant&docliburl="+encodeURIComponent(g_orgidDestinationUrl);if(typeof g_getFormDigestForInstantCreateNew!="undefined"&&g_getFormDigestForInstantCreateNew)if(FormDigestIsValid())b.__REQUESTDIGEST=g_instantCreateNewToken}else{Diag.ULS.sendTraceTag(37828573,g_msoulscat_Wac_WebAppsPortal,Diag.ULSTraceLevel.info,"Using CreateNewDocument fallback flow.");a=g_createNewHandlerPath+"&or=wacAppStartPages&destinationUrl="+escape(g_orgidDestinationUrl)}b.Canary=g_canary;a=a+"&ct="+ +new Date;if(typeof g_cid!="undefined"&&g_cid)a=a+"&pcid="+g_cid;Diag.ULS.sendTraceTag(39105363,g_msoulscat_Wac_WebAppsPortal,Diag.ULSTraceLevel.info,"CreateNewDocument Clicked and sending request to host to create new document.");PostRequestToTargetUrl(a,b)}function PostRequestToTargetUrl(e,c){var a=document.createElement("form");a.setAttribute("method","POST");a.setAttribute("action",e);for(var d in c)if(c.hasOwnProperty(d)){var b=document.createElement("input");b.setAttribute("name",d);b.setAttribute("value",c[d]);b.setAttribute("type","hidden");a.appendChild(b)}document.body.appendChild(a);a.submit();g_createNewNavigated=true}function SetStaticAssetsFrameUrl(){typeof g_staticAssetUrl!="undefined"&&g_staticAssetUrl&&window.setTimeout(function(){var a=document.getElementById("preloadframe");if(a!=null)a.src=g_staticAssetUrl},1e3)}function SetPrewarmAuthFrameUrl(){Diag.ULS.sendTraceTag(22906326,g_msoulscat_Wac_WebAppsPortal,Diag.ULSTraceLevel.info,"Preauth: Attempting preauth.");g_prewarmAuthAlreadyRun=true;window.setTimeout(function(){var a=document.getElementById("prewarmauthframe");if(a!=null){if(typeof g_orgidShouldPrewarmAuth!="undefined"&&g_orgidShouldPrewarmAuth)a.onload=OnPrewarmLoaded;a.src=GetUserBaseUrl()+g_orgidAuthPreloadLayoutsUrl+g_orgidAuthPreloadFrameUrl}},1e3)}function GetInstantCreateNewBaseUrl(){return GetUserBaseUrl()+g_orgidAuthPreloadLayoutsUrl}function GetUserBaseUrl(){var a=g_orgidDestinationUrl.search(/documents\/?$/i);return a>0?g_orgidDestinationUrl.substr(0,a):g_orgidDestinationUrl}function ShouldWaitOnPrewarm(){return typeof g_orgidShouldWaitOnPrewarm!="undefined"&&g_orgidShouldWaitOnPrewarm?true:false}function OnPrewarmLoaded(){if(typeof g_orgidAuthPreloadFinished!="undefined"){g_orgidAuthPreloadFinished=true;Diag.ULS.sendTraceTag(22906327,g_msoulscat_Wac_WebAppsPortal,Diag.ULSTraceLevel.info,"Preauth: Finished loading.");GetCreateNewReqsAndNavigateIfClicked()}}function SetWarmupFrameUrl(){typeof g_dnsWarmupDelay!="undefined"&&typeof g_dnsWarmupUrls!="undefined"&&g_dnsWarmupUrls&&g_dnsWarmupUrls.length>0&&window.setTimeout(function(){for(var b=0;b<g_dnsWarmupUrls.length;b++){var a=document.createElement("iframe");a.style.display="none";a.sandbox="";document.body.appendChild(a);a.id="warmupiframe"+b;a.src=g_dnsWarmupUrls[b]}},g_dnsWarmupDelay)}var g_msoulscat_Wac_WebAppsPortal=349,g_loggingInitialized=false,g_errorLogged=false;function InitializeLogging(){Diag.ULS.setUlsHost(new Diag.UploadingUlsHost(g_sid,"/start/"+Diag.UploadingUlsHost.defaultRemoteUlsUrl));g_loggingInitialized=true;SendBrowserInfo()}function DisposeLogging(){Diag.ULS.get_host().dispose()}function SendClickInfo(b){if(typeof Diag!="undefined"){var a={};a.urlId=b;a.pageName=typeof g_PageName!="undefined"?g_PageName:"unknown";a.pageUrl=window.location.href;a.pageCorrelationId=typeof g_cid!="undefined"?g_cid:"unknown";Diag.ULS.sendTraceTag(6686497,g_msoulscat_Wac_WebAppsPortal,Diag.ULSTraceLevel.info,"{0}",a)}}function SendBrowserInfo(){if(typeof window.performance!="undefined"&&window.performance!=null){var a={};a.redir=window.performance.navigation.redirectCount;a.pageCorrelationId=typeof g_cid!="undefined"?g_cid:"unknown";Diag.ULS.sendTraceTag(7148097,g_msoulscat_Wac_WebAppsPortal,Diag.ULSTraceLevel.info,"{0}",a)}}function OnError(a){if(g_loggingInitialized){var b=g_errorLogged?Diag.ULSTraceLevel.verbose:Diag.ULSTraceLevel.error;Diag.ULS.sendTraceTag(7135579,g_msoulscat_Wac_WebAppsPortal,b,"{0}.\r\n{1}",a.message,a.stack);g_errorLogged=true}}if(window.addEventListener)window.addEventListener("error",OnError,false);else window.attachEvent("onerror"+event,OnError);function SetErrorHtml(o,p,m,n,k,l,j,i){var g=document.getElementById(o);g.innerHTML="";g.className="blurbpanel errorstart";g.setAttribute("role","main");var a=document.createElement("div");a.classList.add("blurbcontents");a.id="b_dialogcontents";g.appendChild(a);var h=document.createElement("div");h.className="blurbtitle mediumblurbtitlefont";h.id="b_dialogtitle";Utils.SetInnerText(h,p);a.appendChild(h);var e=document.createElement("div");e.className="blurbtagline taglinefont";e.id="b_taglinefont";Utils.SetInnerText(e,m);a.appendChild(e);var b=document.createElement("div");b.className="errorStartButtonRow";b.id="b_errorButtonRow";a.appendChild(b);var d=document.createElement("a");d.className="errorbutton primarybutton";d.id="b_errorLeftButton";d.setAttribute("href",n);Utils.SetInnerText(d,k);b.appendChild(d);var c=document.createElement("a");c.className="errorbutton secondarybutton";c.id="b_errorRightButton";c.setAttribute("href",l);Utils.SetInnerText(c,j);b.appendChild(c);var q=document.createElement("br");a.appendChild(q);var f=document.createElement("div");f.className="sessionIdRow";f.id="b_sessionIdRow";Utils.SetInnerText(f,i);a.appendChild(f)};