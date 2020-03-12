document.addEventListener('DOMContentLoaded', function() {

    window.addEventListener('resize', () => {
        [].slice.call(document.querySelectorAll('.opened'))
            .forEach(el => {el.classList.remove('opened')});
    });
    
    // Catalog
    (function() {
        const els = document.querySelectorAll('.catalog');
        if (els.length === 0) return;
        new Catalog(els[0]);
    })();
});


