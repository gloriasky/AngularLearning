describe('Module test', function () {
    let myApp;
    beforeEach(function () {
        myApp = angular.module('myApp');
    });
    it('loading main module', function () {
        expect(myApp).toBeDefined();
    })
});