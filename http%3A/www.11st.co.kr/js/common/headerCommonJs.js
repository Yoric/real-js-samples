//====================[swfobject.js]
/**
 * SWFObject v1.5: Flash Player detection and embed -
 * http://blog.deconcept.com/swfobject/
 *
 * SWFObject is (c) 2007 Geoff Stearns and is released under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */
var HeaderComm = {};
var appVer=navigator.appVersion.substring(25,22);
if(typeof deconcept=="undefined"){var deconcept=new Object();}if(typeof deconcept.util=="undefined"){deconcept.util=new Object();}if(typeof deconcept.SWFObjectUtil=="undefined"){deconcept.SWFObjectUtil=new Object();}deconcept.SWFObject=function(_1,id,w,h,_5,c,_7,_8,_9,_a){if(!document.getElementById){return;}this.DETECT_KEY=_a?_a:"detectflash";this.skipDetect=deconcept.util.getRequestParameter(this.DETECT_KEY);this.params=new Object();this.variables=new Object();this.attributes=new Array();if(_1){this.setAttribute("swf",_1);}if(id){this.setAttribute("id",id);}if(w){this.setAttribute("width",w);}if(h){this.setAttribute("height",h);}if(_5){this.setAttribute("version",new deconcept.PlayerVersion(_5.toString().split(".")));}this.installedVer=deconcept.SWFObjectUtil.getPlayerVersion();if(!window.opera&&document.all&&this.installedVer.major>7){deconcept.SWFObject.doPrepUnload=true;}if(c){this.addParam("bgcolor",c);}var q=_7?_7:"high";this.addParam("quality",q);this.setAttribute("useExpressInstall",false);this.setAttribute("doExpressInstall",false);var _c=(_8)?_8:window.location;this.setAttribute("xiRedirectUrl",_c);this.setAttribute("redirectUrl","");if(_9){this.setAttribute("redirectUrl",_9);}};deconcept.SWFObject.prototype={useExpressInstall:function(_d){this.xiSWFPath=!_d?"expressinstall.swf":_d;this.setAttribute("useExpressInstall",true);},setAttribute:function(_e,_f){this.attributes[_e]=_f;},getAttribute:function(_10){return this.attributes[_10];},addParam:function(_11,_12){this.params[_11]=_12;},getParams:function(){return this.params;},addVariable:function(_13,_14){this.variables[_13]=_14;},getVariable:function(_15){return this.variables[_15];},getVariables:function(){return this.variables;},getVariablePairs:function(){var _16=new Array();var key;var _18=this.getVariables();for(key in _18){_16[_16.length]=key+"="+_18[key];}return _16;},getSWFHTML:function(){var _19="";if(navigator.plugins&&navigator.mimeTypes&&navigator.mimeTypes.length){if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","PlugIn");this.setAttribute("swf",this.xiSWFPath);}_19="<embed type=\"application/x-shockwave-flash\" src=\""+this.getAttribute("swf")+"\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\" style=\""+this.getAttribute("style")+"\"";_19+=" id=\""+this.getAttribute("id")+"\" name=\""+this.getAttribute("id")+"\" ";var _1a=this.getParams();for(var key in _1a){_19+=[key]+"=\""+_1a[key]+"\" ";}var _1c=this.getVariablePairs().join("&");if(_1c.length>0){_19+="flashvars=\""+_1c+"\"";}_19+="/>";}else{if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","ActiveX");this.setAttribute("swf",this.xiSWFPath);}_19="<object id=\""+this.getAttribute("id")+"\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\" style=\""+this.getAttribute("style")+"\">";_19+="<param name=\"movie\" value=\""+this.getAttribute("swf")+"\" />";var _1d=this.getParams();for(var key in _1d){_19+="<param name=\""+key+"\" value=\""+_1d[key]+"\" />";}var _1f=this.getVariablePairs().join("&");if(_1f.length>0){_19+="<param name=\"flashvars\" value=\""+_1f+"\" />";}_19+="</object>";}return _19;},write:function(_20){if(this.getAttribute("useExpressInstall")){var _21=new deconcept.PlayerVersion([6,0,65]);if(this.installedVer.versionIsValid(_21)&&!this.installedVer.versionIsValid(this.getAttribute("version"))){this.setAttribute("doExpressInstall",true);this.addVariable("MMredirectURL",escape(this.getAttribute("xiRedirectUrl")));document.title=document.title.slice(0,47)+" - Flash Player Installation";this.addVariable("MMdoctitle",document.title);}}if(this.skipDetect||this.getAttribute("doExpressInstall")||this.installedVer.versionIsValid(this.getAttribute("version"))){var n=(typeof _20=="string")?document.getElementById(_20):_20;n.innerHTML=this.getSWFHTML();return true;}else{if(this.getAttribute("redirectUrl")!=""){document.location.replace(this.getAttribute("redirectUrl"));}}return false;}};deconcept.SWFObjectUtil.getPlayerVersion=function(){var _23=new deconcept.PlayerVersion([0,0,0]);if(navigator.plugins&&navigator.mimeTypes.length){var x=navigator.plugins["Shockwave Flash"];if(x&&x.description){_23=new deconcept.PlayerVersion(x.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split("."));}}else{if(navigator.userAgent&&navigator.userAgent.indexOf("Windows CE")>=0){var axo=1;var _26=3;while(axo){try{_26++;axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+_26);_23=new deconcept.PlayerVersion([_26,0,0]);}catch(e){axo=null;}}}else{try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");}catch(e){try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");_23=new deconcept.PlayerVersion([6,0,21]);axo.AllowScriptAccess="always";}catch(e){if(_23.major==6){return _23;}}try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");}catch(e){}}if(axo!=null){_23=new deconcept.PlayerVersion(axo.GetVariable("$version").split(" ")[1].split(","));}}}return _23;};deconcept.PlayerVersion=function(_29){this.major=_29[0]!=null?parseInt(_29[0]):0;this.minor=_29[1]!=null?parseInt(_29[1]):0;this.rev=_29[2]!=null?parseInt(_29[2]):0;};deconcept.PlayerVersion.prototype.versionIsValid=function(fv){if(this.major<fv.major){return false;}if(this.major>fv.major){return true;}if(this.minor<fv.minor){return false;}if(this.minor>fv.minor){return true;}if(this.rev<fv.rev){return false;}return true;};deconcept.util={getRequestParameter:function(_2b){var q=document.location.search||document.location.hash;if(_2b==null){return q;}if(q){var _2d=q.substring(1).split("&");for(var i=0;i<_2d.length;i++){if(_2d[i].substring(0,_2d[i].indexOf("="))==_2b){return _2d[i].substring((_2d[i].indexOf("=")+1));}}}return "";}};deconcept.SWFObjectUtil.cleanupSWFs=function(){var _2f=document.getElementsByTagName("OBJECT");for(var i=_2f.length-1;i>=0;i--){_2f[i].style.display="none";for(var x in _2f[i]){if(typeof _2f[i][x]=="function"){_2f[i][x]=function(){};}}}};if(deconcept.SWFObject.doPrepUnload){if(!deconcept.unloadSet){deconcept.SWFObjectUtil.prepUnload=function(){__flash_unloadHandler=function(){};__flash_savedUnloadHandler=function(){};window.attachEvent("onunload",deconcept.SWFObjectUtil.cleanupSWFs);};window.attachEvent("onbeforeunload",deconcept.SWFObjectUtil.prepUnload);deconcept.unloadSet=true;}}if(!document.getElementById&&document.all){document.getElementById=function(id){return document.all[id];};}var getQueryParamValue=deconcept.util.getRequestParameter;var FlashObject=deconcept.SWFObject;var SWFObject=deconcept.SWFObject;

/*	SWFObject v2.2 <http://code.google.com/p/swfobject/>
is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
*/
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();

/*
 * flashcommon.js
 * ***************************************************************
 */
function FF_changeFlashSize(movieid, w, h)
{
	setDivSize(movieid, w,h);

    var swfmovie = document.getElementById(movieid);

	if(swfmovie)
	{
		if(w != null)
			swfmovie.setAttribute("width", w);

		if(h != null)
			swfmovie.setAttribute("height", h);
	}
}

function FF_gotoPage(pageUrl, target)
{
	// �ش� pageUrl ��η� target �̵��մϴ�.
	if(target == "_blank"){
		window.open(pageUrl);
	}else if(target == "_top") {
		top.location.href = pageUrl;
	}else if(target) {
		var newWindow = window.open(pageUrl, target);
		newWindow.focus();
	}else{
		location.href = pageUrl;
	}
}

function FF_gotoPageStat(statCode, pageUrl, target)
{
	doCommonStat(statCode);
	FF_gotoPage(pageUrl, target);
}

function FF_setCookie(key, value)
{
	if(value == null || value == "null")
		value = "";
	setCookie(key, value);
}

function FF_getCookie(key)
{
	return getCookie(key);
}

function FF_clearCookies()
{
	setCookie("f_movieCode", "");
	setCookie("f_cinemaCode", "");
	setCookie("f_cinemaTypeCode", "");
	setCookie("f_screenCode", "");
	setCookie("f_playDate", "");
	setCookie("f_playNo", "");
}

// ==================== [common.js]
// photo scroll ------------------------
function photoScrollWidth(idName,widthV)	{
	var photoScrollList=$ID("" + idName + "");
	var photoScrollEa = photoScrollList.getElementsByTagName("li");
	var photoScrollWidth	= photoScrollEa.length * widthV;
	photoScrollList.style.width = photoScrollWidth + "px";
}

function thumb_big(idName,imgName)	{}

function layerView(idName, code)	{
	Obj = $ID(idName);
	Obj.style.display="block";
	doCommonStat(code);
}

function layerHidden(idName)	{
	Obj = $ID(idName);
	Obj.style.display="none";
}

function layerView2(idName,T,L)	{
	Obj = $ID(idName);
	Obj.style.display= "block";
	Obj.style.top= T + "px";
	Obj.style.left= L + "px";
}

function layerObjView(idName) {
	var Obj = $ID(idName);
	Obj.style.display = "block";
}

function layerObjHide(idName) {
	var Obj = $ID(idName);
	Obj.style.display = "none";
}

function doLayerCheck(idName) {
	objLayer = $ID(idName);
	if ( objLayer.style.display == "block" ) {
		layerObjHide(idName);
	} else {
		layerObjView(idName);
	}
}

function layerViewPosition(idName, position) {
	Obj = $ID(idName);
	Obj.style.display="block";
	Obj.style.position=position;
}

function detailMore()	{}

function tabConView(idName,no,total)	{}

function balloon(){}

function balloonout(){}

function optionTabW(idName)	{}

function optionTab(idName,moveF,moveV)	{}

function optionTab770(idName,moveF,moveV)   {}

function optionTabW2(idName)	{
	var tabList=$ID("" + idName + "");
	var tabEa = tabList.getElementsByTagName("li");
	var tabWidth	= tabEa.length * 91;
	tabList.style.width = tabWidth + "px";
}

function number(n){}

function tab(id,su,n) {
	for(var i = 1; i <= su; i++) {
		obj_Con = $ID(id+i);
		if ( n == i ) {
			obj_Con.style.display = "block";
		} else {
			obj_Con.style.display = "none";
		}
	}
}

function gnbAutoHidden()	{}

function funcCheckIsLogin() {
	var arg = "TMALL_AUTH=";
	var alen = arg.length;
	var clen = document.cookie.length;
	var i = 0;
	var isLogin = false;

	while(i < clen){
		var j = i + alen;
		if(document.cookie.substring(i, j) == arg)
			isLogin = true;
			i = document.cookie.indexOf(" ", i) + 1;
		if(i == 0) break;
	}

	return isLogin;
}
HeaderComm.funcCheckIsLogin = function(){
	return funcCheckIsLogin();
}

// �̼����� ����(true�̸� �̼�������)
function funcCheckIsMinor() {
	var tmallIsMinor = false;
	authkey = getCookieTmall("TMALL_STATIC");
	if(authkey == "N"){
		// authkey�� N�̸� �̼�������
		tmallIsMinor = true;
	}
	return tmallIsMinor;
}

var CP_IS_AUTH;

if(!funcCheckIsLogin())
	CP_IS_AUTH =  false;
else
	CP_IS_AUTH =  true;


function sohoSearch(no,optionV)	{}

function agreePop(){}

function setPrdPoint(divId, ocbPoint, sPoint)	{}

function setPrdBonus(divId)	{}

// ���Կ� �ֱ�
function comparePrd(comparePrdNo) {}

function funcMoveToParent(param) {}

function doCommonTrim(str)	{
	try	{
		return str.replace(/(^ *)|( *$)/g, "");
	}	catch (ex)	{
		return str;
	}
}

function $ID(d, w) {
	if (w == null)	w = window;
	return w.document.getElementById(d);
}

function $NM(m, w) {
	if (w == null)	w = window;
	return w.document.getElementsByName(m);
}

function $VL(o) {
	return o.value;
}

var $URL = function()	{
	return {
		prd : function(n,pr)	{
		if(pr)
			return _GNB_CONTEXT_PATH_ + "/product/SellerProductDetail.tmall?method=getSellerProductDetail&prdNo=" + n+pr;
		else
			return _GNB_CONTEXT_PATH_ + "/product/SellerProductDetail.tmall?method=getSellerProductDetail&prdNo=" + n;
		}
		,
		plan : function(n)	{ return _GNB_CONTEXT_PATH_ + "/browsing/MallPlanDetail.tmall?method=getMallPlanDetail&planDisplayNumber=" + n; }
		,
		evt : function(i)	{ return _GNB_CONTEXT_PATH_ + "/event/event.page?evt=" + i; }
		,
		ctgr : function(d,n,c)	{
			var ct = "";
			if ( d == 3 )	{
				ct = "S";
			} else if ( d == 4 )	{
				ct = "M";
			}

			return _GNB_CONTEXT_PATH_
			+ "/browsing/DisplayCategory.tmall?method=getDisplayCategory" + d + "Depth&dispCtgrNo=" + n + "&dispCtgrCd=" + c
			+ ( ct != "" ? "&cateType=" + ct : "");
		}
	}
}();


/* Cookie ************************************************************** */
function getCookieTmall(str) {
	var binfo=document.cookie.split(";");
	var tmp="";
	for (var i=0; i<binfo.length; i++) {
		// Do Not find TMCookie
		var cKey = trim(binfo[i].substring(0,binfo[i].indexOf("=")));
		if( cKey == "TP" || cKey == "TD" || cKey == "TT" || cKey == "TM"  || cKey == "TW" ) continue;

		if (binfo[i].indexOf(str)>=0) {
			tmp=binfo[i].substring(binfo[i].indexOf("=")+1,binfo[i].length);
			break;
		}
	}
	return tmp;
}

function getCookie(name){
	return getCookieTmall(name);
}

function getCookieVal(offset){}

function setCookie (name, value, expires) {
  document.cookie = name + "=" + escape (value) + "; path=/; domain=.11st.co.kr; expires=" + expires.toGMTString();
}


/**
 * !! cookie form is shown below
 * cookieId=cookieName[|cookieValue]#cookieName[|cookieValue] !! cookie samples
 * TD=FOO1#FOO2|BAR2#FOO3|BAR3 TP=FOO|BAR#FOO_A|BAR_A#FOO_B#FOO_C
 * TT=TOAST_MKT_OBJNO_HIST|FALSE<*>F^5702091<@>[F^5702092<@>]
 *
 * Field Description ----- 1. COOKIE_ID_ARR - Array which contains string of
 * cookie id TP : Temporary TD : A Day TT : Ten Year 2. ckIdIndex - Index of
 * COOKIE_ID_ARR 0 : TP 1 : TD 2 : TT 3. cookieName : The Name of Cookie 4.
 * cookieValue : Value for the cookie 5. !! DO NOT INCLUDE "#" or "|" IN THE
 * NAME OR THE VALUE OF COOKIE
 *
 * Modified on 2nd Apr. 2010. jhjung
 */
var TMCookieUtil = function() {
    var COOKIE_ID_ARR = ["TP", "TD", "TT", "TM", "TW"]; // !DO NOT CHANGE SORT ORDER
    var HOST_DOMAIN = ".11st.co.kr";
    var TD_PERIOD = 1; // 1Day
    var TT_PERIOD = 365 * 10; // 10Year
    var TM_PERIOD = TD_PERIOD * 30; // 1Month
    var TW_PERIOD = TD_PERIOD * 7; // 1Week
    var CK_SP = "#"; // seperator for each sub cookies
    var VL_SP = "|"; // seperator for bewteen name of cookies and there value

    // strip sharp(#) on begining of string and end of string, also trim white
	// space
    String.prototype.stripSharp = function() {
        return this.replace(/^[\#\s]+|[\#\s]+$/g, "");
    }

    // trim white space
    String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, "");
    }

    /**
	 * Estimate whether the param value is empty or not
	 */
    function isEmpty(param) {
        if(!isNaN(param)) {
            param = param.toString();
        }
        if(param == null || param.trim() == "" || param.trim() == "undefined" || (typeof param == "undefined")) {
            return true;
        } else {
            return false;
        }
    }

    /**
	 * get expire date. period -> day
	 */
    function getExpireDate(period) {
        var date = new Date();
        date.setDate(date.getDate() + period);
        var nextDay = new Date(date.getFullYear(),date.getMonth(),date.getDate(), 0, 0, 0);
        return nextDay.toGMTString();
    }

    /**
	 * Create cookie with string value of sub cookie samples of newCookieStr
	 * "foo1|bar1#foo2#foo3#foo4|bar2" !! Cookie name and value string must be
	 * encode !! use encodeURIComponent()
	 */
    function createNewCookie(ckIdIndex, newCookieStr) {
        var cookieStr = "";
        var expireDate = "";
        if(!isEmpty(newCookieStr)) {
            cookieStr += COOKIE_ID_ARR[ckIdIndex] + "=" + encodeURIComponent(newCookieStr.stripSharp()) + ";";
            if(ckIdIndex == 1){
                expireDate = getExpireDate(TD_PERIOD);
            }else if(ckIdIndex == 2){
                expireDate = getExpireDate(TT_PERIOD);
            }else if(ckIdIndex == 3){
                expireDate = getExpireDate(TM_PERIOD);
            }else if(ckIdIndex == 4){
                expireDate = getExpireDate(TW_PERIOD);
            }
            if(!isEmpty(expireDate)) {
                cookieStr += " expires=" + expireDate + ";"
            }
            cookieStr += " domain=" + HOST_DOMAIN + "; path=/;"
            document.cookie = cookieStr;
        } else {
            // remove cookie, when there is no sub cookie at all
            document.cookie = COOKIE_ID_ARR[ckIdIndex] + "= " + "; expires=" + getExpireDate(-1) + "; domain=" + HOST_DOMAIN + "; path=/";
        }
    }

    /**
	 * get matched value from arr with specified seperator
	 */
    function getMatchedStr(strArr, searchStr, seperator) {
        if(strArr != null && strArr.length > 0 && !isEmpty(searchStr)) {
            for(var index = 0; index < strArr.length; index++) {
                var tempArr = strArr[index].trim().split(seperator);
                if(tempArr[0] == searchStr) {
                    return decodeURIComponent(tempArr[1].trim());
                }
            }
        }
        return "";
    }

    return {
        add : function(ckIdIndex, cookieName, cookieValue){
            /* add cookie */
            if(isEmpty(cookieName)) { return false; }
            var newCookieArr;
            if(isEmpty(cookieValue)) {
                // remove '#' from cookieName
                var regExsp = new RegExp("\\" + CK_SP, "g"); // RegExp =>
																// /\#/g
                newCookieArr = cookieName.replace(regExSp, "").trim().split(VL_SP);
            } else {
                // remove '#', '|' from cookieName and cookieValue
                var regExSp = new RegExp("\\" + CK_SP + "|" + "\\" + VL_SP, "g"); // RegExp
																					// =>
																					// /\#|\|/g
                newCookieArr = [cookieName.replace(regExSp, "").trim(), cookieValue.replace(regExSp, "").trim()];
            }
            var classCookieStr = ""; // whole cookie string (ex>
										// foo1#foo2|bar2)
            var newCookieStr = "";
            if(TMCookieUtil.isExistCookie(COOKIE_ID_ARR[ckIdIndex])) {
                // remove exists cookie and add new cookie with value if
				// possible
                classCookieStr = TMCookieUtil.getCookie(COOKIE_ID_ARR[ckIdIndex]);
                var subCookieArr = classCookieStr.split(CK_SP);
                for(var index = subCookieArr.length - 1; index >= 0; index--) {
                    if(subCookieArr[index].split(VL_SP)[0] == newCookieArr[0]) {
                        subCookieArr.splice(index, 1);
                    }
                }
                subCookieArr.push(newCookieArr.join(VL_SP));
                newCookieStr = subCookieArr.join(CK_SP);
            } else {
                // create new cookie with cookie class
                newCookieStr = newCookieArr.join(VL_SP);
            }
            // The value of newCookieStr will be encoded in function
			// 'createNewCookie'
            createNewCookie(ckIdIndex, newCookieStr);
        },
        clear : function(ckIdIndex){
            /* clear cookie - remove TD, TP, TT */
            createNewCookie(ckIdIndex, "");
        },
        remove : function(ckIdIndex, cookieName){
            /* remove name, value pair of sub cookie */
            if(isEmpty(cookieName)) { return false; }
            var CkCdValues = "";
            var delFlag = false;
            var classCookies = TMCookieUtil.getCookie(COOKIE_ID_ARR[ckIdIndex]); // TD=foo|bar#foo2|bar2#foo3#foo4|bar4...
            var subCookies = classCookies.split(CK_SP); // ["cookieName|cookieValue",
														// "foo|bar", "foo2",
														// ...]
            if(subCookies != null && subCookies.length > 0) {
                // remove matched cookie in reverse order
                for(var index = subCookies.length - 1; index >= 0; index--) {
                    if(subCookies[index].split(VL_SP)[0] == cookieName) {
                         subCookies.splice(index, 1);
                    }
                }
            }
            var splicedCookieStr = subCookies.join(CK_SP);
            // The value of newCookieStr will be encoded in function
			// 'createNewCookie'
            createNewCookie(ckIdIndex, splicedCookieStr);
            if(!TMCookieUtil.isExist(ckIdIndex, cookieName)){
                delFlag = true;
            }
            return delFlag;
        },
        isExistCookie : function(ckId){
            /* Estimate whether exists or not with inserted parameter */
            if(!isNaN(ckId)) {
                ckId = COOKIE_ID_ARR[ckId];
            }
            var cookieArr = document.cookie.split(";");
            if(cookieArr != null && cookieArr.length > 0) {
                for(var index = 0; index < cookieArr.length; index++) {
                    var tempArr = cookieArr[index].trim().split("=");
                    if(tempArr[0] == ckId) {
                        return true;
                    }
                }
            }
            return false;
        },
        isExist : function(ckIdIndex, cookieName){
            /* Find sub cookie name, if exist then return true */
            if(isEmpty(cookieName)) { return false; }
            var classCookieValues = TMCookieUtil.getCookie(COOKIE_ID_ARR[ckIdIndex]);
            var subCookieArr = classCookieValues.split(CK_SP);
            if(subCookieArr != null && subCookieArr.length > 0) {
                for(var index = 0; index < subCookieArr.length; index++) {
                    if(subCookieArr[index].split(VL_SP)[0] == cookieName) {
                        return true;
                    }
                }
            }
            return false;
        },
        getCookie : function(ckId){
            /* get string of sub cookies name,value pair */
            if(!isNaN(ckId)) {
                ckId = COOKIE_ID_ARR[ckId];
            }
            var cookieString = "";
            if(!isEmpty(ckId)) {
                var cookieArr = document.cookie.split(";");
                cookieString = getMatchedStr(cookieArr, ckId, "=").stripSharp();
            }
            return cookieString;
        },
        getSubCookie : function(ckIdIndex, cookieName){
            /* get value of sub cookie */
            if(isEmpty(cookieName)) { return false; }
            var classCookies = TMCookieUtil.getCookie(COOKIE_ID_ARR[ckIdIndex]);
            var subCookieValue = "";
            var subCookies = classCookies.split(CK_SP);
            if(subCookies != null && subCookies.length > 0) {
                for(var index = 0; index < subCookies.length; index++) {
                    if(subCookies[index].split(VL_SP)[0] == cookieName) {
                        var subCookie = subCookies[index].split(VL_SP);
                        if(subCookie.length > 1) {
                            subCookieValue = subCookie[1];
                            return subCookieValue;
                        }
                    }
                }
            }
            return subCookieValue;
        },
        allShowCookie : function(ckIdIndex){
            /* DO NOT USE THIS METHOD, USE 'getCookie' INSTEAD */
            var cookie = TMCookieUtil.getCookie(eval(ckIdIndex));
            return cookie;
        }
// ,
// subCkClearTemp : function(ckIdIndex, cookieName){
// /* DO NOT USE THIS METHOD, USE 'remove' INSTEAD */
// TMCookieUtil.remove(ckIdIndex, cookieName + "-");
// }
    };
}();

/* common Ajax ************************************************************** */
function callAjax( url, params, callBack ) {

	var pageRequest = false ; // ajax object�� ���� ����.

	if(window.XMLHttpRequest){                          // IE �̿�
	     pageRequest = new XMLHttpRequest();
	}else if(window.ActiveXObject){                     // IE����
	     pageRequest = new ActiveXObject("Microsoft.XMLHTTP");
	}

	if (!pageRequest && typeof XMLHttpRequest != 'undefined')
		pageRequest = new XMLHttpRequest();

	if (pageRequest){ // pageRequest�� true�� ��츸.
		try
		{
			var isAsynch = false ;
			if ( params != '' )	{
				pageRequest.open('POST', url, isAsynch) ;
				pageRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				pageRequest.setRequestHeader("Content-length", params.length);
				pageRequest.setRequestHeader("Connection", "close");

				pageRequest.send(params);
			} else {
				pageRequest.open('GET', url, isAsynch) ;
				pageRequest.send(null);
			}

			if (pageRequest.status==200 ) {
		 		var returnVal = pageRequest.responseText ;

				if ( callBack != '' ) {
					eval(callBack+"('"+returnVal+"')");
				} else {
					return returnVal ;
				}
	   		} else {
	   			var returnVal = 'FAIL' ;

			    if ( callBack != '' ) {
					eval(callBack+"('"+returnVal+"')");
				} else {
					return returnVal ;
				}
	   		}
		}
		catch (e)
		{
			var returnVal = 'FAIL' ;

		    if ( callBack != '' ) {
				eval(callBack+"('"+returnVal+"')");
			} else {
				return returnVal ;
			}
		}
	}
}

