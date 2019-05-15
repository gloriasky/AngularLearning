/**
 * @name getNumbers
 * @module myApp
 *
 * Регистрация фильтра, который либо возвращает числа из строки,. либо сообщение
 * что данная срока не содержит чисел
 * @param {service} $translate - для локализации
 *
 */
angular.module('myApp').filter('getNumbers', ['$translate', ($translate) => {
    /**
     * @param {string} text - Исходная строка
     * @return {string} string - Конечная строка
     */
    return function (currObj, filtObj) {
        if (_.startsWith(currObj.str), filtObj.text) {
            return currObj;
        }
    }
}]);
