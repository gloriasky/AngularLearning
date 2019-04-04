describe("List component: ", function () {
    let ctrl, $componentController;
    beforeEach(() => {
        module('myApp');
    });

    beforeEach(inject(function (_$componentController_) {
        $componentController = _$componentController_;
    }));

    it('должен вызвать onDelete() метод главного компонента', function () {
        let onDeleteSpy = jasmine.createSpy('onDelete');
        let bindings = {index: {}, onDelete: onDeleteSpy};
        ctrl = $componentController('list', null, bindings);
        ctrl.deleteString(3);

        expect(onDeleteSpy).toHaveBeenCalledWith({index: 3});
    });
    it('должен вызвать onReset() метод главного компонента', function () {
        let onResetSpy = jasmine.createSpy('onReset');
        let bindings = {index: {}, onReset: onResetSpy};
        ctrl = $componentController('list', null, bindings);
        ctrl.resetTimer(3);

        expect(onResetSpy).toHaveBeenCalledWith({index: 3});
    });
});