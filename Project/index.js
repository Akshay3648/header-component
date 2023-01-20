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
