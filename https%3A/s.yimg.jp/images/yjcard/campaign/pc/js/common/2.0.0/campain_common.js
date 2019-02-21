// Set Global YAHOO
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
     * 画面についてくるモジュール
     *
     * @namespace YAHOO.JP.Yjcard.FixedArea
     */
    YAHOO.JP.Yjcard.FixedArea = {
        _CUSTOM : {},
        /**
         * 初期設定
         * セッティング情報を内部に格納し、イベントを追加
         * @param {Object} setting              セッティング情報オブジェクト
         * @param {String} setting.fixedElm           固定する要素のid
         * @param {String} setting.startElm           固定開始位置
         * @param {String} setting.limitElm           固定終了位置
        */
        init : function (setting) {

          var _this = this;
          this._CUSTOM = setting;

          // 要素がない場合は終了
          this._CUSTOM.elmFixedTarget = document.getElementById(this._CUSTOM.fixedElm);
          this._CUSTOM.elmFixedStart = document.getElementById(this._CUSTOM.startElm);
          this._CUSTOM.elmFixedEnd = document.getElementById(this._CUSTOM.limitElm);

          if( !this._CUSTOM.elmFixedTarget || !this._CUSTOM.elmFixedEnd || !this._CUSTOM.elmFixedStart )  return false;

          // 追従開始位置
          this._CUSTOM.limitTop = function() { return _this._CUSTOM.elmFixedStart.getBoundingClientRect().top + _this._CUSTOM.elmFixedStart.clientHeight; }; //ついてくるかどうかの境目の高さ
          // 追従終了位置
          this._CUSTOM.limitBottom = function() { return _this._CUSTOM.elmFixedEnd.getBoundingClientRect().top - window.innerHeight; }; //ついてくるかどうかの境目の高さ

          // 要素固定時の高さ調整のためラップ要素を生成
          this.createFixedWrap( this._CUSTOM.elmFixedTarget );
          this.createFixedWrap( this._CUSTOM.elmFixedEnd );

          // 要素の高さを取得して調整
          this.setFixedWrapHeight();
          this.checkPos();

          window.addEventListener("resize", function() {
            _this.setFixedWrapHeight();
            _this.checkPos();
          });
          window.addEventListener("scroll", function() {
            _this.checkPos();
          });
        },
        /**
         * 固定する要素のラップ要素を生成する
         * @param {Element} tar              固定対象の要素
         */
        createFixedWrap : function( tar ) {
          var wrap = document.createElement("div");
          wrap.setAttribute('class','fixedWrap');
          tar.parentNode.insertBefore( wrap, tar );
          tar.parentNode.removeChild( tar );
          wrap.appendChild( tar );
        },
        /**
         * 固定する要素のラップ要素の高さを指定する
         * @param {Element} tar              固定対象の要素
         */
        setFixedWrapHeight : function() {
          this._CUSTOM.elmFixedTarget.parentNode.setAttribute('style','height:' + this._CUSTOM.elmFixedTarget.clientHeight + 'px' );
          this._CUSTOM.elmFixedEnd.parentNode.setAttribute('style','height:' + this._CUSTOM.elmFixedTarget.clientHeight + 'px' );
        },
        /**
         * 固定する要素のラップ要素の高さを除去する
         * @param {Element} tar              固定対象の要素
         */
        removeFixedWrapHeight : function() {
          this._CUSTOM.elmFixedTarget.parentNode.removeAttribute('style');
          this._CUSTOM.elmFixedEnd.parentNode.removeAttribute('style');
        },
        /**
         * スクロール位置チェック
         * @private
         * @return {Boolean}        固定エリアかどうか
         */
        checkPos : function() {

            if (this._CUSTOM.limitTop() < 0 && this._CUSTOM.limitBottom() > 0) {
              this.setFixedWrapHeight();
              this.fix();
            }else{
              this.removeFixedWrapHeight();
              this.unfix();
            }
        },
        /**
         * 固定
         */
        fix : function() {
          YAHOO.JP.Yjcard.YJCfunctions.addClass( this._CUSTOM.elmFixedTarget, "fixed" );
          YAHOO.JP.Yjcard.YJCfunctions.addClass( this._CUSTOM.elmFixedTarget, "fadeInUp" );
          YAHOO.JP.Yjcard.YJCfunctions.removeClass( this._CUSTOM.elmFixedTarget, "close" );
        },
        /**
         * 固定解除
         */
        unfix : function() {
          YAHOO.JP.Yjcard.YJCfunctions.removeClass( this._CUSTOM.elmFixedTarget, "fadeInUp" );
          YAHOO.JP.Yjcard.YJCfunctions.removeClass( this._CUSTOM.elmFixedTarget, "fixed" );
          YAHOO.JP.Yjcard.YJCfunctions.removeClass( this._CUSTOM.elmFixedTarget, "close" );
        },
        /**
         * 隠す(状態はfix)
         */
        hide : function() {
          YAHOO.JP.Yjcard.YJCfunctions.addClass( this._CUSTOM.elmFixedTarget, "close" );
        }
    };
}());

