_satellite.pushAsyncScript(function(event, target, $variables){
  (function() {
  var ccLoop = setInterval(function() {
    if (window.cookieconsent) {
      cookieconsent("consent", "Personnalisation", function(accept) {
        switch (accept) {
          case "accept":
            function callRCTag() {

              var aam_uuid = _satellite.getVar('aam_uuid');

              window.bk_async = function() {
                bk_allow_multiple_calls = true;
                bk_addPageCtx('website', 'tf1.fr');
                bk_addPageCtx('tf1Id', aam_uuid);
                BKTAG.doTag(53554, 4);
              };
              (function() {
                var scripts = document.getElementsByTagName('script')[0];
                var s = document.createElement('script');
                s.async = true;
                s.src = "https://tags.bkrtx.com/js/bk-coretag.js";
                scripts.parentNode.insertBefore(s, scripts);
              }());
            }

            var r = document.referrer;
            var pos = r.indexOf("lci.fr");
            if (pos != -1) {
              callRCTag();
            } else {
              var t = setTimeout(callRCTag, 1000);
            }
            clearInterval(ccLoop);
            break;
          case "refuse":
            clearInterval(ccLoop);
            break;
        }
      });
    };
  }, 1000);
})();
});
