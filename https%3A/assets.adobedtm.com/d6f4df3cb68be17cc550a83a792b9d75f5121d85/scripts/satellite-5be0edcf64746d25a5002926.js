_satellite.pushAsyncScript(function(event, target, $variables){
  if (!window.clickTaleTagInjected) {
        ! function(d, t, u) {
            clickTaleTagInjected = true;
            function injectTag() {
                var ns = d.createElementNS;
                var a = ns ? ns.call(d, "http://www.w3.org/1999/xhtml", t) : d.createElement(t),
                    s = d.getElementsByTagName(t)[0];
                a.async = true;
                a.crossOrigin = "anonymous";
                a.type = "text/javascript";
                a.src = u;
                s.parentNode.insertBefore(a, s);
            }
            if (d.readyState != 'loading') {
                injectTag();
            } else {
                d.addEventListener('DOMContentLoaded', function() {
                    setTimeout(injectTag, 0)
                });
            }
        }(document, 'script', 'https://cdnssl.clicktale.net/www32/ptc/8c153356-f544-44b5-b1b7-a963cc6d4b33.js');
    }
});
