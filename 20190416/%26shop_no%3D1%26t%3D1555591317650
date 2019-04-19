var src_path;
var s_uid;
var s_uname;
var add_data="";
var ref;
var doc_uid;
var goServer;

src_path = document.getElementById('log_script').src;

var idx_server_end = src_path.indexOf("/weblog.js");
goServer = src_path.substring(0,idx_server_end);

var uid_start = src_path.indexOf("uid=",src_path);
var uname_start = src_path.indexOf("&uname=",src_path);

s_uid=src_path.substring(uid_start+4,uname_start);

var add_data_idx_start = 0;
add_data_idx_start = src_path.indexOf("&",uname_start+7);

if (add_data_idx_start > 0) {
	s_uname=src_path.substring(uname_start+7,add_data_idx_start);
	add_data = src_path.substring(add_data_idx_start,src_path.length);
} else {
	s_uname=src_path.substring(uname_start+7,src_path.length);
}


var s_url = document.URL;

if (document.referrer) {
	ref=document.referrer;
} else {
	try {
		if (opener&&typeof(opener) == "object") {
			if (typeof(opener.document) != "unknown") {
				ref = opener.document.URL;
			}
		}
		if (! ref) {
			if (typeof(parent) == "object" ) {
				if (typeof(parent.document) != "unknown") {
					ref = parent.document.referrer;
				}
			}
			if (! ref) {
				if (parent.opener&&typeof(parent.opener) == "object" ) {
					if (typeof(parent.opener.document) != "unknown") {
						ref = parent.opener.document.referrer;
					}
				}
			}
		}
	}
	catch(e) {
	}
	finally {
		ref = '';
	}
}

if (! ref && opener) {
	try {
		if (typeof(opener) == "object" ) {
			if (typeof(opener.parent) == "object" ) {
				if (typeof(opener.parent.document) != "unknown") {
					ref = opener.parent.document.referrer;
				}
			}
		}
	}
	catch(e) {
	}
	finally {
		ref = '';
	}
}


doc_uid=s_uid+'&udim='+window.screen.width+'*'+window.screen.height+'&uref='+ref+'&uname='+s_uname+'&url='+s_url+add_data;
var src_real = document.getElementById('log_script');
var src2 = document.createElement("script");

src_real.parentNode.insertBefore(src2,src_real);
src2.src = goServer+'/weblog_ubp.html?uid='+doc_uid;