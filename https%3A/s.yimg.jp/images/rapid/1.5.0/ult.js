if(typeof YAHOO=="undefined"||!YAHOO){var YAHOO = {};}
YAHOO.i13n=YAHOO.i13n||{};
YAHOO.i13n.Beaconer = function(config){
   function _generateSid(){ 
	   var s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890", r = "", i=0;
	   for(; i<12; i++){
		r += s.charAt(Math.floor(Math.random() * 62));
	   }
	   return r; 
   }
   function _isArray(o){
        return Object.prototype.toString.apply(o) === '[object Array]';
   }

   function _isObject(o){
	return (o && (typeof o === 'object')) || false;
   }

   //disabling for now
   //var RAPID_ENABLED = (config.use_rapid === false ? false : true);
   var RAPID_ENABLED = true;
 
   var AUTO_POS = (config.use_auto_pos === false ? false : true);

   var CTRL_A = "%01", CTRL_B = "%02", CTRL_D = "%04", CTRL_E = "%05", CTRL_F = "%06", CTRL_G = "%07", CTRL_H = "%08";

   var _sid = config.sid || _generateSid(),
       _version = "1.5.0",
       enc = encodeURIComponent||escape,
       HTTP = 'http://',
       HTTPS = 'https://';

   var clref = function(r){
	if(r.indexOf(HTTP) !== 0 && r.indexOf(HTTPS) !== 0){return "";}
	return r; 
   };

   function _merge(dest, src){
	if(!dest || !src){
	   return dest;
	}
	var newobj = dest;
	for(var i in src){
	   if(src.hasOwnProperty(i)){
	      newobj[i] = src[i];
	   }
	}
	return newobj;
   }

   var referrer_length = 0, referrer = '';
   if(RAPID_ENABLED && document && document.referrer){
	referrer = document.referrer||'';
        referrer = enc(clref(referrer));
        referrer_length = referrer.length;
   }

   config = config||{};

   var MAX_BS = 2000;
   if(config.max_beacon_size){
	var size = config.max_beacon_size;
	//we'll modify these later
	if(size > MAX_BS && size <= 8000){
	    MAX_BS = size;
	}
   }

   var BEACON_SERVER = (config.beacon_server || 'ybx.yahoo.co.jp') + '/',
       pp = {},
       link_data = [],
       raw_link_data = [],
       region = config.region || '',
       USE_HTTPS = (config.https ? true : false),
       regions = {aa:1,eu:1,la:1},
       TIMEOUT = 1e4,
       UNDEF = 'UNDEF';

   var SPACEID = config.spaceid||'0';
   SPACEID = SPACEID.toString().replace(/\s+/g, '');
   SPACEID = SPACEID.replace(/^P#/ig, '');


   if(region !== '' && regions[region]){
	BEACON_SERVER = region + "." + BEACON_SERVER;
   }
   BEACON_SERVER = (USE_HTTPS ? HTTPS : HTTP) + BEACON_SERVER;


   var dummy_cb = function(){
   }; 
  
/* Remove the protocol from a uri */
   function rmProto(u){
	   if(!u){return '';}
	   if(u.substr(0,7) === HTTP){
		return u.substr(7, u.length); 
	   }
	   if(u.substr(0,8) === HTTPS){
		return u.substr(8, u.length); 
	   }
	   return u; 
   }

   function _addIfNotNull(obj, key, value){
      if(key && value !== null && value !== undefined){
         value = value.toString();
	 obj[key] = value;
      }
   }

    function _hasCC(s){
	for(var i=0, l = s.length; i<l; i++){if(s.charCodeAt(i)<0x20){return true;}}
	return false;
   }


    function serializeHash(o){
	   if(!o){return '';}
	   var rv = []; 
	   for(var i in o){
		if(o.hasOwnProperty(i)){
		   var k = i, v = o[i];
		   if(k === null || v === null || v === undefined){
			continue;
		   }
		   /***
		    * toString needed since some v vals can be numbers
		    ***/ 
		   k = k.toString();
		   v = v.toString();
		   if(v && k.length <= 8 && v.length <= 300 && !_hasCC(k) && !_hasCC(v)){
			var encoded = '';
			try{
		           encoded = enc(k + "\x03" + v);
			}
			catch(e){
			   encoded = '_ERR_ENCODE_';
			}
			rv[rv.length] = encoded;
		   }	
		}
	   }
	   return rv.join(CTRL_D); 
    }



   function sr(){
	return (screen ? screen.width+','+screen.height : '');
   }

   function _beacon(url){
	   var i = new Image();
	   i.onload = i.onerror = i.onabort = dummy_cb;
	   i.src = url;
	   setTimeout(function(){
	      i = null;
	   }, TIMEOUT);
   }

   function _initPP(){
      pp = {};
      if(RAPID_ENABLED){
         pp = {A_sid:_sid, _w:rmProto(window.location.href)};
         _addIfNotNull(pp, 'A_pn', config.page_name);
         _addIfNotNull(pp, 'A_id', config.page_id);
         _addIfNotNull(pp, 'A_pt', config.page_type);
      }
   }

   _initPP();
   if(config.keys){
      pp = _merge(pp, config.keys);
   }

   function _setPP(keys){
      _initPP();
      pp = _merge(pp, keys);
   }

   function _getPP(extra_params){
	var to_hash = null;
	if(extra_params && _isObject(extra_params)){
	   to_hash = _merge(extra_params, pp); 
	}
	else{
	   to_hash = pp;
	}
	var rv = serializeHash(to_hash);
	if(RAPID_ENABLED){
           return _version + CTRL_E + rv;
	}
	return rv;
   }

   function _prepareBeacon(url){
	if(RAPID_ENABLED){
	   url += "&_R=" + referrer;
	}
	return url + "&t=" + Math.floor(new Date().valueOf() / 1000);
   }

   function _setLD(data){
	if(!_isArray(data)){
	   data = [data];
	}
	var cur_lp = '';
	var BS_LENGTH = BEACON_SERVER.length;
	var tmp_pp_length = _getPP().length;
	for(var i = 0, len = data.length; i < len; i++){
	   var cur = data[i];
	   var mod = cur.mod;
	   var mod_name = '';
	   var mod_params = null;

	   //if mod is an object, then mod.name has the module name and mod.params is an object of key-value pairs
	   var use_module_hash = false;
	   if(_isObject(mod)){
		use_module_hash = true;
		mod_name = mod.name;
		mod_params = mod.params||{};
	   }
	   else{
		mod_name = mod;
	   }
	   if(mod_name === null || mod_name === undefined || mod_name === ''){
		mod_name = UNDEF;
	   }

	   cur_lp += "m" + CTRL_F + mod_name + (use_module_hash ? (CTRL_G + serializeHash(mod_params)) : '') + CTRL_A + (AUTO_POS ? "l" : "L") + CTRL_F;
	   var links = cur.links;
	   for(var j = 0, jlen = links.length; j < jlen; j++){
		var link = links[j];
		var use_link_hash = false;
		var link_name = '';

		if(_isObject(link)){
		   use_link_hash = true;
		   link_name = link.name;
		   link.params = link.params||{};
		   if(AUTO_POS){
			delete link.params['_p'];
		   }
		}
		else{
		   link_name = link;
		}
		if(link_name === null || link_name === undefined || link_name === ''){
		   link_name = UNDEF;
		}
		if(link_name.length > 300){continue;}
		link_name = enc(link_name);
		// b? or p? = 2 bytes
		// &_L= = 4 bytes
		// &t=1246942972 13 bytes
		// &_R=<refrrer> = 4 bytes + referrer length
		// other control delims = 4 bytes
		// s=<spaceid> = 2 bytes + spaceid length
		// ctrl-b = 3 bytes
		var cur_length = BS_LENGTH + referrer_length + cur_lp.length + link_name.length + tmp_pp_length + 32;

	 	var serialized_link_params = serializeHash(link.params);
		//check for added stuff if we have module params, namely the link params and extra ctrl-G
		if(use_link_hash){
		   cur_length += 3 + serialized_link_params.length;
		}

		if(cur_length < MAX_BS){
		   cur_lp += (j > 0 ? CTRL_B : "") + link_name + (use_link_hash ? (CTRL_G + serialized_link_params) : '');
		}
		else{
		   link_data.push(cur_lp);
		   if(AUTO_POS){
		      link.params._p = (j+1);
		   }
		   serialized_link_params = serializeHash(link.params);
		   cur_lp = ["m",CTRL_F,mod_name, (use_module_hash ? (CTRL_G + serializeHash(mod_params)) : ''), CTRL_A,(AUTO_POS ? "l" : "L"),CTRL_F,link_name, (use_link_hash ? CTRL_G + serialized_link_params : '')].join('');
		}
	   }
	   //per-module delimiter is CTRL-H
	   if(i+1 < len){
		cur_lp += CTRL_H;
	   }
	}
	link_data.push(cur_lp);
   }

   if(config.link_data){
      var ld = config.link_data;
      raw_link_data = _isArray(ld) ? ld : [ld];
      _setLD(ld);
   }

   return {
	MODULE_NAME:'sec',
	LINK_ATTR:'slk',
	POSITION:'_p',
	//send 1 or more urls out for beaconing
	//url can be a single string or an array of strings (urls)
	beacon:function(url){
	   if(_isArray(url)){
		for(var i = 0, len = url.length; i < len; i++){
		   _beacon(_prepareBeacon(url[i]));
		}
	   }
	   else{
		_beacon(_prepareBeacon(url));
	   }
	},
	setPageParams:function(page_params){
	   _setPP(page_params);
	},
	setLinkData:function(ld){
	   link_data = [];
	   _setLD(ld);
	},

/*
   var link_data = [{mod:'my module', links:['foolink', 'barlink']}];
-----------------------------------------------------------------------
   var link_data = [
   {
	mod:{name:'my module', params:{mp1:'foo'}},
	links:[
	   {link:'barlink', params:{lp:'foo', lp2:'bar'}   }
	]
   }
   ];
*/
	//this is overloaded - mod can be an object (non-rapid case)
	//or it can be a string where we also extract the link position for you
	getClickBeacon:function(mod, slk, pos){
	   var click_params = null, using_object = false;
	   if(pos === null || pos === undefined){
		pos = -1;
	   }
           if(_isObject(mod)){
		click_params = mod;
		using_object = true;
	   }
	   else
	   if(AUTO_POS &&  (pos < 0) && raw_link_data.length > 0 && mod && slk){
		for(var i = 0, len = raw_link_data.length; i < len; i++){
		   var cur_obj = raw_link_data[i];
		   var cur_mod_name = '';
		   if(_isObject(cur_obj.mod)){
			cur_mod_name = cur_obj.mod.name;
		   }
		   else{
			cur_mod_name = cur_obj.mod;
		   }

		   //find the module in our data
		   if(mod !== cur_mod_name){
			continue;
		   }

		   var links = cur_obj.links;
		   for(var j = 0, jlen = links.length; j < jlen; j++){
			var cur_link = links[j], the_link = '';
			if(_isObject(cur_link)){
			   the_link = cur_link.name;
			}
			else{
			   the_link = cur_link;
			}
			if(slk === the_link){
			   pos = (j+1);
			   break;
			}
		   }
		   break;
		}
	   }
	   if(!using_object){
	      click_params = {sec:mod, slk:slk, _p:pos, A_sr:sr()};
	   }
	   var args = [];
	   args.push("s=" + SPACEID);
	   args.push("_K=" + _getPP());
	   args.push("_C=" + serializeHash(click_params));
	   return BEACON_SERVER + "c?" + args.join('&');
	},
	doClickBeacon:function(mod, slk, pos){
	    this.beacon(this.getClickBeacon(mod, slk, pos));
	},
	//extra_params is extra pp we might want to push in temporarily
	//just for this beacon.  An example is event beacon params
	//this will not overwrite the current page params. 
	//extra_params is not exposed in the api doc since it's just 
	//used internally by getEventBeacon
	getViewBeacon:function(is_pv, extra_params){
	   extra_params = extra_params || {};
	   var handler = (is_pv ? 'b' : 'p');
	   var args = [];
	   args.push("s=" + SPACEID);
	   args.push("_P=" + _getPP(extra_params));
	   if(link_data.length > 0){
	   	var rv = []; 
		for(var i = 0, len = link_data.length; i < len; i++){
	   	   rv.push(BEACON_SERVER + handler + "?" + args.join('&') + "&_L=" + link_data[i]); 
		}
		return rv; 
	   }
	   return BEACON_SERVER + handler + "?" + args.join('&') ;
	},
        doViewBeacon:function(is_pv, extra_params){
	   this.beacon(this.getViewBeacon(is_pv, extra_params));
	},
	getEventBeacon:function(event_name, params){
	   params._E = event_name;
	   return this.getViewBeacon(0, params);
	},
	doEventBeacon:function(event_name, params){
	   this.beacon(this.getEventBeacon(event_name, params));
	}
   };
};
