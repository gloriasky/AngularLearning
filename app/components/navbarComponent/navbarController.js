/**
 * Регистрация компонента для управления сменой языков
 */
angular.module('myApp').component('navbar', {
    template: require("./navbar.html"),
    /**
     * Контроллер
     */
    controller: ['$translate', 'myService', function ($translate, myService) {
        /**
         * Массив языков возможных для выбора
         */
        this.languages = require('../../configs/res/langs');
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