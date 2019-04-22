/**
 * Компонент, содржащий компоненты добавления и отображения строк.
 */
angular.module("myApp").component("settingComponent", {
    bindings: {
        display: '=',
        name: '=',
        onLanguageChange: "&",
        languages: "<"
    },
    template: require('./settingComponent.html'),
    controller: [function () {
        let $ctrl = this;
        /**
         * Функция закрытия диалога.
         */
        $ctrl.hide = () => {
            if ($ctrl.input && !_.isUndefined($ctrl.input)) {
                $ctrl.name = $ctrl.input;
            }
            $ctrl.display = "none";
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
