import ParkedCar from "../../core/entity/ParkedCar";
import ParkingLot from "../../core/entity/ParkingLot";
import ParkingLotRepository from "../../core/repository/ParkingLotRepository";

export default class ParkingLotRepositoryMemory implements ParkingLotRepository {
    
    parkingLots = [
        new ParkingLot("shopping", 5,8,22 )
    ];
    parkedCars = [];

    getParkingLot(code: string): Promise<ParkingLot> {
        return Promise.resolve(this.parkingLots.find(parkingLot => parkingLot.code === code ));
    }

    saveParkedCar(code: string, plate: string, date: Date) : void {
        this.parkedCars.push({code, plate, date});
    }


}