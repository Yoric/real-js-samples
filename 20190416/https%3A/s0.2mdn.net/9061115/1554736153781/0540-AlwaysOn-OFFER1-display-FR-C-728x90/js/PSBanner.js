var banner = {
    stage : undefined,
    initialised: false,

    init : function(aParams){
        if(aParams.hasOwnProperty("defaultPause")){
            if(!this.initialised){
                this.initialised = true;
                this.stage = aParams.stage;
                this.applyParams(aParams);
            }
        }
        else{
            this.stage = aParams;
            this.applyParams(settings);
        }
    },

    applyParams: function(aObj){
        tl.init({stage: this.stage, defaultPauseTime: aObj.defaultPause || 2500});
        looper.init({
            stage: this.stage,
            maxLoops: aObj.loops || -1,
            maxTime: aObj.maxTime || -1
        });
    }
};
