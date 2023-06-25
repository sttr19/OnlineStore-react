"use strict";
exports.__esModule = true;
var CategoriesMenu_module_css_1 = require("../categoriesMenu/CategoriesMenu.module.css");
var react_1 = require("react");
function CategoriesMenu(_a) {
    var items = _a.items, onChangeCat = _a.onChangeCat;
    var categories = Array.from(new Set(items.map(function (item) { return item.theme; })));
    console.log(categories);
    return (react_1["default"].createElement("div", { className: CategoriesMenu_module_css_1["default"]["categories-wrapper"] },
        react_1["default"].createElement("ul", { className: CategoriesMenu_module_css_1["default"].list }, categories.map(function (elem, index) { return (react_1["default"].createElement("li", { key: elem + "_" + index },
            react_1["default"].createElement("button", { className: CategoriesMenu_module_css_1["default"].item, onClick: function () { return onChangeCat(elem); } }, elem))); }))));
}
exports["default"] = CategoriesMenu;
