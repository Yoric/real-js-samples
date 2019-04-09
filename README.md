# About this repository

This repository contains JavaScript code extracted semi-automatically from
highly ranked webpages.

This data is published for two reasons:

- research;
- web compatibility tests.

The data is *not* owned by Mozilla. All these files were made publicly available
on third-party web sites. Mozilla has merely compiled data from around
the web to simplify the life of researchers and developers working own web
compatibility.

# Protocol we followed to obtain this data.

1. Establish list of pages to visit, using
    [Alexa top 50 webpages](https://www.alexa.com/topsites) at the time of visit.
2. Install extension https://github.com/binast/js-scrapper, to automatically save to
    disk some of the content sent by the website.
3. Visit each of the pages. Some pages were skipped as they required an account and did
    not support anonymous accounts.
4. Have arbitrary/random interactions with the pages, including clicking on arbitrary links,
    buttons, videos, moving the mouse randomly around the page, scrolling randomly.
5. Wait a few minutes before closing page.
6. Once browsing session is complete, run https://crates.io/crates/dedup on the result
    to remove duplicate files.

# Future

We intend to update irregularly the repository to mirror evolutions of the web.
