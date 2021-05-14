import router from './../root'
let selected = '/aboutUs'


export default function header() {
    const Header = document.createElement('header')
    Header.setAttribute('class', 'header')

    const logoImg = document.createElement('img')
    logoImg.setAttribute('class', 'logoImg')
    logoImg.setAttribute('src', './../../assets/Images/OSLogo.png')
    logoImg.addEventListener('click', () => router('/aboutUs'))
    Header.append(logoImg)
    
    const items = [
                    {item: 'About us', route: '/aboutUs'},
                    {item: 'Projects', route: '/projects'},
                    {item: 'Donate', route: '/donate'},
                    {item: 'Contact Us', route: '/contactUs'}
                    
                ]
    const nav = document.createElement('nav')
    items.forEach(item => {
        let span = document.createElement('span')
        let text = document.createTextNode(item.item)
        span.append(text)
        nav.append(span)
        span.addEventListener('click', () => {
            selected = item.route
            span.setAttribute('id', 'menu-selected')
            router(item.route)
        })
        if (item.route === selected) {
            span.setAttribute('id', 'menu-selected')
        }
    })
    Header.append(nav)

    let hamStatus = 'ham'
    const hamImg = document.createElement('img')
    hamImg.setAttribute('src', './../../assets/icons/ham.png')
    hamImg.setAttribute('id', 'ham')
    hamImg.addEventListener('click', () => {
        if (hamStatus === 'ham') {
            hamImg.setAttribute('src', './../../assets/icons/times.png')
            hamStatus = 'times'
            nav.setAttribute('id', 'header-nav-toggle')
        } else {
            hamImg.setAttribute('src', './../../assets/icons/ham.png')
            hamStatus = 'ham'
            nav.removeAttribute('id')
        }
    })
    Header.append(hamImg)

    return Header
}