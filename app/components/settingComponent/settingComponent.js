/**
 * Компонент, содржащий компоненты добавления и отображения строк.
 */
angular.module("myApp").component("settingComponent", {
    bindings: {
        onChange: "&",
        onClose: "&",
        welcome: '<',
        languages: "<",
        currentLanguage: "<"
    },
    template: require('./settingComponent.html'),
    controller: [function () {
        let $ctrl = this;
        /**
         * Функция закрытия диалога.
         */
        $ctrl.hide = () => {
            $ctrl.onClose();
        };
        $ctrl.reset = () => {
            $ctrl.welcome = "";
            $ctrl.changeInfo();
            $ctrl.hide();
        };
        $ctrl.submit = () => {
            $ctrl.changeInfo();
            $ctrl.hide();
        };
        /**
         * Функция для смены языка
         *
         */
        $ctrl.changeInfo = () => {
            $ctrl.onChange({lang: this.currentLanguage, welcome: this.welcome});
        }

    }]
});
