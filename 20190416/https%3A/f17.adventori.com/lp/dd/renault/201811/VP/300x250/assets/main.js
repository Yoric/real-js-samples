window.onload = function(){
    var textSize;
    var ecran2_Easypack = ADventori.data.ecran2_Easypack; //false;
    var ecran2_Offre = ADventori.data.ecran2_Offre; //false;

    scenario();  

    function scenario(){
		if ((ecran2_Easypack == 'true') && (ecran2_Offre == 'false')) {
			showFrame(1);
		} else if ((ecran2_Easypack == 'false') && (ecran2_Offre == 'true')) {
			showFrame(2);
		} else if ((ecran2_Easypack == 'false') && (ecran2_Offre == 'false')) {
			showFrame(3);
		} else if ((ecran2_Easypack == 'true') && (ecran2_Offre == 'true')) {
			showFrame(4);
		}
	}
	
	function showFrame(id) {
		var tl = new TimelineMax;

		switch (id) {
			case 1:
				tl.to("#logo", 0.3, {opacity:1});
				tl.to("#txtWrap", 0.7, {ease: Power1.easeOut,left:0});
				tl.to("#imgVoiture", 0.5, {opacity:1},"-=0.5");
				tl.to("#renvoiML_ecran1_txt", 0.5, {opacity:1},"-=0.2");
				tl.to("#txtWrap", 0.5, {opacity:0},"+=2");
				tl.to("#imgVoiture", 0.5, {opacity:0},"-=0.5");
				tl.to("#renvoiML_ecran1_txt", 0.5, {opacity:0},"-=0.5");
				tl.to("#ecran_easyPack", 0.5, {left:0});
				tl.to("#imgVoiture", 0.5, {scale:0.7, left:70,top:0});
				tl.to("#ecran_easyPack", 0.5, {opacity:0},"+=2.5");
				tl.to("#txtWrap", 0.5, {opacity:1});          
				tl.to("#imgVoiture", 0.5, {opacity:1},"-=0.5");          
				tl.to("#ecranfin", 0.5, {left:0});
				tl.to("#btn", 0.5, {bottom:5,opacity:1});
				tl.to("#btn", 0.5, {bottom:20,opacity:1});
				tl.to("#renvoiML_ecran4_txt", 0.5, {opacity:1,onComplete:hoverML},"-=0.2");
			break;
			case 2:
				tl.to("#logo", 0.3, {opacity:1});
				tl.to("#txtWrap", 0.7, {ease: Power1.easeOut,left:0});
				tl.to("#imgVoiture", 0.5, {opacity:1},"-=0.5");
				tl.to("#renvoiML_ecran1_txt", 0.5, {opacity:1},"-=0.2");
				tl.to("#txtWrap", 0.5, {opacity:0},"+=2");
				tl.to("#imgVoiture", 0.5, {opacity:0},"-=0.5");
				tl.to("#renvoiML_ecran1_txt", 0.5, {opacity:0},"-=0.5");
				tl.to("#ecran_offre", 0.5, {left:0});
				tl.to("#ecran_offre", 0.5, {opacity:0},"+=2.5");
				tl.to("#txtWrap", 0.5, {opacity:1});          
				tl.set("#imgVoiture", {scale:0.7, left:70},"-=0.5");          
				tl.to("#imgVoiture", 0.5, {opacity:1},"-=0.5");          
				tl.to("#ecranfin", 0.5, {left:0});
				tl.to("#btn", 0.5, {bottom:5,opacity:1});
				tl.to("#btn", 0.5, {bottom:20,opacity:1});
				tl.to("#renvoiML_ecran4_txt", 0.5, {opacity:1,onComplete:hoverML},"-=0.2");
			break;
			case 3:
				tl.to("#logo", 0.3, {opacity:1});
				tl.to("#txtWrap", 0.7, {ease: Power1.easeOut,left:0});
				tl.to("#imgVoiture", 0.5, {opacity:1},"-=0.5");
				tl.to("#renvoiML_ecran1_txt", 0.5, {opacity:1},"-=0.2");
				tl.to("#renvoiML_ecran1_txt", 0.5, {opacity:0},"-=0.5");
				tl.to("#imgVoiture", 0.5, {scale:0.7, left:70,top:0});              
				tl.to("#ecranfin", 0.5, {left:0});
				tl.to("#btn", 0.5, {bottom:5,opacity:1});
				tl.to("#btn", 0.5, {bottom:20,opacity:1});
				tl.to("#renvoiML_ecran4_txt", 0.5, {opacity:1,onComplete:hoverML},"-=0.2");
			break;
			case 4:
				tl.to("#logo", 0.3, {opacity:1});
				tl.to("#txtWrap", 0.7, {ease: Power1.easeOut,left:0});
				tl.to("#imgVoiture", 0.5, {opacity:1},"-=0.5");
				tl.to("#renvoiML_ecran1_txt", 0.5, {opacity:1},"-=0.2");
				tl.to("#txtWrap", 0.5, {opacity:0},"+=2");
				tl.to("#imgVoiture", 0.5, {opacity:0},"-=0.5");
				tl.to("#renvoiML_ecran1_txt", 0.5, {opacity:0},"-=0.5");
				tl.to("#ecran_easyPack", 0.5, {left:0});
				tl.to("#imgVoiture", 0.5, {scale:0.7, left:70,top:0});
				tl.to("#ecran_easyPack", 0.5, {left:-300},"+=2.5");
				tl.to("#ecran_offre", 0.5, {left:0});
				tl.to("#ecran_offre", 0.5, {opacity:0},"+=2.5");
				tl.to("#txtWrap", 0.5, {opacity:1});          
				tl.to("#imgVoiture", 0.5, {opacity:1},"-=0.5");          
				tl.to("#ecranfin", 0.5, {left:0});
				tl.to("#btn", 0.5, {bottom:5,opacity:1});
				tl.to("#btn", 0.5, {bottom:20,opacity:1});
				tl.to("#renvoiML_ecran4_txt", 0.5, {opacity:1,onComplete:hoverML},"-=0.2");
			break;
			default:
				tl.to("#logo", 0.3, {opacity:1});
				tl.to("#txtWrap", 0.7, {ease: Power1.easeOut,left:0});
				tl.to("#imgVoiture", 0.5, {opacity:1},"-=0.5");
				tl.to("#renvoiML_ecran1_txt", 0.5, {opacity:1},"-=0.2");
				tl.to("#renvoiML_ecran1_txt", 0.5, {opacity:0},"-=0.5");
				tl.to("#imgVoiture", 0.5, {scale:0.7, left:70,top:0});              
				tl.to("#ecranfin", 0.5, {left:0});
				tl.to("#btn", 0.5, {bottom:5,opacity:1});
				tl.to("#btn", 0.5, {bottom:20,opacity:1});
				tl.to("#renvoiML_ecran4_txt", 0.5, {opacity:1,onComplete:hoverML},"-=0.2");
			break;
		}     
	}

	ADventori.Display.setImageUrl(document.getElementById('visuel'),ADventori.data.visuel);

	ADventori.Display.setImageUrl(document.getElementById('logoRenault'),ADventori.data.logoRenault);
	ADventori.Display.setImageUrl(document.getElementById('logoEasyPack'),ADventori.data.logoEasyPack);

	ADventori.Display.setText(document.getElementById('nom_vehicule_1'),ADventori.data.nom_vehicule_1);
	ADventori.Display.setText(document.getElementById('nom_vehicule_2'),ADventori.data.nom_vehicule_2);
	ADventori.Display.setText(document.getElementById('nom_vehicule_3'),ADventori.data.nom_vehicule_3);
	ADventori.Display.setText(document.getElementById('nom_vehicule_4'),ADventori.data.nom_vehicule_4);
	ADventori.Display.setText(document.getElementById('entete_prix'),ADventori.data.entete_prix);
	ADventori.Display.setText(document.getElementById('prix'),ADventori.data.prix);
	ADventori.Display.setText(document.getElementById('suffixe_prix'),ADventori.data.suffixe_prix);
	ADventori.Display.setText(document.getElementById('renvoi_prix_mois'),ADventori.data.renvoi_prix_mois);
	ADventori.Display.setText(document.getElementById('renvoi_prix_fixe'),ADventori.data.renvoi_prix_fixe);
	ADventori.Display.setText(document.getElementById('sub_prix_1'),ADventori.data.sub_prix_1);
	ADventori.Display.setText(document.getElementById('sub_prix_2'),ADventori.data.sub_prix_2);
	ADventori.Display.setText(document.getElementById('ecran2_easypack_txt'),ADventori.data.ecran2_easypack_txt);
	ADventori.Display.setText(document.getElementById('ecran2_offre_txt'),ADventori.data.ecran2_offre_txt);
	ADventori.Display.setText(document.getElementById('cta'),ADventori.data.cta);
	ADventori.Display.setText(document.getElementById('renvoiML_ecran1_txt'),ADventori.data.renvoiML_ecran1_txt);
	ADventori.Display.setText(document.getElementById('renvoiML_ecran2_txt'),ADventori.data.renvoiML_ecran2_txt);
	ADventori.Display.setText(document.getElementById('renvoiML_ecran3_txt'),ADventori.data.renvoiML_ecran3_txt);
	ADventori.Display.setText(document.getElementById('renvoiML_ecran4_txt'),ADventori.data.renvoiML_ecran4_txt);
	ADventori.Display.setText(document.getElementById('Ecran_ML'),ADventori.data.Ecran_ML);

	ADventori.Display.adaptText(document.getElementById('renvoiML_ecran1_txt'),6);
	ADventori.Display.adaptText(document.getElementById('renvoiML_ecran2_txt'),6);
	ADventori.Display.adaptText(document.getElementById('renvoiML_ecran3_txt'),6);
	ADventori.Display.adaptText(document.getElementById('renvoiML_ecran4_txt'),6);
	ADventori.Display.adaptText(document.getElementById('Ecran_ML'),6);

	if (ADventori.data.renvoi_prix_mois == '&nbsp;') {
		document.getElementById('renvoi_prix_mois').style.display = 'none';
	}
	if (ADventori.data.renvoi_prix_fixe == '&nbsp;') {
		document.getElementById('renvoi_prix_fixe').style.display = 'none';
	}

	function hoverML() {
		var ml = document.getElementById("exit");
		ml.onmouseover = function(){
			var tl = new TimelineMax;
			if(!((ADventori.data.Ecran_ML == "") || (ADventori.data.Ecran_ML == "false") || (ADventori.data.Ecran_ML == "&nbsp;"))) {
				tl.to("#ml", 0.3, {opacity:1});
			}  
		}
		ml.onmouseout = function(){
			var tl = new TimelineMax;
			tl.to("#ml", 0.3, {opacity:0});
		}
	}
}