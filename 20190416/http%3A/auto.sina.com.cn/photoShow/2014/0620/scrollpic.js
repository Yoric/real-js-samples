/* 30,96,13 2013-03-26 18:54:27 */

//����ͼƬ���캯��
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
    this.lDiv02 = document.createElement("DIV");
};
ScrollPic.prototype = {
    version: "1.45",
    author: "mengjia",
    pageLength: 0,
    touch: true,
    scrollLeft: 0,
    eof: false,
    bof: true,
    initialize: function() {
        var thisTemp = this;
        if (!this.scrollContId) {
            throw new Error("����ָ��scrollContId.");
            return;
        };
        this.scDiv = this.$(this.scrollContId);
        if (!this.scDiv) {
            throw new Error("scrollContId������ȷ�Ķ���.(scrollContId = \"" + this.scrollContId + "\")");
            return;
        };
        this.scDiv.style[this.upright ? 'height': 'width'] = this.frameWidth + "px";
        this.scDiv.style.overflow = "hidden";
        this.lDiv01.innerHTML = this.scDiv.innerHTML;
        this.scDiv.innerHTML = "";
        this.scDiv.appendChild(this.stripDiv);
        this.stripDiv.appendChild(this.lDiv01);
        if (this.circularly) {
            this.stripDiv.appendChild(this.lDiv02);
            this.lDiv02.innerHTML = this.lDiv01.innerHTML;
            this.bof = false;
            this.eof = false;
        };
        this.stripDiv.style.overflow = "hidden";
        this.stripDiv.style.zoom = "1";
        this.stripDiv.style[this.upright ? 'height': 'width'] = "32766px";
        this.lDiv01.style.overflow = "hidden";
        this.lDiv01.style.zoom = "1";
        this.lDiv02.style.overflow = "hidden";
        this.lDiv02.style.zoom = "1";
        if (!this.upright) {
            this.lDiv01.style.cssFloat = "left";
            this.lDiv01.style.styleFloat = "left";
        };
        this.lDiv01.style.zoom = "1";
        if (this.circularly && !this.upright) {
            this.lDiv02.style.cssFloat = "left";
            this.lDiv02.style.styleFloat = "left";
        };
        this.lDiv02.style.zoom = "1";
        this.addEvent(this.scDiv, "mouseover",
            function() {
                thisTemp.stop();
                clearTimeout(thisTemp._pageToTimeObj);
            });
        this.addEvent(this.scDiv, "mouseout",
            function() {
                thisTemp.play();
            });
        if (this.arrLeftId) {
            this.alObj = this.$(this.arrLeftId);
            if (this.alObj) {
                this.addEvent(this.alObj, "mousedown",
                    function(e) {
                        thisTemp.rightMouseDown();
                        e = e || event;
                        thisTemp.preventDefault(e);
                    });
                this.addEvent(this.alObj, "mouseup",
                    function() {
                        thisTemp.rightEnd();
                    });
                this.addEvent(this.alObj, "mouseout",
                    function() {
                        thisTemp.rightEnd();
                    });
            }
        };
        if (this.arrRightId) {
            this.arObj = this.$(this.arrRightId);
            if (this.arObj) {
                this.addEvent(this.arObj, "mousedown",
                    function(e) {
                        thisTemp.leftMouseDown();
                        e = e || event;
                        thisTemp.preventDefault(e);
                    });
                this.addEvent(this.arObj, "mouseup",
                    function() {
                        thisTemp.leftEnd();
                    });
                this.addEvent(this.arObj, "mouseout",
                    function() {
                        thisTemp.leftEnd();
                    });
            }
        };
        var pages = Math.ceil(this.lDiv01[this.upright ? 'offsetHeight': 'offsetWidth'] / this.frameWidth),
            i,
            tempObj;
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
                        tempObj.className = this.dotOnClassName;
                    } else {
                        tempObj.className = this.dotClassName;
                    };
                    if (this.listType == 'number') {
                        tempObj.innerHTML = i + 1;
                    } else if (typeof(this.listType) == 'string') {
                        tempObj.innerHTML = this.listType;
                    } else {
                        tempObj.innerHTML = '';
                    };
                    tempObj.title = "��" + (i + 1) + "ҳ";
                    tempObj.num = i;
                    tempObj[this.listEvent] = function() {
                        var _this = this;
                        clearTimeout(thisTemp._pageToTimeObj);
                        thisTemp._pageToTimeObj = setTimeout(function(){
                            thisTemp.pageTo(_this.num);
                        }, 300);
                    }
                }
            }
        };
        this.scDiv[this.upright ? 'scrollTop': 'scrollLeft'] = 0;
        if (this.autoPlay) {
            this.play();
        };
        this._scroll = this.upright ? 'scrollTop': 'scrollLeft';
        this._sWidth = this.upright ? 'scrollHeight': 'scrollWidth';
        if (typeof(this.onpagechange) === 'function') {
            this.onpagechange();
        };
        this.iPad();
    },
    leftMouseDown: function() {
        if (this._state != "ready") {
            return;
        };
        var thisTemp = this;
        this._state = "floating";
        clearInterval(this._scrollTimeObj);
        this._scrollTimeObj = setInterval(function() {
                thisTemp.moveLeft();
            },
            this.speed);
        this.moveLeft();
    },
    rightMouseDown: function() {
        if (this._state != "ready") {
            return;
        };
        var thisTemp = this;
        this._state = "floating";
        clearInterval(this._scrollTimeObj);
        this._scrollTimeObj = setInterval(function() {
                thisTemp.moveRight();
            },
            this.speed);
        this.moveRight();
    },
    moveLeft: function() {
        if (this._state != "floating") {
            return;
        };
        if (this.circularly) {
            if (this.scDiv[this._scroll] + this.space >= this.lDiv01[this._sWidth]) {
                this.scDiv[this._scroll] = this.scDiv[this._scroll] + this.space - this.lDiv01[this._sWidth];
            } else {
                this.scDiv[this._scroll] += this.space;
            }
        } else {
            if (this.scDiv[this._scroll] + this.space >= this.lDiv01[this._sWidth] - this.frameWidth) {
                this.scDiv[this._scroll] = this.lDiv01[this._sWidth] - this.frameWidth;
                this.leftEnd();
            } else {
                this.scDiv[this._scroll] += this.space;
            }
        };
        this.accountPageIndex();
    },
    moveRight: function() {
        if (this._state != "floating") {
            return;
        };
        if (this.circularly) {
            if (this.scDiv[this._scroll] - this.space <= 0) {
                this.scDiv[this._scroll] = this.lDiv01[this._sWidth] + this.scDiv[this._scroll] - this.space;
            } else {
                this.scDiv[this._scroll] -= this.space;
            }
        } else {
            if (this.scDiv[this._scroll] - this.space <= 0) {
                this.scDiv[this._scroll] = 0;
                this.rightEnd();
            } else {
                this.scDiv[this._scroll] -= this.space;
            }
        };
        this.accountPageIndex();
    },
    leftEnd: function() {
        if (this._state != "floating" && this._state != 'touch') {
            return;
        };
        this._state = "stoping";
        clearInterval(this._scrollTimeObj);
        var fill = this.pageWidth - this.scDiv[this._scroll] % this.pageWidth;
        this.move(fill);
    },
    rightEnd: function() {
        if (this._state != "floating" && this._state != 'touch') {
            return;
        };
        this._state = "stoping";
        clearInterval(this._scrollTimeObj);
        var fill = -this.scDiv[this._scroll] % this.pageWidth;
        this.move(fill);
    },
    move: function(num, quick) {
        var thisTemp = this;
        var thisMove = num / 5;
        var theEnd = false;
        if (!quick) {
            if (thisMove > this.space) {
                thisMove = this.space;
            };
            if (thisMove < -this.space) {
                thisMove = -this.space;
            }
        };
        if (Math.abs(thisMove) < 1 && thisMove != 0) {
            thisMove = thisMove >= 0 ? 1 : -1;
        } else {
            thisMove = Math.round(thisMove);
        };
        var temp = this.scDiv[this._scroll] + thisMove;
        if (thisMove > 0) {
            if (this.circularly) {
                if (this.scDiv[this._scroll] + thisMove >= this.lDiv01[this._sWidth]) {
                    this.scDiv[this._scroll] = this.scDiv[this._scroll] + thisMove - this.lDiv01[this._sWidth];
                } else {
                    this.scDiv[this._scroll] += thisMove;
                }
            } else {
                if (this.scDiv[this._scroll] + thisMove >= this.lDiv01[this._sWidth] - this.frameWidth) {
                    this.scDiv[this._scroll] = this.lDiv01[this._sWidth] - this.frameWidth;
                    this._state = "ready";
                    theEnd = true;
                } else {
                    this.scDiv[this._scroll] += thisMove;
                }
            }
        } else {
            if (this.circularly) {
                if (this.scDiv[this._scroll] + thisMove < 0) {
                    this.scDiv[this._scroll] = this.lDiv01[this._sWidth] + this.scDiv[this._scroll] + thisMove;
                } else {
                    this.scDiv[this._scroll] += thisMove;
                }
            } else {
                if (this.scDiv[this._scroll] + thisMove <= 0) {
                    this.scDiv[this._scroll] = 0;
                    this._state = "ready";
                    theEnd = true;
                } else {
                    this.scDiv[this._scroll] += thisMove;
                }
            }
        };
        this.accountPageIndex();
        if (theEnd) {
            this.accountPageIndex('end');
            return;
        };
        num -= thisMove;
        if (Math.abs(num) == 0) {
            this._state = "ready";
            if (this.autoPlay) {
                this.play();
            };
            this.accountPageIndex();
            return;
        } else {
            clearTimeout(this._scrollTimeObj);
            this._scrollTimeObj = setTimeout(function() {
                    thisTemp.move(num, quick);
                },
                this.speed);
        }
    },
    pre: function() {
        if (this._state != "ready") {
            return;
        };
        this._state = "stoping";
        this.move( - this.pageWidth);
    },
    next: function(reStar) {
        if (this._state != "ready") {
            return;
        };
        this._state = "stoping";
        if (this.circularly) {
            this.move(this.pageWidth);
        } else {
            if (this.scDiv[this._scroll] >= this.lDiv01[this._sWidth] - this.frameWidth) {
                this._state = "ready";
                if (reStar) {
                    this.pageTo(0);
                }
            } else {
                this.move(this.pageWidth);
            }
        }
    },
    play: function() {
        var thisTemp = this;
        if (!this.autoPlay) {
            return;
        };
        clearInterval(this._autoTimeObj);
        this._autoTimeObj = setInterval(function() {
                thisTemp.next(true);
            },
            this.autoPlayTime * 1000);
    },
    stop: function() {
        clearInterval(this._autoTimeObj);
    },
    pageTo: function(num) {
        if (this.pageIndex == num) {
            return;
        };
        if (num < 0) {
            num = this.pageLength - 1;
        };
        clearTimeout(this._scrollTimeObj);
        clearInterval(this._scrollTimeObj);
        this._state = "stoping";
        var fill = num * this.frameWidth - this.scDiv[this._scroll];
        this.move(fill, true);
    },
    accountPageIndex: function(type) {
        var pageIndex = Math.round(this.scDiv[this._scroll] / this.frameWidth);
        if (pageIndex >= this.pageLength) {
            pageIndex = 0;
        };
        this.scrollLeft = this.scDiv[this._scroll];
        var scrollMax = this.lDiv01[this._sWidth] - this.frameWidth;
        if (!this.circularly) {
            this.eof = this.scrollLeft >= scrollMax;
            this.bof = this.scrollLeft <= 0;
        };
        if (type == 'end' && typeof(this.onmove) === 'function') {
            this.onmove();
        };
        if (pageIndex == this.pageIndex) {
            return;
        };
        this.pageIndex = pageIndex;
        if (this.pageIndex > Math.floor(this.lDiv01[this.upright ? 'offsetHeight': 'offsetWidth'] / this.frameWidth)) {
            this.pageIndex = 0;
        };
        var i;
        for (i = 0; i < this.dotObjArr.length; i++) {
            if (i == this.pageIndex) {
                this.dotObjArr[i].className = this.dotOnClassName;
            } else {
                this.dotObjArr[i].className = this.dotClassName;
            }
        };
        if (typeof(this.onpagechange) === 'function') {
            this.onpagechange();
        }
    },
    iPadX: 0,
    iPadLastX: 0,
    iPadStatus: 'ok',
    iPad: function() {
        if (typeof(window.ontouchstart) === 'undefined') {
            return;
        };
        if (!this.touch) {
            return;
        };
        var tempThis = this;
        this.addEvent(this.scDiv, 'touchstart',
            function(e) {
                tempThis._touchstart(e);
            });
        this.addEvent(this.scDiv, 'touchmove',
            function(e) {
                tempThis._touchmove(e);
            });
        this.addEvent(this.scDiv, 'touchend',
            function(e) {
                tempThis._touchend(e);
            })
    },
    _touchstart: function(e) {
        this.stop();
        this.iPadX = e.touches[0].pageX;
        this.iPadScrollX = window.pageXOffset;
        this.iPadScrollY = window.pageYOffset;
        this.scDivScrollLeft = this.scDiv[this._scroll];
    },
    _touchmove: function(e) {
        if (e.touches.length > 1) {
            this._touchend();
        };
        this.iPadLastX = e.touches[0].pageX;
        var cX = this.iPadX - this.iPadLastX;
        if (this.iPadStatus == 'ok') {
            if (this.iPadScrollY == window.pageYOffset && this.iPadScrollX == window.pageXOffset && Math.abs(cX) > 20) {
                this.iPadStatus = 'touch';
            } else {
                return;
            }
        };
        this._state = 'touch';
        var scrollNum = this.scDivScrollLeft + cX;
        if (scrollNum >= this.lDiv01[this._sWidth]) {
            if (this.circularly) {
                scrollNum = scrollNum - this.lDiv01[this._sWidth];
            } else {
                return;
            }
        };
        if (scrollNum < 0) {
            if (this.circularly) {
                scrollNum = scrollNum + this.lDiv01[this._sWidth];
            } else {
                return;
            }
        };
        this.scDiv[this._scroll] = scrollNum;
        e.preventDefault();
    },
    _touchend: function(e) {
        if (this.iPadStatus != 'touch') {
            return;
        };
        this.iPadStatus = 'ok';
        var cX = this.iPadX - this.iPadLastX;
        if (cX < 0) {
            this.rightEnd();
        } else {
            this.leftEnd();
        };
        this.play();
    },
    _overTouch: function() {
        this.iPadStatus = 'ok';
    },
    $: function(objName) {
        if (document.getElementById) {
            return eval('document.getElementById("' + objName + '")');
        } else {
            return eval('document.all.' + objName);
        }
    },
    isIE: navigator.appVersion.indexOf("MSIE") != -1 ? true: false,
    addEvent: function(obj, eventType, func) {
        if (obj.attachEvent) {
            obj.attachEvent("on" + eventType, func);
        } else {
            obj.addEventListener(eventType, func, false);
        }
    },
    delEvent: function(obj, eventType, func) {
        if (obj.detachEvent) {
            obj.detachEvent("on" + eventType, func);
        } else {
            obj.removeEventListener(eventType, func, false);
        }
    },
    preventDefault: function(e) {
        if (e.preventDefault) {
            e.preventDefault();
        } else {
            e.returnValue = false;
        }
    }
};