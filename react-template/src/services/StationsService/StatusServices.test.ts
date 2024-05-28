import StationServices from ".";

describe("StationServices", () => {
  test("O StationServices possui um método chamado getStations", () => {
    expect(StationServices.getStations).toBeDefined();
  });
});
