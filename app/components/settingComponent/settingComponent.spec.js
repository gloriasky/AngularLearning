describe("Тестирование диалогового окна: ", function () {
    let element, $scope, ctrl;

    beforeEach(() => {
        module('myApp');
        inject(function (_$rootScope_, _$compile_, _$httpBackend_) {
            _$httpBackend_.whenGET("").respond({});
            $scope = _$rootScope_.$new();
            element = _$compile_(`<setting-component current-language="currentLanguage" languages="languages"
                   welcome="welcome" on-change="onChange(lang,welcome)" on-close="onClose()"></setting-component>`)($scope);
            $scope.$digest();
            ctrl = element.controller('settingComponent');
        })
    });
    describe("hide", function () {
        it("hide", function () {
            ctrl.hide = jasmine.createSpy("hide()");
            let close = element.find("div", "close");
            close.triggerHandler("click");

            expect(ctrl.hide).toHaveBeenCalled();
        });
        it("close", function () {
            $scope.onClose = jasmine.createSpy("onClose()");
            ctrl.hide();

            expect($scope.onClose).toHaveBeenCalled();
        });
    });
    describe("reset", function () {
        it("reset1", function () {
            ctrl.reset = jasmine.createSpy("reset()");
            let reset = element.find("button", "cancel");
            reset.triggerHandler("click");

            expect(ctrl.reset).toHaveBeenCalled();
        });
        it("name - reset", function () {
            element.find("input").controller("ngModel").$setViewValue('test');

            expect(ctrl.welcome).toBe("test");

            let reset = element.find("button", "cancel");
            reset.triggerHandler("click");

            expect(ctrl.welcome).toBe("");
        });
        it("changeInfo - reset", function () {
            ctrl.changeInfo = jasmine.createSpy("changeInfo");
            let reset = element.find("button", "cancel");
            reset.triggerHandler("click");

            expect(ctrl.changeInfo).toHaveBeenCalled();
        })
        it("close - resset", function () {
            ctrl.hide = jasmine.createSpy("hide");
            let reset = element.find("button", "cancel");
            reset.triggerHandler("click");

            expect(ctrl.hide).toHaveBeenCalled();
        })
    });
    describe("submit", function () {
        it("submit", function () {
            ctrl.submit = jasmine.createSpy("submit1");
            let submit = element.find("button", "cancel");
            submit.triggerHandler("click");

            expect(ctrl.submit).toHaveBeenCalled();
        });
        it("changeInfo", function () {
            ctrl.changeInfo = jasmine.createSpy("changeInfo");
            let submit = element.find("button", "cancel");
            submit.triggerHandler("click");

            expect(ctrl.changeInfo).toHaveBeenCalled();
        });
        it("close - submit", function () {
            ctrl.hide = jasmine.createSpy("hide");
            let submit = element.find("button", "cancel");
            submit.triggerHandler("click");

            expect(ctrl.hide).toHaveBeenCalled();
        })
    });
    it("changeInfo", function () {
        element.find("input").controller("ngModel").$setViewValue('test');
        element.find("select").controller("ngModel").$setViewValue({
            title: "Deutsch",
            name: "de"
        });
        $scope.onChange = jasmine.createSpy("onChange()");
        ctrl.changeInfo();

        expect($scope.onChange).toHaveBeenCalledWith({title: "Deutsch", name: "de"}, "test");
    })

});
