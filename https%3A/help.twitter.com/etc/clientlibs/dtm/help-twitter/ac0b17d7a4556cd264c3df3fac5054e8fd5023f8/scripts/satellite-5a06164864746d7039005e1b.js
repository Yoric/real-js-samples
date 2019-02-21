_satellite.pushAsyncScript(function(event, target, $variables){
  //console.log('fire pageview again');
ga('2d44a78bd2ef2d44806e611ebd9ed76a.send', 'pageview', location.pathname + location.search);
});
