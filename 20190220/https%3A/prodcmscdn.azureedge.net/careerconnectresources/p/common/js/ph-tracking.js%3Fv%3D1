(function () {
    var script = document.createElement("script")
    script.type = "text/javascript";
    script.async = !0;
    script.src = "undefined" !== typeof PHENOMTRACK_URL ? PHENOMTRACK_URL : "file:" === document.location.protocol && "//"+phApp.phenomTrackURL.match(/^\/\//) ? "https://"+phApp.phenomTrackURL : "//"+phApp.phenomTrackURL;
    var p = document.getElementsByTagName("head")[0];
    p.parentNode.insertBefore(script, p)
    script.onload = function (){
         phenomevent.init(phApp.refNum)
    }
})();