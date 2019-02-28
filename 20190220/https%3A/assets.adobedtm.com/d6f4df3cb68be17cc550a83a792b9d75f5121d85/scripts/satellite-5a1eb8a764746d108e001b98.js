_satellite.pushAsyncScript(function(event, target, $variables){
  // This deployment should be after elements exist and also dependant on Site Tagging in case a data value needs to be set.
window.tagging = window.tagging || {};
window.tagging.vpt = window.tagging.vpt || {};
(function(data, util, jsll, vpt, $) {
  try {
    // ******************************
    // PMC Viewport Tracking Base
    // ******************************
    data.addDeploymentInfo("education_custom_jsll_scroll", "2017nov22v1");
    vpt.scrollTrackingEnabled = data.scrollTrackingEnabled || true;
    vpt.pvpuTimeout = 0;
    vpt.jqWin = $(window);
    vpt.jqDoc = $(document);
    vpt.setupViewportTracking = function() {
      vpt.jqWin.on("scroll", function() {
        vpt.processViewportUpdate();
      });

      //Note: resize also catches zoom in/out
      vpt.jqWin.on("resize", function() {
        window.clearTimeout(vpt.pvpuTimeout);
        //delay allows time for responsive design to process
        vpt.pvpuTimeout = window.setTimeout(function() {
          vpt.processViewportUpdate();
        }, 200);
      });
    };
    vpt.processViewportUpdate = function() {
      window.clearTimeout(vpt.pvpuTimeout);
      vpt.refreshViewportDimensions();

      //call functional methods.
      if (vpt.scrollTrackingEnabled) {
        vpt.processScrollTracking();
      }
      vpt.processImpressionTracking();
    };
    vpt.refreshViewportDimensions = function() {
      vpt.viewportTop = vpt.jqWin.scrollTop();
      vpt.viewportHeight = vpt.jqWin.height();
      vpt.viewportBottom = vpt.viewportTop + vpt.viewportHeight;
    };

    // *****************************
    // SCROLL TRACKING
    // *****************************
    vpt.currScrollArea = null;
    vpt.scrollAreaList = [];

    //Scroll Area definition
    vpt.scrollCheckpoint = function(inPctValue, inParentArea) {
      this.pctValue = inPctValue;
      this.textValue = inPctValue.toString();
      this.parentArea = inParentArea;
      this.hasFired = false;
    };
    vpt.scrollCheckpoint.prototype.fireEvent = function() {
      if (this.hasFired || !this.parentArea) {
        return;
      }
      this.hasFired = true;
      var content = {
        "content": {
          "contentName": "scroll " + (this.textValue === "pageload" ? this.textValue : this.textValue + "%")
        },
        "actionType": awa.actionType.SCROLL
      };
      jsll.processCustomContentUpdateFromArray(content);
      this.parentArea.firedCPList.push(this.textValue);
    };
    vpt.scrollArea = function(inName, inBottomElement) {
      this.name = inName;
      this.bottomElement = inBottomElement;
      this.cpList = [];
      this.firedCPList = [];
      this.fullViewFired = false;
      this.currScrollPct = 0;
      this.areaHeight = 0;
    };
    vpt.scrollArea.prototype.addCheckpoint = function(inCP) {
      inCP.parentArea = this;
      this.cpList.push(inCP);
    };
    vpt.scrollArea.prototype.updateAreaHeight = function() {
      if (this.bottomElement) {
        this.areaHeight = this.bottomElement.getBoundingClientRect().top + vpt.viewportTop;
      } else {
        this.areaHeight = vpt.jqDoc.height();
      }
    };
    vpt.scrollArea.prototype.firePageLoadEvent = function() {
      var tFVCP = new vpt.scrollCheckpoint("pageload", this);
      tFVCP.textValue = "pageload";
      tFVCP.fireEvent();
    };
    vpt.setCurrScrollArea = function(inIndex) {
      if (typeof inIndex != "number") {
        return;
      } else if (vpt.scrollAreaList.length <= inIndex) {
        return;
      }
      vpt.currScrollArea = vpt.scrollAreaList[inIndex];
    };
    vpt.initialScrollFromPageLoad = true;
    vpt.processScrollTracking = function() {
      var currSA = vpt.currScrollArea;
      if (currSA === null) {
        return;
      }
      if (vpt.initialScrollFromPageLoad) {
        vpt.initialScrollFromPageLoad = false;
        vpt.currScrollArea.currScrollPct = "pageload";
        //currSA.firePageLoadEvent();
        return;
      }
      currSA.updateAreaHeight();
      if (currSA.areaHeight <= 0) {
        return;
      }

      currSA.currScrollPct = 100 * vpt.viewportBottom / currSA.areaHeight;
      $.each(currSA.cpList, function(index, cpItem) {
        if (!cpItem.hasFired && cpItem.pctValue <= currSA.currScrollPct) {
          cpItem.fireEvent();
        }
      });
    };
    vpt.setupScrollTracking = function() {
      var tNewScrollArea, cpVal;

      vpt.bottomElement = data.vptBottomElement || $("footer:first")[0];

      //Standard body tracking
      tNewScrollArea = new vpt.scrollArea("body", vpt.bottomElement);

      //set the checkpoints
      for (cpVal = 10; cpVal <= 100; cpVal += 10) {
        tNewScrollArea.addCheckpoint(new vpt.scrollCheckpoint(cpVal));
      }

      vpt.scrollAreaList.push(tNewScrollArea);

      vpt.setCurrScrollArea(0);
    };

    // *****************************
    // IMPRESSION TRACKING
    // *****************************
    vpt.impElementList = [];

    //Impression Area definition
    vpt.impElement = function(inName, inJQObj) {
      this.name = inName;
      this.jqObj = inJQObj;
      this.boundingRect = null;
      this.docOffsetTop = -1;
      this.docOffsetBottom = -1;
      this.hasFired = false;
      this.impDuration = 1000;
      this.eventTimeout = 0;
      this.eventTimeoutRunning = false;
    };
    vpt.impElement.prototype.refreshOffsets = function() {
      if (!this.jqObj || this.jqObj.length === 0) {
        this.docOffsetTop = this.docOffsetBottom = -1;
        return;
      }

      this.boundingRect = this.jqObj[0].getBoundingClientRect();
      this.docOffsetTop = this.boundingRect.top + vpt.viewportTop;
      this.docOffsetBottom = this.boundingRect.bottom + vpt.viewportTop;

      if (this.docOffsetTop >= this.docOffsetBottom) {
        this.docOffsetTop = this.docOffsetBottom = -1;
      }
    };
    //http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    vpt.impElement.prototype.isInViewport = function() {
      return ((this.docOffsetBottom <= vpt.viewportBottom) && (this.docOffsetTop >= vpt.viewportTop) && (this.isInViewportExtension()));
    };
    vpt.impElement.prototype.isInViewportExtension = function() {
      //default method.  Overwrite if there are other circumstances to check that element is in viewport, such as carousel slides.
      return true;
    };
    vpt.impElement.prototype.isInVPExtCarouselSlide = function() {
      if (this.jqObj.closest(".slick-current").length > 0) {
        return true;
      }
      return false;
    };
    vpt.impElement.prototype.isInVPExtSlickContent = function() {
      if (this.jqObj.closest(".content-block").css("display") === "block") {
        return true;
      }
      return false;
    };
    vpt.impElement.prototype.isInVPExtHoverToolTip = function() {
      if (this.jqObj.closest(".absolute_position_tooltip").css("display") === "block") {
        return true;
      }
      return false;
    };
    vpt.impElement.prototype.isInVPExtHoverBlock = function() {
      if (this.jqObj.closest(".overlay-full-block-vc").css("opacity") > 0) {
        return true;
      }
      return false;
    };
    vpt.impElement.prototype.suppressEvent = function() {
      //default method.  Overwrite if there are other circumstances to check that element is actually in viewport, such as behind a video overlay.
      return false;
    };
    vpt.impElement.prototype.fireEvent = function() {
      /*this.eventTimeoutRunning = false;
      if (this.hasFired === true || this.suppressEvent()) {
        return;
      }
      if (this.isInViewport()) {
        this.hasFired = true;
        var tArray = [];
        tArray.push("ms.pgarea", wdx.getAttrValueForJQObj(this.jqObj, "ms.pgarea"));
        tArray.push("ms.cmpgrp", wdx.getAttrValueForJQObj(this.jqObj, "ms.cmpgrp"));
        tArray.push("ms.cmpnm", wdx.getAttrValueForJQObj(this.jqObj, "ms.cmpnm"));
        //tArray.push("ms.cmptyp", wdx.getAttrValueForJQObj(this.jqObj, "ms.cmptyp"));
        if (wdx.getAttrValueForJQObj(this.jqObj, "ms.prod")) {
          tArray.push("ms.prod", wdx.getAttrValueForJQObj(this.jqObj, "ms.prod"));
        }
        tArray.push("ms.interactiontype", "4");
        tArray.push("ms.scnum", this.name);
        tArray.push("ms.ea_action", "impression");
        wdx.processCustomEventFromArray(tArray);
      }*/
    };
    vpt.impElement.prototype.startEventTimer = function() {
      if (this.hasFired === true || this.eventTimeoutRunning === true) {
        return;
      }
      this.eventTimeoutRunning = true;
      var thisImpElement = this;
      this.eventTimeout = window.setTimeout(function() {
        thisImpElement.fireEvent();
      }, this.impDuration);
    };
    vpt.processImpressionTracking = function() {
      if (vpt.impElementList.length === 0) {
        return;
      }
      $.each(vpt.impElementList, function(index, impElement) {
        impElement.refreshOffsets();
        if (!impElement.hasFired && !impElement.eventTimeoutRunning && impElement.isInViewport()) {
          impElement.startEventTimer();
        }
      });
    };

    // *** Run Setup and Start Tracking
    vpt.setupViewportTracking();
    if (vpt.scrollTrackingEnabled) {
      vpt.setupScrollTracking();
    }
    vpt.processViewportUpdate();

    //Setup impression tracking for EXAMPLE project
    var newImpElement, jqthis, jqtemp;
    vpt.setupImpTrackingEducation = function() {
      $("#compare-panel .compare-row-block").each(function() {
        jqthis = $(this);
        jqthis.attr("ms.cmpnm", util.formatStr(jqthis.find("p:first"), "headers"));
      });
      $(".absolute_position_tooltip .tool_tip_text").each(function(jqindex) {
        jqthis = $(this);
        newImpElement = new vpt.impElement("LearnMoreHover#" + jqindex, jqthis);
        newImpElement.impDuration = 500;
        newImpElement.isInViewportExtension = newImpElement.isInVPExtHoverToolTip;
        vpt.impElementList.push(newImpElement);

        jqthis.closest(".relative_position_tooltip").find(".tool_tip_hover_cell").on("mouseenter", function() {
          vpt.processViewportUpdate();
        });
      });

      $("[id*='Why_holograph_computing'] .tout").each(function(jqindex) {
        jqthis = $(this);
        jqtemp = jqthis.find(".overlay-full-block .subheader");
        newImpElement = new vpt.impElement("GridHover#" + jqindex, jqtemp);
        newImpElement.impDuration = 250;
        newImpElement.isInViewportExtension = newImpElement.isInVPExtHoverBlock;
        vpt.impElementList.push(newImpElement);
        jqthis.on("mouseenter", function() {
          vpt.processViewportUpdate();
          window.setTimeout(function() {
            vpt.processViewportUpdate();
          }, 100);
        });
        jqthis.on("click", function() {
          vpt.processViewportUpdate();
          window.setTimeout(function() {
            vpt.processViewportUpdate();
          }, 100);
        });
      });

      //$(document).on("afterChange", ".slick-slider", function () {
      //    vpt.processViewportUpdate();
      //});
    };
    if (data.sitename === "microsoft education" && data.gpn === "why education") {
      vpt.setupImpTrackingEducation();
    }

  } catch (err) {
    console.log("error in scroll data:" + err.message);
  }

})(window.tagging.data, window.tagging.util, window.tagging.jsll, window.tagging.vpt, window.jQuery);
});
