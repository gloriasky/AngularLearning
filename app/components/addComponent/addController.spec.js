// describe("Компонент добавления строки: ", function () {
// // //     let ctrl, $componentController,$compile,$rootScope,$httpBackend;
// // //     beforeEach(() => {
// // //         module('components/addComponent/add.html');
// // //         inject(function (_$componentController_,_$compile_,_$rootScope_,_$httpBackend_) {
// // //         $componentController = _$componentController_;
// // //         $compile = _$compile_;
// // //         $rootScope = _$rootScope_;
// // //         $httpBackend = _$httpBackend_;
// // //     })});
// // //     it('должен вернуть false если строка не определена', function () {
// // //         ctrl = $componentController('adder');
// // //
// // //         expect(ctrl.checkIfValid()).toBe(false);
// // //     });
// // //     it('должен вернуть false если строка пустая', function () {
// // //         ctrl = $componentController('adder');
// // //         ctrl.userString = "";
// // //
// // //         expect(ctrl.checkIfValid()).toBe(false);
// // //     });
// // //     it('должен вернуть true если строка не пустая', function () {
// // //         ctrl = $componentController('adder');
// // //         ctrl.userString = "1";
// // //
// // //         expect(ctrl.checkIfValid()).toBe(true);
// // //     });
// // //     it('должен вызывать onAdd() метод главного компонента', function () {
// // //         $httpBackend.whenGET('./configs/res/ru.json').respond(null);
// // //         let $scope = $rootScope.$new();
// // //         let element = $compile('<adder></adder>')($scope);
// // //         $scope.$digest();
// // //         ctrl = element.controller('adder');
// // //         let spy = jasmine.createSpy();
// // //         element.find("input").controller("ngModel").$setViewValue('test');
// // //         ctrl.onCreate = spy;
// // //         var button = element.find("button");
// // //         button.triggerHandler('click');
// // //
// // //         expect(spy).toHaveBeenCalledWith({ input: "test" });
// // //

describe("Input component test", function () {
    var $compile, $rootScope, $scope;
    var ctrl, element;

    beforeEach(() => {
        module('myApp');
    });

    beforeEach(() => {
        module('components/addComponent/add.html');
    });

    beforeEach(inject(function (_$compile_, _$rootScope_, _$httpBackend_) {
        _$httpBackend_.whenGET("./configs/res/ru.json").respond({
            "title": "English",
            "noelements": "Array is empty!",
            "add": "Add",
            "onlystrings": "String contains only symbols.",
            "green": "Fresh",
            "yellow": "Lain",
            "red": "Rotten",
            "remove": "Remove",
            "reset": "Reset"
        });

        $rootScope = _$rootScope_;
        $compile = _$compile_;
        $scope = $rootScope.$new();
        element = $compile('<adder></adder>')($scope);
        $scope.$digest();
        ctrl = element.controller('adder');
    }));

    it('button add should call onCreate method', function () {
        var spy = jasmine.createSpy();
        element.find("input").controller("ngModel").$setViewValue('test');
        ctrl.onCreate = spy;
        var button = element.find("button");
        button.triggerHandler('click');

        expect(spy).toHaveBeenCalledWith({input: "test"});
    });
});