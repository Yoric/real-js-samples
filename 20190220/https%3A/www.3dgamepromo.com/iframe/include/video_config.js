var language = window.navigator.userLanguage || window.navigator.language;
language = language.toUpperCase().substr(0, 2);

if (images[language] === undefined) {
    language = 'EN';
}

var image = images[language];

var paramsMapping = {
    'custom1': 'CampaignID',
    'custom2': 'SiteName',
    'custom3': 'Location',
    'custom4': 'BanID',
    'custom5': 'SpotID',
    'custom6': 'BidID',
    'custom7': 'BidValue',
    'custom10': 'ntk'
};

var urlParams = getJsonFromUrl();

var baseLink = "https://offaces-butional.com/" + urlParams.custom1 + "?CampaignID=%%CUSTOM1%%&SiteName=%%CUSTOM2%%&Location=%%CUSTOM3%%&BanID=%%CUSTOM4%%&SpotID=%%CUSTOM5%%&BidID=%%CUSTOM6%%&BidValue=%%CUSTOM7%%&loa_id=62234";
var basePostback = "https://offaces-butional.com/impression/" + urlParams.custom1 + "?CampaignID=%%CUSTOM1%%&SiteName=%%CUSTOM2%%&Location=%%CUSTOM3%%&BanID=%%CUSTOM4%%&SpotID=%%CUSTOM5%%&BidID=%%CUSTOM6%%&BidValue=%%CUSTOM7%%&loa_id=62234";

// Choose a random image
var video = videos[Math.floor(Math.random() * videos.length)];

function getJsonFromUrl() {

    var result = {};
    var query = location.search.substr(1);

    if (query.length === 0) {
        return result;
    }

    query.split("&").forEach(function(part) {
        var item = part.split("=");
        result[item[0]] = decodeURIComponent(item[1]);
    });
    return result;
}

function buildUrl(baseUrl, mapping) {

    var urlParams = getJsonFromUrl();
    for (var key in mapping) {

        if (!mapping.hasOwnProperty(key)) {
            continue;
        }

        if (urlParams[key] != undefined) {

            if (baseUrl.indexOf('?') == -1) {
                baseUrl += '?';
            } else {
                baseUrl += '&';
            }

            baseUrl += encodeURI(mapping[key]) + "=" + encodeURI(urlParams[key]);
        }
    }

    return baseUrl;
}

function baseName(str) {
    var base = str.substring(str.lastIndexOf('/') + 1);
    if (base.lastIndexOf(".") !== -1) {
        base = base.substring(0, base.lastIndexOf("."));
    }
    return base;
}



var link = buildUrl(baseLink, paramsMapping);
link += "&BanID" + "=" + video + "_" + baseName(image);

var postback = buildUrl(basePostback, paramsMapping);
postback += "&BanID" + "=" + video + "_" + baseName(image);

function OpenInNewTab(url) {
    window.open(url, '_blank');
}

