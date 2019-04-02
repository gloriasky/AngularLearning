/**
 * Компонент, отвечающий за добавление строки в массив
 */
angular.module('myApp').component('adder', {
    /**
     * Связывание компонента
     */
    bindings: {
        onAdd: "&"
    },
    /**
     * Контроллеры
     */
    controller: [function () {
        /**
         * Текущий контекст
         */
        let $ctrl = this;
        /**
         * Добавляем строку в массив
         * @return {void|*|boolean}
         */
        $ctrl.addString = () => $ctrl.onAdd({myString: $ctrl.userString});
        /**
         * Проверяем модель на валидность
         * @return {boolean}
         */
        $ctrl.checkIfValid = () => !_.isEmpty($ctrl.userString);
    }],
    templateUrl: './components/addComponent/add.html'
});