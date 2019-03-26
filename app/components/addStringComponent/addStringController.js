angular.module('myApp').component('adder', {
    bindings: {
        add: "&"
    },
    controller: [function () {
        let $ctrl = this;
        $ctrl.onAdd = () => $ctrl.add({myString: $ctrl.userString});
        $ctrl.checkIfValid = () => angular.isDefined($ctrl.userString) && $ctrl.userString !== "";

    }],
    templateUrl: './components/addStringComponent/addString.html'
});