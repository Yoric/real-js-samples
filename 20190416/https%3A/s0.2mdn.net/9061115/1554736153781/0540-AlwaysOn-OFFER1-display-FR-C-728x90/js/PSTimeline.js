var tl = {
    stage: undefined,
    timer: undefined,
    previewMode: false,
    defaultPauseTime: undefined,

    init: function(aParams){
       	this.stage = aParams.stage;
        this.defaultPauseTime = aParams.defaultPauseTime;
        this.stage.play();
    },

    stop: function(){
        this.stage.stop();
    },

    pause: function(i){
    	var t, cb;
    	switch(typeof i){
    		case "number":
    			t = i;
    			break;
    		
    		case "undefined":
    			t = this.defaultPauseTime;
    			break;
    		
    		case "object":
    			t = i.time||this.defaultPauseTime;
    			cb = i.callback;
    			break;
    	}
    	
        this.stage.stop();
        window.setTimeout(this.unpause.bind(this, cb), t);
    },

    unpause: function(cb){
        this.stage.play();
        if(cb){
	        cb.bind(this.stage)();
        }
    }
};