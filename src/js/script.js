@@include('_testWebP.js');

$(document).ready(function () {
  $('.menu__icon').click(function(event) {
    $('.menu__icon,.header__menu').toggle('._active');
  });
});