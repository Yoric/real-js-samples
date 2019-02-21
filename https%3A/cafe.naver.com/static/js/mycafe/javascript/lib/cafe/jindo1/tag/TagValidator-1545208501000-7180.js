if(typeof window != "undefined" && typeof window.cafe == 'undefined') {
	window.cafe = {};
}

cafe.TagValidator = Class({
	name : "TagValidator",
    sTagDefaultMsg : '',
    nTagMaxCount : 10,
    nTagMaxLen : 20,
	sLetterRegExp : null,
	sNumberRegExp : null,
	sUnderbarRegExp : null,
	sCommaRegExp : null,
	sTagValidateMsg : null,
	bTagChanged : false,
	fValidateCB : function(el) {},

    __init : function(htParam) {
    	this.sLetterRegExp = XRegExp("^\\p{L}+$");
		this.sNumberRegExp = XRegExp("^\\p{N}+$");
		this.sUnderbarRegExp = XRegExp("^_");
		this.sCommaRegExp = XRegExp("^,");
		
    	this._setEvent();
    	
    	if (htParam) {
    		this.sTagDefaultMsg = htParam.sTagDefaultMsg;
    		this.fValidateCB = htParam.fValidateCB;
    	}
    },
    _setEvent : function() {
    	if ($('tagnames')) {
    		Event.register($('tagnames'), 'keyup', this._onEvent.bindForEvent(this));
    		Event.register($('tagnames'), 'blur', this._onEvent.bindForEvent(this));
    		Event.register($('tagnames'), 'click', this._onEvent.bindForEvent(this));
    	}
    },
    _onEvent : function(we) {
		if(oUtil.checkEvent(we)){
			oUtil.processEvent(we, this);
		}
    },
    _clickTagNames : function(we) {
    	var el = we.element;
    	if (this.sTagDefaultMsg == el.value) {
    		el.value = "";
    	}
    },
    _keyupValidateTagNames : function(we) {
    	if(we.key.left || we.key.right || we.ctrlKey || we.keyCode == 8) { // 키보드 왼쪽&오른쪽 화살표, 컨트롤, backspace일 때는 허용.
    		return false;
    	}
    	
    	this._checkDirectInputTag(we.element, 0);
    	this.fValidateCB(we.element);
    },
    _blurValidateTagNames : function(we) {
    	this._checkDirectInputTag(we.element, 1);
    	this.fValidateCB(we.element);
    },
    _checkDirectInputTag : function(ipTagnamesInput, blurFlag) {
    	/**
        1. ipTagnamesInput.value 를 태그 시스템에서 받아 온 validate check 한다.
        2. check에 통과 되었는지 확인을 한 후, 통과가 된 경우 기존 태그 리스트에 존재 하는지 확인 한다.
            - 지금 받아온 validator가 썩히 좋아보이진 않음. 입맛에 맞게 개선 여지 필요.
        3. 기존 태그 리스트에 있는 경우, 그 를 활성화 시킨다.
            - 빠진 경우엔, 활성화 된 것을 비활성화 시킨다.
        4. ipTagnamesInput.value 에 validate 받은 것을 설정 한다.
        **/
        this._checkTagNames(ipTagnamesInput, blurFlag);
        
        var aTagNames = [];
        var sTagNamesValue = ipTagnamesInput.value;
        var t = this;
            
        if( sTagNamesValue.indexOf(",") == -1 ) {
            aTagNames[0] = sTagNamesValue;  
        } else {
            aTagNames = sTagNamesValue.split(",");  
        }
        return 0;
    },
    _checkTagNames : function(input, blurFlag) {
        /**
        1. 일반문자, 숫자, 언더바(_), 콤마 이외에는 제거
        2. 중복 콤마(,) 제거
        3. 태그입력 건수 제한
        **/
        var ret = input.value;
        if( ret == this.sTagDefaultMsg ) {
            input.value="";
            return false;
        }
        
        ret = this._removeInvalidCharacter(input.value);
        if(this.bTagChanged) {
        	input.value = ret;
        }
        
        ret = this._removeDuplicateCommaCharacter(input.value);
        if(this.bTagChanged) {
        	input.value = ret;
        }
        
        ret = this._checkTagMaxCount(input.value, blurFlag);
        if(this.bTagChanged) { 
        	input.value = ret;
        }
        
        // 2번
        this._checkTagLength(input, blurFlag);
        return 0;
    },
    
	/**
	 * 일반문자, 숫자, 언더바(_), 콤마 이외에는 제거
	 */
	_removeInvalidCharacter : function(ret) {
		var temp = '';
		this.bTagChanged = false;
		
		for(var i = 0; i < ret.length ; i++ ) {
			if(this.sLetterRegExp.test(ret[i]) || this.sNumberRegExp.test(ret[i]) || this.sUnderbarRegExp.test(ret[i]) || this.sCommaRegExp.test(ret[i])) { // 문자, 숫자, 언더바, 콤마만 입력 가능
				temp += ret[i];
				continue;
			} else {
				this.bTagChanged = true;
			}
		}

		return temp;
	},
	
	/**
	 * 중복 콤마(,) 제거
	 */
	_removeDuplicateCommaCharacter : function(ret) {
		var re = /[\x2c][\x2c]+/g;
		this.bTagChanged = false;
		
		if(ret.match(re) != null ) {
			this.bTagChanged = true;
			ret = ret.replace(re, ",");
		}
		
		return ret;
	},

	/**
	 * 태그 갯수(최대 10개) 체크
	 */
	_checkTagMaxCount : function(ret, blurFlag) {
		var aTag = ret.split(",");
		this.bTagChanged = false;
		
		if (aTag.length > 10) {
			this.bTagChanged = true;
			if(!blurFlag) {
				alert("태그는 최대 10개까지 입력할 수 있습니다.");
			}
			return this._checkTagCount(aTag);
		}
		
		return ret;
	},
	
    _checkTagCount : function ( aTag ) {
        /** Goal
        1. 태그입력 건수 제한되면 마직막의 , 를 제거한다.
        **/
        var tagnames = '';
    
        for(var i=0; i<aTag.length && i<this.nTagMaxCount; i++) {
            tagnames = tagnames + aTag[i] + ",";
        }
        tagnames = tagnames.substring(0, tagnames.length-1);
    
        return tagnames;
    },
    
    _checkTagLength : function ( input, blurFlag ) {
        var aTag = input.value.split(",");
        var tagnames = "";
        var bOverMaxLen = false;
        for(var i=0; i<aTag.length; i++) 
        {   
            if(aTag[i].length>0){
                if(aTag[i].length>this.nTagMaxLen) {
                    tagnames = tagnames + aTag[i].substring(0, this.nTagMaxLen) + ",";
                    bOverMaxLen = true;
                }else{
                    tagnames = tagnames + aTag[i]+",";
                }
            }
        }
        if(bOverMaxLen == true) {
        	if(!blurFlag) {
        		alert("태그는 최대 20자까지 등록가능합니다.");
        	}
        	input.value=tagnames;
        }
    },
    
    /**
     * 태그에 금칙어가 들어있는지 확인하는 메소드.
     */
    containsTagProhibitWord : function(nCafeId, tagNames) {
    	this._validateTagProhibitWords(nCafeId, tagNames);
        if (this.sTagValidateMsg != null) {
        	return true;
        }
        
        return false;
    },
    
    /**
     * 태그 금칙어 확인 ajax
     */
    _validateTagProhibitWords : function(nCafeId, tagNames) {
		var sUrl = "/TagProhibitWordValidationAjax.nhn";

		var ajax = new Ajax(sUrl, {
			method : "post",
			async : false,
			params : {
				'cafeId' : nCafeId, 
				'tagNames' : encodeURIComponent(tagNames)
    		},
			onLoad : this._bindTagValidateMsg.bind(this)
		});
    },
    
    _bindTagValidateMsg : function(oRes) {
		var oResult = eval('(' + oRes.responseText + ')');
		
		if (oResult.message.status == 500) {
			this.sTagValidateMsg = oResult.message.error.msg;
			return;
		}
		
		this.sTagValidateMsg = null;
	}
});