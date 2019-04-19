var loop = 0;

//Init
function Init()
{
    roundtrip = roundtrip.replace("<br>", " ");
    roundtrip = roundtrip.replace("<br/>", " ");
    roundtrip = roundtrip.replace("<br />", " ");
    
    roundtrip = roundtrip.replace("<br>", " ");
    roundtrip = roundtrip.replace("<br/>", " ");
    roundtrip = roundtrip.replace("<br />", " ");
    
    roundtrip = roundtrip.replace("<br>", " ");
    roundtrip = roundtrip.replace("<br/>", " ");
    roundtrip = roundtrip.replace("<br />", " ");
    
    claim = claim.replace("the charming way to fly", "the charming<br>way to fly");
    
    if(specialstoerer)
        Get("SpecialStoerer").innerHTML = "<img src='images/se.png' style='height:100%;'>";
    
    if(border)
    {
        var borders = document.getElementsByClassName("BorderElement");
        
        for(var i=0; i < borders.length; i++)
        {
            borders[i].style.backgroundColor = bordercolor;
        }
    }
    else
    {
        Get("Borders").style.display = "NONE";
    }
    Get("BannerContent").style.display = "BLOCK";
    Get("BannerContent").style.opacity = "0";
    
    if(price != 0)
        if(IsPriceStoerer())
            stoerer = false;
    
    if(price == 1)
    {
        var xmlDoc = parseXml(offlinePrice);
        xmlDataLoaded(xmlDoc);
    }
    
    if(price == 2)
    {
        if(getUriParams.bannerview != undefined)
        {
            if(getUriParams.bannerview == "true")
            {
                xmlUrl = xmlUrl.replace("https://cdn-aua.adverserve.net/XML/", "https://video06.adverserve.net/tools/aua/TINO/campaigns/banner/1/XML/");
            }
        }
        var xmlDoc = new xmlLoaderClass(xmlUrl, xmlDataLoaded, xmlLoadingError);
    }
    
    if(logostar)
    {
        Get("LogoStar").style.color = logostarcolor;
    }
    else
        Get("LogoStar").style.display = "NONE";
    
    Get("copyText").style.display = "NONE";
    
    //CheckContent();
    
    //Check Video
    if(video)
    {
        Get("bgImage").style.display = "none";
        InitVideoPlayer();
    }
    else
    {
        Get("SoundTogglerOn").style.display = "none";
    }
    
    Get("SoundTogglerOff").style.display = "none";
    
    if(video)
        Toggler();
    
    //Check Resize
    if(dynamicResize)
    {
        window.addEventListener("resize", WindowResizeHandler);
        WindowResizeHandler();
        
        document.title = document.title + "_dynResize";
    }
    
    if(close == false)
    {
        Get("CloseButton").style.display = "NONE";  
    }
    else
    {
        Get("CloseButton").addEventListener("click", CloseBanner);
    }
    
    if(vieLogo == false)
    {
        Get("VieLogo").style.display = "NONE";
    }
    
    if(!lufthansalogo)
    {
        Get("LufthansaLogo").style.display = "NONE";
        
        var starLogos = document.getElementsByClassName("StarLogo");
        starLogos[0].style.bottom = "10px";
        starLogos[1].style.bottom = "10px";
        
        if(vieLogo)
        {
            Get("VieLogo").style.bottom = "25px";
        }
    }
    
    //Get("myText").innerHTML = myText;
    
    Get("mySvg").style.width = (1.3 * myWidth) + "px";
    Get("mySvg").style.height = (1.3 * myHeight) + "px";
    Get("mySvg").style.marginBottom = ((1.3 * myOffset) -2) + "px";
    
    //Set Legal
    //Get("LegalText").style.display = "NONE";
    if(legal)
    {
        Get("LegalText").innerHTML = legalText;
        
        if(noparagraph == false)
        {
            Get("LegalButton").addEventListener("click", ToggleLegal);
        }
        else
        {
            Get("LegalButton").style.display = "NONE";
            
            var SujetLegalText = Get("SujetLegalText");
            
            SujetLegalText.style.display = "block";
            SujetLegalText.innerHTML = noparagraphtext;
            
            /*var tHeight = SujetLegalText.clientHeight;
            var tWidth = SujetLegalText.clientWidth;
            
            var deg = 270;
            
            SujetLegalText.style.webkitTransform = 'rotate('+deg+'deg)'; 
            SujetLegalText.style.mozTransform    = 'rotate('+deg+'deg)'; 
            SujetLegalText.style.msTransform     = 'rotate('+deg+'deg)'; 
            SujetLegalText.style.oTransform      = 'rotate('+deg+'deg)'; 
            SujetLegalText.style.transform       = 'rotate('+deg+'deg)';
            
            SujetLegalText.style.left = (((tWidth / 2) * -1) + 8).toString() + "px";
            SujetLegalText.style.bottom = (((tWidth / 2) ) + 8).toString() + "px";*/
            
            SujetLegalText.addEventListener("click", ToggleLegal);
        }
    }
    else
    {
        Get("LegalButton").style.display = "NONE";
    }
    
    ShrinkLegal();
    
    Get("LegalText").style.display = "NONE";
    
    Get("ctaText").innerHTML = CTAText1;
    
    if(CTAText2 != "")
    {
        /*Get("CTA").style.height = "5.6%";
        Get("ctaText").innerHTML = CTAText1 + "<br>" + CTAText2;
        Get("DefaultFrameContent").style.bottom = "10.5%";
        */
        Get("ctaTable").style.marginTop = "1.5%";
        Get("ctaText").style.marginBottom = "-4%";
        Get("TdCtaText2").innerHTML = CTAText2;
        Get("ctaPlane").style.width = "2.2em";
        
        Get("TrCtaText1").style.fontSize = "0.7em";
        Get("TrCtaText2").style.fontSize = "0.7em";
        CTAText2 = "";
    }
    else
    {
        ShrinkCtaText();
    }
    
    //if(stoerer)
    //{
        Get("CircleSpan").innerHTML = stoererText;
        stoererShrinkInterval = setInterval(ShrinkStoerer, 50);
    //}
    //else
    //{
    //    Get("Circle").style.display = "NONE";
    //}
    
    // Make Banner visible
    Get("BannerClick").addEventListener("click", Click);
    
    Headline();
    
    if(copy != "")
    { 
        copyInterval = setInterval(PrepareCopy, 50);
    }
    else
    {
        CenterFirstFrame();
        Get("MainElementWhite").className = "animRight clearfix";
        Get("BannerContent").style.opacity = "1";
        //return;
        InitialTimer();
        
    }
    
    if(video)
        Toggler();
}