/* User Info ************************************************************** */

/* Url ******************************************************************** */
// ���� �̹��� ó��
function getCommonImgUrl(imgUrl)	{
	try	{
		var protocol = window.document.location.protocol;
		if ( protocol == "https:" )	{
			if ( _UPLOAD_IMG_PATH_!= "" && imgUrl.indexOf(_UPLOAD_IMG_PATH_) > -1 )	{
				return imgUrl.replace(_UPLOAD_IMG_PATH_, _SSL_UPLOAD_IMG_PATH_);
			} else if ( _IMG_PATH_ != "" && imgUrl.indexOf(_IMG_PATH_) > -1 )	{
				return imgUrl.replace(_IMG_PATH_, _SSL_IMG_PATH_);
			} else if ( _IMG_URL_ != "" && imgUrl.indexOf(_IMG_URL_) > -1 )	{
				return imgUrl.replace(_IMG_URL_, _SSL_IMG_URL_);
			} else if ( _UPLOAD_URL_ != "" && imgUrl.indexOf(_UPLOAD_URL_) > -1 )	{
				return imgUrl.replace(_UPLOAD_URL_, "https://image.11st.co.kr");
			} else if ( _CSS_URL_ != "" && imgUrl.indexOf(_CSS_URL_) > -1 )	{
				return imgUrl.replace(_CSS_URL_, _SSL_CSS_URL_);
			} else if ( imgUrl.indexOf("http:") > -1 )	{
				return imgUrl.replace("http:", protocol);
			}
		}	else if ( protocol == "http:" )	{
			if ( _SSL_UPLOAD_IMG_PATH_ != "" && imgUrl.indexOf(_SSL_UPLOAD_IMG_PATH_) > -1 )	{
				return imgUrl.replace(_SSL_UPLOAD_IMG_PATH_, _UPLOAD_IMG_PATH_);
			} else if ( _SSL_IMG_PATH_ != "" && imgUrl.indexOf(_SSL_IMG_PATH_) > -1 )	{
				return imgUrl.replace(_SSL_IMG_PATH_, _IMG_PATH_);
			} else if ( _SSL_IMG_URL_ != "" && imgUrl.indexOf(_SSL_IMG_URL_) > -1 )	{
				return imgUrl.replace(_SSL_IMG_URL_, _IMG_URL_);
			} else if ( _SSL_UPLOAD_URL_ != "" && imgUrl.indexOf(_SSL_UPLOAD_URL_) > -1 )	{
				return imgUrl.replace(_SSL_UPLOAD_URL_, _UPLOAD_URL_);
			} else if ( _SSL_CSS_URL_ != "" && imgUrl.indexOf(_SSL_CSS_URL_) > -1 )	{
				return imgUrl.replace(_SSL_CSS_URL_, _CSS_URL_);
			} else if ( imgUrl.indexOf("https:") > -1 )	{
				return imgUrl.replace("https:", protocol);
			}
		}
	} catch (e)	{}
	return imgUrl;
}
// ���ε� �̹��� SSL �и�
function getUploadImgUrl(imgUrl)	{
	try	{
		if ( imgUrl.indexOf("http:") > -1 || imgUrl.indexOf("https:") > -1 )	{
			return getCommonImgUrl(imgUrl);
		}

		if ( window.document.location.protocol == "https:" )	{
			return _SSL_UPLOAD_URL_ + imgUrl;
		}	else	{
			return _UPLOAD_URL_ + imgUrl;
		}
	} catch (e)	{
		return _UPLOAD_URL_ + imgUrl;
	}
}
//������ �̹��� SSL �и�
function getThumbnailImgUrl(imgUrl)	{
	try	{
		var protocol = window.document.location.protocol;
		if ( protocol == "https:" )	{

			//��ǰ�̹���
			if(imgUrl.indexOf(_UPLOAD_URL_) > -1){
				return imgUrl.replace(_UPLOAD_URL_, "https://image.11st.co.kr");

			//�� �� �̹���
			}else if(imgUrl.indexOf(_IMG_URL_) > -1){
				return imgUrl.replace(_IMG_URL_, _SSL_IMG_URL_);
			}

		}	else if ( protocol == "http:" )	{

			//��ǰ�̹���
			if(imgUrl.indexOf("https://image.11st.co.kr") > -1){
				return imgUrl.replace("https://image.11st.co.kr", _UPLOAD_URL_);

			//�� �� �̹���
			}else if(imgUrl.indexOf(_SSL_IMG_URL_) > -1){
				return imgUrl.replace(_SSL_IMG_URL_, _IMG_URL_);
			}
		}
	} catch (e)	{}
	return imgUrl;
}

/*
 * Product List
 * ********************************************************************
 */
// Ŭ���� ��ǰ ����
function dispClickedPrdBestSeller(style)
{
	dispClickedPrdNew(null, 26, style, 1);
}
function dispClickedPrdFavor(style)
{
	dispClickedPrdNew(null, 26, style, 2);
}
function dispClickedPrd(style)
{
	dispClickedPrdNew(null, 26, style, 0);
}
function dispClickedPrdRnk(rnk, style)
{
	dispClickedPrdNew(null, rnk, style, 0);
}
function dispClickedPrdImage()
{
	dispClickedPrdNew(true, null, null, 0);
}

/**
 * ���ν�Ƽ ��ǰ�����ÿ� ��ƿ
 */
var vm = {
	desc: "velocity product listing utility",

	// Ŭ���� ��ǰ ���� �̹�����
	clickedPrd: function(noMove){
		try	{
			var docHref = document.location.href;
			var prdNo = TMCookieUtil.getSubCookie(0, "CLICKED_PRDNO");
			if ((prdNo != null) && (prdNo != "")) {
				TMCookieUtil.remove(0, "CLICKED_PRDNO");

			} else {
				var index = docHref.indexOf("clickedPrdNo=");
				if (index != -1)
				{
					var temp = docHref.substring(index + 13);
					index = temp.indexOf("&");
					if (index != -1)
						prdNo = temp.substring(0, index);
					else
						prdNo = temp;
				}
			}

			var $dispObj = jQuery("#thisClick_" + prdNo);

			if ($dispObj.length > 0){
				$dispObj.html("<div class=\"click_wrap\"><div class=\"click_in\"><div class=\"c_hgroup\"><h4><span>Ŭ���� ��ǰ</span></h4></div></div></div>");
				if(noMove == null){
					document.location.href = "#thisClick_" + prdNo;
				}
			}
		} catch(e) {}
	},

	// Ŭ���� ��ǰ ���� ����Ʈ��
	clickedPrdList: function(noMove){
		try	{
			var docHref = document.location.href;
			var prdNo = TMCookieUtil.getSubCookie(0, "CLICKED_PRDNO");
			if ((prdNo != null) && (prdNo != "")) {
				TMCookieUtil.remove(0, "CLICKED_PRDNO");

			} else {
				var index = docHref.indexOf("clickedPrdNo=");
				if (index != -1)
				{
					var temp = docHref.substring(index + 13);
					index = temp.indexOf("&");
					if (index != -1)
						prdNo = temp.substring(0, index);
					else
						prdNo = temp;
				}
			}

			var $dispObj = jQuery("#thisClick_" + prdNo);

			if ($dispObj.length > 0){

				$dispObj.addClass("click_box");

				var $dispObj2 = jQuery("#box_title_" + prdNo);

				if($dispObj2.length > 0){
					$dispObj2.addClass("click_product");
					$dispObj2.html("Ŭ���� ��ǰ");
					if(noMove == null){
						document.location.href = "#thisClick_" + prdNo;
					}
				}
			}
		} catch(e) {}
	}
};

function dispClickedPrdNew(image, rnk, style, type)
{
	try
	{
		var prdNo = TMCookieUtil.getSubCookie(0, "CLICKED_PRDNO");
		if ((prdNo != null) && (prdNo != ""))
			TMCookieUtil.remove(0, "CLICKED_PRDNO");
		else
		{
			if (document.location.href.indexOf("click=Y") == -1)
				return;

			var index = document.location.href.indexOf("prdNo=");
			if (index != -1)
			{
				var temp = document.location.href.substring(index + 6);
				index = temp.indexOf("&");
				if (index != -1)
					prdNo = temp.substring(0, index);
				else
					prdNo = temp;
			}
		}

		if (setClickedPrdData(prdNo, image))
			return;
		if (image == true)
			return;

		if (rnk == undefined)
			rnk = 26;

		// Ŭ���� ��ǰ�� ������ ��ǰ���� �����ͼ� innerHtml�� �־��ش�.
		var param = "&prdNo=" + prdNo + "&index=" + rnk + "&style=" + style + "&type=" + type;

		var str = callAjax("/browsing/MainAjax.tmall?method=getMainClickPrd150ImgHTML", param, "");

		// Ŭ���� ��ǰ�� ������ ��ǰ���� �����ͼ� innerHtml�� �־��ش�.
		var clickedPrd = $ID("rank_" + rnk);

		if ((clickedPrd != undefined) && (clickedPrd != null))
		{
			var clickPrdElement = clickedPrd.parentNode;
			if ((str != "FALE") && (str != "FAIL") && (str != ""))
			{
				clickPrdElement.innerHTML = str.replace("<li>", "").replace("</li>", "");
				setClickedPrdData(prdNo, image);
			}
		}
	}
	catch(e) { }
}
function setClickedPrdData(prdNo, image)
{
	var dispObj = $ID("thisClick_" + prdNo);
	if (dispObj)
	{
		if ((image == null) || (image == ''))
			dispObj.innerHTML = "<a name='thisClickImg_" + prdNo + "'></a><div class='thisClick'><\/div><div class='thisClickImg'><\/div>";
		else
			dispObj.innerHTML = "<div class='thisClick'><\/div><div class='thisClickImg'><img name='thisClickImg_" + prdNo + "' src='" + _IMG_URL_ + "/img/browsing/bestseller/click_title.gif' alt='��� Ŭ���Ͻ� ��ǰ�Դϴ�.'/><\/div>";
		document.location.href = "#thisClickImg_" + prdNo;
		return true;
	}
	return false;
}

HeaderComm.setClickedPrd = {
	prdNo : '',
	setBorder : function() {
		var $prdObj = jQuery("#thisClick_" + this.prdNo);
		$prdObj.addClass('click_wrap');
		$prdObj.html('<a name="thisClickImg_' + this.prdNo + '"></a><div class="click_in"><div class="c_hgroup"><h4><span>Ŭ���� ��ǰ</span></h4></div></div>');
		document.location.href = "#thisClickImg_" + this.prdNo;
	},
	init : function() {
		this.prdNo = HeaderComm.getParameter('prdNo');
		if(this.prdNo != undefined) {
			this.setBorder();
		}
	}
};

/*
 * Ŭ���� ��ǰ ó�� : URL�� clickedPrdNo=[��ǰ��ȣ] �� ó��
 *
 *  options : {
 *		wrapPrefix : ���� Wrapper Prefix ��(default : thisClick_)
 *		wrapClassNm : border ó�� class ��(default : click_wrap)
 *		borderHtml : border ó���� �߰��� HTML
 *		moveMotion : Ŭ���� ��ǰ���� �̵��� motion ���� ����(default : true)
 *		callBackFnc : ��ó�� callback	(return value : ��ǰ���翩��)
 *	}
 */
HeaderComm.ClickedPrd = {
	prdNo : '',
	$wrapObj : '',
	existPrd : false, //��ǰ���翩��
	options : {
		wrapPrefix : 'thisClick_',
		wrapClassNm : 'click_wrap',
		borderHtml : '<div class="click_in"><div class="c_hgroup"><h4><span>Ŭ���� ��ǰ<\/span><\/h4><\/div><\/div>',
		moveMotion : true,
		callBackFnc : ''
	},
	// Border ��Ÿ�� ó��
	setStyle : function() {
		var _this = this;
		var _options = _this.options;

		if(_options.wrapClassNm != '') {
			_this.$wrapObj.addClass(_options.wrapClassNm);
		}
		if(_options.borderHtml != '') {
			_this.$wrapObj.html(_options.borderHtml);
		}
	},
	// ��ũ�� �̵�
	moveVertical : function moveVertical() {
		var _this = this;
		var _top = _this.$wrapObj.offset().top;
		var duration = 500;
		if(!_this.options.moveMotion) duration = 0;

		jQuery('html, body').animate( {scrollTop : _top}, duration );
	},
	setParameters : function(options) {
		for(var key in options) {
			this.options[key] = options[key];
		}

		this.prdNo = HeaderComm.getParameter('clickedPrdNo');
		if(this.prdNo == undefined) {
			this.prdNo = HeaderComm.getParameter('prdNo');
		}
		this.$wrapObj = jQuery("#" + this.options.wrapPrefix + this.prdNo);
		if(this.$wrapObj.size() > 0) {
			this.existPrd = true;
		}
	},
	init : function(options) {
		var _this = this;
		_this.setParameters(options);

		if(_this.existPrd) {
			_this.setStyle();
			_this.moveVertical();
		}

		if ( typeof(_this.options.callBackFnc) === 'function' ) {
			_this.options.callBackFnc(_this.existPrd);
		}
	}
};

HeaderComm.getParameter = function(key){
	try {
		var _param = document.location.search;
		if ( typeof _param !== 'undefined' && _param !== '' ) {
			_param = _param.substr(1);

			var _chkKey = key + '=';
			var _arrParam =  _param.split('&');

			for ( var idx = 0; idx < _arrParam.length; idx++ ) {
				if ( _arrParam[idx].indexOf(_chkKey) === 0 ) {
					return _arrParam[idx].replace(_chkKey, '');
				}
			}
		} else {
			return '';
		}
	} catch (ex) {
		return '';
	}
};

/* Log ******************************************************************** */
// ��ũ��Ʈ ���� logging
function jsLog(msg)	{
	return;
	try	{
		// msg ó��;
		var curUrl = document.location.href;
		var fnNm = "top";
		if ( arguments.caller != null )	{
			// �Լ� ȣ��
			fnNm = arguments.caller.callee;
		}
	} catch (ex)	{}
}

/*
 * Stat And Click Action
 * ********************************************************************
 */
// goCommonUrl

function goCommonUrl(url, target)	{
	try
	{
		if (target == null || target == "")	{
			target = top;
		}
		if (url != null && url != "")	{
			if (target == '_blank')
				window.open(url,target);
			else
				target.location.href = url;
		}
	}
	catch (ex)
	{
		window.top.location.href = url;
	}
}

// stat
function doCommonStat(code)	{
	try	{
		if ( code != null && code != "" )	{
			var	i =	new	Image();
			var protocol = window.document.location.protocol;
			var statDomain = _GNB_CONTEXT_PATH_;

			if ( protocol == "https:" )	{
				statDomain =  statDomain.replace("http:", protocol);
			}

			i.src =	statDomain + "/a.st?url=" + code;
			s_objectID = code;

		}
	} catch (ex)	{}
}

function doCommonStatCtgrNo(code, ctgrNo)	{
	try	{
		if ( code != null && code != "" )	{
			var	i =	new	Image();
			var protocol = window.document.location.protocol;
			var statDomain = _GNB_CONTEXT_PATH_;

			if ( protocol == "https:" )	{
				statDomain =  statDomain.replace("http:", protocol);
			}

			i.src =	statDomain + "/a.st?url=" + code + "&ctgrNo=" + ctgrNo;
			s_objectID = code;

		}
	} catch (ex)	{}
}

var StringBuffer = function() {
    this.buffer = new Array();
};
StringBuffer.prototype.append = function(str) {
    this.buffer[this.buffer.length] = str;
};
StringBuffer.prototype.toString = function() {
    return this.buffer.join("");
};
function autoCompleteClickLog(userQuery, realQuery, areaClfCd, areaSubClfCd, listSortSeq, listNum){
	try	{
		var param = new StringBuffer();
		param.append("userQuery=" + encodeURI(userQuery));
		param.append("&realQuery=" + encodeURI(realQuery));
		param.append("&areaClfCd=" + areaClfCd);
		param.append("&areaSubClfCd=" + areaSubClfCd);
		param.append("&svcClfCd=01");
		param.append("&listSortSeq=" + listSortSeq);
		param.append("&listNum=" + listNum);
		
		if ( param != null && param != "" )	{
			var	i =	new	Image();
			var protocol = window.document.location.protocol;
			var statDomain = _GNB_CONTEXT_PATH_;

			if ( protocol == "https:" )	{
				statDomain =  statDomain.replace("http:", protocol);
			}
			
			i.src =	statDomain + "/log.st?" + param.toString();
			
		}
	} catch (ex)	{}
	
}

// setComClickedPrd
function setComClickedPrd(prdNo)	{
	if ( prdNo != null && prdNo != "" )	{
		TMCookieUtil.add(0, "CLICKED_PRDNO", prdNo);
	}
}

// goCommonPrdDtl
function goCommonPrdDtl(prdNo,target){
	goCommonUrl(_PRODUCT_DETAIL_URL_ + prdNo, target);
}

// stat goStatUrl
function goStatUrl(url, code, target)	{
	doCommonStat(code);
	goCommonUrl(url, target);
}

function goStatUrlCtgrNo(url, code, target, ctgrNo)	{
	doCommonStatCtgrNo(code, ctgrNo);
	goCommonUrl(url, target);
}

// stat goStatPrdDtl
function goStatPrdDtl(prdNo, code, target)	{
	doCommonStat(code);
	goCommonPrdDtl(prdNo,target);
}


// stat goStatPrdDtl + ad trc
function goStatPrdDtlTrc(prdNo, code, target, typGugn, areaGubn, trcNo)	{
	stck( typGugn, areaGubn, trcNo);
	goStatPrdDtl(prdNo, code, target);
}

// stat goStatPrdUrl
function goStatPrdUrl(url, prdNo, code, target)	{
	doCommonStat(code);
	setComClickedPrd(prdNo);
	if ( url != null && url != "" )	{
		if ( url.indexOf("?") > -1 )	{
			goCommonUrl(url+"&prdNo="+prdNo, target);
		} else	{
			goCommonUrl(url+"?prdNo="+prdNo, target);
		}
	}
}

// stat goStatPrdUrl + ad trc
function goStatPrdUrlTrc(url, prdNo, code, target, typGugn, areaGubn, trcNo)	{
	stck( typGugn, areaGubn, trcNo);
	goStatPrdUrl(url, prdNo, code, target);
}
//One Target Popup
var targetPopup;
function goStatPopUp(url, code, popupNm)	{
	doCommonStat(code);
	if(targetPopup == null || targetPopup == undefined){
		targetPopup = window.open(url, popupNm);
	}else{
		targetPopup = window.open(url, popupNm);
		targetPopup.focus();
	}
}
// stat goStatPrdUrl
// func = "fnNm,arg1,arg2"... -> execute fnNm(arg1,arg2)
function doStatFunc(func, code)	{}

// ms.song, 2011.09.29
// Ŭ����� (spceNo�� ������ Ŭ����踦 ��´�.)
var stat = {
	desc : {
		 DC: "����ī�װ� ���� ���"
		,AC: "�߰�����ī�װ� ���� ���"
		,BC: "�귣�������� ī�װ� ���� ���(���� �߰� ��û ����)"
		,EP: "������/�ڳ�(����, ����/�̺�Ʈ ������ �� ������ ��������)"
		,DT: "DT ������(dt_disp_ctgr ���̺��� ����ϴ� ������)"
	},

	goUrl : function(spceNo, type, url, target, ctgrNo){
		this.track(spceNo, type, ctgrNo);

		if(arguments.length > 2){
			goCommonUrl(url, target);
		}
	},

	track : function(spceNo, type, ctgrNo){
		var strCtgrParam =  ctgrNo ? "&CNO=" + ctgrNo : "";
		doCommonStat(spceNo + "&TP=" + type + strCtgrParam);
	},

	Impression : function(param) {
		try {
			param = param.replace(/&amp;/gi,"&");
			var url = "http://st.11st.co.kr/a.st?type=I" + param;
			var img = new Image();
			img.src = url;
		} catch (e) {}
	}
};

/*
 * ���� Tracking Code
 */
var isValidTrcStrLength = function( str )
{
	// ���� üũ
	var result = true;
	if( str.length < 6 )
	{
		result = false;
	}
	return result;
}
var isValidTrcStrChar = function( str )
{
	// �����ڵ� ���� üũ
	var result = true;
	var tempVal;
	var loop = str.length;
	for( var i=0; i < loop; i++ )
	{
		tempVal = str.charCodeAt( i );

		if( tempVal < 48 || 122 < tempVal )
		{

			result = false;
			break;
		}

		if(  57 < tempVal && tempVal < 65 )
		{
			result = false;
			break;
		}

		if(  90 < tempVal && tempVal < 97 )
		{
			result = false;
			break;
		}
	}

	return result;
}
var isValidTrcStrTrcCode = function( str )
{
	// Ʈ��ŷ �ڵ� üũ
	var result = true;
	if( str.substr( 5, 2 ) == "-1" ||
		str.substr( 5, 1 ) == "0" )
	{
		result = false;
	}

	return result;
}
var isValidTrcCode = function( code )
{
	var result = true;
	if( code.length < 1 ||
		code.substr( 0, 2 ) == "-1" ||
		code.substr( 0, 1 ) == "0" )
	{
		result = false;
	}

	if( !isValidTrcStrChar( code ) )
	{
		result = false;
	}

	try
	{
		if( isNaN( code ) )
		{
			result = false;
		}
	}
	catch( exp )
	{
		result = false;
	}
	return result;
}
// ��ûȭ �����󸮺� �̿�
function getVideoShareUrl()
{
	if(opener != undefined){
		if(opener.top != undefined){
			return opener.top.href;
		} else {
			return opener.href;
		}
	}else if(parent != undefined){
		if(parent.top != undefined){
			return parent.top.location.href;
		}else{
			return parent.location.href;
		}
	}else{
		if(top != undefined){
			return top.href;
		}else{
			return window.href;
		}
	}
}
// .png24 �� ���� ��ũ��Ʈ
function setPng24(obj)
{
	obj.width=obj.height=1;
	obj.className=obj.className.replace(/\bpng24\b/i,'');
	obj.style.filter ="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+ obj.src +"',sizingMethod='image');"
	obj.src='http://s.011st.com/img/common/blank.gif';
	return '';
}
/**
 * ������ ����ġ
 */
var _dsSeverMode = true;

// ���� �̵� �Լ�
// ��ǰ��
function goPrd(prdNo, target,pr)
{
	var url = $URL.prd(prdNo,pr);
	goCommonUrl(url, target);
}
function newPrd(prdNo,pr)
{
	goPrd(prdNo,'_blank',pr);
}
function topPrd(prdNo)
{
	goPrd(prdNo, top);
}
// ��ȹ��
function goPlan(planNo, target)
{
	var url = $URL.plan(planNo);
	goCommonUrl(url, target);
}
function newPlan(planNo)
{
	// ���븮���� ��ȹ�� �̿��� URL������ �̵���
	if(planNo.indexOf("http://") > -1){
		goCommonUrl(planNo, '_blank');
	}else{
		goPlan(planNo, '_blank');
	}
}
function topPlan(planNo)
{
	goPlan(planNo, top);
}
// �̺�Ʈ
function goEvt(evtId, target)
{
	var url = $URL.evt(evtId);
	goCommonUrl(url, target);
}
function newEvt(evtId)
{
	goEvt(evtId, '_blank');
}
function topEvt(evtId)
{
	goEvt(evtId, top);
}
// ī�װ�
function goCtgr(depth, ctgrNo, ctgrCd, param, target)
{
	var url = $URL.ctgr(depth, ctgrNo, ctgrCd) + param;
	goCommonUrl(url, target);
}
function newCtgr(depth, ctgrNo, ctgrCd, param)
{
	goCtgr(depth, ctgrNo, ctgrCd, param, '_blank');
}
function topCtgr(depth, ctgrNo, ctgrCd, param)
{
	goCtgr(depth, ctgrNo, ctgrCd, param, top);
}
function checkAlliance()
{
	var url = window.document.location.search;
	var index = url.indexOf("pcAlly=Y");

	if (index != -1)
		return true;

	return false;
}
// Cache ������ ���� �� ���ڿ� ���� TimeStamp�� �ٿ��� ��ȯ�Ѵ�.
function appendTimeStamp(source){
	var delimiter = "&"
	if(typeof(source) === "undefined" || source === ""){
		delimiter = "?", source = "";
	}

	return source + delimiter + "noCache=" + (new Date()).getTime();
}

function skinChagne(n) {}
// ==================== [gnb.js]
/**
 * * 1. �Լ�
 * ***************************************************************************************
 */
function gifSetCookie( name, value, expiredays ) {}
function deleteCookie(cookieName)	{
	  var expireDate = new Date();
	  var domain = "www.11st.co.kr";
	  if(cookieName != null && cookieName == "TMALL_MY_IMGSTOP"){
		  domain = "11st.co.kr";
	  }
	  expireDate.setDate(expireDate.getDate()-1);
	  document.cookie = cookieName + "= " + "; path=/; domain="+domain+";  expires=" + expireDate.toGMTString() + ";";
}
function checkImageStop(n) {}
// 2009.03.12 ȸ�� ���� ��ũ ���� ===========================
/**
 * �������� cookie ���� �ҷ��´�. �Ϲ� ��Ű�� ��� paramName�� ��Ű�� ���� ��Ű�� ��� authParamName�� ������Ű����
 * �ѱ��. callBack�� call back script function��. callBack function�� argument�� ��Ű����
 * �ѱ��.
 *
 * paramName, authParamName �� ���� �ϳ��� �Ķ���ͷ� �ѱ��.(��Ÿ������ ����ؾ���.)
 */
function getSeverCookieVal( paramName, authParamName, callBack ) {
	var url = "http://www.11st.co.kr/register/checkCookie.tmall" ;

	if ( window.document.location.protocol == "https:" )	{
		url = "https://www.11st.co.kr/register/checkCookie.tmall" ;
	}

	var params = "method=getCookieVal&param="+paramName+"&authParam="+authParamName ;
	callAjax( url, params, callBack ) ;

}
/**
 * * 2. ȸ��/�α��� ���� ��ũ/�׼�
 * **************************************************************************************
 */
