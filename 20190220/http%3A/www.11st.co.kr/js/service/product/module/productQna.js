/**
 * @method: Product Qna - productQna
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
        root.productQna = factory(
            root.jQuery,
            root.prdVar,
            root.productCommon
        );
    }
}(window || this, function($, prdVar, productCommon) {
	'use strict';
	
	var productQna = {
			
		init : function() {
			var _this = this;
			prevIdx :0	
			
			try{
				_this.resizeParent();
				
				parent.callEventFromIfram('layoutUpdate');
				
			if(prdVar.isMart == "false"){
				$("#selQnaDtlsCd").change(function(){
					_this.searchOption(this.value, "qnaDtlsCd");
				});
				
				$("#chkQnADtlsSecret").change(function(){
					_this.searchOption($(this).is(":checked") ?"Y":"N", "secretYn");
				});
				
				$("#chkQnADtlsMyQna").change(function(){
					_this.searchOption($(this).is(":checked") ?"Y":"N", "myQnaYn");
				});
			}
			if(prdVar.isMart == "true" && (prdVar.qnaDtlsCd != "" || prdVar.qnaList != "")){
				try {

					var $html = jQuery("html");

					if(jQuery.browser.version=="6.0"){
						$html.removeClass("fiexible_resize");
					}else{

						var adjustSize = function(){
							var isFlexible = true, lastB = true, tmp;
							var _class = $html.attr("class");
							if(jQuery(window).width() > 1220){
								if(_class === ""){
									$html.addClass("fiexible_resize");
								}
							} else {
								if(_class !== ""){
									$html.removeClass("fiexible_resize");
								}
							};
						}

						adjustSize();

						jQuery(window).bind("resize", function(){
							adjustSize();
						});
					}
				} catch(e) { }
			}
				if(prdVar.targetFrm != undefined && prdVar.targetFrm != '') {
					$('.txt_ellipsis').css('width', '350px');	// 표준상품 상세보기 전용
				}
			}catch(e){}
						
			$('.txt_ellipsis').click(function(e) {
				e.preventDefault();
				var $evtElem = $(this);
				var idx = $evtElem.attr("data-index");
				var brdInfoNo = $evtElem.attr("data-brdInfoNo");
				var subInfoNo = $evtElem.attr("data-subInfoNo");			
				try{					
					if($("#trQnqContDtl"+idx).css("display") == "none"){
						_this.showDetail(idx, brdInfoNo, subInfoNo);
					}
					else{
						_this.closeDetail(idx);
					}
					_this.prevIdx = idx;
				} catch (e) {
					// alert(e.message)
				}				
			});
			
			$('#write').click(function(e) {
				if ($("input[name=brdInfoClfNo]").val().length == 0) return;
	
				if (funcCheckIsLogin()){
					if(prdVar.isSnsMember == 'true' && prdVar.noMailMem == 'Y') {
						alert('이메일 주소가 없어, 상품 Q&A등록이 불가능합니다.\n고객센터로 문의해주세요 (1599-0110)');
					} else {
						var _win = window.open(prdVar.writeUrl, "prdQnAPopup","scrollbars=yes, toolbar=no, resizable=no, location=no, directories=no, menubar=no, width=650, height=600");
						_win.focus();
					}
				} else {
					openLogin(1);
				}
			});
			
			$('.updateQna').click(function(e) {
				var $evtElem = $(this);
				var contNo = $evtElem.attr("data-brdInfoNo");
				_this.updQna(contNo);
			});
			
			$('.deleteQna').click(function(e) {
				var $evtElem = $(this);
				var contNo	   = $evtElem.attr("data-brdInfoNo");
				var hgrnContNo = $evtElem.attr("data-hgrnkBrdInfoNo");
				var memNo 	   = $evtElem.attr("data-memberNumber");

				_this.delQna(contNo, hgrnContNo, memNo);
			});
			
			$('.replyQna').click(function(e) {
				var $evtElem = $(this);
				var idx		 = $evtElem.attr("data-index");

				_this.reply(idx);
			});	
			
			$('.cancel').click(function(e) {
				var $evtElem = $(this);
				var idx		 = $evtElem.attr("data-index");

				_this.cancelRepl(idx);
			});	
			
			$('.confirm').click(function(e) {
				var $evtElem = $(this);
				var idx		 = $evtElem.attr("data-index");
				var contNo	 = $evtElem.attr("data-brdInfoNo");

				_this.addRepl(idx, contNo);
			});	
			
			$('#faqCenter').click(function(e) {
				var url = "http://help.11st.co.kr/11st/faq/FaqIndex.jsp";
				window.open(url, "_blank");
			});
		
/*			$('.s_paging_v2 #paging_first', me.$reviewArea).click(function(e) {
				me.processGoPage(e, $(this));
			});*/
			
			$('.s_paging_v2 #paging_prev').click(function(e) {
				_this.processGoPage(e, $(this));
			});

			$('.s_paging_v2 #paging_page').click(function(e) {
				_this.processGoPage(e, $(this));
			});

			$('.s_paging_v2 #paging_next').click(function(e) {
				_this.processGoPage(e, $(this));
			});
			
