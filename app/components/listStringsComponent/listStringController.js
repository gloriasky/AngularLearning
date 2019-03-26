angular.module('myApp').component('list', {
    bindings:{
        delete: "&",
        reset: "&",
        strings: "<"
    },
    controller: [function () {
        let $ctrl = this;

        $ctrl.onDelete = index => $ctrl.delete({index});

        $ctrl.onReset = index => $ctrl.reset({index});

    }],
    templateUrl: './components/listStringsComponent/listString.html'
});