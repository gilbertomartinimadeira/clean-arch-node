import ParkingLot from "../src/core/entity/ParkingLot";
import ParkingLotRepositoryMemory from "../src/infra/repository/ParkingLotRepositoryMemony";
import EnterParkingLot from "../src/usecase/EnterParkingLot";

test("Should enter parking lot", async () => {
   
    const repository = new ParkingLotRepositoryMemory();
    const enterParkingLot = new EnterParkingLot(repository);
    await enterParkingLot.execute("shopping", "XXX-9992", new Date(2021, 10,12,3,0,0));
});