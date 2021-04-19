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
var acc = document.getElementsByClassName("faq__accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

