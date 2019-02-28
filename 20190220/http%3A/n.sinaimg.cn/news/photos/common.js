/* 1,268,96 2015-06-04 17:02:26 */

//滚动图片构造函数
//UI&UE Dept. mengjia
//version 1.45
function ScrollPic(scrollContId, arrLeftId, arrRightId, dotListId, listType) {
	this.scrollContId = scrollContId;
	this.arrLeftId = arrLeftId;
	this.arrRightId = arrRightId;
	this.dotListId = dotListId;
	this.listType = listType;
	this.dotClassName = "dotItem";
	this.dotOnClassName = "dotItemOn";
	this.dotObjArr = [];
	this.listEvent = "onclick";
	this.circularly = true;
	this.pageWidth = 0;
	this.frameWidth = 0;
	this.speed = 10;
	this.space = 10;
	this.upright = false;
	this.pageIndex = 0;
	this.autoPlay = true;
	this.autoPlayTime = 5;
	this._autoTimeObj;
	this._scrollTimeObj;
	this._state = "ready";
	this.stripDiv = document.createElement("DIV");
	this.lDiv01 = document.createElement("DIV");
	this.lDiv02 = document.createElement("DIV")
};
ScrollPic.prototype = {version: "1.45", author: "mengjia", pageLength: 0, touch: true, scrollLeft: 0, eof: false, bof: true, initialize: function () {
	var thisTemp = this;
	if (!this.scrollContId) {
		throw new Error("必须指定scrollContId.");
		return
	}

	this.scDiv = this.$(this.scrollContId);
	if (!this.scDiv) {
		throw new Error("scrollContId不是正确的对象.(scrollContId = \"" + this.scrollContId + "\")");
		return
	}

	this.scDiv.style[this.upright ? 'height' : 'width'] = this.pageWidth + "px";
	this.scDiv.style.overflow = "hidden";
	this.lDiv01.innerHTML = this.scDiv.innerHTML;
	this.scDiv.innerHTML = "";
	this.scDiv.appendChild(this.stripDiv);
	this.stripDiv.appendChild(this.lDiv01);

	if (this.circularly) {
		this.stripDiv.appendChild(this.lDiv02);
		this.lDiv02.innerHTML = this.lDiv01.innerHTML;
		this.bof = false;
		this.eof = false
	}

	this.stripDiv.style.overflow = "hidden";
	this.stripDiv.style.zoom = "1";
	this.stripDiv.style[this.upright ? 'height' : 'width'] = "32766px";
	this.lDiv01.style.overflow = "hidden";
	this.lDiv01.style.zoom = "1";
	this.lDiv02.style.overflow = "hidden";
	this.lDiv02.style.zoom = "1";
	if (!this.upright) {
		this.lDiv01.style.cssFloat = "left";
		this.lDiv01.style.styleFloat = "left"
	}

	this.lDiv01.style.zoom = "1";
	if (this.circularly && !this.upright) {
		this.lDiv02.style.cssFloat = "left";
		this.lDiv02.style.styleFloat = "left"
	}

	this.lDiv02.style.zoom = "1";
	this.addEvent(this.scDiv, "mouseover", function () {
		thisTemp.stop()
	});
	this.addEvent(this.scDiv, "mouseout", function () {
		thisTemp.play()
	});
	if (this.arrLeftId) {
		this.alObj = this.$(this.arrLeftId);
		if (this.alObj) {
			this.addEvent(this.alObj, "mousedown", function (e) {
				thisTemp.rightMouseDown();
				e = e || event;
				thisTemp.preventDefault(e)
			});
			this.addEvent(this.alObj, "mouseup", function () {
				thisTemp.rightEnd()
			});
			this.addEvent(this.alObj, "mouseout", function () {
				thisTemp.rightEnd()
			})
		}
	}

	if (this.arrRightId) {
		this.arObj = this.$(this.arrRightId);
		if (this.arObj) {
			this.addEvent(this.arObj, "mousedown", function (e) {
				thisTemp.leftMouseDown();
				e = e || event;
				thisTemp.preventDefault(e)
			});
			this.addEvent(this.arObj, "mouseup", function () {
				thisTemp.leftEnd()
			});
			this.addEvent(this.arObj, "mouseout", function () {
				thisTemp.leftEnd()
			})
		}
	}

	var pages = Math.ceil(this.lDiv01[this.upright ? 'offsetHeight' : 'offsetWidth'] / this.pageWidth), i, tempObj;
	this.pageLength = pages;
	if (this.dotListId) {
		this.dotListObj = this.$(this.dotListId);
		this.dotListObj.innerHTML = "";
		if (this.dotListObj) {
			for (i = 0; i < pages; i++) {
				tempObj = document.createElement("span");
				this.dotListObj.appendChild(tempObj);
				this.dotObjArr.push(tempObj);
				if (i == this.pageIndex) {
					tempObj.className = this.dotOnClassName
				} else {
					tempObj.className = this.dotClassName
				}

				if (this.listType == 'number') {
					tempObj.innerHTML = i + 1
				} else if (typeof(this.listType) == 'string') {
					tempObj.innerHTML = this.listType
				} else {
					tempObj.innerHTML = ''
				}

				tempObj.title = "第" + (i + 1) + "页";
				tempObj.num = i;
				tempObj[this.listEvent] = function () {
					thisTemp.pageTo(this.num)
				}
			}
		}
	}

	this.scDiv[this.upright ? 'scrollTop' : 'scrollLeft'] = 0;
	if (this.autoPlay) {
		this.play()
	}

	this._scroll = this.upright ? 'scrollTop' : 'scrollLeft';
	this._sWidth = this.upright ? 'scrollHeight' : 'scrollWidth';
	if (typeof(this.onpagechange) === 'function') {

		this.onpagechange(Math.min(this.pageIndex, this.pageLength-1), this.pageLength);
	}

	this.iPad()
}, leftMouseDown: function () {
	if (this._state != "ready") {
		return
	}

	var thisTemp = this;
	this._state = "floating";
	clearInterval(this._scrollTimeObj);
	this._scrollTimeObj = setInterval(function () {
		thisTemp.moveLeft()
	}, this.speed);
	this.moveLeft()
}, rightMouseDown: function () {
	if (this._state != "ready") {
		return
	}

	var thisTemp = this;
	this._state = "floating";
	clearInterval(this._scrollTimeObj);
	this._scrollTimeObj = setInterval(function () {
		thisTemp.moveRight()
	}, this.speed);
	this.moveRight()
}, moveLeft: function () {
	if (this._state != "floating") {
		return
	}

	if (this.circularly) {
		if (this.scDiv[this._scroll] + this.space >= this.lDiv01[this._sWidth]) {
			this.scDiv[this._scroll] = this.scDiv[this._scroll] + this.space - this.lDiv01[this._sWidth]
		} else {
			this.scDiv[this._scroll] += this.space
		}
	} else {
		if (this.scDiv[this._scroll] + this.space >= this.lDiv01[this._sWidth] - this.pageWidth) {
			this.scDiv[this._scroll] = this.lDiv01[this._sWidth] - this.pageWidth;
			this.leftEnd()
		} else {
			this.scDiv[this._scroll] += this.space
		}
	}

	this.accountPageIndex()
}, moveRight: function () {
	if (this._state != "floating") {
		return
	}

	if (this.circularly) {
		if (this.scDiv[this._scroll] - this.space <= 0) {
			this.scDiv[this._scroll] = this.lDiv01[this._sWidth] + this.scDiv[this._scroll] - this.space
		} else {
			this.scDiv[this._scroll] -= this.space
		}
	} else {
		if (this.scDiv[this._scroll] - this.space <= 0) {
			this.scDiv[this._scroll] = 0;
			this.rightEnd()
		} else {
			this.scDiv[this._scroll] -= this.space
		}
	}

	this.accountPageIndex()
}, leftEnd: function () {
	if (this._state != "floating" && this._state != 'touch') {
		return
	}

	this._state = "stoping";
	clearInterval(this._scrollTimeObj);
	var fill = this.pageWidth - this.scDiv[this._scroll] % this.pageWidth;
	this.move(fill)
}, rightEnd: function () {
	if (this._state != "floating" && this._state != 'touch') {
		return
	}

	this._state = "stoping";
	clearInterval(this._scrollTimeObj);
	var fill = -this.scDiv[this._scroll] % this.pageWidth;
	this.move(fill)
}, move: function (num, quick) {
	var thisTemp = this;
	var thisMove = num / 5;
	var theEnd = false;
	if (!quick) {
		if (thisMove > this.space) {
			thisMove = this.space
		}

		if (thisMove < -this.space) {
			thisMove = -this.space
		}
	}

	if (Math.abs(thisMove) < 1 && thisMove != 0) {
		thisMove = thisMove >= 0 ? 1 : -1
	} else {
		thisMove = Math.round(thisMove)
	}

	var temp = this.scDiv[this._scroll] + thisMove;
	if (thisMove > 0) {
		if (this.circularly) {
			if (this.scDiv[this._scroll] + thisMove >= this.lDiv01[this._sWidth]) {
				this.scDiv[this._scroll] = this.scDiv[this._scroll] + thisMove - this.lDiv01[this._sWidth]
			} else {
				this.scDiv[this._scroll] += thisMove
			}
		} else {
			if (this.scDiv[this._scroll] + thisMove >= this.lDiv01[this._sWidth] - this.pageWidth) {
				this.scDiv[this._scroll] = this.lDiv01[this._sWidth] - this.frameWidth;
				this._state = "ready";
				theEnd = true
			} else {
				this.scDiv[this._scroll] += thisMove
			}
		}
	} else {
		if (this.circularly) {
			if (this.scDiv[this._scroll] + thisMove < 0) {
				this.scDiv[this._scroll] = this.lDiv01[this._sWidth] + this.scDiv[this._scroll] + thisMove
			} else {
				this.scDiv[this._scroll] += thisMove
			}
		} else {
			if (this.scDiv[this._scroll] + thisMove <= 0) {
				this.scDiv[this._scroll] = 0;
				this._state = "ready";
				theEnd = true
			} else {
				this.scDiv[this._scroll] += thisMove
			}
		}
	}

	this.accountPageIndex();
	if (theEnd) {
		this.accountPageIndex('end');
		return
	}

	num -= thisMove;
	if (Math.abs(num) == 0) {
		this._state = "ready";
		if (this.autoPlay) {
			this.play()
		}

		this.accountPageIndex();
		return
	} else {
		clearTimeout(this._scrollTimeObj);
		this._scrollTimeObj = setTimeout(function () {
			thisTemp.move(num, quick)
		}, this.speed)
	}
}, pre: function () {
	if (this._state != "ready") {
		return
	}

	this._state = "stoping";
	this.move(-this.pageWidth)
}, next: function (reStar) {
	if (this._state != "ready") {
		return
	}

	this._state = "stoping";
	if (this.circularly) {
		this.move(this.pageWidth)
	} else {
		if (this.scDiv[this._scroll] >= this.lDiv01[this._sWidth] - this.frameWidth) {
			this._state = "ready";
			if (reStar) {
				this.pageTo(0)
			}
		} else {
			this.move(this.pageWidth)
		}
	}
}, play: function () {
	var thisTemp = this;
	if (!this.autoPlay) {
		return
	}

	clearInterval(this._autoTimeObj);
	this._autoTimeObj = setInterval(function () {
		thisTemp.next(true)
	}, this.autoPlayTime * 1000)
}, stop: function () {
	clearInterval(this._autoTimeObj)
}, pageTo: function (num) {
	if (this.pageIndex == num) {
		return
	}

	if (num < 0) {
		num = this.pageLength - 1
	}

	clearTimeout(this._scrollTimeObj);
	clearInterval(this._scrollTimeObj);
	this._state = "stoping";
	var fill = num * this.frameWidth - this.scDiv[this._scroll];
	this.move(fill, true)
}, accountPageIndex: function (type) {
	var pageIndex = Math.round(this.scDiv[this._scroll] / this.frameWidth);
	if (pageIndex >= this.pageLength) {
		pageIndex = 0
	}

	this.scrollLeft = this.scDiv[this._scroll];
	var scrollMax = this.lDiv01[this._sWidth] - this.frameWidth;
	if (!this.circularly) {
		this.eof = this.scrollLeft >= scrollMax;
		this.bof = this.scrollLeft <= 0
	}

	if (type == 'end' && typeof(this.onmove) === 'function') {
		this.onmove()
	}

	if (pageIndex == this.pageIndex) {
		return
	}

	this.pageIndex = pageIndex;
	if (this.pageIndex > Math.floor(this.lDiv01[this.upright ? 'offsetHeight' : 'offsetWidth'] / this.frameWidth)) {
		this.pageIndex = 0
	}

	var i;
	for (i = 0; i < this.dotObjArr.length; i++) {
		if (i == this.pageIndex) {
			this.dotObjArr[i].className = this.dotOnClassName
		} else {
			this.dotObjArr[i].className = this.dotClassName
		}
	}

	if (typeof(this.onpagechange) === 'function') {
		this.onpagechange(Math.min(this.pageIndex, this.pageLength-1), this.pageLength)
	}
}, iPadX: 0, iPadLastX: 0, iPadStatus: 'ok', iPad: function () {
	if (typeof(window.ontouchstart) === 'undefined') {
		return
	}

	if (!this.touch) {
		return
	}

	var tempThis = this;
	this.addEvent(this.scDiv, 'touchstart', function (e) {
		tempThis._touchstart(e)
	});
	this.addEvent(this.scDiv, 'touchmove', function (e) {
		tempThis._touchmove(e)
	});
	this.addEvent(this.scDiv, 'touchend', function (e) {
		tempThis._touchend(e)
	})
}, _touchstart: function (e) {
	this.stop();
	this.iPadX = e.touches[0].pageX;
	this.iPadScrollX = window.pageXOffset;
	this.iPadScrollY = window.pageYOffset;
	this.scDivScrollLeft = this.scDiv[this._scroll]
}, _touchmove: function (e) {
	if (e.touches.length > 1) {
		this._touchend()
	}

	this.iPadLastX = e.touches[0].pageX;
	var cX = this.iPadX - this.iPadLastX;
	if (this.iPadStatus == 'ok') {
		if (this.iPadScrollY == window.pageYOffset && this.iPadScrollX == window.pageXOffset && Math.abs(cX) > 20) {
			this.iPadStatus = 'touch'
		} else {
			return
		}
	}

	this._state = 'touch';
	var scrollNum = this.scDivScrollLeft + cX;
	if (scrollNum >= this.lDiv01[this._sWidth]) {
		if (this.circularly) {
			scrollNum = scrollNum - this.lDiv01[this._sWidth]
		} else {
			return
		}
	}

	if (scrollNum < 0) {
		if (this.circularly) {
			scrollNum = scrollNum + this.lDiv01[this._sWidth]
		} else {
			return
		}
	}

	this.scDiv[this._scroll] = scrollNum;
	e.preventDefault()
}, _touchend: function (e) {
	if (this.iPadStatus != 'touch') {
		return
	}

	this.iPadStatus = 'ok';
	var cX = this.iPadX - this.iPadLastX;
	if (cX < 0) {
		this.rightEnd()
	} else {
		this.leftEnd()
	}

	this.play()
}, _overTouch: function () {
	this.iPadStatus = 'ok'
}, $: function (objName) {
	if (document.getElementById) {
		return eval('document.getElementById("' + objName + '")')
	} else {
		return eval('document.all.' + objName)
	}
}, isIE: navigator.appVersion.indexOf("MSIE") != -1 ? true : false, addEvent: function (obj, eventType, func) {
	if (obj.attachEvent) {
		obj.attachEvent("on" + eventType, func)
	} else {
		obj.addEventListener(eventType, func, false)
	}
}, delEvent: function (obj, eventType, func) {
	if (obj.detachEvent) {
		obj.detachEvent("on" + eventType, func)
	} else {
		obj.removeEventListener(eventType, func, false)
	}
}, preventDefault: function (e) {
	if (e.preventDefault) {
		e.preventDefault()
	} else {
		e.returnValue = false
	}
}};

