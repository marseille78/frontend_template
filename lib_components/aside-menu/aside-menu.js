// Пример подключения
// aside-menu
// (function() {
//     const asideMenu = document.querySelectorAll('.aside-menu');
//     const mainContent = document.querySelector('.page__wrapper');
//     if (asideMenu.length === 0) return;
//     new AsideMenu(asideMenu[0], mainContent);
// })();

/**
 * Toggle view navigation's block
 * @param {el} nav Block of navigation
 * @param {el} mainContent Block of content
 */
function AsideMenu(nav, mainContent) {
    this.nav = nav;
    this.btnToggle = this.nav.querySelector('.js-asideMenuToggle');
    this.mainContent = mainContent;

    this.toggleOpened = this.toggleOpened.bind(this);
    
    this.btnToggle.addEventListener('click', this.toggleOpened);
}

AsideMenu.prototype.toggleOpened = function() {
    this.mainContent.classList.toggle('opened');
    this.nav.classList.toggle('opened');
    this.btnToggle.classList.toggle('opened');
}