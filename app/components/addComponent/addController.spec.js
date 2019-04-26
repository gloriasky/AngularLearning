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
    it('кнопка добавления должна быть неактивна, если строка пустая', function () {
        element.find("input").controller("ngModel").$setViewValue('');
        let button = element.find("button", "add");

        expect(button.attr('disabled')).toBeTruthy();
    });
    it('кнопка добавления должна быть неактивна, если в строке только 1 символ, function ()', function () {
    element.find("input").controller("ngModel").$setViewValue('1');
    $scope.$digest();
    let button = element.find("button", "add");

    expect(button.attr('disabled')).toBeTruthy();
    });
it('кнопка добавления должна быть неактивна, если в строке только 2 символа', function () {
    element.find("input").controller("ngModel").$setViewValue('12');
    $scope.$digest();
    let button = element.find("button", "add");

    expect(button.attr('disabled')).toBeTruthy();
    });
it('кнопка добавления должна быть неактивна, если в строке 3 и больше символов', function () {
    element.find("input").controller("ngModel").$setViewValue('1234');
    $scope.$digest();
    let button = element.find("button", "add");

    expect(button.attr('disabled')).toBeFalsy();
})
});