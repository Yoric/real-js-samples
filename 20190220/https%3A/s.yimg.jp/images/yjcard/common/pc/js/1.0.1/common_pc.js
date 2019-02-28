if (typeof YAHOO === 'undefined') {
    /**
     * @namespace
     */
    YAHOO = {};
}
if (typeof YAHOO.JP === 'undefined') {
    /**
     * @namespace
     */
    YAHOO.JP = {};
}
if (typeof YAHOO.JP.Yjcard === 'undefined') {
    /**
     * @namespace
     */
    YAHOO.JP.Yjcard = {};
}

(function(){
    /**
     * エリア開閉
     *
     * YAHOO.JP.Yjcard.Expand
     */
    YAHOO.JP.Yjcard.Expand = {
        _CUSTOM : {},
        /**
         * 初期設定
         * セッティング情報を内部に格納し、イベントを追加
         * @param {Object} setting                  セッティング情報オブジェクト
         * @param {String} setting.btnId            ボタンid
         * @param {String} setting.targetId         開閉対象のエリアid
         * @param {String} setting.defaultStyle         デフォルトで開きたいときはopen,閉じたいときはcloseを指定　指定しなくてもOK
         */
        init : function (setting) {

            var _this = this;
            _this._CUSTOM[setting.targetId] = setting;
            //イベント追加
            if(document.getElementById(this._CUSTOM[setting.targetId].btnId)){


                document.getElementById(this._CUSTOM[setting.targetId].btnId).addEventListener('click', function(e){
                    e.preventDefault();
                    if(document.getElementById(_this._CUSTOM[setting.targetId].targetId).getAttribute("class").indexOf("close") != -1){
                        _this.open(setting.targetId);
                    }else{
                        _this.close(setting.targetId);
                    }
                }, false);
            }
                    
            
            //defaultに指定があった場合は実行する
            if(_this._CUSTOM[setting.targetId].defaultStyle === "open"){
                _this.open(setting.targetId);
            }else if(_this._CUSTOM[setting.targetId].defaultStyle === "close"){
                _this.close(setting.targetId);
            }
            
        }, //init

        /**
         * 閉じる
         * @private
         * @param {String} targetId   識別用id(=対象のエリアid)
         */
        close : function(targetId) {
            var _this = this;
            document.getElementById(targetId).classList.add("close");
            document.getElementById(_this._CUSTOM[targetId].btnId).classList.remove("close");

        }, //close

        /**
         * 開く
         * @private
         * @param {String} targetId   識別用id(=対象のエリアid)
         */
        open : function(targetId) {
            var _this = this;
            document.getElementById(targetId).classList.remove("close");
            document.getElementById(_this._CUSTOM[targetId].btnId).classList.add("close");

        } //open

    };


    /**
     * ページトップに戻るボタン
     *
     * YAHOO.JP.Yjcard.PageTopButton
     */
    YAHOO.JP.Yjcard.PageTopButton = {
        _CUSTOM : {},
        /**
         * 初期設定
         * セッティング情報を内部に格納し、イベントを追加
         * @param {Object} setting     セッティング情報オブジェクト
         * @param {String} setting.id  ページトップボタンのID
         */
        init : function (setting) {

            if( setting ){ id = setting.id; }

            var _this = this;

            this.target = document.getElementById(id);

            if ( this.target != null && this.target != undefined ) {

                this.target.addEventListener('click',function() {
                    _this.scrollPageTop();
                }, false);
            }
        },
        /**
         * トップに戻るスムーススクロール
         */
        scrollPageTop : function(e) {
                    var self = this;
                    var x1 = x2 = x3 = 0;
                    var y1 = y2 = y3 = 0;
                    if (document.documentElement) {
                        x1 = document.documentElement.scrollLeft || 0;
                        y1 = document.documentElement.scrollTop || 0;
                    }
                    if (document.body) {
                        x2 = document.body.scrollLeft || 0;
                        y2 = document.body.scrollTop || 0;
                    }
                    x3 = window.scrollX || 0;
                    y3 = window.scrollY || 0;
                    var x = Math.max(x1, Math.max(x2, x3));
                    var y = Math.max(y1, Math.max(y2, y3));
                    window.scrollTo(Math.floor(x / 2), Math.floor(y / 2));
                    if (x > 0 || y > 0) {
                        window.setTimeout(function(){self.scrollPageTop(e)}, 30);
                    }
        }
    };


})();