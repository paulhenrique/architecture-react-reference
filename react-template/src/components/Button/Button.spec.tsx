import { render } from "@testing-library/react";
import { Button } from "./Button";
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

describe("Accessibility AppLayout Tests", () => {
  it("Should no have accessibility violations", async () => {
    const { container } = render(<Button>Vai teia</Button>);
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("Button test", () => {
  it("renders without crashing", () => {
    render(<Button>Content</Button>);
  });

  it("should render successfully", () => {
    const { baseElement } = render(<Button>Vai teia</Button>);
    expect(baseElement).toBeTruthy();
  });
});
