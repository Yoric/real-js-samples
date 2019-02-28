(function () {
    //var tgDisabled = window.advConfigs === undefined
    var tgDisabled =  !$('.adLink4 a').is(':visible')
    tgDisabled && _jc_ping.push(['_trackBiClick', 'g_2_adLink4_tg_no'])
    //var gameNavs = $('#gameLink11').find('a')
    //for (var i = 0; i < gameNavs.length; i++) {
    var link = $('.adLink4 a'),href = link.attr('href')
    if(tgDisabled){
        link.on('click', function (e) {
            if(0 === e.button){
                _jc_ping.push(['_trackBiClick', 'g_2_adLink4_tg_no_click'])
                window.open(href)
            }

        }).attr('href', 'javascript:;').attr('target','')
    }
    //}
})()