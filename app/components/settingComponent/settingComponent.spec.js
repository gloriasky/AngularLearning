describe("Тестирование диалогового окна: ", function () {
    let element, $scope, ctrl;

    beforeEach(() => {
        module('myApp');
        inject(function (_$rootScope_, _$compile_, _$httpBackend_) {
            _$httpBackend_.whenGET("").respond({});
            $scope = _$rootScope_.$new();
            element = _$compile_(`<setting-component display="settingDisplay" languages="languages" welcome="welcome" on-language-change="onLanguageChange(lang)"></setting-component>`)($scope);
            $scope.$digest();
            ctrl = element.controller("settingComponent");
        })
    });


    it('должен передать выбранный язык в родительский компонент', function () {
        $scope.onLanguageChange = jasmine.createSpy("onLanguageChange");
        element.find("select").controller("ngModel").$setViewValue({title: "Engilsh", name: "en"});
        let button = element.find("button", "submit");
        button.triggerHandler("click");

        expect($scope.onLanguageChange).toHaveBeenCalledWith({title: "Engilsh", name: "en"});
    });
    it("должен вызвать метод при нажатии кнопки", function () {
        ctrl.changeLanguage = jasmine.createSpy("changeLanguage");
        element.find("select").controller("ngModel").$setViewValue({title: 'Русский', name: 'ru'});
        let button = element.find("button", "submit");
        button.triggerHandler("click");

        expect(ctrl.changeLanguage).toHaveBeenCalled();
    });
    it("начальные настройки", function () {
        expect(ctrl.currentLanguage).toEqual({title: "Русский", name: "ru"});
    });
    it("должен закрыть окно при нажатии кнопки", function () {
        let close = element.find("div", "close");
        ctrl.hide = jasmine.createSpy("hide()");
        close.triggerHandler("click");

        expect(ctrl.hide).toHaveBeenCalled();
        expect(ctrl.input).toBe("");
        expect($scope.settingDisplay).toBeFalsy();
    });
    it("должен обрабатывать нажатие кнопки submit", function () {
        let submit = element.find("button", "submit");
        ctrl.submit = jasmine.createSpy("submit()");
        ctrl.hide = jasmine.createSpy("hide()");
        submit.triggerHandler("click");

        expect(ctrl.submit).toHaveBeenCalled();
        expect(ctrl.hide).toHaveBeenCalled();
    });

    it("должен обрабатывать нажатие кнопки cancel", function () {
        let cancel = element.find("button", "cancel");
        ctrl.reset = jasmine.createSpy("reset()");
        ctrl.hide = jasmine.createSpy("hide()");
        cancel.triggerHandler("click");

        expect(ctrl.reset).toHaveBeenCalled();
        expect(ctrl.hide).toHaveBeenCalled();
    });
    it("fgatgerg", function () {
        element.find("input", "inputname").controller("ngModel").$setViewValue("testing");
        element.find("button", "submit").triggerHandler("click");

        $scope.$digest();

        expect($scope.welcome).toBe("testing");

    })

});