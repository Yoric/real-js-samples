$(function(){var e=function(e){return!!/^1(3|4|5|6|7|8|9)\d{9}$/.test(e)};$("#name").on("blur",function(){""==$(this).val()?$("#name-num").html("请输入您的称呼"):$("#name-num").html("")}),$("#phone-slide").on("blur",function(){""==$(this).val()?$("#phoneTip").html("请输入您的手机号码"):e($(this).val())?$("#phoneTip").html(""):$("#phoneTip").html("您输入的手机号码不正确")}),$("#evaluation-btn").on("click",function(n){n.stopPropagation(),n.cancelBubble=!0;var t=$(this);if(""==$("#name").val())return $("#name-num").html("请填写您的称呼"),!1;if($("#name-num").html(""),!e($.trim($("#phone-slide").val())))return $("#phoneTip").html("您输入的手机号不正确"),!1;if($("#phoneTip").html(""),""==$("#department").val())return $("#department-num").html("留学意向国家"),!1;if($("#department-num").html(""),""==$("#slide-area").val())return $("#city-num").html("选择所属区域"),!1;if($("#city-num").html(""),""==$("#context").val())return $("#context-num").html("请填写留学需求"),!1;$("#context-num").html("");var o=cookie("gr_user_id"),a=cookie("referweb");if(null==a||null==a){if((a=window.location.href).match(/[~|《|<|>|'|!|@|#|$|%|^|*|(|)|+]/))return alert("含有特殊字符"),!1;if(document.referrer)try{var l=document.referrer;console.log(3333),l&&(a=l)}catch(n){console.log("获取refer异常")}else a=window.location.href}$.ajax({url:ajaxUrlPrefix.nodeapi+"/cmsapi/assessment",type:"GET",dataType:"json",data:{name:$("#name").val(),phone:$("#phone-slide").val(),country:$("#department").val(),city:$("#slide-area").val(),need:$("#context").val(),dataType:"3",source:a,relationId:21,grUserId:o},success:function(e){console.log(e),0===e.code?($("#reset-btn").trigger("click"),t.parents("#comment_con").hide(),setTimeout(function(){alert("老师将为您做专业评估。")},10)):alert(e.message)},error:function(e,n,t){console.log("获取失败，请重试！CODE:"+e.status)}})}),$("#reset-btn").on("click",function(e){e.stopPropagation(),e.cancelBubble=!0,$("#name").val(""),$("#name-num").html(""),$("#phone-slide").val(""),$("#phoneTip").html(""),$("#context").val(""),$("#department")[0].options[0].selected=!0,$("#slide-area")[0].options[0].selected=!0})});