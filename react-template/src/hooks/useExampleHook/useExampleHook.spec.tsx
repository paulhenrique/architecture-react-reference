import { renderHook } from "@testing-library/react-hooks";

import { useExampleHook } from ".";

describe("useExampleHook Test", () => {
  it("should return the example property", () => {
    const { result } = renderHook(() =>
      useExampleHook({ fromProps: "example" })
    );
    expect(result.current.exampleProperty).toBe("exampleexample");
  });
});
