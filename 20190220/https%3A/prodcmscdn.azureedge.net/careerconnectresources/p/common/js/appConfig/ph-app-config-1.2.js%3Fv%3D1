document.addEventListener("DOMContentLoaded", function(event) {
    if(phApp && phApp.ddo && phApp.ddo.siteConfig){
        var siteConfig = phApp.ddo.siteConfig.data || {};
        phApp.pageNameMap = siteConfig.pageNameMap;
        phApp.recommendedTrackingConfig = siteConfig.recommendedTrackingConfig;
        phApp.trackingConfig = siteConfig.trackingConfig;
        phApp.siteSettings = siteConfig.siteSettings;
        phApp.urlMap = siteConfig.urlMap;
    }
});
//method for sending the key,value of queryparam
function getQueryParam(queryParam){
    var reg = new RegExp( '[?&]' + queryParam + '=([^&#]*)', 'i' );
    var queryParamValue = reg.exec(window.location.href);
    return queryParamValue;
}
window.addEventListener('load', function() {

    if (window.localStorage) {
        var pageNameObj = {"pageName" : phApp.pageName};
        var filteredPageNames = ["search-results"];
        var filteredPageTypes = ["category", "featuredOpportunities", "businessUnit"];
        if (filteredPageNames.indexOf(phApp.pageName) != -1 || filteredPageTypes.indexOf(phApp.pageType) != -1) {
            if (localStorage.getItem("pageName")) {
                var lsPageNameObj = JSON.parse(this.localStorage.getItem("pageName"));
                if (lsPageNameObj["pageName"] != "job") {
                    localStorage.setItem("pageName", JSON.stringify(pageNameObj));  
                }
            }
        }
        else {
            localStorage.setItem("pageName", JSON.stringify(pageNameObj));
        }
    }

    var pageNameMap = phApp ? (phApp.pageNameMap || {}) : {};
    var eventData = {}; 
    var missingJobSeqNum = false; 
    if(phApp && phApp.pageName){
        var eventName = pageNameMap[phApp.pageName];
        var eventStatus = true; 
        if(!eventName){
            eventName = pageNameMap[phApp.pageType]; 
        }
        if (phApp.pageType == 'category' || phApp.pageType == 'featuredOpportunities' || phApp.pageType == 'businessUnit') {
            eventData.trait14 = phApp.pageName; 
        } else {
            if (phApp.pageName == 'job') {
                if (phApp.ddo.jobDetail && phApp.ddo.jobDetail.data.job && phApp.ddo.jobDetail.data.job.jobSeqNo) {
                    eventData.trait5 = phApp.ddo.jobDetail.data.job.jobSeqNo;
                    eventData.trait14 = phApp.ddo.jobDetail.data.job.category;
                    eventData.trait282 = phApp.ddo.jobDetail.data.job.jobId;
                    var refToken = 'referrerToken';

                    if(window.location.href.indexOf(refToken+'=') != -1){
                        eventData.trait281 = getQueryParam(refToken)[1]; //getting referral token
                    }
                } else {
                    missingJobSeqNum = true;
                    phApp.pendingJobPageViewEvent = true;
                }
            }
            if(phApp.pageName == 'event'){
                if (phApp.ddo.eventDetail && phApp.ddo.eventDetail.data && phApp.ddo.eventDetail.data.eventScheduleId) {
                    eventData.trait269 = phApp.ddo.eventDetail.data.eventScheduleId;
                    eventData.trait14 = phApp.ddo.eventDetail.data.category;
                }
            }
            if (phApp.pageName == 'apply' || phApp.pageName == 'jointalentcommunity'|| phApp.pageName == 'apply-thankyou'|| phApp.pageName.toLowerCase() =='applythankyou') {
                eventStatus = false;
            }
        }
        if(!eventName){
            eventName = "static_page_view"; 
            eventData.trait13 = phApp.pageName; 
        }
        eventData.trait2 = phApp.refNum; 
        eventData.trait79 = phApp.locale; 
        eventData.trait65 = phApp.deviceType;
        eventData.trait76 = phApp.pageType || phApp.pageName;
        eventData.trait253 = phApp.pageName; 
        eventData.trait258 = phApp.siteType;
        if (window.phenomevent && eventStatus && !missingJobSeqNum) {
            phenomevent.track(eventName, eventData); 
        } 
    }
});