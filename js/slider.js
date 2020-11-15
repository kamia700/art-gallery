'use strict';

(function () {
  // slider

  // получаем все слайды из контейнера
  var slides = document.querySelectorAll('.slide');

  // создаем переменную для получения текущего слайда
  var currentSlide = 0;

  function nextSlide() {
    // меняем класс для текущего слайда, чтобы спрятать его.
    // Свойство transition автоматически обрабатывает плавное затухание
    slides[currentSlide].className = 'slide';

    // добавляем класс к текущему слайду. Мы используем оператор % на случай, если это был последний слайд, чтобы вернуться к первому. Данный оператор отлично подходит в случаях, когда необходимо выполнять математические операции с циклами типа часов или календаря. В нашем случае 5 слайдов. Посчитаем все числа: 1%5=1, 2%5=2, 3%5=3, 4%5=4, and 5%5=0.
    currentSlide = (currentSlide + 1) % slides.length;

    // получения индекса слайда мы меняем класс и показываем новый. И опять прозрачность обрабатывается свойством transition.
    slides[currentSlide].className = 'slide show';
  };

  function prevSlide() {
    // меняем класс для текущего слайда, чтобы спрятать его.
    // Свойство transition автоматически обрабатывает плавное затухание
    slides[currentSlide].className = 'slide';

    if (currentSlide === 0) {
      currentSlide = slides.length - 1;
      console.log(currentSlide);
    } else {
      currentSlide = (currentSlide - 1) % slides.length;
    }

    // добавляем класс к текущему слайду. Мы используем оператор % на случай, если это был последний слайд,
    // чтобы вернуться к первому. Данный оператор отлично подходит в случаях,
    // когда необходимо выполнять математические операции с циклами типа часов или календаря.
    // В нашем случае 5 слайдов. Посчитаем все числа: 1%5=1, 2%5=2, 3%5=3, 4%5=4, and 5%5=0.


    // получения индекса слайда мы меняем класс и показываем новый. И опять прозрачность обрабатывается свойством transition.
    slides[currentSlide].className = 'slide show';
  };

  // задаем интервал в две секунды для следующего слайда (5000ms)
  var interval = setInterval(nextSlide, 5000);
  // interval();

  var btnLeft = document.querySelector('.slider__btn-left'); // кнопка "LEFT"
  var btnRight = document.querySelector('.slider__btn-right'); // кнопка "RIGHT"
  // var slider = document.querySelector('.slider');

  // console.log (btnLeft);
  // var position = 0;
  // var slidesToShow = 1;
  // var slidesToShow = 1;
  // var itemsCount = slides.length;
  // var itemWidth = container.width() / slidesToShow;
  // var movePosition = sliderToScroll * itemWidth;

  // обработчик события click для кнопок "назад" и "вперед"
  var showL = function () {
    prevSlide()
  };

  var showR = function () {
    nextSlide()
  };

  btnLeft.addEventListener('click', showL);
  btnRight.addEventListener('click', showR);
}());
