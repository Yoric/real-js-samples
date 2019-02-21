var autoHide = {};
autoHide.checkString = function(string, cond){
	if(string === cond){	//If img src meets hideIf criteria
		return true;	//Flag that this element should be hidden
	}else if(cond.indexOf('*') > -1){	//Wildcard * found
		cond = cond.replace(/[\-\[\]\/\{\}\(\)\+\?\.\\\^\$\|]/g, "\\$&");	//Prep string for regex
		cond = cond.replace(/\*/g, ".*");	//Replace wildcards with .* which is a regex wildcard
		cond = "^" + cond + "$";			//Regex for start and end of string
		var patt = new RegExp(cond, "");	//Turn string into regex pattern
		if(string.search(patt) != -1){		//Match found
			return true;
		}
	}
	return false;
};

autoHide.validateImgSrc = function(subSection, fieldReq){
	var imgs = subSection.find(fieldReq.selector);	//Get all images that meet selector

	var shownElements = imgs.filter(function(){
		var imgSrc = jQuery(this).attr('src').trim();	//Get image src
		var hideElement = false;
		for(var i = 0; i < fieldReq.hideIf.length; i++){	//Check each hideIf condition
			hideElement = hideElement || autoHide.checkString(imgSrc, fieldReq.hideIf[i]);
		}
		if(!hideElement){
			return true;
		}
	});

	if(shownElements.length){
		return false;
	}else{
		return true;
	}
};
autoHide.validateText = function(subSection, fieldReq){
	var textConts = fieldReq.selector !== "" ? subSection.find(fieldReq.selector) : subSection;	//Get all images that meet selector
	var shownElements = textConts.filter(function(){
		var text = jQuery(this).text().trim();	//Get text
		var hideElement = false;
		for(var i = 0; i < fieldReq.hideIf.length; i++){	//Check each hideIf condition
			hideElement = hideElement || autoHide.checkString(text, fieldReq.hideIf[i]);
		}
		if(!hideElement){
			return true;
		}
	});

	if(shownElements.length){
		return false;
	}else{
		return true;
	}
};

autoHide.checkSection = function(details) {
	var section = jQuery(details.sectionSelector);
	var subSections = details.subSectionSelector !== "" ? jQuery(details.subSectionSelector, section) : section;
	var hiddenSubsections = 0;

	var hideSubSections = subSections.filter(function(){
		var subSection = jQuery(this);
		for(var i = 0; i < details.fieldReqs.length; i++){
			var fieldReq = details.fieldReqs[i];
			var hideElement = false;
			switch(fieldReq.type){
				case "imgSrc":
					hideElement = autoHide.validateImgSrc(subSection, fieldReq);
					break;
				case "text":
					hideElement = autoHide.validateText(subSection, fieldReq);
					break;
			}
			if(!hideElement){	//If any elements are to be shown, no need to check other elements
				return false;
			}
		}
		//If code makes it to here, then ALL elements met hide criteria
		return true;	//Subsection should be added to filtered elements to be hidden
	});
	if ( !(window.location.href.match(/https:\/\/na-sj18.marketodesigner.com/i) ) )  {
		hideSubSections.remove();
		if(hideSubSections.length === subSections.length){
			section.remove();
		}
	}
};


/*
DATA TO BE PASSED TO autoHide.checkSection FUNCTION:
    "sectionSelector" : THE TOP LEVEL SECTION THAT WILL BE HIDDEN IF ALL SUBSECTIONS ARE HIDDEN,
    "subSectionSelector" : THE SUBSECTION SELECTOR FOR ELEMENTS INSIDE TOP LEVEL SECTION, IF "" THEN THIS WILL BE THE TOP LEVEL SECTION ITSELF
    "fieldReqs" : [
        {
            "type" : VALIDATION TECHNIQUE FOR FIELD. SHOULD BE "text" OR "imgSrc",
            "selector" : SELECTOR FOR FIELD, IF "" THEN THIS WILL BE THE SUBSECTION ITSELF
            "hideIf" : [ARRAY OF CRITERIA. IF ANY CRITERIA ARE MET, THIS FIELD WILL BE HIDDEN]
        }
    ]

EXAMPLE OF DATA:
	HTML to autohide:
    	<div class='body-text'>
    		<h2 class='subhead'>Default Text</h2>
		</div>

	Data to pass for above HTML
	    autoHideData.exampleItem = {
	        "sectionSelector" : ".body-text > .subhead",
	        "subSectionSelector" : "",	//There are no subsections, so inherit the top-level section
	        "fieldReqs" : [
	            {
	                "type" : "text",
	                "selector" : "",	//There are no fields, so inherit from subsection, which is the top-level section
	                "hideIf" : ["", "Default Text"]	//Hide if blank, or "Default Text"
	            }
	        ]
	    };

WILDCARD CHARACTERS
	For the hideIf section you can also use the wildcard character *
	Example: "*[REPLACE]*" would match any of the following strings:
		[REPLACE]
		[REPLACE] this content
		Please [REPLACE]
		Please [REPLACE] this content

	Variations of the wildcard character are as follows:
		*[REPLACE]* - Matches any string that contains [REPLACE]
		[REPLACE]* - Matches any string that starts with [REPLACE]
		*[REPLACE] - Matches any string that ends with [REPLACE]

EXAMPLE SCRIPT TO ADD TO TEMPLATE:
        <script>
            var autoHideData = {}
            autoHideData.featuredGuests = {
                "sectionSelector" : ".featured-guests",
                "subSectionSelector" : ".fg-tile",
                "fieldReqs" : [
                    {
                        "type" : "imgSrc",
                        "selector" : "img",
                        "hideIf" : ["", "https://resources.office.com/rs/112-YPQ-597/images/placeholder-person.png"]
                    },
                    {
                        "type" : "text",
                        "selector" : "p",
                        "hideIf" : [""]
                    }
                ]
            };
            
            autoHideData.optionalSubhead = {
                "sectionSelector" : ".body-text > .subhead",
                "subSectionSelector" : "",
                "fieldReqs" : [
                    {
                        "type" : "text",
                        "selector" : "",
                        "hideIf" : [""]
                    }
                ]
            };

            jQuery(document).ready(function(){
                autoHide.checkSection(autoHideData.featuredGuests);
                autoHide.checkSection(autoHideData.optionalSubhead);
            });
        </script>
 */