// Site Specific Omniture Settings
// Desc: This file is used to store site specific settings
// Note: Please enter the site name on the line below to identify the site.
// Site: Miami Herald
////////////////////////////////////////////////////////////////////////////

var mistats;
mistats = mistats || {};

// Site specific variables
mistats.sitename    = 'Miami Herald'; 	      	      					// Site Name
mistats.account     = 'nmmiami';                      					// Report Suite ID
mistats.bizunit     = 'MIA';                          					// Business Unit
mistats.pubname     = 'MA';                           					// Publication Code
mistats.regcookie   = 'miamiherald_user_auth';	      					// Insite Cookie Name
mistats.segcookie   = 'segments';                     					// Insite Segments Cookie Name

// Third Party
mistats.tacoda      = '17785';                        					// Tacoda ID
mistats.tyntid	    = 'user=aJ9aAabiSr36gxadbiUzgI&s=120';				// Tynt ID

mistats.listenerMarket = '74930296';

mistats.jsLoader = function (pUrl, pTrySync, pCallback)
{
   var id;
   var obj;

   function doAsync()
   {
      var ps;
      var scr;

      ps = mistats.sitefileNode || document.getElementsByTagName('head')[0];
      scr = ps.insertAdjacentElement('afterend', document.createElement('script'));
      scr.id = id;
      scr.async = 'async';
      scr.type = 'text/javascript';
      scr.src = pUrl;
   };

   if (!pUrl)
      return;

   id = 'mistats_js' + Math.round(Math.random() * 1000000);

   if (pTrySync && ((document.readyState || '').match(/loading|loaded/) || !document.body))
      try
      {
         document.write('<script id="' + id + '" type="text/javas' + 'cript" src="' + pUrl + '"></scr' + 'ipt>');
      } catch (err)
      {
         doAsync();
      }
   else
      doAsync();

   obj = document.getElementById(id);
   pCallback && obj && obj.addEventListener && (obj.addEventListener('load', pCallback, false));
};

(function ()
{
   var i;
   var objs;

   objs = document.getElementsByTagName('script');
   for (i = 0; !mistats.sitefileNode && i < objs.length; i++)
      (objs[i].src || '').match(/^https*:\/\/media\d?\.[^\.]+\.com\/mi\w+/i) && (mistats.sitefileNode = objs[i]);

   mistats.sitefileNode && mistats.sitefileNode.src && (mistats.mediaHost = mistats.sitefileNode.src.replace(/\/mi\w+.*/, ''));
   mistats.mediaHost = mistats.mediaHost || 'https://media.mcclatchyinteractive.com';

   mistats.jsLoader(mistats.mediaHost + '/misites/all/common.js');
   mistats.jsLoader(mistats.mediaHost + '/mistats/micb.js', true);
})();

