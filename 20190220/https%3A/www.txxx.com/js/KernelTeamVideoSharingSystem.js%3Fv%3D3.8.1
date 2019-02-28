// ============================================================================
// Developed by Kernel Team.
// http://kernel-team.com
// ============================================================================

String.prototype.trim = function() {
	return this.replace(/^\s+/, '').replace(/\s+$/, '');
};

// Common functions for reuse =================================================

function stub() {
}

function commonGet(id) {
	return document.getElementById(id);
}

function commonValidId(id) {
	return (id && commonGet(id));
}

function commonShow(id) {
	if (commonValidId(id)) {
		commonGet(id).style.display = 'block';
	}
}

function commonHide(id) {
	if (commonValidId(id)) {
		commonGet(id).style.display = 'none';
	}
}

function commonGetElementPos(element) {
	var x = 0;
	var y = 0;
	if (element && element.offsetParent) {
		while (element) {
			x += element.offsetLeft;
			y += element.offsetTop;
			element = element.offsetParent;
		}
	}
	return [x, y];
}

function commonGetElementSize(element) {
	var w = 0;
	var h = 0;
	if (element) {
		w = element.offsetWidth;
		h = element.offsetHeight;
	}
	return [w, h];
}

function commonCreateCookie(name, value, days) {
	var expires = '';
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		expires = '; expires=' + date.toGMTString();
	}
	document.cookie = name + "=" + value + expires + "; path=/; domain=." + location.host.replace('www.','');
}

function commonReadCookie(name) {
	var nameEQ = name + '=';
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1, c.length);
		}
		if (c.indexOf(nameEQ) == 0) {
			return c.substring(nameEQ.length, c.length);
		}
	}
	return null;
}

function commonSendRequestTxt(url, data, isPost, callback) {
	var req = null;
	if (window.XMLHttpRequest) {
		req = new XMLHttpRequest();
	} else if (window.ActiveXObject) {
		req = new ActiveXObject('Microsoft.XMLHTTP');
	}
	if (!req) {
		return null;
	}
	try {
		var postData = null;
		var method = null;
		if (isPost) {
			method = 'POST';
			postData = data;
		} else if (!data) {
			method = 'GET';
		} else if (data.length > 0) {
			method = 'GET';
			if (url.indexOf('?') >= 0) {
				url += '&' + data;
			} else {
				url += '?' + data;
			}
		}
		req.open(method, encodeURI(url), true);
		if (method == 'POST') {
			req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		}
		req.onreadystatechange = function() {
			if (req.readyState == 4) {
				if (req.status == 200) {
					callback(req.responseText);
				} else {
					callback(null);
				}
			}
		};
		req.send(postData);
	} catch (e) {
		return e;
	}
	return null;
}

function commonLoadBlock(blockId, params, callback, ajax_url) {
	if (params) {
		params += '&mode=async&action=get_block&block_id=' + blockId;
	} else {
		params = 'mode=async&action=get_block&block_id=' + blockId;
	}
	var url = location.href;
	if (ajax_url) {
		url = ajax_url;
	}
	if (url.indexOf('#') >= 0) {
		url = url.substring(0, url.indexOf('#'));
	}
	commonSendRequestTxt(url, params, false, callback);
}

function commonReplaceBlock(blockUid, params, scroll) {
	var callback = function(html) {
		if (html && commonGet(blockUid)) {
			var expr = new RegExp('\\?mode=async&action=get_block&block_id=' + blockUid, 'g');
			var expr2 = new RegExp('&mode=async&action=get_block&block_id=' + blockUid, 'g');
			html = html.replace(expr, '');
			html = html.replace(expr2, '');

			var node = commonGet(blockUid);
			if (scroll) {
				var pos = commonGetElementPos(node.parentNode);
				window.scrollTo(0, pos[1]);
			}
			node.parentNode.innerHTML = html;
		}
	};

	commonLoadBlock(blockUid, params, callback, null);
	return false;
}

// Pagination functions =======================================================

var paginationConfiguredBlocks = {};
var paginationIsWaiting = false;
var paginationWaitIcon = null;

