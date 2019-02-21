!function(e){"use strict";function a(a){return"window"===a?"undefined"!=typeof window.innerHeight?window.innerHeight:document.documentElement.clientHeight:"document"===a?e("body").innerHeight():void 0}function t(){return"undefined"!=typeof window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop}function o(a){var t=a.attr("data-"+l+"-parameter");if("undefined"!=typeof t){t=t.split(",");var o,i=t.length,s={};for(o=0;i>o;o++){var n=e.trim(t[o]).split(":");"true"===n[1]?n[1]=!0:"false"===n[1]?n[1]=!1:isNaN(Number(n[1]))||(n[1]=Number(n[1])),s[n[0]]=n[1]}e.extend(!0,a.data(l),s)}}var l="libDialog",i=function(){if(e('meta[name="viewport"]').length>0)for(var a=e('meta[name="viewport"]').attr("content").replace(/\s+/g,"").split(","),t=a.length,o=0;t>o;o++)if("user-scalable"===a[o].split("=")[0].toLowerCase())return a[o].split("=")[1].toLowerCase();return"yes"}(),s=navigator.userAgent.toLowerCase(),n="ontouchstart"in window,d=function(){return s.match("android")&&!("requestAnimationFrame"in window)}(),r=!1,p=!1,c=e(window),f={initialize:function(a){return this.each(function(){e(this).data(l,e.extend(!0,{$overlay:e(".mdOverlayScreen"),$dialog:e(this),$show:e("[data-"+l+'-show="'+e(this).attr("data-"+l+"-id")+'"]'),$hide:e("[data-"+l+'-hide="'+e(this).attr("data-"+l+"-id")+'"]'),$wrapper:null,$status:e("body"),prefix:[],overlayShowClass:"elShow",overlayHideClass:"elHide",dialogShowClass:"elShow",dialogHideClass:"elHide",overlayDepth:null,isClone:!0,isDialog:!1,hideByModal:!0,dialogTop:"50%",dialogLeft:"50%",escapeToCancel:!0,fixedEnabled:!0,forceTouchDevice:!1,lastWindowWidth:null,lastCssPosition:null,lastCssTop:0,locked:!1,lockWithAbsolute:!1,cloneBefore:null,cloneAfter:null,showBefore:null,showAfter:null,hideBefore:null,hideAfter:null},a)),o(e(this));var t=e(this),d=t.data(l);if(n){var r=s.split("applewebkit/");r.length>1&&(r=parseInt(r.reverse()[0].split(" ")[0]),534>r?d.fixedEnabled=!1:"yes"===i&&(d.fixedEnabled=!1,d.fixedEnabled=d.forceTouchDevice))}f.createParts.apply(t),f.setEvent.apply(t)})},createParts:function(){var a,t,o=e(this),i=o.data(l);if(t=i.prefix.length,0!==t)for(i.$wrapper=e("<div></div>").appendTo("body"),a=0;t>a;a++)i.$wrapper.attr(i.prefix[a].attribute,i.prefix[a].value);else i.$wrapper=e("body");if(0===e(i.$overlay.selector+"[data-"+l+'-parts="cloned"]').length&&(i.$overlay.length>0?i.isClone?i.$overlay=i.$overlay.clone().attr("data-"+l+"-parts","cloned").appendTo(i.$wrapper):i.$overlay=i.$overlay.clone().attr("data-"+l+"-parts","cloned").insertBefore(o):i.isClone?i.$overlay=e('<div class="'+i.$overlay.selector.replace(".","")+'" data-'+l+'-parts="cloned"></div>').appendTo(i.$wrapper):i.$overlay=e('<div class="'+i.$overlay.selector.replace(".","")+'" data-'+l+'-parts="cloned"></div>').insertBefore(o)),n&&i.$overlay.css({cursor:"pointer"}),i.overlayDepth=parseInt(i.$overlay.css("z-index")),f.applyCallback.apply([o,"cloneBefore"]),i.isClone?(i.$dialog=o.clone(!0).attr("data-"+l+"-parts","cloned").appendTo(i.$wrapper),i.$show=e(i.$show.selector),i.$hide=e(i.$hide.selector)):i.$dialog=o,i.$overlay.toggleClass(i.overlayHideClass,!0).toggleClass(i.overlayShowClass,!1),i.$dialog.toggleClass(i.dialogHideClass,!0).toggleClass(i.dialogShowClass,!1),n){var s=!1;i.$dialog.on("touchstart."+l,"a",function(){s=!0}).on("touchmove."+l,"a",function(){s=!1}).on("touchend."+l,"a",function(e){return s?(s=!1,void e.target.click()):!1})}f.applyCallback.apply([o,"cloneAfter"])},setEvent:function(){var a=e(this),t=a.data(l),o=0;if(t.$show.on("click."+l,function(){f.showDialog.apply(a),o=(new Date).getTime()}),t.$hide.on("click."+l,function(){var e=(new Date).getTime();e-o>0&&500>e-o||(f.hideDialog.apply(a),o=(new Date).getTime())}),!r&&t.hideByModal&&(t.$overlay.on("click."+l,function(){var a,i,s,n=(new Date).getTime();n-o>0&&500>n-o||(a=t.$status.attr("data-"+l+"-isDialog"),s=e("[data-"+l+'-id="'+a+'"]').filter("."+t.dialogShowClass),i=s.data(l).hideByModal,i&&s.data(l).$hide.get(0).click())}),r=!0),c.on("resize."+l,function(){if(n){if(t.lastWindowWidth===c.width())return;t.lastWindowWidth=c.width(),f.adjustPosition.apply(a)}else"undefined"!=typeof t.$status.attr("data-"+l+"-isDialog")&&f.adjustPosition.apply(a)}),!p){if(n&&!t.forceTouchDevice)return;if(!t.escapeToCancel)return;e("body").on("keydown."+l,function(a){if("undefined"!=typeof t.$status.attr("data-"+l+"-isDialog")&&27===a.keyCode){var o=t.$status.attr("data-"+l+"-isDialog"),i=e("[data-"+l+'-id="'+o+'"]').filter("."+t.dialogShowClass),s=i.data(l).escapeToCancel;if(!s)return;i.data(l).$hide.get(0).click()}}),p=!0}},toggleDialog:function(){var a=e(this),t=a.data(l),o=t.$status.attr("data-"+l+"-isDialog"),i=function(){return e(t.isClone?"[data-"+l+'-id="'+o+'"][data-'+l+'-parts="cloned"]':"[data-"+l+'-id="'+o+'"]')}(),s=t.$overlay,r=t.isDialog,p=!1,c=function(){return d?800:n?400:10}();"immediate"===arguments[0]&&(p=!0),i.toggleClass(t.dialogHideClass,!r).toggleClass(t.dialogShowClass,r).css({"z-index":t.overlayDepth+1}),r?(s.toggleClass(t.overlayHideClass,!r).toggleClass(t.overlayShowClass,r).css({"z-index":t.overlayDepth,height:""}),f.applyCallback.apply([a,"showAfter"])):p?(s.toggleClass(t.overlayHideClass,!r).toggleClass(t.overlayShowClass,r).css({"z-index":t.overlayDepth,height:""}),f.applyCallback.apply([a,"hideAfter"])):setTimeout(function(){s.toggleClass(t.overlayHideClass,!r).toggleClass(t.overlayShowClass,r).css({"z-index":t.overlayDepth,height:""}),f.applyCallback.apply([a,"hideAfter"])},c)},adjustPosition:function(){var o,i,s,n,d,r,p=e(this),c=p.data(l),f=c.$dialog,g=c.$overlay,h=p.attr("data-"+l+"-id"),u="",y="",v="";h==c.$status.attr("data-"+l+"-isDialog")&&(f.css({position:"absolute"}),c.fixedEnabled||g.css({height:a("document")}),u="fixed",o=c.dialogTop,isFinite(c.dialogTop)||c.dialogTop.match("%")&&(n=f.outerHeight(),s=a("window"),r=.01*Number(c.dialogTop.replace("%","")),n>s?(u="absolute",o=t(),c.lockWithAbsolute&&!c.locked&&(c.locked=!0,c.lastCssTop=o,c.lastCssPosition=u),c.locked&&(o=c.lastCssTop)):(c.locked=!1,c.fixedEnabled?(u="fixed",o=c.dialogTop,y=n*r*-1):(u="absolute",o=(s-n)/2+t()))),i=c.dialogLeft,isFinite(c.dialogLeft)||c.dialogLeft.match("%")&&(d=f.outerWidth(),r=.01*Number(c.dialogLeft.replace("%","")),v=d*r*-1),f.css({top:o,left:i,position:u,marginTop:y,marginLeft:v}),f.offset().left<0&&c.dialogLeft.match("%")&&(i=.5*(window.innerWidth-d),i=0>i?0:i,f.css({marginLeft:"",left:i})))},hideDialog:function(){var a=e(this),t=a.data(l);f.applyCallback.apply([a,"hideBefore"]),t.isDialog=!1,f.toggleDialog.apply(a,arguments),t.$status.attr("data-"+l+"-isDialog",""),t.$show.length>0&&"undefined"==typeof t.$show.attr("data-"+l+"-show")&&t.$show.css("display","inline-block").css("display","")},showDialog:function(){var a=e(this),t=a.data(l);"undefined"!=typeof t&&(arguments.length>0&&(t.$show=arguments[0]),f.applyCallback.apply([a,"showBefore"]),t.isDialog=!0,t.lastCssPosition=null,t.lastCssTop=0,t.locked=!1,t.$status.attr("data-"+l+"-isDialog",a.attr("data-"+l+"-id")),f.toggleDialog.apply(a,arguments),f.adjustPosition.apply(a))},applyCallback:function(){var e=this[0],a=e.data(l),t=this[1];"undefined"!=typeof a&&"function"==typeof a[t]&&a[t]()},destroy:function(){var a=e(this),t=a.data(l);"undefined"!=typeof t&&(t.$show.off("."+l),t.$hide.off("."+l),t.$dialog.off("."+l),t.$dialog.remove(),t.$overlay.toggleClass(t.overlayShowClass,!1).toggleClass(t.overlayHideClass,!0),a.removeData(l),"body"!==t.$wrapper.get(0).tagName.toLowerCase()&&t.$wrapper.remove(),e("[data-"+l+"-id][data-"+l+'-parts="cloned"]').length<1&&(t.$status.removeAttr("data-"+l+"-isDialog"),e("body").off("."+l),c.off("."+l),t.$overlay.remove()))}};e.fn[l]=function(e){return f[e]?f[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?void 0:f.initialize.apply(this,arguments)}}(jQuery);