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
         * @param welcome
         */
        this.currentLanguage = {title: "Русский", name: "ru"};
        this.onChange = (languageObject, welcome) => {
            $translate.use(languageObject.name).then(function () {
                    myService.changeLanguage();
                }
            );
            this.currentLanguage = languageObject;
            this.welcome = welcome;
        };
        this.settingDisplay = false;
        this.welcome = "";

        this.display = () => {
            this.settingDisplay = true;
        };
        this.onClose = () => {
            this.settingDisplay = false;
        }
    }]
});
