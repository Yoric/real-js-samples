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
/* begin: ./ct-mywidget-footer-preview.tmp.fest.js */

;(function (x) {
	var template = function (__fest_context){"use strict";var __fest_self=this,__fest_buf="",__fest_chunks=[],__fest_chunk,__fest_attrs=[],__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn,__fest_html="",__fest_blocks={},__fest_params,__fest_element,__fest_debug_file="",__fest_debug_line="",__fest_debug_block="",__fest_htmlchars=/[&<>"]/g,__fest_htmlchars_test=/[&<>"]/,__fest_short_tags = {"area":true,"base":true,"br":true,"col":true,"command":true,"embed":true,"hr":true,"img":true,"input":true,"keygen":true,"link":true,"meta":true,"param":true,"source":true,"wbr":true},__fest_element_stack = [],__fest_htmlhash={"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"},__fest_jschars=/[\\'"\/\n\r\t\b\f<>]/g,__fest_jschars_test=/[\\'"\/\n\r\t\b\f<>]/,__fest_jshash={"\"":"\\\"","\\":"\\\\","/":"\\/","\n":"\\n","\r":"\\r","\t":"\\t","\b":"\\b","\f":"\\f","'":"\\'","<":"\\u003C",">":"\\u003E"},___fest_log_error;if(typeof __fest_error === "undefined"){___fest_log_error = (typeof console !== "undefined" && console.error) ? function(){return Function.prototype.apply.call(console.error, console, arguments)} : function(){};}else{___fest_log_error=__fest_error};function __fest_log_error(msg){___fest_log_error(msg+"\nin block \""+__fest_debug_block+"\" at line: "+__fest_debug_line+"\nfile: "+__fest_debug_file)}function __fest_replaceHTML(chr){return __fest_htmlhash[chr]}function __fest_replaceJS(chr){return __fest_jshash[chr]}function __fest_extend(dest, src){for(var i in src)if(src.hasOwnProperty(i))dest[i]=src[i];}function __fest_param(fn){fn.param=true;return fn}function __fest_call(fn, params,cp){if(cp)for(var i in params)if(typeof params[i]=="function"&&params[i].param)params[i]=params[i]();return fn.call(__fest_self,params)}function __fest_escapeJS(s){if (typeof s==="string") {if (__fest_jschars_test.test(s))return s.replace(__fest_jschars,__fest_replaceJS);} else if (typeof s==="undefined")return "";return s;}function __fest_escapeHTML(s){if (typeof s==="string") {if (__fest_htmlchars_test.test(s))return s.replace(__fest_htmlchars,__fest_replaceHTML);} else if (typeof s==="undefined")return "";return s;}var __fest_plural=function (n) {
					return n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
				};var __fest_format=function(s,v){return s.replace(/%./g,function(g){return ("%s"===g)?v:"%";});};var json=__fest_context;try{json = json || {}; (json.CONSTANTS = (json.CONSTANTS || {})).TARGET = {};}catch(e){__fest_log_error(e.message);}__fest_blocks.element=function(params){var __fest_buf="";try{var blockParams = params.baseParams || params.forParams || params;
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
			}}catch(e){__fest_log_error(e.message);}try{__fest_element=((attrs.href && 'a') || params.tagName || 'div');if(typeof __fest_element !== "string"){__fest_log_error("Element name must be a string");__fest_element="div"}}catch(e){__fest_element="div";__fest_log_error(e.message);}__fest_element_stack.push(__fest_element);__fest_buf+=("<" + __fest_element);__fest_buf+=(" class=\"");try{__fest_select=(fest._helpers.classNamesFor(baseClass, blockParams))}catch(e){__fest_select="";__fest_log_error(e.message)}__fest_buf+=(__fest_select);__fest_buf+=("\"");var attrName,attrValue,__fest_iterator0;try{__fest_iterator0=attrs || {};}catch(e){__fest_iterator={};__fest_log_error(e.message);}for(attrName in __fest_iterator0){attrValue=__fest_iterator0[attrName];try{__fest_select=(attrName)}catch(e){__fest_select="";__fest_log_error(e.message)}if(__fest_select!==""){__fest_buf+=(" " + __fest_select + "=\"");try{__fest_buf+=(__fest_escapeHTML(attrValue))}catch(e){__fest_log_error(e.message + "28");}__fest_buf+=("\"");}}var attrName,attrValue,__fest_iterator1;try{__fest_iterator1=params.attrsNoEscape || {};}catch(e){__fest_iterator={};__fest_log_error(e.message);}for(attrName in __fest_iterator1){attrValue=__fest_iterator1[attrName];try{__fest_select=(attrName)}catch(e){__fest_select="";__fest_log_error(e.message)}if(__fest_select!==""){__fest_buf+=(" " + __fest_select + "=\"");try{__fest_buf+=(attrValue)}catch(e){__fest_log_error(e.message + "33");}__fest_buf+=("\"");}}__fest_element=__fest_element_stack[__fest_element_stack.length-1];__fest_buf+=(__fest_element in __fest_short_tags?"/>":">");try{__fest_if=params.htmlPrepend}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.htmlPrepend)}catch(e){__fest_log_error(e.message + "39");}}try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "42");}}try{__fest_if=params.elem}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_params=params.elem}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.elems}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){var i,elem,__fest_to2,__fest_iterator2;try{__fest_iterator2=params.elems || [];__fest_to2=__fest_iterator2.length;}catch(e){__fest_iterator2=[];__fest_to2=0;__fest_log_error(e.message);}for(i=0;i<__fest_to2;i++){elem=__fest_iterator2[i];try{__fest_if=elem}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_params=elem}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}}}try{__fest_if=params.htmlAppend}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.htmlAppend)}catch(e){__fest_log_error(e.message + "55");}}__fest_element = __fest_element_stack[__fest_element_stack.length - 1];if(!(__fest_element in __fest_short_tags)){__fest_buf+=("</" + __fest_element + ">")}__fest_element_stack.pop();return __fest_buf;};__fest_blocks.hdr__side=function(params){var __fest_buf="";try{__fest_attrs[0]=__fest_escapeHTML( (params.mods ? ' hdr__side_' + params.mods.join(' hdr__side_') : '') + (params.mix ? ' ' + params.mix.join(' ') : '') )}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<div class=\"hdr__side" + __fest_attrs[0] + "\">");try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "70");}}__fest_buf+=("</div>");return __fest_buf;};__fest_blocks["rb-slot"]=function(params){var __fest_buf="";try{
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
			}}catch(e){__fest_log_error(e.message);}try{__fest_if=comment}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<!-- ");try{__fest_buf+=(comment)}catch(e){__fest_log_error(e.message + "143");}__fest_buf+=(" -->");}try{__fest_if=params.beforeInclude}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.beforeInclude)}catch(e){__fest_log_error(e.message + "147");}}try{__fest_if=params.async}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params.asyncParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
							baseClass: 'rb-slot'
						})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}else{try{__fest_if=path}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<!--#include virtual=\"");try{__fest_buf+=(path)}catch(e){__fest_log_error(e.message + "161");}__fest_buf+=("\" wait=\"yes\"-->");}else{}}try{__fest_if=params.afterInclude}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.afterInclude)}catch(e){__fest_log_error(e.message + "165");}}try{__fest_if=comment}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<!-- \/");try{__fest_buf+=(comment)}catch(e){__fest_log_error(e.message + "169");}__fest_buf+=(" -->");}return __fest_buf;};__fest_blocks.element_ssi=function(params){var __fest_buf="";try{var attrs = params.attrs || {};
			if (params.href) {
				attrs.href = params.href;
			}}catch(e){__fest_log_error(e.message);}try{__fest_element=((attrs.href && 'a') || params.tagName || 'span');if(typeof __fest_element !== "string"){__fest_log_error("Element name must be a string");__fest_element="div"}}catch(e){__fest_element="div";__fest_log_error(e.message);}__fest_element_stack.push(__fest_element);__fest_buf+=("<" + __fest_element);__fest_buf+=(" class=\"");try{__fest_select=(fest._helpers.classNamesFor(params.baseClass, params))}catch(e){__fest_select="";__fest_log_error(e.message)}__fest_buf+=(__fest_select);__fest_buf+=("\"");var attrName,attrValue,__fest_iterator3;try{__fest_iterator3=attrs || {};}catch(e){__fest_iterator={};__fest_log_error(e.message);}for(attrName in __fest_iterator3){attrValue=__fest_iterator3[attrName];try{__fest_select=(attrName)}catch(e){__fest_select="";__fest_log_error(e.message)}if(__fest_select!==""){__fest_buf+=(" " + __fest_select + "=\"");try{__fest_if=attrValue && attrValue.indexOf && attrValue.indexOf('--# echo') > -1}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(attrValue)}catch(e){__fest_log_error(e.message + "193");}}else{try{__fest_buf+=(__fest_escapeHTML(attrValue))}catch(e){__fest_log_error(e.message + "196");}}__fest_buf+=("\"");}}__fest_element=__fest_element_stack[__fest_element_stack.length-1];__fest_buf+=(__fest_element in __fest_short_tags?"/>":">");try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "203");}}__fest_element = __fest_element_stack[__fest_element_stack.length - 1];if(!(__fest_element in __fest_short_tags)){__fest_buf+=("</" + __fest_element + ">")}__fest_element_stack.pop();return __fest_buf;};__fest_blocks.mixes=function(params){var __fest_buf="";try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_element= params.inline ? 'span' : 'div' ;if(typeof __fest_element !== "string"){__fest_log_error("Element name must be a string");__fest_element="div"}}catch(e){__fest_element="div";__fest_log_error(e.message);}__fest_element_stack.push(__fest_element);__fest_buf+=("<" + __fest_element);try{__fest_if=params.mix}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=(" class=\"");try{__fest_buf+=(params.mix.join(' '))}catch(e){__fest_log_error(e.message + "220");}__fest_buf+=("\"");}var attrName,attrVal,__fest_iterator4;try{__fest_iterator4=params.attrs || {};}catch(e){__fest_iterator={};__fest_log_error(e.message);}for(attrName in __fest_iterator4){attrVal=__fest_iterator4[attrName];try{__fest_select=(attrName)}catch(e){__fest_select="";__fest_log_error(e.message)}if(__fest_select!==""){__fest_buf+=(" " + __fest_select + "=\"");try{__fest_buf+=(__fest_escapeHTML(attrVal))}catch(e){__fest_log_error(e.message + "226");}__fest_buf+=("\"");}}__fest_element=__fest_element_stack[__fest_element_stack.length-1];__fest_buf+=(__fest_element in __fest_short_tags?"/>":">");try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "233");}__fest_element = __fest_element_stack[__fest_element_stack.length - 1];if(!(__fest_element in __fest_short_tags)){__fest_buf+=("</" + __fest_element + ">")}__fest_element_stack.pop();}return __fest_buf;};__fest_blocks.avatar=function(params){var __fest_buf="";try{var retinaSize = { 32: 90, 45: 90 };
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
				})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;};__fest_blocks["gallery-grid__wrap"]=function(params){var __fest_buf="";try{__fest_attrs[0]=__fest_escapeHTML(fest._helpers.classNamesFor('gallery-grid__wrap', params))}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<div class=\"" + __fest_attrs[0] + "\">");try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "295");}}__fest_buf+=("</div>");return __fest_buf;};__fest_blocks["gallery-grid__placeholders"]=function(params){var __fest_buf="";try{
				var oSizes = params.sizes;
				var sizeList = Object.keys(oSizes);
				var previewLen = params.previewLen;
				var lenByMod = params.lenByMod;
				var actualSizeList = sizeList.filter(function(sizeName) {
					return previewLen > lenByMod[oSizes[sizeName]] - (params.hasOwnProperty('lenShift') ? params.lenShift : 1);
				});
				var placeholderParams = params.placeholder || {};
				var placeholderAttrs = placeholderParams.attrs || {};
				var itemParams = params.itemParams || {};
				var indexStart = params.indexStart || 0;
			}catch(e){__fest_log_error(e.message);}var i,currentSize,__fest_to5,__fest_iterator5;try{__fest_iterator5=actualSizeList || [];__fest_to5=__fest_iterator5.length;}catch(e){__fest_iterator5=[];__fest_to5=0;__fest_log_error(e.message);}for(i=0;i<__fest_to5;i++){currentSize=__fest_iterator5[i];try{var oAttrs = {};
				var attrName;
				for (attrName in placeholderAttrs) {
					if (placeholderAttrs.hasOwnProperty(attrName)) {
						oAttrs[attrName] = placeholderAttrs[attrName];
					}
				}
				if (placeholderParams.idAttrName) {
					oAttrs[placeholderParams.idAttrName] = lenByMod[oSizes[currentSize]] - 1 + indexStart;
				}}catch(e){__fest_log_error(e.message);}__fest_select="gallery-grid__item";__fest_params={};try{__fest_extend(__fest_params,{
						mods: itemParams.mods || ['square_small'],
						mix: sizeList.reduce(function(mixList, sizeName) {
							return mixList.concat(sizeName != currentSize ? ['hidden_' + sizeName] : []);
						}, [])
					})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_select="gallery-grid__placeholder";__fest_params={};try{__fest_extend(__fest_params,placeholderParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
								count: params.count,
								attrs: oAttrs
							})}catch(e){__fest_log_error(e.message)}__fest_params.label=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_select=params.count}catch(e){__fest_select=0;__fest_log_error(e.message)}__fest_params=[];__fest_params = ["фотография","фотографии","фотографий"];__fest_buf+=(__fest_format(__fest_params[__fest_plural(__fest_select)], __fest_select));return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}return __fest_buf;};__fest_blocks["gallery-grid__placeholder"]=function(params){var __fest_buf="";try{__fest_attrs[0]=__fest_escapeHTML(fest._helpers.classNamesFor('gallery-grid__placeholder', params))}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<div class=\"" + __fest_attrs[0] + "\"");var sAttrKey,sAttr,__fest_iterator6;try{__fest_iterator6=params.attrs || {};}catch(e){__fest_iterator={};__fest_log_error(e.message);}for(sAttrKey in __fest_iterator6){sAttr=__fest_iterator6[sAttrKey];try{__fest_select=(sAttrKey)}catch(e){__fest_select="";__fest_log_error(e.message)}if(__fest_select!==""){__fest_buf+=(" " + __fest_select + "=\"");try{__fest_buf+=(__fest_escapeHTML(sAttr))}catch(e){__fest_log_error(e.message + "372");}__fest_buf+=("\"");}}__fest_buf+=("><div class=\"gallery-grid__counter\">");try{__fest_if=params.icon}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="icon";__fest_params={};try{__fest_extend(__fest_params,params.icon)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
								mix: ['gallery-grid__counter-icon'].concat(params.icon.mix || [])
							})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.count}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<span class=\"gallery-grid__count\">");try{__fest_buf+=(params.count)}catch(e){__fest_log_error(e.message + "393");}__fest_buf+=("</span>");}try{__fest_if=params.label}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<div class=\"gallery-grid__label\">");try{__fest_buf+=(params.label)}catch(e){__fest_log_error(e.message + "401");}__fest_buf+=("</div>");}__fest_buf+=("</div></div>");return __fest_buf;};__fest_blocks["gallery-grid__inner_table"]=function(params){var __fest_buf="";try{var modsList = [params.items.length == 3 ? 'third' : 'half'];}catch(e){__fest_log_error(e.message);}var i,oItem,__fest_to7,__fest_iterator7;try{__fest_iterator7=params.items || [];__fest_to7=__fest_iterator7.length;}catch(e){__fest_iterator7=[];__fest_to7=0;__fest_log_error(e.message);}for(i=0;i<__fest_to7;i++){oItem=__fest_iterator7[i];try{oItem.mods = ['full'].concat(oItem.mods || []);}catch(e){__fest_log_error(e.message);}__fest_select="gallery-grid__item";__fest_params={};try{__fest_params={
					mods: modsList,
					photo: oItem
				}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}return __fest_buf;};__fest_blocks["gallery-grid__inner_poor"]=function(params){var __fest_buf="";try{var extend = ru.mail.cpf.Basic.Extend;

			var lenByMod = {
				'g-small': 4,
				'g-medium': 4,
				'g-large': 5,
				'g-huge': 5
			};

			lenByMod = extend(false, lenByMod, params.lenByMod);

			var aItems = params.items;
			var oSizes = params.sizes;
			var sizeList = Object.keys(oSizes);
			var itemList = aItems.slice(0, 6);
			var itemLen = itemList.length;}catch(e){__fest_log_error(e.message);}var i,oItem,__fest_to8,__fest_iterator8;try{__fest_iterator8=itemList || [];__fest_to8=__fest_iterator8.length;}catch(e){__fest_iterator8=[];__fest_to8=0;__fest_log_error(e.message);}for(i=0;i<__fest_to8;i++){oItem=__fest_iterator8[i];try{oItem.mods = ['full'].concat(oItem.mods || []);}catch(e){__fest_log_error(e.message);}__fest_select="gallery-grid__item";__fest_params={};try{__fest_params=
					{
						mods: ['square_small'],
						mix: sizeList.reduce(function(mix, sizeName) {
							var sizeLen = lenByMod[oSizes[sizeName]];
							return mix.concat(aItems.length > sizeLen && i > sizeLen - 2 ? ['hidden_' + sizeName] : []);
						}, []),
						photo: oItem
					}
				}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}__fest_select="gallery-grid__placeholders";__fest_params={};try{__fest_params={
				sizes: oSizes,
				lenByMod: lenByMod,
				previewLen: itemLen,
				indexStart: params.indexStart,
				count: aItems.length,
				placeholder: params.placeholder,
				lenShift: 0
			}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;};__fest_blocks["gallery-grid__inner_horizontal"]=function(params){var __fest_buf="";try{var extend = ru.mail.cpf.Basic.Extend;

			var lenByMod = {
				'g-small': 5,
				'g-medium': 5,
				'g-large': 6,
				'g-huge': 6
			};
			lenByMod = extend(false, lenByMod, params.lenByMod);

			var oSizes = params.sizes;
			var sizeList = Object.keys(oSizes);
			var itemList = params.items.slice(0, 7);
			var firstItem = itemList.shift();
			var itemLen = itemList.length;

			firstItem.mods = ['full'].concat(firstItem.mods || []);}catch(e){__fest_log_error(e.message);}__fest_select="gallery-grid__item";__fest_params={};try{__fest_params={
				mods: ['title_horizontal'],
				photo: firstItem
			}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);__fest_select="gallery-grid__wrap";__fest_params={};try{__fest_extend(__fest_params,{
					mods: ['row']
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;var i,oItem,__fest_to9,__fest_iterator9;try{__fest_iterator9=itemList || [];__fest_to9=__fest_iterator9.length;}catch(e){__fest_iterator9=[];__fest_to9=0;__fest_log_error(e.message);}for(i=0;i<__fest_to9;i++){oItem=__fest_iterator9[i];try{oItem.mods = ['full'].concat(oItem.mods || []);}catch(e){__fest_log_error(e.message);}__fest_select="gallery-grid__item";__fest_params={};try{__fest_params=
							{
								mods: ['square_small'],
								mix: sizeList.reduce(function(mixList, sizeName) {
									var sizeLen = lenByMod[oSizes[sizeName]] - 1;
									return mixList.concat(itemLen > sizeLen && i > sizeLen - 2 ? ['hidden_' + sizeName] : []);
								}, []),
								photo: oItem
							}
						}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}__fest_select="gallery-grid__placeholders";__fest_params={};try{__fest_params={
						sizes: oSizes,
						lenByMod: lenByMod,
						previewLen: itemLen,
						count: params.items.length,
						indexStart: params.indexStart,
						placeholder: params.placeholder
					}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks["gallery-grid__inner_vertical_short"]=function(params){var __fest_buf="";try{var extend = ru.mail.cpf.Basic.Extend;

			var lenByMod = {
				'g-small': 4,
				'g-medium': 4,
				'g-large': 5,
				'g-huge': 5
			};

			lenByMod = extend(false, lenByMod, params.lenByMod);

			var oSizes = params.sizes;
			var sizeList = Object.keys(oSizes);
			var itemList = params.items.slice(0, 6);
			var firstItem = itemList.shift();
			var itemLen = itemList.length;

			firstItem.mods = ['full'].concat(firstItem.mods || []);}catch(e){__fest_log_error(e.message);}__fest_select="gallery-grid__item";__fest_params={};try{__fest_params={
				mods: ['title_vertical'],
				photo: firstItem
			}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);var i,oItem,__fest_to10,__fest_iterator10;try{__fest_iterator10=itemList || [];__fest_to10=__fest_iterator10.length;}catch(e){__fest_iterator10=[];__fest_to10=0;__fest_log_error(e.message);}for(i=0;i<__fest_to10;i++){oItem=__fest_iterator10[i];try{oItem.mods = ['full'].concat(oItem.mods || []);}catch(e){__fest_log_error(e.message);}__fest_select="gallery-grid__item";__fest_params={};try{__fest_params=
					{
						mods: [i ? 'square_small2medium' : 'square_big2medium'],
						mix: sizeList.reduce(function(mix, sizeName) {
							var sizeLen = lenByMod[oSizes[sizeName]] - 1;
							return mix.concat(itemLen > sizeLen && i > sizeLen - 2 ? ['hidden_' + sizeName] : []);
						}, []),
						photo: oItem
					}
				}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}__fest_select="gallery-grid__placeholders";__fest_params={};try{__fest_params={
				sizes: oSizes,
				lenByMod: lenByMod,
				previewLen: itemLen,
				count: params.items.length,
				indexStart: params.indexStart,
				placeholder: params.placeholder,
				itemParams: {
					mods: ['square_small2medium']
				}
			}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;};__fest_blocks["gallery-grid__inner_vertical_long"]=function(params){var __fest_buf="";try{var extend = ru.mail.cpf.Basic.Extend;

			var lenByMod = {
				'g-small': 7,
				'g-medium': 7,
				'g-large': 10,
				'g-huge': 10
			};

			lenByMod = extend(false, lenByMod, params.lenByMod);

			var oSizes = params.sizes;
			var sizeList = Object.keys(oSizes);
			var itemList = params.items.slice(0, 11);
			var firstItem = itemList.shift();
			var itemLen = itemList.length;

			firstItem.mods = ['full'].concat(firstItem.mods || []);}catch(e){__fest_log_error(e.message);}__fest_select="gallery-grid__item";__fest_params={};try{__fest_params={
				mods: ['title_vertical'],
				photo: firstItem
			}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);var i,oItem,__fest_to11,__fest_iterator11;try{__fest_iterator11=itemList || [];__fest_to11=__fest_iterator11.length;}catch(e){__fest_iterator11=[];__fest_to11=0;__fest_log_error(e.message);}for(i=0;i<__fest_to11;i++){oItem=__fest_iterator11[i];try{oItem.mods = ['full'].concat(oItem.mods || []);}catch(e){__fest_log_error(e.message);}__fest_select="gallery-grid__item";__fest_params={};try{__fest_params=
					{
						mods: ['square_small'],
						mix: sizeList.reduce(function(mix, sizeName) {
							var sizeLen = lenByMod[oSizes[sizeName]] - 1;
							return mix.concat(itemLen > sizeLen && i > sizeLen - 2 ? ['hidden_' + sizeName] : []);
						}, []),
						photo: oItem
					}
				}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}__fest_select="gallery-grid__placeholders";__fest_params={};try{__fest_params={
				sizes: oSizes,
				lenByMod: lenByMod,
				previewLen: itemLen,
				count: params.items.length,
				indexStart: params.indexStart,
				placeholder: params.placeholder
			}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;};__fest_blocks.cell=function(params){var __fest_buf="";__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'cell',
					tagName: params.tagName || params.tag || 'span'
				})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;};__fest_blocks.compare=function(params){var __fest_buf="";try{var items = (params.items || []).slice(0, 2);
			var arrowIconParams = params.arrowIconParams || {};}catch(e){__fest_log_error(e.message);}__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'compare'
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;var i,item,__fest_to12,__fest_iterator12;try{__fest_iterator12=items || [];__fest_to12=__fest_iterator12.length;}catch(e){__fest_iterator12=[];__fest_to12=0;__fest_log_error(e.message);}for(i=0;i<__fest_to12;i++){item=__fest_iterator12[i];__fest_select="compare__item";__fest_params={};try{__fest_extend(__fest_params,fest._helpers.mergeParams(
								item,
								{
									mods: [!i ? 'first' : 'second']
								}
							))}catch(e){__fest_log_error(e.message)}__fest_params.htmlPrepend=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=!i}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params.separatorParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
											baseClass: 'compare__separator'
										})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_buf+=("<div class=\"compare__arrows\">");var j,arrowName,__fest_to13,__fest_iterator13;try{__fest_iterator13=['first', 'second'] || [];__fest_to13=__fest_iterator13.length;}catch(e){__fest_iterator13=[];__fest_to13=0;__fest_log_error(e.message);}for(j=0;j<__fest_to13;j++){arrowName=__fest_iterator13[j];try{__fest_attrs[0]=__fest_escapeHTML(arrowName)}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<div class=\"compare__arrow compare__arrow_" + __fest_attrs[0] + "\">");__fest_select="icon";__fest_params={};try{__fest_extend(__fest_params,arrowIconParams[arrowName])}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,fest._helpers.mergeTopParams(
																arrowIconParams,
																{
																	mods: [arrowName == 'first' ? 'arrow_left' : 'arrow_right']
																}
															))}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);__fest_buf+=("</div>");}__fest_buf+=("</div>");return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "772");}}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.compare__item=function(params){var __fest_buf="";__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'compare__item',
					htmlPrepend: params.htmlPrepend,
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_buf+=("<div class=\"compare__wrapper\">");__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params.sizeParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
								baseClass: 'compare__size'
							})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=params.badge}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="badge";__fest_params={};try{__fest_params=fest._helpers.mergeParams(
										params.badge,
										{ mix: ['compare__badge'] }
									)}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.src}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_attrs[0]=__fest_escapeHTML(params.src)}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<img src=\"" + __fest_attrs[0] + "\" class=\"compare__photo\"/>");}try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "817");}}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);__fest_buf+=("</div>");return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.lazyembed=function(params){var __fest_buf="";try{var lazyLoadParams = params.lazyLoad || {};
			var lazyPlaceholder = lazyLoadParams.placeholder || {};}catch(e){__fest_log_error(e.message);}__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,fest._helpers.mergeTopParams(
					lazyLoadParams,
					{
						mix: !lazyLoadParams.mix ? ['js-wysiwyg__embedcode'] : [],
						attrs: {
							'data-type': params.source
						}
					}
				))}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'lazyembed-textarea',
					tagName: 'textarea',
					html: params.content
				})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,fest._helpers.mergeTopParams(
					lazyPlaceholder,
					{
						mix: ['m-lazy-item', 'm-lazy-item_embed'].concat(lazyPlaceholder.size ? ['m-lazy-item_size_' + lazyPlaceholder.size] : []),
						attrs: {
							src: fest._helpers.svgPlaceholder(null, null, 'embed')
						}
					}
				))}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'lazyembed-placeholder',
					tagName: 'img'
				})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);__fest_buf+=("<span class=\"lazyembed-error error\">Во время загрузки произошла ошибка.</span>");return __fest_buf;};__fest_blocks.slider=function(params){var __fest_buf="";try{var wrapParams = params.wrapParams || {mix: params.wrapMix};
			var itemsParams = params.itemsParams || {mix: params.itemsMix};
			var contParams = params.contParams || {mix: params.contMix, attrs: params.contAttrs};}catch(e){__fest_log_error(e.message);}__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'slider'
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;var i,control,__fest_to14,__fest_iterator14;try{__fest_iterator14=params.controls || [];__fest_to14=__fest_iterator14.length;}catch(e){__fest_iterator14=[];__fest_to14=0;__fest_log_error(e.message);}for(i=0;i<__fest_to14;i++){control=__fest_iterator14[i];__fest_select="control";__fest_params={};try{__fest_params=fest._helpers.mergeParams(control, {
							mods: ['absolute']
						})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.html || params.items}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_attrs[0]=__fest_escapeHTML(fest._helpers.classNamesFor('slider__wrapper', wrapParams))}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<div class=\"" + __fest_attrs[0] + "\">");try{var additionalContentParams = {
								itemsParams: itemsParams,
								itemMix: params.itemMix,
								items: params.items,
								html: params.html
							};

							if (params.itemTemplate) {
								additionalContentParams.itemTemplate = params.itemTemplate;
							}}catch(e){__fest_log_error(e.message);}try{__fest_if=params.wrap}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="wrapper";__fest_params={};__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_select="cols";__fest_params={};try{__fest_extend(__fest_params,{
													contentMods: ['wrap']
												})}catch(e){__fest_log_error(e.message)}__fest_params.content=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_select="slider__content";__fest_params={};try{__fest_extend(__fest_params,contParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,additionalContentParams)}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}else{__fest_select="slider__content";__fest_params={};try{__fest_extend(__fest_params,contParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,additionalContentParams)}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}__fest_buf+=("</div>");}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);__fest_select="slider__page-resources";__fest_params={};__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;};__fest_blocks.slider__content=function(params){var __fest_buf="";__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'slider__content'
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params.itemsParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
							baseClass: 'slider__items'
						})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=params.items && params.itemTemplate}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){var i,item,__fest_to15,__fest_iterator15;try{__fest_iterator15=params.items || [];__fest_to15=__fest_iterator15.length;}catch(e){__fest_iterator15=[];__fest_to15=0;__fest_log_error(e.message);}for(i=0;i<__fest_to15;i++){item=__fest_iterator15[i];__fest_select="slider__item";__fest_params={};try{__fest_extend(__fest_params,{
												attrs: item.itemAttrs || {},
												mix: params.itemMix
											})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_select=params.itemTemplate}catch(e){__fest_select="";__fest_log_error(e.message)}__fest_params={};try{__fest_params=item}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}}else{try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "994");}}else{}}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.slider__item=function(params){var __fest_buf="";__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'slider__item'
				})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;};__fest_blocks.wrapper=function(params){var __fest_buf="";__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'wrapper'
				})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;};__fest_blocks["m-survey__answer"]=function(params){var __fest_buf="";__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'm-survey__answer',
					tagName: 'span'
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=params.answer.img && params.answer.img.src}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_attrs[0]=__fest_escapeHTML(params.answer.img.src)}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<img src=\"" + __fest_attrs[0] + "\" class=\"m-survey__img m-survey__img_left margin_right_10 valign_middle\"/>");}try{__fest_if=params.answer.text}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<span class=\"valign_middle\">");try{__fest_buf+=(params.answer.text)}catch(e){__fest_log_error(e.message + "1053");}__fest_buf+=("</span>");}try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "1058");}}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks["m-survey__errors"]=function(params){var __fest_buf="";__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,{
					baseClass: 'm-survey__errors'
				})}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;var i,error,__fest_to16,__fest_iterator16;try{__fest_iterator16=params.errors || [];__fest_to16=__fest_iterator16.length;}catch(e){__fest_iterator16=[];__fest_to16=0;__fest_log_error(e.message);}for(i=0;i<__fest_to16;i++){error=__fest_iterator16[i];__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,{
								baseClass: 'm-survey__error',
								mods: ['required']
							})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_buf+=(error)}catch(e){__fest_log_error(e.message + "1087");}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks["m-survey__form"]=function(params){var __fest_buf="";__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,{
					tagName: 'form',
					baseClass: 'm-survey__form',
					attrs: {
						'action': '.',
						'method': 'post',
						'novalidate': 'novalidate',
						'data-mp-el': 'SurveyComponent.form'
					}
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_select="m-survey__form_type_"+(params.layout.type)}catch(e){__fest_select="";__fest_log_error(e.message)}__fest_params={};__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "1118");}return __fest_buf;});__fest_params.htmlBottom=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=params.survey.login_required && !params.authorized}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("Чтобы проходить опрос необходимо авторизоваться");}else{try{__fest_if=params.isBusy}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="button";__fest_params={};try{__fest_extend(__fest_params,{
													mix: ['margin_right_30'],
													mods: ['color_project', 'loading'],
													attrs: {
														type: 'submit',
														disabled: 'disabled'
													},
													loader: true,
													text: 'Ответить'
												})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}else{try{__fest_if=params.currentType === 'question'}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="button";__fest_params={};try{__fest_extend(__fest_params,{
															mix: ['margin_right_30'],
															mods: ['color_project'],
															attrs: {
																type: 'submit'
															},
															text: 'Ответить'
														})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}else{try{__fest_if=params.currentType === 'answer'}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="button";__fest_params={};try{__fest_extend(__fest_params,{
															mix: ['margin_right_30'],
															mods: ['color_project'],
															attrs: {
																'data-mp-el': 'SurveyComponent.button-next',
																'type': 'button'
															},
															text: 'Продолжить'
														})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}else{}}}}try{__fest_if=params.errors && params.errors.server}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="m-survey__errors";__fest_params={};try{__fest_extend(__fest_params,{
										mix: ['margin_top_20'],
										errors: params.errors.server
									})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks["m-survey__form_type_all"]=function(params){var __fest_buf="";try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "1216");}try{__fest_buf+=(params.htmlBottom)}catch(e){__fest_log_error(e.message + "1217");}return __fest_buf;};__fest_blocks["m-survey__form_type_step"]=function(params){var __fest_buf="";__fest_select="box__block";__fest_params={};__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "1228");}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);__fest_select="box__block";__fest_params={};try{__fest_extend(__fest_params,{
					mods: ['dark']
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_buf+=(params.htmlBottom)}catch(e){__fest_log_error(e.message + "1239");}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks["m-survey__form_type_sidebar"]=function(params){var __fest_buf="";__fest_select="box__block";__fest_params={};__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "1253");}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);__fest_select="box__block";__fest_params={};try{__fest_extend(__fest_params,{
					mods: ['dark']
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_buf+=(params.htmlBottom)}catch(e){__fest_log_error(e.message + "1264");}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks["m-survey__head"]=function(params){var __fest_buf="";__fest_select="item";__fest_params={};try{__fest_extend(__fest_params,{
					title: params.name,
					text: params.description,
					mods: ['poll']
				})}catch(e){__fest_log_error(e.message)}__fest_params.middleHtml=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=params.img && params.img.src}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_attrs[0]=__fest_escapeHTML(params.img.src)}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}try{__fest_attrs[1]=__fest_escapeHTML(params.name)}catch(e){__fest_attrs[1]=""; __fest_log_error(e.message);}__fest_buf+=("<img src=\"" + __fest_attrs[0] + "\" alt=\"" + __fest_attrs[1] + "\" class=\"m-survey__img margin_top_10\"/>");}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks["m-survey__input"]=function(params){var __fest_buf="";try{var answer = params.answer;
			var options = params.options || {};
			var state = params.state || {};

			var isRange = !!options.answer_range;
			var isCheckbox = !isRange && options.max_answers > 1;
			var isFirst = params.index === 0;
			var hasTextInput = !!options.user_input_allowed && !answer.id;

			var inputAttrs = {
				'name': params.name,
				'value': answer.id, /* для пользовательского варианта будет равен "0" */
				'type': isCheckbox ? 'checkbox' : 'radio',
				'data-mp-el': 'SurveyComponent.input'
			};

			/* Для sidebar во всех кейсах используем small */
			var layoutMods = params.layout.type === 'sidebar' ? ['small'] : [];

			if (answer.disable_multiple) {
				inputAttrs['data-exclude'] = true;
			}

			if (hasTextInput) {
				inputAttrs['data-with-input'] = true;
			}

			if (state.checked) {
				inputAttrs.checked = 'checked';
			}}catch(e){__fest_log_error(e.message);}try{__fest_if=isRange}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="m-survey__range";__fest_params={};try{__fest_extend(__fest_params,{
							answer: answer,
							length: options.answer_range,
							mods: layoutMods,
						})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}else{__fest_select="checkbox";__fest_params={};try{__fest_extend(__fest_params,{
							mix: ['js-survey__answer'].concat(
								isFirst ? [] : ['margin_top_10']
							),
							mods: ['block', 'colored'].concat(
								isCheckbox ? [] : ['radio'],
								hasTextInput ? ['no-checkable'] : [],
								layoutMods
							),
							attrs: inputAttrs,
							sideParams: {
								mix: ['valign_middle']
							},
							realParams: {
								mix: ['js-survey__answer-input']
							},
							fieldParams: isCheckbox ? {
									icon: {
										mods: ['check']
									}
								} : {
									mods: ['dot']
								}
						})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=hasTextInput}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="input";__fest_params={};try{__fest_params={
										mix: ['js-survey__answer-input_custom'],
										attrs: {
											autocomplete: 'off',
											'data-mp-el': 'SurveyComponent.input-custom',
											name: params.name + '_custom',
											maxlength: options.user_input_max_length > 0 ? options.user_input_max_length : 140,
											placeholder: answer.text || 'Свой вариант ответа',
											type: 'text',
											value: state.value ? state.value : ''
										}
									}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}else{__fest_select="m-survey__answer";__fest_params={};try{__fest_params={
										answer: answer,
										mods: layoutMods,
									}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);try{__fest_if=hasTextInput && options.user_input_help_text}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,{
								baseClass: 'm-survey__question-note',
								mods: layoutMods,
							})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_select="note";__fest_params={};try{__fest_params={
									text: options.user_input_help_text,
								}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}}return __fest_buf;};__fest_blocks["m-survey__input"]=function(params){var __fest_buf="";try{var answer = params.answer;
			var options = params.options || {};
			var state = params.state || {};
			var isCheckbox = options.max_answers > 1;
			var isFirst = params.index === 0;
			var hasTextInput = !!options.user_input_allowed && !answer.id;

			var inputAttrs = {
				"name": params.name,
				"value": answer.id, // для пользовательского варианта будет равен "0"
				"type": isCheckbox ? "checkbox" : "radio",
				"data-mp-el": "SurveyComponent.input"
			};

			if (answer.disable_multiple) {
				inputAttrs["data-exclude"] = true;
			}

			if (hasTextInput) {
				inputAttrs["data-with-input"] = true;
			}

			if (state.checked) {
				inputAttrs.checked = "checked";
			}}catch(e){__fest_log_error(e.message);}__fest_select="checkbox";__fest_params={};try{__fest_extend(__fest_params,{
					mix: ["js-survey__answer"].concat(isFirst ? [] : ["margin_top_10"]),
					mods: ["block", "colored"].concat(
						isCheckbox ? [] : ["radio"],
						hasTextInput ? ["no-checkable"] : [],
						params.layout.type === "sidebar" ? ["small"] : []
					),
					attrs: inputAttrs,
					sideParams: {
						mix: ["valign_middle"]
					},
					realParams: {
						mix: ["js-survey__answer-input"]
					},
					fieldParams: isCheckbox
						? {
								icon: {
									mods: ["size_16", "fill_black"],
							    name: "icon_status_done"
								}
							}
						: {
								mods: ["dot"]
							}
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=hasTextInput}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="input";__fest_params={};try{__fest_extend(__fest_params,{
									mix: ["js-survey__answer-input_custom"],
									attrs: {
										autocomplete: "off",
										"data-mp-el": "SurveyComponent.input-custom",
										name: params.name + "_custom",
										maxlength: options.user_input_max_length > 0 ? options.user_input_max_length : 140,
										placeholder: answer.text || "Свой вариант ответа",
										type: "text",
										value: state.value ? state.value : ""
									}
								})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);try{__fest_if=options.user_input_help_text}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="note";__fest_params={};try{__fest_extend(__fest_params,{
										mix: ["margin_top_5"],
										text: options.user_input_help_text
									})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}}else{__fest_select="m-survey__answer";__fest_params={};try{__fest_extend(__fest_params,{
									answer: answer,
									mods: params.layout.type === "sidebar" ? ["small"] : []
								})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks["m-survey__question"]=function(params){var __fest_buf="";__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'm-survey__question'
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=params.layout.showCounter && params.total > 1}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<div class=\"m-survey__counter\">Вопрос ");try{__fest_buf+=(__fest_escapeHTML(params.index + 1))}catch(e){__fest_log_error(e.message + "1563");}__fest_buf+=(" из ");try{__fest_buf+=(__fest_escapeHTML(params.total))}catch(e){__fest_log_error(e.message + "1563");}__fest_buf+=("</div>");}try{__fest_if=params.question.text}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<div class=\"m-survey__question-text\">");try{__fest_if=params.layout.showIndex}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="step";__fest_params={};try{__fest_extend(__fest_params,{
										count: params.index + 1,
										mods: ['black'],
										mix: ['valign_middle', 'margin_right_10']
									})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_buf+=(params.question.text)}catch(e){__fest_log_error(e.message + "1582");}__fest_buf+=("</div>");}try{__fest_if=params.question.img && params.question.img.src}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_attrs[0]=__fest_escapeHTML(params.question.img.src)}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<img src=\"" + __fest_attrs[0] + "\" class=\"m-survey__img margin_bottom_20\"/>");__fest_select="line";__fest_params={};try{__fest_extend(__fest_params,{
								mods: ['separator'],
								mix: ['margin_bottom_20']
							})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.errors.length > 0}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="m-survey__errors";__fest_params={};try{__fest_extend(__fest_params,{
								errors: params.errors
							})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.question.descr}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="note";__fest_params={};try{__fest_extend(__fest_params,{
								mix: ['margin_bottom_10'],
								tag: 'div',
								text: params.question.descr,
							})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,{
							baseClass: 'm-survey__answers'
						})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;var i,answer,__fest_to17,__fest_iterator17;try{__fest_iterator17=params.question.answers || [];__fest_to17=__fest_iterator17.length;}catch(e){__fest_iterator17=[];__fest_to17=0;__fest_log_error(e.message);}for(i=0;i<__fest_to17;i++){answer=__fest_iterator17[i];try{/*
								 * Не показываем вариант ответа,
								 * если в условиях есть зависимость от ответа на другой вопрос,
								 * и этот ответ не было выбран пользователем
								 */
								var showAnswer = true;
								var showCondition = answer.show_condition || {};
								var parentQuestionId = showCondition.question;
								if (parentQuestionId) {
									var userChoice = params.userChoice;
									var parentAnswers = fest._helpers.getByPath('userChoice.q_' + parentQuestionId, params);
									if (parentAnswers) {
										var parentAnswerId = "" + showCondition.checked_answer;
										// Это может быть массив id-шников или словарь, где id ключ
										showAnswer = Array.isArray(parentAnswers) ?
											parentAnswers.indexOf(parentAnswerId) !== -1
											: parentAnswerId in parentAnswers && parentAnswers[parentAnswerId] !== '0';
									} else {
										showAnswer = false;
									}
								}}catch(e){__fest_log_error(e.message);}try{__fest_if=showAnswer}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="m-survey__input";__fest_params={};try{__fest_extend(__fest_params,{
											name: params.name,
											answer: answer,
											state: params.formState["" + params.question.id] && params.formState["" + params.question.id]["" + answer.id],
											index: i,
											layout: params.layout,
											options: params.question.options
										})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks["m-survey__question-answer"]=function(params){var __fest_buf="";__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'm-survey__question'
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=params.layout.showCounter}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<div class=\"m-survey__counter\">Вопрос ");try{__fest_buf+=(__fest_escapeHTML(params.index + 1))}catch(e){__fest_log_error(e.message + "1700");}__fest_buf+=(" из ");try{__fest_buf+=(__fest_escapeHTML(params.total))}catch(e){__fest_log_error(e.message + "1700");}__fest_buf+=("</div>");}try{__fest_if=params.question.text}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<div class=\"m-survey__question-text\">");try{__fest_if=params.layout.showIndex}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="step";__fest_params={};try{__fest_extend(__fest_params,{
										count: params.index + 1,
										mods: ['black'],
										mix: ['valign_middle', 'margin_right_10']
									})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_buf+=(params.question.text)}catch(e){__fest_log_error(e.message + "1719");}__fest_buf+=("</div>");}try{__fest_if=params.answer.img && params.answer.img.src}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_attrs[0]=__fest_escapeHTML(params.answer.img.src)}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<img src=\"" + __fest_attrs[0] + "\" class=\"m-survey__img margin_bottom_20\"/>");__fest_select="line";__fest_params={};try{__fest_extend(__fest_params,{
								mods: ['separator'],
								mix: ['margin_bottom_20']
							})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}__fest_buf+=("<div>");try{__fest_buf+=(params.answer.text)}catch(e){__fest_log_error(e.message + "1739");}__fest_buf+=("</div>");return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks["m-survey__questions"]=function(params){var __fest_buf="";__fest_select="m-survey__form";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=params.type === 'quiz'}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_if=params.currentType === 'question'}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_attrs[0]=__fest_escapeHTML(params.currentQuestion.id)}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<input name=\"question\" type=\"hidden\" value=\"" + __fest_attrs[0] + "\"/>");__fest_select="m-survey__question";__fest_params={};try{__fest_extend(__fest_params,{
											errors: params.errors["" + params.currentQuestion.id] || [],
											formState: params.formState,
											index: params.currentIndex, // на самом деле тут не нужен
											layout: params.layout,
											name: "answer",
											question: params.currentQuestion, // передаем из стейта
											total: params.survey.questions.length,
											userChoice: params.payload,
										})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}else{try{__fest_if=params.currentType === 'answer'}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="m-survey__question-answer";__fest_params={};try{__fest_extend(__fest_params,{
											answer: params.currentAnswer,
											index: params.currentIndex, // на самом деле тут не нужен
											layout: params.layout,
											question: params.currentQuestion, // передаем из стейта
											total: params.survey.questions.length
										})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}else{}}}else{try{__fest_if=(params.layout.type === 'step' || params.layout.type === 'sidebar') && ['poll', 'exam', 'survey'].indexOf(params.type) !== -1}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_attrs[0]=__fest_escapeHTML(params.currentQuestion.id)}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<input name=\"question\" type=\"hidden\" value=\"" + __fest_attrs[0] + "\"/>");__fest_select="m-survey__question";__fest_params={};try{__fest_extend(__fest_params,{
									name: "answer",
									question: params.currentQuestion, // передаем из стейта
									index: params.currentIndex, // на самом деле тут не нужен
									formState: params.formState,
									total: params.survey.questions.length,
									layout: params.layout,
									errors: params.errors["" + params.currentQuestion.id] || [],
									userChoice: params.payload,
								})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}else{try{__fest_if=params.layout.type === 'all' && ['poll', 'exam', 'survey'].indexOf(params.type) !== -1}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){var i,question,__fest_to18,__fest_iterator18;try{__fest_iterator18=params.survey.questions || [];__fest_to18=__fest_iterator18.length;}catch(e){__fest_iterator18=[];__fest_to18=0;__fest_log_error(e.message);}for(i=0;i<__fest_to18;i++){question=__fest_iterator18[i];try{__fest_attrs[0]=__fest_escapeHTML(question.id)}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<input name=\"question\" type=\"hidden\" value=\"" + __fest_attrs[0] + "\"/>");__fest_select="m-survey__question";__fest_params={};try{__fest_extend(__fest_params,{
										name: 'answer',
										question: question,
										index: i,
										formState: params.formState,
										total: params.survey.questions.length,
										layout: params.layout,
										errors: params.errors["" + question.id] || [],
										userChoice: params.payload,
									})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);__fest_select="line";__fest_params={};try{__fest_extend(__fest_params,{
										mods: ['separator'],
										mix: ['margin_vertical_30']
									})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}}else{}}}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks["m-survey__range"]=function(params){var __fest_buf="";__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,{
					baseClass: 'm-survey__range',
				})}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=params.answer.text}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<div class=\"m-survey__range-text\">");try{__fest_buf+=(params.answer.text)}catch(e){__fest_log_error(e.message + "1868");}__fest_buf+=("</div>");}__fest_buf+=("<div>");__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,{
								attrs: {
									checked: 'checked',
									name: 'range_' + params.answer.id,
									type: 'radio',
									value: '0',
								},
								baseClass: 'm-survey__range-input',
								tagName: 'input',
							})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);var index,__fest_to19,__fest_from19,__fest_iterator19;try{__fest_from19=1;__fest_to19=params.length;}catch(e){__fest_from19=0;__fest_to19=0;__fest_log_error(e.message);}for(index = __fest_from19;index<=__fest_to19;index++){__fest_select="m-survey__range-button";__fest_params={};try{__fest_extend(__fest_params,{
									answer: params.answer,
									text: index,
								})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}__fest_buf+=("</div>");return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks["m-survey__range-button"]=function(params){var __fest_buf="";__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,{
					baseClass: 'm-survey__range-button',
					tagName: 'label',
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,{
							attrs: {
								name: 'range_' + params.answer.id,
								type: 'radio',
								value: params.text,
							},
							baseClass: 'm-survey__range-input',
							tagName: 'input',
						})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);__fest_buf+=("<span class=\"m-survey__range-button-label\">");try{__fest_buf+=(__fest_escapeHTML(params.text))}catch(e){__fest_log_error(e.message + "1937");}__fest_buf+=("</span>");return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks["m-survey__result"]=function(params){var __fest_buf="";__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
						baseClass: 'm-survey__result'
					})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=params.question.text}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<div class=\"m-survey__result-text\">");try{__fest_if=params.layout.showResultIndex}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="step";__fest_params={};try{__fest_extend(__fest_params,{
											count: params.index + 1,
											mods: ['black'],
											mix: ['valign_middle', 'margin_right_10']
										})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_buf+=(params.question.text)}catch(e){__fest_log_error(e.message + "1975");}__fest_buf+=("</div>");}try{__fest_if=params.question.img && params.question.img.src}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_attrs[0]=__fest_escapeHTML(params.question.img.src)}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<img src=\"" + __fest_attrs[0] + "\" class=\"m-survey__img margin_bottom_20\"/>");__fest_select="line";__fest_params={};try{__fest_extend(__fest_params,{
									mods: ['separator'],
									mix: ['margin_bottom_20']
								})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}var i,answer,__fest_to20,__fest_iterator20;try{__fest_iterator20=params.question.answers || [];__fest_to20=__fest_iterator20.length;}catch(e){__fest_iterator20=[];__fest_to20=0;__fest_log_error(e.message);}for(i=0;i<__fest_to20;i++){answer=__fest_iterator20[i];__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
									baseClass: 'm-survey__result-item',
									mods: answer.own ? ['own'] : []
								})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=params.layout.type != 'sidebar' && answer.percent}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<span class=\"m-survey__percent\">");try{__fest_buf+=(answer.percent + '%')}catch(e){__fest_log_error(e.message + "2011");}__fest_buf+=("</span>");}__fest_select="m-survey__answer";__fest_params={};try{__fest_extend(__fest_params,{
											answer: answer,
											mix: i > 0 ? ['margin_top_20'] : [],
											mods: params.layout.type === 'sidebar' ? ['small'] : []
										})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=answer.percent > 0}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_attrs[0]=__fest_escapeHTML( 'width: ' + answer.percent + '%')}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<span class=\"m-survey__graph\" style=\"" + __fest_attrs[0] + "\"><span class=\"m-survey__bar\"></span>");try{__fest_if=answer.cnt}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<span class=\"m-survey__count\">");try{__fest_buf+=(answer.cnt)}catch(e){__fest_log_error(e.message + "2031");}__fest_buf+=("</span>");}__fest_buf+=("</span>");}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks["m-survey__results"]=function(params){var __fest_buf="";try{__fest_select="m-survey__results_type_"+(params.layout.type)}catch(e){__fest_select="";__fest_log_error(e.message)}__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=params.survey.hide_results}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="text";__fest_params={};try{__fest_params={
								mods: ['light_medium'],
								text: 'Спасибо, ваш голос принят'
							}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}else{try{__fest_if=['poll', 'survey'].indexOf(params.type) !== -1}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){var i,question,__fest_to21,__fest_iterator21;try{__fest_iterator21=params.survey.questions || [];__fest_to21=__fest_iterator21.length;}catch(e){__fest_iterator21=[];__fest_to21=0;__fest_log_error(e.message);}for(i=0;i<__fest_to21;i++){question=__fest_iterator21[i];__fest_select="m-survey__result";__fest_params={};try{__fest_extend(__fest_params,{
										layout: params.layout,
										index: i,
										question: question
									})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);try{__fest_if=i < params.survey.questions.length - 1}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="line";__fest_params={};try{__fest_extend(__fest_params,{
											mods: ['separator'],
											mix: ['margin_vertical_30']
										})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}}}else{try{__fest_if=['exam', 'quiz'].indexOf(params.type) !== -1}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_if=params.survey.result.name}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="text";__fest_params={};try{__fest_params={
									mods: ['light_large', 'block'],
									text: params.survey.result.name
								}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.survey.result.correct_answers_count && params.survey.questions.length}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="text";__fest_params={};try{__fest_params={
									mods: ['light_medium', 'block'],
									mix: ['margin_top_20'],
									text: 'Ваш результат: ' + params.survey.result.correct_answers_count + ' из ' + params.survey.questions.length
								}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.survey.result.img && params.survey.result.img.src}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_attrs[0]=__fest_escapeHTML(params.survey.result.img.src)}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<img src=\"" + __fest_attrs[0] + "\" class=\"m-survey__img margin_top_20\"/>");}try{__fest_if=params.survey.result.text}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="text";__fest_params={};try{__fest_params={
									mix: ['margin_top_20'],
									mods: ['light_medium', 'block'],
									text: params.survey.result.text
								}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}}else{}}}return __fest_buf;});__fest_params.htmlBottom=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_select="tbl";__fest_params={};try{__fest_extend(__fest_params,{
							mods: ['width_100p']
						})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_select="cell";__fest_params={};try{__fest_extend(__fest_params,{
									mix: ['valign_middle']
								})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=params.survey.counters && params.survey.counters.total_votes}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<span class=\"margin_right_30\">Проголосовало: ");try{__fest_buf+=(params.survey.counters.total_votes)}catch(e){__fest_log_error(e.message + "2151");}__fest_buf+=(" ");try{__fest_select=params.survey.counters.total_votes}catch(e){__fest_select=0;__fest_log_error(e.message)}__fest_params=[];__fest_params = ["человек","человека","человек"];__fest_buf+=(__fest_format(__fest_params[__fest_plural(__fest_select)], __fest_select));__fest_buf+=("</span>");}try{__fest_if=params.isActive && params.layout.allowRepeat && params.voteAttempts > 0}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="link";__fest_params={};try{__fest_params={
											mods: ['black', 'dashed'],
											text: 'Пройти ещё раз',
											href: '#',
											attrs: {
												'data-mp-el': 'SurveyComponent.button-reset'
											}
										}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);try{__fest_if=params.layout.type != 'sidebar' && params.shareList}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="cell";__fest_params={};try{__fest_extend(__fest_params,{
										mix: ['valign_middle'],
										mods: ['right']
									})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_buf+=(params.shareList)}catch(e){__fest_log_error(e.message + "2183");}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks["m-survey__results_type_all"]=function(params){var __fest_buf="";try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "2199");}}try{__fest_if=params.htmlBottom}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.htmlBottom)}catch(e){__fest_log_error(e.message + "2202");}}return __fest_buf;};__fest_blocks["m-survey__results_type_step"]=function(params){var __fest_buf="";try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="box__block";__fest_params={};__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "2215");}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}try{__fest_if=params.htmlBottom}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="box__block";__fest_params={};try{__fest_extend(__fest_params,{
						mods: ['dark']
					})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_buf+=(params.htmlBottom)}catch(e){__fest_log_error(e.message + "2228");}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}return __fest_buf;};__fest_blocks["m-survey__results_type_sidebar"]=function(params){var __fest_buf="";try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="box__block";__fest_params={};__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "2243");}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}try{__fest_if=params.htmlBottom}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="box__block";__fest_params={};try{__fest_extend(__fest_params,{
						mods: ['dark']
					})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_buf+=(params.htmlBottom)}catch(e){__fest_log_error(e.message + "2256");}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}return __fest_buf;};__fest_blocks["m-survey__wrapper"]=function(params){var __fest_buf="";__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'm-survey__wrapper'
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=params.currentState === 'done' && params.layout.showResults}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<span data-mp-el=\"SurveyComponent.scroll-anchor\"></span>");}try{__fest_select="m-survey__wrapper_type_"+(params.layout.type)}catch(e){__fest_select="";__fest_log_error(e.message)}__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}__fest_params.htmlHeader=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=params.layout.showHeader && (params.survey.name || params.survey.description)}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="m-survey__head";__fest_params={};try{__fest_extend(__fest_params,{
										name: params.survey.name,
										description: params.survey.description
									})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}return __fest_buf;});__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=params.currentState === 'ready'}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<span data-mp-el=\"SurveyComponent.scroll-anchor\"></span>");__fest_select="m-survey__questions";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}else{try{__fest_if=params.currentState === 'done' && params.layout.showResults}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="m-survey__results";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}else{}}return __fest_buf;});__fest_params.htmlFooter=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks["m-survey__wrapper_type_all"]=function(params){var __fest_buf="";try{__fest_if=params.htmlHeader}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.htmlHeader)}catch(e){__fest_log_error(e.message + "2330");}__fest_select="line";__fest_params={};try{__fest_extend(__fest_params,{
						mods: ['separator'],
						mix: ['margin_vertical_30']
					})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "2344");}}try{__fest_if=params.htmlFooter}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.htmlFooter)}catch(e){__fest_log_error(e.message + "2348");}}return __fest_buf;};__fest_blocks["m-survey__wrapper_type_step"]=function(params){var __fest_buf="";__fest_select="box";__fest_params={};try{__fest_extend(__fest_params,{
					mods: ['block']
				})}catch(e){__fest_log_error(e.message)}__fest_params.afterHtml=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=params.htmlHeader}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="box__block";__fest_params={};try{__fest_extend(__fest_params,{
								mix: ['padding_bottom_0']
							})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_buf+=(params.htmlHeader)}catch(e){__fest_log_error(e.message + "2374");}__fest_select="line";__fest_params={};try{__fest_params={
									mods: ['separator'],
									mix: ['margin_top_20']
								}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "2388");}}try{__fest_if=params.htmlFooter}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="box__block";__fest_params={};__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_buf+=(params.htmlFooter)}catch(e){__fest_log_error(e.message + "2396");}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks["m-survey__wrapper_type_sidebar"]=function(params){var __fest_buf="";__fest_select="box";__fest_params={};try{__fest_extend(__fest_params,{
					mods: ['block']
				})}catch(e){__fest_log_error(e.message)}__fest_params.afterHtml=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=params.htmlHeader}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="box__block";__fest_params={};try{__fest_extend(__fest_params,{
								mix: ['padding_bottom_0']
							})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_buf+=(params.htmlHeader)}catch(e){__fest_log_error(e.message + "2428");}__fest_select="line";__fest_params={};try{__fest_params={
									mods: ['separator'],
									mix: ['margin_top_20']
								}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "2442");}}try{__fest_if=params.htmlFooter}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="box__block";__fest_params={};__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_buf+=(params.htmlFooter)}catch(e){__fest_log_error(e.message + "2450");}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.box__block=function(params){var __fest_buf="";__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'box__block'
				})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;};__fest_blocks.loader=function(params){var __fest_buf="";try{__fest_attrs[0]=__fest_escapeHTML(fest._helpers.classNamesFor('loader', params))}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<svg class=\"" + __fest_attrs[0] + "\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\" version=\"1.1\" viewBox=\"-10 -10 220 220\"><defs><linearGradient id=\"transparent\" gradientUnits=\"objectBoundingBox\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"rgba(119, 119, 119, 0)\" stop-opacity=\"0\"></stop><stop offset=\"100%\" stop-color=\"rgba(119, 119, 119, 0)\" stop-opacity=\"0\"></stop></linearGradient><linearGradient id=\"one\" gradientUnits=\"objectBoundingBox\" x1=\"1\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"rgba(119, 119, 119, 0)\" stop-opacity=\"0\"></stop><stop offset=\"100%\" stop-color=\"rgba(119, 119, 119, .33)\"></stop></linearGradient><linearGradient id=\"two\" gradientUnits=\"objectBoundingBox\" x1=\"1\" y1=\"1\" x2=\"0\" y2=\"0\"><stop offset=\"0%\" stop-color=\"rgba(119, 119, 119, .33)\"></stop><stop offset=\"100%\" stop-color=\"rgba(119, 119, 119, .66)\"></stop></linearGradient><linearGradient id=\"three\" gradientUnits=\"objectBoundingBox\" x1=\"0\" y1=\"1\" x2=\"0\" y2=\"0\"><stop offset=\"0%\" stop-color=\"rgba(119, 119, 119, .66)\"></stop><stop offset=\"100%\" stop-color=\"rgba(119, 119, 119, 1)\"></stop></linearGradient><linearGradient id=\"four\" gradientUnits=\"objectBoundingBox\" x1=\"0\" y1=\"1\" x2=\"1\" y2=\"0\"><stop offset=\"0%\" stop-color=\"rgba(119, 119, 119, 1)\"></stop><stop offset=\"100%\" stop-color=\"rgba(119, 119, 119, 1)\"></stop></linearGradient><linearGradient id=\"five\" gradientUnits=\"objectBoundingBox\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0%\" stop-color=\"rgba(119, 119, 119, 1)\"></stop><stop offset=\"100%\" stop-color=\"rgba(119, 119, 119, 1)\"></stop></linearGradient></defs><g fill=\"none\" stroke-width=\"40\" transform=\"translate(100,100)\"><path d=\"M 81.6,-40 A 90,90 0 0,1 81.6,40\" stroke=\"url(#transparent)\"></path><path d=\"M 81.6,40 A 90,90 0 0,1 0,90\" stroke=\"url(#one)\"></path><path d=\"M 0,90 A 90,90 0 0,1 -81.6,40\" stroke=\"url(#two)\"></path><path d=\"M -81.6,40 A 90,90 0 0,1 -81.6,-40\" stroke=\"url(#three)\"></path><path d=\"M -81.6,-40 A 90,90 0 0,1 0,-90\" stroke=\"url(#four)\"></path><path d=\"M 0,-90 A 90,90 0 0,1 81.6,-40\" stroke=\"url(#five)\" stroke-linecap=\"round\"></path></g></svg>");return __fest_buf;};__fest_blocks.checkbox__field=function(params){var __fest_buf="";try{__fest_attrs[0]=__fest_escapeHTML(fest._helpers.classNamesFor('checkbox__field', params))}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<span class=\"" + __fest_attrs[0] + "\">");try{__fest_if=params.icon}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{
						params.icon.mix = params.icon.mix || [];
						params.icon.mix.push('checkbox__icon');
					}catch(e){__fest_log_error(e.message);}__fest_select="icon";__fest_params={};try{__fest_params=params.icon}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}__fest_buf+=("</span>");return __fest_buf;};__fest_blocks.input__suggest=function(params){var __fest_buf="";try{__fest_attrs[0]=__fest_escapeHTML(fest._helpers.classNamesFor('input__suggest', params))}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<div class=\"" + __fest_attrs[0] + "\">");var i,item,__fest_to22,__fest_iterator22;try{__fest_iterator22=params.items || [];__fest_to22=__fest_iterator22.length;}catch(e){__fest_iterator22=[];__fest_to22=0;__fest_log_error(e.message);}for(i=0;i<__fest_to22;i++){item=__fest_iterator22[i];__fest_select="input__suggest__item";__fest_params={};try{__fest_extend(__fest_params,item)}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "2557");}}__fest_buf+=("</div>");return __fest_buf;};__fest_blocks.input__suggest__item=function(params){var __fest_buf="";try{__fest_element=params.href ? 'a' : 'div' ;if(typeof __fest_element !== "string"){__fest_log_error("Element name must be a string");__fest_element="div"}}catch(e){__fest_element="div";__fest_log_error(e.message);}__fest_element_stack.push(__fest_element);__fest_buf+=("<" + __fest_element);try{__fest_if=params.href}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=(" href=\"");try{__fest_select=(params.href)}catch(e){__fest_select="";__fest_log_error(e.message)}__fest_buf+=(__fest_select);__fest_buf+=("\"");}__fest_buf+=(" class=\"");try{__fest_select=(fest._helpers.classNamesFor('input__suggest__item', params))}catch(e){__fest_select="";__fest_log_error(e.message)}__fest_buf+=(__fest_select);__fest_buf+=("\"");var sAttrKey,sAttrValue,__fest_iterator23;try{__fest_iterator23=params.attrs || {};}catch(e){__fest_iterator={};__fest_log_error(e.message);}for(sAttrKey in __fest_iterator23){sAttrValue=__fest_iterator23[sAttrKey];try{__fest_select=(sAttrKey)}catch(e){__fest_select="";__fest_log_error(e.message)}if(__fest_select!==""){__fest_buf+=(" " + __fest_select + "=\"");try{__fest_buf+=(__fest_escapeHTML(sAttrValue))}catch(e){__fest_log_error(e.message + "2577");}__fest_buf+=("\"");}}__fest_element=__fest_element_stack[__fest_element_stack.length-1];__fest_buf+=(__fest_element in __fest_short_tags?"/>":">");try{__fest_if=params.text}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.text)}catch(e){__fest_log_error(e.message + "2583");}}try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "2587");}}__fest_element = __fest_element_stack[__fest_element_stack.length - 1];if(!(__fest_element in __fest_short_tags)){__fest_buf+=("</" + __fest_element + ">")}__fest_element_stack.pop();return __fest_buf;};__fest_blocks.scroll=function(params){var __fest_buf="";try{params.type = params.type || 'vertical';

			var trackParams = params.trackParams || {};
			var trackBoxParams = params.trackBoxParams || {};
			var dragParams = params.dragParams || {};
			var dragWrapParams = params.dragWrapParams || {};

			params.mix = params.mix || ['js-scrollbar'];
			trackBoxParams.mix = trackBoxParams.mix || ['js-scrollbar__track'];
			dragWrapParams.mix = dragWrapParams.mix || ['js-scrollbar__track__drag__point'];
			dragParams.mix = dragParams.mix || ['js-scrollbar__track__drag'];}catch(e){__fest_log_error(e.message);}try{__fest_attrs[0]=__fest_escapeHTML(fest._helpers.classNamesFor('scroll', params))}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}try{__fest_attrs[1]=__fest_escapeHTML(params.type)}catch(e){__fest_attrs[1]=""; __fest_log_error(e.message);}__fest_buf+=("<div class=\"" + __fest_attrs[0] + "\" data-type=\"" + __fest_attrs[1] + "\">");try{__fest_attrs[0]=__fest_escapeHTML(fest._helpers.classNamesFor('scroll__track', trackParams))}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<div class=\"" + __fest_attrs[0] + "\">");try{__fest_attrs[0]=__fest_escapeHTML(fest._helpers.classNamesFor('scroll__track__box', trackBoxParams))}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<div class=\"" + __fest_attrs[0] + "\">");try{__fest_attrs[0]=__fest_escapeHTML(fest._helpers.classNamesFor('scroll__track__drag-wrap', dragWrapParams))}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<div class=\"" + __fest_attrs[0] + "\">");try{__fest_attrs[0]=__fest_escapeHTML(fest._helpers.classNamesFor('scroll__track__drag', dragParams))}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<div class=\"" + __fest_attrs[0] + "\"></div></div></div></div></div>");return __fest_buf;};__fest_blocks.suggest__block=function(params){var __fest_buf="";__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'suggest__block'
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=params.title}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<div class=\"suggest__title\">");try{__fest_buf+=(params.title)}catch(e){__fest_log_error(e.message + "2641");}__fest_buf+=("</div>");}var i,item,__fest_to24,__fest_iterator24;try{__fest_iterator24=params.items || [];__fest_to24=__fest_iterator24.length;}catch(e){__fest_iterator24=[];__fest_to24=0;__fest_log_error(e.message);}for(i=0;i<__fest_to24;i++){item=__fest_iterator24[i];__fest_select="suggest__item";__fest_params={};try{__fest_extend(__fest_params,item)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,fest._helpers.mergeTopParams(
								item,
								params.itemParams
							))}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.suggest__item=function(params){var __fest_buf="";__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'suggest__item'
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=params.title}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,fest._helpers.mergeParams(params.titleParams, {
								mix: ['link-holder'],
								attrs: {
									href: params.href
								}
							}))}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
								baseClass: 'suggest__item-title',
								html: params.title
							})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.subtitle}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params.subtitleParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
								baseClass: 'suggest__item-subtitle',
								html: params.subtitle
							})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.html || params.text}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.html || params.text)}catch(e){__fest_log_error(e.message + "2709");}}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.item__param=function(params){var __fest_buf="";try{__fest_element=params.href ? 'a' : 'span' ;if(typeof __fest_element !== "string"){__fest_log_error("Element name must be a string");__fest_element="div"}}catch(e){__fest_element="div";__fest_log_error(e.message);}__fest_element_stack.push(__fest_element);__fest_buf+=("<" + __fest_element);try{__fest_if=params.href}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=(" href=\"");try{__fest_buf+=(__fest_escapeHTML(params.href))}catch(e){__fest_log_error(e.message + "2726");}__fest_buf+=("\"");}__fest_buf+=(" class=\"");try{__fest_buf+=(fest._helpers.classNamesFor('item__param', params))}catch(e){__fest_log_error(e.message + "2732");}__fest_buf+=("\"");__fest_element=__fest_element_stack[__fest_element_stack.length-1];__fest_buf+=(__fest_element in __fest_short_tags?"/>":">");try{__fest_if=params.icon}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="icon";__fest_params={};try{__fest_params=params.icon}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.text}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.text)}catch(e){__fest_log_error(e.message + "2745");}}__fest_element = __fest_element_stack[__fest_element_stack.length - 1];if(!(__fest_element in __fest_short_tags)){__fest_buf+=("</" + __fest_element + ">")}__fest_element_stack.pop();return __fest_buf;};__fest_blocks.tbl=function(params){var __fest_buf="";__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'tbl'
				})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;};__fest_blocks.list__item=function(params){var __fest_buf="";try{if (params.icon) {
				params.mods = params.mods || [];
				params.mods.push('icon');
			}}catch(e){__fest_log_error(e.message);}__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,{
					tagName: 'li',
					baseClass: 'list__item',
					baseParams: params
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=params.icon}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<span class=\"list__item__icon\">");__fest_select="icon";__fest_params={};try{__fest_params=params.icon}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);__fest_buf+=("</span>");}try{__fest_if=params.text}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,{
								tagName: 'span',
								href: params.href,
								html: params.text,
								baseClass: 'list__text',
								baseParams: params.textParams
							})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.links && params.links.length}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){var y,link,__fest_to25,__fest_iterator25;try{__fest_iterator25=params.links || [];__fest_to25=__fest_iterator25.length;}catch(e){__fest_iterator25=[];__fest_to25=0;__fest_log_error(e.message);}for(y=0;y<__fest_to25;y++){link=__fest_iterator25[y];__fest_select="link";__fest_params={};try{__fest_extend(__fest_params,link)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
									mix: ['margin_left_10'].concat(link.mix || [])
								})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks["deti-mywidget"]=function(params){var __fest_buf="";try{var data = params.data || {};
			var dataModule = "MyWidgetModel";
			var userClusters = data && data.userClusters;
			var inst;
			if ( data.template && data.cid ) {
				inst = data.template + ":" + data.cid
			}
			if (params.attrs && params.attrs["data-module"]) {
				dataModule = dataModule + "," + params.attrs["data-module"]
			}}catch(e){__fest_log_error(e.message);}__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,fest._helpers.mergeTopParams(
					params,
					{
						mix: ["js-module"],
						attrs: {
							"data-module": dataModule,
							"data-view": "MyWidgetView",
							"data-inst": inst,
							"onclick": "return " + JSON.stringify({
								MyWidgetView: {
									data: {
										title: data.title,
										href: data.href
									},
									options: userClusters && {
										sdkParams: {
											userClusters: userClusters + 10000
										}
									}
								}
							})
						}
					}
				))}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;};__fest_blocks.article__about=function(params){var __fest_buf="";try{__fest_attrs[0]=__fest_escapeHTML(fest._helpers.classNamesFor('article__about', params))}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<div class=\"" + __fest_attrs[0] + "\">");var i,row,__fest_to26,__fest_iterator26;try{__fest_iterator26=params.rows || [];__fest_to26=__fest_iterator26.length;}catch(e){__fest_iterator26=[];__fest_to26=0;__fest_log_error(e.message);}for(i=0;i<__fest_to26;i++){row=__fest_iterator26[i];__fest_buf+=("<div class=\"article__about-row\">");try{__fest_if=row.text}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_params={
								forClass: 'article__about-item',
								html: row.text
							}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}var j,item,__fest_to27,__fest_iterator27;try{__fest_iterator27=row.items || [];__fest_to27=__fest_iterator27.length;}catch(e){__fest_iterator27=[];__fest_to27=0;__fest_log_error(e.message);}for(j=0;j<__fest_to27;j++){item=__fest_iterator27[j];__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,item)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
									tagName: 'span',
									forClass: 'article__about-item',
									html: item.text
								})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}__fest_buf+=("</div>");}__fest_buf+=("</div>");return __fest_buf;};__fest_blocks.article__table=function(params){var __fest_buf="";try{__fest_attrs[0]=__fest_escapeHTML(fest._helpers.classNamesFor('article__table', params))}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<table class=\"" + __fest_attrs[0] + "\">");try{__fest_if=params.caption}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params.captionParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
							baseClass: 'article__table-caption',
							tagName: 'caption',
							html: params.caption
						})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}var i,row,__fest_to28,__fest_iterator28;try{__fest_iterator28=params.items || [];__fest_to28=__fest_iterator28.length;}catch(e){__fest_iterator28=[];__fest_to28=0;__fest_log_error(e.message);}for(i=0;i<__fest_to28;i++){row=__fest_iterator28[i];__fest_buf+=("<tr>");var j,cell,__fest_to29,__fest_iterator29;try{__fest_iterator29=row || [];__fest_to29=__fest_iterator29.length;}catch(e){__fest_iterator29=[];__fest_to29=0;__fest_log_error(e.message);}for(j=0;j<__fest_to29;j++){cell=__fest_iterator29[j];try{var cellParams = { attrs: {} };

							if (cell.type) cellParams.mods = [cell.type];

							['rowspan', 'colspan'].forEach(function(attrName) {
								if (cell[attrName]) cellParams.attrs[attrName] = cell[attrName]
							});}catch(e){__fest_log_error(e.message);}__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,cellParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
									baseClass: 'article__cell',
									tagName: 'td',
									html: cell.content || cell
								})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}__fest_buf+=("</tr>");}__fest_buf+=("</table>");return __fest_buf;};__fest_blocks.article__video=function(params){var __fest_buf="";__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,{
					forClass: 'article__video',
					forParams: params
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=params.src}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<iframe frameborder=\"0\" webkitallowfullscreen=\"webkitallowfullscreen\" mozallowfullscreen=\"mozallowfullscreen\" allowfullscreen=\"allowfullscreen\" src=\"");try{__fest_buf+=(__fest_escapeHTML(params.src + (params.autoplay ? (params.src.indexOf('?') != -1 ? '&amp;' : '?') + 'autoplay=1' : '')))}catch(e){__fest_log_error(e.message + "2974");}__fest_buf+=("\"></iframe>");}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.icon__svg_defs=function(params){var __fest_buf="";__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,fest._helpers.mergeTopParams(
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
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_buf+=("<use xlink:href=\"");try{__fest_select="#icon__svg_"+(params.name)}catch(e){__fest_select="";__fest_log_error(e.message)}__fest_buf+=(__fest_select);__fest_buf+=("\"></use>");return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.label=function(params){var __fest_buf="";__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					tagName: 'span',
					baseClass: 'label',
					html: params.text
				})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;};__fest_blocks.hdr__ending=function(params){var __fest_buf="";try{__fest_element=params.href ? 'a' : 'span';if(typeof __fest_element !== "string"){__fest_log_error("Element name must be a string");__fest_element="div"}}catch(e){__fest_element="div";__fest_log_error(e.message);}__fest_element_stack.push(__fest_element);__fest_buf+=("<" + __fest_element);try{__fest_if=params.href}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=(" href=\"");try{__fest_buf+=(params.href)}catch(e){__fest_log_error(e.message + "3055");}__fest_buf+=("\"");}__fest_buf+=(" class=\"");try{__fest_buf+=(fest._helpers.classNamesFor('hdr__ending', params))}catch(e){__fest_log_error(e.message + "3061");}__fest_buf+=("\"");var sAttrKey,sAttr,__fest_iterator30;try{__fest_iterator30=params.attrs || {};}catch(e){__fest_iterator={};__fest_log_error(e.message);}for(sAttrKey in __fest_iterator30){sAttr=__fest_iterator30[sAttrKey];try{__fest_select=(sAttrKey)}catch(e){__fest_select="";__fest_log_error(e.message)}if(__fest_select!==""){__fest_buf+=(" " + __fest_select + "=\"");try{__fest_select=(sAttr)}catch(e){__fest_select="";__fest_log_error(e.message)}__fest_buf+=(__fest_select);__fest_buf+=("\"");}}__fest_element=__fest_element_stack[__fest_element_stack.length-1];__fest_buf+=(__fest_element in __fest_short_tags?"/>":">");try{__fest_if=params.text}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.text)}catch(e){__fest_log_error(e.message + "3071");}}__fest_element = __fest_element_stack[__fest_element_stack.length - 1];if(!(__fest_element in __fest_short_tags)){__fest_buf+=("</" + __fest_element + ">")}__fest_element_stack.pop();return __fest_buf;};__fest_blocks.badge=function(params){var __fest_buf="";__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					tagName: params.tagName || 'span',
					baseClass: 'badge'
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=params.src}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_attrs[0]=__fest_escapeHTML(params.src)}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<img src=\"" + __fest_attrs[0] + "\" class=\"badge__icon\"/>");}try{__fest_if=params.text}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<span class=\"badge__text\">");try{__fest_buf+=(params.text)}catch(e){__fest_log_error(e.message + "3098");}__fest_buf+=("</span>");}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.shadow=function(params){var __fest_buf="";__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'shadow',
					tagName: 'div'
				})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;};__fest_blocks.author=function(params){var __fest_buf="";try{var avatar = params.avatar || {};
			var name = params.name;
			var info = params.info;
			var text = params.text;}catch(e){__fest_log_error(e.message);}__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'author',
					href: null
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=avatar.src}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="avatar";__fest_params={};try{__fest_extend(__fest_params,avatar)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,fest._helpers.mergeTopParams(
								avatar,
								{
									mix: ['author__avatar']
								}
							))}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
								avatarSize: avatar.size || 45
							})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}__fest_buf+=("<div class=\"author__inner\">");try{__fest_if=name}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params.nameParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,fest._helpers.mergeTopParams(
									params.nameParams,
									{
										mix: params.href && ['link-holder']
									}
								))}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
									baseClass: 'author__name',
									href: params.href
								})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_buf+=(__fest_escapeHTML(name))}catch(e){__fest_log_error(e.message + "3179");}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}try{__fest_if=info}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params.infoParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
									baseClass: 'author__info',
									tagName: 'span',
									html: info
								})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=info && text}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<span class=\"author__separator\">");try{__fest_buf+=(params.textSeparator || ' / ')}catch(e){__fest_log_error(e.message + "3201");}__fest_buf+=("</span>");}try{__fest_if=text}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params.textParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
									baseClass: 'author__text',
									tagName: 'span',
									html: text
								})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}__fest_buf+=("</div>");return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks["gallery-grid"]=function(params){var __fest_buf="";try{
				var sizes = {
					small: 'g-small',
					medium: 'g-large',
					large: 'g-huge'
				};

				var placeholder = params.placeholder;
				var itemList = params.items || [];
				var paramsSizes = params.sizes || {};
				var itemLen = itemList.length;
				var sizeName, sizeValue, galleryType;

				params.mods = params.mods || [];

				for (sizeName in sizes) {
					if (sizes.hasOwnProperty(sizeName)) {
						sizeValue = paramsSizes[sizeName] || sizes[sizeName];
						sizes[sizeName] = sizeValue;
						params.mods.push(sizeName + '_' + sizeValue);
					}
				}

				if (params.galleryType) {
					galleryType = params.galleryType;
				} else if (params.isPoorQuality) {
					galleryType = 'poor';
				} else if (itemLen < 4) {
					galleryType = 'table';
					params.mods.push('table', 'offset_large');
				} else if (!params.isVertical) {
					galleryType = 'horizontal';
				} else if (itemLen >= 10) {
					galleryType = 'vertical_long';
				} else if (itemLen >= 4) {
					galleryType = 'vertical_short';
				}

			}catch(e){__fest_log_error(e.message);}try{__fest_attrs[0]=__fest_escapeHTML( fest._helpers.classNamesFor('gallery-grid', params) )}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<div class=\"" + __fest_attrs[0] + "\"");var attrKey,attr,__fest_iterator31;try{__fest_iterator31=params.attrs || {};}catch(e){__fest_iterator={};__fest_log_error(e.message);}for(attrKey in __fest_iterator31){attr=__fest_iterator31[attrKey];try{__fest_select=( attrKey )}catch(e){__fest_select="";__fest_log_error(e.message)}if(__fest_select!==""){__fest_buf+=(" " + __fest_select + "=\"");try{__fest_buf+=(__fest_escapeHTML(attr))}catch(e){__fest_log_error(e.message + "3273");}__fest_buf+=("\"");}}__fest_buf+=("><div class=\"gallery-grid__container\"><div class=\"gallery-grid__inner\">");try{__fest_select="gallery-grid__inner_"+( galleryType )}catch(e){__fest_select="";__fest_log_error(e.message)}__fest_params={};try{__fest_params={
							items: itemList,
							sizes: sizes,
							lenByMod: (params.lenByMod || {})[galleryType],
							placeholder: placeholder,
							indexStart: params.indexStart || 0
						}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);__fest_buf+=("</div></div></div>");return __fest_buf;};__fest_blocks.newsitem=function(params){var __fest_buf="";try{var itemParams = params.params;
			var photo = params.photo;
			var links = params.links;
			var mergeTopParams = fest._helpers.mergeTopParams;}catch(e){__fest_log_error(e.message);}__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'newsitem',
					href: null
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=itemParams}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<div class=\"newsitem__params\">");var i,param,__fest_to32,__fest_iterator32;try{__fest_iterator32=itemParams || [];__fest_to32=__fest_iterator32.length;}catch(e){__fest_iterator32=[];__fest_to32=0;__fest_log_error(e.message);}for(i=0;i<__fest_to32;i++){param=__fest_iterator32[i];__fest_select="element";__fest_params={};try{__fest_params={
									baseClass: 'newsitem__param',
									baseParams: param,
									tagName: 'span',
									html: param.text
								}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}__fest_buf+=("</div>");}try{__fest_if=photo || params.photoHtml}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="cell";__fest_params={};try{__fest_extend(__fest_params,{
								mods: ['photo']
							})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=photo}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="photo";__fest_params={};try{__fest_extend(__fest_params,photo)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,mergeTopParams(
											photo,
											{
												mix: ['newsitem__photo']
											}
										))}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.photoHtml}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.photoHtml)}catch(e){__fest_log_error(e.message + "3353");}}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}try{__fest_if=params.title || params.text}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="cell";__fest_params={};__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=params.title}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params.innerParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,mergeTopParams(
											params.innerParams,
											{
												mix: ['link-holder']
											}
										))}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
											baseClass: 'newsitem__title',
											href: params.href,
											tagName: params.href ? 'a' : 'span'
										})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_select="element";__fest_params={};try{__fest_params={
												baseClass: 'newsitem__title-inner',
												tagName: 'span',
												html: params.title
											}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}try{__fest_if=links}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){var i,link,__fest_to33,__fest_iterator33;try{__fest_iterator33=links || [];__fest_to33=__fest_iterator33.length;}catch(e){__fest_iterator33=[];__fest_to33=0;__fest_log_error(e.message);}for(i=0;i<__fest_to33;i++){link=__fest_iterator33[i];__fest_select="link";__fest_params={};try{__fest_extend(__fest_params,link)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,mergeTopParams(
												link,
												{
													mix: ['margin_right_10', 'link-holder_over', 'color_gray']
												}
											))}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}}try{__fest_if=params.text}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<span class=\"newsitem__text\">");try{__fest_buf+=(params.text)}catch(e){__fest_log_error(e.message + "3413");}__fest_buf+=("</span>");}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.line=function(params){var __fest_buf="";__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'line'
				})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;};__fest_blocks.share=function(params){var __fest_buf="";try{__fest_if=params.name}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{var innerParams = params.innerParams || {mix: params.innerMix};
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
										})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}return __fest_buf;};__fest_blocks.text=function(params){var __fest_buf="";__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'text',
					tagName: params.tag || 'span',
					html: params.text || params.html
				})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;};__fest_blocks["article-photo"]=function(params){var __fest_buf="";try{var data = params.data || {};
			var caption = data.caption;
			var captionHtml = params.captionHtml;
			var bar = data.bar;}catch(e){__fest_log_error(e.message);}__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'article-photo'
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_buf+=("<div class=\"article-photo__inner\">");try{__fest_if=data.photo}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="photo";__fest_params={};try{__fest_extend(__fest_params,data.photo)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,fest._helpers.mergeTopParams(
									data.photo,
									{
										mods: ['article-photo']
									}
								))}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=data.shares}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="sharelist";__fest_params={};try{__fest_extend(__fest_params,data.shares)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
												mods: ['media'].concat(data.shares.mods || []),
												hideCount: true
											})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=bar}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,bar)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
												baseClass: 'article-photo__bar'
											})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=bar.label}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<span class=\"article-photo__label\">");try{__fest_buf+=(bar.label)}catch(e){__fest_log_error(e.message + "3589");}__fest_buf+=("</span>");}try{__fest_if=bar.param}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="link";__fest_params={};try{__fest_extend(__fest_params,bar.param)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
															mix: ['color_white'].concat(bar.param.mix || [])
														})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}try{__fest_if=caption || captionHtml}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,caption)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
									baseClass: 'article-photo__caption',
									html: caption && caption.text || captionHtml
								})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}__fest_buf+=("</div>");return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.cols=function(params){var __fest_buf="";try{var mergeTopParams = fest._helpers.mergeTopParams;

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
								}))}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{ html: params.content })}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "3688");}}__fest_buf+=("</div>");return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.cols__column=function(params){var __fest_buf="";__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'cols__column'
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<div class=\"cols__inner\">");try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "3714");}__fest_buf+=("</div>");}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks["m-survey"]=function(params){var __fest_buf="";try{__fest_if=params.currentState !== 'error' && params.currentState !== 'hidden'}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_if=params.currentState === null || typeof params.currentState === 'undefined'}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
								baseClass: 'm-survey'
							})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}else{try{__fest_if=params.currentState === 'loading'}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,{
										baseClass: 'm-survey__loader'
									})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_select="loader";__fest_params={};__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}else{try{__fest_if=params.survey}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="m-survey__wrapper";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}}}}return __fest_buf;};__fest_blocks.tag=function(params){var __fest_buf="";try{var mergeTopParams = fest._helpers.mergeTopParams;

			var inputParams = params.inputParams;
			var closeParams = params.closeParams;

			var hasInput = params.hasInput || inputParams;
			var hasClose = params.hasClose || closeParams;}catch(e){__fest_log_error(e.message);}__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,mergeTopParams(
					params,
					hasInput && { mods: ['check'] },
					hasClose && { mods: ['close'] }
				))}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'tag',
					tagName: inputParams && 'label'
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=hasInput}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,mergeTopParams({
								attrs: {
									type: 'checkbox'
								}
							}, params.inputParams))}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
								baseClass: 'tag__input',
								tagName: 'input'
							})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}__fest_buf+=("<span class=\"tag__inner\">");try{__fest_if=hasClose}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,closeParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
									baseClass: 'tag__close',
									tagName: 'span',
									html: '&times;'
								})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.leftHtml}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<span class=\"tag__left\">");try{__fest_buf+=(params.leftHtml)}catch(e){__fest_log_error(e.message + "3846");}__fest_buf+=("</span>");}var i,elemName,__fest_to34,__fest_iterator34;try{__fest_iterator34=['text', 'ending'] || [];__fest_to34=__fest_iterator34.length;}catch(e){__fest_iterator34=[];__fest_to34=0;__fest_log_error(e.message);}for(i=0;i<__fest_to34;i++){elemName=__fest_iterator34[i];try{__fest_if=params[elemName]}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params[elemName + 'Params'])}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
										baseClass: 'tag__' + elemName,
										tagName: 'span',
										html: params[elemName]
									})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}}__fest_buf+=("</span>");return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.suggest=function(params){var __fest_buf="";try{var blocks = params.blocks || [];
			var items = params.items || [];

			if (items.length) {
				blocks.push({
					items: items
				});
			}}catch(e){__fest_log_error(e.message);}__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'suggest'
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params.innerParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
							baseClass: 'suggest__inner'
						})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;var i,block,__fest_to35,__fest_iterator35;try{__fest_iterator35=blocks || [];__fest_to35=__fest_iterator35.length;}catch(e){__fest_iterator35=[];__fest_to35=0;__fest_log_error(e.message);}for(i=0;i<__fest_to35;i++){block=__fest_iterator35[i];__fest_select="suggest__block";__fest_params={};try{__fest_extend(__fest_params,block)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
										itemParams: params.itemParams
									})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "3916");}}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);try{__fest_if=params.scroll}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<div class=\"suggest__scroll\">");__fest_select="scroll";__fest_params={};try{__fest_params=params.scroll}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);__fest_buf+=("</div>");}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.item=function(params){var __fest_buf="";try{__fest_attrs[0]=__fest_escapeHTML(fest._helpers.classNamesFor('item', params))}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<div class=\"" + __fest_attrs[0] + "\"");try{__fest_if=params.attrs}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){var attrName,attrVal,__fest_iterator36;try{__fest_iterator36=params.attrs || {};}catch(e){__fest_iterator={};__fest_log_error(e.message);}for(attrName in __fest_iterator36){attrVal=__fest_iterator36[attrName];try{__fest_select=(attrName)}catch(e){__fest_select="";__fest_log_error(e.message)}if(__fest_select!==""){__fest_buf+=(" " + __fest_select + "=\"");try{__fest_buf+=(__fest_escapeHTML(attrVal))}catch(e){__fest_log_error(e.message + "3943");}__fest_buf+=("\"");}}}__fest_buf+=(">");try{__fest_if=params.left || params.leftHtml}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="cell";__fest_params={};try{__fest_extend(__fest_params,{
							mods: ['left']
						})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;var left=params.left || {};try{__fest_if=left}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{var avatar = left.avatar,
									src = left.src,
									user = left.user || {},
									userEmail = user.email || {},
									attrs = left.attrs || {};}catch(e){__fest_log_error(e.message);}try{__fest_if=(avatar && src) || (avatar && user && userEmail)}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="avatar";__fest_params={};try{__fest_params=left}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}else{try{__fest_if=left.icon}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="icon";__fest_params={};try{__fest_params=left.icon}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}else{try{__fest_if=src}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_attrs[0]=__fest_escapeHTML(src)}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<img src=\"" + __fest_attrs[0] + "\" class=\"item__pic\"");var sAttrKey,sAttr,__fest_iterator37;try{__fest_iterator37=attrs || {};}catch(e){__fest_iterator={};__fest_log_error(e.message);}for(sAttrKey in __fest_iterator37){sAttr=__fest_iterator37[sAttrKey];try{__fest_select=(sAttrKey)}catch(e){__fest_select="";__fest_log_error(e.message)}if(__fest_select!==""){__fest_buf+=(" " + __fest_select + "=\"");try{__fest_buf+=(__fest_escapeHTML(sAttr))}catch(e){__fest_log_error(e.message + "3985");}__fest_buf+=("\"");}}__fest_buf+=("/>");}else{}}}}try{__fest_if=params.leftHtml}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.leftHtml)}catch(e){__fest_log_error(e.message + "3997");}}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}try{__fest_if=params.title || params.text || params.params || params.html || params.topHtml}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="cell";__fest_params={};try{__fest_extend(__fest_params,params.contentParams)}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=params.topHtml}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.topHtml)}catch(e){__fest_log_error(e.message + "4014");}}try{__fest_if=params.params}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<span class=\"");try{__fest_buf+=(fest._helpers.classNamesFor('item__params', params.params))}catch(e){__fest_log_error(e.message + "4023");}__fest_buf+=("\">");var i,param,__fest_to38,__fest_iterator38;try{__fest_iterator38=params.params.items || [];__fest_to38=__fest_iterator38.length;}catch(e){__fest_iterator38=[];__fest_to38=0;__fest_log_error(e.message);}for(i=0;i<__fest_to38;i++){param=__fest_iterator38[i];__fest_select="item__param";__fest_params={};try{__fest_params=param}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}__fest_buf+=("</span>");}try{__fest_if=params.title}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_element= params.href ? 'a' : 'span' ;if(typeof __fest_element !== "string"){__fest_log_error("Element name must be a string");__fest_element="div"}}catch(e){__fest_element="div";__fest_log_error(e.message);}__fest_element_stack.push(__fest_element);__fest_buf+=("<" + __fest_element);try{__fest_if=params.href}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=(" href=\"");try{__fest_buf+=(__fest_escapeHTML(params.href))}catch(e){__fest_log_error(e.message + "4042");}__fest_buf+=("\"");}__fest_buf+=(" class=\"");try{__fest_buf+=(__fest_escapeHTML('item__title' + (params.href ? ' link-holder' : '')))}catch(e){__fest_log_error(e.message + "4048");}__fest_buf+=("\"");var sAttrKey,sAttr,__fest_iterator39;try{__fest_iterator39=params.titleAttrs || {};}catch(e){__fest_iterator={};__fest_log_error(e.message);}for(sAttrKey in __fest_iterator39){sAttr=__fest_iterator39[sAttrKey];try{__fest_select=(sAttrKey)}catch(e){__fest_select="";__fest_log_error(e.message)}if(__fest_select!==""){__fest_buf+=(" " + __fest_select + "=\"");try{__fest_buf+=(__fest_escapeHTML(sAttr))}catch(e){__fest_log_error(e.message + "4054");}__fest_buf+=("\"");}}__fest_element=__fest_element_stack[__fest_element_stack.length-1];__fest_buf+=(__fest_element in __fest_short_tags?"/>":">");try{__fest_if=params.titleIcon}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="icon";__fest_params={};try{__fest_params=params.titleIcon}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_buf+=(params.title)}catch(e){__fest_log_error(e.message + "4067");}__fest_element = __fest_element_stack[__fest_element_stack.length - 1];if(!(__fest_element in __fest_short_tags)){__fest_buf+=("</" + __fest_element + ">")}__fest_element_stack.pop();try{__fest_if=params.info}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=(" <span class=\"item__info\">");try{__fest_buf+=(params.info)}catch(e){__fest_log_error(e.message + "4075");}__fest_buf+=("</span>");}}try{__fest_if=params.middleHtml}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.middleHtml)}catch(e){__fest_log_error(e.message + "4084");}}try{__fest_if=params.text}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<span class=\"item__text\">");try{__fest_buf+=(params.text)}catch(e){__fest_log_error(e.message + "4091");}__fest_buf+=("</span>");}try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "4098");}}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}__fest_buf+=("</div>");return __fest_buf;};__fest_blocks.step=function(params){var __fest_buf="";try{var attrs = params.attrs = params.attrs || {};
			if (params.href && !('href' in attrs)) {
				attrs.href = params.href;
			}}catch(e){__fest_log_error(e.message);}__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					forClass: 'step',
					tagName: attrs.href && 'a' || 'span'
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=params.count || params.forceCount}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<span class=\"step__count\">");try{__fest_buf+=(__fest_escapeHTML(params.count || ''))}catch(e){__fest_log_error(e.message + "4129");}__fest_buf+=("</span>");}try{__fest_if=params.text}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params.textParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
								baseClass: 'step__text',
								tagName: 'span',
								html: params.text
							})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks["article-expert"]=function(params){var __fest_buf="";try{var author = params.author || {};}catch(e){__fest_log_error(e.message);}__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'article-expert',
					href: null
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=author.avatar}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="avatar";__fest_params={};try{__fest_extend(__fest_params,author.avatar)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
								mix: ['article-expert__avatar', 'margin_right_20'],
								mods: ['extra']
							})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}__fest_buf+=("<div class=\"article-expert__inner\">");try{__fest_if=params.text}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<div class=\"article-expert__content\">");try{__fest_buf+=(params.text)}catch(e){__fest_log_error(e.message + "4184");}__fest_buf+=("</div>");}__fest_buf+=("<div class=\"article-expert__bottom\">");try{__fest_if=author.title}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<div class=\"article-expert__name\">");try{__fest_buf+=(author.title)}catch(e){__fest_log_error(e.message + "4193");}__fest_buf+=("</div>");}try{__fest_if=author.text}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<div class=\"article-expert__position\">");try{__fest_buf+=(author.text)}catch(e){__fest_log_error(e.message + "4201");}__fest_buf+=("</div>");}__fest_buf+=("</div></div>");return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks["article-divider"]=function(params){var __fest_buf="";__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'article-divider'
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_buf+=("<div class=\"article-divider__inner\">");try{__fest_if=params.count}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="step";__fest_params={};try{__fest_params={
								mix: ['article-divider__step'],
								mods: ['black'],
								count: params.count
							}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}__fest_buf+=("</div>");return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks["article-keyphrase"]=function(params){var __fest_buf="";__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'article-keyphrase'
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_buf+=("<span class=\"article-keyphrase__inner\">");try{__fest_if=params.text}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.text)}catch(e){__fest_log_error(e.message + "4259");}}__fest_buf+=("</span>");return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.list=function(params){var __fest_buf="";__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,{
					baseClass: 'list',
					tagName: 'ul'
				})}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;var i,item,__fest_to40,__fest_iterator40;try{__fest_iterator40=params.items || [];__fest_to40=__fest_iterator40.length;}catch(e){__fest_iterator40=[];__fest_to40=0;__fest_log_error(e.message);}for(i=0;i<__fest_to40;i++){item=__fest_iterator40[i];__fest_select="list__item";__fest_params={};try{__fest_params=item}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "4290");}}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.article__author=function(params){var __fest_buf="";__fest_select="author";__fest_params={};try{__fest_extend(__fest_params,fest._helpers.mergeTopParams(
					params.blockParams,
					{
						mix: ['article__author']
					}
				))}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					avatar: params.src ? fest._helpers.mergeParams(
						{
							src: params.src
						},
						params.leftParams
					) : null,
					href: params.href,
					name: params.name,
					info: params.job,
					text: params.info
				})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;};__fest_blocks.quote=function(params){var __fest_buf="";try{var author = params.author;}catch(e){__fest_log_error(e.message);}__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'quote',
					tagName: 'blockquote'
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=params.text}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<div class=\"quote__text\">");try{__fest_buf+=(params.text.trim())}catch(e){__fest_log_error(e.message + "4347");}__fest_buf+=("</div>");}try{__fest_if=author}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="author";__fest_params={};try{__fest_extend(__fest_params,author)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
								mix: ['quote__author'],
								name: author.title,
								text: author.text,
								textParams: {
									mix: ['quote__position']
								}
							})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.sharelist=function(params){var __fest_buf="";try{var itemParams = params.itemParams || {};
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
							}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}var i,item,__fest_to41,__fest_iterator41;try{__fest_iterator41=order || [];__fest_to41=__fest_iterator41.length;}catch(e){__fest_iterator41=[];__fest_to41=0;__fest_log_error(e.message);}for(i=0;i<__fest_to41;i++){item=__fest_iterator41[i];try{__fest_if=defaultTypes.hasOwnProperty(item)}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="share";__fest_params={};try{__fest_extend(__fest_params,{
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
									))}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}}__fest_buf+=("</div>");return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks["c-article-quote"]=function(params){var __fest_buf="";try{var data = params.data || {};

			var author = data.author || params.author;
			var avatarSrc = author && author.photo || params.author_photo;}catch(e){__fest_log_error(e.message);}__fest_select="quote";__fest_params={};try{__fest_params={
				text: params.content,
				author: author && {
					title: author.name || params.author,
					text: author.position || params.author_position,
					avatar: avatarSrc && {src: avatarSrc},
					href: author.href || params.author_href
				}
			}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;};__fest_blocks.article__item_quote=function(params){var __fest_buf="";__fest_select="article__item_base";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_select="c-article-quote";__fest_params={};try{__fest_params=params}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.article__item_gallery=function(params){var __fest_buf="";try{var getByPath = fest._helpers.getByPath;
			var mergeParams = fest._helpers.mergeParams;
			var IMAGE_CONTENT_SIZE_INDEX = 1;
			var data = params.data || {};
			var gallery = data.gallery;
			var blockParams = params.params || {};
			var itemParams = blockParams.item || {};
			var galleryParams = blockParams.gallery;
			var description = params.description || data.description;
			var imagesData = params.imagesData;
			var instanceParams = (gallery && blockParams.galleryCallback && blockParams.galleryCallback(gallery)) || {};
			var isLazy = blockParams.lazy || getByPath('lazyLoad.src', blockParams);
			
			var galleryBlock = mergeParams(true,
				{
					isPoorQuality: gallery.isPoorQuality,
					isVertical: gallery.isVertical,
					indexStart: instanceParams.indexStart || (galleryParams && galleryParams.indexStart) || gallery.indexStart || 0,
					items: gallery.items.map(function(item) {
						var itemImage = item.image;
						var imageSrc;

						if (imagesData && imagesData[item.index]) {
							imageSrc = imagesData[item.index].url[IMAGE_CONTENT_SIZE_INDEX].src;
						} else {
							imageSrc = itemImage && itemImage.src;
						}

						var galleryItem = fest._helpers.mergeParams(
							true, {
								lazy: (galleryParams && galleryParams.lazy) || instanceParams.lazy,
								src: blockParams.lazyLoad && blockParams.lazyLoad.src || imageSrc,
								height: itemImage && itemImage.height,
								width: itemImage && itemImage.width,
								mods: ['link']
							},
							itemParams,
							blockParams.itemCallback && blockParams.itemCallback(item)
						);
						galleryItem.action = itemParams.action;

						return galleryItem;
					})
				},
				galleryParams,
				instanceParams
			);

			galleryBlock.placeholder = mergeParams(
				true,
				{
					idAttrName: 'data-image-id'
				},
				galleryBlock.placeholder
			);
			galleryBlock.placeholder.icon = galleryParams && galleryParams.placeholder && galleryParams.placeholder.icon;}catch(e){__fest_log_error(e.message);}__fest_select="article__item_base";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_select="gallery-grid";__fest_params={};try{__fest_extend(__fest_params,galleryBlock)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,galleryParams ? {
							lenByMod: galleryParams.lenByMod,
							sizes: galleryParams.sizes
						} : null)}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);try{__fest_if=description}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="note";__fest_params={};try{__fest_params={
							mix: ['margin_top_10'],
							text: description
						}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);__fest_select="line";__fest_params={};try{__fest_params={
							mix: ['margin_top_10'],
							mods: ['separator']
						}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.article__item_base=function(params){var __fest_buf="";try{var mods = ['alignment_' + (params.alignment || 'left')];

			if (params.type) {
				mods.push(params.type);

				if (params.subtype && params.subtype != params.type) {
					mods.push(params.type + '_' + params.subtype);
				}
			}

			if (params.source) {
				mods.push('source_' + params.source);
			}}catch(e){__fest_log_error(e.message);}__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,fest._helpers.mergeParams(false, {
					mods: mods
				}, params))}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'article__item'
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_if=params.container}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<div class=\"article__container\">");try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "4631");}__fest_buf+=("</div>");}else{try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "4637");}}}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.article__item_infographic=function(params){var __fest_buf="";try{var data = params.data;
			if (data && data.preview) {
				data.image = data.preview;
				delete data.preview;
			}}catch(e){__fest_log_error(e.message);}__fest_select="article__item_image";__fest_params={};try{__fest_params=params}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;};__fest_blocks.article__item_video=function(params){var __fest_buf="";try{var data = params.data || {};
			var blockParams = params.params || {};
			var description = params.description || data.description;}catch(e){__fest_log_error(e.message);}__fest_select="article__item_base";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					container: true
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_select="article-photo";__fest_params={};try{__fest_params={
						mods: ['full'],
						data: {
							photo: fest._helpers.mergeParams(
								true,
								{
									src: data.preview && data.preview.src
								},
								blockParams.preview,
								blockParams.previewCallback && blockParams.previewCallback(params)
							),
							caption: description && {text: description}
						}
					}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.article__item_table=function(params){var __fest_buf="";try{var data = params.data || {};}catch(e){__fest_log_error(e.message);}__fest_select="article__item_base";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					container: true
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_select="article__table";__fest_params={};try{__fest_params={
						caption: params.title,
						items: params.content
					}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.article__item_poll=function(params){var __fest_buf="";try{var data = params.data || {};
			var blockParams = params.params || {};
			var description = params.description || data.description;
			var pollId = params.id;}catch(e){__fest_log_error(e.message);}__fest_select="article__item_base";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_select="m-poll";__fest_params={};try{__fest_extend(__fest_params,fest._helpers.mergeParams(
							true,
							blockParams.poll,
							blockParams.pollCallback && blockParams.pollCallback(pollId, params)
						))}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_attrs[0]=__fest_escapeHTML(blockParams.containerClass)}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<div class=\"" + __fest_attrs[0] + "\"></div>");return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);try{__fest_if=description}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="note";__fest_params={};try{__fest_params={
							mix: ['margin_top_10'],
							text: description
						}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);__fest_select="line";__fest_params={};try{__fest_params={
							mix: ['margin_top_10'],
							mods: ['separator']
						}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.article__item_poll=function(params){var __fest_buf="";try{var data = params.data || {};
			var blockParams = params.params || {};
			var description = params.description || data.description;}catch(e){__fest_log_error(e.message);}__fest_select="article__item_base";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					alignment: "center"
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_select="m-survey";__fest_params={};try{__fest_extend(__fest_params,fest._helpers.mergeParams(
							true,
							blockParams.poll,
							blockParams.pollCallback && blockParams.pollCallback(params)
						))}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);try{__fest_if=description}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="note";__fest_params={};try{__fest_extend(__fest_params,{
								mix: ["margin_top_10"],
								text: description
							})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);__fest_select="line";__fest_params={};try{__fest_extend(__fest_params,{
								mix: ["margin_top_10"],
								mods: ["separator"]
							})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.input_hidden=function(params){var __fest_buf="";__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,fest._helpers.mergeTopParams(
					params,
					{
						attrs: { type: 'hidden' }
					}
				))}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					tagName: 'input'
				})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;};__fest_blocks.article__item_slot=function(params){var __fest_buf="";try{var blockParams = params.params || {};}catch(e){__fest_log_error(e.message);}__fest_select="article__item_base";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_select="rb-slot";__fest_params={};try{__fest_extend(__fest_params,blockParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
							id: params.id,
							sitezone: params.sitezone,
							customQueryString: params.customQueryString,
							queryParams: ru.mail.cpf.Basic.Extend(
								true,
								params.queryParams,
								blockParams.queryParams
							)
						})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.article__item_expert=function(params){var __fest_buf="";try{var data = params.data || {};

			var author = data.author || {};
			var avatarSrc = author.photo || params.author_photo;}catch(e){__fest_log_error(e.message);}__fest_select="article__item_base";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					alignment: 'center'
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_select="c-schema";__fest_params={};try{__fest_extend(__fest_params,{
							data: {
								itemtypeBase: "http://schema.org/StructuredValue",
								itemtype: "http://schema.org/RichQuotation",
								schema: {
									image: avatarSrc && {
										src: avatarSrc,
										alt: author.name || params.author
									},
									name: params.title || 'Мнение эксперта',
									description: params.content
								}
							}
						})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_select="box";__fest_params={};try{__fest_extend(__fest_params,{
									mods: ['dark', 'small', 'block'],
									title: params.title || 'Мнение эксперта'
								})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_select="article-expert";__fest_params={};try{__fest_params={
										text: params.content,
										author: {
											title: author.name || params.author,
											text: author.position || params.author_position,
											avatar: avatarSrc && {
												src: avatarSrc
											}
										}
									}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.article__item_compareslider=function(params){var __fest_buf="";__fest_select="article__item_base";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_select="c-article-compare";__fest_params={};try{__fest_params=params}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.article__item_divider=function(params){var __fest_buf="";__fest_select="article__item_base";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					container: true
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_select="article-divider";__fest_params={};try{__fest_params={
						count: params.count
					}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.article__item_keyphrase=function(params){var __fest_buf="";try{var type = params.view_type || 'background';}catch(e){__fest_log_error(e.message);}__fest_select="article__item_base";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_select="article-keyphrase";__fest_params={};try{__fest_params={
						text: params.content || params.text,
						mods: [type]
					}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.article__item_gallery_stories=function(params){var __fest_buf="";try{var data = params.data || {};
			var blockParams = params.params || {};}catch(e){__fest_log_error(e.message);}__fest_select="article__item_base";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_select="m-photo-stories";__fest_params={};try{__fest_extend(__fest_params,blockParams.stories)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
							currentId: blockParams.currentId,
							data: data
						})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.article__item_teaser_news=function(params){var __fest_buf="";try{var data = params.data || {};
			var preview = params.preview || data.preview || {};
			var blockParams = params.params || {};
			var href = params.href || data.href;
			var description = !params['noDescription'] && (params.description || data.description);
			var photoParams = params.image || preview.src ? fest._helpers.mergeParams(
				true,
				{
					src: params.image || preview.src,
					height: preview.height,
					width: preview.width,
					lazy: fest._helpers.getByPath('photo.lazy', blockParams)
				},
				blockParams.photo,
				blockParams.photoCallback && blockParams.photoCallback(data)
			) : null;
			var alignment = params.alignment || 'left';}catch(e){__fest_log_error(e.message);}__fest_select="article__item_base";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					alignment: alignment,
					href: null
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_select="box";__fest_params={};try{__fest_extend(__fest_params,{
							title: params.name || data.name || 'Читайте также',
							mods: ['small', 'block']
						})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_select="newsitem";__fest_params={};try{__fest_params=fest._helpers.mergeParams(
								true,
								{
									mods: alignment === 'left' ? ['vertical', 'small'] : [],
									photo: photoParams,
									title: params.title || data.title,
									href: href,
									text: description
								},
								blockParams.item
							)}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.article__item_teaser_reference=function(params){var __fest_buf="";try{var data = params.data || {};
			var description = !params['noDescription'] && (params.description || data.description);}catch(e){__fest_log_error(e.message);}__fest_select="article__item_base";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_select="box";__fest_params={};try{__fest_extend(__fest_params,{
							title: data.name || 'Справка',
							mods: ['small', 'block']
						})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_select="text";__fest_params={};try{__fest_params={
								mods: ['light_small'],
								html: description
							}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.article__item_text=function(params){var __fest_buf="";__fest_select="article__item_base";__fest_params={};try{__fest_extend(__fest_params,{
					html: params.content
				})}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,fest._helpers.mergeTopParams({
					mods: ['html']
				}, params))}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;};__fest_blocks["article__item_teaser_news-list"]=function(params){var __fest_buf="";try{var getByPath = fest._helpers.getByPath;
			var mergeTopParams = fest._helpers.mergeTopParams;
			var data = params.data || {};
			var blockParams = params.params || {};}catch(e){__fest_log_error(e.message);}try{__fest_if=data.items && data.items.length}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="article__item_base";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
						container: true
					})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_select="box";__fest_params={};try{__fest_extend(__fest_params,mergeTopParams(
								{
									mods: ["small"]
								},
								blockParams.boxParams
							))}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
								title: params.name || data.name || "Новости по теме"
							})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;var index,item,__fest_to42,__fest_iterator42;try{__fest_iterator42=data.items || [];__fest_to42=__fest_iterator42.length;}catch(e){__fest_iterator42=[];__fest_to42=0;__fest_log_error(e.message);}for(index=0;index<__fest_to42;index++){item=__fest_iterator42[index];try{__fest_if=index}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="line";__fest_params={};try{__fest_extend(__fest_params,{
												mix: ["margin_bottom_10"],
												mods: ["separator"]
											})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}__fest_select="newsitem";__fest_params={};try{__fest_extend(__fest_params,fest._helpers.mergeParams(
											true,
											{
												mix: ["margin_bottom_10"],
												mods: ["vertical", "small"],
												photo: !index && item.image && item.image.src && {
														src: item.image.src
													},
												title: item.title,
												href: item.href
											},
											blockParams.newsitemParams
										))}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}return __fest_buf;};__fest_blocks.article__item_teaser_mywidget=function(params){var __fest_buf="";try{var title = params.title || "Читайте также";
			var cid = "d628333e57f911df16651a51180207ca";
			var template = "article-teaser";}catch(e){__fest_log_error(e.message);}__fest_select="article__item_base";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					container: true
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_select="deti-mywidget";__fest_params={};try{__fest_extend(__fest_params,{
							data: {
								title: title,
								template: template,
								cid: cid
							}
						})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.checkbox=function(params){var __fest_buf="";try{params.attrs = params.attrs || {};
			params.attrs.type = params.attrs.type || 'checkbox';
			params.fieldParams = params.fieldParams || params.field || {};
			params.realParams = params.realParams || {mix: params.realMix};}catch(e){__fest_log_error(e.message);}try{__fest_attrs[0]=__fest_escapeHTML(fest._helpers.classNamesFor('checkbox', params))}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<div class=\"" + __fest_attrs[0] + "\">");__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,fest._helpers.mergeParams(
						{
							tagName: 'label',
							baseClass: 'checkbox__side',
							mix: ['checkbox__label'],
							attrs: params.labelAttrs
						},
						params.sideParams
					))}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=!params.hideReal}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<input");var sAttrKey,sAttrValue,__fest_iterator43;try{__fest_iterator43=params.attrs || {};}catch(e){__fest_iterator={};__fest_log_error(e.message);}for(sAttrKey in __fest_iterator43){sAttrValue=__fest_iterator43[sAttrKey];try{__fest_if=sAttrKey === 'checked'}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_if=sAttrValue}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=(" checked=\"checked\"");}}else{try{__fest_select=(sAttrKey)}catch(e){__fest_select="";__fest_log_error(e.message)}if(__fest_select!==""){__fest_buf+=(" " + __fest_select + "=\"");try{__fest_buf+=(__fest_escapeHTML(sAttrValue))}catch(e){__fest_log_error(e.message + "5295");}__fest_buf+=("\"");}}}var sAttrKey,sAttr,__fest_iterator44;try{__fest_iterator44=params.attrsNoescape || {};}catch(e){__fest_iterator={};__fest_log_error(e.message);}for(sAttrKey in __fest_iterator44){sAttr=__fest_iterator44[sAttrKey];try{__fest_select=(sAttrKey)}catch(e){__fest_select="";__fest_log_error(e.message)}if(__fest_select!==""){__fest_buf+=(" " + __fest_select + "=\"");try{__fest_buf+=(sAttr)}catch(e){__fest_log_error(e.message + "5305");}__fest_buf+=("\"");}}__fest_buf+=(" class=\"");try{__fest_buf+=(fest._helpers.classNamesFor('checkbox__real', params.realParams))}catch(e){__fest_log_error(e.message + "5311");}__fest_buf+=("\"/>");}__fest_select="checkbox__field";__fest_params={};try{__fest_params=params.fieldParams}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);__fest_buf+=("<div class=\"checkbox__inner\">");try{__fest_if=params.text}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<span class=\"checkbox__text\">");try{__fest_buf+=(params.text)}catch(e){__fest_log_error(e.message + "5328");}__fest_buf+=("</span>");}try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<span class=\"checkbox__html\">");try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "5336");}__fest_buf+=("</span>");}__fest_buf+=("</div></div>");return __fest_buf;};__fest_blocks.icon=function(params){var __fest_buf="";try{var svg = params.svg;}catch(e){__fest_log_error(e.message);}__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,fest._helpers.mergeTopParams(
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
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=svg && svg.name}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="icon__svg_defs";__fest_params={};try{__fest_params=svg}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.icon}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="icon";__fest_params={};try{__fest_params=params.icon}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "5382");}}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.icon=function(params){var __fest_buf="";try{var useSrc = params.useSrc || fest._helpers.getByPath("CONSTANTS.target.svg.src", json);
			var isSvg = !!(useSrc && params.name);}catch(e){__fest_log_error(e.message);}__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,{
					tagName: isSvg ? "svg" : "i",
					baseClass: "icon"
				})}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=isSvg}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,{
								tagName: "use",
								attrs: {
									"xlink:href": useSrc + "#" + params.name
								}
							})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.icon}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="icon";__fest_params={};try{__fest_extend(__fest_params,params.icon)}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "5424");}}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.photo=function(params){var __fest_buf="";try{var actionParams = params.actionParams || {mix: params.actionMix};
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
									})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;var i,label,__fest_to45,__fest_iterator45;try{__fest_iterator45=labelsItems || [];__fest_to45=__fest_iterator45.length;}catch(e){__fest_iterator45=[];__fest_to45=0;__fest_log_error(e.message);}for(i=0;i<__fest_to45;i++){label=__fest_iterator45[i];__fest_select="badge";__fest_params={};try{__fest_extend(__fest_params,label)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,fest._helpers.mergeTopParams(
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
							})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=params.count}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<span class=\"photo__count\">");try{__fest_buf+=(__fest_escapeHTML(params.count))}catch(e){__fest_log_error(e.message + "5555");}__fest_buf+=("</span>");}try{__fest_if=params.icon}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<span class=\"photo__icon\">");__fest_select="icon";__fest_params={};try{__fest_params=params.icon}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);__fest_buf+=("</span>");}try{__fest_if=params.param}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,{
											tagName: 'span',
											baseClass: 'photo__param'
										})}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,params.paramParams)}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_buf+=(__fest_escapeHTML(params.param))}catch(e){__fest_log_error(e.message + "5579");}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}try{__fest_if=params.title || params.titleNoescape}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,{
											tagName: 'span',
											baseClass: 'photo__title'
										})}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,params.titleParams)}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=params.titleNoescape}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.titleNoescape)}catch(e){__fest_log_error(e.message + "5596");}}else{try{__fest_buf+=(__fest_escapeHTML(params.title))}catch(e){__fest_log_error(e.message + "5599");}}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}try{__fest_if=params.subtitle || params.subtitleNoescape}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<span class=\"photo__subtitle\">");try{__fest_if=params.subtitleNoescape}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.subtitleNoescape)}catch(e){__fest_log_error(e.message + "5612");}}else{try{__fest_buf+=(__fest_escapeHTML(params.subtitle))}catch(e){__fest_log_error(e.message + "5617");}}__fest_buf+=("</span>");}try{__fest_if=params.captionHtml}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.captionHtml)}catch(e){__fest_log_error(e.message + "5626");}}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "5635");}}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks["gallery-grid__item"]=function(params){var __fest_buf="";try{__fest_attrs[0]=__fest_escapeHTML(fest._helpers.classNamesFor('gallery-grid__item', params))}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<div class=\"" + __fest_attrs[0] + "\">");try{__fest_if=params.photo}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="photo";__fest_params={};try{__fest_params=params.photo}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "5656");}}__fest_buf+=("</div>");return __fest_buf;};__fest_blocks.link=function(params){var __fest_buf="";try{var textParams = params.textParams || {
				mods: params.textMods || [],
				mix: params.textMix || []
			};
			var endingParams = params.endingParams || {
				mods: params.endingMods || [],
				mix: params.endingMix || []
			};
			var icon = params.icon;
			var iconPosition;

			if (icon) {
				iconPosition = icon.position || 'left';

				icon.mix = icon.mix || [];
				icon.mix.push('link__icon');
				icon.mix.push('margin_' + (iconPosition == 'left' ? 'right' : 'left') + '_' + (icon.marginSize || 5));

				params.mods = params.mods || [];
				params.mods.push('icon');
			}

			if (params.ending) {
				textParams.mix = ['margin_right_5'].concat(textParams.mix || []);
			}}catch(e){__fest_log_error(e.message);}__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'link',
					tagName: 'span'
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=iconPosition == 'left'}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="icon";__fest_params={};try{__fest_params=icon}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.beginning || params.beginningParams}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,{
								baseClass: 'link__beginning',
								tagName: 'span',
								html: params.beginning
							})}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,params.beginningParams)}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if='text' in params}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,textParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
								baseClass: 'link__text',
								tagName: 'span',
								html: params.text
							})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.ending}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,endingParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
								baseClass: 'link__ending',
								tagName: 'span',
								html: params.ending
							})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=iconPosition == 'right'}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="icon";__fest_params={};try{__fest_params=icon}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.control=function(params){var __fest_buf="";__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: ['control']
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=params.icon}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="icon";__fest_params={};try{__fest_params=params.icon}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.box=function(params){var __fest_buf="";try{var mainParams = params.mainParams;
			var title = params.title;
			var html = params.html;
			var left = params.left;
			var link = params.link;
			var titleAfterHtml = params.titleAfterHtml;}catch(e){__fest_log_error(e.message);}__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'box',
					href: null
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=params.beforeHtml}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.beforeHtml)}catch(e){__fest_log_error(e.message + "5802");}}try{__fest_if=title || left || html || mainParams}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="box__block";__fest_params={};try{__fest_extend(__fest_params,mainParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
								mods: ['main'].concat(mainParams && mainParams.mods || [])
							})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=title}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<div class=\"box__title\">");try{__fest_if=params.titleBeforeHtml}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<span class=\"box__title-left\">");try{__fest_buf+=(params.titleBeforeHtml)}catch(e){__fest_log_error(e.message + "5821");}__fest_buf+=("</span>");}__fest_buf+=("<div class=\"box__title-wrapper\">");__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params.headingParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
													baseClass: 'box__heading',
													tagName: 'span',
													href: params.href,
													html: params.title
												})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);try{__fest_if=params.titleHtml}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.titleHtml)}catch(e){__fest_log_error(e.message + "5843");}}__fest_buf+=("</div>");try{__fest_if=link || titleAfterHtml}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<span class=\"box__actions\">");try{__fest_if=link}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="link";__fest_params={};try{__fest_params=link}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=titleAfterHtml}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(titleAfterHtml)}catch(e){__fest_log_error(e.message + "5858");}}__fest_buf+=("</span>");}__fest_buf+=("</div>");}try{__fest_if=left}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_params={
											baseClass: 'box__content',
											mods: ['left'],
											html: left
										}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);try{__fest_if=html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<div class=\"box__content\">");try{__fest_buf+=(html)}catch(e){__fest_log_error(e.message + "5879");}__fest_buf+=("</div>");}}else{try{__fest_if=html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(html)}catch(e){__fest_log_error(e.message + "5886");}}else{}}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}try{__fest_if=params.actionsHtml}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="box__block";__fest_params={};try{__fest_params={
							mods: ['dark'],
							html: params.actionsHtml
						}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.afterHtml}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.afterHtml)}catch(e){__fest_log_error(e.message + "5906");}}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.button=function(params){var __fest_buf="";try{var icon = params.icon;
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
								})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=iconPosition == 'right'}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="icon";__fest_params={};try{__fest_params=icon}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "6006");}}__fest_buf+=("</span>");return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.input=function(params){var __fest_buf="";try{var mergeTopParams = fest._helpers.mergeTopParams;

			var icon = params.icon;
			var iconPosition = icon ? icon.position || 'left' : null;
			var tags = params.tags || [];
			var suggest = params.suggest;

			var isTextarea = params.textarea;

			// Fallbacks for previous versions
			var inputParams = params.inputParams || { mods: params.inputMods, mix: params.inputMix };}catch(e){__fest_log_error(e.message);}__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,mergeTopParams(
					params,
					params.error && { mods: ['error'] },
					isTextarea && { mods: ['textarea'] },
					iconPosition && { mods: ['icon', 'icon_' + iconPosition] }
				))}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'input',

					// Fallback for previous versions
					attrs: params.parentAttrs
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_buf+=("<div class=\"input__inner\">");try{__fest_if=iconPosition === 'left'}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,{
									baseClass: 'input__icon'
								})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_select="icon";__fest_params={};try{__fest_params=icon}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}try{__fest_if=params.preHtml}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,{
									tagName: 'span',
									baseClass: 'input__pre',
									html: params.preHtml
								})}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,params.preParams)}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=tags.length || params.tagsInnerParams}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<div class=\"input__tags\">");__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params.tagsInnerParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
										baseClass: 'input__tags-inner'
									})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=params.tagsInnerHtml}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.tagsInnerHtml)}catch(e){__fest_log_error(e.message + "6094");}}var i,tag,__fest_to46,__fest_iterator46;try{__fest_iterator46=tags || [];__fest_to46=__fest_iterator46.length;}catch(e){__fest_iterator46=[];__fest_to46=0;__fest_log_error(e.message);}for(i=0;i<__fest_to46;i++){tag=__fest_iterator46[i];__fest_select="tag";__fest_params={};try{__fest_extend(__fest_params,tag)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,mergeTopParams(tag, { mix: ['margin_left_10'] }))}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);__fest_buf+=("</div>");}__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,{
								baseClass: 'input__container'
							})}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,params.containerParams)}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_element=isTextarea ? 'textarea' : 'input' ;if(typeof __fest_element !== "string"){__fest_log_error("Element name must be a string");__fest_element="div"}}catch(e){__fest_element="div";__fest_log_error(e.message);}__fest_element_stack.push(__fest_element);__fest_buf+=("<" + __fest_element);__fest_buf+=(" class=\"");try{__fest_select=(fest._helpers.classNamesFor('input__field', inputParams))}catch(e){__fest_select="";__fest_log_error(e.message)}__fest_buf+=(__fest_select);__fest_buf+=("\"");var sAttrKey,sAttr,__fest_iterator47;try{__fest_iterator47=params.attrsNoescape || {};}catch(e){__fest_iterator={};__fest_log_error(e.message);}for(sAttrKey in __fest_iterator47){sAttr=__fest_iterator47[sAttrKey];try{__fest_select=(sAttrKey)}catch(e){__fest_select="";__fest_log_error(e.message)}if(__fest_select!==""){__fest_buf+=(" " + __fest_select + "=\"");try{__fest_select=(sAttr)}catch(e){__fest_select="";__fest_log_error(e.message)}__fest_buf+=(__fest_select);__fest_buf+=("\"");}}var sAttrKey,sAttrValue,__fest_iterator48;try{__fest_iterator48=params.attrs || {};}catch(e){__fest_iterator={};__fest_log_error(e.message);}for(sAttrKey in __fest_iterator48){sAttrValue=__fest_iterator48[sAttrKey];try{__fest_select=(sAttrKey)}catch(e){__fest_select="";__fest_log_error(e.message)}if(__fest_select!==""){__fest_buf+=(" " + __fest_select + "=\"");try{__fest_buf+=(__fest_escapeHTML(sAttrValue))}catch(e){__fest_log_error(e.message + "6129");}__fest_buf+=("\"");}}__fest_element=__fest_element_stack[__fest_element_stack.length-1];__fest_buf+=(__fest_element in __fest_short_tags?"/>":">");try{__fest_if=isTextarea}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(__fest_escapeHTML(params.text || params.value || params.attrs && params.attrs.value || ''))}catch(e){__fest_log_error(e.message + "6137");}}__fest_element = __fest_element_stack[__fest_element_stack.length - 1];if(!(__fest_element in __fest_short_tags)){__fest_buf+=("</" + __fest_element + ">")}__fest_element_stack.pop();return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "6144");}}try{__fest_if=iconPosition === 'right'}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,{
									baseClass: 'input__icon'
								})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_select="icon";__fest_params={};try{__fest_params=icon}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}try{__fest_if=params.afterHtml}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,{
									tagName: 'span',
									baseClass: 'input__after',
									html: params.afterHtml
								})}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,params.afterParams)}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}__fest_buf+=("</div><span class=\"input__decorator\"></span>");try{__fest_if=suggest || params.suggestHtml}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="suggest";__fest_params={};try{__fest_extend(__fest_params,suggest)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
								html: params.suggestHtml
							})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.dots=function(params){var __fest_buf="";__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'dots',
					tagName: 'form'
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=params.src}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="photo";__fest_params={};try{__fest_extend(__fest_params,params.photoParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
								src: params.src
							})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}__fest_buf+=("<input class=\"dots__uncheck\" type=\"radio\" name=\"dots__radio\"/>");var i,dot,__fest_to49,__fest_iterator49;try{__fest_iterator49=params.items || [];__fest_to49=__fest_iterator49.length;}catch(e){__fest_iterator49=[];__fest_to49=0;__fest_log_error(e.message);}for(i=0;i<__fest_to49;i++){dot=__fest_iterator49[i];try{var dotMods = [];
						var button = dot.button;
						var value = dot.value;

						if (dot.x > 50) {
							dotMods.push('position_right');
						}
						if (dot.y > 50) {
							dotMods.push('position_bottom');
						}}catch(e){__fest_log_error(e.message);}__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,dot)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,fest._helpers.mergeTopParams(
								dot,
								{
									attrs: {
										style: 'left: ' + dot.x + '%; top: ' + dot.y + '%;'
									},
									mods: dotMods
								}
							))}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
								baseClass: 'dots__dot',
								tagName: 'label'
							})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,dot.realParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
										baseClass: 'dots__radio',
										tagName: 'input',
									})}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,fest._helpers.mergeTopParams(
										dot.realParams,
										{
											attrs: {
												type: 'radio',
												name: 'dots__radio'
											}
										}
									))}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);__fest_buf+=("<span class=\"dots__container\"><span class=\"dots__circle\"></span><span class=\"dots__layer\">");var i,elemName,__fest_to50,__fest_iterator50;try{__fest_iterator50=['title', 'text'] || [];__fest_to50=__fest_iterator50.length;}catch(e){__fest_iterator50=[];__fest_to50=0;__fest_log_error(e.message);}for(i=0;i<__fest_to50;i++){elemName=__fest_iterator50[i];try{__fest_if=dot[elemName]}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_attrs[0]=__fest_escapeHTML(elemName)}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<div class=\"dots__" + __fest_attrs[0] + "\">");try{__fest_buf+=(dot[elemName])}catch(e){__fest_log_error(e.message + "6282");}__fest_buf+=("</div>");}}try{__fest_if=dot.image}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_attrs[0]=__fest_escapeHTML(dot.image)}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<img class=\"dots__image margin_top_10\" src=\"" + __fest_attrs[0] + "\"/>");}try{__fest_if=button || value}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="tbl";__fest_params={};try{__fest_extend(__fest_params,{
													mods: ['width_full'],
													mix: ['margin_top_10']
												})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=value}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="cell";__fest_params={};try{__fest_params={
															mods: ['full'],
															mix: ['valign_middle'].concat(button ? ['padding_right_10'] : []),
															html: value
														}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=button}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="cell";__fest_params={};try{__fest_extend(__fest_params,{
																mods: ['small'],
																mix: ['valign_middle']
															})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_select="button";__fest_params={};try{__fest_extend(__fest_params,button)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,fest._helpers.mergeTopParams(
																		button,
																		{
																			mods: ['color_project'],
																			attrs: {
																				target: '_blank'
																			}
																		}
																	))}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}__fest_buf+=("</span></span>");return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.hdr=function(params){var __fest_buf="";try{// обрабатываем текст без item'а
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
							})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.items}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<div class=\"hdr__wrapper\">");var i,item,__fest_to51,__fest_iterator51;try{__fest_iterator51=params.items || [];__fest_to51=__fest_iterator51.length;}catch(e){__fest_iterator51=[];__fest_to51=0;__fest_log_error(e.message);}for(i=0;i<__fest_to51;i++){item=__fest_iterator51[i];try{item.mods = item.mods || [];
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
												} || item.text)}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=item.ending}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="hdr__ending";__fest_params={};try{__fest_params=item.ending}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.textHtml}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.textHtml)}catch(e){__fest_log_error(e.message + "6463");}}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}__fest_buf+=("</div>");}try{__fest_if=params.label}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="label";__fest_params={};try{__fest_params=params.label}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "6482");}}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.note=function(params){var __fest_buf="";try{var tagName = params.tag || params.tagName || 'span';
			var textParams = params.textParams || {};}catch(e){__fest_log_error(e.message);}__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'note',
					tagName: tagName
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=params.icon}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="icon";__fest_params={};try{__fest_params=params.icon}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.text || params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,textParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
								baseClass: 'note__text',
								tagName: textParams.tagName || 'span',
								htmlPrepend: params.text,
								html: params.html
							})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.link}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="link";__fest_params={};try{__fest_params=params.link}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.breadcrumbs=function(params){var __fest_buf="";__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'breadcrumbs'
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;var i,item,__fest_to52,__fest_iterator52;try{__fest_iterator52=params.items || [];__fest_to52=__fest_iterator52.length;}catch(e){__fest_iterator52=[];__fest_to52=0;__fest_log_error(e.message);}for(i=0;i<__fest_to52;i++){item=__fest_iterator52[i];try{var linkParams = item.linkParams || {}}catch(e){__fest_log_error(e.message);}try{__fest_if=i}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(__fest_escapeHTML(params.separator || ', '))}catch(e){__fest_log_error(e.message + "6551");}}__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,item)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
								tagName: 'span',
								baseClass: 'breadcrumbs__item',
								href: null,
								attrs: item.attrs
							})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_select="note";__fest_params={};try{__fest_extend(__fest_params,{
										icon: item.icon,
										text: item.text && item.link ? item.text + ' ' : item.text,
										textParams: ru.mail.cpf.Basic.Extend(false,
											item.textParams,
											{
												mix: ['breadcrumbs__text'].concat((item.textParams || {}).mix || [])
											}
										),
										link: item.link && {
											href: item.href,
											text: item.link,
											mods: linkParams.mods,
											mix: (function(){
												var mix = linkParams.mix || ['color_gray'];
												if (item.href) {
													mix = mix.concat(['breadcrumbs__link']);
												};
												return mix;
											})(),
											attrs: linkParams.attrs
										}
									})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "6596");}}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks["c-article-compare"]=function(params){var __fest_buf="";try{var getByPath = fest._helpers.getByPath;

			var data = params.data || {};
			var blockParams = params.params || {};
			var description = params.description || data.description;

			var dataItems = data.items || [];

			var items = [{
				image: params.firstImgSrc && { src: params.firstImgSrc } || dataItems[0].image,
				title: params.firstImgTitle || (dataItems[0] && dataItems[0].title)
			}, {
				image: params.secondImgSrc && { src: params.secondImgSrc } || dataItems[1].image,
				title: params.secondImgTitle || (dataItems[1] && dataItems[1].title)
			}].map(function(item, i) {
				return fest._helpers.mergeParams(
					{
						src: fest._helpers.getByPath('image.src', item),
						badge: item.title && { text: item.title }
					},
					blockParams.item,
					blockParams.itemCallback && blockParams.itemCallback(item, i)
				)
			});}catch(e){__fest_log_error(e.message);}__fest_select="compare";__fest_params={};try{__fest_extend(__fest_params,{
                    items: items
                })}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,blockParams.compare)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,fest._helpers.mergeParams(
                    blockParams.compare,
                    blockParams.compareCallback && blockParams.compareCallback(params)
                ))}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);try{__fest_if=description}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="note";__fest_params={};try{__fest_params={
					mods: ['block'],
					text: description,
					mix: ['margin_top_10']
				}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}return __fest_buf;};__fest_blocks.article__item_embed=function(params){var __fest_buf="";try{var data = params.data || {};
			var description = params.description || data.description;
			var htmlContent = params.content;
			var embedParams = params.params || {};


			params.mods = params.mods || [];
			params.attrs = params.attrs || {};
			if (params.alignment) {
				params.mods.push('alignment_' + params.alignment);
			}

			if (params.ratio) {
				params.mods.push('embed_ratio');
				params.attrs['data-ratio'] = params.ratio
			}}catch(e){__fest_log_error(e.message);}__fest_select="article__item_base";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,fest._helpers.mergeParams({
					container: true
				}, embedParams.baseCallback && embedParams.baseCallback(params)))}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=htmlContent}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_if=embedParams && embedParams.lazyLoad && (embedParams.lazyLoadExcluded || []).indexOf(params.source) === -1}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="lazyembed";__fest_params={};try{__fest_extend(__fest_params,embedParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
										lazyLoad: ru.mail.cpf.Basic.Extend(
											true,
											embedParams.lazyLoad,
											{
												mix: ['article__item_embed-textarea'].concat(embedParams.lazyLoad.mix || []),
												placeholder: {
													mix: ['article__item_embed-placeholder']
												}
											}
										)
									})}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
										source: params.source,
										content: htmlContent
									})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}else{try{__fest_buf+=(htmlContent)}catch(e){__fest_log_error(e.message + "6723");}}}return __fest_buf;});__fest_params.htmlAppend=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=description}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="note";__fest_params={};try{__fest_params={
							mods: ['block'],
							mix: ['margin_top_10', 'align_left'],
							text: description
						}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);__fest_select="line";__fest_params={};try{__fest_params={
							mix: ['margin_top_10'],
							mods: ['separator']
						}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.article__item_embedlist=function(params){var __fest_buf="";try{var mergeTopParams = fest._helpers.mergeTopParams;

			var data = params.data || {};
			var title = data.title;
			var items = data.items || [];
			var blockParams = params.params || {};}catch(e){__fest_log_error(e.message);}__fest_select="article__item_base";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					container: true
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=title}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="hdr";__fest_params={};try{__fest_extend(__fest_params,{
								text: title
							})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=items.length}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="slider";__fest_params={};try{__fest_extend(__fest_params,blockParams.slider)}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;var i,item,__fest_to53,__fest_iterator53;try{__fest_iterator53=items || [];__fest_to53=__fest_iterator53.length;}catch(e){__fest_iterator53=[];__fest_to53=0;__fest_log_error(e.message);}for(i=0;i<__fest_to53;i++){item=__fest_iterator53[i];__fest_select="slider__item";__fest_params={};try{__fest_extend(__fest_params,mergeTopParams(
											{
												mix: ['padding_horizontal_10']
											},
											blockParams.sliderItem
										))}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_select="lazyembed";__fest_params={};try{__fest_extend(__fest_params,item)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
													lazyLoad: mergeTopParams(
														blockParams.embed, {
															attrs: {
																'data-type': item.source || ''
															}
														}
													)
												})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks["c-article-dots"]=function(params){var __fest_buf="";try{var data = params.content || {};
			var blockParams = params.params || {};
			var description = data.description || params.description;
			var items = data.items || [];
			var extend = ru.mail.cpf.Basic.Extend;}catch(e){__fest_log_error(e.message);}__fest_select="dots";__fest_params={};try{__fest_params={
				mods: ['hover'],
				src: data.image && data.image.src,
				items: items.map(function(item) {
					return extend({}, item, {
						button: item.buttonText && {
							text: item.buttonText,
							href: item.buttonHref
						}
					})
				}),
				photoParams: blockParams.photoCallback && blockParams.photoCallback(params)
			}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);try{__fest_if=description}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="note";__fest_params={};try{__fest_params={
					mods: ['block'],
					text: description,
					mix: ['margin_top_10']
				}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}return __fest_buf;};__fest_blocks["m-mywidget_footer-preview"]=function(params){var __fest_buf="";try{var data = params.data || {};
			var templateData = params.templateData || {};
			var clickCounter = templateData.click ? ('clb' + templateData.click) : '';
			var list = (data.list || []).slice(0,4);
			var mergeTopParams = fest._helpers.mergeTopParams;

			var mainItem = list.shift();}catch(e){__fest_log_error(e.message);}__fest_select="m-mywidget";__fest_params={};try{__fest_extend(__fest_params,mergeTopParams({
					mix: ['link-hdr'],
					attrs: {
						'data-mywidget-id': data._id
					}
				}, params))}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=templateData.title}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="hdr";__fest_params={};try{__fest_extend(__fest_params,mergeTopParams({
								mods: ['slot'],
							}, params.hdrParams))}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
								items: [{
									text: templateData.title,
									href: templateData.href,
									attrs: templateData.href && {
										target: '_blank',
										rel: 'noopener',
										name: clickCounter
									}
								}]
							})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=mainItem}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="item";__fest_params={};try{__fest_extend(__fest_params,{
								mods: ['x-small', 'slot'],
								href: mainItem.url,
								title: mainItem.title,
								text: mainItem.description,
								left: (mainItem.preview || {}).url && {
									src: mainItem.preview.url,
									attrs: {
										width: 129,
										height: 97
									}
								},
								titleAttrs: {
									'data-mywidget-id': mainItem._id,
									name: clickCounter,
									target: '_blank',
									rel: 'noopener'
									
								}
							})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=list.length}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="list";__fest_params={};try{__fest_extend(__fest_params,{
								items: list.map(function (item) {
									return {
										text: item.title,
										href: item.url,
										textParams: {
											attrs: {
												'data-mywidget-id': item._id,
												name: clickCounter,
												target: '_blank',
												rel: 'noopener'
											}
										}
									}
								}),
								mods: ['type_square', 'border_dotted', 'size_small'],
								mix: ['margin_top_10']
							})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.article=function(params){var __fest_buf="";try{var mergeParams = fest._helpers.mergeParams;
			var extend = ru.mail.cpf.Basic.Extend;

			var breadcrumbs = params.breadcrumbs;
			var title = params.title;
			var shares = params.shares;
			var text = params.text;
			var textData = text && text.data;
			var hasTextData = textData && textData.length;
			var imagesData = params.imagesData;
			var paramsByType = text && text.params || {};
			var itemCallback = text && text.itemCallback;
			var itemType, itemParams;

			var authors = params.authors || [];
			if (params.author) {
				authors.push(params.author)
			}}catch(e){__fest_log_error(e.message);}__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'article'
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=breadcrumbs}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="breadcrumbs";__fest_params={};try{__fest_extend(__fest_params,breadcrumbs)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,mergeParams(false, {
								mods: ['article']
							}, breadcrumbs))}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=title}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="hdr";__fest_params={};try{__fest_extend(__fest_params,title)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,mergeParams(
								false,
								title,
								{
									mods: ['collapse', 'bold_huge', 'lowercase']
								}
							))}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
								textTag: title.tag || 'h1',
								left: params.htmlTitleLeft,
								right: params.htmlTitleRight
							})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.intro}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params.introParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
								baseClass: 'article__intro',
								html: params.intro
							})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=text}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,text)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
								baseClass: 'article__text'
							})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=hasTextData}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){var itemNo,item,__fest_to54,__fest_iterator54;try{__fest_iterator54=textData || [];__fest_to54=__fest_iterator54.length;}catch(e){__fest_iterator54=[];__fest_to54=0;__fest_log_error(e.message);}for(itemNo=0;itemNo<__fest_to54;itemNo++){item=__fest_iterator54[itemNo];try{__fest_if=typeof item == 'string'}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="article__item_base";__fest_params={};try{__fest_params={
														mods: ['html'],
														html: item
													}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}else{try{__fest_if=item && item.type}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{itemType = item.type;
													if (item.subtype && item.subtype != itemType) {
														itemType += '_' + item.subtype;
													}
													itemParams = paramsByType[itemType] || paramsByType[item.type] || null;

													if (itemType === 'image' && item.hasOwnProperty('index') && imagesData) {
														item.imageData = imagesData[item.index];
													}}catch(e){__fest_log_error(e.message);}try{__fest_select="article__item_"+(itemType)}catch(e){__fest_select="";__fest_log_error(e.message)}__fest_params={};try{__fest_extend(__fest_params,fest._helpers.mergeParams(true,
															item,
															itemCallback && itemCallback(item) || null
														))}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
															params: itemParams,
															imagesData: imagesData
														})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}else{}}}}else{__fest_select="article__item_base";__fest_params={};try{__fest_params={
											mods: ['html'],
											html: text.text
										}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.textHtml}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.textHtml)}catch(e){__fest_log_error(e.message + "7110");}}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "7119");}}try{__fest_if=authors.length || params.about}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,{
								baseClass: 'article__bottom',
								baseParams: params.bottomParams
							})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=authors.length}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){var authorNum,author,__fest_to55,__fest_iterator55;try{__fest_iterator55=authors || [];__fest_to55=__fest_iterator55.length;}catch(e){__fest_iterator55=[];__fest_to55=0;__fest_log_error(e.message);}for(authorNum=0;authorNum<__fest_to55;authorNum++){author=__fest_iterator55[authorNum];__fest_select="article__author";__fest_params={};try{__fest_params=author}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}}try{__fest_if=params.about}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="article__about";__fest_params={};try{__fest_params=params.about}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}try{__fest_if=shares && !params.hideBottomShares}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="sharelist";__fest_params={};try{__fest_extend(__fest_params,shares)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,fest._helpers.mergeTopParams(
								{
									mix: ['margin_top_20'],
									mods: ['justify']
								}, shares, params.sharesBottomParams
							))}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
								itemParams: fest._helpers.mergeTopParams(
									shares.itemParams,
									{
										mods: ['square']
									}
								),
								showLabels: true
							})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.article__item=function(params){var __fest_buf="";try{
				var item = params.item || {};

				var type = item.type;
				var subtype = item.subtype;
				var mods = [type];
				var mod = type;
				if (subtype && subtype != type) {
					mod = [type, subtype].join('_');
					mods.push(mod);
				}

				if (item.source) {
					mods.push('source_' + item.source);
				}
			}catch(e){__fest_log_error(e.message);}try{__fest_if=type}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_select="article__item_"+(mod)}catch(e){__fest_select="";__fest_log_error(e.message)}__fest_params={};try{__fest_extend(__fest_params,item)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
							mods: mods.concat(item.mods || []),
							params: params.params
						})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}else{try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_params={
						forClass: 'article__item',
						forParams: params,
						html: params.html
					}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}else{}}return __fest_buf;};__fest_blocks.article__item_image=function(params){var __fest_buf="";try{var IMAGE_CONTENT_SIZE_INDEX = 1;
			var getByPath = fest._helpers.getByPath;
			var extend = ru.mail.cpf.Basic.Extend;

			var data = params.data;
			var imageData = params.imageData;
			var blockParams = params.params || {};
			var bar = blockParams.bar;
			var description = params.description
				|| getByPath('data.description', params)
				|| getByPath('imageData.description', params)
				|| params.title
				|| getByPath('data.title', params);

			var source = params.source && {name: params.source, href: params.source_href} || getByPath('source', data) || getByPath('source', imageData) || {};
			var withoutSourceLabel = blockParams.withoutSourceLabel;

			if (source.name) {
				bar = bar || {};
				bar.label = 'label' in source && source.label || 'label' in bar && bar.label || !withoutSourceLabel ? 'Источник:': '';
				bar.param = {
					href: source.href,
					text: source.name,
					attrs: {
						target: '_blank'
					}
				};
			}

			var image;
			if (imageData) {
				image = imageData.url && imageData.url[IMAGE_CONTENT_SIZE_INDEX];
			} else {
				image = getByPath('image', data) || {
					src: params.src,
					width: params.width,
					height: params.height
				};
			}
			var sizes = {
				width: +image.width,
				height: +image.height
			};
			var sizesConfig = {
				small: 560,
				medium: 640,
				large: 700
			};
			var mediaSize;
			var mediaSizeHeight = 600;
			var isViewtype = params.viewtype;
			var isMiniLeft = isViewtype && isViewtype === 'mini_left';
			var isMiniRound = isViewtype && isViewtype === 'mini_left_round';
			var isMini = isMiniLeft || isMiniRound;
			var isVertical = isViewtype && isViewtype === 'vertical';
			params.mods = params.mods || [];
			var photoParams, photoCallbackParams, isLazy, photoAction;

			for (mediaSize in sizesConfig) {
				if (!isMini && !isVertical && sizes.width && sizes.width < sizesConfig[mediaSize] || params.forceFluid) {
					params.mods.push('image_' + mediaSize + '-fluid');
				}
			}
			if (!isMini && !isVertical && sizes.height && sizes.height > mediaSizeHeight && sizes.width && sizes.width <= sizes.height) {
				params.mods.push('image_height-fluid');
			}

			photoCallbackParams = (blockParams.photoCallback && blockParams.photoCallback(params)) || {};
			isLazy = photoCallbackParams.lazy || (blockParams.photo && blockParams.photo.lazy) || false;
			photoAction = photoCallbackParams.action || (blockParams.photo && blockParams.photo.action) || false;
			photoParams = fest._helpers.mergeParams(
					true,
					isLazy ? {
						height: image.height,
						width: image.width
					} : {
						src: blockParams.lazyLoad && blockParams.lazyLoad.src || image.src
					},
					{
						mods: [].concat(isMini ? ['full'] : []).concat(isMiniRound ? ['full_round'] : []).concat(isVertical ? ['article-photo-vertical'] : [])
					},
					blockParams.photo,
					photoCallbackParams
			);
			photoParams.lazy = isLazy;
			photoParams.action = photoAction;}catch(e){__fest_log_error(e.message);}__fest_select="article__item_base";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,fest._helpers.mergeParams(
					true,
					{
						mods: [].concat(isMini || isVertical ? ['image_' + params.viewtype] : [])
					},
					params,
					blockParams.baseCallback && blockParams.baseCallback(params)
				))}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					container: true
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_select="article-photo";__fest_params={};try{__fest_extend(__fest_params,blockParams.articlePhoto)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,fest._helpers.mergeTopParams(
							blockParams.articlePhoto,
							{
								mods: [].concat(isMini ? ['full', 'full_height'] : []).concat(isVertical ? ['vertical'] : [])
							}
						))}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
							data: {
								photo: photoParams,
								shares: blockParams.shares && !isMini && fest._helpers.mergeParams(
									true,
									extend(true, {}, blockParams.shares),
									blockParams.sharesCallback && blockParams.sharesCallback(params)
								)
							}
						})}catch(e){__fest_log_error(e.message)}__fest_params.captionHtml=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=(description || bar) && !isMini}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<span class=\"valign_middle\">");try{__fest_if=description}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(description)}catch(e){__fest_log_error(e.message + "7364");}}try{__fest_if=description && bar}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=(" | ");}try{__fest_if=bar && bar.label}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(bar.label)}catch(e){__fest_log_error(e.message + "7372");}}__fest_buf+=("</span>");try{__fest_if=bar && bar.param}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=(" ");__fest_select="link";__fest_params={};try{__fest_extend(__fest_params,bar.param)}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.article__item_image=function(params){var __fest_buf="";try{var IMAGE_CONTENT_SIZE_INDEX = 1;
			var getByPath = fest._helpers.getByPath;
			var extend = ru.mail.cpf.Basic.Extend;

			var data = params.data;
			var imageData = params.imageData;
			var blockParams = params.params || {};
			var bar = blockParams.bar;
			var description = params.description
				|| getByPath('data.description', params)
				|| getByPath('imageData.description', params)
				|| params.title
				|| getByPath('data.title', params);

			var source = params.source && {name: params.source, href: params.source_href} || getByPath('source', data) || getByPath('source', imageData) || {};
			var withoutSourceLabel = blockParams.withoutSourceLabel;

			if (source.name) {
				bar = bar || {};
				bar.label = 'label' in source && source.label || 'label' in bar && bar.label || !withoutSourceLabel ? 'Источник:': '';
				bar.param = {
					href: source.href,
					text: source.name,
					attrs: {
						target: '_blank'
					}
				};
			}

			var image;
			if (imageData) {
				image = imageData.url && imageData.url[IMAGE_CONTENT_SIZE_INDEX];
			} else {
				image = getByPath('image', data) || {
					src: params.src,
					width: params.width,
					height: params.height
				};
			}
			var sizes = {
				width: +image.width,
				height: +image.height
			};
			var sizesConfig = {
				small: 560,
				medium: 640,
				large: 700
			};
			var mediaSize;
			var mediaSizeHeight = 600;
			var isViewtype = params.viewtype;
			var isMiniLeft = isViewtype && isViewtype === 'mini_left';
			var isMiniRound = isViewtype && isViewtype === 'mini_left_round';
			var isMini = isMiniLeft || isMiniRound;
			params.mods = params.mods || [];
			var photoParams, photoCallbackParams, isLazy;

			for (mediaSize in sizesConfig) {
				if (!isMini && sizes.width && sizes.width < sizesConfig[mediaSize] || params.forceFluid) {
					params.mods.push('image_' + mediaSize + '-fluid');
				}
			}
			if (!isMini && sizes.height && sizes.height > mediaSizeHeight && sizes.width && sizes.width <= sizes.height) {
				params.mods.push('image_height-fluid');
			}

			photoCallbackParams = (blockParams.photoCallback && blockParams.photoCallback(params)) || {};
			isLazy = photoCallbackParams.lazy || (blockParams.photo && blockParams.photo.lazy) || false;
			photoParams = fest._helpers.extend(
					true,
					isLazy ? {
						height: image.height,
						width: image.width
					} : {
						src: blockParams.lazyLoad && blockParams.lazyLoad.src || image.src,
						mods: [].concat(isMini ? ['full'] : []).concat(isMiniRound ? ['full_round'] : [])
					},
					blockParams.photo,
					photoCallbackParams
			);
			photoParams.lazy = isLazy;}catch(e){__fest_log_error(e.message);}__fest_select="article__item_base";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,fest._helpers.mergeParams(
					true,
					{
						mods: [].concat(isMini ? ['image_' + params.viewtype] : [])
					},
					params,
					blockParams.baseCallback && blockParams.baseCallback(params)
				))}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					container: true
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_select="article-photo";__fest_params={};try{__fest_extend(__fest_params,blockParams.articlePhoto)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,fest._helpers.mergeTopParams(
							blockParams.articlePhoto,
							{
								mods: [].concat(isMini ? ['full', 'full_height'] : [])
							}
						))}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
							data: {
								photo: photoParams,
								shares: blockParams.shares && !isMini && fest._helpers.mergeParams(
									true,
									extend(true, {}, blockParams.shares),
									blockParams.sharesCallback && blockParams.sharesCallback(params)
								)
							}
						})}catch(e){__fest_log_error(e.message)}__fest_params.captionHtml=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=(description || bar) && !isMini}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<span class=\"valign_middle\">");try{__fest_if=description}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(description)}catch(e){__fest_log_error(e.message + "7523");}}try{__fest_if=description && bar}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=(" | ");}try{__fest_if=bar && bar.label}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(bar.label)}catch(e){__fest_log_error(e.message + "7531");}}__fest_buf+=("</span>");try{__fest_if=bar && bar.param}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=(" ");__fest_select="link";__fest_params={};try{__fest_extend(__fest_params,bar.param)}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.article__item_dots=function(params){var __fest_buf="";__fest_select="article__item_base";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_select="c-article-dots";__fest_params={};try{__fest_params=params}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks["m-mywidget"]=function(params){var __fest_buf="";__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,{
					baseClass: 'm-mywidget'
				})}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "7578");}}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_select="m-mywidget_footer-preview";__fest_params={};try{__fest_extend(__fest_params,json)}catch(e){__fest_log_error(e.message)}__fest_chunks.push(__fest_buf,{name:__fest_select,params:__fest_params,cp:false});__fest_buf="";__fest_to=__fest_chunks.length;if (__fest_to) {__fest_iterator = 0;for (;__fest_iterator<__fest_to;__fest_iterator++) {__fest_chunk=__fest_chunks[__fest_iterator];if (typeof __fest_chunk==="string") {__fest_html+=__fest_chunk;} else {__fest_fn=__fest_blocks[__fest_chunk.name];if (__fest_fn) __fest_html+=__fest_call(__fest_fn,__fest_chunk.params,__fest_chunk.cp);}}return __fest_html+__fest_buf;} else {return __fest_buf;}};

	if (typeof define === 'function' && define.amd) {
		define(function () {
			return template;
		});
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = template;
	} else {
		if(!x.fest)x.fest={};
		x.fest['ct-mywidget-footer-preview.xml']=template;
	}
}(new Function('return this')()));
/* end: ./ct-mywidget-footer-preview.tmp.fest.js */