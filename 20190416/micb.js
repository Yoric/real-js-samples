var mistats = mistats || {};

mistats.dataLayer = mistats.dataLayer || function ()
{
   if (!window.digitalData)
      !function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=72)}({11:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var o,u=e[Symbol.iterator]();!(r=(o=u.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{!r&&u.return&&u.return()}finally{if(a)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=function(e){var t=window.document.cookie,n=t.indexOf(e+"=");if(0===t.length||-1===n)return null;var r=t.indexOf("; ",n);r=r>-1?r:t.length;var a=t.substring(n,r);return decodeURIComponent(a.substring(a.indexOf("=")+1,r))}(e);return n?function(e,t){var n=e;return t?n=function(e){if(-1===e.indexOf(":"))return e;var t={};return e.split("&").forEach(function(e){var n=e.split(":"),a=r(n,2),i=a[0],o=a[1];t[i]=o}),t}(e):e.match(/^[[{].*[\]}]$/)&&(n=JSON.parse(e)),n}(n,t):n}},2:function(e,t,n){"use strict";function r(e){var t=e.split("."),n=window.mistats?window.mistats:void 0,r="";if(n){r=n;for(var a=0;a<t.length;a+=1)void 0!==r?r=r[t[a]]:(r="",a=t.length)}return"string"==typeof(r=null===r||void 0===r?"":r)?r:JSON.stringify(r)}Object.defineProperty(t,"__esModule",{value:!0}),t.getAppMeasurement=function(e){var t=window.s?window.s:void 0,n=t&&t[e]?t[e]:"";return"string"==typeof(n=null===n||void 0===n?"":n)?n:JSON.stringify(n)},t.getMIStat=r,t.getPageInfo=function(e){var t=window.mi&&window.mi.pageInfo?window.mi.pageInfo:void 0,n=t?t.getConf(e):"";return"string"==typeof(n=null===n||void 0===n?"":n)?n:JSON.stringify(n)},t.getName=function(e){var t={"Bellingham Herald":"The Bellingham Herald","Bellville News Democrat":"Belleville News-Democrat","Centre Daily":"Centre Daily Times","Charlotte Observer":"The Charlotte Observer","Durham Herald Sun":"The Herald-Sun","El Nuevo Herald":"el Nuevo Herald","Fresno Bee":"The Fresno Bee","Herald Online":"The Herald","Island Packet":"The Island Packet","Kansas City Star":"The Kansas City Star","Macon Telegraph":"The Telegraph",McClatchyDC:"McClatchy DC","News and Observer":"The News &amp; Observer","Myrtle Beach Online":{publisher:"The Sun News"},"Sacramento Bee":"The Sacramento Bee","San Luis Obispo":"The Tribune"},n=r("sitename");return n in t&&("string"==typeof t[n]?n=t[n]:t[n][e]&&(n=t[n][e])),n}},60:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),a={};function i(e){var t=(0,r.getAppMeasurement)("prop2"),n=[],a="";switch(e){case"name":n=["in-app browser","in-fb browser"];break;case"orientation":n=["landscape","portrait","unsupported"];break;case"private":n=["private"];break;case"type":n=["tablet","phone","other"]}for(var i=0;i<n.length;i+=1)null!==t.match(n[i])&&(a="private"===e?"true":n[i],i=n.length);return a}t.default=a;var o={};Object.defineProperties(o,{name:{get:function(){return i("name")}},private:{get:function(){return i("private")}}}),Object.defineProperties(a,{client:{value:o},orientation:{get:function(){return i("orientation")}},type:{get:function(){return i("type")}}})},61:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),a=c(n(62)),i=c(n(63)),o=c(n(64)),u=c(n(65)),f=c(n(66));function c(e){return e&&e.__esModule?e:{default:e}}var l={};function d(){var e="generic",t=(0,r.getPageInfo)("marketInfo.pagelevel");if(""!==t)e=t;else{var n=(0,r.getMIStat)("pagelevel").toLowerCase();""!==n&&(e=n)}return e}function s(e){var t=e;if(""!==e){var n=e.split("/"),r=new Date(n[0],n[1]-1,n[2]),a=e.split(" ")[1];n[2]=n[2].indexOf(" ")>-1?n[2].substr(0,n[2].indexOf(" ")):n[2],void 0!==a&&(a=a.substr(1),r.setHours(a)),t=JSON.stringify(r.getTime())}return t}t.default=l,Object.defineProperties(l,{ads:{value:a.default},authors:{get:function(){return(0,r.getMIStat)("authors")}},content_source:{get:function(){return(0,r.getMIStat)("contentsource")}},id:{get:function(){return function(){var e="";return-1===["generic","homepage","sectfront"].indexOf(d())&&(e=(0,r.getMIStat)("escenicId")),e}()}},keywords:{get:function(){return(0,r.getMIStat)("keywords")}},layout:{get:function(){return(0,r.getMIStat)("escenicLayout")}},modification_date:{get:function(){return s((0,r.getMIStat)("moddate"))}},name:{get:function(){return(0,r.getMIStat)("pagename")}},publication_date:{get:function(){return s((0,r.getMIStat)("pubdate"))}},referrer:{value:u.default},section:{value:i.default},site_name:{get:function(){return(0,r.getName)("site")}},taxonomy:{value:f.default},third_parties:{value:o.default},type:{get:function(){return d()}}})},62:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),a={};t.default=a,Object.defineProperties(a,{allow:{get:function(){var e=(0,r.getPageInfo)("marketInfo.allow_ads"),t=!window.isAdsAllowed||window.isAdsAllowed();return"true"===e&&t?"true":""}},blocked:{get:function(){return(0,r.getMIStat)("adblock")}},market_code:{get:function(){return(0,r.getPageInfo)("marketInfo.code")}},prebidding_map:{get:function(){return(0,r.getPageInfo)("prebiddingAdMap")}},sizes:{get:function(){return(0,r.getPageInfo)("marketInfo.adsizes")}}})},63:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),a={};t.default=a,Object.defineProperties(a,{name:{get:function(){return(0,r.getMIStat)("channel")}}})},64:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),a={};t.default=a;var i={};function o(e){for(var t="accuweather.location"+("keys"===e?"Key":"String"),n=(0,r.getPageInfo)(t),a=1,i=(0,r.getPageInfo)(t+a);""!==i;)n+=", "+i,i=(0,r.getPageInfo)(t+(a+=1));return n}Object.defineProperties(i,{dev:{get:function(){var e=(0,r.getPageInfo)("accuweather.dev");return"false"===e?"":"true"}},location_keys:{get:function(){return o("keys")}},location_strings:{get:function(){return o()}}});var u={};Object.defineProperties(u,{id:{get:function(){return(0,r.getPageInfo)("chartbeat.uid")}},loaded:{get:function(){return(0,r.getMIStat)("chartbeatLoaded")}}});var f={};Object.defineProperties(f,{liveconnect_id:{get:function(){return(0,r.getPageInfo)("marketInfo.LiveConnectTag")}}});var c={};Object.defineProperties(c,{id:{get:function(){return(0,r.getMIStat)("listenerMarket")}}}),Object.defineProperties(a,{accuweather:{value:i},chartbeat:{value:u},liveintent:{value:f},mather:{value:c}})},65:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),a={};t.default=a,Object.defineProperties(a,{name:{get:function(){return(0,r.getAppMeasurement)("eVar12")}},type:{get:function(){return(0,r.getMIStat)("prevPageLevel")}},url:{get:function(){return(0,r.getMIStat)("referrer")}}})},66:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),a={};t.default=a;var i=(0,r.getMIStat)("taxonomy"),o=i.split("|");function u(e){var t="";return o.length>=e+1&&(t=o[e]),t}Object.defineProperties(a,{full:{get:function(){return i}},level0:{get:function(){return u(0)}},level1:{get:function(){return u(1)}},level2:{get:function(){return u(2)}},level3:{get:function(){return u(3)}},level4:{get:function(){return u(4)}}})},67:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),a={};t.default=a,Object.defineProperties(a,{code:{get:function(){return(0,r.getMIStat)("bizunit")}},county:{get:function(){return(0,r.getPageInfo)("marketInfo.county")}},name:{get:function(){return(0,r.getName)("publisher")}},phone:{get:function(){return(0,r.getPageInfo)("marketInfo.phone")}},state:{get:function(){return(0,r.getPageInfo)("marketInfo.state")}},state_abbreviation:{get:function(){return(0,r.getPageInfo)("marketInfo.state_abbreviation")}},zip_code:{get:function(){return(0,r.getPageInfo)("marketInfo.zipcode")}}})},68:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),a=function(e){return e&&e.__esModule?e:{default:e}}(n(11)),i={};t.default=i;var o={};Object.defineProperties(o,{status:{get:function(){return"na"}},expires:{get:function(){return""}}}),Object.defineProperties(i,{id:{get:function(){return function(){var e=(0,a.default)("MPPUser");return e&&e.ucid?e.ucid:""}()}},logged_in:{get:function(){return(0,r.getMIStat)("subscriptions.loggedIn")}},segments:{get:function(){return function(){var e=(0,a.default)("aam_segment");return e?JSON.stringify(e.replace(/segID=(\d+)[^,]*/g,"$1").split(",")):"[]"}()}},subscription:{value:o}})},72:function(e,t,n){"use strict";var r=u(n(60)),a=u(n(61)),i=u(n(67)),o=u(n(68));function u(e){return e&&e.__esModule?e:{default:e}}var f={},c=window.mi?window.mi.pageInfo:void 0;Object.defineProperties(f,{device:{value:r.default},page:{value:a.default},page_instance_id:{get:function(){return[i.default.publication_code?i.default.publication_code:"McClatchy","homepage"===a.default.type?a.default.type:a.default.type+" "+(a.default.id?a.default.id:a.default.section.name),function(){var e=c?c.getConf("environment"):void 0,t="";switch(window.location.host.split(".")[0]){case"localhost":t="development";break;case"qa1":case"qa2":t="qa";break;default:t="production"}return e||t}()].join(" ")}},publisher:{value:i.default},user:{value:o.default},version:{value:"1.1.1"}}),Object.defineProperty(window,"digitalData",{value:f})}});
};

mistats.isEscenic = mistats.isEscenic || function ()
{
   return !!(location.hostname || '').match(/^qa\d+\./) || !!(window.mi && window.mi.pageInfo && (location.hostname || '').match(/^www\./) && (mistats.pagelevel || '').match(/Home|Section|Story|Gallery|Video/))
}();

mistats.windowEvent = function (pName)
{
   var evt;

   try
   {
      window.dispatchEvent((new Event(pName)));
   } catch (evtErr)
   {
      evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(pName, false, false, undefined);
      window.dispatchEvent(evt);
   }
};

