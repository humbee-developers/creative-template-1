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
    speed: 500,
    slidesToShow: 1,
    slidesToScroll:1,
    arrows:false
  })
});
