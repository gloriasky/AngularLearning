describe("Тестирование фильтра поиска", function () {
    var element, $scope, ctrl;

    beforeEach(() => {
        module('myApp');
        inject(function (_$compile_, _$rootScope_, _$httpBackend_) {
            _$httpBackend_.whenGET("").respond({});

            $scope = _$rootScope_.$new();

            element = _$compile_('<string-filter colors="colors" on-filter="getFilterObj(text,color)"></string-filter>')($scope);
            $scope.$digest();
            ctrl = element.controller("stringFilter");
        });
    });

    it('color - onFilter()', function () {
        element.find("select").controller("ngModel").$setViewValue({label: "green", text: 'green'});
        $scope.getFilterObj = jasmine.createSpy("onFilter");
        let button = element.find("button", "submitFilter");
        button.triggerHandler("click");

        expect($scope.getFilterObj).toHaveBeenCalledWith(undefined, "green");
    })
    it('text - onFilter()', function () {
        element.find("input").controller("ngModel").$setViewValue("test");
        $scope.getFilterObj = jasmine.createSpy("onFilter");
        let button = element.find("button", "submitFilter");
        button.triggerHandler("click");

        expect($scope.getFilterObj).toHaveBeenCalledWith("test", "");
    })
    it('both - onFilter()', function () {
        element.find("input").controller("ngModel").$setViewValue("test");
        element.find("select").controller("ngModel").$setViewValue({label: "green", text: 'green'});
        $scope.getFilterObj = jasmine.createSpy("onFilter");
        let button = element.find("button", "submitFilter");
        button.triggerHandler("click");

        expect($scope.getFilterObj).toHaveBeenCalledWith("test", "green");
    });
    it("onReset", function () {
        element.find("input").controller("ngModel").$setViewValue("test");
        element.find("select").controller("ngModel").$setViewValue({label: "green", text: 'green'});
        $scope.getFilterObj = jasmine.createSpy("onFilter");
        let button = element.find("button", "resetFilter");
        button.triggerHandler("click");

        expect($scope.getFilterObj).toHaveBeenCalledWith("", "")
    })
});
