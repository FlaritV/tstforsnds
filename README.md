# API-консоль

API-консоль состоит из формы авторизации и интерфейса консоли. Она используется, чтобы выполнять запросы к Sendsay API

[Live Demo](https://next-try.herokuapp.com/login)

Реализация представлена в двух темах: светлой и темной

### Авторизация

![Авторизация](/page-screenshots/login-light.JPG? 'Авторизация')

![Авторизация](/page-screenshots/login-dark.JPG? 'Авторизация')

> Для валидации полей логина и пароля выбрал простешие регулярки, исключающие пробелы и кириллицу

### Консоль

![Консоль](/page-screenshots/console-light.JPG? 'Консоль')

![Консоль](/page-screenshots/console-dark.JPG? 'Консоль')

## Стек

> Проект развернут на [CRA](https://github.com/facebook/create-react-app) c шаблоном [Redux](https://github.com/reduxjs/cra-template-redux)

- [facebook/react](https://github.com/facebook/react) - для разработки пользовательских интерфейсов
- [reduxjs/redux](https://github.com/reduxjs/redux) и [reduxjs/react-redux](https://github.com/reduxjs/react-redux) - для управления состоянием приложения
- [reduxjs/redux-toolkit](https://github.com/reduxjs/redux-toolkit) - для комфортной работы с redux
- [react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start) - для маршрутизации на стороне клиента
- [react-hook-form](https://github.com/react-hook-form/react-hook-form) - для комфортной работы с формами
- [classnames](https://github.com/JedWatson/classnames) - для работы с css классами
- [js-cookie](https://github.com/js-cookie/js-cookie) - для работы с куки
- [lockr](https://github.com/tsironis/lockr) - для работы с localStorage
- [object-hash](https://github.com/puleos/object-hash) - для генерации hash на основе объектов
- [react-toastify](https://github.com/fkhadra/react-toastify) - простейший тост для ошибок
- [rooks](https://github.com/imbhargav5/rooks) - сборник реакт хуков
- [sendsay-api](https://github.com/sendsay-ru/sendsay-api-js) - для работы с Sendsay Api
- [copy-to-clipboard](https://github.com/sudodoki/copy-to-clipboard#readme) - для копирования текста в буфер обмена

А так же `development` зависимости

- [prop-types](https://github.com/facebook/prop-types) - для валидации пропсов
- [prop-types-exact](https://github.com/airbnb/prop-types-exact) - для запрета `лишних` пропсов
- [react-is](https://www.npmjs.com/package/react-is) - для валидации React элементов

## Скрипты

Запуск `development` сервера

```sh
$ yarn
$ yarn start
```

Генерация `production` сборки

```sh
$ yarn buid
```
