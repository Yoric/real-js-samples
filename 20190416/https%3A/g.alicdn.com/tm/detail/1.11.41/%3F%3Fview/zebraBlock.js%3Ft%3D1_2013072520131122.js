KISSY.add("malldetail/view/zebraBlock",function(e){return{"initView":function(t,a,i,n){var o=this;o.init(e.mix({"el":t},a)),n(o)},"init":function(t){codeTrack("mod.zebraBlock.init","view.main.init",{"group":t.zebraId}),TShop.addLazyCallback(t.el,function(){var a="root"==t.base?"//fragment.tmall.com/":"//fragment.tmall.com/malldetail/";t.zebraId=0==t.zebraId.indexOf("/")?t.zebraId.substr(1):t.zebraId,a=a+t.zebraId+"?wh_callback=true",a+=t.catId?"&wh_cat="+t.catId:"",window[t.zebraId]=function(a){a&&e.use("dom,event",function(e,i,n){a.append?i.append(i.create(a.append),t.el):a.dom&&i.html(a.dom,html),codeTrack("mod.zebraBlock.show","mod.zebraBlock.init",{"group":t.zebraId})})},e.getScript(a,{"success":function(){},"error":function(){codeTrack("mod.zebraBlock.dataError","mod.zebraBlock.init",{"group":t.zebraId})}})})}}});