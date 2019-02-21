
var HeaderGnb = {};

HeaderGnb.getChannel = function() {
	var url = document.URL;
	if (url.indexOf('http://www.11st.co.kr/browsing/BrandHomeAction') != -1 || url.indexOf('http://www.11st.co.kr/browsing/BrandSearchAction') != -1 || url.indexOf('&gnbType=brand11') != -1){
		return 'BRAND11';
	} else if (url.indexOf('www.11st.co.kr/mart/') != -1 || url.indexOf('&gnbType=mart') != -1){
		return 'MART';
	} else if (url.indexOf('deal.11st.co.kr') != -1){
	 	return 'DEAL';
	} else if (url.indexOf('soho.11st.co.kr') != -1){
	 	return 'SOHO';
	} else if (url.indexOf('DTAction.tmall?ID=STARSOHO') != -1 || url.indexOf('DTAction.tmall?ID=TOPSOHO') != -1 || url.indexOf('DTAction.tmall?ID=FASHIONDNA') != -1 || url.indexOf('DTAction.tmall?ID=KOREASPA') != -1 ||url.indexOf('DTAction.tmall?ID=MISSY') != -1 ){
		return 'SOHO';
	} else if (url.indexOf('tour.11st.co.kr/html/vertical/tourMain.html') != -1 || url.indexOf('tour.11st.co.kr/tour/') != -1 || typeof(TOUR_HEADER) != 'undefined' ){
	 	return 'TOUR';
	} else if (url.indexOf('www.11st.co.kr/html/HyundaiDepart.html') != -1 || url.indexOf('HyundaiDeptAction.tmall') != -1){
	 	return 'DEPARTHD';
	} else if (url.indexOf('FashionDept') != -1){
	 	return 'DEPARTFS';
	} else if (url.indexOf('shop.11st.co.kr') != -1){
	 	return 'SHOP';
	} else if (url.indexOf('ticket.11st.co.kr') != -1){
	 	return 'TICKET';
	} else if (url.indexOf('books.11st.co.kr') != -1){
	 	return 'BOOKS';
	} else {
		return '11ST';
	}
};

HeaderGnb.search = function(eventType){
	var gnbFormObj = document.forms["GNBSearchForm"];
	var keyword = trim(gnbFormObj.kwd.value);
	
	var ad_banner_url = gnbFormObj.adUrl.value;
	if(ad_banner_url == "") {
		if ( keyword == "" ) {
			alert("검색어를 입력하세요.");
			gnbFormObj.kwd.focus();
		} else if ( chkKeywordEvent(keyword) ){
			return;
		} else {
			var gaEventCategory = 'PC_GNB_통합검색>키워드검색';
			var gaEventAction = '키워드 입력 후 enter';
			var gaEventLabel = keyword;
			
			if(gnbFormObj.action.indexOf('Search.tmall') >= 0) {
				var encKwd	= encodeKwdNew(keyword);
				location.href = "http://search.11st.co.kr/Search.tmall?kwd=" + encKwd;
			} else {	// 기존 방식
				if(gnbFormObj.targetAnchor)
					gnbFormObj.action += gnbFormObj.targetAnchor.value;

				gnbFormObj.kwd.value = encodeKwd(keyword);
				gnbFormObj.submit();
			}
			
			try{
				if(typeof(eventType) != 'undefined' && eventType == 'click'){
					gaEventAction = '키워드 입력 후 돋보기 클릭';
				}
				ga("send", "event", gaEventCategory, gaEventAction, gaEventLabel);
			}catch(e){}
			
			try {
                jQuery('#gnbTxtAd_divId').attr('data-log-actionid-label', 'input');
                jQuery('#gnbTxtAd').attr('data-log-body', "{'search_keyword':'" + keyword.replace('\'', '’') + "'}");
                rakeLog.sendRakeLog(jQuery('#gnbTxtAd')[0], 'click');
            } catch (e) {}
		}		
	} else {
		//검색창 텍스트링크 광고
		var trcNo = gnbFormObj.adKwdTrcNo.value;
		var typGubn = 'M';
		var areaGubn = 'A01';
		var prdNo = gnbFormObj.adPrdNo.value;

		stck( typGubn, areaGubn, trcNo);
		if(prdNo > 0) {
			ad_headerCommonJs.util.instance.ConversionCookieQueue.add(trcNo, prdNo, (typGubn + '' + areaGubn));
		}

		top.location.href = ad_banner_url;
		
		var gaEventCategory = 'PC_GNB';
		var gaEventAction = '검색창광고';
		var gaEventLabel = keyword;
		
		try{
			ga("send", "event", gaEventCategory, gaEventAction, gaEventLabel);
		}catch(e){}
		
		try {
            jQuery('#gnbTxtAd_divId').attr('data-log-actionid-label', 'adlink');
            jQuery('#gnbTxtAd').attr('data-log-body', "{'search_keyword':'" + keyword.replace('\'', '’') + "', 'link_url':'" + ad_banner_url + "'}");
        } catch (e) {}
	}
}

HeaderGnb.drawTemplate = function(templateId, data, targetId, handlerType){
	Handlebars.registerHelper('ifCond', function (v1, operator, v2, options) {
		switch (operator) {
			case '===':
				return (v1 === v2) ? options.fn(this) : options.inverse(this);
			case '!=':
				return (v1 != v2) ? options.fn(this) : options.inverse(this);
			case '<':
				return (v1 < v2) ? options.fn(this) : options.inverse(this);
			case '<=':
				return (v1 <= v2) ? options.fn(this) : options.inverse(this);
			case '>':
				return (v1 > v2) ? options.fn(this) : options.inverse(this);
			case '>=':
				return (v1 >= v2) ? options.fn(this) : options.inverse(this);
			case '&&':
				return (v1 && v2) ? options.fn(this) : options.inverse(this);
			case '||':
				return (v1 || v2) ? options.fn(this) : options.inverse(this);
			default:
				return options.inverse(this);
		}
	});
	
	Handlebars.registerHelper('last', function (index, count, options) {
		if(index+1 == count){
			return options.fn(this);
		}else{
			return options.inverse(this);
		}
	});
	
	Handlebars.registerHelper('pageNum', function (index, pagePerCnt) {
		var page = parseInt(parseInt(index) / parseInt(pagePerCnt)) + 1;
		return page;
	});
	
	Handlebars.registerHelper('pageDot', function (index, pagePerCnt, options) {
		var page = parseInt(parseInt(index) / parseInt(pagePerCnt)) + 1;
		var pageOri = parseInt(index) / parseInt(pagePerCnt) + 1;
		if(page == pageOri){
			return options.fn(this);
		}else{
			return options.inverse(this);
		}
	});
	
	Handlebars.registerHelper("math", function(lvalue, operator, rvalue, options) {
	    lvalue = parseFloat(lvalue);
	    rvalue = parseFloat(rvalue);
	        
	    return {
	        "+": lvalue + rvalue,
	        "-": lvalue - rvalue,
	        "*": lvalue * rvalue,
	        "/": lvalue / rvalue,
	        "%": lvalue % rvalue
	    }[operator];
	});
	
	var source = jQuery('#'+templateId).html();

	var template = Handlebars.compile(source); 
	if(typeof(targetId) == 'undefined' || targetId == ''){
		document.write(template(data));
	}else{
		if(typeof(handlerType) == 'undefined' || handlerType == ''){
			jQuery('#'+targetId).append(template(data));
		}else if(handlerType == 'after'){
			jQuery('#'+targetId).after(template(data));
		}else if(handlerType == 'prepend'){
			jQuery('#'+targetId).prepend(template(data));
		}
		
	}
}

