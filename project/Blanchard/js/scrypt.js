const menuBurger = document.querySelector('.menu__burger');
if (menuBurger) {
	const menuHeader = document.querySelector('.menu__header');
	menuBurger.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		menuBurger.classList.toggle('_active');
		menuHeader.classList.toggle('_active');
	});
}

let resetMenu = document.querySelector('.header__top-link');
let activeMenu = document.querySelector('._active');
resetMenu.addEventListener('click', function () {
	activeMenu.classList.remove('_active');
});
let headBtn = document.querySelector('.header__search-button');
let searchMenu = document.querySelector('.form__dec');
let closeBtn = document.querySelector('.btn__close');
let closeMenu = document.querySelector('.form__dec');
let searchWrap = document.querySelector('.header__search-wrap');
let reset = document.querySelector('.header__logo');
let resetBurger = document.querySelector('.menu__burger');
let resetPlag = document.querySelector('.plag');

headBtn.addEventListener('click', function () {
	searchWrap.classList.add('un');
});
closeBtn.addEventListener('click', function () {
	searchWrap.classList.remove('un')
});
headBtn.addEventListener('click', function () {
	reset.classList.add('reset');
});
closeBtn.addEventListener('click', function () {
	reset.classList.remove('reset')
});
headBtn.addEventListener('click', function () {
	resetBurger.classList.add('reset-burger');
});
closeBtn.addEventListener('click', function () {
	resetBurger.classList.remove('reset-burger')
});
headBtn.addEventListener('click', function () {
	resetPlag.classList.add('plag--lock');
});
closeBtn.addEventListener('click', function () {
	resetPlag.classList.remove('plag--lock')
});
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

document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("off1").addEventListener("click", function () {
		document.querySelector(".menu__header").classList.toggle("_active");
		document.querySelector(".menu__burger").classList.toggle("_active");
		document.body.classList.remove('_lock');
	})
})
document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("off2").addEventListener("click", function () {
		document.querySelector(".menu__header").classList.toggle("_active");
		document.querySelector(".menu__burger").classList.toggle("_active");
		document.body.classList.remove('_lock');
	})
})
document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("off3").addEventListener("click", function () {
		document.querySelector(".menu__header").classList.toggle("_active");
		document.querySelector(".menu__burger").classList.toggle("_active");
		document.body.classList.remove('_lock');
	})
})
document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("off4").addEventListener("click", function () {
		document.querySelector(".menu__header").classList.toggle("_active");
		document.querySelector(".menu__burger").classList.toggle("_active");
		document.body.classList.remove('_lock');
	})
})
document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("off5").addEventListener("click", function () {
		document.querySelector(".menu__header").classList.toggle("_active");
		document.querySelector(".menu__burger").classList.toggle("_active");
		document.body.classList.remove('_lock');
	})
})
document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("off6").addEventListener("click", function () {
		document.querySelector(".menu__header").classList.toggle("_active");
		document.querySelector(".menu__burger").classList.toggle("_active");
		document.body.classList.remove('_lock');
	})
})

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

//SimpleBar - header-bottom
new SimpleBar(document.querySelector(".simplebar"), {
	/* чтобы изначально ползунок был виден */
	autoHide: false,
	/* с помощью этого значения вы можете управлять высотой ползунка*/
	scrollbarMaxSize: 25,
});
document.querySelectorAll(".simplebar").forEach(item => {
	new SimpleBar(item, {
		/* чтобы изначально ползунок был виден */
		autoHide: false,
		/* с помощью этого значения вы можете управлять высотой ползунка*/
		scrollbarMaxSize: 25,
	});
})

//-----------------------------------------------------------select------------------------
const element = document.querySelector('#selectCustom');
const choices = new Choices(element, {
	searchEnabled: false,
	shouldSort: false,
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

/*tooltip*/
tippy('.projects__tooltep-1', {
	content: "Пример современных тенденций - современная методология разработки",
	maxWidth: 264,
});

tippy('.projects__tooltep-2', {
	content: "Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции",
	maxWidth: 264,
});

tippy('.projects__tooltep-3', {
	content: "В стремлении повысить качество",
	maxWidth: 264,
});

//--------------------------------------------------------------------------ymaps
// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);

function init() {
	// Создание карты.
	var myMap = new ymaps.Map("map", {
		// Координаты центра карты.
		// Порядок по умолчанию: «широта, долгота».
		// Чтобы не определять координаты центра карты вручную,
		// воспользуйтесь инструментом Определение координат.
		center: [55.758468, 37.601088],
		// Уровень масштабирования. Допустимые значения:
		// от 0 (весь мир) до 19.
		zoom: 14,
		//Скрыть элементы управления
		//controls: []
	});
	myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
		hintContent: 'Шоурум №4 Леонтьевский переулок, дом 5/1',
		balloonContent: 'Шоурум №4 Леонтьевский переулок, дом 5/1'
	}, {
		iconLayout: 'default#image',
		iconImageHref: 'img/local.svg',
		iconImageSize: [20, 20],
		iconImageOffset: [-5, -38]
	});
	// Размещение геообъекта на карте.
	//myMap.geoObjects.add(myGeoObject);
	myMap.geoObjects.add(myPlacemark);
	//отключаем зум колёсиком мышки
	myMap.behaviors.disable('scrollZoom');
	//Элементы управления
	//кнопка разворачивания карты на весь экран control.FullscreenControl;
	myMap.controls.remove('fullscreenControl');
	//кнопка определения местоположения пользователя control.GeolocationControl;
	myMap.controls.add('geolocationControl');
	//кнопка включения и отключения поведения "редактор маршрута"control.RouteEditor;
	myMap.controls.remove('routeEditor');
	//кнопка включения и отключения поведения "линейка"control.RulerControl;
	myMap.controls.remove('rulerControl');
	//поисковая строка control.SearchControl.
	myMap.controls.remove('searchControl');
	//панель пробок control.TrafficControl;
	myMap.controls.remove('trafficControl');
	//панель переключения типа карты control.TypeSelector;
	myMap.controls.remove('typeSelector');
	//ползунок масштаба control.ZoomControl;
	//myMap.controls.add('zoomControl');
	myMap.controls.add('zoomControl', {
		size: 'small',
		float: 'none',
		position: {
			bottom: '50px',
			right: '30px'
		}
	});
	//панель для построения маршрутов control.RouteButton,
	myMap.controls.remove('routePanelControl');
	//панель маршрутизации control.RoutePanel.
	//на мобильных устройствах... (проверяем по userAgent браузера)
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		//... отключаем перетаскивание карты
		myMap.behaviors.disable('drag');
	}
}

//-------------------------------------------------------form
$(document).ready(function () {
	$("#tel").mask("+7 (999) 99-99-999");
});
$(document).ready(function () {
	$("#validate-form").validate({
		errorClass: "error fail-alert",
		validClass: "valid success-alert",
		rules: {
			name: {
				required: true,
				minlength: 3,
			},
			tel: {
				required: true,
			},
		},
		messages: {
			name: {
				minlength: "Имя 3 символа и более",
				required: "Недопустимый формат",
			},
			tel: {
				required: "Недопустимый формат",
			}
		}
	});
});

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
	anchor.addEventListener("click", function (event) {
		event.preventDefault();
		const blockID = anchor.getAttribute('href')
		document.querySelector('' + blockID).scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	})
}







