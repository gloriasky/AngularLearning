describe("Главный компонент: ", function () {
    let ctrl, $componentController, myService, $interval;
    beforeEach(() => {
        module('myApp');
        inject(function (_$componentController_, _myService_, _$interval_) {
            $componentController = _$componentController_;
            myService = _myService_;
            $interval = _$interval_;
        })
    });

    it('должен вызвать addString(text) метод сервиса', function () {
        spyOn(myService, 'addString');
        let startIntervalSpy = jasmine.createSpy('startInterval');
        let bindings = {startInterval: startIntervalSpy};
        ctrl = $componentController('main', null, bindings);
        ctrl.onAdd("12345678");

        expect(myService.addString).toHaveBeenCalledWith("12345678");
        expect(startIntervalSpy).toHaveBeenCalled();
    });

    it('должен вызвать deleteString(index) метод сервиса', function () {
        spyOn(myService, 'deleteString');
        ctrl = $componentController('main');
        ctrl.onDelete(3);

        expect(myService.deleteString).toHaveBeenCalledWith(3);
    });

    it('должен вызвать reset(index) метод сервиса', function () {
        spyOn(myService, 'reset');
        let startIntervalSpy = jasmine.createSpy('startInterval');
        let bindings = {startInterval: startIntervalSpy};
        ctrl = $componentController('main', null, bindings);
        ctrl.onReset(0);

        expect(myService.reset).toHaveBeenCalledWith(0);
        expect(startIntervalSpy).toHaveBeenCalled();
    });

    it('должен начать интервал при добавлении элемента', function () {
        ctrl = $componentController('main');
        ctrl.onAdd("mgrngrjngjrngw");

        expect(ctrl.colorChangeInterval).toBeDefined();
        expect(myService.shouldStop).toBe(false);
    });
    it('должен начать интервал при сбрасывании таймера  элемента', function () {
        ctrl = $componentController('main');
        ctrl.onAdd("23456");
        ctrl.strings[0].color = "red";
        $interval.cancel(ctrl.colorChangeInterval);
        myService.colorCheck();

        expect(myService.shouldStop).toBeTruthy();

        ctrl.onReset(0);

        expectAsync(ctrl.colorChangeInterval).toBeResolved();
        expect(myService.shouldStop).toBe(false);
    });

    it('должен обратиться к функции colorCheck()', function () {
        spyOn(myService, 'colorCheck');
        ctrl = $componentController('main');
        ctrl.onAdd("12345y7");

        expect(myService.colorCheck).toHaveBeenCalled();
    });
    it('интервал должен быть неопределен при инициализации компонента', inject(function () {
        ctrl = $componentController('main');

        expect(ctrl.colorChangeInterval).not.toBeDefined();
    }));

});