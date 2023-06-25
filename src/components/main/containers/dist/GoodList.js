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
exports.__esModule = true;
exports.GoodList = void 0;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var filterSlice_1 = require("../../../redux/catalog/filterSlice");
var Goods_1 = require("../Goods");
var Goods_module_css_1 = require("../../main/Goods.module.css");
var CategoriesMenu_1 = require("../categoriesMenu/CategoriesMenu");
function GoodList() {
    var goods = react_redux_1.useSelector(function (state) { return state.filter.products; });
    var filteredGoods = react_redux_1.useSelector(function (state) { return state.filter.filteredProducts; });
    console.log("redux state", goods);
    var dispatch = react_redux_1.useDispatch();
    var onChangeCategory = function (nameCategory) {
        console.log(nameCategory);
        dispatch(filterSlice_1.setCategory(nameCategory));
    };
    return (react_1["default"].createElement("main", { className: Goods_module_css_1["default"].main },
        react_1["default"].createElement("div", { className: Goods_module_css_1["default"]["main-wrapper"] },
            react_1["default"].createElement("section", { className: Goods_module_css_1["default"]["catalog-wrapper"] },
                react_1["default"].createElement(CategoriesMenu_1["default"], { items: goods, onChangeCat: onChangeCategory }),
                react_1["default"].createElement("div", { className: Goods_module_css_1["default"]["goods-wrapper"] }, filteredGoods.map(function (item, index) { return (react_1["default"].createElement(Goods_1["default"], __assign({ key: item + "_" + index }, item))); }))))));
}
exports.GoodList = GoodList;
