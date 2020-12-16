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
}());
