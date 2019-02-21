/*jshint multistr:true */
var jq = jQuery.noConflict();
if (typeof $ === 'undefined') $ = jq;
// translation functions
jq.getScript("https://info.microsoft.com/rs/157-GQE-382/images/global_form_language_based_translations.js", function(){
    // wait for form
    MktoForms2.whenReady(function(form) {
        // get language from form
        var DOMTranslations = (function() {
            function getLanguage() {
                var pageLanaguage;
                if ( window.location.href.match(/LCID=(\w{2}(?:-\w{2})?)/i) ) {
                pageLanguage = window.location.href.match(/LCID=(\w{2}(?:-\w{2})?)/i);
                pageLanguage = pageLanguage[1].toUpperCase();
                return pageLanguage;
                }
                else if (window.location.href.match(/LCID-(\w{2}(?:-\w{2})?)/i) ) {
                    pageLanguage = window.location.href.match(/LCID-(\w{2}(?:-\w{2})?)/i);
                    pageLanguage = pageLanguage[1].toUpperCase();
                    return pageLanguage;
                }
                else if (typeof jq('input[name="systemFormsLanguageLocaleProduct"]').val() !== "undefined") {
                    pageLanguage = jq('input[name="systemFormsLanguageLocaleProduct"]').val().trim().substr(0,5).toUpperCase();
                    return pageLanguage;
                }
                else {
                    pageLanguage = null;
                    return pageLanguage;
                } 
            }
            // translate the text if the div exists
            function changeRequiredFieldsText() {
                var pageLanguage = getLanguage(); // get country-language code
                var countryCode = translations[pageLanguage]; // set json object based on lang code
                var requiredFieldsDiv = jq('.form-wrapper .required-fields');
                // check if div exists
                if (translations.hasOwnProperty(pageLanguage) && requiredFieldsDiv !== null && typeof requiredFieldsDiv !== "undefined") {
                    // change all the things!
                    requiredFieldsDiv.html(countryCode.requiredFields);
                }
    
            }
            return {
                changeRequiredFieldsText : changeRequiredFieldsText
            };
        })();
        DOMTranslations.changeRequiredFieldsText();
    });
});
jq(document).ready(function(){
    // change URL of fonts for info.microsoft.com, since the stylesheet specifies office
    // and CORS blocks them
    if ( window.location.href.indexOf("info.microsoft.com") > -1) {
        var localFonts = document.createElement('style');
        localFonts.appendChild(document.createTextNode('\
            @font-face {\
              font-family: "Segoe UI";\
              src: url("https://info.microsoft.com/rs/157-GQE-382/images/latest.eot");\
              src: local("Segoe UI"), url("https://info.microsoft.com/rs/157-GQE-382/images/latest.eot?#iefix") format("embedded-opentype"), url("https://info.microsoft.com/rs/157-GQE-382/images/latest.woff") format("woff"), url("https://info.microsoft.com/rs/157-GQE-382/images/latest.ttf") format("truetype"), url("https://info.microsoft.com/rs/157-GQE-382/images/latest.svg#web") format("svg");\
              font-weight: normal;\
              font-style: normal;\
            }\
            @font-face {\
              font-family: "Segoe UI Semibold";\
              src: url("https://info.microsoft.com/rs/157-GQE-382/images/latestsemibold.eot");\
              src: local("Segoe UI Semibold"), url("https://info.microsoft.com/rs/157-GQE-382/images/latestsemibold.eot?#iefix") format("embedded-opentype"), url("https://info.microsoft.com/rs/157-GQE-382/images/latestsemibold.woff") format("woff"), url("https://info.microsoft.com/rs/157-GQE-382/images/latestsemibold.ttf") format("truetype"), url("https://info.microsoft.com/rs/157-GQE-382/images/latestsemibold.svg#web") format("svg");\
              font-weight: normal;\
              font-style: normal;\
            }\
            @font-face {\
              font-family: "Segoe UI Semilight";\
              src: url("https://info.microsoft.com/rs/157-GQE-382/images/latestsemilight.eot");\
              src: local("Segoe UI Semilight"), url("https://info.microsoft.com/rs/157-GQE-382/images/latestsemilight.eot?#iefix") format("embedded-opentype"), url("https://info.microsoft.com/rs/157-GQE-382/images/latestsemilight.woff") format("woff"), url("https://info.microsoft.com/rs/157-GQE-382/images/latestsemilight.ttf") format("truetype"), url("https://info.microsoft.com/rs/157-GQE-382/images/latestsemilight.svg#web") format("svg");\
              font-weight: normal;\
              font-style: normal;\
            }\
            @font-face {\
              font-family: "Segoe UI Light";\
              src: url("https://info.microsoft.com/rs/157-GQE-382/images/latestlight.eot");\
              src: local("Segoe UI Semilight"), url("https://info.microsoft.com/rs/157-GQE-382/images/latestlight.eot?#iefix") format("embedded-opentype"), url("https://info.microsoft.com/rs/157-GQE-382/images/latestlight.woff") format("woff"), url("https://info.microsoft.com/rs/157-GQE-382/images/latestlight.ttf") format("truetype"), url("https://info.microsoft.com/rs/157-GQE-382/images/latestlight.svg#web") format("svg");\
              font-weight: normal;\
              font-style: normal;\
            }\
        '));
        document.head.appendChild(localFonts);
    }
});