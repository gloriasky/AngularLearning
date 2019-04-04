describe('Number Filter', function () {
    let getNumberFilter;
    beforeEach(function () {
        module('myApp');
        inject(function (getNumbersFilter) {
            getNumberFilter = getNumbersFilter;
        })
    });
    it('should return number value for string that contains numbers', function () {
        expect(getNumberFilter('1test1')).toBe('11');
    });
    it('should return number value for string that contains only numbers', function () {
        expect(getNumberFilter('154654654')).toBe('154654654');
    });
    it('should return string for string if it doesn\'t contain numbers', function () {
        expect(getNumberFilter('test')).toBe('string');
    });
});