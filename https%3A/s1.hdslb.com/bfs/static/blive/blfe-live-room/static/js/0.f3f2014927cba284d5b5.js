(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1516:function(t,e,n){var i=n(32),o=n(20),r=function(t,e){if(o(t),!i(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,i){try{(i=n(64)(Function.call,n(180).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return r(t,n),e?t.__proto__=n:i(t,n),t}}({},!1):void 0),check:r}},1517:function(t,e,n){var i=n(25);i(i.S,"Object",{setPrototypeOf:n(1516).set})},1518:function(t,e,n){n(1517),t.exports=n(9).Object.setPrototypeOf},1519:function(t,e,n){t.exports={default:n(1518),__esModule:!0}},1587:function(t,e,n){var i=n(25);i(i.S,"Object",{create:n(127)})},1588:function(t,e,n){n(1587);var i=n(9).Object;t.exports=function(t,e){return i.create(t,e)}},363:function(t,e,n){"use strict";n.r(e);var i,o,r,s,u,c,a=n(120),f=n(84),m=n(124),l=n.n(m),p=n(24),d=n.n(p),h=n(31),T=Object(h.b)("store/activity"),g="SET_ACTIVITY",S="SET_FREE_GIFT",_="UPDATE_FREE_GIFT",E="SET_HEART_INFO",A="SET_TOP3_SCORE",I="SET_RECEIVE_GIFT_STATUS",v="SET_MASTER_RANK_SIDEBAR_BTN",y="SET_MASTER_RANK_CUSTOM_CONFIG",G={state:{isHeart:!1,heartTime:0,top3:[],common:{},freeGift:{},eventGifts:[],lottery:[],receiveGift:[],welcome:[],masterRank:null},mutations:((i={})[g]=function(t,e){d()(e).forEach(function(n){void 0!==t[n]&&(t[n]=e[n])})},i[S]=function(t,e){e&&(t.freeGift=e)},i[_]=function(t,e){t.freeGift&&d()(e).forEach(function(n){var i=t.freeGift[n],o=e[n];if(!o)return T(_+" 传入 payload 格式非法",o);void 0!==i?d()(o).forEach(function(e){void 0!==o[e]&&void 0!==i[e]&&(t.freeGift[n][e]=o[e])}):t.freeGift[n]=o})},i[A]=function(t,e){e.value>t.top3[e.index].score&&(t.top3[e.index].score=e.value)},i[E]=function(t,e){t.isHeart=e.isHeart,t.heartTime=e.heartTime||t.heartTime},i[I]=function(t,e){t.receiveGift[e.index].status=e.status},i[v]=function(t,e){t.masterRank.sidebarBtn=l()({},t.masterRank.sidebarBtn,e)},i[y]=function(t,e){t.masterRank.rankListCustomConifg=l()(t.masterRank.rankListCustomConifg,e)},i),actions:{setActivity:function(t,e){(0,t.commit)(g,e)},setFreeGift:function(t,e){(0,t.commit)(S,e)},updateFreeGift:function(t,e){(0,t.commit)(_,e)},setTop3Score:function(t,e){(0,t.commit)(A,e)},setHeartInfo:function(t,e){(0,t.commit)(E,e)},setReceiveGiftStatus:function(t,e){(0,t.commit)(I,e)},setMasterRankSidebarBtan:function(t,e){(0,t.commit)(v,e)},setMasterRankListCustomConfig:function(t,e){(0,t.commit)(y,e)}},getters:{activity:function(t){return t},freeGift:function(t){return t.freeGift},masterRankCustomConfig:function(t){return t.masterRank&&t.masterRank.rankListCustomConifg}}},L=n(796),b=n(795),D=n(794),P=n(708),k=n(793),O=n(792),C="SET_CURRENT_TAB",N="SET_IS_OPEN",w="SET_ACTIVITY_TAB",R={namespaced:!0,state:{currentTab:"",activityTab:{},isOpen:!1},mutations:((o={})[C]=function(t,e){t.currentTab=e},o[N]=function(t,e){t.isOpen=e},o[w]=function(t,e){t.activityTab=e},o),actions:{setCurrentTab:function(t,e){(0,t.commit)(C,e)},setIsOpen:function(t,e){(0,t.commit)(N,e)},setActivityTab:function(t,e){(0,t.commit)(w,e)}},getters:{getCurrentTab:function(t){return t.currentTab},getIsOpen:function(t){return t.isOpen},getActivityTab:function(t){return t.activityTab}}},M="ADD_CONFIG",U="ADD_PANEL",x="DEL_PANEL",F="UPDATE_PANEL",B="ADD_ICON",K={state:{popupsConfig:{},popupsState:[],smallIcon:[]},mutations:((r={})[M]=function(t,e){t.popupsConfig[e.id]=e},r[U]=function(t,e){t.popupsState.push(e)},r[x]=function(t,e){t.popupsState.splice(e,1)},r[F]=function(t,e){var n=e.index,i=e.value;t.popupsState.splice(n,1,i)},r[B]=function(t,e){t.smallIcon.push(e)},r),actions:{addPopupConfig:function(t,e){(0,t.commit)(M,e)},addPopup:function(t,e){(0,t.commit)(U,e)},delPopup:function(t,e){(0,t.commit)(x,e)},setPopup:function(t,e){(0,t.commit)(F,e)},addSmallIcon:function(t,e){(0,t.commit)(B,e)}},getters:{chatPopupArea:function(t){return t},chatPopupsConfig:function(t){return t.popupsConfig},chatPopupsState:function(t){return t.popupsState},smallIcon:function(t){return t.smallIcon},getPopupConfigById:function(t){return function(e){return t.popupsConfig[e]}}}},Y=n(705),Q="SET_WELCOME",V="ADD_WELCOME",j={state:{name:"",list:{}},mutations:((s={})[Q]=function(t,e){t.name=e.name,d()(e.list).forEach(function(n){t.list[n]=e.list[n]})},s[V]=function(t,e){d()(e).forEach(function(n){t.list[n]=e[n]})},s),actions:{setWelcome:function(t,e){(0,t.commit)(Q,e)},addWelcome:function(t,e){(0,t.commit)(V,e)}},getters:{userWelcomeName:function(t){return t.name},welcomeAnimationConfig:function(t){return t.list},getWelcomeAnimationConfigByName:function(t){return function(e){return t.list[e]}},welcomeAnimation:function(t){return t}}},H="SET_INSTANCE",W={namespaced:!0,state:{pk:{}},mutations:((u={})[H]=function(t,e){var n=e.type,i=e.instance;t[n]=i},u),actions:{setInstance:function(t,e){(0,t.commit)(H,e)}},getters:{getInstance:function(t){return function(e){return t[e]}}}},J="SET_ACTIVITY_INFO",q="SET_BANNER_INFO",Z={state:{activityInfo:null,bannerInfo:null},mutations:((c={})[J]=function(t,e){a.default.set(t,"activityInfo",e)},c[q]=function(t,e){a.default.set(t,"bannerInfo",e)},c),actions:{setActivityInfo:function(t,e){(0,t.commit)(J,e)},setBannerInfo:function(t,e){(0,t.commit)(q,e)}},getters:{activityInfo:function(t){return t.activityInfo},bannerInfo:function(t){return t.bannerInfo}},namespaced:!0},z=n(791);n.d(e,"store",function(){return tt}),a.default.use(f.default);var X,$={activity:G,appStatus:L.a,baseInfoActivity:b.a,baseInfoAnchor:D.a,baseInfoRoom:P.a,baseInfoUser:k.a,gift:O.a,rankList:R,chatPopupArea:K,danmakuOptions:Y.a,welcomeAnimation:j,instance:W,recharge:Z,lpl:z.a},tt=new f.default.Store({modules:(X=$,X)})},367:function(t,e,n){"use strict";e.__esModule=!0;var i=s(n(1519)),o=s(n(395)),r=s(n(121));function s(t){return t&&t.__esModule?t:{default:t}}e.default=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":(0,r.default)(e)));t.prototype=(0,o.default)(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(i.default?(0,i.default)(t,e):t.__proto__=e)}},368:function(t,e,n){"use strict";e.__esModule=!0;var i,o=n(121),r=(i=o)&&i.__esModule?i:{default:i};e.default=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==(void 0===e?"undefined":(0,r.default)(e))&&"function"!=typeof e?t:e}},378:function(t,e,n){"use strict";var i=n(42),o=n.n(i),r=n(363),s=function(){function t(){o()(this,t)}return t.getUid=function(){return r.store.getters.baseInfoUser.uid},t.getRoomId=function(){return r.store.getters.baseInfoRoom.roomID},t.getParentAreaId=function(){return r.store.getters.baseInfoRoom.parentAreaID},t.getAreaId=function(){return r.store.getters.baseInfoRoom.areaID},t.getAnchorUid=function(){return r.store.getters.baseInfoAnchor.uid},t.getAnchorUserName=function(){return r.store.getters.baseInfoAnchor.username},t.getAnchorFace=function(){return r.store.getters.baseInfoAnchor.face},t.getStore=function(){return r.store},t}();n.d(e,"a",function(){return s})},395:function(t,e,n){t.exports={default:n(1588),__esModule:!0}},401:function(t,e,n){"use strict";var i=n(42),o=n.n(i),r=n(122),s=n.n(r),u=n(432),c=function(){function t(e){o()(this,t),this.id=0,this.type=0,this.label="--",this.description="--",this.expScore="",this.rule="",this.rights="",this.buyable=!0,this.countSet=[],this.customInput=!0,this.countLimit=-1,this.goldPrice=0,this.silverPrice=0,this.discountPrice=0,this.price=0,this.cornerMark="",this.specificPanel="",this.isShownInPlayer=!1,this.fansMedalGift=!1,this.ownCount=!1,this.position=0,this.planId=0,this.id=e.id||0,this.label=e.label||"--",this.description=e.description||"--",this.effect=e.effect||0,this.rule=e.rule||"",this.rights=e.rights||"",this.buyable=e.buyable||!1,this.customInput=e.customInput||!1,this.countSet=e.countSet||[],this.countLimit=e.countLimit||-1,this.goldPrice=e.goldPrice||0,this.silverPrice=e.silverPrice||0,this.price=e.price||0,this.discountPrice=e.discountPrice,this.cornerMark=e.cornerMark,this.specificPanel=e.specificPanel||"",this.isShownInPlayer=!!e.isShownInPlayer,this.fansMedalGift=!!e.fansMedalGift,this.position=e.position,this.planId=e.planId,"number"==typeof e.ownCount&&(this.ownCount=e.ownCount)}return s()(t,[{key:"giftImg",get:function(){return{gif:Object(u.a)(this.id),gifGrey:Object(u.b)(this.id),png:Object(u.d)(this.id)}}}]),t}(),a=n(368),f=n.n(a),m=n(367),l=n.n(m),p=function(t){function e(n){o()(this,e);var i=f()(this,t.call(this,n));return i.type=2,i}return l()(e,t),e}(c),d=function(t){function e(n){o()(this,e);var i=f()(this,t.call(this,n));return i.type=1,i}return l()(e,t),e}(c),h=function(t){function e(n){o()(this,e);var i=f()(this,t.call(this,n));return i.type=0,i}return l()(e,t),e}(c),T=function(t){function e(n){o()(this,e);var i=f()(this,t.call(this,n));return i.type=3,i.specificPanel="heart-beat-gift",i.expire={start:"",end:""},i.expire=n.expire||{start:"",end:""},i}return l()(e,t),e}(c),g=n(475),S=n(419),_=n(14),E=n.n(_),A=n(24),I=n.n(A),v=n(8),y=n.n(v),G=n(378),L=n(363),b=function(t,e,n,i){return new(n||(n=y.a))(function(o,r){function s(t){try{c(i.next(t))}catch(t){r(t)}}function u(t){try{c(i.throw(t))}catch(t){r(t)}}function c(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(s,u)}c((i=i.apply(t,e||[])).next())})},D=function(){function t(){o()(this,t)}return t.commit=function(t,e){L.store.dispatch(t,e).then().catch()},t.getConfigByType=function(t){return L.store.getters["gift/getAnimationConfigByType"](t)},t.getQueue=function(){return L.store.getters["gift/getAnimationsQueue"]},t.addGiftAnimation=function(t){this.commit("gift/addGiftAnimation",t)},t.deleteAnimation=function(){this.commit("gift/deleteGiftAnimation",null)},t.clearAnimations=function(){this.commit("gift/clearGiftAnimations",G.a.getUid())},t.loadAnimationJson=function(t){return b(this,void 0,void 0,E.a.mark(function e(){var n;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n={},I()(t).forEach(function(e){var i=t[e].fullScreenAnimationJsonUrl;i&&(n[e]=i)}),this.commit("gift/setGiftAnimationsConfig",n);case 3:case"end":return e.stop()}},e,this)}))},t.setAnimationsConfig=function(){var t=this;if(I()(L.store.getters["gift/giftAssets"]).length>0){var e=L.store.getters["gift/giftAssets"];this.loadAnimationJson(e).then().catch()}else{var n=null;n=L.store.watch(function(){return L.store.getters["gift/giftAssets"]},function(e){0!==I()(e).length&&(t.loadAnimationJson(e).then().catch(),n())})}},t}(),P=function t(e,n){o()(this,t),this.type=e,this.uid=n},k=function(t){function e(){o()(this,e);var n=f()(this,t.apply(this,arguments));return n.isBlock=!1,n}return l()(e,t),e.prototype.getAnimationQueue=function(){return[]},e.prototype.isTypeRegiste=function(t){return!!D.getConfigByType(t)},e.prototype.setBlockStatus=function(t){this.isBlock=t},e.prototype.add=function(t){if(this.isBlock&&!this.checkIsCurrentUser(t.uid)||!this.isTypeRegiste(t.type))t=null;else{var e=-1,n=D.getQueue();this.checkIsCurrentUser(t.uid)?n.some(function(n,i){if(n.uid!==t.uid)return e=i,!0;e=i+1}):e=-1,D.addGiftAnimation({data:t,index:e})}},e.prototype.delete=function(){D.deleteAnimation()},e.prototype.clear=function(){D.clearAnimations()},e.prototype.next=function(){this.delete()},e.prototype.setAnimationsConfig=function(){D.setAnimationsConfig()},e}(function(){function t(){o()(this,t)}return t.prototype.checkIsCurrentUser=function(t){return G.a.getUid()===t},t}()),O=n(707);n(706);n.d(e,!1,function(){return S.c}),n.d(e,!1,function(){}),n.d(e,"f",function(){return S.d}),n.d(e,"a",function(){return S.a}),n.d(e,"b",function(){return O.a}),n.d(e,!1,function(){return c}),n.d(e,"c",function(){return p}),n.d(e,"g",function(){return d}),n.d(e,"i",function(){return h}),n.d(e,"h",function(){return T}),n.d(e,!1,function(){return g.a}),n.d(e,"d",function(){return P}),n.d(e,"e",function(){return k}),n.d(e,!1,function(){}),n.d(e,!1,function(){})},419:function(t,e,n){"use strict";n.d(e,"c",function(){return p}),n.d(e,"d",function(){return d}),n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o});var i,o,r=n(368),s=n.n(r),u=n(367),c=n.n(u),a=n(42),f=n.n(a),m=n(432),l=n(378);!function(t){t[t.normal=0]="normal",t[t.community=1]="community",t[t.top=2]="top",t[t.special=3]="special",t[t.silver=4]="silver"}(i||(i={})),function(t){t[t.smallTV=25]="smallTV"}(o||(o={}));var p=function(t){function e(n){return f()(this,e),s()(this,t.call(this,n))}return c()(e,t),e}(function(){function t(e){f()(this,t);var n=e.id,i=e.name,o=e.desc,r=e.rule,s=e.rights,u=e.price,c=e.coinType,a=e.effect,m=e.cornerMark,l=e.basic,p=e.gif,d=e.frameAnimation,h=e.frameAnimationTotalCount,T=e.fullScreenAnimationJsonUrl,g=e.startPic,S=e.endPic,_=e.type,E=e.countSet;this.id=n,this.name=i,this.desc=o,this.rule=r,this.rights=s,this.price=u,this.coinType=c,this.effect=a,this.basic=l,this.cornerMark=m,this.frameAnimation=d,this.frameAnimationTotalCount=h,this.fullScreenAnimationJsonUrl=T,this.gif=p,this.startPic=g,this.endPic=S,this.type=_,this.countSet=E}return t.prototype.getFlashPic=function(){return{startPic:this.startPic,endPic:this.endPic,gif:Object(m.a)(this.id),png:Object(m.d)(this.id)}},t}()),d=function(){function t(){f()(this,t)}return t.getAssets=function(){return l.a.getStore().getters["gift/giftAssets"]},t.getAssetsById=function(t){return l.a.getStore().getters["gift/getGiftAssetsById"](t)},t}()},432:function(t,e,n){"use strict";n.d(e,"d",function(){return c}),n.d(e,"a",function(){return a}),n.d(e,"b",function(){return f}),n.d(e,"c",function(){return m});var i=n(445),o=n.n(i),r=n(401),s=o.a+"static/img/gift-images/",u=[];function c(t){return u.indexOf(t)>-1?s+"image-png/gift-"+t+".png?107edfa7ac0ea70":r.f.getAssetsById(t).basic}function a(t){return s+"image-gif/gift-"+t+".gif?107edfa7ac0ea70"}function f(t){return s+"image-gif-grey/gift-grey-"+t+".gif?107edfa7ac0ea70"}function m(t){return r.f.getAssetsById(t).frameAnimation}},444:function(t,e,n){"use strict";var i,o;n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o}),function(t){t[t.notStart=0]="notStart",t[t.inProcess=1]="inProcess",t[t.end=2]="end"}(i||(i={})),function(t){t[t.like=1]="like",t[t.unlike=2]="unlike"}(o||(o={}))},445:function(t,e,n){t.exports="//s1.hdslb.com/bfs/static/blive/blfe-live-room/"},475:function(t,e,n){"use strict";var i=n(14),o=n.n(i),r=n(42),s=n.n(r),u=n(8),c=n.n(u),a=n(363),f=n(378),m=n(419);n.d(e,"a",function(){return h}),n.d(e,"b",function(){return T});var l,p=function(t,e,n,i){return new(n||(n=c.a))(function(o,r){function s(t){try{c(i.next(t))}catch(t){r(t)}}function u(t){try{c(i.throw(t))}catch(t){r(t)}}function c(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(s,u)}c((i=i.apply(t,e||[])).next())})};!function(t){t[t.normal=3e3]="normal",t[t.community=2e3]="community",t[t.top=2e4]="top",t[t.special=6e3]="special",t[t.smallTV=3e4]="smallTV",t[t.min=1e3]="min"}(l||(l={}));var d=function(){function t(){s()(this,t)}return t.commit=function(t,e){return a.store.dispatch(t,e).then().catch()},t.getters=function(){return a.store.getters},t.getQueue=function(){return this.getters()["gift/superGift"]},t.addSuperGift=function(t){return this.commit("gift/addSuperGift",t)},t.clearSuperGifts=function(){return this.commit("gift/clearSuperGifts",f.a.getUid())},t.deleteSuperGift=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return this.commit("gift/deleteSuperGift",{superGift:t,newSuperGift:e})},t.updateSuperGift=function(t,e){return this.commit("gift/updateSuperGift",{index:e,superGift:t})},t.getSuperGiftById=function(t){return this.getters()["gift/getSuperGiftById"](t)},t}(),h=function(){function t(e){s()(this,t),this.giftID=0,this.giftCount=0,this.giftLabel="--",this.giftType=m.a.normal,this.userName="--",this.userId=0,this.combo=0,this.id="",this.avatar="",this.guardLevel=0,this.superGiftNum=0,this.timer=null,this.addTime=0,this.tagPicUrl="",this.giftAssets=null,this.showTime=0;var n=e.giftID,i=void 0===n?0:n,o=e.giftCount,r=void 0===o?0:o,u=e.giftLabel,c=void 0===u?"":u,a=e.userName,f=void 0===a?"":a,l=e.userId,p=void 0===l?0:l,d=e.combo,h=void 0===d?0:d,T=e.avatar,g=void 0===T?"":T,S=e.guardLevel,_=void 0===S?0:S,E=e.superGiftNum,A=e.tagPicUrl,I=void 0===A?"":A;this.giftID=i,this.giftCount="string"==typeof r?parseInt(r):r,this.giftLabel=c,this.giftType=this.getGiftAssets().type,this.userName=f,this.userId=p,this.combo=h,this.id="SuperGift-"+f+"-"+i+"-"+c,this.avatar=g,this.guardLevel=_,this.superGiftNum=E,this.giftAssets=this.getGiftAssets(),this.showTime=this.getShowTime(),this.tagPicUrl=I,this.addTime=(new Date).getTime()}return t.prototype.getGiftAssets=function(){return m.d.getAssetsById(this.giftID)},t.prototype.isTopGift=function(){var t=this.giftAssets;return t&&t.type===m.a.top},t.prototype.getShowTime=function(){var t=this.giftType;return this.giftID===m.b.smallTV?l.smallTV:l[m.a[t]]},t.prototype.setTimeId=function(t){this.timer=t},t}(),T=function(){function t(){s()(this,t),this.isBlock=!1,this.isOpenThrottle=!1,this.throttleTime=1e3,this.waitQueue=[]}return t.prototype.addSuperGift=function(t){return d.addSuperGift(t)},t.prototype.updateSuperGift=function(t,e){return d.updateSuperGift(t,e)},t.prototype.deleteSuperGift=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return d.deleteSuperGift(t,e)},t.prototype.setBlockStatus=function(t){this.isBlock=t},t.prototype.getQueueData=function(){return d.getQueue()},t.prototype.checkIsCurrentUser=function(t){return f.a.getUid()===t},t.prototype.checkRepeat=function(t){var e=this;return new c.a(function(n,i){var o=d.getSuperGiftById(t.id),r=o.index,s=o.superGift;if(r>-1&&s)throw e.update(t,s,r).then().catch(),new Error("已有道具，不再重复添加，直接更新道具新");n()})},t.prototype.setCountDown=function(t){var e=this;return new c.a(function(n,i){var r=setTimeout(function(){return p(e,void 0,void 0,o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.delete(t);case 2:n();case 3:case"end":return e.stop()}},e,this)}))},t.showTime);t.setTimeId(r)})},t.prototype.update=function(t,e,n){return p(this,void 0,void 0,o.a.mark(function i(){return o.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(!(t.superGiftNum<e.superGiftNum)){i.next=4;break}return clearTimeout(t.timer),t=null,i.abrupt("return");case 4:return clearTimeout(e.timer),i.next=7,this.updateSuperGift(t,n);case 7:return clearTimeout(t.timer),t=null,i.next=11,this.setCountDown(e);case 11:case"end":return i.stop()}},i,this)}))},t.prototype.checkIsExceedLength=function(){return this.getQueueData().filter(function(t){return!!t}).length>=3},t.prototype.deleteExistingOwnSuperGift=function(t){return p(this,void 0,void 0,o.a.mark(function e(){var n,i;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.userId,i=this.getQueueData(),this.checkIsCurrentUser(n)&&0!==i.length){e.next=4;break}return e.abrupt("return",c.a.resolve());case 4:return e.next=6,this.delete(i[0],t);case 6:return e.next=8,this.setCountDown(t);case 8:throw new Error("当前用户赠送的连击道具记录将直接替换一号位道具记录");case 9:case"end":return e.stop()}},e,this)}))},t.prototype.deleteExcessSuperGift=function(t){var e=this;if(!this.checkIsExceedLength())return c.a.resolve();var n=f.a.getUid(),i=this.getQueueData(),r=t.getGiftAssets().price,s=-1,u=null;return i.forEach(function(t,e){var i=t.getGiftAssets().price;t.userId!==n&&(r>i||r===i&&(!u||u&&u.addTime>t.addTime))&&(r=i,s=e,u=t)}),new c.a(function(n,r){return p(e,void 0,void 0,o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(-1!==s){e.next=4;break}r("新增道具价位最低不能顶替任何现有道具， 无奈的丢弃"),e.next=15;break;case 4:if(2!==s){e.next=12;break}return e.next=7,this.delete(i[s],t);case 7:return e.next=9,this.setCountDown(t);case 9:r("新增道具会替换掉最后一个道具， 直接替换"),e.next=15;break;case 12:return e.next=14,this.delete(i[s]);case 14:n();case 15:case"end":return e.stop()}},e,this)}))})},t.prototype.checkBlock=function(t){var e=this;return new c.a(function(n,i){if(e.isBlock&&!e.checkIsCurrentUser(t.userId))throw clearTimeout(t.timer),t=null,new Error("当前处于连击道具屏蔽状态，不再继续添加");n()})},t.prototype.checkThrottle=function(t){var e=this;return new c.a(function(n,i){if(e.isOpenThrottle&&!e.checkIsCurrentUser(t.userId))throw t.isTopGift()?(e.addGiftToWaitQueue(t),new Error("当前处于节流状态，顶级道具进入等待队列")):new Error("当前处于节流状态，且不是当前用户，该条记录将被丢弃");e.isOpenThrottle=!0,setTimeout(function(){return p(e,void 0,void 0,o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.isOpenThrottle=!1,t.next=3,this.playWaitQueue();case 3:case"end":return t.stop()}},t,this)}))},e.throttleTime),n()})},t.prototype.playWaitQueue=function(){return p(this,void 0,void 0,o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(this.waitQueue.length>0)){t.next=3;break}return t.next=3,this.add(this.waitQueue.shift());case 3:case"end":return t.stop()}},t,this)}))},t.prototype.addGiftToWaitQueue=function(t){var e=t.getGiftAssets(),n=-1,i=0;this.waitQueue.some(function(o,r){var s=o.getGiftAssets();return e.price>s.price?(n=r,!0):t.id===o.id?(n=r,i=1,!0):void 0}),n>-1?this.waitQueue.splice(n,i,t):this.waitQueue.push(t)},t.prototype.add=function(t){return p(this,void 0,void 0,o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.checkBlock(t);case 3:return e.next=5,this.checkRepeat(t);case 5:return e.next=7,this.checkThrottle(t);case 7:return e.next=9,this.deleteExistingOwnSuperGift(t);case 9:return e.next=11,this.deleteExcessSuperGift(t);case 11:return e.next=13,this.addSuperGift(t);case 13:return e.next=15,this.setCountDown(t);case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0);case 20:case"end":return e.stop()}},e,this,[[0,17]])}))},t.prototype.delete=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return t&&clearTimeout(t.timer),this.deleteSuperGift(t,e)},t.prototype.clear=function(){return d.clearSuperGifts()},t}()},705:function(t,e,n){"use strict";n.d(e,"b",function(){return s});var i,o=n(24),r=n.n(o),s={SET_ENTIRE_DANMAKU_OPTIONS:"SET_ENTIRE_DANMAKU_OPTIONS",SET_AUTO_DENSITY:"SET_AUTO_DENSITY",SET_DANMAKU_OPACITY:"SET_DANMAKU_OPACITY",SET_DANMAKU_DENSITY:"SET_DANMAKU_DENSITY",SET_DANMAKU_FONT_SIZE_SCALE:"SET_DANMAKU_FONT_SIZE_SCALE"},u=((i={})[s.SET_ENTIRE_DANMAKU_OPTIONS]=function(t,e){r()(e).forEach(function(n){void 0!==t[n]&&(t[n]=e[n])})},i[s.SET_AUTO_DENSITY]=function(t,e){t.autoAdjustDanmakuDensity=!!e},i[s.SET_DANMAKU_OPACITY]=function(t,e){"number"==typeof e&&e>=0&&e<=100&&(t.danmakuOpacity=e)},i[s.SET_DANMAKU_DENSITY]=function(t,e){"number"==typeof e&&e>=0&&e<=86&&(t.danmakuDensity=e)},i[s.SET_DANMAKU_FONT_SIZE_SCALE]=function(t,e){"number"==typeof e&&e>=0&&e<=200&&(t.danmakuFontSizeScale=e)},i),c={setEntireDanmakuOptions:function(t,e){(0,t.commit)(s.SET_ENTIRE_DANMAKU_OPTIONS,e)},switchDanmakuAutoDensityStatus:function(t,e){(0,t.commit)(s.SET_AUTO_DENSITY,e)},setDanmakuOpacity:function(t,e){(0,t.commit)(s.SET_DANMAKU_OPACITY,e)},setDanmakuDensity:function(t,e){(0,t.commit)(s.SET_DANMAKU_DENSITY,e)},setDanmakuFontSizeScale:function(t,e){(0,t.commit)(s.SET_DANMAKU_FONT_SIZE_SCALE,e)}};e.a={state:{danmakuDensity:81,danmakuFontSizeScale:100,danmakuOpacity:100,autoAdjustDanmakuDensity:!1},mutations:u,actions:c,getters:{danmakuDensityDisplay:function(t){switch(t.danmakuDensity){case 86:return"弹幕超频";case 85:return 500;case 84:return 400;case 83:return 300;case 82:return 200;case 81:return 100;default:return t.danmakuDensity}},danmakuOptions:function(t){return t}}}},706:function(t,e){},707:function(t,e,n){"use strict";var i;n.d(e,"a",function(){return i}),function(t){t.top="0",t.right="1",t.down="2",t.left="3"}(i||(i={}))},708:function(t,e,n){"use strict";n.d(e,"b",function(){return s});var i,o=n(24),r=n.n(o),s={SET_INFO_ROOM:"SET_INFO_ROOM",SET_FEED_ALERT:"SET_FEED_ALERT",SET_ROOM_SILENT:"SET_ROOM_SILENT"},u=((i={})[s.SET_INFO_ROOM]=function(t,e){r()(e).forEach(function(n){void 0!==t[n]&&(t[n]=e[n])})},i[s.SET_FEED_ALERT]=function(t,e){t.feedAlertOpen=!!e},i[s.SET_ROOM_SILENT]=function(t,e){e=e||{},t.roomSilentDuration=e.duration||0,t.roomSilentType=e.type||!1,t.roomSilentLevel=e.level||0},i),c={baseInfoRoom:function(t,e){(0,t.commit)(s.SET_INFO_ROOM,e)},setRoomSilent:function(t,e){(0,t.commit)(s.SET_ROOM_SILENT,e)}};e.a={state:{areaID:0,parentAreaID:0,areaName:"--",parentAreaName:"--",oldAreaId:0,hotWords:[],background:"//static.hdslb.com/live-static/images/bg/3.jpg",blockTime:0,blockType:0,coverUrl:"",freeSilverTimes:0,guard:0,guardInfo:{heartStatus:!1,heartTime:0,noticeStatus:0},harunaName:"22",liveStatus:"LIVE",liveTime:"",onlineCount:0,roomID:0,roomSilentLevel:0,roomSilentDuration:0,roomSilentType:!1,roomTitle:"--",feedAlertOpen:!1,allowUploadCoverTime:0,verify:"",shortRoomID:0,pkStatus:0,pkId:0,isBML:!1,isHistoryDanmakuReady:!1},mutations:u,actions:c,getters:{baseInfoRoom:function(t){return t}}}},791:function(t,e,n){"use strict";var i,o=n(24),r=n.n(o),s="SET_LPL_PANEL_STATUS",u="SET_LPL_INTERACT_FLAT",c="SET_LPL_MATCH_DATA",a="SET_LPL_SECKILL_DATA",f="SET_LPL_SUPPORT_DATA",m="SET_LPL_TIME_DISTANCE",l="SET_LPL_COUNTDOWN_DATA",p="SET_LPL_ENTRANCE_LOGO",d={panelStatus:{support:!1,seckill:!1},isLplInteractEnabled:!1,matchInfo:{id:0,status:n(444).a.notStart,round:0,teams:[],commentators:[]},seckillInfo:{id:0,name:"--",price:0,startTS:0,endTS:0,logoUrl:"",choice:{},status:0},supportInfo:{amountCandidate:[],seedPreTicket:0,status:0},serverTimeDistance:0,countdown:{targetTS:0,displaySeconds:0},logoUrls:{seckill:"",support:""}},h=((i={})[s]=function(t,e){var n=e.name,i=e.status;n&&void 0!==t.panelStatus[n]&&(t.panelStatus[n]=!!i)},i[u]=function(t,e){t.isLplInteractEnabled=!!e},i[a]=function(t,e){r()(e).forEach(function(n){t.seckillInfo||(t.seckillInfo={}),t.seckillInfo[n]=e[n]})},i[f]=function(t,e){r()(e).forEach(function(n){t.supportInfo||(t.supportInfo={}),t.supportInfo[n]=e[n]})},i[c]=function(t,e){r()(e).forEach(function(n){t.matchInfo||(t.matchInfo={}),t.matchInfo[n]=e[n]})},i[l]=function(t,e){r()(e).forEach(function(n){t.countdown[n]=e[n]})},i[p]=function(t,e){r()(e).forEach(function(n){t.logoUrls[n]=e[n]})},i[m]=function(t,e){t.serverTimeDistance=e},i),T={setLPLPanelStatus:function(t,e){(0,t.commit)(s,e)},setLPLInteractFlag:function(t,e){(0,t.commit)(u,e)},setLPLSeckillData:function(t,e){(0,t.commit)(a,e)},setLPLSupportData:function(t,e){(0,t.commit)(f,e)},setLPLMatchData:function(t,e){(0,t.commit)(c,e)},setLPLTimeDistance:function(t,e){(0,t.commit)(m,e)},setLPLCountdownData:function(t,e){(0,t.commit)(l,e)},setLPLEntranceLogo:function(t,e){(0,t.commit)(p,e)}};e.a={state:d,mutations:h,actions:T,getters:{LPL:function(t){return t}}}},792:function(t,e,n){"use strict";var i,o=n(24),r=n.n(o),s=n(401),u=n(120),c="ADD_SUPER_GIFT",a="DELETE_SUPER_GIFT",f="UPDATE_SUPER_GIFT",m="CLEAR_SUPER_GIFTS",l="SET_GIFT_PRESETS_LIST",p="SET_FREE_GIFT_PRESETS_LIST",d="SET_GIFT_PRESETS_MAP",h="ADD_GIFT_PRESETS_ITEM",T="UPDATE_GIFT_PRESETS_ITEM",g="SET_GIFT_ASSESTS_CONFIG",S="SET_GIFT_ANIMATIONS_CONFIG",_="ADD_GIFT_ANIMATION",E="DELETE_GIFT_ANIMATION",A="CLEAR_GIFT_ANIMATIONS",I="SET_BAG_GIFT_LIST",v="SET_GIFT_CORNER_MARK",y=((i={})[c]=function(t,e){var n=e,i=n.userId,o=t.superGiftList,r=window.BilibiliLive.UID,s=o.length,u=0;i===r?o.unshift(n):setTimeout(function(){o.forEach(function(t,e){null===t&&(0===u&&(s=e),u++)}),o.splice(s,u,n)},0)},i[f]=function(t,e){var n=e.superGift,i=e.index,o=t.superGiftList[i];o.superGiftNum=n.superGiftNum,o.combo=n.combo,o.addTime=n.addTime},i[a]=function(t,e){var n=t.superGiftList,i=n.length,o=e.superGift,r=e.newSuperGift,s=-1;null===o?s=0:n.some(function(t,e){if(t&&o.id===t.id)return s=e,!0}),1===s&&null===r&&n[0]&&n[2]?n.splice(s,1):n.splice(s,1,r),o=null,0===n.filter(function(t){return!!t}).length&&n.splice(0,i)},i[m]=function(t,e){var n=-1;t.superGiftList.some(function(t,i){if(t.userId!==e)return n=i,!0}),n>=0&&t.superGiftList.splice(n,t.superGiftList.length-n)},i[l]=function(t,e){t.giftPresets=e},i[p]=function(t,e){t.freeGiftPresets=e},i[d]=function(t,e){t.giftPresetsMap=e},i[h]=function(t,e){switch(e.constructor){case s.i:case s.g:case s.c:case s.h:t.giftPresets.push(e)}},i[T]=function(t,e){r()(t.giftPresets).some(function(n){return t.giftPresets[n].some(function(t){if(t.id===e.id)return r()(e.data).forEach(function(n){void 0!==t[n]&&(t[n]=e.data[n])}),!0})})},i[g]=function(t,e){t.giftAssets=e},i[S]=function(t,e){t.giftAnimations.config=e},i[_]=function(t,e){var n=t.giftAnimations.queue,i=e.index,o=e.data;-1===i?n.push(o):0===i?n.splice(0,1,o):n.splice(i,0,o)},i[E]=function(t){t.giftAnimations.queue.shift()},i[A]=function(t,e){var n=t.giftAnimations.queue,i=-1;n.some(function(t,n){if(t.uid!==e)return i=n,!0}),i>=0&&n.splice(i,n.length-i)},i[I]=function(t,e){t.bagGifts=e},i[v]=function(t,e){var n=t.giftCornerMark;r()(e).forEach(function(t,i){var o=(e[t]||[])[0],r=n[t];r||(u.default.set(n,t,[]),r=n[t]);var s=-1;r.some(function(t,e){if(t.position===o.position)return s=e,!0}),s>-1?r.splice(s,1,o):r.push(o)})},i),G={addSuperGift:function(t,e){var n=t.commit,i=t.rootState;n(c,e,i)},updateSuperGift:function(t,e){var n=t.commit;t.rootState;n(f,e)},deleteSuperGift:function(t,e){var n=t.commit;t.rootState;n(a,e)},clearSuperGifts:function(t,e){(0,t.commit)(m,e)},setGiftPresetsList:function(t,e){(0,t.commit)(l,e)},setFreeGiftPresetsList:function(t,e){(0,t.commit)(p,e)},setGiftPresetsMap:function(t,e){(0,t.commit)(d,e)},addGiftPresetsItem:function(t,e){(0,t.commit)(h,e)},updateGiftPresetsItem:function(t,e){(0,t.commit)(T,e)},setGiftAssets:function(t,e){(0,t.commit)(g,e)},addGiftAnimation:function(t,e){(0,t.commit)(_,e)},deleteGiftAnimation:function(t){(0,t.commit)(E)},clearGiftAnimations:function(t,e){(0,t.commit)(A,e)},setGiftAnimationsConfig:function(t,e){(0,t.commit)(S,e)},setBagGiftList:function(t,e){(0,t.commit)(I,e)},setGiftCornerMark:function(t,e){(0,t.commit)(v,e)}};e.a={namespaced:!0,state:{giftPresets:[],freeGiftPresets:[],giftPresetsMap:{},superGifts:{},superGiftList:[],giftAssets:{},giftAnimations:{config:{},queue:[]},bagGifts:[],giftCornerMark:{}},mutations:y,actions:G,getters:{giftPresets:function(t){return t.giftPresets},freeGiftPresets:function(t){return t.freeGiftPresets},giftAssets:function(t){return t.giftAssets},giftAnimationsConfig:function(t){return t.giftAnimations.config},getAnimationsQueue:function(t){return t.giftAnimations.queue},getAnimationConfigByType:function(t){return function(e){return t.giftAnimations.config[e]}},getGiftAssetsById:function(t){return function(e){return t.giftAssets[e]||{}}},superGift:function(t){return t.superGiftList||[]},getSuperGiftById:function(t){return function(e){var n=t.superGiftList,i=-1;return n.some(function(t,n){if(t&&t.id===e)return i=n,!0}),{index:i,superGift:n[i]}}},getGiftById:function(t){return function(e){return t.giftPresets.filter(function(t){return t.id===e})[0]}},getBagGiftList:function(t){return t.bagGifts},getGiftConerMarkList:function(t){return t.giftCornerMark},getGiftCornerMarkByGiftId:function(t){return function(e){return t.giftCornerMark[e]}}}}},793:function(t,e,n){"use strict";var i,o=n(24),r=n.n(o),s="SET_INFO_USER",u="SET_DANMAKU_COLOR",c="SET_DANMAKU_MODE",a="SET_USER_SILENT_DATA",f="SET_SHIELD_DATA",m="SET_SHIELD_LIST_SELECT",l="ADD_SHIELD_ITEM",p="SET_SHIELD_LIST_APPLY_TO_ROOM",d="REMOVE_SHIELD_ITEMS",h="SET_GUARD_LEVEL",T=((i={})[s]=function(t,e){r()(e).forEach(function(n){void 0!==t[n]&&(t[n]=e[n])})},i[a]=function(t,e){r()(e).forEach(function(n){void 0!==t[n]&&"userSilent"===n.slice(0,10)&&(t[n]=e[n])})},i[u]=function(t,e){t.danmakuColor=e},i[c]=function(t,e){t.danmakuMode=e},i[f]=function(t,e){Array.isArray(e.shieldList)&&(t.shieldList=e.shieldList),t.shieldListApplyToRoom=e.shieldListApplyToRoom||!1},i[m]=function(t,e){var n=t.shieldList[e.index];n&&(n.selected=e.status)},i[l]=function(t,e){e&&t.shieldList.push({value:e.value,selected:!1,type:e.type})},i[p]=function(t,e){t.shieldListApplyToRoom=!!e},i[d]=function(t,e){Array.isArray(e)&&e.forEach(function(e){t.shieldList[e]&&(t.shieldList[e].value=null)})},i[h]=function(t,e){t.privilege.privilegeType=e||0},i),g={baseInfoUser:function(t,e){(0,t.commit)(s,e)},setDanmakuColor:function(t,e){(0,t.commit)(u,e)},setDanmakuMode:function(t,e){(0,t.commit)(c,e)},setUserSilentData:function(t,e){(0,t.commit)(a,e)},setShieldData:function(t,e){(0,t.commit)(f,e)},setShieldListSelect:function(t,e){(0,t.commit)(m,e)},addShieldItem:function(t,e){(0,t.commit)(l,e)},setShieldListApplyToRoom:function(t,e){(0,t.commit)(p,e)},removeShieldItems:function(t,e){(0,t.commit)(d,e)},setGuardLevel:function(t,e){(0,t.commit)(h,e)}};e.a={state:{goldSeed:0,isAdmin:!1,isAnchor:!1,isNewBie:!1,isPhoneVerified:!1,mobileVerifyCode:-1,realNameIdentification:!1,biliVip:0,isSvip:!1,isVip:!1,level:0,rank:0,userLevelRank:"--",title:"",showVipTips:!1,silverSeed:0,username:"--",uid:0,coin:0,bb:0,medal:!1,isShowGiftPackage:1,danmakuColor:"#ffffff",danmakuMode:1,privilege:{id:0,privilegeType:0,noticeStatus:0,heartTime:0,isHeart:!0,broadcastConfig:null},userSilentLevel:0,userSilentRank:0,userSilentVerify:0,shieldListApplyToRoom:!1,shieldList:[],danmakuLengthLimit:20,giftPackage:{bagStatus:1,bagExpireStatus:0}},mutations:T,actions:g,getters:{baseInfoUser:function(t){return t}}}},794:function(t,e,n){"use strict";var i,o=n(24),r=n.n(o),s="SET_INFO_ANCHOR",u=((i={})[s]=function(t,e){r()(e).forEach(function(n){void 0!==t[n]&&(t[n]=e[n])})},i),c={baseInfoAnchor:function(t,e){(0,t.commit)(s,e)}};e.a={state:{facePendants:null,areaPendant:"",fansCount:0,giftReceived:0,isAttention:!1,username:"--",pendant:"",san:12,uid:0,masterLevel:0,next:[333,666],current:[0,333],sort:999999,upgradeScore:999999,allowChangeAreaTime:0,face:"//static.hdslb.com/images/member/noface.gif",description:"",tags:[],isOpenFansMedal:!1},mutations:u,actions:c,getters:{baseInfoAnchor:function(t){return t}}}},795:function(t,e,n){"use strict";var i,o=n(24),r=n.n(o),s="SET_INFO_ACTIVITY",u=((i={})[s]=function(t,e){r()(e).forEach(function(n){void 0!==t[n]&&(t[n]=e[n])})},i),c={baseInfoActivity:function(t,e){(0,t.commit)(s,e)}};e.a={state:{activityID:0,activityPic:"",isMemeVote:!1,isMiActivity:!1,isRedbag:!1,isSantaClaus2016:!1,isStar:!1,santaClausTitle:"",starRank:0},mutations:u,actions:c,getters:{baseInfoActivity:function(t){return t}}}},796:function(t,e,n){"use strict";var i,o=n(24),r=n.n(o),s="SET_APPSTATUS",u="SET_PLAYER_LINE_TYPE",c="SET_PLAYER_TYPE",a="SET_DISPLAY_MODE",f={appName:"Bilibili-live-room",blockingTime:0,hiddenTime:0,enterFailed:!1,initFailureHint:!1,rnd:window.BilibiliLive.RND||Math.floor(Date.now()/1e3),playerType:"flash",lineType:0,displayMode:"normal",upgradeIntroStep:0,upSession:"",errorMsg:""},m=((i={})[s]=function(t,e){r()(e).forEach(function(n){void 0!==t[n]&&(t[n]=e[n])})},i[u]=function(t,e){"number"==typeof e&&(t.lineType=e)},i[c]=function(t,e){-1!==["html5","flash"].indexOf(e)&&(t.playerType=e)},i[a]=function(t,e){-1!==["normal","webFullScreen","windowFullScreen"].indexOf(e)&&(t.displayMode=e)},i),l={appStatus:function(t,e){(0,t.commit)(s,e)},setPlayerLineType:function(t,e){(0,t.commit)(u,e)},setPlayerType:function(t,e){(0,t.commit)(c,e)},setDisplayMode:function(t,e){(0,t.commit)(a,e)}};e.a={state:f,mutations:m,actions:l,getters:{appStatus:function(t){return t}}}}}]);