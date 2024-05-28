import redeEletricaSlice, { setExample } from ".";

// Unit tests
describe("RedeEletrica slice", () => {
  test("should update the example state when setExample is dispatched", () => {
    const initialState = { example: "Initial example" };
    const updatedState = redeEletricaSlice(
      initialState,
      setExample("Updated example")
    );
    expect(updatedState).toEqual({ example: "Updated example" });
  });
});
