_.Module.define({path:"frs-list/pagelet/thread",sub:{initial:function(t){this.bindData(t)},bindData:function(t){var o=this;t.on("page_change",function(n){$(t.document).addClass("pagelet-loading"),t.refresh({url:n.url}).then(function(){$(t.document).removeClass("pagelet-loading"),o.gotoTop()})})},gotoTop:function(){var t=$(".j-content-leftList");if(t&&t.offset()){var o=$("html, body").animate({scrollTop:t.offset().top-50},250,"linear");$("window").on("scroll",function(){o.stop()})}}}});_.Module.define({path:"frs-list/widget/popup_zhang",sub:{initial:function(){var n="2018/03/31 18:30",t=new Date,e=new Date(Date.parse(n));t>e&&$(".popup_zhang_cont").css("display","block"),this.initialEvent()},initialEvent:function(){$(".close-popup").click(function(){$(".popup_zhang_cont").css("display","none")}),$(".enterEr").mouseover(function(n){window.event?window.event.cancelBubble=!0:n.stopPropagation(),$(".frsQRCode").css({display:"block"}),$.stats.track("\u5f20\u56fd\u8363toast","toast\u56fe\u7247","frs","click",{})})}}});