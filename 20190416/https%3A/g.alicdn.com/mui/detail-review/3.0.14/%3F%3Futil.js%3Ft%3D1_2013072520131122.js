KISSY.add("mui/detail-review/util",function(e,t,a,r,i){var s={};function n(e){var t,a,r=[],i;return function(s,n){if(n!==0&&!n){n=1}if(n&1&&!a){a=true;e(function(e){t=e;while(i=r.shift()){try{i&&i.apply(null,[t])}catch(e){setTimeout(function(){throw e},0)}}})}if(t!==undefined){s&&s.apply(null,[t]);return t}if(!(n&2)){s&&r.push(s)}return t}}e.mix(s,{hname:location.hostname?location.hostname:"localStatus",isDaily:false,remove:function(e){var r=t.get(e);new a(r,{opacity:0,height:0},.3,"easeOut",function(){t.remove(r)}).run()},mm:function(e,t){this.sendImg("//log.mmstat.com/tmallrate."+e,t)},gm:function(e,t){this.sendImg("//gm.mmstat.com/tmallrate."+e+"?logtype=2",t)},ac:function(e,t){this.sendImg("//ac.mmstat.com/tmallrate."+e+"?logtype=4",t)},sendImg:function(t,a){if(!t)return;a=a||{};if(t.indexOf("?")==-1){t+="?"+e.param(a)}else{t+="&"+e.param(a)}t=t+"&_tm_cache="+e.now();var r=window;var i="jsFeImage_"+e.guid(),s=r[i]=new Image;s.onload=s.onerror=function(){r[i]=null};s.src=t;s=null},lazyLoad:function(a,i,s){r.on(window,"scroll",function(){if(t.scrollTop()>t.offset(t.get(a)).top-Number(i)){e.isFunction(s)&&s();s=function(){}}})},loadImage:function(t,a,r){var i=new Image;i.onload=function(){i.onload=null;e.isFunction(a)&&a(i)};i.onerror=function(){e.isFunction(r)&&r(i);i=i.onload=i.onerror=null};i.src=t},getIsg:function(){return i.get("isg")},onWebComponentToolkit:n(function(t){e.use("review-write/webComponentToolkit/main",function(e,a){t(a)})}),checkEnvironmentAvaliable:function(){if(e.isFunction(t.get("body").createShadowRoot)){if(e.UA.chrome>0&&e.UA.chrome<35.1){return false}return true}else{return false}},initHover:function(){var e=arguments.callee._hover;if(e===undefined){if(e=arguments.callee._hover=!("ontouchstart"in document)){t.addClass("body","enableHover")}else{t.removeClass("body","enableHover")}}return e},fixHover:function(a,i,s){var n=this.initHover(),l=e.UA.ie==6;s=s||"hover";if(!n||l){i=l?"mouse":i||"click";e.each(t.query(a),function(e){if(!n||l&&e.nodeName!="A"){function a(a){t.addClass(e,s)}function o(a){if(i!="touch"&&i!="mouse"&&(a.target==e||t.contains(e,a.target))){return}t.removeClass(e,s)}if(i=="touch"){r.on(e,"touchstart",a);r.on(e,"touchend",o);t.style(e,{WebkitTouchCallout:"none"})}else if(i=="mouse"){r.on(e,"mouseenter",a);r.on(e,"mouseleave",o)}else{r.on(e,"mousedown touchstart",a);r.on(document,"mousedown touchstart",o)}}})}}});return s},{requires:["dom","anim","event","cookie"]});