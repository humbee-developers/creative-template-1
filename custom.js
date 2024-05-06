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
  $(".nav_search").addClass("hideSearch");
  $(".nav_search_btn").on("click", function () {
    if ($(".nav_search").hasClass("showSearch")) {
      $(".nav_search").removeClass("showSearch");
      $(".nav_search").addClass("hideSearch");
    } else {
      $(".nav_search").addClass("showSearch");
      $(".nav_search").removeClass("hideSearch");
    }
  });

  $(".hamburger-menu").on("click", function () {
    $(".bar").toggleClass("animate");
    $(".mobile-menu").toggleClass("active");
    return false;
  });
  $(".s_op1_card1").addClass("expand");
  $(".s_op1_card").on("click", function () {
    $(this).addClass("expand");
    $(this).siblings().removeClass("expand");
   
  });

  $(".has-children").on("click", function () {
    $(this).children("ul").slideToggle("slow", "swing");
    // $(this).toggleClass("open");
    if ($(this).hasClass("open")) {
      $(this).removeClass("open");
      $(this).addClass("close");
    } else {
      $(this).addClass("open");
      $(this).removeClass("close");
    }
    if ($(this).hasClass("open")) {
      $(".has-children.open .icon-arrow").addClass("open");
    } else {
      $(".has-children.close .icon-arrow").removeClass("open");
    }
  });

  $(".herosection_wrapper").slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
  });

// verticalswiper
  $(document).ready(function(){
    var slider = $(".vertical-slider").slick({
        vertical: false,
        verticalSwiping: true,
        infinite: true,
        autoplay:true,
        fade: true,
        cssEase: 'ease-in-out',
        touchThreshold: 100,
        arrows: false,
        speed: 500,
        slidesToShow: 1
    });

  
    $(".text-center p").click(function(){
      $(".text-center p").removeClass("text-yellow-500 scale-110");
      $(this).addClass("text-yellow-500 scale-110");
     var index = $(this).index();
     slider.slick('slickGoTo', index);
    });

  
    slider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
   $(".text-center p").removeClass("text-yellow-500 scale-110");
   $(".text-center p").eq(nextSlide).addClass("text-yellow-500 scale-110");
    });
});






  $(".services_op5_slider").slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: $(".services_op5_arrow"),
    prevArrow: $(".services_op5_arrow_prev"),
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

  $(".count").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 4000,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
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

  gsap.registerPlugin(ScrollTrigger);

  function initTimeline() {
    let parent_container = document.getElementById("section-timeline");
    let timeline_container = parent_container.querySelector(
      ".timeline-container"
    );
    var sections = timeline_container.querySelectorAll(".year");

    const vh = (coef) => window.innerHeight * (coef / 100);

    let parentST = ScrollTrigger.create({
      id: "parent-timeline",
      trigger: parent_container,
      start: "top top",
      toggleClass: "started",
      pin: true,
      markers: true,
      end: () => "+=" + (sections.length - 1) * vh(50),
    });

    let currentSection;

    function goto(section, i) {
      if (currentSection !== section) {
        gsap.to(timeline_container, {
          y: -50 * i,
          duration: 0.6,
          overwrite: true,
        });
        let tl = gsap.timeline({ defaults: { overwrite: true } });
        if (currentSection) {
          tl.to(currentSection.querySelector(".text-content h2"), {
            fontSize: "2rem",
          });
          tl.to(
            currentSection,
            {
              maxHeight: "3rem",
            },
            0
          );
          tl.to(
            currentSection.querySelectorAll(".text-content p"),
            {
              opacity: 0,
              duration: 0.25,
              maxHeight: "0%",
            },
            0
          );
        }
        currentSection = section;
        if (section) {
          tl.to(
            section.querySelector(".text-content h2"),
            {
              fontSize: "5rem",
            },
            0
          );
          tl.to(
            section,
            {
              maxHeight: "80vh",
            },
            0
          );
          tl.fromTo(
            section.querySelectorAll(".text-content p"),
            { maxHeight: "0%" },
            {
              opacity: 1,
              maxHeight: "100%",
            }
          );
        }
      }
    }

    sections.forEach((sct, i) => {
      let sct_index = sct.getAttribute("data-count");

      ScrollTrigger.create({
        start: () => parentST.start + i * window.innerHeight * 0.4,
        end: () => "+=" + window.innerHeight * 0.4,
        markers: true,
        onLeaveBack: () => i || goto(null, 0),
        onToggle: (self) => self.isActive && goto(sct, sct_index),
      });
    });
  }

  initTimeline();

  var listItems = $(".timelineLIst .timeline_item");

  // Create a GSAP timeline
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".timelineLIst",
      start: "top center",
      end: "bottom center",
      scrub: true, // Smooth scrubbing effect
      pin: true,
    },
  });

  // Add animations to the timeline
  listItems.each(function (index, listItem) {
    tl.to(listItem, {
      color: "#002D70",
      duration: 1,
      ease: "none",
      fontSize: "50",
      onStart: function () {
        // Remove highlight class from all list items except the current one
        listItems.removeClass("highlight");
        // Add highlight class to the current list item
        $(listItem).addClass("highlight");
        $(".listData").removeClass("highlightData");
        $(listItem).next(".listData").addClass("highlightData");
        listItems.css({
          "font-size": "35px",
          color: "#A8A8A8",
        });
      },
      onComplete: function () {
        // Remove highlight class from the previous list item
        if (index > 0) {
          $(listItems[index - 1]).removeClass("highlight");
          $(".listData").removeClass("highlightData");
        }
      },
    });
  });
});


