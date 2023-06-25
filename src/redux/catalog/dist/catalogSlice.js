"use strict";
exports.__esModule = true;
exports.selectGoods = exports.catalogSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var puzzles_json_1 = require("../../data/puzzles.json");
exports.catalogSlice = toolkit_1.createSlice({
    name: 'filter',
    initialState: puzzles_json_1["default"],
    reducers: {}
});
exports.selectGoods = function (state) { return state.puzzle; };
exports["default"] = exports.catalogSlice.reducer;
