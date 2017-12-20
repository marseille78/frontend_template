/**
 * Объект главного меню
 * @param el {String} - Селектор элемента
 * @constructor
 */
function MainMenu(el) {
    this.el = document.querySelector(el);
    this.btnToggle = this.el.querySelector('.js-mainMenuToggle');
    this.list = this.el.querySelector(el + '__list');

    var clearActive = this.clearActive.bind(this);
    var toggleMenu = this.toggleMenu.bind(this);

    this.btnToggle.addEventListener('click', toggleMenu);
    window.addEventListener('resize', clearActive);
}

/**
 * Открытие/Закрытие мобильного меню
 */
MainMenu.prototype.toggleMenu = function() {
    this.btnToggle.classList.toggle('active');
    this.list.classList.toggle('active');
};

/**
 * Сброс класса .active (Закрытие мобильного меню) при изменении окна браузера
 */
MainMenu.prototype.clearActive = function() {
    this.btnToggle.classList.remove('active');
    this.list.classList.remove('active');
}