/*
 舌签构造函数
 SubShowClass(ID[,eventType][,defaultID][,openClassName][,closeClassName])
 version 1.33
 */
function SubShowClass(ID, eventType, defaultID, openClassName, closeClassName) {
	var t = this;
	this.parentObj = this.$(ID);
	if (this.parentObj == null && ID != "none") {
		throw new Error("SubShowClass(ID)参数错误:ID 对像不存在!(value:" + ID + ")")
	}

	this.lock = false;
	this.label = [];
	this.defaultID = defaultID == null ? 0 : defaultID;
	this.selectedIndex = this.defaultID;
	this.openClassName = openClassName == null ? "selected" : openClassName;
	this.closeClassName = closeClassName == null ? "" : closeClassName;
	this.mouseIn = false;
	var mouseInFunc = function () {
		t.mouseIn = true
	};
	var mouseOutFunc = function () {
		t.mouseIn = false
	};
	if (ID != "none" && ID != "") {
		this.addEvent(this.parentObj, "mouseover", mouseInFunc)
	}

	if (ID != "none" && ID != "") {
		this.addEvent(this.parentObj, "mouseout", mouseOutFunc)
	}

	if (typeof(eventType) != "string") {
		eventType = "onmousedown"
	}

	eventType = eventType.toLowerCase();
	switch (eventType) {
		case"onmouseover":
			this.eventType = "mouseover";
			break;
		case"onclick":
			this.eventType = "click";
			break;
		case"onmouseup":
			this.eventType = "mouseup";
			break;
		default:
			this.eventType = "mousedown"
	}

	this.autoPlay = false;
	this.autoPlayTimeObj = null;
	this.spaceTime = 5000
};
SubShowClass.prototype = {version: "1.31", author: "mengjia", _delay: 200, _setClassName: function (obj, type) {
	var temp;
	temp = obj.className;
	if (temp) {
		temp = temp.replace(this.openClassName, "");
		temp = temp.replace(this.closeClassName, "");
		temp += " " + (type == "open" ? this.openClassName : this.closeClassName)
	} else {
		temp = (type == "open" ? this.openClassName : this.closeClassName)
	}

	obj.className = temp
}, addLabel: function (labelID, contID, parentBg, springEvent, blurEvent) {
	var t = this;
	var labelObj = this.$(labelID);
	var contObj = this.$(contID);
	if (labelObj == null && labelID != "none") {
		throw new Error("addLabel(labelID)参数错误:labelID 对像不存在!(value:" + labelID + ")")
	}

	var TempID = this.label.length;
	if (parentBg == "") {
		parentBg = null
	}

	this.label.push([labelID, contID, parentBg, springEvent, blurEvent]);
	var tempFunc = function () {
		if (t.eventType == 'mouseover') {
			clearTimeout(labelObj._timeout);
			labelObj._timeout = setTimeout(function () {
				t.select(TempID)
			}, t._delay)
		} else {
			t.select(TempID)
		}
	};
	if (labelID != "none") {
		this.addEvent(labelObj, this.eventType, tempFunc);
		if (t.eventType == 'mouseover') {
			this.addEvent(labelObj, 'mouseout', function () {
				clearTimeout(labelObj._timeout)
			})
		}
	}

	if (TempID == this.defaultID) {
		if (labelID != "none") {
			this._setClassName(labelObj, "open")
		}

		if (this.$(contID)) {
			contObj.style.display = ""
		}

		if (this.ID != "none") {
			if (parentBg != null) {
				this.parentObj.style.background = parentBg
			}
		}

		if (springEvent != null) {
			eval(springEvent)
		}
	} else {
		if (labelID != "none") {
			this._setClassName(labelObj, "close")
		}

		if (contObj) {
			contObj.style.display = "none"
		}
	}

	var mouseInFunc = function () {
		t.mouseIn = true
	};
	var mouseOutFunc = function () {
		t.mouseIn = false
	};
	if (contObj) {
		this.addEvent(contObj, 'mouseover', mouseInFunc);
		this.addEvent(contObj, 'mouseout', mouseOutFunc)
	}
	if (this.label.length == 1) {
		this.selectedContEle = contObj
	}
	this.touchInit(contObj)
}, select: function (num, force) {
	if (typeof(num) != "number") {
		throw new Error("select(num)参数错误:num 不是 number 类型!(value:" + num + ")")
	}

	if (force != true && this.selectedIndex == num) {
		return
	}

	var i;
	for (i = 0; i < this.label.length; i++) {
		if (i == num) {
			if (this.label[i][0] != "none") {
				this._setClassName(this.$(this.label[i][0]), "open")
			}

			if (this.$(this.label[i][1])) {
				this.$(this.label[i][1]).style.display = "";
				if (this.showType) {
					this.extend.show(this.$(this.label[i][1]))
				}
				this.selectedContEle = this.$(this.label[i][1])
			}

			if (this.ID != "none") {
				if (this.label[i][2] != null) {
					this.parentObj.style.background = this.label[i][2]
				}
			}

			if (this.label[i][3] != null) {
				if (typeof(this.label[i][3]) == 'function') {
					this.label[i][3]()
				} else {
					eval(this.label[i][3])
				}
			}
		} else if (this.selectedIndex == i || force == true) {
			if (this.label[i][0] != "none") {
				this._setClassName(this.$(this.label[i][0]), "close")
			}

			if (this.$(this.label[i][1])) {
				this.$(this.label[i][1]).style.display = "none"
			}

			if (this.label[i][4] != null) {
				if (typeof(this.label[i][4]) == 'function') {
					this.label[i][4]()
				} else {
					eval(this.label[i][4])
				}
			}
		}
	}

	this.selectedIndex = num
}, random: function () {
	if (arguments.length != this.label.length) {
		throw new Error("random()参数错误:参数数量与标签数量不符!(length:" + arguments.length + ")")
	}

	var sum = 0, i;
	for (i = 0; i < arguments.length; i++) {
		sum += arguments[i]
	}

	var randomNum = Math.random(), percent = 0;
	for (i = 0; i < arguments.length; i++) {
		percent += arguments[i] / sum;
		if (randomNum < percent) {
			this.select(i);
			break
		}
	}
}, order: function () {
	if (arguments.length != this.label.length) {
		throw new Error("order()参数错误:参数数量与标签数量不符!(length:" + arguments.length + ")")
	}

	if (!(/^\d+$/).test(SubShowClass.sum)) {
		return
	}

	var count = 0, i;
	for (i = 0; i < arguments.length; i++) {
		count += arguments[i]
	}

	var num = SubShowClass.sum % count;
	if (num == 0) {
		num = count
	}

	var sum = 0;
	for (i = 0; i < arguments.length; i++) {
		sum += arguments[i];
		if (sum >= num) {
			this.select(i);
			break
		}
	}
}, play: function (spTime) {
	var t = this;
	if (typeof(spTime) == "number") {
		this.spaceTime = spTime
	}

	clearInterval(this.autoPlayTimeObj);
	this.autoPlayTimeObj = setInterval(function () {
		t.autoPlayFunc()
	}, this.spaceTime);
	this.autoPlay = true
}, autoPlayFunc: function () {
	if (this.autoPlay == false || this.mouseIn == true) {
		return
	}

	this.nextLabel()
}, nextLabel: function () {
	var t = this;
	var index = this.selectedIndex;
	index++;
	if (index >= this.label.length) {
		index = 0
	}

	this.select(index);
	if (this.autoPlay == true) {
		clearInterval(this.autoPlayTimeObj);
		this.autoPlayTimeObj = setInterval(function () {
			t.autoPlayFunc()
		}, this.spaceTime)
	}
}, previousLabel: function () {
	var t = this;
	var index = this.selectedIndex;
	index--;
	if (index < 0) {
		index = this.label.length - 1
	}

	this.select(index);
	if (this.autoPlay == true) {
		clearInterval(this.autoPlayTimeObj);
		this.autoPlayTimeObj = setInterval(function () {
			t.autoPlayFunc()
		}, this.spaceTime)
	}
}, preLabel: function () {
	this.previousLabel()
}, stop: function () {
	clearInterval(this.autoPlayTimeObj);
	this.autoPlay = false
}, $: function (objName) {
	if (document.getElementById) {
		return eval('document.getElementById("' + objName + '")')
	} else {
		return eval('document.all.' + objName)
	}
}, addEvent: function (obj, eventType, func) {
	if (obj.attachEvent) {
		obj.attachEvent("on" + eventType, func)
	} else {
		obj.addEventListener(eventType, func, false)
	}
}, delEvent: function (obj, eventType, func) {
	if (obj.detachEvent) {
		obj.detachEvent("on" + eventType, func)
	} else {
		obj.removeEventListener(eventType, func, false)
	}
}, touchX: 0, touchLastX: 0, touchStatus: 'ok', touchInit: function (obj) {
	if (!/\((iPhone|iPad|iPod)/i.test(navigator.userAgent)) {
		return
	}

	var tempThis = this;
	this.addEvent(obj, 'touchstart', function (e) {
		tempThis._touchstart(e)
	});
	this.addEvent(obj, 'touchmove', function (e) {
		tempThis._touchmove(e)
	});
	this.addEvent(obj, 'touchend', function (e) {
		tempThis._touchend(e)
	})
}, _touchstart: function (e) {
	this.touchX = e.touches[0].pageX;
	this.scrollX = window.pageXOffset;
	this.scrollY = window.pageYOffset
}, _touchmove: function (e) {
	if (e.touches.length > 1) {
		this.touchStatus = 'ok';
		return
	}

	this.touchLastX = e.touches[0].pageX;
	var cX = this.touchX - this.touchLastX;
	if (this.touchStatus == 'ok') {
		if (this.scrollY == window.pageYOffset && this.scrollX == window.pageXOffset && Math.abs(cX) > 50) {
			this.selectedContEle.parentNode.style.overflowX = 'hidden';
			this.selectedContEle.style.width = this.selectedContEle.offsetWidth + 'px';
			this.touchStatus = 'touch'
		} else {
			return
		}
	}

	if (this.touchStatus == 'touch') {
		this.selectedContEle.style.marginLeft = -cX + 'px';
		e.preventDefault()
	}
}, _touchend: function (e) {
	if (this.touchStatus != 'touch') {
		return
	}

	this.touchStatus = 'ok';
	var cX = this.touchX - this.touchLastX;
	var tempThis = this;
	var speed = Math.round(this.selectedContEle.offsetWidth / 5);
	this.selectedContEle.style.marginLeft = '';
	this.selectedContEle.parentNode.style.overflowX = '';
	this.selectedContEle.style.width = '';
	if (cX < 0) {
		this.preLabel()
	} else {
		this.nextLabel()
	}

	this.extend.show(tempThis.selectedContEle)
}, extend: {setOpacity: function (obj, opacity) {
	if (typeof(obj.style.opacity) != 'undefined') {
		obj.style.opacity = opacity
	} else {
		obj.style.filter = 'Alpha(Opacity=' + (opacity * 100) + ')'
	}
}, show: function (obj, timeLimit) {
	var tempThis = this;
	this.setOpacity(obj, 0);
	if (!timeLimit) {
		timeLimit = 200
	}

	var opacity = 0, step = timeLimit / 20;
	clearTimeout(obj._extend_show_timeOut);
	obj._extend_show_timeOut = setTimeout(function () {
		if (opacity >= 1) {
			return
		}

		opacity += 1 / step;
		tempThis.setOpacity(obj, opacity);
		obj._extend_show_timeOut = setTimeout(arguments.callee, 20)
	}, 20)
}, actPX: function (obj, key, start, end, speed, endFn, u) {
	if (typeof(u) == 'undefined') {
		u = 'px'
	}

	clearTimeout(obj['_extend_actPX' + key.replace(/\-\.\=/, '_') + '_timeOut']);
	if (start > end) {
		speed = -Math.abs(speed)
	} else {
		speed = Math.abs(speed)
	}

	var now = start;
	var length = end - start;
	obj['_extend_actPX' + key.replace(/\-\.\=/, '_') + '_timeOut'] = setTimeout(function () {
		now += speed;
		var space = end - now;
		if (start < end) {
			if (space < length / 3) {
				speed = Math.ceil(space / 3)
			}

			if (space <= 0) {
				obj[key] = end + u;
				if (endFn) {
					endFn()
				}

				return
			}
		} else {
			if (space > length / 3) {
				speed = Math.floor(space / 3)
			}

			if (space >= 0) {
				obj[key] = end + u;
				if (endFn) {
					endFn()
				}

				return
			}
		}

		obj[key] = now + u;
		obj['_extend_actPX' + key.replace(/\-\.\=/, '_') + '_timeOut'] = setTimeout(arguments.callee, 20)
	}, 20)
}}};

//模拟Select mengjia 2012.06.03
function DivSelect(id, divId, className) {
	this.id = id;
	this.divId = divId;
	this.divClassName = className || 'selectView';
	this.ele = this.$(this.id);
	if (!this.ele) {
		return
	}

	var that = this;
	this.status = "close";
	this.parentObj = this.ele.parentNode;
	while (this.readStyle(this.parentObj, "display") != "block") {
		if (this.parentObj.parentNode) {
			this.parentObj = this.parentObj.parentNode
		} else {
			break
		}
	}

	this.parentObj.style.position = "relative";
	var sp = this.absPosition(this.ele, this.parentObj);
	this.ele.style.visibility = "hidden";
	this.__div = document.createElement("div");
	if (divId) {
		this.__div.id = divId
	}

	if (this.divClassName) {
		this.__div.className = this.divClassName
	}

	this.parentObj.appendChild(this.__div);
	this.__div.style.width = this.ele.offsetWidth + "px";
	this.__div.style.position = "absolute";
	this.__div.style.left = sp.left + "px";
	this.__div.style.top = sp.top + "px";
	this.__div.onclick = function () {
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
		}

		temp.num = i;
		temp.onmouseover = function () {
			that.showSelectIndex(this.num)
		};
		temp.onclick = function () {
			that.select(this.innerHTML)
		}
	}
};
DivSelect.prototype = {showSelectIndex: function (num) {
	if (typeof(num) === 'undefined') {
		num = this.ele.selectedIndex
	}

	if (typeof(this.showIndex) !== 'undefined') {
		this.list[this.showIndex].className = ''
	}

	this.showIndex = num;
	this.list[this.showIndex].className = 'selected'
}, select: function (txt) {
	for (var i = 0; i < this.ele.options.length; i++) {
		if (this.ele.options[i].innerHTML == txt) {
			this.ele.selectedIndex = i;
			if (this.ele.onchange) {
				this.ele.onchange()
			}

			this.__div_title.innerHTML = txt;
			break
		}
	}
}, setIndex: function (num) {
	if (num < 0 || num >= this.list.length) {
		return
	}
	this.ele.selectedIndex = num;
	if (this.ele.onchange) {
		this.ele.onchange()
	}

	this.__div_title.innerHTML = this.list[num].innerHTML
}, clickClose: function (e) {
	var thisObj = e.target ? e.target : event.srcElement;
	var that = this;
	do {
		if (thisObj == that.__div) {
			return
		}

		if (thisObj.tagName == "BODY") {
			break
		}

		thisObj = thisObj.parentNode
	} while (thisObj.parentNode);
	that.close()
}, keyDown: function (e) {
	var num = this.showIndex;
	if (e.keyCode == 38) {
		num--;
		if (num < 0) {
			num = this.list.length - 1
		}

		this.showSelectIndex(num);
		this.stopDefault(e)
	}

	if (e.keyCode == 40) {
		num++;
		if (num >= this.list.length) {
			num = 0
		}

		this.showSelectIndex(num);
		this.stopDefault(e)
	}

	if (e.keyCode == 13 || e.keyCode == 9) {
		this.setIndex(num);
		this.stopDefault(e);
		this.close()
	}

	if (e.keyCode == 27) {
		this.close()
	}
}, open: function () {
	var that = this;
	this.showSelectIndex();
	this.__div_list.style.display = "block";
	this.status = "open";
	this.__closeFn = function (e) {
		that.clickClose(e)
	};
	this.__keyFn = function (e) {
		that.keyDown(e)
	};
	this.addEvent(document, "click", this.__closeFn);
	this.addEvent(document, "keydown", this.__keyFn)
}, close: function () {
	var that = this;
	this.__div_list.style.display = "none";
	this.status = "close";
	this.delEvent(document, "click", this.__closeFn);
	this.delEvent(document, "keydown", this.__keyFn)
}, click: function () {
	if (this.status == "open") {
		this.close()
	} else {
		this.open()
	}
}, $: function (objName) {
	if (document.getElementById) {
		return eval('document.getElementById("' + objName + '")')
	} else {
		return eval('document.all.' + objName)
	}
}, addEvent: function (obj, eventType, func) {
	if (obj.attachEvent) {
		obj.attachEvent("on" + eventType, func)
	} else {
		obj.addEventListener(eventType, func, false)
	}
}, delEvent: function (obj, eventType, func) {
	if (obj.detachEvent) {
		obj.detachEvent("on" + eventType, func)
	} else {
		obj.removeEventListener(eventType, func, false)
	}
}, readStyle: function (i, I) {
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
}, absPosition: function (obj, parentObj) {
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
	} catch (e) {
	}

	return{left: left, top: top}
}, stopDefault: function (e) {
	if (e.preventDefault) {
		e.preventDefault()
	} else {
		e.returnValue = false
	}
}};

