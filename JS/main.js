const swiper = new Swiper(".swiper-materials", {
  slidesPerView: 4,
  spaceBetween: 40,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    renderFraction: function (currentClass, totalClass) {
      return (
        '<span class="' +
        currentClass +
        '"></span>' +
        " из " +
        '<span class="' +
        totalClass +
        '"></span>'
      );
    },
  },
  breakpoints: {
    992: {
      slidesPerView: 4,
    },
    768:{
      slidesPerView:3,
    },
    480:{
      slidesPerView:2,
    },
    0:{
      slidesPerView:1
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const burger = document?.querySelector("[data-burger]");
const nav = document?.querySelector("[data-nav]");
const navItems = nav?.querySelectorAll("a");
const body = document.body;
const header = document?.querySelector(".header");
const headerHeight = header.offsetHeight;
document
  .querySelector(":root")
  .style.setProperty("--header-height", `${headerHeight}px`);

burger?.addEventListener("click", () => {
  body.classList.toggle("stop-scroll");
  burger?.classList.toggle("burger--active");
  nav?.classList.toggle("nav--visible");
});

navItems.forEach((el) => {
  el.addEventListener("click", () => {
    body.classList.remove("stop-scroll");
    burger?.classList.remove("burger--active");
    nav?.classList.remove("nav--visible");
  });
});
