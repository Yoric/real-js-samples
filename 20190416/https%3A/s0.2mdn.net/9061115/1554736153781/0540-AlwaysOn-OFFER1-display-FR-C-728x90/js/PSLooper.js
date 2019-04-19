var looper = {
    loopCount: undefined,
    maxLoops: undefined,
    startTime: undefined,
    loopDuration: undefined,
    stage: undefined,

    init: function(aParams){
        this.loopCount = 1;
        this.maxLoops = aParams.maxLoops;
        this.maxTime = aParams.maxTime;
        this.stage = aParams.stage;
        this.startTime = Date.now();
    },

    loop: function(aTarget){
	    this.loopCount++;
        this.stage.gotoAndPlay(aTarget||0);
    },

    /**
     * arr = Array of values that will be summed and added to loop duration to cover cta flashing and outro times
     */
    isLastLoop: function(arr){
        var sum = 0;
        if(arr != undefined){
            sum = arr.reduce(add, 0);
            function add(a, b){
                return a + b;
            }
        }

        return this.loopCount == this.maxLoops || !this.timeForAdditionalLoop(sum);
    },

    timeForAdditionalLoop: function(n){
        if(this.maxTime == -1){
            return true;
        }else{
            if(this.loopDuration == undefined)
                this.loopDuration = Date.now() - this.startTime;

            var t = (Date.now() + this.loopDuration + n) - this.startTime;

            return t < this.maxTime * 1000;
        }
    }
};