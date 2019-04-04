/**
 * Регистрация компонента для управления сменой языков
 */
angular.module('myApp').component('navbar', {
    templateUrl: 'components/navbarComponent/navbar.html',
    /**
     * Контроллер
     */
    controller: ['$translate', 'myService', function ($translate, myService) {
        /**
         * Массив языков возможных для выбора
         */
        this.languages = require('./langs');
        /**
         * Функция для смены языка
         * @param languageObject
         */
        this.onLanguageChange = (languageObject) => {
            $translate.use(languageObject.name).then(function () {
                    myService.changeLanguage();
                }
            );

        }
    }]
});