function ShrinkLegal()
{
    var height = Get("LegalText").clientHeight;
    
    var maxWidth = 200;
    
    var counter = 0;
    
    while(height > 90)
    {
        maxWidth += 15;
        
        Get("LegalText").style.maxWidth = maxWidth + "px";
        
        height = Get("LegalText").clientHeight;
        
        counter ++;
        
        if(counter > 10)
            break;
    }
}

function ShrinkCtaText()
{
    var width = (Get("ctaTable").clientWidth / windowScaleMult);
    //console.log("width: " + width);
    if(width > 95)
    {
        var fontSize = 1;
        
        var isDone = false;
        
        while(isDone == false)   
        {
            fontSize -= 0.05;
            Get("ctaTable").style.fontSize = fontSize.toString() + "em";
            width = (Get("ctaTable").clientWidth / windowScaleMult);
            
            if(width < 95)
            {
                isDone = true;
            }
        }
        //console.log("width: " + width);
        Get("ctaTable").style.marginTop = ((1 / fontSize) * 3).toString() + "%";
    }
}

function CenterFirstFrame()
{
    Get("myContentCenter").style.marginTop = (45 - (Get("myContentCenter").clientHeight / 2)).toString() + "px";
}

function CenterCopy()
{
    Get("copyText").style.marginTop = (45 - (Get("copyText").clientHeight / 2)).toString() + "px";
}

function IsPriceStoerer()
{
    if(price1stoerer || price2stoerer || price3stoerer || price4stoerer || price1xmlstoerer || price2xmlstoerer || price3xmlstoerer || price4xmlstoerer)
    {
        Get("Circle").style.display = "table";
        return true;
    }
       
    return false;
}

var linebreak = false;

function Headline()
{
    var headlineText = Get("headlineText");
    headlineText.innerHTML = headline;
    
    var total = Get("MainElementWhite");
    
    var width = total.clientWidth;
    
    if(width > 255 || (headline == "" && headlineText1 != ""))
    {
        var fontSize = 3;
        var done = false;
        linebreak = false;
        
        if(headline == "" && headlineText1 != "")
        {
            linebreak = true;
            done = true;
        }
        
        while(done == false)   
        {
            fontSize -= 0.1;
            headlineText.style.fontSize = fontSize.toString() + "em";
            var width = total.clientWidth;
            
            if(width <= 255)
            {
                done = true;
            }
            else
            {
                if(fontSize < 1.9 && headlineText1 != "")
                {
                    linebreak = true;
                    done = true;
                }
            }
        }

        if(linebreak)
        {

            fontSize = 3;
            done = false;
            headlineText.style.fontSize = fontSize.toString() + "em";

            headlineText.innerHTML = headlineText1 + "<br>" + headlineText2;
            
            width = total.clientWidth;
            
            if(width > 255)
            {
                 
                while(done == false)   
                {
                    fontSize -= 0.1;
                    headlineText.style.fontSize = fontSize.toString() + "em";
                    var width = total.clientWidth;

                    if(width <= 255)
                    {
                        done = true;
                    }
                }
            }
        }
    }

}

function PrepareCopy()
{
    Get("copyText").style.opacity = "0";
    Get("copyText").style.display = "inline-block";
    Get("copyText").innerHTML = copyText;
    copyHeight = Get("copyText").clientHeight;
    
    CenterCopy();
        
    //var maxHeight = ((((Get("MainElementWhiteInnerHeight").clientHeight / windowScaleMult) - (copyHeight / windowScaleMult)) / bannerHeight) * 100) - 1;
    
    Get("Circle").style.right = (Get("MainElementWhite").clientWidth + 20).toString() + "px";
    Get("SpecialStoerer").style.right = (Get("MainElementWhite").clientWidth + 20).toString() + "px";
    
    //MainElementWhite
    Get("MainElementWhite").style.right = (37 - 20 - Get("copyText").clientWidth).toString() + "px";

    CenterFirstFrame();
    Get("BannerContent").style.opacity = "1";

    clearInterval(copyInterval);
    copyInterval = setInterval(ShowCopy, 2000);
}

var stoererShrinkInterval;

function ShrinkStoerer()
{
    clearInterval(stoererShrinkInterval);
    var width = ((Get("CircleSpan").clientWidth / bannerWidth) / windowScaleMult) * 100;
    //return;
    if(width > 10)
    {
        var fontSize = 1.8;
        
        var isDone = false;
        
        var counter = 0;
        
        while(isDone == false)
        {
            fontSize = fontSize - 0.1;
            
            Get("CircleText").style.fontSize = fontSize + "em";
            
            width = ((Get("CircleSpan").clientWidth / bannerWidth) / windowScaleMult) * 100;

            if(width <= 10)
            {
                isDone = true;
                fontSize = fontSize - 0.1;
                Get("CircleText").style.fontSize = fontSize + "em";                
            }
            
            counter ++;
            
            if(counter >= 20)
                isDone = true;
        }
    }
}

