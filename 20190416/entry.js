var TaggyadEntry = function(_cnf) {
	var cnf = _cnf || {};
	if (!cnf.location) cnf.location={};
	if (!cnf.query) cnf.query={};
	if (!cnf.rt) cnf.rt={item:[]};
	this.checkUid = cnf.checkUid || true; // Specify whether to check uid. If true, please note the 'query.type' must be jsonp.
	this.safari = cnf.safari || false; // Specifies whether to track the Safari. If true, please note the use of an iframe instead of javascript
	this.mode = cnf.mode || 0; // Specify response mode.  (0:none, 1:id, 2:all)
	this.encode = cnf.encode; // Specify encode. If not specified, the automatic detection from page encoding. Usually do not specify this.
	this.location = {
			protocol  : cnf.location.protocol, // If not specified, the automatic detection from page url. Usually do not specify this.
			subdomain : cnf.location.subdomain || cnf.subdomain || cnf.cid, // Specify sub-domain. (This is required only)
			domain    : cnf.location.domain || 'taggyad.jp', // Specify domain. Usually a fixed value.
			path      : cnf.location.path || 'entry', // Specify path. Usually a fixed value.
			realtime_path : cnf.location.realtime_path || 'enqueue'}; // Specify path. Usually a fixed value.
	this.query = {
			href     : cnf.query.href, // Specify href value.
			sid      : cnf.query.sid, // Specify sid value.
			cid      : cnf.query.cid, // Specify cid value.
			tag      : cnf.query.tag, // Specify tag value.
			type     : cnf.query.type || 'json', // Specify the type of response from the following. (img, text, json, html)
			callback : cnf.query.callback, // If the JSON response type, then specify the name of the callback function.
			realtime : cnf.query.realtime || false,
			id       : cnf.query.id,
			cat      : cnf.query.cat
			};
	this.blade = (!cnf.blade)? false: {
			account_id : cnf.blade.account_id
	};
	this.bypass = (!cnf.bypass)? false: {
			p : cnf.bypass.p,
			group_id : cnf.bypass.group_id
	};
	this.logicad = (!cnf.logicad)? false: {
		smnAdvertiserId : cnf.logicad.smnAdvertiserId
	};
	this.dcap = (!cnf.dcap)? false: {
		sgid : cnf.dcap.sgid
	};
	this.nend = (!cnf.nend)? false: cnf.nend;
	this.lamp = (!cnf.lamp)? false: {
		rtid : cnf.lamp.rtid,
		j : cnf.lamp.j
	};
	this.xrst = (!cnf.xrst)? false: {
		_aid : cnf.xrst._aid
	};
	this.doubleclick = (!cnf.doubleclick)? false: cnf.doubleclick;

	//set false because TaggyDSP will stop 2017/06/01
	//this.taggydsp = (!cnf.taggydsp)? false: cnf.taggydsp;
	this.taggydsp = false;

	//非同期 i-mobile タグは組み込まない
	//2つ以上のi-mobileタグがあると正常動作しないため

	var test = false; // Whether the test.
	try {
		var domain = location.host;
		if (domain && domain.match(/taggyad.jp/)) {
			test = true;
		}
	} catch (e) {
		test = false;
	}
	var url = location.href;
	if (this.query.href) {
		url = this.query.href;
	}

	this.marking = true;
	if (cnf.regex && !test) {
		var pattern = new RegExp(cnf.regex);
		this.marking = pattern.test(url);
	}
	this.exclusion = false;
	if (cnf.exc_regex && !test) {
		var pattern = new RegExp(cnf.exc_regex);
		this.exclusion = pattern.test(url);
	}
	this.rt = {
		url : cnf.rt.url,
		sid : cnf.rt.sid || cnf.query.sid,
		cid : cnf.rt.cid || cnf.query.cid,
		_event : cnf.rt._event,
		type : cnf.rt.item[0],
		id : cnf.rt.item[1]};
	this.uidname = cnf.uidname || '__taggyad_uid';
};

