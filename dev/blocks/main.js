window.onload = function() {
    var topMenu = new TopMenu('.menu');
};

function TopMenu(el) {
    this.el = document.querySelector(el);
    this.btnToggle = this.el.querySelector('.js-menuToggle');

    this.btnToggle.addEventListener('click', this.toggleMenu);
}
TopMenu.prototype.toggleMenu = function() {
    // debugger;
    this.classList.toggle('active');
    this.nextElementSibling.classList.toggle('active');
};