"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.setCategory = exports.filterSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var puzzles_json_1 = require("../../data/puzzles.json");
exports.filterSlice = toolkit_1.createSlice({
    name: "filter",
    initialState: { products: puzzles_json_1["default"], filteredProducts: puzzles_json_1["default"], value: "" },
    reducers: {
        setCategory: function (state, action) {
            console.log("slice", action.payload);
            var filterByCategory = state.products.filter(function (product) { return product.theme === action.payload; });
            return __assign(__assign({}, state), { filteredProducts: action.payload.length > 0
                    ? filterByCategory
                    : __spreadArrays(state.products), value: action.payload });
        }
    }
});
exports.setCategory = exports.filterSlice.actions.setCategory;
exports["default"] = exports.filterSlice.reducer;
