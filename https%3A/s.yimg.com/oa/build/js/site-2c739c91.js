(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

/**
 * Checks if the element contains the specified class name.
 */
function containsClass(element, className) {
    if (!element || typeof className !== 'string') {
        throw TypeError('containsClass: Invalid argument type');
    }
    return element.className.trim().split(/\s+/gi).indexOf(className) > -1 ;
}

function updateQueryStringParameter(uri, key, value) {
    var re = new RegExp('([?&])' + key + '=.*?(&|$)', 'i');
    var separator = uri.indexOf('?') !== -1 ? '&' : '?';
    if (uri.match(re)) {
        return uri.replace(re, '$1' + key + '=' + value + '$2');
    }
    else {
        return uri + separator + key + '=' + value;
    }
}

function onLanguageChange(event) {
    var newLang = event.target.value;
    window.location.href = updateQueryStringParameter(window.location.href, 'lang', newLang);
}

function disableFormButtons() {
    var agreeButton = document.querySelector('.agree'),
        disagreeButton = document.querySelector('.disagree');

    if (agreeButton) {
        agreeButton.disabled = true;
    }
    if (disagreeButton) {
        disagreeButton.disabled = true;
    }

}

function handleDoubleSubmit(event) {
    var formElement = event.currentTarget,
        altSubmitField = formElement.querySelectorAll('input[data-name="alt-submit"]')[0];

    /* This creates another submit input in the DOM and sets it's name and value
        to the button that was clicked
     */
    if (!altSubmitField) {
        altSubmitField = document.createElement('input');
        altSubmitField.setAttribute('type', 'hidden');
        altSubmitField.setAttribute('data-name', 'alt-submit');
        formElement.appendChild(altSubmitField);
    }

    if ((event.type === 'click' || event.type === 'touchstart') && event.target.type === 'submit') {
        altSubmitField.setAttribute('name', event.target.name);
        altSubmitField.setAttribute('value', event.target.value);
    }

    if (event.type === 'submit') {
        disableFormButtons();
    }

    return true;
}

function addClass(element, name) {
    if (!containsClass(element, name)) {
        if ('classList' in element) {
            element.classList.add(name);
        } else {
            var c = element.className;
            element.className = c ? [c, name].join(' ') : name;
        }
    }
}

function removeClass(element, name) {
    if (containsClass(element, name)) {
        if ('classList' in element) {
            element.classList.remove(name);
        } else {
            var c = element.className;
            element.className = c.replace(new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)', 'g'), '');
        }
    }
}

function setupEUMoreOptionsToggle(tapEventName) {
    var toggleButtons = document.querySelectorAll('.boxed-content input[type="checkbox"]');
    var isTouchStart = tapEventName === 'touchstart';

    if(!toggleButtons) {
        return;
    }

    Array.prototype.forEach.call(toggleButtons, function(toggleButton) {

        var toolTipElement = toggleButton.parentElement;
        var errorElement = toolTipElement.nextElementSibling;
        var changeCount = 0;

        if (isTouchStart) {
            document.body.addEventListener('touchstart', function() {
                removeClass(toolTipElement, 'touched-once');
            });
        }
        toggleButton.addEventListener('change', function() {

            if (isTouchStart && changeCount < 1) {
                this.checked = true;
                addClass(toolTipElement, 'checked-active');
                removeClass(errorElement, 'active');
                changeCount++;
                addClass(toolTipElement, 'touched-once');
                return;
            }

            removeClass(toolTipElement, 'touched-once');
            if (toggleButton.checked) {
                changeCount = 0;
                addClass(toolTipElement, 'checked-active');
                removeClass(errorElement, 'active');
            } else {
                removeClass(toolTipElement, 'checked-active');
                addClass(errorElement, 'active');
            }
        });
    });
}

function displayScrollToContinue(tapEvent) {

    var footer = document.querySelector('.footer');
    var scrollContainer = document.querySelector('.scroll-container');
    var readMoreTip = document.querySelector('.read-more-tip');
    var bodyElement = document.querySelector('body');
    var parkPage = document.querySelector('.park-page-body');
    var tppPage = document.querySelector('.tpp');
    var EUBtnGroup = document.querySelector('.eu .btn-group');
    var singlePage = document.querySelector('.eu-single-page');
    var manageOptionsPage = document.querySelector('.manage-options');

    if (parkPage) {
        return;
    }

    if (tppPage && EUBtnGroup) {
        addClass(EUBtnGroup, 'active');
        return;
    }

    var isBodyScrolling;

    var scrollBox;
    if (bodyElement.clientHeight > window.innerHeight + 100 && !(window.innerHeight + window.pageYOffset + 50 > document.body.scrollHeight)) {
        isBodyScrolling = true;
        scrollBox = bodyElement;
    }

    if (scrollBox) {
        if(scrollContainer && footer) {

            if (manageOptionsPage) {
                addClass(manageOptionsPage, 'active');
            } else if(!singlePage) {
                addClass(footer, 'active');
                addClass(scrollContainer, 'active');
            }

            readMoreTip.addEventListener(tapEvent, function() {
                isBodyScrolling ? window.scrollBy(0, window.innerHeight) : scrollBox.scrollTop += scrollBox.clientHeight;
                if (isBodyScrolling) {
                    if (window.innerHeight + window.pageYOffset + 50 > document.body.scrollHeight) {
                        removeClass(scrollContainer, 'active');
                        removeClass(footer, 'active');
                    }
                } else {
                    if (scrollBox.offsetHeight + scrollBox.scrollTop + 50 >= scrollBox.scrollHeight) {
                        removeClass(scrollContainer, 'active');
                        removeClass(footer, 'active');
                    }
                }
            });
        }
        if (EUBtnGroup) {
            EUBtnGroup.style.display = 'block';
        }
    } else if (EUBtnGroup && !singlePage) {
        if ((window.innerHeight - 50 > bodyElement.clientHeight)) {
            var paddingValue = (window.innerHeight - bodyElement.clientHeight - 50);
            paddingValue = paddingValue > 0 ? paddingValue : 0;
            if (window.innerWidth > 1000) {
                paddingValue = 0;
            }
            addClass(EUBtnGroup, 'active');
            EUBtnGroup.style.paddingTop = paddingValue + 'px';
        } else {
            EUBtnGroup.style.display = 'block';
        }
    }

}

function showCookieFail() {
    var cookieAlert = document.getElementById('cookieWarning');
    addClass(cookieAlert, 'active');
}

function checkCookie(){
    var cookieEnabled = navigator.cookieEnabled;
    if (!cookieEnabled){
        document.cookie = 'testcookie';
        cookieEnabled = document.cookie.indexOf('testcookie')!= -1;
    }
    return cookieEnabled || showCookieFail();
}

function detectIE(scrollContainer, footer) {

    var IEInterval;

    var IEScrollHandler = function() {
        if (scrollContainer && footer) {
            if (window.innerHeight + window.pageYOffset + 50 > document.body.scrollHeight) {
                removeClass(scrollContainer, 'active');
                removeClass(footer, 'active');
                window.clearInterval(IEInterval);
            }
        }
    };

    if (/Edge/.test(navigator.userAgent)) {
        addClass(document.body, 'edge');
    }

    if (document.documentMode) {
        addClass(document.body, 'ie');
        IEInterval = window.setInterval(IEScrollHandler, 200);
    }
}

function fireBeacon(element, tag) {
    var xhr = new XMLHttpRequest();
    var url = '/beacon';
    var consentForm = document.querySelector('.consent-form');
    var sessionId;
    var isSDK;
    var tos;
    var userType;
    var brandBid;
    var step;
    var country;

    if (consentForm) {
        sessionId = document.querySelector('[name="sessionId"]');
        isSDK = document.querySelector('[name="isSDK"]');
        tos = document.querySelector('[name="tosId"]');
        brandBid = document.querySelector('[name="brandBid"]');
        userType = document.querySelector('[name="userType"]');
        step = document.querySelector('[name="consentCollectionStep"]');
        country = document.querySelector('[name="country"]');
    }

    url = url + '?sessionId=' + (sessionId ? sessionId.value : '');
    url = url + '&sdk=' + (isSDK ? isSDK.value : '');
    url = url + '&tag=' + tag;
    url = url + '&tos=' + (tos ? tos.value : '');
    url = url + '&brandBid=' + (brandBid ? brandBid.value : '');
    url = url + '&userType=' + (userType ? userType.value : '');
    url = url + '&step=' + (step ? step.value : '');
    url = url + '&country=' + (country ? country.value : '');

    if (consentForm) {
        xhr.open('GET', url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(null);
    }

}

function setupBeacon() {
    var mailMoreOptionsToggle = document.getElementById('mail-checkbox');
    var purposeListToggle = document.querySelectorAll('input[id^="purpose-"]');
    var vendorListToggle = document.querySelectorAll('input[id^="vendor-"]');
    if (mailMoreOptionsToggle) {
        mailMoreOptionsToggle.addEventListener('change', function() {
            fireBeacon(mailMoreOptionsToggle, 'mail');
        });
    }
    if (purposeListToggle) {
        Array.prototype.forEach.call(purposeListToggle, function(purpose) {
            purpose.addEventListener('change', function() {
                fireBeacon(purpose, purpose.id);
            });
        });
    }
    if (vendorListToggle) {
        Array.prototype.forEach.call(vendorListToggle, function(vendor) {
            vendor.addEventListener('change', function() {
                fireBeacon(vendor, vendor.id);
            });
        });
    }
}

function setupSinglePageExpand(tapEvent) {
    var expandLearnMoreLink = document.querySelector('.expand-learn-more-link');
    var agreeBtnGroup = document.querySelector('.eu .eu-single-page .agree-button-group');
    var manageOptionsBtnGroup = document.querySelector('.eu .eu-single-page .more-options-button-group');
    var singlePageDataSection = document.getElementById('single-page-data');
    var singlePagePartnersSection = document.getElementById('single-page-partners');
    var singlePageMailSection = document.getElementById('single-page-mail');
    var consentStepBody = document.querySelector('.consent-step-body.scrollbox');

    if (expandLearnMoreLink) {
        addClass(expandLearnMoreLink, 'active');
        expandLearnMoreLink.addEventListener(tapEvent, function() {

            if (!containsClass(agreeBtnGroup, 'active')) {
                fireBeacon(expandLearnMoreLink, 'singlePageExpanded');
            }

            removeClass(expandLearnMoreLink, 'active');

            if (agreeBtnGroup) {
                addClass(agreeBtnGroup, 'active');
            }

            if (manageOptionsBtnGroup) {
                addClass(manageOptionsBtnGroup, 'active');
            }

            if (singlePageDataSection) {
                addClass(singlePageDataSection, 'active');
            }

            if (singlePagePartnersSection) {
                addClass(singlePagePartnersSection, 'active');
            }

            if (singlePageMailSection) {
                addClass(singlePageMailSection, 'active');
            }

            if (consentStepBody) {
                addClass(consentStepBody, 'expanded');
            }
        });
    }
}

function setupExperimentalPage(tapEvent) {
    var expandLearnMoreLink = document.querySelector('.experimental-expand-learn-more');
    var learnMoreSection = document.querySelector('.experimental-learn-more');
    if (expandLearnMoreLink && learnMoreSection) {
        expandLearnMoreLink.addEventListener(tapEvent, function() {
            addClass(expandLearnMoreLink, 'plain-text');
            removeClass(learnMoreSection, 'hidden');
        });
    }
}
function setupFakeBgPage(tapEvent) {
    var expandLearnMoreLink = document.querySelector('.expand-learn-more');
    var learnMoreSection = document.querySelector('.learn-more-content');
    if (expandLearnMoreLink && learnMoreSection) {
        expandLearnMoreLink.addEventListener(tapEvent, function() {
            addClass(expandLearnMoreLink, 'plain-text');
            removeClass(learnMoreSection, 'hidden');
        });
    }
}

function setupTppSelectAll(tapEvent) {
    var tppVendors = document.querySelector('.tpp.tpp-vendors');

    if (!tppVendors) {
        return;
    }

    var iabVendors = document.querySelectorAll('#iabVendors input[type="checkbox"]');
    var checkediabVendors = document.querySelectorAll('#iabVendors input[type="checkbox"]:checked');
    var otherVendors = document.querySelectorAll('#otherVendors input[type="checkbox"]');
    var checkedOtherVendors = document.querySelectorAll('#otherVendors input[type="checkbox"]:checked');
    var IABtppSelectAll = document.querySelector('#iabVendors .tpp-select-all');
    var IABtppDeslectAll = document.querySelector('#iabVendors .tpp-deselect-all');
    var otherstppSelectAll = document.querySelector('#otherVendors .tpp-select-all');
    var otherstppDeselectAll = document.querySelector('#otherVendors .tpp-deselect-all');

    function setRightLabel(selectAll, deselectAll, vendors, className) {
        checkediabVendors = document.querySelectorAll(className + ' input[type="checkbox"]:checked');
        if (checkediabVendors.length <= (vendors.length * 0.25)) {
            removeClass(deselectAll, 'active');
            addClass(selectAll, 'active');
        } else {
            removeClass(selectAll, 'active');
            addClass(deselectAll, 'active');
        }
    }

    if (IABtppSelectAll && IABtppDeslectAll && iabVendors) {

        setRightLabel(IABtppSelectAll, IABtppDeslectAll, iabVendors, '#iabVendors');

        IABtppSelectAll.addEventListener(tapEvent, function() {
            for (var i = 0; i < iabVendors.length; i++) {
                iabVendors[i].checked = true;
            }
            removeClass(IABtppSelectAll, 'active');
            addClass(IABtppDeslectAll, 'active');
        });

        IABtppDeslectAll.addEventListener(tapEvent, function () {
            for (var i = 0; i < iabVendors.length; i++) {
                iabVendors[i].checked = false;
            }
            removeClass(IABtppDeslectAll, 'active');
            addClass(IABtppSelectAll, 'active');
        });

        Array.prototype.forEach.call(iabVendors, function(vendor) {
            vendor.addEventListener('change', function() {
                setRightLabel(IABtppSelectAll, IABtppDeslectAll, iabVendors, '#iabVendors');
            });
        });
    }

    if (otherstppSelectAll && otherstppDeselectAll && otherVendors) {

        setRightLabel(otherstppSelectAll, otherstppDeselectAll, otherVendors, '#otherVendors');

        otherstppSelectAll.addEventListener(tapEvent, function() {
            for (var i = 0; i < otherVendors.length; i++) {
                otherVendors[i].checked = true;
            }
            removeClass(otherstppSelectAll, 'active');
            addClass(otherstppDeselectAll, 'active');
        });

        otherstppDeselectAll.addEventListener(tapEvent, function () {
            for (var i = 0; i < otherVendors.length; i++) {
                otherVendors[i].checked = false;
            }
            removeClass(otherstppDeselectAll, 'active');
            addClass(otherstppSelectAll, 'active');
        });

        Array.prototype.forEach.call(checkedOtherVendors, function(vendor) {
            vendor.addEventListener('change', function() {
                checkedOtherVendors = document.querySelectorAll('#otherVendors input[type="checkbox"]:checked');
                setRightLabel(otherstppSelectAll, otherstppDeselectAll, otherVendors, '#otherVendors');
            });
        });
    }



}

window.addEventListener( 'pageshow', function ( event ) {
    var historyTraversal = event.persisted ||
        ( typeof window.performance != 'undefined' &&
            window.performance.navigation.type === 2 );
    if ( historyTraversal ) {
        // Handle page restore.
        window.location.reload();
    }
});

window.addEventListener('DOMContentLoaded', function() {
    var langPicker = document.getElementById('consent-lang-picker');
    var consentForm = document.querySelector('.consent-form');
    var footer = document.querySelector('.footer');
    var scrollContainer = document.querySelector('.scroll-container');
    var bodyElement = document.querySelector('body');
    var agreeButton = document.querySelector('.agree');
    var disagreeButton = document.querySelector('.disagree');
    var tapEvent = ('ontouchstart' in document.documentElement) ? 'touchstart' : 'click';
    var isEnterPressed = false;
    var tppToolTipIcons = document.querySelectorAll('.tpp .tool-tip .info-icon');
    var activeTppTollTipElement;
    var singlePageAgreeForm = document.querySelector('.single-page-agree-form');
    var singlePageDisagreeForm = document.querySelector('.single-page-disagree-form');
    var singlePageMoreOptionsForm = document.querySelector('.single-page-more-options-form');
    var isSinglePageFormsPresent = false;


    if (agreeButton) {
        agreeButton.disabled = false;
    }

    if (disagreeButton) {
        disagreeButton.disabled = false;
    }

    checkCookie();

    setupBeacon();
    setupTppSelectAll(tapEvent);

    setupSinglePageExpand(tapEvent);
    setupExperimentalPage(tapEvent);
    setupFakeBgPage(tapEvent);

    removeClass(document.body, 'no-js');
    addClass(document.body, 'js');

    detectIE(scrollContainer, footer);

    var scrollHandler = function() {
        if (window.innerHeight + window.pageYOffset + 50 > document.body.scrollHeight) {
            removeClass(scrollContainer, 'active');
            removeClass(footer, 'active');
            window.removeEventListener('scroll', scrollHandler);
        }
    };

    if (bodyElement.clientHeight > window.innerHeight + 100) {
        window.addEventListener('scroll', scrollHandler);
    }

    if (tapEvent === 'touchstart') {
        removeClass(document.body, 'no-touch');
        addClass(document.body, 'touch');

        if (tppToolTipIcons) {
            document.body.addEventListener(tapEvent, function(e) {
                if (e.target && Array.prototype.indexOf.call(tppToolTipIcons, e.target) > -1) {
                    if (activeTppTollTipElement) {
                        removeClass(activeTppTollTipElement, 'touch-active');
                    }
                    activeTppTollTipElement = e.target && e.target.parentElement;
                    addClass(activeTppTollTipElement, 'touch-active');
                    return;
                }
                if (activeTppTollTipElement) {
                    removeClass(activeTppTollTipElement, 'touch-active');
                }
            });
        }
    }

    displayScrollToContinue(tapEvent);
    setupEUMoreOptionsToggle(tapEvent);

    if (singlePageAgreeForm) {
        isSinglePageFormsPresent = true;
        singlePageAgreeForm.addEventListener(tapEvent, handleDoubleSubmit);
        singlePageAgreeForm.addEventListener('submit', handleDoubleSubmit);
        singlePageAgreeForm.addEventListener('keydown', function() {
            if (isEnterPressed) {
                event.preventDefault();
                event.stopPropagation();
            }
            if (event.keyCode === 13 || event.keyCode === 10 /* some browser would come with 10 instead of 13 */ ) {
                isEnterPressed = true;
            }
        });
    }

    if (singlePageDisagreeForm) {
        isSinglePageFormsPresent = true;
        singlePageDisagreeForm.addEventListener(tapEvent, handleDoubleSubmit);
        singlePageDisagreeForm.addEventListener('submit', handleDoubleSubmit);
        singlePageDisagreeForm.addEventListener('keydown', function() {
            if (isEnterPressed) {
                event.preventDefault();
                event.stopPropagation();
            }
            if (event.keyCode === 13 || event.keyCode === 10 /* some browser would come with 10 instead of 13 */ ) {
                isEnterPressed = true;
            }
        });
    }

    if (singlePageMoreOptionsForm) {
        isSinglePageFormsPresent = true;
        singlePageMoreOptionsForm.addEventListener(tapEvent, handleDoubleSubmit);
        singlePageMoreOptionsForm.addEventListener('submit', handleDoubleSubmit);
        singlePageMoreOptionsForm.addEventListener('keydown', function() {
            if (isEnterPressed) {
                event.preventDefault();
                event.stopPropagation();
            }
            if (event.keyCode === 13 || event.keyCode === 10 /* some browser would come with 10 instead of 13 */ ) {
                isEnterPressed = true;
            }
        });
    }

    if (consentForm && !isSinglePageFormsPresent) {
        consentForm.addEventListener(tapEvent, handleDoubleSubmit);
        consentForm.addEventListener('submit', handleDoubleSubmit);
        consentForm.addEventListener('keydown', function() {
            if (isEnterPressed) {
                event.preventDefault();
                event.stopPropagation();
            }
            if (event.keyCode === 13 || event.keyCode === 10 /* some browser would come with 10 instead of 13 */ ) {
                isEnterPressed = true;
            }
        });
    }

    if (langPicker) {
        langPicker.addEventListener('change', onLanguageChange);
    }

});

},{}],2:[function(require,module,exports){
'use strict';

window.addEventListener('DOMContentLoaded', function() {
    var editConsentToggleSwitch = document.querySelector('.edit-radio-toggle-switch'),
        editButtonGoBack = document.querySelector('.modal-btn-go-back'),
        editCoreConsentModal = document.querySelector('.core-consent-modal'),
        editCoreConsentRemoveLink = document.querySelector('.edit-core-consent-remove-link');

    if (editConsentToggleSwitch) {
        editConsentToggleSwitch.addEventListener('change', function() {
            var editConsentWizardForm = document.querySelector('.edit-consent-wizard-form'),
                editConsentEventType = document.getElementById('consent-type-event');
            if (editConsentEventType.value === 'coreConsent' && this.checked === false) {
                //Show core consent modal
                if(editCoreConsentModal) {
                    editCoreConsentModal.style.display = 'block';
                }
            } else {
                if(editConsentWizardForm) {
                    editConsentWizardForm.submit();
                }
            }
        });
    }
    if (editCoreConsentRemoveLink) {
        editCoreConsentRemoveLink.addEventListener('click', function() {
            var editCoreConsentRemoveForm = document.querySelector('.edit-core-consent-remove-form');
            if(editCoreConsentRemoveForm) {
                editCoreConsentRemoveForm.submit();
            }
        });
    }
    var editButtonAnchor = document.querySelector('.core-consent-modal-anchor'),
        editModalCloseSpan = document.querySelector('.modal-close');
    if (editButtonAnchor) {
        editButtonAnchor.addEventListener('click', function() {
            if(editCoreConsentModal) {
                editCoreConsentModal.style.display = 'block';
            }
        });
    }
    if (editModalCloseSpan) {
        editModalCloseSpan.addEventListener('click', function() {
            if(editCoreConsentModal) {
                editCoreConsentModal.style.display = 'none';
            }
        });
    }
    window.onclick = function(event) {
        if (event.target == editCoreConsentModal || event.target == editButtonGoBack) {
            editConsentToggleSwitch.checked = true;
            editCoreConsentModal.style.display = 'none';
        }
    };
});
},{}],3:[function(require,module,exports){
'use strict';

var config = {
    /** Forces huffpost detection if true no matter the namespace */
    mockup: false,
    /** Whether to use huffpost staging */
    staging: false,
    /** Show debug logs during development*/
    verbose: false,
    themeClass: 'huffpo-theme',

    /**
     * Initial done URL. Empty for production but can be set in conjunction with mockup for debugging.
     * - Leave only the domain for home page.
     * - Use input[name="originalDoneUrl"] for entries
     */
    doneUrl: ''
};

window.addEventListener('DOMContentLoaded', bootstrap);

////////////////////

function bootstrap() {
    var body = document.body;

    if (body.classList && body.classList.contains(config.themeClass)) {
        try {
            var namespace = document.querySelector('form input[name="namespace"]').value;
            var isHuffpost = config.mockup || namespace === 'huffpo';

            if (isHuffpost) {
                if (!config.mockup) {
                    config.doneUrl = document.querySelector('form input[name="originalDoneUrl"]').value;
                }

                log(config);
                activate();
            }
        } catch (ignore) {
            renderDefault();
        }
    }
}

function activate() {
    entryMeta(config.doneUrl,
        function (entry) {
            if (!entry.homepage) {
                var metadata = entry.metadata || {};
                var images = entry.images || {};
                var vertical = metadata.PrimaryVertical || '';
                var title = entry.title || '';
                var snippet = metadata.Snippet || '';
                var image = images.featured || '';

                renderEntry({
                    eyebrow: vertical,
                    title: title,
                    snippet: snippet,
                    featuredImage: image
                });
            } else {
                renderHomepage();
            }
        },
        function () {
            // An error occurred. Render generic blurred version
            renderDefault();
        }
    );
}

function showLoading(active) {
    try {
        var body = document.body, card;
        var loadingShown = body.classList.contains('huffpo-loading');
        if (active) {
            if (!loadingShown) {
                body.classList.add('huffpo-loading');

                var markup = '<div class="huffpo-entry__eyebrow">&nbsp;</div>';
                markup += '<div class="huffpo-entry__headline">&nbsp;</div>';
                markup += '<div class="huffpo-entry__snippet">&nbsp;</div>';
                markup += '<div class="huffpo-entry__image"></div>';
                markup += '<div class="huffpo-entry__snippet"></div>';

                card = createEntryCard(markup);
                body.insertBefore(card, body.firstChild);
            }
        } else if (loadingShown) {
            body.classList.remove('huffpo-loading');
            card = body.querySelector('.huffpo-entry__card');
            card.parentNode.removeChild(card);
        }
    } catch (ignore) {
        return;
    }
}

function assertLoadingOff() {
    var body = document.body;
    var loadingShown = body.classList.contains('huffpo-loading');

    if (loadingShown && config.verbose) {
        logError('Loading active when it shouldn\'t be.');
    }

    // Hide loading indicator anyway to avoid bad markup
    showLoading(false);
}

/**
 * Renders entry meta on a clear background page.
 * @param {{vertical: string, title: string, snippet: string, featuredImage: string, homepage: boolean}} entry
 */
function renderEntry(entry) {
    assertLoadingOff();
    var body = document.body;
    body.classList.add('huffpo-entry');

    var markup = '';

    if (entry.eyebrow) {
        markup += '<div class="huffpo-entry__eyebrow">' + entry.eyebrow + '</div>';
    }

    if (entry.title) {
        markup += '<div class="huffpo-entry__headline">' + entry.title + '</div>';
    }

    if (entry.snippet) {
        markup += '<div class="huffpo-entry__snippet">' + entry.snippet + '</div>';
    }

    if (entry.featuredImage) {
        markup += '<div class="huffpo-entry__image">';
        markup += '<img src="' + entry.featuredImage + '" alt="">';
        markup += '</div>';
    }

    markup += '<div class="huffpo-entry__text"></div>';

    var card = createEntryCard(markup);
    body.insertBefore(card, body.firstChild);
}

/**
 * Renders default blurred image version.
 * Used for homepage or when entry data is missing or not supported
 */
function renderDefault() {
    try {
        assertLoadingOff();
        document.body.classList.add('huffpo-default');
    } catch (ignore){
        return;
    }
}

function renderHomepage() {
    try {
        assertLoadingOff();
        document.body.classList.add('huffpo-homepage');
    } catch (ignore){
        return;
    }
}

function createEntryCard(markup) {
    var card = document.createElement('div');

    card.classList.add('huffpo-entry__card');
    card.innerHTML = '<div class="huffpo-entry__card__content">' + markup + '</div>';

    return card;
}

function findEntryMapi(doneUrl) {
    var parts = splitPath(doneUrl);
    var mapi = null;

    if (parts.filename) {
        var entryName = parts.filename;
        var nameParts = entryName ? entryName.split('_') : [];

        // TODO: Handles only athena entries. Add support for other entry types
        if (nameParts.length >= 2) {
            var entryId = nameParts.pop();
            var editionCode = nameParts.pop();

            var domain = !config.staging ? parts.domain : 'staging.' + parts.domain;
            var mapiUrl = 'https://' + domain + '/api/cms/entry/athena/' + editionCode + '-' + entryId;
            mapi = {
                platform: 'athena',
                mapi: mapiUrl,
                original: doneUrl
            };
        }
    } else {
        mapi = {homepage: true};
    }

    return mapi;
}

function entryMeta(doneUrl, doneCb, errCb) {
    var mapiConfig = findEntryMapi(doneUrl);
    var mapiUrl = mapiConfig.mapi;
    if (mapiConfig.homepage) {
        // Homepage case detected. Do nothing
        doneCb({homepage: true});
    } else if (mapiConfig.platform === 'athena') {
        showLoading(true);
        fetch(mapiUrl,
            function (response) {
                try {
                    showLoading(false);
                    var data = JSON.parse(response);
                    doneCb(data);
                } catch (ignore){
                    errCb();
                }
            },
            function () {
                showLoading(false);
                errCb();
            }
        );
    } else {
        logError('Only athena entries are supported.');
        errCb();
    }
}

function splitPath(path) {
    var result = path.replace(/\\/g, '/').match(/(.*\/)?(\..*?|.*?)(\.[^.]*?)?(#.*$|\?.*$|$)/);

    var data = {
        dirname: result[1] || '',
        filename: result[2] || '',
        extension: result[3] || '',
        params: result[4] || ''
    };

    data.domain = data.dirname.match(/https?:\/\/(.*?)\//)[1];
    return data;
}

function fetch(url, cb, errorCb) {
    function reqListener() {
        try {
            cb(this.responseText);
        } catch (ignore) {
            errorCb();
        }
    }
    try {
        var oReq = new XMLHttpRequest();
        oReq.addEventListener('load', reqListener);
        oReq.addEventListener('error', errorCb);
        oReq.open('GET', url);
        oReq.send();
    } catch (ignore) {
        errorCb();
    }
}

function log(/*var_args*/) {
    if (config.verbose) {
        var args = Array.prototype.slice.call(arguments);
        args.unshift('HuffPost:');
        console.log.apply(window, args);
    }
}

function logError(/*var_args*/) {
    if (config.verbose) {
        var args = Array.prototype.slice.call(arguments);
        args.unshift('HuffPost:');
        console.error.apply(window, args);
    }
}
},{}]},{},[1,2,3]);
