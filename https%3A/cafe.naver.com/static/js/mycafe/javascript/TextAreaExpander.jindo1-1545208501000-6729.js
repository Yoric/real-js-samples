/**
 * @author niceilm (ajaxUI2) jindo1 version
 * @dependency nhn.Component
 * @see http://wiki.nhncorp.com/display/lsuit/nhn.TextAreaExpander
 * modified By AU2 Dioong 2009.03.10
 */
if (typeof nhn == 'undefined'){nhn = {};}
nhn.TextAreaExpander = Class({
        bReduce :false,
        __init : function(el, htOptions) {
               this.el = $(el);
               this._options = {};

               this.option( {
                       nInterval :100,
                       nMaxHeight :500,
                       nMinHeight :39,
                       nLineHeight : ($Agent().IE9) ? 16 : 14, // CAFESUS-7970
                       nMaxByte :0,
                       sOverMessage :'�Է� ������ �ִ� ����Ʈ ���� �ʰ� �Ͽ����ϴ�.',
					   onChangeHeight : function(){}
               });
               this.option(htOptions);

               this._setProperty();
               this._bindEvent();
               this.setMinHeight();
        },

        _setProperty : function() {
               Element.setCSS(this.el, {
                       overflow :"hidden",
                       "line-height" :this.option("nLineHeight") + "px"
               });
               this.el.setAttribute("maxlength", this.option('nMaxByte'));
               this.nLineHeight = this.option("nLineHeight");
               this.nGap = this.el.offsetHeight - this.el.clientHeight;

               this.nMinHeight = this.option("nMinHeight");
               this.nMaxHeight = this.option("nMaxHeight");
			   
               this.bGecko = !($Agent().IE||$Agent().Opera);
        },

        _bindEvent : function() {
               Event.register(this.el, "focus", this._onFocus.bindForEvent(this));
               Event.register(this.el, "blur", this._onBlur.bindForEvent(this));
        },

        _onFocus : function() {
               this.bReduce = true; //�ּ� �ѹ��� ������ üũ ������ Ž
               this._clearTimer();
               if (this.bStart) {
                       this.nTimer = setInterval(( function() {
                              if(this.sPrev != this.el.value || this.bReduce){
                                      this.bReduce = false;
                                      this.checkMaxByte();
                                      this._checkHeight();
                              }
                       }).bind(this), this.option("nInterval"));
               }
        },

        checkMaxByte : function() {
               var nBytes = this.option('nMaxByte');
               var sText = this.el.value;
               if (nBytes !== 0 ) {
                       if (sText != this.sPrev) {
                              if (this._getbytes(sText) > nBytes) {
                                      alert(this.option('sOverMessage'));
                                      this.el.value = this.sPrev;
                                      return true;
                              }
                       }
               }
               this.sPrev = sText;
               return false;
        },

        setMinHeight : function(){
               Element.setCSS(this.el, {
                       height: this.nMinHeight + "px",
                       overflowY:"hidden"
               });
        },

        _checkHeight : function(bEnter) {
               var nCurrentHeight = this.el.scrollHeight; // Textarea �� ���� ���� ���� ��ȯ(��ũ�Ѹ� �� ���� ����)

               if (this.bGecko) { // ���̾� �����϶��� �ٸ� ������ Ž						
                       if (nCurrentHeight <= this.nMaxHeight) { // �ִ밪�� ���� �ʴ� ����
                              this.setMinHeight();
                              Element.setCSS(this.el, {
                                      height :this.el.scrollHeight + "px",
                                      overflowY :"hidden"
                              });
                              this.option('onChangeHeight')();
                              return;
                       }
               } 
               
               if (this.nMinHeight >= nCurrentHeight) {
                       this.setMinHeight();
               } else if (this.nMaxHeight < nCurrentHeight) {
                       Element.setCSS(this.el, {
                              height :this.nMaxHeight + "px",
                              overflowY :"auto"
                       });
               } else {
                       Element.setCSS(this.el, {
            			   //Why? - 2? scrollHeight���� height + padding���� �Ѿ�ͼ� height�� ���� �ٸ�.
            			   //padding�� ���� view�� ���� ���̰� ���Ʒ��� 1px���� ���̰� ���� ��.
                           height : (nCurrentHeight - 2) + "px",
                           overflowY :"hidden"
                       });
               }
               this.option('onChangeHeight')();
        },

        _onBlur : function() {
               this._clearTimer();
        },
        
        _clearTimer : function() {
               if (this.nTimer) {
                       clearInterval(this.nTimer);
                       this.nTimer = null;
               }
        },
        
        focus : function() {
               this.el.focus();
        },
        
        startCheck : function() {
               this.bStart = true;
        },
        
        stopCheck : function() {
               this.bStart = false;
        },

        _getbytes : function(str) {
               var uni_bytes = 2, bytes = 0, len = str.length;
               var charset = ((document.charset || document.characterSet || document.defaultCharset) + "")
                              .toLowerCase();
               if (charset == "utf-8"){uni_bytes = 3;}
               for ( var i = 0; i < len; i++) {
                       bytes += (str.charCodeAt(i) > 128) ? uni_bytes : 1;
               }
               return bytes;
        },
        option: function(sName, sValue) {
            var nameType = (typeof sName);
            if (nameType == "undefined") {
                return this._options;
            } else if (nameType == "string") {
                if (typeof sValue != "undefined") {
                    this._options[sName] = sValue;
                    return this;
                } else {
                    return this._options[sName];
                }
            } else if (nameType == "object") {
                try {
                    for (var x in sName) {
                        this._options[x] = sName[x];
                    }
                } catch(e) {}
                return this;
            }
        }
});