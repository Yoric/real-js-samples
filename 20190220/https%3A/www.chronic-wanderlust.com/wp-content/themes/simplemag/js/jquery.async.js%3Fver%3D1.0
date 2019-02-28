jQuery(document).ready(function ($) {
    
    "use strict";
    
    /**
     * Mega Menu
    **/
    $(function MegaMenuNav() {
        
        var mega_menu_container = $('.mega-menu-ajax'),
            parent_link = $('.menu-item-has-mega-menu > a > span'),
            sub_link = $('.menu-item-has-mega-menu .sub-links > .menu-item-type-taxonomy > a > span');

        // Output the mega menu on category mouse over
        $(parent_link).add(sub_link).mouseover(function () {

            // Get tag slug from href attirbute
            var selecetd_taxonomy = $(this).parent().attr('href');
            
            // Highlights active links
            $('.active-link').not(this).removeClass('active-link');
            $(this).parent().addClass('active-link');

            $(mega_menu_container).parent().addClass('posts-loading');
            $(mega_menu_container).parent().removeClass('posts-added');
            
            $.ajaxSetup({cache: true});
            
            $.ajax({

                cache: true,
                timeout: 8000,
                url: ti_async.ti_ajax_url,
                type: 'POST',
                data: ({
                    action: 'filter_posts',
                    taxonomy: selecetd_taxonomy,
                    ti_nonce: ti_async.ti_nonce
                }),

                success: function (data, textStatus, jqXHR) {
                    
                    var $response = $(data);
                    
                    // Display posts on page
                    $(mega_menu_container).html($response);

                    // Restore div visibility
                    $(mega_menu_container).parent().removeClass('posts-loading');
                    $(mega_menu_container).parent().addClass('posts-added');

                }

            });

        });
        
    });    

    
    /**
     * Latest By Format Section loader
    **/
    $(function LatestFormatLoader() {
   
        $('.media-posts .load-media-content').click(function (e) {

            e.preventDefault();
            
            var postid = $(this).attr('data-postid'),
                metakey = $(this).attr('data-metakey'),
                container = $('.media-posts #postid-' + postid + ' .media-content');
            
            container.parent().addClass('content-loading').removeClass('content-added');
            
            $.ajax({

                cache: false,
                timeout: 8000,
                url: ti_async.ti_ajax_url,
                type: 'POST',
                data: ({
                    action: 'load_custom_field_data',
                    ti_nonce: ti_async.ti_nonce, // wp_nonce
                    postid: postid,
                    metakey: metakey
                }),

                success: function (data, textStatus, jqXHR) {

                    var $response = $(data);
                    
                    container.parent().addClass('content-added');
                    container.html($response);
                    container.find('.format-media-item').fitVids();
                    
                    // autoplay
                    container.find('iframe').each(function() {
                        var videosrc = $(this).attr('src');
                        
                        if ( videosrc.indexOf('vimeo.com') > -1 || videosrc.indexOf('youtube.com') > -1 ) {
                            $(this).attr('src', videosrc += '?&autoplay=1');
                            
                        } else if ( videosrc.indexOf('soundcloud.com') > -1 ) {
                            $(this).attr('src', videosrc += '?&auto_play=true');    
                        } 
                    });
                   
                }

            });

        });

    });    

    
    /**
     * Post Format loader
    **/
    $(function LatestFormatLoader() {
   
        $('.entries .load-media-content').click(function (e) {

            e.preventDefault();
            
            var postid = $(this).attr('data-postid'),
                metakey = $(this).attr('data-metakey'),
                container = $('.entries #postid-' + postid + ' .media-content');
            
            container.parent().addClass('content-loading').removeClass('content-added');
            
            $.ajax({

                cache: false,
                timeout: 8000,
                url: ti_async.ti_ajax_url,
                type: 'POST',
                data: ({
                    action: 'load_custom_field_data',
                    ti_nonce: ti_async.ti_nonce, // wp_nonce
                    postid: postid,
                    metakey: metakey
                }),

                success: function (data, textStatus, jqXHR) {

                    var $response = $(data);
                    
                    container.parent().addClass('content-added');
                    container.html($response);
                    container.find('.format-media-item').fitVids();
                    
                    // autoplay
                    container.find('iframe').each(function() {
                        var videosrc = $(this).attr('src');
                        
                        if ( videosrc.indexOf('vimeo.com') > -1 || videosrc.indexOf('youtube.com') > -1 ) {
                            $(this).attr('src', videosrc += '?&autoplay=1');
                            
                        } else if ( videosrc.indexOf('soundcloud.com') > -1 ) {
                            $(this).attr('src', videosrc += '?&auto_play=true');    
                        } 
                    });
                   
                }

            });

        });

    });
    
});