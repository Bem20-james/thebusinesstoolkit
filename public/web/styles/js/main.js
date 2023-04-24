let hamMenu = document.querySelector('.ham-menu-wrap');
let shopNavMobile = document.querySelector('.mobile-nav')
let closeNav = document.querySelector('.redirect')

let darkTheme = localStorage.getItem('darkTheme')
const toggleBtns = document.querySelectorAll('#toogle-dark-theme')

for (let i = 0; i < toggleBtns.length; i++) {
    const toggleBtn = toggleBtns[i]

    let enableDark = () => {
        document.body.classList.toggle('dark-theme')
        darkTheme = localStorage.setItem('darkTheme', 'enabled')
    }

    let disableDark = () => {
        document.body.classList.toggle('dark-theme')
        darkTheme = localStorage.setItem('darkTheme', 'disabled')
    }

    if (darkTheme == 'enabled') {
        enableDark()
    }

    toggleBtn.addEventListener('click', () => {
        darkTheme = localStorage.getItem('darkTheme')
        if (darkTheme !== 'enabled') {
            enableDark()
        } else {
            disableDark()
        }
    })
}

hamMenu.addEventListener('click', () => {
    shopNavMobile.classList.add('show-mobile-nav')
})

closeNav.addEventListener('click', () => {
    shopNavMobile.classList.remove('show-mobile-nav')
})

window.onscroll = function () { stickySubHeadline() }
const subHeadline = document.querySelector('.sub-headline-bg')
const shopHeaderNav = document.querySelector('.nav-lg')
function stickySubHeadline() {
    if (window.pageYOffset > subHeadline.offsetTop) {
        subHeadline.classList.add('sticky-subheadline')
        shopHeaderNav.classList.add('sticky-header-nav-lg')
    } else {
        subHeadline.classList.remove('sticky-subheadline')
        shopHeaderNav.classList.remove('sticky-header-nav-lg')
    }
}

const learn_more = document.querySelector('.learn-more-product')
const productInfo = document.querySelector('.more-info-product')
const learnDown = document.querySelector('.learn-down')
const learnUp = document.querySelector('.learn-up')

learnDown.addEventListener('click', displayProductInfo)

function displayProductInfo() {
    productInfo.classList.add('display-product-info')
    learnDown.classList.add('learn-up')
    learnUp.classList.remove('learn-up')
}

learnUp.addEventListener('click', undisplayProductInfo)

function undisplayProductInfo() {
    productInfo.classList.remove('display-product-info')
    learnDown.classList.remove('learn-up')
    learnUp.classList.add('learn-up')
}
