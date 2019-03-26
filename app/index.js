let angular = require('angular');
let _ = require('lodash');
require('angular-translate');
require("angular-translate-loader-static-files");
import './styles/style.css';

/**
 * Регистрация модуля
 */
angular
    .module('myApp', ['pascalprecht.translate']);
require('./services/myService');
require('./configs/configs');
require('./filters/numberFilter');
require('./components/navbarComponent/navbarController');
require('./components/mainComponent/main');
require('./components/addStringComponent/addStringController');
require('./components/listStringsComponent/listStringController');

