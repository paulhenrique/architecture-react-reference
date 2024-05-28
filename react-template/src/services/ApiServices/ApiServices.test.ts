import ApiServices from ".";

describe("ApiServices", () => {
  it("O ApiServices possui o método find", () => {
    expect(ApiServices.find).toBeDefined();
  });

  it("O ApiServices possui o método create", () => {
    expect(ApiServices.create).toBeDefined();
  });
});

describe("create function", () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ message: "Success" }),
      })
    );
  });

  test("should make a POST request with the correct endpoint and data", async () => {
    const fakeEndpoint = "https://example.com/api";
    const fakeData = { key: "value" };

    await ApiServices.create(fakeEndpoint, fakeData);

    expect(global.fetch).toHaveBeenCalledWith(fakeEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fakeData),
    });
  });

  test("should return the data response from the server", async () => {
    const fakeEndpoint = "https://example.com/api";
    const fakeData = { key: "value" };

    const result = await ApiServices.create(fakeEndpoint, fakeData);

    expect(result).toEqual({ message: "Success" });
  });
});
