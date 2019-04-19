/* begin: ../../../../cpf/blocks/common/cpf-basic/cpf-basic.helpers.js */
(function(global) {
	"use strict";

	var oObjectPrototype = Object.prototype;
	var fHasOwnProperty = oObjectPrototype.hasOwnProperty;
	var oArrayProto = Array.prototype;
	var typeOf = (function() {
		var aClsNames = [
			"Object",
			"Array",
			"Boolean",
			"Date",
			"Function",
			"Number",
			"Null",
			"RegExp",
			"String",
			"Undefined",
			"Arguments",
			"Error",
			"Math",
			"JSON"
		];
		var toStr = oObjectPrototype.toString;
		var oStrToType = {};
		var sObject = aClsNames[0].toLowerCase();
		var className;

		for (var classNo = aClsNames.length; classNo--; ) {
			className = aClsNames[classNo];
			oStrToType[
				"[" + sObject + " " + className + "]"
			] = className.toLowerCase();
		}
		return function typeOf(mObj, sType) {
			var sObjType = typeof mObj;
			if (sObjType === sObject || sObjType === "function") {
				sObjType =
					mObj === null ? "null" : oStrToType[toStr.call(mObj)] || sObject;
			}
			return sType ? sType === sObjType : sObjType;
		};
	})();

	function getNameSpace(mName, oPrnt, bCreate) {
		var aName = !Array.isArray(mName) ? mName.split(".") : mName;
		var oCurLevel = oPrnt || global;
		var sCurName, mNextLevel;
		bCreate = bCreate !== false;

		for (var lvlNo = 0; lvlNo < aName.length; lvlNo += 1) {
			sCurName = aName[lvlNo];
			mNextLevel = oCurLevel[sCurName];
			if (!typeOf(mNextLevel, "object")) {
				if (bCreate) {
					oCurLevel[sCurName] = mNextLevel = {};
				}
			}
			oCurLevel = mNextLevel;
			if (oCurLevel === null || typeOf(oCurLevel, "undefined")) {
				break;
			}
		}
		return oCurLevel;
	}

	/**
	 * Получение данных из объекта по "цепочке" ключей
	 * @param {Array|String} mName
	 * @param {object} oParent
	 * @returns {*}
	 */
	function getByPath(mName, oParent) {
		var aName = Array.isArray(mName) ? mName : mName.split(".");
		var oTarget = getNameSpace(
			aName.slice(0, aName.length - 1),
			oParent,
			false
		);
		var mResult;
		if (!(oTarget === null || typeOf(oTarget, "undefined"))) {
			// если не null или undef - можно получить свойство
			mResult = oTarget[aName.pop()];
		}
		return mResult;
	}
	function isPlainObject(mObject) {
		var bIsObject =
			mObject &&
			typeOf(mObject, "object") &&
			!(mObject.nodeType || mObject === mObject.window);
		var sKeyName;

		try {
			bIsObject =
				bIsObject &&
				!(
					mObject.constructor &&
					!fHasOwnProperty.call(mObject, "constructor") &&
					!fHasOwnProperty.call(mObject.constructor.prototype, "isPrototypeOf")
				);
		} catch (ex) {
			bIsObject = false;
		}
		if (bIsObject) {
			for (sKeyName in mObject) {
				continue;
			} // находит последний ключ объекта
			bIsObject =
				typeOf(sKeyName, "undefined") ||
				fHasOwnProperty.call(mObject, sKeyName);
		}
		return bIsObject;
	}
	function extend() {
		var target,
			aModifiers,
			isDeep,
			oProps,
			targetVal,
			modfVal,
			recCont,
			mdfrIsArr,
			trgtType;
		if (typeOf(arguments[0], "boolean")) {
			isDeep = oArrayProto.shift.apply(arguments);
		}
		if (arguments.length < 2) {
			return arguments[0];
		}
		target = oArrayProto.shift.apply(arguments);
		trgtType = typeOf(target);
		if (
			!(
				trgtType === "object" ||
				trgtType === "function" ||
				trgtType === "array"
			)
		) {
			target = {};
		}
		aModifiers = arguments;

		for (var mdfNo = 0; mdfNo < aModifiers.length; mdfNo += 1) {
			oProps = aModifiers[mdfNo];
			if (oProps != null) {
				for (var propName in oProps) {
					if (
						!(
							fHasOwnProperty.call(oProps, propName) &&
							oProps[propName] !== target
						)
					) {
						continue;
					}
					targetVal = target[propName];
					modfVal = oProps[propName];
					if (
						((mdfrIsArr = Array.isArray(modfVal)) || isPlainObject(modfVal)) &&
						isDeep
					) {
						if (mdfrIsArr) {
							recCont = Array.isArray(targetVal) ? targetVal : [];
						} else {
							recCont = typeOf(targetVal, "object") ? targetVal : {};
						}
						target[propName] = extend(true, recCont, modfVal); // TODO первый аргумент - {}
					} else if (!typeOf(modfVal, "undefined")) {
						target[propName] = modfVal;
					}
				}
			}
		}
		return target;
	}
	function merge() {
		var mergeList = [];
		var isDeep = false;
		var mCurProp;
		var mTrgtProp;
		var currentVal;
		var target;
		var curPropType;
		var trgtPropType;
		var arrayArgs;
		var arrayProps;
		if (typeOf(arguments[0], "boolean")) {
			isDeep = oArrayProto.shift.call(arguments);
		}
		mergeList = oArrayProto.reduce.call(
			arguments,
			function(list, argument) {
				var argType = typeOf(argument);
				var targetType = list.length > 0 && typeOf(list[0]);
				if (
					targetType
						? argType === targetType
						: argType === "array" || argType === "object"
				) {
					list.push(argument);
				}
				return list;
			},
			mergeList
		);
		target = mergeList.shift();
		arrayArgs = Array.isArray(target);
		if (mergeList.length) {
			for (var argNo = 0; argNo < mergeList.length; argNo++) {
				currentVal = mergeList[argNo];

				for (var propName in currentVal) {
					if (fHasOwnProperty.call(currentVal, propName)) {
						curPropType = typeOf((mCurProp = currentVal[propName]));
						trgtPropType = typeOf((mTrgtProp = target[propName]));
						if (
							curPropType === trgtPropType &&
							(curPropType === "object" ||
								(arrayProps = curPropType === "array")) &&
							mCurProp !== mTrgtProp &&
							isDeep
						) {
							target[propName] = merge(
								true,
								arrayProps ? [] : {},
								mTrgtProp,
								mCurProp
							);
						} else if (trgtPropType !== "undefined") {
							if (arrayArgs) {
								target.push(mCurProp);
							} else {
								target[propName] = [].concat(mTrgtProp, mCurProp);
							}
						} else {
							target[propName] = mCurProp;
						}
					}
				}
			}
		}
		return target;
	}

	var oCpf = getNameSpace("ru.mail.cpf");
	extend(oCpf, {
		Basic: {
			Extend: extend,
			Merge: merge,
			getByPath: getByPath,
			typeOf: typeOf
		}
	});
	global.getNameSpace = getNameSpace;
})(
	(function() {
		return this;
	})()
);