function getAuthGubun() {
	getSeverCookieVal( '', 'gubun', 'goMemberInfoPageByGubun' ) ;
}
function goMemberInfoPagesAfter() {
	getSeverCookieVal( '', 'type', 'goMemberInfoPageByType' ) ;
}
function goMemberInfoPages()	{
	var loc = top.location ;
	loc.href = "https://www.11st.co.kr/register/memInfoEditForm.tmall?method=getMemberInfo&protocol=https" ;
}
function goMemberWithdrawPages()	{
	var loc = top.location ;
	loc.href = "https://www.11st.co.kr/register/withdrawLimitCondChk.tmall?method=withdrawLimitCondChk&CHOICEMENU=F03&isSSL=Y&protocol=https" ;
}
function goMemberInfoPageByType( returnVal ) {
	if ( returnVal == '01' ) { // ����
		goFrontMemberInfoPage() ;
	} else if ( returnVal == '02' ) { // ����
		getAuthGubun() ;
	} else {
		goSOMemberInfoPage() ;
	}
}
function goMemberInfoPageByGubun( returnVal ) {
	if ( returnVal == '01' ) { // ����
		goFrontMemberInfoPage() ;
	} else {	// �����.
		goSOMemberInfoPage() ;
	}
}
function goFrontMemberInfoPage(code) {
	goStatUrl("https://www.11st.co.kr/register/memInfoEditForm.tmall?method=getMemberInfo&protocol=https",code);
}
function goSOMemberInfoPage() {
	var contentURL = encodeURIComponent("https://soffice.11st.co.kr/register/SellerInfoEdit.tmall?method=sellerInfoEdit");
	var url = "http://soffice.11st.co.kr/Index.tmall?contentURL="+contentURL;
	window.open( url , '','' ) ;
}
// �α���
function login(code, url)	{
	var retUrl 	= encodeURIComponent(document.location.href);
	var xFrom 	= "";
	if ( retUrl == _GNB_CONTEXT_PATH_ + "/html/main.html" )	{
		xFrom = "main^gnb";
	}
	if(url != undefined && url != null && url != "") {
		retUrl = encodeURIComponent(url);
	}
	goStatUrl(_LOGIN_TARGET_URL_+"/login/Login.tmall?returnURL=" + retUrl + "&xfrom=" + xFrom, code);
}
// �α׾ƿ�
function logout(code, url)	{
	var retUrl 	= encodeURIComponent(document.location.href);
	var xFrom 	= "";
	if ( retUrl == _GNB_CONTEXT_PATH_ + "/html/main.html" )	{
		xFrom = "main^gnb";
	}
	if(url != undefined && url != null && url != "") {
		retUrl = encodeURIComponent(url);
	}
	try{SCP_INIT.stop();}catch(e){};
	goStatUrl(_GNB_CONTEXT_PATH_+"/login/Logout.tmall?xfrom=" + xFrom + "&returnURL=" + retUrl, code);
}
// ȸ������
function join(code)	{
	goStatUrl(_GNB_CONTEXT_PATH_ + "/register/memberSubscribeOneIDForm.page",code);
}
// ȸ������
function myinfo(code)	{
	goStatUrl(_GNB_CONTEXT_PATH_+'/register/memInfoEditForm.tmall?method=getMemberInfo&protocol=https&xfrom=main^gnb', code);
}
// My tMall
function mymall()	{}
// ��ٱ���
function keep(code)	{
	goStatUrl(_GNB_CONTEXT_PATH_+'/cart/CartAction.tmall?method=getCartList&xfrom=main^gnb',code);
}
// ������
function c_center()	{}
// ��ǰ���
function item()	{}
// ������
function seller()	{}
function chap(code)	{
	if (CP_IS_AUTH)
	{
		var url = 'http://chatping.11st.co.kr/Chatping/ChatpingAgreement.tmall';
		chatping = window.open(url, 'chatping', 'width=700,height=600,top=10,left=10,scrollbars=no,dependent=yes,status=no,resizable=yes');
	}
	else
		openLogin(1);
	doCommonStat(code);
}

// ���� �÷���
function Popup()
{
	alert('����� �����Դϴ�.');
}

// �˻�
function r_search(search_by, search_word)	{
	alert(search_by+': '+search_word);
}

// �ڿ���˻�
function f_search()	{
     var gnbFormObj = document.forms["GNBSearchForm"];
     var keyword = gnbFormObj.naturalKwd.value;

     if ( keyword == "" ) {
           alert("�˻�� �Է��ϼ���.");
     } else {
  	   goStatUrl("http://search.11st.co.kr/SearchEmotionAction.tmall?method=getSearchEmotion&targetTab=P&isGnb=Y&kwd=" + keyword);
     }
}

function shortcutPopup() {
	window.open('http://www.11st.co.kr/ocx/pop_direct.jsp','shortcutPopup','width=250,height=200,left=250,top=140,resizable=no,scrollbars=no');
}

// 11TALK �� ä��â
function open11Talk() {
    if(!funcCheckIsLogin()) {
        openLogin(5, "directLogin");
        return;
    } else {
        directLogin();
    }
}

function directLogin() {
    var url = 'http://www.11st.co.kr/toc/bridge.tmall?method=chatPage';
        window.open(url, 'open11Talk', 'width=482, height=800, toolbar=no, location=no, status=no, menubar=no, scrollbars=no, status=no, resizable=yes');
}

/**
 * * 3. UI ����
 * **************************************************************************************
 */
// ����
function displayPopup(url, width, height)	{
	window.open(url,'popup','width='+width+',height='+height+',top=100,left=100,scrollbars=no');
}

// ����Ʈ ������ �� ���� ���� �̸� ����
function setGnbChanel(renew){
	try{
		var url = document.URL;
		if (url.indexOf("beauty.11st.co.kr") != -1 || url.indexOf("scinic.11st.co.kr") != -1){
			var l = $ID("UtiL_GnB_L");
			$ID("lUtilBeauty").className = $ID("lUtilBeauty").className +"_on";
			$ID("lUtil11st").innerHTML = '11����';
		}else if (url.indexOf("tour.11st.co.kr") != -1){
			var l = $ID("UtiL_GnB_L");
			$ID("lUtilTour").className = $ID("lUtilTour").className +"_on";
			$ID("lUtil11st").innerHTML = '11����';
		}else if (url.indexOf("www.11st.co.kr/mart11st/") != -1 || url.indexOf("www.11st.co.kr/html/martMain.html") != -1){
			jQuery("#lUtilMart").html('<strong>��Ʈ</strong>');
		}else if (url.indexOf("www.11st.co.kr/vertical/Mart") != -1 || url.indexOf("www.11st.co.kr/html/martMain.html") != -1){
			$ID("lUtilMart").className = $ID("lUtilMart").className +"_on";
			$ID("lUtil11st").innerHTML = '11����';
		}else if (url.indexOf("ticket.11st.co.kr") != -1){
			$ID("lUtilTicket").className = $ID("lUtilTicket").className +"_on";
			$ID("lUtil11st").innerHTML = '11����';
		}

	} catch (e) {}
}

// GNB ȸ�� ����
function setGnbMember()	{}
// GNB ȸ�� ����
function setGnbLogInArea(renew, isLogin)	{}

// �˻��� ��� ����
function clearAdUrl(formObj){
	try {
		var $adUrl = jQuery("#adUrl");
		if($adUrl.val() !== ""){
			var $ackKwd = jQuery("#AKCKwd");
			$ackKwd.removeClass("placetx");
			$ackKwd.val("");
			$adUrl.val("");
		}
	} catch(e) {}
}
function naSearch()	{}
function changeTriangleImage(n){}
// GNB Left ��� ���� ����
function setGnb3LfBnr(){}
function setGnbLRBnr(aId, arrUrl, arrImg){}
// GNB Left ��� ���� ���� + Ad Tracking
function setGnb3LfBnrTrc( typGubn, areaGubn ){}
function setGnbLRBnrTrc(aId, arrUrl, arrImg, typGubn, areaGubn, arrTrc){}
// scrolling �� ctgr_sub layer üũ
function initCtgrSubLayPop() {}
function setDivSize(cate, w, h)	{
	if( cate=='CategoryNavigation' ) {
		_w=w;
		_h=h;
      if (appVer==6.0) {
          if (_w > 304) {
              $ID("ifrmSubCtgrAll").style.width  = _w + "px";
              $ID("ifrmSubCtgrAll").style.height = _h + "px";
              _isShowCtgrSub = true;
          } else {
              $ID("ifrmSubCtgrAll").style.width  = "304px";
              $ID("ifrmSubCtgrAll").style.height = "0px";
              _isShowCtgrSub = false;
          }
      }
	}
}
function headSel(no,optionV)	{
	obj_sel=$ID("headSel_" + no);
	obj_opt=$ID("headSelO_" + no)
	obj_sel.value=optionV;
	obj_opt.style.display="none";
}

function zIndex(n,n2) {}

// ī�װ� ����Ʈ �ڽ� ���̾� �ʱ�ȭ
function layerChkHidden() {}

function setSubKwd(scrpWgtCd){}

function setTourSubKwd(code){}

function setSubKwdRolling(curIdx){}
function setSubKwdRolling2(curIdx){}
// �ڵ��ϼ� Backgroud Iframe ó��
function _initDivAutoKWD(size) {
	try {

		if (navigator.userAgent.indexOf("MSIE 6")>-1 && navigator.userAgent.indexOf("MSIE 7")<0) {

			size = size.replace("px","");
			size = size - 18;
			size = size+"px";

      	if (!$ID("AKCIfrmBG"))
      	{
      		var ie6_ifrm = document.createElement("iframe");

				ie6_ifrm.setAttribute("id", "AKCIfrmBG")
				ie6_ifrm.style.position = "absolute";
				ie6_ifrm.style.top = "30px";
				ie6_ifrm.style.left = "2px";
				ie6_ifrm.style.opacity = "0";
				ie6_ifrm.style.filter = "alpha(opacity=0)";
				ie6_ifrm.style.width = "344px";
				ie6_ifrm.style.height = size;
				ie6_ifrm.style.zIndex = "-1";
				ie6_ifrm.src = "/html/blank.html";

				$ID("AKCDiv").appendChild(ie6_ifrm); // IE
      	} else {
      		$ID("AKCIfrmBG").style.height = size;
      	}
      }
	} catch(e) {
	}
}
function setSubCtgrNavi_v2() {}
/**
 * * 5. GNB ī�װ�
 * **************************************************************************************
 */
function getGnbCtgr(level, ctgrNo, ctgrNm, ctgrCd, selClass, renew, ctgrUrl)	{
	level = parseInt(level);

	var url = "";
	var flag = true;
	var ctgrHtml = "";

	var ocb		= [""
	       		   , "/browsing/CashbagStreet.tmall?method=showCashbagStreetMain"
	       		   , "/browsing/CashbagStreet.tmall?method=showCashbagStreetSub&dispCtgrNo="
	       		   , "/browsing/CashbagStreet.tmall?method=getBrandPage&dispCtgrNo="
	       		   , "/browsing/CashbagStreet.tmall?method=getBrandPage&dispCtgrNo="
	       		   ];

	if (ctgrCd.indexOf("371") > -1)	{
		url = ocb[level];
	}	else	{
		url = $URL.ctgr(level, ctgrNo, ctgrCd);
		flag = false;
	}

	if ( flag && level > 1 )	{
		if ( level == 2 )	{
			url += ctgrNo + "&dispCtgrCd=" + ctgrCd;
		}	else if ( level == 3 )	{
			url += ctgrNo + "&dispCtgrCd=" + ctgrCd + "&cateType=S";
		}	else	{
			url += ctgrNo + "&dispCtgrCd=" + ctgrCd + "&cateType=M";
		}
	}

	if(ctgrUrl && ctgrUrl != "null"){
		url = ctgrUrl;
	}
	
	if (renew) {
		ctgrHtml = "<a href=\"" + url + "\" data-log-actionid-label=\"category\" data-log-body=\"{'btn_name':'" + ctgrNm + "','content_no':'" + ctgrNo + "','category_no':'" + ctgrNo + "','content_type':'CATEGORY'}\" onClick=\"rakeLog.sendRakeLog(this);headSel('" + level + "','" + ctgrNm + "');ga('send', 'event', '�߼Ҽ�ī�װ�', '��/��/���з� ������', 'ī�װ� �׺���̼�');\" >";
		if (selClass=="on") {
			ctgrHtml += "<em>"+ctgrNm+"</em>";
		}else{
			ctgrHtml += ctgrNm;
		}
		ctgrHtml += "</a>";
	}else {
		ctgrHtml ="<a href=\"" + url + "\" onClick=\"headSel('" + level + "','" + ctgrNm + "');ga('send', 'event', '�߼Ҽ�ī�װ�', '��/��/���з� ������', 'ī�װ� �׺���̼�');\" class=\"" + selClass + "\">" + ctgrNm + "</a>";
	}

	return ctgrHtml;
}
function getGnbCtgrG(level, ctgrNo, ctgrNm, ctgrCd, selClass)	{
	level = parseInt(level);

	var url = "";
	var flag = true;

	var global	= [""
	          	   , "http://globalshopping.11st.co.kr/global/GlobalAction.tmall?method=globalMain"
	          	   , "http://globalshopping.11st.co.kr/global/GlobalCategoryAction.tmall?method=globalMCtgr&dispCtgrNo="
	          	   , "http://globalshopping.11st.co.kr/global/GlobalCategoryAction.tmall?method=globalSCtgr&dispCtgrNo="
	          	   , "http://globalshopping.11st.co.kr/global/GlobalCategoryAction.tmall?method=globalSCtgr&dispCtgrNo="
	          	   ];

	var ocb		= [""
	       		   , "/browsing/CashbagStreet.tmall?method=showCashbagStreetMain"
	       		   , "/browsing/CashbagStreet.tmall?method=showCashbagStreetSub&dispCtgrNo="
	       		   , "/browsing/CashbagStreet.tmall?method=getBrandPage&dispCtgrNo="
	       		   , "/browsing/CashbagStreet.tmall?method=getBrandPage&dispCtgrNo="
	       		   ];

	if ( ctgrCd.indexOf("192") == 0 )	{
		url = global[level];
	}	else if (ctgrCd.indexOf("371") > -1)	{
		url = ocb[level];
	}	else	{
		url = $URL.ctgr(level, ctgrNo, ctgrCd);
		flag = false;
	}

	if ( flag && level > 1 )	{
		if ( level == 2 )	{
			url += ctgrNo + "&dispCtgrCd=" + ctgrCd;
		}	else if ( level == 3 )	{
			url += ctgrNo + "&dispCtgrCd=" + ctgrCd + "&cateType=S";
		}	else	{
			url += ctgrNo + "&dispCtgrCd=" + ctgrCd + "&cateType=M";
		}
	}
	return "<div class='InCateTxt'><a href=\"" + url + "\" class=\"" + selClass + "\">" + ctgrNm + "</a></div>";
}

function getGnbCtgrUrl(level, ctgrNo, ctgrCd)	{
	level = parseInt(level);

	var url = "";
	var flag = true;

	var global	= [""
	          	   , "http://globalshopping.11st.co.kr/global/GlobalAction.tmall?method=globalMain"
	          	   , "http://globalshopping.11st.co.kr/global/GlobalCategoryAction.tmall?method=globalMCtgr&dispCtgrNo="
	          	   , "http://globalshopping.11st.co.kr/global/GlobalCategoryAction.tmall?method=globalSCtgr&dispCtgrNo="
	          	   , "http://globalshopping.11st.co.kr/global/GlobalCategoryAction.tmall?method=globalSCtgr&dispCtgrNo="
	          	   ];

	var ocb		= [""
	       		   , "/browsing/CashbagStreet.tmall?method=showCashbagStreetMain"
	       		   , "/browsing/CashbagStreet.tmall?method=showCashbagStreetSub&dispCtgrNo="
	       		   , "/browsing/CashbagStreet.tmall?method=getBrandPage&dispCtgrNo="
	       		   , "/browsing/CashbagStreet.tmall?method=getBrandPage&dispCtgrNo="
	       		   ];

	if ( ctgrCd.indexOf("192") == 0 )	{
		url = global[level];
	}	else if (ctgrCd.indexOf("371") > -1)	{
		url = ocb[level];
	}	else	{
		url = $URL.ctgr(level, ctgrNo, ctgrCd);
		flag = false;
	}

	if ( flag && level > 1 )	{
		if ( level == 2 )	{
			url += ctgrNo + "&dispCtgrCd=" + ctgrCd;
		}	else if ( level == 3 )	{
			url += ctgrNo + "&dispCtgrCd=" + ctgrCd + "&cateType=S";
		}	else	{
			url += ctgrNo + "&dispCtgrCd=" + ctgrCd + "&cateType=M";
		}
	}

	return url;
}

function getBGnbCtgr(level,ctgrNm,selClass,ct1,ct2,br,ct3,renew)	{
	level = parseInt(level);
	var url = "javascript:goBrdList('"+ct1+"','"+ct2+"'";
	var ctgrHtml = "";

	if(!br)
		url+= ");"
	else{
		url+=",'"+br+"'"
		if(ct3)
			url+=",'"+ct3+"'"
		url+=");"
	}
	if (renew) {
		ctgrHtml = "<a href=\"" + url + "\" onClick=\"headSel('" + level + "','" + ctgrNm + "');\" >";
		if (selClass=="on") {
			ctgrHtml += "<em>"+ctgrNm+"</em>";
		}else{
			ctgrHtml += ctgrNm;
		}
		ctgrHtml += "</a>";
	}else {
		ctgrHtml ="<a href=\"" + url + "\" onClick=\"headSel('" + level + "','" + ctgrNm + "');\" class=\"" + selClass + "\">" + ctgrNm + "</a>";
	}

	return ctgrHtml;
}

function onMouseOverLayer(idName){}

/**
 * * 7. inc_footer_data.js ���� �̵�
 * **************************************************************************
 */
/* header ���� �κ� */
if ( typeof(isLeftBnnr) == "undefined" )		var isLeftBnnr = false;
if ( typeof(isWingBnnr) == "undefined" )		var isWingBnnr = false;
if ( typeof(isToastBnnr) == "undefined" )		var isToastBnnr = false;
if ( typeof(isToastBnnrAct) == "undefined" )	var isToastBnnrAct = false;
if ( typeof(isPopUnder) == "undefined" )		var isPopUnder = false;
/* header ���� �κ� */
var toastBnnrState = 0;
var totCnt = 7;				// 2011.12.12 �佺Ʈ��� : total count(�佺Ʈ��� �ִ� ���� Ƚ����
							// �������ݴϴ�. 5������ 7���� ����) - �� ����
var _browser 	= navigator.userAgent.toLowerCase();
var isIE = false;
var isIE6 = false;
var isIE7 = false;
var isIE8 = false;
var isIE9 = false;
var isIE10 = false;
var isFireFox = false;
var isOpera = false;
var isSafari = false;
var isChrome = 0;

var IS_OVER_1024 = false;
var WBMINUS=0;

var WBTopPosition=180;	// Default Top Position
var WBTopPosition2=0;
var WBHeight=0;
var WBWidth=0;
var SwfWidth=270;

if(screen.width > 1024){
	IS_OVER_1024 = true;
	WBMINUS = 0;
}

if (_browser.indexOf('msie') != -1)	{
	isIE = true;
	if (_browser.indexOf('msie 9') != -1)
		isIE9 = true;
	else if (_browser.indexOf('msie 8') != -1)
		isIE8 = true;
	else if (_browser.indexOf('msie 7') != -1)
		isIE7 = true;
	else if (_browser.indexOf('msie 10') != -1)
		isIE10 = true;
	else if (_browser.indexOf('msie 6') != -1)
		isIE6 = true;
}	else	{
	if (_browser.indexOf('firefox') != -1)
		isFireFox = true;
	else if (_browser.indexOf('opera') != -1)
		isOpera = true;
	else if (_browser.indexOf('chrome') != -1)
		isChrome = 1;	
	else if (_browser.indexOf('safari') != -1)
		isSafari = true;
}

function openLoginLayer(type, formName, targetUrl, width, height, scroll) {}

function openLoginClose(){}

function writeForm() {}

function createHidden(n,v) {}

function getContextPath(){}

// ��ȸ�� �α��ο���
function funcIsNonAuth() {
	var arg = "TMALL_NON_AUTH=";
	var alen = arg.length;
	var clen = document.cookie.length;
	var i = 0;

	while(i < clen){
		var j = i + alen;
		if(document.cookie.substring(i, j) == arg) {
			return true;
		}
		i = document.cookie.indexOf(" ", i) + 1;
		if(i == 0) break;
	}
	return false;
}

function openLogin(type, formName, targetUrl, width, height, scroll, refresh, noNonMem) {
	// targetUrl =
	// '/community/AuthShoppingInfoAction.tmall?method=getContentsReporting&contNo=11303&contDclObjClfC=D01&memNM=�ѱ�'

	var url = "";
	try {
		url = _LOGIN_TARGET_URL_;
	} catch ( ex )	{
		url = "http://www.11st.co.kr";
	}
	url += '/login/PopupLogin.tmall?type='+type+'&formName='+formName+'&width='+width+'&height='+height+'&scroll='+scroll+'&refresh='+refresh+'&targetUrl='+encodeURIComponent ( encodeURIComponent(targetUrl))+'&domain='+document.domain+'&noNonMem='+noNonMem;
	// ��ȸ�� �α��� ������ ��쿡�� parameter �� �߰��Ѵ�
	if( funcIsNonAuth() ) {
		url += '&authMethod=nonAuth';
	}

	var protocol = window.document.location.protocol;

  // Header JS Include
  if ( protocol == "https:" ) {
  	url += '&protocol=https';
  }

	/*
	 * if(type == '4') str =
	 * 'width=400,height=550,resizable=no,scrollbars=no,left=100,top=20'; else
	 * str = 'width=400,height=350,resizable=no,scrollbars=no,left=100,top=20';
	 * return window.open(url, 'login', str);
	 */
	cw=screen.availWidth; // ȭ�� �ʺ�
	ch=screen.availHeight; // ȭ�� ����
	if(type == '4') {
		sw=750;// ��� â�� �ʺ�
		sh=515;// ��� â�� ����
	}else if(type == '6'){
		sw=750;// ��� â�� �ʺ�
		sh=515;// ��� â�� ����
	}else{
		sw=750;// ��� â�� �ʺ�
		sh=515;// ��� â�� ����
	}

	ml=(cw-sw)/2;// ��� �������� â�� x��ġ
	mt=(ch-sh)/2;// ��� �������� â�� y��ġ

	return window.open(url, 'login', 'width='+sw+',height='+sh+',top='+mt+',left='+ml+',scrollbars=no,status=no');
}

function openLoginAdults(type, formName, targetUrl, width, height, scroll, refresh, noNonMem) {
	var url = "";
	try {
		url = _LOGIN_TARGET_URL_;
	} catch ( ex )	{
		url = "https://login.11st.co.kr";
	}
	url += '/login/PopupLogin.tmall?age19=Y&type='+type+'&formName='+formName+'&width='+width+'&height='+height+'&scroll='+scroll+'&refresh='+refresh+'&targetUrl='+encodeURIComponent ( encodeURIComponent(targetUrl))+'&domain='+document.domain+'&noNonMem='+noNonMem;
	// ��ȸ�� �α��� ������ ��쿡�� parameter �� �߰��Ѵ�
	if( funcIsNonAuth() ) {
		url += '&authMethod=nonAuth';
	}

	cw=screen.availWidth; // ȭ�� �ʺ�
	ch=screen.availHeight; // ȭ�� ����
	if(type == '4') {
		sw=750;// ��� â�� �ʺ�
		sh=515;// ��� â�� ����
	}else if(type == '6'){
		sw=750;// ��� â�� �ʺ�
		sh=515;// ��� â�� ����
	}else{
		sw=750;// ��� â�� �ʺ�
		sh=515;// ��� â�� ����
	}

	ml=(cw-sw)/2;// ��� �������� â�� x��ġ
	mt=(ch-sh)/2;// ��� �������� â�� y��ġ

	return window.open(url, 'login', 'width='+sw+',height='+sh+',top='+mt+',left='+ml+',scrollbars=no,status=no');
}

function checkNum(obj, value) {

  var regExp = /[^0-9]+/g;

  if(regExp.test(value)) {

      alert("'����' �� �Է� �����մϴ�.");

      var returnStr = "";

      for(var i = 0; i < value.length; i++) {
          if(value.charAt(i) >= '0' && value.charAt(i) <= '9') {
              returnStr += value.charAt(i);
          }
      }

      obj.value = returnStr;
      obj.focus();
  }
}

// ==================== [partnerHeaderInfo.js]
function getPartnerCookieVal(offset){
	var endstr = document.cookie.indexOf(";", offset);
	if(endstr == -1)
		endstr = document.cookie.length;
	return unescape(document.cookie.substring(offset, endstr));
}

// ���޻� �ڵ� ȹ��
function getPartnerCookie() {
	var arg = "PARTNER_CD=";
	var alen = arg.length;
	var clen = document.cookie.length;
	var i = 0;

	while(i < clen){
		var j = i + alen;
		if(document.cookie.substring(i, j) == arg)
			return getPartnerCookieVal(j);
			i = document.cookie.indexOf(" ", i) + 1;
		if(i == 0) break;
	}
	return null;
}


// ���޻� �ڵ� ȹ��
function getXsiteDetailCookie() {
	var arg = "XSITE_DETAIL=";
	var alen = arg.length;
	var clen = document.cookie.length;
	var i = 0;

	while(i < clen){
		var j = i + alen;
		if(document.cookie.substring(i, j) == arg)
			return getPartnerCookieVal(j);
			i = document.cookie.indexOf(" ", i) + 1;
		if(i == 0) break;
	}
	return null;
}

function getCallLoc() {

	if (TMCookieUtil.isExist(0, "CALL_LOC")){
		return TMCookieUtil.getSubCookie(0, "CALL_LOC");
	}

	return null;
}

var partnerHeaderInfo = '';
var partnerHeaderHeight = 0;

var nPartnerCookieValue = getPartnerCookie();
var benepiaDomain;

var encode = "euckr";
if (document.URL.indexOf("buy.11st.co.kr/cart") > -1 || document.URL.indexOf("buy.11st.co.kr/pay") > -1) {
	encode = "utf";
}

var protocol = "http://";
if(location.href.indexOf("https://") > -1 ) {
    protocol = "https://";
}

