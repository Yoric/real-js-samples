!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var s=e();for(var i in s)("object"==typeof exports?exports:t)[i]=s[i]}}("undefined"!=typeof self?self:this,function(){return function(t){function e(i){if(s[i])return s[i].exports;var n=s[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var s={};return e.m=t,e.c=s,e.d=function(t,s,i){e.o(t,s)||Object.defineProperty(t,s,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var s=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(s,"a",s),s},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/js/cmpld/",e(e.s=601)}({100:function(t,e,s){"use strict";var i=s(25),n=(s.n(i),s(101));s.n(n),s(102)},101:function(t,e){!function(t,e,s){function i(){var t=this._values,e=[t.year,t.month,t.day].map(function(t){return t||"01"}),s=c.fromStr(e.join("-"));null!==s&&(s.getMonth()+1>e[1]&&c.Change(s,"0d"),this._date=s,this._Elems.input.val(c.toStr(s,this._Opts.dateInputFormat)).trigger("change"))}function n(t,e){this._values[t]=e.value,i.call(this),this._Opts.updateTextOnChange&&this.displayDate()}function o(t,e,s){var i,n,o,l,r=[],a=new Date;if("day"===t)for(s=s||1,o=1;o<32;o++)i=(o<10?"0":"")+o,r.push({value:i,active:o===parseInt(s)?"1":"",text:i});if("month"===t)for(s=s&&--s||0,o=0,l=this._opts.monthNames.length;o<l;o++)n=o+1,i=(n<10?"0":"")+n,r.push({value:i,active:o===parseInt(s)?"1":"",text:this._opts.monthNames[o]});if("year"===t)for(l=a.getFullYear(),s=s||1985,e&&(l+=5),o=1900;o<=l;o++)r.push({value:o,active:o===parseInt(s)?"1":"",text:o});return r}function l(t,e){var s=this._opts.template,i=t.find("select"),n=t.data("future")||!1,l=i.attr(this._opts.attrs.defaultValue),r=o.call(this,e,n,l);i.html(s(r))}var r=s.Basic,a=s.Tools.initModules,c=s.Types.Date,u=s.Tools.getTemplate,h={cssSels:{Main:{select:".js-date__select",text:".js-date__text",input:".js-date__input",save:".js-date__save"}},attrs:{selectRange:"data-range",defaultValue:"data-defval"},template:u("ct-dropdown-options.xml"),updateTextOnChange:!0,defaultText:"Выберите дату",dateTextFormat:"dd MM YYYY",dateInputFormat:"YYYY-mm-dd",monthNames:["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"]},d=r.Constructors.getView({_Handlers:{"dom:click:Main.save":function(t){t.preventDefault(),this.displayDate()}},_Init:function(){var e=this._Opts,s=this._Elems,o=e.attrs.selectRange,r={},u=n.bind(this),h=l.bind(this);this._values=r,this._date=c.fromStr(s.input.val()),s.select.each(function(){var e=t(this),s=e.attr(o);h(e,s);var i=a(e);i.on("change",u.bind(null,s)),r[s]=i._Elems.Select.val()}),i.call(this)},displayDate:function(){var t=this._Opts,e=this._Elems.text,s=this._date;e&&e.text(s?c.toStr(this._date,t.dateTextFormat,t.monthNames):t.defaultText)}},h,null,"DateCustomSelects");e.getNameSpace("Modules",s).DateCustomSelects=d}(window.jQuery||window.$,window,window.ru.mail.cpf)},102:function(t,e,s){"use strict";var i=s(103);s.n(i);window.ru.mail.asyncTemplates.prefetch("/bem/horo/web/web.bundles/ct-dropdown-options/ct-dropdown-options.xml.js")},103:function(t,e){!function(t){var e=t.Basic.moduleOpts,s=t.Tools.initModules,i={dateSelect:".js-date-select",dateSelectSave:".js-date-select__save"};e.setParams("DateCustomSelects.Text",{options:{cssSels:{Main:{save:i.dateSelectSave}},defaultText:"Выбрать дату",updateTextOnChange:!1}}),e.set("DateCustomSelects.Text.Month",{dateTextFormat:"MM YYYY",monthNames:["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"]}),e.set("DateCustomSelects.Text.Year",{dateTextFormat:"YYYY"}),e.setParams("Dropdown.Date",{options:{_Handlers:{toggle:function(t){t&&s(this._Elems.Parent.find(i.dateSelect))}},cssSels:{Main:{Button:".js-dropdown__button"}},cssClss:{showDropdown:"p-tooltip_active"}}})}(window.ru.mail.cpf)},15:function(t,e,s){"use strict";var i=s(9),n=(s.n(i),s(5)),o=(s.n(n),s(7)),l=(s.n(o),s(3)),r=(s.n(l),s(4)),a=(s.n(r),s(8)),c=(s.n(a),s(6));s.n(c);window.ru.mail.asyncTemplates.prefetch("/bem/horo/web/web.bundles/ct-dropdown/ct-dropdown.xml.js")},25:function(t,e){!function(t){function e(t,e){if(!(t instanceof Date))return null;var s=new Date(t.getTime());return e&&h(s,e),s}function s(t){var e=c(t);return"date"===e?t:"string"===e?d(t):null}function i(){var t,i,n,o,l,r,a,u=Array.prototype.slice.apply(arguments,[0,3]),h="0y0m0d0h0i0s0n";if(u.length<=1)return null;for(var d=0;d<u.length;d++)if(o=u[d],d<2){if(null===(o=s(o)))return null;0===d?t=o:i=o}else c(o,"string")&&(n=o);return n&&-1!=(l=h.indexOf(n))||(l=3),l++,h=h.substr(l),r=(h?e(t,h):t).getTime(),a=(h?e(i,h):i).getTime(),r<a?-1:r>a?1:0}function n(t,i,n){var o,l,r=[s(t.min),s(t.max)],a=new Date;i=i||"1m",void 0===n&&(n=!0),n&&h(a,"0h0i0s0n");for(var c=0;c<r.length;c++)o=r[c],l=r[1-c],o&&l&&(c?l>o:l<o)&&(o=e(l,(c?"+":"-")+i)),o&&n&&(o=e(o,(c?24:0)+"h0i0s"+(c?"-1s":"")+"0n")),r[c]=o;return r}function o(t,e){for(var s,i=0;i<e.length;i++)if(s=e[i],c(s,"string")&&(s=d(s)),!isNaN(s)&&null!==s&&(1===i?t>s:t<s))return!1;return!0}var l=t.getNameSpace,r=l("ru.mail.cpf",t),a=r.Basic,c=a.typeOf,u=function(){function t(t,e,s){var i;return e&&e==e.toUpperCase()&&Array.isArray(s)&&(i=s[t])?i:null}var e={getFullYear:/[Y]{2,4}/,getMonth:/M{1,2}/i,getDate:/\??d{1,2}/,getDay:/D/,getHours:/H{1,2}/,getMinutes:/i{1,2}/,getSeconds:/s{1,2}/,getMilliseconds:/n{1,3}/};return function(s,i,n,o){var l,r,a,u,h,d,p,f,g=null,_=i;for(var m in e)if(e.hasOwnProperty(m)&&(r=e[m],a=c(r),g=null,"string"===a&&i.indexOf(r)>-1?g=r:"regexp"===a&&Array.isArray(u=i.match(r))&&(g=u[0]),null!==g)){switch(l=s[m](),m){case"getMonth":l=t(l,g,n)||++l;break;case"getDay":--l<0&&(l=6),l=t(l,g,o)||l}if(l+="",!isNaN(l))if((d=g.length)<(h=l.length))l=l.substr(h-d);else if(d>h){p=d-h;for(var v=0;v<d&&"?"==g.charAt(v);v++)p--;for(var S=0;S<p;S++)l="0"+l}f=_.indexOf(g),_=_.substr(0,f)+l+_.substr(f+g.length)}return _}}(),h=function(){var t=/([+-])?([0-9]+)([a-z])/gi,e={y:"FullYear",m:"Month",d:"Date",h:"Hours",i:"Minutes",s:"Seconds",n:"Milliseconds"};return function(s,i){var n,o,l,r,a,u;if(!(c(s,"date")&&c(i,"string")&&t.test(i)))return s;for(t.lastIndex=0;n=t.exec(i);)if(o=e[n[3]],4===n.length&&o&&(l=n[2],r=n[1],l)){if(u=s["get"+o](),r&&"0"!==l)a=u+l*("+"===r?1:-1);else{if(r||l==u)continue;a=1*l}s["set"+o](a)}return s}}(),d=function(){var t=/^(\d{4})[.-](\d{1,2})[.-](\d{1,2})/,e=/^(\d{1,2})[.-](\d{1,2})[.-](\d{4})/,s=/^(\d{1,2})[.-](\d{1,2})[.-](\d{2})/;return function(i){if("string"!=typeof i)return null;var n;return i=i.replace(t,"$1/$2/$3"),i=i.replace(e,"$2/$1/$3"),i=i.replace(s,"$2/$1/$3"),n=Date.parse(i),n?new Date(n):null}}(),p=function(){function t(t,e){return e[t]()}function s(s,i){var n=s.count;return c(n,"string")?t(s.method,e(i,n)):n}var i=[{name:"years",method:"getFullYear",count:null},{name:"months",method:"getMonth",count:12},{name:"days",method:"getDate",count:"0d-1d"},{name:"hours",method:"getHours",count:24},{name:"minutes",method:"getMinutes",count:60},{name:"seconds",method:"getSeconds",count:60}];return function(){for(var e,n,o,l,r,a,u=Array.prototype.slice.call(arguments),h=new Date,d=null,p=u.length;p--;)o=u[p],c(o,"number")&&(o=u[p]=new Date(h+1e3*o)),c(o,"date")||u.splice(p,1);if(u.length>0){1===u.length&&(u[1]=h),d={},u[0]>u[1]&&(u=u.reverse());for(var f=0;f<i.length;f++){if(e=i[f],l=e.method,n=u.map(t.bind(null,l)),f>0&&n[0]>n[1]){for(r=f-1;(a=i[r])&&0===d[a.name];)d[a.name]=s(a,u[1])-1,r--;a&&d[a.name]--,n[1]+=s(e,u[1])}d[e.name]=n[1]-n[0]}}return d}}();a.Extend(l("Types.Date",r),{fromStr:d,toStr:u,getDate:s,Change:h,Clone:e,Compare:i,getRange:n,isInRange:o,getDateDiff:p})}(new Function("return this")())},3:function(t,e){!function(t,e,s){var i,n=s.Basic,o=n.typeOf,l=s.Comp,r=l.Methods.initCallbacks,a=n.getConstructor(function(){function s(){var t=this._Opts;this._Elems.jBar.on(b.mousedown,t.cssSels.scrollThumbBody,n.bind(this)).on("click",u.bind(this))}function n(e){var s=e.originalEvent.changedTouches;if(!(s&&s.length>1)){var n=this._Opts.cssSels,o=S[!0===this._Opts.Vertical?1:0],r=o.position,a=t(e.target),u=a.parents(n.scrollThumb),h=u.offset(),d=a.position(),p=s?s[0]:e,g=p[o.cursorPos]-h[r]-d[o.position];f.call(this),this._dragEnd=!1,i.on(b.mousemove+".scrollBar",l.bind(this,{jElem:u,jBody:a,iPosDiff:g,Dimensions:o,Index:u.index()})).on(b.mouseup+".scrollBar",c.bind(this)),e.preventDefault()}}function l(t,e){var s=e.originalEvent.changedTouches,i=s?s[0]:e,n=this._Sizes,l=this._Timers,r=this._Opts.onBeforeMove,a=t.Index,c=t.Dimensions,u=t.jBody,d=u.position(),f=t.iPosDiff+d[c.position],g=i[c.cursorPos]-n.barOffset-f;g=_(g,n.barSize),o(r,"function")&&(g=r.call(this,g,t)),l.setPosition||(l.setPosition=setTimeout(function(){l.setPosition=null,h(t,c,g)},1)),e.preventDefault(),this._Positions[a]=g,this._fire("drag",[p.call(this)])}function c(e){i.off(".scrollBar"),this._fire("change",[p.call(this)]),t(e.target).closest(this._Elems.jBar).length>0&&(this._dragEnd=!0)}function u(e){var s=this._Opts,i=s.cssSels,n=i.scrollThumbBody,l=this._Opts.onBeforeMove;if(t(e.target).closest(i.scrollThumbBody).length>0||this._dragEnd)return void(this._dragEnd=!1);var r,a,c,u,h=this._Positions,g=S[!0===s.Vertical?1:0],m=null,v=null;f.call(this),r=this._Sizes,a=_(e[g.cursorPos]-r.barOffset,r.barSize),o(l,"function")&&(a=l.call(this,a,null));for(var b=h.length;b--;)c=Math.abs(h[b]-a),(null===m||c<m)&&(m=c,v=b);null!==v&&m>0&&(u=this._Elems.jBar.find(i.scrollThumb).eq(v),d.call(this,{jElem:u,jBody:u.find(n),Index:v},g,a),this._fire("change",[p.call(this)]))}function h(t,e,s){t.jElem.get(0).style[e.position]=s+"%",t.jBody.get(0).style[e.position]=-s+"%"}function d(t,e,s){this._Positions[t.Index]=s,h(t,e,s)}function p(){var t=this._Positions,e=[].concat(t);return 1==e.length?e[0]:e}function f(){var t=this._Sizes,e=this._Elems.jBar,s=S[!0===this._Opts.Vertical?1:0],i=e.offset();t.barOffset=i[s.position],t.barSize=e[s.size]()}function g(){var e=this._Sizes,s=this._Elems.jBar,i=this._Positions,n=S[!0===this._Opts.Vertical?1:0];s.find(this._Opts.cssSels.scrollThumb).each(function(s){var o=t(this);i[s]=_(o.position()[n.position],e.barSize)}),this._fire("change",[p.call(this)])}function _(t,e){return 0===e?0:(t=Math.floor(t/e*1e4)/100,Math.max(0,Math.min(100,t)))}function m(){for(var t in b)b.hasOwnProperty(t)&&(b[t]=t)}function v(){return"ontouchstart"in e||"ontouchend"in document||"createTouch"in document}var S=[{size:"width",cursorPos:"pageX",margin:"marginLeft",position:"left"},{size:"height",cursorPos:"pageY",margin:"marginTop",position:"top"}],b={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"," ":" touchcancel"},w={cssSels:{scrollThumb:null,scrollThumbBody:null},Vertical:!1,onChange:null,onDrag:null,onBeforeMove:null};return{_Init:function(n,o){var l,c=n.data("_scrollBar");if(i=t(e.document.body),c instanceof a)return c;n.data("_scrollBar",this),this._Opts=l=t.extend(!0,{},w,o),this._Elems={jBar:n},this._Sizes={},this._Positions=[],this._Timers={},this._bTouch=v(),this._dragEnd=!1,f.call(this),r.call(this,{Types:{change:l.onChange,drag:l.onDrag}}),g.call(this),this._bTouch||m(),s.call(this)},setPositionVals:function(t){var e,s,i,n=this._Opts,l=this._Positions,r=n.cssSels,a=n.onBeforeMove,c=this._Elems.jBar.find(r.scrollThumb),u=S[!0===n.Vertical?1:0];o(t,"number")&&(t=[t]);for(var h=0;h<t.length;h++)e=t[h],o(e,"number")&&(e=Math.max(0,Math.min(100,Math.round(100*e)/100)),s=c.eq(h),i={jElem:s,jBody:s.find(r.scrollThumbBody),Index:h},o(a,"function")&&(e=a.call(this,e,null)),l[h]!==e&&(d.call(this,i,u,e),this._fire("change",[p.call(this)])))},getPositionVals:p,getBarElement:function(){return this._Elems.jBar},getThumbElement:function(){return this._Elems.jBar.find(this._Opts.cssSels.scrollThumb)}}}());n.Extend(e.getNameSpace("Comp.jQuery.Modules",s),{scrollBar:a}),t.fn.scrollBar=function(s){return e.DEBUG&&e.console.warn("Обнаружено старое подключение компонента.\t\t\t\tНеобходимо срочно сменить его на обычное, так как скоро старое перестанет работать"),this.each(function(){a(t(this),s)})}}(window.jQuery,window,window.ru.mail.cpf)},4:function(t,e){!function(t,e,s){"use strict";var i=s.Basic,n=i.typeOf,o=s.Comp.jQuery,l=o.Tools,r=l.winHndlrs.attach,a=o.Modules.scrollBar,c={cssSels:{Main:{scrollBar:null,scrollView:null},scrollBar:{scrollThumb:null,scrollThumbBody:null},scrollThumbSize:null},overflow:"auto",Attrs:{Orientation:"data-type"},disabledScrollBody:{mouse:!1,touch:!1}},u=i.Constructors.getView(function(){function s(){var t=this._elems.scrollBar,e=this._Opts,s=this._scrollBars,n=e.cssSels.scrollBar,o=e.Attrs.Orientation;t.each(function(e){var l=t.eq(e),r="vertical"==l.attr(o)||l.width()<l.height(),c=i.bind(this,r),u=a(l,{cssSels:n,Vertical:r,onDrag:c,onChange:c});s[r?1:0]=u}.bind(this))}function i(t,e){o.call(this,t,e)}function o(t,e){var s,i=t?1:0,o=m[i].scroll,r=this._Sizes[i],a=this._State;n(r,"undefined")||(s=Math.round(r.scrollDiff*e/100),a[t?"scrollY":"scrollX"]=s,this._elems.scrollView[o](s),l.call(this))}function l(){var t=this._State;this._trigger("scroll",{type:"scroll",scrollX:t.scrollX,scrollY:t.scrollY,scrollMaxX:t.scrollMaxX,scrollMaxY:t.scrollMaxY})}function c(){for(var t,e,s,i,n,o,l=this._Sizes,r=this._scrollBars,a=this._elems.scrollView,c=m.length;c--;){t=m[c],e=r[c],e&&(s=e.getBarElement()),(i=l[c])||(i=l[c]={});for(var u in t)if(t.hasOwnProperty(u)){if(n=t[u],/cursorPos|axisName/.test(u))continue;"size"==u?s&&s.length&&(o=s[n]()):o="scrollSize"==u?a.prop(n):a[n](),i[u]=o}i.scrollDiff=i.scrollSize-i.innerSize,this._State["scrollMax"+t.axisName.toUpperCase()]=i.scrollDiff}}function u(e,s){var i="scroll"!=this._Opts.overflow?e.getBarElement():e.getThumbElement();i.toggle(n(s,"boolean")?s:!t(i).is(":visible"))}function h(){for(var t,e,s,i,n,o,l=this._scrollBars,r=this._Sizes,a=this._Opts.cssSels.scrollThumbSize,c=r.length;c--;)(s=l[c])&&(e=s.getBarElement(),t=r[c],i=t.scrollDiff,n=i>0,u.call(this,s,n),o=Math.round(t.size*(1-i/t.scrollSize)*100)/100,e.find(a)[m[c].size](o))}function d(t,e,s,i,n){var o,l,r,a,c,u,h;s.scrollDiff>0&&(o=t.originalEvent,n?c=o.wheelDelta||t.wheelDelta||-o.deltaY:(a=this._State,h=m[i].cursorPos,u=o.changedTouches[0][h],c=u-a[h],a[h]=u),l=e.getPositionVals(),r=c/s.scrollSize*100,(0===l?r<0:100!==l||r>0)&&(e.setPositionVals(l-r),t.preventDefault()))}function p(t){var e=this._scrollBars[1];e&&d.call(this,t,e,this._Sizes[1],1,!0),this._opts.disabledScrollBody.mouse&&(event.returnValue=!1)}function f(t){if(!this._preventScroll){var e,s,i,n,o,l=t.originalEvent.changedTouches;if(!(l&&l.length>1)){for(s=this._Sizes,e=this._scrollBars,n=0,o=e.length;n<o;n++)(i=e[n])&&d.call(this,t,i,s[n],n);this._opts.disabledScrollBody.touch&&(event.returnValue=!1)}}}function g(){var s,i=this,n=this.Resize.bind(this),o=this._elems,l=o.scrollView;r(null,n),l.on("mousewheel wheel DOMMouseScroll",p.bind(this)),("ontouchstart"in e||"ontouchend"in document||"createTouch"in document)&&(o.body=s=t(e.document.body),l.on("touchstart",function(e){var n,o,l=e.originalEvent.changedTouches;l&&l.length>1||(n=l[0],o=i._State,o.pageX=n.pageX,o.pageY=n.pageY,s.on("touchmove",f.bind(i)).on("touchend",function(){t(this).off("touchmove")}))})),o.parent.on("documentHeightChange",n),o.parent.on("scrollChange",n)}function _(){for(var t,e,s,i,n,o=this._scrollBars,l=this._Sizes,r=this._elems.scrollView,a=l.length;a--;)(s=o[a])&&(t=m[a],e=l[a],i=e.scrollDiff,n=0===i?e.scrollDiff:r[t.scroll]()/e.scrollDiff*100,n=s.setPositionVals(n))}var m=[{size:"width",scroll:"scrollLeft",scrollSize:"scrollWidth",innerSize:"innerWidth",cursorPos:"pageX",axisName:"x"},{size:"height",scroll:"scrollTop",scrollSize:"scrollHeight",innerSize:"innerHeight",cursorPos:"pageY",axisName:"y"}];return{_Events:["scroll"],_Init:function(){this._scrollBars=[],this._Sizes=[],this._State={scrollX:0,scrollY:0,scrollMaxX:0,scrollMaxY:0},s.call(this),c.call(this),h.call(this),_.call(this),g.call(this),this._elems.parent.data("_customScroll",this)},Resize:function(){c.call(this),h.call(this),_.call(this)},setScrollsPos:function(t,e){for(var s,i,n=this._scrollBars,o=this._Sizes,l=n.length;l--;)(s=n[l])&&(i=Array.isArray(t)?t[l]:t,!0===e&&(i=i/o[l].scrollDiff*100),s.setPositionVals(i))},toggleScroll:function(t){var e="boolean"==typeof t?t:this._preventScroll;this._preventScroll=!e}}}(),c,null,"CustomScroll");e.getNameSpace("Modules",s).CustomScroll=u,t.fn.customScroll=function(i){return e.DEBUG&&e.console.warn("Обнаружено старое подключение компонента.\t\t\t\tНеобходимо срочно сменить его на обычное, так как скоро старое перестанет работать"),this.each(function(){var e=t(this),n=e.data(),o=n.CustomScroll||n._customScroll;if(o instanceof u)return o;e.data("_customScroll",s.Tools.initModule("CustomScroll",e,i))})}}(window.jQuery,window,window.ru.mail.cpf)},5:function(t,e,s){!function(t,e,s){"use strict";var i,n=s.Basic,o=n.typeOf,l=s.Types.Array,r=Array.prototype,a=s.Tools.Forms.Select.createSelect,c=s.Tools.initModule,u=["value","text","index","selected","disabled"],h=u.slice(3).concat("inOptgroup"),d={cssSels:{Main:{Select:"select",View:"",viewText:"",Dropdown:"",optionsCont:"",Options:""},optElem:"",optText:""},cssClss:{optionProps:{disabled:"",selected:"",highlighted:"",inOptgroup:""},optgroupHead:"",optgroupHeadSelectable:"",disabledView:"",activeView:""},Templates:{Option:"<div></div>"},Attrs:{Select:{defText:"data-default",selText:"data-selected"},selectableOptGroup:{selected:"data-selected",value:"data-value"},optIndex:"data-optidx",selectedGroup:"data-selected",groupValue:"data-value"},changeEvent:"click",preventChangeEvent:!0,preventChangeInit:!1,processOptions:null,deferDraw:!0},p=n.Constructors.getView(function(){function s(t,e){return o(t,"array")?t.indexOf(e)>-1:e==t}function n(){var t=this._opts,e=t.Attrs.Select,s=this._elems.Select,i=s.get(0),n={disabled:i.disabled,multiple:i.multiple};this._Properties=n;for(var o in e)e.hasOwnProperty(o)&&e[o]&&(n[o]=s.attr(e[o]));this._Dropdown.Disable(n.disabled)}function d(t){var e=this._opts.cssClss.optionProps;h.forEach(function(s){e[s]&&t.jOption.toggleClass(e[s],t[s])})}function p(t,e,s){var i,n=this._Value,l=this._Properties.multiple,a=t.value,c=o(e,"boolean")?!e:t.selected;if(s=!1!==s,!t.disabled){var u=d.bind(this);c?l&&(i=n.indexOf(a))>-1&&n.length>1?n.splice(i,1):this._Value=null:(l?n=null!==n?r.concat.call(n,a):[a]:(this.getSelectedOptions().forEach(function(t){t.selected=!1,u(t)}),n=a),this._Value=n),t.selected=t.elOption.selected=!c,u(t),!0!==e&&this.render(),s&&this._trigger("change",t)}}function f(t,e){var s,i,n=o(t),r=o(e),a="array"===n,c=r===n;return c?c=a?l.isEqual(t,e):t==e:(a||"array"===r)&&(a?(s=t,i=e):(s=e,i=t),c=1===s.length&&s.indexOf(i)>-1),c}function g(){this.setValue(this.getValue())}function _(e){var s=this._opts,i=t(e.target).closest(s.cssSels.optElem).attr(s.Attrs.optIndex);s.preventChangeEvent&&e.preventDefault(),isNaN(i)||this.toggleOption(i)}function m(t){if(this._State.opened=t,t&&!this._elems.Options.parent().length){var e=this.getSelectedOptions();this.drawOptionsList(),e.length&&this.highlightOption(e[0],!0)}this._toggleKeyboardHandlers(t),this._trigger("listToggle",t)}function v(){var t=this._State;t.typeInTimer=null,t.typeIn=""}var S=function(e,s){var i,n,l,r=s.cssSels.optText,a=s.Templates.Option,c=!1;return o(a,"function")?l=a(e):(c=!0,l=a),i=t(l),n=r?i.find(r):i,n.length||(n=i),e.$option=i,e.$text=n,e.jOption=i,e.jText=n,c&&n.text(e.text),i};return{_Events:["draw","change","listDraw","listToggle","typeIn","scrollChange","select","optionsCreated"],_Handlers:{dom:{"change:Main.Select":g}},_Init:function(){var e=this._elems;this._Options=[],this._Value=null,this._State={opened:!1,typeIn:"",typeInTimer:null,highlighted:-1},this._onKeyPress=this._onKeyPress.bind(this),this._onKeyDown=this._onKeyDown.bind(this),e.Select.hide(),this._Dropdown=this._initDropdown(),this._Dropdown.on("toggle",m.bind(this)),n.call(this),this._opts.preventChangeInit?this._createOptions(!1,e.Select.val()):this._createOptions(),this.render(),this._trigger("draw"),e.optionsCont.on(this._opts.changeEvent,_.bind(this)),t(g.bind(this))},addOptions:function(t){var e=this._elems.Select,i=this._Value;return a(t,function(t){var e=t;return o(t,"string")&&(e={text:t,value:t}),e.selected=e.defaultSelected=s(i,e.value),e},e.get(0)),this._Value=null,this._createOptions(!0,i),this.render(),f(this._Value,i)||e.trigger("change"),this},disable:function(t){var e=this._Properties,s=this._elems.Select.get(0);return"boolean"!=typeof t&&(t=!0),e!==t&&(e.disabled=s.disabled=t,this._Dropdown.Disable(t),this.render()),this},Disable:function(){return this.disable.apply(this,Array.from(arguments))},highlightOption:function(t,e){var s=this._State;if(!t)return void(s.highlighted=-1);if(s.opened){s.highlighted=t.index;var i=this._opts.cssClss.optionProps,n=this._elems,o=n.optionsCont,l=i.highlighted||i.selected,r=o.get(0),a=t.$option.get(0);n.Options.removeClass(l),l&&t.$option.addClass(l);var c=a.offsetTop,u=a.offsetHeight,h=r.offsetHeight,d=r.scrollTop,p=c+u>d+h;(r.scrollHeight>h&&p||c<d)&&(!0!==e&&p&&(c-=h-u),o.scrollTop(c),this._trigger("scrollChange",c),t.$option.trigger("scrollChange"))}},getSelectedOptions:function(){return(this._Options||[]).filter(function(t){return t.selected})},drawOptionsList:function(){var t=this._elems;t.optionsCont.html(t.Options),this._trigger("listDraw")},toggleOption:function(t){var e=this._Properties.multiple,s=this._Options[t];return s&&!s.disabled&&(!e&&s.selected||(p.call(this,s),this._elems.Select.trigger("change")),e||this.toggleDropdown(!1),this._State.highlighted=t),this},toggleOptState:function(t,e,i,n){var l,r,a,c=this._Options,u=this._Properties.multiple,h=o(t,"function"),f=!o(e,"boolean"),g=null==i,_=h?t:null,m=!1,v=!1,S=null;n=!1!==n;for(var b=0;b<c.length;b++)l=c[b],a=l.value,r=h?_.call(this,l):s(t,a)?!(f?l.disabled:e):l.disabled,!r&&null===S&&g&&(S=b),l.disabled!=r&&(m=!0,l.disabled=l.elOption.disabled=r,!0===r&&l.selected&&(v=!0,u&&p.call(this,l,!1,n)),d.call(this,l));return u||!v||isNaN(S)||p.call(this,c[S],!0,n),m&&(v&&n&&this._elems.Select.trigger("change"),this.render()),this},toggleDropdown:function(t){return this._Dropdown.Toggle(t),this},setValue:function(t,e,i){var n,o,l=this._State,r=this._Options,a=!1,c=!1;if(i=!1!==i,Array.isArray(t)&&1===t.length&&(t=t.shift()),!f(t,this._Value)){for(var u=0;u<r.length;u++)n=r[u],o=n.selected,s(t,n.value)?(a=!0,p.call(this,n,!0,i),l.highlighted=u,o||(c=!0)):e&&o&&(p.call(this,n,!1,i),c=!0,a=!0);a&&(c&&i&&this._elems.Select.trigger("change"),this.render())}return this},getValue:function(){return this._elems.Select.val()},setOptions:function(t){var e=this._elems;return e.Options=null,e.Select.empty(),this.addOptions(t),this},refresh:function(){return this._elems.Options=null,this._elems.optionsCont.empty(),n.call(this),this._createOptions(),this.render(),this},render:function(){var t=this._Properties,e=t.defText,s=this._elems,i=this._opts.cssClss.disabledView;null===this._Value||e&&""===this._Value||(e=t.selText)||(e=this.getSelectedOptions().map(function(t){return t.text}).join(", ")),s.viewText&&s.viewText.text(e||""),i&&s.View.toggleClass(i,t.disabled)},_createOptions:function(e,i){var n=this._elems,l=this._opts,r=l.Attrs.selectableOptGroup,c=this._State,h=n.Select.get(0),f=n.Options,g=!(f&&f.length>0),_=this._Options=[],m=this._optGroups=[],v=[],b=null;o(l.processOptions,"function")&&l.processOptions.call(this,h),Array.from(h.options).forEach(function(t,e){var s,i,n=t.parentNode,o=n!==h,c={elOption:t,inOptgroup:o};if(o&&b!==n){b=n;var d=b.getAttribute(r.value);if(d){var p=b.hasAttribute&&b.hasAttribute(r.selected)||null!==h.getAttribute(r.selected);i=a([{text:n.label,value:d,selected:p}]).options[0],i.parentNode.removeChild(i),i.selected=i.defaultSelected=p,b.insertBefore(i,t),t=i,c.inOptgroup=!1}else if(g){var w={text:n.label,disabled:!0,isOptGroupHead:!0};S(w,l),v.push(w.$option.addClass(l.cssClss.optgroupHead).get(0)),m.push(w)}}c.isOptGroupHead=!!i,c.optGroupIndex=m.length-1,_.push(c),u.forEach(function(e){c[e]=t[e]}),g||(s=f.eq(e)),s&&s.length?(c.$option=s,c.jOption=s):(s=S(c,l),v.push(s.get(0))),s.attr(l.Attrs.optIndex,c.index),c.isOptGroupHead&&s.addClass(l.cssClss.optgroupHeadSelectable)}),_.forEach(function(t,e){t.elOption.selected?(c.highlighted=e,p.call(this,t,!0,!(void 0!==i&&s(t.value,i)))):d.call(this,t)}.bind(this)),v.length>0&&(n.Options=t(f?f.toArray().concat(v):v)),g&&(!0!==e&&l.deferDraw||this.drawOptionsList()),0===_.length&&this.Disable(),this._trigger("optionsCreated",this._Options)},_getActiveOptions:function(){return this._Options},_getOptionByValue:function(t){var e=null;return this._Options.some(function(s){var i=s.value===t;return i&&(e=s),i}),e},_initDropdown:function(){return c("Dropdown",this._elems.Parent,{cssSels:{Main:{Button:this._opts.cssSels.Main.View}},cssClss:{showDropdown:this._opts.cssClss.activeView}})},_onKeyDown:function(){var t=[38,40,13],e=function(t,e,s){s="number"==typeof s?s:this._State.highlighted;var i=t[0]||null,n=-1!==s?this._Options[s]:null,o=n?t.indexOf(n):-1;if(-1!==o){var l=e?o+1:o-1,r=t.length-1;l=l<0?r:l>r?0:l,i=t[l]}return i};return function(s){var i=this._State,n=s.keyCode;if(i.opened&&-1!==t.indexOf(n)){s.preventDefault();var o=i.highlighted,l=38===n,r=this._getActiveOptions();if(l||40===n){if(null!==i.typeInTimer)return;i.typeInTimer=setTimeout(v.bind(this),70);var a=e.call(this,r,!l);a&&(this.highlightOption(a),this._trigger("typeIn",a))}else 13===n&&o>-1&&-1!==r.indexOf(this._Options[o])&&this.toggleOption(o)}}}(),_onKeyPress:function(t){var e=this._State,s=String.fromCharCode(t.keyCode||t.charCode);if(e.opened&&s){e.typeIn+=s;var i,n=this._Options,o=e.typeIn;clearTimeout(e.typeInTimer),e.typeInTimer=setTimeout(v.bind(this),400);for(var l=0;l<n.length&&(i=n[l],0!==i.text.toLowerCase().indexOf(o));l++)i=null;this.highlightOption(i,!0),i?(this._trigger("typeIn",i),e.highlighted=l):v.call(this)}},_toggleKeyboardHandlers:function(s){var n=this._State;if("boolean"==typeof s&&n.areHandlersAdded!==s){n.areHandlersAdded=s,i||(i=t(e.document));var o=s?"on":"off";i[o]("keypress",this._onKeyPress),i[o]("keydown",this._onKeyDown)}}}}(),d,null,"CustomSelect");s.Modules.CustomSelect=p,s.Modules.customSelect=p,t.fn.goCustomSelect=function(){e.DEBUG&&e.console.warn("Обнаружено старое подключение компонента.\t\t\t\tНеобходимо срочно сменить его на обычное, так как скоро старое перестанет работать");return function(e){return this.each(function(){var s=t(this),i=s.data("CustomSelect")||s.data("cSelectObj");i instanceof p||(i=p(e,t(this)),s.data("CustomSelect",i),s.data("cSelectObj",i))})}}()}(window.jQuery,window,window.ru.mail.cpf)},6:function(t,e){!function(t){var e=t.Basic.moduleOpts.setParams,s=t.Tools.getTemplate;e("CustomSelect",{options:{_plugins:null,_Handlers:{listToggle:function(e){if(e){t.Tools.initModules(this._Elems.Dropdown).Resize()}}},cssSels:{Main:{Select:"select",View:".js-select__selected",viewText:".js-select__selected__option",Dropdown:".js-select__options",optionsCont:".js-select__options__list"},optElem:".js-select__options__item"},cssClss:{optionProps:{disabled:"",selected:"suggest__item_active",inOptgroup:""},optgroupHead:"suggest__item-title suggest__item_disabled",optgroupHeadSelectable:"",disabledView:"dropdown__field_disabled",activeView:"dropdown_active"},Templates:{Option:s("ct-dropdown.xml")}}}),e("CustomSelect.Activity",{options:{processOptions:null}})}(window.ru.mail.cpf)},601:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(602);s.n(i),s(100),s(15)},602:function(t,e){!function(t,e,s){s.preInitReadyPromise.then(function(){t(".js-authorized").each(function(){t(this).on("click",function(t){"undefined"!=typeof __PH&&(__PH.activeUser()||(__PH.authForm.show({successPage:this.href}),t.preventDefault()))})})})}(window.jQuery||window.$f,window,window.ru.mail.cpf)},7:function(t,e){!function(t,e){var s=e.Basic.moduleOpts,i={optText:"data-text",optClass:"data-class"},n={};n[i.optClass]="input__data__value_default";var o=e.Tools.Forms.Select.createSelect;s.set("CustomSelect",null,{processOptions:function(t){var e=t.hasAttribute&&t.hasAttribute("data-defval")||null!==t.getAttributeNode("data-defval"),s=e?t.getAttribute("data-defval"):"";if(e&&(!e||s)){var i,l,r=t.children[0],a=t.options.length>0,c=a&&r.innerText===s&&""===r.getAttribute("value"),u=!1;if(a)for(var h=t.options.length;h--;)if(u=t.options[h].defaultSelected){l=h+1;break}i=o([{text:s,value:"",selected:!u,_attrs:n}]).options[0],c||(a?(t.insertBefore(i,r),t.selectedIndex=l||0):t.appendChild(i)),!a||c&&t.options.length}}})}(window,window.ru.mail.cpf)},8:function(t,e){!function(t){"use strict";t.Basic.moduleOpts.setParams("CustomScroll",{options:{cssSels:{Main:{scrollBar:".js-scrollbar",scrollView:".js-scrollable__view"},scrollBar:{scrollThumb:".js-scrollbar__track",scrollThumbBody:".js-scrollbar__track__drag"},scrollThumbSize:".js-scrollbar__track__drag__point"}}})}(window.ru.mail.cpf)},9:function(t,e){!function(t,e){"use strict";var s=e.Basic.typeOf,i=e.Basic.Extend,n=["setSelectionRange","createTextRange","createRange"],o=!!(n[0]in document.createElement("input")),l=function(){return o?function(){return[this.selectionStart,this.selectionEnd]}:function(){var t=document.selection,e="INPUT"===this.tagName;if(t&&n[2]in t){var s=t[n[2]](),i=(e?this.value:this.text).length,o=s.duplicate();s.parentElement()!==this&&this.focus();var l=i-o.moveEnd("character",i);return[l-s.text.length,l]}}}(),r=function(){var t=function(t){var e=parseInt(t[0])||0,s=parseInt(t[1]);return isNaN(s)?[e,e]:[e,s]};return o?function(){var e=Array.prototype.slice.call(arguments);this[n[0]].apply(this,t(e))}:function(){var e=Array.prototype.slice.call(arguments);if(n[1]in this){var s=this[n[1]](),i=t(e);s.collapse(!0),s.moveEnd("character",i[1]),s.moveStart("character",i[0]),s.select()}}}(),a=function(){var e=function(e,i){if(e){var n=document.createElement("option"),o=e._attrs;if(s(o,"object")){delete e._attrs;for(var l in o)o.hasOwnProperty(l)&&n.setAttribute(l,o[l])}for(var r in e)if(e.hasOwnProperty(r)&&r in n)try{n[r]=e[r]}catch(e){t.DEBUG&&t.console.log('Unable to set HTMLOptionElement property "'+r+'"')}"text"in e||(n.text=n.title||i.getAttribute("data-title")),""===n.innerHTML&&(n.innerHTML=n.text),i.appendChild(n)}};return function(t,i,n){var o,l,r,a=s(i,"function"),c=0;for(n=n||document.createElement("select");o=t[c++];)if(r=null,a&&(o=i(o)),Array.isArray(l=o.values)){s(o.title,"string")&&(r=document.createElement("optgroup"),r.setAttribute("title",o.title),r.setAttribute("label",o.title),o.value&&r.setAttribute("data-value",o.value),o.selected&&r.setAttribute("data-selected",""),n.appendChild(r));for(var u=0;u<l.length;u++)o=l[u],a&&(o=i(o)),e(o,r||n)}else s(o.value,"undefined")||e(o,n);return n}}();i(!0,t.getNameSpace("Tools.Forms",e),{Text:{getSelection:l,setSelection:r},Select:{createSelect:a}})}(window,window.ru.mail.cpf)}})});
//# sourceMappingURL=page-prediction-index.js.map