/**
 * 쇼핑박스 Common script 
 */
/*********************
 * Ajax Method
 * 1. set
 *  - 파라미터 설명
 *   url : 요청할 url
 *   params : Aajax로 보낼 파라미터
 *   callback : AJax요청 후 실행될 callback method
 *   divId : callback Method 에 적용될 divId
 *   afterAction : callback method 이후 실행될 스크립트 function
 * 2. send 
 *  - Ajax 요청 함수
 *  <example>
 *  var oAjax = new shopadbox.ajax(url, params, callback, method, divId, afterAction);
 *  oAjax.send();
 *********************/
var shopadbox = {};
shopadbox.ajax  = jindo.$Class({
	$init : function(url, params, callback, method, targetId, targetElement, afterAction) {
		this.url = url;
		this.params = params;
		this.callback = callback;
		this.method = method;
		this.targetId = targetId;
		this.targetElement =targetElement;
		this.afterAction = afterAction;
		this.set(url, params, callback, method, targetId,targetElement , afterAction);
	},
	set : function(url, params, callback, method, targetId,targetElement , afterAction) {
			this.url = url;
			this.params = params;
			this.callback = callback;
			this.method = method;
			this.targetId = targetId;
			this.targetElement =targetElement;
			this.afterAction = afterAction;			
	},
	call : function(url, params, callback, method, divId, afterAction) {
		this.set(url, params, callback, method, divId, afterAction);
		this.send();
	},
	send: function() {
		var targetId = this.targetId;
		var targetElement = this.targetElement;
		if(targetElement == null){
			targetElement = jindo.$Element(targetId);
		}
		var afterAction = this.afterAction;
		var callback = this.callback;
		this.oAjax = new jindo.$Ajax(this.url, {
			type : 'xhr',
			method : this.method,			// 메서드 정의
			onload : function(res){
				callback(res,targetElement,afterAction);				
			},
			timeout : 10,
			async : true			// 비동기 호출 default true
			});
		this.oAjax.request(this.params);			
	}
});

/*********************
 * Flicking Method
 * 1. init
 * 2. loadPanelData 
 *********************/
