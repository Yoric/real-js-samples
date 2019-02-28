/*
YUI 3.10.0 (build a03ce0e)
Copyright 2013 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

YUI.add("anim-color",function(e,t){var n=Number;e.Anim.getUpdatedColorValue=function(t,r,i,s,o){return t=e.Color.re_RGB.exec(e.Color.toRGB(t)),r=e.Color.re_RGB.exec(e.Color.toRGB(r)),(!t||t.length<3||!r||r.length<3)&&e.error("invalid from or to passed to color behavior"),"rgb("+[Math.floor(o(i,n(t[1]),n(r[1])-n(t[1]),s)),Math.floor(o(i,n(t[2]),n(r[2])-n(t[2]),s)),Math.floor(o(i,n(t[3]),n(r[3])-n(t[3]),s))].join(", ")+")"},e.Anim.behaviors.color={set:function(t,n,r,i,s,o,u){t._node.setStyle(n,e.Anim.getUpdatedColorValue(r,i,s,o,u))},get:function(e,t){var n=e._node.getComputedStyle(t);return n=n==="transparent"?"rgb(255, 255, 255)":n,n}},e.each(["backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"],function(t){e.Anim.behaviors[t]=e.Anim.behaviors.color})},"3.10.0",{requires:["anim-base"]});
/*
YUI 3.10.0 (build a03ce0e)
Copyright 2013 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

YUI.add("anim-xy",function(e,t){var n=Number;e.Anim.behaviors.xy={set:function(e,t,r,i,s,o,u){e._node.setXY([u(s,n(r[0]),n(i[0])-n(r[0]),o),u(s,n(r[1]),n(i[1])-n(r[1]),o)])},get:function(e){return e._node.getXY()}}},"3.10.0",{requires:["anim-base","node-screen"]});
/*
YUI 3.10.0 (build a03ce0e)
Copyright 2013 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

YUI.add("anim-curve",function(e,t){e.Anim.behaviors.curve={set:function(t,n,r,i,s,o,u){r=r.slice.call(r),i=i.slice.call(i);var a=u(s,0,100,o)/100;i.unshift(r),t._node.setXY(e.Anim.getBezier(i,a))},get:function(e){return e._node.getXY()}},e.Anim.getBezier=function(e,t){var n=e.length,r=[],i,s;for(i=0;i<n;++i)r[i]=[e[i][0],e[i][1]];for(s=1;s<n;++s)for(i=0;i<n-s;++i)r[i][0]=(1-t)*r[i][0]+t*r[parseInt(i+1,10)][0],r[i][1]=(1-t)*r[i][1]+t*r[parseInt(i+1,10)][1];return[r[0][0],r[0][1]]}},"3.10.0",{requires:["anim-xy"]});
/*
YUI 3.10.0 (build a03ce0e)
Copyright 2013 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

YUI.add("anim-node-plugin",function(e,t){var n=function(t){t=t?e.merge(t):{},t.node=t.host,n.superclass.constructor.apply(this,arguments)};n.NAME="nodefx",n.NS="fx",e.extend(n,e.Anim),e.namespace("Plugin"),e.Plugin.NodeFX=n},"3.10.0",{requires:["node-pluginhost","anim-base"]});
/*
YUI 3.10.0 (build a03ce0e)
Copyright 2013 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

YUI.add("anim-scroll",function(e,t){var n=Number;e.Anim.behaviors.scroll={set:function(e,t,r,i,s,o,u){var a=e._node,f=[u(s,n(r[0]),n(i[0])-n(r[0]),o),u(s,n(r[1]),n(i[1])-n(r[1]),o)];f[0]&&a.set("scrollLeft",f[0]),f[1]&&a.set("scrollTop",f[1])},get:function(e){var t=e._node;return[t.get("scrollLeft"),t.get("scrollTop")]}}},"3.10.0",{requires:["anim-base"]});
