/**
 * @version 0.2
 * @author  jianminlu
 * @update  2013-07-02 11:19
 */
(function($){
    // 默认值
    $.qqScroll = {
        defaults:{
            direction:"right",  // 滚动方向
            step:1,             // 滚动步长
            speed:800,          // 滚动速度
            time:4000,          // 自动滚动间隔时间
            auto:true,          // 是否自动滚动
            prev:".prev",       // prev 按钮class
            next:".next",        // next 按钮class
            inner:".inner",        // next 按钮class
            list:".list",        // next 按钮class
            split:".split"        // next 按钮class
        }
    }
    /**
     * @name    wbScroll    微博滚动函数
     * @param   {Object}    初始值
     */
    $.fn.qqScroll = function (options){

        var opts = $.extend({}, $.qqScroll.defaults, options),
            obj = $(this),
            scroller = {};

            scroller.box = obj.find(opts.inner);
            scroller.list = scroller.box.find(opts.list);
            scroller.items = scroller.list.find(opts.split);
            scroller.itemSum = scroller.items.length;
            scroller.prevBtn = obj.find(opts.prev);
            scroller.nextBtn = obj.find(opts.next);
            scroller.itemWidth = scroller.items.outerWidth();
            scroller.itemHeight = scroller.items.outerHeight();

        scroller.fn = {
            start: function() {
                if (!opts.auto) {
                    return;
                }
                scroller.fn.stop();
                scroller.run = setTimeout(function() {
                    scroller.fn.goto(opts.direction);
                }, opts.time);
            },
            stop: function() {
                if (typeof(scroller.run) !== "undefined") {
                    clearTimeout(scroller.run);
                }
            },
            addControl: function() {
                if (scroller.prevBtn.length) {
                    scroller.prevBtn.bind("click", function() {
                        scroller.fn.goto(scroller.prevVal);
                    });
                }
                if (scroller.nextBtn.length) {
                    scroller.nextBtn.bind("click", function() {
                        scroller.fn.goto(scroller.nextVal);
                    });
                }
            },
            removeControl: function() {
                if (scroller.prevBtn.length) {
                    scroller.prevBtn.unbind("click");
                }
                if (scroller.nextBtn.length) {
                    scroller.nextBtn.unbind("click");
                }
            },
            goto: function(d) {
                scroller.fn.stop();
                scroller.fn.removeControl();
                scroller.box.stop(true);
                var _max;
                var _dis;
                switch (d) {
                    case "left":
                    case "top":
                        _max = 0;
                        if (d == "left") {
                            if (parseInt(scroller.box.scrollLeft(), 10) == 0) {
                                scroller.box.scrollLeft(scroller.itemSum * scroller.moveVal);
                            }
                            _dis = scroller.box.scrollLeft() - (scroller.moveVal * opts.step);

                            if (_dis < _max) {
                                _dis = _max
                            }
                            scroller.box.animate({"scrollLeft": _dis}, opts.speed, function() {
                                if (parseInt(scroller.box.scrollLeft(), 10) <= _max) {
                                    scroller.box.scrollLeft(0);
                                }
                                scroller.fn.addControl();
                            });
                        } else {
                            if (parseInt(scroller.box.scrollTop(), 10) == 0) {
                                scroller.box.scrollTop(scroller.itemSum * scroller.moveVal);
                            }
                            _dis = scroller.box.scrollTop() - (scroller.moveVal * opts.step);
                            if (_dis < _max) {
                                _dis = _max
                            }
                            scroller.box.animate({"scrollTop": _dis}, opts.speed, function() {
                                if (parseInt(scroller.box.scrollTop(), 10) <= _max) {
                                    scroller.box.scrollTop(0);
                                }
                                scroller.fn.addControl();
                            });
                        }
                        break;
                    case "right":
                    case "bottom":
                        _max = scroller.itemSum * scroller.moveVal;
                        if (d == "right") {
                            _dis = scroller.box.scrollLeft() + (scroller.moveVal * opts.step);
                            if (_dis > _max) {
                                _dis = _max
                            }
                            scroller.box.animate({"scrollLeft": _dis}, opts.speed, function() {
                                if (parseInt(scroller.box.scrollLeft(), 10) >= _max) {
                                    scroller.box.scrollLeft(0);
                                }
                            });
                        } else {
                            _dis = scroller.box.scrollTop() + (scroller.moveVal * opts.step);
                            if (_dis > _max) {
                                _dis = _max
                            }
                            scroller.box.animate({"scrollTop": _dis}, opts.speed, function() {
                                if (parseInt(scroller.box.scrollTop(), 10) >= _max) {
                                    scroller.box.scrollTop(0);
                                };
                            });
                        }
                        break;
                }
                scroller.box.queue(function() {
                    scroller.fn.addControl();
                    scroller.fn.start();
                    $(this).dequeue();
                });
            },

            init: function(){

                if (scroller.itemSum <= 1) {
                    return;
                }

                if (opts.direction == "left" || opts.direction == "right") {
                    if (scroller.itemWidth * scroller.itemSum <= scroller.box.outerWidth()) {return;}
                    scroller.prevVal = "left";
                    scroller.nextVal = "right";
                    scroller.moveVal = scroller.itemWidth;
                } else {
                    if (scroller.itemHeight * scroller.itemSum <= scroller.box.outerHeight()) {return;}
                    scroller.prevVal = "top";
                    scroller.nextVal = "bottom";
                    scroller.moveVal = scroller.itemHeight;
                }

                scroller.list.append(scroller.list.html());
                if (opts.direction == "left" || opts.direction == "right") {
                    scroller.list.css({
                        width: scroller.itemWidth * scroller.itemSum * 2 + "px"
                    })
                }

                scroller.box.hover(function() {
                    scroller.fn.stop();
                }, function() {
                    scroller.fn.start();
                });
                scroller.fn.addControl();
                scroller.fn.start();
            }
        }

        scroller.fn.init();
    }

})(jQuery);
/*  |xGv00|96c677252b4441f6ab2e48931db987f0 */