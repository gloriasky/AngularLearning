let angular = require('angular');
let _ = require('lodash');
require('angular-mocks');
require('angular-translate');
require("angular-translate-loader-static-files");
import './styles/style.css';

/**
 * Регистрация модуля
 */
angular
    .module('myApp', ['pascalprecht.translate']);
angular.module('myApp').controller('Test', function ($scope) {
   $scope.title = "Hello";
});
require('./services/myService');
require('./configs/configs');
require('./filters/numberFilter');
require('./components/navbarComponent/navbarController');
require('./components/mainComponent/main');
require('./components/addComponent/addController');
require('./components/listStringsComponent/listStringController');

