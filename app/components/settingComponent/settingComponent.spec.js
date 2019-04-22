describe("Тестирование компонента настроек", function () {
    let element, $scope, service;

    beforeEach(() => {
        module('myApp');
        inject(function (_$rootScope_, _$compile_, _$httpBackend_, myService) {
            service = myService;
            _$httpBackend_.whenGET("").respond({});
            $scope = _$rootScope_.$new();
            element = _$compile_("<setting-component on-language-change='onLanguageChange()'></setting-component>")($scope);
            $scope.$digest();
        })
    });


    it('должен передать данные в родительский компонент', function () {
        $scope.onLanguageChange = jasmine.createSpy("changeLanguage");
        element.find("select").controller("ngModel").$setViewValue({title: 'Русский', name: 'ru'});
        let button = element.find("button", "okbutton");
        button.triggerHandler("click");
        expect($scope.onLanguageChange).toHaveBeenCalled();
    })

});