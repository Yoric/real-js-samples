/**
 * 게시글 태그 읽기,수정,삭제
 * 
 * @require Jindo1
 */
if(typeof window != "undefined" && typeof window.cafe == 'undefined') {
	window.cafe = {};
}
if(typeof window != "undefined" && typeof window.cafe.articleRead == 'undefined') {
	window.cafe.articleRead = {};
}

cafe.articleRead.TagProcessor = Class({
	name : 'TagProcessor',
	_sClubId : "",
	_sArticleId : "",
    _sReadTagURL : "/TagReadAjax.nhn",
    _sModifyTagURL : "/TagModifyAjax.nhn",
    _sRemoveTagURL : "/TagModifyAjax.nhn?m=remove",
    _sModifyTagForBookURL : "/PageTagUpdateAjax.nhn",
    _bTagReadOnly : false,
    _bActivityStopMember : false,
    _bHasTag : false,
    _bTagRemovable : false,
    _bReadOnlyStatus : false,
    _bBlindArticle : false,
    _sTagNamesForRead : "",
    _bExistTagProhibitWord : false,
    _sTagProhibitWordMessage : "",
    _fReadTagCB : function() {},
    _oTagValidator : null,
    
    __init : function(htParam) {
    	this._setEvent();
    	this._sClubId = htParam.sClubId;
    	this._sArticleId = htParam.sArticleId;
    	this._bTagReadOnly = htParam.bTagReadOnly;
    	this._bActivityStopMember = htParam.bActivityStopMember;
    	this._bHasTag = htParam.bHasTag;
    	this._bTagRemovable = htParam.bTagRemovable;
    	this._bReadOnlyStatus = htParam.bReadOnlyStatus;
    	this._bBlindArticle = htParam.bBlindArticle;
    	this._fReadTagCB = htParam.fReadTagCB;
    	this._oTagValidator = new cafe.TagValidator();
    	
        if (this._bHasTag) {
            this._readTagList();
        }
    },
    _setEvent : function() {
    	var oTagview = $('tagview');
    	if(!!oTagview){
    		Event.register(oTagview, 'click', this._onClickEvent.bindForEvent(this));
    	}
    },
    _onClickEvent : function(we) {
		if(oUtil.checkEvent(we)){
			oUtil.processEvent(we, this);
		}
    },
    _isTagReadOnlyService : function() {
        if (this._bReadOnlyStatus) {
            alert("서비스 점검으로 태그 작성이 제한 됩니다.");
            return true;
        }
        
        return false;
    },
    _readTagList : function() {
        var _this = this;
        var param = {"clubid" : this._sClubId, "articleid" : this._sArticleId};
        var reqRet = new Ajax(this._sReadTagURL, {
            method : "POST",
            params : param,
            onLoad : function(req) {
            	_this._readTagCB(req);
            }
        });
    },
    _readTagCB : function(req) {
        var res = eval('(' + req.responseText + ')');
        if (!res.isSuccess) {
        	return;
        }

        var tagNames = res.result; 
        
        // tag read
        this._sTagNamesForRead = this._makeTagNamesForRead(tagNames);
        
        this._showTag();
        this._fReadTagCB();
    },
    _makeTagNamesForRead : function(tagNames) {
    	var tagList = tagNames.split(",");
    	var sTagNamesForRead = "";
    	for (var i = 0; i < tagList.length; i++) {
			if(tagList[i] == "") {
				continue;
			}

        	if (sTagNamesForRead != "") {
        		sTagNamesForRead += " ";
        	}
        	
        	sTagNamesForRead += " <a href=\"/CafeTagArticleList.nhn?search.clubId=" + this._sClubId + "&search.tagName="+ URLEncoder.encode(tagList[i],"MS949") +"\" class=\"tag_item m-tcol-t\"><span>#</span>"+ tagList[i] +"<span class=\"bg_tx\"></span></a>";
        	if (this._bTagRemovable) {
        		sTagNamesForRead += " <a href=\"#\" class=\"m-tcol-c _click(TagProcessor|RemoveTag|" + tagList[i] + ") _stopDefault _rosRestrict\"><img src=\"https://cafe.pstatic.net/img/ico_x_.gif\" style=\"margin:0 0 1 0\" alt=\"삭제\"></a>";
        	}
        }
    	return sTagNamesForRead;
    },
    _showTag : function(we) {
        if (this._bBlindArticle) {
        	return;
        }
        
		$("tagListArea").innerHTML = this._sTagNamesForRead;
    	Element.show('tagListArea');
    },
    _clickRemoveTag : function(we, tagName) {
    	if (this._isTagReadOnlyService()) {
        	return;
    	}      
        if (!confirm('해당 태그를 삭제하시겠습니까?')) {
        	return;
        }
        
        var _this = this;
        var param = {'clubid' : this._sClubId, 'articleid' : this._sArticleId, 'tagName' : encodeURIComponent(tagName)};
        var reqRet = new Ajax(this._sRemoveTagURL ,{
            'method' : "POST",
            'params'  : param,
            'charset' : 'EUC-KR',
            'onLoad'  : function(req) {
            	_this._removeTagCB(req);
            }
        });  
    },
    _removeTagCB : function(req) {
    	var res = eval('(' + req.responseText + ')');
    	if (res.isSuccess) {
    		this._readTagList();
    		return;
    	}
    	if (res.errorCode < 0) {
    		return;
    	}
   		var sMsg = res.errorMsg.replace(/\\n/g, '\n');
   		alert(sMsg);
   		
   		if (res.errorCode == '301' || res.errorCode == '302') {
   			this._bActivityStopMember = true;
   			this._readTagList();
   		}
    }
});