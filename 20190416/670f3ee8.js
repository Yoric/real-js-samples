var ColPickerBeh,FavRequest;(function(n){n[n.All=0]="All";n[n.Data=1]="Data"})(ColPickerBeh||(ColPickerBeh={})),function(n){function t(n,t,i,r,u){if(u===void 0&&(u=!0),n){n="https://"+location.host+n+t;typeof addCommonPersistedParams=="function"&&(n=addCommonPersistedParams(n));typeof MMTestUtils!="undefined"&&(n=MMTestUtils.atb(n,t));n=d(n);i=i===null?"":i;var e=encodeURIComponent(JSON.stringify(i)),f=sj_gx();f.open("POST",n,!0);f.withCredentials=!0;f.setRequestHeader("Content-type","application/x-www-form-urlencoded");f.onreadystatechange=function(){if(f.readyState==4&&f.status==200&&r)if(u){var n=/^\{.*\}/.exec(f.response||f.responseText);r(n&&n.length?JSON.parse(n[0]):"")}else r(f.response||f.responseText)};f.send(e)}}function f(n,r){t(i(),"changetitle",n,r)}function e(n,r){t(i(),"addItems",n,r)}function o(n,r){t(i(),"deleteItems",n,r)}function s(n,r){t(i(),"deletecollection",n,r)}function h(n,r){t(i(),"useForRecommendations",n,r)}function c(n,r){t(i(),"moveItems",n,r)}function l(n,r){t(i(),"copyItems",n,r)}function a(n,r){t(i(),"getStatus",n,r)}function v(n,r){t(i(),"writePreferences",n,r)}function y(n,i){var r="",f;n&&(r="beh="+ColPickerBeh[n]);f=u();f&&t(u()+r,"",null,i,!1)}function p(n,r){t(i(),"shareCollection",n,r)}function w(n,r){t(i(),"unshareCollection",n,r)}function b(n,r){t(i(),"createCollection",n,r)}function k(n){r=n}function d(n){return typeof sj_cook!="undefined"?n+"&sid="+(_G.SID||sj_cook.get("_SS","SID")):n}function i(){return r||_w.location.search.toLowerCase().indexOf("type=images")!=-1?"/images/favorites/manage?action=":r==!1||_w.location.search.toLowerCase().indexOf("type=videos")!=-1?"/videos/favorites/manage?action=":null}function u(){var n=_w.location.toString().toLowerCase();return n.indexOf("type=images")!=-1||n.indexOf("/images/")!=-1||n.indexOf("/discover/")!=-1?"/images/favorites/collectionpicker?":n.indexOf("type=videos")!=-1||n.indexOf("/videos/")!=-1?"/videos/favorites/collectionpicker?":n.indexOf("saves/share")!=-1?"/images/favorites/collectionpicker?":null}var r=!0;n.changeTitle=f;n.addItem=e;n.deleteItems=o;n.deleteCollection=s;n.useForRec=h;n.moveItems=c;n.copyItems=l;n.getStatus=a;n.writePref=v;n.getCollectionPicker=y;n.shareCollection=p;n.unshareCollection=w;n.createCollection=b;n.setRequestType=k}(FavRequest||(FavRequest={}))