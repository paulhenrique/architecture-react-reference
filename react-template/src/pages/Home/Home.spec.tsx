import { render } from "@testing-library/react";
import { Home } from "./Home";
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

describe("Accessibility AppLayout Tests", () => {
  it("Should no have accessibility violations", async () => {
    const { container } = render(<Home />);
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("Home test", () => {
  it("renders without crashing", () => {
    render(<Home />);
  });

  it("should render successfully", () => {
    const { baseElement } = render(<Home />);
    expect(baseElement).toBeTruthy();
  });
});
