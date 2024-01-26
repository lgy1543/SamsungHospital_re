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

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".sec-tabs");

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      tab.classList.add("active");
      tabs.forEach(function (otherTab) {
        if (otherTab !== tab) {
          otherTab.classList.remove("active");
        }
      });
    });
  });

  const tabBtns = document.querySelectorAll(".sec-tabs .tab-box li");

  tabBtns.forEach(function (tabBtn) {
    tabBtn.addEventListener("click", function () {
      tabBtn.classList.toggle("active");
    });
  });
});

$(document).ready(function () {
  $(".slide-coach-wrapper").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-prev" aria-label=""></button>',
    nextArrow: '<button class="slick-next" aria-label=""></button>',
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2900,
  });
});
