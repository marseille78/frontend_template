* `gulp-svgmin` - для минификации SVG
* `gulp-cheerio` - находит в нашем SVG атрибуты `fill`, `stroke`, `style` и удаляет их (т.к. SVG может прийти уже установленными этими стилями)
* `gulp-replace` - предыдущий плагин `gulp-cheerio` может заменять `>` на `&gt;`, здесь мы их возвращаем обратно
* `gulp-svg-sprite` - объединяет все найденные `SVG`-файлы в один спрайт

## Структура проекта

```
sass/
|
|– abstracts/ (or utilities/)
|   |– _variables.scss    // Sass Variables
|   |– _functions.scss    // Sass Functions
|   |– _mixins.scss       // Sass Mixins
|
|– base/
|   |– _reset.scss        // Reset/normalize
|   |– _typography.scss   // Typography rules
|
|– components/ (or modules/)
|   |– _buttons.scss      // Buttons
|   |– _carousel.scss     // Carousel
|   |– _slider.scss       // Slider
|
|– layout/
|   |– _navigation.scss   // Navigation
|   |– _grid.scss         // Grid system
|   |– _header.scss       // Header
|   |– _footer.scss       // Footer
|   |– _sidebar.scss      // Sidebar
|   |– _forms.scss        // Forms
|
|– pages/
|   |– _home.scss         // Home specific styles
|   |– _about.scss        // About specific styles
|   |– _contact.scss      // Contact specific styles
|
|– themes/
|   |– _theme.scss        // Default theme
|   |– _admin.scss        // Admin theme
|
|– vendors/
|   |– _bootstrap.scss    // Bootstrap
|   |– _jquery-ui.scss    // jQuery UI
|
`– main.scss              // Main Sass file
```

## Сторонние библиотеки

* `bootstrap ^4.4.1`
* `jquery ^3.4.1`
* `select2 ^4.0.13` - для стилизации `select`, включая `option`
* `slick-carousel ^1.8.1` - слайдер