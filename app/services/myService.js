/**
 * @name myService
 * @module myApp
 *
 * Сервис для работы с данными
 *
 */
angular
    .module('myApp').service('myService', function () {
    this.strings = [];
    this.shouldStop = false;
    /**
     * Добавление строки в массив
     * @param str
     */
    this.addString = (str) => {
        console.log("service:  Adding string");
        this.strings.push({str: str, color: "green",time: new Date()});
        this.shouldStop = false;
    };
    /**
     * Удаление строки из массива
     * @param idx
     */
    this.deleteString = (idx) => {
        _.remove(this.strings,(element)=> {
            return _.indexOf(this.strings,element)===idx;
        })
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
     * change!
     */
    this.colorChange = () => {
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
    }
});