try {
	if ( nPartnerCookieValue != '' && window._VIEW_PARTNER_HEADER != false ) {
		if(  nPartnerCookieValue == '1023' || nPartnerCookieValue == '1038' || nPartnerCookieValue == '1153'
				|| nPartnerCookieValue == '1154' || nPartnerCookieValue == '1155'
			     ) {   // OCB(SK������) Header ó��
            var today = new Date();
		  partnerHeaderInfo = '<script language="javascript" src="http://cashbagmall.okcashbag.com/mall/cTop411st.js?noCache=' + today.getFullYear() + (today.getMonth()+1) + today.getDate() + today.getHours() + '" charset="EUC-KR"></script>';
		  partnerHeaderHeight = 67;
		}else if(  nPartnerCookieValue == '1073' || nPartnerCookieValue == '1151' || nPartnerCookieValue == '1152' ) {   // ����ī��
		  partnerHeaderInfo = '<script type="text/javascript" src="http://hyundaicard.com/js/common/outlink_header_hc.js"></script> ';
		  partnerHeaderHeight = 75;
		}else if(  nPartnerCookieValue == '1205' || nPartnerCookieValue == '1222') {   // �ƽþƳ�
			partnerHeaderInfo = '<script type="text/javascript" src="'+protocol+'flyasiana.com/C/pc/js/partnerHeader/partnerHeader_'+ encode +'.js?mn='+encodeURIComponent("11����")+'&code=SKM&logoYn=Y"></script>';
			partnerHeaderHeight = 81;
		}else if(  nPartnerCookieValue == '1214' || nPartnerCookieValue == '1252' ) {   // ����ī��
			partnerHeaderInfo = '<link rel="stylesheet" href="https://allthat.shinhancard.com/common/css/partners4.css" /> '
				  + '<script type="text/javascript" src="https://allthat.shinhancard.com/common/js/partner3.js"></script>'
				  + '<script type="text/javascript" src="https://allthat.shinhancard.com/alhsec/ALHFW057N/ALHFW057R01.shc?type=A028"></script>';
			partnerHeaderHeight = 81;
		}else if(  nPartnerCookieValue == '1226' && encode == "euckr") {   // �Ｚī��
			partnerHeaderInfo = '<script type="text/javascript" src="http://static12.samsungcard.com/js/mallinmall/cml/partner/fo/cooper_e_11st.js" charset="EUC-KR"></script>';
			partnerHeaderHeight = 81;
		}else if(  nPartnerCookieValue == '1261') {   // �������ձ�������
			partnerHeaderInfo = '<script type="text/javascript" src="http://www.myasset.com/js/11st/tongyang_header.js" charset="EUC-KR"></script>';
			partnerHeaderHeight = 81;
		}else if(  nPartnerCookieValue == '1342') {   // �ϳ�SKī��
			partnerHeaderInfo = '<script type="text/javascript" src="http://www.hanacard.co.kr/js/shopping_wa.js" charset="EUC-KR"></script>';
			partnerHeaderHeight = 68;
		}else if(  nPartnerCookieValue == '1008') {   // ����Ʈ���̾�
			partnerHeaderInfo = '<script type="text/javascript" src="http://www.bb.co.kr/js/bb/bb.front.simpleheader.js"></script>';
			partnerHeaderHeight = 65;
		}else if(  nPartnerCookieValue == '1371' || nPartnerCookieValue == '1383' || nPartnerCookieValue == '1384') {   // �ѱ�����
			partnerHeaderInfo = '<iframe id="tmall_partner_k" src="http://www.kftaplus.com/common/top0.asp" frameborder="0" scrolling="no" style="width:100%;height:40px;margin:0 0;padding:0 0;"></iframe>';
			partnerHeaderHeight = 40;
		}else if(  nPartnerCookieValue == '1404' || nPartnerCookieValue == '1405' || nPartnerCookieValue == '1472'
			 || nPartnerCookieValue == '1527' || nPartnerCookieValue == '1528' || nPartnerCookieValue == '1614' || nPartnerCookieValue == '1615') {   // �����Ǿ�

            var regExp = new RegExp("http:[/]{2}[0-9a-zA-Z.;\-]*", "");
            var benepiaDomain = TMCookieUtil.getSubCookie(0, "PARTNER_REFERER");

            benepiaDomain = benepiaDomain.replace(/%3A/gi, ":").replace(/%2F/gi, "/").replace(/%3F/gi, "?").replace(/%3D/gi, "=").replace(/%26/gi, "&");

            try{
                    benepiaDomain = (benepiaDomain).match(regExp);
            }catch(e){}
            partnerHeaderInfo = '<script type="text/javascript" src="http://test01.benepia.co.kr/bene11st.jsp?benepiaDomain='+benepiaDomain+'"></script>';
            partnerHeaderHeight = 56;
		}else if(  nPartnerCookieValue == '1442') {   // KB����ī��
			partnerHeaderInfo = '<script type="text/javascript" src="https://lifes.kbcard.com/cxl/js/pc2018/common/js/partner_gnb_A.js" charset="EUC-KR"></script>';
			partnerHeaderHeight = 115;
		}else if(  nPartnerCookieValue == '1707' && encode == "euckr"){	//�ϳ��ε帲
			if(protocol == "https://"){
                partnerHeaderInfo = '<script type="text/javascript" src="https://shop.dreamx.com/html/cpGNB/redir_ssl.js" charset="EUC-KR"></script>';
				partnerHeaderHeight = 64;
			}else{
				partnerHeaderInfo = '<script type="text/javascript" src="http://shop.dreamx.com/html/cpGNB/redir.js" charset="EUC-KR"></script>';
				partnerHeaderHeight = 64;

			}
		}
	}
} catch (e) {}

if(partnerHeaderInfo != '') document.write(partnerHeaderInfo);

// ==================== [searchCommon.js]
/* [searchCommon.js] */
/**
 * �˻� GNB javascript
 *
 * /js/common/type_check.js �ʿ�!!
 */
/*
 * GNB �޺��ڽ��� ��� action, method ����
 */
function setSearchTarget( code, gubun ) {
	
	var gnbFormObj = document.forms["GNBSearchForm"];
	if(gubun == "f") {
		gnbFormObj = document.forms["FooterSearchForm"];
	}
	var actionStr = "http://search.11st.co.kr/SearchPrdAction.tmall";
	var method = "getTotalSearchSeller";

	if(gnbFormObj.semanticFromGNB) {
		gnbFormObj.semanticFromGNB.value = "";
	}

	//����ڵ� ���� �����ڵ�
	var areaCodePre = HeaderGnb.makeGnb.areaCodePre;
	// Start 2010.11.24 �˻� ���� �� ���� Ƚ�� ����
	if (gnbFormObj.gnbTag) {
		if(code == "MO" ){	 // ����11����
			gnbFormObj.gnbTag.value = "MO";
		} else if(code == "SC" ){	 // ��ü�˻�
			gnbFormObj.gnbTag.value = "SC";
		} else if(code == "SL" ){	 // �Ǹ��� �˻�
			gnbFormObj.gnbTag.value = "SL";
		} else if ( code == "TOUR11ST" ) {// ���� 11����
			gnbFormObj.gnbTag.value = "TR";
		} else if ( code == "SEMANTIC" ) {// �ø�ƽ �˻�
			gnbFormObj.gnbTag.value = "SE";
		} else if ( code == "TICKET" ) {// Ƽ�� �˻�
			gnbFormObj.gnbTag.value = "TK";
		} else if ( code == "MODEL" ) {// ���ݺ�
			gnbFormObj.gnbTag.value = "MD";
		} else if ( code == "CONTENTS" ) {//���θ���
			gnbFormObj.gnbTag.value = "CT";
		} else { // ���հ˻� (T)
			gnbFormObj.gnbTag.value = "TO";
		}
	}
	// End 2010.11.24 �˻� ���� �� ���� Ƚ�� ����

	if( code == "T") {	// ���հ˻�
		doCommonStat(areaCodePre + "GN0301");
	}else if( code == "N"){	// ��ǰ��ȣ
		doCommonStat(areaCodePre + "GN0302");
	}else if (code == "SL"){	// �Ǹ���
		doCommonStat(areaCodePre + "GN0303");
	}else if (code == "MODEL"){	// ���ݺ�
		doCommonStat(areaCodePre + "GN0304");
	}else if (code == "SEMANTIC"){	// �ø�ƽ�˻�
		doCommonStat(areaCodePre + "GN0305");
	}else if (code == "CONTENTS"){	//���θ���
		doCommonStat(areaCodePre + "GN0306");
	}else if (code == "SC"){	// ��ü�˻�
		doCommonStat("B0306");
	}else if (code == "MO"){	// ����11����
		doCommonStat(areaCodePre + "GN0307");
	}else if (code == "TOUR11ST"){	// ����11����
		doCommonStat(areaCodePre + "GN0308");
	}else if (code == "TICKET"){	// Ƽ��11����
		doCommonStat(areaCodePre + "GN0309");
	}


	if ( code == "M" ) {	// ��ǥ��ǰ
		actionStr = "http://search.11st.co.kr/SearchPrdAction.tmall";
		gnbFormObj.prdType.value = "M";
		method = "getMasterPrd";
	} else if ( code == "S" ) {	// ����
		actionStr = "http://search.11st.co.kr/SearchSellerShopAction.tmall";
		method = "getSearchSellerShop";
		gnbFormObj.pageSize.value = "5";
	} else if ( code == "D" ) {
		actionStr = "http://search.11st.co.kr/SearchInvoiceNoAction.tmall";	// ������ȣ�˻�
																			// action
																			// ����
		method = "";
	} else if ( code == "CH" ) { // ��Ƽ 11����
		actionStr = "http://beauty.11st.co.kr/TotalSearch.do";
		method = "";
		gnbFormObj.category.value = "cherrya";
		gnbFormObj.cmd.value = "productList";
	} else if ( code == "MO" ) { // ���� 11����
		actionStr = "http://book.11st.co.kr/TotalSearch.do";
		method = "";
		gnbFormObj.category.value = "morning365";
		gnbFormObj.cmd.value = "productList";
	} else if ( code == "SC" ) { // ��ܿ� ����
		actionStr = "http://www.11st.co.kr/browsing/specialcorner/enjoyShopping.tmall";
		method = "tSearch";
	} else if ( code == "TOUR11ST" ) {// ���� 11����
		actionStr = "http://tour.11st.co.kr/tour/TourSearchAction.tmall";
		method = "search";
	} else if ( code == "TOUR" ) {// ����
		actionStr = "http://tour.11st.co.kr/tour/TourSearchAction.tmall";
		method = "search";
	} else if ( code == "OVERSEAS" ) {// �ؿ�ȣ��
		actionStr = "http://tour.11st.co.kr/tour/TourSearchAction.tmall";
		method = "search";
	} else if ( code == "DOMESTIC" ) {// ��������
		actionStr = "http://tour.11st.co.kr/tour/TourSearchAction.tmall";
		method = "search";
	} else if ( code == "SEMANTIC" ) {// �ø�ƽ�˻�
		actionStr = "http://search.11st.co.kr/SemanticSearchAction.tmall";
		method = "getSemanticSearch";
		gnbFormObj.semanticFromGNB.value="Y";
	} else if ( code == "MT11" ) {	// ��Ʈ 11����
		actionStr = "http://www.11st.co.kr/mart11st/Mart11stSearchAction.tmall";
		method = "goMart11stSearch";
	} else if ( code == "BRAND" ) {// �귣��˻�
		actionStr = "http://search.11st.co.kr/BrandSearchAction.tmall";
		method = "getBrandSearch";
	} else if ( code == "TICKET" ) {// Ƽ��11����
        actionStr="http://search.11st.co.kr/TicketSearchAction.tmall";
        method="getTicketSearchProduct";
	} else if ( code == "MODEL" ) {// ���ݺ�
		actionStr = "http://search.11st.co.kr/ModelSearchAction.tmall";
		method = "getModelSearch";
	} else if ( code == "CONTENTS" ) {//���θ���
		actionStr = "http://search.11st.co.kr/ContentsSearchAction.tmall";
		method = "getContentsSearch";
		gnbFormObj.pageSize.value = "30";
	} else { // T/P/NP/SL
		if(code == "BT") { // ��Ƽ11���� ���հ˻� �߰�
			actionStr = "http://beauty.11st.co.kr/newBeauty/newBeautyAction.tmall";
			method = "newBeautySearch";
			//gnbFormObj.pageSize.value = "25";
		} else if(code == "SIC") { // ���̴� ���հ˻� �߰�
			actionStr = "http://scinic.11st.co.kr/beauty/BeautySearchAction.tmall";
			method = "getBeautyTotalSearch";
			gnbFormObj.pageSize.value = "10";
		} else {
			actionStr = "http://search.11st.co.kr/SearchPrdAction.tmall";
			method = "getTotalSearchSeller";
		}
	}
	if ( trim(code) == "" || trim(code) == "P" ) code = "T";
	gnbFormObj.targetTab.value = code;
	gnbFormObj.action = actionStr;
	gnbFormObj.target = "_top";
	gnbFormObj.method.value = method;
}

/*
 * Ű���� Ŭ�� �˻�ó��
 */
function searchKwd(kwd) {
	var gnbFormObj = document.forms["GNBSearchForm"];
	var keyword = kwd;

	if(keyword == "") {
		alert("�˻�� �Է��ϼ���.");
	}
	else {
	    /*
		 * OM/MM ���հ˻�(targetTab=T)���� ����/��õ �˻���� 11���� ���հ˻����� ������. - ������ �߰�.
		 */
	    if( gnbFormObj.targetTab.value == "T" ) gnbFormObj.targetTab.value = "P";
		gnbFormObj.kwd.value = keyword;
		gnbFormObj.target = "_top";
  		gnbFormObj.submit();
	}
}

/*
 * ��� ��(���հ˻�/11����/����/����) �̵�.
 */
function goTabSearch( targetTab, target){
	if(target == "blank") window.open('', 'new_win');

	if(targetTab == 'MO') {
		var formObj = document.forms["searchMOForm"];
		if(target == "blank") formObj.target="new_win";
		formObj.submit();
	} else if (targetTab == 'TO') {
		var formObj = document.forms["searchTOForm"];
		if(target == "blank") formObj.target="new_win";
		formObj.submit();
	} else if (targetTab == 'TK') {
		var formObj = document.forms["searchTKForm"];
		if(target == "blank") formObj.target="new_win";
		formObj.submit();
	} else if (targetTab == 'BT') {
		var formObj = document.forms["searchBTForm"];
		if(target == "blank") formObj.target="new_win";
		formObj.submit();
	} else if (targetTab == 'HD') {
		var formObj = document.forms["searchHDForm"];
		if(target == "blank") formObj.target="new_win";
		formObj.submit();
	} else if (targetTab == 'TW') {
		var formObj = document.forms["searchTWForm"];
		if(target == "blank") formObj.target="new_win";
		formObj.submit();
	} else if (targetTab == 'MT') {
		var formObj = document.forms["searchMTForm"];
		if(target == "blank") formObj.target="new_win";
		formObj.submit();
	} else {
		var gnbFormObj = document.forms["GNBSearchForm"];
		if(gnbFormObj.kwd.value.trim() == ""){
			gnbFormObj.kwd.value = document.forms["searchMoveForm"].kwd.value;
		}
		if(targetTab == 'CONTENTS'){
			gnbFormObj.pageSize.value = 30;
		}
		gnbFormObj.targetTab.value = targetTab;
		// if( targetTab == "T") gnbFormObj.pageSize.value = "30";
		// else gnbFormObj.pageSize.value = "50";
		goSearch();
	}
}

/*
 * ��ǰ ������ ���� ( ����/��ǰ/������ )
 */
function changeMainTab( tab ) {
	var formObj = document.forms["searchMoveForm"];
	var actionStr = "";
	var method = "";

	if ( tab == "T" ) {	// ���հ˻�
		actionStr = "http://search.11st.co.kr/SearchPrdAction.tmall";
		method = "getTotalSearchSeller";
		formObj.prdType.value = "S";
	} else if ( tab == "P" ) {	// ��ǰ
		actionStr = "http://search.11st.co.kr/SearchPrdAction.tmall";
		method = "getSellerPrd";
		formObj.prdType.value = "S";
	} else if ( tab == "S" ) {	// ������
		actionStr = "http://search.11st.co.kr/SearchSellerShopAction.tmall";
		method = "getSearchSellerShop";
		formObj.prdType.value = "";
	}

	formObj.action = actionStr
	formObj.targetTab.value = tab;
	formObj.method.value = method;
	formObj.target = "_top";
	formObj.pageNum.value = 1;

	formObj.submit();
}


// ���ǰ˻��� ���� �߰� ����
function funcGetDateTime() {
  var dt_datetime = new Date()
  var year  = dt_datetime.getFullYear();
  var month = (dt_datetime.getMonth()+1);
  var day   = dt_datetime.getDate();
  var hours = dt_datetime.getHours();
  var min   = dt_datetime.getMinutes();
  if(hours <10) hours = "0"+hours;
  if(min <10) min = "0"+min;

  if( parseInt(month) < 10 )
  {
	month = "0" + month;
  }

  if( parseInt(day) < 10 )
  {
	day = "0" + day;
  }

  return ( new String( year + "/" + month + "/" + day + " " +hours+ ":"+ min));
}
function funcSetCookieSearchKey( name, value, expiredays ){}
function getCookieSearchKeyList(str){
	var cookieData = "";
	var data = getCookie(str);
	data = unescape(data);
	cookieData = data;

	return cookieData;
}
function fucnSetSearchKey(kwd){}
/* Ű���� ���� ���� ó�� ���� */
function KeywordEvent(keywordList, stDate, enDate, url, isReserve)	{
	var isUse = false;
	var targetUrl = "";

	// Today
	var td = new Date();
	var yyyy = new String(td.getFullYear());
	var mm = new String(td.getMonth()+1);
	var dd = new String(td.getDate());
	if(mm.length == 1) {
		mm = "0" + mm;
	}

	if(dd.length == 1) {
		dd = "0" + dd;
	}

	var curDate =  parseInt(new String(yyyy + mm + dd));

	if (curDate >= parseInt(stDate) &&  curDate <= parseInt(enDate)  )	{
		isUse = true;
		targetUrl = url;
	}

	this.goEventUrl = function(keyword)	{

		if(isUse && (keywordList.toUpperCase()).indexOf("/" + new String(keyword.toUpperCase()) + "/") > -1 )	{
			if ( isReserve ) { 
				var	i =	new	Image();
				i.src =	"http://st.11st.co.kr/srch.st?action=gnb_event_redirect&kwd=" + encodeURIComponent(keyword);
			}
			top.location.href = targetUrl;
			return true;
		}
		return false;
	}
}

function getInnocentWord(keyword) {
	var reg = /[^\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318f a-zA-Z0-9]+/;
	while(keyword.match(reg)) {
		keyword = keyword.replace(reg,"");
	}

	while(keyword.match(/\s/)) {
		keyword = keyword.replace(/\s/,"");
	}

	return keyword;
}

var arrEvents = new Array( new KeywordEvent("","", "", ""));

try{
	if(isUTF8 == true);
}catch(e)
{
	isUTF8 = false;
}

if(isUTF8 == undefined || isUTF8 == null || isUTF8 == false){
	document.write('<script type="text/javascript" charset="euc-kr" src="' + getCommonImgUrl("//www.11st.co.kr/html/reserveKeywordList.js") + '"></script>');
}

function encodeKwd(keyword)	{
	if ( getHtmlCharset() == "utf-8" )	{
		keyword = encodeURIComponent(keyword);
	}

	return keyword;
}

function encodeKwdNew(keyword) {
	keyword = encodeURIComponent(encodeURIComponent(keyword));
	
	return keyword;
}

/*
 * �˻� ���� ���� ����
 */
function searchReset() {
	var form = jQuery("[name=GNBSearchForm]");

	//Anchor �̵��� �� �߰�
	if( form.find("[name=targetAnchor]").length == 0 ) {
		var input = jQuery("<input type='hidden' name='targetAnchor' value='#searchlist' />").appendTo(form);
	};

	goSearch()
}

function goSearchFromGNB(){
	
	var gaParam = {};
	gaParam.actionName = 'PC_GNB_���հ˻�>Ű����˻�';
	goSearch('', gaParam);
}
/*
 * GNB ���� �˻��� Ȯ�� �� submit
 */
function goSearch( code, gaParam, area ) {
	if(code != undefined && code != null){
		doCommonStat(code);
	} else {
		//����ڵ� ���� �����ڵ�
		var areaCodePre = HeaderGnb.makeGnb.areaCodePre;
		doCommonStat(areaCodePre + "GN0314");
	}
	
	var gnbFormObj = document.forms["GNBSearchForm"];
	var keyword = trim(gnbFormObj.kwd.value);
	if(typeof(area) != 'undefined' && area != ''){
		if(area == 'BT' || area == 'SIC'){
			gnbFormObj = document.forms["BeautyGNBSearchForm"];
		}
	}
	
	if( ga && gaParam ){
		var actionName = gaParam.actionName;
		var categoryNameLocation = gaParam.categoryNameLocation;
		var gaCustomValue = {};
		
		if( categoryNameLocation ){
			gaCustomValue.dimension21 = categoryNameLocation;
			ga('send', 'event', actionName, document.title, keyword, gaCustomValue);
		}else{
			ga('send', 'event', actionName, document.title, keyword);
		}
	}
	
	if(gnbFormObj.targetTab.value == "SL" ){	 //�Ǹ��� �˻�
		gnbFormObj.action = "http://search.11st.co.kr/Search.tmall";
		gnbFormObj.method.value = "";
	}else if(gnbFormObj.targetTab.value == "S"){ // ����
		gnbFormObj.action = "http://search.11st.co.kr/SearchSellerShopAction.tmall";
	}else if(gnbFormObj.targetTab.value == "CH"){	// ��Ƽ11����
		gnbFormObj.action = "http://beauty.11st.co.kr/TotalSearch.do";
		gnbFormObj.category.value = "cherrya";
		gnbFormObj.cmd.value = "productList";
	}else if(gnbFormObj.targetTab.value == "MO"){	// ����11����
		gnbFormObj.action = "http://books.11st.co.kr/booksmall/BooksAction.tmall";
		gnbFormObj.ID.value = "BOOKS";
		gnbFormObj.ctgrNo.value = "63517";
		gnbFormObj.srCtgrNo.value = "63516";
	} else if ( gnbFormObj.targetTab.value == "TOUR11ST" ) {//���� 11����
		gnbFormObj.action = "http://tour.11st.co.kr/tour/TourSearchAction.tmall";
		gnbFormObj.keyword.value = gnbFormObj.kwd.value;
	} else if ( gnbFormObj.targetTab.value == "TOUR" ) {//����
		gnbFormObj.action = "http://tour.11st.co.kr/tour/TourSearchAction.tmall";
		gnbFormObj.keyword.value = gnbFormObj.kwd.value;
	} else if ( gnbFormObj.targetTab.value == "OVERSEAS" ) {//�ؿ�ȣ��
		gnbFormObj.action = "http://tour.11st.co.kr/tour/TourSearchAction.tmall";
		gnbFormObj.keyword.value = gnbFormObj.kwd.value;
	} else if ( gnbFormObj.targetTab.value == "DOMESTIC" ) {//��������
		gnbFormObj.action = "http://tour.11st.co.kr/tour/TourSearchAction.tmall";
		gnbFormObj.keyword.value = gnbFormObj.kwd.value;
	} else if ( gnbFormObj.targetTab.value == "SEMANTIC" ) {//�ø�ƽ �˻�
		gnbFormObj.action = "http://search.11st.co.kr/SemanticSearchAction.tmall";
		gnbFormObj.method.value = "getSemanticSearch";
	} else if ( gnbFormObj.targetTab.value == "MODEL" ) {//���ݺ�
		gnbFormObj.action = "http://search.11st.co.kr/ModelSearchAction.tmall";
		gnbFormObj.method.value = "getModelSearch";
	} else if ( gnbFormObj.targetTab.value == "CONTENTS" ) {//���θ���
		gnbFormObj.action = "http://search.11st.co.kr/ContentsSearchAction.tmall";
		gnbFormObj.method.value = "getContentsSearch";
		gnbFormObj.pageSize.value = 30;
	} else if ( gnbFormObj.targetTab.value == "BT" ) {//�ź�Ƽ11����
        gnbFormObj = document.forms["BeautyGNBSearchForm"];
		gnbFormObj.action = "http://beauty.11st.co.kr/newBeauty/newBeautyAction.tmall";
		gnbFormObj.method.value = "newBeautySearch";
        keyword = trim(gnbFormObj.kwd.value);
	} else if ( gnbFormObj.targetTab.value == "SIC" ) {//���̴�
        gnbFormObj = document.forms["BeautyGNBSearchForm"];
		gnbFormObj.action = "http://scinic.11st.co.kr/beauty/BeautySearchAction.tmall";
		gnbFormObj.method.value = "getBeautyTotalSearch";
        keyword = trim(gnbFormObj.kwd.value);
	} else if ( gnbFormObj.targetTab.value == "TICKET" ) {//Ƽ��11����
        actionStr="http://search.11st.co.kr/TicketSearchAction.tmall";
        method="getTicketSearchProduct";
	}

	var ad_banner_url = gnbFormObj.adUrl.value;
	if(ad_banner_url == "") {

		if ( keyword == "" ) {
			alert("�˻�� �Է��ϼ���.");
			gnbFormObj.kwd.focus();
			// return false;
		} else if ( chkKeywordEvent(keyword) ){
			return;
		} else if ( gnbFormObj.targetTab.value == "D" && !IsNumeric(keyword) ) {
			alert("��۹�ȣ ��ȸ�� ����(����)�� �����մϴ�.");
			gnbFormObj.kwd.focus();
		} else if ( gnbFormObj.targetTab.value == "D" && keyword.length < 10 ) {
			alert("��۹�ȣ 10�ڸ� �̻� �Է��ϼ���.");
			gnbFormObj.kwd.focus();
		} else if ( gnbFormObj.targetTab.value == "N"  ) {
			if ( !IsNumeric(keyword) ) {
				alert("��ǰ��ȣ�� ����(����)�� �����մϴ�.");
				gnbFormObj.kwd.focus();
			} else {
				var prdNoUrl = _GNB_CONTEXT_PATH_ + "/product/SellerProductDetail.tmall?method=getSellerProductDetail&prdNo=" + keyword;
				// Start 2010.11.24 �˻� ���� �� ���� Ƚ�� ����
				prdNoUrl += "&gnbTag=NO";
				// End   2010.11.24 �˻� ���� �� ���� Ƚ�� ����
				document.location.href = prdNoUrl;
			}
		 } else if ( gnbFormObj.targetTab.value == "SL") {

			 if(gnbFormObj.targetAnchor)
					gnbFormObj.action += gnbFormObj.targetAnchor.value; // add anchor name

			//fucnSetSearchKey(keyword); //�� �˻� ��� ��Ű �����
			//gnbFormObj.kwd.value = encodeKwd(keyword);
			gnbFormObj.kwd.value = encodeKwdNew(keyword);
			 
			gnbFormObj.submit();
		} else { // T/P/NP/M/I/S

			if(gnbFormObj.targetAnchor)
				gnbFormObj.action += gnbFormObj.targetAnchor.value; // add anchor name
			
			keyword = keyword.replace(/&/g, ' ');

			gnbFormObj.kwd.value = encodeKwd(keyword);
			gnbFormObj.submit();
		}

	} else {
		//�˻�â �ؽ�Ʈ��ũ ����
		var trcNo = gnbFormObj.adKwdTrcNo.value;
		var typGubn = 'M';
		var areaGubn = 'A01';
		var prdNo = gnbFormObj.adPrdNo.value;

		stck( typGubn, areaGubn, trcNo);
		if(prdNo > 0) {
			ad_headerCommonJs.util.instance.ConversionCookieQueue.add(trcNo, prdNo, (typGubn + '' + areaGubn));
		}

		top.location.href = ad_banner_url;
	}
}