TaggyadEntry.prototype.add_script_tag = function(tag, type, charset, src, content, klass, attributes){
	try{
		var obj = null;
		if(tag.toLowerCase() == 'script'){
			obj = document.createElement(tag);
			if(type){
				obj.type = type; 
			}
			if(charset){
				obj.charset = charset; 
			}
			if(src){
				obj.src = src;
			}
			if(content){
				try{ obj.appendChild(document.createTextNode(content)); }catch(e){};
			}
			if(klass){
				obj.className = klass; 
			}
			obj.async = true;
		}else if(tag.toLowerCase() == 'img'){
			obj = document.createElement(tag);
			obj.src = src;
			obj.height = "1";
			obj.width = "1";
			obj.border = "0";
			obj.style.display = "none";
		}else if(tag.toLowerCase() == 'iframe'){
			obj = document.createElement(tag);
			obj.src = src;
			obj.height = "1";
			obj.width = "1";
			obj.frameborder = "0";
			obj.style.display = "none";
		}
		if(obj){
			if ( !attributes ) {
				for ( var key in attributes ) {
					obj[key] = attributes[key];
				}
			}
			if ( tag.toLowerCase() == 'script' ) {
				var s0 = document.getElementsByTagName('script')[0];
				s0.parentNode.insertBefore(obj, s0);
			} else {
				document.body.appendChild(obj);
			}
		}
	}catch(e){}
};

TaggyadEntry.prototype.entry = function() {
try{
	if (this.checkUid) {
		if (this.mode < 1) {
			this.mode = 1;
		}
		this.query.type = 'json';
		if (this.query.callback) {
			this.query.callback_org = this.query.callback;
		}
		this.query.callback = this.checkUidCallbackFunction();
	}

	if (this.marking) {
		var tag = null;
		if (navigator.userAgent.indexOf('Safari') >= 0 && navigator.userAgent.indexOf('Chrome') < 0 && this.safari) {
			this.query.type = 'html';
			if (navigator.userAgent.indexOf('Mac OS') != -1) {
				this.location.path = 'junction';
			}
			this.add_script_tag('iframe', 'text/javascript', this.getEncode(), this.getEntryUrl() + this.getEntryQuery(), null, null);
		}else{
			this.add_script_tag('script', 'text/javascript', this.getEncode(), this.getEntryUrl() + this.getEntryQuery(), null, null);
		}

		try {
			if (this.query.realtime && this.query.id) {
				this.add_script_tag('script','text/javascript', this.getEncode(), this.getRealtimeUrl() + this.getRealtimeQuery(), null, null);
			}
		} catch (e) {}
	}

	// If checkUid is false, call dsp tags.
	// If checkUid is true, the callDspTag is called in callback function.
	if (!this.checkUid) {
		this.callDspTag();
	}
	return this;
}catch(e){}
};
TaggyadEntry.prototype.getEntryUrl = function() {
	return this.getProtocol() + '//'
		+ this.location.subdomain + '.'
		+ this.location.domain + '/'
		+ this.location.path;
};
TaggyadEntry.prototype.getEntryQuery = function() {
	var query = '?';

	if (this.query.href)
		query += 'url=' + encodeURIComponent(this.query.href);
	else
		query += 'url=' + encodeURIComponent(location.href);
	if (this.query.sid)
		query += '&sid=' + encodeURIComponent(this.query.sid);
	if (this.query.cid)
		query += '&cid=' + encodeURIComponent(this.query.cid);
	if (this.query.type)
		query += '&type=' + encodeURIComponent(this.query.type);
	if (this.query.tag)
		query += '&tag=' + encodeURIComponent(this.query.tag);
	if (this.query.cat)
		query += '&cat=' + encodeURIComponent(this.query.cat);
	if (this.getEncode())
		query += '&encode=' + encodeURIComponent(this.getEncode());
	if (this.query.callback)
		query += '&callback=' + encodeURIComponent(this.query.callback);
	query += '&mode=' + encodeURIComponent(this.mode);
	query += '&ref=' + encodeURIComponent(document.referrer);
	query += '&_rand=' + new Date().getTime();
	return query;
};
TaggyadEntry.prototype.getProtocol = function() {
	return this.location.protocol || document.location.protocol;
};
TaggyadEntry.prototype.getEncode = function() {
	if (this.encode)
		return this.encode;
	if(document.all)
		return document.charset; // For IE
	return document.characterSet;
};
TaggyadEntry.prototype.getRealtimeUrl = function() {
	return this.getProtocol() + '//'
		+ this.location.subdomain + '.'
		+ this.location.domain + '/'
		+ this.location.realtime_path;
};
TaggyadEntry.prototype.getRealtimeQuery = function() {
	var query = '?';

	if (this.query.sid)
		query += '&sid=' + encodeURIComponent(this.query.sid);
	if (this.query.cid)
		query += '&cid=' + encodeURIComponent(this.query.cid);
	if (this.query.type)
		query += '&type=' + encodeURIComponent(this.query.type);
	if (this.getEncode())
		query += '&encode=' + encodeURIComponent(this.getEncode());
	if (this.query.id)
		query += '&id=' + encodeURIComponent(this.query.id);
	if (this.query.cat)
		query += '&cat=' + encodeURIComponent(this.query.cat);
	query += '&mode=' + encodeURIComponent(this.mode);
	query += '&_rand=' + new Date().getTime();
	return query;
};

