(function(top, window) {
	
    function findTop(t, s)
    {
        try {
            if (t.document) {
                return t;
            }
        } catch (e) {
            try {
                if (s.parent.document) {
                    var p = s;
                    while (p) {
                        try {
                            if (p.document) {
                                s = p;
                                p = p.parent;
                            }
                        } catch (e) {
                            return s;
                        }
                    }
                }
            } catch (e) {
                return s;
            }
        }
    }
    top = findTop(top, window);
    
    var eclogPID = 'eclog';
    if (top != window && window.location.href.indexOf('PREVIEW_SDE') == -1 && typeof top[eclogPID] != 'undefined') {
        window[eclogPID] = top[eclogPID];
        return;
    }

    var cook = {
        get : function() {
            var cookieStr = document.cookie;
            if (cookieStr == '') return false;

            var cookies = cookieStr.split('; ');
            var findCookie = false;
            for (var i = 0; i < cookies.length; i++) {
                if (cookies[i].substring(0, 4) != 'CID=') {
                    continue;
                }
                findCookie = cookies[i].substring(4);
            }
            return findCookie;
        }
    };

    var cid = {
        key : null,
        generate : function() {
            this.key = cook.get();
            if (this.key === false) {
                this.key = this.getHash();
            }
        },
        getCid : function() {
            return this.key;
        },
        getHash : function() {
            var d = new Date().getTime();
            var sUid = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'.replace(/[x]/g, function(c) {
                var r = (d + Math.random()*16)%16 | 0;
                d = Math.floor(d/16);
                return (c=='x' ? r : (r&0x3|0x8)).toString(16);
            });
            return 'CID' + sUid;
        }
    };

    cid.generate();

    top[eclogPID] = cid;
    window[eclogPID] = cid;
    
})(top, window);