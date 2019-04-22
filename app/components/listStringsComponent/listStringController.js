/**
 * Компонент, отвечающий за вывод массива
 */
angular.module('myApp').component('list', {
    /**
     * Связывание компонента
     */
    bindings: {
        onDelete: "&",
        onReset: "&",
        strings: "<",
        color: "=",
        text: "="
    },
    /**
     * Контроллер
     */
    controller: [function () {
        /**
         * Текущий контекст
         */
        let $ctrl = this;
        /**
         * Удаление строки из массива
         * @param index
         */
        $ctrl.deleteString = index => $ctrl.onDelete({index});
        /**
         * Сброс таймера у конкретной строки
         * @param index
         */
        $ctrl.resetTimer = index => $ctrl.onReset({index});
    }],
    template: require("./listString.html")
});