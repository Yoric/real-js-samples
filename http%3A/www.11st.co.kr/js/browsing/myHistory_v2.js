var MyHistory = {};

MyHistory.common = {
	$wrapper : '',	
	prdCount : 0,
	currentPrdIndex : 0,
	currentRecommPageIndex : 1,
	recommPageSize : 4,
	recommPageCount : 3,
	recommPrdCount : 0,
	categoryData : '',
	keywordData : '',
	latelyViewCount : 0,
	cartCount : 0,
	likeCount : 0,
	ctgrCount : 0,
	kwdCount : 0,
	areaId : '',
	my11st : false,
	recopickCh : '',
	
	setDataSize : function (recommPageSize){
		var me = this;
		me.recommPageSize = recommPageSize;
		me.recommPageCount = recommPageSize + 1;
	},
	
	setMy11st : function (my11st){
		var me = this;
		me.my11st = my11st;
	},
	
	setRecopickChannel : function (recopickCh){
		var me = this;
		me.recopickCh = recopickCh; 
	},
		
	setWrapper : function(wrapperId){
		$wrapper = jQuery("#"+wrapperId);
	},	

	setDefaultProductData : function(data){
		var me = this;
		me.latelyViewCount = typeof(data.SHOW_LATELYVIEW) != 'undefined' ? data.SHOW_LATELYVIEW : 0;
		me.cartCount = typeof(data.SHOW_CART) != 'undefined' ? data.SHOW_CART : 0;
		me.likeCount = typeof(data.SHOW_LIKE) != 'undefined' ? data.SHOW_LIKE : 0;
		
		me.categoryData = data.SHOW_CATEGORY_AREA;
		me.keywordData = data.SHOW_KEYWORD_AREA;	
	},
	
	setCountData : function(areaId){
		var me = this;
		
		if(areaId == "OrderCart"){
			me.prdCount = me.cartCount;
		} else if (areaId == "Like"){
			me.prdCount = me.likeCount;
		} else {
			me.prdCount = me.latelyViewCount;
		}
	},
	
	clickAreaCd : function(areaId){
		var clickAreaCd = "";
		if(areaId == "OrderCart"){
			clickAreaCd = "02";
		} else if (areaId == "Like"){
			clickAreaCd = "03";
		} else {
			clickAreaCd = "01";
		}
		return clickAreaCd;
	},
	
	drawTab : function(data){
		var me = this;
		
		if(me.latelyViewCount != 0){
			jQuery("#latelyViewProductCnt").html("<a href=\"#\" onclick=\"MyHistory.common.goHistoryProduct('LatelyView');doCommonStat('MHC0101'); return false;\" data-log-actionid-label=\"tab_menu\" data-log-body='{\"btn_name\":\"최근 본 상품\"}'>최근 본 상품<em>("+me.latelyViewCount+")</em></a>");
		} else {
			jQuery("#latelyViewProductCnt").html("최근 본 상품<em>("+me.latelyViewCount+")</em>");
		}
		
		if(me.cartCount != 0){
			jQuery("#ordCartCnt").html("<a href=\"#\" onclick=\"MyHistory.common.goHistoryProduct('OrderCart');doCommonStat('MHC0201'); return false;\" data-log-actionid-label=\"tab_menu\" data-log-body='{\"btn_name\":\"장바구니\"}'>장바구니<em>("+me.cartCount+")</em></a>");
		} else {
			jQuery("#ordCartCnt").html("장바구니<em>("+me.cartCount+")</em>");
		}
		
		if(me.likeCount != 0){
			jQuery("#likeCnt").html("<a href=\"#\" onclick=\"MyHistory.common.goHistoryProduct('Like');doCommonStat('MHC0301'); return false;\" data-log-actionid-label=\"tab_menu\" data-log-body='{\"btn_name\":\"찜한 상품\"}'>찜한 상품<em>("+me.likeCount+")</em></a>");
		} else {
			jQuery("#likeCnt").html("찜한 상품<em>("+me.likeCount+")</em>");
		}
	},
	
	drawWrapper : function () {
		var me = this;
		var content = '';
		var subContent = '';
		
		subContent += '<div class="prd_wrap" data-log-actionid-area="my_history">';
		subContent += 	'<div class="viewport" name="prd_viewPrd"></div>';
		subContent += 	'<div class="btnctr_pn" name="prd_btn">';
		subContent += 		'<span name="prd_cnt"></span>';
		subContent += 		'<button type="button" class="in_prev" onclick="MyHistory.common.goPrdPrev();return false;" data-log-actionid-label="prev" data-log-body=\'{"btn_name":"@tabName@"}\'>이전 배너</button>';
		subContent += 		'<button type="button" class="in_next" onclick="MyHistory.common.goPrdNext();return false;" data-log-actionid-label="next" data-log-body=\'{"btn_name":"@tabName@"}\'>다음 배너</button>';
		subContent += 	'</div>';
		subContent += '</div>';
		subContent += '<div class="recom_prd" name="recom_prd" data-log-actionid-area="other_customer_view">';
		subContent += 	'<h5>이 상품을 본 고객이 함께 본 상품</h5>';
		subContent += 	'<span name="prd_recommend"></span>';
		subContent += 	'<div class="btnctr_pn" name="recom_btn">';
		subContent += 		'<span name="recomm_prd_page"></span>';
		subContent += 		'<button type="button" class="in_prev" onclick="MyHistory.common.goRecommPrev();return false;" data-log-actionid-label="prev" data-log-body=\'{"btn_name":"@tabName@"}\'>이전 배너</button>';
		subContent += 		'<button type="button" class="in_next" onclick="MyHistory.common.goRecommNext();return false;" data-log-actionid-label="next" data-log-body=\'{"btn_name":"@tabName@"}\'>다음 배너</button>';
		subContent += 	'</div>';
		subContent += 	'<p class="noview_product" name="noview_product">해당 상품과 함께 본 상품이 없습니다.</p>';
		subContent += '</div>';
		
		if (me.my11st){
			content += '<div class="my_history2_wrap mytmall" id="myHistory-innerBox">';
		}else{
			content += '<div class="my_history2_wrap" id="myHistory-innerBox">';
		}
		content += 	'<div class="hgroup">';
		content += 		'<h3><img src="' + getCommonImgUrl( _IMG_URL_ + '/img/common/tit_myhistory2.gif') + '" alt="MY HISTORY"></h3>';
		content += 		'<p>내가 본 상품과 다른 고객이 함께 본 상품을 확인해주세요!</p>';
		content += 	'</div>';
		content += 	'<div class="my_wrap">';
		content +=		'<div class="list_wrap" id="LatelyView">';
		content += 			'<h4 class="tab" data-log-actionid-area="my_history"><span id="latelyViewProductCnt"></span></h4>';
		var latelySubContent = subContent;
		content += 			'<div class="innerbox">'+ latelySubContent.replace(/@tabName@/gi, '최근 본 상품') + '</div>';
		content += 		'</div>';
		content += 		'<div class="list_wrap" id="OrderCart">';
		content +=  		'<h4 class="tab" data-log-actionid-area="my_history"><span id="ordCartCnt"></span></h4>';
        var cartSubContent = subContent;
		content +=  		'<div class="innerbox thislike">'+ cartSubContent.replace(/@tabName@/gi, '장바구니') + '</div>';
		content += 		'</div>';
		content += 		'<div class="list_wrap" id="Like">';
		content += 			'<h4 class="tab" data-log-actionid-area="my_history"><span id="likeCnt"></span></h4>';
        var likeSubContent = subContent;
		content += 			'<div class="innerbox thislike">'+ likeSubContent.replace(/@tabName@/gi, '찜한 상품') + '</div>';
		content += 		'</div>';
		//content += 		'<p class="loading_conts" id="my_history_loading"><img src="' + _IMG_URL_ + '/img/search_cnt/loading_white.gif" alt="loading 중 입니다."></p>';
		content += 	'</div>';
		content +=	'<div class="latelyview2_conts" id="myHistory-textBox" data-log-actionid-area="recent_keyword">';
		content +=		'<div id="mh_ctgr_area" style="display:none"></div>';
		content +=		'<div id="mh_kwd_area" style="display:none"></div>';
		content += 	'</div>';
		content += '</div>';
		
		$wrapper.html(content);
		$wrapper.fadeIn("slow");
	},
	
	drawProductArea : function(data, areaId){
		var me = this;
		var delNo = "";
		var $prd = jQuery("#"+areaId);
		var viewAreaCd = "";
		var tabName = '';
		var channerId = '';
		
		me.areaId = areaId;
		me.drawTab();
			
		if(me.areaId == "OrderCart"){
			dataSet = data.CART_PRODUCT;
			delNo = me.prdCount > 0 ? dataSet.bcktNo : "";
			viewAreaCd = "C";
            tabName = '장바구니';
            channerId = 'myHistory_detail_basket';
			
		} else if (me.areaId == "Like"){
			dataSet = data.LIKE_PRODUCT;
			delNo = me.prdCount > 0 ? dataSet.prdNo : "";
			viewAreaCd = "L";
            tabName = '찜한 상품';
            channerId = 'myHistory_detail_like';
		} else {
			dataSet = data.LATELY_PRODUCT;
			delNo = me.prdCount > 0 ? dataSet.prdNo : "";
			viewAreaCd = "R";
            tabName = '최근 본 상품';
            channerId = 'myHistory_detail_view';
		}

		if(me.prdCount > 0){
			$prd.addClass('selected');
			
			if(jQuery("[name=myPrd_" + me.currentPrdIndex + "]",$prd).length > 0){
				jQuery("[name=myPrd_" + me.currentPrdIndex + "]",$prd).remove();
			}
			
			jQuery(".product_wrap",$prd).css("display", "none");
			jQuery("ul",$prd).css("display", "none");
			
			jQuery("span[name=prd_cnt]", $prd).html("<em>" + (me.currentPrdIndex + 1) + "</em>/" + me.prdCount);

			var dataLogBody = "data-log-body=\"{'tab_name':'" + tabName + "', 'content_no':'" + dataSet.prdNo + "', 'content_type':'PRODUCT', 'last_discount_price':'" + dataSet.finalDscPrc + "'}\"";
			var content = "";
			content += '<div class="product_wrap" name="myPrd_' + me.currentPrdIndex + '"prdNo="' + dataSet.prdNo + '">';
			content += '<a href="#" onclick="rakeLog.sendRakeLog(this); goStatPopUp(\'' + _PRODUCT_DETAIL_URL_ + dataSet.prdNo + '&trTypeCd=70\',\'MHC'+me.clickAreaCd(me.areaId)+'02\',\'MY_HISTORY_POP\');return false;" data-log-actionid-label="product" ' + dataLogBody + '>';
            content += '<span class="thumb"><img src="' + getThumbnailImgUrl(dataSet.imgUrl) + '" onerror="this.src=\'' + getCommonImgUrl( _IMG_URL_ + '/img/prd_size/noimg_150.gif') + '\';" alt=""></span><span name="prd_nm" class="tit">' + dataSet.prdNm + '</span></a>';
			content += '<em class="price" name="prd_price">' + getCommaString(dataSet.finalDscPrc) + '<span>원</span></em>';
			content += '<input type="button" value="해당 상품 삭제" class="in_clear" onclick="MyHistory.common.goPrdDelete(' + delNo + ',\'' + me.areaId +'\');return false;">';
			content += '</div>';

            jQuery("div[name=prd_viewPrd]", $prd).append(content);
			if(me.prdCount < 2){
				jQuery("div[name=prd_btn]", $prd).hide();
			}else{
				jQuery("div[name=prd_btn]", $prd).show();
			}
			content = "";

			if(data.RECOMM_PRODUCT != undefined && data.RECOMM_PRODUCT.length > 0){
				me.recommPrdCount = data.RECOMM_PRODUCT.length;
				jQuery("p[name=noview_product]", $prd).hide();
				
				if(me.recommPrdCount <= me.recommPageSize){
					jQuery("div[name=recom_btn]", $prd).hide();
				}else{
					jQuery("div[name=recom_btn]", $prd).show();
					jQuery("span[name=recomm_prd_page]", $prd).html("<em>" + me.currentRecommPageIndex + "</em>/" + Math.ceil(me.recommPrdCount/me.recommPageSize) );
				}
				
				content += '<ul name="myPrd_' + me.currentPrdIndex + '">';
				var pageIndex = 0;
				var recoPrdCount = 0;
				
				for(var index = 0; index < me.recommPrdCount; index++){
					if(index % me.recommPageSize == 0){
						pageIndex ++;
					}
					var recommPrd = data.RECOMM_PRODUCT[index];
					if(index >= me.recommPageSize){
						content += '<li page=' + pageIndex + ' style="display:none">';
					}else{
						content += '<li page=' + pageIndex + '>';
					}
					
					if(recommPrd.bReco){
						recoPrdCount ++;
					}

					var colloseoInfo = '';
					if ((recommPrd.link).indexOf('redirect') > -1){
                        colloseoInfo = ", 'colloseo_channel_id':'" + channerId +"', 'colloseo_click_info':'" + (recommPrd.link).replace('redirect/', '') + "'";
					}

                    var RecommendProductDataLogBody = "data-log-body=\"{'tab_name':'" + tabName + "', 'content_no':'" + recommPrd.prdNo + "', 'content_type':'PRODUCT', 'last_discount_price':'" + recommPrd.finalDscPrc + "'" + colloseoInfo + "}\"";
					content += 	'<a href="#" onclick="rakeLog.sendRakeLog(this); goStatPopUp(\'' + recommPrd.link + '\',\'' + recommPrd.code + '\',\'MY_HISTORY_POP\');hdStckSimple(\'' + recommPrd.trcCd + 'C' + recommPrd.prdNo + '_' + dataSet.prdNo + '\');return false;" data-log-actionid-label="product" ' + RecommendProductDataLogBody + '>';
					content +=  '<span class="thumb"><img src="' + getThumbnailImgUrl(recommPrd.imgUrl) + '" alt="' + recommPrd.prdNm + '" onerror="this.src=\'' + getCommonImgUrl( _IMG_URL_ + '/img/prd_size/noimg_130.gif') + '\';" ></span>';
					content +=  '<span class="tit">' + recommPrd.prdNm + '</span>';
					content +=  '</a>';
					content += 	'<em class="price">' + getCommaString(recommPrd.finalDscPrc) + '<span>원</span></em>';
					content += '</li>';
					
					hdStckPushSimple(recommPrd.trcCd + 'I' + recommPrd.prdNo + '_' + dataSet.prdNo);
				}
				content += '</ul>';
				
				recoPrdCount = recoPrdCount.length > 1 ? recoPrdCount : "0"+recoPrdCount;
				// 추천상품 노출 통계코드 집계
				if(recommPrd.recommType == "11st_1" || recommPrd.recommType == "11st_2"){
					//#1. 내부추천
					doCommonStat("MHL" + viewAreaCd + "VC" + recoPrdCount);
				}else{
					//#2. 레코픽
					doCommonStat("MHL" + viewAreaCd + "VR" + recoPrdCount);
				}
				hdStckFlush();
			} else {
				jQuery("p[name=noview_product]", $prd).show();
				jQuery("div[name=recom_btn]", $prd).hide();
			}
			jQuery("span[name=prd_recommend]", $prd).append(content);
            window.rakeLog && window.rakeLog.scrollHandler();
		}else{
			me.prdCount = 0;
			
			if(me.areaId == "OrderCart"){
				$prd.html("<h4 class='tab'><span>장바구니<em>(0)</em></span></h4><div class='innerbox thislike'><p class='noview_product'>고객님의 장바구니 상품을 기준으로 연관 상품을 추천해 드립니다.</p></div>");
			} else if (me.areaId == "Like"){
				$prd.html("<h4 class='tab'><span>찜한 상품<em>(0)</em></span></h4><div class='innerbox thislike'><p class='noview_product'>고객님의 찜한 상품을 기준으로 연관 상품을 추천해 드립니다.</p></div>");
			} else {
				$prd.html("<h4 class='tab'><span>최근 본 상품<em>(0)</em></span></h4><div class='innerbox thislike'><p class='noview_product'>고객님의 최근 본 상품을 기준으로 연관 상품을 추천해 드립니다.</p></div>");
			}
		}
	},
	
	drawCategoryArea : function(data){
		var me = this;
		var content = '';
		
		if(data.CATEGORY != null && data.CATEGORY != undefined){
			jQuery("#mh_ctgr_area").css("display","block");
			me.ctgrCount = data.CATEGORY.length;
			
			if (me.my11st){
				me.ctgrCount = me.ctgrCount > 2 ? (me.ctgrCount - 1) : me.ctgrCount;
			}
			content += 	'<h4>최근 본 카테고리</h4>';
			content += 	'<ul>';
			for(var index=0; index < me.ctgrCount; index++){
				var category = data.CATEGORY[index];
				var categoryStr = category.ctgrNm + ":" + category.ctgrNo + ":" + category.level;
				var ctgrNm = category.ctgrNm;
				if(ctgrNm.length > 7){
					ctgrNm = ctgrNm.substring(0,7)+"..";
				}
				categoryStr = categoryStr.replace("undefined","");
				content += 	'<li><a href="#" onclick="goCategoryUrl(\'' + category.ctgrNo + '\',\'' + category.level + '\',\'' + category.brandYn + '\',\'' + category.lCtgrNo + '\',\'' + category.brandCd + '\',\'MHC0401\',\'MY_HISTORY_POP\');return false;">' + ctgrNm + '</a><input type="button" value="삭제" onclick="MyHistory.common.goCtgrDelete(\'' + categoryStr + '\');return false;"></li>';
			}
			content += 	'</ul>';
			jQuery("#mh_ctgr_area").html(content);
		}else{
			me.ctgrCount = 0;
			jQuery("#mh_ctgr_area").css("display","none");
			
			if(me.kwdCount == 0){
				jQuery("#myHistory-textBox").css("display","none");
			}
		}
		
	},
	
	drawKeywordArea : function(data){
		var me = this;
		var content = '';
		if(data.KEYWORD != null && data.KEYWORD != undefined){
			jQuery("#mh_kwd_area").css("display","block");
			me.kwdCount = data.KEYWORD.length;
			
			if (me.my11st){
				me.kwdCount = me.kwdCount > 1 ? 2 : me.kwdCount;
			} else {
				me.kwdCount = me.kwdCount > 2 ? 3 : me.kwdCount;
			}
			content += 	'<h4>최근 검색 키워드</h4>';
			content += 	'<ul>';
			for(var index=0; index < me.kwdCount; index++){
				var keyword = data.KEYWORD[index];
				var searchKwd = keyword.keyword;
				if (searchKwd != null){
					if(searchKwd.length > 7){
						searchKwd = searchKwd.substring(0,7)+"..";
					}
					content += 	'<li><a href="#" onclick="rakeLog.sendRakeLog(this); goTotalSearch(\'' + keyword.keyword + '\',\'MHC0501\',\'MY_HISTORY_POP\');return false;" data-log-actionid-label="keyword" data-log-body="{\'btn_name\':\'' + searchKwd + '\'}">' + searchKwd + '</a><input type="button" value="삭제" onclick="rakeLog.sendRakeLog(this); MyHistory.common.goKwdDelete(\'' +keyword.keyword + '\');return false;" data-log-actionid-label="delete" data-log-body="{\'btn_name\':\'' + searchKwd + '\'}"></li>';
				}
			}
			content += 	'</ul>';
			
			jQuery("#mh_kwd_area").html(content);
		}else{
			me.kwdCount = 0;
			jQuery("#mh_kwd_area").css("display","none");
			if(me.ctgrCount == 0){
				jQuery("#myHistory-textBox").css("display","none");
			}
		}
		
	},
	
	getTotalData : function (){
		var me = this;
		var url = "//www.11st.co.kr/browsing/MyHistoryAjaxAction.tmall?method=getTotalData&recopickCh="+me.recopickCh+"&callback=?";

		jQuery.ajax({
			url : url,
			dataType : 'jsonp',
			scriptCharset : 'UTF-8',
			success : function(data){
				me.setDefaultProductData(data);
				//jQuery("#my_history_loading").fadeOut("slow");
				
				if( me.latelyViewCount > 0 || me.cartCount > 0 || me.likeCount > 0 ){
					me.drawWrapper();
					
					if (me.latelyViewCount > 0) {
						me.prdCount = me.latelyViewCount;
						me.drawProductArea(data, "LatelyView");
					} else {
						if (me.cartCount > 0) {
							me.prdCount = me.cartCount;
							me.drawProductArea(data, "OrderCart");
						} else {
							me.prdCount = me.likeCount;
							me.drawProductArea(data, "Like");
						}
					}

					if (me.categoryData || me.keywordData){
						me.categoryData ? me.drawCategoryArea(data) : '';
						me.keywordData ? me.drawKeywordArea(data) : '';
					} else {
						jQuery("#myHistory-textBox").css("display","none");
					}
				} else {
					jQuery("#myHistory-innerBox").css("display","none");
				}
			}
		});
	},
	
	getAjaxData : function(param, callback){
		var url = "//www.11st.co.kr/browsing/MyHistoryAjaxAction.tmall?" + param + "&callback="+callback;
		
		jQuery.ajax({
			url : url,
			dataType : 'jsonp',
			scriptCharset : 'UTF-8',
			jsonp : false
		});
	},
	
	goPrdDelete : function(prdNo, areaId){
		var me = this;
		var param = "method=delete"+ areaId + "Product&prdNo=" + prdNo;
		
		if (areaId == "OrderCart"){
			me.removeCookie("WB_DEFAULT","11st.co.kr","/");
		}
		me.deleteArea("myPrd_", me.currentPrdIndex, me.prdCount);
		me.getAjaxData(param, "MyHistory.common.getProduct");
	},
	
	removeCookie : function (name,domain,path){
		var expireDate = new Date();
		expireDate.setDate(expireDate.getDate()-1);
		document.cookie = name + "= " + "; path="+path+"; domain="+domain+";  expires=" + expireDate.toGMTString() + ";";
	},

	getPrdData : function(index){
		var me = this;
		var strMethod = "";
		me.currentRecommPageIndex = 1;
		jQuery("span[name=prd_cnt]", "#"+me.areaId).html("<em>" + (me.currentPrdIndex + 1) + "</em>/" + me.prdCount);
		
		if(jQuery("[name=myPrd_" + index + "]", "#"+me.areaId).length > 0){
			jQuery(".product_wrap", "#"+me.areaId).css("display", "none");
			jQuery("ul", "#"+me.areaId).css("display", "none");
			jQuery("[name=myPrd_" + index + "]","#"+me.areaId).css("display", "block");
			me.drawRecommData();
		}else{
			var param = "method=get"+me.areaId+"Product&recopickCh="+me.recopickCh+"&index=" + index;
			me.getAjaxData(param, "MyHistory.common.drawProductArea");
		}
		if(me.prdCount < 2){
			jQuery("div[name=prd_btn]", "#"+me.areaId).hide();
		}else{
			jQuery("div[name=prd_btn]", "#"+me.areaId).show();
		}
	},
	
	getProduct : function(){
		var me = this;
		
		me.prdCount = me.prdCount - 1;
		if(me.currentPrdIndex >= me.prdCount){
			me.currentPrdIndex = 0;
		}
		
		if(me.areaId == "OrderCart"){
			me.cartCount = me.prdCount;
		} else if (me.areaId == "Like"){
			me.likeCount = me.prdCount;
		} else {
			me.latelyViewCount = me.prdCount;
		}
		me.getPrdData(me.currentPrdIndex);
		me.displayControl();
	},
	
	displayControl : function(){
		var me = this;
		if(me.latelyViewCount == 0 && me.cartCount == 0 && me.likeCount == 0){
			$wrapper.hide();
		}else if(me.ctgrCount == 0 && me.kwdCount == 0){
			jQuery("#myHistory-textBox").hide();
		}
	},
	
	getCategoryData : function(){
		var me = this;
		var param = "method=getCategoryData";
		me.getAjaxData(param, "MyHistory.common.drawCategoryArea");
	},
	
	getKeywordData : function(){
		var me = this;
		var param = "method=getKeywordData";
		me.getAjaxData(param, "MyHistory.common.drawKeywordArea");
	},
	
	goCtgrDelete : function(categoryStr){
		var me = this;
		var param = "method=deleteCategoryData&categoryStr=" + categoryStr;
		me.getAjaxData(param, "MyHistory.common.getCategoryData");
	},
	
	goKwdDelete : function(keyword){
		var me = this;
		var param = "method=deleteKeywordData&keyword=" + keyword;
		me.getAjaxData(param, "MyHistory.common.getKeywordData");
	},
	
	deleteArea : function(areaName, startIdx, endIdx){
		for(var index = startIdx; index <= endIdx; index++){
			jQuery("[name=" + areaName + index + "]").remove();
		}
	},
	
	goPrdPrev : function(){
		var me = this;
		me.currentPrdIndex = me.currentPrdIndex -1;
		if(me.currentPrdIndex < 0){
			me.currentPrdIndex = me.prdCount -1 ;
		}
		doCommonStat("MHC"+me.clickAreaCd+"03");
		me.getPrdData(me.currentPrdIndex);
	},
	
	goPrdNext : function(){
		var me = this;
		me.currentPrdIndex = me.currentPrdIndex +1;
		if(me.currentPrdIndex >= me.prdCount){
			me.currentPrdIndex = 0;
		}
		doCommonStat("MHC"+me.clickAreaCd+"03");
		me.getPrdData(me.currentPrdIndex);
	},
	
	goRecommPrev : function(){
		var me = this;
		var $currPrdObj = jQuery("[name=myPrd_" + me.currentPrdIndex + "]", "#"+me.areaId);
		if(me.currentRecommPageIndex == 1){
			me.currentRecommPageIndex = Math.ceil(jQuery("li", $currPrdObj).size()/me.recommPageSize);
		}else{
			me.currentRecommPageIndex = me.currentRecommPageIndex -1;
		}
		doCommonStat("MHC"+me.clickAreaCd+"04");
		me.drawRecommData();
	},

	goRecommNext : function(){
		var me = this;
		me.recommPrdCount = jQuery("li", jQuery("[name=myPrd_" + me.currentPrdIndex + "]", "#"+me.areaId)).size();
		if(me.currentRecommPageIndex * me.recommPageSize  >= me.recommPrdCount){
			me.currentRecommPageIndex = 1;
		}else{
			me.currentRecommPageIndex = me.currentRecommPageIndex +1;
		}
		doCommonStat("MHC"+me.clickAreaCd+"04");
		me.drawRecommData();
	},
	
	drawRecommData : function(){
		var me = this;
		
		if(jQuery("ul[name=myPrd_" + me.currentPrdIndex + "]", "#"+me.areaId).length > 0){
			jQuery("p[name=noview_product]", "#"+me.areaId).hide();
			jQuery("li[page]").hide();
			jQuery("li[page=" + me.currentRecommPageIndex + "]").show();
			
			var $currPrdObj = jQuery("[name=myPrd_" + me.currentPrdIndex + "]", "#"+me.areaId);
			
			if(jQuery("li", $currPrdObj).size() > me.recommPageSize){
				jQuery("div[name=recom_btn]", "#"+me.areaId).show();
			}else{
				jQuery("div[name=recom_btn]", "#"+me.areaId).hide();
			}
			jQuery("span[name=recomm_prd_page]", "#"+me.areaId).html("<em>" + me.currentRecommPageIndex + "</em>/" + Math.ceil(jQuery("li", $currPrdObj).size()/me.recommPageSize) );
			
		}else{
			jQuery("p[name=noview_product]", "#"+me.areaId).show();
		}
		
	},
	
	goHistoryProduct : function(areaId){
		var me = this;
		var param = "method=get"+areaId+"Product&recopickCh="+me.recopickCh+"&index=0";
		
		me.currentPrdIndex = 0;
		me.currentRecommPageIndex = 1;
		me.goHistoryProductInit();
		me.setCountData(areaId);
		me.getAjaxData(param, "MyHistory.common.drawProductArea");
	},
	
	goHistoryProductInit : function (){
		jQuery("#LatelyView").removeClass('selected');
		jQuery("#OrderCart").removeClass('selected');
		jQuery("#Like").removeClass('selected');	
		
		jQuery("div[name=prd_viewPrd]").html ("");
		jQuery("span[name=prd_recommend]").html ("");
		
	},
	
	init : function (){
		var me = this;
		me.getTotalData();
		
		// 통계 처리 
		HeaderComm.callPvSt('myhistoryPV');
		doCommonStat("MHL0000");
		hdStckFlush();
	}
};

