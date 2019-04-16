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
            element = $compile('<adder on-add="$ctrl.onAdd(myString)"></adder>')($scope);
            $scope.$digest();
            ctrl = element.controller('adder');
        })
    });

    it('должен вызвать onCreate метод', function () {
        let spy = jasmine.createSpy();
        element.find("input").controller("ngModel").$setViewValue('test');
        ctrl.onAdd = spy;
        let button = element.find("button");
        button.triggerHandler('click');

        expect(spy).toHaveBeenCalledWith({myString: "test"});
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