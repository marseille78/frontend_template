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