function goSearchSimple (code, gaParam){	// �ڵ��ϼ� �ֱ� �˻���, ��õ ī�װ� �˻����� ���
	if(code != undefined && code != null){
		doCommonStat(code);
	} else {
		//����ڵ� ���� �����ڵ�
		var areaCodePre = HeaderGnb.makeGnb.areaCodePre;
		doCommonStat(areaCodePre + "GN0314");
	}
	
	var gnbFormObj = document.forms["GNBSearchForm"];
	var keyword = trim(gnbFormObj.kwd.value);
	
	if( ga && gaParam ){
		var actionName = gaParam.actionName;
		var categoryNameLocation = gaParam.categoryNameLocation;
		var gaCustomValue = {};
		
		if( categoryNameLocation ){
			gaCustomValue.dimension21 = categoryNameLocation;
			ga('send', 'event', actionName, document.title, keyword, gaCustomValue);
		}else{
			ga('send', 'event', actionName, document.title, keyword);
		}
	}
	
	var searchUrl	= "http://search.11st.co.kr/Search.tmall?";
	var encKwd		= encodeKwdNew(keyword);
	if ( keyword == "" ) {
		alert("�˻�� �Է��ϼ���.");
		gnbFormObj.kwd.focus();
	} else if ( chkKeywordEvent(keyword) ){
		return;
	} else {
		// �˻���
		searchUrl += 'kwd=' + encKwd;
		// �ڵ��ϼ� �ֱٰ˻�,��õī�װ� ���� ����
		if( gnbFormObj.fromACK.value != undefined && gnbFormObj.fromACK.value != '' ) {
			searchUrl += '&fromACK=' + gnbFormObj.fromACK.value;
		}
		// ��õī�װ� ī�װ� ����
		if( gnbFormObj.lCtgrNo.value != undefined && gnbFormObj.lCtgrNo.value != '' ) {
			searchUrl += '&lCtgrNo=' + gnbFormObj.lCtgrNo.value;
		}
		if( gnbFormObj.mCtgrNo.value != undefined && gnbFormObj.mCtgrNo.value != '' ) {
			searchUrl += '&mCtgrNo=' + gnbFormObj.mCtgrNo.value;
		}
		if( gnbFormObj.sCtgrNo.value != undefined && gnbFormObj.sCtgrNo.value != '' ) {
			searchUrl += '&sCtgrNo=' + gnbFormObj.sCtgrNo.value;
		}
		if( gnbFormObj.dCtgrNo.value != undefined && gnbFormObj.dCtgrNo.value != '' ) {
			searchUrl += '&dCtgrNo=' + gnbFormObj.dCtgrNo.value;
		}

		location.href = searchUrl;
	}
}

// ==================== [listPage.js]
/**
 *
 * ������ ����Ʈ ���� rows : �� ȭ�鿡 ������ �� ���� pageNumber : ���� ������ ��ȣ tots : ��ü �� ����
 * pageRows : ��ȭ�鿡 ������ ������ ����
 */

function getListPage(rows,pageNumber,tots,pageRows,onlyPremPrd)
{	// 2,2,3,10
	var argLength = arguments.length;
	var rowsPerPage = rows;
	var currentPage = pageNumber;
	var totalCount = tots;

	var totalPage = "";
	if (totalCount % rowsPerPage)
		totalPage =  (Math.floor(totalCount / rowsPerPage) + 1);
	else
		totalPage = Math.floor(totalCount / rowsPerPage);

	var pageGroupStart = Math.floor(((currentPage-1) / pageRows)) * pageRows + 1;
	var pageGroupEnd = (pageGroupStart + pageRows -1 >= totalPage) ? totalPage : (pageGroupStart + pageRows - 1);
	if (totalPage <= 0)
		totalPage = 1;

	var sbuf = "<div class=\"pagingV2_wrap\"><div class=\"paging_Align_FreeW\"><div class=\"paging_v4\">";

	sbuf += "<a href=\"javascript:goToFirstPage(" + currentPage + ", 1);\" class=\"first\" title=\"ù������\"></a>";

	if (currentPage - rowsPerPage > 0 || currentPage > pageRows)
		sbuf += "<a href=\"#\" onClick=\"javascript:navigatePage('"+ (pageGroupStart - 1)+ "');return false;\" class=\"pre\" title=\"��������10��\"></a>";
	else
		sbuf += "<a class=\"pre\" title=\"��������10��\"></a>";

	sbuf += "<span class=\"pagingList\">";
	sbuf += "<ul>";

	for (var i = pageGroupStart; i <= pageGroupEnd; i++)
	{
		if (i == currentPage)
			sbuf += "<li><a href=\"#\" onClick=\"javascript:navigatePage('" + i + "');return false;\" class=\"on\">" + i + "</a></li>\n";
		else
			sbuf += "<li><a href=\"#\" onClick=\"javascript:navigatePage('" + i + "');return false;\">"+i+"</a></li>\n";
	}

	if (totalCount == 0)
		sbuf += "<li><a href=\"#\" onClick=\"javascript:navigatePage('1');return false;\">1</a></li>\n";

	sbuf += "</ul>";
	sbuf += "</span>";

	if (pageGroupEnd < totalPage)
		sbuf += "<a href=\"#\" onClick=\"javascript:navigatePage('"+ (pageGroupStart + pageRows)+ "');return false;\" class=\"next\" title=\"����������10��\"></a>";
	else
		sbuf += "<a class=\"next\" title=\"����������10��\"></a>";

	sbuf += "<a href=\"javascript:goToLastPage(" + currentPage + ", " + totalPage + ");\" class=\"end\" title=\"������������\"></a>";

	sbuf += "</div></div>";
/*
 * if(argLength == 5) { sbuf += "<div class=\"info_v2\">"; if(onlyPremPrd) {
 * sbuf += "<a href=\"javascript:goNormPrdPage_Ctgr();\"
 * class=\"btn_viewList_2\"></a>"; }else{ sbuf += "<a
 * href=\"javascript:goPremiumPrdPage();\" class=\"btn_viewList_1\"></a>"; }
 * sbuf += "</div>"; }
 */
	sbuf += "<div class=\"page_GotoWrap\">";
	sbuf += "<span class=\"page\"><input type=\"text\" name=\"directPage\" id=\"directPage\" value=\"" + currentPage + "\" onclick=\"this.value=''\" style=\"ime-mode:disabled\" onkeypress=\"inputOnlyNumber(event)\"></span>";
	sbuf += "<span class=\"InLineWrap\">";

	sbuf += "<div class=\"total\">&nbsp;/ �� <span>" + totalPage + "</span>������</div>";
	sbuf += "<a href=\"javascript:goToPageDirect(" + totalPage + ");\" class=\"btn_pagego\"></a>";

	sbuf += "</span>";
	sbuf += "</div></div>";

	return sbuf;
}

/**
 *
 * ������ ����Ʈ ����(���� 11���� ����) rows : �� ȭ�鿡 ������ �� ���� pageNumber : ���� ������ ��ȣ tots : ��ü
 * �� ���� pageRows : ��ȭ�鿡 ������ ������ ����
 */

function getNewListPage(rows,pageNumber,tots,pageRows)
{	// 2,2,3,10
	var argLength = arguments.length;
	var rowsPerPage = rows;
	var currentPage = pageNumber;
	var totalCount = tots;

	var totalPage = "";
	if (totalCount % rowsPerPage)
		totalPage =  (Math.floor(totalCount / rowsPerPage) + 1);
	else
		totalPage = Math.floor(totalCount / rowsPerPage);

	var pageGroupStart = Math.floor(((currentPage-1) / pageRows)) * pageRows + 1;
	var pageGroupEnd = (pageGroupStart + pageRows -1 >= totalPage) ? totalPage : (pageGroupStart + pageRows - 1);
	if (totalPage <= 0)
		totalPage = 1;



	var sbuf = "<div class=\"pagingV2_wrap\"><div class=\"paging_Align_FreeW\"><div class=\"paging_v4\">";

	var prePage = 0;

	// sbuf += "<a href=\"javascript:goToFirstPage(" + currentPage + ", 1);\"
	// class=\"first\" title=\"ù������\"></a>";
	sbuf += "<a href=\"javascript:navigatePage('"+ (currentPage - 1)+ "');\" class=\"pre\" title=\"��������10��\"></a>";


	sbuf += "<span class=\"pagingList\"><ul>";

	for (var i = pageGroupStart; i <= pageGroupEnd; i++)
	{
		if (i == currentPage)
			sbuf += "<li><a href=\"javascript:navigatePage('" + i + "');\" class=\"on\">" + i + "</a></li>";
		else
			sbuf += "<li><a href=\"javascript:navigatePage('" + i + "');\">"+i+"</a></li>";
	}

	if (totalCount == 0)
		sbuf += "<li><a href=\"javascript:navigatePage('1');\">1</a></li>";

	sbuf += "</ul></span>";

	sbuf += "<a href=\"javascript:navigatePage('"+ (currentPage + 1)+ "');\" class=\"next\" title=\"����������10��\"></a>";
	// sbuf += "<a href=\"javascript:goToLastPage(" + currentPage + ", " +
	// totalPage + ");\" class=\"end\" title=\"������������\"></a>";

	sbuf += "</div>";

	sbuf += "</div>";

	sbuf += "</div>";

	return sbuf;
}

function goToFirstPage(cur, move)
{
	if (cur == move)
		alert("ó�� ������ �Դϴ�");
	else
		navigatePage(move);
}

function goToLastPage(cur, move)
{
	if (cur == move)
		alert("������ ������ �Դϴ�");
	else
		navigatePage(move);
}

function goToPageDirect(nTotal)
{
	var page = "";

	try
	{
		page = eval(document.getElementById("directPage").value);
	}
	catch (e) { }

	if (page == null)
	{
		alert('���� �Է��� �ּ���');
		document.getElementById("directPage").focus();
	}
	else if ((page == "") || (page > nTotal) || (page <= 0))
	{
		alert('�̵��� �� ���� ������ �Դϴ�');
		document.getElementById("directPage").value = "";
		document.getElementById("directPage").focus();
	}
	else
		navigatePage(page);
}

function inputOnlyNumber(e) {
	var isFF = e.which ? true : false;
	if(!isFF) {
		if((e.keyCode<48)||(e.keyCode>57)) {
			e.returnValue=false;
		}
	}else {
		if(e.which!=8 && ((e.which<48)||(e.which>57))) {
			e.preventDefault();
		}
	}
}

// ==================== [type_check.js]
function isBlank( obj )
{
	if( typeof(obj) == "object" )
	{
		if( obj.value == "" )
		{
			return true;
		} else {
			return false;
		}
	} else {
		alert( "Object �� �ƴմϴ�." );
		return false;
	}
}


/*
 * �ش� object �� focus �� �̵���Ų�� ���� ��� bgcolor �� �ٲ��ش�.
 *
 */
function alertInput( obj )
{
	var oldBackColor = "";

	if( event )
	{
		oldBackColor = event.srcElement.style.backgroundColor;
	}
	else
	{
		oldBackColor = obj.style.backgroundColor;
	}

	if( typeof(obj) == "object" )
	{
		obj.focus();
		obj.style.backgroundColor = "#E4E4E4";	// ȸ�� �迭.

		obj.onblur = function(){
			// event.srcElement.style.backgroundColor = oldBackColor;
			this.style.backgroundColor = oldBackColor;
		};
	} else {
	}
}

/*
 * ������ length �� Ȯ���� ������ num ���� ũ�� false �� �����ش�.
 *
 */
function checkFigure( str, num1, num2 )
{
	if( str.length < num1 || str.length > num2  )
		return false;
	else
		return true;
}

/*
 * ���ڿ��� �˻��Ͽ� ���������� üũ�Ѵ�.
 *
 */
function IsNumeric(checkStr)
{
	if(checkStr == undefined ){
		return false;
	}else{
		for (var i = 0;  i < checkStr.length;  i++)
		{
			ch = checkStr.charAt(i);
			if (ch < "0" || ch > "9")
				return false;
		}
		return true;
	}
}


/*
 * ���ڿ��� �յ� ������ �����ش�.
 *
 */
function trim(str) {
  var count = str.length;
  var len = count;
  var st = 0;

  while ((st < len) && (str.charAt(st) <= ' ')) {
	 st++;
  }
  while ((st < len) && (str.charAt(len - 1) <= ' ')) {
	 len--;
  }
  return ((st > 0) || (len < count)) ? str.substring(st, len) : str ;
}


/*
 * ���Խ��� �̿��� ���� üũ.
 *
 */
function checkNumber( value, isNeed ){
	// value ���� ������츸 üũ�Ѵ�.
	if( value != "" )
	{
		var x = value;

		var anum =/(^\d+$)|(^\d+\.\d+$)|(^[-]\d+$)|(^[-]\d+\.\d+$)/;

		if (anum.test(x))
		{
			return true;
		}
		else{
			return false;
		}
	} else {
		return true;
	}
}


/*
 * �Ҽ��� �ڸ� üũ.
 *
 */
// function checkDecimals(fieldName, fieldValue) {}

// ////////////////////////////////////////////////////////////////////////////////////////////
/*
 * Form �� �׸��߿� "INPUT" �ΰ͸� value ���� trim ���ش�.
 *
 */
function FormObjTrim( obj ) {
	if( (typeof(obj) == "object") && (obj.tagName.toUpperCase() == "FORM") )
	{
		var oItem = obj.elements;

		for(var i=0; i<oItem.length; i++ )
		{
			if( oItem.item(i).tagName.toUpperCase() == "INPUT" ||
				oItem.item(i).tagName.toUpperCase() == "TEXTAREA" )
			{
				oItem.item(i).value = trim( oItem.item(i).value );
			}
		}
	} else {
		alert( "Form Object �� �ƴմϴ�." );
		return false;
	}
}

/*
 * Radio ���� ����
 */
function isRadio( obj, title )
{
	return checkRadio( obj, title + "��(��) �������ֽʽÿ�.");
}

/*
 * INPUT type=radio �� �ϳ��� ���õǾ� ���� ���� ���, return false
 *
 */
function checkRadio( obj, msg )
{
	if( typeof( obj ) == "object" )
	{
		for(var i=0; i < obj.length; i++ )
		{
			if( obj[i].checked )
			{
				return true;
			}
		}

		alert( msg );
		if( obj.length )
		{
			obj[0].focus();
		}
		else
		{
			obj.focus();
		}


		return false;
	} else {
		alert("Object �� �ƴմϴ�.");
		return false;
	}
}

/*
 * INPUT type=radio �� ���õǾ� �ִ°�� return Value ���°��, return false
 *
 */
function checkRadioValue( obj )
{

	if( typeof( obj ) == "object" )
	{
		for(var i=0; i < obj.length; i++ )
		{
			if( obj[i].checked )
			{
				return obj[i].value;
			}
		}
		return false;
	} else {
		alert("Object �� �ƴմϴ�.");
		return false;
	}
}


/*
 * ���� Ÿ�� üũ ������ ������ -2147483648 ~ 2147483647 ����...
 *
 * obj : <input> �� object. msg : ������ ��Ÿ�� �޼���. limit_num : ������ �ڸ���. isNeed : ����
 * üũ ����
 */
function numberCheck( obj, msg, limit_num1, limit_num2, isNeed )
{
	if( typeof(obj) == "object" )
	{
		if( isNeed )
		{
			if( isBlank( obj ) )
			{
				alert( msg );
				alertInput( obj );

				return false;
			}
		}

		if(!isBlank(obj))
		{
			if( !checkNumber( obj.value, isNeed ) )
			{
				alert( msg );
				alertInput( obj );

				return false;
			}
			else if( !checkFigure( obj.value, limit_num1, limit_num2 ) )
			{
				if( limit_num1 != limit_num2 )
				{
					alert( limit_num1 + "~" + limit_num2 + " �ڸ����� �Է����ֽʽÿ�.");
				}
				else
				{
					alert( limit_num1 +" �ڸ����� �Է����ֽʽÿ�.");
				}
				alertInput( obj );
				return false;
			}
		}

		return true;
	} else {
		alert("Object �� �ƴմϴ�.");
		return false;
	}
}

function dateCheck( obj, title, isNeed )
{
	if( typeof(obj) == "object" )
	{
		if( isNeed )
		{
			if( isBlank( obj ) )
			{
				alert( title +'��(��) �ݵ�� [2004-07-20]�� ���� ���·� \n\n ��Ȯ�� �Է����ֽʽÿ�' );
				alertInput( obj );

				return false;
			}
		}

		if(!isBlank(obj))
		{
			// �ڸ��� üũ.
			var value = obj.value;
			if( value.indexOf("-") == -1 )
			{
				alert( title +'��(��) �ݵ�� [2004-07-20]�� ���� ���·� \n\n ��Ȯ�� �Է����ֽʽÿ�' );
				alertInput( obj );

				return false;
			}

			// 2004-07-20 ������ �������� Ȯ��.
			if( value.substring(0, 4).length < 4 ||
				value.substring(5, 7).length < 2 ||
				value.substring(8, 10).length < 2 )
			{
				alert( title +'��(��) [2004-07-20]�� ���� 4�ڸ�-2�ڸ�-2�ڸ� ���·� \n\n��Ȯ�� �Է����ֽʽÿ�' );
				alertInput( obj );

				return false;
			}
			if( !checkNumber(value.substring(0, 4), isNeed) ||
				!checkNumber(value.substring(5, 7), isNeed) ||
				!checkNumber(value.substring(8, 10), isNeed) )
			{
				alert( title +"��(��) [2004-07-20]�� ���� �����̸� '-'�� ������ \n�������� ��� ���ڷ� �Է����ֽʽÿ�" );
				alertInput( obj );

				return false;
			}

			if (!(parseInt(value.substring(0, 4),10) > 1899 && parseInt(value.substring(0, 4),10) < 3000))
			{
				alert( title + "�� ������ 1900�� ~ 2999�� ���� �Է��� �����մϴ�. \n\n��Ȯ�� �Է����ֽʽÿ�" );
				alertInput( obj );

				return false;
			}

			if (!(parseInt(value.substring(5, 7),10) > 0 && parseInt(value.substring(5, 7),10) < 13))
			{
				alert( title + "�� ���� 01�� ~ 12�� ���� �Է��� �����մϴ�. \n\n��Ȯ�� �Է����ֽʽÿ�" );
				alertInput( obj );

				return false;
			}

			if (!(parseInt(value.substring(8, 10),10) > 0 && parseInt(value.substring(8, 10),10) < 32))
			{
				alert( title + "�� ���� 01�� ~ 31 ���� �Է��� �����մϴ�. \n\n��Ȯ�� �Է����ֽʽÿ�" );
				alertInput( obj );

				return false;
			}
		}

		return true;
	} else {
		alert("Object �� �ƴմϴ�. ");
		return false;
	}
}

/*
 * ���ڿ� ũ�� üũ.
 */
function stringCheck( obj, msg, isNeed )
{
	if( typeof(obj) == "object" )
	{
		if( isNeed )
		{
			if( isBlank( obj ) )
			{
				alert( msg );
				alertInput( obj );
				return false;
			}
		}

		return true;
	} else {
		alert("Object �� �ƴմϴ�.");
		return false;
	}
}

/*
 * ��ȭ ��ȣ üũ 000-0000-0000
 *
 */
// function telephoneCheck( obj, msg, isNeed ){}


var NUM = "0123456789";
var SALPHA = "abcdefghijklmnopqrstuvwxyz";
var ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"+SALPHA;
var EMAIL = "!#$%&*+-./=?@^_`{|}"+NUM+ALPHA;

/**
 * �Է��� ���ڿ�(aSource)�� sCompare�� ���ڿ��� ���ԵǾ� �ִ� ���ڷ� �Ǿ� �ִ����� üũ���ش�.
 */
function IsCheckValidString( sSource, sCompare )
{
	var i ;
	for( i=0; i< sSource.length; i++ )
	{
		if( sCompare.indexOf( sSource.substring( i, i+1 ) ) < 0)
		{
			return false ;
		}
	}

	return true ;
}

/**
 * sSource �� ���̰� nMin���� ũ�� nMax���� ������ ���࿡ ������ ��� ��쿡�� sName�� ���� ������ �����ش�.
 * nIsConsonant �� True�� "��" �ƴϸ� "��" �� ǥ�����ش�.
 */
function IsCheckEnglish( sSource, sName, nMin, nMax, nIsConsonant )
{
	var nStrSize = GetStringSize( sSource ) ;
	var cPostN, cPostL ;

	if( nIsConsonant )
	{
		cPostL = "��" ;
		cPostN = "��" ;
	}
	else
	{
		cPostL = "��" ;
		cPostN = "��" ;
	}

	if( nStrSize == 0 && nMin > 0 )
	{
		ErrorMessage = sName + cPostL + "  �Է��� �ֽʽÿ�." ;
		return false ;
	}

	if( nMin == 0 && nStrSize > nMax )
	{
		ErrorMessage = sName + cPostN + " " + nMax +
			"�� ���Ϸ� �Է��� �ֽʽÿ�.\n���� �Էµ� ���� : " +
			nStrSize + "��" ;
		return false;
	}
	if( nStrSize < nMin || nStrSize > nMax )
	{
		ErrorMessage = sName + cPostN + " " + nMin +
			"�� �̻�, " + nMax +
			"�� ���Ϸ� �Է��� �ֽʽÿ�.\n���� �Էµ� ���� : " +
			nStrSize + "��" ;
		return false ;
	}

	return true ;
}

/**
 * �̸����� Format�� üũ�Ѵ�.
 */
// function isEmail( emailObj, isNeed ){}

/**
 * �ֹ���� Format�� üũ�Ѵ�.
 */
// function isResident( sRIDFirst, sRIDLast, isNeed ){}

// /////// ����� Fuction
// ///////////////////////////////////////////////////////////////////////

// function isDate( obj, title, isNeed ){}

function isNumber( obj, title, isNeed )
{
	return numberCheck( obj, title + '��(��) �ݵ�� ���ڷ� �Է��ϼž� �մϴ�.', 0, 14, isNeed );	// 10
																					// ������
																					// �Է°���.
}

function isString( obj, title, isNeed )
{
	return stringCheck( obj, title + "��(��) �ݵ�� �Է����ֽʽÿ�.", isNeed );
}

// function isTel( tel1, tel2, tel3, title, isNeed ){}

/*
 * �ڵ��� ��ȣ üũ
 */
// function isCellPhone( cp1, cp2, cp3, isNeed ){}

/*
 * ����� ���ڰ� �ִ��� üũ(�����ϸ� : true)
 */
function isSpecialChar( obj )
{
	return !IsCheckValidString( obj.value, SALPHA+NUM );
}

/*
 * �����ڿ� ���ڸ����� �Է��� �ؾ� �Ұ��
 */

function isSpecial(obj, title, isNeed)
{
	if( !isSpecialChar(obj) )
	{
		return stringCheck( obj, title + "��(��) �ݵ�� �Է����ֽʽÿ�.", isNeed );
	} else
	{
		alert( title + "��(��) �ݵ�� �����ڿ� ���ڸ����� �Է����ֽʽÿ�." );
		alertInput( obj );
	}
}

function isSelect(obj, title, isNeed)
{
	if( typeof( obj ) == "object" )
	{
		if(obj.value == "")
		{
			alert( title +'��(��) �ݵ�� ������ �ֽʽÿ�.' );
			alertInput( obj );

			return false;
		}

		return true;
	} else {
		alert("Object �� �ƴմϴ�.");
		return false;
	}
}

function limit( str, num1, num2 )
{
	if( str.length >= num1 && str.length <= num2  )
		return true;
	else
		return false;
}

// function isLoginId(obj){}


/*
 * ���� ī��Ʈ ���� v : ���� return : ����������ȣ
 */
function getRanNum(v){
	return Math.floor(Math.random()*v) + 1;
}

/*
 * ����ġ�� ���� ���� ī��Ʈ arrWeight : ����ġ �迭 return : ����ġ�� ���� �迭 Index
 */
function getRanNumWeight( arrWeight ){
	var totalWeight = 0; // �Ѱ���ġ
	var ranWegithNum; // ����������ȣ
	var returnIndex = 0;

	try {
		if( arrWeight == "undefined" ) return;

		for(var i=0 ; i<arrWeight.length ; i++) {
			totalWeight += arrWeight[i];
		}

		ranWegithNum = Math.random()*totalWeight;

		// ����ġ�� �ش��ϴ� index ��ȸ
		var beforeWeight = 0;
		var thisWeight = 0;
		for(var i=0 ; i<arrWeight.length ; i++) {
			thisWeight = thisWeight + arrWeight[i];

			if (i != 0) {
				beforeWeight = beforeWeight + arrWeight[i-1];
			}

			// ���� ����ġ�� �� ����ġ�� ���� index ����ġ ���̿� ������ �ش� index��ȣ ����
			if ( ranWegithNum >= beforeWeight && ranWegithNum <= thisWeight) {
				returnIndex = i;
				break;
			}
		}

	} catch (e) {}

	return returnIndex;
}
function vLayer(flag, layer, text)
{
	if (flag)
	{
		var l = $ID(layer);
		if (l.innerHTML == "")
			l.innerHTML = text;
		layerView(layer);
	}
	else
		layerHidden(layer);
}

