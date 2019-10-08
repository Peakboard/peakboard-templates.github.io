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

        const renderMenuCategory = instantsearch.connectors.connectMenu(
            ({ items, refine, widgetParams }, isFirstRender) => {
                // obtain list of items, split because they are separated by a comma, and sort alphabetically
                var itemsSimpleArray = widgetParams.itemsList.split(',');
                // make new array of objects
                var itemsArray = [];
                // obtain name for 'All' category, functioning as a reset
                var allCategory = document.getElementById('all-category').innerHTML;
                // push 'All' option, with empty value
                itemsArray.push({ label: allCategory, value: ' ' });

                // iterate through list of items, making them into an object
                for (var i = 0; i < itemsSimpleArray.length; i++) {
                    itemsArray.push({ label: itemsSimpleArray[i], value: itemsSimpleArray[i] });
                }

                // build a list of elements
                var list = itemsArray.map(
                    ({label: staticLabel, value}) => {
                        const { isRefined } = items.find(
                            ({label}) => label === staticLabel
                        ) || {
                            isRefined: false,
                        };

                        return "<a class='ais-Menu-link " + (isRefined ? 'ais-Menu-link-active' : '') + "' href='#category=" + staticLabel + "' data-value='" + value + "'><span class='ais-Menu-label'>" + staticLabel + "</span> </a>";
                    }
                );

                // define the container contents, including the list with actual menu items
                widgetParams.container.innerHTML = `
                    <div class="ais-Menu">
                      <ul class="ais-Menu-list">
                        ${list.join('')}
                      </ul>
                    </div>
                `;

                // loop through all links and add a click event to each of them
                [...widgetParams.container.querySelectorAll('a')].forEach(element => {
                    element.addEventListener('click', event => {
                        // clear any current refinement
                        var clearButton = document.getElementById("clear");
                        if(clearButton) clearButton.click();

                        if(event.currentTarget.dataset.value === document.getElementById('featured-category').innerHTML) {
                            removeClass(document.getElementById('carousel'), 'hidden');
                            addClass(document.getElementById('hits-container'), 'mt-8');
                        } else {
                            addClass(document.getElementById('carousel'), 'hidden');
                            removeClass(document.getElementById('hits-container'), 'mt-8');
                        }

                        event.preventDefault();
                        refine(event.currentTarget.dataset.value);
                    });
                });
            }
        );

        search.addWidgets([
            renderMenuCategory({
                attribute: 'category',
                container: document.getElementById('categories'),
                itemsList: document.getElementById('visible-categories').innerHTML,
            })
        ]);

        const renderMenuSources = instantsearch.connectors.connectMenu(
            ({ items, refine, widgetParams }, isFirstRender) => {

                // obtain list of items, split because they are separated by a comma, and sort alphabetically
                var itemsSimpleArray = widgetParams.itemsList.split(',');
                // make new array of objects
                var itemsArray = [];
                // obtain name for 'All' category, functioning as a reset
                var allCategory = document.getElementById('all-category').innerHTML;
                // push 'All' option, with empty value
                itemsArray.push({ label: allCategory, value: ' ' });

                // iterate through list of items, making them into an object
                for (var i = 0; i < itemsSimpleArray.length; i++) {
                    itemsArray.push({ label: itemsSimpleArray[i], value: itemsSimpleArray[i] });
                }

                // build a list of elements
                var list = itemsArray.map(
                    ({label: staticLabel, value}) => {
                        const { isRefined } = items.find(
                            ({label}) => label === staticLabel
                        ) || {
                            isRefined: false,
                        };

                        return "<a class='ais-Menu-link " + (isRefined ? 'ais-Menu-link-active' : '') + "' href='#category=" + staticLabel + "' data-value='" + value + "'><span class='ais-Menu-label'>" + staticLabel + "</span> </a>";
                    }
                );

                // define the container contents, including the list with actual menu items
                widgetParams.container.innerHTML = `
                    <div class="ais-Menu">
                      <ul class="ais-Menu-list">
                        ${list.join('')}
                      </ul>
                    </div>
                `;

                // loop through all links and add a click event to each of them
                [...widgetParams.container.querySelectorAll('a')].forEach(element => {
                    element.addEventListener('click', event => {
                        // clear any current refinement
                        var clearButton = document.getElementById("clear");
                        if(clearButton) clearButton.click();

                        event.preventDefault();
                        refine(event.currentTarget.dataset.value);
                    });
                });
            }
        );

        search.addWidgets([
            renderMenuSources({
                attribute: 'overview_data_sources',
                container: document.getElementById('sources'),
                itemsList: document.getElementById('visible-data-sources').innerHTML,
            })
        ]);

        const renderClearRefinements = (renderOptions, isFirstRender) => {
            const { hasRefinements, refine, widgetParams } = renderOptions;

            if (isFirstRender) {
                const button = document.createElement('button');
                button.id = 'clear';
                button.textContent = 'Clear refinements';

                button.addEventListener('click', () => {
                    refine();
                });

                widgetParams.container.appendChild(button);
            }

            widgetParams.container.querySelector('button').disabled = !hasRefinements;
        };

        const customClearRefinements = instantsearch.connectors.connectClearRefinements(
            renderClearRefinements
        );

        search.addWidgets([
            customClearRefinements({
                container: document.querySelector('#clear-refinements'),
            })
        ]);

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

function addClass(el, className) {
    if (el.classList)
        el.classList.add(className);
    else if (!hasClass(el, className))
        el.className += " " + className;
}

function removeClass(el, className) {
    if (el.classList)
        el.classList.remove(className);
    else if (hasClass(el, className))
    {
        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
        el.className = el.className.replace(reg, ' ');
    }
}

document.addEventListener('DOMContentLoaded', main.init);

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
