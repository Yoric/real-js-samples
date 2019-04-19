/* David Garnier 08/2018 - garnierdav@yahoo.com */
var adDiv;

// ANIMATION
var nbloopmax = 1;
var currentloop = 0;

var tl1;
var tl2;
var tl3;

function initEB() {
	if (!EB.isInitialized()) {
		EB.addEventListener(EBG.EventName.EB_INITIALIZED, startAd);
	} else {
		startAd();
	}
}

function startAd() {
    adDiv = document.getElementById("ad");

    addEventListeners();
	
	// ANIMATION
	tl1 = new TimelineLite();
	tl2 = new TimelineLite();
	tl3 = new TimelineLite();
	
	var blurval = 25;
    
    // INIT
    document.getElementById("banner").style.visibility = "visible";
	tl1.set("#scr03focus", {left:"0px"});
	tl1.set("#scr04focus", {left:"0px"});
	
	tl1.from("#loopcontainer", 0.5, {opacity:0, ease: Power2.easeOut}, "0");
	tl1.from("#scr01", 0.7, {opacity:0, scale:1.05, ease: Power2.easeInOut}, "-=0.3");
	tl1.from("#scr01txt01", 0.5, {opacity:0, scale:0.9, ease: Power2.easeOut}, "-=0.3");
	
	tl1.to("#scr01txt01", 0.4, {opacity:0, scale:1.2, ease: Power2.easeIn}, "2.2");
	
	tl1.from("#trans1", 0.7, {opacity:0, ease: Power2.easeIn}, "2.5");
	tl1.from(["#trans3","#scr02bleu"],0.7, {opacity:0, ease: Power2.easeIn}, "-=0.5");
	tl1.from(["#scr02bg","#scr02config","#scr02focus","#scr02title","#scr02nim"],0.7, {opacity:0, ease: Power2.easeIn}, "-=0.5");
	
	tl3.to("#scr02focus", 0, {left:"43px", ease:Power0.easeNone}, "4.2");
	tl1.from("#scr02marron", 0.4, {opacity:0, ease:Power0.easeNone}, "4");
	
	tl3.to("#scr02focus", 0, {left:"86px", ease:Power0.easeNone}, "5.2");
	tl1.from("#scr02noir", 0.4, {opacity:0, ease:Power0.easeNone}, "5");
	
	tl1.from("#scr03", 0.5, {opacity:0, ease: Power2.easeIn}, "6.7");
	
	tl3.to("#scr03focus", 0, {left:"45px", ease:Power0.easeNone}, "8.2");
	tl1.from("#scr03int02", 0.4, {opacity:0, ease:Power0.easeNone}, "8");
	
	tl3.to("#scr03focus", 0, {left:"90px", ease:Power0.easeNone}, "9.2");
	tl1.from("#scr03int03", 0.4, {opacity:0, ease:Power0.easeNone}, "9");
	
	tl1.from("#scr04", 0.5, {opacity:0, ease: Power2.easeIn}, "10.5");
	
	tl3.to("#scr04focus", 0, {left:"48px", ease:Power0.easeNone}, "12.3");
	tl1.from("#scr04roue2", 0.4, {opacity:0, ease:Power0.easeNone}, "12");
	
	tl3.to("#scr04focus", 0, {left:"96px", ease:Power0.easeNone}, "13.3");
	tl1.from("#scr04roue3", 0.4, {opacity:0, ease:Power0.easeNone}, "13");
	
	
	tl1.from("#scr05", 0.5, {opacity:0, ease: Power2.easeIn}, "15.5");
	tl1.from("#endtxt", 0.6, {y:"20px", opacity:0, ease: Power2.easeOut}, "15.8");
	
	tl1.from("#cta", 0.8, {scale:0.5, opacity:0, ease: Power2.easeInOut}, "-=0.3");
	tl1.from("#ctaarrow", 0.4, { left:"-10px", opacity: 0, ease: Power2.easeOut}, "+=0");
	
	tl1.to("#ctaarrow", 0.2, { opacity: 0, ease: Power2.easeIn}, "-=0.4");
	tl1.to("#ctaarrow", 0.1, { left:"-10px", opacity: 0, ease: Power0.easeNone}, "+=0");
	
	tl1.to("#ctaarrow", 0.4, { left:"0px", opacity: 1, ease: Power2.easeOut}, "+=0.5");
    tl1.to("#ctaarrow", 0.2, { opacity: 0, ease: Power2.easeIn}, "+=0");
    tl1.to("#ctaarrow", 0.1, { left:"-10px", opacity: 0, ease: Power0.easeNone}, "+=0");
    
    tl1.to("#ctaarrow", 0.4, { left:"0px", opacity: 1, ease: Power2.easeOut}, "+=0.5");
	tl1.to("#ctaarrow", 0.2, { opacity: 0, ease: Power2.easeIn}, "+=0");
    tl1.to("#ctaarrow", 0.1, { left:"-10px", opacity: 0, ease: Power0.easeNone}, "+=0");
    
    tl1.to("#ctaarrow", 0.4, { left:"0px", opacity: 1, ease: Power2.easeOut}, "+=0.5");
	tl1.to("#ctaarrow", 0.2, { opacity: 0, ease: Power2.easeIn}, "+=0");
    tl1.to("#ctaarrow", 0.1, { left:"-10px", opacity: 0, ease: Power0.easeNone}, "+=0");
    
    tl1.to("#ctaarrow", 0.4, { left:"0px", opacity: 1, ease: Power2.easeOut}, "+=0.5");
	
	// OUT
	//tl2.to("#loopcontainer", 0.5, { opacity:0, ease: Power2.easeIn}, "14.5").call(actions, ["restart"], this);
}

function addEventListeners() {
    document.getElementById("clickthrough-button").addEventListener("click", clickthrough);
}

function clickthrough() {
    EB.clickthrough();
}

window.addEventListener("load", initEB);

// ANIMATION
function actions(e)
{
    switch(e)
    {
        case "restart": 
            currentloop++;
            tl2.to("#loopcontainer", 0.5, { opacity:1, ease: Power2.easeOut});
            tl1.restart(true, false);
			tl3.restart(true, false);
            if( currentloop < nbloopmax ){
                tl2.restart(true, false);
            }
            break;
    }
}