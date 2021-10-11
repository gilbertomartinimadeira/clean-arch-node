import ParkingLot from "../src/core/entity/ParkingLot";
import ParkingLotRepositoryMemory from "../src/infra/repository/ParkingLotRepositoryMemony";
import EnterParkingLot from "../src/usecase/EnterParkingLot";

test("Should enter parking lot", async () => {
   
    const repository = new ParkingLotRepositoryMemory();

    const enterParkingLot = new EnterParkingLot(repository);

    const parkingLot = await enterParkingLot.execute("shopping");

    expect(parkingLot.code).toBe("shopping");

});