__cjsload("ea",'\'use strict\';function a(b){b=f(b);return new g(b[0],b[1])}var b=d,c=fh,e=jd,f=Rg,g=R,h=rd,q=null,n=0,O=!1,u=!1;(function(){b.addDomListener(window,"mousedown",function(){O=!0});b.addDomListener(window,"mouseup",function(){O=!1})})();U.$setExports(function(d,f){function g(a,c,d,f){d.listener&&w(a,c,d);d.listener="mousewheel"===c?e(a,d):b.addDomListener(a,c,d,f)}function w(a,c,d){d.listener&&(b.removeListener(d.listener),delete d.listener)}function G(){aa&&(w(window,"mouseup",R,!0),w(window,"mousemove",v,!0),aa=!1)}function y(c){var e=a(c);if(2==c.button)ga=e;else{H=!0;oa=b.exist(d,"dragstart")||b.exist(d,"dragging")||b.exist(d,"dragend");T=Q=e;h();I("mousedown",c);if(oa&&(!q||q===L))q=L,ja=0,aa||(g(window,"mouseup",R,!0),g(window,"mousemove",v,!0),aa=!0);u=!1}}function D(a){2!==a.button&&(2!==ja&&(ja=-1),H=!1,I("mouseup",a))}function R(a){1==ja&&(ja=2,I("dragend",a));q=null;G()}function U(c){var e=a(c);Q&&2>e.distanceTo(Q)||(Q=e,b.exist(d,"mousemove")&&I("mousemove",c))}function v(b){var c=a(b),d=!1;0===ja&&0<c.distanceTo(T)&&(ja=1,d=u=!0,I("dragstart",b));1===ja&&(d=c.minus(d?T:Q),b.delta=d,I("dragging",b,d));Q=c}function fa(a){I("mouseover",a,H,O);var b=a.target,d=a.relatedTarget;if(!va&&(L===b||c(L,b))&&!(L===d||c(L,d)))va=!0,I("mouseenter",a,H,O)}function Fa(a){I("mouseout",a,H,O);var b=a.target,d=a.relatedTarget;if(va&&(L===b||c(L,b))&&!(L===d||c(L,d)))va=!1,I("mouseleave",a,H,O)}function E(b){if(!u){var c=h();300<c-na&&(da=0,na=c,B=a(b));da++;H=!1;1<da&&2>B.distanceTo(a(b))?(I("dblclick",b),da=0):I("click",b)}}function N(a){I("mousewheel",a)}function ca(c){var e=a(c);b.exist(d,"rightclick")&&ga&&2>=e.distanceTo(ga)&&(c.preventDefault(),I("rightclick",c))}function I(c,e){for(var f=[d,c,e,a(e)],g=2,h=null;h=arguments[g++];)f.push(h);b.trigger.apply(b,f)}function V(){d.get("tracking")?Ha||(g(L,"mouseover",fa),g(L,"mouseout",Fa),g(L,"mousedown",y),g(L,"mouseup",D),g(L,"mousemove",U),g(L,"click",E),g(L,"mousewheel",N),g(L,"contextmenu",ca),Ha=!0):Ha&&(w(L,"mouseover",fa),w(L,"mouseout",Fa),w(L,"mousedown",y),w(L,"mouseup",D),w(L,"mousemove",U),w(L,"click",E),w(L,"mousewheel",N),w(L,"contextmenu",ca),G(),Ha=!1)}n++;var L=f,Ha=!1,aa=!1,H=!1,va=!1,oa=!1,ja=-1,Q=null,ga=null,T=null,na=0,da=0,B=null;b.addListener(d,"tracking_changed",V);V()})');
