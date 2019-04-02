angular.module('myApp').controller("MainController", MainController);

function MainController(myService, $interval) {
    let $ctrl = this;
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
}

angular.module('myApp').component('main', {
    templateUrl: './components/mainComponent/main.html',
    controller: MainController
});