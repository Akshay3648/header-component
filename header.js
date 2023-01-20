"use strict";
exports.__esModule = true;
exports.Header = void 0;
var Header = /** @class */ (function () {
    function Header(navs, btn, websiteName, logo) {
        this.navs = navs ? navs : [];
        this.btn = btn ? btn : '';
        this.websiteName = websiteName ? websiteName : '';
        this.logo = logo ? logo : '';
    }
    Header.prototype.hamburger = function () {
        //for mobile view
    };
    Header.prototype.initialize = function () {
        var header = document.querySelector('#header');
        header ? header.innerHTML = "\n        <div class=\"header\">\n            <div class=\"header__logo-wrapper\">\n                <span class=\"logo-wrapper__name\">".concat(this.websiteName, "</span>\n                <img class=\"logo-wrapper__logo\" src=\"").concat(this.logo, "\" width=\"55px\" alt=\"website-logo\">\n            </div>\n            <ul class=\"nav\">\n                ").concat(this.navs.map(function (nav) {
            return "\n                    <li class=\"nav__item\"><a href=\"".concat(nav.link, "\">").concat(nav.itemName, "</a></li>\n                    ");
        }), "\n            </ul>\n            <button class=\"btn\">").concat(this.btn, "</button>\n        </div>") : "";
    };
    return Header;
}());
exports.Header = Header;
