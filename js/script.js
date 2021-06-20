$(document).ready(function() {
	$('.header-burger').click(function() {
		$('.header-burger, .header-left__nav, body').toggleClass('active');
	});

	// let headerTop = $(".header-block");
	// let header = $(".header");
	// let headerH = header.innerHeight();
	// let scrollPos = $(window).scrollTop();

	// $(window).on("scroll load resize", function() {
	// 	headerH = header.innerHeight();
	// 	scrollPos = $(this).scrollTop();

	// 	if (scrollPos > headerH) {
	// 		headerTop.addClass("fixed");
	// 	} else {
	// 		headerTop.removeClass("fixed");
	// 	}
	// })

	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		let elementID = $(this).data('scroll');
		let elementOffset = $(elementID).offset().top;
		$(".header-burger, .header-left__nav, body").removeClass("active");
		$("html, body").animate({

			scrollTop: elementOffset - 50

		},1000);
	});


	// new Swiper('.work-slider', {
	// 	navigation: {
	// 		nextEl: '.swiper-button-next',
	// 		prevEl: '.swiper-button-prev'
	// 	},

	// 	scrollbar: {
	// 		el: '.swiper-scrollbar',
	// 		draggable: true
	// 	},
	// 	slidesPerView: 1,

	// 	autoHeight: true,
	// });

	// let x = $('.model-mobile');

	// for (var i = 0; i < x.length;i++) {
	// 	let el = x[i];

	// 	let swiper = el.getElementsByClassName('.model-slider')[0];
	// 	let nx = el.getElementsByClassName('.swiper-button-next')[0];
	// 	let pr = el.getElementsByClassName('.swiper-button-prev')[0];
	// }

	new Swiper('.model-slider', {
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},

			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true
			},
			slidesPerView: 1,

			autoHeight: true,
	});
	new Swiper('.work-slider', {
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},

			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true
			},
			slidesPerView: 1,

			autoHeight: true,
	});



	$('.services-slider').slick({
		slidesToShow: 1.4,
		infinite: false,
	});
	$('.model-content__item-slider').slick({
	});
	$('.model-mobile__slider').slick();

	$(function () {
	  var $videoContainer = $('.video-video'),
	    $videoControls = $('.video-control'),
	    $video = $('#myVideo')[0];

	  $videoControls.click(function () {
	    if ($video.paused) {
	      $video.play();
	      $videoContainer.addClass('video-is-playing');
	    } else {
	      $video.pause();
	      $videoContainer.removeClass('video-is-playing');
	      //  возвращаем постер
	      $video.load();
	    }
	  });
	});

	$(".form-form__item-title").click(function() {
		$(".form-form__item-title, .form-form__item-list").toggleClass("active");
	})

	$(".form-form__item-list-li").click(function() {
		let thisItem = $(this).text();
		$(".form-form__item-title").text(thisItem);
		$(".form-form__item-title, .form-form__item-list").removeClass("active");
	});


	// let header = $(".header");
	// let headerBody = $(".texno");
	// let headerBodyH = headerBody.innerHeight();
	// let scrollPos = $(window).scrollTop()

	// $(window).on("scroll load resize", function() {
	// 	headerBodyH = headerBody.innerHeight();
	// 	scrollPos = $(this).scrollTop();

	// 	if (scrollPos > headerBodyH) {
	// 		header.addClass("fixed");
	// 	} else {
	// 		header.removeClass("fixed");
	// 	}
		
	// });



})