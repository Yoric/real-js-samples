function ModalViewModel(b){for(var a in b.modal){this[b.modal[a].modal_visible]=ko.observable(false);if(b.modal[a].radio_checked){this[b.modal[a].radio_checked]=ko.observable("")}}if(b.init_modal_visible instanceof Array){for(var a in b.init_modal_visible){if("#"+b.init_modal_visible[a]["type"]==location.hash){this[b.init_modal_visible[a]["modal"]]=ko.observable(true);break}}}else{this[b.init_modal_visible]=ko.observable(true)}this.reset=function(d){for(var c in b.modal){this[b.modal[c].modal_visible](false);if(b.modal[c].radio_checked){this[b.modal[c].radio_checked]("")}}if(b.init_modal_visible instanceof Array){for(var c in b.init_modal_visible){if(b.init_modal_visible[c]["type"]==d){this[b.init_modal_visible[c]["modal"]](true);break}}}else{this[b.init_modal_visible](true)}};$("cn").html(b.campaign_name);if(b.service_name){$("sn").html(b.service_name)}$("a.request,a.backBtn,a.closeBtn,input:radio").click(function(){if($(this).attr("slk")&&$(this).parents("div.modalWindow").attr("id")){var f=$(this).parents("div.modalWindow").attr("id");var d=$(this).attr("slk");var c=99;var e=[{sec:f,_links:[{slk:d,_p:c}]}];b.ins.beaconLinkViews(e);setTimeout(function(){b.ins.beaconClick(f,d,c)},100)}else{console.log("id or slk not set")}});this.next=function(m,d){try{for(var g in b.modal){var n=b.modal[g];if(this[n.modal_visible]()){this[n.modal_visible](false);this[n.radio_checked](d.target.value);var k=b.next[n.modal_visible][this[n.radio_checked]()];var l=b.modal[k];if(!b.modal[k]){throw new Error("next modal do not exist : "+k)}this[l.modal_visible](true);if(l.radio_checked){this[l.radio_checked]("")}if(l.confirm&&l.confirm==="1"){search:for(var g=0;g<b.apply_url.length;g++){for(var f in b.apply_url[g].condition){var c=b.apply_url[g].condition[f];if(c!=this[b.modal[f]["radio_checked"]]()){break}if(f==Object.keys(b.apply_url[g].condition)[Object.keys(b.apply_url[g].condition).length-1]){$("a.request").attr("href",b.apply_url[g].url);break search}}}}break}}}catch(h){console.log(h)}};this.back=function(){for(var e in b.modal){var d=b.modal[e];if(this[d.modal_visible]()){this[d.modal_visible](false);var c=b.back[d.modal_visible];var f=b.modal[c];this[f.modal_visible](true);if(f.radio_checked){this[f.radio_checked]("")}break}}}};