import { render } from "@testing-library/react";
import Station from "./Station";
import Conector from "./Conector";

describe("Station test", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Station />);
    expect(baseElement).toBeTruthy();
  });
});

describe("Conector test", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Conector />);
    expect(baseElement).toBeTruthy();
  });
});
