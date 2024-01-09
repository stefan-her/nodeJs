"use strict";

// const currencyHelper = require('./helpers/currency.js');
// const fileService = require('./services/fileService.js');

// const fileService = require('./services/fileServicePromise.js');

import defaultExport from "./services/fileServicePromise.js";

const fileService = new defaultExport();
fileService.read();
fileService.add("Baltaza Picsou");


// console.log(currencyHelper.formatBe(3.5));

