$(document).ready(function(){
  var carousel5 = $("#section_5-carousel");
  if(carousel5.length) {
    carousel5.owlCarousel({
 
      autoPlay: 3500, //Set AutoPlay to 3 seconds
      autoplayHoverPause: false,
  
      items : 1,
      itemsDesktop : [1180,3],
      itemsTablet: [992,2],
      itemsMobile : [600, 1],
      responsiveClass:true,
      autoHeight:true,
      dots: true,
  
    });
  }

  var franchiseCarousel = $("#franchise-carousel");
  if(franchiseCarousel.length) {
    franchiseCarousel.owlCarousel({
 
      autoPlay: 3500, //Set AutoPlay to 3 seconds
      autoplayHoverPause: false,
  
      items : 3,
      itemsTablet: [992,2],
      itemsMobile : [600, 1],
      responsiveClass:true,
      autoHeight: true,
      dots: true,
      slideBy: 3,
  
    });
  }

  var bannerCarousel = $("#banner-carousel");
  if(bannerCarousel.length) {
    bannerCarousel.owlCarousel({
 
      autoPlay: 4500, //Set AutoPlay to 3 seconds
      autoplayHoverPause: false,
      singleItem: true,
      autoHeight: true,
      dots: true,
  
    });
  }

  $('.nav-btn').click(function() {
    $('body').toggleClass('active')
  })

  var bodyClass = $("body");
  var headerOffset = bodyClass.offset().top;

  $(window).scroll(function() {
    if ($(window).scrollTop() > headerOffset) {
      bodyClass.addClass("sticky-nav");
    } else {
      bodyClass.removeClass("sticky-nav");
    }

    // Check if the user has scrolled to the top
    if ($(window).scrollTop() === 0) {
      bodyClass.removeClass("sticky-nav");
    }
  });

});
