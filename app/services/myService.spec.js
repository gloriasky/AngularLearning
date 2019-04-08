describe('Сервис, отвечающий за хранение и обработку данных:', function () {
    let myService;
    beforeEach(function () {
        module('myApp');
        inject(function (_myService_) {
            myService = _myService_;
        })
    });
    it('начальные настройки', function () {
        expect(myService.strings).toBeDefined();
        expect(myService.strings.length).toBe(0);
        expect(myService.shouldStop).toBeDefined();
        expect(myService.shouldStop).toBe(true);
    });
    it('должен добавлять элементы в массив', function () {
        myService.addString('Hello world');

        expect(myService.strings.length).toBe(1);
        expect(myService.shouldStop).toBe(false);
    });
    it('должен удалять элемент с данным индексом из массива', function () {
        myService.addString('Hello world');
        myService.deleteString(0);

        expect(myService.strings.length).toBe(0);
        expect(myService.shouldStop).toBe(true);
    });
    it('должен сбрасывать таймер у элемента с определенным индексом', function () {
        let d = new Date();
        d.setSeconds(d.getSeconds() - 65);
        myService.strings[0] = {str: 'Hello world', color: "red", time: d};
        myService.reset(0);

        expect(myService.strings[0].color).toBe("green");
        expect(myService.shouldStop).toBe(false);
    });
    it('по прошествии 30 секунд должен изменить цвет элемента на желтый', function () {
        let d = new Date();
        d.setSeconds(d.getSeconds() - 30);
        myService.strings[0] = {str: 'Hello world', color: "green", time: d};
        myService.colorCheck();

        expect(myService.strings[0].color).toBe("yellow");
    });
    it('по прошествии 60 секунд должен изменить цвет элемента на красный', function () {
        let d = new Date();
        d.setSeconds(d.getSeconds() - 65);
        myService.strings[0] = {str: 'Hello world', color: "green", time: d};
        myService.colorCheck();

        expect(myService.strings[0].color).toBe("red");
    })
});