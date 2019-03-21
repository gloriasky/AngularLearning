/**
 *@name list
 * @module myApp
 *
 * Регистрация компонента, ответственного за вывод строк
 *
 */
angular.module('myApp').component('list', {
    templateUrl: 'components/listStringsComponent/listString.html',
    bindings:{
        str:'=',
        index:'=',
        delete: '&',
        reset:'&'
    },
    /**
     * Регистрация контроллера
     * @param {service} myService - для работы с массивом
     */
    controller: ['myService', function (myService) {
        /**
         * Функция для удаления элемента массива по индексу
         * @param index
         */
        this.deleteStr = (index) => {
            this.delete(index);
        };
        /**
         * Функция для сброса счетчика по индексу
         * @param index
         */
        this.resetStr = (index) => {
            this.reset(index);
        }

    }]
});