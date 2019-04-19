/*
 *  Description: Hide the watchlist message for one week.
 *  Maintainers: [[w:User:Ruud Koot|Ruud Koot]]
 *  Updated by:  [[User:Darklama|darklama]]
 */
 
function addDismissButton() {
	var $watchlistMessage = $('#watchlist-message');
 
	if ( !$watchlistMessage.length ) return;
	if ( $.cookie('hidewatchlistmessage') === 'yes' ) {
		$watchlistMessage.hide();
		return;
	}
 
	$('<span>[<a id="dismissButton" title="Hide this message for one week">dismiss</a>]</span>')
		.appendTo( $watchlistMessage )
		.click( function() {
			$.cookie('hidewatchlistmessage', 'yes', { 'expires': 7, 'path': '/' });
			$watchlistMessage.hide();
		});
}
 
if ( mw.config.get('wgCanonicalSpecialPageName') === 'Watchlist') $(document).ready( addDismissButton );