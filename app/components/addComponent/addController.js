angular.module('myApp').controller("AddController", AddController);
angular.module('myApp').component('adder', {
    bindings: {
        onAdd: "&"
    },
    controller: AddController,
    templateUrl: './components/addComponent/add.html'
});

function AddController() {
    let $ctrl = this;
    $ctrl.str = "hello world";
    $ctrl.addString = () => $ctrl.onAdd({myString: $ctrl.userString});
    $ctrl.checkIfValid = () => !_.isEmpty($ctrl.userString);

}