TaggyadEntry.prototype.bladeEntry = function() {
	return this;
};
TaggyadEntry.prototype._bladeEntry = function() {
try{
	if ((this.marking || this.exclusion) && this.blade.account_id) {
		var content = "var microad_blade_jp = microad_blade_jp || { 'params' : new Array(), 'complete_map' : new Object() };"
			+ "(function() {"
			+ "var param = {'co_account_id' : '" + this.blade.account_id + "', 'group_id' : '', 'country_id' : '1', 'ver' : '2.1.0'};"
			+ "microad_blade_jp.params.push(param);"
			+ ""
			+ "var src = (location.protocol == 'https:')"
			+ "? 'https://d-track.send.microad.jp/js/blade_track_jp.js' : 'http://d-cache.microad.jp/js/blade_track_jp.js';"
			+ ""
			+ "var bs = document.createElement('sc" + "ri" + "pt');"
			+ "bs.type = 'text/ja" + "va" + "sc" + "ri" + "pt'; bs.async = true;"
			+ "bs.charset = 'utf-8'; bs.src = src;"
			+ ""
			+ "var s = document.getElementsByTagName('sc" + "ri" + "pt')[0];"
			+ "s.parentNode.insertBefore(bs, s);"
			+ "})();";
		this.add_script_tag('script', 'text/javascript', null, null, content, "microad_blade_track");
	}
	return this;
}catch(e){}
};
TaggyadEntry.prototype.genieeEntry = function() {
	return this;
};
TaggyadEntry.prototype._genieeEntry = function() {
	return this;
};
TaggyadEntry.prototype.bypassEntry = function() {
	return this;
};
TaggyadEntry.prototype._bypassEntry = function() {
	try {
		if (this.marking && this.bypass.p) {
			var pixurl = this.getProtocol() + '//as.a.bypass.jp/pix?p=' + this.bypass.p;
			this.add_script_tag('script', 'text/javascript', null, pixurl, null, null);
		}
		if (this.exclusion && this.bypass.p) {
			var unpixurl = this.getProtocol() + '//as.a.bypass.jp/unpix?p=' + this.bypass.p;
			this.add_script_tag('script', 'text/javascript', null, unpixurl, null, null);
		}
		if ((this.marking || this.exclusion) && this.bypass.group_id) {
			var mkurl = this.getProtocol() + '//bypass.ad-stir.com/mk?group_id=' + this.bypass.group_id;
			this.add_script_tag('script', 'text/javascript', null, mkurl, null, null);
		}
	} catch (e) {
	}
	return this;
};
TaggyadEntry.prototype._ignitionOneEntry = function() {
	return this;
};
TaggyadEntry.prototype._ignitionOne2Entry = function() {
	return this;
};
TaggyadEntry.prototype.logicadEntry = function() {
	return this;
};
TaggyadEntry.prototype._logicadEntry = function() {
	try {
		if (this.marking && this.logicad.smnAdvertiserId) {
			//var url = "//tag.ladsp.com/pixel?advertiser_id=" + this.logicad.smnAdvertiserId + "&referer=" + encodeURIComponent(document.referrer.toString());
			//this.add_script_tag('script', 'text/javascript', null, url, null, null);
			var url = "//tag.ladsp.com/pixel/nm?advertiser_id=" + this.logicad.smnAdvertiserId;
			this.add_script_tag('img', null, null, url, null, null);
		}
	} catch (e) {}
	return this;
};
TaggyadEntry.prototype._dcapEntry = function() {
	try {
		if (this.marking && this.dcap.sgid) {
			var url = this.getProtocol() + (this.getProtocol() == 'https:') ? '//ssl.socdm.com/s/so_sg.js?sgid=' : '//i.socdm.com/s/so_sg.js?sgid=' + this.dcap.sgid + '&t=1';
			this.add_script_tag('script', 'text/javascript', null, url, null, null);
		}
	} catch (e) {
	}
	return this;
};
TaggyadEntry.prototype._nendEntry = function() {
	return this;
};
TaggyadEntry.prototype._lampEntry = function() {
	try {
		if (this.marking && this.lamp.rtid) {
			var url = (location.protocol === 'https:' ? 'https' : 'http') + '://rt.gsspat.jp/g?rtid=' + this.lamp.rtid + '&j=' + this.lamp.j;
			this.add_script_tag('script', 'text/javascript', null, url, null, null);
		}
	} catch (e) {
	}
	return this;
};
TaggyadEntry.prototype._xrstEntry = function() {
	try {
		if (this.marking && this.xrst._aid) {
			var url = '//dex.advg.jp/dx/p/us0?_aid=' + this.xrst._aid;
			attributes = {'language': 'javascript', 'defer': true};
			this.add_script_tag('script', 'text/javascript', null, url, null, null);
		}
	} catch (e) {
	}
	return this;
};
TaggyadEntry.prototype._doubleclickEntry = function() {
	if (this.marking && this.doubleclick) {
		for (var i in this.doubleclick) {
			var pattern = new RegExp(this.doubleclick[i].regex);
			if (pattern.test(location.href)) {
				var axel = Math.random() + "";
				var a = axel * 10000000000000;
				var url ='https://' + this.doubleclick[i].dbm_id + '.fls.doubleclick.net/activityi;src=' + this.doubleclick[i].dbm_id + ';type=invmedia;cat=' + this.doubleclick[i].track_cat + ';ord=' + a + '?';
				this.add_script_tag('iframe', null, null, url, null, null);
			}
		}
	}
	return this;
};
TaggyadEntry.prototype._taggydspEntry = function() {
	try {
		if (this.marking && this.taggydsp.adv) {
			if ( this.taggydsp.adv instanceof Array ) {
				for ( var i = 0; i < this.taggydsp.adv.length; i++ ) {
					var url = "//mrk01.dsp.taggyad.jp/js/entry.js?adv=" + this.taggydsp.adv[i];
					this.add_script_tag('script', 'text/javascript', null, url, null, null);
				}
			} else {
				var url = "//mrk01.dsp.taggyad.jp/js/entry.js?adv=" + this.taggydsp.adv;
				this.add_script_tag('script', 'text/javascript', null, url, null, null);
			}
		}
	} catch (e) {
	}
	return this;
};
TaggyadEntry.prototype._turnEntry = function() {
	try {
		if (this.marking && this.turn.b2) {
			var content = 'turn_client_track_id="";';
			this.add_script_tag('script', 'text/javascript', null, null, content, null, {"async": false});
			var url = "https://r.turn.com/server/beacon_call.js?b2=" + this.turn.b2;
			this.add_script_tag('script', 'text/javascript', null, url, null, null, {"async": false});
		}
	} catch (e) {
	}
	return this;
};
TaggyadEntry.prototype.reflect = function() {
	if (this.marking) {
		var query = '?';
		if (this.rt.sid && this.rt.cid) {
			query += 'sid=' + this.rt.sid;
			query += '&cid=' + this.rt.cid;
		} else {
			return this;
		}
		if (this.rt.type) {
			query += '&type=' + this.rt.type;
		}
		if (this.rt.id) {
			query += '&id=' + this.rt.id;
		}
		if (this.rt._event) {
			query += '&_event=' + this.rt._event;
		}
		query += '&_ts=' + new Date().getTime();
		var url = this.rt.url + query;
		this.add_script_tag('script', 'text/javascript', null, url, null, null);
	}
	return this;
};
TaggyadEntry.prototype.cbSyncUid = function(o) {
	if (o && o.uid) {
		var now = new Date().getTime();
		var expiry = new Date(now + (90 * 86400 * 1000));
		document.cookie = this.uidname + "=" + o.uid + "; domain = ." + document.domain + "; path=/; expires=" + expiry.toGMTString() + ";";
	}
};

