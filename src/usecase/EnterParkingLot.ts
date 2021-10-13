import ParkedCar from "../core/entity/ParkedCar";
import ParkingLotRepository from "../core/repository/ParkingLotRepository";

export default class EnterParkingLot{
    parkingLotRepository: ParkingLotRepository;
    
    constructor(parkingLotRepository : ParkingLotRepository) {
            this.parkingLotRepository = parkingLotRepository;
    }

    async execute (code: string, plate: string, date: Date) {
        const parkingLot = await this.parkingLotRepository.getParkingLot(code);//. new ParkingLot("shopping", 100, 8,22);
        const parkedCar = new ParkedCar(code, plate, date);
        
        if (!parkingLot.isOpen(parkedCar.date)) throw new Error('The parking lot is closed');
        if(parkingLot.isFull()) throw new Error('The Parking lot is full');
        
        this.parkingLotRepository.saveParkedCar(parkedCar.code, parkedCar.plate, parkedCar.date);
        return parkingLot;
    }
}