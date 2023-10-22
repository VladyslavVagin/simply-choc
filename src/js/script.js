const swiper = new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    parallax: true,
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 60,
        modifier: 1,
        slideShadows: true,
      },
    grabCursor: true,
    spaceBetween: 0,
    speed: 500,
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 16,
        },
        1000: {
            slidesPerView: 3,
            spaceBetween: 28,
        }
    },
    keyboard: {
        enabled: true,
        onluInViewport: true,
        pageUpDown: true,
    },
    observeSlideChildren: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
      },
});

var mySwiper = new Swiper(sliderSelector, options);
mySwiper.init();

var sliderSelector = '.products-swiper',
  options = {
    init: false,
    loop: true,
    speed: 800,
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    slideToClickedSlide: true,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 60,
      modifier: 1,
      slideShadows: true,
    },
    grabCursor: true,
    parallax: true,
    pagination: {
      el: '.products-pagination',
      clickable: true,
    },

    breakpoints: {
      1200: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 18,
      },
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    keyboard: {
      enabled: true,
      onluInViewport: true,
      pageUpDown: true,
    },
    mousewheel: {
      sensitivity: 1,
      eventsTarget: '.products-swiper',
    },
  };
var mySwiper = new Swiper(sliderSelector, options);
mySwiper.init();