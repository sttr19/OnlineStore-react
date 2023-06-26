"use strict";
exports.__esModule = true;
var CategoriesMenu_module_css_1 = require("../categoriesMenu/CategoriesMenu.module.css");
var classnames_1 = require("classnames");
function CategoriesMenu(_a) {
    var items = _a.items, onChangeCategory = _a.onChangeCategory, categoryName = _a.categoryName;
    var categories = Array.from(new Set(items.map(function (item) { return item.theme; })));
    //console.log(categories);
    return (React.createElement("div", { className: CategoriesMenu_module_css_1["default"]["categories-wrapper"] },
        React.createElement("ul", { className: CategoriesMenu_module_css_1["default"].list }, categories.map(function (elem, index) {
            var _a;
            return (React.createElement("li", { key: elem + "_" + index },
                React.createElement("button", { className: classnames_1["default"](CategoriesMenu_module_css_1["default"].item, (_a = {}, _a[CategoriesMenu_module_css_1["default"].active] = elem === categoryName, _a)), onClick: function () {
                        onChangeCategory(elem);
                    } }, elem)));
        }))));
}
exports["default"] = CategoriesMenu;
