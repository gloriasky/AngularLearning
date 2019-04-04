describe('my service:', function () {
    let service;
    beforeEach(function () {
        module('myApp');
        inject(function (myService) {
        service = myService;
        })
    });
    it('инициация сервиса', function () {
        expect(service.strings).toBeDefined();
        expect(service.strings.length).toBe(0);
        expect(service.shouldStop).toBeDefined();
        expect(service.shouldStop).toBe(false);
    });
    it('должен добавлять элементы в массив', function () {
        service.addString('Hello world');

        expect(service.strings.length).toBe(1);
        expect(service.shouldStop).toBe(false);
    });
    it('должен удалять элемент с данным индексом из массива', function () {
        service.addString('Hello world');
        service.deleteString(0);

        expect(service.strings.length).toBe(0);
    });
    it('должен сбрасывать таймер у элемента с определенным индексом', function () {
        let d = new Date();
        d.setSeconds(d.getSeconds() - 65);
        service.strings[0] = {str: 'Hello world', color: "red", time: d};
        service.reset(0);

        expect(service.strings[0].color).toBe("green");
    });
    it('по прошествии 30 секунд должен изменить цвет элемента на желтый', function () {
        let d = new Date();
        d.setSeconds(d.getSeconds() - 30);
        service.strings[0] = {str: 'Hello world', color: "green", time: d};
        service.colorChange();

        expect(service.strings[0].color).toBe("yellow");
    });
    it('по прошествии 60 секунд должен изменить цвет элемента на красный', function () {
        let d = new Date();
        d.setSeconds(d.getSeconds() - 65);
        service.strings[0] = {str: 'Hello world', color: "green", time: d};
        service.colorChange();

        expect(service.strings[0].color).toBe("red");
    })
});