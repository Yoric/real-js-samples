/*
 * @(#)SspController.js 2018. 11. 20
 *
 * Copyright 2018 NAVER Corp. All rights Reserved.
 * NAVER PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
var SspController = $Class({
	$init: function (tagData) {
		try {
			this.logNo = gnFirstLogNo;
			this.blogId = gBlogId;
			this.categoryName = gsFirstCategoryName;
			this.sessionId = gsSesseionId;
			this.searchKeyword = gsSearchKeyword;
			this.blogOwnerYn = gsBlogOwnerYn;
			this.tagNames;
			this.divId = "";
			this.setSspOption(tagData, gAdUnitId);
		} catch (e) {
		}
	},

	setSspOption: function (tagData, adUnitId) {
		for (var i in tagData) {
			if (tagData[i].logno == this.logNo) {
				this.tagNames = decodeURIComponent(tagData[i].tagName);
			}
		}
		var welPcol1 = $Element($$.getSingle("._adpost_skin_property .pcol1"));
		var welPcol2 = $Element($$.getSingle("._adpost_skin_property .pcol2"));
		var welPcol3 = $Element($$.getSingle("._adpost_skin_property .pcol3"));

		var sStyleDefault = welPcol2.css("color");
		var sStyleHighlight = welPcol3.css("color");
		var sStyleHeadline = welPcol1.css("color");

		this.extraOption = {
			mediaParams: {
				bid: this.blogId,
				pid: "" + this.logNo,
				publisherRequest: this.blogOwnerYn,
				cnt: 1,
				pk: this.searchKeyword,
				pt: this.tagNames,
				pc: this.categoryName,
				sessionId: this.sessionId,
				styleDefault:sStyleDefault,//pcol2
				styleHeadline:sStyleHeadline,//pcol1
				styleHighlight:sStyleHighlight//pcol3
			}
		};
		this.initSsp(this.extraOption, adUnitId);
	},
	initSsp: function (extraOption, adUnitId) {
		window.spwp = spwp || {};
		spwp.cmd = spwp.cmd || [];
		spwp.cmd.push(function () {
			spwp.setConfig({
				enablePersistAd: true
			});
			var adUnits = [{
				unitId: adUnitId,
				divId: "ssp-adpost",
				extraOption: extraOption
			}];
			spwp.addAdUnits(adUnits);
		});
		spwp.requestAds({
			adUnitIds: [adUnitId]
		});
		spwp.cmd.push(function () {
			spwp.renderAd("ssp-adpost");
		});
	}
});