function paginationEnableBlock(params) {
	var container = params['container_id'];
	var paginationContainer = params['pagination_container_id'];
	var pleaseWaitIcon = params['please_wait_icon'];
	var pleaseWaitIconTimeout = params['please_wait_icon_timeout_ms'];
	var requestError = params['request_error'];

	if (!commonValidId(container) || !commonValidId(paginationContainer)) {
		return;
	}

	if (paginationConfiguredBlocks[container]) {
		return;
	}
	paginationConfiguredBlocks[container] = true;

	if (pleaseWaitIcon) {
		paginationWaitIcon = new Image();
		paginationWaitIcon.src = pleaseWaitIcon;
		paginationWaitIcon.style.position = 'absolute';
		paginationWaitIcon.style.zIndex = 1000;
		paginationWaitIcon.style.visibility = 'hidden';
		document.getElementsByTagName('BODY')[0].appendChild(paginationWaitIcon);
	}

	var callbackFunction = function(text) {
		paginationIsWaiting = false;

		if (text) {
			paginationShowWaitIcon(false, paginationContainer, null);

			var expr = new RegExp('\\?mode=async&action=get_block&block_id=' + container, 'g');
			var expr2 = new RegExp('&mode=async&action=get_block&block_id=' + container, 'g');
			var html = text;
			html = html.replace(expr, '');
			html = html.replace(expr2, '');

			commonGet(container).innerHTML = html;

			var links = commonGet(paginationContainer).getElementsByTagName('A');
			for (var i = 0; i < links.length; i++) {
				links[i].onclick = function() {
					paginationIsWaiting = true;
					setTimeout('paginationShowWaitIcon(true, \'' + paginationContainer + '\')', pleaseWaitIconTimeout);
					commonSendRequestTxt(this.href, 'mode=async&action=get_block&block_id=' + container, false, callbackFunction);
					return false;
				};
			}
		} else {
			paginationShowWaitIcon(false, paginationContainer, requestError);
		}
	};

	var links = commonGet(paginationContainer).getElementsByTagName('A');
	for (var i = 0; i < links.length; i++) {
		links[i].onclick = function() {
			paginationIsWaiting = true;
			setTimeout('paginationShowWaitIcon(true, \'' + paginationContainer + '\')', pleaseWaitIconTimeout);
			commonSendRequestTxt(this.href, 'mode=async&action=get_block&block_id=' + container, false, callbackFunction);
			return false;
		};
	}
}

function paginationShowWaitIcon(show, containerId, error) {
	if (show && paginationIsWaiting) {
		var size = commonGetElementSize(commonGet(containerId));
		var pos = commonGetElementPos(commonGet(containerId));

		if (paginationWaitIcon) {
			paginationWaitIcon.style.left = ((size[0] - paginationWaitIcon.offsetWidth) / 2 + pos[0]) + 'px';
			paginationWaitIcon.style.top = ((size[1] - paginationWaitIcon.offsetHeight) / 2 + pos[1]) + 'px';
			paginationWaitIcon.style.visibility = 'visible';
		}
	} else {
		if (paginationWaitIcon) {
			paginationWaitIcon.style.visibility = 'hidden';
		}
		if (error) {
			alert(error);
		}
	}
}

// Rotator functions ==========================================================

function rotatorEnableLinks(ajax, content_type) {
	var links = document.links;
	for (var i = 0; i < links.length; i++) {
		if (links[i].getAttribute('rotator_params') || links[i].getAttribute('data-rt')) {
			links[i].onmousedown = function() {
				var pqr = this.getAttribute('rotator_params') || this.getAttribute('data-rt');
				if (ajax) {
					var action = 'rotator_videos';
					commonSendRequestTxt(window.location.href, 'mode=async&action=' + action + '&' + pqr, false, function(){});
				} else {
					if (this.href.indexOf('?') >= 0) {
						this.href = this.href + '&' + pqr;
					} else {
						this.href = this.href + '?' + pqr;
					}
					this.onmousedown = null;
				}
			}
		}
	}
}

// Statistics functions =======================================================

commonCreateCookie('kt_tcookie', '1', 1);
if (commonReadCookie('kt_tcookie') == '1') {
	var img = new Image();
	img.src = '?mode=async&action=js_stats&rand=' + new Date().getTime();
}