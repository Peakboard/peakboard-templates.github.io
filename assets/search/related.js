---
layout: null
---

var main = {

    init: function () {
        // general settings for instant search
        const search = instantsearch({
            searchClient: algoliasearch(
                'XEVVIEZWKI',
                'a2863cd9e238db68f660bcd8137888df'
            ),
            appId: 'XEVVIEZWKI',
            apiKey: 'a2863cd9e238db68f660bcd8137888df',
            indexName: 'PEAKBOARD_EPIC_BOARDS',
            routing: true,
            searchParameters: {
                filters: 'NOT search-ignore:true AND NOT draft:true AND lang:"' + document.querySelector('#language').innerHTML + '"'
            },
            limit: 3
        });

        // initialize Hits
        search.addWidget(
            instantsearch.widgets.infiniteHits({
                container: '#hits',
                templates: {
                    item: document.querySelector('#hit-template').innerHTML,
                    empty: document.querySelector('#no-results-template').innerHTML
                },
                transformItems(items) {
                    return items.map(item => ({
                        ...item,
                        imageUrl: item.url.substr(0, item.url.lastIndexOf("/")) + '/' + item.image,
                    }));
                },
            })
        );

        search.start();
    }
};

document.addEventListener('DOMContentLoaded', main.init);
