import ParkingLot from "../core/entity/ParkingLot";
import ParkingLotRepository from "../core/repository/ParkingLotRepository";

export default class EnterParkingLot{
    parkingLotRepository: ParkingLotRepository;
    
    constructor(parkingLotRepository : ParkingLotRepository) {
            this.parkingLotRepository = parkingLotRepository;
    }

    async execute (code: string) {
        const parkingLot = await this.parkingLotRepository.getParkingLot(code);//. new ParkingLot("shopping", 100, 8,22);
        return parkingLot;
    }
}