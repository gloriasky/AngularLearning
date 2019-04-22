describe("Тестирование фильтра поиска", function () {
    var element, $scope;

    beforeEach(() => {
        module('myApp');
        inject(function (_$compile_, _$rootScope_, _$httpBackend_) {
            _$httpBackend_.whenGET("").respond({});

            $scope = _$rootScope_.$new();

            element = _$compile_(' <string-filter color="color"></string-filter>')($scope);
            $scope.$digest();
        });
    });

    it('должен изменить цвет в родительском компоненте', function () {
        element.find("select").controller("ngModel").$setViewValue({label: "green", text: 'green'});

        expect($scope.color).toEqual("green");
    });
});