var copyHeight = 0;

var copyInterval;

var copyStoerer = false;

function ShowCopy()
{
    clearInterval(copyInterval);
    Get("copyText").style.opacity = "1";
    
    Get("MainElementWhite").className = "animRight clearfix";
    
    //var maxHeight = ((((Get("MainElementWhiteInnerHeight").clientHeight / windowScaleMult)) / bannerHeight) * 100)+"%";
    
    //Get("copyText").style.display = "inline-block";
    //Get("MainElementWhite").style.maxHeight = maxHeight;
    
    Get("MainElementWhite").style.right = "32px";
    
    if(copy && price == 0 && specialOccasion == false && stoerer)
    {
        if(specialstoerer)
        {
            Get("SpecialStoerer").style.opacity = 1;
        }
        else
        {
            Get("Circle").style.opacity = 1;
            Get("Circle").className += " redStoerer";
        }

        
        copyStoerer = true;
    }
    
    Get("MainWhiteFiller").style.opacity = "1";
    Get("MainWhiteFiller").style.maxWidth = (Get("copyText").clientWidth + 80).toString() + "px";  
    
    //return;
    
    InitialTimer();
}

function CheckContent()
{
    clearInterval(CheckContentInterval);
    
    frames = new Array();
    additionlFrameInfo = new Array();
    
    if(specialOccasion)
    {
        frames.push(specialOccasionText);
        additionlFrameInfo.push("right");
    }
    
    if(price != 0 /*&& destinationName.length != 0*/)
    {
        if(destinationName.length != 0)
        {
            priceCycleIndex = 0;

            for(var p = 0; p < destinationName.length; p++)
            {
                frames.push("PRICEORFALLBACK");
                additionlFrameInfo.push("right");
            }
        }
        else
        {
            frames.push(fallbackText);
            additionlFrameInfo.push("right");
        }
    }
    
    
    var loader = "";
    
    //COOPLOGO
    if(coopselector >= 1)
    {
        frames.push("COOP");
        additionlFrameInfo.push("cl1.jpg");
        
        loader += "<img src='images/cl1.jpg'>";
    }
    
    //COOPLOGO
    if(coopselector == 2)
    {
        frames.push("COOP");
        additionlFrameInfo.push("cl2.jpg");
        loader += "<img src='images/cl2.jpg'>";
    }
    
    Get("ImageLoader").innerHTML = loader;
    
    if(claim == "the charming way to fly")
        claim = "the charming<br>way to fly";
    
    //CLAIM
    frames.push(claim);
    additionlFrameInfo.push("center");
    
    if(first)
    {
        first = false;
        RedBoxSizeTestStart();
    }
}

var first = true;

function RedBoxSizeTestStart()
{
    frameStatus = -1;
    RedBoxSizeTest();
}

function RedBoxSizeTest()
{
    if(frameStatus > frames.length)
    {
        RedBoxSizeTestEnd();
        return;
    }
    else
    {   frameStatus = frameStatus + 1;
        setInterval (50, DoRedBoxSizeTest());
    }
}

var testInterval;

function DoRedBoxSizeTest()
{
    //console.log("DoRedBoxSizeTest: frameStatus: " + frameStatus + " : " + frames[frameStatus]);
    clearInterval(testInterval);
    switch(frames[frameStatus])
    {
        case "PRICEORFALLBACK":
            FillDefaultFrameContent(fallbackText, true, false, true);
        break;
        case "COOP":
            FillDefaultFrameContent("", false, true, true);
        break;
        default:
            FillDefaultFrameContent(frames[frameStatus], false, false, true);
        break;
    }
}

var priceHeightDelta = 0;

function RedBoxSizeTestEnd()
{
    frameStatus = -1;
    priceCycleIndex = 0;
    
    var smallest = 0;
    var heighest = 0;
    
    if(priceHeight.length != 0)
    {
        smallest = priceHeight[0];
        heighest = priceHeight[0];
    }
    
    for(var i = 0; i < priceHeight.length; i++)
    {
        if(priceHeight[i] < smallest)
            smallest = priceHeight[i];
        if(priceHeight[i] > heighest)
            heighest = priceHeight[i];
    }
    
    priceHeightDelta = heighest - smallest;

    priceHeightDelta = 0;
    
    //console.log("maxFrameSize: " + maxFrameSize);
    //console.log("maxFrameSize: " + maxFrameSize);
    
    Get("DefaultFrameContent").style.width = (maxFrameSize - 150).toString() + "px";
}

var hardMute = false;
var videoLoop = true;
function InitVideoPlayer()
{
    var vUrl = "https://cdn-aua.adverserve.net/NAMEDVIDEOS/" + videoname + "_728x90.mp4";
    
    var videoPlayer = Get("VideoPlayer");
    videoPlayer.style.display = "block";
    videoPlayer.src = vUrl;
    
    Get("SoundTogglerOn").addEventListener("click", ToggleSound);
    Get("SoundTogglerOff").addEventListener("click", ToggleSound);
    
    window.onmouseout = function()
    {
    	Mute();	
    }

    window.onmousemove = function()
    {
    	UnMute();
    }
    
    videoPlayer.addEventListener("ended", function () 
    {  
        if(videoLoop)
        {
            videoLoop = false;
            this.play();
        }
        else
        {
            this.currentTime = 4;
            this.pause();
        }
    });
}