HeaderGnb.makeGnb = {
	area : '',
	gnbDealIntroduceBnr : {'count':0,'items':[]},
	gnbDealEmergencyBnrPrd : {'count':0,'items':[]},
	gnbNowIntroduceBnr : {'count':0,'items':[]},
	gnbNowOnSalePrd : {'count':0,'items':[]},
	gnbNowExhiBnr : {'count':0,'items':[]},
	gnbNowCtgr : {'count':0,'items':[]},
	templateType : 'sub',
	isLogin : funcCheckIsLogin(),
	channel : HeaderGnb.getChannel(),
	areaCodePre : 'MAINS',
    S_2018_11DaysYn : 'N',
	setData : function(){

		var self = this;

        var protocol = document.location.protocol;
        var url = "http://www.11st.co.kr/commons/HeaderAjaxAction.tmall?method=get11DaysYn";
        if(protocol == "https:"){
            url = "https://www.11st.co.kr/commons/HeaderAjaxAction.tmall?method=get11DaysYn";
        }

		jQuery.ajax({
            url : url,
            type : 'post',
            dataType : 'json',
            async : false,
            timeout: 1000,
            success : function (data) {
                if(data != null || data != '' || typeof(data) != 'undefined'){
                    self.S_2018_11DaysYn = data.S_2018_11DaysYn;
                }
            }
        });

		if(typeof(gnbDealIntroduceBnr) != 'undefined' && gnbDealIntroduceBnr != ''){
			this.gnbDealIntroduceBnr = gnbDealIntroduceBnr; 
		}
		if(typeof(gnbDealEmergencyBnrPrd) != 'undefined' && gnbDealEmergencyBnrPrd != ''){
			this.gnbDealEmergencyBnrPrd = gnbDealEmergencyBnrPrd; 
		}
		if(typeof(gnbNowIntroduceBnr) != 'undefined' && gnbNowIntroduceBnr != ''){
			this.gnbNowIntroduceBnr = gnbNowIntroduceBnr; 
		}
		if(typeof(gnbNowOnSalePrd) != 'undefined' && gnbNowOnSalePrd != ''){
			this.gnbNowOnSalePrd = gnbNowOnSalePrd; 
		}
		if(typeof(gnbNowExhiBnr) != 'undefined' && gnbNowExhiBnr != ''){
			this.gnbNowExhiBnr = gnbNowExhiBnr; 
		}
		if(typeof(gnbNowCtgr) != 'undefined' && gnbNowCtgr != ''){
			this.gnbNowCtgr = gnbNowCtgr; 
		}
	},
	//유틸영역 LEFT 초기화
	headerUtilDraw : function(){
		var loginReturnURL = '';
		if ( typeof _ORDER_URL_ == 'undefined' ) {
			_ORDER_URL_ = _GNB_CONTEXT_PATH_;
		}
		if ( typeof(_ORDER_HIS_URL_) == 'undefined' ) {
			_ORDER_HIS_URL_ = _ORDER_URL_ + '/order/OrderList.tmall';
		}
		if(typeof(_RETURN_URL_) != 'undefined') {
			loginReturnURL = _RETURN_URL_;
		}
		
		var headerUtilData = {
			'_GNB_CONTEXT_PATH_' : _GNB_CONTEXT_PATH_,
			'_SELLER_URL_' : _SELLER_URL_,
			'_SELLER_SHOP_DOMAIN_' : 'http://shop.11st.co.kr',
			'_MY11ST_URL_' : _MY11ST_URL_,
			'_SHOPPINGCART_URL_' : _SHOPPINGCART_URL_,
			'_SOFFICE_URL_' : _SOFFICE_URL_,
			'_ORDER_HIS_URL_' : _ORDER_HIS_URL_,
			'loginReturnURL' : loginReturnURL,
			'isLogin' : this.isLogin,
			'channel' : this.channel
		};
		HeaderGnb.drawTemplate('headerUtilTemplate', headerUtilData, '', '');
		
		jQuery(function($){
			//바로가기
			var $directWrap = jQuery('#go11st_wrap');
			if(getBookMarkYn()){
				$directWrap.filter('.direct').addClass('on');
				$directWrap.find('#gbox_text').html('바로가기 접속중');
			}
			$directWrap.show();
			
			//바로가기 레이어
			if(typeof(FooterData.directLayerBenefit) != 'undefined') {
				jQuery('#divDirectBenefit').prepend(FooterData.directLayerBenefit);
			}
			
			//바로가기 레이어 이벤트
			$directWrap.find('.btn_direct').bind('click', function(){	
				jQuery('#lay_direct').toggle();
			});
			
			//나의11번가/셀러오피스/글로벌 url이벤트
			jQuery('.have_sub').each(function(idx) {
				jQuery(this).bind({
					mouseenter : function(e) {
						jQuery(this).addClass('on');
					},
					mouseleave : function(e) {
						jQuery(this).removeClass('on');
					}
				});
			});
		});
		
		jQuery(document).ready(function(){
			HeaderGnb.makeGnb.headerGaBind('#headerUtilArea');
		});
	},
	headerSearchDraw : function(){
		var headerSearchData = {};
		
		if(typeof(R_BANNER_SIZE) != 'undefined' && R_BANNER_SIZE > 0){
			randomIdx = Math.floor((Math.random() * R_BANNER_SIZE));
			headerSearchData = R_BANNER_LIST[randomIdx];
		}
		
		if(this.area == 'main' && typeof(VIEW_BI) != 'undefined' && VIEW_BI != ''){
			headerSearchData.VIEW_BI = VIEW_BI;
			headerSearchData.BI_SEASON_IMG = _UPLOAD_URL_ + BI_SEASON_IMG;
		}
		
		headerSearchData.area = this.area;
		headerSearchData.templateType = this.templateType;

		if(this.templateType == 'main') {
			HeaderGnb.drawTemplate('headerSearchTemplate', headerSearchData, '');
			
			if(typeof(R_BANNER_SIZE) != 'undefined' && R_BANNER_SIZE > 0){
				var gnbRBnnr = new this.setMainRightBanner();
				gnbRBnnr.setData('gnbRBannerWrapper', R_BANNER_LIST);
				gnbRBnnr.init();
			}
		}else{
			if(this.area == 'search'){
				headerSearchData.SRCH_KWD = SRCH_KWD;
			}else{
				headerSearchData.SRCH_KWD = '';
			}
			HeaderGnb.drawTemplate('headerSearchTemplate', headerSearchData, '');
			
			if(this.area == 'search'){
				if (noSemanticResult || noModelResult || noContentsResult) {
					var pageText = '시맨틱';
					if(noContentsResult) pageText = '쇼핑리뷰';
					jQuery(function() {
						jQuery("#noResultMsgLayerCont").html("해당 키워드에 대한 "+pageText+" 검색 <br>결과가 없습니다.");
						jQuery("#noResultMsgLayer").show();
						setTimeout("jQuery('#noResultMsgLayer').hide();", 10000);
					})
				}
			}
			
			if(this.area != 'mini' && typeof(IS_AD_BNNR) != 'undefined' && IS_AD_BNNR == "Y"){
				var rightBanner = new AdBanner_headerCommonJs();
				if (typeof PRE_FIX_URL != "undefined"){
					rightBanner.setPreFixUrl(PRE_FIX_URL);
				}else{
					rightBanner.setPreFixUrl(ISSSL_ACTION_CONTEXT_URL);
				}
				rightBanner.setUseAdSwitch(_dsSeverMode);
				rightBanner.setIsPriorityDisp(true);
				rightBanner.setAdUrl(AD_URL);
				rightBanner.init();
			}
		}
		
		jQuery(document).ready(function(){
			HeaderGnb.makeGnb.headerGaBind('#header');
		});
	},
	setMainRightBanner : function(){
		var data = [], imgUrlArr = [], imgLinkArr = [], weightArr = [], titleArr = [], target=[],  regnCodeArr = [];
		var totSize = 0, currIdx = 0, options = {}, $wrapper = "", $imgObj = "", useTrace = false;
		var setBnnrData = function(wrapperId, json){
			$wrapper = jQuery("#"+wrapperId);
			data = json;
			totSize = data.length;
			jQuery(data).each(function(){
				imgUrlArr.push(this.imgUrl);
				imgLinkArr.push(this.imgLink);
				weightArr.push(this.weight);
				titleArr.push(this.title);
				target.push(this.target);
				regnCodeArr.push(this.regnCode);
			});
		};
		var initialize = function(){
			dispCtroller();
			setStartIndex();
			dispBanner();
			setEventHandler();
		};
		var dispCtroller = function(){
			if(totSize < 2){
				jQuery("div[class=header_ad_btn]", $wrapper).remove();
			}
			if(totSize === 0){
				$wrapper.html("");
			}
		};
		var imgInjection = function(){
			var $bcbConts = jQuery("a[name=bcb_conts]");
			var gaIdx = currIdx + 1;
			$bcbConts.html(jQuery("<img/>", {src:imgUrlArr[currIdx], alt:titleArr[currIdx]}));
            var imgLink = String(imgLinkArr[currIdx]);
            var content_no = imgLink.substr(imgLink.indexOf('planDisplayNumber=') + 18);
			$bcbConts.attr('href',imgLinkArr[currIdx]).attr('data-ga-event-label','기획전배너 클릭_' + gaIdx + '_' +titleArr[currIdx]).attr('data-log-body', "{'content_type':'BANNER', 'content_no':'" + content_no + "', 'link_url':'" + imgLink + "', 'trc_no':'163600980'}");
		};
		var dispBanner = function(idx){
			if(arguments.length > 0) currIdx = idx;
			imgInjection();
		};
		var setStartIndex = function(){
			currIdx = (weightArr.length > 0) ? getRanNumWeight(weightArr) : ((options.random) ? getRanNum(data.length) : 0);
			jQuery("strong[name=bcb_seq]").html(currIdx+1);
		};
		var setCurrentIndex = function(idx){
			currIdx = currIdx + (idx);
			if(currIdx < 0) currIdx = totSize-1;
			else if(currIdx >= totSize) currIdx = 0;
			jQuery("strong[name=bcb_seq]").html(currIdx+1);
		};
		var setOptions = function(option){
			if(jQuery.isEmptyObject(options)){
				options = option;
			} else {
				jQuery.extend(options, option);
				useTrace = options.useTrace;
			}
		};
		var setEventHandler = function(){
			var $evntObj = jQuery("div[class=header_ad_btn]", $wrapper);
			if(totSize > 1){
				$evntObj.click(function(event){
					var thisClass = jQuery(event.target).attr("class");
					trace(thisClass);
					if("btn btn_prev" === thisClass) {
						setCurrentIndex(-1);
						doCommonStat('MAINMGN0406');
					} else if("btn btn_next" === thisClass) {
						setCurrentIndex(1);
						doCommonStat('MAINMGN0407')
					}
					dispBanner();
				});
			}
			jQuery("a[name=bcb_conts]").click(function(){
				redirectUrl();
			});
		};
		var redirectUrl = function(){
			var strTarget = target[currIdx];
			trace(strTarget);
			goStatUrl(imgLinkArr[currIdx], regnCodeArr[currIdx], strTarget);
		};
		var trace = function(msg){
			if(useTrace && window.console) console.log("SimpleSmallBnr: ", msg);
		};
		return {
			setData: function(wrapper, jsonArr){
				setBnnrData(wrapper, jsonArr);
			},
			init: function(){
				initialize();
			},
			setOption: function(json){
				setOptions(json);
			}
		}
	},
	headerLayerEventHandler : function(){
		//시즌메뉴 마우스오버
		var $seasonMenuArea = jQuery('#seasonMenuArea');
		$seasonMenuArea.bind('mouseover', function(){
			if(typeof(gnbSeasonMenuBnr) != 'undefined' && gnbSeasonMenuBnr.count > 0){
				var seasonBanner = gnbSeasonMenuBnr.items[0];
				if(seasonBanner.imgUrl2 != ''){
					$seasonMenuArea.find('img').attr('src',seasonBanner.imgUrl2);
				}
			}
		});
		$seasonMenuArea.bind('mouseout', function(){
			if(typeof(gnbSeasonMenuBnr) != 'undefined' && gnbSeasonMenuBnr.count > 0){
				var seasonBanner = gnbSeasonMenuBnr.items[0];
				$seasonMenuArea.find('img').attr('src',seasonBanner.imgUrl1);
			}
		});
		
		//전체보기 show,hide
		var $gnbCategoryArea = jQuery('#gnbCategoryArea');
		//메인페이지에서는 제외
		if( document.location.href.indexOf('http://www.11st.co.kr/browsing/Main.tmall?method=showMainOld') >= 0 || document.location.href.indexOf('http://www.11st.co.kr/html/main.html') >= 0 ){
			jQuery('#metaCategoryInner').bind('mouseenter',function(){
				jQuery('#gnbMetaCategoryDimm').addClass('dimm_on');
			});
			jQuery('#metaCategoryInner').bind('mouseleave',function(){
				jQuery('#gnbMetaCategoryDimm').removeClass('dimm_on');
			});
		}else{
			$gnbCategoryArea.bind('mouseenter',function(){
				$gnbCategoryArea.addClass('on');
				jQuery('#gnbMetaCategoryDimm').addClass('dimm_on');
				catchAnchorGAToEvent();
			});
			$gnbCategoryArea.bind('mouseleave',function(){
				$gnbCategoryArea.removeClass('on');
				jQuery('#gnbMetaCategoryDimm').removeClass('dimm_on');
			});
			jQuery('#gnbBtnAllNav').bind('mouseenter',function(){
				rakeLog.sendRakeLog(this);
			});
		}
		jQuery('#gnbMetaCategoryDimm').bind('mouseenter',function(){
			$gnbCategoryArea.removeClass('on');
			jQuery('#gnbMetaCategoryDimm').removeClass('dimm_on');
		});
	},
	headerCategoryLayerDraw : function(){
		//대카목록
		var ctgrDataJA = typeof(FooterData.metaCategory2016) == 'undefined' ? [] : FooterData.metaCategory2016;
		HeaderGnb.drawTemplate('headerMetaCategoryTemplate', ctgrDataJA, 'metaCategoryInner');
		HeaderGnb.categoryNavi_v2.init();
	},
	headerNavigationDraw : function(){
		var naviData = {};
		naviData.area = this.area;
		naviData.templateType = this.templateType;
		naviData.S_2018_11DaysYn = this.S_2018_11DaysYn;
		HeaderGnb.drawTemplate('headerNavigationTemplate', naviData, '');
		//시즌메뉴바
		if(typeof(gnbSeasonMenuBnr) != 'undefined' && gnbSeasonMenuBnr.count > 0){
			var $seasonMenuArea = jQuery('#seasonMenuArea');
			var seasonBanner = gnbSeasonMenuBnr.items[0];
			$seasonMenuArea.find('a').attr('href',seasonBanner.linkUrl)
										.attr('data-ga-event-label','시즌테마_' + seasonBanner.objNm);
			$seasonMenuArea.find('img').attr('src',seasonBanner.imgUrl1).attr('alt', seasonBanner.objNm).show();
			$seasonMenuArea.show();
		}
		//네비게이션 레이어 영역
		jQuery(document).ready(function(){
			HeaderGnb.makeGnb.setData();
			HeaderGnb.makeGnb.headerCategoryLayerDraw();
			HeaderGnb.makeGnb.headerLayerEventHandler();
			
			//사업자로그인 시 비즈11번가 처리
            getSeverCookieVal( '', 'gubun', 'HeaderGnb.makeGnb.headerNavigationBizDraw') ;
		});
	},
	headerNavigationBizDraw : function(returnVal){
		if ( returnVal == '02' ) {
			jQuery('.biz11st', '#gnbCornerArea').show();
			if('Y' != TMCookieUtil.getSubCookie(1, 'biz11_alram_chk')){
				var html = [];
				html.push('<div class="dimmest11 dimmest11_on" id="biz11AlramLayerPopUP">');
				html.push('    <div class="dim_layer ly_biz11st">');
				html.push('        <div class="ly_tit"><strong class="tit">사업자 회원을 위한 안내</strong></div>');
				html.push('        <div class="ly_cont">');
				html.push('            <strong class="skip">새롭게 바뀐 비즈 11번가 사업자 특가 혜택</strong>');
				html.push('            <p class="skip">비즈11번가에서 제공하는 사업자쿠폰을 다운로드 받아 할인가로 구매하세요!</p>');
				html.push('            <div class="btn_area_biz">');
				html.push('                <a href="http://www.11st.co.kr/biz11st/Biz11stBenefitAction.tmall?method=introduce" class="btn btn_guide">이용가이드 보기</a>');
				html.push('                <a href="http://www.11st.co.kr/biz11st/Biz11stMainAction.tmall" class="btn btn_bizmain">비즈11번가 메인</a>');
				html.push('            </div>');
				html.push('        </div>');
				html.push('        <div class="close_wrap">');
				html.push('            <label for="tClose" class="lab"><input type="checkbox" id="tClose" class="inp">오늘 그만 보기</label>');
				html.push('        </div>');
				html.push('        <button type="button" class="btn_close">');
				html.push('            <span class="skip">레이어 팝업 닫기</span>');
				html.push('        </button>');
				html.push('    </div>');
				html.push('</div>');
				
				if( document.location.href.indexOf('http://www.11st.co.kr/html/main.html') >= 0 || document.location.href.indexOf('http://www.11st.co.kr/html/mainexpB.html') >= 0 || document.location.href.indexOf('http://www.11st.co.kr/html/mainexpC.html') >= 0){
					jQuery('body').append(html.join(''));
					jQuery('html').addClass('dimmest11_set');
				}
				
				jQuery('#biz11AlramLayerPopUP #tClose').click(function(){
					TMCookieUtil.add(1, 'biz11_alram_chk', "Y");
					jQuery('#biz11AlramLayerPopUP').removeClass('dimmest11_on');
					jQuery('html').removeClass('dimmest11_set');
				});
				jQuery('#biz11AlramLayerPopUP .btn_close').click(function(){
					jQuery('#biz11AlramLayerPopUP').removeClass('dimmest11_on');
					jQuery('html').removeClass('dimmest11_set');
				});
			}
		}
	},
	headerThemeNaviOn : function(classNm){
		var $gnbThemeMenuArea = jQuery('#gnbThemeMenuArea');
		if(typeof(classNm) != 'undefined' && classNm != ''){
			$gnbThemeMenuArea.find('a.link').parent('li').removeClass('on');
			$gnbThemeMenuArea.find('a.' + classNm).parent('li').addClass('on');
		}
	},
	headerMakeStartDraw : function(){
		HeaderGnb.drawTemplate('headerStartTemplate', {'templateType':this.templateType}, '');
	},
	headerGlobalServiceDraw : function(){
		HeaderGnb.drawTemplate('headerGlobalServiceTemplate', '', '', '');
		jQuery(document).ready(function(){
			setTimeout('StartPageManager.init()', 1000);
		});
	},
	headerUtilInit : function(){
		this.area = typeof(area) == 'undefined' ? 'common' : area;
		HeaderGnb.makeGnb.headerUtilDraw();
	},
	makeLWingBannerElement : function() {
		
	},
	headerGaBind : function(selector){
		try {
			jQuery(selector).each(function(idx, obj) {
				jQuery(obj).bind('click', catchAnchorGAToEvent);
			});
		} catch(e) {
			console.log('binderr : ' + e);
		}
	},
	init : function(area){
		this.area = typeof(area) == 'undefined' ? 'common' : area;		// GNB 구분 (main, sub)
		this.setData();
		if(this.area == 'main') {
			this.areaCodePre = 'MAINM';
		}
		if(this.area == 'main' || this.area == 'cornermain'){
			this.templateType = 'main';
		}
		
		this.headerMakeStartDraw();
		if(this.area == 'main'){
			this.headerGlobalServiceDraw();
		}
		this.headerUtilDraw();
		this.headerSearchDraw();
		if(this.area != 'mini'){
			this.headerNavigationDraw();
		}
	}
}

