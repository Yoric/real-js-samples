/* sohutv 2019-04-10 16:13:42 */
!function(i){var t=i.Template;t.registHelper({on:function(i){return i?"on":""},slash:function(i,a,t){a=a||5,a=Math.min(a,i.length),t=t||function(i){return i};for(var e=[],s=0;s<a;s++)e.push(t(i[s]));return e.join(" / ")},videoName:function(i,a){return a&&7==a.cid?i.subName:i.subName?i.subName:i.name},isNewPub:function(i){if(i&&i.publishTime){var a=i.publishTime.split("-"),t="0"==a[1].substr(0,1)?parseInt(a[1].substr(1,1))-1:parseInt(a[1])-1,e=parseInt((new Date-new Date(a[0],t,a[2]))/1e3/60/60/24);if(0<=e&&e<2)return!0}return!1},publishTime:function(i,a){var t=i||a;if("string"!=typeof t)return"";var e=t.match(/(\d{4})(\d{2})(\d{2})/);return e?e.slice(1).join("-"):a},orderVideos:function(i){return i||[]},albumSeries:function(t){if(t.albums&&0<t.albums.length){var e=[],s=null;return $.each(t.albums,function(i,a){t.playlistid==a.playlistid?s=t.albums[i+1]:e.push(a)}),s?[s]:e}return[]},tgMap:function(i){return{0:"\u7cfb\u5217",1:"\u4e3b\u6f14",2:"\u70ed\u64ad",3:"\u63a8\u8350"}[i]||""},titleDateFormat:function(i){return i=i.replace(/(\d{4})(\d{2})(\d{2})/,"$1-$2-$3").split("-"),(i=new Date(i[0],i[1]-1,i[2])).getMonth()+1+"."+i.getDate()}});var e={};e.detail_directors=["\u5bfc\u6f14\uff1a","<% $.each(directorsMap, function(i, item) { %>",'<a target="_blank" href="<%=item.starUrl%>"><%=item.starName%></a> ',"<% }); %>"].join(""),e.detail_mainactor=["\u4e3b\u6f14\uff1a","<% $.each(mainActorsMap, function(i, item) { %>",'<a target="_blank" href="<%=item.starUrl%>"><%=item.starName%></a> ',"<% }); %>"].join(""),e.menu_vlist="<%if (data_vlist.cid == 1) {%><%=sohuHD.render(\"menu_vlist_movie\", {data_vlist: data_vlist})%><%} else if (data_vlist.cid == 16) {%><%=sohuHD.render(\"menu_vlist_comic\", {data_vlist: data_vlist})%><%} else if (['7','13','24','25','8', '33', '34', '21'].indexOf(data_vlist.cid + '') > -1 || window.isSports) {%><%=sohuHD.render(\"menu_vlist_zongyi\",{data_vlist: data_vlist})%><%} else {%><%=sohuHD.render(\"menu_vlist_others\",{data_vlist: data_vlist})%><%}%>",e.menu_vlist_recomm='<div class="list_juji_tj"><p class="fs16 mB10">\u7cbe\u5f69\u63a8\u8350</p><ul class="rtju" pb-click data-pb-txid="pg_playlist_recommend"><%for(var i=0,item; item = recommData[i]; i++) {%><li class="rtj"><a href="<%=item.videoUrl%>" data-index="<%=i%>" class="td-n rtja" target="_blank"><span style="<%=(item.vid == \'4751028\' ? \'color:#e73c31\' : \'\') %>" class="disb" title="<%=item.videoName%>"><%=helper.truncateCN(item.videoName, 44, true)%></span><em class="hid ta-r"><%if(item.cid == 9001) {%><span class="bcount" rel="<%=item.vid%>">0</span><%}else{%><span class="pcount" rel="<%=item.vid%>">0</span><%}%></em></a></li><%}%></ul></div>',e.menu_vlist_movie='<div class="list_juji scroll-bar"><ul class="spList f-yahei"><% for(var i=0, item; item = data_vlist.videos[i]; i++ ) {  %><li class="<%=helper.on(vid == item.vid)%>" data-vid="<%=item.vid%>"><a href="<%=item.pageUrl%>" title="<%=helper.videoName(item, data_vlist)%>" pb-click="mc" data-pb-txid="pg_playlist_pl"><%if(helper.isNewPub(item)) {%><em class="tips_new"></em><%}%><img width="80" height="60" class="l" src="<%=item.smallPicUrl%>"><div class="txt r"><strong><%=helper.videoName(item, data_vlist)%></strong><p class="cf"><span class="pcount l" rel="<%=item.vid%>"></span><span class="r"><%=helper.publishTime(item.showDate ,item.publishTime)%></span></p></div></a></li><% } %><% for(var i=0, item; item = data_vlist.prevideos[i]; i++ ) { %><li class="<%=helper.on(vid == item.vid)%>" data-vid="<%=item.vid%>"><a href="<%=item.pageUrl%>" title="<%=helper.videoName(item, data_vlist)%>" pb-click="mc" data-pb-txid="pg_playlist_yg"><em class="tips_yu"></em><img width="80" height="60" class="l" src="<%=item.smallPicUrl%>"><div class="txt r"><strong><%=helper.videoName(item, data_vlist)%></strong><p class="cf"><span class="pcount l" rel="<%=item.vid%>"></span><span class="r"><%=helper.publishTime(item.showDate ,item.publishTime)%></span></p></div></a></li><% } %></ul></div>',e.menu_vlist_comic='<%=sohuHD.render("menu_vlist_jujitips", {data_vlist: data_vlist})%><div class="list_juji scroll-bar" data-tmpl-key="menu_vlist_others_page"> </div><%=sohuHD.render("menu_vlist_comic_tab", {data_vlist: data_vlist})%>',e.menu_vlist_comic_tab='<% var _totalCount = data_vlist.size; %><% var _groupSize  = data_vlist.pageSize; %><% var _groupCount = Math.ceil(_totalCount / _groupSize); %><% var _groupGetHL = function(i) { return { l: (i-1) * _groupSize + 1, h: Math.min(_totalCount, i * _groupSize)}; }; %><% var _isend = (_totalCount === 0 || data_vlist.totalSet == _totalCount); %><ul class="comics-tab" <%=_groupCount == 1 ? \'style="display:none;height:0px;"\' : \'\' %> ><%if($.inArray(window.cid, [\'13\',\'24\',\'25\']) === -1 && !_isend) {%><%for(var i  = _groupCount,j=1; i >= 1; i--,j++){%><%var hl = _groupGetHL(i);%><%if(j>3 && _groupCount-j >= 1){%><li data-dropdown><span class="cmpage"><em class="cmpagem"><%= window.cid == \'16\' ? \'\u66f4\u591a\' : (_groupSize + \'-1\') %></em></span><div class="cm-opt"><div class="grid"><% while(i >= 1) {%><a class="cm-item" data-tab-index="<%=i%>" href="#"><%=hl.h%>-<%=hl.l%></a><%i--;%><%hl = _groupGetHL(i);%><%}%></div></div></li><%}else if(j == 1){%><li class="fir" data-tab-index="<%=i%>"><%=hl.h%>-<%=hl.l%></li><%}else{%><li data-tab-index="<%=i%>"><%=hl.h%>-<%=hl.l%></li><%}%><%}%><%} else {%><%for(var i  = 1,j=1; i <= _groupCount; i++,j++){%><%var hl = _groupGetHL(i);%><%if(j>3 && _groupCount-j >= 1){%><li data-dropdown><span class="cmpage"><em class="cmpagem"><%= window.cid == \'16\' ? \'\u66f4\u591a\' : [hl.l,hl.h].join(\'-\') %></em></span><div class="cm-opt"><div class="grid"><% while(i <= _groupCount) {%><a class="cm-item" data-tab-index="<%=i%>" href="#"><%=hl.l%>-<%=hl.h%></a><%i++;%><%hl = _groupGetHL(i);%><%}%></div></div></li><%}else if(j == 1){%><li class="fir" data-tab-index="<%=i%>"><%=hl.l%>-<%=hl.h%></li><%}else{%><li data-tab-index="<%=i%>"><%=hl.l%>-<%=hl.h%></li><%}%><%}%><%}%></ul>',e.menu_vlist_zongyi='<%=sohuHD.render("menu_vlist_jujitips", {data_vlist: data_vlist})%><div class="comic_juji list_juji scroll-bar" data-tmpl-key="menu_vlist_zongyi_page"><%=sohuHD.render("menu_vlist_zongyi_page", {data_vlist: data_vlist})%></div><%=sohuHD.render("menu_vlist_comic_tab", {data_vlist: data_vlist})%>',e.menu_vlist_zongyi_page='<ul class="spList f-yahei"><% for(var i=0, item; item = data_vlist.videos[i]; i++ ) {  %><li class="<%=helper.on(vid == item.vid)%>" data-vid="<%=item.vid%>"><a href="<%=item.pageUrl%>" data-title="<%=helper.videoName(item, data_vlist)%>" pb-click="mc" data-pb-txid="pg_playlist_pl"><%if(item.tvIsFee === 1) {%><em class="tips_vip"></em><% } else if(item.isPrevideo) {%><em class="tips_yu"></em><% } else if(helper.isNewPub(item)) {%><em class="tips_new"></em><%}%><img width="80" height="60" class="l" src="<%=item.smallPicUrl%>"><div class="txt r"><strong><%=helper.videoName(item, data_vlist)%></strong><p class="cf"><span class="pcount l" rel="<%=item.vid%>"></span><%if(data_vlist.cid == 7){%><%if(item.tvIsFee !== 1 ){%><span class="r"><%=helper.publishTime(item.showDate ,item.publishTime)%></span><%}%><%}else{%><span class="r"><%=item.publishTime%></span><%}%></p></div></a></li><% } %><% if(data_vlist.pageIndex == Math.ceil(data_vlist.size / data_vlist.pageSize)) { %><% for(var i=0, item; item = data_vlist.prevideos[i]; i++ ) { %><li class="<%=helper.on(vid == item.vid)%>" data-vid="<%=item.vid%>"><a href="<%=item.pageUrl%>" data-title="<%=helper.videoName(item, data_vlist)%>" pb-click="mc" data-pb-txid="pg_playlist_yg"><em class="tips_yu"></em><img width="80" height="60" class="l" src="<%=item.smallPicUrl%>"><div class="txt r"><strong><%=helper.videoName(item, data_vlist)%></strong><p class="cf"><span class="pcount l" rel="<%=item.vid%>"></span> <span class="r"><%=item.publishTime%></span></p></div></a></li><% } %><% } %></ul>',e.menu_vlist_others='<%=sohuHD.render("menu_vlist_jujitips", {data_vlist: data_vlist})%><div class="list_juji scroll-bar"><%=sohuHD.render("menu_vlist_others_page", {data_vlist: data_vlist})%></div>',e.menu_vlist_others_page='<ul class="<%=(data_vlist.isShowTitle == 0 ? \'\' : \'list_juji2\') %>" style="overflow: hidden; position: relative;"><% for(var i=0, item; item = data_vlist.videos[i]; i++ ) { %><li class="<%=helper.on(vid == item.vid)%>" data-vid="<%=item.vid%>"<%if(item.tvIsFee === 1) {%>data-type="vip"<% } else if(item.isPrevideo) {%>data-type="yu"<% } else if(helper.isNewPub(item)) {%>data-type="new"<%}%>><a <%=(~~item.order > 999 ? \'class="small"\' : \'\') %> href="<%=item.pageUrl%>" data-title="<%=helper.videoName(item)%>" pb-click="mc" data-pb-txid="<%=item.isPrevideo ? \'pg_playlist_yg\' : \'pg_playlist_pl\' %>"><% if(data_vlist.isShowTitle == 0){ %><%=item.order%><% } else { %><span class="num"><%=item.order%></span><span class="txt"><%=item.name%></span><% }%><%if(item.tvIsFee === 1) {%><em class="tips_vip"></em><% } else if(item.isPrevideo) {%><em class="tips_yu"></em><% } else if(helper.isNewPub(item)) {%><em class="tips_new"></em><%}%></a></li><% } %><% if(data_vlist.pageIndex >= Math.ceil(data_vlist.size / data_vlist.pageSize)) { %><% for(var i=0, item; item = data_vlist.prevideos[i]; i++ ) { %><li class="<%=helper.on(vid == item.vid)%>" data-vid="<%=item.vid%>" data-type="yu"><a href="<%=item.pageUrl%>" data-title="<%=helper.videoName(item)%>"  pb-click="mc" data-pb-txid="pg_playlist_yg"><% if(data_vlist.isShowTitle == 0){ %><%=item.order%><% } else { %><span class="num"><%=item.order%></span><span class="txt"><%=item.name%></span><% }%><em class="tips_yu"></em></a></li><% } %><% } %></ul>',e.menu_vlist_see='<span class="seeArr" style="margin-left:<%=arrLeft %>px;"></span><dl class="seeLis" pb-click-a="mc" data-pb-txid="pg_playlist_gotoplinfo"><%$.each(seeData, function(i, item){%><dd class="seed"><a href=<%=[link,\'#_\',item.k].join(\'\') %> class="seea" data-seek="<%=item.k%>" data-vid="<%=vid %>" title="<%=item.v %>"><span class="seet"><%=helper.timeFormat(Math.floor(item.k), \'mm:ss\')%></span><%=sohuHD.strSub(item.v, 29, true) %></a></dd><%});%></dl>',e.menu_vlist_jujitips='<%var _isend = (data_vlist.size === 0 || data_vlist.totalSet === 0 || data_vlist.totalSet == data_vlist.size);var videos = data_vlist.videos,lastVideo = videos[videos.length - 1] || {},tipClass = lastVideo.tvIsFee == \'1\' ? \'yellow\' : \'\';%><%if(!_isend || lastVideo.tvIsFee === 1 || (data_vlist.cid == 7 && data_vlist.updateNotification) ){%>\x3c!--\u3010\u672a\u66f4\u65b0\u5b8c\u3011\u6216\u3010\u6700\u540e\u4e00\u96c6\u662f\u4ed8\u8d39\u89c6\u9891\u3011\u6216\u8005\u3010\u7efc\u827a\u6709\u63d0\u9192\u3011\u5c55\u793a\u66f4\u65b0\u63d0\u9192 --\x3e<div class="juji_tips cfix"><h4 class="l" pb-impress pb-click data-pb-txid="pg_playlist_albumname"><%if(data_vlist.albumPageUrl){%><a href="<%=data_vlist.albumPageUrl %>" target="_blank"><%=data_vlist.albumName %></a><%} else {%><%=data_vlist.albumName %><%}%></h4><div data-plid="<%=data_vlist.playlistid%>" class="vBox-warn"><a class="vbtn" href="#">\u8ffd\u5267\u63d0\u9192</a><div class="vCont"><span class="seeArr"></span><p class="f-song">\u6709\u66f4\u65b0\u4f1a\u7b2c\u4e00\u65f6\u95f4\u901a\u77e5\u4f60</p> <p class="ta-r"><a href="javascript:void(0);"></a></p></div></div></div><div class="video-intro cfix"><% if(data_vlist.cid == 7) { %><div class="l video-intro-text <%=tipClass%>">\u66f4\u65b0\u65f6\u95f4\uff1a<%=data_vlist.updateNotification %></div><% } else { %><div class="l video-intro-text">\u5171<%=data_vlist.totalSet%>\u96c6 <span class="<%=tipClass%>" title="<%=data_vlist.updateNotification %>"><%=helper.truncateCN(data_vlist.updateNotification, 54, true) %></span></div><% } %><div class="r video-arrow" pb-click data-pb-txid="pg_videodetail"><a href="javascript:void(0);" class="c-white video-intro-btn" data-pb-other="detailclick">\u89c6\u9891\u7b80\u4ecb</a><%=sohuHD.render("menu_vlist_videointro",{data_vlist: data_vlist})%></div></div><div class="seeBox tips-zhuiju"><span class="seeArr"></span><div class="seeLis"><span class="zj-close"></span><div class="zj-bti"><span class="zj-bti-ok">\u8ffd\u5267\u6210\u529f</span><span>\u6709\u66f4\u65b0\u4f1a\u7b2c\u4e00\u65f6\u95f4\u901a\u77e5\u4f60</span></div><div class="zj-con cfix"><div class="zj-left l"><img src="<%=data_vlist.pic50_50 || data_vlist.pic144_144 %>" width="50" height="50"><p class="p1 c-white fs14">\u7528\u5fae\u4fe1\u8ffd\uff1a</p><p class="p2 c-white fs14"><%=helper.truncateCN( data_vlist.albumName, 22, true) %></p><p class="p3">\u626b\u7801\u5173\u6ce8\uff0c\u83b7\u53d6\u66f4\u65b0\u63d0\u9192</p></div><img src="//:0" width="91" height="91" class="r qrcode"></div></div></div><%} else if(videos.length == 0 && data_vlist.prevideos.length) { %>\x3c!-- \u5267\u96c6\u5217\u8868\u4e3a\u7a7a\u4f46\u662f\u6709\u9884\u544a\u7247 --\x3e<div class="juji_tips cfix"><h4 class="l" pb-impress pb-click data-pb-txid="pg_playlist_albumname"><%if(data_vlist.albumPageUrl){%><a href="<%=data_vlist.albumPageUrl %>" target="_blank"><%=data_vlist.albumName %></a><%} else {%><%=data_vlist.albumName %><%}%></h4></div><div class="video-intro cfix"><div class="l video-intro-text"><%=data_vlist.updateNotification || "\u5373\u5c06\u4e0a\u7ebf\uff0c\u656c\u8bf7\u671f\u5f85~" %></div><div class="r video-arrow" pb-click data-pb-txid="pg_videodetail"><a href="javascript:void(0);" class="c-white video-intro-btn" data-pb-other="detailclick">\u89c6\u9891\u7b80\u4ecb</a><%=sohuHD.render("menu_vlist_videointro",{data_vlist: data_vlist})%></div></div><% } else { %><div class="video-intro cfix"><h4 class="l" pb-impress pb-click data-pb-txid="pg_playlist_albumname"><%if(data_vlist.albumPageUrl){%><a href="<%=data_vlist.albumPageUrl %>" target="_blank"><%=data_vlist.albumName %></a><%} else {%><%=data_vlist.albumName %><%}%></h4><div class="r video-arrow" pb-click data-pb-txid="pg_videodetail"><a href="javascript:void(0);" class="c-white video-intro-btn" data-pb-other="detailclick">\u89c6\u9891\u7b80\u4ecb</a><%=sohuHD.render("menu_vlist_videointro",{data_vlist: data_vlist})%></div></div><% } %>',e.menu_vlist_videointro="<div class=\"seeBox video-intro-box\"><span class=\"seeArr\"></span><div class=\"seeLis\"><p class=\"desc1 rel\"><%var vid = data_vlist.vid,videos = data_vlist.videos,video;for(var i=0,len=videos.length; i<len; i++) {video = videos[i];if(vid == video['vid'] && video['videoDesc']) {data_vlist.albumDesc = video['videoDesc'];break;}}%><%if(data_vlist.albumDesc.length > 106 && data_vlist.albumPageUrl){%><%=helper.truncateCN(data_vlist.albumDesc, 210, true) %><a class=\"descBtn\" href=\"<%=data_vlist.albumPageUrl %>\" target=\"_blank\" data-pb-other=\"more\">\u8be6\u60c5</a><%} else { %><%=helper.truncateCN(data_vlist.albumDesc, 218, true) %><%}%></p><ul class=\"cfix\"><%/*\u7c7b\u578b*/var categories = data_vlist.categories,cateCode = window.cateCode.split(';'),cateHtml = [];for(var i=0,len=categories.length; i<len; i++){cateHtml.push('<a data-pb-other=\"category\" href=\"javascript:sohuHD.searchKey('+cateCode[i]+',7,'+window.ncid+',0)\">'+categories[i]+'</a>');}/*\u6807\u7b7e*/var tags = (window.tag || '').split(/\\s/),tagHtml = [];for(var i=0,len=tags.length; i<len; i++){tagHtml.push('<a data-pb-other=\"tips\" href=\"//so.tv.sohu.com/mts?&c=&f=js&wd='+window.escape(tags[i])+'\" target=\"_blank\">'+tags[i]+'</a>');}%><% if(data_vlist.cid == 2 || data_vlist.cid == 16){ %>\x3c!-- \u7535\u89c6\u5267\u3001\u52a8\u6f2b\uff1a\u7c7b\u578b\u3001\u5730\u533a\u3001\u5e74\u4efd --\x3e<li>\u7c7b\u578b\uff1a<%=cateHtml.join('') %></li><li>\u5730\u533a\uff1a<a data-pb-other=\"area\" href=\"javascript:sohuHD.searchKey('<%=data_vlist.area.substr(0,2) %>',4,<%=window.cid %>,0);\"><%=data_vlist.area %></a></li><li>\u5e74\u4efd\uff1a<a data-pb-other=\"year\" href=\"javascript:sohuHD.searchKey('<%=data_vlist.publishYear %>',15,<%=window.cid %>,0);\"><%=data_vlist.publishYear %></a></li><% } else if(data_vlist.cid == 7) {%>\x3c!-- \u7efc\u827a\uff1a\u7c7b\u578b \u5730\u533a--\x3e<li>\u7c7b\u578b\uff1a<%=cateHtml.join('') %></li><li>\u5730\u533a\uff1a<a data-pb-other=\"area\" href=\"javascript:sohuHD.searchKey('<%=data_vlist.area.substr(0,2) %>',4,<%=window.cid %>,0);\"><%=data_vlist.area %></a></li><% } else if(data_vlist.cid == 13 || window.isSports) {%>\x3c!-- \u5a31\u4e50\u65b0\u95fb\u3001\u4f53\u80b2\uff1a\u6807\u7b7e\u3001\u7c7b\u578b --\x3e<li>\u6807\u7b7e\uff1a<%=tagHtml.join('') %></li><li>\u7c7b\u578b\uff1a<%=cateHtml.join('') %></li><% } else if(data_vlist.cid == 25 || data_vlist.cid == 8) {%>\x3c!-- \u65b0\u95fb\u3001\u7eaa\u5f55\u7247\uff1a\u7c7b\u578b --\x3e<li>\u7c7b\u578b\uff1a<%=cateHtml.join('') %></li><%}%></ul></div></div>",e.menu_circum='<div class="list_xl scroll-bar"><ul class="xl_140 cfix" pb-click-a="mc" data-pb-txid="pg_playlist_xg"><% var _videos = helper.orderVideos(data_circum.videos);%><%for(var i=0,item; item = _videos[i]; i++) {%><li data-vid="<%=item.vid%>" class="<%=helper.on(vid == item.vid)%>" data-site="<%=item.site %>" data-tvid="<%=item.tvId %>" data-plid="<%=data_circum.playlistid %>"><div class="pic rel"><a class="photo" href="<%=item.pageUrl%>" title="<%=helper.videoName(item)%>" data-pb-other=\'{plid:"<%=data_circum.playlistid%>", vid: "<%=item.vid%>", location:"image"}\'><%if(item.tvShowLocation == 1) {%><span class="rl-hot"></span><%} else if(item.tvShowLocation == 2) {%><%if(item.tvSType == 2) {%><span class="rl-rep"></span><%}%><%}%><img width="140" height="80" alt="<%=item.albumName%>" src="<%=item.tvCropPic160 || item.smallPicUrl%>"><span class="xlBg"></span><span class="xlTx"><%=helper.timeFormat(parseInt(item.playLength, 10), \'mm:ss\')%></span></a></div><div class="txt"><strong><a href="<%=item.pageUrl%>" title="<%=helper.videoName(item)%>" data-pb-other=\'{plid:"<%=data_circum.playlistid%>", vid: "<%=item.vid%>", location:"title"}\'><%=helper.videoName(item)%></a></strong><p class="p3"><span class="<%=item.site == 2 ? \'bcount\' : \'pcount\'%>" rel="<%=item.vid%>">0</span></p></div></li><%}%></ul></div>',e.menu_series='<% var _class="xl_120", _w = 120, _h= 90; %><%for(var i=0,item; item = data_series[i]; i++) {%><li><div class="pic"><a href="<%=item.defaultPageUrl%>" title="<%=item.albumName%>" target="_blank" class="photo"><img width="<%= _w %>" height="<%= _h %>" alt="<%=item.albumName%>" src="<%=item.largeHorPicUrl%>"><span class="videoBtn"></span></a></div><div class="txt"><strong><a href="<%=item.defaultPageUrl%>" title="<%=item.albumName%>" target="_blank"><%=item.albumName%></a></strong><%if(item.cid == 7) {%><p class="p1">\u5730\u533a\uff1a<%=item.area%></p><p class="p2">\u7c7b\u578b\uff1a<%=helper.slash(item.categories, 2)%></p><%}else if(item.cid == 8) {%><p class="p1">\u5e74\u4efd\uff1a<%=item.publishYear%></p><p class="p2">\u7c7b\u578b\uff1a<%=helper.slash(item.categories, 2)%></p><%}else{%><p class="p1">\u5bfc\u6f14\uff1a<%=helper.slash(item.directors, 1)%></p><p class="p2">\u4e3b\u6f14\uff1a<%=helper.slash(item.mainActors, 1)%></p><%}%><p class="p3"><span class="acount" rel="<%=item.playlistid%>">0</span></p></div></li><%}%>',e.menu_dmlist='<div class="tmList scroll-bar"><ul class="tmu td-n cfix" pb-click-a="mc" data-pb-txid="pg_barrage_listseek"><%for(var i = 0, item; item = res.data[i]; i++) {%><li class="tmi" data-dmlist-seek="<%=Math.floor(item.vtime)%>"><a class="tma" href="javascript:void(0);"><span class="tms l"><%=helper.timeFormat(Math.floor(item.vtime), \'mm:ss\')%></span><span class="tm-txt l" title="<%=item.content%>"><%=helper.escapeXSS(item.content)%></span><span class="tmi-btn" data-content="<%=item.content%>" data-id="<%=item.id%>" pb-click data-pb-txid="pg_barrage_listreport">\u4e3e\u62a5</span><% if(item.fcount && item.fcount >= 10){ %><span class="tm-fav r"><%=item.fcount > 999 ? \'999+\' : item.fcount%></span><%}%></a></li><%}%></ul></div><div class="tmPage td-n cfix"><% if(res.page > 1) {%><span class="tmpa-pre" data-dmlist-page="<%= res.page - 1 %>" pb-click="mc" data-pb-txid="pg_barrage_listpageup"> </span><%} else {%><span class="tmpa-pre tmpa-pre-unable" pb-click="mc" data-pb-txid="pg_barrage_listpageup"> </span><%}%><span class="tmpa"><%=res.page%></span><% if(res.flip) {%><span class="tmpa-next" data-dmlist-page="<%= res.page + 1 %>" pb-click="mc" data-pb-txid="pg_barrage_listpagedown"></span><%} else {%><span class="tmpa-next tmpa-next-unable" pb-click="mc" data-pb-txid="pg_barrage_listpagedown"></span><%}%></div><div class="tmTip"></div>',e.menu_layout='<div id="menu" class="r"><div data-sidebar="content" class="playerBox"><div class="tab_menu cfix"><ul class="cfix"><% if(true){ messagebus.publish(\'statV2.ping\', {type:\'impress\', txid:\'pg_playlist_pltab\'}); %><li data-tab="album-tab-vlist" class="one" pb-click="mc" data-pb-txid="pg_playlist_pltab"><span><%= (window.isSports || window.cid == 13 || window.cid == 24 || window.cid == 25) ? "\u89c6\u9891" : "\u5267\u96c6" %></span></li><% } %><% if(cnts && cnts[1]){ messagebus.publish(\'statV2.ping\', {type:\'impress\', txid:\'pg_playlist_xgtab\'}); %><li data-tab="album-tab-circum" pb-click="mc" data-pb-txid="pg_playlist_xgtab"><span>\u76f8\u5173</span></li><% } %><% if(cnts && cnts[2]){ messagebus.publish(\'statV2.ping\', {type:\'impress\', txid:\'pg_playlist_xltab\'}); %><li data-tab="album-tab-series" pb-click="mc" data-pb-txid="pg_playlist_xltab"><span>\u7cfb\u5217</span></li><% } %><%!-- if(sohuHD.interactions && sohuHD.interactions.enabled()){ --%><li data-tab="album-tab-interaction" pb-click="mc" data-pb-txid="pg_player_adgametab" data-pb-other="tab" class="hid"><span>\u4e92\u52a8</span></li><%!-- } --%><% if(sohuHD.isDMEnabled()){ %><li data-tab="album-tab-dmlist" pb-click="mc" data-pb-txid="pg_barrage_listtab" data-pb-other="tab" class="ui-disabled hid"><span>\u5f39\u5e55</span></li><% } %></ul></div><div id="<%= (window.isPianhua ? \'listS\' : \'listF\') %>" class="tab_cont jujiTab"data-tab="album-box-vlist"> </div><div id="<%= (window.isPianhua ? \'listF\' : \'listS\') %>" class="tab_cont"data-tab="album-box-circum"> </div><div class="tab_cont" data-tab="album-box-series"><div class="list_xl scroll-bar"><ul class="cfix xl_120" pb-click-a="mc" data-pb-txid="pg_playlist_xl"></ul><div id="16188" class="pictxt"></div></div></div><%!-- if(sohuHD.interactions && sohuHD.interactions.enabled()){ --%><div data-tab="album-box-interaction" class="tab_cont hudong scroll-bar"> </div><%!-- } --%><% if(sohuHD.isDMEnabled()){ %><div data-tab="album-box-dmlist" class="tab_cont"> </div><% } %></div><span data-sidebar="close" class="playerBtn" pb-click data-pb-txid="pg_playlist_close" data-pb-other="1"></span><div data-sidebar="open" class="playerBtn_zk hid" pb-click data-pb-txid="pg_playlist_close" data-pb-other="2"><em>\u5c55\u5f00\u5217\u8868</em></div></div>',e.menu_box_interaction='<div class="wid_300"><div class="interbox" class="rel" style="overflow: hidden; padding:10px;"><div id="interactionsContainer" class="rel"><%$.each(data, function(i, item){%><div data-vtBoxId="<%=item.basicId%>" data-vtBoxType="<%=item.type%>" class="vtBox rel" <%= item.type == 1 ? \'pb-click-a data-pb-txid="pg_player_adgameplay" data-pb-other="buy"\' : \'\' %> ><% if(item.type === 1) {%><%if(item.interactionInfo.isItem) {%><span class="vt_buy"></span><%} else {%><span class="vt_tuwen"></span><%}%><%} else if(item.type === 2) {%><span class="vt_vote"></span><%} else if(item.type === 3) {%><span class="vt_zan"></span><%}%><span class="vt_time"><em><%=helper.timeFormat(item.interactionInfo.beginTime, \'mm\u5206ss\u79d2\')%></em></span><% if(item.type === 1) {var pingUrl = \'pb-click-a="http://pg.aty.sohu.com/goto?p=ebuy&al={playlistid}&vid={vid}&adtime=\'+item.interactionInfo.beginTime+\'&uid={fuid}&suv={sid}"\';%><div <%=pingUrl%> ><p class="fs14 c-white"><a href="<%=item.interactionInfo.adHref%>" target="_blank"><%=item.interactionInfo.slogan%></a></p><div class="blank10"> </div><%if(item.interactionInfo.isItem) {%><div class="mB15"><a href="<%=item.interactionInfo.adHref%>" target="_blank"><img src="<%=item.interactionInfo.adImage%>" width="200"></a></div><p class="ta-c mB15" style="width:200px;"><span class="fs18">\uffe5<em class="c-red"><%=item.interactionInfo.itemMoney%></em></span></p><p><a href="<%=item.interactionInfo.adHref%>" class="vt_btn vt_btn1" target="_blank">\u62a2 \u8d2d</a></p><%} else {%><%if(item.interactionInfo.adImage) {%><div class="mB15"><a href="<%=item.interactionInfo.adHref%>" target="_blank"><img src="<%=item.interactionInfo.adImage%>" width="200"></a></div><%}%><%if(item.interactionInfo.adHref) {%><p><a href="<%=item.interactionInfo.adHref%>" class="vt_btn vt_btn1" target="_blank">\u53bb\u770b\u770b</a></p><%}%><%}%></div><%} else if(item.type === 2) {%><p class="fs14 c-white"><%=item.interactionInfo.slogan%></p><div class="blank10"> </div><div class="list_vt_vote"><ul class="list_vt cfix"><%$.each(item.interactionInfo.voteChildList.voteList, function(i, vote) {%><li data-voteoption="<%=vote.voteChildId%>"> <span class="vt_radio"></span><%=vote.voteChildName%> </li><%});%></ul><p class="mB10"><a href="#" class="vt_btn vt_btn1" data-btnVote="submit" data-voteId="<%=item.interactionInfo.voteId%>">\u6295 \u7968</a></p></div><div class="list_vt_vote_result" style="display:none;"> </div><%} else if(item.type === 3) {%><p class="fs14 c-white"><%=item.interactionInfo.slogan%></p><div class="blank10"> </div><div class="erwm"><div class="mB10"><img src="<%=item.interactionInfo.qrCode%>" width="200" height="200"></div><p class="fs14 mB5"><span class="c-white">\u4f7f\u7528\u5fae\u4fe1\u6216\u652f\u4ed8\u5b9d\u626b\u7801\u652f\u4ed8\uff1a</span><span class="fs16 c-red"><%=item.interactionInfo.sponsorMoney%>\u5143</span></p><p class="fs14 ta-c"></p></div><%}%></div><%});%></div></div></div>',e.menu_layout_report='<div id="menu" class="r"><div class="playerBox"><div class="tab_menu bobao_menu cfix"><ul class="bou cfix"><% for ( var i = 0, date; date = dates[ i ]; i++ ) { %><li class="item boi <%= date == videoDate ? \'boi_on\' : \'\' %>" data-date="<%= date %>"><%= helper.titleDateFormat( date ) %></li><% } %><li class="item boi hid" data-tab="dx">\u64ad\u62a5\u8c03\u67e5</li><li class="boi"><a target="_blank" href="<%=window.playlistUrl || \'http://tv.sohu.com/s2013/yulebobao/\' %>">\u66f4\u591a</a></li></ul></div><div id="listF" class="tab_cont bobao on"><div class="list_xl scroll-bar video-list"> </div><div class="list_xl scroll-bar vfrag-list" style="display:none"> </div></div></div></div>',e.menu_layout_report_listpage='<ul class="xl_120 cfix"><% for ( var i = 0, video; video = videos[ i ]; i++ ) { %><% var name = cid == 7 ? video.firstTitle : (( video.subName == "" || cid == 13 || cid == 25 ) ? video.name : video.subName); %><% if ( video.vid == cvid ) { %><li data-index="<%= i %>" data-vid="<%= video.vid %>" class="on" rel="<%= video.publishTime %>"><% } else { %><li data-index="<%= i %>" data-vid="<%= video.vid %>"><% } %><div class="pic"><a class="photo" href="<%= video.pageUrl %>" title="<%= name %>"><img src="<%= video.tvCropPic160 || video.smallPicUrl %>" width="120" height="70" alt="<%= name %>"/><span class="videoBtn"></span><% if ( video.vid == cvid ) { %><span class="maskBg"></span><div class="maskTx">\u6b63\u5728\u64ad\u51fa...</div><% } %></a></div><div class="txt"><strong><a href="<%= video.pageUrl %>"><%= name %></a></strong><p><span class="count pcount" rel="<%= video.vid %>"></span></p></div></li><% } %></ul>',e.menu_layout_recombar='<div id="menu" class="r"><div data-sidebar="content" class="playerBox"><div class="tab_menu cfix"><ul class="cfix"><li class="one on"><span>\u76f8\u5173\u63a8\u8350</span></li></ul></div><div class="tab_cont jujiTab on"><div class="comic_juji list_juji scroll-bar"><ul class="spList f-yahei"><% for(var i=0, item; item = videos[i]; i++ ) {  %><% var name = item.type==0? item.videoName: (item.videoAlbumName || item.videoName); %><% var pic  = item.type==0? item.videoPic7: (item.videoAlbumPic3 || item.videoBigPic);%><% var url  = item.videoUrl; %><li><a href="<%=url%>" title="<%=name%>" data-pgclick="pg_playlist_pl"><img width="80" height="60" class="l" src="<%=pic%>"><div class="txt r"><strong><%=name%></strong><p class="cf"><%if(item.type==0){%><span class="pcount l" rel="<%=item.id%>"></span><%} else {%><span class="acount l" rel="<%=item.playlistId%>"></span><%}%></p></div></a></li><% } %></ul></div></div></div><span data-sidebar="close" class="playerBtn" data-pgclick="pg_playlist_close"></span><div  data-sidebar="open" class="playerBtn_zk hid" ><em>\u5c55\u5f00\u5217\u8868</em></div></div>',i.render=function(i,a){return t.render(e[i],a)}}(sohuHD);