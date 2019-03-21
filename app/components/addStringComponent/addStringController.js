/**
 * @name adder
 * @module myApp
 *
 * Регистрация компонента, отвечающего за ввод строки
 *
 */
angular
    .module('myApp').component('adder', {
    templateUrl: 'components/addStringComponent/addString.html',
    bindings:{
      add:'&',
        str:'<'
    },
    /**
     *  Регистрация контроллера
     *  @param {object} $myService - сервис для работы с данными
     *  @param {service} $interval - для работы со временем
     *
     */
    controller: [function () {
        let ctrl = this;
        /**
         * Функция для добавления строки в массив
         * @param text
         */
        ctrl.addStr = () => {
            console.log("add controller: adding string");
            console.log(ctrl.text);
            ctrl.add(ctrl.text);
        };
        /**
         * Запускает интервал для проверки на изменение цвета
         */
    }]
});