shopadbox.flicking  = jindo.$Class({
	$init : function(targetId) {	
		
		//STEP1. Flicking 할 target 영역 양옆에 Flicking용 영역을 추가한다.
		var ct = jindo.$Element( jindo.$$.getSingle("div.flick-panel", targetId ));
        ct.beforeHTML("<div class='flick-panel'></div>");
        ct.afterHTML("<div class='flick-panel'></div>");

        //STEP2. 해당 영역에 Flicking Object를 생성한다.
        this.oFlicking = new jindo.m.Flicking( jindo.$(targetId),{
            nTotalContents : 3,
            nDefaultIndex : 1,
            sClassPrefix: 'flick-',
            sContentClass : 'panel',
            bUseCircular: true,
            bAutoSize: true
        });
        
        var self = this;

        //STEP3. Flicking 영역에 이벤트를 부여한다.
        this.oFlicking.attach({
            'afterFlicking' : function(oCustomEvt) {         	
            	
            	//STEP3-1. 좌우 이동에 따른 영역 호출
                if (oCustomEvt.bLeft) {		
                	var loadInfo = shopadbox.util.getTabInfo(this.getElement(),1);
                	self.loadPanelData(loadInfo,loadInfo.url,this.getNextElement());	
                } else {
                	var loadInfo = shopadbox.util.getTabInfo(this.getElement(),-1);
                	self.loadPanelData(loadInfo,loadInfo.url,this.getPrevElement());	
                }        
                
                //STEP3-2. 영역이동에 따른 상단 탭 on class 변경
                shopadbox.util.changeOnClass(jindo.$Element("tab_"+jindo.$$("input.tabName",this.getElement())[0].value));

                //STEP3-3. 플리킹시 플리킹 노티 보여줌
                self.startFlickingNoti();
            }
        });  
        
        //STEP4. 현재 영역 좌우의 영역에 페이지를 불러화 초기화 해준다.
    	var preLoadInfo = shopadbox.util.getTabInfo(this.oFlicking.getElement(),-1);
    	var nextLoadInfo = shopadbox.util.getTabInfo(this.oFlicking.getElement(),1);
    	
    	self.loadPanelData(preLoadInfo,preLoadInfo.url,this.oFlicking.getPrevElement());	
    	self.loadPanelData(nextLoadInfo,nextLoadInfo.url, this.oFlicking.getNextElement());
    	
    	//STEP5. 플리킹 노티용 이벤트객체 생성
    	this._initFlickingNoti();

        return this.oFlicking;	//Flicking Object 반환
	},
	loadPanelData : function(loadInfo,url,targetElement) {		
		
		var divId = this.divId;
		var afterAction = this.afterAction;
		var callback = this.callback;
		
		this.oAjax = new jindo.$Ajax(url, {
			type : 'xhr',
			method : 'get',			// 메서드 정의
			onload : function(res){
				targetElement.html(res.text());
			},
			timeout : 10,
			async : true			// 비동기 호출 default true
			});
		this.oAjax.request(loadInfo);
	},
	startFlickingNoti: function(){		

		this._showFlickingNoti();
		setTimeout(this._hideFlickingNoti, 1000);
	},
	_initFlickingNoti:function(){	
		
		if(this.oTransition ==null || this.oTransition == undefined){
			this.oTransition = new jindo.Transition();
		}
    	
		if(jindo.$$("#contents .flick_prev").length == 0 && jindo.$$("#contents .flick_next").length == 0 ){
			var ipadPrevBtn = jindo.$("<a href='#' onclick='return false;' class='flick_prev' style='left: -43px; '>이전 캐스트</a>");
			var ipadNextBtn = jindo.$("<a href='#' onclick='return false;' class='flick_next' style='right: -43px; '>다음 캐스트</a>");

			jindo.$Element('contents').append(ipadPrevBtn).append(ipadNextBtn);
			
		}
	},	
	_hideFlickingNoti: function() {
		var self = shopadbox.status.oFlick;
		self.oTransition.start(150, jindo.$$("#contents .flick_prev")[0], {'@left' : '-43px'}, jindo.$$("#contents .flick_next")[0], {'@right': '-43px'});
	},
	_showFlickingNoti: function() {

		var self = shopadbox.status.oFlick;
		if(self.oTransition.isPlaying()){
			self.oTransition.abort();
		}
		jindo.$Element(jindo.$$("#contents .flick_prev")[0]).css("left", "0px");
		jindo.$Element(jindo.$$("#contents .flick_next")[0]).css("right", "0px");
	}
});

/***************************
 * 쇼핑박스 Common Utils Class
 * 
 * Util 성격의 function을 정의 
 * 별다른 인스턴스 생성 없이 사용가능 하다
 * <example>
 * shopadbox.util.loadInnerHtml(req,divId,afterAction);
 * </example>
 * *************************/
