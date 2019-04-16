require('angular');
let angular = require('angular');
require('jqlite');
let _ = require('lodash');
require('angular-mocks');
require('angular-translate');
require("angular-translate-loader-static-files");
import './styles/style.css';

/**
 * Регистрация модуля
 */
let app = angular.module('myApp', ['pascalprecht.translate']);
require('./services/');
require('./configs/configs');
require('./filters/numberFilter');
require('./components/navbarComponent/navbarController');
require('./components/mainComponent/main');
require('./components/addComponent/addController')(app);
require('./components/listStringsComponent/listStringController');

