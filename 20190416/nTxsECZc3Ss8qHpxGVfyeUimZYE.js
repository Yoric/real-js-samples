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
/* begin: ./ct-breadcrumb-item.tmp.fest.js */

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
			}}catch(e){__fest_log_error(e.message);}try{__fest_element=((attrs.href && 'a') || params.tagName || 'div');if(typeof __fest_element !== "string"){__fest_log_error("Element name must be a string");__fest_element="div"}}catch(e){__fest_element="div";__fest_log_error(e.message);}__fest_element_stack.push(__fest_element);__fest_buf+=("<" + __fest_element);__fest_buf+=(" class=\"");try{__fest_select=(fest._helpers.classNamesFor(baseClass, blockParams))}catch(e){__fest_select="";__fest_log_error(e.message)}__fest_buf+=(__fest_select);__fest_buf+=("\"");var attrName,attrValue,__fest_iterator0;try{__fest_iterator0=attrs || {};}catch(e){__fest_iterator={};__fest_log_error(e.message);}for(attrName in __fest_iterator0){attrValue=__fest_iterator0[attrName];try{__fest_select=(attrName)}catch(e){__fest_select="";__fest_log_error(e.message)}if(__fest_select!==""){__fest_buf+=(" " + __fest_select + "=\"");try{__fest_buf+=(__fest_escapeHTML(attrValue))}catch(e){__fest_log_error(e.message + "28");}__fest_buf+=("\"");}}var attrName,attrValue,__fest_iterator1;try{__fest_iterator1=params.attrsNoEscape || {};}catch(e){__fest_iterator={};__fest_log_error(e.message);}for(attrName in __fest_iterator1){attrValue=__fest_iterator1[attrName];try{__fest_select=(attrName)}catch(e){__fest_select="";__fest_log_error(e.message)}if(__fest_select!==""){__fest_buf+=(" " + __fest_select + "=\"");try{__fest_buf+=(attrValue)}catch(e){__fest_log_error(e.message + "33");}__fest_buf+=("\"");}}__fest_element=__fest_element_stack[__fest_element_stack.length-1];__fest_buf+=(__fest_element in __fest_short_tags?"/>":">");try{__fest_if=params.htmlPrepend}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.htmlPrepend)}catch(e){__fest_log_error(e.message + "39");}}try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "42");}}try{__fest_if=params.elem}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_params=params.elem}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.elems}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){var i,elem,__fest_to2,__fest_iterator2;try{__fest_iterator2=params.elems || [];__fest_to2=__fest_iterator2.length;}catch(e){__fest_iterator2=[];__fest_to2=0;__fest_log_error(e.message);}for(i=0;i<__fest_to2;i++){elem=__fest_iterator2[i];try{__fest_if=elem}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_params=elem}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}}}try{__fest_if=params.htmlAppend}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.htmlAppend)}catch(e){__fest_log_error(e.message + "55");}}__fest_element = __fest_element_stack[__fest_element_stack.length - 1];if(!(__fest_element in __fest_short_tags)){__fest_buf+=("</" + __fest_element + ">")}__fest_element_stack.pop();return __fest_buf;};__fest_blocks.icon__svg_defs=function(params){var __fest_buf="";__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,fest._helpers.mergeTopParams(
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
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_buf+=("<use xlink:href=\"");try{__fest_select="#icon__svg_"+(params.name)}catch(e){__fest_select="";__fest_log_error(e.message)}__fest_buf+=(__fest_select);__fest_buf+=("\"></use>");return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.icon=function(params){var __fest_buf="";try{var svg = params.svg;}catch(e){__fest_log_error(e.message);}__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,fest._helpers.mergeTopParams(
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
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=svg && svg.name}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="icon__svg_defs";__fest_params={};try{__fest_params=svg}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.icon}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="icon";__fest_params={};try{__fest_params=params.icon}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "142");}}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.icon=function(params){var __fest_buf="";try{var useSrc = params.useSrc || fest._helpers.getByPath("CONSTANTS.target.svg.src", json);
			var isSvg = !!(useSrc && params.name);}catch(e){__fest_log_error(e.message);}__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,{
					tagName: isSvg ? "svg" : "i",
					baseClass: "icon"
				})}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=isSvg}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,{
								tagName: "use",
								attrs: {
									"xlink:href": useSrc + "#" + params.name
								}
							})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.icon}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="icon";__fest_params={};try{__fest_extend(__fest_params,params.icon)}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "184");}}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.link=function(params){var __fest_buf="";try{var textParams = params.textParams || {
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
							})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=iconPosition == 'right'}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="icon";__fest_params={};try{__fest_params=icon}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.note=function(params){var __fest_buf="";try{var tagName = params.tag || params.tagName || 'span';
			var textParams = params.textParams || {};}catch(e){__fest_log_error(e.message);}__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'note',
					tagName: tagName
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=params.icon}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="icon";__fest_params={};try{__fest_params=params.icon}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.text || params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,textParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
								baseClass: 'note__text',
								tagName: textParams.tagName || 'span',
								htmlPrepend: params.text,
								html: params.html
							})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.link}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="link";__fest_params={};try{__fest_params=params.link}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};try{var item = json || {};}catch(e){__fest_log_error(e.message);}try{__fest_if=item.hasBreadcrumbs}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=(", ");}__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,item)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
				tagName: "span",
				baseClass: "breadcrumbs__item",
				href: null
			})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_select="note";__fest_params={};try{__fest_extend(__fest_params,{
						link: item.link && {
							href: item.href,
							text: item.link,
							mix: ["breadcrumbs__link", "color_gray"]
						}
					})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;});__fest_chunks.push(__fest_buf,{name:__fest_select,params:__fest_params,cp:true});__fest_buf="";__fest_to=__fest_chunks.length;if (__fest_to) {__fest_iterator = 0;for (;__fest_iterator<__fest_to;__fest_iterator++) {__fest_chunk=__fest_chunks[__fest_iterator];if (typeof __fest_chunk==="string") {__fest_html+=__fest_chunk;} else {__fest_fn=__fest_blocks[__fest_chunk.name];if (__fest_fn) __fest_html+=__fest_call(__fest_fn,__fest_chunk.params,__fest_chunk.cp);}}return __fest_html+__fest_buf;} else {return __fest_buf;}};

	if (typeof define === 'function' && define.amd) {
		define(function () {
			return template;
		});
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = template;
	} else {
		if(!x.fest)x.fest={};
		x.fest['ct-breadcrumb-item.xml']=template;
	}
}(new Function('return this')()));
/* end: ./ct-breadcrumb-item.tmp.fest.js */