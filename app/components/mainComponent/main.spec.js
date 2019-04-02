describe("Main component", function () {
    let ctrl;
    beforeEach(() => {
        module('myApp');
    });

    beforeEach(inject(function (_$componentController_) {
        ctrl = _$componentController_('main', null);
    }));

    it('should be defined', function () {
        expect(ctrl).toBeDefined();
    });
    it('have defined array', function () {
        expect(ctrl.strings).toBeDefined();
        expect(ctrl.strings.length).toBe(0);
    });
    it('should add element with the help of service', function () {
        ctrl.onAdd("113232321");
        expect(ctrl.strings.length).toBe(1);
    });
    it('should delete element with the help of service', function () {
        ctrl.onAdd("113232321");
        ctrl.onDelete(0);
        expect(ctrl.strings.length).toBe(0);
    });

    it('should reset element with the help of service', function () {
        let d = new Date();
        d.setSeconds(d.getSeconds() - 65);
        ctrl.strings[0] = {str: 'Hello world', color: "red", time: d};
        ctrl.onReset(0);
        expect(ctrl.strings[0].color).toBe("green");
    });
    it('.colorChange shouldn\'t be defined initially', function () {
        expect(ctrl.colorChange).not.toBeDefined();
    });
    it('should start interval', function () {
        ctrl.onAdd("mgrngrjngjrngw");
        expect(ctrl.colorChange).toBeDefined();
    })
});