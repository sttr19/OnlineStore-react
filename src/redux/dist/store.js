"use strict";
exports.__esModule = true;
exports.store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var filterSlice_1 = require("./catalog/filterSlice");
exports.store = toolkit_1.configureStore({
    reducer: {
        filter: filterSlice_1["default"]
    }
});
