import { Header } from "../header";

const navs= [
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
]

const btn = "Sing Up"
const websiteName = "Header Component"
const logoUrl = "https://www.logo.wine/a/logo/YouTube/YouTube-Icon-Full-Color-Logo.wine.svg"
const header = new Header(navs,btn,websiteName,logoUrl)

header.initialize()