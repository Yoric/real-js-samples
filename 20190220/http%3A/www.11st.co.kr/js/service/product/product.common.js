'use strict';
require([
	'/js/require/config.js'
], function () {

	// ���ο����� ����ϴ� ��� ����
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
			'kakao': 'lib/kakao/kakao-1.1.4.min',                // ���߿��� �߰� ��û
			//'product': '../json/productSampleData'
			
			// module1
			'productLike'      : 'service/product/module/productLike', 		 //���ƿ�
			'snsPost'          : 'service/product/module/snsPost',     		 //�����ϱ�
			'prdDtlHtmlGenInfo': 'service/product/module/prdDtlHtmlGenInfo', //��ǰGEN����
			//'optAddPrdCommon'  : 'service/product/module/optAddPrdCommon',	 //�ɼ�
			'productPrice'     : 'service/product/module/productPrice',	     //��ǰ��������
			'addDiscountPrice' : 'service/product/module/addDiscountPrice',	 //�߰����ΰ�����
			'myCupnInfo'		: 'service/product/module/myCupnInfo',	     //�������� ����	#�۾���
			'productBenefit'   : 'service/product/module/productBenefit',	 //���ÿ���
			'productDelivery'  : 'service/product/module/productDelivery',	 //��ۿ���
			'orderInfo'			: 'service/product/module/orderInfo',	     //�ֹ�			#�۾���
			'myPriceInfo'	   : 'service/product/module/myPriceInfo',		 //���㰡 ����
			'googleAnalytics'  : 'service/product/module/googleAnalytics',	 //googleAnalytics
			'productCommon'    : 'service/product/module/productCommon',	 //����function
			
			// module2			
			'productSellerinfo' : 'service/product/module/productSellerinfo', //�̴ϸ�
			//'productRecmModule' : 'service/product/module/productRecmModule', //��õ��ǰ����		
			'productInfo'       : 'service/product/module/productInfo',       //��ǰ��������
			'productReturn'     : 'service/product/module/productReturn',   	  //��ǰ����
			'productStdView'	: 'service/product/module/productStandardView',	// ǥ�ػ�ǰ ����
			'productRake'       : 'service/product/module/productRake',       //��ǰ �α� 2.0 ���� ��ũ��Ʈ	
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

					// ���� ��ǰ ���� ��ũ��Ʈ ȣ��
					setItem = new SetItem();
					setItem.init();

					// ��ǰ �� Layerout ���� ��ũ��Ʈ ȣ��
					productLayout = new ProductLayout();
					productLayout.init();

					// �ɼ� ���̾� ���� ��ũ��Ʈ ȣ��
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

					//meta description ����
					try {
						var metaDescription = "";
						if(productPrdInfo.advrtStmt != ""){
							metaDescription += productPrdInfo.advrtStmt + ", ";
						}
						$('meta[name="description"]').attr('content', metaDescription + "ī�װ� : " + productPrdInfo.dispCtgrNm + ", ���� : " + productPrcInfo.dscPrc + "��");
                    } catch (e) {}

					try{


					require([
						'template',
						'slider',
						'prdcBigimg',
						'tooltip',
						'productCommon'
					] , function(Template, Slider, PrdcBigimg, ToolTip){

						// ����function
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

						// ���� ��� Ȱ��ȭ
						toolTip = new ToolTip();
						toolTip.init();

						//toolLike
						/*		toolLike = new ToolLike();
						 toolLike.init();*/

						/********************** ��� **************************/
						// ���ƿ�
						require(['productLike'], function(ProductLike) {
							ProductLike.init();
						});
						// �����ϱ�
						require(['snsPost'], function(SnsPost) {
							SnsPost.init();
						});
						// ��ۿ���
						require(['productDelivery'], function(ProductDelivery) {
							ProductDelivery.init();
						});
						// ��ǰGEN����
						require(['prdDtlHtmlGenInfo'], function(PrdDtlHtmlGenInfo) {
							PrdDtlHtmlGenInfo.init();
							// ��������
							require(['productPrice'], function(ProductPrice) {
								ProductPrice.init();
								// ���ÿ���
								require(['productBenefit'], function(ProductBenefit) {
									ProductBenefit.init();
								});
								// �߰����ΰ�����
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

						// ���۾ֳθ�ƽ�� �� ���ڻ�ŷ� �����ڵ�
						// require(['googleAnalytics'], function(GoogleAnalytics) {
						// 	GoogleAnalytics.init();
						// });

						/********************** �ϴ� **************************/
						// �̴ϸ�
						require(['productSellerinfo'], function(productSellerinfo) {
							productSellerinfo.init();
						});
						// ��õ��ǰ���� > ��õ���� ����ó�� (MPSR-34897)
						/*require(['productRecmModule'], function(ProductRecmModule) {
							ProductRecmModule.setRecmProduct();
						});*/
						// ��ǰ��������
						require(['productInfo'], function(ProductInfo) {
							ProductInfo.init();
						});
						// ��ǰ����
						require(['productReturn'], function(ProductReturn) {
							ProductReturn.init();
						});
						// GA
						require(['googleAnalytics'], function(googleAnalytics) {
							googleAnalytics.init();
						});
						require(['productRake'], function(productRake) {	// Rake ���� ��ũ��Ʈ ����
							productRake.init();
						});

						//Slider�� ��ܿ��� ������ ���� �Ʒ� require�� js ���� ���������� �������� �����Ƿ� �ϴܿ� ����
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
							if($('#recopicYn').val() == "Y"){ // �ӽ� ������
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
							if($('#hotClkRcmYn').val() == "Y"){ // ��Ŭ�� ��õ��ǰ
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
