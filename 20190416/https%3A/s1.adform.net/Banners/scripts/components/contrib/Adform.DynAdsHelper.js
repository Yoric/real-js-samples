/**
 * Adform.DynAdsHelper.js contribution component, version 1.0.0
 * 
 * Copyright Adform
 * http://www.adform.com
 * 
 * Date: 2018-04-13
 */
!function(){"use strict";!function(){function n(n){m.push(n),f.forEach(function(e){n(e)})}function e(n){n&&(f.push(n),m.forEach(function(e){e(n)}))}function t(e,t){n(function(n){void 0!==n[t]&&(document.getElementById(e).innerText=n[t])})}function d(e,t){n(function(n){void 0!==n[t]&&(document.getElementById(e).src=n[t])})}function o(n){u=n}function c(){dhtml.getVar("cid")&&dhtml.getVar("cid")>0?Adform.AdMessage.build({}).getItems([0],function(n,t){!n&&t&&t[0]&&e(t[0])}):e(u[0])}function i(){c();for(var n in f[0])document.getElementById(n)&&("IMG"==document.getElementById(n).tagName?document.getElementById(n).src=f[0][n]:document.getElementById(n).innerText=f[0][n])}Adform.DynAdsHelper=Adform.DynAdsHelper||{};var u=[],m=[],f=[];Adform.DynAdsHelper={addText:t,addImage:d,autoWire:i,setDemoData:o}}(window.Adform=window.Adform||{})}();