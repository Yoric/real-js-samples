(this.webpackJsonp=this.webpackJsonp||[]).push([[38],{1020:function(t,e,n){"use strict";n(37),n(97);var o=n(5),r=n(1),l=Object(r.f)("cookie.key.dealerid"),c=new Date(Object(o.a)().add(60,"day").toDate()).toUTCString();e.a={data:function(){return{cookiekey:l,expires:c}},mounted:function(){var t=this,e=this.$route.query.dealerid,n=void 0===e?null:e;n&&/\d+/.test(n)&&n.length<=5&&(document.cookie="".concat(l,"=").concat(n,"; path=/; expires=").concat(c)),this.$matilda.init(this.positionId||null);var o=this.$route.hash;o&&o.match(/^#.+$/)&&this.$nextTick(function(){var e=o.replace(/^#/,"");document.getElementById(e)&&t.$scrollTo(o)})},asyncData:function(t){return{isMobile:t.userAgent.isMobile,isTablet:t.userAgent.isTablet,isYJApp:t.userAgent.isYJApp}},watchQuery:["is_approved"],layout:function(t){var e="pc-default";return t.userAgent.isMobile&&!t.userAgent.isTablet&&(e="sp-default"),e}}},1021:function(t,e,n){"use strict";var o={props:{items:{type:Array,required:!0},additionalUlClass:{type:Array},disp:{type:String,default:"grid"}},computed:{additionalClass:function(){var t=this.additionalUlClass||[],e="list"===this.disp?"item-container__row--disp-list":"item-container__row--disp-grid";return t.push(e),t}}},r=n(3),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item-container"},[n("ul",{staticClass:"item-container__row",class:t.additionalClass},t._l(t.items,function(e,o){return n("li",{staticClass:"item-container__item"},[t._t("default",null,{item:e,index:o})],2)}),0)])},[],!1,null,null,null);e.a=component.exports},1023:function(t,e,n){"use strict";n(19);var o={name:"atoms-font-icon-sp",props:{name:{type:String,required:!0},icon:{type:Boolean,default:!0}},computed:{className:function(){var t=[];return t.push("font-".concat(this.name)),this.icon&&t.push("icon"),t}},methods:{clickIcon:function(){this.$emit("clicked")}}},r=n(3),component=Object(r.a)(o,function(){var t=this.$createElement;return(this._self._c||t)("i",{class:this.className,on:{click:this.clickIcon}},[this._t("default")],2)},[],!1,null,null,null);e.a=component.exports},1027:function(t,e,n){"use strict";var o={name:"priceLabel",mixins:[n(1048).a]},r=n(3),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.showed?n("div",{staticClass:"price",class:{"price--discount":t.discounted}},[n("b",[t._v(t._s(t.displayPrice))]),t._v("円（税込）\n  "),t._t("default")],2):t._e()},[],!1,null,null,null);e.a=component.exports},1028:function(t,e,n){"use strict";var o=n(6),r=n(7);e.a={computed:Object(o.a)({},Object(r.e)(["isAutoPurchaseDisabled"]),{mylinks:function(){var t=[[{to:"/mypage",label:"マイページトップ"},{to:"/mypage/accounts",label:"お支払い方法の設定"}],[{to:"/mypage/coupon",label:"クーポンの管理"},{to:"/mypage/arrival-alerts",label:"続刊通知"}],[{to:"/mypage/purchase-list",label:"購入履歴"},{to:"/mypage/restore",label:"削除した本"}],[{to:"/mypage/review-list",label:"レビューの管理"}]];return this.isAutoPurchaseDisabled||t.push([{to:"/mypage/auto-purchase",label:"新刊自動購入"}]),t}})}},1029:function(t,e,n){"use strict";var o=n(38),r=n(1038),l={name:"cart-button",components:{fontIcon:o.a},props:{customClass:{type:String,default:""}},mixins:[r.a],computed:{btnClass:function(){return this.customClass?this.customClass:"btn btn--style-round"}}},c=n(3),component=Object(c.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{class:t.btnClass,attrs:{"data-testid":"cart-button"},on:{click:t.onClickCart}},[t._t("icon",[n("font-icon",{attrs:{icon:"",name:"bag"}},[t._v("カゴ")]),t.isCartAdded?n("span",{staticClass:"cart"},[t._v("カゴを見る")]):t._e()]),t._t("default",null,{isCartAdded:t.isCartAdded}),t.isDisabledBalloon?t._e():n("span",{staticClass:"balloon",style:t.balloonStyle,attrs:{"data-testid":"balloon"}},[t._v("\n    "+t._s(t.balloonText)+"\n  ")])],2)},[],!1,null,null,null);e.a=component.exports},1032:function(t,e,n){"use strict";n(60);var o={props:{total:Number,start:Number,results:Number,max:{type:Number,default:5},href:Function},computed:{current:function(){return Math.floor(this.start/this.results)+1},totalPages:function(){return Math.min(Math.ceil(this.total/this.results),Math.ceil(1e4/this.results))},pages:function(){for(var a=Math.max(this.current-this.max,0),t=Math.min(this.current+this.max,this.totalPages),e=[],i=a;i<t;i++)e.push(i+1);var n=e.indexOf(this.current),o=.5*this.max;return n<=.5*this.max?e.slice(0,this.max):e.length-n<.5*this.max?e.slice(-this.max):e.slice(Math.ceil(n-o),Math.ceil(n+o))}}},r=n(3),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.totalPages>1?n("div",{staticClass:"pagination"},[n("div",{staticClass:"pagination__inner"},[t.current>1?n("nuxt-link",{staticClass:"pagination__prev",attrs:{to:t.href(t.current-1)}},[n("i",{staticClass:"icon font-arrow-left"},[t._v("前へ")])]):t._e(),t._l(t.pages,function(e){return n("nuxt-link",{key:"pagination_"+e,staticClass:"pagination__num",class:{current:t.current===e},attrs:{to:t.href(e)}},[t._v(t._s(e))])}),t.current<t.totalPages?n("nuxt-link",{staticClass:"pagination__next",attrs:{to:t.href(t.current+1)}},[n("i",{staticClass:"icon font-arrow-right"},[t._v("次へ")])]):t._e()],2)]):t._e()},[],!1,null,null,null);e.a=component.exports},1033:function(t,e,n){"use strict";n(60);var o=n(38),r={props:{total:Number,start:Number,results:Number,max:{type:Number,default:5},href:Function},computed:{current:function(){return Math.floor(this.start/this.results)+1},totalPages:function(){return Math.min(Math.ceil(this.total/this.results),Math.ceil(1e4/this.results))},pages:function(){for(var a=Math.max(this.current-this.max,0),t=Math.min(this.current+this.max,this.totalPages),e=[],i=a;i<t;i++)e.push(i+1);var n=e.indexOf(this.current),o=.5*this.max;return n<=.5*this.max?e.slice(0,this.max):e.length-n<.5*this.max?e.slice(-this.max):e.slice(Math.ceil(n-o),Math.ceil(n+o))}},components:{fontIcon:o.a}},l=n(3),component=Object(l.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.totalPages>1?n("div",{staticClass:"pagination"},[n("div",{staticClass:"pagination__inner"},[t.current>1?n("nuxt-link",{staticClass:"pagination__prev",attrs:{to:t.href(t.current-1)}},[n("font-icon",{attrs:{name:"arrow-left"}})],1):t._e(),t._l(t.pages,function(e){return n("nuxt-link",{key:"pagination_"+e,staticClass:"pagination__num",class:{current:t.current===e},attrs:{to:t.href(e)}},[t._v(t._s(e))])}),t.current<t.totalPages?n("nuxt-link",{staticClass:"pagination__next",attrs:{to:t.href(t.current+1)}},[n("font-icon",{attrs:{name:"arrow-right"}})],1):t._e()],2)]):t._e()},[],!1,null,null,null);e.a=component.exports},1035:function(t,e,n){var content=n(1057);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("546f5150",content,!0,{sourceMap:!1})},1038:function(t,e,n){"use strict";n(9);var o=n(2),r=n(6),l=n(7),c=n(1),m=Object(c.p)("CART.PUBLICATION_TYPE"),d=Object(c.p)("CART.BASKET_TYPE");e.a={props:{bookCds:{type:Array},isSetItem:{type:Boolean,default:!1},isDisabledBalloon:{type:Boolean,default:!1}},data:function(){return{balloonText:"",isCartAddable:!0}},computed:Object(r.a)({},Object(l.c)("cart",{_isCartAdded:"isCartAdded",_isCartAddable:"isCartAddable"}),{isCartAdded:function(){return this._isCartAdded(this.bookCds)},balloonStyle:function(){return{transitionProperty:"opacity",transitionDuration:"350ms",opacity:this.balloonText?1:0}}}),methods:Object(r.a)({},Object(l.b)("cart",["addCartItem"]),{onClickCart:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(){var e,n,o=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.isCartAdded){t.next=3;break}return this.$router.push({path:"/cart"}),t.abrupt("return");case 3:if(this.balloonText="",e=this.bookCds.filter(function(t){return t}),this.isCartAddable=this._isCartAddable(e.length),t.prev=6,!this.isCartAddable){t.next=11;break}return n=e.map(function(t){return{bookCd:t,basketType:d.BASKET,publicationType:o.isSetItem?m.SET_PUBLICATION:m.PUBLICATION}}),t.next=11,this.addCartItem(n);case 11:this.showBalloon(),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(6),this.$logger.warn.bind({fileName:"mixins/components/common/addCart.js",line:78})(t.t0);case 17:case"end":return t.stop()}},t,this,[[6,14]])}));return function(){return t.apply(this,arguments)}}(),showBalloon:function(){var t=this;if(!this.isDisabledBalloon){var text=this.isCartAddable?"カゴに追加されました":"カゴがいっぱいです";this.balloonText=text,setTimeout(function(){t.balloonText=""},2e3)}}})}},1041:function(t,e,n){"use strict";n(60);var o=n(1);e.a={props:{basePoint:{type:Number,required:!0},campaignPoint:Number,rewardTpointsNormalTotal:Number,rewardTpointsSpecialTotal:Number},computed:{rate:function(){return this.campaignPoint>0?parseInt(this.campaignPoint/this.basePoint,10):0}},methods:{toLocaleString:o.q}}},1043:function(t,e,n){"use strict";var o={name:"my-link-pc",mixins:[n(1028).a]},r=n(3),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"columns my-link"},t._l(t.mylinks,function(e){return n("ul",{staticClass:"col col--quarter"},t._l(e,function(e){return n("li",[n("nuxt-link",{attrs:{to:e.to}},[t._v(t._s(e.label)),n("i",{staticClass:"icon font-arrow-right"})])],1)}),0)}),0)},[],!1,null,null,null);e.a=component.exports},1044:function(t,e,n){"use strict";var o=n(0),r={name:"my-link-sp",mixins:[n(1028).a],methods:{flatten:o.flatten}},l=n(3),component=Object(l.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-link"},[n("ul",t._l(t.flatten(t.mylinks),function(e){return n("li",{staticClass:"my-link__item"},[n("nuxt-link",{staticClass:"singlelink",attrs:{to:e.to}},[t._v("\n        "+t._s(e.label)),n("i",{staticClass:"icon font-arrow-right"})])],1)}),0)])},[],!1,null,null,null);e.a=component.exports},1045:function(t,e,n){"use strict";var o=n(1055),r=n(1029),l={mixins:[n(8).a],props:{publication:{type:Object,required:!0},type:{type:String,default:"tile"},isCartOnly:{type:Boolean,default:!1},isReadOnly:{type:Boolean,default:!1}},components:{cartButtonWithPriceBalloon:o.a,cartButton:r.a}},c=n(3),component=Object(c.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"book-item__actions"},[t.isBrowserFree(t.publication)?[n("a",{staticClass:"btn",on:{click:function(e){t.goViewer({publication:t.publication,type:t.staticValue("READ_TYPE.FREE")})}}},["list"===t.type?[n("i",{staticClass:"icon font-read"},[t._v("読む")])]:t._e(),"list"===t.type?n("strong",[t._v("無料")]):n("strong",[t._v("無料で読む")])],2)]:t.bookPurchased(t.publication)?[n("a",{staticClass:"btn",on:{click:function(e){t.goViewer({publication:t.publication,type:t.staticValue("READ_TYPE.PURCHASED")})}}},["tile"===t.type?[t._v("読む")]:[n("i",{staticClass:"icon font-read"},[t._v("読む")])]],2)]:[t.hasTrial(t.publication)&&!t.isCartOnly?[n("a",{staticClass:"btn",on:{click:function(e){t.goViewer({publication:t.publication,type:t.staticValue("READ_TYPE.TRIAL")})}}},["tile"===t.type?[t._v("試し読み")]:[n("i",{staticClass:"icon font-read"},[t._v("試し読み")])]],2)]:t._e(),t.isReadOnly?t._e():["tile"===t.type?[n("cart-button-with-price-balloon",{attrs:{bookCds:[t.bookCd(t.publication)],price:t.price(t.publication)||0,point:t.point(t.publication)||0,campaignPoint:t.campaignPoint(t.publication)}})]:[n("cart-button",{attrs:{bookCds:[t.bookCd(t.publication)],isSetItem:t.isSet(t.publication)}})]]]],2)},[],!1,null,null,null);e.a=component.exports},1046:function(t,e,n){"use strict";var o={name:"tpoint",mixins:[n(1041).a]},r=n(3),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"point",class:{"point--point-up":t.campaignPoint&&t.campaignPoint>t.basePoint}},[t.campaignPoint&&t.campaignPoint>t.basePoint?[n("strong",{attrs:{"data-testid":"campaignPoint"}},[n("b",[t._v(t._s(t.campaignPoint))]),t._v("pt")])]:[n("span",{attrs:{"data-testid":"basePoint"}},[n("b",[t._v(t._s(t.basePoint))]),t._v("pt")])],t._t("default")],2)},[],!1,null,null,null);e.a=component.exports},1047:function(t,e,n){"use strict";var o=n(98),r={name:"tpoint",mixins:[n(1041).a],components:{spriteIcon:o.a}},l=n(3),component=Object(l.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"point",class:{"point--point-up":t.campaignPoint&&t.campaignPoint>t.basePoint}},[t.campaignPoint&&t.campaignPoint>t.basePoint?[n("span",[n("b",[t._v(t._s(t.campaignPoint)+"pt")])])]:[n("span",[n("b",[t._v(t._s(t.basePoint)+"pt")])])]],2)},[],!1,null,null,null);e.a=component.exports},1048:function(t,e,n){"use strict";n(60);e.a={props:{normalPrice:Number,discountPrice:Number},computed:{showed:function(){return"number"==typeof this.normalPrice},discounted:function(){return"number"==typeof this.discountPrice&&this.normalPrice>this.discountPrice},price:function(){return this.discounted?this.discountPrice:this.normalPrice},displayPrice:function(){return this.formatPrice(this.price)},displayNormalPrice:function(){return this.formatPrice(this.normalPrice)},displayDiscountPrice:function(){return this.formatPrice(this.discountPrice)}},methods:{formatPrice:function(t){return Number(t).toLocaleString()}}}},1050:function(t,e,n){"use strict";var o=n(1053),r={mixins:[n(8).a],props:{publication:{type:Object,required:!0},type:{type:String,default:"tile"},isCartOnly:{type:Boolean,default:!1},isReadOnly:{type:Boolean,default:!1}},components:{cartButton:o.a}},l=n(3),component=Object(l.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"book-item__actions"},[n("div",{staticClass:"flexbox"},[t.isBrowserFree(t.publication)?[n("div",{staticClass:"flexbox__item"},[n("a",{staticClass:"btn",on:{click:function(e){t.goViewer({publication:t.publication,type:t.staticValue("READ_TYPE.FREE")})}}},["tile"===t.type?[n("strong",[t._v("無料で読む")])]:[n("i",{staticClass:"icon font-read"},[t._v("無料で読む")]),n("strong",[t._v("無料")])]],2)])]:t.bookPurchased(t.publication)?[n("div",{staticClass:"flexbox__item"},[n("a",{staticClass:"btn",on:{click:function(e){t.goViewer({publication:t.publication,type:t.staticValue("READ_TYPE.PURCHASED")})}}},["tile"===t.type?[t._v("読む")]:[n("i",{staticClass:"icon font-read"},[t._v("読む")])]],2)])]:[t.hasTrial(t.publication)&&!t.isCartOnly?[n("div",{staticClass:"flexbox__item"},[n("a",{staticClass:"btn",on:{click:function(e){t.goViewer({publication:t.publication,type:t.staticValue("READ_TYPE.TRIAL")})}}},["tile"===t.type?[t._v("試し読み")]:[n("i",{staticClass:"icon font-read"},[t._v("試し読み")])]],2)])]:t._e(),t.isReadOnly?t._e():[n("div",{staticClass:"flexbox__item"},[n("cart-button",{attrs:{bookCds:[t.bookCd(t.publication)],isSetItem:t.isSet(t.publication)}})],1)]]],2)])},[],!1,null,null,null);e.a=component.exports},1053:function(t,e,n){"use strict";var o=n(1023),r=n(1038),l={name:"cart-button",components:{fontIcon:o.a},mixins:[r.a]},c=n(3),component=Object(c.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("a",{staticClass:"btn",attrs:{"data-testid":"cart-button"},on:{click:t.onClickCart}},[t._t("icon",[n("font-icon",{attrs:{name:"bag"}}),t.isCartAdded?n("span",{staticClass:"cart"},[t._v("カゴを見る")]):t._e()]),t.isDisabledBalloon?t._e():n("div",{staticClass:"balloon",style:t.balloonStyle,attrs:{"data-testid":"balloon"}},[t._v(t._s(t.balloonText))])],2),t._t("default",null,{isCartAdded:t.isCartAdded})],2)},[],!1,null,null,null);e.a=component.exports},1055:function(t,e,n){"use strict";var o=n(6),r=(n(60),n(7)),l=n(98),c=n(1029),m={components:{spriteIcon:l.a,cartButton:c.a},props:{bookCds:{type:Array,required:!0},price:{type:Number,required:!0},point:{type:Number,required:!0},campaignPoint:Number},data:function(){return{showedBalloon:!1}},computed:Object(o.a)({},Object(r.c)("cart",{_isCartAdded:"isCartAdded"}),{isCartAdded:function(){return this._isCartAdded(this.bookCds)}}),methods:{showBalloon:function(){this.isCartAdded||(this.showedBalloon=!0)},hideBalloon:function(){this.showedBalloon=!1}}},d=(n(1056),n(3)),component=Object(d.a)(m,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("cart-button",{attrs:{bookCds:t.bookCds},nativeOn:{mouseover:function(e){return t.showBalloon(e)},mouseleave:function(e){return t.hideBalloon(e)}}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showedBalloon,expression:"showedBalloon"}],staticClass:"balloon balloon--hover"},[t._v("\n    税込"+t._s(t.price)+"円\n    "),n("br"),t._v("\n    "+t._s(t.campaignPoint||t.point)+"pt\n  ")])])},[],!1,null,null,null);e.a=component.exports},1056:function(t,e,n){"use strict";var o=n(1035);n.n(o).a},1057:function(t,e,n){(t.exports=n(61)(!1)).push([t.i,".balloon{pointer-events:none}",""])},1170:function(t,e,n){var content=n(1320);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("3f9047ca",content,!0,{sourceMap:!1})},1171:function(t,e,n){var content=n(1322);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("7048fc52",content,!0,{sourceMap:!1})},1172:function(t,e,n){var content=n(1324);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("cc6b3074",content,!0,{sourceMap:!1})},1173:function(t,e,n){var content=n(1326);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("252bd2c7",content,!0,{sourceMap:!1})},1319:function(t,e,n){"use strict";var o=n(1170);n.n(o).a},1320:function(t,e,n){(t.exports=n(61)(!1)).push([t.i,".zero__message[data-v-d58d46ae]{margin:30px auto 35px;text-align:center}",""])},1321:function(t,e,n){"use strict";var o=n(1171);n.n(o).a},1322:function(t,e,n){(t.exports=n(61)(!1)).push([t.i,".zero__message[data-v-40dd998e]{margin:30px auto 35px;text-align:center}",""])},1323:function(t,e,n){"use strict";var o=n(1172);n.n(o).a},1324:function(t,e,n){(t.exports=n(61)(!1)).push([t.i,".zero__message[data-v-bf261c9e]{margin:30px;text-align:center}",""])},1325:function(t,e,n){"use strict";var o=n(1173);n.n(o).a},1326:function(t,e,n){(t.exports=n(61)(!1)).push([t.i,".zero__message[data-v-9c303ed8]{margin:30px;text-align:center}",""])},1387:function(t,e,n){"use strict";n.r(e);n(9);var o=n(2),r=n(1021),l=n(1045),c=n(1033),m=n(1046),d=n(1027),_=n(8),f={mixins:[_.a],props:{publications:{type:Array,required:!0},pages:{type:Object}},components:{itemContainer:r.a,bookItemActions:l.a,pagination:c.a,tpoint:m.a,priceLabel:d.a}},h=(n(1319),n(3)),v=Object(h.a)(f,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.publications&&t.publications.length?n("div",{staticClass:"my-arrivals-book"},[n("item-container",{attrs:{items:t.publications,disp:"list"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"book-item book-item--disp-list book-item--btn-include-double"},[n("nuxt-link",{staticClass:"book-item__box",attrs:{to:t.bookUrl(e.item)}},[n("div",{staticClass:"book-item__cover"},[n("img",{attrs:{alt:t.publicationName(e.item),src:t.bookImageUrl(e.item)}})]),n("div",{staticClass:"book-item__caption"},[n("p",{staticClass:"book-item__title"},[t._v(t._s(t.truncatedTitleWithVolumeName(e.item,20,10)))]),t.publicationAuthor(e.item)?n("p",{staticClass:"book-item__author"},[t._v("\n              "+t._s(t.truncatedAuthor(e.item,20))+"\n            ")]):t._e(),void 0!==t.price(e.item)?n("div",{staticClass:"book-item__price"},[n("price-label",{attrs:{normalPrice:t.normalPrice(e.item),discountPrice:t.discountPrice(e.item)}})],1):t._e(),t.point(e.item)?n("div",{staticClass:"book-item__point"},[n("tpoint",{attrs:{basePoint:t.point(e.item),campaignPoint:t.campaignPoint(e.item)}})],1):t._e()])]),n("book-item-actions",{attrs:{publication:e.item,type:"list"}})],1)]}}],null,!1,2468462939)}),n("pagination",{attrs:{total:t.pages.total,start:t.pages.start,results:t.pages.results,href:t.pages.href}})],1):n("div",{staticClass:"my-arrivals-book"},[n("div",{staticClass:"zero__message"},[t._v("該当する作品はありませんでした。")])])},[],!1,null,"d58d46ae",null).exports,title=(n(60),n(25)),C=n(1),k={mixins:[_.a,title.a],props:{gotResponseData:{type:Boolean,default:!1},titles:{type:Array,required:!0},pages:{type:Object},total:{type:Number,default:0}},components:{itemContainer:r.a,pagination:c.a},methods:{toLocaleString:C.q,onClickDeleteBtn:function(t){this.$emit("onClickDeleteBtn",t)}}},y=(n(1321),Object(h.a)(k,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.titles&&t.titles.length?[n("div",{staticClass:"search-form"},[n("div",{staticClass:"search-header"},[n("span",{staticClass:"search-header__num"},[t._v(t._s(t.toLocaleString(t.total)))]),t._v("件\n      ")])]),n("div",{staticClass:"my-arrivals-serial"},[n("item-container",{attrs:{items:t.titles,disp:"list"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"book-item book-item--disp-list book-item--btn-include-single"},[n("nuxt-link",{staticClass:"book-item__box",attrs:{to:"/books/"+t.titleId(e.item)+"/"}},[n("div",{staticClass:"book-item__cover"},[n("img",{attrs:{alt:t.titleName(e.item),src:t.bookImageUrl(t.titlePublicationFirst(e.item))}})]),n("div",{staticClass:"book-item__caption"},[n("p",{staticClass:"book-item__count"},[t.titleIsCompleted(e.item)?n("b",{staticClass:"tagtxt tagtxt--info"},[t._v("完結")]):t._e(),t._v("\n                  "+t._s(t.titleTitlePublicationCount(e.item))+"冊\n                ")]),n("p",{staticClass:"book-item__title"},[t._v(t._s(t.truncatedTitleName(e.item,20)))]),t.titleAuthor(e.item)?n("p",{staticClass:"book-item__author"},[t._v("\n                  "+t._s(t.truncatedTitleAuthor(e.item,20))+"\n                ")]):t._e()])]),n("div",{staticClass:"book-item__actions"},[n("a",{attrs:{href:"#"},on:{click:function(n){n.preventDefault(),t.onClickDeleteBtn(t.titleId(e.item))}}},[t._v("登録解除")])])],1)]}}],null,!1,4155700492)}),n("pagination",{attrs:{total:t.pages.total,start:t.pages.start,results:t.pages.results,href:t.pages.href}})],1)]:[t.gotResponseData&&0===t.pages.results?n("div",{staticClass:"my-arrivals-serial"},[n("div",{staticClass:"zero__message"},[t._v("該当する作品はありませんでした。")])]):t._e()]],2)},[],!1,null,"40dd998e",null).exports),x=n(1043),P=n(6),T=n(7),A="mixins/components/pages/mypage/arrivalAlerts/onClickDeleteBtn",O=Object(C.f)("lockTime.base"),j={computed:Object(P.a)({},Object(T.c)("mypage/arrival-alerts",["notificationsPages","notificationsPublications","registeredTitlesTotal","registeredTitlesPages","registeredTitles","gotResponseData"]),Object(T.e)("mypage/arrival-alerts",["tab"])),methods:Object(P.a)({},Object(T.b)("mypage/arrival-alerts",["deleteRegisteredTitle"]),{onClickDeleteBtn:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.$lock.acquire(A,O)){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.next=5,this.deleteRegisteredTitle(e);case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(2),this.$logger.warn.bind({fileName:"mixins/components/pages/mypage/arrivalAlerts.js",line:36})(t.t0);case 10:return t.prev=10,this.$lock.release(A),t.finish(10);case 13:case"end":return t.stop()}},t,this,[[2,7,10,13]])}));return function(e){return t.apply(this,arguments)}}()})},B={mixins:[j],components:{notifications:v,registeredTitles:y,myLink:x.a}},w=Object(h.a)(B,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-my"},[n("div",{staticClass:"container"},[t._m(0),n("div",{staticClass:"my-header"},[n("div",{staticClass:"btn-group"},[n("nuxt-link",{staticClass:"btn",class:{"btn--current":"notifications"===t.tab},attrs:{to:"/mypage/arrival-alerts?tab=notifications"}},[t._v("発売した本")]),n("nuxt-link",{staticClass:"btn",class:{"btn--current":"registeredTitles"===t.tab},attrs:{to:"/mypage/arrival-alerts?tab=registeredTitles"}},[t._v("登録作品")])],1)]),"notifications"===t.tab?[n("notifications",{attrs:{publications:t.notificationsPublications,pages:t.notificationsPages}})]:"registeredTitles"===t.tab?[n("registered-titles",{attrs:{titles:t.registeredTitles,pages:t.registeredTitlesPages,total:t.registeredTitlesTotal,gotResponseData:t.gotResponseData},on:{onClickDeleteBtn:t.onClickDeleteBtn}})]:t._e(),n("my-link")],2)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"heading"},[e("h2",{staticClass:"heading__main"},[this._v("続刊通知")])])}],!1,null,null,null).exports,E=n(1047),D=n(504),N=n(1050),$=n(1032),I={mixins:[_.a],props:{publications:{type:Array,required:!0},pages:{type:Object}},components:{itemContainer:D.a,priceLabel:d.a,tpoint:E.a,bookItemActions:N.a,pagination:$.a}},R=(n(1323),Object(h.a)(I,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.publications&&t.publications.length?n("div",{staticClass:"my-arrivals-book"},[n("item-container",{attrs:{items:t.publications,disp:"list"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"book-item book-item--disp-list book-item--btn-include-double"},[n("nuxt-link",{staticClass:"book-item__box",attrs:{to:t.bookUrl(e.item)}},[n("div",{staticClass:"book-item__cover"},[n("img",{attrs:{alt:t.publicationName(e.item),src:t.bookImageUrl(e.item)}})]),n("div",{staticClass:"book-item__caption"},[n("p",{staticClass:"book-item__title"},[t._v(t._s(t.truncatedTitleWithVolumeName(e.item,18,10)))]),t.publicationAuthor(e.item)?n("p",{staticClass:"book-item__author"},[t._v("\n              "+t._s(t.truncatedAuthor(e.item,9))+"\n            ")]):t._e(),void 0!==t.normalPrice(e.item)?n("div",{staticClass:"book-item__price"},[n("price-label",{attrs:{normalPrice:t.normalPrice(e.item),discountPrice:t.discountPrice(e.item)}})],1):t._e(),t.point(e.item)?n("div",{staticClass:"book-item__point"},[n("tpoint",{attrs:{basePoint:t.point(e.item),campaignPoint:t.campaignPoint(e.item)}})],1):t._e()])]),n("book-item-actions",{attrs:{publication:e.item,type:"list"}})],1)]}}],null,!1,920191480)}),n("div",{staticClass:"container"},[n("div",{staticClass:"container__gutter"},[n("pagination",{attrs:{total:t.pages.total,start:t.pages.start,results:t.pages.results,href:t.pages.href}})],1)])],1):n("div",{staticClass:"my-arrivals-book"},[n("div",{staticClass:"zero__message"},[t._v("該当する作品はありませんでした。")])])},[],!1,null,"bf261c9e",null).exports),S={mixins:[_.a,title.a],props:{gotResponseData:{type:Boolean,default:!1},titles:{type:Array,required:!0},pages:{type:Object},total:{type:Number,default:0}},components:{itemContainer:D.a,pagination:$.a},methods:{toLocaleString:C.q,onClickDeleteBtn:function(t){this.$emit("onClickDeleteBtn",t)}}},M=(n(1325),{mixins:[j],components:{notifications:R,registeredTitles:Object(h.a)(S,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.titles&&t.titles.length?n("div",{staticClass:"my-arrivals-serial"},[n("div",{staticClass:"search-form"},[n("div",{staticClass:"container"},[n("div",{staticClass:"container__gutter"},[n("div",{staticClass:"search-header"},[n("span",{staticClass:"search-header__num"},[t._v(t._s(t.toLocaleString(t.total)))]),t._v("件\n        ")])])])]),n("item-container",{attrs:{items:t.titles,disp:"list"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"book-item book-item--disp-list book-item--btn-include-single"},[n("nuxt-link",{staticClass:"book-item__box",attrs:{to:"/books/"+t.titleId(e.item)+"/"}},[n("div",{staticClass:"book-item__cover"},[n("img",{attrs:{alt:t.titleName(e.item),src:t.bookImageUrl(t.titlePublicationFirst(e.item))}})]),n("div",{staticClass:"book-item__caption"},[n("p",{staticClass:"book-item__count"},[t.titleIsCompleted(e.item)?n("b",{staticClass:"tagtxt tagtxt--info"},[t._v("完結")]):t._e(),t._v("\n              "+t._s(t.titleTitlePublicationCount(e.item))+"冊\n            ")]),n("p",{staticClass:"book-item__title"},[t._v(t._s(t.truncatedTitleName(e.item,14)))]),t.titleAuthor(e.item)?n("p",{staticClass:"book-item__author"},[t._v("\n              "+t._s(t.truncatedTitleAuthor(e.item,14))+"\n            ")]):t._e()])]),n("div",{staticClass:"book-item__actions"},[n("a",{attrs:{href:"#"},on:{click:function(n){n.preventDefault(),t.onClickDeleteBtn(t.titleId(e.item))}}},[t._v("登録解除")])])],1)]}}],null,!1,102011084)}),n("div",{staticClass:"container"},[n("div",{staticClass:"container__gutter"},[n("pagination",{attrs:{total:t.pages.total,start:t.pages.start,results:t.pages.results,href:t.pages.href}})],1)])],1):n("div",{staticClass:"my-arrivals-serial"},[t.gotResponseData&&"0"===t.pages.results?n("div",{staticClass:"zero__message"},[t._v("該当する作品はありませんでした。")]):t._e()])},[],!1,null,"9c303ed8",null).exports,myLink:n(1044).a}}),L=Object(h.a)(M,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-my"},[n("div",{staticClass:"my-container"},[t._m(0),n("div",{staticClass:"my-header"},[n("div",{staticClass:"container"},[n("div",{staticClass:"container__gutter"},[n("div",{staticClass:"btn-group"},[n("nuxt-link",{staticClass:"btn",class:{"btn--current":"notifications"===t.tab},attrs:{to:"/mypage/arrival-alerts?tab=notifications"}},[t._v("発売した本")]),n("nuxt-link",{staticClass:"btn",class:{"btn--current":"registeredTitles"===t.tab},attrs:{to:"/mypage/arrival-alerts?tab=registeredTitles"}},[t._v("登録作品")])],1)])])]),"notifications"===t.tab?[n("notifications",{attrs:{publications:t.notificationsPublications,pages:t.notificationsPages}})]:"registeredTitles"===t.tab?[n("registered-titles",{attrs:{titles:t.registeredTitles,pages:t.registeredTitlesPages,total:t.registeredTitlesTotal,gotResponseData:t.gotResponseData},on:{onClickDeleteBtn:t.onClickDeleteBtn}})]:t._e(),n("my-link")],2)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"container__gutter"},[e("div",{staticClass:"heading"},[e("h2",{staticClass:"heading__main"},[this._v("続刊通知")])])])])}],!1,null,null,null).exports,U={mixins:[n(1020).a],components:{desktop:w,smartphone:L},watchQuery:["page","tab"],fetch:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(e){var n,o,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.store,o=e.redirect,r=e.query,n.state.user.isLogin){t.next=6;break}return t.next=4,Object(C.m)(e);case 4:t.next=15;break;case 6:return t.prev=6,t.next=9,n.dispatch("mypage/arrival-alerts/fetch",{query:r,isPage:!0});case 9:return t.abrupt("return",t.sent);case 12:t.prev=12,t.t0=t.catch(6),o("/error");case 15:case"end":return t.stop()}},t,null,[[6,12]])}));return function(e){return t.apply(this,arguments)}}()},V=Object(h.a)(U,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("no-ssr",[this.isMobile&&!this.isTablet?e("smartphone"):e("desktop")],1)],1)},[],!1,null,null,null);e.default=V.exports}}]);