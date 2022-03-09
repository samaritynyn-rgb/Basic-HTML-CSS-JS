//This polyfill adds compatibility to all Browsers supporting ES5
if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}

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

//---------------------------------------------------------------------------------Яндекс карта
//	//Элементы управления
////кнопка разворачивания карты на весь экран control.FullscreenControl;
//myMap.controls.add('fullscreenControl');
////кнопка определения местоположения пользователя control.GeolocationControl;
//myMap.controls.add('geolocationControl');
////кнопка включения и отключения поведения "редактор маршрута"control.RouteEditor;
//myMap.controls.add('routeEditor');
////кнопка включения и отключения поведения "линейка"control.RulerControl;
//myMap.controls.add('rulerControl');
////поисковая строка control.SearchControl.
//myMap.controls.add('searchControl');
////панель пробок control.TrafficControl;
//myMap.controls.add('trafficControl');
////панель переключения типа карты control.TypeSelector;
//myMap.controls.add('typeSelector');
////ползунок масштаба control.ZoomControl;
//myMap.controls.add('zoomControl');
////панель для построения маршрутов control.RouteButton,
//myMap.controls.add('routePanelControl');
////панель маршрутизации control.RoutePanel.