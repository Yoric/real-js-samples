if(void 0===uniblogSoy)var uniblogSoy={};if(void 0===uniblogSoy.templates&&(uniblogSoy.templates={}),uniblogSoy.templates.imageFeatures=function(e,t){var s='<div class="uni-image-features"><figure><img src="'+soy.$$escapeHtml(e.image)+'" alt="'+soy.$$escapeHtml(e.title)+'"></figure><section><div class="uni-image-features-details"><h1>'+soy.$$escapeHtml(e.title)+"</h1>"+(e.subtitle?"<h2>"+soy.$$escapeHtml(e.subtitle)+"</h2>":"");if(e.tags.length){s+='<div class="uni-image-features-tags uni-click-tracker hide-small"><nav data-analytics=\'{"category": "landing page lead", "action": "asset"}\'><span>Posted in:</span>';for(var a=e.tags,i=a.length,l=0;l<i;l++){var o=a[l];s+="null"!=o.url?'<a href="'+soy.$$escapeHtml(o.url)+'" data-analytics=\'{"label": "'+soy.$$escapeHtml(o.analytics_type)+": {name}\"}'>"+soy.$$escapeHtml(o.name)+"</a>":'<a class="uni-link-disabled">'+soy.$$escapeHtml(o.name)+"</a>"}s+="</nav></div>"}return s+='</div><div class="uni-image-features-download"><div class="uni-image-features-download-button uni-click-tracker" data-analytics=\'{"category": "download", "action": "asset", "label": "asset: '+soy.$$escapeHtml(e.title)+'"}\'><a class="hide-small" href="'+soy.$$escapeHtml(e.url)+'">Download image</a><a class="show-small" href="'+soy.$$escapeHtml(e.url)+'">Download</a></div><span class="hide-small">'+soy.$$escapeHtml(e.width)+"x"+soy.$$escapeHtml(e.height)+" pixels</span>"+("None"!=e.file_size?'<span class="hide-small"> - '+soy.$$escapeHtml(Math.round(e.file_size/1048576*100)/100)+" Mb</span>":"")+"</div></section></div>"},void 0===uniblogSoy)uniblogSoy={};if(void 0===uniblogSoy.templates&&(uniblogSoy.templates={}),uniblogSoy.templates.latestArticleItem=function(e,t){return'<a href="'+soy.$$escapeHtml(e.articleItem.url)+'" class="feed-article"><section class="feed-article__content"><header class="feed-article__eyebrow h-c-eyebrow">'+soy.$$filterNoAutoescape(e.articleItem.client_eyebrow)+'</header><h3 class="feed-article__title">'+soy.$$escapeHtml(e.articleItem.headline)+"</h3></section>"+(e.articleItem.hero?'<div><figure class="feed-article__image" style="background-image: url(\''+soy.$$escapeHtml(e.articleItem.hero)+"');\"></figure></div>":"")+"</a>"},uniblogSoy.templates.articleItem=function(e,t){return'<a href="'+soy.$$escapeHtml(e.url)+'" class="feed-article"><section class="feed-article__content"><header class="feed-article__ey type-ahead-listebrow h-c-eyebrow">'+soy.$$filterNoAutoescape(e.eyebrow)+'</header><h3 class="feed-article__title">'+soy.$$escapeHtml(e.headline)+"</h3></section>"+(e.hero?'<div><figure class="feed-article__image" style="background-image: url(\''+soy.$$escapeHtml(e.hero)+"');\"></figure></div>":"")+"</a>"},void 0===uniblogSoy)uniblogSoy={};if(void 0===uniblogSoy.templates&&(uniblogSoy.templates={}),uniblogSoy.templates.newsItem=function(e,t){return'<a href="'+soy.$$escapeHtml(e.url)+'">'+uniblogSoy.templates.responsiveImage({figure:e.image_obj})+'<div class="uni-article-item-header '+soy.$$escapeHtml(e.accent_color)+'">'+(e.primary_tag_obj?"<span>"+soy.$$escapeHtml(e.primary_tag_obj.display_name)+"</span>":"")+"</div><h2>"+soy.$$escapeHtml(e.title)+"</h2></a>"},void 0===uniblogSoy)uniblogSoy={};if(void 0===uniblogSoy.templates&&(uniblogSoy.templates={}),uniblogSoy.templates.pressAsset=function(e,t){return'<div class="press-item h-u-mb-l h-c-grid__col h-c-grid__col--6 h-c-grid__col-s--4 h-c-grid__col-m--6 h-c-grid__col-l--4"><a aria-label="'+soy.$$escapeHtml(e.asset.title)+'" data-glue-modal-trigger="modal-name-'+soy.$$escapeHtml(e.asset.slug)+'" href="#modal-id-'+soy.$$escapeHtml(e.asset.slug)+'" class="uni-click-tracker" data-analytics=\'{"category": "asset view", "action": "asset", "label": "asset: '+soy.$$escapeHtml(e.asset.download_url)+'"}\'><div class="press-item__thumbnail" style="background-image:url('+soy.$$escapeHtml(e.asset.image_url)+')"></div></a><div class="press-item__info h-u-mb-l h-u-mt-std"><div class="press-item__info-text">'+(e.asset.title?'<h4 class="press-item__title">'+soy.$$escapeHtml(e.asset.title)+"</h4>":"")+(e.asset.subtitle?'<h5 class="h-c-footnote">'+soy.$$escapeHtml(e.asset.subtitle)+"</h5>":"")+'</div><a class="press-item__dl-btn uni-click-tracker" href="'+soy.$$escapeHtml(e.asset.download_url)+'" aria-label="Download '+soy.$$escapeHtml(e.asset.title)+'" data-analytics=\'{"category": "download", "action": "asset", "label": "asset: {slug}"}\' download><svg aria-hidden="true" class="h-c-icon h-c-icon--social h-c-icon--30px" viewBox="0 0 30 30"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#mi-arrow-sort"></use></svg></a></div><div id="modal-id-'+soy.$$escapeHtml(e.asset.slug)+'" data-glue-modal="modal-name-'+soy.$$escapeHtml(e.asset.slug)+'" data-glue-modal-close-label="Close Dialog" class="h-c-modal h-c-modal--uni-press-modal">'+uniblogSoy.templates.pressModalContent({title:e.asset.title,subtitle:e.asset.subtitle,image:e.asset.download_url,image_size:e.asset.image_size,image_url:e.asset.download_url,image_width:e.asset.image_width,image_height:e.asset.image_height})+"</div></div>"},void 0===uniblogSoy)uniblogSoy={};if(void 0===uniblogSoy.templates&&(uniblogSoy.templates={}),uniblogSoy.templates.pressModalContent=function(e,t){return'<div class="press-modal"><div class="press-modal__image" style="background-image: url('+soy.$$escapeHtml(e.image)+')" aria-label="'+soy.$$escapeHtml(e.title)+'" role="img"></div><section class="press-modal__meta"><div class="press-modal__titles"><h2>'+soy.$$escapeHtml(e.title)+"</h2>"+(e.subtitle?'<h3 class="h-c-eyebrow">'+soy.$$escapeHtml(e.subtitle)+"</h3>":"")+"</div>"+uniblogSoy.templates.pressModalDownloadAssetInfo(e)+"</section></div>"},uniblogSoy.templates.pressModalDownloadAssetInfo=function(e,t){return'<div class="press-modal__asset">'+uniblogSoy.templates.pressModalDownloadBtn(e)+"<span class='h-c-footnote press-modal__asset-data h-u-mt-std'>"+soy.$$escapeHtml(e.image_width)+"x"+soy.$$escapeHtml(e.image_height)+" pixels"+("None"!=e.image_size?" - "+soy.$$escapeHtml(Math.round(e.image_size/1048576*100)/100)+" Mb":"")+"</div></div>"},uniblogSoy.templates.pressModalDownloadBtn=function(e,t){return'<a class="h-c-eyebrow press-modal__download uni-click-tracker" href="'+soy.$$escapeHtml(e.image_url)+'" data-analytics=\'{"category": "download", "action": "asset", "label": "asset: {slug}"}\' download><div class="press-modal__dl-btn"><svg aria-hidden="true" class="h-c-icon h-c-icon--social h-c-icon--30px" viewBox="0 0 30 30"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#mi-arrow-sort"></use></svg></div><span class="press-modal__download-text">Download image</span></a>'},void 0===uniblogSoy)uniblogSoy={};if(void 0===uniblogSoy.templates&&(uniblogSoy.templates={}),uniblogSoy.templates.qnaItem=function(e,t){return'<div class="q-a__item h-c-grid"><div class="h-c-grid__col h-c-grid__col-l--6 h-c-grid__col-l--offset-2 h-c-grid__col-s--4"><div class="q-a__question h-u-mb-xl"><div class="q-a__content"><h3 class="h-c-headline h-c-headline--three">'+soy.$$escapeHtml(e.qnaArticle.question)+'</h3><p class="h-u-text-right h-u-mt-l"><span class="h-u-font-weight-regular">'+soy.$$escapeHtml(e.qnaArticle.question_author)+"</span><br><span>"+soy.$$escapeHtml(e.qnaArticle.question_author_bio)+'</span></p></div></div><div class="q-a__answer h-u-mt-xl"><div class="q-a__content q-a__answer--content h-u-mb-xl">'+soy.$$filterNoAutoescape(e.qnaArticle.answer)+'<p class="h-u-text-right h-u-mt-l"><span class="h-u-font-weight-regular">'+soy.$$escapeHtml(e.qnaArticle.author)+"</span><br><span>"+soy.$$escapeHtml(e.qnaArticle.answer_date)+'</span></p></div></div></div><div class="qa-single-detail--share h-c-grid__col h-c-grid__col-l--1 h-c-grid__col-l--offset-1 h-c-grid__col-s--12">'+uniblogSoy.templates.qnaShare({id:e.qnaArticle.id,social:e.qnaArticle.social})+"</div></div>"},uniblogSoy.templates.qnaShare=function(e,t){return'<nav class="uni-click-tracker" data-analytics=\'{"category": "social", "action": "share"}\'><a aria-label="Share on Google Plus" class="article-share__link" href="'+soy.$$escapeHtml(e.social.google_plus)+'" target="_blank" data-analytics=\'{"label": "g+"}\'><svg aria-hidden="true" class="h-c-icon h-c-icon--social h-c-icon--30px" viewBox="0 0 30 30"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#social-gplus"></use></svg></a><a aria-label="Share on Facebook" class="article-share__link" href="'+soy.$$escapeHtml(e.social.facebook)+'" target="_blank" data-analytics=\'{"label": "facebook"}\'><svg aria-hidden="true" class="h-c-icon h-c-icon--social h-c-icon--30px" viewBox="0 0 30 30"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#social-facebook"></use></svg></a><a aria-label="Share on Twitter" class="article-share__link" href="'+soy.$$escapeHtml(e.social.twitter)+'" target="_blank" data-analytics=\'{"label": "twitter"}\'><svg aria-hidden="true" class="h-c-icon h-c-icon--social h-c-icon--30px" viewBox="0 0 30 30"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#social-twitter"></use></svg></a><a aria-label="Share on LinkedIn" class="article-share__link" href="'+soy.$$escapeHtml(e.social.linkedin)+'" target="_blank" data-analytics=\'{"label": "linkedin"}\'><svg aria-hidden="true" class="h-c-icon h-c-icon--social h-c-icon--30px" viewBox="0 0 30 30"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#social-linkedin"></use></svg></a><a aria-label="Share with Email" class="article-share__link" href="'+soy.$$escapeHtml(e.social.mail)+'" target="_blank" data-analytics=\'{"label": "email"}\'><svg aria-hidden="true" class="h-c-icon h-c-icon--social h-c-icon--30px" viewBox="0 0 30 30"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#social-mail"></use></svg></a><div class="copy-link mobile"><div class="copy-link__popover" glue-popover><div class="glue-c-popover__trigger copy-link__trigger h-c-header__cta-li-link"><svg role="img" class="h-c-icon h-c-icon--color-text" title="Share" id="copy-popover-icon"><use xlink:href="#social-link"></use></svg></div><div class="glue-c-popover__dialog copy-link__content" aria-labelledby="copy-popover-icon"><input class="h-c-copy  copy-link__url" value="'+soy.$$escapeHtml(e.social.copy)+'" id="copy-link-'+soy.$$escapeHtml(e.id)+'" readonly="readonly" type="text" /><button class="copy-link__copy-btn cta" glue-copy="copy-link-'+soy.$$escapeHtml(e.id)+'" glue-copy-success="Copied to clipboard" glue-copy-fail="Press Ctrl+C or ⌘+C to copy">Copy link</button><div class="glue-c-popover__close-btn h-u-visually-hidden" aria-label="Close">×</div></div></div></div></nav>'},void 0===uniblogSoy)uniblogSoy={};if(void 0===uniblogSoy.templates&&(uniblogSoy.templates={}),uniblogSoy.templates.responsiveImage=function(e,t){var s="";if(e.figure&&e.figure.sources&&e.figure.sources.length){s+="<figure "+(e.cssClass?'class="'+soy.$$escapeHtml(e.cssClass)+'"':"")+"><picture>";for(var a=e.figure.sources,i=a.length,l=0;l<i;l++){var o=a[l];s+='<source media="'+soy.$$escapeHtml(o.media)+'" sizes="'+soy.$$escapeHtml(o.width)+'px" srcset="'+soy.$$escapeHtml(o.srcset)+'">'}s+='<img src="'+soy.$$escapeHtml(e.figure.src)+'"'+(e.alt?'alt="'+soy.$$escapeHtml(e.alt)+'"':'alt="'+soy.$$escapeHtml(e.figure.alt)+'"')+'sizes="'+soy.$$escapeHtml(e.figure.sizes)+'" srcset="'+soy.$$escapeHtml(e.figure.srcset)+'"></picture></figure>'}return s},void 0===uniblogSoy)uniblogSoy={};void 0===uniblogSoy.templates&&(uniblogSoy.templates={}),uniblogSoy.templates.featuredPerspectiveTweet=function(e,t){return'<div class="twitter-feed__simple-tweet-wrapper"><div class="twitter-feed__tweet-header"><div class="twitter-feed__user-info"><a href="https://twitter.com/'+soy.$$escapeHtml(e.tweet.user_name)+'" target="_blank"><span class="h-c-copy twitter-feed__user-name">'+soy.$$escapeHtml(e.tweet.user_screen_name)+'</span><span class="twitter-feed__user-handle">@'+soy.$$escapeHtml(e.tweet.user_name)+'</span></a></div><svg aria-hidden="true" class="twitter-feed__twitter-logo h-c-icon h-c-icon--social h-c-icon--15px" viewBox="0 0 15 15"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#social-twitter"></use></svg></div><div class="twitter-feed__tweet-body"><p class="h-has-bottom-margin h-c-headline h-c-headline--subhead">'+soy.$$filterNoAutoescape(e.tweet.text)+"</p></div>"+uniblogSoy.templates.tweetFooter(e)+"</div>"},uniblogSoy.templates.twitterFeeds=function(e,t){return'<div class="twitter-feed__tweet uni-click-tracker h-c-grid__col h-c-grid__col--6 h-c-grid__col-s--4 h-c-grid__col-m--6 h-c-grid__col-l--4" data-analytics=\'{"category": "social", "action": "twitter nav click"}\'>'+uniblogSoy.templates.tweetContents(e)+"</div>"},uniblogSoy.templates.tweetContents=function(e,t){return'<div class="twitter-feed__tweet-header"><div class="twitter-feed__user-icon" style="background-image: url('+soy.$$escapeHtml(e.tweet.user_picture)+')"></div>'+uniblogSoy.templates.twitterUserInfo(e)+'<svg aria-hidden="true" class="twitter-feed__twitter-logo h-c-icon h-c-icon--social h-c-icon--15px" viewBox="0 0 15 15"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#social-twitter"></use></svg></div><div class="twitter-feed__tweet-body"><p class="h-has-bottom-margin twitter-feed__tweet-copy">'+soy.$$filterNoAutoescape(e.tweet.text)+"</p>"+uniblogSoy.templates.tweetEntities({entities:e.tweet.entities})+"</div>"+uniblogSoy.templates.tweetFooter(e)},uniblogSoy.templates.tweetFooter=function(e,t){return'<div class="twitter-feed__tweet-footer">'+uniblogSoy.templates.tweetIntents({tweet:e.tweet,intentActions:["retweet","like"]})+'<time class="twitter-feed__datetime uni-time-since" datetime="'+soy.$$escapeHtml(e.tweet.created_at)+'"></time></div>'},uniblogSoy.templates.twitterUserInfo=function(e,t){return'<div class="twitter-feed__user-info"><a href="https://twitter.com/'+soy.$$escapeHtml(e.tweet.user_name)+'" target="_blank"><span class="h-c-copy twitter-feed__user-name">'+soy.$$escapeHtml(e.tweet.user_screen_name)+'</span><span class="twitter-feed__user-handle">@'+soy.$$escapeHtml(e.tweet.user_name)+"</span></a></div>"},uniblogSoy.templates.tweetEntities=function(e,t){var s="";if(e.entities&&e.entities.media)for(var a=e.entities.media,i=a.length,l=0;l<i;l++){var o=a[l];s+="photo"==o.type?'<div class="twitter-feed__image" style="background-image: url(\''+soy.$$escapeHtml(o.media_url_https)+"')\"></div>":""}return s},uniblogSoy.templates.tweetIntents=function(e,t){for(var s='<div class="twitter-feed__intents">',a=e.intentActions,i=a.length,l=0;l<i;l++){var o=a[l];s+='<a class="twitter-feed__intent-action uni-click-tracker" href="https://twitter.com/intent/'+soy.$$escapeHtml(o)+"?tweet_id="+soy.$$escapeHtml(e.tweet.id)+'" target="_blank" aria-label="Twitter: '+soy.$$escapeHtml(o)+'" data-analytics=\'{"event": "page interaction", "eventCategory": "social", "eventAction": "twitter intent", "eventLabel": "'+soy.$$escapeHtml(o)+'"}\'><svg aria-hidden="true" class="h-c-icon h-c-icon--social h-c-icon--20px" viewBox="0 0 20 20"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#social-twitter-'+soy.$$escapeHtml(o)+'"></use></svg></a>'}return s+='<a class="twitter-feed__intent-action uni-click-tracker" href="https://twitter.com/intent/tweet?in_reply_to='+soy.$$escapeHtml(e.tweet.id)+'" target="_blank" aria-label="Twitter: Reply" data-analytics=\'{"event": "page interaction", "eventCategory": "social", "eventAction": "twitter intent", "eventLabel": "reply"}\'><svg aria-hidden="true" class="h-c-icon h-c-icon--social h-c-icon--20px" viewBox="0 0 20 20"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#social-twitter-in_reply_to"></use></svg></a></div>'};