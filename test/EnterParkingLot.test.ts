import ParkingLot from "../src/core/entity/ParkingLot";
import ParkingLotRepositoryMemory from "../src/infra/repository/ParkingLotRepositoryMemory";
import EnterParkingLot from "../src/usecase/EnterParkingLot";
import GetParkingLot from "../src/usecase/GetParkingLot";

test("Should enter parking lot", async () => {
   
    const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory();
    const enterParkingLot = new EnterParkingLot(parkingLotRepositoryMemory);
    const getParkingLot = new GetParkingLot(parkingLotRepositoryMemory);

    const parkingLotBeforeEnter = getParkingLot.execute("shopping");
    expect((await parkingLotBeforeEnter).occupiedSpaces).toBe(0);
    await enterParkingLot.execute("shopping", "XXX-9992", new Date(2021, 10,12,10,1,1,0));
    const parkingLotAfterEnter = getParkingLot.execute("shopping");
    expect((await parkingLotAfterEnter).occupiedSpaces).toBe(1);
    expect(1).toBe(1);
});