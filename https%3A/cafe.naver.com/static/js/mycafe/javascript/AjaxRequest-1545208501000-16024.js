// ===================================================================
// Author: Matt Kruse <matt@ajaxtoolbox.com>
// WWW: http://www.AjaxToolbox.com/
//
// korean language fixed by zican
//		req.xmlHttpRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=UTF-8');
//
function AjaxRequest() {
	var req = new Object();

	req.timeout = null;
	req.generateUniqueUrl = true;
	req.url = window.location.href;
	req.method = "GET";
	req.async = true;
	req.username = null;
	req.password = null;
	req.parameters = new Object();
	req.requestIndex = AjaxRequest.numAjaxRequests++;
	req.responseReceived = false;
	req.groupName = null;
	req.queryString = "";
	req.responseText = null;
	req.responseXML = null;
	req.status = null;
	req.statusText = null;
	req.aborted = false;
	req.xmlHttpRequest = null;
	req.onTimeout = null; 
	req.onLoading = null;
	req.onLoaded = null;
	req.onInteractive = null;
	req.onComplete = null;
	req.onSuccess = null;
	req.onError = null;
	req.onGroupBegin = null;
	req.onGroupEnd = null;

	// Get the XMLHttpRequest object itself
	req.xmlHttpRequest = AjaxRequest.getXmlHttpRequest();
	if (req.xmlHttpRequest==null) { return null; }
	
	// Attach the event handlers for the XMLHttpRequest object
	req.xmlHttpRequest.onreadystatechange = 
	function() {
		if (req==null || req.xmlHttpRequest==null) { return; }
		if (req.xmlHttpRequest.readyState==1) { req.onLoadingInternal(req); }
		if (req.xmlHttpRequest.readyState==2) { req.onLoadedInternal(req); }
		if (req.xmlHttpRequest.readyState==3) { req.onInteractiveInternal(req); }
		if (req.xmlHttpRequest.readyState==4) { req.onCompleteInternal(req); }
	};
	
	// Internal event handlers that fire, and in turn fire the user event handlers
	req.onLoadingInternalHandled = false;
	req.onLoadedInternalHandled = false;
	req.onInteractiveInternalHandled = false;
	req.onCompleteInternalHandled = false;
	req.onLoadingInternal = 
		function() {
			if (req.onLoadingInternalHandled) { return; }
			AjaxRequest.numActiveAjaxRequests++;
			if (AjaxRequest.numActiveAjaxRequests==1 && typeof(window['AjaxRequestBegin'])=="function") {
				AjaxRequestBegin();
			}
			if (req.groupName!=null) {
				if (typeof(AjaxRequest.numActiveAjaxGroupRequests[req.groupName])=="undefined") {
					AjaxRequest.numActiveAjaxGroupRequests[req.groupName] = 0;
				}
				AjaxRequest.numActiveAjaxGroupRequests[req.groupName]++;
				if (AjaxRequest.numActiveAjaxGroupRequests[req.groupName]==1 && typeof(req.onGroupBegin)=="function") {
					req.onGroupBegin(req.groupName);
				}
			}
			if (typeof(req.onLoading)=="function") {
				req.onLoading(req);
			}
			req.onLoadingInternalHandled = true;
		};
	req.onLoadedInternal = 
		function() {
			if (req.onLoadedInternalHandled) { return; }
			if (typeof(req.onLoaded)=="function") {
				req.onLoaded(req);
			}
			req.onLoadedInternalHandled = true;
		};
	req.onInteractiveInternal = 
		function() {
			if (req.onInteractiveInternalHandled) { return; }
			if (typeof(req.onInteractive)=="function") {
				req.onInteractive(req);
			}
			req.onInteractiveInternalHandled = true;
		};
	req.onCompleteInternal = 
		function() {
			if (req.onCompleteInternalHandled || req.aborted) { requestStack.isStarted = false; return; }
			
			req.onCompleteInternalHandled = true;
			AjaxRequest.numActiveAjaxRequests--;
			
			if (AjaxRequest.numActiveAjaxRequests==0 && typeof(window['AjaxRequestEnd'])=="function") {
				AjaxRequestEnd(req.groupName);
			}
			
			if (req.groupName!=null) {
				AjaxRequest.numActiveAjaxGroupRequests[req.groupName]--;
				if (AjaxRequest.numActiveAjaxGroupRequests[req.groupName]==0 && typeof(req.onGroupEnd)=="function") {
					req.onGroupEnd(req.groupName);
				}
			}
			
			req.responseReceived = true;
			req.status = req.xmlHttpRequest.status;
			req.statusText = req.xmlHttpRequest.statusText;
			req.responseText = req.xmlHttpRequest.responseText;
			req.responseXML = req.xmlHttpRequest.responseXML;
			
			if (typeof(req.onComplete)=="function") {
				req.onComplete(req);
			}
			
			if (req.xmlHttpRequest.status==200 && typeof(req.onSuccess)=="function") {				
				req.onSuccess(req);
			}
			else if (typeof(req.onError)=="function") {
				req.onError(req);
			}
			// newoverguy
			requestStack.isStarted = false;
			requestStack.startRequest();
			// Clean up so IE doesn't leak memory			
			delete req.xmlHttpRequest['onreadystatechange'];
			req.xmlHttpRequest = null;
		};
	req.onTimeoutInternal = 
		function() {
			if (req!=null && req.xmlHttpRequest!=null && !req.onCompleteInternalHandled) {
				req.aborted = true;
				req.xmlHttpRequest.abort();
				AjaxRequest.numActiveAjaxRequests--;
				if (AjaxRequest.numActiveAjaxRequests==0 && typeof(window['AjaxRequestEnd'])=="function") {
					AjaxRequestEnd(req.groupName);
				}
				if (req.groupName!=null) {
					AjaxRequest.numActiveAjaxGroupRequests[req.groupName]--;
					if (AjaxRequest.numActiveAjaxGroupRequests[req.groupName]==0 && typeof(req.onGroupEnd)=="function") {
						req.onGroupEnd(req.groupName);
					}
				}
				if (typeof(req.onTimeout)=="function") {
					req.onTimeout(req);
				}
		    // newoverguy
			requestStack.isStarted = false;
			requestStack.startRequest();
			// Opera won't fire onreadystatechange after abort, but other browsers do. 
			// So we can't rely on the onreadystate function getting called. Clean up here!
			delete req.xmlHttpRequest['onreadystatechange'];
			req.xmlHttpRequest = null;
			}
		};

	// Instance methods
	req.process = 
		function() {
			if (req.xmlHttpRequest!=null) {
				// Some logic to get the real request URL
				if (req.generateUniqueUrl && req.method=="GET") {
					req.parameters["AjaxRequestUniqueId"] = new Date().getTime() + "" + req.requestIndex;
				}
				var content = null; // For POST requests, to hold query string
				for (var i in req.parameters) 
				{
					if (req.queryString.length>0) { req.queryString += "&"; }
					req.queryString += encodeURL(i) + "=" + encodeURL(req.parameters[i]);										
				}				
				if (req.method=="GET") {
					if (req.queryString.length>0) {
						req.url += ((req.url.indexOf("?")>-1)?"&":"?") + req.queryString;
					}
				}
				req.xmlHttpRequest.open(req.method,req.url,req.async,req.username,req.password);
				if (req.method=="POST") {
					if (typeof(req.xmlHttpRequest.setRequestHeader)!="undefined") {
						req.xmlHttpRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=UTF-8');
					}
					content = req.queryString;										
				}
				
				if (typeof(req.xmlHttpRequest.setRequestHeader)!="undefined") { // appended by wonchuls
					req.xmlHttpRequest.setRequestHeader('ajax', 'true');
				}
				
				if (req.timeout>0) {
					setTimeout(req.onTimeoutInternal,req.timeout);
				}
				req.xmlHttpRequest.send(content);				
			}
		};

	req.handleArguments = 
		function(args) {
			for (var i in args) {
				// If the AjaxRequest object doesn't have a property which was passed, treat it as a url parameter
				if (typeof(req[i])=="undefined") {
					req.parameters[i] = args[i];
				}
				else {
					req[i] = args[i];
				}
			}
		};

	req.getAllResponseHeaders =
		function() {
			if (req.xmlHttpRequest!=null) {
				if (req.responseReceived) {
					return req.xmlHttpRequest.getAllResponseHeaders();
				}
				alert("Cannot getAllResponseHeaders because a response has not yet been received");
			}
		};

	req.getResponseHeader =
		function(headerName) {
			if (req.xmlHttpRequest!=null) {
				if (req.responseReceived) {
					return req.xmlHttpRequest.getResponseHeader(headerName);
				}
				alert("Cannot getResponseHeader because a response has not yet been received");
			}
		};

	return req;
}

