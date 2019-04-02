describe('my service test:', function () {
    let service;
    beforeEach(function () {
        angular.mock.module('myApp');
    });
    beforeEach(inject(function (myService) {
        service = myService;
    }));
    it('initial configs', function () {
        expect(service.strings).toBeDefined();
        expect(service.strings.length).toBe(0);
        expect(service.shouldStop).toBeDefined();
        expect(service.shouldStop).toBe(false);
    });
    it('adding element', function () {
        service.addString('Hello world');
        expect(service.strings.length).toBe(1);
        expect(service.shouldStop).toBe(false);
    });
    it('deleting element', function () {
        service.addString('Hello world');
        service.deleteString(0);
        expect(service.strings.length).toBe(0);
    });
    it('resetting the element', function () {
        let d = new Date();
        d.setSeconds(d.getSeconds() - 65);
        service.strings[0] = {str: 'Hello world', color: "red", time: d};
        service.onReset(0);
        expect(service.strings[0].color).toBe("green");
    });
    it('changing color to yellow', function () {
        let d = new Date();
        d.setSeconds(d.getSeconds() - 30);
        service.strings[0] = {str: 'Hello world', color: "green", time: d};
        service.colorChange();
        expect(service.strings[0].color).toBe("yellow");
    });
    it('changing color to red', function () {
        let d = new Date();
        d.setSeconds(d.getSeconds() - 65);
        service.strings[0] = {str: 'Hello world', color: "green", time: d};
        service.colorChange();
        expect(service.strings[0].color).toBe("red");
    })
});