//swiper - baner
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

//SimpleBar - header
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

tippy('.tippy', {
	duration: 1000,
	maxWidth: 264,
});

tippy('#tool1', {
	content: 'Пример современных тенденций - современная методология разработки',
});
tippy('#tool2', {
	content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают вас эмоции',
});
tippy('#tool3', {
	content: 'В стремлении повысить качество',
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