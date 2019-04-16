describe("Компонент вывода массива строк: ", function () {
    let $compile, $rootScope, $scope;
    let element;

    beforeEach(() => {
        module('myApp');
        inject(function (_$compile_, _$rootScope_, _$httpBackend_) {
            // _$httpBackend_.whenGET("./configs/res/ru.json").respond(null);

            $rootScope = _$rootScope_;
            $compile = _$compile_;

            $scope = $rootScope.$new();
            element = $compile('<list on-delete="$ctrl.onDelete(index)" on-reset="$ctrl.onReset(index)" strings="$ctrl.strings"></list>')($scope);
            $scope.$digest();
        })
    });
    it('should not show elements if they exist', function () {
        expect(element.html()).toContain("noEl");
        expect(element.html()).not.toContain("table");
    });

    it('should show elements if they exist', function () {
        $scope.$ctrl = {strings: "2"};
        $scope.$digest();

        expect(element.html()).toContain("tr");
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