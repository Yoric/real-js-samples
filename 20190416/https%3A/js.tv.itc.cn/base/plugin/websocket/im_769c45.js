/* sohutv 2017-10-25 15:06:55 */
!function(){var t=function(){function t(a){function n(t){return $(".gl-true-tit").is(":visible")?!1:$(".gl-true-tit").length>0?($(".gl-true-tit").parents(".globallogin").show(),!1):void kao("smz",function(){sohuHD._smz.init(t)})}function l(t){g&&messagebus.unsubscribe(g),sohuHD.user.originalData?1==sohuHD.user.originalData.isAuth?t():n(t):g=messagebus.subscribe("core.login.userinfo",function(e,i){r.userInfo={user_id:i.id,fee:i.fee,nickname:i.nickName,profile_url:"//my.tv.sohu.com/user/"+i.id,img_url:i.smallPhoto,vipicon:i.vipicon},0==r.elem.find(".G-bot-G-pic").length&&r.elem.find(".J_user").html(r.userTpl.render(r.userInfo)),sohuHD.user.originalData=i,setTimeout(function(){messagebus.unsubscribe(g)},0),1==sohuHD.user.originalData.isAuth?t():n(t)},null,null,{execTime:1})}var r=this,a=a||{},c=1,o=!0,d=!0,m=1,u=null,p=!0,f=!1,h=$('<div id="JS_im_wrap"></div>'),v={sendMsg:function(t){var e={content_type:2,content:"",to_uid:"",valid:1},i=$.extend(e,t);return i.content.length<50?$.getJSON("//my.tv.sohu.com/user/a/message/send_privateletter.do?callback=?",i):s("//my.tv.sohu.com/user/a/message/send_privateletter.do?iframe=1",i)},getMsgList:function(t){var e={valid:1,page:1,size:10};return $.getJSON("//my.tv.sohu.com/user/a/message/privateletter_list_v2.do?callback=?",$.extend(e,t))},getMsgDetail:function(t){var e={to_uid:"",valid:1,page:1,size:6};return $.getJSON("//my.tv.sohu.com/user/a/message/detail_privateletter_v2.do?callback=?",$.extend(e,t))},getUserInfo:function(t){var e={to_uid:"",valid:1};return $.getJSON("//my.tv.sohu.com/user/a/message/privateletter_userinfo_v2.do?callback=?",$.extend(e,t))},searchUser:function(t){var e={keyword:"",valid:1};return $.getJSON("//my.tv.sohu.com/user/a/message/search_user_v3.do?callback=?",$.extend(e,t))},readAll:function(){return $.getJSON("//my.tv.sohu.com/user/a/message/update_readall.do?callback=?")},deteleAllLetters:function(t){var e={valid:1};return $.getJSON("//my.tv.sohu.com/user/a/message/update_deleteall_v3.do?callback=?",$.extend(e,t))},deteleUserLetter:function(t){var e={valid:1,to_uid:""};return $.getJSON("//my.tv.sohu.com/user/a/message/delete_lettersdouble_v3.do?callback=?",$.extend(e,t))},ifReadall:function(){return $.getJSON("//my.tv.sohu.com/user/a/message/letter_count_v3.do?&valid=1&callback=?")}},_={min:function(){return["",'<div class="privateMsg-corner cfix JS_im_float">','    <p class="l cfix"><span class="icon_pmmsg l"><em class="littleRed" style="display:none"></em></span><span class="c-black fs14 l">\u79c1\u4fe1\u804a\u5929</span></p>','    <span class="r arr"></span>',"</div>"].join("")},main:function(){var t=["",'<div class="privateMsg JS_im_main">','    <div class="pM-top rel cfix">','        <div class="pM-l">','            <form action="javascript:void(0)" class="pM-ss">','                <input class="pM-ssin va-t JS_im_search_text" placeholder="\u641c\u7d22\u79c1\u4fe1\u7528\u6237" type="text">','                <a href="javascript:void(0)" class="pM-sbtn JS_im_search_user_btn"></a>',"            </form>","        </div>",'        <div class="pM-ss-list JS_im_search_user_list" style="display: none"></div>','        <div class="pM-r cfix">','            <span class="l uname c-black"></span>',"        </div>",'        <span class="pM-close"></span>',"    </div>",'    <div class="pM-mid1 cfix">',"        <!-- Start : left -->",'        <div class="pM-l">','            <div class="pM-fanM ta-c JS_im_left_up" style="display: none;"><span class="arr arr_t"></span></div>','            <ul class="pM-fanlist">',_.userList(),"            </ul>",'            <div class="pM-fanM ta-c JS_im_left_down" style="display: none;"><span class="arr arr_b"></span></div>',"        </div>",'        <div class="pM-r">','            <div class="pM-cont" id="im_scroll_cont_1">',"            </div>","        </div>","    </div>",'    <div class="pM-bot cfix">','        <div class="pM-l">','            <div class="pM-more"><a href="javascript:void(0)" class="JS_msg_more">\u67e5\u770b\u5168\u90e8\u79c1\u4fe1</a></div>',"        </div>",'        <div class="pM-r">','            <textarea class="pM-textarea va-m" name="im_content" id="im_content" maxlength="300" placeholder="\u53ef\u8f93\u5165300\u5b57"></textarea><a href="javascript:void(0)" class="pM-imgUp va-m" id="JS_im_uploadimg"></a><a href="javascript:void(0)" class="btnSend va-m" id="JS_im_send">\u53d1\u9001</a>',"        </div>","    </div>","</div>"].join("");return new sohuHD.Template(t)},userList:function(){return["","<% $.each(list,function(i,item){ %>",'<li class="cfix" data-chat="<%=item.fromUid%>">','  <a class="pm-avatar l" href="//my.tv.sohu.com/user/<%=item.fromUid%>" target="_blank">','    <img src="<%=item.fromSmallPhto%>" width="35" height="35" alt="<%=item.fromNick%>" title="<%=item.fromNick%>" class="uimg"/>',"      <%if(item.count){%>",'          <span class="red_bub"><em><%=item.count%></em></span>',"      <%}else{%>",'          <span class="red_bub" style="display:none"><em></em></span>',"      <%}%>","  </a>",'  <span class="l c-black uname js_chat_name"><%=item.fromNick%></span>','<span class="js_delete_letter pm_delete hide"></span>',"</li>","<%});%>"].join("")},userInfo:function(){var t=["",'<li class="cfix on" data-chat="<%=userInfo.toUid%>">','    <a class="pm-avatar l" href="//my.tv.sohu.com/user/<%=userInfo.toUid%>" target="_blank">','     <img src="<%=userInfo.toPic%>" width="35" height="35" alt="<%=userInfo.toNickname%>" title="<%=userInfo.toNickname%>" class="uimg">',"   </a>","<%if(userInfo.noreadcount){%>",'		<span class="red_bub"><em><%=userInfo.noreadcount%></em></span>',"<%}else{%>",'		<span class="red_bub" style="display:none"><em>0</em></span>',"<%}%>",'   <span class="l c-black uname js_chat_name"><%=userInfo.toNickname%></span>','<span class="js_delete_letter pm_delete hide"></span>',"</li>"].join("");return new sohuHD.Template(t)},detail:function(){var t=["","<%if(list.length){%>","  <% $.each(list,function(i,item){ %>",'  <div class="pM-sepdiv"><%=helper.dateFormat(item.createTime,"yyyy-MM-dd hh:mm:ss")%></div>',"  <%if(item.contentType == 2){%>","      <%if(item.senderUid == my.selfUid){%>",_.sendTpl.text(),"      <%}else{%>",_.MsgTpl.text(),"      <%}%>","  <%}else if(item.contentType == 3){%>","      <%if(item.senderUid == my.selfUid){%>",_.sendTpl.pic(),"      <%}else{%>",_.MsgTpl.pic(),"      <%}%>","  <%}else if(item.contentType == 4){%>",_.MsgTpl.video(),"  <%}else if(item.contentType == 5){%>",_.MsgTpl.topic(),"  <%}else if(item.contentType == 1){%>",_.MsgTpl.html(),"  <%}%>","  <% });%>","<%}else{%>","<%}%>"].join("");return new sohuHD.Template(t)},list:function(){return["","<!-- Start : privateMsg -->",'<div class="privateMsg JS_im_list">',"		<!-- Start : privateMsg top -->",'		<div class="pM-top rel cfix">','			<span class="arr_l l JS_openMsgBox"></span>','            <form action="javascript:void(0)" class="pM-ss r">','                <input class="pM-ssin va-t JS_im_search_text" placeholder="\u641c\u7d22\u79c1\u4fe1\u7528\u6237" type="text">','                <a href="javascript:void(0)" class="pM-sbtn JS_im_search_user_btn"></a>',"            </form>",'        <div class="pM-ss-list JS_im_search_user_list" style="display: none"></div>','			<span class="pM-close"></span>',"		</div>","		<!-- End : privateMsg top -->","		<!-- Start : privateMsg middle -->",'		<div class="pM-mid2 rel">','			<div class="pM-cont" id="im_scroll_cont_2">','				<ul class="pM-list">',"				</ul>","			</div>","		</div>","		<!-- End : privateMsg middle -->","		<!-- Start : privateMsg bottom -->",'		<div class="pM-bot cfix">','			<a href="javascript:void(0)" pb-click data-pb-txid="letter_allread" class="btnAlled r JS_im_readall">\u4e00\u952e\u5df2\u8bfb</a>','          <a href="javascript:void(0)" class="btnAlled r JS_im_deleteall">\u5168\u90e8\u5220\u9664</a>',"		</div>","		<!-- End : privateMsg bottom -->","	</div>"].join("")},listItem:function(){var t=["","<% $.each(list,function(i,item){ %>",'<li class="cfix" data-chat="<%=item.fromUid%>">','    <a class="pm-avatar l" href="//my.tv.sohu.com/user/<%=item.fromUid%>" target="_blank">','	    <img src="<%=item.fromSmallPhto%>" width="35" height="35" alt="<%=item.fromNick%>" class="uimg">',"        <%if(item.count){%>",'            <span class="red_bub r"><em><%=item.count%></em></span>',"        <%}else{%>",'            <span class="red_bub r" style="display:none"><em>0</em></span>',"        <%}%>","    </a>",'	<div class="r text">','		<div class="cfix row1">','			<a href="//my.tv.sohu.com/user/<%=item.fromUid%>" target="_blank" class="l"><%=item.fromNick%></a>','            <span class="js_delete_letter pm_delete r hide"></span>',"		</div>",'		<div class="cfix js_letter-content">','			<p class="l pm-content"><%=item.content%></p>','            <span class="r"><%=helper.dateFormat(item.updateTime,"yyyy-MM-dd hh:mm:ss")%></span>',"		</div>","	</div>","</li>","<%});%>"].join("");return new sohuHD.Template(t)},MsgTpl:{none:function(){return["","<!-- Start : privateMsg item -->",'<div class="pM-dialog cfix">',"\u6682\u65e0\u6d88\u606f","</div>"].join("")},text:function(){return["",'<div class="pM-dialog cfix">','    <img src="<%=user.toPic%>" width="35" height="35" alt="<%=user.toNickname%>" class="l uimg"/>','    <div class="pM-dbox pM-dbox-l">','        <span class="arr"></span>','        <table cellpadding="0" cellspacing="0" border="0" class="pM-table">',"            <tbody><tr>",'                <td class="tl"></td>','                <td class="tr"></td>',"            </tr>","            <tr>",'                <td class="ml"></td>','                <td class="mr"><p class="txt"><%=item.content%></p></td>',"            </tr>","            <tr>",'                <td class="bl"></td>','                <td class="br"></td>',"            </tr>","            </tbody></table>","    </div>","</div>"].join("")},pic:function(){return["",'<div class="pM-dialog cfix">','    <img src="<%=user.toPic%>" width="35" height="35" alt="<%=user.toNickname%>" class="l uimg"/>','    <div class="pM-dbox pM-dbox-l">','        <span class="arr"></span>','        <table cellpadding="0" cellspacing="0" border="0" class="pM-table">',"            <tbody><tr>",'                <td class="tl"></td>','                <td class="tr"></td>',"            </tr>","            <tr>",'                <td class="ml"></td>','                <td class="mr">','                    <div class="pM-dialog-img rel">',"                    <%=item.content%>","                    </div>","                </td>","            </tr>","            <tr>",'                <td class="bl"></td>','                <td class="br"></td>',"            </tr>","            </tbody></table>","    </div>","</div>"].join("")},video:function(){return["","<%var msg = JSON.parse(item.content);%>",'<div class="pM-dialog cfix">','    <img src="<%=user.toPic%>" width="35" height="35" alt="<%=user.toNickname%>" class="l uimg"/>','    <div class="pM-dbox pM-dbox-l">','        <span class="arr"></span>','        <table cellpadding="0" cellspacing="0" border="0" class="pM-table">',"            <tbody><tr>",'                <td class="tl"></td>','                <td class="tr"></td>',"            </tr>","            <tr>",'                <td class="ml"></td>','                <td class="mr">','                    <div class="pM-dialog-img rel">','                        <a href="<%=sohuHD.adjustProtocol(msg.video_url_pc )%>" target="_blank">','                          <img src="<%=msg.cover%>" width="272" height="136" alt="" />','                          <span class="maskbg"></span>','                          <span class="masktx"><%=helper.truncateCN(msg.video_name,16)%></span>',"                        </a>","                    </div>","                </td>","            </tr>","            <tr>",'                <td class="bl"></td>','                <td class="br"></td>',"            </tr>","            </tbody></table>","    </div>","</div>"].join("")},topic:function(){return["","<%var msg = JSON.parse(item.content);%>",'<div class="pM-dialog cfix">','    <img src="<%=user.toPic%>" width="35" height="35" alt="<%=user.toNickname%>" class="l uimg"/>','    <div class="pM-dbox pM-dbox-l">','        <span class="arr"></span>','        <table cellpadding="0" cellspacing="0" border="0" class="pM-table">',"            <tbody><tr>",'                <td class="tl"></td>','                <td class="tr"></td>',"            </tr>","            <tr>",'                <td class="ml"></td>','                <td class="mr">','                    <div class="pM-dialog-img rel">','                        <a href="<%=sohuHD.adjustProtocol(msg[0].urlh5)%>" target="_blank">','                            <img src="<%=msg[0].cover%>" width="272" height="136" alt="">','                            <span class="maskbg"></span>','                            <span class="masktx"><%=helper.truncateCN(msg[0].title,16)%></span>',"                        </a>","                    </div>",'                    <ul class="pM-dialog-ul">',"<% for(var i=1;i<msg.length;i++){ %>",'                        <li class="cfix">','                            <a href="<%=sohuHD.adjustProtocol(msg[i].urlh5)%>" target="_blank" class="l txt"><%=helper.truncateCN(msg[i].title,16)%>~</a>',"",'                            <a href="<%=sohuHD.adjustProtocol(msg[i].urlh5)%>" target="_blank" class="r"><%if(msg[i].cover){%><img src="<%=msg[i].cover%>" width="30" height="30" alt=""><%}%></a>',"                        </li>","<%}%>","                    </ul>","                </td>","            </tr>","            <tr>",'                <td class="bl"></td>','                <td class="br"></td>',"            </tr>","            </tbody></table>","    </div>","</div>"].join("")},html:function(){return["","<%var msg = JSON.parse(item.content);%>",'<div class="pM-dialog cfix">','    <img src="<%=user.toPic%>" width="35" height="35" alt="<%=user.toNickname%>" class="l uimg"/>','    <div class="pM-dbox pM-dbox-l">','        <span class="arr"></span>','        <table cellpadding="0" cellspacing="0" border="0" class="pM-table">',"            <tbody><tr>",'                <td class="tl"></td>','                <td class="tr"></td>',"            </tr>","            <tr>",'                <td class="ml"></td>','                <td class="mr">','                      <p class="txt c-black"><a target="_blank" href="<%=sohuHD.adjustProtocol(msg.topic_url_h5)%>"> <%=helper.truncateCN(msg.title,16)%> >> </a> </p>',"                </td>","            </tr>","            <tr>",'                <td class="bl"></td>','                <td class="br"></td>',"            </tr>","            </tbody></table>","    </div>","</div>"].join("")}},sendTpl:{text:function(){return["",'<div class="pM-dialog cfix">','    <img src="<%=my.selfPic%>" width="35" height="35" alt="<%=my.selfNickname%>" class="r uimg">','    <div class="pM-dbox pM-dbox-r">','        <span class="arr"></span>','        <table cellpadding="0" cellspacing="0" border="0" class="pM-table">',"            <tbody><tr>",'                <td class="tl"></td>','                <td class="tr"></td>',"            </tr>","            <tr>",'                <td class="ml"></td>','                <td class="mr"><p class="txt"><%=item.content%></p></td>',"            </tr>","            <tr>",'                <td class="bl"></td>','                <td class="br"></td>',"            </tr>","            </tbody></table>","    </div>","</div>"].join("")},pic:function(){return["",'<div class="pM-dialog cfix">','    <img src="<%=my.selfPic%>" width="35" height="35" alt="<%=my.selfNickname%>" class="r uimg">','    <div class="pM-dbox pM-dbox-r">','        <span class="arr"></span>','        <table cellpadding="0" cellspacing="0" border="0" class="pM-table">',"            <tbody><tr>",'                <td class="tl"></td>','                <td class="tr"></td>',"            </tr>","            <tr>",'                <td class="ml"></td>','                <td class="mr">','                    <div class="pM-dialog-img rel">',"                    <%=item.content%>","                    </div>","                </td>","            </tr>","            <tr>",'                <td class="bl"></td>','                <td class="br"></td>',"            </tr>","            </tbody></table>","    </div>","</div>"].join("")}}},g=null;this.myself={selfNickname:null,selfPic:null,selfUid:null},this.touser={toUid:null,toNickname:null,toPic:null},this.state="min",this.cache={},this.init=function(){$("body").append(h),r.showFloatWin(),r.bindEvent(),r.connect(),r.checkIfRead()},this.checkIfRead=function(){var t=$(".littleRed");t.hide(),v.ifReadall({}).then(function(e){200==e.status&&(e.count?t.show():t.hide(),1==e.isForbid&&(r.state="noopen"))})},this.star=function(t){var e=sohuHD.user.uid;if(t==e&&!$(".JS_im_main").is("visible")){var i,s=$(".littleRed");for(i=0;4>i;i++)s.fadeOut(300).fadeIn(300)}},this.connect=function(){function t(t){$.each(t,function(t,e){r.hasUserMsg(e.senderUid,e.receiverUid),r.hasMsgShowContent(e),r.star(e.receiverUid)})}function e(t){_e("\u6d88\u606f\u8fde\u63a5\u5931\u8d25")}var i=new dolphin.MyMessage({router:"//my.tv.sohu.com/user/private/api/router.do",channel:"/p/",message:t,error:e,passport:sohuHD.user.passport,token:"1234567ppp"});return i.start(),i},this.disconnect=function(){},this.bindEvent=function(){h.on("click.im",".JS_im_float",function(){return"noopen"==r.state?void e("\u60a8\u7684\u8d26\u53f7\u53d1\u8a00\u53ef\u80fd\u6d89\u53ca\u975e\u6cd5\u5185\u5bb9\uff0c\u5df2\u88ab\u7981\u8a00\uff01"):void("min"==r.state&&r.showMainWin())}),h.on("click.im",".pM-close",function(){r.showFloatWin(),r.checkIfRead()}),h.on("click.im",".JS_im_search_user_btn",function(){var t=$(this),e=t.parents(".pM-top").find(".JS_im_search_text").val();e&&v.searchUser({keyword:e}).then(function(e){if(200==e.status&&0!=e.data.data.length){var i="<ul>";$.each(e.data.data,function(t,e){i+='<li data-search-userid="'+e.id+'"><a href="javascript:void(0)">'+e.nickName+"</a></li>"}),i+="</ul>"}else var i="<p>\u6682\u65e0\u4e0e\u8be5\u7528\u6237\u5bf9\u8bdd!</p>";t.parents(".pM-top").find(".JS_im_search_user_list").html(i),t.parents(".pM-top").find(".JS_im_search_user_list").show()})}),h.on("click.im","[data-search-userid]",function(){u=$(this).data("search-userid"),h.find(".JS_im_search_text").val(""),$(this).parents(".pM-top").find(".JS_im_search_user_list").hide(),r.chatWith(u)}),h.on("keydown.im",".JS_im_search_text",function(){h.find(".JS_im_search_text").val();13==event.which?(event.preventDefault(),h.find(".JS_im_search_user_btn").trigger("click")):229==event.which&&event.key&&"enter"==event.key.toLowerCase()&&(event.preventDefault(),h.find(".JS_im_search_user_btn").trigger("click"))}),$(document).die().click(function(t){t=window.event||t,obj=$(t.srcElement||t.target),$(obj).is(".JS_im_search_user_list *")||$(obj).is("#JS_im_wrap form *")||(h.find(".JS_im_search_text").val(""),h.find(".JS_im_search_user_list").hide())}),h.on("click.im",".JS_im_main [data-chat] .js_chat_name",function(){u=$(this).parents("[data-chat]").data("chat"),m=1,r.getUserMsg(u)}),h.on("click.im",".JS_im_list [data-chat] .js_letter-content",function(){var t=$(this).parents("[data-chat]").data("chat");r.chatWith(t)}),h.on("click.im","#JS_im_send",function(){r.sendText()}),h.on("keydown.im","#im_content",function(t){h.find("#im_content").val();13==t.which?(t.preventDefault(),r.sendText()):229==t.which&&t.key&&"enter"==t.key.toLowerCase()&&(t.preventDefault(),r.sendText())}),h.on("click.im",".JS_openMsgBox",function(){r.showMainWin()}),h.on("click.im",".JS_msg_more",function(){h.children().hide(),h.find(".JS_im_list").length?h.find(".JS_im_list").show():(h.append(_.list()),r.getUserList(1,2))}),h.on("click.im",".JS_im_readall",function(){r.readAll()}),h.on("mousewheel.im",".pM-fanlist",function(){if(o){var t=$(this);t[0].scrollHeight===1*t.outerHeight()+1*t.scrollTop()&&(c++,r.getUserList(c,1))}}),h.on("mousewheel.im","#im_scroll_cont_1",function(){if(p){var t=$(this);0===t.scrollTop()&&(m++,r.getUserMsg(u))}}),h.on("mousewheel.im","#im_scroll_cont_2",function(){if(d){var t=$(this);t[0].scrollHeight===1*t.outerHeight()+1*t.scrollTop()&&(c++,r.getUserList(c,2))}}),h.on("mouseenter.im",".pM-list li,.JS_im_main [data-chat]",function(){$(this).find(".js_delete_letter").removeClass("hide")}).on("mouseleave.im",".pM-list li,.JS_im_main [data-chat]",function(){$(this).find(".js_delete_letter").addClass("hide")}),h.on("click.im",".js_delete_letter",function(){var t=$(this).parents("[data-chat]").data("chat"),i=$(this).parents("ul");e("\u79c1\u4fe1\u5185\u5bb9\u5c06\u4f1a\u88ab\u5220\u9664\uff0c\u5220\u9664\u540e\u4e0d\u53ef\u6062\u590d\uff0c\u662f\u5426\u786e\u5b9a\u5220\u9664\uff1f",function(){r.deleteLetter(t,i)},"confirmBtn")}),h.on("click.im",".JS_im_deleteall",function(){e("\u5168\u90e8\u79c1\u4fe1\u5185\u5bb9\u5c06\u4f1a\u88ab\u5220\u9664\uff0c\u5220\u9664\u540e\u4e0d\u53ef\u6062\u590d\uff0c\u662f\u5426\u786e\u5b9a\u5220\u9664\uff1f",function(){r.deleteAllLetters()},"confirmBtn")})},this.showMainWin=function(t){r.state="main",h.children().hide(),h.find(".JS_im_main").length?h.find(".JS_im_main").show():r.chatWith(t)},this.initUploadImg=function(){$.upload({dom:$("#JS_im_uploadimg"),maxSize:10485760,success:function(t){1==t.status&&r.sendMsg(t.url,3)},error:function(t,i){e("\u56fe\u7247\u6700\u5927\u652f\u630110M\uff0c\u8bf7\u91cd\u65b0\u4e0a\u4f20")}})},this.chatWith=function(t){return"noopen"==r.state?void e("\u60a8\u7684\u8d26\u53f7\u53d1\u8a00\u53ef\u80fd\u6d89\u53ca\u975e\u6cd5\u5185\u5bb9\uff0c\u5df2\u88ab\u7981\u8a00\uff01"):(r.state="main",void(h.find(".JS_im_main").length?(h.children().hide(),h.find(".JS_im_main").show(),r.getUserMsg(t)):r.getListData(1).then(function(e){h.children().hide(),h.append(_.main().render({list:e})),f||(t||(t=e.length>0&&e[0].fromUid||void 0),t&&(r.getUserMsg(t),f=!0,r.initUploadImg()))}).fail(function(t){1==type?o=!1:d=!1})))},this.getListData=function(t){var e=$.Deferred();return r.cache[t]?e.resolve(r.cache[t]):v.getMsgList({page:c}).then(function(i){200==i.status?(r.cache[t]=i.data.privacies,e.resolve(i.data.privacies)):e.reject(i)}),e.promise()},this.getUserList=function(t,e){c=t||c,r.getListData(c).then(function(t){h.find(".JS_im_list .pM-list").append(_.listItem().render({list:t}));var i=new sohuHD.Template(_.userList());1==e&&h.find(".JS_im_main .pM-fanlist").append(i.render({list:t})),h.find(".JS_im_main .pM-fanlist li").length||(h.children().hide(),h.append(_.main().render({list:t})),f||(h.find(".JS_im_main  .pM-fanlist li.on").length||h.find(".pM-fanlist li").first().click(),f=!0,r.initUploadImg()))}).fail(function(t){1==e?o=!1:d=!1})},this.showFloatWin=function(){r.state="min",h.find(".JS_im_float").length?(h.children().hide(),h.find(".JS_im_float").show()):(h.children().hide(),h.append(_.min()))},this.hasUserMsg=function(t,e){if(t==r.myself.selfUid&&e==r.touser.toUid){var i=h.find('.JS_im_main .pM-fanlist [data-chat="'+u+'"]');i.remove(),h.find(".JS_im_main .pM-fanlist").prepend(i)}else if(t==r.touser.toUid&&e==r.myself.selfUid)if(h.find('.JS_im_main .pM-fanlist [data-chat="'+t+'"]').length){var i=h.find('.JS_im_main .pM-fanlist [data-chat="'+t+'"]');i.remove(),h.find(".JS_im_main .pM-fanlist").prepend(i)}else v.getUserInfo({to_uid:t}).then(function(t){200==t.status&&h.find(".JS_im_main .pM-fanlist").prepend(_.userInfo().render({userInfo:t.data}))});else{var s=h.find('[data-chat="'+t+'"]'),a=1*s.find(".red_bub em").text()||0;s.find(".red_bub em").text(a+1),s.find(".red_bub").show()}},this.hasMsgShowContent=function(t){if(t.senderUid==r.touser.toUid){if(2==t.contentType){var e=new sohuHD.Template(_.MsgTpl.text());h.find(".JS_im_main .pM-cont").append(e.render({item:{content:t.content},user:r.touser}))}else if(3==t.contentType){var e=new sohuHD.Template(_.MsgTpl.pic());h.find(".JS_im_main .pM-cont").append(e.render({item:{content:t.content},user:r.touser}))}else if(4==t.contentType){var e=new sohuHD.Template(_.MsgTpl.video());h.find(".JS_im_main .pM-cont").append(e.render({item:{content:t.content},user:r.touser}))}else if(5==t.contentType){var e=new sohuHD.Template(_.MsgTpl.topic());h.find(".JS_im_main .pM-cont").append(e.render({item:{content:t.content},user:r.touser}))}else if(1==t.contentType){var e=new sohuHD.Template(_.MsgTpl.html());h.find(".JS_im_main .pM-cont").append(e.render({item:{content:t.content},user:r.touser}))}}else if(t.senderUid==r.myself.selfUid){if(t.receiverUid!=u)return;if(2==t.contentType){var e=new sohuHD.Template(_.sendTpl.text());h.find(".JS_im_main .pM-cont").append(e.render({item:{content:t.content},my:r.myself}))}else if(3==t.contentType){var e=new sohuHD.Template(_.sendTpl.pic());h.find(".JS_im_main .pM-cont").append(e.render({item:{content:t.content},my:r.myself}))}}r.scrollBottom()},this.getUserMsg=function(t,e){u=t||u,h.find(".JS_im_main .pM-fanlist .on").removeClass("on"),r.selectUser(t),v.getMsgDetail({to_uid:u,page:e||m||1}).then(function(t){200==t.status&&(p=t.data.length?!0:!1,1==m?(r.touser=t.touser,r.myself=t.self,h.find(".JS_im_main .pM-top .pM-r .uname").text(t.touser.toNickname),h.find(".JS_im_main .pM-cont").html(_.detail().render({list:t.data.reverse(),user:r.touser,my:r.myself}))):h.find(".JS_im_main .pM-cont").prepend(_.detail().render({list:t.data.reverse(),user:r.touser,my:r.myself})),r.scrollBottom())})},this.selectUser=function(t){h.find('.JS_im_main .pM-fanlist [data-chat="'+t+'"]').length?(h.find('.JS_im_main .pM-fanlist [data-chat="'+t+'"]').addClass("on"),h.find('[data-chat="'+t+'"]').find(".red_bub").hide(),h.find('[data-chat="'+t+'"]').find(".red_bub em").text(0)):v.getUserInfo({to_uid:t}).then(function(t){200==t.status?h.find(".JS_im_main .pM-fanlist").prepend(_.userInfo().render({userInfo:t.data})):_e(t)})};var b=!1;this.sendMsg=function(t,e){t&&(_type=e||2,b||(b=!0,l(function(){v.sendMsg({content:t,to_uid:r.touser.toUid,content_type:_type}).then(function(t){b=!1;var e;200==t.status?h.find("#im_content").val(""):(e=new sohuHD.Template(_.sendTpl.text()),h.find(".pM-cont").append(e.render({item:{content:"\u53d1\u9001\u5931\u8d25"},my:r.myself}))),r.scrollBottom()}).fail(function(){b=!1})})))},this.sendText=function(){var t=h.find("#im_content").val();return t.length>300?void alert("\u8bf7\u8f93\u5165\u5c11\u4e8e300\u5b57"):void r.sendMsg(t)},this.scrollBottom=function(){setTimeout(function(){try{h.find("#im_scroll_cont_1").scrollTop(h.find("#im_scroll_cont_1")[0].scrollHeight)}catch(t){}},0)},this.readAll=function(){v.readAll().then(function(){h.find(".red_bub").hide(),h.find(".red_bub em").text(0)})},this.getInstance=function(){return void 0===i&&(i=new t(a)),i},this.deleteLetter=function(t,e){var i,s=this;v.deteleUserLetter({to_uid:t}).then(function(a){200==a.status&&($("li[data-chat="+t+"]").remove(),s.cache={},i=$("li[data-chat]").eq(0).data("chat")||void 0,i||$(".uname").empty(),e.hasClass("pM-fanlist")?s.chatWith(i):s.getUserMsg(i))})},this.deleteAllLetters=function(){var t=this;v.deteleAllLetters().then(function(e){200==e.status&&(t.cache={},$(".pM-fanlist").empty(),$(".pM-cont").empty(),$(".pM-list").empty(),$(".uname").empty())})}}var i,s=function(t,e){var i=$.Deferred();try{document.domain="sohu.com"}catch(s){}var a="im_"+$.now();t=t+"&callback="+a;var n=[];document.charset="utf-8";for(var l in e)n.push('<input name="',l,'" value="',e[l]||"",'" />');var r=sohuHD.createElement('<div style="display:none"></div>'),c="tmpPostForm"+sohuHD.now();return r.innerHTML=['<form id="',c,'" action="',t,'" method="POST" target="im_hideFrame" accept-charset="utf-8" >',n.join(""),"</form>",'<iframe name="im_hideFrame"></iframe>'].join(""),document.body.appendChild(r),document.getElementById(c).submit(),window[a]=function(t){i.resolve(t),setTimeout(function(){},0)},setTimeout(function(){i.reject("fail")},1e4),i.promise()};if(void 0===i){kao("imcss"),i=new t;var a=location.href;-1==a.indexOf("//my.tv.sohu.com/pl/")&&-1==a.indexOf("//my.tv.sohu.com/us/")&&i.init()}return i};sohuHD.initLogin(),messagebus.subscribe("core.login",function(){},null,null,{cache:!0}),messagebus.subscribe("core.login.userinfo",function(e){sohuHD.im=t()},null,null,{cache:!0}),messagebus.subscribe("core.logout",function(t){sohuHD.im={chatWith:function(t){sohuHD.showLoginWinbox(function(){location.reload()})}}},null,null,{cache:!0});var e=function(t,e,i){var s="";"confirmBtn"==i&&(s=['<div class="ta-c cfix l"  style="margin-left:20px;"><a href="javascript:void(0)" class="btn-orange">\u786e \u5b9a</a></div>','<div class="ta-c cfix r"  style="margin-right:20px;"><a href="javascript:void(0)" class="btn-grey">\u53d6\u6d88</a></div>'].join(""));var a=['<div class="wBox wBox_pub" style="width:335px" id="J_im_wbox">','<div class="wBoxIn">','<a title="\u5173\u95ed" class="Zico_close close" href=""></a>','<div class="cont cfix">','<p class="fs16 ta-c mB15 c-black">',t,"</p>",s,"</div>","</div>","</div>"].join("");e=e||function(){};var n=new sohuHD.showWin({htmlStr:a,showOnce:!0});return n.initWin(),n.show(),n.winbox.find(".btn-orange").click(function(t){t.preventDefault(),e?e():n.closeWin(),n.closeWin()}),n.winbox.find(".btn-grey").click(function(t){t.preventDefault(),n.closeWin()}),n.hide=function(){n.winbox.css("visibility","hidden"),n.winmask.remove()},n}}();