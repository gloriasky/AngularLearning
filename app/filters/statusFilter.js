/**
 * @name getStatus
 * @module myApp
 *
 * Регистрация фильтра, который возвращает статус строки в соответсвии с ее цветом
 * @param {service} $translate - для локализации
 *
 */
angular.module('myApp').filter('getStatus',['$translate', function($translate){
    /**
     * @param {string} - Исходный цвет
     * @return {string} - Соответсвующий статус
     */
    return function(text){
        if(text === "green"){
            return $translate.instant('GREEN');
        }
        else if(text === "yellow"){
            return $translate.instant('YELLOW');
        }
        return $translate.instant('RED');
    }
}]);