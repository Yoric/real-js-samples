"use strict";

jQuery.noConflict();
(function($) {
  $(function(){	

	
/*************************************************************
СПОЙЛЕР
*************************************************************/
$(".closed").toggleClass("show"),
	$(".title").click(function(){
	$(this).parent().toggleClass("show").children("div.contents").slideToggle("medium")
	});	
	
})})(jQuery);
