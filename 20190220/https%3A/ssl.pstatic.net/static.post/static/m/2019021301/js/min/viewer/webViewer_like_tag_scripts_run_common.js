!function($,window,document){function initLikeItInApp(count,likeIt){var sMaxCount=9999;var el=$("#btn_like_end"),bElCount;if(count==0){count="좋아요";}else{if(count>sMaxCount){count="9,999+";}else{count=numberFormat(count);}}bElCount=el.find("._cnt");bElCount.text(count);el.removeClass(likeIt?"off":"on");el.addClass(likeIt?"on":"off");initLikeListBtn();}window.initLikeItInApp=initLikeItInApp;function numberFormat(a){a+="";return a.replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,");}window.numberFormat=numberFormat;function setFollowStatus(bIsFollowed){if(bIsFollowed===true){$(".__followAnchor").hide();$(".__unfollowAnchor").show();}else{$(".__followAnchor").show();$(".__unfollowAnchor").hide();}if(!!window.refreshFollowBtnsForSE3){window.refreshFollowBtnsForSE3(bIsFollowed);}}window.setFollowStatus=setFollowStatus;function attachEventHandlerOfAdjustColumnsByDocumentWidth(){var welSect=$("#__postColumn1");var welSectUl=$("#__postColumn1Ul");var aWelHideOnMobile=$(".__hide_on_mobile");function adjustColumnsByDocumentWidth(){var w1width=!!welSect.length?welSect.width():0;if(w1width>=540){aWelHideOnMobile.css("display","");}else{aWelHideOnMobile.css("display","none");}}adjustColumnsByDocumentWidth();var __delayMs=200;var __fnQueued=null;var lastRunTimestamp=null;var __runRateLimited=function(evt){Date.now=Date.now||function(){return +new Date;};var now=Date.now();lastRunTimestamp=lastRunTimestamp||now;var timeElapsed=now-lastRunTimestamp;var runNow=!__fnQueued||(timeElapsed>__delayMs);clearTimeout(__fnQueued);if(runNow){lastRunTimestamp=now;__fnQueued=setTimeout(adjustColumnsByDocumentWidth,0);}else{lastRunTimestamp=now;var wait=__delayMs-timeElapsed;__fnQueued=setTimeout(adjustColumnsByDocumentWidth,wait);}};$(window).on("resize",__runRateLimited);$(window).on("orientationchange",__runRateLimited);}window.attachEventHandlerOfAdjustColumnsByDocumentWidth=attachEventHandlerOfAdjustColumnsByDocumentWidth;function attachEventApplyButtonHandler(){var elCancel=$(".sect_follow_event button.btn_follow_event.__cancel");var elApplyCount=elCancel.find("span i");var elApply=$(".sect_follow_event button.btn_follow_event.__apply");elApply.on("click",function(ev){if(!mug.$.User.isLoggedIn){mug.common.checkLogin();return;}if(elApply.hasClass("__requesting")){alert("응모 요청중입니다.");return;}else{elApply.addClass("__requesting");}$.ajax({url:"/viewer/applyUserEvent.nhn",dataType:"json",method:"post",data:{eventNo:elApply.attr("data-eventNo"),authorNo:elApply.attr("data-authorNo")}}).done(function(json){if(json.success){if(json.eventPreAction=="FOLLOW"){mug.contents.util.followHide($(".__followAnchor"));mug.contents.util.followShow($(".__unfollowAnchor"));}elApply.hide();elApply.removeClass("__requesting");var newApplyCount=Number(elApplyCount.html())+1;elApplyCount.html(newApplyCount);elCancel.css("display","");}alert(json.message);elApply.removeClass("__requesting");}).fail(function(){alert("오류가 발생하였습니다.");elApply.removeClass("__requesting");});});elCancel.on("click",function(ev){if(!mug.$.User.isLoggedIn){mug.common.checkLogin();return;}if(elCancel.hasClass("__requesting")){alert("취소 요청중입니다.");return;}else{elCancel.addClass("__requesting");}$.ajax({url:"/viewer/cancelApplyUserEvent.nhn",dataType:"json",method:"post",data:{eventNo:elCancel.attr("data-eventNo"),authorNo:elCancel.attr("data-authorNo")},}).success(function(json){if(json.success){if(json.eventPreAction=="FOLLOW"){mug.contents.util.followHide($(".__unfollowAnchor"));mug.contents.util.followShow($(".__followAnchor"));}elCancel.hide();elCancel.removeClass("__requesting");var newApplyCount=Number(elApplyCount.html())-1;elApplyCount.html(newApplyCount);elApply.css("display","");}else{if(json.notLogin){alert(location.href);}else{alert(json.message);}}elCancel.removeClass("__requesting");}).fail(function(){alert("요청 중에 오류가 발생했습니다.");elCancel.removeClass("__requesting");});});}window.attachEventApplyButtonHandler=attachEventApplyButtonHandler;}(jQuery,window,document);