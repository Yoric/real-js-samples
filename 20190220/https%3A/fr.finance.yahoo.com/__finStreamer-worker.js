var QUOTE_STREAMER_WEBSOCKET = 'wss://streamer.finance.yahoo.com';
var QUOTE_URL = 'https://query1.finance.yahoo.com/v6/finance/quote?';
var INTERVAL_TIME = 3000;
var quoteStreamerInstance = null;
var quotePollerInstance = null;

// map used for transforming the response to match the quote response
var STREAMER_FIELD_MAPPING = {
    id: 'symbol',
    dayVolume: 'volume',
    marketcap: 'marketCap',
    marketHours: 'marketState'
    // TODO: figure out mapping for these fields if any...
    // openPrice,
    // optionsType,
    // miniOption,
    // lastSize,
    // vol_24hr,
    // volAllCurrencies,
    // fromcurrency,
    // lastMarket,
    // circulatingSupply
};

// A map to categorize quote summary detail field vs price field
var QUOTE_SUMMARY_DETAIL_FIELD = {
    ask: true,
    askSize: true,
    bid: true,
    bidSize: true,
    dayLow: true,
    dayHigh: true,
    expireDate: true
};

// A map to remove unrequired fields in final response
var NON_REQUIRED_FIELDS = {
};

// map which would result in price hint formatting
var PRICE_HINT_FORMATTED_FIELDS = {
    change: true,
    changePercent: true,
    previousClose: true,
    price: true
};

/**
 * Helper function to convert a base 64 string into a bytes array
 * @param {String} base64 a string in base 64
 */
function base64ToArray(base64) {
    var binaryString = atob(base64);
    var len = binaryString.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
}

/**
 * Helper function to trim a float number to a given places (toFixed returns string)
 * @param {Number} val value to be trimmed
 * @param {Number} place how many digits you need after decimal point.
 */
function getFixedNumber(val, place) {
    if (isNaN(val)) {
        return val;
    }
    const pow = Math.pow(10, place);
    return +(Math.round(val * pow) / pow);
}

/**
 * Helper to process stream data into data we want
 * @param {Object} streamedQuoteData streamed object data to process
 * @returns {Object} processed stream data
 */
function getProcessedQuoteData(streamedQuoteData) {
    var price = {};
    var summaryDetail = {};
    var marketHours = streamedQuoteData.marketHours;
    var priceHint = streamedQuoteData.priceHint || 2;
    var marketHoursPrefix = '';
    var marketState;
    switch (marketHours) {
        case 'PRE_MARKET':
            marketHoursPrefix = 'preMarket';
            marketState = 'PRE';
            break;
        case 'REGULAR_MARKET':
            marketHoursPrefix = 'regularMarket';
            marketState = 'REGULAR';
            break;
        case 'POST_MARKET':
            marketHoursPrefix = 'postMarket';
            marketState = 'POST';
            break;
        case 'EXTENDED_HOURS_MARKET':
            marketHoursPrefix = 'extendedMarket';
            marketState = 'EXTENDED';
    }

    for (var field in streamedQuoteData) {
        if (streamedQuoteData.hasOwnProperty(field)) {
            var quotePropKey = STREAMER_FIELD_MAPPING[field] || field;
            var value = streamedQuoteData[field];
            if (value === undefined || value === null || value === '') {
                continue;
            }

            switch (quotePropKey) {
                case 'previousClose':
                case 'price':
                case 'time':
                case 'dayHigh':
                case 'dayLow':
                case 'volume':
                case 'changePercent':
                case 'change':
                    if (PRICE_HINT_FORMATTED_FIELDS[quotePropKey] && !isNaN(value)) {
                        // format the value using the priceHint
                        value = getFixedNumber(value, priceHint);
                    }

                    if (quotePropKey === 'time') {
                        // format time correctly
                        value = value / 1000;
                    }

                    quotePropKey = marketHoursPrefix + quotePropKey[0].toUpperCase() + quotePropKey.substr(1);
                    break;
                case 'marketState':
                    value = marketState;
                    break;
            };

            if (QUOTE_SUMMARY_DETAIL_FIELD[quotePropKey]) {
                // its a summary detail field
                summaryDetail[quotePropKey] = value;
            } else {
                // its a price field
                if (!NON_REQUIRED_FIELDS[quotePropKey]) {
                    price[quotePropKey] = value
                }
            }
        }
    }

    return {
        price: price,
        summaryDetail: summaryDetail
    };
}

