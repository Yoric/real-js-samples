var adSave;
var _stckImg1 = [];
if(adSave==null){
	adSave={};
}
if (adSave.ins == null)
	adSave.ins = {};

adSave.log = function(param) {
	adSave.log =  this;
	this.timer = null;
};

adSave.log.prototype = {
	isAdSave : function(){
		return false;
		/*
		if(TMCookieUtil.isExist(0,"adSave")){
			return true;
		}else{
			return false;
		}
		*/
	},

	//광고 전환수 Insert하기 위한 함수
	insertAdSaveLog : function(param){
		if( this.isAdSave() ){

			var adSaveNo = TMCookieUtil.getSubCookie(0,"adSave");
			var typGubn = TMCookieUtil.getSubCookie(0,"typGubn");
			var areaGubn = TMCookieUtil.getSubCookie(0,"areaGubn");

			var adSaveType;

			if(param=='order'){
				adSaveType='01';
			}else if(param=='basket'){
				adSaveType='02';
			}else if(param=='jjim'){
				adSaveType='03';
			}else{
				adSaveType='04';
			}
			var img = new Image();
			_stckImg1.push(img);
			img.src = 'http://www.11st.co.kr/ad11st/Ad11stAction.tmall?method=insertTrcLog'+
			           '&adSaveNo=' + adSaveNo +'&adSaveType='+ adSaveType+'&typGubn='+typGubn+'&areaGubn='+areaGubn;
		}
	},

	//cpc에서 사용하기 위한 함수
	clickCPC : function(typGubn,areaGubn,trcNo,url,target){
		var img2 = new Image();
		_stckImg1.push(img2);
		img2.src = 'http://aces.11st.co.kr/cpc.do?c='+trcNo+'^'+typGubn+'^'+areaGubn+'&noCache='+new Date().getTime();
		if(!(url==undefined || url==null ||url=='')){
			if(!(target==undefined || target==null) && target=="parent"){
				setTimeout(function() { parent.location.href = url; } , 100);
			}else{
				setTimeout(function() {
					if(target == "_blank") window.open(url);
					else window.location.href = url;
				} , 100);
			}
		}

	},

    callAdTrackingUrls : function (target) {
        var index = 0;

        while (1) {
            var url = target.getAttribute('data-ad-tracking-url-' + index);
            if (url) {
            	if(url.indexOf("action.adoffice.11st.co.kr") < 1){
                    var trackingImg = new Image();
                    trackingImg.src = url;
                    // _stckImg1.push(trackingImg);
				}
                index ++;
            } else {
                break;
            }
        }
    },

    callAdDispTrackingUrls : function () {
        var $dispArea = $('a[name=adHotPrd]');
        $dispArea.each(function() {
            if ($(this).is(':visible')) {
                var index = 0;
                while (1) {
                    var url = $(this).attr('data-ad-disp-tracking-url-' + index);
                    if (url) {
                        var trackingImg = new Image();
                        trackingImg.src = url;

                        index ++;
                    } else {
                        break;
                    }
                }
            }
        });
    }

};

(function() {
	adSave.ins = new adSave.log();
})();

function goUrl(url){
	if(!(url==undefined || url==null ||url=='')){
		setTimeout(function() { window.location.href = url; } , 100);
	}
}