# Организация проекта

## Структура файлов

**Gulp+Pug+SASS**

* Install dev-dependencies `npm i`
* Install dependencies `bower i`
* Launch `gulp` to run watchers, server and compilers
* Launch `gulp production` to minify files for production

```
workshop
|-- /app/ # Для хранения HTML, который будет открываться на локальном сервере в процессе разработки
|------ /css/
|------ /fonts/
|------ /img/
|------ /js/
|------ /libs/
|------ index.html
|-- /blocks/ # Директория для хранения структурных блоков
|------ /_assets/ # Директория для плагинов и библиотек (то, что будет отдельно подключаться и сжиматься)
|------ /_base/
|------ /head/
|------ index.pug
|------ main.scss
|------ template.pug
|-- /build/ # Директория для компиляции продакшена (отправки на хостинг)
|-- .bowerrc
|-- .gitignore
|-- bower.json # для скачивания необходимых библиотек
|-- gulpfile.js
|-- LICENSE.md
|-- package.json
|-- README.md
```

## Зависимости проекта (package.json)

* [**_`browser-sinc`_**](link) - локальный сервер + live reload
* [**_`gulp`_**](link) - непосредственно сам gulp
* [**_`gulp-autoprefixer`_**](link) - автоматически проставляет css-префиксы
* [**_`gulp-clean-css`_**]() - минификация css-файлов
* [**_`gulp-concat`_**]() - позволяет соединять файлы
* [**_`gulp-if`_**]() - 
* [**_`gulp-imagemin`_**]() - минифицирует картинки
* [**_`gulp-notify`_**]() - для уведомлений
* [**_`gulp-plumber`_**]() - позволяет, чтобы не все ошибки вели к выскакиванию из консоли и прерыванию всех тасок
* **_`gulp-pug`_** - компилирует pug/jade в html
* **_`gulp-sass`_** - копилирует sass/scss в css
* **_`gulp-uglify`_** - минифицирует js-файлы
* **_`gulp-useref`_** - 
* **_`rimraf`_** - позволяет удалять папки (для очищения папки `build`)
* **_`vinyl-ftp`_** - для работы с ftp-соединением

# Pug

bemto - миксин, который позволяет гораздо проще писать БЭМ под Pug

Пример подключения:

```pug
include _assets/bemto/bemto
- set_bemto_settings({ modifier: "--" })
```

## Миксины

* Пример создания миксина **_`name`_** без аргументов

```
mixin name()
	<!-- code -->
```
Вызов миксина **_`name`_** без аргументов

```
+name()
```

* Пример создания миксина **_`name`_** с принимаемым объектом аргументов **_`data`_** и указанием места вывода его свойства **_`title`_**:

```
mixin name(data)
	title= data.title
	<!-- code -->
```
Вызов миксина **_`name`_** с передачей параметров в виде объекта
```
+name({
	"title": "value"
})
```