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
});