// ---------------------------------------
// Static methods of the AjaxRequest class
// ---------------------------------------

AjaxRequest.getXmlHttpRequest = function() {
	if (window.XMLHttpRequest) {
		return new XMLHttpRequest();
	}
	else if (window.ActiveXObject) {
		// Based on http://jibbering.com/2002/4/httprequest.html
		/*@cc_on @*/
		/*@if (@_jscript_version >= 5)
		try {
			return new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try {
				return new ActiveXObject("Microsoft.XMLHTTP");
			} catch (E) {
				return null;
			}
		}
		@end @*/
	}
	else {
		return null;
	}
};

AjaxRequest.isActive = function() {
	return (AjaxRequest.numActiveAjaxRequests>0);
};

AjaxRequest.get = function(args) {
	AjaxRequest.doRequest("GET",args);
};

AjaxRequest.post = function(args) {
	AjaxRequest.doRequest("POST",args);
};

AjaxRequest.doRequest = function(method,args) {
	if (typeof(args)!="undefined" && args!=null) {
		var myRequest = new AjaxRequest();
		myRequest.method = method;
		myRequest.handleArguments(args);
		myRequest.process();
	}
}	;

AjaxRequest.submit = function(theform, args, processGetData) {
	var myRequest = new AjaxRequest();
	if (myRequest==null) { return false; }
	var serializedForm = AjaxRequest.serializeForm(theform);
	myRequest.method = theform.method.toUpperCase();
	myRequest.url = theform.action;
	myRequest.handleArguments(args);
	myRequest.queryString = serializedForm;
	if(processGetData != null) myRequest.onSuccess = processGetData;
	myRequest.process();
	return true;
};	

