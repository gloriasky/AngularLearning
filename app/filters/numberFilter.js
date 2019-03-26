/**
 * @name getNumbers
 * @module myApp
 *
 * Регистрация фильтра, который либо возвращает числа из строки,. либо сообщение
 * что данная срока не содержит чисел
 * @param {service} $translate - для локализации
 *
 */
angular.module('myApp').filter('getNumbers', [() => {
    /**
     * @param {string} text - Исходная строка
     * @return {string} string - Конечная строка
     */
    return function (str) {
        let string = _.replace(str.str, /[^\d]/gi, '');
        if(string === ''){
            str.strlabel = 'string';
            return 'string';
        }
        str.strlabel = string;
        return string;
    }
}]);