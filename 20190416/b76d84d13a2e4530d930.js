(this.webpackJsonp=this.webpackJsonp||[]).push([[6],{1025:function(t,e,r){"use strict";var n={props:{items:{type:Array,required:!0}}},o=r(3),component=Object(o.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"breadcrumb"},t._l(t.items,function(e,n){return r(e.href?"a":"span",{key:"breadcrumb-item-"+n,tag:"component",staticClass:"breadcrumb__item",attrs:{href:e.href}},[t._v(t._s(e.title))])}),1)},[],!1,null,null,null);e.a=component.exports},1065:function(t,e,r){"use strict";r(21),r(22);var n=r(5),o=r(1),c=Object(o.f)("cookie.key.adultCheckVerification"),l=Object(n.a)().add(1,"week"),v=new Date(l.toDate()).toUTCString();e.a={data:function(){return{verificationAdult:0,from:"/"}},methods:{checkAgeVerification:function(){return this.verificationAdult=this.$cookie.get(c)||0,!!this.verificationAdult},verifyAdult:function(){document.cookie="".concat(c,"=1; path=/; expires=").concat(v),this.from&&!this.from.includes("/adult/gate")?this.$router.push(this.from):this.$router.push("/adult/")},notVerify:function(){this.$router.push("/")}},beforeMount:function(){var t=this.$route.query;this.from=t.from||"/adult/",this.checkAgeVerification()&&"/adult/gate"===this.$route.path&&this.$router.push(this.from)}}},1093:function(t,e,r){var content=r(1179);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(62).default)("617df07e",content,!0,{sourceMap:!1})},1106:function(t,e,r){"use strict";var n=r(0);e.a={methods:{reviewItems:function(t){return Object(n.get)(t,"items",[])},scoreAverage:function(t){return Object(n.get)(t,"score_average")},scoreTotalCount:function(t){return Object(n.get)(t,"score_total_count")},scoreTotalNumber:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"1";return Object(n.get)(t,"score_total_".concat(e))}}}},1123:function(t,e,r){"use strict";r(60);var n=r(98),o={props:{value:{type:Number,require:!0},count:{type:Number}},components:{spriteIcon:n.a},computed:{stars:function(){for(var t=[],e=1;e<=5;e++)this.value>=e?t.push("star-large"):this.value>=e-.5?t.push("star-half-large"):t.push("star-none-large");return t}}},c=r(3),component=Object(c.a)(o,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"review-rating"},[e("span",{staticClass:"review-rating__rating"},this._l(this.stars,function(t,r){return e("sprite-icon",{key:"review-rating-start-"+r,attrs:{name:t,element:"span"}})}),1),e("span",{staticClass:"review-rating__count"},[this._v(this._s(this.count))])])},[],!1,null,null,null);e.a=component.exports},1125:function(t,e,r){"use strict";r(13);var n=r(8),o=r(25);e.a={mixins:[n.a,o.a],methods:{addProductBook:function(t){if("function"==typeof ga){var e="".concat(this.titleUnificationTopGenreName(t.title),"/").concat(this.titleUnificationMiddleGenreName(t.title),"/").concat(this.titlePublisherName(t.title),"/").concat(this.titleMagazineName(t.title));ga("require","ec"),ga("ec:addProduct",{id:this.titleId(t.title),name:this.titleName(t.title),brand:this.publicationAuthor(t),category:e,variant:this.publicationName(t),price:this.price(t)}),ga("ec:setAction","detail")}},addProductTitle:function(title){if("function"==typeof ga){var t="".concat(this.titleUnificationTopGenreName(title),"/").concat(this.titleUnificationMiddleGenreName(title),"/").concat(this.titlePublisherName(title),"/").concat(this.titleMagazineName(title));ga("require","ec"),ga("ec:addProduct",{id:this.titleId(title),name:this.titleName(title),brand:this.titleAuthor(title),category:t,variant:this.titleName(title),price:this.price(this.titlePublicationFirst(title))}),ga("ec:setAction","detail")}},purchaseComplete:function(t,e,r){"function"==typeof ga&&(ga("require","ec"),Array.isArray(e)&&e.forEach(function(t){ga("ec:addProduct",{id:t.title_id,price:t.tax_included_price,quantity:1})}),ga("ec:setAction","purchase",{id:t,affiliation:"",revenue:r,tax:"",shipping:"",coupon:""}))}}}},1132:function(t,e,r){"use strict";var n={props:{name:{type:String,required:!0}}},o=r(3),component=Object(o.a)(n,function(){var t=this.$createElement;return(this._self._c||t)("span",{staticClass:"icon",class:"sprite-"+this.name})},[],!1,null,null,null);e.a=component.exports},1133:function(t,e,r){"use strict";var n=r(1023),o=r(1053),c=r(1070),l=r(8),v={mixins:[c.a,l.a],components:{fontIcon:n.a,cartButton:o.a},props:{publication:{type:Object,required:!0},isPurchased:{type:Boolean,default:!1},purchaseText:{type:String,default:"購入へ進む"}},methods:{doClick:function(){this.$bookHistory.save(this.publication)}}},_=r(3),component=Object(_.a)(v,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.isPurchased||t.isBrowserFree(t.publication)?[r("div",{staticClass:"purchase__single-button"},[t.isPurchased?r("a",{staticClass:"btn btn--primary",attrs:{href:"javascript:void(0)"},on:{click:function(e){e.preventDefault(),t.goViewer({publication:t.publication,type:t.staticValue("READ_TYPE.PURCHASED")})}}},[t._v(t._s("読む"))]):r("a",{staticClass:"btn btn--primary",on:{click:function(e){t.goViewer({publication:t.publication,type:t.staticValue("READ_TYPE.FREE")})}}},[t._v(t._s("無料で読む"))])])]:[r("div",{staticClass:"purchase__grouped-button"},[r("div",{staticClass:"purchase__grouped-button-left"},[r("div",{staticClass:"flexbox"},[r("div",{staticClass:"flexbox__item"},[t.hasTrial(t.publication)?[r("a",{on:{click:function(e){t.doClick,t.goViewer({publication:t.publication,type:t.staticValue("READ_TYPE.TRIAL")})}}},[r("span",{staticClass:"btn"},[r("font-icon",{attrs:{icon:"",name:"read"}})],1)]),r("p",[t._v("試し読み")])]:t._e()],2),r("cart-button",{staticClass:"flexbox__item",attrs:{bookCds:[t.bookCd(t.publication)]},scopedSlots:t._u([{key:"default",fn:function(e){return[r("p",{class:{cart:e.isCartAdded}},[t._v(t._s(e.isCartAdded?"カゴを見る":"カゴに追加"))])]}}])},[r("template",{slot:"icon"},[r("font-icon",{attrs:{name:"bag"}})],1)],2)],1)]),r("div",{staticClass:"purchase__grouped-button-right"},[r("a",{staticClass:"btn btn--purchase",attrs:{href:"javascript:void(0)"},on:{click:function(e){return e.preventDefault(),t.onClickPurchase(t.publication)}}},[t._v(t._s(t.purchaseText))])])])]],2)},[],!1,null,null,null);e.a=component.exports},1134:function(t,e,r){"use strict";r(60);var n={components:{spriteSpanIcon:r(1132).a},props:{rating:{type:Number,default:0}},computed:{stars:function(){for(var t=[],e=1;e<=5;e++)this.rating>=e?t.push("star"):this.rating>=e-.5?t.push("star-half"):t.push("star-none");return t}}},o=(r(1178),r(3)),component=Object(o.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"review-rating"},[e("span",{staticClass:"review-rating__rating"},this._l(this.stars,function(t,r){return e("sprite-span-icon",{key:"review-rating-start-"+r,attrs:{name:t}})}),1),this._t("default")],2)},[],!1,null,"500d45c6",null);e.a=component.exports},1178:function(t,e,r){"use strict";var n=r(1093);r.n(n).a},1179:function(t,e,r){(t.exports=r(61)(!1)).push([t.i,".review-rating__rating span[data-v-500d45c6]{margin-right:5px}",""])},1248:function(t,e,r){"use strict";r(19),r(9);var n=r(2),o=r(6),c=r(7),l=r(5),v=r(1),_=r(100),m="mixins/components/pages/books/reviewItem/vote",d=Object(v.f)("lockTime.base");e.a={mixins:[_.a],props:{review:{type:Object,default:function(){return{}}}},data:function(){return{REVIEWER_TYPES:Object(v.p)("REVIEW.REVIEWER_TYPE"),MIGRATION_TYPES:Object(v.p)("REVIEW.MIGRATION_TYPE"),descriptionLengthLimit:this.review.is_spoil?0:100,isShowMoreDescription:!1}},computed:Object(o.a)({},Object(c.e)("user",["isLogin"]),{nickName:function(){return this.review.is_publish_nickname?this.review.nickname:"匿名"},descriptionSummary:function(){return this.review.review_text&&this.review.review_text.length>this.descriptionLengthLimit?this.review.review_text.substr(0,this.descriptionLengthLimit):this.review.review_text},moreDescription:function(){return this.review.review_text&&this.review.review_text.length>this.descriptionLengthLimit?this.review.review_text.substr(this.descriptionLengthLimit):""},isBooklogReview:function(){return this.review.migration_type===this.MIGRATION_TYPES.BOOKLOG}}),methods:Object(o.a)({},Object(c.b)("books/book",{voteBookReview:"voteReview"}),Object(c.b)("books/title",{voteTitleReview:"voteReview"}),{displayDate:function(t){return t&&Object(l.a)(t).isValid()?Object(l.a)(t).format("YYYY/MM/DD"):"----/--/--"},vote:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.isLogin){t.next=2;break}return t.abrupt("return",this.gotoLoginPage());case 2:if(this.$lock.acquire(m,d)){t.next=4;break}return t.abrupt("return");case 4:if(e={reviewId:this.review.review_id},t.prev=5,"books-title-book"!==this.$route.name){t.next=11;break}return t.next=9,this.voteBookReview(e);case 9:t.next=14;break;case 11:if("books-title"!==this.$route.name){t.next=14;break}return t.next=14,this.voteTitleReview(e);case 14:t.next=19;break;case 16:t.prev=16,t.t0=t.catch(5),this.$logger.warn.bind({fileName:"mixins/components/pages/books/reviewItem.js",line:71})(t.t0);case 19:return t.prev=19,this.$lock.release(m),t.finish(19);case 22:case"end":return t.stop()}},t,this,[[5,16,19,22]])}));return function(){return t.apply(this,arguments)}}()})}},1249:function(t,e,r){"use strict";e.a={props:{reviewSummary:{type:Object,required:!0},reviewData:{type:Object,required:!0}},computed:{eachTotalReviews:function(){var t=this;return[1,2,3,4,5].reduce(function(e,r){return e[r]=t.reviewSummary["score_".concat(r,"_count")],e},[])},scoreRatios:function(){var t=this,e=[1,2,3,4,5].reduce(function(e,r){return e+=t.reviewSummary["score_".concat(r,"_count")]},0);return[1,2,3,4,5].reduce(function(r,n){var o=t.reviewSummary["score_".concat(n,"_count")]/e*100;return r[n]=Math.floor(o),r},[])}},methods:{loadMoreReviews:function(){this.$emit("load-more")},resetReviews:function(){this.$emit("reset")}}}},1250:function(t,e,r){"use strict";r(13);var n=r(0),o=r(8),c=r(511);e.a={mixins:[o.a],props:{publications:{type:Array,require:!0},title:{type:String}},computed:{filteredPublications:function(){var t=Object(n.cloneDeep)(this.publications);return t.forEach(function(t){var e=Object(n.get)(t,"books");Array.isArray(e)&&e.length&&t.books.forEach(function(t){var e=Object(n.get)(t,"goods");Array.isArray(e)&&e.length&&(t.goods=e.filter(function(t){return!c.a.methods.isBrowserFree(t)}))})}),t},thumbnail:function(){return this.bookImageUrl(this.publications[this.publications.length-1])},totalAmount:function(){var t=this;return this.filteredPublications.reduce(function(e,r){var n=t.price(r)||0;return{price:e.price+n}},{price:0}).price},totalBookCds:function(){var t=this;return this.publications.map(function(e){return t.bookCd(e)})}}}},1251:function(t,e,r){"use strict";e.a={props:{errorMessage:{type:String,required:!0}},methods:{onClickCloseBtn:function(){this.$emit("clickReadErrorModalCloseBtn")}},mounted:function(){document.body.style.overflow="hidden"},beforeDestroy:function(){document.body.style.overflow="auto"}}},1259:function(t,e,r){"use strict";var n=r(1215),o=r(38),c=r(1123),l=(r(60),r(98)),v={props:{value:{type:Number,require:!0},count:{type:Number}},components:{spriteIcon:l.a},computed:{stars:function(){for(var t=[],e=1;e<=5;e++)this.value>=e?t.push("star"):this.value>=e-.5?t.push("star-half"):t.push("star-none");return t}}},_=r(3),m=Object(_.a)(v,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"review-rating"},[e("span",{staticClass:"review-rating__rating"},this._l(this.stars,function(t,r){return e("sprite-icon",{key:"review-rating-start-"+r,attrs:{name:t,element:"span"}})}),1),this.count?e("nuxt-link",{staticClass:"review-rating__count",attrs:{to:"#reviews"}},[this._v(this._s(this.count))]):this._e()],1)},[],!1,null,null,null).exports,d=r(1021),h=r(1022),f={mixins:[r(1248).a],components:{fontIcon:o.a,reviewRating:m,tagText:h.a}},w=Object(_.a)(f,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"review-item"},[r("div",{staticClass:"review-item__header"},[r("div",{staticClass:"review-item__info"},[t.review.review_score?r("review-rating",{attrs:{value:t.review.review_score}}):t._e(),t.review.reviewer_type===t.REVIEWER_TYPES.STAFF||t.review.is_spoil?r("div",{staticClass:"review-item__label"},[t.review.reviewer_type===t.REVIEWER_TYPES.STAFF?r("tag-text",{attrs:{name:"label"}},[t._v("スタッフ")]):t._e(),t.review.is_spoil?r("tag-text",{attrs:{name:"info"}},[t._v("ネタバレ")]):t._e()],1):t._e(),r("span",{staticClass:"review-item__meta"},[t._v(t._s(t.displayDate(t.review.created_datetime)))]),t.isBooklogReview?r("span",{staticClass:"review-item__link"},[t._v("Posted by "),r("a",{staticClass:"underline",attrs:{href:"https://booklog.jp",target:"_blank",rel:"noopener"}},[t._v("ブクログ")])]):r("span",{staticClass:"review-item__reviewer"},[t._v(t._s(t.nickName))])],1),r("div",{staticClass:"review-item__like"},["number"==typeof t.review.voted_count?r("span",{staticClass:"btn",on:{click:t.vote}},[r("i",{staticClass:"icon font-like"}),t._v("いいね "+t._s(t.review.voted_count))]):t._e()])]),r("div",{staticClass:"review-item__title"},[t._v(t._s(t.review.review_title))]),r("div",{staticClass:"review-item__body"},[r("p",{staticClass:"review-item__description"},[t._v("\n      "+t._s(t.descriptionSummary)+t._s(t.isShowMoreDescription||!t.moreDescription||t.review.is_spoil?"":"...")),r("span",{directives:[{name:"show",rawName:"v-show",value:t.isShowMoreDescription,expression:"isShowMoreDescription"}],staticClass:"review-item__description-more-text"},[t._v(t._s(t.moreDescription))])]),r("div",{directives:[{name:"show",rawName:"v-show",value:!t.isShowMoreDescription&&t.moreDescription,expression:"!isShowMoreDescription && moreDescription"}],staticClass:"review-item__more",on:{click:function(e){t.isShowMoreDescription=!0}}},[t.review.is_spoil?r("span",[t._v("この内容にはネタバレが含まれています"),r("font-icon",{attrs:{icon:"",name:"arrow-down"}})],1):r("span",[t._v("続きを読む"),r("font-icon",{attrs:{icon:"",name:"arrow-down"}})],1)])])])},[],!1,null,null,null).exports,C={mixins:[r(1249).a],components:{fontIcon:o.a,headings:n.a,reviewRating:m,reviewRatingLarge:c.a,itemContainer:d.a,reviewItem:w}},k=Object(_.a)(C,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"contents-review",attrs:{id:"reviews"}},[r("headings",{attrs:{title:"レビュー"}}),t.reviewData.total_results>0?r("div",{staticClass:"review-section"},[r("div",{staticClass:"review-section__total",class:{"review-section__total--fixed":t.reviewData.reviews.length>3}},[r("div",{staticClass:"review-average"},[t._v(t._s(t.reviewSummary.score_average))]),r("div",{staticClass:"review-star"},[r("review-rating-large",{attrs:{value:t.reviewSummary.score_average,count:t.reviewSummary.score_total_count}})],1),r("div",{staticClass:"review-reviewtable"},t._l([5,4,3,2,1],function(i){return r("div",{key:"rating-graph_"+i,staticClass:"rating-graph"},[r("div",{staticClass:"rating-graph__rate"},[t._v("\n            "+t._s(i)+"\n          ")]),r("a",{attrs:{href:"javascript:void(0)"}},[r("div",{staticClass:"rating-graph__progress"},[r("div",{staticClass:"rating-graph__bar",style:{width:t.scoreRatios[i]+"%"}})]),r("span",{staticClass:"rating-graph__count"},[t._v(t._s(t.eachTotalReviews[i]))])])])}),0)]),Array.isArray(t.reviewData.reviews)&&t.reviewData.reviews.length>0?r("div",{staticClass:"review-section__review"},[r("item-container",{attrs:{items:t.reviewData.reviews,disp:"list"},scopedSlots:t._u([{key:"default",fn:function(t){return[r("review-item",{attrs:{review:t.item}})]}}],null,!1,2015850368)})],1):t._e()]):r("div",{staticClass:"review-section"},[r("div",{staticClass:"zero-message zero-message--book-review"},[t._v("レビューはありません。")])]),Array.isArray(t.reviewData.reviews)&&t.reviewData.reviews.length>0?r("div",{staticClass:"contents-more contents-more--center"},[t.reviewData.total_results>t.reviewData.reviews.length?r("span",{on:{click:t.loadMoreReviews}},[t._v("もっと見る"),r("i",{staticClass:"icon font-arrow-down"})]):t.reviewData.reviews.length>3?r("span",{on:{click:t.resetReviews}},[t._v("閉じる"),r("i",{staticClass:"icon font-arrow-up"})]):t._e()]):t._e()],1)},[],!1,null,null,null);e.a=k.exports},1260:function(t,e,r){"use strict";var n=r(1023),o=r(1024),c=r(1134),l=(r(60),{components:{spriteSpanIcon:r(1132).a},props:{rating:{type:Number,default:0}},computed:{stars:function(){for(var t=[],e=1;e<=5;e++)this.rating>=e?t.push("star-large"):this.rating>=e-.5?t.push("star-half-large"):t.push("star-none-large");return t}}}),v=r(3),_=Object(v.a)(l,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"review-rating"},[e("span",{staticClass:"review-rating__rating"},this._l(this.stars,function(t,r){return e("sprite-span-icon",{key:"review-rating-start-"+r,attrs:{name:t}})}),1),this._t("default")],2)},[],!1,null,null,null).exports,m=r(504),d=r(1026),h={mixins:[r(1248).a],components:{fontIcon:n.a,tagText:d.a,ratingStars:c.a}},f=Object(v.a)(h,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"review-item"},[r("div",{staticClass:"review-item__rating"},[t.review.review_score?r("rating-stars",{attrs:{rating:t.review.review_score}}):t._e()],1),r("div",{staticClass:"review-item__row"},[t.review.reviewer_type===t.REVIEWER_TYPES.STAFF||t.review.is_spoil?r("div",{staticClass:"review-item__label"},[t.review.reviewer_type===t.REVIEWER_TYPES.STAFF?r("tag-text",{attrs:{name:"label"}},[t._v("スタッフ")]):t._e(),t.review.is_spoil?r("tag-text",{attrs:{name:"info"}},[t._v("ネタバレ")]):t._e()],1):t._e(),r("span",{staticClass:"review-item__meta"},[t._v(t._s(t.displayDate(t.review.created_datetime)))]),t.isBooklogReview?r("span",{staticClass:"review-item__link"},[t._v("Posted by "),r("a",{staticClass:"underline",attrs:{href:"https://booklog.jp",target:"_blank",rel:"noopener"}},[t._v("ブクログ")])]):r("span",{staticClass:"review-item__reviewer"},[t._v(t._s(t.nickName))]),"number"==typeof t.review.voted_count?r("div",{staticClass:"review-item__like"},[r("span",{staticClass:"btn",on:{click:t.vote}},[r("font-icon",{attrs:{name:"like"}}),t._v("いいね "+t._s(t.review.voted_count))],1)]):t._e()]),r("div",{staticClass:"review-item__title"},[t._v(t._s(t.review.review_title))]),r("p",{staticClass:"review-item__description"},[t._v("\n    "+t._s(t.descriptionSummary)+t._s(t.isShowMoreDescription||!t.moreDescription||t.review.is_spoil?"":"...")),r("span",{directives:[{name:"show",rawName:"v-show",value:t.isShowMoreDescription,expression:"isShowMoreDescription"}],staticClass:"review-item__description-more-text"},[t._v(t._s(t.moreDescription))]),r("span",{directives:[{name:"show",rawName:"v-show",value:!t.isShowMoreDescription&&t.moreDescription,expression:"!isShowMoreDescription && moreDescription"}],staticClass:"review-item__more",on:{click:function(e){t.isShowMoreDescription=!0}}},[t._v("\n      "+t._s(t.review.is_spoil?"この内容にはネタバレが含まれています":"")),r("font-icon",{attrs:{icon:"",name:"arrow-down"}})],1)])])},[],!1,null,null,null).exports,w={mixins:[r(1249).a],components:{container:o.a,fontIcon:n.a,ratingStars:c.a,ratingStarsLarge:_,itemContainer:m.a,reviewItem:f}},C=Object(v.a)(w,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"contents-review",attrs:{id:"reviews"}},[r("container",[r("div",{staticClass:"heading"},[r("h2",{staticClass:"heading__main"},[t._v("\n        レビュー\n        "),t.reviewData.total_results>0?[r("rating-stars",{attrs:{rating:t.reviewSummary.score_average}}),r("span",{staticClass:"review-rating__count"},[t._v(t._s(t.reviewSummary.score_total_count))])]:t._e()],2)]),t.reviewData.total_results>0?r("div",{staticClass:"review-summary"},[r("div",{staticClass:"review-summary__table"},t._l([5,4,3,2,1],function(i){return r("div",{key:"rating-graph_"+i,staticClass:"rating-graph"},[r("div",{staticClass:"rating-graph__rate"},[t._v("\n            "+t._s(i)+"\n          ")]),r("a",{attrs:{href:"javascript:void(0)"}},[r("div",{staticClass:"rating-graph__progress"},[r("div",{staticClass:"rating-graph__bar",style:{width:t.scoreRatios[i]+"%"}})]),r("span",{staticClass:"rating-graph__count"},[t._v(t._s(t.eachTotalReviews[i]))])])])}),0)]):r("div",{staticClass:"review-summary"},[r("div",{staticClass:"zero-message zero-message--book-review"},[t._v("レビューはありません。")])])]),Array.isArray(t.reviewData.reviews)&&t.reviewData.reviews.length>0?r("item-container",{attrs:{items:t.reviewData.reviews,disp:"list"},scopedSlots:t._u([{key:"default",fn:function(t){return[r("review-item",{attrs:{review:t.item}})]}}],null,!1,2015850368)}):t._e(),Array.isArray(t.reviewData.reviews)&&t.reviewData.reviews.length>0?r("div",{staticClass:"contents-more"},[t.reviewData.total_results>t.reviewData.reviews.length?r("a",{attrs:{href:"javascript:void(0)"},on:{click:t.loadMoreReviews}},[t._m(0)]):t.reviewData.reviews.length>3?r("a",{attrs:{href:"javascript:void(0)"},on:{click:t.resetReviews}},[t._m(1)]):t._e()]):t._e()],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("span",[this._v("もっと見る"),e("i",{staticClass:"icon font-arrow-down"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[this._v("閉じる"),e("i",{staticClass:"icon font-arrow-up"})])}],!1,null,null,null);e.a=C.exports},1262:function(t,e,r){"use strict";var n=r(1022),o={name:"bookItem",props:{thumbnail:{type:String,required:!0},url:{type:String,required:!0},title:{type:String,required:!0},tag:String,dispGrid:Boolean,dispList:Boolean,typeMulti:Boolean},components:{tagText:n.a}},c=r(3),component=Object(c.a)(o,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"book-item",class:{"book-item--disp-grid":t.dispGrid,"book-item--disp-list":t.dispList,"book-item--type-multi":t.typeMulti}},[r("nuxt-link",{attrs:{to:t.url}},[r("div",{staticClass:"book-item__cover"},[r("img",{attrs:{"data-testid":"thumbnail",alt:t.title,src:t.thumbnail}}),t.tag?r("tag-text",{attrs:{name:"primary","data-testid":"tag"}},[t._v(t._s(t.tag))]):t._e()],1),r("div",{staticClass:"book-item__caption"},[r("p",{staticClass:"book-item__title",attrs:{"data-testid":"title"}},[t._v(t._s(t.title))])])]),r("div",{staticClass:"book-item__actions"},[t._t("default")],2)],1)},[],!1,null,null,null);e.a=component.exports},1263:function(t,e,r){"use strict";r(60);var n=r(1022),o=r(1021),c=r(1045),l=r(1030),v=r(8),_=r(1054),m={mixins:[v.a,_.a],props:{seriesItems:{type:Array,required:!0},totalVolume:{type:Number,default:0}},components:{tagText:n.a,itemContainer:o.a,bookItemActions:c.a,contentsMore:l.a},data:function(){return{addDisplayNumber:this.seriesItems.length}},computed:{title:function(){return"同シリーズ".concat(this.totalVolume?"　全"+this.totalVolume+"巻":"")}}},d=r(3),component=Object(d.a)(m,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"contents-serial"},[r("div",{staticClass:"heading"},[r("h2",{staticClass:"heading__main"},[t._v(t._s(t.title))])]),r("item-container",{attrs:{items:t.seriesItems.slice(0,t.displayNumber)},scopedSlots:t._u([{key:"default",fn:function(e){return[r("div",{staticClass:"book-item book-item--disp-grid"},[r("nuxt-link",{staticClass:"book-item__box",attrs:{to:t.bookUrl(e.item)}},[r("div",{staticClass:"book-item__cover"},[r("img",{attrs:{alt:t.publicationName(e.item),src:t.bookImageUrl(e.item)}}),t.isFree(e.item)?r("tag-text",{attrs:{free:""}}):t.isDiscount(e.item)&&t.isPointAnyTimes(e.item)?r("tag-text",{attrs:{"sale-pointup":""}}):t.isDiscount(e.item)?r("tag-text",{attrs:{sale:"",rate:t.discountPercent(e.item)}}):t.isPointAnyTimes(e.item)?r("tag-text",{attrs:{pointup:"",rate:t.campaignRating(e.item)}}):t._e()],1),r("div",{staticClass:"book-item__caption"},[r("p",{staticClass:"book-item__title"},[t._v(t._s(t.truncatedTitleWithVolumeName(e.item,14,10)))])])]),r("book-item-actions",{attrs:{publication:e.item,type:"tile",isCartOnly:""}})],1)]}}])}),t.seriesItems.length>t.displayNumberPerWidth?r("contents-more",{attrs:{title:t.title,displayNumber:t.displayNumber,baseDisplayNumber:t.displayNumberPerWidth},on:{onClickMoreButton:t.onClickMoreButton,onClickResetButton:t.onClickResetButton}}):t._e()],1)},[],!1,null,null,null);e.a=component.exports},1264:function(t,e,r){"use strict";var n=r(38),o=r(1046),c=r(1027),l=r(1029),v={mixins:[r(1250).a],components:{fontIcon:n.a,priceLabel:c.a,tpoint:o.a,cartButton:l.a}},_=r(3),component=Object(_.a)(v,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"book-item book-item--disp-list book-item--type-multi book-item--btn-include-single"},[r("div",{staticClass:"book-item__box"},[r("div",{staticClass:"book-item__cover"},[r("img",{attrs:{"data-testid":"thumbnail",alt:t.title,src:t.thumbnail}})]),r("div",{staticClass:"book-item__caption"},[r("p",{staticClass:"book-item__title",attrs:{"data-testid":"title"}},[t._v("未購入巻をまとめて購入")]),r("p",{staticClass:"book-item__sub-title",attrs:{"data-testid":"sub-title"}},[t._v(t._s(t.title))]),r("div",{staticClass:"book-item__price"},[r("price-label",{attrs:{normalPrice:t.totalAmount}})],1)])]),r("div",{staticClass:"book-item__actions"},[r("cart-button",{attrs:{bookCds:t.totalBookCds}})],1)])},[],!1,null,null,null);e.a=component.exports},1265:function(t,e,r){"use strict";var n={mixins:[r(1251).a]},o=r(3),component=Object(o.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"modalbox-overlay"},[r("div",{staticClass:"modalbox modalbox--error"},[r("div",{staticClass:"modalbox__body"},[r("div",{staticClass:"read-error"},[r("p",[t._v(t._s(t.errorMessage))]),r("div",{staticClass:"read-error__btn"},[r("a",{staticClass:"btn",attrs:{href:"javascript:void(0)"},on:{click:function(e){return e.preventDefault(),t.onClickCloseBtn(e)}}},[t._v("閉じる")])])])])])])},[],!1,null,null,null);e.a=component.exports},1266:function(t,e,r){"use strict";var n=r(1064),o=r(1024),c=r(1027),l=r(1053),v={mixins:[r(1250).a],components:{container:o.a,mainHeading:n.a,cartButton:l.a,priceLabel:c.a}},_=r(3),component=Object(_.a)(v,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"contents-set"},[e("container",[e("main-heading",{attrs:{name:"未購入の巻をまとめて購入"}})],1),e("div",{staticClass:"item-container"},[e("div",{staticClass:"item-container__row item-container__row--disp-list"},[e("div",{staticClass:"item-container__row-gutter"},[e("ul",{staticClass:"item-container__items"},[e("li",{staticClass:"item-container__item"},[e("div",{staticClass:"item-container__item-inner"},[e("div",{staticClass:"item-container__item-gutter"},[e("div",{staticClass:"book-item book-item--disp-list book-item--type-multi book-item--btn-include-single"},[e("div",{staticClass:"book-item__box"},[e("div",{staticClass:"book-item__cover"},[e("img",{attrs:{alt:this.title,src:this.thumbnail}})]),e("div",{staticClass:"book-item__caption"},[e("p",{staticClass:"book-item__title"},[this._v(this._s(this.title))]),e("div",{staticClass:"book-item__price"},[e("price-label",{attrs:{normalPrice:this.totalAmount}})],1)])]),e("div",{staticClass:"book-item__actions"},[e("div",{staticClass:"flexbox"},[e("cart-button",{staticClass:"flexbox__item",attrs:{bookCds:this.totalBookCds}})],1)])])])])])])])])])],1)},[],!1,null,null,null);e.a=component.exports},1267:function(t,e,r){"use strict";r(60);var n=r(1026),o=r(1047),c=r(1027),l=r(504),v=r(1050),_={mixins:[r(8).a],props:{seriesItems:{type:Array,required:!0},totalVolume:{type:Number,default:0}},components:{tagText:n.a,tpoint:o.a,priceLabel:c.a,itemContainer:l.a,bookItemActions:v.a},data:function(){return{baseDisplayNumber:3,displayNumber:3,isClickedMoreBtn:!1}},methods:{onClickMoreButton:function(){this.isClickedMoreBtn=!0,this.displayNumber=this.seriesItems.length},onClickResetButton:function(){this.displayNumber=this.baseDisplayNumber},isDisplayingTag:function(t){return this.isFree(t)||this.isDiscount(t)&&this.isPointAnyTimes(t)||this.isDiscount(t)||this.isPointAnyTimes(t)}}},m=r(3),component=Object(m.a)(_,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"contents-serial"},[r("div",{staticClass:"container"},[r("div",{staticClass:"container__gutter"},[r("div",{staticClass:"heading"},[r("h2",{staticClass:"heading__main"},[t._v("同シリーズ"+t._s(t.totalVolume?"　全"+t.totalVolume+"巻":""))])])])]),r("item-container",{attrs:{items:t.seriesItems.slice(0,t.displayNumber),disp:"list"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("div",{staticClass:"book-item book-item--disp-list book-item--btn-include-double"},[r("nuxt-link",{staticClass:"book-item__box",attrs:{to:t.bookUrl(e.item)}},[r("div",{staticClass:"book-item__cover"},[r("img",{attrs:{alt:e.item.publication_name,src:t.bookImageUrl(e.item)}})]),r("div",{staticClass:"book-item__caption"},[r("p",{staticClass:"book-item__title"},[t.isFree(e.item)?r("tag-text",{attrs:{free:""}}):t.isDiscount(e.item)&&t.isPointAnyTimes(e.item)?r("tag-text",{attrs:{"sale-pointup":""}}):t.isDiscount(e.item)?r("tag-text",{attrs:{sale:"",rate:t.discountPercent(e.item)}}):t.isPointAnyTimes(e.item)?r("tag-text",{attrs:{pointup:"",rate:t.campaignRating(e.item)}}):t._e(),t.isDisplayingTag(e.item)?r("br"):t._e(),t._v("\n              "+t._s(t.truncatedTitleWithVolumeName(e.item,24,10))+"\n            ")],1),r("div",{staticClass:"book-item__price"},[r("price-label",{attrs:{normalPrice:t.normalPrice(e.item),discountPrice:t.discountPrice(e.item)}})],1),void 0!==t.price(e.item)?r("div",{staticClass:"book-item__point"},[r("tpoint",{attrs:{basePoint:t.point(e.item),campaignPoint:t.campaignPoint(e.item)}})],1):t._e()])]),r("book-item-actions",{attrs:{publication:e.item,type:"list"}})],1)]}}])}),r("div",{staticClass:"container"},[r("div",{staticClass:"container__gutter"},[t.seriesItems.length>t.baseDisplayNumber?r("div",{staticClass:"contents-more"},[t.displayNumber<=t.baseDisplayNumber?r("span",{on:{click:t.onClickMoreButton}},[t._v("もっと見る"),r("i",{staticClass:"icon font-arrow-down"})]):r("span",{on:{click:t.onClickResetButton}},[t._v("閉じる"),r("i",{staticClass:"icon font-arrow-up"})])]):t._e()])])],1)},[],!1,null,null,null);e.a=component.exports},1268:function(t,e,r){"use strict";var n=r(1026),o=r(1047),c=r(504),l=r(1050),v={mixins:[r(8).a],props:{publications:{type:Array,required:!0}},components:{tagText:n.a,tpoint:o.a,itemContainer:c.a,bookItemActions:l.a}},_=r(3),component=Object(_.a)(v,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"contents-benefit"},[t._m(0),r("item-container",{attrs:{items:t.publications,disp:"list"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("div",{staticClass:"book-item book-item--disp-list book-item--btn-include-single"},[r("nuxt-link",{staticClass:"book-item__box",attrs:{to:t.bookUrl(e.item)}},[r("div",{staticClass:"book-item__cover"},[r("img",{attrs:{alt:t.publicationName(e.item),src:t.bookImageUrl(e.item)}}),t.isFree(e.item)?r("tag-text",{attrs:{free:""}}):t._e()],1),r("div",{staticClass:"book-item__caption"},[r("p",{staticClass:"book-item__title"},[t._v(t._s(t.publicationName(e.item)))]),r("div",{staticClass:"book-item__price"},[void 0!==t.price(e.item)?r("div",{staticClass:"price"},[r("b",[t._v(t._s(t.price(e.item)))]),t._v("円（税込）\n              ")]):t._e()]),void 0!==t.price(e.item)?r("div",{staticClass:"book-item__point"},[r("tpoint",{attrs:{basePoint:t.point(e.item),campaignPoint:t.campaignPoint(e.item)}})],1):t._e()])]),r("book-item-actions",{attrs:{publication:e.item,type:"list",isCartOnly:""}})],1)]}}])})],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"container__gutter"},[e("div",{staticClass:"heading"},[e("h2",{staticClass:"heading__main"},[this._v("特典付き・関連商品")])])])])}],!1,null,null,null);e.a=component.exports},1269:function(t,e,r){"use strict";var n={mixins:[r(1251).a]},o=r(3),component=Object(o.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"modalbox-overlay"},[r("div",{staticClass:"modalbox modalbox--error"},[r("div",{staticClass:"modalbox__body"},[r("div",{staticClass:"read-error"},[r("p",[t._v(t._s(t.errorMessage))]),r("div",{staticClass:"read-error__btn"},[r("a",{staticClass:"btn",attrs:{href:"javascript:void(0)"},on:{click:function(e){return e.preventDefault(),t.onClickCloseBtn(e)}}},[t._v("閉じる")])])])])])])},[],!1,null,null,null);e.a=component.exports},1270:function(t,e,r){"use strict";var n={name:"priceLabel",mixins:[r(1048).a]},o=r(3),component=Object(o.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.showed?r("div",{staticClass:"price",class:{"price--discount":t.discounted}},[t.discounted?[r("span",{staticClass:"strike"},[t._v(t._s(t.displayNormalPrice)+"円")]),r("b",[t._v(t._s(t.displayDiscountPrice))]),t._v("円（税込）\n  ")]:[r("b",[t._v(t._s(t.displayNormalPrice))]),t._v("円（税込）\n  ")],t._t("default")],2):t._e()},[],!1,null,null,null);e.a=component.exports},1271:function(t,e,r){"use strict";r(60);var n={props:{value:{type:Number,require:!0},count:{type:Number}}},o=r(3),component=Object(o.a)(n,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"review-rating"},[e("span",{staticClass:"review-rating__rating"},[this._v(" ")])])}],!1,null,null,null);e.a=component.exports},1272:function(t,e,r){"use strict";var n={name:"priceLabel",mixins:[r(1048).a]},o=r(3),component=Object(o.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.showed?r("div",{staticClass:"price",class:{"price--discount":t.discounted}},[t.discounted?[r("span",{staticClass:"strike"},[t._v(t._s(t.displayNormalPrice)+"円")]),r("b",[t._v(t._s(t.displayDiscountPrice))]),t._v("円（税込）\n  ")]:[r("b",[t._v(t._s(t.displayNormalPrice))]),t._v("円（税込）\n  ")],t._t("default")],2):t._e()},[],!1,null,null,null);e.a=component.exports}}]);