(function(window,$){$(document).ready(function(){mug.common.nilSendCv();});$(window).load(function(){var url=location.href;if(url.indexOf("postView")<0||window.__templateType__==null){return;}if(__templateType__==mug.viewer.templateType.UGC_SIMPLE||__templateType__==mug.viewer.templateType.UGC_CARD){$(".se_subjectMatter").click(function(oEvent){mug.common.nilSendClickEvent(oEvent.target,this.parentNode.querySelectorAll(".se_subjectMatter")[0],"__se_material_title");});}else{$(".og.post_add").click(function(oEvent){var elCurrent=this.parentNode.querySelectorAll(".og")[0];if($(elCurrent).hasClass("post_add_product")){mug.common.nilSendClickEvent(oEvent.target,elCurrent,"tit2");}else{mug.common.nilSendClickEvent(oEvent.target,elCurrent,"tit");}});}});$(window).unload(function(){nil.send("leave");});})(window,jQuery);