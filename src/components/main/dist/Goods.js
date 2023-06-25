"use strict";
exports.__esModule = true;
function Goods(_a) {
    var theme = _a.theme, price = _a.price, previewImg = _a.previewImg;
    return (React.createElement("div", { className: "goods-block" },
        React.createElement("img", { src: previewImg, alt: "" }),
        React.createElement("p", null, theme),
        React.createElement("p", null, price)));
}
exports["default"] = Goods;
