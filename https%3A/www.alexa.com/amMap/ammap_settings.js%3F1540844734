AmCharts.ready(function(){
	map=new AmCharts.AmMap();
	map.pathToImages="/amMap/ammap/images/";
	map.allowClickOnSelectedObject=false;
	map.areasSettings={balloonText:"[[title]]",
			   selectable:false,
			   colorSolid:"#34B755",
			   color:"#DDDDDD",
			   rollOverColor:"#1A7A6F",
			   colorSelected:"",
			   disableWhenClicked:"true",
			   unlistedAreasAlpha: 0.5,
			   unlistedAreasColor:"#DDDDDD"
	};
	map.colorSteps=1000;
	map.zoomControl.zoomControlEnabled=false;
	map.zoomControl.panControlEnabled=false;
	map.backgroundColor="#DDEEFF";
	map.borderColor="#FFFFFF";
       


	var dataProvider= {
	    mapVar:AmCharts.maps.worldLow,
	    areas: ALEXA.viewsHelpers.map.areas
	}
	
	map.dataProvider = dataProvider;
	map.write(ALEXA.viewsHelpers.map.div);
	
    }
    );
