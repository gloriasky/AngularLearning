angular.module("myApp").component("stringFilter", {
    template: require("./filter.html"),
    controller: [function () {
        let $ctrl = this;
        $ctrl.currentColor = {
            label: "none",
            text: ""
        };
        $ctrl.filterArray = () => {
            if (!$ctrl.string) {
                $ctrl.string = undefined;
            }
            $ctrl.onFilter({text: $ctrl.string, color: $ctrl.currentColor.text});
        };
        $ctrl.resetFilter = () => {
            $ctrl.onFilter({text: "", color: ""});
        }
    }],
    bindings: {
        onFilter: "&",
        colors: "<"
    },
});
