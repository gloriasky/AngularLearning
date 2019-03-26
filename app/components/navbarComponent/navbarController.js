angular.module('myApp').component('navbar', {
    templateUrl: 'components/navbarComponent/navbar.html',
    controller: ['$translate', function ($translate) {
        this.languages = require('./langs');
        this.changeLanguage = (languageObject) => {
            $translate.use(languageObject.name);
        }
    }]
});