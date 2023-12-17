document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    // loop: true,
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      300: {
        slidesPerView:2 ,
      },
      690: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
      1300: {
        slidesPerView: 4,
      },
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var blogSwiper = new Swiper(".blogSwiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 300000,
      disableOnInteraction: false,
    },
    breakpoints: {
      690: {
        slidesPerView: 1,
      },
    },
  });
});
document.addEventListener("DOMContentLoaded", function () {

  const swiper_overlayProduct = new Swiper(".swiper-overlayProduct", {


    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
      },
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
    const swiperThumbnail1 = new Swiper(".swiper_thumbnail", {
      slidesPerView: 5.5,
      spaceBetween: 8,
      
      direction:'horizontal',
      centeredSlides: true,

      slideToClickedSlide: true,

      breakpoints: {

        768: {
          direction:'vertical',
        },

      },



      navigation: {
        nextEl: ".swiper-button-next3",
        prevEl: ".swiper-button-prev3",
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: false, // Set to true if you want to hide the scrollbar initially
      },
    });



    const swiperMain1 = new Swiper(".swiper_main", {
      slidesPerView: 1,
      spaceBetween: 1,
      centeredSlides: true,

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    swiperThumbnail1.controller.control = swiperMain1;
    swiperMain1.controller.control = swiperThumbnail1;
});
document.addEventListener("DOMContentLoaded", function () {
  var swiperMain = new Swiper(".mainSwiper", {
    loop: true,
    effect: "fade",
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var testSwiper = new Swiper(".testSwiper", {
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    autoplay: {
      delay: 3000,
    },
	// centeredSlides: true,
    breakpoints: {
      400: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1100: {
        slidesPerView: 3,
      },
      1500: {
        slidesPerView: 4,
        
      },
    },
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var productSwiper = new Swiper(".swiper-product", {
    grabCursor: true,
    slidesPerView: 2,
    spaceBetween: 5,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    autoplay: {
      delay: 3000,
    },
	// centeredSlides: true,
    breakpoints: {
      500: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },

      1200: {
        spaceBetween: 20,
        slidesPerView: 4,
      },
    },
  });
});
