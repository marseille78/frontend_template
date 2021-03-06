## Структура проекта

```
dev/
|
|– abstracts/ (or utilities/)
|   |– bemto/               // PUG-миксин для работы с БЭМ
|   |– vars.less           // Less-переменные
|
|– base/
|   |– fonts.less          // Подключение шрифтов
|   |– icons.less          // Подключение иконок
|   |– normalize.less
|   |– sprite.less         // Настройки спрайта (генерируется в случае необходимости)
|   |– typography.less     // типографика
|   |– head.pug            // Pug-миксин тега <head>
|
|– components/              // Директория компонентов. Каждый лежит в своей папке
|
|- img/
|   |
|   |- icons/               // Директория для иконок, из которых делают спрайт
|   |- svg/                 // Директория для SVG-файлов, из которых делают SVG-спрайт
|
|– layout/                  // Компоненты отвечающие за структуру (header, footer, ...)
|
|– pages/                   // Pug-файлы отвечающие за отрисовку одноименных HTML-страниц (index.pug => index.html, ...)
|
|– themes/                  // Компоненты шаблонов
|
|– main.js                  // Основной JS-файл, в который подключаются JS-файлы компонентов посредством ООП
|- main.less                // Основной Less-файл, в который подключаются все необходимые Less-файлы
```

## Получаемый результат

```
app/
|
|- index.html               // HTML-страницы
|
|- js/
|   |
|   |- main.js              // JS-файл со скриптами пользователя
|   |- libs.min.js          // минифицированный JS-файл со скриптами подключенных библиотек (по необходимости)
|
|- css/
|   |
|   |- main.css             // CSS-файл со стилями пользователя
|   |- libs.min.css         // минифицированный CSS-файл со стилями подключенных библиотек (по необходимости)
|
|- img/                     // Изображения
|   |
|   |- svg/                 // SVG-файлы (по необходимости)
|       |
|       |- symbol/          // SVG-спрайт (по необходимости)
|
|- pic/                     // Контентные изображения
|
|- fonts/                   // Шрифты (по необходимости)
```