mistats.adobe = mistats.adobe ||
{
   queue: [],
   processing: false,
   ready: false,
   mcId: '3B6E35F15A82BBB00A495D91@AdobeOrg',
   adbmc: decodeURIComponent(location.search || '').match(/[\?&]adobe_mc=[^&#]+/),

   target:
   {
      loaded: false,
      loading: false,

      mbox: function (pEvent)
      {
         pEvent && pEvent.type === 'mistats_atloaded' && (window.removeEventListener('mistats_atloaded', mistats.adobe.target.mbox, false));

         if (!mistats.adobe.target.loaded)
            return window.addEventListener('mistats_atloaded', mistats.adobe.target.mbox, false);

         window.adobe && window.adobe.target && (window.adobe.target.getOffer(
         {
            mbox: 'target-global-mbox',
            params:
            {
               pageName: mistats.pagename,
               pageType: mistats.pagelevel
            },
            success: function (pOffer)
            {
               window.adobe.target.applyOffer(
               {
                  mbox: 'target-global-mbox',
                  offer: pOffer
               });
            },
            error: function(pStatus, pError)
            {
               console.log('adobe.target error:', pStatus, pError);
            }
         }));
      },

      init: function ()
      {
         if (mistats.adobe.target.loaded || mistats.adobe.target.loading || (window.adobe && window.adobe.target))
         {
            mistats.adobe.target.loaded = true;
            return;
         }

         mistats.adobe.target.loading = true;
         mistats.jsLoader((mistats.targetLib || '').length ? mistats.targetLib : (mistats.mediaHost + '/mistats/at.js'), false);
      }
   },

   validHost: function ()
   {
      var hostList;
      var i;

      if ((location.pathname || '').match(/\/video-embed/))
         return false;

      if (!mistats.isEscenic && (location.hostname || '').indexOf('www') === 0)
         return false;

      hostList =
      [
         'www.bnd.com',
         'www.bellinghamherald.com',
         'www.sunherald.com',
         'www.idahostatesman.com',
         'www.bradenton.com',
         'www.charlotteobserver.com',
         'www.thestate.com',
         'www.ledger-enquirer.com',
         'www.elnuevoherald.com',
         'www.fresnobee.com',
         'www.star-telegram.com',
         'www.islandpacket.com',
         'www.kansascity.com',
         'www.kentucky.com',
         'www.macon.com',
         'www.mercedsunstar.com',
         'www.miamiherald.com',
         'www.modbee.com',
         'www.myrtlebeachonline.com',
         'www.theolympian.com',
         'www.newsobserver.com',
         'www.heraldsun.com',
         'www.heraldonline.com',
         'www.sacbee.com',
         'www.sanluisobispo.com',
         'www.centredaily.com',
         'www.thenewstribune.com',
         'www.tri-cityherald.com',
         'www.kansas.com',
         'www.mcclatchydc.com',
         'www.flkeysnews.com',
         'www.vidaenelvalle.com',
         'www.sierrastar.com',
         'www.losbanosenterprise.com',
         /^qa\d+\.[^\.]+\.com$/
      ];

      for (i = 0; i < hostList.length; i++)
         if ((location.hostname || '').toLowerCase().match(hostList[i]))
            return true;

      return false;
   }(),

   perfMark: function(pMsg)
   {
      window.performance && window.performance.mark && (window.performance.mark(pMsg));
   },

   setCookie: function (pKey, pVal, pExp)
   {
      var cd;
      var exp;

      if (!pKey)
         return;

      cd = (location.hostname || '').split('.');
      while (cd.length > 2)
         cd.shift();
      cd = 'domain=' + cd.join('.');

      exp = new Date();
      exp.setTime(exp.getTime() + (pVal ? (pExp || 63072000000) : -60000));
      exp = 'expires=' + exp.toUTCString();

      document.cookie = [encodeURIComponent(pKey) + '=' + encodeURIComponent(pVal || ''), exp, 'path=/', cd].join('; ');
   },

   hasECID: function ()
   {
      return !mistats.adobe.adbmc && !!decodeURIComponent(document.cookie || '').match(new RegExp('AMCV_' + mistats.adobe.mcId + '=[^;]*MCMID\\|[^;]+'));
   },

   ecidEnd: function (pObj)
   {
      mistats.adobe.adbmc && history.replaceState && (history.replaceState('', document.title, location.pathname + (location.search || '').replace(/&?adobe_mc=[^&]+/g, '').replace(/^\?+$/, '') + (location.hash || '')));
      pObj && pObj.reason && mistats.adobe.queue.length && (mistats[pObj.reason] = true);
      mistats.adobe.ready = true;
      mistats.adobe.processQueue(true);
      mistats.adobe.perfMark('End VisitorAPI');
   },

   getECID: function ()
   {
      var aid;
      var mcc;
      var opts;

      mistats.adobe.perfMark('Start VisitorAPI');
      mistats.adobe.hasECID() && (mistats.adobe.perfMark('Visitor has ECID already'));

      !function e(t,i,n){function r(s,o){if(!i[s]){if(!t[s]){var l="function"==typeof require&&require;if(!o&&l)return l(s,!0);if(a)return a(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var d=i[s]={exports:{}};t[s][0].call(d.exports,function(e){var i=t[s][1][e];return r(i?i:e)},d,d.exports,e,t,i,n)}return i[s].exports}for(var a="function"==typeof require&&require,s=0;s<n.length;s++)r(n[s]);return r}({1:[function(e,t,i){(function(i){function n(){function e(){h.windowLoaded=!0}i.addEventListener?i.addEventListener("load",e):i.attachEvent&&i.attachEvent("onload",e),h.codeLoadEnd=(new Date).getTime()}
      var r=e("./child/ChildVisitor"),a=e("./child/Message"),s=e("./child/makeChildMessageListener"),o=e("./utils/asyncParallelApply"),l=e("./utils/enums"),u=e("./utils/utils"),d=e("./utils/getDomain"),c=e("./units/version"),f=e("./units/crossDomain"),g=e("@adobe-mcid/visitor-js-shared/lib/ids/generateRandomID"),p=e("./units/makeCorsRequest"),m=e("./units/makeDestinationPublishing"),_=e("./utils/constants"),h=function(e,t,n){function r(e){var t=e;return function(e){var i=e||v.location.href;try{var n=S._extractParamFromUri(i,t);if(n)return H.parsePipeDelimetedKeyValues(n)}catch(e){}}}function h(e){function t(e,t){e&&e.match(_.VALID_VISITOR_ID_REGEX)&&t(e)}t(e[k],S.setMarketingCloudVisitorID),S._setFieldExpire(V,-1),t(e[R],S.setAnalyticsVisitorID)}function C(e){e=e||{},S._supplementalDataIDCurrent=e.supplementalDataIDCurrent||"",S._supplementalDataIDCurrentConsumed=e.supplementalDataIDCurrentConsumed||{},S._supplementalDataIDLast=e.supplementalDataIDLast||"",S._supplementalDataIDLastConsumed=e.supplementalDataIDLastConsumed||{}}function D(e){function t(e,t,i){return i=i?i+="|":i,i+=e+"="+encodeURIComponent(t)}function i(e){var t=H.getTimestampInSeconds();return e=e?e+="|":e,e+="TS="+t}function n(e,i){var n=i[0],r=i[1];return null!=r&&r!==N&&(e=t(n,r,e)),e}var r=e.reduce(n,"");return i(r)}function I(e){var t=20160,i=e.minutesToLive,n="";return(S.idSyncDisableSyncs||S.disableIdSyncs)&&(n=n?n:"Error: id syncs have been disabled"),"string"==typeof e.dpid&&e.dpid.length||(n=n?n:"Error: config.dpid is empty"),"string"==typeof e.url&&e.url.length||(n=n?n:"Error: config.url is empty"),"undefined"==typeof i?i=t:(i=parseInt(i,10),(isNaN(i)||i<=0)&&(n=n?n:"Error: config.minutesToLive needs to be a positive number")),{error:n,ttl:i}}if(!n||n.split("").reverse().join("")!==e)throw new Error("Please use `Visitor.getInstance` to instantiate Visitor.");var S=this;S.version="3.1.0";var v=i,A=v.Visitor;A.version=S.version,A.AuthState=l.AUTH_STATE,A.OptOut=l.OPT_OUT,v.s_c_in||(v.s_c_il=[],v.s_c_in=0),S._c="Visitor",S._il=v.s_c_il,S._in=v.s_c_in,S._il[S._in]=S,v.s_c_in++,S._log={requests:[]},S.marketingCloudOrgID=e,S.cookieName="AMCV_"+e,S.sessionCookieName="AMCVS_"+e,S.cookieDomain=d(),S.cookieDomain===v.location.hostname&&(S.cookieDomain=""),S.loadSSL=v.location.protocol.toLowerCase().indexOf("https")>=0,S.loadTimeout=3e4,S.CORSErrors=[],S.marketingCloudServer=S.audienceManagerServer="dpm.demdex.net",S.sdidParamExpiry=30;var y=v.document,M=null,b="MC",k="MCMID",E="MCORGID",T="MCCIDH",O="MCSYNCSOP",w="MCIDTS",L="MCOPTOUT",P="A",R="MCAID",F="AAM",x="MCAAMLH",V="MCAAMB",N="NONE",j=function(e){return!Object.prototype[e]},U=p(S,G);S.FIELDS=l.FIELDS,S.cookieRead=function(e){e=encodeURIComponent(e);var t=(";"+y.cookie).split(" ").join(";"),i=t.indexOf(";"+e+"="),n=i<0?i:t.indexOf(";",i+1),r=i<0?"":decodeURIComponent(t.substring(i+2+e.length,n<0?t.length:n));return r},S.cookieWrite=function(e,t,i){var n,r=S.cookieLifetime;if(t=""+t,r=r?(""+r).toUpperCase():"",i&&"SESSION"!==r&&"NONE"!==r){if(n=""!==t?parseInt(r?r:0,10):-60)i=new Date,i.setTime(i.getTime()+1e3*n);else if(1===i){i=new Date;var a=i.getYear();i.setYear(a+2+(a<1900?1900:0))}}else i=0;return e&&"NONE"!==r?(y.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t)+"; path=/;"+(i?" expires="+i.toGMTString()+";":"")+(S.cookieDomain?" domain="+S.cookieDomain+";":""),S.cookieRead(e)===t):0},S.resetState=function(e){e?S._mergeServerState(e):C()},S._isAllowedDone=!1,S._isAllowedFlag=!1,S.isAllowed=function(){return S._isAllowedDone||(S._isAllowedDone=!0,(S.cookieRead(S.cookieName)||S.cookieWrite(S.cookieName,"T",1))&&(S._isAllowedFlag=!0)),S._isAllowedFlag},S.setMarketingCloudVisitorID=function(e){S._setMarketingCloudFields(e)},S._use1stPartyMarketingCloudServer=!1,S.getMarketingCloudVisitorID=function(e,t){if(S.isAllowed()){S.marketingCloudServer&&S.marketingCloudServer.indexOf(".demdex.net")<0&&(S._use1stPartyMarketingCloudServer=!0);var i=S._getAudienceManagerURLData("_setMarketingCloudFields"),n=i.url;return S._getRemoteField(k,n,e,t,i)}return""},S.getVisitorValues=function(e,t){var i={MCMID:{fn:S.getMarketingCloudVisitorID,args:[!0],context:S},MCOPTOUT:{fn:S.isOptedOut,args:[void 0,!0],context:S},MCAID:{fn:S.getAnalyticsVisitorID,args:[!0],context:S},MCAAMLH:{fn:S.getAudienceManagerLocationHint,args:[!0],context:S},MCAAMB:{fn:S.getAudienceManagerBlob,args:[!0],context:S}},n=t&&t.length?H.pluck(i,t):i;o(n,e)},S._currentCustomerIDs={},S._customerIDsHashChanged=!1,S._newCustomerIDsHash="",S.setCustomerIDs=function(e){function t(){S._customerIDsHashChanged=!1}if(S.isAllowed()&&e){S._readVisitor();var i,n;for(i in e)if(j(i)&&(n=e[i]))if("object"==typeof n){var r={};n.id&&(r.id=n.id),void 0!=n.authState&&(r.authState=n.authState),S._currentCustomerIDs[i]=r}else S._currentCustomerIDs[i]={id:n};var a=S.getCustomerIDs(),s=S._getField(T),o="";s||(s=0);for(i in a)j(i)&&(n=a[i],o+=(o?"|":"")+i+"|"+(n.id?n.id:"")+(n.authState?n.authState:""));S._newCustomerIDsHash=S._hash(o),S._newCustomerIDsHash!==s&&(S._customerIDsHashChanged=!0,S._mapCustomerIDs(t))}},S.getCustomerIDs=function(){S._readVisitor();var e,t,i={};for(e in S._currentCustomerIDs)j(e)&&(t=S._currentCustomerIDs[e],i[e]||(i[e]={}),t.id&&(i[e].id=t.id),void 0!=t.authState?i[e].authState=t.authState:i[e].authState=A.AuthState.UNKNOWN);return i},S.setAnalyticsVisitorID=function(e){S._setAnalyticsFields(e)},S.getAnalyticsVisitorID=function(e,t,i){if(!H.isTrackingServerPopulated()&&!i)return S._callCallback(e,[""]),"";if(S.isAllowed()){var n="";if(i||(n=S.getMarketingCloudVisitorID(function(t){S.getAnalyticsVisitorID(e,!0)})),n||i){var r=i?S.marketingCloudServer:S.trackingServer,a="";S.loadSSL&&(i?S.marketingCloudServerSecure&&(r=S.marketingCloudServerSecure):S.trackingServerSecure&&(r=S.trackingServerSecure));var s={};if(r){var o="http"+(S.loadSSL?"s":"")+"://"+r+"/id",l="d_visid_ver="+S.version+"&mcorgid="+encodeURIComponent(S.marketingCloudOrgID)+(n?"&mid="+encodeURIComponent(n):"")+(S.idSyncDisable3rdPartySyncing||S.disableThirdPartyCookies?"&d_coppa=true":""),u=["s_c_il",S._in,"_set"+(i?"MarketingCloud":"Analytics")+"Fields"];a=o+"?"+l+"&callback=s_c_il%5B"+S._in+"%5D._set"+(i?"MarketingCloud":"Analytics")+"Fields",s.corsUrl=o+"?"+l,s.callback=u}return s.url=a,S._getRemoteField(i?k:R,a,e,t,s)}}return""},S.getAudienceManagerLocationHint=function(e,t){if(S.isAllowed()){var i=S.getMarketingCloudVisitorID(function(t){S.getAudienceManagerLocationHint(e,!0)});if(i){var n=S._getField(R);if(!n&&H.isTrackingServerPopulated()&&(n=S.getAnalyticsVisitorID(function(t){S.getAudienceManagerLocationHint(e,!0)})),n||!H.isTrackingServerPopulated()){var r=S._getAudienceManagerURLData(),a=r.url;return S._getRemoteField(x,a,e,t,r)}}}return""},S.getLocationHint=S.getAudienceManagerLocationHint,S.getAudienceManagerBlob=function(e,t){if(S.isAllowed()){var i=S.getMarketingCloudVisitorID(function(t){S.getAudienceManagerBlob(e,!0)});if(i){var n=S._getField(R);if(!n&&H.isTrackingServerPopulated()&&(n=S.getAnalyticsVisitorID(function(t){S.getAudienceManagerBlob(e,!0)})),n||!H.isTrackingServerPopulated()){var r=S._getAudienceManagerURLData(),a=r.url;return S._customerIDsHashChanged&&S._setFieldExpire(V,-1),S._getRemoteField(V,a,e,t,r)}}}return""},S._supplementalDataIDCurrent="",S._supplementalDataIDCurrentConsumed={},S._supplementalDataIDLast="",S._supplementalDataIDLastConsumed={},S.getSupplementalDataID=function(e,t){S._supplementalDataIDCurrent||t||(S._supplementalDataIDCurrent=S._generateID(1));var i=S._supplementalDataIDCurrent;return S._supplementalDataIDLast&&!S._supplementalDataIDLastConsumed[e]?(i=S._supplementalDataIDLast,S._supplementalDataIDLastConsumed[e]=!0):i&&(S._supplementalDataIDCurrentConsumed[e]&&(S._supplementalDataIDLast=S._supplementalDataIDCurrent,S._supplementalDataIDLastConsumed=S._supplementalDataIDCurrentConsumed,S._supplementalDataIDCurrent=i=t?"":S._generateID(1),S._supplementalDataIDCurrentConsumed={}),i&&(S._supplementalDataIDCurrentConsumed[e]=!0)),i},S.getOptOut=function(e,t){if(S.isAllowed()){var i=S._getAudienceManagerURLData("_setMarketingCloudFields"),n=i.url;return S._getRemoteField(L,n,e,t,i)}return""},S.isOptedOut=function(e,t,i){if(S.isAllowed()){t||(t=A.OptOut.GLOBAL);var n=S.getOptOut(function(i){var n=i===A.OptOut.GLOBAL||i.indexOf(t)>=0;S._callCallback(e,[n])},i);return n?n===A.OptOut.GLOBAL||n.indexOf(t)>=0:null}return!1},S._fields=null,S._fieldsExpired=null,S._hash=function(e){var t,i,n=0;if(e)for(t=0;t<e.length;t++)i=e.charCodeAt(t),n=(n<<5)-n+i,n&=n;return n},S._generateID=g,S._generateLocalMID=function(){var e=S._generateID(0);return q.isClientSideMarketingCloudVisitorID=!0,e},S._callbackList=null,S._callCallback=function(e,t){try{"function"==typeof e?e.apply(v,t):e[1].apply(e[0],t)}catch(e){}},S._registerCallback=function(e,t){t&&(null==S._callbackList&&(S._callbackList={}),void 0==S._callbackList[e]&&(S._callbackList[e]=[]),S._callbackList[e].push(t))},S._callAllCallbacks=function(e,t){if(null!=S._callbackList){var i=S._callbackList[e];if(i)for(;i.length>0;)S._callCallback(i.shift(),t)}},S._addQuerystringParam=function(e,t,i,n){var r=encodeURIComponent(t)+"="+encodeURIComponent(i),a=H.parseHash(e),s=H.hashlessUrl(e),o=s.indexOf("?")===-1;if(o)return s+"?"+r+a;var l=s.split("?"),u=l[0]+"?",d=l[1],c=H.addQueryParamAtLocation(d,r,n);return u+c+a},S._extractParamFromUri=function(e,t){var i=new RegExp("[\\?&#]"+t+"=([^&#]*)"),n=i.exec(e);if(n&&n.length)return decodeURIComponent(n[1])},S._parseAdobeMcFromUrl=r(_.ADOBE_MC),S._parseAdobeMcSdidFromUrl=r(_.ADOBE_MC_SDID),S._attemptToPopulateSdidFromUrl=function(t){var i=S._parseAdobeMcSdidFromUrl(t),n=1e9;i&&i.TS&&(n=H.getTimestampInSeconds()-i.TS),i&&i.SDID&&i[E]===e&&n<S.sdidParamExpiry&&(S._supplementalDataIDCurrent=i.SDID,S._supplementalDataIDCurrentConsumed.SDID_URL_PARAM=!0)},S._attemptToPopulateIdsFromUrl=function(){var t=S._parseAdobeMcFromUrl();if(t&&t.TS){var i=H.getTimestampInSeconds(),n=i-t.TS,r=Math.floor(n/60);if(r>_.ADOBE_MC_TTL_IN_MIN||t[E]!==e)return;h(t)}},S._mergeServerState=function(e){function t(e){H.isObject(e)&&S.setCustomerIDs(e)}function i(e){return H.isObject(e)?e:JSON.parse(e)}if(e)try{if(e=i(e),e[S.marketingCloudOrgID]){var n=e[S.marketingCloudOrgID];t(n.customerIDs),C(n.sdid)}}catch(e){throw new Error("`serverState` has an invalid format.")}},S._timeout=null,S._loadData=function(e,t,i,n){var r="d_fieldgroup";t=S._addQuerystringParam(t,r,e,1),n.url=S._addQuerystringParam(n.url,r,e,1),n.corsUrl=S._addQuerystringParam(n.corsUrl,r,e,1),q.fieldGroupObj[e]=!0,n===Object(n)&&n.corsUrl&&"XMLHttpRequest"===U.corsMetadata.corsType&&U.fireCORS(n,i,e)},S._clearTimeout=function(e){null!=S._timeout&&S._timeout[e]&&(clearTimeout(S._timeout[e]),S._timeout[e]=0)},S._settingsDigest=0,S._getSettingsDigest=function(){if(!S._settingsDigest){var e=S.version;S.audienceManagerServer&&(e+="|"+S.audienceManagerServer),S.audienceManagerServerSecure&&(e+="|"+S.audienceManagerServerSecure),S._settingsDigest=S._hash(e)}return S._settingsDigest},S._readVisitorDone=!1,S._readVisitor=function(){if(!S._readVisitorDone){S._readVisitorDone=!0;var e,t,i,n,r,a,s=S._getSettingsDigest(),o=!1,l=S.cookieRead(S.cookieName),u=new Date;if(null==S._fields&&(S._fields={}),l&&"T"!==l)for(l=l.split("|"),l[0].match(/^[\-0-9]+$/)&&(parseInt(l[0],10)!==s&&(o=!0),l.shift()),l.length%2===1&&l.pop(),e=0;e<l.length;e+=2)t=l[e].split("-"),i=t[0],n=l[e+1],t.length>1?(r=parseInt(t[1],10),a=t[1].indexOf("s")>0):(r=0,a=!1),o&&(i===T&&(n=""),r>0&&(r=u.getTime()/1e3-60)),i&&n&&(S._setField(i,n,1),r>0&&(S._fields["expire"+i]=r+(a?"s":""),(u.getTime()>=1e3*r||a&&!S.cookieRead(S.sessionCookieName))&&(S._fieldsExpired||(S._fieldsExpired={}),S._fieldsExpired[i]=!0)));!S._getField(R)&&H.isTrackingServerPopulated()&&(l=S.cookieRead("s_vi"),l&&(l=l.split("|"),l.length>1&&l[0].indexOf("v1")>=0&&(n=l[1],e=n.indexOf("["),e>=0&&(n=n.substring(0,e)),n&&n.match(_.VALID_VISITOR_ID_REGEX)&&S._setField(R,n))))}},S._appendVersionTo=function(e){var t="vVersion|"+S.version,i=e?S._getCookieVersion(e):null;return i?c.areVersionsDifferent(i,S.version)&&(e=e.replace(_.VERSION_REGEX,t)):e+=(e?"|":"")+t,e},S._writeVisitor=function(){var e,t,i=S._getSettingsDigest();for(e in S._fields)j(e)&&S._fields[e]&&"expire"!==e.substring(0,6)&&(t=S._fields[e],i+=(i?"|":"")+e+(S._fields["expire"+e]?"-"+S._fields["expire"+e]:"")+"|"+t);i=S._appendVersionTo(i),S.cookieWrite(S.cookieName,i,1)},S._getField=function(e,t){return null==S._fields||!t&&S._fieldsExpired&&S._fieldsExpired[e]?null:S._fields[e]},S._setField=function(e,t,i){null==S._fields&&(S._fields={}),S._fields[e]=t,i||S._writeVisitor()},S._getFieldList=function(e,t){var i=S._getField(e,t);return i?i.split("*"):null},S._setFieldList=function(e,t,i){S._setField(e,t?t.join("*"):"",i)},S._getFieldMap=function(e,t){var i=S._getFieldList(e,t);if(i){var n,r={};for(n=0;n<i.length;n+=2)r[i[n]]=i[n+1];return r}return null},S._setFieldMap=function(e,t,i){var n,r=null;if(t){r=[];for(n in t)j(n)&&(r.push(n),r.push(t[n]))}S._setFieldList(e,r,i)},S._setFieldExpire=function(e,t,i){var n=new Date;n.setTime(n.getTime()+1e3*t),null==S._fields&&(S._fields={}),S._fields["expire"+e]=Math.floor(n.getTime()/1e3)+(i?"s":""),t<0?(S._fieldsExpired||(S._fieldsExpired={}),S._fieldsExpired[e]=!0):S._fieldsExpired&&(S._fieldsExpired[e]=!1),i&&(S.cookieRead(S.sessionCookieName)||S.cookieWrite(S.sessionCookieName,"1"))},S._findVisitorID=function(e){return e&&("object"==typeof e&&(e=e.d_mid?e.d_mid:e.visitorID?e.visitorID:e.id?e.id:e.uuid?e.uuid:""+e),e&&(e=e.toUpperCase(),"NOTARGET"===e&&(e=N)),e&&(e===N||e.match(_.VALID_VISITOR_ID_REGEX))||(e="")),e},S._setFields=function(e,t){if(S._clearTimeout(e),null!=S._loading&&(S._loading[e]=!1),q.fieldGroupObj[e]&&q.setState(e,!1),e===b){q.isClientSideMarketingCloudVisitorID!==!0&&(q.isClientSideMarketingCloudVisitorID=!1);var i=S._getField(k);if(!i||S.overwriteCrossDomainMCIDAndAID){if(i="object"==typeof t&&t.mid?t.mid:S._findVisitorID(t),!i){if(S._use1stPartyMarketingCloudServer&&!S.tried1stPartyMarketingCloudServer)return S.tried1stPartyMarketingCloudServer=!0,void S.getAnalyticsVisitorID(null,!1,!0);i=S._generateLocalMID()}S._setField(k,i)}i&&i!==N||(i=""),"object"==typeof t&&((t.d_region||t.dcs_region||t.d_blob||t.blob)&&S._setFields(F,t),S._use1stPartyMarketingCloudServer&&t.mid&&S._setFields(P,{id:t.id})),S._callAllCallbacks(k,[i])}if(e===F&&"object"==typeof t){var n=604800;void 0!=t.id_sync_ttl&&t.id_sync_ttl&&(n=parseInt(t.id_sync_ttl,10));var r=B.getRegionAndCheckIfChanged(t,n);S._callAllCallbacks(x,[r]);var a=S._getField(V);(t.d_blob||t.blob)&&(a=t.d_blob,a||(a=t.blob),S._setFieldExpire(V,n),S._setField(V,a)),a||(a=""),S._callAllCallbacks(V,[a]),!t.error_msg&&S._newCustomerIDsHash&&S._setField(T,S._newCustomerIDsHash)}if(e===P){var s=S._getField(R);s&&!S.overwriteCrossDomainMCIDAndAID||(s=S._findVisitorID(t),s?s!==N&&S._setFieldExpire(V,-1):s=N,S._setField(R,s)),s&&s!==N||(s=""),S._callAllCallbacks(R,[s])}if(S.idSyncDisableSyncs||S.disableIdSyncs)B.idCallNotProcesssed=!0;else{B.idCallNotProcesssed=!1;var o={};o.ibs=t.ibs,o.subdomain=t.subdomain,B.processIDCallData(o)}if(t===Object(t)){var l,u;S.isAllowed()&&(l=S._getField(L)),l||(l=N,t.d_optout&&t.d_optout instanceof Array&&(l=t.d_optout.join(",")),u=parseInt(t.d_ottl,10),isNaN(u)&&(u=7200),S._setFieldExpire(L,u,!0),S._setField(L,l)),S._callAllCallbacks(L,[l])}},S._loading=null,S._getRemoteField=function(e,t,i,n,r){var a,s="",o=H.isFirstPartyAnalyticsVisitorIDCall(e),l={MCAAMLH:!0,MCAAMB:!0};if(S.isAllowed()){S._readVisitor(),s=S._getField(e,l[e]===!0);var u=function(){return(!s||S._fieldsExpired&&S._fieldsExpired[e])&&(!S.disableThirdPartyCalls||o)};if(u()){if(e===k||e===L?a=b:e===x||e===V?a=F:e===R&&(a=P),a)return!t||null!=S._loading&&S._loading[a]||(null==S._loading&&(S._loading={}),S._loading[a]=!0,S._loadData(a,t,function(t){if(!S._getField(e)){t&&q.setState(a,!0);var i="";e===k?i=S._generateLocalMID():a===F&&(i={error_msg:"timeout"}),S._setFields(a,i)}},r)),S._registerCallback(e,i),s?s:(t||S._setFields(a,{id:N}),"")}else s||(e===k?(S._registerCallback(e,i),s=S._generateLocalMID(),S.setMarketingCloudVisitorID(s)):e===R?(S._registerCallback(e,i),s="",S.setAnalyticsVisitorID(s)):(s="",n=!0))}return e!==k&&e!==R||s!==N||(s="",n=!0),i&&n&&S._callCallback(i,[s]),s},S._setMarketingCloudFields=function(e){S._readVisitor(),S._setFields(b,e)},S._mapCustomerIDs=function(e){S.getAudienceManagerBlob(e,!0)},S._setAnalyticsFields=function(e){S._readVisitor(),S._setFields(P,e)},S._setAudienceManagerFields=function(e){S._readVisitor(),S._setFields(F,e)},S._getAudienceManagerURLData=function(e){var t=S.audienceManagerServer,i="",n=S._getField(k),r=S._getField(V,!0),a=S._getField(R),s=a&&a!==N?"&d_cid_ic=AVID%01"+encodeURIComponent(a):"";if(S.loadSSL&&S.audienceManagerServerSecure&&(t=S.audienceManagerServerSecure),t){var o,l,u=S.getCustomerIDs();if(u)for(o in u)j(o)&&(l=u[o],s+="&d_cid_ic="+encodeURIComponent(o)+"%01"+encodeURIComponent(l.id?l.id:"")+(l.authState?"%01"+l.authState:""));e||(e="_setAudienceManagerFields");var d="http"+(S.loadSSL?"s":"")+"://"+t+"/id",c="d_visid_ver="+S.version+"&d_rtbd=json&d_ver=2"+(!n&&S._use1stPartyMarketingCloudServer?"&d_verify=1":"")+"&d_orgid="+encodeURIComponent(S.marketingCloudOrgID)+"&d_nsid="+(S.idSyncContainerID||0)+(n?"&d_mid="+encodeURIComponent(n):"")+(S.idSyncDisable3rdPartySyncing||S.disableThirdPartyCookies?"&d_coppa=true":"")+(M===!0?"&d_coop_safe=1":M===!1?"&d_coop_unsafe=1":"")+(r?"&d_blob="+encodeURIComponent(r):"")+s,f=["s_c_il",S._in,e];return i=d+"?"+c+"&d_cb=s_c_il%5B"+S._in+"%5D."+e,{url:i,corsUrl:d+"?"+c,callback:f}}return{url:i}},S.appendVisitorIDsTo=function(e){try{var t=[[k,S._getField(k)],[R,S._getField(R)],[E,S.marketingCloudOrgID]];return S._addQuerystringParam(e,_.ADOBE_MC,D(t))}catch(t){return e}},S.appendSupplementalDataIDTo=function(e,t){if(t=t||S.getSupplementalDataID(H.generateRandomString(),!0),!t)return e;try{var i=D([["SDID",t],[E,S.marketingCloudOrgID]]);return S._addQuerystringParam(e,_.ADOBE_MC_SDID,i)}catch(t){return e}};var H={parseHash:function(e){var t=e.indexOf("#");return t>0?e.substr(t):""},hashlessUrl:function(e){var t=e.indexOf("#");return t>0?e.substr(0,t):e},addQueryParamAtLocation:function(e,t,i){var n=e.split("&");return i=null!=i?i:n.length,n.splice(i,0,t),n.join("&")},isFirstPartyAnalyticsVisitorIDCall:function(e,t,i){if(e!==R)return!1;var n;return t||(t=S.trackingServer),i||(i=S.trackingServerSecure),n=S.loadSSL?i:t,!("string"!=typeof n||!n.length)&&(n.indexOf("2o7.net")<0&&n.indexOf("omtrdc.net")<0)},isObject:function(e){return Boolean(e&&e===Object(e))},removeCookie:function(e){document.cookie=encodeURIComponent(e)+"=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"+(S.cookieDomain?" domain="+S.cookieDomain+";":"")},isTrackingServerPopulated:function(){return!!S.trackingServer||!!S.trackingServerSecure},getTimestampInSeconds:function(){return Math.round((new Date).getTime()/1e3)},parsePipeDelimetedKeyValues:function(e){var t=e.split("|");return t.reduce(function(e,t){var i=t.split("=");return e[i[0]]=decodeURIComponent(i[1]),e},{})},generateRandomString:function(e){e=e||5;for(var t="",i="abcdefghijklmnopqrstuvwxyz0123456789";e--;)t+=i[Math.floor(Math.random()*i.length)];return t},parseBoolean:function(e){return"true"===e||"false"!==e&&null},replaceMethodsWithFunction:function(e,t){for(var i in e)e.hasOwnProperty(i)&&"function"==typeof e[i]&&(e[i]=t);return e},pluck:function(e,t){return t.reduce(function(t,i){return e[i]&&(t[i]=e[i]),t},Object.create(null))}};S._helpers=H;var B=m(S,A);S._destinationPublishing=B,S.timeoutMetricsLog=[];var G,q={isClientSideMarketingCloudVisitorID:null,MCIDCallTimedOut:null,AnalyticsIDCallTimedOut:null,AAMIDCallTimedOut:null,fieldGroupObj:{},setState:function(e,t){switch(e){case b:t===!1?this.MCIDCallTimedOut!==!0&&(this.MCIDCallTimedOut=!1):this.MCIDCallTimedOut=t;break;case P:t===!1?this.AnalyticsIDCallTimedOut!==!0&&(this.AnalyticsIDCallTimedOut=!1):this.AnalyticsIDCallTimedOut=t;break;case F:t===!1?this.AAMIDCallTimedOut!==!0&&(this.AAMIDCallTimedOut=!1):this.AAMIDCallTimedOut=t}}};S.isClientSideMarketingCloudVisitorID=function(){return q.isClientSideMarketingCloudVisitorID},S.MCIDCallTimedOut=function(){return q.MCIDCallTimedOut},S.AnalyticsIDCallTimedOut=function(){return q.AnalyticsIDCallTimedOut},S.AAMIDCallTimedOut=function(){return q.AAMIDCallTimedOut},S.idSyncGetOnPageSyncInfo=function(){return S._readVisitor(),S._getField(O)},S.idSyncByURL=function(e){var t=I(e||{});if(t.error)return t.error;var i,n,r=e.url,a=encodeURIComponent,s=B;return r=r.replace(/^https:/,"").replace(/^http:/,""),i=u.encodeAndBuildRequest(["",e.dpid,e.dpuuid||""],","),n=["ibs",a(e.dpid),"img",a(r),t.ttl,"",i],s.addMessage(n.join("|")),s.requestToProcess(),"Successfully queued"},S.idSyncByDataSource=function(e){return e===Object(e)&&"string"==typeof e.dpuuid&&e.dpuuid.length?(e.url="//dpm.demdex.net/ibs:dpid="+e.dpid+"&dpuuid="+e.dpuuid,S.idSyncByURL(e)):"Error: config or config.dpuuid is empty"},S._getCookieVersion=function(e){e=e||S.cookieRead(S.cookieName);var t=_.VERSION_REGEX.exec(e),i=t&&t.length>1?t[1]:null;return i},S._resetAmcvCookie=function(e){var t=S._getCookieVersion();t&&!c.isLessThan(t,e)||H.removeCookie(S.cookieName)},S.setAsCoopSafe=function(){M=!0},S.setAsCoopUnsafe=function(){M=!1},S.init=function(){function i(){if(t&&"object"==typeof t){S.configs=Object.create(null);for(var e in t)j(e)&&(S[e]=t[e],S.configs[e]=t[e]);S.idSyncContainerID=S.idSyncContainerID||0,M="boolean"==typeof S.isCoopSafe?S.isCoopSafe:H.parseBoolean(S.isCoopSafe),S.resetBeforeVersion&&S._resetAmcvCookie(S.resetBeforeVersion),S._attemptToPopulateIdsFromUrl(),S._attemptToPopulateSdidFromUrl(),S._readVisitor();var i=S._getField(w),n=Math.ceil((new Date).getTime()/_.MILLIS_PER_DAY);S.idSyncDisableSyncs||S.disableIdSyncs||!B.canMakeSyncIDCall(i,n)||(S._setFieldExpire(V,-1),S._setField(w,n)),S.getMarketingCloudVisitorID(),S.getAudienceManagerLocationHint(),S.getAudienceManagerBlob(),S._mergeServerState(S.serverState)}else S._attemptToPopulateIdsFromUrl(),S._attemptToPopulateSdidFromUrl()}function n(){if(!S.idSyncDisableSyncs&&!S.disableIdSyncs){B.checkDPIframeSrc();var e=function(){var e=B;e.readyToAttachIframe()&&e.attachIframe()};v.addEventListener("load",function(){A.windowLoaded=!0,e()});try{f.receiveMessage(function(e){B.receiveMessage(e.data)},B.iframeHost)}catch(e){}}}function r(){S.whitelistIframeDomains&&_.POST_MESSAGE_ENABLED&&(S.whitelistIframeDomains=S.whitelistIframeDomains instanceof Array?S.whitelistIframeDomains:[S.whitelistIframeDomains],S.whitelistIframeDomains.forEach(function(t){var i=new a(e,t),n=s(S,i);f.receiveMessage(n,t)}))}i(),n(),r()}};h.getInstance=function(e,t){function n(){var t=i.s_c_il;if(t)for(var n=0;n<t.length;n++){var r=t[n];if(r&&"Visitor"===r._c&&r.marketingCloudOrgID===e)return r}}function a(){try{return i.self!==i.parent}catch(e){return!0}}function s(){i.s_c_il.splice(--i.s_c_in,1)}function o(e){var t="TEST_AMCV_COOKIE";return e.cookieWrite(t,"T",1),"T"===e.cookieRead(t)&&(e._helpers.removeCookie(t),!0)}if(!e)throw new Error("Visitor requires Adobe Marketing Cloud Org ID.");e.indexOf("@")<0&&(e+="@AdobeOrg");var l=n();if(l)return l;var d=e,c=d.split("").reverse().join(""),f=new h(e,null,c);s();var g=u.getIeVersion(),p="number"==typeof g&&g<10;if(p)return f._helpers.replaceMethodsWithFunction(f,function(){});var m=a()&&!o(f)&&i.parent?new r(e,t,f,i.parent):new h(e,t,c);return f=null,m.init(),m},n(),i.Visitor=h,t.exports=h}).call(this,"undefined"!=typeof window&&"undefined"!=typeof global&&window.global===global?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./child/ChildVisitor":2,"./child/Message":3,"./child/makeChildMessageListener":4,"./units/crossDomain":8,"./units/makeCorsRequest":9,"./units/makeDestinationPublishing":10,"./units/version":11,"./utils/asyncParallelApply":12,"./utils/constants":14,"./utils/enums":15,"./utils/getDomain":16,"./utils/utils":18,"@adobe-mcid/visitor-js-shared/lib/ids/generateRandomID":19}],2:[function(e,t,i){(function(i){e("../utils/polyfills");var n=e("./strategies/LocalVisitor"),r=e("./strategies/ProxyVisitor"),a=e("./strategies/PlaceholderVisitor"),s=e("../utils/callbackRegistryFactory"),o=e("./Message"),l=e("../utils/enums"),u=l.MESSAGES;t.exports=function(e,t,l,d){function c(e){Object.assign(I,e)}function f(e){Object.assign(I.state,e),I.callbackRegistry.executeAll(I.state)}function g(e){if(!A.isInvalid(e)){v=!1;var t=A.parse(e);I.setStateAndPublish(t.state)}}function p(e){!v&&S&&(v=!0,A.send(d,e))}function m(){var e=!0;c(new n(l._generateID)),I.getMarketingCloudVisitorID(),I.callbackRegistry.executeAll(I.state,e),i.removeEventListener("message",_)}function _(e){if(!A.isInvalid(e)){var t=A.parse(e);v=!1,i.clearTimeout(this.timeout),i.removeEventListener("message",_),c(new r(I)),i.addEventListener("message",g),I.setStateAndPublish(t.state),I.callbackRegistry.hasCallbacks()&&p(u.GETSTATE)}}function h(){var e=250;S&&postMessage?(i.addEventListener("message",_),p(u.HANDSHAKE),this.timeout=setTimeout(m,e)):m()}function C(){i.s_c_in||(i.s_c_il=[],i.s_c_in=0),I._c="Visitor",I._il=i.s_c_il,I._in=i.s_c_in,I._il[I._in]=I,i.s_c_in++}function D(){function e(e){0!==e.indexOf("_")&&"function"==typeof l[e]&&(I[e]=function(){})}Object.keys(l).forEach(e),I.getSupplementalDataID=l.getSupplementalDataID}var I=this,S=t.whitelistParentDomain;I.state={},I.version=l.version,I.marketingCloudOrgID=e;var v=!1,A=new o(e,S);I.callbackRegistry=s(),I.init=function(){C(),D(),c(new a(I)),h()},I.findField=function(e,t){if(I.state[e])return t(I.state[e]),I.state[e]},I.messageParent=p,I.setStateAndPublish=f}}).call(this,"undefined"!=typeof window&&"undefined"!=typeof global&&window.global===global?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../utils/callbackRegistryFactory":13,"../utils/enums":15,"../utils/polyfills":17,"./Message":3,"./strategies/LocalVisitor":5,"./strategies/PlaceholderVisitor":6,"./strategies/ProxyVisitor":7}],3:[function(e,t,i){var n=e("../utils/enums"),r=n.MESSAGES,a={0:"prefix",1:"orgID",2:"state"};t.exports=function(e,t){this.parse=function(e){try{var t={},i=e.data.split("|");return i.forEach(function(e,i){if(void 0!==e){var n=a[i];t[n]=2!==i?e:JSON.parse(e)}}),t}catch(e){}},this.isInvalid=function(i){var n=this.parse(i);if(!n||Object.keys(n).length<2)return!0;var a=e!==n.orgID,s=!t||i.origin!==t,o=Object.keys(r).indexOf(n.prefix)===-1;return a||s||o},this.send=function(i,n,r){var a=n+"|"+e;r&&r===Object(r)&&(a+="|"+JSON.stringify(r));try{i.postMessage(a,t)}catch(e){}}}},{"../utils/enums":15}],4:[function(e,t,i){var n=e("../utils/enums"),r=e("../utils/utils"),a=n.MESSAGES,s=n.ALL_APIS,o=n.ASYNC_API_MAP,l=n.FIELDGROUP_TO_FIELD;t.exports=function(e,t){function i(){var t={};return Object.keys(s).forEach(function(i){var n=s[i],a=e[n]();r.isValueEmpty(a)||(t[i]=a)}),t}function n(){var t=[];return e._loading&&Object.keys(e._loading).forEach(function(i){if(e._loading[i]){var n=l[i];t.push(n)}}),t.length?t:null}function u(t){return function i(r){var a=n();if(a){var s=o[a[0]];e[s](i,!0)}else t()}}function d(e,n){var r=i();t.send(e,n,r)}function c(e){g(e),d(e,a.HANDSHAKE)}function f(e){var t=u(function(){d(e,a.PARENTSTATE)});t()}function g(i){function n(n){r.call(e,n),t.send(i,a.PARENTSTATE,{CUSTOMERIDS:e.getCustomerIDs()})}var r=e.setCustomerIDs;e.setCustomerIDs=n}return function(e){if(!t.isInvalid(e)){var i=t.parse(e).prefix,n=i===a.HANDSHAKE?c:f;n(e.source)}}}},{"../utils/enums":15,"../utils/utils":18}],5:[function(e,t,i){var n=e("../../utils/enums"),r=n.STATE_KEYS_MAP;t.exports=function(e){function t(){}function i(t,i){var n=this;return function(){var t=e(0,r.MCMID),a={};return a[r.MCMID]=t,n.setStateAndPublish(a),i(t),t}}this.getMarketingCloudVisitorID=function(e){e=e||t;var n=this.findField(r.MCMID,e),a=i.call(this,r.MCMID,e);return"undefined"!=typeof n?n:a()}}},{"../../utils/enums":15}],6:[function(e,t,i){var n=e("../../utils/enums"),r=n.ASYNC_API_MAP;t.exports=function(){Object.keys(r).forEach(function(e){var t=r[e];this[t]=function(t){this.callbackRegistry.add(e,t)}},this)}},{"../../utils/enums":15}],7:[function(e,t,i){var n=e("../../utils/enums"),r=n.MESSAGES,a=n.ASYNC_API_MAP,s=n.SYNC_API_MAP;t.exports=function(){function e(){}function t(e,t){var i=this;return function(){return i.callbackRegistry.add(e,t),i.messageParent(r.GETSTATE),""}}function i(i){var n=a[i];this[n]=function(n){n=n||e;var r=this.findField(i,n),a=t.call(this,i,n);return"undefined"!=typeof r?r:a()}}function n(t){var i=s[t];this[i]=function(){var i=this.findField(t,e);return i||{}}}Object.keys(a).forEach(i,this),Object.keys(s).forEach(n,this)}},{"../../utils/enums":15}],8:[function(e,t,i){(function(e){var i=!!e.postMessage;t.exports={postMessage:function(e,t,n){var r=1;t&&(i?n.postMessage(e,t.replace(/([^:]+:\/\/[^\/]+).*/,"$1")):t&&(n.location=t.replace(/#.*$/,"")+"#"+ +new Date+r++ +"&"+e))},receiveMessage:function(t,n){var r;try{i&&(t&&(r=function(e){return!("string"==typeof n&&e.origin!==n||"[object Function]"===Object.prototype.toString.call(n)&&n(e.origin)===!1)&&void t(e)}),e.addEventListener?e[t?"addEventListener":"removeEventListener"]("message",r):e[t?"attachEvent":"detachEvent"]("onmessage",r))}catch(e){}}}}).call(this,"undefined"!=typeof window&&"undefined"!=typeof global&&window.global===global?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],9:[function(e,t,i){(function(e){t.exports=function(t,i){return{corsMetadata:function(){var t="none",i=!0;return"undefined"!=typeof XMLHttpRequest&&XMLHttpRequest===Object(XMLHttpRequest)&&("withCredentials"in new XMLHttpRequest?t="XMLHttpRequest":"undefined"!=typeof XDomainRequest&&XDomainRequest===Object(XDomainRequest)&&(i=!1),Object.prototype.toString.call(e.HTMLElement).indexOf("Constructor")>0&&(i=!1)),{corsType:t,corsCookiesEnabled:i}}(),getCORSInstance:function(){return"none"===this.corsMetadata.corsType?null:new e[this.corsMetadata.corsType]},fireCORS:function(i,n,r){function a(t){var n;try{if(n=JSON.parse(t),n!==Object(n))return void s.handleCORSError(i,null,"Response is not JSON")}catch(e){return void s.handleCORSError(i,e,"Error parsing response as JSON")}try{for(var r=i.callback,a=e,o=0;o<r.length;o++)a=a[r[o]];a(n)}catch(e){s.handleCORSError(i,e,"Error forming callback function")}}var s=this;n&&(i.loadErrorHandler=n);try{var o=this.getCORSInstance();o.open("get",i.corsUrl+"&ts="+(new Date).getTime(),!0),"XMLHttpRequest"===this.corsMetadata.corsType&&(o.withCredentials=!0,o.timeout=t.loadTimeout,o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),o.onreadystatechange=function(){4===this.readyState&&200===this.status&&a(this.responseText)}),o.onerror=function(e){s.handleCORSError(i,e,"onerror")},o.ontimeout=function(e){s.handleCORSError(i,e,"ontimeout")},o.send(),t._log.requests.push(i.corsUrl)}catch(e){this.handleCORSError(i,e,"try-catch")}},handleCORSError:function(e,i,n){t.CORSErrors.push({corsData:e,error:i,description:n}),e.loadErrorHandler&&("ontimeout"===n?e.loadErrorHandler(!0):e.loadErrorHandler(!1))}}}}).call(this,"undefined"!=typeof window&&"undefined"!=typeof global&&window.global===global?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],10:[function(e,t,i){(function(i){var n=e("../utils/constants"),r=e("./crossDomain"),a=e("../utils/utils"),s="MCSYNCSOP",o="MCSYNCS",l="MCAAMLH";t.exports=function(e,t){var u=i.document;return{THROTTLE_START:3e4,MAX_SYNCS_LENGTH:649,throttleTimerSet:!1,id:null,onPagePixels:[],iframeHost:null,getIframeHost:function(e){if("string"==typeof e){var t=e.split("/");return t[0]+"//"+t[2]}},subdomain:null,url:null,getUrl:function(){var t,i="http://fast.",n="?d_nsid="+e.idSyncContainerID+"#"+encodeURIComponent(u.location.href);return this.subdomain||(this.subdomain="nosubdomainreturned"),e.loadSSL&&(i=e.idSyncSSLUseAkamai?"https://fast.":"https://"),
      t=i+this.subdomain+".demdex.net/dest5.html"+n,this.iframeHost=this.getIframeHost(t),this.id="destination_publishing_iframe_"+this.subdomain+"_"+e.idSyncContainerID,t},checkDPIframeSrc:function(){var t="?d_nsid="+e.idSyncContainerID+"#"+encodeURIComponent(u.location.href);"string"==typeof e.dpIframeSrc&&e.dpIframeSrc.length&&(this.id="destination_publishing_iframe_"+(e._subdomain||this.subdomain||(new Date).getTime())+"_"+e.idSyncContainerID,this.iframeHost=this.getIframeHost(e.dpIframeSrc),this.url=e.dpIframeSrc+t)},idCallNotProcesssed:null,doAttachIframe:!1,startedAttachingIframe:!1,iframeHasLoaded:null,iframeIdChanged:null,newIframeCreated:null,originalIframeHasLoadedAlready:null,regionChanged:!1,timesRegionChanged:0,sendingMessages:!1,messages:[],messagesPosted:[],messagesReceived:[],messageSendingInterval:n.POST_MESSAGE_ENABLED?null:100,jsonForComparison:[],jsonDuplicates:[],jsonWaiting:[],jsonProcessed:[],canSetThirdPartyCookies:!0,receivedThirdPartyCookiesNotification:!1,readyToAttachIframe:function(){return!e.idSyncDisable3rdPartySyncing&&(this.doAttachIframe||e._doAttachIframe)&&(this.subdomain&&"nosubdomainreturned"!==this.subdomain||e._subdomain)&&this.url&&!this.startedAttachingIframe},attachIframe:function(){function e(){n=u.createElement("iframe"),n.sandbox="allow-scripts allow-same-origin",n.title="Adobe ID Syncing iFrame",n.id=i.id,n.name=i.id+"_name",n.style.cssText="display: none; width: 0; height: 0;",n.src=i.url,i.newIframeCreated=!0,t(),u.body.appendChild(n)}function t(){n.addEventListener("load",function(){n.className="aamIframeLoaded",i.iframeHasLoaded=!0,i.requestToProcess()})}this.startedAttachingIframe=!0;var i=this,n=u.getElementById(this.id);n?"IFRAME"!==n.nodeName?(this.id+="_2",this.iframeIdChanged=!0,e()):(this.newIframeCreated=!1,"aamIframeLoaded"!==n.className?(this.originalIframeHasLoadedAlready=!1,t()):(this.originalIframeHasLoadedAlready=!0,this.iframeHasLoaded=!0,this.iframe=n,this.requestToProcess())):e(),this.iframe=n},requestToProcess:function(t){function i(){a.jsonForComparison.push(t),a.jsonWaiting.push(t),a.processSyncOnPage(t)}var r,a=this;if(t===Object(t)&&t.ibs)if(r=JSON.stringify(t.ibs||[]),this.jsonForComparison.length){var s,o,l,u=!1;for(s=0,o=this.jsonForComparison.length;s<o;s++)if(l=this.jsonForComparison[s],r===JSON.stringify(l.ibs||[])){u=!0;break}u?this.jsonDuplicates.push(t):i()}else i();if((this.receivedThirdPartyCookiesNotification||!n.POST_MESSAGE_ENABLED||this.iframeHasLoaded)&&this.jsonWaiting.length){var d=this.jsonWaiting.shift();this.process(d),this.requestToProcess()}!e.idSyncDisableSyncs&&this.iframeHasLoaded&&this.messages.length&&!this.sendingMessages&&(this.throttleTimerSet||(this.throttleTimerSet=!0,setTimeout(function(){a.messageSendingInterval=n.POST_MESSAGE_ENABLED?null:150},this.THROTTLE_START)),this.sendingMessages=!0,this.sendMessages())},getRegionAndCheckIfChanged:function(t,i){var n=e._getField(l),r=t.d_region||t.dcs_region;return n?r&&(e._setFieldExpire(l,i),e._setField(l,r),parseInt(n,10)!==r&&(this.regionChanged=!0,this.timesRegionChanged++,e._setField(s,""),e._setField(o,""),n=r)):(n=r,n&&(e._setFieldExpire(l,i),e._setField(l,n))),n||(n=""),n},processSyncOnPage:function(e){var t,i,n,r;if((t=e.ibs)&&t instanceof Array&&(i=t.length))for(n=0;n<i;n++)r=t[n],r.syncOnPage&&this.checkFirstPartyCookie(r,"","syncOnPage")},process:function(e){var t,i,n,r,s,o=encodeURIComponent,l="",u=!1;if((t=e.ibs)&&t instanceof Array&&(i=t.length))for(u=!0,n=0;n<i;n++)r=t[n],s=[o("ibs"),o(r.id||""),o(r.tag||""),a.encodeAndBuildRequest(r.url||[],","),o(r.ttl||""),"",l,r.fireURLSync?"true":"false"],r.syncOnPage||(this.canSetThirdPartyCookies?this.addMessage(s.join("|")):r.fireURLSync&&this.checkFirstPartyCookie(r,s.join("|")));u&&this.jsonProcessed.push(e)},checkFirstPartyCookie:function(t,i,r){var a="syncOnPage"===r,l=a?s:o;e._readVisitor();var u,d,c=e._getField(l),f=!1,g=!1,p=Math.ceil((new Date).getTime()/n.MILLIS_PER_DAY);c?(u=c.split("*"),d=this.pruneSyncData(u,t.id,p),f=d.dataPresent,g=d.dataValid,f&&g||this.fireSync(a,t,i,u,l,p)):(u=[],this.fireSync(a,t,i,u,l,p))},pruneSyncData:function(e,t,i){var n,r,a,s=!1,o=!1;for(r=0;r<e.length;r++)n=e[r],a=parseInt(n.split("-")[1],10),n.match("^"+t+"-")?(s=!0,i<a?o=!0:(e.splice(r,1),r--)):i>=a&&(e.splice(r,1),r--);return{dataPresent:s,dataValid:o}},manageSyncsSize:function(e){if(e.join("*").length>this.MAX_SYNCS_LENGTH)for(e.sort(function(e,t){return parseInt(e.split("-")[1],10)-parseInt(t.split("-")[1],10)});e.join("*").length>this.MAX_SYNCS_LENGTH;)e.shift()},fireSync:function(t,i,n,r,a,s){var o=this;if(t){if("img"===i.tag){var l,u,d,c,f=i.url,g=e.loadSSL?"https:":"http:";for(l=0,u=f.length;l<u;l++){d=f[l],c=/^\/\//.test(d);var p=new Image;p.addEventListener("load",function(t,i,n,r){return function(){o.onPagePixels[t]=null,e._readVisitor();var s,l=e._getField(a),u=[];if(l){s=l.split("*");var d,c,f;for(d=0,c=s.length;d<c;d++)f=s[d],f.match("^"+i.id+"-")||u.push(f)}o.setSyncTrackingData(u,i,n,r)}}(this.onPagePixels.length,i,a,s)),p.src=(c?g:"")+d,this.onPagePixels.push(p)}}}else this.addMessage(n),this.setSyncTrackingData(r,i,a,s)},addMessage:function(t){var i=encodeURIComponent,r=i(e._enableErrorReporting?"---destpub-debug---":"---destpub---");this.messages.push((n.POST_MESSAGE_ENABLED?"":r)+t)},setSyncTrackingData:function(t,i,n,r){t.push(i.id+"-"+(r+Math.ceil(i.ttl/60/24))),this.manageSyncsSize(t),e._setField(n,t.join("*"))},sendMessages:function(){var e,t=this,i="",r=encodeURIComponent;this.regionChanged&&(i=r("---destpub-clear-dextp---"),this.regionChanged=!1),this.messages.length?n.POST_MESSAGE_ENABLED?(e=i+r("---destpub-combined---")+this.messages.join("%01"),this.postMessage(e),this.messages=[],this.sendingMessages=!1):(e=this.messages.shift(),this.postMessage(i+e),setTimeout(function(){t.sendMessages()},this.messageSendingInterval)):this.sendingMessages=!1},postMessage:function(e){r.postMessage(e,this.url,this.iframe.contentWindow),this.messagesPosted.push(e)},receiveMessage:function(e){var t,i=/^---destpub-to-parent---/;"string"==typeof e&&i.test(e)&&(t=e.replace(i,"").split("|"),"canSetThirdPartyCookies"===t[0]&&(this.canSetThirdPartyCookies="true"===t[1],this.receivedThirdPartyCookiesNotification=!0,this.requestToProcess()),this.messagesReceived.push(e))},processIDCallData:function(i){(null==this.url||i.subdomain&&"nosubdomainreturned"===this.subdomain)&&("string"==typeof e._subdomain&&e._subdomain.length?this.subdomain=e._subdomain:this.subdomain=i.subdomain||"",this.url=this.getUrl()),i.ibs instanceof Array&&i.ibs.length&&(this.doAttachIframe=!0),this.readyToAttachIframe()&&(e.idSyncAttachIframeOnWindowLoad?(t.windowLoaded||"complete"===u.readyState||"loaded"===u.readyState)&&this.attachIframe():this.attachIframeASAP()),"function"==typeof e.idSyncIDCallResult?e.idSyncIDCallResult(i):this.requestToProcess(i),"function"==typeof e.idSyncAfterIDCallResult&&e.idSyncAfterIDCallResult(i)},canMakeSyncIDCall:function(t,i){return e._forceSyncIDCall||!t||i-t>n.DAYS_BETWEEN_SYNC_ID_CALLS},attachIframeASAP:function(){function e(){t.startedAttachingIframe||(u.body?t.attachIframe():setTimeout(e,30))}var t=this;e()}}}}).call(this,"undefined"!=typeof window&&"undefined"!=typeof global&&window.global===global?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../utils/constants":14,"../utils/utils":18,"./crossDomain":8}],11:[function(e,t,i){function n(e){for(var t=/^\d+$/,i=0,n=e.length;i<n;i++)if(!t.test(e[i]))return!1;return!0}function r(e,t){for(;e.length<t.length;)e.push("0");for(;t.length<e.length;)t.push("0")}function a(e,t){for(var i=0;i<e.length;i++){var n=parseInt(e[i],10),r=parseInt(t[i],10);if(n>r)return 1;if(r>n)return-1}return 0}function s(e,t){if(e===t)return 0;var i=e.toString().split("."),s=t.toString().split(".");return n(i.concat(s))?(r(i,s),a(i,s)):NaN}t.exports={compare:s,isLessThan:function(e,t){return s(e,t)<0},areVersionsDifferent:function(e,t){return 0!==s(e,t)},isGreaterThan:function(e,t){return s(e,t)>0},isEqual:function(e,t){return 0===s(e,t)}}},{}],12:[function(e,t,i){t.exports=function(e,t){function i(e){return function(i){n[e]=i,r++;var s=r===a;s&&t(n)}}var n={},r=0,a=Object.keys(e).length;Object.keys(e).forEach(function(t){var n=e[t];if(n.fn){var r=n.args||[];r.unshift(i(t)),n.fn.apply(n.context||null,r)}})}},{}],13:[function(e,t,i){function n(){return{callbacks:{},add:function(e,t){this.callbacks[e]=this.callbacks[e]||[];var i=this.callbacks[e].push(t)-1;return function(){this.callbacks[e].splice(i,1)}},execute:function(e,t){if(this.callbacks[e]){t="undefined"==typeof t?[]:t,t=t instanceof Array?t:[t];try{for(;this.callbacks[e].length;){var i=this.callbacks[e].shift();"function"==typeof i?i.apply(null,t):i instanceof Array&&i[1].apply(i[0],t)}delete this.callbacks[e]}catch(e){}}},executeAll:function(e,t){(t||e&&!r.isObjectEmpty(e))&&Object.keys(this.callbacks).forEach(function(t){var i=void 0!==e[t]?e[t]:"";this.execute(t,i)},this)},hasCallbacks:function(){return Boolean(Object.keys(this.callbacks).length)}}}var r=e("./utils");t.exports=n},{"./utils":18}],14:[function(e,t,i){(function(e){t.exports={POST_MESSAGE_ENABLED:!!e.postMessage,DAYS_BETWEEN_SYNC_ID_CALLS:1,MILLIS_PER_DAY:864e5,ADOBE_MC:"adobe_mc",ADOBE_MC_SDID:"adobe_mc_sdid",VALID_VISITOR_ID_REGEX:/^[0-9a-fA-F\-]+$/,ADOBE_MC_TTL_IN_MIN:5,VERSION_REGEX:/vVersion\|((\d+\.)?(\d+\.)?(\*|\d+))(?=$|\|)/}}).call(this,"undefined"!=typeof window&&"undefined"!=typeof global&&window.global===global?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],15:[function(e,t,i){i.MESSAGES={HANDSHAKE:"HANDSHAKE",GETSTATE:"GETSTATE",PARENTSTATE:"PARENTSTATE"},i.STATE_KEYS_MAP={MCMID:"MCMID",MCAID:"MCAID",MCAAMB:"MCAAMB",MCAAMLH:"MCAAMLH",MCOPTOUT:"MCOPTOUT",CUSTOMERIDS:"CUSTOMERIDS"},i.ASYNC_API_MAP={MCMID:"getMarketingCloudVisitorID",MCAID:"getAnalyticsVisitorID",MCAAMB:"getAudienceManagerBlob",MCAAMLH:"getAudienceManagerLocationHint",MCOPTOUT:"getOptOut"},i.SYNC_API_MAP={CUSTOMERIDS:"getCustomerIDs"},i.ALL_APIS={MCMID:"getMarketingCloudVisitorID",MCAAMB:"getAudienceManagerBlob",MCAAMLH:"getAudienceManagerLocationHint",MCOPTOUT:"getOptOut",MCAID:"getAnalyticsVisitorID",CUSTOMERIDS:"getCustomerIDs"},i.FIELDGROUP_TO_FIELD={MC:"MCMID",A:"MCAID",AAM:"MCAAMB"},i.FIELDS={MCMID:"MCMID",MCOPTOUT:"MCOPTOUT",MCAID:"MCAID",MCAAMLH:"MCAAMLH",MCAAMB:"MCAAMB"},i.AUTH_STATE={UNKNOWN:0,AUTHENTICATED:1,LOGGED_OUT:2},i.OPT_OUT={GLOBAL:"global"}},{}],16:[function(e,t,i){(function(e){t.exports=function(t){var i;if(!t&&e.location&&(t=e.location.hostname),i=t)if(/^[0-9.]+$/.test(i))i="";else{var n=",ac,ad,ae,af,ag,ai,al,am,an,ao,aq,ar,as,at,au,aw,ax,az,ba,bb,be,bf,bg,bh,bi,bj,bm,bo,br,bs,bt,bv,bw,by,bz,ca,cc,cd,cf,cg,ch,ci,cl,cm,cn,co,cr,cu,cv,cw,cx,cz,de,dj,dk,dm,do,dz,ec,ee,eg,es,et,eu,fi,fm,fo,fr,ga,gb,gd,ge,gf,gg,gh,gi,gl,gm,gn,gp,gq,gr,gs,gt,gw,gy,hk,hm,hn,hr,ht,hu,id,ie,im,in,io,iq,ir,is,it,je,jo,jp,kg,ki,km,kn,kp,kr,ky,kz,la,lb,lc,li,lk,lr,ls,lt,lu,lv,ly,ma,mc,md,me,mg,mh,mk,ml,mn,mo,mp,mq,mr,ms,mt,mu,mv,mw,mx,my,na,nc,ne,nf,ng,nl,no,nr,nu,nz,om,pa,pe,pf,ph,pk,pl,pm,pn,pr,ps,pt,pw,py,qa,re,ro,rs,ru,rw,sa,sb,sc,sd,se,sg,sh,si,sj,sk,sl,sm,sn,so,sr,st,su,sv,sx,sy,sz,tc,td,tf,tg,th,tj,tk,tl,tm,tn,to,tp,tr,tt,tv,tw,tz,ua,ug,uk,us,uy,uz,va,vc,ve,vg,vi,vn,vu,wf,ws,yt,",r=i.split("."),a=r.length-1,s=a-1;if(a>1&&r[a].length<=2&&(2===r[a-1].length||n.indexOf(","+r[a]+",")<0)&&s--,s>0)for(i="";a>=s;)i=r[a]+(i?".":"")+i,a--}return i}}).call(this,"undefined"!=typeof window&&"undefined"!=typeof global&&window.global===global?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],17:[function(e,t,i){Object.assign=Object.assign||function(e){for(var t,i,n=1;n<arguments.length;++n){i=arguments[n];for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e}},{}],18:[function(e,t,i){i.isObjectEmpty=function(e){return e===Object(e)&&0===Object.keys(e).length},i.isValueEmpty=function(e){return""===e||i.isObjectEmpty(e)},i.getIeVersion=function(){if(document.documentMode)return document.documentMode;for(var e=7;e>4;e--){var t=document.createElement("div");if(t.innerHTML="<!--[if IE "+e+"]><span></span><![endif]-->",t.getElementsByTagName("span").length)return t=null,e;t=null}return null},i.encodeAndBuildRequest=function(e,t){return e.map(encodeURIComponent).join(t)}},{}],19:[function(e,t,i){t.exports=function(e){var t,i,n="0123456789",r="",a="",s=8,o=10,l=10;if(1==e){for(n+="ABCDEF",t=0;16>t;t++)i=Math.floor(Math.random()*s),r+=n.substring(i,i+1),i=Math.floor(Math.random()*s),a+=n.substring(i,i+1),s=16;return r+"-"+a}for(t=0;19>t;t++)i=Math.floor(Math.random()*o),r+=n.substring(i,i+1),0===t&&9==i?o=3:(1==t||2==t)&&10!=o&&2>i?o=10:2<t&&(o=10),i=Math.floor(Math.random()*l),a+=n.substring(i,i+1),0===t&&9==i?l=3:(1==t||2==t)&&10!=l&&2>i?l=10:2<t&&(l=10);return r+a}},{}]},{},[1]);

      opts =
      {
         trackingServer: 'mcclatchy.sc.omtrdc.net',
         trackingServerSecure: 'mcclatchy.sc.omtrdc.net'
      };

      if (mistats.adobe.adbmc && decodeURIComponent(mistats.adobe.adbmc[0]).indexOf(mistats.adobe.mcId) > -1)
      {
         opts.overwriteCrossDomainMCIDAndAID = true;
         mistats.appvid = mistats.adobe.adbmc[0].substr(10);
      }

      mistats.visitor = Visitor.getInstance(mistats.adobe.mcId, opts);

      if (!mistats.appvid)
      {
         aid = decodeURIComponent(location.search || '').match(/[\?&]appvid=[0-9a-z]{16}-[0-9a-z]{16}|[\?&]appvid=[0-9a-z]{36}/i);
         if (aid)
         {
            history.replaceState && (history.replaceState('', document.title, location.pathname + (location.search || '').replace(/[\?&]appvid=[^&]+/i, '') + (location.hash || '')));

            mistats.appvid = aid[0].substr(8).toUpperCase();
            mistats.adobe.setCookie('mi_avid', mistats.appvid);
            mcc = decodeURIComponent(document.cookie || '').match(new RegExp('AMCV_' + mistats.adobe.mcId + '=[^;]+'));
            if (mcc)
            {
               mistats.visitor._fields = mistats.visitor._fields || {};
               mistats.visitor._fields['MCAID'] = mistats.appvid;

               mcc = mcc[0].match(/\|MCAID\|/) ? mcc[0].replace(/\|MCAID\|[^\|]+/, '|MCAID|' + mistats.appvid) : mcc[0].replace(/\|vVersion/, '|MCAID|' + mistats.appvid + '|vVersion');
               mcc = mcc.replace(/[^=]+=/, '');

               mistats.adobe.setCookie('AMCV_' + mistats.adobe.mcId, mcc);
            }
         }
      }

      mistats.visitor.getVisitorValues(mistats.adobe.ecidEnd);

      if (!(mistats.visitor.isAllowed && mistats.visitor.isAllowed()) && mistats.cookiesDisabled)
         mistats.adobe.ecidEnd({reason: 'ecidFailed'});
      else
         setTimeout(function ()
         {
            !mistats.adobe.ready && (mistats.adobe.ecidEnd({reason: 'ecidTimeout'}));
         }, 5000);
   },

   processQueue: function (pReady)
   {
      pReady && (mistats.adobe.ready = true);

      if (!mistats.adobe.ready && (mistats.adobe.processing || !mistats.adobe.hasECID()))
         return

      if (!mistats.adobe.queue.length)
      {
         mistats.adobe.queue.processing = false;
         return;
      }

      mistats.adobe.queue.processing = true;
      (mistats.adobe.queue.shift())();
      mistats.adobe.processQueue(pReady);
   },

   addToQueue: function (pFunc)
   {
      if (!pFunc)
         return;

      mistats.adobe.queue[mistats.adobe.queue.length] = pFunc;
      mistats.adobe.processQueue();
   },

   checkRule: function (pName)
   {
      var a;
      var b;
      var c;
      var cond;

      if (pName === 'Adobe Target' && mistats.targetLib)
         return true;

      if (!(mistats.adobe.validHost && window._satellite && window._satellite._container && window._satellite._container.rules))
         return false;

      for (a = 0; !cond && a < window._satellite._container.rules.length; a++)
         if (typeof window._satellite._container.rules[a] === 'object')
         {
            if (window._satellite._container.rules[a].name === pName)
               cond = window._satellite._container.rules[a].conditions || [];
         }

      if (cond)
         for (a = 0; !b && a < cond.length; a++)
            if (cond[a].settings && cond[a].settings.domains)
               for (c = 0; !b && c < cond[a].settings.domains.length; c++)
                  b = (cond[a].settings.domains[c] || '').toLowerCase() === (location.hostname || '').toLowerCase().replace(/^www\./, '');

      return !!b;
   },

   isWaiting: function ()
   {
      var a;
      var at;
      var b;
      var c;

//      if (!mistats.adobe.validHost)
//         return false;
      if (mistats.adobe.validHost && (!window._satellite || (window._satellite && !window._satellite._container)))
         return true;

      if ((mistats.adobe.checkRule('propensity-score') && !mistats.propScore)
       || (mistats.adobe.checkRule('Adobe Target') && !mistats.atResponse))
         return true;

      return false;
   },

   launch: function ()
   {
      var env;
      var i;
      var micb;
      var objs;
      var timer;

      objs = document.getElementsByTagName('script');
      for (i = 0; !micb && i < objs.length; i++)
         (objs[i].src || '').match(/\/mistats\/micb\.js$/i) && (micb = objs[i]);

      if (!(micb && micb.insertAdjacentElement))
         return;

      mistats.propScore = (document.cookie || '').match(/mi_gps=-?\d+/);
      mistats.propScore && (mistats.propScore = mistats.propScore[0].substr(7));

      mistats.dataLayer();

      // Temp change to accommodate QA
      env = ((window.mi && window.mi.pageInfo && window.mi.pageInfo.getConf ? window.mi.pageInfo.getConf('launch_id') : null)
         || ((location.hostname || '').match(/^qa1\.[^\.]+\.com$/) ? 'EN37ace58f4e7e4d18ba520f715db89c43-development' :
            ((location.hostname || '').match(/^qa2\.[^\.]+\.com$/) ? 'EN8cde9db82a9846e6ae309b48cc09d5d6-development' : 'ENe8f70e36bc2f473e93435c31a9a5ba80')));


      objs = document.createElement('script');
      objs.type = 'text/javascript';
      objs.src = '//assets.adobedtm.com/launch-' + env + '.min.js';

      objs.addEventListener && (objs.addEventListener('load', function ()
      {
         var clk;
         var cto;
         var fcp;

         timer && (clearTimeout(timer));
         console.log('mi_launchload succeeded')
         mistats.adobe.perfMark('end launch deployment');
         mistats.windowEvent('mi_launchload');

         function fcpClear()
         {
            fcp && (clearInterval(fcp));
         };

         fcp = setInterval(function ()
         {
            var i;
            var pw;

            if (!(mistats.getElementsByClassName && window._satellite && window._satellite._container))
               return;

            if (!mistats.adobe.checkRule('choice'))
               return fcpClear();

            if (!cto && document.readyState === 'complete' && ((document.hasFocus && document.hasFocus()) || !document.hasFocus))
               cto = setTimeout(fcpClear, 2000);

            pw = mistats.getElementsByClassName(/fc-dialog/);
            if (window.frames && window.frames.length)
               for (i = 0; !pw && i < window.frames.length; i++)
                  pw = (window.frames[i].src || '').match(/https:\/\/p\.w\.m80fg\.com/i);
            if (!(pw && pw.length > 0))
               return;
            fcpClear();
            mistats.adobe.addToQueue(function ()
            {
               mistats.pagename = 'GFC: Paywall Stop';
               s.eVar4 = mistats.pagename;
               window.Visitor && (s.visitor = Visitor.getInstance(mistats.adobe.mcId));
               s.t();

               if (mistats.bind && mistats.getElementByClassName)
                  mistats.bind(mistats.getElementByClassName('fc-link'), 'mouseup', function (pEvent)
                  {
                     var to;

                     if (clk || !(pEvent && pEvent.target))
                        return;

                     to = pEvent.target;
                     while (to && to.nodeName !== 'A')
                        to = to.parentNode || null;

                     if (!(to && to.className === 'fc-link'))
                        return;

                     clk = true;
                     mistats.interactions && (mistats.interactions.increment('gfc_allowads', true));
                  });
            });
         }, 1000);
      }, false));
      mistats.adobe.perfMark('start launch deployment');
      micb.insertAdjacentElement('afterend', objs);
      timer = setTimeout(function ()
      {
         console.log('mi_launchload timeout');
         mistats.adobe.validHost = false;
         mistats.windowEvent('mistats_adobe');
      }, 8000);
   }
};

mistats.adobe.getECID();

if (mistats.adobe.validHost)
{
   mistats.adobe.addToQueue(mistats.adobe.launch);
}

window.addEventListener && (window.addEventListener('propensity', function (pEvent)
{
   pEvent && pEvent.propensityScore && (mistats.propScore = pEvent.propensityScore);
   console.log('mistats_gpscore: ' + (mistats.propScore || 'null'));
   mistats.windowEvent('mistats_adobe');
   mistats.propScore && (mistats.adobe.setCookie('mi_gps', mistats.propScore, 1800000));
}, false));

document.addEventListener && (document.addEventListener('at-request-succeeded', function (pEvent)
{
   mistats.atResponse = pEvent && pEvent.detail ? pEvent.detail : {};
   mistats.windowEvent('mistats_adobe');
}, false));

document.addEventListener && (document.addEventListener('at-request-failed', function (pEvent)
{
   mistats.atResponse = pEvent && pEvent.detail ? pEvent.detail : {};
   mistats.windowEvent('mistats_adobe');
}, false));

document.addEventListener && (document.addEventListener('at-library-loaded', function (pEvent)
{
   mistats.adobe.target.loaded = true;
   mistats.windowEvent('mistats_atloaded');
}, false));

mistats.BrowserMode = function ()
{
   var priv;

   function isPrivate()
   {
      return priv;
   };

   function store()
   {
      var date;
      var domain;

      priv = true;
      domain = (location.hostname || '').match(/[^\.]+(\.com)?$/);

      date = new Date();
      date.setTime(date.getTime() + 1209600000);
      document.cookie = ['mi_pbm=1', 'expires=' + date.toUTCString(), 'path=/', 'domain=' + (domain ? domain[0] : location.hostname)].join('; ');
   };

   function detect()
   {
      var test;

      if ((document.cookie || '').match(/mi_pbm=1/))
         return store();

      if (window.RequestFileSystem || window.webkitRequestFileSystem)
      {
         try
         {
            test = window.RequestFileSystem || window.webkitRequestFileSystem;
            test(window.TEMPORARY, 1, function ()
            {
            }, function ()
            {
               store();
            });
         } catch (pError)
         {
            store();
         }
      } else if ('MozAppearance' in document.documentElement.style && navigator.userAgent.match(/Firefox/) && !navigator.serviceWorker)
      {
         store();
      } else if (navigator.userAgent.match(/.Trident\/\d/) && navigator.userAgent.match(/.MSIE\s1\d\.\d|.rv:1\d\.\d/))
      {
         try
         {
            !window.msIndexedDB && (store());
         } catch (pError)
         {
            store();
         }
      } else if (window.localStorage && navigator.userAgent.match(/Safari/))
      {
         try
         {
            window.localStorage.setItem('mi_test', 1);
         } catch (pError)
         {
            store();
         }
         !priv && (window.localStorage.removeItem('mi_test'));
      }
   };

   this.isPrivate = isPrivate;
   detect();
};

mistats.browserMode = mistats.browserMode || (new mistats.BrowserMode());

mistats.AdSlots = function ()
{
   var adlist;
   var count;
   var lineItems;
   var ready;
   var tid;
   var timer;
   var total;

   function track(pObj)
   {
      var ctid;
      var ptid;
      var qs;
      var req;

      if (!pObj)
         return;

      ctid = getTransactionId();

      pObj.ch = (mistats.channel || '').replace(/&amp;/g, '&').replace(/;/g, ' ');
      pObj.ti = ctid;
      pObj.ns = !!mistats.noSlots;

      if (pObj.li)
      {
         try
         {
            ptid = (document.cookie || '').match(/mi_ptid=[^;]+/);
            ptid && (ptid = atob(decodeURIComponent(ptid[0].substr(8))));
         } catch (err)
         {
            ptid = null;
         }

         if ((ptid || '').indexOf('mi_as_') === 0 && window.s && window.s.eVar4)
         {
            pObj.pt = ptid;
            pObj.np = (window.s.eVar4 || '').replace(/&amp;/g, '&').replace(/;/g, ' ');
         }
      }

      mistats.adobe.setCookie('mi_ptid', btoa(ctid), 1800000);

      qs = btoa(JSON.stringify(pObj)).split('');
      qs.reverse();

      req = new Image();
      req.width = 1;
      req.height = 1;
      req.src = (mistats.bizunit === 'DUR' ? '//www.newsobserver.com' : '') + '/static/img/placeholder/FREE.gif?mias=' + qs.join('');
   };

   function done(pEvent)
   {
      var ac;
      var ad;
      var gaf;
      var gpt;
      var i;
      var objs;

      if (ready)
         return;

      if (pEvent && pEvent.type === 'load' && window.googletag && window.googletag.pubads)
      {
         timer = setTimeout(function ()
         {
            done({type: 'timeout'});
         }, 30000);
         return console.log('mistats_as timer started');
      }

      ready = true;

      pEvent && pEvent.type === 'timeout' && (console.log('mistats_as timeout'));
      console.log('mistats_as ready');

      if (count === 0)
      {
         objs = document.getElementsByTagName('script');
         for (i = 0; !gpt && i < objs.length; i++)
            (objs[i].src || '').match(/\/gpt\.js/i) && (gpt = true);
         if (gpt)
         {
            if (!(window.googletag && window.googletag.pubads))
               mistats.noSlots = true;
            else
            {
               objs = document.getElementsByTagName('iframe');
               for (ac = 0, gaf = 0, i = 0; i < objs.length; i++)
                  if ((objs[i].id || '').match(/^google_ads_iframe_/))
                  {
                     gaf++;
                     try
                     {
                        objs[i].contentWindow.document.body.innerHTML && (ac++);
                     } catch (err)
                     {
                        ac++;
                     }
                  }
               (gaf === 0 || ac === 0) && (mistats.noSlots = true);
            }
         }
      }

      track({li: lineItems});

      if (mistats.noSlots)
         return mistats.adobe.setCookie('mi_nas', '1', 1800000);

      if (mistats.iframeTracker)
         for (ad in adlist)
            mistats.iframeTracker.start(adlist[ad].iframe, function (pIframe)
            {
               var obj;

               pIframe && pIframe.id && (obj = adlist[pIframe.id]);
               if (!obj)
                  return;

               obj.event.sourceAgnosticLineItemId && (track(
               {
                  v3: obj.event.slot && obj.event.slot.getSlotElementId ? obj.event.slot.getSlotElementId() : '',
                  v46: obj.event.sourceAgnosticLineItemId,
                  v47: obj.event.size && obj.event.size.join ? obj.event.size.join('x') : 'oop'
               }));

               mistats.iframeTracker.stop(pIframe);
            });
   };

   function slotRendered(pEvent)
   {
      var obj;

      pEvent && pEvent.sourceAgnosticLineItemId && (lineItems[lineItems.length] = pEvent.sourceAgnosticLineItemId);

      count++;
      count >= total && (done());

      try
      {
         obj = document.getElementById('google_ads_iframe_' + pEvent.slot.getSlotId().getId());
      } catch (err)
      {
      }

      obj && (adlist[obj.id] =
      {
         iframe: obj,
         event: pEvent
      });
   };

   function createTransactionId()
   {
      var mid;

      if (tid)
         return;

      mistats.visitor && mistats.visitor.getMarketingCloudVisitorID && (mid = mistats.visitor.getMarketingCloudVisitorID());
      tid = ['mi', 'as', (mistats.bizunit || '').toLowerCase(), (mid || Math.round(Math.random() * 1000000000)), Date.now()].join('_');
   };

   function getTransactionId()
   {
      !tid && (createTransactionId());
      return tid || '';
   };

   function init()
   {
      adlist = {};
      count = 0;
      lineItems = [];
      total = 0;

      mistats.adobe.addToQueue(createTransactionId);

      window.googletag = window.googletag || {};
      window.googletag.cmd = window.googletag.cmd || [];
      window.googletag.cmd.push(function ()
      {
         window.googletag.pubads().addEventListener('slotRequested', function ()
         {
            total++;
         });
         window.googletag.pubads().addEventListener('slotRenderEnded', slotRendered);
      });
      window.addEventListener('load', done, false);
   };

   this.getTransactionId = getTransactionId;
   init();
};

mistats.SubData = function ()
{
   var expires;
   var mppId;
   var now;
   var service;
   var status;
   var statuses;
   var table;
   var timer;
   var titles;
   var waiting;

   function formatDate(pDate)
   {
      var date;
      var tmp;

      pDate && (date = [pDate.getFullYear()]);
      if (isNaN(date[0]))
         return '';
      tmp = (parseInt(pDate.getMonth()) + 1) + '';
      tmp.length === 1 && (tmp = '0' + tmp);
      date[1] = tmp;
      tmp = parseInt(pDate.getMonth()) + '';
      tmp.length === 1 && (tmp = '0' + tmp);
      date[2] = tmp;

      return date.join('-');
   };

   function done()
   {
      timer && (clearTimeout(timer));
      console.log('mistats_subdata ready');
      waiting = false;
      mistats.windowEvent('mistats_subdata');
   };

   function parse(pObj)
   {
      var stale;
      var tmp;

      tmp = parseInt(pObj.st || 0) - 1;
      status = !isNaN(tmp) && statuses[tmp] ? statuses[tmp] : '';
      pObj.xp > 0 && pObj.xp <= now && !status && (status = 'Expired By Date');

      if (((pObj.xp <= now || status.match(/Expired|Pending|Failure Retry/)) && pObj.ts > now + 86400000) || pObj.ts > now + 604800000)
      {
         stale = true;
         getInfo();
      }

      try
      {
         service = atob(pObj.sv);
      } catch (err)
      {
         service = '';
      };
      expires = formatDate(new Date(pObj.xp));

      done();

      try
      {
         tmp = btoa(JSON.stringify(pObj));
      } catch (err)
      {
         tmp = null;
      }

      if (!tmp || stale)
         return;

      window.localStorage && (window.localStorage.setItem('mistats_mppinf', tmp));
      mistats.adobe.setCookie('mi_mppinf', tmp);
   };

   function callback(pObj)
   {
      var id;
      var idx;
      var obj;
      var rev;
      var svcs;
      var val;

      if (!(pObj && (pObj.table || pObj.titles)))
         return;

      !table && pObj.table && (table = pObj.table);
      !titles && pObj.titles && (titles = pObj.titles);

      if (!(table && titles))
         return;

      try
      {
         rev = titles.split('');
         rev.reverse();
         svcs = JSON.parse(atob(rev.join('')));
      } catch (err)
      {
         svcs = [];
      };

      id = parseInt(mppId);

      try
      {
         idx = id - parseInt(table.x, 16);
      } catch (err)
      {
      }

      if (!idx || isNaN(idx))
         return done();

      table.v && (val = table.v[idx]);

      if (!Array.isArray(val))
         return done();

      obj =
      {
         id: id,
         st: val[0] || 0,
         sv: '',
         xp: val[1] * 3600000,
         ts: now
      };

      try
      {
         svcs[val[2]] && (obj.sv = btoa(svcs[val[2]]));
      } catch (err)
      {
      }

      parse(obj);
   };

   function isWaiting()
   {
      return !!waiting;
   };

   function getExpires()
   {
      return expires;
   }

   function getService()
   {
      return service;
   };

   function getStatus()
   {
      return status;
   };

   function getInfo()
   {
      mistats.jsLoader(mistats.mediaHost + '/mistats/mccaud/table_' + Math.floor(mppId / 5000).toString(16) + '.js?cb=' + Math.round(Date.now() / 900000));
      mistats.jsLoader(mistats.mediaHost + '/mistats/mccaud/titles.js?cb=' + Math.round(Date.now() / 900000));
      timer = setTimeout(function ()
      {
         waiting === true && (done());
      }, 5000);

   };

   function init()
   {
      var mppInfo;

      expires = '';
      service = '';
      status = '';

      mppId = decodeURIComponent(document.cookie || '').match(/MPPAccountId=\d+/);
      !mppId && (mppId = decodeURIComponent(document.cookie || '').match(/mi_mppaid=\d+/));

      if (!mppId)
         return;

      statuses = JSON.parse(atob('WyJBY3RpdmUiLCJFeHBpcmVkIiwiUGVuZGluZyIsIkZhaWx1cmUgUmV0cnkiLCJDYW5jZWxsZWQgQnkgQXV0b3JlbmV3IiwiQ2FuY2VsbGVkIEJ5IFN1cHBvcnQiXQ=='));

      mppId = mppId[0].match(/\d+/)[0];
      mistats.adobe.setCookie('mi_mppaid', mppId);

      window.localStorage && (mppInfo = window.localStorage.getItem('mistats_mppinf'));

      if (!mppInfo)
      {
         mppInfo = decodeURIComponent(document.cookie || '').match(/mi_mppinf=[^;]+/);
         mppInfo && (mppInfo = mppInfo[0].substr(10));
      }

      if (mppInfo)
         try
         {
            mppInfo = JSON.parse(atob(mppInfo));
         } catch (infErr)
         {
            mppInfo = null;
         };

      now = Date.now();
      waiting = true;

      if (mppId == 5 && mppInfo && mppInfo.id && mppInfo.id != 5)
      {
         mppId = mppInfo.id;
         mistats.adobe.setCookie('mi_mppaid', mppId);
      }

      if (mppInfo && mppInfo.id == mppId)
         parse(mppInfo);
      else
         getInfo();
   };

   init();

   this.callback   = callback;
   this.getExpires = getExpires;
   this.getService = getService;
   this.getStatus  = getStatus;
   this.isWaiting  = isWaiting;
};

mistats.adobe.validHost && (mistats.subData = mistats.subData || (new mistats.SubData()));

if ((document.cookie || '').match(/mi_nas=1/))
   mistats.noSlots = true;
else if (mistats.isEscenic && !(location.pathname || '').match(/\/video-embed/))
   mistats.adSlots = mistats.adSlots || (new mistats.AdSlots());

if (!mistats.micbLoaded)
{
   mistats.micbLoaded = true;
   mistats.windowEvent('mi_micb_loaded');
}

if ((location.pathname).match(/\/misites\/all\/amp\.html/) && !(mistats.account || '').match(/mccltAllMcClatchy/))
   mistats.account += ',mccltAllMcClatchy';

mistats.bizunit === 'WIC' && (mistats.jsLoader('https://sdk.amazonaws.com/js/aws-sdk-2.283.1.min.js', false, function ()
{
   if (!(typeof AWS !== 'undefined' && AWS.config && AWS.CognitoIdentityCredentials && AWS.Kinesis))
      return;

   AWS.config.region = 'us-east-1';
   AWS.config.credentials = new AWS.CognitoIdentityCredentials(
   {
      IdentityPoolId: 'us-east-1:768a708d-320b-4e99-9533-e4011ac08b34'
   });

   AWS.config.credentials.get(function (pError)
   {
      if (pError)
         return console.log('mistats kinesis_config_error');

      mistats.kinesis = new AWS.Kinesis(
      {
         apiVersion: '2013-12-02'
      });
   });
}));

