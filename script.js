const swiper1 = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      }
    });
    
const swiper2 = new Swiper(".swipee", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination-2",
    clickable: true,
  },
});