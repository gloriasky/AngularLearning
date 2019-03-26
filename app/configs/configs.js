/**
 *
 * Регистрация конфигурации для локализации приложения
 * @param {service} $translateProvider - для перевода
 *
 */
angular.module('myApp').config(['$translateProvider', $translateProvider => {
    $translateProvider.useStaticFilesLoader({
        prefix: './configs/res/',
        suffix: '.json'
    }).preferredLanguage('ru').useSanitizeValueStrategy(null);
}]);
