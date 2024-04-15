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
          .addClass("active")
          .show()
          .siblings()
          .removeClass("active")
          .hide();
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

  let progressObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // If the section is in view, animate its progress bar
          let $progressWrap = $(entry.target).find(".progress-wrap");
          moveProgressBar($progressWrap);
          progressObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  $(".progress-section").each(function () {
    progressObserver.observe($(this)[0]);
  });

  function moveProgressBar($progressWrap) {
    var getPercent = $progressWrap.data("progress-percent") / 100;
    var getProgressWrapWidth = $progressWrap.width();
    var progressTotal = getPercent * getProgressWrapWidth;
    var animationLength = 2500;
    $progressWrap.find(".progress-bar").stop().animate(
      {
        left: progressTotal,
      },
      animationLength
    );
  }

  // Define the Intersection Observer callback function
  let counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // If the section is in view, animate its counter
          startCounterAnimation($(entry.target).find(".pregressCount"));
          counterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  ); // Set the threshold to 50% visibility

  // Observe each section with the class .counter-section
  $(".counter-section").each(function () {
    counterObserver.observe($(this)[0]);
  });

  // Function to start counter animation
  function startCounterAnimation($counterValue) {
    $counterValue.prop("Counter", 0).animate(
      {
        Counter: $counterValue.text(),
      },
      {
        duration: 2500,
        easing: "swing",
        step: function (now) {
          $(this).text(Math.ceil(now));
        },
      }
    );
  }

  // $(".pregressCount").each(function () {
  //   $(this)
  //     .prop("Counter", 0)
  //     .animate(
  //       {
  //         Counter: $(this).text(),
  //       },
  //       {
  //         duration: 2500,
  //         easing: "swing",
  //         step: function (now) {
  //           $(this).text(Math.ceil(now));
  //         },
  //       }
  //     );
  // });

  let circularProgresses = $(".circular-progress");

  let observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startProgressAnimation($(entry.target));
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  circularProgresses.each(function () {
    observer.observe($(this)[0]);
  });

  function startProgressAnimation(element) {
    let progressValue = element.find(".progress-value");
    let progressStartValue = 0;
    let progressEndValue = parseInt(element.data("end-value"));
    let speed = parseInt(element.data("speed"));

    let progress = setInterval(() => {
      progressStartValue++;

      progressValue.text(`${progressStartValue}%`);
      element.css(
        "background",
        `conic-gradient(#dfa621 ${progressStartValue * 3.6}deg, #ededed 0deg)`
      );

      if (progressStartValue == progressEndValue) {
        clearInterval(progress);
      }
    }, speed);
  }
});
