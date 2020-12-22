'use strict';

(function () {
  var toggle = document.querySelector('.page-header__toggle');
  var body = document.querySelector('body');
  var nav = document.querySelector('.page-header__block');

  body.classList.remove('nojs');
  nav.classList.add('page-header--open');

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

  var sections = document.querySelectorAll('.page-section--main');
  var mainNav = document.querySelector('.page-header__block');
  var links = document.querySelectorAll('.main-nav__link');

  var removeActiveClass = function () {
    links.forEach(function (el) {
      if (el.classList.contains('active')) {
        el.classList.remove('active');
      }
    });
  };
  var checkScrollDistance = function () {
    var scrollDistance = window.pageYOffset;

    sections.forEach(function (el, i) {
      var top = el.offsetTop - mainNav.clientHeight;
      var bottom = el.clientHeight + top;
      if (top < scrollDistance && scrollDistance < bottom) {
        removeActiveClass();
        document.querySelectorAll('.main-nav li')[i].querySelector('a').classList.add('active');
      }
    });
    document.removeEventListener('scroll', checkScrollDistance);
  };

  window.addEventListener('scroll', checkScrollDistance);
}());
