export class Header {
    navs: any[]
    btn: any
    websiteName: string
    logo: string;
    
    constructor(navs:any,btn:any,websiteName:string,logo:string) {
        this.navs = navs ? navs : []
        this.btn = btn ? btn : ''
        this.websiteName = websiteName ? websiteName : ''
        this.logo = logo ? logo : ''
    }

    hamburger() {
        //for mobile view
    }

    initialize(){
        const header = document.querySelector('#header');

        header ? header.innerHTML=`
        <div class="header">
            <div class="header__logo-wrapper">
                <span class="logo-wrapper__name">${this.websiteName}</span>
                <img class="logo-wrapper__logo" src="${this.logo}" width="55px" alt="website-logo">
            </div>
            <ul class="nav">
                ${this.navs.map((nav:any)=>{
                    return `
                    <li class="nav__item"><a href="${nav.link}">${nav.itemName}</a></li>
                    `
                }
                )}
            </ul>
            <button class="btn">${this.btn}</button>
        </div>` : ``
    }
}