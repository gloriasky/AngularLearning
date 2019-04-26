/**
 * Компонент, содржащий компоненты добавления и отображения строк.
 */
angular.module("myApp").component("settingComponent", {
    bindings: {
        display: '=',
        welcome: '=',
        onLanguageChange: "&",
        languages: "<"
    },
    template: require('./settingComponent.html'),
    controller: [function () {
        let $ctrl = this;
        $ctrl.input = "";
        $ctrl.currentLanguage = {title: "Русский", name: "ru"};
        /**
         * Функция закрытия диалога.
         */
        $ctrl.hide = () => {
            $ctrl.input = "";
            $ctrl.display = false;
        };
        $ctrl.reset = () => {
            $ctrl.welcome = "";
            $ctrl.hide();
        };
        $ctrl.submit = () => {
            $ctrl.welcome = $ctrl.input;
            $ctrl.changeLanguage();
            $ctrl.hide();
        };
        /**
         * Функция для смены языка
         *
         */
        $ctrl.changeLanguage = () => {
            $ctrl.onLanguageChange({lang: $ctrl.currentLanguage});
        }
    }]
});