function QuoteStreamer(type) {
    this.type = type || 'streamer',
    this.symbolList = {};
    this.fieldList = {};
    this.intervalHandle = null;
    this.connection = null;
}

QuoteStreamer.prototype.subscribe = function (data) {
    var symbols = data.symbols;
    var fields = data.fields;
    var i;

    for (i = 0;i < symbols.length;i++) {
        var symbol = symbols[i];
        if (this.symbolList[symbol]) {
            this.symbolList[symbol]++;
        } else {
            this.symbolList[symbol] = 1;
        }
    }

    for (i = 0;i < fields.length;i++) {
        var field = fields[i];
        if (this.fieldList[field]) {
            this.fieldList[field]++;
        } else {
            this.fieldList[field] = 1;
        }
    }

    if (this.type === 'poller') {
        // First put these symbols and fields into our hashmap to de-dup and keep track of subscribers
        // If its poller
        if (!this.connection) {
            // If no connection, create a connection
            this.connection = new XMLHttpRequest();
            this.connection.addEventListener('readystatechange', this.handleQuoteRequest.bind(this), false);
        }

        if (this.intervalHandle) {
            // clear the interval
            clearInterval(this.intervalHandle);
        }

        // Create an interval
        var symbolList = this.symbolList;
        var fieldList = this.fieldList;
        this.intervalHandle = setInterval(function () {
            this.connection.open('GET', QUOTE_URL + '&symbols=' + Object.keys(symbolList) + '&fields=' + Object.keys(fieldList), true);
            this.connection.send();
        }.bind(this), INTERVAL_TIME);
    } else {
        // If its streamer
        if (!this.connection || (this.connection && this.connection.readyState !== WebSocket.OPEN && this.connection.readyState !== WebSocket.CONNECTING)) {
            // If the socket is not there or if the socket is not in connecting or open state, create a new websocket.
            this.connection = new WebSocket(QUOTE_STREAMER_WEBSOCKET);
            this.connection.addEventListener('open', function () {
                // connection open now. Hence subscribe now.
                this.connection.send(JSON.stringify({
                    subscribe: Object.keys(this.symbolList)
                }));
            }.bind(this));
            this.connection.addEventListener('message', this.handleWebSocketUpdate.bind(this));
        } else {
            // connection is already present.
            if (this.connection.readyState === WebSocket.OPEN) {
                this.connection.send(JSON.stringify({
                    subscribe: Object.keys(this.symbolList)
                }));
            }
        }
    }
};

QuoteStreamer.prototype.unsubscribe = function (data) {
    var symbols = data.symbols;
    var fields = data.fields;
    var i;

    for (i = 0;i < symbols.length;i++) {
        var symbol = symbols[i];
        if (this.symbolList[symbol]) {
            this.symbolList[symbol]--;
            if (!this.symbolList[symbol]) {
                delete this.symbolList[symbol];
            }
        }
    }

    for (i = 0;i < fields.length;i++) {
        var field = fields[i];
        if (this.fieldList[field]) {
            this.fieldList[field]--;
            if (!this.fieldList[field]) {
                delete this.fieldList[field];
            }
        }
    }

    if (this.type === 'poller') {
        // poller
        var finalSymbols = Object.keys(this.symbolList);
        if (finalSymbols.length === 0) {
            // no symbols, so shut down everything
            this.destroy();
        }
    } else {
        // streamer
        if (this.connection) {
            // its a streamer, we need to unsubscribe
            this.connection.send(JSON.stringify({
                unsubscribe: symbols
            }));
        }
    }
};