var CheckContentInterval;

var initialInterval;
function InitialTimer()
{
    initialInterval = setInterval(CheckFrameStatus, 4000);
    CheckContentInterval = setInterval(CheckContent, 3500);
    //CheckContent();
}

var frameStatus = -1;
function CheckFrameStatus()
{
    if(copy && price == 0 && specialOccasion == false)
    {
        
        Get("Circle").style.opacity = 0;
        Get("SpecialStoerer").style.opacity = 0;
    }
    
    if(initialInterval != null)
        clearInterval(initialInterval);
    
    if(price == 0 && loop >= maxLoops)
    {
        if(copy && specialOccasion == false && stoerer)
        {
            if(specialstoerer == false)
            Get("Circle").style.opacity = 1;
            else
            Get("SpecialStoerer").style.opacity = 1;
        }
        
         return;
    }
    
    if(frameStatus + 1 == frames.length)  
    {
        frameStatus = -1;
        
        Get("MainWhiteFiller").style.backgroundColor = "#ffffff";

        Get("myContent").style.backgroundColor = "#ffffff";
        
        Get("WhiteTurbine").style.opacity = "1";
        //Get("myContent").style.paddingTop = "5%";
        Get("RedTurbine").style.opacity = "0";
        
        Get("CTA").style.opacity = "0";

        Get("myText").style.opacity = "1";
        Get("headlineText").style.opacity = "1";
        Get("copyText").style.opacity = "1";
        
        /*Get("MainElementWhite").style.bottom = "8.5%";*/
        Get("MainElementWhite").style.right = "32px";
    
        Get("MainWhiteFiller").style.maxWidth = "32px";
        
        Get("LufthansaLogo").style.opacity = "0";
        Get("VieLogo").style.opacity = "0";
        Get("StarLogo1").style.opacity = "0";
        Get("StarLogo2").style.opacity = "0";
        
        Get("BorderTop").style.opacity = "1";
        Get("BorderBottom").style.opacity = "1";
        
        loop ++;
       
        if(copy)
        {
            Get("copyText").style.opacity = "0";
            //ar maxHeight = ((((Get("MainElementWhiteInnerHeight").clientHeight / windowScaleMult) - (copyHeight / windowScaleMult)) / bannerHeight) * 100) - 1;
            
            if(price == 0 && specialOccasion == false)
            {
                Get("Circle").style.right = (Get("MainElementWhite").clientWidth + 20).toString() + "px";
                Get("SpecialStoerer").style.right = (Get("MainElementWhite").clientWidth + 20).toString() + "px";
            }
            
            Get("MainElementWhite").style.right = (37 - 20 - Get("copyText").clientWidth).toString() + "px";
            copyInterval = setInterval(ShowCopy, 2000);
        }
        else
            InitialTimer();
        
        return;
    }
        
    
    if(frameStatus == -1)
    {         
        Get("MainWhiteFiller").style.backgroundColor = "#d81e05";
        Get("MainWhiteFiller").style.opacity = "1";

        Get("myContent").style.backgroundColor = "#d81e05";

        Get("RedTurbine").style.opacity = "1";
        Get("WhiteTurbine").style.opacity = "0";
        //Get("myContent").style.paddingTop = "9.36%";
        
        Get("CTA").style.opacity = "1";
        
        Get("myText").style.opacity = "0";
        Get("headlineText").style.opacity = "0";
        Get("copyText").style.opacity = "0";
        
        Get("LufthansaLogo").style.opacity = "1";
        Get("VieLogo").style.opacity = "1";
        Get("StarLogo1").style.opacity = "1";
        Get("StarLogo2").style.opacity = "1";
        
        Get("BorderTop").style.opacity = "0";
        Get("BorderBottom").style.opacity = "0";
    }
    
    switch(frames[frameStatus + 1])
    {
        case "PRICEORFALLBACK":
            FillDefaultFrameContent(fallbackText, true, false, false);
        break;
        case "COOP":
            FillDefaultFrameContent("", false, true, false);
        break;
        default:
            FillDefaultFrameContent(frames[frameStatus + 1], false, false, false);
        break;
    }
    
    frameStatus ++;
}

var priceCycleIndex = 0;

var positionOffsetArray = new Array();
    positionOffsetArray.push("-100%");
    positionOffsetArray.push("-400%");
    positionOffsetArray.push("-700%");
    positionOffsetArray.push("-1000%");


var postionMoverArrayIn = new Array();
    postionMoverArrayIn.push("100%");
    postionMoverArrayIn.push("400%");
    postionMoverArrayIn.push("700%");
    postionMoverArrayIn.push("1000%");

var postionMoverArrayOut = new Array();
    postionMoverArrayOut.push("200%");
    postionMoverArrayOut.push("500%");
    postionMoverArrayOut.push("800%");
    postionMoverArrayOut.push("1100%");

function PriceInfoMeasurement(calc)
{
    /*var priceInfo = Get("priceInfo");
    
    for(var i=0; i<destinationName.length; i++)
    {
        priceCycleIndex = i;
        FillPriceFrame();
        
        var width = ((priceInfo.clientWidth / bannerWidth) / windowScaleMult) * 100;
        
        if(width > 43.8)
        {
            var fontSize = 1;
            var done = false;
            while(done == false)   
            {
                fontSize -= 0.01;
                priceInfo.style.fontSize = fontSize.toString() + "em";
                var width = ((priceInfo.clientWidth / bannerWidth) / windowScaleMult) * 100;

                if(width <= 44.0)
                {
                    done = true;
                }
            }
        }
    }
    */
    priceCycleIndex = 0;
    
    ResetPriceMover();
}

