(this.webpackJsonp=this.webpackJsonp||[]).push([[31],{1427:function(t,e,r){"use strict";r.r(e);r(17),r(13),r(33),r(9);var n=r(2),o=r(6),c=r(7),h=r(1097),l=r(1096),d=r(1020),title=r(25),f={name:"author_id",mixins:[d.a,title.a],watchQuery:["page","sort"],computed:Object(o.a)({},Object(c.e)("lists",["authorId"]),Object(c.c)("lists",["books","bookTotalResults","useTitle"])),validate:function(t){var e=t.params;return/^\d+$/.test(e.id)},fetch:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(e){var r,n,c,h;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.store,n=e.params,c=e.query,h=e.redirect,t.prev=1,r.dispatch("lists/entered",Object(o.a)({authorId:n.id},c)),t.next=5,Promise.all([r.dispatch("lists/fetch","author"),r.dispatch("signboard/fetch",{authorId:n.id})]);case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),h("/error");case 10:case"end":return t.stop()}},t,null,[[1,7]])}));return function(e){return t.apply(this,arguments)}}(),components:{smartphone:l.a,desktop:h.a},methods:{getMetaPageTitleName:function(){var t=this;if(this.bookTotalResults>0){var e=this.books.find(function(e){var r=t.useTitle?e:e.title;return t.authorId===t.titleAuthorId(r)});if(!e)return"";var r=this.useTitle?e:e.title;return this.titleAuthor(r)}return""}},head:function(){var t=this.getMetaPageTitleName();return{title:t+"作品一覧 - まんが（漫画）・電子書籍をお得に買うなら、無料で読むならebookjapan",meta:[{hid:"keywords",name:"keywords",content:t+",まんが,電子書籍,マンガ,漫画,コミック,イーブック,ebook"},{hid:"description",name:"description",content:t+"の作品一覧。まんがをお得に買うなら、無料で読むなら、品揃え世界最大級のまんが・電子書籍販売サイト「ebookjapan」！"}]}}},m=r(3),component=Object(m.a)(f,function(){var t=this.$createElement,e=this._self._c||t;return this.isMobile&&!this.isTablet?e("smartphone",{attrs:{page:"authors"}}):e("desktop",{attrs:{page:"authors"}})},[],!1,null,null,null);e.default=component.exports}}]);