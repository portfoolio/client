$(function () {
  let formField = $('.form__field'),
    toggleMenu =  $('.btn--hamburger, .btn--close');

  formField.on('click', () => {
    $(this).removeClass('active');
    $(this).addClass('active');
  })

  toggleMenu.on('click', () => {
    $('.nav').toggleClass('active');
  })
});
