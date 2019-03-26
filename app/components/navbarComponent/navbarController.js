angular.module('myApp').component('navbar', {
    templateUrl: 'components/navbarComponent/navbar.html',
    controller: ['$translate', 'myService', function ($translate, myService) {
        this.languages = require('./langs');
        this.changeLanguage = (languageObject) => {
            $translate.use(languageObject.name).then(function () {
                    myService.changeLanguage(this.languages, languageObject.name);
                }
            );

        }
    }]
});