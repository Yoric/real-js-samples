_satellite.pushAsyncScript(function(event, target, $variables){
  var el = document.createElement('script');
el.src = "https://cdn.optimizely.com/js/6196662984.js"
var firstScript = document.getElementsByTagName('script')[0];
firstScript.parentNode.insertBefore(el, firstScript);
});
