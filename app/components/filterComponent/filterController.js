angular.module("myApp").component("stringFilter", {
    template: require("./filter.html"),
    controller: [function () {
        let $ctrl = this;
        $ctrl.filterArray = () => {
            this.color = this.currentColor.text;
        }
    }],
    bindings: {
        text: "=",
        color: '=',
        colors: "<"
    },
});