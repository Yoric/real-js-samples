var ___SppcSync=function(){
    var syncUid="6517f55f-17db-4293-923d-2123935c310d";
    var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + "sppc_uuid".replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));

    uid = matches ? decodeURIComponent(matches[1]) : "";
    if(uid==syncUid) {
        return;
    }

    var expire = new Date(new Date().getTime() + 365*86400 * 1000);
    if(expire.toUTCString) {
    expire=expire.toUTCString();
    }
    else if(expire.toGMTString) {
    expire=expire.toGMTString();
    }
    document.cookie="sppc_uuid="+syncUid+"; expires=" + expire + "; path=/";

}(___SppcSync);