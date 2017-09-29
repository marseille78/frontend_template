# Шаблон верстки (Pug + SCSS + Gulp)

## Структура шаблона

* `[app]`*Корень нашего локального сервера на время разработки*
* `[build]`*Папка для в которую собираются минифицированные файлы из папки [app] для продакшена*
* `[design]`
* `[dev]`
    * `[blocks]`*Папка для хранения блоков и компонентов*
        * `[_assets]`*Отдельно подключаемые библиотеки*
        * `[_base]`
        * `[_core]`
        * `[button]`
        * `[form]`
        * `[list]`
        * `[nav]`
        * `[table]`
* `[fonts]`
* `.bowerrc`
* `.gitignore`
* `gulpfile.js`
* `package.json`
* `README.md`

## Плагины Gulp

* [gulp-concat-css](https://www.npmjs.com/package/gulp-concat-css) - Для склеивания _CSS-файлов_ подключаемых библиотек
* [gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css) - Минификация файлов стилей для продакшена
* [gulp-notify](https://www.npmjs.com/package/gulp-notify/) - Плагин для уведомлений
* [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer/) - Для автоматической подстановки _CSS-префиксов_
* [gulp-connect](https://www.npmjs.com/package/gulp-connect/) - Локальный сервер вместе с `live-reload`
* [gulp-sass](https://www.npmjs.com/package/gulp-sass/) - Для работы с `SASS/SCSS`
* [gulp-pug](https://www.npmjs.com/package/gulp-pug) - Для работы с `Pug/Jade`
* [gulp-plumber](https://www.npmjs.com/package/gulp-plumber) - Чтобы всякий раз не вылетал, при возникновении ошибки
* [gulp-uglify](https://www.npmjs.com/package/gulp-uglify) - Для минификации _JS-файлов_
* [gulp-sftp](https://www.npmjs.com/package/gulp-sftp) - Для отправки по `FTP` на сервер
* [gulp-clean](https://www.npmjs.com/package/gulp-clean) - Для удаления файлов

**Неиспользуемые плагины :**

* [gulp-rename](https://www.npmjs.com/package/gulp-rename/) - Для переимееновывания получаемых файлов
* [gulp-uncss](https://www.npmjs.com/package/gulp-uncss/) - Удаление неиспользуемых _CSS-стилей_
* [gulp-less](https://www.npmjs.com/package/gulp-less/) - Работа с `LESS`
* [gulp-rev-append](https://www.npmjs.com/package/gulp-rev-append/) - Плагин для кэширования
* [gulp-useref](https://www.npmjs.com/package/gulp-useref) - Для подготовки проекта к отправке в продакшн
* [gulp-if](https://www.npmjs.com/package/gulp-if) - Фильтрует подключенные к `index.html` файлы