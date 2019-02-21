var  Ellipsis = Class({
       /**
        * 기준 엘리먼트로 부터 클래스명 중 _ellipsis 로 찾아 모두 말줄임 적용
        * @param {HTMLElement} elBasis
        */
       ellipsisPage : function(elBasis){
             var aEl, el, aParam, sTitle, i, nCount;
             elBasis = $(elBasis) || document.body;
             aEl = cssquery("._ellipsis", elBasis);
             for(i=0, nCount = aEl.length ; i < nCount ; i++){
                    el = aEl[i];
                    aParam = this.getParam(el.className);
                    sTitle =  this.safeText(el);
                    if(this.ellipsis(el, aParam[1] || aParam[0])){
                           el.title = sTitle;
                    }
             }
             aEl = el = aParam = sTitle = null;
       },

       /**
        * ClassName에서 파라미터를 반환하는 함수
        * @param {String} sClassName
        * @return {Array}
        * @example
        * <a href="" class="_param(1|2|3)" id="testId1" >TestElement</a>
        * <a href="" class="_param(1||3)" id="testId2" >TestElement</a>
        *
        *     var aParam = utility.getParam($("testId1").className);
        *  aParam[0]=="1"; // true
        *  aParam[1]=="2"; // true
        *  aParam[2]=="3"; // true
        *     aParam = utility.getParam($("testId2").className);
        *  aParam[0]=="1"; // true
        *  aParam[1]==""; // true
        *  aParam[2]=="3"; // true
        */
       getParam : function(sClassName){
             if(sClassName){
                    var rxParameter = /_param\((.*)\)/;
                    var aMatch = sClassName.match(rxParameter);
                    if(aMatch && aMatch[0] && aMatch[1]){
                           return aMatch[1].split("|");
                    }
             }
             return null;
       },

       /**
        * 웹페이지에 안전한 텍스트를 출력하는 함수
        * $Element.text() 함수와 동일
        * @param {HTMLElement} el 출력 테스트 대상 HTMLElement
        * @param {String} sText 출력하고 싶은 텍스트
        * @return {HTMLElement} el
        * @example
        *     utility.safeText($("someId"), "이거 다 들어가요~?");
        */
       safeText : function(el, sText){
             var sTagName = el.tagName.toLowerCase();
             var sProp = typeof el.innerText !='undefined' ? "innerText" : "textContent";
             if(sTagName == 'textarea' || sTagName == 'input') sProp = 'value';

             if(typeof sText == 'string'){
                    //el.innerHTML='';
                    try{el[sProp] = sText;}catch(e){
                           el.innerHTML = (sText.replace(/&/g, '&').replace(/</g, '<'));
                           return el;
                    }
                    return el;
             }
             return el[sProp];
       },

       /**
        * 말줄임 함수
        * @param {HTMLElement|String} el
        * @param {Number} nWidth
        * @param {String} sTail
        */
       ellipsis : function(el, nWidth, sTail){
             var sTxt, nTailWidth, nHeight, sSubTxt, bFlag, i, nSize;
             bFlag = false;
             el = $(el);
             sTail = sTail || "...";
             nWidth = parseInt(nWidth, 10) || 50;

             sTxt = this.safeText(el);

             this.safeText(el, sTail);
             nTailWidth = el.offsetWidth;
             nHeight = el.offsetHeight;
             nWidth = nWidth - nTailWidth;

             this.safeText(el, sTxt);
             if (el.offsetWidth >= nWidth || el.offsetHeight > nHeight) {
                    for(i=2, nSize = sTxt.length ; i <= nSize ;  i++ ){
                           sSubTxt = sTxt.substring(0, i);
                           this.safeText(el, sSubTxt);
                           if(el.offsetHeight > nHeight || el.offsetWidth >= nWidth){
                                 if(i!=nSize){
                                        this.safeText(el, sTxt.substring(0, i-1) + sTail);
                                        bFlag = true;
                                        break;
                                 }else{
                                        this.safeText(el, sSubTxt);
                                        break;
                                 }
                           }
                    }
             }

             sTxt = nTailWidth = sSubTxt = nHeight = i = nSize = null;
             return bFlag;
       }
});
var oEllipsis = new Ellipsis();