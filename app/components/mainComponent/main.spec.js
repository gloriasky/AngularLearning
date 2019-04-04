describe("Main component: ", function () {
    let ctrl, $componentController;
    beforeEach(() => {
        module('myApp');
    });

    beforeEach(inject(function (_$componentController_) {
        $componentController = _$componentController_;
    }));

    it('должен вызвать addString(text) метод сервиса', function () {
        let onAddSpy = jasmine.createSpy('onAdd');
        let bindings = {onAdd: onAddSpy};
        ctrl = $componentController('main', null, bindings);
        ctrl.onAdd("4567890");

        expect(onAddSpy).toHaveBeenCalledWith("4567890");
    });
    it('должен вызвать deleteString(index) метод сервиса', function () {
        let onDeleteSpy = jasmine.createSpy('onDelete');
        let bindings = {onDelete: onDeleteSpy};
        ctrl = $componentController('main', null, bindings);
        ctrl.onDelete(3);

        expect(onDeleteSpy).toHaveBeenCalledWith(3);
    });

    it('должен вызвать reset(index) метод сервиса', function () {
        let onResetSpy = jasmine.createSpy('onReset');
        let bindings = {onReset: onResetSpy};
        ctrl = $componentController('main', null, bindings);
        ctrl.onReset(3);

        expect(onResetSpy).toHaveBeenCalledWith(3);
    });

    it('should start interval', function () {
        ctrl.onAdd("mgrngrjngjrngw");
        expect(ctrl.colorChange).toBeDefined();
    });
    it('should stop interval', function () {

    });
});