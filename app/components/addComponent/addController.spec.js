describe("Компонент, отвечающий за добавление строк: ", function () {
    let $compile, $rootScope, $scope;
    let ctrl, element;

    beforeEach(() => {
        module('myApp');
        inject(function (_$compile_, _$rootScope_, _$httpBackend_) {
            _$httpBackend_.whenGET("./configs/res/ru.json").respond(null);

            $rootScope = _$rootScope_;
            $compile = _$compile_;

            $scope = $rootScope.$new();
            element = $compile('<adder on-add="onAdd(myString)"></adder>')($scope);
            $scope.$digest();
            ctrl = element.controller('adder');
        })
    });

    it('должен вызвать onCreate метод', function () {
        element.find("input").controller("ngModel").$setViewValue('test');
        $scope.onAdd = jasmine.createSpy("onAdd");
        let button = element.find("button", "add");
        button.triggerHandler('click');

        expect($scope.onAdd).toHaveBeenCalledWith("test");
    });
    it('должен вернуть false если строка не определена', function () {

        expect(ctrl.checkIfValid()).toBe(false);
    });
    it('должен вернуть false если строка пустая', function () {
        ctrl.userString = "";

        expect(ctrl.checkIfValid()).toBe(false);
    });
    it('должен вернуть true если строка не пустая', function () {
        ctrl.userString = "1";

        expect(ctrl.checkIfValid()).toBe(true);
    });
});