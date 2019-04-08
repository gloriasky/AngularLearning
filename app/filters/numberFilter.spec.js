describe('Числовой фильтр: ', function () {
    let getNumberFilter;
    beforeEach(function () {
        module('myApp');
        inject(function (getNumbersFilter) {
            getNumberFilter = getNumbersFilter;
        })
    });
    it('должен возвращать только цифры из строки', function () {
        expect(getNumberFilter('1test1')).toBe('11');
    });

    it('должен возвращать ключ \'string\' для строки, которая не содержит цифр', function () {
        expect(getNumberFilter('test')).toBe('string');
    });
});