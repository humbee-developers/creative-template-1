jQuery(document).ready(function ($) {
  $(".tab1").addClass("active");
  $(".tab1_content").addClass("active");
  $(".tab").on("click", function () {
    var dataTab = $(this).attr("data-tab");
    if ($(this).hasClass("active")) {
      $(".tab").removeClass("active");
      $(".tab1_content").removeClass("active");
    } else {
      $(".tab").removeClass("active");
      $(this).addClass("active");
      if ($("#" + dataTab).length > 0) {
        jQuery("#" + dataTab)
          .addClass("active")
          .siblings()
          .removeClass("active");
      }
    }
  });
  $(".herosection_wrapper").slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  });
  $(".cardSlider_list").slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: "150px",
    prevArrow: $(".cardSlider_arrows .leftArrow"),
    nextArrow: $(".cardSlider_arrows .rightArrow"),
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          centerPadding: "80px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });
  $("#inquiry").selectric();
});

