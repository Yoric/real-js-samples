/* release date : 2018-11-26 */
nhn.AsideKeywordTab=$Class({$init:function(e){this._setElement(e),this._attachEvent(e),this._nCurrentIndex=0},select:function(e){var t=$Element(this._aTab[e]);this._aTabArea.length>e&&this._aTabArea.length>e&&($ElementList(this._aTab).removeClass("selected"),$ElementList(this._aTabArea).hide(),t.addClass("selected"),$Element(this._aTabArea[e]).show(),$Element(this._elBlind).html(t.attr("data-blind-text")),this._nCurrentIndex=e)},_setElement:function(e){this._el=e,this._aTab=$$("._tab li",e),this._aTabArea=$$("._tab_area",e),this._nCurrentIndex=parseInt($Element($$.getSingle("._tab li.selected",e)).attr("data-index"),10),this._elBlind=$$.getSingle("._blind",e)},_attachEvent:function(e){$Fn(this._onClickTab,this).attach(this._aTab,"click")},_onClickTab:function(e){var t=e.currentElement,n=parseInt(t.getAttribute("data-index"));this.select(n)}});