function gfnCheckSSLHost(url) {
	try {
		var protocol = window.document.location.protocol;

		if ( protocol == 'https:' )	{
			// http => https
			if(url.indexOf('http:') > -1) {
				return url.replace('http:', protocol);
			}

		} else if(protocol == 'http:') {
			// https => http
			if(url.indexOf('https:') > -1) {
				return url.replace('https:', protocol);
			}
		}
	} catch(e) {}
	return url;
}


/*
 * 공통 이미지 처리
 */
function getCommonImgUrl(imgUrl)	{
	try	{
		var protocol = window.document.location.protocol;
		if ( protocol == 'https:' )	{
			if ( _UPLOAD_IMG_PATH_!= '' && imgUrl.indexOf(_UPLOAD_IMG_PATH_) > -1 )	{
				return imgUrl.replace(_UPLOAD_IMG_PATH_, _SSL_UPLOAD_IMG_PATH_);
			} else if ( _IMG_PATH_ != '' && imgUrl.indexOf(_IMG_PATH_) > -1 )	{
				return imgUrl.replace(_IMG_PATH_, _SSL_IMG_PATH_);
			} else if ( _IMG_URL_ != '' && imgUrl.indexOf(_IMG_URL_) > -1 )	{
				return imgUrl.replace(_IMG_URL_, _SSL_IMG_URL_);
			} else if ( _UPLOAD_URL_ != '' && imgUrl.indexOf(_UPLOAD_URL_) > -1 )	{
				return imgUrl.replace(_UPLOAD_URL_, 'https://image.11st.co.kr');
			} else if ( _CSS_URL_ != '' && imgUrl.indexOf(_CSS_URL_) > -1 )	{
				return imgUrl.replace(_CSS_URL_, _SSL_CSS_URL_);
			} else if ( imgUrl.indexOf('http:') > -1 )	{
				return imgUrl.replace('http:', protocol);
			}
		}	else if ( protocol == 'http:' )	{
			if ( _SSL_UPLOAD_IMG_PATH_ != '' && imgUrl.indexOf(_SSL_UPLOAD_IMG_PATH_) > -1 )	{
				return imgUrl.replace(_SSL_UPLOAD_IMG_PATH_, _UPLOAD_IMG_PATH_);
			} else if ( _SSL_IMG_PATH_ != '' && imgUrl.indexOf(_SSL_IMG_PATH_) > -1 )	{
				return imgUrl.replace(_SSL_IMG_PATH_, _IMG_PATH_);
			} else if ( _SSL_IMG_URL_ != '' && imgUrl.indexOf(_SSL_IMG_URL_) > -1 )	{
				return imgUrl.replace(_SSL_IMG_URL_, _IMG_URL_);
			} else if ( _SSL_UPLOAD_URL_ != '' && imgUrl.indexOf(_SSL_UPLOAD_URL_) > -1 )	{
				return imgUrl.replace(_SSL_UPLOAD_URL_, _UPLOAD_URL_);
			} else if ( _SSL_CSS_URL_ != '' && imgUrl.indexOf(_SSL_CSS_URL_) > -1 )	{
				return imgUrl.replace(_SSL_CSS_URL_, _CSS_URL_);
			} else if ( imgUrl.indexOf('https:') > -1 )	{
				return imgUrl.replace('https:', protocol);
			}
		}
	} catch (e)	{}
	return imgUrl;
}

