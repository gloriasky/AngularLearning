describe("Компонент вывода массива строк: ", function () {
    let $compile, $rootScope, $scope;
    let element;

    beforeEach(() => {
        module('myApp');
        inject(function (_$compile_, _$rootScope_, _$httpBackend_) {
            _$httpBackend_.whenGET("./configs/res/ru.json").respond(null);

            $rootScope = _$rootScope_;
            $compile = _$compile_;

            $scope = $rootScope.$new();
            element = $compile('<list on-delete="onDelete(index)" on-reset="onReset(index)" strings="strings"></list>')($scope);
            $scope.$digest();
        })
    });
    it('должен вызвать onDelete() метод главного компонента', function () {
        let spy = jasmine.createSpy("onDelete");
        $scope.$ctrl = {strings: "2", onDelete: spy};
        $scope.$digest();
        let button = element.find("div", ".delete");
        button.triggerHandler("click");

        expect(spy).toHaveBeenCalledWith(0);
    });
    it('должен вызвать onReset() метод главного компонента', function () {
        let spy = jasmine.createSpy("onReset");
        $scope.$ctrl = {strings: "2", onReset: spy};
        $scope.$digest();
        let button = element.find("div", ".reset");
        button.triggerHandler("click");

        expect(spy).toHaveBeenCalledWith(0);
    });
});