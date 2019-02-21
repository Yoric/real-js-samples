/**
 * @method: ProductTotalReview - productTotalReview.js
 * @dependency: requireJS, jQuery, prdVar
 */
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([
            'jquery',
            'prdVar',
            'productCommon'
        ], factory);
    } else {
        root.productTotalReview = factory(
            root.jQuery,
            root.prdVar,
            root.productCommon
        );
    }
}(window || this, function($, prdVar, productCommon) {
	'use strict';	
	var productTotalReview = {
	
		init: function() {
			var me = this;
	
			try {
	    		me.$reviewArea = $('.ifrm_prdc_review');
	    		me.prdNo = prdVar.prdNo;
	    		me.evtCd = prdVar.evtCd;
	    		me.preView = prdVar.preView;
	    		me.resizeParent();
	    		me.bindEventToReviewTotalPoint();
	    		me.bindEventToSearchBtn();
	    		me.writeReview();
	    		me.bindEventToContent();
	    		me.bindEventToPaging();
			}catch(e){}
			
		},
		
		bindEventToReviewTotalPoint: function() {
			var me = this;
	
			$('#btnGraph1', me.$reviewArea).click(function (e) {
				var me = this;
	
				var $evtElem = $(this);
			    var btn_position = $evtElem.position();
			    var ly_top = $evtElem.height()+btn_position.top+2;
			    var ly_left = btn_position.left;
			    $('.btn_laycls').parent('div').css('display','none');
			    $('#layerGraph1').css({'display':'block', 'top':ly_top, 'left':ly_left});
			    return false;
			});
		},
		
		bindEventToSearchBtn: function() {
			var me = this;
	
			$("#searchText", me.$reviewArea).keypress(function(e){
				var code = (e.keyCode ? e.keyCode : e.which);
				if(code == 13) {
					me.searchTxtOption(me.checkSearchOption());
				}
			});
	
			$(".sch_btn", me.$reviewArea).bind('click', function (e) {
				me.searchTxtOption(me.checkSearchOption());
			});
	
			$("#searchText", me.$reviewArea).focus(function(){
				var $evtElem = $(this);
				if($evtElem.val() == '옵션검색'){
					$evtElem.val("");
				}
			});
			$("#searchText", me.$reviewArea).focusout(function(){
				var $evtElem = $(this);
				if($evtElem.val() == ''){
					$evtElem.val("옵션검색");
				}
			});
			
			$("#sortCd", me.$reviewArea).change(function(e) {
				var searchType = "${param.searchTyp}";
				var isSearchType = false;
	
				me.searchOption($('#sortCd option:selected', me.$reviewArea).val(),'sortCd', me.checkSearchOption());
			});
			
			$("input[name=pntValue]").change(function(e) {
				$("#themeFilterStr").val('');
				$("input[name=reviewPntStr]").val($(':radio[name="pntValue"]:checked').val());
				me.goSearch('first', 1, '');
			});
			
	
			$("#reviewType", me.$reviewArea).change(function(e) {
				$("#themeFilterStr").val('');
				me.searchOption($('#reviewType option:selected', me.$reviewArea).val(),'reviewType', me.checkSearchOption());
			});
			
			if($("#themeFilterList").length > 0) {	// 테마필터 클릭 이벤트
				me.setThemeFilter("init");
				
				$("#themeFilterList > li").click(function (e) {
					//alert($(this).attr("theme-value"));
					if($(this).hasClass("selected")) {
						$(this).removeClass("selected");
					} else {
						$(this).addClass("selected");
					}
					if($(this).attr("theme-value") == "전체" && $("#themeFilterList > li.selected").length > 1) {
						$("#themeFilterList > li").removeClass("selected");
						$("#themeFilterList > li:first").addClass("selected");
					}
					me.setThemeFilter();
				});
			}
			
			$("#moreSmartReviewBtn", parent.document).click(function(e) {	// 스마트 더보기 버튼 클릭시
				/*var _this = $("#moreSmartReviewBtn", parent.document);
				if(_this.length > 0) {
					var reviewOptNm	= _this.attr("review-optNm");
					$("#smartLayerCloseBtn", parent.document).trigger("click");
					if(reviewOptNm != "" && reviewOptNm.length > 0) {
						$("#searchText").val(reviewOptNm);
						
						$(".sch_btn", me.$reviewArea).trigger("click");
						parent.$('#reviewTo[href="#tabProductReview"]').trigger('click');
						
						//$("#tabProductReview", parent.document).focus();
					}
				}*/
			});
	
		},
		
		checkSearchOption: function() {
			var me = this;
	
			if($("#searchText", me.$reviewArea).val().trim() !== '' && $("#searchText", me.$reviewArea).val().trim() !== '옵션검색') {
				return true;
			}
	
			return false;
		},
		
		bindEventToContent: function() {
			var me = this;
			
			parent.callEventFromIfram('layoutUpdate');
			
/*			if($('#optYn').val() == "false"){
				$('.op_sc').css("display", "none");
			}else{
				$('.op_sc').css("display", "block");
			}*/
										
			$('.good, .bad', me.$reviewArea).click(function(e) {
				var $evtElem = $(this);
				/*var _url = "/product/SellerProductDetail.tmall?method=reviewLikeAjax";*/
				var contNo = $evtElem.attr("data-contMapNo");
				var type = ($evtElem.hasClass('good')) ? 'like' : 'dislike';
				
				var _url = "/commons/LikeAjaxAction.tmall?method=reviewLikeAjax&contNo="+contNo+"&type="+type+"";
				
				if (funcCheckIsLogin()){
					$.ajax({
						url : _url ,
						type : 'post' ,
						data : {
							'contMapNo' : contNo ,
							'type' : type
						},
						dataType : 'json' ,
						error : function(){
							alert('서버통신중 에러가 발생되었습니다.');
						},
						success : function(data){        							
							if( data.result == 'SUCCESS' )
							{
								$evtElem.find('.cnt').html(data.cnt);
								//$evtElem.closest('.btn').find('.txt').html('평가해 주셔서 감사합니다.'); //제거 요청
							}
							else
								alert(data.result_msg);
						}
					});
				} else {
					openLogin(1);
				}
			});
			
			$('.btn #report').click(function(e) {
				var $evtElem = $(this);
				var contNo = $evtElem.attr("data-contNo");
				var contTypeCd = $evtElem.attr("data-contTypeCd");
				var objContCd = "";
								
				if(contTypeCd == "01"){
					objContCd = "06";
				}else if(contTypeCd == "02"){
					objContCd = "04";
				} 
				
				if(!funcCheckIsLogin()){
				    try{
				        openLogin(1).focus();
				    }catch(e){}
				}else if(contNo){
				    window.open(prdVar._ACTION_CONTEXT_+"/browsing/OpenContReviewAction.tmall?method=getContentsReporting&contNo="+contNo+"&contDclObjClfCd=01&contDclObjContCd="+objContCd, "contentReportPopup", "width=500,height=260,scrollbars=no,status=no,resizable=no,toolbar=no,location=no,menubar=no").focus();
				}
	
			});
			
			// 리뷰 팝업
			$('.reviewDetail').click(function(e) {
				var $evtElem  = $(this);
				var contMapNo = $evtElem.attr("data-contMapNo");
				var prdNo 	  = $evtElem.attr("data-prdNo");
				var contNo 	  = $evtElem.attr("data-contNo");	
						
		 		var url = "/product/SellerProductDetail.tmall?method=getProductReviewDetailv2&contMapNo="
					+ contMapNo
					+ "&prdNo="
					+ prdNo
					+ "&contNo="
					+ contNo 
	
		 			var _win = productCommon.launchCenter(url, "reviewDetailPop", 760, 650);
					_win.focus(); 
			});
			
			// 리뷰 팝업
			$('.bbs_summary').click(function(e) {
				var $evtElem  = $(this);
				var reviewClfCd = $evtElem.attr("data-reviewClfCd");
				var contMapNo = $evtElem.attr("data-contMapNo");
				var prdNo 	  = $evtElem.attr("data-prdNo");
				var contNo 	  = $evtElem.attr("data-contNo");	
				
				if(reviewClfCd != '01'){
			 		var url = "/product/SellerProductDetail.tmall?method=getProductReviewDetailv2&contMapNo="
						+ contMapNo
						+ "&prdNo="
						+ prdNo
						+ "&contNo="
						+ contNo 
		
			 			var _win = productCommon.launchCenter(url, "reviewDetailPop", 760, 650);
						_win.focus(); 
				}
						
			});
			// 리뷰 팝업
			$('.best_photo_review', parent.document).find("li").click(function(e) {
				var $evtElem  = $(this);
				var contMapNo = $evtElem.attr("data-contMapNo");
				var prdNo 	  = $evtElem.attr("data-prdNo");
				var contNo 	  = $evtElem.attr("data-contNo");	
						
		 		var url = "/product/SellerProductDetail.tmall?method=getProductReviewDetailv2&contMapNo="
					+ contMapNo
					+ "&prdNo="
					+ prdNo
					+ "&contNo="
					+ contNo 
	
		 			var _win = productCommon.launchCenter(url, "reviewDetailPop", 760, 650);
					_win.focus(); 
			});
		
		},
		
		showDetail: function(contNo, frmNo, prdNo){
			var me = this;
			try{
				$("#trPrdReviewDetail"+frmNo).css("display", "none");
				$("#dvPrdReviewDetail"+frmNo).css("display", "block");
				$("#reviewDetailOpen"+frmNo, me.$reviewArea).css("display", "none");
				$("#reviewDetailClose"+frmNo, me.$reviewArea).css("display", "block");
	
				this.resizeParent();
			} catch (e) {}
		},
		
		closeDetail : function(frmNo){
			var me = this;
	
			try{
				$("#trPrdReviewDetail"+frmNo).css("display", "block");
				$("#dvPrdReviewDetail"+frmNo).css("display", "none");
				$("#reviewDetailOpen"+frmNo).css("display", "block");
				$("#reviewDetailClose"+frmNo).css("display", "none");
	
				this.resizeParent();
			} catch (e) {}
		},
		
		writeReview: function() {
			var me = this;
	
			$('#writeReview', me.$reviewArea).click(function(e) {
				e.preventDefault();
				
				if (funcCheckIsLogin()){
					$.post('/product/SellerProductDetailAjax.tmall?method=getMyOrderInfoJSON',{prdNo : prdVar.prdNo},
							function(data) {
								var result = eval(data);
			
								if (result.resultCode == "success"){
									var url = '/browsing/OpenContReviewAction.tmall?method=getMyProfessionalWriteIframe';
									var param = "&ordNo="+result.myOrder.ordNo
									    param += "&ordPrdSeq=" + result.myOrder.ordPrdSeq
									    param += "&prdNo=" + result.myOrder.prdNo
									var _win = productCommon.launchCenter(url+param, "_blank", 660, 690);
									_win.focus();
								}else if(result.resultCode == "fail"){
									alert('해당상품 구매이력이 없거나, 이미 등록하셨습니다.\n다시 한번 확인해주세요.');
								}else{
									alert('해당상품 구매이력 조회 오류가 발생했습니다.\n잠시 후 다시 이용해 주십시오.');
								}
							}
						);
				} else {
					openLogin(1);
				}
	
				return false;
			});
			
			$('#myReview', me.$reviewArea).click(function(e) {
				window.open("http://www.11st.co.kr/order/UnAblePostScriptList.tmall");
				return false;
			});
		},
			
		bindEventToPaging: function() {
			var me = this;
	
			$('.s_paging_v2 #paging_first', me.$reviewArea).click(function(e) {
				me.processGoPage(e, $(this));
			});
			
			$('.s_paging_v2 #paging_prev', me.$reviewArea).click(function(e) {
				me.processGroupPage(e, $(this));
			});

			$('.s_paging_v2 #paging_page', me.$reviewArea).click(function(e) {
				me.processGoPage(e, $(this));
			});

			$('.s_paging_v2 #paging_next', me.$reviewArea).click(function(e) {
				me.processGroupPage(e, $(this));
			});
		},
		
		processGoPage: function(e, $evtElem) {
			var me = this;
	
			e.preventDefault();
	
			var page = $evtElem.attr("data-page");
	
			me.goPage(page);
			
			return false;
		},
		
		processGroupPage: function(e, $evtElem) {
			var me = this;

			e.preventDefault();

			var page = $evtElem.attr("data-page");
			var pageGroupNo = $evtElem.attr("data-pageGroupNo");
			
			$("input[name=page]").val(page);
			$("input[name=pageGroupNo]").val(pageGroupNo);
			parent.callEventFromIfram('anchorPosition', '#ifrmReview'); //2016-10-28 앵커 위치 수정
			$('#pageForm','.ifrm_prdc_review').submit();
		},
		
		searchTxtOption: function(isSearchType) {
			var me = this;
	
			var txtOpt = $("#searchText").val();
			if(txtOpt == "옵션검색"){
				$("#searchText").val("");
				txtOpt = "";
			}
	
			me.searchOption(txtOpt, "searchText", isSearchType);
			},
			searchOption: function(val, nm, isSearchType) {
				var me = this;
	
			$("input[name="+nm+"]").val(val);
	
			if(isSearchType) {
				$("input[name=searchType]").val('02');
			}else{
				$("input[name=searchType]").val('01');
			}
	
			me.goSearch('first', 1, '');
		},	
		
		goPage: function(page){
			$("#themeFilterStr").val('');
			$("input[name=page]").val(page);	
			parent.callEventFromIfram('anchorPosition', '#ifrmReview'); //2016-10-28 앵커 위치 수정
			$('#pageForm','.ifrm_prdc_review').submit();			
		},
		
		goSearch: function(page){
			$("input[name=page]").val(page);	
			$("input[name=pageGroupNo]").val(1);
			$('#pageForm','.ifrm_prdc_review').submit();			
		},
			
		resizeParent: function() {
			if (parent.document.getElementById("ifrmReview") == null) {
				return;
			}
	
			try {
				var thisFrame = parent.document.getElementById("ifrmReview");
				var userAgent = navigator.userAgent;
	
				thisFrame.style.height = "0px";
	
				if (userAgent.indexOf("MSIE") != -1 || userAgent.indexOf("Firefox") != -1) {
					thisFrame.style.height = (document.body.scrollHeight + 36) + "px";
				} else {
					thisFrame.style.height = (document.documentElement.scrollHeight + 36) + "px";
				}
			} catch (ex) {}
			
			parent.callEventFromIfram('layoutUpdate');
		},
		setThemeFilter: function(setType){
			var me	= this;
			if(setType == "init") {
				// 파라미터로 값 세팅
				var tempFilterStr = $("#themeFilterStr").val();
				if(tempFilterStr != null && tempFilterStr.length > 0) {
					var tmpFilterList	= tempFilterStr.split(",");
					if(tmpFilterList != null && tmpFilterList.length > 0) {
						for(var i=0; i<tmpFilterList.length; i++) {
							$("#themeFilterList > li").each(function(e){
								if($(this).attr("theme-value") == tmpFilterList[i]) {
									$(this).addClass("selected");
								}
							});
						}
					}
				}
				// 파라미터 값 세팅 끝
			}
			
			if($("#themeFilterList > li.selected").length == 0) {	// 전체 해제일 경우 첫 번째 하일라이트
				$("#themeFilterList > li:first").addClass("selected");
			} else {
				if($("#themeFilterList > li.selected").length == 1) {
					
				} else {
					if($("#themeFilterList > li:first").hasClass("selected")){
						$("#themeFilterList > li:first").removeClass("selected");
					}
				}
			}
			
			// 검색시 파라미터로 넘길값 세팅
			var paramThemeStr	= "";
			$("#themeFilterList > li.selected").each(function(e){
				if($(this).attr("theme-value").indexOf("전체") < 0) {
					paramThemeStr += $(this).attr("theme-value")+",";
				}
			});
			$("#themeFilterStr").val(paramThemeStr);
			// 검색시 파라미너로 넘길값 세팅 끝
			
			if(setType != "init") {
				me.goSearch('first', 1, '');
			}
		}		
	};	
	return productTotalReview;
}));