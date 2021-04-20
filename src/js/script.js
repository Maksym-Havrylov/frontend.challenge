@@include('_testWebP.js');
@@include('vendor.js');

// .burger
$(document).ready(function () {
  $('.icon-menu').click(function(event) {
    $('.icon-menu,.menu__body').toggleClass('_active');
    $('body').toggleClass('lock');
  });
});

// .toggle (accordion)
const acc = document.getElementsByClassName("faq__accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

// slider__slick
// $(document).ready(function(){
//   $('slider__slick').slick({
//     setting-name: setting-value
//   });
// });