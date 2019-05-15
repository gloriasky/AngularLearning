/**
 * Регистрация главного компонента
 */
angular.module('myApp').component('main', {
    template: require("./main.html"),
    controller: ['myService', '$interval', function (myService, $interval) {
        /**
         * Текущий контекст
         */
        let $ctrl = this;
        /**
         * Текущий массив строк
         * @type {Array}
         */
        $ctrl.filterObject = {};
        $ctrl.strings = myService.strings;
        $ctrl.colors = [
            {
                label: "any",
                text: ""
            },
            {
                label: "green",
                text: "green"
            },
            {
                label: "yellow",
                text: "yellow"
            },
            {
                label: "red",
                text: "red"
            }];
        this.welcome = "";
        $ctrl.getFilterObj = (text, color) => {
            $ctrl.filterObject.text = text;
            $ctrl.filterObject.color = color;
        };
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
            $ctrl.startInterval();
        };
        /**
         * Добавляет строку в массив
         * @param myString
         */
        $ctrl.onAdd = myString => {
            myService.addString(myString);
            $ctrl.startInterval();
        };
        /**
         * Запускает интервал для проверки на изменение цвета
         */
        $ctrl.colorChangeInterval = undefined;
        $ctrl.startInterval = () => {
            if (!angular.isDefined($ctrl.colorChangeInterval)) {
                $ctrl.colorChangeInterval = $interval(() => {
                    if (!myService.shouldStop) {
                        myService.colorCheck();
                    } else {
                        $interval.cancel($ctrl.colorChangeInterval);
                        $ctrl.colorChangeInterval = undefined;
                    }
                }, 1000);
            }
        };
    }]
});