TaggyadEntry.isSp = function(regex) {
	if (!regex) {
		regex = '(Android|iPhone|iPad|iPod)';
	}
	var regexp = new RegExp(regex);
	return regexp.test(navigator.userAgent);
};

TaggyadEntry.isPc = function(regex) {
	if (!regex) {
		return !this.isSp(regex);
	}
	var regexp = new RegExp(regex);
	return regexp.test(navigator.userAgent);
};

TaggyadEntry.prototype.callDspTag = function() {
	if (this.blade) {
		this._bladeEntry();
	}
	if (this.bypass) {
		this._bypassEntry();
	}
	if (this.logicad) {
		this._logicadEntry();
	}
	if (this.dcap) {
		this._dcapEntry();
	}
	if (this.nend) {
		this._nendEntry();
	}
	if (this.lamp) {
		this._lampEntry();
	}
	if (this.xrst) {
		this._xrstEntry();
	}
	if (this.doubleclick) {
		this._doubleclickEntry();
	}
	if (this.taggydsp) {
		this._taggydspEntry();
	}
	if (this.turn) {
		this._turnEntry();
	}
};

TaggyadEntry.prototype.checkUidCallbackFunction = function() {
	var me = this;
	if (typeof this.checkUidCallbackFunctionCounter == 'undefined') {
		this.checkUidCallbackFunctionCounter = 0;
	}

	// Build callback function name.
	var name = '___TaggyadEntry' + '_' + (Math.floor(Math.random() * 10000)) + '_' + this.checkUidCallbackFunctionCounter;

	// Is exists same name object ?
	if ( typeof window[ name ]  == 'undefined' ) {
		// Define callback function to check uid.
		window[ name ] = function(res) {
			if (me.query.callback_org) {
				window[ me.query.callback_org ](res);
			}
			// Check to exists uid in jsonp response.
			if (res && res.uid) {
				var uid = res.uid;
				if (uid != '' && uid != '-') {
					me.callDspTag();
				}
			}
		}
		return name;

	// One more time ...
	} else {
		if (this.checkUidCallbackFunctionCounter < 3) {
			this.checkUidCallbackFunctionCounter++;
			return this.checkUidCallbackFunction();
		}
		// Fatal Case ...
		return;
	}
};
