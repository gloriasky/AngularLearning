angular.module('myApp').component('list', {
    bindings:{
        delete: "&",
        reset: "&",
        strings: "<"
    },
    controller: [function () {
        let $ctrl = this;

        $ctrl.onDelete = indexOfTheString => $ctrl.delete({index: indexOfTheString});

        $ctrl.onReset = indexOfTheString => $ctrl.reset({index: indexOfTheString});

    }],
    templateUrl: './components/listStringsComponent/listString.html'
});