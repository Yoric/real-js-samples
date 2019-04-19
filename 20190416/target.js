smi2Tracker = {
    track: function(env) {
        if(typeof(env) == "undefined") { env = {}; }

        // send some miscellaneous info about the request
        // env.u = document.location.href;
        env.bw = window.innerWidth;
        env.bh = window.innerHeight;


        if(document.location && document.location.href) {
            env.xurl = document.location.href;
        }
        if(document.referrer && document.referrer != "") {
            env.ref = document.referrer;
        }

        env.rnd = Math.floor(Math.random() * 10e12);

        var params = [];
        for(var key in env) {
            if(env.hasOwnProperty(key)) {
                params.push(encodeURIComponent(key) + "=" + encodeURIComponent(env[key]));
            }
        }

        var img = new Image();
        img.width=1;
        img.height=1;
        img.src = '//target.smi2.net/init/?' + params.join('&');


        if ( env['tag'] && env['tag'] === '2K' && !window.__statmedia) {
            /* StatMedia */
            (function (w, d, c) {
                (w[c] = w[c] || []).push(function () {
                    try {
                        w.statmedia14776 = new StatMedia({ id: 14776 });
                    } catch (e) {}
                });
                var p = d.createElement('script');
                p.type = 'text/javascript';
                p.async = true;
                p.src = 'https://stat.media/sm.js';
                var s = d.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(p, s);
            })(window, document, '__statmedia_callbacks');
            /* / StatMedia */
        }




    }
};

if(typeof(smi2TrackerSend) == "undefined") {
    var smi2TrackerSend=1;
    if(typeof(ttsmi2_data) == "undefined") { ttsmi2_data = {}; }
    smi2Tracker.track(ttsmi2_data);

}


if(!window.__statmedia)
if ( ttsmi2_data && ttsmi2_data['siteid'] && ttsmi2_data['siteid'] > 10) {
        /* StatMedia */
            (function (w, d, c) {
                (w[c] = w[c] || []).push(function () {
                    var name = 'statmedia' + ttsmi2_data['siteid'];
                    if (!w[name]) {
                        try {
                            w[name] = new StatMedia({ 'id': ttsmi2_data['siteid'] });
                        } catch ( e ) {}
                    }
                });
                if(!window.__statmedia){
                    var p = d.createElement('script');
                    p.type = 'text/javascript';
                    p.async = true;
                    p.src = 'https://stat.media/sm.js';
                    var s = d.getElementsByTagName('script')[0];
                    s.parentNode.insertBefore(p, s);
                }
            })(window, document, '__statmedia_callbacks');
        /* / StatMedia */
    }
