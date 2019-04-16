/**
 * Компонент, отвечающий за добавление строки в массив
 */
module.exports = function (app) {
    app.component('adder', {
        /**
         * Связывание компонента
         */
        bindings: {
            onAdd: "&"
        },
        /**
         * Контроллеры
         */
        controller: addController,
        templateUrl: './components/addComponent/add.html'
    });

    function addController() {
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
    }
};