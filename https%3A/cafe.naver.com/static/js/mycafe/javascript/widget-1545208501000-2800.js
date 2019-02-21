function setHeight(h){
//	debugg.log(h);
	
}



var widget = Class({
	__init : function(id) {
		this.options = JINDO.extend({
			setUrl    : '',
			getData   : 'html',
			flashvars : '',
			width     : 171,
			height    : 121,
			onLoad    : function(reqData) {}
		}, arguments[1]||{});
		
		this.id = id;
		this.element = $(id);
		var o = this.options;
    	this.callData(o.getData);
	},
	callData : function(c){
		if(c == 'html') this._callHtml();
		if(c == 'flash') this._callFlash();
		if(c == 'xml') this._callXML();
	},
	_callHtml : function(){
		var o = this.options;
		var e = this.element;
		var url = o.setUrl;//+"?cache="+(new Date).getMilliseconds()+Math.floor(Math.random()*100000);        
        new Ajax(url,{
			charset : 'utf-8',
			onLoad  : function(req) {
				var txt  = req.responseText;
				e.innerHTML = txt;
			}
		});
	},
	_callFlash : function(){
		var o  = this.options;
		var e  = this.element;
		var id = this.id.replace('-','_')+"_swf"; //if bug - replace _
		var url = o.setUrl+"?cache="+(new Date).getMilliseconds()+Math.floor(Math.random()*100000);
		var txt =  "<object classid=\"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000\" codebase=\"http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0\" width=\""+ o.width +"\" height=\""+ o.height +"\" id=\""+ id +"\" align=\"middle\">";
			txt += "<param name=\"allowScriptAccess\" value=\"always\" />";
			txt += "<param name=\"flashvars\" value=\""+ o.flashvars +"\" />";
			txt += "<param name=\"quality\" value=\"high\" />";
			txt += "<param name=\"movie\" value=\""+ url +"\" />";
			txt += "<param name=\"wmode\" value=\"transparent\" />";
			txt += "<embed swLiveConnect=\"true\" quality=\"high\" wmode=\"transparent\" src=\""+ url +"\" flashvars=\""+ o.flashvars +"\" width=\""+ o.width +"\" height=\""+ o.height +"\" name=\""+ id +"\" align=\"middle\" allowScriptAccess=\"always\" type=\"application/x-shockwave-flash\" pluginspage=\"http://www.macromedia.com/go/getflashplayer\" />"
			txt += '</object>';
		e.innerHTML = txt;
	},
	_callXML : function(){
		var o = this.options;
		var e = this.element;
		var url = o.setUrl;
		new Ajax ( url, {
			charset : 'utf-8',
			onLoad  : function(req) {
				var txt = req.responseText;
				reqData = JINDO.xml2json(txt);
				reqData = eval('('+reqData+')');
				o.onLoad(reqData);
			}
		});
	}
});



function setPng24(obj) {
	if ($Agent().IE && ($Agent().IE6 || $Agent().IE55)) {
		if (obj == null) {
			return false;
		}
	    obj.width=obj.height=1;
	    obj.className=obj.className.replace(/\bpng24\b/i,'');
	    obj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+ obj.src +"',sizingMethod='image');"
	    return false;
	}
}