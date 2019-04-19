function change_displaytitle()
{
	var text = $( '#displaytitle' ).attr( 'title' ), what;
 
	if ( text ) {
		text = text.match( "(?:tab:\\s*([^|]+)\\|?)?\\s*(?:title:\\s*(.+))?" );
	}
 
	if ( !text ) {
		return;
	}
 
	if ( text[1] ) {
		what = $("#ca-nstab-" + ( mw.config.get('wgCanonicalNamespace').toLowerCase() || 'main' ) );
		what.find('a').text(text[1]);
	}
 
	if ( text[2] ) {
		what = $('h1');
 
		if ( what.hasClass('firstHeading') || what.hasClass('pagetitle') ) {
			what.text(text[2]);
		}
	}
}
 
$(document).ready(change_displaytitle);