_satellite.pushAsyncScript(function(event, target, $variables){
  var t = window.tagging;
(function (td, tu, $) {
    try {
        //*****Lineage tracking Configurations******

        //Main Content Selector
        var main_sel = "main, [role=main], .digitalTransformation, .BodyContainer";
        //Section Selector, this will select using the below selector, plus div[data-grid=container]/sections (unless they are excluded in a diffrent variable)
        var sec_custom_sel = ".ctex-drawer-wrapper, [role=region]";
        //Group Selector
        var grp_custom_sel = ".c-feature, .m-hero-item, .m-banner";
        //Column Selector
        var pnl_custom_sel = ".hero-max-small-text, .m-content-placement-item";
        //Exclude Section Selector - In case explicitely implemented in Custom Script
        var exclude_sec_sel = "";

        td.addDeploymentInfo("edu_jsll_lineage_tracking_divs", "2017nov");

        /* Lineage tracking generic script - DO NOT CHANGE */
        var mainDiv = jQuery(main_sel);

        var sec;
        var grp, pnl;
        var grp_sel;
        var pnl_sel;
        var idx_s = 1,
            idx_g, idx_p, idx_p_g;

        var jqThis;
        tu.getLineageName = function (elem, def) {
            return elem.attr("data-lineage-name") || elem.attr("data-productid") || elem.attr("data-vg") || elem.attr("id") || elem.attr("data-bi-id") || def;
        };
        var setLineageGroup = function (elem, sec) {
            grp = "m" + idx_g + sec;
            elem.attr("data-bi-id", grp);
            if (!elem.attr("data-bi-name")) {
                elem.attr("data-bi-name", tu.getLineageName(elem) || elem.attr("data-bi-id"));
            }
            pnl_sel = "DIV,SECTION" + pnl_custom_sel;
            idx_p = 1;
            elem.children(pnl_sel).each(function (group) {
                return function () {
                    setLineagePanel(jQuery(this), group);
                };
            }(grp));
            idx_g++;
        };
        var setLineagePanel = function (elem, group) {
            if (elem.is("[data-grid='col-12 stack-2']") || elem.is("[data-grid='col-12 stack-3']")) {
                idx_p_g = 1;
                jQuery("[data-grid*='col'] [data-grid*='col']", elem).each(function () {
                    pnl = "c" + idx_p_g + group;
                    jQuery(this).attr("data-bi-id", pnl);
                    if (!jQuery(this).attr("data-bi-name") && (tu.getLineageName(jQuery(this)))) {
                        jQuery(this).attr("data-bi-name", tu.getLineageName(jQuery(this)));
                    }
                    setLineageSubPanel(jQuery(this), pnl);
                    idx_p_g++;
                });
            } else if (elem.is("[data-grid='col-12 pad-6x stack-2']") || elem.is("[data-grid='col-12 pad-12x stack-3']") ||
                elem.is("[data-grid='col-12 stack-3 pad-12x']") || elem.is("[data-grid='col-12 pad-12x stack-2']") ||
                elem.is("[data-grid='col-12 stack-2 pad-12x']")) {
                idx_p_g = 1;
                jQuery("[data-grid*=col-4], [data-grid*=col-5], [data-grid*=col-6], [data-grid*=col-7], [data-grid*=col-8]", elem).each(function () {
                    pnl = "c" + idx_p_g + group;
                    jQuery(this).attr("data-bi-id", pnl);
                    if (!jQuery(this).attr("data-bi-name") && (tu.getLineageName(jQuery(this)))) {
                        jQuery(this).attr("data-bi-name", tu.getLineageName(jQuery(this)));
                    }
                    setLineageSubPanel(jQuery(this), pnl);
                    idx_p_g++;
                });
            } else if (jQuery(".ctex-drawer", elem).length > 0) {
                idx_p_g = 1;
                jQuery(".ctex-drawer", elem).each(function () {
                    pnl = "c" + idx_p_g + group;
                    jQuery(this).attr("data-bi-id", pnl);
                    if (!jQuery(this).attr("data-bi-name") && (tu.getLineageName(jQuery(this)))) {
                        jQuery(this).attr("data-bi-name", tu.getLineageName(jQuery(this)));
                    }
                    setLineageSubPanel(jQuery(this), pnl);
                    idx_p_g++;
                });
            } else {
                pnl = "c" + idx_p + group;
                elem.attr("data-bi-id", pnl);
                if (!elem.attr("data-bi-name") && (tu.getLineageName(elem))) {
                    elem.attr("data-bi-name", tu.getLineageName(elem));
                }
                idx_p++;
            }
        };
        var setLineageSubPanel = function (elem, pnl) {
            var i = 1;
            var newPnl;
            elem.children("DIV,SECTION,UL,LI").each(function (pnl) {
                return function () {
                    newPnl = pnl;
                    jqThis = jQuery(this);
                    if (!jqThis.attr("data-bi-name") && (tu.getLineageName(jqThis))) {
                        jqThis.attr("data-bi-name", tu.getLineageName(jqThis));
                        if (!jqThis.attr("data-bi-id")) {
                            newPnl = "c" + i + pnl;
                            jqThis.attr("data-bi-id", newPnl);
                        } else {
                            newPnl = jqThis.attr("data-bi-id");
                        }
                    }
                    setLineageSubPanel(jqThis, newPnl);
                    i++;
                };
            }(pnl));
        };
        var z_id = "a3";
        var t_sel = "";

        jQuery(main_sel).attr("data-bi-id", z_id + "Body");
        jQuery(main_sel).attr("data-bi-name", tu.getLineageName(jQuery(main_sel), "mainContent"));

        jQuery(mainDiv).find("[data-lineage-name]:not([data-bi-name])").each(function () {
            jQuery(this).attr("data-bi-name", jQuery(this).attr("data-lineage-name"));
        });

        sec_custom_sel = (sec_custom_sel.length > 0 ? "," : "") + sec_custom_sel;
        grp_custom_sel = (grp_custom_sel.length > 0 ? "," : "") + grp_custom_sel;
        pnl_custom_sel = (pnl_custom_sel.length > 0 ? "," : "") + pnl_custom_sel;
        sec_selector = (exclude_sec_sel.length > 0 ?
            "section:not(" + exclude_sec_sel + "),DIV[data-grid*=container]:not(" + exclude_sec_sel + ")" :
            "section,DIV[data-grid*=container]") + sec_custom_sel;
        jQuery(main_sel).children(sec_selector).each(function () {
            selElem = jQuery(this);
            sec = "r" + idx_s + z_id;
            selElem.attr("data-bi-id", sec);
            //selElem.attr("data-bi-area",z_id);
            if (!selElem.attr("data-bi-name")) {
                selElem.attr("data-bi-name", tu.getLineageName(selElem, "undefined"));
            }

            grp_sel = "[data-grid*=col-12], [data-grid*=col-10], [data-grid*=container], .c-pivot" + grp_custom_sel;
            idx_g = 1;
            selElem.children(grp_sel, this).each(function () {
                setLineageGroup(jQuery(this), sec);
            });
            idx_s++;
        });
    } catch (error) {
        console.error(error);
    }
}(t.data, t.util, window.jQuery));
});