MyHistory.commonRayer = {
	focusPowerLink : function (){
		if(jQuery("#idPowerLink") != undefined && jQuery("#idPowerLink").length > 0){
			jQuery("#idPowerLink")[0].scrollIntoView(true);
		}else{
			jQuery("#myHistoryArea")[0].scrollIntoView(true);
		}
	},
	init : function (){
		var me = this;
		var myhistoryLoad = true;
		
		jQuery(window).scroll(function(){
			if(jQuery(window).scrollTop() >= jQuery(document).height() - jQuery(window).height() -1){
				if(jQuery("#myHistoryArea").html() == "" && myhistoryLoad){
					myhistoryLoad = false;
					if (document.location.host == "buy.11st.co.kr"){
						MyHistory.common.setRecopickChannel("CART");
					} else {
						MyHistory.common.setRecopickChannel("DETAIL");
					}
					MyHistory.common.setWrapper("myHistoryArea");
					MyHistory.common.init();
					me.focusPowerLink();
				}
			}
		});
	}	
};
MyHistory.my11stRayer = { 
	init : function (){ 
		MyHistory.common.setMy11st(true);
		MyHistory.common.setDataSize(3);
		MyHistory.common.setRecopickChannel("MYPAGE");
		MyHistory.common.setWrapper("historyW_mytmall");
		MyHistory.common.init();
	}
};
jQuery(function() {
	if (jQuery("#historyW_mytmall").html() != null){
		//나의 11번가 노출
		MyHistory.my11stRayer.init();
	} else {
		//공통 My history 노출
		myhistoryLoad = true;
		MyHistory.commonRayer.init();
	}
});