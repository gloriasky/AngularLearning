describe("List component", function () {
    let ctrl;
    beforeEach(() => {
        module('myApp');
    });

    beforeEach(inject(function (_$componentController_) {
        ctrl = _$componentController_('list', null, {
            onDelete: (index) => {
                return index;
            },
            onReset: (index) => {
                return index;
            }
        });
    }));

    it('should be defined', function () {
        expect(ctrl).toBeDefined();
    });
    it('should call onDelete building', function () {
        expect(ctrl.deleteString(5)).toEqual({index: 5});
    });
    it('should call onReset building', function () {
        expect(ctrl.resetTimer(5)).toEqual({index: 5});
    });
});