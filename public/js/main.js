$(function () {
  let formField = $('.form__field'),
    toggleMenu =  $('.btn--hamburger, .btn--close');
  $('.projects .owl-carousel').owlCarousel({
    items: 5,
    dots: true,
    margin: 30,
    autoWidth: true,
    responsive: {
      320: {
        items: 1,
        center: true
      },
      720: {
        items: 2
      },
      780: {
        items: 3
      },
      1200: {
        items: 3
      },
      1920: {
        items: 5
      }
    }
  });
  $('.news .owl-carousel').owlCarousel({
    dots: false,
    margin: 30,
    navContainer:('.section-title .owl-nav'),
    responsive: {
      320: {
        items: 1
      },
      750: {
        items: 2
      },
      1230: {
        items: 3
      }
    }
  });

  formField.on('click', () => {
    $(this).removeClass('active');
    $(this).addClass('active');
  })

  toggleMenu.on('click', () => {
    $('.nav').toggleClass('active');
  })
});
