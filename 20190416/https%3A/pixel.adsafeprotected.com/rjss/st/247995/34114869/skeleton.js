var __IntegralASDiagnosticCall = function(){};

try {
	var __IntegralASConfig = {
		jsDoSplit: false,
		debug: "false",
		jsDiag: 'false',
		version: '17.4.179',
		mtCell: 10,
		mtSample: 5,
		trackMouse: "true",
		exchList: {'e1':'nqzryq','e2':'tbbtyrnqf.t.qbhoyrpyvpx','e3':'ehovpbacebwrpg','e4':'chozngvp','e5':'bcrak','e6':'nqoevgr.pbz','e7':'tynz.pbz','e8':'lvryqznantre.pbz','e9':'yvwvg','e10':'nqakf','p11':'ghea.pbz','p12':'zngugnt','p13':'vaivgrzrqvn','p14':'qngnkh','n15':'zrqvn6qrterrf','n16':'dhnagfreir','n17':'esvuho.arg','a18':'napubeserr','a19':'eff2frnepu','a20':'mgfgngvp.pbz','n21':'ovq.npr.nqiregvfvat','e22':'wnfba','v23':'fcbgkpqa','v24':'ogeyy','v25':'yvirenvy','v26':'nqncgi','v27':'nqnc.gi','n29':'qbzqrk.pbz','n30':'ernyih.arg','d31':'cvengronl','d32':'cebklonl','d33':'onlcebkl','d34':'cvengrcebkl','d35':'cebklcvengr','d36':'onlcvengr','n37':'tjnyyrg','p39':'j55p.arg','p40':'c0l.pa','p41':'vcvalbh.pbz','p42':'c0lwferaqre'},
		sp_cdnDomain: 'cdn.adsafeprotected.com',
		sp_cdnScripts: {xsca: "static.adsafeprotected.com/xsca.17.4.85.js", sca: "static.adsafeprotected.com/sca.17.4.95.js", main: "static.adsafeprotected.com/main.17.4.179.js"},
		protocol: 'https',
		jsref: "",
		asid: "134057b9-6073-11e9-b393-002590882ece",
		allowViewability: "true",
		jsFeatures: "viewabilityready,consecutive,cachebust:0,forcecocoa:0,rattie,exch,recordalternate:0,usedtdomain,nextcocoa:100,bapiDiag,postDts:0,videotwoseconds,getPl,decodePl,resolution,usetpl,tpiLookupURL,hundredpct,jloadDiag:0,blur:0,sendclogs,zeroPing,idMap,offscreen,everySecond:1,sdkdetection,moreAdTalkCalls,slid,fm2:1,largeAd,nextcocoaie:100,usevh,fxdet:0,mmsb:0,bigmon:0,chromeNativeIO:100,oddet:0,ios:100,ancestor:100,avmm:100,avgrn:100,useScreenLocationInfoAdaptor:100,swapids:100,pIntervals:10,firewall_cdn_domain,forceid:0,usesca:80,usexsca:1,bustediframe:100,impFailSafe:100,yieldmo:100,displayCustomView:0,sfdetect,pmdetect:100,novidnodeerr:5,diagnosticCM:0,viewabilityOptimization:100,usehaps:100,customMetric:100,sizmek,celtra,groupmCM,avidPropertiesInImpression,abcAudit,useMraidGeometricMeasurement,mrcAudit:1,BannerStuffingInApp",
		adsafeDomain: "adsafeprotected.com:80",
		minimizeCalls: "false",
		adWidth: "160",
		adHeight: "600",
		forceAppend: "true",
		sp_imp_maxLength: 8000,
		sp_imp_jsInfo_minLength: 200,
		_onInViewMRC15: __IntegralASConfig && __IntegralASConfig.onInViewMRC15,
		_onInViewMRC: __IntegralASConfig && __IntegralASConfig.onInViewMRC,
		_onMeasurable: __IntegralASConfig && __IntegralASConfig.onMeasurable,
		_onAPIResult: __IntegralASConfig && __IntegralASConfig.onAPIResult,
		_onInViewFull: __IntegralASConfig && __IntegralASConfig.onInViewFull,
		_onSuspicious: __IntegralASConfig && __IntegralASConfig.onSuspicious,
		_onInViewMRC5: __IntegralASConfig && __IntegralASConfig.onInViewMRC5,
		reqquery: "",
		mode: "rjss",
		requrl: "",
		dtBaseURL: "https:\/\/dt.adsafeprotected.com\/dt?advEntityId=247995",
		adsafeSrc: "https:\/\/pixel.adsafeprotected.com\/rfw\/st\/247995\/34114869\/skeleton.js",
		tpiLookupURL: "",
		getTpl: "false",
		use100v: false,
		useBapiCallback: "",
		useViewabilityNotification: "",
		scriptUrl: "https:\/\/pixel.adsafeprotected.com\/rjss\/st\/247995\/34114869\/skeleton.js",
		accountForSadImps: '',
		sendCookie: 'true',
		cookieBaseURL: 'sc.iasds01.com\/dtc?advEntityId=247995&pubEnt=34114869',
		fwMonitoring: 'true',
		doNothing: false,
		mn: "app12ami",
		mobOrTab: false,
		app: false,
		mobFwUrl: "https:\/\/mobile.adsafeprotected.com\/internal\/monitoring\/app\/initial\/247995\/34114869\/",
		anId: '',
		advEntityId: '247995',
		pubEntityId: '34114869',
		videoId: '',
		videoChannel: '',
		rts: {},
		customViewability: [],
		serverSideAppDetection: []
	};
try {
	__IASScope = typeof window !== "undefined" ? window : this;
	__IntegralASConfig.birthdate = new Date().getTime();
	__IntegralASConfig.perfBirth = (typeof __IASScope.performance !== "undefined" && typeof __IASScope.performance.now === 'function') ? __IASScope.performance.now() : null;

	//copy/pasted the contents of the thirdparty OmidVerificationClient.js file here, remove and replace when a new version is received
	//Versions are to be found at tools.iabtechlab.com/omsdk in the "OM SDK JS" tab. We don't build this ourselves, we just take the most recently uploaded file from there.
	//Latest version '1.2.3-iab592' pasted on August 24th 2018 by Derek Davies
	//Locally applied fixes (with original code commented out with "//-----" at the start of the lines):
	//1. "const version" needed to be changed to "var version" for IE < 11
	//2. Commented out initialization and use of this.remoteIntervals_ and this.remoteTimeouts_ because it led to multiple VC instances using the same id.
	//   Replaced with random numbers, like this: var c = ((new Date()).getTime() * 1000000) + (Math.floor(Math.random() * 1000000));
	//   That gets a unique millisecond value for 'now', multiplies it by a million (to get 6 zero digits below the milliseconds
	//   into which a random 6 digit number is added. So it gives us a random number of 1 in a million for each milliseconds (that's fairly unique).

	;(function(omidGlobal, factory, exports) {
		// CommonJS support
		if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
			factory(omidGlobal, exports);

			// If neither AMD nor CommonJS are used, export to a versioned name in the
			// global context.
		} else {
			var exports = {};
//----------const version = '1.2.3-iab592';
			var version = '1.2.3-iab592';
			factory(omidGlobal, exports);

			function deepFreeze(object) {
				for (var key in object) {
					if (object.hasOwnProperty(key)) {
						object[key] = deepFreeze(object[key]);
					}
				}
				return Object.freeze(object);
			}

			// Inject and freeze the exported components of omid.
			for (var key in exports) {
				if (exports.hasOwnProperty(key)) {
					if (Object.getOwnPropertyDescriptor(omidGlobal, key) == null
						|| Object.getOwnPropertyDescriptor(omidGlobal[key], version) == null) {
						// Define the top level property in the global scope
						if (Object.getOwnPropertyDescriptor(omidGlobal, key) == null) {
							Object.defineProperty(omidGlobal, key, {
								value: {},
							});
						}
						// Define the object exports keyed-off versions
						Object.defineProperty(omidGlobal[key], version, {
							get: function () {
								return deepFreeze(exports[key]);
							},
							enumerable: true,
						});
					}
				}
			}
		}
	}(typeof global === 'undefined' ? this : global, function(omidGlobal, omidExports) {
		'use strict';var $jscomp = $jscomp || {};
		$jscomp.scope = {};
		$jscomp.inherits = function(a, b) {
			function c() {
			}
			c.prototype = b.prototype;
			a.superClass_ = b.prototype;
			a.prototype = new c;
			a.prototype.constructor = a;
			for (var d in b) {
				if ("prototype" != d) {
					if (Object.defineProperties) {
						var e = Object.getOwnPropertyDescriptor(b, d);
						e && Object.defineProperty(a, d, e);
					} else {
						a[d] = b[d];
					}
				}
			}
		};
		$jscomp.ASSUME_ES5 = !1;
		$jscomp.ASSUME_NO_NATIVE_MAP = !1;
		$jscomp.ASSUME_NO_NATIVE_SET = !1;
		$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
				a != Array.prototype && a != Object.prototype && (a[b] = c.value);
			};
		$jscomp.getGlobal = function(a) {
			return "undefined" != typeof window && window === a ? a : "undefined" != typeof global && null != global ? global : a;
		};
		$jscomp.global = $jscomp.getGlobal(this);
		$jscomp.SYMBOL_PREFIX = "jscomp_symbol_";
		$jscomp.initSymbol = function() {
			$jscomp.initSymbol = function() {
			};
			$jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol);
		};
		$jscomp.symbolCounter_ = 0;
		$jscomp.Symbol = function(a) {
			return $jscomp.SYMBOL_PREFIX + (a || "") + $jscomp.symbolCounter_++;
		};
		$jscomp.initSymbolIterator = function() {
			$jscomp.initSymbol();
			var a = $jscomp.global.Symbol.iterator;
			a || (a = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("iterator"));
			"function" != typeof Array.prototype[a] && $jscomp.defineProperty(Array.prototype, a, {configurable:!0, writable:!0, value:function() {
				return $jscomp.arrayIterator(this);
			}});
			$jscomp.initSymbolIterator = function() {
			};
		};
		$jscomp.arrayIterator = function(a) {
			var b = 0;
			return $jscomp.iteratorPrototype(function() {
				return b < a.length ? {done:!1, value:a[b++]} : {done:!0};
			});
		};
		$jscomp.iteratorPrototype = function(a) {
			$jscomp.initSymbolIterator();
			a = {next:a};
			a[$jscomp.global.Symbol.iterator] = function() {
				return this;
			};
			return a;
		};
		$jscomp.makeIterator = function(a) {
			$jscomp.initSymbolIterator();
			var b = a[Symbol.iterator];
			return b ? b.call(a) : $jscomp.arrayIterator(a);
		};
		$jscomp.arrayFromIterator = function(a) {
			for (var b, c = []; !(b = a.next()).done;) {
				c.push(b.value);
			}
			return c;
		};
		$jscomp.arrayFromIterable = function(a) {
			return a instanceof Array ? a : $jscomp.arrayFromIterator($jscomp.makeIterator(a));
		};
		var module$exports$omid$common$argsChecker = {assertTruthyString:function(a, b) {
			if (!b) {
				throw Error("Value for " + a + " is undefined, null or blank.");
			}
			if ("string" !== typeof b && !(b instanceof String)) {
				throw Error("Value for " + a + " is not a string.");
			}
			if ("" === b.trim()) {
				throw Error("Value for " + a + " is empty string.");
			}
		}, assertNotNullObject:function(a, b) {
			if (null == b) {
				throw Error("Value for " + a + " is undefined or null");
			}
		}, assertNumber:function(a, b) {
			if (null == b) {
				throw Error(a + " must not be null or undefined.");
			}
			if ("number" !== typeof b || isNaN(b)) {
				throw Error("Value for " + a + " is not a number");
			}
		}, assertNumberBetween:function(a, b, c, d) {
			(0,module$exports$omid$common$argsChecker.assertNumber)(a, b);
			if (b < c || b > d) {
				throw Error("Value for " + a + " is outside the range [" + c + "," + d + "]");
			}
		}, assertFunction:function(a, b) {
			if (!b) {
				throw Error(a + " must not be truthy.");
			}
		}, assertPositiveNumber:function(a, b) {
			(0,module$exports$omid$common$argsChecker.assertNumber)(a, b);
			if (0 > b) {
				throw Error(a + " must be a positive number.");
			}
		}};
		var module$exports$omid$common$VersionUtils = {}, module$contents$omid$common$VersionUtils_SEMVER_DIGITS_NUMBER = 3;
		module$exports$omid$common$VersionUtils.isValidVersion = function(a) {
			return /\d+\.\d+\.\d+(-.*)?/.test(a);
		};
		module$exports$omid$common$VersionUtils.versionGreaterOrEqual = function(a, b) {
			a = a.split("-")[0].split(".");
			b = b.split("-")[0].split(".");
			for (var c = 0; c < module$contents$omid$common$VersionUtils_SEMVER_DIGITS_NUMBER; c++) {
				var d = parseInt(a[c], 10), e = parseInt(b[c], 10);
				if (d > e) {
					break;
				} else {
					if (d < e) {
						return !1;
					}
				}
			}
			return !0;
		};
		var module$exports$omid$common$ArgsSerDe = {}, module$contents$omid$common$ArgsSerDe_ARGS_NOT_SERIALIZED_VERSION = "1.0.3";
		module$exports$omid$common$ArgsSerDe.serializeMessageArgs = function(a, b) {
			return (0,module$exports$omid$common$VersionUtils.isValidVersion)(a) && (0,module$exports$omid$common$VersionUtils.versionGreaterOrEqual)(a, module$contents$omid$common$ArgsSerDe_ARGS_NOT_SERIALIZED_VERSION) ? b : JSON.stringify(b);
		};
		module$exports$omid$common$ArgsSerDe.deserializeMessageArgs = function(a, b) {
			return (0,module$exports$omid$common$VersionUtils.isValidVersion)(a) && (0,module$exports$omid$common$VersionUtils.versionGreaterOrEqual)(a, module$contents$omid$common$ArgsSerDe_ARGS_NOT_SERIALIZED_VERSION) ? b ? b : [] : b && "string" === typeof b ? JSON.parse(b) : [];
		};
		var module$exports$omid$common$constants = {AdEventType:{IMPRESSION:"impression", STATE_CHANGE:"stateChange", GEOMETRY_CHANGE:"geometryChange", SESSION_START:"sessionStart", SESSION_ERROR:"sessionError", SESSION_FINISH:"sessionFinish", VIDEO:"video", LOADED:"loaded", START:"start", FIRST_QUARTILE:"firstQuartile", MIDPOINT:"midpoint", THIRD_QUARTILE:"thirdQuartile", COMPLETE:"complete", PAUSE:"pause", RESUME:"resume", BUFFER_START:"bufferStart", BUFFER_FINISH:"bufferFinish", SKIPPED:"skipped", VOLUME_CHANGE:"volumeChange",
			PLAYER_STATE_CHANGE:"playerStateChange", AD_USER_INTERACTION:"adUserInteraction"}, VideoEventType:{LOADED:"loaded", START:"start", FIRST_QUARTILE:"firstQuartile", MIDPOINT:"midpoint", THIRD_QUARTILE:"thirdQuartile", COMPLETE:"complete", PAUSE:"pause", RESUME:"resume", BUFFER_START:"bufferStart", BUFFER_FINISH:"bufferFinish", SKIPPED:"skipped", VOLUME_CHANGE:"volumeChange", PLAYER_STATE_CHANGE:"playerStateChange", AD_USER_INTERACTION:"adUserInteraction"}, ErrorType:{GENERIC:"generic", VIDEO:"video"},
			AdSessionType:{NATIVE:"native", HTML:"html"}, EventOwner:{NATIVE:"native", JAVASCRIPT:"javascript", NONE:"none"}, AccessMode:{FULL:"full", LIMITED:"limited"}, AppState:{BACKGROUNDED:"backgrounded", FOREGROUNDED:"foregrounded"}, Environment:{MOBILE:"app"}, InteractionType:{CLICK:"click", INVITATION_ACCEPT:"invitationAccept"}, MediaType:{DISPLAY:"display", VIDEO:"video"}, Reason:{NOT_FOUND:"notFound", HIDDEN:"hidden", BACKGROUNDED:"backgrounded", VIEWPORT:"viewport", OBSTRUCTED:"obstructed", CLIPPED:"clipped"},
			SupportedFeatures:{CONTAINER:"clid", VIDEO:"vlid"}, VideoPosition:{PREROLL:"preroll", MIDROLL:"midroll", POSTROLL:"postroll", STANDALONE:"standalone"}, VideoPlayerState:{MINIMIZED:"minimized", COLLAPSED:"collapsed", NORMAL:"normal", EXPANDED:"expanded", FULLSCREEN:"fullscreen"}, NativeViewKeys:{X:"x", Y:"y", WIDTH:"width", HEIGHT:"height", AD_SESSION_ID:"adSessionId", IS_FRIENDLY_OBSTRUCTION_FOR:"isFriendlyObstructionFor", CLIPS_TO_BOUNDS:"clipsToBounds", CHILD_VIEWS:"childViews", END_X:"endX", END_Y:"endY",
				OBSTRUCTIONS:"obstructions"}, MeasurementStateChangeSource:{CONTAINER:"container", CREATIVE:"creative"}, ElementMarkup:{OMID_ELEMENT_CLASS_NAME:"omid-element"}, CommunicationType:{NONE:"NONE", DIRECT:"DIRECT", POST_MESSAGE:"POST_MESSAGE"}, OmidImplementer:{OMSDK:"omsdk"}};
		var module$contents$omid$common$InternalMessage_GUID_KEY = "omid_message_guid", module$contents$omid$common$InternalMessage_METHOD_KEY = "omid_message_method", module$contents$omid$common$InternalMessage_VERSION_KEY = "omid_message_version", module$contents$omid$common$InternalMessage_ARGS_KEY = "omid_message_args", module$exports$omid$common$InternalMessage = function(a, b, c, d) {
			this.guid = a;
			this.method = b;
			this.version = c;
			this.args = d;
		};
		module$exports$omid$common$InternalMessage.isValidSerializedMessage = function(a) {
			return !!a && void 0 !== a[module$contents$omid$common$InternalMessage_GUID_KEY] && void 0 !== a[module$contents$omid$common$InternalMessage_METHOD_KEY] && void 0 !== a[module$contents$omid$common$InternalMessage_VERSION_KEY] && "string" === typeof a[module$contents$omid$common$InternalMessage_GUID_KEY] && "string" === typeof a[module$contents$omid$common$InternalMessage_METHOD_KEY] && "string" === typeof a[module$contents$omid$common$InternalMessage_VERSION_KEY] && (void 0 === a[module$contents$omid$common$InternalMessage_ARGS_KEY] ||
				void 0 !== a[module$contents$omid$common$InternalMessage_ARGS_KEY]);
		};
		module$exports$omid$common$InternalMessage.deserialize = function(a) {
			return new module$exports$omid$common$InternalMessage(a[module$contents$omid$common$InternalMessage_GUID_KEY], a[module$contents$omid$common$InternalMessage_METHOD_KEY], a[module$contents$omid$common$InternalMessage_VERSION_KEY], a[module$contents$omid$common$InternalMessage_ARGS_KEY]);
		};
		module$exports$omid$common$InternalMessage.prototype.serialize = function() {
			var a = {};
			a = (a[module$contents$omid$common$InternalMessage_GUID_KEY] = this.guid, a[module$contents$omid$common$InternalMessage_METHOD_KEY] = this.method, a[module$contents$omid$common$InternalMessage_VERSION_KEY] = this.version, a);
			void 0 !== this.args && (a[module$contents$omid$common$InternalMessage_ARGS_KEY] = this.args);
			return a;
		};
		var module$exports$omid$common$Communication = function(a) {
			this.to = a;
			this.communicationType_ = module$exports$omid$common$constants.CommunicationType.NONE;
		};
		module$exports$omid$common$Communication.prototype.sendMessage = function(a, b) {
		};
		module$exports$omid$common$Communication.prototype.handleMessage = function(a, b) {
			if (this.onMessage) {
				this.onMessage(a, b);
			}
		};
		module$exports$omid$common$Communication.prototype.generateGuid = function() {
			return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
				var b = 16 * Math.random() | 0;
				a = "y" === a ? (b & 3 | 8).toString(16) : b.toString(16);
				return a;
			});
		};
		module$exports$omid$common$Communication.prototype.serialize = function(a) {
			return JSON.stringify(a);
		};
		module$exports$omid$common$Communication.prototype.deserialize = function(a) {
			return JSON.parse(a);
		};
		module$exports$omid$common$Communication.prototype.isDirectCommunication = function() {
			return this.communicationType_ === module$exports$omid$common$constants.CommunicationType.DIRECT;
		};
		var module$exports$omid$common$DetectOmid = {OMID_PRESENT_FRAME_NAME:"omid_v1_present", isOmidPresent:function(a) {
			try {
				return a.frames ? !!a.frames[module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME] : !1;
			} catch (b) {
				return !1;
			}
		}, declareOmidPresence:function(a) {
			a.frames && a.document && (module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME in a.frames || (null == a.document.body && module$exports$omid$common$DetectOmid.isMutationObserverAvailable_(a) ? module$exports$omid$common$DetectOmid.registerMutationObserver_(a) : a.document.body ? module$exports$omid$common$DetectOmid.appendPresenceIframe_(a) : a.document.write('<iframe style="display:none" ' + ('id="' + module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME + '"') + (' name="' +
						module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME + '">') + "</iframe>")));
		}, appendPresenceIframe_:function(a) {
			var b = a.document.createElement("iframe");
			b.id = module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME;
			b.name = module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME;
			b.style.display = "none";
			a.document.body.appendChild(b);
		}, isMutationObserverAvailable_:function(a) {
			return "MutationObserver" in a;
		}, registerMutationObserver_:function(a) {
			var b = new MutationObserver(function(c) {
				c.forEach(function(c) {
					"BODY" === c.addedNodes[0].nodeName && (module$exports$omid$common$DetectOmid.appendPresenceIframe_(a), b.disconnect());
				});
			});
			b.observe(a.document.documentElement, {childList:!0});
		}};
		var module$exports$omid$common$DirectCommunication = function(a) {
			module$exports$omid$common$Communication.call(this, a);
			this.communicationType_ = module$exports$omid$common$constants.CommunicationType.DIRECT;
			this.handleExportedMessage = module$exports$omid$common$DirectCommunication.prototype.handleExportedMessage.bind(this);
		};
		$jscomp.inherits(module$exports$omid$common$DirectCommunication, module$exports$omid$common$Communication);
		module$exports$omid$common$DirectCommunication.prototype.sendMessage = function(a, b) {
			b = void 0 === b ? this.to : b;
			if (!b) {
				throw Error("Message destination must be defined at construction time or when sending the message.");
			}
			b.handleExportedMessage(a.serialize(), this);
		};
		module$exports$omid$common$DirectCommunication.prototype.handleExportedMessage = function(a, b) {
			module$exports$omid$common$InternalMessage.isValidSerializedMessage(a) && this.handleMessage(module$exports$omid$common$InternalMessage.deserialize(a), b);
		};
		var module$exports$omid$common$eventTypedefs = {};
		var module$exports$omid$common$exporter = {};
		function module$contents$omid$common$exporter_getOmidExports() {
			return "undefined" === typeof omidExports ? null : omidExports;
		}
		function module$contents$omid$common$exporter_getOrCreateName(a, b) {
			return a && (a[b] || (a[b] = {}));
		}
		module$exports$omid$common$exporter.packageExport = function(a, b, c) {
			if (c = void 0 === c ? module$contents$omid$common$exporter_getOmidExports() : c) {
				a = a.split("."), a.slice(0, a.length - 1).reduce(module$contents$omid$common$exporter_getOrCreateName, c)[a[a.length - 1]] = b;
			}
		};
		var module$exports$omid$common$logger = {error:function(a) {
			for (var b = [], c = 0; c < arguments.length; ++c) {
				b[c - 0] = arguments[c];
			}
			module$contents$omid$common$logger_executeLog(function() {
				throw new (Function.prototype.bind.apply(Error, [null].concat(["Could not complete the test successfully - "], $jscomp.arrayFromIterable(b))));
			}, function() {
				return console.error.apply(console, [].concat($jscomp.arrayFromIterable(b)));
			});
		}, debug:function(a) {
			for (var b = [], c = 0; c < arguments.length; ++c) {
				b[c - 0] = arguments[c];
			}
			module$contents$omid$common$logger_executeLog(function() {
			}, function() {
				return console.error.apply(console, [].concat($jscomp.arrayFromIterable(b)));
			});
		}};
		function module$contents$omid$common$logger_executeLog(a, b) {
			"undefined" !== typeof jasmine && jasmine ? a() : "undefined" !== typeof console && console && console.error && b();
		}
		;var module$exports$omid$common$OmidGlobalProvider = {}, module$contents$omid$common$OmidGlobalProvider_globalThis = eval("this");
		function module$contents$omid$common$OmidGlobalProvider_getOmidGlobal() {
			if ("undefined" !== typeof omidGlobal && omidGlobal) {
				return omidGlobal;
			}
			if ("undefined" !== typeof global && global) {
				return global;
			}
			if ("undefined" !== typeof window && window) {
				return window;
			}
			if ("undefined" !== typeof module$contents$omid$common$OmidGlobalProvider_globalThis && module$contents$omid$common$OmidGlobalProvider_globalThis) {
				return module$contents$omid$common$OmidGlobalProvider_globalThis;
			}
			throw Error("Could not determine global object context.");
		}
		module$exports$omid$common$OmidGlobalProvider.omidGlobal = module$contents$omid$common$OmidGlobalProvider_getOmidGlobal();
		var module$exports$omid$common$PostMessageCommunication = function(a, b) {
			b = void 0 === b ? module$exports$omid$common$OmidGlobalProvider.omidGlobal : b;
			module$exports$omid$common$Communication.call(this, b);
			var c = this;
			this.communicationType_ = module$exports$omid$common$constants.CommunicationType.POST_MESSAGE;
			a.addEventListener("message", function(a) {
				if ("object" === typeof a.data) {
					var b = a.data;
					module$exports$omid$common$InternalMessage.isValidSerializedMessage(b) && (b = module$exports$omid$common$InternalMessage.deserialize(b), a.source && c.handleMessage(b, a.source));
				}
			});
		};
		$jscomp.inherits(module$exports$omid$common$PostMessageCommunication, module$exports$omid$common$Communication);
		module$exports$omid$common$PostMessageCommunication.isCompatibleContext = function(a) {
			return !!(a && a.addEventListener && a.postMessage);
		};
		module$exports$omid$common$PostMessageCommunication.prototype.sendMessage = function(a, b) {
			b = void 0 === b ? this.to : b;
			if (!b) {
				throw Error("Message destination must be defined at construction time or when sending the message.");
			}
			b.postMessage(a.serialize(), "*");
		};
		var module$exports$omid$common$Rectangle = function(a, b, c, d) {
			this.x = a;
			this.y = b;
			this.width = c;
			this.height = d;
		};
		var module$exports$omid$common$serviceCommunication = {resolveTopWindowContext:function(a) {
			"undefined" === typeof a && "undefined" !== typeof window && window && (a = window);
			if ("undefined" === typeof a || !a || "undefined" === typeof a.top || !a.top) {
				return module$exports$omid$common$OmidGlobalProvider.omidGlobal;
			}
			if (a === a.top) {
				return a;
			}
			try {
				return "undefined" === typeof a.top.location.hostname ? a : a.top;
			} catch (b) {
				return a;
			}
		}};
		function module$contents$omid$common$serviceCommunication_getUnobfuscatedKey(a, b) {
			return b.reduce(function(a, b) {
				return a && a[b];
			}, a);
		}
		module$exports$omid$common$serviceCommunication.startServiceCommunication = function(a, b, c) {
			c = void 0 === c ? module$exports$omid$common$DetectOmid.isOmidPresent : c;
			return (b = module$contents$omid$common$serviceCommunication_getUnobfuscatedKey(a, b)) ? new module$exports$omid$common$DirectCommunication(b) : a.top && c(a.top) ? new module$exports$omid$common$PostMessageCommunication(a, a.top) : null;
		};
		var module$exports$omid$common$VastProperties = function(a, b, c, d) {
			this.isSkippable = a;
			this.skipOffset = b;
			this.isAutoPlay = c;
			this.position = d;
		};
		var module$exports$omid$common$version = {ApiVersion:"1.0", Version:"1.2.3-iab592"};
		var module$contents$omid$verificationClient$VerificationClient_VERIFICATION_CLIENT_VERSION = module$exports$omid$common$version.Version, module$contents$omid$verificationClient$VerificationClient_EventCallback;
		function module$contents$omid$verificationClient$VerificationClient_getThirdPartyOmid() {
			var a = module$exports$omid$common$OmidGlobalProvider.omidGlobal.omid3p;
			return a && "function" === typeof a.registerSessionObserver && "function" === typeof a.addEventListener ? a : null;
		}
		var module$exports$omid$verificationClient$VerificationClient = function(a) {
			if (this.communication = a = void 0 === a ? (0,module$exports$omid$common$serviceCommunication.startServiceCommunication)((0,module$exports$omid$common$serviceCommunication.resolveTopWindowContext)(), ["omid", "v1_VerificationServiceCommunication"]) : a) {
				this.communication.onMessage = this.handleMessage_.bind(this);
			} else {
				if (a = module$contents$omid$verificationClient$VerificationClient_getThirdPartyOmid()) {
					this.omid3p = a;
				}
			}
//----------this.remoteIntervals_ = this.remoteTimeouts_ = 0;
			this.callbackMap_ = {};
			this.imgCache_ = [];
		};
		module$exports$omid$verificationClient$VerificationClient.prototype.isSupported = function() {
			return !(!this.communication && !this.omid3p);
		};
		module$exports$omid$verificationClient$VerificationClient.prototype.registerSessionObserver = function(a, b) {
			(0,module$exports$omid$common$argsChecker.assertFunction)("functionToExecute", a);
			this.omid3p ? this.omid3p.registerSessionObserver(a, b) : this.sendMessage_("addSessionListener", a, b);
		};
		module$exports$omid$verificationClient$VerificationClient.prototype.addEventListener = function(a, b) {
			(0,module$exports$omid$common$argsChecker.assertTruthyString)("eventType", a);
			(0,module$exports$omid$common$argsChecker.assertFunction)("functionToExecute", b);
			this.omid3p ? this.omid3p.addEventListener(a, b) : this.sendMessage_("addEventListener", b, a);
		};
		module$exports$omid$verificationClient$VerificationClient.prototype.sendUrl = function(a, b, c) {
			(0,module$exports$omid$common$argsChecker.assertTruthyString)("url", a);
			module$exports$omid$common$OmidGlobalProvider.omidGlobal.document && module$exports$omid$common$OmidGlobalProvider.omidGlobal.document.createElement ? this.sendUrlWithImg_(a, b, c) : this.sendMessage_("sendUrl", function(a) {
					a && b ? b() : !a && c && c();
				}, a);
		};
		module$exports$omid$verificationClient$VerificationClient.prototype.sendUrlWithImg_ = function(a, b, c) {
			var d = this, e = module$exports$omid$common$OmidGlobalProvider.omidGlobal.document.createElement("img");
			this.imgCache_.push(e);
			var f = function(a) {
				var b = d.imgCache_.indexOf(e);
				0 <= b && d.imgCache_.splice(b, 1);
				a && a();
			};
			e.addEventListener("load", f.bind(this, b));
			e.addEventListener("error", f.bind(this, c));
			e.src = a;
		};
		module$exports$omid$verificationClient$VerificationClient.prototype.injectJavaScriptResource = function(a, b, c) {
			var d = this;
			(0,module$exports$omid$common$argsChecker.assertTruthyString)("url", a);
			module$exports$omid$common$OmidGlobalProvider.omidGlobal.document ? this.injectJavascriptResourceUrlInDom_(a, b, c) : this.sendMessage_("injectJavaScriptResource", function(e, f) {
					e ? (d.evaluateJavaScript_(f, a), b()) : (module$exports$omid$common$logger.error("Service failed to load JavaScript resource."), c());
				}, a);
		};
		module$exports$omid$verificationClient$VerificationClient.prototype.injectJavascriptResourceUrlInDom_ = function(a, b, c) {
			var d = module$exports$omid$common$OmidGlobalProvider.omidGlobal.document, e = d.body;
			d = d.createElement("script");
			d.onload = b;
			d.onerror = c;
			d.src = a;
			d.type = "application/javascript";
			e.appendChild(d);
		};
		module$exports$omid$verificationClient$VerificationClient.prototype.evaluateJavaScript_ = function(a, b) {
			try {
				eval(a);
			} catch (c) {
				module$exports$omid$common$logger.error('Error evaluating the JavaScript resource from "' + b + '".');
			}
		};
		module$exports$omid$verificationClient$VerificationClient.prototype.setTimeout = function(a, b) {
			(0,module$exports$omid$common$argsChecker.assertFunction)("functionToExecute", a);
			(0,module$exports$omid$common$argsChecker.assertPositiveNumber)("timeInMillis", b);
			if (this.hasTimeoutMethods_()) {
				return module$exports$omid$common$OmidGlobalProvider.omidGlobal.setTimeout(a, b);
			}
//----------var c = this.remoteTimeouts_++;
			var c = ((new Date()).getTime() * 1000000) + (Math.floor(Math.random() * 1000000));
			this.sendMessage_("setTimeout", a, c, b);
			return c;
		};
		module$exports$omid$verificationClient$VerificationClient.prototype.clearTimeout = function(a) {
			(0,module$exports$omid$common$argsChecker.assertPositiveNumber)("timeoutId", a);
			this.hasTimeoutMethods_() ? module$exports$omid$common$OmidGlobalProvider.omidGlobal.clearTimeout(a) : this.sendOneWayMessage_("clearTimeout", a);
		};
		module$exports$omid$verificationClient$VerificationClient.prototype.setInterval = function(a, b) {
			(0,module$exports$omid$common$argsChecker.assertFunction)("functionToExecute", a);
			(0,module$exports$omid$common$argsChecker.assertPositiveNumber)("timeInMillis", b);
			if (this.hasIntervalMethods_()) {
				return module$exports$omid$common$OmidGlobalProvider.omidGlobal.setInterval(a, b);
			}
//----------var c = this.remoteIntervals_++;
			var c = ((new Date()).getTime() * 1000000) + (Math.floor(Math.random() * 1000000));
			this.sendMessage_("setInterval", a, c, b);
			return c;
		};
		module$exports$omid$verificationClient$VerificationClient.prototype.clearInterval = function(a) {
			(0,module$exports$omid$common$argsChecker.assertPositiveNumber)("intervalId", a);
			this.hasIntervalMethods_() ? module$exports$omid$common$OmidGlobalProvider.omidGlobal.clearInterval(a) : this.sendOneWayMessage_("clearInterval", a);
		};
		module$exports$omid$verificationClient$VerificationClient.prototype.hasTimeoutMethods_ = function() {
			return "function" === typeof module$exports$omid$common$OmidGlobalProvider.omidGlobal.setTimeout && "function" === typeof module$exports$omid$common$OmidGlobalProvider.omidGlobal.clearTimeout;
		};
		module$exports$omid$verificationClient$VerificationClient.prototype.hasIntervalMethods_ = function() {
			return "function" === typeof module$exports$omid$common$OmidGlobalProvider.omidGlobal.setInterval && "function" === typeof module$exports$omid$common$OmidGlobalProvider.omidGlobal.clearInterval;
		};
		module$exports$omid$verificationClient$VerificationClient.prototype.handleMessage_ = function(a, b) {
			b = a.method;
			var c = a.guid;
			a = a.args;
			if ("response" === b && this.callbackMap_[c]) {
				var d = (0,module$exports$omid$common$ArgsSerDe.deserializeMessageArgs)(module$contents$omid$verificationClient$VerificationClient_VERIFICATION_CLIENT_VERSION, a);
				this.callbackMap_[c].apply(this, d);
			}
			"error" === b && window.console && module$exports$omid$common$logger.error(a);
		};
		module$exports$omid$verificationClient$VerificationClient.prototype.sendOneWayMessage_ = function(a, b) {
			for (var c = [], d = 1; d < arguments.length; ++d) {
				c[d - 1] = arguments[d];
			}
			this.sendMessage_.apply(this, [].concat([a, null], $jscomp.arrayFromIterable(c)));
		};
		module$exports$omid$verificationClient$VerificationClient.prototype.sendMessage_ = function(a, b, c) {
			for (var d = [], e = 2; e < arguments.length; ++e) {
				d[e - 2] = arguments[e];
			}
			this.communication && (e = this.communication.generateGuid(), b && (this.callbackMap_[e] = b), d = new module$exports$omid$common$InternalMessage(e, "VerificationService." + a, module$contents$omid$verificationClient$VerificationClient_VERIFICATION_CLIENT_VERSION, (0,module$exports$omid$common$ArgsSerDe.serializeMessageArgs)(module$contents$omid$verificationClient$VerificationClient_VERIFICATION_CLIENT_VERSION, d)), this.communication.sendMessage(d));
		};
		(0,module$exports$omid$common$exporter.packageExport)("OmidVerificationClient", module$exports$omid$verificationClient$VerificationClient);

	}, typeof exports === 'undefined' ? undefined : exports));

} catch(e) {
	__IntegralASDiagnosticCall('thirdparty', e);
}

	__IASScope.isDomless = (typeof window === "undefined" ? true : false);
	__IASOmidVerificationClient = { isSupported: function () { return false; } };

	if (typeof __IASScope.OmidVerificationClient !== 'undefined') {
		try {
			__IASOmidVerificationClient = new __IASScope.OmidVerificationClient['1.2.3-iab592'](); //try standard in-browser instantiation
		}
		catch(e) {
			try {
				__IASOmidVerificationClient = new __IASScope.OmidVerificationClient(); //try domless version which has no version
			}
			catch(e) {
			}
		}
	}

	if (__IntegralASConfig.jsFeatures.indexOf('asidJsDiagnostic') !== -1) {
		var fakeErr = { message: __IntegralASConfig.asid };
		__IntegralASDiagnosticCall('asid', fakeErr);
	}

	__IntegralASConfig.useFIF = (__IASScope && !!__IASScope.__IntegralASUseFIF) && __IntegralASConfig.mode === 'jload';
	__IntegralASConfig.adRefreshThreshold = __IASScope && __IASScope.__IntegralASAdRefreshThreshold;
	__IntegralASConfig.contextNode = (function() {
		if (__IASScope.isDomless) {
			return;
		}
		if (__IntegralASConfig.useFIF) {
			return __IASScope.frameElement; // Early exit if using FIF
		}
		var tempScript,
			embedded = window != top,
			scripts = document.getElementsByTagName('script'),
			result = scripts[scripts.length - 1],
			scriptIndex = scripts.length,
			useDocWrite = 'jss,jsi,jspix'.indexOf(__IntegralASConfig.mode) !== -1,
			scriptUrl = __IntegralASConfig.scriptUrl;

		try {
			while (--scriptIndex >= 0) {
				tempScript = scripts[scriptIndex];
				if (tempScript.src && tempScript.src.indexOf(scriptUrl) === 0 && tempScript.getAttribute('data-ias-script-tag') === null) {
					result = tempScript;
					tempScript.setAttribute('data-ias-script-tag', 'found');
					break;
				}
			}
			if (scriptIndex === 0 && useDocWrite && !embedded) {
				document.write('<span id="s' + __IntegralASConfig.asid + '"/>');
				result = document.getElementById('s' + __IntegralASConfig.asid).parentNode;
			}
		} catch(e) { }
	
		return result;
	}());

	__IntegralASConfig.perf = (function() {
		var _marks = {};
		var START_CODE = 'A';
		var END_CODE = 'Z';

		function _addMark(codeName, time) {
			// TODO: consider validation that codeName doesn't already exist and throwing in debug mode
			// also that the code name is a string of the expected format
			// and/or consider consolidating all PERF_MARK_ definitions into a global-to-our-closure constants file
			// (except the ones in this file, since _init() wouldn't have access to that scope)
			_marks[codeName] = time;
		}

		function mark(codeName) {
			_addMark(codeName, Math.round(__IASScope.performance.now()));
		}

		function markStart(baseName) {
			mark(baseName + START_CODE);
		}

		function markEnd(baseName) {
			mark(baseName + END_CODE);
		}

		function markResource(baseName, url) {
			var entry, entries;
			entries = __IASScope.performance.getEntriesByName(url);
			if (entries && entries.length) {
				entry = entries[entries.length - 1];
				if (entry.startTime > 0 && entry.responseEnd > 0) {
					_addMark(baseName + START_CODE, Math.round(entry.startTime));
					// TODO: if we address the CORS issues in FW, we can gather more details about the download process here
					_addMark(baseName + END_CODE, Math.round(entry.responseEnd));
				}
			}
		}

		function getData() {
			return _marks;
		}

		function noop() {}

		function setNoops() {
			_addMark = noop;
			mark = noop;
			markStart = noop;
			markEnd = noop;
			markResource = noop;
		}

		function isFunc(obj) {
			return typeof obj === 'function';
		}

		function _init() {
			var canUsePerformanceAPIs = false;
			var PERF_MARK_BOOTSTRAPPER_EXECUTION = 'be';
			var PERF_MARK_BOOTSTRAPPER_SCRIPT_DOWNLOAD = 'bd';
			var PERF_MARK_MAIN_SCRIPT_DOWNLOAD = 'md'; // note: this code is intentionally the same as the one in globalConstants.js
			var downloadMark;

			try {
				canUsePerformanceAPIs = __IASScope.performance &&
					isFunc(__IASScope.performance.getEntriesByName) &&
					isFunc(__IASScope.performance.now) &&
					__IntegralASConfig.perfBirth !== null;

				if (canUsePerformanceAPIs) {
					downloadMark = __IntegralASConfig.jsDoSplit ? PERF_MARK_BOOTSTRAPPER_SCRIPT_DOWNLOAD : PERF_MARK_MAIN_SCRIPT_DOWNLOAD;

					markResource(downloadMark, __IntegralASConfig.scriptUrl); // in split mode, this captures download time for the bootstrapper script, in bundled mode, the bundled/main script
					_addMark(PERF_MARK_BOOTSTRAPPER_EXECUTION + START_CODE, Math.round(__IntegralASConfig.perfBirth)); // put the birthdate that we already captured into our list of marks
					markEnd(PERF_MARK_BOOTSTRAPPER_EXECUTION); // roughly the end time of execution for the bootstrapper script in split mode, in bundled mode, end of the bootstrapper part of the script and start of the module definition part
				} else {
					setNoops();
				}
			} catch (err) {
				// TODO: remove if we never get here?
				setNoops();
				if (isFunc(__IASScope.__IntegralASDiagnosticCall)) {
					__IASScope.__IntegralASDiagnosticCall('perf', err, __IntegralASConfig);
				}
			}
		}

		_init();

		return {
			mark: mark,
			markStart: markStart,
			markEnd: markEnd,
			markResource: markResource,
			getData: getData
		};
	}());


} catch(err) {
	__IntegralASConfig = {};
	__IntegralASDiagnosticCall('bootstrapper', err);
}

