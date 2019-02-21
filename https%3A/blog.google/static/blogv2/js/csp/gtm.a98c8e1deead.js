(function(){
  var metas = document.getElementsByTagName('meta'),
      curr_time = new Date().getTime();
  for (var m of metas) {
    if (m.hasAttribute('property') && m.getAttribute('property') === "gtm-tag") {
      var gtm_tag = m.getAttribute("content");
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':curr_time,event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer',gtm_tag);
    }
  }
}());
