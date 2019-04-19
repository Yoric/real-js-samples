!function(a,c){function h(a){this.init.apply(this,arguments);var c=a&&a.render;c&&(c!==!0?this.render(c):this.render())}var g=(c.Event,c.DOM),_=c.extend,y=c.isNumber,v=c.isFunction,w=c.isString,T=c.isElement,E=(c.isObject,c.arrayify,c.trim,g.addClass),b=a.document,M=c.query,L=function(a,c){var h=M(a,c);return h&&h.length?h[0]:null},C=Object.create?function(a,c){return Object.create(a,{constructor:{value:c}})}:function(a,c){function d(){}d.prototype=a;var h=new d;return h.constructor=c,h},S=function(a,c,d,h){if(!c||!a)return a;var g,f=c.prototype;return g=C(f,a),a.prototype=_(g,a.prototype,!0),a.superclass=C(f,c),d&&_(g,d,!0),h&&_(a,h,!0),a},N="_sinaguid_"+(new Date).getTime(),O={},D=function(a){w(a)||(a="");var c="counter"+a;return O[c]||(O[c]=0),O[c]++,a+O[c]},I=function(a,d){var c=null;if(a){if(c="string"==typeof a?a:a[N],!c&&!d)try{a[N]=c=D()}catch(h){}c=c||null}return c},A={INIT:"init",INIT_END:"initend",RENDER:"render",RENDER_END:"renderend",DESTROY:"destroy",DESTROY_END:"destroyend"};_(h.prototype,{WRAPPER_TAG:"div",CONTENT_TAG:"div",CSS_PREFIX:"sina-",_initialized:!1,_destroyed:!1,_rendered:!1,init:function(a){a=a||{},this.trigger(A.INIT,{config:a}),this._initAll(a),this._initialized=!0,this.trigger(A.INIT_END)},destroy:function(){this.trigger(A.DESTROY),this._destroyAll(),this.removeListener(),this._destroyed=!0,this.trigger(A.DESTROY_END)},_initAll:function(){if(!this._initialized){var a,c,d,h=this._inheritanceChain();for(d=h.length-1;d>=0;d--)a=h[d],c=a.prototype,c.hasOwnProperty("initializer")&&c.initializer.apply(this,arguments)}},_destroyAll:function(){if(!this._destroyed){var a,c,d,e,h=this._inheritanceChain();for(d=0,e=h.length;e>d;d++)a=h[d],c=a.prototype,c.hasOwnProperty("destructor")&&c.destructor.apply(this,arguments)}},initializer:function(a){var c=a.source;this.contentBox=T(c)?c:w(c)?L(c):null,this._width=a.width||"",this._height=a.height||""},destructor:function(){},render:function(i){this.trigger(A.RENDER,{container:i}),w(i)?i=L(i):T(i)||(i=null);var a,d=i,e=this.contentBox,c=!e,h=b,f=(this.constructor,this.WRAPPER_TAG),g=this.CONTENT_TAG;I(e,!0)||(I(e),this.elements={},this.wrapperBox=a=h.createElement(f),c?(this.contentBox=e=h.createElement(g),a.appendChild(e)):(e.parentNode.insertBefore(a,e),a.appendChild(e),this.queryElements()),d?d!==a.parentNode&&d.insertBefore(a,d.firstChild):c&&(d=b.body,d.insertBefore(a,d.firstChild)),this._renderAll(),this._rendered=!0,this.trigger(A.RENDER_END))},_renderAll:function(){if(this._initialized&&!this._rendered){var a,c,h,f=this._inheritanceChain(),g=this.CSS_PREFIX||"",e="",_=this.wrapperBox,d=this.contentBox;for(h=f.length-1;h>=0;h--)a=f[h],e=g+a.NAME,c=a.prototype,c.hasOwnProperty("renderer")&&c.renderer.apply(this,arguments),E(_,e);E(d,e+"-content")}},renderer:function(){var a=this.wrapperBox,c=this.contentBox,h=this._width,d=this._height;a&&c&&(y(h)?a.style.width=h+"px":w(h)&&(a.style.width=h),y(d)?a.style.height=d+"px":w(d)&&(a.style.height=d))},queryElements:function(){var d,a,e=this._getQueries(),c=this.contentBox,h=this.elements;for(d in e)a=L(e[d],c),a&&(h[d]=a)},_getQueries:function(){var a,c,d={},h=this._inheritanceChain();for(a=h.length-1;a>=0;a--)c=h[a]._queries,c&&_(d,c,!0);return d},_inheritanceChain:function(){if(!this.__chain){for(var a=[],c=this.constructor;c;)a.push(c),c=c.superclass&&c.superclass.constructor;this.__chain=a}return this.__chain}}),c.makeTarget(h),_(h,{NAME:"widget",guid:D,stamp:I}),c.Widget=h,c.createWidget=function(a,d,c){v(a)||(c=d,d=a,a=h),c=c||{},d=d||{};var g=function(){g.superclass.constructor.apply(this,arguments)};return S(g,a,d,c),g}}(window,SINA),function(i,a){if(!i.WeiboMod||!i.WeiboMod.VERSION){var c=a.Widget,f=a.createWidget,h={VERSION:"0.1",guid:c.guid,stamp:c.stamp,createWidget:f};i.WeiboMod=h}}(window,SINA),function(a,c){var h=a.WeiboMod,x=c.arrayify,g=c.trim,_=(c.isNumber,c.isArray,c.DOM),y=_.next,v=a.document,w=function(a){var c=a.cloneNode(!0);return 8>ie&&(c.innerHTML=a.innerHTML),c},T=function(a,c){var h=c.createElement("div");return h.innerHTML=a,h},E=function(a,c){if(a&&a.length){{var e=null,d=0;a.length}for(c=c||a[0].ownerDocument,e=c.createDocumentFragment(),a.item&&(a=x(a)),d=0,len=a.length;len>d;d++)e.appendChild(a[d]);return e}return null},b=function(a,c){if("string"==typeof a&&(a=g(a))){var e,h=null,d=T;return c=c||v,e=d(a,c).childNodes,h=1===e.length?e[0].parentNode.removeChild(e[0]):E(e,c)}return null},M=function(a){for(var c=a.offsetParent,e=a.offsetLeft,d=0,h=v.body;c;)e+=c.offsetLeft,c=c.offsetParent;for(c=a.parentNode;c!==h;)d+=c.scrollLeft,c=c.parentNode;return e-d},L=function(a){for(var d=a.offsetParent,e=a.offsetTop,c=0,h=v.body;d;)e+=d.offsetTop,d=d.offsetParent;for(d=a.parentNode;d!==h;)c+=d.scrollTop,d=d.parentNode;return e-c},C=function(){var a,c,h,d,e=!!v.selection;return e?(a=function(a){a.focus();var i={text:"",start:0,end:0},c=0,h=v.selection.createRange(),f=v.body.createTextRange();for(f.moveToElementText(a),i.text=h.text,i.bookmark=h.getBookmark();f.compareEndPoints("StartToStart",h)<0&&0!==h.moveStart("character",-1);c++)"\n"==a.value.charAt(c)&&c++;return i.start=c,i.end=i.text.length+i.start,i},c=function(a,c){c||this.toHead();var f=a.createTextRange();a.value.length===c.start?(f.collapse(!1),f.select()):(f.moveToBookmark(c.bookmark),f.select())},h=function(i,a,f){var c;this.setPosition(i,a),c=v.selection.createRange(),c.text=f,c.setEndPoint("StartToEnd",c),c.select()},d=function(a,f){var c=a.createTextRange();c.collapse(!0),c.moveEnd("character",f),c.moveStart("character",f),c.select()}):(a=function(a){a.focus();var f={text:"",start:0,end:0};return f.start=a.selectionStart,f.end=a.selectionEnd,f.text=f.start!==f.end?a.value.substring(f.start,f.end):"",f},c=function(a,f){return f?(a.focus(),void a.setSelectionRange(f.start,f.end)):void this.toHead(a)},h=function(m,l,f){var a,i,c,h,g;this.setPosition(m,l),a=m.value,i=a.substring(0,l.start)+f+a.substring(l.end),c=h=l.start+f.length,g=m.scrollTop,m.value=i,m.scrollTop!=g&&(m.scrollTop=g),m.setSelectionRange(c,h)},d=function(a,f){a.focus(),a.setSelectionRange(f,f)}),{getPosition:a,setPosition:c,setText:h,moveTo:d,toHead:function(f){this.moveTo(f,0)},toTail:function(f){this.moveTo(f,f.value.length)}}}(),S=function(){var a=function(){var a=v.createElement("canvas");return"getContext"in a}(),f=1,e=2,c=440,i=Math.PI/2,h=[{M11:1,M12:0,M21:0,M22:1},{M11:0,M12:-1,M21:1,M22:0},{M11:-1,M12:0,M21:0,M22:-1},{M11:0,M12:1,M21:-1,M22:0}],g=function(n,q){if(n){var a,s,l=n._angle||0,p=0,h=n.width,m=n.height,r=y(n);switch(r||(r=b('<canvas class="'+(n.className||"")+'" style="display:none;"></canvas>'),n.parentNode.insertBefore(r,null)),q){case f:p=(l+3)%4;break;case e:p=(l+1)%4;break;default:if(0===l)return}a=r.getContext("2d"),1===p||3===p?m>c?(r.width=c,s=r.height=c/m*h,a.save(),a.rotate(p*i),3===p?a.drawImage(n,-s,0,s,c):a.drawImage(n,0,-c,s,c),a.restore()):(r.width=m,r.height=h,a.save(),a.rotate(p*i),3===p?a.drawImage(n,-h,0):a.drawImage(n,0,-m),a.restore()):(r.width=h,r.height=m,a.save(),a.rotate(p*i),2===p?a.drawImage(n,-h,-m):a.drawImage(n,0,0),a.restore()),n.style.display="none",r.style.display="inline",n._angle=p}},_="DXImageTransform.Microsoft.Matrix",d=function(o,s){if(o){var t,a,m=o._angle||0,p=0,g=o.width,n=o.height,q=1;switch(s){case f:p=(m+3)%4;break;case e:p=(m+1)%4;break;default:if(0===m)return}try{t=o.filters.item(_)}catch(l){o.style.filter="progid:"+_+'(SizingMethod="auto expand")',t=o.filters.item(_)}a=h[p],1===p||3===p?(n>c&&(q=c/n),o.parentNode.style.height=q*g+"px"):o.parentNode.style.height=n+"px",t.M11=q*a.M11,t.M12=q*a.M12,t.M21=q*a.M21,t.M22=q*a.M22,o._angle=p}};return{TURN_LEFT:f,TURN_RIGHT:e,MAX_IMG_WIDTH:c,DEG_90:i,ROTATE_MATRIX:h,mode:a?"canvas":"filter",rotateCanvas:g,rotateFilter:d,rotate90:a?g:d}}(),N=function(){function a(a){if(!a)return-1;var c=a.slice(0,10)+a.slice(25)+a.slice(10,25);return Date.parse(c)||-1}function c(){var i=new Date,a=i.getFullYear(),l=i.getMonth(),c=i.getDate(),h=new Date(a,l,c),g=new Date(a,0,1);return{now:i.getTime(),today:h.getTime(),thisYear:g.getTime()}}var f=c(),d=f.now,h=f.today,e=f.thisYear;return{getCurrent:c,timestamp:a,update:function(){var a=c();d=a.now,h=a.today,e=a.thisYear},displayString:function(a){if(a=parseInt(a,10)||0,!a)return"未知时间";var i,c=Math.floor((d-a)/1e3),g="";return 10>=c?g="10秒前":50>=c?g=10*Math.ceil(c/10)+"秒前":3600>=c?g=Math.round(c/60)+"分钟前":a>h&&d-36e5>h?g="今天 "+new Date(a).toTimeString().substr(0,5):a>e?(i=new Date(a),g=i.getMonth()+1+"月"+i.getDate()+"日 "+i.toTimeString().substr(0,5)):(i=new Date(a),g=i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate()+" "+i.toTimeString().substr(0,5)),g}}}(),O=function(a){var c=a.charAt(0);return"#"==c?'<a href="http://weibo.com/k/'+encodeURIComponent(a.slice(1,-1))+'" target="_blank">'+a+"</a>":"@"==c?(c=a.slice(5,7),":/"==c||"s:"==c?(a=a.slice(1),'@<a href="'+a+'" target="_blank">'+a+"</a>"):'<a href="http://weibo.com/n/'+encodeURIComponent(a.slice(1))+'" target="_blank">'+a+"</a>"):'<a href="'+a+'"  target="_blank">'+a+"</a>"},D=/(?:#[^#]*#|@?http\s?\:\/\/[\w\.\/\-\%\?&\+]{4,}|\@[\w\-\u4e00-\u9fa5]+)/gi,I=function(a){return a.replace(D,O)},A={Textarea:C,Image:S,Time:N,cloneNode:w,createFromString:b,pageX:M,pageY:L,updateWordCount:function(f,a,c){if(f&&a){c=c||0;var e,d=f.value||"",h=/[^x00-xff]/g,g=Math.round(d.replace(h,"aa").length/2),_=140;_>=g+c?(e=_-g-c,a.innerHTML="你还可以输入<em>"+e+"</em>字"):(e=g-_+c,a.innerHTML='<span style="color:red">已经超出<em>'+e+"</em>字</span>")}},replaceStatusText:I};h.Utils=A}(window,SINA),function(a,c){var h=a.document,g=h.documentElement,_=a.WeiboMod,y=_.Utils,v=(c.Widget,c.Event),w=(c.createWidget,c.extend,c.query,c.isNumber),T=c.DOM.style,E=v.addListener,b=(v.removeListener,y.cloneNode,y.createFromString),M="weibomod-",L="dialog",C=".",S=M+L+"-",N=S+"hd",O=S+"bd",D=S+"title",I=S+"close",A='<div class="',P='"></div>',B=A+N+P,k=A+O+P,W=A+D+P,R='<a title="关闭" class="'+I+'" href="javascript:void(0);">x</a>',U=S+"overlay-b",F=S+"overlay-p",H=A+U+P,z=A+F+P,j="show",X="hide",Y="move",G=_.createWidget({CSS_PREFIX:M,initializer:function(e){var a,c={},f=!0,d=!1;e&&(f=e.borderWidth||"",w(f)&&(f+="px"),d=!!e.overlay,display=e.display||"none",a=e.children,a&&(c.title=a.title||"",c.body=a.body||"")),this._borderWidth=f,this._hasOverlay=d,this._display=display,this._children=c},destructor:function(){},renderer:function(){var l,a,c=this.wrapperBox,f=this.contentBox,m=(this.constructor,this.elements),h=m.header,g=m.body,_=m.title,y=m.close,d=this._borderWidth,i=this._children,e=this;c.style.position="absolute",f.style.position="relative",h||g||(h=b(B),g=b(k),_=b(W),y=b(R),_.innerHTML=i.title||"",g.innerHTML=i.body||"",h.appendChild(_),h.appendChild(y),f.appendChild(h),f.appendChild(g),m.header=h,m.title=_,m.close=y,m.body=g),d&&(this.borderBox=l=b(H),l.style.position="absolute",l.style.left="-"+d,l.style.top="-"+d,c.insertBefore(l,f)),this._hasOverlay&&(this.overlayBox=a=b(z),a.style.position="absolute",a.style.left=0,a.style.top=0,c.parentNode.insertBefore(a,c)),c.style.display=this._display,a&&(a.style.display=this._display),E(y,"click",function(){return e.hide(),!1})},move:function(a,c){if(this._rendered&&!this._destroyed){this.trigger(Y,{x:a,y:c});var h=this.wrapperBox;h.style.left=w(a)?a+"px":a,h.style.top=w(c)?c+"px":c}},show:function(){if(this._rendered&&!this._destroyed){this.trigger(j);{var a=this.wrapperBox,c=this.overlayBox;this.borderBox}this._adjustSize(),a.style.display="block",c&&(c.style.display="block")}},_adjustSize:function(){if(this._rendered&&!this._destroyed){var a=this.wrapperBox,e=this.overlayBox,f=this.borderBox,c=parseInt(this._borderWidth)||0,d=parseInt(T(a,"width"))||0,h=parseInt(T(a,"height"))||0;e&&(e.style.width=(g&&g.scrollWidth||2e3)+"px",e.style.height=(g&&g.scrollHeight||2e3)+"px"),f&&(f.style.width=d+2*c+"px",f.style.height=h+2*c+"px")}},hide:function(){if(this._rendered&&!this._destroyed){this.trigger(X);var a=this.wrapperBox,c=this.overlayBox;a.style.display="none",c&&(c.style.display="none")}},moveToPageCenter:function(){var c,f,d,e,_,y,v,w,E=this.wrapperBox,b=a.self,i=h.body;d=b.pageXOffset||g&&g.scrollLeft||i.scrollLeft||0,e=b.pageYOffset||g&&g.scrollTop||i.scrollTop||0,_=b.innerWidth||g&&g.clientWidth||i.clientWidth||0,y=b.innerHeight||g&&g.clientHeight||i.clientHeight||0,v=parseInt(T(E,"width"))||0,w=parseInt(T(E,"height"))||0,c=d+_/2-v/2,f=e+y/2-w/2,0>c&&(c=0),0>f&&(f=0),this.move(c,f)}},{NAME:L,HEADER_TEMPLATE:B,BODY_TEMPLATE:k,CLOSE_TEMPLATE:R,TITLE_TEMPLATE:W,_queries:{header:C+N,body:C+O,title:C+D,close:C+I},_classNames:{header:N,body:O,title:D,close:I}});_.Dialog=G}(window,SINA),function(a,c){var h=(a.document,a.WeiboMod),g=h.Utils,_=g.Time,y=_.update,v=_.timestamp,w=_.displayString,T=(g.cloneNode,g.createFromString),E=c.extend,b=(c.query,c.DOM,c.Event),M=b.addListener,L=(b.removeListener,"weibomod-"),C="usercard",S=L+C+"-",N=S+"portrait",O=S+"info",D=S+"description",I=S+"post",A=S+"name",P=S+"v",B=S+"counts",k=S+"followBtn",W=S+"notfollowed",R=S+"followed",U='<div class="',F='">',H="</div>",z=U+N+F+H,j=U+O+F+H,X=U+D+F+H,Y=U+I+F+H,G='<p class="'+A+'"></p>',V='<p class="'+B+'"></p>',K='<a class="'+k+" "+W+'" href="javascript:void(0)"><em>+</em>加关注</a>',Q='<span class="'+k+" "+R+'">已关注</span>',J="follow",Z="unfollow",$=h.createWidget({CSS_PREFIX:L,initializer:function(d){var a={},c=null,h="",e={head:!0,followers:!0,info:!0,followButton:!0};d&&(c=d.data||null,h=d.channel||"",E(e,d.display,!0),E(a,d.children)),this._display=e,this._children=a,this._channel=h,this._userData=c},destructor:function(){},renderer:function(){var a,f,o,c,n,h,e,d,g=this,l=(g.constructor,g.wrapperBox,g.contentBox),_=g.elements,y=g._userData,m=g._channel;a=T($.PORTRAIT_TEMPLATE),f=T($.INFO_TEMPLATE),o=T($.DESC_TEMPLATE),c=T($.POST_TEMPLATE),n=T($.NAME_TEMPLATE),h=T($.COUNT_TEMPLATE),e=T($.FOLLOW_TEMPLATE),d=T($.FOLLOWED_TEMPLATE),f.appendChild(n),f.appendChild(h),f.appendChild(e),f.appendChild(d),l.appendChild(a),l.appendChild(f),l.appendChild(o),l.appendChild(c),_.portrait=a,_.info=f,_.desc=o,_.post=c,_.name=n,_.count=h,_.followBtn=e,_.unfollowBtn=d,e.style.display="none",d.style.display="none",g.setUserData(y,m),M(e,"click",function(){var p=g._userData,s=p&&p.id||null,r=g._channel;return g.trigger(J,{uid:s,channel:r}),!1})},changeStatus:function(d){if(this._rendered&&!this._destroyed){var a=this.elements,c=a.followBtn,h=a.unfollowBtn;d?(c.style.display="none",h.style.display="block"):(c.style.display="block",h.style.display="none")}},setUserData:function(a,f,c){if(a&&this._rendered&&!this._destroyed){this._userData=a,this._channel=f;var h,_,i,T,x,E,b=this.elements,u=b.portrait,o=(b.info,b.desc),s=b.post,r=b.name,M=b.count,n=b.followBtn,t=b.unfollowBtn,e=c?"?"+c+"=":"?zw=",L=f?e+f:"",C=a.maxChar||40,S=a.idstr,N=a.screen_name,p=a.avatar_large,O=a.profile_url||a.domain||"u/"+S,d=a.verified,D=a.verified_type,m="http://weibo.com/",I=m+O+L,q=m+S+"/fans"+L,A=a.following,B=a.followers_count,k=a.verified_reason||a.description,W=a.status;u.innerHTML='<a href="'+I+'" target="_blank"><img src="'+p+'" alt="" /></a>',h='<a href="'+I+'" target="_blank">'+N,d&&(0==D?(h='<a href="'+I+'" target="_blank">'+N,h+='<img alt="" title="新浪认证" class="'+P+'" src="http://timg.sjs.sinajs.cn/t3/style/images/common/transparent.gif" />'):(h='<a href="'+I+'" target="_blank">'+N,h+='<img alt="" title="新浪认证" class="weibomod-usercard-v2" src="http://timg.sjs.sinajs.cn/t3/style/images/common/transparent.gif" />')),h+="</a>",r.innerHTML=h,M.innerHTML='<a href="'+q+'" target="_blank">粉丝</a> <em>'+B+"</em>",A?(n.style.display="none",t.style.display="block"):(n.style.display="block",t.style.display="none"),o.innerHTML="简介："+k,y(),W?(_=W.proxy_mid_base62||0,i=W.text||"无",T=W.created_at,x=W.thumbnail_pic,E="http://weibo.com/"+S+"/"+_+L,i.length>C?(i=i.slice(0,C)+"...",s.innerHTML='<a target="_blank" href="'+E+'">'+w(v(T))+"</a> "+g.replaceStatusText(i)+'&nbsp;&nbsp;&nbsp;<a href="'+E+'" target="_blank">详细 &raquo;</a>'):s.innerHTML='<a target="_blank" href="'+E+'">'+w(v(T))+"</a> "+g.replaceStatusText(i),s.style.display="block"):(s.innerHTML="",s.style.display="none")}}},{NAME:C,PORTRAIT_TEMPLATE:z,INFO_TEMPLATE:j,DESC_TEMPLATE:X,POST_TEMPLATE:Y,NAME_TEMPLATE:G,COUNT_TEMPLATE:V,FOLLOW_TEMPLATE:K,FOLLOWED_TEMPLATE:Q,_queries:{},_classNames:{},EVENTS:{FOLLOW:J,UNFOLLOW:Z}});h.UserCard=$}(window,SINA),function(a,c){var h=(a.document,a.WeiboMod),g=h.Utils,_=h.UserCard,y=(h.Dialog,g.createFromString),v=c.extend,w=c.later,T=c.Array.forEach,E=c.DOM,b=c.Event,M=(E.style,b.addListener),L="weibomod-",C="usercardpopup",S=L+C+"-",N=S+"loading",O="http://img.t.sinajs.cn/t3/style/images/common/loading.gif",D='<div class="',I='">',A="</div>",P=D+N+I+'<img src="'+O+'" />'+A,B=L+"arrow",k=D+B+I,W=["changeStatus"],R=_.EVENTS,U=[R.FOLLOW,R.UNFOLLOW],F=h.createWidget(h.Dialog,{CSS_PREFIX:L,initializer:function(d){var a={},c=null,h=null;d&&(c=d.data||null,h=d.channel||null,v(a,d.children)),this._children=a,this._userCard=new _({data:c,channel:h})},destructor:function(){},renderer:function(){var a,c,e=this,m=e.wrapperBox,f=e.contentBox,h=(e.constructor,e.elements),i=(h.title,h.header),g=h.body,l=(W.length,e._userCard);a=y(F.LOADING_TEMPLATE),g.appendChild(a),h.loading=a,l.render(g),e._userCard=l,i.style.display="none",c=y(k),f.appendChild(c),h.arrow=c,T(W,function(o){e[o]=function(){l[o].apply(l,arguments)}}),T(U,function(o){M(l,o,function(p){e.trigger(o,p)})}),M(m,"mouseenter",function(){return e._showTimer&&(e._showTimer.cancel(),e._showTimer=null),e.show(),!1}),M(m,"mouseleave",function(){return e._showTimer&&(e._showTimer.cancel(),e._showTimer=null),e._showTimer=w(function(){e.hide(),e._showTimer=null},200),!1})},setLoading:function(a){if(this._rendered&&!this._destroyed){var c=this.elements.loading,h=this._userCard.wrapperBox;a?(h.style.display="none",c.style.display="block"):(h.style.display="block",c.style.display="none"),this._adjustSize()}},setUserData:function(a,c,h){this._userCard.setUserData(a,c,h),this._adjustSize()}},{NAME:C,LOADING_TEMPLATE:P,_queries:{},_classNames:{},EVENTS:{SHOW:"show",HIDE:"hide",MOVE:"move",FOLLOW:"follow",UNFOLLOW:"unfollow"}});h.UserCardPopup=F}(window,SINA),function(u,a){var c=a.extend,t=a.arrayify,p=a.trim,h=!!u.postMessage,r=function(a){a=a||"";var c=(Math.random()+"").slice(2),h=(new Date).getTime();return""+a+h+c},s=u.document,x=function(a){var c=a.cloneNode(!0);return 8>ie&&(c.innerHTML=a.innerHTML),c},g=function(a,c){var h=c.createElement("div");return h.innerHTML=a,h},_=function(e,a){if(e&&e.length){{var c=null,d=0;e.length}for(a=a||e[0].ownerDocument,c=a.createDocumentFragment(),e.item&&(e=t(e)),d=0,len=e.length;len>d;d++)c.appendChild(e[d]);return c}return null},y=function(a,c){if("string"==typeof a&&(a=p(a))){var h,e=null,d=g;return c=c||s,h=d(a,c).childNodes,e=1===h.length?h[0].parentNode.removeChild(h[0]):_(h,c)}return null},q="http://api.sina.com.cn/script/javascript/postmsg.html",v="sina.com.cn",w={createNode:y,cloneNode:x,generateId:r,mode:h?"html5":"iframe",config:{proxyUrl:q,domain:v,form:null},setConfig:function(a){c(w.config,a,!0)},send:h?function(a){var c=w.sender,h=w.config;return c||(c=new w.Html5MsgSender({proxyUrl:h.proxyUrl}),this.sender=c),c.send(a),c}:function(a){var c,h=w.config;return c=new w.IframeMsgSender({domain:h.domain,form:h.form}),c.send(a),c}};u.XDPost=w}(window,SINA),function(p,q){var s=p.XDPost,a=q.extend,c=(q.isFunction,document.addEventListener?function(a,c,h){a&&a.addEventListener&&a.addEventListener(c,h,!1)}:function(a,c,h){a&&a.attachEvent&&a.attachEvent("on"+c,h)}),m=document.removeEventListener?function(a,c,h){a&&a.removeEventListener&&a.removeEventListener(c,h,!1)}:function(a,c,h){a&&a.detachEvent&&a.detachEvent("on"+c,h)},n=function(){},x=/^http\s?\:\/\/[a-z\d\-\.]+/i,r="sina-xdpost-iframe-",o=s.generateId,t=function(a){return this instanceof t?(a=a||{},void this.init(a)):new t(a)};a(t.prototype,{ready:!1,init:function(a){if(!this.ready){var h,g,_,y,e,f=this,d=a.proxyUrl;f.onsuccess=a.onsuccess||n,f.onfailure=a.onfailure||n,d&&(e=function(i){if(f.ready&&i.origin===f.target){var a=i.data;a&&"failure"!==a?f.onsuccess&&f.onsuccess(i.data):f.onfailure&&f.onfailure()}},c(p,"message",e),h=o(r),g='<iframe id="'+h+'" name="'+h+'" src="'+d+'" frameborder="0" style="width:0;height:0;display:none;"></iframe>',_=s.createNode(g),y=function(){f.ready=!0;var i=_.src,a=i.match(x);f.target=a&&a[0]||"*"},c(_,"load",y),q.ready(function(){document.body.appendChild(_)}),f._iframe=_,f._iframeLoaded=y,f._receiver=e)}},send:function(f){f=f||{};var d=this,e=f.url,a=f.data,c=f.onsuccess,h=f.onfailure;if(e&&"string"==typeof e){if(c&&(d.onsuccess=c),h&&(d.onfailure=h),!d.ready)return void q.later(function(){d.send(f)},50);a?a+="&_url="+p.encodeURIComponent(e):a="_url="+p.encodeURIComponent(e),d._iframe.contentWindow.postMessage(a,d.target)}},destroy:function(){var a=this._iframe;m(a,"load",this._iframeLoaded),a.parentNode.removeChild(a),m(p,"message",this._receiver),this._iframe=null,this._iframeLoaded=null,this._receiver=null}}),s.Html5MsgSender=t}(window,SINA),function(r,a){var c=r.XDPost,h=a.extend,n=a.ready,s=a.later,x=a.QueryString,t=x.parse,o=function(){},p="sina-xdpost-form-",u="sina-xdpost-iframe-",q=c.generateId,g=function(a){return this instanceof g?(a=a||{},void this.init(a)):new g(a)};g.defaultDomain="sina.com.cn",h(g.prototype,{ready:!1,init:function(c){if(!this.ready){var h,_,y,f=this,v=c.form,e=c.domain||g.defaultDomain;f.onsuccess=c.onsuccess||o,f.onfailure=c.onfailure||o,v||(h=q(p),v=document.createElement("form"),v.id=h,v.method="POST",n(function(){document.body.appendChild(v),f.ready=!0})),y=function(i){f._clear(),f.onsuccess&&f.onsuccess(i)},_=q("callback"),r[_]=y,f.ready=a.isReady,f._callbackName=_,f._form=v,document.domain=e}},send:function(l){l=l||{};var a,c,i,e,h,g=this,m=[],_=g._callbackName,f=l.url,y=l.data,d=l.onsuccess,v=l.onfailure;if(f&&"string"==typeof f){if(d&&(g.onsuccess=d),v&&(g.onfailure=v),!g.ready)return void s(function(){g.send(l)},50);if((i=g._placeholder)||(i=document.createElement("div"),i.style.display="none",i.style.visibility="hidden",document.body.appendChild(i),g._placeholder=i),e=this._form,a=q(u),c='<iframe id="'+a+'" name="'+a+'" src="about:blank" frameborder="0" style="width:0;height:0;display:none;"></iframe>',this._iframeId=a,i.innerHTML=c,e.action=-1===f.indexOf("?")?f+"?callback="+_:f+"&callback="+_,e.target=a,y){"string"==typeof y&&(y=t(y)||{});for(h in y)m.push('<input type="hidden" name="'),m.push(h),m.push('" value="'),m.push(y[h]),m.push('" />');e.innerHTML=m.join("")}e.submit()}},inProgress:function(){return!(!me._iframeId||!document.getElementById(me._iframeId))},_clear:function(){var a=this._iframeId&&document.getElementById(this._iframeId);a&&a.parentNode.removeChild(a),this._iframeId=null},cancel:function(){this._clear()},destroy:function(){var a=this._form,c=this._placeholder;a.parentNode.removeChild(a),c.parentNode.removeChild(c),this._form=null,this._placeholder=null,delete r[this._callbackName],this._iframeId=null}}),c.IframeMsgSender=g}(window,SINA),function(a,c){a.WeiboCard||(a.WeiboCard={});var h=a.WeiboCard,g=a.WeiboMod,_=g.UserCardPopup,y=a.XDPost,v=g.Utils,w=v.pageX,T=v.pageY,E=(v.cloneNode,v.createFromString,c.QueryString),b=c.JSON,M=c.DOM,L=c.Event,C=c.extend,S=M.style,N=M.hasClass,O=M.addClass,D=M.removeClass,I=(M.cache,L.addListener),A=L.removeListener,P=L.trigger,B=c.IO.getJSONP,k=c.UA.ie,W=c.isElement,R=function(){},U=function(a){a=a||{};var e,c=a.url,h=a.data||{},f=a.onsuccess||R,d=a.onfailure||R;return c&&"string"==typeof c?("html5"===y.mode?(h=E.stringify(h),e=function(a){a=b.parse(a);var c=a&&a.result&&a.result.status;c&&0===c.code?f(a.result.data):d(c?c:{code:-10000001,msg:"未知错误"})}):e=function(a){var c=a&&a.result&&a.result.status;c&&0===c.code?f(a.result.data):d(c?c:{code:-10000001,msg:"未知错误"})},void y.send({url:c,data:h,onsuccess:e,onfailure:R})):void d({code:-10000003,msg:"接口 URL 未指定"})},F=function(a){if(a=a||{},!a.url||"string"!=typeof a.url)return void d({code:-10000003,msg:"接口 URL 未指定"});var c=a.url,h=a.data||{},e=E.stringify(h),f=a.onsuccess||R,d=a.onfailure||R;B(c,e,function(a){var c=a&&a.result&&a.result.status;c&&0===c.code?f(a.result.data):d(c?c:{code:-10000001,msg:"未知错误"})})},H="http://api.sina.com.cn/weibo/",z=function(){return P(h._popupCard.wrapperBox,"mouseleave"),P(h._dropdownCard.wrapperBox,"mouseleave"),A(this,"mouseleave",z),!1};C(h,{_get:F,_post:U,cache:{},apis:{getUser:H+"2/users/show.json",isFollowing:H+"2/friendships/show.json",follow:H+"2/friendships/create.json",appKey:"2835469272"},config:function(a){C(this.apis,a,!0)},setCache:function(a,c){a&&c&&(this.cache[a]=c)},getCache:function(a){var c=this.cache[a]||"";return c},changeCacheFollowing:function(a,c){this.cache[a].following=c},getUser:function(a){a=a||{};var c=a.url,h=this.apis;c||(c=h.getUser),c+=c.indexOf("?")>=0?"&source="+h.appKey:"?source="+h.appKey,a.url=c,F(a)},isFollowing:function(a){a=a||{};var c=a.url,h=this.apis;c||(c=h.isFollowing),c+=c.indexOf("?")>=0?"&source="+h.appKey:"?source="+h.appKey,a.url=c,F(a)},follow:function(a){a=a||{};var c=a.url,h=this.apis;c||(c=h.follow),c+=c.indexOf("?")>=0?"&source="+h.appKey:"?source="+h.appKey,a.url=c,U(a)},_popupCard:null,_setPosition:function(n,i,c){var h,l,g=n.wrapperBox,m=n.elements.arrow,_=m.parentNode,e=0,f=0,d=document.documentElement,y=document.body,v=a.pageYOffset||d&&d.scrollTop||y.scrollTop;i&&(h=parseInt(S(i,"height"))||0,e=w(i),f=T(i),0>e&&(e=0),0>f&&(f=0)),l=parseInt(S(g,"height"))||0,e-=12,0>e&&(e=0),1===c?(e+=12,f=f+h+2,O(m,"weibomod-arrow-top")):v>f-l-5?(f=f+h+8,O(m,"weibomod-arrow-top")):(f=f-l-5,D(m,"weibomod-arrow-top")),0>f&&(f=0),_.removeChild(m),_.appendChild(m),n.move(e,f)},show:function(c,f,l){ttt=this.cache;var g=this;if(W(f)&&(l=f,f=""),!this.ready||!this._popupCard){var y=_.EVENTS.FOLLOW,v=(_.EVENTS.UNFOLLOW,new _({width:260,borderWidth:4})),d=new _({width:220,borderWidth:1});v.addListener(y,function(n){var t,q=n.uid,o=n.channel,s=a.sinaSSOController,u="http://weibo.com/login.php",m="您还没有登录，无法添加关注。是否现在登录？";if(q){var r=a.GB_SUDA&&a.GB_SUDA._S_uaTrack;if(o&&r){var p=q+"_"+o;r("tblog_attention_click_zw",p)}return t=s&&s.getSinaCookie(),t&&t.uid?void h.follow({data:{uid:q},onsuccess:function(){v.changeStatus(!0),g.changeCacheFollowing(q,!0)},onfailure:function(x){var a=x&&x.code||-1,c=x&&x.msg||"";20506==a?(v.changeStatus(!0),g.changeCacheFollowing(q,!0)):alert("关注失败："+c)}}):void(confirm(m)===!0&&a.open(u))}}),d.addListener(y,function(n){var t,q=n.uid,o=n.channel,s=a.sinaSSOController,u="http://weibo.com/login.php",m="您还没有登录，无法添加关注。是否现在登录？";if(q){var r=a.GB_SUDA&&a.GB_SUDA._S_uaTrack;if(o&&r){var p=q+"_"+o;r("tblog_attention_click_zwm",p)}return t=s&&s.getSinaCookie(),t&&t.uid?void h.follow({data:{uid:q},onsuccess:function(){d.changeStatus(!0),g.changeCacheFollowing(q,!0)},onfailure:function(x){var a=x&&x.code||-1,c=x&&x.msg||"";20506==a?(d.changeStatus(!0),g.changeCacheFollowing(q,!0)):alert("关注失败："+c)}}):void(confirm(m)===!0&&a.open(u))}}),v.render(document.body),d.render(document.body),O(d.wrapperBox,"weibomod-dropdown"),h._popupCard=v,h._dropdownCard=d,h.ready=!0}I(l,"mouseleave",z);var w,e=this,v=e._popupCard,d=e._dropdownCard;w=g.getCache(c);var T=function(){var m,n=window.sinaSSOController;if(n)return m=n.getSinaCookie(),m&&m.uid?m:null},E=function(o,r,m){var q=T();if(q||(o.following=!1,m(o)),q){var p={source_id:q.uid,target_id:r};e.isFollowing({data:p,onsuccess:function(n){o.following=n.source.following,m(o,f,"zwm")},onfailure:function(){o.following=!1,m(datam,f,"zwm")}})}};N(l,"weibo-card-dropdown")?(d.setLoading(!0),e._setPosition(d,l,1),P(d.wrapperBox,"mouseenter"),w?(d.setUserData(w,f,"zwm"),d.setLoading(!1),e._setPosition(d,l,1)):e.getUser({data:{uid:c},onsuccess:function(m){E(m,m.id,function(){d.setUserData(m,f,"zwm"),d.setLoading(!1),e._setPosition(d,l,1),g.setCache(c,m)})}})):(v.setLoading(!0),e._setPosition(v,l),P(v.wrapperBox,"mouseenter"),w?(v.setUserData(w,f,"zw"),v.setLoading(!1),e._setPosition(v,l)):e.getUser({data:{uid:c},onsuccess:function(m){E(m,m.id,function(){m.maxChar=47,v.setUserData(m,f,"zw"),v.setLoading(!1),e._setPosition(v,l),g.setCache(c,m)})}}))}}),k&&(h.apis.follow=H+"2/friendships/create.xml")}(window,SINA);