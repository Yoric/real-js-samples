(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{1622:function(t,e,n){"use strict";n.r(e);var i=n(14),r=n.n(i),o=n(42),c=n.n(o),a=n(123),s=n.n(a),u=n(368),l=n.n(u),f=n(367),p=n.n(f),d=n(8),v=n.n(d),g=n(83),h=n.n(g),m=n(122),b=n.n(m),y=n(370),k=n.n(y),x=n(121),I=n(371),w=n(375),_=n(378),C=n(376),T=n(461),L=n(460),j=n(686),O=n(694),R=function(t,e,n,i){var r,o=arguments.length,c=o<3?e:null===i?i=k()(e,n):i;if("object"===("undefined"==typeof Reflect?"undefined":b()(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&h()(e,n,c),c},P=function(t){function e(){c()(this,e);var n=l()(this,t.apply(this,arguments));return n.isTarget=!1,n}return p()(e,t),e}(x.default);R([Object(I.Prop)({type:Number,default:3})],P.prototype,"level",void 0);var S=P=R([Object(I.Component)({})],P),B=(n(925),n(369)),N=Object(B.a)(S,function(){var t=this.$createElement,e=this._self._c||t;return this.isTarget?e("a",[e("span",{staticClass:"guard-icon bg-cover dp-i-block",class:"guard-level-"+this.level})]):e("span",{staticClass:"guard-icon bg-cover dp-i-block",class:"guard-level-"+this.level})},[],!1,null,null,null).exports,G=[{desc:"舰长",level:3},{desc:"提督",level:2},{desc:"总督",level:1}],M={1:[{title:"道具优惠",desc:"折扣价购买摩天大楼和节奏风暴",type:"gift"},{title:"加速提升亲密度",desc:"每日亲密度上限变为3倍",type:"medal"},{title:"进场特效",desc:"进房间播放器公告提示，聊天区进入提示",type:"welcome"},{title:"弹幕特权",desc:"专享顶部悬停弹幕，专享基佬紫弹幕",type:"danmuColor"},{title:"反馈福利",desc:"购买即返银瓜子和神秘道具礼包",type:"silver"},{title:"发言特权",desc:"弹幕可输入40字",type:"danmuText"}],2:[{title:"道具优惠",desc:"折扣价购买摩天大楼和节奏风暴"},{title:"加速提升亲密度",desc:"每日亲密度上限变为2倍"},{title:"进场特效",desc:"聊天区进入提示"},{title:"弹幕特权",desc:"专享基佬紫弹幕"},{title:"反馈福利",desc:"购买即返银瓜子和神秘道具礼包"},{title:"发言特权",desc:"弹幕可输入40字"}],3:[{title:"加速提升亲密度",desc:"每日亲密度上限变为1.5倍"},{title:"进场特效",desc:"聊天区进入提示"},{title:"弹幕特权",desc:"专享基佬紫弹幕"},{title:"反馈福利",desc:"购买即返银瓜子和神秘道具礼包"}]},E="//link.bilibili.com/p/help/index#/great-navigation",D=n(382),U=function(t,e,n,i){var r,o=arguments.length,c=o<3?e:null===i?i=k()(e,n):i;if("object"===("undefined"==typeof Reflect?"undefined":b()(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&h()(e,n,c),c},$=function(t){function e(){c()(this,e);var n=l()(this,t.apply(this,arguments));return n.TabListConfig=G,n.currentTabIndex=0,n}return p()(e,t),e.prototype.onWatchLevel=function(t){this.getCurrentIndex()},e.prototype.changeTab=function(t){this.currentTabIndex=t,this.$emit("changeTab",this.currentTab.level),Object(D.b)("ship_click",{shiptype:t+1})},e.prototype.getCurrentIndex=function(){var t=this;this.TabListConfig.some(function(e,n){if(e.level===t.level)return t.currentTabIndex=n,!0})},e.prototype.checkIsRenew=function(t){var e=this.getCurrentLevelInfo(t);return e&&!e.isNew},e.prototype.mounted=function(){this.getCurrentIndex()},s()(e,[{key:"currentTab",get:function(){return this.TabListConfig[this.currentTabIndex]}}]),e}(x.default);U([Object(I.Prop)({type:Number,default:1})],$.prototype,"level",void 0),U([Object(I.Watch)("level")],$.prototype,"onWatchLevel",null),U([Object(I.Prop)({type:Object})],$.prototype,"currentLevelInfo",void 0),U([Object(I.Inject)("getCurrentLevelInfo")],$.prototype,"getCurrentLevelInfo",void 0);var q=$=U([Object(I.Component)({components:{GuardIcon:N}})],$),W=(n(923),Object(B.a)(q,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-box"},[n("ul",{staticClass:"list"},t._l(t.TabListConfig,function(e,i){return n("li",{staticClass:"item dp-i-block t-center p-relative pointer v-top",class:{active:e.level===t.currentTab.level,renew:t.checkIsRenew(e.level)},on:{click:function(e){t.changeTab(i)}}},[n("span",{staticClass:"item-cntr p-absolute"},[n("guard-icon",{staticClass:"v-middle",attrs:{level:e.level}}),t._v(t._s(e.desc))],1)])}))])},[],!1,null,"31f426bc",null).exports),F=function(t,e,n,i){var r,o=arguments.length,c=o<3?e:null===i?i=k()(e,n):i;if("object"===("undefined"==typeof Reflect?"undefined":b()(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&h()(e,n,c),c},A=function(t){function e(){c()(this,e);var n=l()(this,t.apply(this,arguments));return n.rightsConfig=M,n}return p()(e,t),e.prototype.assetsUrlFilter=function(t,e){return"background-image: url('"+n(921)("./guard-"+t+"/"+e+".png")+"')"},e}(x.default);F([Object(I.Prop)({type:Number,default:1})],A.prototype,"level",void 0);var J=A=F([Object(I.Component)({components:{}})],A),V=(n(901),Object(B.a)(J,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"guard-desc-box border-box"},[n("div",{staticClass:"guard-pic bg-cover dp-i-block v-top",class:"guard-level-"+t.level}),n("ul",{staticClass:"list dp-i-block v-top"},t._l(t.rightsConfig[t.level.toString()],function(e,i){return n("li",{staticClass:"item dp-i-block"},[n("div",{staticClass:"right-pic dp-i-block v-top bg-cover",style:t.assetsUrlFilter(t.level,i+1)}),n("div",{staticClass:"info dp-i-block v-top"},[n("p",{staticClass:"title"},[t._v(t._s(e.title))]),n("p",{staticClass:"desc"},[t._v(t._s(e.desc))])])])}))])},[],!1,null,"dd3f1a0e",null).exports),Y=n(374),z=n(364),H=n(464),K=function(t,e,n,i){var r,o=arguments.length,c=o<3?e:null===i?i=k()(e,n):i;if("object"===("undefined"==typeof Reflect?"undefined":b()(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&h()(e,n,c),c},Q=function(t){function e(){return c()(this,e),l()(this,t.apply(this,arguments))}return p()(e,t),s()(e,[{key:"guardLevelText",get:function(){return H.a[this.ticketInfo.level]}},{key:"totalMoney",get:function(){return this.ticketInfo.totalPrice/1e3}}]),e}(x.default);K([Object(I.Prop)({type:Object})],Q.prototype,"ticketInfo",void 0);var X,Z=Q=K([Object(I.Component)({components:{}})],Q),tt=(n(899),Object(B.a)(Z,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ticket-info"},[n("dl",[n("dt",[t._v("主播：")]),n("dd",[n("span",{staticClass:"striking"},[t._v(t._s(t.ticketInfo.masterUserName))])]),n("dt",[t._v("船票级别：")]),n("dd",[t._v(t._s(t.guardLevelText))]),n("dt",[t._v("登船时长：")]),n("dd",[t._v(t._s(t.ticketInfo.time)+"个月")]),n("dt",[t._v("登船有效期至：")]),n("dd",[t._v(t._s(t.ticketInfo.expiredTime))]),n("dt",[t._v("总计票价：")]),n("dd",[t._v("￥"+t._s(t.totalMoney))])]),n("p",{staticClass:"tip"},[t._v("温馨提示 : 完成支付后，您将成为主播"),n("span",{staticClass:"striking"},[t._v(t._s(t.ticketInfo.masterUserName)+" ( 房间号"+t._s(t.ticketInfo.roomid)+" )")]),t._v("的"+t._s(t.guardLevelText)+"喔！")])])},[],!1,null,"9c96faa6",null).exports),et=n(377),nt=function(t,e,n,i){var r,o=arguments.length,c=o<3?e:null===i?i=k()(e,n):i;if("object"===("undefined"==typeof Reflect?"undefined":b()(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&h()(e,n,c),c},it=function(t,e,n,i){return new(n||(n=v.a))(function(r,o){function c(t){try{s(i.next(t))}catch(t){o(t)}}function a(t){try{s(i.throw(t))}catch(t){o(t)}}function s(t){t.done?r(t.value):new n(function(e){e(t.value)}).then(c,a)}s((i=i.apply(t,e||[])).next())})};!function(t){t[t.online=1]="online",t[t.goldSeed=2]="goldSeed"}(X||(X={}));var rt=function(t){function e(){c()(this,e);var n=l()(this,t.apply(this,arguments));return n.errorMsg="",n.buyTime=1,n.maxTimeNumber=99999,n.isTimeValidate=!0,n.payMethodMap=X,n.selectPayMethod=X.goldSeed,n.errorPopup=null,n.isBalanceEnough=!0,n.ticketInfo={expiredTime:"--",totalPrice:0,level:0,time:0,roomid:0,masterUserName:"",payOnlineUrl:"",token:""},n.balanceNotEnoughTip="金瓜子余额不足",n.order="",n.showPopup=[],n.rightsUrl=E,n.orderUrl="",n.orderWindowName="",n.windowInstance=null,n}return p()(e,t),e.prototype.onWatchCurrentDiscountPrice=function(t){this.isBalanceEnough=this.guardBuyInfo.balance>=t,this.isBalanceEnough||(this.selectPayMethod=X.online)},e.prototype.getNewExpiredTime=function(){var t=this,e=0;return this.priceInfo.forEach(function(n){var i=n.isNew,r=n.expiredTime,o=n.guardLevel;!i&&r>e&&o<=t.level&&(e=r)}),e||(new Date).getTime()},e.prototype.showBlockedInfo=function(t){var e=this;this.linkPopup({title:"提示",width:300,html:"\n        <p>"+t+"</p>\n      ",button:{confirm:"确定",cancel:!1}}).onConfirm(function(t){return it(e,void 0,void 0,r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.close();case 2:case"end":return e.stop()}},e,this)}))}).onCancel(function(t){t.close().then().catch()})},e.prototype.showBuySuccessInfo=function(){var t=this,e=this.isNew?"开通成功":"续费成功";return new v.a(function(n,i){t.linkPopup({title:e,width:300,html:'\n          <p style="text-align:center; margin: 22px 0 32px 0;">支付成功，你已成功'+(t.isNew?"开通":"续费")+H.a[t.level]+"</p>\n        ",button:{confirm:"我知道了",cancel:!1}}).onConfirm(function(e){return it(t,void 0,void 0,r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.close();case 2:n();case 3:case"end":return t.stop()}},t,this)}))}).onCancel(function(e){return it(t,void 0,void 0,r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.close();case 2:n();case 3:case"end":return t.stop()}},t,this)}))})})},e.prototype.buySuccessCallback=function(){return it(this,void 0,void 0,r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return T.b.emit(T.a.closeGuardStore,null),t.next=3,this.updateGuardData(this.level);case 3:return t.next=5,this.showBuySuccessInfo();case 5:T.b.emit(T.a.showAnimation,this.level);case 6:case"end":return t.stop()}},t,this)}))},e.prototype.failCallback=function(t){var e=this.$refs.btnBuy.$el,n=t&&t.errorMsg||"购买发生异常/(ㄒoㄒ)/~~";this.linkMsg(e,n,"caution")},e.prototype.updateGuardData=function(t){return it(this,void 0,void 0,r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.b)(L.a.setGuardLevel,t);case 2:case"end":return e.stop()}},e,this)}))},e.prototype.clickBuy=function(){return it(this,void 0,void 0,r.a.mark(function t(){var e,n;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.quickLogin();case 2:e=H.c.goodsId[this.level],n=et.b.getAnchorUid(),this.OpenLivePay({goodsId:e,payType:H.c.payType,goodsNum:1,successCallback:this.buySuccessCallback,extParam:{reserved1:n},failCallback:this.failCallback});case 5:case"end":return t.stop()}},t,this)}))},s()(e,[{key:"guardBuyInfo",get:function(){return this.commonInfo.guardBuyInfo}},{key:"isNew",get:function(){return this.currentLevelInfo&&this.currentLevelInfo.isNew}},{key:"btnText",get:function(){return this.isNew?"确认上船":"续费特权"}},{key:"isDiscount",get:function(){return this.currentLevelInfo&&this.currentLevelInfo.isDiscount}},{key:"returnSilver",get:function(){return this.totalPrice/3}},{key:"userGoldSeed",get:function(){return z.store.state.baseInfoUser.goldSeed}},{key:"priceInfo",get:function(){return this.guardBuyInfo.priceInfo||[]}},{key:"currentLevelInfo",get:function(){var t=this.level;return this.getCurrentLevelInfo(t)}},{key:"currentPrice",get:function(){var t=this.currentLevelInfo;return t&&t.price||0}},{key:"currentDiscountPrice",get:function(){var t=this.currentLevelInfo;return t&&(t.isDiscount?t.discountPrice:t.price)||0}},{key:"totalPrice",get:function(){return this.currentPrice*this.buyTime}},{key:"totalDiscountPrice",get:function(){return this.currentDiscountPrice*this.buyTime}},{key:"currentGuardLevel",get:function(){return this.$store.getters.baseInfoUser.privilege.privilegeType}},{key:"selectPayTitle",get:function(){return this.isBalanceEnough?"":this.balanceNotEnoughTip}},{key:"guardLevelText",get:function(){return H.a[this.level]}},{key:"masterUserName",get:function(){return this.guardBuyInfo.masterUsername}},{key:"roomId",get:function(){return this.guardBuyInfo.roomId}},{key:"buyExpiredTime",get:function(){if(!this.currentLevelInfo)return 0;var t=this.currentLevelInfo.expiredTime;return this.isNew?this.getNewExpiredTime()+2592e6*this.buyTime:t+2592e6*this.buyTime}}]),e}(x.default);nt([Object(I.Prop)({type:Number})],rt.prototype,"level",void 0),nt([Object(I.Inject)("quickLogin")],rt.prototype,"quickLogin",void 0),nt([Object(I.Inject)("getCurrentLevelInfo")],rt.prototype,"getCurrentLevelInfo",void 0),nt([Object(I.Inject)("commonInfo")],rt.prototype,"commonInfo",void 0),nt([Object(I.Watch)("currentDiscountPrice")],rt.prototype,"onWatchCurrentDiscountPrice",null);var ot=rt=nt([Object(I.Component)({components:{LinkButton:w.default,LinkInput:_.default,TicketInfo:tt},filters:{filterMoney:function(t){return Y.numberFormat.autoParse(t)},filterGoldSeedToRMB:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return t?t/1e3:"--"},filterTime:function(t){var e=new Date(t),n=e.getFullYear(),i=e.getMonth()+1,r=e.getDate();return t?n+"年"+(i>=10?i:"0"+i)+"月"+(r>=10?r:"0"+r)+"日":"--"}}})],rt),ct=(n(897),Object(B.a)(ot,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"buy-info-box border-box p-relative"},[n("div",{staticClass:"left-part dp-i-block border-box"},[n("p",{staticClass:"buy-detail"},[t._v("完成支付后，您将"+t._s(t.isNew?"成为":"续费")+"主播"),n("span",{staticClass:"striking"},[t._v(" "+t._s(t.masterUserName||"--")+"（房间号"+t._s(t.roomId||"--")+"）")]),t._v("的"+t._s(t.guardLevelText)+"喔！"),n("a",{staticClass:"rights",attrs:{href:t.rightsUrl,target:"_blank"}},[t._v("特权对比")])]),n("div",{staticClass:"select-month"},[t._v(t._s(t.isNew?"开通":"续费")+t._s(t.guardLevelText)),n("span",{staticClass:"striking v-middle"},[t._v("1")]),t._v("个月"),n("span",{staticClass:"expired-date"},[t._v("有效期至 "+t._s(t._f("filterTime")(t.buyExpiredTime)))]),n("span",{staticClass:"tip"},[t._v("（注：1个月按30天计算）")])]),n("div",{staticClass:"pay-amaount-info"},[n("span",{staticClass:"total-price"},[t._v("总额："),n("span",{staticClass:"striking v-middle"},[t._v(t._s(t._f("filterGoldSeedToRMB")(t.totalDiscountPrice)))]),t._v("元")]),t.isDiscount?n("span",{staticClass:"old-price"},[t._v("原价："+t._s(t._f("filterGoldSeedToRMB")(t.totalPrice))+" 元")]):n("span",{staticClass:"renew-price"},[t._v("之后续费只需"),n("span",{staticClass:"striking"},[t._v(t._s(t._f("filterGoldSeedToRMB")(t.currentLevelInfo&&t.currentLevelInfo.discountPrice)))]),t._v("元")]),n("span",{staticClass:"act-info"},[t._v("购买返1/3银瓜子："),n("span",{staticClass:"striking"},[t._v(t._s(t._f("filterMoney")(t.returnSilver)))])])]),n("div",{staticClass:"btn-box"},[n("link-button",{ref:"btnBuy",staticClass:"btn-go",nativeOn:{click:function(e){t.clickBuy(e)}}},[t._v(t._s(t.btnText))])],1)])])},[],!1,null,"81cd2e4a",null).exports),at=function(t,e,n,i){var r,o=arguments.length,c=o<3?e:null===i?i=k()(e,n):i;if("object"===("undefined"==typeof Reflect?"undefined":b()(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&h()(e,n,c),c},st=function(t){function e(){return c()(this,e),l()(this,t.apply(this,arguments))}return p()(e,t),e.prototype.changeTab=function(t){this.$emit("changeTab",t)},e}(x.default);at([Object(I.Prop)({type:Number,default:1})],st.prototype,"level",void 0);var ut=st=at([Object(I.Component)({components:{LinkButton:w.default,LinkInput:_.default,Tab:W,GuardDesc:V,BuyInfo:ct}})],st),lt=(n(895),Object(B.a)(ut,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("tab",{attrs:{level:this.level},on:{changeTab:this.changeTab}}),e("guard-desc",{attrs:{level:this.level}}),e("buy-info",{attrs:{level:this.level}})],1)},[],!1,null,"7811fdc2",null).exports),ft=function(t,e,n,i){var r,o=arguments.length,c=o<3?e:null===i?i=k()(e,n):i;if("object"===("undefined"==typeof Reflect?"undefined":b()(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&h()(e,n,c),c},pt=function(t){function e(){c()(this,e);var n=l()(this,t.apply(this,arguments));return n.level=0,n.showTime=4e3,n}return p()(e,t),e.prototype.show=function(t){var e=this;this.level=t,setTimeout(function(){e.level=0},this.showTime)},e.prototype.onMsg=function(){var t=this;T.b.on(T.a.showAnimation,function(e){t.show(e)})},e.prototype.created=function(){this.onMsg()},s()(e,[{key:"pic",get:function(){try{return n(893)("./guard-animation-"+this.level+".png")}catch(t){0}}},{key:"picStyle",get:function(){return{backgroundImage:"url("+this.pic+")"}}}]),e}(x.default),dt=pt=ft([Object(I.Component)({components:{}})],pt),vt=(n(892),Object(B.a)(dt,function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"fade"}},[this.level?e("div",{staticClass:"guard-animation-box p-fixed w-100 h-100"},[e("div",{staticClass:"mask p-absolute w-100 h-100"}),e("div",{staticClass:"guard-animation p-fixed bg-cover",style:this.picStyle})]):this._e()])},[],!1,null,"2fd77efe",null).exports),gt=function(t,e,n,i){var r,o=arguments.length,c=o<3?e:null===i?i=k()(e,n):i;if("object"===("undefined"==typeof Reflect?"undefined":b()(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&h()(e,n,c),c},ht=function(t,e,n,i){return new(n||(n=v.a))(function(r,o){function c(t){try{s(i.next(t))}catch(t){o(t)}}function a(t){try{s(i.throw(t))}catch(t){o(t)}}function s(t){t.done?r(t.value):new n(function(e){e(t.value)}).then(c,a)}s((i=i.apply(t,e||[])).next())})},mt=function(t){function e(){c()(this,e);var n=l()(this,t.apply(this,arguments));return n.isShowGuardStore=!1,n.showLevel=1,n.commonInfo={guardBuyInfo:{priceInfo:[],guardLevel:0,balance:0,masterUsername:"",roomId:0,expiredTime:0}},n}return p()(e,t),e.prototype.closeGuardStore=function(){this.isShowGuardStore=!1},e.prototype.getCurrentLevelInfo=function(t){var e=null;return this.priceInfo.some(function(n){if(n.guardLevel===t)return e=n,!0}),e},e.prototype.quickLogin=function(){return new v.a(function(t,e){try{Object(C.quickLogin)(),t()}catch(t){e(t)}})},e.prototype.getBuyInfo=function(){return ht(this,void 0,void 0,r.a.mark(function t(){var e;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(j.getGuardBuyInfo)();case 2:(e=t.sent).error||(this.commonInfo.guardBuyInfo=e.data);case 4:case"end":return t.stop()}},t,this)}))},e.prototype.changeTab=function(t){this.showLevel=t},e.prototype.onMsg=function(){var t=this;T.b.on(T.a.openGuardStore,function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).level,n=void 0===e?O.a.normal:e;return ht(t,void 0,void 0,r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.quickLogin();case 2:this.isShowGuardStore=!0,n?(n=parseInt(n,10),this.showLevel=n||this.level):this.showLevel=Object(L.c)()||O.a.jian,T.b.emit(T.a.refreshBuyInfo,null);case 5:case"end":return t.stop()}},t,this)}))}),T.b.on(T.a.closeGuardStore,function(){t.isShowGuardStore=!1}),T.b.on(T.a.refreshBuyInfo,function(){return ht(t,void 0,void 0,r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getBuyInfo();case 2:case"end":return t.stop()}},t,this)}))})},e.prototype.created=function(){this.showLevel=this.level,this.onMsg()},e.prototype.mounted=function(){T.b.emit(T.a.guardStoreVMInit,null)},s()(e,[{key:"priceInfo",get:function(){return this.commonInfo.guardBuyInfo.priceInfo||[]}}]),e}(x.default);gt([Object(I.Prop)({type:Number,default:1})],mt.prototype,"level",void 0),gt([Object(I.Provide)("commonInfo")],mt.prototype,"commonInfo",void 0),gt([Object(I.Provide)("getCurrentLevelInfo")],mt.prototype,"getCurrentLevelInfo",null),gt([Object(I.Provide)("quickLogin")],mt.prototype,"quickLogin",null);var bt=mt=gt([Object(I.Component)({components:{LinkButton:w.default,LinkInput:_.default,GuardMain:lt,Animation:vt}})],mt),yt=(n(890),Object(B.a)(bt,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.isShowGuardStore,expression:"isShowGuardStore"}],staticClass:"guard-store-box p-fixed w-100 h-100"},[e("div",{staticClass:"mask p-absolute w-100 h-100"}),e("div",{staticClass:"cntr p-fixed"},[e("guard-main",{attrs:{level:this.showLevel},on:{changeTab:this.changeTab}}),e("div",{staticClass:"close icon-font icon-close p-absolute pointer",on:{click:this.closeGuardStore}})],1)])]),e("animation")],1)},[],!1,null,"e6d2778e",null));e.default=yt.exports},513:function(t,e,n){},514:function(t,e,n){},515:function(t,e,n){},516:function(t,e,n){},517:function(t,e,n){},518:function(t,e,n){},519:function(t,e,n){},520:function(t,e,n){},768:function(t,e,n){t.exports=n.p+"static/img/guard-animation-3.da178e1.png"},769:function(t,e,n){t.exports=n.p+"static/img/guard-animation-2.b23f23d.png"},770:function(t,e,n){t.exports=n.p+"static/img/guard-animation-1.3b5c2c3.png"},890:function(t,e,n){"use strict";var i=n(513);n.n(i).a},892:function(t,e,n){"use strict";var i=n(514);n.n(i).a},893:function(t,e,n){var i={"./guard-animation-1.png":770,"./guard-animation-2.png":769,"./guard-animation-3.png":768};function r(t){var e=o(t);return n(e)}function o(t){var e=i[t];if(!(e+1)){var n=new Error('Cannot find module "'+t+'".');throw n.code="MODULE_NOT_FOUND",n}return e}r.keys=function(){return Object.keys(i)},r.resolve=o,t.exports=r,r.id=893},895:function(t,e,n){"use strict";var i=n(515);n.n(i).a},897:function(t,e,n){"use strict";var i=n(516);n.n(i).a},899:function(t,e,n){"use strict";var i=n(517);n.n(i).a},901:function(t,e,n){"use strict";var i=n(518);n.n(i).a},902:function(t,e,n){t.exports=n.p+"static/img/guard-pic-3.3b16199.png"},903:function(t,e,n){t.exports=n.p+"static/img/guard-pic-2.9f84ce4.png"},904:function(t,e,n){t.exports=n.p+"static/img/guard-pic-1.9da6a13.png"},905:function(t,e,n){t.exports=n.p+"static/img/4.9a0fa96.png"},906:function(t,e,n){t.exports=n.p+"static/img/3.044e0b0.png"},907:function(t,e,n){t.exports=n.p+"static/img/2.549de2c.png"},908:function(t,e,n){t.exports=n.p+"static/img/1.b595dbe.png"},909:function(t,e,n){t.exports=n.p+"static/img/6.ff4f53f.png"},910:function(t,e,n){t.exports=n.p+"static/img/5.ccb511a.png"},911:function(t,e,n){t.exports=n.p+"static/img/4.044e0b0.png"},912:function(t,e,n){t.exports=n.p+"static/img/3.549de2c.png"},913:function(t,e,n){t.exports=n.p+"static/img/2.4ab51b4.png"},914:function(t,e,n){t.exports=n.p+"static/img/1.01cbd40.png"},915:function(t,e,n){t.exports=n.p+"static/img/6.ff4f53f.png"},916:function(t,e,n){t.exports=n.p+"static/img/5.1c525c7.png"},917:function(t,e,n){t.exports=n.p+"static/img/4.044e0b0.png"},918:function(t,e,n){t.exports=n.p+"static/img/3.549de2c.png"},919:function(t,e,n){t.exports=n.p+"static/img/2.695a2ae.png"},920:function(t,e,n){t.exports=n.p+"static/img/1.01cbd40.png"},921:function(t,e,n){var i={"./guard-1/1.png":920,"./guard-1/2.png":919,"./guard-1/3.png":918,"./guard-1/4.png":917,"./guard-1/5.png":916,"./guard-1/6.png":915,"./guard-2/1.png":914,"./guard-2/2.png":913,"./guard-2/3.png":912,"./guard-2/4.png":911,"./guard-2/5.png":910,"./guard-2/6.png":909,"./guard-3/1.png":908,"./guard-3/2.png":907,"./guard-3/3.png":906,"./guard-3/4.png":905,"./guard-animation-1.png":770,"./guard-animation-2.png":769,"./guard-animation-3.png":768,"./guard-pic-1.png":904,"./guard-pic-2.png":903,"./guard-pic-3.png":902};function r(t){var e=o(t);return n(e)}function o(t){var e=i[t];if(!(e+1)){var n=new Error('Cannot find module "'+t+'".');throw n.code="MODULE_NOT_FOUND",n}return e}r.keys=function(){return Object.keys(i)},r.resolve=o,t.exports=r,r.id=921},923:function(t,e,n){"use strict";var i=n(519);n.n(i).a},925:function(t,e,n){"use strict";var i=n(520);n.n(i).a}}]);