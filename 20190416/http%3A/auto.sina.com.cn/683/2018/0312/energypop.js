// var energyURL = '//interface.sina.cn/auto/kd/getKdBttomEsData.d.json?callback=?';
var energyURL = '//interface.sina.cn/auto/inner/getPageFocusdata.d.json?container_id=167356&position=焦点图&widget_name=focus&callback=?';
$.getJSON(energyURL, function(data){
    // if(data.code !== 0){
    if(data.status !== 0){
        console.log('energyURL is error!')
        $('#J_newEnergy').hide();
    } else {
        var baseData = data.data,
            // subData = data.subinfo,
            asideHTML = '',
            iconsHTML = '';
        // for(var i = 0; i < baseData.length; i++){
        //     var title = baseData[i].title,
        //         lable = baseData[i].outlook,
        //         img = baseData[i].img,
        //         price = '',
        //         subbrandsid = baseData[i].subbrandsid,
        //         paramHTML = '<p class="param"><span>'+ lable +'</span></p>';
        //     if(subbrandsid !== '' && subData[subbrandsid]){
        //         lable = subData[subbrandsid].serialZhName;
        //         price = subData[subbrandsid].priceRange;
        //         paramHTML = '<p class="param"><span>'+ lable +'</span><i>|</i><span>'+ price +'万</span></p>';
        //     }
        //     asideHTML += '<li>'
        //               +     '<a class="clearfix" href="http://auto.sina.com.cn/estation/" target="_blank">'
        //               +         '<img class="fL" alt="'+ title +'" src="'+ img +'">'
        //               +         '<div class="info fR">'
        //               +             '<p class="tit">'+ title +'</p>'
        //               +             paramHTML
        //               +         '</div>'
        //               +     '</a>'
        //               + '</li>';
        //     iconsHTML += '<li></li>';
        // }
        for(var i = 0; i < baseData.length; i++){
            var title = baseData[i].title,
                img = baseData[i].img,
                paramHTML = '<p class="param"><span>上海车展</span></p>';
            asideHTML += '<li>'
                      +     '<a class="clearfix" href="http://auto.sina.com.cn/shanghaichezhan/" target="_blank">'
                      +         '<img class="fL" alt="'+ title +'" src="'+ img +'">'
                      +         '<div class="info fR">'
                      +             '<p class="tit">'+ title +'</p>'
                      +             paramHTML
                      +         '</div>'
                      +     '</a>'
                      + '</li>';
            iconsHTML += '<li></li>';
        }

        $('#lp_aside').html(asideHTML);
        $('#lp_icons').html(iconsHTML);
        $('#J_newEnergy').find('.new-logo').attr('href','http://auto.sina.com.cn/shanghaichezhan/');
        $('#J_newEnergy').show().animate({'bottom':'0'},1000);
        $('#J_newEnergy .close-btn').on('click', function(){
            $('#J_newEnergy').animate({'bottom':'-120px'},500);
        });

        $('#lp_icons').css('marginLeft', - $('#lp_icons').width() / 2 +'px');
        autoMove({
            'imgsCon': '#lp_aside',
            'iconsCon': '#lp_icons',
            'prevIcon': '#lp_prevIcon',
            'nextIcon': '#lp_nextIcon',
            'chooseIcon': 'on',
            'isAuto': true,
            'isCycle': true,
            'moveTime': 300,
            'beginPos': -224
        });
        $('#lp_aside').children().eq(0).before($('#lp_aside').children().eq($('#lp_aside').children().length - 2).clone(true));
        $('#lp_aside').append($('#lp_aside').children().eq(2).clone(true));
        $('#lp_aside').width(434 * $('#lp_aside').children().length);
    }
});