//回顾日历组件
(function () {
	var _$ = function (id) {
		return document.getElementById(id)
	};

	function DateView(div) {
		if (typeof div == 'string') {
			this.__ele = _$(div)
		} else if (typeof div) {
			this.__ele = div
		}

		if (!div) {
			return
		}

		var template = '<div class="dv_title">';
		template += '<a href="javascript:void(0)" class="preMonth">&lt;&lt;</a>';
		template += '<a href="javascript:void(0)" class="nextMonth">&gt;&gt;</a>';
		template += '<span class="dvt_cont"><select size="1"></select><select size="1"></select></span>';
		template += '</div>';
		template += '<dl class="dv_day">';
		template += '<dd class="sun">日</dd>';
		template += '<dd>一</dd>';
		template += '<dd>二</dd>';
		template += '<dd>三</dd>';
		template += '<dd>四</dd>';
		template += '<dd>五</dd>';
		template += '<dd class="sun">六</dd>';
		template += '</dl>';
		this.__ele.innerHTML = template;
		var a = this.__ele.getElementsByTagName('a');
		this.__preMonth = a[0];
		this.__nextMonth = a[1];
		var s = this.__ele.getElementsByTagName('select');
		this.__yearSelect = s[0];
		this.__monthSelect = s[1];
		this.__dateTable = document.createElement('div');
		this.__ele.appendChild(this.__dateTable);
		this.__dateTable.className = 'dv_date'
	};
	DateView.prototype = {startDate: "2002-12-21", startDateObj: null, selectDate: "", selectDateObj: new Date(), showDateObj: null, nowDateObj: new Date(), endDate: '', endDateObj: null, dataTableId: 'dateTable', init: function () {
		var tempThis = this;
		var hDate = this.startDate.match(/(\d{4})-(\d{1,2})-(\d{1,2})/);
		if (!hDate) {
			throw"日期格式不正确！";
		}

		this.startDateObj = new Date(parseInt(hDate[1]), parseInt(hDate[2]) - 1, parseInt(hDate[3]));
		if (this.nowDateObj < this.startDateObj) {
			return
		}

		if (this.selectDate) {
			var hDate = this.selectDate.match(/(\d{4})-(\d{1,2})-(\d{1,2})/);
			if (!hDate) {
				throw"日期格式不正确！";
			}

			this.selectDateObj = new Date(parseInt(hDate[1]), parseInt(hDate[2]) - 1, parseInt(hDate[3]))
		}

		this.showDateObj = new Date(this.selectDateObj);
		if (this.endDate) {
			var hDate = this.endDate.match(/(\d{4})-(\d{1,2})-(\d{1,2})/);
			if (!hDate) {
				throw"日期格式不正确！";
			}

			this.endDateObj = new Date(parseInt(hDate[1]), parseInt(hDate[2]) - 1, parseInt(hDate[3]))
		} else {
			this.endDateObj = this.nowDateObj
		}

		this.__yearSelect.innerHTML = "";
		for (var i = this.startDateObj.getFullYear(); i <= this.endDateObj.getFullYear(); i++) {
			var option = new Option();
			this.__yearSelect.options.add(option);
			option.innerHTML = i;
			option.value = i
		}

		this.__yearSelect.onchange = this.__yearSelect.onclick = function () {
			tempThis.setYear(this.value)
		};
		this.__monthSelect.onchange = this.__monthSelect.onclick = function () {
			tempThis.setMonth(this.value)
		};
		this.__preMonth.onclick = function () {
			tempThis.preMonth();
			this.blur();
			return false
		};
		this.__nextMonth.onclick = function () {
			tempThis.nextMonth();
			this.blur();
			return false
		};
		this.__dateTable.onclick = function (e) {
			e = e || event;
			var ele = e.target || e.srcElement;
			if (ele.tagName === 'A') {
				tempThis.click(ele)
			}
		};
		this.show()
	}, setYear: function (year) {
		if (year == this.showDateObj.getFullYear()) {
			return
		}

		this.showDateObj.setYear(year);
		if (this.showDateObj < this.startDateObj) {
			this.showDateObj = new Date(this.startDateObj)
		}

		if (this.showDateObj > this.nowDateObj) {
			this.showDateObj = new Date(this.nowDateObj)
		}

		this.show()
	}, setMonth: function (month) {
		if (month - 1 == this.showDateObj.getMonth()) {
			return
		}

		this.showDateObj.setMonth(month - 1);
		this.show()
	}, preMonth: function () {
		this.showDateObj.setMonth(this.showDateObj.getMonth() - 1);
		this.show()
	}, nextMonth: function () {
		this.showDateObj.setMonth(this.showDateObj.getMonth() + 1);
		this.show()
	}, show: function (date) {
		if (date) {
			var hDate = date.match(/(\d{4})-(\d{1,2})-(\d{1,2})/);
			if (!hDate) {
				throw"日期格式不正确！";
			}

			this.showDateObj = new Date(parseInt(hDate[1]), parseInt(hDate[2]) - 1, parseInt(hDate[3]))
		}

		var year = this.showDateObj.getFullYear();
		var month = this.showDateObj.getMonth();
		var day = this.showDateObj.getDate();
		if (year == this.startDateObj.getFullYear() && month == this.startDateObj.getMonth()) {
			this.__preMonth.style.visibility = 'hidden'
		} else {
			this.__nextMonth.style.visibility = 'inherit'
		}

		if (year == this.nowDateObj.getFullYear() && month == this.nowDateObj.getMonth()) {
			this.__nextMonth.style.visibility = 'hidden'
		} else {
			this.__preMonth.style.visibility = 'inherit'
		}

		this.__yearSelect.value = this.showDateObj.getFullYear();
		var minMonth = 1, maxMonth = 12;
		if (year == this.startDateObj.getFullYear()) {
			minMonth = this.startDateObj.getMonth() + 1
		}

		if (year == this.endDateObj.getFullYear()) {
			maxMonth = this.endDateObj.getMonth() + 1
		}

		this.__monthSelect.innerHTML = '';
		for (var i = minMonth; i <= maxMonth; i++) {
			var tmpOption = new Option();
			this.__monthSelect.options.add(tmpOption);
			tmpOption.innerHTML = i + '月';
			tmpOption.value = i
		}

		this.__monthSelect.value = this.showDateObj.getMonth() + 1;
		var forinDay = new Date(year, month, 1);
		var count = sum = forinDay.getDay();
		var tableHTML = '<table cellpadding="0" cellspacing="0" border="0"><tr>';
		for (var i = 0; i < sum; i++) {
			tableHTML += '<td>&nbsp;</td>'
		}

		while (forinDay.getMonth() == month) {
			if (sum == 7) {
				tableHTML += '</tr><tr>';
				sum = 0
			}

			sum++;
			count++;
			if (forinDay < this.startDateObj || forinDay > this.endDateObj) {
				tableHTML += '<td><span>' + forinDay.getDate() + '</span></td>'
			} else {
				var className = '';
				if (year == this.nowDateObj.getFullYear() && month == this.nowDateObj.getMonth() && forinDay.getDate() == this.nowDateObj.getDate()) {
					className = ' class="today"'
				}

				if (year == this.selectDateObj.getFullYear() && month == this.selectDateObj.getMonth() && forinDay.getDate() == this.selectDateObj.getDate()) {
					className = ' class="selected"'
				}

				tableHTML += '<td><a href="javascript:void(0)" onclick="return false"' + className + '>' + forinDay.getDate() + '</a></td>'
			}

			forinDay.setDate(forinDay.getDate() + 1)
		}

		for (var i = 0; i < 42 - count; i++) {
			if (sum == 7) {
				tableHTML += '</tr><tr>';
				sum = 0
			}

			sum++;
			tableHTML += '<td>&nbsp;</td>'
		}

		tableHTML += "</tr></table>";
		this.__dateTable.innerHTML = tableHTML
	}, click: function (ele) {
		var year = this.showDateObj.getFullYear();
		var month = this.showDateObj.getMonth();
		var date = ele.innerHTML;
		if (this.onclick) {
			this.onclick(year, month + 1, date)
		}

		this.selectDateObj = new Date(year, month, date);
		this.show()
	}};
	window.DateView = DateView
})();
