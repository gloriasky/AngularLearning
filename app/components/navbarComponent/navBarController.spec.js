describe('Компонент, отвечающий за языки:', function () {
    let $scope;
    let ctrl, element;

    beforeEach(() => {
        module('myApp');
        inject(function (_$compile_, _$rootScope_, _$httpBackend_) {
            _$httpBackend_.whenGET("./configs/res/ru.json").respond(null);
            _$httpBackend_.whenGET("./configs/res/de.json").respond(null);
            _$httpBackend_.whenGET("./configs/res/en.json").respond(null);

            $scope = _$rootScope_.$new();
            element = _$compile_('<navbar></navbar>')($scope);
            $scope.$digest();
            ctrl = element.controller('navbar');
        })
    });

    it('должен корректно прочитать данные из файла', function () {

        expect(ctrl.languages).toEqual([
            {
                title: "Engilsh",
                name: "en"
            },
            {
                title: "Русский",
                name: "ru"
            },
            {
                title: "Deutsch",
                name: "de"
            }]);
    });

    it("должен проверить начальные настройки", function () {
        expect(ctrl.settingDisplay).toBeFalsy();
        expect(ctrl.welcome).toBe("")
    });

    it("после вызова метода settingDisplay должен стать true", function () {
        ctrl.display();

        expect(ctrl.settingDisplay).toBeTruthy();
    });
    it('должен вызвать display метод', function () {
        ctrl.display = jasmine.createSpy("display");
        let button = element.find("button", "setting");
        button.triggerHandler('click');

        expect(ctrl.display).toHaveBeenCalled();
    });
    it("не должен изначально отображать приветствие", function () {
        expect(element.html()).not.toContain("<div class=\"welcome\">{{\"hello\" | translate }}, {{$ctrl.welcome}}!</div>");
    });
    it("должен отобразить приветствие, если установлено имя", function () {
        ctrl.welcome = "Hello world";
        $scope.$digest();

        expect(element.html()).toContain("hello, Hello world!");
    });
});