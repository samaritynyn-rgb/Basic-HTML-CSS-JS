new Swiper('.swiper', {
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

$(function () {
  $("#accordion").accordion({
    collapsible: true,
    active: false,
    heightStyle: "content",
  });
});
//-------------------------------------------------------section-working-tab
document.addEventListener('DOMContentLoaded', function () {
  // console.log(document.querySelectorAll('.tabs__btn'))
  document.querySelectorAll('.tabs__btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      // console.log(path)
      document.querySelectorAll('.tab-content').forEach(function (tabContent) {
        tabContent.classList.remove('tab-content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
    })
  })
})

document.querySelectorAll('.tabs__btn').forEach(function (element) {
  element.addEventListener('click', function (event) {
    event.target.classList.toggle('alert')
  })
})
//-------------------------------------------------------menuBurger
let menuBtn = document.querySelector('.menu__btn');
// 1. Создаем переменную присвоения по классу
let menu = document.querySelector('.menu__start');

menuBtn.addEventListener('click', function () {
  // 2. Отслеживаем (слушатель addEventListener) переменную при событие клик
  menuBtn.classList.toggle('menu__btn--active')
  // 3. Создаем или убираем класс
  menu.classList.toggle('menu--active')
});
//-----------------------------------------------------searchMenu
let headBtn = document.querySelector('.header__button');
let searchMenu = document.querySelector('.form__dec');

let closeBtn = document.querySelector('.btn__close');
let closeMenu = document.querySelector('.form__dec')


headBtn.addEventListener('click', function () {
  searchMenu.classList.add('form__dec--active');
});

closeBtn.addEventListener('click', function () {
  closeMenu.classList.remove('form__dec--active')
})
