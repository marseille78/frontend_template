(function() {
	var iconAdaptiveMenu = document.getElementById('iconAdaptiveMenu');
	var adaptiveMenu = iconAdaptiveMenu.nextElementSibling;

	iconAdaptiveMenu.addEventListener('click', function(e) {
		adaptiveMenu.classList.toggle('active');
		this.classList.toggle('active');
	});
})();