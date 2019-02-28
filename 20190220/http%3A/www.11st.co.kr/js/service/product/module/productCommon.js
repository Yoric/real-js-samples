/**
 * @method: productCommon
 * @dependency: requireJS, jQuery
 */
(function(root, factory) {
	'use strict';
    if (typeof define === 'function' && define.amd) {
        define([
            'jquery'
        ], factory);
    } else {
        root.productCommon = factory(
            root.jQuery
        );
    }
}(window || this, function($) {
	'use strict';
	
	var prdVar;
	if(parent.productPrdInfo == undefined){
		prdVar = productPrdInfo;
	}else{
		prdVar = parent.productPrdInfo;
	}
	var prdLogVar;
	if(parent.productRakeLogInfo == undefined) {
		prdLogVar 	= {
						groupProductCategoryNo : '',
						groupProductNo : '',
						groupFirstViewPrdNo : ''
					};
	} else {
		prdLogVar	= parent.productRakeLogInfo;
	}
	
	var productCommon = {
    		
		init : function(){
			//리뷰 , QNA Init
			if(prdVar.prdNo == null || prdVar.prdNo.length == ""){
				return;
			}else{
				$("#ifrmReview").attr(
						"src",
						"/product/SellerProductDetail.tmall?method=getProductReviewList&prdNo="
						+ prdVar.prdNo
						+ "&page=1&pageTypCd=first&reviewDispYn="
						+ prdVar.reviewDispYn + "&isPreview="
						+ prdVar.isPreview + "&reviewOptDispYn="
						+ prdVar.reviewOptDispYn
						+ "&optSearchBtnAndGraphLayer=Y&reviewBottomBtn=Y&openDetailContents=Y&pageSize=10"
						+ "&isIgnoreAuth=false"
						+ "&lctgrNo="+prdVar.ldispCtgrNo
						+ "&leafCtgrNo="+prdLogVar.groupProductCategoryNo
						+ "&groupProductNo="+prdLogVar.groupProductNo
						+ "&groupFirstViewPrdNo="+prdLogVar.groupFirstViewPrdNo
						+ "&selNo="+prdVar.selMnbdNo
				);
				
				var storeNo = "";
				if(prdVar.isAuth == "true"){ 
					storeNo = prdVar.storeNo;
				}
				
				$("#ifrmQnA").attr("src",
						"/product/SellerProductDetail.tmall?method=getProductQnAList&brdInfoClfNo="
						+ prdVar.prdNo + "&curPage=1&isMart="+prdVar.isMart+"&storeNo="
						+ storeNo + "&martNo=" + prdVar.martNo
						+ "&pageTypCd=first&sellerMemId="
						+ prdVar.sellerId + "&ldispCtgrNo="
						+ prdVar.ldispCtgrNo
						+ "&isSohoPrd="+prdVar.isSohoPrd
						+ "&isTour="+prdVar.isTour
						+ "&isRenewYn=Y");
			}
					
			// YES24 미리보기
			if(prdVar.preVwCd !=""){
				$('#yes24PreVw').click(function() {
					var pL = parseInt((window.screen.width-1024)/2); 						// 해상도가로
					var pT = parseInt((window.screen.height-768)/2); 						// 해상도세로
					var pProp = 'width=1024,height=768,scrollbars=no,resizable=no,left=' + pL + ',top=' + pT + ',directories=no,status=no,menubar=no';
					var newWin = window.open( 'http://www.yes24.com/24/viewer/preview11st/'+prdVar.preVwCd , 'YESPREVW' , pProp );
					if (!newWin){
						alert('차단된 팝업창을 허용해 주세요.');
					} else{
						newWin.focus();
					}
					return false;
				});
			}
			
			// 상품리뷰 클릭
			$('a[name=prdReview]').click(function() {
				$('#reviewTo[href="#tabProductReview"]').trigger('click');
				return false;
			});
			
			//브랜드샵 바로가기
			$('#brandShop').click(function() {
				location.href=$(this).attr("brandShoplinkUrl");
				return false;
			});
			
			//리뷰 검색 엔터키
			$("#contentsSearch").keydown(function(key) {
				if (key.keyCode == 13) {
					productCommon.fnContentsSearch();
				}
			});
		    
			//리뷰검색 클릭
			$('#contentsSearchBtn').click(function() {
				productCommon.fnContentsSearch();
			});
			
			/****** HOT클릭/카테고리 초이스 Start *******/
			
			// 기획전 배너
			$("#btnOpenCMplan").click(function(url) {
				if (url == "")
					return;
				if (url == undefined)
					return;

				var url = prdVar.action_context_url + prdVar.planDisplayUrl;
				var win = window.open(url, "openCMplan");

				if (win.focus()) {
					win.focus();
				}
				doCommonStat('PDP0191');
				return false;
			});
			
			//HOT클릭/카테고리초이스 클릭
			$("input[name=btnRecomm]").click(function() {
				var prdNo	 = $(this).attr("data-prdNo");
				var trcNo    = $(this).attr("data-trcNo");
				var typGubn  = $(this).attr("data-typGubn");
				var areaGubn = $(this).attr("data-areaGubn");
				var CPCAd 	 = $(this).attr("data-CPCAd");
				
				doCommonStat('PDP0303');//영역코드

				if(trcNo > 0) {
					// 광고전환통계개선(P1206004)으로 추가 (2013.02.04)
					ad_headerCommonJs.util.instance.ConversionCookieQueue.add(trcNo, prdNo, (typGubn + '' + areaGubn));
					stck(typGubn, areaGubn, trcNo);

					// CPC과금
					if(CPCAd) {
						adSave.ins.clickCPC(typGubn, areaGubn, trcNo);
					}
				}
				return false;
			});
			
			/****** 카테고리 초이스 End *******/
			
		},
			
		// 비동기식
		callAjaxAsynch : function(url, params, callBack) {
			var pageRequest = false; // ajax object를 위한 변수.

			if (!pageRequest && typeof XMLHttpRequest != 'undefined')
				pageRequest = new XMLHttpRequest();

			if (pageRequest) {
				// pageRequest가 true인 경우만.
				try {
					var isAsynch = true;
					if (params != '') {
						pageRequest.open('POST', url, isAsynch);
						pageRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");
						pageRequest.setRequestHeader("Content-length", params.length);
						pageRequest.setRequestHeader("Connection", "close");

						pageRequest.send(params);
					} else {
						pageRequest.open('GET', url, isAsynch);
						pageRequest.send(null);
					}

					pageRequest.onreadystatechange = function() {
						if (pageRequest.readyState == 4) {
							var returnVal = 'FAIL';
							if (pageRequest.status == 200) {
								returnVal = pageRequest.responseText;
							}

							if (typeof (callBack) == "function") {
								callBack(returnVal);
							} else if (typeof (callBack) == "string") {
								if (callBack != '') {
									eval(callBack + "('" + returnVal + "')");
								}
							}
						}
					};
				} catch (e) {
					alert(e);
					var returnVal = 'FAIL';

					if (typeof (callBack) == "function") {
						callBack(returnVal);
					} else if (typeof (callBack) == "string") {
						if (callBack != '') {
							eval(callBack + "('" + returnVal + "')");
						}
					}
				}
			}
		},
	
		//컨텐츠 검색 	
		fnContentsSearch : function() {
			var url = "http://search.11st.co.kr/ContentsSearchAction.tmall?method=getContentsSearch&kwd=";
			var keyword = document.getElementById("contentsSearch").value;

			if (keyword == "") {
				alert("검색어를 입력하세요.");
				document.getElementById("contentsSearch").value = "";
				document.getElementById("contentsSearch").focus();
			} else {
				keyword = keyword.replaceAll("<","&lt").replaceAll(">","&gt");
				doCommonStat("CRPI001");
				if (keyword == "상품 리뷰나 추천 상품이 궁금하세요? 여기에서 검색해 보세요. 예)디카 추천") {
					window.open("http://search.11st.co.kr/ContentsSearchAction.tmall?method=getContentsSearch&targetTab=CONTENTS&isGnb=Y&prdType=&category=&cmd=&pageSize=30&lCtgrNo=&mCtgrNo=&sCtgrNo=&dCtgrNo=&fromACK=&semanticFromGNB=&gnbTag=CT&schFrom=&tagetTabNm=%C4%C1%C5%D9%C3%F7%B0%CB%BB%F6&kwd=%B5%F0%C4%AB+%C3%DF%C3%B5&adUrl=&adKwdTrcNo=1201210181667423781");
				} else {
					keyword = encodeKwd(trim(keyword));
					// FireFox에서 인코딩이 깨져서 수정!
					if (navigator.userAgent.indexOf("Firefox") != -1)
						keyword = escape(encodeURIComponent(keyword));
					window.open(url + keyword);
				}
			}
		},
		
		//오픈팝업 
		openPopup : function(url, _w, _h) {
			window.open(url, "_popup", "width=" + _w + ",height=" + _h + ",scrollbars=no,status=no,location=no");
		},
		
		launchCenter : function(url, name, width, height, scroll) {
			if (scroll == undefined)
				scroll = "no";

			var str = "height=" + height + ",innerHeight=" + height;
			str += ",width=" + width + ",innerWidth=" + width;
			str += ",status=no, resizable=no, menubar=no, toolbar=no, location=no, directories=no, scrollbars=" + scroll;

			if (window.screen) {
				var ah = screen.availHeight - 30;
				var aw = screen.availWidth - 10;

				var xc = (aw - width) / 2;
				var yc = (ah - height) / 2;

				str += ",left=" + xc + ",screenX=" + xc;
				str += ",top=" + yc + ",screenY=" + yc;
			}

			return window.open(url, name, str);
		}

	};
	return productCommon;
}));
