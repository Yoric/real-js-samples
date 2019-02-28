_satellite.pushAsyncScript(function(event, target, $variables){
  //DoubleClick-Floodlight; End:June 30, 2018

var tagData = window.tagging.data;

Cortex.Tracking.Apply(Cortex.Tracking.Type.DoubleclickFloodlight, Cortex.Tracking.Action.PageLoad,
    "6952136", tagData.langLoc, ["en-ca"], null, null, {
        type: "btl",
        cat: "btl_a0",
        u1: tagData.loc,
        u2: tagData.langLoc,
        u5: window.location.toString(),
        u6: tagData.pageName,
        u25: "",
        u26: "",
        u52: "pageload"
    });

Cortex.Tracking.Apply(Cortex.Tracking.Type.DoubleclickFloodlight, Cortex.Tracking.Action.Click,
    "6952136", tagData.langLoc, ["en-ca"], "#pmgJS-HeroSignUp button", null, {
        type: "btl",
        cat: "btl_a000",
        u1: tagData.loc,
        u2: tagData.langLoc,
        u5: window.location.toString(),
        u6: tagData.pageName,
        u25: "",
        u26: "Get Office Free",
        u52: "allclick"
    });
Cortex.Tracking.Apply(Cortex.Tracking.Type.DoubleclickFloodlight, Cortex.Tracking.Action.Click,
    "6952136", tagData.langLoc, ["en-ca"], "[aria-label*='Visit Microsoft Teams today']", null, {
        type: "btl",
        cat: "btl_a000",
        u1: tagData.loc,
        u2: tagData.langLoc,
        u5: window.location.toString(),
        u6: tagData.pageName,
        u25: "",
        u26: "Learn More",
        u52: "allclick"
    });
Cortex.Tracking.Apply(Cortex.Tracking.Type.DoubleclickFloodlight, Cortex.Tracking.Action.Click,
    "6952136", tagData.langLoc, ["en-ca"], "main [href*='onenote/default']", null, {
        type: "btl",
        cat: "btl_a000",
        u1: tagData.loc,
        u2: tagData.langLoc,
        u5: window.location.toString(),
        u6: tagData.pageName,
        u25: "",
        u26: "Discover OneNote",
        u52: "allclick"
    });
Cortex.Tracking.Apply(Cortex.Tracking.Type.DoubleclickFloodlight, Cortex.Tracking.Action.Click,
    "6952136", tagData.langLoc, ["en-ca"], "main [href*='GetTrained/OneNoteOne']", null, {
        type: "btl",
        cat: "btl_a000",
        u1: tagData.loc,
        u2: tagData.langLoc,
        u5: window.location.toString(),
        u6: tagData.pageName,
        u25: "",
        u26: "Get Free OneNote Training",
        u52: "allclick"
    });
Cortex.Tracking.Apply(Cortex.Tracking.Type.DoubleclickFloodlight, Cortex.Tracking.Action.Click,
    "6952136", tagData.langLoc, ["en-ca"], ".c-call-to-action[href*='onenote.com/learningtools']", null, {
        type: "btl",
        cat: "btl_a000",
        u1: tagData.loc,
        u2: tagData.langLoc,
        u5: window.location.toString(),
        u6: tagData.pageName,
        u25: "",
        u26: "Learn More",
        u52: "allclick"
    });

});
