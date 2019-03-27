// Adjust viewport height in mobile browsers
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);
window.addEventListener("resize", () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});

//Hide other collapses when one is clicked
$(".nosotros-btn").click(function() {
  $("#mision, #vision, #valores").collapse("hide");
});

//Smooth Scroll
$("#main-nav a, #scroll-down-indicator").on("click", function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      1000,
      function() {
        window.location.hash = hash;
      }
    );
  }
});

//Initialize slider
$(".slider").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// Back to top button
jQuery(document).ready(function() {
  let btn = $(".back-to-top");

  $(window).scroll(function() {
    if ($(window).scrollTop() > 800) {
      btn.addClass("btn-top--show");
    } else {
      btn.removeClass("btn-top--show");
    }
  });

  btn.on("click", function(e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });
});
