(this.webpackJsonp=this.webpackJsonp||[]).push([[30],{1020:function(t,e,n){"use strict";n(37),n(97);var r=n(5),c=n(1),o=Object(c.f)("cookie.key.dealerid"),l=new Date(Object(r.a)().add(60,"day").toDate()).toUTCString();e.a={data:function(){return{cookiekey:o,expires:l}},mounted:function(){var t=this,e=this.$route.query.dealerid,n=void 0===e?null:e;n&&/\d+/.test(n)&&n.length<=5&&(document.cookie="".concat(o,"=").concat(n,"; path=/; expires=").concat(l)),this.$matilda.init(this.positionId||null);var r=this.$route.hash;r&&r.match(/^#.+$/)&&this.$nextTick(function(){var e=r.replace(/^#/,"");document.getElementById(e)&&t.$scrollTo(r)})},asyncData:function(t){return{isMobile:t.userAgent.isMobile,isTablet:t.userAgent.isTablet,isYJApp:t.userAgent.isYJApp}},watchQuery:["is_approved"],layout:function(t){var e="pc-default";return t.userAgent.isMobile&&!t.userAgent.isTablet&&(e="sp-default"),e}}},1402:function(t,e,n){"use strict";n.r(e);n(9);var r=n(2),c=n(6),o=n(7),l={mixins:[n(75).a],computed:Object(c.a)({},Object(o.c)("information/notice",["informations"]))},_={name:"information-notice-sp",mixins:[l],components:{}},m=n(3),d=Object(m.a)(_,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-news"},[t._m(0),n("div",{staticClass:"contents-list"},[n("div",{staticClass:"item-container"},[n("div",{staticClass:"item-container__row item-container__row--disp-list"},[n("div",{staticClass:"item-container__row-gutter"},[n("ul",{staticClass:"item-container__items"},t._l(t.informations,function(e,i){return n("li",{staticClass:"item-container__item"},[n("div",{staticClass:"item-container__item-inner"},[n("div",{staticClass:"item-container__item-gutter"},[n("div",{staticClass:"link-item"},[n("div",{staticClass:"link-item__row"},[n("nuxt-link",{staticClass:"singlelink",attrs:{to:t._f("url")(e)}},[n("p",{staticClass:"link-item__meta"},[n("span",[t._v(t._s(t._f("startDate")(e)))]),n("span",{staticClass:"link-item__label"},[t._v(t._s(t._f("localeCategory")(e)))])]),n("p",{staticClass:"link-item__text"},[t._v("\n                          "+t._s(t._f("title")(e))+"\n                        ")]),n("i",{staticClass:"icon font-arrow-right"})])],1)])])])])}),0)])])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"contents-header"},[e("div",{staticClass:"container"},[e("div",{staticClass:"container__gutter"},[e("div",{staticClass:"heading"},[e("h1",{staticClass:"heading__main"},[this._v("お知らせ")])])])])])}],!1,null,null,null).exports,v={name:"information-notice-pc",mixins:[l],components:{}},f=Object(m.a)(v,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-news"},[n("div",{staticClass:"container"},[n("div",{staticClass:"container__gutter"},[n("div",{staticClass:"breadcrumb"},[n("nuxt-link",{staticClass:"breadcrumb__item",attrs:{to:"/"}},[t._v("TOP")]),n("span",{staticClass:"breadcrumb__item"},[t._v("お知らせ")])],1),t._m(0),n("div",{staticClass:"contents-list"},[n("div",{staticClass:"item-container"},[n("ul",{staticClass:"item-container__row item-container__row--disp-list item-container__row--size-line"},t._l(t.informations,function(e,i){return n("li",{staticClass:"item-container__item"},[n("div",{staticClass:"link-item"},[n("nuxt-link",{staticClass:"link-item__box",attrs:{to:t._f("url")(e)}},[n("p",{staticClass:"link-item__meta"},[n("span",{staticClass:"link-item__date"},[t._v(t._s(t._f("startDate")(e)))]),n("span",{staticClass:"link-item__label"},[t._v(t._s(t._f("localeCategory")(e)))])]),n("p",{staticClass:"link-item__text"},[t._v("\n                    "+t._s(t._f("title")(e))+"\n                  ")]),n("i",{staticClass:"icon font-arrow-right"})])],1)])}),0)])])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"contents-header"},[e("div",{staticClass:"heading"},[e("h1",{staticClass:"heading__main"},[this._v("お知らせ")])])])}],!1,null,null,null).exports,h={name:"pages-information-notice",mixins:[n(1020).a],components:{smartphone:d,desktop:f},fetch:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(e){var n,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.store,r=e.redirect,t.prev=1,t.next=4,n.dispatch("information/notice/fetch");case 4:return t.abrupt("return",t.sent);case 7:t.prev=7,t.t0=t.catch(1),r("/error");case 10:case"end":return t.stop()}},t,null,[[1,7]])}));return function(e){return t.apply(this,arguments)}}(),head:function(){return{title:"お知らせ一覧 - まんが（漫画）・電子書籍をお得に買うなら、無料で読むならebookjapan｜無料本多数！",meta:[{hid:"keywords",name:"keywords",content:"お知らせ一覧,電子書籍,まんが,マンガ,漫画,コミック,イーブック,ebook"},{hid:"description",name:"description",content:"ebookjapanに関するお知らせを一覧形式で掲載。まんが・電子書籍なら品揃え世界最大級のまんが・電子書籍販売サイト「ebookjapan」！"}]}}},C=Object(m.a)(h,function(){var t=this.$createElement,e=this._self._c||t;return this.isMobile&&!this.isTablet?e("smartphone"):e("desktop")},[],!1,null,null,null);e.default=C.exports}}]);