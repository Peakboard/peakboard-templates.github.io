---
layout: null
---

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }
function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var main = {
    init: function init() {
        // general settings for instant search
        var search = instantsearch({
            searchClient: algoliasearch('XEVVIEZWKI', 'a2863cd9e238db68f660bcd8137888df'),
            appId: 'XEVVIEZWKI',
            apiKey: 'a2863cd9e238db68f660bcd8137888df',
            indexName: 'PEAKBOARD_EPIC_BOARDS',
            routing: true,
            searchParameters: {
                filters: 'NOT search-ignore:true AND NOT isDraft:true AND lang:"' + document.querySelector('#language').innerHTML + '"'
            },
            searchFunction: function searchFunction(helper) {
                search.helper.once('result', function () {
                    var event = document.createEvent('Event');
                    event.initEvent('searchCompleted', true, true);
                    document.dispatchEvent(event);
                });

                helper.search();
            },
            hitsPerPage: 200
        });
        search.addWidget(instantsearch.widgets.configure({
            hitsPerPage: 200
        })); // initialize SearchBox

        search.addWidget(instantsearch.widgets.searchBox({
            container: '#search-box',
            placeholder: document.querySelector('#search-box-text').innerHTML,
            poweredBy: false
        })); // initialize Hits

        search.addWidget(instantsearch.widgets.infiniteHits({
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
        }));
        var renderMenuCategory = instantsearch.connectors.connectMenu(function (_ref, isFirstRender) {
            var items = _ref.items,
                refine = _ref.refine,
                widgetParams = _ref.widgetParams;

            // obtain list of items, split because they are separated by a comma, and sort alphabetically
            var itemsSimpleArray = widgetParams.itemsList.split(',');

            // make new array of objects
            var itemsArray = [];
            // obtain name for 'All' category, functioning as a reset
            var allCategory = document.getElementById('all-category').innerHTML;
            // obtain name for 'Featured' category, functioning as a reset
            var featuredCategory = document.getElementById('featured-category').innerHTML;

            // if value of url param 'menu[category]' does not exist in itemsSimpleArray, add it. (also check on Featured as it's added later too)
            if(getUrlVars()["menu%5Bcategory%5D"] !== undefined
                && itemsSimpleArray.indexOf(getUrlVars()["menu%5Bcategory%5D"]) === -1
                && getUrlVars()["menu%5Bcategory%5D"] !== document.getElementById('featured-category').innerHTML) {

                itemsSimpleArray.push(decodeURI(getUrlVars()["menu%5Bcategory%5D"]));
            }

            // iterate through list of items, making them into an object
            for (var i = 0; i < itemsSimpleArray.length; i++) {
                itemsArray.push({
                    label: itemsSimpleArray[i],
                    value: itemsSimpleArray[i]
                });
            }

            // sort the itemsArray
            itemsArray.sort((a,b) => (a.label > b.label) ? 1 : ((b.label > a.label) ? -1 : 0));

            // push 'Featured' option, with empty value, at the 2nd position in the array.
            itemsArray.splice(0, 0, {
                label: featuredCategory,
                value: featuredCategory
            });

            // push 'All' option, with empty value, at the 2nd position in the array.
            itemsArray.splice(1, 0, {
                label: allCategory,
                value: ' '
            });

            // build a list of elements
            var list = itemsArray.map(function (_ref2) {
                var staticLabel = _ref2.label,
                    value = _ref2.value;

                var _ref3 = items.find(function (_ref4) {
                        var label = _ref4.label;
                        return label === staticLabel;
                    }) || {
                        isRefined: false
                    },
                    isRefined = _ref3.isRefined;

                return "<a class='ais-Menu-link " + (isRefined ? 'ais-Menu-link-active' : '') + "' href='#category=" + staticLabel + "' data-value='" + value + "'><span class='ais-Menu-label'>" + staticLabel + "</span> </a>";
            });

            // define the container contents, including the list with actual menu items
            widgetParams.container.innerHTML = "\n<div class=\"ais-Menu\">\n<ul class=\"ais-Menu-list\">\n".concat(list.join(''), "\n</ul>\n</div>\n");

            // loop through all links and add a click event to each of them
            _toConsumableArray(widgetParams.container.querySelectorAll('a')).forEach(function (element) {
                element.addEventListener('click', function (event) {
                    // clear any current refinement
                    var clearButton = document.getElementById("clear");
                    if (clearButton) clearButton.click();

                    if (event.currentTarget.dataset.value === document.getElementById('featured-category').innerHTML) {
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

            // if the first render is done AND there is no category already filtered, select Featured as default.
            if(isFirstRender && getUrlVars()["menu%5Bcategory%5D"] === undefined) {
                // default selection
                refine(document.getElementById('featured-category').innerHTML);
            }
        });
        search.addWidgets([renderMenuCategory({
            attribute: 'category',
            container: document.getElementById('categories'),
            itemsList: document.getElementById('visible-categories').innerHTML
        })]);
        var renderMenuSources = instantsearch.connectors.connectMenu(function (_ref5, isFirstRender) {
            var items = _ref5.items,
                refine = _ref5.refine,
                widgetParams = _ref5.widgetParams;

            // obtain list of items, split because they are separated by a comma, and sort alphabetically
            var itemsSimpleArray = widgetParams.itemsList.split(',');
            // make new array of objects
            var itemsArray = [];
            // obtain name for 'All' category, functioning as a reset
            var allCategory = document.getElementById('all-category').innerHTML;

            // push 'All' option, with empty value
            itemsArray.push({
                label: allCategory,
                value: ' '
            });

            // if value of url param 'menu[category]' does not exist in itemsSimpleArray, add it.
            if(itemsSimpleArray.indexOf(getUrlVars()["menu[overview_data_sources]"]) !== -1) {
                itemsSimpleArray.push(getUrlVars()["menu[overview_data_sources]"]);
            }

            // iterate through list of items, making them into an object
            for (var i = 0; i < itemsSimpleArray.length; i++) {
                itemsArray.push({
                    label: itemsSimpleArray[i],
                    value: itemsSimpleArray[i]
                });
            }

            // build a list of elements
            var list = itemsArray.map(function (_ref6) {
                var staticLabel = _ref6.label,
                    value = _ref6.value;

                var _ref7 = items.find(function (_ref8) {
                        var label = _ref8.label;
                        return label === staticLabel;
                    }) || {
                        isRefined: false
                    },
                    isRefined = _ref7.isRefined;

                return "<a class='ais-Menu-link " + (isRefined ? 'ais-Menu-link-active' : '') + "' href='#category=" + staticLabel + "' data-value='" + value + "'><span class='ais-Menu-label'>" + staticLabel + "</span> </a>";
            });

            // define the container contents, including the list with actual menu items
            widgetParams.container.innerHTML = "\n<div class=\"ais-Menu\">\n<ul class=\"ais-Menu-list\">\n".concat(list.join(''), "\n</ul>\n</div>\n");

            // loop through all links and add a click event to each of them
            _toConsumableArray(widgetParams.container.querySelectorAll('a')).forEach(function (element) {
                element.addEventListener('click', function (event) {
                    // clear any current refinement
                    var clearButton = document.getElementById("clear");
                    if (clearButton) clearButton.click();
                    event.preventDefault();
                    refine(event.currentTarget.dataset.value);
                });
            });
        });

        // don't add the widget if there are no data sources.
        if(document.getElementById('visible-data-sources').innerHTML !== "") {
            search.addWidgets([renderMenuSources({
                attribute: 'overview_data_sources',
                container: document.getElementById('sources'),
                itemsList: document.getElementById('visible-data-sources').innerHTML
            })]);
        }

        var renderClearRefinements = function renderClearRefinements(renderOptions, isFirstRender) {
            var hasRefinements = renderOptions.hasRefinements,
                refine = renderOptions.refine,
                widgetParams = renderOptions.widgetParams;

            if (isFirstRender) {
                var button = document.createElement('button');
                button.id = 'clear';
                button.textContent = 'Clear refinements';
                button.addEventListener('click', function () {
                    refine();
                });
                widgetParams.container.appendChild(button);
            }

            widgetParams.container.querySelector('button').disabled = !hasRefinements;
        };

        var customClearRefinements = instantsearch.connectors.connectClearRefinements(renderClearRefinements);
        search.addWidgets([customClearRefinements({
            container: document.querySelector('#clear-refinements')
        })]);

        // handle carousel in case we're coming from an article
        if(getUrlVars()["fromArticle"]) {
            addClass(document.getElementById('carousel'), 'hidden');
            removeClass(document.getElementById('hits-container'), 'mt-8');
        }

        search.start();
    }
};

function getUrlVars() {
    var vars = [],
        hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');

    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }

    return vars;
}

function addClass(el, className) {
    if (el.classList) el.classList.add(className);else if (!hasClass(el, className)) el.className += " " + className;
}

function removeClass(el, className) {
    if (el.classList) el.classList.remove(className);else if (hasClass(el, className)) {
        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
        el.className = el.className.replace(reg, ' ');
    }
}

document.addEventListener('DOMContentLoaded', main.init);
