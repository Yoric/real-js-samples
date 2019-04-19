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
/* begin: ./ct-feed-items.tmp.fest.js */

;(function (x) {
	var template = function (__fest_context){"use strict";var __fest_self=this,__fest_buf="",__fest_chunks=[],__fest_chunk,__fest_attrs=[],__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn,__fest_html="",__fest_blocks={},__fest_params,__fest_element,__fest_debug_file="",__fest_debug_line="",__fest_debug_block="",__fest_htmlchars=/[&<>"]/g,__fest_htmlchars_test=/[&<>"]/,__fest_short_tags = {"area":true,"base":true,"br":true,"col":true,"command":true,"embed":true,"hr":true,"img":true,"input":true,"keygen":true,"link":true,"meta":true,"param":true,"source":true,"wbr":true},__fest_element_stack = [],__fest_htmlhash={"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"},__fest_jschars=/[\\'"\/\n\r\t\b\f<>]/g,__fest_jschars_test=/[\\'"\/\n\r\t\b\f<>]/,__fest_jshash={"\"":"\\\"","\\":"\\\\","/":"\\/","\n":"\\n","\r":"\\r","\t":"\\t","\b":"\\b","\f":"\\f","'":"\\'","<":"\\u003C",">":"\\u003E"},___fest_log_error;if(typeof __fest_error === "undefined"){___fest_log_error = (typeof console !== "undefined" && console.error) ? function(){return Function.prototype.apply.call(console.error, console, arguments)} : function(){};}else{___fest_log_error=__fest_error};function __fest_log_error(msg){___fest_log_error(msg+"\nin block \""+__fest_debug_block+"\" at line: "+__fest_debug_line+"\nfile: "+__fest_debug_file)}function __fest_replaceHTML(chr){return __fest_htmlhash[chr]}function __fest_replaceJS(chr){return __fest_jshash[chr]}function __fest_extend(dest, src){for(var i in src)if(src.hasOwnProperty(i))dest[i]=src[i];}function __fest_param(fn){fn.param=true;return fn}function __fest_call(fn, params,cp){if(cp)for(var i in params)if(typeof params[i]=="function"&&params[i].param)params[i]=params[i]();return fn.call(__fest_self,params)}function __fest_escapeJS(s){if (typeof s==="string") {if (__fest_jschars_test.test(s))return s.replace(__fest_jschars,__fest_replaceJS);} else if (typeof s==="undefined")return "";return s;}function __fest_escapeHTML(s){if (typeof s==="string") {if (__fest_htmlchars_test.test(s))return s.replace(__fest_htmlchars,__fest_replaceHTML);} else if (typeof s==="undefined")return "";return s;}var json=__fest_context;try{json = json || {}; (json.CONSTANTS = (json.CONSTANTS || {})).TARGET = {};}catch(e){__fest_log_error(e.message);}__fest_blocks.element=function(params){var __fest_buf="";try{var blockParams = params.baseParams || params.forParams || params;
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
			}}catch(e){__fest_log_error(e.message);}try{__fest_element=((attrs.href && 'a') || params.tagName || 'div');if(typeof __fest_element !== "string"){__fest_log_error("Element name must be a string");__fest_element="div"}}catch(e){__fest_element="div";__fest_log_error(e.message);}__fest_element_stack.push(__fest_element);__fest_buf+=("<" + __fest_element);__fest_buf+=(" class=\"");try{__fest_select=(fest._helpers.classNamesFor(baseClass, blockParams))}catch(e){__fest_select="";__fest_log_error(e.message)}__fest_buf+=(__fest_select);__fest_buf+=("\"");var attrName,attrValue,__fest_iterator0;try{__fest_iterator0=attrs || {};}catch(e){__fest_iterator={};__fest_log_error(e.message);}for(attrName in __fest_iterator0){attrValue=__fest_iterator0[attrName];try{__fest_select=(attrName)}catch(e){__fest_select="";__fest_log_error(e.message)}if(__fest_select!==""){__fest_buf+=(" " + __fest_select + "=\"");try{__fest_buf+=(__fest_escapeHTML(attrValue))}catch(e){__fest_log_error(e.message + "28");}__fest_buf+=("\"");}}var attrName,attrValue,__fest_iterator1;try{__fest_iterator1=params.attrsNoEscape || {};}catch(e){__fest_iterator={};__fest_log_error(e.message);}for(attrName in __fest_iterator1){attrValue=__fest_iterator1[attrName];try{__fest_select=(attrName)}catch(e){__fest_select="";__fest_log_error(e.message)}if(__fest_select!==""){__fest_buf+=(" " + __fest_select + "=\"");try{__fest_buf+=(attrValue)}catch(e){__fest_log_error(e.message + "33");}__fest_buf+=("\"");}}__fest_element=__fest_element_stack[__fest_element_stack.length-1];__fest_buf+=(__fest_element in __fest_short_tags?"/>":">");try{__fest_if=params.htmlPrepend}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.htmlPrepend)}catch(e){__fest_log_error(e.message + "39");}}try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "42");}}try{__fest_if=params.elem}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_params=params.elem}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.elems}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){var i,elem,__fest_to2,__fest_iterator2;try{__fest_iterator2=params.elems || [];__fest_to2=__fest_iterator2.length;}catch(e){__fest_iterator2=[];__fest_to2=0;__fest_log_error(e.message);}for(i=0;i<__fest_to2;i++){elem=__fest_iterator2[i];try{__fest_if=elem}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_params=elem}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}}}try{__fest_if=params.htmlAppend}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.htmlAppend)}catch(e){__fest_log_error(e.message + "55");}}__fest_element = __fest_element_stack[__fest_element_stack.length - 1];if(!(__fest_element in __fest_short_tags)){__fest_buf+=("</" + __fest_element + ">")}__fest_element_stack.pop();return __fest_buf;};__fest_blocks.block=function(params){var __fest_buf="";__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'block'
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=params.wrapper}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="wrapper";__fest_params={};try{__fest_extend(__fest_params,params.wrapper)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
									html: params.html
								})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}else{try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "88");}}}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.wrapper=function(params){var __fest_buf="";__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'wrapper'
				})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;};__fest_blocks.hdr__side=function(params){var __fest_buf="";try{__fest_attrs[0]=__fest_escapeHTML( (params.mods ? ' hdr__side_' + params.mods.join(' hdr__side_') : '') + (params.mix ? ' ' + params.mix.join(' ') : '') )}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<div class=\"hdr__side" + __fest_attrs[0] + "\">");try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "121");}}__fest_buf+=("</div>");return __fest_buf;};__fest_blocks.scroll=function(params){var __fest_buf="";try{params.type = params.type || 'vertical';

			var trackParams = params.trackParams || {};
			var trackBoxParams = params.trackBoxParams || {};
			var dragParams = params.dragParams || {};
			var dragWrapParams = params.dragWrapParams || {};

			params.mix = params.mix || ['js-scrollbar'];
			trackBoxParams.mix = trackBoxParams.mix || ['js-scrollbar__track'];
			dragWrapParams.mix = dragWrapParams.mix || ['js-scrollbar__track__drag__point'];
			dragParams.mix = dragParams.mix || ['js-scrollbar__track__drag'];}catch(e){__fest_log_error(e.message);}try{__fest_attrs[0]=__fest_escapeHTML(fest._helpers.classNamesFor('scroll', params))}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}try{__fest_attrs[1]=__fest_escapeHTML(params.type)}catch(e){__fest_attrs[1]=""; __fest_log_error(e.message);}__fest_buf+=("<div class=\"" + __fest_attrs[0] + "\" data-type=\"" + __fest_attrs[1] + "\">");try{__fest_attrs[0]=__fest_escapeHTML(fest._helpers.classNamesFor('scroll__track', trackParams))}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<div class=\"" + __fest_attrs[0] + "\">");try{__fest_attrs[0]=__fest_escapeHTML(fest._helpers.classNamesFor('scroll__track__box', trackBoxParams))}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<div class=\"" + __fest_attrs[0] + "\">");try{__fest_attrs[0]=__fest_escapeHTML(fest._helpers.classNamesFor('scroll__track__drag-wrap', dragWrapParams))}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<div class=\"" + __fest_attrs[0] + "\">");try{__fest_attrs[0]=__fest_escapeHTML(fest._helpers.classNamesFor('scroll__track__drag', dragParams))}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<div class=\"" + __fest_attrs[0] + "\"></div></div></div></div></div>");return __fest_buf;};__fest_blocks.tooltip__box=function(params){var __fest_buf="";__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'tooltip__box'
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params.innerParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
							baseClass: 'tooltip__inner'
						})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=params.close}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="icon";__fest_params={};try{__fest_extend(__fest_params,params.close)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,fest._helpers.mergeTopParams(
										params.close,
										{ mix: ['tooltip__close'] }
									))}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.scrollParams}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="scroll";__fest_params={};try{__fest_params=fest._helpers.mergeParams(
									params.scrollParams,
									{ mix: ['tooltip__scroll'] }
								)}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params.contentParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
									baseClass: 'tooltip__content'
								})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "209");}}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.loader=function(params){var __fest_buf="";try{__fest_attrs[0]=__fest_escapeHTML(fest._helpers.classNamesFor('loader', params))}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<svg class=\"" + __fest_attrs[0] + "\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\" version=\"1.1\" viewBox=\"-10 -10 220 220\"><defs><linearGradient id=\"transparent\" gradientUnits=\"objectBoundingBox\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"rgba(119, 119, 119, 0)\" stop-opacity=\"0\"></stop><stop offset=\"100%\" stop-color=\"rgba(119, 119, 119, 0)\" stop-opacity=\"0\"></stop></linearGradient><linearGradient id=\"one\" gradientUnits=\"objectBoundingBox\" x1=\"1\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"rgba(119, 119, 119, 0)\" stop-opacity=\"0\"></stop><stop offset=\"100%\" stop-color=\"rgba(119, 119, 119, .33)\"></stop></linearGradient><linearGradient id=\"two\" gradientUnits=\"objectBoundingBox\" x1=\"1\" y1=\"1\" x2=\"0\" y2=\"0\"><stop offset=\"0%\" stop-color=\"rgba(119, 119, 119, .33)\"></stop><stop offset=\"100%\" stop-color=\"rgba(119, 119, 119, .66)\"></stop></linearGradient><linearGradient id=\"three\" gradientUnits=\"objectBoundingBox\" x1=\"0\" y1=\"1\" x2=\"0\" y2=\"0\"><stop offset=\"0%\" stop-color=\"rgba(119, 119, 119, .66)\"></stop><stop offset=\"100%\" stop-color=\"rgba(119, 119, 119, 1)\"></stop></linearGradient><linearGradient id=\"four\" gradientUnits=\"objectBoundingBox\" x1=\"0\" y1=\"1\" x2=\"1\" y2=\"0\"><stop offset=\"0%\" stop-color=\"rgba(119, 119, 119, 1)\"></stop><stop offset=\"100%\" stop-color=\"rgba(119, 119, 119, 1)\"></stop></linearGradient><linearGradient id=\"five\" gradientUnits=\"objectBoundingBox\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0%\" stop-color=\"rgba(119, 119, 119, 1)\"></stop><stop offset=\"100%\" stop-color=\"rgba(119, 119, 119, 1)\"></stop></linearGradient></defs><g fill=\"none\" stroke-width=\"40\" transform=\"translate(100,100)\"><path d=\"M 81.6,-40 A 90,90 0 0,1 81.6,40\" stroke=\"url(#transparent)\"></path><path d=\"M 81.6,40 A 90,90 0 0,1 0,90\" stroke=\"url(#one)\"></path><path d=\"M 0,90 A 90,90 0 0,1 -81.6,40\" stroke=\"url(#two)\"></path><path d=\"M -81.6,40 A 90,90 0 0,1 -81.6,-40\" stroke=\"url(#three)\"></path><path d=\"M -81.6,-40 A 90,90 0 0,1 0,-90\" stroke=\"url(#four)\"></path><path d=\"M 0,-90 A 90,90 0 0,1 81.6,-40\" stroke=\"url(#five)\" stroke-linecap=\"round\"></path></g></svg>");return __fest_buf;};__fest_blocks["deti-feed__grid"]=function(params){var __fest_buf="";try{var data = params.data;
			var items = data && data.items;}catch(e){__fest_log_error(e.message);}__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: "deti-feed__grid"
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=items && items.length}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){var i,item,__fest_to3,__fest_iterator3;try{__fest_iterator3=items || [];__fest_to3=__fest_iterator3.length;}catch(e){__fest_iterator3=[];__fest_to3=0;__fest_log_error(e.message);}for(i=0;i<__fest_to3;i++){item=__fest_iterator3[i];try{var isMywidget = !item.isCustom && (item.type != "service");}catch(e){__fest_log_error(e.message);}__fest_select="deti-feed__item";__fest_params={};try{__fest_extend(__fest_params,{
									data: {
										item: item
									},
									itemParams: {
										mix: ["order_" + (i + 1)].concat( isMywidget ? ["js-feed__mywidget"] : [] ),
										attrs: item.doc_id && item.source_id && {
											"data-doc": item.doc_id,
											"data-source": item.source_id,
											"data-show-pxls": item.show_pxls,
											"data-click-pxls": item.click_pxls
										}
									}
								})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks["next-flex"]=function(params){var __fest_buf="";__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: "flex"
				})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;};__fest_blocks["next-flex__item"]=function(params){var __fest_buf="";__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: "flex__item"
				})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;};__fest_blocks["deti-feed__item"]=function(params){var __fest_buf="";try{var data = params.data;
			var item = data && data.item;
			var itemParams = { mods: [], mix: [], attrs: {} };
			var isWide, isCustom, row, itemType;

			if (item) {
				isWide = item.isWide;
				isCustom = !isWide && item.isCustom;
				row = item.row;
				itemType = item.type;
			}

			if (itemType) {
				itemParams.mods.push(itemType);
			}

			if (isWide && row) {
				itemParams.mods.push("wide", "wide_" + row);
			}

			if (isCustom && row) {
				itemParams.mods.push("custom_" + row);
			}

			if (isCustom || isWide) {
				/* пиксель для редакционных материалов */
				itemParams.attrs.name = "clb27953364";
			} else {
				/* пиксель для материалов myWidget'а */
				itemParams.attrs.name = "clb27953381";
			}}catch(e){__fest_log_error(e.message);}try{__fest_if=item}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,{
						baseClass: "deti-feed__item",
						href: item.href
					})}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,fest._helpers.mergeTopParams(
						itemParams,
						params.itemParams,
						{ attrs: item.attrs }
					))}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_select='deti-feed__item-' + itemType}catch(e){__fest_select="";__fest_log_error(e.message)}__fest_params={};try{__fest_extend(__fest_params,{
								data: {
									item: item
								}
							})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}return __fest_buf;};__fest_blocks.layout=function(params){var __fest_buf="";__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'layout',
					href: null
				})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;};__fest_blocks["deti-feed__item-kids"]=function(params){var __fest_buf="";try{var getByPath = fest._helpers.getByPath;
			var data = params.data;
			var item = data && data.item;
			var images = item && item.images;
			var isWide = item && item.isWide;
			var badge = item && item.badge;
			var srcImage = images && images.image && images.image.src;}catch(e){__fest_log_error(e.message);}try{__fest_if=item}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_if=images}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="photo";__fest_params={};try{__fest_extend(__fest_params,{
							mods: ["scale", "full"],
							mix: !isWide ? ["deti-feed__photo"] : [],
							src: srcImage,
							labels: {
								items: badge && [{
									mods: [badge.type],
									text: badge.title
								}]
							},
							title: isWide && item.title
						})}catch(e){__fest_log_error(e.message)}__fest_params.captionHtml=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=isWide}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="deti-feed__item-footer";__fest_params={};try{__fest_extend(__fest_params,{
										data: item
									})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}try{__fest_if=!isWide}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<div class=\"flex__item_grow_1 flex flex_column flex_between padding_20\">");__fest_select="deti-feed__item-header";__fest_params={};try{__fest_extend(__fest_params,{
								data: item
							})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);__fest_select="deti-feed__item-footer";__fest_params={};try{__fest_extend(__fest_params,{
								data: item
							})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);__fest_buf+=("</div>");}}return __fest_buf;};__fest_blocks.element_ssi=function(params){var __fest_buf="";try{var attrs = params.attrs || {};
			if (params.href) {
				attrs.href = params.href;
			}}catch(e){__fest_log_error(e.message);}try{__fest_element=((attrs.href && 'a') || params.tagName || 'span');if(typeof __fest_element !== "string"){__fest_log_error("Element name must be a string");__fest_element="div"}}catch(e){__fest_element="div";__fest_log_error(e.message);}__fest_element_stack.push(__fest_element);__fest_buf+=("<" + __fest_element);__fest_buf+=(" class=\"");try{__fest_select=(fest._helpers.classNamesFor(params.baseClass, params))}catch(e){__fest_select="";__fest_log_error(e.message)}__fest_buf+=(__fest_select);__fest_buf+=("\"");var attrName,attrValue,__fest_iterator4;try{__fest_iterator4=attrs || {};}catch(e){__fest_iterator={};__fest_log_error(e.message);}for(attrName in __fest_iterator4){attrValue=__fest_iterator4[attrName];try{__fest_select=(attrName)}catch(e){__fest_select="";__fest_log_error(e.message)}if(__fest_select!==""){__fest_buf+=(" " + __fest_select + "=\"");try{__fest_if=attrValue && attrValue.indexOf && attrValue.indexOf('--# echo') > -1}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(attrValue)}catch(e){__fest_log_error(e.message + "508");}}else{try{__fest_buf+=(__fest_escapeHTML(attrValue))}catch(e){__fest_log_error(e.message + "511");}}__fest_buf+=("\"");}}__fest_element=__fest_element_stack[__fest_element_stack.length-1];__fest_buf+=(__fest_element in __fest_short_tags?"/>":">");try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "518");}}__fest_element = __fest_element_stack[__fest_element_stack.length - 1];if(!(__fest_element in __fest_short_tags)){__fest_buf+=("</" + __fest_element + ">")}__fest_element_stack.pop();return __fest_buf;};__fest_blocks.shadow=function(params){var __fest_buf="";__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'shadow',
					tagName: 'div'
				})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;};__fest_blocks.mixes=function(params){var __fest_buf="";try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_element= params.inline ? 'span' : 'div' ;if(typeof __fest_element !== "string"){__fest_log_error("Element name must be a string");__fest_element="div"}}catch(e){__fest_element="div";__fest_log_error(e.message);}__fest_element_stack.push(__fest_element);__fest_buf+=("<" + __fest_element);try{__fest_if=params.mix}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=(" class=\"");try{__fest_buf+=(params.mix.join(' '))}catch(e){__fest_log_error(e.message + "551");}__fest_buf+=("\"");}var attrName,attrVal,__fest_iterator5;try{__fest_iterator5=params.attrs || {};}catch(e){__fest_iterator={};__fest_log_error(e.message);}for(attrName in __fest_iterator5){attrVal=__fest_iterator5[attrName];try{__fest_select=(attrName)}catch(e){__fest_select="";__fest_log_error(e.message)}if(__fest_select!==""){__fest_buf+=(" " + __fest_select + "=\"");try{__fest_buf+=(__fest_escapeHTML(attrVal))}catch(e){__fest_log_error(e.message + "557");}__fest_buf+=("\"");}}__fest_element=__fest_element_stack[__fest_element_stack.length-1];__fest_buf+=(__fest_element in __fest_short_tags?"/>":">");try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "564");}__fest_element = __fest_element_stack[__fest_element_stack.length - 1];if(!(__fest_element in __fest_short_tags)){__fest_buf+=("</" + __fest_element + ">")}__fest_element_stack.pop();}return __fest_buf;};__fest_blocks.avatar=function(params){var __fest_buf="";try{var retinaSize = { 32: 90, 45: 90 };
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
				})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;};__fest_blocks["deti-feed__item-service"]=function(params){var __fest_buf="";try{var data = params.data;
			var item = data && data.item;
			var serviceName = item && item.name;
			var serviceText = item && item.text;}catch(e){__fest_log_error(e.message);}try{__fest_if=item}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,{
						baseClass: "deti-feed__item-service",
						mix: ["align_center", "padding_20"],
						mods: serviceName && [serviceName]
					})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=serviceName}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<div class=\"deti-feed__icon\">");__fest_select="icon";__fest_params={};try{__fest_extend(__fest_params,{
										mods: ["size_45", "fill_white"],
										name: "icon_" + serviceName
									})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);__fest_buf+=("</div>");}try{__fest_if=item.title}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="text";__fest_params={};try{__fest_extend(__fest_params,{
									mix: ["color_white", "margin_top_10"],
									mods: ["block", "bold_medium", "fixed"],
									text: item.title
								})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=serviceText}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="text";__fest_params={};try{__fest_extend(__fest_params,{
									mix: ["color_white", "margin_top_10"],
									mods: ["block", "light_normal", "fixed"],
									text: serviceText
								})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}return __fest_buf;};__fest_blocks["deti-feed__item-header"]=function(params){var __fest_buf="";try{var data = params.data}catch(e){__fest_log_error(e.message);}try{__fest_if=data && data.title}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
						baseClass: 'deti-feed__item-header'
					})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_buf+=(data.title)}catch(e){__fest_log_error(e.message + "696");}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}return __fest_buf;};__fest_blocks["deti-feed__item-footer"]=function(params){var __fest_buf="";try{var data = params.data || {};
			var items = [];
			if ( data.like ) {
				items.push({
					icon: "like",
					value: data.like
				})
			}
			if ( data.comments ) {
				items.push({
					icon: "comment",
					value: data.comments
				})
			}}catch(e){__fest_log_error(e.message);}try{__fest_if=items.length}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
						baseClass: "deti-feed__item-footer",
						mix: ["margin_top_10"]
					})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;var i,item,__fest_to6,__fest_iterator6;try{__fest_iterator6=items || [];__fest_to6=__fest_iterator6.length;}catch(e){__fest_iterator6=[];__fest_to6=0;__fest_log_error(e.message);}for(i=0;i<__fest_to6;i++){item=__fest_iterator6[i];__fest_select="icon";__fest_params={};try{__fest_extend(__fest_params,{
									mods: ["svg", "size_18", "fill_gray_light"],
									mix: !!i && ["margin_left_30"],
									useSrc: json.CONSTANTS.target.svg.src,
									name: "icon_" + item.icon
								})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);__fest_select="text";__fest_params={};try{__fest_extend(__fest_params,{
									mix: ["padding_left_10", "color_gray_light", "text_fixed", "text_light_normal"],
									text: item.value
								})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}return __fest_buf;};__fest_blocks["deti-feed"]=function(params){var __fest_buf="";try{var data = params.data;
			var feed = data && data.feed;
			var api = data && data.api;
			var userId = feed && feed.user_id;
			var items = feed && feed.items;
			var showFeed = params.showFeed;
			var blockParams = {
				mods: [],
				mix: ["js-module", "hidden_print"],
				attrs: {
					"data-module": "Feed",
					"onclick": "return " + JSON.stringify({
						Feed: {
							data: {
								api: api,
								stat: data.stats,
								user: data.user,
								userId: userId,
								isInitial: !showFeed
							}
						}
					})
				},
				tagName: "section",
				wrapper: true
			};
			if (!params.isMain) {
				blockParams.mods.push("bg_primary");
			}
			if (!showFeed || !items.length) {
				blockParams.mix.push("hidden_all");
			}}catch(e){__fest_log_error(e.message);}try{__fest_if=showFeed || api}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<div class=\"js-feed\"></div>");__fest_select="block";__fest_params={};try{__fest_extend(__fest_params,blockParams)}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,fest._helpers.mergeTopParams({
								mix: ["js-module"],
								attrs: {
									"data-module": "TrackBlocks",
									"data-counter-type": "rbmail",
									"data-counter-id": "27953363"
								}
							}, params))}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
								baseClass: "deti-feed"
							})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_select="hdr";__fest_params={};try{__fest_extend(__fest_params,{
										mods: ["bold_huge"],
										item: {
											mix: ["color_black"],
											text: "Моя лента"
										}
									})}catch(e){__fest_log_error(e.message)}__fest_params.textHtml=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_select="tooltip";__fest_params={};try{__fest_extend(__fest_params,{
												mix: ["js-module", "valign_middle"],
												mods: ["arrow_left-center", "width_huge"],
												attrs: {
													"data-module": "Dropdown.Tooltip"
												},
												contentParams: {
													mix: ["color_black"]
												}
											})}catch(e){__fest_log_error(e.message)}__fest_params.boxHtml=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_select="text";__fest_params={};try{__fest_extend(__fest_params,{
														mods: ["block", "light_normal", "fixed"],
														mix: ["margin_bottom_10"],
														text: "Материалы в вашей ленте подобраны на основе вашего статуса и возраста ваших детей"
													})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;});__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_select="link";__fest_params={};try{__fest_extend(__fest_params,{
														mix: ["js-tooltip__btn"],
														icon: {
															mods: ["tooltip", "circle", "circle_size_18", "line_height_10"],
															mix: ["color_white", "valign_middle"],
															position: "right",
															icon: {
																mods: ["svg", "size_10", "fill_white"],
																name: "icon_question"
															}
														}
													})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);__fest_select="deti-feed__grid";__fest_params={};try{__fest_extend(__fest_params,{
										mix: ["js-feed__cont"],
										data: feed
									})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,{
										mix: ["js-module"],
										attrs: {
											"data-module": "TrackBlocks",
											"data-counter-type": "rbmail",
											"data-counter-id": "30795335"
										}
									})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);__fest_buf+=("<div class=\"deti-feed__more\">");__fest_select="button";__fest_params={};try{__fest_extend(__fest_params,{
											mix: ["js-feed__btn"],
											attrs: {
												"name": "clb28023778"
											},
											loader: true,
											text: "Показать еще",
											icon: {
												mods: ["fill_dark", "size_10"],
												useSrc: json.CONSTANTS.target.svg.src,
												name: "icon_arrow_down",
												position: "right"
											}
										})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);__fest_buf+=("</div>");return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}return __fest_buf;};__fest_blocks.icon__svg_defs=function(params){var __fest_buf="";__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,fest._helpers.mergeTopParams(
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
				})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;};__fest_blocks.hdr__ending=function(params){var __fest_buf="";try{__fest_element=params.href ? 'a' : 'span';if(typeof __fest_element !== "string"){__fest_log_error("Element name must be a string");__fest_element="div"}}catch(e){__fest_element="div";__fest_log_error(e.message);}__fest_element_stack.push(__fest_element);__fest_buf+=("<" + __fest_element);try{__fest_if=params.href}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=(" href=\"");try{__fest_buf+=(params.href)}catch(e){__fest_log_error(e.message + "999");}__fest_buf+=("\"");}__fest_buf+=(" class=\"");try{__fest_buf+=(fest._helpers.classNamesFor('hdr__ending', params))}catch(e){__fest_log_error(e.message + "1005");}__fest_buf+=("\"");var sAttrKey,sAttr,__fest_iterator7;try{__fest_iterator7=params.attrs || {};}catch(e){__fest_iterator={};__fest_log_error(e.message);}for(sAttrKey in __fest_iterator7){sAttr=__fest_iterator7[sAttrKey];try{__fest_select=(sAttrKey)}catch(e){__fest_select="";__fest_log_error(e.message)}if(__fest_select!==""){__fest_buf+=(" " + __fest_select + "=\"");try{__fest_select=(sAttr)}catch(e){__fest_select="";__fest_log_error(e.message)}__fest_buf+=(__fest_select);__fest_buf+=("\"");}}__fest_element=__fest_element_stack[__fest_element_stack.length-1];__fest_buf+=(__fest_element in __fest_short_tags?"/>":">");try{__fest_if=params.text}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.text)}catch(e){__fest_log_error(e.message + "1015");}}__fest_element = __fest_element_stack[__fest_element_stack.length - 1];if(!(__fest_element in __fest_short_tags)){__fest_buf+=("</" + __fest_element + ">")}__fest_element_stack.pop();return __fest_buf;};__fest_blocks.text=function(params){var __fest_buf="";__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'text',
					tagName: params.tag || 'span',
					html: params.text || params.html
				})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;};__fest_blocks.badge=function(params){var __fest_buf="";__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					tagName: params.tagName || 'span',
					baseClass: 'badge'
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=params.src}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_attrs[0]=__fest_escapeHTML(params.src)}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<img src=\"" + __fest_attrs[0] + "\" class=\"badge__icon\"/>");}try{__fest_if=params.text}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<span class=\"badge__text\">");try{__fest_buf+=(params.text)}catch(e){__fest_log_error(e.message + "1059");}__fest_buf+=("</span>");}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks["deti-feed__item-post"]=function(params){var __fest_buf="";try{var getByPath = fest._helpers.getByPath;
			var data = params.data;
			var item = data && data.item;
			var badge = item && item.badge;}catch(e){__fest_log_error(e.message);}try{__fest_if=item}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,{
						baseClass: "deti-feed__item-post",
						mix: ["padding_20"]
					})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=badge}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="badge";__fest_params={};try{__fest_extend(__fest_params,{
									mods: [badge.type],
									mix: ["deti-feed__label"],
									text: badge.title
								})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}__fest_select="avatar";__fest_params={};try{__fest_extend(__fest_params,{
								mix: ["margin_top_20"],
								mods: ["small"],
								src: item.post && item.post.src
							})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);try{__fest_if=item.post}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<div class=\"deti-feed__post-info\">");try{__fest_buf+=(item.post.name)}catch(e){__fest_log_error(e.message + "1110");}try{__fest_if=item.post.data}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=(", <time class=\"deti-feed__time\">");try{__fest_buf+=(getByPath("post.date.display",item))}catch(e){__fest_log_error(e.message + "1114");}__fest_buf+=("</time>");}__fest_buf+=("</div>");}__fest_select="deti-feed__item-header";__fest_params={};try{__fest_extend(__fest_params,{
								data: item
							})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);__fest_select="deti-feed__item-footer";__fest_params={};try{__fest_extend(__fest_params,{
								data: item
							})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}return __fest_buf;};__fest_blocks.icon=function(params){var __fest_buf="";try{var svg = params.svg;}catch(e){__fest_log_error(e.message);}__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,fest._helpers.mergeTopParams(
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
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=svg && svg.name}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="icon__svg_defs";__fest_params={};try{__fest_params=svg}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.icon}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="icon";__fest_params={};try{__fest_params=params.icon}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "1178");}}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.icon=function(params){var __fest_buf="";try{var useSrc = params.useSrc || fest._helpers.getByPath("CONSTANTS.target.svg.src", json);
			var isSvg = !!(useSrc && params.name);}catch(e){__fest_log_error(e.message);}__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,{
					tagName: isSvg ? "svg" : "i",
					baseClass: "icon"
				})}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=isSvg}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,{
								tagName: "use",
								attrs: {
									"xlink:href": useSrc + "#" + params.name
								}
							})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.icon}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="icon";__fest_params={};try{__fest_extend(__fest_params,params.icon)}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "1220");}}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.tooltip=function(params){var __fest_buf="";try{var scrollParams = params.scrollParams;

			if (scrollParams) {
				params.mods = ['scroll'].concat(params.mods || []);
			}}catch(e){__fest_log_error(e.message);}__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'tooltip'
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,{
								baseClass: 'tooltip__wrapper'
							})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "1257");}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}try{__fest_if=params.boxHtml || params.boxParams || params.innerParams}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="tooltip__box";__fest_params={};try{__fest_extend(__fest_params,params.boxParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
								scrollParams: scrollParams,
								innerParams: params.innerParams,
								contentParams: params.contentParams,
								html: params.boxHtml,
								close: params.close
							})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.link=function(params){var __fest_buf="";try{var textParams = params.textParams || {
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
							})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=iconPosition == 'right'}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="icon";__fest_params={};try{__fest_params=icon}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.button=function(params){var __fest_buf="";try{var icon = params.icon;
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
								})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=iconPosition == 'right'}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="icon";__fest_params={};try{__fest_params=icon}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "1466");}}__fest_buf+=("</span>");return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.photo=function(params){var __fest_buf="";try{var actionParams = params.actionParams || {mix: params.actionMix};
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
									})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;var i,label,__fest_to8,__fest_iterator8;try{__fest_iterator8=labelsItems || [];__fest_to8=__fest_iterator8.length;}catch(e){__fest_iterator8=[];__fest_to8=0;__fest_log_error(e.message);}for(i=0;i<__fest_to8;i++){label=__fest_iterator8[i];__fest_select="badge";__fest_params={};try{__fest_extend(__fest_params,label)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,fest._helpers.mergeTopParams(
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
							})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=params.count}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<span class=\"photo__count\">");try{__fest_buf+=(__fest_escapeHTML(params.count))}catch(e){__fest_log_error(e.message + "1598");}__fest_buf+=("</span>");}try{__fest_if=params.icon}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<span class=\"photo__icon\">");__fest_select="icon";__fest_params={};try{__fest_params=params.icon}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);__fest_buf+=("</span>");}try{__fest_if=params.param}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,{
											tagName: 'span',
											baseClass: 'photo__param'
										})}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,params.paramParams)}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_buf+=(__fest_escapeHTML(params.param))}catch(e){__fest_log_error(e.message + "1622");}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}try{__fest_if=params.title || params.titleNoescape}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,{
											tagName: 'span',
											baseClass: 'photo__title'
										})}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,params.titleParams)}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=params.titleNoescape}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.titleNoescape)}catch(e){__fest_log_error(e.message + "1639");}}else{try{__fest_buf+=(__fest_escapeHTML(params.title))}catch(e){__fest_log_error(e.message + "1642");}}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}try{__fest_if=params.subtitle || params.subtitleNoescape}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<span class=\"photo__subtitle\">");try{__fest_if=params.subtitleNoescape}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.subtitleNoescape)}catch(e){__fest_log_error(e.message + "1655");}}else{try{__fest_buf+=(__fest_escapeHTML(params.subtitle))}catch(e){__fest_log_error(e.message + "1660");}}__fest_buf+=("</span>");}try{__fest_if=params.captionHtml}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.captionHtml)}catch(e){__fest_log_error(e.message + "1669");}}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "1678");}}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.hdr=function(params){var __fest_buf="";try{// обрабатываем текст без item'а
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
							})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.items}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<div class=\"hdr__wrapper\">");var i,item,__fest_to9,__fest_iterator9;try{__fest_iterator9=params.items || [];__fest_to9=__fest_iterator9.length;}catch(e){__fest_iterator9=[];__fest_to9=0;__fest_log_error(e.message);}for(i=0;i<__fest_to9;i++){item=__fest_iterator9[i];try{item.mods = item.mods || [];
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
												} || item.text)}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=item.ending}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="hdr__ending";__fest_params={};try{__fest_params=item.ending}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.textHtml}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.textHtml)}catch(e){__fest_log_error(e.message + "1800");}}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}__fest_buf+=("</div>");}try{__fest_if=params.label}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="label";__fest_params={};try{__fest_params=params.label}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "1819");}}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};try{var data = json;
		var items = data && data.items;
		json.CONSTANTS = {
			target: {
				svg: {src:"/_/NmRN9c_H2sQkmAhZqErPkpHdzlw.svg"}
			}
		};}catch(e){__fest_log_error(e.message);}try{__fest_if=items && items.length}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){var i,item,__fest_to10,__fest_iterator10;try{__fest_iterator10=items || [];__fest_to10=__fest_iterator10.length;}catch(e){__fest_iterator10=[];__fest_to10=0;__fest_log_error(e.message);}for(i=0;i<__fest_to10;i++){item=__fest_iterator10[i];try{var isMywidget = !item.isCustom && (item.type != "service");}catch(e){__fest_log_error(e.message);}__fest_select="deti-feed__item";__fest_params={};try{__fest_extend(__fest_params,{
						data: {
							item: item
						},
						itemParams: {
							mods: ['loaded'],
							mix: [].concat( isMywidget ? ["js-feed__mywidget"] : [] ),
							attrs: item.doc_id && item.source_id && {
								"data-doc": item.doc_id,
								"data-source": item.source_id,
								"data-show-pxls": item.show_pxls,
								"data-click-pxls": item.click_pxls
							}
						}
					})}catch(e){__fest_log_error(e.message)}__fest_chunks.push(__fest_buf,{name:__fest_select,params:__fest_params,cp:false});__fest_buf="";}}__fest_to=__fest_chunks.length;if (__fest_to) {__fest_iterator = 0;for (;__fest_iterator<__fest_to;__fest_iterator++) {__fest_chunk=__fest_chunks[__fest_iterator];if (typeof __fest_chunk==="string") {__fest_html+=__fest_chunk;} else {__fest_fn=__fest_blocks[__fest_chunk.name];if (__fest_fn) __fest_html+=__fest_call(__fest_fn,__fest_chunk.params,__fest_chunk.cp);}}return __fest_html+__fest_buf;} else {return __fest_buf;}};

	if (typeof define === 'function' && define.amd) {
		define(function () {
			return template;
		});
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = template;
	} else {
		if(!x.fest)x.fest={};
		x.fest['ct-feed-items.xml']=template;
	}
}(new Function('return this')()));
/* end: ./ct-feed-items.tmp.fest.js */