function vBrand(flag)
{
	try{
		vLayer(flag, "lay_semantic",
			"<p class=\"arrow\"></p>"
			+ "<p class=\"box\">"
			+ "<a href=\"#\" class=\"btn_semantic_close\" onclick=\"document.getElementById('lay_semantic').style.display='none'; isSmtLayoutXBtnClicked=true; return false;\">�ݱ�</a>"
			+ "<span id=\"lay_semantic_cont\"></span>"
			+ "</p>");
	}catch(e){}
}

function vMy(flag)
{
	vLayer(flag, "mYInFo_11st",
		"<dl>"
		+"<dd><a href=\"javascript:goStatUrl(_ORDER_HIS_URL_,'A0202');\">�ֹ������ȸ</a></dd>"
		+"<dd><a href=\"javascript:goStatUrl(_GNB_CONTEXT_PATH_ +'/loyalty/AuthCouponGiftDtls.tmall','A0203');\">����</a></dd>"
		+"<dd><a href=\"javascript:goStatUrl(_GNB_CONTEXT_PATH_ +'/register/getGradeInfo.tmall?method=getGrade','A0204');\">����� ��� ����</a></dd>"
		+"<dd><a href=\"javascript:goStatUrl(_GNB_CONTEXT_PATH_ +'/browsing/MembershipBenefitPlace.tmall?method=getClubBenefit&addCtgrNo=939797&naviTab=3','MAA0206');\">Ŭ������</a></dd>"
		+"<dd><a href=\"javascript:goStatUrl(_GNB_CONTEXT_PATH_ +'/minimall/MyMiniMallAction.tmall?method=getMyMiniMall','A0205');\">�ܰ�̴ϸ�</a></dd>"
		+"</dl>");
}
// ���޻�(����,Ƽ��) �ٷΰ��� ���̾�.
function vDi_partner(lName)
{
	try{
		vLayer(true, lName,
			"<div class=\"gbox\">"
			+ "<div class=\"lay_directTxt\">11���� <span id=\"gbox_text\"></span>�Դϴ�.</div>"
			+ "</div>"
			+ "<div class=\"wbox\" id=\"divDirectBenefit\">�ٷΰ��� ���� �� �پ��� �߰� ������ ������ �� �ֽ��ϴ�.</div>"
			+ "<div class=\"btn_wrap\">"
			+ "<a href=\"javascript:ShortcutGnb('A0301');layerHidden('lay_direct');\" class=\"btn2\">�ٷΰ��� ��ġ�ϱ�</a>"
			+ "</div>");
		show_direct();
	}catch(e){}
}

function vC(gubun)
{
	try{
		var lNum = "0";
		if(gubun == "f") {
			lNum = "a";
		}
		vLayer(true, "headSelO_"+lNum,
			"<div class=\"ViewSubBox\">"
			+ "<a id=\"vSB_"+ gubun +"_1\" href=\"javascript:setSearchTarget('T','"+ gubun +"');doSrchReset('headSelO_"+ lNum +"');\" onClick=\"headSel('"+ lNum +"','���հ˻�');\"><span class=\"depth_1\">���հ˻�</span></a>"
			+ "<a id=\"vSB_"+ gubun +"_3\" href=\"javascript:setSearchTarget('N','"+ gubun +"');doSrchReset('headSelO_"+ lNum +"');\" onClick=\"headSel('"+ lNum +"','��ǰ��ȣ');\"><span class=\"depth_2\">-��ǰ��ȣ</span></a>"
			+ "<a id=\"vSB_"+ gubun +"_4\" href=\"javascript:setSearchTarget('SL','"+ gubun +"');doSrchReset('headSelO_"+ lNum +"');\" onClick=\"headSel('"+ lNum +"','�Ǹ���');\"><span class=\"depth_2\">-�Ǹ���</span></a>"
			+ "<a id=\"vSB_"+ gubun +"_5\" href=\"javascript:setSearchTarget('SEMANTIC','"+ gubun +"');doSrchReset('headSelO_"+ lNum +"');\" onClick=\"headSel('"+ lNum +"','�ø�ƽ�˻�');\"><span class=\"depth_1\">�ø�ƽ�˻�</span></a>"
			+ "<a id=\"vSB_"+ gubun +"_6\" href=\"javascript:setSearchTarget('CONTENTS','"+ gubun +"');doSrchReset('headSelO_"+ lNum +"');\" onClick=\"headSel('"+ lNum +"','���θ���');\"><span class=\"depth_1\">���θ���</span></a>"
			+ "<a id=\"vSB_"+ gubun +"_2\" href=\"javascript:setSearchTarget('MODEL','"+ gubun +"');doSrchReset('headSelO_"+ lNum +"');\" onClick=\"headSel('"+ lNum +"','���ݺ�');\"><span class=\"depth_1\">���ݺ�</span></a>"
			+ "<div class=\"DivLine\"></div>"
			+ "<a id=\"vSB_"+ gubun +"_7\" href=\"javascript:setSearchTarget('MO','"+ gubun +"');doSrchReset('headSelO_"+ lNum +"');\" onClick=\"headSel('"+ lNum +"','����11����');\"><span class=\"depth_1\">����11����</span></a>"
			+ "<a id=\"vSB_"+ gubun +"_8\" href=\"javascript:setSearchTarget('TOUR11ST','"+ gubun +"');doSrchReset('headSelO_"+ lNum +"');\" onClick=\"headSel('"+ lNum +"','����11����');\"><span class=\"depth_1\">����11����</span></a>"
			+ "<a id=\"vSB_"+ gubun +"_9\" href=\"javascript:setSearchTarget('TICKET','"+ gubun +"');doSrchReset('headSelO_"+ lNum +"');\" onClick=\"headSel('"+ lNum +"','Ƽ��11����');\"><span class=\"depth_1\">Ƽ��11����</span></a>"
			+ "</div>");
		vC2(gubun);
	}catch(e){}
}
function vSeller(flag)
{
	vLayer(flag, "sellerC_11st",
		"<dl>"
		+"<dd><a href=\"javascript:goStatUrl(_SOFFICE_URL_,'MAA0112');\">�������ǽ�</a></dd>"
		+"<dd><a href=\"javascript:goStatUrl(_SOFFICE_URL_ + '/adcentre/AdvertMain.tmall','MAA0113');\">�Ǹ��ڱ�����</a></dd>"
		+"<dd><a href=\"javascript:goStatUrl(_GNB_CONTEXT_PATH_ + '/brandadcenter/Main.tmall','MAA0116');\">�귣�層����</a></dd>"
		+"<dd><a href=\"javascript:goStatUrl(_SELLER_URL_,'MAA0114');\">������</a></dd>"
		//20121203_yym�߰�/����
		+"<dd><a href=\"javascript:goStatUrl('http://shop.11st.co.kr/minimall/AuthMiniMallAction.tmall?method=goRepMinimallMng','MAA0117');\">�̴ϸ�����</a></dd>"
		+"</dl>");
}
function goRepMinimallMng() {
	if(funcCheckIsLogin()) {
		goCommonUrl('http://shop.11st.co.kr/minimall/AuthMiniMallAction.tmall?method=goRepMinimallMng');
	} else {
		login();
	}
}

// �˻�â ���̾� ����ó��
var _objSrchRunFlag;
var _objSrchRun;
var _mouseSrchStatus;
function initSrchHidden(idName) {
	if($ID(idName).style.display == "block") {
		$ID(idName).onmouseover = function () {_mouseSrchStatus=true;}
		$ID(idName).onmouseout  = function () {_mouseSrchStatus=false;}
		if(!_objSrchRunFlag) {
			_objSrchRun = window.setInterval("doSrchHidden('"+idName+"')", "3000");
			_objSrchRunFlag = true;
		}
	}
}
function doSrchHidden(idName) {
	if(!_mouseSrchStatus) {
		layerHidden(idName);
		window.clearInterval(_objSrchRun);
		_objSrchRunFlag = false;
	}
}
function doSrchReset(idName) {
	_objSrchRunFlag  = false;
	_mouseSrchStatus = false;
	doSrchHidden(idName);
}
/**
 * 2011.02.25 - �۸�� �˻����� function�� searchManager�� ��� ���� �и��Ѵ�.
 */
var searchManager = {
	isAkcLoaded : false,
	akcObj : "",
	getSSLParam: function(){
		var rtnParamString = "";
		if(document.location.protocol === "https:"){
			rtnParamString = "isSSL=Y";
		}
		return rtnParamString;
	},
	init : function(renew){
		document.domain = '11st.co.kr';
		var _this = this;
		var _param = this.getSSLParam();
		var _src =  "//www.11st.co.kr/jsp/service/common/autoKeywordComplete.jsp?"+_param;

		if(!this.isAkcLoaded){
			jQuery("#autoArea")
			.attr("src",  _src)
			.css("display", "block")
			.one("load", function(){
				_this.akcObj = document.getElementById("autoArea").contentWindow.autoKeywordComplete;
				_this.akcObj.setIntervalObj4FF();
				
				try {
			        jQuery('#gnbTxtAd_divId').attr('data-log-actionid-label', 'open');
			        jQuery('#gnbTxtAd').attr('data-log-body', "{'referer':'" + rakeLogPageInfo.PageInfo.page_id + "'}");
			        rakeLog.sendRakeLog(jQuery('#gnbTxtAd')[0], 'click');
			    } catch (e) {}
			});

			this.isAkcLoaded = true;
		}
	},

	openAkc : function(){
		try{
			if(this.akcObj){
				this.akcObj.openAkc();
			}
		} catch(e){}
	}
};


/**
 * [2012.11.30 - �迵��] Ÿ��˻����� function(OM ����)
 */
var townSearchManager = {
	isAkcLoaded : false,
	akcObj : "",
	getSSLParam: function(){
		var rtnParamString = "";
		if(document.location.protocol === "https:"){
			rtnParamString = "isSSL=Y";
		}
		return rtnParamString;
	},
	init : function(){
		var _this = this;
		var _param = this.getSSLParam();
		if(!this.isAkcLoaded){
			jQuery("#autoArea")
			.attr("src", "/jsp/town/search/townAutoKeywordComplete.jsp?"+_param)
			.css("display", "block")
			.one("load", function(){
				_this.akcObj = document.getElementById("autoArea").contentWindow.townAutoKeywordComplete;
				_this.akcObj.setIntervalObj4FF();
			});

			//�̺�Ʈ �ߺ�
			/*
			jQuery("#AKCKwd").bind("keypress", function(event){
				if(event.keyCode == 13){
					goTownSearch();
				}
			});
			*/

			this.isAkcLoaded = true;
		}
	},

	openAkc : function(){
		try{
			if(this.akcObj){
				this.akcObj.openAkc();
			}
		} catch(e){}
	}
};

/* Web Javascript Error Logging Start */
var Logger = new Logger();

function Logger() {
	this.Filters = new Array();

	this.IsFiltered = function() {
		var iter;
		for (var iter = 0; iter < Logger.Filters.length; iter++) {
			var filter = Logger.Filters[iter];
			if (filter())
				return true;
		}
		return false;
	}

	this.LoggingException = function(ex) {
		LoggingMsg("des:" + ex.description + " / msg:" + ex.message);
	}

	this.ErrorHandler = function(pMsg, pURL, pLines) {
		Logger.LoggingMsg("msg:" + pMsg + " / url:" + pURL + " / lines:" + pLines);
	}

	this.LoggingMsg = function(description) {
		if (Logger.IsFiltered())
			return;
		var hostname = document.location.hostname;
		var errPageURL = GetLoggingPoint(hostname);
		var queryString = "";
		queryString = AddErrorQuery(queryString, "Source", document.location.pathname);
		queryString = AddErrorQuery(queryString, "Description", description);
		queryString = AddErrorQuery(queryString, "Query", document.location.search);
		queryString = AddErrorQuery(queryString, "Server", document.location.hostname);
		errPageURL += queryString;
		var imgObj = document.createElement('img');
		imgObj.setAttribute("src", errPageURL);
		imgObj.setAttribute("height", 0);
		imgObj.setAttribute("width", 0);
		document.body.appendChild(imgObj);
	}

	GetLoggingPoint = function(domainName) {
		var retTag = document.location.protocol;
		return retTag + "//err.11st.co.kr/e.st";
	}

	AddErrorQuery = function(query, key, value) {
		if (query != "") query += "&";
		else query += "?";
		query += escape(key) + "=" + escape(value);
		return query;
	}
}

Logger.Filters.push(
	function() {
		return !(document.location.hostname == "www.11st.co.kr");
	}
);
/* Web Javascript Error Logging End */

/**
 * ��ǰ �̹��� ������
 */
var ImageSplit_headerCommonJs = function() {
	var imgUrl = "";
	var imgList = new Array();
	var imgSize = "";

	var $object = "";
	var orgImg = "";
	var $aTagObj = "";

	var timer = "";

	function getImageCutUrl() {
		var url = "http://search.11st.co.kr/SearchPrdAction.tmall?callBack=?";

		var data = {
				"method" : "getProductImageSplit",
				"imgUrl" : imgUrl,
				"imgSize" : imgSize
				};
		try{
			jQuery.getJSON(url, data, function(data) {
				if(data.success) {
					imgList = data.LARGE_IMG_LIST;
					if(imgList.length > 0) {
						drawSplitImage();
					}
				}
			})
		} catch(e) {}
	}

	function drawSplitImage() {
		try{
			if( timer != "" ) {
				var errorImg = jQuery(orgImg).attr("onError");
				var className = jQuery(orgImg).attr("class");

				for(var i=0 ; i < imgList.length && i < 5 ; i++) {
					var cutImg = new Image();
					var imgUrl = imgList[i].replace('/280x280/', '/80x80/');
					if ( imgUrl.indexOf(_UPLOAD_URL_ ) <  0 )
					{
						imgUrl = _UPLOAD_URL_ + imgUrl;
					}
					cutImg.src = imgUrl;

					cutImg.width = orgImg.width;
					cutImg.height = orgImg.height;
					jQuery(cutImg).addClass(className);
					jQuery(cutImg).error(function(){
						jQuery(this).attr("src", errorImg); // No Image
					})

					$aTagObj.append(cutImg);
				}

				$object.data("SPLIT_IMG",jQuery("img", $aTagObj));

				showAnimate();
			}
		} catch(e) {}
	}

	function showAnimate() {
		try{
			$object.addClass("numwrap");
			$object.animate({width: (imgSize +1)*imgList.length + 1}, 200);
			jQuery(orgImg).remove();
		} catch(e) {}
	}

	return {
		show : function(obj, image, size) {
			imgUrl = image;
			imgSize = size;

			try{
				$object = jQuery(obj).parent();
				orgImg = jQuery("img", $object).get(0);

				$aTagObj = $object.find("a");

				$object.data("ORG_IMG", orgImg);

				timer = setTimeout(function() {

					if( $object.data("SPLIT_IMG") == undefined ) {
						// Split Image Data Load
						getImageCutUrl();
					} else {
						$aTagObj.append($object.data("SPLIT_IMG"));
						imgList = $object.data("SPLIT_IMG");
						showAnimate();
					}

				}, 100);

				$object.one("mouseleave", function() {
					clearTimeout(timer);
					timer = "";
					$object.animate({width: imgSize + 2}, 1, function() {
						$object.find("a").html("");
						$object.find("a").append($object.data("ORG_IMG"));
						$object.removeClass("numwrap");
					});
				});
			} catch(e) {}
		}
	}

}();

var AdBanner_headerCommonJs = function() {
	this.description = "���� AJAX�� ��������";
	this.preFixUrl = "";
	this.useAdSwitch = "";
	this.adUrl = "";
	this.useTrace = false;
	this.isPriorityDisplay = false;

	this.init = function(){
		this.chkUseAdSwitch();
		var isDisplay = this.checkDispCondition();
		if(isDisplay){
			var targetUrl = this.preFixUrl + this.adUrl;
			try {
				$.ajax({
					url: targetUrl,
					dataType: "script",
					scriptCharset: "euc-kr"
				});
			} catch(e){
				this.trace(e.message);
			}
		}
	};

	this.setIsPriorityDisp = function(boolVal){
		this.isPriorityDisplay = boolVal;
	};

	// ���������� üũ�Ѵ�.
	this.checkDispCondition = function(){
		var isDisplay = this.useAdSwitch && (screen.width > 1024);

		if(this.isPriorityDisplay){ // �⺻ ���ǿ� ���� �Ұ�����, true�̸� ������ �����Ѵ�.
			isDisplay = true;
		}
		return isDisplay;
	};

	this.setPreFixUrl = function(preFixUrl){
		this.preFixUrl = preFixUrl;
	};

	this.setUseAdSwitch = function(useAdSwitch){
		this.useAdSwitch = useAdSwitch;
	};

	this.chkUseAdSwitch = function(){
		if(this.useAdSwitch == ""){
			this.useAdSwitch = _dsSeverMode;
		}
	};

	this.setAdUrl = function(adUrl){
		this.adUrl = adUrl;
	};

	this.trace = function(msg){
		if(this.useTrace){
			if(console){
				console.log("[LOG] AdBanner_headerCommonJs: " + msg)
			}
		}
	}
};

/*
 * JSONP CALL
 */
var getJsonpData = function() {
	var url = "";
	var callbackName = "";
	var charset = "utf-8";
	var useTrace = false;
	var errorCallbackName = "";
	var errorCallbackCalledCnt = 0;
	var trace = function(msg){
		if(useTrace && window.console){
			console.log("[headerCommonJs.getJsonData] " + msg);
		}
	};

	return {
		setUseTrace: function(bolVal){
			useTrace = bolVal;
		},
		getUrl: function() {
			return url;
		},
		setUrl : function(pUrl) {
			url = pUrl;
		},
		setCallbackName : function(nm) {
			callbackName = nm;
		},
		setCharSet : function(char) {
			charset = char;
		},
		setErrorCallbackName : function(cbnm) {
			errorCallbackName = cbnm;
		},
		init : function() {
			jQuery.ajax({
				url: url,
				dataType: "jsonp",
				jsonp: false,
				scriptCharset: charset ,
				jsonpCallback: callbackName,
				success: function(data){
					trace("success: " + data);
				},
				complete: function(jqXHR, textStatus){
					trace("complete: jqXHR " + jqXHR.status);
					trace("complete: textStatus " + textStatus);
				},
				error: function(jqXHR, textStatus, errorThrown) {
					try {
						errorCallbackCalledCnt++;
						if(errorCallbackCalledCnt <= 2) { // ���� �߻��� �ִ� 2������ error�� �ݹ��Լ� ȣ��
							eval("("+ errorCallbackName + ")()");
						}
					} catch(error) {}
					trace("error: status - " + jqXHR.status);
					trace("error: textStatus - " + textStatus);
					trace("error: errorThrown - " + errorThrown);
				}
			});
		}
	}
}

function comprePrdPrice(modelNo, prdNo){
	var formObj = document.forms["searchForm"];

	var kwd = '';

	if ( formObj && formObj.kwd )
	{
		kwd = formObj.kwd.value;
	}

	//document.location.href = "http://search.11st.co.kr/ModelSearchAction.tmall?method=getModelSearchDetail&schFrom=TSRCH&targetTab=MODEL&modelNo=" + modelNo + "&clickedPrdNo=" + prdNo + "&kwd=" + kwd + "&sortCd=L";
	var pageUrl =  "http://search.11st.co.kr/ModelSearchAction.tmall?method=getModelSearchDetail&schFrom=TSRCH&targetTab=MODEL&modelNo=" + modelNo + "&clickedPrdNo=" + prdNo + "&kwd=" + kwd + "&sortCd=L";
	window.open(pageUrl, "_blank");
}

Date.prototype.toYYYYMMDD = function(delim) {
	if (!delim) delim = "";
	var year = this.getFullYear().toString();
	var month = this.getMonth() + 1;
	var day = this.getDate();

	month = (month < 10 ? "0" : "") + month;
	day = (day < 10 ? "0" : "") + day;

	return year + delim + month + delim + day;
}

function openBasketSearchTab(kwd) {
	var url = "http://shopping.basket.co.kr/shoppingsearch/listSearchMain.do?keyword="+ encodeURI(encodeURI(kwd));
	window.open(url,"basketSearchPop");
}

function getNitmusParam(existParam){
	var param = TMCookieUtil.getSubCookie(0,'nitmus');
	var result = "";

	if (param !== ""){
		var delimiter = existParam ? "&" : "?";
		result = delimiter + decodeURIComponent(param);
	}

	return appendTimeStamp(result);
}

/**
 * Ÿ�� ��ǰ �� �̵�
 */
function goTownPrdDtl(prdNo, target) {
	goCommonUrl(_TOWN_PRODUCT_DETAIL_URL_ + prdNo, target);
}
/**
 * Ÿ�� �������� �̵�
 */
function goTownShop(shopNo, target) {
	goCommonUrl(_TOWN11ST_URL_ + "/" + shopNo, target);
}
/**
 * ��� ī�װ� �̵�
 */
function goTownDeliveryCtgr(ctgrNo, target) {
	var url =  _TOWN11ST_URL_ + "/town/TownCategoryListAction.tmall?method=getDispTownCtgrDeliver1Depth&dispCtgrNo=";
	goCommonUrl(url + ctgrNo, target);
}

/**
 * ȸ�� SNS ��ũ
 */
function openSnsUrl(snsName, snsMemId) {

	if (snsName == "Twitter") {
		strSnsLink = "http://twitter.com/" + snsMemId;
		window.open( strSnsLink);
	}
	else if (snsName == "Facebook") {
		strSnsLink = "http://www.facebook.com/profile.php?id=" + snsMemId;
		window.open( strSnsLink);
	}
	else if (snsName == "Me2Day") {
		strSnsLink = "http://me2day.net/" + snsMemId;
		window.open( strSnsLink);
	}
	else if (snsName == "CLog") {
		strSnsLink = "http://c.cyworld.com/" + snsMemId;
		window.open( strSnsLink);
	}
	else if (snsName == "WeScore") {
		strSnsLink = "http://www.wescore.co.kr/wescore/wsMain.action";
		window.open( strSnsLink);
	}
	else if (snsName == "11ST") {
		// �ƹ��͵� ����.
	}
}

/**
 *Town�α׾ƿ�
 */
function TownLogout(code)	{
	var retUrl 	= encodeURIComponent(document.location.href);
	var xFrom 	= "";
	if ( retUrl == _TOWN11ST_URL_ + "/html/main.html" )	{
		xFrom = "main^gnb";
	}
	try{SCP_INIT.stop();}catch(e){};
	goStatUrl(_TOWN11ST_URL_+"/login/Logout.tmall?xfrom=" + xFrom, code);
}

/**
 *GNB Ÿ�� ȸ�� ����
 */
function setGnbTownLogInArea()	{
	var gnb_login = $ID("gnb_login");
	var gnb_member = $ID("gnb_member");
	try{
		if(!funcCheckIsLogin()) {
			gnb_login.innerHTML = '<a href="javascript:login(\'TMA0301\');" class="gnb_login">�α���<\/a>';
			gnb_member.innerHTML = '<a href="javascript:join(\'TMA0303\');">ȸ������<\/a>';
		} else {
			gnb_login.innerHTML = '<a href="javascript:TownLogout(\'TMA0302\');" class="gnb_logout">�α׾ƿ�<\/a>';
			gnb_member.innerHTML = '<a href="javascript:goMemberInfoPages(\'TMA0304\');">ȸ������<\/a>';
		}
	}catch(e){};
}

/**
 *Town ������ ��� �޴� ���� 11����
 */
function vMy_Town(flag){
	vLayer(flag, "mYInFo_11st",
			"<dl>"
			+"<dd><a href=\"javascript:goStatUrl(_ORDER_HIS_URL_, \'TMA0307\');\">�ֹ������ȸ</a></dd>"
			+"<dd><a href=\"javascript:goStatUrl(_TOWN11ST_URL_ +'/myTown/main.tmall?method=getMain', \'TMA0308\');\">���� 11����</a></dd>"
			+"<dd><a href=\"javascript:goStatUrl(_TOWN11ST_URL_ +'/myTown/myShopList.tmall?method=getMyShopListMain', \'TMA0309\');\">���ã�����</a></dd>"
			+"<dd><a href=\"javascript:goStatUrl(_TOWN11ST_URL_ +'/myTown/myCouponList.tmall?method=getMyCouponListMain', \'TMA0310\');\">���ã������</a></dd>"
			+"</dl>");
}

/**
 *Town �ٷΰ��� ���̾�
 */
function vDi_Town(lName)
{
	try{
		var isShow = jQuery("#lay_direct_town").css("display");
		if(isShow == "none") {
			vLayer(true, lName,
					"<div class=\"gbox\">"
					+ "<div class=\"lay_directTxt\">11���� <span id=\"gbox_text\"></span>�Դϴ�.</div>"
					+ "</div>"
					+ "<div class=\"wbox\" id=\"divDirectBenefit\"></div>"
					+ "<div class=\"btn_wrap\">"
					+ "<a href=\"javascript:ShortcutGnb('TMA0201');layerHidden('lay_direct_town');\" class=\"btn2\">�ٷΰ��� ��ġ�ϱ�</a>"
					+ "</div>");
				drawDirectLayer();
				show_direct();
		}
	}catch(e){}
}


/**
 * Ÿ�� ���� �˻�â ���� ����.
 */
function clearTownAdUrl(formObj){
	try {
		if(formObj == null ){
			formObj = document.GNBSearchForm;
		}
		if(formObj.adUrl.value != ""  ){
			formObj.keyword.value = "";
			formObj.adUrl.value = "";
		}
	} catch(e) {}
}

// script �±׸� �������� �ε� �� IE���� js�� 2�� �ε��� �Ǵ� ���� �ذ� �ڵ�
if(typeof jQuery !== "undefined"){
	jQuery.ajaxPrefilter(function(options){
		if((options.url).indexOf("ds.11st.co.kr") !== -1 ){
			options.cache = true;
		}
	});
}

//���� �ֱ� �� ��ǰ ��Ű �̵�
(function(){
	var cookieValue = getCookie("PRODUCT_CHECK_PRDNO");
	if(cookieValue && cookieValue != undefined && cookieValue != null && cookieValue != ""){
		cookieValue = cookieValue.replace(/:/gi,"?@");
		TMCookieUtil.add(3,"MH_PRD",cookieValue);
		setCookie("PRODUCT_CHECK_PRDNO","",new Date("2011"));
	}
})();