/* end: ../../../../cpf/blocks/common/cpf-basic/cpf-basic.helpers.js */
/* begin: ../../../../fest/blocks/common/fest-helpers/fest-helpers.helpers.js */
(function(global) {
	var cpf = global.ru.mail.cpf;
	var basic = cpf.Basic;
	var typeOf = basic.typeOf;
	var extend = basic.Extend;
	extend(global.getNameSpace("fest._helpers"), {
		classNamesFor: (function() {
			var classNameParamsList = ["mix", "mods"];
			return function classNamesFor(blockName, blockParams) {
				var classNames = [blockName];
				if (typeof blockParams === "object") {
					for (
						var paramVal, paramNo = classNameParamsList.length;
						paramNo--;

					) {
						if (
							Array.isArray(
								(paramVal = blockParams[classNameParamsList[paramNo]])
							)
						) {
							if (paramNo === 1) {
								blockName += "_";

								for (var modNo = 0; modNo < paramVal.length; modNo++) {
									classNames.push(blockName + paramVal[modNo]);
								}
							} else {
								classNames = classNames.concat(paramVal);
							}
						}
					}
				}
				return classNames.join(" ");
			};
		})(),
		getByPath: basic.getByPath,
		mergeTopParams: (function() {
			var PARAMS = ["mix", "mods", "attrs"];
			return function() {
				return Array.prototype.slice
					.apply(arguments)
					.reduce(function(result, source) {
						if (typeOf(source, "object")) {
							PARAMS.forEach(function(propName) {
								var sourceVal = source[propName];
								if (Array.isArray(source[propName])) {
									result[propName] = result[propName] || [];
									Array.prototype.push.apply(result[propName], sourceVal);
								} else if (typeOf(sourceVal, "object")) {
									result[propName] = result[propName] || {};
									for (var sourceProp in sourceVal) {
										if (sourceVal.hasOwnProperty(sourceProp)) {
											result[propName][sourceProp] = sourceVal[sourceProp];
										}
									}
								}
							});
						}
						return result;
					}, {});
			};
		})(),
		mergeParams: (function() {
			var PARAMS_FOR_EXTEND = ["mix", "mods", "attrs"];
			var REWRITE_KEY = "_rewrite";
			var CHILDREN_KEY = "_children";
			function mergeAllParams(target, modifier) {
				for (var blockName in modifier) {
					if (modifier.hasOwnProperty(blockName)) {
						var targetBlock = target[blockName];
						var modifierBlock = modifier[blockName];
						if (
							typeOf(modifierBlock, "object") &&
							(typeOf(targetBlock, "object") ||
								typeOf(targetBlock, "undefined"))
						) {
							target[blockName] = mergeParams(targetBlock, modifierBlock);
						}
					}
				}
			}
			function mergeChildrenParams(target, modifier) {
				var targetChildren = (target[CHILDREN_KEY] =
					target[CHILDREN_KEY] || {});
				var modifierChildren = modifier[CHILDREN_KEY];

				for (var blockName in modifierChildren) {
					if (modifierChildren.hasOwnProperty(blockName)) {
						targetChildren[blockName] = mergeParams(
							targetChildren[blockName],
							modifierChildren[blockName]
						);
					}
				}
			}
			function mergeParams() {
				var argsList = Array.prototype.slice.apply(arguments);
				var deep = true;
				var target, modifier, rewrite, targetVal, modifierVal, rewriteProp;
				if (typeOf(argsList[0], "boolean")) {
					deep = argsList.shift();
				}
				if (argsList.length < 2) {
					return;
				}
				target = argsList.shift();
				if (!typeOf(target, "object")) {
					target = {};
				}

				for (var mdfNo = 0; mdfNo < argsList.length; mdfNo += 1) {
					modifier = argsList[mdfNo];
					rewrite = modifier && modifier[REWRITE_KEY];
					if (modifier != null) {
						for (var propName, propNo = PARAMS_FOR_EXTEND.length; propNo--; ) {
							propName = PARAMS_FOR_EXTEND[propNo];
							if (
								(modifier.hasOwnProperty(propName) ||
									(rewriteProp =
										rewrite && rewrite.hasOwnProperty(propName))) &&
								modifier[propName] !== target
							) {
								targetVal = target[propName];
								modifierVal = modifier[propName];
								if (rewriteProp) {
									targetVal = rewrite[propName];
								} else if (modifierVal) {
									if (Array.isArray(targetVal) || Array.isArray(modifierVal)) {
										targetVal = targetVal
											? targetVal.concat(modifierVal)
											: modifierVal;
									} else if (
										typeOf(modifierVal, "object") &&
										(!targetVal || typeOf(target, "object"))
									) {
										targetVal = targetVal
											? extend(true, {}, targetVal, modifierVal)
											: modifierVal;
									}
								}
								target[propName] = targetVal;
							}
						}
						if (deep) {
							mergeAllParams(target, modifier);
						} else if (modifier.hasOwnProperty(CHILDREN_KEY)) {
							mergeChildrenParams(target, modifier);
						}
					}
				}
				return target;
			}
			return mergeParams;
		})(),
		extend: extend,
		/**
		 * Аватар пользователя
		 * @param  {Object} params          Параметры
		 * @param  {string} params.email    Email пользователя
		 * @param  {string} params.name     Имя пользователя
		 * @param  {number} [params.width]  Размер аватара, по умолчанию 45px
		 * @return {string}                 Полный путь до аватары
		 */
		avatar: function(params) {
			params = params || {};
			if ("width" in params) {
				params.height = params.width;
			}
			return (
				"//cp-filin.mail.ru/pic?" +
				["email", "name", "width", "height"]
					.reduce(function(list, param) {
						if (params[param]) {
							list.push(param + "=" + encodeURI(params[param]));
						}
						return list;
					}, [])
					.join("&")
			);
		},
		/**
		 * Плейсхолдер lazy-загрузки картинок
		 * @param  {number} height Высота заглушки
		 * @param  {number} width  Ширина заглушки
		 * @param  {string} type   Иконка в заглушке. Поддреживается три типа: photo, embed, video.
		 * @return {string}        Возвращает encode svg-картинка. Для поддержки IE11+ намеряно убран charset.
		 */
		svgPlaceholder: function(height, width, type) {
			type = type || "photo";
			width = width || 640;
			height = height || 360;

			var splash =
				'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {{w}} {{h}}" width="{{w}}" height="{{h}}"><rect x="0" y="0" width="{{w}}" height="{{h}}" fill="none"/></svg>';
			return (
				"data:image/svg+xml," +
				encodeURIComponent(
					splash.replace(/{{w}}/g, width).replace(/{{h}}/g, height)
				)
			);
		},
		escHtml: function(str) {
			return str.replace(/[&<>"'\x2F]/g, function(s) {
				var entityMap = {
					"&": "&amp;",
					"<": "&lt;",
					">": "&gt;",
					'"': "&quot;",
					"'": "&#39;",
					"/": "&#x2F;"
				};

				return entityMap[s];
			});
		},
		getPlural: function fGetPlrl(num, aEnds) {
			num = num % 100;

			if (num > 10 && num < 20) {
				return aEnds[2];
			} else {
				num = num % 10;
				switch (num) {
					case 1:
						return aEnds[0];
					case 2:
					case 3:
					case 4:
						return aEnds[1];
					default:
						return aEnds[2];
				}
			}
		},

		/**
		 * Авторесайз картинки до определенного размера
		 * pre_rect(80x60|90x70|112x63|129x97|140x100|140x105|150x84|150x112|160x120|224x126|235x255|240x180|258x194|300x168|320x240|330x235|465x255|480x290|500x230|764x478|768x180|960x580|1920x212)
		 * @param  {object} src
		 * @param  {object} params
		 * @return {string}
		 */
		imageSizeUrl: function(src, params) {
			params = params || {};
			params.format = params.format || "crop";
			var form =
				params.height && params.width !== params.height ? "rect" : "square";
			var format;
			switch (form) {
				case "square":
					format = "/pre_square" + params.width + "_" + params.format;
					break;
				case "rect":
					format =
						"/pre_rect" +
						params.width +
						"x" +
						params.height +
						"_" +
						params.format;
					break;
			}
			if (src && format) {
				if (src.indexOf("http") === -1) {
					return format + src;
				} else {
					var srcArr = src.split("/pic/");
					return srcArr[0] + format + "/pic/" + srcArr[1];
				}
			}
			return src;
		}
	});
})(
	(function() {
		return this;
	})()
);

/* end: ../../../../fest/blocks/common/fest-helpers/fest-helpers.helpers.js */
/* begin: ./ct-viewbox-popup.tmp.fest.js */

