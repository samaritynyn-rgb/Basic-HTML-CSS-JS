//---------------------------------------------------- hero-swiper
const swiper = new Swiper('.hero__swiper', {
	// Default parameters
	slidesPerView: 1,
	spaceBetween: 10,
	speed: 2000,
	autoplay: {
		delay: 2000
	},
	effect: "fade",
	//navigation: {
	//	nextEl: ".swiper-button-next",
	//	prevEl: ".swiper-button-prev"
	//},
	//pagination: {
	//	el: '.swiper-bullet-pagination',
	//	type: 'bullets',
	//	clickable: true
	//}
})


//-------------------------------------------------------gallery__slider


document.addEventListener("DOMContentLoaded", () => {
	let gallerySlider = new Swiper(".slides-container", {
		slidesPerView: 1,
		grid: {
			rows: 1,
			fill: "row"
		},
		spaceBetween: 20,
		pagination: {
			el: ".gallery .test-pagination",
			type: "fraction"
		},
		navigation: {
			nextEl: ".test-next",
			prevEl: ".test-prev"
		},

		breakpoints: {
			441: {
				slidesPerView: 2,
				spaceBetween: 30
			},

			1200: {
				slidesPerView: 3,
				spaceBetween: 50
			}
		},

		a11y: false,
		keyboard: {
			enabled: true,
			onlyInViewport: true
		}, // можно управлять с клавиатуры стрелками влево/вправо

		// Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
		watchSlidesProgress: true,
		watchSlidesVisibility: true,
		slideVisibleClass: "slide-visible",

		on: {
			init: function () {
				this.slides.forEach((slide) => {
					if (!slide.classList.contains("slide-visible")) {
						slide.tabIndex = "-1";
					} else {
						slide.tabIndex = "";
					}
				});
			},
			slideChange: function () {
				this.slides.forEach((slide) => {
					if (!slide.classList.contains("slide-visible")) {
						slide.tabIndex = "-1";
					} else {
						slide.tabIndex = "";
					}
				});
			}
		}


	});
});



//----------------------------------------------------------------------------event__slider
new Swiper('.event__swiper', {
	slidesPerView: 3,
	slidesPerGroup: 1,
	initialSlide: 0,
	spaceBetween: 50,
	navigation: {
		nextEl: '#event-button-next',
		prevEl: '#event-button-prev',
	},
	pagination: {
		el: '#event-pagination',
		type: 'bullets',
		clickable: true,
	},
	breakpoints: {
		1024: {
			slidesPerView: 3,
			slidesPerGroup: 2,
			spaceBetween: 50,
		},
		510: {
			slidesPerView: 2,
			slidesPerGroup: 2,
			spaceBetween: 34,
		},
		0: {
			slidesPerView: 1,
			slidesPerGroup: 1,
		}
	}
});

//----------------------------------------------------------------------------project__slider
new Swiper('.project__swiper', {
	slidesPerView: 3,
	slidesPerGroup: 3,
	spaceBetween: 50,
	loop: true,
	navigation: {
		nextEl: '#project-button-next',
		prevEl: '#project-button-prev',
	},
	breakpoints: {
		1460: {
			slidesPerView: 3,
			spaceBetween: 20
		},
		1024: {
			slidesPerView: 2,
			spaceBetween: 20,
			slidesPerGroup: 2,
		},

		700: {
			slidesPerView: 2,
			spaceBetween: 12,
			slidesPerGroup: 1,
		},

		0: {
			slidesPerView: 1,
			slidesPerGroup: 1,
		}
	}
});