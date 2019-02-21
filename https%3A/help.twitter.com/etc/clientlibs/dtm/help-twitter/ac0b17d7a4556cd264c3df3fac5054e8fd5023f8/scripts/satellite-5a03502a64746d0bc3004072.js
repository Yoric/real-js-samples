_satellite.pushAsyncScript(function(event, target, $variables){
  trackPercentScroll(10);
trackPercentScroll(50);
trackPercentScroll(80);

function trackPercentScroll(percentage) {
  document.getElementsByTagName('body')[0].addEventListener('scroll' + percentage, function() { 
    var ellapsed = Date.now() - performance.timing.domComplete;
    _satellite.notify('reached '+ percentage + '% scroll in ' + ellapsed + ' milliseconds', 1);
    ga('2d44a78bd2ef2d44806e611ebd9ed76a.send', 'timing', 'Scroll', 'Scroll ' + percentage, ellapsed);                                                                                 
  });
}
});