/*			$('.s_paging_v2 #paging_last', me.$reviewArea).click(function(e) {
				me.processGoPage(e, $(this));
			});*/
			
			$('.btn_action #report').click(function(e) {
				var $evtElem = $(this);
				var contNo = $evtElem.attr("data-brdInfoNo");
				var clfCd = $evtElem.attr("data-clfCd");
				var contCd = $evtElem.attr("data-contCd");	
				
				_this.fnReportContent(contNo, clfCd, contCd);
			});
			
		},
		showDetail : function(idx, brdInfoNo, subInfoNo){
			try{
				$(".trQna").css("display", "none");
				$(".qna_expand").css("display", "none");
				$("#trQnqContDtl"+idx).css("display", (parent.isIE6 || parent.isIE7) ? "block" : "table-row");
				$("#dvQnqContDtl"+idx).css("display", (parent.isIE6 || parent.isIE7) ? "block" : "table-cell");
				this.resizeParent();
				if(this.prevIdx != idx){
					// 조회수 증가
					this.upReadCnt(brdInfoNo);
					if (subInfoNo > 0) 	this.upReadCnt(subInfoNo);
				}
			} catch (e) {
					// alert(e.message)
			}
		}, closeDetail : function(idx){
			try{
				$("#trQnqContDtl"+idx).css("display", "none");
				$("#dvQnqContDtl"+idx).css("display", "none");

				this.resizeParent();
			} catch (e) {
				// alert(e.message)
			}
		}
		, upReadCnt : function(brdInfoNo){	// 문의글 조회수 증가
			productCommon.callAjaxAsynch("/product/UnityBoardAction.tmall"
				, "method=updatePrdQnaCnt&brdInfoNo=" + brdInfoNo
				, function(returnVal){
					if (returnVal == "FAIL") {
						alert("조회수 증가에 실패하였습니다.");
					}
			});
		}
		, write : function(){	// QnA작성
			try{
				if ($("input[name=brdInfoClfNo]").val().length == 0) return;

				if (funcCheckIsLogin()){
					var url = '<c:url value="https://www.11st.co.kr/product/ProductQnaForm.tmall?method=insertProductQnAForm&isSSL=Y&hostUrl='+window.location.host+'&prdNo=" />' + $("input[name=brdInfoClfNo]").val();					
					var _win = window.open(url, "prdQnAPopup","scrollbars=no, toolbar=no, resizable=no, location=no, directories=no, menubar=no, width=650");
					_win.focus();
				} else {
					openLogin(1);
				}
			} catch (e) {
				//alert(e.message)
			}
		}
		, updQna : function(contNo){	// qna 수정
			try{
				//if ($("input[name=sellerMemId]").val().length == 0) return;

				if (funcCheckIsLogin()){
					var url = 'https://www.11st.co.kr/product/ProductQnaForm.tmall?method=updateProductQnAForm'
							+ "&prdNo="	+ $("input[name=brdInfoClfNo]").val()
							+ "&brdInfoNo=" + contNo
							+ "&isSSL=Y"
							+ "&curKeyNo=" + $("input[name=keyNo]").val()
							+ "&pageList=" + $("input[name=pageList]").val()
							+ "&curPage=" + $("input[name=curPage]").val()
							+ "&hostUrl=" + window.location.host;
					var _win = window.open(url, "prdQnaPopup", "scrollbars=no, toolbar=no, resizable=no, location=no, directories=no, menubar=no, width=650, height=620");
					_win.focus();
				} else {
					openLogin(1);
				}
			} catch (e) {
				//alert(e.message)
			}
		}
		, delQna : function(contNo, hgrnContNo, memNo){	// qna 삭제
			try {				
				//if ($("input[name=sellerMemId]").val().length == 0) return;
				if (!confirm("상품Q&A를 삭제하시겠습니까?")) return;
				
				var url = "/product/ProductQnaUpdate.tmall?method=deleteProductQnA";
				
				if (funcCheckIsLogin()){
					var param = {brdInfoClfNo : $("input[name=brdInfoClfNo]").val()
						, prdNo : $("input[name=brdInfoClfNo]").val()
						, brdInfoNo : contNo
						, hgrnkBrdInfoNo : hgrnContNo
						, flag : "prdQna"
						, curPage : 1};
					$.post(url, param, function(data){
						var $data = eval(data);
						alert($data.message);
			            if($data.result == "SUCCESS"){
			            	productQna.goPage('first', 1, '');
			            }
			        });
				} else {
					openLogin(1);
				}
			} catch (e) {
				//alert(e.message)
			}
		}
		, reply : function(idx){	// 답글달기 영역 노출
			if ($("#dvQnaRepl" + idx)){
				$("#dvQnaRepl" + idx).css("display", "block");
				this.resizeParent();
			}
		}
		, cancelRepl : function(idx){	// 답글달기 취소
			if ($("#dvQnaRepl" + idx)){
				$("#dvQnaRepl" + idx).css("display", "none");
				this.resizeParent();
			}
		}
		, addRepl : function(idx, contNo){
			try{
				if ($("input[name=sellerMemId]").val().length == 0) return;

				var txaObj = $("#txaQnaRepl" + idx);
				var txtObj = $("#txtQnaRepl" + idx);
				if (txtObj == undefined && txaObj == undefined) return;

				if (txaObj.val().trim().length == 0) {
					alert("내용을 입력하세요.");
					txaObj.focus();
					return;
				}

				if (!confirm("답변을 등록 하시겠습니까?")) return;

				var param = {brdInfoClfNo : $("input[name=brdInfoClfNo]").val()
					, prdNo : $("input[name=brdInfoClfNo]").val()
					, rplyClf : "02"
					, hgrnkBrdInfoNo : contNo
					, flag : "prdQna"
					, brdInfoSbjct : encodeURIComponent(txtObj.val())
					, brdInfoCont : encodeURIComponent(txaObj.val())};
				$.post('/product/ProductQnaReply.tmall?method=insertProductDetailQnAAnswer', param, function(data){
					var $data = eval(data);
					alert($data.message);
		            if($data.result == "SUCCESS"){
		            	location.reload();
		            }
		        });
			} catch (e) {
				//alert(e.message)
			}
		}
		,goPage : function(type, startNum, keyNo){
			$("input[name=pageTypCd]").val(type);
			$("input[name=curPage]").val(startNum);
			$("input[name=keyNo]").val(keyNo);

			pageForm.submit();
		}
		,searchOption : function(val, nm){
			$("input[name="+nm+"]").val(val);
			this.goPage('first', 1, '');		
		}
		,processGoPage: function(e, $evtElem) {
			e.preventDefault();
			
			var pageType = $evtElem.attr("data-pageType");
			var pageNum = $evtElem.attr("data-pageNum");
			var keyNo = $evtElem.attr("data-keyNo");

			this.goPage(pageType,pageNum,keyNo);

			return false;
		},
		// 신고하기
		fnReportContent : function(contNo, clfCd, contCd) {
			var url = "/community/AuthShoppingInfoAction.tmall?method=getContentsReporting&contNo="
				+ contNo
				+ "&contDclObjClfCd="
				+ clfCd
				+ "&contDclObjContCd="
				+ contCd;

			if (funcCheckIsLogin()) {
				var _win = productCommon.launchCenter(url, "contentReportPopup", 415, 490, "no");
				_win.focus();
			} else {
				openLogin(3, "", url, 415, 490, "Y");
			}
		},
		resizeParent : function(){
			if(prdVar.targetFrm != undefined && prdVar.targetFrm != '') {
				if (parent.document.getElementById(prdVar.targetFrm) == null)
					return;

				try {
					var thisFrame = parent.document.getElementById(prdVar.targetFrm);
					var height = "";
					if(prdVar.isMart || (prdVar.qnaList == "" && prdVar.qnaDtlsCd == "")){
						height = 0;
					}else{
						height = 34;
					}

					if (navigator.userAgent.indexOf("MSIE") != -1) {
						//thisFrame.style.height = "0px";
						thisFrame.style.height = document.body.scrollHeight + height + "px";
					} else if (navigator.userAgent.indexOf("Firefox") != -1) {
						//thisFrame.style.height = "0px";
						thisFrame.style.height = document.body.scrollHeight + height + "px";
					} else {
						//thisFrame.style.height = "0px";
						thisFrame.style.height = document.documentElement.scrollHeight + height + "px";
					}				
					
				} catch (ex) { }
			} else {
				if (parent.document.getElementById("ifrmQnA") == null)
					return;

				try {
					var thisFrame = parent.document.getElementById("ifrmQnA");
					var height = "";
					if(prdVar.isMart || (prdVar.qnaList == "" && prdVar.qnaDtlsCd == "")){
						height = 0;
					}else{
						height = 34;
					}
					
					if (navigator.userAgent.indexOf("MSIE") != -1) {
						thisFrame.style.height = "0px";
						thisFrame.style.height = document.body.scrollHeight + height + "px";
					} else if (navigator.userAgent.indexOf("Firefox") != -1) {
						thisFrame.style.height = "0px";
						thisFrame.style.height = document.body.scrollHeight + height + "px";
					} else {
						thisFrame.style.height = "0px";
						thisFrame.style.height = document.documentElement.scrollHeight + height + "px";
					}				
					
				} catch (ex) { }
			}

			//$("#ifrmQnA", parent.document).height(document.documentElement.scrollHeight);
		}
	};	
	return productQna;
}));
