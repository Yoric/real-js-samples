/**
 * @author guangtian| guangtian@staff.sina.com.cn
 * @date 2015/4/16
 * 轮播图
 * example:
 * require(['common/scroll/scrollPic'], function (scrollPic) {
 *      new scrollPic({
 *          box: $(box),                //box为要移动的元素的父元素。position: absolute;
 *          prevEle: $(prevEle),       //向左滚动按钮
 *          nextEle: $(nextEle),        //向右滚动按钮
 *          hoverEle: '类名称',         //hover控制滚动到该元素
 *          direction: 'horizontal',    //'vertical' 纵向    'horizontal'  横向（默认）
 *          interval: 3000,             //动画时间
 *          loopNum: 3,                 //每次轮播移动元素个数
 *          displayNum: 1,              //显示几个元素
 *          hand: false,                //是否手动滚动
 *          sideMaskPrev: $(sideMaskPrev),    //边界外蒙版元素前一个
 *          sideMaskNext: $(sideMaskNext),   //边界外蒙版元素后一个
 *          sideMask: false,             //边界外有被遮挡的图片，默认为false; 此时两边应被多加一组图片。
 *          hideScrollBar: false,          //是否隐藏滚动按钮 （移动端使用）
 *          callback: callback           //动画结束后的回调  返回参数 {obj: 当前显示对象或者当前显示第一个对象}
 *      });
 * }
 */
