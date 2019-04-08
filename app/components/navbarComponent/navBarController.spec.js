describe('Компонент, отвечающий за языки:', function () {
    let ctrl, $componentController;
    beforeEach(() => {
        module('myApp');
        inject(function (_$componentController_) {
            $componentController = _$componentController_;
        });
    });

    it('должен корректно прочитать данные из файла', function () {
        ctrl = $componentController('navbar');

        expect(ctrl.languages).toEqual([{
            title: "Engilsh",
            name: "en"
        }, {
            title: "Русский",
            name: "ru"
        }, {
            title: "Deutsch",
            name: "de"
        }]);
    });
    it('должен изменять язык при переключении', function () {
        let onLanguageChangeSpy = jasmine.createSpy('onLanguageChange');
        let bindings = {changeLanguage: onLanguageChangeSpy};
        ctrl = $componentController('navbar', null, bindings);
        ctrl.changeLanguage({title: "Русский", name: "ru"});

        expect(onLanguageChangeSpy).toHaveBeenCalled();
    })
});