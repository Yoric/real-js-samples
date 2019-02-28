$(document).ready(function () {

    $.urlParam = function(name){
        var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
        if (results) {
            return results[1] || 0;
        }
    };

    var insertParamUrl = function(key, value, url) {
        if (url.indexOf(key) != -1) return url;
        var sep = url.indexOf('?') == -1 ? '?' : '&';
        url = url + sep + encodeURIComponent(key) + (value ? '=' + encodeURIComponent(value) : '');
        return url;
    };

    var partnerid = $.urlParam('partnerid');

    if (partnerid) {
        $("a").not("[href^='#'], [href^='mailto'], [href^='javascript'], [href*='login/'], [href^='http://www.mail.ru/agent?message'], [href^='http://www.macromedia.com/']").each(function() {

            var link = $(this).attr("href");

            if ( (link != undefined && link.match('icq.exe') ) || (link != undefined && !link.match('r.mail.ru') ) || (link != undefined && link.match('icq8_setup.exe')) ) {
                if (link.match(/icq(\d*)_setup\.exe/)) {
                    link = link.replace(/(icq(\d*)_setup)\.exe/, '$1_rfr' + partnerid + '.exe');
                } else if (link.match(/exe\.icq\.com\/icq\.exe/) && link.match('r.mail.ru')) {
                    link = link.replace(/icq\.exe$/, 'icq_rfr'+partnerid + '.exe');
                } else if (link.match(/exe\.icq\.com\/icq\.exe/)) {
                    link = 'http://exe.icq.com/icq_rfr' + partnerid + '.exe';
                } else {
                    link = insertParamUrl('partnerid', partnerid, link);
                }
                $(this).attr('href', link);
            }
        });
    }

    $("#partner").add(".partner-click").click(function() {
        if (partnerid && partnerid.match(/^\d+$/)) {
            $('<div style="position:absolute; top:0; left;0; width:1px; height:1px; overflow:hidden;"><img src="http://rs.mail.ru/g' + partnerid + '.gif" alt="' + partnerid + '" /></div>').prependTo("body");
        }
    });

});