shopadbox.util = jindo.$Class({
	$static : {
		loadInnerHtml : function(req, targetElement, afterAction) {		
			if (req.readyState() == 4 && req.status() == 200) {
	
					//STEP1. Ajax요청
					if (targetElement != null) {
						targetElement.html(req.text());
						
						//STEP1-2. script 부분의 validation 및 실행 부분
						var contents = req.text();
						var script_area_check = /<\s*script.+?<\/\s*script\s*>/gim;		
						contents = contents.replace(/\r\n/g, "<-newline->");
						var dataArr = contents.match(script_area_check);
						
						if (dataArr != null) {
							for ( var i = 0; i < dataArr.length; ++i) {
								contents = dataArr[i].replace(/<-newline->/g, "\r\n");
								contents = contents
										.replace(
												/<\s*\/*script(.)?(type=\"text\/javascript\")?>/gi,
												"");
								eval(contents);
							}
					}
						
					if (afterAction != null){
						for(var i = 0 ; i < afterAction.length; i++){
							afterAction[i]();
						}
					}
				}
			}
			
		},
		isEmpty : function(obj) {
			if (obj == null)
				return true;
			return false;
		},
		isNotEmpty : function(obj) {
			return !isEmpty(obj);
		},
		changeOnClass : function(select_ele){
			this._closeAllOnClass();
			select_ele.cssClass('on',true);
		},
		_closeAllOnClass : function(){
			var eles = jindo.$Element('tab_title').child();
			for(var i in eles){
				eles[i].cssClass('on',false);
			}
		},
		getTabInfo:function(ele,distance){
        	var order=Number(jindo.$$("input.order",ele)[0].value);
        	var exposePage=Number(jindo.$$("input.exposePage",ele)[0].value);
        	var totalCount=Number(jindo.$$("input.totalCount",ele)[0].value);
        	var tabName=jindo.$$("input.tabName",ele)[0].value;

        	//STEP2. distance 만큼 tab 정보 변경하여 세팅
        	order = order+distance;									//변경될 order
        	exposePage = exposePage+distance;        				//변경될 exposePage
        	var index = shopadbox.status.tabMenu.indexOf(tabName);	//현재 탭의 인덱스
        	var type=null;

        	//STEP3. 조정된 노출페이지(exposePage)의 유효성 검사
        	if(exposePage > totalCount){							//변경시 노출되는 페이지가 totalCount보다 클경우
         		index = index+1;		
        		type = "start";
        		order = null;
        		if(index > shopadbox.status.tabMenu.length-1){		//탭인덱스가 전체 탭 개수보다 클경우(첫인덱스로 변경)
        			index = index- shopadbox.status.tabMenu.length;
        		}
        	}else if(exposePage<=0){								//변경시 노출되는 페이지가 totalCount보다 작을경우
        		index = index-1;									
        		type = "end";
        		order = null;
        		if(index < 0){										//탭인덱스가 전체 탭 개수보다 작을경우(마지막인덱스로 변경)
            		index = shopadbox.status.tabMenu.length+index;
        		}      		
        	} 

        	//STEP4. 조정된 실제페이지순서(order)의 유효성 검사
        	if(order>totalCount){
        		order = order - totalCount;
        	}else if(order<=0){
        		order = totalCount + order;
        	}
        	
        	//STEP5. 해당하는 탭의 정보 반환
        	return {type:type,order:order,exposePage:exposePage,totalCount:totalCount,url:tabTitle[shopadbox.status.tabMenu[index]],tabName:shopadbox.status.tabMenu[index]};
		},
		isApplyFlicking:function(){
			
			var isApplyFlicking = false;
			var oOs = jindo.$Agent().os();
			//STEP1. 아이패드 여부 check
			if(oOs.ipad){
				isApplyFlicking = true;
				return isApplyFlicking;
			}/*
			var version = oOs.version == null ? 0 : parseFloat(oOs.version);
			//STEP2. 안드로이드 2.2 이상 체크
			if(oOs.android && version >= 2.2){
				isApplyFlicking = true;
				return isApplyFlicking;				
			}
			//STEP3. IOS 4.0 이상 체크
			if(oOs.ios && version >= 4.0){
				isApplyFlicking = true;
				return isApplyFlicking;				
			}*/
			
			return isApplyFlicking;
		}
	}
});

shopadbox.status = jindo.$Class({
	$static:{
		oFlick:null,
		isFlicking:function(){
			if(this.oFlick == null){
				return false;
			}
			return true;
		},
		tabMenu:['product','mall','men']
	}
});
/********************
 * 쇼핑박스 Main script 
 ********************/

/**
 * Ajax 실행후 해당 영역에 서버에 받아온 결과 값을 출력한다.
 * @param url		호출할 url
 * @param params	Ajax로 전송할 파라미터 (Json 타입)
 * @param divId		서버에서 받아온 영역을 출력할 영역 id
 * @param afterFunction 최종적으로 실행할 함수 (optional)
 */
function sendAjaxAfterInnerHtml(url,params,targetId,afterFunction){
	var oAjax = new shopadbox.ajax(url, params, shopadbox.util.loadInnerHtml, 'get', targetId,null, afterFunction);
	oAjax.send();
}

function sendAjaxAfterInnerHtmlForElement(url,params,ele,afterFunction){
	console.log("### url : " + url);
	var oAjax = new shopadbox.ajax(url, params, shopadbox.util.loadInnerHtml, 'get', null,ele, afterFunction);
	oAjax.send();
}


/**
 * 최상단 탭 클릭시 실행함수로 광고명에 따른 하단 영역을 호출한다. 
 * @param tab_name
 * @param targetId
 */
function clickTab(ele,adName,targetId){
	shopadbox.util.changeOnClass(jindo.$Element(ele).parent());	

	if(shopadbox.status.isFlicking()){
		_clickTabForFlicking(ele,adName);		//플리킹일시 해당 함수 호출
	}
	else if(adName === 'product') {

        var debugParams = {};
        sendAjaxAfterInnerHtml(tabTitle[adName],debugParams,targetId,null);
    }
	else{
		sendAjaxAfterInnerHtml(tabTitle[adName],{},targetId,null);
	}
}

function _clickTabForFlicking(ele,adName){

	//STEP1. 노출될 페이지 양옆의 페이지 불로오기 위해 실행할 함수 세팅
	var preLoadFunc = jindo.$Fn(
		function(){
			var ele = shopadbox.status.oFlick.oFlicking.getElement();
			var tabInfo = shopadbox.util.getTabInfo(ele,-1);
			sendAjaxAfterInnerHtmlForElement(tabInfo.url,tabInfo,shopadbox.status.oFlick.oFlicking.getPrevElement(),null);
		}
	).bind();
	var nextLoadFunc = jindo.$Fn(
		function(){
			var ele = shopadbox.status.oFlick.oFlicking.getElement();
			var tabInfo = shopadbox.util.getTabInfo(ele,1);
			sendAjaxAfterInnerHtmlForElement(tabInfo.url,tabInfo,shopadbox.status.oFlick.oFlicking.getNextElement(),null);
		}
	).bind();
	
	//STEP2. 탭명 변경할 함수 세팅
	var onChangeTabMenu = jindo.$Fn(
		function(){
			shopadbox.util.changeOnClass(jindo.$Element("tab_"+jindo.$$("input.tabName",shopadbox.status.oFlick.oFlicking.getElement())[0].value));
		}
	).bind();	
	
	var oFlick =shopadbox.status.oFlick.oFlicking;
	
	//STEP3. 클릭한 광고를 불러와서 해당 영역에 붙인다.
	sendAjaxAfterInnerHtmlForElement(tabTitle[adName],{},oFlick.getElement(),[onChangeTabMenu,preLoadFunc,nextLoadFunc]);
	
	//STEP4. 탭 클릭시 플리킹 노티 보여줌
	shopadbox.status.oFlick.startFlickingNoti();
}

/**
 * 다음 광고타입을 호출한다.(page rolling)
 * @param tab_name 광고명
 * @param targetId 호출된 영역을 출력할 영역id
 * @param curOrder 현재위치
 */
function prevAdType(adName, targetId, curOrder, exposePage, bannerCurOrder, bannerExposePage) {
	if(shopadbox.status.isFlicking()){
		_prevAdTypeForFlicking();		//플리킹일시 해당 함수 호출
	}else{
		// 트렌드 몰은 배너가 없어서 배너관련 파라미터를 전송하지 않는다.
		if (!bannerCurOrder && !bannerExposePage) {
			sendAjaxAfterInnerHtml(tabTitle[adName],{type:'prev', order:curOrder, exposePage:exposePage}, targetId, null);
		} else {
			sendAjaxAfterInnerHtml(tabTitle[adName],{type:'prev', order:curOrder, exposePage:exposePage, bannerType:'prev', bannerOrder:bannerCurOrder, bannerExposePage:bannerExposePage}, targetId, null);
		}
	}
}

function _prevAdTypeForFlicking(){
	var oFlick =shopadbox.status.oFlick.oFlicking;
	var currHtml = oFlick.getElement().html();
	var prevHtml = oFlick.getPrevElement().html();
	oFlick.getElement().html(prevHtml);
	oFlick.getNextElement().html(currHtml);
	var loadInfo = shopadbox.util.getTabInfo(oFlick.getElement(),-1);	
	
	//STEP1. 이전 버튼에 해당하는 영역 출력
	sendAjaxAfterInnerHtmlForElement(loadInfo.url,loadInfo,oFlick.getPrevElement(),null);
	
	//STEP2. 상단 탭 변경
	shopadbox.util.changeOnClass(jindo.$Element("tab_"+jindo.$$("input.tabName",oFlick.getElement())[0].value));
	
	//STEP3. 이전 버튼 클릭시 플리킹 노티 보여줌
	shopadbox.status.oFlick.startFlickingNoti();
}

/**
 * 다음 광고타입을 호출한다.(page rolling)
 * @param tab_name 광고명
 * @param targetId 호출된 영역을 출력할 영역id
 * @param curOrder 현재위치
 */
function nextAdType(adName,targetId,curOrder,exposePage, bannerCurOrder, bannerExposePage){
	if(shopadbox.status.isFlicking()){
		_nextAdTypeForFlicking();		//플리킹일시 해당 함수 호출
	}else {
		// 트렌드 몰은 배너가 없어서 배너관련 파라미터를 전송하지 않는다.
		if (!bannerCurOrder && !bannerExposePage) {
			sendAjaxAfterInnerHtml(tabTitle[adName],{type:'next', order:curOrder, exposePage:exposePage}, targetId, null);
		} else {
			sendAjaxAfterInnerHtml(tabTitle[adName],{type:'next', order:curOrder, exposePage:exposePage, bannerType:'next', bannerOrder:bannerCurOrder, bannerExposePage:bannerExposePage}, targetId, null);
		}
	}
}

function _nextAdTypeForFlicking(){
	var oFlick =shopadbox.status.oFlick.oFlicking;
	var currHtml = oFlick.getElement().html();
	var nextHtml = oFlick.getNextElement().html();
	oFlick.getElement().html(nextHtml);
	oFlick.getPrevElement().html(currHtml);
	var loadInfo = shopadbox.util.getTabInfo(oFlick.getElement(),1);
	
	//STEP1. 다음 버튼에 해당하는 영역 출력	
	sendAjaxAfterInnerHtmlForElement(loadInfo.url,loadInfo,oFlick.getNextElement(),null);
	
	//STEP2. 상단 탭 변경
	shopadbox.util.changeOnClass(jindo.$Element("tab_"+jindo.$$("input.tabName",oFlick.getElement())[0].value));
	
	//STEP3. 다음 버튼 클릭시 플리킹 노티 보여줌
	shopadbox.status.oFlick.startFlickingNoti();
}

/**
 * 다음 배너를 호출한다.(page rolling)
 * @param tab_name 광고명
 * @param targetId 호출된 영역을 출력할 영역id
 * @param curOrder 현재위치
 */
function nextAdBanner(adName, targetId, bannerCurOrder, bannerExposePage) {
	sendAjaxAfterInnerHtml(tabTitle[adName], {bannerType:'next', bannerOrder:bannerCurOrder, bannerExposePage:bannerExposePage}, targetId, null);
}

/**
 * 현재위치명 , 현재위치번호를 전역변수로 지정한다.
 * @param curPosName 현재위치명
 * @param curPosNum 현재위치번호
 */
function createCurPos(curPosName,curPosNum){
	eval(curPosName + " = "+curPosNum);
}

/**
 * 쇼핑박스 초기화
 *  - 쇼핑박스 초기 실행시 초기화할 동작,함수를 지정
 */

(function initShopAdBox(){
	/**
	 * Flicking 적용 TODO List
	 * 1. Case별 분리
	 * 플리킹시작 -> 양옆의 공간에 Ajax 콜해서 페이지 로딩
	 * 
	 */	
	if(isMobile && shopadbox.util.isApplyFlicking()){		
		//STEP1. Flicking 영역 생성
		shopadbox.status.oFlick = new shopadbox.flicking('contents');	
		//STEP2. 초기 플리킹 노티
		shopadbox.status.oFlick.startFlickingNoti();
	}

	/** 최상단 쇼핑박스 Tab 이벤트 Mapping **/
	jindo.$Element("shop_wrap").delegate("click",".st_gift",function(vEvent){clickTab(vEvent.element,'product','contents'); return false;});
	jindo.$Element("shop_wrap").delegate("click",".st_mens",function(vEvent){clickTab(vEvent.element,'men','contents'); return false;});
	jindo.$Element("shop_wrap").delegate("click",".st_shopping",function(vEvent){clickTab(vEvent.element,'mall','contents'); return false;});
	
	/** nClick 실행 **/
	nclk_evt = 1;
	nsc = "navertop.v3";
	nclk_do();	
})();