__IntegralASConfig.initialize=function(m,w,K){function Oa(){var g;m.perf.markStart(la);L.startSystem();l=L.getAggregator();l.provide({omidAdSessionContext:{}});g=__IASOmidVerificationClient;l.provide({omidVerificationClient:g});g=[{environment:new aa(g),adSessionReadyStrategy:new Pa(ma,g)},{environment:new Qa,adSessionReadyStrategy:new Ra(ma)}];(new Sa(g)).resolve().adSessionReadyStrategy.start();m.perf.markEnd(la)}function ma(){var g,a;m.perf.markStart(na);a=X.instantiateModules();g=X.preImpression(a.mDataTransfer,
a.mViewability,a.mAdTalk,a.iOutput,a.mErrors,a.mAncestorOrigins,a.mBrowser,a.mPageUrls,a.mFeatures,t,a.renderDetector,a.asyncMacrosDetector);X.sendImpression(a.mErrors,a.mFeatures,a.mIds,a.mMode,a.iOutput,a.mBrowser,a.mViewability,g,a.mVideo);X.postImpression(a.mBrowser,a.mIds,a.mViewability,a.mFeatures,a.mComm,a.mDataTransfer,a.mErrors,a.iOutput,a.loopDelay,a.mAdTalk,a.viewabilityMeasurement,a.mAncestorOrigins,t);m.perf.markEnd(na)}var l,X=function(){function g(a){var b=new Ta(a,t),c=new Ua,d=new Va(a,
t),p=Wa(a,t),s=(new Xa(m,t,a)).resolve(),g=[b],F=[];p.applies()&&g.push(p);d.applies()&&g.push(d);c.applies(a,t)&&g.push(c);f(s).each(function(a,b){g.push(new Ya(b,t));F.push(b.id)});0<F.length&&(l.trigger("addOutputItem",{output:F.join(".")},"scm",{type:k.IMPRESSION_EVENT}),l.trigger("addOutputItem",{output:F},"metricIdList",{type:k.DT_CODES.UNLOAD,asION:!0}));return g}function a(a,b,c,d){var p=g(a);return f(p).map(function(p,g){var f;f=new Za(g,b);var u=(new $a(c,a,g.rts)).getCallbacks(),u=new ab(d.createPingJobs(g.type,
g.timeInViewThresholds,u,g.metricId));f=g.thresholdType===k.GROUPM_MOBILE_PASS_THRU_TIME_IN_VIEW_THRESHOLD_TYPE?new bb(f,g.minUnit,u,t.isVideo()):new cb(f,new ba(g.minUnit),u);f.start();return f})}function b(a,b){var c=(new ca).accepts(),c=!t.isAvid()&&!c&&!t.isInMobiMraidVideo();return t.isVideo()&&c?db(m.videoId,a,b):{}}function c(a,b,c,d,p,s,g,F,u,J){try{m.perf.markStart(oa),m.tpiLookupURL&&eb(g,F).init(m.tpiLookupURL),t.isDomless()||J.isStarted()&&J.sendOriginList(),L.runAll(),r.execAtEndOfThread(function(){var s;
try{m.perf.markStart(pa);s={output:(new Date).getTime()-p};a.addItem(s,"sinceFw",{type:k.DT_CODES.ADTALK});f.isDef(b.loopStarted())&&a.addItem({output:b.loopStarted()},"readyFired",{type:k.DT_CODES.ADTALK});m.perf.markEnd(pa);var g,y;m.isSplitMode&&(y=m.protocol+"://"+m.sp_cdnScripts.main,m.perf.markResource(fb,y));m.impUrl&&m.perf.markResource(gb,m.impUrl);g=m.perf.getData();l.trigger("addThrottledProp",k.DT_SLOT.IM,"prf",f(g).toION());c.isApplicable(t)&&c.sendAdTalkCall()}catch(u){d.add(k.ERROR_CODES.ADTALK_DELAY)}}),
m.perf.markEnd(oa)}catch(I){d.add(k.ERROR_CODES.EVENT_LOOP_ONE)}}function d(a,b,d,n,p,s,g,f,u){var k;"true"!==m.minimizeCalls&&(k=(new Date).getTime(),r.execAtEndOfThread(function(){c(a,b,d,n,k,p,s,g,f,u)}))}return{instantiateModules:function(){var c,d,q,n,p,s,g,f,u={};m.perf.markStart(qa);l=L.getAggregator();u.mFeatures=l.provide("features",hb());l.provide("mobileApp",function(){return c=c||new ib(u.mFeatures)});l.provide("avidJsClient",function(){return d=d||new jb(r.getWindow())});l.provide("context",
t);u.mBrowser=l.provide("browser",(new kb).createInstance());u.mErrors=lb();u.mIds=l.provide("ids",mb());u.iOutput=new nb(l);q=ra();u.mComm=(new ob).createInstance(u.mErrors,q);u.viewabilityMeasurement=(new pb(new qb(u.mIds),u.mFeatures,u.mBrowser)).create();if((q=l.request("omidAdSessionContext"))&&q.queuedOutputItems)for(s=0;s<q.queuedOutputItems.length;s++)l.trigger("addOutputItem",{output:q.queuedOutputItems[s].value},q.queuedOutputItems[s].code,{type:"impression"});u.mFeatures.on("swapids")&&
(m.oid=m.asid,m.asid=u.mIds.unq);u.mAdTalk=(new rb).createInstance(u.mFeatures);n=sb();q=tb(l);p=l.provide("mPage",(new ub).createInstance());u.mAncestorOrigins=vb();u.mPageUrls=l.provide("pageUrls",(new wb).createInstance(u.mAncestorOrigins,r));s=xb();l.provide("ieXDomainViewability",yb(u.mBrowser));g=zb(u.mBrowser);f=b(u.mFeatures,s);u.mVideo=l.provide("video",f);Ab(Bb.build());g=(new Cb).createInstance(u.mErrors,g,u.mFeatures);p=(new Db).createInstance(g,u.mErrors,p,t);f=l.provide("jobFactory",
Eb());u.mDataTransfer=Fb(g,u.mErrors,u.mFeatures,u.mIds,u.iOutput,u.mBrowser,s,n);n=Gb(u.mErrors,u.mFeatures,l,q);u.mMode=Hb(n,u.mFeatures,u.viewabilityMeasurement.isImmediate());u.mViewability=l.provide("viewability",Ib(new E,u.viewabilityMeasurement,u.mBrowser,u.mDataTransfer,u.mFeatures,l,u.iOutput,p,s,u.mVideo));a(u.mFeatures,u.mViewability,q,f);u.loopDelay=sa();u.renderDetector=Jb();u.asyncMacrosDetector=Kb();u.mDataTransfer.setViewabilityMod(u.mViewability);m.perf.markEnd(qa);return u},preImpression:function(a,
b,c,d,p,s,g,f,u,J,I,A){var r,t,z,v,D;m.perf.markStart(ta);try{c.isApplicable(J)&&(c.start(),d.addItem(c.getFrameMap(),"fm"),u.on("fm2")&&d.addItem(c.getFrameMapIncludingPeerCase(),"fm2"),u.on("idMap")&&(r=c.getIdMap())&&d.addItem(r,"idMap"))}catch(O){p.add(k.ERROR_CODES.ADTALK_GENERAL)}try{s.isApplicable(g,u,J)&&s.start(),D=f.detectTopURL(),u.on("exch")&&(t=(new Lb).createInstance(p,d),t.parse(D)),z=Mb(),z.isApplicable(u)&&z.start(u),J.usesGroupMCustomMetric()&&Nb(),v=Ob(),v.isApplicable(u)&&(v.start(),
l.trigger("sendCookie")),I.start(),A.start()}catch(w){p.add(k.ERROR_CODES.IMPRESSION_LEADUP)}m.perf.markEnd(ta);return D},sendImpression:function(a,b,c,d,p,s,g,k,u){try{Pb(a,b,c,d,p,s,g).send(k),f.isFunction(u.triggerInitializationEvents)&&u.triggerInitializationEvents()}catch(l){__IntegralASDiagnosticCall("impsend",l,m)}},postImpression:function(a,b,c,n,p,s,g,f,u,l,I,A,r){try{m.perf.markStart(ua);var t=Qb();t.start();t.addFieldTypes([k.DT_SLOT.IM,k.DT_SLOT.FRAUD,k.DT_SLOT.ENVIRONMENT,k.DT_SLOT.FRAUDEXP]);
var z=Rb(a,b,c);z.isApplicable(n)&&z.start();var v;n.bootstrapOn("getTpl")&&n.on("usetpl")&&(v=Sb(p,s,g,b,f),v.init());d(f,u,l,g,n,p,s,b,A);I&&I.start&&I.start();r.isDomless()||Tb().start(["sca","xsca","rsrch"],n);Ub();L.runTier(k.TIERS.VIEWABILITY);var D=Vb();D.isApplicable(n)&&(D.start(),T.recordBlockingTime(),m.perf.mark(Wb),T.setupOnLoadTracking(),T.setupBrowserDelayTracking());m.perf.markEnd(ua)}catch(O){g.add(k.ERROR_CODES.POST_IMPRESSION)}}}}(),f=function(g){return new G(g)},G=function(g){this.iterable=
g};G.prototype.isObj=function(g){var a=null===this.iterable,a="object"===typeof this.iterable&&!a,b=!this.isArray()&&a;return g?a:b};G.prototype.isArray=function(){return this.iterable instanceof Array};G.prototype.isEmpty=function(g){return 0===this.keys(g).length};G.prototype.each=function(g,a){var b=this.iterable;if(b.length===+b.length)for(var c=0,d=b.length;c<d;++c)g(c,b[c]);else for(c in b)(b.hasOwnProperty(c)||a)&&g(c,b[c])};G.prototype.map=function(g,a){var b=[];this.each(function(c,d){var e=
g(c,d);if(void 0!==e||a)b[b.length]=e});return b};G.prototype.stringify=function(g,a){a=a||",";var b=[];this.each(function(a,d){var e=g(a,d);f.isDef(e)&&b.push(e)});return b.join(a)};G.prototype.toION=function(g,a){var b,c="[",d="]";a=a||0;g=g||{};if(4<++a)return"object";if(!this.isObj(!0)||this.iterable.hasOwnProperty("toString"))return""+this.iterable;this.isArray()?b=this.map(function(b,c){return f(c).toION(g,a)}):(c="{",d="}",b=this.map(function(b,c){var d="string"===typeof b&&-1!==b.indexOf("NULL"),
n=f(c).toION(g,a);return d?n:(g[b]||b)+":"+n}));return c+b.join(",")+d};G.prototype.compareTo=function(g){var a=!1;this.each(function(b,c){g[b]!==c&&(a||(a={}),a[b]=c)});return a};G.prototype.toParams=function(g){return this.stringify(function(a,b){return"string"===typeof a&&-1!==a.indexOf("NULL")?b:a+":"+b},g)};G.prototype._privateMixin=function(g,a,b){for(var c in a)f.isDef(a[c])&&(b||a.hasOwnProperty(c))&&(g[c]=a[c]);return g};G.prototype.mapToObj=function(g){var a={},b=this;this.each(function(c,
d){var e=g(c,d);f(e).isObj()&&b._privateMixin(a,e)});return a};G.prototype.invert=function(){return this.mapToObj(function(g,a){var b={};b[a]=g;return b})};G.prototype.mixin=function(g,a){return this._privateMixin(this.iterable,g,a)};G.prototype.find=function(g){var a;this.each(function(b,c){g(b,c)&&(a=c)});return a};G.prototype.findFirst=function(g){var a,b;this.each(function(c,d){!b&&g(c,d)&&(a=d,b=!0)});return a};G.prototype.keys=function(g){var a=[];this.each(function(b){a.push(b)},g);return a};
G.prototype.asStrings=function(){var g={};this.each(function(a,b){g[a]=""+b});return g};G.prototype.selectProperties=function(g){var a={},b=this;f(g).each(function(c,d){f.isDef(b.iterable[d])&&(a[d]=b.iterable[d])});return a};G.prototype.filter=function(g,a){return this.map(function(a,c){var d;if(f.isUndef(g)||f.resolve(g,a,c))d=c;return d},a)};G.prototype.toArray=function(){return this.map(function(g,a){return a})};G.prototype.JSONStringify=function(){var g,a,b=!1;w.Prototype&&w.Prototype.Version&&
-1===w.Prototype.Version.indexOf("1.7")&&(b=!0);b&&(a=Array.prototype.toJSON,delete Array.prototype.toJSON);g=JSON.stringify(this.iterable);b&&(Array.prototype.toJSON=a);return g};G.prototype.contains=function(g){var a=f(this.iterable).findFirst(function(a,c){return g===c});return f.isDef(a)};f.toBase=function(g,a){var b,c=0>g,d="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),e=[];g=c?-g:g;do b=g%a,e.push(d[b]),g=(g-b)/a;while(0<g);e=e.reverse().join("");return c?"-"+e:
e};f.isDef=function(g){return"undefined"!==typeof g};f.isUndef=function(g){return!f.isDef(g)};f.isBool=function(g){return"boolean"===typeof g};f.noop=function(){};f.identity=function(g){return g};f.isFunction=function(g){return"function"===typeof g};f.isStr=function(g){return"string"===typeof g};f.useIfDef=function(g){return f.isDef(g)?g:!1};f.stringifyTriState=function(g){return!0===g?1:!1===g?0:"na"};f.getNum=function(g){g=parseInt(g);isFinite(g)||(g=-1);return g};f.resolve=function(g){var a=f(arguments).toArray();
a.shift();return f.isFunction(g)?g.apply({},a):g};f.flatJSONParse=function(g){var a,b,c,d=/"(\w+)":(\d+|(?:"([^"]*)"))/g,e={};for(c=d.exec(g);c;)a=c[1],b=c[3],c=c[2],e[a]=b||+c,c=d.exec(g);return e};f.debounce=function(g,a,b){var c,d=b||w;return function(){var b=this,h=arguments;d.clearTimeout(c);c=d.setTimeout(function(){c=null;g.apply(b,h)},a)}};f.last=function(g){return g[g.length-1]};f.collapseArgsIntoHash=function(g,a){var b={};a?b[g]=a:b=g;return b};f.fromBoolToNum=function(g){return g?1:0};
f.isNumeric=function(g){return f.isDef(g)&&null!==g&&!isNaN(g)};f.fromNodeListToArray=function(g){return Array.prototype.slice.call(g)};var L=function(){var g,a={},b=[],c=[],d=function(){var a={},b=f(arguments).toArray();b.unshift(a);c.push(b);return a},e=function(c,d,e,p,s){s=s||{};var y,k,u=function(a){0===b.length&&(b=f(a).map(function(a,b){return g.request(b)}))},l=function(){if(!y){var a=[];y=!0;u(["features","browser","context"]);s.emits&&(c.events=new E);if(!s.applies||s.applies.apply(s,b))k=
!0,a=f(e).map(function(a,b){return g.request(b)},!0),a.push(c),f(c).mixin(p.apply({},a))}};(function(){var b=s.tier;f.isDef(b)&&(a[b]=a[b]||new da,a[b].push(l))})();g.provide(d,function(){var a;l();k&&(a=c);return a});return c};d.runAll=function(){var b=f(a).keys().sort(function(a,b){return a-b});f(b).each(function(a,b){d.runTier(b)})};d.runTier=function(b){a[b].run();delete a[b]};d.startSystem=function(){g=g||new ea;f(c).each(function(a,b){e.apply({},b)})};d.getAggregator=function(){return g};return d}(),
k={MRC_LARGE_AD_SIZE:242500,FLASH_MIME:"application/x-shockwave-flash",IN_VIEW:"inView",OUT_OF_VIEW:"outOfView",PARTIAL_VIEW_PLUS:"partialViewPlus",PARTIAL_VIEW_MINUS:"partialViewMinus",NA:"na",PIV_NA:-1,DT_CODES:{ADTALK:"a",DIAGNOSTIC:"b",PERFORMANCE:"e",THIRD_PARTY:"i",LARGE_BILLABLE:"l",VIDEO_EVENTS:"m",MACRO:"ma",PING:"p",FULLY_INVIEW:"pf",QUARTILE_FULLY_INVIEW:"qf",SCA:"s",POS_INVIEW:"t",UNLOAD:"u",VIEWABILITY_READY:"v",EXTERNAL:"x",CUSTOM:"c",XSCA:"xs"},DT_SLOT:{IM:"im",FRAUD:"sca",FRAUDEXP:"xsca",
ENVIRONMENT:"env"},DETECTION_METHODS:{AD_PLACEHOLDER:"s",AD_HUNT:"a",IFRAME:"i",VIDEO:"v",MRAID:"m",AVID:"av",OMID:"o1",MUTATION:"c",SPECIFIED_AD:"sp",SPECIFIED_AD_NATIVO:"spn",BUSTED_IFRAME_FLASHTALKING:"bf",BUSTED_IFRAME_YIELDMO:"by",BUSTED_IFRAME_SIZMEK:"bs",VENDOR_CELTRA:"vc"},OUT_OF_VIEW_REASONS:{GEOM:"l",OBSTRUCTION:"o",FOCUS:"f",COLLAPSED:"c",HIDDEN:"h",VIDEO:"v"},VIDEO_CHANNELS:{VANS:{AS3_ADAPTOR:"av3",JS_ADAPTOR:"jv3"},WRAPPERS:{JS:"jvw"}},PERF_TIMELINE_TRACKER_CONFIG:{VANS:{TYPE:"vans",
COUNT:4},WRAPPERS:{JS:{TYPE:"jswrapper",COUNT:15},AS:{TYPE:"flwrapper",COUNT:9}}},ERROR_CODES:{GET_AD_DIMENSIONS:"a",AD_SLOT_ID:"A",BAPI_CALLBACK:"b",BROWSER_NOT_HTML5_COMPATIBLE:"B",ADTALK_GENERAL:"c",COCOA_GONE:"C",GET_SCREEN_LOC_GET_DIMENSIONS:"d",ADTALK_DUBIOUS:"D",POST_IMPRESSION:"E",ADTALK_DELAY:"f",VIDEO_IN_IFRAME_DIMS_CALC:"F",GDPR:"g",INIT_ADS_MANAGER:"G",PHONE_HOME:"h",FEATURE_SCRIPT:"H",HIDDEN:"H1",HIDDEN2:"H2",UID_GENERATION:"i",IMPRESSION_URLS:"I",NOT_VPAID_EVENT_OBJECT:"j",JSINFO:"J",
KILL_IT:"k",NO_RESPONSE_XML:"K",LOCATION_DETAILS:"l",IMPRESSION_LEADUP:"L",MESSAGE_LISTENER:"m",MOBILE_APP:"M",AT_INIT:"N",AUTOPLAY_DETECTION:"n",ANCESTOR_ORIGINS:"o",EVENT_LOOP_ONE:"O",GET_SCREEN_LOC_PIV_CALC:"p",PLUGIN_PARSING:"P",NO_ORIGINAL_VAST:"q",AD_REFRESH:"r",AD_ERROR:"R",GET_ELEM_STYLE:"s",AT_SEND:"S",ADS_MANAGER_START_AD:"t",NO_COMPANION_AD_XML:"T",NO_VIDEO_AD_INTERFACE:"u",UNRECOGNIZED_EVENT_TYPE:"U",ENVIRONMENT:"v",CHECK_SCREEN_LOC:"V",GET_WIN_DIMENSIONS:"w",AC_WATCHER:"W",EXCHANGE_PARSING:"x",
SCA:"X",BUSTED_IFRAME_IN_IO:"y",FLASH_API_ACCESS:"z",XSCA:"Z"},BROWSERS:{WEBKIT:"w",OPERA:"o",GECKO:"g",CHROME:"c",IE:"i",MSEDGE:"e"},MEDIA_TYPE_CODE:"mtp",MEDIA_TYPE:{DISPLAY:"display",DISPLAY_CODE:"d",VIDEO:"video",VIDEO_CODE:"v"},MEASUREMENT_STRATEGY:{DISPLAY:"display",VIDEO:"video"},TIERS:{PRE_IMPRESSION_FRAUD:4,VIEWABILITY:7,ENVIRONMENT:8},IMPRESSION_EVENT:"impression",AD_IDENTIFIER:"data-integralas-id",IAS_DETECTOR:"iasdetector",AVID:{AD_SESSION_TYPE:{DISPLAY:"display",VIDEO:"video",MANAGED_DISPLAY:"managedDisplay",
MANAGED_VIDEO:"managedVideo"}},VIEWABILITY_IN_VIEW_THRESHOLDS_INTERSECTION_OBSERVER:[0,0.01,0.2,0.25,0.3,0.5,0.7,0.75,0.8,0.99,1],VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID:[0,0.1,0.2,0.25,0.3,0.4,0.5,0.6,0.7,0.75,0.8,0.9,1],GROUPM_MOBILE_PASS_THRU_TIME_IN_VIEW_THRESHOLD_TYPE:"grpmMobPassThru",RENDER:{CREATIVE_NODE_TYPES:"CANVAS EMBED IMG OBJECT PICTURE SVG VIDEO".split(" "),CONTAINER_NODE_TYPES:["A","DIV","IFRAME","INS"],WIDTH_THRESHOLD:20,HEIGHT_THRESHOLD:20,STATUS:{OTHER:"0",DETECTED:"1"},DETAILS:{ENVIRONMENT:"env",
OTHER:"na"},DIAGNOSTIC:{BROKEN_IMAGE:"bi",UNQUALIFIED_SIZE:"us",QUALIFIED_SIZE:"qs",STYLED_NODE:"sn",TEXT_NODE:"tn",DOCUMENT_READY:"dr",LOAD_FIRED:"lf",MRAID_DEFAULT:"md",MRAID_READY:"mr"}}},la="mf",na="cm",qa="in",ta="pr",ua="po",Wb="bl",oa="lo",pa="lt",fb="md",gb="id",Xb=function(){var g,a=k.RENDER.CREATIVE_NODE_TYPES.concat(k.RENDER.CONTAINER_NODE_TYPES),b=function(c){var d;g=g||m.contextNode.parentNode;if(c)if(v.isNodeXDomainIframe(c))d=c;else{var e=v.getNodeName(c);if(e&&(-1!==k.RENDER.CREATIVE_NODE_TYPES.indexOf(e.toUpperCase())||
c&&c.style&&c.style.backgroundImage||c.children&&0===c.children.length&&c.innerText&&0<c.innerText.length))d=c;else{g=c;var e=b,h=v.getNodeName(c),q=[],n=c&&c.children,p=n&&n.length,s;if(n)for(var f=0;f<p;f++)s=n[f],s.children&&0===s.children.length&&-1===a.indexOf(s.nodeName.toUpperCase())&&q.push(s.nodeName);var F;try{F=a.concat(q),v.isWindow(c)?d="HEAD"===v.getNodeName(m.contextNode.parentNode)?Y(m.contextNode.parentNode.ownerDocument.body,F):Y(null,F):("IFRAME"===h&&(c=c.contentWindow.document),
d=Y(c,F))}catch(u){}d=e(d)}}else d=null;return d};return{find:b,getClosestContainerName:function(){return v.getNodeName(g)}}},Jb=function(){var g,a=!1,b={status:k.RENDER.STATUS.OTHER,details:k.RENDER.DETAILS.OTHER},c={status:k.RENDER.STATUS.DETECTED,details:k.RENDER.DETAILS.ENVIRONMENT},d=function(){a=!0},e=function(a){var b={},c=r.getDoc(),d=function(e){var q=e&&e.type;if("readystatechange"===q&&"complete"===e.target.readyState||"load"===q)b.status=k.RENDER.STATUS.DETECTED,b.details=g.build(a,{eventType:q}),
h(b),x.removeEvent(a,"load",d),x.removeEvent(c,"readystatechange",d)};"complete"===c.readyState?(b.status=k.RENDER.STATUS.DETECTED,b.details=g.build(a,{eventType:"readystatechange"})):(x.addEvent(a,"load",d),x.addEvent(c,"readystatechange",d));return b},h=function(c){var d=new Yb(c),e=c.status||b.status;c=c.details||b.details;a&&e===k.RENDER.STATUS.DETECTED?(d=d.status(),l.trigger("addThrottledOutputItem","rend",e),l.trigger("addThrottledOutputItem","renddet",c),l.trigger("addThrottledOutputItem",
"rmeas",d)):(d=d.status(),l.trigger("addOutputItem",{output:e},"rend"),l.trigger("addOutputItem",{output:c},"renddet"),l.trigger("addOutputItem",{output:d},"rmeas"))},q=function(){l.on("primaryadfound",function(a){var c,d=b,q=new Xb,f=!0,u=function(){I();f&&(c=r.setInterval(I,500))},l=function(){var a=r.getWindow().mraid,b=function(){x.removeEvent(a,"ready",b);g.appendCode(k.RENDER.DIAGNOSTIC.MRAID_READY);u()};"loading"===(a.getState&&a.getState())?x.addEvent(a,"ready",b):(g.appendCode(k.RENDER.DIAGNOSTIC.MRAID_DEFAULT),
u())},I=function(){var b=a&&a.getAdNode(),u=q.find(b);if(v.isNodeXDomainIframe(u))c?r.clearInterval(c):f=!1,d=e(u);else if(u){var b=!1,l=v.getRect(u);u&&"IMG"===v.getNodeName(u)&&(b=0===u.naturalWidth||0===u.naturalHeight);!b&&l.width>=k.RENDER.WIDTH_THRESHOLD&&l.height>=k.RENDER.HEIGHT_THRESHOLD&&(d.status=k.RENDER.STATUS.DETECTED,c?r.clearInterval(c):f=!1);d.details=g.build(u)}else d.details=q.getClosestContainerName()||g.getAdNodeName(b)||d.details;h(d)};t.isMraid()?l():u()})};return{start:function(){g=
new Zb;l.on("impressionsent",d);t.isAvid()||t.isOmid()||t.isVideo()?h(c):(h(b),q())}}},Zb=function(){var g=!1,a=[],b=function(a){var b;if(v.isWindow(a))b="WINDOW";else if(v.isNodeXDomainIframe(a))b="XIFRAME";else try{b=v.getNodeName(a)}catch(e){}return b};return{build:function(c,d){var e=c&&v.getRect(c),h=b(c),q=c&&c.style&&c.style.backgroundImage,n=c.innerText&&0<c.innerText.length,n=c.children&&0===c.children.length&&n,p=[h,e&&e.width>=k.RENDER.WIDTH_THRESHOLD&&e.height>=k.RENDER.HEIGHT_THRESHOLD?
k.RENDER.DIAGNOSTIC.QUALIFIED_SIZE:k.RENDER.DIAGNOSTIC.UNQUALIFIED_SIZE];!c||"IMG"!==h||0!==c.naturalWidth&&0!==c.naturalHeight||p.push(k.RENDER.DIAGNOSTIC.BROKEN_IMAGE);q&&p.push(k.RENDER.DIAGNOSTIC.STYLED_NODE);n&&p.push(k.RENDER.DIAGNOSTIC.TEXT_NODE);d&&d.eventType&&("readystatechange"===d.eventType?p.push(k.RENDER.DIAGNOSTIC.DOCUMENT_READY):"load"===d.eventType&&p.push(k.RENDER.DIAGNOSTIC.LOAD_FIRED));g&&f(a).each(function(a,b){p.push(b)});return p.join(".")},getAdNodeName:b,appendCode:function(b){a.push(b);
g=!0}}},Yb=function(g){return{status:function(){var a=g.details||k.RENDER.DETAILS.OTHER,b=g.status||k.RENDER.STATUS.OTHER,c=a.split(".")[0],d="env"===a,e=c&&-1!==k.RENDER.CREATIVE_NODE_TYPES.indexOf(c.toUpperCase()),c="XIFRAME"===c,h=-1!==a.indexOf("tn"),a=-1!==a.indexOf("sn");return d?b:e||c||h||a?"1":"0"}}},Z=function(){return{applies:function(g,a){var b=l.request("mobileApp");return(g.browserIs(k.BROWSERS.CHROME)||g.isAndroidWebViewBrowser()||g.browserIs(k.BROWSERS.MSEDGE))&&!b.isMobileAppEnvironment()&&
g.hasIntersectionObserver()&&a.on("chromeNativeIO")}}},Nb=function(){var g,a,b=!1,c=l.request("mPage"),d=function(){!b&&a&&g&&!c.isHidden()&&(b=!0,l.trigger("sendDt",k.DT_CODES.LARGE_BILLABLE))};l.on("primaryadfound",function(a){g=a.getDims().area()>=k.MRC_LARGE_AD_SIZE;d()});l.on("impressionsent",function(){a=!0;d()});c.onHiddenChange(d)},sb=function(){var g=[],a={},b={percentInView:"piv",sl:"vs",reason:"r",width:"w",height:"h"};l.on("newScreenEvent",function(c){c=f(c).selectProperties(f(b).keys());
c=f(c).asStrings();var d=f(c).compareTo(a);d&&(d.t=t.getTagTime(),g.push(d));f(a).mixin(c)});return{toString:function(){return f(g).toION(b)}}},ea=function(){var g=new $b,a=new E;return f(g).mixin(a)},E=function(){var g={},a={},b=function(b,c,h){if((b=a[b])&&0!==b)return h&&(b=b.slice(0,1)),f(b).each(function(a,b){c.apply({},b)}),!0},c=function(a,b,c){g[a]=g[a]||new da;g[a].push(b,c)};return{on:function(a,e){var h={};e?h[a]=e:h=a;f(h).each(c);f(h).each(b)},once:function(a,e){b(a,e,!0)||c(a,e,1)},
trigger:function(a){var b=f(arguments).toArray();b.shift();var c;(c=g[a])&&c.run.apply({},b)},persistentTrigger:function(b){var c=f(arguments).toArray();c.shift();var h=b;a[h]=a[h]||[];a[h].push(c);(h=g[b])&&h.run.apply({},c)}}},fa=function(){var g=function(a,c,d){var e,h=c.length,q=v.isWindow(a)?a.frames:v.getChildWindowsOf(a);d&&d(a,c);if(q&&q.length){for(a=0;a<q.length;a++)(e=q[a])&&v.isWindow(e)&&(c[h]=a,g(e,c,d));c.pop()}},a=function(a,c){try{g(c||top,[0],a)}catch(d){}};return{traverse:a,getFrames:function(b,
c){var d=[];a(function(a){var b;if(b=v.isWindow(a)){var c=!0;for(b=0;b<d.length;b++)if(d[b]===a){c=!1;break}b=c}b&&d.push(a)},c);return f(d).filter(b)}}},da=function(){var g=[];return{push:function(a,b){var c=0;b=b||Number.MAX_VALUE;g[g.length]=function(){c<b&&(c++,a.apply({},arguments))}},run:function(){var a=arguments;f(g).each(function(b,c){c.apply({},a)})}}},ab=function(g){var a={};return{doEligibleJobs:function(b){f(g).each(function(c,d){var e=d&&d.getTime();f.isDef(e)&&b>=e&&!a[e]&&(d.getTask().call(),
a[e]=!0)})}}},ac=function(){var g,a=new va,b=function(b,d,e,h){var q,n,p,s;if(JSON&&JSON.parse)try{q=JSON.parse(b.data),n=b.source,s=f.noop,d(q)&&(h&&(p=h(n,q))&&(s=function(){a.send(function(){return p},n)}),e(b,q,s))}catch(g){q&&l.trigger("error",k.ERROR_CODES.MESSAGE_LISTENER)}};return{listen:function(a,d,e){g=function(h){b(h,a,d,e)};x.addEvent(w,"message",g)},stop:function(){g&&x.removeEvent(w,"message",g);g=null}}},va=function(){var g=function(a){return f(a).isObj()?[a]:(new fa).getFrames(a)},
a=function(a){return f(a).mapToObj(function(a,b){var e;f.isFunction(b)||(e={},e[a]=b);return e})};return{send:function(b,c){if(JSON&&JSON.stringify){var d=g(c);f(d).each(function(c,d){var q;q=f.resolve(b,d)||{};q.sentTime=r.now();q=a(q);d.postMessage(f(q).JSONStringify(),"*")})}}}},bc=function(g,a){return{onAll:function(b){var c={};f(a).each(function(d,e){g.on(e,function(){c[e]=1;f(c).keys().length===a.length&&(c={},b())})})}}},nb=function(g){var a=0,b={},c=function(b,c,d){if(f.isUndef(b.output))throw Error("item with id "+
c+' must have "output" method');this.item=b;this.id=c||++a;this.props=d||{};this.output=function(){var a=f.resolve(b.output);this.props.asION&&(a=f(a).toION());return a}},d=function(a){var c,d,e=[];for(c in b)b.hasOwnProperty(c)&&(d=a(c,b[c]))&&e.push(d);return e},e=function(a,d,e){e=e||d;e="string"!==typeof e?e:{};var p=function(a,d,e){a=new c(a,d,e);b[a.id]=a};f(a.output).isObj()&&!e.asION?f(a.output).each(function(a,b){p({output:b},a,e)}):p(a,d,e)};g.on("addOutputItem",function(a,b,c){e(a,b,c)});
return{addItem:e,filterOutput:function(a,b){return d(function(c,d){var e=d.props,g;a(e)&&(g=d.output(),e.encode&&(c=encodeURIComponent(c),g=encodeURIComponent(g)),f.isFunction(b)?b(c,g):b[c]=g)})},iterate:d,cleanup:function(){d(function(a,c){c.props.flagForRemoval&&delete b[a]})},getItem:function(a){return b[a]}}},$b=function(){var g={},a=function(a,c){g[a]=c};return{request:function(a){var c,d=g[a],e=f(arguments).toArray();e.shift();f.isUndef(d)||(c=f.isFunction(d)?d.apply({},e):d);return c},provide:function(b,
c){c?g[b]=c:f(b).each(a);return c}}},Db=function(){return{createInstance:function(g,a,b,c){return t.isDomless()?new cc:new dc(g,a,b,c)}}},dc=function(g,a,b,c){var d;return{collect:function(){var a=g.find(),h=a.getOutOfViewReasons(),q=b.isHidden(),n=c.isDeviceTypeGroupMobile()&&d?d:H(v.calcWinDims()),p=a.getDims();d=n;if(!a.hasAd()||!n.hasValidDims()||!p.hasValidDims())return{viewState:k.NA,posViewState:k.NA,embedded:t.embedded,winDimensions:n,adDimensions:p};!0===q&&h.push(k.OUT_OF_VIEW_REASONS.FOCUS);
return{winDimensions:n,adDimensions:p,containerDimensions:a.getContainerDims(),method:a.getDetectionMethod(),viewState:h.length?k.OUT_OF_VIEW:a.getViewState(),percentInView:a.getPercentInView(),reason:h.join("."),obstructed:f.stringifyTriState(a.isObstructed()),isHidden:f.stringifyTriState(a.isHidden()),tabHidden:f.stringifyTriState(q),posViewState:a.getViewState(),adCompCount:a.getComponentCount(),sliceStatus:a.getSliceStatus()}}}},cc=function(){return{collect:function(){return{}}}},ec=function(g){g=
g||f.identity;var a=[],b=r.now(),c=function(){var c=r.now();a.length&&(a[a.length-1].duration+=c-b,b=c)};return{clear:function(){c();a=[]},fastForward:c,get:function(){return a},hasAlwaysBeen:function(b){return 1===a.length&&a[0].state===b},addState:function(b){var e=a[a.length-1];b=g(b);c();0!==a.length&&b===e.state||a.push({state:b,duration:0})}}},wa=function(g,a){var b=g||1,c=0,d=0,e,h=0;return{start:function(){0===c%b&&(e=r.now())},stop:function(){var q=e||a;0===c%b&&(h+=r.now()-q,d++);c++},getTime:function(){return h},
getCount:function(){return d}}},xa=function(){var g,a=0,b=0,c=new E(!0),d=function(){g&&(a++,c.trigger(a),b>a?r.execAtEndOfThread(d):e())},e=function(){g=!1;a=0};return{onTick:function(a,d){var e=f.collapseArgsIntoHash(a,d);f(e).each(function(a,c){a=parseInt(a);b=a>b?a:b});c.on(e)},start:function(){g||(g=!0,r.execAtEndOfThread(d))},kill:e,isActive:function(){return g}}},fc=function(g,a){var b,c=a,d=function(a){b||(a&&g(),b=r.setInterval(g,c))},e=function(a){a&&g();r.clearInterval(b);b=null};return{start:d,
stop:e,updateFrequency:function(a,b){c=a;e();d(b)}}},ba=function(g){var a,b,c=0,d=t.getTagTime(),e=0,h=!1;return{getTotalTime:function(){return e},stop:function(){c=0;d=t.getTagTime();h=!1},mark:function(){a=h?t.getTagTime()-d:0;c+=a;c>=g&&(b=c-a<g,e+=b?c:a);d=t.getTagTime();h=!0}}},U=function(g,a){var b=g||m.adsafeSrc||m.requrl;b&&0===b.indexOf("http")||(b=m.protocol+"://"+b);var b=/((http|https):\/\/(([^\/\.]*)\.([^\/]*)))(?:\/(.[^?]*)\??(.+)?)*/.exec(b),c=b[1],d=b[2],e=b[3],h=b[4],q=b[5],n=g?b[6]:
"",p=a?b[7]:"",s={},y=function(a){f.isDef(a)&&(h=a);return h},k=function(a){f.isDef(a)&&(q=a);return q},u=function(a,b){return a+"="+f(b).toION()},p=p?p.replace(/&$/,""):"";return{appendToParamValue:function(b,c){var d,e;(d=s[b])?s[b]=d+c:a&&p.length&&(d=p.split(b),e=1<d.length)&&(e=d[1].split("&")[0],d=[d[0],e].join(b),p=p.replace(d,d+c))},fullDom:c,hostname:e,sub:y,master:k,setParam:function(a,b){s[a]=s[a]||{};f(b).isObj()?f(s[a]).mixin(b):s[a]=b},path:function(a){n=a},toString:function(){var a=
y()?y()+".":"",b=n?"/"+n:"",c;p||!f(s).isEmpty()?(c=f(s).isEmpty()?"":f(s).stringify(u,"&"),c="?"+p+(p&&c?"&"+c:c)):c="";return d+"://"+a+k()+b+c}}},Ub=function(){var g=function(a){var c=[];f(a).each(function(a,b){400>=c.concat(b).join("").length&&c.push(b)});return c},a=function(a,c){var d;c&&c.id&&(d=c.id.replace(/[^\w-_.>\/]/g,""));return d};return function(){var b,c;try{if(t.friendly&&!t.isMobileApp())if(b=l.request("adSlotIds"))c=b;else{var d,e;if(d=v.getOurNodeInTop()){var h=v.getAncestorNodes(d);
e=f(h).map(a)}if(b=e=e&&g(e))l.trigger("addOutputItem",{output:b},"slid",{type:k.DT_CODES.ADTALK,asION:!0}),l.provide("adSlotIds",b),c=b}return c}catch(q){l.trigger("error",k.ERROR_CODES.AD_SLOT_ID)}}()};L("AdRefreshDetection",[],function(){var g=[30,45,60,90],a={start:function(){var a=this,c=m.asid,d=this.getChanId();c&&d&&(this.recordAdSlotImpression(c,d,function(c,d){c?l.trigger("error",k.ERROR_CODES.AD_REFRESH):a.sendRefreshSession(d)}),a.registerInternalViewabilityListener(d))},adRefreshIntervalIsValid:function(a){return-1!==
g.indexOf(a)},getChanId:function(){for(var a=m.reqquery.split("&"),c,d=/(\S+)=(\S+)/g,e=0;e<a.length;e+=1){d.lastIndex=0;var h=d.exec(a[e]);h&&3===h.length&&"chanId"===h[1]&&(c=h[2])}return c},sendRefreshSession:function(a){l.trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,"ar",(0===a.refreshCount?"self":a.refreshSessionId)+"."+a.refreshCount)},recordAdSlotImpression:function(a,c,d){var e=r.getTop();a={requestTop:"recordAdSlotImpression",asid:a,adUnitId:c};window.addEventListener("message",function(a){if(/refreshSession/g.test(a.data))try{var b=
a&&a.data&&JSON.parse(a.data);d(null,b)}catch(c){d(c)}},!1);e.postMessage(JSON.stringify(a),"*")},registerInternalViewabilityListener:function(a){var c=this,d=m.adRefreshThreshold&&parseInt(m.adRefreshThreshold)||null,e=r.getTop();if(d&&this.adRefreshIntervalIsValid(d))l.on("sendDt",function(h,q){h===k.DT_CODES.PING&&q===d&&(r.execAtEndOfThread(function(){e.postMessage(JSON.stringify({requestTop:"refreshAd",adUnitId:a}),"*")}),c.sendAutoRefreshProp(d))})},sendAutoRefreshProp:function(a){l.trigger("addThrottledProp",
k.DT_SLOT.ENVIRONMENT,"ir",a);l.trigger("adSessionComplete")}};t.isRefreshable(function(b,c){var d;if(!b&&c)try{d=JSON.parse(c),d.isRefreshable&&d.adServerName&&a.start()}catch(e){l.trigger("error",k.ERROR_CODES.AD_REFRESH)}});return a},{tier:k.TIERS.ENVIRONMENT,applies:function(g,a,b){return b.isPossiblyRefreshable()}});var vb=function(){var g,a,b=function(a,b){-1!==b.indexOf("https")&&(b+="*");return b.replace(/^https?:\/\//,"")};return{isApplicable:function(a,b,e){return a.hasAncestorOrigins&&
a.hasAncestorOrigins()&&b.on("ancestor")&&e.xDomainIframe},isStarted:function(){return!!a},start:function(){try{g=r.getWindow().location.ancestorOrigins,a=!0}catch(b){l.trigger("error",k.ERROR_CODES.ANCESTOR_ORIGINS)}},getMyFrameDepth:function(){return g&&g.length||0},getTopDomain:function(){return f.last(g)},sendOriginList:function(){var a;a="ao:"+(g?f(g).map(b).reverse():[]).join(",");l.trigger("addOutputItem",{output:a},"tpiLookup",{type:k.DT_CODES.THIRD_PARTY,standalone:!0,encode:!0});l.trigger("sendDt",
k.DT_CODES.THIRD_PARTY)}}},Sb=function(g,a,b,c,d){var e=function(a,b,c){d.addItem({output:a+"."+b+"."+c},"ctpl")},h=function(d){try{a.diagnostic("c");var h=d.length,p=0,s=0;e(h,0,0);f(d).each(function(a,b){g.send(b.replace("%%CBS%%",c.getCacheBustId()),function(){e(h,p,++s)},!0);e(h,++p,s)})}catch(y){b.add(k.ERROR_CODES.AT_SEND)}};return{init:function(){try{var a=(new U).fullDom;"/"!==a.slice(-1)&&(a+="/");a+="tpl?asId="+m.asid;g.jsonp(a,h)}catch(c){b.add(k.ERROR_CODES.AT_INIT)}}}},Gb=function(g,
a,b,c){return{enabled:"true"===m.useBapiCallback,callback:function(a){b.trigger("sendDiag");try{"true"===m.accountForSadImps&&c.measure(a),m._onAPIResult&&m._onAPIResult(a)}catch(e){g.add(k.ERROR_CODES.BAPI_CALLBACK),b.trigger("sendDiag","bapiClient")}}}},kb=function(){return{createInstance:function(g,a,b,c){return t.isDomless()?new gc:new hc}}},hc=function(){var g=k.BROWSERS,a=function(a){return b()===a},b=function(){var a="u",b=r.getWindow();try{f.isDef(b.opera)&&f.isDef(b.opera.buildNumber)?a=
g.OPERA:f.isDef(b.mozInnerScreenY)?a=g.GECKO:f.isDef(b.chrome)&&f.isDef(b.chrome.csi)?a=g.CHROME:f.isDef(b.msWriteProfilerMark)&&f.isDef(b.crypto)?a=g.MSEDGE:f.isDef(b.attachEvent)||f.isDef(b.msCrypto)?a=g.IE:f.isDef(b.WebKitPoint)&&(a=g.WEBKIT)}catch(c){}return a},c=function(){var a=!1,b=r.getWindow();f.isDef(b.navigator)&&f.isDef(b.navigator.userAgent)&&(a=b.navigator.userAgent);return a};return{browserIs:a,hasIntersectionObserver:function(){return"function"===typeof IntersectionObserver},hasAncestorOrigins:function(){var a=
r.getWindow().location;return!(!a||!a.ancestorOrigins)},hasPostMessage:function(){var a=r.getWindow();return!(!a||!f.isFunction(a.postMessage))},getDocumentMode:function(){var a=r.getDoc();return a&&a.documentMode?a.documentMode:k.NA},getBrowserType:b,getUserAgent:c,params:function(){var c=b(),e;e=["{45EA75A0-A269-11D1-B5BF-0000F8051515}","{3AF36230-A269-11D1-B5BF-0000F8051515}","{89820200-ECBD-11CF-8B85-00AA005B4383}"];var h=k.NA,q=r.getDoc(),n=q.createElement("div");if(a(g.IE))try{if("-ms-ime-align"in
q.documentElement.style)h="11";else for(n.style.behavior="url(#default#clientcaps)",q=0;q<e.length&&!(h=n.getComponentVersion(e[q],"componentid").replace(/,/g,"."));q++);}catch(p){}e=h;h=k.NA;n=r.getWindow();f.isDef(n.navigator)&&f.isDef(n.navigator.appName)&&(h=n.navigator.appName.toLowerCase()[0]);return{br:c,abv:e,an:h}},isAndroidWebViewBrowser:function(){var a=c(),b=["SamsungBrowser","FB_IAB","Silk"],h=function(){return f(b).findFirst(function(b,c){return M.contains(a,c)})};return M.contains(a,
"Android")&&h()},getIOSVersion:function(){var a,b;(a=c())&&(a=a.match(/OS\s\d+/))&&0<a.length&&(b=(b=a.toString().match(/\d+/))&&0<b.length&&parseInt(b.toString()));return b}}},gc=function(){var g=function(){return!1},a=function(){return k.NA};return{getDocumentMode:a,getBrowserType:function(){return"u"},getIOSVersion:function(){},params:function(){return{br:"u",abv:a(),an:a()}},browserIs:g,getUserAgent:g,hasPostMessage:g,hasAncestorOrigins:g,hasIntersectionObserver:g,isAndroidWebViewBrowser:g}},
ob=function(){return{createInstance:function(g,a){return t.isDomless()?new ic(a):new jc(g,a)}}},jc=function(g,a){var b=function(a,b){var c,d,e=m.contextNode.parentNode;b=b||a;a=1<arguments.length?a:"script";c={script:['<script type="text/javascript" src="','">\x3c/script>'],iframe:['<iframe width="100%" height="100%" frameborder="0" vspace="0" hspace="0" scrolling="no" marginheight="0" marginwidth="0" src="','"></iframe>'],img:['<img src="','"/>']}[a];d=c[0]+b+c[1];"true"===m.forceAppend?"script"!==
a?(c=K.createElement("DIV"),c.innerHTML=d,e.appendChild(c.childNodes[0])):(c=K.createElement("SCRIPT"),c.src=b,e.appendChild(c)):K.write(d)},c=function(a,b,c){var d=!c&&x.getXHR2();d?(d.open("POST",a),d.onreadystatechange=function(){4===d.readyState&&200===d.status&&b&&b()},d.send()):(c=v.createImage(),b&&(c.onload=b),c.src=a)},d=function(a,b,c,d){var e=K.createElement("script");c=c||m.contextNode.parentNode;e.type="text/javascript";e.src=a;b&&(e.onload=b);d&&(e.setAttribute("defer",""),e.setAttribute("async",
""));f.isDef(c)&&c.appendChild(e)},e=function(a){f.isFunction(a)?a({iasImpId:m.asid}):a&&"string"===typeof a&&c(a,void 0,!0)},h=function(b,c,e,h){d(a.wrap(b,c,e,h))};l.on({addNode:b,send:c,exec:d,notify:e,jsonp:h});return{addNode:b,send:c,exec:d,notify:e,jsonp:h}},ic=function(g){var a=function(a,b){b=b||a;a=1<arguments.length?a:"script";l.request("omidVerificationClient")["script"===a?"injectJavaScriptResource":"sendUrl"](b,function(){})},b=function(a,b){a=encodeURI(a);l.request("omidVerificationClient").sendUrl(a.toString(),
b||function(){})},c=function(a,b){l.request("omidVerificationClient").injectJavaScriptResource(a,b||function(){})},d=function(a){f.isFunction(a)?a({iasImpId:m.asid}):a&&"string"===typeof a&&b(a)},e=function(a,b,d,e){c(g.wrap(a,b,d,e))};l.on({addNode:a,send:b,exec:c,notify:d,jsonp:e});return{addNode:a,send:b,exec:c,notify:d,jsonp:e}},t=function(){var g="undefined"===typeof window,a="undefined"!==typeof w&&"undefined"!==typeof top&&w!==top,b=function(){var a=!1;if(g)a=!0;else try{a=!!top.document}catch(b){}return a}(),
c=function(){return g||f.isDef(r.getWindow().mraid)},d=function(){return!g&&f.isDef(r.getWindow().mraid)},e=function(){var a=!1;if(!g)var b=(a=r.getWindow().inmobi)&&a.IASDocumentVideoBuffer,a=a&&b&&f.isFunction(b.addVideoEventListener),a=d()&&!!a;return a},h=function(){var a;if(!(a=-1!==m.mode.indexOf("jsvid"))){var b;a=!1;if(!g){var c=l.request("avidJsClient");if(c.isAvidAvailable())try{b=c.getAvidAdSessionContext(),a=b.mediaType===k.MEDIA_TYPE.VIDEO}catch(d){}}(b=a)||(b=l.request("omidVerificationClient"),
a=!1,c=l.request("omidAdSessionContext"),b&&c&&(a=c.mediaType===k.MEDIA_TYPE.VIDEO),b=a||e());a=b}return a},q=function(){return m.mobOrTab},n=function(a){return!1===f(m.customViewability).isArray()?!1:0<f(m.customViewability).filter(function(b,c){return M.contains(c.id,a)}).length},p=function(){return n("grpm")||m.use100v};return{embedded:a,friendly:b,isFriendlyToParent:function(a){var b,c;if(g)a=!0;else{try{c=U(a.document.referrer),b=c.hostname===a.location.hostname}catch(d){}a=b}return a},friendlyIframe:a&&
b,xDomainIframe:a&&!b,getTagTime:function(){return r.now()-m.birthdate},getPageTime:function(){var a=k.NA;!g&&f.isDef(w.chrome)&&f.isDef(w.chrome.csi)&&f.isFunction(w.chrome.csi)&&(a=r.round(chrome.csi().pageT));return a},isVideo:h,isMobileApp:c,isSpecifiedAd:function(){var a=!1;g||(a=(a=m._cl_adpath)&&f.isStr(a));return a},isAvid:function(){return!g&&f.isDef(r.getWindow().avid)},isOmid:function(){var a=l.request("omidVerificationClient");return a&&a.isSupported()},isOmidNative:function(){return(new ca).accepts()},
isOmidForWeb:function(){return(new ya).accepts()},isDomless:function(){return g},isAvidNative:function(){var a=!1;if(!g){var b=l.request("avidJsClient");b.isAvidAvailable()&&(a=b.getAvidAdSessionContext().avidAdSessionType,a=a===k.AVID.AD_SESSION_TYPE.MANAGED_DISPLAY||a===k.AVID.AD_SESSION_TYPE.MANAGED_VIDEO)}return a},isBustedIframe:function(){var a=!1;g||(a=void 0!==ga());return a},isMraid:d,isSafeFrame:function(){var a=!1;g||(a=f(r.getWindow().$sf).isObj(!1)&&f(r.getWindow().$sf.ext).isObj(!1));
return a},isInMobiMraidVideo:e,isDeviceTypeGroupMobile:q,usesIASFullyInViewCustomMetric:function(){return n("fiv")||m.use100v},isNativo:function(){var a=!1;g||(a=(a=m._cl_adpath)&&M.contains(a,".ntv"));return a},usesGroupMCustomMetric:p,isCeltra:function(){var a=!1;g||(a=za().isApplicable());return a},usesGroupMCustomMetricMobilePassThru:function(){return p()&&q()},usesZeroPivCustomMetric:function(){return!1===f(m.customViewability).isArray()?!1:0<f(m.customViewability).filter(function(a,b){return f(b.thresholds).findFirst(function(a,
b){return 0===b.piv})}).length},isRefreshable:function(a){try{var b=r.getTop();window.addEventListener("message",function(b){/isRefreshable/g.test(b.data)&&a(null,b&&b.data)},!1);b.postMessage(JSON.stringify({requestTop:"isRefreshable"}),"*")}catch(c){a(c)}},isPossiblyRefreshable:function(){return!g&&!c()&&!h()&&a&&"jload"===m.mode}}}(),x={addEvent:function(g,a,b,c){f.isDef(g.addEventListener)?"mouseenter"===a?g.addEventListener("mouseover",x.mouseEnter(b),c):"mouseleave"===a?g.addEventListener("mouseout",
x.mouseEnter(b),c):g.addEventListener(a,b,c):f.isDef(g.attachEvent)&&("DOMContentLoaded"===a&&(a="load"),g.attachEvent("on"+a,b))},removeEvent:function(g,a,b){f.isDef(g.removeEventListener)?("mouseenter"===a?(a="mouseover",b=x.mouseEnter):"mouseleave"===a&&(a="mouseout",b=x.mouseEnter),g.removeEventListener(a,b)):f.isDef(g.detachEvent)&&g.detachEvent("on"+a,b)},mouseEnter:function(g){var a=this;return function(b){var c=b.relatedTarget;this===c||a.isAChildOf(this,c)||g.call(this,b)}},isAChildOf:function(g,
a){if(g===a)return!1;for(;a&&a!==g;)a=a.parentNode;return a===g},getStyle:function(g,a,b){var c="",d=K.defaultView&&K.defaultView.getComputedStyle;b=b||"";d?c=(g=K.defaultView.getComputedStyle(g,b))?g.getPropertyValue(a):c:g.currentStyle&&(a=a.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()}),c=g.currentStyle[a]);return c},getXHR2:function(g,a){var b,c;f.isDef(w.XMLHttpRequest)?(c=new XMLHttpRequest,"withCredentials"in c&&(b=c)):f.isDef(XDomainRequest)&&(b=new XDomainRequest);return b},whenReady:function(g,
a){if(t.isDomless())r.setTimeout(function(){g()},50);else{var b=a||(t.xDomainIframe?K:r.getTop().document),c=function(a){var c=r.setInterval(function(){b.body&&(r.clearInterval(c),a())},50)},d=this;(function(a){var h=function(){a(!0)};f.isFunction(K.addEventListener)?"complete"==b.readyState||"loaded"==b.readyState||"interactive"==b.readyState?r.execAtEndOfThread(h):d.addEvent(b,"DOMContentLoaded",h,!1):c(a)})(g)}},isSandboxed:function(g){var a,b=r.getWindow(),c=!1;if("sandbox"in r.getDoc().createElement("iframe")){try{a=
b.frameElement}catch(d){}if(a)g=a.hasAttribute("sandbox");else{a=!1;b=r.getDoc();if(g.browserIs(k.BROWSERS.CHROME))try{b.domain="hol@#3+~"}catch(e){/Assignment is forbidden for sandboxed iframes/.test(e.message)&&(a=!0)}g=a}c=g}return c},styleElement:function(g,a){if(g&&f(g.style).isObj()&&f(a).isObj()){var b="";f(a).each(function(a,d){b+=a+": "+d+" !important;"});g.style.cssText=b}},nodeIsAbsolutelyPositioned:function(g){return"absolute"===x.getStyle(g,"position")||g.style&&"absolute"===g.style.position}},
$=function(g){var a,b=$.callTypeCounter,c=[k.DT_CODES.ADTALK],d={UNLOAD:-1,ADTALK:-2,VIEWABILITY_READY:-3,VIDEO_EVENTS:-4,DIAGNOSTIC:-5,THIRD_PARTY:-6,QUARTILE_FULLY_INVIEW:-7,LARGE_BILLABLE:-8,SCA:-10},e=function(){var a={},b=k.DT_CODES;f("UNLOAD ADTALK VIEWABILITY_READY VIDEO_EVENTS DIAGNOSTIC THIRD_PARTY QUARTILE_FULLY_INVIEW LARGE_BILLABLE SCA".split(" ")).each(function(c,e){a[b[e]]=d[e]});return a};a=function(){var a=e()[g],d=b&&b[g];f.isDef(d)&&0!==d&&f(c).contains(g)&&(a=a+"."+d);d=b[g];b[g]=
f.isDef(d)?d+1:1;return a}();return{callType:g,enumerator:a}};$.callTypeCounter={};var Fb=function(g,a,b,c,d,e,h,q){var n=0,p=0,s=!1,y=function(a,e,q,g,y,F){q=q||!b.on("postDts");var t=a===k.DT_CODES.DIAGNOSTIC||a===k.DT_CODES.ADTALK||a===k.DT_CODES.MACRO||a===k.DT_CODES.SCA||a===k.DT_CODES.XSCA||a===k.DT_CODES.EXTERNAL||a===k.DT_CODES.LARGE_BILLABLE;if(c.impressionIsIdentifiable()&&(t||"n"!==h.getCurrentLoc()))try{var v=m.dtBaseURL,w=new U(v,!0),R=r.now();l.trigger("preSendDt",a);v||(w.path("dt"),
b.on("usedtdomain")&&w.sub("dt"));u(w,a,e);y&&y.field&&w.setParam(y.field,y.value);g||J(w,a);l.trigger("send",w,function(){p+=1;n=r.now()-R;f.isFunction(F)&&F()},q);a===k.DT_CODES.UNLOAD&&(s=!0);d.cleanup()}catch(N){__IntegralASDiagnosticCall("dt-"+a,N),l.trigger("error",k.ERROR_CODES.PHONE_HOME)}};g=function(){s||y(k.DT_CODES.UNLOAD,-1,!0)};var F=function(a,c){var d={bapi:"a",bapiClient:"b",jload:"c",jss:"d",jsi:"e"},e=m.mode,d=d[a]||d[e];b.on(c||e+"Diag")&&d&&y(k.DT_CODES.DIAGNOSTIC,-5,!0,!0,{field:"bkp",
value:d})},u=function(a,b,e){var h=new $(b);e=f.isDef(e)?e:h.enumerator;a.setParam("asId",m.asid);e={c:c.getCacheBustId(),pingTime:e,time:t.getTagTime(),type:b};d.filterOutput(function(a){var c=a.minDt&&(!a.type||a.type===b);c&&a.oneTime&&(a.flagForRemoval=!0);return c},e);a.setParam("tv",e)},J=function(c,g){var f,s={};d.filterOutput(function(a){return a.standalone&&!a.minDt&&a.type===g},function(a,b){c.setParam(a,b.replace("%3A",":"))});h.fastForward();if(g===k.DT_CODES.CUSTOM||g===k.DT_CODES.UNLOAD||
g===k.DT_CODES.VIDEO_EVENTS||g===k.DT_CODES.FULLY_INVIEW||g===k.DT_CODES.PING||g===k.DT_CODES.VIEWABILITY_READY||g===k.DT_CODES.ADTALK)s.clog=q,t.isVideo()&&(f=t.isOmid()&&!t.isOmidForWeb()?"omidVideoEventsString":"videoEventsString",(f=l.request(f))&&!f.isEmpty()&&(s.ve=f));g===k.DT_CODES.UNLOAD&&(s.ndt=p);-1!==m.mode.indexOf("jsvid")&&(s.vv=l.request("videoVersion"));s.NULL1=b.output();s.NULL2=h.stringify(10);s.em=t.embedded;s.fr=t.friendly;s.e=a.toString();s.tt=m.mode;s.dtt=n;d.filterOutput(function(a){var b=
!a.standalone&&!a.minDt&&(!a.type||a.type===g);b&&a.oneTime&&(a.flagForRemoval=!0);return b},s);c.setParam("tv",s);c.setParam("br",e.getBrowserType())};l.on({sendDt:function(a,b,c){y(a,f.resolve(b),void 0,void 0,void 0,c)},sendMinDt:function(a,b){y(a,b,void 0,!0)},sendDiag:F,updateDtCount:function(){p++},unload:g});return{send:y,unload:g,diagnostic:F,setViewabilityMod:function(a){}}},H=function(g){var a={},b=!1,c=function(){var a=1===g.nodeType?v.nodeIsHidden(g):0===g.width||0===g.height;return b?
!1:a},d=function(){var b={};f(a).each(function(a,c){b[a]=r.round(c)});return b},e=function(a){return f.isNumeric(a)||f.isUndef(a)},h=function(){return r.round(a.width)*r.round(a.height)};(function(){var b;g!==w.parent&&(1!==g.nodeType?a=g:f.isDef(g.getBoundingClientRect)&&(b=v.getRect(g),f(a).mixin({x:f.useIfDef(b.x)||b.scrX,y:f.useIfDef(b.y)||b.scrY,scrX:b.scrX,scrY:b.scrY,width:b.width,height:b.height})))})();return{hasValidDims:function(){return e(a.scrX)&&e(a.scrY)&&f.isNumeric(a.width)&&f.isNumeric(a.height)},
toString:function(){var a=d();return[a.scrX,a.scrY,a.width,a.height].join(".")},getRounded:d,set:function(b,c){a[b]=c},isHidden:c,treatAsPlaceholder:function(){b=!0},area:h,isMrcLarge:function(){return h()>=k.MRC_LARGE_AD_SIZE},isOneByOne:function(){return c()&&1>=h()}}},v={findElementsWithSize:function(g){var a=[],b=function(c){1>v.getNodeArea(c)?f(c.children).each(function(a,c){b(c)}):a.push(c)};b(g);return a},nodeIsHidden:function(g){var a=this.getRect(g),b=0!==parseInt(x.getStyle(g,"width"))&&
0===a.width,a=0===a.width||0===a.height;g="hidden"===x.getStyle(g,"visibility");return b||a||g},calcWinDims:function(){var g,a,b;try{a=v.browserWindowPosition(),b=v.windowSize(),g={scrX:r.round(a.scrX),scrY:r.round(a.scrY),width:r.round(b.width),height:r.round(b.height)}}catch(c){l.trigger("error",k.ERROR_CODES.GET_WIN_DIMENSIONS),g={}}return g},windowSize:function(){var g={},a,b;if(t.isDomless())return{width:0,height:0};if(t.friendly)if(a=top.document,b=a.documentElement,a=a.body,f.isDef(top.innerWidth))g.width=
top.innerWidth,g.height=top.innerHeight;else if(f.isDef(b.clientWidth))g.width=b.clientWidth,g.height=b.clientHeight;else if(f.isDef(a.clientWidth))g.width=a.clientWidth,g.height=a.clientHeight;else throw g.width=g.height=0,"";else f.isDef(w.outerWidth)&&(g.width=w.outerWidth,g.height=w.outerHeight);return g},browserWindowPosition:function(){var g=0,a=0;f.isDef(w.screenX)?(g=w.screenX,a=w.screenY):f.isDef(w.screenLeft)&&(g=w.screenLeft,a=w.screenTop);return{scrX:g,scrY:a}},getNodeArea:function(g){var a=
-1;g&&(g=v.getRect(g),a=g.width*g.height);return a},getRect:function(g){var a={},b=v.browserWindowPosition();g=g.getBoundingClientRect();f.isUndef(g.x)&&(a.x=g.left,a.y=g.top);f.isUndef(g.width)&&(a.width=g.right-g.left,a.height=g.bottom-g.top);f(a).mixin(g,!0);a.scrX=b.scrX+a.x;a.scrY=b.scrY+a.y;return a},getIeDimObj:function(g){g=g.document;return g.documentElement&&f.isDef(g.documentElement.clientWidth)&&g.documentElement||g.body},getPlaceholderSpan:function(){var g=K.createElement("span");f(g.style).mixin({width:"0px",
height:"0px",display:"block",overflow:"hidden",visibiility:"hidden"});g.innerHTML=".";return g},createImage:function(){var g=t.friendly&&r.getTop().Image;return f.isFunction(g)?new g:new Image},createHiddenIframe:function(g){var a=r.getDoc().createElement("iframe"),b={width:"0px",height:"0px",border:"0",position:"absolute",top:"-10000px",left:"-10000px"};x.styleElement(a,g?{display:"none"}:b);return a},tagNameIs:function(g,a){return g.tagName.toUpperCase()===a.toUpperCase()},getClippedDimensions:function(g,
a){var b,c,d,e=1E4,h=1E4;b=x.nodeIsAbsolutelyPositioned(g);d=!v.tagNameIs(g,"OBJECT");if(null!==g.parentNode&&!b&&d&&!v.tagNameIs(a,"BODY")){d=g;do d=d.parentNode,b=!v.tagNameIs(d,"OBJECT"),c="inline"!==x.getStyle(d,"display"),b&&c&&(b=v.getRect(d),e=b.width<e?b.width:e,h=b.height<h?b.height:h);while(d.parentNode!==K&&d!==a)}return{width:r.round(e),height:r.round(h)}},findChildWithLargestContent:function(g,a){var b=l.request("mobileApp").isMobileAppEnvironment(),c=function(a){for(var c=a;a.parentNode!==
g&&"inline"!==x.getStyle(a.parentNode,"display");){var d;if(!(d=!b)){d=a.parentNode;var e=!0;if("visible"===x.getStyle(d,"overflow")||"visible"===x.getStyle(d,"overflowX")&&"visible"===x.getStyle(d,"overflowY"))e=!1;d=e}d&&(c=a.parentNode);a=a.parentNode}return c},d=null,e=function(a){var b,c,d=null,e=-1;if(a.length)for(b=0,c=a.length;b<c;b++){var f=a[b],k=v.getNodeArea(f),u;if(u=k>e){u=void 0;if(u=f.parentNode===g)if(u=void 0,u="DIV"===f.nodeName)if(u=void 0,u=""===f.style.backgroundImage){var l=
u=void 0,r=f.childNodes;for(u=0;u<r.length;u++)1===r[u].nodeType&&(l=!0);u=!l}u=!u}u&&(d=f,e=k)}d&&(d.hasValidSizeForMobileApp=1<e);return d}(function(b){var c,d,e,g,f=[],k=a||"iframe img a object embed div".split(" ");c=0;for(d=k.length;c<d;c++){e=k[c].toLowerCase();var u=b.getElementsByTagName&&b.getElementsByTagName(e);if(u&&u.length)for(e=0,g=u.length;e<g;e++)f.push(u[e])}return f}(g));e&&(d=c(e),d.hasValidSizeForMobileApp=e.hasValidSizeForMobileApp);return d},screenSize:function(){if(t.isDomless())return{width:0,
height:0};var g={width:-1,height:-1};try{f.isDef(w.screen)&&(g={width:w.screen.width,height:w.screen.height})}catch(a){}return g},calcMonDims:function(){var g=f(v.screenSize()).mixin({scrX:0,scrY:0});f.isDef(screen.availLeft)&&(g={scrX:w.screen.availLeft,scrY:w.screen.availTop,width:w.screen.availWidth,height:w.screen.availHeight});return g},getOurIFrameInTop:function(){for(var g,a=r.getTop(),b=r.getWindow();b!=a;)g=b,b=g.parent;return g},getOurNodeInTop:function(){var g;t.friendly&&(g=t.embedded?
(g=v.getOurIFrameInTop())&&g.frameElement:m.contextNode);return g},getAncestorNodes:function(g){var a=[],b=g.ownerDocument&&g.ownerDocument.documentElement;if(b)for(;g.parentNode!==b;)a.push(g),g=g.parentNode;return a},getTagsNamed:function(g,a){var b,c=a||r.getDoc();try{b=c.getElementsByTagName(g)}catch(d){b=null}return b},containsScriptTagWithSrc:function(g){return!!f(v.getTagsNamed("script")).findFirst(function(a,b){var c=b.src;return f.isFunction(g)?g(c):c===g})},contains:function(g,a){var b=
!1;try{b=f.isDef(g)&&f.isFunction(g.contains)&&g.contains(a)}catch(c){}return b},querySelector:function(g,a){var b;try{b=g.querySelector(a)}catch(c){b=null}return b},nodeIsInWindow:function(g,a){return g.ownerDocument&&(g.ownerDocument.defaultView||g.ownerDocument.parentWindow)===a},setAttributeOf:function(g,a,b){g&&f.isFunction(g.setAttribute)&&g.setAttribute(a,b)},removeAttributeOf:function(g,a){g&&f.isFunction(g.removeAttribute)&&g.removeAttribute(a)},crossQuerySelector:function(g,a){var b,c,d=
[m.contextNode.parentNode,r.getDoc()];t.friendly&&d.push(r.getTop().document);if(a&&t.embedded)try{d.push(r.getWindow().frameElement.ownerDocument)}catch(e){}f(d).each(function(a,d){try{c=v.querySelector(d,g)}catch(e){}!b&&c&&(b=c)});return b},getNodeName:function(g){return g&&g.nodeName},isWindow:function(g){var a=!1;try{a=g&&"object"===typeof g&&"setInterval"in g}catch(b){a=!0}return!!a},getChildWindowsOf:function(g){var a=[];(g=v.getTagsNamed("iframe",g))&&(a=f(g).map(function(a,c){return c.contentWindow}));
return a},getFrameId:function(){var g=r.getWindow().frameElement;return g&&g.id},isViewportVisible:function(g,a){var b=g.innerWidth,c=g.innerHeight,d=b>a.width&&c>a.height;return b*c>a.width*a.height&&d},getTagName:function(g){return g.tagName.toLowerCase()},getAttribute:function(g,a){return g.getAttribute(a)},attributeMatches:function(g,a,b){g=g&&v.getAttribute(g,a);return b.test(g)},isImageTag:function(g){return g&&g.src&&v.tagNameIs(g,"img")},getDimensionFromStyle:function(g){var a,b=x.getStyle(g,
"width");g=x.getStyle(g,"height");b&&g&&(a={width:f.getNum(b),height:f.getNum(g)});return a},getDimensionFromAttributes:function(g){var a,b=v.getAttribute(g,"width");g=v.getAttribute(g,"height");b&&g&&(a={width:f.getNum(b),height:f.getNum(g)});return a},traverseAndFindFirstMatchingNode:function a(b,c){var d,e,h;if(c(b))e=b;else if(h=b.children)for(d=0;d<h.length&&!(e=a(h[d],c));d++);return e},getFirstChildElement:function(a){return a&&a.children&&a.children[0]},isClippable:function(a,b){var c=!0,
d="fixed"===x.getStyle(a,"position"),e="hidden"!==x.getStyle(b,"overflow")&&!d;t.isSpecifiedAd()&&(d||e)&&(c=!1);return c},getElementsDocument:function(a){return a.ownerDocument||a},getElementsWindow:function(a){var b=v.getElementsDocument(a);return b.defaultView||b.parentWindow||a},elementIsEmbedded:function(a){return v.getElementsWindow(a)!==r.getTop()},getParent:function(a){return a.parentNode||a.parent},isNodeXDomainIframe:function(a){var b=!1;if(a&&"IFRAME"===v.getNodeName(a))try{b=!a.contentWindow.document}catch(c){b=
!0}return b},isElement:function(a){return 1===a.nodeType}},lb=function(){var a={},b=function(b){f.isDef(a[b])?a[b]++:a[b]=1};l.on("error",function(a){a=f(a).isObj()?a.errorCode:a;b(a)});return{list:a,add:b,toString:function(){var b="",d;for(d in a)a.hasOwnProperty(d)&&(b+=d);return b},hasErrors:function(){for(var b in a)return!0;return!1}}},Lb=function(){return{createInstance:function(a,b){return t.isDomless()?new kc:new lc(a,b)}}},lc=function(a,b){var c=function(a){var b=[];if(a&&a instanceof Array)b=
f(a).map(function(a,b){return b.val}),b.push(m.adsafeSrc,m.requrl,m.reqquery);else throw Error("Unexpected data type in ExchangeParser.getUrlList");return b};return{parse:function(d){try{var e,h=c(d),q=h&&h.length&&h.join("|"),n=m.exchList;q&&(e=f(n).map(function(a,b){return 0<=q.indexOf(M.rot(b))?a:void 0}),e.length&&b.addItem({output:e.join(".")},"ex",{type:k.IMPRESSION_EVENT}))}catch(p){a.add(k.ERROR_CODES.EXCHANGE_PARSING)}}}},kc=function(){return{parse:function(a){}}},hb=function(){var a={},
b=function(b){var c;f.isUndef(a[b])&&(c=m.jsFeatures,a[b]=!1,-1!==c.indexOf(b)&&(c=RegExp(b+"(?=$|,)|"+b+":(?!,|$)(.?\\d*(?=,|$))").exec(c)))&&(c=c[1],a[b]=!c||c>100*r.random());return a[b]},c={es:"everySecond",sc:"usesca",ha:"usehaps"},d={},e=function(){var b,e;b=f(c).mapToObj(function(b,c){var d={};d[b]=f.fromBoolToNum(a[c]);return d});e=f(d).mapToObj(function(a,b){var c={};c[a]=f.fromBoolToNum(h(b));return c});e.gm=f.fromBoolToNum(t.usesGroupMCustomMetric());return f(b).mixin(e)},h=function(a){a=
m[a];return!0===a||"true"===a||f.isFunction(a)};f(c).each(function(a,c){b(c)});return{on:b,bootstrapOn:h,bootstrapperHas:function(a){a=f.isStr(a)?[a]:a;return f(a).map(function(a,b){if(f.isDef(m[b]))return 1}).length===a.length},getEnabledScriptUrl:function(a){var c=b("use"+a);a=m.sp_cdnScripts&&m.sp_cdnScripts[a];return c&&a},output:function(){return f(e()).toParams()}}},zb=function(a){return{calcInitialViewState:function(a,c){var d;d={IN_VIEW:65,OUT_OF_VIEW:25,PARTIAL_VIEW:30};var e={IN_VIEW:75,
OUT_OF_VIEW:25,PARTIAL_VIEW:50},h=k.NA;d=c?d:e;f.isDef(a)&&a!==k.NA&&-1<a&&(h=a>=d.IN_VIEW?k.IN_VIEW:a<=d.OUT_OF_VIEW?k.OUT_OF_VIEW:a>=d.PARTIAL_VIEW?k.PARTIAL_VIEW_PLUS:k.PARTIAL_VIEW_MINUS);return h},calcPercentInView:function(a,c,d,e){var h=0,q=a;a.hasValidDims()&&!a.isHidden()&&(f([c,d,e]).each(function(a,b){if(b.hasValidDims()){var c=q.getRounded(),d=b.getRounded(),e=Math.max(c.scrX,d.scrX),h=Math.max(c.scrY,d.scrY),f=Math.min(c.scrX+c.width,d.scrX+d.width),c=Math.min(c.scrY+c.height,d.scrY+
d.height),f=f-e,c=c-h;q=H({scrX:e,scrY:h,width:0<f?f:0,height:0<c?c:0})}}),h=r.round(q.area()/a.area()*100));return h}}},mb=function(){var a,b=!1,c;a=function(a){var b=[];b.push(a.slice(0,8));b.push(a.slice(8,12));b.push(a.slice(12,16));b.push(a.slice(16,20));b.push(a.slice(20));return b.join("-")}(function(){var a="";try{for(var b,c=w.Uint32Array&&w.crypto&&w.crypto.getRandomValues;32>a.length;)c?(b=new Uint32Array(1),w.crypto.getRandomValues(b),a+=b[0].toString(16)):a+=(16*r.random()|0).toString(16);
a=a.slice(0,32)}catch(d){l.trigger("error",k.ERROR_CODES.UID_GENERATION)}return a}());var d=function(){return m.anId};return{getAsid:function(){return m.asid},getAnId:d,getCacheBustId:function(){var a=new Date,b=Date.parse("Jan 1 "+a.getFullYear()),a=a.getTime()-b;return f.toBase(a,62)},getFwId:function(){return d()||m.advEntityId+"-"+m.pubEntityId},impressionIsIdentifiable:function(a){a&&(b=!0);return b},unq:a,getAvidIds:function(){return c},setAvidAdSessionContext:function(a){c=a}}},eb=function(a,
b){return{init:function(c){a.jsonp(c,function(a){b.send(k.DT_CODES.THIRD_PARTY,void 0,!1,!0,{field:"tpiLookup",value:a})},!1,"callback")}}},mc=function(a,b,c,d){return{getTime:function(){return 1E3*a.getTimeInViewInSeconds()},getTask:function(){return function(){var e=a.getTimeInViewInSeconds(),h=a.getTimeInViewForRts();f.isDef(d)&&l.trigger("addOutputItem",{output:d},"metricId",{type:b});l.trigger("sendDt",b,e);if(c[h])c[h]()}}}},Eb=function(){return{createPingJobs:function(a,b,c,d){return f(b.getTimeThresholds()).map(function(b,
h){return new mc(h,a,c,d)})}}},ra=function(){var a=function(a,b){-1!==a.indexOf(b+"&")&&(b+="&");return a.replace(b,"")},b=function(a,b,c){var f=a.indexOf("?");b=b+"="+c;if(-1===f)return a+"?"+b;f++;return a.slice(0,f)+b+"&"+a.slice(f)},c=function(){return"__IntegralAS_"+m.asid.replace(/\-/g,"")+"_"+r.round(1E4*Math.random())};return{wrap:function(d,e,h,f){var n=c(),p,s,y;f=f||"ias_callback";d=""+d;RegExp(f).test(d)&&(p=RegExp("("+f+"=)(.[^&]*)").exec(d)[0],s=p.split("=")[1],y=M.stringToFn(s),d=a(d,
p));w[n]=function(a){e(a);h&&y&&y(a);w[n]=void 0};return d=b(d,f,n)},wrapToGlobal:function(a){var b=c();w[b]=function(c){a(c);w[b]=void 0};return b}}},Hb=function(a,b,c){var d=function(a,b){var c=a,d;b&&(d=","+f(b).stringify(function(a,b){return a+":"+b},","),c=U(a,!0),c.appendToParamValue("adsafe_jsinfo",d),c=c.toString());return c},e={jss:{isFW:!0,nodeType:"script"},rjss:{isFW:!0,nodeType:"script"},jsi:{isFW:!0,nodeType:"iframe"},rjsi:{isFW:!0,nodeType:"iframe"},jload:{impressionMethod:function(c){a.enabled?
l.trigger("jsonp",c,a.callback,!0):l.trigger("send",c,function(){l.trigger("sendDiag")},!b.on("postMon"))}},bapi:{impressionMethod:function(b){l.trigger("jsonp",b,a.enabled?a.callback:f.noop,a.enabled?!0:!1)}},jsapi:{isFW:!0,impressionMethod:function(b){l.trigger("jsonp",b,a.enabled?a.callback:f.noop,a.enabled?!0:!1)}},jsvid:{manualDefer:!0,impressionMethod:function(c){l.on("adImpression",function(e,n){var p;try{p=d(c,n),a.enabled?l.trigger("jsonp",p,a.callback,!0):l.trigger("send",p,f.noop,!b.on("postMon"))}catch(s){__IntegralASDiagnosticCall("jsvidimp",
s,m)}})}},fwjsvid:{isFW:!0,manualDefer:!0,impressionMethod:function(a){var b="false"===m.fwMonitoring,c=function(a){a=a.split("/");a[3]="db2";a[4]="video";return a.join("/")};b&&l.trigger("jsonp",c(a),function(a){l.trigger("videoBlockResult",a)});l.on("adImpression",function(c,e){var n;try{var k;if(k=b)k=c&&f.isBool(c.integral_didBlock)&&0<=c.integral_timeToDecision;k&&(a=a.replace(/(adsafe_jsinfo=)([^&]*)/,"$1$2,abc:"+(c.integral_didBlock?1:0)+",abct:"+c.integral_timeToDecision));n=d(a,e);l.trigger("send",
n,f.noop,!0)}catch(u){__IntegralASDiagnosticCall("fwjsvidimp",u,m)}})}},jspix:{nodeType:"img"}};return new function(){var a=function(a){var b=-1===a.indexOf("?")?"?":"&";return a+b},b=e[m.mode],d=!!b.isFW,f=function(a){var b;b=l.request("mobileApp").isMobileAppEnvironment()&&m.mobFwUrl?m.mobFwUrl:a?m.adsafeSrc:m.requrl;a||(b+="?"+m.reqquery);return b}(d),s=f.indexOf("BEGIN__ADSAFE"),y=-1!==s,k=y?f.slice(s):"",a=y?f.slice(0,s):a(f);return{isFW:d,baseUrl:a,macroUrl:k,sendImpression:function(a){var d=
function(){b.nodeType?l.trigger("addNode",b.nodeType,a):b.impressionMethod(a)};if(c||b.manualDefer)d(a);else if(!b.manualDefer)l.on("adImpression",function(){d(a)})}}}},r={execAtEndOfThread:function(a){r.setTimeout(a,0)},now:function(){return(new Date).getTime()},random:function(){return Math.random()},round:function(a){return Math.round(a)},ceil:function(a){return Math.ceil(a)},floor:function(a){return Math.floor(a)},min:function(){return Math.min.apply(null,arguments)},max:function(){return Math.max.apply(null,
arguments)},getWindow:function(){return w},getTimeoutScope:function(){return t.isDomless()&&t.isOmid()?l.request("omidVerificationClient"):w},setInterval:function(a,b){return r.getTimeoutScope().setInterval(a,b)},setTimeout:function(a,b){return r.getTimeoutScope().setTimeout(a,b)},clearInterval:function(a){r.getTimeoutScope().clearInterval(a)},clearTimeout:function(a){r.getTimeoutScope().clearTimeout(a)},getMaxNumber:function(){return Number.MAX_VALUE},getTop:function(){t.isDomless();return top},
getDoc:function(){t.isDomless();return K},getIntersectionObserver:function(a,b){t.isDomless();return new IntersectionObserver(a,b)},pow:function(a,b){return Math.pow(a,b)}},ub=function(){return{createInstance:function(){return t.isDomless()?new nc:new oc}}},oc=function(){var a,b=!1,c=!1,d=l.request("features"),e=new da,h=function(){var b;b=923747==m.anId||925955==m.anId;d.on("blur")||d.on("abcAudit")&&b?(b=r.getWindow(),b=t.friendly&&b.top.document&&(f.isFunction(b.top.document.hasFocus)||f(b.top.document.hasFocus).isObj())&&
!b.top.document.hasFocus()||(f.isDef(a.prop)?r.getDoc()[a.prop]:null)):b=f.isDef(a.prop)?r.getDoc()[a.prop]:null;return b},q=function(){var b=r.getWindow(),c=function(){e.run(h())};x.addEvent(b,"focus",c,!0);x.addEvent(b,"blur",c,!0);a.event&&x.addEvent(r.getDoc(),a.event,c,!0)};a=function(){var a="hidden",c="visibilitychange",d=r.getDoc();f.isUndef(d.hidden)?f(["moz","ms","webkit"]).each(function(e,h){var q=h+"Hidden";f.isDef(d[q])&&(a=q,c=h+c,b=!0)}):b=!0;return b?{prop:a,event:c}:{}}();return{isHidden:h,
onHiddenChange:function(a){e.push(a);c||(c=!0,q())},supportsVisAPI:function(){return b}}},nc=function(){return{isHidden:function(){return!1},onHiddenChange:function(a){},supportsVisAPI:function(){return!0}}},wb=function(){return{createInstance:function(a,b){return t.isDomless()?new pc:new qc(a,b)}}},qc=function(a,b){var c,d=function(a){for(var b in a)if(a.hasOwnProperty(b)){var c=a[b];(""===c||"null"===c||"undefined"===c||null===c||f.isUndef(c))&&delete a[b]}return a},e=function(a){var b={},c,d;for(d in a)a.hasOwnProperty(d)&&
(c=a[d],f.isUndef(b[c])?b[c]=d:b[c]+=d);a={};for(d in b)b.hasOwnProperty(d)&&(c=b[d],a[c]=d);return a},h=function(){var h,n=function(){var a={};try{a.q=b.getWindow().parent.parent.parent.parent.parent.parent.parent.parent.parent.parent.location.href}catch(c){var d=c.message,d=d.substring(d.lastIndexOf("<")+1,d.lastIndexOf(">")),e;if(e=f.isDef(d)){var h=b.getWindow();e=!1;f.isDef(h.navigator)&&f.isDef(h.navigator.userAgent)&&(h=h.navigator.userAgent.match(/Firefox\/([\.0-9]+)/),null!==h&&2==h.length&&
(h=h[1].split("."),3==parseInt(h[0],10)&&6>=parseInt(h[1],10)&&(3==h.length?13>=parseInt(h[2],10)&&(e=!0):e=!0)))}e&&(a.g=d)}return a},p={};try{p.a=encodeURIComponent(top.location.href)}catch(s){}try{p.b=encodeURIComponent(parent.location.href)}catch(y){}if(t.embedded){try{p.c=encodeURIComponent(parent.document.referrer)}catch(k){}try{p.e=encodeURIComponent(w.document.referrer)}catch(u){}}try{"jsi"!==m.mode&&(p.d=encodeURIComponent(w.location.href))}catch(l){}try{p.f=encodeURIComponent(m.jsref)}catch(r){}try{h=
n(),p.g=encodeURIComponent(h.g||""),p.q=encodeURIComponent(h.q||""),a.isStarted()&&!h.g&&1<a.getMyFrameDepth()&&(p.g=encodeURIComponent(a.getTopDomain()))}catch(A){}p=d(p);p=e(p);h=[];for(var B in p)p.hasOwnProperty(B)&&h.push({key:B,val:p[B]});h.sort(function(a,b){return a.val.length>b.val.length?1:a.val.length<b.val.length?-1:0});return c=h};return{detectTopURL:h,getDetectedURLs:function(){return c?c:h()}}},pc=function(){return{detectTopURL:function(){return[]},getDetectedURLs:function(){return[]}}},
tb=function(a){var b=!1;return{measure:function(c){(b=0===c.rsa)&&a.trigger("notify",m._onSuspicious)},skipAsFraudulent:function(){return b}}},xb=function(){var a=[],b={},c={sl:"n"},d=0,e,h,q={i:0,o:0,n:0,pp:0,pm:0},n=function(a){var b={},c=a.winDimensions,d=a.adDimensions;f.isDef(c)&&c.hasValidDims()&&(b.wc=c);f.isDef(d)&&d.hasValidDims()&&(b.ac=d,b.am=a.method,b.cc=a.containerDimensions);f({piv:"percentInView",obst:"obstructed",th:"tabHidden",reas:"reason"}).each(function(c,d){var e=a[d];f.isDef(e)&&
(b[c]=e)});c=f(b).toParams();return""===c?"":","+c},p=function(a,c){var d=new ec(c);return b[a]=d},s=function(a,b){return(b||"")+{inView:"i",outOfView:"o",na:"n",partialViewMinus:"pm",partialViewPlus:"pp"}[a]},y=function(){f(c).each(function(b,c){q[c]+=a.length?h-d:h});d=h},F=function(b){a.length&&y();f(b).each(function(a,b){var d=c[a];d!==b&&"n"===d&&(q[b]+=q.n);c[a]=b});a.length||y()},u=function(a){var c,d=a.adDimensions?a.adDimensions.getRounded():{width:0,height:0};c=n(a);var e={sl:s(a.viewState)};
h=t.getTagTime();F(e);e.t=h;c=f({toString:function(){f(b).each(function(a,b){b.fastForward()});return"{"+f(e).toParams()+this.details+this.breakdowns+"}"},details:c,breakdowns:{piv:[],as:[],toString:function(){var a,b=function(a,b){return b.duration+"~"+b.state};a=""+("piv:["+f(this.piv).stringify(b)+"]");a+=",as:["+f(this.as).stringify(b)+"]";return",bkn:{"+a+"}"}}}).mixin(e);f(c).mixin(a);c.width=d.width;c.height=d.height;f.isUndef(c.percentInView)&&(c.percentInView=k.PIV_NA);f.isUndef(c.reason)&&
(c.reason="");return c};(function(){p("piv",function(a){var b,c=a.percentInView,d=[1,25,30,50,75];100===c||0===c?b=c:(f(d).each(function(a,e){f.isUndef(b)&&c<e&&(b=d[a-1])}),f.isUndef(b)&&(b=d[d.length-1]));return b});p("as",function(a){var b=k.NA;a=a.adDimensions?a.adDimensions.getRounded():{width:b,height:b};return a.width+"."+a.height})})();return{fastForward:function(){h=t.getTagTime();y()},registerLocation:function(d){var h,p=!1;c.sl==s(d.viewState)&&a.length?(h=new u(d),a[a.length-1].details=
h.details):(h=new u(d),a.push(h),e=d.viewState,p=!0);l.trigger("newScreenEvent",h);f(b).each(function(b,c){-1!=="piv|as".indexOf(b)?(p&&c.clear(),c.addState(h),a[a.length-1].breakdowns[b]=c.get()):c.addState(h)});return h},stringify:function(b){var c="";a.length&&(c=f({slTimes:"{"+f(q).toParams()+"}",slEvents:"["+a.slice(-b).join(",")+"]",slEventCount:a.length}).toParams());return c},createViewabilityTracker:p,getCurrentLoc:function(){return s(e)}}},M={hashCode:function(a){var b=0,c,d,e;if(0===a.length)return b;
c=0;for(e=a.length;c<e;c++)d=a.charCodeAt(c),b=(b<<5)-b+d,b|=0;return b},rot:function(a){return a.replace(/[a-zA-Z]/g,function(a){return String.fromCharCode(("Z">=a?90:122)>=(a=a.charCodeAt(0)+13)?a:a-26)})},stringToFn:function(a){var b,c=w,d=a.split(".");for(a=0;a<d.length;a++)if(b=c,c=c[d[a]],f.isUndef(c)||a===d.length-1&&!f.isFunction(c))return!1;return function(){c.apply(b,arguments)}},stringToProp:function(a){var b=r.getWindow(),c=a.split(".");for(a=0;a<c.length&&(b=b[c[a]],!f.isUndef(b));a++);
return b},contains:function(a,b){return f.isStr(a)?-1!==a.indexOf(b):!1},trim:function(a){return f.isFunction(a.trim)?a.trim():a.replace(" ","")}},rc=function(){var a=function(){var a=function(a){return a&&a.width&&30<a.width&&a.height&&30<a.height},b=function(b){b=v.getDimensionFromAttributes(b);return a(b)};return{hasValidDimensions:function(c){var d;(d=b(c))||(c=v.getDimensionFromStyle(c),d=a(c));return d},hasValidDimentionAttributes:b}}(),b=/GoogleActiveViewClass/,c=/DfaVisibilityIdentifier_/,
d=/doubleclick.net\/pcs\/click?/,e=/_blank/,h=function(a){var d=v.tagNameIs(a,"div"),e=v.attributeMatches(a,"class",b);a=v.attributeMatches(a,"id",c);return d&&e&&a};return{getDFPGoogleDiv:function(a){return v.traverseAndFindFirstMatchingNode(a,h)},getClickableImage:function(b){var c,h=(b=v.getFirstChildElement(b))&&v.tagNameIs(b,"a"),f=v.attributeMatches(b,"href",d),y=v.attributeMatches(b,"target",e);h&&f&&y&&(b=v.getFirstChildElement(b),v.isImageTag(b)&&a.hasValidDimentionAttributes(b)&&(c=b));
return c},getNodeMatchingMinimumSize:function(b){return v.traverseAndFindFirstMatchingNode(b,a.hasValidDimensions)}}},sc=function(){var a=rc(),b=function(a,b){b.tag=v.getTagName(a);b.size=v.getDimensionFromAttributes(a)||v.getDimensionFromStyle(a)};return{getDFPValue:function(c){var d;if(d=a.getDFPGoogleDiv(c)){var e;c={type:0};if(d)if(c.type=1,e=a.getClickableImage(d))c.type=2,b(e,c);else if(d=a.getNodeMatchingMinimumSize(d))c.type=3,b(d,c);d=c}else if(d={type:0},c=a.getNodeMatchingMinimumSize(c))d.type=
4,b(c,d);return d}}};L("viewport",[],function(){var a={width:4,height:4},b=function(c,d){if(c!==d&&!v.isViewportVisible(c,a))return c;if(c!==d&&t.isFriendlyToParent(c))return b(c.parent,d)},c=function(){var a=r.getWindow();return b(a,r.getWindow().top)},d=function(){return"undefined"!==typeof c()};return{MIN_VISIBLE_DIM:a,isHidden:d,isCurrentIframeTheHiddenFrame:function(){var b,c=r.getWindow();v.isViewportVisible(c,a)?d()&&(b=!1):b=!0;return b},getWindowWithHiddenViewport:c}});var tc=function(a){var b,
c,d=function(d){b=a.setInterval(d,100);c=a.setTimeout(function(){e()},42E4)},e=function(){b&&(a.clearInterval(b),b=null);c&&(a.clearTimeout(c),c=null)};return{onResize:function(b){var c=a.innerWidth,f=a.innerHeight,p=!1;d(function(){var d;d=a.innerHeight;(d=a.innerWidth!==c||d!==f)&&(p=!0);p&&!d&&(b(),e(),p=!1);c=a.innerWidth;f=a.innerHeight})}}};L("adStuffingDetector",["viewport"],function(a,b){var c,d=function(){try{var d=a.isHidden(),h,q={};d!==c&&(h=f.stringifyTriState(d),q.res1=h,q.ps=h,q.ts=
r.now(),q.psfr=f.stringifyTriState(a.isCurrentIframeTheHiddenFrame()),b.events.trigger("newState",q));c=d}catch(n){l.trigger("error",k.ERROR_CODES.HIDDEN2)}};return{start:function(){if(a.isHidden()){d();var b=a.getWindowWithHiddenViewport();if(b)tc(b).onResize(d)}}}},{emits:!0,applies:function(a,b,c){return c.embedded&&!c.isBustedIframe()&&!c.isSpecifiedAd()}});L("hiddenAds",["adStuffingDetector"],function(a){var b=0,c=function(a,b){l.trigger("addThrottledProp",k.DT_SLOT.FRAUD,a,f(b).toION())},d=
function(a){2>b&&c("ha1",a);b++};(function(){var b,h;if(t.embedded)try{h=m.contextNode.parentNode,b=sc().getDFPValue(h),h={},h.df=b.type,b.size&&(h.sz=b.size.width+"."+b.size.height),b.tag&&(h.dom=b.tag),c("dfp",h),b.size&&a&&(a.events.on("newState",d),a.start())}catch(f){l.trigger("error",k.ERROR_CODES.HIDDEN)}})()},{tier:k.TIERS.PRE_IMPRESSION_FRAUD,applies:function(a,b,c){return a.on("usehaps")}});L("BannerStuffing",[],function(){var a,b=0,c=0,d=r.getWindow().document,e=!1,h=function(){a=v.windowSize().height*
v.windowSize().width;if(25<a){for(var h,p=a+20*a/100,q=d.querySelectorAll("iframe"),q=f.fromNodeListToArray(q);q.length&&(c<p||3>b);)h=q.shift(),h=v.getNodeArea(h),25<h&&(b++,c+=h);c>=p&&3<=b&&(l.trigger("addThrottledProp",k.DT_SLOT.FRAUD,"bs1",f({va:a,bia:c,bin:b}).toION()),e=!0)}},q=function(){var a;a=new MutationObserver(function(b){e?a.disconnect():r.execAtEndOfThread(function(){f(b).each(function(a,b){if(b.addedNodes.length){var c=b.addedNodes[0];c&&v.isElement(c)&&v.tagNameIs(c,"IFRAME")&&f.debounce(h,
10)}})})});a.observe(d.body,{attributes:!1,childList:!0,characterData:!1})};d&&d.body&&(r.execAtEndOfThread(h),!e&&f.isDef(w.MutationObserver)&&q())},{tier:k.TIERS.VIEWABILITY,applies:function(a,b,c){b=c.isAvid()||c.isOmid()||c.isMraid();c=!c.isDomless()&&c.friendly&&!c.embedded;return a.on("BannerStuffingInApp")&&b&&c}});var rb=function(){return{createInstance:function(a){return t.isDomless()?new uc:new vc(a)}}},vc=function(a){var b,c,d,e=new ea,h=new fa,q=new wc(e),n=new xc,p=new yc,s=new zc(e,
a),y=function(){f.isUndef(d)&&(d=new Ac(e));return d},k=function(){e.provide({frameCollection:function(){return q},adProxy:function(){return p},adTalkMessage:function(a){return new Bc(a,e)},adTalkMessageCollection:function(){return n},idMapModule:y,interFrameQuerySelector:function(a){return new Aa(a)}})};return{isApplicable:function(a){return f.isDef(w.JSON)&&f.isDef(w.postMessage)&&!a.isAvid()&&!a.isOmidNative()},start:function(){k();h.traverse(q.addFrame);s.startListening();s.sendToKnownFrames();
l.once("stopAdTalk",function(){s.stopListening()});l.provide("adTalkEventAggregator",e)},sendAdTalkCall:s.sendAdTalkCall,getFrameMap:function(){f.isUndef(b)&&(b=new Ba(e));return b},getFrameMapIncludingPeerCase:function(){f.isUndef(c)&&(c=new Ba(e,!0));return c},getIdMap:y}},uc=function(){return{isApplicable:function(){return!1},start:function(){}}},Bc=function(a,b){var c,d=b.request("adProxy").myIdCard,e=b.request("frameCollection").getMe().getStringifiedPosition();c=l.request("features").on("swapids")?
m.oid:m.asid;var h=a||{},f=m.asid,d=d.tagId,n=t.embedded,p=t.friendly,s=m.birthdate;c=c.split("-")[2];var y;t.friendly?y="["+k.AD_IDENTIFIER+"-"+m.asid+"]":(y=r.getWindow(),y=y.location&&y.location.href,y='iframe[src*="'+(y&&y.replace(/^https?\:\/\//i,""))+'"]');return{messageContent:h,srcAsid:f,srcTagId:d,srcIsEmbedded:n,srcIsFriendly:p,srcBirthdate:s,iasCommonId:c,nodeSelector:y,positionStr:e,version:"0.1"}},xc=function(){var a={};return{add:function(b){var c=b&&b.srcAsid;c&&(a[c]=b)},map:function(b){return f(a).map(b)},
has:function(b){return a[b&&b.srcAsid]}}},Cc=function(a,b,c,d){var e,h=a==w;e={position:b.slice(0),id:b.join("-"),isMe:h,isLeaf:!a.frames.length,adProxies:h?c:[],selfDescription:void 0,unifiedId:m.birthdate,srcIsEmbedded:d?d.srcIsEmbedded:void 0,inbox:d?[d]:[],getDomObj:function(){return a},getStringifiedPosition:function(){return f(e.position).map(function(a,b){return f.toBase(Number(b)+1,36)}).join("")},isValidForMapping:function(){return e.isLeaf||e.isMe||f.isDef(e.selfDescription)}};var q=function(a){var b=
e.adProxies;a=a.adProxies;var c=[];b.length&&a.length?f(a).each(function(a,d){n(b,d)&&c.push(d)}):c=a;e.adProxies=b.concat(c)},n=function(a,b){return!f(a).find(function(a,c){return c.adSafeId&&c.adSafeId===b.adSafeId})},p=function(a){f(e.inbox).find(function(b,c){return c.srcAsid&&c.srcAsid===a.srcAsid})||e.inbox.push(a)};e.addInformationFromSrc=function(a,b){q(b);p(a);e.srcIsEmbedded=a.srcIsEmbedded;e.selfDescription=b};return e},wc=function(a){var b=[],c={},d={noMe:!0};return{addFrame:function(e,
h,f){var n=a.request("adProxy").getAll();e=new Cc(e,h,n,f);b.push(e);c[e.id]=e;e.isMe&&(d=e);return e},getFrame:function(a){return c[a]},list:b,dictionary:c,getMe:function(){return d}}},Ba=function(a,b){var c=function(a,c){var f=c.adProxies,n="";if(c.isValidForMapping()){if(b)n+=d(f,c.getStringifiedPosition());else{var p;p=""+c.getStringifiedPosition();p+=c.isMe?"*":"";p+=f.length?"."+f[0].tagId:"";n+=p}return n}},d=function(a,b){var c="";return c=a.length?c+f(a).stringify(function(a,c){return b+
(m.asid===c.adSafeId?"*":"")+"."+c.tagId},"|"):c+b};return{output:function(){var b=a.request("frameCollection"),d=f(b.list).stringify(c,"|");return f.toBase(b.getMe().unifiedId,62)+"+"+d}}},Ac=function(a){var b=a.request("frameCollection").getMe().getStringifiedPosition(),c=m.contextNode.parentNode,d=a.request("interFrameQuerySelector",c),e=function(a){return a&&a.substr(0,120)+".of"+a.length},f=function(a){var e=!1,e=!t.embedded,f="BODY"!==v.getNodeName(c)&&"HEAD"!==v.getNodeName(c),h;if(h=a.srcIsEmbedded){h=
"0.1"!==a.version;var y=a.nodeSelector&&-1===a.nodeSelector.indexOf(k.AD_IDENTIFIER);h=!(h?y:!a.srcIsFriendly)}e&&f&&!h?e=!!d.queryFor(a.nodeSelector):(e=a.positionStr,a=a.srcIsEmbedded&&t.embedded,e=0===b.indexOf(e)||0===e.indexOf(b),e=!(!a||!e));return e};return{output:function(){var c,d=b+"*";c=a.request("adTalkMessageCollection").map(function(a,b){var c;a!==m.asid&&f(b)&&(c=b.positionStr+"."+b.srcAsid+"."+b.transferDuration+"_"+b.srcTagId);return c});c.push(d);c=c.join("|");120<c.length&&(c=e(c),
l.trigger("stopAdTalk"));return c},isCandidateForMyIdMap:f}},Aa=function(a){var b=new fa,c=function(a){var b=a,c="IFRAME"===v.getNodeName(a),d=v.isWindow(a);c?b=a.contentWindow.document:d&&(b=a.document);return b},d=function(a,b){return v.querySelector(c(a),b)},e=function(c,e){var n,p,s;try{p=d(c,e),p||(n=b.getFrames(!0,a),f(n).findFirst(function(a,b){return s=d(b,e)}))}catch(k){}return p||s||null};return{queryFor:function(b){var c=null;b&&(c=e(a,b));return c}}},zc=function(a){var b=!1,c,d;d=l.request("features").on("swapids")?
m.oid:m.asid;var e=function(b){var c=d.split("-")[2],e=!a.request("adTalkMessageCollection").has(b)&&b.srcAsid!==m.asid;return b.hasOwnProperty("messageContent")&&c===b.iasCommonId&&e},h=function(){var b=a.request("frameCollection").getMe();return a.request("adTalkMessage",{self:b,unifiedId:b.unifiedId})},q=function(){var c=k.DT_CODES.ADTALK;a.request("frameCollection");b||(b=!0);l.trigger("sendDt",c)},n=function(c,d,e){var h,n,m,t,A;try{h=a.request("frameCollection");n=a.request("adTalkMessageCollection");
m=d.messageContent.self;n.add(d);var v=h.getMe();v.unifiedId>m.unifiedId&&(v.unifiedId=m.unifiedId);var w;w=r.now()-d.sentTime;d.transferDuration=w;n=t=h.getFrame(m.id);f.isUndef(n)||f.isUndef(n.selfDescription)?(t=t||h.addFrame(c.source,m.id.split("-"),d),t.addInformationFromSrc(d,m),e()):t.addInformationFromSrc(d,m);(A=b&&a.request("idMapModule").isCandidateForMyIdMap(d))&&q()}catch(z){l.trigger("error",k.ERROR_CODES.ADTALK_DUBIOUS)}};return{sendAdTalkCall:q,sendToKnownFrames:function(){(new va).send(h)},
startListening:function(){c=new ac;c.listen(e,n,h)},stopListening:function(){c&&c.stop()},validateMessage:e,processMessage:n,createMessage:h}},Dc=function(){var a=l.request("ids"),b=a.getAsid();return{tagId:a.getFwId(),adSafeId:b}},yc=function(){var a,b=[],c=function(a){a=new Dc(a);b.push(a);return a};a=c();return{createNew:c,getAll:function(){return b},myIdCard:a}},Kb=function(){var a=!1,b=function(a){var b,c={},d=a.indexOf("?");a=-1===d||d===a.length-1?[]:a.substring(d+1).split("&");f(a).each(function(a,
d){b=d.split("=");c[decodeURIComponent(b[0])]=decodeURIComponent(b[1]||"")});return c},c=function(a){var c={};a&&a.scriptUrl&&(c=b(a.scriptUrl));return c},d=function(b){a||(f(b).each(function(a,b){l.trigger("addOutputItem",{output:b},a,{type:k.DT_CODES.MACRO,standalone:!0,encode:!0})}),l.trigger("sendDt",k.DT_CODES.MACRO),a=!0)},e=function(){var a={},b=new ea;b.on("add",function(b){b.uid&&(a[b.uid]=b)});b.on("remove",function(b){b.uid&&a[b.uid]&&delete a[b.uid]});b.provide("messages",function(){return a});
return b},h=function(){var a=new Aa(m.contextNode&&m.contextNode.parentNode);f.isUndef(w.__IASInbox)&&(w.__IASInbox=new e);w.__IASInbox.on("add",function(b){var e="[data-integralads-messenger-"+b.uid+"]";try{if(f.isDef(b.isIASMacroSender)&&a.queryFor(e)){var h=c(b);d(h)}}catch(q){__IntegralASDiagnosticCall("macro_fwjs_iasinbox",q)}})},q=function(){var a=function(b){var e;try{var h;try{h=JSON.parse(unescape(b.data))}catch(q){h={}}e=h;var k;if(k=f.isDef(e.isIASMacroSender)){var m=l.request("adTalkEventAggregator").request("frameCollection").getMe().getStringifiedPosition(),
t=e.srcIsEmbedded,A=0===e.positionStr.indexOf(m);k=t&&A}if(k){var v=c(e);d(v);x.removeEvent(r.getWindow(),"message",a)}}catch(w){__IntegralASDiagnosticCall("macro_fwjs_postmessage",w)}};x.addEvent(r.getWindow(),"message",a)};return{start:function(){h();q()}}},yb=function(a){var b,c,d=!1,e=function(a){var e=!0;d&&(d=!1,a.stopPropagation?(a.stopPropagation(),a.preventDefault()):a.cancelBubble=!0,b=a.screenX-a.clientX,c=a.screenY-a.clientY,e=!1);return e};a.browserIs(k.BROWSERS.IE)&&x.addEvent(r.getDoc().documentElement,
"click",e,!0);return{determineFramePosition:function(){a.browserIs(k.BROWSERS.IE)&&(d=!0,r.getDoc().documentElement.click());return{scrX:b,scrY:c}}}},Ec=function(a,b){var c,d=k.NA,e=d,h=!1,q=!1,n=!1,p=!b,s=function(){var b=r.getIntersectionObserver(function(a){a=a.pop();var b=a.intersectionRect.width*a.intersectionRect.height/(a.boundingClientRect.width*a.boundingClientRect.height)*100;isNaN(b)&&(b=0);d=Math.min(b,100);c=a.boundingClientRect;d!==e&&r.execAtEndOfThread(function(){l.trigger("IOPivChange",
d)});e=d},{threshold:k.VIEWABILITY_IN_VIEW_THRESHOLDS_INTERSECTION_OBSERVER});p&&r.execAtEndOfThread(function(){d===k.NA&&(d=0)});b.observe(y(a));p&&r.execAtEndOfThread(function(){t.isBustedIframe()||l.trigger("delayedViewabilityReady")});h=!0},y=function(b){if(!f.isUndef(b)){if(n){b=a.document;var c=b.createElement("div");f(c.style).mixin({position:"absolute",width:"100%",opacity:"0",height:"100%",zIndex:-999,top:"0px",left:"0px"});c[k.IAS_DETECTOR]=!0;b.body.appendChild(c);b=c}return b}};return{getPiv:function(){return d},
start:function(){var b;try{a.document&&(n=!0,b={bodyElement:a.document.body,document:a.document})}catch(c){q=!0}b&&null!==b.bodyElement?s():b&&b.document?x.whenReady(s,b.document):q?l.request("errors").add(k.ERROR_CODES.BUSTED_IFRAME_IN_IO):s()},isStarted:function(){return h},getAdNodeDimensions:function(){var a;c&&(a=H({scrX:void 0,scrY:void 0,width:c.width,height:c.height}));return a},isReady:function(){return d!==k.NA}}},sa=function(){var a=!1;(function(){x.whenReady(function(){l.trigger("startViewabilityLoop");
a=!0})})();return{loopStarted:function(){return a}}};L("loopDelay",[],sa,{applies:function(a,b,c){return a.bootstrapOn("allowViewability")},tier:k.TIERS.VIEWABILITY});var Fc=function(){return{start:function(a){l.on("measurable",function(){a()})},isApplicable:function(a,b){return!b.browserIs(k.BROWSERS.WEBKIT)}}},Gc=function(){return{start:function(a){a()},isApplicable:function(a){return a.isImmediatelyMeasurable()}}},Rb=function(a,b,c){var d=!1,e=function(){b.impressionIsIdentifiable()&&!d&&(d=!0,
l.trigger("notify",m._onMeasurable))};return{start:function(){var b;b=[Hc(),Ic(),Gc(),Fc()];(b=f(b).findFirst(function(b,d){return d.isApplicable(c,a)}))&&b.start(e)},isApplicable:function(a){return a.bootstrapOn("useViewabilityNotification")&&f.isDef(m._onMeasurable)}}},Ic=function(){return{start:function(a){bc(l,["adImpression","measurable"]).onAll(function(){a()})},isApplicable:function(a,b){var c=9<=b.getIOSVersion();return(!b.browserIs(k.BROWSERS.WEBKIT)||c)&&t.isVideo()}}},Hc=function(){return{start:function(a){l.once("adImpression",
function(){a()})},isApplicable:function(a){return a.isImmediatelyMeasurable()&&t.isVideo()}}},Jc=function(a,b,c){var d=["rjss","jss","jload"],e=function(){var b=!1,c=a.getAvidAdSessionContext();f.isDef(c)&&(b=c.isDeferred);return!b};return{accepts:function(){var a=f.isDef(f(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(k.MEDIA_TYPE.DISPLAY)&&a},isImmediate:e,isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){e()||
a.addEventListener("ready",function(){l.trigger("adImpression")})}}},Kc=function(a){return{accepts:function(){return a.isAvidAvailable()},getAvidAdSessionContext:function(){return a.getAvidAdSessionContext()},isMediaType:function(b){var c,d=a.getAvidAdSessionContext();a.isAvidAvailable()&&f.isDef(d)&&(c=d.mediaType||k.MEDIA_TYPE.DISPLAY);return b===c},supportsAdContainerGeometry:function(){var b=!1,c=a.getAvidAdSessionContext();f.isDef(c)&&(b=c.avidJsVersion,(c=f.isUndef(b))||(c=f.getNum(b.split(".")[0]),
b=f.getNum(b.split(".")[1]),c=2===c?7<=b:3<=c),b=c);return b}}},Lc=function(a,b,c){var d=["rjss","jss","jload"];return{accepts:function(){var a=f.isDef(f(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(k.MEDIA_TYPE.VIDEO)&&a},isImmediate:function(){return!1},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){try{a.addEventListener("video",function(a){"AdImpression"===a.eventSubType&&l.trigger("adImpression")})}catch(b){}}}},
Mc=function(a,b,c){var d=["rjss","jss","jload"];return{accepts:function(){var a=f.isDef(f(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(k.MEDIA_TYPE.DISPLAY)&&a},isImmediate:function(){return!0},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){}}},aa=function(a){var b=r.getWindow(),b=b&&b.omid3p,c=l.request("omidAdSessionContext"),d=!!(a&&a.isSupported&&a.isSupported()),e=!!(b&&f.isFunction(b.registerSessionObserver)&&
f.isFunction(b.addEventListener));return{accepts:function(){return d||e},isMediaType:function(a){return a===c.mediaType},supportsAdContainerGeometry:function(){return!0}}},Nc=function(a,b,c){var d=["rjss","jss","jload"];return{accepts:function(){var a=f.isDef(f(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(k.MEDIA_TYPE.VIDEO)&&a},isImmediate:function(){return!0},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){}}},
Sa=function(a){return{resolve:function(){return f(a).findFirst(function(a,c){return c.environment.accepts()})}}},Pa=function(a,b){var c=!1,d=!1,e=l.request("omidAdSessionContext"),h=r.getWindow(),q=(h=h&&h.omid3p)&&f.isFunction(h.registerSessionObserver)&&f.isFunction(h.addEventListener)?h:b,n=function(){c&&d&&(w.omidSupported=!0,a())},p=function(b){if("sessionStart"===b.type){e.adSessionType=b.data.context.adSessionType;e.environment=b.data.context.environment;e.omidNativeInfo=b.data.context.omidNativeInfo;
e.omidJsInfo=b.data.context.omidJsInfo;e.deviceInfo=b.data.context.deviceInfo;e.app=b.data.context.app;e.isNative="native"===e.adSessionType;e.isGoogleImaGma=!t.friendly&&(e.omidNativeInfo&&e.omidNativeInfo.partnerName&&0===e.omidNativeInfo.partnerName.toLowerCase().indexOf("google")||e.omidJsInfo&&e.omidJsInfo.partnerName&&0===e.omidJsInfo.partnerName.toLowerCase().indexOf("google"));e.isHtml="html"===b.data.context.adSessionType;e.isWeb="web"===b.data.context.environment;b=e.isHtml&&e.isWeb;e.queuedOutputItems=
[];for(var d=[{root:"omidNativeInfo",code:"onpn",field:"partnerName"},{root:"omidNativeInfo",code:"onpv",field:"partnerVersion"},{root:"omidJsInfo",code:"ojpn",field:"partnerName"},{root:"omidJsInfo",code:"ojpv",field:"partnerVersion"},{root:"omidJsInfo",code:"osev",field:"serviceVersion"},{root:"omidJsInfo",code:"oscv",field:"sessionClientVersion"},{root:"app",code:"applv",field:"libraryVersion"},{root:"app",code:"appid",field:"appId"},{root:"deviceInfo",code:"dty",field:"deviceType"},{root:"deviceInfo",
code:"osn",field:"os"},{root:"deviceInfo",code:"osv",field:"osVersion"}],f,h,p,q=0;q<d.length;q++)f=d[q].root,h=d[q].field,p=d[q].code,"object"===typeof e[f]&&"undefined"!==typeof e[f][h]&&e.queuedOutputItems.push({code:p,value:e[f][h]});b?a():(c=!0,n())}},s=function(a){e.mediaType=a.data.mediaType;a.data.viewport&&a.data.adView&&(e.impressionViewabilityMeasurement={data:{viewport:a.data.viewport,adView:a.data.adView}});e.isNativeVideo=e.isNative&&"video"===a.data.mediaType;d=!0;n()};return{start:function(){q.registerSessionObserver(p,
"IAS");q.addEventListener("impression",s)}}},Qa=function(){return{accepts:function(){return!0}}},ya=function(){var a=l.request("omidAdSessionContext"),b=l.request("omidVerificationClient"),c=new aa(b),d=a.isHtml&&a.isWeb;return{accepts:function(){return c.accepts()&&d}}},Ra=function(a){return{start:function(){a()}}},Oc=function(a,b){var c=function(a){try{b.trigger("videoPlaybackEvent",{eventType:a.eventSubType,eventData:a.eventData})}catch(c){}};return{start:function(){a.addEventListener("video",
c)},addVideoPlaybackEventListener:function(a){b.on("videoPlaybackEvent",a)}}},Pc=function(a,b){var c,d=function(a){var d,f,n;try{d=a.eventData.percentageInView,f=c&&75<=d,n={windowDimensions:{x:0,y:0,width:0,height:0},adDimensions:{x:0,y:0,width:0,height:0},containerDimensions:{x:0,y:0,width:0,height:0},shouldDelegateToDomBasedViewability:f,isMeasurable:0===d||75<=d,isObstructed:!1,isHidden:!1,numberOfAdverts:1,percentageInView:d,detectionMethod:"av"},b.trigger("screenLocationChanged",n)}catch(p){}};
return{start:function(){try{var b=a.getAvidAdSessionContext().avidAdSessionType;c="display"===b||"video"===b;a.addEventListener("viewability",d)}catch(f){}},addScreenLocationChangedListener:function(a){b.on("screenLocationChanged",a)}}},Qc=function(a,b){var c=[],d=(new Date).getTime(),e=0,h=0,q=!1,n={isEmpty:function(){return 0===c.length},toString:function(){for(var a="{vEventCount:"+c.length+",vEvents:[",b=0;b<c.length;b++)var d=c[b],a=a+((0<b?",{":"{")+("t:"+d.t+",")+("sl:"+d.sl+",")+("tp:"+d.tp+
",")+("ad_duration:"+d.ad_duration+",")+("volume:"+d.volume)+"}");return a+"]}"}},p=function(){q=!0},s=function(a){try{var p="",n=a.hasOwnProperty("timestamp")?a.timestamp:(new Date).getTime();switch(a.type){case "start":p="adVideoStart";d=n;h=a.data.duration;1E3<h&&(h/=1E3);e=a.data.videoPlayerVolume;break;case "volumeChange":p="volumeChanged";e=a.data.videoPlayerVolume;break;case "firstQuartile":case "midpoint":case "thirdQuartile":case "complete":p="adVideo"+a.type.substring(0,1).toUpperCase()+
a.type.substring(1);break;case "pause":case "bufferStart":p="pauseAd";break;case "resume":case "bufferFinish":p="resumeAd";break;case "skipped":p="adSkipped"}""!==p&&c.push({t:n-d,sl:"undefined",tp:p,ad_duration:h,volume:e});if("loaded"===a.type&&f.isDef(a.data)){var s=["preroll","midroll","postroll","standalone"].indexOf(a.data.position),p=-1!==s?s+1:void 0,r=!0===a.data.autoPlay?"autoplayed":"clicktoplay";!0===q?(f.isDef(p)&&l.trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,"vbp",p),l.trigger("addThrottledProp",
k.DT_SLOT.ENVIRONMENT,"vps",r)):(f.isDef(p)&&l.trigger("addOutputItem",{output:p},"vbp",{type:k.IMPRESSION_EVENT}),l.trigger("addOutputItem",{output:r},"vps",{type:k.IMPRESSION_EVENT}))}"start"===a.type&&l.trigger("omidAdDuration",{ad_duration:h});var m;"playerStateChange"===a.type?m="fullscreen"===a.data.state?"AdEnteredFullscreen":"AdExitedFullscreen":-1!=="start|firstQuartile|midpoint|thirdQuartile|resume|bufferFinish".indexOf(a.type)?m="AdPlaying":-1!=="complete|pause|bufferStart|skipped".indexOf(a.type)&&
(m="AdPaused");f.isDef(m)&&b.trigger("videoPlaybackEvent",{eventType:m,eventData:null})}catch(t){__IntegralASDiagnosticCall("omidvideo",t,w.bootstrapper)}};return{start:function(){l.on("impressionsent",p);l.provide({omidVideoEventsString:n});a.addEventListener("video",s)},addVideoPlaybackEventListener:function(a){b.on("videoPlaybackEvent",a)}}},Ca=function(a,b){var c=!1,d=function(a){var d=a.percentageInView;c=!0;a.viewState=50<=d?k.IN_VIEW:k.OUT_OF_VIEW;a.outOfViewReason=50<=d?"":k.OUT_OF_VIEW_REASONS.GEOM;
b.trigger("measurementChanged",a)};return{start:function(){l.trigger("addOutputItem",{output:k.MEDIA_TYPE.DISPLAY_CODE},k.MEDIA_TYPE_CODE,{type:k.IMPRESSION_EVENT});a.addScreenLocationChangedListener(d);a.start()},getStrategyName:function(){return k.MEASUREMENT_STRATEGY.DISPLAY},addMeasurementChangedListener:function(a){b.on("measurementChanged",a)},isMeasurable:function(){return c}}},Rc=function(a,b,c){var d=f.isDef(a)?a.environment:void 0,e=f.isDef(a)?a.measurementStrategy:void 0,h=function(){return f.isDef(e)};
f.isDef(b)&&b.start();return{hasMeasurementStrategy:h,getScreenLocationInfo:function(a){return b.create(a)},isImmediate:function(){return h()?d.isImmediate():!0},isMeasurable:function(){return h()?e.isMeasurable():!1},isMediaType:function(a){return h()?d.isMediaType(a):!1},supportsAdContainerGeometry:function(){return a.environment.supportsAdContainerGeometry()},start:function(){h()&&d.start()},requiresDelayedViewabilityEvent:function(){h()&&b.requiresDelayedViewabilityEvent()}}},pb=function(a,b,
c){var d=l.request("mobileApp");return{create:function(){var e=[],e=e.concat(a.getOmidMeasurementStrategies()),e=e.concat(a.getAvidMeasurementStrategies()),e=e.concat(a.getMraidMeasurementStrategies()),e=(new ha(e)).resolve(),f=new Sc(e),q=new Da(b,c,t,d);return!e&&q.accepts()?new Tc(t.isVideo(),new E):new Rc(e,f,d.isMobileAppEnvironment())}}},qb=function(a){var b=l.request("mobileApp");return{getOmidMeasurementStrategies:function(){var a=l.request("omidVerificationClient"),b=new aa(a),e=new ya,f=
[];if(b.accepts()&&!e.accepts()){var q=new ca,n=new Uc,e=new Vc(a,new E),q=[{environment:q,measurementStrategy:new Wc(a,new E)},{environment:n,measurementStrategy:new Ea(new ia,r.getWindow(),new E)}],q=(q=(new ha(q)).resolve())?q.measurementStrategy:{},p=new Fa(new Ga(new V),new V,n.accepts()),n=new Mc(a,b,m.mode),s=new Ha(e,q,new E,p),b=new Nc(a,b,m.mode),a=new Ia(e,q,new Qc(a,new E),new E,p);f.push({environment:n,measurementStrategy:s});f.push({environment:b,measurementStrategy:a})}return f},getAvidMeasurementStrategies:function(){var b=
l.request("avidJsClient"),d=new Kc(b),e=[];if(d.accepts()){var f=new Jc(b,d,m.mode),q=new Lc(b,d,m.mode),n;n=new Oc(b,new E);if(d.supportsAdContainerGeometry()){var p=new Xc,s=new Yc,k=new Ea(new ia,r.getWindow(),new E),F=new Zc(b,new E),p=(p=(new ha([{environment:p,measurementStrategy:F},{environment:s,measurementStrategy:k}])).resolve())?p.measurementStrategy:{},s=new Fa(new Ga(new V),new V,s.accepts()),k=new $c(b,new E),b=new Ha(k,p,new E,s);n=new Ia(k,p,n,new E,s)}else s=new Pc(b,new E),b=new Ca(s,
new E),n=new Ja(s,n,new E);e.push({environment:f,measurementStrategy:b});e.push({environment:q,measurementStrategy:n});a.setAvidAdSessionContext(d.getAvidAdSessionContext())}return e},getMraidMeasurementStrategies:function(){var a=[],d=b.isSafeToInjectMraid(),d=new ad(r.getWindow(),d,b.isMobileAppEnvironment());if(d.accepts()){var e=l.request("context"),e=new bd(r.getWindow(),e),f=new cd(r.getWindow(),new E);e.accepts()?(d=new dd(r.getWindow(),new E),d=new Ja(f,d,new E),d={environment:e,measurementStrategy:d}):
(e=new Ca(f,new E),d={environment:d,measurementStrategy:e});a.push(d)}return a}}},ha=function(a){return{resolve:function(){var b=f(a).findFirst(function(a,b){return b.environment.accepts()});if(f.isDef(b))return b}}},Sc=function(a){var b=!1,c,d={winDimensions:H({scrX:0,scrY:0,width:0,height:0}),adDimensions:H({scrX:0,scrY:0,width:0,height:0}),containerDimensions:H({scrX:0,scrY:0,width:0,height:0}),method:k.NA,viewState:k.NA,percentInView:k.PIV_NA,reason:"",obstructed:k.NA,isHidden:k.NA,tabHidden:k.NA,
posViewState:k.NA,adCompCount:1},e=function(a){return a?new H({scrX:a.x,scrY:a.y,width:a.width,height:a.height}):H({scrX:0,scrY:0,width:0,height:0})},h=function(a){c={winDimensions:e(a.windowDimensions),adDimensions:e(a.adDimensions),containerDimensions:e(a.containerDimensions),method:a.detectionMethod||k.NA,viewState:a.viewState||k.NA,percentInView:f.isDef(a.percentageInView)?a.percentageInView:k.PIV_NA,reason:a.outOfViewReason||"",obstructed:f.stringifyTriState(a.isObstructed),isHidden:k.NA,tabHidden:k.NA,
posViewState:a.viewState||k.NA,adCompCount:1,shouldDelegateToDomBasedViewability:a.shouldDelegateToDomBasedViewability,sliceStatus:a.sliceStatus,isVideoPlaying:a.isVideoPlaying,isVideoPlayingInFullscreen:a.isVideoPlayingInFullscreen,isSoundOn:a.isSoundOn};a.isMeasurable&&b&&(b=!1,l.trigger("delayedViewabilityReady"))};return{create:function(b){var e=d;if(f.isDef(c))if(a.environment.supportsAdContainerGeometry())e=c;else if(c.shouldDelegateToDomBasedViewability)e=b,e.method=c.method;else if(0===c.percentInView||
75<=c.percentInView)e=c;return e},start:function(){var b;f.isDef(a)&&f.isDef(a.measurementStrategy)&&(b=a.measurementStrategy,b.addMeasurementChangedListener(h),b.start())},requiresDelayedViewabilityEvent:function(){b=!0}}},Ja=function(a,b,c){var d=!1,e=!1,h=!1,q,n,p,s,y=function(){if(!f.isUndef(n)){var a=[],b,u;d?(e?(u=!1,b=100):(u=s,b=p),50>b&&a.push(k.OUT_OF_VIEW_REASONS.GEOM)):(u=!1,b=0,a.push(k.OUT_OF_VIEW_REASONS.VIDEO));h=!0;n.shouldDelegateToDomBasedViewability=u;n.percentageInView=b;n.viewState=
50>b?k.OUT_OF_VIEW:k.IN_VIEW;n.outOfViewReason=a.join(".");q=n;c.trigger("measurementChanged",q)}},r=function(a){n=a;p=a.percentageInView;s=a.shouldDelegateToDomBasedViewability;y()},u=function(a){a=a.eventType;"AdEnteredFullscreen"===a?e=!0:"AdExitedFullscreen"===a?e=!1:-1!=="AdStarted|AdVideoStart|AdPlaying".indexOf(a)?d=!0:-1!=="AdSkipped|AdUserClose|AdPaused|AdVideoComplete|AdStopped".indexOf(a)&&(d=!1);y()};return{start:function(){l.trigger("addOutputItem",{output:k.MEDIA_TYPE.VIDEO_CODE},k.MEDIA_TYPE_CODE,
{type:k.IMPRESSION_EVENT});a.addScreenLocationChangedListener(r);a.start();b.addVideoPlaybackEventListener(u);b.start()},getStrategyName:function(){return k.MEASUREMENT_STRATEGY.VIDEO},addMeasurementChangedListener:function(a){c.on("measurementChanged",a)},isMeasurable:function(){return h}}},bd=function(a,b){return{accepts:function(){return b.isInMobiMraidVideo()},isImmediate:function(){return!1},supportsAdContainerGeometry:function(){return!1},start:function(){try{var b;a.inmobi.IASDocumentVideoBuffer.addVideoEventListener(function(a){"AdVideoStart"!==
a.type||b||(b=!0,l.trigger("adImpression"))})}catch(d){}}}},dd=function(a,b){var c=function(a){try{b.trigger("inMobiMraidVideoPlaybackEvent",{eventType:a.type})}catch(c){}};return{start:function(){try{a.inmobi.IASDocumentVideoBuffer.addVideoEventListener(c)}catch(b){}},addVideoPlaybackEventListener:function(a){b.on("inMobiMraidVideoPlaybackEvent",a)}}},$c=function(a,b){var c=function(a){a={viewport:a.eventData.viewport||{width:0,height:0},originalAdContainer:a.eventData.originalAdContainer||{x:0,
y:0,width:0,height:0},computedAdContainer:a.eventData.computedAdContainer||{x:0,y:0,width:0,height:0},percentageInView:a.eventData.percentageInView,detectionMethod:k.DETECTION_METHODS.AVID,outOfViewReason:d(a.eventData.reasons)};b.trigger("containerGeometryMeasurementChanged",a)},d=function(a){var b={inactive:k.OUT_OF_VIEW_REASONS.FOCUS,viewport:k.OUT_OF_VIEW_REASONS.GEOM,clipped:k.OUT_OF_VIEW_REASONS.GEOM,obstructed:k.OUT_OF_VIEW_REASONS.OBSTRUCTION,backgrounded:k.OUT_OF_VIEW_REASONS.FOCUS,notFound:k.OUT_OF_VIEW_REASONS.HIDDEN},
c=[];if(!a)return"";f(a).each(function(a,d){var e=b[d];e&&0>c.indexOf(c)&&c.push(e)});return c.join(".")};return{start:function(){a.addEventListener("viewability",c)},addAdContainerGeometryMeasurementChangedListener:function(a){b.on("containerGeometryMeasurementChanged",a)},translateAvidOutOfViewReasons:d}},Fa=function(a,b,c){function d(a,b,c){c=n(b,c);a=h(a,b,c);return a.width*a.height}var e=function(a,b){var c=Math.max(a.x,b.x),d=Math.max(a.y,b.y),e=Math.min(a.x+a.width,b.x+b.width),f=Math.min(a.y+
a.height,b.y+b.height),e=e-c,f=f-d;return{x:c,y:d,width:0<e?e:0,height:0<f?f:0}},h=function(a,b,c){a=e(b,a);return e(c,{x:0,y:0,width:a.width,height:a.height})},q=function(a,b){return{x:a.x+b.x,y:a.y+b.y,width:b.width,height:b.height}},n=function(a,b){return{x:b.x-a.x,y:b.y-a.y,width:b.width,height:b.height}};return{calculateGeometricMeasurement:function(e,s){if(f.isDef(e)&&f.isDef(s)){var l=e.viewport,m=e.computedAdContainer,u=m.obstructions,t=u&&0<u.length,v=e.originalAdContainer,A=s.adGeometry,
B=s.adFound,w=e.detectionMethod,z=0,l={x:0,y:0,width:l.width,height:l.height},C=q(v,A),D=e.outOfViewReason,O=0,Q=0,R=t||!1,O=1>=A.width*A.height;c&&O&&(B=!1,D=D||"",B||-1!==D.indexOf(k.OUT_OF_VIEW_REASONS.GEOM)||(D=k.OUT_OF_VIEW_REASONS.GEOM+(""!==D?"."+D:"")));if(B&&0<e.percentageInView){O=d(l,m,C);t?(z=n(m,C),z=h(l,m,z),z=q(m,z),z=a.calculateObstructedArea(z,u)):z=0;Q=z;z=Math.round((O-Q)/(C.width*C.height)*100);t&&0===Q&&(R=!1);for(var A=R,N,t=0,B=b.getConfig(C).numberOfSlices,Q=r.floor(C.height/
B)||1,u=[],O=A?a.getObstructionStatusBySlice(B):[],x,t=0;t<B;t++)N=C.y+Q*t,t==B-1&&(Q=C.y+C.height-N),N={x:C.x,y:N,width:C.width,height:Q},x=d(l,m,N),N=1==x/(N.width*N.height),u.push(N);if(A)for(m=r.min(O.length,B),t=0;t<m;t++)u[t]=u[t]&&!O[t];m=u}else m=b.getConfig(A).defaultSliceArray;return{windowDimensions:l,containerDimensions:v,adDimensions:C,percentageInView:z,viewState:50<=z?k.IN_VIEW:k.OUT_OF_VIEW,outOfViewReason:50<=z?"":D||k.OUT_OF_VIEW_REASONS.GEOM,detectionMethod:w,isObstructed:R,sliceStatus:m}}}}},
Xc=function(){return{accepts:function(){return t.isAvidNative()}}},Zc=function(a,b){var c=function(a){a=a.eventData.originalAdContainer;var c=!!a;b.trigger("avidNativeGeometryChanged",{adGeometry:{x:0,y:0,width:c?a.width:0,height:c?a.height:0},adFound:c})};return{start:function(){a.addEventListener("viewability",c)},addAdGeometryMeasurementChangedListener:function(a){b.on("avidNativeGeometryChanged",a)}}},Yc=function(){return{accepts:function(){return t.isAvid()&&!t.isAvidNative()}}},Ha=function(a,
b,c,d){var e,h,q,n=function(){if(f.isDef(e)&&f.isDef(h)){var a=d.calculateGeometricMeasurement(e,h);q=a.isMeasurable=!0;c.trigger("geometryMeasurementChanged",a)}},p=function(a){e=a;n()},s=function(a){h=a;n()};return{start:function(){l.trigger("addOutputItem",{output:k.MEDIA_TYPE.DISPLAY_CODE},k.MEDIA_TYPE_CODE,{type:k.IMPRESSION_EVENT});a.addAdContainerGeometryMeasurementChangedListener(p);a.start();b.addAdGeometryMeasurementChangedListener(s);b.start()},addMeasurementChangedListener:function(a){c.on("geometryMeasurementChanged",
a)},getStrategyName:function(){return k.MEASUREMENT_STRATEGY.DISPLAY},isMeasurable:function(){return q}}},Ga=function(a){var b=[],c;return{calculateObstructedArea:function(d,e){var h,q,n,p;q=e&&0<e.length;var k;if(q){k=Math.round(d.width);var l=Math.round(d.height);h=Array(k);for(n=0;n<k;n++)h[n]=Array(l);k={matrix:h,obscuredPixelCount:0,x:Math.round(d.x),y:Math.round(d.y),width:k,height:l}}else k={};h=k;l=k=0;if(q){for(;k<e.length;k++){q=e[k];n=l=h;var m=q;h=Math.max(n.x,m.x);q=Math.max(n.y,m.y);
p=Math.min(n.x+n.width,m.x+m.width);m=Math.min(n.y+n.height,m.y+m.height);n=p-h;p=m-q;n=0<n?n:0;p=0<p?p:0;h-=l.x;q-=l.y;n=h+n;p=q+p;for(h=Math.round(h);h<Math.round(n);h++)for(m=Math.round(q);m<Math.round(p);m++)void 0!==l.matrix[h]&&void 0===l.matrix[h][m]&&(l.matrix[h][m]=1,l.obscuredPixelCount+=1);h=l}l=h.obscuredPixelCount;k=h;if(f.isUndef(k.matrix)||0===k.matrix.length)c=[];else{q=0;p=!1;h=k.matrix[0].length;n=k.matrix.length;p=a.getConfig({height:h}).numberOfSlices;for(var m=r.floor(h/p)||1,
u=[],t=0;t<h;t++){p=!1;for(var v=0;v<n;v++)if(1===k.matrix[v][t]){p=!0;break}q++;p&&(t+=m-q,q=m);if(q==m||t===h-1)u.push(p),q=0}c=u}}else c=b;return l},getObstructionStatusBySlice:function(){return c}}},Vc=function(a,b){var c=l.request("omidAdSessionContext"),d=function(a){var c=a.data.adView,d=!!(c.measuringElement&&c.containerGeometry&&c.onScreenContainerGeometry);d&&c.onScreenGeometry.obstructions&&0<c.onScreenGeometry.obstructions.length&&(c.onScreenContainerGeometry.obstructions=c.onScreenGeometry.obstructions);
a={viewport:a.data.viewport||{width:0,height:0},originalAdContainer:c[d?"containerGeometry":"geometry"]||{x:0,y:0,width:0,height:0},computedAdContainer:c["onScreen"+(d?"Container":"")+"Geometry"]||{x:0,y:0,width:0,height:0},percentageInView:c.percentageInView,detectionMethod:k.DETECTION_METHODS.OMID,outOfViewReason:e(c.reasons)};b.trigger("containerGeometryMeasurementChanged",a)},e=function(a){var b={inactive:k.OUT_OF_VIEW_REASONS.FOCUS,viewport:k.OUT_OF_VIEW_REASONS.GEOM,clipped:k.OUT_OF_VIEW_REASONS.GEOM,
obstructed:k.OUT_OF_VIEW_REASONS.OBSTRUCTION,backgrounded:k.OUT_OF_VIEW_REASONS.FOCUS,notFound:k.OUT_OF_VIEW_REASONS.HIDDEN},c=[];if(!a)return"";f(a).each(function(a,d){var e=b[d];e&&0>c.indexOf(c)&&c.push(e)});return c.join(".")};return{start:function(){void 0!==c.impressionViewabilityMeasurement&&d(c.impressionViewabilityMeasurement);a.addEventListener("geometryChange",d)},addAdContainerGeometryMeasurementChangedListener:function(a){b.on("containerGeometryMeasurementChanged",a)},translateOmidOutOfViewReasons:e}},
ca=function(){var a=l.request("omidAdSessionContext");return{accepts:function(){return a&&(a.isNative||a.isGoogleImaGma)}}},Wc=function(a,b){var c=l.request("omidAdSessionContext"),d=function(a){if(a&&a.data&&a.data.adView){var c=a.data.adView.geometry,d=a.data.adView.containerGeometry,f=!!c;a=a.data.adView.measuringElement&&!!d;b.trigger("mobileAppGeometryChanged",{adGeometry:{x:f&&a?c.x-d.x:0,y:f&&a?c.y-d.y:0,width:f?c.width:0,height:f?c.height:0},adFound:f})}};return{start:function(){void 0!==
c.impressionViewabilityMeasurement&&d(c.impressionViewabilityMeasurement);a.addEventListener("geometryChange",d)},addAdGeometryMeasurementChangedListener:function(a){b.on("mobileAppGeometryChanged",a)}}},Uc=function(){var a=l.request("omidAdSessionContext");return{accepts:function(){return a&&!a.isNative}}},Ia=function(a,b,c,d,e){var h=!1,q=!1,n,p,s,m,r,u=function(){if(!(f.isUndef(p)||f.isUndef(s)||f.isUndef(m))){r=!0;var a=e.calculateGeometricMeasurement(p,s),b=h&&q,c=h&&50<=a.percentageInView,l=
{windowDimensions:a.windowDimensions,containerDimensions:a.containerDimensions,adDimensions:a.adDimensions,percentageInView:a.percentageInView,detectionMethod:a.detectionMethod,isMeasurable:!0,isObstructed:a.isObstructed,sliceStatus:a.sliceStatus,isVideoPlaying:h,isVideoPlayingInFullscreen:b,isSoundOn:!0};b&&(l.percentageInView=100);b||c?l.viewState=k.IN_VIEW:(l.viewState=k.OUT_OF_VIEW,l.outOfViewReason=a.outOfViewReason||k.OUT_OF_VIEW_REASONS.VIDEO);n=l;d.trigger("videoGeometryMeasurementChanged",
n)}},t=function(a){p=a;u()},v=function(a){s=a;u()},A=function(a){m=a;a=a.eventType;"AdEnteredFullscreen"===a?q=!0:"AdExitedFullscreen"===a?q=!1:-1!=="AdStarted|AdVideoStart|AdPlaying".indexOf(a)?h=!0:-1!=="AdSkipped|AdUserClose|AdPaused|AdVideoComplete|AdStopped|AdError".indexOf(a)&&(h=!1);u()};return{start:function(){l.trigger("addOutputItem",{output:k.MEDIA_TYPE.VIDEO_CODE},k.MEDIA_TYPE_CODE,{type:k.IMPRESSION_EVENT});a.addAdContainerGeometryMeasurementChangedListener(t);a.start();b.addAdGeometryMeasurementChangedListener(v);
b.start();c.addVideoPlaybackEventListener(A);c.start()},getStrategyName:function(){return k.MEASUREMENT_STRATEGY.VIDEO},addMeasurementChangedListener:function(a){d.on("videoGeometryMeasurementChanged",a)},isMeasurable:function(){return r}}},Ea=function(a,b,c){var d,e=function(){var b=a.find(),e,n=!0;f.isDef(b)?(e=b.getBoundingClientRect(),e={x:e.left,y:e.top,width:e.width,height:e.height},b.hasOwnProperty("adWasClipped")&&(e.adWasClipped=!0)):n=!1;if(b=n)b=e,b=!f.isDef(d)||!1!==f(b).compareTo(d);
b&&(d=e,c.trigger("mobileAppGeometryChanged",{adGeometry:e,adFound:n}))};return{start:function(){e();b.setInterval(e,50)},addAdGeometryMeasurementChangedListener:function(a){c.on("mobileAppGeometryChanged",a)}}},ad=function(a,b,c){return{accepts:function(){var d=f(a.mraid).isObj();return c&&(d||b)},isImmediate:function(){return!0},supportsAdContainerGeometry:function(){return!1},start:function(){}}},cd=function(a,b){var c=!1,d=function(){var c,d,e;try{c=a.mraid.isViewable()?100:0;var f={x:0,y:0,width:0,
height:0};e=100===c?[!0]:[!1];d={windowDimensions:f,adDimensions:f,containerDimensions:f,shouldDelegateToDomBasedViewability:!1,isMeasurable:!0,isObstructed:!1,isHidden:!1,percentageInView:c,detectionMethod:k.DETECTION_METHODS.MRAID,sliceStatus:e};b.trigger("mraidScreenLocationChanged",d)}catch(h){}},e=function(){var b=a.mraid;return f(b).isObj()&&f.isFunction(b.isViewable)},h=function(){var b=a.mraid;d();b.addEventListener("viewableChange",d)},q=function(){var b=a.mraid;e()&&(c=!0,"loading"===b.getState()?
b.addEventListener("ready",function(){h()}):h())},n=function(){c||q()};return{start:function(){var b=!0;if(f.isDef(a.mraid)||v.containsScriptTagWithSrc("mraid.js"))b=!1;l.trigger("addOutputItem",{output:f.stringifyTriState(b)},"mi",{type:"impression"});b?l.trigger("exec","mraid.js",n):q()},addScreenLocationChangedListener:function(a){b.on("mraidScreenLocationChanged",a)}}},$a=function(a,b,c){var d={},e=function(c){var d=f.noop;b.bootstrapOn("useViewabilityNotification")&&(d=function(){a.skipAsFraudulent()||
l.trigger("notify",c)});return d};(function(){c&&f(c).map(function(a,b){d[a]=e(b)})})();return{getCallbacks:function(){return d}}},Ua=function(){var a=new S({tiv:[1E4]}),b=f([k.IN_VIEW,k.PARTIAL_VIEW_PLUS]);return{timeInViewThresholds:a,type:k.DT_CODES.FULLY_INVIEW,rts:{},isInView:function(a){var d=r.max(a.fullPercentInView||0,a.percentInView);return b.contains(a.viewState)&&100===d},applies:function(a,b){return a.on("abcAudit")&&925955==m.anId&&b.usesIASFullyInViewCustomMetric()},minUnit:1E3}},Ta=
function(a,b){var c,d,e;c=a.on("everySecond");var f=b.isVideo();d=[1E3,2E3,3E3,4E3,5E3,6E3,7E3,8E3,9E3,1E4,11E3,12E3,13E3,14E3,15E3];e=[1E3,5E3,15E3,3E4,45E3,6E4,9E4];var q=[2E3,5E3,15E3];c?(c=new S({tiv:d}),d=d[0]):f?(c=new S({tiv:q}),d=q[0]):(c=new S({tiv:e}),d=e[0]);e={5E3:m._onInViewMRC5,15E3:m._onInViewMRC15};e[d]=m._onInViewMRC;return{timeInViewThresholds:c,type:k.DT_CODES.PING,rts:e,isInView:function(a){return-1!==(k.IN_VIEW+"|"+k.PARTIAL_VIEW_PLUS).indexOf(a.viewState)},applies:!0,minUnit:1E3}},
Wa=function(a,b){var c;c=a.on("everySecond");var d=b.isVideo(),e=b.usesIASFullyInViewCustomMetric(),f=[1E3,2E3,3E3,4E3,5E3,6E3,7E3,8E3,9E3,1E4,11E3,12E3,13E3,14E3,15E3],q=[1E3,5E3,15E3],n=[2E3,5E3,15E3],p=function(a){var b=r.max(a.fullPercentInView||0,a.percentInView);return-1!==(k.IN_VIEW+"|"+k.PARTIAL_VIEW_PLUS).indexOf(a.viewState)&&100===b};c=c?new S({tiv:f}):d?new S({tiv:n}):new S({tiv:q});l.provide("isFullyInViewProvider",{isFullyInView:p});return{timeInViewThresholds:c,type:k.DT_CODES.FULLY_INVIEW,
isInView:p,applies:function(){return e},minUnit:1E3}},Va=function(a,b){return{timeInViewThresholds:new S({tiv:[0]}),type:k.DT_CODES.FULLY_INVIEW,rts:{0:m._onInViewFull},isInView:function(a){var b=r.max(a.fullPercentInView||0,a.percentInView);return-1!==(k.IN_VIEW+"|"+k.PARTIAL_VIEW_PLUS).indexOf(a.viewState)&&100===b},applies:function(){return b.usesGroupMCustomMetric()},minUnit:1E3}},Ya=function(a,b){var c,d,e=r.getMaxNumber(),h=b.isVideo(),q=a.id;c=new S(a);(function(){d={};var a;f.isDef(m.rts)&&
f.isDef(m.rts[q])&&(a=c&&f.isFunction(c.getTimeThresholds)&&c.getTimeThresholds()[0],a=f.isFunction(a.getTimeInViewForRts)&&a.getTimeInViewForRts(),d[a]=m.rts[q])})();return{timeInViewThresholds:c,type:k.DT_CODES.CUSTOM,rts:d,isInView:function(b){if(!b.adDimensions)return!1;var c,d,q,l=b.adDimensions.area(),u=1===b.tabHidden,m=r.max(b.fullPercentInView||0,b.percentInView);c=f(a.thresholds).findFirst(function(a,b){d=b.lb||0;q=b.ub||e;if(l>=d&&l<=q)return!0});c=!u&&m>=c.piv;b.method==k.DETECTION_METHODS.AD_PLACEHOLDER&&
0===a.tiv&&(c=!1);h&&(c=c&&b.isVideoPlaying);return c},metricId:q,minUnit:a.minunit?1E3*a.minunit:1E3,thresholdType:a.thresholdType}},Xa=function(a,b,c){var d=b.isVideo()?"video":"display",e=b.isMobileApp()?"app":"web",h=b.isDeviceTypeGroupMobile()?"mobile":"desktop",k=f(a.customViewability).isArray()&&0<a.customViewability.length,n=c.on("customMetric"),p=c.on("groupmCM"),s=function(a,b){var c,k,n,q,s;c=f(b.mediaTypes).contains(d);k=f(b.distributionChannels).contains(e);n=f.isDef(b.deviceGroups)?
f(b.deviceGroups).contains(h):!0;q=M.contains(b.id,"fiv");s=M.contains(b.id,"groupmCM");q=!q;s&&(q=p);return q&&c&&k&&n};return{resolve:function(){var b=[],c;n&&k&&(c=f(a.customViewability).filter(s),f(c).each(function(a,c){b.push(c)}));return b}}},S=function(a){var b=[];if(f(a.tiv).isArray())f(a.tiv).each(function(a,c){b.push(new ja(c))});else if("string"===typeof a.tiv){a=a.tiv.split("|");var c=new ed;b.push(new fd(c,parseInt(a[1].replace("%"))));b.push(new ja(1E3*parseInt(a[0])))}else b.push(new ja(1E3*
a.tiv));return{getTimeThresholds:function(){return b}}},ed=function(){var a=-1,b=function(b){0<a||(b=f.isDef(b.ad_duration)?b.ad_duration:b.adRemainingTime,void 0!==b&&0<b&&(a=Math.ceil(b)))};l.on({omidAdDuration:b,adVideoStart:b,adDurationChange:b});return{getAdDuration:function(){return a},isVideoDurationResolved:function(){return 0<a}}},ja=function(a){var b=0,c;0<a&&(b=a/1E3);c=1E3*b;return{getTimeInViewInSeconds:function(){return b},getTimeInViewForRts:function(){return c}}},fd=function(a,b){var c=
0,d=!1,e=function(a){c=0;0<b&&0<a&&(c=r.ceil(b/100*a))};e(15);return{getTimeInViewInSeconds:function(){!d&&a.isVideoDurationResolved()&&(d=!0,e(a.getAdDuration()));return c},getTimeInViewForRts:function(){return 0}}},cb=function(a,b,c){var d=function(d){a.isInView(d)?(b.mark(),c.doEligibleJobs(b.getTotalTime())):b.stop()};return{start:function(){a.addMeasurementChangedListener(d)}}},bb=function(a,b,c,d){var e,h,k,n,p,s=function(a,b){return!b&&a},m=function(a,b,c,d){return d?!0:!b&&(a||d)&&c},r=function(a){var b=
0,s=1===a.tabHidden,l=a.isVideoPlaying,r=a.isSoundOn,t=a.isVideoPlayingInFullscreen;f(a.sliceStatus).each(function(a,b){k(b,s,l,t)?e[a].mark():e[a].stop();n[a]=e[a].getTotalTime()});u("slcVt",n);d&&(f(a.sliceStatus).each(function(a,b){m(b,s,l,t)&&r?h[a].mark():h[a].stop();p[a]=h[a].getTotalTime()}),u("slcVtVol",p));a=f(n).findFirst(function(a,c){b=Math.max(b,c);return 0>=c});f.isUndef(a)&&c.doEligibleJobs(b)},u=function(a,b){var c={};c[a]=b;l.trigger("addOutputItem",{output:c},{minDt:!1})},t=function(a){!e&&
a.sliceStatus&&(e=[],h=[],n=[],p=[],f(a.sliceStatus).each(function(a){e.push(new ba(1));n.push(0);d&&(h.push(new ba(1)),p.push(0))}))},v=function(a){f.isUndef(a.sliceStatus)||(e||t(a),r(a))};return{start:function(){k=d?m:s;a.addMeasurementChangedListener(v)}}},Za=function(a,b){return{isInView:a.isInView,addMeasurementChangedListener:function(a){b.addMeasurementChangedListener(a)}}},Ib=function(a,b,c,d,e,f,q,n,p,s){var l=!1,m=t.isVideo(),u=f.request("mobileApp"),v=Z().applies(c,e),w=c.browserIs(k.BROWSERS.GECKO)||
c.browserIs(k.BROWSERS.IE)&&e.on("rattie")||v,A=t.xDomainIframe&&!w,B=new wa(10),x=function(){e.on("viewabilityready")&&!l&&(d.send(k.DT_CODES.VIEWABILITY_READY),f.trigger("measurable"),l=!0)};f.on("delayedViewabilityReady",function(){z();x()});f.on("delayedViewabilityReadyCallOnly",x);var z=function(c){c=c||!1;try{B.start();var d,e;b.hasMeasurementStrategy()?e=u.isMobileAppEnvironment()&&b.supportsAdContainerGeometry()?b.getScreenLocationInfo({},c):b.getScreenLocationInfo(n.collect(),c):(e=n.collect(),
u.isMobileAppEnvironment()?(e.viewState=k.NA,e.method=k.NA,e.percentInView=k.NA):A&&(e.viewState=k.NA,e.percentInView=k.PIV_NA),m&&!t.isAvid()&&s.setVideoSpecificScreenEventFields(e));d=p.registerLocation(e);c||a.trigger("measurementChanged",e);B.stop();var l=r.round(B.getTime()/B.getCount());q.addItem({output:l},"lt",{type:k.DT_CODES.UNLOAD});return d}catch(y){f.trigger("error",k.ERROR_CODES.CHECK_SCREEN_LOC)}};return{checkScreenLoc:z,stringifyPingTimes:function(){return e.on("everySecond")?"1-2-3-4-5-6-7-8-9-10-11-12-13-14-15":
m?"2-5-15":"1-5-15"},isImmediatelyMeasurable:function(){var a=t.xDomainIframe,d=a&&c.browserIs(k.BROWSERS.WEBKIT),e=a&&c.browserIs(k.BROWSERS.MSEDGE),a=a&&v,d=!d&&!e&&!a;return u.isMobileAppEnvironment()?b.isMeasurable():d},requiresDelayedViewabilityEvent:function(){u.isMobileAppEnvironment()&&b.hasMeasurementStrategy()&&b.requiresDelayedViewabilityEvent()},addMeasurementChangedListener:function(b){a.on("measurementChanged",b)}}};L("viewabilityLoopLifecycle",["viewability","features","context","browser"],
function(a,b,c,d){var e,h=gd(c),q=[new hd,new id(h)],n=function(){return f(q).findFirst(function(a,e){return e.applies(d,b,c)?e:void 0})},p=function(a){"sessionFinish"===a.type&&l.trigger("adSessionComplete")},s=function(a){x.addEvent(w,a,function(){l.trigger("adSessionComplete")},!1)},y=function(){var a=new $(k.DT_CODES.VIDEO_EVENTS);l.trigger("sendDt",a.callType,a.enumerator,function(){var a={id:m.videoId,msg:"unloadComplete",messageType:"misc"};r.getWindow().postMessage(JSON.stringify(a),"*")})};
l.once("startViewabilityLoop",function(){var b,c=l.request("mobileApp").isMobileAppEnvironment();l.request("ids").impressionIsIdentifiable()&&(e=fc(a.checkScreenLoc,h.getPollingFrequency()),(b=n())?b.start(e):e.start(!0),c?t.isOmid()?l.request("omidVerificationClient").registerSessionObserver(p,"IAS"):s("MOBILE_APP_TEST_EVENT_AD_SESSION_COMPLETE"):s("beforeunload"))});l.once("adSessionComplete",function(){!c.isVideo()||c.isAvid()||c.isOmidNative()||y();l.trigger("unload");e&&e.stop();l.trigger("endAdSession");
l.trigger("stopAdTalk")})},{tier:k.TIERS.VIEWABILITY});var gd=function(a){return{getPollingFrequency:function(){return a.isVideo()?200:100},getOptimizedPollingFrequency:function(){return 1E3}}},id=function(a){var b,c,d,e,f,k=function(p){d&&!f&&1>p?(f=!0,r.setTimeout(function(){k(p)},1E3)):(e=1>p,!c&&e?(c=!0,b.updateFrequency(a.getOptimizedPollingFrequency())):c&&!e&&(c=!1,b.updateFrequency(a.getPollingFrequency(),!0)))},n=function(a){k(a.percentInView)};return{applies:function(a,b,c){var e=l.request("mobileApp");
a=(new Da(b,a,c,e)).accepts();b=b.on("viewabilityOptimization")&&!a;d=c.usesZeroPivCustomMetric();return b},start:function(a){b=a;b.start(!0);l.on("IOPivChange",k);l.on("newScreenEvent",n)}}},hd=function(){var a,b,c,d=!1,e=function(f){if(c&&!d&&1>f)d=!0,r.setTimeout(function(){e(f)},1E3);else return 1>f?(a||b.stop(!0),a=!0):a&&(a=!1,b.start(!0)),a};return{applies:function(a,b,d){c=d.usesZeroPivCustomMetric();var e=Z();return b.on("viewabilityOptimization")&&e.applies(a,b,d)&&d.isDeviceTypeGroupMobile()},
start:function(a){b=a;b.start(!0);l.on("IOPivChange",e)}}},qd=function(a,b,c,d,e,h){var q,n,p,s,y,F,u,J,I,A=v.getElementsWindow(b);v.getElementsDocument(b);l.provide("iframeCalculatorHelper",jd(A));var B=kd(b,d),P=k.AD_IDENTIFIER+"-"+m.asid,z=!1,C=H({}),D=t.isDeviceTypeGroupMobile(),O=t.usesGroupMCustomMetricMobilePassThru(),Q,R=function(){if(!q)if(q=B.calcDims(b,d,p),c===k.DETECTION_METHODS.VIDEO&&t.embedded){var a=q,e=(new H(b)).getRounded();try{a.set("width",e.width),a.set("height",e.height)}catch(f){l.trigger("error",
k.ERROR_CODES.VIDEO_IN_IFRAME_DIMS_CALC)}}else c===k.DETECTION_METHODS.AD_PLACEHOLDER&&q.treatAsPlaceholder();return q},N=function(){var b,d=t.xDomainIframe&&z;b=D&&z&&p.isReady();b=d||b;d=B.getClippedDims&&(c===k.DETECTION_METHODS.VIDEO&&t.embedded||t.isCeltra());b?n=p.getPiv():f.isUndef(n)&&(b=!D&&(t.friendly||f.isDef(w.mozInnerScreenX))&&e.on("offscreen"),J=R(),u=new H(v.calcWinDims()),F=new H(b?v.calcMonDims():{}),I=d?B.getClippedDims():C,n=a.calcPercentInView(J,u,F,I));return n},Ka=function(){return a.calcInitialViewState(N())},
E=function(){return b===w?!1:R().isHidden()},G=function(a,b){return t.isVideo()?r.getDoc().body:a.document&&a.document.body?a.document.body:b.contentDocument&&b.contentDocument.body?b.contentDocument.body:b};(function(){var c=r.getWindow(),e=r.getDoc(),f=b===c,h=e.body,k=new Z,n=l.request("browser"),q=l.request("features"),u=l.request("context"),m=!t.xDomainIframe,v=G(b,d),e=f&&h?e.body:b;Q=t.friendlyIframe?c.frameElement:e;x.addEvent(e,"click",function(){l.trigger("adComponentClicked")});x.addEvent(e,
"mouseover",function(){l.trigger("adComponentMousedOver")});k.applies(n,q,u)?(p=Ec(b,m),p.start(),z=!0,O&&(c=new ld(R().getRounded()),k=new md,v=new nd(v,k),s=new od(c.getSlices(),v))):O&&(y=new pd(a))})();return{mark:function(){v.setAttributeOf(Q,P,"")},cleanup:function(){v.removeAttributeOf(Q,P)},isNode:function(a){return b===a},isHidden:E,isObstructed:function(){return!1},getDims:R,getPercentInView:N,getLocationState:Ka,getOnPageViewability:function(){return E()?k.OUT_OF_VIEW:Ka()},getDetectionMethod:function(){return c},
getContainerDims:function(){return B.allowsOptimization?q:H(d)},refresh:function(){I=J=u=F=n=q=void 0;if(h){var a,c;if(!t.isDomless()&&(c=b.parentNode)){for(;b!==w&&c&&c!==K&&!a;)a=c===d,c=c.parentNode;a||(d=b.parentNode)}}},getAdNode:function(){return b},getSliceStatus:function(){var a;s&&s.isReadyToMeasure()?a=s.getSliceStatus():t.friendly&&y&&f.isDef(J)&&(a=y.getSliceStatus(J,u,F,I));return a}}},rd=function(a,b){var c=[],d,e=f([]),h=function(){return c[0]&&c[0].getDetectionMethod()===k.DETECTION_METHODS.AD_PLACEHOLDER},
q=function(p,n,q,s){var m=h()||0===c.length;p=qd(a,p,n,q,b,s);h()&&(q=c.shift(),e=f(c),q.cleanup(),d=void 0);c.push(p);e=f(c);m&&p.mark();m&&n!==k.DETECTION_METHODS.AD_PLACEHOLDER&&l.trigger("primaryadfound",p)},n=function(){if(d)return d;var a,b=!1,c=0,f=0;e.each(function(d,e){var h;h=e.getDims();h.hasValidDims()&&(a=e.getPercentInView(),b=a!==k.NA,h=h.area(),c+=h,f+=a/100*h)});return d={totalArea:c,totalInView:f,hasMeasurement:b}},p=function(){var a;a=n();a=a.hasMeasurement?r.round(a.totalInView/
a.totalArea*100):k.PIV_NA;isNaN(a)&&(a=0);return a},s=function(){var c=b.bootstrapOn("mobOrTab"),c=n().totalArea>=k.MRC_LARGE_AD_SIZE&&b.on("largeAd")&&!c&&!t.isVideo();return a.calcInitialViewState(p(),c)},m=function(a){var b=-1;e.each(function(c,d){d.isNode(a)&&(b=c)});return b},v=function(a){return function(){return c[0]&&c[0][a]()}};l.on("adComponentAdded",function(a){f(a).each(function(a,b){-1===m(b)&&q(b,k.DETECTION_METHODS.MUTATION)})});l.on("adComponentRemoved",function(a){f(a).each(function(a,
b){var d=m(b);-1<d&&c.splice(d,1)})});return{getDims:v("getDims"),isObstructed:v("isObstructed"),getDetectionMethod:v("getDetectionMethod"),getContainerDims:v("getContainerDims"),getViewState:s,getPercentInView:p,isHidden:v("isHidden"),isUsingPlaceholder:h,hasAd:function(){return!!c.length},refresh:function(){d=void 0;e.each(function(a,b){b.refresh()})},addAdComponent:q,getOutOfViewReasons:function(){var a,b=[],e=c[0],f=k.OUT_OF_VIEW_REASONS;e&&(a=d||s(),a!==k.OUT_OF_VIEW&&a!==k.PARTIAL_VIEW_MINUS||
b.push(f.GEOM),e.isHidden()&&b.push(f.HIDDEN),e.isObstructed()&&b.push(f.OBSTRUCTION));return b},getComponentCount:function(){return c.length},getComponents:function(){return c},getSliceStatus:v("getSliceStatus")}},sd=function(a){var b=!1;if(!f.isUndef(w.MutationObserver)){var c=new MutationObserver(function(a){r.execAtEndOfThread(function(){b&&f(a).each(function(a,b){b.addedNodes.length&&l.trigger("adComponentAdded",b.addedNodes);b.removedNodes.length&&l.trigger("adComponentRemoved",b.removedNodes)})})}),
d=function(){b=!0;r.setTimeout(function(){b=!1},40)};l.on("adComponentClicked",d);l.on("adComponentMousedOver",d);x.whenReady(function(){try{c.observe(K.body,{attributes:!0,childList:!0,characterData:!0})}catch(b){a.add(k.ERROR_CODES.AC_WATCHER)}},r.getDoc())}},zd=function(a,b){var c=[td()],d=[ia(),ud(),vd(),wd(),xd(),yd()],c=c.concat(d);return f(c).findFirst(function(c,d){return d.isApplicable(a,b)})},vd=function(){var a,b,c,d=function(a){a?a&&c&&(r.execAtEndOfThread(function(){l.trigger("delayedViewabilityReadyCallOnly")}),
c=!1):c=!0};return{detectionMethod:function(){return b&&b.detectionMethod},isApplicable:function(a){return a.isBustedIframe()},find:function(){b=b||ga();var c=v.crossQuerySelector(ga().getCssSelector(),!0);a=c?c.parentNode:a;d(c);return c},getAdContainer:function(){return a},allowForAdContainerChange:!0}},Y=function(a,b){var c,d=v.findChildWithLargestContent(a||m.contextNode.parentNode,b);1<v.getNodeArea(d)&&!d[k.IAS_DETECTOR]&&(c=d);return c},xd=function(){return{detectionMethod:k.DETECTION_METHODS.IFRAME,
find:function(){return w},isApplicable:function(){return t.embedded},getAdContainer:function(){return m.contextNode.parentNode},allowForAdContainerChange:!0}},Ad=function(){var a,b=r.getDoc().scripts,c=function(){a||(a=f(b).findFirst(function(a,b){return M.contains(b.src,"servedby.flashtalking")}));return a};return{detectionMethod:k.DETECTION_METHODS.BUSTED_IFRAME_FLASHTALKING,isApplicable:function(a,b){return b.on("bustediframe")&&a.embedded&&void 0!==c()},getCssSelector:function(){var b,e=a||c(),
f=/;(\d+);/;e&&e.src&&(b=e.src.match(f)[1]);return"#ftdiv"+b}}},Bd=function(){return{isApplicable:function(a,b){var c;try{c=v.getFrameId()}catch(d){}return b.on("yieldmo")&&c&&M.contains(c,"_tpi")&&v.crossQuerySelector("[data-href*='ads.yieldmo.com']",!0)},getCssSelector:function(){return"[id='"+v.getFrameId().replace("_tpi","")+"']"},detectionMethod:k.DETECTION_METHODS.BUSTED_IFRAME_YIELDMO}},Cd=function(){var a,b,c=r.getDoc(),d=function(){var b;a||(a=(b=(b=v.querySelector(c,"div[id*='ebDiv']"))&&
b.id)&&b.split("ebDiv")[1]);return a},e=function(){var a;b||(b=(a=(a=v.crossQuerySelector("iframe[id*='ebBannerIFrame_'][id$='"+d()+"']",!0))&&a.id)&&"#"+a);return b};return{detectionMethod:k.DETECTION_METHODS.BUSTED_IFRAME_SIZMEK,isApplicable:function(a,b){var c=r.getWindow(),k=a.friendlyIframe&&r.getWindow().frameElement,k=k&&H(k).isOneByOne(),s=function(){var a=r.getDoc().scripts;return f(a).findFirst(function(a,b){return M.contains(b.src,"bs.serving-sys.com/BurstingPipe/adServer")})}(),c=c.EBG&&
c.EBG.ads&&!f(c.EBG.ads).isEmpty();return b.on("sizmek")&&s&&c&&k&&d()&&e()},getCssSelector:e}},ga=function(){var a,b=l.request("features");a||(a=[Cd(),Bd(),Ad()]);return f(a).findFirst(function(a,d){return d.isApplicable(t,b)})},wd=function(){var a,b=function(){r.execAtEndOfThread(function(){l.trigger("delayedViewabilityReadyCallOnly")})};return{usePlaceholder:!1,detectionMethod:k.DETECTION_METHODS.VENDOR_CELTRA,isApplicable:function(a,b){return b.on("celtra")&&a.isCeltra()},find:function(){var c,
d=za().find();d&&d.celtra&&d.celtra.loaded&&(c=d.celtra.viewabilityObservee,a=v.getElementsWindow(c).frameElement||c.parentNode,b());return c},getAdContainer:function(){return a},allowForAdContainerChange:!1}},za=function(){var a,b=function(){var b;(b=m.contextNode.parentNode)&&M.contains(b.className,"celtra-ad-v3")?a=b:(b=b&&v.querySelector(b,".celtra-ad-v3"))&&(a=b);return a};return{find:b,isApplicable:function(){return void 0!==b()}}},ia=function(){var a=l.request("mobileApp");return{usePlaceholder:!0,
detectionMethod:k.DETECTION_METHODS.AD_HUNT,isApplicable:a.isMobileAppEnvironment,find:function(){var a=v.findChildWithLargestContent(r.getDoc().body);return a&&a.hasValidSizeForMobileApp&&!a[k.IAS_DETECTOR]?a:void 0},getAdContainer:function(){return m.contextNode.parentNode},allowForAdContainerChange:!0}},td=function(){var a;return{detectionMethod:k.DETECTION_METHODS.SPECIFIED_AD,isApplicable:function(){return t.isSpecifiedAd()},find:function(){var b=v.crossQuerySelector(m._cl_adpath);b&&(a=v.getParent(b),
1>v.getNodeArea(b)&&(a=b,b=v.findElementsWithSize(b)));return b},getAdContainer:function(){return a},allowForAdContainerChange:!0}},yd=function(){return{usePlaceholder:!0,detectionMethod:k.DETECTION_METHODS.AD_HUNT,isApplicable:function(){return!0},find:Y,getAdContainer:function(){return m.contextNode.parentNode},allowForAdContainerChange:!0}},ud=function(){return{detectionMethod:k.DETECTION_METHODS.VIDEO,find:l.request("video").findAdNode,isApplicable:t.isVideo,getAdContainer:function(){return m.contextNode.parentNode},
allowForAdContainerChange:!0}},kd=function(a,b){var c,d;c=[Dd(),Ed(),Fd()];d=f(c).findFirst(function(c,d){return d.isApplicable(a,b)});c=Gd();c.isApplicable(b)&&(c.setBaseStrategy(d),d=c);return d},Fd=function(){return{calcDims:function(a,b){var c,d,e=new H(a);v.isClippable(a,b)&&(c=v.getClippedDimensions(a,b),d=e.getRounded(),e.set("height",c.height<d.height?c.height:d.height||1),e.set("width",c.width<d.width?c.width:d.width||1));return e},allowsOptimization:!1,isApplicable:function(a){var b=(t.isSpecifiedAd()||
t.isBustedIframe())&&v.nodeIsInWindow(a,r.getTop());a=!v.elementIsEmbedded(a);return b||a}}},Ed=function(){var a=l.request("iframeCalculatorHelper");return{calcDims:a.calcDims,getClippedDims:a.getClippedDims,allowsOptimization:!0,isApplicable:function(a){return!(t.isSpecifiedAd()||t.isBustedIframe())&&v.elementIsEmbedded(a)}}},Dd=function(){var a=l.request("iframeCalculatorHelper");return{calcDims:function(b){var c=a.calcDims();b=(new H(b)).getRounded();c.set("height",b.height);c.set("width",b.width);
return c},getClippedDims:a.getClippedDims,allowsOptimization:!1,isApplicable:function(a,c){var d=(t.isSpecifiedAd()||t.isBustedIframe())&&t.embedded&&!v.nodeIsInWindow(c,r.getTop()),e=t.isCeltra()&&v.elementIsEmbedded(a);return d||e}}},Gd=function(){var a;return{calcDims:function(b,c,d){d=f.isDef(d)?d.getAdNodeDimensions():void 0;a&&f.isUndef(d)&&(d=a.calcDims(b,c));return d},isApplicable:function(a){a=Z();var c=l.request("browser"),d=l.request("features"),e=l.request("context");return e.isDeviceTypeGroupMobile()&&
a.applies(c,d,e)},allowsOptimization:!1,setBaseStrategy:function(b){a=b}}},jd=function(a){var b,c,d,e=l.request("features"),h=l.request("browser");a=a||r.getWindow();var q=function(b,c){b=b||a;c=c||{top:0,left:0,width:r.getMaxNumber(),height:r.getMaxNumber()};for(var d,e=b.parent.frames,f=!1,h=0,n=e.length;h<n;h++)if(e[h]==b){d=e[h];f=!0;break}if(f){d=v.getRect(d.frameElement);c.left+=d.left;c.top+=d.top;try{c.width=r.min(c.width,d.width),c.height=r.min(c.height,d.height)}catch(m){l.trigger("error",
k.ERROR_CODES.GET_AD_DIMENSIONS)}b!==r.getTop()&&q(b.parent,c)}return c},n=function(){var p,n={};try{var m,F,u,w,x,A,B=r.getMaxNumber(),P=r.getMaxNumber();t.friendly?(m=q(),u=m.left,w=m.top,B=m.width,P=m.height,F=v.browserWindowPosition(),x=F.scrX+u,A=F.scrY+w):e.on("rattie")&&h.browserIs(k.BROWSERS.IE)?(d=d||l.request("ieXDomainViewability"),c=d.determineFramePosition(),x=c.scrX,A=c.scrY):f.isDef(a.mozInnerScreenX)&&(x=r.round(a.mozInnerScreenX),A=r.round(a.mozInnerScreenY));var n={scrX:x,scrY:A,
iFrameClippingWidth:B,iFrameClippingHeight:P},z,C,D=b||v.getIeDimObj(a);b=D;f.isDef(a.innerWidth)?(z=a.innerWidth,C=a.innerHeight):D&&f.isDef(D.clientWidth)?(z=D.clientWidth,C=D.clientHeight,0===z&&0<D.offsetWidth&&(z=D.offsetWidth),0===C&&0<D.offsetHeight&&(C=D.offsetHeight)):a.frameElement&&f.isDef(a.frameElement.clientWidth)&&(z=a.frameElement.clientWidth,C=a.frameElement.clientHeight);p=z;n.height=C;n.width=p}catch(O){l.trigger("error",k.ERROR_CODES.GET_AD_DIMENSIONS)}return n};return{calcDims:function(){return new H(n())},
getClippedDims:function(){var a=n();return new H({scrX:a.scrX,scrY:a.scrY,width:a.iFrameClippingWidth,height:a.iFrameClippingHeight})}}},Cb=function(){return{createInstance:function(a,b,c){return t.isDomless()?new Hd:new Id(a,b,c)}}},Id=function(a,b,c){var d,e=m&&m.contextNode&&m.contextNode.parentNode?m.contextNode.parentNode:null,h=rd(b,c),q=function(){var a,b,e;d=d||zd(t,c);a=d.find();!a&&d.usePlaceholder?n():a&&(a=f(a).isArray()?a:[a],b=d.getAdContainer(),e=d.allowForAdContainerChange,f(a).each(function(a,
c){h.addAdComponent(c,f.resolve(d.detectionMethod),b,e)}))},n=function(){var a;h.hasAd()||(a=v.getPlaceholderSpan(),e.insertBefore(a,m.contextNode.nextSibling),h.addAdComponent(a,k.DETECTION_METHODS.AD_PLACEHOLDER,v.getParent(a)))};sd(a);return{find:function(){h.isUsingPlaceholder()||!h.hasAd()?q():h.refresh();return h},getDetectionMethod:function(){}}},Hd=function(){var a=function(){return null};return{find:a,getDetectionMethod:a}},jb=function(a){var b,c=[],d=a||w,e=function(){return"stub"===k().mode};
a=function(){e()&&(b=d.setInterval(function(){if("stub"!==k().mode){d.clearInterval(b);for(var a=0;a<c.length;a++)d.avid.addEventListener(c[a].type,c[a].functionToExecute)}},10))};var f=function(){return void 0!==d.avid},k=function(){var a,b={};if(f())if(a=d.avid.getAvidAdSessionContext(),"string"===typeof a)try{b=JSON.parse(a)}catch(c){__IntegralASDiagnosticCall("avidadsessioncontext",c,w.bootstrapper)}else"object"===typeof a&&(b=a);return b};t.isDomless()||a();return{isAvidAvailable:f,getAvidAdSessionContext:k,
addEventListener:function(a,b){e()?c.push({type:a,functionToExecute:b}):d.avid.addEventListener(a,b)},getHtmlVideoAvidAdSessionListener:function(){if(e())throw"`HtmlVideoAvidAdSessionListener` is not available while in stub mode.";return d.avid.getHtmlVideoAvidAdSessionListener()}}},ib=function(a){var b=new Jd,c=new Kd;try{if(a.bootstrapOn("mobOrTab")||t.isDomless())b.detect(),b.hasDetectedMobileApp()&&c.detect()}catch(d){l.trigger("error",k.ERROR_CODES.MOBILE_APP)}return{isMobileAppEnvironment:function(){return b.hasDetectedMobileApp()},
isSafeToInjectMraid:function(){return c.isSafeToInjectMraid()}}},Ld={url:{STRINGIFIED_METHOD:"u",detect:function(a){return t.isDomless()?!1:!!f(a).findFirst(function(a,c){return-1!==r.getWindow().location.href.indexOf(c)})}},userAgent:{STRINGIFIED_METHOD:"a",detect:function(a){return t.isDomless()?!1:!!f(a).findFirst(function(a,c){var d;d=!1;var e=r.getWindow();f.isDef(e.navigator)&&f.isDef(e.navigator.userAgent)&&(d=(d=e.navigator.userAgent)&&-1!==d.indexOf(c));return d})}},javascript:{STRINGIFIED_METHOD:"j",
detect:function(a){return!!f(a).findFirst(function(a,c){return f.isDef(M.stringToProp(c))})}},scriptSrc:{STRINGIFIED_METHOD:"s",detect:function(a){return t.isDomless()?!1:!!f(a).findFirst(function(a,c){return v.containsScriptTagWithSrc(function(a){return f.isDef(a)&&-1!==a.indexOf(c)})})}}},La=function(){var a=function(a,c){var d,e=Ld[a];e.detect(c)&&(d=e.STRINGIFIED_METHOD);return d};return{process:function(b){return f(b).map(a).join("")}}},Md={url:"file: content: applewebdata: afma-sdk adsx.greystripe.com/openx/www/delivery/ia.php ads.mopub.com ogury.io".split(" "),
userAgent:["QuantcastSDK","afma-sdk"],scriptSrc:["file:"],javascript:"ADMARVEL mopubFinishLoad InmobiObj PandoraApp mraid.sasSendMessage omidSupported avid.getAvidAdSessionContext".split(" ")},Jd=function(){var a,b=function(){return void 0!==a&&""!==a};return{detect:function(){a=m.hasOwnProperty("serverSideAppDetection")&&0!==m.serverSideAppDetection.length?!0:La().process(Md);b()&&l.trigger("addOutputItem",{output:"1"},"mapp",{type:"impression"})},hasDetectedMobileApp:b}},Kd=function(){var a=[],
b=[],c=function(b,c){var f,k=La().process(c.detectionRules);k&&(a.push(c.STRINGIFIED_SDK+"*"+k),f=c);return f};return{detect:function(){b=f(Nd).map(c);0<b.length&&l.trigger("addOutputItem",{output:function(){return a.join(".")}},"sdk",{type:"impression"})},isSafeToInjectMraid:function(){return 1==b.length&&f.isDef(b[0].safeToInjectMraid)&&b[0].safeToInjectMraid}}},Nd=[{STRINGIFIED_SDK:"adma",safeToInjectMraid:!0,detectionRules:{javascript:["ADMARVEL"],url:["AdMarvel"]}},{STRINGIFIED_SDK:"admb",safeToInjectMraid:!0,
detectionRules:{userAgent:["afma-sdk"],url:["afma-sdk"]}},{STRINGIFIED_SDK:"imbi",safeToInjectMraid:!0,detectionRules:{javascript:["InmobiObj"]}},{STRINGIFIED_SDK:"mmed",detectionRules:{url:["mmsdk"],scriptSrc:["mmsyscache"]}},{STRINGIFIED_SDK:"mopb",safeToInjectMraid:!0,detectionRules:{javascript:["mopubFinishLoad"],url:["ads.mopub.com"]}},{STRINGIFIED_SDK:"pand",detectionRules:{javascript:["PandoraApp"]}},{STRINGIFIED_SDK:"ambe",safeToInjectMraid:!0,detectionRules:{url:["amobee"]}},{STRINGIFIED_SDK:"smat",
safeToInjectMraid:!0,detectionRules:{javascript:["smaato_bridge"]}},{STRINGIFIED_SDK:"afrm",safeToInjectMraid:!0,detectionRules:{javascript:["Adform"]}},{STRINGIFIED_SDK:"vrve",safeToInjectMraid:!0,detectionRules:{javascript:["vrvsdk"]}},{STRINGIFIED_SDK:"sads",detectionRules:{javascript:["mraid.sasSendMessage"]}},{STRINGIFIED_SDK:"ogry",safeToInjectMraid:!0,detectionRules:{url:["ogury.io"]}},{STRINGIFIED_SDK:"cnvt",detectionRules:{url:["adsx.greystripe.com/openx/www/delivery/ia.php"]}}],ld=function(a){var b=
[],c=function(a,b,c){a*=c;return new W(0,b,a,a+c)};(function(){if(10>a.height)b.push({geometry:new W(0,a.width,0,a.height),percentageInViewContribution:100,isInView:!1});else for(var d=a.height/10,e=0;10>e;e++)b.push({geometry:c(e,a.width,d),percentageInViewContribution:10,isInView:!1})})();return{getSlices:function(){return b}}},V=function(){var a=k.VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID.length,b=k.VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID,c=[],d;return{getConfig:function(e){if(d)return d;e.height<
a&&(a=1,b=[100]);for(e=0;e<a;e++)c.push(!1);return d={numberOfSlices:a,defaultSliceArray:c,percentInViewSliceArray:b}}}},Od=function(){var a,b,c=0,d=-1,e=0,h=l.request("browser"),k=function(){var a,b;a=l.request("pageUrls").getDetectedURLs();a=f(a).findFirst(function(a,c){b=void 0;return(b=c&&decodeURIComponent(c).match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/im)[0])&&null!==b.match(/(insider)|(bustle)|(wikia)/i)});return f.isDef(a)};b=r.setInterval(function(){var a=r.now();d=a-e;e=a;
c++;10<=c&&b&&r.clearInterval(b)},50);return{isLikelyToProduceFalsePositive:function(c){var e;c=c.getRounded().height;var f=v.calcMonDims().height,l=h.getUserAgent(),l=l&&null!==l.match(/(FBAN)/)?1:0,m=h.getUserAgent(),m=m&&null!==m.match(/(iPad)/)?1:0,u=k()?1:0,t=h.getUserAgent(),t=t&&null!==t.match(/(Version\/9\.0)|(CriOS\/55)/)?1:0;e=r.pow(Math.E,0.0033*c-9.26E-4*f-0.340351*l-0.874412*m+0.646972*u+0.28118*t+2.987259*(1E3<d?1:0)-2.463292);e/=1+e;a={mbah:c,mbsh:f,mbfb:l,mbip:m,mbhs:u,mbbr:t,mblr:d,
mbp:e};b&&r.clearInterval(b);return 0.15<e},getDebugState:function(){return a}}},Tc=function(a,b,c){var d,e,h,q,n,p=[],s=m.contextNode.parentNode,y=0,v=0,u=!1,w=!1,I=new Od,A=function(){var a=p.length-1,b=-1;-1<a&&(b=p[a].piv);return b},B=function(){l.trigger("delayedViewabilityReadyCallOnly")},P=function(a){x.whenReady(function(){e=new Pd(a,r.getDoc().body)})},z=function(){e.removePixels()},C=function(){var a=I.getDebugState(),b=A();f.isUndef(a)&&(a={});a.mbm=f.fromBoolToNum(w);a.mbrd=f.fromBoolToNum(u);
a.mbtg=f.isDef(s.tagName)?s.tagName:"na";a.mbaf=f.isDef(h)?h:"na";a.mbad=f.isDef(d)?d.getRounded().width+"_"+d.getRounded().height:"na";a.piv=f.isDef(b)?b:-1;b={minDt:!1,type:"dm"};try{l.trigger("addOutputItem",{output:a},b),l.trigger("addOutputItem",{output:-101},"pingTime",b),l.trigger("sendDt",b.type)}catch(c){}};return{getScreenLocationInfo:function(b,c){var s;s=f.isDef(d);if(c||!b.adDimensions)return b;s||(h=b.method,d=b.adDimensions,P(d));if(f.isUndef(e)||!e.isReadyToMeasure())s=!1;f.isUndef(q)&&
s&&(q=I.isLikelyToProduceFalsePositive(d));if(w=!q&&s){var m;s=e.getPercentInView();var z=A(),x=1===b.tabHidden;v=r.now()-y;m=0<y?900>v:!0;y=r.now();0===b.adDimensions.area()&&(s=0);m||(s=0);var C=s;p.push({tm:t.getTagTime(),piv:C});3<p.length&&p.shift();0===s&&0<z&&(m&&(m=p.length-1,C=!0,2<=p.length&&-1<m&&(C=0===p[m].piv&&0===p[m-1].piv),m=!C),m&&(s=z));a?(f.isUndef(n)&&(n=l.request("video")),n.setVideoSpecificScreenEventFields(b),s=b.isVideoPlayingInFullscreen?!0:!x&&50<=s&&b.isVideoPlaying):s=
!x&&50<=s;b.viewState=s?k.IN_VIEW:k.OUT_OF_VIEW;b.percentInView=A();z=[];x=f(b.reason);m=k.OUT_OF_VIEW_REASONS;s||z.push(m.GEOM);x.contains(m.HIDDEN)&&z.push(m.HIDDEN);x.contains(m.OBSTRUCTION)&&z.push(m.OBSTRUCTION);b.reason=z;b.sliceStatus=e.getSliceStatus();u||(u=!0,r.execAtEndOfThread(B))}else b.viewState=k.NA,b.percentInView=-1;return b},start:function(){l.on("endAdSession",z);c&&r.setTimeout(C,2E3)},getStrategyName:function(){return"mobileWebXdomainSafari"},isMeasurable:function(){return w},
isImmediate:function(){return!0},hasMeasurementStrategy:function(){return!0}}},Da=function(a,b,c,d){return{accepts:function(){var e=c.xDomainIframe,f=a.bootstrapOn("mobOrTab"),l=a.on("ios"),n=b.browserIs(k.BROWSERS.WEBKIT),p=9<=b.getIOSVersion(),s=d.isMobileAppEnvironment();return e&&f&&l&&n&&p&&!s},isImmediate:function(){return!1},start:function(){}}},Qd=function(a,b,c,d,e,h,l){var n,p=m.birthdate+""+r.round(1E6*r.random()),s=101,t,v,u,w=!1,x=function(){return'<html><body><script type="text/javascript">'+
("("+function(a){var b=a.document;try{b.body.setAttribute("data-st","iasInit");var c,d=0,e=0,f=!1,h=(new Date).getTime(),k=function(){e=(new Date).getTime()-d;(f=b.body.isReady())&&(c=0<d?900>=e:void 0);d=(new Date).getTime();a.requestAnimationFrame(k)};a.requestAnimationFrame(k);b.body.isInView=function(a){return{isInView:c,rate:e,lastUpdateTimestamp:d}};b.body.getRate=function(){return e};b.body.isReady=function(){return 200<=(new Date).getTime()-h}}catch(n){b.body.setAttribute("data-err",n.toString())}b.body.removeChild(a.document.scripts[0])}.toString()+
")(window);")+"\x3c/script></body></html>"},A=function(a,b){u||(s=a,u=b)},B=function(){var a,b,c;if(u)return!1;if(v)return!0;try{if(t.contentWindow&&t.contentWindow.document&&t.contentWindow.document.body){c=t.contentWindow.document.body;if(a=c.getAttribute("data-err"))throw Error(a);"iasInit"===c.getAttribute("data-st")&&A(104);(b=c.isReady?c.isReady():!1)&&(v=c.isInView?c.isInView:void 0)&&A(105)}}catch(d){A(106,d)}return f.isDef(v)},P=function(a,b,c){var h=K.createElement("iframe");h.id=p;f(h.style).mixin({position:"absolute",
width:d+"px",height:e+"px",backgroundColor:"transparent",border:"none",padding:"0px",margin:"0px",zIndex:"-999"});var n=h.style;h[k.IAS_DETECTOR]="true";n.left=b;n.top=c;a.appendChild(h);t=h;A(102);a=t;try{var l=a.contentWindow,s=x();l.document.open();a.contentWindow.document.write(s);l.document.close()}catch(q){A(103,q)}return h}(a,b,c);return{isInView:function(){var a,b,c=!1;r.now();B()&&(a=v(!0),c=a.isInView,w=!1,n&&(b=20*n.rate+n.lastUpdateTimestamp,0<b&&b<a.lastUpdateTimestamp&&(c=!1,w=!0)),
A(107),n=a);return c},isNotReadyToReport:function(){return!B()},createdElement:t,remove:function(){P.parentNode&&P.parentNode.removeChild(P)},getStatus:function(){return s},getError:function(){return u},isReadingInvalid:function(){return w},getRate:function(){return t.contentWindow&&t.contentWindow.document&&t.contentWindow.document.body&&t.contentWindow.document.body.getRate?t.contentWindow.document.body.getRate():-1},percentInView:h}},Pd=function(a,b,c){var d,e=a.getRounded(),h=[],k=!1;a=V().getConfig(e);
var n=a.percentInViewSliceArray,p=1==a.numberOfSlices,l={mbrd:!1,mbvs:[],mbe:"n",mbv:9,mbs:[],mbm:1,mbivs:[]},m=function(){var a;if(!k)for(k=!0,a=0;a<h.length;a++)if(h[a].isNotReadyToReport()){k=!1;break}return k},v=function(a){var b=[],c=0;r.floor(a.height/n.length);var d=r.floor(a.width/2-1);f(n).each(function(e,f){c=r.floor(a.height*f);c===a.height&&(c-=2);b.push({y:r.floor(c)+"px",x:r.floor(d)+"px",width:2,height:2,percentInView:100*f})});return{get:function(){return b}}},u=function(a){var b=
[{y:"0px",x:"0px",width:a.width,height:a.height,percentInView:100}];return{get:function(){return b}}},w=function(a,b){var c=0;b&&(a.reverse(),f(a).map(function(a,b){b.percentInView=100-b.percentInView}));f(a).findFirst(function(a,b){b.isInView&&(c=r.max(c,b.percentInView));return!b.isInView});return c},x=function(){var a,b,c,d=[];l.mbs=[];f(h).each(function(b,c){a=c.isInView();l.mbs.push(a);d.push({isInView:a,percentInView:c.percentInView})});b=w(d,!1);c=w(d,!0);return r.max(b,c)};(function(){d=p?
u(e):v(e);var a=d.get();f(a).each(function(a,d){var e=new Qd(b,d.x,d.y,d.width,d.height,d.percentInView,c);h.push(e)})})();return{getPercentInView:function(){var a=m(),b=x();l.mbrd=a?1:0;b!=l.mbp&&l.mbivs.push([t.getTagTime(),b]);l.mbp=b;return a?b:-1},removePixels:function(){void 0!==c&&c.stop();f(h).each(function(a,b){try{b.remove()}catch(c){}})},getPixelStateForDebug:function(){l.mbm=1;h&&0<h.length&&(l.mbpr=[],l.mbir=[],f(h).each(function(a,b){l.mbpr.push(b.getRate());l.mbir.push(b.isReadingInvalid()?
1:0)}));return l},isReadyToMeasure:m,getSliceStatus:function(){var a;h&&0<h.length&&(a=[],f(h).each(function(b,c){a.push(c.isInView())}));return a}}},od=function(a,b){var c={mbrd:!1,mbvs:[],mbe:"n",mbv:9,mbs:[],mbm:1,mbivs:[]},d=function(a,b){var c=[],d=a.geometry.value();f(b).each(function(b,e){if(a.geometry.doesIntersect(e)){var f=e.value(),h=Math.max(d.leftX,f.leftX),k=Math.min(d.rightX,f.rightX),l=Math.max(d.topY,f.topY),f=Math.min(d.bottomY,f.bottomY);c.push(new W(h,k,l,f))}});return c},e=function(a,
b){var c=0,e=d(a,b),h;f(e).each(function(a,b){h=b.value();c+=h.area});return c},h=function(){var b=0;c.mbs=[];f(a).each(function(a,d){c.mbs.push(d.isInView);d.isInView&&(b+=d.percentageInViewContribution)});return b};b.addListener(function(b){f(a).each(function(a,c){c.isInView=e(c,b)>=c.geometry.value().area})});return{getPercentInView:function(){var a=h();c.mbrd=1;a!==c.mbp&&c.mbivs.push([t.getTagTime(),a]);return c.mbp=a},removePixels:function(){void 0!==b&&b.stop()},getPixelStateForDebug:function(){c.mbm=
1;c.mbpr=[];c.mbir=[];f(a).each(function(a,b){c.mbpr.push(k.NA);c.mbir.push(!1)});return c},isReadyToMeasure:function(){return!0},getSliceStatus:function(){var b=[];f(a).each(function(a,c){b.push(c.isInView)});return b}}},pd=function(a){var b=V();return{getSliceStatus:function(c,d,e,f){var k,l=[];k=c.getRounded();c=k.height;var p=k.scrY,s=new H({scrX:k.scrX,width:k.width}),m=b.getConfig(k).numberOfSlices;s.set("height",r.floor(c/m));for(var t=0;t<m;t++)s.set("scrY",r.ceil(p+c/m*t)),k=100===a.calcPercentInView(s,
d,e,f),l.push(k);return l}}},W=function(a,b,c,d){var e=Math.ceil(a),f=Math.ceil(b),k=Math.ceil(c),l=Math.ceil(d),p=f-e,s=l-k,m=p*s,r=function(){return{leftX:e,rightX:f,topY:k,bottomY:l,width:p,height:s,area:m}};return{value:r,doesIntersect:function(a){var b=r();a=a.value();return a.leftX<b.rightX&&a.rightX>b.leftX&&a.topY<b.bottomY&&a.bottomY>b.topY}}},md=function(){return{createInstance:function(a,b){return new IntersectionObserver(a,b)}}},nd=function(a,b){var c,d=[],e=[],h=function(){f(d).each(function(a,
b){b(e)})},k=function(){var a=[];f(e).each(function(b,c){var d=c.value(),e=a,f=d.topY;-1===e.indexOf(f)&&e.push(f);e=a;d=d.bottomY;-1===e.indexOf(d)&&e.push(d)});return a=a.sort(function(a,b){return a-b})};(function(){c=b.createInstance(function(b){var d=b.pop(),f=d.boundingClientRect;b=f.width;var l=d.intersectionRatio,d=d.intersectionRect,m=d.left-f.left,f=d.top-f.top,f=new W(m,m+d.width,f,f+d.height);e.push(f);f=k();e=[];for(d=0;f.length>d&&f.length!==d+1;d++)e.push(new W(0,b,f[d],f[d+1]));h();
1===l&&(c.unobserve(a),c.disconnect())},{threshold:[0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1]})})();c.observe(a);return{addListener:function(a){d.push(a)}}},Rd=function(){return{listenForResult:function(){l.on("videoBlockResult",function(a){var b=l.request("adNode"),c=!1,d="blockAd"+m.videoId;"failed"===a.action&&(c=!0);if(b&&f.isDef(b.blockAd))b.blockAd(c);else if(b&&f.isDef(b[d]))b[d](c)})}}},Sd=function(a,b){var c,d,e,h,k;e=l.request("videoTranslator").translate(a.messageType);h=function(a){a=a.eventData||
{};a=f({}).mixin(a);a.ext_passthrough&&delete a.ext_passthrough;return a}(a);k=function(a){var b;a=a.eventData&&a.eventData.ext_passthrough;var c=function(a,b){var c={};c["x_"+a]=b;return c};a&&(b=f(a).mapToObj(c));return b}(a);d={t:a.time-m.birthdate,tp:e,sl:b};f(d).mixin(h);f(d).mixin(k);return c=f({indicatesPlaying:function(){return-1!=="showAd|adImpression|adVideoStart|resumeAd".indexOf(e)},indicatesNotPlaying:function(){return-1!=="adVideoComplete|adStopped|stopAd|pauseAd".indexOf(e)},indicatesFullscreen:function(){var a=
r.getWindow();return("resizeAd"===e||"initAd"===e)&&("fullscreen"===h.viewMode||h.width===a.screen.width)},indicatesNormalSize:function(){return"resizeAd"===e&&"normal"===h.viewMode},indicatesCompletion:function(){return-1!=="adStopped|adVideoComplete|adSkipped|adError".indexOf(e)},updateScreenLoc:function(a){d.sl=a;c.sl=a},trigger:function(){"adImpression"===e?l.persistentTrigger(e,h,k):l.trigger(e,h,k)},toString:function(){return"{"+f(d).toParams()+"}"}}).mixin(d)},Td=function(){var a=[];return{registerEvent:function(b,
c){var d=new Sd(b,c);a.push(d);return d},toString:function(){return"{"+f({vEventCount:a.length,vEvents:"["+a.join(",")+"]"}).toParams()+"}"},isEmpty:function(){return 0===a.length}}},Ud=function(){var a,b,c,d=function(d){c=f.isDef(d)?0===d:c;b&&c&&a.addState({isFullyInView:function(){return!1}})},e=function(){a&&a.hasAlwaysBeen(!0)&&l.trigger("sendDt",k.DT_CODES.QUARTILE_FULLY_INVIEW)},h=function(){b=!0;d()},m=function(a){a=(new Ma).getVolumeFromContext(a);d(a)};return{isApplicable:function(a){return a.usesGroupMCustomMetric()},
start:function(c){l.on({adVideoStart:h,adImpression:h,volumeChanged:m,adVideoMidpoint:e});a=c.createViewabilityTracker("mpt",function(a){var c=l.request("isFullyInViewProvider");return!b||c&&c.isFullyInView(a)})}}},Vd=function(){var a={AdPaused:"pauseAd",AdVolumeChange:"volumeChanged",AdPlaying:"resumeAd"};return{translate:function(b){var c=b.charAt(0).toLowerCase()+b.slice(1);b in a&&(c=a[b]);return c}}},Ma=function(){return{getVolumeFromContext:function(a){var b,c=-1;f.isDef(a)&&(f.isDef(a.volume)?
c=a.volume:f.isDef(a.adVolume)&&(c=a.adVolume));-1!==c&&(b=c);return b}}},db=function(a,b,c){var d="IASid"+a,e="getIasVidBridgeVersion"+a,h,q,n,p=[],s=k.OUT_OF_VIEW,v=!1,w=!1,u=!1,J=!0,I=new Td,A=Ud(),B=new Rd,E=function(b){v=!0;var d,e={};try{e=JSON.parse(unescape(b&&b.data?b.data:b))}catch(f){e={}}e.id==a&&(d=I.registerEvent(e,c.getCurrentLoc()),d.indicatesPlaying()?(w=!0,s=u?k.IN_VIEW:!1):d.indicatesNotPlaying()?(w=!1,s=k.OUT_OF_VIEW):d.indicatesFullscreen()?(u=!0,s=w?k.IN_VIEW:k.OUT_OF_VIEW):
d.indicatesNormalSize()&&(u=!1,s=w?!1:k.OUT_OF_VIEW));b=d;p.push(b);n&&H();return b},z=function(b){var c,h,k=ra().wrapToGlobal(E),p=function(a){f.isStr(a)&&(l.provide("vc",function(){return a}),l.trigger("addOutputItem",{output:a},"vc",{type:"impression"}))};try{h=b[e]||b.getIasVidBridgeVersion,c=f.isFunction(h)&&"2"===h.call(b)?unescape(b[d].call(b,a,k)):unescape(b[d].call(b,a)),v=!0,p(c||"n")}catch(n){__IntegralASDiagnosticCall("handshakefailure",n,m)}},C=function(){var c=function(a){return f(f(a).toArray()).findFirst(function(a,
b){return f.isFunction(b[d])})};h||(f([".integral-vid-"+a,"ias-ad","object","embed"]).findFirst(function(a,b){var d=r.getDoc().querySelectorAll(b);return h=c(d)}),!h&&b.on("novidnodeerr")&&__IntegralASDiagnosticCall("novidnode",{},m));return h},D=function(){var a=C();a&&!v&&z(a);return a},G=function(a){a=(new Ma).getVolumeFromContext(a);J=f.isDef(a)?0<a:!1},H=function(){f(p).each(function(a,b){b&&(f.isUndef(b.sl)&&b.updateScreenLoc(c.getCurrentLoc()),b.trigger(),b.indicatesCompletion()&&l.trigger("adSessionComplete"))});
p=[];n=!0};(function(){x.addEvent(r.getWindow(),"message",function(a){E(a)});l.on({volumeChanged:G});l.provide({videoEventsString:I,videoVersion:function(){var a,b=D();try{a=b.getVersion()}catch(c){a=-1,l.trigger("error",k.ERROR_CODES.NO_VIDEO_AD_INTERFACE)}return a},videoTranslator:function(){return q=q||new Vd},adNode:D});D();B.listenForResult();A.isApplicable(t)&&A.start(c)})();return{findAdNode:D,getViewStateOverride:function(){return s},isHandshakeComplete:function(){return v},triggerInitializationEvents:H,
setVideoSpecificScreenEventFields:function(a){var b=a.viewState===k.NA;a.isVideoPlaying=!0;a.isSoundOn=J;a.isVideoPlayingInFullscreen=!1;if(s){if(s===k.OUT_OF_VIEW){var c=a.reason?a.reason.split("."):[];c[c.length]=k.OUT_OF_VIEW_REASONS.VIDEO;a.reason=c.join(".")}a.viewState=b?a.viewState:s;a.isVideoPlaying=s===k.IN_VIEW}u&&w&&(a.percentInView=100,a.isVideoPlayingInFullscreen=!0)}}},Wd=function(){return new ka(k.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.AS.TYPE,function(a,b){return a.timestamp-b.timestamp},
k.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.AS.COUNT)},Qb=function(){var a,b,c={},d=0,e=function(c){if(c||a)d+=5,b.onTick(d,function(){a?e():l.trigger("sendDt",k.DT_CODES.PERFORMANCE)}),a=!1},h=function(){b=new xa;d=0;e(!0);b.start()},m=function(d,e,k,l){d=c[d];l?(f.isDef(d[e])||(d[e]=[]),d[e].push(k)):d[e]=k;b&&b.isActive()||h();a=!0},n=function(c,d,e){l.trigger("addOutputItem",{output:d},c,e);b&&b.isActive()||h();a=!0},p=function(b){f(c).each(function(d,e){var h=c[d],k={type:b,oneTime:!0,minDt:!0,asION:!0};
f(h).isEmpty()||(l.trigger("addOutputItem",{output:h},d,k),c[d]={});a=!1})};return{start:function(){l.on("preSendDt",function(a){p(a);b&&b.kill()});l.on("addThrottledProp",m);l.on("addThrottledOutputItem",n)},addFieldTypes:function(a){f(a).each(function(a,b){c[b]={}})}}},Vb=function(){var a={},b=function(b){a[b]||(a[b]=new wa(1,m.birthdate));return a[b]},c=function(a){b(a).start()},d=function(a){var c=b(a);c.stop();l.trigger("addThrottledProp","im",a,c.getTime())};return{start:function(){l.on({markTime:c,
measureTime:d})},isApplicable:function(a){return a.on("pIntervals")}}},Xd=function(){return new ka(k.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.JS.TYPE,function(a,b){return a.timestamp-b.timestamp},k.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.JS.COUNT)},Ab=function(a){var b={},c=a instanceof Array&&a.length;c&&(f(a).each(function(a,c){b[c.getType()]=c}),l.on("perfCheckpoint",function(a){var c=b[a.type];if(c)try{c.addPoint(a),c.isFinished()&&(l.trigger("addOutputItem",{output:c.toString()},"pci",{minDt:!0,type:k.DT_CODES.PERFORMANCE}),
l.trigger("sendMinDt",k.DT_CODES.PERFORMANCE))}catch(f){}}));l.provide("perfActive",function(){return c});return{isActive:c}},ka=function(a,b,c){var d=0,e=[],h=function(){var a,c={};e.sort(b);f(e).each(function(b,e){a&&(c[e.code]=e.timestamp-a);b===d&&(a=e.timestamp)});return c};return{addPoint:function(a){e.push(a)},toString:function(){return f(h()).toION()},getType:function(){return a},setBaseOrdinal:function(a){d=a},isFinished:function(){return e.length===c}}},Bb=function(){function a(){}a.build=
function(){var a=[],c=l.request("vc"),d={jv3:Na,av3:Na,jvw:Xd,avw:Wd};c&&d[c]&&a.push(d[c]());return a};return a}(),Na=function(){return new ka(k.PERF_TIMELINE_TRACKER_CONFIG.VANS.TYPE,function(a,b){return a.code-b.code},k.PERF_TIMELINE_TRACKER_CONFIG.VANS.COUNT)},T={IDS:{BLOCK_TIME:"pBlk",ON_LOAD:"pLoad",IN_BROWSER_DELAY:"pWait"},recordBlockingTime:function(){l.trigger("measureTime",T.IDS.BLOCK_TIME)},setupOnLoadTracking:function(){x.addEvent(w,"load",function(){l.trigger("measureTime",T.IDS.ON_LOAD)})},
setupBrowserDelayTracking:function(){var a=new xa;a.onTick({4:function(){l.trigger("markTime",T.IDS.IN_BROWSER_DELAY)},5:function(){l.trigger("measureTime",T.IDS.IN_BROWSER_DELAY)}});a.start()}};L("GDPRConsentDetector",[],function(){var a="ias_"+m.asid,b,c,d=function(b){try{if(b&&b.data&&b.data.__cmpReturn&&b.data.__cmpReturn.callId===a&&b.data.__cmpReturn.returnValue){var h=b.data.__cmpReturn.returnValue,m=f.isDef(h)&&f.isDef(h.vendorConsents)&&f.isDef(h.vendorConsents[278])?h.vendorConsents[278]:
void 0,n={appl:f.stringifyTriState(h.gdprApplies),cnst:f.stringifyTriState(m),glbl:f.stringifyTriState(h.hasGlobalConsent),mtdt:encodeURIComponent(h.metadata)};l.trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,"gcd",f(n).toION());x.removeEvent(c,"message",d)}}catch(p){l.trigger("error",k.ERROR_CODES.GDPR)}};(function(){var e;e=r.getWindow();for(var h=r.getTop();!b;){try{e.frames.__cmpLocator&&(b=e)}catch(m){}if(e===h)break;e=e.parent}e=!!b;l.trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,"gca",
f.stringifyTriState(e));e&&(c=r.getWindow(),e={__cmpCall:{command:"getVendorConsents",parameter:[278],callId:a}},x.addEvent(c,"message",d),b.postMessage(e,"*"))})()},{tier:k.TIERS.ENVIRONMENT,applies:function(a,b,c){return b.hasPostMessage()&&!c.isDomless()}});L("postMessageDetector",[],function(){var a=!1,b="pmdetector"+m.asid,c=function(c){(c&&c.data)===b&&(a=!0)};(function(){var d=r.getWindow();x.addEvent(d,"message",c);d.postMessage(b,"*");r.execAtEndOfThread(function(){l.trigger("addThrottledProp",
k.DT_SLOT.IM,"pom",f.stringifyTriState(a));x.removeEvent(d,"message",c)})})()},{tier:k.TIERS.ENVIRONMENT,applies:function(a,b,c){return a.on("pmdetect")&&b.hasPostMessage()}});L("safeFrameDetector",[],function(){l.trigger("addThrottledProp",k.DT_SLOT.IM,"sf",f.stringifyTriState(t.isSafeFrame()))},{tier:k.TIERS.ENVIRONMENT,applies:function(a,b,c){return a.on("sfdetect")}});var Ob=function(){var a=m.asid,b=m.cookieBaseURL,c=m.protocol,d=function(a){f(a).each(function(a,b){l.trigger("notify",b)})},e=
function(){var e;e=new U(c+"://"+b,!0);e.setParam("asid",a);e=e.toString();l.trigger("jsonp",e,d,!0);l.trigger("updateDtCount")};return{start:function(){l.on("sendCookie",e)},isApplicable:function(a){return a.on("cookie")&&a.bootstrapOn("sendCookie")&&a.bootstrapperHas(["protocol","cookieBaseURL","asid"])}}},Pb=function(a,b,c,d,e,f,q){var n=function(a,b){return isNaN(a)||0>a||""===a?b:a};return{send:function(p){try{var s,r=d.baseUrl,t,u,v=f.getDocumentMode();"number"===typeof v?(u=2E3,8===v?u=4E3:
8<v&&(u=8E3)):u=n(m.sp_imp_maxLength,2E3);t=u;u=r=r.replace("[IAS_ASID]",m.asid);var w=r.length,x,B,E=n(m.sp_imp_jsInfo_minLength,0),v="";try{x=t-w-E,0<x&&(B=Yd(p,x,14,b.on("partialUrls")),v+=B.join("&"))}catch(z){a.add(k.ERROR_CODES.IMPRESSION_URLS)}r=u+v;p=r+="&"===r.slice(-1)?"":"&";var C,w="";try{C=t-r.length,w+=Zd(C,"adsafe_jsinfo=",a,b,c,e,f,q)}catch(D){a.add(k.ERROR_CODES.JSINFO),w+="adsafe_jsinfo=e:"+a.toString()}r=p+w;d.macroUrl&&(r+="&"===r.slice(-1)?"":"&",r+=d.macroUrl);s=r;d.sendImpression(s);
m.impUrl=s;l.trigger("impressionsent")}catch(G){__IntegralASDiagnosticCall("impsend",G,m)}}}},Zd=function(a,b,c,d,e,h,l,n){return function(c){var d=c.primary.join(","),h=b,k=0,l=function(a){if(a)return","+a};h.length+d.length+5<=a&&(h+=l(d),e.impressionIsIdentifiable(!0),f(c.secondary).each(function(b,c){h.length+c.length+5<=a?h+=l(c):k+=1}));return h+=",ov:"+k}(function(){var a,b;b=a={viewState:k.NA};t.isDomless()?b=n.checkScreenLoc(!0)||a:d.on("impFailSafe")?r.getDoc().body&&(b=(b=n.checkScreenLoc(!0))?
b:a):f.isDef(r.getDoc().body)&&(b=n.checkScreenLoc(!0));n.isImmediatelyMeasurable()||n.requiresDelayedViewabilityEvent();a=b;var v=a.viewState;b=e.getAvidIds();v=["id:"+m.asid,"c:"+e.getCacheBustId(),"sl:"+v,"em:"+t.embedded,"fr:"+t.friendly];d.on("avidPropertiesInImpression")&&f.isDef(b)&&(v.push("abi:"+b.bundleIdentifier),v.push("apn:"+b.partner),v.push("apv:"+b.partnerVersion));a=$d(a,c,d,e,h,l,n);return{primary:v,secondary:a}}())},$d=function(a,b,c,d,e,h,q){var n=[],p=l.request("mPage");n.push("mn:"+
m.mn);n.push("pt:"+function(){var b=q.stringifyPingTimes();a.viewState!==k.NA&&(b+=a.details);return b}());n.push(f(h.params()).toParams());c.on("mrcAudit")&&!t.isDomless()&&n.push("dvs:"+r.getDoc().visibilityState);e.iterate(function(a,b){var c=!b.props||f.isUndef(b.props.type),d=!b.props||b.props.type===k.IMPRESSION_EVENT;(c||d)&&n.push(a+":"+b.output())});b.toString()&&n.push("e:"+b.toString());n.push(c.output());n.push("tt:"+m.mode);n.push("thd:"+f.stringifyTriState(p.supportsVisAPI()));n.push("et:"+
(r.now()-m.birthdate));m.perf.mark("si");c.on("swapids")?n.push("oid:"+m.oid):n.push("uid:"+d.unq);n.push("v:17.4.179");n.push("sp:"+(m.isSplitMode?1:0));c.on("resolution")&&(n.push("wr:"+f(v.windowSize()).toArray().join(".")),n.push("sr:"+f(v.screenSize()).toArray().join(".")));return n},Yd=function(a,b,c,d){var e,h=[],k=function(a){return-1!==a.key.indexOf("q")||-1!==a.key.indexOf("g")};a&&a.length&&(e=f(a).map(function(a,b){if(k(b))return b}),a=f(a).map(function(a,b){if(!k(b))return b}),f(e.concat(a)).each(function(a,
e){var f;f=e.val;var k=e.key,l;l=24+h.join("&").length+k.length+c;l=b-l;d&&l<f.length&&0<l&&(f=f.substr(0,l));if(f.length||""===e.val||""===e.type)f="adsafe_url="+f+"&adsafe_type="+k,k=h.join("&").length,f.length+k<=b&&h.push(f)}));return h},Mb=function(){return{isApplicable:function(a){a=r.getWindow();return!(!a.navigator||!a.navigator.plugins)},start:function(a){a=r.getWindow();a=ae(a.navigator.plugins);var b=a.hash(),c=b.join(".");l.trigger("addOutputItem",{output:c},"pl",{type:k.IMPRESSION_EVENT});
b.length&&(a=a.decode(b),a=a.join("."),l.trigger("addOutputItem",{output:a},"pd",{type:k.DT_CODES.ADTALK}))}}},de=function(a,b){return{start:function(){try{var c=be(),d=c.getMethodName(a),e=new U(b.getEnabledScriptUrl(a)),f=ce,m=r.getDoc();(new f(m.body||m.head||m.documentElement,e)).getWindow()[d]=c.getMethod(b)}catch(n){l.trigger("error",k.ERROR_CODES.FEATURE_SCRIPT)}}}},be=function(){var a=function(a,c,d){a===m.asid&&(d.unshift(c),l.trigger.apply(null,d))};return{getMethod:function(b){return function(c){var d=
{asid:m.asid,constant:k,features:b,context:t,dtBaseURL:m.dtBaseURL};"function"===typeof c&&c(a,d)}},getMethodName:function(a){return"register_"+a}}},Tb=function(){return{start:function(a,b){f(a).each(function(a,d){b.getEnabledScriptUrl(d)&&de(d,b).start()})}}},ae=function(a){return{hash:function(){for(var b=0,c=a.length,d=[],e;b<c;b++)e=a[b].filename.replace(/\.plugin$/,""),e=M.hashCode(e),e=f.toBase(e,62).slice(-4),d.push(e);return d},decode:function(b){var c,d;c=r.floor(r.random()*b.length);d=encodeURIComponent(a[c].filename.replace(/\.plugin$/,
""));return[b[c],d]}}},ce=function(a,b){var c,d=/MSIE [1-9][^0-9]/g;(function(b){var f;c=v.createHiddenIframe();c.setAttribute("src","about:blank");(a||m.contextNode.parentNode).appendChild(c);f=c.contentWindow.document;if(navigator&&"string"==typeof navigator.userAgent&&-1!==navigator.userAgent.search(d)){var k,l;k=(new Date).getTime();l=Math.floor(1E5*Math.random());b=b+"?t="+k+"&r="+l}b=["<head></head><body onload=\"var d = document;var s = d.createElement('script');d.getElementsByTagName('head')[0].appendChild(s).src",
"='"+b+"'\">"].join("");f.open().write(b);f.close()})(b);return{getWindow:function(){return c.contentWindow}}};try{Oa()}catch(ee){__IntegralASDiagnosticCall("main",ee,m)}};try{(function(){var m=__IntegralASConfig.useFIF?__IASScope.parent:__IASScope;__IntegralASConfig.initialize(__IntegralASConfig,m,m.document)})()}catch(err$$10){__IntegralASDiagnosticCall("initialize",err$$10,__IntegralASConfig)};
