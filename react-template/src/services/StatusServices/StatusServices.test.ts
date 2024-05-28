import StatusServices from ".";

describe("StatusServices", () => {
  it("isStatusAvailable", () => {
    expect(StatusServices.isStatusAvailable("AVAILABLE")).toBe(true);
    expect(StatusServices.isStatusAvailable("IN_RECHARGE")).toBe(false);
    expect(StatusServices.isStatusAvailable("UNAVAILABLE")).toBe(false);
  });

  it("isStatusInCharge", () => {
    expect(StatusServices.isStatusInCharge("AVAILABLE")).toBe(false);
    expect(StatusServices.isStatusInCharge("IN_RECHARGE")).toBe(true);
    expect(StatusServices.isStatusInCharge("UNAVAILABLE")).toBe(false);
  });

  it("isStatusUnavailable", () => {
    expect(StatusServices.isStatusUnavailable("AVAILABLE")).toBe(false);
    expect(StatusServices.isStatusUnavailable("IN_RECHARGE")).toBe(false);
    expect(StatusServices.isStatusUnavailable("UNAVAILABLE")).toBe(true);
  });
});
