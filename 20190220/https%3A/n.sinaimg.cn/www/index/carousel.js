          var carousel = {
            init: function (opt) {
              var i = 0;
              var that = this;
              var $Box = opt.BoxId;
              if (typeof ($Box) === 'undefined') {
                return;
              }
              var $leftB = opt.leftBtn;
              var $rightB = opt.rightBtn;
              var time = opt.transitionTime;
              var $pointsBox = opt.pointsBox;
              var containerClass = "."+opt.containerClass;
              var itemClass = "."+opt.itemClass;
              var itemSelector=containerClass+" "+itemClass;
              var autoPlay = true;
              var dotOff=opt.dotOff;
              var dotOn=opt.dotOn;
              if (typeof (opt.autoPlay) == 'undefined') {
                autoPlay = false;
              } else {
                autoPlay = opt.autoPlay;
              }
              if (opt.itemWidth) {
                var boxW = opt.itemWidth;
              } else {
                var boxW = $Box.css('width').replace('px', '');
              }


              var $lis = $Box.find(itemSelector);
              //克隆第一张图片
              var clone = $lis.first().clone();
              //复制到列表最后

              $Box.find(containerClass).append(clone);
              var size = $Box.find(itemSelector).size();
              $Box.width = size * boxW;
              $Box.find(containerClass).width(size * boxW);
              for (var j = 0; j < size - 1; j++) {
                $pointsBox.append("<span class="+ dotOff+" title='第" + (j + 1) + "页'></span>");
              }

              $pointsBox.find("." + dotOff).first().addClass(dotOn);
              addEvents();

              function addEvents() {
                /*自动轮播*/
                if (autoPlay) {
                  var t = setInterval(function () {
                    i++;
                    move();
                  }, time || 3000);
                }

                /*鼠标悬停事件*/

                $Box.hover(function () {

                  clearInterval(t); //鼠标悬停时清除定时器
                }, function () {
                  if (autoPlay) {
                    t = setInterval(function () {
                      i++;
                      move();
                    }, time || 3000); //鼠标移出时清除定时器
                  }
                });

                /*鼠标滑入原点事件*/
                $pointsBox.find("." + dotOff).hover(function () {
                  // 如果是克隆的图片，不让他执行

                  var _left = Math.abs($Box.find(containerClass).css('left').replace('px', ''));
                  // console.log(_left)

                  var index = $(this).index(); //获取当前索引值
                  // console.log(index)
                  if (_left == (size - 1) * boxW && index == 0) {
                    return;
                  }
                  i = index;
                  // i++;
                  move();
                  // $Box.find(".img").stop().animate({ left: -index * boxW }, 500);
                  $(this).addClass(dotOn).siblings().removeClass(dotOn);
                }, function () {
                  var _left = Math.abs($Box.find(containerClass).css('left').replace('px', ''));
                  // console.log(_left)

                  var index = $(this).index(); //获取当前索引值
                  // console.log(index)
                  if (_left == (size - 1) * boxW && index == 0) {
                    $Box.find(containerClass).stop().css({
                      left: 0
                    });

                  }
                });

                /*向左按钮*/
                if (typeof ($leftB) !== 'undefined') {
                  $leftB.on('click', function () {
                    i--;
                    move();
                  })
                }

                /*向右按钮*/
                if (typeof ($rightB) !== 'undefined') {
                  $rightB.on('click', function () {
                    i++;
                    move();
                  })
                }
              }

              function move() {
                if (i == size) {
                  $Box.find(containerClass).css({
                    left: 0
                  });
                  i = 1;
                }
                if (i == -1) {
                  $Box.find(containerClass).css({
                    left: -(size - 1) * boxW
                  });
                  i = size - 2;
                }
                $Box.find(containerClass).stop().animate({
                  left: -i * boxW
                }, 500);

                if (i == size - 1) {
                  $pointsBox.find("." + dotOff).eq(0).addClass(dotOn).siblings().removeClass(dotOn);
                } else {
                  $pointsBox.find("." + dotOff).eq(i).addClass(dotOn).siblings().removeClass(dotOn);
                  $pointsBox.find("." + dotOff).eq(i).addClass(dotOn).siblings().removeClass(dotOn);
                }
              }

            }
          }