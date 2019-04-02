angular.module('myApp').controller("ListController", ListController);
angular.module('myApp').component('list', {
    bindings:{
        onDelete: "&",
        onReset: "&",
        strings: "<"
    },
    controller: ListController,
    templateUrl: './components/listStringsComponent/listString.html'
});

function ListController() {
    let $ctrl = this;

    $ctrl.deleteString = index => $ctrl.onDelete({index});

    $ctrl.resetTimer = index => $ctrl.onReset({index});
}