//SSO üũ
function funcCheckIsSSOLogin() {
	var arg = "SKPSSO=";
	var alen = arg.length;
	var clen = document.cookie.length;
	var i = 0;

	while(i < clen){
		var j = i + alen;
		if(document.cookie.substring(i, j) == arg)
			return true;
		i = document.cookie.indexOf(" ", i) + 1;
		if(i == 0) break;
	}
	return false;
}

/**
 * IP ������ ���� ������ ����
 */
var StartPageManager=function (){
    var ENTERANCE="11ST_ENTERANCE";
    var ENTERANCE_EN="EN";
    var ENTERANCE_KR="KR";

    var CONN_IP_LOC="CONN_IP_LOC";
    var CONN_IP_DOM="DOM";
    var CONN_IP_FOR="FOR";

    var VIEW_DLV_LAYER="VIEW_DLV_LAYER";

    var initialize=function (){
        jQuery.urlParam=function (key){
            var result=new RegExp(key+"=([^&]*)", "i").exec(window.location.search);
            return result && result[1] || "";
        };

        if(jQuery.urlParam('isGlobal')=="Y"){
        	setCookie(CONN_IP_LOC, CONN_IP_FOR);
            //showLayer();
            //toastBanner(false);
        }else{

        	// ���Ӿ����� ���� ����
        	var cookieValConnIpLoc=TMCookieUtil.getSubCookie(2, CONN_IP_LOC).toUpperCase();

        	if(cookieValConnIpLoc==null || cookieValConnIpLoc=="" || cookieValConnIpLoc=="EMPTY"){
        		getDomesticAccessYn();
        	}

        	cookieValConnIpLoc=TMCookieUtil.getSubCookie(2, CONN_IP_LOC).toUpperCase();

        	// �ؿ����� IP �ΰ��
        	if(cookieValConnIpLoc==CONN_IP_FOR){
        		//toastBanner(false);
        		//showLayer();
        	}else{
        		//toastBanner(true);
        	}
        }
    };

    // ���� ���ӿ���
    var getDomesticAccessYn=function (){
        try{
            jQuery.ajax({
                            url          :"http://www.11st.co.kr/browsing/Main.tmall?method=getDomesticAccessYnAjax",
                            type         :"post",
                            dataType     :"jsonp",
                            scriptCharset:"UTF-8",
                            crossDomain  :true,
                            success      :function (data){
                                if(data.result=="N"){
                                	//�ؿ� ���� IP
                                    setCookie(CONN_IP_LOC, CONN_IP_FOR);
                                }else{
                                	//���� ���� IP
                                    setCookie(CONN_IP_LOC, CONN_IP_DOM);
                                }
                            },
                            error :function (xhr, status, error){
                            }
                        });
        }catch(e){}
    };

    var showLayer=function (){

    	var cookieVal=TMCookieUtil.getSubCookie(2, ENTERANCE).toUpperCase();

        if(cookieVal==null || cookieVal=="" || cookieVal=="EMPTY"){
        	jQuery("#global_top_cntr").show();
        }else{
        	showDlvInfoLayer();
        }
    };

    var showDlvInfoLayer=function (){
    	var cookieVal=TMCookieUtil.getSubCookie(2, VIEW_DLV_LAYER).toUpperCase();

        if(cookieVal==null || cookieVal=="" || cookieVal=="EMPTY"){
        	jQuery("#global_deliv_top").show();
        }
    };

    var hideDlvInfoLayer=function (noMoreView){

   		jQuery("#global_deliv_top").hide();

    	if(noMoreView){
    		setCookie(VIEW_DLV_LAYER, "N");
    	}
    };

    var hideLayer=function (){
        jQuery("#global_top_cntr").hide();
    };

    var goEnglish11st=function (){
        location.href="http://global.11st.co.kr";
    };

    var goKorean11st=function (){
        location.href="http://www.11st.co.kr/html/main.html";
    };

    var setCookie=function (cookieName, cookieValue){
        TMCookieUtil.add(2, cookieName, cookieValue);
    };

    // ��Ű�� �����Ǿ�����, footerJsData_v6.js(inc_footer_data_v6.js ���� ȣ���Ѵ�.)
    /*
    var toastBanner=function (isKor){
    	return;
        if(typeof(toastBnnr)!="undefined"){
        	try{
        		FooterData.toastBnnr.init(isKor, toastBnnrState);
        	} catch(e){}
        }
    };
    */

    return {
        init:function (){
            initialize();
        },
        show:function (){
            showLayer()
        },
        hide:function (){
            hideLayer();
        },
        hideDlvInfoLayer :function (noMoreView){
        	hideDlvInfoLayer(noMoreView);
        },
        korean  :function (){
            setCookie(ENTERANCE, ENTERANCE_KR);
            goKorean11st();
        },
        english :function (){
            setCookie(ENTERANCE, ENTERANCE_EN);
            goEnglish11st();
        }
    }
}();

//�ٴ� ���������� ���� ���������ϱ� ��ư
function adultCrtf(code)	{
	var retUrl 	= encodeURIComponent(document.location.href);
	var referer = "";

	if(retUrl.indexOf("www.11st.co.kr") != -1){ //11����
		referer = "www.11st.co.kr";
		var xFrom 	= "";
		if ( retUrl == _GNB_CONTEXT_PATH_ + "/html/main.html" )	{
			xFrom = "main^gnb";

		}
		retUrl + "&xfrom=" + xFrom;
	}
	else if(retUrl.indexOf("town.11st.co.kr") != -1){ //Ÿ��11����
		referer = "town.11st.co.kr";
	}

	goStatUrl(_LOGIN_TARGET_URL_+"/login/AdultCrtf.tmall?returnUrl=" + retUrl +"&referer="+ referer , code);
}

/**
 * @author celestialmoon
 * @reason ������ȯ��谳��(P1206004) PJ�� �߰�
 */
// ----- ������ȯ��谳���� ��� ���� -----
var ad_headerCommonJs = ad_headerCommonJs || {};
ad_headerCommonJs.util = ad_headerCommonJs.util || {};
ad_headerCommonJs.util.cookie = ad_headerCommonJs.util.cookie || {};
ad_headerCommonJs.util.instance = ad_headerCommonJs.util.instance || {};

ad_headerCommonJs.util.cookie.CookieUtil = function() {
	this.defaultCookieOptions = {
		expires: 1,
		path: '/',
		domain: ".11st.co.kr"
	};
};
ad_headerCommonJs.util.cookie.CookieUtil.prototype = {
	isExistCookie: function(key) {
		var result = null;

		if (result = new RegExp(key + "=(.*?)(?:;|$)").exec(document.cookie)) return true;
		return false;
	},
	cookie: function(key, value, options) {
		if (arguments.length > 1) {
			options = options || this.defaultCookieOptions;

			if (value === null || value === undefined || value == '') return;

	        if (options.expires.constructor != Date) {
	        	var expireDate = new Date();
	        	expireDate.setDate(expireDate.getDate() + options.expires);
	        	options.expiresDate = expireDate;
	        }

	        var cookieOptionsValue = key + '=' + value +
	        	(options.expires == -1 ? '' : '; expires=' + options.expiresDate.toUTCString()) +
	        	(options.path ? '; path=' + (options.path) : '') +
	        	(options.domain ? '; domain=' + (options.domain) : '') +
	        	(options.secure ? '; secure' : '');

	        document.cookie = cookieOptionsValue;
		}
		else {
			var result = null;

			if (result = new RegExp(key + "=(.*?)(?:;|$)").exec(document.cookie))
				return result[1];
		}
	}
};

ad_headerCommonJs.util.cookie.ConversionCookieQueue = function(parameter) {
	parameter = parameter || {};

	this.cookieUtil = new ad_headerCommonJs.util.cookie.CookieUtil();
	this.isDebugEnabled = false;

	var thisObj = this;
	var cookieKey = parameter.cookieKey || 'adC';
	var maximumQueueSize = parameter.size || 10;
	var eachItemMatchedKeyIndex = parameter.eachItemMatchedKeyIndex || 2;
	var eachValueDelimiter = '^', eachQueueValueDelimiter = '!';
	var queue = null;
	var requstStackArray = null;
	var validAction = null;

	this.add = function(trcNo, prdNo, typeAreaGubun, actionType) {
		if (arguments.length == 0 || isNaN(trcNo) || parseFloat(trcNo) <= 0) return;
		if (eachItemMatchedKeyIndex > arguments.length) eachItemMatchedKeyIndex = -1;
		var values = Array.prototype.slice.call(arguments, 0, 3);

		removeUnnecessaryValue(values);
		this.trimQueue();

		var nowDate = new Date();
		queue.push(values.join(eachValueDelimiter) + eachValueDelimiter + nowDate.getDay() + '' + nowDate.getHours());

		if (this.isDebugEnabled) this.log(queue.join(eachQueueValueDelimiter) + " ==> " + values.join(', '));

		this.cookieUtil.cookie(cookieKey, queue.join(eachQueueValueDelimiter));

		if (arguments.length > 3) this.requestToServer(prdNo, actionType);
	};
	this.take = function() {
		if (this.isEmpty()) return null;
		return queue.splice(0, 1).join('');
	};
	this.isEmpty = function() {
		return (queue.length == 0);
	};
	this.getSize = function() {
		return (queue.length);
	};
	this.find = function(value) {
		if (!this.isEmpty() && value) {
			var targetValue = (value instanceof Array ? (eachItemMatchedKeyIndex != -1 ? value[(eachItemMatchedKeyIndex - 1)] : value.join('')) : value);
			var existsMatchedTarget = false;

			for (var i = 0; i < thisObj.getSize.call(thisObj); ++i) {
				if ((eachItemMatchedKeyIndex != -1 ? queue[i].split(eachValueDelimiter)[(eachItemMatchedKeyIndex - 1)] : queue[i].join('')) == targetValue) {
					existsMatchedTarget = true;
					break;
				}
			}

			return {has: existsMatchedTarget, index: i};
		}

		return {has: false};
	};
	this.hasValue = function(value) {
		return (this.find(value)).has;
	};
	this.trimQueue = function() {
		if (queue.length >= maximumQueueSize)
			for (var j = 0, arrayLength = queue.length; j <= arrayLength - maximumQueueSize; ++j) thisObj.take.call(thisObj);
	};
	this.requestToServer = function(prdNo, actionType) {
		if (this.hasValue(prdNo) && isValidAction(actionType)) {
			if (!requstStackArray) requstStackArray = [];
			var requestImg = new Image();
			requstStackArray[0] = requestImg;

			requestImg.src = 'http://www.11st.co.kr/ad11st/Ad11stAction.tmall?method=saveConversionLog' +
				'&prdNo=' + prdNo + '&actionType=' + actionType + '&noCache=' + (new Date()).getTime();
		}
	};
	this.log = function(value) {
		var divElm = document.getElementById("_$_logArea_$_");

		if (!divElm) {
			divElm = document.createElement("div");
			divElm.setAttribute("id", "_$_logArea_$_");

			if (document.body) document.body.appendChild(divElm);
			else if (document.documentElement) document.documentElement.appendChild(divElm);
		}

		divElm.innerHTML = divElm.innerHTML + value + "<br />";
	};
	function removeUnnecessaryValue(value) {
		var matchedInfo = thisObj.find.call(thisObj, value);
		if (matchedInfo.has) queue.splice(matchedInfo.index, 1);

		if (!thisObj.isEmpty.call(thisObj)) {
			var nowDate = new Date();
			var compareDate = new Date(Date.parse(nowDate) - (1 * 1000 * 60 * 60 * 24));
			var dayInfo = null, timeInfo = null;
			var isRemoveElement = false;

			nowDate.setMinutes(0, 0, 0);

			for (var i = (thisObj.getSize.call(thisObj) - 1); i >= 0; --i) {
				dayInfo = queue[i].split(eachValueDelimiter)[3].split('');
				timeInfo = (dayInfo.splice(1, (dayInfo.length - 1))).join('');

				if (nowDate.getDay() != dayInfo) {
					if (Math.abs(((nowDate.getDay() - dayInfo) % 5)) > 1) isRemoveElement = true;
					else {
						compareDate.setHours(timeInfo, 0, 0, 0);
						if (((nowDate.getTime() - compareDate.getTime()) / (1000 * 60 * 60)) > 24) isRemoveElement = true;
					}

					if (isRemoveElement) queue.splice(i, 1); isRemoveElement = false;
				}
			}
		}
	};
	function buildQueueUsingCookieValue() {
		cookieValue = thisObj.cookieUtil.cookie.call(thisObj.cookieUtil, cookieKey);
		return cookieValue.split(eachQueueValueDelimiter);
	};
	function isValidAction(actionType) {
		if (!validAction) validAction = ['order', 'basket', 'jjim', 'buy'];
		for (var i = 0; i < validAction.length; ++i)
				if (validAction[i] === actionType) return true;
		return false;
	};

	try {
		queue = (this.cookieUtil.isExistCookie(cookieKey) ? buildQueueUsingCookieValue() : []);
		removeUnnecessaryValue();
	}
	catch (error) {
		queue = [];
	}

	this.cookieUtil.cookie(cookieKey, queue.join(eachQueueValueDelimiter));
};

(function() {
	ad_headerCommonJs.util.instance.ConversionCookieQueue = new ad_headerCommonJs.util.cookie.ConversionCookieQueue({
		cookieKey: 'adC',
		size: 10,
		eachItemMatchedKeyIndex: 2
	});
})();

// stat(), ad_headerCommonJs.util.instance.ConversionCookieQueue.add(), goStatPrdDtl()
function goAdConversionStatPrdDtlTrc(prdNo, code, target, typGubn, areaGubn, trcNo) {
	stck(typGubn, areaGubn, trcNo);
	ad_headerCommonJs.util.instance.ConversionCookieQueue.add(trcNo, prdNo, (typGubn + '' + areaGubn));
	goStatPrdDtl(prdNo, code, target);
};
// ----- ���� ��ȯ ��� ������ ��� �� -----
var headSelOFocusflag = false;

function vSearch(gubun)
{
	try{
		var lNum = "0";
		if(gubun == "f") {
			lNum = "a";
		}
		var headSelO = "headSelO_"+lNum;
		//alert( jQuery('#' + headSelO).css('display'));
		if ( jQuery('#' + headSelO).css('display') == 'none' )
		{
			vLayer(true, headSelO,
				//"<ul>"
				"<li><a id=\"vSB_"+ gubun +"_1\" href=\"javascript:setSearchTarget('T','"+ gubun +"');doSrchReset('headSelO_"+ lNum +"');\" onClick=\"headSel('"+ lNum +"','���հ˻�');\"><em>���հ˻�</em></a>"
				+ "		<ul>"
				+ "			<li><a id=\"vSB_"+ gubun +"_3\" href=\"javascript:setSearchTarget('N','"+ gubun +"');doSrchReset('headSelO_"+ lNum +"');\" onClick=\"headSel('"+ lNum +"','��ǰ��ȣ');\">��ǰ��ȣ</a></li>"
				+ "			<li><a id=\"vSB_"+ gubun +"_4\" href=\"javascript:setSearchTarget('SL','"+ gubun +"');doSrchReset('headSelO_"+ lNum +"');\" onClick=\"headSel('"+ lNum +"','�Ǹ���');\">�Ǹ���</a></li>"
				+ "		</ul>"
				+ "</li>"
				+ "<li><a id=\"vSB_"+ gubun +"_5\" href=\"javascript:setSearchTarget('SEMANTIC','"+ gubun +"');doSrchReset('headSelO_"+ lNum +"');\" onClick=\"headSel('"+ lNum +"','�ø�ƽ�˻�');\">�ø�ƽ�˻�</a></li>"
				+ "<li><a id=\"vSB_"+ gubun +"_6\" href=\"javascript:setSearchTarget('CONTENTS','"+ gubun +"');doSrchReset('headSelO_"+ lNum +"');\" onClick=\"headSel('"+ lNum +"','���θ���');\">���θ���</a></li>"
				+ "<li><a id=\"vSB_"+ gubun +"_2\" href=\"javascript:setSearchTarget('MODEL','"+ gubun +"');doSrchReset('headSelO_"+ lNum +"');\" onClick=\"headSel('"+ lNum +"','���ݺ�');\">���ݺ�</a></li>"

				+ "<li class=\"site_line\"><a id=\"vSB_"+ gubun +"_7\" href=\"javascript:setSearchTarget('MO','"+ gubun +"');doSrchReset('headSelO_"+ lNum +"');\" onClick=\"headSel('"+ lNum +"','����11����');\">����11����</a></li>"
				+ "<li><a id=\"vSB_"+ gubun +"_8\" href=\"javascript:setSearchTarget('TOUR11ST','"+ gubun +"');doSrchReset('headSelO_"+ lNum +"');\" onClick=\"headSel('"+ lNum +"','����11����');\">����11����</a></li>"
				+ "<li><a id=\"vSB_"+ gubun +"_9\" href=\"javascript:setSearchTarget('TICKET','"+ gubun +"');doSrchReset('headSelO_"+ lNum +"');\" onClick=\"headSel('"+ lNum +"','Ƽ��11����');\">Ƽ��11����</a></li>"
				);
			vSearch2(gubun);

			jQuery('#' + headSelO + ' li').bind('mouseenter mouseleave focusin focusout', function(evt){
					var etype = evt.type, $tObj = jQuery(evt.currentTarget);
					try {
						switch (etype)
						{
							case 'mouseenter' :
							case 'focusin':
								headSelOFocusflag = true;
								break;
							case 'mouseleave' :
							case 'focusout' :
								headSelOFocusflag = false;
								setTimeout('hiddendHeadSelO("'+ headSelO + '")', 1000);
								break;
						}
					} catch(e){}
				}
			)
		}
		else
		{
			jQuery('#' + headSelO).css('display', 'none');
		}
	}catch(e){}
}

function hiddendHeadSelO(headSelO)
{
	if (!headSelOFocusflag)
	{
		layerHidden(headSelO);
	}
}

HeaderComm.SimpleFIOUtil = (function(){
	var lastObj;
	var desc = {ver: 1.3, appNick: "SimpleFocusInOutUtil", desc: "It makes keyboard focus events automatically."};
	var outFnObj, execSkip, eventHandler = {
		setEvent: function(st){
			var inFnObj, _this = this;
			// put a last focusable object.
			this.setLastObj(st);
			jQuery(st).bind({
				"focusin" : function(evt){
					inFnObj = fnExtractor.getFn(evt, this, "mouseover");
					_this.exec(outFnObj, this);	// ������ü�� out event���� ����
					_this.exec(inFnObj, this);	// ���� ��ü�� in evet ����
				}
				,"focusout": function(evt){
					var target = evt.target;
					var tmpOutFnObj = fnExtractor.getFn(evt, this, "mouseout");
					if(tmpOutFnObj.fn !== "NaF"){
						outFnObj = tmpOutFnObj;
					}
					_this.execForLastObj(outFnObj, this, target); // focusin�� �� �׸��� ���� ���, out�� �����Ų��.
				}
			});
		},
		exec: function(fn, obj){
			try {
				var _fn = fn.fn;
				if(_fn && !execSkip && _fn !== "NaF"){  // check for an executable function
					_fn(fn.evt, obj);
				}
			} catch(e){}
		},
		execForLastObj: function(fn, obj, target){
			if(lastObj[0] === target){
				this.exec(fn, obj);
			}
		},
		setLastObj : function(st){	// save a last focusable object.
			var obj = jQuery(st).parent().find("a").filter(":last");
			if(obj.length > 0){
				lastObj = obj;
			}
		}
	};
	var fnExtractor = {
		relatedEvt: { mouseover: "mouseenter", mouseout: "mouseleave"}
		,getFn: function(evt, obj, strEvt){
			evt.stopPropagation(); // bubble blocking
			var target = evt.target;
			var rtnFn = this.extractFn(evt, target, strEvt);// a tag fn
			if(rtnFn === "NaF"){
				var parentsObj = jQuery(target).parents();
				rtnFn = this.extractFn(evt, parentsObj, strEvt);// parents fn
			}

			return {fn: rtnFn, evt: evt};
		}
		,extractFn: function(evt, obj, strEvt){
			var rtnFn, fn, evtObj, eventsObj, $obj = jQuery(obj);
			execSkip = false;
			try {
				if($obj.get(0).tagName !== "A" && $obj.siblings("a").length > 0){
					evt.stopImmediatePropagation();
					execSkip = true;
					return "NaF";
				}else if($obj.get(0).tagName !== "BUTTON" && $obj.siblings("button").length > 0){
					evt.stopImmediatePropagation();
					execSkip = true;
					return "NaF";
				}
			} catch(e){}

			fn = $obj.attr("on" + strEvt);
			rtnFn = this.chkFn(fn, evt);
			//this.swapEvtType(evt, {focusin:"mouseover", focusout:"mouseout"});

			if(rtnFn === "NaF"){ // for jQuery bined events
				eventsObj = $obj.data("events");
				if(eventsObj && typeof(eventsObj) !== "undefined"){ // exists binded events by jQuery
					evtObj = eventsObj[this.relatedEvt[strEvt]];
					rtnFn = this.chkFn(evtObj, evt);
					this.swapEvtType(evt, {focusin:"mouseenter", focusout:"mouseleave"});

					if(rtnFn === "NaF"){
						evtObj = eventsObj[strEvt];
						rtnFn = this.chkFn(evtObj, evt);
						this.swapEvtType(evt, {focusin:"mouseover", focusout:"mouseout"});
					}
				}
			}
			return rtnFn;
		}
		/**
		 * focus in, out�� mouseenter, mouseleavel, mouseover, mouseout���� ����
		 */
		,swapEvtType: function(evt, swapObj){
			var type = evt.type, evtType = swapObj[type];

			if("focusin,focusout".indexOf(type) >= 0){
				evt.type = swapObj[type];
			}
		}
		,chkFn: function(fn, evt){
			var rtnVal = "NaF", objType = typeof(fn);
			if(objType === "function"){
				rtnVal = fn;

			} else if (fn !== null && objType === "object"){
				try {
					rtnVal = fn[0].handler;
				}catch (e){}
			}
			return rtnVal;
		}
	};
	return {
		setSelector: function(st){
			eventHandler.setEvent(st);
		},
		getDesc: function(){
			return desc;
		}
	};
})();


HeaderComm.flexibleResize = (function(){
	try {

		var $html = jQuery("html");

		if(jQuery.browser.version=="6.0"){
			$html.removeClass("fiexible_resize");
		}else{

			var adjustSize = function(){
				var isFlexible = true, lastB = true, tmp;
				var _class = $html.attr("class");
				if(jQuery(window).width() > 1220){
					if(_class === ""){
						$html.addClass("fiexible_resize");
					}
				} else {
					if(_class !== ""){
						$html.removeClass("fiexible_resize");
					}
				};
			}

			adjustSize();

			jQuery(window).bind("resize", function(){
				adjustSize();
			});
		}
	} catch(e) { }
})();


//���ڿ� ���ڸ����� �޸�
function getCommaString(val) {
	var pVal = val + "";
	if (val == undefined || val == "" || !IsNumeric(val)) return 0;
	if (pVal.length > 3) {
		var result = "";
		for (var i = pVal.length, j = 0; i >= 0; i--, j++) {
			if (i != pVal.length && i%3 == 0 && i != 0) {
				result += ",";
			}
			result += pVal.charAt(j);
		}
		return result;
	} else {
		return pVal;
	}
}

