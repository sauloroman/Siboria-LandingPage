// SWIPER
const swiper = new Swiper(".products__container", {
  spaceBetween: 32,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  navigation: {
    nextEl: ".buttonRight",
    prevEl: ".buttonLeft",
  },
});

// MENU MOBILE
const menuButtonOpenEl = document.querySelector('.header__menuButtonOpen');
const menuButtonCloseEl = document.querySelector('.header__menuButtonClose');
const headerEl = document.querySelector('.header');
const overlayEl = document.querySelector('.overlay');
const navLinksEl = document.querySelectorAll('.navigation__link');

const showMenu = () => {
  headerEl.classList.add('showMenu');
  overlayEl.classList.add('overlay-active');
}

const closeMenu = () => {
  headerEl.classList.remove('showMenu');
  overlayEl.classList.remove('overlay-active');
}

menuButtonOpenEl.addEventListener('click', showMenu );
menuButtonCloseEl.addEventListener('click', closeMenu );

navLinksEl.forEach( link => {
  link.addEventListener('click', closeMenu );
})

// SCROLL REVEAL
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  reset: true
})

sr.reveal(`.main__title, .search__container, .hero__buttons, .footer__container, .products__container, .gallery__container, .testimonials__container, .newsletter__container`)
sr.reveal(`.hero__description`, { delay: 500 })
sr.reveal(`.hero__imgBox, .hero__countdown`, {origin: 'right'})