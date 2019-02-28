/*
@ author : Aajx UI 2 Dioong
@ description : This code below is based on Jindo 1 framework.
@ date : 2009.04.02
*/
PerSonaConMgr = {
	elMyEmoticon : null,
	elPerSonacon : null,	
	fnClickPersonaCon : null,
	fnHidePersonaCon : null,
	
	init : function(elPerSonacon){
		this.elPerSonacon = elPerSonacon;
		this.fnClickPersonaCon = this.onClickPersonaCon.bindForEvent(this);
		this.fnHidePersonaCon = this.hidePersonaCon.bindForEvent(this);
	},
	
	showPersonaCon : function(el){			
		this.clearEvt();		
		
		this.elMyEmoticon = el;
		if(this.elMyEmoticon.tagName.toLowerCase() != "img") this.elMyEmoticon = cssquery.getSingle("> img",this.elMyEmoticon);
		
		var elDiv = this.elMyEmoticon.parentNode;
		var oPosition = Element.realPos(elDiv);	
		Element.setCSS(this.elPerSonacon,{
			'top': oPosition.top + 'px',
			'left': (oPosition.left + elDiv.offsetWidth) + 'px',
			'position': 'absolute',
			'zIndex': '1000',
			'display': 'block'		
		});
		this.setEvt();
		oCL.options.onShow(oCL._oElement);
	},
	
	onClickPersonaCon : function(eEvent){
		if(eEvent) eEvent.stop();
		var el = eEvent.element;
		if(el.tagName.toLowerCase() != "img")  el = cssquery.getSingle("> img",el);
		if(el){
			this.setEmoticonImg(el,this.elMyEmoticon);			
		}
	},
	
	setEmoticonImg : function(elImg,elTargetImg){		
		var nEmot  = this.getEmotionCode(elImg);
		if(elImg.id == '') this.setPersonacon(nEmot,elImg.src,elTargetImg);
		else this.setEmoticon(nEmot,elTargetImg);
	},
	
	hidePersonaCon : function(eEvent){				
		if(!cssquery.getSingle(" ! #emoticon",eEvent.element)){
			this.clearEvt();
			oCL.hide('emoticon');
		}		
	},
	
	setEmoticon : function(emot,elTargetImg){		
		elTargetImg.width = 16;
	    elTargetImg.height = 17;
	    elTargetImg.src = "https://cafe.pstatic.net/img/emot/emo" + emot + ".gif";
	    $("emotion").value = emot;
	    oCL.hide("emoticon");
	},
	
	setPersonacon : function(emot,emoturl,elTargetImg){		
		elTargetImg.width = 19;
	    elTargetImg.height = 19;		
		elTargetImg.src = emoturl;
		$("emotion").value = emot;
				
		try {
			$("myemoticonform").src = emoturl;
		} catch(e) {};
	    oCL.hide("emoticon");
	},
	
	
	clearEvt : function(){		
		Event.unregister(this.elPerSonacon, "click", this.fnClickPersonaCon);
		Event.unregister(this.elPerSonacon, "mouseover", oCL._onMouseOverFunction);
		Event.unregister(this.elPerSonacon, "mouseout", oCL._onMouseOutFunction);
		Event.unregister(document.body, "mousedown", this.fnHidePersonaCon);
	},
	
	setEvt : function(){
		Event.register(this.elPerSonacon, "click", this.fnClickPersonaCon);
		Event.register(this.elPerSonacon, "mouseover", oCL._onMouseOverFunction);
		Event.register(this.elPerSonacon, "mouseout", oCL._onMouseOutFunction);
		Event.register(document.body, "mousedown", this.fnHidePersonaCon);
	},
	
	getEmotionCode : function(elEmotImg){		
		var aScr = elEmotImg.src.split("/");				
		var nEmot  = aScr[aScr.length-1].match(/([0-9]+)/g)[0];			
		
		return nEmot;
	}
};