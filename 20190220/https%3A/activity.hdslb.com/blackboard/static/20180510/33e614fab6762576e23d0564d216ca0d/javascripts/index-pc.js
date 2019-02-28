$(function () {
    var $STAR;
    $STAR = {
        $wrap: $('div.content-wrap'),
        $androidC: $('div.android-content', this.$wrap),
        $iPhoneC: $('div.iPhone-content', this.$wrap),
        $iPadC: $('div.iPad-content', this.$wrap),
        $UWPC: $('div.UWP-content', this.$wrap),
        $WPC: $('div.WP-content', this.$wrap),
        $TVC: $('div.TV-content', this.$wrap),
        info: "",
        selectDeviceType: function () {
            var $selectFather = $('div.dt-choose'),
                $deviceTypeImg = $('div.device-type-img');
            $selectFather.on('mouseover', function (event) {
                var obj = event.srcElement ? event.srcElement : event.target,
                    $curObj = $(obj),
                    type = $curObj.attr('data-type');
                switch (type) {
                    case 'android':
                        $deviceTypeImg.find('img.android').fadeIn().siblings().hide();
                        break;
                    case 'iPhone':
                        $deviceTypeImg.find('img.iPhone').fadeIn().siblings().hide();
                        break;
                    case 'iPad':
                        $deviceTypeImg.find('img.iPad').fadeIn().siblings().hide();
                        break;
                    case 'UWP':
                        $deviceTypeImg.find('img.UWP').fadeIn().siblings().hide();
                        break;
                    case 'WP':
                        $deviceTypeImg.find('img.WP').fadeIn().siblings().hide();
                        break;
                    case 'TV':
                        $deviceTypeImg.find('img.TV').fadeIn().siblings().hide();
                        break;
                }
            });
            return this;
        },
        selectInfo: function () {
            var that = this,
                $selectFather = $('ul.info-select'),
                chooseContent;
            chooseContent = function ($Obj, $content, androidShow, iPhoneShow, iPadShow, UWPShow, WPShow,TVShow) {
                $Obj.addClass('active').siblings().removeClass('active');
                $content.fadeIn().siblings().hide();
                that.androidShow = androidShow;
                that.iPhoneShow = iPhoneShow;
                that.iPadShow = iPadShow;
                that.UWPShow = UWPShow;
                that.WPShow = WPShow;
                that.TVShow = TVShow;
            };
            $selectFather.on('click', function (event) {
                var obj = event.srcElement ? event.srcElement : event.target,
                    $curObj = $(obj),
                    type = $curObj.attr('data-type');
                switch (type) {
                    case 'android':
                        chooseContent($curObj, that.$androidC, true, false, false, false, false, false);
                        break;
                    case 'iPhone':
                        chooseContent($curObj, that.$iPhoneC, false, true, false, false, false, false);
                        break;
                    case 'iPad':
                        chooseContent($curObj, that.$iPadC, false, false, true, false, false, false);
                        break;
                    case 'UWP':
                        chooseContent($curObj, that.$UWPC, false, false, false, true, false, false);
                        break;
                    case 'WP':
                        chooseContent($curObj, that.$WPC, false, false, false, false, true, false);
                        break;
                    case 'TV':
                        chooseContent($curObj, that.$TVC, false, false, false, false, false, true);
                        break;
                }
            });
            return this;
        },
        formatDate: function (timestamp) {
            var date = new Date(timestamp * 1000);
            var Y = date.getFullYear() + '-';
            var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
            var D = date.getDate();
            if (D < 10) {
                D = "0" + D;
            }
            return Y + M + D
        },
        eachList: function (list, loopNum, sliceNum, type, firstLoad) {
            var that = this, appendC;
            $.each(list, function (index, value) {
                if (index < loopNum) {
                    var infoTime = that.formatDate(value.ptime),
                        infoVersion = value.version,
                        infoContent = value.desc,
                        infoItemList = infoContent.split("\n");
                    that.info += '<div class="element">' +
                        '<div class="version-date">' + infoTime + '</div>' +
                        '<div class="info-wrap">' +
                        '<div class="bg-circle"><span class="circle"></span></div>' +
                        '<div class="text-wrap">' +
                        '<p class="info-title">哔哩哔哩动画<span>' + type + '</span>' + infoVersion + '</p>';
                    for (var i = 0; i < infoItemList.length; i++) {
                        that.info += "<p>" + infoItemList[i] + "</p>";
                    }
                    that.info += '</div></div></div>';
                } else {
                    return false;
                }
            });
            appendC = function ($content) {
                $content.append(that.info);
                that.info = "";
                if (firstLoad) {
                    that.androidShow = true;
                    that.iPhoneShow = false;
                    that.iPadShow = false;
                    that.UWPShow = false;
                    that.WPShow = false;
                    that.TVShow = false;
                }
            };
            switch (type) {
                case 'android':
                    appendC(that.$androidC);
                    that.androidList = list.slice(sliceNum) || [];
                    break;
                case 'iPhone':
                    appendC(that.$iPhoneC);
                    that.iPhoneList = list.slice(sliceNum) || [];
                    break;
                case 'iPad':
                    appendC(that.$iPadC);
                    that.iPadList = list.slice(sliceNum) || [];
                    break;
                case 'UWP':
                    appendC(that.$UWPC);
                    that.UWPList = list.slice(sliceNum) || [];
                    break;
                case 'WP':
                    appendC(that.$WPC);
                    that.WPList = list.slice(sliceNum) || [];
                    break;
                case 'TV':
                    appendC(that.$TVC);
                    that.TVList = list.slice(sliceNum) || [];
                    break;
            }
        },
        showContent: function (url, type) {
            var that = this;
            $.ajax({
                type: "GET",
                url: url,
                dataType: 'json',
                success: function (data) {
                    var lists;
                    if (data && data.code === 0) {
                        lists = data.data || [];
                        that.eachList(lists, 20, 20, type, true);
                    }
                }
            });
            return this;
        },
        scrollLoad: function () {
            var that = this,
                $win = $(window),
                BOTTOM_OFFSET = 0,//滚动条距底部的距离
                throttle, realFunc;

            // 节流函数
            throttle = function (func, wait, mustRun) {
                var timeout,
                    startTime = new Date();
                return function () {
                    var self = this,
                        args = arguments,
                        curTime = new Date();

                    clearTimeout(timeout);

                    // 如果达到了规定的触发时间间隔，触发 handler
                    if (curTime - startTime >= mustRun) {
                        func.apply(self, args);
                        startTime = curTime;
                        // 没达到触发间隔，重新设定定时器
                    } else {
                        timeout = setTimeout(func, wait);
                    }
                }
            };
            // 实际想绑定在 scroll 事件上的 handler
            realFunc = function () {
                //当前窗口的高度
                var winH = $win.height();
                //当前滚动条从上往下滚动的距离
                var scrollTop = $win.scrollTop();
                //当前文档的高度
                var docH = $(document).height();

                //滚动条距底部的距离 + 滚动条滚动的距离 >= 文档的高度 - 窗口的高度
                //也就是（滚动条滚动的距离 + 窗口的高度 = 文档的高度）时进行加载
                if ((BOTTOM_OFFSET + scrollTop) >= docH - winH - 300) {//ipad 窗口高度不够触发事件，补增300高度

                    if (that.androidShow && that.androidList.length > 0) {

                        that.eachList(that.androidList, 10, 10, 'android');

                    } else if (that.iPhoneShow && that.iPhoneList.length > 0) {

                        that.eachList(that.iPhoneList, 10, 10, 'iPhone');

                    } else if (that.iPadShow && that.iPadList.length > 0) {

                        that.eachList(that.iPadList, 10, 10, 'iPad');

                    } else if (that.UWPShow && that.UWPList.length > 0) {

                        that.eachList(that.UWPList, 10, 10, 'UWP');

                    } else if (that.WPShow && that.WPList.length > 0) {

                        that.eachList(that.WPList, 10, 10, 'WP');
                    } else if (that.TVShow && that.TVList.length > 0) {

                        that.eachList(that.TVList, 10, 10, 'TV');
                    }

                }
            };
            // 调用节流函数,
            $win.on('scroll', throttle(realFunc, 500, 1000));
            return this;
        },
        init: function () {
            this.selectDeviceType().selectInfo().scrollLoad()
                .showContent("//app.bilibili.com/x/v2/version?mobi_app=android", 'android')
                .showContent("//app.bilibili.com/x/v2/version?mobi_app=iphone", 'iPhone')
                .showContent("//app.bilibili.com/x/v2/version?mobi_app=ipad", 'iPad')
                .showContent("//app.bilibili.com/x/v2/version?mobi_app=win", 'UWP')
                .showContent("//app.bilibili.com/x/v2/version?mobi_app=android_tv_yst", 'TV');
        }
    };
    $STAR.init();
});