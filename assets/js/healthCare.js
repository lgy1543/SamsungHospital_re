// 현정님 자바스크립트
var swiper = new Swiper(".swiper-nutritions", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2300,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".swiper-healthtv", {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2700,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".swiper-coach", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

document.addEventListener("DOMContentLoaded", function () {
  const secTabs = document.querySelectorAll(".sec-tabs");
  const tabPart = document.querySelectorAll(".tab-part");
  const tabCategory = document.querySelectorAll(".tab-category");
  const tabTit = document.querySelectorAll(".tab-tit");

  function showTab(tab) {
    tabPart.classList.remove("active");
    tabCategory.classList.remove("active");
    tab.classList.add("active");
  }

  tabTit.forEach(function (tabTit) {
    tabTit.addEventListener("click", function () {
      if (tabTit.parentElement.classList.contains("tab-part")) {
        showTab(tabPart);
      } else if (tabTit.parentElement.classList.contains("tab-category")) {
        showTab(tabCategory);
      }
    });
  });
});
