'use strict';

(function () {
  var nav = document.querySelector('.page-header__nav');
  var toggle = document.querySelector('.page-header__toggle');
  var body = document.querySelector('body');

  body.classList.remove('nojs');
  nav.classList.add('page-header--close');

  toggle.addEventListener('click', function () {
    if (nav.classList.contains('page-header--open')) {
      nav.classList.remove('page-header--open');
      nav.classList.add('page-header--close');
      body.classList.remove('lock');
    } else {
      nav.classList.remove('page-header--close');
      nav.classList.add('page-header--open');
      body.classList.add('lock');
    }
  });


  // "eslint": "4.16.0",
  // "eslint-config-htmlacademy": "0.4.x"
  // "test": "npm run editorconfig && npm run stylelint && eslint source/js/",

  // // Получаем видимую часть слайда
  // var viewport = document.getElementById('viewport').offsetWidth;
  // // Получаем кнопку вперёд
  // var btnNext = document.getElementById('next');
  // // Получаем кнопку назад
  // var btnPrev = document.getElementById('prev');
  // // Получаем элемент со всеми слайдами
  // var slider = document.querySelector('div.slider');
  // // Получаем элементы показа слайда
  // var viewSliders = document.querySelectorAll('.viewSlide');
  // // Объявляем переменную номера слайда
  // var viewSlide = 0;

  // // Назначаем цвет индикатор слайда зелёный
  // viewSliders[0].style.backgroundColor = 'green';

  // // Обработка клика на кнопку вперёд
  // btnNext.addEventListener('click', function () {
  //   // Делаем индикатор слайда красный
  //   viewSliders[viewSlide].style.backgroundColor = 'red';
  //   // Условие, если номер слайда меньше четырёх
  //   if (viewSlide < 4) { // Если верно то
  //     // Увеличиваем номер слайда на один
  //     viewSlide++;
  //   } else { // Иначе
  //     // Номер слайда равен нулю
  //     viewSlide = 0;
  //   }
  //   // Закрашиваем индикатор слайда в зелёный
  //   viewSliders[viewSlide].style.backgroundColor = 'green';
  //   // Меняем позицию всего слайда
  //   slider.style.left = -viewSlide * viewport + 'px';
  // });

  // // Обработка клика на кнопку назад
  // btnPrev.addEventListener('click', function () {
  //   // Делаем индикатор слайда красный
  //   viewSliders[viewSlide].style.backgroundColor = 'ed';
  //   // Условие, если номер слайда больше нуля
  //   if (viewSlide > 0) { // Если верно то
  //     // Уменьшаем номер слайда
  //     viewSlide--;
  //   } else { // Иначе
  //     // Номер слайда равен четырём
  //     viewSlide = 4;
  //   }
  //   // Закрашиваем индикатор слайда в зелёный
  //   viewSliders[viewSlide].style.backgroundColor = 'green';
  //   // Меняем позицию всего слайда
  //   slider.style.left = -viewSlide * viewport + 'px';
  // });

  var isEnterEvent = function (evt, action) {
    if (evt.key === 'Enter') {
      action();
    }
  };

  var isEscEvent = function (evt, action) {
    evt.preventDefault();
    if (evt.keyCode === 27) {
      action();
    }
  };

  var isLeftButtonEvent = function (evt, action) {
    if (evt.button === 0) {
      action();
    }
  };

  var lightbox = document.createElement('div');
  lightbox.id = 'lightbox';
  document.body.appendChild(lightbox);

  var galleryList = document.querySelector('.gallery__list');
  var images = galleryList.querySelectorAll('img');
  // console.log(images);
  images.forEach (image => {
    image.addEventListener ('click', e => {
      lightbox.classList.add ('active');
      // add image to this lightbox
      var img = document.createElement('img');
      img.src = image.src;
  // to check there is any child and remove it
      while (lightbox.firstChild) {
        lightbox.removeChild (lightbox.firstChild)
      }
      lightbox.appendChild (img);
    })
  });


  // lightbox.addEventListener ('click', e => {
  //   // the click is not on an image area
  //   if (e.target !== e.currentTarget) {
  //     return
  //   } else {
  //     lightbox.classList.remove('active');
  //   }
  // });


  var closeCard = function (e) {
    if (e.target !== e.currentTarget) {
      return
    } else {
      lightbox.classList.remove('active');
    }
  };

  var popupCloseMousedownHandler = function (evt) {
    isLeftButtonEvent(evt, closeCard);

    // lightbox.removeEventListener('keydown', popupCloseMousedownHandler);
  };

  lightbox.addEventListener('click', popupCloseMousedownHandler);

  // var popupCloseEscHandler = function (evt) {
  //   isLeftButtonEvent(evt, closeCard);

  //   lightbox.addEventListener('click', popupOpenClickHandler);
  // };
}());
