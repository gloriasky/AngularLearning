angular.module('myApp').component('main', {
    templateUrl: './components/mainComponent/main.html',
    controller: ['myService', '$interval', function (myService, $interval) {
        let $ctrl = this;
        $ctrl.strings = myService.strings;
        /**
         * Функция для удаления элемента массива по индексу
         * @param index
         */
        $ctrl.delete = (index) => {
            myService.deleteString(index);
        };
        /**
         * Функция для сброса счетчика по индексу
         * @param index
         */
        $ctrl.reset = (index) => {
            myService.reset(index);
            $ctrl.change();
        };
        $ctrl.add = (myString) => {
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
    }],
})
;