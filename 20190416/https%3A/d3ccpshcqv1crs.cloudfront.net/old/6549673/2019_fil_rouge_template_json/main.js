(function () {
  'use strict';
  function populateHtml (object) {
    if(object["taux"]) {
      var split = object["taux"].toString().split(',');
      object["taux_1"] = split[0];
      if (!split[1] || Number(split[1]) == 0) {
        object["taux_2"] = '%';
      } else {
        object["taux_2"] = ',' + split[1].substring(0,2) +'%';
      }
    }

    // Displaying the correct case
    var cases = document.querySelectorAll('.data-class-cas');
    for(var i = 0; i < cases.length; i += 1) {
      if (!cases[i].classList.contains(object['cas'])){
        cases[i].style.display = 'none';
      }
    }

    // Personalization of the banner
    Object.keys(object).forEach(function(key) {
      if (document.querySelector('.data-'+key)) {
        var el = document.querySelectorAll('.data-'+key);
        for(var i = 0; i < el.length; i += 1) {
          el[i].innerHTML = object[key];
        }
      }
    });
  }

  function computeJson (e, debug, params) {

    var target = e.target || e.srcElement;
    var response = target.response;
    var object = JSON.parse(response);

    // If there are some query string parameters for debug/test purposes,
    // override the fixture.json values with the query params value
    var search = location.search.substring(1);
    if(search !== '') {
      search = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')
      Object.keys(search).forEach(function(key) {
        if (!!object[key]){
          object[key] = search[key];
        }
      })
    }

    populateHtml(object);
  }

  function getJson(url) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', computeJson, false);
    xhr.open('GET', url);
    xhr.send();
  }

  getJson('../fixture.json');
})();
