define(["OK/logger","OK/utils/utils"],function(c,b){var f="GoSearch",d,g=document.getElementById("hook_Cfg_CurrentUser"),a=g?OK.util.parseJSON(g.innerHTML):null;function e(o){var m=this.getAttribute("data-gid"),q=this.getAttribute("data-query"),h=this.getAttribute("data-state"),p=this.getAttribute("data-tip"),n={"st.cmd":h},i=this.getAttribute("data-url"),k,l,j;if(q){n.query=q;if(m){n["st.groupId"]=m;}if(d){d.xhr.abort();}d=b.ajax({url:"/",data:n}).fail(function(){c.success(f,"fail");}).done(function(s,r,t){b.updateBlockModelCallback(s,r,t);l=parseInt(t.getResponseHeader("X-ScT")||"0",10);if(isNaN(l)){l=0;}window.scrollTo(0,l);if(i){OK.historyManager.pushState(i);}if(p){OK.hookModel.setHookContent("TipBlock","");}});k=OK.hookModel.getNearestBlockHookId(this);c.success(f,"query",h+(k?"_"+k:""));if(a&&a.uid){j=~~((a.uid%256)/64);c.success(f,"query."+j,h+(k?"_"+k:""));if(p){c.success(f,"tip."+p+"."+j,h+(k?"_"+k:""));}}o.preventDefault();}}return{activate:function(h){h.addEventListener("click",e);}};});