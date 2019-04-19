!function(e){"use strict";function t(t){var s=t.attr("data-"+a+"-parameter");if("undefined"!=typeof s){s=s.split(",");var o,l=s.length,n={};for(o=0;l>o;o++){var i=e.trim(s[o]).split(":");"true"===i[1]&&(i[1]=!0),"false"===i[1]&&(i[1]=!1),isNaN(Number(i[1]))||(i[1]=Number(i[1])),n[i[0]]=i[1]}e.extend(!0,t.data(a),n)}}var a="libExpand",s=navigator.userAgent.toLowerCase(),o=document.body.style,l=function(){var e=s.split("/").reverse()[0];return s.match("android")&&534>e?!1:"transition"in o||"webkitTransition"in o||"msTransition"in o}(),n=function(){return""!==location.hash&&(n=!0),!1}(),i="transitionend."+a+" webkitTransitionEnd."+a+" msTransitionEnd."+a,r={initialize:function(s){return this.each(function(){e(this).data(a,e.extend(!0,{openClass:"elOpen",closeClass:"elClose",showClass:"elShow",trigger:"[data-"+a+'-parts="trigger"]',delayTrigger:"[data-"+a+'-parts="trigger-delay"]',triggerInterval:600,$hashShow:null,$expand:e(this).find(".elExpand"),openHeight:0,closeHeight:0,durationMin:140,durationMax:400,duration:0,forceToggle:null,isTouch:!1,expandID:e(this).attr("data-"+a+"-id"),existsDelayTrigger:!1,showText:null,defaultText:[],showBefore:null,showAfter:null,closeBefore:null,closeAfter:null},s)),t(e(this));var o=e(this),l=o.data(a);l.$hashShow=e("[data-"+a+'-hashshow="'+l.expandID+'"]'),n&&r.hashShow.apply(o),null!==l.showText&&o.find(l.trigger).each(function(){l.defaultText.push({$trigger:e(this),text:e.trim(e(this).text())})}),l.closeHeight=l.$expand.innerHeight(),null===l.forceToggle||"close"===l.forceToggle?o.toggleClass(l.showClass,!1):(o.toggleClass(l.showClass,!0),r.replaceText.apply(o)),o.find(l.delayTrigger).length>0&&l.$expand.length>0&&(l.existsDelayTrigger=!0),r.autoHeight.apply(o),r.action.apply(o)})},action:function(){var t=e(this),s=t.data(a),o=null;t.on("click."+a,s.trigger,function(){return clearInterval(o),o=null,null===s.forceToggle||"close"===s.forceToggle?(t.toggleClass(s.showClass,!1),r.showExpand.apply(t)):(t.toggleClass(s.showClass,!0),r.closeExpand.apply(t)),!1}),s.existsDelayTrigger?(t.on("mouseenter."+a,s.delayTrigger+", "+s.trigger,function(){null==o&&(o=setInterval(function(){clearInterval(o),r.showExpand.apply(t)},s.triggerInterval))}),t.on("mousemove."+a,function(){s.isTouch=!0}).on("mouseleave."+a,function(){clearInterval(o),o=null,s.isTouch=!1,setTimeout(function(){s.isTouch||r.closeExpand.apply(t)},400)})):s.isTouch=!0},showExpand:function(){var t=e(this),s=t.data(a);s.forceToggle="open",r.toggle.apply(t),r.applyCallback.apply([t,"showBefore"])},closeExpand:function(){var t=e(this),s=t.data(a);s.forceToggle="close",r.toggle.apply(t),r.applyCallback.apply([t,"closeBefore"])},toggle:function(){var t=e(this),s=t.data(a);if(l)if(r.autoHeight.apply(t),"open"===s.forceToggle){if(s.closeHeight=s.$expand.innerHeight(),t.hasClass(s.showClass))return;s.$expand.css({height:s.closeHeight,"-ms-transition-duration":s.duration/1e3+"s","-webkit-transition-duration":s.duration/1e3+"s","transition-duration":s.duration/1e3+"s"}).on(i,function(){s.$expand.off(i),s.$expand.css({height:"","-ms-transition-duration":"","-webkit-transition-duration":"","transition-duration":""}),s.isTouch?t.toggleClass(s.openClass,!1).toggleClass(s.showClass,!0):t.toggleClass(s.openClass,!1).toggleClass(s.closeClass,!1).toggleClass(s.showClass,!1),r.replaceText.apply(t),r.applyCallback.apply([t,"showAfter"])}),t.toggleClass(s.openClass,!0).toggleClass(s.closeClass,!1).toggleClass(s.showClass,!1),setTimeout(function(){s.$expand.css({height:s.openHeight})},50)}else{if(!t.hasClass(s.openClass)&&!t.hasClass(s.showClass))return;s.$expand.css({height:s.openHeight,"-ms-transition-duration":s.duration/1e3+"s","-webkit-transition-duration":s.duration/1e3+"s","transition-duration":s.duration/1e3+"s"}).delay(50).queue(function(){t.toggleClass(s.openClass,!1).toggleClass(s.closeClass,!0).toggleClass(s.showClass,!1),s.$expand.css({height:s.closeHeight}).on(i,function(){s.$expand.off(i),s.$expand.css({height:"","-ms-transition-duration":"","-webkit-transition-duration":"","transition-duration":""}),s.isTouch?t.toggleClass(s.closeClass,!1):t.toggleClass(s.openClass,!1).toggleClass(s.closeClass,!1).toggleClass(s.showClass,!1),r.replaceText.apply(t),r.applyCallback.apply([t,"closeAfter"])}).dequeue()})}else"open"===s.forceToggle?(t.toggleClass(s.openClass,!1).toggleClass(s.closeClass,!1).toggleClass(s.showClass,!0),r.replaceText.apply(t),r.applyCallback.apply([t,"showAfter"])):"close"===s.forceToggle&&(t.toggleClass(s.openClass,!1).toggleClass(s.closeClass,!1).toggleClass(s.showClass,!1),r.replaceText.apply(t),r.applyCallback.apply([t,"closeAfter"]))},replaceText:function(){var t,s,o=e(this),l=o.data(a),n=l.defaultText,i=o.find(l.trigger);if(null!==l.showText){for(t=0,t=0;10>t&&0!==i.find("*").length;t++)i=i.find("*");"open"===l.forceToggle?i.text(l.showText):(s=i.length,i.each(function(){var o;for(t=0;s>t;t++)if(o=e(this).closest("[data-"+a+'-parts="trigger"]'),o.get(0)===n[t].$trigger.get(0)){e(this).text(n[t].text);break}}))}},autoHeight:function(){var t=e(this),s=t.data(a),o=0;s.$expand.children().each(function(){o+=e(this).outerHeight(!0)}),s.openHeight=o,"open"!==s.forceToggle&&(o=.7*o),s.duration=o,s.duration=s.duration<s.durationMin?s.durationMin:s.duration,s.duration=s.duration>s.durationMax?s.durationMax:s.duration},hashShow:function(){var t=e(this),s=t.data(a),o=location.hash,l=s.$hashShow;o=o.slice(o.indexOf("#")+1),l.length>0&&(l.attr("id")===o?s.forceToggle="open":s.forceToggle="close")},applyCallback:function(){var e=this[0],t=e.data(a),s=this[1];"function"==typeof t[s]&&t[s]()},destroy:function(){var t=e(this),s=t.data(a);"undefined"!=typeof s&&(s.$expand.off(i).css({height:"","-ms-transition-duration":"","-webkit-transition-duration":"","transition-duration":""}),t.toggleClass(s.showClass,!1).off("."+a))}};e.fn[a]=function(e){return r[e]?r[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?void 0:r.initialize.apply(this,arguments)}}(jQuery);