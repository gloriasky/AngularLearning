/**
 * @name main
 * @module myApp
 *
 * Регистрация основного компонента
 *
 */
angular.module('myApp').component('main', {
    templateUrl: 'components/mainComponent/main.html',
    controller: ['myService', '$interval', function (myService, $interval) {
        let ctrl = this;
        ctrl.strings = myService.strings;
        /**
         * Функция для удаления элемента массива по индексу
         * @param index
         */
        ctrl.delete = (index) => {
            myService.deleteString(index);
        };
        /**
         * Функция для сброса счетчика по индексу
         * @param index
         */
        ctrl.reset = (index) => {
            myService.reset(index);
            this.change();
        };
        ctrl.add = (str) => {
            if(angular.isDefined(str) && str!=="") {
                console.log("main controller: adding string");
                myService.addString(str);
                this.change();
            }
        };
        /**
         * Запускает интервал для проверки на изменение цвета
         */
        ctrl.colorChange = undefined;
        ctrl.change = () => {
            if ( angular.isDefined(this.colorChange) ) return;
            this.colorChange = $interval(()=> {
                if (!myService.shouldStop) {
                    console.log("Interval start");
                    myService.colorChange();
                } else {
                    $interval.cancel(this.colorChange);
                    console.log("Interval stop");
                    this.colorChange = undefined;
                }
            }, 1000);
        };
    }]
});