;(function (x) {
	var template = function (__fest_context){"use strict";var __fest_self=this,__fest_buf="",__fest_chunks=[],__fest_chunk,__fest_attrs=[],__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn,__fest_html="",__fest_blocks={},__fest_params,__fest_element,__fest_debug_file="",__fest_debug_line="",__fest_debug_block="",__fest_htmlchars=/[&<>"]/g,__fest_htmlchars_test=/[&<>"]/,__fest_short_tags = {"area":true,"base":true,"br":true,"col":true,"command":true,"embed":true,"hr":true,"img":true,"input":true,"keygen":true,"link":true,"meta":true,"param":true,"source":true,"wbr":true},__fest_element_stack = [],__fest_htmlhash={"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"},__fest_jschars=/[\\'"\/\n\r\t\b\f<>]/g,__fest_jschars_test=/[\\'"\/\n\r\t\b\f<>]/,__fest_jshash={"\"":"\\\"","\\":"\\\\","/":"\\/","\n":"\\n","\r":"\\r","\t":"\\t","\b":"\\b","\f":"\\f","'":"\\'","<":"\\u003C",">":"\\u003E"},___fest_log_error;if(typeof __fest_error === "undefined"){___fest_log_error = (typeof console !== "undefined" && console.error) ? function(){return Function.prototype.apply.call(console.error, console, arguments)} : function(){};}else{___fest_log_error=__fest_error};function __fest_log_error(msg){___fest_log_error(msg+"\nin block \""+__fest_debug_block+"\" at line: "+__fest_debug_line+"\nfile: "+__fest_debug_file)}function __fest_replaceHTML(chr){return __fest_htmlhash[chr]}function __fest_replaceJS(chr){return __fest_jshash[chr]}function __fest_extend(dest, src){for(var i in src)if(src.hasOwnProperty(i))dest[i]=src[i];}function __fest_param(fn){fn.param=true;return fn}function __fest_call(fn, params,cp){if(cp)for(var i in params)if(typeof params[i]=="function"&&params[i].param)params[i]=params[i]();return fn.call(__fest_self,params)}function __fest_escapeJS(s){if (typeof s==="string") {if (__fest_jschars_test.test(s))return s.replace(__fest_jschars,__fest_replaceJS);} else if (typeof s==="undefined")return "";return s;}function __fest_escapeHTML(s){if (typeof s==="string") {if (__fest_htmlchars_test.test(s))return s.replace(__fest_htmlchars,__fest_replaceHTML);} else if (typeof s==="undefined")return "";return s;}var json=__fest_context;try{json = json || {}; (json.CONSTANTS = (json.CONSTANTS || {})).TARGET = {};}catch(e){__fest_log_error(e.message);}__fest_blocks["deti-viewbox"]=function(params){var __fest_buf="";__fest_select="viewbox";__fest_params={};try{__fest_extend(__fest_params,{
					mix: ["js-popup"],
					close: {
						mix: ["js-popup_close"],
						icon: {
							name: "icon_close",
							mods: ["close", "size_20", "fill_current-color"]
						}
					},
					slider: true,
					listParams: {
						mix: ["js-photo_slider"]
					},
					listContentParams: {
						mix: ["js-photo_slider_wrap"]
					},
					previewsParams: {
						mix: ["js-photo_slider_cont"]
					},
					innerParams: {
						mix: ["js-popup_close"]
					},
					slidesParams: {
						mix: ["js-slider__content", "js-photo_shares"]
					},
					containerParams: {
						mix: ["js-slider__container"]
					},
					controls: {
						previous: {
							icon: {
								name: "icon_navigation_drop-previous",
								mods: ["fill_white", "size_36"]
							},
							mix: ["js-photo_ctrl"],
							attrs: {
								"data-direction": "prev"
							}
						},
						next: {
							icon: {
								name: "icon_navigation_drop-next",
								mods: ["fill_white", "size_36"]
							},
							mix: ["js-photo_ctrl"],
							attrs: {
								"data-direction": "next"
							}
						}
					}
				})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;};__fest_blocks.viewbox__more=function(params){var __fest_buf="";__fest_buf+=("<div class=\"viewbox__more\">");var i,direction,__fest_to0,__fest_iterator0;try{__fest_iterator0=['previous', 'next'] || [];__fest_to0=__fest_iterator0.length;}catch(e){__fest_iterator0=[];__fest_to0=0;__fest_log_error(e.message);}for(i=0;i<__fest_to0;i++){direction=__fest_iterator0[i];try{__fest_if=params.fakecontrols && params.fakecontrols[direction]}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_params={
							baseClass: 'viewbox__fakecontrol',
							baseParams: fest._helpers.mergeTopParams(params.fakecontrols[direction], {
								mods: [direction]
							})
						}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}}try{__fest_if=params.hdr}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<div class=\"viewbox__hdr\">");__fest_select="hdr";__fest_params={};try{__fest_params=params.hdr}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);__fest_buf+=("</div>");}try{__fest_if=params.buttons}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<div class=\"viewbox__buttons\">");var i,button,__fest_to1,__fest_iterator1;try{__fest_iterator1=params.buttons || [];__fest_to1=__fest_iterator1.length;}catch(e){__fest_iterator1=[];__fest_to1=0;__fest_log_error(e.message);}for(i=0;i<__fest_to1;i++){button=__fest_iterator1[i];__fest_select="button";__fest_params={};try{__fest_extend(__fest_params,button)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,fest._helpers.mergeTopParams(
									button,
									{
										mix: i ? ['margin_left_10'] : [],
										mods: ['opaque']
									}
								))}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}__fest_buf+=("</div>");}try{__fest_if=params.grid}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<div class=\"viewbox__grid\">");__fest_select="grid";__fest_params={};try{__fest_params=params.grid}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);__fest_buf+=("</div>");}try{__fest_if=params.topics}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<div class=\"viewbox__forum\">");__fest_select="cols";__fest_params={};try{__fest_extend(__fest_params,{
								mods: ['percent', 'margin'],
								mix: ['padding_left_20']
							})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;var i,topic,__fest_to2,__fest_iterator2;try{__fest_iterator2=params.topics || [];__fest_to2=__fest_iterator2.length;}catch(e){__fest_iterator2=[];__fest_to2=0;__fest_log_error(e.message);}for(i=0;i<__fest_to2;i++){topic=__fest_iterator2[i];__fest_select="cols__column";__fest_params={};try{__fest_extend(__fest_params,{
											mods: ['small_percent-50', 'medium_percent-50', 'large_percent-50'],
											mix: i > 1 ? ['margin_top_10'] : []
										})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_select="forum-topic";__fest_params={};try{__fest_params=topic}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);__fest_buf+=("</div>");}try{__fest_if=params.slot}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<div class=\"viewbox__slot\">");__fest_select="rb-slot";__fest_params={};try{__fest_params=params.slot}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);__fest_buf+=("</div>");}__fest_buf+=("</div>");return __fest_buf;};__fest_blocks.viewbox__list=function(params){var __fest_buf="";__fest_select="element";__fest_params={};try{__fest_params={
				baseParams: params.listParams,
				baseClass: 'viewbox__list',
				elem: {
					baseParams: params.listContentParams,
					baseClass: 'viewbox__list-content',
					elem: {
						baseParams: params.previewsParams,
						baseClass: 'viewbox__previews'
					}
				}
			}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;};__fest_blocks.viewbox__error=function(params){var __fest_buf="";__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'viewbox__error'
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=params.icon}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="icon";__fest_params={};try{__fest_params=fest._helpers.mergeParams(params.icon, {
							mix: ['margin_bottom_70', 'viewbox__error-icon']
						})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}__fest_buf+=("<span class=\"viewbox__error-text\">");try{__fest_buf+=(params.text || 'Ошибка загрузки изображения')}catch(e){__fest_log_error(e.message + "241");}__fest_buf+=("</span>");__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params.button)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
							baseClass: 'viewbox__button',
							mods: ['error'],
							html: params.button && params.button.text || 'Перезагрузить'
						})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.viewbox__control=function(params){var __fest_buf="";__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'viewbox__control'
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_buf+=("<div class=\"viewbox__arrow\">");try{__fest_if=params.icon}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="icon";__fest_params={};try{__fest_params=params.icon}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}__fest_buf+=("</div>");return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.element=function(params){var __fest_buf="";try{var blockParams = params.baseParams || params.forParams || params;
			var attrs = blockParams.attrs || {};
			var baseClass = params.baseClass || params.forClass || '';
			var elem = params.elem;
			var htmlDeep = params.htmlDeep;

			if (elem && htmlDeep && !elem.htmlDeep) {
				elem.htmlDeep = htmlDeep
			} else if (!elem && htmlDeep) {
				params.html = htmlDeep;
			}

			if (params.href) {
				attrs.href = params.href;
			}}catch(e){__fest_log_error(e.message);}try{__fest_element=((attrs.href && 'a') || params.tagName || 'div');if(typeof __fest_element !== "string"){__fest_log_error("Element name must be a string");__fest_element="div"}}catch(e){__fest_element="div";__fest_log_error(e.message);}__fest_element_stack.push(__fest_element);__fest_buf+=("<" + __fest_element);__fest_buf+=(" class=\"");try{__fest_select=(fest._helpers.classNamesFor(baseClass, blockParams))}catch(e){__fest_select="";__fest_log_error(e.message)}__fest_buf+=(__fest_select);__fest_buf+=("\"");var attrName,attrValue,__fest_iterator7;try{__fest_iterator7=attrs || {};}catch(e){__fest_iterator={};__fest_log_error(e.message);}for(attrName in __fest_iterator7){attrValue=__fest_iterator7[attrName];try{__fest_select=(attrName)}catch(e){__fest_select="";__fest_log_error(e.message)}if(__fest_select!==""){__fest_buf+=(" " + __fest_select + "=\"");try{__fest_buf+=(__fest_escapeHTML(attrValue))}catch(e){__fest_log_error(e.message + "556");}__fest_buf+=("\"");}}var attrName,attrValue,__fest_iterator8;try{__fest_iterator8=params.attrsNoEscape || {};}catch(e){__fest_iterator={};__fest_log_error(e.message);}for(attrName in __fest_iterator8){attrValue=__fest_iterator8[attrName];try{__fest_select=(attrName)}catch(e){__fest_select="";__fest_log_error(e.message)}if(__fest_select!==""){__fest_buf+=(" " + __fest_select + "=\"");try{__fest_buf+=(attrValue)}catch(e){__fest_log_error(e.message + "561");}__fest_buf+=("\"");}}__fest_element=__fest_element_stack[__fest_element_stack.length-1];__fest_buf+=(__fest_element in __fest_short_tags?"/>":">");try{__fest_if=params.htmlPrepend}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.htmlPrepend)}catch(e){__fest_log_error(e.message + "567");}}try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "570");}}try{__fest_if=params.elem}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_params=params.elem}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.elems}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){var i,elem,__fest_to9,__fest_iterator9;try{__fest_iterator9=params.elems || [];__fest_to9=__fest_iterator9.length;}catch(e){__fest_iterator9=[];__fest_to9=0;__fest_log_error(e.message);}for(i=0;i<__fest_to9;i++){elem=__fest_iterator9[i];try{__fest_if=elem}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_params=elem}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}}}try{__fest_if=params.htmlAppend}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.htmlAppend)}catch(e){__fest_log_error(e.message + "583");}}__fest_element = __fest_element_stack[__fest_element_stack.length - 1];if(!(__fest_element in __fest_short_tags)){__fest_buf+=("</" + __fest_element + ">")}__fest_element_stack.pop();return __fest_buf;};__fest_blocks.loader=function(params){var __fest_buf="";try{__fest_attrs[0]=__fest_escapeHTML(fest._helpers.classNamesFor('loader', params))}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<svg class=\"" + __fest_attrs[0] + "\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\" version=\"1.1\" viewBox=\"-10 -10 220 220\"><defs><linearGradient id=\"transparent\" gradientUnits=\"objectBoundingBox\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"rgba(119, 119, 119, 0)\" stop-opacity=\"0\"></stop><stop offset=\"100%\" stop-color=\"rgba(119, 119, 119, 0)\" stop-opacity=\"0\"></stop></linearGradient><linearGradient id=\"one\" gradientUnits=\"objectBoundingBox\" x1=\"1\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"rgba(119, 119, 119, 0)\" stop-opacity=\"0\"></stop><stop offset=\"100%\" stop-color=\"rgba(119, 119, 119, .33)\"></stop></linearGradient><linearGradient id=\"two\" gradientUnits=\"objectBoundingBox\" x1=\"1\" y1=\"1\" x2=\"0\" y2=\"0\"><stop offset=\"0%\" stop-color=\"rgba(119, 119, 119, .33)\"></stop><stop offset=\"100%\" stop-color=\"rgba(119, 119, 119, .66)\"></stop></linearGradient><linearGradient id=\"three\" gradientUnits=\"objectBoundingBox\" x1=\"0\" y1=\"1\" x2=\"0\" y2=\"0\"><stop offset=\"0%\" stop-color=\"rgba(119, 119, 119, .66)\"></stop><stop offset=\"100%\" stop-color=\"rgba(119, 119, 119, 1)\"></stop></linearGradient><linearGradient id=\"four\" gradientUnits=\"objectBoundingBox\" x1=\"0\" y1=\"1\" x2=\"1\" y2=\"0\"><stop offset=\"0%\" stop-color=\"rgba(119, 119, 119, 1)\"></stop><stop offset=\"100%\" stop-color=\"rgba(119, 119, 119, 1)\"></stop></linearGradient><linearGradient id=\"five\" gradientUnits=\"objectBoundingBox\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0%\" stop-color=\"rgba(119, 119, 119, 1)\"></stop><stop offset=\"100%\" stop-color=\"rgba(119, 119, 119, 1)\"></stop></linearGradient></defs><g fill=\"none\" stroke-width=\"40\" transform=\"translate(100,100)\"><path d=\"M 81.6,-40 A 90,90 0 0,1 81.6,40\" stroke=\"url(#transparent)\"></path><path d=\"M 81.6,40 A 90,90 0 0,1 0,90\" stroke=\"url(#one)\"></path><path d=\"M 0,90 A 90,90 0 0,1 -81.6,40\" stroke=\"url(#two)\"></path><path d=\"M -81.6,40 A 90,90 0 0,1 -81.6,-40\" stroke=\"url(#three)\"></path><path d=\"M -81.6,-40 A 90,90 0 0,1 0,-90\" stroke=\"url(#four)\"></path><path d=\"M 0,-90 A 90,90 0 0,1 81.6,-40\" stroke=\"url(#five)\" stroke-linecap=\"round\"></path></g></svg>");return __fest_buf;};__fest_blocks["rb-slot"]=function(params){var __fest_buf="";try{
				var unserialize = function (str) {
					var obj = {};

					if (str) {
						str = decodeURIComponent(str);
						var chunks = str.split('&');

						for (var c = 0; c < chunks.length; c++) {
							var split = chunks[c].split('=', 2);
							obj[split[0]] = split[1];
						}
					}
					return obj;
				};
			var extend = ru.mail.cpf.Basic.Extend;

			var allowedParamsList = ['sitezone', 'siteid', 'string', 'region'];
			var queryParams = params.queryParams || {};
			var customQueryString = params.customQueryString || '';
			var customQueryParams = unserialize(customQueryString);

			var mergedQueryParams = extend({}, queryParams, customQueryParams);

			var paramList = [];
			var path;
			var comment;

			if (params.id) {
				path = '/rb/' + params.id;
				comment = path;

				allowedParamsList.reduce(function (paramList, paramName) {
					if (params[paramName]) {
						paramList.push('_' + paramName.toUpperCase() + '=' + params[paramName]);
					}
					return paramList;
				}, paramList);

				var mergedQueryParamsKeys = Object.keys(mergedQueryParams);

				if (mergedQueryParamsKeys.length) {
					mergedQueryParamsKeys.reduce(function (paramList, paramName) {
						paramList.push(paramName + '=' + mergedQueryParams[paramName]);
						return paramList;
					}, paramList);
				}

				if (paramList && paramList.length) {
					path += '?' + paramList.join('&');
					comment = path;
				}

				if (params.name) {
					comment += ' (' + params.name + ')';
				}
			}}catch(e){__fest_log_error(e.message);}try{__fest_if=comment}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<!-- ");try{__fest_buf+=(comment)}catch(e){__fest_log_error(e.message + "700");}__fest_buf+=(" -->");}try{__fest_if=params.beforeInclude}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.beforeInclude)}catch(e){__fest_log_error(e.message + "704");}}try{__fest_if=params.async}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params.asyncParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
							baseClass: 'rb-slot'
						})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}else{try{__fest_if=path}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<!--#include virtual=\"");try{__fest_buf+=(path)}catch(e){__fest_log_error(e.message + "718");}__fest_buf+=("\" wait=\"yes\"-->");}else{}}try{__fest_if=params.afterInclude}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.afterInclude)}catch(e){__fest_log_error(e.message + "722");}}try{__fest_if=comment}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<!-- \/");try{__fest_buf+=(comment)}catch(e){__fest_log_error(e.message + "726");}__fest_buf+=(" -->");}return __fest_buf;};__fest_blocks.element_ssi=function(params){var __fest_buf="";try{var attrs = params.attrs || {};
			if (params.href) {
				attrs.href = params.href;
			}}catch(e){__fest_log_error(e.message);}try{__fest_element=((attrs.href && 'a') || params.tagName || 'span');if(typeof __fest_element !== "string"){__fest_log_error("Element name must be a string");__fest_element="div"}}catch(e){__fest_element="div";__fest_log_error(e.message);}__fest_element_stack.push(__fest_element);__fest_buf+=("<" + __fest_element);__fest_buf+=(" class=\"");try{__fest_select=(fest._helpers.classNamesFor(params.baseClass, params))}catch(e){__fest_select="";__fest_log_error(e.message)}__fest_buf+=(__fest_select);__fest_buf+=("\"");var attrName,attrValue,__fest_iterator10;try{__fest_iterator10=attrs || {};}catch(e){__fest_iterator={};__fest_log_error(e.message);}for(attrName in __fest_iterator10){attrValue=__fest_iterator10[attrName];try{__fest_select=(attrName)}catch(e){__fest_select="";__fest_log_error(e.message)}if(__fest_select!==""){__fest_buf+=(" " + __fest_select + "=\"");try{__fest_if=attrValue && attrValue.indexOf && attrValue.indexOf('--# echo') > -1}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(attrValue)}catch(e){__fest_log_error(e.message + "750");}}else{try{__fest_buf+=(__fest_escapeHTML(attrValue))}catch(e){__fest_log_error(e.message + "753");}}__fest_buf+=("\"");}}__fest_element=__fest_element_stack[__fest_element_stack.length-1];__fest_buf+=(__fest_element in __fest_short_tags?"/>":">");try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "760");}}__fest_element = __fest_element_stack[__fest_element_stack.length - 1];if(!(__fest_element in __fest_short_tags)){__fest_buf+=("</" + __fest_element + ">")}__fest_element_stack.pop();return __fest_buf;};__fest_blocks.spring=function(params){var __fest_buf="";try{var slot = params.slot;

			//Фолбэк для старого формата
			var slotParams = ~['number', 'string'].indexOf(typeof slot) ? {
				id: params.slot,
				region: params.region,
				sitezone: params.sitezone
			} : slot;}catch(e){__fest_log_error(e.message);}__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,fest._helpers.mergeParams(
					{
						attrs: params.src ? { style: 'background-image: url(' + params.src + ')' } : {}
					},
					params
				))}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'spring'
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=slot}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="rb-slot";__fest_params={};try{__fest_params=slotParams}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "852");}}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.grid__row=function(params){var __fest_buf="";__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'grid__row'
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;var i,item,__fest_to12,__fest_iterator12;try{__fest_iterator12=params.items || [];__fest_to12=__fest_iterator12.length;}catch(e){__fest_iterator12=[];__fest_to12=0;__fest_log_error(e.message);}for(i=0;i<__fest_to12;i++){item=__fest_iterator12[i];__fest_select="grid__item";__fest_params={};try{__fest_params=item}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.banner}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="spring";__fest_params={};try{__fest_params={
							mix: ['grid__spring'],
							slot: params.banner
						}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "890");}}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.hdr__side=function(params){var __fest_buf="";try{__fest_attrs[0]=__fest_escapeHTML( (params.mods ? ' hdr__side_' + params.mods.join(' hdr__side_') : '') + (params.mix ? ' ' + params.mix.join(' ') : '') )}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<div class=\"hdr__side" + __fest_attrs[0] + "\">");try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "907");}}__fest_buf+=("</div>");return __fest_buf;};__fest_blocks.avatar=function(params){var __fest_buf="";try{var retinaSize = { 32: 90, 45: 90 };
			var user = params.user;
			var size = params.avatarSize;
			var src = params.src;

			if (!src && user) {
				if (!size) size = 90;

				src = fest._helpers.avatar({
					email: user.email,
					name: user.name,
					domain: user.domain,
					filin_domain: user.filin_domain,
					filin_d: user.filin_d,
					width: size in retinaSize ? retinaSize[size] : 180
				});
			}}catch(e){__fest_log_error(e.message);}__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,fest._helpers.mergeTopParams(
					params,
					size && { mods: ['size_' + size] },
					src && {
						attrs: {
							style: "background-image: url('" + src + "');"
						}
					}
				))}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'avatar',
					tagName: 'span'
				})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;};__fest_blocks["forum-topic__info"]=function(params){var __fest_buf="";try{var href = params.href;
			var subject = params.subject;
			var author = params.author;
			var date = params.date;}catch(e){__fest_log_error(e.message);}__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params.infoParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'forum-topic__info',
					href: null
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=href && subject}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params.linkParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,fest._helpers.mergeTopParams(
								params.linkParams, {
									mix: ['link-holder']
								}
							))}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
								baseClass: 'forum-topic__link',
								href: href,
								html: subject
							})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=author && author.nick}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params.authorParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
								baseClass: 'forum-topic__author',
								href: author.href || null,
								html: author.nick
							})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=date}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<span class=\"forum-topic__date\">");try{__fest_buf+=(date)}catch(e){__fest_log_error(e.message + "1012");}__fest_buf+=("</span>");}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks["forum-topic__info"]=function(params){var __fest_buf="";try{var href = params.href;
			var subject = params.subject;
			var author = params.author;
			var date = params.date;}catch(e){__fest_log_error(e.message);}__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params.infoParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: "forum-topic__info",
					href: null
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=href && subject}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params.linkParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
								baseClass: "forum-topic__link",
								href: href,
								html: subject
							})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=author && author.nick}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params.authorParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
								baseClass: "forum-topic__author",
								href: author.href || null
							})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_buf+=(__fest_escapeHTML(author.nick))}catch(e){__fest_log_error(e.message + "1061");}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}try{__fest_if=date}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<span class=\"forum-topic__date\">");try{__fest_buf+=(date)}catch(e){__fest_log_error(e.message + "1067");}__fest_buf+=("</span>");}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks["forum-topic__bottom"]=function(params){var __fest_buf="";try{var lastReply = params.last_reply;
			var repliesCnt = params.replies_cnt;
			var newRepliesCnt = params.new_replies_cnt;
			var rubric = params.rubric;
			var mergeTopParams = fest._helpers.mergeTopParams;

			var repliesIcon = params.icon || {
				mods: ['comment']
			};}catch(e){__fest_log_error(e.message);}__fest_buf+=("<!--noindex-->");__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params.topicBottom)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'forum-topic__bottom',
					href: null
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=rubric}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,rubric)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
								baseClass: 'forum-topic__bottom-rubric',
								tagName: 'span',
								href: rubric.href,
								html: rubric.text
							})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}__fest_select="icon";__fest_params={};try{__fest_params=mergeTopParams(
						{
							mix: ['forum-topic__bottom-icon']
						},
						repliesIcon
					 )}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);try{__fest_if=lastReply || repliesCnt}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_if=repliesCnt}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params.repliesCntParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
										baseClass: 'forum-topic__bottom-cnt',
										tagName: 'span',
										href: null,
										html: repliesCnt
									})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=newRepliesCnt}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params.newRepliesCntParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
										baseClass: 'forum-topic__bottom-newcnt',
										tagName: 'span',
										href: params.new_replies_href,
										html: '+' + newRepliesCnt
									})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=lastReply}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params.lastReplyParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
										baseClass: 'forum-topic__bottom-info',
										tagName: 'span',
										href: lastReply.href
									})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_buf+=("Последний ответ:");try{__fest_if=lastReply.author}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=(" ");__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params.bottomAuthorParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
													baseClass: 'forum-topic__bottom-autor',
													tagName: 'span',
													html: lastReply.author.nick
												})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=lastReply.created_at}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=(" ");__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params.bottomTimeParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
													baseClass: 'forum-topic__bottom-time',
													tagName: 'span',
													html: lastReply.created_at
												})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}}else{__fest_buf+=("<span class=\"forum-topic__bottom-info\">Вы будете первым, кто ");__fest_select="element";__fest_params={};try{__fest_params={
									baseClass: 'forum-topic__bottom-link',
									tagName: 'span',
									href: params.formLink || params.href,
									html: 'прокомментировал'
								}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);__fest_buf+=("</span>");}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);__fest_buf+=("<!--\/noindex-->");return __fest_buf;};__fest_blocks["forum-topic__bottom"]=function(params){var __fest_buf="";try{var lastReply = params.last_reply;
			var repliesCnt = params.replies_cnt;
			var newRepliesCnt = params.new_replies_cnt;
			var rubric = params.rubric;
			var mergeTopParams = fest._helpers.mergeTopParams;
			var repliesIcon = params.icon || {
				mods: ["comment"]
			};}catch(e){__fest_log_error(e.message);}__fest_buf+=("<!--noindex-->");__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params.topicBottom)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: "forum-topic__bottom",
					href: null
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=rubric}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,rubric)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
								baseClass: "forum-topic__bottom-rubric",
								tagName: "span",
								href: rubric.href,
								html: rubric.text
							})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}__fest_select="icon";__fest_params={};try{__fest_extend(__fest_params,{
							name: "icon_actions_comments",
							mods: ["size_16", "fill_current-color"],
							mix: ["color_perfume", "margin_right_5"]
						})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);try{__fest_if=lastReply || repliesCnt}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_if=repliesCnt}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params.repliesCntParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
										baseClass: "forum-topic__bottom-cnt",
										tagName: "span",
										href: null,
										html: repliesCnt
									})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=newRepliesCnt}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params.newRepliesCntParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
										baseClass: "forum-topic__bottom-newcnt",
										tagName: "span",
										href: params.new_replies_href,
										html: "+" + newRepliesCnt
									})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=lastReply}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<span class=\"forum-topic__bottom-info\">Последний ответ: ");try{__fest_if=lastReply.author}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params.bottomAuthorParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
												baseClass: "forum-topic__bottom-autor",
												tagName: "span",
												href: lastReply.href
											})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_buf+=(__fest_escapeHTML(lastReply.author.nick))}catch(e){__fest_log_error(e.message + "1316");}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}try{__fest_if=lastReply.display}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=(" <span class=\"forum-topic__bottom-time\">");try{__fest_buf+=(lastReply.display)}catch(e){__fest_log_error(e.message + "1324");}__fest_buf+=("</span>");}__fest_buf+=("</span>");}}else{__fest_buf+=("<span class=\"forum-topic__bottom-info\">Вы будете первым, кто ");__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,{
										baseClass: "forum-topic__bottom-link",
										tagName: "span",
										href: params.formLink || params.href,
										html: "прокомментировал"
									})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);__fest_buf+=("</span>");}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);__fest_buf+=("<!--\/noindex-->");return __fest_buf;};__fest_blocks.icon__svg_defs=function(params){var __fest_buf="";__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,fest._helpers.mergeTopParams(
					params,
					{
						mods: [params.name],
						attrs: params.viewbox && {
							viewbox: params.viewbox
						}
					}
				))}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					tagName: 'svg',
					baseClass: 'icon__svg'
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_buf+=("<use xlink:href=\"");try{__fest_select="#icon__svg_"+(params.name)}catch(e){__fest_select="";__fest_log_error(e.message)}__fest_buf+=(__fest_select);__fest_buf+=("\"></use>");return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.share=function(params){var __fest_buf="";try{__fest_if=params.name}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{var innerParams = params.innerParams || {mix: params.innerMix};
				var countParams = params.countParams || {mix: params.countMix};}catch(e){__fest_log_error(e.message);}__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
						baseClass: 'share'
					})}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,fest._helpers.mergeTopParams(
						params,
						{
							mods: [params.name],
							attrs: {
								'data-share': params.name
							}
						}
					))}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params.buttonParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
								baseClass: 'share__button'
							})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_select="icon";__fest_params={};try{__fest_extend(__fest_params,{
										name: params.name
									})}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,params.iconParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,fest._helpers.mergeTopParams(
										{
											mods: ['social', 'social_' + params.name]
										}, params.iconParams
									))}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);try{__fest_if=params.text}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params.textParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
											tagName: 'span',
											baseClass: 'share__text',
											html: params.text
										})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}return __fest_buf;};__fest_blocks.badge=function(params){var __fest_buf="";__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					tagName: params.tagName || 'span',
					baseClass: 'badge'
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=params.src}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_attrs[0]=__fest_escapeHTML(params.src)}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<img src=\"" + __fest_attrs[0] + "\" class=\"badge__icon\"/>");}try{__fest_if=params.text}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<span class=\"badge__text\">");try{__fest_buf+=(params.text)}catch(e){__fest_log_error(e.message + "1490");}__fest_buf+=("</span>");}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.label=function(params){var __fest_buf="";__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					tagName: 'span',
					baseClass: 'label',
					html: params.text
				})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;};__fest_blocks.hdr__ending=function(params){var __fest_buf="";try{__fest_element=params.href ? 'a' : 'span';if(typeof __fest_element !== "string"){__fest_log_error("Element name must be a string");__fest_element="div"}}catch(e){__fest_element="div";__fest_log_error(e.message);}__fest_element_stack.push(__fest_element);__fest_buf+=("<" + __fest_element);try{__fest_if=params.href}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=(" href=\"");try{__fest_buf+=(params.href)}catch(e){__fest_log_error(e.message + "1525");}__fest_buf+=("\"");}__fest_buf+=(" class=\"");try{__fest_buf+=(fest._helpers.classNamesFor('hdr__ending', params))}catch(e){__fest_log_error(e.message + "1531");}__fest_buf+=("\"");var sAttrKey,sAttr,__fest_iterator13;try{__fest_iterator13=params.attrs || {};}catch(e){__fest_iterator={};__fest_log_error(e.message);}for(sAttrKey in __fest_iterator13){sAttr=__fest_iterator13[sAttrKey];try{__fest_select=(sAttrKey)}catch(e){__fest_select="";__fest_log_error(e.message)}if(__fest_select!==""){__fest_buf+=(" " + __fest_select + "=\"");try{__fest_select=(sAttr)}catch(e){__fest_select="";__fest_log_error(e.message)}__fest_buf+=(__fest_select);__fest_buf+=("\"");}}__fest_element=__fest_element_stack[__fest_element_stack.length-1];__fest_buf+=(__fest_element in __fest_short_tags?"/>":">");try{__fest_if=params.text}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.text)}catch(e){__fest_log_error(e.message + "1541");}}__fest_element = __fest_element_stack[__fest_element_stack.length - 1];if(!(__fest_element in __fest_short_tags)){__fest_buf+=("</" + __fest_element + ">")}__fest_element_stack.pop();return __fest_buf;};__fest_blocks.cols=function(params){var __fest_buf="";try{var mergeTopParams = fest._helpers.mergeTopParams;

			// Fallback
			var contentParams = params.contentParams || {
				mods: params.contentMods,
				mix: params.contentMix
			};
			var sidebarParams = params.sidebarParams || {
				mods: params.sidebarMods,
				mix: params.sidebarMix
			};}catch(e){__fest_log_error(e.message);}__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'cols'
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_buf+=("<div class=\"cols__wrapper\">");try{__fest_if=params.sidebar}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="cols__column";__fest_params={};try{__fest_extend(__fest_params,sidebarParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,mergeTopParams(sidebarParams, {
									mods: ['small_14', 'medium_14', 'large_14', 'sidebar']
								}))}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{ html: params.sidebar })}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.content}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="cols__column";__fest_params={};try{__fest_extend(__fest_params,contentParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,mergeTopParams(contentParams, {
									mods: ['small_32', 'medium_43', 'large_47']
								}))}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{ html: params.content })}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "1606");}}__fest_buf+=("</div>");return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.cols__column=function(params){var __fest_buf="";__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'cols__column'
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<div class=\"cols__inner\">");try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "1632");}__fest_buf+=("</div>");}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks["forum-topic"]=function(params){var __fest_buf="";try{var author = params.author || {};}catch(e){__fest_log_error(e.message);}__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'forum-topic',
					href: null
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_buf+=("<!--noindex--><div class=\"forum-topic__left\">");__fest_select="avatar";__fest_params={};try{__fest_params={
							src: author.src,
							user: {
								name: author.nick,
								email: author.email,
								domain: author.domain,
								filin_domain: author.filin_domain,
								filin_d: author.filin_d,
							},
							avatarSize: params.avatarSize || 90,
							mix: params.avatarMix || ['comment__avatar'],
							href: author.href
						}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);__fest_buf+=("</div><!--\/noindex--><div class=\"forum-topic__body\"><div class=\"forum-topic__top\">");__fest_select="forum-topic__info";__fest_params={};try{__fest_params=params}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);try{__fest_if=params.lead}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<div class=\"forum-topic__text\">");try{__fest_buf+=(params.lead)}catch(e){__fest_log_error(e.message + "1681");}__fest_buf+=("</div>");}__fest_buf+=("</div>");__fest_select="forum-topic__bottom";__fest_params={};try{__fest_params=params}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);__fest_buf+=("</div>");return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.viewbox=function(params){var __fest_buf="";try{var controls = params.controls || {};}catch(e){__fest_log_error(e.message);}__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'viewbox'
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=params.close}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_attrs[0]=__fest_escapeHTML(fest._helpers.classNamesFor('viewbox__close', params.close))}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<a href=\"#\" class=\"" + __fest_attrs[0] + "\">");try{__fest_if=params.close.icon}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="icon";__fest_params={};try{__fest_params=params.close.icon}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}__fest_buf+=("</a>");}__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params.containerParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
							baseClass: 'viewbox__container'
						})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;var i,direction,__fest_to14,__fest_iterator14;try{__fest_iterator14=['previous', 'next'] || [];__fest_to14=__fest_iterator14.length;}catch(e){__fest_iterator14=[];__fest_to14=0;__fest_log_error(e.message);}for(i=0;i<__fest_to14;i++){direction=__fest_iterator14[i];var control=controls[direction];try{__fest_if=control}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{control.mods = [direction];}catch(e){__fest_log_error(e.message);}__fest_select="viewbox__control";__fest_params={};try{__fest_params=control}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}}__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params.innerParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
									baseClass: 'viewbox__inner'
								})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params.slidesParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
											baseClass: 'viewbox__slides'
										})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);try{__fest_if=params.slider}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="viewbox__list";__fest_params={};try{__fest_params=params}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "1774");}}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.sharelist=function(params){var __fest_buf="";try{var itemParams = params.itemParams || {};
			var extraItemParams = params.extraItemParams || {};
			var order = params.order || fest._constants.shares.order;
			var defaultTypes = fest._constants.shares.types;}catch(e){__fest_log_error(e.message);}__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'sharelist'
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=params.text || params.icon}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params.textParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
								baseClass: 'sharelist__text',
								html: params.text
							})}catch(e){__fest_log_error(e.message)}__fest_params.htmlPrepend=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=params.icon}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="icon";__fest_params={};try{__fest_params=fest._helpers.mergeTopParams(
										params.icon,
										{
											mix: ['margin_right_10']
										}
									)}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}__fest_buf+=("<div class=\"sharelist__items\">");try{__fest_if=params.countParams}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_params={
								baseClass: 'sharelist__count',
								baseParams: params.countParams
							}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}var i,item,__fest_to15,__fest_iterator15;try{__fest_iterator15=order || [];__fest_to15=__fest_iterator15.length;}catch(e){__fest_iterator15=[];__fest_to15=0;__fest_log_error(e.message);}for(i=0;i<__fest_to15;i++){item=__fest_iterator15[i];try{__fest_if=defaultTypes.hasOwnProperty(item)}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="share";__fest_params={};try{__fest_extend(__fest_params,{
										buttonParams: params.buttonParams,
										textParams: params.buttonTextParams,
										text: params.showLabels && defaultTypes[item].text,
										name: item,
										href: '#'
									})}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,extraItemParams[item])}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,fest._helpers.mergeTopParams(
										{
											mix: ['sharelist__item']
										},
										itemParams,
										extraItemParams[item]
									))}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}}__fest_buf+=("</div>");return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.icon=function(params){var __fest_buf="";try{var svg = params.svg;}catch(e){__fest_log_error(e.message);}__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,fest._helpers.mergeTopParams(
					params,
					{
						mods: svg ? ['svg'] : [],
						attrs: params.title && {
							title: params.title
						}
					}
				))}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					tagName: params.tagName || params.tag || 'span',
					baseClass: 'icon'
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=svg && svg.name}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="icon__svg_defs";__fest_params={};try{__fest_params=svg}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.icon}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="icon";__fest_params={};try{__fest_params=params.icon}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "1902");}}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.icon=function(params){var __fest_buf="";try{var useSrc = params.useSrc || fest._helpers.getByPath("CONSTANTS.target.svg.src", json);
			var isSvg = !!(useSrc && params.name);}catch(e){__fest_log_error(e.message);}__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,{
					tagName: isSvg ? "svg" : "i",
					baseClass: "icon"
				})}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=isSvg}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,{
								tagName: "use",
								attrs: {
									"xlink:href": useSrc + "#" + params.name
								}
							})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.icon}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="icon";__fest_params={};try{__fest_extend(__fest_params,params.icon)}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "1944");}}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.photo=function(params){var __fest_buf="";try{var actionParams = params.actionParams || {mix: params.actionMix};
			var picParams = params.picParams || {mix: params.picMix};
			var fullMod = params.mods && ~params.mods.indexOf('full');
			var lazyParams = params.lazy || {};
			var labelsItems = fest._helpers.getByPath('labels.items', params) || [];}catch(e){__fest_log_error(e.message);}__fest_select="element_ssi";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'photo'
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params.innerParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
							baseClass: 'photo__inner'
						})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=params.action}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,actionParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
										tagName: 'span',
										baseClass: 'photo__action'
									})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_buf+=("<span class=\"photo__action-inner\">");__fest_select="icon";__fest_params={};try{__fest_params=params.action}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);__fest_buf+=("</span>");return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}try{__fest_if=params.labels}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params.labels)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
										tagName: 'span',
										baseClass: 'photo__labels'
									})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;var i,label,__fest_to16,__fest_iterator16;try{__fest_iterator16=labelsItems || [];__fest_to16=__fest_iterator16.length;}catch(e){__fest_iterator16=[];__fest_to16=0;__fest_log_error(e.message);}for(i=0;i<__fest_to16;i++){label=__fest_iterator16[i];__fest_select="badge";__fest_params={};try{__fest_extend(__fest_params,label)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,fest._helpers.mergeTopParams(
													label,
													{
														mix: ['photo__label']
													}
												))}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}try{__fest_if=params.src || params.lazy}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,picParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,fest._helpers.mergeParams(
										params.lazy ? {
											mix: [
												'm-lazy-item'
											].concat(
												lazyParams.type ? ['m-lazy-item_' + lazyParams.type] : ['m-lazy-item_photo']
											).concat(
												lazyParams.size ? ['m-lazy-item_size_' + lazyParams.size] : []
											),
											attrs: fullMod ? {} : {
												src: fest._helpers.svgPlaceholder(params.height, params.width)
											}
										} : {
											attrs: fullMod ? {
												style: 'background-image:url(' + params.src + ')'
											} : {
												src: params.src
											}
										}, picParams
									))}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
										baseClass: 'photo__pic',
										tagName: fullMod ? 'span' : 'img'
									})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);try{__fest_if=params.title || params.titleNoescape || params.subtitle || params.count || params.icon || params.captionHtml}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,{
								tagName: 'span',
								baseClass: 'photo__captions',
								mods: [].concat(params.count || params.icon ? ['icon'] : [])
							})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=params.count}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<span class=\"photo__count\">");try{__fest_buf+=(__fest_escapeHTML(params.count))}catch(e){__fest_log_error(e.message + "2167");}__fest_buf+=("</span>");}try{__fest_if=params.icon}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<span class=\"photo__icon\">");__fest_select="icon";__fest_params={};try{__fest_params=params.icon}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);__fest_buf+=("</span>");}try{__fest_if=params.param}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,{
											tagName: 'span',
											baseClass: 'photo__param'
										})}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,params.paramParams)}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_buf+=(__fest_escapeHTML(params.param))}catch(e){__fest_log_error(e.message + "2191");}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}try{__fest_if=params.title || params.titleNoescape}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,{
											tagName: 'span',
											baseClass: 'photo__title'
										})}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,params.titleParams)}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=params.titleNoescape}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.titleNoescape)}catch(e){__fest_log_error(e.message + "2208");}}else{try{__fest_buf+=(__fest_escapeHTML(params.title))}catch(e){__fest_log_error(e.message + "2211");}}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}try{__fest_if=params.subtitle || params.subtitleNoescape}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<span class=\"photo__subtitle\">");try{__fest_if=params.subtitleNoescape}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.subtitleNoescape)}catch(e){__fest_log_error(e.message + "2224");}}else{try{__fest_buf+=(__fest_escapeHTML(params.subtitle))}catch(e){__fest_log_error(e.message + "2229");}}__fest_buf+=("</span>");}try{__fest_if=params.captionHtml}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.captionHtml)}catch(e){__fest_log_error(e.message + "2238");}}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "2247");}}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.hdr=function(params){var __fest_buf="";try{// обрабатываем текст без item'а
			if (!params.item && params.text) {
				var oItem = {
						text: params.text,
						tag: params.tag
					},
					aItemParams = ['Mods', 'Mix', 'Href', 'Tag', 'Ending'],
					itemNo, sParamName, sParamValue;

				for (itemNo in aItemParams) {
					sParamName = aItemParams[itemNo];
					sParamValue = params['text' + sParamName];

					if (sParamValue) {
						oItem[sParamName.toLowerCase()] = sParamValue;
					}
				}

				params.item = oItem;
			}

			// обрабатываем одиночный item
			if (params.item) {
				params.items = params.items || [];
				params.items.splice(0, 0, params.item);
			}}catch(e){__fest_log_error(e.message);}__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'hdr',
					href: null
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=params.left}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="hdr__side";__fest_params={};try{__fest_extend(__fest_params,{
								mods: ['left'],
								html: params.left
							})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.right}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="hdr__side";__fest_params={};try{__fest_extend(__fest_params,{
								mods: ['right'],
								html: params.right
							})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.items}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<div class=\"hdr__wrapper\">");var i,item,__fest_to17,__fest_iterator17;try{__fest_iterator17=params.items || [];__fest_to17=__fest_iterator17.length;}catch(e){__fest_iterator17=[];__fest_to17=0;__fest_log_error(e.message);}for(i=0;i<__fest_to17;i++){item=__fest_iterator17[i];try{item.mods = item.mods || [];
								if (params.items.length > 1 && item.active != true) {
									item.mods.push('inactive');
								}}catch(e){__fest_log_error(e.message);}try{__fest_if=item.icon}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="icon";__fest_params={};try{__fest_params=item.icon}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,item)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
										baseClass: 'hdr__text',
										tagName: 'span'
									})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=item.text}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,item.innerParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
													baseClass: 'hdr__inner',
													tagName: item.tag ? item.tag : 'span'
												})}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,typeof item.text === 'string' && {
													html: item.text
												} || item.text)}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=item.ending}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="hdr__ending";__fest_params={};try{__fest_params=item.ending}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.textHtml}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.textHtml)}catch(e){__fest_log_error(e.message + "2391");}}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}__fest_buf+=("</div>");}try{__fest_if=params.label}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="label";__fest_params={};try{__fest_params=params.label}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "2410");}}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.button=function(params){var __fest_buf="";try{var icon = params.icon;
			var iconPosition;

			if (icon) {
				iconPosition = icon.position || 'left';
				icon = fest._helpers.mergeParams(
					icon,
					{
						mix: ['button__icon'].concat(params.text || params.ending ?  ['button__icon_' + iconPosition] : [])
					}
				);
			}}catch(e){__fest_log_error(e.message);}__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'button',
					tagName: params.tagName || 'button'
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=params.loader}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="loader";__fest_params={};try{__fest_params={
							mods: ['button'],
							mix: ['button__loader']
						}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}__fest_buf+=("<span class=\"button__inner\">");try{__fest_if=iconPosition === 'left'}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="icon";__fest_params={};try{__fest_params=icon}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.text}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params.textParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
									baseClass: 'button__text',
									html: params.text
								})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.hiddenText}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,fest._helpers.mergeTopParams(
									params.textParams,
									{
										mods: ['hidden']
									}
								))}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
									baseClass: 'button__text',
									tagName: 'span',
									html: params.hiddenText
								})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.ending}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params.endingParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
									baseClass: 'button__ending',
									html: params.ending
								})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=iconPosition == 'right'}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="icon";__fest_params={};try{__fest_params=icon}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "2510");}}__fest_buf+=("</span>");return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.grid__item=function(params){var __fest_buf="";try{var mergeTopParams = fest._helpers.mergeTopParams;

			var photo = params.photo;}catch(e){__fest_log_error(e.message);}__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'grid__item'
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_buf+=("<div class=\"grid__fixer\">");try{__fest_if=params.slot}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="rb-slot";__fest_params={};try{__fest_params=params.slot}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);__fest_buf+=("<!--# if expr=\"$SLOT_");try{__fest_buf+=(__fest_escapeHTML(params.slot.id))}catch(e){__fest_log_error(e.message + "2545");}__fest_buf+=("_SHOWN\"--><!--# else-->");try{__fest_if=photo}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="photo";__fest_params={};try{__fest_extend(__fest_params,photo)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,mergeTopParams(
												photo,
												{ mix: ['grid__photo'] }
											))}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}__fest_buf+=("<!--# endif-->");}else{try{__fest_if=photo}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="photo";__fest_params={};try{__fest_extend(__fest_params,photo)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,mergeTopParams(
										photo,
										{ mix: ['grid__photo'] }
									))}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}else{try{__fest_if=params.banner}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="spring";__fest_params={};try{__fest_params=params.banner}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}else{try{__fest_if=params.text}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<span class=\"grid__text\">");try{__fest_buf+=(params.text)}catch(e){__fest_log_error(e.message + "2583");}__fest_buf+=("</span>");}else{}}}}try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "2592");}}__fest_buf+=("</div>");return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.grid=function(params){var __fest_buf="";__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'grid'
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;var i,row,__fest_to18,__fest_iterator18;try{__fest_iterator18=params.rows || [];__fest_to18=__fest_iterator18.length;}catch(e){__fest_iterator18=[];__fest_to18=0;__fest_log_error(e.message);}for(i=0;i<__fest_to18;i++){row=__fest_iterator18[i];__fest_select="grid__row";__fest_params={};try{__fest_params=row}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "2621");}}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};try{json.CONSTANTS = {
			target: {
				svg: { src:"/_/g8Ffs5l9rj03CWFuWuyItKQn_44.svg" }
			}
		};}catch(e){__fest_log_error(e.message);}__fest_select="deti-viewbox";__fest_params={};__fest_chunks.push(__fest_buf,{name:__fest_select,params:__fest_params,cp:false});__fest_buf="";__fest_to=__fest_chunks.length;if (__fest_to) {__fest_iterator = 0;for (;__fest_iterator<__fest_to;__fest_iterator++) {__fest_chunk=__fest_chunks[__fest_iterator];if (typeof __fest_chunk==="string") {__fest_html+=__fest_chunk;} else {__fest_fn=__fest_blocks[__fest_chunk.name];if (__fest_fn) __fest_html+=__fest_call(__fest_fn,__fest_chunk.params,__fest_chunk.cp);}}return __fest_html+__fest_buf;} else {return __fest_buf;}};

	if (typeof define === 'function' && define.amd) {
		define(function () {
			return template;
		});
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = template;
	} else {
		if(!x.fest)x.fest={};
		x.fest['ct-viewbox-popup.xml']=template;
	}
}(new Function('return this')()));
/* end: ./ct-viewbox-popup.tmp.fest.js */