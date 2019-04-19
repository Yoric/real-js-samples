$(".quickCount__bar").each(function (key, bar) {
    let percentage = $(this).data('percentage');
    $(this).animate({
        easing: 'swing',
        'width': percentage + '%'
    }, 4000);
});
$('.quickCount__count').counterUp({
    delay: 10,
    time: 4000
});