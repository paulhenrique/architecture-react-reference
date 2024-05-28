import DateServices from ".";

describe("DateServices", () => {
  it("convertDate", () => {
    const date = new Date();
    expect(DateServices.convertDate(date)).toBe(
      date.toISOString().split("T")[0]
    );
  });
});
