// Bind Click Global Function
function bindClicks(data, callback) {
	$('[sellercenter-data-element-id]').on("click", function(event){
		event.stopImmediatePropagation();
		routeClick(this, bindClicks);
	});
}

// Click Router
function routeClick(elementObj,callback) {
	if($(elementObj).attr('sellercenter-data-element-id') === 't01-click-test') {
		alert('clicked');
	}
	callback(null,null)
}

function isOnScreen(element) {
  var curPos = element.offset();
  var curTop = curPos.top;
  var screenHeight = $(window).height();
  return (curTop > screenHeight) ? false : true;
}


$( document ).ready(function() {


  //
  // M02 - Seller Center Desktop / Mobile Nav
  //
  document.sellercenter_is_mobile_width = false;
  document.sellercenter_is_m02_mobileNav_open = false;
  document.sellercenter_is_m02_miniSearch_open = false;

  function quickResetMiniSearches() {
    $('.sellercenter_m02_search_reveal_button').css({'display': 'inline-block'});
    $('#sellercenter_m02_right_mobile_search_reveal_button').css({'display': 'inline-block'});
    $('.sellercenter-m02-search-group-right-mobile').css({'display': 'none'});
    $('.sellercenter-m02-search-group').removeClass('active');
    document.sellercenter_is_m02_miniSearch_open = false;
  }
  function closeMiniSearches( isQuickClose ) {
    var delay = isQuickClose ? 0 : 600;
    // Close Desktop mini search

    $('.sellercenter-m02-search-group').addClass('active')
      .animate({'opacity': '0'}, delay, function() {
      $('.sellercenter-m02-search-group').removeClass('active');
      $('.m02 > .m02-nav > ul').css({'display': 'block'}).animate({'opacity': '1'}, delay);
      $('#sellercenter_m02_search_reveal_button').css({'display': 'inline-block'});
    });

    // Close Mobile mini search
    $('#sellercenter_m02_right_mobile_search_reveal_button').css({'display': 'inline-block'});
    $('.sellercenter-m02-search-group-right-mobile').addClass('active')
      .animate({'opacity': '0'}, delay, function() {
      $('.sellercenter-m02-search-group-right-mobile').css('display', 'none');
    });
    document.sellercenter_is_m02_miniSearch_open = false;
  }

  function accessibleClickEnterSpace(myfunc) {
    return function (e) {
        if (e.type != "keypress" || e.keyCode == 13 || e.keyCode == 32) {
            myfunc(e);
        }
    };
  }

  function sellercenterCloseHeaderMenuItemsExcept( nameAbbr ) {

    quickResetMiniSearches();

    if( nameAbbr !== 'm') { // MakeAPlan
      $('#sellercenter_m02_foldout_makeAPlan_content').removeClass('active');
      $('.sellercenter .m02-foldout-makeAPlan-content-mobile').removeClass('active');
      $('#sellercenter_m02_makeAPlan_button').parent().removeClass('active');
      $('#sellercenter_m02_makeAPlan_button, #sell-your-way-sub').attr('aria-expanded', false);
      $('#sell-your-way-sub').attr('aria-hidden', true);
    }
    if( nameAbbr !== 'e') { // ExploreTopics
      $('#sellercenter_m02_foldout_exploreTopics_content').removeClass('active');
      $('.sellercenter .m02-foldout-exploreTopics-content-mobile').removeClass('active');
      $('#sellercenter_m02_exploreTopics_button').parent().removeClass('active');
      $('#sellercenter_m02_exploreTopics_button, #explore-topics-sub').attr('aria-expanded', false);
      $('#explore-topics-sub').attr('aria-hidden', true);

    }
    if( nameAbbr !== 'g') { // GetStarted
      $('#sellercenter_m02_foldout_getStarted_content').removeClass('active');
      $('.sellercenter .m02-foldout-getStarted-content-mobile').removeClass('active');
      $('#sellercenter_m02_getStarted_button').parent().removeClass('active');
      $('#sellercenter_m02_getStarted_button, #get-started-sub').attr('aria-expanded', false);
      $('#get-started-sub').attr('aria-hidden', true);

    }
      
    if( nameAbbr !== 'l') { // ListingAndMarketing
      $('#sellercenter_m02_foldout_listingAndMarketing_content').removeClass('active');
      $('.sellercenter .m02-foldout-listingAndMarketing-content-mobile').removeClass('active');
      $('#sellercenter_m02_listingAndMarketing_button').parent().removeClass('active');
      $('#sellercenter_m02_listingAndMarketing_button, #listing-and-marketing-sub').attr('aria-expanded', false);
      $('#listing-and-marketing-sub').attr('aria-hidden', true);

    }
    
    if( nameAbbr !== 'r') { // RunYourStore
      $('#sellercenter_m02_foldout_runYourStore_content').removeClass('active');
      $('.sellercenter .m02-foldout-runYourStore-content-mobile').removeClass('active');
      $('#sellercenter_m02_runYourStore_button').parent().removeClass('active');
      $('#sellercenter_m02_runYourStore_button, #run-your-store-sub').attr('aria-expanded', false);
      $('#run-your-store-sub').attr('aria-hidden', true);

    }
    
    if( nameAbbr !== 's') { // Shipping
      $('#sellercenter_m02_foldout_shipping_content').removeClass('active');
      $('.sellercenter .m02-foldout-shipping-content-mobile').removeClass('active');
      $('#sellercenter_m02_shipping_button').parent().removeClass('active');
      $('#sellercenter_m02_shipping_button, #shipping-sub').attr('aria-expanded', false);
      $('#shipping-sub').attr('aria-hidden', true);

    }
    if( nameAbbr !== 'p') { // service And Payments
      $('#sellercenter_m02_foldout_serviceAndPayments_content').removeClass('active');
      $('.sellercenter .m02-foldout-serviceAndPayments-content-mobile').removeClass('active');
      $('#sellercenter_m02_serviceAndPayments_button').parent().removeClass('active');
      $('#sellercenter_m02_serviceAndPayments_button, #service-and-payments-sub').attr('aria-expanded', false);
      $('#service-and-payments-sub').attr('aria-hidden', true);
    }
      
    if( nameAbbr !== 'ar'){ //Mobile Additional Resources
      $('#sellercenter_m02_foldout_additionalResources_content').removeClass('active');
      $('.sellercenter .m02-foldout-additionalResources-content-mobile').removeClass('active');
      $('#sellercenter_m02_additionalResources_button').parent().removeClass('active');
      $('#sellercenter_m02_additionalResources_button, #service-and-payments-sub').attr('aria-expanded', false);
    }
      
    if( nameAbbr !== 'h') { // Holiday
      $('.sellercenter .sellercenter-m02-holiday').removeClass('active');
    }
  }
  function sellercenterChangeMobileNav( changeToOpen ) {
    sellercenterCloseHeaderMenuItemsExcept(null);
    if(changeToOpen) { // Open

      closeMiniSearches();

      $('.sellercenter .m02').css('display', 'block');
      $('.sellercenter .sellercenter-page-content').addClass('sellercenter-contentPushedRight');
      document.sellercenter_is_m02_mobileNav_open = true;
      sellerCenterKeepMobileMenuVisible();
    } else { // Close
      $('.sellercenter .m02').css('display', 'none');
      $('.sellercenter .sellercenter-page-content').removeClass('sellercenter-contentPushedRight');
      document.sellercenter_is_m02_mobileNav_open = false;
    }
  }
    
  function closeHeaderMenus(){
      var exploreOpen = $('#sellercenter_m02_exploreTopics_button').parent('li').hasClass('active');
      var planOpen = $('#sellercenter_m02_makeAPlan_button').parent('li').hasClass('active');
      var startedOpen = $('#sellercenter_m02_getStarted_button').parent('li').hasClass('active');
      var listingOpen = $('#sellercenter_m02_listingAndMarketing_button').parent('li').hasClass('active');
      var yourStoreOpen = $('#sellercenter_m02_runYourStore_button').parent('li').hasClass('active');
      var shippingOpen = $('#sellercenter_m02_shipping_button').parent('li').hasClass('active');
      var paymentsOpen = $('#sellercenter_m02_serviceAndPayments_button').parent('li').hasClass('active');


      if(exploreOpen || planOpen || startedOpen || listingOpen || yourStoreOpen || shippingOpen || paymentsOpen) {
          sellercenterCloseHeaderMenuItemsExcept('h');
          //reset additional resources
          if($('#sellercenter_m02_additional_resources').hasClass('active')){
              $('#sellercenter_m02_additional_resources').removeClass('active');
          }
          //show the topnav breadcrumb
          $('.sellercenter-mtopnav-breadcrumb').css('opacity','1');
      }
  }

  // Close menus if click detected outside mega nav
  $('html').on('click', accessibleClickEnterSpace(function (evt) {
      closeHeaderMenus();
  }));
    
  // Close menus on window resize
  $(window).resize(function(){
      closeHeaderMenus();
  });

  /* GET STARTED */    
  $('#sellercenter_m02_getStarted_button').on('click keypress', accessibleClickEnterSpace(function (evt) {
      evt.stopImmediatePropagation();
      evt.preventDefault();
    
      var windowWidthNum = $(window).width();
       
      if( windowWidthNum >= 1026 ) {
          // Desktop only - Reveal Foldout
          sellercenterCloseHeaderMenuItemsExcept('g');
          $('#get-started-sub').attr('aria-hidden', function (i, attr) {
              return attr == 'true' ? 'false' : 'true';
          });
          $('#get-started-sub').attr('aria-expanded', function (i, attr) {
              return attr == 'true' ? 'false' : 'true';
          });
          $('#sellercenter_m02_getStarted_button').attr('aria-expanded', function (i, attr) {
              return attr == 'true' ? 'false' : 'true';
          });

          $('#sellercenter_m02_getStarted_button').parent().toggleClass('active');
          
          if($('#sellercenter_m02_getStarted_button').parent().hasClass('active')){
               $('#sellercenter_m02_additional_resources').addClass('active');
               //hide the topnav breadcrumb
              $('.sellercenter-mtopnav-breadcrumb').css('opacity','0');
          } else {
            $('#sellercenter_m02_additional_resources').removeClass('active');
              //show topnav breadcrumb
              $('.sellercenter-mtopnav-breadcrumb').css('opacity','1');
          }
      } else {
           // Mobile only - Reveal Foldout
           sellercenterCloseHeaderMenuItemsExcept('g');
           $('.sellercenter .m02-foldout-getStarted-content-mobile').toggleClass('active');
           if($('.sellercenter .m02-foldout-getStarted-content-mobile').hasClass('active')){

               closeMobileSellerCenterMenus();

               $('#sellercenter_m02_getStarted_button span.more-icon').hide();
               $('#sellercenter_m02_getStarted_button span.less-icon').show();
           } else {
               $('#sellercenter_m02_getStarted_button span.more-icon').show();
               $('#sellercenter_m02_getStarted_button span.less-icon').hide();
           }
        }
    }));


  /* LISTING AND MARKETING */    
  $('#sellercenter_m02_listingAndMarketing_button').on('click keypress', accessibleClickEnterSpace(function (evt) {
      evt.stopImmediatePropagation();
      evt.preventDefault();

      var windowWidthNum = $(window).width();

      if( windowWidthNum >= 1026 ) {
          // Desktop only - Reveal Foldout
          sellercenterCloseHeaderMenuItemsExcept('l');
          $('#listing-and-marketing').attr('aria-hidden', function (i, attr) {
              return attr == 'true' ? 'false' : 'true';
          });
          $('#listing-and-marketing').attr('aria-expanded', function (i, attr) {
              return attr == 'true' ? 'false' : 'true';
          });
          $('#sellercenter_m02_listingAndMarketing_button').attr('aria-expanded', function (i, attr) {
              return attr == 'true' ? 'false' : 'true';
          });

          $('#sellercenter_m02_listingAndMarketing_button').parent().toggleClass('active');
          
          if($('#sellercenter_m02_listingAndMarketing_button').parent().hasClass('active')){
              $('#sellercenter_m02_additional_resources').addClass('active');
              //hide the topnav breadcrumb
              $('.sellercenter-mtopnav-breadcrumb').css('opacity','0');
          } else {
                $('#sellercenter_m02_additional_resources').removeClass('active');
               //show topnav breadcrumb
              $('.sellercenter-mtopnav-breadcrumb').css('opacity','1');
            }
       } else {
          // Mobile only - Reveal Foldout
          sellercenterCloseHeaderMenuItemsExcept('l');
          $('.sellercenter .m02-foldout-listingAndMarketing-content-mobile').toggleClass('active');

           if($('.sellercenter .m02-foldout-listingAndMarketing-content-mobile').hasClass('active')){
               closeMobileSellerCenterMenus();

               $('#sellercenter_m02_listingAndMarketing_button span.more-icon').hide();
               $('#sellercenter_m02_listingAndMarketing_button span.less-icon').show();
           } else {
               $('#sellercenter_m02_listingAndMarketing_button span.more-icon').show();
               $('#sellercenter_m02_listingAndMarketing_button span.less-icon').hide();
           }
      }
   }));
    
  /* LISTING AND MARKETING Mobile Sub menus */          
  $('#mobcreatelistings').on('click keypress', accessibleClickEnterSpace(function (evt) {
      evt.stopImmediatePropagation();
      evt.preventDefault();

      //close nested menus
      $('.mobmanagelistings-content').hide().prev().removeClass('sub-open');
      $('.mobpromotelistings-content').hide().prev().removeClass('sub-open');
      $('.mobcreatelistings-content').toggle().prev().toggleClass('sub-open');
  }));

  $('#mobmanagelistings').on('click keypress', accessibleClickEnterSpace(function (evt) {
      evt.stopImmediatePropagation();
      evt.preventDefault();
      //close nested menus
      $('.mobcreatelistings-content').hide().prev().removeClass('sub-open');
      $('.mobpromotelistings-content').hide().prev().removeClass('sub-open');
      $('.mobmanagelistings-content').toggle().prev().toggleClass('sub-open');
  }));

  $('#mobpromotelistings').on('click keypress', accessibleClickEnterSpace(function (evt) {
      evt.stopImmediatePropagation();
      evt.preventDefault();

          //close nested menus
      $('.mobcreatelistings-content').hide().prev().removeClass('sub-open');
      $('.mobmanagelistings-content').hide().prev().removeClass('sub-open');
      $('.mobpromotelistings-content').toggle().prev().toggleClass('sub-open');
  }));
    
   /* RUN YOUR STORE */    
   $('#sellercenter_m02_runYourStore_button').on('click keypress', accessibleClickEnterSpace(function (evt) {
       evt.stopImmediatePropagation();
       evt.preventDefault();

       var windowWidthNum = $(window).width();

       if( windowWidthNum >= 1026 ) {
            // Desktop only - Reveal Foldout
            sellercenterCloseHeaderMenuItemsExcept('r');
            $('#run-your-store').attr('aria-hidden', function (i, attr) {
                return attr == 'true' ? 'false' : 'true';
            });
            $('#run-your-store').attr('aria-expanded', function (i, attr) {
                return attr == 'true' ? 'false' : 'true';
            });
            $('#sellercenter_m02_runYourStore_button').attr('aria-expanded', function (i, attr) {
                return attr == 'true' ? 'false' : 'true';
            });
            $('#sellercenter_m02_runYourStore_button').parent().toggleClass('active');

           if($('#sellercenter_m02_runYourStore_button').parent().hasClass('active')){
              $('#sellercenter_m02_additional_resources').addClass('active');
               //hide the topnav breadcrumb
              $('.sellercenter-mtopnav-breadcrumb').css('opacity','0');
           } else {
                $('#sellercenter_m02_additional_resources').removeClass('active');
               //show the topnav breadcrumb
              $('.sellercenter-mtopnav-breadcrumb').css('opacity','1');
           }

       } else {
             // Mobile only - Reveal Foldout
             sellercenterCloseHeaderMenuItemsExcept('r');
             $('.sellercenter .m02-foldout-runYourStore-content-mobile').toggleClass('active');

             if($('.sellercenter .m02-foldout-runYourStore-content-mobile').hasClass('active')){
                 closeMobileSellerCenterMenus();

                 $('#sellercenter_m02_runYourStore_button span.more-icon').hide();
                 $('#sellercenter_m02_runYourStore_button span.less-icon').show();
             } else {
                  $('#sellercenter_m02_runYourStore_button span.more-icon').show();
                  $('#sellercenter_m02_runYourStore_button span.less-icon').hide();
             }
         }
    }));
    
    /* SHIPPING */    
    $('#sellercenter_m02_shipping_button').on('click keypress', accessibleClickEnterSpace(function (evt) {
        evt.stopImmediatePropagation();
        evt.preventDefault();

        var windowWidthNum = $(window).width();

        if( windowWidthNum >= 1026 ) {
            // Desktop only - Reveal Foldout
            sellercenterCloseHeaderMenuItemsExcept('s');
            $('#shipping').attr('aria-hidden', function (i, attr) {
               return attr == 'true' ? 'false' : 'true';
            });
            $('#shipping').attr('aria-expanded', function (i, attr) {
               return attr == 'true' ? 'false' : 'true';
            });
            $('#sellercenter_m02_shipping_button').attr('aria-expanded', function (i, attr) {
               return attr == 'true' ? 'false' : 'true';
            });
            $('#sellercenter_m02_shipping_button').parent().toggleClass('active');

            if($('#sellercenter_m02_shipping_button').parent().hasClass('active')){
                $('#sellercenter_m02_additional_resources').addClass('active');
                //hide the topnav breadcrumb
              $('.sellercenter-mtopnav-breadcrumb').css('opacity','0');
            } else {
                $('#sellercenter_m02_additional_resources').removeClass('active');
                //show the topnav breadcrumb
              $('.sellercenter-mtopnav-breadcrumb').css('opacity','1');
            }
       } else {
           // Mobile only - Reveal Foldout
           sellercenterCloseHeaderMenuItemsExcept('s');
           $('.sellercenter .m02-foldout-shipping-content-mobile').toggleClass('active');

           if($('.sellercenter .m02-foldout-shipping-content-mobile').hasClass('active')){
                 closeMobileSellerCenterMenus();

                 $('#sellercenter_m02_shipping_button span.more-icon').hide();
                 $('#sellercenter_m02_shipping_button span.less-icon').show();
           } else {
                $('#sellercenter_m02_shipping_button span.more-icon').show();
                $('#sellercenter_m02_shipping_button span.less-icon').hide();
           }
        }
    }));
    
    /* Shipping Mobile Sub menus */          
    $('#mobbeforethesale').on('click keypress', accessibleClickEnterSpace(function (evt) {
        evt.stopImmediatePropagation();
        evt.preventDefault();

        //close nested menus
        $('.mobafterthesale-content').hide().prev().removeClass('sub-open');
        $('.mobbeforethesale-content').toggle().prev().toggleClass('sub-open');
    }));

    $('#mobafterthesale').on('click keypress', accessibleClickEnterSpace(function (evt) {
        evt.stopImmediatePropagation();
        evt.preventDefault();
        //close nested menus
        $('.mobbeforethesale-content').hide().prev().removeClass('sub-open');
          $('.mobafterthesale-content').toggle().prev().toggleClass('sub-open');
      }));
    
      /* service AND PAYMENTS */    
      $('#sellercenter_m02_serviceAndPayments_button').on('click keypress', accessibleClickEnterSpace(function (evt) {
          evt.stopImmediatePropagation();
          evt.preventDefault();
           
          var windowWidthNum = $(window).width();
    
          if( windowWidthNum >= 1026 ) {
                // Desktop only - Reveal Foldout
                sellercenterCloseHeaderMenuItemsExcept('p');
                $('#serviceAndPayments').attr('aria-hidden', function (i, attr) {
                     return attr == 'true' ? 'false' : 'true';
                });
                $('#serviceAndPayments').attr('aria-expanded', function (i, attr) {
                    return attr == 'true' ? 'false' : 'true';
                });
                $('#sellercenter_m02_serviceAndPayments_button').attr('aria-expanded', function (i, attr) {
                    return attr == 'true' ? 'false' : 'true';
                });
                $('#sellercenter_m02_serviceAndPayments_button').parent().toggleClass('active');
             
              
                if($('#sellercenter_m02_serviceAndPayments_button').parent().hasClass('active')){
                    $('#sellercenter_m02_additional_resources').addClass('active');
                    //hide the topnav breadcrumb
                    $('.sellercenter-mtopnav-breadcrumb').css('opacity','0');
                } else {
                    $('#sellercenter_m02_additional_resources').removeClass('active');
                    //show the topnav breadcrumb
                   $('.sellercenter-mtopnav-breadcrumb').css('opacity','1');
                }
         } else {
            // Mobile only - Reveal Foldout
            sellercenterCloseHeaderMenuItemsExcept('p');
            $('.sellercenter .m02-foldout-serviceAndPayments-content-mobile').toggleClass('active');

            if($('.sellercenter .m02-foldout-serviceAndPayments-content-mobile').hasClass('active')){
                closeMobileSellerCenterMenus();

                $('#sellercenter_m02_serviceAndPayments_button span.more-icon').hide();
                $('#sellercenter_m02_serviceAndPayments_button span.less-icon').show();
            } else {
                 $('#sellercenter_m02_serviceAndPayments_button span.more-icon').show();
                 $('#sellercenter_m02_serviceAndPayments_button span.less-icon').hide();
            }
         }
    }));
    
    /* service and Payments Mobile Sub menus */          
    $('#mobgreatservice').on('click keypress', accessibleClickEnterSpace(function (evt) {
        evt.stopImmediatePropagation();
        evt.preventDefault();

        //close nested menus
        $('.mobpaymentsandfees-content').hide().prev().removeClass('sub-open');
        $('.mobgreatservice-content').toggle().prev().toggleClass('sub-open');
    }));

    $('#mobpaymentsandfees').on('click keypress', accessibleClickEnterSpace(function (evt) {
        evt.stopImmediatePropagation();
        evt.preventDefault();
        //close nested menus
        $('.mobgreatservice-content').hide().prev().removeClass('sub-open');
        $('.mobpaymentsandfees-content').toggle().prev().toggleClass('sub-open');
    }));
    
    /* Additional Resources Mobile Menus */   
    $('#sellercenter_m02_additionalResources_button').on('click keypress', accessibleClickEnterSpace(function (evt) {
        evt.stopImmediatePropagation();
        evt.preventDefault();
           
        var windowWidthNum = $(window).width();
    
        if( windowWidthNum >= 1026 ) {
            // Desktop only - Do Nothing, menus are already showing
                
        } else {
              // Mobile only - Reveal Foldout
              sellercenterCloseHeaderMenuItemsExcept('ar');
              $('.sellercenter .m02-foldout-additionalResources-content-mobile').toggleClass('active');

              if($('.sellercenter .m02-foldout-additionalResources-content-mobile').hasClass('active')){
                  closeMobileSellerCenterMenus();

                  $('#sellercenter_m02_additionalResources_button span.more-icon').hide();
                  $('#sellercenter_m02_additionalResources_button span.less-icon').show();
              } else {
                   $('#sellercenter_m02_additionalResources_button span.more-icon').show();
                   $('#sellercenter_m02_additionalResources_button span.less-icon').hide();
              }
       }
    }));

    
    function closeMobileSellerCenterMenus(){
        $('#sellercenter_m02_getStarted_button span.more-icon').show();
        $('#sellercenter_m02_getStarted_button span.less-icon').hide();
    
        $('#sellercenter_m02_listingAndMarketing_button span.more-icon').show();
        $('#sellercenter_m02_listingAndMarketing_button span.less-icon').hide();
        
        $('#sellercenter_m02_runYourStore_button span.more-icon').show();
        $('#sellercenter_m02_runYourStore_button span.less-icon').hide();
        
        $('#sellercenter_m02_shipping_button span.more-icon').show();
        $('#sellercenter_m02_shipping_button span.less-icon').hide();
        
        $('#sellercenter_m02_serviceAndPayments_button span.more-icon').show();
        $('#sellercenter_m02_serviceAndPayments_button span.less-icon').hide();
        
        $('#sellercenter_m02_additionalResources_button span.more-icon').show();
        $('#sellercenter_m02_additionalResources_button span.less-icon').hide();
        
    }
    

  $('#sellercenter_m02_search_reveal_button').click(function(evt) {
    evt.stopImmediatePropagation();
    document.sellercenter_is_m02_miniSearch_open = true;
    $('#sellercenter_m02_search_reveal_button').css({'display': 'none'});
    $('#sellercenter_m02_right_mobile_search_reveal_button').css({'display': 'none'});

    $('#sellercenter_m02_input').val(""); // Clear input field
    $('#sellercenter_m02_input_mobile').val(""); // Also clear

    // Fade out nav items
    $('.m02 > .m02-nav > ul').css({'opacity': '0', 'display': 'none'});

    // Fade in Search input
    $('.sellercenter-m02-search-group').addClass('active').animate({'opacity': '1'}, '600', function(){
      $('#gsc-i-id1').focus();
    });
  });
  $('#sellercenter_m02_search_reveal_button').keyup( function(e) {
    if (e.which === 13  || e.which === 32) { // Enter executes...
      $('#sellercenter_m02_search_reveal_button').click();
    }
  });
  $('#sellercenter_m02_desktop_search_button').keyup( function(e) {
    if (e.which === 13  || e.which === 32) { // Enter executes...
      $('#sellercenter_m02_desktop_search_button').click();
    }
  });

  $('#sellercenter_m02_right_mobile_search_reveal_button').on('click', accessibleClickEnterSpace(function (evt) {
    evt.stopImmediatePropagation();
    evt.preventDefault();
    document.sellercenter_is_m02_miniSearch_open = true;
    $('#sellercenter_m02_search_reveal_button').css({'display': 'none'});
    $('#sellercenter_m02_right_mobile_search_reveal_button').css({'display': 'none'});

    $('#sellercenter_m02_input_mobile').val(""); // Clear input field
    $('#sellercenter_m02_input').val(""); // also clear

    // Fade in Search input
    $('.sellercenter-m02-search-group-right-mobile').css({'display': 'inline-block'}).animate({'opacity': '1'}, '600', function(){
        $('#gsc-i-id2').focus();
    });

  }));


  // Close Search
  $('#sellercenter_m02_search_close_button').click(function(evt) {
      closeMiniSearches();
  });
  $('#sellercenter_m02_search_close_button_mobile').click(function(evt) {
      closeMiniSearches();
  });
  $('#sellercenter_m02_search_close_button').keyup( function(e) {
    if (e.which === 13 || e.which === 32) { // Enter executes...
      $('#sellercenter_m02_search_close_button').click();
    }
  });
  $('#sellercenter_m02_search_close_button_mobile').keyup( function(e) {
    if (e.which === 13 || e.which === 32) { // Enter executes...
      $('#sellercenter_m02_search_close_button_mobile').click();
    }
  });


  $('#sellercenter_m02_hamburger').click(function(evt) {
      if( document.sellercenter_is_m02_mobileNav_open ) {
          // Closing...
          sellercenterChangeMobileNav( 0 );
      } else {
          // Opening...
          sellercenterChangeMobileNav( 1 );
        }
  });
  $('#sellercenter_m02_hamburger').keyup(function (e) {
       if (e.which === 13 ) { // Enter executes...
          $('#sellercenter_m02_hamburger').click();
       }
  });
    
  $('#sellercenter_m02_close_icon').click(function(evt) {
        if( document.sellercenter_is_m02_mobileNav_open){
            //closing
            sellercenterChangeMobileNav(0);
        } else {
            //opening
            sellercenterChangeMobileNav(1);
        }
    });
    $('#sellercenter_m02_close_icon').keyup(function (e) {
       if (e.which === 13 ) { // Enter executes...
          $('#sellercenter_m02_close_icon').click();
       }
  });


  var sellerCenterWindowHasResized = function () {

    var windowWidthNum = $(window).width();
    if( windowWidthNum >= 1026 ) {
      document.sellercenter_is_mobile_width = false;
      $('.sellercenter-page-content').removeClass('mobile');
      $('.sellercenter .m02').css('display', 'block'); // Always show (as horiz. menu) on Desktop
      $('.m02-mobile-only').css('display', 'none');

    } else {
          document.sellercenter_is_mobile_width = true;
          $('.sellercenter-page-content').addClass('mobile');
          $('.m02-mobile-only').css('display', 'inline-block');
          if( document.sellercenter_is_m02_mobileNav_open ) { // Conditionally show (as vert. menu) on mobile
              $('.sellercenter .m02').css('display', 'block');
          } else {
                $('.sellercenter .m02').css('display', 'none');
          }
       }
  };
  $(window).on('resize', sellerCenterWindowHasResized);


  // When the Mobile nav is open, prevent scrolling past it's bottom.
  var sellercenterWindow = $(window);
  var sellerCenterKeepMobileMenuVisible = function () {

    // Limit the scroll position ONLY if mobile menu is open.
    if( !document.sellercenter_is_m02_mobileNav_open ) { return; }

    var EBAY_HEADER_HEIGHT = 100;
    var makeAPlanMobileMMHeight = ($('.sellercenter .m02-foldout-makeAPlan-content-mobile').hasClass('active') ? $('.sellercenter .m02-foldout-makeAPlan-content-mobile').height() : 0 );
    var exploreTopicsMMHeight   = ($('.sellercenter .m02-foldout-exploreTopics-content-mobile').hasClass('active') ? $('.sellercenter .m02-foldout-exploreTopics-content-mobile').height() : 0 );
    var getStartedMMHeight = ($('.sellercenter .m02-foldout-getStarted-content-mobile').hasClass('active') ? $('.sellercenter .m02-foldout-getStarted-content-mobile').height() : 0 );
    var listingMarketingMMHeight = ($('.sellercenter .m02-foldout-listingAndMarketing-content-mobile').hasClass('active') ? $('.sellercenter .m02-foldout-listingAndMarketing-content-mobile').height() : 0 );
    var runYourStoreMMHeight = ($('.sellercenter .m02-foldout-runYourStore-content-mobile').hasClass('active') ? $('.sellercenter .m02-foldout-runYourStore-content-mobile').height() : 0 );
    var shippingMMHeight = ($('.sellercenter .m02-foldout-shipping-content-mobile').hasClass('active') ? $('.sellercenter .m02-foldout-shipping-content-mobile').height() : 0 );
    var paymentsMMHeight = ($('.sellercenter .m02-foldout-serviceAndPayments-content-mobile').hasClass('active') ? $('.sellercenter .m02-foldout-serviceAndPayments-content-mobile').height() : 0 );
    var additionalResourcesMMHeight = ($('.sellercenter .m02-foldout-additionalResources-content-mobile').hasClass('active') ? $('.sellercenter .m02-foldout-additionalResources-content-mobile').height() : 0 );

    var view_height = 579 + EBAY_HEADER_HEIGHT + makeAPlanMobileMMHeight + exploreTopicsMMHeight 
                    + getStartedMMHeight + listingMarketingMMHeight + runYourStoreMMHeight + shippingMMHeight + paymentsMMHeight + additionalResourcesMMHeight;
    var window_height = sellercenterWindow.height();
    var window_top_position = sellercenterWindow.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    if ( window_bottom_position > view_height) {
        window_top_position -= 10;
        sellercenterWindow.scrollTop( window_top_position );
    }
  };

  sellercenterWindow.on('scroll resize', sellerCenterKeepMobileMenuVisible);
  sellercenterWindow.trigger('scroll');



  // Submit search via HTML5 INPUT to Google CSE
  var submitSearchToGoogle = function( googleSearchText, gElement ) {
     var element = google.search.cse.element.getElement( gElement );
     element.prefillQuery(googleSearchText);
     element.execute(googleSearchText);
  };

  // Desktop mini-search
  function doDesktopMiniSearch() {
    closeMiniSearches( true );
    var input = $('#sellercenter_m02_input').val();
    var googleSearchText = input.replace(/[^a-zA-Z0-9-\s]/g, "");
    submitSearchToGoogle( googleSearchText, 'minisearch_desktop' );
    input.val('');
  }
  $('#sellercenter_m02_desktop_search_button').on( 'click', doDesktopMiniSearch );
  $('#sellercenter_m02_input').keyup(function (e) {
    var input = $(this);
    var searchText = input.val().replace(/[^a-zA-Z0-9-\s]/g, "");

    if (e.which === 13 && searchText.length>=0 ) { // Enter executes...
        doDesktopMiniSearch();
    }
  });

  // Mobile mini-search
  function doMobileMiniSearch() {
    closeMiniSearches( true );
    var input = $('#sellercenter_m02_input_mobile').val();
    var googleSearchText = input.replace(/[^a-zA-Z0-9-\s]/g, "");
    submitSearchToGoogle( googleSearchText, 'minisearch_mobile'  );
    input.val('');
  }
  $('#sellercenter_m02_mobile_search_button').on( 'click', doMobileMiniSearch );
  $('#sellercenter_m02_input_mobile').keyup(function (e) {
    var input = $(this);
    var searchText = input.val().replace(/[^a-zA-Z0-9-\s]/g, "");

    if (e.which === 13 && searchText.length>=0 ) { // Enter executes...
      doMobileMiniSearch();
    }
  });
    
  


  /////
  // End of M02 Nav Module
  //



  //
  // M03 Header
  //
  // Enable the play button depending on mediaType value
  $('.sellercenter .m03').each(function(index, value) {
    var mediaType = $( this ).attr('json-data-m03-media-type');
    if( mediaType && mediaType.indexOf('video')>=0 ) {
      $( this ).find( '.m03-play-icon' ).addClass('active');
    } else {
      $( this ).find( '.m03-play-icon' ).removeClass('active');
    }
  });


  //
  // M04 Header
  //
  // Enable the play button depending on mediaType value
  $('.sellercenter .m04-item').each(function(index, value) {
    var mediaType = $( this ).attr('json-data-m04-media-type');
    if( mediaType && mediaType.indexOf('video')>=0 ) {
      $( this ).find( '.m04-play-icon' ).addClass('active');
    } else {
      $( this ).find( '.m04-play-icon' ).removeClass('active');
    }

  });


  $('.m04-item-inner').matchHeight({
    byRow: true,
    property: 'height',
    target: null,
    remove: false
  });



  //
  // M07
  //
  $('.m07-item-inner').matchHeight({
    byRow: true,
    property: 'height',
    target: null,
    remove: false
  });


  //
  // M08 Header
  //
  $('.m08-item-inner').matchHeight({
    byRow: true,
    property: 'height',
    target: null,
    remove: false
  });

	$('.m08-item-inner h3').matchHeight({
		byRow: true,
		property: 'height',
		target: null,
		remove: false
	});


  //
  // M11 Header
  //
  $('.m11-item-inner').matchHeight({
    byRow: true,
    property: 'height',
    target: null,
    remove: false
  });


  //
  // M14 - Update play button(s)
  //
  $('.sellercenter .m14').each(function(index, value) {
    var mediaType = $( this ).attr('json-data-m14-media-type');
    if( mediaType && mediaType.indexOf('video')>=0 ) {
      $( this ).find( '.m14-play-icon' ).addClass('active');
    } else {
      $( this ).find( '.m14-play-icon' ).removeClass('active');
    }
  });


  //
  // M15 - Update play button(s)
  //
  $('.sellercenter .m15').each(function(index, value) {
    var mediaType = $( this ).attr('json-data-m15-media-type');
    if( mediaType && mediaType.indexOf('video')>=0 ) {
      $( this ).find( '.m15-play-icon' ).addClass('active');
    } else {
      $( this ).find( '.m15-play-icon' ).removeClass('active');
    }
  });

  //
  // M17 - Multi-tabbed Module
  //
  $('.m17-tab-header ul li a').on('click', function (e) {
      e.preventDefault();
      e.stopImmediatePropagation();
      var $this = $(this);
      var tabGroup = $this.parents('ul.m17-equal-height');
      var tabContainer = $this.parents('.m17');
      var tabid = $this.attr('href');
      window.location.hash = tabid;
      console.log('clicked a thing');

      tabGroup.find('li').removeClass('active');
      $this.parent('li').addClass('active');

      tabContainer.find('.m17-tab-content-inner').removeClass('active');
      tabContainer.find('.m17-tab-content '+tabid).addClass('active');

      tabContainer.find('a.m17-mobile-accordion-tab').removeClass('active');
      tabContainer.find('a[href="'+tabid+'"].m17-mobile-accordion-tab').addClass('active');

      if(!isOnScreen($(tabid))) {
        $('html, body').animate({
          scrollTop: $(tabid).parents('.m17').offset().top - ($('.sticky-placeholder-width').height() || 0)
        }, 200);
      }
  });

  $('.m17-mobile-accordion-tab').on('click', function (e){
      e.preventDefault();
      var $this = $(this);
      var tabContainer = $this.parents('.m17');
      var tabid = $this.attr('href');
      var isActive = $this.hasClass('active');
      window.location.hash = tabid;


      if(isActive) {
          
      }
      else {
          tabContainer.find('.m17-mobile-accordion-tab.active').removeClass('active');
          $this.addClass('active');
          tabContainer.find('.m17-tab-content-inner.active').removeClass('active').slideUp('slow');
          tabContainer.find('.m17-tab-content-inner'+tabid).slideDown('slow', function(){
              $(this).addClass('active');
              var linkHeight = tabContainer.find('#m17-tb1').height;
              $('html, body').animate({
                  scrollTop: tabContainer.find('.m17-tab-content').offset().top
              }, 200);
          });

          tabContainer.find('.m17-tab-header li').removeClass('active');
          tabContainer.find('ul li a[href="'+tabid+'"]').parent('li').addClass('active');
      }
  });

  $('ul.m17-equal-height li a').matchHeight({
    byRow: true,
    property: 'height',
    target: null,
    remove: false
  });

  $(window).resize(function() {
      if($(this).width() > 767) {
          $('.m17-mobile-accordion-tab').matchHeight({
            byRow: true,
            property: 'height',
            target: null,
            remove: false
          });
      }
  });


  //
  // M20
  //
  $('.m20_item_inner').matchHeight({
    byRow: true,
    property: 'height',
    target: null,
    remove: false
  });


  //
  // M22 - accordion js (allows for multiple M22s on a single page)
  //
  $('.sellercenter .m22 .m22-accordion-list ul.m22-accordion-list-item li a.m22-toggle').on('click', function(e) {
    e.preventDefault();
    //e.stopImmediatePropagation();

    var hash = $(this).attr('href');
    console.log('hash', hash);
    window.location.hash = hash;

    if( $(this).parents('li').hasClass('active') ) {
      $(this).parents('li').removeClass('active');
      return;
    }

    $(this).parents('.m22-accordion-list').find('li').removeClass('active'); // When clicked, close all first

    $(this).parents('li').addClass('active');

    var prevElem = $(this).parents('li').prev();
    if(prevElem.length) {
      $('html, body').animate({
        scrollTop: prevElem.offset().top - ($('.sticky-placeholder-width').height() || 0)
      }, 200);
    } else {
      $('html, body').animate({
        scrollTop: $(this).parents('.m22').find('.m22-accordion-list').offset().top - ($('.sticky-placeholder-width').height() || 0)
      }, 200);
    }


  });

  //expand all
  $('.sellercenter .m22 .m22-accordion-head .m22-menu a.expand-menu').click(function(e){
    e.preventDefault();
    $(this).parents('.m22-accordion-list').find('li').addClass('active');
  });

  //collapse all
  $('.sellercenter .m22 .m22-accordion-head .m22-menu a.collapse-menu').click(function(e){
    e.preventDefault();
    $(this).parents('.m22-accordion-list').find('li').removeClass('active');
  });


  //
  // M23
  //
  $('.m23-card-inner').matchHeight({
    byRow: true,
    property: 'height',
    target: null,
    remove: false
  });


  //
  // M26 - Alert (sometimes appears under M03)
  //
  $('.sellercenter a.alert-close').click(function(e){
    $(this).parents('.m26').css('display', 'none');
    e.preventDefault();
  });


  //
  // M27 - accordion js (allows for multiple M27s on a single page)
  //
  $('.sellercenter .m27 .m27-accordion-list ul.m27-accordion-list-item li a.m27-toggle').click(function(e){

    if( $(this).parents('li').hasClass('active') ) {
      $(this).parents('li').removeClass('active');
      return;
    }

    $(this).parents('.m27-accordion-list').find('li').removeClass('active'); // When clicked, close all first

    $(this).parents('li').addClass('active');

  });

  //expand all
  $('.sellercenter .m27 .m27-accordion-head .m27-menu a.expand-menu').click(function(e){
    $(this).parents('.m27-accordion-list').find('li').addClass('active');
  });

  //collapse all
  $('.sellercenter .m27 .m27-accordion-head .m27-menu a.collapse-menu').click(function(e){
    $(this).parents('.m27-accordion-list').find('li').removeClass('active');
  });

  //
  // M30 - Enable gallery clicks
  //
  var
    leftArrow = $( '.m30-left-arrow-container' ),
    rightArrow = $( '.m30-right-arrow-container' ),
    activeImg = $( '.m30-image-container-inner img.active' ),
    newActiveImg,
    activeText = $( '.m30-text-container-inner li.active' ),
    newActiveText
  ;

  leftArrow.click( function() {
    if ( activeImg.prev( 'img' ).length > 0 ) {
      newActiveImg = activeImg.prev( 'img' );
      activeImg.removeClass( 'active' );
      newActiveImg.addClass( 'active' );
      activeImg = $( '.m30-image-container-inner img.active' );

      newActiveText = activeText.prev( 'li' );
      activeText.removeClass( 'active' );
      newActiveText.addClass( 'active' );
      activeText = $( '.m30-text-container-inner li.active' );
    } else {
      newActiveImg = $( '.m30-image-container-inner img:last-of-type' );
      activeImg.removeClass( 'active' );
      newActiveImg.addClass( 'active' );
      activeImg = $( '.m30-image-container-inner img.active' );

      newActiveText = $( '.m30-text-container-inner ul li:last-child' );
      activeText.removeClass( 'active' );
      newActiveText.addClass( 'active' );
      activeText = $( '.m30-text-container-inner li.active' );
    }
  });

  rightArrow.click( function() {
    if ( activeImg.next( 'img' ).length > 0 ) {
      newActiveImg = activeImg.next( 'img' );
      activeImg.removeClass( 'active' );
      newActiveImg.addClass( 'active' );
      activeImg = $( '.m30-image-container-inner img.active' );

      newActiveText = activeText.next( 'li' );
      activeText.removeClass( 'active' );
      newActiveText.addClass( 'active' );
      activeText = $( '.m30-text-container-inner li.active' );
    } else {
      newActiveImg = $( '.m30-image-container-inner img:first-of-type' );
      activeImg.removeClass( 'active' );
      newActiveImg.addClass( 'active' );
      activeImg = $( '.m30-image-container-inner img.active' );

      newActiveText = $( '.m30-text-container-inner ul li:first-child' );
      activeText.removeClass( 'active' );
      newActiveText.addClass( 'active' );
      activeText = $( '.m30-text-container-inner li.active' );
    }
  });

  //
  // M28 - Code to enable / disable the video play button
  //
  $('.sellercenter .m28 .m28-item').each(function(index, value) {
    var mediaType = $( this ).attr('json-data-m28-media-type');
    if( mediaType && mediaType.indexOf('video')>=0 ) {
      $( this ).find( '.m28-play-icon' ).addClass('active');
    } else {
      $( this ).find( '.m28-play-icon' ).removeClass('active');
    }
  });

  $(function() {
    $('.m28-item-inner').matchHeight({
      byRow: true,
      property: 'height',
      target: null,
      remove: false
    });
  });


  //
  // M29
  //
  $('.m29-item').matchHeight({
    byRow: true,
    property: 'height',
    target: null,
    remove: false
  });


  //
  // M35 Header
  //
  $('.m35-item-inner-copy').matchHeight({
    byRow: true,
    property: 'height',
    target: null,
    remove: false
  });

	$('.m35-item-inner-title').matchHeight({
		byRow: true,
		property: 'height',
		target: null,
		remove: false
	});


  $('.m35-item-inner').matchHeight({
    byRow: true,
    property: 'height',
    target: null,
    remove: false
  });


  //
  // M37 Header
  //
  $('.m37-item').matchHeight({
    byRow: true,
    property: 'height',
    target: null,
    remove: false
  });


  //
  // Mini-search - On Homepage or FAQ pages, hide the mini-search.
  //
  if( $('div.m36').length || $('div.m37').length ) {
    $('#sellercenter_m02_search_reveal_button').remove();
    $('#sellercenter_m02_right_mobile_search_reveal_button').remove();
  }

  // Check for an anchor link hash and handle...
  // Get hash from query string
  var hash = window.location.hash;

	if (hash) {
		console.log(hash);
		// Get panel header element
		var anchor = hash.replace('gsc.tab=0', '').replace('&', '');
		if (anchor.length) {
			$anchor = $(anchor);
			var topp = $anchor.top || $anchor.offset().top;
			if ($anchor.parents().hasClass('m17') || $anchor.parents().hasClass('m22')) {
				$('[href="'+anchor+'"]').click();
			}
			else {
				var offset = $('.sticky-placeholder-width').length > 0 ? (15 + ($('.sticky-placeholder-width').height() || 0)) : 0;
				$('html, body').animate({
					scrollTop: topp - offset
				}, 1);
			}
		}
	}
    
  //
  //MTopNav
  //
  
	$('.sticky-placeholder a').click(function(e) {
		e.preventDefault();
		window.location.hash = $(this).attr('href');
		var anchor = $($(this).attr('href'));
		
		if (anchor) {
			var topp = anchor.offset().top;
			
			var offset = $('.sticky-placeholder-width').height() || 0;
			
			$('html, body').animate({
				scrollTop: topp - offset
			}, 1);
		}
	})
	
  //Sticky Header
    function checkStickyHeader() {
		if ($(window).scrollTop() >= $('.sticky-placeholder').offset().top) {
		   $('.sellercenter .mtopnav .mtopnav-wrapper div.sticky-placeholder-width').addClass('fixed-header');
		}
		else {
		   $('.sellercenter .mtopnav .mtopnav-wrapper div.sticky-placeholder-width').removeClass('fixed-header');
		}
	}
    $(window).scroll(checkStickyHeader);
    $(window).load(checkStickyHeader);
    $(window).load(function() {
		var hdif = $('.sellercenter .mtopnav .mtopnav-wrapper div.stack3').height() - 52;
		$('.sellercenter  a.page-anchor').css('margin-top', -(65 + hdif));
		
		//$('.sticky-placeholder').css('height', $('.sticky-placeholder-width').height());
		setTimeout(2000, checkStickyHeader);
	});

});