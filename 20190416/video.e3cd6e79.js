pxt.add("vic",{args:["u","n","e2","sid","nn","mw","k","o"]}),pxt.add("vicp",{args:["u","n"]}),pxt.add("vpc",{args:["u","n"]}),pxt.add("vfc",{args:["u","t"]}),pxt.add("vt",{args:["u","t","d","sid","k","o"]}),pxt.add("vtf",{args:["u","t","d","sid"]}),pxt.add("vmc",{args:["c","n","u"]}),pxt.add("vres",{args:["u","t","d"]}),pxt.add("vpf",{args:["u","p","t","w","d"]}),pxt.add("v_serials_nav",{args:["u","t","w"]}),pxt.add("v_movie_info",{args:["u","t","p"]}),pxt.add("vmr",{base:"/showpxt"}),pxt.add("vmw",{base:"/showpxt",args:["u"]}),function(a){function b(){c&&(f(b),a.fx.tick())}for(var c,d=0,e=["webkit","moz"],f=window.requestAnimationFrame,g=window.cancelAnimationFrame;d<e.length&&!f;d++)f=window[e[d]+"RequestAnimationFrame"],g=g||window[e[d]+"CancelAnimationFrame"]||window[e[d]+"CancelRequestAnimationFrame"];f?(window.requestAnimationFrame=f,window.cancelAnimationFrame=g,a.fx.timer=function(d){d()&&a.timers.push(d)&&!c&&(c=!0,b())},a.fx.stop=function(){c=!1}):(window.requestAnimationFrame=function(a,b){var c=(new Date).getTime(),e=Math.max(0,16-(c-d)),f=window.setTimeout(function(){a(c+e)},e);return d=c+e,f},window.cancelAnimationFrame=function(a){clearTimeout(a)})}(jQuery),function(a){"use strict";function b(b,e){this.disabled=!1,this.element=b,this.$element=a(b),this.settings=a.extend({},d,e),this._defaults=d,this._name=c,this.time={},this.elementHeight=null,this.elementWidth=null,this.multiplier=1,this.init()}var c="momentum",d={duration:1.5*window.innerHeight,speedLimit:1.2,handleY:!0,handleX:!0,moveThreshold:300,offsetThreshold:30,startThreshold:5,acceleration:.5,accelerationT:250};void 0===a.easing.hnlinertial&&(a.easing.hnlinertial=function(a,b,c,d,e){var f=(b/=e)*b,g=f*b;return c+d*(-1*f*f+4*g+-6*f+4*b)}),a.extend(b.prototype,{init:function(){this.checkScrollable();var a=this;return this.$element.on("touchstart",function(b){a.tap(b)}).on("touchmove",function(b){a.drag(b)}).on("touchend",function(b){a.release(b)}),this},reinit:function(){return!!this.disabled||(this.checkScrollable(),this)},enable:function(){return this.disabled=!1,this},disable:function(){return this.disabled=!0,this},checkScrollable:function(){this.elementHeight=this.$element.innerHeight(),this.elementWidth=this.$element.innerWidth(),this.scrollableY=Boolean(this.elementHeight<this.$element.prop("scrollHeight")&&this.settings.handleY),this.scrollableX=Boolean(this.elementWidth<this.$element.prop("scrollWidth")&&this.settings.handleX)},tap:function(b){return!!this.disabled||(this.time.touchstart=b.timeStamp,this.pageY=b.originalEvent.touches[0].pageY,this.pageX=b.originalEvent.touches[0].pageX,this.$element.is(":animated")&&this.time.touchstart-this.time.touchend<this.accelerationT?this.multiplier+=this.settings.acceleration:this.multiplier=1,this.$element.stop(!0,!1),this.scrollTop=a(this.element).scrollTop(),void(this.scrollLeft=a(this.element).scrollLeft()))},drag:function(a){return!!this.disabled||(a.preventDefault(),this.time.touchmove=a.timeStamp,this.go=Math.abs(this.pageX-a.originalEvent.touches[0].pageX)>this.settings.startThreshold||Math.abs(this.pageY-a.originalEvent.touches[0].pageY)>this.settings.startThreshold,void(this.go&&(this.animPar1={},this.vertical=Math.abs(this.pageX-a.originalEvent.touches[0].pageX)<Math.abs(this.pageY-a.originalEvent.touches[0].pageY),this.distance=this.vertical?this.pageY-a.originalEvent.touches[0].pageY:this.pageX-a.originalEvent.touches[0].pageX,this.acc=Math.abs(this.distance/(this.time.touchmove-this.time.touchstart)),this.animProp=null,this.vertical&&this.scrollableY?this.animProp="scrollTop":!this.vertical&&this.scrollableX&&(this.animProp="scrollLeft"),this.animProp&&(this.animPar1[this.animProp]=this[this.animProp]+this.distance),this.animPar2={duration:0},(this.scrollableY||this.scrollableX)&&this.animProp&&this.$element.stop(!0,!1).animate(this.animPar1,this.animPar2))))},release:function(a){return!!this.disabled||(this.time.touchend=a.timeStamp,void(this.go&&(this.animPar1={},this.touchTime=this.time.touchend-this.time.touchmove,this.maxOffset=(this.vertical?this.elementHeight:this.elementWidth)*this.settings.speedLimit,this.offset=Math.pow(this.acc,2)*(this.vertical?this.elementHeight:this.elementWidth),this.offset=this.offset>this.maxOffset?this.maxOffset:this.offset,this.offset=this.distance<0?-this.multiplier*this.offset:this.multiplier*this.offset,this.touchTime<this.settings.moveThreshold&&0!==this.offset&&Math.abs(this.offset)>this.settings.moveThreshold&&(this.animProp&&(this.animPar1[this.animProp]=this[this.animProp]+this.distance+this.offset),this.animPar2={duration:this.settings.duration,easing:"hnlinertial",complete:function(){this.multiplier=1}}),(this.scrollableY||this.scrollableX)&&this.animProp&&this.$element.stop(!0,!1).animate(this.animPar1,this.animPar2))))}}),a.fn[c]=function(d){return this.each(function(){a.data(this,"plugin_"+c)||a.data(this,"plugin_"+c,new b(this,d))})}}(jQuery),function(){var a=function(a){var b;if(a.player){var c=URI(location);c.setSearch({d:a.id,sig:a.sig,s:a.source_name}).hash(""),b=c.toString()}else b=a.url;return b},b=function(a,b){return $.truncate(a,{length:b})},c=function(a){if(a&&0!==a){var b,c,d,e;return b=parseInt(a/3600),c=parseInt(a/60)-60*b,d=a-60*parseInt(a/60),b=0===b?"":b>9?b+":":"0"+b+":",c=c>9?c+":":"0"+c+":",d=d>9?d:"0"+d,e=b+c+d}},d=function(a,b){return a?a:b},e=function(a){var b=new URI(a);return b.hostname().replace("www.","")},f=function(a,b){var c=Handlebars.helpers._urldomain(b);return Handlebars.helpers._default(a,c)},g=function(a){return a<10?"0"+a:a},h=function(a){var b=["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"];return b[a.getMonth()]},i=function(a){var b=new Date(1e3*a);return g(b.getDate())+"."+g(b.getMonth()+1)+"."+b.getFullYear()+" "+g(b.getHours())+":"+g(b.getMinutes())},j=function(a){var b=new Date(1e3*a);return g(b.getDate())+" "+h(b)+" "+b.getFullYear()},k=function(a){if(a&&0!==a){var b=new Date,c=new Date(1e3*a),d=b-c,e=parseInt(d/6e4),f="";if(e<=1)f="<b>сейчас</b>";else if(e<60)f="<b>"+e+"&nbsp;"+pluralFormat(e,"минуту","минуты","минут")+"&nbsp;назад</b>";else if(e>=60&&e<120)f="<b>час&nbsp;назад</b>";else if(e>=120&&e<420){var h=parseInt(e/60);f="<b>"+h+"&nbsp;"+pluralFormat(h,"час","часа","часов")+"&nbsp;назад</b>"}else f=b.getFullYear()===c.getFullYear()&&b.getMonth()===c.getMonth()&&b.getDay()===c.getDay()?"<b>сегодня</b>":b.getFullYear()===c.getFullYear()&&b.getMonth()===c.getMonth()&&b.getDay()-c.getDay()===1?"вчера":g(c.getDate())+"."+g(c.getMonth()+1)+"."+c.getFullYear().toString().slice(-2);return f}},l=function(a){return JSON.stringify(a)},m=function(a){var b=new URI(STP.location),c=(new URI).search(!0);return b.setSearch({q:a,df:c.df,dt:c.dt,zvhd:c.zvhd,user_type:c.user_type}),b.href()},n=function(a){var b=new URI(a);return b.setSearch({w:"200",q:"100"}),b.href()},o=function(a){return parseInt(a)},p=function(a){return a.charAt(0).toUpperCase()+a.slice(1)},q=function(a){if(a&&0!==parseInt(a)){var b=Handlebars.helpers._humanTime(a);return new Handlebars.SafeString('<span class="preview__date">'+b+"</span>")}};Handlebars.registerHelper("_itemUrl",a),Handlebars.registerHelper("_truncate",b),Handlebars.registerHelper("_duration",c),Handlebars.registerHelper("_default",d),Handlebars.registerHelper("_urldomain",e),Handlebars.registerHelper("_sourceName",f),Handlebars.registerHelper("_date",i),Handlebars.registerHelper("_humanTime",k),Handlebars.registerHelper("_dateFull",j),Handlebars.registerHelper("_json",l),Handlebars.registerHelper("_serialUrl",m),Handlebars.registerHelper("_previewUrl",n),Handlebars.registerHelper("_parseInt",o),Handlebars.registerHelper("_capitaliseFirstLetter",p),Handlebars.registerHelper("_previewPubDate",q)}();var grid=function(){var a,b=null,c=function(c,e){a=e,b=grid.itemTemplate=STP.itemTemplate?Handlebars.compile(STP.itemTemplate):null,$(document).on("appendedTemplate",function(){$(".js-video-item__preview").off("error").on("error",function(){var a=$(this),b=a.data("url"),c=a.data("preview"),d=a.data("error"),e=a.data("isrecommend"),f=c.local_url,g="/static/web/img/0.gif",h=Date.now()-STP.VideoUserLoadingTime;if(f){var i;""===d?(i=c.url,a.data("error","2"),e?(STP.qid=STP.qid_recommend,pxt("vpf",b,f,"m","reco",h),STP.qid=STP.qid_double):pxt("vpf",b,f,"m","serp",h),a.removeClass("thumb-preview").attr("src",i)):"2"===d&&(a.data("error","3"),i=g,e?(STP.qid=STP.qid_recommend,pxt("vpf",b,c.url,"h","reco",h),STP.qid=STP.qid_double):pxt("vpf",b,c.url,"h","serp",h),a.removeClass("thumb-preview").attr("src",i))}else c.url&&""===d&&(this.src=g,e?(STP.qid=STP.qid_recommend,pxt("vpf",b,c.url,"h","reco",h),STP.qid=STP.qid_double):pxt("vpf",b,c.url,"h","serp",h),a.data("error","2"))})}),d(c,"first")},d=function(c,d){if(STP.VideoUserLoadingTime=Date.now(),b&&c){a.append(b(c)),$(document).trigger("appendedTemplate"),"second"===d&&preview.setDirect();for(var e=1;e<c.items.length;e++)"is_malware"in c.items[e]&&pxt("vmw",c.items[e].url);try{STP.pfmTmplEnd||(STP.pfmTmplEnd=performance.now(),performanceLogger())}catch(f){}}};return{init:c,render:d}}(),addData=function(){var a,b,c,d,e=20,f=5,g=STP.sf?STP.sf:e,h=!1,i=!1,j=!1,k=function(e){d=e,c=$("#preloader"),a=$("#moreResults"),a.on("click",function(){j=!1,$(this).hide()}),$(document).on("appendedTemplate",function(){setTimeout(function(){b.height()>=b.prop("scrollHeight")&&m()},0)}),b=$(".js-media-responses"),$(document.documentElement).hasClass("platform-TABLET")&&b.momentum({handleX:!1}),b.on("scroll",_.throttle(l,250)),$(window).on("scroll",_.throttle(l,250))},l=function(){var a,b=$(this);if(this===window){if("landscape"===preview.getOrientation())return;a=$(document).height()}else{if("portrait"===preview.getOrientation())return;a=b[0].scrollHeight}var c=b.scrollTop(),d=b.height();c>=a-1.25*d&&(j||i||STP.antirobot&&STP.antirobot.blocked||h||(g/e%f===0&&(j=!0),m()))},m=function(){if(!STP.ppn&&!STP.debug){var c="/search_video",d=(new URI).search(!0),f={utf8in:1,num:e,ajax:1,rch:STP.rch,sf:g,cur_qid:STP.qid};$.extend(d,f),STP.antirobot&&STP.antirobot.blocked||h||i||(h=!0,n(),$.ajax({dataType:"json",url:c,data:d,cache:!1}).done(function(c){c.ppn||(c.antirobot&&c.antirobot.blocked?antirobot.showHandlebarsModal(c.antirobot,function(){j=!1,m()}):(STP.results.qid=c.qid,$.ajax({url:(STP.pxt_host?"//"+STP.pxt_host:"")+"/0c.gif?megarandom="+c.qid+"&h="+STP.rch,cache:!1}),c.items&&c.items.length>0?($.merge(STP.results.items,c.items),grid.render({items:c.items.slice(0,10)},"second"),grid.render({items:c.items.slice(10,20)},"second"),b.data("plugin_momentum")&&b.data("plugin_momentum").reinit(),j&&a.show()):i=!0),g+=e,h=!1,p())}).always(function(){pxt("vmr"),o(),$(document).trigger("videoItemsLoaded")}))}},n=function(){o(),d.append(c),c.css({display:"inline-block"})},o=function(){c.detach()},p=function(){var a=$(".sys__ajax__counters").map(function(){return this.innerHTML}).get().join(""),b=Math.random();a.replace(/<(noscript)>(?:\s|.)*?<\/\1>/gi,"").replace(/<img(?:\s+.*?)+src=['"]([^"']+)['"].*?>/gi,function(a,c){return c=new URI(c),c.setSearch("_",b),(new Image).src=c.href(),""}).replace(/<script(?:\s+.*?type=['"]text\/javascript['"])?>((?:.|\s)*?)<\/script>/gi,function(a,b){try{b&&$.globalEval(b)}catch(c){}return""})};return{init:k}}(),preview=function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F=680,G=20,H=192,I=188,J=!1,K=0,L={},M={},N=!0,O=!1,P=!1,Q={},R=!1,S=!1,T=0,U={0:!0,180:!0},V=null,W=0,X=0,Y=1,Z=0,_=10,aa=15,ba=20,ca=function(){if(a=$(document.documentElement),b=$(".vertical-wrapper"),c=$("#layout"),d=$("#mediaHeader"),f=$("#portal-menu"),e=$(".pm-logo__link"),h=$("#go-headlinks"),i=$("#goTopBn"),j=$("#topMenuBlock"),k=$("#topmenu"),g=$("#spellchecker"),l=$(".js-media-responses"),m=$(".media-responses__list"),n=o=m.find(".js-video-item").eq(0),r=$("[name=viewport]"),s=$("#q"),t=n.outerWidth(!0),y=Handlebars.compile($("#preview_tmpl").html()),STP.debug&&a.css("overflow","visible"),STP.qid_double=STP.qid,x=$(document.documentElement).hasClass("platform-TABLET"),J=navigator.userAgent.toLowerCase().indexOf("ipad")>=0){var p=window.innerWidth||$(window).width(),q=window.innerHeight||$(window).height(),z=50,A=p>q&&p-q>z,B=U[window.orientation];(A&&B||!A&&!B)&&(U={"-90":!0,90:!0})}v=w=qa($(window).width(),$(window).height()),a.addClass(v),ta(),c.css("top",E),x&&(sa(),l.data("plugin_momentum")&&"portrait"===v&&l.data("plugin_momentum").disable(),J&&"landscape"===v&&a.css("position","fixed")),ha(!0),u=m.width(),X=Math.floor(u/t),wa(),wa(),m.on("click",".js-video-item__link",function(a){var b=$(this).data("external");window.history&&window.history.pushState&&!b&&a.preventDefault(),fa.apply(this)}),$(document).on("kbnavi",function(){R=!0,S=!1}).on("kbnaviEnter",function(){S=!0}).on("mousenavi",function(){R=!1,S=!1}),$(window).on("wheel",function(b){if("landscape"===v&&!a.hasClass("modal-open")&&!STP.debug)if(b.preventDefault(),1===b.originalEvent.deltaMode){var c=l[0].scrollTop+40*b.originalEvent.deltaY;null!==V&&(c+=V-l[0].scrollTop),V=c,l.stop().animate({scrollTop:c},250,"swing",function(){V=null})}else l[0].scrollTop+=b.originalEvent.deltaY}).on(J?"orientationchange":"resize",ea),l.on("scroll",da),"onhashchange"in window&&$(window).on("hashchange",function(){P||ha(),P=!1}),"onpopstate"in window&&$(window).on("popstate",function(a){ha()}),__PM.getItems(function(a){a.toolbar.items[0].itemsByName.search.form.on("submit",function(){ga(!1)})}),k.find("a").on("click",function(){ga(!1)}),g.find("a").on("click",function(){ga(!1)}),e.on("click",function(){ga(!1)})},da=function(){if("landscape"===v||"landscape"===w){var a=l.scrollTop();if(x?a<E?(d.show(),d.css("top",-a),c.css("top",E-a)):(d.hide(),c.css("top",0)):a<A+B?(h.show(),i.show(),d.css("top",-a),c.css("top",E-a)):(h.hide(),i.hide(),d.css("top",0),c.css("top",z+C)),g.length){var b=A+B+D;x&&(b+=z),a<b&&l.css({"margin-top":-K,"padding-top":7+K})}}},ea=function(){var a=x&&!J?screen.width:$(window).width(),b=x&&!J?screen.height:$(window).height(),d=Math.abs(a-b)>50;if(d&&(v=qa(a,b)),v!==w&&d&&ra(),X=Math.floor(m.width()/t),X!==W){var e=$(".js-yandex_ad"),f=Z;e.remove(),Y=1;for(var h=0;h<e.length;h++)wa(e[h]);if(2===X)for(var i=(f-Z)/_,j=0;j<i;j++)wa();W=X}g.length&&(ua(),c.css("top",E),da()),la(),$(".js-video-inline").css({height:L.playerHeight,width:L.playerWidth}),$(".js-preview__info").css({width:L.playerWidth})},fa=function(){var a=$(this).data("external"),b=a?"extern":null;if(window.history&&window.history.pushState&&!a){var c=oa(),d=this.href;window.history.pushState({d:c.zvid,sig:c.sig},"",d)}P=!0,O=!0,o=n,n=$(this),L=na(n.find("img")),M=na(o.find("img"));var e=n.closest(".video-item").hasClass("video-item_active");e||(ga(!0),L.player&&ia(n),L.isRecommend?(STP.qid=STP.qid_recommend,pxt("vic",L.url,L.number,STP.results.qid,L.source_id,b,L.isMalware,"reco",L.object_type),STP.qid=STP.qid_double):pxt("vic",L.url,L.number,STP.results.qid,L.source_id,b,L.isMalware))},ga=function(a){a||(M=L);var b=M.source_id||null;if(Q.timeStart){var c=Q.firstTime?"vtf":"vt";Q.firstTime&&(Q.firstTime=!1),L.isRecommend&&a&&(STP.qid=STP.qid_recommend,STP.qid=STP.qid_double),M.isRecommend?pxt(c,Q.url,Math.floor((new Date-Q.timeStart)/1e3),Q.duration,b,"reco",M.object_type):pxt(c,Q.url,Math.floor((new Date-Q.timeStart)/1e3),Q.duration,b)}Q.timeStart=new Date,Q.url=L.url,Q.duration=L.duration},ha=function(a){var b,c,d=oa(),e=d.zvid;if(e?(c=m.find("#vid_"+e),O=!0):c=m.find(".js-video-item").eq(0),c.length){if(L=na(c.find("img")),n=c.find("a"),b=L.player,!e&&a&&b){var f=L.url,g=[/youtube.com/,/vzavr.ru/],h=/odnoklassniki.ru/;if(g[1].test(f)||g[0].test(f)){var i=new URI(b.url);i.setSearch("autoplay","0"),b.url=i.href()}h.test(f)&&(b.flashvars=b.flashvars||{},$.extend(b.flashvars,{autoplay:0}))}ia(n)}else{var j={q:STP.qswap,user_type:STP.userType},k=new Date;$.extend(j,d),$.ajax({dataType:"json",url:"/video_data?",data:j}).done(function(a){var c=Date.now()-k;a.items&&a.items.length?(L=na(a.items[0]),b=L.player,b?pxt("vres",L.url,"full",c):pxt("vres",L.url,"nometa",c),ia(!1)):(L.error=!0,ia(!1))})}},ia=function(a){N?(Q.firstTime=!0,N=!1):(Q.firstTime=!1,p.remove()),p=$('<div class="preview"></div>'),L.isRecommend?va(o).before(p):va(n).before(p),la(),p.html(y(L)),q=p.find(".js-preview__playerholder"),a!==!1?(ka(a.parent()),O&&ma()):ka(!1),L.player?(q.removeClass("preview__preloader_hide"),ja(q)):q.addClass("preview__preloader_hide"),Q.timeStart||(Q.timeStart=new Date,Q.url=L.url,Q.duration=L.duration),$.ajax({dataType:"json",url:L.recommend_url}).done(function(a){a.results.length>1&&grid.itemTemplate&&(STP.qid_recommend=a.qid,a.items=a.results,p.addClass("recommend-add"),p.find(".recommend__list-inner").html(grid.itemTemplate(a)),$(document).trigger("appendedTemplate"))})},ja=function(a){var b=L.player||{};switch(b.type){case"iframe":a.html('<iframe type="text/html" src="'+b.url+'" width="100%" height="100%" data-duration="'+L.duration+'" frameborder="0" allowfullscreen="1" scrolling="no"></iframe>');break;default:var c={allowFullScreen:b.allowFullScreen||"true",allowScriptAccess:b.allowScriptAccess||"never",bgcolor:"#222222"};a.html('<div id="previewPlayerholderContent"></div>'),swfobject.embedSWF(b.url,"previewPlayerholderContent","100%","100%","9.0.0",!1,b.flashvars,c,{},function(b){b.success||a.find("#previewPlayerholderContent").replaceWith('<div class="video-inline__message"><a href="http://get.adobe.com/ru/flashplayer/" target="_blank">Для просмотра установите Adobe Flash Player</a></div>')})}},ka=function(a){var b=$(".video-item_active");a.length?(b.removeClass("video-item_active"),a.addClass("video-item_active")):b.length&&b.removeClass("video-item_active")},la=function(){"landscape"===v&&parseInt(p.css("margin-right"))!==l.width()&&p.css("margin-right",l.width());var a,b;L.player?(a=L.player.width,b=L.player.height):L.preview?(a=L.preview.width,b=L.preview.height):(a=640,b=240);var d=E-parseInt(c.css("top")),e=Math.max(p.height()-H-G-d,I),f=p.width(),g=calc_sizes(a,b,f,"w");g.h>e&&(g=calc_sizes(a,b,e,"h")),L.playerWidth=g.w,L.playerHeight=g.h},ma=function(){var a=$(".video-item_active");if(a.length&&(!R||S)){var b;"landscape"===v?(b=a.position().top+l.scrollTop(),T!==b&&(T=b,N?l.scrollTop(b-E):l.animate({scrollTop:b-E},200))):(b=p.offset().top,T!==b&&(T=b,J?$("body, html").animate({scrollTop:b},200):setTimeout(function(){window.scrollTo(0,b-z)},0)))}},na=function(a){var b={};return a.length?b={id:a.attr("data-docid"),name:a.attr("data-title"),source_name:a.attr("data-source"),source_id:a.attr("data-source-id"),time:a.attr("data-time"),duration:a.attr("data-duration"),url:a.attr("data-url"),number:a.attr("data-num"),player:a.attr("data-player")?JSON.parse(a.attr("data-player")):null,preview:a.attr("data-preview")?JSON.parse(a.attr("data-preview")):null,recommend_url:a.attr("data-recommend"),isRecommend:a.attr("data-isrecommend"),isMalware:!!a.attr("data-ismalware"),object_type:a.attr("data-object")}:$.extend(b,a),b},oa=function(){var a=(new URI).fragment(!0),b=(new URI).query(!0),c=$.isEmptyObject(a)?b:a,d={zvid:c.d,sig:c.sig};return d},pa=function(){return v},qa=function(a,b){return J?U[window.orientation]?"portrait":"landscape":a>b&&a>F?"landscape":"portrait"},ra=function(){x&&sa(),"landscape"===v?(window.scrollTo(0,0),l.data("plugin_momentum")&&setTimeout(function(){l.data("plugin_momentum").enable().reinit(),l.scrollTop(0)},0)):(d.show(),h.show(),i.show(),j.show().css("top",0),d.css("top",0),c.css("top",E),l.data("plugin_momentum")&&l.data("plugin_momentum").disable()),a.removeClass(w).addClass(v);var b=va(n).index(),e=p.next(".js-video-item").index();m.find(".js-video-item").slice(b,e).insertAfter(p),w=v,x?setTimeout(function(){J&&a.css("position","landscape"===v?"fixed":"static"),__PM.getItems(function(a){a.toolbar.resize()}),s.is(":focus")||ma()},20):ma()},sa=function(){"landscape"===v?(J&&a.width(window.innerWidth),r.attr("content","user-scalable=0")):J?(a.width(""),r.attr("content","user-scalable=0")):r.attr("content","")},ta=function(){z=f.height(),A=h.height(),B=i.height(),D=k.outerHeight(!0),ua()},ua=function(){var a=j.is(":hidden");a&&j.show(),K=g.height(),C=j.height(),E=z+A+B+C,a&&j.hide()},va=function(a){u=m.width(),X=Math.floor(u/t);var b=a.closest(".js-video-item").index(".js-video-item");return m.find(".js-video-item").eq(Math.floor(b/X)*X)},wa=function(a){if(!(STP.movieInfo&&STP.movieInfo.recommended||STP.results.items.length<=2)){2===X?Z=Y*_-5:3===X?Z=Y*aa-7:4===X&&(Z=Y*ba-9);var b=".js-video-item",c=String(Z)+String(Math.round(100*Math.random())),d="R-A-192658-32",e=a?a:'<div class="yandex_ad js-yandex_ad"><div id="yandex_rtb_'+d+"-"+c+'" class="yandex_ad__inner"></div></div>';Z<$(b).length&&(m.find(b).eq(Z).after(e),W=X,Y+=1,a||direct2.insert(c,d))}};return{init:ca,getOrientation:pa,pxtWatchVideo:ga,getHash:oa,setDirect:wa}}();direct=function(){function a(){$(".js-yandex_ad").remove()}var b=function(){var b=1,c="yandex_context_callbacks";window[c]=window[c]||[],window[c].push(function(){Ya.Direct.insertInto(132681,"yandex_ad",{stat_id:2506142,ad_format:"direct",font_size:1,type:"horizontal",limit:b,title_font_size:1,site_bg_color:"FFFFFF",title_color:"005FC5",url_color:"338800",text_color:"000000",hover_color:"F26D00",header_bg_color:"",no_sitelinks:!0,direct_favicon:!1},a)});var d=document.getElementById("yaDirectContext");d&&d.parentNode.removeChild(d),d=document.createElement("script"),d.setAttribute("id","yaDirectContext"),d.src="//an.yandex.ru/system/context.js",d.type="text/javascript",d.async=!0,d.onerror=a;var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(d,e)};return{insert:b}}(),direct2=function(){function a(){$(".js-yandex_ad").remove()}var b=function(b,c){var d="yandexContextAsyncCallbacks";window[d]=window[d]||[],window[d].push(function(){Ya.Context.AdvManager.render({blockId:c,renderTo:"yandex_rtb_"+c+"-"+b,pageNumber:b,async:!0})});var e=document.getElementsByTagName("script")[0],f=document.createElement("script");f.type="text/javascript",f.src="//an.yandex.ru/system/context.js",f.async=!0,f.onerror=a,e.parentNode.insertBefore(f,e)};return{insert:b}}();var seriesNav=function(){var a,b,c,d,e,f=50,g=20,h=6,i=f,j=i,k=function(){function k(a,b){return a.caption-b.caption}var m,n=null;if(a=STP.series,a.pxtW=a.auto?"a":"m",a.episodesSlice=null,a.episodes){for(m=0;m<a.episodes.length;m++)a.episodes[m].caption=parseInt(a.episodes[m].caption),a.episodes[m].active&&(n=a.episodes[m].caption);a.episodes.sort(k),a.episodesSlice=a.episodes,null===n&&(n=a.episodes[0].caption)}if(a.seasons){for(m=0;m<a.seasons.length;m++)a.seasons[m].caption=parseInt(a.seasons[m].caption);a.seasons.sort(k)}if(a.episodes&&a.episodes.length>f+g){i=a.episodes.length/h,i=Math.ceil(i/f)*f,j=i;var o=parseInt(a.episodes[0].caption);1!==o&&(j=Math.ceil((o-1)/i)*i-o+1,j<g&&(j+=i));var p,q,r=j;for(a.groups=[],m=0;m<a.episodes.length;m+=r)0!==m?(r=i,p=a.episodes[m].caption-1+"+"):p=a.episodes[m].caption+"—"+(a.episodes[m+r].caption-1),n>=a.episodes[m].caption&&n<a.episodes[m].caption+r?(q=!0,a.episodesSlice=a.episodes.slice(m,m+r)):q=!1,a.groups.push({group:m,caption:p,active:q})}a.hr=Boolean((a.seasons||a.groups)&&a.episodes),a.episodesTitle=Boolean(!(a.seasons||a.groups)&&a.episodes);var s=Handlebars.compile($("#seriesNavTemplate").html());b=Handlebars.compile($("#seriesEpisodesTemplate").html()),Handlebars.registerPartial("episodeList",b),$(".js-media-responses").prepend(s(a)),d=$("#seriesEpisodes"),e=$("#seriesNav").find("a"),a.groups&&(c=$("#seriesGroups"),c.find(".js-series__group").on("click",l)),e.on("click",function(){preview.pxtWatchVideo(!1)})},l=function(e){e.preventDefault();var f=$(this),g=parseInt(f.attr("data-group")),h=g+(0===g?j:i);c.find(".series__season_active").removeClass("series__season_active"),f.addClass("series__season_active"),a.episodesSlice=a.episodes.slice(g,h),d.html(b(a))};return{init:k}}(),movieInfo=function(){var a=function(){function a(){D.eq(w-1).after(z(STP.movieInfo)),x=w,b()}function b(){e=$("#js-recommended__items"),f=$("#js-recommended__navi"),g=$(".recommended__item"),h=$(".recommended__prev"),i=$(".recommended__next"),c(),d()}function c(){j=f.width(),n=g.length,k=g.width(),m=Math.floor(j/k),l=Math.floor(j/k)-1,o=Math.floor((n-m)/l)+1,p=(n-m)%l,q=k*n,r=k*l,s=k*p,v=m,t=r,u=1,h.hide(),e.css({width:q}),n<=m?i.hide():i.show()}function d(){i.on("click",function(){1==u&&h.show(),u==o&&i.hide(),u+1==o&&0==p&&i.hide(),t=u==o&&p>0?s:r,e.animate({left:"-="+t+"px"},400),u+=1,v+=t==r?l:p}),h.on("click",function(){2==u&&h.hide(),u!=o&&i.show(),u==o&&0==p&&i.show(),t=2==u&&v!=l+m?s:r,e.animate({left:"+="+t+"px"},400),u-=1,v-=t==r?l:p}),e.find("a").on("click",function(){preview.pxtWatchVideo(!1)})}var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y=Handlebars.compile($("#movieInfoTemplate").html()),z=Handlebars.compile($("#movieRecomTemplate").html()),A=$(window),B=$(".js-media-responses"),C=$(".media-responses__list"),D=C.find(".js-video-item"),E=D.eq(0),F=E.outerWidth(!0);if(STP.movieInfo.rating&&(STP.movieInfo.rating_percent=10*STP.movieInfo.rating),STP.movieInfo.actors){STP.movieInfo.actors1=[],STP.movieInfo.actors2=[];for(var G=0;G<STP.movieInfo.actors.length;G++)STP.movieInfo.actors[G].number=G+1,G<2?STP.movieInfo.actors1.push(STP.movieInfo.actors[G]):STP.movieInfo.actors2.push(STP.movieInfo.actors[G])}if(STP.movieInfo.directors)for(var H=0;H<STP.movieInfo.directors.length;H++)STP.movieInfo.directors[H].number=H+1;if(STP.movieInfo.recommended){for(var I=0;I<STP.movieInfo.recommended.length;I++)STP.movieInfo.recommended[I].number=I+1;for(var J=0;J<STP.movieInfo.recommended.length;J++)STP.movieInfo.recommended[J].title=ellipsis(STP.movieInfo.recommended[J].title,10,2)}STP.movieInfo.release_type&&("world"==STP.movieInfo.release_type&&(STP.movieInfo.release_txt="Мировая премьера: "+timeUtils.dateFull(STP.movieInfo.release_date)),"rus"==STP.movieInfo.release_type&&(STP.movieInfo.release_txt="Премьера в России: "+timeUtils.dateFull(STP.movieInfo.premiere_ru)),"dvd"==STP.movieInfo.release_type&&(STP.movieInfo.release_txt="Дата выхода на DVD: "+timeUtils.dateFull(STP.movieInfo.dvd_date))),B.prepend(y(STP.movieInfo)),$(".movie__more").on("click",function(){$(this).hide(),$(".movie__text-hide").show()}),$(".movie").find("a").on("click",function(){preview.pxtWatchVideo(!1)}),STP.movieInfo.recommended&&(A.on("resize",function(){w=Math.floor(C.width()/F),x!=w&&($(".js-recommended__films").remove(),a())}),setTimeout(function(){STP.results.items.length<=2||(w=Math.floor(C.width()/F),a())},0))};return{init:a}}(),filter=function(){var a=function(){var a="filter__selector_active",b=".js-filter__list",c=".js-filter__selector",d=$("#filters"),e=$(c),f=$(b),g=$(document);e.on("click",function(){$(this).toggleClass(a),f.toggle()}),d.find("a").on("click",function(){preview.pxtWatchVideo(!1)}),g.on("click",function(d){var g=$(d.target).closest(b),h=$(d.target).closest(c);0===g.length&&0===h.length&&(f.hide(),e.removeClass(a))})};return{init:a}}();try{rT.profile("jsinit")}catch(e){}var STP=STP||{};!function(){$(document).on("headerReady",function(){try{STP.pfmTmplStart=performance.now()}catch(a){}if(SearchFormSuggest.init(),FoundCount.init(),Header.init(),filter.init(),window.hotKeyUsage(),window.history&&window.history.replaceState){var b=preview.getHash();window.history.replaceState({d:b.zvid,sig:b.sig},"",location.href)}if(STP.results){var c=$("#mediaResponsesList");grid.init(STP.results,c),STP.series&&seriesNav.init(),STP.movieInfo&&movieInfo.init(),addData.init(c),preview.init()}else try{STP.pfmTmplEnd||(STP.pfmTmplEnd=performance.now(),performanceLogger())}catch(a){}PageReloader.initDeferred()}),$(window).on("load",function(){performanceLogger()}),pxt("screen_size",window.screen.width,window.screen.height)}();try{rT.profile("jsinit")}catch(e){}