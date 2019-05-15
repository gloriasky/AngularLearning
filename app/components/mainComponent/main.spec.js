describe("Главный компонент: ", function () {

    let $compile, $rootScope, $scope, myService, $interval;
    let ctrl, element;

    beforeEach(() => {
        module('myApp');
        inject(function (_$compile_, _$rootScope_, _$httpBackend_, _myService_, _$interval_) {
            _$httpBackend_.whenGET("./configs/res/ru.json").respond(null);

            $rootScope = _$rootScope_;
            $compile = _$compile_;
            myService = _myService_;
            $interval = _$interval_;

            $scope = $rootScope.$new();
            element = $compile('<main></main>')($scope);
            $scope.$digest();
            ctrl = element.controller('main');
        })
    });
    it('should w,fewfefwe', function () {
        ctrl.getFilterObj("text", "green");

        expect(ctrl.filterObject).toEqual({color: "green", text: "text"})
    });
    it('должен вызвать addString(text) метод сервиса', function () {
        spyOn(myService, 'addString');
        let spy = jasmine.createSpy();
        ctrl.startInterval = spy;
        ctrl.onAdd("12345678");

        expect(myService.addString).toHaveBeenCalledWith("12345678");
        expect(spy).toHaveBeenCalled();
    });

    it('должен вызвать deleteString(index) метод сервиса', function () {
        spyOn(myService, 'deleteString');
        ctrl.onDelete(3);

        expect(myService.deleteString).toHaveBeenCalledWith(3);
    });

    it('должен вызвать reset(index) метод сервиса', function () {
        spyOn(myService, 'reset');
        let spy = jasmine.createSpy();
        ctrl.startInterval = spy;
        ctrl.onReset(0);

        expect(myService.reset).toHaveBeenCalledWith(0);
        expect(spy).toHaveBeenCalled();
    });

    it('должен начать интервал при добавлении элемента', function () {

        ctrl.onAdd("mgrngrjngjrngw");

        expect(ctrl.colorChangeInterval).toBeDefined();
        expect(myService.shouldStop).toBe(false);
    });
    it('должен начать интервал при сбрасывании таймера  элемента', function () {
        ctrl.onAdd("23456");
        ctrl.strings[0].color = "red";
        $interval.cancel(ctrl.colorChangeInterval);
        myService.colorCheck();

        expect(myService.shouldStop).toBeTruthy();

        ctrl.onReset(0);

        expectAsync(ctrl.colorChangeInterval).toBeResolved();
        expect(myService.shouldStop).toBe(false);
    });

    it('интервал должен быть неопределен при инициализации компонента', inject(function () {

        expect(ctrl.colorChangeInterval).not.toBeDefined();
    }));

});
