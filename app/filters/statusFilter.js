/**
 * @name getStatus
 * @module myApp
 *
 * Регистрация фильтра, который возвращает статус строки в соответсвии с ее цветом
 * @param {service} $translate - для локализации
 *
 */
angular.module('myApp').filter('getStatus', function () {
    /**
     * @param {string} - Исходный цвет
     * @return {string} - Соответсвующий статус
     */
    return function(text){
        if(text === "green"){
            return '"GREEN" | translate';
        }
        else if(text === "yellow"){
            return '"YELLOW" | translate';
        }
        return '"RED" | translate';
    }
});