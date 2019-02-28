(function() {
var needFix = navigator.userAgent.toLowerCase().indexOf('webkit') > -1,
	d = document;
if (!needFix || !d.querySelectorAll) return;
var toArray = function(list){var armap=[],i=0;for(;i<list.length;++i){armap.push(list[i])};return Array.prototype.slice.call(armap, 0)}
window.addEventListener('load', function() {
	toArray(d.querySelectorAll('a.skip, .skip a')).forEach(function(el) {
		el.addEventListener('click', function() {
			var target = d.getElementById(this.href.split('#')[1]),
				oldTabIndex = target.getAttribute('tabindex'),
				oldOutlineWidth = d.defaultView.getComputedStyle(target, null).getPropertyValue('outline-width');
			target.setAttribute('tabindex', 0);
			target.style.outlineWidth = 0;
			target.focus();
			if (oldTabIndex === null)
				target.removeAttribute('tabindex');
			else
				target.setAttribute('tabindex', oldTabIndex);
		}, false);
	});
}, false);
})();