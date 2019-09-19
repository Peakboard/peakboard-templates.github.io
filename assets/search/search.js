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
                filters: 'NOT search-ignore:true AND NOT isDraft:true AND lang:"' + document.querySelector('#language').innerHTML + '"'
            },
            searchFunction(helper) {
                if(getUrlVars()["fromHomepage"]) {
                    $('.ais-search-box--input').val(decodeURI(getUrlVars()["fromHomepage"]));
                    helper.setQuery(decodeURI(getUrlVars()["fromHomepage"])).search();
                } else {
                    helper.search();
                }
            },
            hitsPerPage: 200
        });

        search.addWidget(
            instantsearch.widgets.configure({
                hitsPerPage: 200
            })
        );

        // initialize SearchBox
        search.addWidget(
            instantsearch.widgets.searchBox({
                container: '#search-box',
                placeholder: (getUrlVars()["fromHomepage"] ? decodeURI(getUrlVars()["fromHomepage"]) : document.querySelector('#search-box-text').innerHTML),
                poweredBy: false
            })
        );

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
                        imageUrl: item.url.substr(0, item.url.lastIndexOf("/")) + '/' + item.image_thumbnail,
                    }));
                },
            })
        );

        search.addWidget(
            instantsearch.widgets.menu({
                container: '#categories',
                attribute: 'category',
                limit: 20,
                sortBy: ['name:asc'],
                templates: {
                    item(data) {
                        const { label, url, cssClasses, isRefined } = data;

                        return `
                            <a class="${cssClasses.link} ${isRefined ? 'ais-Menu-link-active' : ''}" href="${url}">
                              <span class="${cssClasses.label}">${label}</span>
                            </a>
                          `;
                    },
                },
            })
        );

        search.addWidget(
            instantsearch.widgets.menu({
                container: '#sources',
                attribute: 'overview_data_sources',
                limit: 20,
                sortBy: ['name:asc'],
                templates: {
                    item(data) {
                        const { label, url, cssClasses, isRefined } = data;

                        return `
                            <a class="${cssClasses.link} ${isRefined ? 'ais-Menu-link-active' : ''}" href="${url}">
                              <span class="${cssClasses.label}">${label}</span>
                            </a>
                          `;
                    },
                },
            })
        );

        search.start();
    }
};

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

document.addEventListener('DOMContentLoaded', main.init);
