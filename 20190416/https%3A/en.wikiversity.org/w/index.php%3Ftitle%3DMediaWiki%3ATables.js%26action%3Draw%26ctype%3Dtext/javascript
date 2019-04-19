$(document).ready( function($) {
	$('table.table').each( function() {
		var $table = $(this), c = 0;

		$table.find('> tr, > tbody > tr').each( function() {
			var $row = $(this);

			if ( $row.children('th').length ) {
				c = 0;
				return true;
			}

			if ( c % 2 ) {
				$row.addClass( 'odd' );
			} else {
				$row.addClass( 'even' );
			}

			++c;
		});
	});
});