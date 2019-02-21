var FloatingSearch = $Class({
    $init : function(){
        this.elSearchForm = $('floatingSearchForm');
        this.elSearchBtn = $('this_blog_floating_search_btn');
        this.$elAutoCompleteLayer = $Element('autocomplete_layer');
        this.$elPlaceHolder = $Element($('this_blog_search_placeholder'));
        this.$elAutoComplete = $Element($$.getSingle('.list_autocomplete'));
        this.$elSeachBox = $Element($$.getSingle('.search_box'));

        this.dataArray;
        this.currentIndex;
        this.timer;

        if (this.elSearchForm){
            this.elSearchText = this.elSearchForm.this_blog_search;
            this.elSearchText.value = '';
            this.$elPlaceHolder.show();
        }
        if (this.elSearchForm && this.elSearchText){
            this._setEvent();
        }
    },

    _setEvent : function(){
        $Fn(this._submit,this).attach(this.elSearchForm,'submit');
        $Fn(this._submit,this).attach(this.elSearchBtn,'click');
        $Fn(this._onFocus,this).attach(this.elSearchText,'focus');
        $Fn(this._onFocusout,this).attach(this.elSearchText,'focusout');

        //자동완성 이벤트 바인딩, 검색어입력은 keyup 자동완성리스트제어는 keydown
        $Fn(this._onKeyDown,this).attach(this.elSearchText,'keydown');
        $Fn(this._onKeyUp,this).attach(this.elSearchText,'keyup');
        $Fn(this._onMouseOver,this).attach(this.$elAutoCompleteLayer,'mouseover');
        $Fn(this._onMouseOut,this).attach(this.$elAutoCompleteLayer,'mouseout');
    },

    _onFocus : function(we){
        var query = this.elSearchText.value;

        utility.bSelectPrevent = true;
        if (query != '') {
            this.$elPlaceHolder.hide();

            setTimeout($Fn(function () {
                this.getAutoCompleteData(query,  $Fn(this.autoCompleteCallBack, this).bind());
            }, this).bind(), 300)
        }
    },

    _onFocusout : function(we){
        //자동완성 레이어 클릭될 때 focusout 되므로 그 떄는 자동완성 레이어 사라지지않도록 함
        //크롬은 event.relatedElement 잘 들어오는데, 사파리는 해당 엘리먼트에 tabindex="0"을 줘야함
        //IE에서는 relatedElement가 안들어오고, activeElement로 들어옴
        var elCheckAutoLayer = we.relatedElement ? we.relatedElement : document.activeElement;
        if (!!elCheckAutoLayer && $Element(elCheckAutoLayer).hasClass("link")) {
            return;
        }

        this.autoCompleteHide();
    },

    _onKeyUp : function (event) {
        var query = event.element.value;
        var key = event.key();

        if (query == "") {
            this.$elPlaceHolder.show();
            this.autoCompleteHide();
            return;
        } else {
            this.$elPlaceHolder.hide();
        }

        if (this._needAutoComplete(key)) {
            //포커스가 Input박스일떄 index=-1, 자동완성 리스트 시작 index=0
            this.currentIndex = -1;
            this.delayedOnceFn(function () {
                this.getAutoCompleteData(query,  $Fn(this.autoCompleteCallBack, this).bind());
            }, 250);
        }
    },

    _onKeyDown : function (event) {
        var query = event.element.value;
        if (query !== "") {
            //글자를 쭉 누르는 경우 때문에 down이벤트에도 추가
            this.$elPlaceHolder.hide();
        }

        var key = event.key();

        if (key.keyCode == 9 && this.currentIndex == this.dataArray.length - 1) {
            //자동완성 마지막을 때 탭키를 누르면 검색버튼 포커싱
            this.elSearchBtn.focus();
        }

        if (key.keyCode == 38 || key.keyCode == 40 || key.keyCode == 9) {
            //방향키 상,하
            event.stop();
            this.changeFocuslist(key.keyCode);
        } else if (key.keyCode == 27) {
            //esc ie 에서 esc동작이 down이벤트에 걸려서 여기서 동작

            if (this.isOpenAutoComplete()) {
                event.stop();
                this.autoCompleteHide();
            } else {
                event.element.blur();
            }
        }
    },

    _needAutoComplete : function (key) {
        var keyCode = key.keyCode;

        if (!((keyCode >= 37 && keyCode <= 40) || keyCode == 13 || keyCode == 9 || keyCode == 27)) {
        //방향키와 엔터키, 탭키, Esc를 제외하고 자동완성 실행
            return true;
        } else if ((keyCode == 40 && !this.isOpenAutoComplete())) {
            //자동완성 레이어 없는 경우 아래키 눌렀을 때 실행
            return true;
        }
        return false;
    },

    _onMouseOver: function (event) {
        if(this.currentIndex != -1 || this.currentIndex != null){
            this.unSelectOne();
        }
        $Element(event.element.parentNode).addClass("selected");
        this.currentIndex = $Element(event.element.parentNode).attr("data-autocompletelist");
    },

    _onMouseOut: function (event) {
        $Element(event.element.parentNode).removeClass("selected");
    },

    changeFocuslist : function (keyCode) {
        this.unSelectOne();
        if (keyCode == 40 || keyCode == 9) {
            this.currentIndex ++;
        } else if (keyCode == 38) {
            this.currentIndex --;
        }
        this.selectOne();
    },

    unSelectOne : function () {
        var elBeforeSelected = $Element($$.getSingle('[data-autoCompleteList ="'+ this.currentIndex +'"]'));
        if (elBeforeSelected) {
            elBeforeSelected.removeClass("selected");
        }
    },

    selectOne : function () {
        if (!this.dataArray || this.dataArray.length == 0) {
            return;
        }
        var listLengthToArray = this.dataArray.length - 1;

        if (this.currentIndex < 0 || this.currentIndex > listLengthToArray) {
            this.currentIndex = 0;
        }
        this.elSearchText.value = this.dataArray[this.currentIndex][0].toString();

        var elSelected = $Element($$.getSingle('[data-autoCompleteList ="'+this.currentIndex+'"]'));
        elSelected.addClass("selected");
    },

    highLight : function (word) {
        var query = this.elSearchText.value;

        if (query == '' ||  word == '') {
            return word;
        }

        return word.replace(query, '<strong>'+query+'</strong>');
    },

    _submit : function(we){
        if(!this.validate()){
            we.stop();
            this.elSearchText.focus();
            return false;
        }
        this.elSearchForm.submit();
    },

    validate : function(){
        var searchText = this.elSearchText.value;
        if (searchText.split(" ").join("") == "") {
            return false;
        }
        return true;
    },


    autoCompleteCallBack : function (response) {
        this.dataArray = response.items[0];

        if (!response || !this.dataArray) {
            this.autoCompleteHide();
            return [];
        }
        var result = $A(this.dataArray).map($Fn(function(value, index) {

            return '<li class="item _autoCompleteList" data-autoCompleteList='+index+'><a href="#" class="link _returnFalse" tabindex ="0">'+this.highLight(value[0].toString())+'</a></li>';
        },this).bind());

        this.$elAutoComplete.html(result.$value().join(""));
        this.$elAutoCompleteLayer.css("display", "block");
        this.$elSeachBox.addClass("autocomplete_on");
        var elAutoCompleteList = $$('._autoCompleteList');

        $Fn(this.authCompleteClick,this).attach(elAutoCompleteList,'click');

    },

    authCompleteClick : function (evt) {
        var elAutocomplete = evt.currentElement;
        var index = $Element(elAutocomplete).attr("data-autoCompleteList");

        this.elSearchText.value = this.dataArray[index][0].toString();

        clickcr(elAutocomplete,"flt.autosuggestion","","",evt);

        this._submit();
    },

    autoCompleteHide : function () {
        this.$elAutoCompleteLayer.css("display", "none");
        this.$elAutoComplete.html('');
        this.$elSeachBox.removeClass('autocomplete_on');
        this.dataArray = [];
    },

    delayedOnceFn : function (fnCallback, delay) {
        if (this.timer) {
            clearTimeout(this.timer);
        }

        this.timer = setTimeout($Fn(fnCallback, this).bind(), delay);
    },

    getAutoCompleteData: function(query, fnCallback) {
        var oAjax = new $Ajax("//tac.blog.naver.com/ac", {
            type : 'jsonp',
            method : 'get',
            onload : $Fn(function(res) {
                fnCallback(res.json());
            }, this).bind(),
            async:false
        });
        oAjax.request({
            q:query,
            q_enc: "MS949",
            st:1,
            r_format:"json",
            r_enc: "UTF-8",
            r_cache: 0,
            r_lt: 1
        });
    },

    isOpenAutoComplete : function () {
        return this.$elSeachBox.hasClass('autocomplete_on');
    }
});
var floatingSearch = new FloatingSearch();
