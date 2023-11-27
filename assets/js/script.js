//menumobile
function menuShow() {
  let menuMobile = document.querySelector('.mobile-menu');
  if (menuMobile.classList.contains('open')) { 
      menuMobile.classList.remove('open');
      document.querySelector('.icon').src= "media/barra-de-menu.png";
  } else {
      menuMobile.classList.add('open')
      document.querySelector('.icon').src= "media/marca-x.png";
  }
}

//slider for Swiper JS

var swiper = new Swiper(".slide-content", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });