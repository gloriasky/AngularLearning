describe('Language component:', function () {
    let ctrl;
    beforeEach(() => {
        module('myApp');
    });

    beforeEach(inject(function (_$componentController_) {
        ctrl = _$componentController_('navbar', null, {});
    }));

    it('should be defined', function () {
        expect(ctrl).toBeDefined();
    });

    it('languages should be initialized', function () {
        expect(ctrl.languages).toBeDefined();
        expect(ctrl.languages.length).not.toBe(0);
    });
});