function ResetPriceMover()
{
    Get("PriceMoverOffset").style.left = positionOffsetArray[0];
    Get("PriceMover").style.left = "0%";
}

function FillPriceFrame()
{
    
    var destinationNameElement = Get("DestinationName");
    destinationNameElement.style.fontSize = "0.6em";
    
    Get("starting").innerHTML = starting;
    Get("currency").innerHTML = currency;
    Get("roundtrip").innerHTML = roundtrip;
    
    Get("DestinationNameText").innerHTML = destinationName[priceCycleIndex];
    
    if(showorigin)
    {
        Get("DestinationNameText").innerHTML = destinationOrigin[priceCycleIndex] + " – " + destinationName[priceCycleIndex];
    }
    
    Get("price").innerHTML = destinationPrice[priceCycleIndex];
    
    Get("PriceMoverOffset").style.left = positionOffsetArray[priceCycleIndex];
    
    priceCycleIndex ++;
}

var priceHeight = new Array();

function ShrinkDestinationName(calcSize)
{
    /*var destinationNameElement = Get("DestinationName");
    
    var priceText = Get("DestinationNameText");
    
    var width = ((priceText.clientWidth / bannerWidth) / windowScaleMult) * 100;

    if(width > 44.5)
    {
        var fontSize = 0.6;
        var done = false;
        while(done == false)   
        {
            fontSize -= 0.05;
            destinationNameElement.style.fontSize = fontSize.toString() + "em";
            var width = ((priceText.clientWidth / bannerWidth) / windowScaleMult) * 100;
            
            if(width <= 44.5)
            {
                done = true;
            }
        }
    }
    
    if(calcSize)
        priceHeight.push(priceText.clientHeight);
    */
}