AjaxRequest.serializeForm = function(theform) {
	var els = theform.elements;
	var len = els.length;
	var queryString = "";
	this.addField = 
		function(name,value) { 
			if (queryString.length>0) { 
				queryString += "&";
			}
			queryString += encodeURL(name) + "=" + encodeURL(value);
		};	
	for (var i=0; i<len; i++) {
		var el = els[i];
		if (!el.disabled) {
			switch(el.type) {
				case 'text': case 'password': case 'hidden': case 'textarea': 
					this.addField(el.name,el.value);
					break;
				case 'select-one':
					if (el.selectedIndex>=0) {
						this.addField(el.name,el.options[el.selectedIndex].value);
					}
					break;
				case 'select-multiple':
					for (var j=0; j<el.options.length; j++) {
						if (el.options[j].selected) {
							this.addField(el.name,el.options[j].value);
						}
					}
					break;
				case 'checkbox': case 'radio':
					if (el.checked) {
						this.addField(el.name,el.value);
					}
					break;
			}
		}
	}
	return queryString;
};

/*  Function Equivalent to java.net.URLEncoder.encode(String, "UTF-8")
    Copyright (C) 2002, Cresc Corp.
    Version: 1.0
*/

function encodeURL(str){
    if(typeof str != 'string') str += '';
    var s0, i, s, u;
    s0 = "";                // encoded str
    for (i = 0; i < str.length; i++){   // scan the source
        s = str.charAt(i);
        u = str.charCodeAt(i);          // get unicode of the char
        if (s == " "){s0 += "+";}       // SP should be converted to "+"
        else {
            if ( u == 0x2a || u == 0x2d || u == 0x2e || u == 0x5f || ((u >= 0x30) && (u <= 0x39)) || ((u >= 0x41) && (u <= 0x5a)) || ((u >= 0x61) && (u <= 0x7a))){       // check for escape
                s0 = s0 + s;            // don't escape
            }
            else {                  // escape
                if ((u >= 0x0) && (u <= 0x7f)){     // single byte format
                    s = "0"+u.toString(16);
                    s0 += "%"+ s.substr(s.length-2);
                }
                else if (u > 0x1fffff){     // quaternary byte format (extended)
                    s0 += "%" + (oxf0 + ((u & 0x1c0000) >> 18)).toString(16);
                    s0 += "%" + (0x80 + ((u & 0x3f000) >> 12)).toString(16);
                    s0 += "%" + (0x80 + ((u & 0xfc0) >> 6)).toString(16);
                    s0 += "%" + (0x80 + (u & 0x3f)).toString(16);
                }
                else if (u > 0x7ff){        // triple byte format
                    s0 += "%" + (0xe0 + ((u & 0xf000) >> 12)).toString(16);
                    s0 += "%" + (0x80 + ((u & 0xfc0) >> 6)).toString(16);
                    s0 += "%" + (0x80 + (u & 0x3f)).toString(16);
                }
                else {                      // double byte format
                    s0 += "%" + (0xc0 + ((u & 0x7c0) >> 6)).toString(16);
                    s0 += "%" + (0x80 + (u & 0x3f)).toString(16);
                }
            }
        }
    }

    return s0;
}

