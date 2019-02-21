(function(){

  var ADM_LOADED = !1,ADM_S = [];
  function InitSchedule() {
      for (ADM_S.sort(ADM_sort),
      iAI = 0; iAI < ADM_S.length; iAI++)
          ADM_S[iAI].i = iAI
  }
  function ADM_sort(n, t) {
      return n.p > t.p ? 1 : n.p == t.p ? 0 : -1
  }
  function ADM_Start(o) {
      eval("typeof(" + o.t + "_main)") == "function" && eval(o.t + "_main(o)")
  }
  function DoSchedule() {
      var n = -1;
      for (dAI = 0; dAI < ADM_S.length; dAI++)
          switch (ADM_S[dAI].s) {
          case 0:
              if (n == -1 && (n = ADM_S[dAI].p),
              n == ADM_S[dAI].p) {
                  ADM_S[dAI].s = 1,
                  ADM_Start(ADM_S[dAI]);
                  break
              }
          case 1:
              setTimeout("DoSchedule()", 300);
              return
          }
  }
  function AddSchedule(n) {
      n != null && n instanceof ADM && (ADM_S[ADM_S.length] = n)
  }
  function ADM(n, t) {
      this.t = n,
      this.p = t,
      this.s = 0,
      this.i = 0,
      this.style = "position:absolute;"
  }
  
  /*var waitForADLoad = function(){
  	setTimeout(function(){
      if(window.adv && !adv.adCenter.loader.queueing){
        //console.log('ad')
        alert('ad')
        ADM_LOADED = true;
        InitSchedule(),
        DoSchedule()
      }
      else{
        alrt('q')
        //console.log('ad-q');
        waitForADLoad()
      }
    },00);
  };*/
  //waitForADLoad();
/*  if(window.STATUS_ISIE6){
    setTimeout(function(){
      if(!ADM_LOADED){
        ADM_LOADED = true;
        InitSchedule();
        DoSchedule();
      }
    },8000);
  }
  else{
    $(window).on('load',function() {
      if(!ADM_LOADED){
        ADM_LOADED = true;
        InitSchedule();
        DoSchedule();
      }
    });
  }*/
  
  window.ADM = ADM;
  window.InitSchedule = InitSchedule;
  window.AddSchedule = AddSchedule;
  window.DoSchedule = DoSchedule;
})();