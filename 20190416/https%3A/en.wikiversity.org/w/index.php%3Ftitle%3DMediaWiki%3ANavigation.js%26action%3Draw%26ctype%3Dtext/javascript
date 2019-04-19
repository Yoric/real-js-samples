/** Collapsible tables *********************************************************
 *
 *  Description: Allows tables to be collapsed, showing only the header. See
 *                         http://www.mediawiki.org/wiki/Manual:Collapsible_tables.
 *  Maintainers: [[en:User:R. Koot]]
 */
 
var autoCollapse = 2;
var collapseCaption = 'hide';
var expandCaption = 'show';
 
function collapseTable( tableIndex ) {
	var Button = document.getElementById( 'collapseButton' + tableIndex );
	var Table = document.getElementById( 'collapsibleTable' + tableIndex );

	if ( !Table || !Button ) {
		return false;
	}

	var Rows = Table.rows;
	var i;
	var $row0 = $(Rows[0]);

	if ( Button.firstChild.data === collapseCaption ) {
		for ( i = 1; i < Rows.length; i++ ) {
			Rows[i].style.display = 'none';
		}
		Button.firstChild.data = expandCaption;
	} else {
		for ( i = 1; i < Rows.length; i++ ) {
			Rows[i].style.display = $row0.css( 'display' );
		}
		Button.firstChild.data = collapseCaption;
	}
}
 
function createCollapseButtons() {
        var tableIndex = 0;
        var NavigationBoxes = {};
        var Tables = document.getElementsByTagName( 'table' );
 
        for ( var i = 0; i < Tables.length; i++ ) {
                if ( hasClass( Tables[i], 'collapsible' ) ) {
 
                        /* only add button and increment count if there is a header row to work with */
                        var HeaderRow = Tables[i].getElementsByTagName( 'tr' )[0];
                        if ( !HeaderRow ) {
                                continue;
                        }
                        var Header = HeaderRow.getElementsByTagName( 'th' )[0];
                        if ( !Header ) {
                                continue;
                        }
 
                        NavigationBoxes[tableIndex] = Tables[i];
                        Tables[i].setAttribute( 'id', 'collapsibleTable' + tableIndex );
 
                        var Button = document.createElement( 'span' );
                        var ButtonLink = document.createElement( 'a' );
                        var ButtonText = document.createTextNode( collapseCaption );
 
                        Button.className = 'collapseButton'; // Styles are declared in [[MediaWiki:Common.css]]
 
                        ButtonLink.style.color = Header.style.color;
                        ButtonLink.setAttribute( 'id', 'collapseButton' + tableIndex );
                        ButtonLink.setAttribute( 'href', "javascript:collapseTable(" + tableIndex + ");" );
                        ButtonLink.appendChild( ButtonText );
 
                        Button.appendChild( document.createTextNode( '[' ) );
                        Button.appendChild( ButtonLink );
                        Button.appendChild( document.createTextNode( ']' ) );
 
                        Header.insertBefore( Button, Header.childNodes[0] );
                        tableIndex++;
                }
        }
 
        for ( var i = 0;  i < tableIndex; i++ ) {
                if ( hasClass( NavigationBoxes[i], 'collapsed' ) || ( tableIndex >= autoCollapse && hasClass( NavigationBoxes[i], 'autocollapse' ) ) ) {
                        collapseTable( i );
                } else if ( hasClass( NavigationBoxes[i], 'innercollapse' ) ) {
                        var element = NavigationBoxes[i];
                        while ( element = element.parentNode ) {
                                if ( hasClass( element, 'outercollapse' ) ) {
                                        collapseTable( i );
                                        break;
                                }
                        }
                }
        }
}
 
$( createCollapseButtons );

// Faster Dynamic Navigation
 
// set up the words in your language
var NavigationBarHide = '▲';
var NavigationBarShow = '▼';
var NavigationTitleHide = 'hide contents';
var NavigationTitleShow = 'show contents';
 
// adds show/hide-button to collapsible navigation
function collapsible_navigation()
{
	$('div.NavFrame').each( function() {
		var	$that = $(this), css_width = $that.css( 'width' ), attr_width = $that.attr( 'width' ),
			which = $that.hasClass( 'selected' ) ? NavigationBarShow : NavigationBarHide;

		if ( (!css_width || css_width === 'auto') && (!attr_width || attr_width === 'auto') ) {
			$that.css( 'width', $that.width() );
		}

		$that.children('.NavHead').each( function() {
			$(this).append( '<a class="NavToggle">' + which + '</a>' ).click( function() {
				var which = $that.toggleClass('selected').hasClass( 'selected' ), $this = $(this);

				$this.find( '.NavToggle' ).text( which ? NavigationBarShow : NavigationBarHide );

				if ( which ) {
					$this.attr( 'title', NavigationTitleShow )
						.siblings( ':not(.NavHead)' ).stop( true, true ).fadeOut();
				} else {
					$this.attr( 'title', NavigationTitleHide )
						.siblings( ':not(.NavHead)' ).stop( true, true ).fadeIn();
				}
			}).click();
		});
	});
}

$(document).ready( collapsible_navigation );