function FillDefaultFrameContent(ContentString, priceFallback, cooplogo, calcSize)
{
    //console.log("ContentString: " + ContentString);
    
    Get("cooplogoimg").src = "";
    
    var cHeighTest = Get("DefaultFrameContent");
    
    if(calcSize == false)
        cHeighTest.style.marginTop = "0px"
    
    if(calcSize == false)
    if(stoerer && (ContentString != claim && cooplogo == false))
    {
        if(specialstoerer == false)
        {
            if(priceFallback && specialOccasion && stoerer && stoereronlyspecialline)
            {
                
            }
            else
            {
                Get("Circle").style.opacity = 1;
                Get("Circle").className += " whiteStoerer";
            }
        }
        else
        {
            Get("SpecialStoerer").style.opacity = 1;
        }
    }
    else
    {   if(priceFallback)
        {
            if(IsPriceStoerer())
            {
                if(destinationStoerer[priceCycleIndex])
                {
                    if(specialstoerer == false)// && stoerer)
                    {
                        Get("Circle").style.opacity = 1;
                        Get("Circle").className += " whiteStoerer";
                    }
                    else
                    {
                        Get("SpecialStoerer").style.opacity = 1;
                    } 
                }
                else
                {
                    Get("Circle").style.opacity = 0;
                    Get("SpecialStoerer").style.opacity = 0;
                }
            }
            else
            {
                Get("Circle").style.opacity = 0;
                Get("SpecialStoerer").style.opacity = 0;
            }
        }
        else
        {
            Get("Circle").style.opacity = 0;
            Get("SpecialStoerer").style.opacity = 0;
        }
    }
    
    
    
    cHeighTest.style.fontSize = "1em";
    
    //cHeighTest.innerHTML = ContentString;
    
    if(priceFallback == false && cooplogo == false)
        {
            Get("textContent").innerHTML = ContentString;
            if(calcSize == false)
            {
                cHeighTest.style.marginTop = GetContentMarginTop(Get("textContent").clientHeight, 0);
            }
        }
    else
         Get("textContent").innerHTML = "";
    
    if(cooplogo == false)
    {
        if(priceFallback == false)
        {
            if(calcSize)
                cHeighTest.style.textAlign = additionlFrameInfo[frameStatus];
            else
                cHeighTest.style.textAlign = additionlFrameInfo[frameStatus + 1];
        }
        else
            cHeighTest.style.textAlign = "right";
    }
    else
        cHeighTest.style.textAlign = "center";
        
    var newHeight;
    
    if(priceFallback == false || cooplogo)
        Get("PriceContainer").style.display = "NONE";
    else
    {
        Get("PriceContainer").style.display = "block";
        
        if(priceCycleIndex == 0)
        {
            PriceInfoMeasurement(calcSize);
            //if(calcSize == false)
                //console.log("checi Price?");
                //cHeighTest.style.marginTop = GetContentMarginTop(Get("PriceContainer").clientHeight, (priceHeightDelta / 2) * -1);
        }
        
        FillPriceFrame();
        ShrinkDestinationName(calcSize);
    }
    
    if(cooplogo)
    {
        Get("cooplogoimg").style.display = "block";
        if(calcSize)
            Get("cooplogoimg").src = "images/" + additionlFrameInfo[frameStatus];
        else
            Get("cooplogoimg").src = "images/" + additionlFrameInfo[frameStatus + 1];
        
        var size = 1;
        
        if(coopLogoHeight != 0)
        {
            size = (mainElementWhiteBottomMax / coopLogoHeight);
            var logoWidth = (size * 100).toString() + "%";
            //Get("cooplogoimg").style.width = logoWidth;
            //Get("cooplogoimg").style.minWidth = logoWidth;
        }
        
        Get("cooplogoimg").onload = function()
        {
            CalcFrameSize(priceFallback, calcSize, true);
            if(calcSize)
                RedBoxSizeTest();
            else
                cHeighTest.style.marginTop = GetContentMarginTop(Get("cooplogoimg").clientHeight);
        };
    }
    else
    {
        Get("cooplogoimg").style.display = "none";
        if(priceFallback)
        {
            //if(priceCycleIndex == 1)
                CalcFrameSize(priceFallback, calcSize, false);
        }
        else
            CalcFrameSize(priceFallback, calcSize, false);
    }
    
    if(calcSize == false)
    if(cooplogo == false)
    {
        if(priceFallback == false)
        {
            TurbineChangeInterval = setInterval(ShowFrameContent, 500);
        }
        else
        {
            Get("DefaultFrameContent").style.opacity = "1";
            TurbineChangeInterval = setInterval(ShowPrice, 500);
        }
    }
    else
    {
        TurbineChangeInterval = setInterval(ShowLogoContent, 500);
    }
    
    if(calcSize && cooplogo == false)
    {
        RedBoxSizeTest();
    }
}
var mainElementWhiteBottomMax = 0;
var coopLogoHeight = 0;
var maxFrameSize = 0;
function CalcFrameSize(priceFallback, calc, coopLogo)
{
    //if(calc)
    //console.log("CalcFrameSize priceFallback: " + priceFallback);
    
    var cHeighTest = Get("DefaultFrameContent");
    var mainElmentWhite =  Get("MainElementWhite");
    
    
    //console.log("mainElmentWhite.clientWidth "+ mainElmentWhite.clientWidth);
    
    var mainElementWhiteRight = 0;
    mainElementWhiteRight = cHeighTest.clientWidth - mainElmentWhite.clientWidth + 20;
    
    /*if(priceFallback)
    {
        //console.log("@@@@@: " + Get("mainPriceTable").clientWidth);
        mainElementWhiteRight = Get("mainPriceTable").clientWidth - mainElmentWhite.clientWidth + 20;
    }*/
    
    if(calc && cHeighTest.clientWidth > maxFrameSize)
    {
        maxFrameSize = cHeighTest.clientWidth + 5;
    }
    
    /*if(calc && priceFallback && (Get("mainPriceTable").clientWidth - mainElmentWhite.clientWidth + 20) > maxFrameSize)
    {
        //console.log("@@@@@: " + Get("mainPriceTable").clientWidth);
        maxFrameSize = Get("mainPriceTable").clientWidth - mainElmentWhite.clientWidth + 20;
    }*/
    
    //console.log("mainElementWhiteRight "+ mainElementWhiteRight);
    if(coopLogo && calc)
    {
        coopLogoHeight = mainElementWhiteRight;
    }
    
    if(mainElementWhiteRight > mainElementWhiteBottomMax && calc)
    {
        if(coopLogo)
        {
            if(price == 0 || destinationName.length == 0)
                mainElementWhiteBottomMax = mainElementWhiteRight;
        }
        else
            mainElementWhiteBottomMax = mainElementWhiteRight;
    }
    
    if(calc == false && coopLogo == false)
    {   //console.log("!!!!! : " + mainElementWhiteBottomMax);
        //Get("MainElementWhite").style.right = (mainElementWhiteBottomMax).toString() + "px";
        Get("MainElementWhite").style.right = (maxFrameSize - Get("MainElementWhite").clientWidth + 20).toString() + "px";
        
        
        Get("MainWhiteFiller").style.maxWidth = (maxFrameSize - 20).toString() + "px";
        if(copyStoerer == false)
        Get("Circle").style.right = (maxFrameSize + 10).toString() + "px";
        Get("SpecialStoerer").style.right = (maxFrameSize + 10).toString() + "px";
        var circleBottom = 0;
        
        /*var totalHeight = Get("MainElementWhite").clientHeight + (mainElementWhiteBottomMax * ((bannerHeight / 100) * windowScaleMult));
        
        circleBottom = ((totalHeight - 18) / 6) / windowScaleMult;
        
        Get("Circle").style.bottom = circleBottom.toString() + "%";*/
    }
    
    /*var cHeighTest = Get("DefaultFrameContent");
    
    var mainElementWhite = Get("MainElementWhite");
    
    var bottom = 8.5;
    if(CTAText2 != "")
        bottom = 10.5;
    
    var top = 5;
    if(priceFallback)
        top = 4.5;
    
    var mainElementWhiteBottom = (((((cHeighTest.clientHeight + (priceHeightDelta / 2)) - mainElementWhite.clientHeight) / windowScaleMult) / bannerHeight) * 100) + bottom + top;
    
    if(coopLogo && calc)
    {
        coopLogoHeight = mainElementWhiteBottom;
    }
    
    if(mainElementWhiteBottom > mainElementWhiteBottomMax && calc)
    {
        if(coopLogo)
        {
            if(price == 0 || destinationName.length == 0)
                mainElementWhiteBottomMax = mainElementWhiteBottom;
        }
        else
            mainElementWhiteBottomMax = mainElementWhiteBottom;
    }
    if(calc == false && coopLogo == false)
    {
        Get("MainElementWhite").style.bottom = (mainElementWhiteBottomMax).toString() + "%";
        Get("MainWhiteFiller").style.maxHeight = (mainElementWhiteBottomMax).toString() + "%";
        //Get("Circle").style.bottom = (((((cHeighTest.clientHeight) / windowScaleMult) / bannerHeight) * 100) + bottom + top - 2.75).toString() + "%";
        var circleBottom = 0;
        var totalHeight = Get("MainElementWhite").clientHeight + (mainElementWhiteBottomMax * ((bannerHeight / 100) * windowScaleMult));
        
        circleBottom = ((totalHeight - 18) / 6) / windowScaleMult;
        
        Get("Circle").style.bottom = circleBottom.toString() + "%";
    }*/
    
    //console.log("mainElementWhiteBottomMax: " + mainElementWhiteBottomMax);
}

