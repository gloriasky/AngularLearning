describe("Add component", function () {
    let ctrl;
    beforeEach(() => {
        module('myApp');
    });

    beforeEach(inject(function (_$componentController_) {
        ctrl = _$componentController_('adder', null, {
            onAdd: (text) => {
                return true;
            }
        });
    }));

    it('should be defined', function () {
        expect(ctrl).toBeDefined();
    });
    it('should call onAdd building', function () {
        expect(ctrl.addString()).toBe(true);
    });
});