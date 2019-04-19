/* global $ TweenMax Power0 Power1 Power2 Power3 */

var stopWatch,
    loops = 1;

//A simple helper function to do display:none to multiple items
function hideAll(whichOnes) {
    for (var q = 0; q < whichOnes.length; q++) {
        $(whichOnes[q]).hide();
    }
}
//This will echo how many seconds have passed
function returnTimer() {
    stopWatch = ((new Date().getTime()) - stopWatch) * 0.001;
    console.log(stopWatch + " seconds");
}
//Set the initial states of all divs here
function setInitialStates() {
    hideAll([
        // images
        '.bg1',
        '.copy1',
        '.logo_white', 
        '.copy2txt1',
		'.copy2txt2',
		'.copy2txt3',
		'.copy2txt4',
		'.copy2plus1',
		'.copy2plus2',
		'.copy2plus3',
		'.copy2plus4',
        '.legal',
        '.blue_container',
        '.content_blue_container',
        '.logo_blue', 
        '.copy3',
        '.cta',
        '.left_border',
        '.bottom_border',
        '.right_border', 
        '.cta',
		'.logo1',
		'.backOpacity',
		'.copy4',
    ]);
}

function resetAll() {
    TweenMax.set($(".container").find('*'), { clearProps: "all" });
}

function replay() {
    TweenMax.killTweensOf($(".container").find('*'));
    resetAll();
    setInitialStates();
    seq01();
}

function mainInit() {
    setInitialStates();
    $('.container').show();
    stopWatch = new Date().getTime();
    seq01();
}

function seq01() {
    var twnDelay = 0;
    $(".bg1").show();
    $(".copy1").show();
    $(".logo_white").show();
	TweenMax.from($(".bg1"), 3, { alpha: 1,  ease: Power2.easeOut, delay: twnDelay });
	twnDelay += 0.2;
    TweenMax.from($(".logo_white"), 3, { alpha: 1,x:0, ease: Power2.easeOut, delay: twnDelay });
    twnDelay += 0.5;
    TweenMax.from($(".copy1"), 3, { alpha: 0, x:0, ease: Power2.easeOut, delay: twnDelay });
    twnDelay += 1.5;
    TweenMax.delayedCall(twnDelay, seq02);
}

