//----------------------------------------------------------------------------------------------------dropdown-header
document.addEventListener('DOMContentLoaded', () => {
	//1. по клику на пункты верхнего меню открывать дропдаун
	//2. по клику (повторному) на эти пункты - закрывать дропдаун
	//3. по клику в любое место сайта, кроме меню - закрывать дропдаун
	const menuBtns = document.querySelectorAll('.header__bottom-menu-btn');
	const drops = document.querySelectorAll('.dropdown');
	menuBtns.forEach(el => {
		el.addEventListener('click', (e) => {
			let currentBtn = e.currentTarget;
			let drop = currentBtn.closest('.header__bottom-menu-item').querySelector('.dropdown');
			menuBtns.forEach(el => {
				if (el !== currentBtn) {
					el.classList.remove('header__bottom-menu-btn--active');
				}
			});

			drops.forEach(el => {
				if (el !== drop) {
					el.classList.remove('dropdown--active');
				}
			});

			drop.classList.toggle('dropdown--active');
			currentBtn.classList.toggle('header__bottom-menu-btn--active')

		});
	});

	document.addEventListener('click', (e) => {
		if (!e.target.closest('.header__bottom-menu')) {
			menuBtns.forEach(el => {
				el.classList.remove('header__bottom-menu-btn--active');
			});

			drops.forEach(el => {
				el.classList.remove('dropdown--active');
			});

		}
	});
});

//-------------------------------------------------------------------------------------------------------------------------
let headBtn = document.querySelector('.header__search-button');
let searchMenu = document.querySelector('.form__dec');

let closeBtn = document.querySelector('.btn__close');
let closeMenu = document.querySelector('.form__dec');


headBtn.addEventListener('click', function () {
	searchMenu.classList.add('form__dec--active');
});

headBtn.addEventListener('click', function () {
	headBtn.classList.toggle('header__button--reset');
});

closeBtn.addEventListener('click', function () {
	closeMenu.classList.remove('form__dec--active')
});

closeBtn.addEventListener('click', function () {
	headBtn.classList.remove('header__button--reset')
});
//-----------------------------------------------------burger----------------------------------------------------------------
let menuBtn = document.querySelector('.header__burger-btn');
let menu = document.querySelector('.header__burger-menu');
menuBtn.addEventListener('click', function () {
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

//gallery__slider-------------------------------------------------------------------------------------------------------------
new Swiper('.gallery__swiper', {
	slidesPerView: 3,
	slidesPerGroup: 3,
	spaceBetween: 56,
	pagination: {
		el: '#gallery-pagination',
		type: 'fraction',
	},
	navigation: {
		nextEl: '#gallery-button-next',
		prevEl: '#gallery-button-prev',
	},
	allowTouchMove: true,
});

//-----------------------------------------------------------------------------------------------------select------------------------
const mainBtn = document.querySelector('.main__button');
const mainBtnList = document.querySelector('.main__button-list');
const mainBtnItem = mainBtnList.querySelectorAll('.main__button-item');
const mainInput = document.querySelector('.main__input-hidden');

//Клик по кнопке. Открыть/Закрыть select
mainBtn.addEventListener('click', function () {
	mainBtnList.classList.toggle('main__button-list--visible')
	this.classList.add('main__button--active');
});

//Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
mainBtnItem.forEach(function (listItem) {
	listItem.addEventListener('click', function (event) {
		event.stopImmediatePropagation();
		mainBtn.innerText = this.innerText;
		mainBtn.focus()
		mainInput.value = this.dataset.value;
		mainBtnList.classList.remove('main__button-list--visible');
	})
});

//Клик снаружи дропдауна - закрыть дропдаун
document.addEventListener('click', function (event) {
	if (event.target !== document.querySelector('.main__button')) {
		mainBtn.classList.remove('main__button--active');
		mainBtnList.classList.remove('main__button-list--visible');
	}
});

//Нажатие на Tab или Escape. Заклыть Дропдаун
document.addEventListener('keydown', function (e) {
	if (e.key === 'Tab' || e.key === 'Escape') {
		mainBtn.classList.remove('main__button--active');
		mainBtnList.classList.remove('main__button-list--visible');
	}
});

//----------------------------------------------------------------------------------------------accordion
$(function () {
	$("#accordion").accordion({
		icons: false,
		heightStyle: "content",
		active: true,
	});
	$("#accordion").accordion({
		collapsible: true,
		active: 0
	});
});

//----------------------------------------------------------------------------------------------catalog-tabs
document.addEventListener('DOMContentLoaded', function () {
	document.querySelectorAll('.catalog__grid-btn').forEach(function (tabsBtn) {
		//console.log(document.querySelectorAll('.catalog__grid-btn'))
		tabsBtn.addEventListener('click', function (event) {
			const path = event.currentTarget.dataset.path
			//console.log(path)
			document.querySelectorAll('.tab-content').forEach(function (tabContent) {
				tabContent.classList.remove('tab-content--active')
			})
			document.querySelector(`[data-target="${path}"]`).classList.add('tab-content--active')
		})
	})
})

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
});