(function( core ){
  /*
    特定のクラス名を持つ aタグの遷移先を rdsig に変換する処理を管理するクラス
    対象のaタグには予め data-label属性に対象ページごとに指定されているラベルを入れておくこと
    https://i.yimg.jp/images/security/pf/pcore-1.0.2.min.js をセットで読み込んでおくこと
    @core : YAHOO.JP.pcore
  */
  YAHOO.JP.Yjcard.RdsigController = {
    /*
      初期化処理　変数の設定など行う
      @settings : {} 機能拡張に使用
      @settings.specific : 指定文字列の上書き( this.specific より優先される )
    */
    init : function( settings ){
      var _this = this;

      // hrefの値に specific[] に指定されている文字列が含まれている場合、その文字列以降を削除する
      _this.specific = ['.done=' ];
      // https://i.yimg.jp/images/security/pf/pcore-1.0.2.min.js YAHOO.JP.pcore.rdsig オブジェクト
      _this.core = core;

      // 拡張機能の設定、またはspecificなどのパラメータの上書きに使用する
      _this.settings = settings;
    },
    /*
      特定のクラス名を持つ aタグの遷移先に rdsig を付与する
      @classname : 指定する要素(aタグ)のクラス名
      @done_url : .done=の後に続く文字列（URL）、
                  done_url に空白文字を渡すことで href の値をそのままエンコードする処理に変わる
    */
    changeRdsig : function( classname, done_url ) {
      // RdsigControllerオブジェクト
      var _this = this;

      // クラス名から指定する要素をすべて取得
      var tar = document.getElementsByClassName( classname );

      for (var i = 0, len = tar.length; i < len; i++) {
        // aタグのhref属性から specific[] に指定された文字列を探し、
        // 見つかった場合 href属性の値から specific[] の文言の終わりまで削除
        // 見つからなかった場合は href属性の値をそのまま返す
        var url = _this.checkStrings.call( this, tar[i].getAttribute('href') );
    
        // url + done_urlをrdsigに変換する。
        // getRdsig の引数には URL　と　data-label属性の値を渡す
        url = _this.getRdsig.call( this, url + done_url, tar[i].getAttribute('data-label') );
        
        // aタグの遷移先を書き換え
        tar[i].setAttribute('href', url);
      }
    },
    /*
      渡されたURLから特定の文言が存在するかチェックして見つかった場合は削除する
      見つからなかった場合はURLをそのまま返す
    */
    checkStrings : function( url ) {
      // RdsigControllerオブジェクト
      var _this = this;
      // 特定文字列に関してsettingsで指定があればそちらを優先
      var spec = ( _this.settings.specific != null && _this.settings.specific != undefined)? _this.settings.specific: _this.specific;

      // 特定文字列の数だけループを回してチェック
      for(var i = 0, len = spec.length; i < len;i++) {

        var index = url.indexOf( spec[i] );
        // 文字列が見つかったらそこで処理をストップ
        // URLを加工して返す
        if ( index > 0 ) {
            url = url.substring( 0, index + spec[i].length );
            break;
        }
      }

      // 特定文字列が見つからなかった場合そのまま返す
      return url;
    },
    /*
      URL と ラベル を指定してrdsigを生成して返す
      @url : 生成対象のURL string
      @label : rdsig を生成する際に指定する ラベル
    */
    getRdsig : function( url, label) {
      // RdsigControllerオブジェクト
      var _this = this;
      return _this.core.gen_redirect_v1( url, label );
    },
    /*
      拡張機能の上書き
      @settings : {}
    */
    setSettings : function( settings ) {
      this.settings = settings;
    }
  }
})(YAHOO.JP.pcore.rdsig);

