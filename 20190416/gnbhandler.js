!function($,window,document){var GnbHandler=function(){var lastScrollHeight=0;function adjustFooterPosition(){if(!!window.__viewer){return;}var welFooter=$("#footer");if(welFooter==null){return;}var clientHeight=$(document.body).height();var footerHeight=welFooter.height();$("#wrap").css("min-height",(clientHeight-footerHeight)+"px");$("#cont").css("min-height",(clientHeight-footerHeight)+"px");}function start(){var mainHeader=$("#header.main");if(mainHeader){var mainHeaderHeight=mainHeader.height();var sOsName=eg.agent().os.name;var bIsAndroid=sOsName=="android";var bIsIos=sOsName=="ios";var $elWrap=$("#wrap");var elListenerBase=$elWrap.length==0?document.body:$elWrap.get(0);if(bIsIos){$(window).on("scroll",function(){adjustHeader.call(this,mainHeader,mainHeaderHeight);});}else{if(bIsAndroid){$(window).on("scroll",function(){adjustHeader.call(this,mainHeader,mainHeaderHeight);});}}$(window).on("scrollend",function(e){var currentY=$(document).scrollTop();if(currentY<=mainHeaderHeight){mainHeader.show();}});}adjustFooterPosition();$(window).on("resize",adjustFooterPosition);}function adjustHeader(mainHeader,mainHeaderHeight){if(!this._lastYCheckTime){this._lastY=$(document).scrollTop();this._lastYCheckTime=new Date().getTime();}var currentTime=new Date().getTime();if(currentTime-this._lastYCheckTime<50){return;}this._lastYCheckTime=currentTime;var currentY=$(document).scrollTop();var distanceY=this._lastY-currentY;if(distanceY==0){return;}if(distanceY<0&&currentY>mainHeaderHeight){mainHeader.hide();}else{if(mainHeader.hasClass("scroll_up")&&currentY>mainHeaderHeight){mainHeader.removeClass("scroll_up");}mainHeader.show();}if(currentY<10){mainHeader.addClass("scroll_up");}this._lastY=currentY;}return{start:start};};window.GnbHandler=GnbHandler;}(jQuery,window,document);