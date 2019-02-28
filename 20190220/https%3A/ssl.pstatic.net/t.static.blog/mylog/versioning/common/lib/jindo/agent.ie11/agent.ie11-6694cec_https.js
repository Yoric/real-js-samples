/**
 * IE11에서 Agent#navigator에서 ie가 false로 나오는 문제를 해결.
 * jindo가 아닌 네임스페이스를 가진 경우 해당 스크립트를 링크걸 때 아래와 같이 파라메터를 넣어야한다.
 * <script src="agent.ie11.js?jindo=custom"></script>
 * 만약 해당파일을 기존 파일과 합친 경우에는 제일 하단에 내용을 넣고 파라메터를 똑같이 넣는다.
 * <script src="jindo.merged.js?jindo=custom"></script> 
 */
(function(jindoName){       
    function _$Agent() {
        var cl = arguments.callee;
        var cc = cl._cached;
    
        if (cc) return cc;
        if (!(this instanceof cl)) return new cl;
        if (!cc) cl._cached = this;
    
        this._navigator = navigator;
        this._dm = document.documentMode;
    }
    
    function _navigator() {
        var info = {},
            ver = -1,
            nativeVersion = -1,
            u = this._navigator.userAgent,
            v = this._navigator.vendor || "",
            dm = this._dm;
    
        function f(s,h){
            return ((h || "").indexOf(s) > -1)
        };
    
        info.getName = function(){
            var name = "";
            for(x in info){
                if(typeof info[x] == "boolean" && info[x] && info.hasOwnProperty(x))
                    name = x;
            }
            return name;
        }
    
        info.webkit = f("WebKit", u);
        info.opera = (window.opera !== undefined) || f("Opera", u);
        info.ie = !info.opera && (f("MSIE", u)||f("Trident", u));
        info.chrome = info.webkit && f("Chrome", u);
        info.safari = info.webkit && !info.chrome && f("Apple", v);
        info.firefox = f("Firefox", u);
        info.mozilla = f("Gecko", u) && !info.safari && !info.chrome && !info.firefox && !info.ie;
        info.camino = f("Camino", v);
        info.netscape = f("Netscape", u);
        info.omniweb = f("OmniWeb", u);
        info.icab = f("iCab", v);
        info.konqueror = f("KDE", v);
        info.mobile = (f("Mobile", u) || f("Android", u) || f("Nokia", u) || f("webOS", u) || f("Opera Mini", u) || f("BlackBerry", u) || (f("Windows", u) && f("PPC", u)) || f("Smartphone", u) || f("IEMobile", u)) && !f("iPad", u);
        info.msafari = (!f("IEMobile", u) && f("Mobile", u)) || (f("iPad", u) && f("Safari", u));
        info.mopera = f("Opera Mini", u);
        info.mie = f("PPC", u) || f("Smartphone", u) || f("IEMobile", u);
    
        try{
            if(info.ie){
                if(dm > 0){
                    ver = dm;
                    if(u.match(/(?:Trident)\/([0-9.]+)/)){
                        var nTridentNum = parseFloat(RegExp.$1, 10);
                        
                        if(nTridentNum > 3){
                            nativeVersion = nTridentNum + 4;
                        }
                    }else{
                        nativeVersion = ver;
                    }
                }else{
                    nativeVersion = ver = u.match(/(?:MSIE) ([0-9.]+)/)[1];
                }
            }else if(info.safari || info.msafari){
                ver = parseFloat(u.match(/Safari\/([0-9.]+)/)[1]);
                
                if(ver == 100){
                    ver = 1.1;
                }else{
                    if(u.match(/Version\/([0-9.]+)/)){
                        ver = RegExp.$1;
                    }else{
                        ver = [1.0, 1.2, -1, 1.3, 2.0, 3.0][Math.floor(ver / 100)];
                    }
                }
            }else if(info.mopera){
                ver = u.match(/(?:Opera\sMini)\/([0-9.]+)/)[1];
            }else if(info.firefox||info.opera||info.omniweb){
                ver = u.match(/(?:Firefox|Opera|OmniWeb)\/([0-9.]+)/)[1];
            }else if(info.mozilla){
                ver = u.match(/rv:([0-9.]+)/)[1];
            }else if(info.icab){
                ver = u.match(/iCab[ \/]([0-9.]+)/)[1];
            }else if(info.chrome){
                ver = u.match(/Chrome[ \/]([0-9.]+)/)[1];
            }
            
            info.version = parseFloat(ver);
            info.nativeVersion = parseFloat(nativeVersion);
            
            if(isNaN(info.version)){
                info.version = -1;
            }
        }catch(e){
            info.version = -1;
        }
        
        this.navigator = function(){
            return info;
        };
        
        return info;
    };


    if(window[jindoName]){
        var jindo = window[jindoName];
        var oldAgentPrototype = jindo.$Agent.prototype;
        jindo.$Agent = _$Agent;
        jindo.$Agent.prototype = oldAgentPrototype;
        jindo.$Agent.prototype.navigator = _navigator;
    }
    if(window.$Agent){
        var oldAgentPrototype = window.$Agent.prototype;
        $Agent = _$Agent;
        $Agent.prototype = oldAgentPrototype;
        $Agent.prototype.navigator = _navigator;
    }
})(function(){
    var script = document.getElementsByTagName("script");
    return (script[script.length-1].src.match(/[\?\&]jindo=(.*?)\&?$/)&&RegExp.$1?RegExp.$1.replace(/(\&.*)/,""):"jindo");
}());