HeaderComm.hashControler = (function(){

	//������ �߰�
	var insert = function(value){
		if(document.location.hash){
			if(document.location.hash === "#$$"){
				document.location.hash += value;
			}else{
				document.location.hash += "$$" + value;
			}
		}else{
			document.location.hash = "#" + value;
		}

	};

	//������ key�� ��ϵ� ���� ������ ���� �� �߰�
	var upsert = function(key, value){
		if(document.location.hash){
			var historyText = document.location.hash.replace("#","");
			if(historyText.indexOf(key) > -1 ){
				var historyArr = historyText.split("$$");
				var changeText = "";
				for(var index=0; index < historyArr.length; index++){
					if(historyArr[index].indexOf(key) > -1){
						if(index == 0){
							changeText += key + "%%" + value;
						}else{
							changeText += "$$" + key + "%%" + value;
						}
					}else{
						if(index == 0){
							changeText += historyArr[index];
						}else{
							changeText += "$$" + historyArr[index];
						}
					}
				}
				document.location.hash = "#" + changeText;
			}else{
				document.location.hash += "$$" + key + "%%" + value;
			}
		}else{
			document.location.hash = "#" + key + "%%" + value;
		}
	};

	var remove = function(value){
		if(document.location.hash){
			var hashVal = document.location.hash;
			var valueArray = hashVal.split("$$");
			var replaceArray = new Array();
			if(valueArray.length > 1){
				for(var idx=0; idx < valueArray.length; idx++){
					if(valueArray[idx] != value){
						replaceArray.push(valueArray[idx]);
						continue;
					}
				}
				document.location.hash = "#" + replaceArray.join("$$");
			}else{
				document.location.hash = "";
			}
		}
	};

	var check = function(){

		if(document.location.hash){
			var hashVal = document.location.hash.replace(/#/g, "");
			var objArr = hashVal.split("$$");
			if(hashVal != "searchlist" && objArr.length > 0){
				var lnbSearch = false;
				for(var idx=0; idx < objArr.length; idx++){
					var data = objArr[idx];
					var dataArr = data.split("%%");
					if(dataArr.length > 1){
						if(dataArr[0] === "id"){
							jQuery("#" + dataArr[1]).parent("label").addClass("checked");
							jQuery("#" + dataArr[1]).attr("checked", true);
							var selectedText = jQuery("#" + dataArr[1]).parent("label").text();
							var selectedValue = jQuery("#" + dataArr[1]).val();
							var selectedSbj = jQuery("#" + dataArr[1]).closest("div.def_schconts", "#smartfilter_wrap").find("h3").text();
							jQuery("#selectedAttrDiv").show();
							jQuery("button[name=clearBtn]").before("<span class=\"ch_attr\" name=\"selectedAttr\" value=\"" + selectedValue + "\" key=\"" + dataArr[1] + "\" kwd=\"N\">" + selectedSbj + "-" + selectedText + "<button type=\"button\" name=\"deleteBtn\">����</button></span>");
							lnbSearch = true;
						}else if(dataArr[0] === "smtId"){
							jQuery("#" + dataArr[1]).parent("label").addClass("checked");
							jQuery("#" + dataArr[1]).attr("checked", true);
							jQuery("#" + dataArr[1]).parents("li[name=smtItem]").removeClass("selected").addClass("selected");
							var selectedText = jQuery("#" + dataArr[1]).parent("label").text();
							var selectedValue = jQuery("#" + dataArr[1]).val();
							var selectedSbj = jQuery("#" + dataArr[1]).closest("div.def_schconts", "#smartfilter_wrap").find("h3").text();
							jQuery("#selectedAttrDiv").show();
							jQuery("button[name=clearBtn]").before("<span class=\"ch_attr\" name=\"selectedAttr\" value=\"" + selectedValue + "\" key=\"" + dataArr[1] + "\" kwd=\"N\">" + selectedSbj + "-" + selectedText + "<button type=\"button\" name=\"deleteBtn\">����</button></span>");
							lnbSearch = true;
						}else {
							jQuery("input[name=" + dataArr[0] + "]", "form").val(dataArr[1]);

							if(dataArr[0] === "sortCd"){
								var $sortCdBtnArr = jQuery("[name=sortCdBtn]", "#searchCondition_wrap");
								$sortCdBtnArr.removeClass("selected");
								$sortCdBtnArr.each(function(){
									if(jQuery(this).attr("code") == dataArr[1]){
										jQuery(this).addClass("selected");
									}
								});

							}else if(dataArr[0] === "viewType"){
								var $viewTypeBtnArr = jQuery("a[name=viewTypeBtn]");
								$viewTypeBtnArr.each(function(){
									var listType = jQuery(this).text();

									if(listType == "����Ʈ��" && dataArr[1] == "L"){
										jQuery(this).attr("className", "list_type_selected");
									}else if(listType == "����Ʈ��" && dataArr[1] != "L"){
										jQuery(this).attr("className", "list_type");
									}else if(listType == "�̹�����" && dataArr[1] == "I"){
										jQuery(this).attr("className", "image_type_selected");
									}else if(listType == "�̹�����" && dataArr[1] != "I"){
										jQuery(this).attr("className", "image_type");
									}else if(listType == "ū �̹�����" && dataArr[1] == "B"){
										jQuery(this).attr("className", "bigimage_type_selected");
									}else if(listType == "ū �̹�����" && dataArr[1] != "B"){
										jQuery(this).attr("className", "bigimage_type");
									}
								});
							}else if(dataArr[0] === "pageSize"){
								jQuery("span[name=curPageSize]").text(dataArr[1] + "����");
							}else if(dataArr[0] === "prdState"){
								jQuery("li[name=prd_state]").removeClass("selected");
								jQuery("input:radio","li[name=prd_state]").attr("checked", false);
								jQuery("#" + dataArr[1]).attr("checked", true);
								jQuery("#" + dataArr[1]).parents("li[name=prd_state]").addClass("selected");
							}else if(dataArr[0] === "pageNum"){
								jQuery("input[name=pageNum]").val(dataArr[1]);
							}else if(dataArr[0] === "partnerFilterHeader"){
							    var $partnerFilterArr = jQuery("#filterdivPartnerBnnr").find("a[class=partnerBnnrFilter]");
								$partnerFilterArr.parents("li[name=ptnrBnnrLi]").removeClass("selected");
								jQuery("div[class=partner_filter]").find("a[name=ptnrBnnrAall]").removeClass("selected");
								
								if("all"==dataArr[1]){// ���޻����� ��ü
									jQuery("div[class=partner_filter]").find("a[name=ptnrBnnrAall]").addClass("selected");
									jQuery("input[name=partnerSellerNos]", "form").val("");
									jQuery("input[name=partnerFilterYN]", "form").val("N");
								}else if("deal"==dataArr[1]) {
									jQuery("input[name=partnerSellerNos]", "form").val("");
									jQuery("input[name=partnerFilterYN]", "form").val("Y");
									jQuery("input[name=dealPrdYN]", "form").val("Y");
									
									$partnerFilterArr.parents("li[name=ptnrBnnrLi]").removeClass("selected");
									jQuery("div[class=partner_filter]").find("a[name=dealBnnr]").parent().addClass("selected");
								}else{
									jQuery("input[name=partnerSellerNos]", "form").val(dataArr[1]);
									jQuery("input[name=partnerFilterYN]", "form").val("Y");
									jQuery("#filterdivPartnerBnnr").find("ul[name=ptnrBnnrUlname]").css("display", "none");
									$partnerFilterArr.parents("li[name=ptnrBnnrLi]").removeClass("selected");
								}
								$partnerFilterArr.each(function(){
									if(jQuery(this).attr("value") == dataArr[1]){
										jQuery(this).parents("li[name=ptnrBnnrLi]").addClass("selected");
										jQuery(this).parents("li[name=ptnrBnnrLi]").parents("ul[name=ptnrBnnrUlname]").css("display", "block");
										jQuery("#refreshYn").val("Y");
										jQuery(this).trigger("click");
										jQuery("#refreshYn").val("N");
									}
								});
							}
						}
					}
				}

				//lnb����������ư
				if(lnbSearch){
					jQuery("div[name=deselect_wrap]").show();
				}

				//�˻�
				try{
					smartFilter.setIsPageMove("Y");
					smartFilter.searchPrd();
				}catch(e){}
			}else{
				document.location.hash = "#$$";
			}
		}
	};

	var clear = function(){
		document.location.href = "#$$";
	};

	return {
		addHash : function(value){
			insert(value);
		},
		updateHash : function(key, value){
			upsert(key, value);
		},
		removeHash : function(value){
			remove(value);
		},
		checkHash : function(){

			setTimeout(function(){
				check();
			}, 500);
		},
		clearHash : function(){
			clear();
		}
	}
})();


HeaderComm.callPvSt = function(code) {
	try {
		var uvImg = new Image();
		uvImg.src = '//www.11st.co.kr/pv.st?url=' + code;
	} catch (e) {}
}

HeaderComm.isEmpty = function(val) {
	if(val === null || typeof val === 'undefined') {
		return true;
	}

	if(typeof val === 'string') {
		if(val.trim() === 'undefined') {
			return true;
		}

		if(val.trim() === '') {
			return true;
		}
	}

	return false;
}

/**
 * targetId : Ÿ���� �Ǵ� <div>�� id��
 * rows : �� ȭ�鿡 ������ ������ ����
 * pageNumber : ���� ������ ��ȣ
 * tots : ��ü ������ ��
 * pageRows : �� ȭ�鿡 ������ ������ ��
*/
HeaderComm.getListPage = function(targetId, formName, rows, pageNumber, tots, pageRows) {

	var rowsPerPage = rows;
	var currentPage = pageNumber;
	var totalCount = tots;

	var totalPage = '';
	if (totalCount % rowsPerPage)
		totalPage =  (Math.floor(totalCount / rowsPerPage) + 1);
	else
		totalPage = Math.floor(totalCount / rowsPerPage);

	var pageGroupStart = Math.floor(((currentPage-1) / pageRows)) * pageRows + 1;
	var pageGroupEnd = (pageGroupStart + pageRows -1 >= totalPage) ? totalPage : (pageGroupStart + pageRows - 1);
	if (totalPage <= 0)
		totalPage = 1;

	var prePage = 0;

	var sbuf = '';

	if(pageGroupStart - pageRows > 0){
		sbuf += '<a href="#" onclick="HeaderComm.navigatePage(\'' + formName + '\',1);return false;" class="first"><span>ó�����</span></a>\n';
		sbuf += '<a href="#" onclick="HeaderComm.navigatePage(\'' + formName + '\','+ (pageGroupStart - pageRows)+ ');return false;" class="prev"><span>�������</span></a>\n';
	}

	sbuf += '<span>\n';

	for (var i = pageGroupStart; i <= pageGroupEnd; i++)
	{
		if (i == currentPage)
			sbuf += '<strong>' + i + '</strong>\n';
		else
			sbuf += '<a href="#" onclick="HeaderComm.navigatePage(\'' + formName + '\',' + i + ');return false;">' + i + '</a></li>\n';
	}

	sbuf += '</span>\n';

	if(pageGroupStart + pageRows <= totalPage){
		sbuf += '<a href="#" onclick="HeaderComm.navigatePage(\'' + formName + '\','+ (pageGroupStart + pageRows)+ ');return false;" class="next"><span>�������</span></a>\n';
		sbuf += '<a href="#" onclick="HeaderComm.navigatePage(\'' + formName + '\','+ (totalPage)+ ');return false;" class="last"><span>���������</span></a>\n';
	}

	jQuery('#' + targetId).removeClass('s_paging').addClass('s_paging').html(sbuf);
}

HeaderComm.navigatePage = function(formNm, pageNumber){

	var formObj = document.forms[formNm];
	formObj.pageNum.value= pageNumber;
	formObj.submit();
}

HeaderComm.directVisitCookie = {};
HeaderComm.setDirectVisitCookie = function(jsonObj) {
	// footer data JS���� ����
	HeaderComm.directVisitCookie = jsonObj;
}

HeaderComm.isDirectVisit = function() {
	try {
		var _xsiteList = HeaderComm.directVisitCookie.XSITE;
		var _xsite = getCookieTmall('XSITE');

		if ( _xsite && typeof(_xsiteList) == 'object' ) {
			_xsite = _xsite.split('^')[0];

			for(var idx = 0; idx < _xsiteList.length; idx++) {
				if (_xsite == _xsiteList[idx]) {
					return true;
				}
			}
		}
	} catch (ex) {}

	try {
		var _partnerCdList = HeaderComm.directVisitCookie.PARTNER_CD;
		var _partnerCd = getCookieTmall('PARTNER_CD');

		if ( _partnerCd && typeof(_partnerCdList) == 'object' ) {
			for(var idx = 0; idx < _partnerCdList.length; idx++) {
				if (_partnerCd == _partnerCdList[idx]) {
					return true;
				}
			}
		}
	} catch (ex) {}
	return false;
}

function getBookMarkYn(){
	var bBookMarkYn = false;
	try{
		if ( HeaderComm.isDirectVisit() )
			bBookMarkYn = true;
	}catch(e){
		bBookMarkYn = false;
	}finally{
		return bBookMarkYn;
	}
}

/*
 * ��ũ �Ӽ� ����
 */
HeaderComm.link = {
	target : {
		self : 'self'
		, top : 'top'
		, parent : 'parent'
		, blank : 'blank'
		, newWindow : 'newWindow'
	}
};

/*
 * �̴ϸ� �Լ� ����
 */
HeaderComm.MiniMall = {
	gatewayPath : 'gateway'
	, goUrl : function (url, target) {
		var tgtUrl = 'http://shop.11st.co.kr/' + url;

		switch ( target ) {
			case HeaderComm.link.target.top :
				top.location.href = tgtUrl;
				break;
			case HeaderComm.link.target.parent :
				parent.location.href = tgtUrl;
				break;
			case HeaderComm.link.target.blank :
			case HeaderComm.link.target.newWindow :
				window.open(tgtUrl);
				break;
			default :
				try {
					if ( typeof(target) == 'object') {
						target.location.href = tgtUrl;
					} else {
						window.location.href = tgtUrl;
					}
				} catch (ex) {
					window.location.href = tgtUrl;
				}
				break;
		}
	}
	, goGateway : function(pagePath, paramKey, paramValue, target) {
		this.goUrl(this.gatewayPath + '/' + pagePath + '/' + paramKey + '/' + paramValue, target);
	}
	, getGoPage : function(page) {
		var instance = {
			pagePath : page
			, url :  function (homeUrl, target) {
				HeaderComm.MiniMall.goUrl(homeUrl, target);
			}
			, prdNo : function (prdNo, target) {
				HeaderComm.MiniMall.goGateway(this.pagePath, 'prdNo', prdNo, target);
			}
			, nckNmSeq : function (nckNmSeq, target) {
				HeaderComm.MiniMall.goGateway(this.pagePath, 'nckNmSeq', nckNmSeq, target);
			}
			, memNo : function (memNo, target) {
				HeaderComm.MiniMall.goGateway(this.pagePath, 'memNo', memNo, target);
			}
		}
		return instance;
	}
};

/*
 * �̴ϸ� �̵� �Լ� ����
 * - ����� ���� ���� ����
 */
HeaderComm.MiniMall.goHome = HeaderComm.MiniMall.getGoPage('home');
HeaderComm.MiniMall.goDelivery = HeaderComm.MiniMall.getGoPage('delivery');


HeaderComm.callHotClick = function(action, method, prdNoList, ctgrNoList, callback) {
	var _conf = {};
	try{
		if ( arguments.length ==  1){
			_conf = arguments[0];
		} else {
			_conf.action = action;
			_conf.method = method;
			_conf.prdNoList = prdNoList;
			_conf.ctgrNoList = ctgrNoList;
			_conf.callback = callback;
		}
		_conf.uid = TMCookieUtil.getSubCookie(0, "uid");

		if (  !_conf.ctgrNoList ) {
			jQuery.ajax({
				//todo : url ����
				url : "http://www.11st.co.kr/commons/HeaderAjaxAction.tmall?method=getPrdInfoList&prdNoList=" + _conf.prdNoList+"&callback=?",
				dataType : 'jsonp',
				scriptCharset : 'utf-8',
				success : function(data) {
					if ( typeof(data) != 'undefined' ) {
						_conf.prdNoList = data.sPrdNo;
						_conf.ctgrNoList = data.sCtgrNo;
						if(_conf.action =='rm'){
							var img2 = new Image();
							img2.src = "http://ad.hotclick.netinsight.co.kr/hotclick/" 
								+ _conf.action + "-cuki?"
								+ "method=" + _conf.method 
								+ "&prod_no=" + _conf.prdNoList 
								+ "&ctgr_no=" + _conf.ctgrNoList;
						}else{
							var _html = '<iframe title="hotClick" src="http://c.hotclick.netinsight.co.kr/hotclick/'
								+ _conf.action + '-cuki#'
								+ 'method=' + _conf.method
								+ '&prod_no=' + _conf.prdNoList
								+ '&ctgr_no=' + _conf.ctgrNoList
								+ '" width="0" height="0" frameborder="0"></iframe>';
							jQuery('body').append(_html);

						}


					}//end if
				}
				, complete : function () {
					if ( typeof(_conf.callback) != 'undefined' ) {
						_conf.callback();
					}
				}
			});
		} else {
			if(_conf.action =='rm'){
				var img2 = new Image();
				img2.src = "http://ad.hotclick.netinsight.co.kr/hotclick/" 
					+ _conf.action + "-cuki?"
					+ "method=" + _conf.method 
					+ "&prod_no=" + _conf.prdNoList 
					+ "&ctgr_no=" + _conf.ctgrNoList;
			}else{
				var _html = '<iframe title="hotClick" src="http://c.hotclick.netinsight.co.kr/hotclick/'
                     + _conf.action + '-cuki#'
                     + 'method=' + _conf.method
                     + '&prod_no=' + _conf.prdNoList
                     + '&ctgr_no=' + _conf.ctgrNoList
                     + '" width="0" height="0" frameborder="0"></iframe>';
				jQuery('body').append(_html);
			}
			if ( typeof(_conf.callback) != 'undefined' ) {
				_conf.callback();
			}
		}

	}catch(ex){
		if ( typeof(_conf.callback) != 'undefined' ) {
			_conf.callback();
		}
	}
}

HeaderComm.Product = {
	doTracking : function(prdNo, trcNo, typCd, areaCd, isCPC, clickCd, clickObj, minorSelCnYn) {
		if (typeof (clickCd) != 'undefined' && clickCd != '') {
			doCommonStat(clickCd);
		}
		
		if (typeof (trcNo) != 'undefined' && typeof (typCd) != 'undefined' && typCd != '' && typeof (areaCd) != 'undefined' && areaCd != '') {
			HeaderComm.Product.doAdTracking(prdNo, trcNo, typCd, areaCd, isCPC, clickObj, minorSelCnYn);
		}
		
		HeaderComm.Product.doInflowTracking(prdNo);
		
		if ( clickObj ) {
            HeaderComm.Product.doColosseoClickLink(clickObj);

			//if ( typeof rakeLog !== 'undefined' )
                //rakeLog.sendRakeLog(clickObj);
			HeaderComm.Product.goElementTargetUrl(clickObj);
		}
	},
	doAdTracking : function(prdNo, trcNo, typCd, areaCd, isCPC, clickObj, minorSelCnYn) {
		ad_headerCommonJs.util.instance.ConversionCookieQueue.add(trcNo,prdNo, typCd + areaCd);
		stck(typCd, areaCd, trcNo);

		if (isCPC) {
			if ( minorSelCnYn === 'N' ) {
				if ( funcCheckIsLogin() && !funcCheckIsMinor() ) {
					adSave.ins.clickCPC(typCd, areaCd, trcNo);
				}
			} else {
				adSave.ins.clickCPC(typCd, areaCd, trcNo);
			}
		}
	},
	goPrd : function(prdNo, xfrom, xzone, target) {

		var url = HeaderComm.Product.getPrdUrl(prdNo, xfrom, xzone);

		switch (target) {
		case HeaderComm.link.target.top:
			top.location.href = tgtUrl;
			break;
		case HeaderComm.link.target.parent:
			parent.location.href = tgtUrl;
			break;
		case HeaderComm.link.target.blank:
		case HeaderComm.link.target.newWindow:
			window.open(tgtUrl);
			break;
		default:
			try {
				if (typeof (target) == 'object') {
					target.location.href = tgtUrl;
				} else {
					window.location.href = tgtUrl;
				}
			} catch (ex) {
				window.location.href = tgtUrl;
			}
			break;
		}
	},
	goAdultPrd : function(prdNo, xfrom, xzone, trTypeCd, trCtgrNo, isCPC, trcNo,
			typGubn, areaGubn) {
		var url = '';

		if (typeof (isCPC) != 'undefined' && isCPC) {
			url = HeaderComm.Product.getAdultCpcPrdUrl(prdNo, trcNo, typGubn, areaGubn);
		} else {
			url = HeaderComm.Product.getPrdUrl(prdNo, xfrom, xzone, trTypeCd, trCtgrNo);
		}

		return productDetailViewAdults(prdNo, adultsYn, xfrom, xzone, '', url);
	},
	getPrdUrl : function(prdNo, xfrom, xzone, trTypeCd, trCtgrNo) {

		var url = _PRODUCT_DETAIL_URL_ + prdNo;

		if (typeof (xfrom) != 'undefined') {
			url += '&xfrom=' + xfrom;
		}

		if (typeof (xzone) != 'undefined') {
			url += '&xzone=' + xzone;
		}

		if (typeof (trTypeCd) != 'undefined') {
			url += '&trTypeCd=' + trTypeCd;
		}

		if (typeof (trCtgrNo) != 'undefined') {
			url += '&trCtgrNo=' + trCtgrNo;
		}

		return url;
	},
	getAdultCpcPrdUrl : function(prdNo, trcNo, typGubn, areaGubn) {
		return _GNB_CONTEXT_PATH_ + '/advert/internalAd.tmall?prdNo=' + prdNo + '&trcNo=' + trcNo + '&typGubn=' + typGubn + '&areaGubn=' + areaGubn;
	},
	goElementTargetUrl : function(clickObj){
		var url = '';
		var target = '';
		if(clickObj){
			var tmpObjUrl = clickObj.getAttribute('href');
			var tmpTarget = clickObj.getAttribute('target');
			if(tmpObjUrl != null && tmpObjUrl != '' && tmpObjUrl.indexOf('javascript:') < 0 && tmpObjUrl.indexOf('#') < 0){
				url = tmpObjUrl;
			}
			
			if(tmpTarget != null && tmpTarget != '' && tmpTarget.indexOf('_') > -1){
				target = tmpTarget;
			}
			if(url != ''){
				if( typeof (target) != 'undefined' && target == '_parent' ){
					setTimeout(function() { parent.location.href = url; } , 100);
				}else if( typeof (target) != 'undefined' && target == '_top' ) {
					setTimeout(function() { top.location.href = url; } , 100);
				}else if( typeof (target) != 'undefined' && target == '_blank' ) {	
					setTimeout(function() { 
						var prdWidnow = window.open(url,target); 
						prdWidnow.focus(); 
					} , 100);
				}else{
					setTimeout(function() { window.location.href = url; } , 100);
				}
			}
		}
	},
	doInflowTracking : function(prdNo){
		if( HeaderComm.Product.isTotalSearchPage() && HeaderComm.Product.getSearchKeyword() ){
			var url = 'http://st.11st.co.kr/srch.st?kwd=' + HeaderComm.Product.getSearchKeyword() + '&prdNo=' + prdNo + '&ch=pc&noCache=' + (new Date()).getTime();
			var img = new Image();
			img.src = url;
		}
	},
	isTotalSearchPage : function(){
		var url = document.URL;
		return url.indexOf("http://search.11st.co.kr/SearchPrdAction.tmall?method=getTotalSearchSeller") != -1;
	},
	getSearchKeyword : function(){
		return jQuery('[name=kwd]', '#searchForm').val();
	},
    doColosseoClickLink : function(clickObj) {
        var clickLinkUrl = clickObj.getAttribute('data-colosseo-clickLog');
        if (clickLinkUrl != null) {
            var img = new Image();
            img.src = clickLinkUrl;
        }
    }
}

HeaderComm.CommonLog = {
	doClick : function(inflowClfCd, trcNo, dispObjNo, areaClfCd, areaSubClfCd, listSortSeq, pageSize, pageNum, listSortClfCd, dispObjClfCd){
		
		var inflowKeyVal = '';
		
		if ( inflowClfCd == '01' ) { //ī�װ�
			inflowKeyVal = jQuery('input[name="dispCtgrNo"]').val();
		} else if ( inflowClfCd == '02' ) { //�˻�
			inflowKeyVal = encodeURIComponent(document.searchForm.kwd.value);
		}

		if ( areaSubClfCd == 'Y' ) areaSubClfCd = '01';
		else if ( areaSubClfCd == 'N' ) areaSubClfCd = '02';
		
		if ( areaSubClfCd == '01' || areaSubClfCd == '02' || areaSubClfCd == '05' ) {
			listSortClfCd = ( typeof listSortClfCd  === 'undefined' || listSortClfCd === '' ) ? jQuery("input[name='sortCd']").val() : listSortClfCd;
		}
		
		listSortSeq = (pageNum-1) * pageSize + listSortSeq;
		
		if ( typeof dispObjClfCd === 'undefined' ){
			dispObjClfCd = '01';
		}
		
		jQuery.ajax({
			url : '/log/CommonLogAjaxAction.tmall?method=clickInfoLog',
			type: 'GET',
			timeout: 2000,
			dataType : 'json',
			data: {
				  'inflowKeyVal' : inflowKeyVal	// ����ȣ : ī�װ� ��ȣ / Ű�����
				, 'inflowClfCd' : inflowClfCd	// ��󱸺��ڵ�(ī�װ�/Ű���� ���� �ڵ�)
				, 'trcNo' : trcNo			// TRC_NO
				, 'dispObjNo' : dispObjNo			// ���ô���ȣ(��ǰ��ȣ)
				, 'dispObjClfCd' : dispObjClfCd		// ���ô�󱸺��ڵ� : 01(��ǰ)
				, 'svcClfCd' : '01'			// ���񽺱����ڵ�   : [DI254] pc 01 / ����� 02 / app 03
				, 'pageClfCd' : inflowClfCd	// �����������ڵ�   : [DI255] ī�װ� ������ / �˻���� ������
				, 'areaClfCd' : areaClfCd		// ���������ڵ�     : [DI258] �Ϲݸ����� / ���ո�����
				, 'areaSubClfCd' : areaSubClfCd	// �����󼼱����ڵ� : [DI256] �÷�����ǰ 01 / �Ϲݻ�ǰ 02 / ��õ��ǰ 03 / HOTŬ����ǰ 04 / �Ŀ���ǰ 05
				, 'listSortClfCd' : listSortClfCd	// ����Ʈ���ı����ڵ�
				, 'listSortSeq' : listSortSeq	// ����Ʈ���ļ���
			}
		});
		
	}
}

HeaderComm.checkFromMobile = function() {
	try {
		var _userAgent 	= navigator.userAgent;
		var _arrPassHeaderStrck = [
		                           'SAMSUNG-', 'SHW-', 'SCH-', 'SPH-', 'SGH-', 'LG-', 'CANU', 'IM-', 'EV-'
		                           , 'iPhone', 'Nokia', 'BlackBerry', 'lgtelecom', 'NATEBrowser', 'SonyEricsson'
		                           , 'Mobile' ,'Server_KO_SKT' ,'POLARIS', 'Sony', 'Android'
		                           ];

		for ( var idx = 0; idx < _arrPassHeaderStrck.length; idx++) {
			if ( _userAgent.indexOf(_arrPassHeaderStrck[idx]) != -1 ) {
				return true;
			}
		}

		return false;
	} catch (ex) {
		return false;
	}
}

//var isMobile = HeaderComm.checkFromMobile();
var isMobile = false;
if (_browser.indexOf('mobile') != -1)	{
	isMobile = true;
}

(function(skp11) {
	'use strict';
	
	skp11.common = skp11.common || {};
	skp11.common = {
		blankImage: function(imageObj, imageInfo) {
			imageObj.onerror = null; // To avoid endless loop.
			imageObj.src = this.getImagePath(imageInfo);
		},
		getImagePath: function(imageInfo) {
			var rect, imagePath;
			
			if (typeof imageInfo === 'number') {
				rect = imageInfo + 'x' + imageInfo;
				imagePath = 'http://i.011st.com/ex_t/R/' + rect + '/1/85/1/src/img/product/no_image.gif';
			} else {
				imagePath = imageInfo;
			}
			
			return imagePath;
		}
	};
})(window.skp11 = window.skp11 || {});

HeaderComm.rake = {
		eventId : {PRODUCT: 'PRODUCT', CATALOG: 'CATALOG'},
		action : {VIEW : 'view', CLICK :'click'},
		init : function(serverType){
			if(!rake)
				return;
			
			if (serverType == 'real') 
				rake.install({env:rake.LIVE, token:"e9257de0da793d89d793049109b39fec421e"});
			else 
				rake.install({env:rake.DEV, token:"91fee424dcbd63d9868b2b57c237c2b21c50f5a8"});
		},
		getSessionId : function(){
			var sessionId;
			if(!TMCookieUtil.getSubCookie(0,'RAKE_ID')) {
				var pcId = getCookie('PCID');
				var currentTimeMillis = new Date().getTime();
				
				sessionId = pcId+''+currentTimeMillis;
				
				TMCookieUtil.add(0, "RAKE_ID", sessionId);
			} else {
				sessionId = TMCookieUtil.getSubCookie(0,'RAKE_ID');
			}
			
			return sessionId;
		}
	}