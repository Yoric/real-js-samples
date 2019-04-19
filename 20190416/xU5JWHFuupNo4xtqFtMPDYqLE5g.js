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
/* begin: ../../../blocks/web/deti-comment/deti-comment.helpers.js */
(function(global) {
	"strict";
	var cpf = global.ru.mail.cpf;
	var basic = cpf.Basic;
	var extend = basic.Extend;

	extend(global.getNameSpace("fest._helpers.comments"), {
		commentParams: function(comment, useSrc) {
			function icon(name) {
				return {
					useSrc: useSrc,
					name: "icon_" + name,
					mods: ["comment-action", "fill_current-color", name]
				};
			}

			var permissions = comment.permissions || {};
			var banUser = permissions.ban_user;
			var commentParams = {
				actions: [
					{
						type: "reply",
						text: "Ответить",
						icon: icon("comment"),
						mix: ["js-comments_reply", "comment__action_visibled"]
					},
					{
						type: "link",
						text: "Ссылка",
						icon: icon("status_link"),
						href: comment.href
					},
					{
						type: "abuse",
						text: "Пожаловаться",
						icon: icon("status_warning-triangle"),
						mix: ["js-comments_complaint", "comment__action_complaint"],
						textMix: ["js-comments_complaint_text"]
					},
					{
						type: "delete",
						text: "Удалить",
						icon: icon("delete_round"),
						mix: ["js-comments_delete", "comment__action_delete"],
						textMix: ["js-comments_complaint_text"]
					},
					{
						type: "delete_admin",
						text: "Удалить",
						icon: icon("delete_round"),
						ending: "(модератор)",
						mix: [
							"js-comments_admin_delete",
							"comment__action_delete",
							"comment__action_delete_admin"
						],
						endingMix: ["comment__action-ending"],
						textMix: ["js-comments_complaint_text"]
					},
					{
						type: "ban",
						text: "Забанить пользователя",
						icon: icon("ban"),
						mix: ["js-show_form", "js-comments_ban"].concat(
							comment.author.is_banned ? "hidden_all" : []
						),
						attrs: banUser && {
							"data-comment-id": comment.id,
							"data-module": "AsyncForms.Comments.BanUser",
							onclick:
								"return " +
								JSON.stringify({
									AsyncForms: {
										options: {
											serverApi: {
												send: {
													url: comment.proxy_href
												}
											},
											templateParams: {
												form: {
													fields: {
														reason: {
															label: "Причина",
															name: "reason",
															type: "select",
															items: (banUser.reasons_list || []).map(function(
																item
															) {
																return [item.reason_id, item.reason_name];
															})
														},
														comment: {
															label: "Комментарий",
															name: "self_reason",
															type: "textarea"
														},
														period: {
															label: "Период",
															name: "period",
															type: "select",
															items: (banUser.periods_list || []).map(function(
																item
															) {
																return [item.period_id, item.period_name];
															})
														},
														email: {
															type: "hidden",
															name: "email",
															value: comment.author.email
														}
													}
												}
											},
											commentId: comment.id
										}
									}
								})
						}
					},
					{
						type: "ban",
						text: "Пользователь забанен",
						mods: [],
						mix: ["js-comments_banned"].concat(
							comment.author.is_banned ? [] : "hidden_all"
						)
					},
					{
						type: "goto_admin_panel",
						text: "Перейти в админку",
						href: comment.moder_url,
						ending: "(модератор)"
					}
				].filter(function(action) {
					var name = {
						reply: "post_reply",
						delete: "hide_reply_by_self",
						delete_admin: "hide_reply",
						ban: "ban_user",
						goto_admin_panel: "hide_reply"
					}[action.type];
					var perm = name && permissions[name];

					if (name) {
						return perm && !!perm.status;
					}

					return true;
				})
			};

			var removedParams = {
				removedParams: {
					mix: ["js-module"],
					attrs: {
						"data-module": "ShowPopupModel",
						"data-view": "ShowPopup.CommentRules"
					}
				}
			};

			return extend({}, comment, commentParams, removedParams);
		}
	});
})(new Function("return this")()); // eslint-disable-line

