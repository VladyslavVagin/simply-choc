var throttle = require('lodash.throttle');

// MILK CHOCOLATE 
const milkChocOpen = document.querySelector('.but-one-milk-choc');
const milkChocolateOverlay = document.querySelector('.overlay-milk-chocolate');
const milkChocolateClose = document.querySelector('.js-milk-choc');
const buttonUp = document.querySelector('.up-button');
milkChocOpen.addEventListener('click', onOpenOverlay);
function onOpenOverlay() {
    milkChocolateOverlay.classList.add('superactive');
    milkChocolateClose.addEventListener('click', onCloseOverlay);
};
function onCloseOverlay() {
    milkChocolateOverlay.classList.remove('superactive');
};

// MILK  
const milkOpen = document.querySelector('.open-milk');
const milkOverlay = document.querySelector('.milk-overlay');
const milkClose = document.querySelector('.milk-close');
milkOpen.addEventListener('click', onOpenOverlayMilk);
function onOpenOverlayMilk() {
    milkOverlay.classList.add('superactive');
    milkClose.addEventListener('click', onCloseOverlayMilk);
};
function onCloseOverlayMilk() {
    milkOverlay.classList.remove('superactive');
};

// NUTS
const nutsOpen = document.querySelector('.nuts-open');
const nutsOverlay = document.querySelector('.nuts-overlay');
const nutsClose = document.querySelector('.nuts-close');
nutsOpen.addEventListener('click', onOpenOverlayNuts);
function onOpenOverlayNuts() {
    nutsOverlay.classList.add('superactive');
    nutsClose.addEventListener('click', onCloseOverlayNuts);
};
function onCloseOverlayNuts() {
    nutsOverlay.classList.remove('superactive');
};

// SEMI-SWEET CHOCOLATE
const semiSweetOpen = document.querySelector('.semi-sweet-open');
const semiSweetOverlay = document.querySelector('.semi-sweet-overlay');
const semiSweetClose = document.querySelector('.semi-sweet-close');
semiSweetOpen.addEventListener('click', onOpenOverlaySemiSweet);
function onOpenOverlaySemiSweet() {
    semiSweetOverlay.classList.add('superactive');
    semiSweetClose.addEventListener('click', onCloseOverlaySemiSweet);
};
function onCloseOverlaySemiSweet() {
    semiSweetOverlay.classList.remove('superactive');
};

// CACAO
const cacaoOpen = document.querySelector('.cacao-open');
const cacaoOverlay = document.querySelector('.cacao-overlay');
const cacaoClose = document.querySelector('.cacao-close');
cacaoOpen.addEventListener('click', onOpenOverlayCacao);
function onOpenOverlayCacao() {
    cacaoOverlay.classList.add('superactive');
    cacaoClose.addEventListener('click', onCloseOverlayCacao);
};
function onCloseOverlayCacao() {
    cacaoOverlay.classList.remove('superactive');
};

// RASPBERRY
const raspberryOpen = document.querySelector('.raspberry-open');
const raspberryOverlay = document.querySelector('.raspberry-overlay');
const raspberryClose = document.querySelector('.raspberry-close');
raspberryOpen.addEventListener('click', onOpenOverlayRaspberry);
function onOpenOverlayRaspberry() {
    raspberryOverlay.classList.add('superactive');
    raspberryClose.addEventListener('click', onCloseOverlayRaspberry);
};
function onCloseOverlayRaspberry() {
    raspberryOverlay.classList.remove('superactive');
};

// COCONUT OIL
const coconutOpen = document.querySelector('.coconut-open');
const coconutOverlay = document.querySelector('.coconut-overlay');
const coconutClose = document.querySelector('.coconut-close');
coconutOpen.addEventListener('click', onOpenOverlayCoconut);
function onOpenOverlayCoconut() {
    coconutOverlay.classList.add('superactive');
    coconutClose.addEventListener('click', onCloseOverlayCoconut);
};
function onCloseOverlayCoconut() {
    coconutOverlay.classList.remove('superactive');
};

function onEntry(entry) {
    entry.forEach(change => {
       if (change.isIntersecting) {
          change.target.classList.add('element-show');
       }
    });
 }
 let options = { threshold: [0.2] };
 let observer = new IntersectionObserver(onEntry, options);
 let elements = document.querySelectorAll('.element-animation');
 for (let elm of elements) {
    observer.observe(elm);
 }

//  SCROLL BUTTON UP 

 window.addEventListener('scroll', throttle((onScroll), 1000));
 buttonUp.classList.add('is-hidden');

 function onScroll () {
 if (scrollY < 700) {
         buttonUp.classList.add('is-hidden');
     } else if (scrollY > 700)
         buttonUp.classList.remove('is-hidden');
 };