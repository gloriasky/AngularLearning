/**
 * @name myService
 * @module myApp
 *
 * Сервис для работы с данными
 *
 */
angular
    .module('myApp').service('myService', ['$translate', 'getNumbersFilter', function ($translate, getNumbersFilter) {
    /**
     * Массив для работы с объектами
     * @type {Array}
     */
    this.strings = [];
    /**
     * Переменная, отслеживающая когда надо отстановить интервал
     * @type {boolean}
     */
    this.shouldStop = true;
    /**
     * Добавление строки в массив
     * @param str
     */
    this.addString = (str) => {
        this.strings.push({str: str, color: "green", time: new Date(), strlabel: getNumbersFilter(str)});
        this.shouldStop = false;
    };
    /**
     * Удаление строки из массива
     * @param idx
     */
    this.deleteString = (idx) => {
        _.remove(this.strings,(element)=> {
            return _.indexOf(this.strings,element)===idx;
        });
        this.colorCheck();
    };
    /**
     * Сброс счетчика
     * @param index
     */
    this.reset = (index) => {
        this.strings[index].time = new Date();
        this.strings[index].color="green";
        this.shouldStop = false;
    };
    /**
     * Изменение цвета в соответсвии со временем, а также отслеживание выполнения условия для остановки интервала
     *
     */
    this.colorCheck = () => {
        let dateNow = new Date();
        this.shouldStop = _.every(this.strings,(str)=>{
            return str.color === "red";
        });
        if(!this.shouldStop) {
            _.each(this.strings, (element) => {
                if (element.color !== "red") {
                    let numOfSeconds = (dateNow - element.time) / 1000;
                    if (numOfSeconds >= 30 && numOfSeconds <= 60) {
                        element.color = "yellow";
                    } else if (numOfSeconds > 60) {
                        element.color = "red";
                    }
                }
            });
        }
    };
    /**
     * Функция для изменения лейбла после изменения языка
     */
    this.changeLanguage = () => {
        _.forEach(this.strings, (element) => {
            element.strlabel = getNumbersFilter(element.str);
        });
    }
}]);
