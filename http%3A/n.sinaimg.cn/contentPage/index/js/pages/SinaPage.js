var SinaPage=function(e,t){var n=e=e||{},r="1.0";n.widgets=[],n.loadedUrl={};if(window.SinaPage&&window.SinaPage.version>n.version)return;return n.utils={getFileType:function(e){var n=t.trim(e.toString()),r="",i=n.lastIndexOf(".");return r=n.substring(i+1),"js"},generateUUID:function(){var e=(new Date).getTime(),t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var n=(e+Math.random()*16)%16|0;return e=Math.floor(e/16),(t=="x"?n:n&3|8).toString(16)});return t},appendScript:function(e){var t=document.createElement("script");t.type="text/javascript",t.sync="async",e.charset&&(t.charset=e.charset),t.onreadystatechange=t.onload=function(){if(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")e.callback&&e.callback(),t.onreadystatechange=t.onload=null,t.parentNode.removeChild(t)},t.src=e.url;var n=document.getElementsByTagName("head")[0];n.insertBefore(t,n.firstChild)}},n.version=r,e}(SinaPage||{},window.jQuery||{});window.SinaPage=SinaPage,function(e,t){var n=e=e||{};return n.config={triggerDistance:300,apis:{}},e}(SinaPage||{},window.jQuery||{}),function(e,t){function r(e){var n={require:[],trigger:{},triggerAhead:!0,onBeforeLoad:function(e){},onAfterLoad:function(e){}};this.options=t.extend(n,e),this.status="start",this.init()}var n=e=e||{};return r.prototype={checkRequire:function(){function o(r){for(var i=0;i<r.length;i++)t.isArray(r[i])?o(r[i]):n.utils.getFileType(r[i].url)!="js"&&(e=!1)}var e=!0,r=this,i=r.options,s=i.require;return o(s),e},formatTrigger:function(){var e=this,n=e.options,r=n.trigger,i=r.height||0,s=r.delay||0,o=r.id||"",u=t("#"+o),a=u.length==0?0:u.offset().top;n.trigger.height=Math.max(i,a),n.delay=s},loadRequire:function(){function i(s){var o=r.require[s];if(t.isArray(o)){var u=o.length-1;for(var a=0;a<o.length;a++){var f=o[a],l=o[a].url;n.loadedUrl[l]!=1?n.utils.appendScript({url:l,charset:f.charset,callback:function(){n.loadedUrl[l]=1;if(u!=0)u-=1;else if(s==r.require.length-1){e.status="loaded";try{r.onAfterLoad.call(e)}catch(t){console.log(t)}}else i(s+1)}}):u-=1}}else if(n.loadedUrl[o.url]!=1)n.utils.appendScript({url:o.url,charset:o.charset,callback:function(){n.loadedUrl[o.url]=1;if(s==r.require.length-1){e.status="loaded";try{r.onAfterLoad.call(e)}catch(t){console.log(t)}}else i(s+1)}});else if(s!=r.require.length-1)i(s+1);else{e.status="loaded";try{r.onAfterLoad.call(e)}catch(c){console.log(c)}}}var e=this,r=e.options;i(0)},onTrigger:function(){var e=this,t=e.options;if(e.status!="start")return;n.widgets.push(e),e.status="loading",typeof (t.onBeforeLoad=="function")&&t.onBeforeLoad.call(e);if(t.require.length!=0)e.loadRequire();else{e.status="loaded";try{t.onAfterLoad.call(e)}catch(r){console.log(r)}}},init:function(){var e=this,r=e.options,i,s=0;e.checkRequire()&&(e.formatTrigger(),i=e.options.trigger,r.triggerAhead?s=i.height-n.config.triggerDistance>0?i.height-n.config.triggerDistance:i.height:s=i.height,i.height==0?t(document).ready(function(){i.delay==0?e.onTrigger():setTimeout(function(){e.onTrigger()},i.delay)}):i.height-t(window).scrollTop()<n.config.triggerDistance?e.onTrigger():t(window).on("scroll",function(){var n=t(window).scrollTop();if(n>s||n==s)i.delay==0?e.onTrigger():setTimeout(function(){e.onTrigger()},i.delay)}))}},n.loadWidget=function(e){var t=new r(e)},e}(SinaPage||{},window.jQuery||{}),function(e,t){var n=e=e||{};return e}(SinaPage||{},window.jQuery||{}),define("pages/SinaPage",function(){});