define(function () {
    var scrollPic = function (opt) {
        this.index = 0;               //初始化序号，轮播前后需添加若干元素，添加后此变量显示当前看到的元素在新队列中的序号
        this.box = opt.box;           //移动的父元素
        this.docWidth = $(document).width();   //文档宽度
        this.config = {
            direction: opt.direction || 'horizontal',   //滚动方向
            interval: opt.interval || 5000,             //动画间隔时间
            loopNum: opt.loopNum || 1,                  //每次滚动元素个数
            displayNum: opt.displayNum || 1,            //显示多少个
            hand: !!opt.hand,                           //是否手动滚动
            prevEle: opt.prevEle || '',                //前翻按钮元素
            nextEle: opt.nextEle || '',                //后翻按钮元素
            hoverEle: opt.hoverEle || '',              //hover滚动元素
            sideMaskPrev: opt.sideMaskPrev || '',      //边界外蒙版元素，前一个
            sideMaskNext: opt.sideMaskNext || '',      //边界外蒙版元素，后一个
            sideMask: !!opt.sideMask,                  //是否边界外有被遮挡的图片。
            hideScrollBar: !!opt.hideScrollBar,          //是否隐藏滚动按钮 （移动端使用）
            callback: opt.callback                     //动画结束后的回调
        };
        this.pause = false;     //暂停自动滚动滚动
        this.indexHash = [];     //图片序号对应整个滚动序列的序号。
        this.init();
        var timer;
    };

    scrollPic.prototype = {
        init: function () {
            this.device = this.getDevice();                       //获取设备
            this.initPos = 0;                                     //初始位置，可能不为0
            this.frstChild = $(this.box.children()[0]);           //获取第一个元素，以获得每个元素的属性
            this.childNum = this.box.children().length;           //有多少个元素需要滚动
            this.boxWidth = this.frstChild.outerWidth(true);      //每个元素所占用的宽度
            this.boxHeight = this.frstChild.outerHeight(true);  //每个元素所占用的高度
            this.scrollHeight = this.boxHeight * this.config.loopNum;        //每次纵向滚动的距离
            this.scrollWidth = this.boxWidth * this.config.loopNum;          //每次横向滚动的距离
            this.setProp();
            this.setBoxWidth();
            if (!this.config.hand) {
                this.autoScroll();
            }
            this.setCurrentEle();
            this.bindEvent();
        },
        getDevice: function () {
            //获取设备
            var userAgent = window.navigator.userAgent.toLowerCase();
            if (userAgent.match(/ipad/)) {
                return 'ipad';
            } else {
                return 'pc';
            }
        },
        resizeBox: function () {
            /**
             * 文档大小变化时
             */
            this.docWidth = $(document).width();   //文档宽度
            if (this.config.sideMask) {
                if (this.docWidth > this.boxWidth) {
                    this.slideWidth = Math.round((this.docWidth - this.scrollWidth) / 2);
                    this.initPos = this.slideWidth - this.scrollWidth * 2;
                } else {
                    this.slideWidth = 0;
                    this.initPos = 0;
                }
                this.box.css('left', this.initPos - this.index * this.scrollWidth);
                this.config.sideMaskPrev.width(this.slideWidth);
                this.config.sideMaskNext.width(this.slideWidth);
                this.config.prevEle.css('left', this.slideWidth);
                this.config.nextEle.css('right', this.slideWidth);
            }
        },
        bindEvent: function () {
            var that = this;
            if (this.device === 'ipad' && this.config.hideScrollBar) {
                this.config.prevEle && this.config.prevEle.remove();
                this.config.nextEle && this.config.nextEle.remove();
            } else {
                //前翻按钮事件
                this.config.prevEle && this.config.prevEle.on('click', function () {
                    that.prev();
                });
                //后翻按钮事件
                this.config.nextEle && this.config.nextEle.on('click', function () {
                    that.next();
                });
                //自动滚动时鼠标Hover停止滚动
                if (!this.config.hand) {
                    this.box.parent().hover(function () {
                        that.pause = true;
                    }, function () {
                        that.pause = false;
                    });
                    this.config.hoverEle && this.config.hoverEle.hover(function () {
                        var index = $(this).data('num');
                        that.scrollTo(index);
                        that.stopautoScroll();
                    }, function () {
                        that.autoScroll();
                    });
                }
            }
            /**
             * 屏幕大小变化
             */
            $(window).resize(function () {
                that.resizeBox();
            });
        },
        setInitPos: function () {
            /**
             * 设置初始位置
             */
            if (this.config.direction == 'horizontal') {
                if (this.config.sideMask) {
                    if (this.docWidth > this.boxWidth) {
                        this.slideWidth = Math.round((this.docWidth - this.scrollWidth) / 2);
                        this.initPos = this.slideWidth - this.scrollWidth * 2;
                        this.config.sideMaskPrev.width(this.slideWidth);
                        this.config.sideMaskNext.width(this.slideWidth);
                        this.config.prevEle.css({'left': this.slideWidth, 'display': 'block'});
                        this.config.nextEle.css({'right': this.slideWidth, 'display': 'block'});
                    }
                } else {
                    this.initPos = -this.boxWidth * this.config.displayNum;
                }
                this.box.css('left', this.initPos);
            } else {
                if (this.config.sideMask) {
                    if (this.docHeight > this.boxHeight) {
                        this.slideHeight = Math.round((this.docHeight - this.scrollHeight) / 2);
                        this.initPos = this.slideHeight - this.scrollHeight * 2;
                        this.config.sideMaskPrev.height(this.slideHeight);
                        this.config.sideMaskNext.height(this.slideHeight);
                        this.config.prevEle.css({'top': this.slideHeight, 'display': 'block'});
                        this.config.nextEle.css({'bottom': this.slideHeight, 'display': 'block'});
                    }
                } else {
                    this.initPos = -this.boxHeight * this.config.displayNum;
                }
                this.box.css('top', this.initPos);
            }
        },
        setProp: function () {
            var that = this;
            //设置元素属性
            this.children = this.box.children();
            $.each(this.children, function (index, obj) {
                if (!$(obj).data('num')) {
                    $(obj).data('num', index);
                    that.indexHash[index] = index;
                }
            });
            this.config.hoverEle && $.each(this.config.hoverEle, function (index, obj) {
                if (!$(obj).data('num')) {
                    $(obj).data('num', index);
                }
            });
        },
        setBoxWidth: function () {
            /**
             * 设置滚动父元素的宽度
             * 循环滚动首先计算需要在前后各添加几个元素，然后根据总元素数计算宽度
             */
            var turnResidue = this.childNum % this.config.displayNum,
                i,
                addLoopNum = this.config.displayNum;    //添加的循环数，在两侧有遮挡元素时会有不同。
            //手动滚动，需要在前后都添加元素，前面需添加滚动数量个，后面补足即可, 如果后面余数大于1，还得再多补一排。
            this.turnTotal = Math.ceil(this.childNum / this.config.displayNum) + 1;   //需要分多少页滚动
            if (this.config.sideMask) {
                addLoopNum = this.config.displayNum * 2;
            }
            this.addEleNum = addLoopNum - turnResidue;                    //需要添加多少元素
            if (turnResidue > 1) {
                this.addEleNum += this.config.displayNum;
                this.turnTotal++;
            }
            if (this.addEleNum == 0) {
                this.turnTotal++;
            }

            var children = this.box.children();  //获取当前总元素个数
            //在队列前头插入后一排元素，用于前翻
            for (i = this.childNum - 1; i >= this.childNum - addLoopNum; i--) {
                this.box.prepend($(children[i]).clone());
            }
            //调整首屏显示
            this.setInitPos();
            this.index = addLoopNum;       //序号为显示的第一个元素,序号不是从0开始，是前后添加后当前显示的序号
            for (i = 0; i < this.indexHash.length; i++) {
                this.indexHash[i] = i + addLoopNum;
            }
            //在队列尾部添加前面需补元素，用于后翻
            for (i = 0; i < this.addEleNum; i++) {
                this.box.append($(children[i]).clone());
            }
            this.addEleNum += addLoopNum;
            this.eleTotal = this.childNum + this.addEleNum;                        //添加后元素总数
            this.children = this.box.children();
            this.box.width(this.boxWidth * this.box.children().length);   //设置移动元素宽度
        },
        setCurrentEle: function () {
            var that = this;
            /**
             * 设置当前元素标示，已备使用
             */
            $.each(this.children, function (index, obj) {
                if (index == that.index) {
                    $(obj).addClass('cur');
                } else {
                    $(obj).removeClass('cur');
                }
            });
        },
        //动画结束后的回调
        callback: function () {
            this.config.callback && typeof this.config.callback == 'function' && this.config.callback({
                obj: $(this.children[this.index]),
                index : this.index
            });
        },
        //向后滚动
        next: function () {
            var that = this;
            //ruguo
            if (that.animating) {
                return;
            }
            if (that.config.direction == 'horizontal') {
                if (that.config.sideMask) {
                    if (that.index + that.config.displayNum * 2 >= that.eleTotal - that.config.displayNum) {
                        that.index -= this.childNum;
                        that.box.css('left', that.initPos + that.scrollWidth);
                    }
                } else {
                    if (that.index + that.config.displayNum >= that.eleTotal - that.config.displayNum) {
                        that.index -= this.childNum;
                        that.box.css('left', -that.boxWidth * that.index);
                    }
                }
                that.index += that.config.loopNum;
                var left = parseInt(that.box.css('left'), 10);
                this.animating = true;
                that.box.animate({'left': left - that.scrollWidth}, function () {
                    that.animating = false;
                    that.callback();
                });
            } else {
                if (that.config.sideMask) {
                    if (that.index + that.config.displayNum * 2 >= that.eleTotal - that.config.displayNum) {
                        that.index -= this.childNum;
                        that.box.css('top', that.initPos + that.scrollHeight);
                    }
                } else {
                    if (that.index + that.config.displayNum >= that.eleTotal - that.config.displayNum) {
                        that.index -= this.childNum;
                        that.box.css('top', -that.boxHeight * that.index);
                    }
                }
                that.index += that.config.loopNum;
                var top = parseInt(that.box.css('top'), 10);
                that.animating = true;
                that.box.animate({'top': top - that.scrollHeight}, function () {
                    that.animating = false;
                    that.callback();
                });
            }
            this.setCurrentEle();
        },
        //向前滚动
        prev: function () {
            var that = this;
            if (that.animating) {
                return;
            }
            if (that.config.direction == 'horizontal') {
                if (that.config.sideMask) {
                    if (that.index - that.config.loopNum * 2 < that.config.loopNum) {
                        that.index += this.childNum;
                        that.box.css('left', -that.boxWidth * that.index + that.slideWidth);
                    }
                } else {
                    if (that.index - that.config.loopNum < that.config.loopNum) {
                        that.index += this.childNum;
                        that.box.css('left', -that.boxWidth * that.index);
                    }
                }
                that.index -= that.config.loopNum;
                var left = parseInt(that.box.css('left'), 10);
                this.animating = true;
                that.box.animate({'left': left + that.scrollWidth}, function () {
                    that.animating = false;
                    that.callback();
                });
            } else {
                if (that.config.sideMask) {
                    if (that.index - that.config.loopNum * 2 < that.config.loopNum) {
                        that.index += this.childNum;
                        that.box.css('top', -that.boxHeight * that.index + that.slideHeight);
                    }
                } else {
                    if (that.index - that.config.loopNum < that.config.loopNum) {
                        that.index += this.childNum;
                        that.box.css('top', -that.boxHeight * that.index);
                    }
                }
                that.index -= that.config.loopNum;
                var top = parseInt(that.box.css('top'), 10);
                that.animating = true;
                that.box.animate({'top': top + that.scrollHeight}, function () {
                    that.animating = false;
                    that.callback();
                });
            }
            this.setCurrentEle();
        },
        autoScroll: function () {
            //
            var that = this;
            timer = setInterval(function () {
                if (!that.pause) {
                    that.next();
                }
            }, this.config.interval);
        },
        stopautoScroll: function(){
            clearInterval(timer);
        },
        //滚动到指定位置
        scrollTo: function (index) {
            var that = this,
                left = parseInt(this.box.css('left'), 10),
                top = parseInt(this.box.css('top'), 10);
            //if (this.animating) {
                
                this.box.animate().stop();
            //}
            this.animating = true;
            this.index = this.indexHash[index];
            // console.log(this.index)
            if (this.config.direction == 'horizontal') {
                console.log("animate");
                this.box.animate({'left': -this.scrollWidth * (index + 1)}, function () {
                    that.animating = false;
                    that.callback();
                });
            } else {
                this.box.animate({'top': -this.scrollHeight * (index + 1)}, function () {
                    console.log("animate1");
                    that.animating = false;
                    that.callback();
                });
            }
        }
    };

    return scrollPic;
})
;