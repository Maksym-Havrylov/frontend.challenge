@@include('_testWebP.js');
@@include('vendor.js');

/* --- burger --- */
$(document).ready(function () {
  $('.icon-menu').click(function(event) {
    $('.icon-menu,.menu__body').toggleClass('_active');
    $('body').toggleClass('lock');
  });
});

/* --- toggle (accordion) --- */
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
};

/* --- slider__slick ---*/
$(document).ready(function(){
  $('.slider').slick({
    infinite: true,
    arrows: false,
    focusOnSelect: true,
    pauseOnDotsHover: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    // dots: true,
    responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2,
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	      }
	    }
    ]
  });
});

/* --- dropdown btn --- */
function myFunction() {
  document.getElementById("calculatorDropdown").classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropdown__btn')) {
  var myDropdown = document.getElementById("calculatorDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}