/* end: ../../../blocks/web/deti-comment/deti-comment.helpers.js */
/* begin: ./ct-comment.tmp.fest.js */

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
			}}catch(e){__fest_log_error(e.message);}try{__fest_element=((attrs.href && 'a') || params.tagName || 'div');if(typeof __fest_element !== "string"){__fest_log_error("Element name must be a string");__fest_element="div"}}catch(e){__fest_element="div";__fest_log_error(e.message);}__fest_element_stack.push(__fest_element);__fest_buf+=("<" + __fest_element);__fest_buf+=(" class=\"");try{__fest_select=(fest._helpers.classNamesFor(baseClass, blockParams))}catch(e){__fest_select="";__fest_log_error(e.message)}__fest_buf+=(__fest_select);__fest_buf+=("\"");var attrName,attrValue,__fest_iterator0;try{__fest_iterator0=attrs || {};}catch(e){__fest_iterator={};__fest_log_error(e.message);}for(attrName in __fest_iterator0){attrValue=__fest_iterator0[attrName];try{__fest_select=(attrName)}catch(e){__fest_select="";__fest_log_error(e.message)}if(__fest_select!==""){__fest_buf+=(" " + __fest_select + "=\"");try{__fest_buf+=(__fest_escapeHTML(attrValue))}catch(e){__fest_log_error(e.message + "28");}__fest_buf+=("\"");}}var attrName,attrValue,__fest_iterator1;try{__fest_iterator1=params.attrsNoEscape || {};}catch(e){__fest_iterator={};__fest_log_error(e.message);}for(attrName in __fest_iterator1){attrValue=__fest_iterator1[attrName];try{__fest_select=(attrName)}catch(e){__fest_select="";__fest_log_error(e.message)}if(__fest_select!==""){__fest_buf+=(" " + __fest_select + "=\"");try{__fest_buf+=(attrValue)}catch(e){__fest_log_error(e.message + "33");}__fest_buf+=("\"");}}__fest_element=__fest_element_stack[__fest_element_stack.length-1];__fest_buf+=(__fest_element in __fest_short_tags?"/>":">");try{__fest_if=params.htmlPrepend}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.htmlPrepend)}catch(e){__fest_log_error(e.message + "39");}}try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "42");}}try{__fest_if=params.elem}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_params=params.elem}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.elems}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){var i,elem,__fest_to2,__fest_iterator2;try{__fest_iterator2=params.elems || [];__fest_to2=__fest_iterator2.length;}catch(e){__fest_iterator2=[];__fest_to2=0;__fest_log_error(e.message);}for(i=0;i<__fest_to2;i++){elem=__fest_iterator2[i];try{__fest_if=elem}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_params=elem}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}}}try{__fest_if=params.htmlAppend}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.htmlAppend)}catch(e){__fest_log_error(e.message + "55");}}__fest_element = __fest_element_stack[__fest_element_stack.length - 1];if(!(__fest_element in __fest_short_tags)){__fest_buf+=("</" + __fest_element + ">")}__fest_element_stack.pop();return __fest_buf;};__fest_blocks.avatar=function(params){var __fest_buf="";try{var retinaSize = { 32: 90, 45: 90 };
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
				})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;};__fest_blocks.scroll=function(params){var __fest_buf="";try{params.type = params.type || 'vertical';

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
								})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "190");}}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.comment__actions=function(params){var __fest_buf="";try{var mergeTopParams = fest._helpers.mergeTopParams;

			var permissions = params.permissions || {};

			// Параметр `name` передаётся для svg-иконок. Шрифтовые иконки он не аффектит.
			var actionList = [
				{
					type: 'reply', text: 'Ответить', icon: { mods: ['comment'], name: 'icon_actions_comments' },
					mix: ['js-comments_reply', 'comment__action_visibled']
				},
				{
					type: 'link', text: 'Ссылка', icon: {mods: ['link'], name: 'icon_status_link'}, href: params.href
				},
				{
					type: 'abuse', text: 'Пожаловаться', icon: {mods: ['abuse'], name: 'icon_status_warning-triangle'},
					mix: ['js-comments_complaint', 'comment__action_complaint'],
					textMix: ['js-comments_complaint_text']
				},
				{
					type: 'delete', text: 'Удалить', icon: {mods: ['delete_round'], name: 'icon_actions_delete'},
					mix: ['js-comments_delete', 'comment__action_delete'],
					textMix: ['js-comments_complaint_text']
				},
				{
					type: 'delete_admin', text: 'Удалить', icon: {mods: ['delete_round'], name: 'icon_actions_delete'}, ending: '(модератор)',
					mix: ['js-comments_admin_delete', 'comment__action_delete', 'comment__action_delete_admin'],
					endingMix: ['comment__action-ending'],
					textMix: ['js-comments_complaint_text']
				},
				{
					type: 'ban', text: 'Забанить пользователя', icon: {mods: ['ban']},
					mix: ['js-show_form'],
					attrs: { 'data-module': 'AsyncForms.BanUser', 'data-email': params.author.email, 'data-reply-id': params.id },
					textMix: ['js-comments_complaint_text']
				},
				{
					type: 'goto_admin_panel', text: 'Перейти в админку', href: params.moder_url, ending: '(модератор)'
				}
			].filter(function(oItem) {
				switch (oItem.type) {
					case 'reply':
						var actionPermissions = permissions.post_reply;
						return actionPermissions && !!actionPermissions.status;
						break;
					case 'delete':
						var actionPermissions = permissions.hide_reply_by_self;
						return actionPermissions && !!actionPermissions.status;
						break;
					case 'delete_admin':
						var actionPermissions = permissions.hide_reply;
						return actionPermissions && !!actionPermissions.status;
						break;
					case 'ban':
						var actionPermissions = permissions.ban_user;
						return actionPermissions && !!actionPermissions.status;
						break;
					case 'goto_admin_panel':
						var actionPermissions = permissions.hide_reply;
						return actionPermissions && !!actionPermissions.status;
						break;
					default:
						return true;
						break;
				}
			});

			var actions = params.actions || actionList || [];

			var callbackParams = params.callbackParams;}catch(e){__fest_log_error(e.message);}try{__fest_if=actions.length}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("\u003C!--noindex--\u003E<div class=\"comment__actions\">");var i,action,__fest_to3,__fest_iterator3;try{__fest_iterator3=actions || [];__fest_to3=__fest_iterator3.length;}catch(e){__fest_iterator3=[];__fest_to3=0;__fest_log_error(e.message);}for(i=0;i<__fest_to3;i++){action=__fest_iterator3[i];__fest_select="link";__fest_params={};try{__fest_extend(__fest_params,action)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,mergeTopParams(action, {
								mods: action.mods || ['dotted', 'black', 'pointer'],
								mix: ['comment__action']
							}))}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
								endingParams: {
									mix: ['comment__action-ending']
								}
							})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}__fest_buf+=("</div>\u003C!--\/noindex--\u003E");}try{__fest_if=callbackParams && callbackParams.actionsOther && callbackParams.actionsOtherTemplate}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_select=(callbackParams.actionsOtherTemplate)}catch(e){__fest_select="";__fest_log_error(e.message)}__fest_params={};try{__fest_extend(__fest_params,callbackParams.actionsOther)}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}return __fest_buf;};__fest_blocks.icon__svg_defs=function(params){var __fest_buf="";__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,fest._helpers.mergeTopParams(
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
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_buf+=("<use xlink:href=\"");try{__fest_select="#icon__svg_"+(params.name)}catch(e){__fest_select="";__fest_log_error(e.message)}__fest_buf+=(__fest_select);__fest_buf+=("\"></use>");return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.text=function(params){var __fest_buf="";__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'text',
					tagName: params.tag || 'span',
					html: params.text || params.html
				})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;};__fest_blocks["deti-comment"]=function(params){var __fest_buf="";try{var commentParams = fest._helpers.comments.commentParams(params.data, json.CONSTANTS.target.svg.src);}catch(e){__fest_log_error(e.message);}__fest_select="comment";__fest_params={};try{__fest_extend(__fest_params,commentParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,params.commentParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,fest._helpers.mergeTopParams(commentParams, params.commentParams))}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;};__fest_blocks.icon=function(params){var __fest_buf="";try{var svg = params.svg;}catch(e){__fest_log_error(e.message);}__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,fest._helpers.mergeTopParams(
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
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=svg && svg.name}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="icon__svg_defs";__fest_params={};try{__fest_params=svg}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.icon}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="icon";__fest_params={};try{__fest_params=params.icon}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "425");}}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.icon=function(params){var __fest_buf="";try{var useSrc = params.useSrc || fest._helpers.getByPath("CONSTANTS.target.svg.src", json);
			var isSvg = !!(useSrc && params.name);}catch(e){__fest_log_error(e.message);}__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,{
					tagName: isSvg ? "svg" : "i",
					baseClass: "icon"
				})}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=isSvg}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,{
								tagName: "use",
								attrs: {
									"xlink:href": useSrc + "#" + params.name
								}
							})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.icon}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="icon";__fest_params={};try{__fest_extend(__fest_params,params.icon)}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "467");}}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.like=function(params){var __fest_buf="";try{var data = params.data || {};
			var dataCount = parseInt(data.count, 10) || 0;
			var controlParams;}catch(e){__fest_log_error(e.message);}__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,fest._helpers.mergeTopParams({
					mods: dataCount !== 0 ? ['count'] : []
				}, params))}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'like'
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params.countParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
							baseClass: 'like__count',
							html: dataCount > 0 ? ('+' + dataCount) : String(dataCount)
						})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params.controlsParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
							baseClass: 'like__controls'
						})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;var i,type,__fest_to4,__fest_iterator4;try{__fest_iterator4=['like', 'dislike'] || [];__fest_to4=__fest_iterator4.length;}catch(e){__fest_iterator4=[];__fest_to4=0;__fest_log_error(e.message);}for(i=0;i<__fest_to4;i++){type=__fest_iterator4[i];try{controlParams = params[type + 'Params'];}catch(e){__fest_log_error(e.message);}try{__fest_if=controlParams}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,controlParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,fest._helpers.mergeTopParams(controlParams, {
											mods: [type]
										}))}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
											baseClass: 'like__control'
										})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=controlParams.icon}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="icon";__fest_params={};try{__fest_extend(__fest_params,controlParams.icon)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,fest._helpers.mergeTopParams(controlParams.icon, {
														mix: ['like__icon']
													}))}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.tooltip=function(params){var __fest_buf="";try{var scrollParams = params.scrollParams;

			if (scrollParams) {
				params.mods = ['scroll'].concat(params.mods || []);
			}}catch(e){__fest_log_error(e.message);}__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'tooltip'
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=params.html}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,{
								baseClass: 'tooltip__wrapper'
							})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_buf+=(params.html)}catch(e){__fest_log_error(e.message + "583");}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}try{__fest_if=params.boxHtml || params.boxParams || params.innerParams}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="tooltip__box";__fest_params={};try{__fest_extend(__fest_params,params.boxParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
								scrollParams: scrollParams,
								innerParams: params.innerParams,
								contentParams: params.contentParams,
								html: params.boxHtml,
								close: params.close
							})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.comment__like=function(params){var __fest_buf="";try{var like = params;
			var tooltip = like.tooltip;
			var mergeTopParams = fest._helpers.mergeTopParams;}catch(e){__fest_log_error(e.message);}__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,like)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'comment__like'
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=tooltip}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="tooltip";__fest_params={};try{__fest_extend(__fest_params,tooltip)}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_select="like";__fest_params={};try{__fest_extend(__fest_params,like.like)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
											controlsParams: mergeTopParams(like.like.controlsParams, {
													mix: ['comment__like-controls']
												}
											),
											countParams: mergeTopParams(like.like.countParams, {
													mix: ['comment__like-count']
												}
											)
										})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;});__fest_params.boxHtml=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_select="text";__fest_params={};try{__fest_extend(__fest_params,mergeTopParams(tooltip.textParams, {
											mods: ['light_small']
										}))}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=tooltip.text}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(__fest_escapeHTML(tooltip.text))}catch(e){__fest_log_error(e.message + "664");}}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}else{__fest_select="like";__fest_params={};try{__fest_extend(__fest_params,like.like)}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.link=function(params){var __fest_buf="";try{var textParams = params.textParams || {
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
							})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=iconPosition == 'right'}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="icon";__fest_params={};try{__fest_params=icon}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.comment__info=function(params){var __fest_buf="";try{var mergeTopParams = fest._helpers.mergeTopParams;

			var isTopic = params.isTopic;

			var author = params.author;
			var date = params.created_at;
			var datetime, displayDate;

			var afterAuthorHtml = params.afterAuthorHtml;

			var parent = isTopic && params.parent_reply;
			var parentAuthor = parent && parent.author;

			if (date) {
				if (typeof date === 'string') {
					displayDate = date;
					datetime = date.replace(' ', 'T') + '+03:00';
				} else if ('rfc3339' in date && 'display' in date) {
					displayDate = date.display;
					datetime = date.rfc3339;
				}
			}}catch(e){__fest_log_error(e.message);}__fest_buf+=("\u003C!--noindex--\u003E");__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params.info)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'comment__info'
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=author && author.nick}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,{
								baseClass: 'comment__info-item',
								tagName: 'span',
								html: author.nick
							})}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,author)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,mergeTopParams(author, {
								mods: ['author']
							}))}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=author.is_official}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="tooltip";__fest_params={};try{__fest_extend(__fest_params,{
								contentParams: {
									mix: ['color_black']
								},
								boxHtml: 'Официальный аккаунт'
							})}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,params.iconTooltip)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,fest._helpers.mergeTopParams(
								params.iconTooltip,
								{
									mods: ['width_medium', 'hover', 'arrow_left-center']
								}
							))}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_select="icon";__fest_params={};try{__fest_extend(__fest_params,params.iconOfficial)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,fest._helpers.mergeTopParams(
										params.iconOfficial,
										{
											mix: ['margin_left_10'],
											mods: ['check', 'size_10', 'primary']
										}
									))}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}try{__fest_if=afterAuthorHtml}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(afterAuthorHtml)}catch(e){__fest_log_error(e.message + "878");}}try{__fest_if=parentAuthor}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="link";__fest_params={};try{__fest_params={
							mods: ['dotted', 'black', 'pointer'],
							text: 'В ответ на ' + parentAuthor.nick,
							mix: ['margin_left_10'].concat(params.historyParentLinkMix || ['js-comments_parent']),
							href: parent.href
						}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=date && displayDate}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,{
								baseClass: 'comment__info-item',
								tagName: 'time',
								html: displayDate
							})}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,mergeTopParams(
								{
									mix: ['js-ago', 'js-ago-wrapper'],
									attrs: {
										datetime: datetime
									},
									mods: isTopic ? ['date'] : []
								},
								params.timeParams
							))}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}var i,item,__fest_to5,__fest_iterator5;try{__fest_iterator5=params.info_items || [];__fest_to5=__fest_iterator5.length;}catch(e){__fest_iterator5=[];__fest_to5=0;__fest_log_error(e.message);}for(i=0;i<__fest_to5;i++){item=__fest_iterator5[i];__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,item)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
								baseClass: 'comment__info-item',
								tagName: 'span',
								html: item.text,
								href: item.href
							})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);__fest_buf+=("\u003C!--\/noindex--\u003E");return __fest_buf;};__fest_blocks.comment__history=function(params){var __fest_buf="";try{var parent = params.parent_reply;
			var count = params.depth_level - 1;

			var parentAuthor = parent && parent.author;
			var historyParams = {
				mods: params.historyMods || [],
				mix: params.historyMix || []
			};

			parent.bansLink = params.bansLink;
			parent.bansParams = params.bansParams;
			parent.removedParams = params.removedParams;
			parent.avatarSize = 45;
			parent.attrs = {
				'data-id': params.id,
				'id': 'parent-comment-' + params.id
			};}catch(e){__fest_log_error(e.message);}__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,historyParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'comment__history'
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_buf+=("<span class=\"comment__history-text\">В ответ на</span> ");__fest_select="link";__fest_params={};try{__fest_params={
						mods: ['dotted', 'black', 'pointer'],
						text: 'комментарий',
						mix: params.historyParentLinkMix || ['js-comments_parent'],
						href: parent.href
					}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);__fest_buf+=(" <span class=\"comment__history-text\">от ");__fest_select="element";__fest_params={};try{__fest_params={
							baseClass: 'comment__for',
							tagName: 'span',
							href: parentAuthor.href,
							html: parentAuthor.nick
						}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);__fest_buf+=("</span>");try{__fest_if=count > 1}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=(" ");__fest_select="link";__fest_params={};try{__fest_params={
							mods: ['dotted', 'black', 'pointer'],
							mix: params.historyTreeLinkMix || ['js-comments_history'],
							text: 'История переписки',
							icon: {
								position: 'right',
								mods: ['count'],
								mix: ['comment__count'],
								html: count
							}
						}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);try{__fest_if=parent}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,{
						baseClass: 'comment__parent',
						mix: params.historyParentMix || ['js-comments_parent_cont']
					})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_select="comment";__fest_params={};try{__fest_params=parent}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}try{__fest_if=count > 0}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_params={
					baseClass: 'comment__tree',
					mix: params.historyTreeMix || ['js-comments_history_cont']
				}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}return __fest_buf;};__fest_blocks.comment__history=function(params){var __fest_buf="";try{var parent = params.parent_reply;
			var count = params.depth_level - 1;

			var parentAuthor = parent && parent.author;
			var historyParams = {
				mods: params.historyMods || [],
				mix: params.historyMix || []
			};

			parent.bansLink = params.bansLink;
			parent.bansParams = params.bansParams;
			parent.removedParams = params.removedParams;
			parent.avatarSize = 45;
			parent.attrs = {
				'data-id': params.id,
				'id': 'parent-comment-' + params.id
			};}catch(e){__fest_log_error(e.message);}__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,historyParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'comment__history'
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_buf+=("<span class=\"comment__history-text\">В ответ на</span> ");__fest_select="link";__fest_params={};try{__fest_params={
						mods: ['dotted', 'black', 'pointer'],
						text: 'комментарий',
						mix: params.historyParentLinkMix || ['js-comments_parent'],
						href: parent.href
					}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);__fest_buf+=(" <span class=\"comment__history-text\">от ");__fest_select="element";__fest_params={};try{__fest_params={
							baseClass: 'comment__for',
							tagName: 'span',
							href: parentAuthor.href,
							html: parentAuthor.nick
						}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);__fest_buf+=("</span>");try{__fest_if=count > 1}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=(" ");__fest_select="link";__fest_params={};try{__fest_params={
							mods: ['dotted', 'black', 'pointer'],
							mix: params.historyTreeLinkMix || ['js-comments_history'],
							text: 'История переписки',
							icon: {
								position: 'right',
								mods: ['count'],
								mix: ['comment__count'],
								html: count
							}
						}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);try{__fest_if=parent}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,{
						baseClass: 'comment__parent',
						mix: params.historyParentMix || ['js-comments_parent_cont']
					})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_select="deti-comment";__fest_params={};try{__fest_params={
							data: parent
						}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}try{__fest_if=count > 0}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_params={
					baseClass: 'comment__tree',
					mix: params.historyTreeMix || ['js-comments_history_cont']
				}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}return __fest_buf;};__fest_blocks.comment__bans=function(params){var __fest_buf="";try{var bansLink = params.bansLink || {};}catch(e){__fest_log_error(e.message);}__fest_buf+=("\u003C!--noindex--\u003E");__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params.bansParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'comment__bans'
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_select="link";__fest_params={};try{__fest_extend(__fest_params,bansLink)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
							text: (bansLink.text || 'Список банов') + ' (' + params.bans_cnt + ')'
						})}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,fest._helpers.mergeTopParams({
							mods: ['dotted', 'black', 'pointer'],
							attrs: {
								'data-email': params.author.email
							}
						}, bansLink))}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);__fest_buf+=("\u003C!--\/noindex--\u003E");return __fest_buf;};__fest_blocks.comment_topic=function(params){var __fest_buf="";try{var mergeTopParams = fest._helpers.mergeTopParams;

			var isDeleted = !!params.is_hidden;
			var isCurrentUser = !!params.is_current_user;

			var depthLevel = params.depth_level;
			var author = params.author || {};
			var parent = params.parent_reply;
			var like = params.like;

			var permissions = params.permissions || {};
			var permissionsHideModer = permissions.hide_reply && !!permissions.hide_reply.status;}catch(e){__fest_log_error(e.message);}__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'comment',
					href: null
				})}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,mergeTopParams(
					params,
					{
						mix: params.mix || ['js-comments_comment'],
						mods: ['topic'].concat(like && like.tooltip && ['tooltip'] || []),
						attrs: params.attrs || {
							'data-id': params.id,
							id: 'comment-' + params.id
						}
					},
					isDeleted ? { mods: ['deleted'] } : null,
					isDeleted && permissionsHideModer ? {
						mods: ['hidden-moder']
					} : null,
					isCurrentUser ? { mods: ['current'] } : null,
					depthLevel ? { mods: ['topic_level_' + Math.min(depthLevel, 3)] } : null,
					params.clbScroll ? {
						attrs: {
							'data-counter': params.clbScroll
						},
						mix: ['js-track_scroll']
					} : null
				))}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=isDeleted && !permissionsHideModer}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="link";__fest_params={};try{__fest_params={
								mix: ['margin_left_10'],
								icon: {
									mods: ['delete_rect'],
									mix: ['color_red_normal']
								},
								text: 'Комментарий удален.'
							}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);__fest_select="link";__fest_params={};try{__fest_params={
								mods: ['dashed'],
								mix: ['margin_left_5', 'js-comments_rules'],
								href: '#rules',
								text: 'Почему?'
							}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}else{__fest_buf+=("\u003C!--noindex--\u003E<div class=\"comment__left\">");__fest_select="avatar";__fest_params={};try{__fest_params={
									src: author.src,
									user: {
										name: author.nick,
										email: author.email,
										domain: author.domain,
										filin_domain: author.filin_domain,
										filin_d: author.filin_d,
									},
									avatarSize: params.avatarSize || (depthLevel > 1 ? 32 : 45),
									mix: params.avatarMix || ['comment__avatar'],
									href: author.href
								}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);__fest_buf+=("</div>\u003C!--\/noindex--\u003E<div class=\"comment__body\">");try{__fest_if=like}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="comment__like";__fest_params={};try{__fest_extend(__fest_params,like)}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}__fest_select="comment__info";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
										isTopic: true
									})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);try{__fest_if=parent}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{var count = depthLevel - 1;
									var historyParams = {
										mods: params.historyMods || [],
										mix: params.historyMix || []
									};
									parent.avatarSize = 32;
									parent.history = true;
									parent.attrs = {
										'data-id': params.id,
										'id': 'parent-comment-' + params.id
									};}catch(e){__fest_log_error(e.message);}__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,{
											baseClass: 'comment__parent',
											mix: params.historyParentMix || ['js-comments_parent_cont']
										})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_select="comment_topic";__fest_params={};try{__fest_params=parent}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);try{__fest_if=count > 1}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,historyParams)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
														baseClass: 'comment__history'
													})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;__fest_select="link";__fest_params={};try{__fest_params={
															mods: ['dotted', 'black', 'pointer'],
															mix: params.historyTreeLinkMix || ['js-comments_history'],
															text: 'История переписки',
															icon: {
																position: 'right',
																mods: ['count'],
																mix: ['comment__count'],
																html: count
															}
														}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);try{__fest_if=count}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="element";__fest_params={};try{__fest_params={
											baseClass: 'comment__tree',
											mix: params.historyTreeMix || ['js-comments_history_cont']
										}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}}try{__fest_if=params.content_to_web}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<div class=\"comment__text\">");try{__fest_buf+=(params.content_to_web)}catch(e){__fest_log_error(e.message + "1366");}__fest_buf+=("</div>");}__fest_select="comment__actions";__fest_params={};try{__fest_params=params}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);try{__fest_if=params.bans_cnt}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="comment__bans";__fest_params={};try{__fest_params=params}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}__fest_select="element";__fest_params={};try{__fest_params={
									baseClass: 'comment__form',
									mix: params.formMix || ['js-comments_form_cont']
								}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);__fest_buf+=("</div>");}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};__fest_blocks.comment=function(params){var __fest_buf="";try{var mergeTopParams = fest._helpers.mergeTopParams;

			var isDeleted = !!params.is_hidden;
			var isCurrentUser = !!params.is_current_user;
			var isBad = !isDeleted && 'complaints_cnt' in params && parseInt(params.complaints_cnt, 10) > complaintsCountMax;
			var complaintsCountMax = params.complaintsCountMax || 0;

			var author = params.author || {};

			var like = params.like;

			params.mix = params.mix || ['js-comments_comment'];
			params.mods = like && like.tooltip && ['tooltip'] || [];
			params.attrs = params.attrs || {
				'data-id': params.id,
				'id': 'comment-' + params.id
			};}catch(e){__fest_log_error(e.message);}__fest_select="element";__fest_params={};try{__fest_extend(__fest_params,params)}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,mergeTopParams(
					params,
					isDeleted ? { mods: ['deleted'] } : null,
					isBad ? { mods: ['bad'] } : null,
					isCurrentUser ? { mods: ['current'] } : null,
					params.clbScroll ? {
						attrs: {
							'data-counter': params.clbScroll
						},
						mix: ['js-track_scroll']
					} : null
				))}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
					baseClass: 'comment',
					href: null
				})}catch(e){__fest_log_error(e.message)}__fest_params.html=__fest_param(function(){var __fest_buf="",__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn, __fest_params;try{__fest_if=isDeleted}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="link";__fest_params={};try{__fest_params={
								mix: ['margin_left_10'],
								icon: {
									mods: ['delete_rect'],
									mix: ['color_red_normal']
								},
								text: 'Комментарий удален.'
							}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);__fest_select="link";__fest_params={};try{__fest_extend(__fest_params,mergeTopParams(
									params.removedParams,
									{
										mods: ['dashed'],
										mix: ['margin_left_5', 'js-comments_rules']
									}
								))}catch(e){__fest_log_error(e.message)}try{__fest_extend(__fest_params,{
									href: '#rules',
									text: 'Почему?'
								})}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}else{__fest_buf+=("\u003C!--noindex--\u003E<div class=\"comment__left\">");__fest_select="avatar";__fest_params={};try{__fest_params={
									src: author.src,
									user: {
										name: author.nick,
										email: author.email,
										domain: author.domain,
										filin_domain: author.filin_domain,
										filin_d: author.filin_d,
									},
									avatarSize: params.avatarSize || 45,
									mix: params.avatarMix || ['comment__avatar'],
									href: author.href
								}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);__fest_buf+=("</div>\u003C!--\/noindex--\u003E<div class=\"comment__body\">");try{__fest_if=like}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="comment__like";__fest_params={};try{__fest_params=like}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}__fest_select="comment__info";__fest_params={};try{__fest_params=params}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);try{__fest_if=params.parent_reply}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="comment__history";__fest_params={};try{__fest_params=params}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.content_to_web}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<div class=\"comment__text\">");try{__fest_buf+=(params.content_to_web)}catch(e){__fest_log_error(e.message + "1510");}__fest_buf+=("</div>");}__fest_select="comment__actions";__fest_params={};try{__fest_params=params}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);try{__fest_if=params.bans_cnt}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="comment__bans";__fest_params={};try{__fest_params=params}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}__fest_select="element";__fest_params={};try{__fest_params={
									baseClass: 'comment__form',
									mix: params.formMix || ['js-comments_form_cont']
								}}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);__fest_buf+=("</div>");}return __fest_buf;});__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,true);return __fest_buf;};try{json.CONSTANTS = {
			target: {
				svg: { src:"/_/iXvTtsyR9K6YoR2NRrtDPZmTIJk.svg" }
			}
		};}catch(e){__fest_log_error(e.message);}__fest_select="deti-comment";__fest_params={};try{__fest_extend(__fest_params,{
				data: json
			})}catch(e){__fest_log_error(e.message)}__fest_chunks.push(__fest_buf,{name:__fest_select,params:__fest_params,cp:false});__fest_buf="";__fest_to=__fest_chunks.length;if (__fest_to) {__fest_iterator = 0;for (;__fest_iterator<__fest_to;__fest_iterator++) {__fest_chunk=__fest_chunks[__fest_iterator];if (typeof __fest_chunk==="string") {__fest_html+=__fest_chunk;} else {__fest_fn=__fest_blocks[__fest_chunk.name];if (__fest_fn) __fest_html+=__fest_call(__fest_fn,__fest_chunk.params,__fest_chunk.cp);}}return __fest_html+__fest_buf;} else {return __fest_buf;}};

	if (typeof define === 'function' && define.amd) {
		define(function () {
			return template;
		});
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = template;
	} else {
		if(!x.fest)x.fest={};
		x.fest['ct-comment.xml']=template;
	}
}(new Function('return this')()));
/* end: ./ct-comment.tmp.fest.js */