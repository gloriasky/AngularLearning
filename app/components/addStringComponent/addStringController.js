angular.module('myApp').component('adder', {
    bindings: {
        add: "&"
    },
    controller: [function () {
        let $ctrl = this;
        $ctrl.onAdd = () => $ctrl.add({myString: $ctrl.userString});
        $ctrl.checkIfValid = () => !_.isEmpty($ctrl.userString);

    }],
    templateUrl: './components/addStringComponent/addString.html'
});