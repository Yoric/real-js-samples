
(function() {
    var mob = 0;
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        mob = 1;
    }
    var timestamp = new Date().getTime();
    var randcallback = Math.floor((Math.random() * 9999999) + 1);
    var JSONP=(function(){var a=randcallback,c,f,b,d=this;function e(j){var i=document.createElement("script"),h=false;i.src=j;i.async=true;i.onload=i.onreadystatechange=function(){if(!h&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){h=true;i.onload=i.onreadystatechange=null;if(i&&i.parentNode){i.parentNode.removeChild(i)}}};if(!c){c=document.getElementsByTagName("head")[0]}c.appendChild(i)}function g(h,j,k){f="?";j=j||{};for(b in j){if(j.hasOwnProperty(b)){f+=encodeURIComponent(b)+"="+encodeURIComponent(j[b])+"&"}}var i="json"+(++a);d[i]=function(l){k(l);try{delete d[i]}catch(m){}d[i]=null;};e(h+f+"callback="+i);return i}return{get:g}}());
    JSONP.get('https://ua.traffim.com/draw', {id:'1555',mob: mob, time:timestamp}, function(data){
        if(document.getElementById('traffim-widget-1555') === null) {
            document.getElementById('newsriver-widget-1555').innerHTML =   data;
        } else {
            document.getElementById('traffim-widget-1555').innerHTML =   data;
        }
    });
})();