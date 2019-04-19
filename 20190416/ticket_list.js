(function () {
    var ticket = {};
    // 获取该js执行之前全部script标签
    ticket.scripts = document.getElementsByTagName('script');
    // 最后一个script为当前script
    ticket.currentScript = ticket.scripts[ticket.scripts.length - 1];
    // 获取当前script上的属性
    ticket.item = $(ticket.currentScript);
    // 是否异步加载购票列表
    ticket.async = ticket.item.attr("data-async") || false;

    ticket.toDo = function () {
        ticket.project_id = ticket.item.attr("data-project-id") || false;
        ticket.iframe_height = (ticket.item.attr("data-height") || false) ? ticket.item.attr("data-height") + "px" : "";
        ticket.iframe_width = (ticket.item.attr("data-width") || false) ? ticket.item.attr("data-width") + "px" : "100%";
        ticket.iframe_border_width = ticket.item.attr("data-border-width") || 0;
        
        var utm_source_str = '';
        if(ticket.item.attr("data-utm-source")){
            utm_source_str = '&utm_source=' + ticket.item.attr("data-utm-source");
        }

        if (!ticket.project_id) {
            console.log("缺少data-peoject-id参数");
        } else {
            // 加载弹窗登录的脚本 没有弹窗登录了，不需要加载文件
            /*ticket.script = document.createElement("script");
            ticket.script.src = "http://passport.csdn.net/content/loginbox/login.js";
            ticket.script.type = "text/javascript";
            ticket.item.after(ticket.script);*/

            // 加载购票iframe
            ticket.iframe = document.createElement("iframe");
            ticket.iframe.src = document.location.protocol + "//" + document.domain + "/api/activity_api/get_goods_list?t=" + new Date().getTime() + "&project_id=" + ticket.project_id + utm_source_str;
            ticket.iframe.id = "ticket_list";
            ticket.iframe.scrolling = "no";
            ticket.iframe.style.width = ticket.iframe_width;
            ticket.iframe.style.height = ticket.iframe_height;
            ticket.iframe.style.borderWidth = ticket.iframe_border_width;
            ticket.iframe.style.display = "none";

            ticket.item.after(ticket.iframe);
        }
    };

    if(ticket.async){
        $(function () {
            ticket.toDo();
            ticket = null;
        });
    }else{
        ticket.toDo();
        ticket = null;
    }
})();