---
layout: null
---

var main = {

    init: function init() {
        // general settings for instant search
        const search = instantsearch({
            searchClient: algoliasearch(
                '2XY771TXDR',
                'c82c049e37ffd8c7b7ae85376cd49911'
            ),
            appId: '2XY771TXDR',
            apiKey: 'c82c049e37ffd8c7b7ae85376cd49911',
            indexName: 'peakboard-templates',
            routing: true,
            searchParameters: {
                filters: 'NOT search-ignore:true AND NOT isDraft:true AND lang:"' + document.querySelector('#language').innerHTML + '"'
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
                transformItems: function transformItems(items) {
                    return items.map(function (item) {
                        return { ...item,
                            imageUrl: item.url.substr(0, item.url.lastIndexOf("/")) + '/' + (item.image_thumbnail ? item.image_thumbnail : item.image)
                        };
                    });
                },
            })
        );

        search.start();
    }
};

document.addEventListener('DOMContentLoaded', main.init);