//alt text 가져오기
function getAltTxt(etcText, titleText){
    if(!isNaN(etcText)) {
    	etcText = etcText.toString();
    }
    if(etcText == null || etcText.trim() == '' || etcText.trim() == 'undefined' || (typeof etcText == 'undefined')) {
        return titleText;
    } else {
        return etcText;
    }
}

HeaderGnb.categoryNavi_v2 = {
	$allLayerWrap :  '',
	$allLayerCont : '',
	allLayerLoaded : false,
	area : 'main',
	areaCodePre : 'MAINS',

	//메타 그룹별 레이어
	makeGrpCtgrLayer : function(grpIdx) {
		var _this = this;
		var $layerWrap = jQuery('#lnb_cate_layer' + (grpIdx+1));
		var $layerCont = jQuery('.box_category', $layerWrap);
		var $layerCont2 = jQuery('<div class="box_rel"></div>');
		var $layerCont3 = jQuery('<div class="cate_visbox" data-log-actionid-area="lnb_banner" data-log-actionid-label="banner"></div>');
		var categoryContents = [];
		var categoryContents2 = [];
		var categoryContents3 = [];

		var codeIdx = (grpIdx+2) >= 10 ?(grpIdx+2) : '0' + (grpIdx+2);
		
		var metaCtgrGroupCount = 0;
		
		var $firstGroup = jQuery('<div/>');
		
		//카테고리
		var grpData = eval('FooterData.lCtgrGrp2016_' + (grpIdx+1));
		if( (grpIdx+1) == 12){
			grpData = FooterData.globalLCtgrList2016;
		}
		if(grpData != undefined) {
			var lv1CtgrCnt = 0;
			var lv1CtgrDisp1LineMaxCnt = 13;	//1줄에 보여줄수 있는 대카 최고 개수.
			var lv2CtgrCnt = 0;
			var lv2CtgrDisp1LineMaxCnt = 15;	//1줄에 보여줄수 있는 중카 최고 개수.
			
			var lnbMenuLi = jQuery('#lnbMenu > ul > li');
			var isForeign = false;
			if(jQuery(lnbMenuLi[grpIdx]).hasClass('foreign')){
				isForeign = true;
			}
			
			var lv1CtgrLinkUrl = '';
			var $content = jQuery('<strong class="tit_sort">카테고리</strong>');
			categoryContents.push($content);
			$content = jQuery('<ul class="list_category"/>');
			var subCateId;
			var subCateUlId;
			for(var idx = 0 ; idx < grpData.length ; idx++) {
				var data = grpData[idx];
				var ctgrLv;
				if(data.CtgrLv){
					ctgrLv = data.CtgrLv;
				}else if(data.Level){
					ctgrLv = data.Level;
				}
				
				var ctgrNo;
				var ctgrNm;
				if( ctgrLv === 1 ) {
					if(data.CtgrNo){
						ctgrNo = data.CtgrNo;
					}else if(data.DispCtgrNo){
						ctgrNo = data.DispCtgrNo
					}

					if(data.CtgrNm){
						ctgrNm = data.CtgrNm;
					}else if(data.DispCtgrNm){
						ctgrNm = data.DispCtgrNm
					}
					
					if( lv1CtgrCnt == lv1CtgrDisp1LineMaxCnt ){
						categoryContents.push($content);
						$content = jQuery('<ul class="list_category"/>');
					}
					var displayStyle = ''; 
					if(isForeign == false){
						lv1CtgrLinkUrl = 'http://www.11st.co.kr/html/category/' + ctgrNo + '.html';
					}else if(isForeign == true){
						if(ctgrNo == 476017){//DLUXURY11 처리
							lv1CtgrLinkUrl = 'http://www.11st.co.kr/disp/DTAction.tmall?ID=DLUXURY11';
						}else if(ctgrNo == 8286){//DLUXURY11 처리
							lv1CtgrLinkUrl = 'http://www.11st.co.kr/html/category/' + ctgrNo + '.html';
							displayStyle = 'display:none;';
						}else{
							lv1CtgrLinkUrl = 'http://www.11st.co.kr/browsing/DisplayCategory.tmall?method=getDisplayCategory2Depth&dispCtgrNo=' + ctgrNo;
						}
					}
					
					subCateId = (ctgrNo+'_sub_cate');
					subCateUlId = (ctgrNo+'_sub_cate_'+0);
					$content.append('<li data-log-actionid-area="lnb_nav" data-log-actionid-label="large_category"><a href="' + lv1CtgrLinkUrl + '" class="link_cont" data-ga-event-category="PC_LNB 카테고리 탐색" data-ga-event-action="대카테고리" data-ga-event-label="' + ctgrNm + '" data-ga-Dimension84="PCLNB_TEST_B" data-log-body="{\'content_no\':\''+ ctgrNo +'\', \'content_name\':\''+ ctgrNm +'\', \'content_type\':\'CATEGORY\'}" data-log-index="' +(lv1CtgrCnt+1)+ '">' + ctgrNm + '</a><div class="sub_cate" id="' + subCateId + '" style="width:140px;' + displayStyle + '"><ul class="list_sub_cate" id="' + subCateUlId + '"/></div></li>');
					lv1CtgrCnt++;
					lv2CtgrCnt = 0;

				} else if( ctgrLv === 2 ) {
					if(lv2CtgrDisp1LineMaxCnt <= lv2CtgrCnt){
						subCateUlId = ( ctgrNo+'_sub_cate_' + parseInt(lv2CtgrCnt/lv2CtgrDisp1LineMaxCnt) )
						if(jQuery('#'+subCateUlId, $content).length == 0){
							jQuery('#'+subCateId, $content).append('<ul class="list_sub_cate" id="' + subCateUlId + '"/>');
						}
						jQuery('#'+subCateId, $content).css({ width :  140 * (parseInt(lv2CtgrCnt/lv2CtgrDisp1LineMaxCnt)+1)} );
					}
					jQuery('#'+subCateUlId, $content).append(this.setCtgrNmStyle(data, isForeign));
					jQuery('#'+subCateUlId+' > li:last-child > a', $content).attr('data-log-index', lv2CtgrCnt+1);
					lv2CtgrCnt++;
				}
			}
			
			categoryContents.push($content);
			
			//통계코드
			jQuery('ul > li', $content).bind('click', function() {
				doCommonStat(_this.areaCodePre + 'CG'+codeIdx+'02');
			});
			
			//추천카테고리
			var dispCnt = 6;
			var remainExtraDispCnt = 6;	//"추천카테고리+전문관/브랜드"의 남는 공간에 추가 노출되는 카테고리 수
			var recommendCtgr = eval('FooterData.recommendCtgrGrp2016_' + (grpIdx+1));
			if(recommendCtgr != undefined && recommendCtgr.length != 0) {
				var $recommandArea = jQuery('<div class="cate_related">');
				$recommandArea.append('<strong class="tit_sort">테마 편집샵</strong>').append('<ul class="list_recommend"/>');
				for(var idx = 0 ; idx < recommendCtgr.length && idx < dispCnt ; idx++) {
					var data = recommendCtgr[idx];
					
					jQuery('ul:last-child', $recommandArea).append('<li data-log-actionid-area="lnb_nav" data-log-actionid-label="theme_category"><a href="http://www.11st.co.kr/browsing/DisplayCategory.tmall?method=getThemeCategory&dispCtgrNo=' + data.RefCtgrNo + '" data-ga-event-category="PC_LNB 카테고리 탐색" data-ga-event-action="추천카테고리" data-ga-event-label="' + data.CtgrNm + '" data-ga-Dimension84="PCLNB_TEST_B" data-log-body="{\'content_no\':\''+ data.RefCtgrNo +'\', \'content_name\':\''+ data.CtgrNm +'\', \'content_type\':\'CATEGORY\'}" data-log-index="' + (idx+1) + '">' + data.CtgrNm + '</a></li>');
					remainExtraDispCnt--;
				}
				categoryContents2.push($recommandArea);
				
				//통계코드
				jQuery('ul > li', $specialShopArea).bind('click', function() {
					doCommonStat(_this.areaCodePre + 'CG'+codeIdx+'06');
				});
				
			}
			
			//전문관/브랜드
			var gnbCtgrMallList = eval('FooterData.gnbCtgrMallList' + (grpIdx+1));
			if(gnbCtgrMallList != undefined && gnbCtgrMallList.length != 0) {
				var $specialShopArea = jQuery('<div class="cate_related">');
				var ctgrListLength = 0;
				for(var idx = 0 ; idx < gnbCtgrMallList.length ; idx++) {
					var data = gnbCtgrMallList[idx];
					var ctgrList = data.ctgrList;
					ctgrListLength = ctgrList.length;
					$specialShopArea.append('<strong class="tit_sort">'+ data.title.DispObjNm +'</strong>').append('<ul class="list_specialshop"/>');
					for(var ctgrIdx = 0 ; ctgrIdx < ctgrList.length && ctgrIdx < (dispCnt + remainExtraDispCnt) ; ctgrIdx++) {
						jQuery('ul:last-child', $specialShopArea).append('<li data-log-actionid-area="lnb_nav" data-log-actionid-label="special_category"><a href="'+ctgrList[ctgrIdx].DispObjLnkUrl+'" data-ga-event-category="PC_LNB 카테고리 탐색" data-ga-event-action="전문관/브랜드" data-ga-event-label="' + ctgrList[ctgrIdx].DispObjNm + '" data-ga-Dimension84="PCLNB_TEST_B" data-log-body="{\'content_no\':\''+ ctgrList[ctgrIdx].DispObjNo +'\', \'content_name\':\''+ ctgrList[ctgrIdx].DispObjNm +'\', \'content_type\':\'CATEGORY\'}" data-log-index="' + (ctgrIdx+1) + '">' + ctgrList[ctgrIdx].DispObjNm + '</a></li>');
					}
				}
				if(ctgrListLength > 0){
					categoryContents3.push($specialShopArea);
				}
				
				//통계코드
				jQuery('ul > li', $specialShopArea).bind('click', function() {
					doCommonStat(_this.areaCodePre + 'CG'+codeIdx+'06');
				});
				
			}
			
			if( categoryContents && categoryContents.length > 0 ){
				metaCtgrGroupCount = categoryContents.length;
				
				for(var metaIdx = 0; metaIdx < metaCtgrGroupCount; metaIdx++){
					$firstGroup.append(categoryContents[metaIdx]);
				}
				
				if( $firstGroup.children().length > 0 ){
					$layerCont.append($firstGroup);
				}
			}
			if( categoryContents2 && categoryContents2.length > 0 ){
				metaCtgrGroupCount = categoryContents2.length;
				
				for(var metaIdx = 0; metaIdx < metaCtgrGroupCount; metaIdx++){
					$layerCont2.append(categoryContents2[metaIdx]);
				}
				
				if( metaCtgrGroupCount > 0 ){
					$layerWrap.append($layerCont2);
				}
			}
			if( categoryContents3 && categoryContents3.length > 0 ){
				metaCtgrGroupCount = categoryContents3.length;
				
				for(var metaIdx = 0; metaIdx < metaCtgrGroupCount; metaIdx++){
					$layerCont2.append(categoryContents3[metaIdx]);
				}
				
				if( metaCtgrGroupCount > 0 ){
					$layerWrap.append($layerCont2);
				}
			}
			
			if( (categoryContents2.length + categoryContents3.length) >= 1 && lv1CtgrCnt > 13 ){
				$layerWrap.css({ width : 510 });
			}

			//LNB 배너
			var lnbBannerDisplaySpaceNos = [521257982, 521257983, 521257984, 521257985, 521257986, 521257987, 521257988, 521257989, 521257990, 521257991, 521257992, 521257993];
			var lnbBannerDisplaySpaceNo = lnbBannerDisplaySpaceNos[grpIdx];
			var mainLnbBanner = eval('FooterData.mainLnbBanner' + (grpIdx+1));
			if(mainLnbBanner != undefined && mainLnbBanner.length != 0) {
				var data = mainLnbBanner[0];
				var metaCtgrNm = jQuery('strong.tit_category', $layerWrap).text();
				var linkUrl = data.banner.DispObjLnkUrl;
				var n = linkUrl.indexOf('planDisplayNumber');
				var rakeLogBody = "{'content_type':'BANNER', 'content_no':'" + linkUrl.substring(n+18) + "', 'link_url':'" + linkUrl + "', 'trc_no':'" + lnbBannerDisplaySpaceNo + "', 'position_l1':'" + (grpIdx+1) + "'}";
				$layerCont3.append('<a href="' + linkUrl + '" class="cate_link" data-ga-event-category="PC_LNB 카테고리 탐색" data-ga-event-action="메타별 배너" data-ga-event-label="' + metaCtgrNm + '_' + data.banner.DispObjNm + '" data-ga-Dimension84="PCLNB_TEST_B" data-log-body="' + rakeLogBody + '"><img src="' + _UPLOAD_URL_ + data.banner.LnkBnnrImgUrl + '" alt="' + data.banner.DispObjNm + '"></a>');
				$layerWrap.append($layerCont3);
			}
		}else{	//전시카테고리가 없을 경우. 메타 추천카테고리.
			var lnbMenuLi = jQuery('#lnbMenu > ul > li');
			if(jQuery(lnbMenuLi[grpIdx]).hasClass('recommand')){
				$layerWrap = jQuery('#lnbMenu > ul > li.recommand > div');
				jQuery('.tit_category', $layerWrap).hide();
				$layerCont = jQuery('.set_recommand', $layerWrap);
				var boxListCnt = 0;
				var themeEditShopList = eval('FooterData.themeEditShopList');
				if(themeEditShopList != undefined) {
					var $recommendCtgrArea = jQuery('<div class="box">');
					for(var idx = 0 ; idx < themeEditShopList.length ; idx++) {
						$recommendCtgrArea = jQuery('<div class="box">');
						var data = themeEditShopList[idx];
						var ctgrList = data.list;
						$recommendCtgrArea.append('<strong class="subject">' + data.title + '</strong>').append('<div class="cont"/>');
						var recommendDispIndex = 0;
						for(var ctgrIdx = 0 ; ctgrIdx < ctgrList.length ; ctgrIdx++) {
							if(ctgrList[ctgrIdx].linkUrl2 != ''){
								if(recommendDispIndex % 10 == 0 ){
									jQuery('.cont:last-child', $recommendCtgrArea).append('<ul class="box_list"/>');
									boxListCnt++;
								}
								recommendDispIndex++;
								
								jQuery('ul:last-child', $recommendCtgrArea).append('<li data-log-actionid-area="lnb_nav" data-log-actionid-label="alltheme_category"><a href="'+ctgrList[ctgrIdx].linkUrl2+'" data-ga-event-category="PC_LNB 카테고리 탐색" data-ga-event-action="추천카테고리_전시구좌" data-ga-event-label="' + ctgrList[ctgrIdx].title1 + '" data-ga-Dimension84="PCLNB_TEST_B" data-log-body="{\'content_no\':\''+ ctgrList[ctgrIdx].dispObjNo +'\', \'content_name\':\''+ ctgrList[ctgrIdx].title1 +'\', \'content_type\':\'CATEGORY\'}" data-log-index="' +(ctgrIdx+1)+ '"><span class="thumb"><img src="'+ctgrList[ctgrIdx].imageUrl1+'" onError="javascript:this.src=\'' +_IMG_URL_+ '/img/prd_size/noimg_100.gif\';" alt=""></span>' + ctgrList[ctgrIdx].title1 + '</a></li>');
							}
						}
						categoryContents.push($recommendCtgrArea);
					}
					
					//통계코드
					jQuery('ul > li', $recommendCtgrArea).bind('click', function() {
						doCommonStat(_this.areaCodePre + 'CG'+codeIdx+'06');
					});
					
				}
				if( categoryContents && categoryContents.length > 0 ){
					metaCtgrGroupCount = categoryContents.length;
					
					for(var metaIdx = 0; metaIdx < metaCtgrGroupCount; metaIdx++){
						$firstGroup.append(categoryContents[metaIdx]);
					}
					
					if( $firstGroup.children().length > 0 ){
						$layerCont.append($firstGroup);
						$layerWrap.append($layerCont);
					}
				}
				
				$layerWrap.css({ width : (180 * boxListCnt) + (metaCtgrGroupCount - 1) });
			}
		}

        window.rakeLog && window.rakeLog.scrollHandler();
		
		jQuery( document ).ready(function(){
			try {
				jQuery("a", $layerWrap).each(function(idx, obj) {
					jQuery(obj).bind('click', function(){
						catchAnchorGAToEvent();
					});
				});
			} catch(e) {
			}
		});
	},
	//카테고리명 스타일 처리
	setCtgrNmStyle : function(ctgrInfo, isForeign) {
		var ctgrLv;
		if(ctgrInfo.CtgrLv){
			ctgrLv = ctgrInfo.CtgrLv;
		}else if(ctgrInfo.Level){
			ctgrLv = ctgrInfo.Level;
		}
		var ctgrNo;
		if(ctgrInfo.CtgrNo){
			ctgrNo = ctgrInfo.CtgrNo;
		}else if(ctgrInfo.DispCtgrNo){
			ctgrNo = ctgrInfo.DispCtgrNo
		}
		var ctgrNm;
		if(ctgrInfo.CtgrNm){
			ctgrNm = ctgrInfo.CtgrNm;
		}else if(ctgrInfo.DispCtgrNm){
			ctgrNm = ctgrInfo.DispCtgrNm
		}
		
		var $li = jQuery('<li data-log-actionid-area="lnb_nav" data-log-actionid-label="medium_category"/>');
		var $a = jQuery('<a class="link_sub" data-ga-event-category="PC_LNB 카테고리 탐색" data-ga-event-action="중카테고리" data-ga-event-label="' + ctgrNm + '" data-ga-Dimension84="PCLNB_TEST_B" data-log-body="{\'content_no\':\''+ ctgrNo +'\', \'content_name\':\''+ ctgrNm +'\', \'content_type\':\'CATEGORY\'}"/>');

		var ctgrLink = ctgrInfo.CtgrLinkUrl;
		if(isForeign){//해외직구 처리
			ctgrLink = 'http://www.11st.co.kr/browsing/DisplayCategory.tmall?method=getDisplayCategory3Depth&dispCtgrNo=' + ctgrNo;
		}else{
			ctgrLink = 'http://www.11st.co.kr/browsing/DisplayCategory.tmall?method=getDisplayCategory2Depth&dispCtgrNo=' + ctgrNo;
		}
		$a.attr('href', ctgrLink);
		
		//텍스트 컬러
		if(ctgrInfo.CtgrTxtColor != '') {
			$a.css('color', ctgrInfo.CtgrTxtColor);
		}
		//팝업 링크
		if(ctgrInfo.CtgrLinkPopupYn == 'Y') {
			$a.attr('target', '_blank');
		}
		$a.text(ctgrNm)
		$li.append($a)

		//아이콘코드
		if( ctgrInfo.CtgrIconCd == '01' ) {
			$li.append('<span class="gicon ico_new">신규코너</span>');
		}else if( ctgrInfo.CtgrIconCd == '02' ) {
			$li.append('<span class="gicon ico_hot">인기코너</span>');
		}

		//부가정보 노출
		if( ctgrInfo.AddInfoUseYn == 'Y' ) {
			var $addInfo = jQuery('<span class="gnb_ico" />');
			//CLASS명
			if( ctgrInfo.AddInfoClassNm != '' ) {
				$addInfo.addClass(ctgrInfo.AddInfoClassNm);
				//대체텍스트
				if( ctgrInfo.AddInfoClassNm != '' ) {
					$addInfo.append("<span>" + ctgrInfo.AddInfoClassText + "</span>");
				}
			}

			//링크여부
			if( ctgrInfo.AddInfoLinkUseYn == 'Y' ) {
				var $addInfoLink = jQuery('<a/>');
				$addInfoLink.attr('href', ctgrInfo.AddInfoLinkUrl);
				if( ctgrInfo.AddInfoLinkPopupYn == 'Y' ) {
					$addInfoLink.attr('target', '_blank');
				}
				$addInfo = $addInfoLink.append($addInfo);
			}
			$li.append($addInfo);
		}
		return $li;
	},
	menuControl : function(targetDiv, classType){
		if(classType == 'add'){
			targetDiv.addClass('on');
		}else if(classType == 'remove'){
			targetDiv.removeClass('on');
		}
	},
	initEvent : function() {

		var _this = this;

		//메타카테고리 그룹 버튼
		var $menuList = jQuery('#lnbMenu > ul > li');
		var $menuTitle = jQuery('#lnbMenu > ul > li > a');
		var $menuSubList = jQuery('#lnbMenu > ul > li > div');
		var $closeBtn = jQuery('#lnbMenu > ul > li > div > button');

		$menuList.each(function(idx) {
			var $metaLi = jQuery(this);
			var $metaA = jQuery('a', $metaLi);
			var $ctgrDiv = jQuery('div', $metaLi );
			var $ctgrDivInner = jQuery('.box_category', $ctgrDiv);
			var $ctgrDivInner2 = jQuery('.set_recommand', $ctgrDiv);


			var showCtgrLayer = function() {
				if ( $ctgrDivInner.is(':empty') || $ctgrDivInner2.is(':empty') ) {
					_this.makeGrpCtgrLayer(idx);
				}

				_this.menuControl( $metaLi, 'add');

				// 다른 탭에 대한 처리
				for ( var idxLi = 0 ; idxLi < $menuList.length; idxLi++ ) {
					if ( idxLi != idx ) {
						_this.menuControl( jQuery($menuList[idxLi]), jQuery($menuSubList[idxLi]), 'remove');
					}
				}
				jQuery('#metaCategoryDimm').addClass('dimm_on');
			}

			var hideCtgrLayer = function() {
				_this.menuControl( $metaLi, 'remove');
				jQuery('#metaCategoryDimm').removeClass('dimm_on');
			}

			$metaLi.bind(
				{
					'mouseenter' : function(evt) {
							showCtgrLayer();
							rakeLog.sendRakeLog(this);
						}
					, 'mouseleave' : function(evt) {
							hideCtgrLayer();
						}
				}
			);
			
			$closeBtn.bind(
				{
					'click' : function(evt) {
						hideCtgrLayer();
					}
				}
			)
		});
		jQuery( document ).ready(function(){
			try {
				jQuery("#lnbMenu a[name=metaCtgr]").each(function(idx, obj) {
					jQuery(obj).bind('mouseenter', catchAnchorGAToEvent);
				});
			} catch(e) {
			}
		});
		$menuSubList.each(function(idx){
			var $this = jQuery(this).parent();
			var $sub = $this.find('.main_category_layer_v2');

			$this.bind({
				focusout : function(e){
					var rayerObj = $sub.find("button").filter(":last");
					var obj = $sub.find("a").filter(":last");

					if(rayerObj.length > 0){ //배너가 있을 경우에 해당 데이터 제어(영업배너, 광고배너)
						jQuery(event.srcElement).is('button') == true ? _this.menuControl($this, $sub,'remove') : '';
					}else{ //배너가 없을때의 마지막 타이틀 값(테마카테고리, 카테고리 text값 제어)
						jQuery(event.srcElement).text() == obj.text() ? _this.menuControl($this, $sub,'remove') : '';
					}
				}
			});
		});
		
	},
	init : function(area){
		var _this = this;
		_this.$allLayerWrap = jQuery("#gnbCateAllLayerWrap");
		_this.$allLayerCont = jQuery("#gnbCateAllLayer");
		if(_this.area == 'main') {
			_this.areaCodePre = 'MAINM';
		}
		
		var $layerWrap = jQuery('#lnbMenu > ul > li.recommand > div');
		jQuery($layerWrap).removeClass('main_category_layer_v2').addClass('main_recommand_layer');
		jQuery('div', $layerWrap).removeClass('box_category').addClass('set_recommand');
		
		_this.initEvent();
	}
}