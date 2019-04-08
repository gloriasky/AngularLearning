describe("Компонент добавления строки: ", function () {
    let ctrl, $componentController;
    beforeEach(() => {
        module('myApp');
    });
    beforeEach(inject(function (_$componentController_) {
        $componentController = _$componentController_;
    }));
    it('должен вернуть false если строка не определена', function () {
        ctrl = $componentController('adder');

        expect(ctrl.checkIfValid()).toBe(false);
    });
    it('должен вернуть false если строка пустая', function () {
        ctrl = $componentController('adder');
        ctrl.userString = "";

        expect(ctrl.checkIfValid()).toBe(false);
    });
    it('должен вернуть true если строка не пустая', function () {
        ctrl = $componentController('adder');
        ctrl.userString = "1";

        expect(ctrl.checkIfValid()).toBe(true);
    });
    it('должен вызывать onAdd() метод главного компонента', function () {
        let onAddSpy = jasmine.createSpy('onAdd');
        let bindings = {myString: {}, onAdd: onAddSpy};
        ctrl = $componentController('adder', null, bindings);
        ctrl.userString = "12345";
        ctrl.addString();

        expect(onAddSpy).toHaveBeenCalledWith({myString: "12345"});
    });
});