/*  Function Equivalent to java.net.URLDecoder.decode(String, "UTF-8")
    Copyright (C) 2002, Cresc Corp.
    Version: 1.0
*/

function decodeURL(str){
	if(typeof str != 'string') str += '';
    var s0, i, j, s, ss, u, n, f;
    s0 = "";                // decoded str
    for (i = 0; i < str.length; i++){   // scan the source str
        s = str.charAt(i);
        if (s == "+"){s0 += " ";}       // "+" should be changed to SP
        else {
            if (s != "%"){s0 += s;}     // add an unescaped char
            else{               // escape sequence decoding
                u = 0;          // unicode of the character
                f = 1;          // escape flag, zero means end of this sequence
                while (true) {
                    ss = "";        // local str to parse as int
                        for (j = 0; j < 2; j++ ) {  // get two maximum hex characters for parse
                            sss = str.charAt(++i);
                            if (((sss >= "0") && (sss <= "9")) || ((sss >= "a") && (sss <= "f"))  || ((sss >= "A") && (sss <= "F"))) {
                                ss += sss;      // if hex, add the hex character
                            } else {--i; break;}    // not a hex char., exit the loop
                        }
                    n = parseInt(ss, 16);           // parse the hex str as byte
                    if (n <= 0x7f){u = n; f = 1;}   // single byte format
                    if ((n >= 0xc0) && (n <= 0xdf)){u = n & 0x1f; f = 2;}   // double byte format
                    if ((n >= 0xe0) && (n <= 0xef)){u = n & 0x0f; f = 3;}   // triple byte format
                    if ((n >= 0xf0) && (n <= 0xf7)){u = n & 0x07; f = 4;}   // quaternary byte format (extended)
                    if ((n >= 0x80) && (n <= 0xbf)){u = (u << 6) + (n & 0x3f); --f;}         // not a first, shift and add 6 lower bits
                    if (f <= 1){break;}         // end of the utf byte sequence
                    if (str.charAt(i + 1) == "%"){ i++ ;}                   // test for the next shift byte
                    else {break;}                   // abnormal, format error
                }
            s0 += String.fromCharCode(u);           // add the escaped character
            }
        }
    }

    return s0;
}

// -----------------------
// Static Class variables
// -----------------------

AjaxRequest.numActiveAjaxRequests = 0;

AjaxRequest.numActiveAjaxGroupRequests = new Object();

AjaxRequest.numAjaxRequests = 0;

// -----------------------
// 카페에서 추가한 부분.
// -----------------------
Array.prototype.isStarted = false;
Array.prototype.startRequest = function(){
	var oRequest = this.shift();	
	if(oRequest != null){
		this.isStarted = true;
	    oRequest.process();			
	}
}
var requestStack = new Array();

function processRequest(url, method, queryString, parameters, processGetData, timeout, async){
	var ajaxRequest = new AjaxRequest();
	requestStack.push(ajaxRequest);
	
	ajaxRequest.url = url;
	ajaxRequest.method = method;
	if(parameters != null) ajaxRequest.parameters = parameters;
	ajaxRequest.queryString = queryString;
	ajaxRequest.onSuccess = processGetData;	
	if(timeout != null) ajaxRequest.timeout = timeout;
	
	if(async != null) ajaxRequest.async = async; // firefox는 설정해도 지원한함(2007.05.17에 확인한 내용)
	
	if(!requestStack.isStarted){
		requestStack.startRequest();		
	}
}