(function(){
  /*
    スクロール位置を特定してCV計測する
    計測対象：
      ユーザがどこまで読んだか
      コンバージョン時点でのユーザの表示画面位置
      アンカーリンクを踏んでスクロールが発生したか
  */
  YAHOO.JP.Yjcard.YJCScrollPosition = {
    /*
      初期設定
      @target : DOMElement スクロール計測位置を示すDOM要素
    */
    init : function( tar ) {
      // 目印がなければ何もしない
      if ( tar != null && tar != undefined? tar.length > 0: false ) {

        // 値の初期設定
        this._constructor( tar );

        // ターゲットに処理に必要なカスタムdata属性を仕込む
        this.setData();

        // アクセス時点で到達地点を取得する
        this.reach_point = this.checkCurrentPosition( this.reach_point );

        // スクロールイベントを設定する
        this.eventScroll();

        // アンカーリンクイベントを設定する
        this.eventAnchor();

      }
    },
    /*
      @reach_point : int 到達位置、 ページアクセス時点 MV で 0
      @current_point : int 遷移する直前の位置、 値の割り振りは reach_point と同様
      @anchor_flg : int ページ内リンクを押したかどうか、 押下していなければ 0
      @data_scrollposition : string この処理で使用するカスタムデータ属性の名前
      @target : DOMElement[] スクロール位置判定に使用する要素
    */
    _constructor : function ( tar ) {
      this.reach_point = 0;
      this.current_point = 0;
      this.anchor_flg = 0;
      this.data_scrollposition = 'data-scrollposition';
      this.target = tar;
    },
    /*
      対象の要素群にスクロール位置判定用の値（data-scrollposition）をセットする
    */
    setData : function () {
      for (var i = 0; i < this.target.length; i++) this.target[i].setAttribute( this.data_scrollposition, i + 1 );
    },
    /*
      スクロール位置を判定し、到達位置を確認する処理
    */
    eventScroll : function () {

      var self = this;

      window.addEventListener( 'scroll', function(){
        self.reach_point = self.checkCurrentPosition( self.reach_point );
      });
    },
    /*
      アンカーリンク判定処理
      クリックした<a>タグの href の値が #で始まる場合、anchor_flg に 1 を立てる
    */
    eventAnchor : function () {

      var self = this;

      var tar = document.getElementsByTagName( 'a' );

      if ( tar != null && tar != undefined? tar.length > 0: false ) {
        for (var i = 0; i < tar.length; i++) {
          tar[i].addEventListener('click', function(){
            if ( /^#/.test( this.getAttribute('href') ) ) self.anchor_flg = 1;
          });
        }
      }
    },
    /*
    処理確定時点のイベント
    @return {
      current_point : int 遷移する直前の位置、 値の割り振りは reach_point と同様
    }
    */
    eventConfirm : function () {
      this.current_point = this.checkCurrentPosition( this.current_point );
    },
    /*
    今現在の状態を取得する
    @return {
      reach_point : int 到達位置、 ページアクセス時点 MV で 0
      current_point : int 遷移する直前の位置、 値の割り振りは reach_point と同様
      anchor_flg : int ページ内リンクを押したかどうか、 押下していなければ 0
    }
    */
    getStatus: function () {
      return {
        reach_point : this.reach_point,
        current_point : this.current_point,
        anchor_flg : this.anchor_flg
      };
    },
    /*
      対象のY方向の位置を取得する
      @target : DOMElement
    */
    getTargetTop : function ( tar ) {
      return tar.getBoundingClientRect().top + Math.floor( window.pageYOffset );
    },
    /*
      ユーザのスクロール位置を取得する、ブラウザ表示画面の中央
    */
    getScrollPosition : function () {
      return Math.floor( window.pageYOffset + ( window.innerHeight / 2 ) );
    },
    /*
      ユーザのスクロール位置が要素群よりも下の場合、引数で渡された値を更新する
      @point : int reach_point または current_point
    */
    checkCurrentPosition : function ( point ) {

      for (var i = 0; i < this.target.length; i++) {

        if (
          this.getScrollPosition() > this.getTargetTop( this.target[i] )
          && ( this.target[i].getAttribute( this.data_scrollposition ) > point )
        ) {
          point = this.target[i].getAttribute( this.data_scrollposition );
        }

      }

      return point;
    }
  }
})();

(function(){
  /*
    便利関数
  */
  YAHOO.JP.Yjcard.YJCfunctions = {
    /*
      第一引数で渡された要素に第二引数で渡されたクラスを付与する
      すでに対象のクラスが存在していた場合は処理しない
      @dom : Element 対象の要素
      @c   : string class名
    */
    addClass : function( dom, c ) {
      var target_class = dom.getAttribute('class');
      if ( target_class == null || target_class == undefined ) {
        dom.setAttribute('class',c);
      } else if( !RegExp(c).test( target_class ) ) {
        target_class += ' ' + c;
        dom.setAttribute('class',target_class);
      }
    },
    /*
      第一引数で渡された要素から第二引数で渡されたクラスを削除する
      すでに対象のクラスが存在しない場合は処理しない
      @dom : Element 対象の要素
      @c   : string class名
    */
    removeClass : function( dom, c ) {
      // 要素が引数で指定されたクラス名を持つ場合のみ処理を行う
      if( this.hasClass( dom, c ) ){
        var target_class = dom.getAttribute("class");
        var arr = target_class.split(" ");
        var i = 0,
        m = arr.length;

        while( i < m ) {
          // ムダな空白または引数で指定されたclassを削除
          if( arr[i] == c ){
            arr.splice( i, 1 );
            i--;
          }

          i++;
        }

        dom.setAttribute( "class", arr.join(" ") );
      }
    },
    /*
      第一引数で渡された要素に第二引数で渡されたクラスが存在するかチェックする
      存在する場合は true 存在しない場合は false を返す
      @return : boolean
      @dom : Element 対象の要素
      @c   : string class名
    */
    hasClass : function( dom, c ) {
      var target_class = dom.getAttribute("class");
      var res = false;

      // 要素がclassを持っている場合のみ処理を行う
      if(target_class){
        var arr = target_class.split(" ");
        var i = 0,
        m = arr.length;
        while ( i < m ) {
          // 引数で指定されたclass名に一致するか判定
          res = arr[i] == c;
          // 一致したら終了してtrueを返す
          if(res)break;
          ++i;
        }
      }

      return res;
    },
    /*
      第一引数で渡された要素に第二引数で渡された要素が存在すれば配列にして全て返す
      @dom : Element 対象の要素
      @string : string .で始まる文字列の場合クラス名、#で始まる文字列の場合ID、それ以外はタグ名として検索する
      @return : Element[] 見つかった要素
    */
    find : function( dom, string ) {
      var arr = [];

      if ( dom.hasChildNodes() ) arr.concat( findSearch( dom.children, arr, string ) );

      return arr;
    },
    /*
      findの内部で呼ばれる
      子要素が存在する限り再帰的に検索を行い見つかった要素を配列で返す
      @search : Element[] 対象の要素配列（子要素群）
      @arr : Element[] 戻り値の要素配列
      @string : string .で始まる文字列の場合クラス名、#で始まる文字列の場合ID、それ以外はタグ名として検索する
      @return : Element[] 見つかった要素
    */
    findSearch : function( search, arr, string ) {

      for (var i = 0; i < search.length; i++) {

        if ( /^\./.test(string) ) {

          if ( hasClass( search[i], string.replace('.','') ) ) arr.push( search[i] );

        } else if ( /^\#/.test(string) ) {

          if ( search[i].getAttribute("id") == string.replace('#','') ) arr.push( search[i] );

        } else {

          if ( search[i].tagName.toLowerCase() == string.toLowerCase() ) arr.push( search[i] );

        }

        if ( search[i].hasChildNodes() ) arr.concat( getTargets( search[i].children, arr, string ) );

      }

      return arr;

    },
    /*
      [miffyによる計測サポート関数]
      <form>のサブミットを遅延させる。
      サブミット実行前にcallback関数を一度だけ実行する。
      @param {Object} setting               セッティング情報オブジェクト
      @param {Element} setting.elmform      対象の要素（form）
      @param {function} setting.validation  バリデーション関数
      @param {function} setting.callback    一度だけ実行する
      @param {int} setting.sec              サブミットの遅延時間
    */
    delaySubmit : function ( setting ) {

      // <form> 要素が指定されていない場合は何もせずに終了する
      if ( setting.elmform != null && setting.elmform != undefined ) {
        // data-active : サブミットの発火条件
        setting.elmform.setAttribute('data-active','true');
      } else {
        return;
      }

      // バリデーションが指定されていなければ常にtrueを返すよう設定する
      if ( setting.validation == null || setting.validation == undefined ) setting.validation = function () { return true };
      // 遅延時間が指定されていなければ500ミリ秒に設定する
      if ( setting.sec == null || setting.sec == undefined ) setting.sec = 500;


      // 以下サブミット処理
      setting.elmform.addEventListener('submit', function(e) {
        // デフォルトのサブミット処理は止める
        e.preventDefault();

        var _this = this;

        // <form>に data-active の値が存在するときだけ ( = 1度だけ ）処理を実行
        if ( _this.getAttribute("data-active") && setting.validation() ) {

          // data-active を削除してサブミット処理は一回きりにする
          _this.removeAttribute("data-active");

          // ブラウザバック対応 サブミット復元処理
          window.addEventListener( ( typeof window.onpageshow != undefined? "pageshow" : "load" ) , function() { setting.elmform.setAttribute('data-active','true'); } );

          // コールバックを実行
          if ( setting.callback != null && setting.callback != undefined ) setting.callback();

          // 一定時間後にサブミット処理
          setTimeout( function(){ _this.submit(); }, setting.sec);

        }

        // デフォルトのサブミット処理は止める
        return false;
      });

    }
  }
})();