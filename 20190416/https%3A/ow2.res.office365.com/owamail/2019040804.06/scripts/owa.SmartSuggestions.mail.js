window.scriptsLoaded = window.scriptsLoaded || {}; window.scriptProcessStart = window.scriptProcessStart || {}; window.scriptProcessStart['owa.SmartSuggestions.mail.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[232],{1854:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var o=n(725).ActionButton},2151:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return a});var o=n(2),i=new o.c(function(){return Promise.all([n.e(0),n.e(107)]).then(n.bind(null,2694))}),r=new o.a(i,function(e){return e.mountAndShowFlexPane}),a=new o.a(i,function(e){return e.hideFlexPane})},2778:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var o=n(3436),i=n(9),r=[{id:"ja7lKjj2NnQ.cwA.Krg.hfkh3ftaMUOb57AnI3gEJw-TZrkxQd1glDepIPKj6yo",tokenType:o.a.ConnectorsLTI},{id:"hXP0lB4sF4E.ihaAU12Q9puBSDe5dMnr8RITJalvWkCqiQadGVOHmIc",tokenType:o.a.AAD}],a=Object(i.computed)(function(){var e=new i.ObservableMap;return r.forEach(function(t){e.set(t.id,t)}),e})},2921:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"c",function(){return r}),n.d(t,"b",function(){return a});var o=n(1),i=Object(o.action)("addPill",function(e){return{pillData:e}}),r=Object(o.action)("removePill",function(e){return{pillId:e}}),a=Object(o.action)("clearPills")},2991:function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"a",function(){return i});var o="owa-remove-on-send-start",i="owa-remove-on-send-end"},3436:function(e,t,n){"use strict";var o;!function(e){e.NoAuth="NoAuth",e.ConnectorsLTI="ConnectorsLTI",e.AAD="AAD"}(o||(o={})),t.a=o},3720:function(e,t,n){"use strict";var o=n(1);var i={viewState:{barVisible:!1},allAddedPills:[]},r=Object(o.createStore)("composeSmartPill",i);t.a=r},3725:function(e,t,n){"use strict";var o=n(2),i=n(1),r=n(2921),a=n(3720);Object(i.mutator)(r.a,function(e){var t=Object(a.a)(),n=e.pillData,o=!1;t.allAddedPills.forEach(function(e){o=o||e.id===n.id}),o||(t.allAddedPills.push(n),t.viewState.barVisible||(t.viewState.barVisible=!0))}),Object(i.mutator)(r.c,function(e){var t=Object(a.a)();t.allAddedPills=t.allAddedPills.filter(function(t){return t.id!=e.pillId})}),Object(i.mutator)(r.b,function(e){for(var t=Object(a.a)();t.allAddedPills.length>0;)t.allAddedPills.pop()});n.d(t,"a",function(){return c}),n.d(t,"b",function(){return l}),n.d(t,"c",function(){return u});var s=new o.c(function(){return n.e(163).then(n.bind(null,7126))}),c=Object(o.d)(s,function(e){return e.MailComposeSmartPillBlock}),l=new o.a(s,function(e){return e.addPill}),u=new o.a(s,function(e){return e.removePill})},4163:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a});var o=n(2),i=(n(2778),new o.c(function(){return Promise.all([n.e(0),n.e(1),n.e(25),n.e(302),n.e(195)]).then(n.bind(null,4758))})),r=new o.b(i,function(e){return e.openBotConversation}),a=new o.b(i,function(e){return e.openCortanaConversation});new o.a(i,function(e){return e.setEditorInterface})},5654:function(e,t,n){var o=n(5655),i=n(55);"string"==typeof o&&(o=[[e.i,o]]);for(var r=0;r<o.length;r++)i.loadStyles(o[r][1],!1);o.locals&&(e.exports=o.locals)},5655:function(e,t,n){(t=e.exports=n(54)(!1)).push([e.i,'._2KSY6C_hriAKN1s-deJh9J{width:calc(100% - 25px);position:absolute}html[dir=ltr] ._2KSY6C_hriAKN1s-deJh9J{margin-left:-20px;margin-right:-35px}html[dir=rtl] ._2KSY6C_hriAKN1s-deJh9J{margin-right:-20px;margin-left:-35px}._16_i9Na5vKiXUhp71Vbmrj{height:calc(100% - 50px)}._3oSfgNQ5bah0beQgR560Uw{height:calc(100% - 10px)}.VIlkITIDik86oL4dvCIv_{width:100%;height:100%}html[dir] .VIlkITIDik86oL4dvCIv_{border-width:0}._1tjT2lByDRNMdxaClT1XO8{font-size:21px;font-weight:100;font-weight:300;color:"[theme:neutralPrimary, default:#333333]"}._2weCburfx2M0HmtHaDzdYb{width:calc(100% - 27px);height:40px;font-size:12px;color:"[theme:themePrimary, default:#0078D4]";font-weight:400;vertical-align:bottom}html[dir] ._2weCburfx2M0HmtHaDzdYb{padding-top:10px;padding-bottom:3px;border-top:1px solid "[theme:neutralTertiaryAlt, default:#c8c8c8]"}html[dir=ltr] ._2weCburfx2M0HmtHaDzdYb{margin-left:8px}html[dir=rtl] ._2weCburfx2M0HmtHaDzdYb{margin-right:8px}',""]),t.locals={container:"_2KSY6C_hriAKN1s-deJh9J",containerLocationHeight:"_16_i9Na5vKiXUhp71Vbmrj",containerNoLocationHeight:"_3oSfgNQ5bah0beQgR560Uw",pickerIframeStyle:"VIlkITIDik86oL4dvCIv_",header:"_1tjT2lByDRNMdxaClT1XO8",locationButton:"_2weCburfx2M0HmtHaDzdYb"}},5656:function(e,t,n){var o=n(5657),i=n(55);"string"==typeof o&&(o=[[e.i,o]]);for(var r=0;r<o.length;r++)i.loadStyles(o[r][1],!1);o.locals&&(e.exports=o.locals)},5657:function(e,t,n){(t=e.exports=n(54)(!1)).push([e.i,'@-webkit-keyframes QyQ2m7xJndgVbSznDC_cM{0%{background-color:none;color:none;display:inline;-webkit-animation-timing-function:cubic-bezier(.33,0,.67,1);animation-timing-function:cubic-bezier(.33,0,.67,1)}to{background-color:"[theme:themeLighter, default:#DEECF9]";color:"[theme:themeDark, default:#0D62AA]";display:inline-block}}@-webkit-keyframes _3BovmbeaPZ9PfDCok9Szcj{0%{background-color:none;color:none;display:inline;-webkit-animation-timing-function:cubic-bezier(.33,0,.67,1);animation-timing-function:cubic-bezier(.33,0,.67,1)}to{background-color:"[theme:themeLighter, default:#DEECF9]";color:"[theme:themeDark, default:#0D62AA]";display:inline-block}}@keyframes QyQ2m7xJndgVbSznDC_cM{0%{background-color:none;color:none;display:inline;-webkit-animation-timing-function:cubic-bezier(.33,0,.67,1);animation-timing-function:cubic-bezier(.33,0,.67,1)}to{background-color:"[theme:themeLighter, default:#DEECF9]";color:"[theme:themeDark, default:#0D62AA]";display:inline-block}}@keyframes _3BovmbeaPZ9PfDCok9Szcj{0%{background-color:none;color:none;display:inline;-webkit-animation-timing-function:cubic-bezier(.33,0,.67,1);animation-timing-function:cubic-bezier(.33,0,.67,1)}to{background-color:"[theme:themeLighter, default:#DEECF9]";color:"[theme:themeDark, default:#0D62AA]";display:inline-block}}@-webkit-keyframes _2_JfhnyCSv4aXF2r-mrqx0{0%{background-color:"[theme:themeLighter, default:#DEECF9]";color:"[theme:themeDark, default:#0D62AA]";display:inline-block;-webkit-animation-timing-function:cubic-bezier(.33,0,.67,1);animation-timing-function:cubic-bezier(.33,0,.67,1)}to{background-color:none;color:none;display:inline}}@-webkit-keyframes _1okoJpT9HZqFCFE-Qxz_m9{0%{background-color:"[theme:themeLighter, default:#DEECF9]";color:"[theme:themeDark, default:#0D62AA]";display:inline-block;-webkit-animation-timing-function:cubic-bezier(.33,0,.67,1);animation-timing-function:cubic-bezier(.33,0,.67,1)}to{background-color:none;color:none;display:inline}}@keyframes _2_JfhnyCSv4aXF2r-mrqx0{0%{background-color:"[theme:themeLighter, default:#DEECF9]";color:"[theme:themeDark, default:#0D62AA]";display:inline-block;-webkit-animation-timing-function:cubic-bezier(.33,0,.67,1);animation-timing-function:cubic-bezier(.33,0,.67,1)}to{background-color:none;color:none;display:inline}}@keyframes _1okoJpT9HZqFCFE-Qxz_m9{0%{background-color:"[theme:themeLighter, default:#DEECF9]";color:"[theme:themeDark, default:#0D62AA]";display:inline-block;-webkit-animation-timing-function:cubic-bezier(.33,0,.67,1);animation-timing-function:cubic-bezier(.33,0,.67,1)}to{background-color:none;color:none;display:inline}}._3BovmbeaPZ9PfDCok9Szcj{-webkit-animation-duration:.1s;animation-duration:.1s;-webkit-animation-fill-mode:both;animation-fill-mode:both;cursor:pointer;text-decoration:inherit}html[dir] ._3BovmbeaPZ9PfDCok9Szcj{border-radius:2px;padding:0 1px}html[dir=ltr] ._3BovmbeaPZ9PfDCok9Szcj{-webkit-animation-name:_3BovmbeaPZ9PfDCok9Szcj;animation-name:_3BovmbeaPZ9PfDCok9Szcj}html[dir=rtl] ._3BovmbeaPZ9PfDCok9Szcj{-webkit-animation-name:QyQ2m7xJndgVbSznDC_cM;animation-name:QyQ2m7xJndgVbSznDC_cM}._1okoJpT9HZqFCFE-Qxz_m9{-webkit-animation-duration:.1s;animation-duration:.1s;-webkit-animation-fill-mode:both;animation-fill-mode:both;cursor:pointer;text-decoration:inherit}html[dir] ._1okoJpT9HZqFCFE-Qxz_m9{border-radius:2px;padding:0 1px}html[dir=ltr] ._1okoJpT9HZqFCFE-Qxz_m9{-webkit-animation-name:_1okoJpT9HZqFCFE-Qxz_m9;animation-name:_1okoJpT9HZqFCFE-Qxz_m9}html[dir=rtl] ._1okoJpT9HZqFCFE-Qxz_m9{-webkit-animation-name:_2_JfhnyCSv4aXF2r-mrqx0;animation-name:_2_JfhnyCSv4aXF2r-mrqx0}',""]),t.locals={keywordFadeIn:"_3BovmbeaPZ9PfDCok9Szcj","keywordFadeIn-rtl":"QyQ2m7xJndgVbSznDC_cM",keywordFadeOut:"_1okoJpT9HZqFCFE-Qxz_m9","keywordFadeOut-rtl":"_2_JfhnyCSv4aXF2r-mrqx0"}},6991:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n(217),r=n(4),a=Object(r.action)("enableBrowserLocationOption")(function(){var e=Object(i.c)(i.a.SmartSuggestions);e&&(e.browserLocationEnabled=!0,i.d.importAndExecute(i.a.SmartSuggestions,e))}),s=n(1),c=Object(s.createStore)("smartSuggestionsPanelViewState",{latitude:"",longitude:""})(),l=Object(r.select)({store:function(){return c}})(Object(r.action)("setCurrentPosition")(function(e,t,n){n.store.latitude=e,n.store.longitude=t})),u=n(17),d=n(1854),m=n(12),g=n(2151),h=n(100),f=n(479),p=n(20),y=n(8),b=n.n(y),w=n(11),k=n(3),v=n(5654),S=n(160).bind(v),C=["image","gif"],E=["chains"],x="https://www.bing.com",_=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onReceivePostMessage=function(e){if(0===x.toLowerCase().indexOf(e.origin.toLowerCase())){var n=null;try{n=JSON.parse(e.data)}catch(t){w.c.warn("Unable to parse post message data: "+e.data)}if(n){var o=t.props.editor.getSelectionRange();t.props.editor.select(t.props.keywordElement,-3),Object(m.k)("SmartSuggestions_InsertCardInEditor",[t.props.keyword.segment]);var i={insertOnNewLine:!0,position:2,replaceSelection:!1,updateCursor:!1};t.createCardContent(n).then(function(e){return t.props.editor.insertContent(e,i)}).catch(function(e){return w.c.warn("Error creating card for SmartSuggestions: "+e)}),t.props.editor.select(o)}}},t.onUseLocationClicked=function(e){e.stopPropagation(),a(),t.getCurrentLocation()},t.onGetLocationSuccess=function(e){e&&e.coords?l(e.coords.latitude.toString(),e.coords.longitude.toString()):w.c.warn("Browser returned success for getCurrentPosition, but with invalid position or coordinates")},t.onGetLocationError=function(e){w.c.info("Error getting position from browser: "+e.message)},t}return o.__extends(t,e),t.prototype.render=function(){var e=this.shouldUseLocationForCurrentKeyword()&&!Object(i.c)(i.a.SmartSuggestions).browserLocationEnabled,t={containerLocationHeight:e,containerNoLocationHeight:!e},n=this.getIframeUrl();return k.createElement("div",{className:S(v.container,t)},e&&k.createElement(d.a,{className:v.locationButton,iconProps:{iconName:"Poi"},onClick:this.onUseLocationClicked,text:b.a.smartSuggestionsFindLocationsNearMeText}),k.createElement("iframe",{src:n,className:v.pickerIframeStyle}))},t.prototype.componentDidMount=function(){window.addEventListener("message",this.onReceivePostMessage,!1),this.shouldUseLocationForCurrentKeyword()&&Object(i.c)(i.a.SmartSuggestions).browserLocationEnabled&&this.getCurrentLocation()},t.prototype.componentWillUnmount=function(){window.removeEventListener("message",this.onReceivePostMessage,!1)},t.prototype.onClose=function(e){e.stopPropagation(),g.a.importAndExecute()},t.prototype.shouldUseLocationForCurrentKeyword=function(){return-1!==E.indexOf(this.props.keyword.segment)},t.prototype.getIframeUrl=function(){var e=this.props.keyword.entity,t=this.props.keyword.segment,n=x+"/intelligentsuggestion/search?q="+e+"&intent="+t+"&setmkt=en-us&safesearch=strict&appid=D41D8CD98F00B204E9800998ECF8427E61385B59&FORM=OWAISS";return this.shouldUseLocationForCurrentKeyword()&&Object(i.c)(i.a.SmartSuggestions).browserLocationEnabled&&""!==this.props.viewState.latitude&&""!==this.props.viewState.longitude&&(n+=Object(p.format)("&location=lat:{0};long:{1}",this.props.viewState.latitude,this.props.viewState.longitude)),n},t.prototype.createCardContent=function(e){var t="OWASUG"+Math.round(1e6*Math.random()).toString(),n=-1===C.indexOf(this.props.keyword.segment),o=b.a.insertedCardLinkHoverSentText;return new Promise(function(i,r){var a=document.createElement("img");a.crossOrigin="anonymous",a.onload=function(){f.i.import().then(function(r){var s,c=r(a);c?s=c:(w.c.warn("SmartSuggestions: Couldn't create dataURI from card image"),s=e.imageUrl),i(Object(p.format)(n?'<br><a href="{0}" title="{1}" id="{2}"><img class="EmojiInsert" src="{3}" alt ="{2}" width="300px" style="border: 1px solid #EEE;"></a><br>':'<br><a href="{0}" title="{1}" id="{2}"><img class="EmojiInsert" src="{3}" alt ="{2}" width="300px"></a><br>',e.searchLink,o,t,s))})},a.onerror=function(){r("Error loading image")},a.src=e.imageUrl})},t.prototype.getCurrentLocation=function(){var e={enableHighAccuracy:!1,maximumAge:0,timeout:3e4};navigator.geolocation.getCurrentPosition(this.onGetLocationSuccess,this.onGetLocationError,e)},o.__decorate([Object(h.c)("escape")],t.prototype,"onClose",null),t=o.__decorate([u.observer],t)}(k.Component);var T=n(5),D="SmartSuggestionsKeyword";function O(e,t,n){var o=document.createElement("span");o.textContent=e,o.id=D+Math.round(1e6*Math.random()).toString(),o.title=b.a.keywordLinkHoverText;var i=function(e){w.c.info("SmartSuggestions: keyword clicked"),n&&n(t,o)};return o.addEventListener("click",i),Object(T.d)("mc-smartPillsCompose")||L(o),{domElement:o,entityResult:t,onClickedHandler:i}}function P(e){e&&(e.domElement.className="",e.domElement.id="",e.domElement.removeEventListener("click",e.onClickedHandler))}function A(e){return 0===e.id.search(D)}var j=n(5656);function L(e){e.className=j.keywordFadeIn}var I=n(1345),F=n(89),N=n(190),z=n(56),H="cortana",K="ows/api/beta/contextualSuggestions";function M(e){return o.__awaiter(this,void 0,void 0,function(){var t;return o.__generator(this,function(n){switch(n.label){case 0:return(e=e.toLocaleLowerCase())?[4,Q(e)]:[3,2];case 1:if(t=n.sent())return w.c.info("[SmartSuggestions] contextualSuggestionLookup response: "+t),[2,B(t)];n.label=2;case 2:return[2,[]]}})})}function B(e){return e&&e.suggestedActions&&e.suggestedActions.actions&&e.suggestedActions.actions.length>0?[{entity:e.suggestedActions.actions[0].text,segment:H,score:1,initialQuery:e.suggestedActions.actions[0].text}]:[]}function Q(e){return o.__awaiter(this,void 0,void 0,function(){var t,n;return o.__generator(this,function(o){switch(o.label){case 0:return t={EmailBody:e},[4,Object(z.d)(K,t,Object(F.a)(),!0)];case 1:if(n=o.sent(),Object(N.a)(n.status))try{return[2,n.json()]}catch(e){w.c.warn("[callCortanaService] Exception: "+e.message)}return[2,null]}})})}var J=/[.()+={}\[\]\s:;"',>!]+$/i;function U(e,t){if(!t||""===t)return!0;var n=e.matchWhiteSpaces(t);if(n&&n.length>0)return!0;var o=J.exec(t);return!!(o&&o.length>0)}function R(e,t,n){if(t+1<e.length)return e.charAt(t+1);var o=n.currentBlockElement,i=n.getNextInlineElement();if(n.getPreviousInlineElement(),i&&i.getParentBlock()==o){var r=i.getTextContent();if(r&&r.length>0)return r.charAt(0)}return null}var q=function(e,t,n,o,i){var r=new Array;if(!n||0===n.length)return r;for(var a=t.getBodyTraverser(),s=a.currentInlineElement,c=0,l="",u=!1,d=t.getDocument().createRange(),m="";s;){if(s.isTextualInlineElement()){var g=0,h=s.getTextContent();for(o||(h=h.toLowerCase(),n=n.toLowerCase());g<h.length;){if(n.charCodeAt(c)!==h.charCodeAt(g)||i&&!u&&!U(e,m))u&&(u=!1,c=0,l="");else if(u||(d.setStart(s.getContainerNode(),g),u=!0),c++,(l+=h.charAt(g))===n){var f=R(h,g,a);i&&!U(e,f)||(d.setEnd(s.getContainerNode(),g+1),r.push(d),d=t.getDocument().createRange()),c=0,l="",u=!1}m=h.charAt(g),g++}u||(c=0)}s=a.getNextInlineElement()}return r},Z="gif",V=["apologize","awesome","birthday cake","birthday party","bye bye","bye-bye","byebye","congrats","congratulations","fingers crossed","good job","good luck","good night","goodbye","goodnight","great job","happy anniversary","happy birthday","happy easter","happy friday","happy new year","happy thanksgiving","have a great day","high five","i love you","im so excited","its friday","kiss","merry christmas","merry xmas","oh my god","omg","shut up","super excited","thank you","thanks","welcome","you are awesome","you can do it","good bye","good deal","good evening","good morning","great work","heartbroken","i love you guys","so excited","thank you so much","thank you very much","well done","yummy"];var X="ows/api/suggestions/getsuggestions";var Y=n(4163),W=n(63),G=n(3725),$=n(2991),ee=["celebrities","chains","flight","stock","sport","image","gif","cortana"],te="SmartSuggestions";function ne(e,t,n,i,r,a,s){return o.__awaiter(this,void 0,void 0,function(){var a,c,l;return o.__generator(this,function(o){switch(o.label){case 0:return a=Object(F.a)(),c=function(e){var t=V.length,n=[];e=e.toLocaleLowerCase();for(var o=0;o<t;o++)e.indexOf(V[o])>=0&&n.push(V[o]);return n.map(function(e){return{entity:e,segment:Z,score:1}})}(n),Object(T.d)("mc-contextualSuggestionsCompose")?[4,M(n)]:[3,2];case 1:l=o.sent(),c=c.concat(l),o.label=2;case 2:return c&&c.length>0&&c.forEach(function(n){w.c.info("SmartSuggestions: gif keyword ("+n.entity+") found in input string."),oe(e,n,r,t,s)}),i&&(w.c.info("SmartSuggestions: querying server for keywords in input string: "+n+". CorrelationId: "+a),function(e,t){var n={query:e,correlationId:t};return Object(z.d)(X,n,t)}(n,a).then(function(n){!function(e,t,n,o,i,r){n&&t&&t.results&&t.results.length>0?t.results.forEach(function(i){w.c.info("SmartSuggestions: found keyword: "+i.entity+" in segment: "+i.segment+". CorrelationId: "+t.correlationId),oe(e,i,n,o,r)}):t?t.results&&0!==t.results.length||w.c.info("SmartSuggestions: no keywords found in query. CorrelationId: "+t.correlationId):w.c.warn("SmartSuggestions: no valid SmartSuggestions response received")}(e,n,r,t,0,s)})),[2]}})})}function oe(e,t,n,o,i){var r=!1;if(t&&ee.includes(t.segment)){w.c.info("SmartSuggestions: keyword: "+t.entity+" is in allowed segment. Attempting to highlight");var a,s=n.getSelectionRange(),c=q(e,n,t.entity,!1,!0);c&&c.length>0&&(w.c.info("SmartSuggestions: found: "+c.length+" ranges for the keyword in the editor"),o.foundKeywords.includes(t.entity)||o.foundKeywords.push(t.entity),c.forEach(function(s){var c,l,u,d;(c=s).startContainer&&c.startContainer.parentElement&&A(c.startContainer.parentElement)?w.c.info("SmartSuggestions: range is already highlighted. Moving on."):(a=O(s.toString(),t,i),o&&o.keywords&&o.keywords.push(a),(r=e.replaceWithNode(n,s,a.domElement,!0))?w.c.info("SmartSuggestions: keyword ("+t.entity+") inserted successfully."):w.c.warn("SmartSuggestions: keyword ("+t.entity+") was not inserted into the editor successfully"),l=a.domElement,ie(document.createComment($.b),l),ie(document.createComment($.a),l.firstChild),l.appendChild(document.createComment($.b)),u=document.createComment($.a),(d=l).parentNode.insertBefore(u,d.nextSibling),Object(m.k)("SmartSuggestions_CreateAndInsertKeyword",[t.segment]))})),Object(T.d)("mc-smartPillsCompose")&&function(e,t,n){var o;if(e.segment===Z)o={ariaLabel:e.entity,featureName:te,onClick:function(o){t&&n&&t(e,n.domElement)},logData:{type:te,renderStory:0},loggableText:"composePill",index:0,text:e.entity,id:e.entity,icon:{iconName:"Photo2"}};else if(e.segment===H){var i=e;o={ariaLabel:i.initialQuery,featureName:te,onClick:function(e){Y.b.import().then(function(e){return e(Object(W.c)(),i.initialQuery)})},logData:{type:te,renderStory:0},loggableText:"composePill",index:0,text:i.initialQuery,id:i.initialQuery,icon:{iconName:"Search"}}}o&&G.b.importAndExecute(o)}(t,i,a),n.select(s)}return r}function ie(e,t){t.parentNode.insertBefore(e,t)}function re(e,t){var n;e&&e.keywords&&(e.keywords.forEach(function(e){e.domElement===t&&(n=e)}),n&&(e.keywords=e.keywords.filter(function(e){return e.domElement!=t}),P(n),G.c.importAndExecute(n.entityResult.entity)))}var ae=1;function se(e,t){e&&e.keywords&&(t.parentElement&&t.parentElement.id&&A(t.parentElement)&&re(e,t.parentElement),t.nodeType===ae&&e.keywords.forEach(function(n){t.contains(n.domElement)&&re(e,n.domElement)}))}var ce=new RegExp("\x3c!--"+$.b+"--\x3e.*?\x3c!--"+$.a+"--\x3e","gim");function le(e,t,n){void 0===n&&(n=!1),!Object(T.d)("mc-smartPillsCompose")&&e&&e.keywords&&e.keywords.forEach(function(o){if(o.domElement)if(n)L(o.domElement);else{var i=t.getSelectionTraverser();if(i){var r=i.currentBlockElement;r&&r.contains(o.domElement)?L(o.domElement):e.highlightingKeywordsTemporarily||(o.domElement.className=j.keywordFadeOut)}}})}var ue=n(9),de=n(1325),me=n(1563),ge=n(7),he=2e3,fe=["en-us","en-ca"],pe=function(){function e(){var e=this;this.onMouseOver=function(){e.state.keywords.length>0&&(e.state.highlightingKeywordsTemporarily||le(e.state,e.editor,!0),e.startTemporaryKeywordHighlightingTimer())},this.onKeywordClicked=function(t,n){var o,i,r;t.segment==Z?(e.associatedSearchElement=n,me.a.importAndExecute(e.insertNode,!0,t.entity,"smartSuggestions")):(o=t,i=n,r=e.editor,Object(m.k)("SmartSuggestions_OpenFlexPane",[o.segment]),i.innerText.toLowerCase()!==o.entity.toLowerCase()&&Object(m.k)("SmartSuggestions_KeywordMismatch"),g.b.importAndExecute(k.createElement(_,{keyword:o,keywordElement:i,editor:r,viewState:c}),{headerText:b.a.smartSuggestionsFlexPaneTitleText,headerClassName:v.header,overlayOnSmallWidth:!1}))},this.insertNode=function(t){if(e.editor.focus(),e.associatedSearchElement){var n=t instanceof HTMLImageElement,o=e.editor.getSelectionRange();n?e.editor.select(e.associatedSearchElement):(t.innerText=" "+t.innerText,e.editor.select(e.associatedSearchElement,-3));e.editor.performAutoComplete(function(){return e.editor.insertNode(t,{position:2,updateCursor:!1,replaceSelection:!1,insertOnNewLine:n})},"SmartSuggestion"),e.editor.select(o)}},this.startTemporaryKeywordHighlightingTimer=function(){e.state.highlightingKeywordsTemporarily=!0,e.temporaryKeywordHighlightingTimer&&clearTimeout(e.temporaryKeywordHighlightingTimer),e.temporaryKeywordHighlightingTimer=setTimeout(e.temporaryKeywordHighlightingTimerExpired,he)},this.temporaryKeywordHighlightingTimerExpired=function(){e.temporaryKeywordHighlightingTimer=null,e.state.highlightingKeywordsTemporarily=!1,le(e.state,e.editor)},this.state={keywords:[],foundKeywords:[]}}return e.prototype.getName=function(){return"SmartSuggestion"},e.prototype.setPluginUtils=function(e){this.pluginUtils=e},e.prototype.initialize=function(e){this.editor=e,this.temporaryKeywordHighlightingTimer=null,this.options=Object(ue.computed)(function(){return Object(i.c)(i.a.SmartSuggestions)}),this.onMouseOverDisposer=this.editor.addDomEventHandler("mouseover",this.onMouseOver);var t=Object(ge.a)().SessionSettings.UserCulture;t&&fe.includes(t.toLowerCase())&&(this.isEnabledForSupportedMarkets=!0)},e.prototype.dispose=function(){this.logCategorySummary(),function(e){if(e&&e.keywords)for(;e.keywords.length>0;)P(e.keywords.pop())}(this.state),de.a.importAndExecute(),this.editor=null,this.options=null,this.associatedSearchElement=null,this.temporaryKeywordHighlightingTimer&&(clearTimeout(this.temporaryKeywordHighlightingTimer),this.temporaryKeywordHighlightingTimer=null),this.onMouseOverDisposer&&(this.onMouseOverDisposer(),this.onMouseOverDisposer=null)},e.prototype.onPluginEvent=function(e){var t;if(this.options.get().smartSuggestionsEnabled&&this.isEnabledForSupportedMarkets)if(0===e.eventType)this.removeKeywordIfNecessary(e.rawEvent);else if(2===e.eventType){var n=e.rawEvent;if(n.which===I.f||n.which===I.m){var o=this.getContentBeforeCursor();o&&""!==o&&ne(this.pluginUtils,this.state,o,!1,this.editor,this.startTemporaryKeywordHighlightingTimer,this.onKeywordClicked)}this.state.keywords.length>0&&le(this.state,this.editor)}else if(7==e.eventType){var i=e;i.content=(t=i.content)?t.replace(ce,""):t}},e.prototype.getContentBeforeCursor=function(){if(null!==this.editor){var e=this.editor.getBodyTraverser(),t=e.currentInlineElement,n=this.editor.getSelection();if(n)for(var o=n.anchorNode;t&&t.getContainerNode()!=o;)t=e.getNextInlineElement();if(t)return this.extractText(e)}return""},e.prototype.extractText=function(e){for(var t="",n=e.currentInlineElement,o=null;t.length<100&&null!==n;){var i=null===o||!o.contains(n.getContainerNode());t=n.getTextContent()+(i?" ":"")+t,o=n.getParentBlock(),n=e.getPreviousInlineElement()}return t},e.prototype.keycodeIsPrintable=function(e){return e===I.b||e===I.f||e===I.m||e===I.e||e>=I.c&&e<=I.d||e>=I.g&&e<=I.h||e>=I.i&&e<=I.j||e>=I.l&&e<=I.n||e>=I.k&&e<=I.a},e.prototype.removeKeywordIfNecessary=function(e){if(this.state.keywords.length>0&&this.keycodeIsPrintable(e.which)){var t=this.editor.getSelectionRange();t&&t.startContainer&&(t.collapsed?t.startContainer.parentNode&&A(t.startContainer.parentNode)&&re(this.state,t.startContainer.parentNode):(se(this.state,t.startContainer),t.endContainer!==t.startContainer&&se(this.state,t.endContainer)))}},e.prototype.logCategorySummary=function(){if(this.state.keywords.length>0){var e={};this.state.keywords.forEach(function(t){if(t.entityResult){var n=t.entityResult.segment;e[n]=n in e?e[n]+1:1}}),Object(m.k)("SmartSuggestions_CategorySummary",e)}},e}();t.default=pe}},0,[16,96,279,51,280,57,0,107]]);
//# sourceMappingURL=owa.SmartSuggestions.mail.js.map
window.scriptsLoaded['owa.SmartSuggestions.mail.js'] = 1; window.scriptProcessEnd = window.scriptProcessEnd || {}; window.scriptProcessEnd['owa.SmartSuggestions.mail.js'] = (new Date()).getTime();