_satellite.pushAsyncScript(function(event, target, $variables){
  var t = window.tagging;
(function (td, tu, $) {
    //Configure JSLL and metadata
    try {
        var metaTag = $('<meta>');
        metaTag.attr('name', 'ms.appid');
        metaTag.attr('content', 'JS:msedu');
        $('head').append(metaTag);

        if (typeof (awa) == 'undefined') {
            jQuery.ajax('https://az725175.vo.msecnd.net/scripts/jsll-4.js', { dataType: "script", cache: true }).done(function (script, textStatus) {
                awa.init(window.tagging.jsllConfig);
            });
        }
        td.getPageTitle();
        td.isPageNameSet = false;
        if (typeof awa !== 'undefined' && awa) {
            awa.extendCoreData({ "pageName": td.pageName });
            td.isPageNameSet = true;
        }
    } catch (e) {
        console.error('Could not configure AWA correctly.');
    }

    try {
        $("iframe[id*=oneplayer]").each(function (idx) {
            var that = this;
            $(that.contentWindow).load(function () {
                $(that).contents().on("DOMSubtreeModified", function (e1) {
                    if (e1.target.innerHTML.length > 0) {
                        if (that.contentWindow.awa) {
                            that.contentWindow.awa.ct.captureContentPageAction = function (o) {
                                window.awa.ct.captureContentPageAction(o);
                            };
                            $(that).contents().off("DOMSubtreeModified");
                        }
                    }
                });
            });
        });
    } catch (e) {
        //console.error('Could not configure APID correctly.');
    }

}(t.data, t.util, window.jQuery));
});
