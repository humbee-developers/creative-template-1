jQuery(document).ready(function ($) {
  $(".tab1").addClass("active");
  $(".tab1_content").addClass("active");
  $(".tab").on("click", function () {
    var dataTab = $(this).attr("data-tab");
    if ($(this).hasClass("active")) {
      $(".tab").removeClass("active");
      $(".tab_content").removeClass("active");
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
  $(".s_op4_tab_content").hide();
  $(".s_op4_tab_content1").addClass("active").show();
  $(".s_op4_tab1").addClass("active");
  $(".s_op4_tab").on("click", function () {
    var dataTab = $(this).attr("data-tab");
    if ($(this).hasClass("active")) {
      $(".s_op4_tab").removeClass("active");
      $(".tab_content").removeClass("active");
    } else {
      $(".s_op4_tab").removeClass("active");
      $(this).addClass("active");
      if ($("#" + dataTab).length > 0) {
        jQuery("#" + dataTab)
          .addClass("active").show()
          .siblings()
          .removeClass("active").hide();
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
  $(".servicesslides").slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    cssEase: "linear",
    prevArrow: $(".service_op_1_slider_arrow_left"),
    nextArrow: $(".service_op_1_slider_arrow_right"),
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

  $(".image_index_sldier_item")
    .slick({
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 1000,
      arrows: false,
      dots: false,
      centerMode: false,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            variableWidth: false,
            slidesToShow: 1,
          },
        },
      ],
    })
    .on("afterChange", function (event, slick, currentSlide) {
      $("#currentSlideIndex").text(`0${currentSlide + 1}`);
    });
  $("select").selectric();
});
