﻿define("sjs/matrix/ad/config",["sjs/base/core","sjs/util/url","sjs/data/guid"],function(core,url,guid){var cannot={};var CONFIG={_db:{NAME:"config.passion",POSITION_ID_PREFIX:"beans_",COOKIE_ID_PREFIX:"beans_",PAGEID:undefined,CHANNELID:undefined,PAGEVIEWID:guid.create(),IP:url.query("ip"),SOIP:url.query("soip")||window["sohu_IP_Loc"],MAX_TURN:60,DEFAULT_TIMEOUT:1000,RSLN:window.screen.width+'*'+window.screen.height,SWF:core.sflash(),URL_DEFBEAN:"//images.sohu.com/bill/default/{{adps}}.html?pid={{itemspaceid}}",URL_ADSERVER:"//s.go.sohu.com/adgtr/",URL_ADSERVER_TEST:"//s.go.sohu.com/adgtr/?bucketid=2",URL_PV_STAT:["//i.go.sohu.com/count/v"],URL_AV_STAT:["//i.go.sohu.com/count/av"],URL_CLICK_STAT:["//i.go.sohu.com/count/c"],URL_ERROR_STAT:["//i.go.sohu.com/count/e"]},set:function(name,value,cannotCover){if(cannot[name]){throw'can NOT cover "'+name+'"!'}cannotCover&&(cannot[name]=true);this._db[name]=value;return value},get:function(name){return this._db[name]},del:function(name){var value=this._db[name];delete this._db[name];delete cannot[name];return value}};core.extend(CONFIG._db,core.using("config.passion"));return CONFIG});