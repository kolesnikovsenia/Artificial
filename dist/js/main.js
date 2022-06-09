$(document).ready(function(){
	$('.slider__row').slick({
		arrows:false,
		dots:true,
		slidesToShow: 3,
		slidesToScroll: 2,
		infinite: true,
		speed: 3000,
		autoplay: true,
		autoplaySpeed: 2000
	});
});