angular.module('myApp').component('navbar', {
    templateUrl: 'components/navbarComponent/navbar.html',
    controller: ['$translate','$http',function ($translate,$http) {
        this.availableLangs = [];
        this.changeLanguage = (lang) => {
            $translate.use(lang);
        };
        let request = {
            method: 'get',
            url: '/components/navbarComponent/langs.json',
            dataType: 'json',
            contentType: "application/json"
        };
        $http(request)
            .then(function (jsonData) {
                this.availableLangs = jsonData.data;
                console.log(this.availableLangs);
            }, function(response) {

            });
    }]
});