function seq02() {
    var twnDelay = 0;
    $('.copy2txt1').show();	
	$('.copy2plus1').show();	
	$('.copy2txt2').show();	
	$('.copy2plus2').show();	
	$('.copy2txt3').show();	
	$('.copy2plus3').show();	
	$('.copy2txt4').show();	
	$('.copy2plus4').show();
	
	$('.backOpacity').show();
	TweenMax.to($(".bg1"), 1, { alpha: 1, ease: Power2.easeOut, delay: twnDelay });
	twnDelay += 0.2;
	TweenMax.to($(".copy1"), 1, { alpha: 0, ease: Power2.easeOut, delay: twnDelay });
	twnDelay += 0.5;
    TweenMax.from($(".backOpacity"), 1.5, { alpha: 0, ease: Power2.easeOut, delay: twnDelay });
	twnDelay += 0.6;    
	TweenMax.from($(".copy2plus1"), 3, { alpha: 0, ease: Power2.easeOut, delay: twnDelay });
	TweenMax.from($(".copy2txt1"), 3, { alpha: 0, ease: Power2.easeOut, delay: twnDelay });
	twnDelay += 0.6;    
	TweenMax.from($(".copy2plus2"), 3, { alpha: 0, ease: Power2.easeOut, delay: twnDelay });
	TweenMax.from($(".copy2txt2"), 3, { alpha: 0, ease: Power2.easeOut, delay: twnDelay });
	twnDelay += 0.6;    
	TweenMax.from($(".copy2plus3"), 3, { alpha: 0, ease: Power2.easeOut, delay: twnDelay });
	TweenMax.from($(".copy2txt3"), 3, { alpha: 0, ease: Power2.easeOut, delay: twnDelay });
	twnDelay += 0.6;    
	TweenMax.from($(".copy2plus4"), 3, { alpha: 0, ease: Power2.easeOut, delay: twnDelay });
	TweenMax.from($(".copy2txt4"), 3, { alpha: 0, ease: Power2.easeOut, delay: twnDelay });
    
	twnDelay += 2.2;
    TweenMax.delayedCall(twnDelay, seq03);
}
function seq03() {
    var twnDelay = 0; 
	$('.copy3').show();	
	twnDelay += 0.4;    
	TweenMax.to($(".bg1"), 1, { alpha: 1, ease: Power2.easeOut, delay: twnDelay });
	TweenMax.to($(".copy2plus1,.copy2plus2,.copy2plus3,.copy2plus4,.copy2txt1,.copy2txt2,.copy2txt3,.copy2txt4"), 1, { alpha: 0, ease: Power2.easeOut, delay: twnDelay });
	twnDelay += 0.4;  
	TweenMax.from($(".copy3"), 1, { alpha: 0, ease: Power2.easeOut, delay: twnDelay }); 
	twnDelay += 1;
    TweenMax.delayedCall(twnDelay, seq04);
}
function seq04() {
    var twnDelay = 0; 
    $('.left_border').show();
    $('.bottom_border').show();
    $('.right_border').show();
    $('.logo_blue').show();
	$('.copy4').show();
	$('.copy4a').show();
    $('.blue_container').show();
    $('.content_blue_container').show();
	$('.cta').show();
    $('.legal').show();    
	TweenMax.to($(".bg1"), 1, { alpha: 1, scale:0.56, y:-38, x:90, ease: Quad.easeInOut, delay: twnDelay });
	TweenMax.to($(".copy3,.backOpacity"), 1.5, { alpha: 0, ease: Power2.easeOut, delay: twnDelay }); 
	twnDelay += 0.6;
	TweenMax.from($(".left_border"), 0.6, { height: 0, ease: Power1.easeOut, delay: twnDelay });
    twnDelay += 0.3;
    TweenMax.from($(".bottom_border"), 0.4, { width: 0, ease: Power1.easeOut, delay: twnDelay +0.30});
	
	TweenMax.from($(".logo_blue"), 0.9, { alpha: 0, ease: Power2.easeOut, delay: twnDelay +0.30 });
    twnDelay += 0.2;
    TweenMax.from($(".right_border"), 0.6, { y: 600, ease: Power1.easeOut, delay: twnDelay+0.35 });	
	twnDelay += 1.2;
	TweenMax.from($(".copy4"), 2, { alpha: 0, ease: Power2.easeOut, delay: twnDelay });
	twnDelay += 0.3;
	TweenMax.from($(".copy4a"), 2, { alpha: 0, ease: Power2.easeOut, delay: twnDelay });
	twnDelay += 1;
    TweenMax.from($(".blue_container"), 0.9, { width: 0, ease: Power2.easeOut, delay: twnDelay });
    twnDelay += 0.8;
    TweenMax.from($(".content_blue_container"), 0.9, { alpha: 0, ease: Power2.easeOut, delay: twnDelay });	 
    TweenMax.from($(".legal"), 0.9, { opacity: 0, ease: Power1.easeOut, delay: twnDelay });
    twnDelay += 0.8;
    TweenMax.from($(".cta"), 0.9, { alpha: 0,x:-300, ease: Power2.easeOut, delay: twnDelay });	
    twnDelay += 3.0;
    if (loops > 0) {
        loops -= 1;
        TweenMax.to($(".white_bg"), 0.3, { alpha: 1, ease: Power2.easeOut, delay: twnDelay });
        twnDelay += 0.1;
        TweenMax.to($(".white_bg"), 0.5, { alpha: 0, ease: Power2.easeOut, delay: twnDelay });
        TweenMax.delayedCall(twnDelay, function() {
            TweenMax.delayedCall(0, replay);
        });
    }
}
$(window).on('load', mainInit);
