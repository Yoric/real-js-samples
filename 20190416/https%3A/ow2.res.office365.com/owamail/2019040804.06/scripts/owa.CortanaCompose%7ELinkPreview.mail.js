window.scriptsLoaded = window.scriptsLoaded || {}; window.scriptProcessStart = window.scriptProcessStart || {}; window.scriptProcessStart['owa.CortanaCompose~LinkPreview.mail.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[32],{3142:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"c",function(){return m}),n.d(t,"b",function(){return h});var r,i=n(3143),o=n(18),a=n(90),l=n(8),u=n.n(l),d="contenteditable",c=n(5576),s=n(275);function m(e,t){var n,r=window.btoa(t.url);r=(r=(r=r.replace(new RegExp("\\+","g"),"-")).replace(new RegExp("/","g"),":")).replace(new RegExp("=","g"),"."),t.border=document.createElement("div"),t.border.id=i.g+"_"+e+r,t.border.className=i.g+i.w(),t.border.setAttribute(d,"false"),(n=t.border).style.width="100%",n.style.marginTop="16px",n.style.marginBottom="16px",n.style.position="relative",n.style.maxWidth="800px",n.style.minWidth="424px"}function h(e,t){e.closeButtonContainer=document.createElement("div"),e.closeButtonContainer.id=i.v(e.border.className,i.j),e.closeButtonContainer.className=c.closeButtonContainer,e.closeButtonContainer.tabIndex=0,e.closeButtonContainer.title=u.a.removeLinkPreview,e.closeButtonContainer.setAttribute("role","button");var n=document.createElement("span");n.id=i.v(e.border.className,i.k),n.className=s(c.icon,Object(o.getIconClassName)("Cancel")),e.closeButtonContainer.appendChild(n),e.border.appendChild(document.createComment(i.d)),e.border.appendChild(e.closeButtonContainer),e.border.appendChild(document.createComment(i.c));var r=function(n){n instanceof KeyboardEvent&&n.keyCode!=i.e||(n.stopPropagation(),e.anchor&&(e.anchor.id=i.u+i.w()),t(e))};e.closeButtonContainer.addEventListener("click",r),e.closeButtonContainer.addEventListener(Object(a.c)()?"keydown":"keyup",r)}!function(e){e[e.WebpagePreview=0]="WebpagePreview",e[e.VideoPreview=1]="VideoPreview"}(r||(r={}))},3143:function(e,t,n){"use strict";n.d(t,"r",function(){return r}),n.d(t,"u",function(){return i}),n.d(t,"f",function(){return o}),n.d(t,"g",function(){return a}),n.d(t,"i",function(){return l}),n.d(t,"h",function(){return u}),n.d(t,"l",function(){return d}),n.d(t,"o",function(){return c}),n.d(t,"n",function(){return s}),n.d(t,"p",function(){return m}),n.d(t,"s",function(){return h}),n.d(t,"t",function(){return p}),n.d(t,"q",function(){return f}),n.d(t,"m",function(){return g}),n.d(t,"k",function(){return b}),n.d(t,"j",function(){return v}),n.d(t,"a",function(){return y}),n.d(t,"b",function(){return C}),n.d(t,"d",function(){return x}),n.d(t,"c",function(){return I}),n.d(t,"e",function(){return w}),n.d(t,"w",function(){return _}),n.d(t,"v",function(){return P}),n.d(t,"x",function(){return E});var r="LP",i=r+"NoLP",o=r+"lnk",a=r+"Border",l="GT",u="BVT",d=r+"Container",c=r+"ImageContainer",s=r+"ImageAnchor",m=r+"ThumbnailImageId",h=r+"Title",p=r+"UrlAnchor",f=r+"Metadata",g=r+"Description",b=r+"CloseButton",v=r+"CloseButtonContainer",y="BingRTPLinkPreview:#Exchange",C="BingVideoLinkPreview:#Exchange",x="owa-remove-on-send-start",I="owa-remove-on-send-end",w=13;function _(){return Math.floor(1e5+9e5*Math.random()).toString()}function P(e,t){return t+((n=e)&&n.slice(-6));var n}function E(e,t){return e&&e.id&&0==e.id.indexOf(t)}},3432:function(e,t,n){"use strict";n.d(t,"b",function(){return f}),n.d(t,"c",function(){return g}),n.d(t,"d",function(){return b}),n.d(t,"a",function(){return y});var r=n(0),i=n(3142),o=n(3143),a=n(4524),l=n(104),u=n(11),d=160,c=240,s=c/d,m=160,h=106,p=160;function f(e,t,n){var r={type:i.a.WebpagePreview,description:e.Description,title:e.Title,url:e.Url,thumbnailImageUrl:e.ImageUrl,anchor:t};return Object(i.c)(o.i,r),y(r,n),r}function g(e){return r.__awaiter(this,void 0,void 0,function(){var t,n,a,l,u,d,c,s,m;return r.__generator(this,function(r){return e.style.position="relative",t=v(e,o.l),n=v(e,o.o),a=v(e,o.n),l=v(e,o.p),u=v(e,o.s),d=v(e,o.t),c=v(e,o.q),s=v(e,o.m),(m={border:e,type:i.a.WebpagePreview,description:s?s.innerHTML:null,title:d?d.innerText:null,url:d?d.href:null,thumbnailImageUrl:l?l.src:null,table:t,thumbnailImageContainer:n,thumbnailImageAnchor:a,thumbnailImageElement:l,titleContainer:u,titleUrlAnchor:d,metadataContainer:c,descriptionContainer:s}).thumbnailImageContainer&&(m.thumbnailImageContainer.style.position="relative"),[2,Promise.resolve(m)]})})}function b(e,t){e.thumbnailImageElement&&e.thumbnailImageElement.naturalWidth&&C(e.thumbnailImageElement,e.thumbnailImageContainer,t)}function v(e,t){var n=e.querySelectorAll("[id^="+t+"]");return n&&n.length>0?n[0]:null}function y(e,t){!function(e){e.table=document.createElement("table"),e.table.id=o.v(e.border.className,o.l),e.table.setAttribute("role","presentation"),e.border.appendChild(e.table)}(e);var n=document.createElement("tr");if(n.vAlign="top",n.style.borderSpacing="0px",e.table.appendChild(n),function(e,t){e.style.padding="12px",e.style.width="100%",e.style.borderWidth="1px",e.style.borderStyle="solid",e.style.borderColor="#c8c8c8",e.style.borderRadius="2px",t&&(e.style.paddingRight="36px")}(e.table,t),e.thumbnailImageUrl){var r=document.createElement("td");n.appendChild(r),function(e,t,n){t.thumbnailImageContainer=document.createElement("div"),t.thumbnailImageContainer.id=o.v(t.border.className,o.o),r=t.thumbnailImageContainer,r.style.position="relative",r.style.marginRight="12px",r.style.height="160px",r.style.overflow="hidden",t.thumbnailImageAnchor=document.createElement("a"),x(t.thumbnailImageAnchor,n),t.thumbnailImageAnchor.id=o.v(t.border.className,o.n),t.thumbnailImageAnchor.href=t.url,t.thumbnailImageElement=document.createElement("img"),t.thumbnailImageElement.id=o.v(t.border.className,o.p),t.thumbnailImageElement.alt="",function(e,t,n,r){t.complete&&0!==t.naturalWidth?C(t,n,r):(t.style.display="none",t.src=e,C(t,n,a.a.Default),t.onload=function(e){C(e.target,n,r),t.style.display="block"},t.onerror=function(e){u.c.warn("Error loading image for link preview")})}(t.thumbnailImageUrl,t.thumbnailImageElement,t.thumbnailImageContainer,a.a.Standard),t.thumbnailImageAnchor.appendChild(t.thumbnailImageElement),t.thumbnailImageContainer.appendChild(t.thumbnailImageAnchor),e.appendChild(t.thumbnailImageContainer);var r}(r,e,t)}var i=document.createElement("td");i.style.width="100%",e.title&&function(e,t,n){t.titleContainer=document.createElement("div"),t.titleContainer.id=o.v(t.border.className,o.s),i=t.titleContainer,i.style.fontSize="21px",i.style.fontWeight="300",i.style.marginRight="40px",i.style.fontFamily='"wf_segoe-ui_light","Segoe UI Light","Segoe WP Light","Segoe UI","Segoe WP",Tahoma,Arial,sans-serif',i.style.marginBottom="12px",i.style.marginRight="8px",t.titleUrlAnchor=document.createElement("a"),x(t.titleUrlAnchor,n),t.titleUrlAnchor.id=o.v(t.border.className,o.t),t.titleUrlAnchor.href=t.url,t.titleUrlAnchor.text=t.title,r=t.titleUrlAnchor,r.style.textDecoration="none",r.style.color=Object(l.g)().themePrimary,t.titleContainer.appendChild(t.titleUrlAnchor),e.appendChild(t.titleContainer);var r;var i}(i,e,t),e.description&&function(e,t){t.descriptionContainer=document.createElement("div"),t.descriptionContainer.textContent=t.description,t.descriptionContainer.id=o.v(t.border.className,o.m),n=t.descriptionContainer,n.style.fontSize="14px",n.style.maxHeight="100px",n.style.color="#666666",n.style.fontFamily='"wf_segoe-ui_normal","Segoe UI","Segoe WP",Tahoma,Arial,sans-serif',n.style.marginBottom="12px",n.style.marginRight="8px",n.style.overflow="hidden",e.appendChild(t.descriptionContainer);var n}(i,e),function(e,t){t.metadataContainer=document.createElement("div"),t.metadataContainer.textContent=t.titleUrlAnchor.hostname,t.metadataContainer.id=o.v(t.border.className,o.q),n=t.metadataContainer,n.style.fontSize="14px",n.style.fontWeight="400",n.style.color="#a6a6a6",n.style.fontFamily='"wf_segoe-ui_normal","Segoe UI","Segoe WP",Tahoma,Arial,sans-serif',e.appendChild(t.metadataContainer);var n}(i,e),n.appendChild(i)}function C(e,t,n){if(n!==a.a.Default){var r,i,o,l;switch(n){case a.a.Standard:i=c,r=d;break;case a.a.Compact:i=p,r=h}var u=e.naturalWidth>0&&e.naturalHeight>0?e.naturalWidth/e.naturalHeight:s;e.naturalWidth==e.naturalHeight?(l=r,o=r):e.naturalWidth>e.naturalHeight?(l=i,o=i/u,t.style.width=i+"px",t.style.height=o+"px"):(l=r*u,o=r,t.style.width=i+"px",t.style.height=o+"px"),e.width=l,e.height=o}else e.height=m}function x(e,t){t&&(e.onmouseenter=function(){e.removeAttribute("title")}),e.target="_blank"}},3526:function(e,t,n){"use strict";var r=n(0),i=n(3142),o=n(3143),a=n(3432),l=n(3),u=n(88),d=n(17),c=n(11),s=n(728),m=n(4525),h=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onDismissVideoPlayer=function(e){c.c.info("Dismiss Video Player"),e.stopPropagation(),t.props.onClose()},t.onPlayerClicked=function(e){e.stopPropagation()},t.setAndResizeVideoPlayerContent=function(e){if(e){e.innerHTML=t.props.videoPlayerHtml;var n=e.querySelectorAll("iframe");n&&1===n.length&&(n[0].setAttribute("width","800px"),n[0].setAttribute("height","530px"))}},t}return r.__extends(t,e),t.prototype.render=function(){return l.createElement("div",{className:m.videoPlayerBackground,onClick:this.onDismissVideoPlayer},l.createElement("div",{className:m.videoContainer,onClick:this.onPlayerClicked},l.createElement(s.IconButton,{className:m.closeButtonIcon,iconProps:{iconName:"ChromeClose"},onClick:this.onDismissVideoPlayer}),l.createElement("div",{ref:this.setAndResizeVideoPlayerContent})))},t=r.__decorate([d.observer],t)}(l.Component),p=null;var f=n(4526),g=n(18);n.d(t,"b",function(){return C}),n.d(t,"c",function(){return x}),n.d(t,"a",function(){return I}),n.d(t,"d",function(){return w});var b=n(4525),v=n(275),y="rehydrate";function C(e,t,n){var r={type:i.a.VideoPreview,description:e.Description,title:e.Title,url:e.Url,thumbnailImageUrl:e.ImageUrl,anchor:t,videoUrl:e.Url,videoPlayer:e.EmbeddedHtml,motionThumbnail:e.MotionThumbnailUrl};return Object(i.c)(o.h,r),Object(a.a)(r,n),r}function x(e){return r.__awaiter(this,void 0,void 0,function(){var t;return r.__generator(this,function(n){switch(n.label){case 0:return[4,Object(a.c)(e)];case 1:return(t=n.sent()).type=i.a.VideoPreview,t.videoUrl=t.url,t.videoPlayer=null,t.motionThumbnail=null,t.playVideoButtonContainer=null,t.thumbnailImageContainer&&(t.thumbnailImageContainer.style.position="relative"),[2,Object(f.a)(t.videoUrl,y).then(function(e){return e.LinkPreview.__type==o.b&&(t.videoPlayer=e.LinkPreview.EmbeddedHtml),t})]}})})}function I(e){var t=document.createElement("span");t.className=v([b.playButtonIcon,Object(g.getIconClassName)("Play")]),e.playVideoButtonContainer=document.createElement("div"),e.playVideoButtonContainer.className=b.playButtonContainer,e.playVideoButtonContainer.appendChild(t),e.thumbnailImageContainer.onclick=function(t){var n;return t.stopPropagation(),e.videoPlayer&&(n=e.videoPlayer,p||((p=document.createElement("div")).id="BingVideoPlayer",document.body.appendChild(p)),u.render(l.createElement(h,{videoPlayerHtml:n,onClose:function(){u.unmountComponentAtNode(p)}}),p)),!1},e.thumbnailImageContainer.appendChild(document.createComment(o.d)),e.thumbnailImageContainer.appendChild(e.playVideoButtonContainer),e.thumbnailImageContainer.appendChild(document.createComment(o.c))}function w(e,t){Object(a.d)(e,t)}},4524:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return l});var r,i=n(3142),o=n(3526),a=n(3432);function l(e,t){if(e)switch(e.type){case i.a.WebpagePreview:return Object(a.d)(e,t);case i.a.VideoPreview:return Object(o.d)(e,t)}}!function(e){e[e.Standard=0]="Standard",e[e.Compact=1]="Compact",e[e.Default=2]="Default"}(r||(r={}))},4525:function(e,t,n){var r=n(5578),i=n(55);"string"==typeof r&&(r=[[e.i,r]]);for(var o=0;o<r.length;o++)i.loadStyles(r[o][1],!1);r.locals&&(e.exports=r.locals)},4526:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(0),i=n(5579),o=n.n(i);function a(e,t){return r.__awaiter(this,void 0,void 0,function(){var n;return r.__generator(this,function(r){return n=function(e,t){return{Url:e,Id:t}}(e,t),[2,o()({getLinkPreviewRequest:n})]})})}},5576:function(e,t,n){var r=n(5577),i=n(55);"string"==typeof r&&(r=[[e.i,r]]);for(var o=0;o<r.length;o++)i.loadStyles(r[o][1],!1);r.locals&&(e.exports=r.locals)},5577:function(e,t,n){(t=e.exports=n(54)(!1)).push([e.i,'.BQVUVNafetr4ElVq5rXCb{position:absolute;width:32px;height:32px;top:4px;cursor:pointer;pointer-events:all}html[dir] .BQVUVNafetr4ElVq5rXCb{text-align:center}html[dir=ltr] .BQVUVNafetr4ElVq5rXCb{right:4px}html[dir=rtl] .BQVUVNafetr4ElVq5rXCb{left:4px}.BQVUVNafetr4ElVq5rXCb:hover ._3cel-D_a3Rp0q7i7ziIHxn{color:"[theme:neutralPrimary, default:#333333]"}._3cel-D_a3Rp0q7i7ziIHxn{font-size:17px;font-weight:300;color:"[theme:neutralSecondary, default:#666666]";position:relative;display:block;line-height:32px;pointer-events:none}html[dir] ._3cel-D_a3Rp0q7i7ziIHxn{margin:auto}',""]),t.locals={closeButtonContainer:"BQVUVNafetr4ElVq5rXCb",icon:"_3cel-D_a3Rp0q7i7ziIHxn"}},5578:function(e,t,n){(t=e.exports=n(54)(!1)).push([e.i,'._3u53srEFMlhDES9UvUqjZg{position:relative;display:block;color:"[theme:white, default:#ffffff]";line-height:30px;font-size:24px;pointer-events:none}html[dir] ._3u53srEFMlhDES9UvUqjZg{margin:auto;text-align:center}._3u53srEFMlhDES9UvUqjZg:hover{color:"[theme:neutralSecondary, default:#666666]"}._29qzI8iLHanFepjsKxkxK8{position:absolute;top:0;bottom:0;width:30px;height:30px;cursor:pointer}html[dir] ._29qzI8iLHanFepjsKxkxK8{margin:auto;border-radius:50%;border:2px solid "[theme:white, default:#ffffff]"}html[dir=ltr] ._29qzI8iLHanFepjsKxkxK8,html[dir=rtl] ._29qzI8iLHanFepjsKxkxK8{right:0;left:0}._29qzI8iLHanFepjsKxkxK8:hover{color:"[theme:neutralSecondary, default:#666666]"}html[dir] ._29qzI8iLHanFepjsKxkxK8:hover{background-color:"[theme:blackTranslucent40, default:rgba(0, 0, 0, .4)]"}._1L5JudB5edDy8uj11ztnP{position:absolute;top:0;width:100%;height:100%}html[dir] ._1L5JudB5edDy8uj11ztnP{background-color:"[theme:blackTranslucent40, default:rgba(0, 0, 0, .4)]"}html[dir=ltr] ._1L5JudB5edDy8uj11ztnP{left:0}html[dir=rtl] ._1L5JudB5edDy8uj11ztnP{right:0}._2cNePsnTXiXcjmRIatab88{position:absolute;top:0;bottom:0;width:800px;height:530px}html[dir] ._2cNePsnTXiXcjmRIatab88{margin:auto;background-color:"[theme:black, default:#000000]"}html[dir=ltr] ._2cNePsnTXiXcjmRIatab88,html[dir=rtl] ._2cNePsnTXiXcjmRIatab88{right:0;left:0}._2wlXWUpFcJxip6DjS1A5Gr{position:absolute;top:10px;color:"[theme:neutralQuaternary, default:#d0d0d0]"}html[dir=ltr] ._2wlXWUpFcJxip6DjS1A5Gr{right:10px}html[dir=rtl] ._2wlXWUpFcJxip6DjS1A5Gr{left:10px}._2wlXWUpFcJxip6DjS1A5Gr:hover{color:"[theme:neutralTertiary, default:#a6a6a6]"}',""]),t.locals={playButtonIcon:"_3u53srEFMlhDES9UvUqjZg",playButtonContainer:"_29qzI8iLHanFepjsKxkxK8",videoPlayerBackground:"_1L5JudB5edDy8uj11ztnP",videoContainer:"_2cNePsnTXiXcjmRIatab88",closeButtonIcon:"_2wlXWUpFcJxip6DjS1A5Gr"}},5579:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(51),i=n(5580);t.default=function(e,t){return void 0===e.getLinkPreviewRequest||e.getLinkPreviewRequest.__type||(e.getLinkPreviewRequest=i.default(e.getLinkPreviewRequest)),r.makeServiceRequest("GetLinkPreview",e,t)}},5580:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){return r.__assign({__type:"GetLinkPreviewRequest:#Exchange"},e)}}}]);
//# sourceMappingURL=owa.CortanaCompose~LinkPreview.mail.js.map
window.scriptsLoaded['owa.CortanaCompose~LinkPreview.mail.js'] = 1; window.scriptProcessEnd = window.scriptProcessEnd || {}; window.scriptProcessEnd['owa.CortanaCompose~LinkPreview.mail.js'] = (new Date()).getTime();