function GetContentMarginTop(contentHeight, priceOffset)
{
    return (45 - (contentHeight / 2)).toString() + "px";
    
    /*var totalHeight = Get("MainElementWhite").clientHeight + (mainElementWhiteBottomMax * ((bannerHeight / 100) * windowScaleMult));
    
    totalHeight = totalHeight - 4;
    
    var minHeight = 51 * windowScaleMult;// + 34;
    if(CTAText2 != "")
        minHeight = 62 * windowScaleMult;

    var delta = totalHeight - minHeight;
    
    delta = (delta / 2) - ((contentHeight / 2) / 1);
    
    delta = delta + priceOffset;

    delta = delta / windowScaleMult;

    delta = delta / 3;

    return delta.toString() + "%";
    */
    
    return "0px";
}

var TurbineChangeInterval;
function ShowFrameContent()
{
    clearInterval(TurbineChangeInterval);
    
    Get("DefaultFrameContent").style.opacity = "1";
    
    ContentDelay();
}

function ShowLogoContent()
{
    clearInterval(TurbineChangeInterval);
    
    Get("DefaultFrameContent").style.opacity = "1";
    
    ContentLogoDelay();
}

function ShowPrice()
{
    clearInterval(TurbineChangeInterval);
    
    Get("PriceMover").style.left = postionMoverArrayIn[priceCycleIndex - 1];
    
    PriceContentDelay();
}

var ContentInterval;
function ContentDelay()
{
    if(frames[frameStatus] == fallbackText && price == 2)
    {
        if(loop >= maxLoops)
            return;   
    }
    ContentInterval = setInterval(HideContent, 2500);
}

function ContentLogoDelay()
{
    ContentInterval = setInterval(HideContent, 2500);
}

var firstPrice = true;

function PriceContentDelay()
{
    //return;
    /*if(firstPrice)
        firstPrice = false;
    else
        return;*/
    if(loop >= maxLoops)
        return;
    
    ContentInterval = setInterval(HidePrice, 2500);
}

function HideContent()
{
    clearInterval(ContentInterval);
    
    if(frames[frameStatus] == specialOccasionText && specialOccasion && stoerer && stoereronlyspecialline)
        Get("Circle").style.opacity = 0;
    
    Get("DefaultFrameContent").style.opacity = "0";
    
    TurbineChangeInterval = setInterval(WaitForContentHide, 500);
}

function HidePrice()
{
    clearInterval(ContentInterval);
    
    if(priceCycleIndex < destinationName.length)
        Get("PriceMover").style.left = postionMoverArrayOut[priceCycleIndex - 1];
    else
        Get("DefaultFrameContent").style.opacity = "0";
    
    TurbineChangeInterval = setInterval(WaitForPriceContentHide, 500);
}

function WaitForContentHide()
{
    clearInterval(TurbineChangeInterval);
    
    CheckFrameStatus();
}

function WaitForPriceContentHide()
{
    clearInterval(TurbineChangeInterval);
    
    if(priceCycleIndex < destinationName.length)
    {
        
    }
    else
        ResetPriceMover();
    
    CheckFrameStatus();
}

//DynamicResizeHandler
var windowScaleMult = 1;
function WindowResizeHandler()
{   
    windowScaleMult = window.innerHeight / bannerHeight;
    
    Get("BannerContent").style.width = (bannerWidth * windowScaleMult).toString() + "px";
    Get("BannerContent").style.height = (bannerHeight * windowScaleMult).toString() + "px";
    
    Get("BannerContent").style.fontSize = (10 * windowScaleMult).toString() + "px";
    
    //Get("WhiteTurbine").style.width = (160 * windowScaleMult).toString() + "px";
    //Get("RedTurbine").style.width = (160 * windowScaleMult).toString() + "px";
}

//Click
function Click(e)
{
    if(video && hardMute == false)
        Toggler();
    
    window.open(getUriParams.clicktag,'_blank');
    
    StopPropagation(e);
}

function ToggleLegal(e)
{
    var legal = Get("LegalText");
    
    if(legal.style.display == "block")
        legal.style.display = "NONE";
    else
        legal.style.display = "BLOCK";
 
    StopPropagation(e);
}
//Clicktag
var getUriParams = function ()
{
    var query_string = {};
    var query = window.location.search.substring(1);
    var parmsArray = query.split('&');
    if (parmsArray.length <= 0)
        return query_string;
    for (var i = 0; i < parmsArray.length; i++)
    {
        var pair = parmsArray[i].split('=');
        var val = decodeURIComponent(pair[1]);
        if (val != '' && pair[0] != '')
            query_string[pair[0]] = val;
    }
    return query_string;
}();

function Mute()
{
    Get('VideoPlayer').volume = 0;
}

function UnMute()
{
    if(hardMute == false)
        Get('VideoPlayer').volume = 1;
}

function ToggleSound(e)
{   
    Toggler();
    StopPropagation(e);
}

function Toggler()
{
    if(hardMute)
    {
        hardMute = false;
        Get('SoundTogglerOn').style.display = "block";
        Get('SoundTogglerOff').style.display = "NONE";
    }
    else
    {
        hardMute = true;
        Get('VideoPlayer').volume = 0;
        Get('SoundTogglerOn').style.display = "NONE";
        Get('SoundTogglerOff').style.display = "block";
    }
}

