_satellite.pushAsyncScript(function(event, target, $variables){
  var htc = htc || {};
htc.events = [];
htc.eventPrefix = 'scroll'; 
htc.eventScrollMax = 0;
window.addEventListener(htc.eventPrefix, getScrollPercent);
function getScrollPercent() {
    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    var progressValue = ((h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100);
    var progressValueFloor = Math.floor(progressValue);

	
	//Fire off scrollStart
	{
		var eventName = htc.eventPrefix + "Start";
		if (htc.events.indexOf(eventName) < 0) {
		
			var event = new Event(eventName);
			document.getElementsByTagName('body')[0].dispatchEvent(event);
			htc.events.push(eventName);
			_satellite.notify(eventName, 1);
		}
	}
  	//Fire off events every 10% of scroll
	{
		var roundedValue = Math.round(progressValueFloor/10)*10
		var eventName = htc.eventPrefix + roundedValue;
		if (htc.events.indexOf(eventName) < 0) {
			//only fire events when the scrolling is downwards
			if (progressValueFloor > htc.eventScrollMax) {
				var event = new Event(eventName);
				document.getElementsByTagName('body')[0].dispatchEvent(event);
				_satellite.notify(eventName, 1);
				htc.events.push(eventName);
				htc.eventScrollMax = progressValueFloor;
			}
		}
  	}
  return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
}


});
