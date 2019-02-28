'use strict';
require([
	'/js/require/config.js'
], function () {

	// 메인에서만 사용하는 경로 설정
	require.config({
		paths: {
			'productLayout' : 'service/product/product.layout',
			'setItem' : 'service/product/product.setItem',
			'customOption' : 'service/product/custom.option',
			'customOptionBot' : 'service/product/custom.optionBot',
			'stdPrdOption' : 'service/product/custom.prdOption',
			'stdPrdOptionBot' : 'service/product/custom.prdOptionBot',
			'customAddPrd' : 'service/product/custom.addPrd',
			'customAddPrdBot' : 'service/product/custom.addPrdBot',
			'customMdRecmPrd' : 'service/product/custom.mdRecmPrd',
			'slider': 'service/common/modules/slider',
			'prdcBigimg': 'service/product/product.prdcBigimg',
			'kakao': 'lib/kakao/kakao-1.1.4.min',                // 개발에서 추가 요청
			//'product': '../json/productSampleData'
			
			// module1
			'productLike'      : 'service/product/module/productLike', 		 //좋아요
			'snsPost'          : 'service/product/module/snsPost',     		 //공유하기
			'prdDtlHtmlGenInfo': 'service/product/module/prdDtlHtmlGenInfo', //상품GEN정보
			//'optAddPrdCommon'  : 'service/product/module/optAddPrdCommon',	 //옵션
			'productPrice'     : 'service/product/module/productPrice',	     //상품가격정보
			'addDiscountPrice' : 'service/product/module/addDiscountPrice',	 //추가할인가정보
			'myCupnInfo'		: 'service/product/module/myCupnInfo',	     //마이쿠폰 정보	#작업중
			'productBenefit'   : 'service/product/module/productBenefit',	 //혜택영역
			'productDelivery'  : 'service/product/module/productDelivery',	 //배송영역
			'orderInfo'			: 'service/product/module/orderInfo',	     //주문			#작업중
			'myPriceInfo'	   : 'service/product/module/myPriceInfo',		 //맞춤가 정보
			'googleAnalytics'  : 'service/product/module/googleAnalytics',	 //googleAnalytics
			'productCommon'    : 'service/product/module/productCommon',	 //공통function
			
			// module2			
			'productSellerinfo' : 'service/product/module/productSellerinfo', //미니몰
			//'productRecmModule' : 'service/product/module/productRecmModule', //추천상품영역		
			'productInfo'       : 'service/product/module/productInfo',       //상품정보영역
			'productReturn'     : 'service/product/module/productReturn',   	  //반품정보
			'productStdView'	: 'service/product/module/productStandardView',	// 표준상품 관련
			'productRake'       : 'service/product/module/productRake',       //상품 로그 2.0 관련 스크립트	
		},
		urlArgs: "v=1"
		// urlArgs: "v="+ (new Date()).getTime()

	});

	require([
		'jquery',
		'handlebars'
	], function($, handlebars) {

		require([
			'myCupnInfo'
		], function(myCupnInfo) {

			require([
				'orderInfo'
			], function(orderInfo) {


				require([
					'productLayout',
					'setItem',
					'customOption',
					'customAddPrd',
					'customMdRecmPrd',
					'customOptionBot',
					'customAddPrdBot',
					'stdPrdOption',
					'stdPrdOptionBot'
				],
				function (ProductLayout, SetItem, CustomOption, CustomAddPrd, CustomMdRecmPrd, CustomOptionBot, CustomAddPrdBot, stdPrdOption, stdPrdOptionBot) {
					var productLayout, setItem, popularPrd, customOption1, customOption2
						,customAddPrd1, customAddPrd2, customMdRecmPrd
						,bestGoodsTemplate, sameGoodsTemplate, oneBrandPopTemplate, oneBrandPopTemplate
						,prdcBigimg, popShoPrdTemplate, prdcCatePopTemplate, togetherGoodsTemplate
						,togetherGoodsSlide, prdcCatePopSlide, toolTip, hotClkRcmTemplate;

					// 구매 상품 관련 스크립트 호출
					setItem = new SetItem();
					setItem.init();

					// 상품 상세 Layerout 관련 스크립트 호출
					productLayout = new ProductLayout();
					productLayout.init();

					// 옵션 레이어 관련 스크립트 호출
					if(productPrdInfo.isStandardPrd) {
						customOption1 = new stdPrdOption('#ui_stdPrd1', 'top');
						customOption1.init();
						customOption2 = new stdPrdOptionBot('#ui_stdPrd2', 'bottom');
						customOption2.init();
					} else {
						customOption1 = new CustomOption('#ui_option1', 'top');
						customOption1.init();
						customOption2 = new CustomOptionBot('#ui_option2', 'bottom');
						customOption2.init();
					}

					customAddPrd1 = new CustomAddPrd('#ui_addPrd1', 'top');
					customAddPrd1.init();
					customAddPrd2 = new CustomAddPrdBot('#ui_addPrd2', 'bottom');
					customAddPrd2.init();

					customMdRecmPrd = new CustomMdRecmPrd('#mdPrd', 'top');
					customMdRecmPrd.init();

					//meta description 변경
					try {
						var metaDescription = "";
						if(productPrdInfo.advrtStmt != ""){
							metaDescription += productPrdInfo.advrtStmt + ", ";
						}
						$('meta[name="description"]').attr('content', metaDescription + "카테고리 : " + productPrdInfo.dispCtgrNm + ", 가격 : " + productPrcInfo.dscPrc + "원");
                    } catch (e) {}

					try{


					require([
						'template',
						'slider',
						'prdcBigimg',
						'tooltip',
						'productCommon'
					] , function(Template, Slider, PrdcBigimg, ToolTip){

						// 공통function
						require(['productCommon'], function(ProductCommon) {
							ProductCommon.init();
						});

						// Template
						bestGoodsTemplate = new Template('#bestGoods');
						bestGoodsTemplate.init();

						sameGoodsTemplate = new Template('#sameGoods');
						sameGoodsTemplate.init();

						popShoPrdTemplate = new Template('#popShoPrd');
						popShoPrdTemplate.init();

						prdcCatePopTemplate = new Template('#prdcCatePop');
						prdcCatePopTemplate.init();

						togetherGoodsTemplate = new Template('#togetherGoods');
						togetherGoodsTemplate.init();

						oneBrandPopTemplate = new Template('#oneBrandPop');
						oneBrandPopTemplate.init();
						
						hotClkRcmTemplate = new Template('#hotClkRcmGoods');
						hotClkRcmTemplate.init();
						
						//PrdcBigimg
						prdcBigimg = new PrdcBigimg();
						prdcBigimg.init(0);

						// 툴팁 기능 활성화
						toolTip = new ToolTip();
						toolTip.init();

						//toolLike
						/*		toolLike = new ToolLike();
						 toolLike.init();*/

						/********************** 상단 **************************/
						// 좋아요
						require(['productLike'], function(ProductLike) {
							ProductLike.init();
						});
						// 공유하기
						require(['snsPost'], function(SnsPost) {
							SnsPost.init();
						});
						// 배송영역
						require(['productDelivery'], function(ProductDelivery) {
							ProductDelivery.init();
						});
						// 상품GEN정보
						require(['prdDtlHtmlGenInfo'], function(PrdDtlHtmlGenInfo) {
							PrdDtlHtmlGenInfo.init();
							// 가격정보
							require(['productPrice'], function(ProductPrice) {
								ProductPrice.init();
								// 혜택영역
								require(['productBenefit'], function(ProductBenefit) {
									ProductBenefit.init();
								});
								// 추가할인가정보
								require(['addDiscountPrice'], function(AddDiscountPrice) {
									AddDiscountPrice.init();
								});
							});
						});
						
						if(productPrdInfo.isStandardPrd) {
							require(['productStdView'], function(productStandardView) {
								productStandardView.init();
							});
						}

						// 구글애널리틱스 용 전자상거래 추적코드
						// require(['googleAnalytics'], function(GoogleAnalytics) {
						// 	GoogleAnalytics.init();
						// });

						/********************** 하단 **************************/
						// 미니몰
						require(['productSellerinfo'], function(productSellerinfo) {
							productSellerinfo.init();
						});
						// 추천상품영역 > 추천영역 삭제처리 (MPSR-34897)
						/*require(['productRecmModule'], function(ProductRecmModule) {
							ProductRecmModule.setRecmProduct();
						});*/
						// 상품정보영역
						require(['productInfo'], function(ProductInfo) {
							ProductInfo.init();
						});
						// 반품정보
						require(['productReturn'], function(ProductReturn) {
							ProductReturn.init();
						});
						// GA
						require(['googleAnalytics'], function(googleAnalytics) {
							googleAnalytics.init();
						});
						require(['productRake'], function(productRake) {	// Rake 관련 스크립트 정리
							productRake.init();
						});

						//Slider가 상단에서 오류가 나면 아래 require된 js 들이 정상적으로 동작하지 않으므로 하단에 선언
						require(['slider'], function(Slider) {
							//popularPrd
							if($('#selOtherPrdYn').val() == "Y"){
								$('#bestGoods .btnctr_nw').css("display", "block");
								popularPrd = new Slider({
									selector: $('#bestGoods ul'),
									type: 'slide', //slide, gallery, fade, sementic
									arrows: $('#bestGoods .btnctr_nw'),
									dots: false,
									carousel: 6,
									carouselBox: 6,
									elLeft: -10,
									pause: 5000,
									auto: false
								});
							}

							//togetherGoodsSlide
							if($('#recopicYn').val() == "Y"){ // 임시 레코픽
								$("#togetherGoods" ).css("display", "block");
								togetherGoodsSlide = new Slider({
									selector: $('#togetherGoods ul'),
									type: 'slide', //slide, gallery, fade, sementic
									arrows: $('#togetherGoods .btnctr_nw'),
									elLeft: -9,
									dots: false,
									carousel: 5,
									carouselBox: 5,
									pause: 5000,
									auto: false
								});
							}
							
							//hotClkRcmGoodsSlide
							if($('#hotClkRcmYn').val() == "Y"){ // 핫클릭 추천상품
								$("#hotClkRcmGoods" ).show();
								togetherGoodsSlide = new Slider({
									selector: $('#hotClkRcmGoods ul'),
									type: 'slide', //slide, gallery, fade, sementic
									arrows: $('#hotClkRcmGoods .btnctr_nw'),
									elLeft: -9,
									dots: false,
									carousel: 5,
									carouselBox: 5,
									pause: 5000,
									auto: false
								});
							}
						});
					});

					}catch(e){
						alert(e.message);
					}
				});
			});
		});
	});

});
