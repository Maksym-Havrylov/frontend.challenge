@@include('_testWebP.js');
@@include('vendor.js');

$(document).ready(function () {
  $('.icon-menu').click(function(event) {
    $('.icon-menu,.menu__body').toggleClass('_active');
    $('body').toggleClass('lock');
  });
});