angular.module('myApp').component('list', {
    bindings:{
        delete: "&",
        reset: "&",
        strings: "<"
    },
    controller: [function () {
        let $ctrl = this;

        $ctrl.onDelete = function (indexOfTheString) {
            $ctrl.delete({index: indexOfTheString});
        };

        $ctrl.onReset = function (indexOfTheString) {
            $ctrl.reset({index: indexOfTheString});
        };

    }],
    templateUrl: './components/listStringsComponent/listString.html'
});