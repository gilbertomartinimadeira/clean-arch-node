export default class ParkedCar {
    date: Date;
    plate: string;
    code: string;
    /**
     *
     */
    constructor(code: string, plate: string, date: Date) {
        if(/[^A-Za-z]{3}-[0-9]{4}/.test(plate)) throw new Error('Invalid Plate');

        this.code = code;
        this.plate = plate;
        this.date = date;   
    }
}