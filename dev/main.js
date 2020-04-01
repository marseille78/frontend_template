document.addEventListener('DOMContentLoaded', function() {

    window.addEventListener('resize', () => {
        [].slice.call(document.querySelectorAll('.opened'))
            .forEach(el => {el.classList.remove('opened')});
    });



    // example (пример подключения)
    // (function() {
    //     const example = document.querySelectorAll('.example');
    //     if (example.length === 0) return;
    //     new Example(example[0]);
    // })();
});


