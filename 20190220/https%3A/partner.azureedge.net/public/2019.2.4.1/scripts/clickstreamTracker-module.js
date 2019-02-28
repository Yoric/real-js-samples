/* JSLL */
define('clickstreamTracker', ['jsllLibrary'],
    function (jsllLibrary) {

        var tracker = {
            referrer: '',
            requestUri: '',
            setReferrer: function (value) {
                this.referrer = value;
            },
            setRequestUri: function (value) {
                this.requestUri = value;
            },
            capture: function (overrides) {
                var config = overrides ? overrides : {};
                if (this.referrer && this.referrer !== '') {
                    config.referrerUri = this.referrer;
                }
                if (this.requestUri && this.requestUri !== '') {
                    // filling in both since the field name changed between JSLLV3 and JSLLV4
                    config.requestUri = this.requestUri; 
                    config.uri = this.requestUri;
                }
                if (typeof (awa.cv.getValue()) !== 'undefined') {
                    awa.ct.capturePageView(config);
                }
            },
            disableAutoPageView: function () {
                console.log('disableAutoPageView is deprecated and it does nothing. Please stop using it.');
            },
            disableAutoContentView: function () {
                console.log('disableAutoContentView is deprecated and it does nothing. Please stop using it.');
            },
            capturePageView: function (overrides) {
                var self = this;
                if (typeof (awa) !== 'undefined' && awa !== null && awa.isInitialized) {
                    self.capture(overrides);
                }
                else {
                    $('body')[0].addEventListener('jsllInit', function () { self.capture(overrides); }, false);
                }
            }
        };

        return tracker;
    });