QuoteStreamer.prototype.destroy = function () {
    this.fieldList = {};
    this.symbolList = {};

    if (this.type === 'poller') {
        // if its poller
        if (this.intervalHandle) {
            // clear interval
            clearInterval(this.intervalHandle);
            this.intervalHandle = null;
        }

        if (this.connection) {
            // if there is connection remove it.
            this.connection.removeEventListener('readystatechange', this.handleQuoteRequest.bind(this));
            this.connection = null;
        }
    } else {
        // if its streamer
        if (this.connection) {
            this.connection.close();
            this.connection = null;
        }
    }
};

QuoteStreamer.prototype.handleQuoteRequest = function () {
    if (this.connection.readyState === 4 && this.connection.status === 200) {
        try {
            // request is ok
            var response = JSON.parse(this.connection.responseText);
            // post message the response back to the main thread
            var finalResponse = {
                mktmData: {},
                quoteData: {}
            };

            var results = response.quoteResponse && response.quoteResponse.result;
            var fields = Object.keys(this.fieldList);
            for (var i = 0;i < results.length;i++) {
                var quoteData = results[i];
                var symbol = quoteData.symbol;
                var finalQuoteData = {};
                // unfortunately since there are lots of useless default fields sent by BE, we will need
                // to filter those fields
                for (var j = 0;j < fields.length;j++) {
                    var field = fields[j];
                    if (quoteData[field]) {
                        finalQuoteData[field] = quoteData[field];
                    }
                }

                finalResponse.quoteData[symbol] = {
                    price: finalQuoteData,
                    summaryDetail: finalQuoteData
                }
            }

            postMessage(finalResponse);
        } catch (e) {
            // console log the Error
            console.error('> Error from Finance Quote Streamer:', e);
        }
    }
};

QuoteStreamer.prototype.handleWebSocketUpdate = function (event) {
    try {
        var PricingData = protobuf.roots.default.quotefeeder.PricingData;
        var buffer = base64ToArray(event.data); // decode from base 64
        var data = PricingData.decode(buffer); // Decode using protobuff
        data = PricingData.toObject(data, { // Convert to a JS object
            enums: String
        });
        var quoteData = {};
        if (!Array.isArray(data)) {
            data = [data];
        }

        data.forEach(function (res) {
            if (res && res.id) {
                // get the quote Data
                quoteData[res.id] = getProcessedQuoteData(res)
            }
        });

        postMessage({
            mktmData: {},
            quoteData: quoteData
        });
    } catch (e) {
        // console log the Error
        console.error('> Error from Finance Quote Streamer:', e);
    }
};

// Load the Protobuff library by default since it might be needed sooner or later
try {
    importScripts('https://cdn.rawgit.com/dcodeIO/protobuf.js/6.8.8/dist/minimal/protobuf.min.js');
    importScripts('https://finance.yahoo.com/__finStreamer-proto.js');
} catch(e) {
    console.error('> Finance Streamer: Importing protobuff failed.', e);
}

// Event listener for postmessage
addEventListener('message', function handleWebWorkerMessage(e) {
    var data = e.data;
    var type = data.type;

    switch (data.cmd) {
        case 'subscribe':
            if (type === 'poller') {
                if (!quotePollerInstance) {
                    quotePollerInstance = new QuoteStreamer(type);
                }
                quotePollerInstance.subscribe(data);
            } else {
                if (!protobuf) {
                    // If there is no protobuff, we can't do anything just return.
                    console.error('> Finance Streamer: Protobuff library missing so cannot use streamer');
                    return;
                }
                if (!quoteStreamerInstance) {
                    quoteStreamerInstance = new QuoteStreamer(type);
                }
                quoteStreamerInstance.subscribe(data);
            }

            break;
        case 'unsubscribe':
            if (type === 'poller' && quotePollerInstance) {
                quotePollerInstance.unsubscribe(data);
            } else if (type === 'streamer' && quoteStreamerInstance) {
                quoteStreamerInstance.unsubscribe(data);
            }
            break;
        case 'destroy':
            if (type === 'poller' && quotePollerInstance) {
                quotePollerInstance.destroy();
                quotePollerInstance = null;
            } else if (type === 'streamer' && quoteStreamerInstance) {
                quoteStreamerInstance.destroy();
                quoteStreamerInstance = null;
            }
    }
}, false);
