// mega - menu
const navLogo = document.querySelector(".nav__logo__container");
const megaMenu = document.querySelector(".nav__mega__container");

navLogo.addEventListener("click",() => {
    navLogo.classList.toggle("active");
    megaMenu.classList.toggle("active");
});


// hero  - slider - navigation

const btns = document.querySelectorAll(".navigation__col");
const slideVideo = document.querySelectorAll(".slider__video");
const slides = document.querySelectorAll(".slider__right__image");

let sliderNav = function(manual) {

    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slideVideo.forEach((slideVideo) => {
        slideVideo.classList.remove("active");
    });

    slides.forEach((slides) => {
        slides.classList.remove("active");
    });


    btns[manual].classList.add("active");
    slideVideo[manual].classList.add("active");
    slides[manual].classList.add("active");
}


btns.forEach((btn, i) =>{
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
});


// media - hamburger - menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__menu");

hamburger.addEventListener("click",() => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll("nav-item").forEach(n => n.addEventListener("click"), () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
});



// mega - menu - media - accordion
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) =>{
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});