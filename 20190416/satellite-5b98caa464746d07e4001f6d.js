_satellite.pushAsyncScript(function(event, target, $variables){
  (function() {
  var ccLoop = setInterval(function() {
    if (window.cookieconsent) {
      cookieconsent("consent", "Personnalisation", function(accept) {
        switch (accept) {
          case "accept":
            /*<!-- mediarithmics - home view -->
            <script type="text/javascript">*/
            /* YOU SHOULD NOT EDIT THIS PART */
            !function(a,b,c){"use strict";function d(a){var b=e[c]||{};e[c]=b,b[a]||(b[a]=function(){e._queue[c].push({method:a,args:Array.prototype.slice.apply(arguments)})})}var e=a.scimhtiraidem||{},f="init call config push pushDefault addProperties addProperty onFinish onStart _reset".split(" ");e._queue=e._queue||{},e._names=e._names||[],e._names.push(c),e._queue[c]=e._queue[c]||[],e._startTime=(new Date).getTime(),e._snippetVersion="2.0";for(var g=0;g<f.length;g++)d(f[g]);a.scimhtiraidem=e,a[c]=e[c];var h=b.createElement("script");h.setAttribute("type","text/javascript"),h.setAttribute("src","//static.mediarithmics.com/tag/1/tag.min.js"),h.setAttribute("async","true"),b.getElementsByTagName("script")[0].parentNode.appendChild(h)}(window,document,"mics");

            /* CUSTOMIZE THE TAG CALL BELOW */
            var TF1_ADOBE_ID = _satellite.getVar('aam_uuid');
            mics.config({domain_name:"analytics.3wregie.eu"})
            mics.init("lci_18");
            mics.addProperty("tf1_id", TF1_ADOBE_ID );
            mics.push("page_view");
            /*</script>*/
            
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
