/**
 * @method: googleAnalytics
 * @dependency: requireJS, jQuery, prdVar
 */
(function(root, factory) {
	'use strict';
    if (typeof define === 'function' && define.amd) {
        define([
            'jquery'
        ], factory);
    } else {
        root.googleAnalytics = factory(
            root.jQuery
        );
    }
}(window || this, function($) {
	'use strict';

	var googleAnalytics = {


		$win : $(window),

		eventCategory : [
			"PC_상품상세"			//0
		],
		eventAction : [
			"로케이션바"						//0
			,"기획전 G/W BI배너"				//1
			,"브랜드샵 로고"					//2
			,"상품 이미지"						//3
			,"리뷰(상단)"						//4
			,"좋아요"							//5
			,"공유하기"
			,"대표 이미지 하단 배너(광고)"
			,"쇼킹딜 ICON"
			,"가격 정보"
			,"카테고리 초이스"					//10
			,"혜택/배송 정보"
			,"상단 옵션"
			,"상단 옵션 레이어"
			,"상품 기본정보 하단 띠배너(마케팅)"
			,"판매자 정보"						//15
			,"미니몰 타이틀 배너"
			,"탭 클릭"
			,"하단 옵션 열기/닫기"
			,"눈도장"
			,"하단 옵션"						//20
			,"상품정보 탭 영역"
			,"리뷰 탭 영역"
			,"Q&A 탭 영역"
			,"판매자정보 탭 영역"
			,"추천상품 영역"					//25
		],

		init : function() {
			this.bind();
			
			
			/** GA태깅 S*/
			
			// PC_상품상세 > 가격 정보 > 전체보기
			$("#discountDetail").on('click', function(){
				$(window).trigger("callGaEvent","0;9;전체보기");
			});
			
			// PC_상품상세 > 혜택/배송 정보 > 복수구매 상세보기
			$("#detailViewPurchase > a").on('click', function(){
				$(window).trigger("callGaEvent","0;11;복수구매 상세보기");
			});
			
			// PC_상품상세 > 혜택/배송 정보 > 중복할인쿠폰(광고)
			$("#partnerBenefitTxt > a").on('click', function(){
				$(window).trigger("callGaEvent","0;11;중복할인쿠폰(광고)");
			});
			
			// PC_상품상세 > 혜택/배송 정보 > 이벤트(마케팅)
			$("#selPrdDtlEvtBtn").on('click', function(){
				$(window).trigger("callGaEvent","0;11;이벤트(마케팅)");
			});
			
			// PC_상품상세 > 혜택/배송 정보 > 무이자 최대 NN개월(마케팅)
			$("[name=selPrdDtlNoInterestBtn]").on('click', function(){
				$(window).trigger("callGaEvent","0;11;무이자 최대 NN개월(마케팅)");
			});
			
			// PC_상품상세 > 혜택/배송 정보 > 카드할인혜택(마케팅)
			$("#cardList").on('click', function(){
				$(window).trigger("callGaEvent","0;11;카드할인혜택(마케팅)");
			});
			
			// PC_상품상세 > 혜택/배송 정보 > 카드추가할인+최대 11% 쇼핑혜택
			$('.btn_evnt_link > a').on('click', function(){
				$(window).trigger("callGaEvent","0;11;카드추가할인+최대 11% 쇼핑혜택");
			});
			
			// PC_상품상세 > 혜택/배송 정보 > 결재방식 선택
			$('#sel_delivery').on('click', function(){
				$(window).trigger("callGaEvent","0;11;결재방식 선택");
			});
			
			// PC_상품상세 > 혜택/배송 정보 > 결재방식 선택 > [해외배송]( 주문시결제(선결제) or 상품수령시 결제(착불) )
			$('#sel_delivery > option').on('selected', function(){
				var globalStr = ["결재방식 선택>주문시결제(선결제)", "결재방식 선택>상품수령시 결제(착불)"];
				if('${isGlobalAddr}'){
					globalStr[0] = "해외배송>결재방식 선택>주문시결제(선결제)";
				}else{
					globalStr[1] = "해외배송>결재방식 선택>상품수령시 결제(착불)";
				}
				if($(this).val() == '01'){
					$(window).trigger("callGaEvent","0;11;"+globalStr[0]);
				}else{
					$(window).trigger("callGaEvent","0;11;"+globalStr[1]);
				}
			});
			
			// PC_상품상세 > 혜택/배송 정보 > 배송불가지역 조회
			$('.option_select > [name=undeliverableLocalPop]').on('click', function(){
				$(window).trigger("callGaEvent","0;11;배송불가지역 조회");
			});
			
			// PC_상품상세 > 혜택/배송 정보 > 배송지변경
			$('#deliverChange').on('click', function(){
				$(window).trigger("callGaEvent","0;11;배송지변경");
			});
			
			// PC_상품상세 > 혜택/배송 정보 > 배송안내
			$('#deliverGuide').on('click', function(){
				$(window).trigger("callGaEvent","0;11;배송안내");
			});
			
			// PC_상품상세 > 혜택/배송 정보 > 도착예정일
			$('#deliveryChkPop').on('click', function(){
				$(window).trigger("callGaEvent","0;11;도착예정일");
			});
			
			// PC_상품상세 > 혜택/배송 정보 > 해외배송>꼭 확인하세요
			$('#deliverPrice').on('click', function(){
				$(window).trigger("callGaEvent","0;11;해외배송>꼭 확인하세요");
			});
			
			// PC_상품상세 > 혜택/배송 정보 > 사은품
			$('#detailViewGift').on('click', function(){
				$(window).trigger("callGaEvent","0;11;사은품");
			});
			
			// PC_상품상세 > 혜택/배송 정보 > 희망후원금
			$('#detailViewHopeDonation').on('click', function(){
				$(window).trigger("callGaEvent","0;11;희망후원금");
			});
			
			// PC_상품상세 > 혜택/배송 정보 > 플로팅 배너(마케팅)
			$('#floatingRealy').on('mousedown', function(){
				$(window).trigger("callGaEvent","0;11;플로팅 배너(마케팅)");
			});
			
			// PC_상품상세 > 혜택/배송 정보 > 마트 유형 별도 케이스>로그인 버튼
			$('#detailViewMartLogin').on('click', function(){
				$(window).trigger('callGaEvent', '0;11;마트 유형 별도 케이스>로그인 버튼');
			});
			
			// PC_상품상세 > 혜택/배송 정보 > 마트 유형 별도 케이스>배송지 선택
			$('#detailViewMartDelivery').on('click', function(){
				$(window).trigger('callGaEvent', '0;11;마트 유형 별도 케이스>배송지 선택');
			});
			
			// PC_상품상세 > 혜택/배송 정보 > NOW 배송
			$('.now_delivery').children().find('button').on('click', function(){
				$(window).trigger('callGaEvent', '0;11;NOW 배송');
			});
			
			// PC_상품상세 > 상품 기본정보 하단 띠배너(마케팅)
			$('.prdc_banner5 > a').on('click', function(){
				$(window).trigger("callGaEvent","0;14;");
			});
			
			// PC_상품상세 > 미니몰 타이틀 배너
			$('.prdc_banner_bt01 > a').on('click', function(){
				$(window).trigger("callGaEvent","0;16;");
			});
			
			// PC_상품상세 > 카테고리 초이스 > ( 하단 배너1(마케팅) or 하단 배너2(광고) )
			$('.right_banner > a').on('click', function(){
				if(jQuery(this).attr('id') == 'btnOpenCMplan'){
					$(window).trigger("callGaEvent","0;10;하단 배너1(마케팅)");
				}else{
					$(window).trigger("callGaEvent","0;10;하단 배너2(광고)");
				}
			});
			
			// PC_상품상세 > 대표 이미지 하단 배너(광고)
			$('.prdc_banner > a').on('click', function(){
				$(window).trigger("callGaEvent","0;7;");
			});
			
			// PC_상품상세 > 하단 옵션 열기/닫기
			$('.prdc_ezop_btn > .op_btn').on('click', function(){
				$(window).trigger("callGaEvent","0;18;");
			});
			
			// PC_상품상세 > 로케이션바 > ( 대카테고리 or 중카테고리 or 소카테고리 or 세카테고리)
			$("[id*=headSel_]").on('click', function(){
				var cateArr = ["대카테고리", "중카테고리", "소카테고리", "세카테고리"];
				var layerIndex = $(this).attr('id').split("_")[1]-1;
				$(window).trigger("callGaEvent","0;0;"+cateArr[layerIndex]);
			});
			
			// PC_상품상세 > 공유하기
			$('.share > button').on('click', function(){
				$(window).trigger("callGaEvent","0;6;");
			});
			
			// PC_상품상세 > 기획전 G/W BI배너 > BI 이미지 / 텍스트
			$('.prdc_special_v2 > a, .prdc_special_v2 > p > a').on('click', function(){
				$(window).trigger("callGaEvent","0;1;BI 이미지 / 텍스트");
			});
			
			// PC_상품상세 > 기획전 G/W BI배너 > BEST 100 바로가기
			$('.prdc_special_v2 > div > a:eq(0)').on('click', function(){
				$(window).trigger("callGaEvent","0;1;BEST 100 바로가기");
			});
			
			// PC_상품상세 > 기획전 G/W BI배너 > 전문관 바로가기
			$('.prdc_special_v2 > div > a:eq(1)').on('click', function(){
				$(window).trigger("callGaEvent","0;1;전문관 바로가기");
			});
			
			// PC_상품상세 > 판매자 정보 > 판매자정보>셀러명
			$('.seller_nickname').on('click', function(){
				$(window).trigger("callGaEvent","0;15;판매자정보>셀러명");
			});
			
			// PC_상품상세 > 판매자 정보 > 배송비 절약
			$('#deleverySave').on('click', function(){
				$(window).trigger("callGaEvent","0;15;배송비 절약");
			});
			
			// PC_상품상세 > 판매자 정보 > 단골등록
			$('#favorShop').on('click', function(){
				$(window).trigger("callGaEvent","0;15;단골등록");
			});
			
			// PC_상품상세 > 판매자 정보 > 전체보기
			$('#selMiniCtgr').on('click', function(){
				$(window).trigger("callGaEvent","0;15;전체보기");
			});
			
			// PC_상품상세 > 판매자 정보 > 판매자의 인기 상품
			$('.prdc_popular').children().find('.ui_templateContent a').on('click', function(){
				$(window).trigger("callGaEvent","0;15;판매자의 인기 상품");
			});
			
			// PC_상품상세 > 판매자 정보 > 미니몰 바로가기
			$('.seller_wrap #goMinimall').on('click', function(){
				$(window).trigger("callGaEvent","0;15;미니몰 바로가기");
			});
			
			// PC_상품상세 > 탭 클릭 > (상품정보 or 상품리뷰 or Q&A or 판매자정보)
			$('.prdc_tab li').on('click', function(){
				if($(this).index() == 0){
					$(window).trigger("callGaEvent","0;17;상품정보");
				}else if($(this).index() == 1){
					$(window).trigger("callGaEvent","0;17;상품리뷰");
				}else if($(this).index() == 2){
					$(window).trigger("callGaEvent","0;17;Q&A");
				}else{
					$(window).trigger("callGaEvent","0;17;판매자정보");
				}
			});
			
			// PC_상품상세 > 상품정보 탭 영역 > 이 상품과 함께 본 상품
			$('.together_wrap a').on('click', function(){
				$(window).trigger("callGaEvent","0;21;이 상품과 함께 본 상품");
			});
			
			// PC_상품상세 > 상품정보 탭 영역 > 지점정보>전체보기
			$('.store_info a').on('click', function(){
				$(window).trigger("callGaEvent","0;21;지점정보>전체보기");
			});
			
			// PC_상품상세 > 상품정보 탭 영역 > 지점정보>지도 보기
			$('.store_tb a').on('click', function(){
				$(window).trigger("callGaEvent","0;21;지점정보>지도 보기");
			});
			
			// PC_상품상세 > 리뷰 탭 영역 > 띠배너(광고)
			$('.prdc_cont_banner_2 > a').on('click', function(){
				$(window).trigger("callGaEvent","0;22;띠배너(광고)");
			});
			
			// PC_상품상세 > 리뷰 탭 영역 > 옵션검색
			$('[name=detailViewSearchBtn]').on('click', function(){
				$(window).trigger("callGaEvent","0;22;옵션검색");
			});
			
			// PC_상품상세 > 리뷰 탭 영역 > 평점필터
			$('#detailViewGrade').on('click', function(){
				$(window).trigger("callGaEvent","0;22;평점필터");
			});
			
			// PC_상품상세 > 리뷰 탭 영역 > 평점필터>( 평점전체, 별(5), 별(4), 별(3), 별(2), 별(1) )
			$('[name=pntValue]').on('click', function(){
				var pntValueId = $(this).attr("id");
				if(pntValueId == "star"){
					$(window).trigger("callGaEvent","0;22;평점필터>평점전체");
				}else if(pntValueId == "star05"){
					$(window).trigger("callGaEvent","0;22;평점필터>별(5)");
				}else if(pntValueId == "star04"){
					$(window).trigger("callGaEvent","0;22;평점필터>별(4)");
				}else if(pntValueId == "star03"){
					$(window).trigger("callGaEvent","0;22;평점필터>별(3)");
				}else if(pntValueId == "star02"){
					$(window).trigger("callGaEvent","0;22;평점필터>별(2)");
				}else{
					$(window).trigger("callGaEvent","0;22;평점필터>별(1)");
				}
			});
			
			// PC_상품상세 > 리뷰 탭 영역 > 종류필터>( 리뷰전체, 동영상리뷰, 포토리뷰, 일반리뷰 )
			$('#reviewType').on('change', function(){
				$(window).trigger("callGaEvent","0;22;종류필터");
				var pntValueId = $(this).val();
				if(pntValueId == ""){
					$(window).trigger("callGaEvent","0;22;리뷰전체");
				}else if(pntValueId == "03"){
					$(window).trigger("callGaEvent","0;22;동영상리뷰");
				}else if(pntValueId == "02"){
					$(window).trigger("callGaEvent","0;22;포토리뷰");
				}else{
					$(window).trigger("callGaEvent","0;22;일반리뷰");
				}
			});
			
			
			// PC_상품상세 > 리뷰 탭 영역 > 정렬필터>( 11번가 추천순, 최신 등록순 )
			$('.detailViewReviewSortCd').on('change', function(){
				$(window).trigger("callGaEvent","0;22;정렬필터");
				var pntValueId = $(this).val();
				if(pntValueId == "01"){
					$(window).trigger("callGaEvent","0;22;정렬필터>11번가 추천순");
				}else{
					$(window).trigger("callGaEvent","0;22;정렬필터>최신 등록순");
				}
			});
			
			// PC_상품상세 > 리뷰 탭 영역 > 좋아요
			$('.review_list .good').on('click', function(){
				$(window).trigger("callGaEvent","0;22;좋아요");
			});
			
			// PC_상품상세 > 리뷰 탭 영역 > 싫어요
			$('.review_list .bad').on('click', function(){
				$(window).trigger("callGaEvent","0;22;싫어요");
			});
			
			// PC_상품상세 > 리뷰 탭 영역 > 신고하기
			$('.review_list #report').on('click', function(){
				$(window).trigger("callGaEvent","0;22;신고하기");
			});
			
			// PC_상품상세 > 리뷰 탭 영역 > 내용 더보기
			$('.prdc_more > button').on('click', function(){
				$(window).trigger("callGaEvent","0;22;내용 더보기");
			});
			
			// PC_상품상세 > 리뷰 탭 영역 > 판매자 상품리뷰 전체
			$('#detailViewReviewAll').on('click', function(){
				$(window).trigger("callGaEvent","0;22;판매자 상품리뷰 전체");
			});
			
			// PC_상품상세 > 리뷰 탭 영역 > 내가 작성한 상품리뷰 전체
			$('#myReview').on('click', function(){
				$(window).trigger("callGaEvent","0;22;내가 작성한 상품리뷰 전체");
			});
			
			// PC_상품상세 > 리뷰 탭 영역 > 상품 리뷰 작성
			$('#writeReview').on('click', function(){
				$(window).trigger("callGaEvent","0;22;상품 리뷰 작성");
			});
			
			// PC_상품상세 > 리뷰 탭 영역 > 페이지 이동
			$('#tabProductQnA #paging_page').on('click', function(){
				$(window).trigger("callGaEvent","0;22;페이지 이동");
			});
			
			// PC_상품상세 > 리뷰 탭 영역 > 컨텐츠 검색
			$('#contentsSearch, #contentsSearchBtn').on('click', function(){
				$(window).trigger("callGaEvent","0;22;컨텐츠 검색");
			});
			
			// PC_상품상세 > Q&A 탭 영역 > 판매자 문의(상단)
			$('.prdc_qna .btn_top_wrap #write').on('click', function(){
				$(window).trigger("callGaEvent","0;23;판매자 문의(상단)");
			});
			
			// PC_상품상세 > Q&A 탭 영역 > 고객센터 문의(상단)
			$('.prdc_qna .btn_top_wrap #faqCenter').on('click', function(){
				$(window).trigger("callGaEvent","0;23;고객센터 문의(상단)");
			});
			
			// PC_상품상세 > Q&A 탭 영역 > 나의 문의 필터
			$('#chkQnADtlsMyQna').on('click', function(){
				$(window).trigger("callGaEvent","0;23;나의 문의 필터");
			});
			
			// PC_상품상세 > Q&A 탭 영역 > 비밀글 제외 필터
			$('#chkQnADtlsSecret').on('click', function(){
				$(window).trigger("callGaEvent","0;23;비밀글 제외 필터");
			});
			
			// PC_상품상세 > Q&A 탭 영역 > 문의 유형 필터( 문의유형(전체), 상품, 배송, 반품/취소, 교환/변경, 기타 )
			$('#selQnaDtlsCd').on('change', function(){
				$(window).trigger("callGaEvent","0;23;문의유형 필터");
				var selQnaDtlsCdStr = $(this).val();
				if(selQnaDtlsCdStr == ""){
					$(window).trigger("callGaEvent","0;23;문의유형 필터>문의유형(전체)");
				}else if(selQnaDtlsCdStr == "01"){
					$(window).trigger("callGaEvent","0;23;문의유형 필터>상품");
				}else if(selQnaDtlsCdStr == "02"){
					$(window).trigger("callGaEvent","0;23;문의유형 필터>배송");
				}else if(selQnaDtlsCdStr == "03"){
					$(window).trigger("callGaEvent","0;23;문의유형 필터>반품/취소");
				}else if(selQnaDtlsCdStr == "04"){
					$(window).trigger("callGaEvent","0;23;문의유형 필터>교환/변경");
				}else{
					$(window).trigger("callGaEvent","0;23;문의유형 필터>기타");
				}
			});
			
			// PC_상품상세 > Q&A 탭 영역 > 내용 펼치기
			$('.prdc_qna #showCloseDetail').on('click', function(){
				$(window).trigger("callGaEvent","0;23;내용 펼치기");
			});
			
			// PC_상품상세 > Q&A 탭 영역 > 수정
			$('.prdc_qna .updateQna').on('click', function(){
				$(window).trigger("callGaEvent","0;23;수정");
			});
			
			// PC_상품상세 > Q&A 탭 영역 > 삭제
			$('.prdc_qna .deleteQna').on('click', function(){
				$(window).trigger("callGaEvent","0;23;삭제");
			});
			
			// PC_상품상세 > Q&A 탭 영역 > 답변달기
			$('.prdc_qna .replyQna').on('click', function(){
				$(window).trigger("callGaEvent","0;23;답변달기");
			});
			
			// PC_상품상세 > Q&A 탭 영역 > 신고하기
			$('.prdc_qna #report').on('click', function(){
				$(window).trigger("callGaEvent","0;23;신고하기");
			});
			
			// PC_상품상세 > Q&A 탭 영역 > 고객센터 문의(하단)
			$('.prdc_qna .btn_btm_wrap #faqCenter').on('click', function(){
				$(window).trigger("callGaEvent","0;23;고객센터 문의(하단)");
			});
			
			// PC_상품상세 > Q&A 탭 영역 > 상품문의하기
			$('.prdc_qna .btn_btm_wrap #write').on('click', function(){
				$(window).trigger("callGaEvent","0;23;상품문의하기");
			});
			
			// PC_상품상세 > Q&A 탭 영역 > 페이지 이동
			$('.prdc_qna #paging_page').on('click', function(){
				$(window).trigger("callGaEvent","0;23;페이지 이동");
			});
			
			// PC_상품상세 > 판매자정보 탭 영역 > 반품/교환정보>전세계배송 반품/교환>자세히보기
			$('#returnDetailView').on('click', function(){
				$(window).trigger("callGaEvent","0;24;반품/교환정보>전세계배송 반품/교환>자세히보기");
			});
			
			// PC_상품상세 > 판매자정보 탭 영역 > 빠른 반품>지정반품택배
			$('.return_process #returnLink0').on('click', function(){
				$(window).trigger("callGaEvent","0;24;반품>지정반품택배");
			});
			
			// PC_상품상세 > 판매자정보 탭 영역 > 반품>어디서 신청하나요
			$('#whrereRrturn').on('click', function(){
				$(window).trigger("callGaEvent","0;24;반품>어디서 신청하나요");
			});
			
			// PC_상품상세 > 판매자정보 탭 영역 > 반품>지정반품택배란
			$('.return_process #returnLink1').on('click', function(){
				$(window).trigger("callGaEvent","0;24;반품>지정반품택배란");
			});
			
			// PC_상품상세 > 판매자정보 탭 영역 > 교환>어디서 신청하나요
			$('#whereChange').on('click', function(){
				$(window).trigger("callGaEvent","0;24;교환>어디서 신청하나요");
			});
			
			// PC_상품상세 > 판매자정보 탭 영역 > 교환>지정반품택배란
			$('.return_process #returnLink2').on('click', function(){
				$(window).trigger("callGaEvent","0;24;교환>지정반품택배란");
			});
			
			// PC_상품상세 > 판매자정보 탭 영역 > 판매자 정보>서비스 가입사실 확인
			$('#servicesJoinConfirm').on('click', function(){
				$(window).trigger("callGaEvent","0;24;판매자 정보>서비스 가입사실 확인");
			});
			
			// PC_상품상세 > 판매자정보 탭 영역 > 주의사항>11번가 지적재산 보호센터
			$('#previliagePrd').on('click', function(){
				$(window).trigger("callGaEvent","0;24;주의사항>11번가 지적재산 보호센터");
			});
			
			// PC_상품상세 > 판매자정보 탭 영역 > 주의사항>11번가 안전거래 센터
			$('#reportPrdGo, #reportProductPop').on('click', function(){
				$(window).trigger("callGaEvent","0;24;주의사항>11번가 안전거래 센터");
			});
			
			// PC_상품상세 > 판매자정보 탭 영역 > 주의사항>11번가 위해상품정보검색
			$('#safeProdInfoSearch').on('click', function(){
				$(window).trigger("callGaEvent","0;24;주의사항>11번가 위해상품정보검색");
			});
			
			// PC_상품상세 > 판매자정보 탭 영역 > 주의사항>사이버범죄 예방정보 안내
			$('#cyberPreventInfo').on('click', function(){
				$(window).trigger("callGaEvent","0;24;주의사항>사이버범죄 예방정보 안내");
			});
			
			// PC_상품상세 > 추천상품 영역 > 동일상품 가격비교> ( 최저가 상품 구매 or 가격비교 )
			$('.prdc_together .box_together .r_btn a').on('click', function(){
				var index = $(this).index();
				if(index == 0){
					$(window).trigger("callGaEvent","0;25;동일상품 가격비교>최저가 상품 구매");
				}else{
					$(window).trigger("callGaEvent","0;25;동일상품 가격비교>가격비교");ㅣ
				}
			});
			
			// PC_상품상세 > 추천상품 영역 > 동일상품 가격비교>리스팅
			$('.prdc_together .sameprd_list a').on('click', function(){
				$(window).trigger("callGaEvent","0;25;동일상품 가격비교>리스팅");
			});
			
			// PC_상품상세 > 추천상품 영역 > 카테고리 인기상품
			$('#prdc_cate_popular .viewtype .box_pd a').on('click', function(){
				$(window).trigger("callGaEvent","0;25;카테고리 인기상품");
			});
			
			// PC_상품상세 > 추천상품 영역 > 브랜드 인기상품> ( 같은 브랜드 인기상품 탭 or 다른 브랜드 인기상품 탭 )
			$('.prdc_compar .tab_compar li').on('click', function(){
				var index = $(this).index();
				if(index == 0){
					$(window).trigger("callGaEvent","0;25;브랜드 인기상품>같은 브랜드 인기상품 탭");
				}else{
					$(window).trigger("callGaEvent","0;25;브랜드 인기상품>다른 브랜드 인기상품 탭");
				}
			});
			
			// PC_상품상세 > 추천상품 영역 > 브랜드 인기상품>리스팅
			$('.prdc_compar .comComparBox .viewtype .box_pd a').on('click', function(){
				$(window).trigger("callGaEvent","0;25;브랜드 인기상품>리스팅");
			});
			
			// PC_상품상세 > 추천상품 영역 > 사람들이 많이 찾는 쇼킹딜 상품
			$('.prdc_recom .viewtype .box_pd a').on('click', function(){
				$(window).trigger("callGaEvent","0;25;사람들이 많이 찾는 쇼킹딜 상품");
			});
			
			// PC_상품상세 > 추천상품 영역 > 함께 구매하면 좋은 상품
			$('#prdc_rel_prd .viewtype .box_pd a').on('click', function(){
				$(window).trigger("callGaEvent","0;25;함께 구매하면 좋은 상품");
			});
			
			/** GA태깅 E*/
			
		},

		bind : function(){
			var _this = this;

			_this.$win.on('callGaEvent', function (e, data) {
				_this.callGa(data);
			});
		},

		callGa :function(data){
			try{
				var _this = this;
				var paramArr = data.split(";");

				if(paramArr.length == 3){
					ga('send', 'event', _this.eventCategory[Number(paramArr[0])], _this.eventAction[Number(paramArr[1])] , paramArr[2]);
				}else if(paramArr.size() == 4){
					ga('send', 'event', _this.eventCategory[Number(paramArr[0])], _this.eventAction[Number(paramArr[1])] , paramArr[2], paramArr[3]);
				}
			}catch(e){
				try{
					console.log("GA 에러 : " + data);
				}catch(e){}
			}
		}

	};

	return googleAnalytics;
}));
