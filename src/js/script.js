@@include('_testWebP.js');
@@include('vendor.js');

/* --- burger --- */
$(document).ready(function () {
  $('.icon-menu').click(function (event) {
    $('.icon-menu,.menu__body').toggleClass('_active');
    $('body').toggleClass('lock');
  });
}); /* --- burger ends --- */

/* --- toggle (accordion) --- */
const acc = document.getElementsByClassName("faq__accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}; /* --- toggle (accordion) ends --- */

/* --- slider__slick ---*/
$(document).ready(function () {
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
    responsive: [{
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
}); /* --- slider__slick ends ---*/

/* --- quantity ---*/
$('.minus-btn').on('click', function (e) {
  e.preventDefault();
  var $this = $(this);
  var $input = $this.closest('div').find('input');
  var value = parseInt($input.val());

  if (value > 1) {
    value = value - 1;
  } else {
    value = 0;
  }

  $input.val(value);

});

$('.plus-btn').on('click', function (e) {
  e.preventDefault();
  var $this = $(this);
  var $input = $this.closest('div').find('input');
  var value = parseInt($input.val());

  if (value < 100) {
    value = value + 1;
  } else {
    value = 100;
  }

  $input.val(value);
}); /* --- quantity ends ---*/

/* --- calendar datepicker ---*/

 /* --- calendar datepicker ends ---*/