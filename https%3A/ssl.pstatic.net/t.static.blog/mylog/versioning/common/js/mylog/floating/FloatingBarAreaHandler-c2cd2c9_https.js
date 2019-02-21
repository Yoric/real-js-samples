var FloatingBarArea = $Class({
    smartEditor3Ver : 3,
    smartEditor4Ver : 4,

    $init : function(){
        //Element
        this.elFloatingHeader = $('floating_area_header');
        this.elFloatingSideArea = $('floating_side_area_info');
        this.elBtnCategory = $$.getSingle('.floating_area_btn_category');
        this.elFristPostDiv = $('post_1');
        this.eBuddyRecommendLayer = $$.getSingle('.pop_buddy_add_lyr');
        this.eReputationLayer = $$('.lyr_reputation');

        this.showSideArea = false;
        this.sideAreaDataLoaded = false;
        this.targetScrollTop = this._getTargetScrollTop();
        this.scrollTimer;

        //플로팅바 노출을위한 기준 위치가 확인이 안되는경우엔 이벤트가 동작하지 않도록한다. 방어코드.
        if (this.targetScrollTop === -1) {
            return;
        }

        this._setEvents();
    },

    _setEvents : function() {
        $Fn(this.toggleBarWithThrottling, this).attach(window, 'scroll');
        $Fn(this._toggleSideAreaWithDataLoadIfNeed, this).attach(this.elBtnCategory, 'click');
        $Fn(this._hideSideArea, this).attach(window, 'click');
    },

    toggleBarWithThrottling : function () {
        if (!this.scrollTimer) {
            this.scrollTimer = setTimeout($Fn(function () {
                    this.scrollTimer = null;
                    this._toggleFloatingBar();
            }, this).bind(), 200)
        }
    },

    _toggleFloatingBar : function() {
        var $floatingHeader = $Element(this.elFloatingHeader);
        var $floatingCategory = $Element(this.elFloatingSideArea);
        var $btnCategory = $Element(this.elBtnCategory);
        var $buddyRecommendLayer = $Element(this.eBuddyRecommendLayer);
        var $reputationLayer = $ElementList(this.eReputationLayer);

        if ($Document().scrollPosition().top > this._getTargetScrollTop()) {
            if (!$floatingHeader.hasClass('fade_in')) {
                $floatingHeader.addClass('fade_in');
                $reputationLayer.addClass('move_bottom');
                this.isMoveFisrtTab = false;
            }
        } else {
            if ($floatingHeader.hasClass('fade_in')) {
                $floatingHeader.removeClass('fade_in');
                $buddyRecommendLayer.removeClass('move_left');
                $reputationLayer.removeClass('move_bottom');
                $reputationLayer.removeClass('move_left');
            }
            if ($floatingCategory.hasClass('fade_in')) {
                $floatingCategory.removeClass('fade_in');
                $btnCategory.removeClass('is_active');
                $btnCategory.attr('aria-label', '카테고리 열기');
                $buddyRecommendLayer.removeClass('move_left');
                $reputationLayer.removeClass('move_bottom');
                $reputationLayer.removeClass('move_left');
                this.showSideArea = false;
            }
            if (floatingSearch.isOpenAutoComplete()) {
                floatingSearch.autoCompleteHide()
            }
        }
    },

    _toggleSideAreaWithDataLoadIfNeed : function(evt) {
        if (!this.sideAreaDataLoaded) {
            this._loadFloatingSideAreaInfo(evt);
        } else {
            this._toggleSideArea(evt);
        }
    },

    _toggleSideArea : function(evt) {
        var $floatingCategory = $Element(this.elFloatingSideArea);
        var $btnCategory = $Element(this.elBtnCategory);
        var $buddyRecommendLayer = $Element(this.eBuddyRecommendLayer);
        var $reputationLayer = $ElementList(this.eReputationLayer);

        if ($floatingCategory.hasClass('fade_in')) {
            $floatingCategory.removeClass('fade_in');
            $btnCategory.removeClass('is_active');
            $btnCategory.attr('aria-label', '카테고리 열기');

            $buddyRecommendLayer.removeClass('move_left');
            $reputationLayer.removeClass('move_left');
            clickcr($btnCategory, "flt.catclose", "", "", "");
            this.showSideArea = false;
        } else {
            $floatingCategory.addClass('fade_in');
            $btnCategory.addClass('is_active');
            $btnCategory.attr('aria-label', '카테고리 닫기');

            $buddyRecommendLayer.addClass('move_left');
            $reputationLayer.addClass('move_left');
            this.showSideArea = true;
            clickcr($btnCategory, "flt.catopen", "", "", "");
        }
    },

    _hideSideArea : function(evt) {
        if (!this.showSideArea) {
            return;
        }

        var $sideAreaParents = $Element(evt.element).parent(function(v){
            return v.hasClass('floating_category');
        });

        var $btnCategoryParents = $Element(evt.element).parent(function(v){
            return v.hasClass('floating_area_btn_category_parent');
        });


        if ($btnCategoryParents.length === 0 && $sideAreaParents.length === 0) {
            this._toggleSideArea(evt);
        }
    },

    _getTargetScrollTop : function() {
        try {
            var $elFirstPost = $Element(this.elFristPostDiv);
            var editorVersion = parseInt($elFirstPost.attr('data-post-editor-version'));
            if (this._isSupportSE3(editorVersion)) {
                var $title_se3 = $elFirstPost.child(function (v) {
                    return v.hasClass('se_documentTitle') || v.hasClass('se-documentTitle');
                })[0];

                return $title_se3.offset().top + $title_se3.height();
            } else if (editorVersion < this.smartEditor3Ver) {
                var $title_se2 = $elFirstPost.child(function (v) {
                    return v.hasClass('htitle');
                })[0];

                return $title_se2.offset().top + $title_se2.height();
            }
        } catch (e) {
            //플로팅바 노출을 위한 위치 확인이 안되는 경우(글이 없다거나)
            return -1;
        }
    },
    
    _isSupportSE3 : function(editorVersion){
        return editorVersion === this.smartEditor3Ver ||  editorVersion === this.smartEditor4Ver;
    },

    _loadFloatingSideAreaInfo : function (evt) {
        var apiUrl = '/FloatingSideAreaInfoAsync.nhn?blogId=' + blogId + '&selectCategoryNo=' + currentCategoryNo + '&viewDate='+viewDate;
        new $Ajax(apiUrl, {
            'method': 'post',
            'onerror': function () {
                alert('요청이 일시적으로 정상처리되지 못했습니다.\n잠시 후에 다시 시도해 주세요.');
            },
            'onload': $Fn(function (oRes) {
                if (typeof oRes != 'undefined' && !!oRes.text()) {
                    $Element(this.elFloatingSideArea).appendHTML(oRes.text());
                    this._toggleSideArea(evt);
                    this.sideAreaDataLoaded = true;
                    this._attachBuddyAddEvent();
                } else {
                    alert('요청이 일시적으로 정상처리되지 못했습니다.\n잠시 후에 다시 시도해 주세요.');
                }
            }, this).bind()
        }).request();
    },

    _attachBuddyAddEvent : function () {
        var elBuddyBtn = $$.getSingle('._buddy_popup_btn');
        if (elBuddyBtn) {
            $Fn(this._buddyAddPopUp, this).attach(elBuddyBtn, 'click');
        }
    },

    _buddyAddPopUp : function () {
        profile.addBuddyPop();
    },

    isSideCategoryAreaOpen : function () {
        var $floatingCategory = $Element(this.elFloatingSideArea);
        return $floatingCategory.hasClass('fade_in');
    }
});

var floatingBarArea = new FloatingBarArea();
