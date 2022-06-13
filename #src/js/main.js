$(document).ready(function(){
	$('.slider__row').slick({
		arrows:false,
		dots:true,
		slidesToShow: 3,
		slidesToScroll: 2,
		infinite: true,
		speed: 3000,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive:[
			{
				breakpoint: 426,
				settings:{
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode:true,
				}
			},
			{
				breakpoint: 321,
				settings:{
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	});
});

const burgerButtonSelector = document.querySelector('.burger');
const mobileMenuSelector = document.querySelector('.mobile_menu');
const closeButtonSelector = document.querySelector('.close');
const bodyWrapperSelector = document.querySelector('.body_wrapper');
const mobileMenuItemSelector = document.querySelector('.link_list')
const menuSelector = document.querySelector('.menu')


burgerButtonSelector.addEventListener("click",()=>{
    mobileMenuSelector.classList.add("active1")
    bodyWrapperSelector.classList.add("active")
})

closeButtonSelector.addEventListener("click",()=>{
    menuSelector.classList.remove("active")
    mobileMenuSelector.classList.remove("active1")
    bodyWrapperSelector.classList.remove("active")
})

mobileMenuItemSelector.addEventListener("click",()=>{
    menuSelector.classList.remove("active")
    mobileMenuSelector.classList.remove("active1")
    bodyWrapperSelector.classList.remove("active")
})