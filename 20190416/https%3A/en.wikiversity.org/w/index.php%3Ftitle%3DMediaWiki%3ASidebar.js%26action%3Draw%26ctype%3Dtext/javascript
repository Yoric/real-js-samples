//Modify Sidebar.  Code based on example at https://www.mediawiki.org/wiki/Manual:Interface/Sidebar.

function ModifySidebar( action, section, name, link ) {
	try {
		switch ( section ) {
			case 'languages':
				var target = 'p-lang';
				break;
			case 'toolbox':
				var target = 'p-tb';
				break;
			case 'navigation':
				var target = 'p-navigation';
				break;
			default:
				var target = 'p-' + section;
				break;
		}

		if ( action == 'add' ) {
			var node = document.getElementById( target )
							   .getElementsByTagName( 'div' )[0]
							   .getElementsByTagName( 'ul' )[0];

			var aNode = document.createElement( 'a' );
			var liNode = document.createElement( 'li' );

			aNode.appendChild( document.createTextNode( name ) );
			aNode.setAttribute( 'href', link );
			liNode.appendChild( aNode );
			liNode.className = 'plainlinks';
			node.appendChild( liNode );
		}

		if ( action == 'remove' ) {
			var list = document.getElementById( target )
							   .getElementsByTagName( 'div' )[0]
							   .getElementsByTagName( 'ul' )[0];

			var listelements = list.getElementsByTagName( 'li' );

			for ( var i = 0; i < listelements.length; i++ ) {
				if (
					listelements[i].getElementsByTagName( 'a' )[0].innerHTML == name ||
					listelements[i].getElementsByTagName( 'a' )[0].href == link
				)
				{
					list.removeChild( listelements[i] );
				}
			}
		}

	} catch( e ) {
		// let's just ignore what's happened
		return;
	}
}

function CustomizeModificationsOfSidebar() {
	if(mw.config.get( 'wgNamespaceNumber') == 0) //Add for main namespace only.
	{
		ModifySidebar( 'add', 'toolbox', 
			'Cite this page', 'https://en.wikiversity.org/wiki/Special:CiteThisPage?page=' + 
			mw.config.get( 'wgPageName' ) );
	}
}

//Code is loading without the jQuery call.
//CusomizeModificationsOfSidebar must be called somewhere else.
//jQuery( CustomizeModificationsOfSidebar );