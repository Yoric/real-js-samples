/*
Copyright 2014, KISSY v1.44
MIT Licensed
build time: May 22 12:16
*/
KISSY.add("combobox/combobox-xtpl",[],function(){return function(f){var a,d=this;a=this.config.utils;var j=a.runBlockCommand,k=a.renderOutput,g=a.getProperty,h=a.runInlineCommand,e=a.getPropertyOrRunCommand;a='<div id="ks-combobox-invalid-el-';var b=e(d,f,{},"id",0,1);a+=k(b,!0);a+='"\n     class="';var b={},c=[];c.push("invalid-el");b.params=c;b=h(d,f,b,"getBaseCssClasses",2);a+=k(b,!0);a+='">\n    <div class="';b={};c=[];c.push("invalid-inner");b.params=c;b=h(d,f,b,"getBaseCssClasses",3);a+=k(b,
!0);a+='"></div>\n</div>\n\n';var b={},c=[],m=g(d,f,"hasTrigger",0,6);c.push(m);b.params=c;b.fn=function(b){var a;a='\n<div id="ks-combobox-trigger-';var c=e(d,b,{},"id",0,7);a+=k(c,!0);a+='"\n     class="';var c={},g=[];g.push("trigger");c.params=g;c=h(d,b,c,"getBaseCssClasses",8);a+=k(c,!0);a+='">\n    <div class="';c={};g=[];g.push("trigger-inner");c.params=g;b=h(d,b,c,"getBaseCssClasses",9);a+=k(b,!0);return a+'">&#x25BC;</div>\n</div>\n'};a+=j(d,f,b,"if",6);a+='\n\n<div class="';b={};c=[];c.push("input-wrap");
b.params=c;b=h(d,f,b,"getBaseCssClasses",13);a+=k(b,!0);a+='">\n\n    <input id="ks-combobox-input-';b=e(d,f,{},"id",0,15);a+=k(b,!0);a+='"\n           aria-haspopup="true"\n           aria-autocomplete="list"\n           aria-haspopup="true"\n           role="autocomplete"\n           aria-expanded="false"\n\n    ';b={};c=[];m=g(d,f,"disabled",0,22);c.push(m);b.params=c;b.fn=function(){return"\n    disabled\n    "};a+=j(d,f,b,"if",22);a+='\n\n    autocomplete="off"\n    class="';b={};c=[];c.push("input");
b.params=c;b=h(d,f,b,"getBaseCssClasses",27);a+=k(b,!0);a+='"\n\n    value="';b=e(d,f,{},"value",0,29);a+=k(b,!0);a+='"\n    />\n\n\n    <label id="ks-combobox-placeholder-';b=e(d,f,{},"id",0,33);a+=k(b,!0);a+='"\n           for="ks-combobox-input-';b=e(d,f,{},"id",0,34);a+=k(b,!0);a+="\"\n            style='display:";b={};c=[];g=g(d,f,"value",0,35);c.push(g);b.params=c;b.fn=function(){return"none"};b.inverse=function(){return"block"};a+=j(d,f,b,"if",35);a+=";'\n    class=\"";j={};g=[];g.push("placeholder");
j.params=g;j=h(d,f,j,"getBaseCssClasses",36);a+=k(j,!0);a+='">\n    ';f=e(d,f,{},"placeholder",0,37);a+=k(f,!0);return a+"\n    </label>\n</div>\n"}});
KISSY.add("combobox/render",["component/control","./combobox-xtpl"],function(f,a){var d=a("component/control"),j=a("./combobox-xtpl");return d.getDefaultRender().extend({beforeCreateDom:function(a,d){f.mix(d,{input:"#ks-combobox-input-{id}",trigger:"#ks-combobox-trigger-{id}",invalidEl:"#ks-combobox-invalid-el-{id}",placeholderEl:"#ks-combobox-placeholder-{id}"})},getKeyEventTarget:function(){return this.control.get("input")},_onSetCollapsed:function(a){this.control.get("input").attr("aria-expanded",
!a)},_onSetDisabled:function(a,d){this.callSuper(a,d);this.control.get("input").attr("disabled",a)}},{ATTRS:{contentTpl:{value:j}},HTML_PARSER:{value:function(a){return a.one("."+this.getBaseCssClass("input")).val()},input:function(a){return a.one("."+this.getBaseCssClass("input"))},trigger:function(a){return a.one("."+this.getBaseCssClass("trigger"))},invalidEl:function(a){return a.one("."+this.getBaseCssClass("invalid-el"))},placeholderEl:function(a){return a.one("."+this.getBaseCssClass("placeholder"))}}})});
KISSY.add("combobox/control",["node","component/control","./render","menu"],function(f,a){function d(a){for(var b=0;b<a.length;b++)if(!a[b].get("disabled"))return a[b];return null}function j(){c(this)}function k(){var a=this;setTimeout(function(){m(a)},0)}function g(){this.focus();m(this)}function h(){this.setValueFromAutocomplete(this.getValueForAutocomplete(),{force:1})}function e(a){a=a.target;a.isMenuItem&&(a=a.get("textContent"),this.setValueFromAutocomplete(a),this._savedValue=a,this.set("collapsed",
!0))}function b(a,b){var c=a.$el,e=a.view.getBaseCssClasses("invalid"),d=a.get("invalidEl");b?(c.addClass(e),d.attr("title",b),d.show()):(c.removeClass(e),d.hide())}function c(a){a._focusoutDismissTimer||(a._focusoutDismissTimer=setTimeout(function(){a._focusoutDismissTimer&&a.set("collapsed",!0)},50))}function m(a){var b=a._focusoutDismissTimer;b&&(clearTimeout(b),a._focusoutDismissTimer=null)}function s(a){this.set("value",a.newVal,{data:{causedByTimer:1}})}function i(a){var b,c=[],e,d,c=this.get("menu"),
a=this.normalizeData(a);c.removeChildren(!0);(d=c.get("highlightedItem"))&&d.set("highlighted",!1);if(a&&a.length){for(d=0;d<a.length;d++)b=a[d],c.addChild(b);c=c.get("children");a=this.getValueForAutocomplete();if(this.get("highlightMatchItem"))for(d=0;d<c.length;d++)if(c[d].get("textContent")===a){c[d].set("highlighted",!0);e=!0;break}if(!e&&this.get("autoHighlightFirst"))for(d=0;d<c.length;d++)if(!c[d].get("disabled")){c[d].set("highlighted",!0);break}this.set("collapsed",!1);this.fire("afterRenderData")}else this.set("collapsed",
!0)}var t=a("node"),p=a("component/control"),o=a("./render");a("menu");var l=t.KeyCode;return p.extend([],{initializer:function(){this.publish("afterRenderData",{bubbles:!1})},_savedValue:null,normalizeData:function(a){var b,c,d;if(a&&a.length){a=a.slice(0,this.get("maxItemCount"));b=this.get("format")?this.get("format").call(this,this.getValueForAutocomplete(),a):[];for(d=0;d<a.length;d++)c=a[d],b[d]=f.mix({content:c,textContent:c,value:c},b[d])}return b},bindUI:function(){var a=this;a.get("input").on("valuechange",
s,a);a.on("click",e,a);a.get("menu").onRendered(function(b){var c=a.get("input"),d=b.get("el"),b=b.get("contentEl");c.attr("aria-owns",d.attr("id"));d.on("focusout",j,a);d.on("focusin",k,a);b.on("mouseover",g,a);b.on("mousedown",h,a)})},destructor:function(){this.get("menu").destroy()},getValueForAutocomplete:function(){return this.get("value")},setValueFromAutocomplete:function(a,b){this.set("value",a,b)},_onSetValue:function(a,b){var c;b.causedByTimer?(c=this.getValueForAutocomplete(),void 0===
c?this.set("collapsed",!0):(this._savedValue=c,this.sendRequest(c))):this.get("input").val(a)},handleFocusInternal:function(){var a;m(this);this.get("invalidEl")&&b(this,!1);(a=this.get("placeholderEl"))&&a.hide()},handleBlurInternal:function(a){var d=this,e=d.get("placeholderEl");d.callSuper(a);c(d);d.get("invalidEl")&&d.validate(function(a,c){a?!d.get("focused")&&c===d.get("value")&&b(d,a):b(d,!1)});e&&!d.get("value")&&e.show()},handleMouseDownInternal:function(a){var b,c;this.callSuper(a);b=a.target;
if((c=this.get("trigger"))&&(c[0]===b||c.contains(b)))this.get("collapsed")?(this.focus(),this.sendRequest("")):this.set("collapsed",!0),a.preventDefault()},handleKeyDownInternal:function(a){var b,c=a.keyCode,e,g,h=this.get("menu");this.get("input");b=this.get("updateInputOnDownUp");if(h.get("visible")){e=h.get("highlightedItem");if(b&&e&&(g=h.get("children"),c===l.DOWN&&e===d(g.concat().reverse())||c===l.UP&&e===d(g)))return this.setValueFromAutocomplete(this._savedValue),e.set("highlighted",!1),
!0;g=h.handleKeyDownInternal(a);e=h.get("highlightedItem");if(c===l.ESC)return this.set("collapsed",!0),b&&this.setValueFromAutocomplete(this._savedValue),!0;b&&f.inArray(c,[l.DOWN,l.UP])&&this.setValueFromAutocomplete(e.get("textContent"));return c===l.TAB&&e&&(e.handleClickInternal(a),this.get("multiple"))?!0:g}if(c===l.DOWN||c===l.UP)if(a=this.getValueForAutocomplete(),void 0!==a)return this.sendRequest(a),!0},validate:function(a){var b=this.get("validator"),c=this.getValueForAutocomplete();b?
b(c,function(b){a(b,c)}):a(!1,c)},sendRequest:function(a){this.get("dataSource").fetchData(a,i,this)},_onSetCollapsed:function(a){var b=this.$el,c=this.get("menu");a?c.hide():(m(this),c.get("visible")||(this.get("matchElWidth")&&(c.render(),a=c.get("el"),a=(parseInt(a.css("borderLeftWidth"))||0)+(parseInt(a.css("borderRightWidth"))||0),c.set("width",b[0].offsetWidth-a)),c.show()))}},{ATTRS:{input:{},value:{value:"",sync:0,view:1},trigger:{},placeholder:{view:1},placeholderEl:{},validator:{},invalidEl:{},
allowTextSelection:{value:!0},hasTrigger:{value:!0,view:1},menu:{value:{},getter:function(a){a.isControl||(a.xclass=a.xclass||"popupmenu",a=this.createComponent(a),this.setInternal("menu",a));return a},setter:function(a){if(a.isControl){a.setInternal("parent",this);var b={node:this.$el,points:["bl","tl"],overflow:{adjustX:1,adjustY:1}};f.mix(a.get("align"),b,!1)}}},collapsed:{view:1,value:!0},dataSource:{},maxItemCount:{value:99999},matchElWidth:{value:!0},format:{},updateInputOnDownUp:{value:!0},
autoHighlightFirst:{},highlightMatchItem:{value:!0},xrender:{value:o}},xclass:"combobox"})});
KISSY.add("combobox/cursor",["node"],function(f,a){function d(a){var b=g;b||(b=j(k));"textarea"===""+a[0].type.toLowerCase()?b.css("width",a.css("width")):b.css("width",9999);f.each(h,function(c){b.css(c,a.css(c))});g||b.insertBefore(a[0].ownerDocument.body.firstChild);return g=b}var j=a("node").all,k='<div style="z-index:-9999;overflow:hidden;position: fixed;left:-9999px;top:-9999px;opacity:0;white-space:pre-wrap;word-wrap:break-word;"></div>',g,h="paddingLeft,paddingTop,paddingBottom,paddingRight,marginLeft,marginTop,marginBottom,marginRight,borderLeftStyle,borderTopStyle,borderBottomStyle,borderRightStyle,borderLeftWidth,borderTopWidth,borderBottomWidth,borderRightWidth,line-height,outline,height,fontFamily,fontSize,fontWeight,fontVariant,fontStyle".split(",");
return function(a){var b=j(a),a=b[0],c=a.ownerDocument,g=j(c),h=a.scrollTop,i=a.scrollLeft;if(c.selection)return a=c.selection.createRange(),{left:a.boundingLeft+i+g.scrollLeft(),top:a.boundingTop+h+a.boundingHeight+g.scrollTop()};g=b.offset();if("textarea"!==a.type)return g.top+=a.offsetHeight,g;c=d(b);b=a.selectionStart;c.html(f.escapeHtml(a.value.substring(0,b-1))+"<span>x</span>");c.offset(g);g=c.last();a=g.offset();a.top+=g.height();0<b&&(a.left+=g.width());a.top-=h;a.left-=i;return a}});
KISSY.add("combobox/multi-value-combobox",["./cursor","./control"],function(f,a){function d(a,c){return c&&-1!==a.indexOf(c)}function j(a){a.newVal&&a.target===this.get("menu")&&this.alignWithCursor()}function k(a){var c=a.get("input"),e=a.get("value"),f=[],i=[],k=a.get("literal"),j=a.get("separator"),a=a.get("separatorType"),o=!1,l=a!==g,c=c.prop("selectionStart"),q,n,r=-1;for(q=0;q<e.length;q++)(n=e.charAt(q),k&&n===k&&(o=!o),o)?i.push(n):(q===c&&(r=f.length),l&&h.test(n))?(i.length&&f.push(i.join("")),
i=[],i.push(n)):d(j,n)?a===g?(i.push(n),i.length&&f.push(i.join("")),i=[]):(i.length&&f.push(i.join("")),i=[],i.push(n)):i.push(n);i.length&&f.push(i.join(""));f.length||f.push("");-1===r&&(a===g&&d(j,n)&&f.push(""),r=f.length-1);return{tokens:f,cursorPosition:c,tokenIndex:r}}var g="suffix",h=/\s|\xa0/,e=a("./cursor");return a("./control").extend({syncUI:function(){var a;this.get("alignWithCursor")&&(a=this.get("menu"),a.setInternal("align",null),a.on("beforeVisibleChange",j,this))},getValueForAutocomplete:function(){var a=
k(this),c=a.tokens,h=a.tokenIndex,a=this.get("separator"),f=this.get("separatorType"),c=c[h],h=c.length-1;if(f!==g)if(d(a,c.charAt(0)))c=c.slice(1);else return;else f===g&&d(a,c.charAt(h))&&(c=c.slice(0,h));return c},setValueFromAutocomplete:function(a,c){var f=this.get("input"),e=k(this),i=e.tokens,e=Math.max(0,e.tokenIndex),j=this.get("separator"),p;p=this.get("separatorType");var o=i[e+1]||"",l=i[e];if(p!==g){if(i[e]=l.charAt(0)+a,a&&(!o||!h.test(o.charAt(0))))i[e]+=" "}else i[e]=a,p=l.length-
1,d(j,l.charAt(p))?i[e]+=l.charAt(p):1===j.length&&(i[e]+=j);e=i.slice(0,e+1).join("").length;this.set("value",i.join(""),c);f.prop("selectionStart",e);f.prop("selectionEnd",e)},alignWithCursor:function(){var a=this.get("menu"),c;c=this.get("input");c=e(c);a.move(c.left,c.top)}},{ATTRS:{separator:{value:",;"},separatorType:{value:g},literal:{value:'"'},alignWithCursor:{}},xclass:"multi-value-combobox"})});
KISSY.add("combobox/filter-select",["./control"],function(f,a,d,j){f=a("./control");j.exports=f.extend({validate:function(a){var d=this;d.callSuper(function(h,e){h?a(h,e):d.get("dataSource").fetchData(e,function(b){a:{if(b=d.normalizeData(b))for(var c=0;c<b.length;c++)if(b[c].textContent===e){b=b[c];break a}b=!1}a(b?"":d.get("invalidMessage"),e,b)})})}},{ATTRS:{invalidMessage:{value:"invalid input"}}})});
KISSY.add("combobox/local-data-source",["attribute"],function(f,a){return a("attribute").extend({fetchData:function(a,f,k){var g=this.get("parse"),h=this.get("data"),h=g(a,h);f.call(k,h)}},{ATTRS:{data:{value:[]},parse:{value:function(a,j){var k=[],g=0;if(!a)return j;f.each(j,function(f){-1!==f.indexOf(a)&&k.push(f);g++});return k}}}})});
KISSY.add("combobox/remote-data-source",["io","attribute"],function(f,a){var d=a("io");return a("attribute").extend({fetchData:function(a,f,g){var h=this,e,b=h.get("paramName"),c=h.get("parse"),m=h.get("cache"),s=h.get("allowEmpty");h.caches=h.caches||{};h.io&&(h.io.abort(),h.io=null);if(!a&&!0!==s)return f.call(g,[]);if(m&&(e=h.caches[a]))return f.call(g,e);e=h.get("xhrCfg");e.data=e.data||{};e.data[b]=a;e.success=function(b){c&&(b=c(a,b));h.setInternal("data",b);m&&(h.caches[a]=b);f.call(g,b)};
h.io=d(e)}},{ATTRS:{paramName:{value:"q"},allowEmpty:{},cache:{},parse:{},xhrCfg:{value:{}}}})});
KISSY.add("combobox",["combobox/control","combobox/multi-value-combobox","combobox/filter-select","combobox/local-data-source","combobox/remote-data-source"],function(f,a){var d=a("combobox/control"),j=a("combobox/multi-value-combobox"),k=a("combobox/filter-select"),g=a("combobox/local-data-source"),h=a("combobox/remote-data-source");d.LocalDataSource=g;d.RemoteDataSource=h;d.FilterSelect=k;d.MultiValueComboBox=j;return d});