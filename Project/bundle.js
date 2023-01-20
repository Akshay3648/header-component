(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var header_1 = require("../header");
var navs = [
    {
        "itemName": "YT Family",
        "link": "https://www.youtube.com/go/family/"
    },
    {
        "itemName": "YT Kids",
        "link": "https://www.youtube.com/kids"
    },
    {
        "itemName": "YT Jobs",
        "link": "https://www.youtube.com/jobs"
    }
];
var btn = "Sing Up";
var websiteName = "Header Component";
var logoUrl = "https://www.logo.wine/a/logo/YouTube/YouTube-Icon-Full-Color-Logo.wine.svg";
var header = new header_1.Header(navs, btn, websiteName, logoUrl);
header.initialize();

},{"../header":2}],2:[function(require,module,exports){
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

},{}]},{},[1]);
