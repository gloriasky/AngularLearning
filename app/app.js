let angular = require('angular');
let _ = require('lodash');
require('angular-mocks');
require('angular-translate');
require("angular-translate-loader-static-files");
require('./styles/style.css');

/**
 * Регистрация модуля
 */
angular.module('myApp', ['pascalprecht.translate']);
require('./services/myService');
require('./configs/configs');
require('./filters/numberFilter');
require('./components/navbarComponent/navbarController');
require('./components/mainComponent/main');
require('./components/addComponent/addController');
require('./components/listStringsComponent/listStringController');

