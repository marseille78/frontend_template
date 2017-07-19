/*Add navigation (in file maim.js)*/
// var nav = new Nav({ el: '.nav' });

// nav.toggle.addEventListener('click', function(e) {
// 	nav.toggleMenu(e);
// })

function Nav(obj) {
	this.el = document.querySelector(obj.el);
	this.toggle = (obj.toggle) ? document.querySelector(obj.toggle) : document.querySelector(obj.el + ' .js-toggleMenu');
	this.wrapper = (obj.wrapper) ? document.querySelector(obj.wrapper) : document.querySelector(obj.el + ' .nav__wrapper');
}

Nav.prototype.toggleMenu = function(e) {
	e.preventDefault();
	this.wrapper.classList.toggle('opened');
	document.body.classList.toggle('opened');
}
/***********************************
 * Slider
 ***********************************/
var slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.querySelectorAll('.slider__item');
	var dots = document.querySelectorAll('.slider__dot');

	if (n > slides.length) {
		slideIndex = 1;
	}

	if (n < 1) {
		slideIndex = slides.length;
	}

	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}

	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace('active', '');
	}

	slides[slideIndex - 1].style.display = 'block';
}
/**
 * Обробка при клиці на layout
 * --------------------------------
 * bodyOverlay - Напівпрозорий фон під мобільне меню, чи під попап
 */
window.addEventListener('click', function(e) {
	var bodyOverlay = document.querySelector('body.opened');

	switch (e.target) {
		case bodyOverlay:
			removeAllOpened();
			break;
	}
});

/**
 * Скидання відкритих елементів при зміні розміру сторінки
 */
window.addEventListener('resize', removeAllOpened);

/**
 * Скидання відкритих елементів
 * (наприклад мобільне меню, попап, напівпрозорий фон)
 */
function removeAllOpened() {
	var allOpened = document.querySelectorAll('.opened');
	for (var i = 0; i < allOpened.length; i++) {
		allOpened[i].classList.remove('opened');
	}
}