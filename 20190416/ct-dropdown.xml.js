!function(e){e.fest||(e.fest={}),e.fest["ct-dropdown.xml"]=e.fest["bem/horo/web/web.bundles/ct-dropdown"]=function(e){"use strict";var t,y,u,_,s,p,d,v,a,r=this,c="",m=[],l=[],n="",b={},i="",h="",o="",x=[],k={area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,wbr:!0},g=/[&<>"]/g,f=/[&<>"]/,P={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"},F=function(e){return"string"==typeof e&&f.test(e)?e.replace(g,N):null==e?"":e},N=function(e){return P[e]},j=function(e,t){for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s])},w=function(e){return e.param=!0,e};r&&"function"==typeof r.i18n&&r.i18n;function C(e){a(e+'\nin block "'+o+'" at line: '+h+"\nfile: "+i)}function D(e,t,s){if(s)for(var a in t)"function"==typeof t[a]&&t[a].param&&(t[a]=t[a]());return e.call(r,t)}a="undefined"==typeof __fest_error?"undefined"!=typeof console&&console.error?function(){return Function.prototype.apply.call(console.error,console,arguments)}:function(){}:__fest_error;var A;if(b.ajax=function(e){var t="";try{u=e.html}catch(e){u=!1,C(e.message)}if(u)try{t+=e.html}catch(e){C(e.message+"5")}return t},b.element=function(e){var t,s,a,r,c="";try{var m=e.baseParams||e.forParams||e,l=m.attrs||{},n=e.baseClass||e.forClass||"",i=e.elem,h=e.htmlDeep;i&&h&&!i.htmlDeep?i.htmlDeep=h:!i&&h&&(e.html=h),e.href&&(l.href=e.href)}catch(e){C(e.message)}try{"string"!=typeof(v=(l.href?"a":e.tagName)||"div")&&(C("Element name must be a string"),v="div")}catch(e){v="div",C(e.message)}x.push(v),c+="<"+v,c+=' class="';try{y=fest._helpers.classNamesFor(n,m)}catch(e){y="",C(e.message)}c+=y,c+='"';try{t=l||{}}catch(e){_={},C(e.message)}for(s in t){a=t[s];try{y=s}catch(e){y="",C(e.message)}if(""!==y){c+=" "+y+'="';try{c+=F(a)}catch(e){C(e.message+"25")}c+='"'}}try{r=e.attrsNoEscape||{}}catch(e){_={},C(e.message)}for(s in r){a=r[s];try{y=s}catch(e){y="",C(e.message)}if(""!==y){c+=" "+y+'="';try{c+=a}catch(e){C(e.message+"30")}c+='"'}}c+=(v=x[x.length-1])in k?"/>":">";try{u=e.htmlPrepend}catch(e){u=!1,C(e.message)}if(u)try{c+=e.htmlPrepend}catch(e){C(e.message+"36")}try{u=e.html}catch(e){u=!1,C(e.message)}if(u)try{c+=e.html}catch(e){C(e.message+"39")}try{u=e.elem}catch(e){u=!1,C(e.message)}if(u){y="element",d={};try{d=e.elem}catch(e){C(e.message)}(p=b[y])&&(c+=D(p,d,!1))}try{u=e.elems}catch(e){u=!1,C(e.message)}if(u){var o,g,f;try{g=(f=e.elems||[]).length}catch(e){f=[],g=0,C(e.message)}for(o=0;o<g;o++){i=f[o];try{u=i}catch(e){u=!1,C(e.message)}if(u){y="element",d={};try{d=i}catch(e){C(e.message)}(p=b[y])&&(c+=D(p,d,!1))}}}try{u=e.htmlAppend}catch(e){u=!1,C(e.message)}if(u)try{c+=e.htmlAppend}catch(e){C(e.message+"52")}return(v=x[x.length-1])in k||(c+="</"+v+">"),x.pop(),c},b.scroll=function(e){var t="";try{e.type=e.type||"vertical";var s=e.trackParams||{},a=e.trackBoxParams||{},r=e.dragParams||{},c=e.dragWrapParams||{};e.mix=e.mix||["js-scrollbar"],a.mix=a.mix||["js-scrollbar__track"],c.mix=c.mix||["js-scrollbar__track__drag__point"],r.mix=r.mix||["js-scrollbar__track__drag"]}catch(e){C(e.message)}try{l[0]=F(fest._helpers.classNamesFor("scroll",e))}catch(e){l[0]="",C(e.message)}try{l[1]=F(e.type)}catch(e){l[1]="",C(e.message)}t+='<div class="'+l[0]+'" data-type="'+l[1]+'">';try{l[0]=F(fest._helpers.classNamesFor("scroll__track",s))}catch(e){l[0]="",C(e.message)}t+='<div class="'+l[0]+'">';try{l[0]=F(fest._helpers.classNamesFor("scroll__track__box",a))}catch(e){l[0]="",C(e.message)}t+='<div class="'+l[0]+'">';try{l[0]=F(fest._helpers.classNamesFor("scroll__track__drag-wrap",c))}catch(e){l[0]="",C(e.message)}t+='<div class="'+l[0]+'">';try{l[0]=F(fest._helpers.classNamesFor("scroll__track__drag",r))}catch(e){l[0]="",C(e.message)}return t+='<div class="'+l[0]+'"></div></div></div></div></div>'},b.suggest__block=function(n){var e="";y="element",d={};try{j(d,n)}catch(e){C(e.message)}try{j(d,{baseClass:"suggest__block"})}catch(e){C(e.message)}return d.html=w(function(){var t,e,s,a,r,c,m,l="";try{t=n.title}catch(e){t=!1,C(e.message)}if(t){l+='<div class="suggest__title">';try{l+=n.title}catch(e){C(e.message+"15")}l+="</div>"}try{c=(m=n.items||[]).length}catch(e){m=[],c=0,C(e.message)}for(a=0;a<c;a++){r=m[a],s={};try{j(s,r)}catch(e){C(e.message)}try{j(s,fest._helpers.mergeTopParams(r,n.itemParams))}catch(e){C(e.message)}(e=b.suggest__item)&&(l+=D(e,s,!1))}return l}),(p=b[y])&&(e+=D(p,d,!0)),e},b.suggest__item=function(c){var e="";y="element",d={};try{j(d,c)}catch(e){C(e.message)}try{j(d,{baseClass:"suggest__item"})}catch(e){C(e.message)}return d.html=w(function(){var e,t,s,a,r="";try{t=c.title}catch(e){t=!1,C(e.message)}if(t){e="element",a={};try{j(a,fest._helpers.mergeParams(c.titleParams,{mix:["link-holder"],attrs:{href:c.href}}))}catch(e){C(e.message)}try{j(a,{baseClass:"suggest__item-title",html:c.title})}catch(e){C(e.message)}(s=b[e])&&(r+=D(s,a,!1))}try{t=c.subtitle}catch(e){t=!1,C(e.message)}if(t){e="element",a={};try{j(a,c.subtitleParams)}catch(e){C(e.message)}try{j(a,{baseClass:"suggest__item-subtitle",html:c.subtitle})}catch(e){C(e.message)}(s=b[e])&&(r+=D(s,a,!1))}try{t=c.html||c.text}catch(e){t=!1,C(e.message)}if(t)try{r+=c.html||c.text}catch(e){C(e.message+"43")}return r}),(p=b[y])&&(e+=D(p,d,!0)),e},A=e,y="ajax",(d={}).html=w(function(){var e,t,s="";try{A.mix=(A.mix||[]).concat("js-select__options__item")}catch(e){C(e.message)}t={};try{t=A}catch(e){C(e.message)}return(e=b.suggest__item)&&(s+=D(e,t,!1)),s}),m.push(c,{name:y,params:d,cp:!0}),c="",s=m.length){for(_=0;_<s;_++)"string"==typeof(t=m[_])?n+=t:(p=b[t.name])&&(n+=D(p,t.params,t.cp));return n+c}return c}}(Function("return this")());