function CloseBanner(e)
{
    //Get('VideoPlayer').pause();
    //hardMute = true;
    if(video && hardMute == false)
        Toggler();
    
    Get("BannerContent").style.display = "NONE";
    
    StopPropagation(e);
}

function StopPropagation(e)
{
    var evt = e ? e:window.event;
    if (evt.stopPropagation)    evt.stopPropagation();
    if (evt.cancelBubble!=null) evt.cancelBubble = true;
}

var notImported = 0;

function PriceObject(origin, dest, price, stoerer)
{
    this.origin = origin;
    this.dest = dest;
    this.price = price;
    this.stoerer = stoerer;
}

function GetPriceStoerer(index)
{
    switch(index)
    {
        case 0:
            if(price == 1)
            {
                if(price1stoerer)
                    return true;
                
                return false;
            }
            else
            {
                if(price1xmlstoerer)
                    return true;
                
                return false;
            }
        break;
        case 1:
            if(price == 1)
            {
                if(price2stoerer)
                    return true;
                
                return false;
            }
            else
            {
                if(price2xmlstoerer)
                    return true;
                
                return false;
            }
        break;
        case 2:
            if(price == 1)
            {
                if(price3stoerer)
                    return true;
                
                return false;
            }
            else
            {
                if(price3xmlstoerer)
                    return true;
                
                return false;
            }
        break;
        case 3:
            if(price == 1)
            {
                if(price4stoerer)
                    return true;
                
                return false;
            }
            else
            {
                if(price4xmlstoerer)
                    return true;
                
                return false;
            }
        break;
    }
}

var destinationStoerer;

xmlDataLoaded = function (xmlDocument)
{
    var data = getXmlChildNodeByName(xmlDocument, "data");

    var destinations = getXmlChildNodeByName(data, "destinations");

    destinationName = new Array();
    destinationOrigin = new Array();
    destinationPrice = new Array();
    
    destinationStoerer = new Array();
    
    var priceObjectList = new Array();
    
    var counter = 0;

    for (var d in destinations.childNodes)
    {
        if (destinations.childNodes[d].nodeName == "destination")
        {
            if(getXmlChildNodeByName(destinations.childNodes[d], "price").textContent == "0")
            {
                notImported ++;
                counter ++;
                continue;
            }
            
            var origin = "";
            var dest = "";
            var price = "";
            var stoerer = GetPriceStoerer(counter);
            
            if(showorigin)
            {
                //destinationOrigin.push(getXmlChildNodeByName(destinations.childNodes[d], "origin").textContent);
                origin = getXmlChildNodeByName(destinations.childNodes[d], "origin").textContent;
            }
            
            dest = getXmlChildNodeByName(destinations.childNodes[d], "name").textContent;
            price = getXmlChildNodeByName(destinations.childNodes[d], "price").textContent;
            
            priceObjectList.push(new PriceObject(origin, dest, price, stoerer));
            counter ++;
            //destinationName.push(getXmlChildNodeByName(destinations.childNodes[d], "name").textContent);
            //destinationPrice.push(getXmlChildNodeByName(destinations.childNodes[d], "price").textContent);
        }
    }
    
    priceObjectList.sort(function(a, b) {
    return ((parseInt(a.price) < parseInt(b.price)) ? -1 : ((parseInt(a.price) == parseInt(b.price)) ? 0 : 1));});
        
    for(var i = 0; i < priceObjectList.length; i++)
    {
        destinationOrigin.push(priceObjectList[i].origin);
        destinationName.push(priceObjectList[i].dest);
        destinationPrice.push(priceObjectList[i].price);
        destinationStoerer.push(priceObjectList[i].stoerer);
    }
}

xmlLoadingError = function ()
{
    xmlError = true;
}

getXmlChildNodeByName = function (xmlParentNode, nodeName)
{
    if (xmlParentNode.childNodes.length == 0)
        throw "no child nodes there";

    for (var i in xmlParentNode.childNodes)
    {
        if (xmlParentNode.childNodes[i].nodeName == nodeName)
        {
            return xmlParentNode.childNodes[i];
        }
    }
    throw "childnode not found";
}

var xmlLoaderClass = function (xmladdress, successHandler, errorHandler)
{
    var base = this;

    //fields
    base.xmlAddress = xmladdress;
    base.successHandler = successHandler;
    base.errorHandler = errorHandler;

    //methods
    base.init = function ()
    {
        var client = new XMLHttpRequest();
        client.onreadystatechange = base.handler;
        client.open("GET", base.xmlAddress);
        client.send();
    }

    base.handler = function ()
    {
        if (this.readyState == this.DONE)
        {
            if (this.status == 200 && this.responseXML != null)
            {
                // success!
                base.successHandler(this.responseXML);
                return;
            }
            // something went wrong
            base.errorHandler();
        }
    }

    //initialization
    base.init();
}

var parseXml;

if (window.DOMParser){
parseXml = function(xmlStr) {
return ( new window.DOMParser() ).parseFromString(xmlStr, "text/xml");
};
} else if (typeof window.ActiveXObject != "undefined" && new window.ActiveXObject("Microsoft.XMLDOM")) {
parseXml = function(xmlStr) {
var xmlDoc = new window.ActiveXObject("Microsoft.XMLDOM");
xmlDoc.async = "false";
xmlDoc.loadXML(xmlStr);
return xmlDoc;
};
} else {
parseXml = function() { return null; }
}

function Get(elementId) {   return document.getElementById(elementId);  }


