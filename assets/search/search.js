---
layout: null
---

var main = {

    init: function init() {
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
            searchFunction: function searchFunction(helper) {
                search.helper.once('result', function() {
                    var event = document.createEvent('Event');
                    event.initEvent('searchCompleted', true, true);
                    document.dispatchEvent(event);
                });

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
                transformItems: function transformItems(items) {
                    return items.map(function (item) {
                        return _objectSpread({}, item, {
                            imageUrl: item.url.substr(0, item.url.lastIndexOf("/")) + '/' + (item.image_thumbnail ? item.image_thumbnail : item.image)
                        });
                    });
                }
            })
        );

        search.addWidget(
            instantsearch.widgets.menu({
                container: '#categories',
                attribute: 'category',
                limit: 20,
                sortBy: ['name:asc'],
                templates: {
                    item: function item(data) {
                        var label = data.label,
                            url = data.url,
                            cssClasses = data.cssClasses,
                            isRefined = data.isRefined;

                        return "<a class='" + cssClasses.link + " " + (isRefined ? 'ais-Menu-link-active' : '') + "' href=" + url + "><span class='" + cssClasses.label + "'>" + label + "</span> </a>";
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
                    item: function item(data) {
                        var label = data.label,
                            url = data.url,
                            cssClasses = data.cssClasses,
                            isRefined = data.isRefined;

                        return "<a class='" + cssClasses.link + " " + (isRefined ? 'ais-Menu-link-active' : '') + "' href=" + url + "><span class='" + cssClasses.label + "'>" + label + "</span> </a>";
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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
