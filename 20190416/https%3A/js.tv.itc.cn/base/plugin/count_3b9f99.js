/* sohutv 2018-07-10 10:15:02 */
"undefined"==typeof sohuHD&&(sohuHD={}),function(t){"undefined"==typeof sohuHD.count&&(sohuHD.count={formatCount:function(t){var o=/(\d{1,3})(?=(\d{3})+(?:$|\.))/g;return t>=1e8?(t=Math.round(10*parseFloat(t/1e8))/10,t=t.toString().replace(o,"$1,")+"\u4ebf"):t=t>=1e5?Math.round(t/1e4).toString().replace(o,"$1,")+"\u4e07":t.toString().replace(o,"$1,"),t},getCount:function(o,n,u,e){if(null!=o&&0!=o.length){var c=e||"",i=[],a=[];o.each(function(o,u){t(u).attr("rel")&&(a.push(u),i.push(t(u).attr("rel").split("_")[0]),t(u).attr("id",n+t(u).attr("rel")))}),i.length<=0||t.ajax({type:"GET",dataType:"script",url:u+i.join(",")+"&jsonp="+n+c+"&type=2",cache:!0,success:function(){"count"==n&&1==i.length?t("#"+n+i[0]).html(window[n+c+"Format"]||sohuHD.count.formatCount(window[n+c])).show():window[n+c]&&window[n+c].videos&&t.each(window[n+c].videos,function(o,u){"count"==n?t.each(a,function(o,e){0==t(e).attr("id").indexOf(n+u.pid)&&t(e).html(u.countFormat).show()}):t.each(a,function(o,e){0==t(e).attr("id").indexOf(n+u.videoId)&&t(e).html(u.countFormat).show()})})}})}},getCoCount:function(o,n,u,e){var c=(new Date).getTime();if(null!=o&&0!=o.length){var i=[],a=[];if(o.each(function(o,u){t(u).attr("rel")&&(a.push(u),i.push(t(u).attr("rel").split("_")[0]),t(u).attr("id",n+t(u).attr("rel")+c))}),!(i.length<=0))for(var r=[],h=i,s=0;s<Math.ceil(i.length/30);s++)h=i.slice(30*s,s+30),t.ajax({type:"GET",dataType:"jsonp",url:u+h.join(",")+"&"+n+"="+r.join(","),cache:!0,success:function(o){t.each(o.data,function(o,u){t("#"+n+u.topicId+c).html(u.commentCountTip).show()})}})}},getBokeCount:function(o,n,u,e){if(null!=o&&0!=o.length){var c=e||"",i=[],a=[];o.each(function(o,u){t(u).attr("rel")&&(a.push(u),i.push(t(u).attr("rel").split("_")[0]),t(u).attr("id",n+t(u).attr("rel")))}),0!=i.length&&t.ajax({type:"GET",dataType:"script",url:u+i.join("|")+"&n="+n+c,cache:!0,success:function(){window[n+c]&&t.each(window[n+c],function(o,u){t.each(a,function(o,e){0==t(e).attr("id").indexOf(n+u.id)&&t(e).html(u.countFormat).show()})})}})}},getEduCount:function(o,n,u,e){if(null!=o&&0!=o.length){var c=[],i=[];o.each(function(o,u){t(u).attr("rel")&&(i.push(u),c.push(t(u).attr("rel").split("_")[0]),t(u).attr("id",n+t(u).attr("rel")))}),0!=c.length&&t.ajax({type:"GET",dataType:"script",url:u+c.join(","),cache:!0,success:function(){window.count&&t.each(window.count,function(o,u){t.each(i,function(o,e){0==t(e).attr("id").indexOf(n+u.courseId)&&t(e).html(sohuHD.count.formatCount(u.totalCountFormat)).show()})})}})}},getCountBy:function(t,o,n){sohuHD.count.getCount(t.find(".pcount"),"pvid","//count.vrs.sohu.com/count/query.action?videoId=",o),sohuHD.count.getCount(t.find(".acount"),"count","//count.vrs.sohu.com/count/query_Album.action?albumId=",o),sohuHD.count.getBokeCount(t.find(".bcount"),"bvid","//vstat.v.blog.sohu.com/dostat.do?method=getVideoPlayCount&v=",o),sohuHD.count.getEduCount(t.find(".ecount"),"evid","//vstat.my.tv.sohu.com/query/course?courseId=",o),sohuHD.count.getCoCount(t.find(".rcount"),"vrs_vids","//api.my.tv.sohu.com/comment/api/v1/count?pgc_vids=","commentC")}})}(jQuery);