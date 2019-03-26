angular.module('myApp').component('adder', {
    bindings:{
        add: "&"
    },
    controller: [function () {
        let $ctrl = this;
        $ctrl.addString = function () {
            if (angular.isDefined($ctrl.userString) && $ctrl.userString !== "" && $ctrl.userString.length > 2) {
                $ctrl.add({myString: $ctrl.userString});
                $ctrl.userString = '';
            }

        };
    }],
    templateUrl: './components/addStringComponent/addString.html'
});