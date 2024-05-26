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
        var urlVars = getUrlVars();
        if(urlVars) {
            var urlTemplateCategory = decodeURIComponent(urlVars["menu%5Bcategory%5D"]);
            var urlExtensionCategory = decodeURIComponent(urlVars["menu%5Bextension_category%5D"]);
            var urlQuery = decodeURIComponent(urlVars["query"]);

            if(urlTemplateCategory && urlTemplateCategory !== "undefined") {
                // if template category in url when loading page, set as category
                localStorage.setItem('type', 'template');
                localStorage.setItem('category', urlTemplateCategory);
            } else if(urlExtensionCategory && urlExtensionCategory !== "undefined") {
                // if extension category in url when loading page, set as category
                localStorage.setItem('type', 'extension');
                localStorage.setItem('category', urlExtensionCategory);
            } else if(urlQuery && urlQuery !== "undefined") {
                // if query in url when loading page, set search query
                localStorage.setItem('type', 'search');
                localStorage.setItem('category', undefined);
            } else {
                // if no query or category in url when loading page, set to default type template and category all
                localStorage.setItem('type', 'template');
                var category = document.getElementById('all-templates').innerHTML;
                localStorage.setItem('category', category);
            }
        }

        // general settings for instant search
        var search = instantsearch({
            searchClient: algoliasearch('2XY771TXDR', 'c82c049e37ffd8c7b7ae85376cd49911'),
            appId: '2XY771TXDR',
            apiKey: 'c82c049e37ffd8c7b7ae85376cd49911',
            indexName: 'peakboard-templates',
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
        }));

        // render method for searchBox
        var customSearchBox = instantsearch.connectors.connectSearchBox(
            function (renderOptions, isFirstRender) {
                var query = renderOptions.query,
                    refine = renderOptions.refine,
                    clear = renderOptions.clear,
                    widgetParams = renderOptions.widgetParams;

                if (isFirstRender) {
                    // create and set attributes on form container
                    const formContainer = document.createElement('div');
                    addClass(formContainer, 'ais-SearchBox');

                    // add it to container
                    widgetParams.container.appendChild(formContainer);

                    // create and set attributes on form
                    const form = document.createElement('form');
                    addClass(form, 'ais-SearchBox-form');
                    form.setAttribute('action', '');
                    form.setAttribute('role', 'search');

                    // add it to formContainer
                    formContainer.appendChild(form);

                    // create input element
                    const input = document.createElement('input');

                    // add event listener for input
                    input.addEventListener('input', function(event) {
                        setHeader('search');
                        localStorage.setItem('type', 'search');

                        refine(event.target.value);

                        // reset filters
                        var reset = document.getElementById('clear');
                        reset.click();
                    });

                    // set class and attributes for search input
                    addClass(input, 'ais-SearchBox-input');
                    input.setAttribute('type', 'search');
                    input.setAttribute('placeholder', widgetParams.placeholder);
                    input.setAttribute('autocomplete', 'off');
                    input.setAttribute('autocorrect', 'off');
                    input.setAttribute('autocapitalize', 'off');
                    input.setAttribute('maxlength', '512');

                    // create and set attributes on button
                    const button = document.createElement('button');
                    addClass(button, 'ais-SearchBox-submit');
                    button.setAttribute('type', 'submit');
                    button.innerHTML = '<svg class="ais-SearchBox-submitIcon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 40 40"> <path d="M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z"></path> </svg>';
                    button.addEventListener('click', function(event) {
                        event.preventDefault();
                    });

                    // create and set attributes on reset button
                    const resetButton = document.createElement('button');
                    resetButton.setAttribute('type', 'reset');
                    resetButton.setAttribute('id', 'resetSearchBox');

                    resetButton.addEventListener('click', function() {
                        clear();
                    });

                    form.appendChild(input);
                    form.appendChild(button);
                    form.appendChild(resetButton);

                    $(document).on("keydown", "form", function(event) {
                        return event.key !== "Enter";
                    });
                }

                widgetParams.container.querySelector('input').value = query;
            }
        );
        // instantiate custom searchBox widget
        search.addWidgets([
            customSearchBox({
                container: document.querySelector('#search-box'),
                placeholder: document.querySelector('#search-box-text').innerHTML
            })
        ]);


        // initialize Hits
        search.addWidget(instantsearch.widgets.infiniteHits({
            container: '#hits',
            templates: {
                item: document.querySelector('#hit-template').innerHTML,
                empty: document.querySelector('#no-results-template').innerHTML
            },
            transformItems: function transformItems(items) {
                const transformedItems = items.map(function (item) {
                    return _objectSpread({}, item, {
                        imageUrl: item.url.substr(0, item.url.lastIndexOf("/")) + '/' + (item.image_thumbnail ? item.image_thumbnail : item.image),
                        type: item.collection.slice(0, -1)
                    });
                });

                // return as above, but also sort by item.weight (numerical, sort ascending)
                return transformedItems.sort(function (a, b) {
                    return b.weight - a.weight;
                });
            }
        }));


        var renderMenuTemplates = instantsearch.connectors.connectMenu(function (_ref, isFirstRender) {
            var refine = _ref.refine,
                widgetParams = _ref.widgetParams;

            // make new array of objects
            var itemsArray = [];

            // obtain list of items, split because they are separated by a comma, and sort alphabetically
            var itemsSimpleArray = widgetParams.itemsList.split(',');

            // obtain name for 'All' category, functioning as a reset
            var allTemplates = document.getElementById('all-templates').innerHTML;
            // obtain name for 'Featured' category, functioning as a reset
            var featuredTemplates = document.getElementById('featured-templates').innerHTML;

            // set the type to template in localStorage
            if(localStorage.getItem('type') === 'template') setHeader('templates');

            // if value of url param 'menu[category]' does not exist in itemsSimpleArray, add it. (also check on Featured as it's added later too)
            // this is to add a category in case it doesn't originally exist in the category list, but it clicked on from an article.
            /*var check = currentCategoryInUrl.indexOf('?');
            var currentCategory = currentCategoryInUrl.substring(0, check !== -1 ? check : currentCategoryInUrl.length);
            currentCategory = currentCategory.toLowerCase();
            if (localStorage.getItem('type') === 'template'
                && itemsSimpleArray.indexOf(currentCategory) === -1
                && currentCategoryInUrl !== document.getElementById('featured-templates').innerHTML) {

                setHeader('templates');
                itemsSimpleArray.push(currentCategoryInUrl.toLowerCase());
                localStorage.setItem('category', currentCategoryInUrl.toLowerCase());
            }*/

            // iterate through list of items, making them into an object
            for (var i = 0; i < itemsSimpleArray.length; i++) {
                itemsArray.push({
                    label: itemsSimpleArray[i],
                    value: itemsSimpleArray[i],
                    isSelected: (localStorage.getItem('category') === itemsSimpleArray[i] && localStorage.getItem('type') === 'template')
                });
            }

            // sort the itemsArray
            itemsArray.sort(function (a, b) {
                return a.label > b.label ? 1 : b.label > a.label ? -1 : 0;
            });
            itemsArray.sort(function (a, b) {
                return a.label === featuredTemplates ? -1 : b.label === featuredTemplates ? 1 : 0;
            });
            itemsArray.sort(function (a, b) {
                return a.label === allTemplates ? -1 : b.label === allTemplates ? 1 : 0;
            });

            // build a list of elements
            var list = itemsArray.map(function (item) {
                return "<a class='ais-Menu-link " + (item.isSelected ? 'ais-Menu-link-active' : '') + "' href='#category=" + item.label + "' data-value='" + item.value + "'><span class='ais-Menu-label'>" + item.label + "</span> </a>";
            });

            // define the container contents, including the list with actual menu items
            widgetParams.container.innerHTML = "\n<div class=\"ais-Menu\">\n<ul class=\"ais-Menu-list\">\n".concat(list.join(''), "\n</ul>\n</div>\n");

            // loop through all links and add a click event to each of them
            _toConsumableArray(widgetParams.container.querySelectorAll('a')).forEach(function (element) {
                element.addEventListener('click', function (event) {

                    event.preventDefault();

                    // reset search if any
                    document.getElementById('clear').click();
                    document.getElementById('resetSearchBox').click();

                    setHeader('templates');

                    // refine value and save it as selected
                    localStorage.setItem('type', 'template');
                    localStorage.setItem('category', event.currentTarget.dataset.value);
                    refine(event.currentTarget.dataset.value);
                });
            });
        });

        search.addWidgets([renderMenuTemplates({
            attribute: 'category',
            container: document.getElementById('templates'),
            itemsList: document.getElementById('visible-templates').innerHTML
        })]);

        var renderMenuExtensions = instantsearch.connectors.connectMenu(function (_ref5, isFirstRender) {
            var items = _ref5.items,
                refine = _ref5.refine,
                widgetParams = _ref5.widgetParams;

            // obtain list of items, split because they are separated by a comma, and sort alphabetically
            var itemsSimpleArray = widgetParams.itemsList.split(',');
            // make new array of objects
            var itemsArray = [];
            // obtain name for 'All' extensions, functioning as a reset
            var allExtensions = document.getElementById('all-extensions').innerHTML;

            // set the type to extension in localStorage
            if(localStorage.getItem('type') === 'extension') setHeader('extensions');

            // if value of url param 'menu[extension_category]' does not exist in itemsSimpleArray, add it. (also check on Featured as it's added later too)
            // this is to add a category in case it doesn't originally exist in the category list, but it clicked on from an article.
            /*var check = currentCategoryInUrl.indexOf('?');
            var currentCategory = currentCategoryInUrl.substring(0, check !== -1 ? check : currentCategoryInUrl.length);
            currentCategory = currentCategory.toLowerCase();
            if (localStorage.getItem('type') === 'extension'
                && itemsSimpleArray.indexOf(currentCategory)  === -1) {

                setHeader('extensions');
                itemsSimpleArray.push(currentCategoryInUrl.toLowerCase());
                localStorage.setItem('category', currentCategoryInUrl.toLowerCase());
                console.log("2: " + currentCategoryInUrl.toLowerCase())
            }*/

            // iterate through list of items, making them into an object
            for (var i = 0; i < itemsSimpleArray.length; i++) {
                itemsArray.push({
                    label: itemsSimpleArray[i],
                    value: itemsSimpleArray[i],
                    isSelected: (localStorage.getItem('category') === itemsSimpleArray[i] && localStorage.getItem('type') === 'extension')
                });
            }

            // sort the itemsArray
            itemsArray.sort(function (a, b) {
                return a.label > b.label ? 1 : b.label > a.label ? -1 : 0;
            });
            itemsArray.sort(function (a, b) {
                return a.label === allExtensions ? -1 : b.label === allExtensions ? 1 : 0;
            });

            // build a list of elements
            var list = itemsArray.map(function (item) {
                return "<a class='ais-Menu-link " + (item.isSelected ? 'ais-Menu-link-active' : '') + "' href='#extension_category=" + item.label + "' data-value='" + item.value + "'><span class='ais-Menu-label'>" + item.label + "</span> </a>";
            });

            // define the container contents, including the list with actual menu items
            widgetParams.container.innerHTML = "\n<div class=\"ais-Menu\">\n<ul class=\"ais-Menu-list\">\n".concat(list.join(''), "\n</ul>\n</div>\n");

            // loop through all links and add a click event to each of them
            _toConsumableArray(widgetParams.container.querySelectorAll('a')).forEach(function (element) {
                element.addEventListener('click', function (event) {

                    event.preventDefault();

                    // reset search if any
                    document.getElementById('clear').click();
                    document.getElementById('resetSearchBox').click();

                    setHeader('extensions');

                    // refine value and save it as selected
                    localStorage.setItem('type', 'extension');
                    localStorage.setItem('category', event.currentTarget.dataset.value);
                    refine(event.currentTarget.dataset.value);
                });
            });
        });


        search.addWidgets([renderMenuExtensions({
            attribute: 'extension_category',
            container: document.getElementById('extensions'),
            itemsList: document.getElementById('visible-extensions').innerHTML
        })]);

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
        if(hash[1]) vars[hash[0]] = hash[1].split('#')[0];
    }

    return vars;
}

function addClass(el, className) {
    if (el.classList) el.classList.add(className);else if (!hasClass(el, className)) el.className += " " + className;
}

function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1;
}

function setHeader(visibleHeader) {
    // all headers in array
    var headers = ['templates','extensions','search'];
    // remove visible header from array
    headers = headers.filter(e => e !== visibleHeader);
    // show this header
    document.getElementById('header-' + visibleHeader).classList.remove("hidden");
    // hide all other headers
    for(var i = 0; i < headers.length; i++) {
        document.getElementById('header-' + headers[i]).classList.add("hidden");
    }
}

document.addEventListener('DOMContentLoaded', main.init);
