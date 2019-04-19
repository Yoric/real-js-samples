function DivSelect(id, divId, className) {
    this.id = id;
    this.divId = divId;
    this.divClassName = className || 'selectView';
    this.ele = this.$(this.id);
    if (!this.ele) {
        return
    };
    var that = this;
    this.status = "close";
    this.parentObj = this.ele.parentNode;
    while (this.readStyle(this.parentObj, "display") != "block") {
        if (this.parentObj.parentNode) {
            this.parentObj = this.parentObj.parentNode
        } else {
            break
        }
    };
    this.parentObj.style.position = "relative";
    var sp = this.absPosition(this.ele, this.parentObj);
    this.ele.style.visibility = "hidden";
    this.__div = document.createElement("div");
    if (divId) {
        this.__div.id = divId
    };
    if (this.divClassName) {
        this.__div.className = this.divClassName
    };
    this.parentObj.appendChild(this.__div);
    this.__div.style.width = this.ele.offsetWidth + "px";
    this.__div.style.position = "absolute";
    this.__div.style.left = sp.left + "px";
    this.__div.style.top = sp.top + "px";
    this.__div.onclick = function() {
        that.click()
    };
    this.__div_count = document.createElement("div");
    this.__div.appendChild(this.__div_count);
    this.__div_count.className = "ds_cont";
    this.__div_title = document.createElement("div");
    this.__div_count.appendChild(this.__div_title);
    this.__div_title.className = "ds_title";
    this.__div_button = document.createElement("div");
    this.__div_count.appendChild(this.__div_button);
    this.__div_button.className = "ds_button";
    this.__div_list = document.createElement("div");
    this.__div.appendChild(this.__div_list);
    this.__div_list.className = "ds_list";
    this.__div_list.style.display = "none";
    this.__div_listCont = document.createElement("div");
    this.__div_list.appendChild(this.__div_listCont);
    this.__div_listCont.className = "dsl_cont";
    this.list = [];
    var temp;
    for (var i = 0; i < this.ele.options.length; i++) {
        temp = document.createElement("p");
        this.list.push(temp);
        this.__div_listCont.appendChild(temp);
        temp.innerHTML = this.ele.options[i].innerHTML;
        if (this.ele.selectedIndex == i) {
            this.__div_title.innerHTML = temp.innerHTML
        };
        temp.num = i;
        temp.onmouseover = function() {
            that.showSelectIndex(this.num)
        };
        temp.onclick = function() {
            that.select(this.innerHTML)
        }
    }
};
DivSelect.prototype = {
    showSelectIndex: function(num) {
        if (typeof(num) === 'undefined') {
            num = this.ele.selectedIndex
        };
        if (typeof(this.showIndex) !== 'undefined') {
            this.list[this.showIndex].className = ''
        };
        this.showIndex = num;
        this.list[this.showIndex].className = 'selected'
    },
    select: function(txt) {
        for (var i = 0; i < this.ele.options.length; i++) {
            if (this.ele.options[i].innerHTML == txt) {
                this.ele.selectedIndex = i;
                if (this.ele.onchange) {
                    this.ele.onchange()
                };
                this.__div_title.innerHTML = txt;
                break
            }
        }
    },
    setIndex: function(num) {
        if (num < 0 || num >= this.list.length) {
            return
        }
        this.ele.selectedIndex = num;
        if (this.ele.onchange) {
            this.ele.onchange()
        };
        this.__div_title.innerHTML = this.list[num].innerHTML
    },
    clickClose: function(e) {
        var thisObj = e.target ? e.target : event.srcElement;
        var that = this;
        do {
            if (thisObj == that.__div) {
                return
            };
            if (thisObj.tagName == "BODY") {
                break
            };
            thisObj = thisObj.parentNode
        } while (thisObj.parentNode);
        that.close()
    },
    keyDown: function(e) {
        var num = this.showIndex;
        if (e.keyCode == 38) {
            num--;
            if (num < 0) {
                num = this.list.length - 1
            };
            this.showSelectIndex(num);
            this.stopDefault(e)
        };
        if (e.keyCode == 40) {
            num++;
            if (num >= this.list.length) {
                num = 0
            };
            this.showSelectIndex(num);
            this.stopDefault(e)
        };
        if (e.keyCode == 13 || e.keyCode == 9) {
            this.setIndex(num);
            this.stopDefault(e);
            this.close()
        };
        if (e.keyCode == 27) {
            this.close()
        }
    },
    open: function() {
        var that = this;
        this.showSelectIndex();
        this.__div_list.style.display = "block";

        // 定位到被选择单位
        if (!this.__unitHeight) this.__unitHeight = this.list[0].offsetHeight;
    	this.__div_listCont.scrollTop = this.__unitHeight * this.showIndex;

        this.hasOpened = true;
        this.status = "open";
        this.__closeFn = function(e) {
            that.clickClose(e)
        };
        this.__keyFn = function(e) {
            that.keyDown(e)
        };
        this.addEvent(document, "click", this.__closeFn);
        this.addEvent(document, "keydown", this.__keyFn)
    },
    close: function() {
        var that = this;
        this.__div_list.style.display = "none";
        this.status = "close";
        this.delEvent(document, "click", this.__closeFn);
        this.delEvent(document, "keydown", this.__keyFn)
    },
    click: function() {
        if (this.status == "open") {
            this.close()
        } else {
            this.open()
        }
    },
    $: function(objName) {
        if (document.getElementById) {
            return eval('document.getElementById("' + objName + '")')
        } else {
            return eval('document.all.' + objName)
        }
    },
    addEvent: function(obj, eventType, func) {
        if (obj.attachEvent) {
            obj.attachEvent("on" + eventType, func)
        } else {
            obj.addEventListener(eventType, func, false)
        }
    },
    delEvent: function(obj, eventType, func) {
        if (obj.detachEvent) {
            obj.detachEvent("on" + eventType, func)
        } else {
            obj.removeEventListener(eventType, func, false)
        }
    },
    readStyle: function(i, I) {
        if (i.style[I]) {
            return i.style[I]
        } else if (i.currentStyle) {
            return i.currentStyle[I]
        } else if (document.defaultView && document.defaultView.getComputedStyle) {
            var l = document.defaultView.getComputedStyle(i, null);
            return l.getPropertyValue(I)
        } else {
            return null
        }
    },
    absPosition: function(obj, parentObj) {
        var left = obj.offsetLeft;
        var top = obj.offsetTop;
        var tempObj = obj.offsetParent;
        var sss = "";
        try {
            while (tempObj.id != document.body && tempObj.id != document.documentElement && tempObj != parentObj && tempObj != null) {
                sss += tempObj.tagName + " , ";
                tempObj = tempObj.offsetParent;
                left += tempObj.offsetLeft;
                top += tempObj.offsetTop
            }
        } catch (e) {};
        return {
            left: left,
            top: top
        }
    },
    stopDefault: function(e) {
        if (e.preventDefault) {
            e.preventDefault()
        } else {
            e.returnValue = false
        }
    }
};