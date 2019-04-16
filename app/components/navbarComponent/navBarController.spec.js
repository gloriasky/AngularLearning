describe('Компонент, отвечающий за языки:', function () {
    let $compile, $rootScope, $scope;
    let ctrl, element;

    beforeEach(() => {
        module('myApp');
        inject(function (_$compile_, _$rootScope_, _$httpBackend_) {
            _$httpBackend_.whenGET("./configs/res/ru.json").respond(null);
            _$httpBackend_.whenGET("./configs/res/de.json").respond(null);
            _$httpBackend_.whenGET("./configs/res/en.json").respond(null);
            $rootScope = _$rootScope_;
            $compile = _$compile_;
            $scope = $rootScope.$new();
            element = $compile('<navbar></navbar>')($scope);
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
    it('должен изменять язык при переключении', function () {
        let spy = jasmine.createSpy();
        ctrl.onLanguageChange = spy;
        $scope.$digest();
        let button = element.find("a", "en");
        button.triggerHandler("click");


        expect(spy).toHaveBeenCalledWith({
            title: "Engilsh",
            name: "en"
        });
    });
});