/*global MktoForms2 brandingText formLocalizationStrings IN countryCodeList legalReqs */
jQuery(document).ready(function() {
    if (typeof MktoForms2 !== "undefined") {
        MktoForms2.whenReady(function(form) {
            jQuery.getScript("https://info.microsoft.com/rs/157-GQE-382/images/formStrings.js", function() {

            //jQuery.getScript("http://127.0.0.1:6500/formStrings.js", function() {
                var mktoForm = form;
                var russia = false;
                // for determining if labels are shown in form design
                var noLabels = false;
                var countrySelection;
                var key; 
                var flightURL;
                var partnerPreferenceForm = false;
                var partnerCombinedStatement = false;
                var product_name = jQuery('#CountrySelector').text();

                // Onload hide error msg for specific form 
                if(jQuery('#mktoForm_15851').length > 0){
                    jQuery('#validationerror').parents('.mktoFormRow').hide();
                }

                 //Clear cookie on thank you page
                 if((jQuery('#mktoForm_15647').length > 0) || (jQuery('#mktoForm_15982').length > 0) || (jQuery('#mktoForm_15316').length > 0) || (jQuery('#mktoForm_15524').length > 0) ) {
                    clearListCookies();
                    } 
                // some basic logic definitions for partner stuff used throughout the script
                if (jQuery('input[name="ce_partnerpromotionalemailpreference"]').length > -1) {
                    partnerPreferenceForm = true;
                    if (jQuery('input[name="ce_partnerpromotionalemailpreference"]').attr('type') === 'hidden') {
                        partnerCombinedStatement = true;
                    }
                }
                /**
                 * Generate GUID for user tracking - uses performance.now() for uniqueness
                 * 
                 * @function generateUUID
                 * 
                 * @example // returns "cdf573ce-bc3d-49b2-87d4-026a27421da2". Unique each time it is called.
                 * var uniqueTrackingNumber = generateUUID();
                 */
                function generateUUID () { // Public Domain/MIT
                    var d = new Date().getTime();
                    if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
                        d += performance.now(); //use high-precision timer if available
                    }
                    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                        var r = (d + Math.random() * 16) % 16 | 0;
                        d = Math.floor(d / 16);
                        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
                    });
                }
                /**
                 * Namespace for yummie cookies!
                 * 
                 * @namespace Cookies
                 */
                var Cookies = (function() {
                    /**
                     * Get a cookie by name and return its value
                     * 
                     * @function Cookies.getCookie
                     * @param {string} name Name of the cookie you want a value for
                     * 
                     * @example // cookie named 'test' exists and has a stored value of true
                     * getCookie('test'); // returns true
                     */
                    function getCookie(name) {
                        var dc = document.cookie;
                        var prefix = name + "=";
                        var begin = dc.indexOf("; " + prefix);
                        if (begin == -1) {
                            begin = dc.indexOf(prefix);
                            if (begin != 0) return null;
                        }
                        else
                        {
                            begin += 2;
                            var end = document.cookie.indexOf(";", begin);
                            if (end == -1) {
                                end = dc.length;
                            }
                        }
                        // because unescape has been deprecated, replaced with decodeURI
                        //return unescape(dc.substring(begin + prefix.length, end));
                        return decodeURI(dc.substring(begin + prefix.length, end));
                    }
                    /**
                     * Create a cookie and store it for X number of minutes in the brower
                     * 
                     * @function Cookies.createCookie
                     * 
                     * @param {string} name Name of your cookie?
                     * @param {any} value What do you want your cookie to store?
                     * @param {number} minutes How many minutes do you want your cookie to last?
                     * 
                     * @example // sets cookie named 'test' with a value of true that expires in 1 day
                     * createCookie('test', true, 1)
                     */
                    function createCookie(name,value,minutes) {
                        var expires = "";
                        if (minutes) {
                            var date = new Date();
                            date.setTime(date.getTime() + (minutes*60*1000));
                            expires = "; expires=" + date.toUTCString();
                        }
                        document.cookie = name + "=" + value + expires + "; path=/";
                    }
                    return {
                        getCookie : getCookie,
                        createCookie : createCookie
                    };
                })();
                /**
                 * Namespace for holding methods used to extract data from the DOM 
                 * @namespace Parameters */
                var Parameters = (function() {
                    /** 
                     * Captures the language-country combination from either the
                     * URL paramter named LCID, the string "LCID-xx-yy" at the end of a URL,
                     * or from the hidden form input "systemFormsLanguageLocaleProduct"
                     * @function getLCID
                     * @memberOf Parameters
                     */
                    function getLCID() {
                        var lcid;
                        if ( window.location.href.match(/LCID=(\w{2}(?:-\w{2})?)/i) ) {
                            lcid = window.location.href.match(/LCID=(\w{2}(?:-\w{2})?)/i);
                            return lcid === null ? null : lcid[1];
                        }
                        else if (window.location.href.match(/LCID-(\w{2}(?:-\w{2})?)/i) ) {
                            lcid = window.location.href.match(/LCID-(\w{2}(?:-\w{2})?)/i);
                            return lcid === null ? null : lcid[1];
                        }
                        else {
                            lcid = jQuery("input[name='systemFormsLanguageLocaleProduct']").val();
                            lcid = typeof lcid !== "undefined" ? lcid.trim().substr(0,5) : null;
                            return lcid;
                        }
                    }
                    /**
                     * Returns the index of a particular occurance of a string
                     * @function getIndexOf
                     * @memberOf Parameters
                     * @example // returns 3 from 'Hello World'
                     * Parameters.getIndexOf('Hello World', 'l', 2 );
                     * @param {string} variableString What to look in?
                     * @param {string} identifier What to look for?
                     * @param {number} index Which occurance?
                     */
                    function getIndexOf(variableString, identifier, index) {
                        return variableString.split(identifier, index).join(identifier).length;
                    }
                    /**
                     * Outputs either the Newsletter code, or null
                     * @function getNewsLetter
                     * @memberOf Parameters
                     */
                    function getNewsLetter() {
                        var newsletterBrand = jQuery("input[name='systemFormsLanguageLocaleProduct']").val();
                        // if it's not undefined and it's long enough to actually have a newsletter indicator in it
                        if (typeof newsletterBrand !== "undefined" && newsletterBrand.split('-').length === 4) {
                            // start at the 3rd occurance of "-" and continue to the end of the string
                            newsletterBrand = newsletterBrand.trim().substr(getIndexOf(newsletterBrand, '-', 3) + 1, newsletterBrand.length);
                            return newsletterBrand;
                        }
                        else {
                            return null;
                        }
                    }
                    /**
                     * Gets the brand from the LCID value, example: LCID=EN-US-MSFT - brandSelector would return MSFT
                     * @function brandSelector
                     * @memberOf Parameters
                     */
                    function brandSelector() {
                        masterSetting = jQuery("input[name='systemFormsLanguageLocaleProduct']").val();
                        if (isNewsLetter === true) {
                            var brandStart = getIndexOf(masterSetting, '-', 2) + 1;
                            var brandEnd = getIndexOf(masterSetting, '-', 3) - (getIndexOf(masterSetting, '-', 2) + 1);
                            return masterSetting.trim().substr(brandStart, brandEnd);
                        }
                        else {
                            return masterSetting.trim().replace(lcid + '-', '').toUpperCase();
                        }
                    }
                    /**
                     * get value of the URL param for wt.mc_id or wt.ot_id, regardless of which one exists
                     * @function Parameters#getMCID
                     * @protected
                     */
                    // get the mcid of the URL
                    function getMCID() {
                        var mcid;
                        if (window.location.href.match(/Wt\.mc_id=([^&]*)/i) ) {
                            mcid = window.location.href.match(/Wt\.mc_id=([^&]*)/i);
                            return mcid === null ? null : mcid[0].toLowerCase().replace('wt.mc_id=', '');
                        }
                        else if (window.location.href.match(/Wt\.ot_id=([^&]*)/i)) {
                            mcid = window.location.href.match(/Wt\.ot_id=([^&]*)/i);
                            return mcid === null ? null : mcid[0].toLowerCase().replace('wt.ot_id=', '');
                        }
                    }
                    /**
                     * Set the systemFormsLanguageLocaleProduct hidden input with the correct language, if language was defined
                     * by URL parameter or string
                     * @function setSystemFormsVal
                     * @memberOf Parameters
                     */
                    function setSystemFormsVal() {
                        if ( brand !== null && 
                            jQuery('input[name="systemFormsLanguageLocaleProduct"]').length > 0 &&
                            jQuery('input[name="systemFormsLanguageLocaleProduct"]').val().length  > 5 &&
                            typeof brand !== "undefined" && brand.indexOf('-') === -1) {
                            jQuery('input[name="systemFormsLanguageLocaleProduct"]').val(lcid + '-' + brand);
                        }
                    }/**
                     * Sets the 'wTmcid' hidden input value based on what is captured by getMCID()
                     * @function setMCID
                     * @memberof Parameters
                     */
                    function setMCID() {
                        if (jQuery('input[name="wTmcid"]').length > 0 && getMCID() !== null) {
                            jQuery('input[name="wTmcid"]').val(getMCID());
                        }
                    }
                    /**
                     * create URL params to add to followup URL after form fill
                     * for Now Take Flight pages
                     * @function Parameters.nowTakeFlight 
                     */
                    function nowTakeFlight() {
                        var flightParams = "?firstName=" + jQuery('#FirstName').val() + "&lastName=" + jQuery('#LastName').val() + "&companyName=" + jQuery('#Company').val() + "&email=" + jQuery('#Email').val();
                        return flightParams;
                    }
                    /** Parse out the postmessage created by Now Take Flight pages
                     * @function Parameters.captureFlightData
                     */
                    function captureFlightData(data) {
                        var flightURL = data;
                        return flightURL;
                    }
                    /**
                     * Add hidden demandBase tracking fields to the form
                     * @function Parameters.addDemandBase
                     */
                    function addDemandBase() {
                        form.addHiddenFields({
                            "Demandbase_CompanyName" : "",
                            "Demandbase_Industry" : "",
                            "Demandbase_SubIndustry" : "",
                            "Demandbase_EmployeeRange" : "",
                            "Demandbase_EmployeeCount" : "",
                            "Demandbase_Phone" : "",
                            "Demandbase_City" : "",
                            "Demandbase_State" : "",
                            "Demandbase_Country" : "",
                            "Demandbase_CountryName" : "",
                            "Demandbase_PostalCode" : "",
                            "Demandbase_ID" : "",
                            "Demandbase_PrimarySIC" : "",
                            "Demandbase_IP" : "",
                            "Demandbase_Traffic" : "",
                            "Demandbase_B2B" : "",
                            "Demandbase_B2C" : "",
                            "Demandbase_DataSource": ""
                        });
                    }
                    /**
                     * Poll for the demandBase announcement and attach function for Type Ahead after the function is there
                     * @function Parameters.demandbaseFormsCallback
                     * @param {number} interval How often to poll, expressed as milliseconds
                     * @param {number} count How many times to poll before timing out
                     */
                    function demandbaseFormsCallback(interval, count) {
                        // Interval in ms for polling Demandbase visitor data
                        var POLL_INTERVAL = interval;
                        // Max number of poll attempts
                        var MAX_POLL_COUNT = count;
                        var pollCount = 0;
                        function poll() {
                            pollCount++;
                            if (window.Demandbase && window.Demandbase.Config.forms && window.Demandbase.Connectors.WebForm) {
                                if (lcid === "EN-US" || lcid === "EN-CA") {
                                    window.Demandbase.Config.forms.companyID = "Company";
                                }
                                Demandbase.Connectors.WebForm.connect(Demandbase.Config.forms);
                            } else if (pollCount < MAX_POLL_COUNT) {
                                setTimeout(poll, POLL_INTERVAL);
                            }
                        }
                        poll();
                    }
                    return {
                        getLCID : getLCID,
                        setMCID : setMCID,
                        setSystemFormsVal : setSystemFormsVal,
                        nowTakeFlight: nowTakeFlight,
                        captureFlightData : captureFlightData,
                        addDemandBase : addDemandBase,
                        demandbaseFormsCallback : demandbaseFormsCallback,
                        getIndexOf : getIndexOf,
                        getNewsLetter : getNewsLetter,
                        brandSelector : brandSelector
                    };
                })();
                // Remove form from localization function
                if(jQuery('#intranet-form').length !== 0){
                    jQuery(this).remove();
                }
                /**
                 * Namespace for checkbox functions
                 * @namespace Checkboxes
                 */
                var Checkboxes = (function() {
                    // empty variable for storage
                    var inputDataField = [];
                    /**
                     * Add the new checkbox values to the hidden input on form submit
                     * @function Checkboxes.checkboxSubmission
                     */
                    function checkboxSubmission(){
                        var hiddenInput = jQuery('input[name="cDLProgramAssociation"]');
                        var inputArrayString = inputDataField.toString();
                        if(jQuery('input[name="cDLProgramAssociation"]').length !== 0) {
                            hiddenInput.val(inputArrayString);
                        }
                    }
                    /**
                     * If the checkboxes haven't been removed by autohide, then they should have their values and
                     * text populated by the hidden tokens
                     * @function Checkboxes.checkForBoxes
                     */
                    function checkForBoxes() {
                        if (jQuery('#dynamicCheckboxes').length !== 0) {
                            var checkboxValue;
                            var checkBoxes = jQuery('#dynamicCheckboxes input[type=checkbox]');
                            // Add hidden field
                            form.addHiddenFields({
                                "cDLProgramAssociation":""
                            });
                            // iterates over all the checkboxes to add values
                            checkBoxes.each(function () {
                                // looks only for checked boxes
                                if(jQuery(this).prop('checked')) {
                                    checkboxValue = jQuery(this).val();
                                    inputDataField.push(checkboxValue);
                                }
                            });
                            // looks for changes in checkbox checked/unchecked
                            checkBoxes.on('change', function(){
                                // if box is newly checked add new value
                                if(jQuery(this).prop('checked')) {
                                    checkboxValue = jQuery(this).val();
                                    inputDataField.push(checkboxValue);
                                    return checkboxValue;
                                } else {
                                    // if box is unchecked remove
                                    var checkboxValue = jQuery(this).val();
                                    // checks if value exists in array
                                    if((inputDataField).indexOf(checkboxValue) !== -1) {
                                        var inputIndex = inputDataField.indexOf(checkboxValue);
                                        if (inputIndex >= 0) {
                                            inputDataField.splice(inputIndex, 1);
                                        }
                                    }
                                }
                            });
                        }
                    }
                    // Add array to hidden input
                    form.onSubmit(checkboxSubmission);
                    return {
                        checkboxSubmission:checkboxSubmission,
                        checkForBoxes:checkForBoxes
                    };
                })();
                // we need to remove the newsletter identifier if USA isn't selected and add it back if it is. 
                var isNewsLetter = false;
                var newsletterTitle = Parameters.getNewsLetter();
                if (newsletterTitle != null) {
                    isNewsLetter = true;
                }
                /** Change the legal notice text to the right notice and language, based on complex rules. 
                 * See the function and all of it's comments for more information.
                 * @function changeNotice
                 */
                function changeNotice() {
                    // Exit function on specific form that has no localization
                    if (jQuery('#intranet-form').length !== 0) {
                        return;
                    }
                    // deal with block scope hoisting issues;
                    var notices; var legalNotice; var brandText; var brandSelect; var isBranded;
                    var hiddenData = jQuery("input[name='systemFormsLanguageLocaleProduct']");
                    var masterSetting = hiddenData.val();
                    var product_selection = jQuery("#ce_crm2marketo option:selected").val();
                    // set the proper brand. Rules have to be here instead of formStrings.js because of Marketo forms loading after load event
                    // if load handler is put on formStrings.js, communication between the two scripts is broken
                    if (masterSetting.length > 5 && !masterSetting.match(/msft/i)) { // Check to see if it's msft brand which doesn't use branding
                        isBranded = "Brand";
                        brandSelect = Parameters.brandSelector();
                        // Translate the brand if one is available, otherwise use default object text
                        if(lcid in brandingText) {
                            brandText = (brandSelect in brandingText[lcid]) ? brandingText[lcid][brandSelect] : brandingText.default[brandSelect];
                        }
                        // default brand text
                        else {
                            brandText = brandingText.default[brandSelect];
                        }
                    } else { // doesn't need a brand, so don't add one. DUH!
                        isBranded = "";
                    }
                    var noticeCanada = "noticeCanada" + isBranded;
                    var noticePartnerCombinedCanada = "noticePartnerCombinedCanada" + isBranded;
                    var noticePartnerCombined = "noticePartnerCombined" + isBranded;
                    var notice = "notice" + isBranded;
                    // special rules for en-us, en-ca, and fr-ca
                    if ((lcid == "EN-US" || lcid == "EN-CA" || lcid == "FR-CA") && (jQuery('#mktoForm_15866').length !== 1)) {
                        // EN-US only newsletter specific notices
                        if (lcid == "EN-US" 
                            // it's long enough to actually be a newsletter
                            && isNewsLetter === true
                            // we actually have a newsletter for the value
                            && newsletterTitle in brandingText.default.newsletter
                            // only when USA is the selected country
                            && countrySelection == "UNITED STATES"  && (newsletterTitle === 'USNLGOV' || newsletterTitle === 'USNLMIB' || newsletterTitle === 'USNLHLS' || newsletterTitle === 'USNLEDU')) {
                            // TODO: Does this need Canada specific?
                            // legalNotice = formLocalizationStrings[lcid].legal.noticeNewsletter + isBranded;
                            legalNotice = formLocalizationStrings[lcid].legal.noticeNewsletter;
                            // put the newsletter title in if there's a match
                            legalNotice = legalNotice.replace('NEWSLETTERTITLE', brandingText.default.newsletter[newsletterTitle]);
                            // add the newsletter identifier to the input if it has been removed
                            if (masterSetting.indexOf(newsletterTitle) < 1) hiddenData.val(masterSetting + '-' + newsletterTitle);

                        }
                         // For Any selected country except UNITED STATES
                         else if(isNewsLetter === true
                            // we actually have a newsletter for the value
                            && newsletterTitle in brandingText.default.newsletter
                            // only when USA is the selected country
                            && (newsletterTitle === 'RESSTU_NL' || newsletterTitle === 'RESFAC_NL' || newsletterTitle === 'RESALU_NL')) {
                            // TODO: Does this need Canada specific?
                            // legalNotice = formLocalizationStrings[lcid].legal.noticeNewsletter + isBranded;
                            legalNotice = formLocalizationStrings[lcid].legal.noticeNewsletter;
                            // put the newsletter title in if there's a match
                            legalNotice = legalNotice.replace('NEWSLETTERTITLE', brandingText.default.newsletter[newsletterTitle]);
                            // add the newsletter identifier to the input if it has been removed
                            if (masterSetting.indexOf(newsletterTitle) < 1) hiddenData.val(masterSetting + '-' + newsletterTitle);

                        }
                        // canada specific notice only for en-us, en-ca, and fr-ca,
                        else {
                            if (masterSetting.indexOf(newsletterTitle) > 0) hiddenData.val(masterSetting.replace('-' + newsletterTitle, ''));
                            if (countrySelection == "CANADA") {
                                // if it is a partner form with a combined statement, then change the statement to the combined statement for canada, otherwise, just canada
                                legalNotice = partnerPreferenceForm === true && partnerCombinedStatement === true ? formLocalizationStrings[lcid].legal[noticePartnerCombinedCanada] : formLocalizationStrings[lcid].legal[noticeCanada];
                            }
                            else {
                                legalNotice = partnerPreferenceForm === true && partnerCombinedStatement === true ? formLocalizationStrings[lcid].legal[noticePartnerCombined] : ChangeNoticeonlcid()/*formLocalizationStrings[lcid].legal[notice]*/;
                            }
                        }
                    }
                    else if((jQuery('#mktoForm_15866').length !== 1)){
                        try{
                        legalNotice = partnerPreferenceForm === true && partnerCombinedStatement === true && language === "EN" ? formLocalizationStrings[lcid].legal[noticePartnerCombined] : ChangeNoticeonlcid()/*formLocalizationStrings[lcid].legal[notice]*/;
                        }catch (ex) {
                            console.log("Exception in Block A :", ex);
                        }
                    }
                    else{
                        ChangeNoticeonlcid();
                    }
                    
                    //Added comment Pravin 
                    function ChangeNoticeonlcid(){
                        if((jQuery('#mktoForm_15866').length !== 1)){
                        var const_lang_from='',const_lang='';
                        Selectbrand = Parameters.brandSelector();
                        countrySelection = jQuery('#Country option:selected').val().toUpperCase();
                        for (var key in legalReqs){
                            if (legalReqs.hasOwnProperty(key)) {
                                const_lang = legalReqs[key].indexOf(countrySelection) > -1 ? key : '';
                                if(const_lang == "optIn" || const_lang == "optOut"){
                                    const_lang_from = "legal_optIn_OutNotice";
                                }else if(const_lang == "textMicrosoft"){
                                    const_lang_from = "legalNotice";
                                }
                                if(const_lang_from !=''){
                                    break;
                                }
                            }
                        }
                        if(Selectbrand !== 'MSFT'){
                            legalNotice = formLocalizationStrings[lcid][const_lang_from]["NoticewithBrand"];
                        }else{
                            legalNotice = formLocalizationStrings[lcid][const_lang_from]["NoticewithoutBrand"];
                        }
                        }else if((jQuery('#mktoForm_15866').length === 1) && (countrySelection == "CANADA") && (lcid == "EN-US" || lcid == "EN-CA")){
                            // if it is a partner form with a combined statement, then change the statement to the combined statement for canada, otherwise, just canada
                            legalNotice = partnerPreferenceForm === true && partnerCombinedStatement === true ? formLocalizationStrings[lcid].legal[noticePartnerCombinedCanada] : formLocalizationStrings[lcid].legal[noticeCanada];
                        }
                        else if((jQuery('#mktoForm_15866').length === 1) && lcid == "FR-CA"){
                            legalNotice = formLocalizationStrings[lcid]["frnoticeCanada"];
                            } 
                        else {
                            legalNotice = formLocalizationStrings[lcid]["dcomm_legal"];
                        }
                        return legalNotice;
                    }
                    //End  Comment for legalNotice change as per Product Name Change 

                    if(jQuery('#mktoForm_15622').length){
                        if(jQuery('#ce_crm2marketo').val() != ""){
                            if( window.location.href.indexOf('lcid') > 1){
                                legalNotice = formLocalizationStrings[lcid].legal.noticeBrand;
                            }else{
                                legalNotice = formLocalizationStrings['EN'].legal.noticeBrand;
                            }
                        }else{
                            if( window.location.href.indexOf('lcid') > 1){
                                legalNotice = formLocalizationStrings[lcid].legal.notice;
                            }else{
                                legalNotice = formLocalizationStrings['EN'].legal.notice;
                            }
                            
                        }
                    }

                    // put the brand in there if needed
                    try{
                        if(jQuery('#mktoForm_15622').length){
                            legalNotice = legalNotice.indexOf('REPLACEME') > -1 ? legalNotice.replace('REPLACEME', productPreferences[product_selection]) : legalNotice;
                        }else{
                            legalNotice = legalNotice.indexOf('REPLACEME') > -1 ? legalNotice.replace('REPLACEME', brandText) : legalNotice;
                           //Added comment Pravin - legalNotice change as per Product Name Change
                            legalNotice = legalNotice.indexOf('DYMPRODUCT') > -1 ? legalNotice.replace('DYMPRODUCT', brandText) : legalNotice;
                         }
                    }catch (ex) {
                        console.log("Exception in Block A :", ex);
                    }
                    for (notices in legalText) {
                        if (legalText.hasOwnProperty(notices)) {
                            legalText[notices].html(legalNotice);
                        }
                    }
                    // Russia needs additional legal text
                    if (countrySelection === "RUSSIA" && jQuery('.russia-legal').length < 1) {
                        jQuery(formLocalizationStrings["default"].russiaNotice).insertBefore('.mktoButtonRow');
                    }
                    else if (countrySelection !== "RUSSIA" && jQuery('.russia-legal').length > 0) {
                        jQuery('.russia-legal').remove();
                    }
                }
                /**
                 * Translates all of the text on form elements like labels or placeholders
                 * 
                 * @function swapLanguages
                 * @param {object} textContainers An object containing all of the DOM elements matched against the JSON
                 * @param {object} formLocalizationStrings JSON translations contained in a JavaScript variable
                 */
                function swapLanguages(textContainers, formLocalizationStrings) {
                    //Takes values from 'formLocalizationStrings' and injects them into corresponding 'textContainers'
                    //See JSON file for 'formLocalizationStrings' formatting requirements
                    var hostSpecificPlaceholder = "Organization name *";
                    //Loop through each major group of text translations - EG: form, body, header, footer, etc
                    for (var key in formLocalizationStrings[lcid]) {//EG: 'key' would be 'form'
                        var subkey;
                        //Removes internal form from localization loop that doesn't need translations
                        if (jQuery('#intranet-form').length !== 0) {
                            break;
                        }
                        if (formLocalizationStrings[lcid].hasOwnProperty(key) && textContainers.hasOwnProperty(key)) {
                            if (key === 'form' && noLabels === true) {
                                for (subkey in formLocalizationStrings[lcid][key]) {//EG: 'subkey' would be 'firstName'
                                    if (formLocalizationStrings[lcid][key].hasOwnProperty(subkey) && textContainers[key].hasOwnProperty(subkey) && formLocalizationStrings[lcid][key][subkey] !== "") {
                                        if (subkey === 'firstName' ||
                                            subkey === 'lastName' || 
                                            subkey === 'email' || 
                                            subkey === 'companyName' ||
                                            subkey === 'companySizeSelect' ||
                                            subkey === 'schoolName' || 
                                            subkey === 'phone') {
                                            // replace input placeholder text with html translations and parse to plain text
                                            if(subkey === 'companyName' && window.location.host == 'note.microsoft.com' && lcid == 'EN-US'){ //For specific hostURL and LCID set Placeholder
                                                textContainers[key][subkey].attr('placeholder', hostSpecificPlaceholder);
                                            }else if(jQuery('#mktoForm_15745, #mktoForm_15776').length > 0 && subkey === 'companyName'){
                                                textContainers[key][subkey].attr('placeholder', textContainers[key][subkey].html(formLocalizationStrings[lcid][key]['Organizationname']).text() + " *");
                                            }else if(jQuery('#mktoForm_15745, #mktoForm_15776').length > 0 && subkey === 'companySizeSelect'){
                                                textContainers[key][subkey].text(textContainers[key][subkey].html(formLocalizationStrings[lcid][key]['Organizationsize']).text() + " *");
                                            }
                                            else{
                                                textContainers[key][subkey].attr('placeholder', textContainers[key][subkey].html(formLocalizationStrings[lcid][key][subkey]).text() + " *");
                                            }
                                        }
                                            else if (jQuery('#mktoForm_15316, #mktoForm_15317').length !== 1 && subkey === 'formComments' && textContainers.form.formComments.length) {
                                            textContainers[key][subkey].attr('placeholder', textContainers[key][subkey].html(formLocalizationStrings[lcid][key][subkey]).text());
                                        } 
                                            else if(jQuery('#mktoForm_15316, #mktoForm_15317').length === 1 && subkey === 'formComments' && textContainers.form.formComments.length) {
                                            textContainers[key][subkey].attr('placeholder', textContainers[key][subkey].html(formLocalizationStrings[lcid][key][subkey+1]).text()); 
                                            }  
 

                                        else {
                                            textContainers[key][subkey].html(formLocalizationStrings[lcid][key][subkey]);
                                        }
                                    }
                                }
                            }
                            else {
                                for (subkey in formLocalizationStrings[lcid][key]) {//EG: 'subkey' would be 'firstName'
                                    if (formLocalizationStrings[lcid][key].hasOwnProperty(subkey) && textContainers[key].hasOwnProperty(subkey) && formLocalizationStrings[lcid][key][subkey] !== "") {
                                        // replace input label text with html translations and parse to plain text
                                        if (subkey === 'firstName' ||
                                        subkey === 'lastName' || 
                                        subkey === 'email' || 
                                        subkey === 'companyName' ||
                                        subkey === 'schoolName' || 
                                        subkey === 'phone' ||
                                        subkey === 'country' ||
                                        subkey === 'companySize' ||
                                        subkey === 'jobRole') {
                                            if(subkey === 'companyName' && window.location.host == 'note.microsoft.com' && lcid == 'En-US'){
                                                textContainers[key][subkey].html('<div class="mktoAsterix">*</div> Organization name');
                                            }else{
                                                textContainers[key][subkey].html('<div class="mktoAsterix">*</div>' + formLocalizationStrings[lcid][key][subkey]);
                                            }
                                        }
                                        else {
                                            textContainers[key][subkey].html(formLocalizationStrings[lcid][key][subkey]);                                            
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                /**
                 * All functions pertaining to select input manipulation. Includes transations for text, updating option values, etc.
                 * 
                 * @namespace Select
                 */
                var Select = (function() {
                    /**
                     * Determine if labels or placeholders are being used and update the first selection option text accordingly
                     * 
                     * @function Select.updateFirstOption
                     */
                    function updateFirstOption() {
                        if (jQuery('label[for=FirstName]').css('display') == 'none' 
                        && typeof formLocalizationStrings[lcid].form.companySize != "undefined") { // there are no visible labels
                            if (brand === 'EDU') {
                                formLocalizationStrings[lcid].form.studentNumberSelect = formLocalizationStrings[lcid].form.studentNumber + "... *"; // Update school size placeholder to be the label name
                            } else {
                                formLocalizationStrings[lcid].form.companySizeSelect = formLocalizationStrings[lcid].form.companySize + "... *"; // Update company size placeholder to be the label name
                            }
                        }
                        else if ( typeof formLocalizationStrings[lcid].formSelectCountry != "undefined") { // labels are being used instead of placeholders
                            formLocalizationStrings[lcid].formSelectCountry["Country... *"] = formLocalizationStrings[lcid].formSelectCountry["Select..."]; // Update country and job role placeholders to be "Select"
                            formLocalizationStrings[lcid].formSelectJobRole["Job role... *"] = formLocalizationStrings[lcid].formSelectJobRole["Select..."];
                        }
                    }
                    // unifying country options across all 300ish forms. Used to prevent editing all the forms which would take forever
                    /**
                     * Replaces all of the HTML for a given select input, updating the option values and text. Takes form design into account and responds accordingly.
                     * @function Select~buildOptions
                     * @access protected
                     * @param {string} location pass the LCID value into the function
                     * 
                     * @example // rebuilds the #Country select options with values from the French object
                     * $('#Country').html(buildOptions('FR-FR'));
                     */
                    function buildOptions(location) {
                        var countryReplacements = [];
                        if (language !== "EN") {
                            if (noLabels === true) {
                                countryReplacements += '<option value>' + formLocalizationStrings[location].formSelectCountry['Country... *'] + '</option>';
                            }
                            else {
                                countryReplacements += '<option value>' + formLocalizationStrings[location].formSelectCountry['Select...'] + '</option>';
                            }
                        }
                        else {
                            if (noLabels === true) {
                                countryReplacements += '<option value>Country/Region... *</option>';
                            }
                            else {
                                countryReplacements += '<option value>Select...</option>';
                            }
                        }
                        // var country = formLocalizationStrings[lcid].country;
                        // countryReplacements += '<option value="' + country + '">' + formLocalizationStrings[location].countryControl[country] + '</option>';
                        // for (var key in formLocalizationStrings[location].countryControl) {
                        //     if (key === country) continue;
                        //     countryReplacements += '<option value="' + key + '">' + formLocalizationStrings[location].countryControl[key] + '</option>';
                        // }

                        //Adding Default option for form #mktoForm_15585 for task 31515[New form for Trial in a Box - UK]- 30th Aug 2018

                        if(jQuery('#mktoForm_15585, #mktoForm_15584').length){
                            countryReplacements  += '<option value="' + country + '">' + formLocalizationStrings[location].countryControl['United Kingdom'] + '</option>';
                        } else{
                            var country = formLocalizationStrings[lcid].country;
                            countryReplacements += '<option value="' + country + '">' + formLocalizationStrings[location].countryControl[country] + '</option>';
                            for (var key in formLocalizationStrings[location].countryControl) {
                                if (key === country) continue;
                                countryReplacements += '<option value="' + key + '">' + formLocalizationStrings[location].countryControl[key] + '</option>';
                            }
                        }
                        return countryReplacements;
                    }
                    /**
                     * Rebuild the Country select input options based on the rules layout in the function call
                     * 
                     * @function Select.replaceCountries
                     */
                    // change the #Country select options and values
                    function replaceCountries() {
                        var country = jQuery('#Country');
                        if (language === "EN") {
                            country.html(buildOptions('default'));
                        }
                        else {
                            country.html(buildOptions(lcid));
                        }
                    }
                    /**
                     * Sort including foreign characters and alphabet orders
                     * 
                     * @function Select#localeSort
                     * @access protected
                     */
                    function localeSort(a, b) {
                        return a[0].localeCompare(b[0]);
                    }
                    /**
                     * Sort select options into ascending alphabetical order according to locale. 
                     * Keep the first two options on top since they will be the select indicator and the target country.
                     * 
                     * @function Select.localeAlphabetSort
                     * 
                     * @param {string} selectInputOptions The jQuery selector for the select option in the chosen input
                     */
                    function localeAlphabetSort(selectInputOptions) {
                        var selectOptions = []; // use array instead of object for sort() function
                        var selectCounter = 0; // need counter for each() to identify array index
                        // create multidimensional array of option values and text 
                        jQuery(selectInputOptions).each(function(){
                            selectOptions.push([jQuery(this).text()]);
                            selectOptions[selectCounter].push(jQuery(this).val());
                            selectCounter ++;
                        });
                        // reset counter to use again
                        selectCounter = 0;
                        // grab subarray with "Select..." and another for "United States"
                        var topTwoOptions = selectOptions.splice(0, 2);
                        selectOptions = selectOptions.sort(localeSort);
                        // add "Select..." and "United States" back to array.
                        selectOptions.unshift(topTwoOptions[1]);
                        selectOptions.unshift(topTwoOptions[0]);
                        // change option value and text to be in alphabetical order
                        // may break in foreign lanugages
                        jQuery(selectInputOptions).each(function() {
                            if (selectCounter === 0) {
                                jQuery(this).text(selectOptions[selectCounter][0]);
                            }
                            else {
                                jQuery(this).text(selectOptions[selectCounter][0]).val(selectOptions[selectCounter][1]);
                            }
                            selectCounter ++;
                        });
                    }
                    
                
                    /**
                     * Update the Job Roles select option. This could be re-written for reusability.
                     * 
                     * @function Select#buildJobRoleLists
                     * 
                     * @access protected
                     * 
                     * @param {string} optionValue What do you want the value for this option to be?
                     * @param {string} optionText What do you want the display text for this option to be?
                     * @param {string} conditional To run or not to run?
                     */
                    function buildJobRoleLists(optionValue, optionText, conditional) {
                        var newOption = document.createElement('OPTION');
                        if(conditional) newOption.setAttribute('value', optionValue);
                        var newOptionText = document.createElement('span');
                        newOptionText.innerHTML = optionText;
                        newOption.appendChild(newOptionText);
                        document.getElementById('Title').appendChild(newOption);
                    }
                    /**
                     * Update the Country select option. This could be re-written for reusability.
                     * 
                     * @function Select#buildcountryLists
                     * 
                     * @access protected
                     * 
                     * @param {string} optionValue What do you want the value for this option to be?
                     * @param {string} optionText What do you want the display text for this option to be?
                     * @param {string} conditional To run or not to run?
                     */
                    function buildcountryLists(optionValue, optionText, conditional) {
                        var newOption = document.createElement('OPTION');
                        if(conditional) newOption.setAttribute('value', optionValue);
                        var newOptionText = document.createElement('span');
                        newOptionText.innerHTML = optionText;
                        newOption.appendChild(newOptionText);
                        document.getElementById('Country').appendChild(newOption);
                    }


                    /** On change of product selection set it's related country and job role . 
                     * See the function and all of it's comments for more information.
                     * @function Select.changeProductSelection
                     */
                    function changeProductSelection(productList) {
                        if(formLocalizationStrings[lcid]['countryList'][productList]){
                            jQuery('#Country option').remove();
                            jQuery('#Title option').remove();
                        }
                        for (key in formLocalizationStrings[lcid]['countryList'][productList]) {
                            buildcountryLists(key, formLocalizationStrings[lcid]['countryList'][productList][key], true);
                        }  
                        for (key in formLocalizationStrings[lcid]['JtitleList'][productList]) {
                            buildJobRoleLists(key,formLocalizationStrings[lcid]['JtitleList'][productList][key])
                        }
                    }
                    
                    /**
                     * 
                     * All the logic to change the job roles options based on the logic contained in the function. 
                     * It may or may not change based on the hidden on page selector. 
                     * 
                     * @function Select.changeJobRoles
                     */
                    function changeJobRoles() {
                        if (jQuery('#jobRoleSelector').length > 0 && jQuery('#Title').length > 0) {
                            var jobRoleSelect = jQuery('#Title');
                            // Job role will be fixed for form id 15688 (office default)
                            var jobListPick = jQuery('#mktoForm_15688').length < 1 ? jQuery('#jobRoleSelector').text().trim().toLowerCase() : 'office default';
                            // set proper selector. All EN get default
                            var lcidOrDefault = language === "EN" && jobListPick !== "edu default" ? "default" : lcid;
                            if (jobListPick !== "") {
                                // office default uses the list set on the form
                                if (jobListPick !== "office default") {
                                    if (jobListPick in formLocalizationStrings[lcidOrDefault].jobRoleList) {
                                        var jobObject =formLocalizationStrings[lcidOrDefault].jobRoleList[jobListPick];
                                        if (typeof jobObject !== 'undefined') {
                                            // remove default options
                                            jobRoleSelect.html('');
                                            // teamwork wants the existing list plus some stuff, but now it's out of order
                                            if (jobListPick === "teamwork default") {
                                                for (key in formLocalizationStrings[lcidOrDefault].formSelectJobRole) {
                                                    // loop through default options, except "other" "job title" and "select"
                                                    if (key === "Job Title... *" || key === "Select..." || key === "Other") continue;
                                                    buildJobRoleLists(key, formLocalizationStrings[lcidOrDefault].formSelectJobRole[key], key !== "Job role... *");
                                                }
                                                // now the new values
                                                for (key in jobObject) {
                                                    buildJobRoleLists(key, jobObject[key], true);
                                                }
                                                // now "other"
                                                buildJobRoleLists("Other", formLocalizationStrings[lcidOrDefault].formSelectJobRole["Other"], true );
                                            }
                                            else {
                                                for (key in jobObject) {
                                                    // add new options
                                                    buildJobRoleLists(key, jobObject[key], key !== "Job role... *");
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    //Job role fix
                    if(jQuery('#mktoForm_14284, #mktoForm_14287').length > 0){
                        if(jQuery('select#Title option:first span').length>=1){
                        var jobrolechage = jQuery('select#Title option span:first').text();    
                        jQuery('select#Title option:first').remove('span');
                        jQuery('select#Title option:first').text(jobrolechage);
                        jQuery('select#Title option:first').attr("value", "");
                        }
                     }
                    /**
                     * Define a new object as a key of the textContainers object, with each option as a subkey
                     * @function Select.getSelectOptions
                     * @param {string} subkeyName String to define the new key
                     * @param {string} selector jQuery Selector for select options
                     * @example // Defines an object with key name formSelectJobRole with the options from #Title as subkeys
                     * getSelectOptions(formSelectJobRole, "form select[name='Title'] option");
                     */
                    function getSelectOptions (subkeyName, selector) {
                        textContainers[subkeyName] = {};
                        jQuery(selector).each(function(){
                            textContainers[subkeyName][this.innerHTML.trim()] = jQuery(this);
                        });
                    }
                    /**
                     * Changes product of interest select options based on hidden criteria on the page
                     * 
                     * @function Select.changePOI
                     */
                    function changePOI() {
                        // make sure we should even run it at all
                        if (jQuery('#web2Marketo').length > 0
                            && jQuery('#poiDiv').length > 0
                            && jQuery('#mktoForm_15179').length === 0) {
                            // set language to default if english or language if not
                            var poiLanguage = language === "EN" ? "default" : lcid;
                            if ("POI" in formLocalizationStrings[poiLanguage]) {
                                var poiTopic = jQuery('#poiDiv').text();
                                if (poiTopic !== "" && poiTopic !== "{{poi-select}}" && typeof poiTopic !== "undefined") {
                                    poiTopic = poiTopic.trim().toLowerCase();
                                    jQuery('#web2Marketo').html('');
                                    for (var key in formLocalizationStrings[poiLanguage].POI[poiTopic]) {
                                        if (key === "label") {
                                            jQuery('#web2Marketo').append('<option value="">' + formLocalizationStrings[poiLanguage].POI[poiTopic][key] + '</option>');
                                        }
                                        else {
                                            jQuery('#web2Marketo').append('<option value="' + formLocalizationStrings[poiLanguage].POI[poiTopic][key] + '">' + key + '</option>');
                                        }
                                    }
                                    jQuery('#web2Marketo option:first-child').val('');
                                }
                            }
                        }
                    }
                    return {
                        updateFirstOption : updateFirstOption, 
                        localeAlphabetSort : localeAlphabetSort,
                        replaceCountries : replaceCountries,
                        changeJobRoles : changeJobRoles,
                        changeProductSelection : changeProductSelection,
                        getSelectOptions : getSelectOptions,
                        changePOI : changePOI
                    };
                })();   
                 
                // disable form submission in order to submit to RU server first and await response
                function russiaSelected() {
                    if (countrySelection == "RUSSIA") {
                        mktoForm.submittable(false);
                        russia = true;
                    }
                    else {
                        mktoForm.submittable(true);
                        russia = false;
                    }
                }
                // Russian leads need to be sent to a RU server before storing lead on our database
                /**
                 * Sends all of our lead data to a Russian server for storage there before storage on Marketo's server. 
                 * This is a requirement from legal and cannot be skipped or bipassed. Do not let anyone deploy without this.
                 * 
                 * @function russianSubmit
                 */
                function russianSubmit() {
                    var russianIncrement = 1;
                    if (russia === true && mktoForm.submittable(false)) {
                        mktoForm.onValidate(function (valid) {
                            if (valid && mktoForm.submittable() === false  && russianIncrement < 2) {
                                russianIncrement = russianIncrement + 1;
                                var successID = generateUUID();
                                form.addHiddenFields({"countryCompliantHash": "", "countryCompliantAuditID": ""});
                                jQuery('form.mktoForm button[type="submit"]').attr('disabled', '');
                                jQuery.ajax({
                                    type: "POST",
                                    url: "https://datacomplianceservice.azurewebsites.net/api/contactext/saveonlytorussiamkt",
                                    data: {
                                        "source": "OneGDC|FormFillOut",
                                        "AddOrEdit": 0,
                                        "Firstname": jQuery('#FirstName').val(),
                                        "Lastname": jQuery('#LastName').val(),
                                        "Jobtitle": jQuery('#Title').val(),
                                        "EmailAddress1": jQuery('#Email').val(),
                                        "Country": jQuery('#Country option:selected').val(),
                                        "Telephone": jQuery('#Phone').val(),
                                        "Department": "",
                                        "Id": successID,
                                        "Company": jQuery('#Company').val(),
                                        "AdditionalInfo": "{  \"companySize\": " + jQuery('#employeeRange option:selected').val() + "}"
                                    },
                                    success: function(data) {
                                        var headerResponse = data;
                                        jQuery('input[name=countryCompliantHash]').val(headerResponse.HashedValue);
                                        jQuery('input[name=countryCompliantAuditID]').val("OneGDC|FormFillout|" + successID);
                                        // alert('countryCompliantHash is:' + jQuery('input[name=countryCompliantHash]').val() + "\n countryCompliantAuditID is: " + jQuery('input[name=countryCompliantAuditID]').val());
                                        mktoForm.submittable(true);
                                        mktoForm.submit();
                                    },
                                    error: function() {
                                        alert('К сожалению, сейчас отправить вашу форму невозможно. Повторите попытку позже.');
                                        jQuery('form.mktoForm button[type="submit"]').removeAttr('disabled');
                                    },
                                    dataType: "JSON"
                                });
                            }
                        });
                    }
                }
                /**
                 * Redefine form submission action if it isn't set on the landing page, but is set on the form.
                 * For use later with the "form action".
                 * 
                 * @function changeFormURL
                 */
                function changeFormURL() {
                    var pageAction = jQuery('#formAction');
                    var formAction = jQuery('#formRedirect');
                    pageAction = (typeof pageAction.html() === "undefined") ? null : (pageAction.text().indexOf('[REPLACE]') > -1 || pageAction.text().indexOf('%7B%7Bmy.Form-Action%7D%7D') > -1 || pageAction.text().indexOf('{{my.Form-Action}}') > -1) ? null : (pageAction.text() === "") ? null : pageAction.html().replace(/\s|(<p>)|(<\/p>)/g, '');
                    formAction = (typeof formAction.html() === "undefined") ? null : (formAction.text().indexOf('[REPLACE]') > -1 || formAction.text().indexOf('%7B%7Bmy.Form-Action%7D%7D') > -1 || formAction.text().indexOf('{{my.Form-Action}}') > -1) ? null : (formAction.text() === "") ? null : formAction.html().replace(/\s|(<p>)|(<\/p>)/g, '');
                    var redirectURL = (pageAction !== null) ? pageAction : (formAction !== null) ? formAction : null;
                    return redirectURL;
                }
                var redirectURL = changeFormURL();
                // end functions, start definitions
                var lcid = Parameters.getLCID();
                // account for improperly capitalized URL and input params
                if (lcid !== null) {
                    lcid = lcid.toUpperCase();
                }
                var language = Parameters.getLCID().substring(0, 2).toUpperCase();
                // translate form validation error messages
                /**
                 * Custom logic for Marketo error messages and our own add-on functionality
                 * 
                 * @namespace Validation
                 */
                var Validation = (function () {
                    var validEmail = true, validPhone = true;
                    /**
                     * Checks if the form should be submittable or not
                     * 
                     * @function Validation#formToggle
                     * @access protected
                     */
                    var formToggle = function() {
                        if (validEmail === false || validPhone === false) {
                            jQuery('form.mktoForm button.mktoButton').attr("disabled", "");
                        }
                        else {
                            jQuery('form.mktoForm button.mktoButton').removeAttr('disabled');
                        }
                    };
                    /**
                     * Disables the form from submission if any of the required criteria aren't met.
                     * 
                     * @function Validation.formDisable
                     */
                    var formDisable = function() {
                        // if it exists and is required. Marketo doesn't use the required attribute unfortunately 
                        // so we have to check if the label has an asterix
                        if (jQuery('#Phone').length > 0  && jQuery('label[for="Phone"] .mktoAsterix').length > 0) {
                            validPhone = false;
                        }
                        if (jQuery('#Email').length > 0  && jQuery('label[for="Email"] .mktoAsterix').length > 0) {
                            validEmail = false;
                        }
                        formToggle();
                    };
                    /**
                     * Adds styling rules for error states of validated inputs.
                     * 
                     * @function Validation.invalidStyles
                     */
                    var invalidStyles = function() {
                        var invalid = document.createElement('style');
                        var invalidRules = document.createTextNode('.form-wrapper form.mktoForm input.invalid {border: 2px solid #e51b00;}');
                        invalid.appendChild(invalidRules);
                        document.getElementsByTagName('head')[0].appendChild( invalid );
                    };
                    /**
                     * Translates the static error message thrown by marketo
                     * 
                     * @function Validation.errorMessageTranslation
                     */
                    var errorMessageTranslation = function() {
                        if ("errorMessage" in formLocalizationStrings[lcid]) {
                            setTimeout(function(){
                                var errorDiv = jQuery('.mktoErrorMsg');
                                var errorText = errorDiv.text().trim();
                                errorDiv.html(formLocalizationStrings[lcid].errorMessage[errorText]);
                                errorDiv.attr('aria-live', 'polite');
                            }, 100);
                        }
                    };
                    /**
                     * Checks to see if the phone or email cookies exist. Sets them if they don't
                     * 
                     * @function Validation.setUserID
                     * 
                     * @inner
                     * @protected
                     * 
                     */
                   // var setUserID = function(cookieName) {
                    //     var userID = Cookies.getCookie(cookieName);
                    //     return userID = userID === null ? Cookies.createCookie(cookieName, generateUUID(), 1) : userID;
                    // };

                    var setUserID = function(cookieName) {
                        var userID = Cookies.getCookie(cookieName);
                        if(userID === null || userID === undefined){
                            var generateuuid = generateUUID();           
                            Cookies.createCookie(cookieName, generateuuid, 1);
                            return userID = generateuuid;
                       }else{
                            return userID;
                        }
                    }; 
                    var validateEmail = function () {

                        var params = {
                            // Request parameters
                            "Leads":
                                [
                                    {
                                        "LeadID": setUserID('FormEmailValidation'),
                                        "Email": jQuery('#Email').val()
                                    }
                                ],
                            "Source": "ContactMeForm"
                        };
                        if (jQuery('#Email').val() !== "") {
                            jQuery.ajax({
                                url: "https://cdvs.trafficmanager.net/EmailValidation?EmailValidationType=full",
                                type: "POST",
                                contentType: "application/json",
                                dataType: "json",
                                data: JSON.stringify(params),
                                timeout: 4000
                            })
                                .done(function (data) {
                                    if (!data.ServiceResponse.shift().IsValidEmail) {
                                        if ("errorMessage" in formLocalizationStrings[lcid]) {
                                            mktoForm.showErrorMessage(formLocalizationStrings[lcid].errorMessage.email, jQuery('#Email'));
                                            validEmail = false;
                                            jQuery('#Email').addClass('invalid');
                                            formToggle();
                                        }
                                    }
                                    else {
                                        validEmail = true;
                                        formToggle();
                                        jQuery('#Email').removeClass('invalid');
                                    }
                                })
                                .fail(function () {
                                    validEmail = true;
                                    formToggle();
                                    jQuery('#Email').removeClass('invalid');
                                });
                        }
                    };
                    /**
                     * Call the CDVS form validation API for phone and send along params for validation logic. 
                     * Await server response and enable or disable form based on response codes. 
                     * Could be rewritten to be a single function instead of email and phone.
                     * 
                     * @function Validation.validatePhone
                     */
                    var validatePhone = function () {
                        if (jQuery('#Phone').length > 0) {
                            jQuery('.mktoButton').attr("disabled", "");
                            if (jQuery('#Phone').val() !== "" && countrySelection !== "" && typeof countrySelection != "undefined") {
                                var params = {
                                    // Request parameters
                                    "LeadsforValidation": [
                                        {
                                            "ID": setUserID('FormPhoneValidation'),
                                            "OrgWorkPhone": jQuery('#Phone').val().replace(/\(*\)*-* */g, ""),
                                            "PersonalPhone": "",
                                            "Country": countrySelection
                                        }
                                    ],
                                    "Source": "ContactMeForm"
                                };
                                jQuery.ajax({
                                    url: "https://cdvs.trafficmanager.net/PhoneValidation",
                                    type: "POST",
                                    contentType: "application/json",
                                    dataType: "json",
                                    data: JSON.stringify(params),
                                    timeout: 4000
                                })
                                    .done(function (data) {
                                        if (!data.ValidatedLead.shift().OrgWorkPhone_Validations.IsValidPhoneNumber) {
                                            if ("errorMessage" in formLocalizationStrings[lcid]) {
                                                mktoForm.showErrorMessage(formLocalizationStrings[lcid].errorMessage.phone, jQuery('#Phone'));
                                                validPhone = false;
                                                jQuery('#Phone').addClass('invalid');
                                                formToggle();
                                            }
                                        }
                                        else {
                                            validPhone = true;
                                            formToggle();
                                            jQuery('#Phone').removeClass('invalid');
                                        }
                                    })
                                    .fail(function () {
                                        validPhone = true;
                                        formToggle();
                                        jQuery('#Phone').removeClass('invalid');
                                    });
                            }
                        }
                    };
                    return {
                        errorMessageTranslation: errorMessageTranslation,
                        validateEmail: validateEmail,
                        validatePhone: validatePhone,
                        formDisable: formDisable,
                        invalidStyles: invalidStyles
                    };
                })();
                /**
                 * Store all of our Accessibility functions.
                 * Marketo's limitations required many client side work-arounds to pass validation requirements.
                 * 
                 * @namespace Accessibility
                 */
                var Accessibility = (function() {
                    /**
                     * Add aria labels to all of the forms. Use the form's actual label or placeholder as the aria-label value
                     * 
                     * @function Accessibility.buildAria
                     */
                    var buildAria = function() {
                        // get all labels
                        var labels = document.getElementsByTagName('LABEL');
                        var selectLabels = document.getElementsByTagName('SELECT');
                        var placeholders = document.getElementsByTagName('INPUT');
                        // labels are visible. Aria-label is probably overkills, but what the heck...
                        if ( jQuery('label[for=FirstName]').css('display') !== "none" ) {
                            // use label text to set aria-label
                            for (i = 0; i<labels.length; i++) {
                                jQuery('input[name="' + labels[i].htmlFor + '"]').attr('aria-label', labels[i].innerHTML.trim().replace(/<div class="mktoAsterix">\*<\/div>/g, ""));
                            }
                        }
                        // labels are hidden, we need to set the aria-label
                        else {
                            for (i = 0; i<placeholders.length; i++) {
                                // attr doesn't work on input need to use getAttribute
                                if (placeholders[i].getAttribute('placeholder') === "" || 
                                placeholders[i].getAttribute('placeholder') === null || 
                                typeof placeholders[i].getAttribute('placeholder') === "undefined" ) continue;
                                placeholders[i].setAttribute('aria-label', placeholders[i].getAttribute('placeholder').replace(' *', ''));
                            }
                        }
                        // put aria-label on select inputs. Select ID is always descriptive enough for a label value
                        for (var i = 0; i<selectLabels.length; i++) {
                            jQuery('select[name="' + selectLabels[i].id + '"]').attr('aria-label', selectLabels[i].id.trim());
                        }
                    };
                    /**
                     * Marketo puts their form inside of a span for some reason. Forms inside of spans are invalid HTML. 
                     * This function strips the HTML from the span, deletes the span, and adds the HTML back to the page inside of a div instead.
                     * 
                     * @function Accessibility.changeFormParent
                     */
                    var changeFormParent = function() {
                        // forms live in spans on marketo hosted pages, but not on embedded forms
                        if (jQuery('.formSpan').length > 0) {
                            // Get the parent that the span lives in
                            var formSpanParent = jQuery('.formSpan').parent();
                            // get the contents of the span
                            var formSpanChildren = jQuery('.formSpan').children();
                            // remove the children
                            formSpanChildren.detach();
                            // completely remove the span. It duplicates for some reason if we try to fill the parent any other way
                            jQuery('.formSpan').remove();
                            // add the proper parent container
                            formSpanParent.append('<div class="lpContentsItem formSpan"></div>');
                            // put the children back
                            jQuery('.formSpan').append(formSpanChildren);
                        }
                    };
                    // pages need a language tag at the html level, systems are in place to manually set it, but many pages don't have it set for some reason
                    /**
                     * Adds a language attribute to the HTML tag based on form LCID and removes it from the body if it is set there. 
                     * 
                     * @function Accessibility.setLanguageTag
                     */
                    function setLanguageTag() {
                        var languageTag = Parameters.getLCID();
                        if (languageTag !== null && typeof languageTag !== "undefined") {
                            if (jQuery('body').attr('lang')) jQuery('body').removeAttr('lang');
                            jQuery('html').attr('lang', languageTag);
                        }
                    }
                    // change focus state for Azure forms, since the background color of the form is the same as the default input focus state color
                    /**
                     * Microsoft focus state is blue, but isn't visible on Azure form inputs, since the form background color is also blue. 
                     * We can set this as a program token, but in the interest of deploying everywhere at once and avoiding page drafts, it has been deployed client side.
                     * 
                     * @function Accessibility.azureOutlineColor
                     */
                    function azureOutlineColor() {
                        if (brand === "AZURE") {
                            var azureStyles = document.createElement('style');
                            azureStyles.type = 'text/css';
                            azureStyles.innerHTML = '.form-wrapper .form-body form input:focus, .form-wrapper .form-body form select:focus, .form-wrapper .form-body form textarea:focus {outline: 2px solid black !important;}';
                            document.body.appendChild(azureStyles);
                        }
                    }
                    return {
                        buildAria: buildAria,
                        changeFormParent: changeFormParent,
                        setLanguageTag: setLanguageTag,
                        azureOutlineColor: azureOutlineColor
                    };
                })();
                var brand = jQuery("input[name='systemFormsLanguageLocaleProduct']").val();
                var systemFormsVal = brand.substr(0,5);
                brand = typeof brand !== "undefined" && typeof systemFormsVal !== "undefined" ? brand.trim().replace(systemFormsVal + '-', '').toUpperCase() : brand;
                
                var legalText = {};
                legalText.textMicrosoft = jQuery('.content-text');
                legalText.optIn = jQuery('label[for=SystemContactPreferenceMirrorOptIn]').length > 0 ? jQuery('label[for=SystemContactPreferenceMirrorOptIn]').closest('.mktoFieldWrap').children('label') : jQuery('label[for=systemContactPreferenceMirrorOptIn]').closest('.mktoFieldWrap').children('label');
                legalText.optOut = jQuery('label[for=SystemContactPreferenceMirrorOptOut]').length > 0 ? jQuery('label[for=SystemContactPreferenceMirrorOptOut]').closest('.mktoFieldWrap').children('label') : jQuery('label[for=systemContactPreferenceMirrorOptout]').closest('.mktoFieldWrap').children('label');
                // add required classes for easy targeting and hide these on page load
                legalText.textMicrosoft.closest('.mktoFormCol').addClass('textMicrosoft text-microsoft').hide();
                legalText.optIn.closest('.mktoFormRow').addClass('optIn opt-in').hide();
                legalText.optOut.closest('.mktoFormRow').addClass('optOut opt-out').hide();
                // make sure we have an actual translation to do stuff with
                if (formLocalizationStrings[lcid]) {
                    // labels, placeholders, and select options to be translated
                    var textContainers = {};
                    textContainers.form = {};
                    // separate some variables between placeholder and label forms
                    if (jQuery('label[for=FirstName]').css('display') == 'none') { // there are no visible labels
                        noLabels = true;
                        textContainers.form.firstName = jQuery('#FirstName');
                        textContainers.form.lastName = jQuery('#LastName');
                        textContainers.form.email = jQuery('#Email');
                        textContainers.form.phone = jQuery('#Phone');
                        textContainers.form.formComments = jQuery('textarea[name="comments"]');
                        // translate placeholder text for EDU brand
                        if (brand === 'EDU') {
                            textContainers.form.schoolName = jQuery('#Company');
                        } else {
                            textContainers.form.companyName = jQuery('#Company');
                        }
                    }
                    else { // labels are being used instead of placeholders
                        noLabels = false;
                        //Remove any placeholder text
                        jQuery('#FirstName, #LastName, #Email, #Company, #Phone, textarea[name="comments"]').attr("placeholder", "");
                        textContainers.form.firstName = jQuery('label[for=FirstName]');
                        textContainers.form.lastName = jQuery('label[for=LastName]');
                        textContainers.form.email = jQuery('label[for=Email]');
                        textContainers.form.phone = jQuery('label[for=Phone]');
                        // translate labels for EDU brand
                        if (brand === 'EDU') {
                            textContainers.form.schoolName = jQuery('label[for=Company]');
                        } else {
                            textContainers.form.companyName = jQuery('label[for=Company]');
                        }
                        // These are select boxes, and do not need to be translated for placeholders
                        textContainers.form.jobRole = jQuery('label[for=Title]');
                        textContainers.form.country = jQuery('label[for=Country]');
                        // EDU brand number of student translation
                        if (brand === 'EDU') {
                            textContainers.form.studentNumber = jQuery('label[for=employeeRange]');
                        } else {
                            textContainers.form.companySize = jQuery('label[for=employeeRange]');
                        }
                        // End select boxes
                    }
                    // EDU brand number of student translation
                    if (brand === 'EDU') {
                        textContainers.form.studentNumberSelect = jQuery('select[name="employeeRange"] option:first-child');
                    } else {
                        textContainers.form.companySizeSelect = jQuery('select[name="employeeRange"] option:first-child');
                    }
                    textContainers.form.languageInput = jQuery('input[name="ce_language"]');
                    // Now add checkbox labels to form object
                    textContainers.form.checkboxLabelOptout = jQuery('.optOut .mktoCheckboxList  label');
                    textContainers.form.checkboxLabelOptin = jQuery('.optIn .mktoCheckboxList label');

                    // get country options
                    Select.getSelectOptions("formSelectCountry", "form select[name='Country'] option");
                    // get POI
                    Select.getSelectOptions("contactPOI", "form select[name='ce_crm2marketo'] option");
                    // get job role options
                    Select.getSelectOptions("formSelectJobRole", "form select[name='Title'] option");

                    // get industry options
                    Select.getSelectOptions("DTIndustry", "form select[name='ce_industryname'] option");

                    // get Product intrest options
                    Select.getSelectOptions("Dymotion", "form select[name='ce_topicofinterest'] option");

                
                    /* end definitions and functions
                    start scripting and calling of functions*/

                    // translate form button
                    var buttonTranslation = jQuery('#buttonTranslation');
                    if ( jQuery('#buttonTranslation').text().trim() === "" 
                        || buttonTranslation.text().trim() === " "
                        || buttonTranslation.text().trim() === null
                        || buttonTranslation.text().trim() === "Get the free eBook" // make sure the button text hasn't already been translated based on the legacy method of using 3 approved strings in the JSON
                        || buttonTranslation.text().trim() === "Start your free tour"
                        || buttonTranslation.text().trim() === "Submit Form"
                        || buttonTranslation.text().trim() === "Get the free report" ) {
                        var submitButton = jQuery('button.mktoButton');
                        textContainers.formSubmit = {};
                        textContainers.formSubmit[submitButton.text().trim()] = submitButton;
                    }
                    else if (jQuery('#buttonTranslation').length > 0) {
                        if (jQuery('#buttonTranslation').text().trim() !== "") jQuery('button.mktoButton').html( buttonTranslation.text().trim() );
                    }
                    Select.updateFirstOption(textContainers, formLocalizationStrings);
                    swapLanguages(textContainers, formLocalizationStrings);
                    // only replace countries on pages that aren't office contact me pages
                    if ( !( window.location.href.match(/o365-contactus/i) ||
                        window.location.href.match(/o365-contactme/i) ||
                        window.location.href.match(/spe-contactus/i) ||
                        window.location.href.match(/m365-contactus/i) ) ) {
                        Select.replaceCountries();
                    }
                    Select.localeAlphabetSort("form select[name='Country'] option");
                    Select.changeJobRoles();
                    Select.changePOI();
                    if(product_name !== '' && (jQuery('#mktoForm_14284').length === 1 || jQuery('#mktoForm_14287').length === 1)){
                        Select.changeProductSelection(product_name);
                       }
                    // set hidden language input used for tracking
                    textContainers.form.languageInput.val(formLocalizationStrings[lcid].form.languageInput);
                    // translate error messages
                    jQuery('input, select').on('blur click contextmenu focus mousedown mouseup', Validation.errorMessageTranslation);
                    jQuery('button.mktoButton').on('click', Validation.errorMessageTranslation);
                      // toggle submission state of form based on email and phone validation
                      if ( window.location.href.match(/o365-contactus/i) ||
                      window.location.href.match(/o365-contactme/i) ||
                      window.location.href.match(/spe-contactus/i) ||
                      window.location.href.match(/m365-contactus/i) /*||
                      window.location.href.match(/-Contact-/i) ||
                      window.location.href.match(/-ContactMe-/i) */) {  
                    Validation.invalidStyles();
                    Validation.formDisable();
                    Validation.validateEmail();
                    Validation.validatePhone();
                    jQuery('#Email').on('blur', Validation.validateEmail);
                    // check when country and phone are changed to see if enough values are present to validate phone number
                    jQuery('#Country, #Phone').on('blur', function () {
                        Validation.validatePhone(countrySelection);
                    });
                }
                     //Clear cookie on thank you page
                     if((jQuery('#mktoForm_15647').length > 0) || (jQuery('#mktoForm_15982').length > 0) || (jQuery('#mktoForm_15316').length > 0) || (jQuery('#mktoForm_15524').length > 0) ) {
                        clearListCookies();
                        } 
                }// end all translations - everything below is for all pages, including legacy static
                jQuery('#ce_industryname').on('change',function(){
        
                    Select.getSelectOptions("DTJobrole", "form select[name='Title'] option");
                    textContainers.form.phone = jQuery('#Phone');

                    if(jQuery('#mktoForm_15745, #mktoForm_15776').length > 0){
                        (jQuery('#Title option:first').text() === 'Job role... *') ? jQuery('#Title option:first').remove():true;
                        if(lcid !== "EN-US"){
                            jQuery('#Title').prepend('<option selected value>'+formLocalizationStrings[lcid]['DTJobrole']['Job role... *']+'</option>');
                        }else{
                            jQuery('#Title').prepend('<option selected value>Job role... *</option>');
                        }
                    }
                    swapLanguages(textContainers, formLocalizationStrings);
                    }); 

                // hide jobRoleSelector div
                if (jQuery('#jobRoleSelector').length > 0) {
                    jQuery('#jobRoleSelector').parents('.mktoFormRow').hide();
                }
                if (jQuery('#poiDiv').length > 0) jQuery('#poiDiv').parents('.mktoFormRow').hide();
                // remove legal notices, prepend them just above the button
                // solution to progressive profiling not allowing items below progressive field
                var legalRows = {};
                var formButtonRow = jQuery('.mktoButtonRow');
                if (jQuery('.optOut').length) {
                    legalRows.optOutRow = jQuery('.optOut');
                    legalRows.optInRow = jQuery('.optIn');
                    legalRows.noticeTextRow = jQuery('.textMicrosoft').parent('.mktoFormRow');

                    for (var row in legalRows) {
                        if (legalRows.hasOwnProperty(row)) {
                            legalRows[row].detach();
                            formButtonRow.before(legalRows[row]);
                        }
                    }
                }
                // put partner checkbox last, and hide it - OCP
                if (partnerPreferenceForm) {
                    // separate partner pref notice and opt-in
                    if (!partnerCombinedStatement) { // input is a checkbox
                        var partnerCheckBox = jQuery('input[name="ce_partnerpromotionalemailpreference"]');
                        var partnerCheckboxRow = jQuery('label[for="ce_partnerpromotionalemailpreference"]').closest('.mktoFormRow');
                        if (language !== "EN") { // hide the second input if not English
                            partnerCheckboxRow.hide();
                        }else {
                            partnerCheckboxRow.detach();
                            formButtonRow.before(partnerCheckboxRow);
                            partnerCheckboxRow.hide();
                            // change a couple of hidden inputs based on checked state of partnerCheckbox
                            partnerCheckBox.on('change', function() {
                                if (partnerCheckBox.prop('checked')) {
                                    jQuery('input[name="partnerContactPhonePreference"]').val('OK to Contact');
                                    jQuery('input[name="microsoftOnBehalfofPartnerEmailPreference"]').val('yes');
                                }
                                else {
                                    jQuery('input[name="partnerContactPhonePreference"], input[name="microsoftOnBehalfofPartnerEmailPreference"]').val('');
                                }
                            });
                        }
                    }
                    // combined notice and opt-in
                    else if (partnerCombinedStatement) { // input is hidden
                        // change a couple of hidden inputs based on checked state of opt-in
                        jQuery('input[name="SystemContactPreferenceMirrorOptIn"]').on('change', function() {
                            if (jQuery('input[name="SystemContactPreferenceMirrorOptIn"]').prop('checked')) {
                                jQuery('input[name="ce_partnerpromotionalemailpreference"], input[name="partnerContactPhonePreference"]').val('OK to Contact');
                                jQuery('input[name="microsoftOnBehalfofPartnerEmailPreference"]').val('yes');
                            }
                            else {
                                jQuery('input[name="ce_partnerpromotionalemailpreference"], input[name="partnerContactPhonePreference"], input[name="microsoftOnBehalfofPartnerEmailPreference"]').val('');
                            }
                        });
                    }
                }
                // add multi-check if needed
                Checkboxes.checkboxSubmission();
                Checkboxes.checkForBoxes();
                // set the systemformslanguagelocalproduct to have a brand even for dynamic pages
                Parameters.setSystemFormsVal();
                // if the redirect hidden div is present on the form it's row shows. Hide it.
                if (jQuery('#formRedirect').length > 0) jQuery('#formRedirect').parents('.mktoFormRow').hide();
                // set aria-label values to overcome marketo forms accessibility shortcomings
                Accessibility.buildAria();
                // forms live in spans for some weird reason
                Accessibility.changeFormParent();
                // set the html lang tag and remove it from the body if present
                Accessibility.setLanguageTag();
                // change input focus state color on Azure forms
                Accessibility.azureOutlineColor();
                // attach demandbase functionality to all forms. Typeahead is only en-us as determined within the function
                Parameters.addDemandBase();
                Parameters.demandbaseFormsCallback(200, 10);
                // all on change events
                jQuery('#Country').on('change', function() {
                    countrySelection = jQuery('#Country option:selected').val().toUpperCase();
                    for (var key in legalReqs){
                        if (legalReqs.hasOwnProperty(key)) {
                            var displayValue;
                            if (partnerCombinedStatement && language === "EN") {
                                displayValue = countrySelection !== "" ? 'block' : 'none';
                                legalText.optIn.closest('.'+key).css('display', displayValue);   //Get textContainer relevant to the current legalReqs key, find parent we want to show/hide, and apply CSS rule
                                legalText.optIn.closest('.'+key).find('label, p').css('display', displayValue);
                            } else {
                                displayValue = legalReqs[key].indexOf(countrySelection) > -1 ? 'block' : 'none'; //If countrySelection is in current array, set displayValue to 'block', else 'none'
                                legalText[key].closest('.'+key).css('display', displayValue);   //Get textContainer relevant to the current legalReqs key, find parent we want to show/hide, and apply CSS rule
                                legalText[key].closest('.'+key).find('label, p').css('display', displayValue);
                                if(key == "optIn" || key == "optOut") legalText[key].closest('.'+key).find('.mktoCheckboxList').css('display', displayValue);
                            }
                        }
                    }
                     //event on product selection 
                     jQuery('#mktoForm_15622 #ce_crm2marketo').on('change', function() {
                        changeNotice();
                    });
                    // if parthercheckbox exists and one of the 3 other notices is displayed, display partnercheckbox
                    if(typeof partnerCheckboxRow !== "undefined" && 
                        language === "EN" &&
                        ( legalText.optIn.css('display') === 'block' || 
                            legalText.optOut.css('display') === 'block' || 
                            legalText.textMicrosoft.css('display') === 'block' ) ) {
                        partnerCheckboxRow.css('display', 'block');
                    }
                    // else if, partnercheckbox exists, but none of the other 3 notices are displayed, hide it
                    else if (typeof partnerCheckboxRow !== "undefined") {
                        partnerCheckboxRow.css('display', 'none');
                    }
                    changeNotice(countrySelection);
                    russiaSelected(countrySelection);
                
                    // don't run on PPE
                    if (!(window.location.href.match(/http:\/\/na-sj12\.marketo\.com/g))) russianSubmit(form, countrySelection);
                });
                Parameters.setMCID();

                //on Change of product selection from dropdown change country dropdown and job dropdown respectively
                jQuery('#mktoForm_15316 input, #mktoForm_15316  select, #mktoForm_15317 input, #mktoForm_15317  select').on('focus click change',function(){
                    // Onchange of country & jobtitle without product select
                    var erorrtext = "Please select the product you're most interested in";
                    if(((jQuery(this).attr('id')==='Country') || (jQuery(this).attr('id')==='Title')) && (jQuery('#ce_crm2marketo').val()==='')){
                        jQuery('#Country').css('background',"#a5a5a5").attr('disabled','disabled');
                        jQuery('#Title').css('background',"#a5a5a5").attr('disabled','disabled');
                        jQuery('#ce_crm2marketo').parents('.mktoFieldWrap').css('margin-bottom','0px');
                        if((!jQuery('#ce_crm2marketo').next('div').hasClass('mktoError')) && ((jQuery('#ce_crm2marketo').next('div').hasClass('mktoClear')))){
                            jQuery('#ce_crm2marketo').next('div.mktoClear').replaceWith('<div class="mktoError" style="right: 73px; bottom: -52px;"><div class="mktoErrorArrowWrap"><div class="mktoErrorArrow"></div></div><div class="mktoErrorMsg" aria-live="polite">'+formLocalizationStrings[lcid].errorMessage[erorrtext]+'</div></div>');
                            }else if(jQuery('#ce_crm2marketo').next('div').length < 1){
                                jQuery('#ce_crm2marketo').append('<div class="mktoError" style="right: 73px; bottom: -52px;"><div class="mktoErrorArrowWrap"><div class="mktoErrorArrow"></div></div><div class="mktoErrorMsg" aria-live="polite">'+formLocalizationStrings[lcid].errorMessage[erorrtext]+'</div></div>');
                            }
                        }
                        //on change input or select other then country , job role & product
                        else if((jQuery(this).attr('id')!=='ce_crm2marketo') && ((jQuery(this).attr('id') !=='Country') || (jQuery(this).attr('id') !=='Title'))){
                            if(jQuery('#ce_crm2marketo').next('div').hasClass('mktoError')){
                                if(!(jQuery('#ce_crm2marketo').next('div').hasClass('mktoClear'))){
                                    jQuery('#ce_crm2marketo').next('div').replaceWith('<div class="mktoClear"></div>');
                                }
                                else{
                                    if(!(jQuery('#ce_crm2marketo').next('div').length < 1)){
                                        jQuery('#ce_crm2marketo').next('div').replaceWith('<div class="mktoClear"></div>');
                                    }
                                }
                                jQuery('#Country').css('background',"#FFFFFF").removeAttr('disabled');
                                jQuery('#Title').css('background',"#FFFFFF").removeAttr('disabled');
                            }
                    
                        }
                //on product change 
                    else if(jQuery(this).attr('id')==='ce_crm2marketo'){
                        if(jQuery(this).val()!==''){
                            prodselected = jQuery('#ce_crm2marketo option:selected').text();
                            jQuery('#Country').css('background',"#FFFFFF").removeAttr('disabled');
                            jQuery('#Title').css('background',"#FFFFFF").removeAttr('disabled');
                            if(!(jQuery('#ce_crm2marketo').next('div').hasClass('mktoClear'))){
                                jQuery('#ce_crm2marketo').next('div').replaceWith('<div class="mktoClear"></div>');
                                jQuery('.mktoError').remove();
                            }
                                jQuery('#Title option').remove();
                                Select.changeProductSelection(prodselected);
                        }
                        else{
                            jQuery('#Country').css('background',"#a5a5a5").attr('disabled','disabled');
                            jQuery('#Title').css('background',"#a5a5a5").attr('disabled','disabled');
                            jQuery('#ce_crm2marketo').parents('.mktoFieldWrap').css('margin-bottom','0px');
                            if(!jQuery('#ce_crm2marketo').next('div').hasClass('mktoError')){
                                if(jQuery('#ce_crm2marketo').next('div').length > 0){
                                jQuery('#ce_crm2marketo').next('div.mktoClear').replaceWith('<div class="mktoError" style="right: 73px; bottom: -52px;"><div class="mktoErrorArrowWrap"><div class="mktoErrorArrow"></div></div><div class="mktoErrorMsg" aria-live="polite">'+formLocalizationStrings[lcid].errorMessage[erorrtext]+'</div></div>');
                                }else if(jQuery('#ce_crm2marketo').next('div').length < 1){
                                    jQuery('#ce_crm2marketo').append('<div class="mktoError" style="right: 73px; bottom: -52px;"><div class="mktoErrorArrowWrap"><div class="mktoErrorArrow"></div></div><div class="mktoErrorMsg" aria-live="polite">'+formLocalizationStrings[lcid].errorMessage[erorrtext]+'</div></div>');
                                }
                            }
                        }
                    }        
                });
    

             // Update universal forms with partner consent opt-in language
             jQuery('#mktoForm_15278 #Country, #mktoForm_15032 #Country, #mktoForm_15365 #Country, #mktoForm_15170 #Country, #mktoForm_15524 #Country, #mktoForm_15105 #Country, #mktoForm_14288 #Country,  #mktoForm_14284 #Country,  #mktoForm_10595 #Country,  #mktoForm_14922 #Country').on("change", function() {
                var goblebrand = Parameters.brandSelector();
                var newNotice='',selectedBrand='';
                newNotice = jQuery('label[for="ce_partnerpromotionalemailpreference"]').text();
                jQuery('input[name="partnerContactPhonePreference"]').val('');
                var selectedCountry = jQuery("#Country option:selected").val();
                if (selectedCountry === 'United States') {    
                    jQuery('input[name="ce_partnerpromotionalemailpreference"]').parent().css('display','block');
                     jQuery('input[name="ce_partnerpromotionalemailpreference"]').prop('checked',false);   
                  var EleSwap=jQuery('label[for="ce_partnerpromotionalemailpreference"]').parents('.mktoFormRow');
                        jQuery('p.content-text').parents('.mktoFormRow').insertBefore(EleSwap)
                        
                        jQuery('input[name="ce_partnerpromotionalemailpreference"]').on('change', function() {
                            if(jQuery('#mktoForm_15278, #mktoForm_15032, #mktoForm_15365, #mktoForm_15170, #mktoForm_15524, #mktoForm_15105, #mktoForm_14288, #mktoForm_14284, #mktoForm_10595, #mktoForm_14922').length > 0){
                            if (jQuery(this).prop('checked')) {
                                jQuery('input[name="partnerContactPhonePreference"]').val('OK to Contact');
                                jQuery('input[name="ce_partnerpromotionalemailpreference"]').val('OK to Contact');
                              
                                }
                                else {
                                jQuery('input[name="partnerContactPhonePreference"]').val(''); 
                                jQuery('input[name="ce_partnerpromotionalemailpreference"]').val('');
                             
                                    }  
                                }  
                        });
                        
                    }else if (selectedCountry === 'United Kingdom'){
                        jQuery('input[name="ce_partnerpromotionalemailpreference"]').parent('.mktoLogicalField').css({"position": "absolute", "visibility": "hidden"});
                        jQuery('label[for="SystemContactPreferenceMirrorOptOut"]').hide();
                        jQuery('label[for="ce_partnerpromotionalemailpreference"]').parent('.mktoFieldWrap').css('margin-bottom','1px');
                        jQuery('label[for="ce_partnerpromotionalemailpreference"]').parents('.mktoFieldDescriptor').css('height','1px');
                            if (jQuery('input[name="SystemContactPreferenceMirrorOptOut"]').prop('checked')) {
                                jQuery('input[name="partnerContactPhonePreference"]').val('OK to Contact');
                                jQuery('input[name="ce_partnerpromotionalemailpreference"]').val('OK to Contact');
                                }
                                else {
                                jQuery('input[name="partnerContactPhonePreference"]').val(''); 
                                jQuery('input[name="ce_partnerpromotionalemailpreference"]').val('');
                                }  

                    }else if(selectedCountry === 'Australia'){
                        jQuery('input[name="ce_partnerpromotionalemailpreference"]').parent('.mktoLogicalField').css({"position": "absolute", "visibility": "hidden"});
                        jQuery('label[for="SystemContactPreferenceMirrorOptIn"]').hide();
                        jQuery('label[for="ce_partnerpromotionalemailpreference"]').parent('.mktoFieldWrap').css('margin-bottom','1px');
                        jQuery('label[for="ce_partnerpromotionalemailpreference"]').parents('.mktoFieldDescriptor').css('height','1px');
                            if (jQuery('input[name="SystemContactPreferenceMirrorOptIn"]').prop('checked')) {
                                jQuery('input[name="partnerContactPhonePreference"]').val('OK to Contact');
                                jQuery('input[name="ce_partnerpromotionalemailpreference"]').val('OK to Contact');
                                }
                                else {
                                jQuery('input[name="partnerContactPhonePreference"]').val(''); 
                                jQuery('input[name="ce_partnerpromotionalemailpreference"]').val('');
                                }
                    }
  
                        // Translate the brand if one is available, otherwise use default object text
                        if(lcid in brandingText) {
                            selectedBrand = (goblebrand in brandingText[lcid]) ? brandingText[lcid][goblebrand] : brandingText.default[goblebrand];
                            jQuery('label[for="ce_partnerpromotionalemailpreference"]').text(newNotice.replace('DYMPRODUCT', selectedBrand));
                            (jQuery('label[for="ce_partnerpromotionalemailpreference"]').text().indexOf('*') === 0)?jQuery('label[for="ce_partnerpromotionalemailpreference"]').html(jQuery('label[for="ce_partnerpromotionalemailpreference"]').text().replace('Privacy Statement', '<a target="_blank" href="https://privacy.microsoft.com/en-US/privacystatement">Privacy Statement</a>').slice(1)):jQuery('label[for="ce_partnerpromotionalemailpreference"]').html(jQuery('label[for="ce_partnerpromotionalemailpreference"]').text().replace('Privacy Statement', '<a target="_blank" href="https://privacy.microsoft.com/en-US/privacystatement">Privacy Statement</a>'));
                             
                            
                        }
                        // default brand text
                        else {
                            selectedBrand = brandingText.default[goblebrand];
                            jQuery('label[for="ce_partnerpromotionalemailpreference"]').text(newNotice.replace('DYMPRODUCT', selectedBrand));
                            (jQuery('label[for="ce_partnerpromotionalemailpreference"]').text().indexOf('*')=== 0)?jQuery('label[for="ce_partnerpromotionalemailpreference"]').html(jQuery('label[for="ce_partnerpromotionalemailpreference"]').text().replace('Privacy Statement', '<a target="_blank" href="https://privacy.microsoft.com/en-US/privacystatement">Privacy Statement</a>').slice(1)):jQuery('label[for="ce_partnerpromotionalemailpreference"]').html(jQuery('label[for="ce_partnerpromotionalemailpreference"]').text().replace('Privacy Statement', '<a target="_blank" href="https://privacy.microsoft.com/en-US/privacystatement">Privacy Statement</a>'));
                             
                        }
                });
// Track and pass the value if checkbox is selected under US for 
        jQuery('#mktoForm_15278 input[name="ce_partnerpromotionalemailpreference"], #mktoForm_15032 input[name="ce_partnerpromotionalemailpreference"], #mktoForm_15170 input[name="ce_partnerpromotionalemailpreference"], #mktoForm_15365 input[name="ce_partnerpromotionalemailpreference"], #mktoForm_15524 input[name="ce_partnerpromotionalemailpreference"], #mktoForm_15105 input[name="ce_partnerpromotionalemailpreference"], #mktoForm_14288 input[name="ce_partnerpromotionalemailpreference"], #mktoForm_14284 input[name="ce_partnerpromotionalemailpreference"], #mktoForm_10595 input[name="ce_partnerpromotionalemailpreference"], #mktoForm_14922 input[name="ce_partnerpromotionalemailpreference"]').on('change', function() {
            var selectedCountry = jQuery("#Country option:selected").val();
            if (selectedCountry === 'United States'){
                if (jQuery('input[name="ce_partnerpromotionalemailpreference"]').prop('checked')) {
                    jQuery('input[name="partnerContactPhonePreference"]').val('OK to Contact');
                    jQuery('input[name="ce_partnerpromotionalemailpreference"]').val('OK to Contact');
                
                    }
                    else {
                    jQuery('input[name="partnerContactPhonePreference"]').val(''); 
                    jQuery('input[name="ce_partnerpromotionalemailpreference"]').val('');
                    }  
            }
            });           

// Track and pass the value if checkbox is selected under UK for 
        jQuery('#mktoForm_15278 input[name="SystemContactPreferenceMirrorOptOut"], #mktoForm_15032 input[name="SystemContactPreferenceMirrorOptOut"], #mktoForm_15170 input[name="SystemContactPreferenceMirrorOptOut"], #mktoForm_15365 input[name="SystemContactPreferenceMirrorOptOut"], #mktoForm_15524 input[name="SystemContactPreferenceMirrorOptOut"], #mktoForm_15105 input[name="SystemContactPreferenceMirrorOptOut"], #mktoForm_14288 input[name="SystemContactPreferenceMirrorOptOut"], #mktoForm_14284 input[name="SystemContactPreferenceMirrorOptOut"], #mktoForm_10595 input[name="SystemContactPreferenceMirrorOptOut"], #mktoForm_14922 input[name="SystemContactPreferenceMirrorOptOut"]').on('change', function() {
            var selectedCountry = jQuery("#Country option:selected").val();
            if (selectedCountry === 'United Kingdom'){
                if (jQuery('input[name="SystemContactPreferenceMirrorOptOut"]').prop('checked')) {
                    jQuery('input[name="partnerContactPhonePreference"]').val('OK to Contact');
                    jQuery('input[name="ce_partnerpromotionalemailpreference"]').val('OK to Contact');
                
                    }
                    else {
                    jQuery('input[name="partnerContactPhonePreference"]').val(''); 
                    jQuery('input[name="ce_partnerpromotionalemailpreference"]').val('');
                    }  
            }
            });
// Track and pass the value if checkbox is selected under AUS 
            jQuery('#mktoForm_15278 input[name="SystemContactPreferenceMirrorOptIn"], #mktoForm_15032 input[name="SystemContactPreferenceMirrorOptIn"], #mktoForm_15170 input[name="SystemContactPreferenceMirrorOptIn"], #mktoForm_15365 input[name="SystemContactPreferenceMirrorOptIn"], #mktoForm_15524 input[name="SystemContactPreferenceMirrorOptIn"], #mktoForm_15105 input[name="SystemContactPreferenceMirrorOptIn"], #mktoForm_14288 input[name="SystemContactPreferenceMirrorOptIn"], #mktoForm_14284 input[name="SystemContactPreferenceMirrorOptIn"], #mktoForm_10595 input[name="SystemContactPreferenceMirrorOptIn"], #mktoForm_14922 input[name="SystemContactPreferenceMirrorOptIn"]').on('change', function() {
                var selectedCountry = jQuery("#Country option:selected").val();
                if(selectedCountry === 'Australia'){
                    if (jQuery('input[name="SystemContactPreferenceMirrorOptIn"]').prop('checked')) {
                        jQuery('input[name="partnerContactPhonePreference"]').val('OK to Contact');
                        jQuery('input[name="ce_partnerpromotionalemailpreference"]').val('OK to Contact');
                    
                        }
                        else {
                        jQuery('input[name="partnerContactPhonePreference"]').val(''); 
                        jQuery('input[name="ce_partnerpromotionalemailpreference"]').val('');
                        }  
                }    
                });

                // if it's a now take flight window
                if (jQuery('#flight').length > 0) {
                    if (jQuery('#flight').text().trim() === "true") {
                        // listen for nowTakeFlight variables
                        window.addEventListener('message', function (event) {
                            if ((event.origin === "https://nowtakeflight.com" || event.origin === "https://www.nowtakeflight.com") && typeof event.data == "string") {
                                flightURL = Parameters.captureFlightData(event.data);
                            }
                        });
                    }
                }
                // Use user defined URL if needed 
                form.onSuccess(function() {
                    if (redirectURL !== null) {
                        // special rules for now take flight, check if it's their page
                        if (jQuery('#flight').length > 0) {
                            // iframe template may be used by non-take flight stuff make sure it's flight
                            if (jQuery('#flight').text().trim() === "true") {
                                // redefine the url with the url + params sent by parent page + form values
                                redirectURL = flightURL + Parameters.nowTakeFlight();
                                // redirect top window
                                location.href = redirectURL;
                                return false;
                            }
                            // normal redirect
                            else {
                                location.href = redirectURL;
                                return false;
                            }
                        }
                        else {
                            location.href = redirectURL;
                            return false;
                        }
                    }
                });
            });
             // trick to remove the "brand" text from mktoForm_13633 form
            jQuery("#mktoForm_13633 #Country").click(function() {
                if (jQuery(this).val() == "United States") {
                    var text = jQuery('.content-text').html();
                    text = text.replace(/Brand/g, "");
                    jQuery('.content-text').html(text);
                }
            });

            //Fix for SQL Server form download
            jQuery("#mktoForm_14511 #mktoCheckbox_226671_0").click(function() {

            if(jQuery(this).prop('checked'))
	        {
	            jQuery(".mktoButton").removeAttr("disabled"); 
	        }else{
	            jQuery(".mktoButton").attr("disabled", "disabled");
	        }
            });  

            // New request for US,UK and Australia task 28686

         jQuery('#mktoForm_15482 #Country').on("change click select load focus", function() {
                //jQuery('#Country').change();
                var selectedCountry = jQuery("#Country option:selected").val();
                if (selectedCountry == 'Australia') {
                    jQuery('div.mktoFormRow.optIn.opt-in').hide();
                    jQuery('label[for="partnerContactPhonePreference"]').show();
                    // jQuery('#mktoForm_15482 > div.mktoFormRow.optIn.opt-in').css("display", "none");
                    // jQuery('label[for="partnerContactPhonePreference"]').css("display", "block");
                }
                if (selectedCountry == 'United Kingdom') {
                    jQuery('div.mktoFormRow.optOut.opt-out').hide();
                    jQuery('label[for="partnerContactPhonePreference"]').show();
                    // jQuery('#mktoForm_15482 > div.mktoFormRow.optOut.opt-out').css("display", "none");
                    // jQuery('label[for="partnerContactPhonePreference"]').css("display", "block");
                }
                if (selectedCountry == 'United States') {
                    jQuery('#mktoForm_15482 > div:nth-child(21)').insertBefore('#mktoForm_15482 > div:nth-child(10)');
                }
            });
            jQuery('#mktoForm_15393 #Country').on("change click select load focus", function() {
                //jQuery('#Country').change();
                var selectedCountry = jQuery("#Country option:selected").val();
                if (selectedCountry === 'United States') {
              
                    jQuery('p.content-text').insertBefore('label[for="ce_partnerpromotionalemailpreference"]');
                
                }

            });
            if(jQuery('#mktoForm_15745').length > 0){
                jQuery('#Country, #ce_industryname').on('change', function() {
                      industrySelection = jQuery('#ce_industryname option:selected').val();
                      countrySelection = jQuery('#Country option:selected').val();
                        if(industrySelection === "Government" && countrySelection === "United States")
                        {
                            jQuery('#web2Marketo').parents(".mktoFormRow").show();
                        }else {
                                jQuery('#web2Marketo').parents(".mktoFormRow").hide();
                            }   
                    });
                }


                 // set the form limit to 5000 charcter across all marketo forms
                 jQuery('#formComments,#comments').attr('maxlength','5000'); 

           
                // Clear the cookies after 15 sec for form 15647
                function clearListCookies()
                {   
                    var cookies = document.cookie. split(" ");
                    for (var i=0;i<cookies.length;i++){
                        var spcook=cookies[i].split("=");
                        deleteCookie(spcook[0]);
                    }
                    function deleteCookie(cookiename){
                        var d=new Date();
                        d.setDate(d.getDate()-1);
                        var expires=";expires="+d.toUTCString();
                        var name=cookiename;
                        var value="";
                        document.cookie=name+"="+value+expires+";domain=.microsoft.com;path=/";
                    }
                }
 

               

 

        });
    }
});
