import ParkingLot from "../src/core/entity/ParkingLot";
import ParkingLotRepositoryMemory from "../src/infra/repository/ParkingLotRepositoryMemory";
import EnterParkingLot from "../src/usecase/EnterParkingLot";
import GetParkingLot from "../src/usecase/GetParkingLot";

test("Should enter parking lot", async () => {
   
    const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory();
    const enterParkingLot = new EnterParkingLot(parkingLotRepositoryMemory);
    const getParkingLot = new GetParkingLot(parkingLotRepositoryMemory);
    const parkingLotBeforeEnter = await getParkingLot.execute("shopping");
    expect(parkingLotBeforeEnter.occupiedSpaces).toBe(0);
    await enterParkingLot.execute("shopping", "XXX-9992", new Date(2021, 10,12,10,1,1,0));
    const parkingLotAfterEnter = await getParkingLot.execute("shopping");
    expect(parkingLotAfterEnter.occupiedSpaces).toBe(1);
});


test.skip("Should be closed", async () => {
   
    const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory();
    const enterParkingLot = new EnterParkingLot(parkingLotRepositoryMemory);
    const getParkingLot = new GetParkingLot(parkingLotRepositoryMemory);
    const parkingLotBeforeEnter = await getParkingLot.execute("shopping");
    expect(parkingLotBeforeEnter.occupiedSpaces).toBe(0);
    await enterParkingLot.execute("shopping", "XXX-9992", new Date(2021, 10,12,1,1,1,0));
    const parkingLotAfterEnter = await getParkingLot.execute("shopping");
    expect(parkingLotAfterEnter.occupiedSpaces).toBe(1);
});

test.skip("Should be full", async () => {
   
    const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory();
    const enterParkingLot = new EnterParkingLot(parkingLotRepositoryMemory);
    const getParkingLot = new GetParkingLot(parkingLotRepositoryMemory);
    const parkingLotBeforeEnter = await getParkingLot.execute("shopping");
    expect(parkingLotBeforeEnter.occupiedSpaces).toBe(0);
    await enterParkingLot.execute("shopping", "XXX-9991", new Date(2021, 10,12,10,1,1,0));
    await enterParkingLot.execute("shopping", "XXX-9992", new Date(2021, 10,12,10,1,1,0));
    await enterParkingLot.execute("shopping", "XXX-9993", new Date(2021, 10,12,10,1,1,0));
    await enterParkingLot.execute("shopping", "XXX-9994", new Date(2021, 10,12,10,1,1,0));
    await enterParkingLot.execute("shopping", "XXX-9995", new Date(2021, 10,12,10,1,1,0));
    await enterParkingLot.execute("shopping", "XXX-9996", new Date(2021, 10,12,10,1,1,0));
    const parkingLotAfterEnter = await getParkingLot.execute("shopping");
    expect(parkingLotAfterEnter.isFull()).toBe(true);
});