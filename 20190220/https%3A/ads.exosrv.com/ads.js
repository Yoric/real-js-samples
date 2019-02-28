
function getParameterFromUrl(name, url) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

//retrive the parameter "p" from the URL. In case it exists it is assigned 
//to the "p" variable, otherwise, the "p" varibles values "document.referrer"
var p = getParameterFromUrl('p', document.URL);
if (p === null || p === '') {
    if (top === self) {
        p = document.URL;
    } else {
        p = document.referrer;
    }
}

var dt=new Date().getTime();
var exoDocumentProtocol = (document.location.protocol != "https:" && document.location.protocol != "http:") ? "https:" : document.location.protocol;
if(typeof ad_sub == 'undefined') var ad_sub = "";
if(typeof ad_tags == 'undefined') var ad_tags = "";
if(typeof ad_notify == 'undefined') var ad_notify = "";
if(typeof ad_el == 'undefined') var ad_el = "";
var ad_type = ad_width + 'x' + ad_height;
if(ad_width == '100%' && ad_height == '100%') ad_type = 'auto';
var ad_screen_resolution = screen.width + 'x' + screen.height;
document.write('<iframe frameborder="0" scrolling="no" width="' + ad_width + '" height="' + ad_height + '" src="' + exoDocumentProtocol + '//syndication.exosrv.com/ads-iframe-display.php?idzone=' + ad_idzone + '&type=' + ad_type + (ad_notify !== "" ? "&notify=" + ad_notify : "") + '&p=' + escape(p) + '&dt=' + dt + '&sub=' + ad_sub + '&tags=' + ad_tags + '&screen_resolution=' + ad_screen_resolution + '&el=' + ad_el + '"></iframe>');