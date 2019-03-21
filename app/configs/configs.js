/**
 *
 * Регистрация конфигурации для локализации приложения
 * @param {service} $translateProvider - для перевода
 *
 */
angular.module('myApp').config(['$translateProvider', function ($translateProvider) {
    /**
     * Английский язык
     */
    $translateProvider.translations('en', {
        'EN': 'English',
        'RU': 'Russian',
        'DE': 'German',
        'ADD': 'Add',
        'DELETE': 'Delete',
        'STR': 'The string contains only symbols',
        'LANG': 'Languages',
        'GREEN': 'Fresh',
        'YELLOW': 'Lain',
        'RED': 'Rotten',
        'RESETBTN': 'Reset'
    });
    /**
     * Русский язык
     */
    $translateProvider.translations('ru', {
        'EN': 'Английский',
        'RU': 'Русский',
        'DE': 'Немецкий',
        'ADD': 'Добавить',
        'DELETE': 'Удалить',
        'STR': 'Строка содержит только символы',
        'LANG': 'Языки',
        'GREEN': 'Свежий',
        'YELLOW': 'Полежавший',
        'RED': 'Тухлый',
        'RESETBTN': 'Сбросить'
    });
    /**
     * Немецкий язык
     */
    $translateProvider.translations('de', {
        'EN': 'Englisch',
        'RU': 'Russisch',
        'DE': 'Deutsch',
        'ADD': 'Hinzufügen',
        'DELETE': 'Löschen',
        'STR': 'Zeichenfolge enthält nur Zeichen',
        'LANG': 'Sprachen',
        'GREEN': 'Frisch',
        'YELLOW': 'Lain',
        'RED': 'Faul',
        'RESETBTN': 'Zurücksetzen'
    });
    /**
     * Устанавливаем язык по умолчанию на русский
     */
    $translateProvider.preferredLanguage('ru');
}]);