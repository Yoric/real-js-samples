var csdn=csdn||{};csdn.SwapImage=function(){function i(t){this.imgArray=t.swapRoot.find(".J_adv"),this.maxImgLength=this.imgArray.length,this.tagArray=null,this.currentImage=null,this.currentTag=null,this.nextImage=null,this.intervalTime=null,this.duration=500,this.swapTime=3e3,this.index=-1,this.nextIndex=-1,this.init()}return i.prototype={init:function(){var t=this;this.imgArray.each(function(t,i){0==t?$(i).css({opacity:1,display:"list-item"}):$(i).css({opacity:0,display:"none"})}),this.creatImgTags(),setTimeout(function(){t.reCall.call(t),t.tagEvent.call(t),t.imgEvent.call(t)},1500)},reCall:function(){this.index++,this.nextIndex=this.index+1,this.currentImage=this.index<this.maxImgLength?this.imgArray.get(this.index):this.imgArray.get(0),this.nextImage=this.index<this.maxImgLength-1?this.imgArray.get(this.index+1):this.imgArray.get(0),this.index=this.index<this.maxImgLength-1?this.index:-1,this.nextIndex=this.nextIndex<this.maxImgLength?this.nextIndex:0,this.swapImg(this.currentImage,this.nextImage)},swapImg:function(t,i){var n=this;this.animate({img:t,opc:0,complete:function(){$(t).css("display","none"),$(n.currentImage).css("opacity","")}}),$(i).css({display:"list-item",opacity:0}),this.animate({img:i,opc:1,complete:function(){$(n.nextImage).css("opacity",""),n.currentImage=i,n.swapTag.call(n,n.nextIndex),n.intervalCall()}})},animate:function(t){$(t.img).animate({opacity:t.opc},{duration:this.duration,easing:"swing",step:function(){("function"==typeof t.step?t.step:function(){})()},complete:function(){("function"==typeof t.complete?t.complete:function(){})()}})},intervalCall:function(){var t=this;this.intervalTime=setTimeout(function(){t.reCall.call(t),clearTimeout(t.intervalTime)},this.swapTime)},creatImgTags:function(){for(var t=$(".js-tagRoot"),i=0;i<this.maxImgLength;i++)0==i?t.append('<li class="current"></li>'):t.append("<li></li>");this.tagArray=$(".slide-outer").find("li"),this.currentTag=this.tagArray.get(0)},swapTag:function(t){var i=this.tagArray.get(t);this.currentTag&&$(this.currentTag).removeClass("current"),$(i).addClass("current"),this.currentTag=i},tagEvent:function(){var n=this;this.tagArray.each(function(i,t){$(t).bind("click",function(){if(!$(this).hasClass("current")){var t=n.imgArray.get(i);n.imgArray.get(i+1);clearTimeout(n.intervalTime),n.index=i-1,n.nextIndex=n.index+1,$(n.currentImage).stop(!0,!0),$(n.nextImage).stop(!0,!0),n.swapImg(n.currentImage,t),n.swapTag(i)}})})},imgEvent:function(){var n=this;this.imgArray.each(function(i,t){$(t).bind("mouseover",function(){var t=n.imgArray.get(i);$(t).stop(!0,!0),clearTimeout(n.intervalTime)}),$(t).bind("mouseout",function(){n.intervalCall()})})}},{swap:function(t){new i(t)}}}();