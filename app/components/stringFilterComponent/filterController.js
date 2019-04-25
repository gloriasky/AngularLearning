angular.module("myApp").component("stringFilter", {
    template: require("./filter.html"),
    controller: [function () {
        let $ctrl = this;
        $ctrl.currentColor = {
            label: "green",
            text: "green"
        };
        $ctrl.filterArray = () => {
            this.color = this.currentColor.text;
            if ($ctrl.string) {
                $ctrl.text = $ctrl.string;
            } else {
                $ctrl.text = undefined;
            }

        }
    }],
    bindings: {
        text: "=",
        color: '=',
        colors: "<"
    },
});