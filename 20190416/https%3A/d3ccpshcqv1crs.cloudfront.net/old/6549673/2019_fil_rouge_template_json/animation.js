(function () {
  var targets = document.querySelectorAll('.section');
  var CTA = document.querySelector('.section_3 .CTA');
  var delay = 3330;
  var step = 0;
  var counter = 1;
  var interval;

  function applyClass (classname, target, list) {
    list = list;
    list.forEach(function(element) {
      element.classList.remove(classname);
    });
    target.classList.add(classname);
  };

  function playAnimation () {
    if (counter < 3) {
      applyClass('active', targets[counter], targets);
      counter += 1;
    } else if(counter === 3 && step < 2) {
      applyClass('active', targets[0], targets);
      counter = 1;
      step += 1;
    } else {
      clearInterval(interval);
      CTA.classList.remove('is_animate');

    };
  };

  setTimeout(function () {
    applyClass('active', targets[0], targets);
    CTA.classList.add('is_animate');
  }, 100);

  interval = setInterval(playAnimation, delay);
})();
