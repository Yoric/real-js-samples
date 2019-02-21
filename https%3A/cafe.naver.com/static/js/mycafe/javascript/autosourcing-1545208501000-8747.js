/**
 * AutoSourcing
 * @author gony (AjaxUI3 Team)
 * @modifier dioong (AjaxUI2 Team)
 * @version r2102
 */

var AutoSourcing = {
    div: null,
    id: "",
    timer: null,
    regex: null,
    strings: [],
    skip: false,
    length: 20,
    init: function (format, enable, length) {
        this.div = this.getDiv();
        this.id = "autosourcing_tmp_" + Math.floor((Math.random() * 100000));
        this.regex = new RegExp(format.replace("%id%", "(\\d+)"));
        if (typeof enable == "undefined") enable = true;
        this.setEnable(enable);
    },
    setEnable: function (bool) {
        var t = this;
        if (bool) {
            if (typeof document.body.oncopy != "undefined") {
                document.body.oncopy = function (evt) {
                    t.copy(evt);
                };
            } else {
                document.onkeydown = function (evt) {
                    t.keydown(evt);
                };
                document.onkeypress = function (evt) {
                    t.keypress(evt);
                };
                document.oncontextmenu = function (evt) {
                    t.copy();
                };
            }
        } else {
            var f = new Function;
            if (typeof document.body.oncopy != "undefined") {
                document.body.oncopy = f;
            } else {
                document.onkeydown = f;
                document.onkeypress = f;
                document.oncontextmenu = f;
            }
        }
    },
    getDiv: function () {
    	var stubStyle = document.createElement("style");
    	stubStyle.type = "text/css";
    	
    	if (window.getSelection) {
    		stubStyle.innerHTML = "div.autosourcing-stub {position:absolute;opacity:0}";
    	} else {
    		stubStyle.styleSheet.cssText = "div.autosourcing-stub {display:none}";
    	}
    	document.getElementsByTagName("head")[0].appendChild(stubStyle);

    	var div = document.createElement("div");
    	div.className = "autosourcing-stub";
    	
    	return div;
    },
    getId: function (rng) {
        var range_s, range_e, par, id;
        range_s = this.cloneRange(rng)
        range_s.collapse(true);
        par = this.getParentElement(range_s);
        while (par && par.parentNode) {
            if (par.nodeType == 1 && this.regex.test(par.id)) {
                id = parseInt(RegExp.$1);
                return isNaN(id) ? 0 : id;
            }
            par = par.parentNode;
        }
        range_e = this.cloneRange(rng)
        range_e.collapse(false);
        par = this.getParentElement(range_e);
        while (par && par.parentNode) {
            if (par.nodeType == 1 && this.regex.test(par.id)) {
                id = parseInt(RegExp.$1);
                return isNaN(id) ? 0 : id;
            }
            par = par.parentNode;
        }
        return -1;
    },
    getSelection: function () {
        if (window.getSelection) {
            return window.getSelection();
        } else {
            return document.selection;
        }
    },
    getRange: function (selection) {
        selection = selection || this.getSelection();
        if (selection.getRangeAt) {
            return selection.getRangeAt(0);
        } else {
            return selection.createRange();
        }
    },
    cloneRange: function (rng) {
        rng = rng || this.getRange();
        if (rng.duplicate) {
            return rng.duplicate();
        } else {
            return rng.cloneRange();
        }
    },
    getParentElement: function (range) {
        var par = range.parentElement ? range.parentElement() : range.commonAncestorContainer;
        if (!par) return null;
        while (par.nodeType != 1) {
            par = par.parentNode;
        }
        return par;
    },
    setString: function (id, str) {
        this.strings[id] = str;
    },
    getText: function(rng) {
    	if (rng.toString) {
    		return rng.toString();
    	} else {
    		return rng.text;
    	}
    },
    getBytes: function(str, pcharset) {
    	var code=0, bytes=0, i=0, len=str.length;
		var charset = ((pcharset||document.charset||document.characterSet||document.defaultCharset)+"").toLowerCase();
		
		if (charset == "utf-8") {
    		for (i=0; i < len; i++) {
    			code = str.charCodeAt(i);
    			if (code < 128) {
    				bytes += 1;
    			} else if (code < 2048) {
    				bytes += 2;
    			} else if (code < 65536) {
    				bytes += 3;
    			} else {
    				bytes += 4;
    			}
    		}
    	} else {
    		for (i=0; i < len; i++) {
    			bytes += (str.charCodeAt(i) > 128) ? 2:1;
    		}
    	}

    	return bytes;
	},
    copy: function (evt) {
        var evt = evt || window.event;
        var self = this;
        var sel = this.getSelection();
        var rng = this.getRange(sel);
        var rngtmp = this.cloneRange(rng);
        var regcopy = /<(?:p|div)[^<>]+class\s*=\s*"?autosourcing\-stub(?:\-extra)?\-saved(?:\b|")/i;
        var regtag = /textarea|input/i;
        var id = this.getId(rng);
        var par = null;
        var node_rng;
        this.skip = false;
        clearTimeout(this.timer);
        if (id == -1) {
            try {
                this.div.parentNode.removeChild(this.div)
            } catch (e) {};
            return;
        }
        if(this.getBytes(this.getText(rng)) <= this.length) {
        	return;
        }
        if (evt && evt.srcElement && evt.srcElement.tagName.toUpperCase() == "A") return;
        this.div.innerHTML = this.strings[this.getId(rng)];
        if (window.getSelection) {
            var html = (window.XMLSerializer) ? new XMLSerializer().serializeToString(rng.cloneContents()) : "";
            if (regcopy.test(html) || regtag.test(rng.commonAncestorContainer.tagName)) {
                if (this.div && this.div.parentNode) this.div.parentNode.removeChild(this.div);
                this.skip = true;
                return;
            }
            rngtmp.collapse(false);
            rngtmp.insertNode(this.div);
            if (this.div.nextSibling) {
                rng.setEndBefore(this.div.nextSibling);
            } else {
                rng.setEndAfter(this.div);
            }
            sel.removeAllRanges();
            sel.addRange(rng);
        } else if (document.selection) {
            var body = document.body || document.getElementsByTagName("body")[0];
            var div = document.createElement("div");
            var span = document.createElement("span");
            span.id = this.id;
            if (regcopy.test(rng.htmlText) || regtag.test(rng.parentElement().tagName)) {
                this.skip = true;
                return;
            }
            rngtmp.collapse(false);
            rngtmp.pasteHTML(span.outerHTML + "&nbsp;<span></span>");
            span = document.getElementById(this.id);
            (span || rngtmp.parentElement()).insertAdjacentElement("afterEnd", this.div);
            do {
                rng.moveEnd("character", 1);
                (rngtmp = rng.duplicate()).collapse(false);
            } while (rngtmp.offsetLeft == 0);
            try {
                rng.moveEnd("character");		/*CAFESUS-5219*/
                rng.select();
            } catch (e) {}
            if (span && span.parentNode) {
                span.parentNode.removeChild(span.nextSibling.nextSibling);
                span.parentNode.removeChild(span.nextSibling.nextSibling);
                span.parentNode.removeChild(span);
            }
            if (div && div.parentNode) {
                div.parentNode.removeChild(div);
            }
        }
        if (typeof document.body.oncopy != "undefined") {
            this.timer = setTimeout(function () {
                self.aftercopy(rng);
            }, 1);
        }
    },
    aftercopy: function (rng) {
        if (this.skip) return;
        try {
            this.div.parentNode.removeChild(this.div);
            if (/WebKit/.test(navigator.userAgent)) {
                var sel = this.getSelection();
                sel.removeAllRanges();
                sel.addRange(rng);
            }
        } catch (e) {}
    },
    keydown: function (e) {
        if ((e.ctrlKey || e.metaKey) && e.keyCode == 67) {
            this.copy();
        }
    },
    keypress: function (e) {
        if ((e.ctrlKey || e.metaKey) && e.keyCode == 67) {
            var t = this;
            this.timer = setTimeout(function () {
                t.aftercopy();
            }, 10);
        }
    },
    mousedown: function (e) {}
};