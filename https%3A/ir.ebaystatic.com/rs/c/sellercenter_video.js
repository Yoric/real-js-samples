$(function(){
    // activate video functionality
    // When they click the video URL, show the video:
    var overlay = $('#overlay');
    var videoTable = $('#video');
    var frameContainer = $('#video .video-inner');
    var iniSlide = 0;

    frameContainer.find('iframe').remove();

    function getVideoContainerHTML(src)
    {
        return '<iframe src="' + src + '" id="video-frame" width="866" height="487" frameborder="0" allowfullscreen></iframe>';
    }

    $('a.overlay-video').on('click', function(e) {
        // Do not go there:
        e.preventDefault();
        $('body').addClass('noscroll');

        videoTable.addClass('overlay-on');
        frameContainer.empty();
        // Replace the source of the iframe with this url:
        frameContainer.append(getVideoContainerHTML(this.href));

        // Show the overlay:
        overlay.addClass('overlay-on');
        $('.overlay-bg').addClass('overlay-on');

    });

    $('.m17').on('click', '.overlay-image', function (e) {
        // Do not go there:
        e.preventDefault();
        $('body').addClass('noscroll');

        var clone = $(this).clone();

        videoTable.addClass('overlay-on');
        // Replace the source of the iframe with this url:
        frameContainer.empty();
        frameContainer.append(clone);

        // Show the overlay:
        overlay.addClass('overlay-on');
        $('.overlay-bg').addClass('overlay-on');
    });

    // CLOSE BUTTON INITIALIZERS FOR VIDEO AND MODAL CAROUSEL
    $('#close-video').on('click', function(e) {
        e.preventDefault();
        $('body').removeClass('noscroll');
        frameContainer.find('iframe').remove();
        videoTable.removeClass('overlay-on');
        overlay.removeClass('overlay-on');
        $('.overlay-bg').removeClass('overlay-on');

    });
    $('.close-video').on('click', function(e) {
        e.preventDefault();

        $('body').removeClass('noscroll');
        $('#modal-carousel-container').hide();
        $('.slider').slick('unslick');
        $('.slider').find('.breakout-item').each(function(){
            var item = $(this);
            item.remove();
        });

        overlay.removeClass('overlay-on');
        $('.overlay-bg').removeClass('overlay-on');
    });
    // ESCAPE KEY TO CLOSE VIDEO AND MODAL CAROUSEL
    $(document).keyup(function(e) {
      if (e.keyCode === 27) {
        frameContainer.find('iframe').remove();
        videoTable.removeClass('overlay-on');

        $('body').removeClass('noscroll');
        $('#modal-carousel-container').hide();
        if($('.slider').hasClass('slick-initialized')) {
            $('.slider').slick('unslick');
            $('.slider').find('.breakout-item').each(function(){
                var item = $(this);
                item.remove();
            });
        }
        overlay.removeClass('overlay-on');
        $('.overlay-bg').removeClass('overlay-on');
      }   // escape key maps to keycode `27`
    });
});
