(window.webpackJsonp=window.webpackJsonp||[]).push([["CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueu~1084d5fc"],{"./src/reddit/components/Media/RichTextContainer/index.m.less":function(e,t,i){e.exports={richTextContainer:"Chtkt3BCZQruf0LtmFg2c",richTextContainerFull:"_3xX726aBn29LDbsDtzr_6E",placeholder:"_1aLU7RPNLdvfcbaNdcN11x",placeholderParagraph:"Owi9iYzjyVpDq_0YbCdJY"}},"./src/reddit/components/Media/index.m.less":function(e,t,i){e.exports={hiddenLink:"_3dhFVFchWAAFXfLFTa94n9",displayNone:"_1Q2mF3u7v9hBVu_4bkC7R4"}},"./src/reddit/components/Media/index.tsx":function(e,t,i){"use strict";var s,o=i("./node_modules/lodash/debounce.js"),n=i.n(o),a=i("./node_modules/react/index.js"),d=i.n(a),r=i("./bundled-modules/styled-components/styled-components.min.js"),l=i.n(r),c=i("./src/lib/isUrl/index.ts"),h=i("./node_modules/brcast/dist/brcast.es.js"),u=i("./node_modules/lodash/findKey.js"),p=i.n(u);!function(e){e.Hidden="hidden",e.Visible="visible"}(s||(s={}));const m={hidden:"visibilitychange",webkitHidden:"webkitvisibilitychange",mozHidden:"mozvisibilitychange",msHidden:"msvisibilitychange"};let f=!1;const b=Object(h.a)({documentInFocus:!0});!function(){if(!f){const e=p()(m,(e,t)=>void 0!==document[t]);e&&document.addEventListener(m[e],()=>{b.setState({documentInFocus:document.visibilityState!==s.Hidden})}),f=!0}}();var v,g={subscribe:e=>{return b.subscribe(e)},unsubscribe:e=>{b.unsubscribe(e)}},w=i("./src/lib/permalinkToOverlayLocation/index.ts"),x=i("./src/lib/raven/index.ts"),y=i("./src/reddit/components/HTML5StreamPlayer/index.tsx"),E=i("./src/reddit/components/Media/EmbedBox/index.tsx"),C=i("./src/reddit/components/Media/ImageBox/index.tsx"),S=i("./src/reddit/components/Media/MediaContainer/index.tsx"),M=i("./src/lib/classNames/index.ts"),I=i("./src/reddit/constants/componentSizes.ts"),O=i("./src/reddit/models/Media/index.ts"),L=i("./node_modules/react-redux/es/index.js"),P=i("./src/reddit/actions/post.ts"),T=i("./src/reddit/helpers/styles/mixins/loading.ts"),j=i("./src/reddit/components/Media/RichTextContainer/index.m.less"),F=i.n(j),W=(v="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,i,s){var o=e&&e.defaultProps,n=arguments.length-3;if(t||0===n||(t={}),t&&o)for(var a in o)void 0===t[a]&&(t[a]=o[a]);else t||(t=o||{});if(1===n)t.children=s;else if(n>1){for(var d=Array(n),r=0;r<n;r++)d[r]=arguments[r+3];t.children=d}return{$$typeof:v,type:e,key:void 0===i?null:""+i,ref:null,props:t,_owner:null}});const D=l.a.div.withConfig({componentId:"s123n0am-0"})(["",""],T.b);var R=Object(L.connect)(null,e=>({onLoadRichTextContentIfNeeded:t=>e(Object(P.p)(t))}))(class extends d.a.Component{componentDidMount(){this.loadRichTextContentIfNeeded()}loadRichTextContentIfNeeded(){this.props.canLoadContent&&this.props.isExpando&&this.props.onLoadRichTextContentIfNeeded(this.props.postId)}render(){return W("div",{className:F.a.placeholder},void 0,[1,2,3].map(e=>W("div",{className:F.a.placeholderParagraph},e,W(D,{isLoading:!0,gradientType:"posts"}),W(D,{isLoading:!0,gradientType:"posts"}),W(D,{isLoading:!0,gradientType:"posts"}))))}}),V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])}return e},N=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,i,s,o){var n=t&&t.defaultProps,a=arguments.length-3;if(i||0===a||(i={}),i&&n)for(var d in n)void 0===i[d]&&(i[d]=n[d]);else i||(i=n||{});if(1===a)i.children=o;else if(a>1){for(var r=Array(a),l=0;l<a;l++)r[l]=arguments[l+3];i.children=r}return{$$typeof:e,type:t,key:void 0===s?null:""+s,ref:null,props:i,_owner:null}}}(),B=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&(i[s[o]]=e[s[o]])}return i};var H=e=>{var t=e.canLoadContent,i=e.children,s=e.className,o=e.isCommentsPage,n=e.isRichTextTruncated,a=e.isExpando,r=e.postId,l=e.showFull,c=B(e,["canLoadContent","children","className","isCommentsPage","isRichTextTruncated","isExpando","postId","showFull"]);const h=l?F.a.richTextContainerFull:F.a.richTextContainer,u={};l||(u.maxHeight=`${O.j}px`),o&&(u.maxWidth=`${I.g}px`);const p=n&&l;return d.a.createElement("div",V({className:Object(M.a)(h,s),style:u},c),i,p&&N(R,{canLoadContent:!!t,isExpando:a,postId:r}))},k=i("./src/reddit/components/Media/VideoBox/index.tsx"),A=i("./src/reddit/components/PlayButton/index.tsx"),_=i("./src/reddit/components/RawHTMLDisplay/index.tsx"),U=i("./src/reddit/components/RichTextJson/index.tsx"),G=i("./src/reddit/constants/screenWidths.ts"),$=i("./src/reddit/helpers/canPreviewSelfText/index.ts"),z=i("./src/reddit/helpers/getRichTextContent.ts"),J=i("./src/reddit/helpers/postHasSelfText/index.ts"),q=i("./src/lib/redditId/index.ts");function X(e,t){const i=function e(t,i){let s=!1;let o=[];try{for(const n of t)if("link"===n.e&&n.u&&n.u.includes(`https://www.reddit.com/poll/${i}`))s=!0;else if(n.c&&"string"!=typeof n.c){const t=e(n.c,i);t.found?(s=!0,("par"!==n.e||t.updated.length)&&o.push(Object.assign({},n,{c:t.updated}))):o.push(n)}else o.push(n)}catch(n){s=!1,o=[]}return{found:s,updated:s?o:t}}(e.document,Object(q.c)(t));return i.found?{document:i.updated}:e}const Y=(e,t,i,s)=>{const o=e/t,n=i/s;return Math.abs(o-n)<.03},Q=(e,t)=>{for(let i=0;i<t.length;i++){const s=t[i];if(s.width>=e)return s}},K=(e,t,i)=>{for(let s=0;s<i.length;s++){const o=i[s];if(o.width>=O.e/2&&Y(e,t,o.height,o.width))return o}},Z=e=>{for(let t=0;t<e.length;t++){const i=e[t];if(i.height>=O.e||i.width>=O.f)return i}};var ee=i("./src/reddit/components/Media/index.m.less"),te=i.n(ee),ie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])}return e},se=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var i=[],s=!0,o=!1,n=void 0;try{for(var a,d=e[Symbol.iterator]();!(s=(a=d.next()).done)&&(i.push(a.value),!t||i.length!==t);s=!0);}catch(r){o=!0,n=r}finally{try{!s&&d.return&&d.return()}finally{if(o)throw n}}return i}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),oe=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,i,s,o){var n=t&&t.defaultProps,a=arguments.length-3;if(i||0===a||(i={}),i&&n)for(var d in n)void 0===i[d]&&(i[d]=n[d]);else i||(i=n||{});if(1===a)i.children=o;else if(a>1){for(var r=Array(a),l=0;l<a;l++)r[l]=arguments[l+3];i.children=r}return{$$typeof:e,type:t,key:void 0===s?null:""+s,ref:null,props:i,_owner:null}}}();const ne=1200,ae="https://www.redditmedia.com",de=75,re="player.js",le=I.F+I.E,ce=e=>e.isVisible?e.children:oe("div",{className:te.a.displayNone},void 0,e.children),he=new Set([O.m.EMBED,O.m.GIFVIDEO,O.m.VIDEO]),ue=e=>!!e.media&&he.has(e.media.type),pe=new Set([O.m.EMBED,O.m.GIFVIDEO,O.m.IMAGE,O.m.VIDEO]),me=e=>!!e.media&&pe.has(e.media.type);t.a=Object(r.withTheme)(class extends d.a.Component{constructor(e){super(e),this.pauseContent=(()=>{this.shouldFocusContentDebouncer(!1)}),this.stopContent=(()=>{const e=this.props.post.media;if(e&&O.d.has(e.type)){if(this.iframe){const t=e.type===O.m.EMBED?e.provider:null;this.pauseEmbed(this.iframe,t)}this.setState(e=>e.shouldStop?null:{shouldStop:!0})}}),this.handleVisibilityChange=(e=>{const t=this.state.shouldPause,i=this.props.autoplayPref;this.iframe&&(t||!i&&e.documentInFocus||this.toggleEmbedAutoplay(this.iframe,!e.documentInFocus)),this.setState({forcePause:!e.documentInFocus})}),this.focusContent=(()=>{this.shouldFocusContentDebouncer(!0)}),this.loadContent=(()=>{this.setState(e=>e.canLoadContent?null:{canLoadContent:!0})}),this.unmountContent=(()=>{}),this.contentIsHeavyToMount=(()=>{const e=this.props.post.media;return!!e&&O.d.has(e.type)}),this.shouldFocusContentDebouncer=n()(e=>{const t=this.props.post.media,i=this.props.autoplayPref;if(t&&O.d.has(t.type)){if(this.iframe){const s=t.type===O.m.EMBED?t.provider:null;s&&!O.p.has(s)?!i&&e||this.toggleEmbedAutoplay(this.iframe,!e):e||this.pauseEmbed(this.iframe,s)}e?this.setState(e=>e.shouldPause||!e.canLoadContent?{canLoadContent:!0,shouldPause:!1,shouldStop:!1}:null):this.setState(e=>e.shouldPause?null:{shouldPause:!0})}},250,{leading:!0}),this.toggleEmbedAutoplay=((e,t)=>{if(e.contentWindow){const i=t?O.g.Pause:O.g.Play;e.contentWindow.postMessage({context:re,method:i},ae),e.contentWindow.postMessage({context:re,method:O.g.Mute},ae)}}),this.pauseEmbed=((e,t)=>{e.contentWindow&&(t===O.q.YouTube?e.contentWindow.postMessage(JSON.stringify({event:"command",func:O.u.Pause}),ae):e.contentWindow.postMessage({context:re,method:O.g.Pause},ae))}),this.onIframeLoaded=(()=>{const e=this.props.post.media,t=this.props.autoplayPref,i=e&&e.type===O.m.EMBED?e.provider:null;if(this.iframe&&i&&!O.p.has(i)){const e=this.state.shouldPause;(t||e)&&this.toggleEmbedAutoplay(this.iframe,e)}}),this.storeChildRef=(e=>{this.iframe=e}),this.updateDimensions=(()=>{this.setState({viewportHeight:window.innerHeight,viewportWidth:window.innerWidth})}),this.state={canLoadContent:e.shouldLoad||!1,forcePause:!1,shouldPause:void 0===e.shouldPause||e.shouldPause,shouldStop:void 0===e.shouldStop||e.shouldStop,viewportHeight:O.e,viewportWidth:O.f}}componentWillMount(){"undefined"!=typeof window&&(this.updateDimensions(),window.addEventListener("resize",this.updateDimensions))}componentDidMount(){ue(this.props.post)&&(this.visibilityChangeSubscriptionId=g.subscribe(e=>{this.handleVisibilityChange(e)})),this.props.scrollerItemRef&&me(this.props.post)&&this.props.scrollerItemRef(this,this.state.canLoadContent)}componentWillUnmount(){this.visibilityChangeSubscriptionId&&g.unsubscribe(this.visibilityChangeSubscriptionId),this.props.scrollerItemRef&&me(this.props.post)&&this.props.scrollerItemRef(void 0),window.removeEventListener("resize",this.updateDimensions)}componentWillReceiveProps(e){!this.state.canLoadContent&&e.shouldLoad&&this.setState({canLoadContent:!0}),void 0!==e.shouldPause&&e.shouldPause!==this.props.shouldPause&&this.shouldFocusContentDebouncer(!e.shouldPause)}getVideoExpandoMaxDimensions(){let e,t=Math.max(O.i,this.state.viewportHeight),i=Math.min(ne,16*t/9);i===ne&&(t=9*ne/16),e=this.state.viewportWidth>=G.g?this.state.viewportWidth<I.w?this.state.viewportWidth-le-2*de:this.state.viewportWidth-le-I.i-2*de:this.state.viewportWidth-2*de;const s=this.state.viewportHeight-2*de;if(i>e)t*=e/i,i=e;else if(t>s){const e=s/t;t=s,i*=e}return{maxVideoHeight:t,maxVideoWidth:i}}getMediaInfo(e){const t=e.availableWidth,i=e.post,s=i.media&&i.media.obfuscated||"";let o=i.media&&!Object(O.B)(i.media)?i.media.content:"";var n=!i.media||Object(O.z)(i.media)||Object(O.A)(i.media)?[0,0]:[i.media.height,i.media.width],a=se(n,2);let d=a[0],r=a[1];if(t&&i.media&&(i.media.type===O.m.IMAGE||i.media.type===O.m.GIFVIDEO)){const e=Q(t,i.media.resolutions);e&&(o=e.url,r=e.width,d=e.height)}else if(i&&i.media&&(!e.isListing||e.isExpando)&&(i.media.type===O.m.IMAGE||i.media.type===O.m.GIFVIDEO)){let e;(e=Object(C.b)(i.media.height,i.media.width)&&Object(C.c)(i.media.height)?K(i.media.height,i.media.width,i.media.resolutions):Z(i.media.resolutions))&&(o=e.url,r=e.width,d=e.height)}if(e.isExpando)if(r>this.state.viewportWidth)d*=this.state.viewportWidth/r,r=this.state.viewportWidth;else if(d>this.state.viewportHeight){const e=this.state.viewportHeight/d;d=this.state.viewportHeight,r*=e}var l=this.getVideoExpandoMaxDimensions();const c=l.maxVideoHeight,h=l.maxVideoWidth;if(i.media&&i.media.type===O.m.VIDEO){const t=d/r;t>O.c?(d=O.k,r=Math.min(Math.max(O.k/t,O.o),O.l)):(d=Math.min(Math.max(O.l*t,O.n),O.k),r=O.l),e.isExpando&&(d=c,r=h)}i.media&&i.media.type===O.m.EMBED&&e.isExpando&&(d=c,r=h);let u=!1;if(e.isMiniCard){const e=d/r;u=Math.abs(e-O.c)>.01}return{source:o,obfuscated:s,width:r,height:d,needsBackgroundBlur:u}}render(){var e=this.props;const t=e.className,i=e.crosspost,s=e.flairStyleTemplate,o=e.forceAspectRatio,n=e.isCommentsPage,a=e.isExpando,r=e.isListing,l=e.isNotCardView,h=e.post,u=e.showCentered;var p=e.showFull;const m=void 0!==p&&p,f=e.theme;var b=this.state;const v=b.canLoadContent,g=b.forcePause,M=b.shouldPause,I=b.shouldStop;if(!h.media)return null;const L=g||M,P=I;var T=this.getMediaInfo(this.props);const j=T.source,F=T.obfuscated,W=T.height,D=T.width,R=T.needsBackgroundBlur,V={showCentered:u,isListing:r,showFull:m,height:W,width:D},N=Object.assign({},V,{forceAspectRatio:o,className:t}),B=r&&!a&&(!f.subredditContext.shouldShowNSFWContent&&(h.isNSFW||!(!i||!i.isNSFW))||h.isSpoiler||!(!i||!i.isSpoiler)),G=!(!h.isSponsored||!h.source);if(F&&B)return d.a.createElement(S.a,ie({},N,{blurSrc:F}),oe(ce,{isVisible:v},void 0,d.a.createElement(C.a,ie({},V,{isListing:r,isVideoThumbnail:h.media.type===O.m.VIDEO,postId:h.id,shouldBlur:B,source:F,outboundUrl:G&&h.source.outboundUrl||void 0,originalSource:j}))));switch(h.media.type){case O.m.RTJSON:const e=Object(z.a)(h,null);if(null===e)return;return m||Object($.a)(h)?oe(H,{canLoadContent:v,className:t,"data-click-id":"text",isCommentsPage:n,isExpando:a,isRichTextTruncated:h.media.isRichtextPreview,postId:h.id,showFull:m},void 0,oe(U.b,{flairStyleTemplate:s,content:h.isMeta?X(e,h.id):e,mediaMetadata:h.media.mediaMetadata,renderingObjectInfo:h,renderMediaAsLinks:r})):null;case O.m.TEXT:return Object(J.a)(h)?(Object(x.c)("Text post should not include body content",{extra:{info:{post:h,isListing:r,isCommentsPage:n}}}),oe(H,{postId:h.id,className:t,"data-click-id":"text",isCommentsPage:n,showFull:m},void 0,oe(_.a,{flairStyleTemplate:s,html:h.isMeta?function(e,t,i){return e.replace(`href="https://www.reddit.com/poll/${Object(q.c)(t)}`,`class="${i}" href="https://www.reddit.com/poll/${Object(q.c)(t)}`)}(h.media.content,h.id,te.a.hiddenLink):h.media.content}))):null;case O.m.EMBED:return this.props.isMiniCard&&h.preview&&h.preview.url?d.a.createElement(S.a,ie({},N,{alwaysWrapMedia:!0}),oe(ce,{isVisible:v},void 0,oe(d.a.Fragment,{},void 0,d.a.createElement(C.a,ie({},V,{isExpando:a,isListing:r,isCrosspost:!!i,postId:h.id,shouldBlur:B,source:h.preview.url,originalSource:h.preview.url})),oe(A.b,{})))):O.h.has(h.media.provider)?d.a.createElement(S.a,ie({},N,{alwaysWrapMedia:!0,height:a?W:O.i,width:a?D:O.i*(16/9)}),v&&oe(E.a,{childRef:this.storeChildRef,height:a?W:O.i,width:a?D:void 0,isListing:r,isResponsive:!0,onLoad:this.onIframeLoaded,showCentered:u,showFull:m,source:j,title:h.title})):d.a.createElement(S.a,ie({},N,{alwaysWrapMedia:!0}),v&&d.a.createElement(E.a,ie({},V,{isResponsive:a||h.media.provider===O.q.IFrameEmbed,title:h.title,childRef:this.storeChildRef,onLoad:this.onIframeLoaded,source:j,fullWidth:h.media.provider===O.q.IFrameEmbed})));case O.m.GIFVIDEO:{let e=W,t=D;return e>O.i&&(t=D/W*(e=O.i)),d.a.createElement(S.a,ie({},N,{blurSrc:R?h.media.gifBackgroundImage:void 0}),oe(ce,{isVisible:v},void 0,d.a.createElement(k.a,ie({},V,{isNotCardView:l,height:a?void 0:e,width:a?void 0:t,postId:h.id,shouldLoad:!0,shouldPause:L,source:j,originalSource:h.media.content}))))}case O.m.VIDEO:{const e=h.media.posterUrl||h.preview&&h.preview.url;return this.props.isMiniCard&&e?d.a.createElement(S.a,ie({},N,{alwaysWrapMedia:!0}),oe(ce,{isVisible:v},void 0,oe(d.a.Fragment,{},void 0,d.a.createElement(C.a,ie({},V,{isExpando:a,isListing:r,isCrosspost:!!i,postId:h.id,shouldBlur:B,source:e,originalSource:e})),oe(A.b,{})))):d.a.createElement(S.a,ie({},N,{alwaysWrapMedia:!0}),v&&oe(y.b,{autoPlay:"boolean"==typeof M?!M:void 0,isExpando:a,postUrl:Object(w.a)(h.permalink),shouldLoad:!0,shouldPause:L,shouldStop:P,hlsSource:h.media.hlsUrl,mpegDashSource:h.media.dashUrl,isGif:h.media.isGif,scrubberThumbSource:h.media.scrubberThumbSource,postId:h.id,callToActionSource:h.source||void 0,callToActionText:h.callToAction,isListing:r,posterUrl:h.media.posterUrl}))}case O.m.IMAGE:const o=this.state.viewportHeight-2*de,p=this.state.viewportWidth-2*de;let f=j;return this.props.isMiniCard&&(h.thumbnail&&Object(c.a)(h.thumbnail.url)?f=h.thumbnail.url:h.preview&&Object(c.a)(h.preview.url)&&(f=h.preview.url)),d.a.createElement(S.a,ie({},N,{blurSrc:R?f:void 0,isExpando:!!a}),oe(ce,{isVisible:v},void 0,d.a.createElement(C.a,ie({},V,{isExpando:a,isListing:r,isCrosspost:!!i,maxHeight:a?o:void 0,maxWidth:a?p:void 0,postId:h.id,shouldBlur:B,source:f,outboundUrl:G&&h.source.outboundUrl||void 0,originalSource:h.media.content}))));default:return null}}})},"./src/reddit/helpers/canPreviewSelfText/index.ts":function(e,t,i){"use strict";var s=i("./src/reddit/helpers/postHasSelfText/index.ts");t.a=(e=>Object(s.a)(e)&&!e.isSpoiler&&!e.isNSFW)},"./src/reddit/helpers/postHasSelfText/index.ts":function(e,t,i){"use strict";var s=i("./src/reddit/models/Media/index.ts"),o=i("./src/reddit/models/RichTextJson/index.ts");t.a=(e=>{const t=e&&e.media;return!!t&&(t.type===s.m.TEXT&&!!t.content||t.type===s.m.RTJSON&&!Object(o.E)(t.richtextContent))})}}]);
//# sourceMappingURL=CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueu~1084d5fc.fc0dd8e4bc35d0c1945c.js.map