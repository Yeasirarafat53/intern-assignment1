// ======== Initialize Swiper ============
   
      var swiper = new Swiper('.mySwiper', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 10,
          stretch: 60,
          depth: 500,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: '.swiper-pagination',
        },
      });


  //==========sticky header ===========

// window.onscroll = function () {
//   myFunction();
// };

// var header = document.getElementById('header');
// var sticky = header.offsetTop;

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add('header-scrolled');
//   } else {
//     header.classList.remove('header-scrolled');
//   }
// }

   