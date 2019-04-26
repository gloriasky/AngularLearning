describe("Компонент вывода массива строк: ", function () {
    let $scope;
    let element;

    beforeEach(() => {
        module('myApp');
        inject(function (_$compile_, _$rootScope_, _$httpBackend_) {
            _$httpBackend_.whenGET("./configs/res/ru.json").respond(null);

            $scope = _$rootScope_.$new();
            element = _$compile_('<list on-delete="onDelete(index)" on-reset="onReset(index)" strings="strings"></list>')($scope);
            $scope.$digest();
        })
    });
    it('должен вызвать onDelete() метод главного компонента', function () {
        $scope.onDelete = jasmine.createSpy("onDelete");
        $scope.strings = [{str: "str", color: "green", time: new Date()}];
        $scope.$digest();
        let button = element.find("div", ".delete");
        button.triggerHandler("click");

        expect($scope.onDelete).toHaveBeenCalledWith(0);
    });
    it('должен вызвать onReset() метод главного компонента', function () {
        $scope.onReset = jasmine.createSpy("onReset()");
        $scope.strings = [{str: "str", color: "green", time: new Date()}];
        $scope.$digest();
        let button = element.find("div", ".reset");
        button.triggerHandler("click");

        expect($scope.onReset).toHaveBeenCalledWith(0);
    });
});