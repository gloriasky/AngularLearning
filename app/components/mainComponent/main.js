/**
 * Регистрация главного компонента
 */
angular.module('myApp').component('main', {
    templateUrl: './components/mainComponent/main.html',
    controller: ['myService', '$interval', function (myService, $interval) {
        /**
         * Текущий контроллер
         */
        let $ctrl = this;
        /**
         * Текущий массив строк
         * @type {Array}
         */
        $ctrl.strings = myService.strings;
        /**
         * Функция для удаления элемента массива по индексу
         * @param index
         */
        $ctrl.onDelete = index => myService.deleteString(index);
        /**
         * Функция для сброса счетчика по индексу
         * @param index
         */
        $ctrl.onReset = index => {
            myService.reset(index);
            $ctrl.change();
        };
        /**
         * Добавляет строку в массив
         * @param myString
         */
        $ctrl.onAdd = myString => {
            myService.addString(myString);
            $ctrl.change();
        };
        /**
         * Запускает интервал для проверки на изменение цвета
         */
        $ctrl.colorChange = undefined;
        $ctrl.change = () => {
            if (!angular.isDefined($ctrl.colorChange)) {
                $ctrl.colorChange = $interval(() => {
                    if (!myService.shouldStop) {
                        myService.colorChange();
                    } else {
                        $interval.cancel($ctrl.colorChange);
                        $ctrl.colorChange = undefined;
                    }

                }, 1000);
            }
        };
    }]
});