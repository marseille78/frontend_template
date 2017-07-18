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