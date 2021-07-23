function backgroundImage(e) {
  $(e).each(function() {
    var img = $(this).find("img").attr("src");
    $(this).css("background-image", 'url("' + img + '")');
  });
}

$(function() {
  $('.dialog .dialog-close').click(function() {
		$('.dialog').animate({opacity: 0}, 600, function() {
			$(this).addClass("hidden");
		});
	});

  $('.hero > ul').slick({
    slidesToShow: 1,
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 116000,
    pauseOnHover: false,
    slide: 'li',
    speed: 500
  });

  backgroundImage('.hero li.slick-slide');

  $('.happening > ul').slick({
    slidesToShow: 3,
    dots: true,
    arrows: true,
    autoplay: false,
    pauseOnHover: false,
    slide: 'li',
    speed: 500
  });

  backgroundImage('.navigation .dropdown .drop-image');
});
