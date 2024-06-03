//Initialize Swiper
const swiper = new Swiper('.mySwiper', {
    slidesPerView: 5,
    spaceBetween: 14,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

//Initialize Swiper Mobile
const swiperMobile = new Swiper('.mySwiperMobile', {
    spaceBetween: 10,
});

//Initialize Swiper Videos
const swiperVideos = new Swiper('.mySwiperVideos', {
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

/* Sticky Nav On Scroll */
var mainHeader = document.querySelector('.site-header')
var topBar = document.querySelector('.wp-block-top-announcement')
var stickyPosition = mainHeader.getBoundingClientRect().top;
var offset = -20
var heightTopBar = document.getElementById("top-bar");
var height = heightTopBar.clientHeight;

if (mainHeader !== null || topBar !== null ) {
    function stickyNav () {
        if (document.documentElement.scrollTop >= stickyPosition + offset) {
            mainHeader.style.position = 'sticky';
            mainHeader.style.top = height + 'px';
            mainHeader.classList.add("sticky")

            topBar.style.position = 'sticky';
            topBar.style.top = '0px';
            topBar.classList.add("sticky")
        } else {
            mainHeader.style.position = 'relative';
            mainHeader.style.top = '';
            mainHeader.classList.remove("sticky")

            topBar.style.position = 'relative';
            topBar.style.top = '';
            topBar.classList.remove("sticky")
        }
    }
}
window.addEventListener('scroll', stickyNav);
window.addEventListener('load', stickyNav);
window.addEventListener('resize', stickyNav);


/* Tab JS */
window.addEventListener("load", function () {
    // store tabs variable
    var myTabs = document.querySelectorAll("ul.nav-tabs > li");
    function myTabClicks(tabClickEvent) {
        for (var i = 0; i < myTabs.length; i++) {
            myTabs[i].classList.remove("active");
        }
        var clickedTab = tabClickEvent.currentTarget;
        clickedTab.classList.add("active");
        tabClickEvent.preventDefault();
        var myContentPanes = document.querySelectorAll(".tab-pane");
        for (i = 0; i < myContentPanes.length; i++) {
            myContentPanes[i].classList.remove("active");
        }
        var anchorReference = tabClickEvent.target;
        var activePaneId = anchorReference.getAttribute("href");
        var activePane = document.querySelector(activePaneId);
        activePane.classList.add("active");
    }
    for (i = 0; i < myTabs.length; i++) {
        myTabs[i].addEventListener("click", myTabClicks)
    }
});

/* Menu Toggle */
let menu = document.querySelector('.primary-menu')
let menuButton = document.querySelector('.menu-toggle')
let menuOpen = document.querySelector('.wp-site-blocks')

menuButton.addEventListener('click', function () {
    menu.classList.toggle("toggled-on");
    menuButton.classList.toggle("toggled-on");
    menuOpen.classList.toggle("menu-open");
})

/* Remove Top Bar */
function btnClick() {
    let topBar = document.getElementById("top-bar");
    topBar.parentNode.removeChild(topBar);
}

/* Accordion */
const accordionList = document.querySelectorAll(".accordion-item");

accordionList.forEach((event) =>
    event.addEventListener("click", () => {
        if (event.classList.contains("active")) {
            event.classList.remove("active");
        } else {
            accordionList.forEach((event2) => event2.classList.remove("active"));
            event.classList.add("active");
        }
    })
);
