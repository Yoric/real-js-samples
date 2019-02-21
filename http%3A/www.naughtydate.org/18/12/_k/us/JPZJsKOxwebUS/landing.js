var queryEngSec = getQueryUrl("engsec");
var hidLocation = document.getElementById("hidLocation");
if (queryEngSec!=null && queryEngSec!="0" && !isNaN(queryEngSec) && hidLocation!=null && hidLocation.value!='')
{
    setTimeout( "trackEngage()", queryEngSec*1000);
}

function getQueryUrl(ji) {
    hu = window.location.search.substring(1);
    gy = hu.split("&");
    for (i=0;i<gy.length;i++) {
        ft = gy[i].split("=");
        if (ft[0] == ji)
            return unescape(ft[1]);
    }
    return null;
}

var keyStr = "ABCDEFGHIJKLMNOP" +
            "QRSTUVWXYZabcdef" +
            "ghijklmnopqrstuv" +
            "wxyz0123456789+/" +
            "=";

function trim(str) {
    return str.replace(/^\s*|\s*$|\n|\r/g,"");
}

function encode64(input) {
  var output = "";
  var chr1, chr2, chr3 = "";
  var enc1, enc2, enc3, enc4 = "";
  var i = 0;

  do {
     chr1 = input.charCodeAt(i++);
     chr2 = input.charCodeAt(i++);
     chr3 = input.charCodeAt(i++);

     enc1 = chr1 >> 2;
     enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
     enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
     enc4 = chr3 & 63;

     if (isNaN(chr2)) {
        enc3 = enc4 = 64;
     } else if (isNaN(chr3)) {
        enc4 = 64;
     }

     output = output +
        keyStr.charAt(enc1) +
        keyStr.charAt(enc2) +
        keyStr.charAt(enc3) +
        keyStr.charAt(enc4);
     chr1 = chr2 = chr3 = "";
     enc1 = enc2 = enc3 = enc4 = "";
  } while (i < input.length);

  return output;
}

function trackEngage()
{
    var pic=document.createElement('img');
    pic.src = hidLocation.value + 'adeng.php?rnd=' + Math.random();
    pic.setAttribute("style", "display:none");
    hidLocation.parentNode.appendChild(pic);
}

function checkdirect(c,l,i)
{
    if (i===undefined)
        i='';
    var pic = document.createElement("img");
    pic.src = hidLocation.value + 'adck.php?c=' + c + '&l=' +  l + '&id=' + i + '&r=' + encode64(trim(document.referrer)) + "&rnd=" + Math.random();
    pic.setAttribute("style", "display:none");
    hidLocation.parentNode.appendChild(pic);
}

function resetCookie(l)
{
    if (l===undefined)
        l=1;
    var pic = document.createElement("img");
	pic.src = hidLocation.value + 'resetcookie.php?l=' + l + '&t=image&rnd=' + Math.random();
	pic.setAttribute("style", "display:none");
	hidLocation.parentNode.appendChild(pic);
}